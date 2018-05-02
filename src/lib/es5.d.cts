/////////////////////////////
/// ECMAScript APIs
/////////////////////////////

//@@{ 非数字:NaN }
声明 常量 非数字: 数字;

//@@{ 无穷大:Infinity }
声明 常量 无穷大: 数字;

/**
  * Evaluates JavaScript code and executes it.
  * @param 脚本文本 A String value that contains valid JavaScript code.
  */

//@@{ 执行:eval, 脚本文本:x }
声明 函数 执行(脚本文本: 文字): 任意;

/**
  * Converts A string to an integer.
  * @param 数字文本 A string to convert into a number.
  * @param 指数 A value between 2 and 36 that specifies the base of the number in numString.
  * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
  * All other strings are considered decimal.
  */

//@@{ 编译整数:parseInt, 数字文本:s, 指数:radix }
声明 函数 编译整数(数字文本: 文字, 指数?: 数字): 数字;

/**
  * Converts a string to a floating-point number.
  * @param 文字 A string that contains a floating-point number.
  */

//@@{ 编译浮点:parseFloat, 文字:string }
声明 函数 编译浮点(文字: 文字): 数字;

/**
  * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
  * @param 数字 A numeric value.
  */

//@@{ 是非数字:isNaN, 数字:number }
声明 函数 是非数字(数字: 数字): 真假;

/**
  * Determines whether a supplied number is finite.
  * @param 数字 Any numeric value.
  */

//@@{ 是有限的:isFinite, 数字:number }
声明 函数 是有限的(数字: 数字): 真假;

/**
  * Gets the unencoded version of an encoded Uniform Resource Identifier (URI).
  * @param 编码URI A value representing an encoded URI.
  */

//@@{ 解码URI:decodeURI, 编码URI:encodedURI }
声明 函数 解码URI(编码URI: 文字): 文字;

/**
  * Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).
  * @param 编码URI组件 A value representing an encoded URI component.
  */

//@@{ 解码URI组件:decodeURIComponent, 编码URI组件:encodedURIComponent }
声明 函数 解码URI组件(编码URI组件: 文字): 文字;

/**
  * Encodes a text string as a valid Uniform Resource Identifier (URI)
  * @param uri A value representing an encoded URI.
  */

//@@{ 编码URI:encodeURI }
声明 函数 编码URI(uri: 文字): 文字;

/**
  * Encodes a text string as a valid component of a Uniform Resource Identifier (URI).
  * @param uri组件 A value representing an encoded URI component.
  */

//@@{ 编码URI组件:encodeURIComponent, uri组件:uriComponent }
声明 函数 编码URI组件(uri组件: 文字): 文字;

//@@{ 属性描述符_:PropertyDescriptor }
接口 属性描述符_ {

  //@@{ 可配置的:configurable }
  可配置的?: 真假;

  //@@{ 可列举的:enumerable }
  可列举的?: 真假;

  //@@{ 值:value }
  值?: 任意;

  //@@{ 可写的:writable }
  可写的?: 真假;

  //@@{ 获取:get }
  获取?(): 任意;

  //@@{ 设置:set }
  设置?(v: 任意): 无值;

}

//@@{ 属性描述符映射_:PropertyDescriptorMap }
接口 属性描述符映射_ {

  //@@{ 索引文本:s, 属性描述符_:PropertyDescriptor }
  [索引文本: 文字]: 属性描述符_;

}

//@@{ 实例_:Object }
接口 实例_ {

  /** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */

  //@@{ 构造:constructor, 函数_:Function }
  构造: 函数_;

  /** Returns a string representation of an object. */

  //@@{ 转为文字:toString }
  转为文字(): 文字;

  /** Returns a date converted to a string using the current locale. */

  //@@{ 转为本地文字:toLocaleString }
  转为本地文字(): 文字;

  /** Returns the primitive value of the specified object. */

  //@@{ 值位于:valueOf, 实例_:Object }
  值位于(): 实例_;

  /**
    * Determines whether an object has a property with the specified name.
    * @param 属性名 A property name.
    */

  //@@{ 有本身属性:hasOwnProperty, 属性名:v }
  有本身属性(属性名: 文字): 真假;

  /**
    * Determines whether an object exists in another object's prototype chain.
    * @param 对象 Another object whose prototype chain is to be checked.
    */

  //@@{ 是原型位于:isPrototypeOf, 对象:v, 实例_:Object }
  是原型位于(对象: 实例_): 真假;

  /**
    * Determines whether a specified property is enumerable.
    * @param 属性名 A property name.
    */

  //@@{ 属性是可枚举的:propertyIsEnumerable, 属性名:v }
  属性是可枚举的(属性名: 文字): 真假;

}

//@@{ 实例构造函数_:ObjectConstructor }
接口 实例构造函数_ {

  //@@{ 值:value, 实例_:Object }
  新建(值?: 任意): 实例_;

  (): 任意;

  //@@{ 值:value }
  (值: 任意): 任意;

  /** A reference to the prototype for a class of objects. */

  //@@{ 原型:prototype, 实例_:Object }
  只读 原型: 实例_;

  /**
    * Returns the prototype of an object.
    * @param 对象 The object that references the prototype.
    */

  //@@{ 取原型位于:getPrototypeOf, 对象:o }
  取原型位于(对象: 任意): 任意;

  /**
    * Gets the own property descriptor of the specified object.
    * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
    * @param 对象 Object that contains the property.
    * @param 属性名 Name of the property.
  */

  //@@{ 取本身属性描述符:getOwnPropertyDescriptor, 对象:o, 属性名:p, 属性描述符_:PropertyDescriptor }
  取本身属性描述符(对象: 任意, 属性名: 文字): 属性描述符_ | 未定;

  /**
    * Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
    * on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
    * @param 对象 Object that contains the own properties.
    */

  //@@{ 取自身属性名组:getOwnPropertyNames, 对象:o }
  取自身属性名组(对象: 任意): 文字[];

  /**
    * Creates an object that has the specified prototype or that has null prototype.
    * @param 对象 Object to use as a prototype. May be null.
    */

  //@@{ 创建:create, 对象:o }
  创建(对象: 实例 | 空值): 任意;

  /**
    * Creates an object that has the specified prototype, and that optionally contains specified properties.
    * @param 对象 Object to use as a prototype. May be null
    * @param 属性组 JavaScript object that contains one or more property descriptors.
    */

  //@@{ 对象:o, 属性组:properties, 属性描述符映射_:PropertyDescriptorMap, 本体类型_:ThisType }
  创建(对象: 实例 | 空值, 属性组: 属性描述符映射_ & 本体类型_<任意>): 任意;

  /**
    * Adds a property to an object, or modifies attributes of an existing property.
    * @param 对象 Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
    * @param 属性名 The property name.
    * @param 特性组 Descriptor for the property. It can be for a data property or an accessor property.
    */

  //@@{ 定义属性:defineProperty, 对象:o, 属性名:p, 特性组:attributes, 属性描述符_:PropertyDescriptor, 本体类型_:ThisType }
  定义属性(对象: 任意, 属性名: 文字, 特性组: 属性描述符_ & 本体类型_<任意>): 任意;

  /**
    * Adds one or more properties to an object, and/or modifies attributes of existing properties.
    * @param 对象 Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
    * @param 属性组 JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
    */

  //@@{ 定义属性组:defineProperties, 对象:o, 属性组:properties, 属性描述符映射_:PropertyDescriptorMap, 本体类型_:ThisType }
  定义属性组(对象: 任意, 属性组: 属性描述符映射_ & 本体类型_<任意>): 任意;

  /**
    * Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
    * @param 对象 Object on which to lock the attributes.
    */

  //@@{ 密封:seal, 对象:o }
  密封<T>(对象: T): T;

  /**
    * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
    * @param o Object on which to lock the attributes.
    */

  //@@{ 冻结:freeze, 组:a, 只读数组_:ReadonlyArray }
  冻结<T>(组: T[]): 只读数组_<T>;

  /**
    * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
    * @param o Object on which to lock the attributes.
    */

  //@@{ 函数_:Function, 函:f }
  冻结<T 扩展 函数_>(函: T): T;

  /**
    * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
    * @param 对象 Object on which to lock the attributes.
    */

  //@@{ 对象:o, 只读_:Readonly }
  冻结<T>(对象: T): 只读_<T>;

  /**
    * Prevents the addition of new properties to an object.
    * @param 对象 Object to make non-extensible.
    */

  //@@{ 防止扩展:preventExtensions, 对象:o }
  防止扩展<T>(对象: T): T;

  /**
    * Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.
    * @param 对象 Object to test.
    */

  //@@{ 是密封的:isSealed, 对象:o }
  是密封的(对象: 任意): 真假;

  /**
    * Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.
    * @param 对象 Object to test.
    */

  //@@{ 是冰冻的:isFrozen, 对象:o }
  是冰冻的(对象: 任意): 真假;

  /**
    * Returns a value that indicates whether new properties can be added to an object.
    * @param 对象 Object to test.
    */

  //@@{ 是可扩展的:isExtensible, 对象:o }
  是可扩展的(对象: 任意): 真假;

  /**
    * Returns the names of the enumerable properties and methods of an object.
    * @param 对象 Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
    */

  //@@{ 键组:keys, 对象:o }
  键组(对象: {}): 文字[];

}
/**
  * Provides functionality common to all JavaScript objects.
  */

//@@{ 实例构造函数_:ObjectConstructor }
声明 常量 实例_: 实例构造函数_;

/**
  * Creates a new function.
  */

//@@{ 函数_:Function }
接口 函数_ {

  /**
    * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
    * @param 本体参数 The object to be used as the this object.
    * @param 参数数组 A set of arguments to be passed to the function.
    */

  //@@{ 应用:apply, 函数_:Function, 本体参数:thisArg, 参数数组:argArray }
  应用(本体: 函数_, 本体参数: 任意, 参数数组?: 任意): 任意;

  /**
    * Calls a method of an object, substituting another object for the current object.
    * @param 本体参数 The object to be used as the current object.
    * @param 参数数组 A list of arguments to be passed to the method.
    */

  //@@{ 调用:call, 函数_:Function, 本体参数:thisArg, 参数数组:argArray }
  调用(本体: 函数_, 本体参数: 任意, ...参数数组: 任意[]): 任意;

  /**
    * For a given function, creates a bound function that has the same body as the original function.
    * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
    * @param 本体参数 An object to which the this keyword can refer inside the new function.
    * @param 参数数组 A list of arguments to be passed to the new function.
    */

  //@@{ 绑定:bind, 函数_:Function, 本体参数:thisArg, 参数数组:argArray }
  绑定(本体: 函数_, 本体参数: 任意, ...参数数组: 任意[]): 任意;

  /** Returns a string representation of a function. */

  //@@{ 转为文字:toString }
  转为文字(): 文字;

  //@@{ 原型:prototype }
  原型: 任意;

  //@@{ 长度:length }
  只读 长度: 数字;

  // Non-standard extensions

  //@@{ 增强参数:arguments }
  增强参数: 任意;

  //@@{ 调用者:caller, 函数_:Function }
  调用者: 函数_;

}

//@@{ 函数构造函数_:FunctionConstructor }
接口 函数构造函数_ {

  /**
    * Creates a new function.
    * @param 参数集 A list of arguments the function accepts.
    */

  //@@{ 参数集:args, 函数_:Function }
  新建(...参数集: 文字[]): 函数_;

  //@@{ 参数集:args, 函数_:Function }
  (...参数集: 文字[]): 函数_;

  //@@{ 原型:prototype, 函数_:Function }
  只读 原型: 函数_;

}

//@@{ 函数构造函数_:FunctionConstructor }
声明 常量 函数_: 函数构造函数_;

//@@{ 增强参数接口_:IArguments }
接口 增强参数接口_ {

  //@@{ 索引:index }
  [索引: 数字]: 任意;

  //@@{ 长度:length }
  长度: 数字;

  //@@{ 被调用者:callee, 函数_:Function }
  被调用者: 函数_;

}

//@@{ 文字_:String }
接口 文字_ {

  /** Returns a string representation of a string. */

  //@@{ 转为文字:toString }
  转为文字(): 文字;

  /**
    * Returns the character at the specified index.
    * @param 前 The zero-based index of the desired character.
    */

  //@@{ 字符在:charAt, 前:pos }
  字符在(前: 数字): 文字;

  /**
    * Returns the Unicode value of the character at the specified location.
    * @param 索引 The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
    */

  //@@{ 字符代码在:charCodeAt, 索引:index }
  字符代码在(索引: 数字): 数字;

  /**
    * Returns a string that contains the concatenation of two or more strings.
    * @param 文字组 The strings to append to the end of the string.
    */

  //@@{ 结合:concat, 文字组:strings }
  结合(...文字组: 文字[]): 文字;

  /**
    * Returns the position of the first occurrence of a substring.
    * @param 搜索文字 The substring to search for in the string
    * @param 位置 The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
    */

  //@@{ 索引位于:indexOf, 搜索文字:searchString, 位置:position }
  索引位于(搜索文字: 文字, 位置?: 数字): 数字;

  /**
    * Returns the last occurrence of a substring in the string.
    * @param 搜索文字 The substring to search for.
    * @param 位置 The index at which to begin searching. If omitted, the search begins at the end of the string.
    */

  //@@{ 最后索引位于:lastIndexOf, 搜索文字:searchString, 位置:position }
  最后索引位于(搜索文字: 文字, 位置?: 数字): 数字;

  /**
    * Determines whether two strings are equivalent in the current locale.
    * @param 那里 String to compare to target string
    */

  //@@{ 本地比较:localeCompare, 那里:that }
  本地比较(那里: 文字): 数字;

  /**
    * Matches a string with a regular expression, and returns an array containing the results of that search.
    * @param 正则表达式 A variable name or string literal containing the regular expression pattern and flags.
    */

  //@@{ 匹配:match, 正则表达式:regexp, 正则_:RegExp, 正则匹配数组_:RegExpMatchArray }
  匹配(正则表达式: 文字 | 正则_): 正则匹配数组_ | 空值;

  /**
    * Replaces text in a string, using a regular expression or search string.
    * @param 搜索值 A string to search for.
    * @param 替换值 A string containing the text to replace for every successful match of searchValue in this string.
    */

  //@@{ 替换:replace, 搜索值:searchValue, 正则_:RegExp, 替换值:replaceValue }
  替换(搜索值: 文字 | 正则_, 替换值: 文字): 文字;

  /**
    * Replaces text in a string, using a regular expression or search string.
    * @param 搜索值 A string to search for.
    * @param 替代者 A function that returns the replacement text.
    */

  //@@{ 搜索值:searchValue, 正则_:RegExp, 替代者:replacer, 子文字:substring, 参数集:args }
  替换(搜索值: 文字 | 正则_, 替代者: (子文字: 文字, ...参数集: 任意[]) => 文字): 文字;

  /**
    * Finds the first substring match in a regular expression search.
    * @param 正则表达式 The regular expression pattern and applicable flags.
    */

  //@@{ 搜索:search, 正则表达式:regexp, 正则_:RegExp }
  搜索(正则表达式: 文字 | 正则_): 数字;

  /**
    * Returns a section of a string.
    * @param 开始 The index to the beginning of the specified portion of stringObj.
    * @param 结束 The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
    * If this value is not specified, the substring continues to the end of stringObj.
    */

  //@@{ 分裂:slice, 开始:start, 结束:end }
  分裂(开始?: 数字, 结束?: 数字): 文字;

  /**
    * Split a string into substrings using the specified separator and return them as an array.
    * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
    * @param limit A value used to limit the number of elements returned in the array.
    */

  //@@{ 分割:split, 分割符:separator, 正则_:RegExp, 限制:limit }
  分割(分割符: 文字 | 正则_, 限制?: 数字): 文字[];

  /**
    * Returns the substring at the specified location within a String object.
    * @param 开始 The zero-based index number indicating the beginning of the substring.
    * @param 结束 Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
    * If end is omitted, the characters from start through the end of the original string are returned.
    */

  //@@{ 子文字:substring, 开始:start, 结束:end }
  子文字(开始: 数字, 结束?: 数字): 文字;

  /** Converts all the alphabetic characters in a string to lowercase. */

  //@@{ 转为小写:toLowerCase }
  转为小写(): 文字;

  /** Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. */

  //@@{ 转为本地小写:toLocaleLowerCase }
  转为本地小写(): 文字;

  /** Converts all the alphabetic characters in a string to uppercase. */

  //@@{ 转为大写:toUpperCase }
  转为大写(): 文字;

  /** Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. */

  //@@{ 转为本地大写:toLocaleUpperCase }
  转为本地大写(): 文字;

  /** Removes the leading and trailing white space and line terminator characters from a string. */

  //@@{ 修剪:trim }
  修剪(): 文字;

  /** Returns the length of a String object. */

  //@@{ 长度:length }
  只读 长度: 数字;

  // IE extensions
  /**
    * Gets a substring beginning at the specified location and having the specified length.
    * @param 起点 The starting position of the desired substring. The index of the first character in the string is zero.
    * @param 长度 The number of characters to include in the returned substring.
    */

  //@@{ 子文本:substr, 起点:from, 长度:length }
  子文本(起点: 数字, 长度?: 数字): 文字;

  /** Returns the primitive value of the specified object. */

  //@@{ 原始值位于:valueOf }
  原始值位于(): 文字;

  //@@{ 索引:index }
  只读 [索引: 数字]: 文字;

}

//@@{ 文字构造函数_:StringConstructor }
接口 文字构造函数_ {

  //@@{ 值:value, 文字_:String }
  新建(值?: 任意): 文字_;

  //@@{ 值:value }
  (值?: 任意): 文字;

  //@@{ 原型:prototype, 文字_:String }
  只读 原型: 文字_;

  //@@{ 从字符代码:fromCharCode, 代码组:codes }
  从字符代码(...代码组: 数字[]): 文字;

}
/**
  * Allows manipulation and formatting of text strings and determination and location of substrings within strings.
  */

//@@{ 文字构造函数_:StringConstructor }
声明 常量 文字_: 文字构造函数_;

//@@{ 真假_:Boolean }
接口 真假_ {

  /** Returns the primitive value of the specified object. */

  //@@{ 原始值位于:valueOf }
  原始值位于(): 真假;

}

//@@{ 真假构造函数_:BooleanConstructor }
接口 真假构造函数_ {

  //@@{ 值:value, 真假_:Boolean }
  新建(值?: 任意): 真假_;

  //@@{ 值:value }
  (值?: 任意): 真假;

  //@@{ 原型:prototype, 真假_:Boolean }
  只读 原型: 真假_;

}

//@@{ 真假构造函数_:BooleanConstructor }
声明 常量 真假_: 真假构造函数_;

//@@{ 数字_:Number }
接口 数字_ {

  /**
    * Returns a string representation of an object.
    * @param 基数 Specifies a radix for converting numeric values to strings. This value is only used for numbers.
    */

  //@@{ 转为文字:toString, 基数:radix }
  转为文字(基数?: 数字): 文字;

  /**
    * Returns a string representing a number in fixed-point notation.
    * @param 部分数字 Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
    */

  //@@{ 转为四舍五入:toFixed, 部分数字:fractionDigits }
  转为四舍五入(部分数字?: 数字): 文字;

  /**
    * Returns a string containing a number represented in exponential notation.
    * @param 部分数字 Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
    */

  //@@{ 转为指数:toExponential, 部分数字:fractionDigits }
  转为指数(部分数字?: 数字): 文字;

  /**
    * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
    * @param 精度 Number of significant digits. Must be in the range 1 - 21, inclusive.
    */

  //@@{ 转为精度:toPrecision, 精度:precision }
  转为精度(精度?: 数字): 文字;

  /** Returns the primitive value of the specified object. */

  //@@{ 原始值位于:valueOf }
  原始值位于(): 数字;

}

//@@{ 数字构造函数_:NumberConstructor }
接口 数字构造函数_ {

  //@@{ 值:value, 数字_:Number }
  新建(值?: 任意): 数字_;

  //@@{ 值:value }
  (值?: 任意): 数字;

  //@@{ 原型:prototype, 数字_:Number }
  只读 原型: 数字_;

  /** The largest number that can be represented in JavaScript. Equal to approximately 1.79E+308. */

  //@@{ __最大_有效值__:MAX_VALUE }
  只读 __最大_有效值__: 数字;

  /** The closest number to zero that can be represented in JavaScript. Equal to approximately 5.00E-324. */

  //@@{ __最小_有效值__:MIN_VALUE }
  只读 __最小_有效值__: 数字;

  /**
    * A value that is not a number.
    * In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function.
    */

  //@@{ __非数字__:NaN }
  只读 __非数字__: 数字;

  /**
    * A value that is less than the largest negative number that can be represented in JavaScript.
    * JavaScript displays NEGATIVE_INFINITY values as -infinity.
    */

  //@@{ __负_无穷大__:NEGATIVE_INFINITY }
  只读 __负_无穷大__: 数字;

  /**
    * A value greater than the largest number that can be represented in JavaScript.
    * JavaScript displays POSITIVE_INFINITY values as infinity.
    */

  //@@{ __正_无穷大__:POSITIVE_INFINITY }
  只读 __正_无穷大__: 数字;

}
/** An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers. */

//@@{ 数字构造函数_:NumberConstructor }
声明 常量 数字_: 数字构造函数_;

//@@{ 模板文字数组_:TemplateStringsArray, 只读数组_:ReadonlyArray }
接口 模板文字数组_ 扩展 只读数组_<文字> {

  //@@{ 原料:raw, 只读数组_:ReadonlyArray }
  只读 原料: 只读数组_<文字>;

}

