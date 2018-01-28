/// <reference path="../factory.ts" />
/// <reference path="../visitor.ts" />

/*@internal*/
namespace ts {
    export function transformCts(context: TransformationContext) {

        const resolver = context.getEmitResolver();
        const 数据 = resolver.取别名助手数据();
        let 数据使用数组: Map<boolean> = createMap();
        const previousOnSubstituteNode = context.onSubstituteNode;
        context.onSubstituteNode = onSubstituteNode;
        context.enableSubstitution(SyntaxKind.StringLiteral);
        return transformSourceFile;

        function transformSourceFile(node: SourceFile) {
            if (node.isDeclarationFile) {
                return node;
            }
            const visited = visitEachChild(node, visitor, context);

            if (数据 && 数据.length > 0 && 数据使用数组.size > 0) {
                const propName: EmitHelper = {
                    name: "typescript:PropName",
                    scoped: false,
                    priority: 17,
                    text: 生成助手数据(数据)
                };
                context.requestEmitHelper(propName);
            }

            if (数据 && 数据.length > 0 && 数据使用数组.size  > 0) {
                addEmitHelpers(visited, context.readEmitHelpers());
            }
            数据使用数组.clear()
            return visited;
        }

        function visitor(node: Node): VisitResult<Node> {
            if (node.别名id > 0) {
                数据使用数组.set("" + node.别名id, true);
                context.enableSubstitution(node.kind);
            }
            return visitEachChild(node, visitor, context);
        }

        function 生成助手数据(数据: string[]) {
            let 结果 = "";
            for (let i = 1; i < 数据.length; i++) {
                if (数据使用数组.has("" + i)) {
                    结果 += `        __${i}: ${数据[i]},\n`;
                }
            }
            return `
var __propName = (this && this.__propName) || function(v, i) {
    var __d = {\n${结果}
    }
    return __d["__" + i][v] || v
}
`;
        }

        function onSubstituteNode(hint: EmitHint, node: Node) {
            if (node && node.别名id > 0) {
                node = previousOnSubstituteNode(hint, node);
                return 创建助手(setEmitFlags(node, EmitFlags.NoSubstitution) as Expression, node.别名id);
            }
            else {
                return previousOnSubstituteNode(hint, node);
            }
        }

        function 创建助手(node: Expression, id: number) {
            return setTextRange(createCall(getHelperName("__propName"), /***/ undefined, [node, createLiteral(id)]), node);
        }
    }

}
