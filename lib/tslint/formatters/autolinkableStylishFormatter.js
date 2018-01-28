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
var Lint = require("tslint");
var colors = require("colors");
var path_1 = require("path");
function groupBy(array, getGroupId) {
    if (!array) {
        return [];
    }
    var groupIdToGroup = {};
    var result; // Compacted array for return value
    for (var index = 0; index < array.length; index++) {
        var value = array[index];
        var key = getGroupId(value, index);
        if (groupIdToGroup[key]) {
            groupIdToGroup[key].push(value);
        }
        else {
            var newGroup = [value];
            groupIdToGroup[key] = newGroup;
            if (!result) {
                result = [newGroup];
            }
            else {
                result.push(newGroup);
            }
        }
    }
    return result || [];
}
function max(array, selector) {
    if (!array) {
        return 0;
    }
    var max = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        var scalar = selector(item);
        if (scalar > max) {
            max = scalar;
        }
    }
    return max;
}
function getLink(failure, color) {
    var lineAndCharacter = failure.getStartPosition().getLineAndCharacter();
    var sev = failure.getRuleSeverity().toUpperCase();
    var path = failure.getFileName();
    // Most autolinks only become clickable if they contain a slash in some way; so we make a top level file into a relative path here
    if (path.indexOf("/") === -1 && path.indexOf("\\") === -1) {
        path = "." + path_1.sep + path;
    }
    return (color ? (sev === "WARNING" ? colors.blue(sev) : colors.red(sev)) : sev) + ": " + path + ":" + (lineAndCharacter.line + 1) + ":" + (lineAndCharacter.character + 1);
}
function getLinkMaxSize(failures) {
    return max(failures, function (f) { return getLink(f, /*color*/ false).length; });
}
function getNameMaxSize(failures) {
    return max(failures, function (f) { return f.getRuleName().length; });
}
function pad(str, visiblelen, len) {
    if (visiblelen >= len)
        return str;
    var count = len - visiblelen;
    for (var i = 0; i < count; i++) {
        str += " ";
    }
    return str;
}
var Formatter = /** @class */ (function (_super) {
    __extends(Formatter, _super);
    function Formatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Formatter.prototype.format = function (failures) {
        return groupBy(failures, function (f) { return f.getFileName(); }).map(function (group) {
            var currentFile = group[0].getFileName();
            var linkMaxSize = getLinkMaxSize(group);
            var nameMaxSize = getNameMaxSize(group);
            return "\n" + currentFile + "\n" + group.map(function (f) { return pad(getLink(f, /*color*/ true), getLink(f, /*color*/ false).length, linkMaxSize) + " " + colors.grey(pad(f.getRuleName(), f.getRuleName().length, nameMaxSize)) + " " + colors.yellow(f.getFailure()); }).join("\n");
        }).join("\n");
    };
    Formatter.metadata = {
        formatterName: "autolinkableStylish",
        description: "Human-readable formatter which creates stylish messages with autolinkable filepaths.",
        descriptionDetails: (_a = ["\n            Colorized output grouped by file, with autolinkable filepaths containing line and column information\n        "], _a.raw = ["\n            Colorized output grouped by file, with autolinkable filepaths containing line and column information\n        "], Lint.Utils.dedent(_a)),
        sample: (_b = ["\n        src/myFile.ts\n        ERROR: src/myFile.ts:1:14 semicolon Missing semicolon"], _b.raw = ["\n        src/myFile.ts\n        ERROR: src/myFile.ts:1:14 semicolon Missing semicolon"], Lint.Utils.dedent(_b)),
        consumer: "human"
    };
    return Formatter;
}(Lint.Formatters.AbstractFormatter));
exports.Formatter = Formatter;
var _a, _b;

//# sourceMappingURL=autolinkableStylishFormatter.js.map
