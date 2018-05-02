//@@{ 映射_:Map }
接口 映射_<K, V> {

    //@@{ 清除:clear }
    清除(): 无值;

    //@@{ 删除:delete, 键:key }
    删除(键: K): 真假;

    //@@{ 循环执行:forEach, 回调函数:callbackfn, 值:value, 键:key, 映射:map, 映射_:Map, 本体参数:thisArg }
    循环执行(回调函数: (值: V, 键: K, 映射: 映射_<K, V>) => 无值, 本体参数?: 任意): 无值;

    //@@{ 获取:get, 键:key }
    获取(键: K): V | 未定;

    //@@{ 存在:has, 键:key }
    存在(键: K): 真假;

    //@@{ 设置:set, 键:key, 值:value }
    设置(键: K, 值: V): 本体;

    //@@{ 大小:size }
    只读 大小: 数字;

}

//@@{ 映射构造函数_:MapConstructor }
接口 映射构造函数_ {

    //@@{ 映射_:Map }
    新建 (): 映射_<任意, 任意>;

    //@@{ 条目:entries, 映射_:Map }
    新建 <K, V>(条目?: [K, V][]): 映射_<K, V>;

    //@@{ 原型:prototype, 映射_:Map }
    只读 原型: 映射_<任意, 任意>;

}

//@@{ 映射构造函数_:MapConstructor }
声明 值量 映射_: 映射构造函数_;

//@@{ 只读映射_:ReadonlyMap }
接口 只读映射_<K, V> {

    //@@{ 循环执行:forEach, 回调函数:callbackfn, 值:value, 键:key, 映射:map, 只读映射_:ReadonlyMap, 本体参数:thisArg }
    循环执行(回调函数: (值: V, 键: K, 映射: 只读映射_<K, V>) => 无值, 本体参数?: 任意): 无值;

    //@@{ 获取:get, 键:key }
    获取(键: K): V | 未定;

    //@@{ 存在:has, 键:key }
    存在(键: K): 真假;

    //@@{ 大小:size }
    只读 大小: 数字;

}

//@@{ 弱映射_:WeakMap }
接口 弱映射_<K 扩展 实例, V> {

    //@@{ 删除:delete, 键:key }
    删除(键: K): 真假;

    //@@{ 获取:get, 键:key }
    获取(键: K): V | 未定;

    //@@{ 存在:key }
    存在(存在: K): 真假;

    //@@{ 设置:set, 存在:key, 值:value }
    设置(存在: K, 值: V): 本体;

}

//@@{ 弱映射构造函数_:WeakMapConstructor }
接口 弱映射构造函数_ {

    //@@{ 弱映射_:WeakMap }
    新建 (): 弱映射_<实例, 任意>;

    //@@{ 条目:entries, 弱映射_:WeakMap }
    新建 <K 扩展 实例, V>(条目?: [K, V][]): 弱映射_<K, V>;

    //@@{ 原型:prototype, 弱映射_:WeakMap }
    只读 原型: 弱映射_<实例, 任意>;

}

//@@{ 弱映射构造函数_:WeakMapConstructor }
声明 值量 弱映射_: 弱映射构造函数_;

//@@{ 集合_:Set }
接口 集合_<T> {

    //@@{ 添加:add, 值:value }
    添加(值: T): 本体;

    //@@{ 清除:clear }
    清除(): 无值;

    //@@{ 删除:delete, 值:value }
    删除(值: T): 真假;

    //@@{ 循环执行:forEach, 回调函数:callbackfn, 值:value, 值2:value2, 集合:set, 集合_:Set, 本体参数:thisArg }
    循环执行(回调函数: (值: T, 值2: T, 集合: 集合_<T>) => 无值, 本体参数?: 任意): 无值;

    //@@{ 存在:has, 值:value }
    存在(值: T): 真假;

    //@@{ 大小:size }
    只读 大小: 数字;

}

//@@{ 集合构造函数_:SetConstructor }
接口 集合构造函数_ {

    //@@{ 集合_:Set }
    新建 (): 集合_<任意>;

    //@@{ 值组:values, 集合_:Set }
    新建 <T>(值组?: T[]): 集合_<T>;

    //@@{ 原型:prototype, 集合_:Set }
    只读 原型: 集合_<任意>;

}

//@@{ 集合构造函数_:SetConstructor }
声明 值量 集合_: 集合构造函数_;

//@@{ 只读集合_:ReadonlySet }
接口 只读集合_<T> {

    //@@{ 循环执行:forEach, 回调函数:callbackfn, 值:value, 值2:value2, 集合:set, 只读集合_:ReadonlySet, 本体参数:thisArg }
    循环执行(回调函数: (值: T, 值2: T, 集合: 只读集合_<T>) => 无值, 本体参数?: 任意): 无值;

    //@@{ 存在:has, 值:value }
    存在(值: T): 真假;

    //@@{ 大小:size }
    只读 大小: 数字;

}

//@@{ 弱集合_:WeakSet }
接口 弱集合_<T> {

    //@@{ 添加:add, 值:value }
    添加(值: T): 本体;

    //@@{ 删除:delete, 值:value }
    删除(值: T): 真假;

    //@@{ 存在:has, 值:value }
    存在(值: T): 真假;

}

//@@{ 弱集合构造函数_:WeakSetConstructor }
接口 弱集合构造函数_ {

    //@@{ 弱集合_:WeakSet }
    新建 (): 弱集合_<实例>;

    //@@{ 值组:values, 弱集合_:WeakSet }
    新建 <T 扩展 实例>(值组?: T[]): 弱集合_<T>;

    //@@{ 原型:prototype, 弱集合_:WeakSet }
    只读 原型: 弱集合_<实例>;

}

//@@{ 弱集合构造函数_:WeakSetConstructor }
声明 值量 弱集合_: 弱集合构造函数_;