//@@{ 数学_:Math }
接口 数学_ {

  /** The mathematical constant e. This is Euler's number, the base of natural logarithms. */

  只读 E: 数字;

  /** The natural logarithm of 10. */

  只读 LN10: 数字;

  /** The natural logarithm of 2. */

  只读 LN2: 数字;

  /** The base-2 logarithm of e. */

  只读 LOG2E: 数字;

  /** The base-10 logarithm of e. */

  只读 LOG10E: 数字;

  /** Pi. This is the ratio of the circumference of a circle to its diameter. */

  只读 PI: 数字;

  /** The square root of 0.5, or, equivalently, one divided by the square root of 2. */

  只读 SQRT1_2: 数字;

  /** The square root of 2. */

  只读 SQRT2: 数字;

  /**
    * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
    * For example, the absolute value of -5 is the same as the absolute value of 5.
    * @param x A numeric expression for which the absolute value is needed.
    */

  abs(x: 数字): 数字;

  /**
    * Returns the arc cosine (or inverse cosine) of a number.
    * @param x A numeric expression.
    */

  acos(x: 数字): 数字;

  /**
    * Returns the arcsine of a number.
    * @param x A numeric expression.
    */

  asin(x: 数字): 数字;

  /**
    * Returns the arctangent of a number.
    * @param x A numeric expression for which the arctangent is needed.
    */

  atan(x: 数字): 数字;

  /**
    * Returns the angle (in radians) from the X axis to a point.
    * @param y A numeric expression representing the cartesian y-coordinate.
    * @param x A numeric expression representing the cartesian x-coordinate.
    */

  atan2(y: 数字, x: 数字): 数字;

  /**
    * Returns the smallest number greater than or equal to its numeric argument.
    * @param x A numeric expression.
    */

  ceil(x: 数字): 数字;

  /**
    * Returns the cosine of a number.
    * @param x A numeric expression that contains an angle measured in radians.
    */

  cos(x: 数字): 数字;

  /**
    * Returns e (the base of natural logarithms) raised to a power.
    * @param x A numeric expression representing the power of e.
    */

  exp(x: 数字): 数字;

  /**
    * Returns the greatest number less than or equal to its numeric argument.
    * @param x A numeric expression.
    */

  floor(x: 数字): 数字;

  /**
    * Returns the natural logarithm (base e) of a number.
    * @param x A numeric expression.
    */

  log(x: 数字): 数字;

  /**
    * Returns the larger of a set of supplied numeric expressions.
    * @param values Numeric expressions to be evaluated.
    */

  max(...values: 数字[]): 数字;

  /**
    * Returns the smaller of a set of supplied numeric expressions.
    * @param values Numeric expressions to be evaluated.
    */

  min(...values: 数字[]): 数字;

  /**
    * Returns the value of a base expression taken to a specified power.
    * @param x The base value of the expression.
    * @param y The exponent value of the expression.
    */

  pow(x: 数字, y: 数字): 数字;

  /** Returns a pseudorandom number between 0 and 1. */

  random(): 数字;

  /**
    * Returns a supplied numeric expression rounded to the nearest number.
    * @param x The value to be rounded to the nearest number.
    */

  round(x: 数字): 数字;

  /**
    * Returns the sine of a number.
    * @param x A numeric expression that contains an angle measured in radians.
    */

  sin(x: 数字): 数字;

  /**
    * Returns the square root of a number.
    * @param x A numeric expression.
    */

  sqrt(x: 数字): 数字;

  /**
    * Returns the tangent of a number.
    * @param x A numeric expression that contains an angle measured in radians.
    */

  tan(x: 数字): 数字;

}
/** An intrinsic object that provides basic mathematics functionality and constants. */

//@@{ 数学_:Math }
声明 常量 数学_: 数学_;

/** Enables basic storage and retrieval of dates and times. */

//@@{ 日期_:Date }
接口 日期_ {

  /** Returns a string representation of a date. The format of the string depends on the locale. */

  //@@{ 转为文字:toString }
  转为文字(): 文字;

  /** Returns a date as a string value. */

  //@@{ 转为日期文字:toDateString }
  转为日期文字(): 文字;

  /** Returns a time as a string value. */

  //@@{ 转为时间文字:toTimeString }
  转为时间文字(): 文字;

  /** Returns a value as a string value appropriate to the host environment's current locale. */

  //@@{ 转为本地文字:toLocaleString }
  转为本地文字(): 文字;

  /** Returns a date as a string value appropriate to the host environment's current locale. */

  //@@{ 转为本地日期文字:toLocaleDateString }
  转为本地日期文字(): 文字;

  /** Returns a time as a string value appropriate to the host environment's current locale. */

  //@@{ 转为本地时间文字:toLocaleTimeString }
  转为本地时间文字(): 文字;

  /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */

  //@@{ 原始值存在:valueOf }
  原始值存在(): 数字;

  /** Gets the time value in milliseconds. */

  //@@{ 取时间:getTime }
  取时间(): 数字;

  /** Gets the year, using local time. */

  //@@{ 取全年:getFullYear }
  取全年(): 数字;

  /** Gets the year using Universal Coordinated Time (UTC). */

  //@@{ 取UTC全年:getUTCFullYear }
  取UTC全年(): 数字;

  /** Gets the month, using local time. */

  //@@{ 取月:getMonth }
  取月(): 数字;

  /** Gets the month of a Date object using Universal Coordinated Time (UTC). */

  //@@{ 取UTC月:getUTCMonth }
  取UTC月(): 数字;

  /** Gets the day-of-the-month, using local time. */

  //@@{ 取日期:getDate }
  取日期(): 数字;

  /** Gets the day-of-the-month, using Universal Coordinated Time (UTC). */

  //@@{ 取UTC日期:getUTCDate }
  取UTC日期(): 数字;

  /** Gets the day of the week, using local time. */

  //@@{ 取天:getDay }
  取天(): 数字;

  /** Gets the day of the week using Universal Coordinated Time (UTC). */

  //@@{ 取UTC天:getUTCDay }
  取UTC天(): 数字;

  /** Gets the hours in a date, using local time. */

  //@@{ 取小时:getHours }
  取小时(): 数字;

  /** Gets the hours value in a Date object using Universal Coordinated Time (UTC). */

  //@@{ 取UTC小时:getUTCHours }
  取UTC小时(): 数字;

  /** Gets the minutes of a Date object, using local time. */

  //@@{ 取分钟:getMinutes }
  取分钟(): 数字;

  /** Gets the minutes of a Date object using Universal Coordinated Time (UTC). */

  //@@{ 取UTC分钟:getUTCMinutes }
  取UTC分钟(): 数字;

  /** Gets the seconds of a Date object, using local time. */

  //@@{ 取秒钟:getSeconds }
  取秒钟(): 数字;

  /** Gets the seconds of a Date object using Universal Coordinated Time (UTC). */

  //@@{ 取UTC秒钟:getUTCSeconds }
  取UTC秒钟(): 数字;

  /** Gets the milliseconds of a Date, using local time. */

  //@@{ 取毫秒:getMilliseconds }
  取毫秒(): 数字;

  /** Gets the milliseconds of a Date object using Universal Coordinated Time (UTC). */

  //@@{ 取UTC毫秒:getUTCMilliseconds }
  取UTC毫秒(): 数字;

  /** Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC). */

  //@@{ 取时区偏移:getTimezoneOffset }
  取时区偏移(): 数字;

  /**
    * Sets the date and time value in the Date object.
    * @param 时间 A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.
    */

  //@@{ 置时间:setTime, 时间:time }
  置时间(时间: 数字): 数字;

  /**
    * Sets the milliseconds value in the Date object using local time.
    * @param 毫秒 A numeric value equal to the millisecond value.
    */

  //@@{ 置毫秒:setMilliseconds, 毫秒:ms }
  置毫秒(毫秒: 数字): 数字;

  /**
    * Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
    * @param 毫秒 A numeric value equal to the millisecond value.
    */

  //@@{ 置UTC毫秒:setUTCMilliseconds, 毫秒:ms }
  置UTC毫秒(毫秒: 数字): 数字;

  /**
    * Sets the seconds value in the Date object using local time.
    * @param 秒 A numeric value equal to the seconds value.
    * @param 毫秒 A numeric value equal to the milliseconds value.
    */

  //@@{ 设置秒钟:setSeconds, 秒:sec, 毫秒:ms }
  设置秒钟(秒: 数字, 毫秒?: 数字): 数字;

  /**
    * Sets the seconds value in the Date object using Universal Coordinated Time (UTC).
    * @param 秒 A numeric value equal to the seconds value.
    * @param 毫秒 A numeric value equal to the milliseconds value.
    */

  //@@{ 置UTC秒钟:setUTCSeconds, 秒:sec, 毫秒:ms }
  置UTC秒钟(秒: 数字, 毫秒?: 数字): 数字;

  /**
    * Sets the minutes value in the Date object using local time.
    * @param 分 A numeric value equal to the minutes value.
    * @param 秒 A numeric value equal to the seconds value.
    * @param 毫秒 A numeric value equal to the milliseconds value.
    */

  //@@{ 置分钟:setMinutes, 分:min, 秒:sec, 毫秒:ms }
  置分钟(分: 数字, 秒?: 数字, 毫秒?: 数字): 数字;

  /**
    * Sets the minutes value in the Date object using Universal Coordinated Time (UTC).
    * @param 分 A numeric value equal to the minutes value.
    * @param 秒 A numeric value equal to the seconds value.
    * @param 毫秒 A numeric value equal to the milliseconds value.
    */

  //@@{ 置UTC分钟:setUTCMinutes, 分:min, 秒:sec, 毫秒:ms }
  置UTC分钟(分: 数字, 秒?: 数字, 毫秒?: 数字): 数字;

  /**
    * Sets the hour value in the Date object using local time.
    * @param 小时 A numeric value equal to the hours value.
    * @param 分 A numeric value equal to the minutes value.
    * @param 秒 A numeric value equal to the seconds value.
    * @param 毫秒 A numeric value equal to the milliseconds value.
    */

  //@@{ 置小时:setHours, 小时:hours, 分:min, 秒:sec, 毫秒:ms }
  置小时(小时: 数字, 分?: 数字, 秒?: 数字, 毫秒?: 数字): 数字;

  /**
    * Sets the hours value in the Date object using Universal Coordinated Time (UTC).
    * @param 小时 A numeric value equal to the hours value.
    * @param 分 A numeric value equal to the minutes value.
    * @param 秒 A numeric value equal to the seconds value.
    * @param 毫秒 A numeric value equal to the milliseconds value.
    */

  //@@{ 置UTC小时:setUTCHours, 小时:hours, 分:min, 秒:sec, 毫秒:ms }
  置UTC小时(小时: 数字, 分?: 数字, 秒?: 数字, 毫秒?: 数字): 数字;

  /**
    * Sets the numeric day-of-the-month value of the Date object using local time.
    * @param 日期 A numeric value equal to the day of the month.
    */

  //@@{ 置日期:setDate, 日期:date }
  置日期(日期: 数字): 数字;

  /**
    * Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).
    * @param 日期 A numeric value equal to the day of the month.
    */

  //@@{ 置UTC日期:setUTCDate, 日期:date }
  置UTC日期(日期: 数字): 数字;

  /**
    * Sets the month value in the Date object using local time.
    * @param 月 A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
    * @param 日期 A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.
    */

  //@@{ 置月:setMonth, 月:month, 日期:date }
  置月(月: 数字, 日期?: 数字): 数字;

  /**
    * Sets the month value in the Date object using Universal Coordinated Time (UTC).
    * @param 月 A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
    * @param 日期 A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.
    */

  //@@{ 置UTC月:setUTCMonth, 月:month, 日期:date }
  置UTC月(月: 数字, 日期?: 数字): 数字;

  /**
    * Sets the year of the Date object using local time.
    * @param 年 A numeric value for the year.
    * @param 月 A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.
    * @param 日期 A numeric value equal for the day of the month.
    */

  //@@{ 置全年:setFullYear, 年:year, 月:month, 日期:date }
  置全年(年: 数字, 月?: 数字, 日期?: 数字): 数字;

  /**
    * Sets the year value in the Date object using Universal Coordinated Time (UTC).
    * @param 年 A numeric value equal to the year.
    * @param 月 A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied.
    * @param 日期 A numeric value equal to the day of the month.
    */

  //@@{ 置UTC全年:setUTCFullYear, 年:year, 月:month, 日期:date }
  置UTC全年(年: 数字, 月?: 数字, 日期?: 数字): 数字;

  /** Returns a date converted to a string using Universal Coordinated Time (UTC). */

  //@@{ 转为UTC文字:toUTCString }
  转为UTC文字(): 文字;

  /** Returns a date as a string value in ISO format. */

  //@@{ 转为ISO文字:toISOString }
  转为ISO文字(): 文字;

  /** Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. */

  //@@{ 转为JSON:toJSON, 键:key }
  转为JSON(键?: 任意): 文字;

}

//@@{ 日期构造函数_:DateConstructor }
接口 日期构造函数_ {

  //@@{ 日期_:Date }
  新建(): 日期_;

  //@@{ 值:value, 日期_:Date }
  新建(值: 数字): 日期_;

  //@@{ 值:value, 日期_:Date }
  新建(值: 文字): 日期_;

  //@@{ 年:year, 月:month, 日期:date, 小时:hours, 分钟:minutes, 秒钟:seconds, 毫秒:ms, 日期_:Date }
  新建(年: 数字, 月: 数字, 日期?: 数字, 小时?: 数字, 分钟?: 数字, 秒钟?: 数字, 毫秒?: 数字): 日期_;

  (): 文字;

  //@@{ 原型:prototype, 日期_:Date }
  只读 原型: 日期_;

  /**
    * Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.
    * @param 时间文字 A date string
    */

  //@@{ 编译:parse, 时间文字:s }
  编译(时间文字: 文字): 数字;

  /**
    * Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.
    * @param 年 The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
    * @param 月 The month as an number between 0 and 11 (January to December).
    * @param 日期 The date as an number between 1 and 31.
    * @param 小时 Must be supplied if minutes is supplied. An number from 0 to 23 (midnight to 11pm) that specifies the hour.
    * @param 分钟 Must be supplied if seconds is supplied. An number from 0 to 59 that specifies the minutes.
    * @param 秒钟 Must be supplied if milliseconds is supplied. An number from 0 to 59 that specifies the seconds.
    * @param 毫秒 An number from 0 to 999 that specifies the milliseconds.
    */

  //@@{ 年:year, 月:month, 日期:date, 小时:hours, 分钟:minutes, 秒钟:seconds, 毫秒:ms }
  UTC(年: 数字, 月: 数字, 日期?: 数字, 小时?: 数字, 分钟?: 数字, 秒钟?: 数字, 毫秒?: 数字): 数字;

  //@@{ 现在:now }
  现在(): 数字;

}

//@@{ 日期构造函数_:DateConstructor }
声明 常量 日期_: 日期构造函数_;

//@@{ 正则匹配数组_:RegExpMatchArray, 数组_:Array }
接口 正则匹配数组_ 扩展 数组_<文字> {

  //@@{ 索引:index }
  索引?: 数字;

  //@@{ 输入:input }
  输入?: 文字;

}

//@@{ 正则执行数组_:RegExpExecArray, 数组_:Array }
接口 正则执行数组_ 扩展 数组_<文字> {

  //@@{ 索引:index }
  索引: 数字;

  //@@{ 输入:input }
  输入: 文字;

}

//@@{ 正则_:RegExp }
接口 正则_ {

  /**
    * Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.
    * @param 文字 The String object or string literal on which to perform the search.
    */

  //@@{ 执行:exec, 文字:string, 正则执行数组_:RegExpExecArray }
  执行(文字: 文字): 正则执行数组_ | 空值;

  /**
    * Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
    * @param 文字 String on which to perform the search.
    */

  //@@{ 测试:test, 文字:string }
  测试(文字: 文字): 真假;

  /** Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal. */

  //@@{ 源:source }
  只读 源: 文字;

  /** Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only. */

  //@@{ 全局:global }
  只读 全局: 真假;

  /** Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only. */

  //@@{ 忽略大小写:ignoreCase }
  只读 忽略大小写: 真假;

  /** Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only. */

  //@@{ 多行:multiline }
  只读 多行: 真假;

  //@@{ 最后指数:lastIndex }
  最后指数: 数字;

  // Non-standard extensions

  //@@{ 编译:compile }
  编译(): 本体;

}

//@@{ 正则构造函数_:RegExpConstructor }
接口 正则构造函数_ {

  //@@{ 模式:pattern, 正则_:RegExp }
  新建(模式: 正则_ | 文字): 正则_;

  //@@{ 模式:pattern, 标志:flags, 正则_:RegExp }
  新建(模式: 文字, 标志?: 文字): 正则_;

  //@@{ 模式:pattern, 正则_:RegExp }
  (模式: 正则_ | 文字): 正则_;

  //@@{ 模式:pattern, 标志:flags, 正则_:RegExp }
  (模式: 文字, 标志?: 文字): 正则_;

  //@@{ 原型:prototype, 正则_:RegExp }
  只读 原型: 正则_;

  // Non-standard extensions

  $1: 文字;

  $2: 文字;

  $3: 文字;

  $4: 文字;

  $5: 文字;

  $6: 文字;

  $7: 文字;

  $8: 文字;

  $9: 文字;

  //@@{ 最后匹配:lastMatch }
  最后匹配: 文字;

}

//@@{ 正则构造函数_:RegExpConstructor }
声明 常量 正则_: 正则构造函数_;

//@@{ 错误_:Error }
接口 错误_ {

  //@@{ 名字:name }
  名字: 文字;

  //@@{ 消息:message }
  消息: 文字;

  //@@{ 堆栈:stack }
  堆栈?: 文字;

}

//@@{ 错误构造函数_:ErrorConstructor }
接口 错误构造函数_ {

  //@@{ 消息:message, 错误_:Error }
  新建(消息?: 文字): 错误_;

  //@@{ 消息:message, 错误_:Error }
  (消息?: 文字): 错误_;

  //@@{ 原型:prototype, 错误_:Error }
  只读 原型: 错误_;

}

//@@{ 错误构造函数_:ErrorConstructor }
声明 常量 错误_: 错误构造函数_;

//@@{ 执行错误_:EvalError, 错误_:Error }
接口 执行错误_ 扩展 错误_ {

}

//@@{ 执行错误构造函数_:EvalErrorConstructor }
接口 执行错误构造函数_ {

  //@@{ 消息:message, 执行错误_:EvalError }
  新建(消息?: 文字): 执行错误_;

  //@@{ 消息:message, 执行错误_:EvalError }
  (消息?: 文字): 执行错误_;

  //@@{ 原型:prototype, 执行错误_:EvalError }
  只读 原型: 执行错误_;

}

//@@{ 执行错误构造函数_:EvalErrorConstructor }
声明 常量 执行错误_: 执行错误构造函数_;

//@@{ 范围错误_:RangeError, 错误_:Error }
接口 范围错误_ 扩展 错误_ {

}

//@@{ 范围错误构造函数_:RangeErrorConstructor }
接口 范围错误构造函数_ {

  //@@{ 消息:message, 范围错误_:RangeError }
  新建(消息?: 文字): 范围错误_;

  //@@{ 消息:message, 范围错误_:RangeError }
  (消息?: 文字): 范围错误_;

  //@@{ 原型:prototype, 范围错误_:RangeError }
  只读 原型: 范围错误_;

}

//@@{ 范围错误构造函数_:RangeErrorConstructor }
声明 常量 范围错误_: 范围错误构造函数_;

//@@{ 引用错误_:ReferenceError, 错误_:Error }
接口 引用错误_ 扩展 错误_ {

}

//@@{ 引用错误构造函数_:ReferenceErrorConstructor }
接口 引用错误构造函数_ {

  //@@{ 消息:message, 引用错误_:ReferenceError }
  新建(消息?: 文字): 引用错误_;

  //@@{ 消息:message, 引用错误_:ReferenceError }
  (消息?: 文字): 引用错误_;

  //@@{ 原型:prototype, 引用错误_:ReferenceError }
  只读 原型: 引用错误_;

}

//@@{ 引用错误构造函数_:ReferenceErrorConstructor }
声明 常量 引用错误_: 引用错误构造函数_;

//@@{ 语法错误_:SyntaxError, 错误_:Error }
接口 语法错误_ 扩展 错误_ {

}

//@@{ 语法错误构造函数_:SyntaxErrorConstructor }
接口 语法错误构造函数_ {

  //@@{ 消息:message, 语法错误_:SyntaxError }
  新建(消息?: 文字): 语法错误_;

  //@@{ 消息:message, 语法错误_:SyntaxError }
  (消息?: 文字): 语法错误_;

  //@@{ 原型:prototype, 语法错误_:SyntaxError }
  只读 原型: 语法错误_;

}

//@@{ 语法错误构造函数_:SyntaxErrorConstructor }
声明 常量 语法错误_: 语法错误构造函数_;

//@@{ 类型错误_:TypeError, 错误_:Error }
接口 类型错误_ 扩展 错误_ {

}

//@@{ 类型错误构造函数_:TypeErrorConstructor }
接口 类型错误构造函数_ {

  //@@{ 消息:message, 类型错误_:TypeError }
  新建(消息?: 文字): 类型错误_;

  //@@{ 消息:message, 类型错误_:TypeError }
  (消息?: 文字): 类型错误_;

  //@@{ 原型:prototype, 类型错误_:TypeError }
  只读 原型: 类型错误_;

}

//@@{ 类型错误构造函数_:TypeErrorConstructor }
声明 常量 类型错误_: 类型错误构造函数_;

//@@{ URI错误_:URIError, 错误_:Error }
接口 URI错误_ 扩展 错误_ {

}

//@@{ URI错误构造函数_:URIErrorConstructor }
接口 URI错误构造函数_ {

  //@@{ 消息:message, URI错误_:URIError }
  新建(消息?: 文字): URI错误_;

  //@@{ 消息:message, URI错误_:URIError }
  (消息?: 文字): URI错误_;

  //@@{ 原型:prototype, URI错误_:URIError }
  只读 原型: URI错误_;

}

//@@{ URI错误构造函数_:URIErrorConstructor }
声明 常量 URI错误_: URI错误构造函数_;

接口 JSON {

  /**
    * Converts a JavaScript Object Notation (JSON) string into an object.
    * @param 文本 A valid JSON string.
    * @param 改造者 A function that transforms the results. This function is called for each member of the object.
    * If a member contains nested objects, the nested objects are transformed before the parent object is.
    */

  //@@{ 编译:parse, 文本:text, 改造者:reviver, 键:key, 值:value }
  编译(文本: 文字, 改造者?: (键: 任意, 值: 任意) => 任意): 任意;

  /**
    * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
    * @param 值 A JavaScript value, usually an object or array, to be converted.
    * @param 替代者 A function that transforms the results.
    * @param 范围 Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
    */

  //@@{ 序列化:stringify, 值:value, 替代者:replacer, 键:key, 范围:space }
  序列化(值: 任意, 替代者?: (键: 文字, 值: 任意) => 任意, 范围?: 文字 | 数字): 文字;

  /**
    * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
    * @param 值 A JavaScript value, usually an object or array, to be converted.
    * @param 替代者 An array of strings and numbers that acts as a approved list for selecting the object properties that will be stringified.
    * @param 范围 Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
    */

  //@@{ 值:value, 替代者:replacer, 范围:space }
  序列化(值: 任意, 替代者?: (数字 | 文字)[] | 空值, 范围?: 文字 | 数字): 文字;

}
/**
  * An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
  */

声明 常量 JSON: JSON;

/////////////////////////////
/// ECMAScript Array API (specially handled by compiler)
/////////////////////////////

