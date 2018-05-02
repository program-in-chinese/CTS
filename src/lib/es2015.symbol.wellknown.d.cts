/// <引用 路径= "lib.zh-cn.es2015.symbol.d.cts" /> 

//@@{ 符号构造函数_:SymbolConstructor }
接口 符号构造函数_ {

    /**
     * A method that determines if a constructor object recognizes an object as one of the
     * constructor’s instances. Called by the semantics of the instanceof operator.
     */

    //@@{ 有实例:hasInstance }
    只读 有实例: 符号;

    /**
     * A Boolean value that if true indicates that an object should flatten to its array elements
     * by Array.prototype.concat.
     */

    //@@{ 是可以结合的:isConcatSpreadable }
    只读 是可以结合的: 符号;

    /**
     * A regular expression method that matches the regular expression against a string. Called
     * by the String.prototype.match method.
     */

    //@@{ 匹配:match }
    只读 匹配: 符号;

    /**
     * A regular expression method that replaces matched substrings of a string. Called by the
     * String.prototype.replace method.
     */

    //@@{ 替换:replace }
    只读 替换: 符号;

    /**
     * A regular expression method that returns the index within a string that matches the
     * regular expression. Called by the String.prototype.search method.
     */

    //@@{ 搜索:search }
    只读 搜索: 符号;

    /**
     * A function valued property that is the constructor function that is used to create
     * derived objects.
     */

    //@@{ 派生构造:species }
    只读 派生构造: 符号;

    /**
     * A regular expression method that splits a string at the indices that match the regular
     * expression. Called by the String.prototype.split method.
     */

    //@@{ 分裂:split }
    只读 分裂: 符号;

    /**
     * A method that converts an object to a corresponding primitive value.
     * Called by the ToPrimitive abstract operation.
     */

    //@@{ 转为原始:toPrimitive }
    只读 转为原始: 符号;

    /**
     * A String value that is used in the creation of the default string description of an object.
     * Called by the built-in method Object.prototype.toString.
     */

    //@@{ 转为文字标签:toStringTag }
    只读 转为文字标签: 符号;

    /**
     * An Object whose own property names are property names that are excluded from the 'with'
     * environment bindings of the associated objects.
     */

    //@@{ 排除到外部:unscopables }
    只读 排除到外部: 符号;

}

//@@{ 符号_:Symbol }
接口 符号_ {

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag, "符号_":"Symbol" }
    只读 [符号_.转为文字标签]: "符号_";

}

//@@{ 数组_:Array }
接口 数组_<T> {

    /**
     * Returns an object whose properties have the value 'true'
     * when they will be absent when used in a 'with' statement.
     */

    //@@{ 符号_:Symbol, 排除到外部:unscopables }
    [符号_.排除到外部](): {

        //@@{ 复制在内部:copyWithin }
        复制在内部: 真假;

        //@@{ 条目:entries }
        条目: 真假;

        //@@{ 填充:fill }
        填充: 真假;

        //@@{ 查找:find }
        查找: 真假;

        //@@{ 查找索引:findIndex }
        查找索引: 真假;

        //@@{ 键组:keys }
        键组: 真假;

        //@@{ 值组:values }
        值组: 真假;

    };
}

//@@{ 日期_:Date }
接口 日期_ {

    /**
     * Converts a Date object to a string.
     */

    //@@{ 符号_:Symbol, 转为原始:toPrimitive, 提示:hint }
    [符号_.转为原始](提示: "默认"): 文字;

    /**
     * Converts a Date object to a string.
     */

    //@@{ 符号_:Symbol, 转为原始:toPrimitive, 提示:hint }
    [符号_.转为原始](提示: "文字"): 文字;

    /**
     * Converts a Date object to a number.
     */

    //@@{ 符号_:Symbol, 转为原始:toPrimitive, 提示:hint }
    [符号_.转为原始](提示: "数字"): 数字;

    /**
     * Converts a Date object to a string or number.
     *
     * @param 提示 The strings "number", "string", or "default" to specify what primitive to return.
     *
     * @throws {TypeError} If 'hint' was given something other than "number", "string", or "default".
     * @returns A number if 'hint' was "number", a string if 'hint' was "string" or "default".
     */

    //@@{ 符号_:Symbol, 转为原始:toPrimitive, 提示:hint }
    [符号_.转为原始](提示: 文字): 文字 | 数字;

}

//@@{ 映射_:Map }
接口 映射_<K, V> {

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag, "映射_":"Map" }
    只读 [符号_.转为文字标签]: "映射_";

}

