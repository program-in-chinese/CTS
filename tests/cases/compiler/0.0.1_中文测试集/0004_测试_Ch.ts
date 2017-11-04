// @target: ES6
// @removeComments: false
// @strictNullChecks: true

// @filename: /a/node_modules/@types/testCh/index.d.ts

//@@{ 测试:foo, 属性1:bar, 属性2:baz, 合成属性:nested, 甲:a, 乙:b }
导出 类型 测试 = {
    属性1: 数字 | 空值;
    属性2: 文字;
    合成属性: {
      甲: 数字;
      乙: 文字 | 空值;
    }
  }
  
  // @filename: /a/测试_1.ts
  
  导入 { 测试 } 来自 "testCh"
  
  常量 aFoo: 测试 = { 属性1: 3, 属性2: "b", 合成属性: { 甲: 1, 乙: "y" } };

  如果(aFoo && aFoo.合成属性){
      变量 Y = aFoo["合成属性"]["乙"]
      如果(Y === "y"){
          // 解决 keyof 类型计算
      }
  }
