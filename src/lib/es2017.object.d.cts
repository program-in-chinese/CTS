//@@{ 实例构造函数_:ObjectConstructor }
接口 实例构造函数_ {

    /**
     * Returns an array of values of the enumerable properties of an object
     * @param 对象 Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
     */

    //@@{ 值组:values, 对象:o, 属性:s, 数组等_:ArrayLike }
    值组<T>(对象: { [属性: 文字]: T } |  数组等_<T>): T[];

    /**
     * Returns an array of values of the enumerable properties of an object
     * @param 对象 Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
     */

    //@@{ 值组:values, 对象:o }
    值组(对象: {}): 任意[];

    /**
     * Returns an array of key/values of the enumerable properties of an object
     * @param 对象 Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
     */

    //@@{ 条目:entries, 对象:o, 属性:s, 数组等_:ArrayLike }
    条目<T>(对象: { [属性: 文字]: T } | 数组等_<T>): [文字, T][];

    /**
     * Returns an array of key/values of the enumerable properties of an object
     * @param 对象 Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
     */

    //@@{ 条目:entries, 对象:o }
    条目(对象: {}): [文字, 任意][];

    /**
     * Returns an object containing all own property descriptors of an object
     * @param 对象 Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
     */

    //@@{ 取本身属性描述符:getOwnPropertyDescriptors, 对象:o, 类型属性描述符_:TypedPropertyDescriptor, 索引:x, 属性描述符_:PropertyDescriptor }
    取本身属性描述符<T>(对象: T): {[P 位于 键为 T]: 类型属性描述符_<T[P]>} & { [索引: 文字]: 属性描述符_ };
}
