/* @internal */
namespace ts.词典完成新 {
    let 忽略的名称映射: Map<boolean> = createMap()
    let 正则 = /^[a-zA-Z_$0-9]+$/

    export function 取词典自动完成项目新(程序集: Program, 取消: CancellationToken, sourceFile: SourceFile, position: number, 忽略名称: string): 名称引用[] {
        if (!position || !sourceFile || !sourceFile.isDeclarationFile) {
            return;
        }

        if (sourceFile.text.length < position) {
            return;
        }

        if (忽略名称) {
            忽略的名称映射.set(忽略名称, true)
        }

        const 找到名称: { 名称: string, 节点: Node } = forEachChild(sourceFile, 回调)

        if (!找到名称 || !找到名称.节点) {
            return
        }

        function 回调(n: Node): { 名称: string, 节点: Node } {
            if (n.getFullStart() < position && position < n.getStart()) {
                if (isDeclarationName(n) && isIdentifier(n) && 正则.test(idText(n)) && !忽略的名称映射.has(idText(n))) {
                    忽略的名称映射.clear()
                    return { 名称: idText(n), 节点: n }
                } else {
                    return 回调子节点(n)
                }
            }
            return forEachChild(n, 回调)

            function 回调子节点(cn: Node): { 名称: string, 节点: Node } {
                if (isDeclarationName(cn)) {
                    if (isIdentifier(cn) && 正则.test(idText(cn)) && !忽略的名称映射.has(idText(cn))) {
                        return { 名称: idText(cn), 节点: cn }
                    } else if (isStringLiteral(cn) && 正则.test(cn.text) && !忽略的名称映射.has(cn.text)) {
                        return { 名称: cn.text, 节点: cn }
                    }
                }

                return forEachChild(cn, 回调子节点)
            }

        }

        let 源文件组 = 程序集.getSourceFiles()
        let 过滤组 = 源文件组 && 源文件组.filter(s => s.isDeclarationFile)

        let 结果 = FindAllReferences.getReferenceEntriesForNode(找到名称.节点, 程序集, 过滤组, 取消)

        let 转换结果组: 名称引用[] = []

        for (let 条目 of 结果) {
            const { kind, fileName, textSpan, isInString, parent } = 转换条目(条目);
            转换结果组.push({ kind, fileName, textSpan, isInString, name: 找到名称 && 找到名称.名称, parent })
        }

        return 转换结果组
    }

    function 转换条目(entry: FindAllReferences.Entry): { kind: ScriptElementKind, fileName: string, textSpan: TextSpan, isInString: boolean, parent: Position } {
        if (entry.type === "span") {
            const { fileName, textSpan } = entry;
            return { kind: ScriptElementKind.unknown, fileName, textSpan, isInString: false, parent: null };
        }
        const { node } = entry;
        const fileName = entry.node.getSourceFile().fileName;

        let 父节点 = getContainerNode(node)
        let kind = 查找种类(node)
        let 容器位置 = 转换位置为行数及字符偏移(父节点.getSourceFile(), 父节点.getStart())
        let 位置 = getTextSpan(node)
        
        return { kind, fileName, textSpan: 位置.位置, isInString: 位置.isInString, parent: 容器位置 as Position };

    }

    function 查找种类(node: Node) {
        while (node) {
            let kind = getNodeKind(node)
            if (kind !== ScriptElementKind.unknown) {
                return kind
            }
            node = node.parent
        }
        return ScriptElementKind.unknown
    }

    function getTextSpan(node: Node): { 位置: TextSpan, isInString: boolean } {
        let start = node.getStart();
        let end = node.getEnd();
        let isInString: boolean = false
        if (node.kind === SyntaxKind.StringLiteral) {
            start += 1;
            end -= 1;
            isInString = true
        }
        return { 位置: createTextSpanFromBounds(start, end), isInString };
    }

}
