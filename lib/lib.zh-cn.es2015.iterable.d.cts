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



/// <引用 不用默认库= "真"/>
/// <引用 路径="lib.zh-cn.es2015.symbol.d.cts" />

//@@{ 符号构造函数_:SymbolConstructor }
接口 符号构造函数_ {

    /**
     * A method that returns the default iterator for an object. Called by the semantics of the
     * for-of statement.
     */

    //@@{ 迭代器:iterator }
    只读 迭代器: 符号;

}

//@@{ 迭代器结果_:IteratorResult }
接口 迭代器结果_<T> {

    //@@{ 完成:done }
    完成: 真假;

    //@@{ 值:value }
    值: T;

}

//@@{ 迭代器_:Iterator }
接口 迭代器_<T> {

    //@@{ 下个:next, 值:value, 迭代器结果_:IteratorResult }
    下个(值?: 任意): 迭代器结果_<T>;

    //@@{ 返回:return, 值:value, 迭代器结果_:IteratorResult }
    返回?(值?: 任意): 迭代器结果_<T>;

    //@@{ 抛出:throw, 迭代器结果_:IteratorResult }
    抛出?(e?: 任意): 迭代器结果_<T>;

}

//@@{ 可迭代_:Iterable }
接口 可迭代_<T> {

    //@@{ 符号_:Symbol, 迭代器:iterator, 迭代器_:Iterator }
    [符号_.迭代器](): 迭代器_<T>;

}

//@@{ 可迭代迭代器_:IterableIterator, 迭代器_:Iterator }
接口 可迭代迭代器_<T> 扩展 迭代器_<T> {

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<T>;

}

//@@{ 数组_:Array }
接口 数组_<T> {

    /** Iterator */

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<T>;

    /**
     * Returns an iterable of key, value pairs for every entry in the array
     */

    //@@{ 条目:entries, 可迭代迭代器_:IterableIterator }
    条目(): 可迭代迭代器_<[数字, T]>;

    /**
     * Returns an iterable of keys in the array
     */

    //@@{ 键组:keys, 可迭代迭代器_:IterableIterator }
    键组(): 可迭代迭代器_<数字>;

    /**
     * Returns an iterable of values in the array
     */

    //@@{ 值组:values, 可迭代迭代器_:IterableIterator }
    值组(): 可迭代迭代器_<T>;

}

//@@{ 数组构造函数_:ArrayConstructor }
接口 数组构造函数_ {

    /**
     * Creates an array from an iterable object.
     * @param 可迭代 An iterable object to convert to an array.
     * @param 映射回调 A mapping function to call on every element of the array.
     * @param 本体参数 Value of 'this' used to invoke the mapfn.
     */

    //@@{ 从对象:from, 可迭代:iterable, 可迭代_:Iterable, 映射回调:mapfn, 本体参数:thisArg }
    从对象<T, U = T>(可迭代: 可迭代_<T>, 映射回调?: (v: T, k: 数字) => U, 本体参数?: 任意): U[];

}

//@@{ 只读数组_:ReadonlyArray }
接口 只读数组_<T> {

    /** Iterator of values in the array. */

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<T>;

    /**
     * Returns an iterable of key, value pairs for every entry in the array
     */

    //@@{ 条目:entries, 可迭代迭代器_:IterableIterator }
    条目(): 可迭代迭代器_<[数字, T]>;

    /**
     * Returns an iterable of keys in the array
     */

    //@@{ 键组:keys, 可迭代迭代器_:IterableIterator }
    键组(): 可迭代迭代器_<数字>;

    /**
     * Returns an iterable of values in the array
     */

    //@@{ 值组:values, 可迭代迭代器_:IterableIterator }
    值组(): 可迭代迭代器_<T>;

}

//@@{ 增强参数接口_:IArguments }
接口 增强参数接口_ {

    /** Iterator */

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<任意>;

}

