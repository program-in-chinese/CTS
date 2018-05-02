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

//@@{ 只读数组_:ReadonlyArray }
接口 只读数组_<T> {

    /**
     * Calls a defined callback function on each element of an array. Then, flattens the result into
     * a new array.
     * This is identical to a map followed by a flatten of depth 1.
     *
     * @param callback A function that accepts up to three arguments. The flatMap method calls the
     * callback function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callback function. If
     * thisArg is omitted, undefined is used as the this value.
     */

    flatMap<U, This = 未定> (

        callback: (this: This, value: T, index: 数字, array: T[]) => U|U[],

        thisArg?: This
    ): U[]

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param depth The maximum recursion depth
     */

    flatten<U>(this:

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<U[][][][]> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<U[][][]>> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<U[][]>[]> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<U[]>[][]> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<U>[][][]> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<只读数组_<U[][]>>> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<只读数组_<U>[][]>> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<只读数组_<U>>[][]> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<只读数组_<U>[]>[]> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<只读数组_<U[]>>[]> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<只读数组_<U[]>[]>> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<只读数组_<只读数组_<U[]>>>> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<只读数组_<只读数组_<U>[]>>> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<只读数组_<只读数组_<U>>[]>> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<只读数组_<只读数组_<U>>>[]> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<只读数组_<只读数组_<只读数组_<U>>>>>,

        depth: 4): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param depth The maximum recursion depth
     */

    flatten<U>(this:

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<U[][][]> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<U>[][]> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<U[]>[]> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<U[][]>> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<只读数组_<U[]>>> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<只读数组_<U>[]>> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<只读数组_<U>>[]> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<只读数组_<只读数组_<U>>>>,

        depth: 3): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param depth The maximum recursion depth
     */

    flatten<U>(this:

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<U[][]> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<U[]>> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<U>[]> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<只读数组_<U>>>,

        depth: 2): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param depth The maximum recursion depth
     */

    flatten<U>(this:

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<U[]> |

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<只读数组_<U>>,

        depth?: 1

    ): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param depth The maximum recursion depth
     */

    flatten<U>(this:

        //@@{ 只读数组_:ReadonlyArray }
        只读数组_<U>,

        depth: 0

    ): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth. If no depth is provided, flatten method defaults to the depth of 1.
     *
     * @param depth The maximum recursion depth
     */

    flatten<U>(depth?: 数字): 任意[];

  }

//@@{ 数组_:Array }
接口 数组_<T> {

    /**
     * Calls a defined callback function on each element of an array. Then, flattens the result into
     * a new array.
     * This is identical to a map followed by a flatten of depth 1.
     *
     * @param callback A function that accepts up to three arguments. The flatMap method calls the
     * callback function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callback function. If
     * thisArg is omitted, undefined is used as the this value.
     */

    flatMap<U, This = 未定> (

        callback: (this: This, value: T, index: 数字, array: T[]) => U|U[],

        thisArg?: This
    ): U[]

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param depth The maximum recursion depth
     */

    flatten<U>(this: U[][][][][][][][], depth: 7): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param depth The maximum recursion depth
     */

    flatten<U>(this: U[][][][][][][], depth: 6): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param depth The maximum recursion depth
     */

    flatten<U>(this: U[][][][][][], depth: 5): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param depth The maximum recursion depth
     */

    flatten<U>(this: U[][][][][], depth: 4): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param depth The maximum recursion depth
     */

    flatten<U>(this: U[][][][], depth: 3): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param depth The maximum recursion depth
     */

    flatten<U>(this: U[][][], depth: 2): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param depth The maximum recursion depth
     */

    flatten<U>(this: U[][], depth?: 1): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth.
     *
     * @param depth The maximum recursion depth
     */

    flatten<U>(this: U[], depth: 0): U[];

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the
     * specified depth. If no depth is provided, flatten method defaults to the depth of 1.
     *
     * @param depth The maximum recursion depth
     */

    flatten<U>(depth?: 数字): 任意[];
}
