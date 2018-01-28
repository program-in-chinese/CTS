"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Lint = require("tslint/lib");
var ts = require("typescript");
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.FAILURE_STRING = "The '|' and '&' operators must be surrounded by single spaces";
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    var sourceFile = ctx.sourceFile;
    ts.forEachChild(sourceFile, recur);
    function recur(node) {
        if (node.kind === ts.SyntaxKind.UnionType || node.kind === ts.SyntaxKind.IntersectionType) {
            check(node.types);
        }
        ts.forEachChild(node, recur);
    }
    function check(types) {
        var expectedStart = types[0].end + 2; // space, | or &
        for (var i = 1; i < types.length; i++) {
            var currentType = types[i];
            if (expectedStart !== currentType.pos || currentType.getLeadingTriviaWidth() !== 1) {
                var previousTypeEndPos = sourceFile.getLineAndCharacterOfPosition(types[i - 1].end);
                var currentTypeStartPos = sourceFile.getLineAndCharacterOfPosition(currentType.pos);
                if (previousTypeEndPos.line === currentTypeStartPos.line) {
                    ctx.addFailureAtNode(currentType, Rule.FAILURE_STRING);
                }
            }
            expectedStart = currentType.end + 2;
        }
    }
}

//# sourceMappingURL=typeOperatorSpacingRule.js.map
