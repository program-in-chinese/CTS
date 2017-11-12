//// [tests/cases/compiler/0.0.1_中文测试集/0003_测试_Ch.ts] ////

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
//@{ 测试2:bar }
导出 类型 测试2 = {
  元素1: 数字 | 空值;
  元素2: 测试 | 空值;
}

导出 函数 取属性< T, K 扩展 键集 T> (对象值:T, 键: K): T[K]
导出 函数 置属性< T, K 扩展 键集 T> (对象值:T, 键: K, 值: T[K]): T[K]

//@@{ "事件1":"ev1", "事件2":"ev2" }
导出 接口 事件类型{
  "事件1":测试2;
  "事件2":测试2
}

导出 函数 引发事件< K 扩展 键集 事件类型> (事件:K, 实体:测试):无值

//**************** 分割线 *******************//

//// [测试_3_ch.ts]
导入 { 测试, 取属性, 置属性, 引发事件, 事件类型 } 来自 "testCh"

常量 aFoo: 测试 = { 属性1: 3, 属性2: "b", 合成属性: { 甲: 1, 乙: "y" } };
常量 aFoo2: 测试 = { 属性1: 4, 属性2: "c", 合成属性: { 甲: 2, 乙: "z" } };
常量 数组值: 测试[] = [aFoo, aFoo2]
函数 组合(A:文字, B:文字){
  返回(A + B)
}
// 1
aFoo["属性1"]
常量 B: 键集 测试 = "属性1"
// 2
aFoo[B]
// 3
aFoo[组合("属性", "1") 转为 键集 测试] 
// 5
组合("属性1" 转为 键集 测试 , "")
// 6
组合(组合("属性", "1") 转为 键集 测试, "")
// 7
取属性(aFoo, "属性1")
// 8
置属性(aFoo, "属性2", "属性2")
// 9
置属性(aFoo, 组合("属性", "1") 转为 键集 测试, 1)
// 10 
引发事件("事件1", aFoo)
// 11 
引发事件(组合("事件", "2") 转为 键集 事件类型, aFoo)

循环(常量 aF 属于 数组值){
  如果(aF.属性1 === 1){
    aF["属性1"]

  } 否则 如果(aF.属性2 === "c"){
    aF["属性2"]
    常量 {属性2 }=aF
    如果(属性2){}
  }
}

循环(常量 aF 位于 数组值){
  如果(数组值[aF].属性1 === 1){
    数组值[aF]["属性1"]

  } 否则 如果(数组值[aF].属性2 === "c"){
    数组值[aF]["属性2"]
    常量 {属性2 }=数组值[aF]
    如果(属性2){}
  }
}

//// [测试_3_ch.js]
"use strict";
var __propName = (this && this.__propName) || function(v, i) {
    var __d = {
        __1: { "合成属性":"nested", "属性1":"bar", "属性2":"baz" },
        __2: { "事件1":"ev1", "事件2":"ev2" },
    }
    return __d["__" + i][v] || v
}
Object.defineProperty(exports, "__esModule", { value: true });
var testCh_1 = require("testCh");
var aFoo = { bar: 3, baz: "b", nested: { a: 1, b: "y" } };
var aFoo2 = { bar: 4, baz: "c", nested: { a: 2, b: "z" } };
var 数组值 = [aFoo, aFoo2];
function 组合(A, B) {
    return (A + B);
}
// 1
aFoo["bar"];
var B = "属性1";
// 2
aFoo[__propName(B, 1)];
// 3
aFoo[__propName(组合("属性", "1"), 1)];
// 5
组合("bar", "");
// 6
组合(__propName(组合("属性", "1"), 1), "");
// 7
testCh_1.取属性(aFoo, "bar");
// 8
testCh_1.置属性(aFoo, "baz", "属性2");
// 9
testCh_1.置属性(aFoo, __propName(组合("属性", "1"), 1), 1);
// 10 
testCh_1.引发事件("ev1", aFoo);
// 11 
testCh_1.引发事件(__propName(组合("事件", "2"), 2), aFoo);
for (var _i = 0, 数组值_1 = 数组值; _i < 数组值_1.length; _i++) {
    var aF = 数组值_1[_i];
    if (aF.bar === 1) {
        aF["bar"];
    }
    else if (aF.baz === "c") {
        aF["baz"];
        var baz = aF.属性2;
        if (baz) { }
    }
}
for (var aF in 数组值) {
    if (数组值[aF].bar === 1) {
        数组值[aF]["bar"];
    }
    else if (数组值[aF].baz === "c") {
        数组值[aF]["baz"];
        var baz = 数组值[aF].属性2;
        if (baz) { }
    }
}
