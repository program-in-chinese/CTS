//// [tests/cases/compiler/0.0.1_中文测试集/0002_测试_Ch.ts] ////

//// [index.d.ts]
//@@{ 测试:foo, 属性1:bar, 属性2:baz, 合成属性:nested, 甲:a, 乙:b }
导出 类型 测试 = {
  属性1: 数字 | 空值;
  属性2: 文字;
  合成属性: {
    甲: 数字;
    乙: 文字 | 空值;
  }
}

//@@{ 元素1:elem1, 元素2:elem2 }
导出 类型 属性1 = {
  元素1: 数字 | 空值;
  元素2: 测试 | 空值;
}

//// [测试_2_ch.ts]
导入 { 测试, 属性1 } 来自 "testCh"

常量 aFoo: 测试 = { bar: 3, 属性2: "b", 合成属性: { 甲: 1, 乙: "y" } };

如果 (aFoo.bar && aFoo.合成属性.乙) {
  常量 { 属性1, 属性2, 合成属性: { 甲, 乙: text } } = aFoo;
  常量 A: 数字 = aFoo.bar;
  常量 B: 数字 = 属性1;
  常量 C: 文字 = 属性2;
  常量 D: 数字 = 甲;
  常量 E: 文字 = text;
}

常量 bBar:属性1 = { 元素1: 7, 元素2: aFoo };

如果(bBar.元素2 && bBar.元素2.属性1 && bBar.元素2.合成属性.乙) {
  常量 { 属性1, 属性2, 合成属性: { 甲, 乙: text } } = bBar.元素2;
  常量 A: 数字 = bBar.元素2.属性1;
  常量 B: 数字 = 属性1;
  常量 C: 文字 = 属性2;
  常量 D: 数字 = 甲;
  常量 E: 文字 = text;
}


//// [测试_2_ch.js]
const aFoo = { bar: 3, baz: "b", nested: { a: 1, b: "y" } };
if (aFoo.bar && aFoo.nested.b) {
    const { bar, baz, nested: { a, b: text } } = aFoo;
    const A = aFoo.bar;
    const B = bar;
    const C = baz;
    const D = a;
    const E = text;
}
const bBar = { elem1: 7, elem2: aFoo };
if (bBar.elem2 && bBar.elem2.bar && bBar.elem2.nested.b) {
    const { bar, baz, nested: { a, b: text } } = bBar.elem2;
    const A = bBar.elem2.bar;
    const B = bar;
    const C = baz;
    const D = a;
    const E = text;
}