//@@{ 只读数组_:ReadonlyArray }
接口 只读数组_<T> {

  /**
    * Gets the length of the array. This is a number one higher than the highest element defined in an array.
    */

  //@@{ 长度:length }
  只读 长度: 数字;

  /**
    * Returns a string representation of an array.
    */

  //@@{ 转为文字:toString }
  转为文字(): 文字;

  /**
    * Returns a string representation of an array. The elements are converted to string using thier toLocalString methods.
    */

  //@@{ 转为本地文字:toLocaleString }
  转为本地文字(): 文字;

  /**
    * Combines two or more arrays.
    * @param 项目 Additional items to add to the end of array1.
    */

  //@@{ 结合:concat, 项目:items, 只读数组_:ReadonlyArray }
  结合(...项目: 只读数组_<T>[]): T[];

  /**
    * Combines two or more arrays.
    * @param 项目 Additional items to add to the end of array1.
    */

  //@@{ 结合:concat, 项目:items, 只读数组_:ReadonlyArray }
  结合(...项目: (T | 只读数组_<T>)[]): T[];

  /**
    * Adds all the elements of an array separated by the specified separator string.
    * @param 分割符 A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
    */

  //@@{ 连接:join, 分割符:separator }
  连接(分割符?: 文字): 文字;

  /**
    * Returns a section of an array.
    * @param 开始 The beginning of the specified portion of the array.
    * @param 结束 The end of the specified portion of the array.
    */

  //@@{ 分割:slice, 开始:start, 结束:end }
  分割(开始?: 数字, 结束?: 数字): T[];

  /**
    * Returns the index of the first occurrence of a value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
    */

  //@@{ 索引位于:indexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  索引位于(搜索元素: T, 起始索引?: 数字): 数字;

  /**
    * Returns the index of the last occurrence of a specified value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
    */

  //@@{ 最后索引位于:lastIndexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  最后索引位于(搜索元素: T, 起始索引?: 数字): 数字;

  /**
    * Determines whether all the members of an array satisfy the specified test.
    * @param 回调函数 A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 每个:every, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 只读数组_:ReadonlyArray, 本体参数:thisArg }
  每个(回调函数: (值: T, 索引: 数字, 数组: 只读数组_<T>) => 真假, 本体参数?: 任意): 真假;

  /**
    * Determines whether the specified callback function returns true for any element of an array.
    * @param 回调函数 A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 部分:some, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 只读数组_:ReadonlyArray, 本体参数:thisArg }
  部分(回调函数: (值: T, 索引: 数字, 数组: 只读数组_<T>) => 真假, 本体参数?: 任意): 真假;

  /**
    * Performs the specified action for each element in an array.
    * @param 回调函数  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
    * @param 本体参数  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 循环执行:forEach, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 只读数组_:ReadonlyArray, 本体参数:thisArg }
  循环执行(回调函数: (值: T, 索引: 数字, 数组: 只读数组_<T>) => 无值, 本体参数?: 任意): 无值;

  /**
    * Calls a defined callback function on each element of an array, and returns an array that contains the results.
    * @param 回调函数 A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 映射:map, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 只读数组_:ReadonlyArray, 本体参数:thisArg }
  映射<U>(回调函数: (值: T, 索引: 数字, 数组: 只读数组_<T>) => U, 本体参数?: 任意): U[];

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param 回调函数 A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param 本体参数 An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */

  //@@{ 过滤:filter, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 只读数组_:ReadonlyArray, 本体参数:thisArg }
  过滤<S 扩展 T>(回调函数: (值: T, 索引: 数字, 数组: 只读数组_<T>) => 值 作为 S, 本体参数?: 任意): S[];

  /**
    * Returns the elements of an array that meet the condition specified in a callback function.
    * @param 回调函数 A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 过滤:filter, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 只读数组_:ReadonlyArray, 本体参数:thisArg }
  过滤(回调函数: (值: T, 索引: 数字, 数组: 只读数组_<T>) => 任意, 本体参数?: 任意): T[];

  /**
    * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
    */

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 只读数组_:ReadonlyArray }
  累加(回调函数: (之前值: T, 当前值: T, 当前索引: 数字, 数组: 只读数组_<T>) => T): T;

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 只读数组_:ReadonlyArray, 初始值:initialValue }
  累加(回调函数: (之前值: T, 当前值: T, 当前索引: 数字, 数组: 只读数组_<T>) => T, 初始值: T): T;

  /**
    * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
    */

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 只读数组_:ReadonlyArray, 初始值:initialValue }
  累加<U>(回调函数: (之前值: U, 当前值: T, 当前索引: 数字, 数组: 只读数组_<T>) => U, 初始值: U): U;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
    * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
    */

  //@@{ 累加右侧:reduceRight, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 只读数组_:ReadonlyArray }
  累加右侧(回调函数: (之前值: T, 当前值: T, 当前索引: 数字, 数组: 只读数组_<T>) => T): T;

  //@@{ 累加右侧:reduceRight, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 只读数组_:ReadonlyArray, 初始值:initialValue }
  累加右侧(回调函数: (之前值: T, 当前值: T, 当前索引: 数字, 数组: 只读数组_<T>) => T, 初始值: T): T;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
    */

  //@@{ 累加右侧:reduceRight, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 只读数组_:ReadonlyArray, 初始值:initialValue }
  累加右侧<U>(回调函数: (之前值: U, 当前值: T, 当前索引: 数字, 数组: 只读数组_<T>) => U, 初始值: U): U;

  只读 [n: 数字]: T;

}

//@@{ 数组_:Array }
接口 数组_<T> {

  /**
    * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
    */

  //@@{ 长度:length }
  长度: 数字;

  /**
    * Returns a string representation of an array.
    */

  //@@{ 转为文字:toString }
  转为文字(): 文字;

  /**
    * Returns a string representation of an array. The elements are converted to string using thier toLocalString methods.
    */

  //@@{ 转为本地文字:toLocaleString }
  转为本地文字(): 文字;

  /**
    * Appends new elements to an array, and returns the new length of the array.
    * @param 项目 New elements of the Array.
    */

  //@@{ 压入:push, 项目:items }
  压入(...项目: T[]): 数字;

  /**
    * Removes the last element from an array and returns it.
    */

  //@@{ 弹出:pop }
  弹出(): T | 未定;

  /**
    * Combines two or more arrays.
    * @param 项目 Additional items to add to the end of array1.
    */

  //@@{ 结合:concat, 项目:items, 只读数组_:ReadonlyArray }
  结合(...项目: 只读数组_<T>[]): T[];

  /**
    * Combines two or more arrays.
    * @param 项目 Additional items to add to the end of array1.
    */

  //@@{ 结合:concat, 项目:items, 只读数组_:ReadonlyArray }
  结合(...项目: (T | 只读数组_<T>)[]): T[];

  /**
    * Adds all the elements of an array separated by the specified separator string.
    * @param 分割符 A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
    */

  //@@{ 连接:join, 分割符:separator }
  连接(分割符?: 文字): 文字;

  /**
    * Reverses the elements in an Array.
    */

  //@@{ 翻转:reverse }
  翻转(): T[];

  /**
    * Removes the first element from an array and returns it.
    */

  //@@{ 推出:shift }
  推出(): T | 未定;

  /**
    * Returns a section of an array.
    * @param 开始 The beginning of the specified portion of the array.
    * @param 结束 The end of the specified portion of the array.
    */

  //@@{ 分割:slice, 开始:start, 结束:end }
  分割(开始?: 数字, 结束?: 数字): T[];

  /**
    * Sorts an array.
    * @param 比较函数 The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.
    */

  //@@{ 排序:sort, 比较函数:compareFn }
  排序(比较函数?: (a: T, b: T) => 数字): 本体;

  /**
    * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
    * @param 开始 The zero-based location in the array from which to start removing elements.
    * @param 删除数 The number of elements to remove.
    */

  //@@{ 分切:splice, 开始:start, 删除数:deleteCount }
  分切(开始: 数字, 删除数?: 数字): T[];

  /**
    * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
    * @param 开始 The zero-based location in the array from which to start removing elements.
    * @param 删除数 The number of elements to remove.
    * @param 项目 Elements to insert into the array in place of the deleted elements.
    */

  //@@{ 分切:splice, 开始:start, 删除数:deleteCount, 项目:items }
  分切(开始: 数字, 删除数: 数字, ...项目: T[]): T[];

  /**
    * Inserts new elements at the start of an array.
    * @param 项目  Elements to insert at the start of the Array.
    */

  //@@{ 推入:unshift, 项目:items }
  推入(...项目: T[]): 数字;

  /**
    * Returns the index of the first occurrence of a value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
    */

  //@@{ 索引位于:indexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  索引位于(搜索元素: T, 起始索引?: 数字): 数字;

  /**
    * Returns the index of the last occurrence of a specified value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
    */

  //@@{ 最后索引位于:lastIndexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  最后索引位于(搜索元素: T, 起始索引?: 数字): 数字;

  /**
    * Determines whether all the members of an array satisfy the specified test.
    * @param 回调函数 A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 每个:every, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 本体参数:thisArg }
  每个(回调函数: (值: T, 索引: 数字, 数组: T[]) => 真假, 本体参数?: 任意): 真假;

  /**
    * Determines whether the specified callback function returns true for any element of an array.
    * @param 回调函数 A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 部分:some, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 本体参数:thisArg }
  部分(回调函数: (值: T, 索引: 数字, 数组: T[]) => 真假, 本体参数?: 任意): 真假;

  /**
    * Performs the specified action for each element in an array.
    * @param 回调函数  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
    * @param 本体参数  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 循环执行:forEach, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 本体参数:thisArg }
  循环执行(回调函数: (值: T, 索引: 数字, 数组: T[]) => 无值, 本体参数?: 任意): 无值;

  /**
    * Calls a defined callback function on each element of an array, and returns an array that contains the results.
    * @param 回调函数 A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 映射:map, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 本体参数:thisArg }
  映射<U>(回调函数: (值: T, 索引: 数字, 数组: T[]) => U, 本体参数?: 任意): U[];

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param 回调函数 A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param 本体参数 An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */

  //@@{ 过滤:filter, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 本体参数:thisArg }
  过滤<S 扩展 T>(回调函数: (值: T, 索引: 数字, 数组: T[]) => 值 作为 S, 本体参数?: 任意): S[];

  /**
    * Returns the elements of an array that meet the condition specified in a callback function.
    * @param 回调函数 A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 过滤:filter, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 本体参数:thisArg }
  过滤(回调函数: (值: T, 索引: 数字, 数组: T[]) => 任意, 本体参数?: 任意): T[];

  /**
    * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
    */

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array }
  累加(回调函数: (之前值: T, 当前值: T, 当前索引: 数字, 数组: T[]) => T): T;

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 初始值:initialValue }
  累加(回调函数: (之前值: T, 当前值: T, 当前索引: 数字, 数组: T[]) => T, 初始值: T): T;

  /**
    * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
    */

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 初始值:initialValue }
  累加<U>(回调函数: (之前值: U, 当前值: T, 当前索引: 数字, 数组: T[]) => U, 初始值: U): U;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
    */

  //@@{ 累加右侧:reduceRight, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array }
  累加右侧(回调函数: (之前值: T, 当前值: T, 当前索引: 数字, 数组: T[]) => T): T;

  //@@{ 累加右侧:reduceRight, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 初始值:initialValue }
  累加右侧(回调函数: (之前值: T, 当前值: T, 当前索引: 数字, 数组: T[]) => T, 初始值: T): T;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
    */

  //@@{ 累加右侧:reduceRight, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 初始值:initialValue }
  累加右侧<U>(回调函数: (之前值: U, 当前值: T, 当前索引: 数字, 数组: T[]) => U, 初始值: U): U;

  [n: 数字]: T;

}

//@@{ 数组构造函数_:ArrayConstructor }
接口 数组构造函数_ {

  //@@{ 数组长度:arrayLength }
  新建(数组长度?: 数字): 任意[];

  //@@{ 数组长度:arrayLength }
  新建 <T>(数组长度: 数字): T[];

  //@@{ 项目:items }
  新建 <T>(...项目: T[]): T[];

  //@@{ 数组长度:arrayLength }
  (数组长度?: 数字): 任意[];

  //@@{ 数组长度:arrayLength }
  <T>(数组长度: 数字): T[];

  //@@{ 项目:items }
  <T>(...项目: T[]): T[];

  //@@{ 是数组:isArray, 参数:arg, 数组_:Array }
  是数组(参数: 任意): 参数 作为 数组_<任意>;

  //@@{ 原型:prototype, 数组_:Array }
  只读 原型: 数组_<任意>;

}

//@@{ 数组构造函数_:ArrayConstructor }
声明 常量 数组_: 数组构造函数_;

//@@{ 类型属性描述符_:TypedPropertyDescriptor }
接口 类型属性描述符_<T> {

  //@@{ 可枚举的:enumerable }
  可枚举的?: 真假;

  //@@{ 可配置的:configurable }
  可配置的?: 真假;

  //@@{ 可写的:writable }
  可写的?: 真假;

  //@@{ 值:value }
  值?: T;

  //@@{ 获取:get }
  获取?: () => T;

  //@@{ 设置:set, 值:value }
  设置?: (值: T) => 无值;

}

//@@{ 类别装饰_:ClassDecorator, T函数:TFunction, 函数_:Function, 目标:target }
声明 类型 类别装饰_ = <T函数 扩展 函数_>(目标: T函数) => T函数 | 无值;

//@@{ 属性装饰_:PropertyDecorator, 目标:target, 实例_:Object, 属性键:propertyKey }
声明 类型 属性装饰_ = (目标: 实例_, 属性键: 文字 | 符号) => 无值;

//@@{ 方法装饰_:MethodDecorator, 目标:target, 实例_:Object, 属性键:propertyKey, 描述符:descriptor, 类型属性描述符_:TypedPropertyDescriptor }
声明 类型 方法装饰_ = <T>(目标: 实例_, 属性键: 文字 | 符号, 描述符: 类型属性描述符_<T>) => 类型属性描述符_<T> | 无值;

//@@{ 参数装饰_:ParameterDecorator, 目标:target, 实例_:Object, 属性键:propertyKey, 参数索引:parameterIndex }
声明 类型 参数装饰_ = (目标: 实例_, 属性键: 文字 | 符号, 参数索引: 数字) => 无值;

//@@{ 预设构造函数等_:PromiseConstructorLike, 执行者:executor, 解决:resolve, 值:value, 预设等_:PromiseLike, 拒绝:reject, 原因:reason }
声明 类型 预设构造函数等_ = 新建 <T>(执行者: (解决: (值?: T | 预设等_<T>) => 无值, 拒绝: (原因?: 任意) => 无值) => 无值) => 预设等_<T>;

//@@{ 预设等_:PromiseLike }
接口 预设等_<T> {

  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param 正在解决 The callback to execute when the Promise is resolved.
   * @param 正在拒绝 The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */

  //@@{ 然后:then, T结果1:TResult1, T结果2:TResult2, 正在解决:onfulfilled, 值:value, 预设等_:PromiseLike, 正在拒绝:onrejected, 原因:reason }
  然后<T结果1 = T, T结果2 = 不及>(正在解决?: ((值: T) => T结果1 | 预设等_<T结果1>) | 未定 | 空值, 正在拒绝?: ((原因: 任意) => T结果2 | 预设等_<T结果2>) | 未定 | 空值): 预设等_<T结果1 | T结果2>;

}
/**
 * Represents the completion of an asynchronous operation
 */

//@@{ 预设_:Promise }
接口 预设_<T> {

  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param 正在解决 The callback to execute when the Promise is resolved.
   * @param 正在拒绝 The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */

  //@@{ 然后:then, T结果1:TResult1, T结果2:TResult2, 正在解决:onfulfilled, 值:value, 预设等_:PromiseLike, 正在拒绝:onrejected, 原因:reason, 预设_:Promise }
  然后<T结果1 = T, T结果2 = 不及>(正在解决?: ((值: T) => T结果1 | 预设等_<T结果1>) | 未定 | 空值, 正在拒绝?: ((原因: 任意) => T结果2 | 预设等_<T结果2>) | 未定 | 空值): 预设_<T结果1 | T结果2>;

  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param 正在拒绝 The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */

  //@@{ 捕获:catch, T结果:TResult, 正在拒绝:onrejected, 原因:reason, 预设等_:PromiseLike, 预设_:Promise }
  捕获<T结果 = 不及>(正在拒绝?: ((原因: 任意) => T结果 | 预设等_<T结果>) | 未定 | 空值): 预设_<T | T结果>;

}

//@@{ 数组等_:ArrayLike }
接口 数组等_<T> {

  //@@{ 长度:length }
  只读 长度: 数字;

  只读 [n: 数字]: T;

}
/**
 * Make all properties in T optional
 */

//@@{ 转为可选属性_:Partial }
类型 转为可选属性_<T> = {

  [P 位于 键为 T]?: T[P];

};
/**
 * Make all properties in T readonly
 */

//@@{ 只读_:Readonly }
类型 只读_<T> = {

  只读 [P 位于 键为 T]: T[P];

};
/**
 * From T pick a set of properties K
 */

//@@{ 选择_:Pick }
类型 选择_<T, K 扩展 键为 T> = {

  [P 位于 K]: T[P];

};
/**
 * Construct a type with a set of properties K of type T
 */

//@@{ 记录_:Record }
类型 记录_<K 扩展 文字, T> = {

  [P 位于 K]: T;

};
/**
 * Marker for contextual 'this' type
 */

//@@{ 本体类型_:ThisType }
接口 本体类型_<T> { }

/**
  * Represents a raw buffer of binary data, which is used to store data for the
  * different typed arrays. ArrayBuffers cannot be read from or written to directly,
  * but can be passed to a typed array or DataView Object to interpret the raw
  * buffer as needed.
  */

//@@{ 数组缓冲区_:ArrayBuffer }
接口 数组缓冲区_ {

  /**
    * Read-only. The length of the ArrayBuffer (in bytes).
    */

  //@@{ 字节长度:byteLength }
  只读 字节长度: 数字;

  /**
    * Returns a section of an ArrayBuffer.
    */

  //@@{ 分割:slice, 开始:begin, 结束:end, 数组缓冲区_:ArrayBuffer }
  分割(开始: 数字, 结束?: 数字): 数组缓冲区_;

}
/**
 * Allowed ArrayBuffer types for the buffer of an ArrayBufferView and related Typed Arrays.
 */

//@@{ 数组缓冲类型_:ArrayBufferTypes }
接口 数组缓冲类型_ {

  //@@{ 数组缓冲区_:ArrayBuffer }
  数组缓冲区_: 数组缓冲区_;

}

//@@{ 数组缓冲区等_:ArrayBufferLike, 数组缓冲类型_:ArrayBufferTypes }
类型 数组缓冲区等_ = 数组缓冲类型_[键为 数组缓冲类型_];

//@@{ 数组缓冲区构造函数_:ArrayBufferConstructor }
接口 数组缓冲区构造函数_ {

  //@@{ 原型:prototype, 数组缓冲区_:ArrayBuffer }
  只读 原型: 数组缓冲区_;

  //@@{ 字节长度:byteLength, 数组缓冲区_:ArrayBuffer }
  新建(字节长度: 数字): 数组缓冲区_;

  //@@{ 是视图:isView, 参数:arg, 数组缓冲区视图_:ArrayBufferView }
  是视图(参数: 任意): 参数 作为 数组缓冲区视图_;

}

//@@{ 数组缓冲区构造函数_:ArrayBufferConstructor }
声明 常量 数组缓冲区_: 数组缓冲区构造函数_;

//@@{ 数组缓冲区视图_:ArrayBufferView }
接口 数组缓冲区视图_ {

  /**
    * The ArrayBuffer instance referenced by the array.
    */

  //@@{ 缓冲:buffer, 数组缓冲区等_:ArrayBufferLike }
  缓冲: 数组缓冲区等_;

  /**
    * The length in bytes of the array.
    */

  //@@{ 字节长度:byteLength }
  字节长度: 数字;

  /**
    * The offset in bytes of the array.
    */

  //@@{ 字节偏移:byteOffset }
  字节偏移: 数字;

}