//@@{ 映射_:Map }
接口 映射_<K, V> {

    /** Returns an iterable of entries in the map. */

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<[K, V]>;

    /**
     * Returns an iterable of key, value pairs for every entry in the map.
     */

    //@@{ 条目:entries, 可迭代迭代器_:IterableIterator }
    条目(): 可迭代迭代器_<[K, V]>;

    /**
     * Returns an iterable of keys in the map
     */

    //@@{ 键组:keys, 可迭代迭代器_:IterableIterator }
    键组(): 可迭代迭代器_<K>;

    /**
     * Returns an iterable of values in the map
     */

    //@@{ 值组:values, 可迭代迭代器_:IterableIterator }
    值组(): 可迭代迭代器_<V>;

}

//@@{ 只读映射_:ReadonlyMap }
接口 只读映射_<K, V> {

    /** Returns an iterable of entries in the map. */

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<[K, V]>;

    /**
     * Returns an iterable of key, value pairs for every entry in the map.
     */

    //@@{ 条目:entries, 可迭代迭代器_:IterableIterator }
    条目(): 可迭代迭代器_<[K, V]>;

    /**
     * Returns an iterable of keys in the map
     */

    //@@{ 键组:keys, 可迭代迭代器_:IterableIterator }
    键组(): 可迭代迭代器_<K>;

    /**
     * Returns an iterable of values in the map
     */

    //@@{ 值组:values, 可迭代迭代器_:IterableIterator }
    值组(): 可迭代迭代器_<V>;

}

//@@{ 映射构造函数_:MapConstructor }
接口 映射构造函数_ { 

    //@@{ 可迭代:iterable, 可迭代_:Iterable, 映射_:Map }
    新建 <K, V>(可迭代: 可迭代_<[K, V]>): 映射_<K, V>;

}

//@@{ 弱映射_:WeakMap }
接口 弱映射_<K 扩展 实例, V> { }

//@@{ 弱映射构造函数_:WeakMapConstructor }
接口 弱映射构造函数_ {

    //@@{ 可迭代:iterable, 可迭代_:Iterable, 弱映射_:WeakMap }
    新建 <K 扩展 实例, V>(可迭代: 可迭代_<[K, V]>): 弱映射_<K, V>;

}

//@@{ 集合_:Set }
接口 集合_<T> {

    /** Iterates over values in the set. */

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<T>;

    /**
     * Returns an iterable of [v,v] pairs for every value `v` in the set.
     */

    //@@{ 条目:entries, 可迭代迭代器_:IterableIterator }
    条目(): 可迭代迭代器_<[T, T]>;

    /**
     * Despite its name, returns an iterable of the values in the set,
     */

    //@@{ 键组:keys, 可迭代迭代器_:IterableIterator }
    键组(): 可迭代迭代器_<T>;

    /**
     * Returns an iterable of values in the set.
     */

    //@@{ 值组:values, 可迭代迭代器_:IterableIterator }
    值组(): 可迭代迭代器_<T>;

}

//@@{ 只读集合_:ReadonlySet }
接口 只读集合_<T> {

    /** Iterates over values in the set. */

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<T>;

    /**
     * Returns an iterable of [v,v] pairs for every value `v` in the set.
     */

    //@@{ 条目:entries, 可迭代迭代器_:IterableIterator }
    条目(): 可迭代迭代器_<[T, T]>;

    /**
     * Despite its name, returns an iterable of the values in the set,
     */

    //@@{ 键组:keys, 可迭代迭代器_:IterableIterator }
    键组(): 可迭代迭代器_<T>;

    /**
     * Returns an iterable of values in the set.
     */

    //@@{ 值组:values, 可迭代迭代器_:IterableIterator }
    值组(): 可迭代迭代器_<T>;

}

//@@{ 集合构造函数_:SetConstructor }
接口 集合构造函数_ {

    //@@{ 可迭代:iterable, 可迭代_:Iterable, 集合_:Set }
    新建 <T>(可迭代: 可迭代_<T>): 集合_<T>;

}

//@@{ 弱集合_:WeakSet }
接口 弱集合_<T> { }

