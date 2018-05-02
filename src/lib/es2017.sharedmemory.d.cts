/// <引用  路径="lib.zh-cn.es2015.symbol.d.cts" />
/// <引用  路径="lib.zh-cn.es2015.symbol.wellknown.d.cts" />

//##{ SharedArrayBuffer:共享数组缓冲区_ }# 
接口 共享数组缓冲区_ {

    /**
     * Read-only. The length of the ArrayBuffer (in bytes).
     */

    //##{ byteLength:字节长度 }#
    只读 字节长度: 数字;

    /*
     * The SharedArrayBuffer constructor's length property whose value is 1.
     */

    //##{ length:长度 }#
    长度: 数字;

    /**
     * Returns a section of an SharedArrayBuffer.
     */

    //##{ slice:分割, begin:开始, end:结束 }#
    分割(开始: 数字, 结束?: 数字): 共享数组缓冲区_;

    //@@{ 符号_:Symbol, 派生构造:species }
    只读 [符号_.派生构造]: 共享数组缓冲区_;

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag }
    只读 [符号_.转为文字标签]: "SharedArrayBuffer";

}

//##{ SharedArrayBufferConstructor:共享缓冲区数组构造函数_ }#
接口 共享缓冲区数组构造函数_ {

    //##{ prototype:原型 }#
    只读 原型: 共享数组缓冲区_;

    //##{ byteLength:字节长度 }#
    新建 (字节长度: 数字): 共享数组缓冲区_;

}

//##{ SharedArrayBuffer:共享数组缓冲区_ }#
声明 值量 共享数组缓冲区_: 共享缓冲区数组构造函数_;

//@@{ 数组缓冲类型_:ArrayBufferTypes }
接口 数组缓冲类型_ {

    //##{ SharedArrayBuffer:共享数组缓冲区_ }#
    共享数组缓冲区_: 共享数组缓冲区_;

}

