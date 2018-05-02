/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <引用 不用默认库="真"/>
/// <引用 路径="lib.zh-cn.es2015.symbol.d.cts" />
/// <引用 路径="lib.zh-cn.es2015.symbol.wellknown.d.cts" />

接口 SharedArrayBuffer {

    /**
     * Read-only. The length of the ArrayBuffer (in bytes).
     */

    只读 byteLength: 数字;

    /*
     * The SharedArrayBuffer constructor's length property whose value is 1.
     */

    length: 数字;

    /**
     * Returns a section of an SharedArrayBuffer.
     */

    slice(begin: 数字, end?: 数字): SharedArrayBuffer;

    //@@{ 符号_:Symbol, 派生构造:species }
    只读 [符号_.派生构造]: SharedArrayBuffer;

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag }
    只读 [符号_.转为文字标签]: "SharedArrayBuffer";

}

接口 SharedArrayBufferConstructor {

    只读 prototype: SharedArrayBuffer;

    新建 (byteLength: 数字): SharedArrayBuffer;

}

声明 值量 SharedArrayBuffer: SharedArrayBufferConstructor;

接口 ArrayBufferTypes {

    SharedArrayBuffer: SharedArrayBuffer;

}

接口 Atomics {

    /**
     * Adds a value to the value at the given position in the array, returning the original value.
     * Until this atomic operation completes, any other read or write operation against the array
     * will block.
     */

    //@@{ 整数数组8_:Int8Array, 正整数数组8_:Uint8Array, 整数数组16_:Int16Array, 正整数数组16_:Uint16Array, 整数数组32_:Int32Array, 正整数数组32_:Uint32Array }
    add(typedArray: 整数数组8_ | 正整数数组8_ | 整数数组16_ | 正整数数组16_ | 整数数组32_ | 正整数数组32_, index: 数字, value: 数字): 数字;

    /**
     * Stores the bitwise AND of a value with the value at the given position in the array,
     * returning the original value. Until this atomic operation completes, any other read or
     * write operation against the array will block.
     */

    //@@{ 整数数组8_:Int8Array, 正整数数组8_:Uint8Array, 整数数组16_:Int16Array, 正整数数组16_:Uint16Array, 整数数组32_:Int32Array, 正整数数组32_:Uint32Array }
    and(typedArray: 整数数组8_ | 正整数数组8_ | 整数数组16_ | 正整数数组16_ | 整数数组32_ | 正整数数组32_, index: 数字, value: 数字): 数字;

    /**
     * Replaces the value at the given position in the array if the original value equals the given
     * expected value, returning the original value. Until this atomic operation completes, any
     * other read or write operation against the array will block.
     */

    //@@{ 整数数组8_:Int8Array, 正整数数组8_:Uint8Array, 整数数组16_:Int16Array, 正整数数组16_:Uint16Array, 整数数组32_:Int32Array, 正整数数组32_:Uint32Array }
    compareExchange(typedArray: 整数数组8_ | 正整数数组8_ | 整数数组16_ | 正整数数组16_ | 整数数组32_ | 正整数数组32_, index: 数字, expectedValue: 数字, replacementValue: 数字): 数字;

    /**
     * Replaces the value at the given position in the array, returning the original value. Until
     * this atomic operation completes, any other read or write operation against the array will
     * block.
     */

    //@@{ 整数数组8_:Int8Array, 正整数数组8_:Uint8Array, 整数数组16_:Int16Array, 正整数数组16_:Uint16Array, 整数数组32_:Int32Array, 正整数数组32_:Uint32Array }
    exchange(typedArray: 整数数组8_ | 正整数数组8_ | 整数数组16_ | 正整数数组16_ | 整数数组32_ | 正整数数组32_, index: 数字, value: 数字): 数字;

    /**
     * Returns a value indicating whether high-performance algorithms can use atomic operations
     * (`true`) or must use locks (`false`) for the given number of bytes-per-element of a typed
     * array.
     */

    isLockFree(size: 数字): 真假;

    /**
     * Returns the value at the given position in the array. Until this atomic operation completes,
     * any other read or write operation against the array will block.
     */

    //@@{ 整数数组8_:Int8Array, 正整数数组8_:Uint8Array, 整数数组16_:Int16Array, 正整数数组16_:Uint16Array, 整数数组32_:Int32Array, 正整数数组32_:Uint32Array }
    load(typedArray: 整数数组8_ | 正整数数组8_ | 整数数组16_ | 正整数数组16_ | 整数数组32_ | 正整数数组32_, index: 数字): 数字;

    /**
     * Stores the bitwise OR of a value with the value at the given position in the array,
     * returning the original value. Until this atomic operation completes, any other read or write
     * operation against the array will block.
     */

    //@@{ 整数数组8_:Int8Array, 正整数数组8_:Uint8Array, 整数数组16_:Int16Array, 正整数数组16_:Uint16Array, 整数数组32_:Int32Array, 正整数数组32_:Uint32Array }
    or(typedArray: 整数数组8_ | 正整数数组8_ | 整数数组16_ | 正整数数组16_ | 整数数组32_ | 正整数数组32_, index: 数字, value: 数字): 数字;

    /**
     * Stores a value at the given position in the array, returning the new value. Until this
     * atomic operation completes, any other read or write operation against the array will block.
     */

    //@@{ 整数数组8_:Int8Array, 正整数数组8_:Uint8Array, 整数数组16_:Int16Array, 正整数数组16_:Uint16Array, 整数数组32_:Int32Array, 正整数数组32_:Uint32Array }
    store(typedArray: 整数数组8_ | 正整数数组8_ | 整数数组16_ | 正整数数组16_ | 整数数组32_ | 正整数数组32_, index: 数字, value: 数字): 数字;

    /**
     * Subtracts a value from the value at the given position in the array, returning the original
     * value. Until this atomic operation completes, any other read or write operation against the
     * array will block.
     */

    //@@{ 整数数组8_:Int8Array, 正整数数组8_:Uint8Array, 整数数组16_:Int16Array, 正整数数组16_:Uint16Array, 整数数组32_:Int32Array, 正整数数组32_:Uint32Array }
    sub(typedArray: 整数数组8_ | 正整数数组8_ | 整数数组16_ | 正整数数组16_ | 整数数组32_ | 正整数数组32_, index: 数字, value: 数字): 数字;

    /**
     * If the value at the given position in the array is equal to the provided value, the current
     * agent is put to sleep causing execution to suspend until the timeout expires (returning
     * `"timed-out"`) or until the agent is awoken (returning `"ok"`); otherwise, returns
     * `"not-equal"`.
     */

    //@@{ 整数数组32_:Int32Array }
    wait(typedArray: 整数数组32_, index: 数字, value: 数字, timeout?: 数字): "ok" | "not-equal" | "timed-out";

    /**
     * Wakes up sleeping agents that are waiting on the given index of the array, returning the
     * number of agents that were awoken.
     */

    //@@{ 整数数组32_:Int32Array }
    wake(typedArray: 整数数组32_, index: 数字, count: 数字): 数字;

    /**
     * Stores the bitwise XOR of a value with the value at the given position in the array,
     * returning the original value. Until this atomic operation completes, any other read or write
     * operation against the array will block.
     */

    //@@{ 整数数组8_:Int8Array, 正整数数组8_:Uint8Array, 整数数组16_:Int16Array, 正整数数组16_:Uint16Array, 整数数组32_:Int32Array, 正整数数组32_:Uint32Array }
    xor(typedArray: 整数数组8_ | 正整数数组8_ | 整数数组16_ | 正整数数组16_ | 整数数组32_ | 正整数数组32_, index: 数字, value: 数字): 数字;

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag }
    只读 [符号_.转为文字标签]: "Atomics";

}

声明 值量 Atomics: Atomics;