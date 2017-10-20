/// <reference path="core.ts"/>
/// <reference path="factory.ts"/>
/// <reference path="内置词典.ts"/>

namespace ts {

    export const 内置键值映射: Map<string> = 创建内部键值表(内置英汉键值映射);

    export function 创建内部键值表(键值表: Map<string>) {
        return 合并映射表(键值表, 翻转键值(键值表));
    }

    export function 合并映射表(目标: Map<string>, 源: Map<string>) {
        源.forEach((v, k) => {
            const 新值 = 目标.get(k);
            if (!新值) {
                目标.set(k, v);
            }
        });
        return 目标;
    }

    export function 翻转键值(目标: Map<string>) {
        return mapEntries(目标, (k, v) => {
            return [v, k];
        });
    }

    export function 创建空对象<T>(): T {
        const map = Object.create( /***/ undefined);
        map["__"] = undefined;
        delete map["__"];
        return map;
    }


    export function 创建汉英词典(键: string, 值: string, 是内置词典?: boolean) {
        const 键标识符 = { kind: SyntaxKind.Identifier, text: 键 as __String };
        const 词典键 = { kind: SyntaxKind.词典键, name: 键标识符 };
        const 值标识符 = { kind: SyntaxKind.Identifier, text: 值 as __String };
        const 词典值 = { kind: SyntaxKind.词典值, name: 值标识符 };
        const 词典 = { kind: SyntaxKind.词典表达式, 键: 词典键, 值: 词典值, 是内置词典: 是内置词典 ? 别名旗帜.内置词典 : undefined, 词典类别: 别名旗帜.汉英, pos: -1, end: -1 };

        return 词典 as 词典;
    }

    export function 创建英汉词典(键: string, 值: string, 是内置词典?: boolean) {
        const 键标识符 = { kind: SyntaxKind.Identifier, text: 键 as __String };
        const 词典键 = { kind: SyntaxKind.词典键, name: 键标识符 };
        const 值标识符 = { kind: SyntaxKind.Identifier, text: 值 as __String };
        const 词典值 = { kind: SyntaxKind.词典值, name: 值标识符 };
        const 词典 = { kind: SyntaxKind.词典表达式, 键: 词典键, 值: 词典值, 是内置词典: 是内置词典 ? 别名旗帜.内置词典 : undefined, 词典类别: 别名旗帜.英汉, pos: -1, end: -1 };

        return 词典 as 词典;
    }

    export function 创建内置词典映射() {
        const 内置词典: UnderscoreEscapedMap<词典> = createUnderscoreEscapedMap<词典>();
        内置汉英词典键值映射.forEach((v, k) => {
            内置词典.set(escapeLeadingUnderscores(v), 创建英汉词典(v, k, /***/ true));
            内置词典.set(escapeLeadingUnderscores(k), 创建汉英词典(k, v, /***/ true));
        });
        return 内置词典;
    }

    export function 创建内置关键词词典() {
        const 内置词典: UnderscoreEscapedMap<词典> = createUnderscoreEscapedMap<词典>();
        内置键值映射.forEach((v, k) => {
            内置词典.set(escapeLeadingUnderscores(v), 创建汉英词典(v, k, /***/ true));
            内置词典.set(escapeLeadingUnderscores(k), 创建英汉词典(k, v, /***/ true));
        });
        return 内置词典;
    }

    export function 对象是节点(对象: any): 对象 is Node {
        return !!(<any>对象)["kind"];
    }

    export function 是字面量节点(node: Node): node is LiteralLikeNode {
        return node.kind === SyntaxKind.StringLiteral;
    }

    export function 取词典类别(文件名: string) {
        return (fileExtensionIs(文件名, Extension.Dts) || fileExtensionIs(文件名, Extension.Ts) || fileExtensionIs(文件名, Extension.Tsx)) ? 别名旗帜.英汉 : 别名旗帜.汉英;
    }

    export function 取局部字典评论范围(node: Node, text: string) {
        const commentRanges = getLeadingCommentRangesOfNodeFromText(node, text);
        // True if the comment starts with '/**' but not if it is '/**/'
        return filter(commentRanges, comment =>
            text.charCodeAt(comment.pos + 1) === CharacterCodes.slash &&
            text.charCodeAt(comment.pos + 2) === CharacterCodes.at &&
            text.charCodeAt(comment.pos + 3) === CharacterCodes.openBrace);
    }

