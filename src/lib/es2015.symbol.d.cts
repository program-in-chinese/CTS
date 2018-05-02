//@@{ 符号_:Symbol }
接口 符号_ {

    /** Returns a string representation of an object. */

    //@@{ 转为文字:toString }
    转为文字(): 文字;

    /** Returns the primitive value of the specified object. */

    //@@{ 原始值位于:valueOf }
    原始值位于(): 符号;

}

//@@{ 符号构造函数_:SymbolConstructor }
接口 符号构造函数_ {

    /**
     * A reference to the prototype.
     */

    //@@{ 原型:prototype, 符号_:Symbol }
    只读 原型: 符号_;

    /**
     * Returns a new unique Symbol value.
     * @param  描述 Description of the new Symbol object.
     */

    //@@{ 描述:description }
    (描述?: 文字 | 数字): 符号;

    /**
     * Returns a Symbol object from the global symbol registry matching the given key if found.
     * Otherwise, returns a new symbol with this key.
     * @param 键 key to search for.
     */

    //@@{ 为了:for, 键:key }
    为了(键: 文字): 符号;

    /**
     * Returns a key from the global symbol registry matching the given Symbol if found.
     * Otherwise, returns a undefined.
     * @param 符号对象 Symbol to find the key for.
     */

    //@@{ 键为了:keyFor, 符号对象:sym }
    键为了(符号对象: 符号): 文字 | 未定;

}

//@@{ 符号构造函数_:SymbolConstructor }
声明 值量 符号_: 符号构造函数_;