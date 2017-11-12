// @target: ES6
// @removeComments: false

// @filename: /a/node_modules/@types/testEn/index.d.ts
export declare interface C {
    t: string
    n: "AAAAAAA"|"BBBBBB"
}

export declare class Te {
    private v: string
    private tn: C
    constructor(v: string, tn: C)
    getv: string
    gettn: C
}

export declare class Te2 {
    private v: string
    private tn: C
    constructor(v: string, tn: C)
    getv: string
    gettn: C
}

// @filename: /a/测试_1_en.ts
import { Te, Te2 } from "testEn"

let 标1 = new Te("vvvvv", { t: "ttttt", n: "AAAAAAA" as "AAAAAAA"|"BBBBBB"})

let v = "vvvvv"
let tn = {
    t: "ttttt",
    n: "AAAAAAA" as "AAAAAAA"|"BBBBBB"
}

let 标2 = new Te2(v, tn)

let v2 = "vvvvv"
let t = "ttttt"
let n = "BBBBBB" as "AAAAAAA"|"BBBBBB"
let tn2 = { t, n }

let 标3 = new Te(v2, tn2)

if (标1 && 标2 && 标3) {
    标1.getv
    标1.gettn

    标2.getv
    标2.gettn

    标3["getv"]
    标3["gettn"]
}