    export function 取属性名称的名称节点(name: PropertyName): Node {
        switch (name.kind) {
            case SyntaxKind.Identifier:
            case SyntaxKind.StringLiteral:
                return <PropertyName>name;
            case SyntaxKind.ComputedPropertyName:
                if (isStringOrNumericLiteral((<ComputedPropertyName>name).expression)) {
                    return <LiteralExpression>(<ComputedPropertyName>name).expression;
                }
        }
        return undefined;
    }

    export function 取属性名称别名(name: PropertyName): 别名 {
        if (name) {
            switch (name.kind) {
                case SyntaxKind.Identifier:
                case SyntaxKind.StringLiteral:
                    return (<PropertyName>name).别名;
                case SyntaxKind.ComputedPropertyName:
                    if (isStringOrNumericLiteral((<ComputedPropertyName>name).expression)) {
                        return (<LiteralExpression>(<ComputedPropertyName>name).expression).别名;
                    }
            }
        }
        return undefined;
    }

    export function 取输出文本(源码文本: string, 节点: Node, 文件种类: 文件种类, 使用场景: 使用场景, 包含琐事 = false): string {
        let 种类 = 输出种类.输出源码;
        if (节点.别名) {
            种类 = 取输出种类(文件种类, 使用场景);
            if (种类 !== 输出种类.输出源码) {
                let 前部的琐事: string;
                if (包含琐事) {
                    前部的琐事 = 源码文本.substring(节点.pos, skipTrivia(源码文本, 节点.pos));
                }
                if (种类 === 输出种类.输出英文) {
                    const 输出 = 输出节点编码英文(节点, 前部的琐事);
                    if (输出) {
                        return 输出;
                    }

                }
                else if (种类 === 输出种类.输出中文) {
                    const 输出 = 输出节点编码中文(节点, 前部的琐事);
                    if (输出) {
                        return 输出;
                    }
                }
            }
        }
        const 起点 = 包含琐事 ? 节点.pos : skipTrivia(源码文本, 节点.pos);
        return 源码文本.substring(起点, 节点.end);
    }

    export function 输出节点编码英文(node: Node, 前部琐事?: string) {
        if (!node.别名) {
            return;
        }
        if (node.别名.旗帜 & 别名旗帜.汉英) {
            if (前部琐事) {
                return 是字面量节点(node) ? `"${前部琐事}${unescapeLeadingUnderscores(node.别名.名称 as __String)}"` : 前部琐事 + unescapeLeadingUnderscores(node.别名.名称 as __String);
            }
            else {
                return 是字面量节点(node) ? `"${unescapeLeadingUnderscores(node.别名.名称 as __String)}"` : unescapeLeadingUnderscores(node.别名.名称 as __String);
            }
        }
        return;
    }

    export function 输出节点编码中文(node: Node, 前部琐事?: string) {
        if (!node.别名) {
            return;
        }
        if (node.别名.旗帜 & 别名旗帜.英汉) {
            if (前部琐事) {
                return 是字面量节点(node) ? `"${前部琐事}${unescapeLeadingUnderscores(node.别名.名称 as __String)}"` : 前部琐事 + unescapeLeadingUnderscores(node.别名.名称 as __String);
            }
            else {
                return 是字面量节点(node) ? `"${unescapeLeadingUnderscores(node.别名.名称 as __String)}"` : unescapeLeadingUnderscores(node.别名.名称 as __String);
            }
        }
        return;
    }

    export function 交换词典键值(词典: 词典) {
        return { ...词典, 键: 词典.值, 值: 词典.键, 词典类别: 词典.词典类别 === 别名旗帜.汉英 ? 别名旗帜.英汉 : 别名旗帜.汉英 } as 词典;
    }


