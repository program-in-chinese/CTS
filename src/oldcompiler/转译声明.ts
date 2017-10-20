
/* @internal */
namespace ts {

    interface DeclarationEmit {
        解析诊断信息: boolean;
        同步输出结果: string;
        异步输出数组: 异步输出[];
    }
    interface 异步输出 {
        插入位置: number;
        插入内容: string;
        是否为局部词典?: boolean;
    }
    interface 输出声明编辑器 extends EmitTextWriter, SymbolWriter {
    }



    function 生成声明结果(host: EmitHost,
        源文件或绑定集: SourceFile | Bundle): DeclarationEmit {
        const 源码文件集 = 源文件或绑定集.kind === SyntaxKind.Bundle ? 源文件或绑定集.sourceFiles : [源文件或绑定集];
        const 系统新行字符 = host.getNewLine();
        let 当前全局词典数组 = 创建空对象<{ k: string, v: string }>();
        let 写: (s: string) => void;
        let 读取位置 = 0;
        let 扫描器: Scanner;
        let 当前语义: SyntaxKind;
        let 编辑器: 输出声明编辑器;
        const 异步输出数组: 异步输出[] = [];
        let 应重新输出词典 = true;
        const 去重词典 = createMap<string>();
        let 未重写词典 = true;
        let 空白文本 = "";
        let 当前文件名 = "";
        let 当前文件种类: 文件种类;
        let 词典输出位置 = 0;
        let 无词典标识符 = createMap<boolean>();
        const 已经输出过的词典 = createMap<string>();
        const 词典不重复输出 = host.getCompilerOptions().词典不重复输出;
        const 输出无词典标识符 = host.getCompilerOptions().输出无词典标识符;
        const 词典在文件尾 = host.getCompilerOptions().词典在文件尾;

        // let space: string

        创建输出编辑器();
        let 当前源码文本: string;
        const 解析诊断信息 = false;

        forEach(源码文件集, 源码 => {
            if (isSourceFileJavaScript(源码)) {
                return;
            }
            输出源文件(源码);
        });

        return {
            解析诊断信息,
            同步输出结果: 编辑器.getText(),
            异步输出数组,
        };
        function 创建输出编辑器(): void {
            const 编辑器 = <输出声明编辑器>createTextWriter(系统新行字符);
            setWriter(编辑器);
        }

        function setWriter(新编辑器: 输出声明编辑器) {
            编辑器 = 新编辑器;
            写 = 新编辑器.write;
        }

        function 输出源文件(node: SourceFile) {
            当前源码文本 = node.text;
            当前文件名 = node.fileName;
            当前文件种类 = 取文件种类(当前文件名);
            扫描器 = createScanner(node.languageVersion, /***/ false, node.languageVariant, 当前源码文本);
            读取位置 = 0;
            当前语义 = undefined;
            无词典标识符 = createMap<boolean>();
            forEachChild(node, 回调);
            if (词典在文件尾) {
                let 文本 = "";
                异步输出数组.forEach(异步内容 => {
                    if (异步内容 && !异步内容.是否为局部词典) {
                        文本 += 异步内容.插入内容.replace(/^\s+\/\/@/, "//@") + "\r\n";
                    }
                });
                写文本(文本);
            }
            if (输出无词典标识符) {
                let 文本 = "";
                node.identifiers.forEach((v) => {
                    if (无词典标识符.has(v)) {
                        文本 += `//@@{ ${unescapeIdentifier(v)}:${unescapeIdentifier(v)} }\n\r`;
                    }
                });
                if (文本 !== "") {
                    写文本(文本);
                }

            }

        }
        function 回调(node: Node) {
            if (node.kind === SyntaxKind.Identifier || node.kind === SyntaxKind.StringLiteral || node.kind === SyntaxKind.NumericLiteral) {
                写节点(node);
            }
            else if (node.kind >= SyntaxKind.OpenBraceToken && node.kind <= SyntaxKind.OfKeyword) {
                写令牌(node);
            }
            else if (node.kind === SyntaxKind.EndOfFileToken) {
                补写尾部词典();
                写文件尾();
            }
            else {
                forEachChild(node, 回调);
            }
        }
        function 写文本(s: string) {
            写(s);
        }

        function 写前置琐事(node: Node) {
            const 位置 = skipTrivia(当前源码文本, node.pos);
            let 文本 = 当前源码文本.substring(读取位置, 位置);
            if (文本.length > 0) {
                if (读取位置 === 0) {
                    文本 = 处理引用(文本);
                }
                文本 = 替换JSDoc标签(文本);
                扫描器.setText(文本);
                扫描();
                while (当前语义 !== SyntaxKind.EndOfFileToken || 当前语义 === undefined) {
                    switch (当前语义) {
                        case SyntaxKind.全局词典语句:
                        case SyntaxKind.局部词典语句:
                            扫描器.tryScan(() => {
                                扫描();
                                while (当前语义 === SyntaxKind.NewLineTrivia || 当前语义 === SyntaxKind.WhitespaceTrivia) {
                                    扫描();
                                }
                                return 当前语义;
                            });
                            break;
                        default:
                            if (没有补写令牌(当前语义)) {
                                const 文本 = 扫描器.getTokenText();
                                if (当前语义 === SyntaxKind.NewLineTrivia) {
                                    应重新输出词典 = true;
                                    未重写词典 = false;
                                    词典输出位置 = 编辑器.getTextPos();
                                    空白文本 = "";
                                    扫描器.tryScan(() => {
                                        扫描();
                                        while (当前语义 === SyntaxKind.WhitespaceTrivia) {
                                            空白文本 += 扫描器.getTokenText();
                                            扫描();
                                        }
                                    });
                                }
                                写文本(文本);

                            }
                            扫描();
                    }
                }

                读取位置 = 位置;
            }
        }

        function 写节点(node: Node) {
            写前置琐事(node);
            const 别名 = (<Identifier>node).别名;
            if (别名) {
                if (别名.旗帜 & 别名旗帜.局部词典) {
                    写局部词典(取文本(取符号节点类型中文(<Identifier>node), 别名.旗帜), 取文本(取符号节点类型英文(<Identifier>node), 别名.旗帜));
                }
                else {
                    if (词典不重复输出) {
                        if (!已经输出过的词典.has(取文本(取符号节点类型中文(<Identifier>node), 别名.旗帜))) {
                            当前全局词典数组 = { k: 取文本(取符号节点类型中文(<Identifier>node), 别名.旗帜), v: 取文本(取符号节点类型英文(<Identifier>node), 别名.旗帜) };
                            已经输出过的词典.set(当前全局词典数组.k, 当前全局词典数组.v);
                        }

                    }
                    else {
                        当前全局词典数组 = { k: 取文本(取符号节点类型中文(<Identifier>node), 别名.旗帜), v: 取文本(取符号节点类型英文(<Identifier>node), 别名.旗帜) };
                    }

                }
            }
            else {
                无词典标识符.set(取节点文本(node) as string, true);
            }
            if (应重新输出词典) {
                写词典();
                应重新输出词典 = false;

            }
            else {
                写词典元素();
            }

            const 文本 = 取输出文本(当前源码文本, node, 当前文件种类, 使用场景.类型检查, /***/ false);

            读取位置 = node.end;
            写节点文本(文本);
        }
        function 取节点文本(node: Node) {
            if (isIdentifier(node)) {
                return unescapeIdentifier(node.text as string);
            } if (isStringLiteral(node)) {
                return `"${unescapeIdentifier(node.text as string)}"`;
            }
        }

        function 取文本(文本: string | __String, 旗帜: 别名旗帜) {
            if (旗帜 & 别名旗帜.字面量) {
                return `"${unescapeLeadingUnderscores(文本 as __String)}"`;
            }
            else {
                return unescapeLeadingUnderscores(文本 as __String);
            }
        }

        function 写令牌(node: Node) {
            写前置琐事(node);
            const 文本 = 令牌转为中文关键字(node.kind);
            if (文本) {
                const 长度 = 令牌转为关键字(node.kind).length;
                读取位置 += 长度;
                写关键字(文本);
            }
        }

        function 写局部词典(k: string, v: string) {
            异步输出数组.push({
                插入位置: 词典输出位置,
                插入内容: `${host.getNewLine()}${空白文本}//@{ ${unescapeIdentifier(k)}:${unescapeIdentifier(v)} }`,
                是否为局部词典: true
            });
        }

        function 写词典元素() {
            if (未重写词典) {
                写词典();
                return;
            }
            if (当前全局词典数组) {
                if (!去重词典.has(当前全局词典数组.k)) {
                    去重词典.set(当前全局词典数组.k, 当前全局词典数组.v);
                }
                当前全局词典数组 = undefined;
            }
        }

        function 写词典() {
            if (当前全局词典数组) {
                if (去重词典.size > 0) {
                    const 数组: string[] = [];
                    去重词典.forEach((v, k) => {
                        if (v && k) {
                            数组.push(`${unescapeIdentifier(k)}:${unescapeIdentifier(v)}`);
                        }
                    });
                    if (数组.length > 0) {
                        let 输出 = 异步输出数组.pop();
                        let 备用: 异步输出[] = undefined;
                        if (输出) {
                            while (输出.是否为局部词典) {
                                (备用 || (备用 = [])).push(输出);
                                输出 = 异步输出数组.pop();
                            }
                            if (输出) {
                                输出.插入内容 += `//@@{ ${数组.join(", ")} }`;
                                未重写词典 = false;
                                异步输出数组.push(输出);
                                if (备用) {
                                    异步输出数组.push(...备用.reverse());
                                }
                            }

                        }
                        else {
                            未重写词典 = true;
                        }
                        去重词典.clear();
                    }
                    else {
                        未重写词典 = true;
                    }
                }
                else {
                    未重写词典 = true;
                }
                去重词典.set(当前全局词典数组.k, 当前全局词典数组.v);

                异步输出数组.push({
                    插入位置: 词典输出位置,
                    插入内容: `${host.getNewLine()}${空白文本}`
                });

                当前全局词典数组 = undefined;
            }
            else {
                未重写词典 = true;
            }
        }

        function 补写尾部词典() {
            if (去重词典.size > 0) {
                let 数组: string[];
                去重词典.forEach((v, k) => {
                    if (v && k) {
                        (数组 || (数组 = [])).push(`${unescapeIdentifier(k)}:${unescapeIdentifier(v)}`);
                    }
                });
                if (数组 && 数组.length > 0) {
                    const 输出 = 异步输出数组.pop();
                    if (输出) {
                        输出.插入内容 += `//@@{ ${数组.join(", ")} }`;
                        异步输出数组.push(输出);
                    }
                    去重词典.clear();
                }
            }
        }

        function 写文件尾() {
            let 文本 = 当前源码文本.substring(读取位置, 当前源码文本.length);
            文本 = 文本.replace(/\/\/@@\s*{.*}(\r\n|\r)*/g, "");
            写(文本);
        }

        function 扫描() {
            当前语义 = 扫描器.scan();
        }

        function 写节点文本(标识符: string) {
            写文本(标识符);
        }

        function 没有补写令牌(令牌: SyntaxKind) {
            const 文本 = 令牌转为中文关键字(令牌);
            if (文本) {
                读取位置 += 令牌转为关键字(令牌).length;
                写关键字(文本);
                return false;
            }
            return true;
        }

        function 写关键字(关键字: string) {
            写(关键字);
        }

        function 处理引用(文本: string) {
            const 原来长度 = 文本.length;
            文本 = 处理头部三斜线指令(文本, host);
            读取位置 += 原来长度;
            return 文本;
        }
    }