//@@{ 数据视图_:DataView }
接口 数据视图_ {

  //@@{ 缓冲:buffer, 数组缓冲区_:ArrayBuffer }
  只读 缓冲: 数组缓冲区_;

  //@@{ 字节长度:byteLength }
  只读 字节长度: 数字;

  //@@{ 字节偏移:byteOffset }
  只读 字节偏移: 数字;

  /**
    * Gets the Float32 value at the specified byte offset from the start of the view. There is
    * no alignment constraint; multi-byte values may be fetched from any offset.
    * @param 字节偏移 The place in the buffer at which the value should be retrieved.
    */

  //@@{ 取浮点32:getFloat32, 字节偏移:byteOffset, 小端字节:littleEndian }
  取浮点32(字节偏移: 数字, 小端字节?: 真假): 数字;

  /**
    * Gets the Float64 value at the specified byte offset from the start of the view. There is
    * no alignment constraint; multi-byte values may be fetched from any offset.
    * @param 字节偏移 The place in the buffer at which the value should be retrieved.
    */

  //@@{ 取浮点64:getFloat64, 字节偏移:byteOffset, 小端字节:littleEndian }
  取浮点64(字节偏移: 数字, 小端字节?: 真假): 数字;

  /**
    * Gets the Int8 value at the specified byte offset from the start of the view. There is
    * no alignment constraint; multi-byte values may be fetched from any offset.
    * @param 字节偏移 The place in the buffer at which the value should be retrieved.
    */

  //@@{ 取整数8:getInt8, 字节偏移:byteOffset }
  取整数8(字节偏移: 数字): 数字;

  /**
    * Gets the Int16 value at the specified byte offset from the start of the view. There is
    * no alignment constraint; multi-byte values may be fetched from any offset.
    * @param 字节偏移 The place in the buffer at which the value should be retrieved.
    */

  //@@{ 取整数16:getInt16, 字节偏移:byteOffset, 小端字节:littleEndian }
  取整数16(字节偏移: 数字, 小端字节?: 真假): 数字;

  /**
    * Gets the Int32 value at the specified byte offset from the start of the view. There is
    * no alignment constraint; multi-byte values may be fetched from any offset.
    * @param 字节偏移 The place in the buffer at which the value should be retrieved.
    */

  //@@{ 取整数32:getInt32, 字节偏移:byteOffset, 小端字节:littleEndian }
  取整数32(字节偏移: 数字, 小端字节?: 真假): 数字;

  /**
    * Gets the Uint8 value at the specified byte offset from the start of the view. There is
    * no alignment constraint; multi-byte values may be fetched from any offset.
    * @param 字节偏移 The place in the buffer at which the value should be retrieved.
    */

  //@@{ 取正整数8:getUint8, 字节偏移:byteOffset }
  取正整数8(字节偏移: 数字): 数字;

  /**
    * Gets the Uint16 value at the specified byte offset from the start of the view. There is
    * no alignment constraint; multi-byte values may be fetched from any offset.
    * @param 字节偏移 The place in the buffer at which the value should be retrieved.
    */

  //@@{ 取正整数16:getUint16, 字节偏移:byteOffset, 小端字节:littleEndian }
  取正整数16(字节偏移: 数字, 小端字节?: 真假): 数字;

  /**
    * Gets the Uint32 value at the specified byte offset from the start of the view. There is
    * no alignment constraint; multi-byte values may be fetched from any offset.
    * @param 字节偏移 The place in the buffer at which the value should be retrieved.
    */

  //@@{ 取正整数32:getUint32, 字节偏移:byteOffset, 小端字节:littleEndian }
  取正整数32(字节偏移: 数字, 小端字节?: 真假): 数字;

  /**
    * Stores an Float32 value at the specified byte offset from the start of the view.
    * @param 字节偏移 The place in the buffer at which the value should be set.
    * @param 值 The value to set.
    * @param 小端字节 If false or undefined, a big-endian value should be written,
    * otherwise a little-endian value should be written.
    */

  //@@{ 置浮点32:setFloat32, 字节偏移:byteOffset, 值:value, 小端字节:littleEndian }
  置浮点32(字节偏移: 数字, 值: 数字, 小端字节?: 真假): 无值;

  /**
    * Stores an Float64 value at the specified byte offset from the start of the view.
    * @param 字节偏移 The place in the buffer at which the value should be set.
    * @param 值 The value to set.
    * @param 小端字节 If false or undefined, a big-endian value should be written,
    * otherwise a little-endian value should be written.
    */

  //@@{ 置浮点64:setFloat64, 字节偏移:byteOffset, 值:value, 小端字节:littleEndian }
  置浮点64(字节偏移: 数字, 值: 数字, 小端字节?: 真假): 无值;

  /**
    * Stores an Int8 value at the specified byte offset from the start of the view.
    * @param 字节偏移 The place in the buffer at which the value should be set.
    * @param 值 The value to set.
    */

  //@@{ 置整数8:setInt8, 字节偏移:byteOffset, 值:value }
  置整数8(字节偏移: 数字, 值: 数字): 无值;

  /**
    * Stores an Int16 value at the specified byte offset from the start of the view.
    * @param 字节偏移 The place in the buffer at which the value should be set.
    * @param 值 The value to set.
    * @param 小端字节 If false or undefined, a big-endian value should be written,
    * otherwise a little-endian value should be written.
    */

  //@@{ 置整数16:setInt16, 字节偏移:byteOffset, 值:value, 小端字节:littleEndian }
  置整数16(字节偏移: 数字, 值: 数字, 小端字节?: 真假): 无值;

  /**
    * Stores an Int32 value at the specified byte offset from the start of the view.
    * @param 字节偏移 The place in the buffer at which the value should be set.
    * @param 值 The value to set.
    * @param 小端字节 If false or undefined, a big-endian value should be written,
    * otherwise a little-endian value should be written.
    */

  //@@{ 置整数32:setInt32, 字节偏移:byteOffset, 值:value, 小端字节:littleEndian }
  置整数32(字节偏移: 数字, 值: 数字, 小端字节?: 真假): 无值;

  /**
    * Stores an Uint8 value at the specified byte offset from the start of the view.
    * @param 字节偏移 The place in the buffer at which the value should be set.
    * @param 值 The value to set.
    */

  //@@{ 置正整数8:setUint8, 字节偏移:byteOffset, 值:value }
  置正整数8(字节偏移: 数字, 值: 数字): 无值;

  /**
    * Stores an Uint16 value at the specified byte offset from the start of the view.
    * @param 字节偏移 The place in the buffer at which the value should be set.
    * @param 值 The value to set.
    * @param 小端字节 If false or undefined, a big-endian value should be written,
    * otherwise a little-endian value should be written.
    */

  //@@{ 置正整数16:setUint16, 字节偏移:byteOffset, 值:value, 小端字节:littleEndian }
  置正整数16(字节偏移: 数字, 值: 数字, 小端字节?: 真假): 无值;

  /**
    * Stores an Uint32 value at the specified byte offset from the start of the view.
    * @param 字节偏移 The place in the buffer at which the value should be set.
    * @param 值 The value to set.
    * @param 小端字节 If false or undefined, a big-endian value should be written,
    * otherwise a little-endian value should be written.
    */

  //@@{ 置正整数32:setUint32, 字节偏移:byteOffset, 值:value, 小端字节:littleEndian }
  置正整数32(字节偏移: 数字, 值: 数字, 小端字节?: 真假): 无值;

}

//@@{ 数据视图构造函数_:DataViewConstructor }
接口 数据视图构造函数_ {

  //@@{ 缓冲:buffer, 数组缓冲区等_:ArrayBufferLike, 字节偏移:byteOffset, 字节长度:byteLength, 数据视图_:DataView }
  新建(缓冲: 数组缓冲区等_, 字节偏移?: 数字, 字节长度?: 数字): 数据视图_;

}

//@@{ 数据视图构造函数_:DataViewConstructor }
声明 常量 数据视图_: 数据视图构造函数_;

/**
  * A typed array of 8-bit integer values. The contents are initialized to 0. If the requested
  * number of bytes could not be allocated an exception is raised.
  */

//@@{ 整数数组8_:Int8Array }
接口 整数数组8_ {

  /**
    * The size in bytes of each element in the array.
    */

  //@@{ __字节_每个_元素_大小__:BYTES_PER_ELEMENT }
  只读 __字节_每个_元素_大小__: 数字;

  /**
    * The ArrayBuffer instance referenced by the array.
    */

  //@@{ 缓冲:buffer, 数组缓冲区等_:ArrayBufferLike }
  只读 缓冲: 数组缓冲区等_;

  /**
    * The length in bytes of the array.
    */

  //@@{ 字节长度:byteLength }
  只读 字节长度: 数字;

  /**
    * The offset in bytes of the array.
    */

  //@@{ 字节偏移:byteOffset }
  只读 字节偏移: 数字;

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

  /**
    * Determines whether all the members of an array satisfy the specified test.
    * @param 回调函数 A function that accepts up to three arguments. The every method calls
    * the callbackfn function for each element in array1 until the callbackfn returns false,
    * or until the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 每个:every, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 整数数组8_:Int8Array, 本体参数:thisArg }
  每个(回调函数: (值: 数字, 索引: 数字, 数组: 整数数组8_) => 真假, 本体参数?: 任意): 真假;

  /**
      * Returns the this object after filling the section identified by start and end with value
      * @param 值 value to fill array section with
      * @param 开始 index to start filling the array at. If start is negative, it is treated as
      * length+start where length is the length of the array.
      * @param 结束 index to stop filling the array at. If end is negative, it is treated as
      * length+end.
      */

  //@@{ 填充:fill, 值:value, 开始:start, 结束:end }
  填充(值: 数字, 开始?: 数字, 结束?: 数字): 本体;

  /**
    * Returns the elements of an array that meet the condition specified in a callback function.
    * @param 回调函数 A function that accepts up to three arguments. The filter method calls
    * the callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 过滤:filter, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 整数数组8_:Int8Array, 本体参数:thisArg }
  过滤(回调函数: (值: 数字, 索引: 数字, 数组: 整数数组8_) => 任意, 本体参数?: 任意): 整数数组8_;

  /**
    * Returns the value of the first element in the array where predicate is true, and undefined
    * otherwise.
    * @param 条件 find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found, find
    * immediately returns that element value. Otherwise, find returns undefined.
    * @param 本体参数 If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */

  //@@{ 查找:find, 条件:predicate, 值:value, 索引:index, 对象:obj, 整数数组8_:Int8Array, 本体参数:thisArg }
  查找(条件: (值: 数字, 索引: 数字, 对象: 整数数组8_) => 真假, 本体参数?: 任意): 数字 | 未定;

  /**
    * Returns the index of the first element in the array where predicate is true, and -1
    * otherwise.
    * @param 条件 find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found,
    * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
    * @param 本体参数 If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */

  //@@{ 查找索引:findIndex, 条件:predicate, 值:value, 索引:index, 对象:obj, 整数数组8_:Int8Array, 本体参数:thisArg }
  查找索引(条件: (值: 数字, 索引: 数字, 对象: 整数数组8_) => 真假, 本体参数?: 任意): 数字;

  /**
    * Performs the specified action for each element in an array.
    * @param 回调函数  A function that accepts up to three arguments. forEach calls the
    * callbackfn function one time for each element in the array.
    * @param 本体参数  An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 循环执行:forEach, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 整数数组8_:Int8Array, 本体参数:thisArg }
  循环执行(回调函数: (值: 数字, 索引: 数字, 数组: 整数数组8_) => 无值, 本体参数?: 任意): 无值;

  /**
    * Returns the index of the first occurrence of a value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the
    *  search starts at index 0.
    */

  //@@{ 索引位于:indexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  索引位于(搜索元素: 数字, 起始索引?: 数字): 数字;

  /**
    * Adds all the elements of an array separated by the specified separator string.
    * @param 分割符 A string used to separate one element of an array from the next in the
    * resulting String. If omitted, the array elements are separated with a comma.
    */

  //@@{ 连接:join, 分割符:separator }
  连接(分割符?: 文字): 文字;

  /**
    * Returns the index of the last occurrence of a value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the
    * search starts at index 0.
    */

  //@@{ 最后索引位于:lastIndexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  最后索引位于(搜索元素: 数字, 起始索引?: 数字): 数字;

  /**
    * The length of the array.
    */

  //@@{ 长度:length }
  只读 长度: 数字;

  /**
    * Calls a defined callback function on each element of an array, and returns an array that
    * contains the results.
    * @param 回调函数 A function that accepts up to three arguments. The map method calls the
    * callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 映射:map, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 整数数组8_:Int8Array, 本体参数:thisArg }
  映射(回调函数: (值: 数字, 索引: 数字, 数组: 整数数组8_) => 数字, 本体参数?: 任意): 整数数组8_;

  /**
    * Calls the specified callback function for all the elements in an array. The return value of
    * the callback function is the accumulated result, and is provided as an argument in the next
    * call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the
    * callbackfn function one time for each element in the array.
    * @param initialValue If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 整数数组8_:Int8Array }
  累加(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 整数数组8_) => 数字): 数字;

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 整数数组8_:Int8Array, 初始值:initialValue }
  累加(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 整数数组8_) => 数字, 初始值: 数字): 数字;

  /**
    * Calls the specified callback function for all the elements in an array. The return value of
    * the callback function is the accumulated result, and is provided as an argument in the next
    * call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the
    * callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 整数数组8_:Int8Array, 初始值:initialValue }
  累加<U>(回调函数: (之前值: U, 当前值: 数字, 当前索引: 数字, 数组: 整数数组8_) => U, 初始值: U): U;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order.
    * The return value of the callback function is the accumulated result, and is provided as an
    * argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls
    * the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an
    * argument instead of an array value.
    */

  //@@{ 累加右侧:reduceRight, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 整数数组8_:Int8Array }
  累加右侧(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 整数数组8_) => 数字): 数字;

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 整数数组8_:Int8Array, 初始值:initialValue }
  累加右侧(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 整数数组8_) => 数字, 初始值: 数字): 数字;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order.
    * The return value of the callback function is the accumulated result, and is provided as an
    * argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls
    * the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 整数数组8_:Int8Array, 初始值:initialValue }
  累加右侧<U>(回调函数: (之前值: U, 当前值: 数字, 当前索引: 数字, 数组: 整数数组8_) => U, 初始值: U): U;

  /**
    * Reverses the elements in an Array.
    */

  //@@{ 翻转:reverse, 整数数组8_:Int8Array }
  翻转(): 整数数组8_;

  /**
    * Sets a value or an array of values.
    * @param 数组 A typed or untyped array of values to set.
    * @param 偏移 The index in the current array at which the values are to be written.
    */

  //@@{ 设置:set, 数组:array, 数组等_:ArrayLike, 偏移:offset }
  设置(数组: 数组等_<数字>, 偏移?: 数字): 无值;

  /**
    * Returns a section of an array.
    * @param 开始 The beginning of the specified portion of the array.
    * @param 结束 The end of the specified portion of the array.
    */

  //@@{ 分割:slice, 开始:start, 结束:end, 整数数组8_:Int8Array }
  分割(开始?: 数字, 结束?: 数字): 整数数组8_;

  /**
    * Determines whether the specified callback function returns true for any element of an array.
    * @param 回调函数 A function that accepts up to three arguments. The some method calls the
    * callbackfn function for each element in array1 until the callbackfn returns true, or until
    * the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 部分:some, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 整数数组8_:Int8Array, 本体参数:thisArg }
  部分(回调函数: (值: 数字, 索引: 数字, 数组: 整数数组8_) => 真假, 本体参数?: 任意): 真假;

  /**
    * Sorts an array.
    * @param 比较函数 The name of the function used to determine the order of the elements. If
    * omitted, the elements are sorted in ascending, ASCII character order.
    */

  //@@{ 排序:sort, 比较函数:compareFn }
  排序(比较函数?: (a: 数字, b: 数字) => 数字): 本体;

  /**
    * Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements
    * at begin, inclusive, up to end, exclusive.
    * @param 开始 The index of the beginning of the array.
    * @param 结束 The index of the end of the array.
    */

  //@@{ 子数组:subarray, 开始:begin, 结束:end, 整数数组8_:Int8Array }
  子数组(开始: 数字, 结束?: 数字): 整数数组8_;

  /**
    * Converts a number to a string by using the current locale.
    */

  //@@{ 转为本地文字:toLocaleString }
  转为本地文字(): 文字;

  /**
    * Returns a string representation of an array.
    */

  //@@{ 转为文字:toString }
  转为文字(): 文字;

  //@@{ 索引:index }
  [索引: 数字]: 数字;

}

//@@{ 整数数组8构造函数_:Int8ArrayConstructor }
接口 整数数组8构造函数_ {

  //@@{ 原型:prototype, 整数数组8_:Int8Array }
  只读 原型: 整数数组8_;

  //@@{ 长度:length, 整数数组8_:Int8Array }
  新建(长度: 数字): 整数数组8_;

  //@@{ 数组或数组缓冲区:arrayOrArrayBuffer, 数组等_:ArrayLike, 数组缓冲区等_:ArrayBufferLike, 整数数组8_:Int8Array }
  新建(数组或数组缓冲区: 数组等_<数字> | 数组缓冲区等_): 整数数组8_;

  //@@{ 缓冲:buffer, 数组缓冲区等_:ArrayBufferLike, 字节偏移:byteOffset, 长度:length, 整数数组8_:Int8Array }
  新建(缓冲: 数组缓冲区等_, 字节偏移: 数字, 长度?: 数字): 整数数组8_;

  /**
    * The size in bytes of each element in the array.
    */

  //@@{ __字节_每个_元素_大小__:BYTES_PER_ELEMENT }
  只读 __字节_每个_元素_大小__: 数字;

  /**
    * Returns a new array from a set of elements.
    * @param 项目 A set of elements to include in the new array object.
    */

  //@@{ 以元素:of, 项目:items, 整数数组8_:Int8Array }
  以元素(...项目: 数字[]): 整数数组8_;

  /**
    * Creates an array from an array-like or iterable object.
    * @param 数组等 An array-like or iterable object to convert to an array.
    * @param 映射回调 A mapping function to call on every element of the array.
    * @param 本体参数 Value of 'this' used to invoke the mapfn.
    */

  //@@{ 从对象:from, 数组等:arrayLike, 数组等_:ArrayLike, 映射回调:mapfn, 本体参数:thisArg, 整数数组8_:Int8Array }
  从对象(数组等: 数组等_<数字>, 映射回调?: (v: 数字, k: 数字) => 数字, 本体参数?: 任意): 整数数组8_;

}

//@@{ 整数数组8构造函数_:Int8ArrayConstructor }
声明 常量 整数数组8_: 整数数组8构造函数_;

/**
  * A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the
  * requested number of bytes could not be allocated an exception is raised.
  */

//@@{ 正整数数组8_:Uint8Array }
接口 正整数数组8_ {

  /**
    * The size in bytes of each element in the array.
    */

  //@@{ __字节_每个_元素_大小__:BYTES_PER_ELEMENT }
  只读 __字节_每个_元素_大小__: 数字;

  /**
    * The ArrayBuffer instance referenced by the array.
    */

  //@@{ 缓冲:buffer, 数组缓冲区等_:ArrayBufferLike }
  只读 缓冲: 数组缓冲区等_;

  /**
    * The length in bytes of the array.
    */

  //@@{ 字节长度:byteLength }
  只读 字节长度: 数字;

  /**
    * The offset in bytes of the array.
    */

  //@@{ 字节偏移:byteOffset }
  只读 字节偏移: 数字;

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

  /**
    * Determines whether all the members of an array satisfy the specified test.
    * @param 回调函数 A function that accepts up to three arguments. The every method calls
    * the callbackfn function for each element in array1 until the callbackfn returns false,
    * or until the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 每个:every, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 正整数数组8_:Uint8Array, 本体参数:thisArg }
  每个(回调函数: (值: 数字, 索引: 数字, 数组: 正整数数组8_) => 真假, 本体参数?: 任意): 真假;

  /**
      * Returns the this object after filling the section identified by start and end with value
      * @param 值 value to fill array section with
      * @param 开始 index to start filling the array at. If start is negative, it is treated as
      * length+start where length is the length of the array.
      * @param 结束 index to stop filling the array at. If end is negative, it is treated as
      * length+end.
      */

  //@@{ 填充:fill, 值:value, 开始:start, 结束:end }
  填充(值: 数字, 开始?: 数字, 结束?: 数字): 本体;

  /**
    * Returns the elements of an array that meet the condition specified in a callback function.
    * @param 回调函数 A function that accepts up to three arguments. The filter method calls
    * the callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 过滤:filter, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 正整数数组8_:Uint8Array, 本体参数:thisArg }
  过滤(回调函数: (值: 数字, 索引: 数字, 数组: 正整数数组8_) => 任意, 本体参数?: 任意): 正整数数组8_;

  /**
    * Returns the value of the first element in the array where predicate is true, and undefined
    * otherwise.
    * @param 条件 find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found, find
    * immediately returns that element value. Otherwise, find returns undefined.
    * @param 本体参数 If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */

  //@@{ 查找:find, 条件:predicate, 值:value, 索引:index, 对象:obj, 正整数数组8_:Uint8Array, 本体参数:thisArg }
  查找(条件: (值: 数字, 索引: 数字, 对象: 正整数数组8_) => 真假, 本体参数?: 任意): 数字 | 未定;

  /**
    * Returns the index of the first element in the array where predicate is true, and -1
    * otherwise.
    * @param 条件 find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found,
    * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
    * @param 本体参数 If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */

  //@@{ 查找索引:findIndex, 条件:predicate, 值:value, 索引:index, 对象:obj, 正整数数组8_:Uint8Array, 本体参数:thisArg }
  查找索引(条件: (值: 数字, 索引: 数字, 对象: 正整数数组8_) => 真假, 本体参数?: 任意): 数字;

  /**
    * Performs the specified action for each element in an array.
    * @param 回调函数  A function that accepts up to three arguments. forEach calls the
    * callbackfn function one time for each element in the array.
    * @param 本体参数  An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 循环执行:forEach, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 正整数数组8_:Uint8Array, 本体参数:thisArg }
  循环执行(回调函数: (值: 数字, 索引: 数字, 数组: 正整数数组8_) => 无值, 本体参数?: 任意): 无值;

  /**
    * Returns the index of the first occurrence of a value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the
    *  search starts at index 0.
    */

  //@@{ 索引位于:indexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  索引位于(搜索元素: 数字, 起始索引?: 数字): 数字;

  /**
    * Adds all the elements of an array separated by the specified separator string.
    * @param 分割符 A string used to separate one element of an array from the next in the
    * resulting String. If omitted, the array elements are separated with a comma.
    */

  //@@{ 连接:join, 分割符:separator }
  连接(分割符?: 文字): 文字;

  /**
    * Returns the index of the last occurrence of a value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the
    * search starts at index 0.
    */

  //@@{ 最后索引位于:lastIndexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  最后索引位于(搜索元素: 数字, 起始索引?: 数字): 数字;

  /**
    * The length of the array.
    */

  //@@{ 长度:length }
  只读 长度: 数字;

  /**
    * Calls a defined callback function on each element of an array, and returns an array that
    * contains the results.
    * @param 回调函数 A function that accepts up to three arguments. The map method calls the
    * callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 映射:map, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 正整数数组8_:Uint8Array, 本体参数:thisArg }
  映射(回调函数: (值: 数字, 索引: 数字, 数组: 正整数数组8_) => 数字, 本体参数?: 任意): 正整数数组8_;

  /**
    * Calls the specified callback function for all the elements in an array. The return value of
    * the callback function is the accumulated result, and is provided as an argument in the next
    * call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the
    * callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数数组8_:Uint8Array }
  累加(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 正整数数组8_) => 数字): 数字;

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数数组8_:Uint8Array, 初始值:initialValue }
  累加(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 正整数数组8_) => 数字, 初始值: 数字): 数字;

  /**
    * Calls the specified callback function for all the elements in an array. The return value of
    * the callback function is the accumulated result, and is provided as an argument in the next
    * call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the
    * callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数数组8_:Uint8Array, 初始值:initialValue }
  累加<U>(回调函数: (之前值: U, 当前值: 数字, 当前索引: 数字, 数组: 正整数数组8_) => U, 初始值: U): U;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order.
    * The return value of the callback function is the accumulated result, and is provided as an
    * argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls
    * the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an
    * argument instead of an array value.
    */

  //@@{ 累加右侧:reduceRight, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数数组8_:Uint8Array }
  累加右侧(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 正整数数组8_) => 数字): 数字;

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数数组8_:Uint8Array, 初始值:initialValue }
  累加右侧(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 正整数数组8_) => 数字, 初始值: 数字): 数字;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order.
    * The return value of the callback function is the accumulated result, and is provided as an
    * argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls
    * the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数数组8_:Uint8Array, 初始值:initialValue }
  累加右侧<U>(回调函数: (之前值: U, 当前值: 数字, 当前索引: 数字, 数组: 正整数数组8_) => U, 初始值: U): U;

  /**
    * Reverses the elements in an Array.
    */

  //@@{ 翻转:reverse, 正整数数组8_:Uint8Array }
  翻转(): 正整数数组8_;

  /**
    * Sets a value or an array of values.
    * @param 数组 A typed or untyped array of values to set.
    * @param 偏移 The index in the current array at which the values are to be written.
    */

  //@@{ 设置:set, 数组:array, 数组等_:ArrayLike, 偏移:offset }
  设置(数组: 数组等_<数字>, 偏移?: 数字): 无值;

  /**
    * Returns a section of an array.
    * @param 开始 The beginning of the specified portion of the array.
    * @param 结束 The end of the specified portion of the array.
    */

  //@@{ 分割:slice, 开始:start, 结束:end, 正整数数组8_:Uint8Array }
  分割(开始?: 数字, 结束?: 数字): 正整数数组8_;

  /**
    * Determines whether the specified callback function returns true for any element of an array.
    * @param 回调函数 A function that accepts up to three arguments. The some method calls the
    * callbackfn function for each element in array1 until the callbackfn returns true, or until
    * the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 部分:some, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 正整数数组8_:Uint8Array, 本体参数:thisArg }
  部分(回调函数: (值: 数字, 索引: 数字, 数组: 正整数数组8_) => 真假, 本体参数?: 任意): 真假;

  /**
    * Sorts an array.
    * @param 比较函数 The name of the function used to determine the order of the elements. If
    * omitted, the elements are sorted in ascending, ASCII character order.
    */

  //@@{ 排序:sort, 比较函数:compareFn }
  排序(比较函数?: (a: 数字, b: 数字) => 数字): 本体;

  /**
    * Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements
    * at begin, inclusive, up to end, exclusive.
    * @param 开始 The index of the beginning of the array.
    * @param 结束 The index of the end of the array.
    */

  //@@{ 子数组:subarray, 开始:begin, 结束:end, 正整数数组8_:Uint8Array }
  子数组(开始: 数字, 结束?: 数字): 正整数数组8_;

  /**
    * Converts a number to a string by using the current locale.
    */

  //@@{ 转为本地文字:toLocaleString }
  转为本地文字(): 文字;

  /**
    * Returns a string representation of an array.
    */

  //@@{ 转为文字:toString }
  转为文字(): 文字;

  //@@{ 索引:index }
  [索引: 数字]: 数字;

}