    export function 取输出种类(种类: 文件种类, 场景: 使用场景) {
        switch (种类) {
            case 文件种类.CTS:
            case 文件种类.CTSX:
            case 文件种类.DTS:
            case 文件种类.DCTS:
                if (场景 === 使用场景.类型检查) {
                    return 输出种类.输出中文;
                }
                else if (场景 === 使用场景.输出) {
                    return 输出种类.输出英文;
                }
                break;
            case 文件种类.TS:
            case 文件种类.TSX:
                if (场景 === 使用场景.类型检查) {
                    return 输出种类.输出中文;
                }
                else if (场景 === 使用场景.输出) {
                    return 输出种类.输出英文;
                }
                break;
            default:
                return 输出种类.输出源码;
        }
    }

    export function 取文件种类(文件名: string) {
        if (fileExtensionIs(文件名, ".d.cts")) {
            return 文件种类.DCTS;
        }
        if (fileExtensionIs(文件名, ".d.ts")) {
            return 文件种类.DTS;
        }
        if (fileExtensionIs(文件名, ".cts")) {
            return 文件种类.CTS;
        }
        if (fileExtensionIs(文件名, ".ts")) {
            return 文件种类.TS;
        }
        if (fileExtensionIs(文件名, ".ctsx")) {
            return 文件种类.CTSX;
        }
        if (fileExtensionIs(文件名, ".tsx")) {
            return 文件种类.TSX;
        }
        if (fileExtensionIs(文件名, ".js")) {
            return 文件种类.JS;
        }
        if (fileExtensionIs(文件名, ".jsx")) {

            return 文件种类.JSX;
        }
        return 文件种类.未知;
    }

    export function 取别名旗帜(词典: 词典, 旗帜?: 别名旗帜) {
        return 旗帜 | 词典.是单向词典 | 词典.是文本字面量词典 | 词典.是内置词典 | 词典.是局部词典 | 词典.词典类别;
    }

    export function 取别名名称(对象: Symbol | Node | Type): __String {
        return 对象.别名 ? 对象.别名.名称 : undefined;
    }

    export function 取符号节点类型中文(符号或名称声明: Symbol | Identifier | StringLiteral): string {
        if (符号或名称声明) {
            const 别名: 别名 = 符号或名称声明.别名;
            if (别名 && 别名.旗帜 & 别名旗帜.英汉) {
                return 别名.名称 as string;
            }
            else {
                return 对象是节点(符号或名称声明) ? 符号或名称声明.text as string : 符号或名称声明.name as string;
            }
        }
        return;
    }

    export function 取符号节点类型英文(符号或名称声明: Symbol | Identifier | StringLiteral): string {
        if (符号或名称声明) {
            const 别名: 别名 = 符号或名称声明.别名;
            if (别名 && 别名.旗帜 & 别名旗帜.英汉) {
                return 对象是节点(符号或名称声明) ? 符号或名称声明.text as string : 符号或名称声明.name as string;
            }
            else {
                return 别名.名称 as string;
            }
        }
        return;
    }

    export function 对象名称是交叉相等的(左值: 文本名称, 右值: 文本名称) {
        return 左值.名称 === 右值.名称 || !左值.名称 || !右值.名称 || 左值.别名 === 右值.名称 || 右值.别名 === 左值.名称;
    }

    export function 创建文本别名(名称参数: __String | string, 别名参数: 别名) {
        return { 名称: 名称参数, 别名: 别名参数 ? 别名参数.名称 : undefined };
    }

    export function 翻转别名旗帜(旗帜: 别名旗帜) {
        return 旗帜 & 别名旗帜.汉英 ? 旗帜 ^ 别名旗帜.汉英 | 别名旗帜.英汉 : 旗帜 ^ 别名旗帜.英汉 | 别名旗帜.汉英;
    }

    export function 按名称取符号表符号(符号表: SymbolTable, 名称: __String): Symbol {
        if (!符号表 || 符号表.size === 0 || !名称) {
            return;
        }
        const 返回值 = 符号表.get(名称) || forEachEntry(符号表, v => {
            if (v.别名 && v.别名.名称 === 名称) {
                return v;
            }
        });

        return 返回值;

    }

    export const JSDoc标签正则表达式 = /\b(@type|@property|@prop|@typedef|@augments|@augment|@template|@return|@returns|@arg|@param|@constructor|@class)\b/gim;

    export function 替换JSDoc标签(评论文本: string) {
        return 评论文本.replace(JSDoc标签正则表达式, (s) => {
            return 内置JSDoc标签名.get(s) || s;
        });
    }