    /* @internal */
    export function 写声明文件(声明路径: string, 源文件或绑定集: SourceFile | Bundle, host: EmitHost, 诊断信息: DiagnosticCollection) {
        const 声明生成结果 = 生成声明结果(host, 源文件或绑定集);
        const 是否跳过输出 = 声明生成结果.解析诊断信息 || host.isEmitBlocked(声明路径) || host.getCompilerOptions().noEmit;
        const 词典在文件尾 = host.getCompilerOptions().词典在文件尾;
        if (!是否跳过输出) {
            const 源码文件集 = 源文件或绑定集.kind === SyntaxKind.Bundle ? 源文件或绑定集.sourceFiles : [源文件或绑定集];
            let 声明输出 = 声明生成结果.同步输出结果;
            let 累计 = 0;
            const 异步内容 = 声明生成结果.异步输出数组;
            if (!词典在文件尾) {
                if (异步内容.length > 0) {
                    let 输出 = "";
                    forEach(异步内容, 合并内容 => {
                        if (合并内容 && 合并内容.插入内容 && 合并内容.插入内容.length > 0) {
                            const 临时 = 声明输出.substring(累计, 合并内容.插入位置) + 合并内容.插入内容;
                            输出 += 临时;
                            累计 = 合并内容.插入位置;
                        }
                    });
                    声明输出 = 输出 + 声明输出.substring(累计);
                }
            }
            else {
                if (异步内容.length > 0) {
                    let 输出 = "";
                    forEach(异步内容, 合并内容 => {
                        if (合并内容 && 合并内容.插入内容 && 合并内容.插入内容.length > 0 && 合并内容.是否为局部词典) {
                            输出 += 声明输出.substring(累计, 合并内容.插入位置) + 合并内容.插入内容;
                            累计 = 合并内容.插入位置;
                        }
                    });
                    声明输出 = 输出 + 声明输出.substring(累计);
                }
            }
            writeFile(host, 诊断信息, 声明路径, 声明输出, host.getCompilerOptions().emitBOM, 源码文件集);
        }
        return 是否跳过输出;
    }
}
