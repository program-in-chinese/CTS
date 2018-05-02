//@@{ 生成器_:Generator, 迭代器_:Iterator }
接口 生成器_ 扩展 迭代器_<任意> { }

//@@{ 生成器函数_:GeneratorFunction }
接口 生成器函数_ {

    /**
     * Creates a new Generator object.
     * @param 参数组 A list of arguments the function accepts.
     */

    //@@{ 参数组:args, 生成器_:Generator }
    新建 (...参数组: 任意[]): 生成器_;

    /**
     * Creates a new Generator object.
     * @param 参数组 A list of arguments the function accepts.
     */

    //@@{ 参数组:args, 生成器_:Generator }
    (...参数组: 任意[]): 生成器_;

    /**
     * The length of the arguments.
     */

    //@@{ 长度:length }
    只读 长度: 数字;

    /**
     * Returns the name of the function.
     */

    //@@{ 名字:name }
    只读 名字: 文字;

    /**
     * A reference to the prototype.
     */

    //@@{ 原型:prototype, 生成器_:Generator }
    只读 原型: 生成器_;

}

//@@{ 生成器函数构造函数_:GeneratorFunctionConstructor }
接口 生成器函数构造函数_ {

    /**
     * Creates a new Generator function.
     * @param 参数组 A list of arguments the function accepts.
     */

    //@@{ 参数组:args, 生成器函数_:GeneratorFunction }
    新建 (...参数组: 文字[]): 生成器函数_;

    /**
     * Creates a new Generator function.
     * @param 参数组 A list of arguments the function accepts.
     */

    //@@{ 参数组:args, 生成器函数_:GeneratorFunction }
    (...参数组: 文字[]): 生成器函数_;

    /**
     * The length of the arguments.
     */

    //@@{ 长度:length }
    只读 长度: 数字;

    /**
     * Returns the name of the function.
     */

    //@@{ 名字:name }
    只读 名字: 文字;

    /**
     * A reference to the prototype.
     */

    //@@{ 原型:prototype, 生成器函数_:GeneratorFunction }
    只读 原型: 生成器函数_;

}

//@@{ 生成器函数构造函数_:GeneratorFunctionConstructor }
声明 值量 生成器函数_: 生成器函数构造函数_;
