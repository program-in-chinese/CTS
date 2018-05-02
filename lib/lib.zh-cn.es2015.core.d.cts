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

//@@{ 属性键_:PropertyKey }
声明 类型 属性键_ = 文字 | 数字 | 符号;

//@@{ 数组_:Array }
接口 数组_<T> {

    /**
     * Returns the value of the first element in the array where predicate is true, and undefined
     * otherwise.
     * @param 条件 find calls predicate once for each element of the array, in ascending
     * order, until it finds one where predicate returns true. If such an element is found, find
     * immediately returns that element value. Otherwise, find returns undefined.
     * @param 本体参数 If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     */  

    //@@{ 查找:find, 条件:predicate, 值:value, 索引:index, 对象:obj, 本体参数:thisArg }
    查找<S 扩展 T>(条件: (本体: 无值, 值: T, 索引: 数字, 对象: T[]) => 值 作为 S, 本体参数?: 任意): S | 未定;

    //@@{ 查找:find, 条件:predicate, 值:value, 索引:index, 对象:obj, 本体参数:thisArg }
    查找(条件: (值: T, 索引: 数字, 对象: T[]) => 真假, 本体参数?: 任意): T | 未定;

    /**
     * Returns the index of the first element in the array where predicate is true, and -1
     * otherwise.
     * @param 条件 find calls predicate once for each element of the array, in ascending
     * order, until it finds one where predicate returns true. If such an element is found,
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
     * @param 本体参数 If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     */

    //@@{ 查找索引:findIndex, 条件:predicate, 值:value, 索引:index, 对象:obj, 本体参数:thisArg }
    查找索引(条件: (值: T, 索引: 数字, 对象: T[]) => 真假, 本体参数?: 任意): 数字;

    /**
     * Returns the this object after filling the section identified by start and end with value
     * @param 值 value to fill array section with
     * @param 开始 index to start filling the array at. If start is negative, it is treated as
     * length+start where length is the length of the array.
     * @param 结束 index to stop filling the array at. If end is negative, it is treated as
     * length+end.
     */

    //@@{ 填充:fill, 值:value, 开始:start, 结束:end }
    填充(值: T, 开始?: 数字, 结束?: 数字): 本体;

    /**
     * Returns the this object after copying a section of the array identified by start and end
     * to the same array starting at position target
     * @param 目标 If target is negative, it is treated as length+target where length is the
     * length of the array.
     * @param 开始 If start is negative, it is treated as length+start. If end is negative, it
     * is treated as length+end.
     * @param 结束 If not specified, length of the this object is used as its default value.
     */

    //@@{ 复制在内部:copyWithin, 目标:target, 开始:start, 结束:end }
    复制在内部(目标: 数字, 开始: 数字, 结束?: 数字): 本体;

}

//@@{ 数组构造函数_:ArrayConstructor }
接口 数组构造函数_ {

    /**
     * Creates an array from an array-like object.
     * @param 数组等 An array-like object to convert to an array.
     * @param 映射回调 A mapping function to call on every element of the array.
     * @param 本体参数 Value of 'this' used to invoke the mapfn.
     */

    //@@{ 从对象:from, 数组等:arrayLike, 数组等_:ArrayLike, 映射回调:mapfn, 本体参数:thisArg }
    从对象<T, U = T>(数组等: 数组等_<T>, 映射回调?: (v: T, k: 数字) => U, 本体参数?: 任意): U[];

    /**
     * Returns a new array from a set of elements.
     * @param 项目 A set of elements to include in the new array object.
     */

    //@@{ 以元素:of, 项目:items }
    以元素<T>(...项目: T[]): T[];

}

//@@{ 日期构造函数_:DateConstructor }
接口 日期构造函数_ {

    //@@{ 值:value, 日期_:Date }
    新建 (值: 日期_): 日期_;

}

//@@{ 函数_:Function }
接口 函数_ {

    /**
     * Returns the name of the function. Function names are read-only and can not be changed.
     */

    //@@{ 名字:name }
    只读 名字: 文字;

}

