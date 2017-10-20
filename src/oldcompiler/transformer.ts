/// <reference path="visitor.ts" />
/// <reference path="transformers/utilities.ts" />
/// <reference path="transformers/ts.ts" />
/// <reference path="transformers/转换CTS.ts" />
/// <reference path="transformers/jsx.ts" />
/// <reference path="transformers/esnext.ts" />
/// <reference path="transformers/es2017.ts" />
/// <reference path="transformers/es2016.ts" />
/// <reference path="transformers/es2015.ts" />
/// <reference path="transformers/generators.ts" />
/// <reference path="transformers/es5.ts" />
/// <reference path="transformers/module/module.ts" />
/// <reference path="transformers/module/system.ts" />
/// <reference path="transformers/module/es2015.ts" />

/* @internal */
namespace ts {
    function getModuleTransformer(moduleKind: ModuleKind): TransformerFactory<SourceFile> {
        switch (moduleKind) {
            case ModuleKind.ESNext:
            case ModuleKind.ES2015:
                return transformES2015Module;
            case ModuleKind.System:
                return transformSystemModule;
            default:
                return transformModule;
        }
    }

    const enum TransformationState {
        /** 未初始化 */
        Uninitialized,
        /** 初始化 */
        Initialized,
        /** 完成的 */
        Completed,
        /** 处理 */
        Disposed
    }
    /** 语法特性标记 */
    const enum SyntaxKindFeatureFlags {
        /** 替代 */
        Substitution = 1 << 0,
        /** 发出通知 */
        EmitNotifications = 1 << 1,
    }

    export function getTransformers(compilerOptions: CompilerOptions, customTransformers?: CustomTransformers) {
        const jsx = compilerOptions.jsx;
        const languageVersion = getEmitScriptTarget(compilerOptions);
        const moduleKind = getEmitModuleKind(compilerOptions);
        const transformers: TransformerFactory<SourceFile>[] = [];

        addRange(transformers, customTransformers && customTransformers.before);

        transformers.push(transformTypeScript);
        transformers.push(transformCts);

        if (jsx === JsxEmit.React) {
            transformers.push(transformJsx);
        }

        if (languageVersion < ScriptTarget.ESNext) {
            transformers.push(transformESNext);
        }

        if (languageVersion < ScriptTarget.ES2017) {
            transformers.push(transformES2017);
        }

        if (languageVersion < ScriptTarget.ES2016) {
            transformers.push(transformES2016);
        }

        if (languageVersion < ScriptTarget.ES2015) {
            transformers.push(transformES2015);
            transformers.push(transformGenerators);
        }

        transformers.push(getModuleTransformer(moduleKind));

        // The ES5 transformer is last so that it can substitute expressions like `exports.default`
        // for ES3.
        if (languageVersion < ScriptTarget.ES5) {
            transformers.push(transformES5);
        }

        addRange(transformers, customTransformers && customTransformers.after);

        return transformers;
    }

