
/* @internal */
namespace ts.转为CTS {

    interface 声明输出结果 {
        同步输出结果: string;
        异步输出数组: 异步输出[];
    }

    interface 异步输出 {
        插入位置: number;
        插入内容: string;
    }

    interface 输出声明编辑器 extends EmitTextWriter, SymbolWriter { }

    function 生成转换结果(声明文件: SourceFile): 声明输出结果 {

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
            扫描器 = createScanner(node.languageVersion, /***/ false, node.languageVariant, "", /***/ undefined, 0, 0, true);
            forEachChild(node, 回调);
        }

        function 回调(node: Node) {
            if (node && node.kind && (isWord(node.kind) || isStringLiteral(node))) {
                let 节点文本 = ""
                if (isKeyword(node.kind)) {
                    节点文本 = tokenToStringUn(node.kind)
                } else if (node && (<Identifier>node).别名) {
                    if ((<Identifier>node).别名.旗帜 & 别名旗帜.英汉) {
                        节点文本 = 取中文名称((<Identifier>node).别名)
                    } else {
                        节点文本 = node.getText()
                    }
                } else {
                    节点文本 = node.getText()
                }

                if (!上次结尾位置) {
                    上次结尾位置 = 0
                }
                let 插入内容 = 当前源码文本.substring(上次结尾位置, node.getStart())

                let 插入位置 = 编辑器.getTextPos()

                处理异步输出(插入内容, 插入位置)
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
                    case SyntaxKind.词典语句:
                        break;
                    default:
                        文本 += 补写令牌(当前语义) || 扫描器.getTokenText()
                }
                扫描()
            }

            异步输出数组.push({ 插入位置: 位置, 插入内容: 文本 })

        }

        function 扫描() {
            当前语义 = 扫描器.scan();
        }

        function 补写令牌(令牌: SyntaxKind) {
            return tokenToStringUn(令牌)
        }

        function 取中文名称(别名参数: 别名) {
            return 别名参数.旗帜 & 别名旗帜.英汉 ? 别名参数.旗帜 & 别名旗帜.字面量 ? `"${unescapeLeadingUnderscores(别名参数.名称)}"` : unescapeLeadingUnderscores(别名参数.名称) : undefined
        }
    }

    /* @internal */
    export function 转为CTS(源码文件: SourceFile) {
        
        if (源码文件.scriptKind !== ScriptKind.CTS) {
            return
        }

        const 转换结果 = 生成转换结果(源码文件);
        let 输出文本 = 转换结果.同步输出结果;
        let 累计 = 0;
        const 异步内容 = 转换结果.异步输出数组;

        if (异步内容.length > 0) {
            let 输出 = "";
            forEach(异步内容, 合并内容 => {
                if (合并内容 && 合并内容.插入内容) {
                    输出 += 输出文本.substring(累计, 合并内容.插入位置) + 合并内容.插入内容;
                    累计 = 合并内容.插入位置;
                }
            });
            输出文本 = 输出 + 输出文本.substring(累计);
        }

        return 输出文本;

    }

}
