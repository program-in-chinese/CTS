//// [tests/cases/compiler/0.0.1_中文测试集/0001_测试_Ch.ts] ////

//// [index.d.ts]
//@@{ 内容描述:C, 标题:t, 内容:n }
//@@{ "啊啊啊啊啊":"AAAAAAAAAAA", "宝宝贝贝吧":"BBBBBBBBB" }
导出 声明 接口 内容描述{
    标题: 文字
    内容: "啊啊啊啊啊" | "宝宝贝贝吧"
}

//@@{ 测试类:Te, 测试目标:v, 测试内容:tn, 取测试目标:V, 取测试内容:Tn }
导出 声明 类别 测试类 {
    私有 测试目标: 文字
    私有 测试内容: 内容描述
    构造(测试目标: 文字, 测试内容: 内容描述)
    取测试目标: 文字
    取测试内容: 内容描述
}

//@@{ 测试类2:Te2, 测试目标:v, 测试内容:tn, 取测试目标:V, 取测试内容:Tn }
导出 声明 类别 测试类2 {
    私有 测试目标: 文字
    私有 测试内容: 内容描述
    构造(测试目标: 文字, 测试内容: 内容描述)
    取测试目标: 文字
    取测试内容: 内容描述
}

//// [测试_1_ch.ts]
导入 { 测试类, 测试类2, 内容描述 } 来自 "testch"

变量 测试目标 = "vvvvv"
变量 测试内容 = {
    标题: "ttttt",
    内容: "啊啊啊啊啊" 转为 "啊啊啊啊啊"| "宝宝贝贝吧"
}

变量 标1 = 新建 测试类("vvvvv", 测试内容)

变量 标2 = 新建 测试类2(测试目标, 测试内容)

变量 测试目标2 = "vvvvv"
变量 标题 = "ttttt"
变量 测试内容2: 内容描述 = { 标题: 标题, 内容: "宝宝贝贝吧" }

变量 标3 = 新建 测试类(测试目标2, 测试内容2)

如果(标1 && 标2 && 标3){
    
    标1.取测试目标
    标1.取测试内容

    标2.取测试目标
    标2.取测试内容

    标3["取测试目标"]
    标3["取测试内容"]
}


//// [测试_1_ch.js]
import { Te, Te2 } from "testch";
let 测试目标 = "vvvvv";
let 测试内容 = {
    t: "ttttt",
    n: "AAAAAAAAAAA"
};
let 标1 = new Te("vvvvv", 测试内容);
let 标2 = new Te2(测试目标, 测试内容);
let 测试目标2 = "vvvvv";
let t = "ttttt";
let 测试内容2 = { t: t, n: "BBBBBBBBB" };
let 标3 = new Te(测试目标2, 测试内容2);
if (标1 && 标2 && 标3) {
    标1.V;
    标1.Tn;
    标2.V;
    标2.Tn;
    标3["V"];
    标3["Tn"];
}