    /**
     * Transforms an array of SourceFiles by passing them through each transformer.
     *
     * @param resolver The emit resolver provided by the checker.
     * @param host The emit host object used to interact with the file system.
     * @param options Compiler options to surface in the `TransformationContext`.
     * @param nodes An array of nodes to transform.
     * @param transforms An array of `TransformerFactory` callbacks.
     * @param allowDtsFiles 一个值，指示是否允许改造d.ts文件。
     */
    export function transformNodes<T extends Node>(resolver: EmitResolver, host: EmitHost, options: CompilerOptions, nodes: T[], transformers: TransformerFactory<T>[], allowDtsFiles: boolean): TransformationResult<T> {
        const enabledSyntaxKindFeatures = new Array<SyntaxKindFeatureFlags>(SyntaxKind.Count);
        let lexicalEnvironmentVariableDeclarations: VariableDeclaration[];
        let lexicalEnvironmentFunctionDeclarations: FunctionDeclaration[];
        let lexicalEnvironmentVariableDeclarationsStack: VariableDeclaration[][] = [];
        let lexicalEnvironmentFunctionDeclarationsStack: FunctionDeclaration[][] = [];
        let lexicalEnvironmentStackOffset = 0;
        let lexicalEnvironmentSuspended = false;
        let emitHelpers: EmitHelper[];
        let onSubstituteNode: TransformationContext["onSubstituteNode"] = (_, node) => node;
        let onEmitNode: TransformationContext["onEmitNode"] = (hint, node, callback) => callback(hint, node);
        let state = TransformationState.Uninitialized;

        // The transformation context is provided to each transformer as part of transformer
        // initialization.
        const context: TransformationContext = {
            getCompilerOptions: () => options,
            getEmitResolver: () => resolver,
            getEmitHost: () => host,
            startLexicalEnvironment,
            suspendLexicalEnvironment,
            resumeLexicalEnvironment,
            endLexicalEnvironment,
            hoistVariableDeclaration,
            hoistFunctionDeclaration,
            requestEmitHelper,
            readEmitHelpers,
            enableSubstitution,
            enableEmitNotification,
            isSubstitutionEnabled,
            isEmitNotificationEnabled,
            get onSubstituteNode() { return onSubstituteNode; },
            set onSubstituteNode(value) {
                Debug.assert(state < TransformationState.Initialized, "Cannot modify transformation hooks after initialization has completed.");
                Debug.assert(value !== undefined, "Value must not be 'undefined'");
                onSubstituteNode = value;
            },
            get onEmitNode() { return onEmitNode; },
            set onEmitNode(value) {
                Debug.assert(state < TransformationState.Initialized, "Cannot modify transformation hooks after initialization has completed.");
                Debug.assert(value !== undefined, "Value must not be 'undefined'");
                onEmitNode = value;
            }
        };

        // Ensure the parse tree is clean before applying transformations
        // 确保解析树前应用转换，清洁
        for (const node of nodes) {
            disposeEmitNodes(getSourceFileOfNode(getParseTreeNode(node)));
        }

        performance.mark("beforeTransform");

        // Chain together and initialize each transformer.
        // 链在一起，初始化每个变压器。
        const transformation = chain(...transformers)(context);

        // prevent modification of transformation hooks.
        // 防止修改加工钩。
        state = TransformationState.Initialized;

        // 转换每个节点。
        const transformed = map(nodes, allowDtsFiles ? transformation : transformRoot);

        // 防止词汇环境改造。
        state = TransformationState.Completed;

        performance.mark("afterTransform");
        performance.measure("transformTime", "beforeTransform", "afterTransform");

        return {
            transformed,
            substituteNode,
            emitNodeWithNotification,
            dispose
        };

        function transformRoot(node: T) {
            return node && (!isSourceFile(node) || !node.isDeclarationFile) ? transformation(node) : node;
        }

        /**
         * Enables expression substitutions in the pretty printer for the provided SyntaxKind.
         * 使表达替换为syntaxkind漂亮的打印机。
         */
        function enableSubstitution(kind: SyntaxKind) {
            Debug.assert(state < TransformationState.Completed, "不能修改的转型背景，改造已完成。");
            enabledSyntaxKindFeatures[kind] |= SyntaxKindFeatureFlags.Substitution;
        }

        /**
         * Determines whether expression substitutions are enabled for the provided node.
         * 确定是否表达替换为节点启用。
         */
        function isSubstitutionEnabled(node: Node) {
            return (enabledSyntaxKindFeatures[node.kind] & SyntaxKindFeatureFlags.Substitution) !== 0
                && (getEmitFlags(node) & EmitFlags.NoSubstitution) === 0;
        }

        /**
         * Emits a node with possible substitution.
         * 发出一个可能的替代节点。
         * @param hint A hint as to the intended usage of the node.
         * @param node The node to emit.
         * @param emitCallback The callback used to emit the node or its substitute.
         */
        function substituteNode(hint: EmitHint, node: Node) {
            Debug.assert(state < TransformationState.Disposed, "不能替代节点的结果后处理。");
            return node && isSubstitutionEnabled(node) && onSubstituteNode(hint, node) || node;
        }

        /**
         * Enables before/after emit notifications in the pretty printer for the provided SyntaxKind.
         * 使前/后发出通知在漂亮的打印机提供的syntaxkind。
         */
        function enableEmitNotification(kind: SyntaxKind) {
            Debug.assert(state < TransformationState.Completed, "不能修改的转型背景，改造已完成。");
            enabledSyntaxKindFeatures[kind] |= SyntaxKindFeatureFlags.EmitNotifications;
        }

        /**
         * Determines whether before/after emit notifications should be raised in the pretty
         * printer when it emits a node.
         * determines前/后或通知是否应提出在漂亮的打印机时，它发射节点。
         */
        function isEmitNotificationEnabled(node: Node) {
            return (enabledSyntaxKindFeatures[node.kind] & SyntaxKindFeatureFlags.EmitNotifications) !== 0
                || (getEmitFlags(node) & EmitFlags.AdviseOnEmitNode) !== 0;
        }

        /**
         * Emits a node with possible emit notification.
         * 发出一个节点可能发出通知。
         * @param hint A hint as to the intended usage of the node.
         * @param node The node to emit.
         * @param emitCallback The callback used to emit the node.
         */
        function emitNodeWithNotification(hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void) {
            Debug.assert(state < TransformationState.Disposed, "无法调用回调函数的结果,处理后。");
            if (node) {
                if (isEmitNotificationEnabled(node)) {
                    onEmitNode(hint, node, emitCallback);
                }
                else {
                    emitCallback(hint, node);
                }
            }
        }

        /**
         * Records a hoisted variable declaration for the provided name within a lexical environment.
         * 记录把变量声明为提供的名称在一个词汇环境。
         */
        function hoistVariableDeclaration(name: Identifier): void {
            Debug.assert(state > TransformationState.Uninitialized, "不能修改词汇环境初始化时。");
            Debug.assert(state < TransformationState.Completed, "不能修改词汇环境改造, 处理后。");
            const decl = setEmitFlags(createVariableDeclaration(name), EmitFlags.NoNestedSourceMaps);
            if (!lexicalEnvironmentVariableDeclarations) {
                lexicalEnvironmentVariableDeclarations = [decl];
            }
            else {
                lexicalEnvironmentVariableDeclarations.push(decl);
            }
        }

        /**
         * Records a hoisted function declaration within a lexical environment.
         * 记录把函数声明在一个词汇环境。
         */
        function hoistFunctionDeclaration(func: FunctionDeclaration): void {
            Debug.assert(state > TransformationState.Uninitialized, "不能修改词汇环境初始化时。");
            Debug.assert(state < TransformationState.Completed, "不能修改词汇环境改造, 处理后。");
            if (!lexicalEnvironmentFunctionDeclarations) {
                lexicalEnvironmentFunctionDeclarations = [func];
            }
            else {
                lexicalEnvironmentFunctionDeclarations.push(func);
            }
        }

        /**
         * Starts a new lexical environment. Any existing hoisted variable or function declarations
         * are pushed onto a stack, and the related storage variables are reset.
         * 开始一个新的词汇环境。任何现有的挂起的变量或函数声明都被推到堆栈上，相关的存储变量被重置。
         */
        function startLexicalEnvironment(): void {
            Debug.assert(state > TransformationState.Uninitialized, "不能修改词汇环境初始化时。");
            Debug.assert(state < TransformationState.Completed, "不能修改词汇环境改造, 处理后。");
            Debug.assert(!lexicalEnvironmentSuspended, "词汇环境悬浮。");

            // Save the current lexical environment. Rather than resizing the array we adjust the
            // stack size variable. This allows us to reuse existing array slots we've
            // already allocated between transformations to avoid allocation and GC overhead during
            // transformation.
            // 保存当前的词汇环境。而不是调整我们调整堆栈大小可变的数组。这允许我们重用我们在转换
            // 之间分配的现有数组插槽，以避免转换期间的分配和GC开销。
            lexicalEnvironmentVariableDeclarationsStack[lexicalEnvironmentStackOffset] = lexicalEnvironmentVariableDeclarations;
            lexicalEnvironmentFunctionDeclarationsStack[lexicalEnvironmentStackOffset] = lexicalEnvironmentFunctionDeclarations;
            lexicalEnvironmentStackOffset++;
            lexicalEnvironmentVariableDeclarations = undefined;
            lexicalEnvironmentFunctionDeclarations = undefined;
        }

        /**
         *  Suspends the current lexical environment, usually after visiting a parameter list.
         * 挂起当前词汇环境，参观一个参数列表后通常。
         */
        function suspendLexicalEnvironment(): void {
            Debug.assert(state > TransformationState.Uninitialized, "不能修改词汇环境初始化时。");
            Debug.assert(state < TransformationState.Completed, "不能修改词汇环境改造, 处理后。");
            Debug.assert(!lexicalEnvironmentSuspended, "词汇环境悬浮。");
            lexicalEnvironmentSuspended = true;
        }

        /**
         * Resumes a suspended lexical environment, usually before visiting a function body.
         * 恢复暂停的词汇环境，通常在访问函数体。
         */
        function resumeLexicalEnvironment(): void {
            Debug.assert(state > TransformationState.Uninitialized, "不能修改词汇环境初始化时。");
            Debug.assert(state < TransformationState.Completed, "不能修改词汇环境改造, 处理后。");
            Debug.assert(lexicalEnvironmentSuspended, "词汇环境悬浮。");
            lexicalEnvironmentSuspended = false;
        }

        /**
         * Ends a lexical environment. The previous set of hoisted declarations are restored and
         * any hoisted declarations added in this environment are returned.
         * 结束词汇环境。吊装声明之前都恢复了，在这样的环境中添加任何悬挂声明返回。
         */
        function endLexicalEnvironment(): Statement[] {
            Debug.assert(state > TransformationState.Uninitialized, "不能修改词汇环境初始化时。");
            Debug.assert(state < TransformationState.Completed, "不能修改词汇环境改造, 处理后。");
            Debug.assert(!lexicalEnvironmentSuspended, "词汇环境悬浮。");

            let statements: Statement[];
            if (lexicalEnvironmentVariableDeclarations || lexicalEnvironmentFunctionDeclarations) {
                if (lexicalEnvironmentFunctionDeclarations) {
                    statements = [...lexicalEnvironmentFunctionDeclarations];
                }

                if (lexicalEnvironmentVariableDeclarations) {
                    const statement = createVariableStatement(
                        /*modifiers*/ undefined,
                        createVariableDeclarationList(lexicalEnvironmentVariableDeclarations)
                    );

                    if (!statements) {
                        statements = [statement];
                    }
                    else {
                        statements.push(statement);
                    }
                }
            }

            // Restore the previous lexical environment.
            // 恢复以前的词汇环境。
            lexicalEnvironmentStackOffset--;
            lexicalEnvironmentVariableDeclarations = lexicalEnvironmentVariableDeclarationsStack[lexicalEnvironmentStackOffset];
            lexicalEnvironmentFunctionDeclarations = lexicalEnvironmentFunctionDeclarationsStack[lexicalEnvironmentStackOffset];
            if (lexicalEnvironmentStackOffset === 0) {
                lexicalEnvironmentVariableDeclarationsStack = [];
                lexicalEnvironmentFunctionDeclarationsStack = [];
            }
            return statements;
        }

        function requestEmitHelper(helper: EmitHelper): void {
            Debug.assert(state > TransformationState.Uninitialized, "不能修改词汇环境初始化时。");
            Debug.assert(state < TransformationState.Completed, "不能修改词汇环境改造, 处理后。");
            Debug.assert(!helper.scoped, "不能要求一个范围发出的帮手。");
            emitHelpers = append(emitHelpers, helper);
        }

        function readEmitHelpers(): EmitHelper[] | undefined {
            Debug.assert(state > TransformationState.Uninitialized, "不能修改词汇环境初始化时。");
            Debug.assert(state < TransformationState.Completed, "不能修改词汇环境改造, 处理后。");
            const helpers = emitHelpers;
            emitHelpers = undefined;
            return helpers;
        }

        function dispose() {
            if (state < TransformationState.Disposed) {
                // Clean up emit nodes on parse tree
                // 清理发射节点解析树
                for (const node of nodes) {
                    disposeEmitNodes(getSourceFileOfNode(getParseTreeNode(node)));
                }

                // Release references to external entries for GC purposes.
                // 释放引用外部项GC的目的。
                lexicalEnvironmentVariableDeclarations = undefined;
                lexicalEnvironmentVariableDeclarationsStack = undefined;
                lexicalEnvironmentFunctionDeclarations = undefined;
                lexicalEnvironmentFunctionDeclarationsStack = undefined;
                onSubstituteNode = undefined;
                onEmitNode = undefined;
                emitHelpers = undefined;

                // Prevent further use of the transformation result.
                // 防止转化结果的进一步使用。
                state = TransformationState.Disposed;
            }
        }
    }
}
