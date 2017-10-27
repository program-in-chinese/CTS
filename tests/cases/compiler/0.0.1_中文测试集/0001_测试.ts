// @target: ES5
// @removeComments: false

// @filename: /a/node_modules/@types/errorCh/index.d.ts

//@@{ 错误类:Error, 错误:error, 错误_:err }
导出 声明 种类 错误类 {
    私有 错误: 文字
    //@{ "错误常量":"error", "错误类常量":"Error" }
    构造(错误_:"错误常量" | "错误类常量")
    //@{ 错误属性:Error }
    公开 错误属性: 文字
}

// @Filename: /a/测试_1.ts
导入 * 转为 错误 来自 "errorCh"
变量 aaa = 新建 错误.错误类("错误常量")
aaa.错误属性
aaa.错误   // 错误: 不能调用私有属性.

// @Filename: /a/测试_2.ts
导入 { 错误类 } 来自 "errorCh"
变量 aaa = 新建 错误类("错误常量")
变量 { 错误属性 } = aaa   // 错误: 因为使用的是别名 可能不报错, 编译 es5 以下不报错
变量 bbb = 错误属性
aaa.错误   // 错误: 不能调用私有属性.


//************************* 中英*比较 *************************// 

// @filename: /a/node_modules/@types/errorEn/index.d.ts
export declare class Error {
    private error: string
    constructor(err: "error" | "Error")
    public Error: string
}

// @Filename: /a/测试_3.ts
import *as e from "errorEn"
let aaa = new e.Error("Error")
aaa.Error
aaa.error   // error: 不能调用私有属性.


// @Filename: /a/测试_4.ts
import { Error as ERROR } from "errorEn"
let aaa = new ERROR("Error")
let { Error } = aaa     //error: 如导入不使用别名 这里会报错. 
let bbb = Error
aaa.error   // error: 不能调用私有属性.