//##{ Atomics:原子_ }# 
接口 原子_ {

    /**
     * Adds a value to the value at the given position in the array, returning the original value.
     * Until this atomic operation completes, any other read or write operation against the array
     * will block.
     */

    //@@{ 整数数组8_:Int8Array, 正整数数组8_:Uint8Array, 整数数组16_:Int16Array, 正整数数组16_:Uint16Array, 整数数组32_:Int32Array, 正整数数组32_:Uint32Array }
    //##{ add:添加, typedArray:类型数组, index:索引, value:值 }#
    添加(类型数组: 整数数组8_ | 正整数数组8_ | 整数数组16_ | 正整数数组16_ | 整数数组32_ | 正整数数组32_, 索引: 数字, 值: 数字): 数字;

    /**
     * Stores the bitwise AND of a value with the value at the given position in the array,
     * returning the original value. Until this atomic operation completes, any other read or
     * write operation against the array will block.
     */

    //@@{ 整数数组8_:Int8Array, 正整数数组8_:Uint8Array, 整数数组16_:Int16Array, 正整数数组16_:Uint16Array, 整数数组32_:Int32Array, 正整数数组32_:Uint32Array }
    //##{ and:添加, typedArray:类型数组, index:索引, value:值 }#
    添加(类型数组: 整数数组8_ | 正整数数组8_ | 整数数组16_ | 正整数数组16_ | 整数数组32_ | 正整数数组32_, 索引: 数字, 值: 数字): 数字;

    /**
     * Replaces the value at the given position in the array if the original value equals the given
     * expected value, returning the original value. Until this atomic operation completes, any
     * other read or write operation against the array will block.
     */

    //@@{ 整数数组8_:Int8Array, 正整数数组8_:Uint8Array, 整数数组16_:Int16Array, 正整数数组16_:Uint16Array, 整数数组32_:Int32Array, 正整数数组32_:Uint32Array }
    //##{ compareExchange:比较交换, typedArray:类型数组, index:索引, expectedValue:期望值, replacementValue:替换值 }#
    比较交换(类型数组: 整数数组8_ | 正整数数组8_ | 整数数组16_ | 正整数数组16_ | 整数数组32_ | 正整数数组32_, 索引: 数字, 期望值: 数字, 替换值: 数字): 数字;

    /**
     * Replaces the value at the given position in the array, returning the original value. Until
     * this atomic operation completes, any other read or write operation against the array will
     * block.
     */

    //@@{ 整数数组8_:Int8Array, 正整数数组8_:Uint8Array, 整数数组16_:Int16Array, 正整数数组16_:Uint16Array, 整数数组32_:Int32Array, 正整数数组32_:Uint32Array }
    //##{ exchange:交换, typedArray:类型数组, index:索引, value:值 }#
    交换(类型数组: 整数数组8_ | 正整数数组8_ | 整数数组16_ | 正整数数组16_ | 整数数组32_ | 正整数数组32_, 索引: 数字, 值: 数字): 数字;

    /**
     * Returns a value indicating whether high-performance algorithms can use atomic operations
     * (`true`) or must use locks (`false`) for the given number of bytes-per-element of a typed
     * array.
     */

    //##{ isLockFree:是无锁的, size:大小 }#
    是无锁的(大小: 数字): 真假;

    /**
     * Returns the value at the given position in the array. Until this atomic operation completes,
     * any other read or write operation against the array will block.
     */

    //@@{ 整数数组8_:Int8Array, 正整数数组8_:Uint8Array, 整数数组16_:Int16Array, 正整数数组16_:Uint16Array, 整数数组32_:Int32Array, 正整数数组32_:Uint32Array }
    //##{ load:加载, typedArray:类型数组, index:索引 }#
    加载(类型数组: 整数数组8_ | 正整数数组8_ | 整数数组16_ | 正整数数组16_ | 整数数组32_ | 正整数数组32_, 索引: 数字): 数字;

    /**
     * Stores the bitwise OR of a value with the value at the given position in the array,
     * returning the original value. Until this atomic operation completes, any other read or write
     * operation against the array will block.
     */

    //@@{ 整数数组8_:Int8Array, 正整数数组8_:Uint8Array, 整数数组16_:Int16Array, 正整数数组16_:Uint16Array, 整数数组32_:Int32Array, 正整数数组32_:Uint32Array }
    //##{ or:或, typedArray:类型数组, index:索引, value:值 }#
    或(类型数组: 整数数组8_ | 正整数数组8_ | 整数数组16_ | 正整数数组16_ | 整数数组32_ | 正整数数组32_, 索引: 数字, 值: 数字): 数字;

    /**
     * Stores a value at the given position in the array, returning the new value. Until this
     * atomic operation completes, any other read or write operation against the array will block.
     */

    //@@{ 整数数组8_:Int8Array, 正整数数组8_:Uint8Array, 整数数组16_:Int16Array, 正整数数组16_:Uint16Array, 整数数组32_:Int32Array, 正整数数组32_:Uint32Array }
    //##{ store:商店, typedArray:类型数组, index:索引, value:值 }#
    商店(类型数组: 整数数组8_ | 正整数数组8_ | 整数数组16_ | 正整数数组16_ | 整数数组32_ | 正整数数组32_, 索引: 数字, 值: 数字): 数字;

    /**
     * Subtracts a value from the value at the given position in the array, returning the original
     * value. Until this atomic operation completes, any other read or write operation against the
     * array will block.
     */

    //@@{ 整数数组8_:Int8Array, 正整数数组8_:Uint8Array, 整数数组16_:Int16Array, 正整数数组16_:Uint16Array, 整数数组32_:Int32Array, 正整数数组32_:Uint32Array }
    //##{ sub:子, typedArray:类型数组, index:索引, value:值 }#
    子(类型数组: 整数数组8_ | 正整数数组8_ | 整数数组16_ | 正整数数组16_ | 整数数组32_ | 正整数数组32_, 索引: 数字, 值: 数字): 数字;

    /**
     * If the value at the given position in the array is equal to the provided value, the current
     * agent is put to sleep causing execution to suspend until the timeout expires (returning
     * `"timed-out"`) or until the agent is awoken (returning `"ok"`); otherwise, returns
     * `"not-equal"`.
     */

    //@@{ 整数数组32_:Int32Array }
    //##{ wait:等待, typedArray:类型数组, index:索引, value:值, timeout:超时, "ok":"正确","not-equal":"不等","timed-out":"超时" }#
    等待(类型数组: 整数数组32_, 索引: 数字, 值: 数字, 超时?: 数字): "正确" | "不等" | "超时";

    /**
     * Wakes up sleeping agents that are waiting on the given index of the array, returning the
     * number of agents that were awoken.
     */

    //@@{ 整数数组32_:Int32Array }
    //##{ wake:之后, typedArray:类型数组, index:索引, count:数量 }#
    之后(类型数组: 整数数组32_, 索引: 数字, 数量: 数字): 数字;

    /**
     * Stores the bitwise XOR of a value with the value at the given position in the array,
     * returning the original value. Until this atomic operation completes, any other read or write
     * operation against the array will block.
     */

    //@@{ 整数数组8_:Int8Array, 正整数数组8_:Uint8Array, 整数数组16_:Int16Array, 正整数数组16_:Uint16Array, 整数数组32_:Int32Array, 正整数数组32_:Uint32Array }
    //##{ xor:异或, typedArray:类型数组, index:索引, value:值 }#
    异或(类型数组: 整数数组8_ | 正整数数组8_ | 整数数组16_ | 正整数数组16_ | 整数数组32_ | 正整数数组32_, 索引: 数字, 值: 数字): 数字;

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag }
    //##{ "Atomics":"原子_" }#
    只读 [符号_.转为文字标签]: "原子_";

}

//##{ Atomics:原子_ }#
声明 值量 原子_: 原子_;