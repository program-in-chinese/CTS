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
/// <引用 路径="lib.zh-cn.es2015.iterable.d.cts" />

//@@{ 符号构造函数_:SymbolConstructor }
接口 符号构造函数_ {

    /**
     * A method that returns the default async iterator for an object. Called by the semantics of
     * the for-await-of statement.
     */

    只读 asyncIterator: 符号;

}

接口 AsyncIterator<T> {

    //@@{ 预设_:Promise, 迭代器结果_:IteratorResult }
    next(value?: 任意): 预设_<迭代器结果_<T>>;

    //@@{ 预设_:Promise, 迭代器结果_:IteratorResult }
    return?(value?: 任意): 预设_<迭代器结果_<T>>;

    //@@{ 预设_:Promise, 迭代器结果_:IteratorResult }
    throw?(e?: 任意): 预设_<迭代器结果_<T>>;

}

接口 AsyncIterable<T> {

    //@@{ 符号_:Symbol }
    [符号_.asyncIterator](): AsyncIterator<T>;

}

接口 AsyncIterableIterator<T> 扩展 AsyncIterator<T> {

    //@@{ 符号_:Symbol }
    [符号_.asyncIterator](): AsyncIterableIterator<T>;
}