//@@{ 弱映射_:WeakMap }
接口 弱映射_<K 扩展 实例, V> {

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag, "弱映射_":"WeakMap" }
    只读 [符号_.转为文字标签]: "弱映射_";

}

//@@{ 集合_:Set }
接口 集合_<T> {

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag, "集合_":"Set" }
    只读 [符号_.转为文字标签]: "集合_";

}

//@@{ 弱集合_:WeakSet }
接口 弱集合_<T> {

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag, "弱集合_":"WeakSet" }
    只读 [符号_.转为文字标签]: "弱集合_";

}

接口 JSON {

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag }
    只读 [符号_.转为文字标签]: "JSON";

}

//@@{ 函数_:Function }
接口 函数_ {

    /**
     * Determines whether the given value inherits from this function if this function was used
     * as a constructor function.
     *
     * A constructor function can control which objects are recognized as its instances by
     * 'instanceof' by overriding this method.
     */

    //@@{ 符号_:Symbol, 有实例:hasInstance, 值:value }
    [符号_.有实例](值: 任意): 真假;

}

//@@{ 生成器函数_:GeneratorFunction }
接口 生成器函数_ {

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag, "生成器函数_":"GeneratorFunction" }
    只读 [符号_.转为文字标签]: "生成器函数_";

}

//@@{ 数学_:Math }
接口 数学_ {

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag, "数学_":"Math" }
    只读 [符号_.转为文字标签]: "数学_";

}

//@@{ 预设_:Promise }
接口 预设_<T> {

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag, "预设_":"Promise" }
    只读 [符号_.转为文字标签]: "预设_";

}

//@@{ 预设构造函数_:PromiseConstructor }
接口 预设构造函数_ {

    //@@{ 符号_:Symbol, 派生构造:species, 函数_:Function }
    只读 [符号_.派生构造]: 函数_;

}

//@@{ 正则_:RegExp }
接口 正则_ {

    /**
     * Matches a string with this regular expression, and returns an array containing the results of
     * that search.
     * @param 文字 A string to search within.
     */

    //@@{ 符号_:Symbol, 匹配:match, 文字:string, 正则匹配数组_:RegExpMatchArray }
    [符号_.匹配](文字: 文字): 正则匹配数组_ | 空值;

    /**
     * Replaces text in a string, using this regular expression.
     * @param 文字 A String object or string literal whose contents matching against
     *               this regular expression will be replaced
     * @param 替换值 A String object or string literal containing the text to replace for every
     *                     successful match of this regular expression.
     */

    //@@{ 符号_:Symbol, 替换:replace, 文字:string, 替换值:replaceValue }
    [符号_.替换](文字: 文字, 替换值: 文字): 文字;

    /**
     * Replaces text in a string, using this regular expression.
     * @param 文字 A String object or string literal whose contents matching against
     *               this regular expression will be replaced
     * @param 替代者 A function that returns the replacement text.
     */

    //@@{ 符号_:Symbol, 替换:replace, 文字:string, 替代者:replacer, 子文字:substring, 参数集:args }
    [符号_.替换](文字: 文字, 替代者: (子文字: 文字, ...参数集: 任意[]) => 文字): 文字;

    /**
     * Finds the position beginning first substring match in a regular expression search
     * using this regular expression.
     *
     * @param 文字 The string to search within.
     */

    //@@{ 符号_:Symbol, 搜索:search, 文字:string }
    [符号_.搜索](文字: 文字): 数字;

    /**
     * Returns an array of substrings that were delimited by strings in the original input that
     * match against this regular expression.
     *
     * If the regular expression contains capturing parentheses, then each time this
     * regular expression matches, the results (including any undefined results) of the
     * capturing parentheses are spliced.
     *
     * @param 文字 string value to split
     * @param 限制 if not undefined, the output array is truncated so that it contains no more
     * than 'limit' elements.
     */

    //@@{ 符号_:Symbol, 分裂:split, 文字:string, 限制:limit }
    [符号_.分裂](文字: 文字, 限制?: 数字): 文字[];

}

//@@{ 正则构造函数_:RegExpConstructor }
接口 正则构造函数_ {

    //@@{ 符号_:Symbol, 派生构造:species, 正则构造函数_:RegExpConstructor }
    [符号_.派生构造](): 正则构造函数_;

}

