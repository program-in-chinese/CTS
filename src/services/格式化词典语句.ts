
/* @internal */
namespace ts.格式化词典 {
    
    interface 声明输出结果 {
        同步输出结果: string;
        异步输出数组: 异步输出[];
    }

    interface 异步输出 {
        插入位置: number;
        插入内容: string;
        词典插入位置?: number;
        词典文本?: string[]
        后置文本?: string
    }

    interface 输出声明编辑器 extends EmitTextWriter, SymbolWriter {
    }

    function 生成声明结果(声明文件: SourceFile): 声明输出结果 {
        const 系统新行字符 = sys.newLine;
        let 写出: (s: string) => void;
        let 扫描器: Scanner;
        let 当前语义: SyntaxKind;
        let 编辑器: 输出声明编辑器;
        const 异步输出数组: 异步输出[] = [];
        let 上次结尾位置: number;
        创建输出编辑器();
        let 当前源码文本: string;

        输出源文件(声明文件)

        return {
            同步输出结果: 编辑器.getText() + 声明文件.text.substring(上次结尾位置),
            异步输出数组,
        };

        function 创建输出编辑器(): void {
            const 编辑器 = <输出声明编辑器>createTextWriter(系统新行字符);
            setWriter(编辑器);
        }

        function setWriter(新编辑器: 输出声明编辑器) {
            编辑器 = 新编辑器;
            写出 = 新编辑器.write;
        }

        function 输出源文件(node: SourceFile) {
            当前源码文本 = node.text
            扫描器 = createScanner(node.languageVersion, /***/ false, node.languageVariant, "");
            forEachChild(node, 回调);
        }

        function 回调(node: Node) {
            if (node && node.kind && (isWord(node.kind) || isStringLiteral(node))) {
                let 节点文本 = ""
                let 词典语句
                if (isKeyword(node.kind)) {
                    节点文本 = 令牌转为中文关键字(node.kind)
                } else if (node && node.别名) {
                    if (node.别名.旗帜 & 别名旗帜.英汉) {
                        节点文本 = 取中文名称(node.别名)
                    } else {
                        节点文本 = node.getText()
                    }
                    词典语句 = `${取中文名称(node.别名) || node.getText()}:${取英文名称(node.别名) || node.getText()}`
                } else {
                    节点文本 = node.getText()
                }
                if (!上次结尾位置) {
                    上次结尾位置 = 0
                }
                let 插入内容 = 当前源码文本.substring(上次结尾位置, node.getStart())

                let 插入位置 = 编辑器.getTextPos()

                处理异步输出(插入内容, 插入位置)

                if (词典语句) {
                    let 异步位置 = 查找最近的词典插入位置()
                    if (异步位置 !== -1) {
                        if (!异步输出数组[异步位置].词典文本) {
                            异步输出数组[异步位置].词典文本 = []
                        }
                        let i = 异步输出数组[异步位置].词典文本.lastIndexOf(词典语句)
                        if (i === -1) {
                            异步输出数组[异步位置].词典文本.push(词典语句)
                        }
                    }
                }

                上次结尾位置 = node.getEnd()

                写文本(节点文本)
            } else {
                forEachChild(node, 回调);
            }
        }

        function 写文本(s: string) {
            写出(s);
        }

        function 处理异步输出(内容: string = "", 位置: number = 0) {
            if (!内容) {
                return
            }

            let 文本 = ""
            扫描器.setText(内容);
            扫描();

            while (当前语义 !== SyntaxKind.EndOfFileToken) {
                switch (当前语义) {
                    case SyntaxKind.全局词典语句:
                    case SyntaxKind.局部词典语句:
                        break;
                    default:
                        文本 += 补写令牌(当前语义) || 扫描器.getTokenText()

                }
                扫描()
            }

            let 杂项分组 = 文本.split("\n")

            let 输出: string
            let 插入位置 = -1
            let 前部有空格: string

            if (杂项分组) {
                let 最后一行 = 杂项分组.pop()
                let 前面空白 = 最后一行.match(/^\s*/)

                if (前面空白 && 杂项分组 && 杂项分组.length) {
                    let i = 前面空白[0].length
                    前部有空格 = 前面空白[0]
                    let 新组 = 杂项分组.filter(v => !/^\s*$/.test(v))
                    输出 = 新组 && 新组.length ? 新组.join("\n") : ""
                    插入位置 = 输出.length + i

                    输出 += 前部有空格 ? 前部有空格 + 最后一行.substring(i) : 最后一行

                }

                if (!输出) {
                    输出 = 文本
                }

                if (插入位置 === -1) {
                    if (!异步输出数组[0]) {
                        异步输出数组.push({ 插入位置: 位置, 插入内容: 输出, 词典插入位置: 0, 后置文本: 前部有空格 || "" })
                    } else {
                        异步输出数组.push({ 插入位置: 位置, 插入内容: 输出, 后置文本: 前部有空格 || "" })
                    }
                } else {
                    异步输出数组.push({ 插入位置: 位置, 插入内容: 输出, 词典插入位置: 插入位置, 后置文本: 前部有空格 || "" })
                }
            }

        }

        function 扫描() {
            当前语义 = 扫描器.scan();
        }

        function 补写令牌(令牌: SyntaxKind) {
            return 令牌转为中文关键字(令牌)
        }

        function 查找最近的词典插入位置() {
            for (let i = 异步输出数组.length - 1; i >= 0; i--) {
                if (异步输出数组[i].词典插入位置) {
                    return i
                }
            }
            return -1
        }

        function 取中文名称(别名参数: 别名) {
            return 别名参数.旗帜 & 别名旗帜.英汉 ? 别名参数.旗帜 & 别名旗帜.字面量 ? `"${unescapeLeadingUnderscores(别名参数.名称)}"` : unescapeLeadingUnderscores(别名参数.名称) : undefined
        }

        function 取英文名称(别名参数: 别名) {
            return 别名参数.旗帜 & 别名旗帜.汉英 ? 别名参数.旗帜 & 别名旗帜.字面量 ? `"${unescapeLeadingUnderscores(别名参数.名称)}"` : unescapeLeadingUnderscores(别名参数.名称) : undefined
        }

    }

    /* @internal */
    export function 写声明文件(声明文件: SourceFile) {
        if (!声明文件.isDeclarationFile) {
            return
        }
        if (声明文件.scriptKind !== ScriptKind.CTS) {
            return
        }
        const 声明生成结果 = 生成声明结果(声明文件);
        let 声明输出 = 声明生成结果.同步输出结果;
        let 累计 = 0;
        const 异步内容 = 声明生成结果.异步输出数组;

        if (异步内容.length > 0) {
            let 输出 = "";

            forEach(异步内容, 合并内容 => {
                if (合并内容 && 合并内容.插入内容) {
                    if (合并内容.词典文本 && 合并内容.词典文本.length) {
                        合并内容.插入内容 = 合并内容.插入内容.substring(0, 合并内容.词典插入位置) + `//@@{ ${合并内容.词典文本.join(", ")} }${sys.newLine}` + 合并内容.后置文本 + 合并内容.插入内容.substring(合并内容.词典插入位置)
                    }
                    输出 += 声明输出.substring(累计, 合并内容.插入位置) + 合并内容.插入内容;
                    累计 = 合并内容.插入位置;
                }
            });

            声明输出 = 输出 + 声明输出.substring(累计);
        }

        return 声明输出;

    }

}