//@@{ 数学_:Math }
接口 数学_ {

    /**
     * Returns the number of leading zero bits in the 32-bit binary representation of a number.
     * @param x A numeric expression.
     */

    clz32(x: 数字): 数字;

    /**
     * Returns the result of 32-bit multiplication of two numbers.
     * @param x First number
     * @param y Second number
     */

    imul(x: 数字, y: 数字): 数字;

    /**
     * Returns the sign of the x, indicating whether x is positive, negative or zero.
     * @param x The numeric expression to test
     */

    sign(x: 数字): 数字;

    /**
     * Returns the base 10 logarithm of a number.
     * @param x A numeric expression.
     */

    log10(x: 数字): 数字;

    /**
     * Returns the base 2 logarithm of a number.
     * @param x A numeric expression.
     */

    log2(x: 数字): 数字;

    /**
     * Returns the natural logarithm of 1 + x.
     * @param x A numeric expression.
     */

    log1p(x: 数字): 数字;

    /**
     * Returns the result of (e^x - 1) of x (e raised to the power of x, where e is the base of
     * the natural logarithms).
     * @param x A numeric expression.
     */

    expm1(x: 数字): 数字;

    /**
     * Returns the hyperbolic cosine of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */

    cosh(x: 数字): 数字;

    /**
     * Returns the hyperbolic sine of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */

    sinh(x: 数字): 数字;

    /**
     * Returns the hyperbolic tangent of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */

    tanh(x: 数字): 数字;

    /**
     * Returns the inverse hyperbolic cosine of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */

    acosh(x: 数字): 数字;

    /**
     * Returns the inverse hyperbolic sine of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */

    asinh(x: 数字): 数字;

    /**
     * Returns the inverse hyperbolic tangent of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */

    atanh(x: 数字): 数字;

    /**
     * Returns the square root of the sum of squares of its arguments.
     * @param values Values to compute the square root for.
     *     If no arguments are passed, the result is +0.
     *     If there is only one argument, the result is the absolute value.
     *     If any argument is +Infinity or -Infinity, the result is +Infinity.
     *     If any argument is NaN, the result is NaN.
     *     If all arguments are either +0 or −0, the result is +0.
     */

    hypot(...values: 数字[]): 数字;

    /**
     * Returns the integral part of the a numeric expression, x, removing any fractional digits.
     * If x is already an integer, the result is x.
     * @param x A numeric expression.
     */

    trunc(x: 数字): 数字;

    /**
     * Returns the nearest single precision float representation of a number.
     * @param x A numeric expression.
     */

    fround(x: 数字): 数字;

    /**
     * Returns an implementation-dependent approximation to the cube root of number.
     * @param x A numeric expression.
     */

    cbrt(x: 数字): 数字;

}

//@@{ 数字构造函数_:NumberConstructor }
接口 数字构造函数_ {

    /**
     * The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1
     * that is representable as a Number value, which is approximately:
     * 2.2204460492503130808472633361816 x 10‍−‍16.
     */

    //@@{ __最接近_1_的数字__:EPSILON }
    只读 __最接近_1_的数字__: 数字;

    /**
     * Returns true if passed value is finite.
     * Unlike the global isFinite, Number.isFinite doesn't forcibly convert the parameter to a
     * number. Only finite values of the type number, result in true.
     * @param 数字 A numeric value.
     */

    //@@{ 是有限的:isFinite, 数字:number }
    是有限的(数字: 数字): 真假;

    /**
     * Returns true if the value passed is an integer, false otherwise.
     * @param 数字 A numeric value.
     */

    //@@{ 是整数:isInteger, 数字:number }
    是整数(数字: 数字): 真假;

    /**
     * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a
     * number). Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the parameter
     * to a number. Only values of the type number, that are also NaN, result in true.
     * @param 数字 A numeric value.
     */

    //@@{ 是非数字:isNaN, 数字:number }
    是非数字(数字: 数字): 真假;

    /**
     * Returns true if the value passed is a safe integer.
     * @param 数字 A numeric value.
     */

    //@@{ 是安全整数:isSafeInteger, 数字:number }
    是安全整数(数字: 数字): 真假;

    /**
     * The value of the largest integer n such that n and n + 1 are both exactly representable as
     * a Number value.
     * The value of Number.MAX_SAFE_INTEGER is 9007199254740991 2^53 − 1.
     */

    //@@{ __最大_安全_整数__:MAX_SAFE_INTEGER }
    只读 __最大_安全_整数__: 数字;

    /**
     * The value of the smallest integer n such that n and n − 1 are both exactly representable as
     * a Number value.
     * The value of Number.MIN_SAFE_INTEGER is −9007199254740991 (−(2^53 − 1)).
     */

    //@@{ __最小_安全_整数__:MIN_SAFE_INTEGER }
    只读 __最小_安全_整数__: 数字;

    /**
     * Converts a string to a floating-point number.
     * @param 数字文字 A string that contains a floating-point number.
     */

    //@@{ 编译浮点:parseFloat, 数字文字:string }
    编译浮点(数字文字: 文字): 数字;

    /**
     * Converts A string to an integer.
     * @param 数字文字 A string to convert into a number.
     * @param 基数 A value between 2 and 36 that specifies the base of the number in numString.
     * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
     * All other strings are considered decimal.
     */

    //@@{ 编译整数:parseInt, 数字文字:string, 基数:radix }
    编译整数(数字文字: 文字, 基数?: 数字): 数字;

}