//@@{ 正整数数组8构造函数_:Uint8ArrayConstructor }
接口 正整数数组8构造函数_ {

  //@@{ 原型:prototype, 正整数数组8_:Uint8Array }
  只读 原型: 正整数数组8_;

  //@@{ 长度:length, 正整数数组8_:Uint8Array }
  新建(长度: 数字): 正整数数组8_;

  //@@{ 数组或数组缓冲区:arrayOrArrayBuffer, 数组等_:ArrayLike, 数组缓冲区等_:ArrayBufferLike, 正整数数组8_:Uint8Array }
  新建(数组或数组缓冲区: 数组等_<数字> | 数组缓冲区等_): 正整数数组8_;

  //@@{ 缓冲:buffer, 数组缓冲区等_:ArrayBufferLike, 字节偏移:byteOffset, 长度:length, 正整数数组8_:Uint8Array }
  新建(缓冲: 数组缓冲区等_, 字节偏移: 数字, 长度?: 数字): 正整数数组8_;

  /**
    * The size in bytes of each element in the array.
    */

  //@@{ __字节_每个_元素_大小__:BYTES_PER_ELEMENT }
  只读 __字节_每个_元素_大小__: 数字;

  /**
    * Returns a new array from a set of elements.
    * @param 项目 A set of elements to include in the new array object.
    */

  //@@{ 以元素:of, 项目:items, 正整数数组8_:Uint8Array }
  以元素(...项目: 数字[]): 正整数数组8_;

  /**
    * Creates an array from an array-like or iterable object.
    * @param 数组等 An array-like or iterable object to convert to an array.
    * @param 映射回调 A mapping function to call on every element of the array.
    * @param 本体参数 Value of 'this' used to invoke the mapfn.
    */

  //@@{ 从对象:from, 数组等:arrayLike, 数组等_:ArrayLike, 映射回调:mapfn, 本体参数:thisArg, 正整数数组8_:Uint8Array }
  从对象(数组等: 数组等_<数字>, 映射回调?: (v: 数字, k: 数字) => 数字, 本体参数?: 任意): 正整数数组8_;

}

//@@{ 整数数组8构造函数_:Int8ArrayConstructor }
声明 常量 正整数数组8_: 整数数组8构造函数_;

/**
  * A typed array of 8-bit unsigned integer (clamped) values. The contents are initialized to 0.
  * If the requested number of bytes could not be allocated an exception is raised.
  */

//@@{ 正整数固定数组8_:Uint8ClampedArray }
接口 正整数固定数组8_ {

  /**
    * The size in bytes of each element in the array.
    */

  //@@{ __字节_每个_元素_大小__:BYTES_PER_ELEMENT }
  只读 __字节_每个_元素_大小__: 数字;

  /**
    * The ArrayBuffer instance referenced by the array.
    */

  //@@{ 缓冲:buffer, 数组缓冲区等_:ArrayBufferLike }
  只读 缓冲: 数组缓冲区等_;

  /**
    * The length in bytes of the array.
    */

  //@@{ 字节长度:byteLength }
  只读 字节长度: 数字;

  /**
    * The offset in bytes of the array.
    */

  //@@{ 字节偏移:byteOffset }
  只读 字节偏移: 数字;

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

  /**
    * Determines whether all the members of an array satisfy the specified test.
    * @param 回调函数 A function that accepts up to three arguments. The every method calls
    * the callbackfn function for each element in array1 until the callbackfn returns false,
    * or until the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 每个:every, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 正整数固定数组8_:Uint8ClampedArray, 本体参数:thisArg }
  每个(回调函数: (值: 数字, 索引: 数字, 数组: 正整数固定数组8_) => 真假, 本体参数?: 任意): 真假;

  /**
      * Returns the this object after filling the section identified by start and end with value
      * @param 值 value to fill array section with
      * @param 开始 index to start filling the array at. If start is negative, it is treated as
      * length+start where length is the length of the array.
      * @param 结束 index to stop filling the array at. If end is negative, it is treated as
      * length+end.
      */

  //@@{ 填充:fill, 值:value, 开始:start, 结束:end }
  填充(值: 数字, 开始?: 数字, 结束?: 数字): 本体;

  /**
    * Returns the elements of an array that meet the condition specified in a callback function.
    * @param 回调函数 A function that accepts up to three arguments. The filter method calls
    * the callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 过滤:filter, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 正整数固定数组8_:Uint8ClampedArray, 本体参数:thisArg }
  过滤(回调函数: (值: 数字, 索引: 数字, 数组: 正整数固定数组8_) => 任意, 本体参数?: 任意): 正整数固定数组8_;

  /**
    * Returns the value of the first element in the array where predicate is true, and undefined
    * otherwise.
    * @param 条件 find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found, find
    * immediately returns that element value. Otherwise, find returns undefined.
    * @param 本体参数 If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */

  //@@{ 查找:find, 条件:predicate, 值:value, 索引:index, 对象:obj, 正整数固定数组8_:Uint8ClampedArray, 本体参数:thisArg }
  查找(条件: (值: 数字, 索引: 数字, 对象: 正整数固定数组8_) => 真假, 本体参数?: 任意): 数字 | 未定;

  /**
    * Returns the index of the first element in the array where predicate is true, and -1
    * otherwise.
    * @param 条件 find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found,
    * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
    * @param 本体参数 If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */

  //@@{ 查找索引:findIndex, 条件:predicate, 值:value, 索引:index, 对象:obj, 正整数固定数组8_:Uint8ClampedArray, 本体参数:thisArg }
  查找索引(条件: (值: 数字, 索引: 数字, 对象: 正整数固定数组8_) => 真假, 本体参数?: 任意): 数字;

  /**
    * Performs the specified action for each element in an array.
    * @param 回调函数  A function that accepts up to three arguments. forEach calls the
    * callbackfn function one time for each element in the array.
    * @param 本体参数  An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 循环执行:forEach, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 正整数固定数组8_:Uint8ClampedArray, 本体参数:thisArg }
  循环执行(回调函数: (值: 数字, 索引: 数字, 数组: 正整数固定数组8_) => 无值, 本体参数?: 任意): 无值;

  /**
    * Returns the index of the first occurrence of a value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the
    *  search starts at index 0.
    */

  //@@{ 索引位于:indexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  索引位于(搜索元素: 数字, 起始索引?: 数字): 数字;

  /**
    * Adds all the elements of an array separated by the specified separator string.
    * @param 分割符 A string used to separate one element of an array from the next in the
    * resulting String. If omitted, the array elements are separated with a comma.
    */

  //@@{ 连接:join, 分割符:separator }
  连接(分割符?: 文字): 文字;

  /**
    * Returns the index of the last occurrence of a value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the
    * search starts at index 0.
    */

  //@@{ 最后索引位于:lastIndexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  最后索引位于(搜索元素: 数字, 起始索引?: 数字): 数字;

  /**
    * The length of the array.
    */

  //@@{ 长度:length }
  只读 长度: 数字;

  /**
    * Calls a defined callback function on each element of an array, and returns an array that
    * contains the results.
    * @param 回调函数 A function that accepts up to three arguments. The map method calls the
    * callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 映射:map, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 正整数固定数组8_:Uint8ClampedArray, 本体参数:thisArg }
  映射(回调函数: (值: 数字, 索引: 数字, 数组: 正整数固定数组8_) => 数字, 本体参数?: 任意): 正整数固定数组8_;

  /**
    * Calls the specified callback function for all the elements in an array. The return value of
    * the callback function is the accumulated result, and is provided as an argument in the next
    * call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the
    * callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数固定数组8_:Uint8ClampedArray }
  累加(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 正整数固定数组8_) => 数字): 数字;

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数固定数组8_:Uint8ClampedArray, 初始值:initialValue }
  累加(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 正整数固定数组8_) => 数字, 初始值: 数字): 数字;

  /**
    * Calls the specified callback function for all the elements in an array. The return value of
    * the callback function is the accumulated result, and is provided as an argument in the next
    * call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the
    * callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数固定数组8_:Uint8ClampedArray, 初始值:initialValue }
  累加<U>(回调函数: (之前值: U, 当前值: 数字, 当前索引: 数字, 数组: 正整数固定数组8_) => U, 初始值: U): U;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order.
    * The return value of the callback function is the accumulated result, and is provided as an
    * argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls
    * the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an
    * argument instead of an array value.
    */

  //@@{ 累加右侧:reduceRight, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数固定数组8_:Uint8ClampedArray }
  累加右侧(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 正整数固定数组8_) => 数字): 数字;

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数固定数组8_:Uint8ClampedArray, 初始值:initialValue }
  累加右侧(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 正整数固定数组8_) => 数字, 初始值: 数字): 数字;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order.
    * The return value of the callback function is the accumulated result, and is provided as an
    * argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls
    * the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数固定数组8_:Uint8ClampedArray, 初始值:initialValue }
  累加右侧<U>(回调函数: (之前值: U, 当前值: 数字, 当前索引: 数字, 数组: 正整数固定数组8_) => U, 初始值: U): U;

  /**
    * Reverses the elements in an Array.
    */

  //@@{ 翻转:reverse, 正整数固定数组8_:Uint8ClampedArray }
  翻转(): 正整数固定数组8_;

  /**
    * Sets a value or an array of values.
    * @param 数组 A typed or untyped array of values to set.
    * @param 偏移 The index in the current array at which the values are to be written.
    */

  //@@{ 设置:set, 数组:array, 数组等_:ArrayLike, 偏移:offset }
  设置(数组: 数组等_<数字>, 偏移?: 数字): 无值;

  /**
    * Returns a section of an array.
    * @param 开始 The beginning of the specified portion of the array.
    * @param 结束 The end of the specified portion of the array.
    */

  //@@{ 分割:slice, 开始:start, 结束:end, 正整数固定数组8_:Uint8ClampedArray }
  分割(开始?: 数字, 结束?: 数字): 正整数固定数组8_;

  /**
    * Determines whether the specified callback function returns true for any element of an array.
    * @param 回调函数 A function that accepts up to three arguments. The some method calls the
    * callbackfn function for each element in array1 until the callbackfn returns true, or until
    * the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 部分:some, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 正整数固定数组8_:Uint8ClampedArray, 本体参数:thisArg }
  部分(回调函数: (值: 数字, 索引: 数字, 数组: 正整数固定数组8_) => 真假, 本体参数?: 任意): 真假;

  /**
    * Sorts an array.
    * @param 比较函数 The name of the function used to determine the order of the elements. If
    * omitted, the elements are sorted in ascending, ASCII character order.
    */

  //@@{ 排序:sort, 比较函数:compareFn }
  排序(比较函数?: (a: 数字, b: 数字) => 数字): 本体;

  /**
    * Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements
    * at begin, inclusive, up to end, exclusive.
    * @param 开始 The index of the beginning of the array.
    * @param 结束 The index of the end of the array.
    */

  //@@{ 子数组:subarray, 开始:begin, 结束:end, 正整数固定数组8_:Uint8ClampedArray }
  子数组(开始: 数字, 结束?: 数字): 正整数固定数组8_;

  /**
    * Converts a number to a string by using the current locale.
    */

  //@@{ 转为本地文字:toLocaleString }
  转为本地文字(): 文字;

  /**
    * Returns a string representation of an array.
    */

  //@@{ 转为文字:toString }
  转为文字(): 文字;

  //@@{ 索引:index }
  [索引: 数字]: 数字;

}

//@@{ 正整数固定数组8构造函数_:Uint8ClampedConstructor }
接口 正整数固定数组8构造函数_ {

  //@@{ 原型:prototype, 正整数固定数组8_:Uint8ClampedArray }
  只读 原型: 正整数固定数组8_;

  //@@{ 长度:length, 正整数固定数组8_:Uint8ClampedArray }
  新建(长度: 数字): 正整数固定数组8_;

  //@@{ 数组或数组缓冲区:arrayOrArrayBuffer, 数组等_:ArrayLike, 数组缓冲区等_:ArrayBufferLike, 正整数固定数组8_:Uint8ClampedArray }
  新建(数组或数组缓冲区: 数组等_<数字> | 数组缓冲区等_): 正整数固定数组8_;

  //@@{ 缓冲:buffer, 数组缓冲区等_:ArrayBufferLike, 字节偏移:byteOffset, 长度:length, 正整数固定数组8_:Uint8ClampedArray }
  新建(缓冲: 数组缓冲区等_, 字节偏移: 数字, 长度?: 数字): 正整数固定数组8_;

  /**
    * The size in bytes of each element in the array.
    */

  //@@{ __字节_每个_元素_大小__:BYTES_PER_ELEMENT }
  只读 __字节_每个_元素_大小__: 数字;

  /**
    * Returns a new array from a set of elements.
    * @param 项目 A set of elements to include in the new array object.
    */

  //@@{ 以元素:of, 项目:items, 正整数固定数组8_:Uint8ClampedArray }
  以元素(...项目: 数字[]): 正整数固定数组8_;

  /**
    * Creates an array from an array-like or iterable object.
    * @param 数组等 An array-like or iterable object to convert to an array.
    * @param 映射回调 A mapping function to call on every element of the array.
    * @param 本体参数 Value of 'this' used to invoke the mapfn.
    */

  //@@{ 从对象:from, 数组等:arrayLike, 数组等_:ArrayLike, 映射回调:mapfn, 本体参数:thisArg, 正整数固定数组8_:Uint8ClampedArray }
  从对象(数组等: 数组等_<数字>, 映射回调?: (v: 数字, k: 数字) => 数字, 本体参数?: 任意): 正整数固定数组8_;

}

//@@{ 正整数固定数组8构造函数_:Uint8ClampedArrayConstructor }
声明 常量 正整数固定数组8_: 正整数固定数组8构造函数_;

/**
  * A typed array of 16-bit signed integer values. The contents are initialized to 0. If the
  * requested number of bytes could not be allocated an exception is raised.
  */

//@@{ 整数数组16_:Int16Array }
接口 整数数组16_ {

  /**
    * The size in bytes of each element in the array.
    */

  //@@{ __字节_每个_元素_大小__:BYTES_PER_ELEMENT }
  只读 __字节_每个_元素_大小__: 数字;

  /**
    * The ArrayBuffer instance referenced by the array.
    */

  //@@{ 缓冲:buffer, 数组缓冲区等_:ArrayBufferLike }
  只读 缓冲: 数组缓冲区等_;

  /**
    * The length in bytes of the array.
    */

  //@@{ 字节长度:byteLength }
  只读 字节长度: 数字;

  /**
    * The offset in bytes of the array.
    */

  //@@{ 字节偏移:byteOffset }
  只读 字节偏移: 数字;

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

  /**
    * Determines whether all the members of an array satisfy the specified test.
    * @param 回调函数 A function that accepts up to three arguments. The every method calls
    * the callbackfn function for each element in array1 until the callbackfn returns false,
    * or until the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 每个:every, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 整数数组16_:Int16Array, 本体参数:thisArg }
  每个(回调函数: (值: 数字, 索引: 数字, 数组: 整数数组16_) => 真假, 本体参数?: 任意): 真假;

  /**
      * Returns the this object after filling the section identified by start and end with value
      * @param 值 value to fill array section with
      * @param 开始 index to start filling the array at. If start is negative, it is treated as
      * length+start where length is the length of the array.
      * @param 结束 index to stop filling the array at. If end is negative, it is treated as
      * length+end.
      */

  //@@{ 填充:fill, 值:value, 开始:start, 结束:end }
  填充(值: 数字, 开始?: 数字, 结束?: 数字): 本体;

  /**
    * Returns the elements of an array that meet the condition specified in a callback function.
    * @param 回调函数 A function that accepts up to three arguments. The filter method calls
    * the callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 过滤:filter, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 整数数组16_:Int16Array, 本体参数:thisArg }
  过滤(回调函数: (值: 数字, 索引: 数字, 数组: 整数数组16_) => 任意, 本体参数?: 任意): 整数数组16_;

  /**
    * Returns the value of the first element in the array where predicate is true, and undefined
    * otherwise.
    * @param 条件 find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found, find
    * immediately returns that element value. Otherwise, find returns undefined.
    * @param 本体参数 If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */

  //@@{ 查找:find, 条件:predicate, 值:value, 索引:index, 对象:obj, 整数数组16_:Int16Array, 本体参数:thisArg }
  查找(条件: (值: 数字, 索引: 数字, 对象: 整数数组16_) => 真假, 本体参数?: 任意): 数字 | 未定;

  /**
    * Returns the index of the first element in the array where predicate is true, and -1
    * otherwise.
    * @param 条件 find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found,
    * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
    * @param 本体参数 If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */

  //@@{ 查找索引:findIndex, 条件:predicate, 值:value, 索引:index, 对象:obj, 整数数组16_:Int16Array, 本体参数:thisArg }
  查找索引(条件: (值: 数字, 索引: 数字, 对象: 整数数组16_) => 真假, 本体参数?: 任意): 数字;

  /**
    * Performs the specified action for each element in an array.
    * @param 回调函数  A function that accepts up to three arguments. forEach calls the
    * callbackfn function one time for each element in the array.
    * @param 本体参数  An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 循环执行:forEach, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 整数数组16_:Int16Array, 本体参数:thisArg }
  循环执行(回调函数: (值: 数字, 索引: 数字, 数组: 整数数组16_) => 无值, 本体参数?: 任意): 无值;

  /**
    * Returns the index of the first occurrence of a value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the
    *  search starts at index 0.
    */

  //@@{ 索引位于:indexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  索引位于(搜索元素: 数字, 起始索引?: 数字): 数字;

  /**
    * Adds all the elements of an array separated by the specified separator string.
    * @param 分割符 A string used to separate one element of an array from the next in the
    * resulting String. If omitted, the array elements are separated with a comma.
    */

  //@@{ 连接:join, 分割符:separator }
  连接(分割符?: 文字): 文字;

  /**
    * Returns the index of the last occurrence of a value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the
    * search starts at index 0.
    */

  //@@{ 最后索引位于:lastIndexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  最后索引位于(搜索元素: 数字, 起始索引?: 数字): 数字;

  /**
    * The length of the array.
    */

  //@@{ 长度:length }
  只读 长度: 数字;

  /**
    * Calls a defined callback function on each element of an array, and returns an array that
    * contains the results.
    * @param 回调函数 A function that accepts up to three arguments. The map method calls the
    * callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 映射:map, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 整数数组16_:Int16Array, 本体参数:thisArg }
  映射(回调函数: (值: 数字, 索引: 数字, 数组: 整数数组16_) => 数字, 本体参数?: 任意): 整数数组16_;

  /**
    * Calls the specified callback function for all the elements in an array. The return value of
    * the callback function is the accumulated result, and is provided as an argument in the next
    * call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the
    * callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 整数数组16_:Int16Array }
  累加(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 整数数组16_) => 数字): 数字;

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 整数数组16_:Int16Array, 初始值:initialValue }
  累加(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 整数数组16_) => 数字, 初始值: 数字): 数字;

  /**
    * Calls the specified callback function for all the elements in an array. The return value of
    * the callback function is the accumulated result, and is provided as an argument in the next
    * call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the
    * callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 整数数组16_:Int16Array, 初始值:initialValue }
  累加<U>(回调函数: (之前值: U, 当前值: 数字, 当前索引: 数字, 数组: 整数数组16_) => U, 初始值: U): U;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order.
    * The return value of the callback function is the accumulated result, and is provided as an
    * argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls
    * the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an
    * argument instead of an array value.
    */

  //@@{ 累加右侧:reduceRight, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 整数数组16_:Int16Array }
  累加右侧(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 整数数组16_) => 数字): 数字;

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 整数数组16_:Int16Array, 初始值:initialValue }
  累加右侧(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 整数数组16_) => 数字, 初始值: 数字): 数字;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order.
    * The return value of the callback function is the accumulated result, and is provided as an
    * argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls
    * the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 整数数组16_:Int16Array, 初始值:initialValue }
  累加右侧<U>(回调函数: (之前值: U, 当前值: 数字, 当前索引: 数字, 数组: 整数数组16_) => U, 初始值: U): U;

  /**
    * Reverses the elements in an Array.
    */

  //@@{ 翻转:reverse, 整数数组16_:Int16Array }
  翻转(): 整数数组16_;

  /**
    * Sets a value or an array of values.
    * @param 数组 A typed or untyped array of values to set.
    * @param 偏移 The index in the current array at which the values are to be written.
    */

  //@@{ 设置:set, 数组:array, 数组等_:ArrayLike, 偏移:offset }
  设置(数组: 数组等_<数字>, 偏移?: 数字): 无值;

  /**
    * Returns a section of an array.
    * @param 开始 The beginning of the specified portion of the array.
    * @param 结束 The end of the specified portion of the array.
    */

  //@@{ 分割:slice, 开始:start, 结束:end, 整数数组16_:Int16Array }
  分割(开始?: 数字, 结束?: 数字): 整数数组16_;

  /**
    * Determines whether the specified callback function returns true for any element of an array.
    * @param 回调函数 A function that accepts up to three arguments. The some method calls the
    * callbackfn function for each element in array1 until the callbackfn returns true, or until
    * the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 部分:some, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 整数数组16_:Int16Array, 本体参数:thisArg }
  部分(回调函数: (值: 数字, 索引: 数字, 数组: 整数数组16_) => 真假, 本体参数?: 任意): 真假;

  /**
    * Sorts an array.
    * @param 比较函数 The name of the function used to determine the order of the elements. If
    * omitted, the elements are sorted in ascending, ASCII character order.
    */

  //@@{ 排序:sort, 比较函数:compareFn }
  排序(比较函数?: (a: 数字, b: 数字) => 数字): 本体;

  /**
    * Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements
    * at begin, inclusive, up to end, exclusive.
    * @param 开始 The index of the beginning of the array.
    * @param 结束 The index of the end of the array.
    */

  //@@{ 子数组:subarray, 开始:begin, 结束:end, 整数数组16_:Int16Array }
  子数组(开始: 数字, 结束?: 数字): 整数数组16_;

  /**
    * Converts a number to a string by using the current locale.
    */

  //@@{ 转为本地文字:toLocaleString }
  转为本地文字(): 文字;

  /**
    * Returns a string representation of an array.
    */

  //@@{ 转为文字:toString }
  转为文字(): 文字;

  //@@{ 索引:index }
  [索引: 数字]: 数字;

}

