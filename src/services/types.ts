namespace ts {
    export interface Node {
        getSourceFile(): SourceFile;
        getChildCount(sourceFile?: SourceFile): number;
        getChildAt(index: number, sourceFile?: SourceFile): Node;
        getChildren(sourceFile?: SourceFile): Node[];
        /* @internal */
        getChildren(sourceFile?: SourceFileLike): Node[];
        getStart(sourceFile?: SourceFile, includeJsDocComment?: boolean): number;
        /* @internal */
        getStart(sourceFile?: SourceFileLike, includeJsDocComment?: boolean): number;
        getFullStart(): number;
        getEnd(): number;
        getWidth(sourceFile?: SourceFile): number;
        getFullWidth(): number;
        getLeadingTriviaWidth(sourceFile?: SourceFile): number;
        getFullText(sourceFile?: SourceFile): string;
        getText(sourceFile?: SourceFile): string;
        getFirstToken(sourceFile?: SourceFile): Node;
        getLastToken(sourceFile?: SourceFile): Node;
        // See ts.forEachChild for documentation.
        forEachChild<T>(cbNode: (node: Node) => T | undefined, cbNodeArray?: (nodes: NodeArray<Node>) => T | undefined): T | undefined;
    }

    export interface Identifier {
        readonly text: string;
    }

    export interface Symbol {
        readonly name: string;
        getFlags(): SymbolFlags;
        getEscapedName(): __String;
        getName(): string;
        getDeclarations(): Declaration[] | undefined;
        getDocumentationComment(): SymbolDisplayPart[];
        getJsDocTags(): JSDocTagInfo[];
    }

    export interface 别名 {
         旗帜: 别名旗帜;
         名称: __String
    }

    export interface Type {
        getFlags(): TypeFlags;
        getSymbol(): Symbol | undefined;
        getProperties(): Symbol[];
        getProperty(propertyName: string): Symbol | undefined;
        getApparentProperties(): Symbol[];
        getCallSignatures(): Signature[];
        getConstructSignatures(): Signature[];
        getStringIndexType(): Type | undefined;
        getNumberIndexType(): Type | undefined;
        getBaseTypes(): BaseType[] | undefined;
        getNonNullableType(): Type;
    }

    export interface Signature {
        getDeclaration(): SignatureDeclaration;
        getTypeParameters(): TypeParameter[] | undefined;
        getParameters(): Symbol[];
        getReturnType(): Type;
        getDocumentationComment(): SymbolDisplayPart[];
        getJsDocTags(): JSDocTagInfo[];
    }

    export interface 词典完成条目 {
        name: string;
        range: 范围类型;
        isStringLiteral: boolean;
        rangeMap?: RangeMap;
    }

    export interface 名称引用 {
        kind?: ScriptElementKind,
        fileName: string,
        textSpan: TextSpan,
        isInString: boolean,
        name: string
        parent: Position
    }

    export interface Position {
        readonly line: number;
        readonly character: number;
    }

    export interface RangeMap {
        [x: string]: RangeInfo[];
    }

    export interface 范围类型 {
        readonly start: Position;
        readonly end: Position;
    }


    export interface RangeInfo {
        readonly start: Position;
        readonly end: Position;
        readonly parent: Position;
        readonly isStringLiteral: boolean;
    }

    export interface SourceFile {
        /* @internal */ version: string;
        /* @internal */ scriptSnapshot: IScriptSnapshot;
        /* @internal */ nameTable: UnderscoreEscapedMap<number>;
        /* @internal */ getNamedDeclarations(): Map<Declaration[]>;

        getLineAndCharacterOfPosition(pos: number): LineAndCharacter;
        getLineEndOfPosition(pos: number): number;
        getLineStarts(): ReadonlyArray<number>;
        getPositionOfLineAndCharacter(line: number, character: number): number;
        update(newText: string, textChangeRange: TextChangeRange): SourceFile;
    }

    export interface SourceFileLike {
        getLineAndCharacterOfPosition(pos: number): LineAndCharacter;
    }

    export interface SourceMapSource {
        getLineAndCharacterOfPosition(pos: number): LineAndCharacter;
    }

    /**
     * Represents an immutable snapshot of a script at a specified time.Once acquired, the
     * snapshot is observably immutable. i.e. the same calls with the same parameters will return
     * the same values.
     */
    export interface IScriptSnapshot {
        /** Gets a portion of the script snapshot specified by [start, end). */
        getText(start: number, end: number): string;

        /** Gets the length of this script snapshot. */
        getLength(): number;

        /**
         * Gets the TextChangeRange that describe how the text changed between this text and
         * an older version.  This information is used by the incremental parser to determine
         * what sections of the script need to be re-parsed.  'undefined' can be returned if the
         * change range cannot be determined.  However, in that case, incremental parsing will
         * not happen and the entire document will be re - parsed.
         */
        getChangeRange(oldSnapshot: IScriptSnapshot): TextChangeRange | undefined;

        /** Releases all resources held by this script snapshot */
        dispose?(): void;
    }

    export namespace ScriptSnapshot {
        class StringScriptSnapshot implements IScriptSnapshot {

            constructor(private text: string) {
            }

            public getText(start: number, end: number): string {
                return start === 0 && end === this.text.length
                    ? this.text
                    : this.text.substring(start, end);
            }

            public getLength(): number {
                return this.text.length;
            }

            public getChangeRange(): TextChangeRange {
                // Text-based snapshots do not support incremental parsing. Return undefined
                // to signal that to the caller.
                return undefined;
            }
        }

        export function fromString(text: string): IScriptSnapshot {
            return new StringScriptSnapshot(text);
        }
    }
    export interface PreProcessedFileInfo {
        referencedFiles: FileReference[];
        typeReferenceDirectives: FileReference[];
        importedFiles: FileReference[];
        ambientExternalModules: string[];
        isLibFile: boolean;
    }

    export interface HostCancellationToken {
        isCancellationRequested(): boolean;
    }

    export interface InstallPackageOptions {
        fileName: Path;
        packageName: string;
    }

    //
    // Public interface of the host of a language service instance.
    //
    export interface LanguageServiceHost extends GetEffectiveTypeRootsHost {
        getCompilationSettings(): CompilerOptions;
        getNewLine?(): string;
        getProjectVersion?(): string;
        getScriptFileNames(): string[];
        getScriptKind?(fileName: string): ScriptKind;
        getScriptVersion(fileName: string): string;
        getScriptSnapshot(fileName: string): IScriptSnapshot | undefined;
        getLocalizedDiagnosticMessages?(): any;
        getCancellationToken?(): HostCancellationToken;
        getCurrentDirectory(): string;
        getDefaultLibFileName(options: CompilerOptions): string;
        log?(s: string): void;
        trace?(s: string): void;
        error?(s: string): void;
        useCaseSensitiveFileNames?(): boolean;

        /*
         * LS host can optionally implement these methods to support completions for module specifiers.
         * Without these methods, only completions for ambient modules will be provided.
         */
        readDirectory?(path: string, extensions?: ReadonlyArray<string>, exclude?: ReadonlyArray<string>, include?: ReadonlyArray<string>, depth?: number): string[];
        readFile?(path: string, encoding?: string): string | undefined;
        fileExists?(path: string): boolean;

        /*
         * LS host can optionally implement these methods to support automatic updating when new type libraries are installed
         */
        getTypeRootsVersion?(): number;

        /*
         * LS host can optionally implement this method if it wants to be completely in charge of module name resolution.
         * if implementation is omitted then language service will use built-in module resolution logic and get answers to
         * host specific questions using 'getScriptSnapshot'.
         */
        resolveModuleNames?(moduleNames: string[], containingFile: string, reusedNames?: string[]): ResolvedModule[];
        resolveTypeReferenceDirectives?(typeDirectiveNames: string[], containingFile: string): ResolvedTypeReferenceDirective[];
        /* @internal */ hasInvalidatedResolution?: HasInvalidatedResolution;
        /* @internal */ hasChangedAutomaticTypeDirectiveNames?: boolean;

        /*
         * getDirectories is also required for full import and type reference completions. Without it defined, certain
         * completions will not be provided
         */
        getDirectories?(directoryName: string): string[];

        /**
         * Gets a set of custom transformers to use during emit.
         */
        getCustomTransformers?(): CustomTransformers | undefined;

        isKnownTypesPackageName?(name: string): boolean;
        installPackage?(options: InstallPackageOptions): Promise<ApplyCodeActionCommandResult>;
    }

    //
    // Public services of a language service instance associated
    // with a language service host instance
    //
    export interface LanguageService {
        cleanupSemanticCache(): void;

        getSyntacticDiagnostics(fileName: string): Diagnostic[];
        getSemanticDiagnostics(fileName: string): Diagnostic[];

        // TODO: Rename this to getProgramDiagnostics to better indicate that these are any
        // diagnostics present for the program level, and not just 'options' diagnostics.
        getCompilerOptionsDiagnostics(): Diagnostic[];

        /**
         * @deprecated Use getEncodedSyntacticClassifications instead.
         */
        getSyntacticClassifications(fileName: string, span: TextSpan): ClassifiedSpan[];

        /**
         * @deprecated Use getEncodedSemanticClassifications instead.
         */
        getSemanticClassifications(fileName: string, span: TextSpan): ClassifiedSpan[];

        // Encoded as triples of [start, length, ClassificationType].
        getEncodedSyntacticClassifications(fileName: string, span: TextSpan): Classifications;
        getEncodedSemanticClassifications(fileName: string, span: TextSpan): Classifications;

        getCompletionsAtPosition(fileName: string, position: number): CompletionInfo;
        // "options" is optional only for backwards-compatibility
        getCompletionEntryDetails(fileName: string, position: number, entryName: string, options?: FormatCodeOptions | FormatCodeSettings): CompletionEntryDetails;
        getCompletionEntrySymbol(fileName: string, position: number, entryName: string): Symbol;
        getQuickInfoAtPosition(fileName: string, position: number): QuickInfo;

        getNameOrDottedNameSpan(fileName: string, startPos: number, endPos: number): TextSpan;

        getBreakpointStatementAtPosition(fileName: string, position: number): TextSpan;

        getSignatureHelpItems(fileName: string, position: number): SignatureHelpItems;

        getRenameInfo(fileName: string, position: number): RenameInfo;
        findRenameLocations(fileName: string, position: number, findInStrings: boolean, findInComments: boolean): RenameLocation[];
        取词典自动完成项目新?(fileName: string, position: number, ignoreName: string):名称引用[]
        getDefinitionAtPosition(fileName: string, position: number): DefinitionInfo[];
        getTypeDefinitionAtPosition(fileName: string, position: number): DefinitionInfo[];
        getImplementationAtPosition(fileName: string, position: number): ImplementationLocation[];

        getReferencesAtPosition(fileName: string, position: number): ReferenceEntry[];
        findReferences(fileName: string, position: number): ReferencedSymbol[];
        getDocumentHighlights(fileName: string, position: number, filesToSearch: string[]): DocumentHighlights[];

        /** @deprecated */
        getOccurrencesAtPosition(fileName: string, position: number): ReferenceEntry[];

        getNavigateToItems(searchValue: string, maxResultCount?: number, fileName?: string, excludeDtsFiles?: boolean): NavigateToItem[];
        getNavigationBarItems(fileName: string): NavigationBarItem[];
        getNavigationTree(fileName: string): NavigationTree;

        getOutliningSpans(fileName: string): OutliningSpan[];
        getTodoComments(fileName: string, descriptors: TodoCommentDescriptor[]): TodoComment[];
        getBraceMatchingAtPosition(fileName: string, position: number): TextSpan[];
        getIndentationAtPosition(fileName: string, position: number, options: EditorOptions | EditorSettings): number;

        getFormattingEditsForRange(fileName: string, start: number, end: number, options: FormatCodeOptions | FormatCodeSettings): TextChange[];
        getFormattingEditsForDocument(fileName: string, options: FormatCodeOptions | FormatCodeSettings): TextChange[];
        getFormattingEditsAfterKeystroke(fileName: string, position: number, key: string, options: FormatCodeOptions | FormatCodeSettings): TextChange[];

        getDocCommentTemplateAtPosition(fileName: string, position: number): TextInsertion;

        isValidBraceCompletionAtPosition(fileName: string, position: number, openingBrace: number): boolean;

        getSpanOfEnclosingComment(fileName: string, position: number, onlyMultiLine: boolean): TextSpan;

        getCodeFixesAtPosition(fileName: string, start: number, end: number, errorCodes: number[], formatOptions: FormatCodeSettings): CodeAction[];
        applyCodeActionCommand(fileName: string, action: CodeActionCommand): Promise<ApplyCodeActionCommandResult>;
        getApplicableRefactors(fileName: string, positionOrRaneg: number | TextRange): ApplicableRefactorInfo[];
        getEditsForRefactor(fileName: string, formatOptions: FormatCodeSettings, positionOrRange: number | TextRange, refactorName: string, actionName: string): RefactorEditInfo | undefined;

        getEmitOutput(fileName: string, emitOnlyDtsFiles?: boolean): EmitOutput;

        getProgram(): Program;

        /* @internal */ getNonBoundSourceFile(fileName: string): SourceFile;

        /**
         * @internal
         * @deprecated Use ts.createSourceFile instead.
         */
        getSourceFile(fileName: string): SourceFile;
        转为CTS(fileName: string):string;
        格式化词典语句?(fileName: string):string;
        dispose(): void;
    }

    export interface ApplyCodeActionCommandResult {
        successMessage: string;
    }

    export interface Classifications {
        spans: number[];
        endOfLineState: EndOfLineState;
    }

    export interface ClassifiedSpan {
        textSpan: TextSpan;
        classificationType: ClassificationTypeNames;
    }

    /**
     * Navigation bar interface designed for visual studio's dual-column layout.
     * This does not form a proper tree.
     * The navbar is returned as a list of top-level items, each of which has a list of child items.
     * Child items always have an empty array for their `childItems`.
     */
    export interface NavigationBarItem {
        text: string;
        kind: ScriptElementKind;
        kindModifiers: string;
        spans: TextSpan[];
        childItems: NavigationBarItem[];
        indent: number;
        bolded: boolean;
        grayed: boolean;
    }

    /**
     * Node in a tree of nested declarations in a file.
     * The top node is always a script or module node.
     */
    export interface NavigationTree {
        /** Name of the declaration, or a short description, e.g. "<class>". */
        text: string;
        kind: ScriptElementKind;
        /** ScriptElementKindModifier separated by commas, e.g. "public,abstract" */
        kindModifiers: string;
        /**
         * Spans of the nodes that generated this declaration.
         * There will be more than one if this is the result of merging.
         */
        spans: TextSpan[];
        /** Present if non-empty */
        childItems?: NavigationTree[];
    }

    export interface TodoCommentDescriptor {
        text: string;
        priority: number;
    }

    export interface TodoComment {
        descriptor: TodoCommentDescriptor;
        message: string;
        position: number;
    }

    export class TextChange {
        span: TextSpan;
        newText: string;
    }

    export interface FileTextChanges {
        fileName: string;
        textChanges: TextChange[];
    }

    export interface CodeAction {
        /** Description of the code action to display in the UI of the editor */
        description: string;
        /** Text changes to apply to each file as part of the code action */
        changes: FileTextChanges[];
        /**
         * If the user accepts the code fix, the editor should send the action back in a `applyAction` request.
         * This allows the language service to have side effects (e.g. installing dependencies) upon a code fix.
         */
        commands?: CodeActionCommand[];
    }

    // Publicly, this type is just `{}`. Internally it is a union of all the actions we use.
    // See `commands?: {}[]` in protocol.ts
    export type CodeActionCommand = InstallPackageAction;

    export interface InstallPackageAction {
        /* @internal */ type: "install package";
        /* @internal */ packageName: string;
    }

    /**
     * A set of one or more available refactoring actions, grouped under a parent refactoring.
     */
    export interface ApplicableRefactorInfo {
        /**
         * The programmatic name of the refactoring
         */
        name: string;
        /**
         * A description of this refactoring category to show to the user.
         * If the refactoring gets inlined (see below), this text will not be visible.
         */
        description: string;
        /**
         * Inlineable refactorings can have their actions hoisted out to the top level
         * of a context menu. Non-inlineanable refactorings should always be shown inside
         * their parent grouping.
         *
         * If not specified, this value is assumed to be 'true'
         */
        inlineable?: boolean;

        actions: RefactorActionInfo[];
    }

    /**
     * Represents a single refactoring action - for example, the "Extract Method..." refactor might
     * offer several actions, each corresponding to a surround class or closure to extract into.
     */
    export interface RefactorActionInfo {
        /**
         * The programmatic name of the refactoring action
         */
        name: string;

        /**
         * A description of this refactoring action to show to the user.
         * If the parent refactoring is inlined away, this will be the only text shown,
         * so this description should make sense by itself if the parent is inlineable=true
         */
        description: string;
    }

    /**
     * A set of edits to make in response to a refactor action, plus an optional
     * location where renaming should be invoked from
     */
    export interface RefactorEditInfo {
        edits: FileTextChanges[];
        renameFilename: string | undefined;
        renameLocation: number | undefined;
        commands?: CodeActionCommand[];
    }

    export interface TextInsertion {
        newText: string;
        /** The position in newText the caret should point to after the insertion. */
        caretOffset: number;
    }

    export interface DocumentSpan {
        textSpan: TextSpan;
        fileName: string;
    }

    export interface RenameLocation extends DocumentSpan {
    }

    export interface ReferenceEntry extends DocumentSpan {
        isWriteAccess: boolean;
        isDefinition: boolean;
        isInString?: true;
    }

    export interface ImplementationLocation extends DocumentSpan {
        kind: ScriptElementKind;
        displayParts: SymbolDisplayPart[];
    }

    export interface DocumentHighlights {
        fileName: string;
        highlightSpans: HighlightSpan[];
    }

    export const enum HighlightSpanKind {
        none = "none",
        definition = "definition",
        reference = "reference",
        writtenReference = "writtenReference",
    }

    export interface HighlightSpan {
        fileName?: string;
        isInString?: true;
        textSpan: TextSpan;
        kind: HighlightSpanKind;
    }

    export interface NavigateToItem {
        name: string;
        kind: ScriptElementKind;
        kindModifiers: string;
        matchKind: string; // TODO: keyof typeof PatternMatchKind; (https://github.com/Microsoft/TypeScript/issues/15102)
        isCaseSensitive: boolean;
        fileName: string;
        textSpan: TextSpan;
        containerName: string;
        containerKind: ScriptElementKind;
    }

    export enum IndentStyle {
        None = 0,
        Block = 1,
        Smart = 2,
    }

    /* @deprecated - consider using EditorSettings instead */
    export interface EditorOptions {
        BaseIndentSize?: number;
        IndentSize: number;
        TabSize: number;
        NewLineCharacter: string;
        ConvertTabsToSpaces: boolean;
        IndentStyle: IndentStyle;
    }

    export interface EditorSettings {
        baseIndentSize?: number;
        indentSize?: number;
        tabSize?: number;
        newLineCharacter?: string;
        convertTabsToSpaces?: boolean;
        indentStyle?: IndentStyle;
    }

    /* @deprecated - consider using FormatCodeSettings instead */
    export interface FormatCodeOptions extends EditorOptions {
        InsertSpaceAfterCommaDelimiter: boolean;
        InsertSpaceAfterSemicolonInForStatements: boolean;
        InsertSpaceBeforeAndAfterBinaryOperators: boolean;
        InsertSpaceAfterConstructor?: boolean;
        InsertSpaceAfterKeywordsInControlFlowStatements: boolean;
        InsertSpaceAfterFunctionKeywordForAnonymousFunctions: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyBraces?: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces?: boolean;
        InsertSpaceAfterTypeAssertion?: boolean;
        InsertSpaceBeforeFunctionParenthesis?: boolean;
        PlaceOpenBraceOnNewLineForFunctions: boolean;
        PlaceOpenBraceOnNewLineForControlBlocks: boolean;
    }

    export interface FormatCodeSettings extends EditorSettings {
        insertSpaceAfterCommaDelimiter?: boolean;
        insertSpaceAfterSemicolonInForStatements?: boolean;
        insertSpaceBeforeAndAfterBinaryOperators?: boolean;
        insertSpaceAfterConstructor?: boolean;
        insertSpaceAfterKeywordsInControlFlowStatements?: boolean;
        insertSpaceAfterFunctionKeywordForAnonymousFunctions?: boolean;
        insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis?: boolean;
        insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets?: boolean;
        insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces?: boolean;
        insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces?: boolean;
        insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces?: boolean;
        insertSpaceAfterTypeAssertion?: boolean;
        insertSpaceBeforeFunctionParenthesis?: boolean;
        placeOpenBraceOnNewLineForFunctions?: boolean;
        placeOpenBraceOnNewLineForControlBlocks?: boolean;
    }

    export interface DefinitionInfo {
        fileName: string;
        textSpan: TextSpan;
        kind: ScriptElementKind;
        name: string;
        containerKind: ScriptElementKind;
        containerName: string;
    }

    export interface ReferencedSymbolDefinitionInfo extends DefinitionInfo {
        displayParts: SymbolDisplayPart[];
    }

    export interface ReferencedSymbol {
        definition: ReferencedSymbolDefinitionInfo;
        references: ReferenceEntry[];
    }

    export enum SymbolDisplayPartKind {
        aliasName,
        className,
        enumName,
        fieldName,
        interfaceName,
        keyword,
        lineBreak,
        numericLiteral,
        stringLiteral,
        localName,
        methodName,
        moduleName,
        operator,
        parameterName,
        propertyName,
        punctuation,
        space,
        text,
        typeParameterName,
        enumMemberName,
        functionName,
        regularExpressionLiteral,
    }

    export interface SymbolDisplayPart {
        text: string;
        kind: string;
    }

    export interface JSDocTagInfo {
        name: string;
        text?: string;
    }

    export interface QuickInfo {
        kind: ScriptElementKind;
        kindModifiers: string;
        textSpan: TextSpan;
        displayParts: SymbolDisplayPart[];
        documentation: SymbolDisplayPart[];
        tags: JSDocTagInfo[];
    }

    export interface RenameInfo {
        canRename: boolean;
        localizedErrorMessage: string;
        displayName: string;
        fullDisplayName: string;
        kind: ScriptElementKind;
        kindModifiers: string;
        triggerSpan: TextSpan;
    }

    export interface SignatureHelpParameter {
        name: string;
        documentation: SymbolDisplayPart[];
        displayParts: SymbolDisplayPart[];
        isOptional: boolean;
    }

    /**
     * Represents a single signature to show in signature help.
     * The id is used for subsequent calls into the language service to ask questions about the
     * signature help item in the context of any documents that have been updated.  i.e. after
     * an edit has happened, while signature help is still active, the host can ask important
     * questions like 'what parameter is the user currently contained within?'.
     */
    export interface SignatureHelpItem {
        isVariadic: boolean;
        prefixDisplayParts: SymbolDisplayPart[];
        suffixDisplayParts: SymbolDisplayPart[];
        separatorDisplayParts: SymbolDisplayPart[];
        parameters: SignatureHelpParameter[];
        documentation: SymbolDisplayPart[];
        tags: JSDocTagInfo[];
    }

    /**
     * Represents a set of signature help items, and the preferred item that should be selected.
     */
    export interface SignatureHelpItems {
        items: SignatureHelpItem[];
        applicableSpan: TextSpan;
        selectedItemIndex: number;
        argumentIndex: number;
        argumentCount: number;
    }

    export interface CompletionInfo {
        isGlobalCompletion: boolean;
        isMemberCompletion: boolean;

        /**
         * true when the current location also allows for a new identifier
         */
        isNewIdentifierLocation: boolean;
        entries: CompletionEntry[];
    }

    export interface CompletionEntry {
        name: string;
        kind: ScriptElementKind;
        kindModifiers: string;   // see ScriptElementKindModifier, comma separated
        sortText: string;
        /**
         * An optional span that indicates the text to be replaced by this completion item. It will be
         * set if the required span differs from the one generated by the default replacement behavior and should
         * be used in that case
         */
        replacementSpan?: TextSpan;
        hasAction?: true;
    }

    export interface CompletionEntryDetails {
        name: string;
        kind: ScriptElementKind;
        kindModifiers: string;   // see ScriptElementKindModifier, comma separated
        displayParts: SymbolDisplayPart[];
        documentation: SymbolDisplayPart[];
        tags: JSDocTagInfo[];
        codeActions?: CodeAction[];
    }

    export interface OutliningSpan {
        /** The span of the document to actually collapse. */
        textSpan: TextSpan;

        /** The span of the document to display when the user hovers over the collapsed span. */
        hintSpan: TextSpan;

        /** The text to display in the editor for the collapsed region. */
        bannerText: string;

        /**
         * Whether or not this region should be automatically collapsed when
         * the 'Collapse to Definitions' command is invoked.
         */
        autoCollapse: boolean;
    }

    export const enum OutputFileType {
        JavaScript,
        SourceMap,
        Declaration
    }

    export const enum EndOfLineState {
        None,
        InMultiLineCommentTrivia,
        InSingleQuoteStringLiteral,
        InDoubleQuoteStringLiteral,
        InTemplateHeadOrNoSubstitutionTemplate,
        InTemplateMiddleOrTail,
        InTemplateSubstitutionPosition,
    }

    export enum TokenClass {
        Punctuation,
        Keyword,
        Operator,
        Comment,
        Whitespace,
        Identifier,
        NumberLiteral,
        StringLiteral,
        RegExpLiteral,
    }

    export interface ClassificationResult {
        finalLexState: EndOfLineState;
        entries: ClassificationInfo[];
    }

    export interface ClassificationInfo {
        length: number;
        classification: TokenClass;
    }

    export interface Classifier {
        /**
         * Gives lexical classifications of tokens on a line without any syntactic context.
         * For instance, a token consisting of the text 'string' can be either an identifier
         * named 'string' or the keyword 'string', however, because this classifier is not aware,
         * it relies on certain heuristics to give acceptable results. For classifications where
         * speed trumps accuracy, this function is preferable; however, for true accuracy, the
         * syntactic classifier is ideal. In fact, in certain editing scenarios, combining the
         * lexical, syntactic, and semantic classifiers may issue the best user experience.
         *
         * @param text                      The text of a line to classify.
         * @param lexState                  The state of the lexical classifier at the end of the previous line.
         * @param syntacticClassifierAbsent Whether the client is *not* using a syntactic classifier.
         *                                  If there is no syntactic classifier (syntacticClassifierAbsent=true),
         *                                  certain heuristics may be used in its place; however, if there is a
         *                                  syntactic classifier (syntacticClassifierAbsent=false), certain
         *                                  classifications which may be incorrectly categorized will be given
         *                                  back as Identifiers in order to allow the syntactic classifier to
         *                                  subsume the classification.
         * @deprecated Use getLexicalClassifications instead.
         */
        getClassificationsForLine(text: string, lexState: EndOfLineState, syntacticClassifierAbsent: boolean): ClassificationResult;
        getEncodedLexicalClassifications(text: string, endOfLineState: EndOfLineState, syntacticClassifierAbsent: boolean): Classifications;
    }

    export const enum ScriptElementKind {
        unknown = "",
        warning = "警告",

        /** predefined type (void) or keyword (class) */
        keyword = "关键字",

        /** top level script node */
        scriptElement = "脚本",

        /** module foo {} */
        moduleElement = "模块",

        /** class X {} */
        classElement = "类别",

        /** var x = class X {} */
        localClassElement = "本地类别",

        /** interface Y {} */
        interfaceElement = "接口",

        /** type T = ... */
        typeElement = "类型",

        /** enum E */
        enumElement = "枚举",
        enumMemberElement = "枚举成员",

        /**
         * Inside module and script only
         * const v = ..
         */
        variableElement = "值量",

        /** Inside function */
        localVariableElement = "本地值量",

        /**
         * Inside module and script only
         * function f() { }
         */
        functionElement = "函数",

        /** Inside function */
        localFunctionElement = "本地函数",

        /** class X { [public|private]* foo() {} } */
        memberFunctionElement = "方法",

        /** class X { [public|private]* [get|set] foo:number; } */
        memberGetAccessorElement = "获取",
        memberSetAccessorElement = "设置",

        /**
         * class X { [public|private]* foo:number; }
         * interface Y { foo:number; }
         */
        memberVariableElement = "属性",

        /** class X { constructor() { } } */
        constructorImplementationElement = "构造",

        /** interface Y { ():number; } */
        callSignatureElement = "调用",

        /** interface Y { []:number; } */
        indexSignatureElement = "索引",

        /** interface Y { new():Y; } */
        constructSignatureElement = "构建",

        /** function foo(*Y*: string) */
        parameterElement = "参数",

        typeParameterElement = "类型参数",

        primitiveType = "原始类型",

        label = "标签",

        alias = "别名",

        constElement = "常量",

        letElement = "变量",

        directory = "目录",

        externalModuleName = "外部模块名",

        /**
         * <JsxTagName attribute1 attribute2={0} />
         */
        jsxAttribute = "JSX属性",
    }

    export const enum ScriptElementKindModifier {
        none = "",
        publicMemberModifier = "公开",
        privateMemberModifier = "私有",
        protectedMemberModifier = "保护",
        exportedModifier = "导出",
        ambientModifier = "声明",
        staticModifier = "静态",
        abstractModifier = "抽象",
    }

    export const enum ClassificationTypeNames {
        comment = "评论",
        identifier = "标识符",
        keyword = "关键字",
        numericLiteral = "数字",
        operator = "运算符",
        stringLiteral = "文字",
        whiteSpace = "空格",
        text = "文本",

        punctuation = "标点符号",

        className = "类名",
        enumName = "枚举名",
        interfaceName = "接口名",
        moduleName = "模块名",
        typeParameterName = "类型参数名",
        typeAliasName = "类型别名名",
        parameterName = "参数名",
        docCommentTagName = "注释标签名",
        jsxOpenTagName = "JSX开始标签名",
        jsxCloseTagName = "JSX结尾标签名",
        jsxSelfClosingTagName = "JSX自闭标签名",
        jsxAttribute = "JSX特性",
        jsxText = "JSX文本",
        jsxAttributeStringLiteralValue = "JSX特性字面值",
    }

    export const enum ClassificationType {
        comment = 1,
        identifier = 2,
        keyword = 3,
        numericLiteral = 4,
        operator = 5,
        stringLiteral = 6,
        regularExpressionLiteral = 7,
        whiteSpace = 8,
        text = 9,
        punctuation = 10,
        className = 11,
        enumName = 12,
        interfaceName = 13,
        moduleName = 14,
        typeParameterName = 15,
        typeAliasName = 16,
        parameterName = 17,
        docCommentTagName = 18,
        jsxOpenTagName = 19,
        jsxCloseTagName = 20,
        jsxSelfClosingTagName = 21,
        jsxAttribute = 22,
        jsxText = 23,
        jsxAttributeStringLiteralValue = 24,
    }
}