//@@{ 实例_:Object }
接口 实例_ {

    /**
     * Determines whether an object has a property with the specified name.
     * @param v A property name.
     */

    //@@{ 有本身属性:hasOwnProperty, 属性键_:PropertyKey }
    有本身属性(v: 属性键_): 真假;

    /**
     * Determines whether a specified property is enumerable.
     * @param v A property name.
     */

    //@@{ 属性是可枚举的:propertyIsEnumerable, 属性键_:PropertyKey }
    属性是可枚举的(v: 属性键_): 真假;

}

//@@{ 实例构造函数_:ObjectConstructor }
接口 实例构造函数_ {

    /**
     * Copy the values of all of the enumerable own properties from one or more source objects to a
     * target object. Returns the target object.
     * @param 目标 The target object to copy to.
     * @param 源头 The source object from which to copy properties.
     */

    //@@{ 解构合并:assign, 目标:target, 源头:source }
    解构合并<T, U>(目标: T, 源头: U): T & U;

    /**
     * Copy the values of all of the enumerable own properties from one or more source objects to a
     * target object. Returns the target object.
     * @param 目标 The target object to copy to.
     * @param 源头1 The first source object from which to copy properties.
     * @param 源头2 The second source object from which to copy properties.
     */

    //@@{ 目标:target, 源头1:source1, 源头2:source2 }
    解构合并<T, U, V>(目标: T, 源头1: U, 源头2: V): T & U & V;

    /**
     * Copy the values of all of the enumerable own properties from one or more source objects to a
     * target object. Returns the target object.
     * @param 目标 The target object to copy to.
     * @param 源头1 The first source object from which to copy properties.
     * @param 源头2 The second source object from which to copy properties.
     * @param 源头3 The third source object from which to copy properties.
     */

    //@@{ 目标:target, 源头1:source1, 源头2:source2, 源头3:source3 }
    解构合并<T, U, V, W>(目标: T, 源头1: U, 源头2: V, 源头3: W): T & U & V & W;

    /**
     * Copy the values of all of the enumerable own properties from one or more source objects to a
     * target object. Returns the target object.
     * @param 目标 The target object to copy to.
     * @param 源头组 One or more source objects from which to copy properties
     */

    //@@{ 目标:target, 源头组:sources }
    解构合并(目标: 实例, ...源头组: 任意[]): 任意;

    /**
     * Returns an array of all symbol properties found directly on object o.
     * @param o Object to retrieve the symbols from.
     */

    //@@{ 取自身属性符号:getOwnPropertySymbols }
    取自身属性符号(o: 任意): 符号[];

    /**
     * Returns true if the values are the same value, false otherwise.
     * @param 值1 The first value.
     * @param 值2 The second value.
     */

    //@@{ 是:is, 值1:value1, 值2:value2 }
    是(值1: 任意, 值2: 任意): 真假;

    /**
     * Sets the prototype of a specified object o to  object proto or null. Returns the object o.
     * @param o The object to change its prototype.
     * @param 原型 The value of the new prototype or null.
     */

    //@@{ 置原型位于:setPrototypeOf, 原型:proto }
    置原型位于(o: 任意, 原型: 实例 | 空值): 任意;

    /**
     * Gets the own property descriptor of the specified object.
     * An own property descriptor is one that is defined directly on the object and is not
     * inherited from the object's prototype.
     * @param o Object that contains the property.
     * @param p Name of the property.
     */

    //@@{ 取本身属性描述符:getOwnPropertyDescriptor, 属性键:propertyKey, 属性键_:PropertyKey, 属性描述符_:PropertyDescriptor }
    取本身属性描述符(o: 任意, 属性键: 属性键_): 属性描述符_ | 未定;

    /**
     * Adds a property to an object, or modifies attributes of an existing property.
     * @param o Object on which to add or modify the property. This can be a native JavaScript
     * object (that is, a user-defined object or a built in object) or a DOM object.
     * @param p The property name.
     * @param 特性组 Descriptor for the property. It can be for a data property or an accessor
     *  property.
     */

    //@@{ 定义属性:defineProperty, 属性键:propertyKey, 属性键_:PropertyKey, 特性组:attributes, 属性描述符_:PropertyDescriptor }
    定义属性(o: 任意, 属性键: 属性键_, 特性组: 属性描述符_): 任意;

}

