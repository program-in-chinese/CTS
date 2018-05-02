
namespace ts {
    export function 输出三斜线指令(sourceFile: SourceFile, 中文关键字: boolean, 作者: ts.EmitTextWriter) {
        const hasNoDefaultLib = sourceFile.hasNoDefaultLib;
        const files = sourceFile.referencedFiles;
        const types = sourceFile.typeReferenceDirectives;
        if (hasNoDefaultLib) {
            作者.write(中文关键字 ? `/// <reference no-default-lib="true"/>` : `/// <${unicodeDic.TripleSlash.reference} ${unicodeDic.TripleSlash.no_default_lib}="${unicodeDic.TripleSlash.true}"/>`);
            作者.writeLine();
        }
        if (sourceFile.moduleName) {
            作者.write(中文关键字 ? `/// <${unicodeDic.TripleSlash.amd_module} ${unicodeDic.TripleSlash.name}="${sourceFile.moduleName}" />` : `/// <amd-module name="${sourceFile.moduleName}" />`);
            作者.writeLine();
        }
        if (sourceFile.amdDependencies) {
            for (const dep of sourceFile.amdDependencies) {
                if (dep.name) {
                    作者.write(中文关键字 ? `/// <${unicodeDic.TripleSlash.amd_dependency} ${unicodeDic.TripleSlash.name}="${dep.name}" ${unicodeDic.TripleSlash.path}="${dep.path}" />` : `/// <amd-dependency name="${dep.name}" path="${dep.path}" />`);
                }
                else {
                    作者.write(中文关键字 ? `/// <${unicodeDic.TripleSlash.amd_dependency} ${unicodeDic.TripleSlash.path}="${dep.path}" />` : `/// <amd-dependency path="${dep.path}" />`);
                }
                作者.writeLine();
            }
        }
        for (const directive of files) {
            作者.write(中文关键字 ? `/// <${unicodeDic.TripleSlash.reference} ${unicodeDic.TripleSlash.path}="${directive.fileName}" />` : `/// <reference path="${directive.fileName}" />`);
            作者.writeLine();
        }
        for (const directive of types) {
            作者.write(中文关键字 ? `/// <${unicodeDic.TripleSlash.reference} ${unicodeDic.TripleSlash.types}="${directive.fileName}" />` : `/// <reference types="${directive.fileName}" />`);
            作者.writeLine();
        }
    }
}