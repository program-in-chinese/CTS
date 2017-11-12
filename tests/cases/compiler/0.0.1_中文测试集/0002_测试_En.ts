// @strictNullChecks: true
// @filename: /a/node_modules/@types/testEn/index.d.ts
export declare type foo = {
  bar: number | null;
  baz: string;
  nested: {
    a: number;
    b: string | null;
  }
};

export declare type bar = {
  elem1: number | null;
  elem2: foo | null;
};

// @filename: /a/测试_2_en.ts
import { foo ,bar } from "testEn"

const aFoo: foo = { bar: 3, baz: "b", nested: { a: 1, b: "y" } };

if (aFoo.bar && aFoo.nested.b) {
  const { bar, baz, nested: { a, b: text } } = aFoo;
  const right: number = aFoo.bar;
  const wrong: number = bar;
  const another: string = baz;
  const aAgain: number = a;
  const bAgain: string = text;
}


const bBar = { elem1: 7, elem2: aFoo };

if (bBar.elem2 && bBar.elem2.bar && bBar.elem2.nested.b) {
  const { bar, baz, nested: { a, b: text } } = bBar.elem2;
  const right: number = bBar.elem2.bar;
  const wrong: number = bar;
  const another: string = baz;
  const aAgain: number = a;
  const bAgain: string = text;
}
