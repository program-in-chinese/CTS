
/* @internal */
namespace ts.转为CTS {

    export function 转为CTS(文件: SourceFile):string {
        let 当前文本: string

        if (文件) {
            当前文本 = ""
            文件.forEachChild(转换节点)
            文件 = 文件.update(当前文本, { span: { start: 文件.pos, length: 文件.end }, newLength: 当前文本.length })
        }
        return 文件.text

        function 转换节点(node: Node) {

            当前文本 += 取前置琐事(node)

            if (isIdentifier(node)) {
                当前文本 += idText(node)// node.escapedText
            } else if (isStringLiteral(node)) {
                当前文本 + node.text
            } else if (isKeyword(node.kind)) {
                当前文本 + 令牌转为中文关键字(node.kind)
            } else if (isLiteralExpression(node)) {
                当前文本 + node.text
            }

            forEachChild(node, 转换节点)

            if (hasJSDocNodes(node)) {
                for (let JsDoc节点 of node.jsDoc) {
                    forEachChild(JsDoc节点, 转换节点)
                }
            }
        }

        function 取前置琐事(node: Node) {
            let 文本 = node.getFullText()
            return 文本 ? 文本.substr(0, node.getStart(undefined, true) - node.getFullStart()) : ""
        }

    }
}
