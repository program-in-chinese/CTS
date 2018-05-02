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
/// <引用 路径= "lib.zh-cn.dom.d.cts" />

//@@{ DOM令牌列表_:DOMTokenList }
接口 DOM令牌列表_ {

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<文字>;

}

//@@{ 表单数据_:FormData }
接口 表单数据_ {

    /**
     * Returns an array of key, value pairs for every entry in the list
     */

    //@@{ 条目组:entries, 可迭代迭代器_:IterableIterator } 
    条目组(): 可迭代迭代器_<[文字, 文字 | 文件_]>;

    /**
     * Returns a list of keys in the list
     */

    //@@{ 键组:keys, 可迭代迭代器_:IterableIterator }
    键组(): 可迭代迭代器_<文字>;

    /**
     * Returns a list of values in the list
     */

    //@@{ 值组:values, 可迭代迭代器_:IterableIterator }
    值组(): 可迭代迭代器_<文字 | 文件_>;

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<文字 | 文件_>;

}

//@@{ 报头_:Headers }
接口 报头_ {

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<[文字, 文字]>;

    /**
     * Returns an iterator allowing to go through all key/value pairs contained in this object.
     */

    //@@{ 条目组:entries, 可迭代迭代器_:IterableIterator }
    条目组(): 可迭代迭代器_<[文字, 文字]>;

    /**
     * Returns an iterator allowing to go through all keys f the key/value pairs contained in this object.
     */

    //@@{ 键组:keys, 可迭代迭代器_:IterableIterator }
    键组(): 可迭代迭代器_<文字>;

    /**
     * Returns an iterator allowing to go through all values of the key/value pairs contained in this object.
     */

    //@@{ 值组:values, 可迭代迭代器_:IterableIterator }
    值组(): 可迭代迭代器_<文字>;

}

//@@{ 节点列表_:NodeList }
接口 节点列表_ {

    /**
     * Returns an array of key, value pairs for every entry in the list
     */

    //@@{ 条目组:entries, 可迭代迭代器_:IterableIterator }
    条目组(): 可迭代迭代器_<[数字, 节点_]>;

    /**
     * Performs the specified action for each node in an list.
     * @param 回调函数  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list.
     * @param 本体参数  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */

    //@@{ 循环执行:forEach, 回调函数:callbackfn, 值:value, 索引:index, 列表对象:listObj, 节点列表_:NodeList, 本体参数:thisArg }
    循环执行(回调函数: (值: 节点_, 索引: 数字, 列表对象: 节点列表_) => 无值, 本体参数?: 任意): 无值;

    /**
     * Returns an list of keys in the list
     */

    //@@{ 键组:keys, 可迭代迭代器_:IterableIterator }
    键组(): 可迭代迭代器_<数字>;

    /**
     * Returns an list of values in the list
     */

    //@@{ 值组:values, 可迭代迭代器_:IterableIterator }
    值组(): 可迭代迭代器_<节点_>;

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<节点_>;

}

//@@{ 节点的列表_:NodeListOf, T节点:TNode }
接口 节点的列表_<T节点 扩展 节点_> {

    /**
     * Returns an array of key, value pairs for every entry in the list
     */

    //@@{ 条目组:entries, 可迭代迭代器_:IterableIterator, T节点:TNode }
    条目组(): 可迭代迭代器_<[数字, T节点]>;

    /**
     * Performs the specified action for each node in an list.
     * @param 回调函数  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list.
     * @param 本体参数  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */

    //@@{ 循环执行:forEach, 回调函数:callbackfn, 值:value, T节点:TNode, 索引:index, 列表对象:listObj, 节点的列表_:NodeListOf, 本体参数:thisArg }
    循环执行(回调函数: (值: T节点, 索引: 数字, 列表对象: 节点的列表_<T节点>) => 无值, 本体参数?: 任意): 无值;

    /**
     * Returns an list of keys in the list
     */

    //@@{ 键组:keys, 可迭代迭代器_:IterableIterator }
    键组(): 可迭代迭代器_<数字>;

    /**
     * Returns an list of values in the list
     */

    //@@{ 值组:values, 可迭代迭代器_:IterableIterator, T节点:TNode }
    值组(): 可迭代迭代器_<T节点>;

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator, T节点:TNode }
    [符号_.迭代器](): 可迭代迭代器_<T节点>;

}

//@@{ URL搜索参数_:URLSearchParams }
接口 URL搜索参数_ {

    /**
     * Returns an array of key, value pairs for every entry in the search params
     */

    //@@{ 条目组:entries, 可迭代迭代器_:IterableIterator }
    条目组(): 可迭代迭代器_<[文字, 文字]>;

    /**
     * Returns a list of keys in the search params
     */

    //@@{ 键组:keys, 可迭代迭代器_:IterableIterator }
    键组(): 可迭代迭代器_<文字>;

    /**
     * Returns a list of values in the search params
     */

    //@@{ 值组:values, 可迭代迭代器_:IterableIterator }
    值组(): 可迭代迭代器_<文字>;

    /**
     * iterate over key/value pairs
     */

    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<[文字, 文字]>;
}
