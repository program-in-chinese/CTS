/// <reference path="../factory.ts" />
/// <reference path="../visitor.ts" />

/*@internal*/
namespace ts {
    export function transformCts(context: TransformationContext) {

        const resolver = context.getEmitResolver();
        const 数据 = resolver.取别名助手数据();
        let 数据使用数组: number[] = [0];

        let currentSourceFile: SourceFile;
        const previousOnSubstituteNode = context.onSubstituteNode;
        context.onSubstituteNode = onSubstituteNode;
        context.enableSubstitution(SyntaxKind.StringLiteral);
        return transformSourceFile;

        function transformSourceFile(node: SourceFile) {
            if (node.isDeclarationFile) {
                return node;
            }
            currentSourceFile = node;
            const visited = visitEachChild(node, visitor, context);

            if (数据 && 数据.length > 0 && 数据使用数组.length > 1) {
                const propName: EmitHelper = {
                    name: "typescript:propName",
                    scoped: false,
                    priority: 15,
                    text: 生成助手数据(数据)
                };
                context.requestEmitHelper(propName);
            }

            if (数据 && 数据.length > 0 && 数据使用数组.length > 1) {
                addEmitHelpers(visited, context.readEmitHelpers());
            }
            currentSourceFile = undefined;
            数据使用数组 = [0];
            return visited;
        }

        function visitor(node: Node): VisitResult<Node> {
            if (node.别名id > 0) {
                数据使用数组.push(node.别名id);
                context.enableSubstitution(node.kind);
            }
            return visitEachChild(node, visitor, context);
        }

        function 生成助手数据(数据: string[]) {
            let 结果 = "";
            for (let i = 1; i < 数据.length; i++) {
                if (数据使用数组.indexOf(i) > 0) {
                    结果 += `      _${i}: ${数据[i]}\n`;
                }
            }
            return `
var  __propName = function(v, i) {
    var _d = {\n${结果}
    }
    return _d["_" + i][v] || v
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