//@@{ 整数数组16构造函数_:Int16ArrayConstructor }
接口 整数数组16构造函数_ {

  //@@{ 原型:prototype, 整数数组16_:Int16Array }
  只读 原型: 整数数组16_;

  //@@{ 长度:length, 整数数组16_:Int16Array }
  新建(长度: 数字): 整数数组16_;

  //@@{ 数组或数组缓冲区:arrayOrArrayBuffer, 数组等_:ArrayLike, 数组缓冲区等_:ArrayBufferLike, 整数数组16_:Int16Array }
  新建(数组或数组缓冲区: 数组等_<数字> | 数组缓冲区等_): 整数数组16_;

  //@@{ 缓冲:buffer, 数组缓冲区等_:ArrayBufferLike, 字节偏移:byteOffset, 长度:length, 整数数组16_:Int16Array }
  新建(缓冲: 数组缓冲区等_, 字节偏移: 数字, 长度?: 数字): 整数数组16_;

  /**
    * The size in bytes of each element in the array.
    */

  //@@{ __字节_每个_元素_大小__:BYTES_PER_ELEMENT }
  只读 __字节_每个_元素_大小__: 数字;

  /**
    * Returns a new array from a set of elements.
    * @param 项目 A set of elements to include in the new array object.
    */

  //@@{ 以元素:of, 项目:items, 整数数组16_:Int16Array }
  以元素(...项目: 数字[]): 整数数组16_;

  /**
    * Creates an array from an array-like or iterable object.
    * @param 数组等 An array-like or iterable object to convert to an array.
    * @param 映射回调 A mapping function to call on every element of the array.
    * @param 本体参数 Value of 'this' used to invoke the mapfn.
    */

  //@@{ 从对象:from, 数组等:arrayLike, 数组等_:ArrayLike, 映射回调:mapfn, 本体参数:thisArg, 整数数组16_:Int16Array }
  从对象(数组等: 数组等_<数字>, 映射回调?: (v: 数字, k: 数字) => 数字, 本体参数?: 任意): 整数数组16_;

}

//@@{ 整数数组16构造函数_:Int16ArrayConstructor }
声明 常量 整数数组16_: 整数数组16构造函数_;

/**
  * A typed array of 16-bit unsigned integer values. The contents are initialized to 0. If the
  * requested number of bytes could not be allocated an exception is raised.
  */

//@@{ 正整数数组16_:Uint16Array }
接口 正整数数组16_ {

  /**
    * The size in bytes of each element in the array.
    */

  //@@{ __字节_每个_元素_大小__:BYTES_PER_ELEMENT }
  只读 __字节_每个_元素_大小__: 数字;

  /**
    * The ArrayBuffer instance referenced by the array.
    */

  //@@{ 缓冲:buffer, 数组缓冲区等_:ArrayBufferLike }
  只读 缓冲: 数组缓冲区等_;

  /**
    * The length in bytes of the array.
    */

  //@@{ 字节长度:byteLength }
  只读 字节长度: 数字;

  /**
    * The offset in bytes of the array.
    */

  //@@{ 字节偏移:byteOffset }
  只读 字节偏移: 数字;

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

  /**
    * Determines whether all the members of an array satisfy the specified test.
    * @param 回调函数 A function that accepts up to three arguments. The every method calls
    * the callbackfn function for each element in array1 until the callbackfn returns false,
    * or until the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 每个:every, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 正整数数组16_:Uint16Array, 本体参数:thisArg }
  每个(回调函数: (值: 数字, 索引: 数字, 数组: 正整数数组16_) => 真假, 本体参数?: 任意): 真假;

  /**
      * Returns the this object after filling the section identified by start and end with value
      * @param 值 value to fill array section with
      * @param 开始 index to start filling the array at. If start is negative, it is treated as
      * length+start where length is the length of the array.
      * @param 结束 index to stop filling the array at. If end is negative, it is treated as
      * length+end.
      */

  //@@{ 填充:fill, 值:value, 开始:start, 结束:end }
  填充(值: 数字, 开始?: 数字, 结束?: 数字): 本体;

  /**
    * Returns the elements of an array that meet the condition specified in a callback function.
    * @param 回调函数 A function that accepts up to three arguments. The filter method calls
    * the callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 过滤:filter, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 正整数数组16_:Uint16Array, 本体参数:thisArg }
  过滤(回调函数: (值: 数字, 索引: 数字, 数组: 正整数数组16_) => 任意, 本体参数?: 任意): 正整数数组16_;

  /**
    * Returns the value of the first element in the array where predicate is true, and undefined
    * otherwise.
    * @param 条件 find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found, find
    * immediately returns that element value. Otherwise, find returns undefined.
    * @param 本体参数 If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */

  //@@{ 查找:find, 条件:predicate, 值:value, 索引:index, 对象:obj, 正整数数组16_:Uint16Array, 本体参数:thisArg }
  查找(条件: (值: 数字, 索引: 数字, 对象: 正整数数组16_) => 真假, 本体参数?: 任意): 数字 | 未定;

  /**
    * Returns the index of the first element in the array where predicate is true, and -1
    * otherwise.
    * @param 条件 find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found,
    * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
    * @param 本体参数 If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */

  //@@{ 查找索引:findIndex, 条件:predicate, 值:value, 索引:index, 对象:obj, 正整数数组16_:Uint16Array, 本体参数:thisArg }
  查找索引(条件: (值: 数字, 索引: 数字, 对象: 正整数数组16_) => 真假, 本体参数?: 任意): 数字;

  /**
    * Performs the specified action for each element in an array.
    * @param 回调函数  A function that accepts up to three arguments. forEach calls the
    * callbackfn function one time for each element in the array.
    * @param 本体参数  An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 循环执行:forEach, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 正整数数组16_:Uint16Array, 本体参数:thisArg }
  循环执行(回调函数: (值: 数字, 索引: 数字, 数组: 正整数数组16_) => 无值, 本体参数?: 任意): 无值;

  /**
    * Returns the index of the first occurrence of a value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the
    *  search starts at index 0.
    */

  //@@{ 索引位于:indexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  索引位于(搜索元素: 数字, 起始索引?: 数字): 数字;

  /**
    * Adds all the elements of an array separated by the specified separator string.
    * @param 分割符 A string used to separate one element of an array from the next in the
    * resulting String. If omitted, the array elements are separated with a comma.
    */

  //@@{ 连接:join, 分割符:separator }
  连接(分割符?: 文字): 文字;

  /**
    * Returns the index of the last occurrence of a value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the
    * search starts at index 0.
    */

  //@@{ 最后索引位于:lastIndexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  最后索引位于(搜索元素: 数字, 起始索引?: 数字): 数字;

  /**
    * The length of the array.
    */

  //@@{ 长度:length }
  只读 长度: 数字;

  /**
    * Calls a defined callback function on each element of an array, and returns an array that
    * contains the results.
    * @param 回调函数 A function that accepts up to three arguments. The map method calls the
    * callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 映射:map, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 正整数数组16_:Uint16Array, 本体参数:thisArg }
  映射(回调函数: (值: 数字, 索引: 数字, 数组: 正整数数组16_) => 数字, 本体参数?: 任意): 正整数数组16_;

  /**
    * Calls the specified callback function for all the elements in an array. The return value of
    * the callback function is the accumulated result, and is provided as an argument in the next
    * call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the
    * callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数数组16_:Uint16Array }
  累加(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 正整数数组16_) => 数字): 数字;

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数数组16_:Uint16Array, 初始值:initialValue }
  累加(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 正整数数组16_) => 数字, 初始值: 数字): 数字;

  /**
    * Calls the specified callback function for all the elements in an array. The return value of
    * the callback function is the accumulated result, and is provided as an argument in the next
    * call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the
    * callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数数组16_:Uint16Array, 初始值:initialValue }
  累加<U>(回调函数: (之前值: U, 当前值: 数字, 当前索引: 数字, 数组: 正整数数组16_) => U, 初始值: U): U;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order.
    * The return value of the callback function is the accumulated result, and is provided as an
    * argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls
    * the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an
    * argument instead of an array value.
    */

  //@@{ 累加右侧:reduceRight, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数数组16_:Uint16Array }
  累加右侧(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 正整数数组16_) => 数字): 数字;

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数数组16_:Uint16Array, 初始值:initialValue }
  累加右侧(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 正整数数组16_) => 数字, 初始值: 数字): 数字;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order.
    * The return value of the callback function is the accumulated result, and is provided as an
    * argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls
    * the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数数组16_:Uint16Array, 初始值:initialValue }
  累加右侧<U>(回调函数: (之前值: U, 当前值: 数字, 当前索引: 数字, 数组: 正整数数组16_) => U, 初始值: U): U;

  /**
    * Reverses the elements in an Array.
    */

  //@@{ 翻转:reverse, 正整数数组16_:Uint16Array }
  翻转(): 正整数数组16_;

  /**
    * Sets a value or an array of values.
    * @param 数组 A typed or untyped array of values to set.
    * @param 偏移 The index in the current array at which the values are to be written.
    */

  //@@{ 设置:set, 数组:array, 数组等_:ArrayLike, 偏移:offset }
  设置(数组: 数组等_<数字>, 偏移?: 数字): 无值;

  /**
    * Returns a section of an array.
    * @param 开始 The beginning of the specified portion of the array.
    * @param 结束 The end of the specified portion of the array.
    */

  //@@{ 分割:slice, 开始:start, 结束:end, 正整数数组16_:Uint16Array }
  分割(开始?: 数字, 结束?: 数字): 正整数数组16_;

  /**
    * Determines whether the specified callback function returns true for any element of an array.
    * @param 回调函数 A function that accepts up to three arguments. The some method calls the
    * callbackfn function for each element in array1 until the callbackfn returns true, or until
    * the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 部分:some, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 正整数数组16_:Uint16Array, 本体参数:thisArg }
  部分(回调函数: (值: 数字, 索引: 数字, 数组: 正整数数组16_) => 真假, 本体参数?: 任意): 真假;

  /**
    * Sorts an array.
    * @param 比较函数 The name of the function used to determine the order of the elements. If
    * omitted, the elements are sorted in ascending, ASCII character order.
    */

  //@@{ 排序:sort, 比较函数:compareFn }
  排序(比较函数?: (a: 数字, b: 数字) => 数字): 本体;

  /**
    * Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements
    * at begin, inclusive, up to end, exclusive.
    * @param 开始 The index of the beginning of the array.
    * @param 结束 The index of the end of the array.
    */

  //@@{ 子数组:subarray, 开始:begin, 结束:end, 正整数数组16_:Uint16Array }
  子数组(开始: 数字, 结束?: 数字): 正整数数组16_;

  /**
    * Converts a number to a string by using the current locale.
    */

  //@@{ 转为本地文字:toLocaleString }
  转为本地文字(): 文字;

  /**
    * Returns a string representation of an array.
    */

  //@@{ 转为文字:toString }
  转为文字(): 文字;

  //@@{ 索引:index }
  [索引: 数字]: 数字;

}

//@@{ 正整数数组16构造函数_:Uint16ArrayConstructor }
接口 正整数数组16构造函数_ {

  //@@{ 原型:prototype, 正整数数组16_:Uint16Array }
  只读 原型: 正整数数组16_;

  //@@{ 长度:length, 正整数数组16_:Uint16Array }
  新建(长度: 数字): 正整数数组16_;

  //@@{ 数组或数组缓冲区:arrayOrArrayBuffer, 数组等_:ArrayLike, 数组缓冲区等_:ArrayBufferLike, 正整数数组16_:Uint16Array }
  新建(数组或数组缓冲区: 数组等_<数字> | 数组缓冲区等_): 正整数数组16_;

  //@@{ 缓冲:buffer, 数组缓冲区等_:ArrayBufferLike, 字节偏移:byteOffset, 长度:length, 正整数数组16_:Uint16Array }
  新建(缓冲: 数组缓冲区等_, 字节偏移: 数字, 长度?: 数字): 正整数数组16_;

  /**
    * The size in bytes of each element in the array.
    */

  //@@{ __字节_每个_元素_大小__:BYTES_PER_ELEMENT }
  只读 __字节_每个_元素_大小__: 数字;

  /**
    * Returns a new array from a set of elements.
    * @param 项目 A set of elements to include in the new array object.
    */

  //@@{ 以元素:of, 项目:items, 正整数数组16_:Uint16Array }
  以元素(...项目: 数字[]): 正整数数组16_;

  /**
    * Creates an array from an array-like or iterable object.
    * @param 数组等 An array-like or iterable object to convert to an array.
    * @param 映射回调 A mapping function to call on every element of the array.
    * @param 本体参数 Value of 'this' used to invoke the mapfn.
    */

  //@@{ 从对象:from, 数组等:arrayLike, 数组等_:ArrayLike, 映射回调:mapfn, 本体参数:thisArg, 正整数数组16_:Uint16Array }
  从对象(数组等: 数组等_<数字>, 映射回调?: (v: 数字, k: 数字) => 数字, 本体参数?: 任意): 正整数数组16_;

}

//@@{ 正整数数组16构造函数_:Uint16ArrayConstructor }
声明 常量 正整数数组16_: 正整数数组16构造函数_;

/**
  * A typed array of 32-bit signed integer values. The contents are initialized to 0. If the
  * requested number of bytes could not be allocated an exception is raised.
  */

//@@{ 整数数组32_:Int32Array }
接口 整数数组32_ {

  /**
    * The size in bytes of each element in the array.
    */

  //@@{ __字节_每个_元素_大小__:BYTES_PER_ELEMENT }
  只读 __字节_每个_元素_大小__: 数字;

  /**
    * The ArrayBuffer instance referenced by the array.
    */

  //@@{ 缓冲:buffer, 数组缓冲区等_:ArrayBufferLike }
  只读 缓冲: 数组缓冲区等_;

  /**
    * The length in bytes of the array.
    */

  //@@{ 字节长度:byteLength }
  只读 字节长度: 数字;

  /**
    * The offset in bytes of the array.
    */

  //@@{ 字节偏移:byteOffset }
  只读 字节偏移: 数字;

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

  /**
    * Determines whether all the members of an array satisfy the specified test.
    * @param 回调函数 A function that accepts up to three arguments. The every method calls
    * the callbackfn function for each element in array1 until the callbackfn returns false,
    * or until the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 每个:every, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 整数数组32_:Int32Array, 本体参数:thisArg }
  每个(回调函数: (值: 数字, 索引: 数字, 数组: 整数数组32_) => 真假, 本体参数?: 任意): 真假;

  /**
      * Returns the this object after filling the section identified by start and end with value
      * @param 值 value to fill array section with
      * @param 开始 index to start filling the array at. If start is negative, it is treated as
      * length+start where length is the length of the array.
      * @param 结束 index to stop filling the array at. If end is negative, it is treated as
      * length+end.
      */

  //@@{ 填充:fill, 值:value, 开始:start, 结束:end }
  填充(值: 数字, 开始?: 数字, 结束?: 数字): 本体;

  /**
    * Returns the elements of an array that meet the condition specified in a callback function.
    * @param 回调函数 A function that accepts up to three arguments. The filter method calls
    * the callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 过滤:filter, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 整数数组32_:Int32Array, 本体参数:thisArg }
  过滤(回调函数: (值: 数字, 索引: 数字, 数组: 整数数组32_) => 任意, 本体参数?: 任意): 整数数组32_;

  /**
    * Returns the value of the first element in the array where predicate is true, and undefined
    * otherwise.
    * @param 条件 find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found, find
    * immediately returns that element value. Otherwise, find returns undefined.
    * @param 本体参数 If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */

  //@@{ 查找:find, 条件:predicate, 值:value, 索引:index, 对象:obj, 整数数组32_:Int32Array, 本体参数:thisArg }
  查找(条件: (值: 数字, 索引: 数字, 对象: 整数数组32_) => 真假, 本体参数?: 任意): 数字 | 未定;

  /**
    * Returns the index of the first element in the array where predicate is true, and -1
    * otherwise.
    * @param 条件 find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found,
    * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
    * @param 本体参数 If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */

  //@@{ 查找索引:findIndex, 条件:predicate, 值:value, 索引:index, 对象:obj, 整数数组32_:Int32Array, 本体参数:thisArg }
  查找索引(条件: (值: 数字, 索引: 数字, 对象: 整数数组32_) => 真假, 本体参数?: 任意): 数字;

  /**
    * Performs the specified action for each element in an array.
    * @param 回调函数  A function that accepts up to three arguments. forEach calls the
    * callbackfn function one time for each element in the array.
    * @param 本体参数  An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 循环执行:forEach, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 整数数组32_:Int32Array, 本体参数:thisArg }
  循环执行(回调函数: (值: 数字, 索引: 数字, 数组: 整数数组32_) => 无值, 本体参数?: 任意): 无值;

  /**
    * Returns the index of the first occurrence of a value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the
    *  search starts at index 0.
    */

  //@@{ 索引位于:indexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  索引位于(搜索元素: 数字, 起始索引?: 数字): 数字;

  /**
    * Adds all the elements of an array separated by the specified separator string.
    * @param 分割符 A string used to separate one element of an array from the next in the
    * resulting String. If omitted, the array elements are separated with a comma.
    */

  //@@{ 连接:join, 分割符:separator }
  连接(分割符?: 文字): 文字;

  /**
    * Returns the index of the last occurrence of a value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the
    * search starts at index 0.
    */

  //@@{ 最后索引位于:lastIndexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  最后索引位于(搜索元素: 数字, 起始索引?: 数字): 数字;

  /**
    * The length of the array.
    */

  //@@{ 长度:length }
  只读 长度: 数字;

  /**
    * Calls a defined callback function on each element of an array, and returns an array that
    * contains the results.
    * @param 回调函数 A function that accepts up to three arguments. The map method calls the
    * callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 映射:map, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 整数数组32_:Int32Array, 本体参数:thisArg }
  映射(回调函数: (值: 数字, 索引: 数字, 数组: 整数数组32_) => 数字, 本体参数?: 任意): 整数数组32_;

  /**
    * Calls the specified callback function for all the elements in an array. The return value of
    * the callback function is the accumulated result, and is provided as an argument in the next
    * call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the
    * callbackfn function one time for each element in the array.
    * @param 回调函数 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 整数数组32_:Int32Array }
  累加(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 整数数组32_) => 数字): 数字;

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 整数数组32_:Int32Array, 初始值:initialValue }
  累加(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 整数数组32_) => 数字, 初始值: 数字): 数字;

  /**
    * Calls the specified callback function for all the elements in an array. The return value of
    * the callback function is the accumulated result, and is provided as an argument in the next
    * call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the
    * callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 整数数组32_:Int32Array, 初始值:initialValue }
  累加<U>(回调函数: (之前值: U, 当前值: 数字, 当前索引: 数字, 数组: 整数数组32_) => U, 初始值: U): U;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order.
    * The return value of the callback function is the accumulated result, and is provided as an
    * argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls
    * the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an
    * argument instead of an array value.
    */

  //@@{ 累加右侧:reduceRight, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 整数数组32_:Int32Array }
  累加右侧(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 整数数组32_) => 数字): 数字;

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 整数数组32_:Int32Array, 初始值:initialValue }
  累加右侧(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 整数数组32_) => 数字, 初始值: 数字): 数字;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order.
    * The return value of the callback function is the accumulated result, and is provided as an
    * argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls
    * the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 整数数组32_:Int32Array, 初始值:initialValue }
  累加右侧<U>(回调函数: (之前值: U, 当前值: 数字, 当前索引: 数字, 数组: 整数数组32_) => U, 初始值: U): U;

  /**
    * Reverses the elements in an Array.
    */

  //@@{ 翻转:reverse, 整数数组32_:Int32Array }
  翻转(): 整数数组32_;

  /**
    * Sets a value or an array of values.
    * @param 数组 A typed or untyped array of values to set.
    * @param 偏移 The index in the current array at which the values are to be written.
    */

  //@@{ 设置:set, 数组:array, 数组等_:ArrayLike, 偏移:offset }
  设置(数组: 数组等_<数字>, 偏移?: 数字): 无值;

  /**
    * Returns a section of an array.
    * @param 开始 The beginning of the specified portion of the array.
    * @param 结束 The end of the specified portion of the array.
    */

  //@@{ 分割:slice, 开始:start, 结束:end, 整数数组32_:Int32Array }
  分割(开始?: 数字, 结束?: 数字): 整数数组32_;

  /**
    * Determines whether the specified callback function returns true for any element of an array.
    * @param 回调函数 A function that accepts up to three arguments. The some method calls the
    * callbackfn function for each element in array1 until the callbackfn returns true, or until
    * the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 部分:some, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 整数数组32_:Int32Array, 本体参数:thisArg }
  部分(回调函数: (值: 数字, 索引: 数字, 数组: 整数数组32_) => 真假, 本体参数?: 任意): 真假;

  /**
    * Sorts an array.
    * @param 比较函数 The name of the function used to determine the order of the elements. If
    * omitted, the elements are sorted in ascending, ASCII character order.
    */

  //@@{ 排序:sort, 比较函数:compareFn }
  排序(比较函数?: (a: 数字, b: 数字) => 数字): 本体;

  /**
    * Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements
    * at begin, inclusive, up to end, exclusive.
    * @param 开始 The index of the beginning of the array.
    * @param 结束 The index of the end of the array.
    */

  //@@{ 子数组:subarray, 开始:begin, 结束:end, 整数数组32_:Int32Array }
  子数组(开始: 数字, 结束?: 数字): 整数数组32_;

  /**
    * Converts a number to a string by using the current locale.
    */

  //@@{ 转为本地文字:toLocaleString }
  转为本地文字(): 文字;

  /**
    * Returns a string representation of an array.
    */

  //@@{ 转为文字:toString }
  转为文字(): 文字;

  //@@{ 索引:index }
  [索引: 数字]: 数字;

}

