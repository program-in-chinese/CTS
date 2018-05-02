//@@{ 预设构造函数_:PromiseConstructor }
接口 预设构造函数_ {

    /**
     * A reference to the prototype.
     */

    //@@{ 原型:prototype, 预设_:Promise }
    只读 原型: 预设_<任意>;

    /**
     * Creates a new Promise.
     * @param 执行者 A callback used to initialize the promise. This callback is passed two arguments:
     * a resolve callback used resolve the promise with a value or the result of another promise,
     * and a reject callback used to reject the promise with a provided reason or error.
     */

    //@@{ 执行者:executor, 解决:resolve, 值:value, 预设等_:PromiseLike, 拒绝:reject, 原因:reason, 预设_:Promise }
    新建 <T>(执行者: (解决: (值?: T | 预设等_<T>) => 无值, 拒绝: (原因?: 任意) => 无值) => 无值): 预设_<T>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 所有:all, 值组:values, 预设等_:PromiseLike, 预设_:Promise }
    所有<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(值组: [T1 | 预设等_<T1>, T2 | 预设等_<T2>, T3 | 预设等_<T3>, T4 | 预设等_ <T4>, T5 | 预设等_<T5>, T6 | 预设等_<T6>, T7 | 预设等_<T7>, T8 | 预设等_<T8>, T9 | 预设等_<T9>, T10 | 预设等_<T10>]): 预设_<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 值组:values, 预设等_:PromiseLike, 预设_:Promise }
    所有<T1, T2, T3, T4, T5, T6, T7, T8, T9>(值组: [T1 | 预设等_<T1>, T2 | 预设等_<T2>, T3 | 预设等_<T3>, T4 | 预设等_ <T4>, T5 | 预设等_<T5>, T6 | 预设等_<T6>, T7 | 预设等_<T7>, T8 | 预设等_<T8>, T9 | 预设等_<T9>]): 预设_<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 值组:values, 预设等_:PromiseLike, 预设_:Promise }
    所有<T1, T2, T3, T4, T5, T6, T7, T8>(值组: [T1 | 预设等_<T1>, T2 | 预设等_<T2>, T3 | 预设等_<T3>, T4 | 预设等_ <T4>, T5 | 预设等_<T5>, T6 | 预设等_<T6>, T7 | 预设等_<T7>, T8 | 预设等_<T8>]): 预设_<[T1, T2, T3, T4, T5, T6, T7, T8]>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 值组:values, 预设等_:PromiseLike, 预设_:Promise }
    所有<T1, T2, T3, T4, T5, T6, T7>(值组: [T1 | 预设等_<T1>, T2 | 预设等_<T2>, T3 | 预设等_<T3>, T4 | 预设等_ <T4>, T5 | 预设等_<T5>, T6 | 预设等_<T6>, T7 | 预设等_<T7>]): 预设_<[T1, T2, T3, T4, T5, T6, T7]>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 值组:values, 预设等_:PromiseLike, 预设_:Promise }
    所有<T1, T2, T3, T4, T5, T6>(值组: [T1 | 预设等_<T1>, T2 | 预设等_<T2>, T3 | 预设等_<T3>, T4 | 预设等_ <T4>, T5 | 预设等_<T5>, T6 | 预设等_<T6>]): 预设_<[T1, T2, T3, T4, T5, T6]>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 值组:values, 预设等_:PromiseLike, 预设_:Promise }
    所有<T1, T2, T3, T4, T5>(值组: [T1 | 预设等_<T1>, T2 | 预设等_<T2>, T3 | 预设等_<T3>, T4 | 预设等_ <T4>, T5 | 预设等_<T5>]): 预设_<[T1, T2, T3, T4, T5]>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 值组:values, 预设等_:PromiseLike, 预设_:Promise }
    所有<T1, T2, T3, T4>(值组: [T1 | 预设等_<T1>, T2 | 预设等_<T2>, T3 | 预设等_<T3>, T4 | 预设等_ <T4>]): 预设_<[T1, T2, T3, T4]>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 值组:values, 预设等_:PromiseLike, 预设_:Promise }
    所有<T1, T2, T3>(值组: [T1 | 预设等_<T1>, T2 | 预设等_<T2>, T3 | 预设等_<T3>]): 预设_<[T1, T2, T3]>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 值组:values, 预设等_:PromiseLike, 预设_:Promise }
    所有<T1, T2>(值组: [T1 | 预设等_<T1>, T2 | 预设等_<T2>]): 预设_<[T1, T2]>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 值组:values, 预设等_:PromiseLike, 预设_:Promise }
    所有<T>(值组: (T | 预设等_<T>)[]): 预设_<T[]>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 竞速:race, 值组:values, 预设等_:PromiseLike, 预设_:Promise }
    竞速<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(值组: [T1 | 预设等_<T1>, T2 | 预设等_<T2>, T3 | 预设等_<T3>, T4 | 预设等_<T4>, T5 | 预设等_<T5>, T6 | 预设等_<T6>, T7 | 预设等_<T7>, T8 | 预设等_<T8>, T9 | 预设等_<T9>, T10 | 预设等_<T10>]): 预设_<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 值组:values, 预设等_:PromiseLike, 预设_:Promise }
    竞速<T1, T2, T3, T4, T5, T6, T7, T8, T9>(值组: [T1 | 预设等_<T1>, T2 | 预设等_<T2>, T3 | 预设等_<T3>, T4 | 预设等_<T4>, T5 | 预设等_<T5>, T6 | 预设等_<T6>, T7 | 预设等_<T7>, T8 | 预设等_<T8>, T9 | 预设等_<T9>]): 预设_<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 值组:values, 预设等_:PromiseLike, 预设_:Promise }
    竞速<T1, T2, T3, T4, T5, T6, T7, T8>(值组: [T1 | 预设等_<T1>, T2 | 预设等_<T2>, T3 | 预设等_<T3>, T4 | 预设等_<T4>, T5 | 预设等_<T5>, T6 | 预设等_<T6>, T7 | 预设等_<T7>, T8 | 预设等_<T8>]): 预设_<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 值组:values, 预设等_:PromiseLike, 预设_:Promise }
    竞速<T1, T2, T3, T4, T5, T6, T7>(值组: [T1 | 预设等_<T1>, T2 | 预设等_<T2>, T3 | 预设等_<T3>, T4 | 预设等_<T4>, T5 | 预设等_<T5>, T6 | 预设等_<T6>, T7 | 预设等_<T7>]): 预设_<T1 | T2 | T3 | T4 | T5 | T6 | T7>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 值组:values, 预设等_:PromiseLike, 预设_:Promise }
    竞速<T1, T2, T3, T4, T5, T6>(值组: [T1 | 预设等_<T1>, T2 | 预设等_<T2>, T3 | 预设等_<T3>, T4 | 预设等_<T4>, T5 | 预设等_<T5>, T6 | 预设等_<T6>]): 预设_<T1 | T2 | T3 | T4 | T5 | T6>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 值组:values, 预设等_:PromiseLike, 预设_:Promise }
    竞速<T1, T2, T3, T4, T5>(值组: [T1 | 预设等_<T1>, T2 | 预设等_<T2>, T3 | 预设等_<T3>, T4 | 预设等_<T4>, T5 | 预设等_<T5>]): 预设_<T1 | T2 | T3 | T4 | T5>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 值组:values, 预设等_:PromiseLike, 预设_:Promise }
    竞速<T1, T2, T3, T4>(值组: [T1 | 预设等_<T1>, T2 | 预设等_<T2>, T3 | 预设等_<T3>, T4 | 预设等_<T4>]): 预设_<T1 | T2 | T3 | T4>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 值组:values, 预设等_:PromiseLike, 预设_:Promise }
    竞速<T1, T2, T3>(值组: [T1 | 预设等_<T1>, T2 | 预设等_<T2>, T3 | 预设等_<T3>]): 预设_<T1 | T2 | T3>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 值组:values, 预设等_:PromiseLike, 预设_:Promise }
    竞速<T1, T2>(值组: [T1 | 预设等_<T1>, T2 | 预设等_<T2>]): 预设_<T1 | T2>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param 值组 An array of Promises.
     * @returns A new Promise.
     */

    //@@{ 值组:values, 预设等_:PromiseLike, 预设_:Promise }
    竞速<T>(值组: (T | 预设等_<T>)[]): 预设_<T>;

    /**
     * Creates a new rejected promise for the provided reason.
     * @param 原因 The reason the promise was rejected.
     * @returns A new rejected Promise.
     */

    //@@{ 拒绝:reject, 原因:reason, 预设_:Promise }
    拒绝(原因: 任意): 预设_<不及>;

    /**
     * Creates a new rejected promise for the provided reason.
     * @param 原因 The reason the promise was rejected.
     * @returns A new rejected Promise.
     */

    //@@{ 原因:reason, 预设_:Promise }
    拒绝<T>(原因: 任意): 预设_<T>;

    /**
     * Creates a new resolved promise for the provided value.
     * @param 值 A promise.
     * @returns A promise whose internal state matches the provided promise.
     */

    //@@{ 解决:resolve, 值:value, 预设等_:PromiseLike, 预设_:Promise }
    解决<T>(值: T | 预设等_<T>): 预设_<T>;

    /**
     * Creates a new resolved promise .
     * @returns A resolved promise.
     */

    //@@{ 预设_:Promise }
    解决(): 预设_<无值>;

}

//@@{ 预设_:Promise, 预设构造函数_:PromiseConstructor }
声明 值量 预设_: 预设构造函数_;