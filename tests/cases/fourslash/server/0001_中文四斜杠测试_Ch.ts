/// <reference path="../fourslash.ts"/>
// @filename: /a/四斜杠测试_1_ch.ts
////export class /*1*/试验 {
////    private 属性1: string;
////    constructor(属性: string) {
////        this.属性1 = 属性
////    }
////}
test.markers().forEach((marker) => {
    verify.验证转为CTS(marker.fileName, `导出 类别 试验 {
        私有 属性1: 文字;
        构造(属性: 文字) {
            本体.属性1 = 属性
        }
    }`);
});