//@@{ 整数数组32构造函数_:Int32ArrayConstructor }
接口 整数数组32构造函数_ {

  //@@{ 原型:prototype, 整数数组32_:Int32Array }
  只读 原型: 整数数组32_;

  //@@{ 长度:length, 整数数组32_:Int32Array }
  新建(长度: 数字): 整数数组32_;

  //@@{ 数组或数组缓冲区:arrayOrArrayBuffer, 数组等_:ArrayLike, 数组缓冲区等_:ArrayBufferLike, 整数数组32_:Int32Array }
  新建(数组或数组缓冲区: 数组等_<数字> | 数组缓冲区等_): 整数数组32_;

  //@@{ 缓冲:buffer, 数组缓冲区等_:ArrayBufferLike, 字节偏移:byteOffset, 长度:length, 整数数组32_:Int32Array }
  新建(缓冲: 数组缓冲区等_, 字节偏移: 数字, 长度?: 数字): 整数数组32_;

  /**
    * The size in bytes of each element in the array.
    */

  //@@{ __字节_每个_元素_大小__:BYTES_PER_ELEMENT }
  只读 __字节_每个_元素_大小__: 数字;

  /**
    * Returns a new array from a set of elements.
    * @param 项目 A set of elements to include in the new array object.
    */

  //@@{ 以元素:of, 项目:items, 整数数组32_:Int32Array }
  以元素(...项目: 数字[]): 整数数组32_;

  /**
    * Creates an array from an array-like or iterable object.
    * @param 数组等 An array-like or iterable object to convert to an array.
    * @param 映射回调 A mapping function to call on every element of the array.
    * @param 本体参数 Value of 'this' used to invoke the mapfn.
    */

  //@@{ 从对象:from, 数组等:arrayLike, 数组等_:ArrayLike, 映射回调:mapfn, 本体参数:thisArg, 整数数组32_:Int32Array }
  从对象(数组等: 数组等_<数字>, 映射回调?: (v: 数字, k: 数字) => 数字, 本体参数?: 任意): 整数数组32_;

}

//@@{ 整数数组32构造函数_:Int32ArrayConstructor }
声明 常量 整数数组32_: 整数数组32构造函数_;

/**
  * A typed array of 32-bit unsigned integer values. The contents are initialized to 0. If the
  * requested number of bytes could not be allocated an exception is raised.
  */

//@@{ 正整数数组32_:Uint32Array }
接口 正整数数组32_ {

  /**
    * The size in bytes of each element in the array.
    */

  //@@{ __字节_每个_元素_大小__:BYTES_PER_ELEMENT }
  只读 __字节_每个_元素_大小__: 数字;

  /**
    * The ArrayBuffer instance referenced by the array.
    */

  //@@{ 缓冲:buffer, 数组缓冲区等_:ArrayBufferLike }
  只读 缓冲: 数组缓冲区等_;

  /**
    * The length in bytes of the array.
    */

  //@@{ 字节长度:byteLength }
  只读 字节长度: 数字;

  /**
    * The offset in bytes of the array.
    */

  //@@{ 字节偏移:byteOffset }
  只读 字节偏移: 数字;

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

  /**
    * Determines whether all the members of an array satisfy the specified test.
    * @param 回调函数 A function that accepts up to three arguments. The every method calls
    * the callbackfn function for each element in array1 until the callbackfn returns false,
    * or until the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 每个:every, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 正整数数组32_:Uint32Array, 本体参数:thisArg }
  每个(回调函数: (值: 数字, 索引: 数字, 数组: 正整数数组32_) => 真假, 本体参数?: 任意): 真假;

  /**
      * Returns the this object after filling the section identified by start and end with value
      * @param 值 value to fill array section with
      * @param 开始 index to start filling the array at. If start is negative, it is treated as
      * length+start where length is the length of the array.
      * @param 结束 index to stop filling the array at. If end is negative, it is treated as
      * length+end.
      */

  //@@{ 填充:fill, 值:value, 开始:start, 结束:end }
  填充(值: 数字, 开始?: 数字, 结束?: 数字): 本体;

  /**
    * Returns the elements of an array that meet the condition specified in a callback function.
    * @param 回调函数 A function that accepts up to three arguments. The filter method calls
    * the callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 过滤:filter, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 正整数数组32_:Uint32Array, 本体参数:thisArg }
  过滤(回调函数: (值: 数字, 索引: 数字, 数组: 正整数数组32_) => 任意, 本体参数?: 任意): 正整数数组32_;

  /**
    * Returns the value of the first element in the array where predicate is true, and undefined
    * otherwise.
    * @param 条件 find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found, find
    * immediately returns that element value. Otherwise, find returns undefined.
    * @param 本体参数 If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */

  //@@{ 查找:find, 条件:predicate, 值:value, 索引:index, 对象:obj, 正整数数组32_:Uint32Array, 本体参数:thisArg }
  查找(条件: (值: 数字, 索引: 数字, 对象: 正整数数组32_) => 真假, 本体参数?: 任意): 数字 | 未定;

  /**
    * Returns the index of the first element in the array where predicate is true, and -1
    * otherwise.
    * @param 条件 find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found,
    * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
    * @param 本体参数 If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */

  //@@{ 查找索引:findIndex, 条件:predicate, 值:value, 索引:index, 对象:obj, 正整数数组32_:Uint32Array, 本体参数:thisArg }
  查找索引(条件: (值: 数字, 索引: 数字, 对象: 正整数数组32_) => 真假, 本体参数?: 任意): 数字;

  /**
    * Performs the specified action for each element in an array.
    * @param 回调函数  A function that accepts up to three arguments. forEach calls the
    * callbackfn function one time for each element in the array.
    * @param 本体参数  An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 循环执行:forEach, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 正整数数组32_:Uint32Array, 本体参数:thisArg }
  循环执行(回调函数: (值: 数字, 索引: 数字, 数组: 正整数数组32_) => 无值, 本体参数?: 任意): 无值;

  /**
    * Returns the index of the first occurrence of a value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the
    *  search starts at index 0.
    */

  //@@{ 索引位于:indexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  索引位于(搜索元素: 数字, 起始索引?: 数字): 数字;

  /**
    * Adds all the elements of an array separated by the specified separator string.
    * @param 分割符 A string used to separate one element of an array from the next in the
    * resulting String. If omitted, the array elements are separated with a comma.
    */

  //@@{ 连接:join, 分割符:separator }
  连接(分割符?: 文字): 文字;

  /**
    * Returns the index of the last occurrence of a value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the
    * search starts at index 0.
    */

  //@@{ 最后索引位于:lastIndexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  最后索引位于(搜索元素: 数字, 起始索引?: 数字): 数字;

  /**
    * The length of the array.
    */

  //@@{ 长度:length }
  只读 长度: 数字;

  /**
    * Calls a defined callback function on each element of an array, and returns an array that
    * contains the results.
    * @param 回调函数 A function that accepts up to three arguments. The map method calls the
    * callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 映射:map, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 正整数数组32_:Uint32Array, 本体参数:thisArg }
  映射(回调函数: (值: 数字, 索引: 数字, 数组: 正整数数组32_) => 数字, 本体参数?: 任意): 正整数数组32_;

  /**
    * Calls the specified callback function for all the elements in an array. The return value of
    * the callback function is the accumulated result, and is provided as an argument in the next
    * call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the
    * callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数数组32_:Uint32Array }
  累加(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 正整数数组32_) => 数字): 数字;

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数数组32_:Uint32Array, 初始值:initialValue }
  累加(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 正整数数组32_) => 数字, 初始值: 数字): 数字;

  /**
    * Calls the specified callback function for all the elements in an array. The return value of
    * the callback function is the accumulated result, and is provided as an argument in the next
    * call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the
    * callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数数组32_:Uint32Array, 初始值:initialValue }
  累加<U>(回调函数: (之前值: U, 当前值: 数字, 当前索引: 数字, 数组: 正整数数组32_) => U, 初始值: U): U;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order.
    * The return value of the callback function is the accumulated result, and is provided as an
    * argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls
    * the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an
    * argument instead of an array value.
    */

  //@@{ 累加右侧:reduceRight, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数数组32_:Uint32Array }
  累加右侧(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 正整数数组32_) => 数字): 数字;

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数数组32_:Uint32Array, 初始值:initialValue }
  累加右侧(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 正整数数组32_) => 数字, 初始值: 数字): 数字;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order.
    * The return value of the callback function is the accumulated result, and is provided as an
    * argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls
    * the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 正整数数组32_:Uint32Array, 初始值:initialValue }
  累加右侧<U>(回调函数: (之前值: U, 当前值: 数字, 当前索引: 数字, 数组: 正整数数组32_) => U, 初始值: U): U;

  /**
    * Reverses the elements in an Array.
    */

  //@@{ 翻转:reverse, 正整数数组32_:Uint32Array }
  翻转(): 正整数数组32_;

  /**
    * Sets a value or an array of values.
    * @param 数组 A typed or untyped array of values to set.
    * @param 偏移 The index in the current array at which the values are to be written.
    */

  //@@{ 设置:set, 数组:array, 数组等_:ArrayLike, 偏移:offset }
  设置(数组: 数组等_<数字>, 偏移?: 数字): 无值;

  /**
    * Returns a section of an array.
    * @param 开始 The beginning of the specified portion of the array.
    * @param 结束 The end of the specified portion of the array.
    */

  //@@{ 分割:slice, 开始:start, 结束:end, 正整数数组32_:Uint32Array }
  分割(开始?: 数字, 结束?: 数字): 正整数数组32_;

  /**
    * Determines whether the specified callback function returns true for any element of an array.
    * @param 回调函数 A function that accepts up to three arguments. The some method calls the
    * callbackfn function for each element in array1 until the callbackfn returns true, or until
    * the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 部分:some, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 正整数数组32_:Uint32Array, 本体参数:thisArg }
  部分(回调函数: (值: 数字, 索引: 数字, 数组: 正整数数组32_) => 真假, 本体参数?: 任意): 真假;

  /**
    * Sorts an array.
    * @param 比较函数 The name of the function used to determine the order of the elements. If
    * omitted, the elements are sorted in ascending, ASCII character order.
    */

  //@@{ 排序:sort, 比较函数:compareFn }
  排序(比较函数?: (a: 数字, b: 数字) => 数字): 本体;

  /**
    * Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements
    * at begin, inclusive, up to end, exclusive.
    * @param 开始 The index of the beginning of the array.
    * @param 结束 The index of the end of the array.
    */

  //@@{ 子数组:subarray, 开始:begin, 结束:end, 正整数数组32_:Uint32Array }
  子数组(开始: 数字, 结束?: 数字): 正整数数组32_;

  /**
    * Converts a number to a string by using the current locale.
    */

  //@@{ 转为本地文字:toLocaleString }
  转为本地文字(): 文字;

  /**
    * Returns a string representation of an array.
    */

  //@@{ 转为文字:toString }
  转为文字(): 文字;

  //@@{ 索引:index }
  [索引: 数字]: 数字;

}

//@@{ 正整数数组32构造函数_:Uint32ArrayConstructor }
接口 正整数数组32构造函数_ {

  //@@{ 原型:prototype, 正整数数组32_:Uint32Array }
  只读 原型: 正整数数组32_;

  //@@{ 长度:length, 正整数数组32_:Uint32Array }
  新建(长度: 数字): 正整数数组32_;

  //@@{ 数组或数组缓冲区:arrayOrArrayBuffer, 数组等_:ArrayLike, 数组缓冲区等_:ArrayBufferLike, 正整数数组32_:Uint32Array }
  新建(数组或数组缓冲区: 数组等_<数字> | 数组缓冲区等_): 正整数数组32_;

  //@@{ 缓冲:buffer, 数组缓冲区等_:ArrayBufferLike, 字节偏移:byteOffset, 长度:length, 正整数数组32_:Uint32Array }
  新建(缓冲: 数组缓冲区等_, 字节偏移: 数字, 长度?: 数字): 正整数数组32_;

  /**
    * The size in bytes of each element in the array.
    */

  //@@{ __字节_每个_元素_大小__:BYTES_PER_ELEMENT }
  只读 __字节_每个_元素_大小__: 数字;

  /**
    * Returns a new array from a set of elements.
    * @param 项目 A set of elements to include in the new array object.
    */

  //@@{ 以元素:of, 项目:items, 正整数数组32_:Uint32Array }
  以元素(...项目: 数字[]): 正整数数组32_;

  /**
    * Creates an array from an array-like or iterable object.
    * @param 数组等 An array-like or iterable object to convert to an array.
    * @param 映射回调 A mapping function to call on every element of the array.
    * @param 本体参数 Value of 'this' used to invoke the mapfn.
    */

  //@@{ 从对象:from, 数组等:arrayLike, 数组等_:ArrayLike, 映射回调:mapfn, 本体参数:thisArg, 正整数数组32_:Uint32Array }
  从对象(数组等: 数组等_<数字>, 映射回调?: (v: 数字, k: 数字) => 数字, 本体参数?: 任意): 正整数数组32_;

}

//@@{ 正整数数组32构造函数_:Uint32ArrayConstructor }
声明 常量 正整数数组32_: 正整数数组32构造函数_;

/**
  * A typed array of 32-bit float values. The contents are initialized to 0. If the requested number
  * of bytes could not be allocated an exception is raised.
  */

//@@{ 浮点数组32_:Float32Array }
接口 浮点数组32_ {

  /**
    * The size in bytes of each element in the array.
    */

  //@@{ __字节_每个_元素_大小__:BYTES_PER_ELEMENT }
  只读 __字节_每个_元素_大小__: 数字;

  /**
    * The ArrayBuffer instance referenced by the array.
    */

  //@@{ 缓冲:buffer, 数组缓冲区等_:ArrayBufferLike }
  只读 缓冲: 数组缓冲区等_;

  /**
    * The length in bytes of the array.
    */

  //@@{ 字节长度:byteLength }
  只读 字节长度: 数字;

  /**
    * The offset in bytes of the array.
    */

  //@@{ 字节偏移:byteOffset }
  只读 字节偏移: 数字;

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

  /**
    * Determines whether all the members of an array satisfy the specified test.
    * @param 回调函数 A function that accepts up to three arguments. The every method calls
    * the callbackfn function for each element in array1 until the callbackfn returns false,
    * or until the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 每个:every, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 浮点数组32_:Float32Array, 本体参数:thisArg }
  每个(回调函数: (值: 数字, 索引: 数字, 数组: 浮点数组32_) => 真假, 本体参数?: 任意): 真假;

  /**
      * Returns the this object after filling the section identified by start and end with value
      * @param 值 value to fill array section with
      * @param 开始 index to start filling the array at. If start is negative, it is treated as
      * length+start where length is the length of the array.
      * @param 结束 index to stop filling the array at. If end is negative, it is treated as
      * length+end.
      */

  //@@{ 填充:fill, 值:value, 开始:start, 结束:end }
  填充(值: 数字, 开始?: 数字, 结束?: 数字): 本体;

  /**
    * Returns the elements of an array that meet the condition specified in a callback function.
    * @param 回调函数 A function that accepts up to three arguments. The filter method calls
    * the callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 过滤:filter, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 浮点数组32_:Float32Array, 本体参数:thisArg }
  过滤(回调函数: (值: 数字, 索引: 数字, 数组: 浮点数组32_) => 任意, 本体参数?: 任意): 浮点数组32_;

  /**
    * Returns the value of the first element in the array where predicate is true, and undefined
    * otherwise.
    * @param 条件 find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found, find
    * immediately returns that element value. Otherwise, find returns undefined.
    * @param 本体参数 If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */

  //@@{ 查找:find, 条件:predicate, 值:value, 索引:index, 对象:obj, 浮点数组32_:Float32Array, 本体参数:thisArg }
  查找(条件: (值: 数字, 索引: 数字, 对象: 浮点数组32_) => 真假, 本体参数?: 任意): 数字 | 未定;

  /**
    * Returns the index of the first element in the array where predicate is true, and -1
    * otherwise.
    * @param 条件 find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found,
    * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
    * @param 本体参数 If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */

  //@@{ 查找索引:findIndex, 条件:predicate, 值:value, 索引:index, 对象:obj, 浮点数组32_:Float32Array, 本体参数:thisArg }
  查找索引(条件: (值: 数字, 索引: 数字, 对象: 浮点数组32_) => 真假, 本体参数?: 任意): 数字;

  /**
    * Performs the specified action for each element in an array.
    * @param 回调函数  A function that accepts up to three arguments. forEach calls the
    * callbackfn function one time for each element in the array.
    * @param 本体参数  An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 循环执行:forEach, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 浮点数组32_:Float32Array, 本体参数:thisArg }
  循环执行(回调函数: (值: 数字, 索引: 数字, 数组: 浮点数组32_) => 无值, 本体参数?: 任意): 无值;

  /**
    * Returns the index of the first occurrence of a value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the
    *  search starts at index 0.
    */

  //@@{ 索引位于:indexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  索引位于(搜索元素: 数字, 起始索引?: 数字): 数字;

  /**
    * Adds all the elements of an array separated by the specified separator string.
    * @param 分割符 A string used to separate one element of an array from the next in the
    * resulting String. If omitted, the array elements are separated with a comma.
    */

  //@@{ 连接:join, 分割符:separator }
  连接(分割符?: 文字): 文字;

  /**
    * Returns the index of the last occurrence of a value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the
    * search starts at index 0.
    */

  //@@{ 最后索引位于:lastIndexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  最后索引位于(搜索元素: 数字, 起始索引?: 数字): 数字;

  /**
    * The length of the array.
    */

  //@@{ 长度:length }
  只读 长度: 数字;

  /**
    * Calls a defined callback function on each element of an array, and returns an array that
    * contains the results.
    * @param 回调函数 A function that accepts up to three arguments. The map method calls the
    * callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 映射:map, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 浮点数组32_:Float32Array, 本体参数:thisArg }
  映射(回调函数: (值: 数字, 索引: 数字, 数组: 浮点数组32_) => 数字, 本体参数?: 任意): 浮点数组32_;

  /**
    * Calls the specified callback function for all the elements in an array. The return value of
    * the callback function is the accumulated result, and is provided as an argument in the next
    * call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the
    * callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 浮点数组32_:Float32Array }
  累加(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 浮点数组32_) => 数字): 数字;

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 浮点数组32_:Float32Array, 初始值:initialValue }
  累加(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 浮点数组32_) => 数字, 初始值: 数字): 数字;

  /**
    * Calls the specified callback function for all the elements in an array. The return value of
    * the callback function is the accumulated result, and is provided as an argument in the next
    * call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the
    * callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 浮点数组32_:Float32Array, 初始值:initialValue }
  累加<U>(回调函数: (之前值: U, 当前值: 数字, 当前索引: 数字, 数组: 浮点数组32_) => U, 初始值: U): U;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order.
    * The return value of the callback function is the accumulated result, and is provided as an
    * argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls
    * the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an
    * argument instead of an array value.
    */

  //@@{ 累加右侧:reduceRight, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 浮点数组32_:Float32Array }
  累加右侧(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 浮点数组32_) => 数字): 数字;

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 浮点数组32_:Float32Array, 初始值:initialValue }
  累加右侧(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 浮点数组32_) => 数字, 初始值: 数字): 数字;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order.
    * The return value of the callback function is the accumulated result, and is provided as an
    * argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls
    * the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 浮点数组32_:Float32Array, 初始值:initialValue }
  累加右侧<U>(回调函数: (之前值: U, 当前值: 数字, 当前索引: 数字, 数组: 浮点数组32_) => U, 初始值: U): U;

  /**
    * Reverses the elements in an Array.
    */

  //@@{ 翻转:reverse, 浮点数组32_:Float32Array }
  翻转(): 浮点数组32_;

  /**
    * Sets a value or an array of values.
    * @param 数组 A typed or untyped array of values to set.
    * @param 偏移 The index in the current array at which the values are to be written.
    */

  //@@{ 设置:set, 数组:array, 数组等_:ArrayLike, 偏移:offset }
  设置(数组: 数组等_<数字>, 偏移?: 数字): 无值;

  /**
    * Returns a section of an array.
    * @param 开始 The beginning of the specified portion of the array.
    * @param 结束 The end of the specified portion of the array.
    */

  //@@{ 分割:slice, 开始:start, 结束:end, 浮点数组32_:Float32Array }
  分割(开始?: 数字, 结束?: 数字): 浮点数组32_;

  /**
    * Determines whether the specified callback function returns true for any element of an array.
    * @param 回调函数 A function that accepts up to three arguments. The some method calls the
    * callbackfn function for each element in array1 until the callbackfn returns true, or until
    * the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 部分:some, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 浮点数组32_:Float32Array, 本体参数:thisArg }
  部分(回调函数: (值: 数字, 索引: 数字, 数组: 浮点数组32_) => 真假, 本体参数?: 任意): 真假;

  /**
    * Sorts an array.
    * @param 比较函数 The name of the function used to determine the order of the elements. If
    * omitted, the elements are sorted in ascending, ASCII character order.
    */

  //@@{ 排序:sort, 比较函数:compareFn }
  排序(比较函数?: (a: 数字, b: 数字) => 数字): 本体;

  /**
    * Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements
    * at begin, inclusive, up to end, exclusive.
    * @param 开始 The index of the beginning of the array.
    * @param 结束 The index of the end of the array.
    */

  //@@{ 子数组:subarray, 开始:begin, 结束:end, 浮点数组32_:Float32Array }
  子数组(开始: 数字, 结束?: 数字): 浮点数组32_;

  /**
    * Converts a number to a string by using the current locale.
    */

  //@@{ 转为本地文字:toLocaleString }
  转为本地文字(): 文字;

  /**
    * Returns a string representation of an array.
    */

  //@@{ 转为文字:toString }
  转为文字(): 文字;

  //@@{ 索引:index }
  [索引: 数字]: 数字;

}

//@@{ 浮点数组32构造函数_:Float32ArrayConstructor }
接口 浮点数组32构造函数_ {

  //@@{ 原型:prototype, 浮点数组32_:Float32Array }
  只读 原型: 浮点数组32_;

  //@@{ 长度:length, 浮点数组32_:Float32Array }
  新建(长度: 数字): 浮点数组32_;

  //@@{ 数组或数组缓冲区:arrayOrArrayBuffer, 数组等_:ArrayLike, 数组缓冲区等_:ArrayBufferLike, 浮点数组32_:Float32Array }
  新建(数组或数组缓冲区: 数组等_<数字> | 数组缓冲区等_): 浮点数组32_;

  //@@{ 缓冲:buffer, 数组缓冲区等_:ArrayBufferLike, 字节偏移:byteOffset, 长度:length, 浮点数组32_:Float32Array }
  新建(缓冲: 数组缓冲区等_, 字节偏移: 数字, 长度?: 数字): 浮点数组32_;

  /**
    * The size in bytes of each element in the array.
    */

  //@@{ __字节_每个_元素_大小__:BYTES_PER_ELEMENT }
  只读 __字节_每个_元素_大小__: 数字;

  /**
    * Returns a new array from a set of elements.
    * @param 项目 A set of elements to include in the new array object.
    */

  //@@{ 以元素:of, 项目:items, 浮点数组32_:Float32Array }
  以元素(...项目: 数字[]): 浮点数组32_;

  /**
    * Creates an array from an array-like or iterable object.
    * @param 数组等 An array-like or iterable object to convert to an array.
    * @param 映射回调 A mapping function to call on every element of the array.
    * @param 本体参数 Value of 'this' used to invoke the mapfn.
    */

  //@@{ 从对象:from, 数组等:arrayLike, 数组等_:ArrayLike, 映射回调:mapfn, 本体参数:thisArg, 浮点数组32_:Float32Array }
  从对象(数组等: 数组等_<数字>, 映射回调?: (v: 数字, k: 数字) => 数字, 本体参数?: 任意): 浮点数组32_;

}