//@@{ 弱集合构造函数_:WeakSetConstructor }
接口 弱集合构造函数_ {

    //@@{ 可迭代:iterable, 可迭代_:Iterable, 弱集合_:WeakSet }
    新建 <T 扩展 实例>(可迭代: 可迭代_<T>): 弱集合_<T>;

}

//@@{ 预设_:Promise }
接口 预设_<T> { }

//@@{ 预设构造函数_:PromiseConstructor }
接口 预设构造函数_ {

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 所有:all, T所有:TAll, 值组:values, 可迭代_:Iterable, 预设等_:PromiseLike, 预设_:Promise }
    所有<T所有>(值组: 可迭代_<T所有 | 预设等_<T所有>>): 预设_<T所有[]>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 竞速:race, 值组:values, 可迭代_:Iterable, 预设等_:PromiseLike, 预设_:Promise }
    竞速<T>(值组: 可迭代_<T | 预设等_<T>>): 预设_<T>;

}

//@@{ 反射_:Reflect }
声明 名域 反射_ {

    //@@{ 列举:enumerate, 目标:target, 可迭代迭代器_:IterableIterator }
    函数 列举(目标: 实例): 可迭代迭代器_<任意>;

}

//@@{ 文字_:String }
接口 文字_ {

    /** Iterator */

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<文字>;

}

//@@{ 整数数组8_:Int8Array }
接口 整数数组8_ {

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<数字>;

    /**
     * Returns an array of key, value pairs for every entry in the array
     */

    //@@{ 条目:entries, 可迭代迭代器_:IterableIterator }
    条目(): 可迭代迭代器_<[数字, 数字]>;

    /**
     * Returns an list of keys in the array
     */

    //@@{ 键组:keys, 可迭代迭代器_:IterableIterator }
    键组(): 可迭代迭代器_<数字>;

    /**
     * Returns an list of values in the array
     */

    //@@{ 值组:values, 可迭代迭代器_:IterableIterator }
    值组(): 可迭代迭代器_<数字>;

}

//@@{ 整数数组8构造函数_:Int8ArrayConstructor }
接口 整数数组8构造函数_ {

    //@@{ 元素:elements, 可迭代_:Iterable, 整数数组8_:Int8Array }
    新建 (元素: 可迭代_<数字>): 整数数组8_;

    /**
     * Creates an array from an array-like or iterable object.
     * @param 数组等 An array-like or iterable object to convert to an array.
     * @param 映射回调 A mapping function to call on every element of the array.
     * @param 本体参数 Value of 'this' used to invoke the mapfn.
     */

    //@@{ 从对象:from, 数组等:arrayLike, 可迭代_:Iterable, 映射回调:mapfn, 本体参数:thisArg, 整数数组8_:Int8Array }
    从对象(数组等: 可迭代_<数字>, 映射回调?: (v: 数字, k: 数字) => 数字, 本体参数?: 任意): 整数数组8_;

}

//@@{ 正整数数组8_:Uint8Array }
接口 正整数数组8_ {

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<数字>;

    /**
     * Returns an array of key, value pairs for every entry in the array
     */

    //@@{ 条目:entries, 可迭代迭代器_:IterableIterator }
    条目(): 可迭代迭代器_<[数字, 数字]>;

    /**
     * Returns an list of keys in the array
     */

    //@@{ 键组:keys, 可迭代迭代器_:IterableIterator }
    键组(): 可迭代迭代器_<数字>;

    /**
     * Returns an list of values in the array
     */

    //@@{ 值组:values, 可迭代迭代器_:IterableIterator }
    值组(): 可迭代迭代器_<数字>;

}

