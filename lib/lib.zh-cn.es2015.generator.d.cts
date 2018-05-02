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

//@@{ 生成器_:Generator, 迭代器_:Iterator }
接口 生成器_ 扩展 迭代器_<任意> { }

//@@{ 生成器函数_:GeneratorFunction }
接口 生成器函数_ {

    /**
     * Creates a new Generator object.
     * @param 参数集 A list of arguments the function accepts.
     */

    //@@{ 参数集:args, 生成器_:Generator }
    新建 (...参数集: 任意[]): 生成器_;

    /**
     * Creates a new Generator object.
     * @param 参数集 A list of arguments the function accepts.
     */

    //@@{ 参数集:args, 生成器_:Generator }
    (...参数集: 任意[]): 生成器_;

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
     * @param 参数集 A list of arguments the function accepts.
     */

    //@@{ 参数集:args, 生成器函数_:GeneratorFunction }
    新建 (...参数集: 文字[]): 生成器函数_;

    /**
     * Creates a new Generator function.
     * @param 参数集 A list of arguments the function accepts.
     */

    //@@{ 参数集:args, 生成器函数_:GeneratorFunction }
    (...参数集: 文字[]): 生成器函数_;

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
