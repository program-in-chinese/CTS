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

//@@{ 代理处理_:ProxyHandler }
接口 代理处理_<T 扩展 实例> {

    //@@{ 取原型位于:getPrototypeOf, 目标:target }
    取原型位于? (目标: T): 实例 | 空值;

    //@@{ 置原型位于:setPrototypeOf, 目标:target }
    置原型位于? (目标: T, v: 任意): 真假;

    //@@{ 是可扩展的:isExtensible, 目标:target }
    是可扩展的? (目标: T): 真假;

    //@@{ 防止扩展:preventExtensions, 目标:target }
    防止扩展? (目标: T): 真假;

    //@@{ 取本身属性描述符:getOwnPropertyDescriptor, 目标:target, 属性键_:PropertyKey, 属性描述符_:PropertyDescriptor }
    取本身属性描述符? (目标: T, p: 属性键_): 属性描述符_ | 未定;

    //@@{ 存在:has, 目标:target, 属性键_:PropertyKey }
    存在? (目标: T, p: 属性键_): 真假;

    //@@{ 获取:get, 目标:target, 属性键_:PropertyKey, 接收器:receiver }
    获取? (目标: T, p: 属性键_, 接收器: 任意): 任意;

    //@@{ 设置:set, 目标:target, 属性键_:PropertyKey, 值:value, 接收器:receiver }
    设置? (目标: T, p: 属性键_, 值: 任意, 接收器: 任意): 真假;

    //@@{ 删除属性:deleteProperty, 目标:target, 属性键_:PropertyKey }
    删除属性? (目标: T, p: 属性键_): 真假;

    //@@{ 定义属性:defineProperty, 目标:target, 属性键_:PropertyKey, 特性组:attributes, 属性描述符_:PropertyDescriptor }
    定义属性? (目标: T, p: 属性键_, 特性组: 属性描述符_): 真假;

    //@@{ 列举:enumerate, 目标:target, 属性键_:PropertyKey }
    列举? (目标: T): 属性键_[];

    //@@{ 本身键组:ownKeys, 目标:target, 属性键_:PropertyKey }
    本身键组? (目标: T): 属性键_[];

    //@@{ 应用:apply, 目标:target, 本体参数:thisArg, 参数数组:argArray }
    应用? (目标: T, 本体参数: 任意, 参数数组?: 任意): 任意;

    //@@{ 构造器:construct, 目标:target, 参数数组:argArray, 新目标:newTarget }
    构造器? (目标: T, 参数数组: 任意, 新目标?: 任意): 实例;

}

//@@{ 代理构造函数_:ProxyConstructor }
接口 代理构造函数_ {

    //@@{ 可撤销的:revocable, 目标:target, 处理程序:handler, 代理处理_:ProxyHandler, 代理:proxy, 撤销:revoke }
    可撤销的<T 扩展 实例>(目标: T, 处理程序: 代理处理_<T>): { 代理: T; 撤销: () => 无值; };

    //@@{ 目标:target, 处理程序:handler, 代理处理_:ProxyHandler }
    新建 <T 扩展 实例>(目标: T, 处理程序: 代理处理_<T>): T;

}

//@@{ 代理_:Proxy, 代理构造函数_:ProxyConstructor }
声明 值量 代理_: 代理构造函数_;
