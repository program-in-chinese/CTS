/// <引用 路径="lib.zh-cn.es2015.symbol.d.cts" />
/// <引用 路径="lib.zh-cn.es2015.iterable.d.cts" />

//@@{ 符号构造函数_:SymbolConstructor }
接口 符号构造函数_ {

    /**
     * A method that returns the default async iterator for an object. Called by the semantics of
     * the for-await-of statement.
     */

    //@@{ 异步迭代器:asyncIterator }
    只读 异步迭代器: 符号;

}

//@@{ 异步迭代器_:AsyncIterator }
接口 异步迭代器_<T> {

    //@@{ 下个:next, 值:value, 预设_:Promise, 迭代器结果_:IteratorResult }
    下个(值?: 任意): 预设_<迭代器结果_<T>>;

    //@@{ 返回:return, 值:value, 预设_:Promise, 迭代器结果_:IteratorResult }
    返回?(值?: 任意): 预设_<迭代器结果_<T>>;

    //@@{ 抛出:throw, 预设_:Promise, 迭代器结果_:IteratorResult }
    抛出?(e?: 任意): 预设_<迭代器结果_<T>>;

}

//@@{ 异步可迭代_:AsyncIterable }
接口 异步可迭代_<T> {

    //@@{ 符号_:Symbol, 异步迭代器:asyncIterator, 异步迭代器_:AsyncIterator }
    [符号_.异步迭代器](): 异步迭代器_<T>;

}

//@@{ 异步可迭代迭代器_:AsyncIterableIterator, 异步迭代器_:AsyncIterator }
接口 异步可迭代迭代器_<T> 扩展 异步迭代器_<T> {

    //@@{ 符号_:Symbol, 异步迭代器:asyncIterator, 异步可迭代迭代器_:AsyncIterableIterator }
    [符号_.异步迭代器](): 异步可迭代迭代器_<T>;
}