//@@{ 只读数组_:ReadonlyArray }
接口 只读数组_<T> {

    /**
     * Returns the value of the first element in the array where predicate is true, and undefined
     * otherwise.
     * @param 条件 find calls predicate once for each element of the array, in ascending
     * order, until it finds one where predicate returns true. If such an element is found, find
     * immediately returns that element value. Otherwise, find returns undefined.
     * @param 本体参数 If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     */

    //@@{ 查找:find, 条件:predicate, 值:value, 索引:index, 对象:obj, 只读数组_:ReadonlyArray, 本体参数:thisArg }
    查找<S 扩展 T>(条件: (this: 无值, 值: T, 索引: 数字, 对象: 只读数组_<T>) => 值 作为 S, 本体参数?: 任意): S | 未定;

    //@@{ 查找:find, 条件:predicate, 值:value, 索引:index, 对象:obj, 只读数组_:ReadonlyArray, 本体参数:thisArg }
    查找(条件: (值: T, 索引: 数字, 对象: 只读数组_<T>) => 真假, 本体参数?: 任意): T | 未定;

    /**
     * Returns the index of the first element in the array where predicate is true, and -1
     * otherwise.
     * @param 条件 find calls predicate once for each element of the array, in ascending
     * order, until it finds one where predicate returns true. If such an element is found,
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
     * @param 本体参数 If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     */

    //@@{ 查找索引:findIndex, 条件:predicate, 值:value, 索引:index, 对象:obj, 只读数组_:ReadonlyArray, 本体参数:thisArg }
    查找索引(条件: (值: T, 索引: 数字, 对象: 只读数组_<T>) => 真假, 本体参数?: 任意): 数字;

}

//@@{ 正则_:RegExp }
接口 正则_ {

    /**
     * Returns a string indicating the flags of the regular expression in question. This field is read-only.
     * The characters in this string are sequenced and concatenated in the following order:
     *
     *    - "g" for global
     *    - "i" for ignoreCase
     *    - "m" for multiline
     *    - "u" for unicode
     *    - "y" for sticky
     *
     * If no flags are set, the value is the empty string.
     */

    //@@{ 标志:flags }
    只读 标志: 文字;

    /**
     * Returns a Boolean value indicating the state of the sticky flag (y) used with a regular
     * expression. Default is false. Read-only.
     */

    //@@{ 粘性的:sticky }
    只读 粘性的: 真假;

    /**
     * Returns a Boolean value indicating the state of the Unicode flag (u) used with a regular
     * expression. Default is false. Read-only.
     */

    //@@{ 统一码:unicode }
    只读 统一码: 真假;

}

//@@{ 正则构造函数_:RegExpConstructor }
接口 正则构造函数_ {

    //@@{ 模式:pattern, 正则_:RegExp, 标志:flags }
    新建 (模式: 正则_, 标志?: 文字): 正则_;

    //@@{ 模式:pattern, 正则_:RegExp, 标志:flags }
    (模式: 正则_, 标志?: 文字): 正则_;

}