//@@{ 正整数数组8构造函数_:Uint8ArrayConstructor }
接口 正整数数组8构造函数_ {

    //@@{ 元素:elements, 可迭代_:Iterable, 正整数数组8_:Uint8Array }
    新建 (元素: 可迭代_<数字>): 正整数数组8_;

    /**
     * Creates an array from an array-like or iterable object.
     * @param 数组等 An array-like or iterable object to convert to an array.
     * @param 映射回调 A mapping function to call on every element of the array.
     * @param 本体参数 Value of 'this' used to invoke the mapfn.
     */

    //@@{ 从对象:from, 数组等:arrayLike, 可迭代_:Iterable, 映射回调:mapfn, 本体参数:thisArg, 正整数数组8_:Uint8Array }
    从对象(数组等: 可迭代_<数字>, 映射回调?: (v: 数字, k: 数字) => 数字, 本体参数?: 任意): 正整数数组8_;

}

//@@{ 正整数固定数组8_:Uint8ClampedArray }
接口 正整数固定数组8_ {

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<数字>;

    /**
     * Returns an array of key, value pairs for every entry in the array
     */

    //@@{ 条目:entries, 可迭代迭代器_:IterableIterator }
    条目(): 可迭代迭代器_<[数字, 数字]>;

    /**
     * Returns an list of keys in the array
     */

    //@@{ 键组:keys, 可迭代迭代器_:IterableIterator }
    键组(): 可迭代迭代器_<数字>;

    /**
     * Returns an list of values in the array
     */

    //@@{ 值组:values, 可迭代迭代器_:IterableIterator }
    值组(): 可迭代迭代器_<数字>;

}

//@@{ 正整数固定数组8构造函数_:Uint8ClampedArrayConstructor }
接口 正整数固定数组8构造函数_ {

    //@@{ 元素:elements, 可迭代_:Iterable, 正整数固定数组8_:Uint8ClampedArray }
    新建 (元素: 可迭代_<数字>): 正整数固定数组8_;

    /**
     * Creates an array from an array-like or iterable object.
     * @param 数组等 An array-like or iterable object to convert to an array.
     * @param 映射回调 A mapping function to call on every element of the array.
     * @param 本体参数 Value of 'this' used to invoke the mapfn.
     */

    //@@{ 从对象:from, 数组等:arrayLike, 可迭代_:Iterable, 映射回调:mapfn, 本体参数:thisArg, 正整数固定数组8_:Uint8ClampedArray }
    从对象(数组等: 可迭代_<数字>, 映射回调?: (v: 数字, k: 数字) => 数字, 本体参数?: 任意): 正整数固定数组8_;

}

//@@{ 整数数组16_:Int16Array }
接口 整数数组16_ {

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<数字>;

    /**
     * Returns an array of key, value pairs for every entry in the array
     */

    //@@{ 条目:entries, 可迭代迭代器_:IterableIterator }
    条目(): 可迭代迭代器_<[数字, 数字]>;

    /**
     * Returns an list of keys in the array
     */

    //@@{ 键组:keys, 可迭代迭代器_:IterableIterator }
    键组(): 可迭代迭代器_<数字>;

    /**
     * Returns an list of values in the array
     */

    //@@{ 值组:values, 可迭代迭代器_:IterableIterator }
    值组(): 可迭代迭代器_<数字>;

}

//@@{ 整数数组16构造函数_:Int16ArrayConstructor }
接口 整数数组16构造函数_ {

    //@@{ 元素:elements, 可迭代_:Iterable, 整数数组16_:Int16Array }
    新建 (元素: 可迭代_<数字>): 整数数组16_;

    /**
     * Creates an array from an array-like or iterable object.
     * @param 数组等 An array-like or iterable object to convert to an array.
     * @param 映射回调 A mapping function to call on every element of the array.
     * @param 本体参数 Value of 'this' used to invoke the mapfn.
     */

    //@@{ 从对象:from, 数组等:arrayLike, 可迭代_:Iterable, 映射回调:mapfn, 本体参数:thisArg, 整数数组16_:Int16Array }
    从对象(数组等: 可迭代_<数字>, 映射回调?: (v: 数字, k: 数字) => 数字, 本体参数?: 任意): 整数数组16_;

}

