//@@{ 只读数组_:ReadonlyArray }
接口 只读数组_<T> {

    /**
     * Calls a defined callback function on each element of an array. Then, flattens the result into
     * a new array.
     * This is identical to a map followed by a flatten of depth 1.
     *
     * @param 回调 A function that accepts up to three arguments. The flatMap method calls the
     * callback function one time for each element in the array.
     * @param 本体参数 An object to which the this keyword can refer in the callback function. If
     * thisArg is omitted, undefined is used as the this value.
     */

    //@@{ 平面映射:flatMap, 本体_:This }
    平面映射<U, 本体_ = 未定> (

        //@@{ 回调:callback, 本体:this, 本体_:This, 值:value, 索引:index, 数组:array }
        回调: (本体: 本体_, 值: T, 索引: 数字, 数组: T[]) => U|U[],

        //@@{ 本体参数:thisArg, 本体_:This }
        本体参数?: 本体_
    ): U[]

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param 深度 The maximum recursion depth
     */

    //@@{ 扁平化:flatten, 本体:this, 只读数组_:ReadonlyArray }
    扁平化<U>(本体: 只读数组_<U[][][][]> | 只读数组_<只读数组_<U[][][]>> | 只读数组_<只读数组_<U[][]>[]> | 只读数组_<只读数组_<U[]>[][]> | 只读数组_<只读数组_<U>[][][]> | 只读数组_<只读数组_<只读数组_<U[][]>>> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<只读数组_<U>[][]>> | 只读数组_<只读数组_<只读数组_<U>>[][]> | 只读数组_<只读数组_<只读数组_<U>[]>[]> | 只读数组_<只读数组_<只读数组_<U[]>>[]> | 只读数组_<只读数组_<只读数组_<U[]>[]>> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<只读数组_<只读数组_<U[]>>>> | 只读数组_<只读数组_<只读数组_<只读数组_<U>[]>>> | 只读数组_<只读数组_<只读数组_<只读数组_<U>>[]>> | 只读数组_<只读数组_<只读数组_<只读数组_<U>>>[]> | 只读数组_<只读数组_<只读数组_<只读数组_<只读数组_<U>>>>>,

        //@@{ 深度:depth }
        深度: 4): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param 深度 The maximum recursion depth
     */

    //@@{ 扁平化:flatten, 本体:this, 只读数组_:ReadonlyArray, 深度:depth }
    扁平化<U>(本体: 只读数组_<U[][][]> | 只读数组_<只读数组_<U>[][]> | 只读数组_<只读数组_<U[]>[]> | 只读数组_<只读数组_<U[][]>> | 只读数组_<只读数组_<只读数组_<U[]>>> | 只读数组_<只读数组_<只读数组_<U>[]>> | 只读数组_<只读数组_<只读数组_<U>>[]> | 只读数组_<只读数组_<只读数组_<只读数组_<U>>>>, 深度: 3): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param 深度 The maximum recursion depth
     */

    //@@{ 扁平化:flatten, 本体:this, 只读数组_:ReadonlyArray, 深度:depth }
    扁平化<U>(本体: 只读数组_<U[][]> | 只读数组_<只读数组_<U[]>> | 只读数组_<只读数组_<U>[]> | 只读数组_<只读数组_<只读数组_<U>>>, 深度: 2): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param 深度 The maximum recursion depth
     */

    //@@{ 扁平化:flatten, 本体:this, 只读数组_:ReadonlyArray, 深度:depth }
    扁平化<U>(本体: 只读数组_<U[]> | 只读数组_<只读数组_<U>>, 深度?: 1 ): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param 深度 The maximum recursion depth
     */

    //@@{ 扁平化:flatten, 本体:this, 只读数组_:ReadonlyArray, 深度:depth }
    扁平化<U>(本体: 只读数组_<U>, 深度: 0): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth. If no depth is provided, flatten method defaults to the depth of 1.
     *
     * @param 深度 The maximum recursion depth
     */

    //@@{ 扁平化:flatten, 深度:depth }
    扁平化<U>(深度?: 数字): 任意[];

  }

//@@{ 数组_:Array }
接口 数组_<T> {

    /**
     * Calls a defined callback function on each element of an array. Then, flattens the result into
     * a new array.
     * This is identical to a map followed by a flatten of depth 1.
     *
     * @param 回调 A function that accepts up to three arguments. The flatMap method calls the
     * callback function one time for each element in the array.
     * @param 本体参数 An object to which the this keyword can refer in the callback function. If
     * thisArg is omitted, undefined is used as the this value.
     */

    //@@{ 平面映射:flatMap, 本体_:This, 回调:callback, 本体:this, 值:value, 索引:index, 数组:array, 本体参数:thisArg }
    平面映射<U, 本体_ = 未定>(回调: (本体: 本体_, 值: T, 索引: 数字, 数组: T[]) => U | U[], 本体参数?: 本体_): U[]

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param 深度 The maximum recursion depth
     */

    //@@{ 扁平化:flatten, 本体:this, 深度:depth }
    扁平化<U>(本体: U[][][][][][][][], 深度: 7): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param 深度 The maximum recursion depth
     */

    //@@{ 扁平化:flatten, 本体:this, 深度:depth }
    扁平化<U>(本体: U[][][][][][][], 深度: 6): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param 深度 The maximum recursion depth
     */

    //@@{ 扁平化:flatten, 本体:this, 深度:depth }
    扁平化<U>(本体: U[][][][][][], 深度: 5): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param 深度 The maximum recursion depth
     */

    //@@{ 扁平化:flatten, 本体:this, 深度:depth }
    扁平化<U>(本体: U[][][][][], 深度: 4): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param 深度 The maximum recursion depth
     */

    //@@{ 扁平化:flatten, 本体:this, 深度:depth }
    扁平化<U>(本体: U[][][][], 深度: 3): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param 深度 The maximum recursion depth
     */

    //@@{ 扁平化:flatten, 本体:this, 深度:depth }
    扁平化<U>(本体: U[][][], 深度: 2): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param 深度 The maximum recursion depth
     */

    //@@{ 扁平化:flatten, 本体:this, 深度:depth }
    扁平化<U>(本体: U[][], 深度?: 1): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param 深度 The maximum recursion depth
     */

    //@@{ 扁平化:flatten, 本体:this, 深度:depth }
    扁平化<U>(本体: U[], 深度: 0): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth. If no depth is provided, flatten method defaults to the depth of 1.
     *
     * @param 深度 The maximum recursion depth
     */

    //@@{ 扁平化:flatten, 深度:depth }
    扁平化<U>(深度?: 数字): 任意[];
}