//@@{ 文字_:String }
接口 文字_ {

    /**
     * Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
     * value of the UTF-16 encoded code point starting at the string element at position pos in
     * the String resulting from converting this object to a String.
     * If there is no element at that position, the result is undefined.
     * If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.
     */

    //@@{ 代码点在:codePointAt, 前:pos }
    代码点在(前: 数字): 数字 | 未定;

    /**
     * Returns true if searchString appears as a substring of the result of converting this
     * object to a String, at one or more positions that are
     * greater than or equal to position; otherwise, returns false.
     * @param 搜索文字 search string
     * @param 位置 If position is undefined, 0 is assumed, so as to search all of the String.
     */

    //@@{ 包含:includes, 搜索文字:searchString, 位置:position }
    包含(搜索文字: 文字, 位置?: 数字): 真假;

    /**
     * Returns true if the sequence of elements of searchString converted to a String is the
     * same as the corresponding elements of this object (converted to a String) starting at
     * endPosition – length(this). Otherwise returns false.
     */

    //@@{ 结尾有:endsWith, 搜索文字:searchString, 结束位置:endPosition }
    结尾有(搜索文字: 文字, 结束位置?: 数字): 真假;

    /**
     * Returns the String value result of normalizing the string into the normalization form
     * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
     * @param 形式 Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
     * is "NFC"
     */

    //@@{ 正常化:normalize, 形式:form }
    正常化(形式: "NFC" | "NFD" | "NFKC" | "NFKD"): 文字;

    /**
     * Returns the String value result of normalizing the string into the normalization form
     * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
     * @param 形式 Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
     * is "NFC"
     */

    //@@{ 形式:form }
    正常化(形式?: 文字): 文字;

    /**
     * Returns a String value that is made from count copies appended together. If count is 0,
     * T is the empty String is returned.
     * @param 数量 number of copies to append
     */

    //@@{ 重复:repeat, 数量:count }
    重复(数量: 数字): 文字;

    /**
     * Returns true if the sequence of elements of searchString converted to a String is the
     * same as the corresponding elements of this object (converted to a String) starting at
     * position. Otherwise returns false.
     */

    //@@{ 开始有:startsWith, 搜索文字:searchString, 位置:position }
    开始有(搜索文字: 文字, 位置?: 数字): 真假;

    /**
     * Returns an <a> HTML anchor element and sets the name attribute to the text value
     * @param name
     */

    anchor(name: 文字): 文字;

    /** Returns a <big> HTML element */

    big(): 文字;

    /** Returns a <blink> HTML element */

    blink(): 文字;

    /** Returns a <b> HTML element */

    bold(): 文字;

    /** Returns a <tt> HTML element */

    fixed(): 文字;

    /** Returns a <font> HTML element and sets the color attribute value */

    fontcolor(color: 文字): 文字;

    /** Returns a <font> HTML element and sets the size attribute value */

    fontsize(size: 数字): 文字;

    /** Returns a <font> HTML element and sets the size attribute value */

    fontsize(size: 文字): 文字;

    /** Returns an <i> HTML element */

    italics(): 文字;

    /** Returns an <a> HTML element and sets the href attribute value */

    link(url: 文字): 文字;

    /** Returns a <small> HTML element */

    small(): 文字;

    /** Returns a <strike> HTML element */

    strike(): 文字;

    /** Returns a <sub> HTML element */

    sub(): 文字;

    /** Returns a <sup> HTML element */

    sup(): 文字;

}

//@@{ 文字构造函数_:StringConstructor }
接口 文字构造函数_ {

    /**
     * Return the String value whose elements are, in order, the elements in the List elements.
     * If length is 0, the empty string is returned.
     */

    //@@{ 从代码点位:fromCodePoint, 代码点:codePoints }
    从代码点位(...代码点: 数字[]): 文字;

    /**
     * String.raw is intended for use as a tag function of a Tagged Template String. When called
     * as such the first argument will be a well formed template call site object and the rest
     * parameter will contain the substitution values.
     * @param 模板 A well-formed template string call site representation.
     * @param 替换 A set of substitution values.
     */

    //@@{ 原料:raw, 模板:template, 模板文字数组_:TemplateStringsArray, 替换:substitutions }
    原料(模板: 模板文字数组_, ...替换: 任意[]): 文字;
}