//@@{ 正整数数组16_:Uint16Array }
接口 正整数数组16_ {

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<数字>;

    /**
     * Returns an array of key, value pairs for every entry in the array
     */

    //@@{ 条目:entries, 可迭代迭代器_:IterableIterator }
    条目(): 可迭代迭代器_<[数字, 数字]>;

    /**
     * Returns an list of keys in the array
     */

    //@@{ 键组:keys, 可迭代迭代器_:IterableIterator }
    键组(): 可迭代迭代器_<数字>;

    /**
     * Returns an list of values in the array
     */

    //@@{ 值组:values, 可迭代迭代器_:IterableIterator }
    值组(): 可迭代迭代器_<数字>;

}

//@@{ 正整数数组16构造函数_:Uint16ArrayConstructor }
接口 正整数数组16构造函数_ {

    //@@{ 元素:elements, 可迭代_:Iterable, 正整数数组16_:Uint16Array }
    新建 (元素: 可迭代_<数字>): 正整数数组16_;

    /**
     * Creates an array from an array-like or iterable object.
     * @param 数组等 An array-like or iterable object to convert to an array.
     * @param 映射回调 A mapping function to call on every element of the array.
     * @param 本体参数 Value of 'this' used to invoke the mapfn.
     */

    //@@{ 从对象:from, 数组等:arrayLike, 可迭代_:Iterable, 映射回调:mapfn, 本体参数:thisArg, 正整数数组16_:Uint16Array }
    从对象(数组等: 可迭代_<数字>, 映射回调?: ( v: 数字, k: 数字) => 数字, 本体参数?: 任意): 正整数数组16_;

}

//@@{ 整数数组32_:Int32Array }
接口 整数数组32_ {

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<数字>;

    /**
     * Returns an array of key, value pairs for every entry in the array
     */

    //@@{ 条目:entries, 可迭代迭代器_:IterableIterator }
    条目(): 可迭代迭代器_<[数字, 数字]>;

    /**
     * Returns an list of keys in the array
     */

    //@@{ 键组:keys, 可迭代迭代器_:IterableIterator }
    键组(): 可迭代迭代器_<数字>;

    /**
     * Returns an list of values in the array
     */

    //@@{ 值组:values, 可迭代迭代器_:IterableIterator }
    值组(): 可迭代迭代器_<数字>;

}

//@@{ 整数数组32构造函数_:Int32ArrayConstructor }
接口 整数数组32构造函数_ {

    //@@{ 元素:elements, 可迭代_:Iterable, 整数数组32_:Int32Array }
    新建 (元素: 可迭代_<数字>): 整数数组32_;

    /**
     * Creates an array from an array-like or iterable object.
     * @param 数组等 An array-like or iterable object to convert to an array.
     * @param 映射回调 A mapping function to call on every element of the array.
     * @param 本体参数 Value of 'this' used to invoke the mapfn.
     */

    //@@{ 从对象:from, 数组等:arrayLike, 可迭代_:Iterable, 映射回调:mapfn, 本体参数:thisArg, 整数数组32_:Int32Array }
    从对象(数组等: 可迭代_<数字>, 映射回调?: (v: 数字, k: 数字) => 数字, 本体参数?: 任意): 整数数组32_;

}

//@@{ 正整数数组32_:Uint32Array }
接口 正整数数组32_ {

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<数字>;

    /**
     * Returns an array of key, value pairs for every entry in the array
     */

    //@@{ 条目:entries, 可迭代迭代器_:IterableIterator }
    条目(): 可迭代迭代器_<[数字, 数字]>;

    /**
     * Returns an list of keys in the array
     */

    //@@{ 键组:keys, 可迭代迭代器_:IterableIterator }
    键组(): 可迭代迭代器_<数字>;

    /**
     * Returns an list of values in the array
     */

    //@@{ 值组:values, 可迭代迭代器_:IterableIterator }
    值组(): 可迭代迭代器_<数字>;

}