//@@{ 浮点数组32构造函数_:Float32ArrayConstructor }
声明 常量 浮点数组32_: 浮点数组32构造函数_;

/**
  * A typed array of 64-bit float values. The contents are initialized to 0. If the requested
  * number of bytes could not be allocated an exception is raised.
  */

//@@{ 浮点数组64_:Float64Array }
接口 浮点数组64_ {

  /**
    * The size in bytes of each element in the array.
    */

  //@@{ __字节_每个_元素_大小__:BYTES_PER_ELEMENT }
  只读 __字节_每个_元素_大小__: 数字;

  /**
    * The ArrayBuffer instance referenced by the array.
    */

  //@@{ 缓冲:buffer, 数组缓冲区等_:ArrayBufferLike }
  只读 缓冲: 数组缓冲区等_;

  /**
    * The length in bytes of the array.
    */

  //@@{ 字节长度:byteLength }
  只读 字节长度: 数字;

  /**
    * The offset in bytes of the array.
    */

  //@@{ 字节偏移:byteOffset }
  只读 字节偏移: 数字;

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

  /**
    * Determines whether all the members of an array satisfy the specified test.
    * @param 回调函数 A function that accepts up to three arguments. The every method calls
    * the callbackfn function for each element in array1 until the callbackfn returns false,
    * or until the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 每个:every, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 浮点数组64_:Float64Array, 本体参数:thisArg }
  每个(回调函数: (值: 数字, 索引: 数字, 数组: 浮点数组64_) => 真假, 本体参数?: 任意): 真假;

  /**
      * Returns the this object after filling the section identified by start and end with value
      * @param 值 value to fill array section with
      * @param 开始 index to start filling the array at. If start is negative, it is treated as
      * length+start where length is the length of the array.
      * @param 结束 index to stop filling the array at. If end is negative, it is treated as
      * length+end.
      */

  //@@{ 填充:fill, 值:value, 开始:start, 结束:end }
  填充(值: 数字, 开始?: 数字, 结束?: 数字): 本体;

  /**
    * Returns the elements of an array that meet the condition specified in a callback function.
    * @param 回调函数 A function that accepts up to three arguments. The filter method calls
    * the callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 过滤:filter, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 浮点数组64_:Float64Array, 本体参数:thisArg }
  过滤(回调函数: (值: 数字, 索引: 数字, 数组: 浮点数组64_) => 任意, 本体参数?: 任意): 浮点数组64_;

  /**
    * Returns the value of the first element in the array where predicate is true, and undefined
    * otherwise.
    * @param 条件 find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found, find
    * immediately returns that element value. Otherwise, find returns undefined.
    * @param 本体参数 If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */

  //@@{ 查找:find, 条件:predicate, 值:value, 索引:index, 对象:obj, 浮点数组64_:Float64Array, 本体参数:thisArg }
  查找(条件: (值: 数字, 索引: 数字, 对象: 浮点数组64_) => 真假, 本体参数?: 任意): 数字 | 未定;

  /**
    * Returns the index of the first element in the array where predicate is true, and -1
    * otherwise.
    * @param 条件 find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found,
    * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
    * @param 本体参数 If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */

  //@@{ 查找索引:findIndex, 条件:predicate, 值:value, 索引:index, 对象:obj, 浮点数组64_:Float64Array, 本体参数:thisArg }
  查找索引(条件: (值: 数字, 索引: 数字, 对象: 浮点数组64_) => 真假, 本体参数?: 任意): 数字;

  /**
    * Performs the specified action for each element in an array.
    * @param 回调函数  A function that accepts up to three arguments. forEach calls the
    * callbackfn function one time for each element in the array.
    * @param 本体参数  An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 循环执行:forEach, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 浮点数组64_:Float64Array, 本体参数:thisArg }
  循环执行(回调函数: (值: 数字, 索引: 数字, 数组: 浮点数组64_) => 无值, 本体参数?: 任意): 无值;

  /**
    * Returns the index of the first occurrence of a value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the
    *  search starts at index 0.
    */

  //@@{ 索引位于:indexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  索引位于(搜索元素: 数字, 起始索引?: 数字): 数字;

  /**
    * Adds all the elements of an array separated by the specified separator string.
    * @param 分割符 A string used to separate one element of an array from the next in the
    * resulting String. If omitted, the array elements are separated with a comma.
    */

  //@@{ 连接:join, 分割符:separator }
  连接(分割符?: 文字): 文字;

  /**
    * Returns the index of the last occurrence of a value in an array.
    * @param 搜索元素 The value to locate in the array.
    * @param 起始索引 The array index at which to begin the search. If fromIndex is omitted, the
    * search starts at index 0.
    */

  //@@{ 最后索引位于:lastIndexOf, 搜索元素:searchElement, 起始索引:fromIndex }
  最后索引位于(搜索元素: 数字, 起始索引?: 数字): 数字;

  /**
    * The length of the array.
    */

  //@@{ 长度:length }
  只读 长度: 数字;

  /**
    * Calls a defined callback function on each element of an array, and returns an array that
    * contains the results.
    * @param 回调函数 A function that accepts up to three arguments. The map method calls the
    * callbackfn function one time for each element in the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 映射:map, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 浮点数组64_:Float64Array, 本体参数:thisArg }
  映射(回调函数: (值: 数字, 索引: 数字, 数组: 浮点数组64_) => 数字, 本体参数?: 任意): 浮点数组64_;

  /**
    * Calls the specified callback function for all the elements in an array. The return value of
    * the callback function is the accumulated result, and is provided as an argument in the next
    * call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the
    * callbackfn function one time for each element in the array.
    * @param initialValue If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 累加:reduce, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 浮点数组64_:Float64Array }
  累加(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 浮点数组64_) => 数字): 数字;

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 浮点数组64_:Float64Array, 初始值:initialValue }
  累加(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 浮点数组64_) => 数字, 初始值: 数字): 数字;

  /**
    * Calls the specified callback function for all the elements in an array. The return value of
    * the callback function is the accumulated result, and is provided as an argument in the next
    * call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduce method calls the
    * callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 浮点数组64_:Float64Array, 初始值:initialValue }
  累加<U>(回调函数: (之前值: U, 当前值: 数字, 当前索引: 数字, 数组: 浮点数组64_) => U, 初始值: U): U;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order.
    * The return value of the callback function is the accumulated result, and is provided as an
    * argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls
    * the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an
    * argument instead of an array value.
    */

  //@@{ 累加右侧:reduceRight, 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 浮点数组64_:Float64Array }
  累加右侧(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 浮点数组64_) => 数字): 数字;

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 浮点数组64_:Float64Array, 初始值:initialValue }
  累加右侧(回调函数: (之前值: 数字, 当前值: 数字, 当前索引: 数字, 数组: 浮点数组64_) => 数字, 初始值: 数字): 数字;

  /**
    * Calls the specified callback function for all the elements in an array, in descending order.
    * The return value of the callback function is the accumulated result, and is provided as an
    * argument in the next call to the callback function.
    * @param 回调函数 A function that accepts up to four arguments. The reduceRight method calls
    * the callbackfn function one time for each element in the array.
    * @param 初始值 If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */

  //@@{ 回调函数:callbackfn, 之前值:previousValue, 当前值:currentValue, 当前索引:currentIndex, 数组:array, 浮点数组64_:Float64Array, 初始值:initialValue }
  累加右侧<U>(回调函数: (之前值: U, 当前值: 数字, 当前索引: 数字, 数组: 浮点数组64_) => U, 初始值: U): U;

  /**
    * Reverses the elements in an Array.
    */

  //@@{ 翻转:reverse, 浮点数组64_:Float64Array }
  翻转(): 浮点数组64_;

  /**
    * Sets a value or an array of values.
    * @param 数组 A typed or untyped array of values to set.
    * @param 偏移 The index in the current array at which the values are to be written.
    */

  //@@{ 设置:set, 数组:array, 数组等_:ArrayLike, 偏移:offset }
  设置(数组: 数组等_<数字>, 偏移?: 数字): 无值;

  /**
    * Returns a section of an array.
    * @param 开始 The beginning of the specified portion of the array.
    * @param 结束 The end of the specified portion of the array.
    */

  //@@{ 分割:slice, 开始:start, 结束:end, 浮点数组64_:Float64Array }
  分割(开始?: 数字, 结束?: 数字): 浮点数组64_;

  /**
    * Determines whether the specified callback function returns true for any element of an array.
    * @param 回调函数 A function that accepts up to three arguments. The some method calls the
    * callbackfn function for each element in array1 until the callbackfn returns true, or until
    * the end of the array.
    * @param 本体参数 An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */

  //@@{ 部分:some, 回调函数:callbackfn, 值:value, 索引:index, 数组:array, 浮点数组64_:Float64Array, 本体参数:thisArg }
  部分(回调函数: (值: 数字, 索引: 数字, 数组: 浮点数组64_) => 真假, 本体参数?: 任意): 真假;

  /**
    * Sorts an array.
    * @param 比较函数 The name of the function used to determine the order of the elements. If
    * omitted, the elements are sorted in ascending, ASCII character order.
    */

  //@@{ 排序:sort, 比较函数:compareFn }
  排序(比较函数?: (a: 数字, b: 数字) => 数字): 本体;

  /**
    * Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements
    * at begin, inclusive, up to end, exclusive.
    * @param 开始 The index of the beginning of the array.
    * @param 结束 The index of the end of the array.
    */

  //@@{ 子数组:subarray, 开始:begin, 结束:end, 浮点数组64_:Float64Array }
  子数组(开始: 数字, 结束?: 数字): 浮点数组64_;

  /**
    * Converts a number to a string by using the current locale.
    */

  //@@{ 转为本地文字:toLocaleString }
  转为本地文字(): 文字;

  /**
    * Returns a string representation of an array.
    */

  //@@{ 转为文字:toString }
  转为文字(): 文字;

  //@@{ 索引:index }
  [索引: 数字]: 数字;

}

//@@{ 浮点数组64构造函数_:Float64ArrayConstructor }
接口 浮点数组64构造函数_ {

  //@@{ 原型:prototype, 浮点数组64_:Float64Array }
  只读 原型: 浮点数组64_;

  //@@{ 长度:length, 浮点数组64_:Float64Array }
  新建(长度: 数字): 浮点数组64_;

  //@@{ 数组或数组缓冲区:arrayOrArrayBuffer, 数组等_:ArrayLike, 数组缓冲区等_:ArrayBufferLike, 浮点数组64_:Float64Array }
  新建(数组或数组缓冲区: 数组等_<数字> | 数组缓冲区等_): 浮点数组64_;

  //@@{ 缓冲:buffer, 数组缓冲区等_:ArrayBufferLike, 字节偏移:byteOffset, 长度:length, 浮点数组64_:Float64Array }
  新建(缓冲: 数组缓冲区等_, 字节偏移: 数字, 长度?: 数字): 浮点数组64_;

  /**
    * The size in bytes of each element in the array.
    */

  //@@{ __字节_每个_元素_大小__:BYTES_PER_ELEMENT }
  只读 __字节_每个_元素_大小__: 数字;

  /**
    * Returns a new array from a set of elements.
    * @param 项目 A set of elements to include in the new array object.
    */

  //@@{ 以元素:of, 项目:items, 浮点数组64_:Float64Array }
  以元素(...项目: 数字[]): 浮点数组64_;

  /**
    * Creates an array from an array-like or iterable object.
    * @param 数组等 An array-like or iterable object to convert to an array.
    * @param 映射回调 A mapping function to call on every element of the array.
    * @param 本体参数 Value of 'this' used to invoke the mapfn.
    */

  //@@{ 从对象:from, 数组等:arrayLike, 数组等_:ArrayLike, 映射回调:mapfn, 本体参数:thisArg, 浮点数组64_:Float64Array }
  从对象(数组等: 数组等_<数字>, 映射回调?: (v: 数字, k: 数字) => 数字, 本体参数?: 任意): 浮点数组64_;

}

//@@{ 浮点数组64构造函数_:Float64ArrayConstructor }
声明 常量 浮点数组64_: 浮点数组64构造函数_;

/////////////////////////////
/// ECMAScript Internationalization API
/////////////////////////////

//@@{ 国际化_:Intl }
声明 名域 国际化_ {

  //@@{ 排序器选项_:CollatorOptions }
  接口 排序器选项_ {

    //@@{ 使用目的:usage }
    使用目的?: 文字;

    //@@{ 地区匹配器:localeMatcher }
    地区匹配器?: 文字;

    //@@{ 数字排序:numeric }
    数字排序?: 真假;

    //@@{ 小写优先:caseFirst }
    小写优先?: 文字;

    //@@{ 灵敏度:sensitivity }
    灵敏度?: 文字;

    //@@{ 忽略标点符号:ignorePunctuation }
    忽略标点符号?: 真假;

  }

  //@@{ 解决排序器选项_:ResolvedCollatorOptions }
  接口 解决排序器选项_ {

    //@@{ 地区:locale }
    地区: 文字;

    //@@{ 使用目的:usage }
    使用目的: 文字;

    //@@{ 灵敏度:sensitivity }
    灵敏度: 文字;

    //@@{ 忽略标点符号:ignorePunctuation }
    忽略标点符号: 真假;

    //@@{ 排序:collation }
    排序: 文字;

    //@@{ 小写优先:caseFirst }
    小写优先: 文字;

    //@@{ 数字排序:numeric }
    数字排序: 真假;

  }

  //@@{ 排序器_:Collator }
  接口 排序器_ {

    //@@{ 比较:compare }
    比较(x: 文字, y: 文字): 数字;

    //@@{ 解决选项:resolvedOptions, 解决排序器选项_:ResolvedCollatorOptions }
    解决选项(): 解决排序器选项_;

  }

  值量 排序器_: {

    //@@{ 地区:locales, 选项:options, 排序器选项_:CollatorOptions, 排序器_:Collator }
    新建(地区?: 文字 | 文字[], 选项?: 排序器选项_): 排序器_;

    //@@{ 地区:locales, 选项:options, 排序器选项_:CollatorOptions, 排序器_:Collator }
    (地区?: 文字 | 文字[], 选项?: 排序器选项_): 排序器_;

    //@@{ 支持地区位于:supportedLocalesOf, 地区:locales, 选项:options, 排序器选项_:CollatorOptions }
    支持地区位于(地区: 文字 | 文字[], 选项?: 排序器选项_): 文字[];

  };

  //@@{ 数字格式化选项_:NumberFormatOptions }
  接口 数字格式化选项_ {

    //@@{ 地区匹配器:localeMatcher }
    地区匹配器?: 文字;

    //@@{ 风格:style }
    风格?: 文字;

    //@@{ 货币:currency }
    货币?: 文字;

    //@@{ 货币显示:currencyDisplay }
    货币显示?: 文字;

    //@@{ 分组方法:useGrouping }
    分组方法?: 真假;

    //@@{ 最小整数位数:minimumIntegerDigits }
    最小整数位数?: 数字;

    //@@{ 最小小数位数:minimumFractionDigits }
    最小小数位数?: 数字;

    //@@{ 最大小数位数:maximumFractionDigits }
    最大小数位数?: 数字;

    //@@{ 显示的最小小数位数:minimumSignificantDigits }
    显示的最小小数位数?: 数字;

    //@@{ 显示的最大小数位数:maximumSignificantDigits }
    显示的最大小数位数?: 数字;

  }

  //@@{ 解决数字格式化选项_:ResolvedNumberFormatOptions }
  接口 解决数字格式化选项_ {

    //@@{ 地区:locale }
    地区: 文字;

    //@@{ 编号系统:numberingSystem }
    编号系统: 文字;

    //@@{ 风格:style }
    风格: 文字;

    //@@{ 货币:currency }
    货币?: 文字;

    //@@{ 货币显示:currencyDisplay }
    货币显示?: 文字;

    //@@{ 最小整数位数:minimumIntegerDigits }
    最小整数位数: 数字;

    //@@{ 最小小数位数:minimumFractionDigits }
    最小小数位数: 数字;

    //@@{ 显示的最小小数位数:maximumFractionDigits }
    显示的最小小数位数: 数字;

    //@@{ 最小有效位数:minimumSignificantDigits }
    最小有效位数?: 数字;

    //@@{ 显示的最大小数位数:maximumSignificantDigits }
    显示的最大小数位数?: 数字;

    //@@{ 分组方法:useGrouping }
    分组方法: 真假;

  }

  //@@{ 数字格式化_:NumberFormat }
  接口 数字格式化_ {

    //@@{ 格式化:format, 值:value }
    格式化(值: 数字): 文字;

    //@@{ 解决选项:resolvedOptions, 解决数字格式化选项_:ResolvedNumberFormatOptions }
    解决选项(): 解决数字格式化选项_;

  }

  值量 数字格式化_: {

    //@@{ 地区:locales, 选项:options, 数字格式化选项_:NumberFormatOptions, 数字格式化_:NumberFormat }
    新建(地区?: 文字 | 文字[], 选项?: 数字格式化选项_): 数字格式化_;

    //@@{ 地区:locales, 选项:options, 数字格式化选项_:NumberFormatOptions, 数字格式化_:NumberFormat }
    (地区?: 文字 | 文字[], 选项?: 数字格式化选项_): 数字格式化_;

    //@@{ 支持地区位于:supportedLocalesOf, 地区:locales, 选项:options, 数字格式化选项_:NumberFormatOptions }
    支持地区位于(地区: 文字 | 文字[], 选项?: 数字格式化选项_): 文字[];

  };

  //@@{ 日期时间格式化选项_:DateTimeFormatOptions }
  接口 日期时间格式化选项_ {

    //@@{ 地区匹配器:localeMatcher }
    地区匹配器?: 文字;

    //@@{ 工作日:weekday }
    工作日?: 文字;

    //@@{ 纪元格式:era }
    纪元格式?: 文字;

    //@@{ 年:year }
    年?: 文字;

    //@@{ 月:month }
    月?: 文字;

    //@@{ 天:day }
    天?: 文字;

    //@@{ 小时:hour }
    小时?: 文字;

    //@@{ 分钟:minute }
    分钟?: 文字;

    //@@{ 秒钟:second }
    秒钟?: 文字;

    //@@{ 时区名称:timeZoneName }
    时区名称?: 文字;

    //@@{ 格式匹配器:formatMatcher }
    格式匹配器?: 文字;

    //@@{ _12小时:hour12 }
    _12小时?: 真假;

    //@@{ 时区:timeZone }
    时区?: 文字;

  }

  //@@{ 解决日期时间格式选项_:ResolvedDateTimeFormatOptions }
  接口 解决日期时间格式选项_ {

    //@@{ 地区:locale }
    地区: 文字;

    //@@{ 日历:calendar }
    日历: 文字;

    //@@{ 编号系统:numberingSystem }
    编号系统: 文字;

    //@@{ 时区:timeZone }
    时区: 文字;

    //@@{ _12小时:hour12 }
    _12小时?: 真假;

    //@@{ 工作日:weekday }
    工作日?: 文字;

    //@@{ 纪元格式:era }
    纪元格式?: 文字;

    //@@{ 年:year }
    年?: 文字;

    //@@{ 月:month }
    月?: 文字;

    //@@{ 天:day }
    天?: 文字;

    //@@{ 小时:hour }
    小时?: 文字;

    //@@{ 分钟:minute }
    分钟?: 文字;

    //@@{ 秒钟:second }
    秒钟?: 文字;

    //@@{ 时区名称:timeZoneName }
    时区名称?: 文字;

  }

  //@@{ 日期时间格式_:DateTimeFormat }
  接口 日期时间格式_ {

    //@@{ 格式化:format, 日期:date, 日期_:Date }
    格式化(日期?: 日期_ | 数字): 文字;

    //@@{ 解决选项:resolvedOptions, 解决日期时间格式选项_:ResolvedDateTimeFormatOptions }
    解决选项(): 解决日期时间格式选项_;

  }

  值量 日期时间格式_: {

    //@@{ 地区:locales, 选项:options, 日期时间格式化选项_:DateTimeFormatOptions, 日期时间格式_:DateTimeFormat }
    新建(地区?: 文字 | 文字[], 选项?: 日期时间格式化选项_): 日期时间格式_;

    //@@{ 地区:locales, 选项:options, 日期时间格式化选项_:DateTimeFormatOptions, 日期时间格式_:DateTimeFormat }
    (地区?: 文字 | 文字[], 选项?: 日期时间格式化选项_): 日期时间格式_;

    //@@{ 支持地区位于:supportedLocalesOf, 地区:locales, 选项:options, 日期时间格式化选项_:DateTimeFormatOptions }
    支持地区位于(地区: 文字 | 文字[], 选项?: 日期时间格式化选项_): 文字[];

  };
}

接口 文字_ {

  /**
    * Determines whether two strings are equivalent in the current or specified locale.
    * @param 那里 String to compare to target string
    * @param 地区 A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
    * @param 选项 An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.
    */

  //@@{ 那里:that, 地区:locales, 选项:options, 国际化_:Intl, 排序器选项_:CollatorOptions }
  本地比较(那里: 文字, 地区?: 文字 | 文字[], 选项?: 国际化_.排序器选项_): 数字;

}

接口 数字_ {

  /**
    * Converts a number to a string by using the current or specified locale.
    * @param 地区 A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
    * @param 选项 An object that contains one or more properties that specify comparison options.
    */

  //@@{ 转为本地文字:toLocaleString, 地区:locales, 选项:options, 国际化_:Intl, 数字格式化选项_:NumberFormatOptions }
  转为本地文字(地区?: 文字 | 文字[], 选项?: 国际化_.数字格式化选项_): 文字;

}

接口 日期_ {

  /**
    * Converts a date and time to a string by using the current or specified locale.
    * @param 地区 A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
    * @param 选项 An object that contains one or more properties that specify comparison options.
    */

  //@@{ 地区:locales, 选项:options, 国际化_:Intl, 日期时间格式化选项_:DateTimeFormatOptions }
  转为本地文字(地区?: 文字 | 文字[], 选项?: 国际化_.日期时间格式化选项_): 文字;

  /**
    * Converts a date to a string by using the current or specified locale.
    * @param 地区 A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
    * @param 选项 An object that contains one or more properties that specify comparison options.
    */

  //@@{ 地区:locales, 选项:options, 国际化_:Intl, 日期时间格式化选项_:DateTimeFormatOptions }
  转为本地日期文字(地区?: 文字 | 文字[], 选项?: 国际化_.日期时间格式化选项_): 文字;

  /**
    * Converts a time to a string by using the current or specified locale.
    * @param 地区 A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
    * @param 选项 An object that contains one or more properties that specify comparison options.
    */

  //@@{ 地区:locales, 选项:options, 国际化_:Intl, 日期时间格式化选项_:DateTimeFormatOptions }
  转为本地时间文字(地区?: 文字 | 文字[], 选项?: 国际化_.日期时间格式化选项_): 文字;
}
