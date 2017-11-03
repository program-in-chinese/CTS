// @target: ES5
// @removeComments: false


// @filename: /a/node_modules/@types/testEn/index.d.ts
export declare interface C {
    t: string
    n: string
}

export declare class Te {
    private v: string
    private tn: C
    constructor(v: string, tn: C)
    V: string
    Tn: C
}

export declare class Te2 {
    private v: string
    private tn: C
    constructor(v: string, tn: C)
    V: string
    Tn: C
}
// @filename: /a/测试_1.ts
import { Te, Te2 } from "testEn"

let B1 = new Te("vvvvv", { t: "ttttt", n: "nnnnn" })

let v = "vvvvv"
let c = {
    t: "ttttt",
    n: "nnnnn"
}

let B2 = new Te2(v, c)

let v2 = "vvvvv"
let t = "ttttt"
let n = "nnnnn"
let c2 = { t, n }

let B3 = new Te(v2, c2)

if (B1 && B2 && B3) {
    B1.V
    B1.Tn

    B2.V
    B2.Tn

    B3["V"]
    B3["Tn"]
}