    export function 处理模块引用路径(路径: string) {
        return 规范路径(路径).replace(/@types/gim, "@types_ch");
        function 规范路径(路径: string) {
            return 路径.replace(/\\/g, "/");
        }
    }

    export function 处理头部三斜线指令(文本: string, 主机?: EmitHost) {
        const 分组 = 文本.split(取换行符(文本));
        let 返回文本: string[];

        for (const s of 分组) {
            const mod = AMD附属替换(s) || 不使用默认库替换(s) || AMD替换(s) || 路径替换(s) || 类型集替换(s);
            if (mod) {
                (返回文本 || (返回文本 = [])).push(mod);
            }
            else {
                (返回文本 || (返回文本 = [])).push(s);
            }
        }

        return 返回文本 ? 返回文本.join(主机 ? 主机.getNewLine() : "\n") : 文本;


        function 取换行符(文本: string) {
            const 换行符 = ["\r\n", "\n", "\r"];
            if (文本.indexOf(换行符[0]) > -1) {
                return 换行符[0];
            }
            if (文本.indexOf(换行符[1]) > -1) {
                return 换行符[1];
            }
            if (文本.indexOf(换行符[2]) > -1) {
                return 换行符[2];
            }
            return 换行符[0];
        }

        function 不使用默认库替换(s: string) {
            return /^\/\/\/\s*<reference\s+no-default-lib\s*=\s*('|")(.+?)\1\s*\/>/gim.test(s) ?
                s.replace(/^\/\/\/\s*<reference\s+no-default-lib\s*=\s*('|")(.+?)\1\s*\/>/gim, `/// <引用 不使用默认支持库= "真"/>`) : undefined;
        }

        function AMD替换(s: string) {
            return /^\/\/\/\s*<amd-module\s+/gim.test(s) ?
                s.replace(/^\/\/\/\s*<amd-module\s/gim, "/// <AMD模块 ").replace(/\s(path)\s*=\s*('|")(.+?)\2/gim, (ss, sss, ssss, sssss) => {
                    ss = ss;
                    sss = " 路径= ";
                    return sss + ssss + 处理模块引用路径(sssss) + ssss + " />";
                }).replace(/\s(name)\s*=\s*('|")(.+?)\2/gim, (ss, sss, ssss, sssss) => {
                    ss = ss;
                    sss = " 名称= ";
                    return sss + ssss + sssss + ssss + " />";
                }) : undefined;
        }

        function AMD附属替换(s: string) {
            return /^\/\/\/\s*<amd-dependency\s+/gim.test(s) ?
                s.replace(/^\/\/\/\s*<amd-dependency\s+/gim, "/// <AMD附属 ").replace(/\s(path)\s*=\s*('|")(.+?)\2/gim, (ss, sss, ssss, sssss) => {
                    ss = ss;
                    sss = " 路径= ";
                    return sss + ssss + 处理模块引用路径(sssss) + ssss + " />";
                }).replace(/\s(name)\s*=\s*('|")(.+?)\2/gim, (ss, sss, ssss, sssss) => {
                    ss = ss;
                    sss = " 名称= ";
                    return sss + ssss + sssss + ssss + " />";
                }) : undefined;
        }

        function 路径替换(s: string) {
            return /^(\/\/\/\s*<reference\s+path\s*=\s*)('|")(.+?)\2.*?\/>/gim.test(s) ?
                s.replace(/^(\/\/\/\s*<reference\s+path\s*=\s*)('|")(.+?)\2.*?\/>/gim, (ss, sss, ssss, sssss) => {
                    ss = ss;
                    sss = "/// <引用 路径= ";
                    return sss + ssss + 处理模块引用路径(sssss) + ssss + " />";
                }) : undefined;
        }

        function 类型集替换(s: string) {
            return /^(\/\/\/\s*<reference\s+types\s*=\s*)('|")(.+?)\2.*?\/>/gim.test(s) ?
                s.replace(/^(\/\/\/\s*<reference\s+types\s*=\s*)('|")(.+?)\2.*?\/>/gim, (ss, sss, ssss, sssss) => {
                    ss = ss;
                    sss = "/// <引用 类型集= ";
                    return sss + ssss + sssss + ssss + " />";
                }) : undefined;
        }
    }
}
