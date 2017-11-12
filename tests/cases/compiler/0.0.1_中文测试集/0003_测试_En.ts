// @target: ES5
// @removeComments: false
// @strictNullChecks: true
// @alwaysStrict: true
// @noImplicitAny: true

// @filename: /a/node_modules/@typesch/testEn/index.d.ts
export type foo = {
    bar: number | null;
    baz: string;
    nested: {
      a: number;
      b: string | null;
    }
  }
  
  export type foo2 = {
    elem1: number | null;
    elem2: foo | null;
  }
  
  export function 取属性< T, K extends keyof T> (对象值:T, 键: K): T[K]
  export function 置属性< T, K extends keyof T> (对象值:T, 键: K, 值: T[K]): T[K]
  export interface 事件类型{
    "ev1":foo2;
    "ev2":foo2
  }
  
  export function  引发事件< K extends keyof 事件类型> (事件:K, 实体:foo):void
  
  //**************** 分割线 *******************//
  
// @filename: /a/测试_3_en.ts  
  import { foo, 取属性, 置属性, 引发事件, 事件类型 } from "testEn"
  
  const aFoo: foo = { bar: 3, baz: "b", nested: { a: 1, b: "y" } };
  const aFoo2: foo = { bar: 4, baz: "c", nested: { a: 2, b: "z" } };
  const 数组值: foo[] = [aFoo, aFoo2]
  function 组合(A:string, B:string){
    return(A + B)
  }
  // 1
  aFoo["bar"]
  const B: keyof foo = "bar"
  // 2
  aFoo[B]
  // 3
  aFoo[组合("bar", "1") as keyof foo]
  // 5
  组合("bar" as keyof foo , "")
  // 6
  组合(组合("bar", "1") as keyof foo, "")
  // 7
  取属性(aFoo, "bar")
  // 8
  置属性(aFoo, "baz", "baz")
  // 9
  置属性(aFoo, 组合("bar", "1") as keyof foo, 1)
  // 10 
  引发事件("ev1", aFoo)
  // 11 
  引发事件(组合("ev", "2") as keyof 事件类型, aFoo)

  for (const aF of 数组值) {
      if (aF.bar === 1) {
          aF["bar"]

      } else if (aF.baz === "c") {
          aF["baz"]
          const { baz } = aF
          if (baz) { }
      }
  }

  for (const aF in 数组值) {
      if (数组值[aF].bar === 1) {
          数组值[aF]["bar"]

      } else if (数组值[aF].baz === "c") {
          数组值[aF]["baz"]
          const { baz } = 数组值[aF]
          if (baz) { }
      }
  }