//@@{ 文字_:String }
接口 文字_ {

    /**
     * Matches a string an object that supports being matched against, and returns an array containing the results of that search.
     * @param 匹配器 An object that supports being matched against.
     */

    //@@{ 匹配:match, 匹配器:matcher, 符号_:Symbol, 文字:string, 正则匹配数组_:RegExpMatchArray }
    匹配(匹配器: { [符号_.匹配](文字: 文字): 正则匹配数组_ | 空值; }): 正则匹配数组_ | 空值;

    /**
     * Replaces text in a string, using an object that supports replacement within a string.
     * @param 搜索值 A object can search for and replace matches within a string.
     * @param 替换值 A string containing the text to replace for every successful match of searchValue in this string.
     */

    //@@{ 替换:replace, 搜索值:searchValue, 符号_:Symbol, 文字:string, 替换值:replaceValue }
    替换(搜索值: { [符号_.替换](文字: 文字, 替换值: 文字): 文字; }, 替换值: 文字): 文字;

    /**
     * Replaces text in a string, using an object that supports replacement within a string.
     * @param 搜索值 A object can search for and replace matches within a string.
     * @param 替代者 A function that returns the replacement text.
     */

    //@@{ 搜索值:searchValue, 符号_:Symbol, 替换:replace, 文字:string, 替代者:replacer, 子文字:substring, 参数集:args }
    替换(搜索值: { [符号_.替换](文字: 文字, 替代者: (子文字: 文字, ...参数集: 任意[]) => 文字): 文字; }, 替代者: (子文字: 文字, ...参数集: 任意[]) => 文字): 文字;

    /**
     * Finds the first substring match in a regular expression search.
     * @param 搜索者 An object which supports searching within a string.
     */

    //@@{ 搜索:search, 搜索者:searcher, 符号_:Symbol, 文字:string }
    搜索(搜索者: { [符号_.搜索](文字: 文字): 数字; }): 数字;

    /**
     * Split a string into substrings using the specified separator and return them as an array.
     * @param 分束器 An object that can split a string.
     * @param 限制 A value used to limit the number of elements returned in the array.
     */

    //@@{ 分割:split, 分束器:splitter, 符号_:Symbol, 分裂:split, 文字:string, 限制:limit }
    分割(分束器: { [符号_.分裂](文字: 文字, 限制?: 数字): 文字[]; }, 限制?: 数字): 文字[];

}

//@@{ 数组缓冲区_:ArrayBuffer }
接口 数组缓冲区_ {

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag, "数组缓冲区_":"ArrayBuffer" }
    只读 [符号_.转为文字标签]: "数组缓冲区_";

}

//@@{ 数据视图_:DataView }
接口 数据视图_ {

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag, "数据视图_":"DataView" }
    只读 [符号_.转为文字标签]: "数据视图_";

}

//@@{ 整数数组8_:Int8Array }
接口 整数数组8_ {

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag, "整数数组8_":"Int8Array" }
    只读 [符号_.转为文字标签]: "整数数组8_";

}

//@@{ 正整数数组8_:Uint8Array }
接口 正整数数组8_ {

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag, "正整数数组8_":"UInt8Array" }
    只读 [符号_.转为文字标签]: "正整数数组8_";

}

//@@{ 正整数固定数组8_:Uint8ClampedArray }
接口 正整数固定数组8_ {

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag, "正整数固定数组8_":"Uint8ClampedArray" }
    只读 [符号_.转为文字标签]: "正整数固定数组8_";

}

//@@{ 整数数组16_:Int16Array }
接口 整数数组16_ {

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag, "整数数组16_":"Int16Array" }
    只读 [符号_.转为文字标签]: "整数数组16_";

}

//@@{ 正整数数组16_:Uint16Array }
接口 正整数数组16_ {

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag, "正整数数组16_":"Uint16Array" }
    只读 [符号_.转为文字标签]: "正整数数组16_";

}

//@@{ 整数数组32_:Int32Array }
接口 整数数组32_ {

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag, "整数数组32_":"Int32Array" }
    只读 [符号_.转为文字标签]: "整数数组32_";

}

//@@{ 正整数数组32_:Uint32Array }
接口 正整数数组32_ {

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag, "正整数数组32_":"Uint32Array" }
    只读 [符号_.转为文字标签]: "正整数数组32_";

}

//@@{ 浮点数组32_:Float32Array }
接口 浮点数组32_ {

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag, "浮点数组32_":"Float32Array" }
    只读 [符号_.转为文字标签]: "浮点数组32_";

}

//@@{ 浮点数组64_:Float64Array }
接口 浮点数组64_ {

    //@@{ 符号_:Symbol, 转为文字标签:toStringTag, "浮点数组64_":"Float64Array" }
    只读 [符号_.转为文字标签]: "浮点数组64_";
}