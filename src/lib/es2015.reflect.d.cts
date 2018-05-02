//@@{ 反射_:Reflect }
声明 名域 反射_ {

    //@@{ 应用:apply, 目标:target, 函数_:Function, 本体增强参数:thisArgument, 增强参数列表:argumentsList, 数组等_:ArrayLike }
    函数 应用(目标: 函数_, 本体增强参数: 任意, 增强参数列表: 数组等_<任意>): 任意;

    //@@{ 构造器:construct, 目标:target, 函数_:Function, 增强参数列表:argumentsList, 数组等_:ArrayLike, 新目标:newTarget }
    函数 构造器(目标: 函数_, 增强参数列表: 数组等_<任意>, 新目标?: 任意): 任意;

    //@@{ 定义属性:defineProperty, 目标:target, 属性键:propertyKey, 属性键_:PropertyKey, 特性组:attributes, 属性描述符_:PropertyDescriptor }
    函数 定义属性(目标: 实例, 属性键: 属性键_, 特性组: 属性描述符_): 真假;

    //@@{ 删除属性:deleteProperty, 目标:target, 属性键:propertyKey, 属性键_:PropertyKey }
    函数 删除属性(目标: 实例, 属性键: 属性键_): 真假;

    //@@{ 获取:get, 目标:target, 属性键:propertyKey, 属性键_:PropertyKey, 接收器:receiver }
    函数 获取(目标: 实例, 属性键: 属性键_, 接收器?: 任意): 任意;

    //@@{ 取本身属性描述符:getOwnPropertyDescriptor, 目标:target, 属性键:propertyKey, 属性键_:PropertyKey, 属性描述符_:PropertyDescriptor }
    函数 取本身属性描述符(目标: 实例, 属性键: 属性键_): 属性描述符_ | 未定;

    //@@{ 取原型位于:getPrototypeOf, 目标:target }
    函数 取原型位于(目标: 实例): 实例;

    //@@{ 存在:has, 目标:target, 属性键:propertyKey, 属性键_:PropertyKey }
    函数 存在(目标: 实例, 属性键: 属性键_): 真假;

    //@@{ 是可扩展的:isExtensible, 目标:target }
    函数 是可扩展的(目标: 实例): 真假;

    //@@{ 本身键组:ownKeys, 目标:target, 属性键_:PropertyKey }
    函数 本身键组(目标: 实例): 属性键_[];

    //@@{ 防止扩展:preventExtensions, 目标:target }
    函数 防止扩展(目标: 实例): 真假;

    //@@{ 设置:set, 目标:target, 属性键:propertyKey, 属性键_:PropertyKey, 值:value, 接收器:receiver }
    函数 设置(目标: 实例, 属性键: 属性键_, 值: 任意, 接收器?: 任意): 真假;

    //@@{ 置原型位于:setPrototypeOf, 目标:target, 原型:proto }
    函数 置原型位于(目标: 实例, 原型: 任意): 真假;
}