//@@{ 正整数数组32构造函数_:Uint32ArrayConstructor }
接口 正整数数组32构造函数_ {

    //@@{ 元素:elements, 可迭代_:Iterable, 正整数数组32_:Uint32Array }
    新建 (元素: 可迭代_<数字>): 正整数数组32_;

    /**
     * Creates an array from an array-like or iterable object.
     * @param 数组等 An array-like or iterable object to convert to an array.
     * @param 映射回调 A mapping function to call on every element of the array.
     * @param 本体参数 Value of 'this' used to invoke the mapfn.
     */

    //@@{ 从对象:from, 数组等:arrayLike, 可迭代_:Iterable, 映射回调:mapfn, 本体参数:thisArg, 正整数数组32_:Uint32Array }
    从对象(数组等: 可迭代_<数字>, 映射回调?: (v: 数字, k: 数字) => 数字, 本体参数?: 任意): 正整数数组32_;

}

//@@{ 浮点数组32_:Float32Array }
接口 浮点数组32_ {

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<数字>;

    /**
     * Returns an array of key, value pairs for every entry in the array
     */

    //@@{ 条目:entries, 可迭代迭代器_:IterableIterator }
    条目(): 可迭代迭代器_<[数字, 数字]>;

    /**
     * Returns an list of keys in the array
     */

    //@@{ 键组:keys, 可迭代迭代器_:IterableIterator }
    键组(): 可迭代迭代器_<数字>;

    /**
     * Returns an list of values in the array
     */

    //@@{ 值组:values, 可迭代迭代器_:IterableIterator }
    值组(): 可迭代迭代器_<数字>;

}

//@@{ 浮点数组32构造函数_:Float32ArrayConstructor }
接口 浮点数组32构造函数_ {

    //@@{ 元素:elements, 可迭代_:Iterable, 浮点数组32_:Float32Array }
    新建 (元素: 可迭代_<数字>): 浮点数组32_;

    /**
     * Creates an array from an array-like or iterable object.
     * @param 数组等 An array-like or iterable object to convert to an array.
     * @param 映射回调 A mapping function to call on every element of the array.
     * @param 本体参数 Value of 'this' used to invoke the mapfn.
     */

    //@@{ 从对象:from, 数组等:arrayLike, 可迭代_:Iterable, 映射回调:mapfn, 本体参数:thisArg, 浮点数组32_:Float32Array }
    从对象(数组等: 可迭代_<数字>, 映射回调?: (v: 数字, k: 数字) => 数字, 本体参数?: 任意): 浮点数组32_;

}

//@@{ 浮点数组64_:Float64Array }
接口 浮点数组64_ {

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<数字>;

    /**
     * Returns an array of key, value pairs for every entry in the array
     */

    //@@{ 条目:entries, 可迭代迭代器_:IterableIterator }
    条目(): 可迭代迭代器_<[数字, 数字]>;

    /**
     * Returns an list of keys in the array
     */

    //@@{ 键组:keys, 可迭代迭代器_:IterableIterator }
    键组(): 可迭代迭代器_<数字>;

    /**
     * Returns an list of values in the array
     */

    //@@{ 值组:values, 可迭代迭代器_:IterableIterator }
    值组(): 可迭代迭代器_<数字>;

}

//@@{ 浮点数组64构造函数_:Float64ArrayConstructor }
接口 浮点数组64构造函数_ {

    //@@{ 元素:elements, 可迭代_:Iterable, 浮点数组64_:Float64Array }
    新建 (元素: 可迭代_<数字>): 浮点数组64_;

    /**
     * Creates an array from an array-like or iterable object.
     * @param 数组等 An array-like or iterable object to convert to an array.
     * @param 映射回调 A mapping function to call on every element of the array.
     * @param 本体参数 Value of 'this' used to invoke the mapfn.
     */

    //@@{ 从对象:from, 数组等:arrayLike, 可迭代_:Iterable, 映射回调:mapfn, 本体参数:thisArg, 浮点数组64_:Float64Array }
    从对象(数组等: 可迭代_<数字>, 映射回调?: (v: 数字, k: 数字) => 数字, 本体参数?: 任意): 浮点数组64_;
}
