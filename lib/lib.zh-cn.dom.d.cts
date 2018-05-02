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
/////////////////////////////
/// DOM APIs
/////////////////////////////

//@@{ 账户_:Account }
接口 账户_ {

    //@@{ 显示名称:displayName }
    显示名称: 文字;

    id: 文字;

    //@@{ 图像URL:imageURL }
    图像URL?: 文字;

    //@@{ 名字:name }
    名字?: 文字;

    //@@{ rp显示名称:rpDisplayName }
    rp显示名称: 文字;

}

//@@{ 算法_:Algorithm }
接口 算法_ {

    //@@{ 名字:name }
    名字: 文字;

}

//@@{ 动画事件初始化_:AnimationEventInit, 事件初始化_:EventInit }
接口 动画事件初始化_ 扩展 事件初始化_ {

    //@@{ 动画名称:animationName }
    动画名称?: 文字;

    //@@{ 运行时间:elapsedTime }
    运行时间?: 数字;

}

//@@{ 断言选项_:AssertionOptions }
接口 断言选项_ {

    //@@{ 允许列表:allowList, 作用域凭证描述符_:ScopedCredentialDescriptor }
    允许列表?: 作用域凭证描述符_[];

    //@@{ 扩展集合:extensions, 网络授权扩展_:WebAuthnExtensions }
    扩展集合?: 网络授权扩展_;

    //@@{ USV字符串:USVString }
    rpId?: USV字符串;

    //@@{ 超时秒数:timeoutSeconds }
    超时秒数?: 数字;

}

//@@{ 缓存查询选项_:CacheQueryOptions }
接口 缓存查询选项_ {

    //@@{ 缓存名称:cacheName }
    缓存名称?: 文字;

    //@@{ 忽略方法:ignoreMethod }
    忽略方法?: 真假;

    //@@{ 忽略搜索:ignoreSearch }
    忽略搜索?: 真假;

    //@@{ 忽略不同:ignoreVary }
    忽略不同?: 真假;

}

//@@{ 客户端数据_:ClientData }
接口 客户端数据_ {

    //@@{ 质疑:challenge }
    质疑: 文字;

    //@@{ 扩展集合:extensions, 网络授权扩展_:WebAuthnExtensions }
    扩展集合?: 网络授权扩展_;

    //@@{ 哈希算法:hashAlg, 算法_:Algorithm }
    哈希算法: 文字 | 算法_;

    //@@{ 起源:origin }
    起源: 文字;

    rpId: 文字;

    //@@{ 令牌绑定:tokenBinding }
    令牌绑定?: 文字;

}

//@@{ 关闭事件初始化_:CloseEventInit, 事件初始化_:EventInit }
接口 关闭事件初始化_ 扩展 事件初始化_ {

    //@@{ 代码:code }
    代码?: 数字;

    //@@{ 原因:reason }
    原因?: 文字;

    //@@{ 是干净的:wasClean }
    是干净的?: 真假;

}

//@@{ 组件事件初始化_:CompositionEventInit, UI事件初始化_:UIEventInit }
接口 组件事件初始化_ 扩展 UI事件初始化_ {

    //@@{ 数据:data }
    数据?: 文字;

}

//@@{ 确认站点特定的异常信息_:ConfirmSiteSpecificExceptionsInformation, 异常信息_:ExceptionInformation }
接口 确认站点特定的异常信息_ 扩展 异常信息_ {

    //@@{ 域字符串数组:arrayOfDomainStrings }
    域字符串数组?: 文字[];

}

//@@{ 真假参数约束_:ConstrainBooleanParameters }
接口 真假参数约束_ {

    //@@{ 准确的:exact }
    准确的?: 真假;

    //@@{ 理想的:ideal }
    理想的?: 真假;

}

//@@{ DOM字符串参数约束_:ConstrainDOMStringParameters }
接口 DOM字符串参数约束_ {

    //@@{ 准确的:exact }
    准确的?: 文字 | 文字[];

    //@@{ 理想的:ideal }
    理想的?: 文字 | 文字[];

}

//@@{ 双精度范围约束_:ConstrainDoubleRange, 双精度范围_:DoubleRange }
接口 双精度范围约束_ 扩展 双精度范围_ {

    //@@{ 准确的:exact }
    准确的?: 数字;

    //@@{ 理想的:ideal }
    理想的?: 数字;

}

//@@{ 长整数范围约束_:ConstrainLongRange, 长整数范围_:LongRange }
接口 长整数范围约束_ 扩展 长整数范围_ {

    //@@{ 准确的:exact }
    准确的?: 数字;

    //@@{ 理想的:ideal }
    理想的?: 数字;

}

//@@{ 视频面向模式参数约束_:ConstrainVideoFacingModeParameters }
接口 视频面向模式参数约束_ {

    //@@{ 准确的:exact, 视频面对模式枚举_:VideoFacingModeEnum }
    准确的?: 视频面对模式枚举_ | 视频面对模式枚举_[];

    //@@{ 理想的:ideal, 视频面对模式枚举_:VideoFacingModeEnum }
    理想的?: 视频面对模式枚举_ | 视频面对模式枚举_[];

}

//@@{ 自定义事件初始化_:CustomEventInit, 事件初始化_:EventInit }
接口 自定义事件初始化_ 扩展 事件初始化_ {

    //@@{ 细节:detail }
    细节?: 任意;

}

//@@{ 设备加速度词典_:DeviceAccelerationDict }
接口 设备加速度词典_ {

    x?: 数字 | 空值;

    y?: 数字 | 空值;

    z?: 数字 | 空值;

}

//@@{ 设备环境光事件初始化_:DeviceLightEventInit, 事件初始化_:EventInit }
接口 设备环境光事件初始化_ 扩展 事件初始化_ {

    //@@{ 值:value }
    值?: 数字;

}

//@@{ 设备运动事件初始化_:DeviceMotionEventInit, 事件初始化_:EventInit }
接口 设备运动事件初始化_ 扩展 事件初始化_ {

    //@@{ 加速度:acceleration, 设备加速度词典_:DeviceAccelerationDict }
    加速度?: 设备加速度词典_ | 空值;

    //@@{ 包括重力加速度:accelerationIncludingGravity, 设备加速度词典_:DeviceAccelerationDict }
    包括重力加速度?: 设备加速度词典_ | 空值;

    //@@{ 时间间隔:interval }
    时间间隔?: 数字 | 空值;

    //@@{ 旋转速度:rotationRate, 设备旋转速度词典_:DeviceRotationRateDict }
    旋转速度?: 设备旋转速度词典_ | 空值;

}

//@@{ 设备朝向事件初始化_:DeviceOrientationEventInit, 事件初始化_:EventInit }
接口 设备朝向事件初始化_ 扩展 事件初始化_ {

    //@@{ 绝对:absolute }
    绝对?: 真假;

    //@@{ 指针方向:alpha }
    指针方向?: 数字 | 空值;

    //@@{ 绕x轴方向:beta }
    绕x轴方向?: 数字 | 空值;

    //@@{ 绕y轴方向:gamma }
    绕y轴方向?: 数字 | 空值;

}

//@@{ 设备旋转速度词典_:DeviceRotationRateDict }
接口 设备旋转速度词典_ {

    //@@{ 指针方向:alpha }
    指针方向?: 数字 | 空值;

    //@@{ 绕x轴方向:beta }
    绕x轴方向?: 数字 | 空值;

    //@@{ 绕y轴方向:gamma }
    绕y轴方向?: 数字 | 空值;

}

//@@{ DOM矩形初始化_:DOMRectInit }
接口 DOM矩形初始化_ {

    //@@{ 高度:height }
    高度?: 数字;

    //@@{ 宽度:width }
    宽度?: 数字;

    x?: 数字;

    y?: 数字;

}

//@@{ 双精度范围_:DoubleRange }
接口 双精度范围_ {

    //@@{ 最大:max }
    最大?: 数字;

    //@@{ 最小:min }
    最小?: 数字;

}

//@@{ 错误事件初始化_:ErrorEventInit, 事件初始化_:EventInit }
接口 错误事件初始化_ 扩展 事件初始化_ {

    //@@{ 列数:colno }
    列数?: 数字;

    //@@{ 错误:error }
    错误?: 任意;

    //@@{ 文件名:filename }
    文件名?: 文字;

    //@@{ 行数:lineno }
    行数?: 数字;

    //@@{ 消息:message }
    消息?: 文字;

}

//@@{ 事件初始化_:EventInit }
接口 事件初始化_ {

    //@@{ 作用域:scoped }
    作用域?: 真假;

    //@@{ 可冒泡:bubbles }
    可冒泡?: 真假;

    //@@{ 可取消:cancelable }
    可取消?: 真假;

}

//@@{ 事件修饰符初始化_:EventModifierInit, UI事件初始化_:UIEventInit }
接口 事件修饰符初始化_ 扩展 UI事件初始化_ {

    //@@{ alt键:altKey }
    alt键?: 真假;

    //@@{ ctrl键:ctrlKey }
    ctrl键?: 真假;

    //@@{ meta键:metaKey }
    meta键?: 真假;

    //@@{ 修饰符Alt备用键:modifierAltGraph }
    修饰符Alt备用键?: 真假;

    //@@{ 修饰符大写锁定键:modifierCapsLock }
    修饰符大写锁定键?: 真假;

    //@@{ 修饰符Fn键:modifierFn }
    修饰符Fn键?: 真假;

    //@@{ 修饰符Fn键锁定键:modifierFnLock }
    修饰符Fn键锁定键?: 真假;

    //@@{ 修饰符Hyper键:modifierHyper }
    修饰符Hyper键?: 真假;

    //@@{ 修饰符数字锁定键:modifierNumLock }
    修饰符数字锁定键?: 真假;

    //@@{ 修饰符系统键:modifierOS }
    修饰符系统键?: 真假;

    //@@{ 修饰符滚轮锁定键:modifierScrollLock }
    修饰符滚轮锁定键?: 真假;

    //@@{ 修饰符Super键:modifierSuper }
    修饰符Super键?: 真假;

    //@@{ 修饰符符号键:modifierSymbol }
    修饰符符号键?: 真假;

    //@@{ 修饰符符号键锁定键:modifierSymbolLock }
    修饰符符号键锁定键?: 真假;

    //@@{ shift键:shiftKey }
    shift键?: 真假;

}

//@@{ 异常信息_:ExceptionInformation }
接口 异常信息_ {

    //@@{ 作用域:domain }
    作用域?: 文字 | 空值;

}

//@@{ 焦点事件初始化_:FocusEventInit, UI事件初始化_:UIEventInit }
接口 焦点事件初始化_ 扩展 UI事件初始化_ {

    //@@{ 相关目标:relatedTarget, 事件目标_:EventTarget }
    相关目标?: 事件目标_ | 空值;

}

//@@{ 焦点导航事件初始化_:FocusNavigationEventInit, 事件初始化_:EventInit }
接口 焦点导航事件初始化_ 扩展 事件初始化_ {

    //@@{ 导航的原因:navigationReason }
    导航的原因?: 文字 | 空值;

    //@@{ 原始高度:originHeight }
    原始高度?: 数字;

    //@@{ 原始左:originLeft }
    原始左?: 数字;

    //@@{ 原始上:originTop }
    原始上?: 数字;

    //@@{ 原始宽度:originWidth }
    原始宽度?: 数字;

}

//@@{ 焦点导航起源_:FocusNavigationOrigin }
接口 焦点导航起源_ {

    //@@{ 原始高度:originHeight }
    原始高度?: 数字;

    //@@{ 原始左:originLeft }
    原始左?: 数字;

    //@@{ 原始上:originTop }
    原始上?: 数字;

    //@@{ 原始宽度:originWidth }
    原始宽度?: 数字;

}

//@@{ 手柄事件初始化_:GamepadEventInit, 事件初始化_:EventInit }
接口 手柄事件初始化_ 扩展 事件初始化_ {

    //@@{ 手柄:gamepad, 手柄_:Gamepad }
    手柄?: 手柄_ | 空值;

}

//@@{ 取通知选项_:GetNotificationOptions }
接口 取通知选项_ {

    //@@{ 标签:tag }
    标签?: 文字;

}

//@@{ 哈希改变事件初始化_:HashChangeEventInit, 事件初始化_:EventInit }
接口 哈希改变事件初始化_ 扩展 事件初始化_ {

    //@@{ 新URL:newURL }
    新URL?: 文字 | 空值;

    //@@{ 旧URL:oldURL }
    旧URL?: 文字 | 空值;

}

//@@{ IDB索引参数_:IDBIndexParameters }
接口 IDB索引参数_ {

    //@@{ 多维条目:multiEntry }
    多维条目?: 真假;

    //@@{ 唯一的:unique }
    唯一的?: 真假;

}

//@@{ IDB对象存储参数_:IDBObjectStoreParameters }
接口 IDB对象存储参数_ {

    //@@{ 自增:autoIncrement }
    自增?: 真假;

    //@@{ 键路径:keyPath, IDB键路径_:IDBKeyPath }
    键路径?: IDB键路径_ | 空值;

}

//@@{ 交集观察者条目初始化_:IntersectionObserverEntryInit }
接口 交集观察者条目初始化_ {

    //@@{ 是交集:isIntersecting }
    是交集: 真假;

    //@@{ 边界客户端矩形:boundingClientRect, DOM矩形初始化_:DOMRectInit }
    边界客户端矩形: DOM矩形初始化_;

    //@@{ 交集矩形:intersectionRect, DOM矩形初始化_:DOMRectInit }
    交集矩形: DOM矩形初始化_;

    //@@{ 根界限:rootBounds, DOM矩形初始化_:DOMRectInit }
    根界限: DOM矩形初始化_;

    //@@{ 目标:target, 元素_:Element }
    目标: 元素_;

    //@@{ 时间:time }
    时间: 数字;

}

//@@{ 交集观察者初始化_:IntersectionObserverInit }
接口 交集观察者初始化_ {

    //@@{ 根:root, 元素_:Element }
    根?: 元素_ | 空值;

    //@@{ 根边界:rootMargin }
    根边界?: 文字;

    //@@{ 阈值:threshold }
    阈值?: 数字 | 数字[];

}

//@@{ 键算法_:KeyAlgorithm }
接口 键算法_ {

    //@@{ 名字:name }
    名字?: 文字;

}

//@@{ 键盘事件初始化_:KeyboardEventInit, 事件修饰符初始化_:EventModifierInit }
接口 键盘事件初始化_ 扩展 事件修饰符初始化_ {

    //@@{ 代码:code }
    代码?: 文字;

    //@@{ 键:key }
    键?: 文字;

    //@@{ 位置:location }
    位置?: 数字;

    //@@{ 重复:repeat }
    重复?: 真假;

}

//@@{ 长整数范围_:LongRange }
接口 长整数范围_ {

    //@@{ 最大:max }
    最大?: 数字;

    //@@{ 最小:min }
    最小?: 数字;

}

//@@{ 媒体加密事件初始化_:MediaEncryptedEventInit, 事件初始化_:EventInit }
接口 媒体加密事件初始化_ 扩展 事件初始化_ {

    //@@{ 初始数据:initData, 数组缓冲区_:ArrayBuffer }
    初始数据?: 数组缓冲区_ | 空值;

    //@@{ 初始数据类型:initDataType }
    初始数据类型?: 文字;

}

//@@{ 媒体键消息事件初始化_:MediaKeyMessageEventInit, 事件初始化_:EventInit }
接口 媒体键消息事件初始化_ 扩展 事件初始化_ {

    //@@{ 消息:message, 数组缓冲区_:ArrayBuffer }
    消息?: 数组缓冲区_ | 空值;

    //@@{ 消息类型:messageType, 媒体键消息类型_:MediaKeyMessageType }
    消息类型?: 媒体键消息类型_;

}

//@@{ 媒体键系统配置_:MediaKeySystemConfiguration }
接口 媒体键系统配置_ {

    //@@{ 音频功能:audioCapabilities, 媒体键系统媒体能力_:MediaKeySystemMediaCapability }
    音频功能?: 媒体键系统媒体能力_[];

    //@@{ 唯一标识符:distinctiveIdentifier, 媒体键要求_:MediaKeysRequirement }
    唯一标识符?: 媒体键要求_;

    //@@{ 初始数据类型组:initDataTypes }
    初始数据类型组?: 文字[];

    //@@{ 持续状态:persistentState, 媒体键要求_:MediaKeysRequirement }
    持续状态?: 媒体键要求_;

    //@@{ 视频功能:videoCapabilities, 媒体键系统媒体能力_:MediaKeySystemMediaCapability }
    视频功能?: 媒体键系统媒体能力_[];

}

//@@{ 媒体键系统媒体能力_:MediaKeySystemMediaCapability }
接口 媒体键系统媒体能力_ {

    //@@{ 内容类型:contentType }
    内容类型?: 文字;

    //@@{ 健壮性:robustness }
    健壮性?: 文字;

}

//@@{ 媒体流约束_:MediaStreamConstraints }
接口 媒体流约束_ {

    //@@{ 音频:audio, 媒体轨道约束_:MediaTrackConstraints }
    音频?: 真假 | 媒体轨道约束_;

    //@@{ 视频:video, 媒体轨道约束_:MediaTrackConstraints }
    视频?: 真假 | 媒体轨道约束_;

}

//@@{ 媒体流错误事件初始化_:MediaStreamErrorEventInit, 事件初始化_:EventInit }
接口 媒体流错误事件初始化_ 扩展 事件初始化_ {

    //@@{ 错误:error }
    错误?: MediaStreamError | 空值;

}

//@@{ 媒体流事件初始化_:MediaStreamEventInit, 事件初始化_:EventInit }
接口 媒体流事件初始化_ 扩展 事件初始化_ {

    //@@{ 流:stream, 媒体流_:MediaStream }
    流?: 媒体流_;

}

//@@{ 媒体流轨道事件初始化_:MediaStreamTrackEventInit, 事件初始化_:EventInit }
接口 媒体流轨道事件初始化_ 扩展 事件初始化_ {

    //@@{ 轨道:track, 媒体流轨道_:MediaStreamTrack }
    轨道?: 媒体流轨道_ | 空值;

}

//@@{ 媒体轨道功能_:MediaTrackCapabilities }
接口 媒体轨道功能_ {

    //@@{ 纵横比:aspectRatio, 双精度范围_:DoubleRange }
    纵横比?: 数字 | 双精度范围_;

    //@@{ 设备Id:deviceId }
    设备Id?: 文字;

    //@@{ 回波消除:echoCancellation }
    回波消除?: 真假[];

    //@@{ 面向模式:facingMode }
    面向模式?: 文字;

    //@@{ 帧率:frameRate, 双精度范围_:DoubleRange }
    帧率?: 数字 | 双精度范围_;

    //@@{ 组Id:groupId }
    组Id?: 文字;

    //@@{ 高度:height, 长整数范围_:LongRange }
    高度?: 数字 | 长整数范围_;

    //@@{ 采样率:sampleRate, 长整数范围_:LongRange }
    采样率?: 数字 | 长整数范围_;

    //@@{ 采样大小:sampleSize, 长整数范围_:LongRange }
    采样大小?: 数字 | 长整数范围_; 

    //@@{ 音量:volume, 双精度范围_:DoubleRange }
    音量?: 数字 | 双精度范围_;

    //@@{ 宽度:width, 长整数范围_:LongRange }
    宽度?: 数字 | 长整数范围_;

}

//@@{ 媒体轨道约束_:MediaTrackConstraints, 媒体轨道约束集_:MediaTrackConstraintSet }
接口 媒体轨道约束_ 扩展 媒体轨道约束集_ {

    //@@{ 高级选项:advanced, 媒体轨道约束集_:MediaTrackConstraintSet }
    高级选项?: 媒体轨道约束集_[];

}

//@@{ 媒体轨道约束集_:MediaTrackConstraintSet }
接口 媒体轨道约束集_ {

    //@@{ 纵横比:aspectRatio, 双精度范围约束_:ConstrainDoubleRange }
    纵横比?: 数字 | 双精度范围约束_;

    //@@{ 设备Id:deviceId, DOM字符串参数约束_:ConstrainDOMStringParameters }
    设备Id?: 文字 | 文字[] | DOM字符串参数约束_;

    //@@{ 回波消除:echoCancelation, 真假参数约束_:ConstrainBooleanParameters }
    回波消除?: 真假 | 真假参数约束_;

    //@@{ 面向模式:facingMode, DOM字符串参数约束_:ConstrainDOMStringParameters }
    面向模式?: 文字 | 文字[] | DOM字符串参数约束_;

    //@@{ 帧率:frameRate, 双精度范围约束_:ConstrainDoubleRange }
    帧率?: 数字 | 双精度范围约束_;

    //@@{ 组Id:groupId, DOM字符串参数约束_:ConstrainDOMStringParameters }
    组Id?: 文字 | 文字[] | DOM字符串参数约束_;

    //@@{ 高度:height, 长整数范围约束_:ConstrainLongRange }
    高度?: 数字 | 长整数范围约束_;

    //@@{ 采样率:sampleRate, 长整数范围约束_:ConstrainLongRange }
    采样率?: 数字 | 长整数范围约束_;

    //@@{ 采样大小:sampleSize, 长整数范围约束_:ConstrainLongRange }
    采样大小?: 数字 | 长整数范围约束_;

    //@@{ 音量:volume, 双精度范围约束_:ConstrainDoubleRange }
    音量?: 数字 | 双精度范围约束_;

    //@@{ 宽度:width, 长整数范围约束_:ConstrainLongRange }
    宽度?: 数字 | 长整数范围约束_;

}

//@@{ 媒体轨道设置_:MediaTrackSettings }
接口 媒体轨道设置_ {

    //@@{ 纵横比:aspectRatio }
    纵横比?: 数字;

    //@@{ 设备Id:deviceId }
    设备Id?: 文字;

    //@@{ 回波消除:echoCancellation }
    回波消除?: 真假;

    //@@{ 面向模式:facingMode }
    面向模式?: 文字;

    //@@{ 帧率:frameRate }
    帧率?: 数字;

    //@@{ 组Id:groupId }
    组Id?: 文字;

    //@@{ 高度:height }
    高度?: 数字;

    //@@{ 采样率:sampleRate }
    采样率?: 数字;

    //@@{ 采样大小:sampleSize }
    采样大小?: 数字;

    //@@{ 音量:volume }
    音量?: 数字;

    //@@{ 宽度:width }
    宽度?: 数字;

}

//@@{ 媒体轨道支持约束_:MediaTrackSupportedConstraints }
接口 媒体轨道支持约束_ {

    //@@{ 纵横比:aspectRatio }
    纵横比?: 真假;

    //@@{ 设备Id:deviceId }
    设备Id?: 真假;

    //@@{ 回波消除:echoCancellation }
    回波消除?: 真假;

    //@@{ 面向模式:facingMode }
    面向模式?: 真假;

    //@@{ 帧率:frameRate }
    帧率?: 真假;

    //@@{ 组Id:groupId }
    组Id?: 真假;

    //@@{ 高度:height }
    高度?: 真假;

    //@@{ 采样率:sampleRate }
    采样率?: 真假;

    //@@{ 采样大小:sampleSize }
    采样大小?: 真假;

    //@@{ 音量:volume }
    音量?: 真假;

    //@@{ 宽度:width }
    宽度?: 真假;

}

//@@{ 消息事件初始化_:MessageEventInit, 事件初始化_:EventInit }
接口 消息事件初始化_ 扩展 事件初始化_ {

    //@@{ 最后事件Id:lastEventId }
    最后事件Id?: 文字;

    channel?: 文字;

    //@@{ 数据:data }
    数据?: 任意;

    //@@{ 起源:origin }
    起源?: 文字;

    //@@{ 端口集:ports, 消息端口_:MessagePort }
    端口集?: 消息端口_[];

    //@@{ 源:source, 窗口_:Window }
    源?: 窗口_;

}

//@@{ 鼠标事件初始化_:MouseEventInit, 事件修饰符初始化_:EventModifierInit }
接口 鼠标事件初始化_ 扩展 事件修饰符初始化_ {

    //@@{ 按钮:button }
    按钮?: 数字;

    //@@{ 按钮组:buttons }
    按钮组?: 数字;

    //@@{ 客户区X:clientX }
    客户区X?: 数字;

    //@@{ 客户区Y:clientY }
    客户区Y?: 数字;

    //@@{ 相关目标:relatedTarget, 事件目标_:EventTarget }
    相关目标?: 事件目标_ | 空值;

    //@@{ 屏幕X:screenX }
    屏幕X?: 数字;

    //@@{ 屏幕Y:screenY }
    屏幕Y?: 数字;

}

//@@{ MS账户信息_:MSAccountInfo }
接口 MS账户信息_ {

    //@@{ 账户图像Uri:accountImageUri }
    账户图像Uri?: 文字;

    //@@{ 帐户名称:accountName }
    帐户名称?: 文字;

    //@@{ rp显示名称:rpDisplayName }
    rp显示名称: 文字;

    //@@{ 用户显示名称:userDisplayName }
    用户显示名称: 文字;

    //@@{ 用户Id:userId }
    用户Id?: 文字;

}

//@@{ MS音频本地客户端事件_:MSAudioLocalClientEvent, MS本地客户端事件基类_:MSLocalClientEventBase }
接口 MS音频本地客户端事件_ 扩展 MS本地客户端事件基类_ {

    //@@{ cpu不足事件比率:cpuInsufficientEventRatio }
    cpu不足事件比率?: 数字;

    //@@{ 设备捕获无法运行事件比率:deviceCaptureNotFunctioningEventRatio }
    设备捕获无法运行事件比率?: 数字;

    //@@{ 设备剪切事件比率:deviceClippingEventRatio }
    设备剪切事件比率?: 数字;

    //@@{ 设备回波事件比率:deviceEchoEventRatio }
    设备回波事件比率?: 数字;

    //@@{ 设备故障事件比率:deviceGlitchesEventRatio }
    设备故障事件比率?: 数字;

    //@@{ 设备半双工AEC事件比率:deviceHalfDuplexAECEventRatio }
    设备半双工AEC事件比率?: 数字;

    //@@{ 设备啸声事件计数:deviceHowlingEventCount }
    设备啸声事件计数?: 数字;

    //@@{ 设备低SNR事件比率:deviceLowSNREventRatio }
    设备低SNR事件比率?: 数字;

    //@@{ 设备低语音水平事件比率:deviceLowSpeechLevelEventRatio }
    设备低语音水平事件比率?: 数字;

    //@@{ 设备多端点事件计数:deviceMultipleEndpointsEventCount }
    设备多端点事件计数?: 数字;

    //@@{ 设备近端信号电平与回波电平事件比率:deviceNearEndToEchoRatioEventRatio }
    设备近端信号电平与回波电平事件比率?: 数字;

    //@@{ 设备渲染静音事件比率:deviceRenderMuteEventRatio }
    设备渲染静音事件比率?: 数字;

    //@@{ 设备不正常渲染事件比率:deviceRenderNotFunctioningEventRatio }
    设备不正常渲染事件比率?: 数字;

    //@@{ 设备渲染零音量事件比率:deviceRenderZeroVolumeEventRatio }
    设备渲染零音量事件比率?: 数字;

    //@@{ 网络延迟事件比率:networkDelayEventRatio }
    网络延迟事件比率?: 数字;

    //@@{ 网络发送质量事件比率:networkSendQualityEventRatio }
    网络发送质量事件比率?: 数字;

}

//@@{ MS音频接收有效载荷_:MSAudioRecvPayload, MS有效载荷基类_:MSPayloadBase }
接口 MS音频接收有效载荷_ 扩展 MS有效载荷基类_ {

    //@@{ 破裂损失长度1:burstLossLength1 }
    破裂损失长度1?: 数字;

    //@@{ 破裂损失长度2:burstLossLength2 }
    破裂损失长度2?: 数字;

    //@@{ 破裂损失长度3:burstLossLength3 }
    破裂损失长度3?: 数字;

    //@@{ 破裂损失长度4:burstLossLength4 }
    破裂损失长度4?: 数字;

    //@@{ 破裂损失长度5:burstLossLength5 }
    破裂损失长度5?: 数字;

    //@@{ 破裂损失长度6:burstLossLength6 }
    破裂损失长度6?: 数字;

    //@@{ 破裂损失长度7:burstLossLength7 }
    破裂损失长度7?: 数字;

    //@@{ 破裂损失长度8或更高:burstLossLength8OrHigher }
    破裂损失长度8或更高?: 数字;

    //@@{ fec接收距离1:fecRecvDistance1 }
    fec接收距离1?: 数字;

    //@@{ fec接收距离2:fecRecvDistance2 }
    fec接收距离2?: 数字;

    //@@{ fec接收距离3:fecRecvDistance3 }
    fec接收距离3?: 数字;

    //@@{ 包重新排序深度平均值:packetReorderDepthAvg }
    包重新排序深度平均值?: 数字;

    //@@{ 包重新排序深度最大值:packetReorderDepthMax }
    包重新排序深度最大值?: 数字;

    //@@{ 包重新排序比率:packetReorderRatio }
    包重新排序比率?: 数字;

    //@@{ 压缩比采样平均值:ratioCompressedSamplesAvg }
    压缩比采样平均值?: 数字;

    //@@{ 隐藏比采样平均值:ratioConcealedSamplesAvg }
    隐藏比采样平均值?: 数字;

    //@@{ 拉伸比采样平均值:ratioStretchedSamplesAvg }
    拉伸比采样平均值?: 数字;

    //@@{ 采样率:samplingRate }
    采样率?: 数字;

    //@@{ 信号:signal, MS音频接收信号_:MSAudioRecvSignal }
    信号?: MS音频接收信号_;

}

//@@{ MS音频接收信号_:MSAudioRecvSignal }
接口 MS音频接收信号_ {

    //@@{ 初始信号水平RMS:initialSignalLevelRMS }
    初始信号水平RMS?: 数字;

    //@@{ 接收噪音水平CH1:recvNoiseLevelCh1 }
    接收噪音水平CH1?: 数字;

    //@@{ 接收信号水平CH1:recvSignalLevelCh1 }
    接收信号水平CH1?: 数字;

    //@@{ 渲染回送信号水平:renderLoopbackSignalLevel }
    渲染回送信号水平?: 数字;

    //@@{ 渲染噪音水平:renderNoiseLevel }
    渲染噪音水平?: 数字;

    //@@{ 渲染信号水平:renderSignalLevel }
    渲染信号水平?: 数字;

}

//@@{ MS音频发送有效载荷_:MSAudioSendPayload, MS有效载荷基类_:MSPayloadBase }
接口 MS音频发送有效载荷_ 扩展 MS有效载荷基类_ {

    //@@{ 音频FEC使用:audioFECUsed }
    音频FEC使用?: 真假;

    //@@{ 采样率:samplingRate }
    采样率?: 数字;

    //@@{ 发送静音百分比:sendMutePercent }
    发送静音百分比?: 数字;

    //@@{ 信号:signal, MS音频发送信号_:MSAudioSendSignal }
    信号?: MS音频发送信号_;

}

//@@{ MS音频发送信号_:MSAudioSendSignal }
接口 MS音频发送信号_ {

    //@@{ 噪音水平:noiseLevel }
    噪音水平?: 数字;

    //@@{ 发送噪音水平Ch1:sendNoiseLevelCh1 }
    发送噪音水平Ch1?: 数字;

    //@@{ 发送信号水平CH1:sendSignalLevelCh1 }
    发送信号水平CH1?: 数字;

}

//@@{ MS连接_:MSConnectivity }
接口 MS连接_ {

    //@@{ ice类型:iceType, MSIce类型_:MSIceType }
    ice类型?: MSIce类型_;

    //@@{ ice警告标志:iceWarningFlags, MSICE警告标志_:MSIceWarningFlags }
    ice警告标志?: MSICE警告标志_;

    //@@{ 中继地址:relayAddress, MS中继服务器地址_:MSRelayAddress }
    中继地址?: MS中继服务器地址_;

}

//@@{ MS凭证过滤器_:MSCredentialFilter }
接口 MS凭证过滤器_ {

    //@@{ 接受:accept, MS凭证规范_:MSCredentialSpec }
    接受?: MS凭证规范_[];

}

//@@{ MS凭证参数_:MSCredentialParameters }
接口 MS凭证参数_ {

    //@@{ 类型:type, MS凭证类型_:MSCredentialType }
    类型?: MS凭证类型_;

}

//@@{ MS凭证规范_:MSCredentialSpec }
接口 MS凭证规范_ {

    id?: 文字;

    //@@{ 类型:type, MS凭证类型_:MSCredentialType }
    类型: MS凭证类型_;

}

//@@{ MS延迟_:MSDelay }
接口 MS延迟_ {

    //@@{ 往返:roundTrip }
    往返?: 数字;

    //@@{ 往返最大:roundTripMax }
    往返最大?: 数字;

}

//@@{ MS描述_:MSDescription, RTC统计数据_:RTCStats }
接口 MS描述_ 扩展 RTC统计数据_ {

    //@@{ 连通性:connectivity, MS连接_:MSConnectivity }
    连通性?: MS连接_;

    //@@{ 设备Dev名称:deviceDevName }
    设备Dev名称?: 文字;

    //@@{ 本地地址:localAddr, MSIP地址信息_:MSIPAddressInfo }
    本地地址?: MSIP地址信息_;

    //@@{ 网络连通性:networkconnectivity, MS网络连接信息_:MSNetworkConnectivityInfo }
    网络连通性?: MS网络连接信息_;

    //@@{ 反射本地IP地址:reflexiveLocalIPAddr, MSIP地址信息_:MSIPAddressInfo }
    反射本地IP地址?: MSIP地址信息_;

    //@@{ 远程地址:remoteAddr, MSIP地址信息_:MSIPAddressInfo }
    远程地址?: MSIP地址信息_;

    //@@{ 传输:transport, RTCIce协议_:RTCIceProtocol }
    传输?: RTCIce协议_;

}

//@@{ MSFIDO凭证参数_:MSFIDOCredentialParameters, MS凭证参数_:MSCredentialParameters }
接口 MSFIDO凭证参数_ 扩展 MS凭证参数_ {

    //@@{ 算法:algorithm, 算法_:Algorithm }
    算法?: 文字 | 算法_;

    //@@{ 身份验证器:authenticators }
    身份验证器?: AAGUID[];

}

//@@{ MSICE警告标志_:MSIceWarningFlags }
接口 MSICE警告标志_ {

    //@@{ 分配消息完整性失败:allocationMessageIntegrityFailed }
    分配消息完整性失败?: 真假;

    //@@{ 备用服务器收到:alternateServerReceived }
    备用服务器收到?: 真假;

    //@@{ conn检查消息完整性失败:connCheckMessageIntegrityFailed }
    conn检查消息完整性失败?: 真假;

    //@@{ conn检查其他错误:connCheckOtherError }
    conn检查其他错误?: 真假;

    //@@{ fips分配失败:fipsAllocationFailure }
    fips分配失败?: 真假;

    //@@{ 多个中继服务器尝试:multipleRelayServersAttempted }
    多个中继服务器尝试?: 真假;

    //@@{ 没有中继服务器配置:noRelayServersConfigured }
    没有中继服务器配置?: 真假;

    //@@{ 端口范围耗尽:portRangeExhausted }
    端口范围耗尽?: 真假;

    //@@{ 伪TLS失败:pseudoTLSFailure }
    伪TLS失败?: 真假;

    //@@{ tcpNat连接失败:tcpNatConnectivityFailed }
    tcpNat连接失败?: 真假;

    //@@{ tcp中继服务器连接失败:tcpRelayConnectivityFailed }
    tcp中继服务器连接失败?: 真假;

    //@@{ turn身份验证未知的用户名错误:turnAuthUnknownUsernameError }
    turn身份验证未知的用户名错误?: 真假;

    //@@{ turnTcp分配失败:turnTcpAllocateFailed }
    turnTcp分配失败?: 真假;

    //@@{ turnTcp发送失败:turnTcpSendFailed }
    turnTcp发送失败?: 真假;

    //@@{ turnTcp超时:turnTcpTimedOut }
    turnTcp超时?: 真假;

    //@@{ turnTcp连接失败:turnTurnTcpConnectivityFailed }
    turnTcp连接失败?: 真假;

    //@@{ turnUdp分配失败:turnUdpAllocateFailed }
    turnUdp分配失败?: 真假;

    //@@{ turnUdp发送失败:turnUdpSendFailed }
    turnUdp发送失败?: 真假;

    //@@{ udp本地连接失败:udpLocalConnectivityFailed }
    udp本地连接失败?: 真假;

    //@@{ udpNat连接失败:udpNatConnectivityFailed }
    udpNat连接失败?: 真假;

    //@@{ udp中继服务器连接失败:udpRelayConnectivityFailed }
    udp中继服务器连接失败?: 真假;

    //@@{ 使用候选检查失败:useCandidateChecksFailed }
    使用候选检查失败?: 真假;

}

//@@{ MSIP地址信息_:MSIPAddressInfo }
接口 MSIP地址信息_ {

    //@@{ IP地址:ipAddr }
    IP地址?: 文字;

    //@@{ 制造商Mac地址遮罩:manufacturerMacAddrMask }
    制造商Mac地址遮罩?: 文字;

    //@@{ 端口:port }
    端口?: 数字;

}

//@@{ MS抖动_:MSJitter }
接口 MS抖动_ {

    //@@{ 两次间隔:interArrival }
    两次间隔?: 数字;

    //@@{ 两次间隔最大:interArrivalMax }
    两次间隔最大?: 数字;

    //@@{ 两次间隔SD:interArrivalSD }
    两次间隔SD?: 数字;

}

//@@{ MS本地客户端事件基类_:MSLocalClientEventBase, RTC统计数据_:RTCStats }
接口 MS本地客户端事件基类_ 扩展 RTC统计数据_ {

    //@@{ 网络带宽低事件比率:networkBandwidthLowEventRatio }
    网络带宽低事件比率?: 数字;

    //@@{ 网络接收质量事件比率:networkReceiveQualityEventRatio }
    网络接收质量事件比率?: 数字;

}

//@@{ MS网络_:MSNetwork, RTC统计数据_:RTCStats }
接口 MS网络_ 扩展 RTC统计数据_ {

    //@@{ 延迟:delay, MS延迟_:MSDelay }
    延迟?: MS延迟_;

    //@@{ 抖动:jitter, MS抖动_:MSJitter }
    抖动?: MS抖动_;

    //@@{ 包损失:packetLoss, MS包损失_:MSPacketLoss }
    包损失?: MS包损失_;

    //@@{ 利用:utilization, MS利用_:MSUtilization }
    利用?: MS利用_;

}

//@@{ MS网络连接信息_:MSNetworkConnectivityInfo }
接口 MS网络连接信息_ {

    //@@{ 链接速度:linkspeed }
    链接速度?: 数字;

    //@@{ 网络连接详细信息:networkConnectionDetails }
    网络连接详细信息?: 文字;

    vpn?: 真假;

}

//@@{ MS网络接口类型_:MSNetworkInterfaceType }
接口 MS网络接口类型_ {

    //@@{ 以太网接口类型:interfaceTypeEthernet }
    以太网接口类型?: 真假;

    //@@{ 接口类型PPP:interfaceTypePPP }
    接口类型PPP?: 真假;

    //@@{ 接口类型隧道:interfaceTypeTunnel }
    接口类型隧道?: 真假;

    //@@{ 接口类型无线:interfaceTypeWireless }
    接口类型无线?: 真假;

    //@@{ 接口类型WWAN:interfaceTypeWWAN }
    接口类型WWAN?: 真假;

}

//@@{ MS出站网络_:MSOutboundNetwork, MS网络_:MSNetwork }
接口 MS出站网络_ 扩展 MS网络_ {

    //@@{ 应用的带宽限制:appliedBandwidthLimit }
    应用的带宽限制?: 数字;

}

//@@{ MS包损失_:MSPacketLoss }
接口 MS包损失_ {

    //@@{ 损失率:lossRate }
    损失率?: 数字;

    //@@{ 损失率最大:lossRateMax }
    损失率最大?: 数字;

}

//@@{ MS有效载荷基类_:MSPayloadBase, RTC统计数据_:RTCStats }
接口 MS有效载荷基类_ 扩展 RTC统计数据_ {

    //@@{ 有效载荷描述:payloadDescription }
    有效载荷描述?: 文字;

}

//@@{ MS端口范围_:MSPortRange }
接口 MS端口范围_ {

    //@@{ 最大:max }
    最大?: 数字;

    //@@{ 最小:min }
    最小?: 数字;

}

//@@{ MS中继服务器地址_:MSRelayAddress }
接口 MS中继服务器地址_ {

    //@@{ 端口:port }
    端口?: 数字;

    //@@{ 中续地址:relayAddress }
    中续地址?: 文字;

}

//@@{ MS签名参数_:MSSignatureParameters }
接口 MS签名参数_ {

    //@@{ 用户提示:userPrompt }
    用户提示?: 文字;

}

//@@{ MS传输诊断统计数据_:MSTransportDiagnosticsStats, RTC统计数据_:RTCStats }
接口 MS传输诊断统计数据_ 扩展 RTC统计数据_ {

    //@@{ 分配时间在Ms:allocationTimeInMs }
    分配时间在Ms?: 数字;

    //@@{ 基地址:baseAddress }
    基地址?: 文字;

    //@@{ 基地接口:baseInterface, MS网络接口类型_:MSNetworkInterfaceType }
    基地接口?: MS网络接口类型_;

    //@@{ ice角色:iceRole, RTCIce角色_:RTCIceRole }
    ice角色?: RTCIce角色_;

    //@@{ ice警告标志:iceWarningFlags, MSICE警告标志_:MSIceWarningFlags }
    ice警告标志?: MSICE警告标志_;

    //@@{ 接口_:interfaces, MS网络接口类型_:MSNetworkInterfaceType }
    接口_?: MS网络接口类型_;

    //@@{ 本地地址:localAddress }
    本地地址?: 文字;

    //@@{ 本地地址类型:localAddrType, MSIce地址类型_:MSIceAddrType }
    本地地址类型?: MSIce地址类型_;

    //@@{ 本地接口:localInterface, MS网络接口类型_:MSNetworkInterfaceType }
    本地接口?: MS网络接口类型_;

    //@@{ 本地MR:localMR }
    本地MR?: 文字;

    //@@{ 本地MRTCP端口:localMRTCPPort }
    本地MRTCP端口?: 数字;

    //@@{ 本地站点:localSite }
    本地站点?: 文字;

    //@@{ msRtc引擎版本:msRtcEngineVersion }
    msRtc引擎版本?: 文字;

    //@@{ 网络名称:networkName }
    网络名称?: 文字;

    //@@{ 同意申请收到数:numConsentReqReceived }
    同意申请收到数?: 数字;

    //@@{ 同意请求发送数:numConsentReqSent }
    同意请求发送数?: 数字;

    //@@{ 同意收到答复数:numConsentRespReceived }
    同意收到答复数?: 数字;

    //@@{ 同意发送答复数:numConsentRespSent }
    同意发送答复数?: 数字;

    //@@{ 端口范围最大:portRangeMax }
    端口范围最大?: 数字;

    //@@{ 端口范围最小:portRangeMin }
    端口范围最小?: 数字;

    //@@{ 协议:protocol, RTCIce协议_:RTCIceProtocol }
    协议?: RTCIce协议_;

    //@@{ 远程地址:remoteAddress }
    远程地址?: 文字;

    //@@{ 远程地址类型:remoteAddrType, MSIce地址类型_:MSIceAddrType }
    远程地址类型?: MSIce地址类型_;

    //@@{ 远程MR:remoteMR }
    远程MR?: 文字;

    //@@{ 远程MRTCP端口:remoteMRTCPPort }
    远程MRTCP端口?: 数字;

    //@@{ 远程站点:remoteSite }
    远程站点?: 文字;

    rtpRtcpMux?: 真假;

    //@@{ stun版本:stunVer }
    stun版本?: 数字;

}

//@@{ MS利用_:MSUtilization }
接口 MS利用_ {

    //@@{ 带宽估计:bandwidthEstimation }
    带宽估计?: 数字;

    //@@{ 带宽估计平均值:bandwidthEstimationAvg }
    带宽估计平均值?: 数字;

    //@@{ 带宽估计最大值:bandwidthEstimationMax }
    带宽估计最大值?: 数字;

    //@@{ 带宽估计最小值:bandwidthEstimationMin }
    带宽估计最小值?: 数字;

    //@@{ 带宽估计StdDev:bandwidthEstimationStdDev }
    带宽估计StdDev?: 数字;

    //@@{ 信息包:packets }
    信息包?: 数字;

}

//@@{ MS视频有效载荷_:MSVideoPayload, MS有效载荷基类_:MSPayloadBase }
接口 MS视频有效载荷_ 扩展 MS有效载荷基类_ {

    //@@{ 持续时间秒:durationSeconds }
    持续时间秒?: 数字;

    //@@{ 决议:resolution }
    决议?: 文字;

    //@@{ 视频比特率平均值:videoBitRateAvg }
    视频比特率平均值?: 数字;

    //@@{ 视频比特率最大值:videoBitRateMax }
    视频比特率最大值?: 数字;

    //@@{ 视频帧率平均值:videoFrameRateAvg }
    视频帧率平均值?: 数字;

    //@@{ 视频丢包比率:videoPacketLossRate }
    视频丢包比率?: 数字;

}

//@@{ MS视频Recv有效载荷_:MSVideoRecvPayload, MS视频有效载荷_:MSVideoPayload }
接口 MS视频Recv有效载荷_ 扩展 MS视频有效载荷_ {

    //@@{ 低比特率调用百分比:lowBitRateCallPercent }
    低比特率调用百分比?: 数字;

    //@@{ 低帧率调用百分比:lowFrameRateCallPercent }
    低帧率调用百分比?: 数字;

    //@@{ recv平均比特率:recvBitRateAverage }
    recv平均比特率?: 数字;

    //@@{ recv比特率最大值:recvBitRateMaximum }
    recv比特率最大值?: 数字;

    //@@{ recv编码类型:recvCodecType }
    recv编码类型?: 文字;

    //@@{ recvFps调和平均数:recvFpsHarmonicAverage }
    recvFps调和平均数?: 数字;

    //@@{ recv帧率平均:recvFrameRateAverage }
    recv帧率平均?: 数字;

    //@@{ recvNumRes开关:recvNumResSwitches }
    recvNumRes开关?: 数字;

    //@@{ recv重新排序缓冲最大成功地排序:recvReorderBufferMaxSuccessfullyOrderedExtent }
    recv重新排序缓冲最大成功地排序?: 数字;

    //@@{ recv重新排序缓冲最大成功地命令延迟时间:recvReorderBufferMaxSuccessfullyOrderedLateTime }
    recv重新排序缓冲最大成功地命令延迟时间?: 数字;

    //@@{ recv重新排序缓冲数据包由于缓冲区耗尽:recvReorderBufferPacketsDroppedDueToBufferExhaustion }
    recv重新排序缓冲数据包由于缓冲区耗尽?: 数字;

    //@@{ recv重新排序缓冲包丢失由于超时:recvReorderBufferPacketsDroppedDueToTimeout }
    recv重新排序缓冲包丢失由于超时?: 数字;

    //@@{ recv重新排序缓冲区重新排序的数据包:recvReorderBufferReorderedPackets }
    recv重新排序缓冲区重新排序的数据包?: 数字;

    //@@{ recv分辨率高度:recvResolutionHeight }
    recv分辨率高度?: 数字;

    //@@{ recv分辨率宽度:recvResolutionWidth }
    recv分辨率宽度?: 数字;

    //@@{ recv视频流最大值:recvVideoStreamsMax }
    recv视频流最大值?: 数字;

    //@@{ recv视频流最小值:recvVideoStreamsMin }
    recv视频流最小值?: 数字;

    //@@{ recv视频流模式:recvVideoStreamsMode }
    recv视频流模式?: 数字;

    //@@{ 重新排序缓冲区的总包:reorderBufferTotalPackets }
    重新排序缓冲区的总包?: 数字;

    //@@{ 视频帧损失率:videoFrameLossRate }
    视频帧损失率?: 数字;

    //@@{ 视频帖子FECPLR:videoPostFECPLR }
    视频帖子FECPLR?: 数字;

    //@@{ 视频分辨率:videoResolutions, MS视频决议分布_:MSVideoResolutionDistribution }
    视频分辨率?: MS视频决议分布_;

}

//@@{ MS视频决议分布_:MSVideoResolutionDistribution }
接口 MS视频决议分布_ {

    //@@{ cif质量:cifQuality }
    cif质量?: 数字;

    //@@{ h1080质量:h1080Quality }
    h1080质量?: 数字;

    //@@{ h1440质量:h1440Quality }
    h1440质量?: 数字;

    //@@{ h2160质量:h2160Quality }
    h2160质量?: 数字;

    //@@{ h720质量:h720Quality }
    h720质量?: 数字;

    //@@{ vga质量:vgaQuality }
    vga质量?: 数字;

}

//@@{ MS视频发送有效载荷_:MSVideoSendPayload, MS视频有效载荷_:MSVideoPayload }
接口 MS视频发送有效载荷_ 扩展 MS视频有效载荷_ {

    //@@{ 发送比特率平均:sendBitRateAverage }
    发送比特率平均?: 数字;

    //@@{ 发送比特率最大:sendBitRateMaximum }
    发送比特率最大?: 数字;

    //@@{ 发送帧率平均:sendFrameRateAverage }
    发送帧率平均?: 数字;

    //@@{ 发送决议高:sendResolutionHeight }
    发送决议高?: 数字;

    //@@{ 发送决议宽:sendResolutionWidth }
    发送决议宽?: 数字;

    //@@{ 发送视频流最大值:sendVideoStreamsMax }
    发送视频流最大值?: 数字;

}

//@@{ MS缩放选项_:MsZoomToOptions }
接口 MS缩放选项_ {

    //@@{ 动画:animate }
    动画?: 文字;

    //@@{ 内容X:contentX }
    内容X?: 数字;

    //@@{ 内容Y:contentY }
    内容Y?: 数字;

    //@@{ 比例因子:scaleFactor }
    比例因子?: 数字;

    //@@{ 视窗X:viewportX }
    视窗X?: 文字 | 空值;

    //@@{ 视窗Y:viewportY }
    视窗Y?: 文字 | 空值;

}

//@@{ 突变观察者初始化_:MutationObserverInit }
接口 突变观察者初始化_ {

    //@@{ 属性过滤:attributeFilter }
    属性过滤?: 文字[];

    //@@{ 属性旧值:attributeOldValue }
    属性旧值?: 真假;

    //@@{ 属性:attributes }
    属性?: 真假;

    //@@{ 字符数据:characterData }
    字符数据?: 真假;

    //@@{ 字符数据旧值:characterDataOldValue }
    字符数据旧值?: 真假;

    //@@{ 子列表:childList }
    子列表?: 真假;

    //@@{ 子树:subtree }
    子树?: 真假;

}

//@@{ 通知选项_:NotificationOptions }
接口 通知选项_ {

    //@@{ 体:body }
    体?: 文字;

    //@@{ 文本方向:dir, 通知方向_:NotificationDirection }
    文本方向?: 通知方向_;

    //@@{ 图标:icon }
    图标?: 文字;

    //@@{ 语言:lang }
    语言?: 文字;

    //@@{ 标签:tag }
    标签?: 文字;

}

//@@{ 对象URL选项_:ObjectURLOptions }
接口 对象URL选项_ {

    //@@{ 仅一次:oneTimeOnly }
    仅一次?: 真假;

}

//@@{ 付款金额_:PaymentCurrencyAmount }
接口 付款金额_ {

    //@@{ 货币:currency }
    货币: 文字;

    //@@{ 货币体系:currencySystem }
    货币体系?: 文字;

    //@@{ 值:value }
    值: 文字;

}

//@@{ 付款细节_:PaymentDetails }
接口 付款细节_ {

    //@@{ 显示项目:displayItems, 付款项_:PaymentItem }
    显示项目?: 付款项_[];

    //@@{ 错误:error }
    错误?: 文字;

    //@@{ 修饰符:modifiers, 付款细节修饰符_:PaymentDetailsModifier }
    修饰符?: 付款细节修饰符_[];

    //@@{ 航运选项:shippingOptions, 付款航运选项_:PaymentShippingOption }
    航运选项?: 付款航运选项_[];

    //@@{ 汇总:total, 付款项_:PaymentItem }
    汇总?: 付款项_;

}

//@@{ 付款细节修饰符_:PaymentDetailsModifier }
接口 付款细节修饰符_ {

    //@@{ 额外的显示项目:additionalDisplayItems, 付款项_:PaymentItem }
    额外的显示项目?: 付款项_[];

    //@@{ 数据:data }
    数据?: 任意;

    //@@{ 支持方法:supportedMethods }
    支持方法: 文字[];

    //@@{ 汇总:total, 付款项_:PaymentItem }
    汇总?: 付款项_;

}

//@@{ 付款项_:PaymentItem }
接口 付款项_ {

    //@@{ 数额:amount, 付款金额_:PaymentCurrencyAmount }
    数额: 付款金额_;

    //@@{ 标签:label }
    标签: 文字;

    //@@{ 等待:pending }
    等待?: 真假;

}

//@@{ 付款方法数据_:PaymentMethodData }
接口 付款方法数据_ {

    //@@{ 数据:data }
    数据?: 任意;

    //@@{ 支持方法:supportedMethods }
    支持方法: 文字[];

}

//@@{ 付款选项_:PaymentOptions }
接口 付款选项_ {

    //@@{ 要求付款人电子邮件:requestPayerEmail }
    要求付款人电子邮件?: 真假;

    //@@{ 要求付款人的名字:requestPayerName }
    要求付款人的名字?: 真假;

    //@@{ 要求付款人电话:requestPayerPhone }
    要求付款人电话?: 真假;

    //@@{ 要求航运:requestShipping }
    要求航运?: 真假;

    //@@{ 运输类型:shippingType }
    运输类型?: 文字;

}

//@@{ 付款请求更新事件初始化_:PaymentRequestUpdateEventInit, 事件初始化_:EventInit }
接口 付款请求更新事件初始化_ 扩展 事件初始化_ {

}

//@@{ 付款航运选项_:PaymentShippingOption }
接口 付款航运选项_ {

    //@@{ 数额:amount, 付款金额_:PaymentCurrencyAmount }
    数额: 付款金额_;

    id: 文字;

    //@@{ 标签:label }
    标签: 文字;

    //@@{ 选择:selected }
    选择?: 真假;

}

//@@{ 周期波约束_:PeriodicWaveConstraints }
接口 周期波约束_ {

    //@@{ 禁用标准化:disableNormalization }
    禁用标准化?: 真假;

}

//@@{ 指针事件初始化_:PointerEventInit, 鼠标事件初始化_:MouseEventInit }
接口 指针事件初始化_ 扩展 鼠标事件初始化_ {

    //@@{ 高度:height }
    高度?: 数字;

    //@@{ 是主要的:isPrimary }
    是主要的?: 真假;

    //@@{ 指针Id:pointerId }
    指针Id?: 数字;

    //@@{ 指针类型:pointerType }
    指针类型?: 文字;

    //@@{ 压力:pressure }
    压力?: 数字;

    //@@{ 倾斜X:tiltX }
    倾斜X?: 数字;

    //@@{ 倾斜Y:tiltY }
    倾斜Y?: 数字;

    //@@{ 宽度:width }
    宽度?: 数字;

}

//@@{ 回退状态事件初始化_:PopStateEventInit, 事件初始化_:EventInit }
接口 回退状态事件初始化_ 扩展 事件初始化_ {

    //@@{ 状态:state }
    状态?: 任意;

}

//@@{ 位置选项_:PositionOptions }
接口 位置选项_ {

    //@@{ 启用高精度:enableHighAccuracy }
    启用高精度?: 真假;

    //@@{ 最大时长:maximumAge }
    最大时长?: 数字;

    //@@{ 超时:timeout }
    超时?: 数字;

}

//@@{ 进度事件初始化_:ProgressEventInit, 事件初始化_:EventInit }
接口 进度事件初始化_ 扩展 事件初始化_ {

    //@@{ 长度可计算:lengthComputable }
    长度可计算?: 真假;

    //@@{ 加载:loaded }
    加载?: 数字;

    //@@{ 汇总:total }
    汇总?: 数字;

}

//@@{ 压入订阅选项初始化_:PushSubscriptionOptionsInit }
接口 压入订阅选项初始化_ {

    //@@{ 应用程序服务器键:applicationServerKey }
    应用程序服务器键?: 任意;

    //@@{ 只有用户可见:userVisibleOnly }
    只有用户可见?: 真假;

}

//@@{ 注册选项_:RegistrationOptions }
接口 注册选项_ {

    //@@{ 范围:scope }
    范围?: 文字;

}

//@@{ 请求初始化_:RequestInit }
接口 请求初始化_ {

    //@@{ 体:body }
    体?: 任意;

    //@@{ 缓存:cache, 请求缓存_:RequestCache }
    缓存?: 请求缓存_;

    //@@{ 凭证:credentials, 请求凭证_:RequestCredentials }
    凭证?: 请求凭证_;

    //@@{ 报头:headers, 报头_:Headers }
    报头?: 报头_ | 文字[][];

    //@@{ 完整性:integrity }
    完整性?: 文字; 

    //@@{ 保持住:keepalive }
    保持住?: 真假;

    //@@{ 方法:method }
    方法?: 文字;

    //@@{ 模式:mode, 请求模式_:RequestMode }
    模式?: 请求模式_;

    //@@{ 重定向:redirect, 请求重定向_:RequestRedirect }
    重定向?: 请求重定向_;

    //@@{ 介绍人:referrer }
    介绍人?: 文字;

    //@@{ 介绍人策略:referrerPolicy, 推荐人政策_:ReferrerPolicy }
    介绍人策略?: 推荐人政策_;

    //@@{ 窗口:window }
    窗口?: 任意;

}

//@@{ 响应初始化_:ResponseInit }
接口 响应初始化_ {

    //@@{ 报头:headers, 报头_:Headers }
    报头?: 报头_ | 文字[][];

    //@@{ 状态:status }
    状态?: 数字;

    //@@{ 状态文本:statusText }
    状态文本?: 文字;

}

//@@{ RTC配置_:RTCConfiguration }
接口 RTC配置_ {

    //@@{ 包策略:bundlePolicy, RTC包政策_:RTCBundlePolicy }
    包策略?: RTC包政策_;

    //@@{ ice服务器:iceServers, RTCICE服务器_:RTCIceServer }
    ice服务器?: RTCICE服务器_[];

    //@@{ ice传输策略:iceTransportPolicy, RTCIce传输政策_:RTCIceTransportPolicy }
    ice传输策略?: RTCIce传输政策_;

    //@@{ 对等标识符:peerIdentity }
    对等标识符?: 文字;

}

//@@{ RTCDtls指纹_:RTCDtlsFingerprint }
接口 RTCDtls指纹_ {

    //@@{ 算法:algorithm }
    算法?: 文字;

    //@@{ 值:value }
    值?: 文字;

}

//@@{ RTCDtls参数_:RTCDtlsParameters }
接口 RTCDtls参数_ {

    //@@{ 指纹:fingerprints, RTCDtls指纹_:RTCDtlsFingerprint }
    指纹?: RTCDtls指纹_[];

    //@@{ 角色:role, RTCDtls角色_:RTCDtlsRole }
    角色?: RTCDtls角色_;

}

//@@{ RTCDTMF音调改变事件初始化_:RTCDTMFToneChangeEventInit, 事件初始化_:EventInit }
接口 RTCDTMF音调改变事件初始化_ 扩展 事件初始化_ {

    //@@{ 音调:tone }
    音调?: 文字;

}

//@@{ RTCICE候选属性_:RTCIceCandidateAttributes, RTC统计数据_:RTCStats }
接口 RTCICE候选属性_ 扩展 RTC统计数据_ {

    //@@{ 地址源Url:addressSourceUrl }
    地址源Url?: 文字;

    //@@{ 候选类型:candidateType, RTC统计Ice候选类型_:RTCStatsIceCandidateType }
    候选类型?: RTC统计Ice候选类型_;

    //@@{ ip地址:ipAddress }
    ip地址?: 文字;

    //@@{ 端口号:portNumber }
    端口号?: 数字;

    //@@{ 优先级:priority }
    优先级?: 数字;

    //@@{ 传输:transport }
    传输?: 文字;

}

//@@{ RTCICE候选完整性_:RTCIceCandidateComplete }
接口 RTCICE候选完整性_ {

}

//@@{ RTCICE候选字典_:RTCIceCandidateDictionary }
接口 RTCICE候选字典_ {

    //@@{ 基础:foundation }
    基础?: 文字;

    ip?: 文字;

    //@@{ msMTurn会话Id:msMTurnSessionId }
    msMTurn会话Id?: 文字;

    //@@{ 端口:port }
    端口?: 数字;

    //@@{ 优先级:priority }
    优先级?: 数字;

    //@@{ 协议:protocol, RTCIce协议_:RTCIceProtocol }
    协议?: RTCIce协议_;

    //@@{ 相关地址:relatedAddress }
    相关地址?: 文字;

    //@@{ 相关端口:relatedPort }
    相关端口?: 数字;

    //@@{ tcp类型:tcpType, RTCIceTcp候选类型_:RTCIceTcpCandidateType }
    tcp类型?: RTCIceTcp候选类型_;

    //@@{ 类型:type, RTCIce候选类型:RTCIceCandidateType }
    类型?: RTCIce候选类型;

}

//@@{ RTCICE候选初始化_:RTCIceCandidateInit }
接口 RTCICE候选初始化_ {

    //@@{ 候选:candidate }
    候选?: 文字;

    sdpMid?: 文字;

    //@@{ sdpM行索引:sdpMLineIndex }
    sdpM行索引?: 数字;

}

//@@{ RTCICE候选一对_:RTCIceCandidatePair }
接口 RTCICE候选一对_ {

    //@@{ 本地:local, RTCICE候选字典_:RTCIceCandidateDictionary }
    本地?: RTCICE候选字典_;

    //@@{ 远程:remote, RTCICE候选字典_:RTCIceCandidateDictionary }
    远程?: RTCICE候选字典_;

}

//@@{ RTCICE候选一对统计数据_:RTCIceCandidatePairStats, RTC统计数据_:RTCStats }
接口 RTCICE候选一对统计数据_ 扩展 RTC统计数据_ {

    //@@{ 可用输入比特率:availableIncomingBitrate }
    可用输入比特率?: 数字;

    //@@{ 可用的输出比特率:availableOutgoingBitrate }
    可用的输出比特率?: 数字;

    //@@{ 字节收到:bytesReceived }
    字节收到?: 数字;

    //@@{ 字节发送:bytesSent }
    字节发送?: 数字;

    //@@{ 当地候选Id:localCandidateId }
    当地候选Id?: 文字;

    //@@{ 提名:nominated }
    提名?: 真假;

    //@@{ 优先级:priority }
    优先级?: 数字;

    //@@{ 可读的:readable }
    可读的?: 真假;

    //@@{ 远程候选Id:remoteCandidateId }
    远程候选Id?: 文字;

    //@@{ 往返时间:roundTripTime }
    往返时间?: 数字;

    //@@{ 状态:state, RTC统计Ice候选一对状态_:RTCStatsIceCandidatePairState }
    状态?: RTC统计Ice候选一对状态_;

    //@@{ 传输Id:transportId }
    传输Id?: 文字;

    //@@{ 可写的:writable }
    可写的?: 真假;

}

//@@{ RTCICE收集选项_:RTCIceGatherOptions }
接口 RTCICE收集选项_ {

    //@@{ 收集策略:gatherPolicy, RTCIce收集政策_:RTCIceGatherPolicy }
    收集策略?: RTCIce收集政策_;

    //@@{ ice服务组:iceservers, RTCICE服务器_:RTCIceServer }
    ice服务组?: RTCICE服务器_[];

    //@@{ 端口范围:portRange, MS端口范围_:MSPortRange }
    端口范围?: MS端口范围_;

}

//@@{ RTCICE参数_:RTCIceParameters }
接口 RTCICE参数_ {

    //@@{ ice低盐:iceLite }
    ice低盐?: 真假 | 空值;

    //@@{ 密码:password }
    密码?: 文字;

    //@@{ 用户名片段:usernameFragment }
    用户名片段?: 文字;

}

//@@{ RTCICE服务器_:RTCIceServer }
接口 RTCICE服务器_ {

    //@@{ 凭证:credential }
    凭证?: 文字 | 空值;

    //@@{ url组:urls }
    url组?: 任意;

    //@@{ 用户名:username }
    用户名?: 文字 | 空值;

}

//@@{ RTC入站RTP流统计数据_:RTCInboundRTPStreamStats, RTCRTP流统计数据_:RTCRTPStreamStats }
接口 RTC入站RTP流统计数据_ 扩展 RTCRTP流统计数据_ {

    //@@{ 字节收到:bytesReceived }
    字节收到?: 数字;

    //@@{ 丢包率:fractionLost }
    丢包率?: 数字;

    //@@{ 抖动:jitter }
    抖动?: 数字;

    //@@{ 数据包丢失:packetsLost }
    数据包丢失?: 数字;

    //@@{ 包收到了:packetsReceived }
    包收到了?: 数字;

}

//@@{ RTC媒体流轨道统计数据_:RTCMediaStreamTrackStats, RTC统计数据_:RTCStats }
接口 RTC媒体流轨道统计数据_ 扩展 RTC统计数据_ {

    //@@{ 音频水平:audioLevel }
    音频水平?: 数字;

    //@@{ 回声返回损失:echoReturnLoss }
    回声返回损失?: 数字;

    //@@{ 回声返回损失增强:echoReturnLossEnhancement }
    回声返回损失增强?: 数字;

    //@@{ 帧高度:frameHeight }
    帧高度?: 数字;

    //@@{ 帧损坏:framesCorrupted }
    帧损坏?: 数字;

    //@@{ 帧解码:framesDecoded }
    帧解码?: 数字;

    //@@{ 帧丢失:framesDropped }
    帧丢失?: 数字;

    //@@{ 帧每秒:framesPerSecond }
    帧每秒?: 数字;

    //@@{ 帧收到:framesReceived }
    帧收到?: 数字;

    //@@{ 帧发送:framesSent }
    帧发送?: 数字;

    //@@{ 帧宽度:frameWidth }
    帧宽度?: 数字;

    //@@{ 远程数据源:remoteSource }
    远程数据源?: 真假;

    ssrcIds?: 文字[];

    //@@{ 轨道标识符:trackIdentifier }
    轨道标识符?: 文字;

}

//@@{ RTC提供选项_:RTCOfferOptions }
接口 RTC提供选项_ {

    //@@{ ice重启:iceRestart }
    ice重启?: 真假;

    //@@{ 提供接收音频:offerToReceiveAudio }
    提供接收音频?: 数字;

    //@@{ 提供接收视频:offerToReceiveVideo }
    提供接收视频?: 数字;

    //@@{ 语音活动检测:voiceActivityDetection }
    语音活动检测?: 真假;

}

//@@{ RTC出站RTP流统计数据_:RTCOutboundRTPStreamStats, RTCRTP流统计数据_:RTCRTPStreamStats }
接口 RTC出站RTP流统计数据_ 扩展 RTCRTP流统计数据_ {

    //@@{ 字节发送:bytesSent }
    字节发送?: 数字;

    //@@{ 包发送:packetsSent }
    包发送?: 数字;

    //@@{ 往返时间:roundTripTime }
    往返时间?: 数字;

    //@@{ 目标比特率:targetBitrate }
    目标比特率?: 数字;

}

//@@{ RTC对等连接ICE事件初始化_:RTCPeerConnectionIceEventInit, 事件初始化_:EventInit }
接口 RTC对等连接ICE事件初始化_ 扩展 事件初始化_ {

    //@@{ 候选:candidate, RTCIce候选:RTCIceCandidate }
    候选?: RTCIce候选;

}

//@@{ RTC服务器反馈_:RTCRtcpFeedback }
接口 RTC服务器反馈_ {

    //@@{ 参数:parameter }
    参数?: 文字;

    //@@{ 类型:type }
    类型?: 文字;

}

//@@{ RTCRtcp参数_:RTCRtcpParameters }
接口 RTCRtcp参数_ {

    //@@{ c名称:cname }
    c名称?: 文字;

    mux?: 真假;

    //@@{ 减少大小:reducedSize }
    减少大小?: 真假;

    ssrc?: 数字;

}

//@@{ RTCRtp功能_:RTCRtpCapabilities }
接口 RTCRtp功能_ {

    //@@{ 编解码器:codecs, RTCRtp解码能力_:RTCRtpCodecCapability }
    编解码器?: RTCRtp解码能力_[];

    //@@{ fec机制:fecMechanisms }
    fec机制?: 文字[];

    //@@{ 报头扩展:headerExtensions, RTCRtp报头扩展_:RTCRtpHeaderExtension }
    报头扩展?: RTCRtp报头扩展_[];

}

//@@{ RTCRtp解码能力_:RTCRtpCodecCapability }
接口 RTCRtp解码能力_ {

    //@@{ 时钟频率:clockRate }
    时钟频率?: 数字;

    //@@{ 种类:kind }
    种类?: 文字;

    //@@{ 最大时间:maxptime }
    最大时间?: 数字;

    //@@{ 最大空间层:maxSpatialLayers }
    最大空间层?: 数字;

    //@@{ 最大时间层:maxTemporalLayers }
    最大时间层?: 数字;

    //@@{ 名字:name }
    名字?: 文字;

    //@@{ 通道数量:numChannels }
    通道数量?: 数字;

    //@@{ 选项:options }
    选项?: 任意;

    //@@{ 参数:parameters }
    参数?: 任意;

    //@@{ 首选有效载荷类型:preferredPayloadType }
    首选有效载荷类型?: 数字;

    //@@{ p时间:ptime }
    p时间?: 数字;

    //@@{ rtcp反馈:rtcpFeedback, RTC服务器反馈_:RTCRtcpFeedback }
    rtcp反馈?: RTC服务器反馈_[];

    //@@{ svc多流支持:svcMultiStreamSupport }
    svc多流支持?: 真假;

}

//@@{ RTCRtp编解码器参数_:RTCRtpCodecParameters }
接口 RTCRtp编解码器参数_ {

    //@@{ 时钟频率:clockRate }
    时钟频率?: 数字;

    //@@{ 最大时间:maxptime }
    最大时间?: 数字;

    //@@{ 名字:name }
    名字?: 文字;

    //@@{ 通道数量:numChannels }
    通道数量?: 数字;

    //@@{ 参数:parameters }
    参数?: 任意;

    //@@{ 有效负载类型:payloadType }
    有效负载类型?: 任意;

    //@@{ p时间:ptime }
    p时间?: 数字;

    //@@{ rtcp反馈:rtcpFeedback, RTC服务器反馈_:RTCRtcpFeedback }
    rtcp反馈?: RTC服务器反馈_[];

}

//@@{ RTCRtp贡献源_:RTCRtpContributingSource }
接口 RTCRtp贡献源_ {

    //@@{ 音频水平:audioLevel }
    音频水平?: 数字;

    csrc?: 数字;

    //@@{ 时间戳:timestamp }
    时间戳?: 数字;

}

//@@{ RTCRtp编码参数_:RTCRtpEncodingParameters }
接口 RTCRtp编码参数_ {

    //@@{ 活跃的:active }
    活跃的?: 真假;

    //@@{ 编解码器有效载荷类型:codecPayloadType }
    编解码器有效载荷类型?: 数字;

    //@@{ 依赖编码Id组:dependencyEncodingIds }
    依赖编码Id组?: 文字[];

    //@@{ 编码Id:encodingId }
    编码Id?: 文字;

    //@@{ RTCRtpFec参数_:RTCRtpFecParameters }
    fec?: RTCRtpFec参数_;

    //@@{ 帧速率规模:framerateScale }
    帧速率规模?: 数字;

    //@@{ 最大比特率:maxBitrate }
    最大比特率?: 数字;

    //@@{ 最大帧速率:maxFramerate }
    最大帧速率?: 数字;

    //@@{ 最小质量:minQuality }
    最小质量?: 数字;

    //@@{ 优先级:priority }
    优先级?: 数字;

    //@@{ 决议规模:resolutionScale }
    决议规模?: 数字;

    //@@{ RTCRtpRtx参数_:RTCRtpRtxParameters }
    rtx?: RTCRtpRtx参数_;

    ssrc?: 数字;

    //@@{ ssrc范围:ssrcRange, RTCSsrc范围_:RTCSsrcRange }
    ssrc范围?: RTCSsrc范围_;

}

//@@{ RTCRtpFec参数_:RTCRtpFecParameters }
接口 RTCRtpFec参数_ {

    //@@{ 机制:mechanism }
    机制?: 文字;

    ssrc?: 数字;

}

//@@{ RTCRtp报头扩展_:RTCRtpHeaderExtension }
接口 RTCRtp报头扩展_ {

    //@@{ 种类:kind }
    种类?: 文字;

    //@@{ 首选加密:preferredEncrypt }
    首选加密?: 真假;

    //@@{ 首选Id:preferredId }
    首选Id?: 数字;

    uri?: 文字;

}

//@@{ Rtp报头扩展参数_:RTCRtpHeaderExtensionParameters }
接口 Rtp报头扩展参数_ {

    //@@{ 加密:encrypt }
    加密?: 真假;

    id?: 数字;

    uri?: 文字;

}

//@@{ RTCRtp参数_:RTCRtpParameters }
接口 RTCRtp参数_ {

    //@@{ 编解码器:codecs, RTCRtp编解码器参数_:RTCRtpCodecParameters }
    编解码器?: RTCRtp编解码器参数_[];

    //@@{ 退化偏好:degradationPreference, RTC退化偏好_:RTCDegradationPreference }
    退化偏好?: RTC退化偏好_;

    //@@{ 编码:encodings, RTCRtp编码参数_:RTCRtpEncodingParameters }
    编码?: RTCRtp编码参数_[];

    //@@{ 报头扩展:headerExtensions, Rtp报头扩展参数_:RTCRtpHeaderExtensionParameters }
    报头扩展?: Rtp报头扩展参数_[];

    muxId?: 文字;

    //@@{ RTCRtcp参数_:RTCRtcpParameters }
    rtcp?: RTCRtcp参数_;

}

//@@{ RTCRtpRtx参数_:RTCRtpRtxParameters }
接口 RTCRtpRtx参数_ {

    ssrc?: 数字;

}

//@@{ RTCRTP流统计数据_:RTCRTPStreamStats, RTC统计数据_:RTCStats }
接口 RTCRTP流统计数据_ 扩展 RTC统计数据_ {

    //@@{ 关联数据Id:associateStatsId }
    关联数据Id?: 文字;

    //@@{ 编解码器Id:codecId }
    编解码器Id?: 文字;

    //@@{ fir数量:firCount }
    fir数量?: 数字;

    //@@{ 是远程:isRemote }
    是远程?: 真假;

    //@@{ 媒体追踪Id:mediaTrackId }
    媒体追踪Id?: 文字;

    //@@{ nack计数:nackCount }
    nack计数?: 数字;

    //@@{ pli数量:pliCount }
    pli数量?: 数字;

    //@@{ sli数量:sliCount }
    sli数量?: 数字;

    ssrc?: 文字;

    //@@{ 传输Id:transportId }
    传输Id?: 文字;

}

//@@{ RTCRtp未处理_:RTCRtpUnhandled }
接口 RTCRtp未处理_ {

    muxId?: 文字;

    //@@{ 有效负载类型:payloadType }
    有效负载类型?: 数字;

    ssrc?: 数字;

}

//@@{ RTC会话描述初始化_:RTCSessionDescriptionInit }
接口 RTC会话描述初始化_ {

    sdp?: 文字;

    //@@{ 类型:type, RTCSdp类型_:RTCSdpType }
    类型?: RTCSdp类型_;

}

//@@{ RTCSrtp键参数_:RTCSrtpKeyParam }
接口 RTCSrtp键参数_ {

    //@@{ 键方法:keyMethod }
    键方法?: 文字;

    //@@{ 键盐:keySalt }
    键盐?: 文字;

    //@@{ 使用时间:lifetime }
    使用时间?: 文字;

    //@@{ mki长度:mkiLength }
    mki长度?: 数字;

    //@@{ mki值:mkiValue }
    mki值?: 数字;

}

//@@{ RTCSrtpsd参数_:RTCSrtpSdesParameters }
接口 RTCSrtpsd参数_ {

    //@@{ 加密套件:cryptoSuite }
    加密套件?: 文字;

    //@@{ 键参数:keyParams, RTCSrtp键参数_:RTCSrtpKeyParam }
    键参数?: RTCSrtp键参数_[];

    //@@{ 会话参数:sessionParams }
    会话参数?: 文字[];

    //@@{ 标签:tag }
    标签?: 数字;

}

//@@{ RTCSsrc范围_:RTCSsrcRange }
接口 RTCSsrc范围_ {

    //@@{ 最大:max }
    最大?: 数字;

    //@@{ 最小:min }
    最小?: 数字;

}

//@@{ RTC统计数据_:RTCStats }
接口 RTC统计数据_ {

    id?: 文字;

    //@@{ ms类型:msType, MS统计数据类型_:MSStatsType }
    ms类型?: MS统计数据类型_;

    //@@{ 时间戳:timestamp }
    时间戳?: 数字;

    //@@{ 类型:type, RTC统计类型_:RTCStatsType }
    类型?: RTC统计类型_;

}

//@@{ RTC统计报告_:RTCStatsReport }
接口 RTC统计报告_ {

}

//@@{ RTC传输统计数据_:RTCTransportStats, RTC统计数据_:RTCStats }
接口 RTC传输统计数据_ 扩展 RTC统计数据_ {

    //@@{ 活动连接:activeConnection }
    活动连接?: 真假;

    //@@{ 字节收到:bytesReceived }
    字节收到?: 数字;

    //@@{ 字节发送:bytesSent }
    字节发送?: 数字;

    //@@{ 本地证书Id:localCertificateId }
    本地证书Id?: 文字;

    //@@{ 远程证书Id:remoteCertificateId }
    远程证书Id?: 文字;

    //@@{ rtcp传输统计数据Id:rtcpTransportStatsId }
    rtcp传输统计数据Id?: 文字;

    //@@{ 选定候选对Id:selectedCandidatePairId }
    选定候选对Id?: 文字;

}

//@@{ 作用域凭证描述符_:ScopedCredentialDescriptor }
接口 作用域凭证描述符_ {

    id: 任意;

    //@@{ 传输:transports, 传输_:Transport }
    传输?: 传输_[];

    //@@{ 类型:type, 作用域凭证类型_:ScopedCredentialType }
    类型: 作用域凭证类型_;

}

//@@{ 作用域凭据选项_:ScopedCredentialOptions }
接口 作用域凭据选项_ {

    //@@{ 排除列表:excludeList, 作用域凭证描述符_:ScopedCredentialDescriptor }
    排除列表?: 作用域凭证描述符_[];

    //@@{ 扩展集合:extensions, 网络授权扩展_:WebAuthnExtensions }
    扩展集合?: 网络授权扩展_;

    //@@{ USV字符串:USVString }
    rpId?: USV字符串;

    //@@{ 超时秒数:timeoutSeconds }
    超时秒数?: 数字;

}

//@@{ 作用域凭据参数_:ScopedCredentialParameters }
接口 作用域凭据参数_ {

    //@@{ 算法:algorithm, 算法_:Algorithm }
    算法: 文字 | 算法_;

    //@@{ 类型:type, 作用域凭证类型_:ScopedCredentialType }
    类型: 作用域凭证类型_;

}

//@@{ 服务工人消息事件初始化_:ServiceWorkerMessageEventInit, 事件初始化_:EventInit }
接口 服务工人消息事件初始化_ 扩展 事件初始化_ {

    //@@{ 数据:data }
    数据?: 任意;

    //@@{ 最后事件Id:lastEventId }
    最后事件Id?: 文字;

    //@@{ 起源:origin }
    起源?: 文字;

    //@@{ 端口集:ports, 消息端口_:MessagePort }
    端口集?: 消息端口_[] | 空值;

    //@@{ 源:source, 服务工人_:ServiceWorker, 消息端口_:MessagePort }
    源?: 服务工人_ | 消息端口_ | 空值;

}

//@@{ 语音合成事件初始化_:SpeechSynthesisEventInit, 事件初始化_:EventInit }
接口 语音合成事件初始化_ 扩展 事件初始化_ {

    //@@{ 字符索引:charIndex }
    字符索引?: 数字;

    //@@{ 运行时间:elapsedTime }
    运行时间?: 数字;

    //@@{ 名字:name }
    名字?: 文字;

    //@@{ 话语:utterance, 语音合成话语_:SpeechSynthesisUtterance }
    话语?: 语音合成话语_ | 空值;

}

//@@{ 存储异常信息_:StoreExceptionsInformation, 异常信息_:ExceptionInformation }
接口 存储异常信息_ 扩展 异常信息_ {

    //@@{ 详细URI:detailURI }
    详细URI?: 文字 | 空值;

    //@@{ 解释字符串:explanationString }
    解释字符串?: 文字 | 空值;

    //@@{ 网站名字:siteName }
    网站名字?: 文字 | 空值;

}

//@@{ 存储站点具体的异常信息_:StoreSiteSpecificExceptionsInformation, 存储异常信息_:StoreExceptionsInformation }
接口 存储站点具体的异常信息_ 扩展 存储异常信息_ {

    //@@{ 域字符串数组:arrayOfDomainStrings }
    域字符串数组?: 文字[];

}

//@@{ 轨道事件初始化_:TrackEventInit, 事件初始化_:EventInit }
接口 轨道事件初始化_ 扩展 事件初始化_ {

    //@@{ 轨道:track, 视频轨道_:VideoTrack, 音频轨道_:AudioTrack, 文本轨道_:TextTrack }
    轨道?: 视频轨道_ | 音频轨道_ | 文本轨道_ | 空值;

}

//@@{ 过渡事件初始化_:TransitionEventInit, 事件初始化_:EventInit }
接口 过渡事件初始化_ 扩展 事件初始化_ {

    //@@{ 运行时间:elapsedTime }
    运行时间?: 数字;

    //@@{ 属性名字:propertyName }
    属性名字?: 文字;

}

//@@{ UI事件初始化_:UIEventInit, 事件初始化_:EventInit }
接口 UI事件初始化_ 扩展 事件初始化_ {

    //@@{ 细节:detail }
    细节?: 数字;

    //@@{ 视图:view, 窗口_:Window }
    视图?: 窗口_ | 空值;

}

//@@{ 网络授权扩展_:WebAuthnExtensions }
接口 网络授权扩展_ {

}

//@@{ WebGL上下文属性_:WebGLContextAttributes }
接口 WebGL上下文属性_ {

    //@@{ 失败如果主要性能警告:failIfMajorPerformanceCaveat }
    失败如果主要性能警告?: 真假;

    //@@{ 阿尔法:alpha }
    阿尔法?: 真假;

    //@@{ 抗锯齿:antialias }
    抗锯齿?: 真假;

    //@@{ 深度:depth }
    深度?: 真假;

    //@@{ 自左乘阿尔法:premultipliedAlpha }
    自左乘阿尔法?: 真假;

    //@@{ 保存画缓冲:preserveDrawingBuffer }
    保存画缓冲?: 真假;

    //@@{ 钢网:stencil }
    钢网?: 真假;

}

//@@{ WebGL上下文事件初始化_:WebGLContextEventInit, 事件初始化_:EventInit }
接口 WebGL上下文事件初始化_ 扩展 事件初始化_ {

    //@@{ 状态消息:statusMessage }
    状态消息?: 文字;

}

//@@{ 循环事件初始化_:WheelEventInit, 鼠标事件初始化_:MouseEventInit }
接口 循环事件初始化_ 扩展 鼠标事件初始化_ {

    //@@{ 滚动单位:deltaMode }
    滚动单位?: 数字;

    //@@{ 德尔塔X:deltaX }
    德尔塔X?: 数字;

    //@@{ 德尔塔Y:deltaY }
    德尔塔Y?: 数字;

    //@@{ 德尔塔Z:deltaZ }
    德尔塔Z?: 数字;

}

//@@{ 事件监听器_:EventListener }
接口 事件监听器_ {

    //@@{ 事:evt, 事件_:Event }
    (事: 事件_): 无值;

}

//@@{ WebKit条目回调_:WebKitEntriesCallback }
接口 WebKit条目回调_ {

    //@@{ 事:evt, 事件_:Event }
    (事: 事件_): 无值;

}

//@@{ WebKit错误回调_:WebKitErrorCallback }
接口 WebKit错误回调_ {

    //@@{ 事:evt, 事件_:Event }
    (事: 事件_): 无值;

}

//@@{ WebKit文件回调_:WebKitFileCallback }
接口 WebKit文件回调_ {

    //@@{ 事:evt, 事件_:Event }
    (事: 事件_): 无值;

}

//@@{ 分析器节点_:AnalyserNode, 音频节点_:AudioNode }
接口 分析器节点_ 扩展 音频节点_ {

    //@@{ fft大小:fftSize }
    fft大小: 数字;

    //@@{ 频率二进制计数:frequencyBinCount }
    只读 频率二进制计数: 数字;

    //@@{ 最大分贝:maxDecibels }
    最大分贝: 数字;

    //@@{ 最小分贝:minDecibels }
    最小分贝: 数字;

    //@@{ 平滑时间常数:smoothingTimeConstant }
    平滑时间常数: 数字;

    //@@{ 取字节频率数据:getByteFrequencyData, 数组:array, 正整数数组8_:Uint8Array }
    取字节频率数据(数组: 正整数数组8_): 无值;

    //@@{ 取字节时间域数据:getByteTimeDomainData, 数组:array, 正整数数组8_:Uint8Array }
    取字节时间域数据(数组: 正整数数组8_): 无值;

    //@@{ 取浮动频率数据:getFloatFrequencyData, 数组:array, 浮点数组32_:Float32Array }
    取浮动频率数据(数组: 浮点数组32_): 无值;

    //@@{ 取浮点时域数据:getFloatTimeDomainData, 数组:array, 浮点数组32_:Float32Array }
    取浮点时域数据(数组: 浮点数组32_): 无值;

}

声明 值量 分析器节点_: {

    //@@{ 原型:prototype, 分析器节点_:AnalyserNode }
    原型: 分析器节点_;

    //@@{ 分析器节点_:AnalyserNode }
    新建(): 分析器节点_;

};

//@@{ 角_实例化_数组_:ANGLE_instanced_arrays }
接口 角_实例化_数组_ {

    //@@{ 画数组实例化角:drawArraysInstancedANGLE, 模式:mode, 第一个:first, 数量:count, 主要数量:primcount }
    画数组实例化角(模式: 数字, 第一个: 数字, 数量: 数字, 主要数量: 数字): 无值;

    //@@{ 画元素实例化角:drawElementsInstancedANGLE, 模式:mode, 数量:count, 类型:type, 偏移:offset, 主要数量:primcount }
    画元素实例化角(模式: 数字, 数量: 数字, 类型: 数字, 偏移: 数字, 主要数量: 数字): 无值;

    //@@{ 顶点属性因子角度:vertexAttribDivisorANGLE, 索引:index, 除数:divisor }
    顶点属性因子角度(索引: 数字, 除数: 数字): 无值;

    //@@{ __顶点_属性_数组_除数_角__:VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE }
    只读 __顶点_属性_数组_除数_角__: 数字;

}

声明 值量 角_实例化_数组_: {

    //@@{ 原型:prototype, 角_实例化_数组_:ANGLE_instanced_arrays }
    原型: 角_实例化_数组_;

    //@@{ 角_实例化_数组_:ANGLE_instanced_arrays }
    新建(): 角_实例化_数组_;

    //@@{ __顶点_属性_数组_除数_角__:VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE }
    只读 __顶点_属性_数组_除数_角__: 数字;

};

//@@{ 动画事件_:AnimationEvent, 事件_:Event }
接口 动画事件_ 扩展 事件_ {

    //@@{ 动画名称:animationName }
    只读 动画名称: 文字;

    //@@{ 运行时间:elapsedTime }
    只读 运行时间: 数字;

    //@@{ 初始化动画事件:initAnimationEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 动画名称参数:animationNameArg, 运行时间参数:elapsedTimeArg }
    初始化动画事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 动画名称参数: 文字, 运行时间参数: 数字): 无值;

}

声明 值量 动画事件_: {

    //@@{ 原型:prototype, 动画事件_:AnimationEvent }
    原型: 动画事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 动画事件初始化_:AnimationEventInit, 动画事件_:AnimationEvent }
    新建(类型参数: 文字, 事件初始化词典?: 动画事件初始化_): 动画事件_;

};

//@@{ 应用程序缓存事件映射_:ApplicationCacheEventMap }
接口 应用程序缓存事件映射_ {

    //@@{ "缓存":"cached", 事件_:Event }
    "缓存": 事件_;

    //@@{ "检查":"checking", 事件_:Event }
    "检查": 事件_;

    //@@{ "下载":"downloading", 事件_:Event }
    "下载": 事件_;

    //@@{ "错误":"error", 事件_:Event }
    "错误": 事件_;

    //@@{ "没有更新":"noupdate", 事件_:Event }
    "没有更新": 事件_;

    //@@{ "过时了":"obsolete", 事件_:Event }
    "过时了": 事件_;

    //@@{ "进度":"progress", 进度事件_:ProgressEvent }
    "进度": 进度事件_;

    //@@{ "准备更新":"updateready", 事件_:Event }
    "准备更新": 事件_;

}

//@@{ 应用程序缓存_:ApplicationCache, 事件目标_:EventTarget }
接口 应用程序缓存_ 扩展 事件目标_ {

    //@@{ 正在缓存:oncached, 应用程序缓存_:ApplicationCache, 事件_:Event }
    正在缓存: (本体: 应用程序缓存_, ev: 事件_) => 任意;

    //@@{ 正在检查:onchecking, 应用程序缓存_:ApplicationCache, 事件_:Event }
    正在检查: (本体: 应用程序缓存_, ev: 事件_) => 任意;

    //@@{ 正在下载:ondownloading, 应用程序缓存_:ApplicationCache, 事件_:Event }
    正在下载: (本体: 应用程序缓存_, ev: 事件_) => 任意;

    //@@{ 正在错误:onerror, 应用程序缓存_:ApplicationCache, 事件_:Event }
    正在错误: (本体: 应用程序缓存_, ev: 事件_) => 任意;

    //@@{ 正在没有更新:onnoupdate, 应用程序缓存_:ApplicationCache, 事件_:Event }
    正在没有更新: (本体: 应用程序缓存_, ev: 事件_) => 任意;

    //@@{ 正在过时了:onobsolete, 应用程序缓存_:ApplicationCache, 事件_:Event }
    正在过时了: (本体: 应用程序缓存_, ev: 事件_) => 任意;

    //@@{ 正在进度:onprogress, 应用程序缓存_:ApplicationCache, 进度事件_:ProgressEvent }
    正在进度: (本体: 应用程序缓存_, ev: 进度事件_) => 任意;

    //@@{ 正在准备更新:onupdateready, 应用程序缓存_:ApplicationCache, 事件_:Event }
    正在准备更新: (本体: 应用程序缓存_, ev: 事件_) => 任意;

    //@@{ 状态组:status }
    只读 状态组: 数字;

    //@@{ 中止:abort }
    中止(): 无值;

    //@@{ 交换缓存:swapCache }
    交换缓存(): 无值;

    //@@{ 更新:update }
    更新(): 无值;

    //@@{ __检查__:CHECKING }
    只读 __检查__: 数字;

    //@@{ __下载__:DOWNLOADING }
    只读 __下载__: 数字;

    //@@{ __闲置__:IDLE }
    只读 __闲置__: 数字;

    //@@{ __过时了__:OBSOLETE }
    只读 __过时了__: 数字;

    //@@{ __不缓存__:UNCACHED }
    只读 __不缓存__: 数字;

    //@@{ 准备更新:UPDATEREADY }
    只读 准备更新: 数字;

    //@@{ 添加事件监听器:addEventListener, 应用程序缓存事件映射_:ApplicationCacheEventMap, 类型:type, 侦听器:listener, 应用程序缓存_:ApplicationCache, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 应用程序缓存事件映射_>(类型: K, 侦听器: (本体: 应用程序缓存_, ev: 应用程序缓存事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 应用程序缓存_: {

    //@@{ 原型:prototype, 应用程序缓存_:ApplicationCache }
    原型: 应用程序缓存_;

    //@@{ 应用程序缓存_:ApplicationCache }
    新建(): 应用程序缓存_;

    //@@{ __检查__:CHECKING }
    只读 __检查__: 数字;

    //@@{ __下载__:DOWNLOADING }
    只读 __下载__: 数字;

    //@@{ __闲置__:IDLE }
    只读 __闲置__: 数字;

    //@@{ __过时了__:OBSOLETE }
    只读 __过时了__: 数字;

    //@@{ __不缓存__:UNCACHED }
    只读 __不缓存__: 数字;

    //@@{ __准备更新__:UPDATEREADY }
    只读 __准备更新__: 数字;

};

//@@{ 特性_:Attr, 节点_:Node }
接口 特性_ 扩展 节点_ {

    //@@{ 名字:name }
    只读 名字: 文字;

    //@@{ 主元素:ownerElement, 元素_:Element }
    只读 主元素: 元素_;

    //@@{ 前缀:prefix }
    只读 前缀: 文字 | 空值;

    //@@{ 指定的:specified }
    只读 指定的: 真假;

    //@@{ 值:value }
    值: 文字;

}

声明 值量 特性_: {

    //@@{ 原型:prototype, 特性_:Attr }
    原型: 特性_;

    //@@{ 特性_:Attr }
    新建(): 特性_;

};

//@@{ 音频缓冲区_:AudioBuffer }
接口 音频缓冲区_ {

    //@@{ 持续时间:duration }
    只读 持续时间: 数字;

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 通道数量:numberOfChannels }
    只读 通道数量: 数字;

    //@@{ 采样率:sampleRate }
    只读 采样率: 数字;

    //@@{ 复制从通道:copyFromChannel, 目的地:destination, 浮点数组32_:Float32Array, 通道号:channelNumber, 开始通道:startInChannel }
    复制从通道(目的地: 浮点数组32_, 通道号: 数字, 开始通道?: 数字): 无值;

    //@@{ 复制到通道:copyToChannel, 源:source, 浮点数组32_:Float32Array, 通道号:channelNumber, 开始通道:startInChannel }
    复制到通道(源: 浮点数组32_, 通道号: 数字, 开始通道?: 数字): 无值;

    //@@{ 取通道数据:getChannelData, 通道:channel, 浮点数组32_:Float32Array }
    取通道数据(通道: 数字): 浮点数组32_;

}

声明 值量 音频缓冲区_: {

    //@@{ 原型:prototype, 音频缓冲区_:AudioBuffer }
    原型: 音频缓冲区_;

    //@@{ 音频缓冲区_:AudioBuffer }
    新建(): 音频缓冲区_;

};

//@@{ 音频缓冲源节点事件映射_:AudioBufferSourceNodeEventMap }
接口 音频缓冲源节点事件映射_ {

    //@@{ "结束了":"ended", 媒体流错误事件_:MediaStreamErrorEvent }
    "结束了": 媒体流错误事件_;

}

//@@{ 音频缓冲区源节点_:AudioBufferSourceNode, 音频节点_:AudioNode }
接口 音频缓冲区源节点_ 扩展 音频节点_ {

    //@@{ 缓冲:buffer, 音频缓冲区_:AudioBuffer }
    缓冲: 音频缓冲区_ | 空值;

    //@@{ 降低:detune, 音频参数_:AudioParam }
    只读 降低: 音频参数_;

    //@@{ 循环:loop }
    循环: 真假;

    //@@{ 循环结束:loopEnd }
    循环结束: 数字;

    //@@{ 循环开始:loopStart }
    循环开始: 数字;

    //@@{ 正在结束了:onended, 音频缓冲区源节点_:AudioBufferSourceNode, 媒体流错误事件_:MediaStreamErrorEvent }
    正在结束了: (本体: 音频缓冲区源节点_, ev: 媒体流错误事件_) => 任意;

    //@@{ 播放速率:playbackRate, 音频参数_:AudioParam }
    只读 播放速率: 音频参数_;

    //@@{ 开始:start, 当:when, 偏移:offset, 持续时间:duration }
    开始(当?: 数字, 偏移?: 数字, 持续时间?: 数字): 无值;

    //@@{ 停止:stop, 当:when }
    停止(当?: 数字): 无值;

    //@@{ 添加事件监听器:addEventListener, 音频缓冲源节点事件映射_:AudioBufferSourceNodeEventMap, 类型:type, 侦听器:listener, 音频缓冲区源节点_:AudioBufferSourceNode, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 音频缓冲源节点事件映射_>(类型: K, 侦听器: (本体: 音频缓冲区源节点_, ev: 音频缓冲源节点事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 音频缓冲区源节点_: {

    //@@{ 原型:prototype, 音频缓冲区源节点_:AudioBufferSourceNode }
    原型: 音频缓冲区源节点_;

    //@@{ 音频缓冲区源节点_:AudioBufferSourceNode }
    新建(): 音频缓冲区源节点_;

};

//@@{ 音频上下文事件映射_:AudioContextEventMap }
接口 音频上下文事件映射_ {

    //@@{ "状态改变":"statechange", 事件_:Event }
    "状态改变": 事件_;

}

//@@{ 音频上下文基类_:AudioContextBase, 事件目标_:EventTarget }
接口 音频上下文基类_ 扩展 事件目标_ {

    //@@{ 当前时间:currentTime }
    只读 当前时间: 数字;

    //@@{ 目的地:destination, 音频目的节点_:AudioDestinationNode }
    只读 目的地: 音频目的节点_;

    //@@{ 侦听器:listener, 音频侦听器_:AudioListener }
    只读 侦听器: 音频侦听器_;

    //@@{ 正在状态改变:onstatechange, 音频上下文_:AudioContext, 事件_:Event }
    正在状态改变: (本体: 音频上下文_, ev: 事件_) => 任意;

    //@@{ 采样率:sampleRate }
    只读 采样率: 数字;

    //@@{ 状态:state, 音频上下文状态_:AudioContextState }
    只读 状态: 音频上下文状态_;

    //@@{ 关闭:close, 预设_:Promise }
    关闭(): 预设_<无值>;

    //@@{ 创建分析器:createAnalyser, 分析器节点_:AnalyserNode }
    创建分析器(): 分析器节点_;

    //@@{ 创建滤波器:createBiquadFilter, 双二次滤波器节点_:BiquadFilterNode }
    创建滤波器(): 双二次滤波器节点_;

    //@@{ 创建缓冲区:createBuffer, 通道数量:numberOfChannels, 长度:length, 采样率:sampleRate, 音频缓冲区_:AudioBuffer }
    创建缓冲区(通道数量: 数字, 长度: 数字, 采样率: 数字): 音频缓冲区_;

    //@@{ 创建缓冲区源:createBufferSource, 音频缓冲区源节点_:AudioBufferSourceNode }
    创建缓冲区源(): 音频缓冲区源节点_;

    //@@{ 创建通道合并:createChannelMerger, 输入数量:numberOfInputs, 通道合并节点_:ChannelMergerNode }
    创建通道合并(输入数量?: 数字): 通道合并节点_;

    //@@{ 创建通道分流器:createChannelSplitter, 输出数量:numberOfOutputs, 通道分流节点_:ChannelSplitterNode }
    创建通道分流器(输出数量?: 数字): 通道分流节点_;

    //@@{ 创建卷积器:createConvolver, 卷积器节点_:ConvolverNode }
    创建卷积器(): 卷积器节点_;

    //@@{ 创建延迟:createDelay, 最大延迟时间:maxDelayTime, 延迟节点_:DelayNode }
    创建延迟(最大延迟时间?: 数字): 延迟节点_;

    //@@{ 创建动态压缩器:createDynamicsCompressor, 动态压缩节点_:DynamicsCompressorNode }
    创建动态压缩器(): 动态压缩节点_;

    //@@{ 创建增益:createGain, 增加节点_:GainNode }
    创建增益(): 增加节点_;

    //@@{ 创建IIR滤波器:createIIRFilter, 前馈:feedforward, 反馈:feedback, IIR滤波器节点_:IIRFilterNode }
    创建IIR滤波器(前馈: 数字[], 反馈: 数字[]): IIR滤波器节点_;

    //@@{ 创建媒体元素源:createMediaElementSource, 媒体元素:mediaElement, HTML媒体元素_:HTMLMediaElement, 媒体元素音频源节点_:MediaElementAudioSourceNode }
    创建媒体元素源(媒体元素: HTML媒体元素_): 媒体元素音频源节点_;

    //@@{ 创建媒体流源:createMediaStreamSource, 媒体流:mediaStream, 媒体流_:MediaStream }
    创建媒体流源(媒体流: 媒体流_): MediaStreamAudioSourceNode;

    //@@{ 创建振荡器:createOscillator, 振荡器节点_:OscillatorNode }
    创建振荡器(): 振荡器节点_;

    //@@{ 创建音源环境:createPanner, 音源环境节点_:PannerNode }
    创建音源环境(): 音源环境节点_;

    //@@{ 创建周期波:createPeriodicWave, 真正的:real, 浮点数组32_:Float32Array, 想象的:imag, 约束:constraints, 周期波约束_:PeriodicWaveConstraints, 周期波_:PeriodicWave }
    创建周期波(真正的: 浮点数组32_, 想象的: 浮点数组32_, 约束?: 周期波约束_): 周期波_;

    //@@{ 创建脚本处理器:createScriptProcessor, 缓冲区大小:bufferSize, 输入通道数量:numberOfInputChannels, 输出通道数量:numberOfOutputChannels, 脚本处理器节点_:ScriptProcessorNode }
    创建脚本处理器(缓冲区大小?: 数字, 输入通道数量?: 数字, 输出通道数量?: 数字): 脚本处理器节点_;

    //@@{ 创建立体声音源环境:createStereoPanner, 立体声图像节点_:StereoPannerNode }
    创建立体声音源环境(): 立体声图像节点_;

    //@@{ 创建波型控制器:createWaveShaper, 波形控制器节点_:WaveShaperNode }
    创建波型控制器(): 波形控制器节点_;

    //@@{ 解码音频数据:decodeAudioData, 音频数据:audioData, 数组缓冲区_:ArrayBuffer, 成功回调:successCallback, 解码成功回调_:DecodeSuccessCallback, 错误回调:errorCallback, 解码错误回调_:DecodeErrorCallback, 预设_:Promise, 音频缓冲区_:AudioBuffer }
    解码音频数据(音频数据: 数组缓冲区_, 成功回调?: 解码成功回调_, 错误回调?: 解码错误回调_): 预设_<音频缓冲区_>;

    //@@{ 继续:resume, 预设_:Promise }
    继续(): 预设_<无值>;

    //@@{ 添加事件监听器:addEventListener, 音频上下文事件映射_:AudioContextEventMap, 类型:type, 侦听器:listener, 音频上下文_:AudioContext, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 音频上下文事件映射_>(类型: K, 侦听器: (本体: 音频上下文_, ev: 音频上下文事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

//@@{ 音频上下文_:AudioContext, 音频上下文基类_:AudioContextBase }
接口 音频上下文_ 扩展 音频上下文基类_ {

    //@@{ 暂停:suspend, 预设_:Promise }
    暂停(): 预设_<无值>;

}

声明 值量 音频上下文_: {

    //@@{ 原型:prototype, 音频上下文_:AudioContext }
    原型: 音频上下文_;

    //@@{ 音频上下文_:AudioContext }
    新建(): 音频上下文_;

};

//@@{ 音频目的节点_:AudioDestinationNode, 音频节点_:AudioNode }
接口 音频目的节点_ 扩展 音频节点_ {

    //@@{ 最大通道数:maxChannelCount }
    只读 最大通道数: 数字;

}

声明 值量 音频目的节点_: {

    //@@{ 原型:prototype, 音频目的节点_:AudioDestinationNode }
    原型: 音频目的节点_;

    //@@{ 音频目的节点_:AudioDestinationNode }
    新建(): 音频目的节点_;

};

//@@{ 音频侦听器_:AudioListener }
接口 音频侦听器_ {

    //@@{ 多普勒因子:dopplerFactor }
    多普勒因子: 数字;

    //@@{ 声速:speedOfSound }
    声速: 数字;

    //@@{ 置方向:setOrientation }
    置方向(x: 数字, y: 数字, z: 数字, xUp: 数字, yUp: 数字, zUp: 数字): 无值;

    //@@{ 置位置:setPosition }
    置位置(x: 数字, y: 数字, z: 数字): 无值;

    //@@{ 置速度:setVelocity }
    置速度(x: 数字, y: 数字, z: 数字): 无值;

}

声明 值量 音频侦听器_: {

    //@@{ 原型:prototype, 音频侦听器_:AudioListener }
    原型: 音频侦听器_;

    //@@{ 音频侦听器_:AudioListener }
    新建(): 音频侦听器_;

};

//@@{ 音频节点_:AudioNode, 事件目标_:EventTarget }
接口 音频节点_ 扩展 事件目标_ {

    //@@{ 通道数:channelCount }
    通道数: 数字;

    //@@{ 通道计数模式:channelCountMode, 通道计数模式_:ChannelCountMode }
    通道计数模式: 通道计数模式_;

    //@@{ 通道的解释:channelInterpretation, 通道解释_:ChannelInterpretation }
    通道的解释: 通道解释_;

    //@@{ 上下文:context, 音频上下文_:AudioContext }
    只读 上下文: 音频上下文_;

    //@@{ 输入数量:numberOfInputs }
    只读 输入数量: 数字;

    //@@{ 输出数量:numberOfOutputs }
    只读 输出数量: 数字;

    //@@{ 连接:connect, 目的地:destination, 音频节点_:AudioNode, 输出:output, 输入:input }
    连接(目的地: 音频节点_, 输出?: 数字, 输入?: 数字): 音频节点_;

    //@@{ 目的地:destination, 音频参数_:AudioParam, 输出:output }
    连接(目的地: 音频参数_, 输出?: 数字): 无值;

    //@@{ 断开连接:disconnect, 输出:output }
    断开连接(输出?: 数字): 无值;

    //@@{ 目的地:destination, 音频节点_:AudioNode, 输出:output, 输入:input }
    断开连接(目的地: 音频节点_, 输出?: 数字, 输入?: 数字): 无值;

    //@@{ 目的地:destination, 音频参数_:AudioParam, 输出:output }
    断开连接(目的地: 音频参数_, 输出?: 数字): 无值;

}

声明 值量 音频节点_: {

    //@@{ 原型:prototype, 音频节点_:AudioNode }
    原型: 音频节点_;

    //@@{ 音频节点_:AudioNode }
    新建(): 音频节点_;

};

//@@{ 音频参数_:AudioParam }
接口 音频参数_ {

    //@@{ 默认值:defaultValue }
    只读 默认值: 数字;

    //@@{ 值:value }
    值: 数字;

    //@@{ 取消预定值:cancelScheduledValues, 开始时间:startTime, 音频参数_:AudioParam }
    取消预定值(开始时间: 数字): 音频参数_;

    //@@{ 指数上升时间值:exponentialRampToValueAtTime, 值:value, 结束时间:endTime, 音频参数_:AudioParam }
    指数上升时间值(值: 数字, 结束时间: 数字): 音频参数_;

    //@@{ 线性上升时间值:linearRampToValueAtTime, 值:value, 结束时间:endTime, 音频参数_:AudioParam }
    线性上升时间值(值: 数字, 结束时间: 数字): 音频参数_;

    //@@{ 置目标时间:setTargetAtTime, 目标:target, 开始时间:startTime, 时间常数:timeConstant, 音频参数_:AudioParam }
    置目标时间(目标: 数字, 开始时间: 数字, 时间常数: 数字): 音频参数_;

    //@@{ 置值时间:setValueAtTime, 值:value, 开始时间:startTime, 音频参数_:AudioParam }
    置值时间(值: 数字, 开始时间: 数字): 音频参数_;

    //@@{ 置值时间曲线:setValueCurveAtTime, 值组:values, 浮点数组32_:Float32Array, 开始时间:startTime, 持续时间:duration, 音频参数_:AudioParam }
    置值时间曲线(值组: 浮点数组32_, 开始时间: 数字, 持续时间: 数字): 音频参数_;

}

声明 值量 音频参数_: {

    //@@{ 原型:prototype, 音频参数_:AudioParam }
    原型: 音频参数_;

    //@@{ 音频参数_:AudioParam }
    新建(): 音频参数_;

};

//@@{ 音频处理事件_:AudioProcessingEvent, 事件_:Event }
接口 音频处理事件_ 扩展 事件_ {

    //@@{ 输入缓冲区:inputBuffer, 音频缓冲区_:AudioBuffer }
    只读 输入缓冲区: 音频缓冲区_;

    //@@{ 输出缓冲区:outputBuffer, 音频缓冲区_:AudioBuffer }
    只读 输出缓冲区: 音频缓冲区_;

    //@@{ 播放中间:playbackTime }
    只读 播放中间: 数字;

}

声明 值量 音频处理事件_: {

    //@@{ 原型:prototype, 音频处理事件_:AudioProcessingEvent }
    原型: 音频处理事件_;

    //@@{ 音频处理事件_:AudioProcessingEvent }
    新建(): 音频处理事件_;

};

//@@{ 音频轨道_:AudioTrack }
接口 音频轨道_ {

    //@@{ 启用:enabled }
    启用: 真假;

    只读 id: 文字;

    //@@{ 种类:kind }
    种类: 文字;

    //@@{ 标签:label }
    只读 标签: 文字;

    //@@{ 语言:language }
    语言: 文字;

    //@@{ 源缓冲区:sourceBuffer, 源缓冲区_:SourceBuffer }
    只读 源缓冲区: 源缓冲区_;

}

声明 值量 音频轨道_: {

    //@@{ 原型:prototype, 音频轨道_:AudioTrack }
    原型: 音频轨道_;

    //@@{ 音频轨道_:AudioTrack }
    新建(): 音频轨道_;

};

//@@{ 音频轨道列表事件映射_:AudioTrackListEventMap }
接口 音频轨道列表事件映射_ {

    //@@{ "添加轨道":"addtrack", 轨道事件_:TrackEvent }
    "添加轨道": 轨道事件_;

    //@@{ "改变":"change", 事件_:Event }
    "改变": 事件_;

    //@@{ "删除轨道":"removetrack", 轨道事件_:TrackEvent }
    "删除轨道": 轨道事件_;

}

//@@{ 音频轨道列表_:AudioTrackList, 事件目标_:EventTarget }
接口 音频轨道列表_ 扩展 事件目标_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 正在添加轨道:onaddtrack, 音频轨道列表_:AudioTrackList, 轨道事件_:TrackEvent }
    正在添加轨道: (本体: 音频轨道列表_, ev: 轨道事件_) => 任意;

    //@@{ 正在改变:onchange, 音频轨道列表_:AudioTrackList, 事件_:Event }
    正在改变: (本体: 音频轨道列表_, ev: 事件_) => 任意;

    //@@{ 正在删除轨道:onremovetrack, 音频轨道列表_:AudioTrackList, 轨道事件_:TrackEvent }
    正在删除轨道: (本体: 音频轨道列表_, ev: 轨道事件_) => 任意;

    //@@{ 取轨道按Id:getTrackById, 音频轨道_:AudioTrack }
    取轨道按Id(id: 文字): 音频轨道_ | 空值;

    //@@{ 项目:item, 索引:index, 音频轨道_:AudioTrack }
    项目(索引: 数字): 音频轨道_;

    //@@{ 添加事件监听器:addEventListener, 音频轨道列表事件映射_:AudioTrackListEventMap, 类型:type, 侦听器:listener, 音频轨道列表_:AudioTrackList, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 音频轨道列表事件映射_>(类型: K, 侦听器: (本体: 音频轨道列表_, ev: 音频轨道列表事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

    //@@{ 索引:index, 音频轨道_:AudioTrack }
    [索引: 数字]: 音频轨道_;

}

声明 值量 音频轨道列表_: {

    //@@{ 原型:prototype, 音频轨道列表_:AudioTrackList }
    原型: 音频轨道列表_;

    //@@{ 音频轨道列表_:AudioTrackList }
    新建(): 音频轨道列表_;

};

接口 BarProp {

    //@@{ 可见性:visible }
    只读 可见性: 真假;

}

声明 值量 BarProp: {

    //@@{ 原型:prototype }
    原型: BarProp;

    新建(): BarProp;

};

//@@{ 将卸载事件_:BeforeUnloadEvent, 事件_:Event }
接口 将卸载事件_ 扩展 事件_ {

    //@@{ 返回值:returnValue }
    返回值: 任意;

}

声明 值量 将卸载事件_: {

    //@@{ 原型:prototype, 将卸载事件_:BeforeUnloadEvent }
    原型: 将卸载事件_;

    //@@{ 将卸载事件_:BeforeUnloadEvent }
    新建(): 将卸载事件_;

};

//@@{ 双二次滤波器节点_:BiquadFilterNode, 音频节点_:AudioNode }
接口 双二次滤波器节点_ 扩展 音频节点_ {

    //@@{ 降低:detune, 音频参数_:AudioParam }
    只读 降低: 音频参数_;

    //@@{ 频率:frequency, 音频参数_:AudioParam }
    只读 频率: 音频参数_;

    //@@{ 增益:gain, 音频参数_:AudioParam }
    只读 增益: 音频参数_;

    //@@{ 音频参数_:AudioParam }
    只读 Q: 音频参数_;

    //@@{ 类型:type, 滤波器类型_:BiquadFilterType }
    类型: 滤波器类型_;

    //@@{ 取频率响应:getFrequencyResponse, 频率HZ:frequencyHz, 浮点数组32_:Float32Array, mag响应:magResponse, 相位响应:phaseResponse }
    取频率响应(频率HZ: 浮点数组32_, mag响应: 浮点数组32_, 相位响应: 浮点数组32_): 无值;

}

声明 值量 双二次滤波器节点_: {

    //@@{ 原型:prototype, 双二次滤波器节点_:BiquadFilterNode }
    原型: 双二次滤波器节点_;

    //@@{ 双二次滤波器节点_:BiquadFilterNode }
    新建(): 双二次滤波器节点_;

};

//@@{ 二进制对象_:Blob }
接口 二进制对象_ {

    //@@{ 大小:size }
    只读 大小: 数字;

    //@@{ 类型:type }
    只读 类型: 文字;

    //@@{ ms关闭:msClose }
    ms关闭(): 无值;

    //@@{ ms分离流:msDetachStream }
    ms分离流(): 任意;

    //@@{ 分割:slice, 开始:start, 结束:end, 内容类型:contentType, 二进制对象_:Blob }
    分割(开始?: 数字, 结束?: 数字, 内容类型?: 文字): 二进制对象_;

}

声明 值量 二进制对象_: {

    //@@{ 原型:prototype, 二进制对象_:Blob }
    原型: 二进制对象_;

    //@@{ 二进制对象部分:blobParts, 选项:options, 二进制对象属性包_:BlobPropertyBag, 二进制对象_:Blob }
    新建 (二进制对象部分?: 任意[], 选项?: 二进制对象属性包_): 二进制对象_;

};

//@@{ 缓存_:Cache }
接口 缓存_ {

    //@@{ 添加:add, 请求:request, 请求信息_:RequestInfo, 预设_:Promise }
    添加(请求: 请求信息_): 预设_<无值>;

    //@@{ 添加所有:addAll, 请求组:requests, 请求信息_:RequestInfo, 预设_:Promise }
    添加所有(请求组: 请求信息_[]): 预设_<无值>;

    //@@{ 删除:delete, 请求:request, 请求信息_:RequestInfo, 选项:options, 缓存查询选项_:CacheQueryOptions, 预设_:Promise }
    删除(请求: 请求信息_, 选项?: 缓存查询选项_): 预设_<真假>;

    //@@{ 键组:keys, 请求:request, 请求信息_:RequestInfo, 选项:options, 缓存查询选项_:CacheQueryOptions, 预设_:Promise, 请求_:Request }
    键组(请求?: 请求信息_, 选项?: 缓存查询选项_): 预设_<请求_[]>;

    //@@{ 匹配:match, 请求:request, 请求信息_:RequestInfo, 选项:options, 缓存查询选项_:CacheQueryOptions, 预设_:Promise, 响应_:Response }
    匹配(请求: 请求信息_, 选项?: 缓存查询选项_): 预设_<响应_>;

    //@@{ 匹配所有:matchAll, 请求:request, 请求信息_:RequestInfo, 选项:options, 缓存查询选项_:CacheQueryOptions, 预设_:Promise, 响应_:Response }
    匹配所有(请求?: 请求信息_, 选项?: 缓存查询选项_): 预设_<响应_[]>;

    //@@{ 放入:put, 请求:request, 请求信息_:RequestInfo, 响应:response, 响应_:Response, 预设_:Promise }
    放入(请求: 请求信息_, 响应: 响应_): 预设_<无值>;

}

声明 值量 缓存_: {

    //@@{ 原型:prototype, 缓存_:Cache }
    原型: 缓存_;

    //@@{ 缓存_:Cache }
    新建(): 缓存_;

};

//@@{ 缓存存储_:CacheStorage }
接口 缓存存储_ {

    //@@{ 删除:delete, 缓存名称:cacheName, 预设_:Promise }
    删除(缓存名称: 文字): 预设_<真假>;

    //@@{ 存在:has, 缓存名称:cacheName, 预设_:Promise }
    存在(缓存名称: 文字): 预设_<真假>;

    //@@{ 键组:keys, 预设_:Promise }
    键组(): 预设_<文字[]>;

    //@@{ 匹配:match, 请求:request, 请求信息_:RequestInfo, 选项:options, 缓存查询选项_:CacheQueryOptions, 预设_:Promise }
    匹配(请求: 请求信息_, 选项?: 缓存查询选项_): 预设_<任意>;

    //@@{ 打开:open, 缓存名称:cacheName, 预设_:Promise, 缓存_:Cache }
    打开(缓存名称: 文字): 预设_<缓存_>;

}

声明 值量 缓存存储_: {

    //@@{ 原型:prototype, 缓存存储_:CacheStorage }
    原型: 缓存存储_;

    //@@{ 缓存存储_:CacheStorage }
    新建(): 缓存存储_;

};

//@@{ 画板梯度_:CanvasGradient }
接口 画板梯度_ {

    //@@{ 添加颜色停止:addColorStop, 偏移:offset, 颜色:color }
    添加颜色停止(偏移: 数字, 颜色: 文字): 无值;

}

声明 值量 画板梯度_: {

    //@@{ 原型:prototype, 画板梯度_:CanvasGradient }
    原型: 画板梯度_;

    //@@{ 画板梯度_:CanvasGradient }
    新建(): 画板梯度_;

};

//@@{ 画板模式_:CanvasPattern }
接口 画板模式_ {

    //@@{ 置转换:setTransform, 矩阵:matrix, SVG矩阵_:SVGMatrix }
    置转换(矩阵: SVG矩阵_): 无值;

}

声明 值量 画板模式_: {

    //@@{ 原型:prototype, 画板模式_:CanvasPattern }
    原型: 画板模式_;

    //@@{ 画板模式_:CanvasPattern }
    新建(): 画板模式_;

};

//@@{ 画板渲染上下文2D_:CanvasRenderingContext2D, 实例_:Object, 画板路径方法_:CanvasPathMethods }
接口 画板渲染上下文2D_ 扩展 实例_, 画板路径方法_ {

    //@@{ 画板:canvas, HTML画板元素_:HTMLCanvasElement }
    只读 画板: HTML画板元素_;

    //@@{ 填充样式:fillStyle, 画板梯度_:CanvasGradient, 画板模式_:CanvasPattern }
    填充样式: 文字 | 画板梯度_ | 画板模式_;

    //@@{ 字体:font }
    字体: 文字;

    //@@{ 全局阿尔法:globalAlpha }
    全局阿尔法: 数字;

    //@@{ 全球复合操作:globalCompositeOperation }
    全球复合操作: 文字;

    //@@{ 图像平滑启用:imageSmoothingEnabled }
    图像平滑启用: 真假;

    //@@{ 线帽:lineCap }
    线帽: 文字;

    //@@{ 虚线偏移:lineDashOffset }
    虚线偏移: 数字;

    //@@{ 线连接:lineJoin }
    线连接: 文字;

    //@@{ 线宽:lineWidth }
    线宽: 数字;

    //@@{ 斜接限制:miterLimit }
    斜接限制: 数字;

    //@@{ ms填充规则:msFillRule, 画板填满规则_:CanvasFillRule }
    ms填充规则: 画板填满规则_;

    //@@{ 阴影模糊:shadowBlur }
    阴影模糊: 数字;

    //@@{ 阴影颜色:shadowColor }
    阴影颜色: 文字;

    //@@{ 阴影偏移X:shadowOffsetX }
    阴影偏移X: 数字;

    //@@{ 阴影偏移Y:shadowOffsetY }
    阴影偏移Y: 数字;

    //@@{ 笔触样式:strokeStyle, 画板梯度_:CanvasGradient, 画板模式_:CanvasPattern }
    笔触样式: 文字 | 画板梯度_ | 画板模式_;

    //@@{ 文本对齐:textAlign }
    文本对齐: 文字;

    //@@{ 文本基线:textBaseline }
    文本基线: 文字;

    //@@{ moz图像平滑启用:mozImageSmoothingEnabled }
    moz图像平滑启用: 真假;

    //@@{ webkit图像平滑启用:webkitImageSmoothingEnabled }
    webkit图像平滑启用: 真假;

    //@@{ o图像平滑启用:oImageSmoothingEnabled }
    o图像平滑启用: 真假;

    //@@{ 开始路径:beginPath }
    开始路径(): 无值;

    //@@{ 清除矩形:clearRect }
    清除矩形(x: 数字, y: 数字, w: 数字, h: 数字): 无值;

    //@@{ 剪切:clip, 填充规则:fillRule, 画板填满规则_:CanvasFillRule }
    剪切(填充规则?: 画板填满规则_): 无值;

    //@@{ 创建图像数据:createImageData, 图像数据或Sw:imageDataOrSw, 图像数据_:ImageData }
    创建图像数据(图像数据或Sw: 数字 | 图像数据_, sh?: 数字): 图像数据_;

    //@@{ 创建线性渐变:createLinearGradient, 画板梯度_:CanvasGradient }
    创建线性渐变(x0: 数字, y0: 数字, x1: 数字, y1: 数字): 画板梯度_;

    //@@{ 创建模式:createPattern, 图像:image, HTML图像元素_:HTMLImageElement, HTML画板元素_:HTMLCanvasElement, HTML视频元素_:HTMLVideoElement, 重复:repetition, 画板模式_:CanvasPattern }
    创建模式(图像: HTML图像元素_ | HTML画板元素_ | HTML视频元素_, 重复: 文字): 画板模式_;

    //@@{ 创建径向渐变:createRadialGradient, 画板梯度_:CanvasGradient }
    创建径向渐变(x0: 数字, y0: 数字, r0: 数字, x1: 数字, y1: 数字, r1: 数字): 画板梯度_;

    //@@{ 画重点如果需要:drawFocusIfNeeded, 元素:element, 元素_:Element }
    画重点如果需要(元素: 元素_): 无值;

    //@@{ 画图像:drawImage, 图像:image, HTML图像元素_:HTMLImageElement, HTML画板元素_:HTMLCanvasElement, HTML视频元素_:HTMLVideoElement, 位图图像_:ImageBitmap }
    画图像(图像: HTML图像元素_ | HTML画板元素_ | HTML视频元素_ | 位图图像_, dstX: 数字, dstY: 数字): 无值;

    //@@{ 图像:image, HTML图像元素_:HTMLImageElement, HTML画板元素_:HTMLCanvasElement, HTML视频元素_:HTMLVideoElement, 位图图像_:ImageBitmap }
    画图像(图像: HTML图像元素_ | HTML画板元素_ | HTML视频元素_ | 位图图像_, dstX: 数字, dstY: 数字, dstW: 数字, dstH: 数字): 无值;

    //@@{ 图像:image, HTML图像元素_:HTMLImageElement, HTML画板元素_:HTMLCanvasElement, HTML视频元素_:HTMLVideoElement, 位图图像_:ImageBitmap }
    画图像(图像: HTML图像元素_ | HTML画板元素_ | HTML视频元素_ | 位图图像_, srcX: 数字, srcY: 数字, srcW: 数字, srcH: 数字, dstX: 数字, dstY: 数字, dstW: 数字, dstH: 数字): 无值;

    //@@{ 填充:fill, 填充规则:fillRule, 画板填满规则_:CanvasFillRule }
    填充(填充规则?: 画板填满规则_): 无值;

    //@@{ 填充矩形:fillRect }
    填充矩形(x: 数字, y: 数字, w: 数字, h: 数字): 无值;

    //@@{ 填充文本:fillText, 文本:text, 最大宽度:maxWidth }
    填充文本(文本: 文字, x: 数字, y: 数字, 最大宽度?: 数字): 无值;

    //@@{ 取图像数据:getImageData, 图像数据_:ImageData }
    取图像数据(sx: 数字, sy: 数字, sw: 数字, sh: 数字): 图像数据_;

    //@@{ 取虚线:getLineDash }
    取虚线(): 数字[];

    //@@{ 是路径内点:isPointInPath, 填充规则:fillRule, 画板填满规则_:CanvasFillRule }
    是路径内点(x: 数字, y: 数字, 填充规则?: 画板填满规则_): 真假;

    //@@{ 测量文本:measureText, 文本:text, 文本指标_:TextMetrics }
    测量文本(文本: 文字): 文本指标_;

    //@@{ 放入图像数据:putImageData, 图像数据:imagedata, 图像数据_:ImageData, dx:dx, dy:dy, 脏X:dirtyX, 脏Y:dirtyY, 脏宽度:dirtyWidth, 脏高度:dirtyHeight }
    放入图像数据(图像数据: 图像数据_, dx: 数字, dy: 数字, 脏X?: 数字, 脏Y?: 数字, 脏宽度?: 数字, 脏高度?: 数字): 无值;

    //@@{ 恢复:restore }
    恢复(): 无值;

    //@@{ 旋转:rotate, 角度:angle }
    旋转(角度: 数字): 无值;

    //@@{ 保存:save }
    保存(): 无值;

    //@@{ 缩放:scale }
    缩放(x: 数字, y: 数字): 无值;

    //@@{ 置虚线:setLineDash, 段:segments }
    置虚线(段: 数字[]): 无值;

    //@@{ 置转换:setTransform, dx:dx, dy:dy }
    置转换(m11: 数字, m12: 数字, m21: 数字, m22: 数字, dx: 数字, dy: 数字): 无值;

    //@@{ 绘制:stroke, 路径:path, 路径2D_:Path2D }
    绘制(路径?: 路径2D_): 无值;

    //@@{ 绘制矩形:strokeRect }
    绘制矩形(x: 数字, y: 数字, w: 数字, h: 数字): 无值;

    //@@{ 绘制文本:strokeText, 文本:text, 最大宽度:maxWidth }
    绘制文本(文本: 文字, x: 数字, y: 数字, 最大宽度?: 数字): 无值;

    //@@{ 变换:transform, dx:dx, dy:dy }
    变换(m11: 数字, m12: 数字, m21: 数字, m22: 数字, dx: 数字, dy: 数字): 无值;

    //@@{ 翻转:translate }
    翻转(x: 数字, y: 数字): 无值;

}

声明 值量 画板渲染上下文2D_: {

    //@@{ 原型:prototype, 画板渲染上下文2D_:CanvasRenderingContext2D }
    原型: 画板渲染上下文2D_;

    //@@{ 画板渲染上下文2D_:CanvasRenderingContext2D }
    新建(): 画板渲染上下文2D_;

};

//@@{ CDATA区段_:CDATASection, 文本_:Text }
接口 CDATA区段_ 扩展 文本_ {

}

声明 值量 CDATA区段_: {

    //@@{ 原型:prototype, CDATA区段_:CDATASection }
    原型: CDATA区段_;

    //@@{ CDATA区段_:CDATASection }
    新建(): CDATA区段_;

};

//@@{ 通道合并节点_:ChannelMergerNode, 音频节点_:AudioNode }
接口 通道合并节点_ 扩展 音频节点_ {

}

声明 值量 通道合并节点_: {

    //@@{ 原型:prototype, 通道合并节点_:ChannelMergerNode }
    原型: 通道合并节点_;

    //@@{ 通道合并节点_:ChannelMergerNode }
    新建(): 通道合并节点_;

};

//@@{ 通道分流节点_:ChannelSplitterNode, 音频节点_:AudioNode }
接口 通道分流节点_ 扩展 音频节点_ {

}

声明 值量 通道分流节点_: {

    //@@{ 原型:prototype, 通道分流节点_:ChannelSplitterNode }
    原型: 通道分流节点_;

    //@@{ 通道分流节点_:ChannelSplitterNode }
    新建(): 通道分流节点_;

};

//@@{ 字符数据_:CharacterData, 节点_:Node, 子节点_:ChildNode }
接口 字符数据_ 扩展 节点_, 子节点_ {

    //@@{ 数据:data }
    数据: 文字;

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 附加数据:appendData, 参数:arg }
    附加数据(参数: 文字): 无值;

    //@@{ 删除数据:deleteData, 偏移:offset, 数量:count }
    删除数据(偏移: 数字, 数量: 数字): 无值;

    //@@{ 插入数据:insertData, 偏移:offset, 参数:arg }
    插入数据(偏移: 数字, 参数: 文字): 无值;

    //@@{ 替换数据:replaceData, 偏移:offset, 数量:count, 参数:arg }
    替换数据(偏移: 数字, 数量: 数字, 参数: 文字): 无值;

    //@@{ 子文字数据:substringData, 偏移:offset, 数量:count }
    子文字数据(偏移: 数字, 数量: 数字): 文字;

}

声明 值量 字符数据_: { 

    //@@{ 原型:prototype, 字符数据_:CharacterData }
    原型: 字符数据_;

    //@@{ 字符数据_:CharacterData }
    新建(): 字符数据_;

};

//@@{ 客户矩形_:ClientRect }
接口 客户矩形_ {

    //@@{ 底:bottom }
    底: 数字;

    //@@{ 高度:height }
    只读 高度: 数字;

    //@@{ 左:left }
    左: 数字;

    //@@{ 右:right }
    右: 数字;

    //@@{ 顶:top }
    顶: 数字;

    //@@{ 宽度:width }
    只读 宽度: 数字;

}

声明 值量 客户矩形_: {

    //@@{ 原型:prototype, 客户矩形_:ClientRect }
    原型: 客户矩形_;

    //@@{ 客户矩形_:ClientRect }
    新建(): 客户矩形_;

};

//@@{ 客户矩形列表_:ClientRectList }
接口 客户矩形列表_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 项目:item, 索引:index, 客户矩形_:ClientRect }
    项目(索引: 数字): 客户矩形_;

    //@@{ 索引:index, 客户矩形_:ClientRect }
    [索引: 数字]: 客户矩形_;

}

声明 值量 客户矩形列表_: {

    //@@{ 原型:prototype, 客户矩形列表_:ClientRectList }
    原型: 客户矩形列表_;

    //@@{ 客户矩形列表_:ClientRectList }
    新建(): 客户矩形列表_;

};

//@@{ 剪贴板事件_:ClipboardEvent, 事件_:Event }
接口 剪贴板事件_ 扩展 事件_ {

    //@@{ 剪贴板数据:clipboardData, 数据传输_:DataTransfer }
    只读 剪贴板数据: 数据传输_;

}

声明 值量 剪贴板事件_: {

    //@@{ 原型:prototype, 剪贴板事件_:ClipboardEvent }
    原型: 剪贴板事件_;

    //@@{ 类型:type, 事件初始化词典:eventInitDict, 剪贴板事件初始化_:ClipboardEventInit, 剪贴板事件_:ClipboardEvent }
    新建(类型: 文字, 事件初始化词典?: 剪贴板事件初始化_): 剪贴板事件_;

};

//@@{ 关闭事件_:CloseEvent, 事件_:Event }
接口 关闭事件_ 扩展 事件_ {

    //@@{ 代码:code }
    只读 代码: 数字;

    //@@{ 原因:reason }
    只读 原因: 文字;

    //@@{ 是干净的:wasClean }
    只读 是干净的: 真假;

    //@@{ 初始化关闭事件:initCloseEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 是干净的参数:wasCleanArg, 代码参数:codeArg, 原因参数:reasonArg }
    初始化关闭事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 是干净的参数: 真假, 代码参数: 数字, 原因参数: 文字): 无值;

}

声明 值量 关闭事件_: {

    //@@{ 原型:prototype, 关闭事件_:CloseEvent }
    原型: 关闭事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 关闭事件初始化_:CloseEventInit, 关闭事件_:CloseEvent }
    新建(类型参数: 文字, 事件初始化词典?: 关闭事件初始化_): 关闭事件_;

};

//@@{ 注释_:Comment, 字符数据_:CharacterData }
接口 注释_ 扩展 字符数据_ {

    //@@{ 文本:text }
    文本: 文字;

}

声明 值量 注释_: {

    //@@{ 原型:prototype, 注释_:Comment }
    原型: 注释_;

    //@@{ 注释_:Comment }
    新建(): 注释_;

};

//@@{ 组件事件_:CompositionEvent, UI事件_:UIEvent }
接口 组件事件_ 扩展 UI事件_ {

    //@@{ 数据:data }
    只读 数据: 文字;

    //@@{ 语言环境:locale }
    只读 语言环境: 文字;

    //@@{ 初始化组件事件:initCompositionEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 视图参数:viewArg, 窗口_:Window, 数据参数:dataArg, 语言环境:locale }
    初始化组件事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 视图参数: 窗口_, 数据参数: 文字, 语言环境: 文字): 无值;

}

声明 值量 组件事件_: {

    //@@{ 原型:prototype, 组件事件_:CompositionEvent }
    原型: 组件事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 组件事件初始化_:CompositionEventInit, 组件事件_:CompositionEvent }
    新建(类型参数: 文字, 事件初始化词典?: 组件事件初始化_): 组件事件_;

};

//@@{ 控制台_:Console }
接口 控制台_ {

    //@@{ 断言:assert, 测试:test, 消息:message, 可选参数:optionalParams }
    断言(测试?: 真假, 消息?: 文字, ...可选参数: 任意[]): 无值;

    //@@{ 清除:clear }
    清除(): 无值;

    //@@{ 数量:count, 数量标题:countTitle }
    数量(数量标题?: 文字): 无值;

    //@@{ 调试:debug, 消息:message, 可选参数:optionalParams }
    调试(消息?: 任意, ...可选参数: 任意[]): 无值;

    //@@{ 目录:dir, 值:value, 可选参数:optionalParams }
    目录(值?: 任意, ...可选参数: 任意[]): 无值;

    //@@{ 目录Xml:dirxml, 值:value }
    目录Xml(值: 任意): 无值;

    //@@{ 错误:error, 消息:message, 可选参数:optionalParams }
    错误(消息?: 任意, ...可选参数: 任意[]): 无值;

    //@@{ 异常:exception, 消息:message, 可选参数:optionalParams }
    异常(消息?: 文字, ...可选参数: 任意[]): 无值;

    //@@{ 集团:group, 集团标题:groupTitle, 可选参数:optionalParams }
    集团(集团标题?: 文字, ...可选参数: 任意[]): 无值;

    //@@{ 集团塌陷:groupCollapsed, 集团标题:groupTitle, 可选参数:optionalParams }
    集团塌陷(集团标题?: 文字, ...可选参数: 任意[]): 无值;

    //@@{ 集团结束:groupEnd }
    集团结束(): 无值;

    //@@{ 信息:info, 消息:message, 可选参数:optionalParams }
    信息(消息?: 任意, ...可选参数: 任意[]): 无值;

    //@@{ 日志:log, 消息:message, 可选参数:optionalParams }
    日志(消息?: 任意, ...可选参数: 任意[]): 无值;

    //@@{ ms是独立组件:msIsIndependentlyComposed, 元素:element, 元素_:Element }
    ms是独立组件(元素: 元素_): 真假;

    //@@{ 配置文件:profile, 报告名称:reportName }
    配置文件(报告名称?: 文字): 无值;

    //@@{ 配置文件结束:profileEnd }
    配置文件结束(): 无值;

    //@@{ 选择:select, 元素:element, 元素_:Element }
    选择(元素: 元素_): 无值;

    //@@{ 表:table, 数据:data }
    表(...数据: 任意[]): 无值;

    //@@{ 时间:time, 计时器名称:timerName }
    时间(计时器名称?: 文字): 无值;

    //@@{ 时间结束:timeEnd, 计时器名称:timerName }
    时间结束(计时器名称?: 文字): 无值;

    //@@{ 轨道:trace, 消息:message, 可选参数:optionalParams }
    轨道(消息?: 任意, ...可选参数: 任意[]): 无值;

    //@@{ 警告:warn, 消息:message, 可选参数:optionalParams }
    警告(消息?: 任意, ...可选参数: 任意[]): 无值;

}

声明 值量 控制台_: {

    //@@{ 原型:prototype, 控制台_:Console }
    原型: 控制台_;

    //@@{ 控制台_:Console }
    新建(): 控制台_;

};

//@@{ 卷积器节点_:ConvolverNode, 音频节点_:AudioNode }
接口 卷积器节点_ 扩展 音频节点_ {

    //@@{ 缓冲:buffer, 音频缓冲区_:AudioBuffer }
    缓冲: 音频缓冲区_ | 空值;

    //@@{ 正常化:normalize }
    正常化: 真假;

}

声明 值量 卷积器节点_: {

    //@@{ 原型:prototype, 卷积器节点_:ConvolverNode }
    原型: 卷积器节点_;

    //@@{ 卷积器节点_:ConvolverNode }
    新建(): 卷积器节点_;

};

//@@{ 坐标_:Coordinates }
接口 坐标_ {

    //@@{ 精度:accuracy }
    只读 精度: 数字;

    //@@{ 高度:altitude }
    只读 高度: 数字 | 空值;

    //@@{ 高度精度:altitudeAccuracy }
    只读 高度精度: 数字 | 空值;

    //@@{ 标题:heading }
    只读 标题: 数字 | 空值;

    //@@{ 纬度:latitude }
    只读 纬度: 数字;

    //@@{ 经度:longitude }
    只读 经度: 数字;

    //@@{ 速度:speed }
    只读 速度: 数字 | 空值;

}

声明 值量 坐标_: {

    //@@{ 原型:prototype, 坐标_:Coordinates }
    原型: 坐标_;

    //@@{ 坐标_:Coordinates }
    新建(): 坐标_;

};

//@@{ 加密_:Crypto, 实例_:Object, 随机源_:RandomSource }
接口 加密_ 扩展 实例_, 随机源_ {

    //@@{ 微妙的:subtle, 加密原语_:SubtleCrypto }
    只读 微妙的: 加密原语_;

}

声明 值量 加密_: {

    //@@{ 原型:prototype, 加密_:Crypto }
    原型: 加密_;

    //@@{ 加密_:Crypto }
    新建(): 加密_;

};

//@@{ 加密密钥_:CryptoKey }
接口 加密密钥_ {

    //@@{ 算法:algorithm, 键算法_:KeyAlgorithm }
    只读 算法: 键算法_;

    //@@{ 可推断的:extractable }
    只读 可推断的: 真假;

    //@@{ 类型:type }
    只读 类型: 文字;

    //@@{ 用法:usages }
    只读 用法: 文字[];

}

声明 值量 加密密钥_: {

    //@@{ 原型:prototype, 加密密钥_:CryptoKey }
    原型: 加密密钥_;

    //@@{ 加密密钥_:CryptoKey }
    新建(): 加密密钥_;

};

//@@{ 加密密钥对_:CryptoKeyPair }
接口 加密密钥对_ {

    //@@{ 私钥:privateKey, 加密密钥_:CryptoKey }
    私钥: 加密密钥_;

    //@@{ 公钥:publicKey, 加密密钥_:CryptoKey }
    公钥: 加密密钥_;

}

声明 值量 加密密钥对_: {

    //@@{ 原型:prototype, 加密密钥对_:CryptoKeyPair }
    原型: 加密密钥对_;

    //@@{ 加密密钥对_:CryptoKeyPair }
    新建(): 加密密钥对_;

};

接口 CSS {

    //@@{ 支持:supports, 属性:property, 值:value }
    支持(属性: 文字, 值?: 文字): 真假;

}

声明 值量 CSS: CSS;

//@@{ CSS规则条件_:CSSConditionRule, CSS分组规则_:CSSGroupingRule }
接口 CSS规则条件_ 扩展 CSS分组规则_ {

    //@@{ 条件文本:conditionText }
    条件文本: 文字;

}

声明 值量 CSS规则条件_: {

    //@@{ 原型:prototype, CSS规则条件_:CSSConditionRule }
    原型: CSS规则条件_;

    //@@{ CSS规则条件_:CSSConditionRule }
    新建(): CSS规则条件_;

};

//@@{ CSS字体多样规则_:CSSFontFaceRule, CSS规则_:CSSRule }
接口 CSS字体多样规则_ 扩展 CSS规则_ {

    //@@{ 样式:style, CSS样式声明_:CSSStyleDeclaration }
    只读 样式: CSS样式声明_;

}

声明 值量 CSS字体多样规则_: {

    //@@{ 原型:prototype, CSS字体多样规则_:CSSFontFaceRule }
    原型: CSS字体多样规则_;

    //@@{ CSS字体多样规则_:CSSFontFaceRule }
    新建(): CSS字体多样规则_;

};

//@@{ CSS分组规则_:CSSGroupingRule, CSS规则_:CSSRule }
接口 CSS分组规则_ 扩展 CSS规则_ {

    //@@{ css规则:cssRules, CSS规则列表_:CSSRuleList }
    只读 css规则: CSS规则列表_;

    //@@{ 删除规则:deleteRule, 索引:index }
    删除规则(索引: 数字): 无值;

    //@@{ 插入规则:insertRule, 规则:rule, 索引:index }
    插入规则(规则: 文字, 索引: 数字): 数字;

}

声明 值量 CSS分组规则_: {

    //@@{ 原型:prototype, CSS分组规则_:CSSGroupingRule }
    原型: CSS分组规则_;

    //@@{ CSS分组规则_:CSSGroupingRule }
    新建(): CSS分组规则_;

};

//@@{ CSS导入规则_:CSSImportRule, CSS规则_:CSSRule }
接口 CSS导入规则_ 扩展 CSS规则_ {

    //@@{ 超链接:href }
    只读 超链接: 文字;

    //@@{ 媒体:media, 媒体列表_:MediaList }
    只读 媒体: 媒体列表_;

    //@@{ 样式表:styleSheet, CSS样式表_:CSSStyleSheet }
    只读 样式表: CSS样式表_;

}

声明 值量 CSS导入规则_: {

    //@@{ 原型:prototype, CSS导入规则_:CSSImportRule }
    原型: CSS导入规则_;

    //@@{ CSS导入规则_:CSSImportRule }
    新建(): CSS导入规则_;

};

//@@{ CSS关键帧规则_:CSSKeyframeRule, CSS规则_:CSSRule }
接口 CSS关键帧规则_ 扩展 CSS规则_ {

    //@@{ 键文本:keyText }
    键文本: 文字;

    //@@{ 样式:style, CSS样式声明_:CSSStyleDeclaration }
    只读 样式: CSS样式声明_;

}

声明 值量 CSS关键帧规则_: {

    //@@{ 原型:prototype, CSS关键帧规则_:CSSKeyframeRule }
    原型: CSS关键帧规则_;

    //@@{ CSS关键帧规则_:CSSKeyframeRule }
    新建(): CSS关键帧规则_;

};

//@@{ CSS关键帧组规则_:CSSKeyframesRule, CSS规则_:CSSRule }
接口 CSS关键帧组规则_ 扩展 CSS规则_ {

    //@@{ css规则:cssRules, CSS规则列表_:CSSRuleList }
    只读 css规则: CSS规则列表_;

    //@@{ 名字:name }
    名字: 文字;

    //@@{ 添加规则:appendRule, 规则:rule }
    添加规则(规则: 文字): 无值;

    //@@{ 删除规则:deleteRule, 规则:rule }
    删除规则(规则: 文字): 无值;

    //@@{ 查找规则:findRule, 规则:rule, CSS关键帧规则_:CSSKeyframeRule }
    查找规则(规则: 文字): CSS关键帧规则_;

}

声明 值量 CSS关键帧组规则_: {

    //@@{ 原型:prototype, CSS关键帧组规则_:CSSKeyframesRule }
    原型: CSS关键帧组规则_;

    //@@{ CSS关键帧组规则_:CSSKeyframesRule }
    新建(): CSS关键帧组规则_;

};

//@@{ CSS媒体规则_:CSSMediaRule, CSS规则条件_:CSSConditionRule }
接口 CSS媒体规则_ 扩展 CSS规则条件_ {

    //@@{ 媒体:media, 媒体列表_:MediaList }
    只读 媒体: 媒体列表_;

}

声明 值量 CSS媒体规则_: {

    //@@{ 原型:prototype, CSS媒体规则_:CSSMediaRule }
    原型: CSS媒体规则_;

    //@@{ CSS媒体规则_:CSSMediaRule }
    新建(): CSS媒体规则_;

};

//@@{ CSS名称空间规则_:CSSNamespaceRule, CSS规则_:CSSRule }
接口 CSS名称空间规则_ 扩展 CSS规则_ {

    //@@{ 名称空间URI:namespaceURI }
    只读 名称空间URI: 文字;

    //@@{ 前缀:prefix }
    只读 前缀: 文字;

}

声明 值量 CSS名称空间规则_: {

    //@@{ 原型:prototype, CSS名称空间规则_:CSSNamespaceRule }
    原型: CSS名称空间规则_;

    //@@{ CSS名称空间规则_:CSSNamespaceRule }
    新建(): CSS名称空间规则_;

};

//@@{ CSS页面规则_:CSSPageRule, CSS规则_:CSSRule }
接口 CSS页面规则_ 扩展 CSS规则_ {

    //@@{ 伪类:pseudoClass }
    只读 伪类: 文字;

    //@@{ 选择器:selector }
    只读 选择器: 文字;

    //@@{ 选择文本:selectorText }
    选择文本: 文字;

    //@@{ 样式:style, CSS样式声明_:CSSStyleDeclaration }
    只读 样式: CSS样式声明_;

}

声明 值量 CSS页面规则_: {

    //@@{ 原型:prototype, CSS页面规则_:CSSPageRule }
    原型: CSS页面规则_;

    //@@{ CSS页面规则_:CSSPageRule }
    新建(): CSS页面规则_;

};

//@@{ CSS规则_:CSSRule }
接口 CSS规则_ {

    //@@{ css文本:cssText }
    css文本: 文字;

    //@@{ 父规则:parentRule, CSS规则_:CSSRule }
    只读 父规则: CSS规则_;

    //@@{ 父风格表:parentStyleSheet, CSS样式表_:CSSStyleSheet }
    只读 父风格表: CSS样式表_;

    //@@{ 类型:type }
    只读 类型: 数字;

    //@@{ __字符集_规则__:CHARSET_RULE }
    只读 __字符集_规则__: 数字;

    //@@{ __字体_多样_规则__:FONT_FACE_RULE }
    只读 __字体_多样_规则__: 数字;

    //@@{ __导入_规则__:IMPORT_RULE }
    只读 __导入_规则__ : 数字;

    //@@{ __关键帧_规则__:KEYFRAME_RULE }
    只读 __关键帧_规则__: 数字;

    //@@{ __关键帧组_规则__:KEYFRAMES_RULE }
    只读 __关键帧组_规则__: 数字;

    //@@{ __媒体_规则__:MEDIA_RULE }
    只读 __媒体_规则__: 数字;

    //@@{ __名称空间_规则__:NAMESPACE_RULE }
    只读 __名称空间_规则__: 数字;

    //@@{ __页面_规则__:PAGE_RULE }
    只读 __页面_规则__: 数字;

    //@@{ __样式_规则__:STYLE_RULE }
    只读 __样式_规则__: 数字;

    //@@{ __支持_规则__:SUPPORTS_RULE }
    只读 __支持_规则__: 数字;

    //@@{ __未知_规则__:UNKNOWN_RULE }
    只读 __未知_规则__: 数字;

    //@@{ __视窗_规则__:VIEWPORT_RULE }
    只读 __视窗_规则__: 数字;

}

声明 值量 CSS规则_: {

    //@@{ 原型:prototype, CSS规则_:CSSRule }
    原型: CSS规则_;

    //@@{ CSS规则_:CSSRule }
    新建(): CSS规则_;

    //@@{ __字符集_规则__:CHARSET_RULE }
    只读 __字符集_规则__: 数字;

    //@@{ __字体_多样_规则__:FONT_FACE_RULE }
    只读 __字体_多样_规则__: 数字;

    //@@{ __导入_规则__:IMPORT_RULE }
    只读 __导入_规则__: 数字;

    //@@{ __关键帧_规则__:KEYFRAME_RULE }
    只读 __关键帧_规则__: 数字;

    //@@{ __关键帧组_规则__:KEYFRAMES_RULE }
    只读 __关键帧组_规则__: 数字;

    //@@{ __媒体_规则__:MEDIA_RULE }
    只读 __媒体_规则__: 数字;

    //@@{ __名称空间_规则__:NAMESPACE_RULE }
    只读 __名称空间_规则__: 数字;

    //@@{ __页面_规则__:PAGE_RULE }
    只读 __页面_规则__: 数字; 

    //@@{ __样式_规则__:STYLE_RULE }
    只读 __样式_规则__: 数字;

    //@@{ __支持_规则__:SUPPORTS_RULE }
    只读 __支持_规则__: 数字;

    //@@{ __未知_规则__:UNKNOWN_RULE }
    只读 __未知_规则__: 数字;

    //@@{ __视窗_规则__:VIEWPORT_RULE }
    只读 __视窗_规则__: 数字;

};

//@@{ CSS规则列表_:CSSRuleList }
接口 CSS规则列表_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 项目:item, 索引:index, CSS规则_:CSSRule }
    项目(索引: 数字): CSS规则_;

    //@@{ 索引:index, CSS规则_:CSSRule }
    [索引: 数字]: CSS规则_;

}

声明 值量 CSS规则列表_: {

    //@@{ 原型:prototype, CSS规则列表_:CSSRuleList }
    原型: CSS规则列表_;

    //@@{ CSS规则列表_:CSSRuleList }
    新建(): CSS规则列表_;

};

//@@{ CSS样式声明_:CSSStyleDeclaration }
接口 CSS样式声明_ {

    //@@{ 对齐内容:alignContent }
    对齐内容: 文字 | 空值;

    //@@{ 对齐项目:alignItems }
    对齐项目: 文字 | 空值;

    //@@{ 对齐基线:alignmentBaseline }
    对齐基线: 文字 | 空值;

    //@@{ 对齐自身:alignSelf }
    对齐自身: 文字 | 空值;

    //@@{ 动画:animation }
    动画: 文字 | 空值;

    //@@{ 动画延迟:animationDelay }
    动画延迟: 文字 | 空值;

    //@@{ 动画方向:animationDirection }
    动画方向: 文字 | 空值;

    //@@{ 动画时间:animationDuration }
    动画时间: 文字 | 空值;

    //@@{ 动画填充模式:animationFillMode }
    动画填充模式: 文字 | 空值;

    //@@{ 动画迭代数量:animationIterationCount }
    动画迭代数量: 文字 | 空值;

    //@@{ 动画名称:animationName }
    动画名称: 文字 | 空值;

    //@@{ 动画播放状态:animationPlayState }
    动画播放状态: 文字 | 空值;

    //@@{ 动画计时函数:animationTimingFunction }
    动画计时函数: 文字 | 空值;

    //@@{ 背面可见性:backfaceVisibility }
    背面可见性: 文字 | 空值;

    //@@{ 背景:background }
    背景: 文字 | 空值;

    //@@{ 背景附件:backgroundAttachment }
    背景附件: 文字 | 空值;

    //@@{ 背景裁剪:backgroundClip }
    背景裁剪: 文字 | 空值;

    //@@{ 背景颜色:backgroundColor }
    背景颜色: 文字 | 空值;

    //@@{ 背景图像:backgroundImage }
    背景图像: 文字 | 空值;

    //@@{ 背景原点:backgroundOrigin }
    背景原点: 文字 | 空值;

    //@@{ 背景位置:backgroundPosition }
    背景位置: 文字 | 空值;

    //@@{ 背景位置X:backgroundPositionX }
    背景位置X: 文字 | 空值;

    //@@{ 背景位置Y:backgroundPositionY }
    背景位置Y: 文字 | 空值;

    //@@{ 背景重复:backgroundRepeat }
    背景重复: 文字 | 空值;

    //@@{ 背景大小:backgroundSize }
    背景大小: 文字 | 空值;

    //@@{ 基线转变:baselineShift }
    基线转变: 文字 | 空值;

    //@@{ 边框:border }
    边框: 文字 | 空值;

    //@@{ 边框底:borderBottom }
    边框底: 文字 | 空值;

    //@@{ 边框底颜色:borderBottomColor }
    边框底颜色: 文字 | 空值;

    //@@{ 边框底左半径:borderBottomLeftRadius }
    边框底左半径: 文字 | 空值;

    //@@{ 边框底右半径:borderBottomRightRadius }
    边框底右半径: 文字 | 空值;

    //@@{ 边框底样式:borderBottomStyle }
    边框底样式: 文字 | 空值;

    //@@{ 边框底宽度:borderBottomWidth }
    边框底宽度: 文字 | 空值;

    //@@{ 边框合并:borderCollapse }
    边框合并: 文字 | 空值;

    //@@{ 边框颜色:borderColor }
    边框颜色: 文字 | 空值;

    //@@{ 边框图像:borderImage }
    边框图像: 文字 | 空值;

    //@@{ 边框图像超出:borderImageOutset }
    边框图像超出: 文字 | 空值;

    //@@{ 边框图像重复:borderImageRepeat }
    边框图像重复: 文字 | 空值;

    //@@{ 边框图像内偏移:borderImageSlice }
    边框图像内偏移: 文字 | 空值;

    //@@{ 边框图像源:borderImageSource }
    边框图像源: 文字 | 空值;

    //@@{ 边框图像宽度:borderImageWidth }
    边框图像宽度: 文字 | 空值;

    //@@{ 边框左:borderLeft }
    边框左: 文字 | 空值;

    //@@{ 边框左颜色:borderLeftColor }
    边框左颜色: 文字 | 空值;

    //@@{ 边框左样式:borderLeftStyle }
    边框左样式: 文字 | 空值;

    //@@{ 边框左宽度:borderLeftWidth }
    边框左宽度: 文字 | 空值;

    //@@{ 边框半径:borderRadius }
    边框半径: 文字 | 空值;

    //@@{ 边框右:borderRight }
    边框右: 文字 | 空值;

    //@@{ 边框右颜色:borderRightColor }
    边框右颜色: 文字 | 空值;

    //@@{ 边框右样式:borderRightStyle }
    边框右样式: 文字 | 空值;

    //@@{ 边框右宽度:borderRightWidth }
    边框右宽度: 文字 | 空值;

    //@@{ 边框间距:borderSpacing }
    边框间距: 文字 | 空值;

    //@@{ 边框样式:borderStyle }
    边框样式: 文字 | 空值;

    //@@{ 边框顶:borderTop }
    边框顶: 文字 | 空值;

    //@@{ 边框顶颜色:borderTopColor }
    边框顶颜色: 文字 | 空值;

    //@@{ 边框顶左半径:borderTopLeftRadius }
    边框顶左半径: 文字 | 空值;

    //@@{ 边框顶右半径:borderTopRightRadius }
    边框顶右半径: 文字 | 空值;

    //@@{ 边框顶样式:borderTopStyle }
    边框顶样式: 文字 | 空值;

    //@@{ 边框顶宽度:borderTopWidth }
    边框顶宽度: 文字 | 空值;

    //@@{ 边框宽度:borderWidth }
    边框宽度: 文字 | 空值;

    //@@{ 底:bottom }
    底: 文字 | 空值;

    //@@{ 盒阴影:boxShadow }
    盒阴影: 文字 | 空值;

    //@@{ 盒大小:boxSizing }
    盒大小: 文字 | 空值;

    //@@{ 后中断:breakAfter }
    后中断: 文字 | 空值;

    //@@{ 前中断:breakBefore }
    前中断: 文字 | 空值;

    //@@{ 当前中断:breakInside }
    当前中断: 文字 | 空值;

    //@@{ 标题位置:captionSide }
    标题位置: 文字 | 空值;

    //@@{ 清除:clear }
    清除: 文字 | 空值;

    //@@{ 剪切:clip }
    剪切: 文字 | 空值;

    //@@{ 剪切路径:clipPath }
    剪切路径: 文字 | 空值;

    //@@{ 剪切规则:clipRule }
    剪切规则: 文字 | 空值;

    //@@{ 颜色:color }
    颜色: 文字 | 空值;

    //@@{ 颜色插值过滤器:colorInterpolationFilters }
    颜色插值过滤器: 文字 | 空值;

    //@@{ 列数:columnCount }
    列数: 任意;

    //@@{ 列填充:columnFill }
    列填充: 文字 | 空值;

    //@@{ 列的差距:columnGap }
    列的差距: 任意;

    //@@{ 列规则:columnRule }
    列规则: 文字 | 空值;

    //@@{ 列规则颜色:columnRuleColor }
    列规则颜色: 任意;

    //@@{ 列规则样式:columnRuleStyle }
    列规则样式: 文字 | 空值;

    //@@{ 列规则宽度:columnRuleWidth }
    列规则宽度: 任意;

    //@@{ 列:columns }
    列: 文字 | 空值;

    //@@{ 列跨度:columnSpan }
    列跨度: 文字 | 空值;

    //@@{ 列宽度:columnWidth }
    列宽度: 任意;

    //@@{ 内容:content }
    内容: 文字 | 空值;

    //@@{ 计数器增量:counterIncrement }
    计数器增量: 文字 | 空值;

    //@@{ 计数器重置:counterReset }
    计数器重置: 文字 | 空值;

    //@@{ css浮动:cssFloat }
    css浮动: 文字 | 空值;

    //@@{ css文本:cssText }
    css文本: 文字;

    //@@{ 光标:cursor }
    光标: 文字 | 空值;

    //@@{ 方向:direction }
    方向: 文字 | 空值;

    //@@{ 显示:display }
    显示: 文字 | 空值;

    //@@{ 主要基线:dominantBaseline }
    主要基线: 文字 | 空值;

    //@@{ 空单元格:emptyCells }
    空单元格: 文字 | 空值;

    //@@{ 启用背景:enableBackground }
    启用背景: 文字 | 空值;

    //@@{ 填充:fill }
    填充: 文字 | 空值;

    //@@{ 填充不透明度:fillOpacity }
    填充不透明度: 文字 | 空值;

    //@@{ 填充规则:fillRule }
    填充规则: 文字 | 空值;

    //@@{ 过滤器:filter }
    过滤器: 文字 | 空值;

    //@@{ 灵活布局:flex }
    灵活布局: 文字 | 空值;

    //@@{ 灵活布局基础:flexBasis }
    灵活布局基础: 文字 | 空值;

    //@@{ 灵活布局方向:flexDirection }
    灵活布局方向: 文字 | 空值;

    //@@{ 灵活布局流:flexFlow }
    灵活布局流: 文字 | 空值;

    //@@{ 灵活布局成长:flexGrow }
    灵活布局成长: 文字 | 空值;

    //@@{ 灵活布局缩小:flexShrink }
    灵活布局缩小: 文字 | 空值;

    //@@{ 灵活布局包装:flexWrap }
    灵活布局包装: 文字 | 空值;

    //@@{ 洪水颜色:floodColor }
    洪水颜色: 文字 | 空值;

    //@@{ 洪水不透明度:floodOpacity }
    洪水不透明度: 文字 | 空值;

    //@@{ 字体:font }
    字体: 文字 | 空值;

    //@@{ 字体家族:fontFamily }
    字体家族: 文字 | 空值;

    //@@{ 字体功能设置:fontFeatureSettings }
    字体功能设置: 文字 | 空值;

    //@@{ 字体大小:fontSize }
    字体大小: 文字 | 空值;

    //@@{ 字体大小调整:fontSizeAdjust }
    字体大小调整: 文字 | 空值;

    //@@{ 字体拉伸:fontStretch }
    字体拉伸: 文字 | 空值;

    //@@{ 字体样式:fontStyle }
    字体样式: 文字 | 空值;

    //@@{ 字体变体:fontVariant }
    字体变体: 文字 | 空值;

    //@@{ 字体粗细:fontWeight }
    字体粗细: 文字 | 空值;

    //@@{ 水平字形取向:glyphOrientationHorizontal }
    水平字形取向: 文字 | 空值;

    //@@{ 垂直字形方向:glyphOrientationVertical }
    垂直字形方向: 文字 | 空值;

    //@@{ 高度:height }
    高度: 文字 | 空值;

    //@@{ 输入法模式:imeMode }
    输入法模式: 文字 | 空值;

    //@@{ 拉伸对齐内容:justifyContent }
    拉伸对齐内容: 文字 | 空值;

    //@@{ 字距调整:kerning }
    字距调整: 文字 | 空值;

    //@@{ 布局网格:layoutGrid }
    布局网格: 文字 | 空值;

    //@@{ 布局网格字符:layoutGridChar }
    布局网格字符: 文字 | 空值;

    //@@{ 布局网格线:layoutGridLine }
    布局网格线: 文字 | 空值;

    //@@{ 布局网格模式:layoutGridMode }
    布局网格模式: 文字 | 空值;

    //@@{ 布局网格类型:layoutGridType }
    布局网格类型: 文字 | 空值;

    //@@{ 左:left }
    左: 文字 | 空值;

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 字符间距:letterSpacing }
    字符间距: 文字 | 空值;

    //@@{ 照明颜色:lightingColor }
    照明颜色: 文字 | 空值;

    //@@{ 换行符:lineBreak }
    换行符: 文字 | 空值;

    //@@{ 行高:lineHeight }
    行高: 文字 | 空值;

    //@@{ 列表样式:listStyle }
    列表样式: 文字 | 空值;

    //@@{ 列表样式图像:listStyleImage }
    列表样式图像: 文字 | 空值;

    //@@{ 列表样式位置:listStylePosition }
    列表样式位置: 文字 | 空值;

    //@@{ 列表样式类型:listStyleType }
    列表样式类型: 文字 | 空值;

    //@@{ 外边框:margin }
    外边框: 文字 | 空值;

    //@@{ 外边框底:marginBottom }
    外边框底: 文字 | 空值;

    //@@{ 外边框左:marginLeft }
    外边框左: 文字 | 空值;

    //@@{ 外边框右:marginRight }
    外边框右: 文字 | 空值;

    //@@{ 外边框顶:marginTop }
    外边框顶: 文字 | 空值;

    //@@{ 标记:marker }
    标记: 文字 | 空值;

    //@@{ 结束标记:markerEnd }
    结束标记: 文字 | 空值;

    //@@{ 中间标记:markerMid }
    中间标记: 文字 | 空值;

    //@@{ 开始标志:markerStart }
    开始标志: 文字 | 空值;

    //@@{ 遮罩:mask }
    遮罩: 文字 | 空值;

    //@@{ 最大高度:maxHeight }
    最大高度: 文字 | 空值;

    //@@{ 最大宽度:maxWidth }
    最大宽度: 文字 | 空值;

    //@@{ 最小高度:minHeight }
    最小高度: 文字 | 空值;

    //@@{ 最小宽度:minWidth }
    最小宽度: 文字 | 空值;

    //@@{ ms内容缩放链接:msContentZoomChaining }
    ms内容缩放链接: 文字 | 空值;

    //@@{ ms内容缩放:msContentZooming }
    ms内容缩放: 文字 | 空值;

    //@@{ ms内容缩放限制:msContentZoomLimit }
    ms内容缩放限制: 文字 | 空值;

    //@@{ ms内容缩放限制最大值:msContentZoomLimitMax }
    ms内容缩放限制最大值: 任意;

    //@@{ ms内容缩放限制最小值:msContentZoomLimitMin }
    ms内容缩放限制最小值: 任意;

    //@@{ ms内容缩放提前:msContentZoomSnap }
    ms内容缩放提前: 文字 | 空值;

    //@@{ ms内容缩放提前点:msContentZoomSnapPoints }
    ms内容缩放提前点: 文字 | 空值;

    //@@{ ms内容缩放提前类型:msContentZoomSnapType }
    ms内容缩放提前类型: 文字 | 空值;

    //@@{ ms流态:msFlowFrom }
    ms流态: 文字 | 空值;

    //@@{ ms流进入:msFlowInto }
    ms流进入: 文字 | 空值;

    //@@{ ms字体功能设置:msFontFeatureSettings }
    ms字体功能设置: 文字 | 空值;

    //@@{ ms网格列:msGridColumn }
    ms网格列: 任意;

    //@@{ ms网格列对齐:msGridColumnAlign }
    ms网格列对齐: 文字 | 空值;

    //@@{ ms网格列组:msGridColumns }
    ms网格列组: 文字 | 空值;

    //@@{ ms网格列跨度:msGridColumnSpan }
    ms网格列跨度: 任意;

    //@@{ ms网格行:msGridRow }
    ms网格行: 任意;

    //@@{ ms网格行对齐:msGridRowAlign }
    ms网格行对齐: 文字 | 空值;

    //@@{ ms网格行组:msGridRows }
    ms网格行组: 文字 | 空值;

    //@@{ ms网格行跨度:msGridRowSpan }
    ms网格行跨度: 任意;

    //@@{ ms高对比调整:msHighContrastAdjust }
    ms高对比调整: 文字 | 空值;

    //@@{ ms断字限制字符:msHyphenateLimitChars }
    ms断字限制字符: 文字 | 空值;

    //@@{ ms断字限制行:msHyphenateLimitLines }
    ms断字限制行: 任意;

    //@@{ ms断字限制区:msHyphenateLimitZone }
    ms断字限制区: 任意;

    //@@{ ms连字符:msHyphens }
    ms连字符: 文字 | 空值;

    //@@{ ms输入法对齐:msImeAlign }
    ms输入法对齐: 文字 | 空值; 

    //@@{ ms溢出样式:msOverflowStyle }
    ms溢出样式: 文字 | 空值;

    //@@{ ms滚轮链接:msScrollChaining }
    ms滚轮链接: 文字 | 空值;

    //@@{ ms滚轮限制:msScrollLimit }
    ms滚轮限制: 文字 | 空值;

    //@@{ ms滚轮限制X最大值:msScrollLimitXMax }
    ms滚轮限制X最大值: 任意;

    //@@{ ms滚轮限制X最小值:msScrollLimitXMin }
    ms滚轮限制X最小值: 任意;

    //@@{ ms滚轮限制Y最大值:msScrollLimitYMax }
    ms滚轮限制Y最大值: 任意;

    //@@{ ms滚轮限制Y最小值:msScrollLimitYMin }
    ms滚轮限制Y最小值: 任意;

    //@@{ ms滚轮导轨:msScrollRails }
    ms滚轮导轨: 文字 | 空值;

    //@@{ ms滚轮提前点X:msScrollSnapPointsX }
    ms滚轮提前点X: 文字 | 空值;

    //@@{ ms滚轮提前点Y:msScrollSnapPointsY }
    ms滚轮提前点Y: 文字 | 空值;

    //@@{ ms滚轮提前类型:msScrollSnapType }
    ms滚轮提前类型: 文字 | 空值;

    //@@{ ms滚轮提前X:msScrollSnapX }
    ms滚轮提前X: 文字 | 空值;

    //@@{ ms滚轮提前Y:msScrollSnapY }
    ms滚轮提前Y: 文字 | 空值;

    //@@{ ms滚轮翻转:msScrollTranslation }
    ms滚轮翻转: 文字 | 空值;

    //@@{ ms文本结合水平:msTextCombineHorizontal }
    ms文本结合水平: 文字 | 空值;

    //@@{ ms文本大小调整:msTextSizeAdjust }
    ms文本大小调整: 任意;

    //@@{ ms触摸动作:msTouchAction }
    ms触摸动作: 文字 | 空值;

    //@@{ ms触摸选择:msTouchSelect }
    ms触摸选择: 文字 | 空值;

    //@@{ ms用户选择:msUserSelect }
    ms用户选择: 文字 | 空值;

    //@@{ ms包装流:msWrapFlow }
    ms包装流: 文字;

    //@@{ ms包装边界:msWrapMargin }
    ms包装边界: 任意;

    //@@{ ms包装通过:msWrapThrough }
    ms包装通过: 文字;

    //@@{ 不透明度:opacity }
    不透明度: 文字 | 空值;

    //@@{ 顺序:order }
    顺序: 文字 | 空值;

    //@@{ 独立:orphans }
    独立: 文字 | 空值;

    //@@{ 轮廓:outline }
    轮廓: 文字 | 空值;

    //@@{ 轮廓颜色:outlineColor }
    轮廓颜色: 文字 | 空值; 

    //@@{ 轮廓偏移:outlineOffset }
    轮廓偏移: 文字 | 空值;

    //@@{ 轮廓样式:outlineStyle }
    轮廓样式: 文字 | 空值;

    //@@{ 轮廓宽度:outlineWidth }
    轮廓宽度: 文字 | 空值; 

    //@@{ 溢出:overflow }
    溢出: 文字 | 空值;

    //@@{ 溢出X:overflowX }
    溢出X: 文字 | 空值;

    //@@{ 溢出Y:overflowY }
    溢出Y: 文字 | 空值;

    //@@{ 内边距:padding }
    内边距: 文字 | 空值;

    //@@{ 内边距底:paddingBottom }
    内边距底: 文字 | 空值; 

    //@@{ 内边距左:paddingLeft }
    内边距左: 文字 | 空值;

    //@@{ 内边距右:paddingRight }
    内边距右: 文字 | 空值;

    //@@{ 内边距顶:paddingTop }
    内边距顶: 文字 | 空值; 

    //@@{ 分页符之后:pageBreakAfter }
    分页符之后: 文字 | 空值;

    //@@{ 分页符之前:pageBreakBefore }
    分页符之前: 文字 | 空值;

    //@@{ 分页符之中:pageBreakInside }
    分页符之中: 文字 | 空值;

    //@@{ 父规则:parentRule, CSS规则_:CSSRule }
    只读 父规则: CSS规则_;

    //@@{ 观察角度:perspective }
    观察角度: 文字 | 空值;

    //@@{ 观察角度起点:perspectiveOrigin }
    观察角度起点: 文字 | 空值;

    //@@{ 指针事件:pointerEvents }
    指针事件: 文字 | 空值;

    //@@{ 位置:position }
    位置: 文字 | 空值;

    //@@{ 嵌套引用:quotes }
    嵌套引用: 文字 | 空值;

    //@@{ 右:right }
    右: 文字 | 空值;

    //@@{ 旋转:rotate }
    旋转: 文字 | 空值;

    //@@{ 注音对齐:rubyAlign }
    注音对齐: 文字 | 空值;

    //@@{ 注音局部悬置:rubyOverhang }
    注音局部悬置: 文字 | 空值;

    //@@{ 注音位置:rubyPosition }
    注音位置: 文字 | 空值;

    //@@{ 缩放:scale }
    缩放: 文字 | 空值;

    //@@{ 停止颜色:stopColor }
    停止颜色: 文字 | 空值;

    //@@{ 停止不透明度:stopOpacity }
    停止不透明度: 文字 | 空值;

    //@@{ 描边:stroke }
    描边: 文字 | 空值;

    //@@{ 描边虚线数组:strokeDasharray }
    描边虚线数组: 文字 | 空值;

    //@@{ 描边虚线偏移:strokeDashoffset }
    描边虚线偏移: 文字 | 空值;

    //@@{ 描边线帽:strokeLinecap }
    描边线帽: 文字 | 空值;

    //@@{ 描边线连接:strokeLinejoin }
    描边线连接: 文字 | 空值;

    //@@{ 描边斜角限制:strokeMiterlimit }
    描边斜角限制: 文字 | 空值;

    //@@{ 描边不透明度:strokeOpacity }
    描边不透明度: 文字 | 空值;

    //@@{ 描边宽度:strokeWidth }
    描边宽度: 文字 | 空值;

    //@@{ 表布局:tableLayout }
    表布局: 文字 | 空值;

    //@@{ 文本对齐:textAlign }
    文本对齐: 文字 | 空值;

    //@@{ 最后文本对齐:textAlignLast }
    最后文本对齐: 文字 | 空值;

    //@@{ 文本锚:textAnchor }
    文本锚: 文字 | 空值;

    //@@{ 文本装饰:textDecoration }
    文本装饰: 文字 | 空值;

    //@@{ 文本缩进:textIndent }
    文本缩进: 文字 | 空值;

    //@@{ 文本拉伸对齐:textJustify }
    文本拉伸对齐: 文字 | 空值;

    //@@{ 文本膨胀:textKashida }
    文本膨胀: 文字 | 空值;

    //@@{ 文本膨胀范围:textKashidaSpace }
    文本膨胀范围: 文字 | 空值;

    //@@{ 文本溢出:textOverflow }
    文本溢出: 文字 | 空值;

    //@@{ 文本阴影:textShadow }
    文本阴影: 文字 | 空值;

    //@@{ 文本转换:textTransform }
    文本转换: 文字 | 空值;

    //@@{ 文本下划线位置:textUnderlinePosition }
    文本下划线位置: 文字 | 空值;

    //@@{ 顶:top }
    顶: 文字 | 空值;

    //@@{ 触摸动作:touchAction }
    触摸动作: 文字 | 空值;

    //@@{ 变换:transform }
    变换: 文字 | 空值;

    //@@{ 变换原点:transformOrigin }
    变换原点: 文字 | 空值;

    //@@{ 变换样式:transformStyle }
    变换样式: 文字 | 空值;

    //@@{ 过渡:transition }
    过渡: 文字 | 空值;

    //@@{ 转换延迟:transitionDelay }
    转换延迟: 文字 | 空值;

    //@@{ 过渡时间:transitionDuration }
    过渡时间: 文字 | 空值;

    //@@{ 过渡属性:transitionProperty }
    过渡属性: 文字 | 空值;

    //@@{ 过渡时间函数:transitionTimingFunction }
    过渡时间函数: 文字 | 空值;

    //@@{ 翻转:translate }
    翻转: 文字 | 空值;

    //@@{ 渲染方向:unicodeBidi }
    渲染方向: 文字 | 空值;

    //@@{ 垂直对齐:verticalAlign }
    垂直对齐: 文字 | 空值;

    //@@{ 可见性:visibility }
    可见性: 文字 | 空值;

    //@@{ webkit对齐内容:webkitAlignContent }
    webkit对齐内容: 文字 | 空值;

    //@@{ webkit对齐项目:webkitAlignItems }
    webkit对齐项目: 文字 | 空值;

    //@@{ webkit对齐自身:webkitAlignSelf }
    webkit对齐自身: 文字 | 空值;

    //@@{ webkit动画:webkitAnimation }
    webkit动画: 文字 | 空值;

    //@@{ webkit动画延迟:webkitAnimationDelay }
    webkit动画延迟: 文字 | 空值;

    //@@{ webkit动画方向:webkitAnimationDirection }
    webkit动画方向: 文字 | 空值;

    //@@{ webkit动画时间:webkitAnimationDuration }
    webkit动画时间: 文字 | 空值;

    //@@{ webkit动画填充模式:webkitAnimationFillMode }
    webkit动画填充模式: 文字 | 空值;

    //@@{ webkit动画迭代数:webkitAnimationIterationCount }
    webkit动画迭代数: 文字 | 空值;

    //@@{ webkit动画名称:webkitAnimationName }
    webkit动画名称: 文字 | 空值;

    //@@{ webkit动画播放状态:webkitAnimationPlayState }
    webkit动画播放状态: 文字 | 空值;

    //@@{ 分webkit动画计时函数:webkitAnimationTimingFunction }
    分webkit动画计时函数: 文字 | 空值;

    //@@{ webkit外观:webkitAppearance }
    webkit外观: 文字 | 空值;

    //@@{ webkit背面可见性:webkitBackfaceVisibility }
    webkit背面可见性: 文字 | 空值;

    //@@{ webkit背景裁剪:webkitBackgroundClip }
    webkit背景裁剪: 文字 | 空值;

    //@@{ webkit背景原点:webkitBackgroundOrigin }
    webkit背景原点: 文字 | 空值;

    //@@{ webkit背景大小:webkitBackgroundSize }
    webkit背景大小: 文字 | 空值;

    //@@{ webkit边框底左半径:webkitBorderBottomLeftRadius }
    webkit边框底左半径: 文字 | 空值;

    //@@{ webkit边框底右半径:webkitBorderBottomRightRadius }
    webkit边框底右半径: 文字 | 空值;   

    //@@{ webkit边框图像:webkitBorderImage }
    webkit边框图像: 文字 | 空值;

    //@@{ webkit边框半径:webkitBorderRadius }
    webkit边框半径: 文字 | 空值;

    //@@{ webkit边框顶左半径:webkitBorderTopLeftRadius }
    webkit边框顶左半径: 文字 | 空值;

    //@@{ webkit边框顶右半径:webkitBorderTopRightRadius }
    webkit边框顶右半径: 文字 | 空值;

    //@@{ webkit盒对齐:webkitBoxAlign }
    webkit盒对齐: 文字 | 空值;

    //@@{ webkit盒方向:webkitBoxDirection }
    webkit盒方向: 文字 | 空值;

    //@@{ webkit盒灵活:webkitBoxFlex }
    webkit盒灵活: 文字 | 空值;

    //@@{ webkit盒序数集团:webkitBoxOrdinalGroup }
    webkit盒序数集团: 文字 | 空值;

    //@@{ webkit盒子元素方向:webkitBoxOrient }
    webkit盒子元素方向: 文字 | 空值;

    //@@{ webkit盒封装:webkitBoxPack }
    webkit盒封装: 文字 | 空值;

    //@@{ webkit盒分级:webkitBoxSizing }
    webkit盒分级: 文字 | 空值;

    //@@{ webkit列换行之后:webkitColumnBreakAfter }
    webkit列换行之后: 文字 | 空值;

    //@@{ webkit列换行之前:webkitColumnBreakBefore }
    webkit列换行之前: 文字 | 空值;

    //@@{ webkit列换行之中:webkitColumnBreakInside }
    webkit列换行之中: 文字 | 空值;

    //@@{ webkit列数:webkitColumnCount }
    webkit列数: 任意;

    //@@{ webkit列差距:webkitColumnGap }
    webkit列差距: 任意;

    //@@{ webkit列规则:webkitColumnRule }
    webkit列规则: 文字 | 空值;

    //@@{ webkit列规则颜色:webkitColumnRuleColor }
    webkit列规则颜色: 任意;

    //@@{ webkit列规则样式:webkitColumnRuleStyle }
    webkit列规则样式: 文字 | 空值;

    //@@{ webkit列规则宽度:webkitColumnRuleWidth }
    webkit列规则宽度: 任意;

    //@@{ webkit列:webkitColumns }
    webkit列: 文字 | 空值;

    //@@{ webkit列跨度:webkitColumnSpan }
    webkit列跨度: 文字 | 空值;

    //@@{ webkit列宽度:webkitColumnWidth }
    webkit列宽度: 任意;

    //@@{ webkit过滤器:webkitFilter }
    webkit过滤器: 文字 | 空值;

    //@@{ webkit灵活:webkitFlex }
    webkit灵活: 文字 | 空值;

    //@@{ webkit灵活基础:webkitFlexBasis }
    webkit灵活基础: 文字 | 空值;

    //@@{ webkitFlex方向:webkitFlexDirection }
    webkitFlex方向: 文字 | 空值;

    //@@{ webkit灵活流:webkitFlexFlow }
    webkit灵活流: 文字 | 空值;

    //@@{ webkit灵活成长:webkitFlexGrow }
    webkit灵活成长: 文字 | 空值;

    //@@{ webkit灵活缩小:webkitFlexShrink }
    webkit灵活缩小: 文字 | 空值;

    //@@{ webkit灵活包装:webkitFlexWrap }
    webkit灵活包装: 文字 | 空值;

    //@@{ webkit拉伸对齐内容:webkitJustifyContent }
    webkit拉伸对齐内容: 文字 | 空值;

    //@@{ webkit顺序:webkitOrder }
    webkit顺序: 文字 | 空值;

    //@@{ webkit观察角度:webkitPerspective }
    webkit观察角度: 文字 | 空值;

    //@@{ webkit观察角度起点:webkitPerspectiveOrigin }
    webkit观察角度起点: 文字 | 空值;

    //@@{ webkit利用高亮颜色:webkitTapHighlightColor }
    webkit利用高亮颜色: 文字 | 空值;

    //@@{ webkit文本填充颜色:webkitTextFillColor }
    webkit文本填充颜色: 文字 | 空值;

    //@@{ webkit文本大小调整:webkitTextSizeAdjust }
    webkit文本大小调整: 任意;

    //@@{ webkit文本绘制:webkitTextStroke }
    webkit文本绘制: 文字 | 空值;

    //@@{ webkit文本绘制颜色:webkitTextStrokeColor }
    webkit文本绘制颜色: 文字 | 空值;

    //@@{ webkit文本绘制宽度:webkitTextStrokeWidth }
    webkit文本绘制宽度: 文字 | 空值;

    //@@{ webkit变换:webkitTransform }
    webkit变换: 文字 | 空值;

    //@@{ webkit变换原点:webkitTransformOrigin }
    webkit变换原点: 文字 | 空值;

    //@@{ webkit变换风格:webkitTransformStyle }
    webkit变换风格: 文字 | 空值;

    //@@{ webkit过渡:webkitTransition }
    webkit过渡: 文字 | 空值;

    //@@{ webkit过渡延迟:webkitTransitionDelay }
    webkit过渡延迟: 文字 | 空值;

    //@@{ webkit过渡时间:webkitTransitionDuration }
    webkit过渡时间: 文字 | 空值;

    //@@{ webkit过渡属性:webkitTransitionProperty }
    webkit过渡属性: 文字 | 空值;

    //@@{ webkit过度计时函数:webkitTransitionTimingFunction }
    webkit过度计时函数: 文字 | 空值;

    //@@{ webkit用户修改:webkitUserModify }
    webkit用户修改: 文字 | 空值;

    //@@{ webkit用户选择:webkitUserSelect }
    webkit用户选择: 文字 | 空值;

    //@@{ webkit写作模式:webkitWritingMode }
    webkit写作模式: 文字 | 空值;

    //@@{ 空白:whiteSpace }
    空白: 文字 | 空值;

    //@@{ 窗口:widows }
    窗口: 文字 | 空值;

    //@@{ 宽度:width }
    宽度: 文字 | 空值;

    //@@{ 单词分割:wordBreak }
    单词分割: 文字 | 空值;

    //@@{ 字间距:wordSpacing }
    字间距: 文字 | 空值;

    //@@{ 自动换行:wordWrap }
    自动换行: 文字 | 空值;

    //@@{ 写作模式:writingMode }
    写作模式: 文字 | 空值;

    //@@{ z序列:zIndex }
    z序列: 文字 | 空值;

    //@@{ 缩放比:zoom }
    缩放比: 文字 | 空值;

    //@@{ 调整:resize }
    调整: 文字 | 空值;

    //@@{ 用户选择:userSelect }
    用户选择: 文字 | 空值;

    //@@{ 取属性优先级:getPropertyPriority, 属性名字:propertyName }
    取属性优先级(属性名字: 文字): 文字;

    //@@{ 取属性值:getPropertyValue, 属性名字:propertyName }
    取属性值(属性名字: 文字): 文字;

    //@@{ 项目:item, 索引:index }
    项目(索引: 数字): 文字;

    //@@{ 删除属性:removeProperty, 属性名字:propertyName }
    删除属性(属性名字: 文字): 文字;

    //@@{ 置属性:setProperty, 属性名字:propertyName, 值:value, 优先级:priority }
    置属性(属性名字: 文字, 值: 文字 | 空值, 优先级?: 文字): 无值;

    //@@{ 索引:index }
    [索引: 数字]: 文字;

}

声明 值量 CSS样式声明_: {

    //@@{ 原型:prototype, CSS样式声明_:CSSStyleDeclaration }
    原型: CSS样式声明_;

    //@@{ CSS样式声明_:CSSStyleDeclaration }
    新建(): CSS样式声明_;

};

//@@{ CSS样式规则_:CSSStyleRule, CSS规则_:CSSRule }
接口 CSS样式规则_ 扩展 CSS规则_ {

    //@@{ 只读的:readOnly }
    只读 只读的: 真假;

    //@@{ 选择文本:selectorText }
    选择文本: 文字;

    //@@{ 样式:style, CSS样式声明_:CSSStyleDeclaration }
    只读 样式: CSS样式声明_;

}

声明 值量 CSS样式规则_: {

    //@@{ 原型:prototype, CSS样式规则_:CSSStyleRule }
    原型: CSS样式规则_;

    //@@{ CSS样式规则_:CSSStyleRule }
    新建(): CSS样式规则_;

};

//@@{ CSS样式表_:CSSStyleSheet, 样式表_:StyleSheet }
接口 CSS样式表_ 扩展 样式表_ {

    //@@{ css规则:cssRules, CSS规则列表_:CSSRuleList }
    只读 css规则: CSS规则列表_;

    //@@{ css文本:cssText }
    css文本: 文字;

    只读 id: 文字;

    //@@{ 导入组:imports, 样式表列表_:StyleSheetList }
    只读 导入组: 样式表列表_;

    //@@{ 是备用:isAlternate }
    只读 是备用: 真假;

    //@@{ 是参照备用:isPrefAlternate }
    只读 是参照备用: 真假;

    //@@{ 本身规则:ownerRule, CSS规则_:CSSRule }
    只读 本身规则: CSS规则_;

    //@@{ 拥有元素:owningElement, 元素_:Element }
    只读 拥有元素: 元素_;

    //@@{ 页面:pages, 样式表页面列表_:StyleSheetPageList }
    只读 页面: 样式表页面列表_;

    //@@{ 只读的:readOnly }
    只读 只读的: 真假;

    //@@{ 规则组:rules, CSS规则列表_:CSSRuleList }
    只读 规则组: CSS规则列表_;

    //@@{ 添加导入:addImport, b文本URL:bstrURL, l索引:lIndex }
    添加导入(b文本URL: 文字, l索引?: 数字): 数字;

    //@@{ 添加页面规则:addPageRule, b文本选择器:bstrSelector, b文本样式:bstrStyle, l索引:lIndex }
    添加页面规则(b文本选择器: 文字, b文本样式: 文字, l索引?: 数字): 数字;

    //@@{ 添加规则:addRule, b文本选择器:bstrSelector, b文本样式:bstrStyle, l索引:lIndex }
    添加规则(b文本选择器: 文字, b文本样式?: 文字, l索引?: 数字): 数字;

    //@@{ 删除规则:deleteRule, 索引:index }
    删除规则(索引?: 数字): 无值;

    //@@{ 插入规则:insertRule, 规则:rule, 索引:index }
    插入规则(规则: 文字, 索引?: 数字): 数字;

    //@@{ 删除导入:removeImport, l索引:lIndex }
    删除导入(l索引: 数字): 无值;

    //@@{ l索引:lIndex }
    删除规则(l索引: 数字): 无值;

}

声明 值量 CSS样式表_: {

    //@@{ 原型:prototype, CSS样式表_:CSSStyleSheet }
    原型: CSS样式表_;

    //@@{ CSS样式表_:CSSStyleSheet }
    新建(): CSS样式表_;

};

//@@{ CSS支持规则_:CSSSupportsRule, CSS规则条件_:CSSConditionRule }
接口 CSS支持规则_ 扩展 CSS规则条件_ {

}

声明 值量 CSS支持规则_: {

    //@@{ 原型:prototype, CSS支持规则_:CSSSupportsRule }
    原型: CSS支持规则_;

    //@@{ CSS支持规则_:CSSSupportsRule }
    新建(): CSS支持规则_;

};

//@@{ 自定义事件_:CustomEvent, 事件_:Event }
接口 自定义事件_ 扩展 事件_ {

    //@@{ 细节:detail }
    只读 细节: 任意;

    //@@{ 初始化自定义事件:initCustomEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 细节参数:detailArg }
    初始化自定义事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 细节参数: 任意): 无值;

}

声明 值量 自定义事件_: {

    //@@{ 原型:prototype, 自定义事件_:CustomEvent }
    原型: 自定义事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 自定义事件初始化_:CustomEventInit, 自定义事件_:CustomEvent }
    新建(类型参数: 文字, 事件初始化词典?: 自定义事件初始化_): 自定义事件_;

};

//@@{ 数据提示_:DataCue, 文本轨道提示_:TextTrackCue }
接口 数据提示_ 扩展 文本轨道提示_ {

    //@@{ 数据:data, 数组缓冲区_:ArrayBuffer }
    数据: 数组缓冲区_;

    //@@{ 添加事件监听器:addEventListener, 文本轨道提示事件映射_:TextTrackCueEventMap, 类型:type, 侦听器:listener, 数据提示_:DataCue, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 文本轨道提示事件映射_>(类型: K, 侦听器: (本体: 数据提示_, 侦听器: 文本轨道提示事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 数据提示_: {

    //@@{ 原型:prototype, 数据提示_:DataCue }
    原型: 数据提示_;

    //@@{ 数据提示_:DataCue }
    新建(): 数据提示_;

};

//@@{ 数据传输_:DataTransfer }
接口 数据传输_ {

    //@@{ 下降效果:dropEffect }
    下降效果: 文字;

    //@@{ 效果允许:effectAllowed }
    效果允许: 文字;

    //@@{ 文件组:files, 文件列表_:FileList }
    只读 文件组: 文件列表_;

    //@@{ 项目组:items, 数据传输项目列表_:DataTransferItemList }
    只读 项目组: 数据传输项目列表_;

    //@@{ 类型组:types }
    只读 类型组: 文字[];

    //@@{ 清除数据:clearData, 格式:format }
    清除数据(格式?: 文字): 真假;

    //@@{ 取数据:getData, 格式:format }
    取数据(格式: 文字): 文字;

    //@@{ 置数据:setData, 格式:format, 数据:data }
    置数据(格式: 文字, 数据: 文字): 真假;

    //@@{ 置拖拽图像:setDragImage, 图像:image, 元素_:Element }
    置拖拽图像(图像: 元素_, x: 数字, y: 数字): 无值;

}

声明 值量 数据传输_: {

    //@@{ 原型:prototype, 数据传输_:DataTransfer }
    原型: 数据传输_;

    //@@{ 数据传输_:DataTransfer }
    新建(): 数据传输_;

};

//@@{ 数据传输项目_:DataTransferItem }
接口 数据传输项目_ {

    //@@{ 种类:kind }
    只读 种类: 文字;

    //@@{ 类型:type }
    只读 类型: 文字;

    //@@{ 取转为文件:getAsFile, 文件_:File }
    取转为文件(): 文件_ | 空值;

    //@@{ 取转为文字:getAsString, _回调:_callback, 函数字符串回调_:FunctionStringCallback }
    取转为文字(_回调: 函数字符串回调_ | 空值): 无值;

    //@@{ webkit取转为条目:webkitGetAsEntry }
    webkit取转为条目(): 任意;

}

声明 值量 数据传输项目_: {

    //@@{ 原型:prototype, 数据传输项目_:DataTransferItem }
    原型: 数据传输项目_;

    //@@{ 数据传输项目_:DataTransferItem }
    新建(): 数据传输项目_;

};

//@@{ 数据传输项目列表_:DataTransferItemList }
接口 数据传输项目列表_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 添加:add, 数据:data, 文件_:File, 数据传输项目_:DataTransferItem }
    添加(数据: 文件_): 数据传输项目_ | 空值;

    //@@{ 清除:clear }
    清除(): 无值;

    //@@{ 项目:item, 索引:index, 数据传输项目_:DataTransferItem }
    项目(索引: 数字): 数据传输项目_;

    //@@{ 删除:remove, 索引:index }
    删除(索引: 数字): 无值;

    //@@{ 索引:index, 数据传输项目_:DataTransferItem }
    [索引: 数字]: 数据传输项目_;

}

声明 值量 数据传输项目列表_: {

    //@@{ 原型:prototype, 数据传输项目列表_:DataTransferItemList }
    原型: 数据传输项目列表_;

    //@@{ 数据传输项目列表_:DataTransferItemList }
    新建(): 数据传输项目列表_;

};

//@@{ 延期许可请求_:DeferredPermissionRequest }
接口 延期许可请求_ {

    只读 id: 数字;

    //@@{ 类型:type, 网络视图许可类型_:MSWebViewPermissionType }
    只读 类型: 网络视图许可类型_;

    只读 uri: 文字;

    //@@{ 允许:allow }
    允许(): 无值;

    //@@{ 否认:deny }
    否认(): 无值;

}

声明 值量 延期许可请求_: {

    //@@{ 原型:prototype, 延期许可请求_:DeferredPermissionRequest }
    原型: 延期许可请求_;

    //@@{ 延期许可请求_:DeferredPermissionRequest }
    新建(): 延期许可请求_;

};

//@@{ 延迟节点_:DelayNode, 音频节点_:AudioNode }
接口 延迟节点_ 扩展 音频节点_ {

    //@@{ 延迟时间:delayTime, 音频参数_:AudioParam }
    只读 延迟时间: 音频参数_;

}

声明 值量 延迟节点_: {

    //@@{ 原型:prototype, 延迟节点_:DelayNode }
    原型: 延迟节点_;

    //@@{ 延迟节点_:DelayNode }
    新建(): 延迟节点_;

};

//@@{ 设备加速度_:DeviceAcceleration }
接口 设备加速度_ {

    只读 x: 数字 | 空值;

    只读 y: 数字 | 空值;

    只读 z: 数字 | 空值;

}

声明 值量 设备加速度_: {

    //@@{ 原型:prototype, 设备加速度_:DeviceAcceleration }
    原型: 设备加速度_;

    //@@{ 设备加速度_:DeviceAcceleration }
    新建(): 设备加速度_;

};

//@@{ 设备环境光事件_:DeviceLightEvent, 事件_:Event }
接口 设备环境光事件_ 扩展 事件_ {

    //@@{ 值:value }
    只读 值: 数字;

}

声明 值量 设备环境光事件_: {

    //@@{ 原型:prototype, 设备环境光事件_:DeviceLightEvent }
    原型: 设备环境光事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 设备环境光事件初始化_:DeviceLightEventInit, 设备环境光事件_:DeviceLightEvent }
    新建(类型参数: 文字, 事件初始化词典?: 设备环境光事件初始化_): 设备环境光事件_;

};

//@@{ 设备运动事件_:DeviceMotionEvent, 事件_:Event }
接口 设备运动事件_ 扩展 事件_ {

    //@@{ 加速度:acceleration, 设备加速度_:DeviceAcceleration }
    只读 加速度: 设备加速度_ | 空值;

    //@@{ 包括重力加速度:accelerationIncludingGravity, 设备加速度_:DeviceAcceleration }
    只读 包括重力加速度: 设备加速度_ | 空值;

    //@@{ 时间间隔:interval }
    只读 时间间隔: 数字 | 空值;

    //@@{ 旋转速度:rotationRate, 设备旋转速度_:DeviceRotationRate }
    只读 旋转速度: 设备旋转速度_ | 空值;

    //@@{ 初始化设备运动事件:initDeviceMotionEvent, 类型:type, 冒泡:bubbles, 可取消的:cancelable, 加速度:acceleration, 设备加速度词典_:DeviceAccelerationDict, 包括重力加速度:accelerationIncludingGravity, 旋转速度:rotationRate, 设备旋转速度词典_:DeviceRotationRateDict, 时间间隔:interval }
    初始化设备运动事件(类型: 文字, 冒泡: 真假, 可取消的: 真假, 加速度: 设备加速度词典_ | 空值, 包括重力加速度: 设备加速度词典_ | 空值, 旋转速度: 设备旋转速度词典_ | 空值, 时间间隔: 数字 | 空值): 无值;

}

声明 值量 设备运动事件_: {

    //@@{ 原型:prototype, 设备运动事件_:DeviceMotionEvent }
    原型: 设备运动事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 设备运动事件初始化_:DeviceMotionEventInit, 设备运动事件_:DeviceMotionEvent }
    新建(类型参数: 文字, 事件初始化词典?: 设备运动事件初始化_): 设备运动事件_;

};

//@@{ 设备定位事件_:DeviceOrientationEvent, 事件_:Event }
接口 设备定位事件_ 扩展 事件_ {

    //@@{ 绝对:absolute }
    只读 绝对: 真假;

    //@@{ 指示方向:alpha }
    只读 指示方向: 数字 | 空值;

    //@@{ 绕x轴方向:beta }
    只读 绕x轴方向: 数字 | 空值;

    //@@{ 绕y轴方向:gamma }
    只读 绕y轴方向: 数字 | 空值;

    //@@{ 初始化设备朝向事件:initDeviceOrientationEvent, 类型:type, 冒泡:bubbles, 可取消的:cancelable, 指示方向:alpha, 绕x轴方向:beta, 绕y轴方向:gamma, 绝对:absolute }
    初始化设备朝向事件(类型: 文字, 冒泡: 真假, 可取消的: 真假, 指示方向: 数字 | 空值, 绕x轴方向: 数字 | 空值, 绕y轴方向: 数字 | 空值, 绝对: 真假): 无值;

}

声明 值量 设备定位事件_: {

    //@@{ 原型:prototype, 设备定位事件_:DeviceOrientationEvent }
    原型: 设备定位事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 设备朝向事件初始化_:DeviceOrientationEventInit, 设备定位事件_:DeviceOrientationEvent }
    新建(类型参数: 文字, 事件初始化词典?: 设备朝向事件初始化_): 设备定位事件_;

};

//@@{ 设备旋转速度_:DeviceRotationRate }
接口 设备旋转速度_ {

    //@@{ 指示方向:alpha }
    只读 指示方向: 数字 | 空值;

    //@@{ 绕x轴方向:beta }
    只读 绕x轴方向: 数字 | 空值;

    //@@{ 绕y轴方向:gamma }
    只读 绕y轴方向: 数字 | 空值;

}

声明 值量 设备旋转速度_: {

    //@@{ 原型:prototype, 设备旋转速度_:DeviceRotationRate }
    原型: 设备旋转速度_;

    //@@{ 设备旋转速度_:DeviceRotationRate }
    新建(): 设备旋转速度_;

};

//@@{ 文档事件映射_:DocumentEventMap, 全局事件处理程序事件映射_:GlobalEventHandlersEventMap }
接口 文档事件映射_ 扩展 全局事件处理程序事件映射_ {

    //@@{ "终止":"abort", UI事件_:UIEvent }
    "终止": UI事件_;

    //@@{ "激活":"activate", UI事件_:UIEvent }
    "激活": UI事件_;

    //@@{ "将激活":"beforeactivate", UI事件_:UIEvent }
    "将激活": UI事件_;

    //@@{ "失去激活":"beforedeactivate", UI事件_:UIEvent }
    "失去激活": UI事件_;

    //@@{ "失去焦点":"blur", 焦点事件_:FocusEvent }
    "失去焦点": 焦点事件_;

    //@@{ "准备播放":"canplay", 事件_:Event }
    "准备播放": 事件_;

    //@@{ "正常播放":"canplaythrough", 事件_:Event }
    "正常播放": 事件_;

    //@@{ "改变":"change", 事件_:Event }
    "改变": 事件_;

    //@@{ "单击":"click", 鼠标事件_:MouseEvent }
    "单击": 鼠标事件_;

    //@@{ "快捷菜单":"contextmenu", 指针事件_:PointerEvent }
    "快捷菜单": 指针事件_;

    //@@{ "双击":"dblclick", 鼠标事件_:MouseEvent }
    "双击": 鼠标事件_;

    //@@{ "同程序失去激活":"deactivate", UI事件_:UIEvent }
    "同程序失去激活": UI事件_;

    //@@{ "拖拽":"drag", 拖拽事件_:DragEvent }
    "拖拽": 拖拽事件_;

    //@@{ "拖拽结束":"dragend", 拖拽事件_:DragEvent }
    "拖拽结束": 拖拽事件_;

    //@@{ "拖拽进入":"dragenter", 拖拽事件_:DragEvent }
    "拖拽进入": 拖拽事件_;

    //@@{ "拖拽离开":"dragleave", 拖拽事件_:DragEvent }
    "拖拽离开": 拖拽事件_;

    //@@{ "拖拽悬停":"dragover", 拖拽事件_:DragEvent }
    "拖拽悬停": 拖拽事件_;

    //@@{ "拖拽开始":"dragstart", 拖拽事件_:DragEvent }
    "拖拽开始": 拖拽事件_;

    //@@{ "拖放":"drop", 拖拽事件_:DragEvent }
    "拖放": 拖拽事件_;

    //@@{ "时长改变":"durationchange", 事件_:Event }
    "时长改变": 事件_;

    //@@{ "清空":"emptied", 事件_:Event }
    "清空": 事件_;

    //@@{ "结束后":"ended", 媒体流错误事件_:MediaStreamErrorEvent }
    "结束后": 媒体流错误事件_;

    //@@{ "错误":"error", 错误事件_:ErrorEvent }
    "错误": 错误事件_;

    //@@{ "焦点":"focus", 焦点事件_:FocusEvent }
    "焦点": 焦点事件_;

    //@@{ "全屏模式":"fullscreenchange", 事件_:Event }
    "全屏模式": 事件_;

    //@@{ "全屏错误":"fullscreenerror", 事件_:Event }
    "全屏错误": 事件_;

    //@@{ "输入":"input", 事件_:Event }
    "输入": 事件_;

    //@@{ "无效":"invalid", 事件_:Event }
    "无效": 事件_;

    //@@{ "键按下":"keydown", 键盘事件_:KeyboardEvent }
    "键按下": 键盘事件_;

    //@@{ "键入":"keypress", 键盘事件_:KeyboardEvent }
    "键入": 键盘事件_;

    //@@{ "键松开":"keyup", 键盘事件_:KeyboardEvent }
    "键松开": 键盘事件_;

    //@@{ "加载":"load", 事件_:Event }
    "加载": 事件_;

    //@@{ "加载数据":"loadeddata", 事件_:Event }
    "加载数据": 事件_;

    //@@{ "加载元数据":"loadedmetadata", 事件_:Event }
    "加载元数据": 事件_;

    //@@{ "加载开始":"loadstart", 事件_:Event }
    "加载开始": 事件_;

    //@@{ "鼠标按下":"mousedown", 鼠标事件_:MouseEvent }
    "鼠标按下": 鼠标事件_;

    //@@{ "鼠标移动":"mousemove", 鼠标事件_:MouseEvent }
    "鼠标移动": 鼠标事件_;

    //@@{ "鼠标移开":"mouseout", 鼠标事件_:MouseEvent }
    "鼠标移开": 鼠标事件_;

    //@@{ "鼠标悬停":"mouseover", 鼠标事件_:MouseEvent }
    "鼠标悬停": 鼠标事件_;

    //@@{ "鼠标松开":"mouseup", 鼠标事件_:MouseEvent }
    "鼠标松开": 鼠标事件_;

    //@@{ "鼠标滚轮":"mousewheel", 轮事件_:WheelEvent }
    "鼠标滚轮": 轮事件_;

    //@@{ "MS内容缩放":"MSContentZoom", UI事件_:UIEvent }
    "MS内容缩放": UI事件_;

    //@@{ "MS手势改变":"MSGestureChange", MS手势事件_:MSGestureEvent }
    "MS手势改变": MS手势事件_;

    //@@{ "MS手势双击":"MSGestureDoubleTap", MS手势事件_:MSGestureEvent }
    "MS手势双击": MS手势事件_;

    //@@{ "MS手势结束":"MSGestureEnd", MS手势事件_:MSGestureEvent }
    "MS手势结束": MS手势事件_;

    //@@{ "MS手势保持":"MSGestureHold", MS手势事件_:MSGestureEvent }
    "MS手势保持": MS手势事件_;

    //@@{ "MS手势开始":"MSGestureStart", MS手势事件_:MSGestureEvent }
    "MS手势开始": MS手势事件_;

    //@@{ "MS手势点击":"MSGestureTap", MS手势事件_:MSGestureEvent }
    "MS手势点击": MS手势事件_;

    //@@{ "MS惯性启动":"MSInertiaStart", MS手势事件_:MSGestureEvent }
    "MS惯性启动": MS手势事件_;

    //@@{ "MS操作状态改变":"MSManipulationStateChanged", MS操纵杆事件_:MSManipulationEvent }
    "MS操作状态改变": MS操纵杆事件_;

    //@@{ "MS指针取消":"MSPointerCancel", MS指针事件_:MSPointerEvent }
    "MS指针取消": MS指针事件_;

    //@@{ "MS指针按下":"MSPointerDown", MS指针事件_:MSPointerEvent }
    "MS指针按下": MS指针事件_;

    //@@{ "MS指针进入":"MSPointerEnter", MS指针事件_:MSPointerEvent }
    "MS指针进入": MS指针事件_;

    //@@{ "MS指针离开":"MSPointerLeave", MS指针事件_:MSPointerEvent }
    "MS指针离开": MS指针事件_;

    //@@{ "MS指针移动":"MSPointerMove", MS指针事件_:MSPointerEvent }
    "MS指针移动": MS指针事件_;

    //@@{ "MS指针移出":"MSPointerOut", MS指针事件_:MSPointerEvent }
    "MS指针移出": MS指针事件_;

    //@@{ "MS指针悬停":"MSPointerOver", MS指针事件_:MSPointerEvent }
    "MS指针悬停": MS指针事件_;

    //@@{ "MS指针松开":"MSPointerUp", MS指针事件_:MSPointerEvent }
    "MS指针松开": MS指针事件_;

    //@@{ "ms网站跳转列表项删除":"mssitemodejumplistitemremoved", MS网站模式事件_:MSSiteModeEvent }
    "ms网站跳转列表项删除": MS网站模式事件_;

    //@@{ "ms缩略图单击":"msthumbnailclick", MS网站模式事件_:MSSiteModeEvent }
    "ms缩略图单击": MS网站模式事件_;

    //@@{ "暂停":"pause", 事件_:Event }
    "暂停": 事件_;

    //@@{ "播放":"play", 事件_:Event }
    "播放": 事件_;

    //@@{ "播放中":"playing", 事件_:Event }
    "播放中": 事件_;

    //@@{ "指针锁改变":"pointerlockchange", 事件_:Event }
    "指针锁改变": 事件_;

    //@@{ "指针锁错误":"pointerlockerror", 事件_:Event }
    "指针锁错误": 事件_;

    //@@{ "进度":"progress", 进度事件_:ProgressEvent }
    "进度": 进度事件_;

    //@@{ "播放速度改变":"ratechange", 事件_:Event }
    "播放速度改变": 事件_;

    //@@{ "就绪状态改变":"readystatechange", 事件_:Event }
    "就绪状态改变": 事件_;

    //@@{ "重置":"reset", 事件_:Event }
    "重置": 事件_;

    //@@{ "滚动":"scroll", UI事件_:UIEvent }
    "滚动": UI事件_;

    //@@{ "提示":"seeked", 事件_:Event }
    "提示": 事件_;

    //@@{ "重新定位":"seeking", 事件_:Event }
    "重新定位": 事件_;

    //@@{ "选择":"select", UI事件_:UIEvent }
    "选择": UI事件_;

    //@@{ "选择改变":"selectionchange", 事件_:Event }
    "选择改变": 事件_;

    //@@{ "选择开始":"selectstart", 事件_:Event }
    "选择开始": 事件_;

    //@@{ "停滞":"stalled", 事件_:Event }
    "停滞": 事件_;

    //@@{ "停止":"stop", 事件_:Event }
    "停止": 事件_;

    //@@{ "提交":"submit", 事件_:Event }
    "提交": 事件_;

    //@@{ "阻止":"suspend", 事件_:Event }
    "阻止": 事件_;

    //@@{ "更新时间":"timeupdate", 事件_:Event }
    "更新时间": 事件_;

    //@@{ "触摸取消":"touchcancel", 触摸事件_:TouchEvent }
    "触摸取消": 触摸事件_;

    //@@{ "触摸结束":"touchend", 触摸事件_:TouchEvent }
    "触摸结束": 触摸事件_;

    //@@{ "触摸移动":"touchmove", 触摸事件_:TouchEvent }
    "触摸移动": 触摸事件_;

    //@@{ "触摸开始":"touchstart", 触摸事件_:TouchEvent }
    "触摸开始": 触摸事件_;

    //@@{ "音量改变":"volumechange", 事件_:Event }
    "音量改变": 事件_;

    //@@{ "等待":"waiting", 事件_:Event }
    "等待": 事件_;

    //@@{ "webkit全屏改变":"webkitfullscreenchange", 事件_:Event }
    "webkit全屏改变": 事件_;

    //@@{ "webkit全屏错误":"webkit全屏错误", 事件_:Event }
    "webkit全屏错误": 事件_;

}

//@@{ 文档_:Document, 节点_:Node, 全局事件处理程序_:GlobalEventHandlers, 节点选择器_:NodeSelector, 文档事件_:DocumentEvent, 父节点_:ParentNode, 文档或影子根_:DocumentOrShadowRoot }
接口 文档_ 扩展 节点_, 全局事件处理程序_, 节点选择器_, 文档事件_, 父节点_, 文档或影子根_ {

    /**
     * Gets the object that has the focus when the parent document has focus.
     */

    //@@{ 活动元素:activeElement, 元素_:Element }
    只读 活动元素: 元素_;

    /**
     * Sets or gets the color of all active links in the document.
     */

    //@@{ 活动链接的颜色:alinkColor }
    活动链接的颜色: 文字;

    /**
     * Returns a reference to the collection of elements contained by the object.
     */

    //@@{ 所有:all, HTML所有集合_:HTMLAllCollection }
    只读 所有: HTML所有集合_;

    /**
     * Retrieves a collection of all a objects that have a name and/or id property. Objects in this collection are in HTML source order.
     */

    //@@{ 超链接组:anchors, HTML集合的_:HTMLCollectionOf, HTML超链接元素_:HTMLAnchorElement }
    超链接组: HTML集合的_<HTML超链接元素_>;

    /**
     * Retrieves a collection of all applet objects in the document.
     */

    //@@{ 应用程序组:applets, HTML集合的_:HTMLCollectionOf, HTML应用程序元素_:HTMLAppletElement }
    应用程序组: HTML集合的_<HTML应用程序元素_>;

    /**
     * ~~Deprecated. Sets or retrieves a value that indicates the background color behind the object.~~
     */

    //@@{ 背景颜色:bgColor }
    背景颜色: 文字;

    /**
     * Specifies the beginning and end of the document body.
     */

    //@@{ 体:body, HTML元素_:HTMLElement }
    体: HTML元素_;

    //@@{ 字符集:characterSet }
    只读 字符集: 文字;

    /**
     * Gets or sets the character set used to encode the object.
     */

    //@@{ 字符编码:charset }
    字符编码: 文字;

    /**
     * Gets a value that indicates whether standards-compliant mode is switched on for the object.
     */

    //@@{ 兼容模式:compatMode }
    只读 兼容模式: 文字;

    //@@{ 浏览器缓存:cookie }
    浏览器缓存: 文字;

    //@@{ 当前脚本:currentScript, HTML脚本元素_:HTMLScriptElement, SVG脚本元素_:SVGScriptElement }
    只读 当前脚本: HTML脚本元素_ | SVG脚本元素_ | 空值;

    //@@{ 默认视图:defaultView, 窗口_:Window }
    只读 默认视图: 窗口_;

    /**
     * Sets or gets a value that indicates whether the document can be edited.
     */

    //@@{ 设计模式:designMode }
    设计模式: 文字;

    /**
     * Sets or retrieves a value that indicates the reading order of the object.
     */

    //@@{ 文本方向:dir }
    文本方向: 文字;

    /**
     * Gets an object representing the document type declaration associated with the current document.
     */

    //@@{ 文档类型:doctype, 文档类型_:DocumentType }
    只读 文档类型: 文档类型_;

    /**
     * Gets a reference to the root node of the document.
     */

    //@@{ 文档元素:documentElement, HTML元素_:HTMLElement }
    文档元素: HTML元素_;

    /**
     * Sets or gets the security domain of the document.
     */

    //@@{ 作用域:domain }
    作用域: 文字;

    /**
     * Retrieves a collection of all embed objects in the document.
     */

    //@@{ 嵌入组:embeds, HTML集合的_:HTMLCollectionOf, HTML嵌入元素_:HTMLEmbedElement }
    嵌入组: HTML集合的_<HTML嵌入元素_>;

    /**
     * Sets or gets the foreground (text) color of the document.
     */

    //@@{ 前景颜色:fgColor }
    前景颜色: 文字;

    /**
     * Retrieves a collection, in source order, of all form objects in the document.
     */

    //@@{ 表单对象:forms, HTML集合的_:HTMLCollectionOf, HTML表单元素_:HTMLFormElement }
    表单对象: HTML集合的_<HTML表单元素_>;

    //@@{ 全屏元素:fullscreenElement, 元素_:Element }
    只读 全屏元素: 元素_ | 空值;

    //@@{ 全屏启用:fullscreenEnabled }
    只读 全屏启用: 真假;

    //@@{ 头部:head, HTML头部元素_:HTMLHeadElement }
    只读 头部: HTML头部元素_;

    //@@{ 隐藏:hidden }
    只读 隐藏: 真假;

    /**
     * Retrieves a collection, in source order, of img objects in the document.
     */

    //@@{ 图像组:images, HTML集合的_:HTMLCollectionOf, HTML图像元素_:HTMLImageElement }
    图像组: HTML集合的_<HTML图像元素_>;

    /**
     * Gets the implementation object of the current document.
     */

    //@@{ 实现:implementation, 文档实现_:DOMImplementation }
    只读 实现: 文档实现_;

    /**
     * Returns the character encoding used to create the webpage that is loaded into the document object.
     */

    //@@{ 输入的字符编码:inputEncoding }
    只读 输入的字符编码: 文字 | 空值;

    /**
     * Gets the date that the page was last modified, if the page supplies one.
     */

    //@@{ 最后修改:lastModified }
    只读 最后修改: 文字;

    /**
     * Sets or gets the color of the document links.
     */

    //@@{ 链接颜色:linkColor }
    链接颜色: 文字;

    /**
     * Retrieves a collection of all a objects that specify the href property and all area objects in the document.
     */

    //@@{ 链接组:links, HTML集合的_:HTMLCollectionOf, HTML超链接元素_:HTMLAnchorElement, HTML区域元素_:HTMLAreaElement }
    链接组: HTML集合的_<HTML超链接元素_ | HTML区域元素_>;

    /**
     * Contains information about the current URL.
     */

    //@@{ 位置:location, 位置_:Location }
    只读 位置: 位置_;

    //@@{ ms大写锁定警告关闭:msCapsLockWarningOff }
    ms大写锁定警告关闭: 真假;

    //@@{ msCSSOM元素浮动指标:msCSSOMElementFloatMetrics }
    msCSSOM元素浮动指标: 真假;

    /**
     * Fires when the user aborts the download.
     * @param ev The event.
     */

    //@@{ 正在终止:onabort, 文档_:Document, UI事件_:UIEvent }
    正在终止: (本体: 文档_, ev: UI事件_) => 任意;

    /**
     * Fires when the object is set as the active element.
     * @param ev The event.
     */

    //@@{ 正在激活:onactivate, 文档_:Document, UI事件_:UIEvent }
    正在激活: (本体: 文档_, ev: UI事件_) => 任意;

    /**
     * Fires immediately before the object is set as the active element.
     * @param ev The event.
     */

    //@@{ 正在将激活:onbeforeactivate, 文档_:Document, UI事件_:UIEvent }
    正在将激活: (本体: 文档_, ev: UI事件_) => 任意;

    /**
     * Fires immediately before the activeElement is changed from the current object to another object in the parent document.
     * @param ev The event.
     */

    //@@{ 正在失去激活:onbeforedeactivate, 文档_:Document, UI事件_:UIEvent }
    正在失去激活: (本体: 文档_, ev: UI事件_) => 任意;

    /**
     * Fires when the object loses the input focus.
     * @param ev The focus event.
     */

    //@@{ 正在失去焦点:onblur, 文档_:Document, 焦点事件_:FocusEvent }
    正在失去焦点: (本体: 文档_, ev: 焦点事件_) => 任意;

    /**
     * Occurs when playback is possible, but would require further buffering.
     * @param ev The event.
     */

    //@@{ 正在准备播放:oncanplay, 文档_:Document, 事件_:Event }
    正在准备播放: (本体: 文档_, ev: 事件_) => 任意;

    //@@{ 正在正常播放:oncanplaythrough, 文档_:Document, 事件_:Event }
    正在正常播放: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Fires when the contents of the object or selection have changed.
     * @param ev The event.
     */

    //@@{ 正在改变:onchange, 文档_:Document, 事件_:Event }
    正在改变: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Fires when the user clicks the left mouse button on the object
     * @param ev The mouse event.
     */

    //@@{ 正在单击:onclick, 文档_:Document, 鼠标事件_:MouseEvent }
    正在单击: (本体: 文档_, ev: 鼠标事件_) => 任意;

    /**
     * Fires when the user clicks the right mouse button in the client area, opening the context menu.
     * @param ev The mouse event.
     */

    //@@{ 正在快捷菜单:oncontextmenu, 文档_:Document, 指针事件_:PointerEvent }
    正在快捷菜单: (本体: 文档_, ev: 指针事件_) => 任意;

    /**
     * Fires when the user double-clicks the object.
     * @param ev The mouse event.
     */

    //@@{ 正在双击:ondblclick, 文档_:Document, 鼠标事件_:MouseEvent }
    正在双击: (本体: 文档_, ev: 鼠标事件_) => 任意;

    /**
     * Fires when the activeElement is changed from the current object to another object in the parent document.
     * @param ev The UI Event
     */

    //@@{ 正在同程序失去激活:ondeactivate, 文档_:Document, UI事件_:UIEvent }
    正在同程序失去激活: (本体: 文档_, ev: UI事件_) => 任意; 

    /**
     * Fires on the source object continuously during a drag operation.
     * @param ev The event.
     */

    //@@{ 正在拖拽:ondrag, 文档_:Document, 拖拽事件_:DragEvent }
    正在拖拽: (本体: 文档_, ev: 拖拽事件_) => 任意;

    /**
     * Fires on the source object when the user releases the mouse at the close of a drag operation.
     * @param ev The event.
     */

    //@@{ 正在拖拽结束:ondragend, 文档_:Document, 拖拽事件_:DragEvent }
    正在拖拽结束: (本体: 文档_, ev: 拖拽事件_) => 任意;

    /**
     * Fires on the target element when the user drags the object to a valid drop target.
     * @param ev The drag event.
     */

    //@@{ 正在拖拽进入:ondragenter, 文档_:Document, 拖拽事件_:DragEvent }
    正在拖拽进入: (本体: 文档_, ev: 拖拽事件_) => 任意;

    /**
     * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
     * @param ev The drag event.
     */

    //@@{ 正在拖拽离开:ondragleave, 文档_:Document, 拖拽事件_:DragEvent }
    正在拖拽离开: (本体: 文档_, ev: 拖拽事件_) => 任意;

    /**
     * Fires on the target element continuously while the user drags the object over a valid drop target.
     * @param ev The event.
     */

    //@@{ 正在拖拽悬停:ondragover, 文档_:Document, 拖拽事件_:DragEvent }
    正在拖拽悬停: (本体: 文档_, ev: 拖拽事件_) => 任意;

    /**
     * Fires on the source object when the user starts to drag a text selection or selected object.
     * @param ev The event.
     */

    //@@{ 正在拖拽开始:ondragstart, 文档_:Document, 拖拽事件_:DragEvent }
    正在拖拽开始: (本体: 文档_, ev: 拖拽事件_) => 任意;

    //@@{ 正在拖放:ondrop, 文档_:Document, 拖拽事件_:DragEvent }
    正在拖放: (本体: 文档_, ev: 拖拽事件_) => 任意;

    /**
     * Occurs when the duration attribute is updated.
     * @param ev The event.
     */

    //@@{ 正在时长改变:ondurationchange, 文档_:Document, 事件_:Event }
    正在时长改变: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Occurs when the media element is reset to its initial state.
     * @param ev The event.
     */

    //@@{ 正在清空:onemptied, 文档_:Document, 事件_:Event }
    正在清空: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Occurs when the end of playback is reached.
     * @param ev The event
     */

    //@@{ 正在结束后:onended, 文档_:Document, 媒体流错误事件_:MediaStreamErrorEvent }
    正在结束后: (本体: 文档_, ev: 媒体流错误事件_) => 任意;

    /**
     * Fires when an error occurs during object loading.
     * @param ev The event.
     */

    //@@{ 正在错误:onerror, 文档_:Document, 错误事件_:ErrorEvent }
    正在错误: (本体: 文档_, ev: 错误事件_) => 任意;

    /**
     * Fires when the object receives focus.
     * @param ev The event.
     */

    //@@{ 正在焦点:onfocus, 文档_:Document, 焦点事件_:FocusEvent }
    正在焦点: (本体: 文档_, ev: 焦点事件_) => 任意;

    //@@{ 正在全屏模式:onfullscreenchange, 文档_:Document, 事件_:Event }
    正在全屏模式: (本体: 文档_, ev: 事件_) => 任意;

    //@@{ 正在全屏错误:onfullscreenerror, 文档_:Document, 事件_:Event }
    正在全屏错误: (本体: 文档_, ev: 事件_) => 任意;

    //@@{ 正在输入:oninput, 文档_:Document, 事件_:Event }
    正在输入: (本体: 文档_, ev: 事件_) => 任意;

    //@@{ 正在无效:oninvalid, 文档_:Document, 事件_:Event }
    正在无效: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Fires when the user presses a key.
     * @param ev The keyboard event
     */

    //@@{ 正在键按下:onkeydown, 文档_:Document, 键盘事件_:KeyboardEvent }
    正在键按下: (本体: 文档_, ev: 键盘事件_) => 任意;

    /**
     * Fires when the user presses an alphanumeric key.
     * @param ev The event.
     */

    //@@{ 正在键入:onkeypress, 文档_:Document, 键盘事件_:KeyboardEvent }
    正在键入: (本体: 文档_, ev: 键盘事件_) => 任意;

    /**
     * Fires when the user releases a key.
     * @param ev The keyboard event
     */

    //@@{ 正在键松开:onkeyup, 文档_:Document, 键盘事件_:KeyboardEvent }
    正在键松开: (本体: 文档_, ev: 键盘事件_) => 任意;

    /**
     * Fires immediately after the browser loads the object.
     * @param ev The event.
     */

    //@@{ 正在加载:onload, 文档_:Document, 事件_:Event }
    正在加载: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Occurs when media data is loaded at the current playback position.
     * @param ev The event.
     */

    //@@{ 正在加载数据:onloadeddata, 文档_:Document, 事件_:Event }
    正在加载数据: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Occurs when the duration and dimensions of the media have been determined.
     * @param ev The event.
     */

    //@@{ 正在加载元数据:onloadedmetadata, 文档_:Document, 事件_:Event }
    正在加载元数据: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Occurs when Internet Explorer begins looking for media data.
     * @param ev The event.
     */

    //@@{ 正在加载开始:onloadstart, 文档_:Document, 事件_:Event }
    正在加载开始: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Fires when the user clicks the object with either mouse button.
     * @param ev The mouse event.
     */

    //@@{ 正在鼠标按下:onmousedown, 文档_:Document, 鼠标事件_:MouseEvent }
    正在鼠标按下: (本体: 文档_, ev: 鼠标事件_) => 任意;

    /**
     * Fires when the user moves the mouse over the object.
     * @param ev The mouse event.
     */

    //@@{ 正在鼠标移动:onmousemove, 文档_:Document, 鼠标事件_:MouseEvent }
    正在鼠标移动: (本体: 文档_, ev: 鼠标事件_) => 任意;

    /**
     * Fires when the user moves the mouse pointer outside the boundaries of the object.
     * @param ev The mouse event.
     */

    //@@{ 正在鼠标移开:onmouseout, 文档_:Document, 鼠标事件_:MouseEvent }
    正在鼠标移开: (本体: 文档_, ev: 鼠标事件_) => 任意;

    /**
     * Fires when the user moves the mouse pointer into the object.
     * @param ev The mouse event.
     */

    //@@{ 正在鼠标悬停:onmouseover, 文档_:Document, 鼠标事件_:MouseEvent }
    正在鼠标悬停: (本体: 文档_, ev: 鼠标事件_) => 任意;

    /**
     * Fires when the user releases a mouse button while the mouse is over the object.
     * @param ev The mouse event.
     */

    //@@{ 正在鼠标松开:onmouseup, 文档_:Document, 鼠标事件_:MouseEvent }
    正在鼠标松开: (本体: 文档_, ev: 鼠标事件_) => 任意;

    /**
     * Fires when the wheel button is rotated.
     * @param ev The mouse event
     */

    //@@{ 正在鼠标滚轮:onmousewheel, 文档_:Document, 轮事件_:WheelEvent }
    正在鼠标滚轮: (本体: 文档_, ev: 轮事件_) => 任意;

    //@@{ 正在内容缩放:onmscontentzoom, 文档_:Document, UI事件_:UIEvent }
    正在内容缩放: (本体: 文档_, ev: UI事件_) => 任意;

    //@@{ 正在MS内容缩放:onmsgesturechange, 文档_:Document, MS手势事件_:MSGestureEvent }
    正在MS内容缩放: (本体: 文档_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS手势双击:onmsgesturedoubletap, 文档_:Document, MS手势事件_:MSGestureEvent }
    正在MS手势双击: (本体: 文档_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS手势结束:onmsgestureend, 文档_:Document, MS手势事件_:MSGestureEvent }
    正在MS手势结束: (本体: 文档_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS手势保持:onmsgesturehold, 文档_:Document, MS手势事件_:MSGestureEvent }
    正在MS手势保持: (本体: 文档_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS手势开始:onmsgesturestart, 文档_:Document, MS手势事件_:MSGestureEvent }
    正在MS手势开始: (本体: 文档_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS手势点击:onmsgesturetap, 文档_:Document, MS手势事件_:MSGestureEvent }
    正在MS手势点击: (本体: 文档_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS惯性启动:onmsinertiastart, 文档_:Document, MS手势事件_:MSGestureEvent }
    正在MS惯性启动: (本体: 文档_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS操作状态改变:onmsmanipulationstatechanged, 文档_:Document, MS操纵杆事件_:MSManipulationEvent }
    正在MS操作状态改变: (本体: 文档_, ev: MS操纵杆事件_) => 任意;

    //@@{ 正在MS指针取消:onmspointercancel, 文档_:Document, MS指针事件_:MSPointerEvent }
    正在MS指针取消: (本体: 文档_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针按下:onmspointerdown, 文档_:Document, MS指针事件_:MSPointerEvent }
    正在MS指针按下: (本体: 文档_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针进入:onmspointerenter, 文档_:Document, MS指针事件_:MSPointerEvent }
    正在MS指针进入: (本体: 文档_, ev: MS指针事件_)  => 任意;

    //@@{ 正在MS指针离开:onmspointerleave, 文档_:Document, MS指针事件_:MSPointerEvent }
    正在MS指针离开: (本体: 文档_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针移动:onmspointermove, 文档_:Document, MS指针事件_:MSPointerEvent }
    正在MS指针移动: (本体: 文档_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针移出:onmspointerout, 文档_:Document, MS指针事件_:MSPointerEvent }
    正在MS指针移出: (本体: 文档_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针悬停:onmspointerover, 文档_:Document, MS指针事件_:MSPointerEvent }
    正在MS指针悬停: (本体: 文档_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针松开:onmspointerup, 文档_:Document, MS指针事件_:MSPointerEvent }
    正在MS指针松开: (本体: 文档_, ev: MS指针事件_) => 任意;

    /**
     * Occurs when an item is removed from a Jump List of a webpage running in Site Mode.
     * @param ev The event.
     */

    //@@{ 正在ms网站跳转列表项删除:onmssitemodejumplistitemremoved, 文档_:Document, MS网站模式事件_:MSSiteModeEvent }
    正在ms网站跳转列表项删除: (本体: 文档_, ev: MS网站模式事件_) => 任意;

    /**
     * Occurs when a user clicks a button in a Thumbnail Toolbar of a webpage running in Site Mode.
     * @param ev The event.
     */

    //@@{ 正在ms缩略图单击:onmsthumbnailclick, 文档_:Document, MS网站模式事件_:MSSiteModeEvent }
    正在ms缩略图单击: (本体: 文档_, ev: MS网站模式事件_) => 任意;

    /**
     * Occurs when playback is paused.
     * @param ev The event.
     */

    //@@{ 正在暂停:onpause, 文档_:Document, 事件_:Event }
    正在暂停: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Occurs when the play method is requested.
     * @param ev The event.
     */

    //@@{ 正在播放:onplay, 文档_:Document, 事件_:Event }
    正在播放: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Occurs when the audio or video has started playing.
     * @param ev The event.
     */

    //@@{ 正在播放中:onplaying, 文档_:Document, 事件_:Event }
    正在播放中: (本体: 文档_, ev: 事件_) => 任意;

    //@@{ 正在指针锁改变:onpointerlockchange, 文档_:Document, 事件_:Event }
    正在指针锁改变: (本体: 文档_, ev: 事件_) => 任意;

    //@@{ 正在指针锁错误:onpointerlockerror, 文档_:Document, 事件_:Event }
    正在指针锁错误: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Occurs to indicate progress while downloading media data.
     * @param ev The event.
     */

    //@@{ 正在进度:onprogress, 文档_:Document, 进度事件_:ProgressEvent }
    正在进度: (本体: 文档_, ev: 进度事件_) => 任意;

    /**
     * Occurs when the playback rate is increased or decreased.
     * @param ev The event.
     */

    //@@{ 正在播放速度改变:onratechange, 文档_:Document, 事件_:Event }
    正在播放速度改变: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Fires when the state of the object has changed.
     * @param ev The event
     */

    //@@{ 正在就绪状态改变:onreadystatechange, 文档_:Document, 事件_:Event }
    正在就绪状态改变: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Fires when the user resets a form.
     * @param ev The event.
     */

    //@@{ 正在重置:onreset, 文档_:Document, 事件_:Event }
    正在重置: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Fires when the user repositions the scroll box in the scroll bar on the object.
     * @param ev The event.
     */

    //@@{ 正在滚动:onscroll, 文档_:Document, UI事件_:UIEvent }
    正在滚动: (本体: 文档_, ev: UI事件_) => 任意;

    /**
     * Occurs when the seek operation ends.
     * @param ev The event.
     */

    //@@{ 正在提示:onseeked, 文档_:Document, 事件_:Event }
    正在提示: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Occurs when the current playback position is moved.
     * @param ev The event.
     */

    //@@{ 正在重新定位:onseeking, 文档_:Document, 事件_:Event }
    正在重新定位: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Fires when the current selection changes.
     * @param ev The event.
     */

    //@@{ 正在选择:onselect, 文档_:Document, UI事件_:UIEvent }
    正在选择: (本体: 文档_, ev: UI事件_) => 任意;

    /**
     * Fires when the selection state of a document changes.
     * @param ev The event.
     */

    //@@{ 正在选择改变:onselectionchange, 文档_:Document, 事件_:Event }
    正在选择改变: (本体: 文档_, ev: 事件_) => 任意;

    //@@{ 正在选择开始:onselectstart, 文档_:Document, 事件_:Event }
    正在选择开始: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Occurs when the download has stopped.
     * @param ev The event.
     */

    //@@{ 正在停滞:onstalled, 文档_:Document, 事件_:Event }
    正在停滞: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Fires when the user clicks the Stop button or leaves the Web page.
     * @param ev The event.
     */

    //@@{ 正在停止:onstop, 文档_:Document, 事件_:Event }
    正在停止: (本体: 文档_, ev: 事件_) => 任意;

    //@@{ 正在提交:onsubmit, 文档_:Document, 事件_:Event }
    正在提交: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Occurs if the load operation has been intentionally halted.
     * @param ev The event.
     */

    //@@{ 正在阻止:onsuspend, 文档_:Document, 事件_:Event }
    正在阻止: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Occurs to indicate the current playback position.
     * @param ev The event.
     */

    //@@{ 正在更新时间:ontimeupdate, 文档_:Document, 事件_:Event }
    正在更新时间: (本体: 文档_, ev: 事件_) => 任意;

    //@@{ 正在触摸取消:ontouchcancel, 触摸事件_:TouchEvent }
    正在触摸取消: (ev: 触摸事件_) => 任意;

    //@@{ 正在触摸结束:ontouchend, 触摸事件_:TouchEvent }
    正在触摸结束: (ev: 触摸事件_) => 任意;

    //@@{ 正在触摸移动:ontouchmove, 触摸事件_:TouchEvent }
    正在触摸移动: (ev: 触摸事件_) => 任意;

    //@@{ 正在触摸开始:ontouchstart, 触摸事件_:TouchEvent }
    正在触摸开始: (ev: 触摸事件_) => 任意;

    /**
     * Occurs when the volume is changed, or playback is muted or unmuted.
     * @param ev The event.
     */

    //@@{ 正在音量变化:onvolumechange, 文档_:Document, 事件_:Event }
    正在音量变化: (本体: 文档_, ev: 事件_) => 任意;

    /**
     * Occurs when playback stops because the next frame of a video resource is not available.
     * @param ev The event.
     */

    //@@{ 正在等待:onwaiting, 文档_:Document, 事件_:Event }
    正在等待: (本体: 文档_, ev: 事件_) => 任意;

    //@@{ 正在webkit全屏改变:onwebkitfullscreenchange, 文档_:Document, 事件_:Event }
    正在webkit全屏改变: (本体: 文档_, ev: 事件_) => 任意;

    //@@{ 正在webkit全屏错误:onwebkitfullscreenerror, 文档_:Document, 事件_:Event }
    正在webkit全屏错误: (本体: 文档_, ev: 事件_) => 任意;

    //@@{ 插件组:plugins, HTML集合的_:HTMLCollectionOf, HTML嵌入元素_:HTMLEmbedElement }
    插件组: HTML集合的_<HTML嵌入元素_>;

    //@@{ 指针锁元素:pointerLockElement, 元素_:Element }
    只读 指针锁元素: 元素_;

    /**
     * Retrieves a value that indicates the current state of the object.
     */

    //@@{ 就绪状态:readyState }
    只读 就绪状态: 文字;

    /**
     * Gets the URL of the location that referred the user to the current page.
     */

    //@@{ 介绍人:referrer }
    只读 介绍人: 文字;

    /**
     * Gets the root svg element in the document hierarchy.
     */

    //@@{ 根元素:rootElement, SVGSVG元素_:SVGSVGElement }
    只读 根元素: SVGSVG元素_;

    /**
     * Retrieves a collection of all script objects in the document.
     */

    //@@{ 脚本:scripts, HTML集合的_:HTMLCollectionOf, HTML脚本元素_:HTMLScriptElement }
    脚本: HTML集合的_<HTML脚本元素_>;

    //@@{ 滚动元素:scrollingElement, 元素_:Element }
    只读 滚动元素: 元素_ | 空值;

    /**
     * Retrieves a collection of styleSheet objects representing the style sheets that correspond to each instance of a link or style object in the document.
     */

    //@@{ 样式表:styleSheets, 样式表列表_:StyleSheetList }
    只读 样式表: 样式表列表_;

    /**
     * Contains the title of the document.
     */

    //@@{ 标题:title }
    标题: 文字;

    /**
     * Sets or gets the URL for the current document.
     */

    只读 URL: 文字;

    /**
     * Gets the URL for the document, stripped of any character encoding.
     */

    //@@{ URL未编码:URLUnencoded }
    只读 URL未编码: 文字;

    //@@{ 可见性状态:visibilityState, 可见性状态_:VisibilityState }
    只读 可见性状态: 可见性状态_;

    /**
     * Sets or gets the color of the links that the user has visited.
     */

    //@@{ 访问的连接颜色:vlinkColor }
    访问的连接颜色: 文字;

    //@@{ webkit当前的全屏元素:webkitCurrentFullScreenElement, 元素_:Element }
    只读 webkit当前的全屏元素: 元素_ | 空值;

    //@@{ webkit全屏元素:webkitFullscreenElement, 元素_:Element }
    只读 webkit全屏元素: 元素_ | 空值;

    //@@{ webkit全屏启用:webkitFullscreenEnabled }
    只读 webkit全屏启用: 真假;

    //@@{ webkit是全屏:webkitIsFullScreen }
    只读 webkit是全屏: 真假;

    //@@{ xml编码:xmlEncoding }
    只读 xml编码: 文字 | 空值;

    //@@{ xml独立的:xmlStandalone }
    xml独立的: 真假;

    /**
     * Gets or sets the version attribute specified in the declaration of an XML document.
     */

    //@@{ xml版本:xmlVersion }
    xml版本: 文字 | 空值;

    //@@{ 采用节点:adoptNode, 节点_:Node, 源:source }
    采用节点<T 扩展 节点_>(源: T): T;

    //@@{ 捕获事件:captureEvents }
    捕获事件(): 无值;

    //@@{ 创建范围从点:caretRangeFromPoint, 范围_:Range }
    创建范围从点(x: 数字, y: 数字): 范围_;

    //@@{ 清除:clear }
    清除(): 无值;

    /**
     * Closes an output stream and forces the sent data to display.
     */

    //@@{ 关闭:close }
    关闭(): 无值;

    /**
     * Creates an attribute object with a specified name.
     * @param 名字 String that sets the attribute object's name.
     */

    //@@{ 创建特性:createAttribute, 名字:name, 特性_:Attr }
    创建特性(名字: 文字): 特性_;

    //@@{ 创建特性NS:createAttributeNS, 名称空间URI:namespaceURI, 限定名:qualifiedName, 特性_:Attr }
    创建特性NS(名称空间URI: 文字 | 空值, 限定名: 文字): 特性_;

    //@@{ 创建CDATA区段:createCDATASection, 数据:data, CDATA区段_:CDATASection }
    创建CDATA区段(数据: 文字): CDATA区段_;

    /**
     * Creates a comment object with the specified data.
     * @param 数据 Sets the comment object's data.
     */

    //@@{ 创建注释:createComment, 数据:data, 注释_:Comment }
    创建注释(数据: 文字): 注释_;

    /**
     * Creates a new document.
     */

    //@@{ 创建文档片段:createDocumentFragment, 文档片段_:DocumentFragment }
    创建文档片段(): 文档片段_;

    /**
     * Creates an instance of the element for the specified tag.
     * @param 标签名 The name of an element.
     */

    //@@{ 创建元素:createElement, HTML元素标签名称映射_:HTMLElementTagNameMap, 标签名:tagName }
    创建元素<K 扩展 键为 HTML元素标签名称映射_>(标签名: K): HTML元素标签名称映射_[K];

    //@@{ 标签名:tagName, HTML元素_:HTMLElement }
    创建元素(标签名: 文字): HTML元素_;

    //@@{ 创建元素NS:createElementNS, 名称空间URI:namespaceURI, 限定名:qualifiedName, HTML元素_:HTMLElement }
    创建元素NS(名称空间URI: "http://www.w3.org/1999/xhtml", 限定名: 文字): HTML元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "超链接":"a", SVG超链接元素_:SVGAElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "超链接"): SVG超链接元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "圆":"circle", SVG圆元素_:SVGCircleElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "圆"): SVG圆元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "剪切路径":"clipPath", SVG剪切路径元素_:SVGClipPathElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "剪切路径"): SVG剪切路径元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "组件传递函数":"componentTransferFunction", SVG组件传递函数元素_:SVGComponentTransferFunctionElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "组件传递函数"): SVG组件传递函数元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "引用容器":"defs", SVG预定元素:SVGDefsElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "引用容器"): SVG预定元素;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "描述":"desc", SVG纯文本元素_:SVGDescElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "描述"): SVG纯文本元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "椭圆":"ellipse", SVG椭圆元素_:SVGEllipseElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "椭圆"): SVG椭圆元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜混合":"feBlend", SVG滤镜混合元素_:SVGFEBlendElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜混合"): SVG滤镜混合元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜颜色矩阵":"feColorMatrix", SVG滤镜颜色矩阵元素_:SVGFEColorMatrixElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜颜色矩阵"): SVG滤镜颜色矩阵元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜组件转移":"feComponentTransfer", SVG滤镜组件转移元素_:SVGFEComponentTransferElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜组件转移"): SVG滤镜组件转移元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜复合":"feComposite", SVG滤镜复合元素_:SVGFECompositeElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜复合"): SVG滤镜复合元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜卷积矩阵":"feConvolveMatrix", SVG滤镜卷积矩阵元素_:SVGFEConvolveMatrixElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜卷积矩阵"): SVG滤镜卷积矩阵元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜扩散照明":"feDiffuseLighting", SVG滤镜扩散灯光元素_:SVGFEDiffuseLightingElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜扩散照明"): SVG滤镜扩散灯光元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜位置替换贴图":"feDisplacementMap", SVG滤镜位移映射元素_:SVGFEDisplacementMapElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜位置替换贴图"): SVG滤镜位移映射元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜漫反射灯光":"feDistantLight", SVGFE漫反射灯光元素_:SVGFEDistantLightElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜漫反射灯光"): SVGFE漫反射灯光元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜洪水":"feFlood", SVG滤镜洪水元素_:SVGFEFloodElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜洪水"): SVG滤镜洪水元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜透明函数":"feFuncA", SVG滤镜透明函数元素_:SVGFEFuncAElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜透明函数"): SVG滤镜透明函数元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜蓝函数":"feFuncB", SVG滤镜蓝函数元素_:SVGFEFuncBElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜蓝函数"): SVG滤镜蓝函数元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜绿函数":"feFuncG", SVG滤镜绿函数元素_:SVGFEFuncGElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜绿函数"): SVG滤镜绿函数元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜红函数":"feFuncR", SVG滤镜红函数元素_:SVGFEFuncRElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜红函数"): SVG滤镜红函数元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜高斯模糊":"feGaussianBlur", SVG滤镜高斯模糊元素_:SVGFEGaussianBlurElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜高斯模糊"): SVG滤镜高斯模糊元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜图像":"feImage", SVG滤镜图像元素_:SVGFEImageElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜图像"): SVG滤镜图像元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜合并":"feMerge", SVG滤镜合并元素_:SVGFEMergeElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜合并"): SVG滤镜合并元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜合并节点":"feMergeNode", SVG滤镜合并节点元素_:SVGFEMergeNodeElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜合并节点"): SVG滤镜合并节点元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜形态":"feMorphology", SVG滤镜形态元素_:SVGFEMorphologyElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜形态"): SVG滤镜形态元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜偏移":"feOffset", SVG滤镜偏移元素_:SVGFEOffsetElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜偏移"): SVG滤镜偏移元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜点灯光":"fePointLight", SVG滤镜点灯光元素_:SVGFEPointLightElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜点灯光"): SVG滤镜点灯光元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜镜面灯光":"feSpecularLighting", SVG滤镜镜面灯光元素_:SVGFESpecularLightingElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜镜面灯光"): SVG滤镜镜面灯光元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜聚灯光":"feSpotLight", SVG滤镜聚灯光元素_:SVGFESpotLightElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜聚灯光"): SVG滤镜聚灯光元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜瓷砖":"feTile", SVG滤镜瓷砖元素_:SVGFETileElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜瓷砖"): SVG滤镜瓷砖元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "滤镜动荡":"feTurbulence", SVG滤镜动荡元素_:SVGFETurbulenceElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "滤镜动荡"): SVG滤镜动荡元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "过滤器":"filter", SVG过滤器元素_:SVGFilterElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "过滤器"): SVG过滤器元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "外部对象":"foreignObject", SVG外部对象元素_:SVGForeignObjectElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "外部对象"): SVG外部对象元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "组":"g", SVG组元素_:SVGGElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "组"): SVG组元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "图像":"image", SVG图像元素_:SVGImageElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "图像"): SVG图像元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "渐变":"gradient", SVG渐变元素_:SVGGradientElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "渐变"): SVG渐变元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "线":"line", SVG线元素_:SVGLineElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "线"): SVG线元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "线性渐变":"linearGradient", SVG线性渐变元素_:SVGLinearGradientElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "线性渐变"): SVG线性渐变元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "标记":"marker", SVG标记元素_:SVGMarkerElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "标记"): SVG标记元素_
    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "遮罩":"mask", SVG遮罩元素_:SVGMaskElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "遮罩"): SVG遮罩元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "路径":"path", SVG路径元素_:SVGPathElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "路径"): SVG路径元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "元数据":"metadata", SVG元数据元素_:SVGMetadataElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "元数据"): SVG元数据元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "模式":"pattern", SVG模式元素_:SVGPatternElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "模式"): SVG模式元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "多边形":"polygon", SVG多边形元素_:SVGPolygonElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "多边形"): SVG多边形元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "多段线":"polyline", SVG折线元素_:SVGPolylineElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "多段线"): SVG折线元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "径向渐变":"radialGradient", SVG径向渐变元素_:SVGRadialGradientElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "径向渐变"): SVG径向渐变元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "矩形":"rect", SVG矩形元素_:SVGRectElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "矩形"): SVG矩形元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "矢量图形":"svg", SVGSVG元素_:SVGSVGElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "矢量图形"): SVGSVG元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "脚本":"script", SVG脚本元素_:SVGScriptElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "脚本"): SVG脚本元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "停止":"stop", SVG停止元素_:SVGStopElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "停止"): SVG停止元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "样式":"style", SVG样式元素_:SVGStyleElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "样式"): SVG样式元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "分支":"switch", SVG分支元素_:SVGSwitchElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "分支"): SVG分支元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "符号":"symbol", SVG符号元素_:SVGSymbolElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "符号"): SVG符号元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "多行文本":"tspan", SVG文本跨度元素_:SVGTSpanElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "多行文本"): SVG文本跨度元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "文本内容":"textContent", SVG文本内容元素_:SVGTextContentElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "文本内容"): SVG文本内容元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "文本":"text", SVG文本元素_:SVGTextElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "文本"): SVG文本元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "文本路径":"textPath", SVG文本路径元素_:SVGTextPathElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "文本路径"): SVG文本路径元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "文本定位":"textPositioning", SVG文本点位元素_:SVGTextPositioningElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "文本定位"): SVG文本点位元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "标题":"title", SVG标题元素_:SVGTitleElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "标题"): SVG标题元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "使用":"use", SVG使用元素_:SVGUseElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "使用"): SVG使用元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, "视图":"view", SVG视图元素_:SVGViewElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: "视图"): SVG视图元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, SVG元素_:SVGElement }
    创建元素NS(名称空间URI: "http://www.w3.org/2000/svg", 限定名: 文字): SVG元素_;

    //@@{ 名称空间URI:namespaceURI, 限定名:qualifiedName, 元素_:Element }
    创建元素NS(名称空间URI: 文字 | 空值, 限定名: 文字): 元素_;

    //@@{ 创建表达式:createExpression, 表达式:expression, 解析器:resolver, X路径NS解析器_:XPathNSResolver, X路径表达式_:XPathExpression }
    创建表达式(表达式: 文字, 解析器: X路径NS解析器_): X路径表达式_;

    /**
     * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
     * @param 根 The root element or node to start traversing on.
     * @param 如何显示 The type of nodes or elements to appear in the node list
     * @param 过滤器 A custom NodeFilter function to use. For more information, see filter. Use null for no filter.
     * @param 实体引用展开 A flag that specifies whether entity reference nodes are expanded.
     */

    //@@{ 创建节点迭代器:createNodeIterator, 根:root, 节点_:Node, 如何显示:whatToShow, 过滤器:filter, 节点过滤器_:NodeFilter, 实体引用展开:entityReferenceExpansion, 节点迭代器_:NodeIterator }
    创建节点迭代器(根: 节点_, 如何显示?: 数字, 过滤器?: 节点过滤器_, 实体引用展开?: 真假): 节点迭代器_;

    //@@{ 创建NS解析器:createNSResolver, 节点解析器:nodeResolver, 节点_:Node, X路径NS解析器_:XPathNSResolver }
    创建NS解析器(节点解析器: 节点_): X路径NS解析器_;

    //@@{ 创建处理指令:createProcessingInstruction, 目标:target, 数据:data, 处理指令_:ProcessingInstruction }
    创建处理指令(目标: 文字, 数据: 文字): 处理指令_;

    /**
     *  Returns an empty range object that has both of its boundary points positioned at the beginning of the document.
     */

    //@@{ 创建范围:createRange, 范围_:Range }
    创建范围(): 范围_;

    /**
     * Creates a text string from the specified value.
     * @param 数据 String that specifies the nodeValue property of the text node.
     */

    //@@{ 创建文本节点:createTextNode, 数据:data, 文本_:Text }
    创建文本节点(数据: 文字): 文本_;

    //@@{ 创建触摸:createTouch, 视图:view, 窗口_:Window, 目标:target, 事件目标_:EventTarget, 标识符:identifier, 页面X:pageX, 页面Y:pageY, 屏幕X:screenX, 屏幕Y:screenY, 触摸_:Touch }
    创建触摸(视图: 窗口_, 目标: 事件目标_, 标识符: 数字, 页面X: 数字, 页面Y: 数字, 屏幕X: 数字, 屏幕Y: 数字): 触摸_;

    //@@{ 创建触摸列表:createTouchList, 触摸组:touches, 触摸_:Touch, 触摸列表_:TouchList }
    创建触摸列表(...触摸组: 触摸_[]): 触摸列表_;

    /**
     * Creates a TreeWalker object that you can use to traverse filtered lists of nodes or elements in a document.
     * @param 根 The root element or node to start traversing on.
     * @param 如何显示 The type of nodes or elements to appear in the node list. For more information, see whatToShow.
     * @param 过滤器 A custom NodeFilter function to use.
     * @param 实体引用扩张 A flag that specifies whether entity reference nodes are expanded.
     */

    //@@{ 创建树遍历方法:createTreeWalker, 根:root, 节点_:Node, 如何显示:whatToShow, 过滤器:filter, 节点过滤器_:NodeFilter, 实体引用扩张:entityReferenceExpansion, 树遍历方法_:TreeWalker }
    创建树遍历方法(根: 节点_, 如何显示?: 数字, 过滤器?: 节点过滤器_, 实体引用扩张?: 真假): 树遍历方法_;

    /**
     * Returns the element for the specified x coordinate and the specified y coordinate.
     * @param x The x-offset
     * @param y The y-offset
     */

    //@@{ 元素从点:elementFromPoint, 元素_:Element }
    元素从点(x: 数字, y: 数字): 元素_;

    //@@{ 评估:evaluate, 表达式:expression, 上下文节点:contextNode, 节点_:Node, 解析器:resolver, X路径NS解析器_:XPathNSResolver, 类型:type, 结果:result, X路径结果_:XPathResult }
    评估(表达式: 文字, 上下文节点: 节点_, 解析器: X路径NS解析器_ | 空值, 类型: 数字, 结果: X路径结果_ | 空值): X路径结果_;

    /**
     * Executes a command on the current document, current selection, or the given range.
     * @param 命令Id String that specifies the command to execute. This command can be any of the command identifiers that can be executed in script.
     * @param 显示UI Display the user interface, defaults to false.
     * @param 值 Value to assign.
     */

    //@@{ 执行命令:execCommand, 命令Id:commandId, 显示UI:showUI, 值:value }
    执行命令(命令Id: 文字, 显示UI?: 真假, 值?: 任意): 真假;

    /**
     * Displays help information for the given command identifier.
     * @param 命令Id Displays help information for the given command identifier.
     */

    //@@{ 执行命令显示帮助:execCommandShowHelp, 命令Id:commandId }
    执行命令显示帮助(命令Id: 文字): 真假;

    //@@{ 退出全屏:exitFullscreen }
    退出全屏(): 无值;

    //@@{ 退出指针锁:exitPointerLock }
    退出指针锁(): 无值;

    /**
     * Causes the element to receive the focus and executes the code specified by the onfocus event.
     */

    //@@{ 焦点:focus }
    焦点(): 无值;

    /**
     * Returns a reference to the first object with the specified value of the ID or NAME attribute.
     * @param 元素Id String that specifies the ID value. Case-insensitive.
     */

    //@@{ 取元素按Id:getElementById, 元素Id:elementId, HTML元素_:HTMLElement }
    取元素按Id(元素Id: 文字): HTML元素_ | 空值;

    //@@{ 取元素按类名称:getElementsByClassName, 类名:classNames, HTML集合的_:HTMLCollectionOf, 元素_:Element }
    取元素按类名称(类名: 文字): HTML集合的_<元素_>;

    /**
     * Gets a collection of objects based on the value of the NAME or ID attribute.
     * @param 元素名称 Gets a collection of objects based on the value of the NAME or ID attribute.
     */

    //@@{ 取元素按名称:getElementsByName, 元素名称:elementName, 节点列表的_:NodeListOf, HTML元素_:HTMLElement }
    取元素按名称(元素名称: 文字): 节点列表的_<HTML元素_>;

    /**
     * Retrieves a collection of objects based on the specified element name.
     * @param name Specifies the name of an element.
     */

    //@@{ 取元素按标签名称:getElementsByTagName, 元素列表标签名称映射_:ElementListTagNameMap, 标签名称:tagname }
    取元素按标签名称<K 扩展 键为 元素列表标签名称映射_>(标签名称: K): 元素列表标签名称映射_[K];

    //@@{ 标签名称:tagname, 节点列表的_:NodeListOf, 元素_:Element }
    取元素按标签名称(标签名称: 文字): 节点列表的_<元素_>;

    //@@{ 取元素按标签名称NS:getElementsByTagNameNS, 名称空间URI:namespaceURI, 本地名称:localName, HTML集合的_:HTMLCollectionOf, HTML元素_:HTMLElement }
    取元素按标签名称NS(名称空间URI: "http://www.w3.org/1999/xhtml", 本地名称: 文字): HTML集合的_<HTML元素_>;

    //@@{ 名称空间URI:namespaceURI, 本地名称:localName, HTML集合的_:HTMLCollectionOf, SVG元素_:SVGElement }
    取元素按标签名称NS(名称空间URI: "http://www.w3.org/2000/svg", 本地名称: 文字): HTML集合的_<SVG元素_>;

    //@@{ 名称空间URI:namespaceURI, 本地名称:localName, HTML集合的_:HTMLCollectionOf, 元素_:Element }
    取元素按标签名称NS(名称空间URI: 文字, 本地名称: 文字): HTML集合的_<元素_>;

    /**
     * Returns an object representing the current selection of the document that is loaded into the object displaying a webpage.
     */

    //@@{ 取选择:getSelection, 选择的_:Selection }
    取选择(): 选择的_;

    /**
     * Gets a value indicating whether the object currently has focus.
     */

    //@@{ 有焦点:hasFocus }
    有焦点(): 真假;

    //@@{ 导入节点:importNode, 节点_:Node, 导入的节点:importedNode, 深度:deep }
    导入节点<T 扩展 节点_>(导入的节点: T, 深度: 真假): T;

    //@@{ ms元素从点:msElementsFromPoint, 节点列表的_:NodeListOf, 元素_:Element }
    ms元素从点(x: 数字, y: 数字): 节点列表的_<元素_>;

    //@@{ ms元素从矩形:msElementsFromRect, 左:left, 顶:top, 宽度:width, 高度:height, 节点列表的_:NodeListOf, 元素_:Element }
    ms元素从矩形(左: 数字, 顶: 数字, 宽度: 数字, 高度: 数字): 节点列表的_<元素_>;

    /**
     * Opens a new window and loads a document specified by a given URL. Also, opens a new window that uses the url parameter and the name parameter to collect the output of the write method and the writeln method.
     * @param url Specifies a MIME type for the document.
     * @param 名字 Specifies the name of the window. This name is used as the value for the TARGET attribute on a form or an anchor element.
     * @param 特性 Contains a list of items separated by commas. Each item consists of an option and a value, separated by an equals sign (for example, "fullscreen=yes, toolbar=yes"). The following values are supported.
     * @param 替换 Specifies whether the existing entry for the document is replaced in the history list.
     */

    //@@{ 打开:open, 名字:name, 特性:features, 替换:replace, 文档_:Document }
    打开(url?: 文字, 名字?: 文字, 特性?: 文字, 替换?: 真假): 文档_;

    /**
     * Returns a Boolean value that indicates whether a specified command can be successfully executed using execCommand, given the current state of the document.
     * @param 命令Id Specifies a command identifier.
     */

    //@@{ 查询命令启用:queryCommandEnabled, 命令Id:commandId }
    查询命令启用(命令Id: 文字): 真假;

    /**
     * Returns a Boolean value that indicates whether the specified command is in the indeterminate state.
     * @param 命令Id String that specifies a command identifier.
     */

    //@@{ 查询命令不确定状态:queryCommandIndeterm, 命令Id:commandId }
    查询命令不确定状态(命令Id: 文字): 真假;

    /**
     * Returns a Boolean value that indicates the current state of the command.
     * @param 命令Id String that specifies a command identifier.
     */

    //@@{ 查询命令状态:queryCommandState, 命令Id:commandId }
    查询命令状态(命令Id: 文字): 真假;

    /**
     * Returns a Boolean value that indicates whether the current command is supported on the current range.
     * @param 命令Id Specifies a command identifier.
     */

    //@@{ 查询命令支持:queryCommandSupported, 命令Id:commandId }
    查询命令支持(命令Id: 文字): 真假;

    /**
     * Retrieves the string associated with a command.
     * @param 命令Id String that contains the identifier of a command. This can be any command identifier given in the list of Command Identifiers.
     */

    //@@{ 查询命令文本:queryCommandText, 命令Id:commandId }
    查询命令文本(命令Id: 文字): 文字;

    /**
     * Returns the current value of the document, range, or current selection for the given command.
     * @param 命令Id String that specifies a command identifier.
     */

    //@@{ 查询命令值:queryCommandValue, 命令Id:commandId }
    查询命令值(命令Id: 文字): 文字;

    //@@{ 释放事件:releaseEvents }
    释放事件(): 无值;

    /**
     * Allows updating the print settings for the page.
     */

    //@@{ 更新设置:updateSettings }
    更新设置(): 无值;

    //@@{ webkit取消全屏:webkitCancelFullScreen }
    webkit取消全屏(): 无值;

    //@@{ webkit退出全屏:webkitExitFullscreen }
    webkit退出全屏(): 无值;

    /**
     * Writes one or more HTML expressions to a document in the specified window.
     * @param 内容 Specifies the text and HTML tags to write.
     */

    //@@{ 写:write, 内容:content }
    写(...内容: 文字[]): 无值;

    /**
     * Writes one or more HTML expressions, followed by a carriage return, to a document in the specified window.
     * @param 内容 The text and HTML tags to write.
     */

    //@@{ 写含换行:writeln, 内容:content }
    写含换行(...内容: 文字[]): 无值;

    //@@{ 添加事件监听器:addEventListener, 文档事件映射_:DocumentEventMap, 类型:type, 侦听器:listener, 文档_:Document, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 文档事件映射_>(类型: K, 侦听器: (本体: 文档_, ev: 文档事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 文档_: {

    //@@{ 原型:prototype, 文档_:Document }
    原型: 文档_;

    //@@{ 文档_:Document }
    新建(): 文档_;

};

//@@{ 文档片段_:DocumentFragment, 节点_:Node, 节点选择器_:NodeSelector, 父节点_:ParentNode }
接口 文档片段_ 扩展 节点_, 节点选择器_, 父节点_ {

    //@@{ 取元素按Id:getElementById, 元素Id:elementId, HTML元素_:HTMLElement }
    取元素按Id(元素Id: 文字): HTML元素_ | 空值;

}

声明 值量 文档片段_: {

    //@@{ 原型:prototype, 文档片段_:DocumentFragment }
    原型: 文档片段_;

    //@@{ 文档片段_:DocumentFragment }
    新建(): 文档片段_;

};

//@@{ 文档类型_:DocumentType, 节点_:Node, 子节点_:ChildNode }
接口 文档类型_ 扩展 节点_, 子节点_ {

    //@@{ 实体:entities, 命名节点映射_:NamedNodeMap }
    只读 实体: 命名节点映射_;

    //@@{ 内部子集:internalSubset }
    只读 内部子集: 文字 | 空值;

    //@@{ 名字:name }
    只读 名字: 文字;

    //@@{ 符号:notations, 命名节点映射_:NamedNodeMap }
    只读 符号: 命名节点映射_;

    //@@{ 公共Id:publicId }
    只读 公共Id: 文字;

    //@@{ 系统Id:systemId }
    只读 系统Id: 文字;

}

声明 值量 文档类型_: {

    //@@{ 原型:prototype, 文档类型_:DocumentType }
    原型: 文档类型_;

    //@@{ 文档类型_:DocumentType }
    新建(): 文档类型_;

};

//@@{ 文档错误_:DOMError }
接口 文档错误_ {

    //@@{ 名字:name }
    只读 名字: 文字;

    //@@{ 转为文字:toString }
    转为文字(): 文字;

}

声明 值量 文档错误_: {

    //@@{ 原型:prototype, 文档错误_:DOMError }
    原型: 文档错误_;

    //@@{ 文档错误_:DOMError }
    新建(): 文档错误_;

};

//@@{ 文档异常_:DOMException }
接口 文档异常_ {

    //@@{ 代码:code }
    只读 代码: 数字;

    //@@{ 消息:message }
    只读 消息: 文字;

    //@@{ 名字:name }
    只读 名字: 文字;

    //@@{ 转为文字:toString }
    转为文字(): 文字;

    //@@{ __中止_错误__:ABORT_ERR }
    只读 __中止_错误__: 数字;

    //@@{ __数据_克隆_错误__:DATA_CLONE_ERR }
    只读 __数据_克隆_错误__: 数字;

    //@@{ __文档字符_大小_错误__:DOMSTRING_SIZE_ERR }
    只读 __文档字符_大小_错误__: 数字;

    //@@{ __层次结构_请求_错误__:HIERARCHY_REQUEST_ERR }
    只读 __层次结构_请求_错误__: 数字;

    //@@{ __指数_大小_错误__:INDEX_SIZE_ERR }
    只读 __指数_大小_错误__: 数字;

    //@@{ __指数_属性_错误__:INUSE_ATTRIBUTE_ERR }
    只读 __指数_属性_错误__: 数字;

    //@@{ __无效的_访问_错误__:INVALID_ACCESS_ERR }
    只读 __无效的_访问_错误__: 数字;

    //@@{ __无效的_字符_错误__:INVALID_CHARACTER_ERR }
    只读 __无效的_字符_错误__: 数字;

    //@@{ __无效的_修改_错误__:INVALID_MODIFICATION_ERR }
    只读 __无效的_修改_错误__: 数字;

    //@@{ __无效的_节点_类型_错误__:INVALID_NODE_TYPE_ERR }
    只读 __无效的_节点_类型_错误__: 数字;

    //@@{ __无效的_状态_错误__:INVALID_STATE_ERR }
    只读 __无效的_状态_错误__: 数字;

    //@@{ __名称空间_错误__:NAMESPACE_ERR }
    只读 __名称空间_错误__: 数字;

    //@@{ __网络_错误__:NETWORK_ERR }
    只读 __网络_错误__: 数字;

    //@@{ __没有_数据_允许_错误__:NO_DATA_ALLOWED_ERR }
    只读 __没有_数据_允许_错误__: 数字;

    //@@{ __没有_修改_允许_错误__:NO_MODIFICATION_ALLOWED_ERR }
    只读 __没有_修改_允许_错误__: 数字;

    //@@{ __不能_发现_错误__:NOT_FOUND_ERR }
    只读 __不能_发现_错误__: 数字;

    //@@{ __不能_支持_错误__:NOT_SUPPORTED_ERR }
    只读 __不能_支持_错误__: 数字;

    //@@{ __解析_错误__:PARSE_ERR }
    只读 __解析_错误__: 数字;

    //@@{ __配额_超出_错误__:QUOTA_EXCEEDED_ERR }
    只读 __配额_超出_错误__: 数字;

    //@@{ __安全_错误__:SECURITY_ERR }
    只读 __安全_错误__: 数字;

    //@@{ __序列化_错误__:SERIALIZE_ERR }
    只读 __序列化_错误__: 数字;

    //@@{ __语法_错误__:SYNTAX_ERR }
    只读 __语法_错误__: 数字;

    //@@{ __超时_错误__:TIMEOUT_ERR }
    只读 __超时_错误__: 数字;

    //@@{ __类型_不匹配_错误__:TYPE_MISMATCH_ERR }
    只读 __类型_不匹配_错误__: 数字;

    //@@{ __URL_不匹配_错误__:URL_MISMATCH_ERR }
    只读 __URL_不匹配_错误__: 数字;

    //@@{ __验证_错误__:VALIDATION_ERR }
    只读 __验证_错误__: 数字;

    //@@{ __错误_文档_错误__:WRONG_DOCUMENT_ERR }
    只读 __错误_文档_错误__: 数字;

}

声明 值量 文档异常_: {

    //@@{ 原型:prototype, 文档异常_:DOMException }
    原型: 文档异常_;

    //@@{ 消息:message, 名字:name, 文档异常_:DOMException }
    新建(消息?: 文字, 名字?: 文字): 文档异常_;

    //@@{ __中止_错误__:ABORT_ERR }
    只读 __中止_错误__: 数字;

    //@@{ __数据_克隆_错误__:DATA_CLONE_ERR }
    只读 __数据_克隆_错误__: 数字;

    //@@{ __文档字符_大小_错误__:DOMSTRING_SIZE_ERR }
    只读 __文档字符_大小_错误__: 数字;

    //@@{ __层次结构_请求_错误__:HIERARCHY_REQUEST_ERR }
    只读 __层次结构_请求_错误__: 数字;

    //@@{ __指数_大小_错误__:INDEX_SIZE_ERR }
    只读 __指数_大小_错误__: 数字;

    //@@{ __指数_属性_错误__:INUSE_ATTRIBUTE_ERR }
    只读 __指数_属性_错误__: 数字;

    //@@{ __无效的_访问_错误__:INVALID_ACCESS_ERR }
    只读 __无效的_访问_错误__: 数字;

    //@@{ __无效的_字符_错误__:INVALID_CHARACTER_ERR }
    只读 __无效的_字符_错误__: 数字;

    //@@{ __无效的_修改_错误__:INVALID_MODIFICATION_ERR }
    只读 __无效的_修改_错误__: 数字;

    //@@{ __无效的_节点_类型_错误__:INVALID_NODE_TYPE_ERR }
    只读 __无效的_节点_类型_错误__: 数字;

    //@@{ __无效的_状态_错误__:INVALID_STATE_ERR }
    只读 __无效的_状态_错误__: 数字;

    //@@{ __名称空间_错误__:NAMESPACE_ERR }
    只读 __名称空间_错误__: 数字;

    //@@{ __网络_错误__:NETWORK_ERR }
    只读 __网络_错误__: 数字;

    //@@{ __没有_数据_允许_错误__:NO_DATA_ALLOWED_ERR }
    只读 __没有_数据_允许_错误__: 数字;

    //@@{ __没有_修改_允许_错误__:NO_MODIFICATION_ALLOWED_ERR }
    只读 __没有_修改_允许_错误__: 数字;

    //@@{ __没有_发现_错误__:NOT_FOUND_ERR }
    只读 __没有_发现_错误__: 数字;

    //@@{ __不能_支持_错误__:NOT_SUPPORTED_ERR }
    只读 __不能_支持_错误__: 数字;

    //@@{ __解析_错误__:PARSE_ERR }
    只读 __解析_错误__: 数字;

    //@@{ __配额_超出_错误__:QUOTA_EXCEEDED_ERR }
    只读 __配额_超出_错误__: 数字;

    //@@{ __安全_错误__:SECURITY_ERR }
    只读 __安全_错误__: 数字;

    //@@{ __序列化_错误__:SERIALIZE_ERR }
    只读 __序列化_错误__: 数字;

    //@@{ __语法_错误__:SYNTAX_ERR }
    只读 __语法_错误__: 数字;

    //@@{ __超时_错误__:TIMEOUT_ERR }
    只读 __超时_错误__: 数字;

    //@@{ __类型_不匹配_错误__:TYPE_MISMATCH_ERR }
    只读 __类型_不匹配_错误__: 数字;

    //@@{ __URL_不匹配_错误__:URL_MISMATCH_ERR }
    只读 __URL_不匹配_错误__: 数字;

    //@@{ __验证_错误__:VALIDATION_ERR }
    只读 __验证_错误__: 数字;

    //@@{ __错误_文档_错误__:WRONG_DOCUMENT_ERR }
    只读 __错误_文档_错误__: 数字;

};

//@@{ 文档实现_:DOMImplementation }
接口 文档实现_ {

    //@@{ 创建文档:createDocument, 名称空间URI:namespaceURI, 限定名:qualifiedName, 文档类型:doctype, 文档类型_:DocumentType, 文档_:Document }
    创建文档(名称空间URI: 文字 | 空值, 限定名: 文字 | 空值, 文档类型: 文档类型_ | 空值): 文档_;

    //@@{ 创建文档类型:createDocumentType, 限定名:qualifiedName, 公共Id:publicId, 系统Id:systemId, 文档类型_:DocumentType }
    创建文档类型(限定名: 文字, 公共Id: 文字, 系统Id: 文字): 文档类型_;

    //@@{ 创建HTML文档:createHTMLDocument, 标题:title, 文档_:Document }
    创建HTML文档(标题: 文字): 文档_;

    //@@{ 有某功能:hasFeature, 功能:feature, 版本:version }
    有某功能(功能: 文字 | 空值, 版本: 文字 | 空值): 真假;

}

声明 值量 文档实现_: {

    //@@{ 原型:prototype, 文档实现_:DOMImplementation }
    原型: 文档实现_;

    //@@{ 文档实现_:DOMImplementation }
    新建(): 文档实现_;

};

//@@{ 文档解析器_:DOMParser }
接口 文档解析器_ {

    //@@{ 解析从字符串:parseFromString, 源:source, mime类型:mimeType, 文档_:Document }
    解析从字符串(源: 文字, mime类型: 文字): 文档_;

}

声明 值量 文档解析器_: {

    //@@{ 原型:prototype, 文档解析器_:DOMParser }
    原型: 文档解析器_;

    //@@{ 文档解析器_:DOMParser }
    新建(): 文档解析器_;

};

//@@{ 文档可设置标记列表_:DOMSettableTokenList, 文档令牌列表_:DOMTokenList }
接口 文档可设置标记列表_ 扩展 文档令牌列表_ {

    //@@{ 值:value }
    值: 文字;

}

声明 值量 文档可设置标记列表_: {

    //@@{ 原型:prototype, 文档可设置标记列表_:DOMSettableTokenList }
    原型: 文档可设置标记列表_;

    //@@{ 文档可设置标记列表_:DOMSettableTokenList }
    新建(): 文档可设置标记列表_;

};

//@@{ 文档字符串列表_:DOMStringList }
接口 文档字符串列表_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 包含:contains, 字符串:str }
    包含(字符串: 文字): 真假;

    //@@{ 项目:item, 索引:index }
    项目(索引: 数字): 文字 | 空值;

    //@@{ 索引:index }
    [索引: 数字]: 文字;

}

声明 值量 文档字符串列表_: {

    //@@{ 原型:prototype, 文档字符串列表_:DOMStringList }
    原型: 文档字符串列表_;

    //@@{ 文档字符串列表_:DOMStringList }
    新建(): 文档字符串列表_;

};

//@@{ 文档字符串映射_:DOMStringMap }
接口 文档字符串映射_ {

    //@@{ 名字:name }
    [名字: 文字]: 文字 | 未定;

}

声明 值量 文档字符串映射_: {

    //@@{ 原型:prototype, 文档字符串映射_:DOMStringMap }
    原型: 文档字符串映射_;

    //@@{ 文档字符串映射_:DOMStringMap }
    新建(): 文档字符串映射_;

};

//@@{ 文档令牌列表_:DOMTokenList }
接口 文档令牌列表_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 添加:add, 令牌:token }
    添加(...令牌: 文字[]): 无值;

    //@@{ 包含:contains, 令牌:token }
    包含(令牌: 文字): 真假;

    //@@{ 项目:item, 索引:index }
    项目(索引: 数字): 文字;

    //@@{ 删除:remove, 令牌:token }
    删除(...令牌: 文字[]): 无值;

    //@@{ 切换:toggle, 令牌:token, 强制:force }
    切换(令牌: 文字, 强制?: 真假): 真假;

    //@@{ 转为文字:toString }
    转为文字(): 文字;

    //@@{ 索引:index }
    [索引: 数字]: 文字;

}

声明 值量 文档令牌列表_: {

    //@@{ 原型:prototype, 文档令牌列表_:DOMTokenList }
    原型: 文档令牌列表_;

    //@@{ 文档令牌列表_:DOMTokenList }
    新建(): 文档令牌列表_;

};

//@@{ 拖拽事件_:DragEvent, 鼠标事件_:MouseEvent }
接口 拖拽事件_ 扩展 鼠标事件_ {

    //@@{ 数据传输:dataTransfer, 数据传输_:DataTransfer }
    只读 数据传输: 数据传输_;

    //@@{ 初始化拖拽事件:initDragEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 视图参数:viewArg, 窗口_:Window, 细节参数:detailArg, 屏幕X参数:screenXArg, 屏幕Y参数:screenYArg, 客户X参数:clientXArg, 客户Y参数:clientYArg, ctrl键参数:ctrlKeyArg, alt键参数:altKeyArg, shift键参数:shiftKeyArg, meta键参数:metaKeyArg, 按钮参数:buttonArg, 相关目标参数:relatedTargetArg, 事件目标_:EventTarget, 数据传输参数:dataTransferArg, 数据传输_:DataTransfer }
    初始化拖拽事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 视图参数: 窗口_, 细节参数: 数字, 屏幕X参数: 数字, 屏幕Y参数: 数字, 客户X参数: 数字, 客户Y参数: 数字, ctrl键参数: 真假, alt键参数: 真假, shift键参数: 真假, meta键参数: 真假, 按钮参数: 数字, 相关目标参数: 事件目标_, 数据传输参数: 数据传输_): 无值;

    //@@{ MS转换URL:msConvertURL, 文件:file, 文件_:File, 目标类型:targetType, 目标URL:targetURL }
    MS转换URL(文件: 文件_, 目标类型: 文字, 目标URL?: 文字): 无值;

}

声明 值量 拖拽事件_: {

    //@@{ 原型:prototype, 拖拽事件_:DragEvent }
    原型: 拖拽事件_;

    //@@{ 类型:type, "拖拽":"drag", "拖拽结束":"dragend", "拖拽进入":"dragenter", "拖拽退出":"dragexit", "拖拽离开":"dragleave", "拖拽悬停":"dragover", "拖拽开始":"dragstart", "拖放":"drop", 拖拽事件初始化:dragEventInit, 数据传输:dataTransfer, 数据传输_:DataTransfer, 拖拽事件_:DragEvent }
    新建(类型: "拖拽" | "拖拽结束" | "拖拽进入" | "拖拽退出" | "拖拽离开" | "拖拽悬停" | "拖拽开始" | "拖放", 拖拽事件初始化?: { 数据传输?: 数据传输_ }): 拖拽事件_;

};

//@@{ 动态压缩节点_:DynamicsCompressorNode, 音频节点_:AudioNode }
接口 动态压缩节点_ 扩展 音频节点_ {

    //@@{ 攻击:attack, 音频参数_:AudioParam }
    只读 攻击: 音频参数_;

    //@@{ 平滑:knee, 音频参数_:AudioParam }
    只读 平滑: 音频参数_;

    //@@{ 比率:ratio, 音频参数_:AudioParam }
    只读 比率: 音频参数_;

    //@@{ 减少:reduction }
    只读 减少: 数字;

    //@@{ 释放:release, 音频参数_:AudioParam }
    只读 释放: 音频参数_;

    //@@{ 阈值:threshold, 音频参数_:AudioParam }
    只读 阈值: 音频参数_;

}

声明 值量 动态压缩节点_: {

    //@@{ 原型:prototype, 动态压缩节点_:DynamicsCompressorNode }
    原型: 动态压缩节点_;

    //@@{ 动态压缩节点_:DynamicsCompressorNode }
    新建(): 动态压缩节点_;

};

//@@{ 元素事件映射_:ElementEventMap, 全局事件处理程序事件映射_:GlobalEventHandlersEventMap }
接口 元素事件映射_ 扩展 全局事件处理程序事件映射_ {

    //@@{ "无障碍请求":"ariarequest", 事件_:Event }
    "无障碍请求": 事件_;

    //@@{ "命令":"command", 事件_:Event }
    "命令": 事件_;

    //@@{ "有指针捕获":"gotpointercapture", 指针事件_:PointerEvent }
    "有指针捕获": 指针事件_;

    //@@{ "失去指针捕获":"lostpointercapture", 指针事件_:PointerEvent }
    "失去指针捕获": 指针事件_;

    //@@{ "MS手势改变":"MSGestureChange", MS手势事件_:MSGestureEvent }
    "MS手势改变": MS手势事件_;

    //@@{ "MS手势双击":"MSGestureDoubleTap", MS手势事件_:MSGestureEvent }
    "MS手势双击": MS手势事件_;

    //@@{ "MS手势结束":"MSGestureEnd", MS手势事件_:MSGestureEvent }
    "MS手势结束": MS手势事件_;

    //@@{ "MS手势保持":"MSGestureHold", MS手势事件_:MSGestureEvent }
    "MS手势保持": MS手势事件_;

    //@@{ "MS手势开始":"MSGestureStart", MS手势事件_:MSGestureEvent }
    "MS手势开始": MS手势事件_;

    //@@{ "MS手势点击":"MSGestureTap", MS手势事件_:MSGestureEvent }
    "MS手势点击": MS手势事件_;

    //@@{ "MS有指针捕获":"MSGotPointerCapture", MS指针事件_:MSPointerEvent }
    "MS有指针捕获": MS指针事件_;

    //@@{ "MS惯性启动":"MSInertiaStart", MS手势事件_:MSGestureEvent }
    "MS惯性启动": MS手势事件_;

    //@@{ "MS失去指针捕获":"MSLostPointerCapture", MS指针事件_:MSPointerEvent }
    "MS失去指针捕获": MS指针事件_;

    //@@{ "MS指针取消":"MSPointerCancel", MS指针事件_:MSPointerEvent }
    "MS指针取消": MS指针事件_;

    //@@{ "MS指针按下":"MSPointerDown", MS指针事件_:MSPointerEvent }
    "MS指针按下": MS指针事件_;

    //@@{ "MS指针进入":"MSPointerEnter", MS指针事件_:MSPointerEvent }
    "MS指针进入": MS指针事件_;

    //@@{ "MS指针离开":"MSPointerLeave", MS指针事件_:MSPointerEvent }
    "MS指针离开": MS指针事件_;

    //@@{ "MS指针移动":"MSPointerMove", MS指针事件_:MSPointerEvent }
    "MS指针移动": MS指针事件_;

    //@@{ "MS指针移出":"MSPointerOut", MS指针事件_:MSPointerEvent }
    "MS指针移出": MS指针事件_;

    //@@{ "MS指针悬停":"MSPointerOver", MS指针事件_:MSPointerEvent }
    "MS指针悬停": MS指针事件_;

    //@@{ "MS指针松开":"MSPointerUp", MS指针事件_:MSPointerEvent }
    "MS指针松开": MS指针事件_;

    //@@{ "触摸取消":"touchcancel", 触摸事件_:TouchEvent }
    "触摸取消": 触摸事件_;

    //@@{ "触摸结束":"touchend", 触摸事件_:TouchEvent }
    "触摸结束": 触摸事件_;

    //@@{ "触摸移动":"touchmove", 触摸事件_:TouchEvent }
    "触摸移动": 触摸事件_;

    //@@{ "触摸开始":"touchstart", 触摸事件_:TouchEvent }
    "触摸开始": 触摸事件_;

    //@@{ "webkit全屏改变":"webkitfullscreenchange", 事件_:Event }
    "webkit全屏改变": 事件_;

    //@@{ "webkit全屏错误":"webkit全屏错误", 事件_:Event }
    "webkit全屏错误": 事件_;

}

//@@{ 元素_:Element, 节点_:Node, 全局事件处理程序_:GlobalEventHandlers, 元素遍历_:ElementTraversal, 节点选择器_:NodeSelector, 子节点_:ChildNode, 父节点_:ParentNode }
接口 元素_ 扩展 节点_, 全局事件处理程序_, 元素遍历_, 节点选择器_, 子节点_, 父节点_ {

    //@@{ 类列表:classList, 文档令牌列表_:DOMTokenList }
    只读 类列表: 文档令牌列表_;

    //@@{ 类名:className }
    类名: 文字;

    //@@{ 客户高度:clientHeight }
    只读 客户高度: 数字;

    //@@{ 客户左:clientLeft }
    只读 客户左: 数字;

    //@@{ 客户顶:clientTop }
    只读 客户顶: 数字;

    //@@{ 客户宽度:clientWidth }
    只读 客户宽度: 数字;

    id: 文字;

    //@@{ 内部HTML:innerHTML }
    内部HTML: 文字;

    //@@{ ms内容缩放因子:msContentZoomFactor }
    ms内容缩放因子: 数字;

    //@@{ ms地区溢出:msRegionOverflow }
    只读 ms地区溢出: 文字;

    //@@{ 正在无障碍请求:onariarequest, 元素_:Element, 事件_:Event }
    正在无障碍请求: (本体: 元素_, ev: 事件_) => 任意;

    //@@{ 正在命令:oncommand, 元素_:Element, 事件_:Event }
    正在命令: (本体: 元素_, ev: 事件_) => 任意;

    //@@{ 正在有指针捕获:ongotpointercapture, 元素_:Element, 指针事件_:PointerEvent }
    正在有指针捕获: (本体: 元素_, ev: 指针事件_) => 任意;

    //@@{ 正在失去指针捕获:onlostpointercapture, 元素_:Element, 指针事件_:PointerEvent }
    正在失去指针捕获: (本体: 元素_, ev: 指针事件_) => 任意;

    //@@{ 正在MS手势改变:onmsgesturechange, 元素_:Element, MS手势事件_:MSGestureEvent }
    正在MS手势改变: (本体: 元素_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS手势双击:onmsgesturedoubletap, 元素_:Element, MS手势事件_:MSGestureEvent }
    正在MS手势双击: (本体: 元素_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS手势结束:onmsgestureend, 元素_:Element, MS手势事件_:MSGestureEvent }
    正在MS手势结束: (本体: 元素_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS手势保持:onmsgesturehold, 元素_:Element, MS手势事件_:MSGestureEvent }
    正在MS手势保持: (本体: 元素_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS手势开始:onmsgesturestart, 元素_:Element, MS手势事件_:MSGestureEvent }
    正在MS手势开始: (本体: 元素_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS手势点击:onmsgesturetap, 元素_:Element, MS手势事件_:MSGestureEvent }
    正在MS手势点击: (本体: 元素_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS有指针捕获:onmsgotpointercapture, 元素_:Element, MS指针事件_:MSPointerEvent }
    正在MS有指针捕获: (本体: 元素_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS惯性启动:onmsinertiastart, 元素_:Element, MS手势事件_:MSGestureEvent }
    正在MS惯性启动: (本体: 元素_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS失去指针捕获:onmslostpointercapture, 元素_:Element, MS指针事件_:MSPointerEvent }
    正在MS失去指针捕获: (本体: 元素_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针取消:onmspointercancel, 元素_:Element, MS指针事件_:MSPointerEvent }
    正在MS指针取消: (本体: 元素_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针按下:onmspointerdown, 元素_:Element, MS指针事件_:MSPointerEvent }
    正在MS指针按下: (本体: 元素_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针进入:onmspointerenter, 元素_:Element, MS指针事件_:MSPointerEvent }
    正在MS指针进入: (本体: 元素_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针离开:onmspointerleave, 元素_:Element, MS指针事件_:MSPointerEvent }
    正在MS指针离开: (本体: 元素_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针移动:onmspointermove, 元素_:Element, MS指针事件_:MSPointerEvent }
    正在MS指针移动: (本体: 元素_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针移出:onmspointerout, 元素_:Element, MS指针事件_:MSPointerEvent }
    正在MS指针移出: (本体: 元素_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针悬停:onmspointerover, 元素_:Element, MS指针事件_:MSPointerEvent }
    正在MS指针悬停: (本体: 元素_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针松开:onmspointerup, 元素_:Element, MS指针事件_:MSPointerEvent }
    正在MS指针松开: (本体: 元素_, ev: MS指针事件_) => 任意;

    //@@{ 正在触摸取消:ontouchcancel, 触摸事件_:TouchEvent }
    正在触摸取消: (ev: 触摸事件_) => 任意;

    //@@{ 正在触摸结束:ontouchend, 触摸事件_:TouchEvent }
    正在触摸结束: (ev: 触摸事件_) => 任意;

    //@@{ 正在触摸移动:ontouchmove, 触摸事件_:TouchEvent }
    正在触摸移动: (ev: 触摸事件_) => 任意;

    //@@{ 正在触摸开始:ontouchstart, 触摸事件_:TouchEvent }
    正在触摸开始: (ev: 触摸事件_) => 任意;

    //@@{ 正在webkit全屏改变:onwebkitfullscreenchange, 元素_:Element, 事件_:Event }
    正在webkit全屏改变: (本体: 元素_, ev: 事件_) => 任意;

    //@@{ 正在webkit全屏错误:onwebkitfullscreenerror, 元素_:Element, 事件_:Event }
    正在webkit全屏错误: (本体: 元素_, ev: 事件_) => 任意;

    //@@{ 外部HTML:outerHTML }
    外部HTML: 文字;

    //@@{ 前缀:prefix }
    只读 前缀: 文字 | 空值;

    //@@{ 滚动条高度:scrollHeight }
    只读 滚动条高度: 数字;

    //@@{ 滚动条左:scrollLeft }
    滚动条左: 数字;

    //@@{ 滚动条顶:scrollTop }
    滚动条顶: 数字;

    //@@{ 滚动条宽度:scrollWidth }
    只读 滚动条宽度: 数字;

    //@@{ 标签名称:tagName }
    只读 标签名称: 文字;

    //@@{ 指定限位符:assignedSlot, HTML限位符元素_:HTMLSlotElement }
    只读 指定限位符: HTML限位符元素_ | 空值;

    //@@{ 限位符:slot }
    限位符: 文字;

    //@@{ 阴影根:shadowRoot, 影子根_:ShadowRoot }
    只读 阴影根: 影子根_ | 空值;

    //@@{ 取特性:getAttribute, 名字:name }
    取特性(名字: 文字): 文字 | 空值;

    //@@{ 取特性节点:getAttributeNode, 名字:name, 特性_:Attr }
    取特性节点(名字: 文字): 特性_;

    //@@{ 取特性节点NS:getAttributeNodeNS, 名称空间URI:namespaceURI, 本地名称:localName, 特性_:Attr }
    取特性节点NS(名称空间URI: 文字, 本地名称: 文字): 特性_;

    //@@{ 取特性NS:getAttributeNS, 名称空间URI:namespaceURI, 本地名称:localName }
    取特性NS(名称空间URI: 文字, 本地名称: 文字): 文字;

    //@@{ 取边界客户矩形:getBoundingClientRect, 客户矩形_:ClientRect }
    取边界客户矩形(): 客户矩形_;

    //@@{ 取客户矩形组:getClientRects, 客户矩形列表_:ClientRectList }
    取客户矩形组(): 客户矩形列表_;

    //@@{ 取元素按标签名称:getElementsByTagName, 元素列表标签名称映射_:ElementListTagNameMap, 名字:name }
    取元素按标签名称<K 扩展 键为 元素列表标签名称映射_>(名字: K): 元素列表标签名称映射_[K];

    //@@{ 名字:name, 节点列表的_:NodeListOf, 元素_:Element }
    取元素按标签名称(名字: 文字): 节点列表的_<元素_>;

    //@@{ 取元素按标签名称NS:getElementsByTagNameNS, 名称空间URI:namespaceURI, 本地名称:localName, HTML集合的_:HTMLCollectionOf, HTML元素_:HTMLElement }
    取元素按标签名称NS(名称空间URI: "http://www.w3.org/1999/xhtml", 本地名称: 文字): HTML集合的_<HTML元素_>;

    //@@{ 名称空间URI:namespaceURI, 本地名称:localName, HTML集合的_:HTMLCollectionOf, SVG元素_:SVGElement }
    取元素按标签名称NS(名称空间URI: "http://www.w3.org/2000/svg", 本地名称: 文字): HTML集合的_<SVG元素_>;

    //@@{ 名称空间URI:namespaceURI, 本地名称:localName, HTML集合的_:HTMLCollectionOf, 元素_:Element }
    取元素按标签名称NS(名称空间URI: 文字, 本地名称: 文字): HTML集合的_<元素_>;

    //@@{ 有特性:hasAttribute, 名字:name }
    有特性(名字: 文字): 真假;

    //@@{ 有特性NS:hasAttributeNS, 名称空间URI:namespaceURI, 本地名称:localName }
    有特性NS(名称空间URI: 文字, 本地名称: 文字): 真假;

    //@@{ ms取地区内容:msGetRegionContent, MS范围集合_:MSRangeCollection }
    ms取地区内容(): MS范围集合_;

    //@@{ ms取不转换界限:msGetUntransformedBounds, 客户矩形_:ClientRect }
    ms取不转换界限(): 客户矩形_;

    //@@{ ms匹配选择:msMatchesSelector, 选择:selectors }
    ms匹配选择(选择: 文字): 真假;

    //@@{ ms释放指针捕获:msReleasePointerCapture, 指针Id:pointerId }
    ms释放指针捕获(指针Id: 数字): 无值;

    //@@{ ms置指针捕获:msSetPointerCapture, 指针Id:pointerId }
    ms置指针捕获(指针Id: 数字): 无值;

    //@@{ ms缩放到:msZoomTo, 参数组:args, MS缩放选项_:MsZoomToOptions }
    ms缩放到(参数组: MS缩放选项_): 无值;

    //@@{ 释放指针捕获:releasePointerCapture, 指针Id:pointerId }
    释放指针捕获(指针Id: 数字): 无值;

    //@@{ 删除特性:removeAttribute, 限定名:qualifiedName }
    删除特性(限定名: 文字): 无值;

    //@@{ 删除特性节点:removeAttributeNode, 旧特性:oldAttr, 特性_:Attr }
    删除特性节点(旧特性: 特性_): 特性_;

    //@@{ 删除特性NS:removeAttributeNS, 名称空间URI:namespaceURI, 本地名称:localName }
    删除特性NS(名称空间URI: 文字, 本地名称: 文字): 无值;

    //@@{ 请求全屏:requestFullscreen }
    请求全屏(): 无值;

    //@@{ 请求指针锁:requestPointerLock }
    请求指针锁(): 无值; 

    //@@{ 置特性:setAttribute, 名字:name, 值:value }
    置特性(名字: 文字, 值: 文字): 无值;

    //@@{ 置特性节点:setAttributeNode, 新特性:newAttr, 特性_:Attr }
    置特性节点(新特性: 特性_): 特性_;

    //@@{ 置特性节点NS:setAttributeNodeNS, 新特性:newAttr, 特性_:Attr }
    置特性节点NS(新特性: 特性_): 特性_;

    //@@{ 置特性NS:setAttributeNS, 名称空间URI:namespaceURI, 限定名:qualifiedName, 值:value }
    置特性NS(名称空间URI: 文字, 限定名: 文字, 值: 文字): 无值;

    //@@{ 置指针捕获:setPointerCapture, 指针Id:pointerId }
    置指针捕获(指针Id: 数字): 无值;

    //@@{ webkit匹配选择:webkitMatchesSelector, 选择:selectors }
    webkit匹配选择(选择: 文字): 真假;

    //@@{ webkit请求全屏:webkitRequestFullscreen }
    webkit请求全屏(): 无值;

    //@@{ webkit请求全屏目:webkitRequestFullScreen }
    webkit请求全屏目(): 无值;

    //@@{ 取元素按类名称:getElementsByClassName, 类名:classNames, 节点列表的_:NodeListOf, 元素_:Element }
    取元素按类名称(类名: 文字): 节点列表的_<元素_>;

    //@@{ 匹配:matches, 选择:selector }
    匹配(选择: 文字): 真假;

    //@@{ 最近的:closest, 选择:selector, 元素_:Element }
    最近的(选择: 文字): 元素_ | 空值;

    //@@{ 滚动到视图:scrollIntoView, 参数:arg, 滚动到视图选项_:ScrollIntoViewOptions }
    滚动到视图(参数?: 真假 | 滚动到视图选项_): 无值;

    //@@{ 滚动:scroll, 选项:options, 滚动到选项_:ScrollToOptions }
    滚动(选项?: 滚动到选项_): 无值;

    滚动(x: 数字, y: 数字): 无值;

    //@@{ 滚动到:scrollTo, 选项:options, 滚动到选项_:ScrollToOptions }
    滚动到(选项?: 滚动到选项_): 无值;

    滚动到(x: 数字, y: 数字): 无值;

    //@@{ 滚动从:scrollBy, 选项:options, 滚动到选项_:ScrollToOptions }
    滚动从(选项?: 滚动到选项_): 无值;

    滚动从(x: 数字, y: 数字): 无值;

    //@@{ 插入相邻元素:insertAdjacentElement, 位置:position, 插入位置_:InsertPosition, 插入元素:insertedElement, 元素_:Element }
    插入相邻元素(位置: 插入位置_, 插入元素: 元素_): 元素_ | 空值;

    //@@{ 插入相邻HTML:insertAdjacentHTML, 哪里:where, 插入位置_:InsertPosition }
    插入相邻HTML(哪里: 插入位置_, html: 文字): 无值;

    //@@{ 插入相邻文本:insertAdjacentText, 哪里:where, 插入位置_:InsertPosition, 文本:text }
    插入相邻文本(哪里: 插入位置_, 文本: 文字): 无值;

    //@@{ 附加阴影:attachShadow, 阴影根初始化词典:shadowRootInitDict, 影子根初始化_:ShadowRootInit, 影子根_:ShadowRoot }
    附加阴影(阴影根初始化词典: 影子根初始化_): 影子根_;

    //@@{ 添加事件监听器:addEventListener, 元素事件映射_:ElementEventMap, 类型:type, 侦听器:listener, 元素_:Element, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 元素事件映射_>(类型: K, 侦听器: (本体: 元素_, ev: 元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 元素_: {

    //@@{ 原型:prototype, 元素_:Element }
    原型: 元素_;

    //@@{ 元素_:Element }
    新建(): 元素_;

};

//@@{ 错误事件_:ErrorEvent, 事件_:Event }
接口 错误事件_ 扩展 事件_ {

    //@@{ 列数:colno }
    只读 列数: 数字;

    //@@{ 错误:error }
    只读 错误: 任意;

    //@@{ 文件名:filename }
    只读 文件名: 文字;

    //@@{ 行数:lineno }
    只读 行数: 数字;

    //@@{ 消息:message }
    只读 消息: 文字;

    //@@{ 初始化错误事件:initErrorEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 消息参数:messageArg, 文件名参数:filenameArg, 行数参数:linenoArg }
    初始化错误事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 消息参数: 文字, 文件名参数: 文字, 行数参数: 数字): 无值;

}

声明 值量 错误事件_: {

    //@@{ 原型:prototype, 错误事件_:ErrorEvent }
    原型: 错误事件_;

    //@@{ 类型:type, 错误事件初始化词典:errorEventInitDict, 错误事件初始化_:ErrorEventInit, 错误事件_:ErrorEvent }
    新建(类型: 文字, 错误事件初始化词典?: 错误事件初始化_): 错误事件_;

};

//@@{ 事件_:Event }
接口 事件_ {

    //@@{ 冒泡:bubbles }
    只读 冒泡: 真假;

    //@@{ 可取消:cancelable }
    只读 可取消: 真假;

    //@@{ 取消冒泡:cancelBubble }
    取消冒泡: 真假;

    //@@{ 当前目标:currentTarget, 事件目标_:EventTarget }
    只读 当前目标: 事件目标_;

    //@@{ 默认阻止:defaultPrevented }
    只读 默认阻止: 真假;

    //@@{ 事件阶段:eventPhase }
    只读 事件阶段: 数字;

    //@@{ 是可信的:isTrusted }
    只读 是可信的: 真假;

    //@@{ 返回值:returnValue }
    返回值: 真假;

    //@@{ 源元素:srcElement, 元素_:Element }
    只读 源元素: 元素_ | 空值;

    //@@{ 目标:target, 事件目标_:EventTarget }
    只读 目标: 事件目标_;

    //@@{ 时间戳:timeStamp }
    只读 时间戳: 数字;

    //@@{ 类型:type }
    只读 类型: 文字;

    //@@{ 作用域:scoped }
    只读 作用域: 真假;

    //@@{ 初始化事件:initEvent, 事件类型参数:eventTypeArg, 可泡参数:canBubbleArg, 可取消参数:cancelableArg }
    初始化事件(事件类型参数: 文字, 可泡参数: 真假, 可取消参数: 真假): 无值;

    //@@{ 阻止默认:preventDefault }
    阻止默认(): 无值;

    //@@{ 立即停止传播:stopImmediatePropagation }
    立即停止传播(): 无值;

    //@@{ 停止传播:stopPropagation }
    停止传播(): 无值;

    //@@{ 深度路径:deepPath, 事件目标_:EventTarget }
    深度路径(): 事件目标_[];

    //@@{ __在_目标__:AT_TARGET }
    只读 __在_目标__: 数字;

    //@@{ __冒泡_阶段__:BUBBLING_PHASE }
    只读 __冒泡_阶段__: 数字;

    //@@{ __捕捉_阶段__:CAPTURING_PHASE }
    只读 __捕捉_阶段__: 数字;

}

声明 值量 事件_: {

    //@@{ 原型:prototype, 事件_:Event }
    原型: 事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 事件初始化_:EventInit, 事件_:Event }
    新建(类型参数: 文字, 事件初始化词典?: 事件初始化_): 事件_;

    //@@{ __在_目标__:AT_TARGET }
    只读 __在_目标__: 数字;

    //@@{ __冒泡_阶段__:BUBBLING_PHASE }
    只读 __冒泡_阶段__: 数字;

    //@@{ __捕捉_阶段__:CAPTURING_PHASE }
    只读 __捕捉_阶段__: 数字;

};

//@@{ 事件目标_:EventTarget }
接口 事件目标_ {

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 选项:options, 添加事件监听器选项_:AddEventListenerOptions }
    添加事件监听器(类型: 文字, 侦听器?: 事件侦听器或事件侦听器对象_, 选项?: 真假 | 添加事件监听器选项_): 无值;

    //@@{ 调度事件:dispatchEvent, 事件:evt, 事件_:Event }
    调度事件(事件: 事件_): 真假;

    //@@{ 删除事件监听器:removeEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 选项:options, 事件监听器选项_:EventListenerOptions }
    删除事件监听器(类型: 文字, 侦听器?: 事件侦听器或事件侦听器对象_, 选项?: 真假 | 事件监听器选项_): 无值;

}

声明 值量 事件目标_: {

    //@@{ 原型:prototype, 事件目标_:EventTarget }
    原型: 事件目标_;

    //@@{ 事件目标_:EventTarget }
    新建(): 事件目标_;

};

//@@{ 扩展_片段_深度_:EXT_frag_depth }
接口 扩展_片段_深度_ {

}

声明 值量 扩展_片段_深度_: {

    //@@{ 原型:prototype, 扩展_片段_深度_:EXT_frag_depth }
    原型: 扩展_片段_深度_;

    //@@{ 扩展_片段_深度_:EXT_frag_depth }
    新建(): 扩展_片段_深度_;

};

//@@{ 扩展_纹理_过滤器_各向异性_:EXT_texture_filter_anisotropic }
接口 扩展_纹理_过滤器_各向异性_ {

    //@@{ __最大_纹理_最大_各向异性_扩展__:MAX_TEXTURE_MAX_ANISOTROPY_EXT }
    只读 __最大_纹理_最大_各向异性_扩展__: 数字;

    //@@{ __纹理_最大_各向异性_扩展__:TEXTURE_MAX_ANISOTROPY_EXT }
    只读 __纹理_最大_各向异性_扩展__: 数字;

}

声明 值量 扩展_纹理_过滤器_各向异性_: {

    //@@{ 原型:prototype, 扩展_纹理_过滤器_各向异性_:EXT_texture_filter_anisotropic }
    原型: 扩展_纹理_过滤器_各向异性_;

    //@@{ 扩展_纹理_过滤器_各向异性_:EXT_texture_filter_anisotropic }
    新建(): 扩展_纹理_过滤器_各向异性_;

    //@@{ __最大_纹理_最大_各向异性_扩展__:MAX_TEXTURE_MAX_ANISOTROPY_EXT }
    只读 __最大_纹理_最大_各向异性_扩展__: 数字;

    //@@{ __纹理_最大_各向异性_扩展__:TEXTURE_MAX_ANISOTROPY_EXT }
    只读 __纹理_最大_各向异性_扩展__: 数字;

};

//@@{ 扩展脚本API组_:ExtensionScriptApis }
接口 扩展脚本API组_ {

    //@@{ 扩展Id到短Id:extensionIdToShortId, 扩展Id:extensionId }
    扩展Id到短Id(扩展Id: 文字): 数字;

    //@@{ 火狐扩展API遥测:fireExtensionApiTelemetry, 函数名:functionName, 是成功的:isSucceeded, 是支持的:isSupported }
    火狐扩展API遥测(函数名: 文字, 是成功的: 真假, 是支持的: 真假): 无值;

    //@@{ 泛型函数:genericFunction, 路由地址:routerAddress, 参数:parameters, 回调Id:callbackId }
    泛型函数(路由地址: 任意, 参数?: 文字, 回调Id?: 数字): 无值;

    //@@{ 泛型同步函数:genericSynchronousFunction, 函数Id:functionId, 参数:parameters }
    泛型同步函数(函数Id: 数字, 参数?: 文字): 文字;

    //@@{ 取扩展Id:getExtensionId }
    取扩展Id(): 文字;

    //@@{ 注册泛型函数回调处理程序:registerGenericFunctionCallbackHandler, 回调处理程序:callbackHandler }
    注册泛型函数回调处理程序(回调处理程序: 任意): 无值;

    //@@{ 注册泛型持续的回调处理程序:registerGenericPersistentCallbackHandler, 回调处理程序:callbackHandler }
    注册泛型持续的回调处理程序(回调处理程序: 任意): 无值;

}

声明 值量 扩展脚本API组_: {

    //@@{ 原型:prototype, 扩展脚本API组_:ExtensionScriptApis }
    原型: 扩展脚本API组_;

    //@@{ 扩展脚本API组_:ExtensionScriptApis }
    新建(): 扩展脚本API组_;

};

//@@{ 外部_:External }
接口 外部_ {

}

声明 值量 外部_: {

    //@@{ 原型:prototype, 外部_:External }
    原型: 外部_;

    //@@{ 外部_:External }
    新建(): 外部_;

};

//@@{ 文件_:File, 二进制对象_:Blob }
接口 文件_ 扩展 二进制对象_ {

    //@@{ 最后修改日期:lastModifiedDate }
    只读 最后修改日期: 任意;

    //@@{ 名字:name }
    只读 名字: 文字;

    //@@{ webkit相对路径:webkitRelativePath }
    只读 webkit相对路径: 文字;

}

声明 值量 文件_: {

    //@@{ 原型:prototype, 文件_:File }
    原型: 文件_;

    //@@{ 部分:parts, 数组缓冲区_:ArrayBuffer, 数组缓冲区视图_:ArrayBufferView, 二进制对象_:Blob, 文件名:filename, 属性:properties, 文件属性包_:FilePropertyBag, 文件_:File }
    新建 (部分: (数组缓冲区_ | 数组缓冲区视图_ | 二进制对象_ | 文字)[], 文件名: 文字, 属性?: 文件属性包_): 文件_;

};

//@@{ 文件列表_:FileList }
接口 文件列表_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 项目:item, 索引:index, 文件_:File }
    项目(索引: 数字): 文件_;

    //@@{ 索引:index, 文件_:File }
    [索引: 数字]: 文件_;

}

声明 值量 文件列表_: {

    //@@{ 原型:prototype, 文件列表_:FileList }
    原型: 文件列表_;

    //@@{ 文件列表_:FileList }
    新建(): 文件列表_;

};

//@@{ 文件阅读器_:FileReader, 事件目标_:EventTarget, MS基读者_:MSBaseReader }
接口 文件阅读器_ 扩展 事件目标_, MS基读者_ {

    //@@{ 错误:error, 文档错误_:DOMError }
    只读 错误: 文档错误_;

    //@@{ 读转为数组缓冲区:readAsArrayBuffer, 二进制对象:blob, 二进制对象_:Blob }
    读转为数组缓冲区(二进制对象: 二进制对象_): 无值;

    //@@{ 读转为二进制字符串:readAsBinaryString, 二进制对象:blob, 二进制对象_:Blob }
    读转为二进制字符串(二进制对象: 二进制对象_): 无值;

    //@@{ 读转为数据URL:readAsDataURL, 二进制对象:blob, 二进制对象_:Blob }
    读转为数据URL(二进制对象: 二进制对象_): 无值; 

    //@@{ 读转为文本:readAsText, 二进制对象:blob, 二进制对象_:Blob, 编码:encoding }
    读转为文本(二进制对象: 二进制对象_, 编码?: 文字): 无值;

    //@@{ 添加事件监听器:addEventListener, MS基读者事件映射_:MSBaseReaderEventMap, 类型:type, 侦听器:listener, 文件阅读器_:FileReader, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 MS基读者事件映射_>(类型: K, 侦听器: (本体: 文件阅读器_, ev: MS基读者事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 文件阅读器_: {

    //@@{ 原型:prototype, 文件阅读器_:FileReader }
    原型: 文件阅读器_;

    //@@{ 文件阅读器_:FileReader }
    新建(): 文件阅读器_;

};

//@@{ 焦点事件_:FocusEvent, UI事件_:UIEvent }
接口 焦点事件_ 扩展 UI事件_ {

    //@@{ 相关目标:relatedTarget, 事件目标_:EventTarget }
    只读 相关目标: 事件目标_;

    //@@{ 初始化焦点事件:initFocusEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 视图参数:viewArg, 窗口_:Window, 细节参数:detailArg, 相关目标参数:relatedTargetArg, 事件目标_:EventTarget }
    初始化焦点事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 视图参数: 窗口_, 细节参数: 数字, 相关目标参数: 事件目标_): 无值;

}

声明 值量 焦点事件_: {

    //@@{ 原型:prototype, 焦点事件_:FocusEvent }
    原型: 焦点事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 焦点事件初始化_:FocusEventInit, 焦点事件_:FocusEvent }
    新建(类型参数: 文字, 事件初始化词典?: 焦点事件初始化_): 焦点事件_;

};

//@@{ 焦点导航事件_:FocusNavigationEvent, 事件_:Event }
接口 焦点导航事件_ 扩展 事件_ {

    //@@{ 导航原因:navigationReason, 导航原因_:NavigationReason }
    只读 导航原因: 导航原因_;

    //@@{ 起源高度:originHeight }
    只读 起源高度: 数字;

    //@@{ 起源左:originLeft }
    只读 起源左: 数字;

    //@@{ 起源顶:originTop }
    只读 起源顶: 数字;

    //@@{ 起源宽度:originWidth }
    只读 起源宽度: 数字;

    //@@{ 请求焦点:requestFocus }
    请求焦点(): 无值;

}

声明 值量 焦点导航事件_: {

    //@@{ 原型:prototype, 焦点导航事件_:FocusNavigationEvent }
    原型: 焦点导航事件_;

    //@@{ 类型:type, 事件初始化词典:eventInitDict, 焦点导航事件初始化_:FocusNavigationEventInit, 焦点导航事件_:FocusNavigationEvent }
    新建(类型: 文字, 事件初始化词典?: 焦点导航事件初始化_): 焦点导航事件_;

};

//@@{ 表单数据_:FormData }
接口 表单数据_ {

    //@@{ 附加:append, 名字:name, 值:value, 二进制对象_:Blob, 文件名称:fileName }
    附加(名字: 文字, 值: 文字 | 二进制对象_, 文件名称?: 文字): 无值;

    //@@{ 删除:delete, 名字:name }
    删除(名字: 文字): 无值;

    //@@{ 获取:get, 名字:name, 表单数据输入值_:FormDataEntryValue }
    获取(名字: 文字): 表单数据输入值_ | 空值;

    //@@{ 取所有:getAll, 名字:name, 表单数据输入值_:FormDataEntryValue }
    取所有(名字: 文字): 表单数据输入值_[];

    //@@{ 存在:has, 名字:name }
    存在(名字: 文字): 真假;

    //@@{ 设置:set, 名字:name, 值:value, 二进制对象_:Blob, 文件名称:fileName }
    设置(名字: 文字, 值: 文字 | 二进制对象_, 文件名称?: 文字): 无值;

}

声明 值量 表单数据_: {

    //@@{ 原型:prototype, 表单数据_:FormData }
    原型: 表单数据_;

    //@@{ 表单:form, HTML表单元素_:HTMLFormElement, 表单数据_:FormData }
    新建 (表单?: HTML表单元素_): 表单数据_;

};

//@@{ 增加节点_:GainNode, 音频节点_:AudioNode }
接口 增加节点_ 扩展 音频节点_ {

    //@@{ 增加:gain, 音频参数_:AudioParam }
    只读 增加: 音频参数_;

}

声明 值量 增加节点_: {

    //@@{ 原型:prototype, 增加节点_:GainNode }
    原型: 增加节点_;

    //@@{ 增加节点_:GainNode }
    新建(): 增加节点_;

};

//@@{ 手柄_:Gamepad }
接口 手柄_ {

    //@@{ 轴:axes }
    只读 轴: 数字[];

    //@@{ 按钮:buttons, 手柄按钮_:GamepadButton }
    只读 按钮: 手柄按钮_[];

    //@@{ 连接:connected }
    只读 连接: 真假;

    只读 id: 文字;

    //@@{ 索引:index }
    只读 索引: 数字;

    //@@{ 映射:mapping }
    只读 映射: 文字;

    //@@{ 时间戳:timestamp }
    只读 时间戳: 数字;

}

声明 值量 手柄_: {

    //@@{ 原型:prototype, 手柄_:Gamepad }
    原型: 手柄_;

    //@@{ 手柄_:Gamepad }
    新建(): 手柄_;

};

//@@{ 手柄按钮_:GamepadButton }
接口 手柄按钮_ {

    //@@{ 按下:pressed }
    只读 按下: 真假;

    //@@{ 值:value }
    只读 值: 数字;

}

声明 值量 手柄按钮_: {

    //@@{ 原型:prototype, 手柄按钮_:GamepadButton }
    原型: 手柄按钮_;

    //@@{ 手柄按钮_:GamepadButton }
    新建(): 手柄按钮_;

};

//@@{ 手柄事件_:GamepadEvent, 事件_:Event }
接口 手柄事件_ 扩展 事件_ {

    //@@{ 手柄:gamepad, 手柄_:Gamepad }
    只读 手柄: 手柄_;

}

声明 值量 手柄事件_: {

    //@@{ 原型:prototype, 手柄事件_:GamepadEvent }
    原型: 手柄事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 手柄事件初始化_:GamepadEventInit, 手柄事件_:GamepadEvent }
    新建(类型参数: 文字, 事件初始化词典?: 手柄事件初始化_): 手柄事件_;

};

//@@{ 地理位置_:Geolocation }
接口 地理位置_ {

    //@@{ 清除观察:clearWatch, 观察Id:watchId }
    清除观察(观察Id: 数字): 无值;

    //@@{ 取当前位置:getCurrentPosition, 成功回调:successCallback, 位置回调_:PositionCallback, 错误回调:errorCallback, 位置错误回调_:PositionErrorCallback, 选项:options, 位置选项_:PositionOptions }
    取当前位置(成功回调: 位置回调_, 错误回调?: 位置错误回调_, 选项?: 位置选项_): 无值;

    //@@{ 观察位置:watchPosition, 成功回调:successCallback, 位置回调_:PositionCallback, 错误回调:errorCallback, 位置错误回调_:PositionErrorCallback, 选项:options, 位置选项_:PositionOptions }
    观察位置(成功回调: 位置回调_, 错误回调?: 位置错误回调_, 选项?: 位置选项_): 数字;

}

声明 值量 地理位置_: {

    //@@{ 原型:prototype, 地理位置_:Geolocation }
    原型: 地理位置_;

    //@@{ 地理位置_:Geolocation }
    新建(): 地理位置_;

};

//@@{ 哈希改变事件_:HashChangeEvent, 事件_:Event }
接口 哈希改变事件_ 扩展 事件_ {

    //@@{ 新URL:newURL }
    只读 新URL: 文字 | 空值;

    //@@{ 旧URL:oldURL }
    只读 旧URL: 文字 | 空值;

}

声明 值量 哈希改变事件_: {

    //@@{ 原型:prototype, 哈希改变事件_:HashChangeEvent }
    原型: 哈希改变事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 哈希改变事件初始化_:HashChangeEventInit, 哈希改变事件_:HashChangeEvent }
    新建(类型参数: 文字, 事件初始化词典?: 哈希改变事件初始化_): 哈希改变事件_;

};

//@@{ 报头_:Headers }
接口 报头_ {

    //@@{ 附加:append, 名字:name, 值:value }
    附加(名字: 文字, 值: 文字): 无值;

    //@@{ 删除:delete, 名字:name }
    删除(名字: 文字): 无值;

    //@@{ 循环执行:forEach, 回调:callback, 循环执行回调_:ForEachCallback }
    循环执行(回调: 循环执行回调_): 无值;

    //@@{ 获取:get, 名字:name }
    获取(名字: 文字): 文字 | 空值;

    //@@{ 存在:has, 名字:name }
    存在(名字: 文字): 真假;

    //@@{ 设置:set, 名字:name, 值:value }
    设置(名字: 文字, 值: 文字): 无值;

}

声明 值量 报头_: {

    //@@{ 原型:prototype, 报头_:Headers }
    原型: 报头_;

    //@@{ 初始化:init, 报头_:Headers }
    新建(初始化?: 报头_ | 文字[][] | 实例): 报头_;

};

//@@{ 历史_:History }
接口 历史_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 状态:state }
    只读 状态: 任意;

    //@@{ 滚动恢复:scrollRestoration, 滚动恢复_:ScrollRestoration }
    滚动恢复: 滚动恢复_;

    //@@{ 退回:back }
    退回(): 无值;

    //@@{ 向前:forward }
    向前(): 无值;

    //@@{ 转到:go, 增量:delta }
    转到(增量?: 数字): 无值;

    //@@{ 压入状态:pushState, 数据:data, 标题:title }
    压入状态(数据: 任意, 标题: 文字, url?: 文字 | 空值): 无值;

    //@@{ 替换状态:replaceState, 数据:data, 标题:title }
    替换状态(数据: 任意, 标题: 文字, url?: 文字 | 空值): 无值;

}

声明 值量 历史_: {

    //@@{ 原型:prototype, 历史_:History }
    原型: 历史_;

    //@@{ 历史_:History }
    新建(): 历史_;

};

//@@{ HTML所有集合_:HTMLAllCollection }
接口 HTML所有集合_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 项目:item, 名称或索引:nameOrIndex, HTML集合_:HTMLCollection, 元素_:Element }
    项目(名称或索引?: 文字): HTML集合_ | 元素_ | 空值;

    //@@{ 命名项目:namedItem, 名字:name, HTML集合_:HTMLCollection, 元素_:Element }
    命名项目(名字: 文字): HTML集合_ | 元素_ | 空值;

    //@@{ 索引:index, 元素_:Element }
    [索引: 数字]: 元素_;

}

声明 值量 HTML所有集合_: {

    //@@{ 原型:prototype, HTML所有集合_:HTMLAllCollection }
    原型: HTML所有集合_;

    //@@{ HTML所有集合_:HTMLAllCollection }
    新建(): HTML所有集合_;

};

//@@{ HTML超链接元素_:HTMLAnchorElement, HTML元素_:HTMLElement }
接口 HTML超链接元素_ 扩展 HTML元素_ {

    /**
     * Sets or retrieves the character set used to encode the object.
     */

    //@@{ 字符集:charset }
    字符集: 文字;

    /**
     * Sets or retrieves the coordinates of the object.
     */

    //@@{ 坐标:coords }
    坐标: 文字;

    //@@{ 下载:download }
    下载: 文字;

    /**
     * Contains the anchor portion of the URL including the hash sign (#).
     */

    //@@{ 哈希:hash }
    哈希: 文字;

    /**
     * Contains the hostname and port values of the URL.
     */

    //@@{ 主机:host }
    主机: 文字;

    /**
     * Contains the hostname of a URL.
     */

    //@@{ 主机名:hostname }
    主机名: 文字;

    /**
     * Sets or retrieves a destination URL or an anchor point.
     */

    //@@{ 目标URL:href }
    目标URL: 文字;

    /**
     * Sets or retrieves the language code of the object.
     */

    //@@{ 语言代码:hreflang }
    语言代码: 文字;

    //@@{ 方法组_:Methods }
    方法组_: 文字;

    //@@{ mime类型:mimeType }
    只读 mime类型: 文字;

    /**
     * Sets or retrieves the shape of the object.
     */

    //@@{ 名字:name }
    名字: 文字;

    //@@{ 名字属性:nameProp }
    只读 名字属性: 文字;

    /**
     * Contains the pathname of the URL.
     */

    //@@{ 路径名:pathname }
    路径名: 文字;

    /**
     * Sets or retrieves the port number associated with a URL.
     */

    //@@{ 端口:port }
    端口: 文字;

    /**
     * Contains the protocol of the URL.
     */

    //@@{ 协议:protocol }
    协议: 文字;

    //@@{ 协议长:protocolLong }
    只读 协议长: 文字;

    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     */

    //@@{ 当前与目标文档联系:rel }
    当前与目标文档联系: 文字;

    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     */

    //@@{ 目标与当前文档联系:rev }
    目标与当前文档联系: 文字;

    /**
     * Sets or retrieves the substring of the href property that follows the question mark.
     */

    //@@{ 搜索:search }
    搜索: 文字;

    /**
     * Sets or retrieves the shape of the object.
     */

    //@@{ 形状:shape }
    形状: 文字;

    /**
     * Sets or retrieves the window or frame at which to target content.
     */

    //@@{ 目标:target }
    目标: 文字;

    /**
     * Retrieves or sets the text of the object as a string.
     */

    //@@{ 文本:text }
    文本: 文字;

    //@@{ 类型:type }
    类型: 文字;

    urn: 文字;

    /**
     * Returns a string representation of an object.
     */

    //@@{ 转为文字:toString }
    转为文字(): 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML超链接元素_:HTMLAnchorElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML超链接元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML超链接元素_: {

    //@@{ 原型:prototype, HTML超链接元素_:HTMLAnchorElement }
    原型: HTML超链接元素_;

    //@@{ HTML超链接元素_:HTMLAnchorElement }
    新建(): HTML超链接元素_;

};

//@@{ HTML应用程序元素_:HTMLAppletElement, HTML元素_:HTMLElement }
接口 HTML应用程序元素_ 扩展 HTML元素_ {

    //@@{ 对齐:align }
    对齐: 文字;

    /**
     * Sets or retrieves a text alternative to the graphic.
     */

    //@@{ 描述:alt }
    描述: 文字;

    /**
     * Gets or sets the optional alternative HTML script to execute if the object fails to load.
     */

    //@@{ 描述Html:altHtml }
    描述Html: 文字;

    /**
     * Sets or retrieves a character string that can be used to implement your own archive functionality for the object.
     */

    //@@{ 存档:archive }
    存档: 文字;

    /**
     * Retrieves a string of the URL where the object tag can be found. This is often the href of the document that the object is in, or the value set by a base element.
     */

    //@@{ 基链接:BaseHref }
    只读 基链接: 文字;

    //@@{ 边框:border }
    边框: 文字;

    //@@{ 代码:code }
    代码: 文字;

    /**
     * Sets or retrieves the URL of the component.
     */

    //@@{ 代码基:codeBase }
    代码基: 文字;

    /**
     * Sets or retrieves the Internet media type for the code associated with the object.
     */

    //@@{ 代码类型:codeType }
    代码类型: 文字;

    /**
     * Address of a pointer to the document this page or frame contains. If there is no document, then null will be returned.
     */

    //@@{ 文档内容:contentDocument, 文档_:Document }
    只读 文档内容: 文档_;

    /**
     * Sets or retrieves the URL that references the data of the object.
     */

    //@@{ 数据:data }
    数据: 文字;

    /**
     * Sets or retrieves a character string that can be used to implement your own declare functionality for the object.
     */

    //@@{ 声明:declare }
    声明: 真假;

    //@@{ 表单:form, HTML表单元素_:HTMLFormElement }
    只读 表单: HTML表单元素_ | 空值;

    /**
     * Sets or retrieves the height of the object.
     */

    //@@{ 高度:height }
    高度: 文字;

    //@@{ 水平间距:hspace }
    水平间距: 数字;

    /**
     * Sets or retrieves the shape of the object.
     */

    //@@{ 名字:name }
    名字: 文字;

    //@@{ 对象:object }
    对象: 文字 | 空值;

    /**
     * Sets or retrieves a message to be displayed while an object is loading.
     */

    //@@{ 备用:standby }
    备用: 文字;

    /**
     * Returns the content type of the object.
     */

    //@@{ 类型:type }
    类型: 文字;

    /**
     * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
     */

    //@@{ 使用映射:useMap }
    使用映射: 文字;

    //@@{ 垂直间距:vspace }
    垂直间距: 数字;

    //@@{ 宽度:width }
    宽度: 数字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML应用程序元素_:HTMLAppletElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML应用程序元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML应用程序元素_: {

    //@@{ 原型:prototype, HTML应用程序元素_:HTMLAppletElement }
    原型: HTML应用程序元素_;

    //@@{ HTML应用程序元素_:HTMLAppletElement }
    新建(): HTML应用程序元素_;

};

//@@{ HTML区域元素_:HTMLAreaElement, HTML元素_:HTMLElement }
接口 HTML区域元素_ 扩展 HTML元素_ {

    /**
     * Sets or retrieves a text alternative to the graphic.
     */

    //@@{ 描述:alt }
    描述: 文字;

    /**
     * Sets or retrieves the coordinates of the object.
     */

    //@@{ 坐标:coords }
    坐标: 文字;

    //@@{ 下载:download }
    下载: 文字;

    /**
     * Sets or retrieves the subsection of the href property that follows the number sign (#).
     */

    //@@{ 哈希:hash }
    哈希: 文字;

    /**
     * Sets or retrieves the hostname and port number of the location or URL.
     */

    //@@{ 主机:host }
    主机: 文字;

    /**
     * Sets or retrieves the host name part of the location or URL.
     */

    //@@{ 主机名:hostname }
    主机名: 文字;

    /**
     * Sets or retrieves a destination URL or an anchor point.
     */

    //@@{ 目标URL:href }
    目标URL: 文字;

    /**
     * Sets or gets whether clicks in this region cause action.
     */

    //@@{ 没有目标URL:noHref }
    没有目标URL: 真假;

    /**
     * Sets or retrieves the file name or path specified by the object.
     */

    //@@{ 路径名:pathname }
    路径名: 文字;

    /**
     * Sets or retrieves the port number associated with a URL.
     */

    //@@{ 端口:port }
    端口: 文字;

    /**
     * Sets or retrieves the protocol portion of a URL.
     */

    //@@{ 协议:protocol }
    协议: 文字;

    //@@{ 当前与目标文档联系:rel }
    当前与目标文档联系: 文字;

    /**
     * Sets or retrieves the substring of the href property that follows the question mark.
     */

    //@@{ 搜索:search }
    搜索: 文字;

    /**
     * Sets or retrieves the shape of the object.
     */

    //@@{ 形状:shape }
    形状: 文字;

    /**
     * Sets or retrieves the window or frame at which to target content.
     */

    //@@{ 目标:target }
    目标: 文字;

    /**
     * Returns a string representation of an object.
     */

    //@@{ 转为文字:toString }
    转为文字(): 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML区域元素_:HTMLAreaElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML区域元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML区域元素_: {

    //@@{ 原型:prototype, HTML区域元素_:HTMLAreaElement }
    原型: HTML区域元素_;

    //@@{ HTML区域元素_:HTMLAreaElement }
    新建(): HTML区域元素_;

};

//@@{ HTML区域集合_:HTMLAreasCollection, HTML集合基_:HTMLCollectionBase }
接口 HTML区域集合_ 扩展 HTML集合基_ {

}

声明 值量 HTML区域集合_: {

    //@@{ 原型:prototype, HTML区域集合_:HTMLAreasCollection }
    原型: HTML区域集合_;

    //@@{ HTML区域集合_:HTMLAreasCollection }
    新建(): HTML区域集合_;

};

//@@{ HTML音频元素_:HTMLAudioElement, HTML媒体元素_:HTMLMediaElement }
接口 HTML音频元素_ 扩展 HTML媒体元素_ {

    //@@{ 添加事件监听器:addEventListener, HTML媒体元素事件映射_:HTMLMediaElementEventMap, 类型:type, 侦听器:listener, HTML音频元素_:HTMLAudioElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML媒体元素事件映射_>(类型: K, 侦听器: (本体: HTML音频元素_, ev: HTML媒体元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML音频元素_: {

    //@@{ 原型:prototype, HTML音频元素_:HTMLAudioElement }
    原型: HTML音频元素_;

    //@@{ HTML音频元素_:HTMLAudioElement }
    新建(): HTML音频元素_;

};

//@@{ HTML基元素_:HTMLBaseElement, HTML元素_:HTMLElement }
接口 HTML基元素_ 扩展 HTML元素_ {

    /**
     * Gets or sets the baseline URL on which relative links are based.
     */

    //@@{ 目标URL:href }
    目标URL: 文字;

    /**
     * Sets or retrieves the window or frame at which to target content.
     */

    //@@{ 目标:target }
    目标: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML基元素_:HTMLBaseElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML基元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML基元素_: {

    //@@{ 原型:prototype, HTML基元素_:HTMLBaseElement }
    原型: HTML基元素_;

    //@@{ HTML基元素_:HTMLBaseElement }
    新建(): HTML基元素_;

};

//@@{ HTML基字体元素_:HTMLBaseFontElement, HTML元素_:HTMLElement, DOML2弃用颜色属性_:DOML2DeprecatedColorProperty }
接口 HTML基字体元素_ 扩展 HTML元素_, DOML2弃用颜色属性_ {

    /**
     * Sets or retrieves the current typeface family.
     */

    //@@{ 家族:face }
    家族: 文字;

    /**
     * Sets or retrieves the font size of the object.
     */

    //@@{ 大小:size }
    大小: 数字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML基字体元素_:HTMLBaseFontElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML基字体元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML基字体元素_: {

    //@@{ 原型:prototype, HTML基字体元素_:HTMLBaseFontElement }
    原型: HTML基字体元素_;

    //@@{ HTML基字体元素_:HTMLBaseFontElement }
    新建(): HTML基字体元素_;

};

//@@{ HTML体元素事件映射_:HTMLBodyElementEventMap, HTML元素事件映射_:HTMLElementEventMap }
接口 HTML体元素事件映射_ 扩展 HTML元素事件映射_ {

    //@@{ "在打印":"afterprint", 事件_:Event }
    "在打印": 事件_;

    //@@{ "将打印":"beforeprint", 事件_:Event }
    "将打印": 事件_;

    //@@{ "将卸载":"beforeunload", 将卸载事件_:BeforeUnloadEvent }
    "将卸载": 将卸载事件_;

    //@@{ "失去焦点":"blur", 焦点事件_:FocusEvent }
    "失去焦点": 焦点事件_;

    //@@{ "错误":"error", 错误事件_:ErrorEvent }
    "错误": 错误事件_;

    //@@{ "焦点":"focus", 焦点事件_:FocusEvent }
    "焦点": 焦点事件_;

    //@@{ "哈希改变":"hashchange", 哈希改变事件_:HashChangeEvent }
    "哈希改变": 哈希改变事件_;

    //@@{ "加载":"load", 事件_:Event }
    "加载": 事件_;

    //@@{ "消息":"message", 消息事件_:MessageEvent }
    "消息": 消息事件_;

    //@@{ "离线":"offline", 事件_:Event }
    "离线": 事件_;

    //@@{ "在线":"online", 事件_:Event }
    "在线": 事件_;

    //@@{ "方向改变":"orientationchange", 事件_:Event }
    "方向改变": 事件_;

    //@@{ "页面隐藏":"pagehide", 页面过渡事件_:PageTransitionEvent }
    "页面隐藏": 页面过渡事件_;

    //@@{ "页面显示":"pageshow", 页面过渡事件_:PageTransitionEvent }
    "页面显示": 页面过渡事件_;

    //@@{ "退回":"popstate", 回退状态事件:PopStateEvent }
    "退回": 回退状态事件;

    //@@{ "调整":"resize", UI事件_:UIEvent }
    "调整": UI事件_;

    //@@{ "滚动":"scroll", UI事件_:UIEvent }
    "滚动": UI事件_;

    //@@{ "存储":"storage", 存储事件_:StorageEvent }
    "存储": 存储事件_;

    //@@{ "卸载":"unload", 事件_:Event }
    "卸载": 事件_;

}

//@@{ HTML体元素_:HTMLBodyElement, HTML元素_:HTMLElement }
接口 HTML体元素_ 扩展 HTML元素_ {

    //@@{ 活动链接颜色:aLink }
    活动链接颜色: 任意;

    //@@{ 背景:background }
    背景: 文字;

    //@@{ 背景颜色:bgColor }
    背景颜色: 任意;

    //@@{ 背景属性:bgProperties }
    背景属性: 文字;

    //@@{ 链接:link }
    链接: 任意;

    //@@{ 不换行:noWrap }
    不换行: 真假;

    //@@{ 正在在打印:onafterprint, HTML体元素_:HTMLBodyElement, 事件_:Event }
    正在在打印: (本体: HTML体元素_, 正在在打印: 事件_) => 任意;

    //@@{ 正在将打印:onbeforeprint, HTML体元素_:HTMLBodyElement, 事件_:Event }
    正在将打印: (本体: HTML体元素_, ev: 事件_) => 任意;

    //@@{ 正在将卸载:onbeforeunload, HTML体元素_:HTMLBodyElement, 将卸载事件_:BeforeUnloadEvent }
    正在将卸载: (本体: HTML体元素_, ev: 将卸载事件_) => 任意;

    //@@{ 正在哈希改变:onhashchange, HTML体元素_:HTMLBodyElement, 哈希改变事件_:HashChangeEvent }
    正在哈希改变: (本体: HTML体元素_, ev: 哈希改变事件_) => 任意;

    //@@{ 正在消息:onmessage, HTML体元素_:HTMLBodyElement, 消息事件_:MessageEvent }
    正在消息: (本体: HTML体元素_, ev: 消息事件_) => 任意;

    //@@{ 正在离线:onoffline, HTML体元素_:HTMLBodyElement, 事件_:Event }
    正在离线: (本体: HTML体元素_, ev: 事件_) => 任意;

    //@@{ 正在在线:ononline, HTML体元素_:HTMLBodyElement, 事件_:Event }
    正在在线: (本体: HTML体元素_, ev: 事件_) => 任意;

    //@@{ 正在方向改变:onorientationchange, HTML体元素_:HTMLBodyElement, 事件_:Event }
    正在方向改变: (本体: HTML体元素_, ev: 事件_) => 任意;

    //@@{ 正在页面隐藏:onpagehide, HTML体元素_:HTMLBodyElement, 页面过渡事件_:PageTransitionEvent }
    正在页面隐藏: (本体: HTML体元素_, ev: 页面过渡事件_) => 任意;

    //@@{ 正在页面显示:onpageshow, HTML体元素_:HTMLBodyElement, 页面过渡事件_:PageTransitionEvent }
    正在页面显示: (本体: HTML体元素_, ev: 页面过渡事件_) => 任意;

    //@@{ 正在退回:onpopstate, HTML体元素_:HTMLBodyElement, 回退状态事件:PopStateEvent }
    正在退回: (本体: HTML体元素_, ev: 回退状态事件) => 任意;

    //@@{ 正在调整:onresize, HTML体元素_:HTMLBodyElement, UI事件_:UIEvent }
    正在调整: (本体: HTML体元素_, ev: UI事件_) => 任意;

    //@@{ 正在存储:onstorage, HTML体元素_:HTMLBodyElement, 存储事件_:StorageEvent }
    正在存储: (本体: HTML体元素_, ev: 存储事件_) => 任意;

    //@@{ 正在卸载:onunload, HTML体元素_:HTMLBodyElement, 事件_:Event }
    正在卸载: (本体: HTML体元素_, ev: 事件_) => 任意;

    //@@{ 文本:text }
    文本: 任意;

    //@@{ 已访问连接:vLink }
    已访问连接: 任意;

    //@@{ 添加事件监听器:addEventListener, HTML体元素事件映射_:HTMLBodyElementEventMap, 类型:type, 侦听器:listener, HTML体元素_:HTMLBodyElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML体元素事件映射_>(类型: K, 侦听器: (本体: HTML体元素_, ev: HTML体元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML体元素_: {

    //@@{ 原型:prototype, HTML体元素_:HTMLBodyElement }
    原型: HTML体元素_;

    //@@{ HTML体元素_:HTMLBodyElement }
    新建(): HTML体元素_;

};

//@@{ HTML换行元素_:HTMLBRElement, HTML元素_:HTMLElement }
接口 HTML换行元素_ 扩展 HTML元素_ {

    /**
     * Sets or retrieves the side on which floating objects are not to be positioned when any IHTMLBlockElement is inserted into the document.
     */

    //@@{ 清除:clear }
    清除: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML换行元素_:HTMLBRElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML换行元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML换行元素_: {

    //@@{ 原型:prototype, HTML换行元素_:HTMLBRElement }
    原型: HTML换行元素_;

    //@@{ HTML换行元素_:HTMLBRElement }
    新建(): HTML换行元素_;

};

//@@{ HTML按钮元素_:HTMLButtonElement, HTML元素_:HTMLElement }
接口 HTML按钮元素_ 扩展 HTML元素_ {

    /**
     * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
     */

    //@@{ 自动对焦:autofocus }
    自动对焦: 真假;

    //@@{ 禁用:disabled }
    禁用: 真假;

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */

    //@@{ 表单:form, HTML表单元素_:HTMLFormElement }
    只读 表单: HTML表单元素_ | 空值;

    /**
     * Overrides the action attribute (where the data on a form is sent) on the parent form element.
     */

    //@@{ 表单动作:formAction }
    表单动作: 文字;

    /**
     * Used to override the encoding (formEnctype attribute) specified on the form element.
     */

    //@@{ 表单编码:formEnctype }
    表单编码: 文字;

    /**
     * Overrides the submit method attribute previously specified on a form element.
     */

    //@@{ 表单方法:formMethod }
    表单方法: 文字;

    /**
     * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
     */

    //@@{ 表单不验证:formNoValidate }
    表单不验证: 文字;

    /**
     * Overrides the target attribute on a form element.
     */

    //@@{ 表单目标:formTarget }
    表单目标: 文字;

    /**
     * Sets or retrieves the name of the object.
     */

    //@@{ 名字:name }
    名字: 文字;

    //@@{ 状态:status }
    状态: 任意;

    /**
     * Gets the classification and default behavior of the button.
     */

    //@@{ 类型:type }
    类型: 文字;

    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */

    //@@{ 验证消息:validationMessage }
    只读 验证消息: 文字;

    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */

    //@@{ 有效性:validity, 有效状态_:ValidityState }
    只读 有效性: 有效状态_;

    /**
     * Sets or retrieves the default or selected value of the control.
     */

    //@@{ 值:value }
    值: 文字;

    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */

    //@@{ 将验证:willValidate }
    只读 将验证: 真假;

    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */

    //@@{ 检查有效性:checkValidity }
    检查有效性(): 真假;

    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param 错误 Sets a custom error message that is displayed when a form is submitted.
     */

    //@@{ 置自定义有效性:setCustomValidity, 错误:error }
    置自定义有效性(错误: 文字): 无值;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML按钮元素_:HTMLButtonElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML按钮元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML按钮元素_: {

    //@@{ 原型:prototype, HTML按钮元素_:HTMLButtonElement }
    原型: HTML按钮元素_;

    //@@{ HTML按钮元素_:HTMLButtonElement }
    新建(): HTML按钮元素_;

};

//@@{ HTML画板元素_:HTMLCanvasElement, HTML元素_:HTMLElement }
接口 HTML画板元素_ 扩展 HTML元素_ {

    /**
     * Gets or sets the height of a canvas element on a document.
     */

    //@@{ 高度:height }
    高度: 数字;

    /**
     * Gets or sets the width of a canvas element on a document.
     */

    //@@{ 宽度:width }
    宽度: 数字;

    /**
     * Returns an object that provides methods and properties for drawing and manipulating images and graphics on a canvas element in a document. A context object includes information about colors, line widths, fonts, and other graphic parameters that can be drawn on a canvas.
     * @param 上下文Id The identifier (ID) of the type of canvas to create. Internet Explorer 9 and Internet Explorer 10 support only a 2-D context using canvas.getContext("2d"); IE11 Preview also supports 3-D or WebGL context using canvas.getContext("experimental-webgl");
     */

    //@@{ 取上下文:getContext, 上下文Id:contextId, 上下文特性:contextAttributes, 画板2D上下文特性_:Canvas2DContextAttributes, 画板渲染上下文2D_:CanvasRenderingContext2D }
    取上下文(上下文Id: "2d", 上下文特性?: 画板2D上下文特性_): 画板渲染上下文2D_ | 空值;

    //@@{ 上下文Id:contextId, 上下文特性:contextAttributes, WebGL上下文属性_:WebGLContextAttributes, WebGL渲染上下文_:WebGLRenderingContext }
    取上下文(上下文Id: "webgl" | "experimental-webgl", 上下文特性?: WebGL上下文属性_): WebGL渲染上下文_ | 空值;

    //@@{ 上下文Id:contextId, 上下文特性:contextAttributes, 画板渲染上下文2D_:CanvasRenderingContext2D, WebGL渲染上下文_:WebGLRenderingContext }
    取上下文(上下文Id: 文字, 上下文特性?: {}): 画板渲染上下文2D_ | WebGL渲染上下文_ | 空值;

    /**
     * Returns a blob object encoded as a Portable Network Graphics (PNG) format from a canvas image or drawing.
     */

    //@@{ ms转为二进制对象:msToBlob, 二进制对象_:Blob }
    ms转为二进制对象(): 二进制对象_;

    /**
     * Returns the content of the current canvas as an image that you can use as a source for another canvas or an HTML element.
     * @param 类型 The standard MIME type for the image format to return. If you do not specify this parameter, the default value is a PNG format image.
     */

    //@@{ 转为数据URL:toDataURL, 类型:type, 参数组:args }
    转为数据URL(类型?: 文字, ...参数组: 任意[]): 文字;

    //@@{ 转为二进制对象:toBlob, 回调:callback, 结果:result, 二进制对象_:Blob, 类型:type, 增强参数组:arguments }
    转为二进制对象(回调: (结果: 二进制对象_ | 空值) => 无值, 类型?: 文字, ...增强参数组: 任意[]): 无值;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML画板元素_:HTMLCanvasElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML画板元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML画板元素_: {

    //@@{ 原型:prototype, HTML画板元素_:HTMLCanvasElement }
    原型: HTML画板元素_;

    //@@{ HTML画板元素_:HTMLCanvasElement }
    新建(): HTML画板元素_;

};

//@@{ HTML集合基_:HTMLCollectionBase }
接口 HTML集合基_ {

    /**
     * Sets or retrieves the number of objects in a collection.
     */

    //@@{ 长度:length }
    只读 长度: 数字;

    /**
     * Retrieves an object from various collections.
     */

    //@@{ 项目:item, 索引:index, 元素_:Element }
    项目(索引: 数字): 元素_;

    //@@{ 索引:index, 元素_:Element }
    [索引: 数字]: 元素_;

}

//@@{ HTML集合_:HTMLCollection, HTML集合基_:HTMLCollectionBase }
接口 HTML集合_ 扩展 HTML集合基_ {

    /**
     * Retrieves a select object or an object from an options collection.
     */

    //@@{ 命名项目:namedItem, 名字:name, 元素_:Element }
    命名项目(名字: 文字): 元素_ | 空值;

}

声明 值量 HTML集合_: {

    //@@{ 原型:prototype, HTML集合_:HTMLCollection }
    原型: HTML集合_;

    //@@{ HTML集合_:HTMLCollection }
    新建(): HTML集合_;

};

//@@{ HTML数据元素_:HTMLDataElement, HTML元素_:HTMLElement }
接口 HTML数据元素_ 扩展 HTML元素_ {

    //@@{ 值:value }
    值: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML数据元素_:HTMLDataElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML数据元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML数据元素_: {

    //@@{ 原型:prototype, HTML数据元素_:HTMLDataElement }
    原型: HTML数据元素_;

    //@@{ HTML数据元素_:HTMLDataElement }
    新建(): HTML数据元素_;

};

//@@{ HTML数据列表元素_:HTMLDataListElement, HTML元素_:HTMLElement }
接口 HTML数据列表元素_ 扩展 HTML元素_ {

    //@@{ 选项:options, HTML集合的_:HTMLCollectionOf, HTML选项元素_:HTMLOptionElement }
    选项: HTML集合的_<HTML选项元素_>;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML数据列表元素_:HTMLDataListElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML数据列表元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML数据列表元素_: {

    //@@{ 原型:prototype, HTML数据列表元素_:HTMLDataListElement }
    原型: HTML数据列表元素_;

    //@@{ HTML数据列表元素_:HTMLDataListElement }
    新建(): HTML数据列表元素_;

};

//@@{ HTML目录元素_:HTMLDirectoryElement, HTML元素_:HTMLElement }
接口 HTML目录元素_ 扩展 HTML元素_ {

    //@@{ 紧凑的:compact }
    紧凑的: 真假;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML目录元素_:HTMLDirectoryElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML目录元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML目录元素_: {

    //@@{ 原型:prototype, HTML目录元素_:HTMLDirectoryElement }
    原型: HTML目录元素_;

    //@@{ HTML目录元素_:HTMLDirectoryElement }
    新建(): HTML目录元素_;

};

//@@{ HTML块元素_:HTMLDivElement, HTML元素_:HTMLElement }
接口 HTML块元素_ 扩展 HTML元素_ {

    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */

    //@@{ 对齐:align }
    对齐: 文字;

    /**
     * Sets or retrieves whether the browser automatically performs wordwrap.
     */

    //@@{ 不换行:noWrap }
    不换行: 真假;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML块元素_:HTMLDivElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML块元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML块元素_: {

    //@@{ 原型:prototype, HTML块元素_:HTMLDivElement }
    原型: HTML块元素_;

    //@@{ HTML块元素_:HTMLDivElement }
    新建(): HTML块元素_;

};

//@@{ HTML列表元素_:HTMLDListElement, HTML元素_:HTMLElement }
接口 HTML列表元素_ 扩展 HTML元素_ {

    //@@{ 紧凑的:compact }
    紧凑的: 真假;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML列表元素_:HTMLDListElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML列表元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML列表元素_: {

    //@@{ 原型:prototype, HTML列表元素_:HTMLDListElement }
    原型: HTML列表元素_;

    //@@{ HTML列表元素_:HTMLDListElement }
    新建(): HTML列表元素_;

};

//@@{ HTML文档_:HTMLDocument, 文档_:Document }
接口 HTML文档_ 扩展 文档_ {

    //@@{ 添加事件监听器:addEventListener, 文档事件映射_:DocumentEventMap, 类型:type, 侦听器:listener, HTML文档_:HTMLDocument, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 文档事件映射_>(类型: K, 侦听器: (本体: HTML文档_, ev: 文档事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML文档_: {

    //@@{ 原型:prototype, HTML文档_:HTMLDocument }
    原型: HTML文档_;

    //@@{ HTML文档_:HTMLDocument }
    新建(): HTML文档_;

};

//@@{ HTML元素事件映射_:HTMLElementEventMap, 元素事件映射_:ElementEventMap }
接口 HTML元素事件映射_ 扩展 元素事件映射_ {

    //@@{ "终止":"abort", UI事件_:UIEvent }
    "终止": UI事件_;

    //@@{ "激活":"activate", UI事件_:UIEvent }
    "激活": UI事件_;

    //@@{ "将激活":"beforeactivate", UI事件_:UIEvent }
    "将激活": UI事件_;

    //@@{ "将复制":"beforecopy", 剪贴板事件_:ClipboardEvent }
    "将复制": 剪贴板事件_;

    //@@{ "将剪切":"beforecut", 剪贴板事件_:ClipboardEvent }
    "将剪切": 剪贴板事件_;

    //@@{ "将失去激活":"beforedeactivate", UI事件_:UIEvent }
    "将失去激活": UI事件_;

    //@@{ "将粘贴":"beforepaste", 剪贴板事件_:ClipboardEvent }
    "将粘贴": 剪贴板事件_;

    //@@{ "失去焦点":"blur", 焦点事件_:FocusEvent }
    "失去焦点": 焦点事件_;

    //@@{ "准备播放":"canplay", 事件_:Event }
    "准备播放": 事件_;

    //@@{ "可通过播放":"canplaythrough", 事件_:Event }
    "可通过播放": 事件_;

    //@@{ "改变":"change", 事件_:Event }
    "改变": 事件_;

    //@@{ "点击":"click", 鼠标事件_:MouseEvent }
    "点击": 鼠标事件_;

    //@@{ "快捷菜单":"contextmenu", 指针事件_:PointerEvent }
    "快捷菜单": 指针事件_;

    //@@{ "复制":"copy", 剪贴板事件_:ClipboardEvent }
    "复制": 剪贴板事件_;

    //@@{ "提示改变":"cuechange", 事件_:Event }
    "提示改变": 事件_;

    //@@{ "剪切":"cut", 剪贴板事件_:ClipboardEvent }
    "剪切": 剪贴板事件_;

    //@@{ "双击":"dblclick", 鼠标事件_:MouseEvent }
    "双击": 鼠标事件_;

    //@@{ "禁用":"deactivate", UI事件_:UIEvent }
    "禁用": UI事件_;

    //@@{ "拖拽":"drag", 拖拽事件_:DragEvent }
    "拖拽": 拖拽事件_;

    //@@{ "拖拽结束":"dragend", 拖拽事件_:DragEvent }
    "拖拽结束": 拖拽事件_;

    //@@{ "拖拽进入":"dragenter", 拖拽事件_:DragEvent }
    "拖拽进入": 拖拽事件_;

    //@@{ "拖拽离开":"dragleave", 拖拽事件_:DragEvent }
    "拖拽离开": 拖拽事件_;

    //@@{ "拖拽悬停":"dragover", 拖拽事件_:DragEvent }
    "拖拽悬停": 拖拽事件_;

    //@@{ "拖拽开始":"dragstart", 拖拽事件_:DragEvent }
    "拖拽开始": 拖拽事件_;

    //@@{ "拖放":"drop", 拖拽事件_:DragEvent }
    "拖放": 拖拽事件_;

    //@@{ "时长改变":"durationchange", 事件_:Event }
    "时长改变": 事件_;

    //@@{ "清空":"emptied", 事件_:Event }
    "清空": 事件_;

    //@@{ "结束了":"ended", 媒体流错误事件_:MediaStreamErrorEvent }
    "结束了": 媒体流错误事件_;

    //@@{ "错误":"error", 错误事件_:ErrorEvent }
    "错误": 错误事件_;

    //@@{ "焦点":"focus", 焦点事件_:FocusEvent }
    "焦点": 焦点事件_;

    //@@{ "输入":"input", 事件_:Event }
    "输入": 事件_;

    //@@{ "无效的":"invalid", 事件_:Event }
    "无效的": 事件_;

    //@@{ "键按下":"keydown", 键盘事件_:KeyboardEvent }
    "键按下": 键盘事件_;

    //@@{ "键入":"keypress", 键盘事件_:KeyboardEvent }
    "键入": 键盘事件_;

    //@@{ "键松开":"keyup", 键盘事件_:KeyboardEvent }
    "键松开": 键盘事件_;

    //@@{ "加载":"load", 事件_:Event }
    "加载": 事件_;

    //@@{ "加载数据":"loadeddata", 事件_:Event }
    "加载数据": 事件_;

    //@@{ "加载元数据":"loadedmetadata", 事件_:Event }
    "加载元数据": 事件_;

    //@@{ "加载开始":"loadstart", 事件_:Event }
    "加载开始": 事件_;

    //@@{ "鼠标按下":"mousedown", 鼠标事件_:MouseEvent }
    "鼠标按下": 鼠标事件_;

    //@@{ "鼠标进入":"mouseenter", 鼠标事件_:MouseEvent }
    "鼠标进入": 鼠标事件_;

    //@@{ "鼠标离开":"mouseleave", 鼠标事件_:MouseEvent }
    "鼠标离开": 鼠标事件_;

    //@@{ "鼠标移动":"mousemove", 鼠标事件_:MouseEvent }
    "鼠标移动": 鼠标事件_;

    //@@{ "鼠标移开":"mouseout", 鼠标事件_:MouseEvent }
    "鼠标移开": 鼠标事件_;

    //@@{ "鼠标悬停":"mouseover", 鼠标事件_:MouseEvent }
    "鼠标悬停": 鼠标事件_;

    //@@{ "鼠标松开":"mouseup", 鼠标事件_:MouseEvent }
    "鼠标松开": 鼠标事件_;

    //@@{ "鼠标滚轮":"mousewheel", 轮事件_:WheelEvent }
    "鼠标滚轮": 轮事件_;

    //@@{ "MS内容缩放":"MSContentZoom", UI事件_:UIEvent }
    "MS内容缩放": UI事件_;

    //@@{ "MS操作状态改变":"MSManipulationStateChanged", MS操纵杆事件_:MSManipulationEvent }
    "MS操作状态改变": MS操纵杆事件_;

    //@@{ "粘贴":"paste", 剪贴板事件_:ClipboardEvent }
    "粘贴": 剪贴板事件_;

    //@@{ "暂停":"pause", 事件_:Event }
    "暂停": 事件_;

    //@@{ "播放":"play", 事件_:Event }
    "播放": 事件_;

    //@@{ "播放中":"playing", 事件_:Event }
    "播放中": 事件_;

    //@@{ "进度":"progress", 进度事件_:ProgressEvent }
    "进度": 进度事件_;

    //@@{ "播放速度改变":"ratechange", 事件_:Event }
    "播放速度改变": 事件_;

    //@@{ "重置":"reset", 事件_:Event }
    "重置": 事件_;

    //@@{ "滚动":"scroll", UI事件_:UIEvent }
    "滚动": UI事件_;

    //@@{ "提示":"seeked", 事件_:Event }
    "提示": 事件_;

    //@@{ "提示中":"seeking", 事件_:Event }
    "提示中": 事件_;

    //@@{ "选择":"select", UI事件_:UIEvent }
    "选择": UI事件_;

    //@@{ "选择开始":"selectstart", 事件_:Event }
    "选择开始": 事件_;

    //@@{ "停滞":"stalled", 事件_:Event }
    "停滞": 事件_;

    //@@{ "提交":"submit", 事件_:Event }
    "提交": 事件_;

    //@@{ "阻止":"suspend", 事件_:Event }
    "阻止": 事件_;

    //@@{ "更新时间":"timeupdate", 事件_:Event }
    "更新时间": 事件_;

    //@@{ "音量改变":"volumechange", 事件_:Event }
    "音量改变": 事件_;

    //@@{ "等待":"waiting", 事件_:Event }
    "等待": 事件_;

}

//@@{ HTML元素_:HTMLElement, 元素_:Element }
接口 HTML元素_ 扩展 元素_ {

    //@@{ 访问密钥:accessKey }
    访问密钥: 文字;

    //@@{ 子集:children, HTML集合_:HTMLCollection }
    只读 子集: HTML集合_;

    //@@{ 内容可编辑:contentEditable }
    内容可编辑: 文字;

    //@@{ 数据集:dataset, 文档字符串映射_:DOMStringMap }
    只读 数据集: 文档字符串映射_;

    //@@{ 文本方向:dir }
    文本方向: 文字;

    //@@{ 可拖动的:draggable }
    可拖动的: 真假;

    //@@{ 隐藏的:hidden }
    隐藏的: 真假;

    //@@{ 隐藏焦点:hideFocus }
    隐藏焦点: 真假;

    //@@{ 内部文本:innerText }
    内部文本: 文字;

    //@@{ 是内容可编辑:isContentEditable }
    只读 是内容可编辑: 真假;

    //@@{ 语言:lang }
    语言: 文字;

    //@@{ 偏移高度:offsetHeight }
    只读 偏移高度: 数字;

    //@@{ 偏移左:offsetLeft }
    只读 偏移左: 数字;

    //@@{ 偏移父:offsetParent, 元素_:Element }
    只读 偏移父: 元素_;

    //@@{ 偏移顶:offsetTop }
    只读 偏移顶: 数字;

    //@@{ 偏移宽度:offsetWidth }
    只读 偏移宽度: 数字;

    //@@{ 正在终止:onabort, HTML元素_:HTMLElement, UI事件_:UIEvent }
    正在终止: (本体: HTML元素_, ev: UI事件_) => 任意;

    //@@{ 正在激活:onactivate, HTML元素_:HTMLElement, UI事件_:UIEvent }
    正在激活: (本体: HTML元素_, ev: UI事件_) => 任意;

    //@@{ 正在将激活:onbeforeactivate, HTML元素_:HTMLElement, UI事件_:UIEvent }
    正在将激活: (本体: HTML元素_, ev: UI事件_) => 任意;

    //@@{ 正在将复制:onbeforecopy, HTML元素_:HTMLElement, 剪贴板事件_:ClipboardEvent }
    正在将复制: (本体: HTML元素_, ev: 剪贴板事件_) => 任意;

    //@@{ 正在将剪切:onbeforecut, HTML元素_:HTMLElement, 剪贴板事件_:ClipboardEvent }
    正在将剪切: (本体: HTML元素_, ev: 剪贴板事件_) => 任意;

    //@@{ 正在将失去激活:onbeforedeactivate, HTML元素_:HTMLElement, UI事件_:UIEvent }
    正在将失去激活: (本体: HTML元素_, ev: UI事件_) => 任意;

    //@@{ 正在将粘贴:onbeforepaste, HTML元素_:HTMLElement, 剪贴板事件_:ClipboardEvent }
    正在将粘贴: (本体: HTML元素_, ev: 剪贴板事件_) => 任意;

    //@@{ 正在失去焦点:onblur, HTML元素_:HTMLElement, 焦点事件_:FocusEvent }
    正在失去焦点: (本体: HTML元素_, ev: 焦点事件_) => 任意;

    //@@{ 正在准备播放:oncanplay, HTML元素_:HTMLElement, 事件_:Event }
    正在准备播放: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在正常播放:oncanplaythrough, HTML元素_:HTMLElement, 事件_:Event }
    正在正常播放: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在改变:onchange, HTML元素_:HTMLElement, 事件_:Event }
    正在改变: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在点击:onclick, HTML元素_:HTMLElement, 鼠标事件_:MouseEvent }
    正在点击: (本体: HTML元素_, ev: 鼠标事件_) => 任意;

    //@@{ 正在快捷菜单:oncontextmenu, HTML元素_:HTMLElement, 指针事件_:PointerEvent }
    正在快捷菜单: (本体: HTML元素_, ev: 指针事件_) => 任意;

    //@@{ 正在复制:oncopy, HTML元素_:HTMLElement, 剪贴板事件_:ClipboardEvent }
    正在复制: (本体: HTML元素_, ev: 剪贴板事件_) => 任意;

    //@@{ 正在提示改变:oncuechange, HTML元素_:HTMLElement, 事件_:Event }
    正在提示改变: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在剪切:oncut, HTML元素_:HTMLElement, 剪贴板事件_:ClipboardEvent }
    正在剪切: (本体: HTML元素_, ev: 剪贴板事件_) => 任意;

    //@@{ 正在双击:ondblclick, HTML元素_:HTMLElement, 鼠标事件_:MouseEvent }
    正在双击: (本体: HTML元素_, ev: 鼠标事件_) => 任意;

    //@@{ 正在禁用:ondeactivate, HTML元素_:HTMLElement, UI事件_:UIEvent }
    正在禁用: (本体: HTML元素_, ev: UI事件_) => 任意;

    //@@{ 正在拖拽:ondrag, HTML元素_:HTMLElement, 拖拽事件_:DragEvent }
    正在拖拽: (本体: HTML元素_, ev: 拖拽事件_) => 任意;

    //@@{ 正在拖拽结束:ondragend, HTML元素_:HTMLElement, 拖拽事件_:DragEvent }
    正在拖拽结束: (本体: HTML元素_, ev: 拖拽事件_) => 任意;

    //@@{ 正在拖拽进入:ondragenter, HTML元素_:HTMLElement, 拖拽事件_:DragEvent }
    正在拖拽进入: (本体: HTML元素_, ev: 拖拽事件_) => 任意;

    //@@{ 正在拖拽离开:ondragleave, HTML元素_:HTMLElement, 拖拽事件_:DragEvent }
    正在拖拽离开: (本体: HTML元素_, ev: 拖拽事件_) => 任意;

    //@@{ 正在拖拽悬停:ondragover, HTML元素_:HTMLElement, 拖拽事件_:DragEvent }
    正在拖拽悬停: (本体: HTML元素_, ev: 拖拽事件_) => 任意;

    //@@{ 正在拖拽开始:ondragstart, HTML元素_:HTMLElement, 拖拽事件_:DragEvent }
    正在拖拽开始: (本体: HTML元素_, ev: 拖拽事件_) => 任意;

    //@@{ 正在拖放:ondrop, HTML元素_:HTMLElement, 拖拽事件_:DragEvent }
    正在拖放: (本体: HTML元素_, ev: 拖拽事件_) => 任意;

    //@@{ 正在时长改变:ondurationchange, HTML元素_:HTMLElement, 事件_:Event }
    正在时长改变: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在清空:onemptied, HTML元素_:HTMLElement, 事件_:Event }
    正在清空: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在结束了:onended, HTML元素_:HTMLElement, 媒体流错误事件_:MediaStreamErrorEvent }
    正在结束了: (本体: HTML元素_, ev: 媒体流错误事件_) => 任意;

    //@@{ 正在错误:onerror, HTML元素_:HTMLElement, 错误事件_:ErrorEvent }
    正在错误: (本体: HTML元素_, ev: 错误事件_) => 任意;

    //@@{ 正在焦点:onfocus, HTML元素_:HTMLElement, 焦点事件_:FocusEvent }
    正在焦点: (本体: HTML元素_, ev: 焦点事件_) => 任意;

    //@@{ 正在输入:oninput, HTML元素_:HTMLElement, 事件_:Event }
    正在输入: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在无效的:oninvalid, HTML元素_:HTMLElement, 事件_:Event }
    正在无效的: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在键按下:onkeydown, HTML元素_:HTMLElement, 键盘事件_:KeyboardEvent }
    正在键按下: (本体: HTML元素_, ev: 键盘事件_) => 任意;

    //@@{ 正在键入:onkeypress, HTML元素_:HTMLElement, 键盘事件_:KeyboardEvent }
    正在键入: (本体: HTML元素_, ev: 键盘事件_) => 任意;

    //@@{ 正在键松开:onkeyup, HTML元素_:HTMLElement, 键盘事件_:KeyboardEvent }
    正在键松开: (本体: HTML元素_, ev: 键盘事件_) => 任意;

    //@@{ 正在加载:onload, HTML元素_:HTMLElement, 事件_:Event }
    正在加载: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在加载数据:onloadeddata, HTML元素_:HTMLElement, 事件_:Event }
    正在加载数据: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在加载元数据:onloadedmetadata, HTML元素_:HTMLElement, 事件_:Event }
    正在加载元数据: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在加载开始:onloadstart, HTML元素_:HTMLElement, 事件_:Event }
    正在加载开始: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在鼠标按下:onmousedown, HTML元素_:HTMLElement, 鼠标事件_:MouseEvent }
    正在鼠标按下: (本体: HTML元素_, ev: 鼠标事件_) => 任意;

    //@@{ 正在鼠标进入:onmouseenter, HTML元素_:HTMLElement, 鼠标事件_:MouseEvent }
    正在鼠标进入: (本体: HTML元素_, ev: 鼠标事件_) => 任意;

    //@@{ 正在鼠标离开:onmouseleave, HTML元素_:HTMLElement, 鼠标事件_:MouseEvent }
    正在鼠标离开: (本体: HTML元素_, ev: 鼠标事件_) => 任意;

    //@@{ 正在鼠标移动:onmousemove, HTML元素_:HTMLElement, 鼠标事件_:MouseEvent }
    正在鼠标移动: (本体: HTML元素_, ev: 鼠标事件_) => 任意;

    //@@{ 正在鼠标移开:onmouseout, HTML元素_:HTMLElement, 鼠标事件_:MouseEvent }
    正在鼠标移开: (本体: HTML元素_, ev: 鼠标事件_) => 任意;

    //@@{ 正在鼠标悬停:onmouseover, HTML元素_:HTMLElement, 鼠标事件_:MouseEvent }
    正在鼠标悬停: (本体: HTML元素_, ev: 鼠标事件_) => 任意;

    //@@{ 正在鼠标松开:onmouseup, HTML元素_:HTMLElement, 鼠标事件_:MouseEvent }
    正在鼠标松开: (本体: HTML元素_, ev: 鼠标事件_) => 任意;

    //@@{ 正在鼠标滚轮:onmousewheel, HTML元素_:HTMLElement, 轮事件_:WheelEvent }
    正在鼠标滚轮: (本体: HTML元素_, ev: 轮事件_) => 任意;

    //@@{ 正在MS内容缩放:onmscontentzoom, HTML元素_:HTMLElement, UI事件_:UIEvent }
    正在MS内容缩放: (本体: HTML元素_, ev: UI事件_) => 任意;

    //@@{ 正在MS操作状态改变:onmsmanipulationstatechanged, HTML元素_:HTMLElement, MS操纵杆事件_:MSManipulationEvent }
    正在MS操作状态改变: (本体: HTML元素_, ev: MS操纵杆事件_) => 任意;

    //@@{ 正在粘贴:onpaste, HTML元素_:HTMLElement, 剪贴板事件_:ClipboardEvent }
    正在粘贴: (本体: HTML元素_, ev: 剪贴板事件_) => 任意;

    //@@{ 正在暂停:onpause, HTML元素_:HTMLElement, 事件_:Event }
    正在暂停: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在播放:onplay, HTML元素_:HTMLElement, 事件_:Event }
    正在播放: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在播放中:onplaying, HTML元素_:HTMLElement, 事件_:Event }
    正在播放中: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在进度:onprogress, HTML元素_:HTMLElement, 进度事件_:ProgressEvent }
    正在进度: (本体: HTML元素_, ev: 进度事件_) => 任意;

    //@@{ 正在播放速度改变:onratechange, HTML元素_:HTMLElement, 事件_:Event }
    正在播放速度改变: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在重置:onreset, HTML元素_:HTMLElement, 事件_:Event }
    正在重置: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在滚动:onscroll, HTML元素_:HTMLElement, UI事件_:UIEvent }
    正在滚动: (本体: HTML元素_, ev: UI事件_) => 任意;

    //@@{ 正在提示:onseeked, HTML元素_:HTMLElement, 事件_:Event }
    正在提示: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在重定位:onseeking, HTML元素_:HTMLElement, 事件_:Event }
    正在重定位: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在选择:onselect, HTML元素_:HTMLElement, UI事件_:UIEvent }
    正在选择: (本体: HTML元素_, ev: UI事件_) => 任意;

    //@@{ 正在选择开始:onselectstart, HTML元素_:HTMLElement, 事件_:Event }
    正在选择开始: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在停滞:onstalled, HTML元素_:HTMLElement, 事件_:Event }
    正在停滞: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在提交:onsubmit, HTML元素_:HTMLElement, 事件_:Event }
    正在提交: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在阻止:onsuspend, HTML元素_:HTMLElement, 事件_:Event }
    正在阻止: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在更新时间:ontimeupdate, HTML元素_:HTMLElement, 事件_:Event }
    正在更新时间: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在音量改变:onvolumechange, HTML元素_:HTMLElement, 事件_:Event }
    正在音量改变: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 正在等待:onwaiting, HTML元素_:HTMLElement, 事件_:Event }
    正在等待: (本体: HTML元素_, ev: 事件_) => 任意;

    //@@{ 外部文本:outerText }
    外部文本: 文字;

    //@@{ 拼写检查:spellcheck }
    拼写检查: 真假;

    //@@{ 样式:style, CSS样式声明_:CSSStyleDeclaration }
    只读 样式: CSS样式声明_;

    //@@{ 切换索引:tabIndex }
    切换索引: 数字;

    //@@{ 标题:title }
    标题: 文字;

    //@@{ 失去焦点:blur }
    失去焦点(): 无值;

    //@@{ 点击:click }
    点击(): 无值;

    //@@{ 拖拽:dragDrop }
    拖拽(): 真假;

    //@@{ 焦点:focus }
    焦点(): 无值;

    //@@{ ms取输入上下文:msGetInputContext, MS输入法上下文_:MSInputMethodContext }
    ms取输入上下文(): MS输入法上下文_;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML元素_:HTMLElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML元素_: {

    //@@{ 原型:prototype, HTML元素_:HTMLElement }
    原型: HTML元素_;

    //@@{ HTML元素_:HTMLElement }
    新建(): HTML元素_;

};

//@@{ HTML嵌入元素_:HTMLEmbedElement, HTML元素_:HTMLElement, 取SVG文档_:GetSVGDocument }
接口 HTML嵌入元素_ 扩展 HTML元素_, 取SVG文档_ {

    /**
     * Sets or retrieves the height of the object.
     */

    //@@{ 高度:height }
    高度: 文字;

    //@@{ 隐藏的:hidden }
    隐藏的: 任意;

    /**
     * Gets or sets whether the DLNA PlayTo device is available.
     */

    //@@{ ms播放禁用:msPlayToDisabled }
    ms播放禁用: 真假;

    /**
     * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.
     */

    //@@{ ms播放首选源URI:msPlayToPreferredSourceUri }
    ms播放首选源URI: 文字;

    /**
     * Gets or sets the primary DLNA PlayTo device.
     */

    //@@{ ms主播放设备:msPlayToPrimary }
    ms主播放设备: 真假;

    /**
     * Gets the source associated with the media element for use by the PlayToManager.
     */

    //@@{ ms播放源:msPlayToSource }
    只读 ms播放源: 任意;

    /**
     * Sets or retrieves the name of the object.
     */

    //@@{ 名字:name }
    名字: 文字;

    /**
     * Retrieves the palette used for the embedded document.
     */

    //@@{ 面板:palette }
    只读 面板: 文字;

    /**
     * Retrieves the URL of the plug-in used to view an embedded document.
     */

    //@@{ 嵌入页:pluginspage }
    只读 嵌入页: 文字;

    //@@{ 就绪状态:readyState }
    只读 就绪状态: 文字;

    /**
     * Sets or retrieves a URL to be loaded by the object.
     */

    //@@{ 源:src }
    源: 文字;

    /**
     * Sets or retrieves the height and width units of the embed object.
     */

    //@@{ 单位:units }
    单位: 文字;

    /**
     * Sets or retrieves the width of the object.
     */

    //@@{ 宽度:width }
    宽度: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML嵌入元素_:HTMLEmbedElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML嵌入元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML嵌入元素_: {

    //@@{ 原型:prototype, HTML嵌入元素_:HTMLEmbedElement }
    原型: HTML嵌入元素_;

    //@@{ HTML嵌入元素_:HTMLEmbedElement }
    新建(): HTML嵌入元素_;

};

//@@{ HTML分组元素_:HTMLFieldSetElement, HTML元素_:HTMLElement }
接口 HTML分组元素_ 扩展 HTML元素_ {

    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */

    //@@{ 对齐:align }
    对齐: 文字;

    //@@{ 禁用:disabled }
    禁用: 真假;

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */

    //@@{ 表单:form, HTML表单元素_:HTMLFormElement }
    只读 表单: HTML表单元素_ | 空值;

    //@@{ 名字:name }
    名字: 文字;

    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */

    //@@{ 验证消息:validationMessage }
    只读 验证消息: 文字;

    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */

    //@@{ 有效性:validity, 有效状态_:ValidityState }
    只读 有效性: 有效状态_;

    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */

    //@@{ 将验证:willValidate }
    只读 将验证: 真假;

    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */

    //@@{ 检查有效性:checkValidity }
    检查有效性(): 真假;

    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param 错误 Sets a custom error message that is displayed when a form is submitted.
     */

    //@@{ 置自定义有效性:setCustomValidity, 错误:error }
    置自定义有效性(错误: 文字): 无值;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML分组元素_:HTMLFieldSetElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML分组元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML分组元素_: {

    //@@{ 原型:prototype, HTML分组元素_:HTMLFieldSetElement }
    原型: HTML分组元素_;

    //@@{ HTML分组元素_:HTMLFieldSetElement }
    新建(): HTML分组元素_;

};

//@@{ HTML字体元素_:HTMLFontElement, HTML元素_:HTMLElement, DOML2弃用颜色属性_:DOML2DeprecatedColorProperty, DOML2弃用大小属性_:DOML2DeprecatedSizeProperty }
接口 HTML字体元素_ 扩展 HTML元素_, DOML2弃用颜色属性_, DOML2弃用大小属性_ {

    /**
     * Sets or retrieves the current typeface family.
     */

    //@@{ 家族:face }
    家族: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML字体元素_:HTMLFontElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML字体元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML字体元素_: {

    //@@{ 原型:prototype, HTML字体元素_:HTMLFontElement }
    原型: HTML字体元素_;

    //@@{ HTML字体元素_:HTMLFontElement }
    新建(): HTML字体元素_;

};

//@@{ HTML表单控件集合_:HTMLFormControlsCollection, HTML集合基_:HTMLCollectionBase }
接口 HTML表单控件集合_ 扩展 HTML集合基_ {

    //@@{ 命名项目:namedItem, 名字:name, HTML集合_:HTMLCollection, 元素_:Element }
    命名项目(名字: 文字): HTML集合_ | 元素_ | 空值;

}

声明 值量 HTML表单控件集合_: {

    //@@{ 原型:prototype, HTML表单控件集合_:HTMLFormControlsCollection }
    原型: HTML表单控件集合_;

    //@@{ HTML表单控件集合_:HTMLFormControlsCollection }
    新建(): HTML表单控件集合_;

};

//@@{ HTML表单元素_:HTMLFormElement, HTML元素_:HTMLElement }
接口 HTML表单元素_ 扩展 HTML元素_ {

    /**
     * Sets or retrieves a list of character encodings for input data that must be accepted by the server processing the form.
     */

    //@@{ 接受字符集:acceptCharset }
    接受字符集: 文字;

    /**
     * Sets or retrieves the URL to which the form content is sent for processing.
     */

    //@@{ 动作:action }
    动作: 文字;

    /**
     * Specifies whether autocomplete is applied to an editable text field.
     */

    //@@{ 自动完成:autocomplete }
    自动完成: 文字;

    /**
     * Retrieves a collection, in source order, of all controls in a given form.
     */

    //@@{ 元素组:elements, HTML表单控件集合_:HTMLFormControlsCollection }
    只读 元素组: HTML表单控件集合_;

    /**
     * Sets or retrieves the MIME encoding for the form.
     */

    //@@{ 编码:encoding }
    编码: 文字;

    /**
     * Sets or retrieves the encoding type for the form.
     */

    //@@{ 编码类型:enctype }
    编码类型: 文字;

    /**
     * Sets or retrieves the number of objects in a collection.
     */

    //@@{ 长度:length }
    只读 长度: 数字;

    /**
     * Sets or retrieves how to send the form data to the server.
     */

    //@@{ 方法:method }
    方法: 文字;

    /**
     * Sets or retrieves the name of the object.
     */

    //@@{ 名字:name }
    名字: 文字;

    /**
     * Designates a form that is not validated when submitted.
     */

    //@@{ 没有验证:noValidate }
    没有验证: 真假;

    /**
     * Sets or retrieves the window or frame at which to target content.
     */

    //@@{ 目标:target }
    目标: 文字;

    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */

    //@@{ 检查有效性:checkValidity }
    检查有效性(): 真假;

    /**
     * Retrieves a form object or an object from an elements collection.
     * @param 名字 Variant of type Number or String that specifies the object or collection to retrieve. If this parameter is a Number, it is the zero-based index of the object. If this parameter is a string, all objects with matching name or id properties are retrieved, and a collection is returned if more than one match is made.
     * @param 索引 Variant of type Number that specifies the zero-based index of the object to retrieve when a collection is returned.
     */

    //@@{ 项目:item, 名字:name, 索引:index }
    项目(名字?: 任意, 索引?: 任意): 任意;

    /**
     * Retrieves a form object or an object from an elements collection.
     */

    //@@{ 命名项目:namedItem, 名字:name }
    命名项目(名字: 文字): 任意;

    /**
     * Fires when the user resets a form.
     */

    //@@{ 重置:reset }
    重置(): 无值;

    /**
     * Fires when a FORM is about to be submitted.
     */

    //@@{ 提交:submit }
    提交(): 无值;

    //@@{ 报告有效性:reportValidity }
    报告有效性(): 真假;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML表单元素_:HTMLFormElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML表单元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

    //@@{ 名字:name }
    [名字: 文字]: 任意;

}

声明 值量 HTML表单元素_: {

    //@@{ 原型:prototype, HTML表单元素_:HTMLFormElement }
    原型: HTML表单元素_;

    //@@{ HTML表单元素_:HTMLFormElement }
    新建(): HTML表单元素_;

};

//@@{ HTML框架元素事件映射_:HTMLFrameElementEventMap, HTML元素事件映射_:HTMLElementEventMap }
接口 HTML框架元素事件映射_ 扩展 HTML元素事件映射_ {

    //@@{ "加载":"load", 事件_:Event }
    "加载": 事件_;

}

//@@{ HTML框架元素_:HTMLFrameElement, HTML元素_:HTMLElement, 取SVG文档_:GetSVGDocument }
接口 HTML框架元素_ 扩展 HTML元素_, 取SVG文档_ {

    /**
     * Specifies the properties of a border drawn around an object.
     */

    //@@{ 边框:border }
    边框: 文字;

    /**
     * Sets or retrieves the border color of the object.
     */

    //@@{ 边框颜色:borderColor }
    边框颜色: 任意;

    /**
     * Retrieves the document object of the page or frame.
     */

    //@@{ 文档内容:contentDocument, 文档_:Document }
    只读 文档内容: 文档_;

    /**
     * Retrieves the object of the specified.
     */

    //@@{ 内容窗口:contentWindow, 窗口_:Window }
    只读 内容窗口: 窗口_;

    /**
     * Sets or retrieves whether to display a border for the frame.
     */

    //@@{ 框架边框:frameBorder }
    框架边框: 文字;

    /**
     * Sets or retrieves the amount of additional space between the frames.
     */

    //@@{ 框架间距:frameSpacing }
    框架间距: 任意;

    /**
     * Sets or retrieves the height of the object.
     */

    //@@{ 高度:height }
    高度: 文字 | 数字;

    /**
     * Sets or retrieves a URI to a long description of the object.
     */

    //@@{ 长描述:longDesc }
    长描述: 文字;

    /**
     * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.
     */

    //@@{ 外边框高度:marginHeight }
    外边框高度: 文字;

    /**
     * Sets or retrieves the left and right margin widths before displaying the text in a frame.
     */

    //@@{ 外边框宽度:marginWidth }
    外边框宽度: 文字;

    /**
     * Sets or retrieves the frame name.
     */

    //@@{ 名字:name }
    名字: 文字;

    /**
     * Sets or retrieves whether the user can resize the frame.
     */

    //@@{ 不可调整:noResize }
    不可调整: 真假;

    /**
     * Sets or retrieves whether the frame can be scrolled.
     */

    //@@{ 滚动时:scrolling }
    滚动时: 文字;

    /**
     * Sets or retrieves a URL to be loaded by the object.
     */

    //@@{ 源:src }
    源: 文字;

    /**
     * Sets or retrieves the width of the object.
     */

    //@@{ 宽度:width }
    宽度: 文字 | 数字;

    //@@{ 添加事件监听器:addEventListener, HTML框架元素事件映射_:HTMLFrameElementEventMap, 类型:type, 侦听器:listener, HTML框架元素_:HTMLFrameElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML框架元素事件映射_>(类型: K, 侦听器: (本体: HTML框架元素_, ev: HTML框架元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML框架元素_: {

    //@@{ 原型:prototype, HTML框架元素_:HTMLFrameElement }
    原型: HTML框架元素_;

    //@@{ HTML框架元素_:HTMLFrameElement }
    新建(): HTML框架元素_;

};

//@@{ HTML框架分组元素事件映射_:HTMLFrameSetElementEventMap, HTML元素事件映射_:HTMLElementEventMap }
接口 HTML框架分组元素事件映射_ 扩展 HTML元素事件映射_ {

    //@@{ "在打印":"afterprint", 事件_:Event }
    "在打印": 事件_;

    //@@{ "将打印":"beforeprint", 事件_:Event }
    "将打印": 事件_;

    //@@{ "将卸载":"beforeunload", 将卸载事件_:BeforeUnloadEvent }
    "将卸载": 将卸载事件_;

    //@@{ "失去焦点":"blur", 焦点事件_:FocusEvent }
    "失去焦点": 焦点事件_;

    //@@{ "错误":"error", 错误事件_:ErrorEvent }
    "错误": 错误事件_;

    //@@{ "焦点":"focus", 焦点事件_:FocusEvent }
    "焦点": 焦点事件_;

    //@@{ "哈希改变":"hashchange", 哈希改变事件_:HashChangeEvent }
    "哈希改变": 哈希改变事件_;

    //@@{ "加载":"load", 事件_:Event }
    "加载": 事件_;

    //@@{ "消息":"message", 消息事件_:MessageEvent }
    "消息": 消息事件_;

    //@@{ "离线":"offline", 事件_:Event }
    "离线": 事件_;

    //@@{ "在线":"online", 事件_:Event }
    "在线": 事件_;

    //@@{ "方向改变":"orientationchange", 事件_:Event }
    "方向改变": 事件_;

    //@@{ "页面隐藏":"pagehide", 页面过渡事件_:PageTransitionEvent }
    "页面隐藏": 页面过渡事件_;

    //@@{ "页面显示":"pageshow", 页面过渡事件_:PageTransitionEvent }
    "页面显示": 页面过渡事件_;

    //@@{ "退回":"popstate", 回退状态事件:PopStateEvent }
    "退回": 回退状态事件;

    //@@{ "调整":"resize", UI事件_:UIEvent }
    "调整": UI事件_;

    //@@{ "滚动":"scroll", UI事件_:UIEvent }
    "滚动": UI事件_;

    //@@{ "存储":"storage", 存储事件_:StorageEvent }
    "存储": 存储事件_;

    //@@{ "卸载":"unload", 事件_:Event }
    "卸载": 事件_; 

}

//@@{ HTML框架分组元素_:HTMLFrameSetElement, HTML元素_:HTMLElement }
接口 HTML框架分组元素_ 扩展 HTML元素_ {

    //@@{ 边框:border }
    边框: 文字;

    /**
     * Sets or retrieves the border color of the object.
     */

    //@@{ 边框颜色:borderColor }
    边框颜色: 任意;

    /**
     * Sets or retrieves the frame widths of the object.
     */

    //@@{ 列:cols }
    列: 文字;

    /**
     * Sets or retrieves whether to display a border for the frame.
     */

    //@@{ 框架边框:frameBorder }
    框架边框: 文字;

    /**
     * Sets or retrieves the amount of additional space between the frames.
     */

    //@@{ 框架间距:frameSpacing }
    框架间距: 任意;

    //@@{ 名字:name }
    名字: 文字;

    //@@{ 正在在打印:onafterprint, HTML框架分组元素_:HTMLFrameSetElement, 事件_:Event }
    正在在打印: (本体: HTML框架分组元素_, ev: 事件_) => 任意;

    //@@{ 正在将打印:onbeforeprint, HTML框架分组元素_:HTMLFrameSetElement, 事件_:Event }
    正在将打印: (本体: HTML框架分组元素_, ev: 事件_) => 任意;

    //@@{ 正在将卸载:onbeforeunload, HTML框架分组元素_:HTMLFrameSetElement, 将卸载事件_:BeforeUnloadEvent }
    正在将卸载: (本体: HTML框架分组元素_, ev: 将卸载事件_) => 任意;

    //@@{ 正在哈希改变:onhashchange, HTML框架分组元素_:HTMLFrameSetElement, 哈希改变事件_:HashChangeEvent }
    正在哈希改变: (本体: HTML框架分组元素_, ev: 哈希改变事件_) => 任意;

    //@@{ 正在消息:onmessage, HTML框架分组元素_:HTMLFrameSetElement, 消息事件_:MessageEvent }
    正在消息: (本体: HTML框架分组元素_, ev: 消息事件_) => 任意;

    //@@{ 正在离线:onoffline, HTML框架分组元素_:HTMLFrameSetElement, 事件_:Event }
    正在离线: (本体: HTML框架分组元素_, ev: 事件_) => 任意;

    //@@{ 正在在线:ononline, HTML框架分组元素_:HTMLFrameSetElement, 事件_:Event }
    正在在线: (本体: HTML框架分组元素_, ev: 事件_) => 任意;

    //@@{ 正在方向改变:onorientationchange, HTML框架分组元素_:HTMLFrameSetElement, 事件_:Event }
    正在方向改变: (本体: HTML框架分组元素_, ev: 事件_) => 任意;

    //@@{ 正在页面隐藏:onpagehide, HTML框架分组元素_:HTMLFrameSetElement, 页面过渡事件_:PageTransitionEvent }
    正在页面隐藏: (本体: HTML框架分组元素_, ev: 页面过渡事件_) => 任意;

    //@@{ 正在页面显示:onpageshow, HTML框架分组元素_:HTMLFrameSetElement, 页面过渡事件_:PageTransitionEvent }
    正在页面显示: (本体: HTML框架分组元素_, ev: 页面过渡事件_) => 任意;

    //@@{ 正在退回:onpopstate, HTML框架分组元素_:HTMLFrameSetElement, 回退状态事件:PopStateEvent }
    正在退回: (本体: HTML框架分组元素_, ev: 回退状态事件) => 任意;

    //@@{ 正在调整:onresize, HTML框架分组元素_:HTMLFrameSetElement, UI事件_:UIEvent }
    正在调整: (本体: HTML框架分组元素_, ev: UI事件_) => 任意;

    //@@{ 正在储存:onstorage, HTML框架分组元素_:HTMLFrameSetElement, 存储事件_:StorageEvent }
    正在储存: (本体: HTML框架分组元素_, ev: 存储事件_) => 任意;

    //@@{ 正在卸载:onunload, HTML框架分组元素_:HTMLFrameSetElement, 事件_:Event }
    正在卸载: (本体: HTML框架分组元素_, ev: 事件_) => 任意;

    /**
     * Sets or retrieves the frame heights of the object.
     */

    //@@{ 行:rows }
    行: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML框架分组元素事件映射_:HTMLFrameSetElementEventMap, 类型:type, 侦听器:listener, HTML框架分组元素_:HTMLFrameSetElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML框架分组元素事件映射_>(类型: K, 侦听器: (本体: HTML框架分组元素_, ev: HTML框架分组元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML框架分组元素_: {

    //@@{ 原型:prototype, HTML框架分组元素_:HTMLFrameSetElement }
    原型: HTML框架分组元素_;

    //@@{ HTML框架分组元素_:HTMLFrameSetElement }
    新建(): HTML框架分组元素_;

};

//@@{ HTML头部元素_:HTMLHeadElement, HTML元素_:HTMLElement }
接口 HTML头部元素_ 扩展 HTML元素_ {

    //@@{ 配置文件:profile }
    配置文件: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML头部元素_:HTMLHeadElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML头部元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML头部元素_: {

    //@@{ 原型:prototype, HTML头部元素_:HTMLHeadElement }
    原型: HTML头部元素_;

    //@@{ HTML头部元素_:HTMLHeadElement }
    新建(): HTML头部元素_;

};

//@@{ HTML标题元素_:HTMLHeadingElement, HTML元素_:HTMLElement }
接口 HTML标题元素_ 扩展 HTML元素_ {

    /**
     * Sets or retrieves a value that indicates the table alignment.
     */

    //@@{ 对齐:align }
    对齐: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML标题元素_:HTMLHeadingElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML标题元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML标题元素_: {

    //@@{ 原型:prototype, HTML标题元素_:HTMLHeadingElement }
    原型: HTML标题元素_;

    //@@{ HTML标题元素_:HTMLHeadingElement }
    新建(): HTML标题元素_;

};

//@@{ HTML水平线元素_:HTMLHRElement, HTML元素_:HTMLElement, DOML2弃用颜色属性_:DOML2DeprecatedColorProperty, DOML2弃用大小属性_:DOML2DeprecatedSizeProperty }
接口 HTML水平线元素_ 扩展 HTML元素_, DOML2弃用颜色属性_, DOML2弃用大小属性_ {

    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */

    //@@{ 对齐:align }
    对齐: 文字;

    /**
     * Sets or retrieves whether the horizontal rule is drawn with 3-D shading.
     */

    //@@{ 没有阴影:noShade }
    没有阴影: 真假;

    /**
     * Sets or retrieves the width of the object.
     */

    //@@{ 宽度:width }
    宽度: 数字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML水平线元素_:HTMLHRElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML水平线元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML水平线元素_: {

    //@@{ 原型:prototype, HTML水平线元素_:HTMLHRElement }
    原型: HTML水平线元素_;

    //@@{ HTML水平线元素_:HTMLHRElement }
    新建(): HTML水平线元素_;

};

//@@{ HTML超文本标记元素_:HTMLHtmlElement, HTML元素_:HTMLElement }
接口 HTML超文本标记元素_ 扩展 HTML元素_ {

    /**
     * Sets or retrieves the DTD version that governs the current document.
     */

    //@@{ 版本:version }
    版本: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML超文本标记元素_:HTMLHtmlElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML超文本标记元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML超文本标记元素_: {

    //@@{ 原型:prototype, HTML超文本标记元素_:HTMLHtmlElement }
    原型: HTML超文本标记元素_;

    //@@{ HTML超文本标记元素_:HTMLHtmlElement }
    新建(): HTML超文本标记元素_;

};

//@@{ HTML内联框架元素事件映射_:HTMLIFrameElementEventMap, HTML元素事件映射_:HTMLElementEventMap }
接口 HTML内联框架元素事件映射_ 扩展 HTML元素事件映射_ {

    //@@{ "加载":"load", 事件_:Event }
    "加载": 事件_;

}

//@@{ HTML内联框架元素_:HTMLIFrameElement, HTML元素_:HTMLElement, 取SVG文档_:GetSVGDocument }
接口 HTML内联框架元素_ 扩展 HTML元素_, 取SVG文档_ {

    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */

    //@@{ 对齐:align }
    对齐: 文字;

    //@@{ 允许全屏:allowFullscreen }
    允许全屏: 真假;

    //@@{ 允许付款请求:allowPaymentRequest }
    允许付款请求: 真假;

    /**
     * Specifies the properties of a border drawn around an object.
     */

    //@@{ 边框:border }
    边框: 文字;

    /**
     * Retrieves the document object of the page or frame.
     */

    //@@{ 文档内容:contentDocument, 文档_:Document }
    只读 文档内容: 文档_;

    /**
     * Retrieves the object of the specified.
     */

    //@@{ 内容窗口:contentWindow, 窗口_:Window }
    只读 内容窗口: 窗口_;

    /**
     * Sets or retrieves whether to display a border for the frame.
     */

    //@@{ 框架边框:frameBorder }
    框架边框: 文字;

    /**
     * Sets or retrieves the amount of additional space between the frames.
     */

    //@@{ 框架间距:frameSpacing }
    框架间距: 任意;

    /**
     * Sets or retrieves the height of the object.
     */

    //@@{ 高度:height }
    高度: 文字;

    /**
     * Sets or retrieves the horizontal margin for the object.
     */

    //@@{ 水平间距:hspace }
    水平间距: 数字;

    /**
     * Sets or retrieves a URI to a long description of the object.
     */

    //@@{ 长描述:longDesc }
    长描述: 文字;

    /**
     * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.
     */

    //@@{ 外边框高度:marginHeight }
    外边框高度: 文字;

    /**
     * Sets or retrieves the left and right margin widths before displaying the text in a frame.
     */

    //@@{ 外边框宽度:marginWidth }
    外边框宽度: 文字;

    /**
     * Sets or retrieves the frame name.
     */

    //@@{ 名字:name }
    名字: 文字;

    /**
     * Sets or retrieves whether the user can resize the frame.
     */

    //@@{ 不可调整:noResize }
    不可调整: 真假;

    //@@{ 沙盒:sandbox, 文档可设置标记列表_:DOMSettableTokenList }
    只读 沙盒: 文档可设置标记列表_;

    /**
     * Sets or retrieves whether the frame can be scrolled.
     */

    //@@{ 滚动中:scrolling }
    滚动中: 文字;

    /**
     * Sets or retrieves a URL to be loaded by the object.
     */

    //@@{ 源:src }
    源: 文字;

    /**
     * Sets or retrieves the vertical margin for the object.
     */

    //@@{ 垂直间距:vspace }
    垂直间距: 数字;

    /**
     * Sets or retrieves the width of the object.
     */

    //@@{ 宽度:width }
    宽度: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML内联框架元素事件映射_:HTMLIFrameElementEventMap, 类型:type, 侦听器:listener, HTML内联框架元素_:HTMLIFrameElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML内联框架元素事件映射_>(类型: K, 侦听器: (本体: HTML内联框架元素_, ev: HTML内联框架元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML内联框架元素_: {

    //@@{ 原型:prototype, HTML内联框架元素_:HTMLIFrameElement }
    原型: HTML内联框架元素_;

    //@@{ HTML内联框架元素_:HTMLIFrameElement }
    新建(): HTML内联框架元素_;

};

//@@{ HTML图像元素_:HTMLImageElement, HTML元素_:HTMLElement }
接口 HTML图像元素_ 扩展 HTML元素_ {

    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */

    //@@{ 对齐:align }
    对齐: 文字;

    /**
     * Sets or retrieves a text alternative to the graphic.
     */

    //@@{ 描述:alt }
    描述: 文字;

    /**
     * Specifies the properties of a border drawn around an object.
     */

    //@@{ 边框:border }
    边框: 文字;

    /**
     * Retrieves whether the object is fully loaded.
     */

    //@@{ 完整的:complete }
    只读 完整的: 真假;

    //@@{ 交叉起点:crossOrigin }
    交叉起点: 文字 | 空值;

    //@@{ 当前源:currentSrc }
    只读 当前源: 文字;

    /**
     * Sets or retrieves the height of the object.
     */

    //@@{ 高度:height }
    高度: 数字;

    /**
     * Sets or retrieves the width of the border to draw around the object.
     */

    //@@{ 水平间距:hspace }
    水平间距: 数字;

    /**
     * Sets or retrieves whether the image is a server-side image map.
     */

    //@@{ 是映射:isMap }
    是映射: 真假;

    /**
     * Sets or retrieves a Uniform Resource Identifier (URI) to a long description of the object.
     */

    //@@{ 长描述:longDesc }
    长描述: 文字;

    //@@{ 低分辨源:lowsrc }
    低分辨源: 文字;

    /**
     * Gets or sets whether the DLNA PlayTo device is available.
     */

    //@@{ ms播放禁用:msPlayToDisabled }
    ms播放禁用: 真假;

    //@@{ ms播放首选源URI:msPlayToPreferredSourceUri }
    ms播放首选源URI: 文字;

    /**
     * Gets or sets the primary DLNA PlayTo device.
     */

    //@@{ ms主播放设备:msPlayToPrimary }
    ms主播放设备: 真假;

    /**
     * Gets the source associated with the media element for use by the PlayToManager.
     */

    //@@{ ms播放源:msPlayToSource }
    只读 ms播放源: 任意;

    /**
     * Sets or retrieves the name of the object.
     */

    //@@{ 名字:name }
    名字: 文字;

    /**
     * The original height of the image resource before sizing.
     */

    //@@{ 自然高度:naturalHeight }
    只读 自然高度: 数字;

    /**
     * The original width of the image resource before sizing.
     */

    //@@{ 自然宽度:naturalWidth }
    只读 自然宽度: 数字;

    //@@{ 大小:sizes }
    大小: 文字;

    /**
     * The address or URL of the a media resource that is to be considered.
     */

    //@@{ 源:src }
    源: 文字;

    //@@{ 源组:srcset }
    源组: 文字;

    /**
     * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
     */

    //@@{ 使用映射:useMap }
    使用映射: 文字;

    /**
     * Sets or retrieves the vertical margin for the object.
     */

    //@@{ 垂直间距:vspace }
    垂直间距: 数字;

    /**
     * Sets or retrieves the width of the object.
     */

    //@@{ 宽度:width }
    宽度: 数字;

    只读 x: 数字;

    只读 y: 数字;

    //@@{ ms取转为媒体源:msGetAsCastingSource }
    ms取转为媒体源(): 任意;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML图像元素_:HTMLImageElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML图像元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML图像元素_: {

    //@@{ 原型:prototype, HTML图像元素_:HTMLImageElement }
    原型: HTML图像元素_;

    //@@{ HTML图像元素_:HTMLImageElement }
    新建(): HTML图像元素_;

};

//@@{ HTML输入元素_:HTMLInputElement, HTML元素_:HTMLElement }
接口 HTML输入元素_ 扩展 HTML元素_ {

    /**
     * Sets or retrieves a comma-separated list of content types.
     */

    //@@{ 接受:accept }
    接受: 文字;

    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */

    //@@{ 对齐:align }
    对齐: 文字;

    /**
     * Sets or retrieves a text alternative to the graphic.
     */

    //@@{ 描述:alt }
    描述: 文字;

    /**
     * Specifies whether autocomplete is applied to an editable text field.
     */

    //@@{ 自动完成:autocomplete }
    自动完成: 文字;

    /**
     * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
     */

    //@@{ 自动对焦:autofocus }
    自动对焦: 真假;

    /**
     * Sets or retrieves the width of the border to draw around the object.
     */

    //@@{ 边框:border }
    边框: 文字;

    /**
     * Sets or retrieves the state of the check box or radio button.
     */

    //@@{ 检查:checked }
    检查: 真假;

    /**
     * Retrieves whether the object is fully loaded.
     */

    //@@{ 完整的:complete }
    只读 完整的: 真假;

    /**
     * Sets or retrieves the state of the check box or radio button.
     */

    //@@{ 默认选中:defaultChecked }
    默认选中: 真假;

    /**
     * Sets or retrieves the initial contents of the object.
     */

    //@@{ 默认值:defaultValue }
    默认值: 文字;

    //@@{ 禁用:disabled }
    禁用: 真假;

    /**
     * Returns a FileList object on a file type input object.
     */

    //@@{ 文件列表:files, 文件列表_:FileList }
    只读 文件列表: 文件列表_ | 空值;

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */

    //@@{ 表单:form, HTML表单元素_:HTMLFormElement }
    只读 表单: HTML表单元素_ | 空值;

    /**
     * Overrides the action attribute (where the data on a form is sent) on the parent form element.
     */

    //@@{ 表单动作:formAction }
    表单动作: 文字;

    /**
     * Used to override the encoding (formEnctype attribute) specified on the form element.
     */

    //@@{ 表单编码:formEnctype }
    表单编码: 文字;

    /**
     * Overrides the submit method attribute previously specified on a form element.
     */

    //@@{ 表单方法:formMethod }
    表单方法: 文字;

    /**
     * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
     */

    //@@{ 表单不验证:formNoValidate }
    表单不验证: 文字;

    /**
     * Overrides the target attribute on a form element.
     */

    //@@{ 表单目标:formTarget }
    表单目标: 文字;

    /**
     * Sets or retrieves the height of the object.
     */

    //@@{ 高度:height }
    高度: 文字;

    /**
     * Sets or retrieves the width of the border to draw around the object.
     */

    //@@{ 水平间距:hspace }
    水平间距: 数字;

    //@@{ 不确定的:indeterminate }
    不确定的: 真假;

    /**
     * Specifies the ID of a pre-defined datalist of options for an input element.
     */

    //@@{ 列表:list, HTML元素_:HTMLElement }
    只读 列表: HTML元素_;

    /**
     * Defines the maximum acceptable value for an input element with type="number".When used with the min and step attributes, lets you control the range and increment (such as only even numbers) that the user can enter into an input field.
     */

    //@@{ 最大:max }
    最大: 文字;

    /**
     * Sets or retrieves the maximum number of characters that the user can enter in a text control.
     */

    //@@{ 最大长度:maxLength }
    最大长度: 数字;

    /**
     * Defines the minimum acceptable value for an input element with type="number". When used with the max and step attributes, lets you control the range and increment (such as even numbers only) that the user can enter into an input field.
     */

    //@@{ 最小:min }
    最小: 文字;

    /**
     * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.
     */

    //@@{ 多行:multiple }
    多行: 真假;

    /**
     * Sets or retrieves the name of the object.
     */

    //@@{ 名字:name }
    名字: 文字;

    /**
     * Gets or sets a string containing a regular expression that the user's input must match.
     */

    //@@{ 模式:pattern }
    模式: 文字;

    /**
     * Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field.
     */

    //@@{ 占位符:placeholder }
    占位符: 文字;

    //@@{ 只读的:readOnly }
    只读的: 真假;

    /**
     * When present, marks an element that can't be submitted without a value.
     */

    //@@{ 必须的:required }
    必须的: 真假;

    //@@{ 选择方向:selectionDirection }
    选择方向: 文字;

    /**
     * Gets or sets the end position or offset of a text selection.
     */

    //@@{ 选择结束:selectionEnd }
    选择结束: 数字;

    /**
     * Gets or sets the starting position or offset of a text selection.
     */

    //@@{ 选择开始:selectionStart }
    选择开始: 数字;

    //@@{ 大小:size }
    大小: 数字;

    /**
     * The address or URL of the a media resource that is to be considered.
     */

    //@@{ 源:src }
    源: 文字;

    //@@{ 状态:status }
    状态: 真假;

    /**
     * Defines an increment or jump between values that you want to allow the user to enter. When used with the max and min attributes, lets you control the range and increment (for example, allow only even numbers) that the user can enter into an input field.
     */

    //@@{ 步幅:step }
    步幅: 文字;

    /**
     * Returns the content type of the object.
     */

    //@@{ 类型:type }
    类型: 文字;

    /**
     * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
     */

    //@@{ 使用映射:useMap }
    使用映射: 文字;

    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */

    //@@{ 验证消息:validationMessage }
    只读 验证消息: 文字;

    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */

    //@@{ 有效性:validity, 有效状态_:ValidityState }
    只读 有效性: 有效状态_;

    /**
     * Returns the value of the data at the cursor's current position.
     */

    //@@{ 值:value }
    值: 文字;

    //@@{ 值转为日期:valueAsDate, 日期_:Date }
    值转为日期: 日期_;

    /**
     * Returns the input field value as a number.
     */

    //@@{ 值转为数字:valueAsNumber }
    值转为数字: 数字;

    /**
     * Sets or retrieves the vertical margin for the object.
     */

    //@@{ 垂直间距:vspace }
    垂直间距: 数字;

    //@@{ webkit目录:webkitdirectory }
    webkit目录: 真假;

    /**
     * Sets or retrieves the width of the object.
     */

    //@@{ 宽度:width }
    宽度: 文字;

    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */

    //@@{ 将验证:willValidate }
    只读 将验证: 真假;

    //@@{ 最小长度:minLength }
    最小长度: 数字;

    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */

    //@@{ 检查有效性:checkValidity }
    检查有效性(): 真假;

    /**
     * Makes the selection equal to the current object.
     */

    //@@{ 选择:select }
    选择(): 无值;

    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param 错误 Sets a custom error message that is displayed when a form is submitted.
     */

    //@@{ 置自定义有效性:setCustomValidity, 错误:error }
    置自定义有效性(错误: 文字): 无值;

    /**
     * Sets the start and end positions of a selection in a text field.
     * @param 开始 The offset into the text field for the start of the selection.
     * @param 结束 The offset into the text field for the end of the selection.
     */

    //@@{ 置选择范围:setSelectionRange, 开始:start, 结束:end, 方向:direction }
    置选择范围(开始?: 数字, 结束?: 数字, 方向?: 文字): 无值;

    /**
     * Decrements a range input control's value by the value given by the Step attribute. If the optional parameter is used, it will decrement the input control's step value multiplied by the parameter's value.
     * @param n Value to decrement the value by.
     */

    //@@{ 减小步幅:stepDown }
    减小步幅(n?: 数字): 无值;

    /**
     * Increments a range input control's value by the value given by the Step attribute. If the optional parameter is used, will increment the input control's value by that value.
     * @param n Value to increment the value by.
     */

    //@@{ 增加步幅:stepUp }
    增加步幅(n?: 数字): 无值;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML输入元素_:HTMLInputElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML输入元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML输入元素_: {

    //@@{ 原型:prototype, HTML输入元素_:HTMLInputElement }
    原型: HTML输入元素_;

    //@@{ HTML输入元素_:HTMLInputElement }
    新建(): HTML输入元素_;

};

//@@{ HTML标签元素_:HTMLLabelElement, HTML元素_:HTMLElement }
接口 HTML标签元素_ 扩展 HTML元素_ {

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */

    //@@{ 表单:form, HTML表单元素_:HTMLFormElement }
    只读 表单: HTML表单元素_ | 空值;

    /**
     * Sets or retrieves the object to which the given label object is assigned.
     */

    //@@{ 绑定表单:htmlFor }
    绑定表单: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML标签元素_:HTMLLabelElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML标签元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML标签元素_: {

    //@@{ 原型:prototype, HTML标签元素_:HTMLLabelElement }
    原型: HTML标签元素_;

    //@@{ HTML标签元素_:HTMLLabelElement }
    新建(): HTML标签元素_;

};

//@@{ HTML分组标题元素_:HTMLLegendElement, HTML元素_:HTMLElement }
接口 HTML分组标题元素_ 扩展 HTML元素_ {

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */

    //@@{ 对齐:align }
    对齐: 文字;

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */

    //@@{ 表单:form, HTML表单元素_:HTMLFormElement }
    只读 表单: HTML表单元素_ | 空值;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML分组标题元素_:HTMLLegendElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML分组标题元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML分组标题元素_: {

    //@@{ 原型:prototype, HTML分组标题元素_:HTMLLegendElement }
    原型: HTML分组标题元素_;

    //@@{ HTML分组标题元素_:HTMLLegendElement }
    新建(): HTML分组标题元素_;

};

//@@{ HTML列表项元素_:HTMLLIElement, HTML元素_:HTMLElement }
接口 HTML列表项元素_ 扩展 HTML元素_ {

    //@@{ 类型:type }
    类型: 文字;

    /**
     * Sets or retrieves the value of a list item.
     */

    //@@{ 值:value }
    值: 数字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML列表项元素_:HTMLLIElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML列表项元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML列表项元素_: {

    //@@{ 原型:prototype, HTML列表项元素_:HTMLLIElement }
    原型: HTML列表项元素_;

    //@@{ HTML列表项元素_:HTMLLIElement }
    新建(): HTML列表项元素_;

};

//@@{ HTML外部样式元素_:HTMLLinkElement, HTML元素_:HTMLElement, 链接样式_:LinkStyle }
接口 HTML外部样式元素_ 扩展 HTML元素_, 链接样式_ {

    /**
     * Sets or retrieves the character set used to encode the object.
     */

    //@@{ 字符集:charset }
    字符集: 文字;

    //@@{ 禁用:disabled }
    禁用: 真假;

    /**
     * Sets or retrieves a destination URL or an anchor point.
     */

    //@@{ 目标URL:href }
    目标URL: 文字;

    /**
     * Sets or retrieves the language code of the object.
     */

    //@@{ 语言代码:hreflang }
    语言代码: 文字;

    /**
     * Sets or retrieves the media type.
     */

    //@@{ 媒体:media }
    媒体: 文字;

    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     */

    //@@{ 当前与目标文档联系:rel }
    当前与目标文档联系: 文字;

    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     */

    //@@{ 目标与当前文档联系:rev }
    目标与当前文档联系: 文字;

    /**
     * Sets or retrieves the window or frame at which to target content.
     */

    //@@{ 目标:target }
    目标: 文字;

    /**
     * Sets or retrieves the MIME type of the object.
     */

    //@@{ 类型:type }
    类型: 文字;

    //@@{ 导入:import, 文档_:Document }
    导入?: 文档_;

    //@@{ 完整性:integrity }
    完整性: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML外部样式元素_:HTMLLinkElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML外部样式元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML外部样式元素_: {

    //@@{ 原型:prototype, HTML外部样式元素_:HTMLLinkElement }
    原型: HTML外部样式元素_;

    //@@{ HTML外部样式元素_:HTMLLinkElement }
    新建(): HTML外部样式元素_;

};

//@@{ HTML图像映射元素_:HTMLMapElement, HTML元素_:HTMLElement }
接口 HTML图像映射元素_ 扩展 HTML元素_ {

    /**
     * Retrieves a collection of the area objects defined for the given map object.
     */

    //@@{ 区域:areas, HTML区域集合_:HTMLAreasCollection }
    只读 区域: HTML区域集合_;

    /**
     * Sets or retrieves the name of the object.
     */

    //@@{ 名字:name }
    名字: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML图像映射元素_:HTMLMapElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML图像映射元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML图像映射元素_: {

    //@@{ 原型:prototype, HTML图像映射元素_:HTMLMapElement }
    原型: HTML图像映射元素_;

    //@@{ HTML图像映射元素_:HTMLMapElement }
    新建(): HTML图像映射元素_;

};

//@@{ HTML字幕元素事件映射_:HTMLMarqueeElementEventMap, HTML元素事件映射_:HTMLElementEventMap }
接口 HTML字幕元素事件映射_ 扩展 HTML元素事件映射_ {

    //@@{ "反弹":"bounce", 事件_:Event }
    "反弹": 事件_;

    //@@{ "完成":"finish", 事件_:Event }
    "完成": 事件_;

    //@@{ "开始":"start", 事件_:Event }
    "开始": 事件_;

}

//@@{ HTML字幕元素_:HTMLMarqueeElement, HTML元素_:HTMLElement }
接口 HTML字幕元素_ 扩展 HTML元素_ {

    //@@{ 行为:behavior }
    行为: 文字;

    //@@{ 背景颜色:bgColor }
    背景颜色: 任意;

    //@@{ 方向:direction }
    方向: 文字;

    //@@{ 高度:height }
    高度: 文字;

    //@@{ 水平间距:hspace }
    水平间距: 数字;

    //@@{ 循环:loop }
    循环: 数字;

    //@@{ 正在反弹:onbounce, HTML字幕元素_:HTMLMarqueeElement, 事件_:Event }
    正在反弹: (本体: HTML字幕元素_, ev: 事件_) => 任意;

    //@@{ 正在完成:onfinish, HTML字幕元素_:HTMLMarqueeElement, 事件_:Event }
    正在完成: (本体: HTML字幕元素_, ev: 事件_) => 任意;

    //@@{ 正在开始:onstart, HTML字幕元素_:HTMLMarqueeElement, 事件_:Event }
    正在开始: (本体: HTML字幕元素_, ev: 事件_) => 任意;

    //@@{ 滚动量:scrollAmount }
    滚动量: 数字;

    //@@{ 滚动延迟:scrollDelay }
    滚动延迟: 数字;

    //@@{ 真速度:trueSpeed }
    真速度: 真假;

    //@@{ 垂直间距:vspace }
    垂直间距: 数字;

    //@@{ 宽度:width }
    宽度: 文字;

    //@@{ 开始:start }
    开始(): 无值;

    //@@{ 停止:stop }
    停止(): 无值;

    //@@{ 添加事件监听器:addEventListener, HTML字幕元素事件映射_:HTMLMarqueeElementEventMap, 类型:type, 侦听器:listener, HTML字幕元素_:HTMLMarqueeElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML字幕元素事件映射_>(类型: K, 侦听器: (本体: HTML字幕元素_, ev: HTML字幕元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML字幕元素_: {

    //@@{ 原型:prototype, HTML字幕元素_:HTMLMarqueeElement }
    原型: HTML字幕元素_;

    //@@{ HTML字幕元素_:HTMLMarqueeElement }
    新建(): HTML字幕元素_;

};

//@@{ HTML媒体元素事件映射_:HTMLMediaElementEventMap, HTML元素事件映射_:HTMLElementEventMap }
接口 HTML媒体元素事件映射_ 扩展 HTML元素事件映射_ {

    //@@{ "加密":"encrypted", 媒体加密事件_:MediaEncryptedEvent }
    "加密": 媒体加密事件_;

    //@@{ "ms需要密码":"msneedkey", MS媒体键需要事件_:MSMediaKeyNeededEvent }
    "ms需要密码": MS媒体键需要事件_;

}

//@@{ HTML媒体元素_:HTMLMediaElement, HTML元素_:HTMLElement }
接口 HTML媒体元素_ 扩展 HTML元素_ {

    /**
     * Returns an AudioTrackList object with the audio tracks for a given video element.
     */

    //@@{ 音频轨道:audioTracks, 音频轨道列表_:AudioTrackList }
    只读 音频轨道: 音频轨道列表_;

    /**
     * Gets or sets a value that indicates whether to start playing the media automatically.
     */

    //@@{ 自动播放:autoplay }
    自动播放: 真假;

    /**
     * Gets a collection of buffered time ranges.
     */

    //@@{ 缓冲:buffered, 时间范围_:TimeRanges }
    只读 缓冲: 时间范围_;

    /**
     * Gets or sets a flag that indicates whether the client provides a set of controls for the media (in case the developer does not include controls for the player).
     */

    //@@{ 控制:controls }
    控制: 真假;

    //@@{ 交叉起点:crossOrigin }
    交叉起点: 文字 | 空值;

    /**
     * Gets the address or URL of the current media resource that is selected by IHTMLMediaElement.
     */

    //@@{ 当前源:currentSrc }
    只读 当前源: 文字;

    /**
     * Gets or sets the current playback position, in seconds.
     */

    //@@{ 当前时间:currentTime }
    当前时间: 数字;

    //@@{ 默认静音:defaultMuted }
    默认静音: 真假;

    /**
     * Gets or sets the default playback rate when the user is not using fast forward or reverse for a video or audio resource.
     */

    //@@{ 默认回放速度:defaultPlaybackRate }
    默认回放速度: 数字;

    /**
     * Returns the duration in seconds of the current media resource. A NaN value is returned if duration is not available, or Infinity if the media resource is streaming.
     */

    //@@{ 持续时间:duration }
    只读 持续时间: 数字;

    /**
     * Gets information about whether the playback has ended or not.
     */

    //@@{ 结束了:ended }
    只读 结束了: 真假;

    /**
     * Returns an object representing the current error state of the audio or video element.
     */

    //@@{ 错误:error, 媒体错误_:MediaError }
    只读 错误: 媒体错误_;

    /**
     * Gets or sets a flag to specify whether playback should restart after it completes.
     */

    //@@{ 循环:loop }
    循环: 真假;

    //@@{ 媒体键:mediaKeys, 媒体键组_:MediaKeys }
    只读 媒体键: 媒体键组_ | 空值;

    /**
     * Specifies the purpose of the audio or video media, such as background audio or alerts.
     */

    //@@{ ms音频类别:msAudioCategory }
    ms音频类别: 文字;

    /**
     * Specifies the output device id that the audio will be sent to.
     */

    //@@{ ms音频设备类型:msAudioDeviceType }
    ms音频设备类型: 文字;

    //@@{ ms图形信任状态:msGraphicsTrustStatus, MS图形信任_:MSGraphicsTrust }
    只读 ms图形信任状态: MS图形信任_;

    /**
     * Gets the MSMediaKeys object, which is used for decrypting media data, that is associated with this media element.
     */

    //@@{ ms键组:msKeys, MS媒体键组_:MSMediaKeys }
    只读 ms键组: MS媒体键组_;

    /**
     * Gets or sets whether the DLNA PlayTo device is available.
     */

    //@@{ ms播放禁用:msPlayToDisabled }
    ms播放禁用: 真假;

    /**
     * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.
     */

    //@@{ ms播放首选源URI:msPlayToPreferredSourceUri }
    ms播放首选源URI: 文字;

    /**
     * Gets or sets the primary DLNA PlayTo device.
     */

    //@@{ ms主播放设备:msPlayToPrimary }
    ms主播放设备: 真假;

    /**
     * Gets the source associated with the media element for use by the PlayToManager.
     */

    //@@{ ms播放源:msPlayToSource }
    只读 ms播放源: 任意;

    /**
     * Specifies whether or not to enable low-latency playback on the media element.
     */

    //@@{ ms真正时间:msRealTime }
    ms真正时间: 真假;

    /**
     * Gets or sets a flag that indicates whether the audio (either audio or the audio track on video media) is muted.
     */

    //@@{ 柔和的:muted }
    柔和的: 真假;

    /**
     * Gets the current network activity for the element.
     */

    //@@{ 网络状态:networkState }
    只读 网络状态: 数字;

    //@@{ 正在加密:onencrypted, HTML媒体元素_:HTMLMediaElement, 媒体加密事件_:MediaEncryptedEvent }
    正在加密: (本体: HTML媒体元素_, ev: 媒体加密事件_) => 任意;

    //@@{ 正在ms需要密码:onmsneedkey, HTML媒体元素_:HTMLMediaElement, MS媒体键需要事件_:MSMediaKeyNeededEvent }
    正在ms需要密码: (本体: HTML媒体元素_, ev: MS媒体键需要事件_) => 任意;

    /**
     * Gets a flag that specifies whether playback is paused.
     */

    //@@{ 停顿:paused }
    只读 停顿: 真假;

    /**
     * Gets or sets the current rate of speed for the media resource to play. This speed is expressed as a multiple of the normal speed of the media resource.
     */

    //@@{ 回放速度:playbackRate }
    回放速度: 数字;

    /**
     * Gets TimeRanges for the current media resource that has been played.
     */

    //@@{ 播放时间范围:played, 时间范围_:TimeRanges }
    只读 播放时间范围: 时间范围_;

    /**
     * Gets or sets the current playback position, in seconds.
     */

    //@@{ 预加载:preload }
    预加载: 文字;

    //@@{ 就绪状态:readyState }
    就绪状态: 数字;

    /**
     * Returns a TimeRanges object that represents the ranges of the current media resource that can be seeked.
     */

    //@@{ 可搜索:seekable, 时间范围_:TimeRanges }
    只读 可搜索: 时间范围_;

    /**
     * Gets a flag that indicates whether the the client is currently moving to a new playback position in the media resource.
     */

    //@@{ 搜索时:seeking }
    只读 搜索时: 真假;

    /**
     * The address or URL of the a media resource that is to be considered.
     */

    //@@{ 源:src }
    源: 文字;

    //@@{ 源对象:srcObject, 媒体流_:MediaStream }
    源对象: 媒体流_ | 空值;

    //@@{ 文本轨道:textTracks, 文本轨道列表_:TextTrackList }
    只读 文本轨道: 文本轨道列表_;

    //@@{ 视频轨道:videoTracks, 视频轨道列表_:VideoTrackList }
    只读 视频轨道: 视频轨道列表_;

    /**
     * Gets or sets the volume level for audio portions of the media element.
     */

    //@@{ 音量:volume }
    音量: 数字;

    //@@{ 添加文本轨道:addTextTrack, 种类:kind, 标签:label, 语言:language, 文本轨道_:TextTrack }
    添加文本轨道(种类: 文字, 标签?: 文字, 语言?: 文字): 文本轨道_;

    /**
     * Returns a string that specifies whether the client can play a given media resource type.
     */

    //@@{ 可播放类型:canPlayType, 类型:type }
    可播放类型(类型: 文字): 文字;

    /**
     * Resets the audio or video object and loads a new media resource.
     */

    //@@{ 加载:load }
    加载(): 无值;

    /**
     * Clears all effects from the media pipeline.
     */

    //@@{ ms清除影响:msClearEffects }
    ms清除影响(): 无值;

    //@@{ ms取转为设备媒体源:msGetAsCastingSource }
    ms取转为设备媒体源(): 任意;

    /**
     * Inserts the specified audio effect into media pipeline.
     */

    //@@{ ms插入音频效果:msInsertAudioEffect, 激活类Id:activatableClassId, 效果要求:effectRequired, 配置:config }
    ms插入音频效果(激活类Id: 文字, 效果要求: 真假, 配置?: 任意): 无值;

    //@@{ ms设置媒体键:msSetMediaKeys, 媒体键:mediaKeys, MS媒体键组_:MSMediaKeys }
    ms设置媒体键(媒体键: MS媒体键组_): 无值;

    /**
     * Specifies the media protection manager for a given media pipeline.
     */

    //@@{ ms设置媒体保护管理者:msSetMediaProtectionManager, 媒体保护管理者:mediaProtectionManager }
    ms设置媒体保护管理者(媒体保护管理者?: 任意): 无值;

    /**
     * Pauses the current playback and sets paused to TRUE. This can be used to test whether the media is playing or paused. You can also use the pause or play events to tell whether the media is playing or not.
     */

    //@@{ 暂停:pause }
    暂停(): 无值;

    /**
     * Loads and starts playback of a media resource.
     */

    //@@{ 播放:play, 预设_:Promise }
    播放(): 预设_<无值>;

    //@@{ 置媒体键组:setMediaKeys, 媒体键:mediaKeys, 媒体键组_:MediaKeys, 预设_:Promise }
    置媒体键组(媒体键: 媒体键组_ | 空值): 预设_<无值>;

    //@@{ __有_当前的_数据__:HAVE_CURRENT_DATA }
    只读 __有_当前的_数据__: 数字;

    //@@{ __有_足够的_数据__:HAVE_ENOUGH_DATA }
    只读 __有_足够的_数据__: 数字;

    //@@{ __有_未来_数据__:HAVE_FUTURE_DATA }
    只读 __有_未来_数据__: 数字;

    //@@{ __有_元数据__:HAVE_METADATA }
    只读 __有_元数据__: 数字;

    只读 HAVE_NOTHING: 数字;

    //@@{ __网络_空__:NETWORK_EMPTY }
    只读 __网络_空__: 数字;

    //@@{ __网络_闲置__:NETWORK_IDLE }
    只读 __网络_闲置__: 数字;

    //@@{ __网络_加载__:NETWORK_LOADING }
    只读 __网络_加载__: 数字;

    //@@{ __网络_没有_源__:NETWORK_NO_SOURCE }
    只读 __网络_没有_源__: 数字;

    //@@{ 添加事件监听器:addEventListener, HTML媒体元素事件映射_:HTMLMediaElementEventMap, 类型:type, 侦听器:listener, HTML媒体元素_:HTMLMediaElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML媒体元素事件映射_>(类型: K, 侦听器: (本体: HTML媒体元素_, ev: HTML媒体元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML媒体元素_: {

    //@@{ 原型:prototype, HTML媒体元素_:HTMLMediaElement }
    原型: HTML媒体元素_;

    //@@{ HTML媒体元素_:HTMLMediaElement }
    新建(): HTML媒体元素_;

    //@@{ __有_当前的_数据__:HAVE_CURRENT_DATA }
    只读 __有_当前的_数据__: 数字; 

    //@@{ __有_足够的_数据__:HAVE_ENOUGH_DATA }
    只读 __有_足够的_数据__: 数字;

    //@@{ __有_未来_数据__:HAVE_FUTURE_DATA }
    只读 __有_未来_数据__: 数字;

    //@@{ __有_元数据__:HAVE_METADATA }
    只读 __有_元数据__: 数字;

    //@@{ __有_没有什么__:HAVE_NOTHING }
    只读 __有_没有什么__: 数字;

    //@@{ __网络_空__:NETWORK_EMPTY }
    只读 __网络_空__: 数字;

    //@@{ __网络_闲置__:NETWORK_IDLE }
    只读 __网络_闲置__: 数字;

    //@@{ __网络_加载__:NETWORK_LOADING }
    只读 __网络_加载__: 数字;

    //@@{ __网络_没有_源__:NETWORK_NO_SOURCE }
    只读 __网络_没有_源__: 数字;

};

//@@{ HTML菜单元素_:HTMLMenuElement, HTML元素_:HTMLElement }
接口 HTML菜单元素_ 扩展 HTML元素_ {

    //@@{ 紧凑的:compact }
    紧凑的: 真假;

    //@@{ 类型:type }
    类型: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML菜单元素_:HTMLMenuElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML菜单元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML菜单元素_: {

    //@@{ 原型:prototype, HTML菜单元素_:HTMLMenuElement }
    原型: HTML菜单元素_;

    //@@{ HTML菜单元素_:HTMLMenuElement }
    新建(): HTML菜单元素_;

};

//@@{ HTML元数据元素_:HTMLMetaElement, HTML元素_:HTMLElement }
接口 HTML元数据元素_ 扩展 HTML元素_ {

    /**
     * Sets or retrieves the character set used to encode the object.
     */

    //@@{ 字符集:charset }
    字符集: 文字;

    /**
     * Gets or sets meta-information to associate with httpEquiv or name.
     */

    //@@{ 内容:content }
    内容: 文字;

    /**
     * Gets or sets information used to bind the value of a content attribute of a meta element to an HTTP response header.
     */

    //@@{ http关联到头:httpEquiv }
    http关联到头: 文字;

    /**
     * Sets or retrieves the value specified in the content attribute of the meta object.
     */

    //@@{ 名字:name }
    名字: 文字;

    /**
     * Sets or retrieves a scheme to be used in interpreting the value of a property specified for the object.
     */

    //@@{ 计划:scheme }
    计划: 文字;

    /**
     * Sets or retrieves the URL property that will be loaded after the specified time has elapsed.
     */

    url: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML元数据元素_:HTMLMetaElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML元数据元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML元数据元素_: {

    //@@{ 原型:prototype, HTML元数据元素_:HTMLMetaElement }
    原型: HTML元数据元素_;

    //@@{ HTML元数据元素_:HTMLMetaElement }
    新建(): HTML元数据元素_;

};

//@@{ HTML度量表元素_:HTMLMeterElement, HTML元素_:HTMLElement }
接口 HTML度量表元素_ 扩展 HTML元素_ {

    //@@{ 高:high }
    高: 数字;

    //@@{ 低:low }
    低: 数字;

    //@@{ 最大:max }
    最大: 数字;

    //@@{ 最小:min }
    最小: 数字;

    //@@{ 最优:optimum }
    最优: 数字;

    //@@{ 值:value }
    值: 数字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML度量表元素_:HTMLMeterElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML度量表元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML度量表元素_: {

    //@@{ 原型:prototype, HTML度量表元素_:HTMLMeterElement }
    原型: HTML度量表元素_;

    //@@{ HTML度量表元素_:HTMLMeterElement }
    新建(): HTML度量表元素_;

};

//@@{ HTML模板元素_:HTMLModElement, HTML元素_:HTMLElement }
接口 HTML模板元素_ 扩展 HTML元素_ {

    /**
     * Sets or retrieves reference information about the object.
     */

    //@@{ 引用:cite }
    引用: 文字;

    /**
     * Sets or retrieves the date and time of a modification to the object.
     */

    //@@{ 日期时间:dateTime }
    日期时间: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML模板元素_:HTMLModElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML模板元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML模板元素_: {

    //@@{ 原型:prototype, HTML模板元素_:HTMLModElement }
    原型: HTML模板元素_;

    //@@{ HTML模板元素_:HTMLModElement }
    新建(): HTML模板元素_;

};

//@@{ HTML对象元素_:HTMLObjectElement, HTML元素_:HTMLElement, 取SVG文档_:GetSVGDocument }
接口 HTML对象元素_ 扩展 HTML元素_, 取SVG文档_ {

    //@@{ 对齐:align }
    对齐: 文字;

    /**
     * Sets or retrieves a text alternative to the graphic.
     */

    //@@{ 描述:alt }
    描述: 文字;

    /**
     * Gets or sets the optional alternative HTML script to execute if the object fails to load.
     */

    //@@{ 描述Html:altHtml }
    描述Html: 文字;

    /**
     * Sets or retrieves a character string that can be used to implement your own archive functionality for the object.
     */

    //@@{ 存档:archive }
    存档: 文字;

    /**
     * Retrieves a string of the URL where the object tag can be found. This is often the href of the document that the object is in, or the value set by a base element.
     */

    //@@{ 基链接:BaseHref }
    只读 基链接: 文字;

    //@@{ 边框:border }
    边框: 文字;

    /**
     * Sets or retrieves the URL of the file containing the compiled Java class.
     */

    //@@{ 代码:code }
    代码: 文字;

    /**
     * Sets or retrieves the URL of the component.
     */

    //@@{ 代码基:codeBase }
    代码基: 文字;

    /**
     * Sets or retrieves the Internet media type for the code associated with the object.
     */

    //@@{ 代码类型:codeType }
    代码类型: 文字;

    /**
     * Retrieves the document object of the page or frame.
     */

    //@@{ 文档内容:contentDocument, 文档_:Document }
    只读 文档内容: 文档_;

    /**
     * Sets or retrieves the URL that references the data of the object.
     */

    //@@{ 数据:data }
    数据: 文字;

    //@@{ 声明:declare }
    声明: 真假;

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */

    //@@{ 表单:form, HTML表单元素_:HTMLFormElement }
    只读 表单: HTML表单元素_ | 空值;

    /**
     * Sets or retrieves the height of the object.
     */

    //@@{ 高度:height }
    高度: 文字;

    //@@{ 水平间距:hspace }
    水平间距: 数字;

    /**
     * Gets or sets whether the DLNA PlayTo device is available.
     */

    //@@{ ms播放禁用:msPlayToDisabled }
    ms播放禁用: 真假;

    /**
     * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.
     */

    //@@{ ms播放首选源URI:msPlayToPreferredSourceUri }
    ms播放首选源URI: 文字;

    /**
     * Gets or sets the primary DLNA PlayTo device.
     */

    //@@{ ms主播放设备:msPlayToPrimary }
    ms主播放设备: 真假;

    /**
     * Gets the source associated with the media element for use by the PlayToManager.
     */

    //@@{ ms播放源:msPlayToSource }
    只读 ms播放源: 任意;

    /**
     * Sets or retrieves the name of the object.
     */

    //@@{ 名字:name }
    名字: 文字;

    //@@{ 就绪状态:readyState }
    只读 就绪状态: 数字;

    /**
     * Sets or retrieves a message to be displayed while an object is loading.
     */

    //@@{ 备用:standby }
    备用: 文字;

    /**
     * Sets or retrieves the MIME type of the object.
     */

    //@@{ 类型:type }
    类型: 文字;

    /**
     * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
     */

    //@@{ 使用映射:useMap }
    使用映射: 文字;

    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */

    //@@{ 验证消息:validationMessage }
    只读 验证消息: 文字;

    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */

    //@@{ 有效性:validity, 有效状态_:ValidityState }
    只读 有效性: 有效状态_;

    //@@{ 垂直间距:vspace }
    垂直间距: 数字;

    /**
     * Sets or retrieves the width of the object.
     */

    //@@{ 宽度:width }
    宽度: 文字;

    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */

    //@@{ 将验证:willValidate }
    只读 将验证: 真假;

    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */

    //@@{ 检查有效性:checkValidity }
    检查有效性(): 真假;

    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param 错误 Sets a custom error message that is displayed when a form is submitted.
     */

    //@@{ 置自定义有效性:setCustomValidity, 错误:error }
    置自定义有效性(错误: 文字): 无值;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML对象元素_:HTMLObjectElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML对象元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML对象元素_: {

    //@@{ 原型:prototype, HTML对象元素_:HTMLObjectElement }
    原型: HTML对象元素_;

    //@@{ HTML对象元素_:HTMLObjectElement }
    新建(): HTML对象元素_;

};

//@@{ HTML有序列表元素_:HTMLOListElement, HTML元素_:HTMLElement }
接口 HTML有序列表元素_ 扩展 HTML元素_ {

    //@@{ 紧凑的:compact }
    紧凑的: 真假;

    /**
     * The starting number.
     */

    //@@{ 开始:start }
    开始: 数字;

    //@@{ 类型:type }
    类型: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML有序列表元素_:HTMLOListElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML有序列表元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML有序列表元素_: {

    //@@{ 原型:prototype, HTML有序列表元素_:HTMLOListElement }
    原型: HTML有序列表元素_;

    //@@{ HTML有序列表元素_:HTMLOListElement }
    新建(): HTML有序列表元素_;

};

//@@{ HTML选项组元素_:HTMLOptGroupElement, HTML元素_:HTMLElement }
接口 HTML选项组元素_ 扩展 HTML元素_ {

    /**
     * Sets or retrieves the status of an option.
     */

    //@@{ 默认选中:defaultSelected }
    默认选中: 真假;

    //@@{ 禁用:disabled }
    禁用: 真假;

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */

    //@@{ 表单:form, HTML表单元素_:HTMLFormElement }
    只读 表单: HTML表单元素_ | 空值;

    /**
     * Sets or retrieves the ordinal position of an option in a list box.
     */

    //@@{ 索引:index }
    只读 索引: 数字;

    /**
     * Sets or retrieves a value that you can use to implement your own label functionality for the object.
     */

    //@@{ 标签:label }
    标签: 文字;

    /**
     * Sets or retrieves whether the option in the list box is the default item.
     */

    //@@{ 选择的:selected }
    选择的: 真假;

    /**
     * Sets or retrieves the text string specified by the option tag.
     */

    //@@{ 文本:text }
    只读 文本: 文字;

    /**
     * Sets or retrieves the value which is returned to the server when the form control is submitted.
     */

    //@@{ 值:value }
    值: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML选项组元素_:HTMLOptGroupElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML选项组元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML选项组元素_: {

    //@@{ 原型:prototype, HTML选项组元素_:HTMLOptGroupElement }
    原型: HTML选项组元素_;

    //@@{ HTML选项组元素_:HTMLOptGroupElement }
    新建(): HTML选项组元素_;

};

//@@{ HTML选项元素_:HTMLOptionElement, HTML元素_:HTMLElement }
接口 HTML选项元素_ 扩展 HTML元素_ {

    /**
     * Sets or retrieves the status of an option.
     */

    //@@{ 默认选中:defaultSelected }
    默认选中: 真假;

    //@@{ 禁用:disabled }
    禁用: 真假;

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */

    //@@{ 表单:form, HTML表单元素_:HTMLFormElement }
    只读 表单: HTML表单元素_ | 空值;

    /**
     * Sets or retrieves the ordinal position of an option in a list box.
     */

    //@@{ 索引:index }
    只读 索引: 数字;

    /**
     * Sets or retrieves a value that you can use to implement your own label functionality for the object.
     */

    //@@{ 标签:label }
    标签: 文字;

    /**
     * Sets or retrieves whether the option in the list box is the default item.
     */

    //@@{ 选择的:selected }
    选择的: 真假;

    /**
     * Sets or retrieves the text string specified by the option tag.
     */

    //@@{ 文本:text }
    文本: 文字;

    /**
     * Sets or retrieves the value which is returned to the server when the form control is submitted.
     */

    //@@{ 值:value }
    值: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML选项元素_:HTMLOptionElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML选项元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML选项元素_: {

    //@@{ 原型:prototype, HTML选项元素_:HTMLOptionElement }
    原型: HTML选项元素_;

    //@@{ HTML选项元素_:HTMLOptionElement }
    新建(): HTML选项元素_;

};

//@@{ HTML选项集合_:HTMLOptionsCollection, HTML集合的_:HTMLCollectionOf, HTML选项元素_:HTMLOptionElement }
接口 HTML选项集合_ 扩展 HTML集合的_<HTML选项元素_> {

    //@@{ 长度:length }
    长度: 数字;

    //@@{ 选择的索引:selectedIndex }
    选择的索引: 数字;

    //@@{ 添加:add, 元素:element, HTML选项元素_:HTMLOptionElement, HTML选项组元素_:HTMLOptGroupElement, 之前:before, HTML元素_:HTMLElement }
    添加(元素: HTML选项元素_ | HTML选项组元素_, 之前?: HTML元素_ | 数字): 无值;

    //@@{ 删除:remove, 索引:index }
    删除(索引: 数字): 无值;

}

声明 值量 HTML选项集合_: {

    //@@{ 原型:prototype, HTML选项集合_:HTMLOptionsCollection }
    原型: HTML选项集合_;

    //@@{ HTML选项集合_:HTMLOptionsCollection }
    新建(): HTML选项集合_;

};

//@@{ HTML输出元素_:HTMLOutputElement, HTML元素_:HTMLElement }
接口 HTML输出元素_ 扩展 HTML元素_ {

    //@@{ 默认值:defaultValue }
    默认值: 文字;

    //@@{ 表单:form, HTML表单元素_:HTMLFormElement }
    只读 表单: HTML表单元素_ | 空值;

    //@@{ 绑定表单:htmlFor, 文档可设置标记列表_:DOMSettableTokenList }
    只读 绑定表单: 文档可设置标记列表_;

    //@@{ 名字:name }
    名字: 文字;

    //@@{ 类型:type }
    只读 类型: 文字;

    //@@{ 验证消息:validationMessage }
    只读 验证消息: 文字;

    //@@{ 有效性:validity, 有效状态_:ValidityState }
    只读 有效性: 有效状态_;

    //@@{ 值:value }
    值: 文字;

    //@@{ 将验证:willValidate }
    只读 将验证: 真假;

    //@@{ 检查有效性:checkValidity }
    检查有效性(): 真假;

    //@@{ 报告有效性:reportValidity }
    报告有效性(): 真假;

    //@@{ 置自定义有效性:setCustomValidity, 错误:error }
    置自定义有效性(错误: 文字): 无值;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML输出元素_:HTMLOutputElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML输出元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML输出元素_: {

    //@@{ 原型:prototype, HTML输出元素_:HTMLOutputElement }
    原型: HTML输出元素_;

    //@@{ HTML输出元素_:HTMLOutputElement }
    新建(): HTML输出元素_;

};

//@@{ HTML段落元素_:HTMLParagraphElement, HTML元素_:HTMLElement }
接口 HTML段落元素_ 扩展 HTML元素_ {

    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */

    //@@{ 对齐:align }
    对齐: 文字;

    //@@{ 清除:clear }
    清除: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML段落元素_:HTMLParagraphElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML段落元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML段落元素_: {

    //@@{ 原型:prototype, HTML段落元素_:HTMLParagraphElement }
    原型: HTML段落元素_;

    //@@{ HTML段落元素_:HTMLParagraphElement }
    新建(): HTML段落元素_;

};

//@@{ HTML参数元素_:HTMLParamElement, HTML元素_:HTMLElement }
接口 HTML参数元素_ 扩展 HTML元素_ {

    /**
     * Sets or retrieves the name of an input parameter for an element.
     */

    //@@{ 名字:name }
    名字: 文字;

    /**
     * Sets or retrieves the content type of the resource designated by the value attribute.
     */

    //@@{ 类型:type }
    类型: 文字;

    /**
     * Sets or retrieves the value of an input parameter for an element.
     */

    //@@{ 值:value }
    值: 文字;

    /**
     * Sets or retrieves the data type of the value attribute.
     */

    //@@{ 值类型:valueType }
    值类型: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML参数元素_:HTMLParamElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML参数元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML参数元素_: {

    //@@{ 原型:prototype, HTML参数元素_:HTMLParamElement }
    原型: HTML参数元素_;

    //@@{ HTML参数元素_:HTMLParamElement }
    新建(): HTML参数元素_;

};

//@@{ HTML照片元素_:HTMLPictureElement, HTML元素_:HTMLElement }
接口 HTML照片元素_ 扩展 HTML元素_ {

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML照片元素_:HTMLPictureElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML照片元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML照片元素_: {

    //@@{ 原型:prototype, HTML照片元素_:HTMLPictureElement }
    原型: HTML照片元素_;

    //@@{ HTML照片元素_:HTMLPictureElement }
    新建(): HTML照片元素_;

};

//@@{ HTML预处理元素_:HTMLPreElement, HTML元素_:HTMLElement }
接口 HTML预处理元素_ 扩展 HTML元素_ {

    /**
     * Sets or gets a value that you can use to implement your own width functionality for the object.
     */

    //@@{ 宽度:width }
    宽度: 数字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML预处理元素_:HTMLPreElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML预处理元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML预处理元素_: {

    //@@{ 原型:prototype, HTML预处理元素_:HTMLPreElement }
    原型: HTML预处理元素_;

    //@@{ HTML预处理元素_:HTMLPreElement }
    新建(): HTML预处理元素_;

};

//@@{ HTML进度元素_:HTMLProgressElement, HTML元素_:HTMLElement }
接口 HTML进度元素_ 扩展 HTML元素_ {

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */

    //@@{ 表单:form, HTML表单元素_:HTMLFormElement }
    只读 表单: HTML表单元素_ | 空值;

    /**
     * Defines the maximum, or "done" value for a progress element.
     */

    //@@{ 最大:max }
    最大: 数字;

    /**
     * Returns the quotient of value/max when the value attribute is set (determinate progress bar), or -1 when the value attribute is missing (indeterminate progress bar).
     */

    //@@{ 位置:position }
    只读 位置: 数字;

    /**
     * Sets or gets the current value of a progress element. The value must be a non-negative number between 0 and the max value.
     */

    //@@{ 值:value }
    值: 数字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML进度元素_:HTMLProgressElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML进度元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML进度元素_: {

    //@@{ 原型:prototype, HTML进度元素_:HTMLProgressElement }
    原型: HTML进度元素_;

    //@@{ HTML进度元素_:HTMLProgressElement }
    新建(): HTML进度元素_;

};

//@@{ HTML引用元素_:HTMLQuoteElement, HTML元素_:HTMLElement }
接口 HTML引用元素_ 扩展 HTML元素_ {

    /**
     * Sets or retrieves reference information about the object.
     */

    //@@{ 引用:cite }
    引用: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML引用元素_:HTMLQuoteElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML引用元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML引用元素_: {

    //@@{ 原型:prototype, HTML引用元素_:HTMLQuoteElement }
    原型: HTML引用元素_;

    //@@{ HTML引用元素_:HTMLQuoteElement }
    新建(): HTML引用元素_;

};

//@@{ HTML脚本元素_:HTMLScriptElement, HTML元素_:HTMLElement }
接口 HTML脚本元素_ 扩展 HTML元素_ {

    //@@{ 异步:async }
    异步: 真假;

    /**
     * Sets or retrieves the character set used to encode the object.
     */

    //@@{ 字符集:charset }
    字符集: 文字;

    //@@{ 交叉起点:crossOrigin }
    交叉起点: 文字 | 空值;

    /**
     * Sets or retrieves the status of the script.
     */

    //@@{ 推迟:defer }
    推迟: 真假;

    /**
     * Sets or retrieves the event for which the script is written.
     */

    //@@{ 事件:event }
    事件: 文字;

    /**
     * Sets or retrieves the object that is bound to the event script.
     */

    //@@{ 绑定表单:htmlFor }
    绑定表单: 文字;

    /**
     * Retrieves the URL to an external file that contains the source code or data.
     */

    //@@{ 源:src }
    源: 文字;

    /**
     * Retrieves or sets the text of the object as a string.
     */

    //@@{ 文本:text }
    文本: 文字;

    /**
     * Sets or retrieves the MIME type for the associated scripting engine.
     */

    //@@{ 类型:type }
    类型: 文字;

    //@@{ 完整性:integrity }
    完整性: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML脚本元素_:HTMLScriptElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML脚本元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML脚本元素_: {

    //@@{ 原型:prototype, HTML脚本元素_:HTMLScriptElement }
    原型: HTML脚本元素_;

    //@@{ HTML脚本元素_:HTMLScriptElement }
    新建(): HTML脚本元素_;

};

//@@{ HTML选择元素_:HTMLSelectElement, HTML元素_:HTMLElement }
接口 HTML选择元素_ 扩展 HTML元素_ {

    /**
     * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
     */

    //@@{ 自动对焦:autofocus }
    自动对焦: 真假;

    //@@{ 禁用:disabled }
    禁用: 真假;

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */

    //@@{ 表单:form, HTML表单元素_:HTMLFormElement }
    只读 表单: HTML表单元素_ | 空值;

    /**
     * Sets or retrieves the number of objects in a collection.
     */

    //@@{ 长度:length }
    长度: 数字;

    /**
     * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.
     */

    //@@{ 多选:multiple }
    多选: 真假;

    /**
     * Sets or retrieves the name of the object.
     */

    //@@{ 名字:name }
    名字: 文字;

    //@@{ 选项:options, HTML选项集合_:HTMLOptionsCollection }
    只读 选项: HTML选项集合_;

    /**
     * When present, marks an element that can't be submitted without a value.
     */

    //@@{ 必须的:required }
    必须的: 真假;

    /**
     * Sets or retrieves the index of the selected option in a select object.
     */

    //@@{ 选择的索引:selectedIndex }
    选择的索引: 数字;

    //@@{ 选择选项:selectedOptions, HTML集合的_:HTMLCollectionOf, HTML选项元素_:HTMLOptionElement }
    选择选项: HTML集合的_<HTML选项元素_>;

    /**
     * Sets or retrieves the number of rows in the list box.
     */

    //@@{ 大小:size }
    大小: 数字;

    /**
     * Retrieves the type of select control based on the value of the MULTIPLE attribute.
     */

    //@@{ 类型:type }
    只读 类型: 文字;

    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */

    //@@{ 验证消息:validationMessage }
    只读 验证消息: 文字;

    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */

    //@@{ 有效性:validity, 有效状态_:ValidityState }
    只读 有效性: 有效状态_;

    /**
     * Sets or retrieves the value which is returned to the server when the form control is submitted.
     */

    //@@{ 值:value }
    值: 文字;

    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */

    //@@{ 将验证:willValidate }
    只读 将验证: 真假;

    /**
     * Adds an element to the areas, controlRange, or options collection.
     * @param 元素 Variant of type Number that specifies the index position in the collection where the element is placed. If no value is given, the method places the element at the end of the collection.
     * @param 之前 Variant of type Object that specifies an element to insert before, or null to append the object to the collection.
     */

    //@@{ 添加:add, 元素:element, HTML元素_:HTMLElement, 之前:before }
    添加(元素: HTML元素_, 之前?: HTML元素_ | 数字): 无值;

    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */

    //@@{ 检查有效性:checkValidity }
    检查有效性(): 真假;

    /**
     * Retrieves a select object or an object from an options collection.
     * @param 名字 Variant of type Number or String that specifies the object or collection to retrieve. If this parameter is an integer, it is the zero-based index of the object. If this parameter is a string, all objects with matching name or id properties are retrieved, and a collection is returned if more than one match is made.
     * @param 索引 Variant of type Number that specifies the zero-based index of the object to retrieve when a collection is returned.
     */

    //@@{ 项目:item, 名字:name, 索引:index }
    项目(名字?: 任意, 索引?: 任意): 任意;

    /**
     * Retrieves a select object or an object from an options collection.
     * @param namedItem A String that specifies the name or id property of the object to retrieve. A collection is returned if more than one match is made.
     */

    //@@{ 命名项目:namedItem, 名字:name }
    命名项目(名字: 文字): 任意;

    /**
     * Removes an element from the collection.
     * @param 索引 Number that specifies the zero-based index of the element to remove from the collection.
     */

    //@@{ 删除:remove, 索引:index }
    删除(索引?: 数字): 无值;

    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param 错误 Sets a custom error message that is displayed when a form is submitted.
     */

    //@@{ 置自定义有效性:setCustomValidity, 错误:error }
    置自定义有效性(错误: 文字): 无值;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML选择元素_:HTMLSelectElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML选择元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

    //@@{ 名字:name }
    [名字: 文字]: 任意;

}

声明 值量 HTML选择元素_: {

    //@@{ 原型:prototype, HTML选择元素_:HTMLSelectElement }
    原型: HTML选择元素_;

    //@@{ HTML选择元素_:HTMLSelectElement }
    新建(): HTML选择元素_;

};

//@@{ HTML来源元素_:HTMLSourceElement, HTML元素_:HTMLElement }
接口 HTML来源元素_ 扩展 HTML元素_ {

    /**
     * Gets or sets the intended media type of the media source.
     */

    //@@{ 媒体:media }
    媒体: 文字;

    //@@{ ms键系统:msKeySystem }
    ms键系统: 文字;

    //@@{ 大小:sizes }
    大小: 文字;

    /**
     * The address or URL of the a media resource that is to be considered.
     */

    //@@{ 源:src }
    源: 文字;

    //@@{ 源组:srcset }
    源组: 文字;

    /**
     * Gets or sets the MIME type of a media resource.
     */

    //@@{ 类型:type }
    类型: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML来源元素_:HTMLSourceElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML来源元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML来源元素_: {

    //@@{ 原型:prototype, HTML来源元素_:HTMLSourceElement }
    原型: HTML来源元素_;

    //@@{ HTML来源元素_:HTMLSourceElement }
    新建(): HTML来源元素_;

};

//@@{ HTML跨度元素_:HTMLSpanElement, HTML元素_:HTMLElement }
接口 HTML跨度元素_ 扩展 HTML元素_ {

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML跨度元素_:HTMLSpanElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML跨度元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML跨度元素_: {

    //@@{ 原型:prototype, HTML跨度元素_:HTMLSpanElement }
    原型: HTML跨度元素_;

    //@@{ HTML跨度元素_:HTMLSpanElement }
    新建(): HTML跨度元素_;

};

//@@{ HTML样式元素_:HTMLStyleElement, HTML元素_:HTMLElement, 链接样式_:LinkStyle }
接口 HTML样式元素_ 扩展 HTML元素_, 链接样式_ {

    //@@{ 禁用:disabled }
    禁用: 真假;

    /**
     * Sets or retrieves the media type.
     */

    //@@{ 媒体:media }
    媒体: 文字;

    /**
     * Retrieves the CSS language in which the style sheet is written.
     */

    //@@{ 类型:type }
    类型: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML样式元素_:HTMLStyleElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML样式元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML样式元素_: {

    //@@{ 原型:prototype, HTML样式元素_:HTMLStyleElement }
    原型: HTML样式元素_;

    //@@{ HTML样式元素_:HTMLStyleElement }
    新建(): HTML样式元素_;

};

//@@{ HTML表标题元素_:HTMLTableCaptionElement, HTML元素_:HTMLElement }
接口 HTML表标题元素_ 扩展 HTML元素_ {

    /**
     * Sets or retrieves the alignment of the caption or legend.
     */

    //@@{ 对齐:align }
    对齐: 文字;

    /**
     * Sets or retrieves whether the caption appears at the top or bottom of the table.
     */

    //@@{ 垂直对齐:vAlign }
    垂直对齐: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML表标题元素_:HTMLTableCaptionElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML表标题元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML表标题元素_: {

    //@@{ 原型:prototype, HTML表标题元素_:HTMLTableCaptionElement }
    原型: HTML表标题元素_;

    //@@{ HTML表标题元素_:HTMLTableCaptionElement }
    新建(): HTML表标题元素_;

};

//@@{ HTML表单元格元素_:HTMLTableCellElement, HTML元素_:HTMLElement, HTML表校准_:HTMLTableAlignment }
接口 HTML表单元格元素_ 扩展 HTML元素_, HTML表校准_ {

    /**
     * Sets or retrieves abbreviated text for the object.
     */

    //@@{ 简写:abbr }
    简写: 文字;

    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */

    //@@{ 对齐:align }
    对齐: 文字;

    /**
     * Sets or retrieves a comma-delimited list of conceptual categories associated with the object.
     */

    //@@{ 分类:axis }
    分类: 文字;

    //@@{ 背景颜色:bgColor }
    背景颜色: 任意;

    /**
     * Retrieves the position of the object in the cells collection of a row.
     */

    //@@{ 单元格索引:cellIndex }
    只读 单元格索引: 数字;

    /**
     * Sets or retrieves the number columns in the table that the object should span.
     */

    //@@{ 列跨度:colSpan }
    列跨度: 数字;

    /**
     * Sets or retrieves a list of header cells that provide information for the object.
     */

    //@@{ 头:headers }
    头: 文字;

    /**
     * Sets or retrieves the height of the object.
     */

    //@@{ 高度:height }
    高度: 任意;

    /**
     * Sets or retrieves whether the browser automatically performs wordwrap.
     */

    //@@{ 不换行:noWrap }
    不换行: 真假;

    /**
     * Sets or retrieves how many rows in a table the cell should span.
     */

    //@@{ 行跨度:rowSpan }
    行跨度: 数字;

    /**
     * Sets or retrieves the group of cells in a table to which the object's information applies.
     */

    //@@{ 范围:scope }
    范围: 文字;

    /**
     * Sets or retrieves the width of the object.
     */

    //@@{ 宽度:width }
    宽度: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML表单元格元素_:HTMLTableCellElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML表单元格元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML表单元格元素_: {

    //@@{ 原型:prototype, HTML表单元格元素_:HTMLTableCellElement }
    原型: HTML表单元格元素_;

    //@@{ HTML表单元格元素_:HTMLTableCellElement }
    新建(): HTML表单元格元素_;

};

//@@{ HTML表列元素_:HTMLTableColElement, HTML元素_:HTMLElement, HTML表校准_:HTMLTableAlignment }
接口 HTML表列元素_ 扩展 HTML元素_, HTML表校准_ {

    /**
     * Sets or retrieves the alignment of the object relative to the display or table.
     */

    //@@{ 对齐:align }
    对齐: 文字;

    /**
     * Sets or retrieves the number of columns in the group.
     */

    //@@{ 跨度:span }
    跨度: 数字;

    /**
     * Sets or retrieves the width of the object.
     */

    //@@{ 宽度:width }
    宽度: 任意; 

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML表列元素_:HTMLTableColElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML表列元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML表列元素_: {

    //@@{ 原型:prototype, HTML表列元素_:HTMLTableColElement }
    原型: HTML表列元素_;

    //@@{ HTML表列元素_:HTMLTableColElement }
    新建(): HTML表列元素_;

};

//@@{ HTML表数据单元格元素_:HTMLTableDataCellElement, HTML表单元格元素_:HTMLTableCellElement }
接口 HTML表数据单元格元素_ 扩展 HTML表单元格元素_ {

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML表数据单元格元素_:HTMLTableDataCellElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML表数据单元格元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML表数据单元格元素_: {

    //@@{ 原型:prototype, HTML表数据单元格元素_:HTMLTableDataCellElement }
    原型: HTML表数据单元格元素_;

    //@@{ HTML表数据单元格元素_:HTMLTableDataCellElement }
    新建(): HTML表数据单元格元素_;

};

//@@{ HTML表元素_:HTMLTableElement, HTML元素_:HTMLElement }
接口 HTML表元素_ 扩展 HTML元素_ {

    /**
     * Sets or retrieves a value that indicates the table alignment.
     */

    //@@{ 对齐:align }
    对齐: 文字;

    //@@{ 背景颜色:bgColor }
    背景颜色: 任意;

    /**
     * Sets or retrieves the width of the border to draw around the object.
     */

    //@@{ 边框:border }
    边框: 文字;

    /**
     * Sets or retrieves the border color of the object.
     */

    //@@{ 边框颜色:borderColor }
    边框颜色: 任意;

    /**
     * Retrieves the caption object of a table.
     */

    //@@{ 表标题:caption, HTML表标题元素_:HTMLTableCaptionElement }
    表标题: HTML表标题元素_;

    /**
     * Sets or retrieves the amount of space between the border of the cell and the content of the cell.
     */

    //@@{ 单元格间隙:cellPadding }
    单元格间隙: 文字;

    /**
     * Sets or retrieves the amount of space between cells in a table.
     */

    //@@{ 单元格间距:cellSpacing }
    单元格间距: 文字;

    /**
     * Sets or retrieves the number of columns in the table.
     */

    //@@{ 列:cols }
    列: 数字;

    /**
     * Sets or retrieves the way the border frame around the table is displayed.
     */

    //@@{ 框架显示:frame }
    框架显示: 文字;

    /**
     * Sets or retrieves the height of the object.
     */

    //@@{ 高度:height }
    高度: 任意;

    /**
     * Sets or retrieves the number of horizontal rows contained in the object.
     */

    //@@{ 行:rows, HTML集合的_:HTMLCollectionOf, HTML表行元素_:HTMLTableRowElement }
    行: HTML集合的_<HTML表行元素_>;

    /**
     * Sets or retrieves which dividing lines (inner borders) are displayed.
     */

    //@@{ 内部边界:rules }
    内部边界: 文字;

    /**
     * Sets or retrieves a description and/or structure of the object.
     */

    //@@{ 总结:summary }
    总结: 文字;

    /**
     * Retrieves a collection of all tBody objects in the table. Objects in this collection are in source order.
     */

    //@@{ 表体集合:tBodies, HTML集合的_:HTMLCollectionOf, HTML表部分元素_:HTMLTableSectionElement }
    表体集合: HTML集合的_<HTML表部分元素_>;

    /**
     * Retrieves the tFoot object of the table.
     */

    //@@{ 表页脚:tFoot, HTML表部分元素_:HTMLTableSectionElement }
    表页脚: HTML表部分元素_;

    /**
     * Retrieves the tHead object of the table.
     */

    //@@{ 表头:tHead, HTML表部分元素_:HTMLTableSectionElement }
    表头: HTML表部分元素_;

    /**
     * Sets or retrieves the width of the object.
     */

    //@@{ 宽度:width }
    宽度: 文字;

    /**
     * Creates an empty caption element in the table.
     */

    //@@{ 创建表标题:createCaption, HTML表标题元素_:HTMLTableCaptionElement }
    创建表标题(): HTML表标题元素_;

    /**
     * Creates an empty tBody element in the table.
     */

    //@@{ 创建表体:createTBody, HTML表部分元素_:HTMLTableSectionElement }
    创建表体(): HTML表部分元素_;

    /**
     * Creates an empty tFoot element in the table.
     */

    //@@{ 创建表页脚:createTFoot, HTML表部分元素_:HTMLTableSectionElement }
    创建表页脚(): HTML表部分元素_;

    /**
     * Returns the tHead element object if successful, or null otherwise.
     */

    //@@{ 创建表头:createTHead, HTML表部分元素_:HTMLTableSectionElement }
    创建表头(): HTML表部分元素_;

    /**
     * Deletes the caption element and its contents from the table.
     */

    //@@{ 删除表标题:deleteCaption }
    删除表标题(): 无值;

    /**
     * Removes the specified row (tr) from the element and from the rows collection.
     * @param 索引 Number that specifies the zero-based position in the rows collection of the row to remove.
     */

    //@@{ 删除行:deleteRow, 索引:index }
    删除行(索引?: 数字): 无值;

    /**
     * Deletes the tFoot element and its contents from the table.
     */

    //@@{ 删除表页脚:deleteTFoot }
    删除表页脚(): 无值;

    /**
     * Deletes the tHead element and its contents from the table.
     */

    //@@{ 删除表头:deleteTHead }
    删除表头(): 无值;

    /**
     * Creates a new row (tr) in the table, and adds the row to the rows collection.
     * @param 索引 Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.
     */

    //@@{ 插入行:insertRow, 索引:index, HTML表行元素_:HTMLTableRowElement }
    插入行(索引?: 数字): HTML表行元素_;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML表元素_:HTMLTableElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML表元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML表元素_: {

    //@@{ 原型:prototype, HTML表元素_:HTMLTableElement }
    原型: HTML表元素_;

    //@@{ HTML表元素_:HTMLTableElement }
    新建(): HTML表元素_;

};

//@@{ HTML表头单元格_:HTMLTableHeaderCellElement, HTML表单元格元素_:HTMLTableCellElement }
接口 HTML表头单元格_ 扩展 HTML表单元格元素_ {

    /**
     * Sets or retrieves the group of cells in a table to which the object's information applies.
     */

    //@@{ 范围:scope }
    范围: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML表头单元格_:HTMLTableHeaderCellElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML表头单元格_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML表头单元格_: {

    //@@{ 原型:prototype, HTML表头单元格_:HTMLTableHeaderCellElement }
    原型: HTML表头单元格_;

    //@@{ HTML表头单元格_:HTMLTableHeaderCellElement }
    新建(): HTML表头单元格_;

};

//@@{ HTML表行元素_:HTMLTableRowElement, HTML元素_:HTMLElement, HTML表校准_:HTMLTableAlignment }
接口 HTML表行元素_ 扩展 HTML元素_, HTML表校准_ {

    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */

    //@@{ 对齐:align }
    对齐: 文字;

    //@@{ 背景颜色:bgColor }
    背景颜色: 任意;

    /**
     * Retrieves a collection of all cells in the table row.
     */

    //@@{ 单元格列表:cells, HTML集合的_:HTMLCollectionOf, HTML表数据单元格元素_:HTMLTableDataCellElement, HTML表头单元格_:HTMLTableHeaderCellElement }
    单元格列表: HTML集合的_<HTML表数据单元格元素_ | HTML表头单元格_>;

    /**
     * Sets or retrieves the height of the object.
     */

    //@@{ 高度:height }
    高度: 任意;

    /**
     * Retrieves the position of the object in the rows collection for the table.
     */

    //@@{ 行索引:rowIndex }
    只读 行索引: 数字;

    /**
     * Retrieves the position of the object in the collection.
     */

    //@@{ 部分行索引:sectionRowIndex }
    只读 部分行索引: 数字;

    /**
     * Removes the specified cell from the table row, as well as from the cells collection.
     * @param 索引 Number that specifies the zero-based position of the cell to remove from the table row. If no value is provided, the last cell in the cells collection is deleted.
     */

    //@@{ 删除单元格:deleteCell, 索引:index }
    删除单元格(索引?: 数字): 无值;

    /**
     * Creates a new cell in the table row, and adds the cell to the cells collection.
     * @param 索引 Number that specifies where to insert the cell in the tr. The default value is -1, which appends the new cell to the end of the cells collection.
     */

    //@@{ 插入单元格:insertCell, 索引:index, HTML表数据单元格元素_:HTMLTableDataCellElement }
    插入单元格(索引?: 数字): HTML表数据单元格元素_;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML表行元素_:HTMLTableRowElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML表行元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML表行元素_: {

    //@@{ 原型:prototype, HTML表行元素_:HTMLTableRowElement }
    原型: HTML表行元素_;

    //@@{ HTML表行元素_:HTMLTableRowElement }
    新建(): HTML表行元素_;

};

//@@{ HTML表部分元素_:HTMLTableSectionElement, HTML元素_:HTMLElement, HTML表校准_:HTMLTableAlignment }
接口 HTML表部分元素_ 扩展 HTML元素_, HTML表校准_ {

    /**
     * Sets or retrieves a value that indicates the table alignment.
     */

    //@@{ 对齐:align }
    对齐: 文字;

    /**
     * Sets or retrieves the number of horizontal rows contained in the object.
     */

    //@@{ 行:rows, HTML集合的_:HTMLCollectionOf, HTML表行元素_:HTMLTableRowElement }
    行: HTML集合的_<HTML表行元素_>;

    /**
     * Removes the specified row (tr) from the element and from the rows collection.
     * @param 索引 Number that specifies the zero-based position in the rows collection of the row to remove.
     */

    //@@{ 删除行:deleteRow, 索引:index }
    删除行(索引?: 数字): 无值;

    /**
     * Creates a new row (tr) in the table, and adds the row to the rows collection.
     * @param 索引 Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.
     */

    //@@{ 插入行:insertRow, 索引:index, HTML表行元素_:HTMLTableRowElement }
    插入行(索引?: 数字): HTML表行元素_;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML表部分元素_:HTMLTableSectionElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML表部分元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML表部分元素_: {

    //@@{ 原型:prototype, HTML表部分元素_:HTMLTableSectionElement }
    原型: HTML表部分元素_;

    //@@{ HTML表部分元素_:HTMLTableSectionElement }
    新建(): HTML表部分元素_;

};

//@@{ HTML元素_:HTMLElement }
接口 HTML模板元素_ 扩展 HTML元素_ {

    //@@{ 内容:content, 文档片段_:DocumentFragment }
    只读 内容: 文档片段_;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML模板元素_:HTMLModElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML模板元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML模板元素_: {

    //@@{ 原型:prototype, HTML模板元素_:HTMLModElement }
    原型: HTML模板元素_;

    //@@{ HTML模板元素_:HTMLModElement }
    新建(): HTML模板元素_;

};

//@@{ HTML文本区域元素_:HTMLTextAreaElement, HTML元素_:HTMLElement }
接口 HTML文本区域元素_ 扩展 HTML元素_ {

    /**
     * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
     */

    //@@{ 自动对焦:autofocus }
    自动对焦: 真假;

    /**
     * Sets or retrieves the width of the object.
     */

    //@@{ 列:cols }
    列: 数字;

    /**
     * Sets or retrieves the initial contents of the object.
     */

    //@@{ 默认值:defaultValue }
    默认值: 文字;

    //@@{ 禁用:disabled }
    禁用: 真假;

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */

    //@@{ 表单:form, HTML表单元素_:HTMLFormElement }
    只读 表单: HTML表单元素_ | 空值;

    /**
     * Sets or retrieves the maximum number of characters that the user can enter in a text control.
     */

    //@@{ 最大长度:maxLength }
    最大长度: 数字;

    /**
     * Sets or retrieves the name of the object.
     */

    //@@{ 名字:name }
    名字: 文字;

    /**
     * Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field.
     */

    //@@{ 占位符:placeholder }
    占位符: 文字;

    /**
     * Sets or retrieves the value indicated whether the content of the object is read-only.
     */

    //@@{ 只读的:readOnly }
    只读的: 真假;

    /**
     * When present, marks an element that can't be submitted without a value.
     */

    //@@{ 必须的:required }
    必须的: 真假;

    /**
     * Sets or retrieves the number of horizontal rows contained in the object.
     */

    //@@{ 行:rows }
    行: 数字;

    /**
     * Gets or sets the end position or offset of a text selection.
     */

    //@@{ 选择结束:selectionEnd }
    选择结束: 数字;

    /**
     * Gets or sets the starting position or offset of a text selection.
     */

    //@@{ 选择开始:selectionStart }
    选择开始: 数字;

    /**
     * Sets or retrieves the value indicating whether the control is selected.
     */

    //@@{ 状态:status }
    状态: 任意;

    /**
     * Retrieves the type of control.
     */

    //@@{ 类型:type }
    只读 类型: 文字;

    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */

    //@@{ 验证消息:validationMessage }
    只读 验证消息: 文字;

    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */

    //@@{ 有效性:validity, 有效状态_:ValidityState }
    只读 有效性: 有效状态_;

    /**
     * Retrieves or sets the text in the entry field of the textArea element.
     */

    //@@{ 值:value }
    值: 文字;

    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */

    //@@{ 将验证:willValidate }
    只读 将验证: 真假;

    /**
     * Sets or retrieves how to handle wordwrapping in the object.
     */

    //@@{ 包装:wrap }
    包装: 文字;

    //@@{ 最小长度:minLength }
    最小长度: 数字;

    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */

    //@@{ 检查有效性:checkValidity }
    检查有效性(): 真假;

    /**
     * Highlights the input area of a form element.
     */

    //@@{ 选择:select }
    选择(): 无值;

    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param 错误 Sets a custom error message that is displayed when a form is submitted.
     */

    //@@{ 置自定义有效性:setCustomValidity, 错误:error }
    置自定义有效性(错误: 文字): 无值;

    /**
     * Sets the start and end positions of a selection in a text field.
     * @param 开始 The offset into the text field for the start of the selection.
     * @param 结束 The offset into the text field for the end of the selection.
     */

    //@@{ 置选择范围:setSelectionRange, 开始:start, 结束:end }
    置选择范围(开始: 数字, 结束: 数字): 无值;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML文本区域元素_:HTMLTextAreaElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML文本区域元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML文本区域元素_: {

    //@@{ 原型:prototype, HTML文本区域元素_:HTMLTextAreaElement }
    原型: HTML文本区域元素_;

    //@@{ HTML文本区域元素_:HTMLTextAreaElement }
    新建(): HTML文本区域元素_;

};

//@@{ HTML时间元素_:HTMLTimeElement, HTML元素_:HTMLElement }
接口 HTML时间元素_ 扩展 HTML元素_ {

    //@@{ 日期时间:dateTime }
    日期时间: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML时间元素_:HTMLTimeElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML时间元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML时间元素_: {

    //@@{ 原型:prototype, HTML时间元素_:HTMLTimeElement }
    原型: HTML时间元素_;

    //@@{ HTML时间元素_:HTMLTimeElement }
    新建(): HTML时间元素_;

};

//@@{ HTML元素_:HTMLElement }
接口 HTML标题元素_ 扩展 HTML元素_ {

    /**
     * Retrieves or sets the text of the object as a string.
     */

    //@@{ 文本:text }
    文本: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML标题元素_:HTMLHeadingElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML标题元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML标题元素_: {

    //@@{ 原型:prototype, HTML标题元素_:HTMLHeadingElement }
    原型: HTML标题元素_;

    //@@{ HTML标题元素_:HTMLHeadingElement }
    新建(): HTML标题元素_;

};

//@@{ HTML轨道元素_:HTMLTrackElement, HTML元素_:HTMLElement }
接口 HTML轨道元素_ 扩展 HTML元素_ {

    //@@{ 默认:default }
    默认: 真假;

    //@@{ 种类:kind }
    种类: 文字;

    //@@{ 标签:label }
    标签: 文字;

    //@@{ 就绪状态:readyState }
    只读 就绪状态: 数字;

    //@@{ 源:src }
    源: 文字;

    //@@{ 源语言:srclang }
    源语言: 文字;

    //@@{ 轨道:track, 文本轨道_:TextTrack }
    只读 轨道: 文本轨道_;

    //@@{ __错误__:ERROR }
    只读 __错误__: 数字;

    //@@{ __加载__:LOADED }
    只读 __加载__: 数字;

    //@@{ __加载中__:LOADING }
    只读 __加载中__: 数字;

    //@@{ __没有__:NONE }
    只读 __没有__: 数字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML轨道元素_:HTMLTrackElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML轨道元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML轨道元素_: {

    //@@{ 原型:prototype, HTML轨道元素_:HTMLTrackElement }
    原型: HTML轨道元素_;

    //@@{ HTML轨道元素_:HTMLTrackElement }
    新建(): HTML轨道元素_;

    //@@{ __错误__:ERROR }
    只读 __错误__: 数字;

    //@@{ __加载__:LOADED }
    只读 __加载__: 数字;

    //@@{ __加载中__:LOADING }
    只读 __加载中__: 数字;

    //@@{ __没有__:NONE }
    只读 __没有__: 数字;

};

//@@{ HTML无序列表元素_:HTMLUListElement, HTML元素_:HTMLElement }
接口 HTML无序列表元素_ 扩展 HTML元素_ {

    //@@{ 紧凑的:compact }
    紧凑的: 真假;

    //@@{ 类型:type }
    类型: 文字;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML无序列表元素_:HTMLUListElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML无序列表元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML无序列表元素_: {

    //@@{ 原型:prototype, HTML无序列表元素_:HTMLUListElement }
    原型: HTML无序列表元素_;

    //@@{ HTML无序列表元素_:HTMLUListElement }
    新建(): HTML无序列表元素_;

};

//@@{ HTML未知元素_:HTMLUnknownElement, HTML元素_:HTMLElement }
接口 HTML未知元素_ 扩展 HTML元素_ {

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, HTML未知元素_:HTMLUnknownElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: HTML未知元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML未知元素_: {

    //@@{ 原型:prototype, HTML未知元素_:HTMLUnknownElement }
    原型: HTML未知元素_;

    //@@{ HTML未知元素_:HTMLUnknownElement }
    新建(): HTML未知元素_;

};

//@@{ HTML视频元素事件映射_:HTMLVideoElementEventMap, HTML媒体元素事件映射_:HTMLMediaElementEventMap }
接口 HTML视频元素事件映射_ 扩展 HTML媒体元素事件映射_ {

    //@@{ "MS视频格式改变了":"MSVideoFormatChanged", 事件_:Event }
    "MS视频格式改变了": 事件_;

    //@@{ "MS视频框架一步完成":"MSVideoFrameStepCompleted", 事件_:Event }
    "MS视频框架一步完成": 事件_;

    //@@{ "MS视频最优布局改变了":"MSVideoOptimalLayoutChanged", 事件_:Event }
    "MS视频最优布局改变了": 事件_;

}

//@@{ HTML视频元素_:HTMLVideoElement, HTML媒体元素_:HTMLMediaElement }
接口 HTML视频元素_ 扩展 HTML媒体元素_ {

    /**
     * Gets or sets the height of the video element.
     */

    //@@{ 高度:height }
    高度: 数字;

    //@@{ ms水平镜像:msHorizontalMirror }
    ms水平镜像: 真假;

    //@@{ ms是最优布局回放:msIsLayoutOptimalForPlayback }
    只读 ms是最优布局回放: 真假;

    //@@{ ms是立体声3D:msIsStereo3D }
    只读 ms是立体声3D: 真假;

    //@@{ ms立体声3D封装模式:msStereo3DPackingMode }
    ms立体声3D封装模式: 文字;

    //@@{ ms立体声3D渲染模式:msStereo3DRenderMode }
    ms立体声3D渲染模式: 文字;

    //@@{ ms缩放:msZoom }
    ms缩放: 真假;

    //@@{ 正在MS视频格式改变了:onMSVideoFormatChanged, HTML视频元素_:HTMLVideoElement, 事件_:Event }
    正在MS视频格式改变了: (本体: HTML视频元素_, ev: 事件_) => 任意;

    //@@{ 正在MS视频框架一步完成:onMSVideoFrameStepCompleted, HTML视频元素_:HTMLVideoElement, 事件_:Event }
    正在MS视频框架一步完成: (本体: HTML视频元素_, ev: 事件_) => 任意;

    //@@{ 正在MS视频最优布局改变了:onMSVideoOptimalLayoutChanged, HTML视频元素_:HTMLVideoElement, 事件_:Event }
    正在MS视频最优布局改变了: (本体: HTML视频元素_, ev: 事件_) => 任意;

    /**
     * Gets or sets a URL of an image to display, for example, like a movie poster. This can be a still frame from the video, or another image if no video data is available.
     */

    //@@{ 海报:poster }
    海报: 文字;

    /**
     * Gets the intrinsic height of a video in CSS pixels, or zero if the dimensions are not known.
     */

    //@@{ 视频高度:videoHeight }
    只读 视频高度: 数字;

    /**
     * Gets the intrinsic width of a video in CSS pixels, or zero if the dimensions are not known.
     */

    //@@{ 视频宽度:videoWidth }
    只读 视频宽度: 数字;

    //@@{ webkit全屏显示:webkitDisplayingFullscreen }
    只读 webkit全屏显示: 真假;

    //@@{ webkit支持全屏:webkitSupportsFullscreen }
    只读 webkit支持全屏: 真假;

    /**
     * Gets or sets the width of the video element.
     */

    //@@{ 宽度:width }
    宽度: 数字;

    //@@{ 取视频回放质量:getVideoPlaybackQuality, 视频播放质量_:VideoPlaybackQuality }
    取视频回放质量(): 视频播放质量_;

    //@@{ ms框架一步:msFrameStep, 向前:forward }
    ms框架一步(向前: 真假): 无值;

    //@@{ ms插入视频效果:msInsertVideoEffect, 激活类Id:activatableClassId, 效果要求:effectRequired, 配置:config }
    ms插入视频效果(激活类Id: 文字, 效果要求: 真假, 配置?: 任意): 无值;

    //@@{ ms置视频矩形:msSetVideoRectangle, 左:left, 顶:top, 右:right, 底:bottom }
    ms置视频矩形(左: 数字, 顶: 数字, 右: 数字, 底: 数字): 无值;

    //@@{ webkit进入全屏:webkitEnterFullscreen }
    webkit进入全屏(): 无值;

    //@@{ webkit进入全屏了:webkitEnterFullScreen }
    webkit进入全屏了(): 无值;

    //@@{ webkit退出全屏:webkitExitFullscreen }
    webkit退出全屏(): 无值;

    //@@{ webkit退出全屏了:webkitExitFullScreen }
    webkit退出全屏了(): 无值;

    //@@{ 添加事件监听器:addEventListener, HTML视频元素事件映射_:HTMLVideoElementEventMap, 类型:type, 侦听器:listener, HTML视频元素_:HTMLVideoElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML视频元素事件映射_>(类型: K, 侦听器: (本体: HTML视频元素_, ev: HTML视频元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 HTML视频元素_: { 

    //@@{ 原型:prototype, HTML视频元素_:HTMLVideoElement }
    原型: HTML视频元素_;

    //@@{ HTML视频元素_:HTMLVideoElement }
    新建(): HTML视频元素_;

};

//@@{ IDB光标_:IDBCursor }
接口 IDB光标_ {

    //@@{ 方向:direction, IDB光标方向_:IDBCursorDirection }
    只读 方向: IDB光标方向_;

    //@@{ 键:key, IDB键范围_:IDBKeyRange, IDB有效键:IDBValidKey }
    键: IDB键范围_ | IDB有效键;

    //@@{ 主键:primaryKey }
    只读 主键: 任意;

    //@@{ 源:source, IDB对象存储_:IDBObjectStore, IDB索引_:IDBIndex }
    源: IDB对象存储_ | IDB索引_;

    //@@{ 推进:advance, 数:count }
    推进(数: 数字): 无值;

    //@@{ 继续:continue, 键:key, IDB键范围_:IDBKeyRange, IDB有效键:IDBValidKey }
    继续(键?: IDB键范围_ | IDB有效键): 无值;

    //@@{ 删除:delete, IDB请求_:IDBRequest }
    删除(): IDB请求_;

    //@@{ 更新:update, 值:value, IDB请求_:IDBRequest }
    更新(值: 任意): IDB请求_;

    //@@{ __下个__:NEXT }
    只读 __下个__: 文字;

    //@@{ __下个_没有_重复__:NEXT_NO_DUPLICATE }
    只读 __下个_没有_重复__: 文字;

    //@@{ __上页__:PREV }
    只读 __上页__: 文字;

    //@@{ __上页_没有_重复__:PREV_NO_DUPLICATE }
    只读 __上页_没有_重复__: 文字; 

}

声明 值量 IDB光标_: {

    //@@{ 原型:prototype, IDB光标_:IDBCursor }
    原型: IDB光标_;

    //@@{ IDB光标_:IDBCursor }
    新建(): IDB光标_;

    //@@{ __下个__:NEXT }
    只读 __下个__: 文字;

    //@@{ __下个_没有_重复__:NEXT_NO_DUPLICATE }
    只读 __下个_没有_重复__: 文字;

    //@@{ __上页__:PREV }
    只读 __上页__: 文字;

    //@@{ __上页_没有_重复__:PREV_NO_DUPLICATE }
    只读 __上页_没有_重复__: 文字;

};

//@@{ IDB光标与值_:IDBCursorWithValue, IDB光标_:IDBCursor }
接口 IDB光标与值_ 扩展 IDB光标_ {

    //@@{ 值:value }
    只读 值: 任意;

}

声明 值量 IDB光标与值_: {

    //@@{ 原型:prototype, IDB光标与值_:IDBCursorWithValue }
    原型: IDB光标与值_;

    //@@{ IDB光标与值_:IDBCursorWithValue }
    新建(): IDB光标与值_;

};

//@@{ IDB数据库事件映射_:IDBDatabaseEventMap }
接口 IDB数据库事件映射_ {

    //@@{ "终止":"abort", 事件_:Event }
    "终止": 事件_;

    //@@{ "错误":"error", 事件_:Event }
    "错误": 事件_;

}

//@@{ IDB数据库_:IDBDatabase, 事件目标_:EventTarget }
接口 IDB数据库_ 扩展 事件目标_ {

    //@@{ 名字:name }
    只读 名字: 文字;

    //@@{ 对象存储名称:objectStoreNames, 文档字符串列表_:DOMStringList }
    只读 对象存储名称: 文档字符串列表_;

    //@@{ 正在终止:onabort, IDB数据库_:IDBDatabase, 事件_:Event }
    正在终止: (本体: IDB数据库_, ev: 事件_) => 任意;

    //@@{ 正在错误:onerror, IDB数据库_:IDBDatabase, 事件_:Event }
    正在错误: (本体: IDB数据库_, ev: 事件_) => 任意;

    //@@{ 版本:version }
    版本: 数字;

    //@@{ 正在版本改变:onversionchange, IDB版本改变事件_:IDBVersionChangeEvent }
    正在版本改变: (ev: IDB版本改变事件_) => 任意;

    //@@{ 关闭:close }
    关闭(): 无值;

    //@@{ 创建对象存储:createObjectStore, 名字:name, 可选参数:optionalParameters, IDB对象存储参数_:IDBObjectStoreParameters, IDB对象存储_:IDBObjectStore }
    创建对象存储(名字: 文字, 可选参数?: IDB对象存储参数_): IDB对象存储_;

    //@@{ 删除对象存储:deleteObjectStore, 名字:name }
    删除对象存储(名字: 文字): 无值;

    //@@{ 事务:transaction, 库名称:storeNames, 模式:mode, IDB事务模式_:IDBTransactionMode, IDB事务_:IDBTransaction }
    事务(库名称: 文字 | 文字[], 模式?: IDB事务模式_): IDB事务_;

    //@@{ 添加事件监听器:addEventListener, 类型:type, "版本改变":"versionchange", 侦听器:listener, IDB版本改变事件_:IDBVersionChangeEvent, 使用捕获:useCapture }
    添加事件监听器(类型: "版本改变", 侦听器: (ev: IDB版本改变事件_) => 任意, 使用捕获?: 真假): 无值;

    //@@{ IDB数据库事件映射_:IDBDatabaseEventMap, 类型:type, 侦听器:listener, IDB数据库_:IDBDatabase, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 IDB数据库事件映射_>(类型: K, 侦听器: (本体: IDB数据库_, ev: IDB数据库事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 IDB数据库_: {

    //@@{ 原型:prototype, IDB数据库_:IDBDatabase }
    原型: IDB数据库_;

    //@@{ IDB数据库_:IDBDatabase }
    新建(): IDB数据库_;

};

//@@{ IDB工厂_:IDBFactory }
接口 IDB工厂_ {

    //@@{ 比较:cmp, 第一个:first, 第二个:second }
    比较(第一个: 任意, 第二个: 任意): 数字;

    //@@{ 删除数据库:deleteDatabase, 名字:name, IDB打开数据库请求_:IDBOpenDBRequest }
    删除数据库(名字: 文字): IDB打开数据库请求_;

    //@@{ 打开:open, 名字:name, 版本:version, IDB打开数据库请求_:IDBOpenDBRequest }
    打开(名字: 文字, 版本?: 数字): IDB打开数据库请求_;

}

声明 值量 IDB工厂_: {

    //@@{ 原型:prototype, IDB工厂_:IDBFactory }
    原型: IDB工厂_;

    //@@{ IDB工厂_:IDBFactory }
    新建(): IDB工厂_;

};

//@@{ IDB索引_:IDBIndex }
接口 IDB索引_ {

    //@@{ 键路径:keyPath }
    键路径: 文字 | 文字[];

    //@@{ 名字:name }
    只读 名字: 文字;

    //@@{ 对象存储:objectStore, IDB对象存储_:IDBObjectStore }
    只读 对象存储: IDB对象存储_;

    //@@{ 独特的:unique }
    只读 独特的: 真假;

    //@@{ 多条目:multiEntry }
    多条目: 真假;

    //@@{ 数量:count, 键:key, IDB键范围_:IDBKeyRange, IDB有效键:IDBValidKey, IDB请求_:IDBRequest }
    数量(键?: IDB键范围_ | IDB有效键): IDB请求_;

    //@@{ 获取:get, 键:key, IDB键范围_:IDBKeyRange, IDB有效键:IDBValidKey, IDB请求_:IDBRequest }
    获取(键: IDB键范围_ | IDB有效键): IDB请求_;

    //@@{ 取键:getKey, 键:key, IDB键范围_:IDBKeyRange, IDB有效键:IDBValidKey, IDB请求_:IDBRequest }
    取键(键: IDB键范围_ | IDB有效键): IDB请求_;

    //@@{ 打开游标:openCursor, 范围:range, IDB键范围_:IDBKeyRange, IDB有效键:IDBValidKey, 方向:direction, IDB光标方向_:IDBCursorDirection, IDB请求_:IDBRequest }
    打开游标(范围?: IDB键范围_ | IDB有效键, 方向?: IDB光标方向_): IDB请求_;

    //@@{ 打开键游标:openKeyCursor, 范围:range, IDB键范围_:IDBKeyRange, IDB有效键:IDBValidKey, 方向:direction, IDB光标方向_:IDBCursorDirection, IDB请求_:IDBRequest }
    打开键游标(范围?: IDB键范围_ | IDB有效键, 方向?: IDB光标方向_): IDB请求_;

}

声明 值量 IDB索引_: {

    //@@{ 原型:prototype, IDB索引_:IDBIndex }
    原型: IDB索引_;

    //@@{ IDB索引_:IDBIndex }
    新建(): IDB索引_;

};

//@@{ IDB键范围_:IDBKeyRange }
接口 IDB键范围_ {

    //@@{ 较低的:lower }
    只读 较低的: 任意;

    //@@{ 较低打开:lowerOpen }
    只读 较低打开: 真假;

    //@@{ 较高的:upper }
    只读 较高的: 任意;

    //@@{ 较高打开:upperOpen }
    只读 较高打开: 真假;

}

声明 值量 IDB键范围_: {

    //@@{ 原型:prototype, IDB键范围_:IDBKeyRange }
    原型: IDB键范围_;

    //@@{ IDB键范围_:IDBKeyRange }
    新建(): IDB键范围_;

    //@@{ 绑定:bound, 较低的:lower, 较高的:upper, 较低打开:lowerOpen, 较高打开:upperOpen, IDB键范围_:IDBKeyRange }
    绑定(较低的: 任意, 较高的: 任意, 较低打开?: 真假, 较高打开?: 真假): IDB键范围_;

    //@@{ 较低绑定:lowerBound, 较低的:lower, 打开:open, IDB键范围_:IDBKeyRange }
    较低绑定(较低的: 任意, 打开?: 真假): IDB键范围_;

    //@@{ 只有:only, 值:value, IDB键范围_:IDBKeyRange }
    只有(值: 任意): IDB键范围_;

    //@@{ 较高绑定:upperBound, 较高的:upper, 打开:open, IDB键范围_:IDBKeyRange }
    较高绑定(较高的: 任意, 打开?: 真假): IDB键范围_;

};

//@@{ IDB对象存储_:IDBObjectStore }
接口 IDB对象存储_ {

    //@@{ 索引名称列表:indexNames, 文档字符串列表_:DOMStringList }
    只读 索引名称列表: 文档字符串列表_;

    //@@{ 键路径:keyPath }
    键路径: 文字 | 文字[];

    //@@{ 名字:name }
    只读 名字: 文字;

    //@@{ 事务:transaction, IDB事务_:IDBTransaction }
    只读 事务: IDB事务_;

    //@@{ 自动增量:autoIncrement }
    自动增量: 真假;

    //@@{ 添加:add, 值:value, 键:key, IDB键范围_:IDBKeyRange, IDB有效键:IDBValidKey, IDB请求_:IDBRequest }
    添加(值: 任意, 键?: IDB键范围_ | IDB有效键): IDB请求_;

    //@@{ 清除:clear, IDB请求_:IDBRequest }
    清除(): IDB请求_;

    //@@{ 数量:count, 键:key, IDB键范围_:IDBKeyRange, IDB有效键:IDBValidKey, IDB请求_:IDBRequest }
    数量(键?: IDB键范围_ | IDB有效键): IDB请求_;

    //@@{ 创建索引:createIndex, 名字:name, 键路径:keyPath, 可选参数:optionalParameters, IDB索引参数_:IDBIndexParameters, IDB索引_:IDBIndex }
    创建索引(名字: 文字, 键路径: 文字 | 文字[], 可选参数?: IDB索引参数_): IDB索引_;

    //@@{ 删除:delete, 键:key, IDB键范围_:IDBKeyRange, IDB有效键:IDBValidKey, IDB请求_:IDBRequest }
    删除(键: IDB键范围_ | IDB有效键): IDB请求_;

    //@@{ 删除索引:deleteIndex, 索引名称:indexName }
    删除索引(索引名称: 文字): 无值;

    //@@{ 获取:get, 键:key, IDB请求_:IDBRequest }
    获取(键: 任意): IDB请求_;

    //@@{ 索引:index, 名字:name, IDB索引_:IDBIndex }
    索引(名字: 文字): IDB索引_;

    //@@{ 打开游标:openCursor, 范围:range, IDB键范围_:IDBKeyRange, IDB有效键:IDBValidKey, 方向:direction, IDB光标方向_:IDBCursorDirection, IDB请求_:IDBRequest }
    打开游标(范围?: IDB键范围_ | IDB有效键, 方向?: IDB光标方向_): IDB请求_;

    //@@{ 更新:put, 值:value, 键:key, IDB键范围_:IDBKeyRange, IDB有效键:IDBValidKey, IDB请求_:IDBRequest }
    更新(值: 任意, 键?: IDB键范围_ | IDB有效键): IDB请求_;

}

声明 值量 IDB对象存储_: {

    //@@{ 原型:prototype, IDB对象存储_:IDBObjectStore }
    原型: IDB对象存储_;

    //@@{ IDB对象存储_:IDBObjectStore }
    新建(): IDB对象存储_;

};

//@@{ IDB打开数据库请求事件映射_:IDBOpenDBRequestEventMap, IDB请求事件映射_:IDBRequestEventMap }
接口 IDB打开数据库请求事件映射_ 扩展 IDB请求事件映射_ {

    //@@{ "阻塞":"blocked", 事件_:Event }
    "阻塞": 事件_;

    //@@{ "拒绝版本请求":"upgradeneeded", IDB版本改变事件_:IDBVersionChangeEvent }
    "拒绝版本请求": IDB版本改变事件_;

}

//@@{ IDB打开数据库请求_:IDBOpenDBRequest, IDB请求_:IDBRequest }
接口 IDB打开数据库请求_ 扩展 IDB请求_ {

    //@@{ 正在阻塞:onblocked, IDB打开数据库请求_:IDBOpenDBRequest, 事件_:Event }
    正在阻塞: (本体: IDB打开数据库请求_, ev: 事件_) => 任意;

    //@@{ 正在拒绝版本请求:onupgradeneeded, IDB打开数据库请求_:IDBOpenDBRequest, IDB版本改变事件_:IDBVersionChangeEvent }
    正在拒绝版本请求: (本体: IDB打开数据库请求_, ev: IDB版本改变事件_) => 任意;

    //@@{ 添加事件监听器:addEventListener, IDB打开数据库请求事件映射_:IDBOpenDBRequestEventMap, 类型:type, 侦听器:listener, IDB打开数据库请求_:IDBOpenDBRequest, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 IDB打开数据库请求事件映射_>(类型: K, 侦听器: (本体: IDB打开数据库请求_, ev: IDB打开数据库请求事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 IDB打开数据库请求_: {

    //@@{ 原型:prototype, IDB打开数据库请求_:IDBOpenDBRequest }
    原型: IDB打开数据库请求_;

    //@@{ IDB打开数据库请求_:IDBOpenDBRequest }
    新建(): IDB打开数据库请求_;

};

//@@{ IDB请求事件映射_:IDBRequestEventMap }
接口 IDB请求事件映射_ {

    //@@{ "错误":"error", 事件_:Event }
    "错误": 事件_;

    //@@{ "成功":"success", 事件_:Event }
    "成功": 事件_;

}

//@@{ IDB请求_:IDBRequest, 事件目标_:EventTarget }
接口 IDB请求_ 扩展 事件目标_ {

    //@@{ 错误:error, 文档异常_:DOMException }
    只读 错误: 文档异常_;

    //@@{ 正在错误:onerror, IDB请求_:IDBRequest, 事件_:Event }
    正在错误: (本体: IDB请求_, ev: 事件_) => 任意;

    //@@{ 正在成功:onsuccess, IDB请求_:IDBRequest, 事件_:Event }
    正在成功: (本体: IDB请求_, ev: 事件_) => 任意;

    //@@{ 就绪状态:readyState, IDB请求就绪状态_:IDBRequestReadyState }
    只读 就绪状态: IDB请求就绪状态_;

    //@@{ 结果:result }
    只读 结果: 任意;

    //@@{ 来源:source, IDB对象存储_:IDBObjectStore, IDB索引_:IDBIndex, IDB光标_:IDBCursor }
    来源: IDB对象存储_ | IDB索引_ | IDB光标_;

    //@@{ 事务:transaction, IDB事务_:IDBTransaction }
    只读 事务: IDB事务_;

    //@@{ 添加事件监听器:addEventListener, IDB请求事件映射_:IDBRequestEventMap, 类型:type, 侦听器:listener, IDB请求_:IDBRequest, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 IDB请求事件映射_>(类型: K, 侦听器: (本体: IDB请求_, ev: IDB请求事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 IDB请求_: {

    //@@{ 原型:prototype, IDB请求_:IDBRequest }
    原型: IDB请求_;

    //@@{ IDB请求_:IDBRequest }
    新建(): IDB请求_;

};

//@@{ IDB事务事件映射_:IDBTransactionEventMap }
接口 IDB事务事件映射_ {

    //@@{ "终止":"abort", 事件_:Event }
    "终止": 事件_;

    //@@{ "完成":"complete", 事件_:Event }
    "完成": 事件_;

    //@@{ "错误":"error", 事件_:Event }
    "错误": 事件_;

}

//@@{ IDB事务_:IDBTransaction, 事件目标_:EventTarget }
接口 IDB事务_ 扩展 事件目标_ {

    //@@{ 数据库:db, IDB数据库_:IDBDatabase }
    只读 数据库: IDB数据库_;

    //@@{ 错误:error, 文档异常_:DOMException }
    只读 错误: 文档异常_;

    //@@{ 模式:mode, IDB事务模式_:IDBTransactionMode }
    只读 模式: IDB事务模式_;

    //@@{ 正在终止:onabort, IDB事务_:IDBTransaction, 事件_:Event }
    正在终止: (本体: IDB事务_, ev: 事件_) => 任意;

    //@@{ 正在完成:oncomplete, IDB事务_:IDBTransaction, 事件_:Event }
    正在完成: (本体: IDB事务_, ev: 事件_) => 任意;

    //@@{ 正在错误:onerror, IDB事务_:IDBTransaction, 事件_:Event }
    正在错误: (本体: IDB事务_, ev: 事件_) => 任意;

    //@@{ 终止:abort }
    终止(): 无值;

    //@@{ 对象存储:objectStore, 名字:name, IDB对象存储_:IDBObjectStore }
    对象存储(名字: 文字): IDB对象存储_;

    //@@{ __只读__:READ_ONLY }
    只读 __只读__: 文字;

    //@@{ __读写__:READ_WRITE }
    只读 __读写__: 文字;

    //@@{ __版本_改变__:VERSION_CHANGE }
    只读 __版本_改变__: 文字;

    //@@{ 添加事件监听器:addEventListener, IDB事务事件映射_:IDBTransactionEventMap, 类型:type, 侦听器:listener, IDB事务_:IDBTransaction, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 IDB事务事件映射_>(类型: K, 侦听器: (本体: IDB事务_, ev: IDB事务事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 IDB事务_: {

    //@@{ 原型:prototype, IDB事务_:IDBTransaction }
    原型: IDB事务_;

    //@@{ IDB事务_:IDBTransaction }
    新建(): IDB事务_;

    //@@{ __只读__:READ_ONLY }
    只读 __只读__: 文字;

    //@@{ __读写__:READ_WRITE }
    只读 __读写__: 文字;

    //@@{ __版本_改变__:VERSION_CHANGE }
    只读 __版本_改变__: 文字;

};

//@@{ IDB版本改变事件_:IDBVersionChangeEvent, 事件_:Event }
接口 IDB版本改变事件_ 扩展 事件_ {

    //@@{ 新版本:newVersion }
    只读 新版本: 数字 | 空值;

    //@@{ 老版本:oldVersion }
    只读 老版本: 数字;

}

声明 值量 IDB版本改变事件_: {

    //@@{ 原型:prototype, IDB版本改变事件_:IDBVersionChangeEvent }
    原型: IDB版本改变事件_;

    //@@{ IDB版本改变事件_:IDBVersionChangeEvent }
    新建(): IDB版本改变事件_;

};

//@@{ IIR滤波器节点_:IIRFilterNode, 音频节点_:AudioNode }
接口 IIR滤波器节点_ 扩展 音频节点_ {

    //@@{ 取频率响应:getFrequencyResponse, 频率赫兹:frequencyHz, 浮点数组32_:Float32Array, mag响应:magResponse, 相位响应:phaseResponse }
    取频率响应(频率赫兹: 浮点数组32_, mag响应: 浮点数组32_, 相位响应: 浮点数组32_): 无值;

}

声明 值量 IIR滤波器节点_: {

    //@@{ 原型:prototype, IIR滤波器节点_:IIRFilterNode }
    原型: IIR滤波器节点_;

    //@@{ IIR滤波器节点_:IIRFilterNode }
    新建(): IIR滤波器节点_;

};

//@@{ 图像数据_:ImageData }
接口 图像数据_ {

    //@@{ 数据:data, 正整数固定数组8_:Uint8ClampedArray }
    数据: 正整数固定数组8_;

    //@@{ 高度:height }
    只读 高度: 数字;

    //@@{ 宽度:width }
    只读 宽度: 数字;

}

声明 值量 图像数据_: {

    //@@{ 原型:prototype, 图像数据_:ImageData }
    原型: 图像数据_;

    //@@{ 宽度:width, 高度:height, 图像数据_:ImageData }
    新建(宽度: 数字, 高度: 数字): 图像数据_;

    //@@{ 数组:array, 正整数固定数组8_:Uint8ClampedArray, 宽度:width, 高度:height, 图像数据_:ImageData }
    新建(数组: 正整数固定数组8_, 宽度: 数字, 高度: 数字): 图像数据_;

};

//@@{ 交叉观察者_:IntersectionObserver }
接口 交叉观察者_ {

    //@@{ 根:root, 元素_:Element }
    只读 根: 元素_ | 空值;

    //@@{ 根边界:rootMargin }
    只读 根边界: 文字;

    //@@{ 阈值:thresholds }
    只读 阈值: 数字[];

    //@@{ 断开连接:disconnect }
    断开连接(): 无值;

    //@@{ 观察:observe, 目标:target, 元素_:Element }
    观察(目标: 元素_): 无值;

    //@@{ 需要记录:takeRecords, 交叉观察者条目_:IntersectionObserverEntry }
    需要记录(): 交叉观察者条目_[];

    //@@{ 卸载观察者:unobserve, 目标:target, 元素_:Element }
    卸载观察者(目标: 元素_): 无值;

}

声明 值量 交叉观察者_: {

    //@@{ 原型:prototype, 交叉观察者_:IntersectionObserver }
    原型: 交叉观察者_;

    //@@{ 回调:callback, 交叉观察者回调_:IntersectionObserverCallback, 选项:options, 交集观察者初始化_:IntersectionObserverInit, 交叉观察者_:IntersectionObserver }
    新建(回调: 交叉观察者回调_, 选项?: 交集观察者初始化_): 交叉观察者_;

};

//@@{ 交叉观察者条目_:IntersectionObserverEntry }
接口 交叉观察者条目_ {

    //@@{ 客户矩形边界:boundingClientRect, 客户矩形_:ClientRect }
    只读 客户矩形边界: 客户矩形_;

    //@@{ 交叉比率:intersectionRatio }
    只读 交叉比率: 数字;

    //@@{ 交叉矩形:intersectionRect, 客户矩形_:ClientRect }
    只读 交叉矩形: 客户矩形_;

    //@@{ 根界限:rootBounds, 客户矩形_:ClientRect }
    只读 根界限: 客户矩形_;

    //@@{ 目标:target, 元素_:Element }
    只读 目标: 元素_;

    //@@{ 时间:time }
    只读 时间: 数字;

    //@@{ 是交叉的:isIntersecting }
    只读 是交叉的: 真假;

}

声明 值量 交叉观察者条目_: {

    //@@{ 原型:prototype, 交叉观察者条目_:IntersectionObserverEntry }
    原型: 交叉观察者条目_;

    //@@{ 交叉观察者条目初始化:intersectionObserverEntryInit, 交集观察者条目初始化_:IntersectionObserverEntryInit, 交叉观察者条目_:IntersectionObserverEntry }
    新建(交叉观察者条目初始化: 交集观察者条目初始化_): 交叉观察者条目_;

};

//@@{ 键盘事件_:KeyboardEvent, UI事件_:UIEvent }
接口 键盘事件_ 扩展 UI事件_ {

    //@@{ alt键:altKey }
    只读 alt键: 真假;

    //@@{ 字符:char }
    只读 字符: 文字 | 空值;

    //@@{ 字符代码:charCode }
    只读 字符代码: 数字;

    //@@{ ctrl键:ctrlKey }
    只读 ctrl键: 真假;

    //@@{ 键:key }
    只读 键: 文字;

    //@@{ 键代码:keyCode }
    只读 键代码: 数字;

    //@@{ 语言环境:locale }
    只读 语言环境: 文字;

    //@@{ 位置:location }
    只读 位置: 数字;

    //@@{ meta键:metaKey }
    只读 meta键: 真假;

    //@@{ 重复:repeat }
    只读 重复: 真假;

    //@@{ shift键:shiftKey }
    只读 shift键: 真假;

    只读 which: 数字;

    //@@{ 代码:code }
    只读 代码: 文字;

    //@@{ 取修饰符状态:getModifierState, 键参数:keyArg }
    取修饰符状态(键参数: 文字): 真假;

    //@@{ 初始化键盘事件:initKeyboardEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 视图参数:viewArg, 窗口_:Window, 键参数:keyArg, 位置参数:locationArg, 修饰符列表参数:modifiersListArg, 重复:repeat, 语言环境:locale }
    初始化键盘事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 视图参数: 窗口_, 键参数: 文字, 位置参数: 数字, 修饰符列表参数: 文字, 重复: 真假, 语言环境: 文字): 无值;

    //@@{ __文档_键_位置_操纵杆__:DOM_KEY_LOCATION_JOYSTICK }
    只读 __文档_键_位置_操纵杆__: 数字;

    //@@{ __文档_键_位置_左__:DOM_KEY_LOCATION_LEFT }
    只读 __文档_键_位置_左__: 数字;

    //@@{ __文档_键_位置_移动__:DOM_KEY_LOCATION_MOBILE }
    只读 __文档_键_位置_移动__: 数字;

    //@@{ __文档_键_位置_数字键盘__:DOM_KEY_LOCATION_NUMPAD }
    只读 __文档_键_位置_数字键盘__: 数字;

    //@@{ __文档_键_位置_右__:DOM_KEY_LOCATION_RIGHT }
    只读 __文档_键_位置_右__: 数字;

    //@@{ __文档_键_位置_标准__:DOM_KEY_LOCATION_STANDARD }
    只读 __文档_键_位置_标准__: 数字;

}

声明 值量 键盘事件_: {

    //@@{ 原型:prototype, 键盘事件_:KeyboardEvent }
    原型: 键盘事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 键盘事件初始化_:KeyboardEventInit, 键盘事件_:KeyboardEvent }
    新建(类型参数: 文字, 事件初始化词典?: 键盘事件初始化_): 键盘事件_;

    //@@{ __文档_键_位置_操纵杆__:DOM_KEY_LOCATION_JOYSTICK }
    只读 __文档_键_位置_操纵杆__: 数字;

    //@@{ __文档_键_位置_左__:DOM_KEY_LOCATION_LEFT }
    只读 __文档_键_位置_左__: 数字;

    //@@{ __文档_键_位置_移动__:DOM_KEY_LOCATION_MOBILE }
    只读 __文档_键_位置_移动__: 数字;

    //@@{ __文档_键_位置_数字键盘__:DOM_KEY_LOCATION_NUMPAD }
    只读 __文档_键_位置_数字键盘__: 数字;

    //@@{ __文档_键_位置_右__:DOM_KEY_LOCATION_RIGHT }
    只读 __文档_键_位置_右__: 数字;

    //@@{ __文档_键_位置_标准__:DOM_KEY_LOCATION_STANDARD }
    只读 __文档_键_位置_标准__: 数字;

};

//@@{ 监听状态改变事件_:ListeningStateChangedEvent, 事件_:Event }
接口 监听状态改变事件_ 扩展 事件_ {

    //@@{ 标签:label }
    只读 标签: 文字;

    //@@{ 状态:state, 监听状态_:ListeningState }
    只读 状态: 监听状态_;

}

声明 值量 监听状态改变事件_: {

    //@@{ 原型:prototype, 监听状态改变事件_:ListeningStateChangedEvent }
    原型: 监听状态改变事件_;

    //@@{ 监听状态改变事件_:ListeningStateChangedEvent }
    新建(): 监听状态改变事件_;

};

//@@{ 位置_:Location }
接口 位置_ {

    //@@{ 哈希:hash }
    哈希: 文字;

    //@@{ 主机:host }
    主机: 文字;

    //@@{ 主机名:hostname }
    主机名: 文字;

    //@@{ 目标URL:href }
    目标URL: 文字;

    //@@{ 起源:origin }
    只读 起源: 文字;

    //@@{ 路径名:pathname }
    路径名: 文字;

    //@@{ 端口:port }
    端口: 文字;

    //@@{ 协议:protocol }
    协议: 文字;

    //@@{ 搜索:search }
    搜索: 文字;

    //@@{ 分配:assign }
    分配(url: 文字): 无值;

    //@@{ 重新加载:reload, 强制重载:forcedReload }
    重新加载(强制重载?: 真假): 无值;

    //@@{ 替换:replace }
    替换(url: 文字): 无值;

    //@@{ 转为文字:toString }
    转为文字(): 文字;

}

声明 值量 位置_: {

    //@@{ 原型:prototype, 位置_:Location }
    原型: 位置_;

    //@@{ 位置_:Location }
    新建(): 位置_;

};

//@@{ 检测到长时间运行脚本事件_:LongRunningScriptDetectedEvent, 事件_:Event }
接口 检测到长时间运行脚本事件_ 扩展 事件_ {

    //@@{ 执行时间:executionTime }
    只读 执行时间: 数字;

    //@@{ 停止页面脚本执行:stopPageScriptExecution }
    停止页面脚本执行: 真假;

}

声明 值量 检测到长时间运行脚本事件_: {

    //@@{ 原型:prototype, 检测到长时间运行脚本事件_:LongRunningScriptDetectedEvent }
    原型: 检测到长时间运行脚本事件_;

    //@@{ 检测到长时间运行脚本事件_:LongRunningScriptDetectedEvent }
    新建(): 检测到长时间运行脚本事件_;

};

//@@{ 媒体设备信息_:MediaDeviceInfo }
接口 媒体设备信息_ {

    //@@{ 设备Id:deviceId }
    只读 设备Id: 文字;

    //@@{ 组Id:groupId }
    只读 组Id: 文字;

    //@@{ 种类:kind, 媒体设备类_:MediaDeviceKind }
    只读 种类: 媒体设备类_;

    //@@{ 标签:label }
    只读 标签: 文字;

}

声明 值量 媒体设备信息_: {

    //@@{ 原型:prototype, 媒体设备信息_:MediaDeviceInfo }
    原型: 媒体设备信息_;

    //@@{ 媒体设备信息_:MediaDeviceInfo }
    新建(): 媒体设备信息_;

};

//@@{ 媒体设备事件映射_:MediaDevicesEventMap }
接口 媒体设备事件映射_ {

    //@@{ "设备改变":"devicechange", 事件_:Event }
    "设备改变": 事件_;

}

//@@{ 媒体设备_:MediaDevices, 事件目标_:EventTarget }
接口 媒体设备_ 扩展 事件目标_ {

    //@@{ 正在设备改变:ondevicechange, 媒体设备_:MediaDevices, 事件_:Event }
    正在设备改变: (本体: 媒体设备_, ev: 事件_) => 任意;

    //@@{ 枚举设备:enumerateDevices, 预设_:Promise, 媒体设备信息_:MediaDeviceInfo }
    枚举设备(): 预设_<媒体设备信息_[]>;

    //@@{ 取支持约束:getSupportedConstraints, 媒体轨道支持约束_:MediaTrackSupportedConstraints }
    取支持约束(): 媒体轨道支持约束_;

    //@@{ 取用户媒体:getUserMedia, 约束:constraints, 媒体流约束_:MediaStreamConstraints, 预设_:Promise, 媒体流_:MediaStream }
    取用户媒体(约束: 媒体流约束_): 预设_<媒体流_>;

    //@@{ 添加事件监听器:addEventListener, 媒体设备事件映射_:MediaDevicesEventMap, 类型:type, 侦听器:listener, 媒体设备_:MediaDevices, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 媒体设备事件映射_>(类型: K, 侦听器: (本体: 媒体设备_, ev: 媒体设备事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 媒体设备_: {

    //@@{ 原型:prototype, 媒体设备_:MediaDevices }
    原型: 媒体设备_;

    //@@{ 媒体设备_:MediaDevices }
    新建(): 媒体设备_;

};

//@@{ 媒体元素音频源节点_:MediaElementAudioSourceNode, 音频节点_:AudioNode }
接口 媒体元素音频源节点_ 扩展 音频节点_ {

}

声明 值量 媒体元素音频源节点_: {

    //@@{ 原型:prototype, 媒体元素音频源节点_:MediaElementAudioSourceNode }
    原型: 媒体元素音频源节点_;

    //@@{ 媒体元素音频源节点_:MediaElementAudioSourceNode }
    新建(): 媒体元素音频源节点_;

};

//@@{ 媒体加密事件_:MediaEncryptedEvent, 事件_:Event }
接口 媒体加密事件_ 扩展 事件_ {

    //@@{ 初始化数据:initData, 数组缓冲区_:ArrayBuffer }
    只读 初始化数据: 数组缓冲区_ | 空值;

    //@@{ 初始化数据类型:initDataType }
    只读 初始化数据类型: 文字;

}

声明 值量 媒体加密事件_: {

    //@@{ 原型:prototype, 媒体加密事件_:MediaEncryptedEvent }
    原型: 媒体加密事件_;

    //@@{ 类型:type, 事件初始化词典:eventInitDict, 媒体加密事件初始化_:MediaEncryptedEventInit, 媒体加密事件_:MediaEncryptedEvent }
    新建(类型: 文字, 事件初始化词典?: 媒体加密事件初始化_): 媒体加密事件_;

};

//@@{ 媒体错误_:MediaError }
接口 媒体错误_ {

    //@@{ 代码:code }
    只读 代码: 数字;

    //@@{ ms扩展代码:msExtendedCode }
    只读 ms扩展代码: 数字;

    //@@{ __媒体_错误_流产__:MEDIA_ERR_ABORTED }
    只读 __媒体_错误_流产__: 数字;

    //@@{ __媒体_错误_解码__:MEDIA_ERR_DECODE }
    只读 __媒体_错误_解码__: 数字;

    //@@{ __媒体_错误_网络__:MEDIA_ERR_NETWORK }
    只读 __媒体_错误_网络__: 数字;

    //@@{ __媒体_错误_源_不支持__:MEDIA_ERR_SRC_NOT_SUPPORTED }
    只读 __媒体_错误_源_不支持__: 数字;

    //@@{ __MS_媒体_错误_加密__:MS_MEDIA_ERR_ENCRYPTED }
    只读 __MS_媒体_错误_加密__: 数字;

}

声明 值量 媒体错误_: {

    //@@{ 原型:prototype, 媒体错误_:MediaError }
    原型: 媒体错误_;

    //@@{ 媒体错误_:MediaError }
    新建(): 媒体错误_;

    //@@{ __媒体_错误_流产__:MEDIA_ERR_ABORTED }
    只读 __媒体_错误_流产__: 数字;

    //@@{ __媒体_错误_解码__:MEDIA_ERR_DECODE }
    只读 __媒体_错误_解码__: 数字;

    //@@{ __媒体_错误_网络__:MEDIA_ERR_NETWORK }
    只读 __媒体_错误_网络__: 数字;

    //@@{ __媒体_错误_源_不支持__:MEDIA_ERR_SRC_NOT_SUPPORTED }
    只读 __媒体_错误_源_不支持__: 数字;

    //@@{ __MS_媒体_错误_加密__:MS_MEDIA_ERR_ENCRYPTED }
    只读 __MS_媒体_错误_加密__: 数字;

};

//@@{ 媒体键消息事件_:MediaKeyMessageEvent, 事件_:Event }
接口 媒体键消息事件_ 扩展 事件_ {

    //@@{ 消息:message, 数组缓冲区_:ArrayBuffer }
    只读 消息: 数组缓冲区_;

    //@@{ 消息类型:messageType, 媒体键消息类型_:MediaKeyMessageType }
    只读 消息类型: 媒体键消息类型_;

}

声明 值量 媒体键消息事件_: {

    //@@{ 原型:prototype, 媒体键消息事件_:MediaKeyMessageEvent }
    原型: 媒体键消息事件_;

    //@@{ 类型:type, 事件初始化词典:eventInitDict, 媒体键消息事件初始化_:MediaKeyMessageEventInit, 媒体键消息事件_:MediaKeyMessageEvent }
    新建(类型: 文字, 事件初始化词典?: 媒体键消息事件初始化_): 媒体键消息事件_;

};

//@@{ 媒体键组_:MediaKeys }
接口 媒体键组_ {

    //@@{ 创建会话:createSession, 会话类型:sessionType, 媒体键会话类型_:MediaKeySessionType, 媒体会话密钥_:MediaKeySession }
    创建会话(会话类型?: 媒体键会话类型_): 媒体会话密钥_;

    //@@{ 置服务器证书:setServerCertificate, 服务器证书:serverCertificate, 预设_:Promise }
    置服务器证书(服务器证书: 任意): 预设_<无值>;

}

声明 值量 媒体键组_: {

    //@@{ 原型:prototype, 媒体键组_:MediaKeys }
    原型: 媒体键组_;

    //@@{ 媒体键组_:MediaKeys }
    新建(): 媒体键组_;

};

//@@{ 媒体会话密钥_:MediaKeySession, 事件目标_:EventTarget }
接口 媒体会话密钥_ 扩展 事件目标_ {

    //@@{ 关闭的:closed, 预设_:Promise }
    只读 关闭的: 预设_<无值>;

    //@@{ 过期:expiration }
    只读 过期: 数字;

    //@@{ 键状态:keyStatuses, 媒体键状态映射_:MediaKeyStatusMap }
    只读 键状态: 媒体键状态映射_;

    //@@{ 会话Id:sessionId }
    只读 会话Id: 文字;

    //@@{ 关闭:close, 预设_:Promise }
    关闭(): 预设_<无值>;

    //@@{ 生成请求:generateRequest, 初始化数据类型:initDataType, 初始化数据:initData, 预设_:Promise }
    生成请求(初始化数据类型: 文字, 初始化数据: 任意): 预设_<无值>;

    //@@{ 加载:load, 会话Id:sessionId, 预设_:Promise }
    加载(会话Id: 文字): 预设_<真假>;

    //@@{ 删除:remove, 预设_:Promise }
    删除(): 预设_<无值>;

    //@@{ 更新:update, 响应:response, 预设_:Promise }
    更新(响应: 任意): 预设_<无值>;

}

声明 值量 媒体会话密钥_: {

    //@@{ 原型:prototype, 媒体会话密钥_:MediaKeySession }
    原型: 媒体会话密钥_;

    //@@{ 媒体会话密钥_:MediaKeySession }
    新建(): 媒体会话密钥_;

};

//@@{ 媒体键状态映射_:MediaKeyStatusMap }
接口 媒体键状态映射_ {

    //@@{ 大小:size }
    只读 大小: 数字;

    //@@{ 循环执行:forEach, 回调:callback, 循环执行回调_:ForEachCallback }
    循环执行(回调: 循环执行回调_): 无值;

    //@@{ 获取:get, 键Id:keyId, 媒体键状态_:MediaKeyStatus }
    获取(键Id: 任意): 媒体键状态_;

    //@@{ 存在:has, 键Id:keyId }
    存在(键Id: 任意): 真假;

}

声明 值量 媒体键状态映射_: {

    //@@{ 原型:prototype, 媒体键状态映射_:MediaKeyStatusMap }
    原型: 媒体键状态映射_;

    //@@{ 媒体键状态映射_:MediaKeyStatusMap }
    新建(): 媒体键状态映射_;

};

//@@{ 媒体键系统访问_:MediaKeySystemAccess }
接口 媒体键系统访问_ {

    //@@{ 键系统:keySystem }
    只读 键系统: 文字;

    //@@{ 创建媒体键:createMediaKeys, 预设_:Promise, 媒体键组_:MediaKeys }
    创建媒体键(): 预设_<媒体键组_>;

    //@@{ 取配置:getConfiguration, 媒体键系统配置_:MediaKeySystemConfiguration }
    取配置(): 媒体键系统配置_;

}

声明 值量 媒体键系统访问_: {

    //@@{ 原型:prototype, 媒体键系统访问_:MediaKeySystemAccess }
    原型: 媒体键系统访问_;

    //@@{ 媒体键系统访问_:MediaKeySystemAccess }
    新建(): 媒体键系统访问_;

};

//@@{ 媒体列表_:MediaList }
接口 媒体列表_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 媒体文本:mediaText }
    媒体文本: 文字;

    //@@{ 附加媒体:appendMedium, 新媒体:newMedium }
    附加媒体(新媒体: 文字): 无值;

    //@@{ 删除媒体:deleteMedium, 旧媒体:oldMedium }
    删除媒体(旧媒体: 文字): 无值;

    //@@{ 项目:item, 索引:index }
    项目(索引: 数字): 文字;

    //@@{ 转为文字:toString }
    转为文字(): 文字;

    //@@{ 索引:index }
    [索引: 数字]: 文字;

}

声明 值量 媒体列表_: {

    //@@{ 原型:prototype, 媒体列表_:MediaList }
    原型: 媒体列表_;

    //@@{ 媒体列表_:MediaList }
    新建(): 媒体列表_;

};

//@@{ 媒体查询列表_:MediaQueryList }
接口 媒体查询列表_ {

    //@@{ 匹配:matches }
    只读 匹配: 真假;

    //@@{ 媒体:media }
    只读 媒体: 文字;

    //@@{ 添加监听器:addListener, 侦听器:listener, 媒体查询列表侦听器_:MediaQueryListListener }
    添加监听器(侦听器: 媒体查询列表侦听器_): 无值;

    //@@{ 删除监听器:removeListener, 侦听器:listener, 媒体查询列表侦听器_:MediaQueryListListener }
    删除监听器(侦听器: 媒体查询列表侦听器_): 无值;

}

声明 值量 媒体查询列表_: {

    //@@{ 原型:prototype, 媒体查询列表_:MediaQueryList }
    原型: 媒体查询列表_;

    //@@{ 媒体查询列表_:MediaQueryList }
    新建(): 媒体查询列表_;

};

//@@{ 媒体来源_:MediaSource, 事件目标_:EventTarget }
接口 媒体来源_ 扩展 事件目标_ {

    //@@{ 活动源缓冲区:activeSourceBuffers, 源缓冲区列表_:SourceBufferList }
    只读 活动源缓冲区: 源缓冲区列表_;

    //@@{ 持续时间:duration }
    持续时间: 数字;

    //@@{ 就绪状态:readyState }
    只读 就绪状态: 文字;

    //@@{ 源缓冲区:sourceBuffers, 源缓冲区列表_:SourceBufferList }
    只读 源缓冲区: 源缓冲区列表_;

    //@@{ 添加源缓冲区:addSourceBuffer, 类型:type, 源缓冲区_:SourceBuffer }
    添加源缓冲区(类型: 文字): 源缓冲区_;

    //@@{ 流的结束:endOfStream, 错误:error }
    流的结束(错误?: 数字): 无值;

    //@@{ 删除源缓冲区:removeSourceBuffer, 源缓冲区:sourceBuffer, 源缓冲区_:SourceBuffer }
    删除源缓冲区(源缓冲区: 源缓冲区_): 无值;

}

声明 值量 媒体来源_: {

    //@@{ 原型:prototype, 媒体来源_:MediaSource }
    原型: 媒体来源_;

    //@@{ 媒体来源_:MediaSource }
    新建(): 媒体来源_;

    //@@{ 是支持类型:isTypeSupported, 类型:type }
    是支持类型(类型: 文字): 真假;

};

//@@{ 媒体流事件映射_:MediaStreamEventMap }
接口 媒体流事件映射_ {

    //@@{ "活动":"active", 事件_:Event }
    "活动": 事件_;

    //@@{ "添加轨道":"addtrack", 媒体流轨道事件_:MediaStreamTrackEvent }
    "添加轨道": 媒体流轨道事件_;

    //@@{ "闲置":"inactive", 事件_:Event }
    "闲置": 事件_;

    //@@{ "删除轨道":"removetrack", 媒体流轨道事件_:MediaStreamTrackEvent }
    "删除轨道": 媒体流轨道事件_;

}

//@@{ 媒体流_:MediaStream, 事件目标_:EventTarget }
接口 媒体流_ 扩展 事件目标_ {

    //@@{ 活动:active }
    只读 活动: 真假;

    只读 id: 文字;

    //@@{ 正在活动:onactive, 媒体流_:MediaStream, 事件_:Event }
    正在活动: (本体: 媒体流_, ev: 事件_) => 任意;

    //@@{ 正在添加轨道:onaddtrack, 媒体流_:MediaStream, 媒体流轨道事件_:MediaStreamTrackEvent }
    正在添加轨道: (本体: 媒体流_, ev: 媒体流轨道事件_) => 任意;

    //@@{ 正在闲置:oninactive, 媒体流_:MediaStream, 事件_:Event }
    正在闲置: (本体: 媒体流_, ev: 事件_) => 任意;

    //@@{ 正在删除轨道:onremovetrack, 媒体流_:MediaStream, 媒体流轨道事件_:MediaStreamTrackEvent }
    正在删除轨道: (本体: 媒体流_, ev: 媒体流轨道事件_) => 任意;

    //@@{ 添加轨道:addTrack, 轨道:track, 媒体流轨道_:MediaStreamTrack }
    添加轨道(轨道: 媒体流轨道_): 无值;

    //@@{ 克隆:clone, 媒体流_:MediaStream }
    克隆(): 媒体流_;

    //@@{ 取音频轨道:getAudioTracks, 媒体流轨道_:MediaStreamTrack }
    取音频轨道(): 媒体流轨道_[];

    //@@{ 取轨道按Id:getTrackById, 轨道Id:trackId, 媒体流轨道_:MediaStreamTrack }
    取轨道按Id(轨道Id: 文字): 媒体流轨道_ | 空值;

    //@@{ 取轨道组:getTracks, 媒体流轨道_:MediaStreamTrack }
    取轨道组(): 媒体流轨道_[];

    //@@{ 取视频轨道组:getVideoTracks, 媒体流轨道_:MediaStreamTrack }
    取视频轨道组(): 媒体流轨道_[];

    //@@{ 删除轨道:removeTrack, 轨道:track, 媒体流轨道_:MediaStreamTrack }
    删除轨道(轨道: 媒体流轨道_): 无值;

    //@@{ 停止:stop }
    停止(): 无值;

    //@@{ 添加事件监听器:addEventListener, 媒体流事件映射_:MediaStreamEventMap, 类型:type, 侦听器:listener, 媒体流_:MediaStream, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 媒体流事件映射_>(类型: K, 侦听器: (本体: 媒体流_, ev: 媒体流事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 媒体流_: {

    //@@{ 原型:prototype, 媒体流_:MediaStream }
    原型: 媒体流_;

    //@@{ 流或轨道:streamOrTracks, 媒体流_:MediaStream, 媒体流轨道_:MediaStreamTrack }
    新建(流或轨道?: 媒体流_ | 媒体流轨道_[]): 媒体流_;

};

//@@{ 音频节点_:AudioNode }
接口 MediaStreamAudioSourceNode 扩展 音频节点_ {

}

声明 值量 MediaStreamAudioSourceNode: {

    prototype: MediaStreamAudioSourceNode;

    新建(): MediaStreamAudioSourceNode;

};

接口 MediaStreamError {

    只读 constraintName: 文字 | 空值;

    只读 message: 文字 | 空值;

    只读 name: 文字;

}

声明 值量 MediaStreamError: {

    prototype: MediaStreamError;

    新建(): MediaStreamError;

};

//@@{ 媒体流错误事件_:MediaStreamErrorEvent, 事件_:Event }
接口 媒体流错误事件_ 扩展 事件_ {

    //@@{ 错误:error }
    只读 错误: MediaStreamError | 空值;

}

声明 值量 媒体流错误事件_: {

    //@@{ 原型:prototype, 媒体流错误事件_:MediaStreamErrorEvent }
    原型: 媒体流错误事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 媒体流错误事件初始化_:MediaStreamErrorEventInit, 媒体流错误事件_:MediaStreamErrorEvent }
    新建(类型参数: 文字, 事件初始化词典?: 媒体流错误事件初始化_): 媒体流错误事件_;

};

//@@{ 媒体流事件_:MediaStreamEvent, 事件_:Event }
接口 媒体流事件_ 扩展 事件_ {

    //@@{ 流:stream, 媒体流_:MediaStream }
    只读 流: 媒体流_ | 空值;

}

声明 值量 媒体流事件_: {

    //@@{ 原型:prototype, 媒体流事件_:MediaStreamEvent }
    原型: 媒体流事件_;

    //@@{ 类型:type, 事件初始化词典:eventInitDict, 媒体流事件初始化_:MediaStreamEventInit, 媒体流事件_:MediaStreamEvent }
    新建(类型: 文字, 事件初始化词典: 媒体流事件初始化_): 媒体流事件_;

};

//@@{ 媒体流轨道事件映射_:MediaStreamTrackEventMap }
接口 媒体流轨道事件映射_ {

    //@@{ "结束了":"ended", 媒体流错误事件_:MediaStreamErrorEvent }
    "结束了": 媒体流错误事件_;

    //@@{ "静音":"mute", 事件_:Event }
    "静音": 事件_;

    //@@{ "过度约束":"overconstrained", 媒体流错误事件_:MediaStreamErrorEvent }
    "过度约束": 媒体流错误事件_;

    //@@{ "取消静音":"unmute", 事件_:Event }
    "取消静音": 事件_;

}

//@@{ 媒体流轨道_:MediaStreamTrack, 事件目标_:EventTarget }
接口 媒体流轨道_ 扩展 事件目标_ {

    //@@{ 启用:enabled }
    启用: 真假;

    只读 id: 文字;

    //@@{ 种类:kind }
    只读 种类: 文字;

    //@@{ 标签:label }
    只读 标签: 文字;

    //@@{ 静音的:muted }
    只读 静音的: 真假;

    //@@{ 正在结束了:onended, 媒体流轨道_:MediaStreamTrack, 媒体流错误事件_:MediaStreamErrorEvent }
    正在结束了: (本体: 媒体流轨道_, ev: 媒体流错误事件_) => 任意;

    //@@{ 正在静音:onmute, 媒体流轨道_:MediaStreamTrack, 事件_:Event }
    正在静音: (本体: 媒体流轨道_, ev: 事件_) => 任意;

    //@@{ 正在过度约束:onoverconstrained, 媒体流轨道_:MediaStreamTrack, 媒体流错误事件_:MediaStreamErrorEvent }
    正在过度约束: (本体: 媒体流轨道_, ev: 媒体流错误事件_) => 任意;

    //@@{ 正在取消静音:onunmute, 媒体流轨道_:MediaStreamTrack, 事件_:Event }
    正在取消静音: (本体: 媒体流轨道_, ev: 事件_) => 任意;

    //@@{ 只读:readonly }
    只读 只读: 真假;

    //@@{ 就绪状态:readyState, 媒体流跟踪状态_:MediaStreamTrackState }
    只读 就绪状态: 媒体流跟踪状态_;

    //@@{ 远程:remote }
    只读 远程: 真假;

    //@@{ 应用约束:applyConstraints, 约束:constraints, 媒体轨道约束_:MediaTrackConstraints, 预设_:Promise }
    应用约束(约束: 媒体轨道约束_): 预设_<无值>;

    //@@{ 克隆:clone, 媒体流轨道_:MediaStreamTrack }
    克隆(): 媒体流轨道_;

    //@@{ 取功能:getCapabilities, 媒体轨道功能_:MediaTrackCapabilities }
    取功能(): 媒体轨道功能_;

    //@@{ 取约束:getConstraints, 媒体轨道约束_:MediaTrackConstraints }
    取约束(): 媒体轨道约束_;

    //@@{ 取设置:getSettings, 媒体轨道设置_:MediaTrackSettings }
    取设置(): 媒体轨道设置_;

    //@@{ 停止:stop }
    停止(): 无值;

    //@@{ 添加事件监听器:addEventListener, 媒体流轨道事件映射_:MediaStreamTrackEventMap, 类型:type, 侦听器:listener, 媒体流轨道_:MediaStreamTrack, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 媒体流轨道事件映射_>(类型: K, 侦听器: (本体: 媒体流轨道_, ev: 媒体流轨道事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 媒体流轨道_: {

    //@@{ 原型:prototype, 媒体流轨道_:MediaStreamTrack }
    原型: 媒体流轨道_;

    //@@{ 媒体流轨道_:MediaStreamTrack }
    新建(): 媒体流轨道_;

};

//@@{ 媒体流轨道事件_:MediaStreamTrackEvent, 事件_:Event }
接口 媒体流轨道事件_ 扩展 事件_ {

    //@@{ 轨道:track, 媒体流轨道_:MediaStreamTrack }
    只读 轨道: 媒体流轨道_;

}

声明 值量 媒体流轨道事件_: {

    //@@{ 原型:prototype, 媒体流轨道事件_:MediaStreamTrackEvent }
    原型: 媒体流轨道事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 媒体流轨道事件初始化_:MediaStreamTrackEventInit, 媒体流轨道事件_:MediaStreamTrackEvent }
    新建(类型参数: 文字, 事件初始化词典?: 媒体流轨道事件初始化_): 媒体流轨道事件_;

};

//@@{ 消息通道_:MessageChannel }
接口 消息通道_ {

    //@@{ 端口1:port1, 消息端口_:MessagePort }
    只读 端口1: 消息端口_;

    //@@{ 端口2:port2, 消息端口_:MessagePort }
    只读 端口2: 消息端口_;

}

声明 值量 消息通道_: { 

    //@@{ 原型:prototype, 消息通道_:MessageChannel }
    原型: 消息通道_;

    //@@{ 消息通道_:MessageChannel }
    新建(): 消息通道_;

};

//@@{ 消息事件_:MessageEvent, 事件_:Event }
接口 消息事件_ 扩展 事件_ {

    //@@{ 数据:data }
    只读 数据: 任意;

    //@@{ 起点:origin }
    只读 起点: 文字;

    //@@{ 端口:ports }
    只读 端口: 任意;

    //@@{ 来源:source, 窗口_:Window }
    只读 来源: 窗口_;

    //@@{ 初始化消息事件:initMessageEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 数据参数:dataArg, 起点参数:originArg, 尾事件Id参数:lastEventIdArg, 来源参数:sourceArg, 窗口_:Window }
    初始化消息事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 数据参数: 任意, 起点参数: 文字, 尾事件Id参数: 文字, 来源参数: 窗口_): 无值;

}

声明 值量 消息事件_: {

    //@@{ 原型:prototype, 消息事件_:MessageEvent }
    原型: 消息事件_;

    //@@{ 类型:type, 事件初始化词典:eventInitDict, 消息事件初始化_:MessageEventInit, 消息事件_:MessageEvent }
    新建(类型: 文字, 事件初始化词典?: 消息事件初始化_): 消息事件_;

};

//@@{ 消息端口事件映射_:MessagePortEventMap }
接口 消息端口事件映射_ {

    //@@{ "消息":"message", 消息事件_:MessageEvent }
    "消息": 消息事件_;

}

//@@{ 消息端口_:MessagePort, 事件目标_:EventTarget }
接口 消息端口_ 扩展 事件目标_ {

    //@@{ 正在消息:onmessage, 消息端口_:MessagePort, 消息事件_:MessageEvent }
    正在消息: (本体: 消息端口_, ev: 消息事件_) => 任意;

    //@@{ 关闭:close }
    关闭(): 无值;

    //@@{ 发布消息:postMessage, 消息:message, 转移:transfer }
    发布消息(消息?: 任意, 转移?: 任意[]): 无值;

    //@@{ 开始:start }
    开始(): 无值;

    //@@{ 添加事件监听器:addEventListener, 消息端口事件映射_:MessagePortEventMap, 类型:type, 侦听器:listener, 消息端口_:MessagePort, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 消息端口事件映射_>(类型: K, 侦听器: (本体: 消息端口_, ev: 消息端口事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 消息端口_: {

    //@@{ 原型:prototype, 消息端口_:MessagePort }
    原型: 消息端口_;

    //@@{ 消息端口_:MessagePort }
    新建(): 消息端口_;

};

//@@{ Mime类型_:MimeType }
接口 Mime类型_ {

    //@@{ 描述:description }
    只读 描述: 文字;

    //@@{ 启用插件:enabledPlugin, 插件_:Plugin }
    只读 启用插件: 插件_;

    //@@{ 后缀:suffixes }
    只读 后缀: 文字;

    //@@{ 类型:type }
    只读 类型: 文字;

}

声明 值量 Mime类型_: {

    //@@{ 原型:prototype, Mime类型_:MimeType }
    原型: Mime类型_;

    //@@{ Mime类型_:MimeType }
    新建(): Mime类型_;

};

//@@{ Mime类型数组_:MimeTypeArray }
接口 Mime类型数组_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 项目:item, 索引:index, 插件_:Plugin }
    项目(索引: 数字): 插件_;

    //@@{ 命名项目:namedItem, 类型:type, 插件_:Plugin }
    命名项目(类型: 文字): 插件_;

    //@@{ 索引:index, 插件_:Plugin }
    [索引: 数字]: 插件_;

}

声明 值量 Mime类型数组_: {

    //@@{ 原型:prototype, Mime类型数组_:MimeTypeArray }
    原型: Mime类型数组_;

    //@@{ Mime类型数组_:MimeTypeArray }
    新建(): Mime类型数组_;

};

//@@{ 鼠标事件_:MouseEvent, UI事件_:UIEvent }
接口 鼠标事件_ 扩展 UI事件_ {

    //@@{ alt键:altKey }
    只读 alt键: 真假;

    //@@{ 按钮:button }
    只读 按钮: 数字;

    //@@{ 按钮组:buttons }
    只读 按钮组: 数字;

    //@@{ 客户X:clientX }
    只读 客户X: 数字;

    //@@{ 客户Y:clientY }
    只读 客户Y: 数字;

    //@@{ ctrl键:ctrlKey }
    只读 ctrl键: 真假;

    //@@{ 从元素:fromElement, 元素_:Element }
    只读 从元素: 元素_;

    //@@{ 层X:layerX }
    只读 层X: 数字;

    //@@{ 层Y:layerY }
    只读 层Y: 数字;

    //@@{ meta键:metaKey }
    只读 meta键: 真假;

    //@@{ 运动X:movementX }
    只读 运动X: 数字;

    //@@{ 运动Y:movementY }
    只读 运动Y: 数字;

    //@@{ 偏移X:offsetX }
    只读 偏移X: 数字;

    //@@{ 偏移Y:offsetY }
    只读 偏移Y: 数字;

    //@@{ 页面X:pageX }
    只读 页面X: 数字;

    //@@{ 页面Y:pageY }
    只读 页面Y: 数字;

    //@@{ 相关的目标:relatedTarget, 事件目标_:EventTarget }
    只读 相关的目标: 事件目标_;

    //@@{ 屏幕X:screenX }
    只读 屏幕X: 数字;

    //@@{ 屏幕Y:screenY }
    只读 屏幕Y: 数字;

    //@@{ shift键:shiftKey }
    只读 shift键: 真假;

    //@@{ 到元素:toElement, 元素_:Element }
    只读 到元素: 元素_;

    //@@{ 哪个:which }
    只读 哪个: 数字;

    只读 x: 数字;

    只读 y: 数字;

    //@@{ 取修饰符状态:getModifierState, 键参数:keyArg }
    取修饰符状态(键参数: 文字): 真假;

    //@@{ 初始化鼠标事件:initMouseEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 视图参数:viewArg, 窗口_:Window, 细节参数:detailArg, 屏幕X参数:screenXArg, 屏幕Y参数:screenYArg, 客户X参数:clientXArg, 客户Y参数:clientYArg, ctrl键参数:ctrlKeyArg, alt键参数:altKeyArg, shift键参数:shiftKeyArg, meta键参数:metaKeyArg, 按钮参数:buttonArg, 相关目标参数:relatedTargetArg, 事件目标_:EventTarget }
    初始化鼠标事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 视图参数: 窗口_, 细节参数: 数字, 屏幕X参数: 数字, 屏幕Y参数: 数字, 客户X参数: 数字, 客户Y参数: 数字, ctrl键参数: 真假, alt键参数: 真假, shift键参数: 真假, meta键参数: 真假, 按钮参数: 数字, 相关目标参数: 事件目标_ | 空值): 无值;

}

声明 值量 鼠标事件_: {

    //@@{ 原型:prototype, 鼠标事件_:MouseEvent }
    原型: 鼠标事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 鼠标事件初始化_:MouseEventInit, 鼠标事件_:MouseEvent }
    新建(类型参数: 文字, 事件初始化词典?: 鼠标事件初始化_): 鼠标事件_;

};

//@@{ MS应用程序_:MSApp }
接口 MS应用程序_ {

    //@@{ 清除临时网络数据:clearTemporaryWebDataAsync, MS应用程序异步操作:MSAppAsyncOperation }
    清除临时网络数据(): MS应用程序异步操作;

    //@@{ 创建二进制对象从随机访问流:createBlobFromRandomAccessStream, 类型:type, 查询器:seeker, 二进制对象_:Blob }
    创建二进制对象从随机访问流(类型: 文字, 查询器: 任意): 二进制对象_;

    //@@{ 创建数据包:createDataPackage, 对象:object }
    创建数据包(对象: 任意): 任意;

    //@@{ 创建数据包从选择:createDataPackageFromSelection }
    创建数据包从选择(): 任意;

    //@@{ 创建文件从存储文件:createFileFromStorageFile, 存储文件:storageFile, 文件_:File }
    创建文件从存储文件(存储文件: 任意): 文件_;

    //@@{ 创建流从输入流:createStreamFromInputStream, 类型:type, 输入流:inputStream, MS流_:MSStream }
    创建流从输入流(类型: 文字, 输入流: 任意): MS流_;

    //@@{ 执行异步优先:execAsyncAtPriority, 异步回调:asynchronousCallback, MS执行在优先级函数回调_:MSExecAtPriorityFunctionCallback, 优先级:priority, 参数组:args }
    执行异步优先(异步回调: MS执行在优先级函数回调_, 优先级: 文字, ...参数组: 任意[]): 无值;

    //@@{ 执行优先级:execAtPriority, 同步回调:synchronousCallback, MS执行在优先级函数回调_:MSExecAtPriorityFunctionCallback, 优先级:priority, 参数组:args }
    执行优先级(同步回调: MS执行在优先级函数回调_, 优先级: 文字, ...参数组: 任意[]): 任意;

    //@@{ 取当前优先级:getCurrentPriority }
    取当前优先级(): 文字;

    //@@{ 取Html打印文档源异步:getHtmlPrintDocumentSourceAsync, html文档:htmlDoc, 预设_:Promise }
    取Html打印文档源异步(html文档: 任意): 预设_<任意>;

    //@@{ 取视图Id:getViewId }
    取视图Id(view: 任意): 任意;

    //@@{ 是任务计划的优先级或更高:isTaskScheduledAtPriorityOrHigher, 优先级:priority }
    是任务计划的优先级或更高(优先级: 文字): 真假;

    //@@{ 页面处理所有应用程序激活:pageHandlesAllApplicationActivations, 启用:enabled }
    页面处理所有应用程序激活(启用: 真假): 无值;

    //@@{ 禁止子下载凭据提示:suppressSubdownloadCredentialPrompts, 抑制:suppress }
    禁止子下载凭据提示(抑制: 真假): 无值;

    //@@{ 终止程序:terminateApp, 异常对象:exceptionObject }
    终止程序(异常对象: 任意): 无值;

    //@@{ __当前__:CURRENT }
    只读 __当前__: 文字;

    //@@{ __高__:HIGH }
    只读 __高__: 文字;

    //@@{ __闲置__:IDLE }
    只读 __闲置__: 文字;

    //@@{ __正常的__:NORMAL }
    只读 __正常的__: 文字;

}

//@@{ MS应用程序_:MSApp }
声明 值量 MS应用程序_: MS应用程序_;

//@@{ MS应用程序异步操作事件映射_:MSAppAsyncOperationEventMap }
接口 MS应用程序异步操作事件映射_ {

    //@@{ "完成":"complete", 事件_:Event }
    "完成": 事件_;

    //@@{ "错误":"error", 事件_:Event }
    "错误": 事件_;

}

//@@{ MS应用程序异步操作:MSAppAsyncOperation, 事件目标_:EventTarget }
接口 MS应用程序异步操作 扩展 事件目标_ {

    //@@{ 错误:error, 文档错误_:DOMError }
    只读 错误: 文档错误_;

    //@@{ 正在完成:oncomplete, MS应用程序异步操作:MSAppAsyncOperation, 事件_:Event }
    正在完成: (本体: MS应用程序异步操作, ev: 事件_) => 任意;

    //@@{ 正在错误:onerror, MS应用程序异步操作:MSAppAsyncOperation, 事件_:Event }
    正在错误: (本体: MS应用程序异步操作, ev: 事件_) => 任意;

    //@@{ 就绪状态:readyState }
    只读 就绪状态: 数字;

    //@@{ 结果:result }
    只读 结果: 任意;

    //@@{ 开始:start }
    开始(): 无值;

    //@@{ __完成__:COMPLETED }
    只读 __完成__: 数字;

    //@@{ __错误__:ERROR }
    只读 __错误__: 数字;

    //@@{ __开始__:STARTED }
    只读 __开始__: 数字;

    //@@{ 添加事件监听器:addEventListener, MS应用程序异步操作事件映射_:MSAppAsyncOperationEventMap, 类型:type, 侦听器:listener, MS应用程序异步操作:MSAppAsyncOperation, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 MS应用程序异步操作事件映射_>(类型: K, 侦听器: (本体: MS应用程序异步操作, ev: MS应用程序异步操作事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

//@@{ MS应用程序异步操作_:MSAppAsyncOperation }
声明 值量 MS应用程序异步操作_: {

    //@@{ 原型:prototype, MS应用程序异步操作:MSAppAsyncOperation }
    原型: MS应用程序异步操作;

    //@@{ MS应用程序异步操作:MSAppAsyncOperation }
    新建(): MS应用程序异步操作;

    //@@{ __完成__:COMPLETED }
    只读 __完成__: 数字;

    //@@{ __错误__:ERROR }
    只读 __错误__: 数字;

    //@@{ __开始__:STARTED }
    只读 __开始__: 数字;

};

//@@{ MS断言_:MSAssertion }
接口 MS断言_ {

    只读 id: 文字;

    //@@{ 类型:type, MS凭证类型_:MSCredentialType }
    只读 类型: MS凭证类型_;

}

声明 值量 MS断言_: {

    //@@{ 原型:prototype, MS断言_:MSAssertion }
    原型: MS断言_;

    //@@{ MS断言_:MSAssertion }
    新建(): MS断言_;

};

//@@{ MS二进制对象构建器_:MSBlobBuilder }
接口 MS二进制对象构建器_ {

    //@@{ 附加:append, 数据:data, 结局:endings }
    附加(数据: 任意, 结局?: 文字): 无值;

    //@@{ 取二进制对象:getBlob, 内容类型:contentType, 二进制对象_:Blob }
    取二进制对象(内容类型?: 文字): 二进制对象_;

}

声明 值量 MS二进制对象构建器_: {

    //@@{ 原型:prototype, MS二进制对象构建器_:MSBlobBuilder }
    原型: MS二进制对象构建器_;

    //@@{ MS二进制对象构建器_:MSBlobBuilder }
    新建(): MS二进制对象构建器_;

};

//@@{ MS凭证_:MSCredentials }
接口 MS凭证_ {

    //@@{ 取断言:getAssertion, 查询口令:challenge, 过滤器:filter, MS凭证过滤器_:MSCredentialFilter, 参数个组:params, MS签名参数_:MSSignatureParameters, 预设_:Promise, MS断言_:MSAssertion }
    取断言(查询口令: 文字, 过滤器?: MS凭证过滤器_, 参数个组?: MS签名参数_): 预设_<MS断言_>;

    //@@{ 标记凭证:makeCredential, 账户信息:accountInfo, MS账户信息_:MSAccountInfo, 参数个组:params, MS凭证参数_:MSCredentialParameters, 查询口令:challenge, 预设_:Promise, MS断言_:MSAssertion }
    标记凭证(账户信息: MS账户信息_, 参数个组: MS凭证参数_[], 查询口令?: 文字): 预设_<MS断言_>;

}

声明 值量 MS凭证_: {

    //@@{ 原型:prototype, MS凭证_:MSCredentials }
    原型: MS凭证_;

    //@@{ MS凭证_:MSCredentials }
    新建(): MS凭证_;

};

//@@{ MSFIDO凭证断言_:MSFIDOCredentialAssertion, MS断言_:MSAssertion }
接口 MSFIDO凭证断言_ 扩展 MS断言_ {

    //@@{ 算法:algorithm, 算法_:Algorithm }
    只读 算法: 文字 | 算法_;

    //@@{ 认证:attestation }
    只读 认证: 任意;

    //@@{ 公钥:publicKey }
    只读 公钥: 文字;

    //@@{ 传输提示:transportHints, MS传输类型_:MSTransportType }
    只读 传输提示: MS传输类型_[];

}

声明 值量 MSFIDO凭证断言_: {

    //@@{ 原型:prototype, MSFIDO凭证断言_:MSFIDOCredentialAssertion }
    原型: MSFIDO凭证断言_;

    //@@{ MSFIDO凭证断言_:MSFIDOCredentialAssertion }
    新建(): MSFIDO凭证断言_;

};

//@@{ MSFIDO签名_:MSFIDOSignature }
接口 MSFIDO签名_ {

    //@@{ 认证数据:authnrData }
    只读 认证数据: 文字;

    //@@{ 客户数据:clientData }
    只读 客户数据: 文字;

    //@@{ 签名:signature }
    只读 签名: 文字;

}

声明 值量 MSFIDO签名_: {

    //@@{ 原型:prototype, MSFIDO签名_:MSFIDOSignature }
    原型: MSFIDO签名_;

    //@@{ MSFIDO签名_:MSFIDOSignature }
    新建(): MSFIDO签名_;

};

//@@{ MSFIDO签名断言_:MSFIDOSignatureAssertion, MS断言_:MSAssertion }
接口 MSFIDO签名断言_ 扩展 MS断言_ {

    //@@{ 签名:signature, MSFIDO签名_:MSFIDOSignature }
    只读 签名: MSFIDO签名_;

}

声明 值量 MSFIDO签名断言_: { 

    //@@{ 原型:prototype, MSFIDO签名断言_:MSFIDOSignatureAssertion }
    原型: MSFIDO签名断言_;

    //@@{ MSFIDO签名断言_:MSFIDOSignatureAssertion }
    新建(): MSFIDO签名断言_;

};

//@@{ MS手势_:MSGesture }
接口 MS手势_ {

    //@@{ 目标:target, 元素_:Element }
    目标: 元素_;

    //@@{ 添加指针:addPointer, 指针Id:pointerId }
    添加指针(指针Id: 数字): 无值;

    //@@{ 停止:stop }
    停止(): 无值;

}

声明 值量 MS手势_: {

    //@@{ 原型:prototype, MS手势_:MSGesture }
    原型: MS手势_;

    //@@{ MS手势_:MSGesture }
    新建(): MS手势_;

};

//@@{ MS手势事件_:MSGestureEvent, UI事件_:UIEvent }
接口 MS手势事件_ 扩展 UI事件_ {

    //@@{ 客户X:clientX }
    只读 客户X: 数字;

    //@@{ 客户Y:clientY }
    只读 客户Y: 数字;

    //@@{ 扩张:expansion }
    只读 扩张: 数字;

    //@@{ 动作对象:gestureObject }
    只读 动作对象: 任意;

    //@@{ 创建事件时间:hwTimestamp }
    只读 创建事件时间: 数字;

    //@@{ 偏移X:offsetX }
    只读 偏移X: 数字;

    //@@{ 偏移Y:offsetY }
    只读 偏移Y: 数字;

    //@@{ 旋转:rotation }
    只读 旋转: 数字;

    //@@{ 缩放:scale }
    只读 缩放: 数字;

    //@@{ 屏幕X:screenX }
    只读 屏幕X: 数字;

    //@@{ 屏幕Y:screenY }
    只读 屏幕Y: 数字;

    //@@{ 转换X:translationX }
    只读 转换X: 数字;

    //@@{ 转换Y:translationY }
    只读 转换Y: 数字;

    //@@{ 速度角:velocityAngular }
    只读 速度角: 数字;

    //@@{ 速度扩张:velocityExpansion }
    只读 速度扩张: 数字;

    //@@{ 速度X:velocityX }
    只读 速度X: 数字;

    //@@{ 速度Y:velocityY }
    只读 速度Y: 数字;

    //@@{ 初始化手势事件:initGestureEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 视图参数:viewArg, 窗口_:Window, 细节参数:detailArg, 屏幕X参数:screenXArg, 屏幕Y参数:screenYArg, 客户X参数:clientXArg, 客户Y参数:clientYArg, 偏移X参数:offsetXArg, 偏移Y参数:offsetYArg, 转换X参数:translationXArg, 转换Y参数:translationYArg, 缩放参数:scaleArg, 扩张参数:expansionArg, 旋转参数:rotationArg, 速度X参数:velocityXArg, 速度Y参数:velocityYArg, 扩张速度参数:velocityExpansionArg, 速度角参数:velocityAngularArg, 创建事件时间参数:hwTimestampArg }
    初始化手势事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 视图参数: 窗口_, 细节参数: 数字, 屏幕X参数: 数字, 屏幕Y参数: 数字, 客户X参数: 数字, 客户Y参数: 数字, 偏移X参数: 数字, 偏移Y参数: 数字, 转换X参数: 数字, 转换Y参数: 数字, 缩放参数: 数字, 扩张参数: 数字, 旋转参数: 数字, 速度X参数: 数字, 速度Y参数: 数字, 扩张速度参数: 数字, 速度角参数: 数字, 创建事件时间参数: 数字): 无值;

    //@@{ __MS_手势_标志_开始__:MSGESTURE_FLAG_BEGIN }
    只读 __MS_手势_标志_开始__: 数字;

    //@@{ __MS_手势_标志_取消__:MSGESTURE_FLAG_CANCEL }
    只读 __MS_手势_标志_取消__: 数字;

    //@@{ __MS_手势_标志_结束__:MSGESTURE_FLAG_END }
    只读 __MS_手势_标志_结束__: 数字;

    //@@{ __MS_手势_标志_惯性__:MSGESTURE_FLAG_INERTIA }
    只读 __MS_手势_标志_惯性__: 数字;

    //@@{ __MS_手势_标志_没有__:MSGESTURE_FLAG_NONE }
    只读 __MS_手势_标志_没有__: 数字;

}

声明 值量 MS手势事件_: {

    //@@{ 原型:prototype, MS手势事件_:MSGestureEvent }
    原型: MS手势事件_;

    //@@{ MS手势事件_:MSGestureEvent }
    新建(): MS手势事件_;

    //@@{ __MS_手势_标志_开始__:MSGESTURE_FLAG_BEGIN }
    只读 __MS_手势_标志_开始__: 数字;

    //@@{ __MS_手势_标志_取消__:MSGESTURE_FLAG_CANCEL }
    只读 __MS_手势_标志_取消__: 数字;

    //@@{ __MS_手势_标志_结束__:MSGESTURE_FLAG_END }
    只读 __MS_手势_标志_结束__: 数字;

    //@@{ __MS_手势_标志_惯性__:MSGESTURE_FLAG_INERTIA }
    只读 __MS_手势_标志_惯性__: 数字;

    //@@{ __MS_手势_标志_没有__:MSGESTURE_FLAG_NONE }
    只读 __MS_手势_标志_没有__: 数字;

};

//@@{ MS图形信任_:MSGraphicsTrust }
接口 MS图形信任_ {

    //@@{ 收缩活跃:constrictionActive }
    只读 收缩活跃: 真假;

    //@@{ 状态:status }
    只读 状态: 文字;

}

声明 值量 MS图形信任_: {

    //@@{ 原型:prototype, MS图形信任_:MSGraphicsTrust }
    原型: MS图形信任_;

    //@@{ MS图形信任_:MSGraphicsTrust }
    新建(): MS图形信任_;

};

//@@{ MSHTML网络视图元素_:MSHTMLWebViewElement, HTML元素_:HTMLElement }
接口 MSHTML网络视图元素_ 扩展 HTML元素_ {

    //@@{ 可返回:canGoBack }
    只读 可返回: 真假;

    //@@{ 可前进:canGoForward }
    只读 可前进: 真假;

    //@@{ 包含全屏幕元素:containsFullScreenElement }
    只读 包含全屏幕元素: 真假;

    //@@{ 文档标题:documentTitle }
    只读 文档标题: 文字;

    //@@{ 高度:height }
    高度: 数字;

    //@@{ 设置:settings, MS网络视图设置_:MSWebViewSettings }
    只读 设置: MS网络视图设置_;

    //@@{ 源:src }
    源: 文字;

    //@@{ 宽度:width }
    宽度: 数字;

    //@@{ 添加网络允许对象:addWebAllowedObject, 名字:name, 应用程序对象:applicationObject }
    添加网络允许对象(名字: 文字, 应用程序对象: 任意): 无值;

    //@@{ 建立本地流Uri:buildLocalStreamUri, 内容标识符:contentIdentifier, 相对路径:relativePath }
    建立本地流Uri(内容标识符: 文字, 相对路径: 文字): 文字;

    //@@{ 捕获预览到二进制对象异步:capturePreviewToBlobAsync, MS网络视图异步操作_:MSWebViewAsyncOperation }
    捕获预览到二进制对象异步(): MS网络视图异步操作_;

    //@@{ 捕获选择内容到数据包异步:captureSelectedContentToDataPackageAsync, MS网络视图异步操作_:MSWebViewAsyncOperation }
    捕获选择内容到数据包异步(): MS网络视图异步操作_;

    //@@{ 取延迟许可请求按Id:getDeferredPermissionRequestById, 延期许可请求_:DeferredPermissionRequest }
    取延迟许可请求按Id(id: 数字): 延期许可请求_;

    //@@{ 取延迟许可请求:getDeferredPermissionRequests, 延期许可请求_:DeferredPermissionRequest }
    取延迟许可请求(): 延期许可请求_[];

    //@@{ 返回去:goBack }
    返回去(): 无值;

    //@@{ 向前去:goForward }
    向前去(): 无值;

    //@@{ 异步调用脚本:invokeScriptAsync, 脚本名称:scriptName, 参数组:args, MS网络视图异步操作_:MSWebViewAsyncOperation }
    异步调用脚本(脚本名称: 文字, ...参数组: 任意[]): MS网络视图异步操作_;

    //@@{ 导航:navigate }
    导航(uri: 文字): 无值;

    //@@{ 导航焦点:navigateFocus, 导航原因:navigationReason, 导航原因_:NavigationReason, 起点:origin, 焦点导航起源_:FocusNavigationOrigin }
    导航焦点(导航原因: 导航原因_, 起点: 焦点导航起源_): 无值;

    //@@{ 导航到本地流Uri:navigateToLocalStreamUri, 源:source, 流解析器:streamResolver }
    导航到本地流Uri(源: 文字, 流解析器: 任意): 无值;

    //@@{ 导航到字符串:navigateToString, 内容:contents }
    导航到字符串(内容: 文字): 无值;

    //@@{ 使用Http请求消息导航:navigateWithHttpRequestMessage, 请求消息:requestMessage }
    使用Http请求消息导航(请求消息: 任意): 无值;

    //@@{ 刷新:refresh }
    刷新(): 无值;

    //@@{ 停止:stop }
    停止(): 无值;

    //@@{ 添加事件监听器:addEventListener, HTML元素事件映射_:HTMLElementEventMap, 类型:type, 侦听器:listener, MSHTML网络视图元素_:MSHTMLWebViewElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 HTML元素事件映射_>(类型: K, 侦听器: (本体: MSHTML网络视图元素_, ev: HTML元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 MSHTML网络视图元素_: {

    //@@{ 原型:prototype, MSHTML网络视图元素_:MSHTMLWebViewElement }
    原型: MSHTML网络视图元素_;

    //@@{ MSHTML网络视图元素_:MSHTMLWebViewElement }
    新建(): MSHTML网络视图元素_;

};

//@@{ MS输入法上下文事件映射_:MSInputMethodContextEventMap }
接口 MS输入法上下文事件映射_ {

    //@@{ "MS候选窗口隐藏":"MSCandidateWindowHide", 事件_:Event }
    "MS候选窗口隐藏": 事件_;

    //@@{ "MS候选窗口显示":"MSCandidateWindowShow", 事件_:Event }
    "MS候选窗口显示": 事件_;

    //@@{ "MS候选窗口更新":"MSCandidateWindowUpdate", 事件_:Event }
    "MS候选窗口更新": 事件_;

}

//@@{ MS输入法上下文_:MSInputMethodContext, 事件目标_:EventTarget }
接口 MS输入法上下文_ 扩展 事件目标_ {

    //@@{ MS输入法上下文_:MSInputMethodContext }
    只读 MS输入法上下文_: 数字;

    //@@{ 布局开始偏移:compositionStartOffset }
    只读 布局开始偏移: 数字;

    //@@{ 正在候选窗口隐藏:oncandidatewindowhide, MS输入法上下文_:MSInputMethodContext, 事件_:Event }
    正在候选窗口隐藏: (本体: MS输入法上下文_, ev: 事件_) => 任意;

    //@@{ 正在候选窗口显示:oncandidatewindowshow, MS输入法上下文_:MSInputMethodContext, 事件_:Event }
    正在候选窗口显示: (本体: MS输入法上下文_, ev: 事件_) => 任意;

    //@@{ 正在候选窗口更新:oncandidatewindowupdate, MS输入法上下文_:MSInputMethodContext, 事件_:Event }
    正在候选窗口更新: (本体: MS输入法上下文_, ev: 事件_) => 任意;

    //@@{ 目标:target, HTML元素_:HTMLElement }
    只读 目标: HTML元素_;

    //@@{ 取候选窗口客户矩形:getCandidateWindowClientRect, 客户矩形_:ClientRect }
    取候选窗口客户矩形(): 客户矩形_;

    //@@{ 取可供选择的布局:getCompositionAlternatives }
    取可供选择的布局(): 文字[];

    //@@{ 有布局:hasComposition }
    有布局(): 真假;

    //@@{ 是可见候选窗口:isCandidateWindowVisible }
    是可见候选窗口(): 真假;

    //@@{ 添加事件监听器:addEventListener, MS输入法上下文事件映射_:MSInputMethodContextEventMap, 类型:type, 侦听器:listener, MS输入法上下文_:MSInputMethodContext, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 MS输入法上下文事件映射_>(类型: K, 侦听器: (本体: MS输入法上下文_, ev: MS输入法上下文事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 MS输入法上下文_: {

    //@@{ 原型:prototype, MS输入法上下文_:MSInputMethodContext }
    原型: MS输入法上下文_;

    //@@{ MS输入法上下文_:MSInputMethodContext }
    新建(): MS输入法上下文_;

};

//@@{ MS操纵杆事件_:MSManipulationEvent, UI事件_:UIEvent }
接口 MS操纵杆事件_ 扩展 UI事件_ {

    //@@{ 当前状态:currentState }
    只读 当前状态: 数字;

    //@@{ 惯性目的地X:inertiaDestinationX }
    只读 惯性目的地X: 数字;

    //@@{ 惯性目的地Y:inertiaDestinationY }
    只读 惯性目的地Y: 数字;

    //@@{ 最后状态:lastState }
    只读 最后状态: 数字;

    //@@{ 初始化MS操纵杆事件:initMSManipulationEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 视图参数:viewArg, 窗口_:Window, 细节参数:detailArg, 最后状态:lastState, 当前状态:currentState }
    初始化MS操纵杆事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 视图参数: 窗口_, 细节参数: 数字, 最后状态: 数字, 当前状态: 数字): 无值;

    //@@{ __MS_操纵_状态_活跃的__:MS_MANIPULATION_STATE_ACTIVE }
    只读 __MS_操纵_状态_活跃的__: 数字;

    //@@{ __MS_操纵_状态_取消了__:MS_MANIPULATION_STATE_CANCELLED }
    只读 __MS_操纵_状态_取消了__: 数字;

    //@@{ __MS_操纵_状态_承诺__:MS_MANIPULATION_STATE_COMMITTED }
    只读 __MS_操纵_状态_承诺__: 数字;

    //@@{ __MS_操纵_状态_拖动__:MS_MANIPULATION_STATE_DRAGGING }
    只读 __MS_操纵_状态_拖动__: 数字;

    //@@{ __MS_操纵_状态_惯性__:MS_MANIPULATION_STATE_INERTIA }
    只读 __MS_操纵_状态_惯性__: 数字;

    //@@{ __MS_操纵_状态_预选__:MS_MANIPULATION_STATE_PRESELECT }
    只读 __MS_操纵_状态_预选__: 数字;

    //@@{ __MS_操纵_状态_选择__:MS_MANIPULATION_STATE_SELECTING }
    只读 __MS_操纵_状态_选择__: 数字;

    //@@{ __MS_操纵_状态_停止__:MS_MANIPULATION_STATE_STOPPED }
    只读 __MS_操纵_状态_停止__: 数字;

}

声明 值量 MS操纵杆事件_: {

    //@@{ 原型:prototype, MS操纵杆事件_:MSManipulationEvent }
    原型: MS操纵杆事件_;

    //@@{ MS操纵杆事件_:MSManipulationEvent }
    新建(): MS操纵杆事件_;

    //@@{ __MS_操纵_状态_活跃的__:MS_MANIPULATION_STATE_ACTIVE }
    只读 __MS_操纵_状态_活跃的__: 数字;

    //@@{ __MS_操纵_状态_取消了__:MS_MANIPULATION_STATE_CANCELLED }
    只读 __MS_操纵_状态_取消了__: 数字;

    //@@{ __MS_操纵_状态_承诺__:MS_MANIPULATION_STATE_COMMITTED }
    只读 __MS_操纵_状态_承诺__: 数字;

    //@@{ __MS_操纵_状态_拖动__:MS_MANIPULATION_STATE_DRAGGING }
    只读 __MS_操纵_状态_拖动__: 数字;

    //@@{ __MS_操纵_状态_惯性__:MS_MANIPULATION_STATE_INERTIA }
    只读 __MS_操纵_状态_惯性__: 数字;

    //@@{ __MS_操纵_状态_预选__:MS_MANIPULATION_STATE_PRESELECT }
    只读 __MS_操纵_状态_预选__: 数字;

    //@@{ __MS_操纵_状态_选择__:MS_MANIPULATION_STATE_SELECTING }
    只读 __MS_操纵_状态_选择__: 数字;

    //@@{ __MS_操纵_状态_停止__:MS_MANIPULATION_STATE_STOPPED }
    只读 __MS_操纵_状态_停止__: 数字;

};

//@@{ MS媒体键错误_:MSMediaKeyError }
接口 MS媒体键错误_ {

    //@@{ 代码:code }
    只读 代码: 数字;

    //@@{ 系统代码:systemCode }
    只读 系统代码: 数字;

    //@@{ __MS_媒体_键错误_客户__:MS_MEDIA_KEYERR_CLIENT }
    只读 __MS_媒体_键错误_客户__: 数字;

    //@@{ __MS_媒体_键错误_域__:MS_MEDIA_KEYERR_DOMAIN }
    只读 __MS_媒体_键错误_域__: 数字;

    //@@{ __MS_媒体_键错误_硬件改变__:MS_MEDIA_KEYERR_HARDWARECHANGE }
    只读 __MS_媒体_键错误_硬件改变__: 数字;

    //@@{ __MS失去_媒体_键错误_输出__:MS_MEDIA_KEYERR_OUTPUT }
    只读 __MS失去_媒体_键错误_输出__: 数字;

    //@@{ __MS_媒体_键错误_服务__:MS_MEDIA_KEYERR_SERVICE }
    只读 __MS_媒体_键错误_服务__: 数字;

    //@@{ __MS_媒体_键错误_未知__:MS_MEDIA_KEYERR_UNKNOWN }
    只读 __MS_媒体_键错误_未知__: 数字;

}

声明 值量 MS媒体键错误_: {

    //@@{ 原型:prototype, MS媒体键错误_:MSMediaKeyError }
    原型: MS媒体键错误_;

    //@@{ MS媒体键错误_:MSMediaKeyError }
    新建(): MS媒体键错误_;

    //@@{ __MS_媒体_键错误_客户__:MS_MEDIA_KEYERR_CLIENT }
    只读 __MS_媒体_键错误_客户__: 数字;

    //@@{ __MS_媒体_键错误_域__:MS_MEDIA_KEYERR_DOMAIN }
    只读 __MS_媒体_键错误_域__: 数字;

    //@@{ __MS_媒体_键错误_硬件改变__:MS_MEDIA_KEYERR_HARDWARECHANGE }
    只读 __MS_媒体_键错误_硬件改变__: 数字;

    //@@{ __MS_媒体_键错误_输出__:MS_MEDIA_KEYERR_OUTPUT }
    只读 __MS_媒体_键错误_输出__: 数字;

    //@@{ __MS_媒体_键错误_服务__:MS_MEDIA_KEYERR_SERVICE }
    只读 __MS_媒体_键错误_服务__: 数字;

    //@@{ __MS_媒体_键错误_未知__:MS_MEDIA_KEYERR_UNKNOWN }
    只读 __MS_媒体_键错误_未知__: 数字;

};

//@@{ MS媒体键消息事件_:MSMediaKeyMessageEvent, 事件_:Event }
接口 MS媒体键消息事件_ 扩展 事件_ {

    //@@{ 目标URL:destinationURL }
    只读 目标URL: 文字 | 空值;

    //@@{ 消息:message, 正整数数组8_:Uint8Array }
    只读 消息: 正整数数组8_;

}

声明 值量 MS媒体键消息事件_: {

    //@@{ 原型:prototype, MS媒体键消息事件_:MSMediaKeyMessageEvent }
    原型: MS媒体键消息事件_;

    //@@{ MS媒体键消息事件_:MSMediaKeyMessageEvent }
    新建(): MS媒体键消息事件_;

};

//@@{ MS媒体键需要事件_:MSMediaKeyNeededEvent, 事件_:Event }
接口 MS媒体键需要事件_ 扩展 事件_ {

    //@@{ 初始化数据:initData, 正整数数组8_:Uint8Array }
    只读 初始化数据: 正整数数组8_ | 空值;

}

声明 值量 MS媒体键需要事件_: {

    //@@{ 原型:prototype, MS媒体键需要事件_:MSMediaKeyNeededEvent }
    原型: MS媒体键需要事件_;

    //@@{ MS媒体键需要事件_:MSMediaKeyNeededEvent }
    新建(): MS媒体键需要事件_;

};

//@@{ MS媒体键组_:MSMediaKeys }
接口 MS媒体键组_ {

    //@@{ 键系统:keySystem }
    只读 键系统: 文字;

    //@@{ 创建会话:createSession, 类型:type, 初始化数据:initData, 正整数数组8_:Uint8Array, cdm数据:cdmData, MS媒体键会话_:MSMediaKeySession }
    创建会话(类型: 文字, 初始化数据: 正整数数组8_, cdm数据?: 正整数数组8_): MS媒体键会话_;

}

声明 值量 MS媒体键组_: {

    //@@{ 原型:prototype, MS媒体键组_:MSMediaKeys }
    原型: MS媒体键组_;

    //@@{ 键系统:keySystem, MS媒体键组_:MSMediaKeys }
    新建(键系统: 文字): MS媒体键组_;

    //@@{ 是支持类型:isTypeSupported, 键系统:keySystem, 类型:type }
    是支持类型(键系统: 文字, 类型?: 文字): 真假;

    //@@{ 是支持类型与特性:isTypeSupportedWithFeatures, 键系统:keySystem, 类型:type }
    是支持类型与特性(键系统: 文字, 类型?: 文字): 文字;

};

//@@{ MS媒体键会话_:MSMediaKeySession, 事件目标_:EventTarget }
接口 MS媒体键会话_ 扩展 事件目标_ {

    //@@{ 错误:error, MS媒体键错误_:MSMediaKeyError }
    只读 错误: MS媒体键错误_ | 空值;

    //@@{ 键系统:keySystem }
    只读 键系统: 文字;

    //@@{ 会话Id:sessionId }
    只读 会话Id: 文字;

    //@@{ 关闭:close }
    关闭(): 无值;

    //@@{ 更新:update, 键:key, 正整数数组8_:Uint8Array }
    更新(键: 正整数数组8_): 无值;

}

声明 值量 MS媒体键会话_: {

    //@@{ 原型:prototype, MS媒体键会话_:MSMediaKeySession }
    原型: MS媒体键会话_;

    //@@{ MS媒体键会话_:MSMediaKeySession }
    新建(): MS媒体键会话_;

};

//@@{ MS指针事件_:MSPointerEvent, 鼠标事件_:MouseEvent }
接口 MS指针事件_ 扩展 鼠标事件_ {

    //@@{ 当前点:currentPoint }
    只读 当前点: 任意;

    //@@{ 高度:height }
    只读 高度: 数字;

    //@@{ 创建事件时间:hwTimestamp }
    只读 创建事件时间: 数字;

    //@@{ 中间点:intermediatePoints }
    只读 中间点: 任意;

    //@@{ 是主要的:isPrimary }
    只读 是主要的: 真假;

    //@@{ 指针Id:pointerId }
    只读 指针Id: 数字;

    //@@{ 指针类型:pointerType }
    只读 指针类型: 任意;

    //@@{ 压力:pressure }
    只读 压力: 数字;

    //@@{ 旋转:rotation }
    只读 旋转: 数字;

    //@@{ 倾斜X:tiltX }
    只读 倾斜X: 数字;

    //@@{ 倾斜Y:tiltY }
    只读 倾斜Y: 数字;

    //@@{ 宽度:width }
    只读 宽度: 数字;

    //@@{ 取当前点:getCurrentPoint, 元素:element, 元素_:Element }
    取当前点(元素: 元素_): 无值;

    //@@{ 取中间点:getIntermediatePoints, 元素:element, 元素_:Element }
    取中间点(元素: 元素_): 无值;

    //@@{ 初始化指针事件:initPointerEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 视图参数:viewArg, 窗口_:Window, 细节参数:detailArg, 屏幕X参数:screenXArg, 屏幕Y参数:screenYArg, 客户X参数:clientXArg, 客户Y参数:clientYArg, ctrl键参数:ctrlKeyArg, alt键参数:altKeyArg, shift键参数:shiftKeyArg, meta键参数:metaKeyArg, 按钮参数:buttonArg, 相关目标参数:relatedTargetArg, 事件目标_:EventTarget, 偏移X参数:offsetXArg, 偏移Y参数:offsetYArg, 宽度参数:widthArg, 高度参数:heightArg, 压力:pressure, 旋转:rotation, 倾斜X:tiltX, 倾斜Y:tiltY, 指针Id参数:pointerIdArg, 指针类型:pointerType, 创建事件时间参数:hwTimestampArg, 是主要的:isPrimary }
    初始化指针事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 视图参数: 窗口_, 细节参数: 数字, 屏幕X参数: 数字, 屏幕Y参数: 数字, 客户X参数: 数字, 客户Y参数: 数字, ctrl键参数: 真假, alt键参数: 真假, shift键参数: 真假, meta键参数: 真假, 按钮参数: 数字, 相关目标参数: 事件目标_, 偏移X参数: 数字, 偏移Y参数: 数字, 宽度参数: 数字, 高度参数: 数字, 压力: 数字, 旋转: 数字, 倾斜X: 数字, 倾斜Y: 数字, 指针Id参数: 数字, 指针类型: 任意, 创建事件时间参数: 数字, 是主要的: 真假): 无值;

}

声明 值量 MS指针事件_: {

    //@@{ 原型:prototype, MS指针事件_:MSPointerEvent }
    原型: MS指针事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 指针事件初始化_:PointerEventInit, MS指针事件_:MSPointerEvent }
    新建(类型参数: 文字, 事件初始化词典?: 指针事件初始化_): MS指针事件_;

};

//@@{ MS范围集合_:MSRangeCollection }
接口 MS范围集合_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 项目:item, 索引:index, 范围_:Range }
    项目(索引: 数字): 范围_;

    //@@{ 索引:index, 范围_:Range }
    [索引: 数字]: 范围_;

}

声明 值量 MS范围集合_: {

    //@@{ 原型:prototype, MS范围集合_:MSRangeCollection }
    原型: MS范围集合_;

    //@@{ MS范围集合_:MSRangeCollection }
    新建(): MS范围集合_;

};

//@@{ MS网站模式事件_:MSSiteModeEvent, 事件_:Event }
接口 MS网站模式事件_ 扩展 事件_ {

    //@@{ 动作URL:actionURL }
    只读 动作URL: 文字;

    //@@{ 按钮Id:buttonID }
    只读 按钮Id: 数字;

}

声明 值量 MS网站模式事件_: {

    //@@{ 原型:prototype, MS网站模式事件_:MSSiteModeEvent }
    原型: MS网站模式事件_;

    //@@{ MS网站模式事件_:MSSiteModeEvent }
    新建(): MS网站模式事件_;

};

//@@{ MS流_:MSStream }
接口 MS流_ {

    //@@{ 类型:type }
    只读 类型: 文字;

    //@@{ ms关闭:msClose }
    ms关闭(): 无值;

    //@@{ ms分离流:msDetachStream }
    ms分离流(): 任意;

}

声明 值量 MS流_: {

    //@@{ 原型:prototype, MS流_:MSStream }
    原型: MS流_;

    //@@{ MS流_:MSStream }
    新建(): MS流_;

};

//@@{ MS流读者_:MSStreamReader, 事件目标_:EventTarget, MS基读者_:MSBaseReader }
接口 MS流读者_ 扩展 事件目标_, MS基读者_ {

    //@@{ 错误:error, 文档错误_:DOMError }
    只读 错误: 文档错误_;

    //@@{ 读转为数组缓冲:readAsArrayBuffer, 流:stream, MS流_:MSStream, 大小:size }
    读转为数组缓冲(流: MS流_, 大小?: 数字): 无值;

    //@@{ 读转为二进制字符串:readAsBinaryString, 流:stream, MS流_:MSStream, 大小:size }
    读转为二进制字符串(流: MS流_, 大小?: 数字): 无值;

    //@@{ 读转为二进制对象:readAsBlob, 流:stream, MS流_:MSStream, 大小:size }
    读转为二进制对象(流: MS流_, 大小?: 数字): 无值;

    //@@{ 读转为数据URL:readAsDataURL, 流:stream, MS流_:MSStream, 大小:size }
    读转为数据URL(流: MS流_, 大小?: 数字): 无值;

    //@@{ 读转为文本:readAsText, 流:stream, MS流_:MSStream, 编码:encoding, 大小:size }
    读转为文本(流: MS流_, 编码?: 文字, 大小?: 数字): 无值;

    //@@{ 添加事件监听器:addEventListener, MS基读者事件映射_:MSBaseReaderEventMap, 类型:type, 侦听器:listener, MS流读者_:MSStreamReader, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 MS基读者事件映射_>(类型: K, 侦听器: (本体: MS流读者_, ev: MS基读者事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 MS流读者_: {

    //@@{ 原型:prototype, MS流读者_:MSStreamReader }
    原型: MS流读者_;

    //@@{ MS流读者_:MSStreamReader }
    新建(): MS流读者_;

};

//@@{ MS网络视图异步操作事件映射_:MSWebViewAsyncOperationEventMap }
接口 MS网络视图异步操作事件映射_ {

    //@@{ "完成":"complete", 事件_:Event }
    "完成": 事件_;

    //@@{ "错误":"error", 事件_:Event }
    "错误": 事件_;

}

//@@{ MS网络视图异步操作_:MSWebViewAsyncOperation, 事件目标_:EventTarget }
接口 MS网络视图异步操作_ 扩展 事件目标_ {

    //@@{ 错误:error, 文档错误_:DOMError }
    只读 错误: 文档错误_;

    //@@{ 正在完成:oncomplete, MS网络视图异步操作_:MSWebViewAsyncOperation, 事件_:Event }
    正在完成: (本体: MS网络视图异步操作_, ev: 事件_) => 任意;

    //@@{ 正在错误:onerror, MS网络视图异步操作_:MSWebViewAsyncOperation, 事件_:Event }
    正在错误: (本体: MS网络视图异步操作_, ev: 事件_) => 任意;

    //@@{ 就绪状态:readyState }
    只读 就绪状态: 数字;

    //@@{ 结果:result }
    只读 结果: 任意;

    //@@{ 目标:target, MSHTML网络视图元素_:MSHTMLWebViewElement }
    只读 目标: MSHTML网络视图元素_;

    //@@{ 类型:type }
    只读 类型: 数字;

    //@@{ 开始:start }
    开始(): 无值;

    //@@{ __完成__:COMPLETED }
    只读 __完成__: 数字;

    //@@{ __错误__:ERROR }
    只读 __错误__: 数字;

    //@@{ __开始__:STARTED }
    只读 __开始__: 数字;

    //@@{ __类型_捕获_预览_到_随机_访问_流__:TYPE_CAPTURE_PREVIEW_TO_RANDOM_ACCESS_STREAM }
    只读 __类型_捕获_预览_到_随机_访问_流__: 数字;

    //@@{ __类型_从_选择_创建_数据_包__:TYPE_CREATE_DATA_PACKAGE_FROM_SELECTION }
    只读 __类型_从_选择_创建_数据_包__: 数字;

    //@@{ __类型_调用_脚本__:TYPE_INVOKE_SCRIPT }
    只读 __类型_调用_脚本__: 数字;

    //@@{ 添加事件监听器:addEventListener, MS网络视图异步操作事件映射_:MSWebViewAsyncOperationEventMap, 类型:type, 侦听器:listener, MS网络视图异步操作_:MSWebViewAsyncOperation, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 MS网络视图异步操作事件映射_>(类型: K, 侦听器: (本体: MS网络视图异步操作_, ev: MS网络视图异步操作事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 MS网络视图异步操作_: {

    //@@{ 原型:prototype, MS网络视图异步操作_:MSWebViewAsyncOperation }
    原型: MS网络视图异步操作_;

    //@@{ MS网络视图异步操作_:MSWebViewAsyncOperation }
    新建(): MS网络视图异步操作_;

    //@@{ __完成__:COMPLETED }
    只读 __完成__: 数字;

    //@@{ __错误__:ERROR }
    只读 __错误__: 数字;

    //@@{ __开始__:STARTED }
    只读 __开始__: 数字;

    //@@{ __类型_捕获_预览_到_随机_访问_流__:TYPE_CAPTURE_PREVIEW_TO_RANDOM_ACCESS_STREAM }
    只读 __类型_捕获_预览_到_随机_访问_流__: 数字;

    //@@{ __类型_从_选择_创建_数据_包__:TYPE_CREATE_DATA_PACKAGE_FROM_SELECTION }
    只读 __类型_从_选择_创建_数据_包__: 数字;

    //@@{ __类型_调用_脚本__:TYPE_INVOKE_SCRIPT }
    只读 __类型_调用_脚本__: 数字;

};

//@@{ MS网络视图设置_:MSWebViewSettings }
接口 MS网络视图设置_ {

    //@@{ 是索引数据库启用:isIndexedDBEnabled }
    是索引数据库启用: 真假;

    //@@{ 是JS脚本启用:isJavaScriptEnabled }
    是JS脚本启用: 真假;

}

声明 值量 MS网络视图设置_: {

    //@@{ 原型:prototype, MS网络视图设置_:MSWebViewSettings }
    原型: MS网络视图设置_;

    //@@{ MS网络视图设置_:MSWebViewSettings }
    新建(): MS网络视图设置_;

};

//@@{ 突变事件_:MutationEvent, 事件_:Event }
接口 突变事件_ 扩展 事件_ {

    //@@{ 特性改变:attrChange }
    只读 特性改变: 数字;

    //@@{ 特性名字:attrName }
    只读 特性名字: 文字;

    //@@{ 新值:newValue }
    只读 新值: 文字;

    //@@{ 预处理值:prevValue }
    只读 预处理值: 文字;

    //@@{ 相关节点:relatedNode, 节点_:Node }
    只读 相关节点: 节点_;

    //@@{ 初始化突变事件:initMutationEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 相关节点参数:relatedNodeArg, 节点_:Node, 预处理值参数:prevValueArg, 新值参数:newValueArg, 特性名称参数:attrNameArg, 特性改变参数:attrChangeArg }
    初始化突变事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 相关节点参数: 节点_, 预处理值参数: 文字, 新值参数: 文字, 特性名称参数: 文字, 特性改变参数: 数字): 无值;

    //@@{ __增加__:ADDITION }
    只读 __增加__: 数字;

    //@@{ __修改__:MODIFICATION }
    只读 __修改__: 数字;

    //@@{ __删除__:REMOVAL }
    只读 __删除__: 数字;

}

声明 值量 突变事件_: {

    //@@{ 原型:prototype, 突变事件_:MutationEvent }
    原型: 突变事件_;

    //@@{ 突变事件_:MutationEvent }
    新建(): 突变事件_;

    //@@{ __增加__:ADDITION }
    只读 __增加__: 数字;

    //@@{ __修改__:MODIFICATION }
    只读 __修改__: 数字;

    //@@{ __删除__:REMOVAL }
    只读 __删除__: 数字;

};

//@@{ 突变观察者_:MutationObserver }
接口 突变观察者_ {

    //@@{ 断开连接:disconnect }
    断开连接(): 无值;

    //@@{ 观察:observe, 目标:target, 节点_:Node, 选项:options, 突变观察者初始化_:MutationObserverInit }
    观察(目标: 节点_, 选项: 突变观察者初始化_): 无值;

    //@@{ 取记录:takeRecords, 突变记录_:MutationRecord }
    取记录(): 突变记录_[];

}

声明 值量 突变观察者_: {

    //@@{ 原型:prototype, 突变观察者_:MutationObserver }
    原型: 突变观察者_;

    //@@{ 回调:callback, 突变回调_:MutationCallback, 突变观察者_:MutationObserver }
    新建(回调: 突变回调_): 突变观察者_;

};

//@@{ 突变记录_:MutationRecord }
接口 突变记录_ {

    //@@{ 添加节点:addedNodes, 节点列表_:NodeList }
    只读 添加节点: 节点列表_;

    //@@{ 特性名称:attributeName }
    只读 特性名称: 文字 | 空值;

    //@@{ 特性名称空间:attributeNamespace }
    只读 特性名称空间: 文字 | 空值;

    //@@{ 下个兄弟:nextSibling, 节点_:Node }
    只读 下个兄弟: 节点_ | 空值;

    //@@{ 旧值:oldValue }
    只读 旧值: 文字 | 空值;

    //@@{ 之前兄弟:previousSibling, 节点_:Node }
    只读 之前兄弟: 节点_ | 空值;

    //@@{ 删除节点:removedNodes, 节点列表_:NodeList }
    只读 删除节点: 节点列表_;

    //@@{ 目标:target, 节点_:Node }
    只读 目标: 节点_;

    //@@{ 类型:type }
    只读 类型: 文字;

}

声明 值量 突变记录_: {

    //@@{ 原型:prototype, 突变记录_:MutationRecord }
    原型: 突变记录_;

    //@@{ 突变记录_:MutationRecord }
    新建(): 突变记录_;

};

//@@{ 命名节点映射_:NamedNodeMap }
接口 命名节点映射_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 取命名项:getNamedItem, 名字:name, 特性_:Attr }
    取命名项(名字: 文字): 特性_;

    //@@{ 取命名项NS:getNamedItemNS, 名称空间URI:namespaceURI, 本地名称:localName, 特性_:Attr }
    取命名项NS(名称空间URI: 文字 | 空值, 本地名称: 文字 | 空值): 特性_;

    //@@{ 项目:item, 索引:index, 特性_:Attr }
    项目(索引: 数字): 特性_;

    //@@{ 删除命名项目:removeNamedItem, 名字:name, 特性_:Attr }
    删除命名项目(名字: 文字): 特性_;

    //@@{ 删除命名项NS:removeNamedItemNS, 名称空间URI:namespaceURI, 本地名称:localName, 特性_:Attr }
    删除命名项NS(名称空间URI: 文字 | 空值, 本地名称: 文字 | 空值): 特性_;

    //@@{ 置命名项:setNamedItem, 参数:arg, 特性_:Attr }
    置命名项(参数: 特性_): 特性_;

    //@@{ 置命名项NS:setNamedItemNS, 参数:arg, 特性_:Attr }
    置命名项NS(参数: 特性_): 特性_;

    //@@{ 索引:index, 特性_:Attr }
    [索引: 数字]: 特性_;

}

声明 值量 命名节点映射_: {

    //@@{ 原型:prototype, 命名节点映射_:NamedNodeMap }
    原型: 命名节点映射_;

    //@@{ 命名节点映射_:NamedNodeMap }
    新建(): 命名节点映射_;

};

//@@{ 导航完成事件_:NavigationCompletedEvent, 导航事件_:NavigationEvent }
接口 导航完成事件_ 扩展 导航事件_ {

    //@@{ 是成功:isSuccess }
    只读 是成功: 真假;

    //@@{ 网络错误状态:webErrorStatus }
    只读 网络错误状态: 数字;

}

声明 值量 导航完成事件_: {

    //@@{ 原型:prototype, 导航完成事件_:NavigationCompletedEvent }
    原型: 导航完成事件_;

    //@@{ 导航完成事件_:NavigationCompletedEvent }
    新建(): 导航完成事件_;

};

//@@{ 导航事件_:NavigationEvent, 事件_:Event }
接口 导航事件_ 扩展 事件_ {

    只读 uri: 文字;

}

声明 值量 导航事件_: {

    //@@{ 原型:prototype, 导航事件_:NavigationEvent }
    原型: 导航事件_;

    //@@{ 导航事件_:NavigationEvent }
    新建(): 导航事件_;

};

//@@{ 导航事件与介绍人_:NavigationEventWithReferrer, 导航事件_:NavigationEvent }
接口 导航事件与介绍人_ 扩展 导航事件_ {

    //@@{ 介绍人:referer }
    只读 介绍人: 文字;

}

声明 值量 导航事件与介绍人_: {

    //@@{ 原型:prototype, 导航事件与介绍人_:NavigationEventWithReferrer }
    原型: 导航事件与介绍人_;

    //@@{ 导航事件与介绍人_:NavigationEventWithReferrer }
    新建(): 导航事件与介绍人_;

};

//@@{ 导航器_:Navigator, 实例_:Object, 导航器ID_:NavigatorID, 导航器在线_:NavigatorOnLine, 导航器内容工具_:NavigatorContentUtils, 导航器存储工具_:NavigatorStorageUtils, 导航定位_:NavigatorGeolocation, MS导航器无轨道_:MSNavigatorDoNotTrack, MS文件保存_:MSFileSaver, 导航信标_:NavigatorBeacon, 导航器并行硬件_:NavigatorConcurrentHardware, 导航用户媒体_:NavigatorUserMedia }
接口 导航器_ 扩展 实例_, 导航器ID_, 导航器在线_, 导航器内容工具_, 导航器存储工具_, 导航定位_, MS导航器无轨道_, MS文件保存_, 导航信标_, 导航器并行硬件_, 导航用户媒体_ {

    //@@{ 身份验证:authentication, 网络身份验证_:WebAuthentication }
    只读 身份验证: 网络身份验证_;

    //@@{ 浏览器缓存启用:cookieEnabled }
    只读 浏览器缓存启用: 真假;

    //@@{ 手柄输入模拟:gamepadInputEmulation, 手柄输入仿真类型_:GamepadInputEmulationType }
    手柄输入模拟: 手柄输入仿真类型_;

    //@@{ 语言:language }
    只读 语言: 文字;

    //@@{ 最大触摸点:maxTouchPoints }
    只读 最大触摸点: 数字;

    //@@{ mime类型:mimeTypes, Mime类型数组_:MimeTypeArray }
    只读 mime类型: Mime类型数组_;

    //@@{ ms操纵杆视图启用:msManipulationViewsEnabled }
    只读 ms操纵杆视图启用: 真假;

    //@@{ ms最大触摸点:msMaxTouchPoints }
    只读 ms最大触摸点: 数字;

    //@@{ ms指针启用:msPointerEnabled }
    只读 ms指针启用: 真假;

    //@@{ 插件组:plugins, 插件数组_:PluginArray }
    只读 插件组: 插件数组_;

    //@@{ 指针启用:pointerEnabled }
    只读 指针启用: 真假;

    //@@{ 服务工人:serviceWorker, 服务工人容器_:ServiceWorkerContainer }
    只读 服务工人: 服务工人容器_;

    //@@{ 网络驱动:webdriver }
    只读 网络驱动: 真假;

    //@@{ 不跟踪:doNotTrack }
    只读 不跟踪: 文字 | 空值;

    //@@{ 硬件并发:hardwareConcurrency }
    只读 硬件并发: 数字;

    //@@{ 语言组:languages }
    只读 语言组: 文字[];

    //@@{ 取游戏手柄:getGamepads, 手柄_:Gamepad }
    取游戏手柄(): 手柄_[];

    //@@{ java启用:javaEnabled }
    java启用(): 真假;

    //@@{ ms发射URI:msLaunchUri, 成功回调:successCallback, MS发射Uri回调:MSLaunchUriCallback, 没有处理程序回调:noHandlerCallback }
    ms发射URI(uri: 文字, 成功回调?: MS发射Uri回调, 没有处理程序回调?: MS发射Uri回调): 无值;

    //@@{ 请求媒体键系统访问:requestMediaKeySystemAccess, 键系统:keySystem, 支持配置:supportedConfigurations, 媒体键系统配置_:MediaKeySystemConfiguration, 预设_:Promise, 媒体键系统访问_:MediaKeySystemAccess }
    请求媒体键系统访问(键系统: 文字, 支持配置: 媒体键系统配置_[]): 预设_<媒体键系统访问_>;

    //@@{ 振动:vibrate, 模式:pattern }
    振动(模式: 数字 | 数字[]): 真假;

}

声明 值量 导航器_: {

    //@@{ 原型:prototype, 导航器_:Navigator }
    原型: 导航器_;

    //@@{ 导航器_:Navigator }
    新建(): 导航器_;

};

//@@{ 节点_:Node, 事件目标_:EventTarget }
接口 节点_ 扩展 事件目标_ {

    //@@{ 特性集:attributes, 命名节点映射_:NamedNodeMap }
    只读 特性集: 命名节点映射_;

    //@@{ 基础URI:baseURI }
    只读 基础URI: 文字 | 空值;

    //@@{ 子节点:childNodes, 节点列表_:NodeList }
    只读 子节点: 节点列表_;

    //@@{ 首子节点:firstChild, 节点_:Node }
    只读 首子节点: 节点_ | 空值;

    //@@{ 尾子节点:lastChild, 节点_:Node }
    只读 尾子节点: 节点_ | 空值;

    //@@{ 本地名称:localName }
    只读 本地名称: 文字 | 空值;

    //@@{ 名称空间URI:namespaceURI }
    只读 名称空间URI: 文字 | 空值;

    //@@{ 下个兄弟:nextSibling, 节点_:Node }
    只读 下个兄弟: 节点_ | 空值;

    //@@{ 节点名称:nodeName }
    只读 节点名称: 文字;

    //@@{ 节点类型:nodeType }
    只读 节点类型: 数字;

    //@@{ 节点值:nodeValue }
    节点值: 文字 | 空值;

    //@@{ 主文档:ownerDocument, 文档_:Document }
    只读 主文档: 文档_;

    //@@{ 父元素:parentElement, HTML元素_:HTMLElement }
    只读 父元素: HTML元素_ | 空值;

    //@@{ 父节点:parentNode, 节点_:Node }
    只读 父节点: 节点_ | 空值;

    //@@{ 之前兄弟:previousSibling, 节点_:Node }
    只读 之前兄弟: 节点_ | 空值;

    //@@{ 文本内容:textContent }
    文本内容: 文字 | 空值;

    //@@{ 附加子节点:appendChild, 节点_:Node, 新子:newChild }
    附加子节点<T 扩展 节点_>(新子: T): T;

    //@@{ 克隆节点:cloneNode, 深度:deep, 节点_:Node }
    克隆节点(深度?: 真假): 节点_;

    //@@{ 比较文件位置:compareDocumentPosition, 其他:other, 节点_:Node }
    比较文件位置(其他: 节点_): 数字;

    //@@{ 包含:contains, 孩子:child, 节点_:Node }
    包含(孩子: 节点_): 真假;

    //@@{ 有特性组:hasAttributes }
    有特性组(): 真假;

    //@@{ 有子节点:hasChildNodes }
    有子节点(): 真假;

    //@@{ 插入之前:insertBefore, 节点_:Node, 新子:newChild, 参照子节点:refChild }
    插入之前<T 扩展 节点_>(新子: T, 参照子节点: 节点_ | 空值): T;

    //@@{ 是默认名称空间:isDefaultNamespace, 名称空间URI:namespaceURI }
    是默认名称空间(名称空间URI: 文字 | 空值): 真假;

    //@@{ 是相等节点:isEqualNode, 参数:arg, 节点_:Node }
    是相等节点(参数: 节点_): 真假;

    //@@{ 是相同节点:isSameNode, 其他:other, 节点_:Node }
    是相同节点(其他: 节点_): 真假;

    //@@{ 查找名称空间URI:lookupNamespaceURI, 前缀:prefix }
    查找名称空间URI(前缀: 文字 | 空值): 文字 | 空值;

    //@@{ 查找前缀:lookupPrefix, 名称空间URI:namespaceURI }
    查找前缀(名称空间URI: 文字 | 空值): 文字 | 空值;

    //@@{ 正常化:normalize }
    正常化(): 无值;

    //@@{ 删除子:removeChild, 节点_:Node, 旧子:oldChild }
    删除子<T 扩展 节点_>(旧子: T): T;

    //@@{ 替换子:replaceChild, 节点_:Node, 新子:newChild, 旧子:oldChild }
    替换子<T 扩展 节点_>(新子: 节点_, 旧子: T): T;

    //@@{ __特性_节点__:ATTRIBUTE_NODE }
    只读 __特性_节点__: 数字;

    //@@{ __忽略数据_片段_节点__:CDATA_SECTION_NODE }
    只读 __忽略数据_片段_节点__: 数字;

    //@@{ __评论_节点__:COMMENT_NODE }
    只读 __评论_节点__: 数字;

    //@@{ __文档_片段_节点__:DOCUMENT_FRAGMENT_NODE }
    只读 __文档_片段_节点__: 数字;

    //@@{ __文档_节点__:DOCUMENT_NODE }
    只读 __文档_节点__: 数字;

    //@@{ __文档_位置_包含_通过__:DOCUMENT_POSITION_CONTAINED_BY }
    只读 __文档_位置_包含_通过__: 数字;

    //@@{ __文档_位置_包含__:DOCUMENT_POSITION_CONTAINS }
    只读 __文档_位置_包含__: 数字;

    //@@{ __文档_位置_断开连接__:DOCUMENT_POSITION_DISCONNECTED }
    只读 __文档_位置_断开连接__: 数字;

    //@@{ __文档_位置_后__:DOCUMENT_POSITION_FOLLOWING }
    只读 __文档_位置_后__: 数字;

    //@@{ __文档_位置_实现_具体的__:DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC }
    只读 __文档_位置_实现_具体的__: 数字;

    //@@{ __文档_位置_前__:DOCUMENT_POSITION_PRECEDING }
    只读 __文档_位置_前__: 数字;

    //@@{ __文档_类型_节点__:DOCUMENT_TYPE_NODE }
    只读 __文档_类型_节点__: 数字;

    //@@{ __元素_节点__:ELEMENT_NODE }
    只读 __元素_节点__: 数字;

    //@@{ __实体_节点__:ENTITY_NODE }
    只读 __实体_节点__: 数字;

    //@@{ __实体_引用_节点__:ENTITY_REFERENCE_NODE }
    只读 __实体_引用_节点__: 数字;

    //@@{ __符号_节点__:NOTATION_NODE }
    只读 __符号_节点__: 数字;

    //@@{ __处理_指令_节点__:PROCESSING_INSTRUCTION_NODE }
    只读 __处理_指令_节点__: 数字;

    //@@{ __文本_节点__:TEXT_NODE }
    只读 __文本_节点__: 数字;

}

声明 值量 节点_: {

    //@@{ 原型:prototype, 节点_:Node }
    原型: 节点_;

    //@@{ 节点_:Node }
    新建(): 节点_;

    //@@{ __特性_节点__:ATTRIBUTE_NODE }
    只读 __特性_节点__: 数字;

    //@@{ __忽略数据_片段_节点__:CDATA_SECTION_NODE }
    只读 __忽略数据_片段_节点__: 数字;

    //@@{ __评论_节点__:COMMENT_NODE }
    只读 __评论_节点__: 数字;

    //@@{ __文档_片段_节点__:DOCUMENT_FRAGMENT_NODE }
    只读 __文档_片段_节点__: 数字; 

    //@@{ __文档_节点__:DOCUMENT_NODE }
    只读 __文档_节点__: 数字;

    //@@{ __文档_位置_包含_通过__:DOCUMENT_POSITION_CONTAINED_BY }
    只读 __文档_位置_包含_通过__: 数字;

    //@@{ __文档_位置_包含__:DOCUMENT_POSITION_CONTAINS }
    只读 __文档_位置_包含__: 数字;

    //@@{ __文档_位置_断开连接__:DOCUMENT_POSITION_DISCONNECTED }
    只读 __文档_位置_断开连接__: 数字;

    //@@{ __文档_位置_后__:DOCUMENT_POSITION_FOLLOWING }
    只读 __文档_位置_后__: 数字;

    //@@{ __文档_位置_实现_具体的__:DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC }
    只读 __文档_位置_实现_具体的__: 数字;

    //@@{ __文档_位置_前__:DOCUMENT_POSITION_PRECEDING }
    只读 __文档_位置_前__: 数字;

    //@@{ __文档_类型_节点__:DOCUMENT_TYPE_NODE }
    只读 __文档_类型_节点__: 数字;

    //@@{ __元素_节点__:ELEMENT_NODE }
    只读 __元素_节点__: 数字;

    //@@{ __实体_节点__:ENTITY_NODE }
    只读 __实体_节点__: 数字;

    //@@{ __实体_引用_节点__:ENTITY_REFERENCE_NODE }
    只读 __实体_引用_节点__: 数字;

    //@@{ __符号_节点__:NOTATION_NODE }
    只读 __符号_节点__: 数字;

    //@@{ __处理_指令_节点__:PROCESSING_INSTRUCTION_NODE }
    只读 __处理_指令_节点__: 数字;

    //@@{ __文本_节点__:TEXT_NODE }
    只读 __文本_节点__: 数字;

};

//@@{ 节点过滤器_:NodeFilter }
接口 节点过滤器_ {

    //@@{ 接受节点:acceptNode, 节点_:Node }
    接受节点(n: 节点_): 数字;

}

声明 值量 节点过滤器_: {

    //@@{ __过滤器_接受__:FILTER_ACCEPT }
    只读 __过滤器_接受__: 数字;

    //@@{ __过滤器_拒绝__:FILTER_REJECT }
    只读 __过滤器_拒绝__: 数字;

    //@@{ __过滤器_跳过__:FILTER_SKIP }
    只读 __过滤器_跳过__: 数字;

    //@@{ __显示_所有__:SHOW_ALL }
    只读 __显示_所有__: 数字;

    //@@{ __显示_特性__:SHOW_ATTRIBUTE }
    只读 __显示_特性__: 数字;

    //@@{ __显示_忽略数据_片段__:SHOW_CDATA_SECTION }
    只读 __显示_忽略数据_片段__: 数字;

    //@@{ __显示_评论__:SHOW_COMMENT }
    只读 __显示_评论__: 数字;

    //@@{ __显示_文档__:SHOW_DOCUMENT }
    只读 __显示_文档__: 数字;

    //@@{ __显示_文档_片段__:SHOW_DOCUMENT_FRAGMENT }
    只读 __显示_文档_片段__: 数字;

    //@@{ __显示_文档_类型__:SHOW_DOCUMENT_TYPE }
    只读 __显示_文档_类型__: 数字;

    //@@{ __显示_元素__:SHOW_ELEMENT }
    只读 __显示_元素__: 数字;

    //@@{ __显示_实体__:SHOW_ENTITY }
    只读 __显示_实体__: 数字;

    //@@{ __显示_实体_引用__:SHOW_ENTITY_REFERENCE }
    只读 __显示_实体_引用__: 数字;

    //@@{ __显示_符号__:SHOW_NOTATION }
    只读 __显示_符号__: 数字;

    //@@{ __显示_处理_指令__:SHOW_PROCESSING_INSTRUCTION }
    只读 __显示_处理_指令__: 数字;

    //@@{ __显示_文本__:SHOW_TEXT }
    只读 __显示_文本__: 数字;

};

//@@{ 节点迭代器_:NodeIterator }
接口 节点迭代器_ {

    //@@{ 扩大实体引用:expandEntityReferences }
    只读 扩大实体引用: 真假;

    //@@{ 过滤器:filter, 节点过滤器_:NodeFilter }
    只读 过滤器: 节点过滤器_;

    //@@{ 根:root, 节点_:Node }
    只读 根: 节点_;

    //@@{ 如何显示:whatToShow }
    只读 如何显示: 数字;

    //@@{ 分离:detach }
    分离(): 无值;

    //@@{ 下个节点:nextNode, 节点_:Node }
    下个节点(): 节点_;

    //@@{ 之前节点:previousNode, 节点_:Node }
    之前节点(): 节点_;

}

声明 值量 节点迭代器_: {

    //@@{ 原型:prototype, 节点迭代器_:NodeIterator }
    原型: 节点迭代器_;

    //@@{ 节点迭代器_:NodeIterator }
    新建(): 节点迭代器_;

};

//@@{ 节点列表_:NodeList }
接口 节点列表_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 项目:item, 索引:index, 节点_:Node }
    项目(索引: 数字): 节点_;

    //@@{ 索引:index, 节点_:Node }
    [索引: 数字]: 节点_;

}

声明 值量 节点列表_: {

    //@@{ 原型:prototype, 节点列表_:NodeList }
    原型: 节点列表_;

    //@@{ 节点列表_:NodeList }
    新建(): 节点列表_;

};

//@@{ 通知事件映射_:NotificationEventMap }
接口 通知事件映射_ {

    //@@{ "点击":"click", 事件_:Event }
    "点击": 事件_;

    //@@{ "关闭":"close", 事件_:Event }
    "关闭": 事件_;

    //@@{ "错误":"error", 事件_:Event }
    "错误": 事件_;

    //@@{ "显示":"show", 事件_:Event }
    "显示": 事件_;

}

//@@{ 通知_:Notification, 事件目标_:EventTarget }
接口 通知_ 扩展 事件目标_ {

    //@@{ 体:body }
    只读 体: 文字;

    //@@{ 文本方向:dir, 通知方向_:NotificationDirection }
    只读 文本方向: 通知方向_;

    //@@{ 图标:icon }
    只读 图标: 文字;

    //@@{ 语言:lang }
    只读 语言: 文字;

    //@@{ 正在点击:onclick, 通知_:Notification, 事件_:Event }
    正在点击: (本体: 通知_, ev: 事件_) => 任意;

    //@@{ 正在关闭:onclose, 通知_:Notification, 事件_:Event }
    正在关闭: (本体: 通知_, ev: 事件_) => 任意;

    //@@{ 正在错误:onerror, 通知_:Notification, 事件_:Event }
    正在错误: (本体: 通知_, ev: 事件_) => 任意;

    //@@{ 正在显示:onshow, 通知_:Notification, 事件_:Event }
    正在显示: (本体: 通知_, ev: 事件_) => 任意;

    //@@{ 许可:permission, 通知许可_:NotificationPermission }
    只读 许可: 通知许可_;

    //@@{ 标签:tag }
    只读 标签: 文字;

    //@@{ 标题:title }
    只读 标题: 文字;

    //@@{ 关闭:close }
    关闭(): 无值;

    //@@{ 添加事件监听器:addEventListener, 通知事件映射_:NotificationEventMap, 类型:type, 侦听器:listener, 通知_:Notification, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 通知事件映射_>(类型: K, 侦听器: (本体: 通知_, ev: 通知事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 通知_: {

    //@@{ 原型:prototype, 通知_:Notification }
    原型: 通知_;

    //@@{ 标题:title, 选项:options, 通知选项_:NotificationOptions, 通知_:Notification }
    新建(标题: 文字, 选项?: 通知选项_): 通知_;

    //@@{ 请求许可:requestPermission, 回调:callback, 通知允许回调_:NotificationPermissionCallback, 预设_:Promise, 通知许可_:NotificationPermission }
    请求许可(回调?: 通知允许回调_): 预设_<通知许可_>;

};

//@@{ OES_元素_索引_无符号整数_:OES_element_index_uint }
接口 OES_元素_索引_无符号整数_ {

}

声明 值量 OES_元素_索引_无符号整数_: {

    //@@{ 原型:prototype, OES_元素_索引_无符号整数_:OES_element_index_uint }
    原型: OES_元素_索引_无符号整数_;

    //@@{ OES_元素_索引_无符号整数_:OES_element_index_uint }
    新建(): OES_元素_索引_无符号整数_;

};

//@@{ OES_标准_衍生品_:OES_standard_derivatives }
接口 OES_标准_衍生品_ {

    //@@{ __片段_材质_导数_提示_OES__:FRAGMENT_SHADER_DERIVATIVE_HINT_OES }
    只读 __片段_材质_导数_提示_OES__: 数字;

}

声明 值量 OES_标准_衍生品_: {

    //@@{ 原型:prototype, OES_标准_衍生品_:OES_standard_derivatives }
    原型: OES_标准_衍生品_;

    //@@{ OES_标准_衍生品_:OES_standard_derivatives }
    新建(): OES_标准_衍生品_;

    //@@{ __片段_材质_导数_提示_OES__:FRAGMENT_SHADER_DERIVATIVE_HINT_OES }
    只读 __片段_材质_导数_提示_OES__: 数字;

};

//@@{ OES_纹理_浮动_:OES_texture_float }
接口 OES_纹理_浮动_ {

}

声明 值量 OES_纹理_浮动_: {

    //@@{ 原型:prototype, OES_纹理_浮动_:OES_texture_float }
    原型: OES_纹理_浮动_;

    //@@{ OES_纹理_浮动_:OES_texture_float }
    新建(): OES_纹理_浮动_;

};

//@@{ OES_纹理_浮动_线性_:OES_texture_float_linear }
接口 OES_纹理_浮动_线性_ {

}

声明 值量 OES_纹理_浮动_线性_: {

    //@@{ 原型:prototype, OES_纹理_浮动_线性_:OES_texture_float_linear }
    原型: OES_纹理_浮动_线性_;

    //@@{ OES_纹理_浮动_线性_:OES_texture_float_linear }
    新建(): OES_纹理_浮动_线性_;

};

//@@{ OES_纹理_一半_浮动_:OES_texture_half_float }
接口 OES_纹理_一半_浮动_ {

    //@@{ __一半_浮动_OES__:HALF_FLOAT_OES }
    只读 __一半_浮动_OES__: 数字;

}

声明 值量 OES_纹理_一半_浮动_: {

    //@@{ 原型:prototype, OES_纹理_一半_浮动_:OES_texture_half_float }
    原型: OES_纹理_一半_浮动_;

    //@@{ OES_纹理_一半_浮动_:OES_texture_half_float }
    新建(): OES_纹理_一半_浮动_;

    //@@{ __一半_浮动_OES__:HALF_FLOAT_OES }
    只读 __一半_浮动_OES__: 数字;

};

//@@{ OES_纹理_一半_浮动_线性_:OES_texture_half_float_linear }
接口 OES_纹理_一半_浮动_线性_ {

}

声明 值量 OES_纹理_一半_浮动_线性_: {

    //@@{ 原型:prototype, OES_纹理_一半_浮动_线性_:OES_texture_half_float_linear }
    原型: OES_纹理_一半_浮动_线性_;

    //@@{ OES_纹理_一半_浮动_线性_:OES_texture_half_float_linear }
    新建(): OES_纹理_一半_浮动_线性_;

};

//@@{ 离线音频完成事件_:OfflineAudioCompletionEvent, 事件_:Event }
接口 离线音频完成事件_ 扩展 事件_ {

    //@@{ 显示缓冲区:renderedBuffer, 音频缓冲区_:AudioBuffer }
    只读 显示缓冲区: 音频缓冲区_;

}

声明 值量 离线音频完成事件_: {

    //@@{ 原型:prototype, 离线音频完成事件_:OfflineAudioCompletionEvent }
    原型: 离线音频完成事件_;

    //@@{ 离线音频完成事件_:OfflineAudioCompletionEvent }
    新建(): 离线音频完成事件_;

};

//@@{ 离线音频上下文事件映射_:OfflineAudioContextEventMap, 音频上下文事件映射_:AudioContextEventMap }
接口 离线音频上下文事件映射_ 扩展 音频上下文事件映射_ {

    //@@{ "完成":"complete", 离线音频完成事件_:OfflineAudioCompletionEvent }
    "完成": 离线音频完成事件_;

}

//@@{ 离线音频背景_:OfflineAudioContext, 音频上下文基类_:AudioContextBase }
接口 离线音频背景_ 扩展 音频上下文基类_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 正在完成:oncomplete, 离线音频背景_:OfflineAudioContext, 离线音频完成事件_:OfflineAudioCompletionEvent }
    正在完成: (本体: 离线音频背景_, ev: 离线音频完成事件_) => 任意;

    //@@{ 开始呈现:startRendering, 预设_:Promise, 音频缓冲区_:AudioBuffer }
    开始呈现(): 预设_<音频缓冲区_>;

    //@@{ 正在阻止:suspend, 阻止时间:suspendTime, 预设_:Promise }
    正在阻止(阻止时间: 数字): 预设_<无值>;

    //@@{ 添加事件监听器:addEventListener, 离线音频上下文事件映射_:OfflineAudioContextEventMap, 类型:type, 侦听器:listener, 离线音频背景_:OfflineAudioContext, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 离线音频上下文事件映射_>(类型: K, 侦听器: (本体: 离线音频背景_, ev: 离线音频上下文事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 离线音频背景_: {

    //@@{ 原型:prototype, 离线音频背景_:OfflineAudioContext }
    原型: 离线音频背景_;

    //@@{ 通道的数量:numberOfChannels, 长度:length, 采样率:sampleRate, 离线音频背景_:OfflineAudioContext }
    新建(通道的数量: 数字, 长度: 数字, 采样率: 数字): 离线音频背景_;

};

//@@{ 振荡器节点事件映射_:OscillatorNodeEventMap }
接口 振荡器节点事件映射_ {

    //@@{ "结束了":"ended", 媒体流错误事件_:MediaStreamErrorEvent }
    "结束了": 媒体流错误事件_;

}

//@@{ 振荡器节点_:OscillatorNode, 音频节点_:AudioNode }
接口 振荡器节点_ 扩展 音频节点_ {

    //@@{ 降低:detune, 音频参数_:AudioParam }
    只读 降低: 音频参数_;

    //@@{ 频率:frequency, 音频参数_:AudioParam }
    只读 频率: 音频参数_;

    //@@{ 正在结束了:onended, 振荡器节点_:OscillatorNode, 媒体流错误事件_:MediaStreamErrorEvent }
    正在结束了: (本体: 振荡器节点_, ev: 媒体流错误事件_) => 任意;

    //@@{ 类型:type, 振荡器类型_:OscillatorType }
    类型: 振荡器类型_;

    //@@{ 置周期波:setPeriodicWave, 周期波:periodicWave, 周期波_:PeriodicWave }
    置周期波(周期波: 周期波_): 无值;

    //@@{ 开始:start, 当:when }
    开始(当?: 数字): 无值;

    //@@{ 停止:stop, 当:when }
    停止(当?: 数字): 无值;

    //@@{ 添加事件监听器:addEventListener, 振荡器节点事件映射_:OscillatorNodeEventMap, 类型:type, 侦听器:listener, 振荡器节点_:OscillatorNode, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 振荡器节点事件映射_>(类型: K, 侦听器: (本体: 振荡器节点_, ev: 振荡器节点事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 振荡器节点_: {

    //@@{ 原型:prototype, 振荡器节点_:OscillatorNode }
    原型: 振荡器节点_;

    //@@{ 振荡器节点_:OscillatorNode }
    新建(): 振荡器节点_;

};

//@@{ 溢出事件_:OverflowEvent, UI事件_:UIEvent }
接口 溢出事件_ 扩展 UI事件_ {

    //@@{ 水平溢出:horizontalOverflow }
    只读 水平溢出: 真假;

    //@@{ 方向:orient }
    只读 方向: 数字;

    //@@{ 垂直溢出:verticalOverflow }
    只读 垂直溢出: 真假;

    //@@{ __两个__:BOTH }
    只读 __两个__: 数字;

    //@@{ __水平__:HORIZONTAL }
    只读 __水平__: 数字;

    //@@{ __垂直__:VERTICAL }
    只读 __垂直__: 数字;

}

声明 值量 溢出事件_: {

    //@@{ 原型:prototype, 溢出事件_:OverflowEvent }
    原型: 溢出事件_;

    //@@{ 溢出事件_:OverflowEvent }
    新建(): 溢出事件_;

    //@@{ __两个__:BOTH }
    只读 __两个__: 数字;

    //@@{ __水平__:HORIZONTAL }
    只读 __水平__: 数字;

    //@@{ __垂直__:VERTICAL }
    只读 __垂直__: 数字;

};

//@@{ 页面过渡事件_:PageTransitionEvent, 事件_:Event }
接口 页面过渡事件_ 扩展 事件_ {

    //@@{ 坚持:persisted }
    只读 坚持: 真假;

}

声明 值量 页面过渡事件_: {

    //@@{ 原型:prototype, 页面过渡事件_:PageTransitionEvent }
    原型: 页面过渡事件_;

    //@@{ 页面过渡事件_:PageTransitionEvent }
    新建(): 页面过渡事件_;

};

//@@{ 音源环境节点_:PannerNode, 音频节点_:AudioNode }
接口 音源环境节点_ 扩展 音频节点_ {

    //@@{ 锥内角:coneInnerAngle }
    锥内角: 数字;

    //@@{ 锥外角:coneOuterAngle }
    锥外角: 数字;

    //@@{ 锥外获得:coneOuterGain }
    锥外获得: 数字;

    //@@{ 距离模型:distanceModel, 距离模型类型_:DistanceModelType }
    距离模型: 距离模型类型_;

    //@@{ 最大距离:maxDistance }
    最大距离: 数字;

    //@@{ 平移模型:panningModel, 平移模型类型_:PanningModelType }
    平移模型: 平移模型类型_;

    //@@{ 引用距离:refDistance }
    引用距离: 数字;

    //@@{ 滚边因素:rolloffFactor }
    滚边因素: 数字;

    //@@{ 置方向:setOrientation }
    置方向(x: 数字, y: 数字, z: 数字): 无值;

    //@@{ 置位置:setPosition }
    置位置(x: 数字, y: 数字, z: 数字): 无值;

    //@@{ 设置速度:setVelocity }
    设置速度(x: 数字, y: 数字, z: 数字): 无值;

}

声明 值量 音源环境节点_: {

    //@@{ 原型:prototype, 音源环境节点_:PannerNode }
    原型: 音源环境节点_;

    //@@{ 音源环境节点_:PannerNode }
    新建(): 音源环境节点_;

};

//@@{ 路径2D_:Path2D, 实例_:Object, 画板路径方法_:CanvasPathMethods }
接口 路径2D_ 扩展 实例_, 画板路径方法_ {

}

声明 值量 路径2D_: {

    //@@{ 原型:prototype, 路径2D_:Path2D }
    原型: 路径2D_;

    //@@{ 路径:path, 路径2D_:Path2D }
    新建(路径?: 路径2D_): 路径2D_;

};

//@@{ 付款地址_:PaymentAddress }
接口 付款地址_ {

    //@@{ 地址行:addressLine }
    只读 地址行: 文字[];

    //@@{ 城市:city }
    只读 城市: 文字;

    //@@{ 国家:country }
    只读 国家: 文字;

    //@@{ 依赖位置:dependentLocality }
    只读 依赖位置: 文字;

    //@@{ 语言代码:languageCode }
    只读 语言代码: 文字;

    //@@{ 组织:organization }
    只读 组织: 文字;

    //@@{ 电话:phone }
    只读 电话: 文字;

    //@@{ 邮政编码:postalCode }
    只读 邮政编码: 文字;

    //@@{ 收件人:recipient }
    只读 收件人: 文字;

    //@@{ 地区:region }
    只读 地区: 文字;

    //@@{ 排序代码:sortingCode }
    只读 排序代码: 文字;

    //@@{ 转为JSON:toJSON }
    转为JSON(): 任意;

}

声明 值量 付款地址_: {

    //@@{ 原型:prototype, 付款地址_:PaymentAddress }
    原型: 付款地址_;

    //@@{ 付款地址_:PaymentAddress }
    新建(): 付款地址_;

};

//@@{ 付款请求事件映射_:PaymentRequestEventMap }
接口 付款请求事件映射_ {

    //@@{ "送货地址改变":"shippingaddresschange", 事件_:Event }
    "送货地址改变": 事件_;

    //@@{ "送货选项改变":"shippingoptionchange", 事件_:Event }
    "送货选项改变": 事件_;

}

//@@{ 付款请求_:PaymentRequest, 事件目标_:EventTarget }
接口 付款请求_ 扩展 事件目标_ {

    //@@{ 正在送货地址改变:onshippingaddresschange, 付款请求_:PaymentRequest, 事件_:Event }
    正在送货地址改变: (本体: 付款请求_, ev: 事件_) => 任意;

    //@@{ 正在送货选项改变:onshippingoptionchange, 付款请求_:PaymentRequest, 事件_:Event }
    正在送货选项改变: (本体: 付款请求_, ev: 事件_) => 任意;

    //@@{ 送货地址:shippingAddress, 付款地址_:PaymentAddress }
    只读 送货地址: 付款地址_ | 空值;

    //@@{ 送货选项:shippingOption }
    只读 送货选项: 文字 | 空值;

    //@@{ 送货类型:shippingType, 支付运输类型_:PaymentShippingType }
    只读 送货类型: 支付运输类型_ | 空值;

    //@@{ 终止:abort, 预设_:Promise }
    终止(): 预设_<无值>;

    //@@{ 显示:show, 预设_:Promise, 付款响应_:PaymentResponse }
    显示(): 预设_<付款响应_>;

    //@@{ 添加事件监听器:addEventListener, 付款请求事件映射_:PaymentRequestEventMap, 类型:type, 侦听器:listener, 付款请求_:PaymentRequest, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 付款请求事件映射_>(类型: K, 侦听器: (本体: 付款请求_, ev: 付款请求事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 付款请求_: {

    //@@{ 原型:prototype, 付款请求_:PaymentRequest }
    原型: 付款请求_;

    //@@{ 方法数据:methodData, 付款方法数据_:PaymentMethodData, 细节:details, 付款细节_:PaymentDetails, 选项:options, 付款选项_:PaymentOptions, 付款请求_:PaymentRequest }
    新建(方法数据: 付款方法数据_[], 细节: 付款细节_, 选项?: 付款选项_): 付款请求_;

};

//@@{ 付款请求更新事件_:PaymentRequestUpdateEvent, 事件_:Event }
接口 付款请求更新事件_ 扩展 事件_ {

    //@@{ 更新与:updateWith, 预设_:Promise, 付款细节_:PaymentDetails }
    更新与(d: 预设_<付款细节_>): 无值;

}

声明 值量 付款请求更新事件_: {

    //@@{ 原型:prototype, 付款请求更新事件_:PaymentRequestUpdateEvent }
    原型: 付款请求更新事件_;

    //@@{ 类型:type, 事件初始化词典:eventInitDict, 付款请求更新事件初始化_:PaymentRequestUpdateEventInit, 付款请求更新事件_:PaymentRequestUpdateEvent }
    新建(类型: 文字, 事件初始化词典?: 付款请求更新事件初始化_): 付款请求更新事件_;

};

//@@{ 付款响应_:PaymentResponse }
接口 付款响应_ {

    //@@{ 细节:details }
    只读 细节: 任意;

    //@@{ 方法名称:methodName }
    只读 方法名称: 文字;

    //@@{ 付款人电子邮件:payerEmail }
    只读 付款人电子邮件: 文字 | 空值;

    //@@{ 付款人的名字:payerName }
    只读 付款人的名字: 文字 | 空值;

    //@@{ 付款人电话:payerPhone }
    只读 付款人电话: 文字 | 空值;

    //@@{ 送货地址:shippingAddress, 付款地址_:PaymentAddress }
    只读 送货地址: 付款地址_ | 空值;

    //@@{ 送货选项:shippingOption }
    只读 送货选项: 文字 | 空值;

    //@@{ 完成:complete, 结果:result, 付款完成_:PaymentComplete, 预设_:Promise }
    完成(结果?: 付款完成_): 预设_<无值>;

    //@@{ 转为JSON:toJSON }
    转为JSON(): 任意;

}

声明 值量 付款响应_: { 

    //@@{ 原型:prototype, 付款响应_:PaymentResponse }
    原型: 付款响应_;

    //@@{ 付款响应_:PaymentResponse }
    新建(): 付款响应_;

};

//@@{ 性能_:Performance }
接口 性能_ {

    //@@{ 导航:navigation, 性能导航_:PerformanceNavigation }
    只读 导航: 性能导航_;

    //@@{ 计时:timing, 性能计时_:PerformanceTiming }
    只读 计时: 性能计时_;

    //@@{ 清除标志:clearMarks, 标记名称:markName }
    清除标志(标记名称?: 文字): 无值;

    //@@{ 清除措施:clearMeasures, 测量名字:measureName }
    清除措施(测量名字?: 文字): 无值;

    //@@{ 清除资源计时:clearResourceTimings }
    清除资源计时(): 无值;

    //@@{ 取条目:getEntries }
    取条目(): 任意;

    //@@{ 取条目按名称:getEntriesByName, 名字:name, 条目类型:entryType }
    取条目按名称(名字: 文字, 条目类型?: 文字): 任意;

    //@@{ 取条目按类型:getEntriesByType, 条目类型:entryType }
    取条目按类型(条目类型: 文字): 任意;

    //@@{ 取标志:getMarks, 标记名称:markName }
    取标志(标记名称?: 文字): 任意;

    //@@{ 取措施:getMeasures, 测量名字:measureName }
    取措施(测量名字?: 文字): 任意;

    //@@{ 标记:mark, 标记名称:markName }
    标记(标记名称: 文字): 无值;

    //@@{ 测量:measure, 测量名字:measureName, 开始标记名称:startMarkName, 结束标记名称:endMarkName }
    测量(测量名字: 文字, 开始标记名称?: 文字, 结束标记名称?: 文字): 无值;

    //@@{ 现在:now }
    现在(): 数字;

    //@@{ 置资源计时缓冲大小:setResourceTimingBufferSize, 最大尺寸:maxSize }
    置资源计时缓冲大小(最大尺寸: 数字): 无值;

    //@@{ 转为JSON:toJSON }
    转为JSON(): 任意;

}

声明 值量 性能_: {

    //@@{ 原型:prototype, 性能_:Performance }
    原型: 性能_;

    //@@{ 性能_:Performance }
    新建(): 性能_;

};

//@@{ 性能条目_:PerformanceEntry }
接口 性能条目_ {

    //@@{ 持续时间:duration }
    只读 持续时间: 数字;

    //@@{ 条目类型:entryType }
    只读 条目类型: 文字;

    //@@{ 名字:name }
    只读 名字: 文字;

    //@@{ 开始时间:startTime }
    只读 开始时间: 数字;

}

声明 值量 性能条目_: {

    //@@{ 原型:prototype, 性能条目_:PerformanceEntry }
    原型: 性能条目_;

    //@@{ 性能条目_:PerformanceEntry }
    新建(): 性能条目_;

};

//@@{ 性能标记_:PerformanceMark, 性能条目_:PerformanceEntry }
接口 性能标记_ 扩展 性能条目_ {

}

声明 值量 性能标记_: {

    //@@{ 原型:prototype, 性能标记_:PerformanceMark }
    原型: 性能标记_;

    //@@{ 性能标记_:PerformanceMark }
    新建(): 性能标记_;

};

//@@{ 性能测量_:PerformanceMeasure, 性能条目_:PerformanceEntry }
接口 性能测量_ 扩展 性能条目_ {

}

声明 值量 性能测量_: {

    //@@{ 原型:prototype, 性能测量_:PerformanceMeasure }
    原型: 性能测量_;

    //@@{ 性能测量_:PerformanceMeasure }
    新建(): 性能测量_;

};

//@@{ 性能导航_:PerformanceNavigation }
接口 性能导航_ {

    //@@{ 重定向数量:redirectCount }
    只读 重定向数量: 数字;

    //@@{ 类型:type }
    只读 类型: 数字;

    //@@{ 转为JSON:toJSON }
    转为JSON(): 任意;

    //@@{ __类型_返回_向前__:TYPE_BACK_FORWARD }
    只读 __类型_返回_向前__: 数字;

    //@@{ __类型_导航__:TYPE_NAVIGATE }
    只读 __类型_导航__: 数字;

    //@@{ __类型_重新加载__:TYPE_RELOAD }
    只读 __类型_重新加载__: 数字;

    //@@{ __类型_保留__:TYPE_RESERVED }
    只读 __类型_保留__: 数字;

}

声明 值量 性能导航_: {

    //@@{ 原型:prototype, 性能导航_:PerformanceNavigation }
    原型: 性能导航_;

    //@@{ 性能导航_:PerformanceNavigation }
    新建(): 性能导航_;

    //@@{ __类型_返回_向前__:TYPE_BACK_FORWARD }
    只读 __类型_返回_向前__: 数字;

    //@@{ __类型_导航__:TYPE_NAVIGATE }
    只读 __类型_导航__: 数字;

    //@@{ __类型_重新加载__:TYPE_RELOAD }
    只读 __类型_重新加载__: 数字;

    //@@{ __类型_保留__:TYPE_RESERVED }
    只读 __类型_保留__: 数字;

};

//@@{ 性能导航计时_:PerformanceNavigationTiming, 性能条目_:PerformanceEntry }
接口 性能导航计时_ 扩展 性能条目_ {

    //@@{ 连接结束:connectEnd }
    只读 连接结束: 数字;

    //@@{ 连接开始:connectStart }
    只读 连接开始: 数字;

    //@@{ 域查找结束:domainLookupEnd }
    只读 域查找结束: 数字;

    //@@{ 域查找开始:domainLookupStart }
    只读 域查找开始: 数字;

    //@@{ 文档完成:domComplete }
    只读 文档完成: 数字;

    //@@{ 文档内容加载事件结束:domContentLoadedEventEnd }
    只读 文档内容加载事件结束: 数字;

    //@@{ 文档内容加载事件启动:domContentLoadedEventStart }
    只读 文档内容加载事件启动: 数字;

    //@@{ 文档交互:domInteractive }
    只读 文档交互: 数字;

    //@@{ 文档加载:domLoading }
    只读 文档加载: 数字;

    //@@{ 获取开始:fetchStart }
    只读 获取开始: 数字;

    //@@{ 加载事件结束:loadEventEnd }
    只读 加载事件结束: 数字;

    //@@{ 加载事件开始:loadEventStart }
    只读 加载事件开始: 数字;

    //@@{ 导航开始:navigationStart }
    只读 导航开始: 数字;

    //@@{ 重定向数量:redirectCount }
    只读 重定向数量: 数字;

    //@@{ 重定向结束:redirectEnd }
    只读 重定向结束: 数字;

    //@@{ 重定向开始:redirectStart }
    只读 重定向开始: 数字;

    //@@{ 请求开始:requestStart }
    只读 请求开始: 数字;

    //@@{ 响应结束:responseEnd }
    只读 响应结束: 数字;

    //@@{ 响应开始:responseStart }
    只读 响应开始: 数字;

    //@@{ 类型:type, 导航类型_:NavigationType }
    只读 类型: 导航类型_;

    //@@{ 卸载事件结束:unloadEventEnd }
    只读 卸载事件结束: 数字;

    //@@{ 卸载事件开始:unloadEventStart }
    只读 卸载事件开始: 数字;

}

声明 值量 性能导航计时_: {

    //@@{ 原型:prototype, 性能导航计时_:PerformanceNavigationTiming }
    原型: 性能导航计时_;

    //@@{ 性能导航计时_:PerformanceNavigationTiming }
    新建(): 性能导航计时_;

};

//@@{ 性能资源计时_:PerformanceResourceTiming, 性能条目_:PerformanceEntry }
接口 性能资源计时_ 扩展 性能条目_ {

    //@@{ 连接结束:connectEnd }
    只读 连接结束: 数字;

    //@@{ 连接开始:connectStart }
    只读 连接开始: 数字;

    //@@{ 域查找结束:domainLookupEnd }
    只读 域查找结束: 数字;

    //@@{ 域查找开始:domainLookupStart }
    只读 域查找开始: 数字;

    //@@{ 获取开始:fetchStart }
    只读 获取开始: 数字;

    //@@{ 引发类型:initiatorType }
    只读 引发类型: 文字;

    //@@{ 重定向结束:redirectEnd }
    只读 重定向结束: 数字;

    //@@{ 重定向开始:redirectStart }
    只读 重定向开始: 数字;

    //@@{ 请求开始:requestStart }
    只读 请求开始: 数字;

    //@@{ 响应结束:responseEnd }
    只读 响应结束: 数字;

    //@@{ 响应开始:responseStart }
    只读 响应开始: 数字;

}

声明 值量 性能资源计时_: {

    //@@{ 原型:prototype, 性能资源计时_:PerformanceResourceTiming }
    原型: 性能资源计时_;

    //@@{ 性能资源计时_:PerformanceResourceTiming }
    新建(): 性能资源计时_;

};

//@@{ 性能计时_:PerformanceTiming }
接口 性能计时_ {

    //@@{ 连接结束:connectEnd }
    只读 连接结束: 数字;

    //@@{ 连接开始:connectStart }
    只读 连接开始: 数字;

    //@@{ 域查找结束:domainLookupEnd }
    只读 域查找结束: 数字;

    //@@{ 域查找开始:domainLookupStart }
    只读 域查找开始: 数字;

    //@@{ 文档完成:domComplete }
    只读 文档完成: 数字;

    //@@{ 文档内容加载事件结束:domContentLoadedEventEnd }
    只读 文档内容加载事件结束: 数字;

    //@@{ 文档内容加载事件启动:domContentLoadedEventStart }
    只读 文档内容加载事件启动: 数字;

    //@@{ 文档交互:domInteractive }
    只读 文档交互: 数字;

    //@@{ 文档加载:domLoading }
    只读 文档加载: 数字;

    //@@{ 获取开始:fetchStart }
    只读 获取开始: 数字;

    //@@{ 加载事件结束:loadEventEnd }
    只读 加载事件结束: 数字;

    //@@{ 加载事件开始:loadEventStart }
    只读 加载事件开始: 数字;

    //@@{ ms第一画面:msFirstPaint }
    只读 ms第一画面: 数字;

    //@@{ 导航开始:navigationStart }
    只读 导航开始: 数字;

    //@@{ 重定向结束:redirectEnd }
    只读 重定向结束: 数字;

    //@@{ 重定向开始:redirectStart }
    只读 重定向开始: 数字;

    //@@{ 请求开始:requestStart }
    只读 请求开始: 数字;

    //@@{ 响应结束:responseEnd }
    只读 响应结束: 数字;

    //@@{ 响应开始:responseStart }
    只读 响应开始: 数字;

    //@@{ 卸载事件结束:unloadEventEnd }
    只读 卸载事件结束: 数字;

    //@@{ 卸载事件开始:unloadEventStart }
    只读 卸载事件开始: 数字;

    //@@{ 安全连接开始:secureConnectionStart }
    只读 安全连接开始: 数字;

    //@@{ 转为JSON:toJSON }
    转为JSON(): 任意;

}

声明 值量 性能计时_: {

    //@@{ 原型:prototype, 性能计时_:PerformanceTiming }
    原型: 性能计时_;

    //@@{ 性能计时_:PerformanceTiming }
    新建(): 性能计时_;

};

//@@{ 性能小部件扩展_:PerfWidgetExternal }
接口 性能小部件扩展_ {

    //@@{ 活动网络请求数:activeNetworkRequestCount }
    只读 活动网络请求数: 数字;

    //@@{ 平均框架时间:averageFrameTime }
    只读 平均框架时间: 数字;

    //@@{ 平均显彩时间:averagePaintTime }
    只读 平均显彩时间: 数字;

    //@@{ 额外信息启用:extraInformationEnabled }
    只读 额外信息启用: 真假;

    //@@{ 独立呈现启用:independentRenderingEnabled }
    只读 独立呈现启用: 真假;

    //@@{ 禁用内容字符串:irDisablingContentString }
    只读 禁用内容字符串: 文字;

    //@@{ 状态可用:irStatusAvailable }
    只读 状态可用: 真假;

    //@@{ 最大Cpu速度:maxCpuSpeed }
    只读 最大Cpu速度: 数字;

    //@@{ 每秒绘制请求:paintRequestsPerSecond }
    只读 每秒绘制请求: 数字;

    //@@{ 性能计数器:performanceCounter }
    只读 性能计数器: 数字;

    //@@{ 性能计数器频率:performanceCounterFrequency }
    只读 性能计数器频率: 数字;

    //@@{ 添加事件监听器:addEventListener, 事件类型:eventType, 回调:callback, 函数_:Function }
    添加事件监听器(事件类型: 文字, 回调: 函数_): 无值;

    //@@{ 取内存使用:getMemoryUsage }
    取内存使用(): 数字;

    //@@{ 取过程Cpu使用:getProcessCpuUsage }
    取过程Cpu使用(): 数字;

    //@@{ 取最近Cpu使用:getRecentCpuUsage, 最后:last }
    取最近Cpu使用(最后: 数字 | 空值): 任意;

    //@@{ 取最近帧:getRecentFrames, 最后:last }
    取最近帧(最后: 数字 | 空值): 任意;

    //@@{ 取最近内存使用:getRecentMemoryUsage, 最后:last }
    取最近内存使用(最后: 数字 | 空值): 任意;

    //@@{ 取最近绘制请求:getRecentPaintRequests, 最后:last }
    取最近绘制请求(最后: 数字 | 空值): 任意;

    //@@{ 删除事件监听器:removeEventListener, 事件类型:eventType, 回调:callback, 函数_:Function }
    删除事件监听器(事件类型: 文字, 回调: 函数_): 无值;

    //@@{ 重新定位窗口:repositionWindow }
    重新定位窗口(x: 数字, y: 数字): 无值;

    //@@{ 调整窗口:resizeWindow, 宽度:width, 高度:height }
    调整窗口(宽度: 数字, 高度: 数字): 无值;

}

声明 值量 性能小部件扩展_: {

    //@@{ 原型:prototype, 性能小部件扩展_:PerfWidgetExternal }
    原型: 性能小部件扩展_;

    //@@{ 性能小部件扩展_:PerfWidgetExternal }
    新建(): 性能小部件扩展_;

};

//@@{ 周期波_:PeriodicWave }
接口 周期波_ {

}

声明 值量 周期波_: {

    //@@{ 原型:prototype, 周期波_:PeriodicWave }
    原型: 周期波_;

    //@@{ 周期波_:PeriodicWave }
    新建(): 周期波_;

};

//@@{ 许可请求_:PermissionRequest, 延期许可请求_:DeferredPermissionRequest }
接口 许可请求_ 扩展 延期许可请求_ {

    //@@{ 状态:state, MS网络视图许可状态_:MSWebViewPermissionState }
    只读 状态: MS网络视图许可状态_;

    //@@{ 推迟:defer }
    推迟(): 无值;

}

声明 值量 许可请求_: {

    //@@{ 原型:prototype, 许可请求_:PermissionRequest }
    原型: 许可请求_;

    //@@{ 许可请求_:PermissionRequest }
    新建(): 许可请求_;

};

//@@{ 许可请求事件_:PermissionRequestedEvent, 事件_:Event }
接口 许可请求事件_ 扩展 事件_ {

    //@@{ 许可请求:permissionRequest, 许可请求_:PermissionRequest }
    只读 许可请求: 许可请求_;

}

声明 值量 许可请求事件_: {

    //@@{ 原型:prototype, 许可请求事件_:PermissionRequestedEvent }
    原型: 许可请求事件_;

    //@@{ 许可请求事件_:PermissionRequestedEvent }
    新建(): 许可请求事件_;

};

//@@{ 插件_:Plugin }
接口 插件_ {

    //@@{ 描述:description }
    只读 描述: 文字;

    //@@{ 文件名:filename }
    只读 文件名: 文字;

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 名字:name }
    只读 名字: 文字;

    //@@{ 版本:version }
    只读 版本: 文字;

    //@@{ 项目:item, 索引:index, Mime类型_:MimeType }
    项目(索引: 数字): Mime类型_;

    //@@{ 命名项目:namedItem, 类型:type, Mime类型_:MimeType }
    命名项目(类型: 文字): Mime类型_;

    //@@{ 索引:index, Mime类型_:MimeType }
    [索引: 数字]: Mime类型_;

}

声明 值量 插件_: {

    //@@{ 原型:prototype, 插件_:Plugin }
    原型: 插件_;

    //@@{ 插件_:Plugin }
    新建(): 插件_;

};

//@@{ 插件数组_:PluginArray }
接口 插件数组_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 项目:item, 索引:index, 插件_:Plugin }
    项目(索引: 数字): 插件_;

    //@@{ 命名项目:namedItem, 名字:name, 插件_:Plugin }
    命名项目(名字: 文字): 插件_;

    //@@{ 刷新:refresh, 重新加载:reload }
    刷新(重新加载?: 真假): 无值;

    //@@{ 索引:index, 插件_:Plugin }
    [索引: 数字]: 插件_;

}

声明 值量 插件数组_: {

    //@@{ 原型:prototype, 插件数组_:PluginArray }
    原型: 插件数组_;

    //@@{ 插件数组_:PluginArray }
    新建(): 插件数组_;

};

//@@{ 指针事件_:PointerEvent, 鼠标事件_:MouseEvent }
接口 指针事件_ 扩展 鼠标事件_ {

    //@@{ 当前点:currentPoint }
    只读 当前点: 任意;

    //@@{ 高度:height }
    只读 高度: 数字;

    //@@{ 创建事件时间:hwTimestamp }
    只读 创建事件时间: 数字;

    //@@{ 中间点:intermediatePoints }
    只读 中间点: 任意;

    //@@{ 是主要的:isPrimary }
    只读 是主要的: 真假;

    //@@{ 指针Id:pointerId }
    只读 指针Id: 数字;

    //@@{ 指针类型:pointerType }
    只读 指针类型: 任意;

    //@@{ 压力:pressure }
    只读 压力: 数字;

    //@@{ 旋转:rotation }
    只读 旋转: 数字;

    //@@{ 倾斜X:tiltX }
    只读 倾斜X: 数字;

    //@@{ 倾斜Y:tiltY }
    只读 倾斜Y: 数字;

    //@@{ 宽度:width }
    只读 宽度: 数字;

    //@@{ 取当前点:getCurrentPoint, 元素:element, 元素_:Element }
    取当前点(元素: 元素_): 无值;

    //@@{ 取中间点:getIntermediatePoints, 元素:element, 元素_:Element }
    取中间点(元素: 元素_): 无值;

    //@@{ 初始化指针事件:initPointerEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 视图参数:viewArg, 窗口_:Window, 细节参数:detailArg, 屏幕X参数:screenXArg, 屏幕Y参数:screenYArg, 客户X参数:clientXArg, 客户Y参数:clientYArg, ctrl键参数:ctrlKeyArg, alt键参数:altKeyArg, shift键参数:shiftKeyArg, meta键参数:metaKeyArg, 按钮参数:buttonArg, 相关目标参数:relatedTargetArg, 事件目标_:EventTarget, 偏移X参数:offsetXArg, 偏移Y参数:offsetYArg, 宽度参数:widthArg, 高度参数:heightArg, 压力:pressure, 旋转:rotation, 倾斜X:tiltX, 倾斜Y:tiltY, 指针Id参数:pointerIdArg, 指针类型:pointerType, 创建事件时间参数:hwTimestampArg, 是主要的:isPrimary }
    初始化指针事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 视图参数: 窗口_, 细节参数: 数字, 屏幕X参数: 数字, 屏幕Y参数: 数字, 客户X参数: 数字, 客户Y参数: 数字, ctrl键参数: 真假, alt键参数: 真假, shift键参数: 真假, meta键参数: 真假, 按钮参数: 数字, 相关目标参数: 事件目标_, 偏移X参数: 数字, 偏移Y参数: 数字, 宽度参数: 数字, 高度参数: 数字, 压力: 数字, 旋转: 数字, 倾斜X: 数字, 倾斜Y: 数字, 指针Id参数: 数字, 指针类型: 任意, 创建事件时间参数: 数字, 是主要的: 真假): 无值;

}

声明 值量 指针事件_: {

    //@@{ 原型:prototype, 指针事件_:PointerEvent }
    原型: 指针事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 指针事件初始化_:PointerEventInit, 指针事件_:PointerEvent }
    新建(类型参数: 文字, 事件初始化词典?: 指针事件初始化_): 指针事件_;

};

//@@{ 回退状态事件:PopStateEvent, 事件_:Event }
接口 回退状态事件 扩展 事件_ {

    //@@{ 状态:state }
    只读 状态: 任意;

    //@@{ 初始化回退状态事件:initPopStateEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 状态参数:stateArg }
    初始化回退状态事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 状态参数: 任意): 无值;

}

//@@{ 回退状态事件_:PopStateEvent }
声明 值量 回退状态事件_: {

    //@@{ 原型:prototype, 回退状态事件:PopStateEvent }
    原型: 回退状态事件;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 回退状态事件初始化_:PopStateEventInit, 回退状态事件:PopStateEvent }
    新建(类型参数: 文字, 事件初始化词典?: 回退状态事件初始化_): 回退状态事件;

};

接口 位置_ {

    //@@{ 坐标:coords, 坐标_:Coordinates }
    只读 坐标: 坐标_;

    //@@{ 时间戳:timestamp }
    只读 时间戳: 数字;

}

声明 值量 位置_: {

    //@@{ 原型:prototype, 位置_:Location }
    原型: 位置_;

    //@@{ 位置_:Location }
    新建(): 位置_;

};

//@@{ 位置错误_:PositionError }
接口 位置错误_ {

    //@@{ 代码:code }
    只读 代码: 数字;

    //@@{ 消息:message }
    只读 消息: 文字;

    //@@{ 转为文字:toString }
    转为文字(): 文字;

    //@@{ __许可_否认__:PERMISSION_DENIED }
    只读 __许可_否认__: 数字;

    //@@{ __位置_不可用__:POSITION_UNAVAILABLE }
    只读 __位置_不可用__: 数字;

    //@@{ __超时__:TIMEOUT }
    只读 __超时__: 数字;

}

声明 值量 位置错误_: {

    //@@{ 原型:prototype, 位置错误_:PositionError }
    原型: 位置错误_;

    //@@{ 位置错误_:PositionError }
    新建(): 位置错误_;

    //@@{ __许可_否认__:PERMISSION_DENIED }
    只读 __许可_否认__: 数字;

    //@@{ __位置_不可用__:POSITION_UNAVAILABLE }
    只读 __位置_不可用__: 数字;

    //@@{ __超时__:TIMEOUT }
    只读 __超时__: 数字;

};

//@@{ 处理指令_:ProcessingInstruction, 字符数据_:CharacterData }
接口 处理指令_ 扩展 字符数据_ {

    //@@{ 目标:target }
    只读 目标: 文字;

}

声明 值量 处理指令_: {

    //@@{ 原型:prototype, 处理指令_:ProcessingInstruction }
    原型: 处理指令_;

    //@@{ 处理指令_:ProcessingInstruction }
    新建(): 处理指令_;

};

//@@{ 进度事件_:ProgressEvent, 事件_:Event }
接口 进度事件_ 扩展 事件_ {

    //@@{ 长度可计算的:lengthComputable }
    只读 长度可计算的: 真假;

    //@@{ 加载:loaded }
    只读 加载: 数字;

    //@@{ 总:total }
    只读 总: 数字;

    //@@{ 初始化进度事件:initProgressEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 长度可计算的参数:lengthComputableArg, 加载参数:loadedArg, 总参数:totalArg }
    初始化进度事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 长度可计算的参数: 真假, 加载参数: 数字, 总参数: 数字): 无值;

}

声明 值量 进度事件_: {

    //@@{ 原型:prototype, 进度事件_:ProgressEvent }
    原型: 进度事件_;

    //@@{ 类型:type, 事件初始化词典:eventInitDict, 进度事件初始化_:ProgressEventInit, 进度事件_:ProgressEvent }
    新建(类型: 文字, 事件初始化词典?: 进度事件初始化_): 进度事件_;

};

//@@{ 压入管理器_:PushManager }
接口 压入管理器_ {

    //@@{ 取订阅:getSubscription, 预设_:Promise, 压入订阅_:PushSubscription }
    取订阅(): 预设_<压入订阅_>;

    //@@{ 许可状态:permissionState, 选项:options, 压入订阅选项初始化_:PushSubscriptionOptionsInit, 预设_:Promise, 压入许可状态_:PushPermissionState }
    许可状态(选项?: 压入订阅选项初始化_): 预设_<压入许可状态_>;

    //@@{ 订阅:subscribe, 选项:options, 压入订阅选项初始化_:PushSubscriptionOptionsInit, 预设_:Promise, 压入订阅_:PushSubscription }
    订阅(选项?: 压入订阅选项初始化_): 预设_<压入订阅_>;

}

声明 值量 压入管理器_: {

    //@@{ 原型:prototype, 压入管理器_:PushManager }
    原型: 压入管理器_;

    //@@{ 压入管理器_:PushManager }
    新建(): 压入管理器_;

};

//@@{ 压入订阅_:PushSubscription }
接口 压入订阅_ {

    //@@{ 端点:endpoint, USV字符串:USVString }
    只读 端点: USV字符串;

    //@@{ 选项:options, 压入订阅选项_:PushSubscriptionOptions }
    只读 选项: 压入订阅选项_;

    //@@{ 取键:getKey, 名字:name, 压入加密键名称_:PushEncryptionKeyName, 数组缓冲区_:ArrayBuffer }
    取键(名字: 压入加密键名称_): 数组缓冲区_ | 空值;

    //@@{ 转为JSON:toJSON }
    转为JSON(): 任意;

    //@@{ 退订:unsubscribe, 预设_:Promise }
    退订(): 预设_<真假>;

}

声明 值量 压入订阅_: {

    //@@{ 原型:prototype, 压入订阅_:PushSubscription }
    原型: 压入订阅_;

    //@@{ 压入订阅_:PushSubscription }
    新建(): 压入订阅_;

};

//@@{ 压入订阅选项_:PushSubscriptionOptions }
接口 压入订阅选项_ {

    //@@{ 应用程序服务键:applicationServerKey, 数组缓冲区_:ArrayBuffer }
    只读 应用程序服务键: 数组缓冲区_ | 空值;

    //@@{ 仅用户可见:userVisibleOnly }
    只读 仅用户可见: 真假;

}

声明 值量 压入订阅选项_: {

    //@@{ 原型:prototype, 压入订阅选项_:PushSubscriptionOptions }
    原型: 压入订阅选项_;

    //@@{ 压入订阅选项_:PushSubscriptionOptions }
    新建(): 压入订阅选项_;

};

//@@{ 范围_:Range }
接口 范围_ {

    //@@{ 倒塌:collapsed }
    只读 倒塌: 真假;

    //@@{ 常见的祖先容器:commonAncestorContainer, 节点_:Node }
    只读 常见的祖先容器: 节点_;

    //@@{ 结束容器:endContainer, 节点_:Node }
    只读 结束容器: 节点_;

    //@@{ 结束偏移量:endOffset }
    只读 结束偏移量: 数字;

    //@@{ 开始容器:startContainer, 节点_:Node }
    只读 开始容器: 节点_;

    //@@{ 开始偏移量:startOffset }
    只读 开始偏移量: 数字;

    //@@{ 克隆内容:cloneContents, 文档片段_:DocumentFragment }
    克隆内容(): 文档片段_;

    //@@{ 克隆范围:cloneRange, 范围_:Range }
    克隆范围(): 范围_;

    //@@{ 崩溃:collapse, 转为开始:toStart }
    崩溃(转为开始: 真假): 无值;

    //@@{ 比较边界点:compareBoundaryPoints, 如何:how, 源范围:sourceRange, 范围_:Range }
    比较边界点(如何: 数字, 源范围: 范围_): 数字;

    //@@{ 创建上下文片段:createContextualFragment, 片段:fragment, 文档片段_:DocumentFragment }
    创建上下文片段(片段: 文字): 文档片段_;

    //@@{ 删除内容:deleteContents }
    删除内容(): 无值;

    //@@{ 分离:detach }
    分离(): 无值;

    //@@{ 扩大:expand, 单位_:Unit, 扩大粒度_:ExpandGranularity }
    扩大(单位_: 扩大粒度_): 真假;

    //@@{ 提取内容:extractContents, 文档片段_:DocumentFragment }
    提取内容(): 文档片段_;

    //@@{ 取边界客户矩形:getBoundingClientRect, 客户矩形_:ClientRect }
    取边界客户矩形(): 客户矩形_;

    //@@{ 取客户矩形组:getClientRects, 客户矩形列表_:ClientRectList }
    取客户矩形组(): 客户矩形列表_;

    //@@{ 插入节点:insertNode, 新节点:newNode, 节点_:Node }
    插入节点(新节点: 节点_): 无值;

    //@@{ 选择节点:selectNode, 引用节点:refNode, 节点_:Node }
    选择节点(引用节点: 节点_): 无值;

    //@@{ 选择节点内容:selectNodeContents, 引用节点:refNode, 节点_:Node }
    选择节点内容(引用节点: 节点_): 无值;

    //@@{ 置结束:setEnd, 引用节点:refNode, 节点_:Node, 偏移:offset }
    置结束(引用节点: 节点_, 偏移: 数字): 无值;

    //@@{ 置结束后:setEndAfter, 引用节点:refNode, 节点_:Node }
    置结束后(引用节点: 节点_): 无值;

    //@@{ 置结束之前:setEndBefore, 引用节点:refNode, 节点_:Node }
    置结束之前(引用节点: 节点_): 无值;

    //@@{ 置开始:setStart, 引用节点:refNode, 节点_:Node, 偏移:offset }
    置开始(引用节点: 节点_, 偏移: 数字): 无值;

    //@@{ 置开始后:setStartAfter, 引用节点:refNode, 节点_:Node }
    置开始后(引用节点: 节点_): 无值;

    //@@{ 置开始之前:setStartBefore, 引用节点:refNode, 节点_:Node }
    置开始之前(引用节点: 节点_): 无值;

    //@@{ 围绕内容:surroundContents, 新父:newParent, 节点_:Node }
    围绕内容(新父: 节点_): 无值;

    //@@{ 转为文字:toString }
    转为文字(): 文字;

    //@@{ __结束_到_结束__:END_TO_END }
    只读 __结束_到_结束__: 数字;

    //@@{ __结束_到_开始__:END_TO_START }
    只读 __结束_到_开始__: 数字;

    //@@{ __开始_到_结束__:START_TO_END }
    只读 __开始_到_结束__: 数字;

    //@@{ __开始_到_开始__:START_TO_START }
    只读 __开始_到_开始__: 数字;

}

声明 值量 范围_: {

    //@@{ 原型:prototype, 范围_:Range }
    原型: 范围_;

    //@@{ 范围_:Range }
    新建(): 范围_;

    //@@{ __结束_到_结束__:END_TO_END }
    只读 __结束_到_结束__: 数字;

    //@@{ __结束_到_开始__:END_TO_START }
    只读 __结束_到_开始__: 数字;

    //@@{ __开始_到_结束__:START_TO_END }
    只读 __开始_到_结束__: 数字;

    //@@{ __开始_到_开始__:START_TO_START }
    只读 __开始_到_开始__: 数字;

};

//@@{ 可读流_:ReadableStream }
接口 可读流_ {

    //@@{ 锁定:locked }
    只读 锁定: 真假;

    //@@{ 取消:cancel, 预设_:Promise }
    取消(): 预设_<无值>;

    //@@{ 取读者:getReader, 可读流读者_:ReadableStreamReader }
    取读者(): 可读流读者_;

}

声明 值量 可读流_: {

    //@@{ 原型:prototype, 可读流_:ReadableStream }
    原型: 可读流_;

    //@@{ 可读流_:ReadableStream }
    新建(): 可读流_;

};

//@@{ 可读流读者_:ReadableStreamReader }
接口 可读流读者_ {

    //@@{ 取消:cancel, 预设_:Promise }
    取消(): 预设_<无值>;

    //@@{ 读:read, 预设_:Promise }
    读(): 预设_<任意>;

    //@@{ 释放锁:releaseLock }
    释放锁(): 无值;

}

//@@{ 读者读流_:ReadableStreamReader }
声明 值量 读者读流_: {

    //@@{ 原型:prototype, 可读流读者_:ReadableStreamReader }
    原型: 可读流读者_;

    //@@{ 可读流读者_:ReadableStreamReader }
    新建(): 可读流读者_;

};

//@@{ 请求_:Request, 实例_:Object, 体_:Body }
接口 请求_ 扩展 实例_, 体_ {

    //@@{ 缓存:cache, 请求缓存_:RequestCache }
    只读 缓存: 请求缓存_;

    //@@{ 凭证:credentials, 请求凭证_:RequestCredentials }
    只读 凭证: 请求凭证_;

    //@@{ 目的地:destination, 请求目的地_:RequestDestination }
    只读 目的地: 请求目的地_;

    //@@{ 头:headers, 报头_:Headers }
    只读 头: 报头_;

    //@@{ 完整性:integrity }
    只读 完整性: 文字;

    //@@{ 保持:keepalive }
    只读 保持: 真假;

    //@@{ 方法:method }
    只读 方法: 文字;

    //@@{ 模式:mode, 请求模式_:RequestMode }
    只读 模式: 请求模式_;

    //@@{ 重定向:redirect, 请求重定向_:RequestRedirect }
    只读 重定向: 请求重定向_;

    //@@{ 介绍人:referrer }
    只读 介绍人: 文字;

    //@@{ 介绍人政策:referrerPolicy, 推荐人政策_:ReferrerPolicy }
    只读 介绍人政策: 推荐人政策_;

    //@@{ 类型:type, 请求类型_:RequestType }
    只读 类型: 请求类型_; 

    只读 url: 文字;

    //@@{ 克隆:clone, 请求_:Request }
    克隆(): 请求_;

}

声明 值量 请求_: { 

    //@@{ 原型:prototype, 请求_:Request }
    原型: 请求_;

    //@@{ 输入:input, 请求_:Request, 初始化:init, 请求初始化_:RequestInit }
    新建(输入: 请求_ | 文字, 初始化?: 请求初始化_): 请求_;

};

//@@{ 响应_:Response, 实例_:Object, 体_:Body }
接口 响应_ 扩展 实例_, 体_ {

    //@@{ 体:body, 可读流_:ReadableStream }
    只读 体: 可读流_ | 空值;

    //@@{ 头:headers, 报头_:Headers }
    只读 头: 报头_;

    //@@{ 正确:ok }
    只读 正确: 真假;

    //@@{ 状态:status }
    只读 状态: 数字;

    //@@{ 状态文本:statusText }
    只读 状态文本: 文字;

    //@@{ 类型:type, 响应类型_:ResponseType }
    只读 类型: 响应类型_;

    只读 url: 文字;

    //@@{ 重定向:redirected }
    只读 重定向: 真假;

    //@@{ 克隆:clone, 响应_:Response }
    克隆(): 响应_; 

}

声明 值量 响应_: {

    //@@{ 原型:prototype, 响应_:Response }
    原型: 响应_;

    //@@{ 体:body, 初始化:init, 响应初始化_:ResponseInit, 响应_:Response }
    新建(体?: 任意, 初始化?: 响应初始化_): 响应_;

    //@@{ 错误:error, 响应_:Response }
    错误: () => 响应_;

    //@@{ 重定向:redirect, 状态:status, 响应_:Response }
    重定向: (url: 文字, 状态?: 数字) => 响应_;

};

//@@{ RTCDtls传输事件映射_:RTCDtlsTransportEventMap }
接口 RTCDtls传输事件映射_ {

    //@@{ "dtls状态改变":"dtlsstatechange", RTCDtls传输状态改变事件_:RTCDtlsTransportStateChangedEvent }
    "dtls状态改变": RTCDtls传输状态改变事件_;

    //@@{ "错误":"error", 事件_:Event }
    "错误": 事件_;

}

//@@{ RTCDtls传输_:RTCDtlsTransport, RTC统计数据提供者_:RTCStatsProvider }
接口 RTCDtls传输_ 扩展 RTC统计数据提供者_ {

    //@@{ dtls状态改变:ondtlsstatechange, RTCDtls传输_:RTCDtlsTransport, RTCDtls传输状态改变事件_:RTCDtlsTransportStateChangedEvent }
    dtls状态改变: ((本体: RTCDtls传输_, ev: RTCDtls传输状态改变事件_) => 任意) | 空值;

    //@@{ 正在错误:onerror, RTCDtls传输_:RTCDtlsTransport, 事件_:Event }
    正在错误: ((本体: RTCDtls传输_, ev: 事件_) => 任意) | 空值;

    //@@{ 状态:state, RTCDtls传输状态_:RTCDtlsTransportState }
    只读 状态: RTCDtls传输状态_;

    //@@{ 传输:transport, RTCIce传输_:RTCIceTransport }
    只读 传输: RTCIce传输_;

    //@@{ 取本地参数:getLocalParameters, RTCDtls参数_:RTCDtlsParameters }
    取本地参数(): RTCDtls参数_;

    //@@{ 取远程证书:getRemoteCertificates, 数组缓冲区_:ArrayBuffer }
    取远程证书(): 数组缓冲区_[];

    //@@{ 取远程参数:getRemoteParameters, RTCDtls参数_:RTCDtlsParameters }
    取远程参数(): RTCDtls参数_ | 空值;

    //@@{ 开始:start, 远程参数:remoteParameters, RTCDtls参数_:RTCDtlsParameters }
    开始(远程参数: RTCDtls参数_): 无值;

    //@@{ 停止:stop }
    停止(): 无值;

    //@@{ 添加事件监听器:addEventListener, RTCDtls传输事件映射_:RTCDtlsTransportEventMap, 类型:type, 侦听器:listener, RTCDtls传输_:RTCDtlsTransport, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 RTCDtls传输事件映射_>(类型: K, 侦听器: (本体: RTCDtls传输_, ev: RTCDtls传输事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 RTCDtls传输_: {

    //@@{ 原型:prototype, RTCDtls传输_:RTCDtlsTransport }
    原型: RTCDtls传输_;

    //@@{ 传输:transport, RTCIce传输_:RTCIceTransport, RTCDtls传输_:RTCDtlsTransport }
    新建(传输: RTCIce传输_): RTCDtls传输_;

};

//@@{ RTCDtls传输状态改变事件_:RTCDtlsTransportStateChangedEvent, 事件_:Event }
接口 RTCDtls传输状态改变事件_ 扩展 事件_ {

    //@@{ 状态:state, RTCDtls传输状态_:RTCDtlsTransportState }
    只读 状态: RTCDtls传输状态_;

}

声明 值量 RTCDtls传输状态改变事件_: {

    //@@{ 原型:prototype, RTCDtls传输状态改变事件_:RTCDtlsTransportStateChangedEvent }
    原型: RTCDtls传输状态改变事件_;

    //@@{ RTCDtls传输状态改变事件_:RTCDtlsTransportStateChangedEvent }
    新建(): RTCDtls传输状态改变事件_;

};

//@@{ RTCDtmf发送事件映射_:RTCDtmfSenderEventMap }
接口 RTCDtmf发送事件映射_ {

    //@@{ "声调改变":"tonechange", RTCDTMF声调改变事件_:RTCDTMFToneChangeEvent }
    "声调改变": RTCDTMF声调改变事件_;

}

//@@{ RTCDtmf发送_:RTCDtmfSender, 事件目标_:EventTarget }
接口 RTCDtmf发送_ 扩展 事件目标_ {

    //@@{ 可插入DTMF:canInsertDTMF }
    只读 可插入DTMF: 真假;

    //@@{ 持续时间:duration }
    只读 持续时间: 数字;

    //@@{ 初始声调差:interToneGap }
    只读 初始声调差: 数字;

    //@@{ 正在声调改变:ontonechange, RTCDtmf发送_:RTCDtmfSender, RTCDTMF声调改变事件_:RTCDTMFToneChangeEvent }
    正在声调改变: (本体: RTCDtmf发送_, ev: RTCDTMF声调改变事件_) => 任意;

    //@@{ 发送方:sender, RTCRtp发送方:RTCRtpSender }
    只读 发送方: RTCRtp发送方;

    //@@{ 声调缓冲:toneBuffer }
    只读 声调缓冲: 文字;

    //@@{ 插入DTMF:insertDTMF, 音调:tones, 持续时间:duration, 初始声调差:interToneGap }
    插入DTMF(音调: 文字, 持续时间?: 数字, 初始声调差?: 数字): 无值;

    //@@{ 添加事件监听器:addEventListener, RTCDtmf发送事件映射_:RTCDtmfSenderEventMap, 类型:type, 侦听器:listener, RTCDtmf发送_:RTCDtmfSender, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 RTCDtmf发送事件映射_>(类型: K, 侦听器: (本体: RTCDtmf发送_, ev: RTCDtmf发送事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 RTCDtmf发送_: {

    //@@{ 原型:prototype, RTCDtmf发送_:RTCDtmfSender }
    原型: RTCDtmf发送_;

    //@@{ 发送方:sender, RTCRtp发送方:RTCRtpSender, RTCDtmf发送_:RTCDtmfSender }
    新建(发送方: RTCRtp发送方): RTCDtmf发送_;

};

//@@{ RTCDTMF声调改变事件_:RTCDTMFToneChangeEvent, 事件_:Event }
接口 RTCDTMF声调改变事件_ 扩展 事件_ {

    //@@{ 声调:tone }
    只读 声调: 文字;

}

声明 值量 RTCDTMF声调改变事件_: {

    //@@{ 原型:prototype, RTCDTMF声调改变事件_:RTCDTMFToneChangeEvent }
    原型: RTCDTMF声调改变事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, RTCDTMF音调改变事件初始化_:RTCDTMFToneChangeEventInit, RTCDTMF声调改变事件_:RTCDTMFToneChangeEvent }
    新建(类型参数: 文字, 事件初始化词典: RTCDTMF音调改变事件初始化_): RTCDTMF声调改变事件_;

};

//@@{ RTCIce候选:RTCIceCandidate }
接口 RTCIce候选 {

    //@@{ 候选:candidate }
    候选: 文字 | 空值;

    //@@{ sdp标记:sdpMid }
    sdp标记: 文字 | 空值;

    //@@{ SDP媒体描述索引:sdpMLineIndex }
    SDP媒体描述索引: 数字 | 空值;

    //@@{ 转为JSON:toJSON }
    转为JSON(): 任意;

}

//@@{ RTCIce候选_:RTCIceCandidate }
声明 值量 RTCIce候选_: {

    //@@{ 原型:prototype, RTCIce候选:RTCIceCandidate }
    原型: RTCIce候选;

    //@@{ 候选初始化词典:candidateInitDict, RTCICE候选初始化_:RTCIceCandidateInit, RTCIce候选:RTCIceCandidate }
    新建(候选初始化词典?: RTCICE候选初始化_): RTCIce候选;

};

//@@{ RTCIce候选一对改变事件_:RTCIceCandidatePairChangedEvent, 事件_:Event }
接口 RTCIce候选一对改变事件_ 扩展 事件_ {

    //@@{ 一对:pair, RTCICE候选一对_:RTCIceCandidatePair }
    只读 一对: RTCICE候选一对_;

}

声明 值量 RTCIce候选一对改变事件_: {

    //@@{ 原型:prototype, RTCIce候选一对改变事件_:RTCIceCandidatePairChangedEvent }
    原型: RTCIce候选一对改变事件_;

    //@@{ RTCIce候选一对改变事件_:RTCIceCandidatePairChangedEvent }
    新建(): RTCIce候选一对改变事件_;

};

//@@{ RTCIce采集者事件件映射_:RTCIceGathererEventMap }
接口 RTCIce采集者事件件映射_ {

    //@@{ "错误":"error", 事件_:Event }
    "错误": 事件_;

    //@@{ "本地候选":"localcandidate", RTCIce采集者事件_:RTCIceGathererEvent }
    "本地候选": RTCIce采集者事件_;

}

//@@{ RTCIce采集者_:RTCIceGatherer, RTC统计数据提供者_:RTCStatsProvider }
接口 RTCIce采集者_ 扩展 RTC统计数据提供者_ {

    //@@{ 组件:component, RTCIce组件_:RTCIceComponent }
    只读 组件: RTCIce组件_;

    //@@{ 正在错误:onerror, RTCIce采集者_:RTCIceGatherer, 事件_:Event }
    正在错误: ((本体: RTCIce采集者_, ev: 事件_) => 任意) | 空值;

    //@@{ 正在本地候选:onlocalcandidate, RTCIce采集者_:RTCIceGatherer, RTCIce采集者事件_:RTCIceGathererEvent }
    正在本地候选: ((本体: RTCIce采集者_, ev: RTCIce采集者事件_) => 任意) | 空值;

    //@@{ 创建相关采集者:createAssociatedGatherer, RTCIce采集者_:RTCIceGatherer }
    创建相关采集者(): RTCIce采集者_;

    //@@{ 取本地候选:getLocalCandidates, RTCICE候选字典_:RTCIceCandidateDictionary }
    取本地候选(): RTCICE候选字典_[];

    //@@{ 取本地参数:getLocalParameters, RTCICE参数_:RTCIceParameters }
    取本地参数(): RTCICE参数_;

    //@@{ 添加事件监听器:addEventListener, RTCIce采集者事件件映射_:RTCIceGathererEventMap, 类型:type, 侦听器:listener, RTCIce采集者_:RTCIceGatherer, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 RTCIce采集者事件件映射_>(类型: K, 侦听器: (本体: RTCIce采集者_, ev: RTCIce采集者事件件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 RTCIce采集者_: {

    //@@{ 原型:prototype, RTCIce采集者_:RTCIceGatherer }
    原型: RTCIce采集者_;

    //@@{ 选项:options, RTCICE收集选项_:RTCIceGatherOptions, RTCIce采集者_:RTCIceGatherer }
    新建(选项: RTCICE收集选项_): RTCIce采集者_;

};

//@@{ RTCIce采集者事件_:RTCIceGathererEvent, 事件_:Event }
接口 RTCIce采集者事件_ 扩展 事件_ {

    //@@{ 候选:candidate, RTCICE候选字典_:RTCIceCandidateDictionary, RTCICE候选完整性_:RTCIceCandidateComplete }
    只读 候选: RTCICE候选字典_ | RTCICE候选完整性_;

}

声明 值量 RTCIce采集者事件_: {

    //@@{ 原型:prototype, RTCIce采集者事件_:RTCIceGathererEvent }
    原型: RTCIce采集者事件_;

    //@@{ RTCIce采集者事件_:RTCIceGathererEvent }
    新建(): RTCIce采集者事件_;

};

//@@{ RTCIce传输事件映射_:RTCIceTransportEventMap }
接口 RTCIce传输事件映射_ {

    //@@{ "候选一对改变":"candidatepairchange", RTCIce候选一对改变事件_:RTCIceCandidatePairChangedEvent }
    "候选一对改变": RTCIce候选一对改变事件_;

    //@@{ "ice状态改变":"icestatechange", RTCIce传输状态改变事件_:RTCIceTransportStateChangedEvent }
    "ice状态改变": RTCIce传输状态改变事件_;

}

//@@{ RTCIce传输_:RTCIceTransport, RTC统计数据提供者_:RTCStatsProvider }
接口 RTCIce传输_ 扩展 RTC统计数据提供者_ {

    //@@{ 组件:component, RTCIce组件_:RTCIceComponent }
    只读 组件: RTCIce组件_;

    //@@{ ice采集者:iceGatherer, RTCIce采集者_:RTCIceGatherer }
    只读 ice采集者: RTCIce采集者_ | 空值;

    //@@{ 正在候选一对改变:oncandidatepairchange, RTCIce传输_:RTCIceTransport, RTCIce候选一对改变事件_:RTCIceCandidatePairChangedEvent }
    正在候选一对改变: ((本体: RTCIce传输_, ev: RTCIce候选一对改变事件_) => 任意) | 空值;

    //@@{ 正在ice状态改变:onicestatechange, RTCIce传输_:RTCIceTransport, RTCIce传输状态改变事件_:RTCIceTransportStateChangedEvent }
    正在ice状态改变: ((本体: RTCIce传输_, ev: RTCIce传输状态改变事件_) => 任意) | 空值;

    //@@{ 角色:role, RTCIce角色_:RTCIceRole }
    只读 角色: RTCIce角色_;

    //@@{ 状态:state, RTCIce传输状态_:RTCIceTransportState }
    只读 状态: RTCIce传输状态_;

    //@@{ 添加远程候选:addRemoteCandidate, 远程候选:remoteCandidate, RTCICE候选字典_:RTCIceCandidateDictionary, RTCICE候选完整性_:RTCIceCandidateComplete }
    添加远程候选(远程候选: RTCICE候选字典_ | RTCICE候选完整性_): 无值;

    //@@{ 创建相关传输:createAssociatedTransport, RTCIce传输_:RTCIceTransport }
    创建相关传输(): RTCIce传输_;

    //@@{ 取提名候选一对:getNominatedCandidatePair, RTCICE候选一对_:RTCIceCandidatePair }
    取提名候选一对(): RTCICE候选一对_ | 空值;

    //@@{ 取远程候选:getRemoteCandidates, RTCICE候选字典_:RTCIceCandidateDictionary }
    取远程候选(): RTCICE候选字典_[];

    //@@{ 取远程参数:getRemoteParameters, RTCICE参数_:RTCIceParameters }
    取远程参数(): RTCICE参数_ | 空值;

    //@@{ 置远程候选:setRemoteCandidates, 远程候选:remoteCandidates, RTCICE候选字典_:RTCIceCandidateDictionary }
    置远程候选(远程候选: RTCICE候选字典_[]): 无值;

    //@@{ 开始:start, 采集者:gatherer, RTCIce采集者_:RTCIceGatherer, 远程参数:remoteParameters, RTCICE参数_:RTCIceParameters, 角色:role, RTCIce角色_:RTCIceRole }
    开始(采集者: RTCIce采集者_, 远程参数: RTCICE参数_, 角色?: RTCIce角色_): 无值;

    //@@{ 停止:stop }
    停止(): 无值;

    //@@{ 添加事件监听器:addEventListener, RTCIce传输事件映射_:RTCIceTransportEventMap, 类型:type, 侦听器:listener, RTCIce传输_:RTCIceTransport, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 RTCIce传输事件映射_>(类型: K, 侦听器: (本体: RTCIce传输_, ev: RTCIce传输事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 RTCIce传输_: {

    //@@{ 原型:prototype, RTCIce传输_:RTCIceTransport }
    原型: RTCIce传输_;

    //@@{ RTCIce传输_:RTCIceTransport }
    新建(): RTCIce传输_;

};

//@@{ RTCIce传输状态改变事件_:RTCIceTransportStateChangedEvent, 事件_:Event }
接口 RTCIce传输状态改变事件_ 扩展 事件_ {

    //@@{ 状态:state, RTCIce传输状态_:RTCIceTransportState }
    只读 状态: RTCIce传输状态_;

}

声明 值量 RTCIce传输状态改变事件_: {

    //@@{ 原型:prototype, RTCIce传输状态改变事件_:RTCIceTransportStateChangedEvent }
    原型: RTCIce传输状态改变事件_;

    //@@{ RTCIce传输状态改变事件_:RTCIceTransportStateChangedEvent }
    新建(): RTCIce传输状态改变事件_;

};

//@@{ RTC对等连接事件映射_:RTCPeerConnectionEventMap }
接口 RTC对等连接事件映射_ {

    //@@{ "添加流":"addstream", 媒体流事件_:MediaStreamEvent }
    "添加流": 媒体流事件_;

    //@@{ "ice候选":"icecandidate", RTC对等连接Ice事件_:RTCPeerConnectionIceEvent }
    "ice候选": RTC对等连接Ice事件_;

    //@@{ "ice连接状态变化":"iceconnectionstatechange", 事件_:Event }
    "ice连接状态变化": 事件_;

    //@@{ "ice采集状态改变":"icegatheringstatechange", 事件_:Event }
    "ice采集状态改变": 事件_;

    //@@{ "谈判需要":"negotiationneeded", 事件_:Event }
    "谈判需要": 事件_;

    //@@{ "删除流":"removestream", 媒体流事件_:MediaStreamEvent }
    "删除流": 媒体流事件_;

    //@@{ "信号状态改变":"signalingstatechange", 事件_:Event }
    "信号状态改变": 事件_;

}

//@@{ RTC对等连接_:RTCPeerConnection, 事件目标_:EventTarget }
接口 RTC对等连接_ 扩展 事件目标_ {

    //@@{ 可以细流Ice候选:canTrickleIceCandidates }
    只读 可以细流Ice候选: 真假 | 空值;

    //@@{ ice连接状态:iceConnectionState, RTCIce连接状态_:RTCIceConnectionState }
    只读 ice连接状态: RTCIce连接状态_;

    //@@{ ice收集状态:iceGatheringState, RTCIce聚集状态_:RTCIceGatheringState }
    只读 ice收集状态: RTCIce聚集状态_;

    //@@{ 本地描述:localDescription, RTC会话描述_:RTCSessionDescription }
    只读 本地描述: RTC会话描述_ | 空值;

    //@@{ 正在添加流:onaddstream, RTC对等连接_:RTCPeerConnection, 媒体流事件_:MediaStreamEvent }
    正在添加流: (本体: RTC对等连接_, ev: 媒体流事件_) => 任意;

    //@@{ 正在ice候选:onicecandidate, RTC对等连接_:RTCPeerConnection, RTC对等连接Ice事件_:RTCPeerConnectionIceEvent }
    正在ice候选: (本体: RTC对等连接_, ev: RTC对等连接Ice事件_) => 任意;

    //@@{ 正在ice连接状态变化:oniceconnectionstatechange, RTC对等连接_:RTCPeerConnection, 事件_:Event }
    正在ice连接状态变化: (本体: RTC对等连接_, ev: 事件_) => 任意;

    //@@{ 正在ice采集状态改变:onicegatheringstatechange, RTC对等连接_:RTCPeerConnection, 事件_:Event }
    正在ice采集状态改变: (本体: RTC对等连接_, ev: 事件_) => 任意;

    //@@{ 正在谈判需要:onnegotiationneeded, RTC对等连接_:RTCPeerConnection, 事件_:Event }
    正在谈判需要: (本体: RTC对等连接_, ev: 事件_) => 任意;

    //@@{ 正在删除流:onremovestream, RTC对等连接_:RTCPeerConnection, 媒体流事件_:MediaStreamEvent }
    正在删除流: (本体: RTC对等连接_, ev: 媒体流事件_) => 任意;

    //@@{ 正在信号状态改变:onsignalingstatechange, RTC对等连接_:RTCPeerConnection, 事件_:Event }
    正在信号状态改变: (本体: RTC对等连接_, ev: 事件_) => 任意;

    //@@{ 远程描述:remoteDescription, RTC会话描述_:RTCSessionDescription }
    只读 远程描述: RTC会话描述_ | 空值;

    //@@{ 信号状态:signalingState, RTC信号状态_:RTCSignalingState }
    只读 信号状态: RTC信号状态_;

    //@@{ 添加Ice候选:addIceCandidate, 候选:candidate, RTCIce候选:RTCIceCandidate, 成功回调:successCallback, 无效的函数_:VoidFunction, 失败回调:failureCallback, RTC对等连接错误回调_:RTCPeerConnectionErrorCallback, 预设_:Promise }
    添加Ice候选(候选: RTCIce候选, 成功回调?: 无效的函数_, 失败回调?: RTC对等连接错误回调_): 预设_<无值>;

    //@@{ 添加流:addStream, 流:stream, 媒体流_:MediaStream }
    添加流(流: 媒体流_): 无值;

    //@@{ 关闭:close }
    关闭(): 无值;

    //@@{ 创建答案:createAnswer, 成功回调:successCallback, RTC会话描述回调_:RTCSessionDescriptionCallback, 失败回调:failureCallback, RTC对等连接错误回调_:RTCPeerConnectionErrorCallback, 预设_:Promise, RTC会话描述_:RTCSessionDescription }
    创建答案(成功回调?: RTC会话描述回调_, 失败回调?: RTC对等连接错误回调_): 预设_<RTC会话描述_>;

    //@@{ 创建提供:createOffer, 成功回调:successCallback, RTC会话描述回调_:RTCSessionDescriptionCallback, 失败回调:failureCallback, RTC对等连接错误回调_:RTCPeerConnectionErrorCallback, 选项:options, RTC提供选项_:RTCOfferOptions, 预设_:Promise, RTC会话描述_:RTCSessionDescription }
    创建提供(成功回调?: RTC会话描述回调_, 失败回调?: RTC对等连接错误回调_, 选项?: RTC提供选项_): 预设_<RTC会话描述_>;

    //@@{ 取配置:getConfiguration, RTC配置_:RTCConfiguration }
    取配置(): RTC配置_;

    //@@{ 取本地流:getLocalStreams, 媒体流_:MediaStream }
    取本地流(): 媒体流_[];

    //@@{ 取远程流:getRemoteStreams, 媒体流_:MediaStream }
    取远程流(): 媒体流_[];

    //@@{ 取统计数据:getStats, 选择:selector, 媒体流轨道_:MediaStreamTrack, 成功回调:successCallback, RTC统计数据回调_:RTCStatsCallback, 失败回调:failureCallback, RTC对等连接错误回调_:RTCPeerConnectionErrorCallback, 预设_:Promise, RTC统计报告_:RTCStatsReport }
    取统计数据(选择: 媒体流轨道_ | 空值, 成功回调?: RTC统计数据回调_, 失败回调?: RTC对等连接错误回调_): 预设_<RTC统计报告_>;

    //@@{ 取流按Id:getStreamById, 流Id:streamId, 媒体流_:MediaStream }
    取流按Id(流Id: 文字): 媒体流_ | 空值;

    //@@{ 删除流:removeStream, 流:stream, 媒体流_:MediaStream }
    删除流(流: 媒体流_): 无值;

    //@@{ 置本地描述:setLocalDescription, 描述:description, RTC会话描述_:RTCSessionDescription, 成功回调:successCallback, 无效的函数_:VoidFunction, 失败回调:failureCallback, RTC对等连接错误回调_:RTCPeerConnectionErrorCallback, 预设_:Promise }
    置本地描述(描述: RTC会话描述_, 成功回调?: 无效的函数_, 失败回调?: RTC对等连接错误回调_): 预设_<无值>;

    //@@{ 置远程描述:setRemoteDescription, 描述:description, RTC会话描述_:RTCSessionDescription, 成功回调:successCallback, 无效的函数_:VoidFunction, 失败回调:failureCallback, RTC对等连接错误回调_:RTCPeerConnectionErrorCallback, 预设_:Promise }
    置远程描述(描述: RTC会话描述_, 成功回调?: 无效的函数_, 失败回调?: RTC对等连接错误回调_): 预设_<无值>;

    //@@{ 添加事件监听器:addEventListener, RTC对等连接事件映射_:RTCPeerConnectionEventMap, 类型:type, 侦听器:listener, RTC对等连接_:RTCPeerConnection, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 RTC对等连接事件映射_>(类型: K, 侦听器: (本体: RTC对等连接_, ev: RTC对等连接事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 RTC对等连接_: {

    //@@{ 原型:prototype, RTC对等连接_:RTCPeerConnection }
    原型: RTC对等连接_;

    //@@{ 配置:configuration, RTC配置_:RTCConfiguration, RTC对等连接_:RTCPeerConnection }
    新建(配置: RTC配置_): RTC对等连接_;

};

//@@{ RTC对等连接Ice事件_:RTCPeerConnectionIceEvent, 事件_:Event }
接口 RTC对等连接Ice事件_ 扩展 事件_ {

    //@@{ 候选:candidate, RTCIce候选:RTCIceCandidate }
    只读 候选: RTCIce候选;

}

//@@{ RTC对等连接冰事件_:RTCPeerConnectionIceEvent }
声明 值量 RTC对等连接冰事件_: {

    //@@{ 原型:prototype, RTC对等连接Ice事件_:RTCPeerConnectionIceEvent }
    原型: RTC对等连接Ice事件_;

    //@@{ 类型:type, 事件初始化词典:eventInitDict, RTC对等连接ICE事件初始化_:RTCPeerConnectionIceEventInit, RTC对等连接Ice事件_:RTCPeerConnectionIceEvent }
    新建(类型: 文字, 事件初始化词典: RTC对等连接ICE事件初始化_): RTC对等连接Ice事件_;

};

//@@{ RTCRtp接收机事件映射_:RTCRtpReceiverEventMap }
接口 RTCRtp接收机事件映射_ {

    //@@{ "错误":"error", 事件_:Event }
    "错误": 事件_;

}

//@@{ RTCRtp接收机_:RTCRtpReceiver, RTC统计数据提供者_:RTCStatsProvider }
接口 RTCRtp接收机_ 扩展 RTC统计数据提供者_ {

    //@@{ 正在错误:onerror, RTCRtp接收机_:RTCRtpReceiver, 事件_:Event }
    正在错误: ((本体: RTCRtp接收机_, ev: 事件_) => 任意) | 空值;

    //@@{ rtcp传输:rtcpTransport, RTCDtls传输_:RTCDtlsTransport }
    只读 rtcp传输: RTCDtls传输_;

    //@@{ 轨道:track, 媒体流轨道_:MediaStreamTrack }
    只读 轨道: 媒体流轨道_ | 空值;

    //@@{ 传输:transport, RTCDtls传输_:RTCDtlsTransport, RTCSrtpsd传输_:RTCSrtpSdesTransport }
    只读 传输: RTCDtls传输_ | RTCSrtpsd传输_;

    //@@{ 取贡献来源:getContributingSources, RTCRtp贡献源_:RTCRtpContributingSource }
    取贡献来源(): RTCRtp贡献源_[];

    //@@{ 收到:receive, 参数:parameters, RTCRtp参数_:RTCRtpParameters }
    收到(参数: RTCRtp参数_): 无值;

    //@@{ 请求发送CSRC:requestSendCSRC }
    请求发送CSRC(csrc: 数字): 无值;

    //@@{ 置传输:setTransport, 传输:transport, RTCDtls传输_:RTCDtlsTransport, RTCSrtpsd传输_:RTCSrtpSdesTransport, rtcp传输:rtcpTransport }
    置传输(传输: RTCDtls传输_ | RTCSrtpsd传输_, rtcp传输?: RTCDtls传输_): 无值;

    //@@{ 停止:stop }
    停止(): 无值;

    //@@{ 添加事件监听器:addEventListener, RTCRtp接收机事件映射_:RTCRtpReceiverEventMap, 类型:type, 侦听器:listener, RTCRtp接收机_:RTCRtpReceiver, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 RTCRtp接收机事件映射_>(类型: K, 侦听器: (本体: RTCRtp接收机_, ev: RTCRtp接收机事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 RTCRtp接收机_: {

    //@@{ 原型:prototype, RTCRtp接收机_:RTCRtpReceiver }
    原型: RTCRtp接收机_;

    //@@{ 传输:transport, RTCDtls传输_:RTCDtlsTransport, RTCSrtpsd传输_:RTCSrtpSdesTransport, 种类:kind, rtcp传输:rtcpTransport, RTCRtp接收机_:RTCRtpReceiver }
    新建(传输: RTCDtls传输_ | RTCSrtpsd传输_, 种类: 文字, rtcp传输?: RTCDtls传输_): RTCRtp接收机_;

    //@@{ 取功能:getCapabilities, 种类:kind, RTCRtp功能_:RTCRtpCapabilities }
    取功能(种类?: 文字): RTCRtp功能_;

};

//@@{ RTCRtp发送事件映射_:RTCRtpSenderEventMap }
接口 RTCRtp发送事件映射_ {

    //@@{ "错误":"error", 事件_:Event }
    "错误": 事件_;

    //@@{ "ssrc冲突":"ssrcconflict", RTCSsrc冲突事件_:RTCSsrcConflictEvent }
    "ssrc冲突": RTCSsrc冲突事件_;

}

//@@{ RTCRtp发送方:RTCRtpSender, RTC统计数据提供者_:RTCStatsProvider }
接口 RTCRtp发送方 扩展 RTC统计数据提供者_ {

    //@@{ 正在错误:onerror, RTCRtp发送方:RTCRtpSender, 事件_:Event }
    正在错误: ((本体: RTCRtp发送方, ev: 事件_) => 任意) | 空值;

    //@@{ 正在ssrc冲突:onssrcconflict, RTCRtp发送方:RTCRtpSender, RTCSsrc冲突事件_:RTCSsrcConflictEvent }
    正在ssrc冲突: ((本体: RTCRtp发送方, ev: RTCSsrc冲突事件_) => 任意) | 空值;

    //@@{ rtcp传输:rtcpTransport, RTCDtls传输_:RTCDtlsTransport }
    只读 rtcp传输: RTCDtls传输_;

    //@@{ 轨道:track, 媒体流轨道_:MediaStreamTrack }
    只读 轨道: 媒体流轨道_;

    //@@{ 传输:transport, RTCDtls传输_:RTCDtlsTransport, RTCSrtpsd传输_:RTCSrtpSdesTransport }
    只读 传输: RTCDtls传输_ | RTCSrtpsd传输_;

    //@@{ 发送:send, 参数:parameters, RTCRtp参数_:RTCRtpParameters }
    发送(参数: RTCRtp参数_): 无值;

    //@@{ 置轨道:setTrack, 轨道:track, 媒体流轨道_:MediaStreamTrack }
    置轨道(轨道: 媒体流轨道_): 无值;

    //@@{ 置传输:setTransport, 传输:transport, RTCDtls传输_:RTCDtlsTransport, RTCSrtpsd传输_:RTCSrtpSdesTransport, rtcp传输:rtcpTransport }
    置传输(传输: RTCDtls传输_ | RTCSrtpsd传输_, rtcp传输?: RTCDtls传输_): 无值;

    //@@{ 停止:stop }
    停止(): 无值;

    //@@{ 添加事件监听器:addEventListener, RTCRtp发送事件映射_:RTCRtpSenderEventMap, 类型:type, 侦听器:listener, RTCRtp发送方:RTCRtpSender, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 RTCRtp发送事件映射_>(类型: K, 侦听器: (本体: RTCRtp发送方, ev: RTCRtp发送事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

//@@{ RTCRtp发送方_:RTCRtpSender }
声明 值量 RTCRtp发送方_: {

    //@@{ 原型:prototype, RTCRtp发送方:RTCRtpSender }
    原型: RTCRtp发送方;

    //@@{ 轨道:track, 媒体流轨道_:MediaStreamTrack, 传输:transport, RTCDtls传输_:RTCDtlsTransport, RTCSrtpsd传输_:RTCSrtpSdesTransport, rtcp传输:rtcpTransport, RTCRtp发送方:RTCRtpSender }
    新建(轨道: 媒体流轨道_, 传输: RTCDtls传输_ | RTCSrtpsd传输_, rtcp传输?: RTCDtls传输_): RTCRtp发送方;

    //@@{ 取功能:getCapabilities, 种类:kind, RTCRtp功能_:RTCRtpCapabilities }
    取功能(种类?: 文字): RTCRtp功能_;

};

//@@{ RTC会话描述_:RTCSessionDescription }
接口 RTC会话描述_ {

    sdp: 文字 | 空值;

    //@@{ 类型:type, RTCSdp类型_:RTCSdpType }
    类型: RTCSdp类型_ | 空值;

    //@@{ 转为JSON:toJSON }
    转为JSON(): 任意;

}

声明 值量 RTC会话描述_: {

    //@@{ 原型:prototype, RTC会话描述_:RTCSessionDescription }
    原型: RTC会话描述_;

    //@@{ 描述初始化词典:descriptionInitDict, RTC会话描述初始化_:RTCSessionDescriptionInit, RTC会话描述_:RTCSessionDescription }
    新建(描述初始化词典?: RTC会话描述初始化_): RTC会话描述_;

};

//@@{ RTCSrtpSdes传输事件映射_:RTCSrtpSdesTransportEventMap }
接口 RTCSrtpSdes传输事件映射_ {

    //@@{ "错误":"error", 事件_:Event }
    "错误": 事件_;

}

//@@{ RTCSrtpsd传输_:RTCSrtpSdesTransport, 事件目标_:EventTarget }
接口 RTCSrtpsd传输_ 扩展 事件目标_ {

    //@@{ 正在错误:onerror, RTCSrtpsd传输_:RTCSrtpSdesTransport, 事件_:Event }
    正在错误: ((本体: RTCSrtpsd传输_, ev: 事件_) => 任意) | 空值;

    //@@{ 传输:transport, RTCIce传输_:RTCIceTransport }
    只读 传输: RTCIce传输_;

    //@@{ 添加事件监听器:addEventListener, RTCSrtpSdes传输事件映射_:RTCSrtpSdesTransportEventMap, 类型:type, 侦听器:listener, RTCSrtpsd传输_:RTCSrtpSdesTransport, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 RTCSrtpSdes传输事件映射_>(类型: K, 侦听器: (本体: RTCSrtpsd传输_, ev: RTCSrtpSdes传输事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 RTCSrtpsd传输_: {

    //@@{ 原型:prototype, RTCSrtpsd传输_:RTCSrtpSdesTransport }
    原型: RTCSrtpsd传输_;

    //@@{ 传输:transport, RTCIce传输_:RTCIceTransport, 加密参数:encryptParameters, RTCSrtpsd参数_:RTCSrtpSdesParameters, 解密参数:decryptParameters, RTCSrtpsd传输_:RTCSrtpSdesTransport }
    新建(传输: RTCIce传输_, 加密参数: RTCSrtpsd参数_, 解密参数: RTCSrtpsd参数_): RTCSrtpsd传输_;

    //@@{ 取本地参数:getLocalParameters, RTCSrtpsd参数_:RTCSrtpSdesParameters }
    取本地参数(): RTCSrtpsd参数_[];

};

//@@{ RTCSsrc冲突事件_:RTCSsrcConflictEvent, 事件_:Event }
接口 RTCSsrc冲突事件_ 扩展 事件_ {

    只读 ssrc: 数字;

}

声明 值量 RTCSsrc冲突事件_: {

    //@@{ 原型:prototype, RTCSsrc冲突事件_:RTCSsrcConflictEvent }
    原型: RTCSsrc冲突事件_;

    //@@{ RTCSsrc冲突事件_:RTCSsrcConflictEvent }
    新建(): RTCSsrc冲突事件_;

};

//@@{ RTC统计数据提供者_:RTCStatsProvider, 事件目标_:EventTarget }
接口 RTC统计数据提供者_ 扩展 事件目标_ {

    //@@{ 取统计数据:getStats, 预设_:Promise, RTC统计报告_:RTCStatsReport }
    取统计数据(): 预设_<RTC统计报告_>;

    //@@{ ms取统计数据:msGetStats, 预设_:Promise, RTC统计报告_:RTCStatsReport }
    ms取统计数据(): 预设_<RTC统计报告_>;

}

声明 值量 RTC统计数据提供者_: {

    //@@{ 原型:prototype, RTC统计数据提供者_:RTCStatsProvider }
    原型: RTC统计数据提供者_;

    //@@{ RTC统计数据提供者_:RTCStatsProvider }
    新建(): RTC统计数据提供者_;

};

//@@{ 作用域凭据_:ScopedCredential }
接口 作用域凭据_ {

    //@@{ 数组缓冲区_:ArrayBuffer }
    只读 id: 数组缓冲区_;

    //@@{ 类型:type, 作用域凭证类型_:ScopedCredentialType }
    只读 类型: 作用域凭证类型_;

}

声明 值量 作用域凭据_: {

    //@@{ 原型:prototype, 作用域凭据_:ScopedCredential }
    原型: 作用域凭据_;

    //@@{ 作用域凭据_:ScopedCredential }
    新建(): 作用域凭据_;

};

//@@{ 作用域凭据信息_:ScopedCredentialInfo }
接口 作用域凭据信息_ {

    //@@{ 凭证:credential, 作用域凭据_:ScopedCredential }
    只读 凭证: 作用域凭据_;

    //@@{ 公钥:publicKey, 加密密钥_:CryptoKey }
    只读 公钥: 加密密钥_;

}

声明 值量 作用域凭据信息_: {

    //@@{ 原型:prototype, 作用域凭据信息_:ScopedCredentialInfo }
    原型: 作用域凭据信息_;

    //@@{ 作用域凭据信息_:ScopedCredentialInfo }
    新建(): 作用域凭据信息_;

};

//@@{ 屏幕事件映射_:ScreenEventMap }
接口 屏幕事件映射_ {

    //@@{ "MS方向改变":"MSOrientationChange", 事件_:Event }
    "MS方向改变": 事件_;

}

//@@{ 屏幕_:Screen, 事件目标_:EventTarget }
接口 屏幕_ 扩展 事件目标_ {

    //@@{ 有效高度:availHeight }
    只读 有效高度: 数字;

    //@@{ 有效宽度:availWidth }
    只读 有效宽度: 数字;

    //@@{ 深度缓冲:bufferDepth }
    深度缓冲: 数字;

    //@@{ 颜色深度:colorDepth }
    只读 颜色深度: 数字;

    //@@{ 设备XDPI:deviceXDPI }
    只读 设备XDPI: 数字;

    //@@{ 设备YDPI:deviceYDPI }
    只读 设备YDPI: 数字;

    //@@{ 字体平滑启用:fontSmoothingEnabled }
    只读 字体平滑启用: 真假;

    //@@{ 高度:height }
    只读 高度: 数字;

    //@@{ 逻辑XDPI:logicalXDPI }
    只读 逻辑XDPI: 数字;

    //@@{ 逻辑YDPI:logicalYDPI }
    只读 逻辑YDPI: 数字;

    //@@{ ms方向:msOrientation }
    只读 ms方向: 文字;

    //@@{ 正在MS方向改变:onmsorientationchange, 屏幕_:Screen, 事件_:Event }
    正在MS方向改变: (本体: 屏幕_, ev: 事件_) => 任意;

    //@@{ 像素深度:pixelDepth }
    只读 像素深度: 数字;

    //@@{ 系统XDPI:systemXDPI }
    只读 系统XDPI: 数字;

    //@@{ 系统YDPI:systemYDPI }
    只读 系统YDPI: 数字;

    //@@{ 宽度:width }
    只读 宽度: 数字;

    //@@{ ms锁方向:msLockOrientation, 方向:orientations }
    ms锁方向(方向: 文字 | 文字[]): 真假;

    //@@{ ms解锁方向:msUnlockOrientation }
    ms解锁方向(): 无值;

    //@@{ 添加事件监听器:addEventListener, 屏幕事件映射_:ScreenEventMap, 类型:type, 侦听器:listener, 屏幕_:Screen, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 屏幕事件映射_>(类型: K, 侦听器: (本体: 屏幕_, ev: 屏幕事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 屏幕_: {

    //@@{ 原型:prototype, 屏幕_:Screen }
    原型: 屏幕_;

    //@@{ 屏幕_:Screen }
    新建(): 屏幕_;

};

//@@{ 脚本通知事件_:ScriptNotifyEvent, 事件_:Event }
接口 脚本通知事件_ 扩展 事件_ {

    //@@{ 调用Uri:callingUri }
    只读 调用Uri: 文字;

    //@@{ 值:value }
    只读 值: 文字;

}

声明 值量 脚本通知事件_: {

    //@@{ 原型:prototype, 脚本通知事件_:ScriptNotifyEvent }
    原型: 脚本通知事件_;

    //@@{ 脚本通知事件_:ScriptNotifyEvent }
    新建(): 脚本通知事件_;

};

//@@{ 脚本处理器节点事件映射_:ScriptProcessorNodeEventMap }
接口 脚本处理器节点事件映射_ {

    //@@{ "音频处理":"audioprocess", 音频处理事件_:AudioProcessingEvent }
    "音频处理": 音频处理事件_;

}

//@@{ 脚本处理器节点_:ScriptProcessorNode, 音频节点_:AudioNode }
接口 脚本处理器节点_ 扩展 音频节点_ {

    //@@{ 缓冲区大小:bufferSize }
    只读 缓冲区大小: 数字;

    //@@{ 正在音频处理:onaudioprocess, 脚本处理器节点_:ScriptProcessorNode, 音频处理事件_:AudioProcessingEvent }
    正在音频处理: (本体: 脚本处理器节点_, ev: 音频处理事件_) => 任意;

    //@@{ 添加事件监听器:addEventListener, 脚本处理器节点事件映射_:ScriptProcessorNodeEventMap, 类型:type, 侦听器:listener, 脚本处理器节点_:ScriptProcessorNode, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 脚本处理器节点事件映射_>(类型: K, 侦听器: (本体: 脚本处理器节点_, ev: 脚本处理器节点事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 脚本处理器节点_: {

    //@@{ 原型:prototype, 脚本处理器节点_:ScriptProcessorNode }
    原型: 脚本处理器节点_;

    //@@{ 脚本处理器节点_:ScriptProcessorNode }
    新建(): 脚本处理器节点_;

};

//@@{ 选择的_:Selection }
接口 选择的_ {

    //@@{ 节点_:Node }
    只读 anchorNode: 节点_;

    只读 anchorOffset: 数字;

    //@@{ 节点_:Node }
    只读 baseNode: 节点_;

    只读 baseOffset: 数字;

    //@@{ 节点_:Node }
    只读 extentNode: 节点_;

    只读 extentOffset: 数字;

    //@@{ 节点_:Node }
    只读 focusNode: 节点_;

    只读 focusOffset: 数字;

    只读 isCollapsed: 真假;

    只读 rangeCount: 数字;

    只读 type: 文字;

    //@@{ 范围_:Range }
    addRange(range: 范围_): 无值;

    //@@{ 节点_:Node }
    collapse(parentNode: 节点_, offset: 数字): 无值;

    collapseToEnd(): 无值;

    collapseToStart(): 无值;

    //@@{ 节点_:Node }
    containsNode(node: 节点_, partlyContained: 真假): 真假;

    deleteFromDocument(): 无值;

    empty(): 无值;

    //@@{ 节点_:Node }
    extend(newNode: 节点_, offset: 数字): 无值;

    //@@{ 范围_:Range }
    getRangeAt(index: 数字): 范围_;

    removeAllRanges(): 无值;

    //@@{ 范围_:Range }
    removeRange(range: 范围_): 无值;

    //@@{ 节点_:Node }
    selectAllChildren(parentNode: 节点_): 无值;

    //@@{ 节点_:Node }
    setBaseAndExtent(baseNode: 节点_, baseOffset: 数字, extentNode: 节点_, extentOffset: 数字): 无值;

    //@@{ 节点_:Node }
    setPosition(parentNode: 节点_, offset: 数字): 无值;

    toString(): 文字;

}

声明 值量 选择的_: {

    //@@{ 原型:prototype, 选择的_:Selection }
    原型: 选择的_;

    //@@{ 选择的_:Selection }
    新建(): 选择的_;

};

//@@{ 服务工人事件映射_:ServiceWorkerEventMap, 抽象的工人事件映射_:AbstractWorkerEventMap }
接口 服务工人事件映射_ 扩展 抽象的工人事件映射_ {

    //@@{ "状态改变":"statechange", 事件_:Event }
    "状态改变": 事件_;

}

//@@{ 服务工人_:ServiceWorker, 事件目标_:EventTarget, 抽象的工人_:AbstractWorker }
接口 服务工人_ 扩展 事件目标_, 抽象的工人_ {

    //@@{ 正在状态改变:onstatechange, 服务工人_:ServiceWorker, 事件_:Event }
    正在状态改变: (本体: 服务工人_, ev: 事件_) => 任意;

    //@@{ 脚本URL:scriptURL, USV字符串:USVString }
    只读 脚本URL: USV字符串;

    //@@{ 状态:state, 服务工作状态_:ServiceWorkerState }
    只读 状态: 服务工作状态_;

    //@@{ 发布消息:postMessage, 消息:message, 转移:transfer }
    发布消息(消息: 任意, 转移?: 任意[]): 无值;

    //@@{ 添加事件监听器:addEventListener, 服务工人事件映射_:ServiceWorkerEventMap, 类型:type, 侦听器:listener, 服务工人_:ServiceWorker, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 服务工人事件映射_>(类型: K, 侦听器: (本体: 服务工人_, ev: 服务工人事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 服务工人_: {

    //@@{ 原型:prototype, 服务工人_:ServiceWorker }
    原型: 服务工人_;

    //@@{ 服务工人_:ServiceWorker }
    新建(): 服务工人_;

};

//@@{ 服务人员容器事件映射_:ServiceWorkerContainerEventMap }
接口 服务人员容器事件映射_ {

    //@@{ "控制器改变":"controllerchange", 事件_:Event }
    "控制器改变": 事件_;

    //@@{ "消息":"message", 服务工人消息事件_:ServiceWorkerMessageEvent }
    "消息": 服务工人消息事件_;

}

//@@{ 服务工人容器_:ServiceWorkerContainer, 事件目标_:EventTarget }
接口 服务工人容器_ 扩展 事件目标_ {

    //@@{ 控制器:controller, 服务工人_:ServiceWorker }
    只读 控制器: 服务工人_ | 空值;

    //@@{ 正在控制器改变:oncontrollerchange, 服务工人容器_:ServiceWorkerContainer, 事件_:Event }
    正在控制器改变: (本体: 服务工人容器_, ev: 事件_) => 任意;

    //@@{ 正在消息:onmessage, 服务工人容器_:ServiceWorkerContainer, 服务工人消息事件_:ServiceWorkerMessageEvent }
    正在消息: (本体: 服务工人容器_, ev: 服务工人消息事件_) => 任意;

    //@@{ 准备好了:ready, 预设_:Promise, 服务人员注册_:ServiceWorkerRegistration }
    只读 准备好了: 预设_<服务人员注册_>;

    //@@{ 取注册:getRegistration, 预设_:Promise, 服务人员注册_:ServiceWorkerRegistration }
    取注册(): 预设_<服务人员注册_ | 未定>;

    //@@{ 取注册组:getRegistrations, 预设_:Promise, 服务人员注册_:ServiceWorkerRegistration }
    取注册组(): 预设_<服务人员注册_[]>;

    //@@{ 注册:register, 脚本URL:scriptURL, USV字符串:USVString, 选项:options, 注册选项_:RegistrationOptions, 预设_:Promise, 服务人员注册_:ServiceWorkerRegistration }
    注册(脚本URL: USV字符串, 选项?: 注册选项_): 预设_<服务人员注册_>;

    //@@{ 添加事件监听器:addEventListener, 服务人员容器事件映射_:ServiceWorkerContainerEventMap, 类型:type, 侦听器:listener, 服务工人容器_:ServiceWorkerContainer, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 服务人员容器事件映射_>(类型: K, 侦听器: (本体: 服务工人容器_, ev: 服务人员容器事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 服务工人容器_: {

    //@@{ 原型:prototype, 服务工人容器_:ServiceWorkerContainer }
    原型: 服务工人容器_;

    //@@{ 服务工人容器_:ServiceWorkerContainer }
    新建(): 服务工人容器_;

};

//@@{ 服务工人消息事件_:ServiceWorkerMessageEvent, 事件_:Event }
接口 服务工人消息事件_ 扩展 事件_ {

    //@@{ 数据:data }
    只读 数据: 任意;

    //@@{ 最后事件Id:lastEventId }
    只读 最后事件Id: 文字;

    //@@{ 起点:origin }
    只读 起点: 文字;

    //@@{ 端口:ports, 消息端口_:MessagePort }
    只读 端口: 消息端口_[] | 空值;

    //@@{ 源:source, 服务工人_:ServiceWorker, 消息端口_:MessagePort }
    只读 源: 服务工人_ | 消息端口_ | 空值;

}

声明 值量 服务工人消息事件_: {

    //@@{ 原型:prototype, 服务工人消息事件_:ServiceWorkerMessageEvent }
    原型: 服务工人消息事件_;

    //@@{ 类型:type, 事件初始化词典:eventInitDict, 服务工人消息事件初始化_:ServiceWorkerMessageEventInit, 服务工人消息事件_:ServiceWorkerMessageEvent }
    新建(类型: 文字, 事件初始化词典?: 服务工人消息事件初始化_): 服务工人消息事件_;

};

//@@{ 服务人员注册事件映射_:ServiceWorkerRegistrationEventMap }
接口 服务人员注册事件映射_ {

    //@@{ "发现更新":"updatefound", 事件_:Event }
    "发现更新": 事件_;

}

//@@{ 服务人员注册_:ServiceWorkerRegistration, 事件目标_:EventTarget }
接口 服务人员注册_ 扩展 事件目标_ {

    //@@{ 活动:active, 服务工人_:ServiceWorker }
    只读 活动: 服务工人_ | 空值;

    //@@{ 安装:installing, 服务工人_:ServiceWorker }
    只读 安装: 服务工人_ | 空值;

    //@@{ 正在发现更新:onupdatefound, 服务人员注册_:ServiceWorkerRegistration, 事件_:Event }
    正在发现更新: (本体: 服务人员注册_, ev: 事件_) => 任意;

    //@@{ 压入管理者:pushManager, 压入管理器_:PushManager }
    只读 压入管理者: 压入管理器_;

    //@@{ 范围:scope, USV字符串:USVString }
    只读 范围: USV字符串;

    //@@{ 同步:sync, 同步管理器_:SyncManager }
    只读 同步: 同步管理器_;

    //@@{ 等待:waiting, 服务工人_:ServiceWorker }
    只读 等待: 服务工人_ | 空值;

    //@@{ 取通知:getNotifications, 过滤器:filter, 取通知选项_:GetNotificationOptions, 预设_:Promise, 通知_:Notification }
    取通知(过滤器?: 取通知选项_): 预设_<通知_[]>;

    //@@{ 显示通知:showNotification, 标题:title, 选项:options, 通知选项_:NotificationOptions, 预设_:Promise }
    显示通知(标题: 文字, 选项?: 通知选项_): 预设_<无值>;

    //@@{ 注销:unregister, 预设_:Promise }
    注销(): 预设_<真假>;

    //@@{ 更新:update, 预设_:Promise }
    更新(): 预设_<无值>;

    //@@{ 添加事件监听器:addEventListener, 服务人员注册事件映射_:ServiceWorkerRegistrationEventMap, 类型:type, 侦听器:listener, 服务人员注册_:ServiceWorkerRegistration, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 服务人员注册事件映射_>(类型: K, 侦听器: (本体: 服务人员注册_, ev: 服务人员注册事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 服务人员注册_: {

    //@@{ 原型:prototype, 服务人员注册_:ServiceWorkerRegistration }
    原型: 服务人员注册_;

    //@@{ 服务人员注册_:ServiceWorkerRegistration }
    新建(): 服务人员注册_;

};

//@@{ 源缓冲区_:SourceBuffer, 事件目标_:EventTarget }
接口 源缓冲区_ 扩展 事件目标_ {

    //@@{ 附加窗口结束:appendWindowEnd }
    附加窗口结束: 数字;

    //@@{ 附加窗口开始:appendWindowStart }
    附加窗口开始: 数字;

    //@@{ 音频轨道:audioTracks, 音频轨道列表_:AudioTrackList }
    只读 音频轨道: 音频轨道列表_;

    //@@{ 缓冲:buffered, 时间范围_:TimeRanges }
    只读 缓冲: 时间范围_;

    //@@{ 模式:mode, 附加模式_:AppendMode }
    模式: 附加模式_;

    //@@{ 时间戳偏移:timestampOffset }
    时间戳偏移: 数字;

    //@@{ 更新:updating }
    只读 更新: 真假;

    //@@{ 视频轨道:videoTracks, 视频轨道列表_:VideoTrackList }
    只读 视频轨道: 视频轨道列表_;

    //@@{ 终止:abort }
    终止(): 无值;

    //@@{ 附加缓冲:appendBuffer, 数据:data, 数组缓冲区_:ArrayBuffer, 数组缓冲区视图_:ArrayBufferView }
    附加缓冲(数据: 数组缓冲区_ | 数组缓冲区视图_): 无值;

    //@@{ 附加流:appendStream, 流:stream, MS流_:MSStream, 最大尺寸:maxSize }
    附加流(流: MS流_, 最大尺寸?: 数字): 无值;

    //@@{ 删除:remove, 开始:start, 结束:end }
    删除(开始: 数字, 结束: 数字): 无值;

}

声明 值量 源缓冲区_: {

    //@@{ 原型:prototype, 源缓冲区_:SourceBuffer }
    原型: 源缓冲区_;

    //@@{ 源缓冲区_:SourceBuffer }
    新建(): 源缓冲区_;

};

//@@{ 源缓冲区列表_:SourceBufferList, 事件目标_:EventTarget }
接口 源缓冲区列表_ 扩展 事件目标_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 项目:item, 索引:index, 源缓冲区_:SourceBuffer }
    项目(索引: 数字): 源缓冲区_;

    //@@{ 索引:index, 源缓冲区_:SourceBuffer }
    [索引: 数字]: 源缓冲区_;

}

声明 值量 源缓冲区列表_: {

    //@@{ 原型:prototype, 源缓冲区列表_:SourceBufferList }
    原型: 源缓冲区列表_;

    //@@{ 源缓冲区列表_:SourceBufferList }
    新建(): 源缓冲区列表_;

};

//@@{ 语音合成事件映射_:SpeechSynthesisEventMap }
接口 语音合成事件映射_ {

    //@@{ "声音改变":"voiceschanged", 事件_:Event }
    "声音改变": 事件_;

}

//@@{ 语音合成_:SpeechSynthesis, 事件目标_:EventTarget }
接口 语音合成_ 扩展 事件目标_ {

    //@@{ 正在声音改变:onvoiceschanged, 语音合成_:SpeechSynthesis, 事件_:Event }
    正在声音改变: (本体: 语音合成_, ev: 事件_) => 任意;

    //@@{ 停顿:paused }
    只读 停顿: 真假;

    //@@{ 等待:pending }
    只读 等待: 真假;

    //@@{ 说话中:speaking }
    只读 说话中: 真假;

    //@@{ 取消:cancel }
    取消(): 无值;

    //@@{ 语音合成声音_:SpeechSynthesisVoice }
    getVoices(): 语音合成声音_[];

    //@@{ 暂停:pause }
    暂停(): 无值;

    //@@{ 继续:resume }
    继续(): 无值;

    //@@{ 说话:speak, 话语:utterance, 语音合成话语_:SpeechSynthesisUtterance }
    说话(话语: 语音合成话语_): 无值;

    //@@{ 添加事件监听器:addEventListener, 语音合成事件映射_:SpeechSynthesisEventMap, 类型:type, 侦听器:listener, 语音合成_:SpeechSynthesis, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 语音合成事件映射_>(类型: K, 侦听器: (本体: 语音合成_, ev: 语音合成事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 语音合成_: {

    //@@{ 原型:prototype, 语音合成_:SpeechSynthesis }
    原型: 语音合成_;

    //@@{ 语音合成_:SpeechSynthesis }
    新建(): 语音合成_;

};

//@@{ 语音合成事件_:SpeechSynthesisEvent, 事件_:Event }
接口 语音合成事件_ 扩展 事件_ {

    //@@{ 字符索引:charIndex }
    只读 字符索引: 数字;

    //@@{ 运行时间:elapsedTime }
    只读 运行时间: 数字;

    //@@{ 名字:name }
    只读 名字: 文字;

    //@@{ 话语:utterance, 语音合成话语_:SpeechSynthesisUtterance }
    只读 话语: 语音合成话语_ | 空值;

}

声明 值量 语音合成事件_: {

    //@@{ 原型:prototype, 语音合成事件_:SpeechSynthesisEvent }
    原型: 语音合成事件_;

    //@@{ 类型:type, 事件初始化词典:eventInitDict, 语音合成事件初始化_:SpeechSynthesisEventInit, 语音合成事件_:SpeechSynthesisEvent }
    新建(类型: 文字, 事件初始化词典?: 语音合成事件初始化_): 语音合成事件_;

};

//@@{ 语音合成话语事件映射_:SpeechSynthesisUtteranceEventMap }
接口 语音合成话语事件映射_ {

    //@@{ "边界":"boundary", 事件_:Event }
    "边界": 事件_;

    //@@{ "结束":"end", 事件_:Event }
    "结束": 事件_;

    //@@{ "错误":"error", 事件_:Event }
    "错误": 事件_;

    //@@{ "标记出":"mark", 事件_:Event }
    "标记出": 事件_;

    //@@{ "暂停":"pause", 事件_:Event }
    "暂停": 事件_;

    //@@{ "继续":"resume", 事件_:Event }
    "继续": 事件_;

    //@@{ "开始":"start", 事件_:Event }
    "开始": 事件_;

}

//@@{ 语音合成话语_:SpeechSynthesisUtterance, 事件目标_:EventTarget }
接口 语音合成话语_ 扩展 事件目标_ {

    //@@{ 语言:lang }
    语言: 文字;

    //@@{ 正在编辑:onboundary, 语音合成话语_:SpeechSynthesisUtterance, 事件_:Event }
    正在编辑: (本体: 语音合成话语_, ev: 事件_) => 任意;

    //@@{ 正在结束:onend, 语音合成话语_:SpeechSynthesisUtterance, 事件_:Event }
    正在结束: (本体: 语音合成话语_, ev: 事件_) => 任意;

    //@@{ 正在错误:onerror, 语音合成话语_:SpeechSynthesisUtterance, 事件_:Event }
    正在错误: (本体: 语音合成话语_, ev: 事件_) => 任意;

    //@@{ 正在标记:onmark, 语音合成话语_:SpeechSynthesisUtterance, 事件_:Event }
    正在标记: (本体: 语音合成话语_, ev: 事件_) => 任意;

    //@@{ 正在暂停:onpause, 语音合成话语_:SpeechSynthesisUtterance, 事件_:Event }
    正在暂停: (本体: 语音合成话语_, ev: 事件_) => 任意;

    //@@{ 正在继续:onresume, 语音合成话语_:SpeechSynthesisUtterance, 事件_:Event }
    正在继续: (本体: 语音合成话语_, ev: 事件_) => 任意;

    //@@{ 正在开始:onstart, 语音合成话语_:SpeechSynthesisUtterance, 事件_:Event }
    正在开始: (本体: 语音合成话语_, ev: 事件_) => 任意;

    //@@{ 球场:pitch }
    球场: 数字;

    //@@{ 比率:rate }
    比率: 数字;

    //@@{ 文本:text }
    文本: 文字;

    //@@{ 声音:voice, 语音合成声音_:SpeechSynthesisVoice }
    声音: 语音合成声音_;

    //@@{ 音量:volume }
    音量: 数字;

    //@@{ 添加事件监听器:addEventListener, 语音合成话语事件映射_:SpeechSynthesisUtteranceEventMap, 类型:type, 侦听器:listener, 语音合成话语_:SpeechSynthesisUtterance, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 语音合成话语事件映射_>(类型: K, 侦听器: (本体: 语音合成话语_, ev: 语音合成话语事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 语音合成话语_: {

    //@@{ 原型:prototype, 语音合成话语_:SpeechSynthesisUtterance }
    原型: 语音合成话语_;

    //@@{ 文本:text, 语音合成话语_:SpeechSynthesisUtterance }
    新建(文本?: 文字): 语音合成话语_;

};

//@@{ 语音合成声音_:SpeechSynthesisVoice }
接口 语音合成声音_ {

    //@@{ 默认:default }
    只读 默认: 真假;

    //@@{ 语言:lang }
    只读 语言: 文字;

    //@@{ 本地服务:localService }
    只读 本地服务: 真假;

    //@@{ 名字:name }
    只读 名字: 文字;

    //@@{ 声音URI:voiceURI }
    只读 声音URI: 文字;

}

声明 值量 语音合成声音_: {

    //@@{ 原型:prototype, 语音合成声音_:SpeechSynthesisVoice }
    原型: 语音合成声音_;

    //@@{ 语音合成声音_:SpeechSynthesisVoice }
    新建(): 语音合成声音_;

};

//@@{ 立体声图像节点_:StereoPannerNode, 音频节点_:AudioNode }
接口 立体声图像节点_ 扩展 音频节点_ {

    //@@{ 音频:pan, 音频参数_:AudioParam }
    只读 音频: 音频参数_;

}

声明 值量 立体声图像节点_: {

    //@@{ 原型:prototype, 立体声图像节点_:StereoPannerNode }
    原型: 立体声图像节点_;

    //@@{ 立体声图像节点_:StereoPannerNode }
    新建(): 立体声图像节点_;

};

//@@{ 存储_:Storage }
接口 存储_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 清除:clear }
    清除(): 无值;

    //@@{ 取项目:getItem, 键:key }
    取项目(键: 文字): 文字 | 空值;

    //@@{ 键:key, 索引:index }
    键(索引: 数字): 文字 | 空值;

    //@@{ 删除项目:removeItem, 键:key }
    删除项目(键: 文字): 无值;

    //@@{ 置项目:setItem, 键:key, 数据:data }
    置项目(键: 文字, 数据: 文字): 无值;

    //@@{ 键:key }
    [键: 文字]: 任意;

    //@@{ 索引:index }
    [索引: 数字]: 文字;

}

声明 值量 存储_: {

    //@@{ 原型:prototype, 存储_:Storage }
    原型: 存储_;

    //@@{ 存储_:Storage }
    新建(): 存储_;

};

//@@{ 存储事件_:StorageEvent, 事件_:Event }
接口 存储事件_ 扩展 事件_ {

    只读 url: 文字;

    //@@{ 键:key }
    键?: 文字;

    //@@{ 旧值:oldValue }
    旧值?: 文字;

    //@@{ 新值:newValue }
    新值?: 文字;

    //@@{ 存储区域:storageArea, 存储_:Storage }
    存储区域?: 存储_;

}

声明 值量 存储事件_: {

    //@@{ 原型:prototype, 存储事件_:StorageEvent }
    原型: 存储事件_;

    //@@{ 类型:type, 事件初始化词典:eventInitDict, 存储事件初始化_:StorageEventInit, 存储事件_:StorageEvent }
    新建 (类型: 文字, 事件初始化词典?: 存储事件初始化_): 存储事件_;

};

//@@{ 样式媒体_:StyleMedia }
接口 样式媒体_ {

    //@@{ 类型:type }
    只读 类型: 文字;

    //@@{ 匹配媒介:matchMedium, 媒体查询:mediaquery }
    匹配媒介(媒体查询: 文字): 真假;

}

声明 值量 样式媒体_: {

    //@@{ 原型:prototype, 样式媒体_:StyleMedia }
    原型: 样式媒体_;

    //@@{ 样式媒体_:StyleMedia }
    新建(): 样式媒体_;

};

//@@{ 样式表_:StyleSheet }
接口 样式表_ {

    //@@{ 禁用:disabled }
    禁用: 真假;

    //@@{ 目标URL:href }
    只读 目标URL: 文字;

    //@@{ 媒体:media, 媒体列表_:MediaList }
    只读 媒体: 媒体列表_;

    //@@{ 主节点:ownerNode, 节点_:Node }
    只读 主节点: 节点_;

    //@@{ 父样式表:parentStyleSheet, 样式表_:StyleSheet }
    只读 父样式表: 样式表_;

    //@@{ 标题:title }
    只读 标题: 文字;

    //@@{ 类型:type }
    只读 类型: 文字;

}

声明 值量 样式表_: {

    //@@{ 原型:prototype, 样式表_:StyleSheet }
    原型: 样式表_;

    //@@{ 样式表_:StyleSheet }
    新建(): 样式表_;

};

//@@{ 样式表列表_:StyleSheetList }
接口 样式表列表_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 项目:item, 索引:index, 样式表_:StyleSheet }
    项目(索引?: 数字): 样式表_;

    //@@{ 索引:index, 样式表_:StyleSheet }
    [索引: 数字]: 样式表_;

}

声明 值量 样式表列表_: {

    //@@{ 原型:prototype, 样式表列表_:StyleSheetList }
    原型: 样式表列表_;

    //@@{ 样式表列表_:StyleSheetList }
    新建(): 样式表列表_;

};

//@@{ 样式表页面列表_:StyleSheetPageList }
接口 样式表页面列表_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 项目:item, 索引:index, CSS页面规则_:CSSPageRule }
    项目(索引: 数字): CSS页面规则_;

    //@@{ 索引:index, CSS页面规则_:CSSPageRule }
    [索引: 数字]: CSS页面规则_;

}

声明 值量 样式表页面列表_: {

    //@@{ 原型:prototype, 样式表页面列表_:StyleSheetPageList }
    原型: 样式表页面列表_;

    //@@{ 样式表页面列表_:StyleSheetPageList }
    新建(): 样式表页面列表_;

};

//@@{ 加密原语_:SubtleCrypto }
接口 加密原语_ {

    //@@{ 解密:decrypt, 算法:algorithm, RsaOaep参数_:RsaOaepParams, AesCtr参数_:AesCtrParams, AesCbc参数_:AesCbcParams, AesCmac参数组_:AesCmacParams, AesGcm参数_:AesGcmParams, AesCbf参数组_:AesCfbParams, 键:key, 加密密钥_:CryptoKey, 数据:data, 缓冲源_:BufferSource, 预设等_:PromiseLike, 数组缓冲区_:ArrayBuffer }
    解密(算法: 文字 | RsaOaep参数_ | AesCtr参数_ | AesCbc参数_ | AesCmac参数组_ | AesGcm参数_ | AesCbf参数组_, 键: 加密密钥_, 数据: 缓冲源_): 预设等_<数组缓冲区_>;

    //@@{ 推导位:deriveBits, 算法:algorithm, Ecdh键推导出参数组_:EcdhKeyDeriveParams, Dh键获得参数_:DhKeyDeriveParams, 合并参数_:ConcatParams, HkdfCtr参数_:HkdfCtrParams, Pbkdf2参数_:Pbkdf2Params, 基键:baseKey, 加密密钥_:CryptoKey, 长度:length, 预设等_:PromiseLike, 数组缓冲区_:ArrayBuffer }
    推导位(算法: 文字 | Ecdh键推导出参数组_ | Dh键获得参数_ | 合并参数_ | HkdfCtr参数_ | Pbkdf2参数_, 基键: 加密密钥_, 长度: 数字): 预设等_<数组缓冲区_>;

    //@@{ 推导键:deriveKey, 算法:algorithm, Ecdh键推导出参数组_:EcdhKeyDeriveParams, Dh键获得参数_:DhKeyDeriveParams, 合并参数_:ConcatParams, HkdfCtr参数_:HkdfCtrParams, Pbkdf2参数_:Pbkdf2Params, 基键:baseKey, 加密密钥_:CryptoKey, 派生密钥类型:derivedKeyType, Aes派生的键参数组_:AesDerivedKeyParams, Hmac进口参数_:HmacImportParams, 可推断出的:extractable, 键用法:keyUsages, 预设等_:PromiseLike }
    推导键(算法: 文字 | Ecdh键推导出参数组_ | Dh键获得参数_ | 合并参数_ | HkdfCtr参数_ | Pbkdf2参数_, 基键: 加密密钥_, 派生密钥类型: 文字 | Aes派生的键参数组_ | Hmac进口参数_ | 合并参数_ | HkdfCtr参数_ | Pbkdf2参数_, 可推断出的: 真假, 键用法: 文字[]): 预设等_<加密密钥_>;

    //@@{ 消化:digest, 算法:algorithm, 算法标识符_:AlgorithmIdentifier, 数据:data, 缓冲源_:BufferSource, 预设等_:PromiseLike, 数组缓冲区_:ArrayBuffer }
    消化(算法: 算法标识符_, 数据: 缓冲源_): 预设等_<数组缓冲区_>;

    //@@{ 加密:encrypt, 算法:algorithm, RsaOaep参数_:RsaOaepParams, AesCtr参数_:AesCtrParams, AesCbc参数_:AesCbcParams, AesCmac参数组_:AesCmacParams, AesGcm参数_:AesGcmParams, AesCbf参数组_:AesCfbParams, 键:key, 加密密钥_:CryptoKey, 数据:data, 缓冲源_:BufferSource, 预设等_:PromiseLike, 数组缓冲区_:ArrayBuffer }
    加密(算法: 文字 | RsaOaep参数_ | AesCtr参数_ | AesCbc参数_ | AesCmac参数组_ | AesGcm参数_ | AesCbf参数组_, 键: 加密密钥_, 数据: 缓冲源_): 预设等_<数组缓冲区_>;

    //@@{ 出口键:exportKey, 格式:format, 键:key, 加密密钥_:CryptoKey, 预设等_:PromiseLike, Json网络键_:JsonWebKey }
    出口键(格式: "jwk", 键: 加密密钥_): 预设等_<Json网络键_>;

    //@@{ 格式:format, 键:key, 加密密钥_:CryptoKey, 预设等_:PromiseLike, 数组缓冲区_:ArrayBuffer }
    出口键(格式: "raw" | "pkcs8" | "spki", 键: 加密密钥_): 预设等_<数组缓冲区_>;

    //@@{ 格式:format, 键:key, 加密密钥_:CryptoKey, 预设等_:PromiseLike, Json网络键_:JsonWebKey, 数组缓冲区_:ArrayBuffer }
    出口键(格式: 文字, 键: 加密密钥_): 预设等_<Json网络键_ | 数组缓冲区_>;

    //@@{ 生成密钥:generateKey, 算法:algorithm, 可推断出的:extractable, 键用法:keyUsages, 预设等_:PromiseLike, 加密密钥对_:CryptoKeyPair, 加密密钥_:CryptoKey }
    生成密钥(算法: 文字, 可推断出的: 真假, 键用法: 文字[]): 预设等_<加密密钥对_ | 加密密钥_>;

    //@@{ 算法:algorithm, Rsa哈希键创参数组_:RsaHashedKeyGenParams, Ec键创参数个数_:EcKeyGenParams, DH键创参数组_:DhKeyGenParams, 可推断出的:extractable, 键用法:keyUsages, 预设等_:PromiseLike, 加密密钥对_:CryptoKeyPair }
    生成密钥(算法: Rsa哈希键创参数组_ | Ec键创参数个数_ | DH键创参数组_, 可推断出的: 真假, 键用法: 文字[]): 预设等_<加密密钥对_>;

    //@@{ 算法:algorithm, Aes键创参数组_:AesKeyGenParams, Hmac键创参数组_:HmacKeyGenParams, Pbkdf2参数_:Pbkdf2Params, 可推断出的:extractable, 键用法:keyUsages, 预设等_:PromiseLike, 加密密钥_:CryptoKey }
    生成密钥(算法: Aes键创参数组_ | Hmac键创参数组_ | Pbkdf2参数_, 可推断出的: 真假, 键用法: 文字[]): 预设等_<加密密钥_>;

    //@@{ 导入键:importKey, 格式:format, 键数据:keyData, Json网络键_:JsonWebKey, 算法:algorithm, Rsa散列导入参数_:RsaHashedImportParams, EC键进口参数组_:EcKeyImportParams, Hmac进口参数_:HmacImportParams, Dh进口键参数_:DhImportKeyParams, 可推断出的:extractable, 键用法:keyUsages, 预设等_:PromiseLike, 加密密钥_:CryptoKey }
    导入键(格式: "jwk", 键数据: Json网络键_, 算法: 文字 | Rsa散列导入参数_ | EC键进口参数组_ | Hmac进口参数_ | Dh进口键参数_, 可推断出的: 真假, 键用法: 文字[]): 预设等_<加密密钥_>;

    //@@{ 格式:format, 键数据:keyData, 缓冲源_:BufferSource, 算法:algorithm, Rsa散列导入参数_:RsaHashedImportParams, EC键进口参数组_:EcKeyImportParams, Hmac进口参数_:HmacImportParams, Dh进口键参数_:DhImportKeyParams, 可推断出的:extractable, 键用法:keyUsages, 预设等_:PromiseLike, 加密密钥_:CryptoKey }
    导入键(格式: "raw" | "pkcs8" | "spki", 键数据: 缓冲源_, 算法: 文字 | Rsa散列导入参数_ | EC键进口参数组_ | Hmac进口参数_ | Dh进口键参数_, 可推断出的: 真假, 键用法: 文字[]): 预设等_<加密密钥_>;

    //@@{ 格式:format, 键数据:keyData, Json网络键_:JsonWebKey, 缓冲源_:BufferSource, 算法:algorithm, Rsa散列导入参数_:RsaHashedImportParams, EC键进口参数组_:EcKeyImportParams, Hmac进口参数_:HmacImportParams, Dh进口键参数_:DhImportKeyParams, 可推断出的:extractable, 键用法:keyUsages, 预设等_:PromiseLike, 加密密钥_:CryptoKey }
    导入键(格式: 文字, 键数据: Json网络键_ | 缓冲源_, 算法: 文字 | Rsa散列导入参数_ | EC键进口参数组_ | Hmac进口参数_ | Dh进口键参数_, 可推断出的: 真假, 键用法: 文字[]): 预设等_<加密密钥_>;

    //@@{ 标志:sign, 算法:algorithm, RsaPss参数_:RsaPssParams, Ecdsa参数_:EcdsaParams, AesCmac参数组_:AesCmacParams, 键:key, 加密密钥_:CryptoKey, 数据:data, 缓冲源_:BufferSource, 预设等_:PromiseLike, 数组缓冲区_:ArrayBuffer }
    标志(算法: 文字 | RsaPss参数_ | Ecdsa参数_ | AesCmac参数组_, 键: 加密密钥_, 数据: 缓冲源_): 预设等_<数组缓冲区_>;

    //@@{ 打开钥匙:unwrapKey, 格式:format, 包装键:wrappedKey, 缓冲源_:BufferSource, 要打开的钥匙:unwrappingKey, 加密密钥_:CryptoKey, 打开算法:unwrapAlgorithm, 算法标识符_:AlgorithmIdentifier, 打开键算法:unwrappedKeyAlgorithm, 可推断出的:extractable, 键用法:keyUsages, 预设等_:PromiseLike }
    打开钥匙(格式: 文字, 包装键: 缓冲源_, 要打开的钥匙: 加密密钥_, 打开算法: 算法标识符_, 打开键算法: 算法标识符_, 可推断出的: 真假, 键用法: 文字[]): 预设等_<加密密钥_>;

    //@@{ 验证:verify, 算法:algorithm, RsaPss参数_:RsaPssParams, Ecdsa参数_:EcdsaParams, AesCmac参数组_:AesCmacParams, 键:key, 加密密钥_:CryptoKey, 签名:signature, 缓冲源_:BufferSource, 数据:data, 预设等_:PromiseLike }
    验证(算法: 文字 | RsaPss参数_ | Ecdsa参数_ | AesCmac参数组_, 键: 加密密钥_, 签名: 缓冲源_, 数据: 缓冲源_): 预设等_<真假>;

    //@@{ 包装键:wrapKey, 格式:format, 键:key, 加密密钥_:CryptoKey, 要包装的键:wrappingKey, 包装算法:wrapAlgorithm, 算法标识符_:AlgorithmIdentifier, 预设等_:PromiseLike, 数组缓冲区_:ArrayBuffer }
    包装键(格式: 文字, 键: 加密密钥_, 要包装的键: 加密密钥_, 包装算法: 算法标识符_): 预设等_<数组缓冲区_>;

}

声明 值量 加密原语_: {

    //@@{ 原型:prototype, 加密原语_:SubtleCrypto }
    原型: 加密原语_;

    //@@{ 加密原语_:SubtleCrypto }
    新建(): 加密原语_;

};

//@@{ SVG超链接元素_:SVGAElement, SVG图形元素_:SVGGraphicsElement, SVGURI参考_:SVGURIReference }
接口 SVG超链接元素_ 扩展 SVG图形元素_, SVGURI参考_ {

    //@@{ 目标:target, SVG动画文字_:SVGAnimatedString }
    只读 目标: SVG动画文字_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG超链接元素_:SVGAElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG超链接元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG超链接元素_: {

    //@@{ 原型:prototype, SVG超链接元素_:SVGAElement }
    原型: SVG超链接元素_;

    //@@{ SVG超链接元素_:SVGAElement }
    新建(): SVG超链接元素_;

};

//@@{ SVG角_:SVGAngle }
接口 SVG角_ {

    //@@{ 单位类型:unitType }
    只读 单位类型: 数字;

    //@@{ 值:value }
    值: 数字;

    //@@{ 值转为字符串:valueAsString }
    值转为字符串: 文字;

    //@@{ 值在指定单位:valueInSpecifiedUnits }
    值在指定单位: 数字;

    //@@{ 转换为指定的单位:convertToSpecifiedUnits, 单位类型:unitType }
    转换为指定的单位(单位类型: 数字): 无值;

    //@@{ 新值指定的单位:newValueSpecifiedUnits, 单位类型:unitType, 值在指定单位:valueInSpecifiedUnits }
    新值指定的单位(单位类型: 数字, 值在指定单位: 数字): 无值;

    //@@{ __SVG_角度类型_度__:SVG_ANGLETYPE_DEG }
    只读 __SVG_角度类型_度__: 数字;

    //@@{ __SVG_角度类型_百分比__:SVG_ANGLETYPE_GRAD }
    只读 __SVG_角度类型_百分比__: 数字;

    //@@{ __SVG_角度类型_弧度__:SVG_ANGLETYPE_RAD }
    只读 __SVG_角度类型_弧度__: 数字;

    //@@{ __SVG_角度类型_未知__:SVG_ANGLETYPE_UNKNOWN }
    只读 __SVG_角度类型_未知__: 数字;

    //@@{ __SVG_角度类型_未指定__:SVG_ANGLETYPE_UNSPECIFIED }
    只读 __SVG_角度类型_未指定__: 数字;

}

声明 值量 SVG角_: {

    //@@{ 原型:prototype, SVG角_:SVGAngle }
    原型: SVG角_;

    //@@{ SVG角_:SVGAngle }
    新建(): SVG角_;

    //@@{ __SVG_角度类型_度__:SVG_ANGLETYPE_DEG }
    只读 __SVG_角度类型_度__: 数字;

    //@@{ __SVG_角度类型_百分比__:SVG_ANGLETYPE_GRAD }
    只读 __SVG_角度类型_百分比__: 数字;

    //@@{ __SVG_角度类型_弧度__:SVG_ANGLETYPE_RAD }
    只读 __SVG_角度类型_弧度__: 数字;

    //@@{ __SVG_角度类型_未知__:SVG_ANGLETYPE_UNKNOWN }
    只读 __SVG_角度类型_未知__: 数字;

    //@@{ __SVG_角度类型_未指定__:SVG_ANGLETYPE_UNSPECIFIED }
    只读 __SVG_角度类型_未指定__: 数字;

};

//@@{ SVG动画角_:SVGAnimatedAngle }
接口 SVG动画角_ {

    //@@{ 动画值:animVal, SVG角_:SVGAngle }
    只读 动画值: SVG角_;

    //@@{ 基值:baseVal, SVG角_:SVGAngle }
    只读 基值: SVG角_;

}

声明 值量 SVG动画角_: {

    //@@{ 原型:prototype, SVG动画角_:SVGAnimatedAngle }
    原型: SVG动画角_;

    //@@{ SVG动画角_:SVGAnimatedAngle }
    新建(): SVG动画角_;

};

//@@{ SVG动画真假_:SVGAnimatedBoolean }
接口 SVG动画真假_ {

    //@@{ 动画值:animVal }
    只读 动画值: 真假;

    //@@{ 基值:baseVal }
    基值: 真假;

}

声明 值量 SVG动画真假_: {

    //@@{ 原型:prototype, SVG动画真假_:SVGAnimatedBoolean }
    原型: SVG动画真假_;

    //@@{ SVG动画真假_:SVGAnimatedBoolean }
    新建(): SVG动画真假_;

};

//@@{ SVG动画枚举_:SVGAnimatedEnumeration }
接口 SVG动画枚举_ {

    //@@{ 动画值:animVal }
    只读 动画值: 数字;

    //@@{ 基值:baseVal }
    基值: 数字;

}

声明 值量 SVG动画枚举_: {

    //@@{ 原型:prototype, SVG动画枚举_:SVGAnimatedEnumeration }
    原型: SVG动画枚举_;

    //@@{ SVG动画枚举_:SVGAnimatedEnumeration }
    新建(): SVG动画枚举_;

};

//@@{ SVG动画整数_:SVGAnimatedInteger }
接口 SVG动画整数_ {

    //@@{ 动画值:animVal }
    只读 动画值: 数字;

    //@@{ 基值:baseVal }
    基值: 数字;

}

声明 值量 SVG动画整数_: {

    //@@{ 原型:prototype, SVG动画整数_:SVGAnimatedInteger }
    原型: SVG动画整数_;

    //@@{ SVG动画整数_:SVGAnimatedInteger }
    新建(): SVG动画整数_;

};

//@@{ SVG动画长度_:SVGAnimatedLength }
接口 SVG动画长度_ {

    //@@{ 动画值:animVal, SVG长度_:SVGLength }
    只读 动画值: SVG长度_;

    //@@{ 基值:baseVal, SVG长度_:SVGLength }
    只读 基值: SVG长度_;

}

声明 值量 SVG动画长度_: {

    //@@{ 原型:prototype, SVG动画长度_:SVGAnimatedLength }
    原型: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    新建(): SVG动画长度_;

};

//@@{ SVG动画长度列表_:SVGAnimatedLengthList }
接口 SVG动画长度列表_ {

    //@@{ 动画值:animVal, SVG长度列表_:SVGLengthList }
    只读 动画值: SVG长度列表_;

    //@@{ 基值:baseVal, SVG长度列表_:SVGLengthList }
    只读 基值: SVG长度列表_;

}

声明 值量 SVG动画长度列表_: {

    //@@{ 原型:prototype, SVG动画长度列表_:SVGAnimatedLengthList }
    原型: SVG动画长度列表_;

    //@@{ SVG动画长度列表_:SVGAnimatedLengthList }
    新建(): SVG动画长度列表_;

};

//@@{ SVG动画数字_:SVGAnimatedNumber }
接口 SVG动画数字_ {

    //@@{ 动画值:animVal }
    只读 动画值: 数字;

    //@@{ 基值:baseVal }
    基值: 数字;

}

声明 值量 SVG动画数字_: {

    //@@{ 原型:prototype, SVG动画数字_:SVGAnimatedNumber }
    原型: SVG动画数字_;

    //@@{ SVG动画数字_:SVGAnimatedNumber }
    新建(): SVG动画数字_;

};

//@@{ SVG动画数字列表_:SVGAnimatedNumberList }
接口 SVG动画数字列表_ {

    //@@{ 动画值:animVal, SVG数字列表_:SVGNumberList }
    只读 动画值: SVG数字列表_;

    //@@{ 基值:baseVal, SVG数字列表_:SVGNumberList }
    只读 基值: SVG数字列表_;

}

声明 值量 SVG动画数字列表_: {

    //@@{ 原型:prototype, SVG动画数字列表_:SVGAnimatedNumberList }
    原型: SVG动画数字列表_;

    //@@{ SVG动画数字列表_:SVGAnimatedNumberList }
    新建(): SVG动画数字列表_;

};

//@@{ SVG动画保护长宽比_:SVGAnimatedPreserveAspectRatio }
接口 SVG动画保护长宽比_ {

    //@@{ 动画值:animVal, SVG保持长宽比_:SVGPreserveAspectRatio }
    只读 动画值: SVG保持长宽比_;

    //@@{ 基值:baseVal, SVG保持长宽比_:SVGPreserveAspectRatio }
    只读 基值: SVG保持长宽比_;

}

声明 值量 SVG动画保护长宽比_: {

    //@@{ 原型:prototype, SVG动画保护长宽比_:SVGAnimatedPreserveAspectRatio }
    原型: SVG动画保护长宽比_;

    //@@{ SVG动画保护长宽比_:SVGAnimatedPreserveAspectRatio }
    新建(): SVG动画保护长宽比_;

};

//@@{ SVG动画矩形_:SVGAnimatedRect }
接口 SVG动画矩形_ {

    //@@{ 动画值:animVal, SVG矩形_:SVGRect }
    只读 动画值: SVG矩形_;

    //@@{ 基值:baseVal, SVG矩形_:SVGRect }
    只读 基值: SVG矩形_;

}

声明 值量 SVG动画矩形_: {

    //@@{ 原型:prototype, SVG动画矩形_:SVGAnimatedRect }
    原型: SVG动画矩形_;

    //@@{ SVG动画矩形_:SVGAnimatedRect }
    新建(): SVG动画矩形_;

};

//@@{ SVG动画文字_:SVGAnimatedString }
接口 SVG动画文字_ {

    //@@{ 动画值:animVal }
    只读 动画值: 文字;

    //@@{ 基值:baseVal }
    基值: 文字;

}

声明 值量 SVG动画文字_: {

    //@@{ 原型:prototype, SVG动画文字_:SVGAnimatedString }
    原型: SVG动画文字_;

    //@@{ SVG动画文字_:SVGAnimatedString }
    新建(): SVG动画文字_;

};

//@@{ SVG动画转换列表_:SVGAnimatedTransformList }
接口 SVG动画转换列表_ {

    //@@{ 动画值:animVal, SVG转换列表_:SVGTransformList }
    只读 动画值: SVG转换列表_;

    //@@{ 基值:baseVal, SVG转换列表_:SVGTransformList }
    只读 基值: SVG转换列表_;

}

声明 值量 SVG动画转换列表_: {

    //@@{ 原型:prototype, SVG动画转换列表_:SVGAnimatedTransformList }
    原型: SVG动画转换列表_;

    //@@{ SVG动画转换列表_:SVGAnimatedTransformList }
    新建(): SVG动画转换列表_;

};

//@@{ SVG圆元素_:SVGCircleElement, SVG图形元素_:SVGGraphicsElement }
接口 SVG圆元素_ 扩展 SVG图形元素_ {

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 cx: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 cy: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 r: SVG动画长度_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG圆元素_:SVGCircleElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG圆元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG圆元素_: {

    //@@{ 原型:prototype, SVG圆元素_:SVGCircleElement }
    原型: SVG圆元素_;

    //@@{ SVG圆元素_:SVGCircleElement }
    新建(): SVG圆元素_;

};

//@@{ SVG剪切路径元素_:SVGClipPathElement, SVG图形元素_:SVGGraphicsElement, SVG单位类型_:SVGUnitTypes }
接口 SVG剪切路径元素_ 扩展 SVG图形元素_, SVG单位类型_ {

    //@@{ 剪切路径单位:clipPathUnits, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 剪切路径单位: SVG动画枚举_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG剪切路径元素_:SVGClipPathElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG剪切路径元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG剪切路径元素_: {

    //@@{ 原型:prototype, SVG剪切路径元素_:SVGClipPathElement }
    原型: SVG剪切路径元素_;

    //@@{ SVG剪切路径元素_:SVGClipPathElement }
    新建(): SVG剪切路径元素_;

};

//@@{ SVG组件传递函数元素_:SVGComponentTransferFunctionElement, SVG元素_:SVGElement }
接口 SVG组件传递函数元素_ 扩展 SVG元素_ {

    //@@{ 振幅:amplitude, SVG动画数字_:SVGAnimatedNumber }
    只读 振幅: SVG动画数字_;

    //@@{ 指数:exponent, SVG动画数字_:SVGAnimatedNumber }
    只读 指数: SVG动画数字_;

    //@@{ 拦截:intercept, SVG动画数字_:SVGAnimatedNumber }
    只读 拦截: SVG动画数字_;

    //@@{ 偏移:offset, SVG动画数字_:SVGAnimatedNumber }
    只读 偏移: SVG动画数字_;

    //@@{ 坡:slope, SVG动画数字_:SVGAnimatedNumber }
    只读 坡: SVG动画数字_;

    //@@{ 表值:tableValues, SVG动画数字列表_:SVGAnimatedNumberList }
    只读 表值: SVG动画数字列表_;

    //@@{ 类型:type, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 类型: SVG动画枚举_;

    //@@{ __SVG_滤镜组件转移_类型_离散__:SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE }
    只读 __SVG_滤镜组件转移_类型_离散__: 数字;

    //@@{ __SVG_滤镜组件转移_类型_旋转__:SVG_FECOMPONENTTRANSFER_TYPE_GAMMA }
    只读 __SVG_滤镜组件转移_类型_旋转__: 数字;

    //@@{ __SVG_滤镜组件转移_类型_身份__:SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY }
    只读 __SVG_滤镜组件转移_类型_身份__: 数字;

    //@@{ __SVG_滤镜组件转移_类型_线性__:SVG_FECOMPONENTTRANSFER_TYPE_LINEAR }
    只读 __SVG_滤镜组件转移_类型_线性__: 数字;

    //@@{ __SVG_滤镜组件转移_类型_表__:SVG_FECOMPONENTTRANSFER_TYPE_TABLE }
    只读 __SVG_滤镜组件转移_类型_表__: 数字;

    //@@{ __SVG_滤镜组件转移_类型_未知__:SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN }
    只读 __SVG_滤镜组件转移_类型_未知__: 数字;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG组件传递函数元素_:SVGComponentTransferFunctionElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG组件传递函数元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG组件传递函数元素_: {

    //@@{ 原型:prototype, SVG组件传递函数元素_:SVGComponentTransferFunctionElement }
    原型: SVG组件传递函数元素_;

    //@@{ SVG组件传递函数元素_:SVGComponentTransferFunctionElement }
    新建(): SVG组件传递函数元素_;

    //@@{ __SVG_滤镜组件转移_类型_离散__:SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE }
    只读 __SVG_滤镜组件转移_类型_离散__: 数字;

    //@@{ __SVG_滤镜组件转移_类型_旋转__:SVG_FECOMPONENTTRANSFER_TYPE_GAMMA }
    只读 __SVG_滤镜组件转移_类型_旋转__: 数字;

    //@@{ __SVG_滤镜组件转移_类型_身份__:SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY }
    只读 __SVG_滤镜组件转移_类型_身份__: 数字;

    //@@{ __SVG_滤镜组件转移_类型_线性__:SVG_FECOMPONENTTRANSFER_TYPE_LINEAR }
    只读 __SVG_滤镜组件转移_类型_线性__: 数字;

    //@@{ __SVG_滤镜组件转移_类型_表__:SVG_FECOMPONENTTRANSFER_TYPE_TABLE }
    只读 __SVG_滤镜组件转移_类型_表__: 数字;

    //@@{ __SVG_滤镜组件转移_类型_未知__:SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN }
    只读 __SVG_滤镜组件转移_类型_未知__: 数字;

};

//@@{ SVG预定元素:SVGDefsElement, SVG图形元素_:SVGGraphicsElement }
接口 SVG预定元素 扩展 SVG图形元素_ {

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG预定元素:SVGDefsElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG预定元素, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

//@@{ SVG预定元素_:SVGDefsElement }
声明 值量 SVG预定元素_: {

    //@@{ 原型:prototype, SVG预定元素:SVGDefsElement }
    原型: SVG预定元素;

    //@@{ SVG预定元素:SVGDefsElement }
    新建(): SVG预定元素;

};

//@@{ SVG纯文本元素_:SVGDescElement, SVG元素_:SVGElement }
接口 SVG纯文本元素_ 扩展 SVG元素_ {

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG纯文本元素_:SVGDescElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG纯文本元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG纯文本元素_: {

    //@@{ 原型:prototype, SVG纯文本元素_:SVGDescElement }
    原型: SVG纯文本元素_;

    //@@{ SVG纯文本元素_:SVGDescElement }
    新建(): SVG纯文本元素_;

};

//@@{ SVG元素事件映射_:SVGElementEventMap, 元素事件映射_:ElementEventMap }
接口 SVG元素事件映射_ 扩展 元素事件映射_ {

    //@@{ "点击":"click", 鼠标事件_:MouseEvent }
    "点击": 鼠标事件_;

    //@@{ "双击":"dblclick", 鼠标事件_:MouseEvent }
    "双击": 鼠标事件_;

    //@@{ "获得焦点":"focusin", 焦点事件_:FocusEvent }
    "获得焦点": 焦点事件_;

    //@@{ "焦点移出":"focusout", 焦点事件_:FocusEvent }
    "焦点移出": 焦点事件_;

    //@@{ "加载":"load", 事件_:Event }
    "加载": 事件_;

    //@@{ "鼠标按下":"mousedown", 鼠标事件_:MouseEvent }
    "鼠标按下": 鼠标事件_;

    //@@{ "鼠标移动":"mousemove", 鼠标事件_:MouseEvent }
    "鼠标移动": 鼠标事件_;

    //@@{ "鼠标移开":"mouseout", 鼠标事件_:MouseEvent }
    "鼠标移开": 鼠标事件_;

    //@@{ "鼠标悬停":"mouseover", 鼠标事件_:MouseEvent }
    "鼠标悬停": 鼠标事件_;

    //@@{ "鼠标松开":"mouseup", 鼠标事件_:MouseEvent }
    "鼠标松开": 鼠标事件_;

}

//@@{ SVG元素_:SVGElement, 元素_:Element }
接口 SVG元素_ 扩展 元素_ {

    //@@{ 类名组:classNames }
    类名组: 任意;

    //@@{ 正在点击:onclick, SVG元素_:SVGElement, 鼠标事件_:MouseEvent }
    正在点击: (本体: SVG元素_, ev: 鼠标事件_) => 任意;

    //@@{ 正在双击:ondblclick, SVG元素_:SVGElement, 鼠标事件_:MouseEvent }
    正在双击: (本体: SVG元素_, ev: 鼠标事件_) => 任意;

    //@@{ 正在获得焦点:onfocusin, SVG元素_:SVGElement, 焦点事件_:FocusEvent }
    正在获得焦点: (本体: SVG元素_, ev: 焦点事件_) => 任意;

    //@@{ 正在焦点移出:onfocusout, SVG元素_:SVGElement, 焦点事件_:FocusEvent }
    正在焦点移出: (本体: SVG元素_, ev: 焦点事件_) => 任意;

    //@@{ 正在加载:onload, SVG元素_:SVGElement, 事件_:Event }
    正在加载: (本体: SVG元素_, ev: 事件_) => 任意;

    //@@{ 正在鼠标按下:onmousedown, SVG元素_:SVGElement, 鼠标事件_:MouseEvent }
    正在鼠标按下: (本体: SVG元素_, ev: 鼠标事件_) => 任意;

    //@@{ 正在鼠标移动:onmousemove, SVG元素_:SVGElement, 鼠标事件_:MouseEvent }
    正在鼠标移动: (本体: SVG元素_, ev: 鼠标事件_) => 任意;

    //@@{ 正在鼠标移开:onmouseout, SVG元素_:SVGElement, 鼠标事件_:MouseEvent }
    正在鼠标移开: (本体: SVG元素_, ev: 鼠标事件_) => 任意;

    //@@{ 正在鼠标悬停:onmouseover, SVG元素_:SVGElement, 鼠标事件_:MouseEvent }
    正在鼠标悬停: (本体: SVG元素_, ev: 鼠标事件_) => 任意;

    //@@{ 正在鼠标松开:onmouseup, SVG元素_:SVGElement, 鼠标事件_:MouseEvent }
    正在鼠标松开: (本体: SVG元素_, ev: 鼠标事件_) => 任意;

    //@@{ 主SVG元素:ownerSVGElement, SVGSVG元素_:SVGSVGElement }
    只读 主SVG元素: SVGSVG元素_;

    //@@{ 样式:style, CSS样式声明_:CSSStyleDeclaration }
    只读 样式: CSS样式声明_;

    //@@{ 视口元素:viewportElement, SVG元素_:SVGElement }
    只读 视口元素: SVG元素_;

    //@@{ xml基:xmlbase }
    xml基: 文字;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG元素_:SVGElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG元素_: {

    //@@{ 原型:prototype, SVG元素_:SVGElement }
    原型: SVG元素_;

    //@@{ SVG元素_:SVGElement }
    新建(): SVG元素_;

};

//@@{ SVG元素实例_:SVGElementInstance, 事件目标_:EventTarget }
接口 SVG元素实例_ 扩展 事件目标_ {

    //@@{ 子节点集:childNodes, SVG元素实例列表_:SVGElementInstanceList }
    只读 子节点集: SVG元素实例列表_;

    //@@{ 对应的元素:correspondingElement, SVG元素_:SVGElement }
    只读 对应的元素: SVG元素_;

    //@@{ 对应的使用元素:correspondingUseElement, SVG使用元素_:SVGUseElement }
    只读 对应的使用元素: SVG使用元素_;

    //@@{ 首子节点:firstChild, SVG元素实例_:SVGElementInstance }
    只读 首子节点: SVG元素实例_;

    //@@{ 尾子节点:lastChild, SVG元素实例_:SVGElementInstance }
    只读 尾子节点: SVG元素实例_;

    //@@{ 下个兄弟:nextSibling, SVG元素实例_:SVGElementInstance }
    只读 下个兄弟: SVG元素实例_;

    //@@{ 父节点:parentNode, SVG元素实例_:SVGElementInstance }
    只读 父节点: SVG元素实例_;

    //@@{ 之前兄弟:previousSibling, SVG元素实例_:SVGElementInstance }
    只读 之前兄弟: SVG元素实例_;

}

声明 值量 SVG元素实例_: {

    //@@{ 原型:prototype, SVG元素实例_:SVGElementInstance }
    原型: SVG元素实例_;

    //@@{ SVG元素实例_:SVGElementInstance }
    新建(): SVG元素实例_;

};

//@@{ SVG元素实例列表_:SVGElementInstanceList }
接口 SVG元素实例列表_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 项目:item, 索引:index, SVG元素实例_:SVGElementInstance }
    项目(索引: 数字): SVG元素实例_;

}

声明 值量 SVG元素实例列表_: {

    //@@{ 原型:prototype, SVG元素实例列表_:SVGElementInstanceList }
    原型: SVG元素实例列表_;

    //@@{ SVG元素实例列表_:SVGElementInstanceList }
    新建(): SVG元素实例列表_;

};

//@@{ SVG椭圆元素_:SVGEllipseElement, SVG图形元素_:SVGGraphicsElement }
接口 SVG椭圆元素_ 扩展 SVG图形元素_ {

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 cx: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 cy: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 rx: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 ry: SVG动画长度_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG椭圆元素_:SVGEllipseElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG椭圆元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG椭圆元素_: {

    //@@{ 原型:prototype, SVG椭圆元素_:SVGEllipseElement }
    原型: SVG椭圆元素_;

    //@@{ SVG椭圆元素_:SVGEllipseElement }
    新建(): SVG椭圆元素_;

};

//@@{ SVG滤镜混合元素_:SVGFEBlendElement, SVG元素_:SVGElement, SVG过滤原始标准特性_:SVGFilterPrimitiveStandardAttributes }
接口 SVG滤镜混合元素_ 扩展 SVG元素_, SVG过滤原始标准特性_ {

    //@@{ SVG动画文字_:SVGAnimatedString }
    只读 in1: SVG动画文字_;

    //@@{ SVG动画文字_:SVGAnimatedString }
    只读 in2: SVG动画文字_;

    //@@{ 模式:mode, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 模式: SVG动画枚举_;

    //@@{ __SVG_滤镜混合_模式_颜色__:SVG_FEBLEND_MODE_COLOR }
    只读 __SVG_滤镜混合_模式_颜色__: 数字;

    //@@{ __SVG_滤镜混合_模式_颜色_燃烧__:SVG_FEBLEND_MODE_COLOR_BURN }
    只读 __SVG_滤镜混合_模式_颜色_燃烧__: 数字;

    //@@{ __SVG_滤镜混合_模式_颜色_道奇__:SVG_FEBLEND_MODE_COLOR_DODGE }
    只读 __SVG_滤镜混合_模式_颜色_道奇__: 数字;

    //@@{ __SVG_滤镜混合_模式_变黑__:SVG_FEBLEND_MODE_DARKEN }
    只读 __SVG_滤镜混合_模式_变黑__: 数字;

    //@@{ __SVG_滤镜混合_模式_区别__:SVG_FEBLEND_MODE_DIFFERENCE }
    只读 __SVG_滤镜混合_模式_区别__: 数字;

    //@@{ __SVG_滤镜混合_模式_排除__:SVG_FEBLEND_MODE_EXCLUSION }
    只读 __SVG_滤镜混合_模式_排除__: 数字;

    //@@{ __SVG_滤镜混合_模式_硬光__:SVG_FEBLEND_MODE_HARD_LIGHT }
    只读 __SVG_滤镜混合_模式_硬光__: 数字;

    //@@{ __SVG_滤镜混合_模式_色调__:SVG_FEBLEND_MODE_HUE }
    只读 __SVG_滤镜混合_模式_色调__: 数字;

    //@@{ __SVG_滤镜混合_模式_减轻__:SVG_FEBLEND_MODE_LIGHTEN }
    只读 __SVG_滤镜混合_模式_减轻__: 数字;

    //@@{ __SVG_滤镜混合_模式_光度__:SVG_FEBLEND_MODE_LUMINOSITY }
    只读 __SVG_滤镜混合_模式_光度__: 数字;

    //@@{ __SVG_滤镜混合_模式_乘__:SVG_FEBLEND_MODE_MULTIPLY }
    只读 __SVG_滤镜混合_模式_乘__: 数字;

    //@@{ __SVG_滤镜混合_模式_正常的__:SVG_FEBLEND_MODE_NORMAL }
    只读 __SVG_滤镜混合_模式_正常的__: 数字;

    //@@{ __SVG_滤镜混合_模式_覆盖__:SVG_FEBLEND_MODE_OVERLAY }
    只读 __SVG_滤镜混合_模式_覆盖__: 数字;

    //@@{ __SVG_滤镜混合_模式_饱和__:SVG_FEBLEND_MODE_SATURATION }
    只读 __SVG_滤镜混合_模式_饱和__: 数字;

    //@@{ __SVG_滤镜混合_模式_屏幕__:SVG_FEBLEND_MODE_SCREEN }
    只读 __SVG_滤镜混合_模式_屏幕__: 数字;

    //@@{ __SVG_滤镜混合_模式_软光__:SVG_FEBLEND_MODE_SOFT_LIGHT }
    只读 __SVG_滤镜混合_模式_软光__: 数字;

    //@@{ __SVG_滤镜混合_模式_未知__:SVG_FEBLEND_MODE_UNKNOWN }
    只读 __SVG_滤镜混合_模式_未知__: 数字;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜混合元素_:SVGFEBlendElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜混合元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜混合元素_: {

    //@@{ 原型:prototype, SVG滤镜混合元素_:SVGFEBlendElement }
    原型: SVG滤镜混合元素_;

    //@@{ SVG滤镜混合元素_:SVGFEBlendElement }
    新建(): SVG滤镜混合元素_;

    //@@{ __SVG_滤镜混合_模式_颜色__:SVG_FEBLEND_MODE_COLOR }
    只读 __SVG_滤镜混合_模式_颜色__: 数字;

    //@@{ __SVG_滤镜混合_模式_颜色_燃烧__:SVG_FEBLEND_MODE_COLOR_BURN }
    只读 __SVG_滤镜混合_模式_颜色_燃烧__: 数字;

    //@@{ __SVG_滤镜混合_模式_颜色_道奇__:SVG_FEBLEND_MODE_COLOR_DODGE }
    只读 __SVG_滤镜混合_模式_颜色_道奇__: 数字;

    //@@{ __SVG_滤镜混合_模式_变黑__:SVG_FEBLEND_MODE_DARKEN }
    只读 __SVG_滤镜混合_模式_变黑__: 数字;

    //@@{ __SVG_滤镜混合_模式_区别__:SVG_FEBLEND_MODE_DIFFERENCE }
    只读 __SVG_滤镜混合_模式_区别__: 数字;

    //@@{ __SVG_滤镜混合_模式_排除__:SVG_FEBLEND_MODE_EXCLUSION }
    只读 __SVG_滤镜混合_模式_排除__: 数字;

    //@@{ __SVG_滤镜混合_模式_硬光__:SVG_FEBLEND_MODE_HARD_LIGHT }
    只读 __SVG_滤镜混合_模式_硬光__: 数字;

    //@@{ __SVG_滤镜混合_模式_色调__:SVG_FEBLEND_MODE_HUE }
    只读 __SVG_滤镜混合_模式_色调__: 数字;

    //@@{ __SVG_滤镜混合_模式_减轻__:SVG_FEBLEND_MODE_LIGHTEN }
    只读 __SVG_滤镜混合_模式_减轻__: 数字;

    //@@{ __SVG_滤镜混合_模式_光度__:SVG_FEBLEND_MODE_LUMINOSITY }
    只读 __SVG_滤镜混合_模式_光度__: 数字;

    //@@{ __SVG_滤镜混合_模式_乘__:SVG_FEBLEND_MODE_MULTIPLY }
    只读 __SVG_滤镜混合_模式_乘__: 数字;

    //@@{ __SVG_滤镜混合_模式_正常的__:SVG_FEBLEND_MODE_NORMAL }
    只读 __SVG_滤镜混合_模式_正常的__: 数字;

    //@@{ __SVG_滤镜混合_模式_覆盖__:SVG_FEBLEND_MODE_OVERLAY }
    只读 __SVG_滤镜混合_模式_覆盖__: 数字;

    //@@{ __SVG_滤镜混合_模式_饱和__:SVG_FEBLEND_MODE_SATURATION }
    只读 __SVG_滤镜混合_模式_饱和__: 数字;

    //@@{ __SVG_滤镜混合_模式_屏幕__:SVG_FEBLEND_MODE_SCREEN }
    只读 __SVG_滤镜混合_模式_屏幕__: 数字;

    //@@{ __SVG_滤镜混合_模式_软光__:SVG_FEBLEND_MODE_SOFT_LIGHT }
    只读 __SVG_滤镜混合_模式_软光__: 数字;

    //@@{ __SVG_滤镜混合_模式_未知__:SVG_FEBLEND_MODE_UNKNOWN }
    只读 __SVG_滤镜混合_模式_未知__: 数字;

};

//@@{ SVG滤镜颜色矩阵元素_:SVGFEColorMatrixElement, SVG元素_:SVGElement, SVG过滤原始标准特性_:SVGFilterPrimitiveStandardAttributes }
接口 SVG滤镜颜色矩阵元素_ 扩展 SVG元素_, SVG过滤原始标准特性_ {

    //@@{ SVG动画文字_:SVGAnimatedString }
    只读 in1: SVG动画文字_;

    //@@{ SVG动画枚举_:SVGAnimatedEnumeration }
    只读 type: SVG动画枚举_;

    //@@{ 值:values, SVG动画数字列表_:SVGAnimatedNumberList }
    只读 值: SVG动画数字列表_;

    //@@{ __SVG_滤镜颜色矩阵_类型_色相旋转__:SVG_FECOLORMATRIX_TYPE_HUEROTATE }
    只读 __SVG_滤镜颜色矩阵_类型_色相旋转__: 数字;

    //@@{ __SVG_滤镜颜色矩阵_类型_亮度阿尔法__:SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA }
    只读 __SVG_滤镜颜色矩阵_类型_亮度阿尔法__: 数字;

    //@@{ __SVG_滤镜颜色矩阵_类型_矩阵__:SVG_FECOLORMATRIX_TYPE_MATRIX }
    只读 __SVG_滤镜颜色矩阵_类型_矩阵__: 数字;

    //@@{ __SVG_滤镜颜色矩阵_类型_饱和__:SVG_FECOLORMATRIX_TYPE_SATURATE }
    只读 __SVG_滤镜颜色矩阵_类型_饱和__: 数字;

    //@@{ __SVG_滤镜颜色矩阵_类型_未知__:SVG_FECOLORMATRIX_TYPE_UNKNOWN }
    只读 __SVG_滤镜颜色矩阵_类型_未知__: 数字;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜颜色矩阵元素_:SVGFEColorMatrixElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜颜色矩阵元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜颜色矩阵元素_: {

    //@@{ 原型:prototype, SVG滤镜颜色矩阵元素_:SVGFEColorMatrixElement }
    原型: SVG滤镜颜色矩阵元素_;

    //@@{ SVG滤镜颜色矩阵元素_:SVGFEColorMatrixElement }
    新建(): SVG滤镜颜色矩阵元素_;

    //@@{ __SVG_滤镜颜色矩阵_类型_色相旋转__:SVG_FECOLORMATRIX_TYPE_HUEROTATE }
    只读 __SVG_滤镜颜色矩阵_类型_色相旋转__: 数字;

    //@@{ __SVG_滤镜颜色矩阵_类型_亮度阿尔法__:SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA }
    只读 __SVG_滤镜颜色矩阵_类型_亮度阿尔法__: 数字;

    //@@{ __SVG_滤镜颜色矩阵_类型_矩阵__:SVG_FECOLORMATRIX_TYPE_MATRIX }
    只读 __SVG_滤镜颜色矩阵_类型_矩阵__: 数字;

    //@@{ __SVG_滤镜颜色矩阵_类型_饱和__:SVG_FECOLORMATRIX_TYPE_SATURATE }
    只读 __SVG_滤镜颜色矩阵_类型_饱和__: 数字;

    //@@{ __SVG_滤镜颜色矩阵_类型_未知__:SVG_FECOLORMATRIX_TYPE_UNKNOWN }
    只读 __SVG_滤镜颜色矩阵_类型_未知__: 数字;

};

//@@{ SVG滤镜组件转移元素_:SVGFEComponentTransferElement, SVG元素_:SVGElement, SVG过滤原始标准特性_:SVGFilterPrimitiveStandardAttributes }
接口 SVG滤镜组件转移元素_ 扩展 SVG元素_, SVG过滤原始标准特性_ {

    //@@{ SVG动画文字_:SVGAnimatedString }
    只读 in1: SVG动画文字_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜组件转移元素_:SVGFEComponentTransferElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜组件转移元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜组件转移元素_: {

    //@@{ 原型:prototype, SVG滤镜组件转移元素_:SVGFEComponentTransferElement }
    原型: SVG滤镜组件转移元素_;

    //@@{ SVG滤镜组件转移元素_:SVGFEComponentTransferElement }
    新建(): SVG滤镜组件转移元素_;

};

//@@{ SVG滤镜复合元素_:SVGFECompositeElement, SVG元素_:SVGElement, SVG过滤原始标准特性_:SVGFilterPrimitiveStandardAttributes }
接口 SVG滤镜复合元素_ 扩展 SVG元素_, SVG过滤原始标准特性_ {

    //@@{ SVG动画文字_:SVGAnimatedString }
    只读 in1: SVG动画文字_;

    //@@{ SVG动画文字_:SVGAnimatedString }
    只读 in2: SVG动画文字_;

    //@@{ SVG动画数字_:SVGAnimatedNumber }
    只读 k1: SVG动画数字_;

    //@@{ SVG动画数字_:SVGAnimatedNumber }
    只读 k2: SVG动画数字_;

    //@@{ SVG动画数字_:SVGAnimatedNumber }
    只读 k3: SVG动画数字_;

    //@@{ SVG动画数字_:SVGAnimatedNumber }
    只读 k4: SVG动画数字_;

    //@@{ 操作符:operator, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 操作符: SVG动画枚举_;

    //@@{ __SVG_滤镜复合_操作符_算术__:SVG_FECOMPOSITE_OPERATOR_ARITHMETIC }
    只读 __SVG_滤镜复合_操作符_算术__: 数字;

    //@@{ __SVG_滤镜复合_操作符_顶__:SVG_FECOMPOSITE_OPERATOR_ATOP }
    只读 __SVG_滤镜复合_操作符_顶__: 数字;

    //@@{ __SVG_滤镜复合_操作符_内部__:SVG_FECOMPOSITE_OPERATOR_IN }
    只读 __SVG_滤镜复合_操作符_内部__: 数字;

    //@@{ __SVG_滤镜复合_操作符_外部__:SVG_FECOMPOSITE_OPERATOR_OUT }
    只读 __SVG_滤镜复合_操作符_外部__: 数字;

    //@@{ __SVG_滤镜复合_操作符_全部__:SVG_FECOMPOSITE_OPERATOR_OVER }
    只读 __SVG_滤镜复合_操作符_全部__: 数字;

    //@@{ __SVG_滤镜复合_操作符_未知__:SVG_FECOMPOSITE_OPERATOR_UNKNOWN }
    只读 __SVG_滤镜复合_操作符_未知__: 数字;

    //@@{ __SVG_滤镜复合_操作符_异或__:SVG_FECOMPOSITE_OPERATOR_XOR }
    只读 __SVG_滤镜复合_操作符_异或__: 数字;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜复合元素_:SVGFECompositeElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜复合元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜复合元素_: {

    //@@{ 原型:prototype, SVG滤镜复合元素_:SVGFECompositeElement }
    原型: SVG滤镜复合元素_;

    //@@{ SVG滤镜复合元素_:SVGFECompositeElement }
    新建(): SVG滤镜复合元素_;

    //@@{ __SVG_滤镜复合_操作符_算术__:SVG_FECOMPOSITE_OPERATOR_ARITHMETIC }
    只读 __SVG_滤镜复合_操作符_算术__: 数字;

    //@@{ __SVG_滤镜复合_操作符_顶__:SVG_FECOMPOSITE_OPERATOR_ATOP }
    只读 __SVG_滤镜复合_操作符_顶__: 数字;

    //@@{ __SVG_滤镜复合_操作符_内部__:SVG_FECOMPOSITE_OPERATOR_IN }
    只读 __SVG_滤镜复合_操作符_内部__: 数字;

    //@@{ __SVG_滤镜复合_操作符_外部__:SVG_FECOMPOSITE_OPERATOR_OUT }
    只读 __SVG_滤镜复合_操作符_外部__: 数字;

    //@@{ __SVG_滤镜复合_操作符_全部__:SVG_FECOMPOSITE_OPERATOR_OVER }
    只读 __SVG_滤镜复合_操作符_全部__: 数字;

    //@@{ __SVG_滤镜复合_操作符_未知__:SVG_FECOMPOSITE_OPERATOR_UNKNOWN }
    只读 __SVG_滤镜复合_操作符_未知__: 数字;

    //@@{ __SVG_滤镜复合_操作符_异或__:SVG_FECOMPOSITE_OPERATOR_XOR }
    只读 __SVG_滤镜复合_操作符_异或__: 数字;

};

//@@{ SVG滤镜卷积矩阵元素_:SVGFEConvolveMatrixElement, SVG元素_:SVGElement, SVG过滤原始标准特性_:SVGFilterPrimitiveStandardAttributes }
接口 SVG滤镜卷积矩阵元素_ 扩展 SVG元素_, SVG过滤原始标准特性_ {

    //@@{ 偏见:bias, SVG动画数字_:SVGAnimatedNumber }
    只读 偏见: SVG动画数字_;

    //@@{ 除数:divisor, SVG动画数字_:SVGAnimatedNumber }
    只读 除数: SVG动画数字_;

    //@@{ 边缘模式:edgeMode, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 边缘模式: SVG动画枚举_;

    //@@{ SVG动画文字_:SVGAnimatedString }
    只读 in1: SVG动画文字_;

    //@@{ 内核矩阵:kernelMatrix, SVG动画数字列表_:SVGAnimatedNumberList }
    只读 内核矩阵: SVG动画数字列表_;

    //@@{ 内核单位长度X:kernelUnitLengthX, SVG动画数字_:SVGAnimatedNumber }
    只读 内核单位长度X: SVG动画数字_;

    //@@{ 内核单位长度Y:kernelUnitLengthY, SVG动画数字_:SVGAnimatedNumber }
    只读 内核单位长度Y: SVG动画数字_;

    //@@{ 秩序X:orderX, SVG动画整数_:SVGAnimatedInteger }
    只读 秩序X: SVG动画整数_;

    //@@{ 秩序Y:orderY, SVG动画整数_:SVGAnimatedInteger }
    只读 秩序Y: SVG动画整数_;

    //@@{ 保存阿尔法:preserveAlpha, SVG动画真假_:SVGAnimatedBoolean }
    只读 保存阿尔法: SVG动画真假_;

    //@@{ 目标X:targetX, SVG动画整数_:SVGAnimatedInteger }
    只读 目标X: SVG动画整数_;

    //@@{ 目标Y:targetY, SVG动画整数_:SVGAnimatedInteger }
    只读 目标Y: SVG动画整数_;

    //@@{ __SVG_边缘模式_重复的__:SVG_EDGEMODE_DUPLICATE }
    只读 __SVG_边缘模式_重复的__: 数字;

    //@@{ __SVG_边缘模式_没有__:SVG_EDGEMODE_NONE }
    只读 __SVG_边缘模式_没有__: 数字;

    //@@{ __SVG_边缘模式_未知__:SVG_EDGEMODE_UNKNOWN }
    只读 __SVG_边缘模式_未知__: 数字;

    //@@{ __SVG_边缘模式_包装__:SVG_EDGEMODE_WRAP }
    只读 __SVG_边缘模式_包装__: 数字;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, SVG滤镜卷积矩阵元素_:SVGFEConvolveMatrixElement }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(type: K, listener: (本体: SVG滤镜卷积矩阵元素_, ev: SVG元素事件映射_[K]) => 任意, useCapture?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject }
    添加事件监听器(type: 文字, listener: 事件侦听器或事件侦听器对象_, useCapture?: 真假): 无值;

}

声明 值量 SVG滤镜卷积矩阵元素_: {

    //@@{ 原型:prototype, SVG滤镜卷积矩阵元素_:SVGFEConvolveMatrixElement }
    原型: SVG滤镜卷积矩阵元素_;

    //@@{ SVG滤镜卷积矩阵元素_:SVGFEConvolveMatrixElement }
    新建(): SVG滤镜卷积矩阵元素_;

    //@@{ __SVG_边缘模式_重复的__:SVG_EDGEMODE_DUPLICATE }
    只读 __SVG_边缘模式_重复的__: 数字;

    //@@{ __SVG_边缘模式_没有__:SVG_EDGEMODE_NONE }
    只读 __SVG_边缘模式_没有__: 数字;

    //@@{ __SVG_边缘模式_未知__:SVG_EDGEMODE_UNKNOWN }
    只读 __SVG_边缘模式_未知__: 数字;

    //@@{ __SVG_边缘模式_包装__:SVG_EDGEMODE_WRAP }
    只读 __SVG_边缘模式_包装__: 数字;

};

//@@{ SVG滤镜扩散灯光元素_:SVGFEDiffuseLightingElement, SVG元素_:SVGElement, SVG过滤原始标准特性_:SVGFilterPrimitiveStandardAttributes }
接口 SVG滤镜扩散灯光元素_ 扩展 SVG元素_, SVG过滤原始标准特性_ {

    //@@{ 扩散常数:diffuseConstant, SVG动画数字_:SVGAnimatedNumber }
    只读 扩散常数: SVG动画数字_;

    //@@{ SVG动画文字_:SVGAnimatedString }
    只读 in1: SVG动画文字_;

    //@@{ 内核单位长度X:kernelUnitLengthX, SVG动画数字_:SVGAnimatedNumber }
    只读 内核单位长度X: SVG动画数字_;

    //@@{ 内核单位长度Y:kernelUnitLengthY, SVG动画数字_:SVGAnimatedNumber }
    只读 内核单位长度Y: SVG动画数字_;

    //@@{ 表面规模:surfaceScale, SVG动画数字_:SVGAnimatedNumber }
    只读 表面规模: SVG动画数字_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜扩散灯光元素_:SVGFEDiffuseLightingElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜扩散灯光元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜扩散灯光元素_: {

    //@@{ 原型:prototype, SVG滤镜扩散灯光元素_:SVGFEDiffuseLightingElement }
    原型: SVG滤镜扩散灯光元素_;

    //@@{ SVG滤镜扩散灯光元素_:SVGFEDiffuseLightingElement }
    新建(): SVG滤镜扩散灯光元素_;

};

//@@{ SVG滤镜位移映射元素_:SVGFEDisplacementMapElement, SVG元素_:SVGElement, SVG过滤原始标准特性_:SVGFilterPrimitiveStandardAttributes }
接口 SVG滤镜位移映射元素_ 扩展 SVG元素_, SVG过滤原始标准特性_ {

    //@@{ SVG动画文字_:SVGAnimatedString }
    只读 in1: SVG动画文字_;

    //@@{ SVG动画文字_:SVGAnimatedString }
    只读 in2: SVG动画文字_;

    //@@{ 规模:scale, SVG动画数字_:SVGAnimatedNumber }
    只读 规模: SVG动画数字_;

    //@@{ x通道选择器:xChannelSelector, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 x通道选择器: SVG动画枚举_;

    //@@{ y通道选择器:yChannelSelector, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 y通道选择器: SVG动画枚举_;

    //@@{ __SVG_通道_A__:SVG_CHANNEL_A }
    只读 __SVG_通道_A__: 数字;

    //@@{ __SVG_通道_B__:SVG_CHANNEL_B }
    只读 __SVG_通道_B__: 数字;

    //@@{ __SVG_通道_G__:SVG_CHANNEL_G }
    只读 __SVG_通道_G__: 数字;

    //@@{ __SVG_通道_R__:SVG_CHANNEL_R }
    只读 __SVG_通道_R__: 数字;

    //@@{ __SVG_通道_未知__:SVG_CHANNEL_UNKNOWN }
    只读 __SVG_通道_未知__: 数字;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜位移映射元素_:SVGFEDisplacementMapElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜位移映射元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜位移映射元素_: {

    //@@{ 原型:prototype, SVG滤镜位移映射元素_:SVGFEDisplacementMapElement }
    原型: SVG滤镜位移映射元素_;

    //@@{ SVG滤镜位移映射元素_:SVGFEDisplacementMapElement }
    新建(): SVG滤镜位移映射元素_;

    //@@{ __SVG_通道_A__:SVG_CHANNEL_A }
    只读 __SVG_通道_A__: 数字;

    //@@{ __SVG_通道_B__:SVG_CHANNEL_B }
    只读 __SVG_通道_B__: 数字; 

    //@@{ __SVG_通道_G__:SVG_CHANNEL_G }
    只读 __SVG_通道_G__: 数字;

    //@@{ __SVG_通道_R__:SVG_CHANNEL_R }
    只读 __SVG_通道_R__: 数字;

    //@@{ __SVG_通道_未知__:SVG_CHANNEL_UNKNOWN }
    只读 __SVG_通道_未知__: 数字;

};

//@@{ SVGFE漫反射灯光元素_:SVGFEDistantLightElement, SVG元素_:SVGElement }
接口 SVGFE漫反射灯光元素_ 扩展 SVG元素_ {

    //@@{ 方位:azimuth, SVG动画数字_:SVGAnimatedNumber }
    只读 方位: SVG动画数字_;

    //@@{ 海拔高度:elevation, SVG动画数字_:SVGAnimatedNumber }
    只读 海拔高度: SVG动画数字_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVGFE漫反射灯光元素_:SVGFEDistantLightElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVGFE漫反射灯光元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVGFE漫反射灯光元素_: {

    //@@{ 原型:prototype, SVGFE漫反射灯光元素_:SVGFEDistantLightElement }
    原型: SVGFE漫反射灯光元素_;

    //@@{ SVGFE漫反射灯光元素_:SVGFEDistantLightElement }
    新建(): SVGFE漫反射灯光元素_;

};

//@@{ SVG滤镜洪水元素_:SVGFEFloodElement, SVG元素_:SVGElement, SVG过滤原始标准特性_:SVGFilterPrimitiveStandardAttributes }
接口 SVG滤镜洪水元素_ 扩展 SVG元素_, SVG过滤原始标准特性_ {

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜洪水元素_:SVGFEFloodElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜洪水元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜洪水元素_: {

    //@@{ 原型:prototype, SVG滤镜洪水元素_:SVGFEFloodElement }
    原型: SVG滤镜洪水元素_;

    //@@{ SVG滤镜洪水元素_:SVGFEFloodElement }
    新建(): SVG滤镜洪水元素_;

};

//@@{ SVG滤镜透明函数元素_:SVGFEFuncAElement, SVG组件传递函数元素_:SVGComponentTransferFunctionElement }
接口 SVG滤镜透明函数元素_ 扩展 SVG组件传递函数元素_ {

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜透明函数元素_:SVGFEFuncAElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜透明函数元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜透明函数元素_: {

    //@@{ 原型:prototype, SVG滤镜透明函数元素_:SVGFEFuncAElement }
    原型: SVG滤镜透明函数元素_;

    //@@{ SVG滤镜透明函数元素_:SVGFEFuncAElement }
    新建(): SVG滤镜透明函数元素_;

};

//@@{ SVG滤镜蓝函数元素_:SVGFEFuncBElement, SVG组件传递函数元素_:SVGComponentTransferFunctionElement }
接口 SVG滤镜蓝函数元素_ 扩展 SVG组件传递函数元素_ {

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜蓝函数元素_:SVGFEFuncBElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜蓝函数元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜蓝函数元素_: {

    //@@{ 原型:prototype, SVG滤镜蓝函数元素_:SVGFEFuncBElement }
    原型: SVG滤镜蓝函数元素_;

    //@@{ SVG滤镜蓝函数元素_:SVGFEFuncBElement }
    新建(): SVG滤镜蓝函数元素_;

};

//@@{ SVG滤镜绿函数元素_:SVGFEFuncGElement, SVG组件传递函数元素_:SVGComponentTransferFunctionElement }
接口 SVG滤镜绿函数元素_ 扩展 SVG组件传递函数元素_ {

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜绿函数元素_:SVGFEFuncGElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜绿函数元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜绿函数元素_: {

    //@@{ 原型:prototype, SVG滤镜绿函数元素_:SVGFEFuncGElement }
    原型: SVG滤镜绿函数元素_;

    //@@{ SVG滤镜绿函数元素_:SVGFEFuncGElement }
    新建(): SVG滤镜绿函数元素_;

};

//@@{ SVG滤镜红函数元素_:SVGFEFuncRElement, SVG组件传递函数元素_:SVGComponentTransferFunctionElement }
接口 SVG滤镜红函数元素_ 扩展 SVG组件传递函数元素_ {

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜红函数元素_:SVGFEFuncRElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜红函数元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜红函数元素_: {

    //@@{ 原型:prototype, SVG滤镜红函数元素_:SVGFEFuncRElement }
    原型: SVG滤镜红函数元素_;

    //@@{ SVG滤镜红函数元素_:SVGFEFuncRElement }
    新建(): SVG滤镜红函数元素_;

};

//@@{ SVG滤镜高斯模糊元素_:SVGFEGaussianBlurElement, SVG元素_:SVGElement, SVG过滤原始标准特性_:SVGFilterPrimitiveStandardAttributes }
接口 SVG滤镜高斯模糊元素_ 扩展 SVG元素_, SVG过滤原始标准特性_ {

    //@@{ SVG动画文字_:SVGAnimatedString }
    只读 in1: SVG动画文字_;

    //@@{ 标准偏差X:stdDeviationX, SVG动画数字_:SVGAnimatedNumber }
    只读 标准偏差X: SVG动画数字_;

    //@@{ 标准偏差Y:stdDeviationY, SVG动画数字_:SVGAnimatedNumber }
    只读 标准偏差Y: SVG动画数字_;

    //@@{ 设置标准偏差:setStdDeviation, 标准偏差X:stdDeviationX, 标准偏差Y:stdDeviationY }
    设置标准偏差(标准偏差X: 数字, 标准偏差Y: 数字): 无值;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜高斯模糊元素_:SVGFEGaussianBlurElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜高斯模糊元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜高斯模糊元素_: {

    //@@{ 原型:prototype, SVG滤镜高斯模糊元素_:SVGFEGaussianBlurElement }
    原型: SVG滤镜高斯模糊元素_;

    //@@{ SVG滤镜高斯模糊元素_:SVGFEGaussianBlurElement }
    新建(): SVG滤镜高斯模糊元素_;

};

//@@{ SVG滤镜图像元素_:SVGFEImageElement, SVG元素_:SVGElement, SVG过滤原始标准特性_:SVGFilterPrimitiveStandardAttributes, SVGURI参考_:SVGURIReference }
接口 SVG滤镜图像元素_ 扩展 SVG元素_, SVG过滤原始标准特性_, SVGURI参考_ {

    //@@{ 保持长宽比:preserveAspectRatio, SVG动画保护长宽比_:SVGAnimatedPreserveAspectRatio }
    只读 保持长宽比: SVG动画保护长宽比_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜图像元素_:SVGFEImageElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜图像元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜图像元素_: {

    //@@{ 原型:prototype, SVG滤镜图像元素_:SVGFEImageElement }
    原型: SVG滤镜图像元素_;

    //@@{ SVG滤镜图像元素_:SVGFEImageElement }
    新建(): SVG滤镜图像元素_;

};

//@@{ SVG滤镜合并元素_:SVGFEMergeElement, SVG元素_:SVGElement, SVG过滤原始标准特性_:SVGFilterPrimitiveStandardAttributes }
接口 SVG滤镜合并元素_ 扩展 SVG元素_, SVG过滤原始标准特性_ {

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜合并元素_:SVGFEMergeElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜合并元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜合并元素_: {

    //@@{ 原型:prototype, SVG滤镜合并元素_:SVGFEMergeElement }
    原型: SVG滤镜合并元素_;

    //@@{ SVG滤镜合并元素_:SVGFEMergeElement }
    新建(): SVG滤镜合并元素_;

};

//@@{ SVG滤镜合并节点元素_:SVGFEMergeNodeElement, SVG元素_:SVGElement }
接口 SVG滤镜合并节点元素_ 扩展 SVG元素_ {

    //@@{ SVG动画文字_:SVGAnimatedString }
    只读 in1: SVG动画文字_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜合并节点元素_:SVGFEMergeNodeElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜合并节点元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜合并节点元素_: {

    //@@{ 原型:prototype, SVG滤镜合并节点元素_:SVGFEMergeNodeElement }
    原型: SVG滤镜合并节点元素_;

    //@@{ SVG滤镜合并节点元素_:SVGFEMergeNodeElement }
    新建(): SVG滤镜合并节点元素_;

};

//@@{ SVG滤镜形态元素_:SVGFEMorphologyElement, SVG元素_:SVGElement, SVG过滤原始标准特性_:SVGFilterPrimitiveStandardAttributes }
接口 SVG滤镜形态元素_ 扩展 SVG元素_, SVG过滤原始标准特性_ {

    //@@{ SVG动画文字_:SVGAnimatedString }
    只读 in1: SVG动画文字_;

    //@@{ 操作符:operator, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 操作符: SVG动画枚举_;

    //@@{ 半径X:radiusX, SVG动画数字_:SVGAnimatedNumber }
    只读 半径X: SVG动画数字_;

    //@@{ 半径Y:radiusY, SVG动画数字_:SVGAnimatedNumber }
    只读 半径Y: SVG动画数字_;

    //@@{ __SVG_形态_操作符_扩张__:SVG_MORPHOLOGY_OPERATOR_DILATE }
    只读 __SVG_形态_操作符_扩张__: 数字;

    //@@{ __SVG_形态_操作符_侵蚀__:SVG_MORPHOLOGY_OPERATOR_ERODE }
    只读 __SVG_形态_操作符_侵蚀__: 数字;

    //@@{ __SVG_形态_操作符_未知__:SVG_MORPHOLOGY_OPERATOR_UNKNOWN }
    只读 __SVG_形态_操作符_未知__: 数字;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜形态元素_:SVGFEMorphologyElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜形态元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜形态元素_: {

    //@@{ 原型:prototype, SVG滤镜形态元素_:SVGFEMorphologyElement }
    原型: SVG滤镜形态元素_;

    //@@{ SVG滤镜形态元素_:SVGFEMorphologyElement }
    新建(): SVG滤镜形态元素_;

    //@@{ __SVG_形态_操作符_扩张__:SVG_MORPHOLOGY_OPERATOR_DILATE }
    只读 __SVG_形态_操作符_扩张__: 数字;

    //@@{ __SVG_形态_操作符_侵蚀__:SVG_MORPHOLOGY_OPERATOR_ERODE }
    只读 __SVG_形态_操作符_侵蚀__: 数字;

    //@@{ __SVG_形态_操作符_未知__:SVG_MORPHOLOGY_OPERATOR_UNKNOWN }
    只读 __SVG_形态_操作符_未知__: 数字; 

};

//@@{ SVG滤镜偏移元素_:SVGFEOffsetElement, SVG元素_:SVGElement, SVG过滤原始标准特性_:SVGFilterPrimitiveStandardAttributes }
接口 SVG滤镜偏移元素_ 扩展 SVG元素_, SVG过滤原始标准特性_ {

    //@@{ dx:dx, SVG动画数字_:SVGAnimatedNumber }
    只读 dx: SVG动画数字_;

    //@@{ dy:dy, SVG动画数字_:SVGAnimatedNumber }
    只读 dy: SVG动画数字_;

    //@@{ SVG动画文字_:SVGAnimatedString }
    只读 in1: SVG动画文字_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜偏移元素_:SVGFEOffsetElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜偏移元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜偏移元素_: {

    //@@{ 原型:prototype, SVG滤镜偏移元素_:SVGFEOffsetElement }
    原型: SVG滤镜偏移元素_;

    //@@{ SVG滤镜偏移元素_:SVGFEOffsetElement }
    新建(): SVG滤镜偏移元素_;

};

//@@{ SVG滤镜点灯光元素_:SVGFEPointLightElement, SVG元素_:SVGElement }
接口 SVG滤镜点灯光元素_ 扩展 SVG元素_ {

    //@@{ SVG动画数字_:SVGAnimatedNumber }
    只读 x: SVG动画数字_;

    //@@{ SVG动画数字_:SVGAnimatedNumber }
    只读 y: SVG动画数字_;

    //@@{ SVG动画数字_:SVGAnimatedNumber }
    只读 z: SVG动画数字_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜点灯光元素_:SVGFEPointLightElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜点灯光元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜点灯光元素_: {

    //@@{ 原型:prototype, SVG滤镜点灯光元素_:SVGFEPointLightElement }
    原型: SVG滤镜点灯光元素_;

    //@@{ SVG滤镜点灯光元素_:SVGFEPointLightElement }
    新建(): SVG滤镜点灯光元素_;

};

//@@{ SVG滤镜镜面灯光元素_:SVGFESpecularLightingElement, SVG元素_:SVGElement, SVG过滤原始标准特性_:SVGFilterPrimitiveStandardAttributes }
接口 SVG滤镜镜面灯光元素_ 扩展 SVG元素_, SVG过滤原始标准特性_ {

    //@@{ SVG动画文字_:SVGAnimatedString }
    只读 in1: SVG动画文字_;

    //@@{ 内核单位长度X:kernelUnitLengthX, SVG动画数字_:SVGAnimatedNumber }
    只读 内核单位长度X: SVG动画数字_;

    //@@{ 内核单位长度Y:kernelUnitLengthY, SVG动画数字_:SVGAnimatedNumber }
    只读 内核单位长度Y: SVG动画数字_;

    //@@{ SVG动画数字_:SVGAnimatedNumber }
    只读 specularConstant: SVG动画数字_;

    //@@{ 镜面指数:specularExponent, SVG动画数字_:SVGAnimatedNumber }
    只读 镜面指数: SVG动画数字_;

    //@@{ 表面规模:surfaceScale, SVG动画数字_:SVGAnimatedNumber }
    只读 表面规模: SVG动画数字_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜镜面灯光元素_:SVGFESpecularLightingElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜镜面灯光元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜镜面灯光元素_: {

    //@@{ 原型:prototype, SVG滤镜镜面灯光元素_:SVGFESpecularLightingElement }
    原型: SVG滤镜镜面灯光元素_;

    //@@{ SVG滤镜镜面灯光元素_:SVGFESpecularLightingElement }
    新建(): SVG滤镜镜面灯光元素_;

};

//@@{ SVG滤镜聚灯光元素_:SVGFESpotLightElement, SVG元素_:SVGElement }
接口 SVG滤镜聚灯光元素_ 扩展 SVG元素_ {

    //@@{ 限制锥角:limitingConeAngle, SVG动画数字_:SVGAnimatedNumber }
    只读 限制锥角: SVG动画数字_;

    //@@{ 点在X:pointsAtX, SVG动画数字_:SVGAnimatedNumber }
    只读 点在X: SVG动画数字_;

    //@@{ 点在Y:pointsAtY, SVG动画数字_:SVGAnimatedNumber }
    只读 点在Y: SVG动画数字_;

    //@@{ 点在Z:pointsAtZ, SVG动画数字_:SVGAnimatedNumber }
    只读 点在Z: SVG动画数字_;

    //@@{ 镜面指数:specularExponent, SVG动画数字_:SVGAnimatedNumber }
    只读 镜面指数: SVG动画数字_;

    //@@{ SVG动画数字_:SVGAnimatedNumber }
    只读 x: SVG动画数字_;

    //@@{ SVG动画数字_:SVGAnimatedNumber }
    只读 y: SVG动画数字_;

    //@@{ SVG动画数字_:SVGAnimatedNumber }
    只读 z: SVG动画数字_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜聚灯光元素_:SVGFESpotLightElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜聚灯光元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜聚灯光元素_: {

    //@@{ 原型:prototype, SVG滤镜聚灯光元素_:SVGFESpotLightElement }
    原型: SVG滤镜聚灯光元素_;

    //@@{ SVG滤镜聚灯光元素_:SVGFESpotLightElement }
    新建(): SVG滤镜聚灯光元素_;

};

//@@{ SVG滤镜瓷砖元素_:SVGFETileElement, SVG元素_:SVGElement, SVG过滤原始标准特性_:SVGFilterPrimitiveStandardAttributes }
接口 SVG滤镜瓷砖元素_ 扩展 SVG元素_, SVG过滤原始标准特性_ {

    //@@{ SVG动画文字_:SVGAnimatedString }
    只读 in1: SVG动画文字_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜瓷砖元素_:SVGFETileElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜瓷砖元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜瓷砖元素_: {

    //@@{ 原型:prototype, SVG滤镜瓷砖元素_:SVGFETileElement }
    原型: SVG滤镜瓷砖元素_;

    //@@{ SVG滤镜瓷砖元素_:SVGFETileElement }
    新建(): SVG滤镜瓷砖元素_;

};

//@@{ SVG滤镜动荡元素_:SVGFETurbulenceElement, SVG元素_:SVGElement, SVG过滤原始标准特性_:SVGFilterPrimitiveStandardAttributes }
接口 SVG滤镜动荡元素_ 扩展 SVG元素_, SVG过滤原始标准特性_ {

    //@@{ 基础频率X:baseFrequencyX, SVG动画数字_:SVGAnimatedNumber }
    只读 基础频率X: SVG动画数字_;

    //@@{ 基础频率Y:baseFrequencyY, SVG动画数字_:SVGAnimatedNumber }
    只读 基础频率Y: SVG动画数字_;

    //@@{ 音阶数量:numOctaves, SVG动画整数_:SVGAnimatedInteger }
    只读 音阶数量: SVG动画整数_;

    //@@{ 种子:seed, SVG动画数字_:SVGAnimatedNumber }
    只读 种子: SVG动画数字_;

    //@@{ 瓷砖缝:stitchTiles, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 瓷砖缝: SVG动画枚举_;

    //@@{ 类型:type, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 类型: SVG动画枚举_;

    //@@{ __SVG_缝类型_无缝__:SVG_STITCHTYPE_NOSTITCH }
    只读 __SVG_缝类型_无缝__: 数字;

    //@@{ __SVG_缝类型_缝__:SVG_STITCHTYPE_STITCH }
    只读 __SVG_缝类型_缝__: 数字;

    //@@{ __SVG_缝类型_未知__:SVG_STITCHTYPE_UNKNOWN }
    只读 __SVG_缝类型_未知__: 数字;

    //@@{ __SVG_动荡_类型_分形噪声__:SVG_TURBULENCE_TYPE_FRACTALNOISE }
    只读 __SVG_动荡_类型_分形噪声__: 数字;

    //@@{ __SVG_动荡_类型_动荡__:SVG_TURBULENCE_TYPE_TURBULENCE }
    只读 __SVG_动荡_类型_动荡__: 数字;

    //@@{ __SVG_动荡_类型_未知__:SVG_TURBULENCE_TYPE_UNKNOWN }
    只读 __SVG_动荡_类型_未知__: 数字;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG滤镜动荡元素_:SVGFETurbulenceElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG滤镜动荡元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG滤镜动荡元素_: {

    //@@{ 原型:prototype, SVG滤镜动荡元素_:SVGFETurbulenceElement }
    原型: SVG滤镜动荡元素_;

    //@@{ SVG滤镜动荡元素_:SVGFETurbulenceElement }
    新建(): SVG滤镜动荡元素_;

    //@@{ __SVG_缝类型_无缝__:SVG_STITCHTYPE_NOSTITCH }
    只读 __SVG_缝类型_无缝__: 数字;

    //@@{ __SVG_缝类型_缝__:SVG_STITCHTYPE_STITCH }
    只读 __SVG_缝类型_缝__: 数字;

    //@@{ __SVG_缝类型_未知__:SVG_STITCHTYPE_UNKNOWN }
    只读 __SVG_缝类型_未知__: 数字;

    //@@{ __SVG_动荡_类型_分形噪声__:SVG_TURBULENCE_TYPE_FRACTALNOISE }
    只读 __SVG_动荡_类型_分形噪声__: 数字;

    //@@{ __SVG_动荡_类型_动荡__:SVG_TURBULENCE_TYPE_TURBULENCE }
    只读 __SVG_动荡_类型_动荡__: 数字;

    //@@{ __SVG_动荡_类型_未知__:SVG_TURBULENCE_TYPE_UNKNOWN }
    只读 __SVG_动荡_类型_未知__: 数字;

};

//@@{ SVG过滤器元素_:SVGFilterElement, SVG元素_:SVGElement, SVG单位类型_:SVGUnitTypes, SVGURI参考_:SVGURIReference }
接口 SVG过滤器元素_ 扩展 SVG元素_, SVG单位类型_, SVGURI参考_ {

    //@@{ 过滤器ResX:filterResX, SVG动画整数_:SVGAnimatedInteger }
    只读 过滤器ResX: SVG动画整数_;

    //@@{ 过滤器ResY:filterResY, SVG动画整数_:SVGAnimatedInteger }
    只读 过滤器ResY: SVG动画整数_;

    //@@{ 过滤单元:filterUnits, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 过滤单元: SVG动画枚举_;

    //@@{ 高度:height, SVG动画长度_:SVGAnimatedLength }
    只读 高度: SVG动画长度_;

    //@@{ 原始单位:primitiveUnits, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 原始单位: SVG动画枚举_;

    //@@{ 宽度:width, SVG动画长度_:SVGAnimatedLength }
    只读 宽度: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 x: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 y: SVG动画长度_;

    //@@{ 置过滤器Res:setFilterRes, 过滤器ResX:filterResX, 过滤器ResY:filterResY }
    置过滤器Res(过滤器ResX: 数字, 过滤器ResY: 数字): 无值;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG过滤器元素_:SVGFilterElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG过滤器元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG过滤器元素_: {

    //@@{ 原型:prototype, SVG过滤器元素_:SVGFilterElement }
    原型: SVG过滤器元素_;

    //@@{ SVG过滤器元素_:SVGFilterElement }
    新建(): SVG过滤器元素_;

};

//@@{ SVG外部对象元素_:SVGForeignObjectElement, SVG图形元素_:SVGGraphicsElement }
接口 SVG外部对象元素_ 扩展 SVG图形元素_ {

    //@@{ 高度:height, SVG动画长度_:SVGAnimatedLength }
    只读 高度: SVG动画长度_;

    //@@{ 宽度:width, SVG动画长度_:SVGAnimatedLength }
    只读 宽度: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 x: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 y: SVG动画长度_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG外部对象元素_:SVGForeignObjectElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG外部对象元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG外部对象元素_: {

    //@@{ 原型:prototype, SVG外部对象元素_:SVGForeignObjectElement }
    原型: SVG外部对象元素_;

    //@@{ SVG外部对象元素_:SVGForeignObjectElement }
    新建(): SVG外部对象元素_;

};

//@@{ SVG组元素_:SVGGElement, SVG图形元素_:SVGGraphicsElement }
接口 SVG组元素_ 扩展 SVG图形元素_ {

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG组元素_:SVGGElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG组元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG组元素_: {

    //@@{ 原型:prototype, SVG组元素_:SVGGElement }
    原型: SVG组元素_;

    //@@{ SVG组元素_:SVGGElement }
    新建(): SVG组元素_;

};

//@@{ SVG渐变元素_:SVGGradientElement, SVG元素_:SVGElement, SVG单位类型_:SVGUnitTypes, SVGURI参考_:SVGURIReference }
接口 SVG渐变元素_ 扩展 SVG元素_, SVG单位类型_, SVGURI参考_ {

    //@@{ 渐变变换:gradientTransform, SVG动画转换列表_:SVGAnimatedTransformList }
    只读 渐变变换: SVG动画转换列表_;

    //@@{ 渐变单位:gradientUnits, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 渐变单位: SVG动画枚举_;

    //@@{ 传播方法:spreadMethod, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 传播方法: SVG动画枚举_;

    //@@{ __SVG_传播方法_垫__:SVG_SPREADMETHOD_PAD }
    只读 __SVG_传播方法_垫__: 数字;

    //@@{ __SVG_传播方法_反映__:SVG_SPREADMETHOD_REFLECT }
    只读 __SVG_传播方法_反映__: 数字;

    //@@{ __SVG_传播方法_重复__:SVG_SPREADMETHOD_REPEAT }
    只读 __SVG_传播方法_重复__: 数字;

    //@@{ __SVG_传播方法_未知__:SVG_SPREADMETHOD_UNKNOWN }
    只读 __SVG_传播方法_未知__: 数字;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG渐变元素_:SVGGradientElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG渐变元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG渐变元素_: {

    //@@{ 原型:prototype, SVG渐变元素_:SVGGradientElement }
    原型: SVG渐变元素_;

    //@@{ SVG渐变元素_:SVGGradientElement }
    新建(): SVG渐变元素_;

    //@@{ __SVG_传播方法_垫__:SVG_SPREADMETHOD_PAD }
    只读 __SVG_传播方法_垫__: 数字;

    //@@{ __SVG_传播方法_反映__:SVG_SPREADMETHOD_REFLECT }
    只读 __SVG_传播方法_反映__: 数字;

    //@@{ __SVG_传播方法_重复__:SVG_SPREADMETHOD_REPEAT }
    只读 __SVG_传播方法_重复__: 数字;

    //@@{ __SVG_传播方法_未知__:SVG_SPREADMETHOD_UNKNOWN }
    只读 __SVG_传播方法_未知__: 数字;

};

//@@{ SVG图形元素_:SVGGraphicsElement, SVG元素_:SVGElement, SVG测试_:SVGTests }
接口 SVG图形元素_ 扩展 SVG元素_, SVG测试_ {

    //@@{ 最远的视图元素:farthestViewportElement, SVG元素_:SVGElement }
    只读 最远的视图元素: SVG元素_;

    //@@{ 最近的视图元素:nearestViewportElement, SVG元素_:SVGElement }
    只读 最近的视图元素: SVG元素_;

    //@@{ 变换:transform, SVG动画转换列表_:SVGAnimatedTransformList }
    只读 变换: SVG动画转换列表_;

    //@@{ 取盒子:getBBox, SVG矩形_:SVGRect }
    取盒子(): SVG矩形_;

    //@@{ 取CTM:getCTM, SVG矩阵_:SVGMatrix }
    取CTM(): SVG矩阵_;

    //@@{ 取屏幕CTM:getScreenCTM, SVG矩阵_:SVGMatrix }
    取屏幕CTM(): SVG矩阵_;

    //@@{ 取变换从元素:getTransformToElement, 元素:element, SVG元素_:SVGElement, SVG矩阵_:SVGMatrix }
    取变换从元素(元素: SVG元素_): SVG矩阵_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG图形元素_:SVGGraphicsElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG图形元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG图形元素_: {

    //@@{ 原型:prototype, SVG图形元素_:SVGGraphicsElement }
    原型: SVG图形元素_;

    //@@{ SVG图形元素_:SVGGraphicsElement }
    新建(): SVG图形元素_;

};

//@@{ SVG图像元素_:SVGImageElement, SVG图形元素_:SVGGraphicsElement, SVGURI参考_:SVGURIReference }
接口 SVG图像元素_ 扩展 SVG图形元素_, SVGURI参考_ {

    //@@{ 高度:height, SVG动画长度_:SVGAnimatedLength }
    只读 高度: SVG动画长度_;

    //@@{ 保持长宽比:preserveAspectRatio, SVG动画保护长宽比_:SVGAnimatedPreserveAspectRatio }
    只读 保持长宽比: SVG动画保护长宽比_;

    //@@{ 宽度:width, SVG动画长度_:SVGAnimatedLength }
    只读 宽度: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 x: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 y: SVG动画长度_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG图像元素_:SVGImageElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG图像元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG图像元素_: {

    //@@{ 原型:prototype, SVG图像元素_:SVGImageElement }
    原型: SVG图像元素_;

    //@@{ SVG图像元素_:SVGImageElement }
    新建(): SVG图像元素_;

};

//@@{ SVG长度_:SVGLength }
接口 SVG长度_ {

    //@@{ 单位类型:unitType }
    只读 单位类型: 数字;

    //@@{ 值:value }
    值: 数字;

    //@@{ 值转为文字:valueAsString }
    值转为文字: 文字;

    //@@{ 值在指定单位:valueInSpecifiedUnits }
    值在指定单位: 数字;

    //@@{ 转换为指定的单位:convertToSpecifiedUnits, 单位类型:unitType }
    转换为指定的单位(单位类型: 数字): 无值;

    //@@{ 新值指定单位:newValueSpecifiedUnits, 单位类型:unitType, 值在指定单位:valueInSpecifiedUnits }
    新值指定单位(单位类型: 数字, 值在指定单位: 数字): 无值;

    //@@{ __SVG_长度类型_CM__:SVG_LENGTHTYPE_CM }
    只读 __SVG_长度类型_CM__: 数字;

    //@@{ __SVG_长度类型_EMS__:SVG_LENGTHTYPE_EMS }
    只读 __SVG_长度类型_EMS__: 数字;

    //@@{ __SVG_长度类型_EXS__:SVG_LENGTHTYPE_EXS }
    只读 __SVG_长度类型_EXS__: 数字;

    //@@{ __SVG_长度类型_IN__:SVG_LENGTHTYPE_IN }
    只读 __SVG_长度类型_IN__: 数字;

    //@@{ __SVG_长度类型_MM__:SVG_LENGTHTYPE_MM }
    只读 __SVG_长度类型_MM__: 数字;

    //@@{ __SVG_长度类型_数字__:SVG_LENGTHTYPE_NUMBER }
    只读 __SVG_长度类型_数字__: 数字;

    //@@{ __SVG_长度类型_PC__:SVG_LENGTHTYPE_PC }
    只读 __SVG_长度类型_PC__: 数字;

    //@@{ __SVG_长度类型_百分比__:SVG_LENGTHTYPE_PERCENTAGE }
    只读 __SVG_长度类型_百分比__: 数字;

    //@@{ __SVG_长度类型_PT__:SVG_LENGTHTYPE_PT }
    只读 __SVG_长度类型_PT__: 数字;

    //@@{ __SVG_长度类型_PX__:SVG_LENGTHTYPE_PX }
    只读 __SVG_长度类型_PX__: 数字;

    //@@{ __SVG_长度类型_未知__:SVG_LENGTHTYPE_UNKNOWN }
    只读 __SVG_长度类型_未知__: 数字;

}

声明 值量 SVG长度_: {

    //@@{ 原型:prototype, SVG长度_:SVGLength }
    原型: SVG长度_;

    //@@{ SVG长度_:SVGLength }
    新建(): SVG长度_;

    //@@{ __SVG_长度类型_CM__:SVG_LENGTHTYPE_CM }
    只读 __SVG_长度类型_CM__: 数字;

    //@@{ __SVG_长度类型_EMS__:SVG_LENGTHTYPE_EMS }
    只读 __SVG_长度类型_EMS__: 数字;

    //@@{ __SVG_长度类型_EXS__:SVG_LENGTHTYPE_EXS }
    只读 __SVG_长度类型_EXS__: 数字;

    //@@{ __SVG_长度类型_IN__:SVG_LENGTHTYPE_IN }
    只读 __SVG_长度类型_IN__: 数字;

    //@@{ __SVG_长度类型_MM__:SVG_LENGTHTYPE_MM }
    只读 __SVG_长度类型_MM__: 数字;

    //@@{ __SVG_长度类型_数字__:SVG_LENGTHTYPE_NUMBER }
    只读 __SVG_长度类型_数字__: 数字;

    //@@{ __SVG_长度类型_PC__:SVG_LENGTHTYPE_PC }
    只读 __SVG_长度类型_PC__: 数字;

    //@@{ __SVG_长度类型_百分比__:SVG_LENGTHTYPE_PERCENTAGE }
    只读 __SVG_长度类型_百分比__: 数字;

    //@@{ __SVG_长度类型_PT__:SVG_LENGTHTYPE_PT }
    只读 __SVG_长度类型_PT__: 数字;

    //@@{ __SVG_长度类型_PX__:SVG_LENGTHTYPE_PX }
    只读 __SVG_长度类型_PX__: 数字;

    //@@{ __SVG_长度类型_未知__:SVG_LENGTHTYPE_UNKNOWN }
    只读 __SVG_长度类型_未知__: 数字;

};

//@@{ SVG长度列表_:SVGLengthList }
接口 SVG长度列表_ {

    //@@{ 条目数量:numberOfItems }
    只读 条目数量: 数字;

    //@@{ 附加项目:appendItem, 新项目:newItem, SVG长度_:SVGLength }
    附加项目(新项目: SVG长度_): SVG长度_;

    //@@{ 清除:clear }
    清除(): 无值;

    //@@{ 取项目:getItem, 索引:index, SVG长度_:SVGLength }
    取项目(索引: 数字): SVG长度_;

    //@@{ 初始化:initialize, 新项目:newItem, SVG长度_:SVGLength }
    初始化(新项目: SVG长度_): SVG长度_;

    //@@{ 插入项目之前:insertItemBefore, 新项目:newItem, SVG长度_:SVGLength, 索引:index }
    插入项目之前(新项目: SVG长度_, 索引: 数字): SVG长度_;

    //@@{ 删除项目:removeItem, 索引:index, SVG长度_:SVGLength }
    删除项目(索引: 数字): SVG长度_;

    //@@{ 替换项目:replaceItem, 新项目:newItem, SVG长度_:SVGLength, 索引:index }
    替换项目(新项目: SVG长度_, 索引: 数字): SVG长度_;

}

声明 值量 SVG长度列表_: {

    //@@{ 原型:prototype, SVG长度列表_:SVGLengthList }
    原型: SVG长度列表_;

    //@@{ SVG长度列表_:SVGLengthList }
    新建(): SVG长度列表_;

};

//@@{ SVG线性渐变元素_:SVGLinearGradientElement, SVG渐变元素_:SVGGradientElement }
接口 SVG线性渐变元素_ 扩展 SVG渐变元素_ {

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 x1: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 x2: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 y1: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 y2: SVG动画长度_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG线性渐变元素_:SVGLinearGradientElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG线性渐变元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG线性渐变元素_: {

    //@@{ 原型:prototype, SVG线性渐变元素_:SVGLinearGradientElement }
    原型: SVG线性渐变元素_;

    //@@{ SVG线性渐变元素_:SVGLinearGradientElement }
    新建(): SVG线性渐变元素_;

};

//@@{ SVG线元素_:SVGLineElement, SVG图形元素_:SVGGraphicsElement }
接口 SVG线元素_ 扩展 SVG图形元素_ {

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 x1: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 x2: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 y1: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 y2: SVG动画长度_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG线元素_:SVGLineElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG线元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG线元素_: {

    //@@{ 原型:prototype, SVG线元素_:SVGLineElement }
    原型: SVG线元素_;

    //@@{ SVG线元素_:SVGLineElement }
    新建(): SVG线元素_;

};

//@@{ SVG标记元素_:SVGMarkerElement, SVG元素_:SVGElement, SVG适合于视图框_:SVGFitToViewBox }
接口 SVG标记元素_ 扩展 SVG元素_, SVG适合于视图框_ {

    //@@{ 标志高度:markerHeight, SVG动画长度_:SVGAnimatedLength }
    只读 标志高度: SVG动画长度_;

    //@@{ 标记单位:markerUnits, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 标记单位: SVG动画枚举_;

    //@@{ 标志宽度:markerWidth, SVG动画长度_:SVGAnimatedLength }
    只读 标志宽度: SVG动画长度_;

    //@@{ 方向角:orientAngle, SVG动画角_:SVGAnimatedAngle }
    只读 方向角: SVG动画角_;

    //@@{ 方向类型:orientType, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 方向类型: SVG动画枚举_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 refX: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 refY: SVG动画长度_;

    //@@{ 置方向到角:setOrientToAngle, 角:angle, SVG角_:SVGAngle }
    置方向到角(角: SVG角_): 无值;

    //@@{ 置方向到自动:setOrientToAuto }
    置方向到自动(): 无值;

    //@@{ __SVG_标记_方向_角__:SVG_MARKER_ORIENT_ANGLE }
    只读 __SVG_标记_方向_角__: 数字;

    //@@{ __SVG_标记_方向_自动__:SVG_MARKER_ORIENT_AUTO }
    只读 __SVG_标记_方向_自动__: 数字;

    //@@{ __SVG_标记_方向_未知__:SVG_MARKER_ORIENT_UNKNOWN }
    只读 __SVG_标记_方向_未知__: 数字;

    //@@{ __SVG_标记_单位_笔画宽度__:SVG_MARKERUNITS_STROKEWIDTH }
    只读 __SVG_标记_单位_笔画宽度__: 数字;

    //@@{ __SVG_标记_单位_未知__:SVG_MARKERUNITS_UNKNOWN }
    只读 __SVG_标记_单位_未知__: 数字;

    //@@{ __SVG_标记_单位_用户空间__:SVG_MARKERUNITS_USERSPACEONUSE }
    只读 __SVG_标记_单位_用户空间__: 数字;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG标记元素_:SVGMarkerElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG标记元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG标记元素_: {

    //@@{ 原型:prototype, SVG标记元素_:SVGMarkerElement }
    原型: SVG标记元素_;

    //@@{ SVG标记元素_:SVGMarkerElement }
    新建(): SVG标记元素_;

    //@@{ __SVG_标记_方向_角__:SVG_MARKER_ORIENT_ANGLE }
    只读 __SVG_标记_方向_角__: 数字;

    //@@{ __SVG_标记_方向_自动__:SVG_MARKER_ORIENT_AUTO }
    只读 __SVG_标记_方向_自动__: 数字;

    //@@{ __SVG_标记_方向_未知__:SVG_MARKER_ORIENT_UNKNOWN }
    只读 __SVG_标记_方向_未知__: 数字;

    //@@{ __SVG_标记_单位_笔画宽度__:SVG_MARKERUNITS_STROKEWIDTH }
    只读 __SVG_标记_单位_笔画宽度__: 数字;

    //@@{ __SVG_标记_单位_未知__:SVG_MARKERUNITS_UNKNOWN }
    只读 __SVG_标记_单位_未知__: 数字;

    //@@{ __SVG_标记_单位_用户空间__:SVG_MARKERUNITS_USERSPACEONUSE }
    只读 __SVG_标记_单位_用户空间__: 数字;

};

//@@{ SVG遮罩元素_:SVGMaskElement, SVG元素_:SVGElement, SVG测试_:SVGTests, SVG单位类型_:SVGUnitTypes }
接口 SVG遮罩元素_ 扩展 SVG元素_, SVG测试_, SVG单位类型_ {

    //@@{ 高度:height, SVG动画长度_:SVGAnimatedLength }
    只读 高度: SVG动画长度_;

    //@@{ 遮罩内容单位:maskContentUnits, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 遮罩内容单位: SVG动画枚举_;

    //@@{ 遮罩单位:maskUnits, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 遮罩单位: SVG动画枚举_;

    //@@{ 宽度:width, SVG动画长度_:SVGAnimatedLength }
    只读 宽度: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 x: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 y: SVG动画长度_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG遮罩元素_:SVGMaskElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG遮罩元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG遮罩元素_: {

    //@@{ 原型:prototype, SVG遮罩元素_:SVGMaskElement }
    原型: SVG遮罩元素_;

    //@@{ SVG遮罩元素_:SVGMaskElement }
    新建(): SVG遮罩元素_;

};

//@@{ SVG矩阵_:SVGMatrix }
接口 SVG矩阵_ {

    a: 数字;

    b: 数字;

    c: 数字;

    d: 数字;

    e: 数字;

    f: 数字;

    //@@{ 翻转X:flipX, SVG矩阵_:SVGMatrix }
    翻转X(): SVG矩阵_;

    //@@{ 翻转Y:flipY, SVG矩阵_:SVGMatrix }
    翻转Y(): SVG矩阵_;

    //@@{ 逆向:inverse, SVG矩阵_:SVGMatrix }
    逆向(): SVG矩阵_;

    //@@{ 乘:multiply, 第二个矩阵:secondMatrix, SVG矩阵_:SVGMatrix }
    乘(第二个矩阵: SVG矩阵_): SVG矩阵_;

    //@@{ 旋转:rotate, 角:angle, SVG矩阵_:SVGMatrix }
    旋转(角: 数字): SVG矩阵_;

    //@@{ 旋转从向量:rotateFromVector, SVG矩阵_:SVGMatrix }
    旋转从向量(x: 数字, y: 数字): SVG矩阵_;

    //@@{ 缩放:scale, 缩放因子:scaleFactor, SVG矩阵_:SVGMatrix }
    缩放(缩放因子: 数字): SVG矩阵_;

    //@@{ 非统一缩放:scaleNonUniform, 比例因子X:scaleFactorX, 比例因子Y:scaleFactorY, SVG矩阵_:SVGMatrix }
    非统一缩放(比例因子X: 数字, 比例因子Y: 数字): SVG矩阵_;

    //@@{ 倾斜X:skewX, 角:angle, SVG矩阵_:SVGMatrix }
    倾斜X(角: 数字): SVG矩阵_;

    //@@{ 倾斜Y:skewY, 角:angle, SVG矩阵_:SVGMatrix }
    倾斜Y(角: 数字): SVG矩阵_;

    //@@{ 翻转:translate, SVG矩阵_:SVGMatrix }
    翻转(x: 数字, y: 数字): SVG矩阵_;

}

声明 值量 SVG矩阵_: {

    //@@{ 原型:prototype, SVG矩阵_:SVGMatrix }
    原型: SVG矩阵_;

    //@@{ SVG矩阵_:SVGMatrix }
    新建(): SVG矩阵_;

};

//@@{ SVG元数据元素_:SVGMetadataElement, SVG元素_:SVGElement }
接口 SVG元数据元素_ 扩展 SVG元素_ {

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG元数据元素_:SVGMetadataElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG元数据元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG元数据元素_: {

    //@@{ SVG元数据元素_:SVGMetadataElement }
    prototype: SVG元数据元素_;

    //@@{ SVG元数据元素_:SVGMetadataElement }
    新建(): SVG元数据元素_;

};

//@@{ SVG数字_:SVGNumber }
接口 SVG数字_ {

    //@@{ 值:value }
    值: 数字;

}

声明 值量 SVG数字_: {

    //@@{ 原型:prototype, SVG数字_:SVGNumber }
    原型: SVG数字_;

    //@@{ SVG数字_:SVGNumber }
    新建(): SVG数字_;

};

//@@{ SVG数字列表_:SVGNumberList }
接口 SVG数字列表_ {

    //@@{ 条目数量:numberOfItems }
    只读 条目数量: 数字;

    //@@{ 附加项目:appendItem, 新项目:newItem, SVG数字_:SVGNumber }
    附加项目(新项目: SVG数字_): SVG数字_;

    //@@{ 清除:clear }
    清除(): 无值;

    //@@{ 取项目:getItem, 索引:index, SVG数字_:SVGNumber }
    取项目(索引: 数字): SVG数字_;

    //@@{ 初始化:initialize, 新项目:newItem, SVG数字_:SVGNumber }
    初始化(新项目: SVG数字_): SVG数字_;

    //@@{ 插入项目之前:insertItemBefore, 新项目:newItem, SVG数字_:SVGNumber, 索引:index }
    插入项目之前(新项目: SVG数字_, 索引: 数字): SVG数字_;

    //@@{ 删除项目:removeItem, 索引:index, SVG数字_:SVGNumber }
    删除项目(索引: 数字): SVG数字_;

    //@@{ 替换项目:replaceItem, 新项目:newItem, SVG数字_:SVGNumber, 索引:index }
    替换项目(新项目: SVG数字_, 索引: 数字): SVG数字_;

}

声明 值量 SVG数字列表_: {

    //@@{ 原型:prototype, SVG数字列表_:SVGNumberList }
    原型: SVG数字列表_;

    //@@{ SVG数字列表_:SVGNumberList }
    新建(): SVG数字列表_;

};

//@@{ SVG路径元素_:SVGPathElement, SVG图形元素_:SVGGraphicsElement }
接口 SVG路径元素_ 扩展 SVG图形元素_ {

    //@@{ 路径段列表:pathSegList, SVG路径段列表_:SVGPathSegList }
    只读 路径段列表: SVG路径段列表_;

    //@@{ 创建SVG路径段弧绝对:createSVGPathSegArcAbs, 角:angle, 大弧标志:largeArcFlag, 扫描标志:sweepFlag, SVG路径段弧绝对_:SVGPathSegArcAbs }
    创建SVG路径段弧绝对(x: 数字, y: 数字, r1: 数字, r2: 数字, 角: 数字, 大弧标志: 真假, 扫描标志: 真假): SVG路径段弧绝对_;

    //@@{ 创建SVG路径段弧相对:createSVGPathSegArcRel, 角:angle, 大弧标志:largeArcFlag, 扫描标志:sweepFlag, SVG路径段弧相对_:SVGPathSegArcRel }
    创建SVG路径段弧相对(x: 数字, y: 数字, r1: 数字, r2: 数字, 角: 数字, 大弧标志: 真假, 扫描标志: 真假): SVG路径段弧相对_;

    //@@{ 创建SVG路径段关闭路径:createSVGPathSegClosePath, SVG路径段关闭路径_:SVGPathSegClosePath }
    创建SVG路径段关闭路径(): SVG路径段关闭路径_;

    //@@{ 创建SVG路径段曲线立方绝对:createSVGPathSegCurvetoCubicAbs, SVG路径段曲线立方绝对_:SVGPathSegCurvetoCubicAbs }
    创建SVG路径段曲线立方绝对(x: 数字, y: 数字, x1: 数字, y1: 数字, x2: 数字, y2: 数字): SVG路径段曲线立方绝对_;

    //@@{ 创建SVG路径段曲线立方相对:createSVGPathSegCurvetoCubicRel, SVG路径段曲线立方相对_:SVGPathSegCurvetoCubicRel }
    创建SVG路径段曲线立方相对(x: 数字, y: 数字, x1: 数字, y1: 数字, x2: 数字, y2: 数字): SVG路径段曲线立方相对_;

    //@@{ 创建SVG路径段曲线立方光滑的绝对:createSVGPathSegCurvetoCubicSmoothAbs, SVG路径段曲线立方光滑的绝对_:SVGPathSegCurvetoCubicSmoothAbs }
    创建SVG路径段曲线立方光滑的绝对(x: 数字, y: 数字, x2: 数字, y2: 数字): SVG路径段曲线立方光滑的绝对_;

    //@@{ 创建SVG路径段曲线立方光滑的相对:createSVGPathSegCurvetoCubicSmoothRel, SVG路径段曲线立方光滑的相对_:SVGPathSegCurvetoCubicSmoothRel }
    创建SVG路径段曲线立方光滑的相对(x: 数字, y: 数字, x2: 数字, y2: 数字): SVG路径段曲线立方光滑的相对_;

    //@@{ 创建SVG路径段曲线二次绝对:createSVGPathSegCurvetoQuadraticAbs, SVG路径段曲线二次绝对_:SVGPathSegCurvetoQuadraticAbs }
    创建SVG路径段曲线二次绝对(x: 数字, y: 数字, x1: 数字, y1: 数字): SVG路径段曲线二次绝对_;

    //@@{ 创建SVG路径段曲线二次相对:createSVGPathSegCurvetoQuadraticRel, SVG路径段曲线二次相对_:SVGPathSegCurvetoQuadraticRel }
    创建SVG路径段曲线二次相对(x: 数字, y: 数字, x1: 数字, y1: 数字): SVG路径段曲线二次相对_;

    //@@{ 创建SVG路径段曲线二次光滑绝对:createSVGPathSegCurvetoQuadraticSmoothAbs, SVG路径段曲线二次光滑的绝对:SVGPathSegCurvetoQuadraticSmoothAbs }
    创建SVG路径段曲线二次光滑绝对(x: 数字, y: 数字): SVG路径段曲线二次光滑的绝对;

    //@@{ 创建SVG路径段曲线二次光滑相对:createSVGPathSegCurvetoQuadraticSmoothRel, SVG路径段曲线二次光滑的相对_:SVGPathSegCurvetoQuadraticSmoothRel }
    创建SVG路径段曲线二次光滑相对(x: 数字, y: 数字): SVG路径段曲线二次光滑的相对_;

    //@@{ 创建SVG路径段线段绝对:createSVGPathSegLinetoAbs, SVG路径段线段绝对_:SVGPathSegLinetoAbs }
    创建SVG路径段线段绝对(x: 数字, y: 数字): SVG路径段线段绝对_;

    //@@{ 创建SVG路径段线段水平绝对:createSVGPathSegLinetoHorizontalAbs, SVG路径段线段水平绝对_:SVGPathSegLinetoHorizontalAbs }
    创建SVG路径段线段水平绝对(x: 数字): SVG路径段线段水平绝对_;

    //@@{ 创建SVG路径段线段水平相对:createSVGPathSegLinetoHorizontalRel, SVG路径段线段水平相对_:SVGPathSegLinetoHorizontalRel }
    创建SVG路径段线段水平相对(x: 数字): SVG路径段线段水平相对_;

    //@@{ 创建SVG路径段线段Rel:createSVGPathSegLinetoRel, SVG路径段线段相对_:SVGPathSegLinetoRel }
    创建SVG路径段线段Rel(x: 数字, y: 数字): SVG路径段线段相对_;

    //@@{ 创建SVG路径段线段垂直绝对:createSVGPathSegLinetoVerticalAbs, SVG路径段线段垂直绝对_:SVGPathSegLinetoVerticalAbs }
    创建SVG路径段线段垂直绝对(y: 数字): SVG路径段线段垂直绝对_;

    //@@{ 创建SVG路径段线段垂直相对:createSVGPathSegLinetoVerticalRel, SVG路径段线段垂直相对_:SVGPathSegLinetoVerticalRel }
    创建SVG路径段线段垂直相对(y: 数字): SVG路径段线段垂直相对_;

    //@@{ 创建SVG路径段移至绝对:createSVGPathSegMovetoAbs, SVG路径段移至绝对_:SVGPathSegMovetoAbs }
    创建SVG路径段移至绝对(x: 数字, y: 数字): SVG路径段移至绝对_;

    //@@{ 创建SVG路径段移至相对:createSVGPathSegMovetoRel, SVG路径段移至相对_:SVGPathSegMovetoRel }
    创建SVG路径段移至相对(x: 数字, y: 数字): SVG路径段移至相对_;

    //@@{ 取路径段长度:getPathSegAtLength, 距离:distance }
    取路径段长度(距离: 数字): 数字;

    //@@{ 取点在长度:getPointAtLength, 距离:distance, SVG点_:SVGPoint }
    取点在长度(距离: 数字): SVG点_;

    //@@{ 取总长度:getTotalLength }
    取总长度(): 数字;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG路径元素_:SVGPathElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG路径元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG路径元素_: {

    //@@{ 原型:prototype, SVG路径元素_:SVGPathElement }
    原型: SVG路径元素_;

    //@@{ SVG路径元素_:SVGPathElement }
    新建(): SVG路径元素_;

};

//@@{ SVG路径段_:SVGPathSeg }
接口 SVG路径段_ {

    //@@{ 路径段类型:pathSegType }
    只读 路径段类型: 数字;

    //@@{ 路径段类型转为文本:pathSegTypeAsLetter }
    只读 路径段类型转为文本: 文字;

    //@@{ __路径段_弧_绝对__:PATHSEG_ARC_ABS }
    只读 __路径段_弧_绝对__: 数字;

    //@@{ __路径段_弧_相对__:PATHSEG_ARC_REL }
    只读 __路径段_弧_相对__: 数字;

    //@@{ __路径段_关闭路径__:PATHSEG_CLOSEPATH }
    只读 __路径段_关闭路径__: 数字;

    //@@{ __路径段_曲线_立方_绝对__:PATHSEG_CURVETO_CUBIC_ABS }
    只读 __路径段_曲线_立方_绝对__: 数字;

    //@@{ __路径段_曲线_立方_相对__:PATHSEG_CURVETO_CUBIC_REL }
    只读 __路径段_曲线_立方_相对__: 数字;

    //@@{ __路径段_曲线_立方_光滑的_绝对__:PATHSEG_CURVETO_CUBIC_SMOOTH_ABS }
    只读 __路径段_曲线_立方_光滑的_绝对__: 数字;

    //@@{ __路径段_曲线_立方_光滑的_相对__:PATHSEG_CURVETO_CUBIC_SMOOTH_REL }
    只读 __路径段_曲线_立方_光滑的_相对__: 数字;

    //@@{ __路径段_曲线_二次_绝对__:PATHSEG_CURVETO_QUADRATIC_ABS }
    只读 __路径段_曲线_二次_绝对__: 数字;

    //@@{ __路径段_曲线_二次_相对__:PATHSEG_CURVETO_QUADRATIC_REL }
    只读 __路径段_曲线_二次_相对__: 数字;

    //@@{ __路径段_曲线_二次_光滑的_绝对__:PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS }
    只读 __路径段_曲线_二次_光滑的_绝对__: 数字;

    //@@{ __路径段_曲线_二次_光滑的_相对__:PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL }
    只读 __路径段_曲线_二次_光滑的_相对__: 数字;

    //@@{ __路径段_线段_绝对__:PATHSEG_LINETO_ABS }
    只读 __路径段_线段_绝对__: 数字;

    //@@{ __路径段_线段_水平_绝对__:PATHSEG_LINETO_HORIZONTAL_ABS }
    只读 __路径段_线段_水平_绝对__: 数字;

    //@@{ __路径段_线段_水平_相对__:PATHSEG_LINETO_HORIZONTAL_REL }
    只读 __路径段_线段_水平_相对__: 数字;

    //@@{ __路径段_线段_相对__:PATHSEG_LINETO_REL }
    只读 __路径段_线段_相对__: 数字;

    //@@{ __路径段_线段_垂直_绝对__:PATHSEG_LINETO_VERTICAL_ABS }
    只读 __路径段_线段_垂直_绝对__: 数字;

    //@@{ __路径段_线段_垂直_相对__:PATHSEG_LINETO_VERTICAL_REL }
    只读 __路径段_线段_垂直_相对__: 数字;

    //@@{ __路径段_移至_绝对__:PATHSEG_MOVETO_ABS }
    只读 __路径段_移至_绝对__: 数字;

    //@@{ __路径段_移至_相对__:PATHSEG_MOVETO_REL }
    只读 __路径段_移至_相对__: 数字;

    //@@{ __路径段_未知__:PATHSEG_UNKNOWN }
    只读 __路径段_未知__: 数字;

}

声明 值量 SVG路径段_: {

    //@@{ 原型:prototype, SVG路径段_:SVGPathSeg }
    原型: SVG路径段_;

    //@@{ SVG路径段_:SVGPathSeg }
    新建(): SVG路径段_;

    //@@{ __路径段_弧_绝对__:PATHSEG_ARC_ABS }
    只读 __路径段_弧_绝对__: 数字;

    //@@{ __路径段_弧_相对__:PATHSEG_ARC_REL }
    只读 __路径段_弧_相对__: 数字;

    //@@{ __路径段_关闭路径__:PATHSEG_CLOSEPATH }
    只读 __路径段_关闭路径__: 数字;

    //@@{ __路径段_曲线_立方_绝对__:PATHSEG_CURVETO_CUBIC_ABS }
    只读 __路径段_曲线_立方_绝对__: 数字;

    //@@{ __路径段_曲线_立方_相对__:PATHSEG_CURVETO_CUBIC_REL }
    只读 __路径段_曲线_立方_相对__: 数字;

    //@@{ __路径段_曲线_立方_光滑的_绝对__:PATHSEG_CURVETO_CUBIC_SMOOTH_ABS }
    只读 __路径段_曲线_立方_光滑的_绝对__: 数字;

    //@@{ __路径段_曲线_立方_光滑的_相对__:PATHSEG_CURVETO_CUBIC_SMOOTH_REL }
    只读 __路径段_曲线_立方_光滑的_相对__: 数字;

    //@@{ __路径段_曲线_二次_绝对__:PATHSEG_CURVETO_QUADRATIC_ABS }
    只读 __路径段_曲线_二次_绝对__: 数字;

    //@@{ __路径段_曲线_二次_相对__:PATHSEG_CURVETO_QUADRATIC_REL }
    只读 __路径段_曲线_二次_相对__: 数字;

    //@@{ __路径段_曲线_二次_光滑的_绝对__:PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS }
    只读 __路径段_曲线_二次_光滑的_绝对__: 数字;

    //@@{ __路径段_曲线_二次_光滑的_相对__:PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL }
    只读 __路径段_曲线_二次_光滑的_相对__: 数字;

    //@@{ __路径段_线段_绝对__:PATHSEG_LINETO_ABS }
    只读 __路径段_线段_绝对__: 数字;

    //@@{ __路径段_线段_水平_绝对__:PATHSEG_LINETO_HORIZONTAL_ABS }
    只读 __路径段_线段_水平_绝对__: 数字;

    //@@{ __路径段_线段_水平_相对__:PATHSEG_LINETO_HORIZONTAL_REL }
    只读 __路径段_线段_水平_相对__: 数字;

    //@@{ __路径段_线段_相对__:PATHSEG_LINETO_REL }
    只读 __路径段_线段_相对__: 数字;

    //@@{ __路径段_线段_垂直_绝对__:PATHSEG_LINETO_VERTICAL_ABS }
    只读 __路径段_线段_垂直_绝对__: 数字;

    //@@{ __路径段_线段_垂直_相对__:PATHSEG_LINETO_VERTICAL_REL }
    只读 __路径段_线段_垂直_相对__: 数字;

    //@@{ __路径段_移至_绝对__:PATHSEG_MOVETO_ABS }
    只读 __路径段_移至_绝对__: 数字;

    //@@{ __路径段_移至_相对__:PATHSEG_MOVETO_REL }
    只读 __路径段_移至_相对__: 数字;

    //@@{ __路径段_未知__:PATHSEG_UNKNOWN }
    只读 __路径段_未知__: 数字;

};

//@@{ SVG路径段弧绝对_:SVGPathSegArcAbs, SVG路径段_:SVGPathSeg }
接口 SVG路径段弧绝对_ 扩展 SVG路径段_ {

    //@@{ 角:angle }
    角: 数字;

    //@@{ 大弧标志:largeArcFlag }
    大弧标志: 真假;

    r1: 数字;

    r2: 数字;

    //@@{ 扫描标志:sweepFlag }
    扫描标志: 真假;

    x: 数字;

    y: 数字;

}

声明 值量 SVG路径段弧绝对_: {

    //@@{ 原型:prototype, SVG路径段弧绝对_:SVGPathSegArcAbs }
    原型: SVG路径段弧绝对_;

    //@@{ SVG路径段弧绝对_:SVGPathSegArcAbs }
    新建(): SVG路径段弧绝对_;

};

//@@{ SVG路径段弧相对_:SVGPathSegArcRel, SVG路径段_:SVGPathSeg }
接口 SVG路径段弧相对_ 扩展 SVG路径段_ {

    //@@{ 角:angle }
    角: 数字;

    //@@{ 大弧标志:largeArcFlag }
    大弧标志: 真假;

    r1: 数字;

    r2: 数字;

    //@@{ 扫描标志:sweepFlag }
    扫描标志: 真假;

    x: 数字;

    y: 数字;

}

声明 值量 SVG路径段弧相对_: {

    //@@{ 原型:prototype, SVG路径段弧相对_:SVGPathSegArcRel }
    原型: SVG路径段弧相对_;

    //@@{ SVG路径段弧相对_:SVGPathSegArcRel }
    新建(): SVG路径段弧相对_;

};

//@@{ SVG路径段关闭路径_:SVGPathSegClosePath, SVG路径段_:SVGPathSeg }
接口 SVG路径段关闭路径_ 扩展 SVG路径段_ {

}

声明 值量 SVG路径段关闭路径_: {

    //@@{ 原型:prototype, SVG路径段关闭路径_:SVGPathSegClosePath }
    原型: SVG路径段关闭路径_;

    //@@{ SVG路径段关闭路径_:SVGPathSegClosePath }
    新建(): SVG路径段关闭路径_;

};

//@@{ SVG路径段曲线立方绝对_:SVGPathSegCurvetoCubicAbs, SVG路径段_:SVGPathSeg }
接口 SVG路径段曲线立方绝对_ 扩展 SVG路径段_ {

    x: 数字;

    x1: 数字;

    x2: 数字;

    y: 数字;

    y1: 数字;

    y2: 数字;

}

声明 值量 SVG路径段曲线立方绝对_: {

    //@@{ 原型:prototype, SVG路径段曲线立方绝对_:SVGPathSegCurvetoCubicAbs }
    原型: SVG路径段曲线立方绝对_;

    //@@{ SVG路径段曲线立方绝对_:SVGPathSegCurvetoCubicAbs }
    新建(): SVG路径段曲线立方绝对_;

};

//@@{ SVG路径段曲线立方相对_:SVGPathSegCurvetoCubicRel, SVG路径段_:SVGPathSeg }
接口 SVG路径段曲线立方相对_ 扩展 SVG路径段_ {

    x: 数字;

    x1: 数字;

    x2: 数字;

    y: 数字;

    y1: 数字;

    y2: 数字;

}

声明 值量 SVG路径段曲线立方相对_: {

    //@@{ 原型:prototype, SVG路径段曲线立方相对_:SVGPathSegCurvetoCubicRel }
    原型: SVG路径段曲线立方相对_;

    //@@{ SVG路径段曲线立方相对_:SVGPathSegCurvetoCubicRel }
    新建(): SVG路径段曲线立方相对_;

};

//@@{ SVG路径段曲线立方光滑的绝对_:SVGPathSegCurvetoCubicSmoothAbs, SVG路径段_:SVGPathSeg }
接口 SVG路径段曲线立方光滑的绝对_ 扩展 SVG路径段_ {

    x: 数字;

    x2: 数字;

    y: 数字;

    y2: 数字;

}

声明 值量 SVG路径段曲线立方光滑的绝对_: {

    //@@{ 原型:prototype, SVG路径段曲线立方光滑的绝对_:SVGPathSegCurvetoCubicSmoothAbs }
    原型: SVG路径段曲线立方光滑的绝对_;

    //@@{ SVG路径段曲线立方光滑的绝对_:SVGPathSegCurvetoCubicSmoothAbs }
    新建(): SVG路径段曲线立方光滑的绝对_;

};

//@@{ SVG路径段曲线立方光滑的相对_:SVGPathSegCurvetoCubicSmoothRel, SVG路径段_:SVGPathSeg }
接口 SVG路径段曲线立方光滑的相对_ 扩展 SVG路径段_ {

    x: 数字;

    x2: 数字;

    y: 数字;

    y2: 数字;

}

声明 值量 SVG路径段曲线立方光滑的相对_: {

    //@@{ 原型:prototype, SVG路径段曲线立方光滑的相对_:SVGPathSegCurvetoCubicSmoothRel }
    原型: SVG路径段曲线立方光滑的相对_;

    //@@{ SVG路径段曲线立方光滑的相对_:SVGPathSegCurvetoCubicSmoothRel }
    新建(): SVG路径段曲线立方光滑的相对_;

};

//@@{ SVG路径段曲线二次绝对_:SVGPathSegCurvetoQuadraticAbs, SVG路径段_:SVGPathSeg }
接口 SVG路径段曲线二次绝对_ 扩展 SVG路径段_ {

    x: 数字;

    x1: 数字;

    y: 数字;

    y1: 数字;

}

声明 值量 SVG路径段曲线二次绝对_: {

    //@@{ 原型:prototype, SVG路径段曲线二次绝对_:SVGPathSegCurvetoQuadraticAbs }
    原型: SVG路径段曲线二次绝对_;

    //@@{ SVG路径段曲线二次绝对_:SVGPathSegCurvetoQuadraticAbs }
    新建(): SVG路径段曲线二次绝对_;

};

//@@{ SVG路径段曲线二次相对_:SVGPathSegCurvetoQuadraticRel, SVG路径段_:SVGPathSeg }
接口 SVG路径段曲线二次相对_ 扩展 SVG路径段_ {

    x: 数字;

    x1: 数字;

    y: 数字;

    y1: 数字;

}

声明 值量 SVG路径段曲线二次相对_: {

    //@@{ 原型:prototype, SVG路径段曲线二次相对_:SVGPathSegCurvetoQuadraticRel }
    原型: SVG路径段曲线二次相对_;

    //@@{ SVG路径段曲线二次相对_:SVGPathSegCurvetoQuadraticRel }
    新建(): SVG路径段曲线二次相对_;

};

//@@{ SVG路径段曲线二次光滑的绝对:SVGPathSegCurvetoQuadraticSmoothAbs, SVG路径段_:SVGPathSeg }
接口 SVG路径段曲线二次光滑的绝对 扩展 SVG路径段_ {

    x: 数字;

    y: 数字;

}

//@@{ SVG路径段曲线二次光滑的绝对_:SVGPathSegCurvetoQuadraticSmoothAbs }
声明 值量 SVG路径段曲线二次光滑的绝对_: {

    //@@{ 原型:prototype, SVG路径段曲线二次光滑的绝对:SVGPathSegCurvetoQuadraticSmoothAbs }
    原型: SVG路径段曲线二次光滑的绝对;

    //@@{ SVG路径段曲线二次光滑的绝对:SVGPathSegCurvetoQuadraticSmoothAbs }
    新建(): SVG路径段曲线二次光滑的绝对;

};

//@@{ SVG路径段曲线二次光滑的相对_:SVGPathSegCurvetoQuadraticSmoothRel, SVG路径段_:SVGPathSeg }
接口 SVG路径段曲线二次光滑的相对_ 扩展 SVG路径段_ {

    x: 数字;

    y: 数字;

}

声明 值量 SVG路径段曲线二次光滑的相对_: {

    //@@{ 原型:prototype, SVG路径段曲线二次光滑的相对_:SVGPathSegCurvetoQuadraticSmoothRel }
    原型: SVG路径段曲线二次光滑的相对_;

    //@@{ SVG路径段曲线二次光滑的相对_:SVGPathSegCurvetoQuadraticSmoothRel }
    新建(): SVG路径段曲线二次光滑的相对_;

};

//@@{ SVG路径段线段绝对_:SVGPathSegLinetoAbs, SVG路径段_:SVGPathSeg }
接口 SVG路径段线段绝对_ 扩展 SVG路径段_ {

    x: 数字;

    y: 数字;

}

声明 值量 SVG路径段线段绝对_: {

    //@@{ 原型:prototype, SVG路径段线段绝对_:SVGPathSegLinetoAbs }
    原型: SVG路径段线段绝对_;

    //@@{ SVG路径段线段绝对_:SVGPathSegLinetoAbs }
    新建(): SVG路径段线段绝对_;

};

//@@{ SVG路径段线段水平绝对_:SVGPathSegLinetoHorizontalAbs, SVG路径段_:SVGPathSeg }
接口 SVG路径段线段水平绝对_ 扩展 SVG路径段_ {

    x: 数字;

}

声明 值量 SVG路径段线段水平绝对_: {

    //@@{ 原型:prototype, SVG路径段线段水平绝对_:SVGPathSegLinetoHorizontalAbs }
    原型: SVG路径段线段水平绝对_;

    //@@{ SVG路径段线段水平绝对_:SVGPathSegLinetoHorizontalAbs }
    新建(): SVG路径段线段水平绝对_;

};

//@@{ SVG路径段线段水平相对_:SVGPathSegLinetoHorizontalRel, SVG路径段_:SVGPathSeg }
接口 SVG路径段线段水平相对_ 扩展 SVG路径段_ {

    x: 数字;

}

声明 值量 SVG路径段线段水平相对_: {

    //@@{ 原型:prototype, SVG路径段线段水平相对_:SVGPathSegLinetoHorizontalRel }
    原型: SVG路径段线段水平相对_;

    //@@{ SVG路径段线段水平相对_:SVGPathSegLinetoHorizontalRel }
    新建(): SVG路径段线段水平相对_;

};

//@@{ SVG路径段线段相对_:SVGPathSegLinetoRel, SVG路径段_:SVGPathSeg }
接口 SVG路径段线段相对_ 扩展 SVG路径段_ {

    x: 数字;

    y: 数字;

}

声明 值量 SVG路径段线段相对_: {

    //@@{ 原型:prototype, SVG路径段线段相对_:SVGPathSegLinetoRel }
    原型: SVG路径段线段相对_;

    //@@{ SVG路径段线段相对_:SVGPathSegLinetoRel }
    新建(): SVG路径段线段相对_;

};

//@@{ SVG路径段线段垂直绝对_:SVGPathSegLinetoVerticalAbs, SVG路径段_:SVGPathSeg }
接口 SVG路径段线段垂直绝对_ 扩展 SVG路径段_ {

    y: 数字;

}

声明 值量 SVG路径段线段垂直绝对_: {

    //@@{ 原型:prototype, SVG路径段线段垂直绝对_:SVGPathSegLinetoVerticalAbs }
    原型: SVG路径段线段垂直绝对_;

    //@@{ SVG路径段线段垂直绝对_:SVGPathSegLinetoVerticalAbs }
    新建(): SVG路径段线段垂直绝对_;

};

//@@{ SVG路径段线段垂直相对_:SVGPathSegLinetoVerticalRel, SVG路径段_:SVGPathSeg }
接口 SVG路径段线段垂直相对_ 扩展 SVG路径段_ {

    y: 数字;

}

声明 值量 SVG路径段线段垂直相对_: {

    //@@{ 原型:prototype, SVG路径段线段垂直相对_:SVGPathSegLinetoVerticalRel }
    原型: SVG路径段线段垂直相对_;

    //@@{ SVG路径段线段垂直相对_:SVGPathSegLinetoVerticalRel }
    新建(): SVG路径段线段垂直相对_;

};

//@@{ SVG路径段列表_:SVGPathSegList }
接口 SVG路径段列表_ {

    //@@{ 条目的数量:numberOfItems }
    只读 条目的数量: 数字;

    //@@{ 附加项目:appendItem, 新项目:newItem, SVG路径段_:SVGPathSeg }
    附加项目(新项目: SVG路径段_): SVG路径段_;

    //@@{ 清除:clear }
    清除(): 无值;

    //@@{ 取项目:getItem, 索引:index, SVG路径段_:SVGPathSeg }
    取项目(索引: 数字): SVG路径段_;

    //@@{ 初始化:initialize, 新项目:newItem, SVG路径段_:SVGPathSeg }
    初始化(新项目: SVG路径段_): SVG路径段_;

    //@@{ 插入项目之前:insertItemBefore, 新项目:newItem, SVG路径段_:SVGPathSeg, 索引:index }
    插入项目之前(新项目: SVG路径段_, 索引: 数字): SVG路径段_;

    //@@{ 删除项目:removeItem, 索引:index, SVG路径段_:SVGPathSeg }
    删除项目(索引: 数字): SVG路径段_;

    //@@{ 替换项目:replaceItem, 新项目:newItem, SVG路径段_:SVGPathSeg, 索引:index }
    替换项目(新项目: SVG路径段_, 索引: 数字): SVG路径段_;

}

声明 值量 SVG路径段列表_: {

    //@@{ 原型:prototype, SVG路径段列表_:SVGPathSegList }
    原型: SVG路径段列表_;

    //@@{ SVG路径段列表_:SVGPathSegList }
    新建(): SVG路径段列表_;

};

//@@{ SVG路径段移至绝对_:SVGPathSegMovetoAbs, SVG路径段_:SVGPathSeg }
接口 SVG路径段移至绝对_ 扩展 SVG路径段_ {

    x: 数字;

    y: 数字;

}

声明 值量 SVG路径段移至绝对_: {

    //@@{ 原型:prototype, SVG路径段移至绝对_:SVGPathSegMovetoAbs }
    原型: SVG路径段移至绝对_;

    //@@{ SVG路径段移至绝对_:SVGPathSegMovetoAbs }
    新建(): SVG路径段移至绝对_;

};

//@@{ SVG路径段移至相对_:SVGPathSegMovetoRel, SVG路径段_:SVGPathSeg }
接口 SVG路径段移至相对_ 扩展 SVG路径段_ {

    x: 数字;

    y: 数字;

}

声明 值量 SVG路径段移至相对_: {

    //@@{ 原型:prototype, SVG路径段移至相对_:SVGPathSegMovetoRel }
    原型: SVG路径段移至相对_;

    //@@{ SVG路径段移至相对_:SVGPathSegMovetoRel }
    新建(): SVG路径段移至相对_;

};

//@@{ SVG模式元素_:SVGPatternElement, SVG元素_:SVGElement, SVG测试_:SVGTests, SVG单位类型_:SVGUnitTypes, SVG适合于视图框_:SVGFitToViewBox, SVGURI参考_:SVGURIReference }
接口 SVG模式元素_ 扩展 SVG元素_, SVG测试_, SVG单位类型_, SVG适合于视图框_, SVGURI参考_ {

    //@@{ 高度:height, SVG动画长度_:SVGAnimatedLength }
    只读 高度: SVG动画长度_;

    //@@{ 模式内容单位:patternContentUnits, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 模式内容单位: SVG动画枚举_;

    //@@{ 模式转换:patternTransform, SVG动画转换列表_:SVGAnimatedTransformList }
    只读 模式转换: SVG动画转换列表_;

    //@@{ 模式单位:patternUnits, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 模式单位: SVG动画枚举_;

    //@@{ 宽度:width, SVG动画长度_:SVGAnimatedLength }
    只读 宽度: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 x: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 y: SVG动画长度_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG模式元素_:SVGPatternElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG模式元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG模式元素_: {

    //@@{ 原型:prototype, SVG模式元素_:SVGPatternElement }
    原型: SVG模式元素_;

    //@@{ SVG模式元素_:SVGPatternElement }
    新建(): SVG模式元素_;

};

//@@{ SVG点_:SVGPoint }
接口 SVG点_ {

    x: 数字;

    y: 数字;

    //@@{ 矩阵变换:matrixTransform, 矩阵:matrix, SVG矩阵_:SVGMatrix, SVG点_:SVGPoint }
    矩阵变换(矩阵: SVG矩阵_): SVG点_;

}

声明 值量 SVG点_: {

    //@@{ 原型:prototype, SVG点_:SVGPoint }
    原型: SVG点_;

    //@@{ SVG点_:SVGPoint }
    新建(): SVG点_;

};

//@@{ SVG点列表_:SVGPointList }
接口 SVG点列表_ {

    //@@{ 条目的数量:numberOfItems }
    只读 条目的数量: 数字;

    //@@{ 附加项目:appendItem, 新项目:newItem, SVG点_:SVGPoint }
    附加项目(新项目: SVG点_): SVG点_;

    //@@{ 清除:clear }
    清除(): 无值;

    //@@{ 取项目:getItem, 索引:index, SVG点_:SVGPoint }
    取项目(索引: 数字): SVG点_;

    //@@{ 初始化:initialize, 新项目:newItem, SVG点_:SVGPoint }
    初始化(新项目: SVG点_): SVG点_;

    //@@{ 插入项目之前:insertItemBefore, 新项目:newItem, SVG点_:SVGPoint, 索引:index }
    插入项目之前(新项目: SVG点_, 索引: 数字): SVG点_;

    //@@{ 删除项目:removeItem, 索引:index, SVG点_:SVGPoint }
    删除项目(索引: 数字): SVG点_;

    //@@{ 替换项目:replaceItem, 新项目:newItem, SVG点_:SVGPoint, 索引:index }
    替换项目(新项目: SVG点_, 索引: 数字): SVG点_;

}

声明 值量 SVG点列表_: {

    //@@{ 原型:prototype, SVG点列表_:SVGPointList }
    原型: SVG点列表_;

    //@@{ SVG点列表_:SVGPointList }
    新建(): SVG点列表_;

};

//@@{ SVG多边形元素_:SVGPolygonElement, SVG图形元素_:SVGGraphicsElement, SVG动画点_:SVGAnimatedPoints }
接口 SVG多边形元素_ 扩展 SVG图形元素_, SVG动画点_ {

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG多边形元素_:SVGPolygonElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG多边形元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG多边形元素_: {

    //@@{ 原型:prototype, SVG多边形元素_:SVGPolygonElement }
    原型: SVG多边形元素_;

    //@@{ SVG多边形元素_:SVGPolygonElement }
    新建(): SVG多边形元素_;

};

//@@{ SVG折线元素_:SVGPolylineElement, SVG图形元素_:SVGGraphicsElement, SVG动画点_:SVGAnimatedPoints }
接口 SVG折线元素_ 扩展 SVG图形元素_, SVG动画点_ {

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG折线元素_:SVGPolylineElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG折线元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG折线元素_: {

    //@@{ 原型:prototype, SVG折线元素_:SVGPolylineElement }
    原型: SVG折线元素_;

    //@@{ SVG折线元素_:SVGPolylineElement }
    新建(): SVG折线元素_;

};

//@@{ SVG保持长宽比_:SVGPreserveAspectRatio }
接口 SVG保持长宽比_ {

    //@@{ 对齐:align }
    对齐: 数字;

    //@@{ 内嵌或裁剪:meetOrSlice }
    内嵌或裁剪: 数字;

    //@@{ __SVG_内嵌或裁剪_内嵌__:SVG_MEETORSLICE_MEET }
    只读 __SVG_内嵌或裁剪_内嵌__: 数字;

    //@@{ __SVG_内嵌或裁剪_裁剪__:SVG_MEETORSLICE_SLICE }
    只读 __SVG_内嵌或裁剪_裁剪__: 数字;

    //@@{ __SVG_内嵌或裁剪_未知__:SVG_MEETORSLICE_UNKNOWN }
    只读 __SVG_内嵌或裁剪_未知__: 数字;

    //@@{ __SVG_保持长宽比_无__:SVG_PRESERVEASPECTRATIO_NONE }
    只读 __SVG_保持长宽比_无__: 数字;

    //@@{ __SVG_保持长宽比_未知__:SVG_PRESERVEASPECTRATIO_UNKNOWN }
    只读 __SVG_保持长宽比_未知__: 数字;

    //@@{ __SVG_保持长宽比_X最大Y最大__:SVG_PRESERVEASPECTRATIO_XMAXYMAX }
    只读 __SVG_保持长宽比_X最大Y最大__: 数字;

    //@@{ __SVG_保持长宽比_X最大Y中间__:SVG_PRESERVEASPECTRATIO_XMAXYMID }
    只读 __SVG_保持长宽比_X最大Y中间__: 数字;

    //@@{ __SVG_保持长宽比_X最大Y最小__:SVG_PRESERVEASPECTRATIO_XMAXYMIN }
    只读 __SVG_保持长宽比_X最大Y最小__: 数字;

    //@@{ __SVG_保持长宽比_X中间Y最大__:SVG_PRESERVEASPECTRATIO_XMIDYMAX }
    只读 __SVG_保持长宽比_X中间Y最大__: 数字;

    //@@{ __SVG_保持长宽比_X中间Y中间__:SVG_PRESERVEASPECTRATIO_XMIDYMID }
    只读 __SVG_保持长宽比_X中间Y中间__: 数字;

    //@@{ __SVG_保持长宽比_X中间Y最小__:SVG_PRESERVEASPECTRATIO_XMIDYMIN }
    只读 __SVG_保持长宽比_X中间Y最小__: 数字;

    //@@{ __SVG_保持长宽比_X最小Y最大__:SVG_PRESERVEASPECTRATIO_XMINYMAX }
    只读 __SVG_保持长宽比_X最小Y最大__: 数字;

    //@@{ __SVG_保持长宽比_X最小Y中间__:SVG_PRESERVEASPECTRATIO_XMINYMID }
    只读 __SVG_保持长宽比_X最小Y中间__: 数字;

    //@@{ __SVG_保持长宽比_X最小Y最小__:SVG_PRESERVEASPECTRATIO_XMINYMIN }
    只读 __SVG_保持长宽比_X最小Y最小__: 数字;

}

声明 值量 SVG保持长宽比_: {

    //@@{ 原型:prototype, SVG保持长宽比_:SVGPreserveAspectRatio }
    原型: SVG保持长宽比_;

    //@@{ SVG保持长宽比_:SVGPreserveAspectRatio }
    新建(): SVG保持长宽比_;

    //@@{ __SVG_内嵌或裁剪_内嵌__:SVG_MEETORSLICE_MEET }
    只读 __SVG_内嵌或裁剪_内嵌__: 数字;

    //@@{ __SVG_内嵌或裁剪_裁剪__:SVG_MEETORSLICE_SLICE }
    只读 __SVG_内嵌或裁剪_裁剪__: 数字;

    //@@{ __SVG_内嵌或裁剪_未知__:SVG_MEETORSLICE_UNKNOWN }
    只读 __SVG_内嵌或裁剪_未知__: 数字;

    //@@{ __SVG_保持长宽比_无__:SVG_PRESERVEASPECTRATIO_NONE }
    只读 __SVG_保持长宽比_无__: 数字;

    //@@{ __SVG_保持长宽比_未知__:SVG_PRESERVEASPECTRATIO_UNKNOWN }
    只读 __SVG_保持长宽比_未知__: 数字;

    //@@{ __SVG_保持长宽比_X最大Y最大__:SVG_PRESERVEASPECTRATIO_XMAXYMAX }
    只读 __SVG_保持长宽比_X最大Y最大__: 数字;

    //@@{ __SVG_保持长宽比_X最大Y中间__:SVG_PRESERVEASPECTRATIO_XMAXYMID }
    只读 __SVG_保持长宽比_X最大Y中间__: 数字;

    //@@{ __SVG_保持长宽比_X最大Y最小__:SVG_PRESERVEASPECTRATIO_XMAXYMIN }
    只读 __SVG_保持长宽比_X最大Y最小__: 数字;

    //@@{ __SVG_保持长宽比_X中间Y最大__:SVG_PRESERVEASPECTRATIO_XMIDYMAX }
    只读 __SVG_保持长宽比_X中间Y最大__: 数字;

    //@@{ __SVG_保持长宽比_X中间Y中间__:SVG_PRESERVEASPECTRATIO_XMIDYMID }
    只读 __SVG_保持长宽比_X中间Y中间__: 数字;

    //@@{ __SVG_保持长宽比_X中间Y最小__:SVG_PRESERVEASPECTRATIO_XMIDYMIN }
    只读 __SVG_保持长宽比_X中间Y最小__: 数字;

    //@@{ __SVG_保持长宽比_X最小Y最大__:SVG_PRESERVEASPECTRATIO_XMINYMAX }
    只读 __SVG_保持长宽比_X最小Y最大__: 数字;

    //@@{ __SVG_保持长宽比_X最小Y中间__:SVG_PRESERVEASPECTRATIO_XMINYMID }
    只读 __SVG_保持长宽比_X最小Y中间__: 数字;

    //@@{ __SVG_保持长宽比_X最小Y最小__:SVG_PRESERVEASPECTRATIO_XMINYMIN }
    只读 __SVG_保持长宽比_X最小Y最小__: 数字;

};

//@@{ SVG径向渐变元素_:SVGRadialGradientElement, SVG渐变元素_:SVGGradientElement }
接口 SVG径向渐变元素_ 扩展 SVG渐变元素_ {

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 cx: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 cy: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 fx: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 fy: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 r: SVG动画长度_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG径向渐变元素_:SVGRadialGradientElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG径向渐变元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG径向渐变元素_: {

    //@@{ 原型:prototype, SVG径向渐变元素_:SVGRadialGradientElement }
    原型: SVG径向渐变元素_;

    //@@{ SVG径向渐变元素_:SVGRadialGradientElement }
    新建(): SVG径向渐变元素_;

};

//@@{ SVG矩形_:SVGRect }
接口 SVG矩形_ {

    //@@{ 高度:height }
    高度: 数字;

    //@@{ 宽度:width }
    宽度: 数字;

    x: 数字;

    y: 数字;

}

声明 值量 SVG矩形_: {

    //@@{ 原型:prototype, SVG矩形_:SVGRect }
    原型: SVG矩形_;

    //@@{ SVG矩形_:SVGRect }
    新建(): SVG矩形_;

};

//@@{ SVG矩形元素_:SVGRectElement, SVG图形元素_:SVGGraphicsElement }
接口 SVG矩形元素_ 扩展 SVG图形元素_ {

    //@@{ 高度:height, SVG动画长度_:SVGAnimatedLength }
    只读 高度: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 rx: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 ry: SVG动画长度_;

    //@@{ 宽度:width, SVG动画长度_:SVGAnimatedLength }
    只读 宽度: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 x: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 y: SVG动画长度_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG矩形元素_:SVGRectElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG矩形元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG矩形元素_: {

    //@@{ 原型:prototype, SVG矩形元素_:SVGRectElement }
    原型: SVG矩形元素_;

    //@@{ SVG矩形元素_:SVGRectElement }
    新建(): SVG矩形元素_;

};

//@@{ SVG脚本元素_:SVGScriptElement, SVG元素_:SVGElement, SVGURI参考_:SVGURIReference }
接口 SVG脚本元素_ 扩展 SVG元素_, SVGURI参考_ {

    //@@{ 类型:type }
    类型: 文字;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG脚本元素_:SVGScriptElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG脚本元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG脚本元素_: {

    //@@{ 原型:prototype, SVG脚本元素_:SVGScriptElement }
    原型: SVG脚本元素_;

    //@@{ SVG脚本元素_:SVGScriptElement }
    新建(): SVG脚本元素_;

};

//@@{ SVG停止元素_:SVGStopElement, SVG元素_:SVGElement }
接口 SVG停止元素_ 扩展 SVG元素_ {

    //@@{ 偏移:offset, SVG动画数字_:SVGAnimatedNumber }
    只读 偏移: SVG动画数字_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG停止元素_:SVGStopElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG停止元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG停止元素_: {

    //@@{ 原型:prototype, SVG停止元素_:SVGStopElement }
    原型: SVG停止元素_;

    //@@{ SVG停止元素_:SVGStopElement }
    新建(): SVG停止元素_;

};

//@@{ SVG文字列表_:SVGStringList }
接口 SVG文字列表_ {

    //@@{ 条目的数量:numberOfItems }
    只读 条目的数量: 数字;

    //@@{ 附加项目:appendItem, 新项目:newItem }
    附加项目(新项目: 文字): 文字;

    //@@{ 清除:clear }
    清除(): 无值;

    //@@{ 取项目:getItem, 索引:index }
    取项目(索引: 数字): 文字;

    //@@{ 初始化:initialize, 新项目:newItem }
    初始化(新项目: 文字): 文字;

    //@@{ 插入项目之前:insertItemBefore, 新项目:newItem, 索引:index }
    插入项目之前(新项目: 文字, 索引: 数字): 文字;

    //@@{ 删除项目:removeItem, 索引:index }
    删除项目(索引: 数字): 文字;

    //@@{ 替换项目:replaceItem, 新项目:newItem, 索引:index }
    替换项目(新项目: 文字, 索引: 数字): 文字;

}

声明 值量 SVG文字列表_: {

    //@@{ 原型:prototype, SVG文字列表_:SVGStringList }
    原型: SVG文字列表_;

    //@@{ SVG文字列表_:SVGStringList }
    新建(): SVG文字列表_;

};

//@@{ SVG样式元素_:SVGStyleElement, SVG元素_:SVGElement }
接口 SVG样式元素_ 扩展 SVG元素_ {

    //@@{ 禁用:disabled }
    禁用: 真假;

    //@@{ 媒体:media }
    媒体: 文字;

    //@@{ 标题:title }
    标题: 文字;

    //@@{ 类型:type }
    类型: 文字;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG样式元素_:SVGStyleElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG样式元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG样式元素_: {

    //@@{ 原型:prototype, SVG样式元素_:SVGStyleElement }
    原型: SVG样式元素_;

    //@@{ SVG样式元素_:SVGStyleElement }
    新建(): SVG样式元素_;

};

//@@{ SVGSVG元素事件映射_:SVGSVGElementEventMap, SVG元素事件映射_:SVGElementEventMap }
接口 SVGSVG元素事件映射_ 扩展 SVG元素事件映射_ {

    //@@{ "SVG终止":"SVGAbort", 事件_:Event }
    "SVG终止": 事件_;

    //@@{ "SVG错误":"SVGError", 事件_:Event }
    "SVG错误": 事件_;

    //@@{ "调整":"resize", UI事件_:UIEvent }
    "调整": UI事件_;

    //@@{ "滚动":"scroll", UI事件_:UIEvent }
    "滚动": UI事件_;

    //@@{ "SVG卸载":"SVGUnload", 事件_:Event }
    "SVG卸载": 事件_;

    //@@{ "SVG放缩":"SVGZoom", SVG放缩事件_:SVGZoomEvent }
    "SVG放缩": SVG放缩事件_;

}

//@@{ SVGSVG元素_:SVGSVGElement, SVG图形元素_:SVGGraphicsElement, 文档事件_:DocumentEvent, SVG适合于视图框_:SVGFitToViewBox, SVG放缩及平移_:SVGZoomAndPan }
接口 SVGSVG元素_ 扩展 SVG图形元素_, 文档事件_, SVG适合于视图框_, SVG放缩及平移_ {

    //@@{ 内容脚本类型:contentScriptType }
    内容脚本类型: 文字;

    //@@{ 内容样式类型:contentStyleType }
    内容样式类型: 文字;

    //@@{ 目前规模:currentScale }
    目前规模: 数字;

    //@@{ 目前的转换:currentTranslate, SVG点_:SVGPoint }
    只读 目前的转换: SVG点_;

    //@@{ 高度:height, SVG动画长度_:SVGAnimatedLength }
    只读 高度: SVG动画长度_;

    //@@{ 正在终止:onabort, SVGSVG元素_:SVGSVGElement, 事件_:Event }
    正在终止: (本体: SVGSVG元素_, ev: 事件_) => 任意;

    //@@{ 正在错误:onerror, SVGSVG元素_:SVGSVGElement, 事件_:Event }
    正在错误: (本体: SVGSVG元素_, ev: 事件_) => 任意;

    //@@{ 正在调整:onresize, SVGSVG元素_:SVGSVGElement, UI事件_:UIEvent }
    正在调整: (本体: SVGSVG元素_, ev: UI事件_) => 任意;

    //@@{ 正在滚动:onscroll, SVGSVG元素_:SVGSVGElement, UI事件_:UIEvent }
    正在滚动: (本体: SVGSVG元素_, ev: UI事件_) => 任意;

    //@@{ 正在卸载:onunload, SVGSVG元素_:SVGSVGElement, 事件_:Event }
    正在卸载: (本体: SVGSVG元素_, ev: 事件_) => 任意;

    //@@{ 正在缩放:onzoom, SVGSVG元素_:SVGSVGElement, SVG放缩事件_:SVGZoomEvent }
    正在缩放: (本体: SVGSVG元素_, ev: SVG放缩事件_) => 任意;

    //@@{ 像素单位到毫米X:pixelUnitToMillimeterX }
    只读 像素单位到毫米X: 数字;

    //@@{ 像素单位到毫米Y:pixelUnitToMillimeterY }
    只读 像素单位到毫米Y: 数字;

    //@@{ 屏幕像素到毫米X:screenPixelToMillimeterX }
    只读 屏幕像素到毫米X: 数字;

    //@@{ 屏幕像素到毫米Y:screenPixelToMillimeterY }
    只读 屏幕像素到毫米Y: 数字;

    //@@{ 可视区:viewport, SVG矩形_:SVGRect }
    只读 可视区: SVG矩形_;

    //@@{ 宽度:width, SVG动画长度_:SVGAnimatedLength }
    只读 宽度: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 x: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 y: SVG动画长度_;

    //@@{ 检查外壳:checkEnclosure, 元素:element, SVG元素_:SVGElement, 矩形:rect, SVG矩形_:SVGRect }
    检查外壳(元素: SVG元素_, 矩形: SVG矩形_): 真假;

    //@@{ 检查交叉:checkIntersection, 元素:element, SVG元素_:SVGElement, 矩形:rect, SVG矩形_:SVGRect }
    检查交叉(元素: SVG元素_, 矩形: SVG矩形_): 真假;

    //@@{ 创建SVG角:createSVGAngle, SVG角_:SVGAngle }
    创建SVG角(): SVG角_;

    //@@{ 创建SVG长度:createSVGLength, SVG长度_:SVGLength }
    创建SVG长度(): SVG长度_;

    //@@{ 创建SVG矩阵:createSVGMatrix, SVG矩阵_:SVGMatrix }
    创建SVG矩阵(): SVG矩阵_;

    //@@{ 创建SVG数字:createSVGNumber, SVG数字_:SVGNumber }
    创建SVG数字(): SVG数字_;

    //@@{ 创建SVG点:createSVGPoint, SVG点_:SVGPoint }
    创建SVG点(): SVG点_;

    //@@{ 创建SVG矩形:createSVGRect, SVG矩形_:SVGRect }
    创建SVG矩形(): SVG矩形_;

    //@@{ 创建SVG转换:createSVGTransform, SVG转换_:SVGTransform }
    创建SVG转换(): SVG转换_;

    //@@{ 创建SVG转换从矩阵:createSVGTransformFromMatrix, 矩阵:matrix, SVG矩阵_:SVGMatrix, SVG转换_:SVGTransform }
    创建SVG转换从矩阵(矩阵: SVG矩阵_): SVG转换_;

    //@@{ 取消所有选择:deselectAll }
    取消所有选择(): 无值;

    //@@{ 强制重绘:forceRedraw }
    强制重绘(): 无值;

    //@@{ 取计算风格:getComputedStyle, 元素:elt, 元素_:Element, 伪元素:pseudoElt, CSS样式声明_:CSSStyleDeclaration }
    取计算风格(元素: 元素_, 伪元素?: 文字): CSS样式声明_;

    //@@{ 取当前时间:getCurrentTime }
    取当前时间(): 数字;

    //@@{ 取元素按Id:getElementById, 元素Id:elementId, 元素_:Element }
    取元素按Id(元素Id: 文字): 元素_;

    //@@{ 取附件列表:getEnclosureList, 矩形:rect, SVG矩形_:SVGRect, 参考元素:referenceElement, SVG元素_:SVGElement, 节点列表的_:NodeListOf, SVG圆元素_:SVGCircleElement, SVG椭圆元素_:SVGEllipseElement, SVG图像元素_:SVGImageElement, SVG线元素_:SVGLineElement, SVG路径元素_:SVGPathElement, SVG多边形元素_:SVGPolygonElement, SVG折线元素_:SVGPolylineElement, SVG矩形元素_:SVGRectElement, SVG文本元素_:SVGTextElement, SVG使用元素_:SVGUseElement }
    取附件列表(矩形: SVG矩形_, 参考元素: SVG元素_): 节点列表的_<SVG圆元素_ | SVG椭圆元素_ | SVG图像元素_ | SVG线元素_ | SVG路径元素_ | SVG多边形元素_ | SVG折线元素_ | SVG矩形元素_ | SVG文本元素_ | SVG使用元素_>;

    //@@{ 取交叉列表:getIntersectionList, 矩形:rect, SVG矩形_:SVGRect, 参考元素:referenceElement, SVG元素_:SVGElement, 节点列表的_:NodeListOf, SVG圆元素_:SVGCircleElement, SVG椭圆元素_:SVGEllipseElement, SVG图像元素_:SVGImageElement, SVG线元素_:SVGLineElement, SVG路径元素_:SVGPathElement, SVG多边形元素_:SVGPolygonElement, SVG折线元素_:SVGPolylineElement, SVG矩形元素_:SVGRectElement, SVG文本元素_:SVGTextElement, SVG使用元素_:SVGUseElement }
    取交叉列表(矩形: SVG矩形_, 参考元素: SVG元素_): 节点列表的_<SVG圆元素_ | SVG椭圆元素_ | SVG图像元素_ | SVG线元素_ | SVG路径元素_ | SVG多边形元素_ | SVG折线元素_ | SVG矩形元素_ | SVG文本元素_ | SVG使用元素_>;

    //@@{ 暂停动画:pauseAnimations }
    暂停动画(): 无值;

    //@@{ 置当前时间:setCurrentTime, 秒:seconds }
    置当前时间(秒: 数字): 无值;

    //@@{ 暂停重绘:suspendRedraw, 最大等待毫秒:maxWaitMilliseconds }
    暂停重绘(最大等待毫秒: 数字): 数字;

    //@@{ 取消暂停动画:unpauseAnimations }
    取消暂停动画(): 无值;

    //@@{ 取消停止重绘:unsuspendRedraw, 暂停处理Id:suspendHandleID }
    取消停止重绘(暂停处理Id: 数字): 无值;

    //@@{ 取消停止所有重绘:unsuspendRedrawAll }
    取消停止所有重绘(): 无值;

    //@@{ 添加事件监听器:addEventListener, SVGSVG元素事件映射_:SVGSVGElementEventMap, 类型:type, 侦听器:listener, SVGSVG元素_:SVGSVGElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVGSVG元素事件映射_>(类型: K, 侦听器: (本体: SVGSVG元素_, ev: SVGSVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVGSVG元素_: {

    //@@{ 原型:prototype, SVGSVG元素_:SVGSVGElement }
    原型: SVGSVG元素_;

    //@@{ SVGSVG元素_:SVGSVGElement }
    新建(): SVGSVG元素_;

};

//@@{ SVG分支元素_:SVGSwitchElement, SVG图形元素_:SVGGraphicsElement }
接口 SVG分支元素_ 扩展 SVG图形元素_ {

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG分支元素_:SVGSwitchElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG分支元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG分支元素_: {

    //@@{ 原型:prototype, SVG分支元素_:SVGSwitchElement }
    原型: SVG分支元素_;

    //@@{ SVG分支元素_:SVGSwitchElement }
    新建(): SVG分支元素_;

};

//@@{ SVG符号元素_:SVGSymbolElement, SVG元素_:SVGElement, SVG适合于视图框_:SVGFitToViewBox }
接口 SVG符号元素_ 扩展 SVG元素_, SVG适合于视图框_ {

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG符号元素_:SVGSymbolElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG符号元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG符号元素_: {

    //@@{ 原型:prototype, SVG符号元素_:SVGSymbolElement }
    原型: SVG符号元素_;

    //@@{ SVG符号元素_:SVGSymbolElement }
    新建(): SVG符号元素_;

};

//@@{ SVG文本内容元素_:SVGTextContentElement, SVG图形元素_:SVGGraphicsElement }
接口 SVG文本内容元素_ 扩展 SVG图形元素_ {

    //@@{ 长度调整:lengthAdjust, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 长度调整: SVG动画枚举_;

    //@@{ 文本长度:textLength, SVG动画长度_:SVGAnimatedLength }
    只读 文本长度: SVG动画长度_;

    //@@{ 取字符值在位置:getCharNumAtPosition, 点:point, SVG点_:SVGPoint }
    取字符值在位置(点: SVG点_): 数字;

    //@@{ 取计算文本长度:getComputedTextLength }
    取计算文本长度(): 数字;

    //@@{ 取字符的结束位置:getEndPositionOfChar, 字符值:charnum, SVG点_:SVGPoint }
    取字符的结束位置(字符值: 数字): SVG点_;

    //@@{ 取字符的范围:getExtentOfChar, 字符值:charnum, SVG矩形_:SVGRect }
    取字符的范围(字符值: 数字): SVG矩形_;

    //@@{ 取字符的数量:getNumberOfChars }
    取字符的数量(): 数字;

    //@@{ 取字符的旋转:getRotationOfChar, 字符值:charnum }
    取字符的旋转(字符值: 数字): 数字;

    //@@{ 取开始字符的位置:getStartPositionOfChar, 字符值:charnum, SVG点_:SVGPoint }
    取开始字符的位置(字符值: 数字): SVG点_;

    //@@{ 取子字符串长度:getSubStringLength, 字符值:charnum, 字符数量:nchars }
    取子字符串长度(字符值: 数字, 字符数量: 数字): 数字;

    //@@{ 选择子字符串:selectSubString, 字符值:charnum, 字符数量:nchars }
    选择子字符串(字符值: 数字, 字符数量: 数字): 无值;

    //@@{ __长度调整_间距__:LENGTHADJUST_SPACING }
    只读 __长度调整_间距__: 数字;

    //@@{ __长度调整_间距和字形__:LENGTHADJUST_SPACINGANDGLYPHS }
    只读 __长度调整_间距和字形__: 数字;

    //@@{ __长度调整_未知__:LENGTHADJUST_UNKNOWN }
    只读 __长度调整_未知__: 数字;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG文本内容元素_:SVGTextContentElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG文本内容元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG文本内容元素_: {

    //@@{ 原型:prototype, SVG文本内容元素_:SVGTextContentElement }
    原型: SVG文本内容元素_;

    //@@{ SVG文本内容元素_:SVGTextContentElement }
    新建(): SVG文本内容元素_;

    //@@{ __长度调整_间距__:LENGTHADJUST_SPACING }
    只读 __长度调整_间距__: 数字;

    //@@{ __长度调整_间距和字形__:LENGTHADJUST_SPACINGANDGLYPHS }
    只读 __长度调整_间距和字形__: 数字;

    //@@{ __长度调整_未知__:LENGTHADJUST_UNKNOWN }
    只读 __长度调整_未知__: 数字;

};

//@@{ SVG文本元素_:SVGTextElement, SVG文本点位元素_:SVGTextPositioningElement }
接口 SVG文本元素_ 扩展 SVG文本点位元素_ {

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG文本元素_:SVGTextElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG文本元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG文本元素_: {

    //@@{ 原型:prototype, SVG文本元素_:SVGTextElement }
    原型: SVG文本元素_;

    //@@{ SVG文本元素_:SVGTextElement }
    新建(): SVG文本元素_;

};

//@@{ SVG文本路径元素_:SVGTextPathElement, SVG文本内容元素_:SVGTextContentElement, SVGURI参考_:SVGURIReference }
接口 SVG文本路径元素_ 扩展 SVG文本内容元素_, SVGURI参考_ {

    //@@{ 方法:method, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 方法: SVG动画枚举_;

    //@@{ 间距:spacing, SVG动画枚举_:SVGAnimatedEnumeration }
    只读 间距: SVG动画枚举_;

    //@@{ 起始偏移量:startOffset, SVG动画长度_:SVGAnimatedLength }
    只读 起始偏移量: SVG动画长度_;

    //@@{ __文本路径_方法类型_对齐__:TEXTPATH_METHODTYPE_ALIGN }
    只读 __文本路径_方法类型_对齐__: 数字;

    //@@{ __文本路径_方法类型_拉伸__:TEXTPATH_METHODTYPE_STRETCH }
    只读 __文本路径_方法类型_拉伸__: 数字;

    //@@{ __TEXTPATH_方法类型_未知__:TEXTPATH_METHODTYPE_UNKNOWN }
    只读 __TEXTPATH_方法类型_未知__: 数字;

    //@@{ __文本路径_间距类型_自动__:TEXTPATH_SPACINGTYPE_AUTO }
    只读 __文本路径_间距类型_自动__: 数字;

    //@@{ __文本路径_间距类型_确切的__:TEXTPATH_SPACINGTYPE_EXACT }
    只读 __文本路径_间距类型_确切的__: 数字;

    //@@{ __文本路径_间距类型_未知__:TEXTPATH_SPACINGTYPE_UNKNOWN }
    只读 __文本路径_间距类型_未知__: 数字;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG文本路径元素_:SVGTextPathElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG文本路径元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG文本路径元素_: {

    //@@{ 原型:prototype, SVG文本路径元素_:SVGTextPathElement }
    原型: SVG文本路径元素_;

    //@@{ SVG文本路径元素_:SVGTextPathElement }
    新建(): SVG文本路径元素_;

    //@@{ __文本路径_方法类型_对齐__:TEXTPATH_METHODTYPE_ALIGN }
    只读 __文本路径_方法类型_对齐__: 数字;

    //@@{ __文本路径_方法类型_拉伸__:TEXTPATH_METHODTYPE_STRETCH }
    只读 __文本路径_方法类型_拉伸__: 数字;

    //@@{ __文本路径_方法类型_未知__:TEXTPATH_METHODTYPE_UNKNOWN }
    只读 __文本路径_方法类型_未知__: 数字;

    //@@{ __文本路径_间距类型_自动__:TEXTPATH_SPACINGTYPE_AUTO }
    只读 __文本路径_间距类型_自动__: 数字;

    //@@{ __文本路径_间距类型_确切的__:TEXTPATH_SPACINGTYPE_EXACT }
    只读 __文本路径_间距类型_确切的__: 数字;

    //@@{ __文本路径_间距类型_未知__:TEXTPATH_SPACINGTYPE_UNKNOWN }
    只读 __文本路径_间距类型_未知__: 数字;

};

//@@{ SVG文本点位元素_:SVGTextPositioningElement, SVG文本内容元素_:SVGTextContentElement }
接口 SVG文本点位元素_ 扩展 SVG文本内容元素_ {

    //@@{ dx:dx, SVG动画长度列表_:SVGAnimatedLengthList }
    只读 dx: SVG动画长度列表_;

    //@@{ dy:dy, SVG动画长度列表_:SVGAnimatedLengthList }
    只读 dy: SVG动画长度列表_;

    //@@{ 旋转:rotate, SVG动画数字列表_:SVGAnimatedNumberList }
    只读 旋转: SVG动画数字列表_;

    //@@{ SVG动画长度列表_:SVGAnimatedLengthList }
    只读 x: SVG动画长度列表_;

    //@@{ SVG动画长度列表_:SVGAnimatedLengthList }
    只读 y: SVG动画长度列表_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG文本点位元素_:SVGTextPositioningElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG文本点位元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG文本点位元素_: {

    //@@{ 原型:prototype, SVG文本点位元素_:SVGTextPositioningElement }
    原型: SVG文本点位元素_;

    //@@{ SVG文本点位元素_:SVGTextPositioningElement }
    新建(): SVG文本点位元素_;

};

//@@{ SVG标题元素_:SVGTitleElement, SVG元素_:SVGElement }
接口 SVG标题元素_ 扩展 SVG元素_ {

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG标题元素_:SVGTitleElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG标题元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG标题元素_: {

    //@@{ 原型:prototype, SVG标题元素_:SVGTitleElement }
    原型: SVG标题元素_;

    //@@{ SVG标题元素_:SVGTitleElement }
    新建(): SVG标题元素_;

};

//@@{ SVG转换_:SVGTransform }
接口 SVG转换_ {

    //@@{ 角:angle }
    只读 角: 数字;

    //@@{ 矩阵:matrix, SVG矩阵_:SVGMatrix }
    只读 矩阵: SVG矩阵_;

    //@@{ 类型:type }
    只读 类型: 数字;

    //@@{ 置矩阵:setMatrix, 矩阵:matrix, SVG矩阵_:SVGMatrix }
    置矩阵(矩阵: SVG矩阵_): 无值;

    //@@{ 置旋转:setRotate, 角:angle }
    置旋转(角: 数字, cx: 数字, cy: 数字): 无值;

    //@@{ 置缩放:setScale }
    置缩放(sx: 数字, sy: 数字): 无值;

    //@@{ 置倾斜X:setSkewX, 角:angle }
    置倾斜X(角: 数字): 无值;

    //@@{ 置倾斜Y:setSkewY, 角:angle }
    置倾斜Y(角: 数字): 无值;

    //@@{ 置转换:setTranslate }
    置转换(tx: 数字, ty: 数字): 无值;

    //@@{ __SVG_转换_矩阵__:SVG_TRANSFORM_MATRIX }
    只读 __SVG_转换_矩阵__: 数字;

    //@@{ __SVG_转换_旋转__:SVG_TRANSFORM_ROTATE }
    只读 __SVG_转换_旋转__: 数字;

    //@@{ __SVG_转换_规模__:SVG_TRANSFORM_SCALE }
    只读 __SVG_转换_规模__: 数字;

    //@@{ __SVG_转换_倾斜X__:SVG_TRANSFORM_SKEWX }
    只读 __SVG_转换_倾斜X__: 数字;

    //@@{ __SVG_转换_倾斜Y__:SVG_TRANSFORM_SKEWY }
    只读 __SVG_转换_倾斜Y__: 数字;

    //@@{ __SVG_转换_转换__:SVG_TRANSFORM_TRANSLATE }
    只读 __SVG_转换_转换__: 数字;

    //@@{ __SVG_转换_未知__:SVG_TRANSFORM_UNKNOWN }
    只读 __SVG_转换_未知__: 数字;

}

声明 值量 SVG转换_: {

    //@@{ 原型:prototype, SVG转换_:SVGTransform }
    原型: SVG转换_;

    //@@{ SVG转换_:SVGTransform }
    新建(): SVG转换_;

    //@@{ __SVG_转换_矩阵__:SVG_TRANSFORM_MATRIX }
    只读 __SVG_转换_矩阵__: 数字;

    //@@{ __SVG_转换_旋转__:SVG_TRANSFORM_ROTATE }
    只读 __SVG_转换_旋转__: 数字;

    //@@{ __SVG_转换_缩放__:SVG_TRANSFORM_SCALE }
    只读 __SVG_转换_缩放__: 数字;

    //@@{ __SVG_转换_倾斜X__:SVG_TRANSFORM_SKEWX }
    只读 __SVG_转换_倾斜X__: 数字;

    //@@{ __SVG_转换_倾斜Y__:SVG_TRANSFORM_SKEWY }
    只读 __SVG_转换_倾斜Y__: 数字;

    //@@{ __SVG_转换_转换__:SVG_TRANSFORM_TRANSLATE }
    只读 __SVG_转换_转换__: 数字;

    //@@{ __SVG_转换_未知__:SVG_TRANSFORM_UNKNOWN }
    只读 __SVG_转换_未知__: 数字;

};

//@@{ SVG转换列表_:SVGTransformList }
接口 SVG转换列表_ {

    //@@{ 条目的数量:numberOfItems }
    只读 条目的数量: 数字;

    //@@{ 附加项目:appendItem, 新项目:newItem, SVG转换_:SVGTransform }
    附加项目(新项目: SVG转换_): SVG转换_;

    //@@{ 清除:clear }
    清除(): 无值;

    //@@{ 合成:consolidate, SVG转换_:SVGTransform }
    合成(): SVG转换_;

    //@@{ 创建SVG转换从矩阵:createSVGTransformFromMatrix, 矩阵:matrix, SVG矩阵_:SVGMatrix, SVG转换_:SVGTransform }
    创建SVG转换从矩阵(矩阵: SVG矩阵_): SVG转换_;

    //@@{ 取项目:getItem, 索引:index, SVG转换_:SVGTransform }
    取项目(索引: 数字): SVG转换_;

    //@@{ 初始化:initialize, 新项目:newItem, SVG转换_:SVGTransform }
    初始化(新项目: SVG转换_): SVG转换_;

    //@@{ 插入项目之前:insertItemBefore, 新项目:newItem, SVG转换_:SVGTransform, 索引:index }
    插入项目之前(新项目: SVG转换_, 索引: 数字): SVG转换_;

    //@@{ 删除项目:removeItem, 索引:index, SVG转换_:SVGTransform }
    删除项目(索引: 数字): SVG转换_;

    //@@{ 替换项目:replaceItem, 新项目:newItem, SVG转换_:SVGTransform, 索引:index }
    替换项目(新项目: SVG转换_, 索引: 数字): SVG转换_;

}

声明 值量 SVG转换列表_: {

    //@@{ 原型:prototype, SVG转换列表_:SVGTransformList }
    原型: SVG转换列表_;

    //@@{ SVG转换列表_:SVGTransformList }
    新建(): SVG转换列表_;

};

//@@{ SVG文本跨度元素_:SVGTSpanElement, SVG文本点位元素_:SVGTextPositioningElement }
接口 SVG文本跨度元素_ 扩展 SVG文本点位元素_ {

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG文本跨度元素_:SVGTSpanElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG文本跨度元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG文本跨度元素_: {

    //@@{ 原型:prototype, SVG文本跨度元素_:SVGTSpanElement }
    原型: SVG文本跨度元素_;

    //@@{ SVG文本跨度元素_:SVGTSpanElement }
    新建(): SVG文本跨度元素_;

};

//@@{ SVG单位类型_:SVGUnitTypes }
接口 SVG单位类型_ {

    //@@{ __SVG_单位_类型_对象边界框__:SVG_UNIT_TYPE_OBJECTBOUNDINGBOX }
    只读 __SVG_单位_类型_对象边界框__: 数字;

    //@@{ __SVG_单位_类型_未知__:SVG_UNIT_TYPE_UNKNOWN }
    只读 __SVG_单位_类型_未知__: 数字;

    //@@{ __SVG_单位_类型_采用用户空间__:SVG_UNIT_TYPE_USERSPACEONUSE }
    只读 __SVG_单位_类型_采用用户空间__: 数字;

}

//@@{ SVG单元类型_:SVGUnitTypes, SVG单位类型_:SVGUnitTypes }
声明 值量 SVG单元类型_: SVG单位类型_;

//@@{ SVG使用元素_:SVGUseElement, SVG图形元素_:SVGGraphicsElement, SVGURI参考_:SVGURIReference }
接口 SVG使用元素_ 扩展 SVG图形元素_, SVGURI参考_ {

    //@@{ 动画实例的根:animatedInstanceRoot, SVG元素实例_:SVGElementInstance }
    只读 动画实例的根: SVG元素实例_;

    //@@{ 高度:height, SVG动画长度_:SVGAnimatedLength }
    只读 高度: SVG动画长度_;

    //@@{ 实例的根:instanceRoot, SVG元素实例_:SVGElementInstance }
    只读 实例的根: SVG元素实例_;

    //@@{ 宽度:width, SVG动画长度_:SVGAnimatedLength }
    只读 宽度: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 x: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 y: SVG动画长度_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG使用元素_:SVGUseElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG使用元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG使用元素_: {

    //@@{ 原型:prototype, SVG使用元素_:SVGUseElement }
    原型: SVG使用元素_;

    //@@{ SVG使用元素_:SVGUseElement }
    新建(): SVG使用元素_;

};

//@@{ SVG视图元素_:SVGViewElement, SVG元素_:SVGElement, SVG放缩及平移_:SVGZoomAndPan, SVG适合于视图框_:SVGFitToViewBox }
接口 SVG视图元素_ 扩展 SVG元素_, SVG放缩及平移_, SVG适合于视图框_ {

    //@@{ 视图目标:viewTarget, SVG文字列表_:SVGStringList }
    只读 视图目标: SVG文字列表_;

    //@@{ 添加事件监听器:addEventListener, SVG元素事件映射_:SVGElementEventMap, 类型:type, 侦听器:listener, SVG视图元素_:SVGViewElement, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 SVG元素事件映射_>(类型: K, 侦听器: (本体: SVG视图元素_, ev: SVG元素事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 添加事件监听器:addEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 SVG视图元素_: {

    //@@{ 原型:prototype, SVG视图元素_:SVGViewElement }
    原型: SVG视图元素_;

    //@@{ SVG视图元素_:SVGViewElement }
    新建(): SVG视图元素_;

};

//@@{ SVG放缩及平移_:SVGZoomAndPan }
接口 SVG放缩及平移_ {

    //@@{ 放缩及平移:zoomAndPan }
    只读 放缩及平移: 数字;

}

声明 值量 SVG放缩及平移_: {

    //@@{ __SVG_放缩及平移_禁用__:SVG_ZOOMANDPAN_DISABLE }
    只读 __SVG_放缩及平移_禁用__: 数字;

    //@@{ __SVG_放缩及平移_放大__:SVG_ZOOMANDPAN_MAGNIFY }
    只读 __SVG_放缩及平移_放大__: 数字;

    //@@{ __SVG_放缩及平移_未知__:SVG_ZOOMANDPAN_UNKNOWN }
    只读 __SVG_放缩及平移_未知__: 数字;

};

//@@{ SVG放缩事件_:SVGZoomEvent, UI事件_:UIEvent }
接口 SVG放缩事件_ 扩展 UI事件_ {

    //@@{ 新放缩:newScale }
    只读 新放缩: 数字;

    //@@{ 新转换:newTranslate, SVG点_:SVGPoint }
    只读 新转换: SVG点_;

    //@@{ 以前的放缩:previousScale }
    只读 以前的放缩: 数字;

    //@@{ 之前的翻转:previousTranslate, SVG点_:SVGPoint }
    只读 之前的翻转: SVG点_;

    //@@{ 放缩矩形屏幕:zoomRectScreen, SVG矩形_:SVGRect }
    只读 放缩矩形屏幕: SVG矩形_;

}

声明 值量 SVG放缩事件_: {

    //@@{ 原型:prototype, SVG放缩事件_:SVGZoomEvent }
    原型: SVG放缩事件_;

    //@@{ SVG放缩事件_:SVGZoomEvent }
    新建(): SVG放缩事件_;

};

//@@{ 同步管理器_:SyncManager }
接口 同步管理器_ {

    //@@{ 取标签:getTags, 预设_:Promise }
    取标签(): 预设_<文字[]>;

    //@@{ 注册:register, 标签:tag, 预设_:Promise }
    注册(标签: 文字): 预设_<无值>;

}

声明 值量 同步管理器_: {

    //@@{ 原型:prototype, 同步管理器_:SyncManager }
    原型: 同步管理器_;

    //@@{ 同步管理器_:SyncManager }
    新建(): 同步管理器_;

};

//@@{ 文本_:Text, 字符数据_:CharacterData }
接口 文本_ 扩展 字符数据_ {

    //@@{ 整个文本:wholeText }
    只读 整个文本: 文字;

    //@@{ 指定限位符:assignedSlot, HTML限位符元素_:HTMLSlotElement }
    只读 指定限位符: HTML限位符元素_ | 空值;

    //@@{ 分割文本:splitText, 偏移:offset, 文本_:Text }
    分割文本(偏移: 数字): 文本_;

}

声明 值量 文本_: {

    //@@{ 原型:prototype, 文本_:Text }
    原型: 文本_;

    //@@{ 数据:data, 文本_:Text }
    新建(数据?: 文字): 文本_;

};

//@@{ 文本事件_:TextEvent, UI事件_:UIEvent }
接口 文本事件_ 扩展 UI事件_ {

    //@@{ 数据:data }
    只读 数据: 文字;

    //@@{ 输入法:inputMethod }
    只读 输入法: 数字;

    //@@{ 语言环境:locale }
    只读 语言环境: 文字;

    //@@{ 初始化文本事件:initTextEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 视图参数:viewArg, 窗口_:Window, 数据参数:dataArg, 输入法:inputMethod, 语言环境:locale }
    初始化文本事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 视图参数: 窗口_, 数据参数: 文字, 输入法: 数字, 语言环境: 文字): 无值;

    //@@{ __文档_输入法_下降__:DOM_INPUT_METHOD_DROP }
    只读 __文档_输入法_下降__: 数字;

    //@@{ __文档_输入法_笔迹__:DOM_INPUT_METHOD_HANDWRITING }
    只读 __文档_输入法_笔迹__: 数字;

    //@@{ __文档_输入法_设置__:DOM_INPUT_METHOD_IME }
    只读 __文档_输入法_设置__: 数字;

    //@@{ __文档_输入法_键盘__:DOM_INPUT_METHOD_KEYBOARD }
    只读 __文档_输入法_键盘__: 数字;

    //@@{ __文档_输入法_多通道__:DOM_INPUT_METHOD_MULTIMODAL }
    只读 __文档_输入法_多通道__: 数字;

    //@@{ __文档_输入法_选项__:DOM_INPUT_METHOD_OPTION }
    只读 __文档_输入法_选项__: 数字;

    //@@{ __文档_输入法_粘贴__:DOM_INPUT_METHOD_PASTE }
    只读 __文档_输入法_粘贴__: 数字;

    //@@{ __文档_输入法_脚本__:DOM_INPUT_METHOD_SCRIPT }
    只读 __文档_输入法_脚本__: 数字;

    //@@{ __文档_输入法_未知__:DOM_INPUT_METHOD_UNKNOWN }
    只读 __文档_输入法_未知__: 数字;

    //@@{ __文档_输入法_语音__:DOM_INPUT_METHOD_VOICE }
    只读 __文档_输入法_语音__: 数字;

}

声明 值量 文本事件_: {

    //@@{ 原型:prototype, 文本事件_:TextEvent }
    原型: 文本事件_;

    //@@{ 文本事件_:TextEvent }
    新建(): 文本事件_;

    //@@{ __文档_输入法_下降__:DOM_INPUT_METHOD_DROP }
    只读 __文档_输入法_下降__: 数字;

    //@@{ __文档_输入法_笔迹__:DOM_INPUT_METHOD_HANDWRITING }
    只读 __文档_输入法_笔迹__: 数字;

    //@@{ __文档_输入法_设置__:DOM_INPUT_METHOD_IME }
    只读 __文档_输入法_设置__: 数字;

    //@@{ __文档_输入法_键盘__:DOM_INPUT_METHOD_KEYBOARD }
    只读 __文档_输入法_键盘__: 数字;

    //@@{ __文档_输入法_多通道__:DOM_INPUT_METHOD_MULTIMODAL }
    只读 __文档_输入法_多通道__: 数字;

    //@@{ __文档_输入法_选项__:DOM_INPUT_METHOD_OPTION }
    只读 __文档_输入法_选项__: 数字;

    //@@{ __文档_输入法_粘贴__:DOM_INPUT_METHOD_PASTE }
    只读 __文档_输入法_粘贴__: 数字;

    //@@{ __文档_输入法_脚本__:DOM_INPUT_METHOD_SCRIPT }
    只读 __文档_输入法_脚本__: 数字;

    //@@{ __文档_输入法_未知__:DOM_INPUT_METHOD_UNKNOWN }
    只读 __文档_输入法_未知__: 数字;

    //@@{ __文档_输入法_语音__:DOM_INPUT_METHOD_VOICE }
    只读 __文档_输入法_语音__: 数字;

};

//@@{ 文本指标_:TextMetrics }
接口 文本指标_ {

    //@@{ 宽度:width }
    只读 宽度: 数字;

}

声明 值量 文本指标_: {

    //@@{ 原型:prototype, 文本指标_:TextMetrics }
    原型: 文本指标_;

    //@@{ 文本指标_:TextMetrics }
    新建(): 文本指标_;

};

//@@{ 文本轨道事件映射_:TextTrackEventMap }
接口 文本轨道事件映射_ {

    //@@{ "提示改变":"cuechange", 事件_:Event }
    "提示改变": 事件_;

    //@@{ "错误":"error", 事件_:Event }
    "错误": 事件_;

    //@@{ "加载":"load", 事件_:Event }
    "加载": 事件_;

}

//@@{ 文本轨道_:TextTrack, 事件目标_:EventTarget }
接口 文本轨道_ 扩展 事件目标_ {

    //@@{ 活动提示:activeCues, 文本轨道提示列表_:TextTrackCueList }
    只读 活动提示: 文本轨道提示列表_;

    //@@{ 提示:cues, 文本轨道提示列表_:TextTrackCueList }
    只读 提示: 文本轨道提示列表_;

    //@@{ 在带元数据的轨道调度类型:inBandMetadataTrackDispatchType }
    只读 在带元数据的轨道调度类型: 文字;

    //@@{ 种类:kind }
    只读 种类: 文字;

    //@@{ 标签:label }
    只读 标签: 文字;

    //@@{ 语言:language }
    只读 语言: 文字;

    //@@{ 模式:mode }
    模式: 任意;

    //@@{ 正在提示改变:oncuechange, 文本轨道_:TextTrack, 事件_:Event }
    正在提示改变: (本体: 文本轨道_, ev: 事件_) => 任意;

    //@@{ 正在错误:onerror, 文本轨道_:TextTrack, 事件_:Event }
    正在错误: (本体: 文本轨道_, ev: 事件_) => 任意;

    //@@{ 正在加载:onload, 文本轨道_:TextTrack, 事件_:Event }
    正在加载: (本体: 文本轨道_, ev: 事件_) => 任意;

    //@@{ 就绪状态:readyState }
    只读 就绪状态: 数字;

    //@@{ 添加提示:addCue, 提示:cue, 文本轨道提示_:TextTrackCue }
    添加提示(提示: 文本轨道提示_): 无值;

    //@@{ 删除提示:removeCue, 提示:cue, 文本轨道提示_:TextTrackCue }
    删除提示(提示: 文本轨道提示_): 无值;

    //@@{ __禁用__:DISABLED }
    只读 __禁用__: 数字;

    //@@{ __错误__:ERROR }
    只读 __错误__: 数字;

    //@@{ __隐藏的__:HIDDEN }
    只读 __隐藏的__: 数字;

    //@@{ __加载__:LOADED }
    只读 __加载__: 数字;

    //@@{ __加载中__:LOADING }
    只读 __加载中__: 数字;

    //@@{ __没有__:NONE }
    只读 __没有__: 数字;

    //@@{ __显示的__:SHOWING }
    只读 __显示的__: 数字;

    //@@{ 添加事件监听器:addEventListener, 文本轨道事件映射_:TextTrackEventMap, 类型:type, 侦听器:listener, 文本轨道_:TextTrack, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 文本轨道事件映射_>(类型: K, 侦听器: (本体: 文本轨道_, ev: 文本轨道事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 文本轨道_: {

    //@@{ 原型:prototype, 文本轨道_:TextTrack }
    原型: 文本轨道_;

    //@@{ 文本轨道_:TextTrack }
    新建(): 文本轨道_;

    //@@{ __禁用__:DISABLED }
    只读 __禁用__: 数字;

    //@@{ __错误__:ERROR }
    只读 __错误__: 数字;

    //@@{ __隐藏的__:HIDDEN }
    只读 __隐藏的__: 数字;

    //@@{ __加载__:LOADED }
    只读 __加载__: 数字;

    //@@{ __加载中__:LOADING }
    只读 __加载中__: 数字;

    //@@{ __没有__:NONE }
    只读 __没有__: 数字;

    //@@{ __显示的__:SHOWING }
    只读 __显示的__: 数字;

};

//@@{ 文本轨道提示事件映射_:TextTrackCueEventMap }
接口 文本轨道提示事件映射_ {

    //@@{ "确认":"enter", 事件_:Event }
    "确认": 事件_;

    //@@{ "退出":"exit", 事件_:Event }
    "退出": 事件_;

}

//@@{ 文本轨道提示_:TextTrackCue, 事件目标_:EventTarget }
接口 文本轨道提示_ 扩展 事件目标_ {

    //@@{ 结束时间:endTime }
    结束时间: 数字;

    id: 文字;

    //@@{ 正在确认:onenter, 文本轨道提示_:TextTrackCue, 事件_:Event }
    正在确认: (本体: 文本轨道提示_, ev: 事件_) => 任意;

    //@@{ 正在退出:onexit, 文本轨道提示_:TextTrackCue, 事件_:Event }
    正在退出: (本体: 文本轨道提示_, ev: 事件_) => 任意;

    //@@{ 暂停在退出时:pauseOnExit }
    暂停在退出时: 真假;

    //@@{ 开始时间:startTime }
    开始时间: 数字;

    //@@{ 文本:text }
    文本: 文字;

    //@@{ 轨道:track, 文本轨道_:TextTrack }
    只读 轨道: 文本轨道_;

    //@@{ 取提示转为HTML:getCueAsHTML, 文档片段_:DocumentFragment }
    取提示转为HTML(): 文档片段_;

    //@@{ 添加事件监听器:addEventListener, 文本轨道提示事件映射_:TextTrackCueEventMap, 类型:type, 侦听器:listener, 文本轨道提示_:TextTrackCue, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 文本轨道提示事件映射_>(类型: K, 侦听器: (本体: 文本轨道提示_, ev: 文本轨道提示事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 文本轨道提示_: {

    //@@{ 原型:prototype, 文本轨道提示_:TextTrackCue }
    原型: 文本轨道提示_;

    //@@{ 开始时间:startTime, 结束时间:endTime, 文本:text, 文本轨道提示_:TextTrackCue }
    新建(开始时间: 数字, 结束时间: 数字, 文本: 文字): 文本轨道提示_;

};

//@@{ 文本轨道提示列表_:TextTrackCueList }
接口 文本轨道提示列表_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 取提示按Id:getCueById, 文本轨道提示_:TextTrackCue }
    取提示按Id(id: 文字): 文本轨道提示_;

    //@@{ 项目:item, 索引:index, 文本轨道提示_:TextTrackCue }
    项目(索引: 数字): 文本轨道提示_;

    //@@{ 索引:index, 文本轨道提示_:TextTrackCue }
    [索引: 数字]: 文本轨道提示_;

}

声明 值量 文本轨道提示列表_: {

    //@@{ 原型:prototype, 文本轨道提示列表_:TextTrackCueList }
    原型: 文本轨道提示列表_;

    //@@{ 文本轨道提示列表_:TextTrackCueList }
    新建(): 文本轨道提示列表_;

};

//@@{ 文本轨道列表事件映射_:TextTrackListEventMap }
接口 文本轨道列表事件映射_ {

    //@@{ "添加轨道":"addtrack", 轨道事件_:TrackEvent }
    "添加轨道": 轨道事件_;

}

//@@{ 文本轨道列表_:TextTrackList, 事件目标_:EventTarget }
接口 文本轨道列表_ 扩展 事件目标_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 正在添加轨道:onaddtrack, 文本轨道列表_:TextTrackList, 轨道事件_:TrackEvent }
    正在添加轨道: ((本体: 文本轨道列表_, ev: 轨道事件_) => 任意) | 空值;

    //@@{ 项目:item, 索引:index, 文本轨道_:TextTrack }
    项目(索引: 数字): 文本轨道_;

    //@@{ 添加事件监听器:addEventListener, 文本轨道列表事件映射_:TextTrackListEventMap, 类型:type, 侦听器:listener, 文本轨道列表_:TextTrackList, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 文本轨道列表事件映射_>(类型: K, 侦听器: (本体: 文本轨道列表_, ev: 文本轨道列表事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

    //@@{ 索引:index, 文本轨道_:TextTrack }
    [索引: 数字]: 文本轨道_;

}

声明 值量 文本轨道列表_: {

    //@@{ 原型:prototype, 文本轨道列表_:TextTrackList }
    原型: 文本轨道列表_;

    //@@{ 文本轨道列表_:TextTrackList }
    新建(): 文本轨道列表_;

};

//@@{ 时间范围_:TimeRanges }
接口 时间范围_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 结束:end, 索引:index }
    结束(索引: 数字): 数字;

    //@@{ 开始:start, 索引:index }
    开始(索引: 数字): 数字;

}

声明 值量 时间范围_: {

    //@@{ 原型:prototype, 时间范围_:TimeRanges }
    原型: 时间范围_;

    //@@{ 时间范围_:TimeRanges }
    新建(): 时间范围_;

};

//@@{ 触摸_:Touch }
接口 触摸_ {

    //@@{ 客户X:clientX }
    只读 客户X: 数字;

    //@@{ 客户Y:clientY }
    只读 客户Y: 数字;

    //@@{ 标识符:identifier }
    只读 标识符: 数字;

    //@@{ 页面X:pageX }
    只读 页面X: 数字;

    //@@{ 页面Y:pageY }
    只读 页面Y: 数字;

    //@@{ 屏幕X:screenX }
    只读 屏幕X: 数字;

    //@@{ 屏幕Y:screenY }
    只读 屏幕Y: 数字;

    //@@{ 目标:target, 事件目标_:EventTarget }
    只读 目标: 事件目标_;

}

声明 值量 触摸_: {

    //@@{ 原型:prototype, 触摸_:Touch }
    原型: 触摸_;

    //@@{ 触摸_:Touch }
    新建(): 触摸_;

};

//@@{ 触摸事件_:TouchEvent, UI事件_:UIEvent }
接口 触摸事件_ 扩展 UI事件_ {

    //@@{ alt键:altKey }
    只读 alt键: 真假;

    //@@{ 改变触摸集:changedTouches, 触摸列表_:TouchList }
    只读 改变触摸集: 触摸列表_;

    //@@{ 字符代码:charCode }
    只读 字符代码: 数字;

    //@@{ ctrl键:ctrlKey }
    只读 ctrl键: 真假;

    //@@{ 键代码:keyCode }
    只读 键代码: 数字;

    //@@{ meta键:metaKey }
    只读 meta键: 真假;

    //@@{ shift键:shiftKey }
    只读 shift键: 真假;

    //@@{ 触摸目标:targetTouches, 触摸列表_:TouchList }
    只读 触摸目标: 触摸列表_;

    //@@{ 触摸组:touches, 触摸列表_:TouchList }
    只读 触摸组: 触摸列表_;

    //@@{ 哪个:which }
    只读 哪个: 数字;

}

声明 值量 触摸事件_: {

    //@@{ 原型:prototype, 触摸事件_:TouchEvent }
    原型: 触摸事件_;

    //@@{ 类型:type, 触摸事件初始化:touchEventInit, 触摸事件初始化_:TouchEventInit, 触摸事件_:TouchEvent }
    新建(类型: 文字, 触摸事件初始化?: 触摸事件初始化_): 触摸事件_;

};

//@@{ 触摸列表_:TouchList }
接口 触摸列表_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 项目:item, 索引:index, 触摸_:Touch }
    项目(索引: 数字): 触摸_ | 空值;

    //@@{ 索引:index, 触摸_:Touch }
    [索引: 数字]: 触摸_;

}

声明 值量 触摸列表_: {

    //@@{ 原型:prototype, 触摸列表_:TouchList }
    原型: 触摸列表_;

    //@@{ 触摸列表_:TouchList }
    新建(): 触摸列表_;

};

//@@{ 轨道事件_:TrackEvent, 事件_:Event }
接口 轨道事件_ 扩展 事件_ {

    //@@{ 轨道:track, 视频轨道_:VideoTrack, 音频轨道_:AudioTrack, 文本轨道_:TextTrack }
    只读 轨道: 视频轨道_ | 音频轨道_ | 文本轨道_ | 空值;

}

声明 值量 轨道事件_: {

    //@@{ 原型:prototype, 轨道事件_:TrackEvent }
    原型: 轨道事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 轨道事件初始化_:TrackEventInit, 轨道事件_:TrackEvent }
    新建(类型参数: 文字, 事件初始化词典?: 轨道事件初始化_): 轨道事件_;

};

//@@{ 过渡事件_:TransitionEvent, 事件_:Event }
接口 过渡事件_ 扩展 事件_ {

    //@@{ 运行时间:elapsedTime }
    只读 运行时间: 数字;

    //@@{ 属性名:propertyName }
    只读 属性名: 文字;

    //@@{ 初始化过渡事件:initTransitionEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 属性名参数:propertyNameArg, 运行时间参数:elapsedTimeArg }
    初始化过渡事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 属性名参数: 文字, 运行时间参数: 数字): 无值;

}

声明 值量 过渡事件_: {

    //@@{ 原型:prototype, 过渡事件_:TransitionEvent }
    原型: 过渡事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 过渡事件初始化_:TransitionEventInit, 过渡事件_:TransitionEvent }
    新建(类型参数: 文字, 事件初始化词典?: 过渡事件初始化_): 过渡事件_;

};

//@@{ 树遍历方法_:TreeWalker }
接口 树遍历方法_ {

    //@@{ 当前节点:currentNode, 节点_:Node }
    当前节点: 节点_;

    //@@{ 扩大实体引用:expandEntityReferences }
    只读 扩大实体引用: 真假;

    //@@{ 过滤器:filter, 节点过滤器_:NodeFilter }
    只读 过滤器: 节点过滤器_;

    //@@{ 根:root, 节点_:Node }
    只读 根: 节点_;

    //@@{ 如何显示:whatToShow }
    只读 如何显示: 数字;

    //@@{ 首子节点:firstChild, 节点_:Node }
    首子节点(): 节点_;

    //@@{ 尾子节点:lastChild, 节点_:Node }
    尾子节点(): 节点_;

    //@@{ 下个节点:nextNode, 节点_:Node }
    下个节点(): 节点_;

    //@@{ 下个兄弟:nextSibling, 节点_:Node }
    下个兄弟(): 节点_;

    //@@{ 父节点:parentNode, 节点_:Node }
    父节点(): 节点_;

    //@@{ 之前节点:previousNode, 节点_:Node }
    之前节点(): 节点_;

    //@@{ 之前兄弟:previousSibling, 节点_:Node }
    之前兄弟(): 节点_;

}

声明 值量 树遍历方法_: {

    //@@{ 原型:prototype, 树遍历方法_:TreeWalker }
    原型: 树遍历方法_;

    //@@{ 树遍历方法_:TreeWalker }
    新建(): 树遍历方法_;

};

//@@{ UI事件_:UIEvent, 事件_:Event }
接口 UI事件_ 扩展 事件_ {

    //@@{ 细节:detail }
    只读 细节: 数字;

    //@@{ 视图:view, 窗口_:Window }
    只读 视图: 窗口_;

    //@@{ 初始化UI事件:initUIEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 视图参数:viewArg, 窗口_:Window, 细节参数:detailArg }
    初始化UI事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 视图参数: 窗口_, 细节参数: 数字): 无值;

}

声明 值量 UI事件_: {

    //@@{ 原型:prototype, UI事件_:UIEvent }
    原型: UI事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, UI事件初始化_:UIEventInit, UI事件_:UIEvent }
    新建(类型参数: 文字, 事件初始化词典?: UI事件初始化_): UI事件_;

};

//@@{ 无法观看内容识别事件_:UnviewableContentIdentifiedEvent, 导航事件与介绍人_:NavigationEventWithReferrer }
接口 无法观看内容识别事件_ 扩展 导航事件与介绍人_ {

    //@@{ 媒体类型:mediaType }
    只读 媒体类型: 文字;

}

声明 值量 无法观看内容识别事件_: {

    //@@{ 原型:prototype, 无法观看内容识别事件_:UnviewableContentIdentifiedEvent }
    原型: 无法观看内容识别事件_;

    //@@{ 无法观看内容识别事件_:UnviewableContentIdentifiedEvent }
    新建(): 无法观看内容识别事件_;

};

接口 URL {

    //@@{ 哈希:hash }
    哈希: 文字;

    //@@{ 主机:host }
    主机: 文字;

    //@@{ 主机名:hostname }
    主机名: 文字;

    //@@{ 目标URL:href }
    目标URL: 文字;

    //@@{ 起点:origin }
    只读 起点: 文字;

    //@@{ 密码:password }
    密码: 文字;

    //@@{ 路径名:pathname }
    路径名: 文字;

    //@@{ 端口:port }
    端口: 文字;

    //@@{ 协议:protocol }
    协议: 文字;

    //@@{ 搜索:search }
    搜索: 文字;

    //@@{ 用户名:username }
    用户名: 文字;

    //@@{ 搜索参数:searchParams, URL搜索参数_:URLSearchParams }
    只读 搜索参数: URL搜索参数_;

    //@@{ 转为文字:toString }
    转为文字(): 文字;

}

声明 值量 URL: {

    //@@{ 原型:prototype }
    原型: URL;

    //@@{ 基:base }
    新建(url: 文字, 基?: 文字): URL;

    //@@{ 创建对象URL:createObjectURL, 对象:object, 选项:options, 对象URL选项_:ObjectURLOptions }
    创建对象URL(对象: 任意, 选项?: 对象URL选项_): 文字;

    //@@{ 撤销对象URL:revokeObjectURL }
    撤销对象URL(url: 文字): 无值;

};

//@@{ 有效状态_:ValidityState }
接口 有效状态_ {

    //@@{ 坏的输入:badInput }
    只读 坏的输入: 真假;

    //@@{ 自定义错误:customError }
    只读 自定义错误: 真假;

    //@@{ 模式不匹配:patternMismatch }
    只读 模式不匹配: 真假;

    //@@{ 范围溢出:rangeOverflow }
    只读 范围溢出: 真假;

    //@@{ 范围下溢:rangeUnderflow }
    只读 范围下溢: 真假;

    //@@{ 步幅不匹配:stepMismatch }
    只读 步幅不匹配: 真假;

    //@@{ 太长时间:tooLong }
    只读 太长时间: 真假;

    //@@{ 类型不匹配:typeMismatch }
    只读 类型不匹配: 真假;

    //@@{ 有效的:valid }
    只读 有效的: 真假;

    //@@{ 值失踪:valueMissing }
    只读 值失踪: 真假;

    //@@{ 太短:tooShort }
    只读 太短: 真假;

}

声明 值量 有效状态_: {

    //@@{ 原型:prototype, 有效状态_:ValidityState }
    原型: 有效状态_;

    //@@{ 有效状态_:ValidityState }
    新建(): 有效状态_;

};

//@@{ 视频播放质量_:VideoPlaybackQuality }
接口 视频播放质量_ {

    //@@{ 损坏视频帧:corruptedVideoFrames }
    只读 损坏视频帧: 数字;

    //@@{ 创建时间:creationTime }
    只读 创建时间: 数字;

    //@@{ 已删除视频帧:droppedVideoFrames }
    只读 已删除视频帧: 数字;

    //@@{ 总帧延迟:totalFrameDelay }
    只读 总帧延迟: 数字;

    //@@{ 总视频帧:totalVideoFrames }
    只读 总视频帧: 数字;

}

声明 值量 视频播放质量_: {

    //@@{ 原型:prototype, 视频播放质量_:VideoPlaybackQuality }
    原型: 视频播放质量_;

    //@@{ 视频播放质量_:VideoPlaybackQuality }
    新建(): 视频播放质量_;

};

//@@{ 视频轨道_:VideoTrack }
接口 视频轨道_ {

    只读 id: 文字;

    //@@{ 种类:kind }
    种类: 文字;

    //@@{ 标签:label }
    只读 标签: 文字;

    //@@{ 语言:language }
    语言: 文字;

    //@@{ 选择的:selected }
    选择的: 真假;

    //@@{ 源缓冲区:sourceBuffer, 源缓冲区_:SourceBuffer }
    只读 源缓冲区: 源缓冲区_;

}

声明 值量 视频轨道_: {

    //@@{ 原型:prototype, 视频轨道_:VideoTrack }
    原型: 视频轨道_;

    //@@{ 视频轨道_:VideoTrack }
    新建(): 视频轨道_;

};

//@@{ 视频轨道列表事件映射_:VideoTrackListEventMap }
接口 视频轨道列表事件映射_ {

    //@@{ "添加轨道":"addtrack", 轨道事件_:TrackEvent }
    "添加轨道": 轨道事件_;

    //@@{ "改变":"change", 事件_:Event }
    "改变": 事件_;

    //@@{ "删除轨道":"removetrack", 轨道事件_:TrackEvent }
    "删除轨道": 轨道事件_;

}

//@@{ 视频轨道列表_:VideoTrackList, 事件目标_:EventTarget }
接口 视频轨道列表_ 扩展 事件目标_ {

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 正在添加轨道:onaddtrack, 视频轨道列表_:VideoTrackList, 轨道事件_:TrackEvent }
    正在添加轨道: (本体: 视频轨道列表_, ev: 轨道事件_) => 任意;

    //@@{ 正在改变:onchange, 视频轨道列表_:VideoTrackList, 事件_:Event }
    正在改变: (本体: 视频轨道列表_, ev: 事件_) => 任意;

    //@@{ 正在删除轨道:onremovetrack, 视频轨道列表_:VideoTrackList, 轨道事件_:TrackEvent }
    正在删除轨道: (本体: 视频轨道列表_, ev: 轨道事件_) => 任意;

    //@@{ 选择的索引:selectedIndex }
    只读 选择的索引: 数字;

    //@@{ 取跟踪按Id:getTrackById, 视频轨道_:VideoTrack }
    取跟踪按Id(id: 文字): 视频轨道_ | 空值;

    //@@{ 项目:item, 索引:index, 视频轨道_:VideoTrack }
    项目(索引: 数字): 视频轨道_;

    //@@{ 添加事件监听器:addEventListener, 视频轨道列表事件映射_:VideoTrackListEventMap, 类型:type, 侦听器:listener, 视频轨道列表_:VideoTrackList, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 视频轨道列表事件映射_>(类型: K, 侦听器: (本体: 视频轨道列表_, ev: 视频轨道列表事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

    //@@{ 索引:index, 视频轨道_:VideoTrack }
    [索引: 数字]: 视频轨道_;

}

声明 值量 视频轨道列表_: {

    //@@{ 原型:prototype, 视频轨道列表_:VideoTrackList }
    原型: 视频轨道列表_;

    //@@{ 视频轨道列表_:VideoTrackList }
    新建(): 视频轨道列表_;

};

//@@{ 波形控制器节点_:WaveShaperNode, 音频节点_:AudioNode }
接口 波形控制器节点_ 扩展 音频节点_ {

    //@@{ 曲线:curve, 浮点数组32_:Float32Array }
    曲线: 浮点数组32_ | 空值;

    //@@{ 过度采样:oversample, 样品类型_:OverSampleType }
    过度采样: 样品类型_;

}

声明 值量 波形控制器节点_: {

    //@@{ 原型:prototype, 波形控制器节点_:WaveShaperNode }
    原型: 波形控制器节点_;

    //@@{ 波形控制器节点_:WaveShaperNode }
    新建(): 波形控制器节点_;

};

//@@{ 网络身份验证_:WebAuthentication }
接口 网络身份验证_ {

    //@@{ 取断言:getAssertion, 断言挑战:assertionChallenge, 选项:options, 断言选项_:AssertionOptions, 预设_:Promise, Web认证断言_:WebAuthnAssertion }
    取断言(断言挑战: 任意, 选项?: 断言选项_): 预设_<Web认证断言_>;

    //@@{ 标记凭证:makeCredential, 账户信息:accountInformation, 账户_:Account, 加密参数:cryptoParameters, 作用域凭据参数_:ScopedCredentialParameters, 认证口令:attestationChallenge, 选项:options, 作用域凭据选项_:ScopedCredentialOptions, 预设_:Promise, 作用域凭据信息_:ScopedCredentialInfo }
    标记凭证(账户信息: 账户_, 加密参数: 作用域凭据参数_[], 认证口令: 任意, 选项?: 作用域凭据选项_): 预设_<作用域凭据信息_>;

}

声明 值量 网络身份验证_: {

    //@@{ 原型:prototype, 网络身份验证_:WebAuthentication }
    原型: 网络身份验证_;

    //@@{ 网络身份验证_:WebAuthentication }
    新建(): 网络身份验证_;

};

//@@{ Web认证断言_:WebAuthnAssertion }
接口 Web认证断言_ {

    //@@{ 身份验证数据:authenticatorData, 数组缓冲区_:ArrayBuffer }
    只读 身份验证数据: 数组缓冲区_;

    //@@{ 客户数据:clientData, 数组缓冲区_:ArrayBuffer }
    只读 客户数据: 数组缓冲区_;

    //@@{ 凭证:credential, 作用域凭据_:ScopedCredential }
    只读 凭证: 作用域凭据_;

    //@@{ 签名:signature, 数组缓冲区_:ArrayBuffer }
    只读 签名: 数组缓冲区_;

}

声明 值量 Web认证断言_: {

    //@@{ 原型:prototype, Web认证断言_:WebAuthnAssertion }
    原型: Web认证断言_;

    //@@{ Web认证断言_:WebAuthnAssertion }
    新建(): Web认证断言_;

};

//@@{ WEBGL_压缩_纹理_s3tc_:WEBGL_compressed_texture_s3tc }
接口 WEBGL_压缩_纹理_s3tc_ {

    //@@{ __压缩_RGB_S3TC_DXT1_扩展__:COMPRESSED_RGB_S3TC_DXT1_EXT }
    只读 __压缩_RGB_S3TC_DXT1_扩展__: 数字;

    //@@{ __压缩_RGBA_S3TC_DXT1_扩展__:COMPRESSED_RGBA_S3TC_DXT1_EXT }
    只读 __压缩_RGBA_S3TC_DXT1_扩展__: 数字;

    //@@{ __压缩_RGBA_S3TC_DXT3_扩展__:COMPRESSED_RGBA_S3TC_DXT3_EXT }
    只读 __压缩_RGBA_S3TC_DXT3_扩展__: 数字;

    //@@{ __压缩_RGBA_S3TC_DXT5_扩展__:COMPRESSED_RGBA_S3TC_DXT5_EXT }
    只读 __压缩_RGBA_S3TC_DXT5_扩展__: 数字;

}

声明 值量 WEBGL_压缩_纹理_s3tc_: {

    //@@{ 原型:prototype, WEBGL_压缩_纹理_s3tc_:WEBGL_compressed_texture_s3tc }
    原型: WEBGL_压缩_纹理_s3tc_;

    //@@{ WEBGL_压缩_纹理_s3tc_:WEBGL_compressed_texture_s3tc }
    新建(): WEBGL_压缩_纹理_s3tc_;

    //@@{ __压缩_RGB_S3TC_DXT1_扩展__:COMPRESSED_RGB_S3TC_DXT1_EXT }
    只读 __压缩_RGB_S3TC_DXT1_扩展__: 数字;

    //@@{ __压缩_RGBA_S3TC_DXT1_扩展__:COMPRESSED_RGBA_S3TC_DXT1_EXT }
    只读 __压缩_RGBA_S3TC_DXT1_扩展__: 数字;

    //@@{ __压缩_RGBA_S3TC_DXT3_扩展__:COMPRESSED_RGBA_S3TC_DXT3_EXT }
    只读 __压缩_RGBA_S3TC_DXT3_扩展__: 数字;

    //@@{ __压缩_RGBA_S3TC_DXT5_扩展__:COMPRESSED_RGBA_S3TC_DXT5_EXT }
    只读 __压缩_RGBA_S3TC_DXT5_扩展__: 数字;

};

//@@{ WEBGL_调试_渲染器_信息_:WEBGL_debug_renderer_info }
接口 WEBGL_调试_渲染器_信息_ {

    //@@{ __暴露_渲染器_WEBGL__:UNMASKED_RENDERER_WEBGL }
    只读 __暴露_渲染器_WEBGL__: 数字;

    //@@{ __暴露_供应商_WEBGL__:UNMASKED_VENDOR_WEBGL }
    只读 __暴露_供应商_WEBGL__: 数字;

}

声明 值量 WEBGL_调试_渲染器_信息_: {

    //@@{ 原型:prototype, WEBGL_调试_渲染器_信息_:WEBGL_debug_renderer_info }
    原型: WEBGL_调试_渲染器_信息_;

    //@@{ WEBGL_调试_渲染器_信息_:WEBGL_debug_renderer_info }
    新建(): WEBGL_调试_渲染器_信息_;

    //@@{ __暴露_渲染器_WEBGL__:UNMASKED_RENDERER_WEBGL }
    只读 __暴露_渲染器_WEBGL__: 数字;

    //@@{ __暴露_供应商_WEBGL__:UNMASKED_VENDOR_WEBGL }
    只读 __暴露_供应商_WEBGL__: 数字;

};

//@@{ WEBGL_深度_纹理_:WEBGL_depth_texture }
接口 WEBGL_深度_纹理_ {

    //@@{ __无符号_整数_24_8_WEBGL__:UNSIGNED_INT_24_8_WEBGL }
    只读 __无符号_整数_24_8_WEBGL__: 数字;

}

声明 值量 WEBGL_深度_纹理_: {

    //@@{ 原型:prototype, WEBGL_深度_纹理_:WEBGL_depth_texture }
    原型: WEBGL_深度_纹理_;

    //@@{ WEBGL_深度_纹理_:WEBGL_depth_texture }
    新建(): WEBGL_深度_纹理_;

    //@@{ __无符号_整数_24_8_WEBGL__:UNSIGNED_INT_24_8_WEBGL }
    只读 __无符号_整数_24_8_WEBGL__: 数字;

};

//@@{ WebGL活动信息_:WebGLActiveInfo }
接口 WebGL活动信息_ {

    //@@{ 名字:name }
    只读 名字: 文字;

    //@@{ 大小:size }
    只读 大小: 数字;

    //@@{ 类型:type }
    只读 类型: 数字;

}

声明 值量 WebGL活动信息_: {

    //@@{ 原型:prototype, WebGL活动信息_:WebGLActiveInfo }
    原型: WebGL活动信息_;

    //@@{ WebGL活动信息_:WebGLActiveInfo }
    新建(): WebGL活动信息_;

};

//@@{ WebGL缓冲_:WebGLBuffer, WebGL对象_:WebGLObject }
接口 WebGL缓冲_ 扩展 WebGL对象_ {

}

声明 值量 WebGL缓冲_: {

    //@@{ 原型:prototype, WebGL缓冲_:WebGLBuffer }
    原型: WebGL缓冲_;

    //@@{ WebGL缓冲_:WebGLBuffer }
    新建(): WebGL缓冲_;

};

//@@{ WebGL上下文事件_:WebGLContextEvent, 事件_:Event }
接口 WebGL上下文事件_ 扩展 事件_ {

    //@@{ 状态消息:statusMessage }
    只读 状态消息: 文字;

}

声明 值量 WebGL上下文事件_: {

    //@@{ 原型:prototype, WebGL上下文事件_:WebGLContextEvent }
    原型: WebGL上下文事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, WebGL上下文事件初始化_:WebGLContextEventInit, WebGL上下文事件_:WebGLContextEvent }
    新建(类型参数: 文字, 事件初始化词典?: WebGL上下文事件初始化_): WebGL上下文事件_;

};

//@@{ WebGL帧缓冲区_:WebGLFramebuffer, WebGL对象_:WebGLObject }
接口 WebGL帧缓冲区_ 扩展 WebGL对象_ {

}

声明 值量 WebGL帧缓冲区_: {

    //@@{ 原型:prototype, WebGL帧缓冲区_:WebGLFramebuffer }
    原型: WebGL帧缓冲区_;

    //@@{ WebGL帧缓冲区_:WebGLFramebuffer }
    新建(): WebGL帧缓冲区_;

};

//@@{ WebGL对象_:WebGLObject }
接口 WebGL对象_ {

}

声明 值量 WebGL对象_: {

    //@@{ 原型:prototype, WebGL对象_:WebGLObject }
    原型: WebGL对象_;

    //@@{ WebGL对象_:WebGLObject }
    新建(): WebGL对象_;

};

//@@{ WebGL程序_:WebGLProgram, WebGL对象_:WebGLObject }
接口 WebGL程序_ 扩展 WebGL对象_ {

}

声明 值量 WebGL程序_: {

    //@@{ 原型:prototype, WebGL程序_:WebGLProgram }
    原型: WebGL程序_;

    //@@{ WebGL程序_:WebGLProgram }
    新建(): WebGL程序_;

};

//@@{ WebGL渲染缓冲区_:WebGLRenderbuffer, WebGL对象_:WebGLObject }
接口 WebGL渲染缓冲区_ 扩展 WebGL对象_ {

}

声明 值量 WebGL渲染缓冲区_: {

    //@@{ 原型:prototype, WebGL渲染缓冲区_:WebGLRenderbuffer }
    原型: WebGL渲染缓冲区_;

    //@@{ WebGL渲染缓冲区_:WebGLRenderbuffer }
    新建(): WebGL渲染缓冲区_;

};

//@@{ WebGL渲染上下文_:WebGLRenderingContext }
接口 WebGL渲染上下文_ {

    //@@{ 画板:canvas, HTML画板元素_:HTMLCanvasElement }
    只读 画板: HTML画板元素_;

    //@@{ 画缓冲高度:drawingBufferHeight }
    只读 画缓冲高度: 数字;

    //@@{ 画缓冲区宽度:drawingBufferWidth }
    只读 画缓冲区宽度: 数字;

    //@@{ 活跃的纹理:activeTexture, 纹理:texture }
    活跃的纹理(纹理: 数字): 无值;

    //@@{ 附加材质:attachShader, 程序:program, WebGL程序_:WebGLProgram, 材质:shader, WebGL材质_:WebGLShader }
    附加材质(程序: WebGL程序_ | 空值, 材质: WebGL材质_ | 空值): 无值;

    //@@{ 绑定属性位置:bindAttribLocation, 程序:program, WebGL程序_:WebGLProgram, 索引:index, 名字:name }
    绑定属性位置(程序: WebGL程序_ | 空值, 索引: 数字, 名字: 文字): 无值;

    //@@{ 绑定缓冲:bindBuffer, 目标:target, 缓冲:buffer, WebGL缓冲_:WebGLBuffer }
    绑定缓冲(目标: 数字, 缓冲: WebGL缓冲_ | 空值): 无值;

    //@@{ 绑定帧缓冲区:bindFramebuffer, 目标:target, 帧缓冲区:framebuffer, WebGL帧缓冲区_:WebGLFramebuffer }
    绑定帧缓冲区(目标: 数字, 帧缓冲区: WebGL帧缓冲区_ | 空值): 无值;

    //@@{ 绑定渲染缓冲区:bindRenderbuffer, 目标:target, 渲染缓冲:renderbuffer, WebGL渲染缓冲区_:WebGLRenderbuffer }
    绑定渲染缓冲区(目标: 数字, 渲染缓冲: WebGL渲染缓冲区_ | 空值): 无值;

    //@@{ 绑定纹理:bindTexture, 目标:target, 纹理:texture, WebGL纹理_:WebGLTexture }
    绑定纹理(目标: 数字, 纹理: WebGL纹理_ | 空值): 无值;

    //@@{ 混合颜色:blendColor, 红:red, 绿:green, 蓝:blue, 透明:alpha }
    混合颜色(红: 数字, 绿: 数字, 蓝: 数字, 透明: 数字): 无值;

    //@@{ 混合方程:blendEquation, 模式:mode }
    混合方程(模式: 数字): 无值;

    //@@{ 混合方程分离:blendEquationSeparate, 模式RGB:modeRGB, 模式透明:modeAlpha }
    混合方程分离(模式RGB: 数字, 模式透明: 数字): 无值;

    //@@{ 混合函数:blendFunc, 源因素:sfactor, 目标因素:dfactor }
    混合函数(源因素: 数字, 目标因素: 数字): 无值;

    //@@{ 混合函数单独:blendFuncSeparate, 源RGB:srcRGB, 目标RGB:dstRGB, 源透明:srcAlpha, 目标透明:dstAlpha }
    混合函数单独(源RGB: 数字, 目标RGB: 数字, 源透明: 数字, 目标透明: 数字): 无值;

    //@@{ 缓冲数据:bufferData, 目标:target, 大小:size, 数组缓冲区视图_:ArrayBufferView, 数组缓冲区_:ArrayBuffer, 使用:usage }
    缓冲数据(目标: 数字, 大小: 数字 | 数组缓冲区视图_ | 数组缓冲区_, 使用: 数字): 无值;

    //@@{ 缓冲子数据:bufferSubData, 目标:target, 偏移:offset, 数据:data, 数组缓冲区视图_:ArrayBufferView, 数组缓冲区_:ArrayBuffer }
    缓冲子数据(目标: 数字, 偏移: 数字, 数据: 数组缓冲区视图_ | 数组缓冲区_): 无值;

    //@@{ 检查帧缓冲区状态:checkFramebufferStatus, 目标:target }
    检查帧缓冲区状态(目标: 数字): 数字;

    //@@{ 清除:clear, 遮罩:mask }
    清除(遮罩: 数字): 无值;

    //@@{ 清除颜色:clearColor, 红:red, 绿:green, 蓝:blue, 透明:alpha }
    清除颜色(红: 数字, 绿: 数字, 蓝: 数字, 透明: 数字): 无值;

    //@@{ 清除深度:clearDepth, 深度:depth }
    清除深度(深度: 数字): 无值;

    //@@{ 清除钢网:clearStencil }
    清除钢网(s: 数字): 无值;

    //@@{ 颜色遮罩:colorMask, 红:red, 绿:green, 蓝:blue, 透明:alpha }
    颜色遮罩(红: 真假, 绿: 真假, 蓝: 真假, 透明: 真假): 无值;

    //@@{ 编译材质:compileShader, 材质:shader, WebGL材质_:WebGLShader }
    编译材质(材质: WebGL材质_ | 空值): 无值;

    //@@{ 压缩贴图图像2D:compressedTexImage2D, 目标:target, 水平:level, 内部格式:internalformat, 宽度:width, 高度:height, 边框:border, 数据:data, 数组缓冲区视图_:ArrayBufferView }
    压缩贴图图像2D(目标: 数字, 水平: 数字, 内部格式: 数字, 宽度: 数字, 高度: 数字, 边框: 数字, 数据: 数组缓冲区视图_): 无值;

    //@@{ 压缩贴图子图像2D:compressedTexSubImage2D, 目标:target, 水平:level, x偏移:xoffset, y偏移:yoffset, 宽度:width, 高度:height, 格式:format, 数据:data, 数组缓冲区视图_:ArrayBufferView }
    压缩贴图子图像2D(目标: 数字, 水平: 数字, x偏移: 数字, y偏移: 数字, 宽度: 数字, 高度: 数字, 格式: 数字, 数据: 数组缓冲区视图_): 无值;

    //@@{ 复制贴图图像2D:copyTexImage2D, 目标:target, 水平:level, 内部格式:internalformat, 宽度:width, 高度:height, 边框:border }
    复制贴图图像2D(目标: 数字, 水平: 数字, 内部格式: 数字, x: 数字, y: 数字, 宽度: 数字, 高度: 数字, 边框: 数字): 无值;

    //@@{ 复制贴图子图像2D:copyTexSubImage2D, 目标:target, 水平:level, x偏移:xoffset, y偏移:yoffset, 宽度:width, 高度:height }
    复制贴图子图像2D(目标: 数字, 水平: 数字, x偏移: 数字, y偏移: 数字, x: 数字, y: 数字, 宽度: 数字, 高度: 数字): 无值;

    //@@{ 创建缓冲区:createBuffer, WebGL缓冲_:WebGLBuffer }
    创建缓冲区(): WebGL缓冲_ | 空值;

    //@@{ 创建帧缓冲区:createFramebuffer, WebGL帧缓冲区_:WebGLFramebuffer }
    创建帧缓冲区(): WebGL帧缓冲区_ | 空值;

    //@@{ 创建程序:createProgram, WebGL程序_:WebGLProgram }
    创建程序(): WebGL程序_ | 空值;

    //@@{ 创建渲染缓冲区:createRenderbuffer, WebGL渲染缓冲区_:WebGLRenderbuffer }
    创建渲染缓冲区(): WebGL渲染缓冲区_ | 空值;

    //@@{ 创建材质:createShader, 类型:type, WebGL材质_:WebGLShader }
    创建材质(类型: 数字): WebGL材质_ | 空值;

    //@@{ 创建纹理:createTexture, WebGL纹理_:WebGLTexture }
    创建纹理(): WebGL纹理_ | 空值;

    //@@{ 剔除表面:cullFace, 模式:mode }
    剔除表面(模式: 数字): 无值;

    //@@{ 删除缓冲区:deleteBuffer, 缓冲:buffer, WebGL缓冲_:WebGLBuffer }
    删除缓冲区(缓冲: WebGL缓冲_ | 空值): 无值;

    //@@{ 删除帧缓冲区:deleteFramebuffer, 帧缓冲区:framebuffer, WebGL帧缓冲区_:WebGLFramebuffer }
    删除帧缓冲区(帧缓冲区: WebGL帧缓冲区_ | 空值): 无值;

    //@@{ 删除程序:deleteProgram, 程序:program, WebGL程序_:WebGLProgram }
    删除程序(程序: WebGL程序_ | 空值): 无值;

    //@@{ 删除渲染缓冲区:deleteRenderbuffer, 渲染缓冲:renderbuffer, WebGL渲染缓冲区_:WebGLRenderbuffer }
    删除渲染缓冲区(渲染缓冲: WebGL渲染缓冲区_ | 空值): 无值;

    //@@{ 删除材质:deleteShader, 材质:shader, WebGL材质_:WebGLShader }
    删除材质(材质: WebGL材质_ | 空值): 无值;

    //@@{ 删除纹理:deleteTexture, 纹理:texture, WebGL纹理_:WebGLTexture }
    删除纹理(纹理: WebGL纹理_ | 空值): 无值;

    //@@{ 深度函数:depthFunc, 函:func }
    深度函数(函: 数字): 无值;

    //@@{ 深度遮罩:depthMask, 标志:flag }
    深度遮罩(标志: 真假): 无值;

    //@@{ 深度范围:depthRange, z近:zNear, z远:zFar }
    深度范围(z近: 数字, z远: 数字): 无值;

    //@@{ 分离材质:detachShader, 程序:program, WebGL程序_:WebGLProgram, 材质:shader, WebGL材质_:WebGLShader }
    分离材质(程序: WebGL程序_ | 空值, 材质: WebGL材质_ | 空值): 无值;

    //@@{ 禁用:disable, 帽:cap }
    禁用(帽: 数字): 无值;

    //@@{ 禁用顶点特性数组:disableVertexAttribArray, 索引:index }
    禁用顶点特性数组(索引: 数字): 无值;

    //@@{ 画数组:drawArrays, 模式:mode, 第一个:first, 数量:count }
    画数组(模式: 数字, 第一个: 数字, 数量: 数字): 无值;

    //@@{ 画元素:drawElements, 模式:mode, 数量:count, 类型:type, 偏移:offset }
    画元素(模式: 数字, 数量: 数字, 类型: 数字, 偏移: 数字): 无值;

    //@@{ 启用:enable, 帽:cap }
    启用(帽: 数字): 无值;

    //@@{ 启用顶点属性数组:enableVertexAttribArray, 索引:index }
    启用顶点属性数组(索引: 数字): 无值;

    //@@{ 完成:finish }
    完成(): 无值;

    //@@{ 冲洗:flush }
    冲洗(): 无值;

    //@@{ 帧缓冲区渲染缓冲区:framebufferRenderbuffer, 目标:target, 附件:attachment, 渲染缓冲区目标:renderbuffertarget, 渲染缓冲:renderbuffer, WebGL渲染缓冲区_:WebGLRenderbuffer }
    帧缓冲区渲染缓冲区(目标: 数字, 附件: 数字, 渲染缓冲区目标: 数字, 渲染缓冲: WebGL渲染缓冲区_ | 空值): 无值;

    //@@{ 帧缓冲区纹理2D:framebufferTexture2D, 目标:target, 附件:attachment, 贴图目标:textarget, 纹理:texture, WebGL纹理_:WebGLTexture, 水平:level }
    帧缓冲区纹理2D(目标: 数字, 附件: 数字, 贴图目标: 数字, 纹理: WebGL纹理_ | 空值, 水平: 数字): 无值;

    //@@{ 前面:frontFace, 模式:mode }
    前面(模式: 数字): 无值;

    //@@{ 生成贴图映射:generateMipmap, 目标:target }
    生成贴图映射(目标: 数字): 无值;

    //@@{ 取活跃的属性:getActiveAttrib, 程序:program, WebGL程序_:WebGLProgram, 索引:index, WebGL活动信息_:WebGLActiveInfo }
    取活跃的属性(程序: WebGL程序_ | 空值, 索引: 数字): WebGL活动信息_ | 空值;

    //@@{ 取活跃的统一:getActiveUniform, 程序:program, WebGL程序_:WebGLProgram, 索引:index, WebGL活动信息_:WebGLActiveInfo }
    取活跃的统一(程序: WebGL程序_ | 空值, 索引: 数字): WebGL活动信息_ | 空值;

    //@@{ 取附加材质:getAttachedShaders, 程序:program, WebGL程序_:WebGLProgram, WebGL材质_:WebGLShader }
    取附加材质(程序: WebGL程序_ | 空值): WebGL材质_[] | 空值;

    //@@{ 取特性位置:getAttribLocation, 程序:program, WebGL程序_:WebGLProgram, 名字:name }
    取特性位置(程序: WebGL程序_ | 空值, 名字: 文字): 数字;

    //@@{ 取缓冲区参数:getBufferParameter, 目标:target, 参数名称:pname }
    取缓冲区参数(目标: 数字, 参数名称: 数字): 任意;

    //@@{ 取上下文属性:getContextAttributes, WebGL上下文属性_:WebGLContextAttributes }
    取上下文属性(): WebGL上下文属性_;

    //@@{ 取错误:getError }
    取错误(): 数字;

    //@@{ 取扩展:getExtension, 名字:name }
    取扩展(名字: 文字): 任意;

    //@@{ 取帧缓冲区附件参数:getFramebufferAttachmentParameter, 目标:target, 附件:attachment, 参数名称:pname }
    取帧缓冲区附件参数(目标: 数字, 附件: 数字, 参数名称: 数字): 任意;

    //@@{ 取参数:getParameter, 参数名称:pname }
    取参数(参数名称: 数字): 任意;

    //@@{ 取程序信息日志:getProgramInfoLog, 程序:program, WebGL程序_:WebGLProgram }
    取程序信息日志(程序: WebGL程序_ | 空值): 文字 | 空值;

    //@@{ 取程序参数:getProgramParameter, 程序:program, WebGL程序_:WebGLProgram, 参数名称:pname }
    取程序参数(程序: WebGL程序_ | 空值, 参数名称: 数字): 任意;

    //@@{ 取渲染缓冲区参数:getRenderbufferParameter, 目标:target, 参数名称:pname }
    取渲染缓冲区参数(目标: 数字, 参数名称: 数字): 任意;

    //@@{ 取材质信息日志:getShaderInfoLog, 材质:shader, WebGL材质_:WebGLShader }
    取材质信息日志(材质: WebGL材质_ | 空值): 文字 | 空值;

    //@@{ 取材质参数:getShaderParameter, 材质:shader, WebGL材质_:WebGLShader, 参数名称:pname }
    取材质参数(材质: WebGL材质_ | 空值, 参数名称: 数字): 任意;

    //@@{ 取材质精度格式:getShaderPrecisionFormat, 材质类型:shadertype, 精密型:precisiontype, WebGL材质精度格式_:WebGLShaderPrecisionFormat }
    取材质精度格式(材质类型: 数字, 精密型: 数字): WebGL材质精度格式_ | 空值;

    //@@{ 取材质源:getShaderSource, 材质:shader, WebGL材质_:WebGLShader }
    取材质源(材质: WebGL材质_ | 空值): 文字 | 空值;

    //@@{ 取支持扩展:getSupportedExtensions }
    取支持扩展(): 文字[] | 空值;

    //@@{ 取贴图参数:getTexParameter, 目标:target, 参数名称:pname }
    取贴图参数(目标: 数字, 参数名称: 数字): 任意;

    //@@{ 取统一:getUniform, 程序:program, WebGL程序_:WebGLProgram, 位置:location, WebGL统一位置_:WebGLUniformLocation }
    取统一(程序: WebGL程序_ | 空值, 位置: WebGL统一位置_ | 空值): 任意;

    //@@{ 得到统一位置:getUniformLocation, 程序:program, WebGL程序_:WebGLProgram, 名字:name, WebGL统一位置_:WebGLUniformLocation }
    得到统一位置(程序: WebGL程序_ | 空值, 名字: 文字): WebGL统一位置_ | 空值;

    //@@{ 取顶点属性:getVertexAttrib, 索引:index, 参数名称:pname }
    取顶点属性(索引: 数字, 参数名称: 数字): 任意;

    //@@{ 取顶点属性偏移:getVertexAttribOffset, 索引:index, 参数名称:pname }
    取顶点属性偏移(索引: 数字, 参数名称: 数字): 数字;

    //@@{ 提示:hint, 目标:target, 模式:mode }
    提示(目标: 数字, 模式: 数字): 无值;

    //@@{ 是缓冲区:isBuffer, 缓冲:buffer, WebGL缓冲_:WebGLBuffer }
    是缓冲区(缓冲: WebGL缓冲_ | 空值): 真假;

    //@@{ 上下文丢失:isContextLost }
    上下文丢失(): 真假;

    //@@{ 是启用:isEnabled, 帽:cap }
    是启用(帽: 数字): 真假;

    //@@{ 是帧缓冲区:isFramebuffer, 帧缓冲区:framebuffer, WebGL帧缓冲区_:WebGLFramebuffer }
    是帧缓冲区(帧缓冲区: WebGL帧缓冲区_ | 空值): 真假;

    //@@{ 是程序:isProgram, 程序:program, WebGL程序_:WebGLProgram }
    是程序(程序: WebGL程序_ | 空值): 真假;

    //@@{ 是渲染缓冲区:isRenderbuffer, 渲染缓冲:renderbuffer, WebGL渲染缓冲区_:WebGLRenderbuffer }
    是渲染缓冲区(渲染缓冲: WebGL渲染缓冲区_ | 空值): 真假;

    //@@{ 是材质:isShader, 材质:shader, WebGL材质_:WebGLShader }
    是材质(材质: WebGL材质_ | 空值): 真假;

    //@@{ 是纹理:isTexture, 纹理:texture, WebGL纹理_:WebGLTexture }
    是纹理(纹理: WebGL纹理_ | 空值): 真假;

    //@@{ 线宽:lineWidth, 宽度:width }
    线宽(宽度: 数字): 无值;

    //@@{ 链接程序:linkProgram, 程序:program, WebGL程序_:WebGLProgram }
    链接程序(程序: WebGL程序_ | 空值): 无值;

    //@@{ 像素商店:pixelStorei, 参数名称:pname, 参数:param }
    像素商店(参数名称: 数字, 参数: 数字 | 真假): 无值;

    //@@{ 多边形偏移:polygonOffset, 因素:factor, 单位:units }
    多边形偏移(因素: 数字, 单位: 数字): 无值;

    //@@{ 读取像素:readPixels, 宽度:width, 高度:height, 格式:format, 类型:type, 像素:pixels, 数组缓冲区视图_:ArrayBufferView }
    读取像素(x: 数字, y: 数字, 宽度: 数字, 高度: 数字, 格式: 数字, 类型: 数字, 像素: 数组缓冲区视图_ | 空值): 无值;

    //@@{ 渲染缓冲存储:renderbufferStorage, 目标:target, 内部格式:internalformat, 宽度:width, 高度:height }
    渲染缓冲存储(目标: 数字, 内部格式: 数字, 宽度: 数字, 高度: 数字): 无值;

    //@@{ 样本覆盖:sampleCoverage, 值:value, 反:invert }
    样本覆盖(值: 数字, 反: 真假): 无值;

    //@@{ 剪刀:scissor, 宽度:width, 高度:height }
    剪刀(x: 数字, y: 数字, 宽度: 数字, 高度: 数字): 无值;

    //@@{ 材质源:shaderSource, 材质:shader, WebGL材质_:WebGLShader, 源:source }
    材质源(材质: WebGL材质_ | 空值, 源: 文字): 无值;

    //@@{ 模板函数:stencilFunc, 函:func, 引用:ref, 遮罩:mask }
    模板函数(函: 数字, 引用: 数字, 遮罩: 数字): 无值;

    //@@{ 模板函数单独:stencilFuncSeparate, 家族:face, 函:func, 引用:ref, 遮罩:mask }
    模板函数单独(家族: 数字, 函: 数字, 引用: 数字, 遮罩: 数字): 无值;

    //@@{ 钢网遮罩:stencilMask, 遮罩:mask }
    钢网遮罩(遮罩: 数字): 无值;

    //@@{ 模板遮罩单独:stencilMaskSeparate, 家族:face, 遮罩:mask }
    模板遮罩单独(家族: 数字, 遮罩: 数字): 无值;

    //@@{ 模板运算:stencilOp, 失败:fail, Z失败:zfail, Z传:zpass }
    模板运算(失败: 数字, Z失败: 数字, Z传: 数字): 无值;

    //@@{ 模板Op单独:stencilOpSeparate, 家族:face, 失败:fail, Z失败:zfail, Z传:zpass }
    模板Op单独(家族: 数字, 失败: 数字, Z失败: 数字, Z传: 数字): 无值;

    //@@{ 贴图图像2D:texImage2D, 目标:target, 水平:level, 内部格式:internalformat, 宽度:width, 高度:height, 边框:border, 格式:format, 类型:type, 像素:pixels, 数组缓冲区视图_:ArrayBufferView }
    贴图图像2D(目标: 数字, 水平: 数字, 内部格式: 数字, 宽度: 数字, 高度: 数字, 边框: 数字, 格式: 数字, 类型: 数字, 像素: 数组缓冲区视图_ | 空值): 无值;

    //@@{ 目标:target, 水平:level, 内部格式:internalformat, 格式:format, 类型:type, 像素:pixels, 位图图像_:ImageBitmap, 图像数据_:ImageData, HTML视频元素_:HTMLVideoElement, HTML图像元素_:HTMLImageElement, HTML画板元素_:HTMLCanvasElement }
    贴图图像2D(目标: 数字, 水平: 数字, 内部格式: 数字, 格式: 数字, 类型: 数字, 像素: 位图图像_ | 图像数据_ | HTML视频元素_ | HTML图像元素_ | HTML画板元素_): 无值;

    //@@{ 贴图相关参数f:texParameterf, 目标:target, 参数名称:pname, 参数:param }
    贴图相关参数f(目标: 数字, 参数名称: 数字, 参数: 数字): 无值;

    //@@{ 贴图相关参数:texParameteri, 目标:target, 参数名称:pname, 参数:param }
    贴图相关参数(目标: 数字, 参数名称: 数字, 参数: 数字): 无值;

    //@@{ 贴图子图像2D:texSubImage2D, 目标:target, 水平:level, x偏移:xoffset, y偏移:yoffset, 宽度:width, 高度:height, 格式:format, 类型:type, 像素:pixels, 数组缓冲区视图_:ArrayBufferView }
    贴图子图像2D(目标: 数字, 水平: 数字, x偏移: 数字, y偏移: 数字, 宽度: 数字, 高度: 数字, 格式: 数字, 类型: 数字, 像素: 数组缓冲区视图_ | 空值): 无值;

    //@@{ 目标:target, 水平:level, x偏移:xoffset, y偏移:yoffset, 格式:format, 类型:type, 像素:pixels, 位图图像_:ImageBitmap, 图像数据_:ImageData, HTML视频元素_:HTMLVideoElement, HTML图像元素_:HTMLImageElement, HTML画板元素_:HTMLCanvasElement }
    贴图子图像2D(目标: 数字, 水平: 数字, x偏移: 数字, y偏移: 数字, 格式: 数字, 类型: 数字, 像素: 位图图像_ | 图像数据_ | HTML视频元素_ | HTML图像元素_ | HTML画板元素_): 无值;

    //@@{ 统一1f:uniform1f, 位置:location, WebGL统一位置_:WebGLUniformLocation }
    统一1f(位置: WebGL统一位置_ | 空值, x: 数字): 无值;

    //@@{ 统一1fv:uniform1fv, 位置:location, WebGL统一位置_:WebGLUniformLocation, 浮点数组32_:Float32Array }
    统一1fv(位置: WebGL统一位置_, v: 浮点数组32_ | 数字[]): 无值;

    //@@{ 统一1i:uniform1i, 位置:location, WebGL统一位置_:WebGLUniformLocation }
    统一1i(位置: WebGL统一位置_ | 空值, x: 数字): 无值;

    //@@{ 统一1iv:uniform1iv, 位置:location, WebGL统一位置_:WebGLUniformLocation, 整数数组32_:Int32Array }
    统一1iv(位置: WebGL统一位置_, v: 整数数组32_ | 数字[]): 无值;

    //@@{ 统一2f:uniform2f, 位置:location, WebGL统一位置_:WebGLUniformLocation }
    统一2f(位置: WebGL统一位置_ | 空值, x: 数字, y: 数字): 无值;

    //@@{ 统一2fv:uniform2fv, 位置:location, WebGL统一位置_:WebGLUniformLocation, 浮点数组32_:Float32Array }
    统一2fv(位置: WebGL统一位置_, v: 浮点数组32_ | 数字[]): 无值;

    //@@{ 统一2i:uniform2i, 位置:location, WebGL统一位置_:WebGLUniformLocation }
    统一2i(位置: WebGL统一位置_ | 空值, x: 数字, y: 数字): 无值;

    //@@{ 统一2iv:uniform2iv, 位置:location, WebGL统一位置_:WebGLUniformLocation, 整数数组32_:Int32Array }
    统一2iv(位置: WebGL统一位置_, v: 整数数组32_ | 数字[]): 无值;

    //@@{ 统一3f:uniform3f, 位置:location, WebGL统一位置_:WebGLUniformLocation }
    统一3f(位置: WebGL统一位置_ | 空值, x: 数字, y: 数字, z: 数字): 无值;

    //@@{ 统一3fv:uniform3fv, 位置:location, WebGL统一位置_:WebGLUniformLocation, 浮点数组32_:Float32Array }
    统一3fv(位置: WebGL统一位置_, v: 浮点数组32_ | 数字[]): 无值;

    //@@{ 统一3i:uniform3i, 位置:location, WebGL统一位置_:WebGLUniformLocation }
    统一3i(位置: WebGL统一位置_ | 空值, x: 数字, y: 数字, z: 数字): 无值;

    //@@{ 统一3iv:uniform3iv, 位置:location, WebGL统一位置_:WebGLUniformLocation, 整数数组32_:Int32Array }
    统一3iv(位置: WebGL统一位置_, v: 整数数组32_ | 数字[]): 无值;

    //@@{ 统一4f:uniform4f, 位置:location, WebGL统一位置_:WebGLUniformLocation }
    统一4f(位置: WebGL统一位置_ | 空值, x: 数字, y: 数字, z: 数字, w: 数字): 无值;

    //@@{ 统一4fv:uniform4fv, 位置:location, WebGL统一位置_:WebGLUniformLocation, 浮点数组32_:Float32Array }
    统一4fv(位置: WebGL统一位置_, v: 浮点数组32_ | 数字[]): 无值;

    //@@{ 统一4i:uniform4i, 位置:location, WebGL统一位置_:WebGLUniformLocation }
    统一4i(位置: WebGL统一位置_ | 空值, x: 数字, y: 数字, z: 数字, w: 数字): 无值;

    //@@{ 统一4iv:uniform4iv, 位置:location, WebGL统一位置_:WebGLUniformLocation, 整数数组32_:Int32Array }
    统一4iv(位置: WebGL统一位置_, v: 整数数组32_ | 数字[]): 无值;

    //@@{ 统一矩阵2fv:uniformMatrix2fv, 位置:location, WebGL统一位置_:WebGLUniformLocation, 转置:transpose, 值:value, 浮点数组32_:Float32Array }
    统一矩阵2fv(位置: WebGL统一位置_, 转置: 真假, 值: 浮点数组32_ | 数字[]): 无值;

    //@@{ 统一矩阵3fv:uniformMatrix3fv, 位置:location, WebGL统一位置_:WebGLUniformLocation, 转置:transpose, 值:value, 浮点数组32_:Float32Array }
    统一矩阵3fv(位置: WebGL统一位置_, 转置: 真假, 值: 浮点数组32_ | 数字[]): 无值;

    //@@{ 统一矩阵4fv:uniformMatrix4fv, 位置:location, WebGL统一位置_:WebGLUniformLocation, 转置:transpose, 值:value, 浮点数组32_:Float32Array }
    统一矩阵4fv(位置: WebGL统一位置_, 转置: 真假, 值: 浮点数组32_ | 数字[]): 无值;

    //@@{ 使用程序:useProgram, 程序:program, WebGL程序_:WebGLProgram }
    使用程序(程序: WebGL程序_ | 空值): 无值;

    //@@{ 验证程序:validateProgram, 程序:program, WebGL程序_:WebGLProgram }
    验证程序(程序: WebGL程序_ | 空值): 无值;

    //@@{ 顶点属性1f:vertexAttrib1f }
    顶点属性1f(indx: 数字, x: 数字): 无值;

    //@@{ 顶点属性1fv:vertexAttrib1fv, 属性位置:indx, 值:values, 浮点数组32_:Float32Array }
    顶点属性1fv(属性位置: 数字, 值: 浮点数组32_ | 数字[]): 无值;

    //@@{ 顶点属性2f:vertexAttrib2f, 属性位置:indx }
    顶点属性2f(属性位置: 数字, x: 数字, y: 数字): 无值;

    //@@{ 顶点属性2fv:vertexAttrib2fv, 属性位置:indx, 值:values, 浮点数组32_:Float32Array }
    顶点属性2fv(属性位置: 数字, 值: 浮点数组32_ | 数字[]): 无值;

    //@@{ 顶点属性3f:vertexAttrib3f, 属性位置:indx }
    顶点属性3f(属性位置: 数字, x: 数字, y: 数字, z: 数字): 无值;

    //@@{ 顶点属性3fv:vertexAttrib3fv, 属性位置:indx, 值:values, 浮点数组32_:Float32Array }
    顶点属性3fv(属性位置: 数字, 值: 浮点数组32_ | 数字[]): 无值;

    //@@{ 顶点属性4f:vertexAttrib4f, 属性位置:indx }
    顶点属性4f(属性位置: 数字, x: 数字, y: 数字, z: 数字, w: 数字): 无值;

    //@@{ 顶点属性4fv:vertexAttrib4fv, 属性位置:indx, 值:values, 浮点数组32_:Float32Array }
    顶点属性4fv(属性位置: 数字, 值: 浮点数组32_ | 数字[]): 无值;

    //@@{ 顶点属性指针:vertexAttribPointer, 属性位置:indx, 大小:size, 类型:type, 归一化:normalized, 步:stride, 偏移:offset }
    顶点属性指针(属性位置: 数字, 大小: 数字, 类型: 数字, 归一化: 真假, 步: 数字, 偏移: 数字): 无值;

    //@@{ 可视区:viewport, 宽度:width, 高度:height }
    可视区(x: 数字, y: 数字, 宽度: 数字, 高度: 数字): 无值;

    //@@{ __活跃的_属性__:ACTIVE_ATTRIBUTES }
    只读 __活跃的_属性__: 数字;

    //@@{ __活跃的_纹理__:ACTIVE_TEXTURE }
    只读 __活跃的_纹理__: 数字;

    //@@{ __活跃的_制服__:ACTIVE_UNIFORMS }
    只读 __活跃的_制服__: 数字;

    //@@{ __别名_线_宽度_范围__:ALIASED_LINE_WIDTH_RANGE }
    只读 __别名_线_宽度_范围__: 数字;

    //@@{ __别名_点_大小_范围__:ALIASED_POINT_SIZE_RANGE }
    只读 __别名_点_大小_范围__: 数字;

    //@@{ __透明__:ALPHA }
    只读 __透明__: 数字;

    //@@{ __透明_位__:ALPHA_BITS }
    只读 __透明_位__: 数字;

    //@@{ __总是__:ALWAYS }
    只读 __总是__: 数字;

    //@@{ __数组_缓冲__:ARRAY_BUFFER }
    只读 __数组_缓冲__: 数字;

    //@@{ __数组_缓冲_绑定__:ARRAY_BUFFER_BINDING }
    只读 __数组_缓冲_绑定__: 数字;

    //@@{ __附加_材质__:ATTACHED_SHADERS }
    只读 __附加_材质__: 数字;

    //@@{ __后面__:BACK }
    只读 __后面__: 数字;

    //@@{ __混合__:BLEND }
    只读 __混合__: 数字;

    //@@{ __混合_颜色__:BLEND_COLOR }
    只读 __混合_颜色__: 数字;

    //@@{ __混合_DST_透明__:BLEND_DST_ALPHA }
    只读 __混合_DST_透明__: 数字;

    //@@{ __混合_DST_RGB__:BLEND_DST_RGB }
    只读 __混合_DST_RGB__: 数字;

    //@@{ __混合_方程__:BLEND_EQUATION }
    只读 __混合_方程__: 数字;

    //@@{ __混合_方程_透明__:BLEND_EQUATION_ALPHA }
    只读 __混合_方程_透明__: 数字;

    //@@{ __混合_方程_RGB__:BLEND_EQUATION_RGB }
    只读 __混合_方程_RGB__: 数字;

    //@@{ __混合_SRC_透明__:BLEND_SRC_ALPHA }
    只读 __混合_SRC_透明__: 数字;

    //@@{ __混合_SRC_RGB__:BLEND_SRC_RGB }
    只读 __混合_SRC_RGB__: 数字;

    //@@{ __蓝色_位__:BLUE_BITS }
    只读 __蓝色_位__: 数字;

    //@@{ __布尔__:BOOL }
    只读 __布尔__: 数字;

    //@@{ __布尔_VEC2__:BOOL_VEC2 }
    只读 __布尔_VEC2__: 数字;

    //@@{ __布尔_VEC3__:BOOL_VEC3 }
    只读 __布尔_VEC3__: 数字;

    //@@{ __布尔_VEC4__:BOOL_VEC4 }
    只读 __布尔_VEC4__: 数字;

    //@@{ __浏览器_默认的_WEBGL__:BROWSER_DEFAULT_WEBGL }
    只读 __浏览器_默认的_WEBGL__: 数字;

    //@@{ __缓冲_大小__:BUFFER_SIZE }
    只读 __缓冲_大小__: 数字;

    //@@{ __缓冲_使用__:BUFFER_USAGE }
    只读 __缓冲_使用__: 数字;

    //@@{ __字节__:BYTE }
    只读 __字节__: 数字;

    只读 CCW: 数字;

    //@@{ __夹_到_边缘__:CLAMP_TO_EDGE }
    只读 __夹_到_边缘__: 数字;

    //@@{ __颜色_附件0__:COLOR_ATTACHMENT0 }
    只读 __颜色_附件0__: 数字;

    //@@{ __颜色_缓冲_位__:COLOR_BUFFER_BIT }
    只读 __颜色_缓冲_位__: 数字;

    //@@{ __颜色_清除_值__:COLOR_CLEAR_VALUE }
    只读 __颜色_清除_值__: 数字;

    //@@{ __颜色_写掩码__:COLOR_WRITEMASK }
    只读 __颜色_写掩码__: 数字;

    //@@{ __编译_状态__:COMPILE_STATUS }
    只读 __编译_状态__: 数字;

    //@@{ __压缩_纹理_格式__:COMPRESSED_TEXTURE_FORMATS }
    只读 __压缩_纹理_格式__: 数字;

    //@@{ __常数_透明__:CONSTANT_ALPHA }
    只读 __常数_透明__: 数字;

    //@@{ __常数_颜色__:CONSTANT_COLOR }
    只读 __常数_颜色__: 数字;

    //@@{ __上下文_失去_WEBGL__:CONTEXT_LOST_WEBGL }
    只读 __上下文_失去_WEBGL__: 数字;

    //@@{ __剔除_表面__:CULL_FACE }
    只读 __剔除_表面__: 数字;

    //@@{ __剔除_表面_模式__:CULL_FACE_MODE }
    只读 __剔除_表面_模式__: 数字;

    //@@{ __当前_程序__:CURRENT_PROGRAM }
    只读 __当前_程序__: 数字;

    //@@{ __当前_顶点_属性__:CURRENT_VERTEX_ATTRIB }
    只读 __当前_顶点_属性__: 数字;

    只读 CW: 数字;

    只读 DECR: 数字;

    只读 DECR_WRAP: 数字;

    //@@{ __删除_状态__:DELETE_STATUS }
    只读 __删除_状态__: 数字;

    //@@{ __深度_附件__:DEPTH_ATTACHMENT }
    只读 __深度_附件__: 数字;

    //@@{ __深度_位__:DEPTH_BITS }
    只读 __深度_位__: 数字;

    //@@{ __深度_缓冲_位__:DEPTH_BUFFER_BIT }
    只读 __深度_缓冲_位__: 数字;

    //@@{ __深度_清除_值__:DEPTH_CLEAR_VALUE }
    只读 __深度_清除_值__: 数字;

    //@@{ __深度_组件__:DEPTH_COMPONENT }
    只读 __深度_组件__: 数字;

    //@@{ __深度_组件16__:DEPTH_COMPONENT16 }
    只读 __深度_组件16__: 数字;

    //@@{ __深度_函数__:DEPTH_FUNC }
    只读 __深度_函数__: 数字;

    //@@{ __深度_范围__:DEPTH_RANGE }
    只读 __深度_范围__: 数字;

    //@@{ __深度_钢网__:DEPTH_STENCIL }
    只读 __深度_钢网__: 数字;

    //@@{ __深度_钢网_附件__:DEPTH_STENCIL_ATTACHMENT }
    只读 __深度_钢网_附件__: 数字;

    //@@{ __深度_测试__:DEPTH_TEST }
    只读 __深度_测试__: 数字;

    //@@{ __深度_写掩码__:DEPTH_WRITEMASK }
    只读 __深度_写掩码__: 数字;

    //@@{ __高频振动__:DITHER }
    只读 __高频振动__: 数字;

    //@@{ __不_护理__:DONT_CARE }
    只读 __不_护理__: 数字;

    //@@{ __DST_透明__:DST_ALPHA }
    只读 __DST_透明__: 数字;

    //@@{ __DST_颜色__:DST_COLOR }
    只读 __DST_颜色__: 数字;

    //@@{ __动态_画__:DYNAMIC_DRAW }
    只读 __动态_画__: 数字;

    //@@{ __元素_数组_缓冲__:ELEMENT_ARRAY_BUFFER }
    只读 __元素_数组_缓冲__: 数字;

    //@@{ __元素_数组_缓冲_绑定__:ELEMENT_ARRAY_BUFFER_BINDING }
    只读 __元素_数组_缓冲_绑定__: 数字;

    //@@{ __相等__:EQUAL }
    只读 __相等__: 数字;

    //@@{ __最快__:FASTEST }
    只读 __最快__: 数字;

    //@@{ __浮点__:FLOAT }
    只读 __浮点__: 数字;

    //@@{ __浮点_MAT2__:FLOAT_MAT2 }
    只读 __浮点_MAT2__: 数字;

    //@@{ __浮点_MAT3__:FLOAT_MAT3 }
    只读 __浮点_MAT3__: 数字;

    //@@{ __浮点_MAT4__:FLOAT_MAT4 }
    只读 __浮点_MAT4__: 数字;

    //@@{ __浮点_VEC2__:FLOAT_VEC2 }
    只读 __浮点_VEC2__: 数字;

    //@@{ __浮点_VEC3__:FLOAT_VEC3 }
    只读 __浮点_VEC3__: 数字;

    //@@{ __浮点_VEC4__:FLOAT_VEC4 }
    只读 __浮点_VEC4__: 数字;

    //@@{ __片段_材质__:FRAGMENT_SHADER }
    只读 __片段_材质__: 数字;

    //@@{ __帧缓冲区__:FRAMEBUFFER }
    只读 __帧缓冲区__: 数字;

    //@@{ __帧缓冲区_附件_对象_名字__:FRAMEBUFFER_ATTACHMENT_OBJECT_NAME }
    只读 __帧缓冲区_附件_对象_名字__: 数字;

    //@@{ __帧缓冲区_附件_对象_类型__:FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE }
    只读 __帧缓冲区_附件_对象_类型__: 数字;

    //@@{ __帧缓冲区_附件_纹理_多维数据集_映射_表面__:FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE }
    只读 __帧缓冲区_附件_纹理_多维数据集_映射_表面__: 数字;

    //@@{ __帧缓冲区_附件_纹理_水平__:FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL }
    只读 __帧缓冲区_附件_纹理_水平__: 数字;

    //@@{ __帧缓冲区_绑定__:FRAMEBUFFER_BINDING }
    只读 __帧缓冲区_绑定__: 数字;

    //@@{ __帧缓冲区_完整的__:FRAMEBUFFER_COMPLETE }
    只读 __帧缓冲区_完整的__: 数字;

    //@@{ __帧缓冲区_不完整的_附件__:FRAMEBUFFER_INCOMPLETE_ATTACHMENT }
    只读 __帧缓冲区_不完整的_附件__: 数字;

    //@@{ __帧缓冲区_不完整的_维__:FRAMEBUFFER_INCOMPLETE_DIMENSIONS }
    只读 __帧缓冲区_不完整的_维__: 数字;

    //@@{ __帧缓冲区_不完整的_失踪_附件__:FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT }
    只读 __帧缓冲区_不完整的_失踪_附件__: 数字;

    //@@{ __帧缓冲区_不支持的__:FRAMEBUFFER_UNSUPPORTED }
    只读 __帧缓冲区_不支持的__: 数字;

    //@@{ __前面__:FRONT }
    只读 __前面__: 数字;

    //@@{ __前面_和_后面__:FRONT_AND_BACK }
    只读 __前面_和_后面__: 数字;

    //@@{ __前面_表面__:FRONT_FACE }
    只读 __前面_表面__: 数字;

    //@@{ __函数_添加__:FUNC_ADD }
    只读 __函数_添加__: 数字;

    //@@{ __函数_反向_减去__:FUNC_REVERSE_SUBTRACT }
    只读 __函数_反向_减去__: 数字;

    //@@{ __函数_减去__:FUNC_SUBTRACT }
    只读 __函数_减去__: 数字;

    //@@{ __生成_产生_提示__:GENERATE_MIPMAP_HINT }
    只读 __生成_产生_提示__: 数字;

    //@@{ __G相等的__:GEQUAL }
    只读 __G相等的__: 数字;

    //@@{ __G更大的__:GREATER }
    只读 __G更大的__: 数字;

    //@@{ __绿色_位__:GREEN_BITS }
    只读 __绿色_位__: 数字;

    //@@{ __高_浮点__:HIGH_FLOAT }
    只读 __高_浮点__: 数字;

    //@@{ __高_整数__:HIGH_INT }
    只读 __高_整数__: 数字;

    //@@{ __实现_颜色_读_格式__:IMPLEMENTATION_COLOR_READ_FORMAT }
    只读 __实现_颜色_读_格式__: 数字;

    //@@{ __实现_颜色_读_类型__:IMPLEMENTATION_COLOR_READ_TYPE }
    只读 __实现_颜色_读_类型__: 数字;

    //@@{ __增加__:INCR }
    只读 __增加__: 数字;

    //@@{ __增加_包装__:INCR_WRAP }
    只读 __增加_包装__: 数字;

    //@@{ __整数__:INT }
    只读 __整数__: 数字;

    //@@{ __整数_VEC2__:INT_VEC2 }
    只读 __整数_VEC2__: 数字;

    //@@{ __整数_VEC3__:INT_VEC3 }
    只读 __整数_VEC3__: 数字;

    //@@{ __整数_VEC4__:INT_VEC4 }
    只读 __整数_VEC4__: 数字;

    //@@{ __无效的_枚举__:INVALID_ENUM }
    只读 __无效的_枚举__: 数字;

    //@@{ __无效的_帧缓冲区_操作__:INVALID_FRAMEBUFFER_OPERATION }
    只读 __无效的_帧缓冲区_操作__: 数字;

    //@@{ __无效的_操作__:INVALID_OPERATION }
    只读 __无效的_操作__: 数字;

    //@@{ __无效的_值__:INVALID_VALUE }
    只读 __无效的_值__: 数字;

    //@@{ __反__:INVERT }
    只读 __反__: 数字;

    //@@{ __保持__:KEEP }
    只读 __保持__: 数字;

    //@@{ __L相等__:LEQUAL }
    只读 __L相等__: 数字;

    只读 LESS: 数字;

    //@@{ __线_循环__:LINE_LOOP }
    只读 __线_循环__: 数字;

    //@@{ __线_带__:LINE_STRIP }
    只读 __线_带__: 数字;

    //@@{ __行_宽度__:LINE_WIDTH }
    只读 __行_宽度__: 数字;

    //@@{ __线性__:LINEAR }
    只读 __线性__: 数字;

    //@@{ __线性_产生_线性__:LINEAR_MIPMAP_LINEAR }
    只读 __线性_产生_线性__: 数字;

    //@@{ __线性_产生_最近的__:LINEAR_MIPMAP_NEAREST }
    只读 __线性_产生_最近的__: 数字;

    //@@{ __线组__:LINES }
    只读 __线组__: 数字;

    //@@{ __链接_状态__:LINK_STATUS }
    只读 __链接_状态__: 数字;

    //@@{ __低_浮点__:LOW_FLOAT }
    只读 __低_浮点__: 数字;

    //@@{ __低_整数__:LOW_INT }
    只读 __低_整数__: 数字;

    //@@{ __亮度__:LUMINANCE }
    只读 __亮度__: 数字;

    //@@{ __亮度_透明__:LUMINANCE_ALPHA }
    只读 __亮度_透明__: 数字;

    //@@{ __最大_结合_纹理_图像_单位__:MAX_COMBINED_TEXTURE_IMAGE_UNITS }
    只读 __最大_结合_纹理_图像_单位__: 数字;

    //@@{ __最大_多维数据集_映射_纹理_大小__:MAX_CUBE_MAP_TEXTURE_SIZE }
    只读 __最大_多维数据集_映射_纹理_大小__: 数字;

    //@@{ __最大_片段_统一的_向量__:MAX_FRAGMENT_UNIFORM_VECTORS }
    只读 __最大_片段_统一的_向量__: 数字;

    //@@{ __最大_渲染缓冲区_大小__:MAX_RENDERBUFFER_SIZE }
    只读 __最大_渲染缓冲区_大小__: 数字;

    //@@{ __最大_纹理_图像_单位__:MAX_TEXTURE_IMAGE_UNITS }
    只读 __最大_纹理_图像_单位__: 数字;

    //@@{ __最大_纹理_大小__:MAX_TEXTURE_SIZE }
    只读 __最大_纹理_大小__: 数字;

    //@@{ __最大_不同_向量__:MAX_VARYING_VECTORS }
    只读 __最大_不同_向量__: 数字;

    //@@{ __最大_顶点_属性__:MAX_VERTEX_ATTRIBS }
    只读 __最大_顶点_属性__: 数字;

    //@@{ __最大_顶点_纹理_图像_单位__:MAX_VERTEX_TEXTURE_IMAGE_UNITS }
    只读 __最大_顶点_纹理_图像_单位__: 数字;

    //@@{ __最大_顶点_统一的_向量__:MAX_VERTEX_UNIFORM_VECTORS }
    只读 __最大_顶点_统一的_向量__: 数字;

    //@@{ __最大_视图_变暗__:MAX_VIEWPORT_DIMS }
    只读 __最大_视图_变暗__: 数字;

    //@@{ __媒介_浮点__:MEDIUM_FLOAT }
    只读 __媒介_浮点__: 数字;

    //@@{ __媒介_整数__:MEDIUM_INT }
    只读 __媒介_整数__: 数字;

    //@@{ __镜像_重复__:MIRRORED_REPEAT }
    只读 __镜像_重复__: 数字;

    //@@{ __最近的__:NEAREST }
    只读 __最近的__: 数字;

    //@@{ __最近的_产生_线性__:NEAREST_MIPMAP_LINEAR }
    只读 __最近的_产生_线性__: 数字;

    //@@{ __最近的_产生_最近的__:NEAREST_MIPMAP_NEAREST }
    只读 __最近的_产生_最近的__: 数字;

    //@@{ __从来没有__:NEVER }
    只读 __从来没有__: 数字;

    //@@{ __最好的__:NICEST }
    只读 __最好的__: 数字;

    //@@{ __没有_错误__:NO_ERROR }
    只读 __没有_错误__: 数字;

    //@@{ __没有__:NONE }
    只读 __没有__: 数字;

    //@@{ __不等号__:NOTEQUAL }
    只读 __不等号__: 数字;

    只读 ONE: 数字;

    //@@{ __ONE_常数_透明__:ONE_MINUS_CONSTANT_ALPHA }
    只读 __ONE_常数_透明__: 数字;

    //@@{ __ONE_常数_颜色__:ONE_MINUS_CONSTANT_COLOR }
    只读 __ONE_常数_颜色__: 数字;

    //@@{ __ONE_DST_透明__:ONE_MINUS_DST_ALPHA }
    只读 __ONE_DST_透明__: 数字;

    //@@{ __ONE_DST_颜色__:ONE_MINUS_DST_COLOR }
    只读 __ONE_DST_颜色__: 数字;

    //@@{ __ONE_SRC_透明__:ONE_MINUS_SRC_ALPHA }
    只读 __ONE_SRC_透明__: 数字;

    //@@{ __ONE_SRC_颜色__:ONE_MINUS_SRC_COLOR }
    只读 __ONE_SRC_颜色__: 数字;

    //@@{ __内存_不足__:OUT_OF_MEMORY }
    只读 __内存_不足__: 数字;

    //@@{ __包_对齐__:PACK_ALIGNMENT }
    只读 __包_对齐__: 数字;

    //@@{ __点__:POINTS }
    只读 __点__: 数字;

    //@@{ __多边形_偏移_因素__:POLYGON_OFFSET_FACTOR }
    只读 __多边形_偏移_因素__: 数字;

    //@@{ __多边形_偏移_填充__:POLYGON_OFFSET_FILL }
    只读 __多边形_偏移_填充__: 数字;

    //@@{ __多边形_偏移_单位__:POLYGON_OFFSET_UNITS }
    只读 __多边形_偏移_单位__: 数字;

    //@@{ __红色_位__:RED_BITS }
    只读 __红色_位__: 数字;

    //@@{ __渲染缓冲区__:RENDERBUFFER }
    只读 __渲染缓冲区__: 数字;

    //@@{ __渲染缓冲区_透明_大小__:RENDERBUFFER_ALPHA_SIZE }
    只读 __渲染缓冲区_透明_大小__: 数字;

    //@@{ __渲染缓冲区_绑定__:RENDERBUFFER_BINDING }
    只读 __渲染缓冲区_绑定__: 数字;

    //@@{ __渲染缓冲区_蓝色_大小__:RENDERBUFFER_BLUE_SIZE }
    只读 __渲染缓冲区_蓝色_大小__: 数字;

    //@@{ __渲染缓冲区_深度_大小__:RENDERBUFFER_DEPTH_SIZE }
    只读 __渲染缓冲区_深度_大小__: 数字;

    //@@{ __渲染缓冲区_绿色_大小__:RENDERBUFFER_GREEN_SIZE }
    只读 __渲染缓冲区_绿色_大小__: 数字;

    //@@{ __渲染缓冲区_高度__:RENDERBUFFER_HEIGHT }
    只读 __渲染缓冲区_高度__: 数字;

    //@@{ __渲染缓冲区_内部_格式__:RENDERBUFFER_INTERNAL_FORMAT }
    只读 __渲染缓冲区_内部_格式__: 数字;

    //@@{ __渲染缓冲区_红色_大小__:RENDERBUFFER_RED_SIZE }
    只读 __渲染缓冲区_红色_大小__: 数字;

    //@@{ __渲染缓冲区_钢网_大小__:RENDERBUFFER_STENCIL_SIZE }
    只读 __渲染缓冲区_钢网_大小__: 数字;

    //@@{ __渲染缓冲区_宽度__:RENDERBUFFER_WIDTH }
    只读 __渲染缓冲区_宽度__: 数字;

    //@@{ __渲染器__:RENDERER }
    只读 __渲染器__: 数字;

    //@@{ __重复__:REPEAT }
    只读 __重复__: 数字;

    //@@{ __替换__:REPLACE }
    只读 __替换__: 数字;

    只读 RGB: 数字;

    只读 RGB5_A1: 数字;

    只读 RGB565: 数字;

    只读 RGBA: 数字;

    只读 RGBA4: 数字;

    //@@{ __样本_透明_到_报道__:SAMPLE_ALPHA_TO_COVERAGE }
    只读 __样本_透明_到_报道__: 数字;

    //@@{ __样本_缓冲区__:SAMPLE_BUFFERS }
    只读 __样本_缓冲区__: 数字;

    //@@{ __样本_报道__:SAMPLE_COVERAGE }
    只读 __样本_报道__: 数字;

    //@@{ __样本_报道_反__:SAMPLE_COVERAGE_INVERT }
    只读 __样本_报道_反__: 数字;

    //@@{ __样本_报道_值__:SAMPLE_COVERAGE_VALUE }
    只读 __样本_报道_值__: 数字;

    //@@{ __取样器_2D__:SAMPLER_2D }
    只读 __取样器_2D__: 数字;

    //@@{ __取样器_多维数据集__:SAMPLER_CUBE }
    只读 __取样器_多维数据集__: 数字;

    //@@{ __取样器__:SAMPLES }
    只读 __取样器__: 数字;

    //@@{ __剪刀_盒子__:SCISSOR_BOX }
    只读 __剪刀_盒子__: 数字;

    //@@{ __剪刀_测试__:SCISSOR_TEST }
    只读 __剪刀_测试__: 数字;

    //@@{ __材质_类型__:SHADER_TYPE }
    只读 __材质_类型__: 数字;

    //@@{ __阴影_语言_版本__:SHADING_LANGUAGE_VERSION }
    只读 __阴影_语言_版本__: 数字;

    //@@{ __短__:SHORT }
    只读 __短__: 数字;

    //@@{ __SRC_透明__:SRC_ALPHA }
    只读 __SRC_透明__: 数字;

    //@@{ __SRC_透明_饱和__:SRC_ALPHA_SATURATE }
    只读 __SRC_透明_饱和__: 数字;

    //@@{ __SRC_颜色__:SRC_COLOR }
    只读 __SRC_颜色__: 数字;

    //@@{ __静态_画__:STATIC_DRAW }
    只读 __静态_画__: 数字;

    //@@{ __钢网_附件__:STENCIL_ATTACHMENT }
    只读 __钢网_附件__: 数字;

    //@@{ __钢网_后面_失败__:STENCIL_BACK_FAIL }
    只读 __钢网_后面_失败__: 数字;

    //@@{ __钢网_后面_函数__:STENCIL_BACK_FUNC }
    只读 __钢网_后面_函数__: 数字;

    //@@{ __钢网_后面_通过_深度_失败__:STENCIL_BACK_PASS_DEPTH_FAIL }
    只读 __钢网_后面_通过_深度_失败__: 数字;

    //@@{ __钢网_后面_通过_深度_通过__:STENCIL_BACK_PASS_DEPTH_PASS }
    只读 __钢网_后面_通过_深度_通过__: 数字;

    //@@{ __钢网_后面_裁判__:STENCIL_BACK_REF }
    只读 __钢网_后面_裁判__: 数字;

    //@@{ __钢网_后面_值_遮罩__:STENCIL_BACK_VALUE_MASK }
    只读 __钢网_后面_值_遮罩__: 数字;

    //@@{ __钢网_后面_写掩码__:STENCIL_BACK_WRITEMASK }
    只读 __钢网_后面_写掩码__: 数字;

    //@@{ __钢网_位__:STENCIL_BITS }
    只读 __钢网_位__: 数字;

    //@@{ __钢网_缓冲_位__:STENCIL_BUFFER_BIT }
    只读 __钢网_缓冲_位__: 数字;

    //@@{ __钢网_清除_值__:STENCIL_CLEAR_VALUE }
    只读 __钢网_清除_值__: 数字;

    //@@{ __钢网_失败__:STENCIL_FAIL }
    只读 __钢网_失败__: 数字;

    //@@{ __钢网_函数__:STENCIL_FUNC }
    只读 __钢网_函数__: 数字;

    //@@{ __钢网_指数__:STENCIL_INDEX }
    只读 __钢网_指数__: 数字;

    //@@{ __钢网_指数8__:STENCIL_INDEX8 }
    只读 __钢网_指数8__: 数字;

    //@@{ __钢网_通过_深度_失败__:STENCIL_PASS_DEPTH_FAIL }
    只读 __钢网_通过_深度_失败__: 数字;

    //@@{ __钢网_通过_深度_通过__:STENCIL_PASS_DEPTH_PASS }
    只读 __钢网_通过_深度_通过__: 数字;

    //@@{ __钢网_裁判__:STENCIL_REF }
    只读 __钢网_裁判__: 数字;

    //@@{ __钢网_测试__:STENCIL_TEST }
    只读 __钢网_测试__: 数字;

    //@@{ __钢网_值_遮罩__:STENCIL_VALUE_MASK }
    只读 __钢网_值_遮罩__: 数字;

    //@@{ __钢网_写掩码__:STENCIL_WRITEMASK }
    只读 __钢网_写掩码__: 数字;

    //@@{ __流_画__:STREAM_DRAW }
    只读 __流_画__: 数字;

    //@@{ __子像素_位__:SUBPIXEL_BITS }
    只读 __子像素_位__: 数字;

    //@@{ __纹理__:TEXTURE }
    只读 __纹理__: 数字;

    //@@{ __纹理_2D__:TEXTURE_2D }
    只读 __纹理_2D__: 数字;

    //@@{ __纹理_绑定_2D__:TEXTURE_BINDING_2D }
    只读 __纹理_绑定_2D__: 数字;

    //@@{ __纹理_绑定_多维数据集_映射__:TEXTURE_BINDING_CUBE_MAP }
    只读 __纹理_绑定_多维数据集_映射__: 数字;

    //@@{ __纹理_多维数据集_映射__:TEXTURE_CUBE_MAP }
    只读 __纹理_多维数据集_映射__: 数字;

    //@@{ __纹理_多维数据集_映射_负_X__:TEXTURE_CUBE_MAP_NEGATIVE_X }
    只读 __纹理_多维数据集_映射_负_X__: 数字;

    //@@{ __纹理_多维数据集_映射_负_Y__:TEXTURE_CUBE_MAP_NEGATIVE_Y }
    只读 __纹理_多维数据集_映射_负_Y__: 数字;

    //@@{ __纹理_多维数据集_映射_负_Z__:TEXTURE_CUBE_MAP_NEGATIVE_Z }
    只读 __纹理_多维数据集_映射_负_Z__: 数字;

    //@@{ __纹理_多维数据集_映射_正_X__:TEXTURE_CUBE_MAP_POSITIVE_X }
    只读 __纹理_多维数据集_映射_正_X__: 数字;

    //@@{ __纹理_多维数据集_映射_正_Y__:TEXTURE_CUBE_MAP_POSITIVE_Y }
    只读 __纹理_多维数据集_映射_正_Y__: 数字;

    //@@{ __纹理_多维数据集_映射_正_Z__:TEXTURE_CUBE_MAP_POSITIVE_Z }
    只读 __纹理_多维数据集_映射_正_Z__: 数字;

    //@@{ __纹理_玛格_过滤器__:TEXTURE_MAG_FILTER }
    只读 __纹理_玛格_过滤器__: 数字;

    //@@{ __纹理_最小值_过滤器__:TEXTURE_MIN_FILTER }
    只读 __纹理_最小值_过滤器__: 数字;

    //@@{ __纹理_包装_S__:TEXTURE_WRAP_S }
    只读 __纹理_包装_S__: 数字;

    //@@{ __纹理_包装_T__:TEXTURE_WRAP_T }
    只读 __纹理_包装_T__: 数字;

    //@@{ __纹理0__:TEXTURE0 }
    只读 __纹理0__: 数字;

    //@@{ __纹理1__:TEXTURE1 }
    只读 __纹理1__: 数字;

    //@@{ __纹理10__:TEXTURE10 }
    只读 __纹理10__: 数字;

    //@@{ __纹理11__:TEXTURE11 }
    只读 __纹理11__: 数字;

    //@@{ __纹理12__:TEXTURE12 }
    只读 __纹理12__: 数字;

    //@@{ __纹理13__:TEXTURE13 }
    只读 __纹理13__: 数字;

    //@@{ __纹理14__:TEXTURE14 }
    只读 __纹理14__: 数字;

    //@@{ __纹理15__:TEXTURE15 }
    只读 __纹理15__: 数字;

    //@@{ __纹理16__:TEXTURE16 }
    只读 __纹理16__: 数字;

    //@@{ __纹理17__:TEXTURE17 }
    只读 __纹理17__: 数字;

    //@@{ __纹理18__:TEXTURE18 }
    只读 __纹理18__: 数字;

    //@@{ __纹理19__:TEXTURE19 }
    只读 __纹理19__: 数字;

    //@@{ __纹理2__:TEXTURE2 }
    只读 __纹理2__: 数字;

    //@@{ __纹理20__:TEXTURE20 }
    只读 __纹理20__: 数字;

    //@@{ __纹理21__:TEXTURE21 }
    只读 __纹理21__: 数字;

    //@@{ __纹理22__:TEXTURE22 }
    只读 __纹理22__: 数字;

    //@@{ __纹理23__:TEXTURE23 }
    只读 __纹理23__: 数字;

    //@@{ __纹理24__:TEXTURE24 }
    只读 __纹理24__: 数字;

    //@@{ __纹理25__:TEXTURE25 }
    只读 __纹理25__: 数字;

    //@@{ __纹理26__:TEXTURE26 }
    只读 __纹理26__: 数字;

    //@@{ __纹理27__:TEXTURE27 }
    只读 __纹理27__: 数字;

    //@@{ __纹理28__:TEXTURE28 }
    只读 __纹理28__: 数字;

    //@@{ __纹理29__:TEXTURE29 }
    只读 __纹理29__: 数字;

    //@@{ __纹理3__:TEXTURE3 }
    只读 __纹理3__: 数字;

    //@@{ __纹理30__:TEXTURE30 }
    只读 __纹理30__: 数字;

    //@@{ __纹理31__:TEXTURE31 }
    只读 __纹理31__: 数字;

    //@@{ __纹理4__:TEXTURE4 }
    只读 __纹理4__: 数字;

    //@@{ __纹理5__:TEXTURE5 }
    只读 __纹理5__: 数字;

    //@@{ __纹理6__:TEXTURE6 }
    只读 __纹理6__: 数字;

    //@@{ __纹理7__:TEXTURE7 }
    只读 __纹理7__: 数字;

    //@@{ __纹理8__:TEXTURE8 }
    只读 __纹理8__: 数字;

    //@@{ __纹理9__:TEXTURE9 }
    只读 __纹理9__: 数字;

    //@@{ __三角形_风扇__:TRIANGLE_FAN }
    只读 __三角形_风扇__: 数字;

    //@@{ __三角形_带__:TRIANGLE_STRIP }
    只读 __三角形_带__: 数字;

    //@@{ __三角形__:TRIANGLES }
    只读 __三角形__: 数字;

    //@@{ __解压缩_对齐__:UNPACK_ALIGNMENT }
    只读 __解压缩_对齐__: 数字;

    //@@{ __解压缩_色彩_转换_WEBGL__:UNPACK_COLORSPACE_CONVERSION_WEBGL }
    只读 __解压缩_色彩_转换_WEBGL__: 数字;

    //@@{ __解压缩_翻转_Y_WEBGL__:UNPACK_FLIP_Y_WEBGL }
    只读 __解压缩_翻转_Y_WEBGL__: 数字;

    //@@{ __解压缩_自左乘_透明_WEBGL__:UNPACK_PREMULTIPLY_ALPHA_WEBGL }
    只读 __解压缩_自左乘_透明_WEBGL__: 数字;

    //@@{ __无符号_字节__:UNSIGNED_BYTE }
    只读 __无符号_字节__: 数字;

    //@@{ __无符号_整数__:UNSIGNED_INT }
    只读 __无符号_整数__: 数字;

    //@@{ __无符号_短__:UNSIGNED_SHORT }
    只读 __无符号_短__: 数字;

    //@@{ __无符号_短_4_4_4_4__:UNSIGNED_SHORT_4_4_4_4 }
    只读 __无符号_短_4_4_4_4__: 数字;

    //@@{ __无符号_短_5_5_5_1__:UNSIGNED_SHORT_5_5_5_1 }
    只读 __无符号_短_5_5_5_1__: 数字;

    //@@{ __无符号_短_5_6_5__:UNSIGNED_SHORT_5_6_5 }
    只读 __无符号_短_5_6_5__: 数字;

    //@@{ __验证_状态__:VALIDATE_STATUS }
    只读 __验证_状态__: 数字;

    //@@{ __供应商__:VENDOR }
    只读 __供应商__: 数字;

    //@@{ __版本__:VERSION }
    只读 __版本__: 数字;

    //@@{ __顶点_属性_数组_缓冲_绑定__:VERTEX_ATTRIB_ARRAY_BUFFER_BINDING }
    只读 __顶点_属性_数组_缓冲_绑定__: 数字;

    //@@{ __顶点_属性_数组_启用__:VERTEX_ATTRIB_ARRAY_ENABLED }
    只读 __顶点_属性_数组_启用__: 数字;

    //@@{ __顶点_属性_数组_归一化__:VERTEX_ATTRIB_ARRAY_NORMALIZED }
    只读 __顶点_属性_数组_归一化__: 数字;

    //@@{ __顶点_属性_数组_指针__:VERTEX_ATTRIB_ARRAY_POINTER }
    只读 __顶点_属性_数组_指针__: 数字;

    //@@{ __顶点_属性_数组_大小__:VERTEX_ATTRIB_ARRAY_SIZE }
    只读 __顶点_属性_数组_大小__: 数字;

    //@@{ __顶点_属性_数组_步__:VERTEX_ATTRIB_ARRAY_STRIDE }
    只读 __顶点_属性_数组_步__: 数字;

    //@@{ __顶点_属性_数组_类型__:VERTEX_ATTRIB_ARRAY_TYPE }
    只读 __顶点_属性_数组_类型__: 数字;

    //@@{ __顶点_材质__:VERTEX_SHADER }
    只读 __顶点_材质__: 数字;

    //@@{ __视图__:VIEWPORT }
    只读 __视图__: 数字;

    //@@{ __零__:ZERO }
    只读 __零__: 数字;

}

声明 值量 WebGL渲染上下文_: {

    //@@{ 原型:prototype, WebGL渲染上下文_:WebGLRenderingContext }
    原型: WebGL渲染上下文_;

    //@@{ WebGL渲染上下文_:WebGLRenderingContext }
    新建(): WebGL渲染上下文_;

    //@@{ __活跃的_属性__:ACTIVE_ATTRIBUTES }
    只读 __活跃的_属性__: 数字;

    //@@{ __活跃的_纹理__:ACTIVE_TEXTURE }
    只读 __活跃的_纹理__: 数字;

    //@@{ __活跃的_制服__:ACTIVE_UNIFORMS }
    只读 __活跃的_制服__: 数字;

    //@@{ __别名_线_宽度_范围__:ALIASED_LINE_WIDTH_RANGE }
    只读 __别名_线_宽度_范围__: 数字;

    //@@{ __别名_点_大小_范围__:ALIASED_POINT_SIZE_RANGE }
    只读 __别名_点_大小_范围__: 数字;

    //@@{ __透明__:ALPHA }
    只读 __透明__: 数字;

    //@@{ __透明_位__:ALPHA_BITS }
    只读 __透明_位__: 数字;

    //@@{ __总是__:ALWAYS }
    只读 __总是__: 数字;

    //@@{ __数组_缓冲__:ARRAY_BUFFER }
    只读 __数组_缓冲__: 数字;

    //@@{ __数组_缓冲_绑定__:ARRAY_BUFFER_BINDING }
    只读 __数组_缓冲_绑定__: 数字;

    //@@{ __附加_材质__:ATTACHED_SHADERS }
    只读 __附加_材质__: 数字;

    //@@{ __后面__:BACK }
    只读 __后面__: 数字;

    //@@{ __混合__:BLEND }
    只读 __混合__: 数字;

    //@@{ __混合_颜色__:BLEND_COLOR }
    只读 __混合_颜色__: 数字;

    //@@{ __混合_DST_透明__:BLEND_DST_ALPHA }
    只读 __混合_DST_透明__: 数字;

    //@@{ __混合_DST_RGB__:BLEND_DST_RGB }
    只读 __混合_DST_RGB__: 数字;

    //@@{ __混合_方程__:BLEND_EQUATION }
    只读 __混合_方程__: 数字;

    //@@{ __混合_方程_透明__:BLEND_EQUATION_ALPHA }
    只读 __混合_方程_透明__: 数字;

    //@@{ __混合_方程_RGB__:BLEND_EQUATION_RGB }
    只读 __混合_方程_RGB__: 数字;

    //@@{ __混合_SRC_透明__:BLEND_SRC_ALPHA }
    只读 __混合_SRC_透明__: 数字;

    //@@{ __混合_SRC_RGB__:BLEND_SRC_RGB }
    只读 __混合_SRC_RGB__: 数字;

    //@@{ __蓝色_位__:BLUE_BITS }
    只读 __蓝色_位__: 数字;

    //@@{ __布尔__:BOOL }
    只读 __布尔__: 数字;

    //@@{ __布尔_VEC2__:BOOL_VEC2 }
    只读 __布尔_VEC2__: 数字;

    //@@{ __布尔_VEC3__:BOOL_VEC3 }
    只读 __布尔_VEC3__: 数字;

    //@@{ __布尔_VEC4__:BOOL_VEC4 }
    只读 __布尔_VEC4__: 数字;

    //@@{ __浏览器_默认的_WEBGL__:BROWSER_DEFAULT_WEBGL }
    只读 __浏览器_默认的_WEBGL__: 数字;

    //@@{ __缓冲_大小__:BUFFER_SIZE }
    只读 __缓冲_大小__: 数字;

    //@@{ __缓冲_使用__:BUFFER_USAGE }
    只读 __缓冲_使用__: 数字;

    //@@{ __字节__:BYTE }
    只读 __字节__: 数字;

    只读 CCW: 数字;

    //@@{ __夹_到_边缘__:CLAMP_TO_EDGE }
    只读 __夹_到_边缘__: 数字;

    //@@{ __颜色_附件0__:COLOR_ATTACHMENT0 }
    只读 __颜色_附件0__: 数字;

    //@@{ __颜色_缓冲_位__:COLOR_BUFFER_BIT }
    只读 __颜色_缓冲_位__: 数字;

    //@@{ __颜色_清除_值__:COLOR_CLEAR_VALUE }
    只读 __颜色_清除_值__: 数字;

    //@@{ __颜色_写掩码__:COLOR_WRITEMASK }
    只读 __颜色_写掩码__: 数字;

    //@@{ __编译_状态__:COMPILE_STATUS }
    只读 __编译_状态__: 数字;

    //@@{ __压缩_纹理_格式__:COMPRESSED_TEXTURE_FORMATS }
    只读 __压缩_纹理_格式__: 数字;

    //@@{ __常数_透明__:CONSTANT_ALPHA }
    只读 __常数_透明__: 数字;

    //@@{ __常数_颜色__:CONSTANT_COLOR }
    只读 __常数_颜色__: 数字;

    //@@{ __上下文_失去_WEBGL__:CONTEXT_LOST_WEBGL }
    只读 __上下文_失去_WEBGL__: 数字;

    //@@{ __剔除_表面__:CULL_FACE }
    只读 __剔除_表面__: 数字;

    //@@{ __剔除_表面_模式__:CULL_FACE_MODE }
    只读 __剔除_表面_模式__: 数字;

    //@@{ __当前_程序__:CURRENT_PROGRAM }
    只读 __当前_程序__: 数字;

    //@@{ __当前_顶点_属性__:CURRENT_VERTEX_ATTRIB }
    只读 __当前_顶点_属性__: 数字;

    只读 CW: 数字;

    只读 DECR: 数字;

    只读 DECR_WRAP: 数字;

    //@@{ __删除_状态__:DELETE_STATUS }
    只读 __删除_状态__: 数字;

    //@@{ __深度_附件__:DEPTH_ATTACHMENT }
    只读 __深度_附件__: 数字;

    //@@{ __深度_位__:DEPTH_BITS }
    只读 __深度_位__: 数字;

    //@@{ __深度_缓冲_位__:DEPTH_BUFFER_BIT }
    只读 __深度_缓冲_位__: 数字;

    //@@{ __深度_清除_值__:DEPTH_CLEAR_VALUE }
    只读 __深度_清除_值__: 数字;

    //@@{ __深度_组件__:DEPTH_COMPONENT }
    只读 __深度_组件__: 数字;

    //@@{ __深度_组件16__:DEPTH_COMPONENT16 }
    只读 __深度_组件16__: 数字;

    //@@{ __深度_函数__:DEPTH_FUNC }
    只读 __深度_函数__: 数字;

    //@@{ __深度_范围__:DEPTH_RANGE }
    只读 __深度_范围__: 数字;

    //@@{ __深度_钢网__:DEPTH_STENCIL }
    只读 __深度_钢网__: 数字;

    //@@{ __深度_钢网_附件__:DEPTH_STENCIL_ATTACHMENT }
    只读 __深度_钢网_附件__: 数字;

    //@@{ __深度_测试__:DEPTH_TEST }
    只读 __深度_测试__: 数字;

    //@@{ __深度_写掩码__:DEPTH_WRITEMASK }
    只读 __深度_写掩码__: 数字;

    //@@{ __高频振动__:DITHER }
    只读 __高频振动__: 数字;

    //@@{ __不_护理__:DONT_CARE }
    只读 __不_护理__: 数字;

    //@@{ __DST_透明__:DST_ALPHA }
    只读 __DST_透明__: 数字;

    //@@{ __DST_颜色__:DST_COLOR }
    只读 __DST_颜色__: 数字;

    //@@{ __动态_画__:DYNAMIC_DRAW }
    只读 __动态_画__: 数字;

    //@@{ __元素_数组_缓冲__:ELEMENT_ARRAY_BUFFER }
    只读 __元素_数组_缓冲__: 数字;

    //@@{ __元素_数组_缓冲_绑定__:ELEMENT_ARRAY_BUFFER_BINDING }
    只读 __元素_数组_缓冲_绑定__: 数字;

    //@@{ __相等__:EQUAL }
    只读 __相等__: 数字;

    //@@{ __最快__:FASTEST }
    只读 __最快__: 数字;

    //@@{ __浮点__:FLOAT }
    只读 __浮点__: 数字;

    //@@{ __浮点_MAT2__:FLOAT_MAT2 }
    只读 __浮点_MAT2__: 数字;

    //@@{ __浮点_MAT3__:FLOAT_MAT3 }
    只读 __浮点_MAT3__: 数字;

    //@@{ __浮点_MAT4__:FLOAT_MAT4 }
    只读 __浮点_MAT4__: 数字;

    //@@{ __浮点_VEC2__:FLOAT_VEC2 }
    只读 __浮点_VEC2__: 数字;

    //@@{ __浮点_VEC3__:FLOAT_VEC3 }
    只读 __浮点_VEC3__: 数字;

    //@@{ __浮点_VEC4__:FLOAT_VEC4 }
    只读 __浮点_VEC4__: 数字;

    //@@{ __片段_材质__:FRAGMENT_SHADER }
    只读 __片段_材质__: 数字;

    //@@{ __帧缓冲区__:FRAMEBUFFER }
    只读 __帧缓冲区__: 数字;

    //@@{ __帧缓冲区_附件_对象_名字__:FRAMEBUFFER_ATTACHMENT_OBJECT_NAME }
    只读 __帧缓冲区_附件_对象_名字__: 数字;

    //@@{ __帧缓冲区_附件_对象_类型__:FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE }
    只读 __帧缓冲区_附件_对象_类型__: 数字;

    //@@{ __帧缓冲区_附件_纹理_多维数据集_映射_表面__:FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE }
    只读 __帧缓冲区_附件_纹理_多维数据集_映射_表面__: 数字;

    //@@{ __帧缓冲区_附件_纹理_水平__:FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL }
    只读 __帧缓冲区_附件_纹理_水平__: 数字;

    //@@{ __帧缓冲区_绑定__:FRAMEBUFFER_BINDING }
    只读 __帧缓冲区_绑定__: 数字;

    //@@{ __帧缓冲区_完整的__:FRAMEBUFFER_COMPLETE }
    只读 __帧缓冲区_完整的__: 数字;

    //@@{ __帧缓冲区_不完整的_附件__:FRAMEBUFFER_INCOMPLETE_ATTACHMENT }
    只读 __帧缓冲区_不完整的_附件__: 数字;

    //@@{ __帧缓冲区_不完整的_维__:FRAMEBUFFER_INCOMPLETE_DIMENSIONS }
    只读 __帧缓冲区_不完整的_维__: 数字;

    //@@{ __帧缓冲区_不完整的_失踪_附件__:FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT }
    只读 __帧缓冲区_不完整的_失踪_附件__: 数字;

    //@@{ __帧缓冲区_不支持的__:FRAMEBUFFER_UNSUPPORTED }
    只读 __帧缓冲区_不支持的__: 数字;

    //@@{ __前面__:FRONT }
    只读 __前面__: 数字;

    //@@{ __前面_和_后面__:FRONT_AND_BACK }
    只读 __前面_和_后面__: 数字;

    //@@{ __前面_表面__:FRONT_FACE }
    只读 __前面_表面__: 数字;

    //@@{ __函数_添加__:FUNC_ADD }
    只读 __函数_添加__: 数字;//##{ FUNC_REVERSE_SUBTRACT:__函数_反向_减去__ }#

    //@@{ __函数_反向_减去__:FUNC_REVERSE_SUBTRACT }
    只读 __函数_反向_减去__: 数字;

    //@@{ __函数_减去__:FUNC_SUBTRACT }
    只读 __函数_减去__: 数字;

    //@@{ __生成_产生_提示__:GENERATE_MIPMAP_HINT }
    只读 __生成_产生_提示__: 数字;

    //@@{ __G相等的__:GEQUAL }
    只读 __G相等的__: 数字;

    //@@{ __G更大的__:GREATER }
    只读 __G更大的__: 数字;

    //@@{ __绿色_位__:GREEN_BITS }
    只读 __绿色_位__: 数字;//##{ HIGH_FLOAT:__高_浮点__ }#

    //@@{ __高_浮点__:HIGH_FLOAT }
    只读 __高_浮点__: 数字;

    //@@{ __高_整数__:HIGH_INT }
    只读 __高_整数__: 数字;

    //@@{ __实现_颜色_读_格式__:IMPLEMENTATION_COLOR_READ_FORMAT }
    只读 __实现_颜色_读_格式__: 数字;

    //@@{ __实现_颜色_读_类型__:IMPLEMENTATION_COLOR_READ_TYPE }
    只读 __实现_颜色_读_类型__: 数字;

    //@@{ __增加__:INCR }
    只读 __增加__: 数字;

    //@@{ __增加_包装__:INCR_WRAP }
    只读 __增加_包装__: 数字;

    //@@{ __整数__:INT }
    只读 __整数__: 数字;

    //@@{ __整数_VEC2__:INT_VEC2 }
    只读 __整数_VEC2__: 数字;

    //@@{ __整数_VEC3__:INT_VEC3 }
    只读 __整数_VEC3__: 数字;

    //@@{ __整数_VEC4__:INT_VEC4 }
    只读 __整数_VEC4__: 数字;

    //@@{ __无效的_枚举__:INVALID_ENUM }
    只读 __无效的_枚举__: 数字;

    //@@{ __无效的_帧缓冲区_操作__:INVALID_FRAMEBUFFER_OPERATION }
    只读 __无效的_帧缓冲区_操作__: 数字;

    //@@{ __无效的_操作__:INVALID_OPERATION }
    只读 __无效的_操作__: 数字;

    //@@{ __无效的_值__:INVALID_VALUE }
    只读 __无效的_值__: 数字;

    //@@{ __反__:INVERT }
    只读 __反__: 数字;

    //@@{ __保持__:KEEP }
    只读 __保持__: 数字;

    //@@{ __L相等__:LEQUAL }
    只读 __L相等__: 数字;

    只读 LESS: 数字;

    //@@{ __线_循环__:LINE_LOOP }
    只读 __线_循环__: 数字;

    //@@{ __线_带__:LINE_STRIP }
    只读 __线_带__: 数字;

    //@@{ __行_宽度__:LINE_WIDTH }
    只读 __行_宽度__: 数字;

    //@@{ __线性__:LINEAR }
    只读 __线性__: 数字;

    //@@{ __线性_产生_线性__:LINEAR_MIPMAP_LINEAR }
    只读 __线性_产生_线性__: 数字;

    //@@{ __线性_产生_最近的__:LINEAR_MIPMAP_NEAREST }
    只读 __线性_产生_最近的__: 数字;

    //@@{ __线组__:LINES }
    只读 __线组__: 数字;

    //@@{ __链接_状态__:LINK_STATUS }
    只读 __链接_状态__: 数字;

    //@@{ __低_浮点__:LOW_FLOAT }
    只读 __低_浮点__: 数字;

    //@@{ __低_整数__:LOW_INT }
    只读 __低_整数__: 数字;

    //@@{ __亮度__:LUMINANCE }
    只读 __亮度__: 数字;

    //@@{ __亮度_透明__:LUMINANCE_ALPHA }
    只读 __亮度_透明__: 数字;

    //@@{ __最大_结合_纹理_图像_单位__:MAX_COMBINED_TEXTURE_IMAGE_UNITS }
    只读 __最大_结合_纹理_图像_单位__: 数字;

    //@@{ __最大_多维数据集_映射_纹理_大小__:MAX_CUBE_MAP_TEXTURE_SIZE }
    只读 __最大_多维数据集_映射_纹理_大小__: 数字;

    //@@{ __最大_片段_统一的_向量__:MAX_FRAGMENT_UNIFORM_VECTORS }
    只读 __最大_片段_统一的_向量__: 数字;

    //@@{ __最大_渲染缓冲区_大小__:MAX_RENDERBUFFER_SIZE }
    只读 __最大_渲染缓冲区_大小__: 数字;

    //@@{ __最大_纹理_图像_单位__:MAX_TEXTURE_IMAGE_UNITS }
    只读 __最大_纹理_图像_单位__: 数字;

    //@@{ __最大_纹理_大小__:MAX_TEXTURE_SIZE }
    只读 __最大_纹理_大小__: 数字;

    //@@{ __最大_不同_向量__:MAX_VARYING_VECTORS }
    只读 __最大_不同_向量__: 数字;

    //@@{ __最大_顶点_属性__:MAX_VERTEX_ATTRIBS }
    只读 __最大_顶点_属性__: 数字;

    //@@{ __最大_顶点_纹理_图像_单位__:MAX_VERTEX_TEXTURE_IMAGE_UNITS }
    只读 __最大_顶点_纹理_图像_单位__: 数字;

    //@@{ __最大_顶点_统一的_向量__:MAX_VERTEX_UNIFORM_VECTORS }
    只读 __最大_顶点_统一的_向量__: 数字;

    //@@{ __最大_视图_变暗__:MAX_VIEWPORT_DIMS }
    只读 __最大_视图_变暗__: 数字;

    //@@{ __媒介_浮点__:MEDIUM_FLOAT }
    只读 __媒介_浮点__: 数字;

    //@@{ __媒介_整数__:MEDIUM_INT }
    只读 __媒介_整数__: 数字;

    //@@{ __镜像_重复__:MIRRORED_REPEAT }
    只读 __镜像_重复__: 数字;

    //@@{ __最近的__:NEAREST }
    只读 __最近的__: 数字;

    //@@{ __最近的_产生_线性__:NEAREST_MIPMAP_LINEAR }
    只读 __最近的_产生_线性__: 数字;

    //@@{ __最近的_产生_最近的__:NEAREST_MIPMAP_NEAREST }
    只读 __最近的_产生_最近的__: 数字;

    //@@{ __从来没有__:NEVER }
    只读 __从来没有__: 数字;

    //@@{ __最好的__:NICEST }
    只读 __最好的__: 数字;

    //@@{ __没有_错误__:NO_ERROR }
    只读 __没有_错误__: 数字;

    //@@{ __没有__:NONE }
    只读 __没有__: 数字;

    //@@{ __不等号__:NOTEQUAL }
    只读 __不等号__: 数字;

    只读 ONE: 数字;

    //@@{ __ONE_常数_透明__:ONE_MINUS_CONSTANT_ALPHA }
    只读 __ONE_常数_透明__: 数字;

    //@@{ __ONE_常数_颜色__:ONE_MINUS_CONSTANT_COLOR }
    只读 __ONE_常数_颜色__: 数字;

    //@@{ __ONE_DST_透明__:ONE_MINUS_DST_ALPHA }
    只读 __ONE_DST_透明__: 数字;

    //@@{ __ONE_DST_颜色__:ONE_MINUS_DST_COLOR }
    只读 __ONE_DST_颜色__: 数字;

    //@@{ __ONE_SRC_透明__:ONE_MINUS_SRC_ALPHA }
    只读 __ONE_SRC_透明__: 数字;

    //@@{ __ONE_SRC_颜色__:ONE_MINUS_SRC_COLOR }
    只读 __ONE_SRC_颜色__: 数字;

    //@@{ __内存_不足__:OUT_OF_MEMORY }
    只读 __内存_不足__: 数字;

    //@@{ __包_对齐__:PACK_ALIGNMENT }
    只读 __包_对齐__: 数字;

    //@@{ __点__:POINTS }
    只读 __点__: 数字;

    //@@{ __多边形_偏移_因素__:POLYGON_OFFSET_FACTOR }
    只读 __多边形_偏移_因素__: 数字;

    //@@{ __多边形_偏移_填充__:POLYGON_OFFSET_FILL }
    只读 __多边形_偏移_填充__: 数字;

    //@@{ __多边形_偏移_单位__:POLYGON_OFFSET_UNITS }
    只读 __多边形_偏移_单位__: 数字;

    //@@{ __红色_位__:RED_BITS }
    只读 __红色_位__: 数字;

    //@@{ __渲染缓冲区__:RENDERBUFFER }
    只读 __渲染缓冲区__: 数字;

    //@@{ __渲染缓冲区_透明_大小__:RENDERBUFFER_ALPHA_SIZE }
    只读 __渲染缓冲区_透明_大小__: 数字;

    //@@{ __渲染缓冲区_绑定__:RENDERBUFFER_BINDING }
    只读 __渲染缓冲区_绑定__: 数字;

    //@@{ __渲染缓冲区_蓝色_大小__:RENDERBUFFER_BLUE_SIZE }
    只读 __渲染缓冲区_蓝色_大小__: 数字;

    //@@{ __渲染缓冲区_深度_大小__:RENDERBUFFER_DEPTH_SIZE }
    只读 __渲染缓冲区_深度_大小__: 数字;

    //@@{ __渲染缓冲区_绿色_大小__:RENDERBUFFER_GREEN_SIZE }
    只读 __渲染缓冲区_绿色_大小__: 数字;

    //@@{ __渲染缓冲区_高度__:RENDERBUFFER_HEIGHT }
    只读 __渲染缓冲区_高度__: 数字;

    //@@{ __渲染缓冲区_内部_格式__:RENDERBUFFER_INTERNAL_FORMAT }
    只读 __渲染缓冲区_内部_格式__: 数字;

    //@@{ __渲染缓冲区_红色_大小__:RENDERBUFFER_RED_SIZE }
    只读 __渲染缓冲区_红色_大小__: 数字;

    //@@{ __渲染缓冲区_钢网_大小__:RENDERBUFFER_STENCIL_SIZE }
    只读 __渲染缓冲区_钢网_大小__: 数字;

    //@@{ __渲染缓冲区_宽度__:RENDERBUFFER_WIDTH }
    只读 __渲染缓冲区_宽度__: 数字;

    //@@{ __渲染器__:RENDERER }
    只读 __渲染器__: 数字;

    //@@{ __重复__:REPEAT }
    只读 __重复__: 数字;

    //@@{ __替换__:REPLACE }
    只读 __替换__: 数字;

    只读 RGB: 数字;

    只读 RGB5_A1: 数字;

    只读 RGB565: 数字;

    只读 RGBA: 数字;

    只读 RGBA4: 数字;

    //@@{ __样本_透明_到_报道__:SAMPLE_ALPHA_TO_COVERAGE }
    只读 __样本_透明_到_报道__: 数字;

    //@@{ __样本_缓冲区__:SAMPLE_BUFFERS }
    只读 __样本_缓冲区__: 数字;

    //@@{ __样本_报道__:SAMPLE_COVERAGE }
    只读 __样本_报道__: 数字;

    //@@{ __样本_报道_反__:SAMPLE_COVERAGE_INVERT }
    只读 __样本_报道_反__: 数字;

    //@@{ __样本_报道_值__:SAMPLE_COVERAGE_VALUE }
    只读 __样本_报道_值__: 数字;

    //@@{ __取样器_2D__:SAMPLER_2D }
    只读 __取样器_2D__: 数字;

    //@@{ __取样器_多维数据集__:SAMPLER_CUBE }
    只读 __取样器_多维数据集__: 数字;

    //@@{ __取样器__:SAMPLES }
    只读 __取样器__: 数字;

    //@@{ __剪刀_盒子__:SCISSOR_BOX }
    只读 __剪刀_盒子__: 数字;

    //@@{ __剪刀_测试__:SCISSOR_TEST }
    只读 __剪刀_测试__: 数字;

    //@@{ __材质_类型__:SHADER_TYPE }
    只读 __材质_类型__: 数字;

    //@@{ __阴影_语言_版本__:SHADING_LANGUAGE_VERSION }
    只读 __阴影_语言_版本__: 数字;

    //@@{ __短__:SHORT }
    只读 __短__: 数字;

    //@@{ __SRC_透明__:SRC_ALPHA }
    只读 __SRC_透明__: 数字;

    //@@{ __SRC_透明_饱和__:SRC_ALPHA_SATURATE }
    只读 __SRC_透明_饱和__: 数字;

    //@@{ __SRC_颜色__:SRC_COLOR }
    只读 __SRC_颜色__: 数字;

    //@@{ __静态_画__:STATIC_DRAW }
    只读 __静态_画__: 数字;

    //@@{ __钢网_附件__:STENCIL_ATTACHMENT }
    只读 __钢网_附件__: 数字;

    //@@{ __钢网_后面_失败__:STENCIL_BACK_FAIL }
    只读 __钢网_后面_失败__: 数字;

    //@@{ __钢网_后面_函数__:STENCIL_BACK_FUNC }
    只读 __钢网_后面_函数__: 数字;

    //@@{ __钢网_后面_通过_深度_失败__:STENCIL_BACK_PASS_DEPTH_FAIL }
    只读 __钢网_后面_通过_深度_失败__: 数字;

    //@@{ __钢网_后面_通过_深度_通过__:STENCIL_BACK_PASS_DEPTH_PASS }
    只读 __钢网_后面_通过_深度_通过__: 数字;

    //@@{ __钢网_后面_裁判__:STENCIL_BACK_REF }
    只读 __钢网_后面_裁判__: 数字;

    //@@{ __钢网_后面_值_遮罩__:STENCIL_BACK_VALUE_MASK }
    只读 __钢网_后面_值_遮罩__: 数字;

    //@@{ __钢网_后面_写掩码__:STENCIL_BACK_WRITEMASK }
    只读 __钢网_后面_写掩码__: 数字;

    //@@{ __钢网_位__:STENCIL_BITS }
    只读 __钢网_位__: 数字;

    //@@{ __钢网_缓冲_位__:STENCIL_BUFFER_BIT }
    只读 __钢网_缓冲_位__: 数字;

    //@@{ __钢网_清除_值__:STENCIL_CLEAR_VALUE }
    只读 __钢网_清除_值__: 数字;

    //@@{ __钢网_失败__:STENCIL_FAIL }
    只读 __钢网_失败__: 数字;

    //@@{ __钢网_函数__:STENCIL_FUNC }
    只读 __钢网_函数__: 数字;

    //@@{ __钢网_指数__:STENCIL_INDEX }
    只读 __钢网_指数__: 数字;

    //@@{ __钢网_指数8__:STENCIL_INDEX8 }
    只读 __钢网_指数8__: 数字;

    //@@{ __钢网_通过_深度_失败__:STENCIL_PASS_DEPTH_FAIL }
    只读 __钢网_通过_深度_失败__: 数字;

    //@@{ __钢网_通过_深度_通过__:STENCIL_PASS_DEPTH_PASS }
    只读 __钢网_通过_深度_通过__: 数字;

    //@@{ __钢网_裁判__:STENCIL_REF }
    只读 __钢网_裁判__: 数字;

    //@@{ __钢网_测试__:STENCIL_TEST }
    只读 __钢网_测试__: 数字;

    //@@{ __钢网_值_遮罩__:STENCIL_VALUE_MASK }
    只读 __钢网_值_遮罩__: 数字;

    //@@{ __钢网_写掩码__:STENCIL_WRITEMASK }
    只读 __钢网_写掩码__: 数字;

    //@@{ __流_画__:STREAM_DRAW }
    只读 __流_画__: 数字;

    //@@{ __子像素_位__:SUBPIXEL_BITS }
    只读 __子像素_位__: 数字;

    //@@{ __纹理__:TEXTURE }
    只读 __纹理__: 数字;

    //@@{ __纹理_2D__:TEXTURE_2D }
    只读 __纹理_2D__: 数字;

    //@@{ __纹理_绑定_2D__:TEXTURE_BINDING_2D }
    只读 __纹理_绑定_2D__: 数字;

    //@@{ __纹理_绑定_多维数据集_映射__:TEXTURE_BINDING_CUBE_MAP }
    只读 __纹理_绑定_多维数据集_映射__: 数字;

    //@@{ __纹理_多维数据集_映射__:TEXTURE_CUBE_MAP }
    只读 __纹理_多维数据集_映射__: 数字;

    //@@{ __纹理_多维数据集_映射_负_X__:TEXTURE_CUBE_MAP_NEGATIVE_X }
    只读 __纹理_多维数据集_映射_负_X__: 数字;

    //@@{ __纹理_多维数据集_映射_负_Y__:TEXTURE_CUBE_MAP_NEGATIVE_Y }
    只读 __纹理_多维数据集_映射_负_Y__: 数字;

    //@@{ __纹理_多维数据集_映射_负_Z__:TEXTURE_CUBE_MAP_NEGATIVE_Z }
    只读 __纹理_多维数据集_映射_负_Z__: 数字;

    //@@{ __纹理_多维数据集_映射_正_X__:TEXTURE_CUBE_MAP_POSITIVE_X }
    只读 __纹理_多维数据集_映射_正_X__: 数字;

    //@@{ __纹理_多维数据集_映射_正_Y__:TEXTURE_CUBE_MAP_POSITIVE_Y }
    只读 __纹理_多维数据集_映射_正_Y__: 数字;

    //@@{ __纹理_多维数据集_映射_正_Z__:TEXTURE_CUBE_MAP_POSITIVE_Z }
    只读 __纹理_多维数据集_映射_正_Z__: 数字;

    //@@{ __纹理_玛格_过滤器__:TEXTURE_MAG_FILTER }
    只读 __纹理_玛格_过滤器__: 数字;

    //@@{ __纹理_最小值_过滤器__:TEXTURE_MIN_FILTER }
    只读 __纹理_最小值_过滤器__: 数字;

    //@@{ __纹理_包装_S__:TEXTURE_WRAP_S }
    只读 __纹理_包装_S__: 数字;

    //@@{ __纹理_包装_T__:TEXTURE_WRAP_T }
    只读 __纹理_包装_T__: 数字;

    //@@{ __纹理0__:TEXTURE0 }
    只读 __纹理0__: 数字;

    //@@{ __纹理1__:TEXTURE1 }
    只读 __纹理1__: 数字;

    //@@{ __纹理10__:TEXTURE10 }
    只读 __纹理10__: 数字;

    //@@{ __纹理11__:TEXTURE11 }
    只读 __纹理11__: 数字;

    //@@{ __纹理12__:TEXTURE12 }
    只读 __纹理12__: 数字;

    //@@{ __纹理13__:TEXTURE13 }
    只读 __纹理13__: 数字;

    //@@{ __纹理14__:TEXTURE14 }
    只读 __纹理14__: 数字;

    //@@{ __纹理15__:TEXTURE15 }
    只读 __纹理15__: 数字;

    //@@{ __纹理16__:TEXTURE16 }
    只读 __纹理16__: 数字;

    //@@{ __纹理17__:TEXTURE17 }
    只读 __纹理17__: 数字;

    //@@{ __纹理18__:TEXTURE18 }
    只读 __纹理18__: 数字;

    //@@{ __纹理19__:TEXTURE19 }
    只读 __纹理19__: 数字;

    //@@{ __纹理2__:TEXTURE2 }
    只读 __纹理2__: 数字;

    //@@{ __纹理20__:TEXTURE20 }
    只读 __纹理20__: 数字;

    //@@{ __纹理21__:TEXTURE21 }
    只读 __纹理21__: 数字;

    //@@{ __纹理22__:TEXTURE22 }
    只读 __纹理22__: 数字;

    //@@{ __纹理23__:TEXTURE23 }
    只读 __纹理23__: 数字;

    //@@{ __纹理24__:TEXTURE24 }
    只读 __纹理24__: 数字;

    //@@{ __纹理25__:TEXTURE25 }
    只读 __纹理25__: 数字;

    //@@{ __纹理26__:TEXTURE26 }
    只读 __纹理26__: 数字;

    //@@{ __纹理27__:TEXTURE27 }
    只读 __纹理27__: 数字;

    //@@{ __纹理28__:TEXTURE28 }
    只读 __纹理28__: 数字;

    //@@{ __纹理29__:TEXTURE29 }
    只读 __纹理29__: 数字;

    //@@{ __纹理3__:TEXTURE3 }
    只读 __纹理3__: 数字;

    //@@{ __纹理30__:TEXTURE30 }
    只读 __纹理30__: 数字;

    //@@{ __纹理31__:TEXTURE31 }
    只读 __纹理31__: 数字;

    //@@{ __纹理4__:TEXTURE4 }
    只读 __纹理4__: 数字;

    //@@{ __纹理5__:TEXTURE5 }
    只读 __纹理5__: 数字;

    //@@{ __纹理6__:TEXTURE6 }
    只读 __纹理6__: 数字;

    //@@{ __纹理7__:TEXTURE7 }
    只读 __纹理7__: 数字;

    //@@{ __纹理8__:TEXTURE8 }
    只读 __纹理8__: 数字;

    //@@{ __纹理9__:TEXTURE9 }
    只读 __纹理9__: 数字;

    //@@{ __三角形_风扇__:TRIANGLE_FAN }
    只读 __三角形_风扇__: 数字;

    //@@{ __三角形_带__:TRIANGLE_STRIP }
    只读 __三角形_带__: 数字;

    //@@{ __三角形__:TRIANGLES }
    只读 __三角形__: 数字;

    //@@{ __解压缩_对齐__:UNPACK_ALIGNMENT }
    只读 __解压缩_对齐__: 数字;

    //@@{ __解压缩_色彩_转换_WEBGL__:UNPACK_COLORSPACE_CONVERSION_WEBGL }
    只读 __解压缩_色彩_转换_WEBGL__: 数字;

    //@@{ __解压缩_翻转_Y_WEBGL__:UNPACK_FLIP_Y_WEBGL }
    只读 __解压缩_翻转_Y_WEBGL__: 数字;

    //@@{ __解压缩_自左乘_透明_WEBGL__:UNPACK_PREMULTIPLY_ALPHA_WEBGL }
    只读 __解压缩_自左乘_透明_WEBGL__: 数字;

    //@@{ __无符号_字节__:UNSIGNED_BYTE }
    只读 __无符号_字节__: 数字;

    //@@{ __无符号_整数__:UNSIGNED_INT }
    只读 __无符号_整数__: 数字;

    //@@{ __无符号_短__:UNSIGNED_SHORT }
    只读 __无符号_短__: 数字;

    //@@{ __无符号_短_4_4_4_4__:UNSIGNED_SHORT_4_4_4_4 }
    只读 __无符号_短_4_4_4_4__: 数字;

    //@@{ __无符号_短_5_5_5_1__:UNSIGNED_SHORT_5_5_5_1 }
    只读 __无符号_短_5_5_5_1__: 数字;

    //@@{ __无符号_短_5_6_5__:UNSIGNED_SHORT_5_6_5 }
    只读 __无符号_短_5_6_5__: 数字;

    //@@{ __验证_状态__:VALIDATE_STATUS }
    只读 __验证_状态__: 数字;

    //@@{ __供应商__:VENDOR }
    只读 __供应商__: 数字;

    //@@{ __版本__:VERSION }
    只读 __版本__: 数字;

    //@@{ __顶点_属性_数组_缓冲_绑定__:VERTEX_ATTRIB_ARRAY_BUFFER_BINDING }
    只读 __顶点_属性_数组_缓冲_绑定__: 数字;

    //@@{ __顶点_属性_数组_启用__:VERTEX_ATTRIB_ARRAY_ENABLED }
    只读 __顶点_属性_数组_启用__: 数字;

    //@@{ __顶点_属性_数组_归一化__:VERTEX_ATTRIB_ARRAY_NORMALIZED }
    只读 __顶点_属性_数组_归一化__: 数字;

    //@@{ __顶点_属性_数组_指针__:VERTEX_ATTRIB_ARRAY_POINTER }
    只读 __顶点_属性_数组_指针__: 数字;

    //@@{ __顶点_属性_数组_大小__:VERTEX_ATTRIB_ARRAY_SIZE }
    只读 __顶点_属性_数组_大小__: 数字;

    //@@{ __顶点_属性_数组_步__:VERTEX_ATTRIB_ARRAY_STRIDE }
    只读 __顶点_属性_数组_步__: 数字;

    //@@{ __顶点_属性_数组_类型__:VERTEX_ATTRIB_ARRAY_TYPE }
    只读 __顶点_属性_数组_类型__: 数字;

    //@@{ __顶点_材质__:VERTEX_SHADER }
    只读 __顶点_材质__: 数字;

    //@@{ __视图__:VIEWPORT }
    只读 __视图__: 数字;

    //@@{ __零__:ZERO }
    只读 __零__: 数字;

};

//@@{ WebGL材质_:WebGLShader, WebGL对象_:WebGLObject }
接口 WebGL材质_ 扩展 WebGL对象_ {

}

声明 值量 WebGL材质_: {

    //@@{ 原型:prototype, WebGL材质_:WebGLShader }
    原型: WebGL材质_;

    //@@{ WebGL材质_:WebGLShader }
    新建(): WebGL材质_;

};

//@@{ WebGL材质精度格式_:WebGLShaderPrecisionFormat }
接口 WebGL材质精度格式_ {

    //@@{ 精度:precision }
    只读 精度: 数字;

    //@@{ 范围最大:rangeMax }
    只读 范围最大: 数字;

    //@@{ 范围最小:rangeMin }
    只读 范围最小: 数字;

}

声明 值量 WebGL材质精度格式_: {

    //@@{ 原型:prototype, WebGL材质精度格式_:WebGLShaderPrecisionFormat }
    原型: WebGL材质精度格式_;

    //@@{ WebGL材质精度格式_:WebGLShaderPrecisionFormat }
    新建(): WebGL材质精度格式_;

};

//@@{ WebGL纹理_:WebGLTexture, WebGL对象_:WebGLObject }
接口 WebGL纹理_ 扩展 WebGL对象_ {

}

声明 值量 WebGL纹理_: {

    //@@{ 原型:prototype, WebGL纹理_:WebGLTexture }
    原型: WebGL纹理_;

    //@@{ WebGL纹理_:WebGLTexture }
    新建(): WebGL纹理_;

};

//@@{ WebGL统一位置_:WebGLUniformLocation }
接口 WebGL统一位置_ {

}

声明 值量 WebGL统一位置_: {

    //@@{ 原型:prototype, WebGL统一位置_:WebGLUniformLocation }
    原型: WebGL统一位置_;

    //@@{ WebGL统一位置_:WebGLUniformLocation }
    新建(): WebGL统一位置_;

};

//@@{ WebKitCSS矩阵_:WebKitCSSMatrix }
接口 WebKitCSS矩阵_ {

    a: 数字;

    b: 数字;

    c: 数字;

    d: 数字;

    e: 数字;

    f: 数字;

    m11: 数字;

    m12: 数字;

    m13: 数字;

    m14: 数字;

    m21: 数字;

    m22: 数字;

    m23: 数字;

    m24: 数字;

    m31: 数字;

    m32: 数字;

    m33: 数字;

    m34: 数字;

    m41: 数字;

    m42: 数字;

    m43: 数字;

    m44: 数字;

    //@@{ 逆向:inverse, WebKitCSS矩阵_:WebKitCSSMatrix }
    逆向(): WebKitCSS矩阵_;

    //@@{ 乘:multiply, 第二个矩阵:secondMatrix, WebKitCSS矩阵_:WebKitCSSMatrix }
    乘(第二个矩阵: WebKitCSS矩阵_): WebKitCSS矩阵_;

    //@@{ 旋转:rotate, 角X:angleX, 角Y:angleY, 角Z:angleZ, WebKitCSS矩阵_:WebKitCSSMatrix }
    旋转(角X: 数字, 角Y?: 数字, 角Z?: 数字): WebKitCSS矩阵_;

    //@@{ 轴旋转角:rotateAxisAngle, 角:angle, WebKitCSS矩阵_:WebKitCSSMatrix }
    轴旋转角(x: 数字, y: 数字, z: 数字, 角: 数字): WebKitCSS矩阵_;

    //@@{ 缩放:scale, 规模X:scaleX, 规模Y:scaleY, 规模Z:scaleZ, WebKitCSS矩阵_:WebKitCSSMatrix }
    缩放(规模X: 数字, 规模Y?: 数字, 规模Z?: 数字): WebKitCSS矩阵_;

    //@@{ 置矩阵值:setMatrixValue, 值:value }
    置矩阵值(值: 文字): 无值;

    //@@{ 倾斜X:skewX, 角:angle, WebKitCSS矩阵_:WebKitCSSMatrix }
    倾斜X(角: 数字): WebKitCSS矩阵_;

    //@@{ 倾斜Y:skewY, 角:angle, WebKitCSS矩阵_:WebKitCSSMatrix }
    倾斜Y(角: 数字): WebKitCSS矩阵_;

    //@@{ 转为文字:toString }
    转为文字(): 文字;

    //@@{ 翻转:translate, WebKitCSS矩阵_:WebKitCSSMatrix }
    翻转(x: 数字, y: 数字, z?: 数字): WebKitCSS矩阵_;

}

声明 值量 WebKitCSS矩阵_: {

    //@@{ 原型:prototype, WebKitCSS矩阵_:WebKitCSSMatrix }
    原型: WebKitCSS矩阵_;

    //@@{ 文本:text, WebKitCSS矩阵_:WebKitCSSMatrix }
    新建(文本?: 文字): WebKitCSS矩阵_;

};

//@@{ WebKit目录条目_:WebKitDirectoryEntry, WebKit条目_:WebKitEntry }
接口 WebKit目录条目_ 扩展 WebKit条目_ {

    //@@{ 创建读者:createReader, WebKit目录读者_:WebKitDirectoryReader }
    创建读者(): WebKit目录读者_;

}

声明 值量 WebKit目录条目_: {

    //@@{ 原型:prototype, WebKit目录条目_:WebKitDirectoryEntry }
    原型: WebKit目录条目_;

    //@@{ WebKit目录条目_:WebKitDirectoryEntry }
    新建(): WebKit目录条目_;

};

//@@{ WebKit目录读者_:WebKitDirectoryReader }
接口 WebKit目录读者_ {

    //@@{ 读条目:readEntries, 成功回调:successCallback, WebKit条目回调_:WebKitEntriesCallback, 错误回调:errorCallback, WebKit错误回调_:WebKitErrorCallback }
    读条目(成功回调: WebKit条目回调_, 错误回调?: WebKit错误回调_): 无值;

}

声明 值量 WebKit目录读者_: {

    //@@{ 原型:prototype, WebKit目录读者_:WebKitDirectoryReader }
    原型: WebKit目录读者_;

    //@@{ WebKit目录读者_:WebKitDirectoryReader }
    新建(): WebKit目录读者_;

};

//@@{ WebKit条目_:WebKitEntry }
接口 WebKit条目_ {

    //@@{ 文件系统:filesystem, WebKit文件系统_:WebKitFileSystem }
    只读 文件系统: WebKit文件系统_;

    //@@{ 完整路径:fullPath }
    只读 完整路径: 文字;

    //@@{ 是目录:isDirectory }
    只读 是目录: 真假;

    //@@{ 是文件:isFile }
    只读 是文件: 真假;

    //@@{ 名字:name }
    只读 名字: 文字;

}

声明 值量 WebKit条目_: {

    //@@{ 原型:prototype, WebKit条目_:WebKitEntry }
    原型: WebKit条目_;

    //@@{ WebKit条目_:WebKitEntry }
    新建(): WebKit条目_;

};

//@@{ WebKit文件条目_:WebKitFileEntry, WebKit条目_:WebKitEntry }
接口 WebKit文件条目_ 扩展 WebKit条目_ {

    //@@{ 文件:file, 成功回调:successCallback, WebKit文件回调_:WebKitFileCallback, 错误回调:errorCallback, WebKit错误回调_:WebKitErrorCallback }
    文件(成功回调: WebKit文件回调_, 错误回调?: WebKit错误回调_): 无值;

}

声明 值量 WebKit文件条目_: {

    //@@{ 原型:prototype, WebKit文件条目_:WebKitFileEntry }
    原型: WebKit文件条目_;

    //@@{ WebKit文件条目_:WebKitFileEntry }
    新建(): WebKit文件条目_;

};

//@@{ WebKit文件系统_:WebKitFileSystem }
接口 WebKit文件系统_ {

    //@@{ 名字:name }
    只读 名字: 文字;

    //@@{ 根:root, WebKit目录条目_:WebKitDirectoryEntry }
    只读 根: WebKit目录条目_;

}

声明 值量 WebKit文件系统_: {

    //@@{ 原型:prototype, WebKit文件系统_:WebKitFileSystem }
    原型: WebKit文件系统_;

    //@@{ WebKit文件系统_:WebKitFileSystem }
    新建(): WebKit文件系统_;

};

//@@{ WebKit点_:WebKitPoint }
接口 WebKit点_ {

    x: 数字;

    y: 数字;

}

声明 值量 WebKit点_: {

    //@@{ 原型:prototype, WebKit点_:WebKitPoint }
    原型: WebKit点_;

    //@@{ WebKit点_:WebKitPoint }
    新建(x?: 数字, y?: 数字): WebKit点_;

};

//@@{ webkitRTC对等连接_:webkitRTCPeerConnection, RTC对等连接_:RTCPeerConnection }
接口 webkitRTC对等连接_ 扩展 RTC对等连接_ {

    //@@{ 添加事件监听器:addEventListener, RTC对等连接事件映射_:RTCPeerConnectionEventMap, 类型:type, 侦听器:listener, webkitRTC对等连接_:webkitRTCPeerConnection, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 RTC对等连接事件映射_>(类型: K, 侦听器: (本体: webkitRTC对等连接_, ev: RTC对等连接事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 webkitRTC对等连接_: {

    //@@{ 原型:prototype, webkitRTC对等连接_:webkitRTCPeerConnection }
    原型: webkitRTC对等连接_;

    //@@{ 配置:configuration, RTC配置_:RTCConfiguration, webkitRTC对等连接_:webkitRTCPeerConnection }
    新建(配置: RTC配置_): webkitRTC对等连接_;

};

//@@{ 网络套接字事件映射_:WebSocketEventMap }
接口 网络套接字事件映射_ {

    //@@{ "关闭":"close", 关闭事件_:CloseEvent }
    "关闭": 关闭事件_;

    //@@{ "错误":"error", 事件_:Event }
    "错误": 事件_;

    //@@{ "消息":"message", 消息事件_:MessageEvent }
    "消息": 消息事件_;

    //@@{ "打开":"open", 事件_:Event }
    "打开": 事件_;

}

//@@{ 网络套接字_:WebSocket, 事件目标_:EventTarget }
接口 网络套接字_ 扩展 事件目标_ {

    //@@{ 二进制类型:binaryType }
    二进制类型: 文字;

    //@@{ 缓冲量:bufferedAmount }
    只读 缓冲量: 数字;

    //@@{ 扩展:extensions }
    只读 扩展: 文字;

    //@@{ 正在关闭:onclose, 网络套接字_:WebSocket, 关闭事件_:CloseEvent }
    正在关闭: (本体: 网络套接字_, ev: 关闭事件_) => 任意;

    //@@{ 正在错误:onerror, 网络套接字_:WebSocket, 事件_:Event }
    正在错误: (本体: 网络套接字_, ev: 事件_) => 任意;

    //@@{ 正在消息:onmessage, 网络套接字_:WebSocket, 消息事件_:MessageEvent }
    正在消息: (本体: 网络套接字_, ev: 消息事件_) => 任意;

    //@@{ 正在打开:onopen, 网络套接字_:WebSocket, 事件_:Event }
    正在打开: (本体: 网络套接字_, ev: 事件_) => 任意;

    //@@{ 协议:protocol }
    只读 协议: 文字;

    //@@{ 就绪状态:readyState }
    只读 就绪状态: 数字;

    只读 url: 文字;

    //@@{ 关闭:close, 代码:code, 原因:reason }
    关闭(代码?: 数字, 原因?: 文字): 无值;

    //@@{ 发送:send, 数据:data }
    发送(数据: 任意): 无值;

    //@@{ __关闭的__:CLOSED }
    只读 __关闭的__: 数字;

    //@@{ __关闭中__:CLOSING }
    只读 __关闭中__: 数字;

    //@@{ __连接__:CONNECTING }
    只读 __连接__: 数字;

    //@@{ __打开__:OPEN }
    只读 __打开__: 数字;

    //@@{ 添加事件监听器:addEventListener, 网络套接字事件映射_:WebSocketEventMap, 类型:type, 侦听器:listener, 网络套接字_:WebSocket, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 网络套接字事件映射_>(类型: K, 侦听器: (本体: 网络套接字_, ev: 网络套接字事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 网络套接字_: {

    //@@{ 原型:prototype, 网络套接字_:WebSocket }
    原型: 网络套接字_;

    //@@{ 协议:protocols, 网络套接字_:WebSocket }
    新建(url: 文字, 协议?: 文字 | 文字[]): 网络套接字_;

    //@@{ __关闭的__:CLOSED }
    只读 __关闭的__: 数字;

    //@@{ __关闭中__:CLOSING }
    只读 __关闭中__: 数字;

    //@@{ __连接__:CONNECTING }
    只读 __连接__: 数字;

    //@@{ __打开__:OPEN }
    只读 __打开__: 数字;

};

//@@{ 轮事件_:WheelEvent, 鼠标事件_:MouseEvent }
接口 轮事件_ 扩展 鼠标事件_ {

    //@@{ 滚动单位:deltaMode }
    只读 滚动单位: 数字;

    //@@{ 增量X:deltaX }
    只读 增量X: 数字;

    //@@{ 增量Y:deltaY }
    只读 增量Y: 数字;

    //@@{ 增量Z:deltaZ }
    只读 增量Z: 数字;

    //@@{ 轮增量:wheelDelta }
    只读 轮增量: 数字;

    //@@{ 轮增量X:wheelDeltaX }
    只读 轮增量X: 数字;

    //@@{ 轮增量Y:wheelDeltaY }
    只读 轮增量Y: 数字;

    //@@{ 取当前点:getCurrentPoint, 元素:element, 元素_:Element }
    取当前点(元素: 元素_): 无值;

    //@@{ 初始化轮事件:initWheelEvent, 类型参数:typeArg, 可冒泡参数:canBubbleArg, 可取消参数:cancelableArg, 视图参数:viewArg, 窗口_:Window, 细节参数:detailArg, 屏幕X参数:screenXArg, 屏幕Y参数:screenYArg, 客户X参数:clientXArg, 客户Y参数:clientYArg, 按钮参数:buttonArg, 相关目标参数:relatedTargetArg, 事件目标_:EventTarget, 修饰符列表参数:modifiersListArg, 增量X参数:deltaXArg, 增量Y参数:deltaYArg, 增量Z参数:deltaZArg, 增量单位:deltaMode }
    初始化轮事件(类型参数: 文字, 可冒泡参数: 真假, 可取消参数: 真假, 视图参数: 窗口_, 细节参数: 数字, 屏幕X参数: 数字, 屏幕Y参数: 数字, 客户X参数: 数字, 客户Y参数: 数字, 按钮参数: 数字, 相关目标参数: 事件目标_, 修饰符列表参数: 文字, 增量X参数: 数字, 增量Y参数: 数字, 增量Z参数: 数字, 增量单位: 数字): 无值;

    //@@{ __文档_增量_行__:DOM_DELTA_LINE }
    只读 __文档_增量_行__: 数字;

    //@@{ __文档_增量_页面__:DOM_DELTA_PAGE }
    只读 __文档_增量_页面__: 数字;

    //@@{ __文档_增量_像素__:DOM_DELTA_PIXEL }
    只读 __文档_增量_像素__: 数字;

}

声明 值量 轮事件_: {

    //@@{ 原型:prototype, 轮事件_:WheelEvent }
    原型: 轮事件_;

    //@@{ 类型参数:typeArg, 事件初始化词典:eventInitDict, 循环事件初始化_:WheelEventInit, 轮事件_:WheelEvent }
    新建(类型参数: 文字, 事件初始化词典?: 循环事件初始化_): 轮事件_;

    //@@{ __文档_增量_行__:DOM_DELTA_LINE }
    只读 __文档_增量_行__: 数字;

    //@@{ __DOM_增量_页面__:DOM_DELTA_PAGE }
    只读 __DOM_增量_页面__: 数字;

    //@@{ __文档_增量_像素__:DOM_DELTA_PIXEL }
    只读 __文档_增量_像素__: 数字;

};

//@@{ 窗口事件映射_:WindowEventMap, 全局事件处理程序事件映射_:GlobalEventHandlersEventMap }
接口 窗口事件映射_ 扩展 全局事件处理程序事件映射_ {

    //@@{ "终止":"abort", UI事件_:UIEvent }
    "终止": UI事件_;

    //@@{ "在打印":"afterprint", 事件_:Event }
    "在打印": 事件_;

    //@@{ "将打印":"beforeprint", 事件_:Event }
    "将打印": 事件_;

    //@@{ "将卸载":"beforeunload", 将卸载事件_:BeforeUnloadEvent }
    "将卸载": 将卸载事件_;

    //@@{ "失去焦点":"blur", 焦点事件_:FocusEvent }
    "失去焦点": 焦点事件_;

    //@@{ "准备播放":"canplay", 事件_:Event }
    "准备播放": 事件_;

    //@@{ "正常通过":"canplaythrough", 事件_:Event }
    "正常通过": 事件_;

    //@@{ "改变":"change", 事件_:Event }
    "改变": 事件_;

    //@@{ "点击":"click", 鼠标事件_:MouseEvent }
    "点击": 鼠标事件_;

    //@@{ "校准罗盘":"compassneedscalibration", 事件_:Event }
    "校准罗盘": 事件_;

    //@@{ "快捷菜单":"contextmenu", 指针事件_:PointerEvent }
    "快捷菜单": 指针事件_;

    //@@{ "双击":"dblclick", 鼠标事件_:MouseEvent }
    "双击": 鼠标事件_;

    //@@{ "设备灯":"devicelight", 设备环境光事件_:DeviceLightEvent }
    "设备灯": 设备环境光事件_;

    //@@{ "设备运动":"devicemotion", 设备运动事件_:DeviceMotionEvent }
    "设备运动": 设备运动事件_;

    //@@{ "设备朝向":"deviceorientation", 设备定位事件_:DeviceOrientationEvent }
    "设备朝向": 设备定位事件_;

    //@@{ "拖拽":"drag", 拖拽事件_:DragEvent }
    "拖拽": 拖拽事件_;

    //@@{ "拖拽结束":"dragend", 拖拽事件_:DragEvent }
    "拖拽结束": 拖拽事件_;

    //@@{ "拖拽进入":"dragenter", 拖拽事件_:DragEvent }
    "拖拽进入": 拖拽事件_;

    //@@{ "拖拽离开":"dragleave", 拖拽事件_:DragEvent }
    "拖拽离开": 拖拽事件_;

    //@@{ "拖拽悬停":"dragover", 拖拽事件_:DragEvent }
    "拖拽悬停": 拖拽事件_;

    //@@{ "拖拽开始":"dragstart", 拖拽事件_:DragEvent }
    "拖拽开始": 拖拽事件_;

    //@@{ "拖放":"drop", 拖拽事件_:DragEvent }
    "拖放": 拖拽事件_;

    //@@{ "时长改变":"durationchange", 事件_:Event }
    "时长改变": 事件_;

    //@@{ "清空":"emptied", 事件_:Event }
    "清空": 事件_;

    //@@{ "结束了":"ended", 媒体流错误事件_:MediaStreamErrorEvent }
    "结束了": 媒体流错误事件_;

    //@@{ "错误":"error", 错误事件_:ErrorEvent }
    "错误": 错误事件_;

    //@@{ "焦点":"focus", 焦点事件_:FocusEvent }
    "焦点": 焦点事件_;

    //@@{ "哈希改变":"hashchange", 哈希改变事件_:HashChangeEvent }
    "哈希改变": 哈希改变事件_;

    //@@{ "输入":"input", 事件_:Event }
    "输入": 事件_;

    //@@{ "无效的":"invalid", 事件_:Event }
    "无效的": 事件_;

    //@@{ "键按下":"keydown", 键盘事件_:KeyboardEvent }
    "键按下": 键盘事件_;

    //@@{ "键入":"keypress", 键盘事件_:KeyboardEvent }
    "键入": 键盘事件_;

    //@@{ "键松开":"keyup", 键盘事件_:KeyboardEvent }
    "键松开": 键盘事件_;

    //@@{ "加载":"load", 事件_:Event }
    "加载": 事件_;

    //@@{ "加载数据":"loadeddata", 事件_:Event }
    "加载数据": 事件_;

    //@@{ "加载元数据":"loadedmetadata", 事件_:Event }
    "加载元数据": 事件_;

    //@@{ "加载开始":"loadstart", 事件_:Event }
    "加载开始": 事件_;

    //@@{ "消息":"message", 消息事件_:MessageEvent }
    "消息": 消息事件_;

    //@@{ "鼠标按下":"mousedown", 鼠标事件_:MouseEvent }
    "鼠标按下": 鼠标事件_;

    //@@{ "鼠标进入":"mouseenter", 鼠标事件_:MouseEvent }
    "鼠标进入": 鼠标事件_;

    //@@{ "鼠标离开":"mouseleave", 鼠标事件_:MouseEvent }
    "鼠标离开": 鼠标事件_;

    //@@{ "鼠标移动":"mousemove", 鼠标事件_:MouseEvent }
    "鼠标移动": 鼠标事件_;

    //@@{ "鼠标移开":"mouseout", 鼠标事件_:MouseEvent }
    "鼠标移开": 鼠标事件_;

    //@@{ "鼠标悬停":"mouseover", 鼠标事件_:MouseEvent }
    "鼠标悬停": 鼠标事件_;

    //@@{ "鼠标松开":"mouseup", 鼠标事件_:MouseEvent }
    "鼠标松开": 鼠标事件_;

    //@@{ "鼠标滚轮":"mousewheel", 轮事件_:WheelEvent }
    "鼠标滚轮": 轮事件_;

    //@@{ "MS手势改变":"MSGestureChange", MS手势事件_:MSGestureEvent }
    "MS手势改变": MS手势事件_;

    //@@{ "MS手势双击":"MSGestureDoubleTap", MS手势事件_:MSGestureEvent }
    "MS手势双击": MS手势事件_;

    //@@{ "MS手势结束":"MSGestureEnd", MS手势事件_:MSGestureEvent }
    "MS手势结束": MS手势事件_;

    //@@{ "MS手势保持":"MSGestureHold", MS手势事件_:MSGestureEvent }
    "MS手势保持": MS手势事件_;

    //@@{ "MS手势开始":"MSGestureStart", MS手势事件_:MSGestureEvent }
    "MS手势开始": MS手势事件_;

    //@@{ "MS手势点击":"MSGestureTap", MS手势事件_:MSGestureEvent }
    "MS手势点击": MS手势事件_;

    //@@{ "MS惯性启动":"MSInertiaStart", MS手势事件_:MSGestureEvent }
    "MS惯性启动": MS手势事件_;

    //@@{ "MS指针取消":"MSPointerCancel", MS指针事件_:MSPointerEvent }
    "MS指针取消": MS指针事件_;

    //@@{ "MS指针按下":"MSPointerDown", MS指针事件_:MSPointerEvent }
    "MS指针按下": MS指针事件_;

    //@@{ "MS指针进入":"MSPointerEnter", MS指针事件_:MSPointerEvent }
    "MS指针进入": MS指针事件_;

    //@@{ "MS指针离开":"MSPointerLeave", MS指针事件_:MSPointerEvent }
    "MS指针离开": MS指针事件_;

    //@@{ "MS指针移动":"MSPointerMove", MS指针事件_:MSPointerEvent }
    "MS指针移动": MS指针事件_;

    //@@{ "MS指针移出":"MSPointerOut", MS指针事件_:MSPointerEvent }
    "MS指针移出": MS指针事件_;

    //@@{ "MS指针悬停":"MSPointerOver", MS指针事件_:MSPointerEvent }
    "MS指针悬停": MS指针事件_;

    //@@{ "MS指针松开":"MSPointerUp", MS指针事件_:MSPointerEvent }
    "MS指针松开": MS指针事件_;

    //@@{ "离线":"offline", 事件_:Event }
    "离线": 事件_;

    //@@{ "在线":"online", 事件_:Event }
    "在线": 事件_;

    //@@{ "方向改变":"orientationchange", 事件_:Event }
    "方向改变": 事件_;

    //@@{ "页面隐藏":"pagehide", 页面过渡事件_:PageTransitionEvent }
    "页面隐藏": 页面过渡事件_;

    //@@{ "页面显示":"pageshow", 页面过渡事件_:PageTransitionEvent }
    "页面显示": 页面过渡事件_;

    //@@{ "暂停":"pause", 事件_:Event }
    "暂停": 事件_;

    //@@{ "播放":"play", 事件_:Event }
    "播放": 事件_;

    //@@{ "播放时":"playing", 事件_:Event }
    "播放时": 事件_;

    //@@{ "退回":"popstate", 回退状态事件:PopStateEvent }
    "退回": 回退状态事件;

    //@@{ "进度":"progress", 进度事件_:ProgressEvent }
    "进度": 进度事件_;

    //@@{ "播放速度改变":"ratechange", 事件_:Event }
    "播放速度改变": 事件_;

    //@@{ "就绪状态改变":"readystatechange", 进度事件_:ProgressEvent }
    "就绪状态改变": 进度事件_;

    //@@{ "重置":"reset", 事件_:Event }
    "重置": 事件_;

    //@@{ "调整":"resize", UI事件_:UIEvent }
    "调整": UI事件_;

    //@@{ "滚动":"scroll", UI事件_:UIEvent }
    "滚动": UI事件_;

    //@@{ "提示":"seeked", 事件_:Event }
    "提示": 事件_;

    //@@{ "提示时":"seeking", 事件_:Event }
    "提示时": 事件_;

    //@@{ "选择":"select", UI事件_:UIEvent }
    "选择": UI事件_;

    //@@{ "停滞":"stalled", 事件_:Event }
    "停滞": 事件_;

    //@@{ "存储":"storage", 存储事件_:StorageEvent }
    "存储": 存储事件_;

    //@@{ "提交":"submit", 事件_:Event }
    "提交": 事件_;

    //@@{ "阻止":"suspend", 事件_:Event }
    "阻止": 事件_;

    //@@{ "更新时间":"timeupdate", 事件_:Event }
    "更新时间": 事件_;

    //@@{ "触摸取消":"touchcancel", 触摸事件_:TouchEvent }
    "触摸取消": 触摸事件_;

    //@@{ "触摸结束":"touchend", 触摸事件_:TouchEvent }
    "触摸结束": 触摸事件_;

    //@@{ "触摸移动":"touchmove", 触摸事件_:TouchEvent }
    "触摸移动": 触摸事件_;

    //@@{ "触摸开始":"touchstart", 触摸事件_:TouchEvent }
    "触摸开始": 触摸事件_;

    //@@{ "卸载":"unload", 事件_:Event }
    "卸载": 事件_;

    //@@{ "音量变化":"volumechange", 事件_:Event }
    "音量变化": 事件_;

    //@@{ "等待":"waiting", 事件_:Event }
    "等待": 事件_;

}

//@@{ 窗口_:Window, 事件目标_:EventTarget, 窗口计时器_:WindowTimers, 窗口会话存储_:WindowSessionStorage, 窗口本地存储_:WindowLocalStorage, 窗口控制台_:WindowConsole, 全局事件处理程序_:GlobalEventHandlers, IDB环境_:IDBEnvironment, 窗口基64_:WindowBase64, 全局获取_:GlobalFetch }
接口 窗口_ 扩展 事件目标_, 窗口计时器_, 窗口会话存储_, 窗口本地存储_, 窗口控制台_, 全局事件处理程序_, IDB环境_, 窗口基64_, 全局获取_ {

    //@@{ 应用程序缓存:applicationCache, 应用程序缓存_:ApplicationCache }
    只读 应用程序缓存: 应用程序缓存_;

    //@@{ 缓存:caches, 缓存存储_:CacheStorage }
    只读 缓存: 缓存存储_;

    //@@{ 客户信息:clientInformation, 导航器_:Navigator }
    只读 客户信息: 导航器_;

    //@@{ 关闭的:closed }
    只读 关闭的: 真假;

    //@@{ 加密:crypto, 加密_:Crypto }
    只读 加密: 加密_;

    //@@{ 默认状态:defaultStatus }
    默认状态: 文字;

    //@@{ 设备像素比例:devicePixelRatio }
    只读 设备像素比例: 数字;

    //@@{ 文档:document, 文档_:Document }
    只读 文档: 文档_;

    //@@{ 无轨道:doNotTrack }
    只读 无轨道: 文字;

    //@@{ 事件:event, 事件_:Event }
    事件: 事件_ | 未定;

    //@@{ 外部:external, 外部_:External }
    只读 外部: 外部_;

    //@@{ 框架元素:frameElement, 元素_:Element }
    只读 框架元素: 元素_;

    //@@{ 帧组:frames, 窗口_:Window }
    只读 帧组: 窗口_;

    //@@{ 历史:history, 历史_:History }
    只读 历史: 历史_;

    //@@{ 内部高度:innerHeight }
    只读 内部高度: 数字;

    //@@{ 内部宽度:innerWidth }
    只读 内部宽度: 数字;

    //@@{ 是安全上下文:isSecureContext }
    只读 是安全上下文: 真假;

    //@@{ 长度:length }
    只读 长度: 数字;

    //@@{ 位置:location, 位置_:Location }
    只读 位置: 位置_;

    //@@{ 地址栏:locationbar }
    只读 地址栏: BarProp;

    //@@{ 菜单条:menubar }
    只读 菜单条: BarProp;

    //@@{ ms内容脚本:msContentScript, 扩展脚本API组_:ExtensionScriptApis }
    只读 ms内容脚本: 扩展脚本API组_;

    //@@{ ms凭证:msCredentials, MS凭证_:MSCredentials }
    只读 ms凭证: MS凭证_;

    //@@{ 名字:name }
    名字: 文字;

    //@@{ 导航器:navigator, 导航器_:Navigator }
    只读 导航器: 导航器_;

    //@@{ 画面以外的缓冲:offscreenBuffering }
    画面以外的缓冲: 文字 | 真假;

    //@@{ 正在终止:onabort, 窗口_:Window, UI事件_:UIEvent }
    正在终止: (本体: 窗口_, ev: UI事件_) => 任意;

    //@@{ 正在在打印:onafterprint, 窗口_:Window, 事件_:Event }
    正在在打印: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在将打印:onbeforeprint, 窗口_:Window, 事件_:Event }
    正在将打印: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在将卸载:onbeforeunload, 窗口_:Window, 将卸载事件_:BeforeUnloadEvent }
    正在将卸载: (本体: 窗口_, ev: 将卸载事件_) => 任意;

    //@@{ 正在失去焦点:onblur, 窗口_:Window, 焦点事件_:FocusEvent }
    正在失去焦点: (本体: 窗口_, ev: 焦点事件_) => 任意;

    //@@{ 正在准备播放:oncanplay, 窗口_:Window, 事件_:Event }
    正在准备播放: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在正常播放:oncanplaythrough, 窗口_:Window, 事件_:Event }
    正在正常播放: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在改变:onchange, 窗口_:Window, 事件_:Event }
    正在改变: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在点击:onclick, 窗口_:Window, 鼠标事件_:MouseEvent }
    正在点击: (本体: 窗口_, ev: 鼠标事件_) => 任意;

    //@@{ 正在校准罗盘:oncompassneedscalibration, 窗口_:Window, 事件_:Event }
    正在校准罗盘: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在快捷菜单:oncontextmenu, 窗口_:Window, 指针事件_:PointerEvent }
    正在快捷菜单: (本体: 窗口_, ev: 指针事件_) => 任意;

    //@@{ 正在双击:ondblclick, 窗口_:Window, 鼠标事件_:MouseEvent }
    正在双击: (本体: 窗口_, ev: 鼠标事件_) => 任意;

    //@@{ 正在设备灯:ondevicelight, 窗口_:Window, 设备环境光事件_:DeviceLightEvent }
    正在设备灯: (本体: 窗口_, ev: 设备环境光事件_) => 任意;

    //@@{ 正在设备运动:ondevicemotion, 窗口_:Window, 设备运动事件_:DeviceMotionEvent }
    正在设备运动: (本体: 窗口_, ev: 设备运动事件_) => 任意;

    //@@{ 正在设备朝向:ondeviceorientation, 窗口_:Window, 设备定位事件_:DeviceOrientationEvent }
    正在设备朝向: (本体: 窗口_, ev: 设备定位事件_) => 任意;

    //@@{ 正在拖拽:ondrag, 窗口_:Window, 拖拽事件_:DragEvent }
    正在拖拽: (本体: 窗口_, ev: 拖拽事件_) => 任意;

    //@@{ 正在拖拽结束:ondragend, 窗口_:Window, 拖拽事件_:DragEvent }
    正在拖拽结束: (本体: 窗口_, ev: 拖拽事件_) => 任意;

    //@@{ 正在拖拽进入:ondragenter, 窗口_:Window, 拖拽事件_:DragEvent }
    正在拖拽进入: (本体: 窗口_, ev: 拖拽事件_) => 任意;

    //@@{ 正在拖拽离开:ondragleave, 窗口_:Window, 拖拽事件_:DragEvent }
    正在拖拽离开: (本体: 窗口_, ev: 拖拽事件_) => 任意;

    //@@{ 正在拖拽悬停:ondragover, 窗口_:Window, 拖拽事件_:DragEvent }
    正在拖拽悬停: (本体: 窗口_, ev: 拖拽事件_) => 任意;

    //@@{ 正在拖拽开始:ondragstart, 窗口_:Window, 拖拽事件_:DragEvent }
    正在拖拽开始: (本体: 窗口_, ev: 拖拽事件_) => 任意;

    //@@{ 正在拖放:ondrop, 窗口_:Window, 拖拽事件_:DragEvent }
    正在拖放: (本体: 窗口_, ev: 拖拽事件_) => 任意;

    //@@{ 正在时长改变:ondurationchange, 窗口_:Window, 事件_:Event }
    正在时长改变: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在清空:onemptied, 窗口_:Window, 事件_:Event }
    正在清空: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在结束了:onended, 窗口_:Window, 媒体流错误事件_:MediaStreamErrorEvent }
    正在结束了: (本体: 窗口_, ev: 媒体流错误事件_) => 任意;

    //@@{ 正在错误:onerror, 错误事件处理程序_:ErrorEventHandler }
    正在错误: 错误事件处理程序_;

    //@@{ 正在焦点:onfocus, 窗口_:Window, 焦点事件_:FocusEvent }
    正在焦点: (本体: 窗口_, ev: 焦点事件_) => 任意;

    //@@{ 正在哈希改变:onhashchange, 窗口_:Window, 哈希改变事件_:HashChangeEvent }
    正在哈希改变: (本体: 窗口_, ev: 哈希改变事件_) => 任意;

    //@@{ 正在输入:oninput, 窗口_:Window, 事件_:Event }
    正在输入: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在无效的:oninvalid, 窗口_:Window, 事件_:Event }
    正在无效的: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在键按下:onkeydown, 窗口_:Window, 键盘事件_:KeyboardEvent }
    正在键按下: (本体: 窗口_, ev: 键盘事件_) => 任意;

    //@@{ 正在键入:onkeypress, 窗口_:Window, 键盘事件_:KeyboardEvent }
    正在键入: (本体: 窗口_, ev: 键盘事件_) => 任意;

    //@@{ 正在键松开:onkeyup, 窗口_:Window, 键盘事件_:KeyboardEvent }
    正在键松开: (本体: 窗口_, ev: 键盘事件_) => 任意;

    //@@{ 正在加载:onload, 窗口_:Window, 事件_:Event }
    正在加载: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在加载数据:onloadeddata, 窗口_:Window, 事件_:Event }
    正在加载数据: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在加载元数据:onloadedmetadata, 窗口_:Window, 事件_:Event }
    正在加载元数据: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在加载开始:onloadstart, 窗口_:Window, 事件_:Event }
    正在加载开始: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在消息:onmessage, 窗口_:Window, 消息事件_:MessageEvent }
    正在消息: (本体: 窗口_, ev: 消息事件_) => 任意;

    //@@{ 正在鼠标按下:onmousedown, 窗口_:Window, 鼠标事件_:MouseEvent }
    正在鼠标按下: (本体: 窗口_, ev: 鼠标事件_) => 任意;

    //@@{ 正在鼠标进入:onmouseenter, 窗口_:Window, 鼠标事件_:MouseEvent }
    正在鼠标进入: (本体: 窗口_, ev: 鼠标事件_) => 任意;

    //@@{ 正在鼠标离开:onmouseleave, 窗口_:Window, 鼠标事件_:MouseEvent }
    正在鼠标离开: (本体: 窗口_, ev: 鼠标事件_) => 任意;

    //@@{ 正在鼠标移动:onmousemove, 窗口_:Window, 鼠标事件_:MouseEvent }
    正在鼠标移动: (本体: 窗口_, ev: 鼠标事件_) => 任意;

    //@@{ 正在鼠标移开:onmouseout, 窗口_:Window, 鼠标事件_:MouseEvent }
    正在鼠标移开: (本体: 窗口_, ev: 鼠标事件_) => 任意;

    //@@{ 正在鼠标悬停:onmouseover, 窗口_:Window, 鼠标事件_:MouseEvent }
    正在鼠标悬停: (本体: 窗口_, ev: 鼠标事件_) => 任意;

    //@@{ 正在鼠标松开:onmouseup, 窗口_:Window, 鼠标事件_:MouseEvent }
    正在鼠标松开: (本体: 窗口_, ev: 鼠标事件_) => 任意;

    //@@{ 正在鼠标滚轮:onmousewheel, 窗口_:Window, 轮事件_:WheelEvent }
    正在鼠标滚轮: (本体: 窗口_, ev: 轮事件_) => 任意;

    //@@{ 正在MS手势改变:onmsgesturechange, 窗口_:Window, MS手势事件_:MSGestureEvent }
    正在MS手势改变: (本体: 窗口_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS手势双击:onmsgesturedoubletap, 窗口_:Window, MS手势事件_:MSGestureEvent }
    正在MS手势双击: (本体: 窗口_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS手势结束:onmsgestureend, 窗口_:Window, MS手势事件_:MSGestureEvent }
    正在MS手势结束: (本体: 窗口_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS手势保持:onmsgesturehold, 窗口_:Window, MS手势事件_:MSGestureEvent }
    正在MS手势保持: (本体: 窗口_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS手势开始:onmsgesturestart, 窗口_:Window, MS手势事件_:MSGestureEvent }
    正在MS手势开始: (本体: 窗口_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS手势点击:onmsgesturetap, 窗口_:Window, MS手势事件_:MSGestureEvent }
    正在MS手势点击: (本体: 窗口_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS惯性启动:onmsinertiastart, 窗口_:Window, MS手势事件_:MSGestureEvent }
    正在MS惯性启动: (本体: 窗口_, ev: MS手势事件_) => 任意;

    //@@{ 正在MS指针取消:onmspointercancel, 窗口_:Window, MS指针事件_:MSPointerEvent }
    正在MS指针取消: (本体: 窗口_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针按下:onmspointerdown, 窗口_:Window, MS指针事件_:MSPointerEvent }
    正在MS指针按下: (本体: 窗口_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针进入:onmspointerenter, 窗口_:Window, MS指针事件_:MSPointerEvent }
    正在MS指针进入: (本体: 窗口_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针离开:onmspointerleave, 窗口_:Window, MS指针事件_:MSPointerEvent }
    正在MS指针离开: (本体: 窗口_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针移动:onmspointermove, 窗口_:Window, MS指针事件_:MSPointerEvent }
    正在MS指针移动: (本体: 窗口_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针移出:onmspointerout, 窗口_:Window, MS指针事件_:MSPointerEvent }
    正在MS指针移出: (本体: 窗口_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针悬停:onmspointerover, 窗口_:Window, MS指针事件_:MSPointerEvent }
    正在MS指针悬停: (本体: 窗口_, ev: MS指针事件_) => 任意;

    //@@{ 正在MS指针松开:onmspointerup, 窗口_:Window, MS指针事件_:MSPointerEvent }
    正在MS指针松开: (本体: 窗口_, ev: MS指针事件_) => 任意;

    //@@{ 正在离线:onoffline, 窗口_:Window, 事件_:Event }
    正在离线: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在在线:ononline, 窗口_:Window, 事件_:Event }
    正在在线: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在方向改变:onorientationchange, 窗口_:Window, 事件_:Event }
    正在方向改变: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在页面隐藏:onpagehide, 窗口_:Window, 页面过渡事件_:PageTransitionEvent }
    正在页面隐藏: (本体: 窗口_, ev: 页面过渡事件_) => 任意;

    //@@{ 正在页面显示:onpageshow, 窗口_:Window, 页面过渡事件_:PageTransitionEvent }
    正在页面显示: (本体: 窗口_, ev: 页面过渡事件_) => 任意;

    //@@{ 正在暂停:onpause, 窗口_:Window, 事件_:Event }
    正在暂停: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在播放:onplay, 窗口_:Window, 事件_:Event }
    正在播放: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在播放中:onplaying, 窗口_:Window, 事件_:Event }
    正在播放中: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在退回:onpopstate, 窗口_:Window, 回退状态事件:PopStateEvent }
    正在退回: (本体: 窗口_, ev: 回退状态事件) => 任意;

    //@@{ 正在进度:onprogress, 窗口_:Window, 进度事件_:ProgressEvent }
    正在进度: (本体: 窗口_, ev: 进度事件_) => 任意;

    //@@{ 正在播放速度改变:onratechange, 窗口_:Window, 事件_:Event }
    正在播放速度改变: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在就绪状态改变:onreadystatechange, 窗口_:Window, 进度事件_:ProgressEvent }
    正在就绪状态改变: (本体: 窗口_, ev: 进度事件_) => 任意;

    //@@{ 正在重置:onreset, 窗口_:Window, 事件_:Event }
    正在重置: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在调整:onresize, 窗口_:Window, UI事件_:UIEvent }
    正在调整: (本体: 窗口_, ev: UI事件_) => 任意;

    //@@{ 正在滚动:onscroll, 窗口_:Window, UI事件_:UIEvent }
    正在滚动: (本体: 窗口_, ev: UI事件_) => 任意;

    //@@{ 正在提示:onseeked, 窗口_:Window, 事件_:Event }
    正在提示: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在重新定位:onseeking, 窗口_:Window, 事件_:Event }
    正在重新定位: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在选择:onselect, 窗口_:Window, UI事件_:UIEvent }
    正在选择: (本体: 窗口_, ev: UI事件_) => 任意;

    //@@{ 正在停滞:onstalled, 窗口_:Window, 事件_:Event }
    正在停滞: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在储存:onstorage, 窗口_:Window, 存储事件_:StorageEvent }
    正在储存: (本体: 窗口_, ev: 存储事件_) => 任意;

    //@@{ 正在提交:onsubmit, 窗口_:Window, 事件_:Event }
    正在提交: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在阻止:onsuspend, 窗口_:Window, 事件_:Event }
    正在阻止: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在更新时间:ontimeupdate, 窗口_:Window, 事件_:Event }
    正在更新时间: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在触摸取消:ontouchcancel, 触摸事件_:TouchEvent }
    正在触摸取消: (ev: 触摸事件_) => 任意;

    //@@{ 正在触摸结束:ontouchend, 触摸事件_:TouchEvent }
    正在触摸结束: (ev: 触摸事件_) => 任意;

    //@@{ 正在触摸移动:ontouchmove, 触摸事件_:TouchEvent }
    正在触摸移动: (ev: 触摸事件_) => 任意;

    //@@{ 正在触摸开始:ontouchstart, 触摸事件_:TouchEvent }
    正在触摸开始: (ev: 触摸事件_) => 任意;

    //@@{ 正在卸载:onunload, 窗口_:Window, 事件_:Event }
    正在卸载: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在音量改变:onvolumechange, 窗口_:Window, 事件_:Event }
    正在音量改变: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 正在等待:onwaiting, 窗口_:Window, 事件_:Event }
    正在等待: (本体: 窗口_, ev: 事件_) => 任意;

    //@@{ 开启者:opener }
    开启者: 任意;

    //@@{ 取向:orientation }
    取向: 文字 | 数字;

    //@@{ 外高:outerHeight }
    只读 外高: 数字;

    //@@{ 外宽:outerWidth }
    只读 外宽: 数字;

    //@@{ 页X偏移:pageXOffset }
    只读 页X偏移: 数字;

    //@@{ 页Y偏移:pageYOffset }
    只读 页Y偏移: 数字;

    //@@{ 父:parent, 窗口_:Window }
    只读 父: 窗口_;

    //@@{ 性能:performance, 性能_:Performance }
    只读 性能: 性能_;

    //@@{ 私人栏:personalbar }
    只读 私人栏: BarProp;

    //@@{ 屏幕:screen, 屏幕_:Screen }
    只读 屏幕: 屏幕_;

    //@@{ 屏幕左边:screenLeft }
    只读 屏幕左边: 数字;

    //@@{ 屏幕顶部:screenTop }
    只读 屏幕顶部: 数字;

    //@@{ 屏幕X:screenX }
    只读 屏幕X: 数字;

    //@@{ 屏幕Y:screenY }
    只读 屏幕Y: 数字;

    //@@{ 滚动条:scrollbars }
    只读 滚动条: BarProp;

    //@@{ 滚动X:scrollX }
    只读 滚动X: 数字;

    //@@{ 滚动Y:scrollY }
    只读 滚动Y: 数字;

    //@@{ 自我:self, 窗口_:Window }
    只读 自我: 窗口_;

    //@@{ 语音合成:speechSynthesis, 语音合成_:SpeechSynthesis }
    只读 语音合成: 语音合成_;

    //@@{ 状态:status }
    状态: 文字;

    //@@{ 状态栏:statusbar }
    只读 状态栏: BarProp;

    //@@{ 样式媒体:styleMedia, 样式媒体_:StyleMedia }
    只读 样式媒体: 样式媒体_;

    //@@{ 工具栏:toolbar }
    只读 工具栏: BarProp;

    //@@{ 顶:top, 窗口_:Window }
    只读 顶: 窗口_;

    //@@{ 窗口:window, 窗口_:Window }
    只读 窗口: 窗口_;

    URL: 类为 URL;

    //@@{ URL搜索参数:URLSearchParams, URL搜索参数_:URLSearchParams }
    URL搜索参数: 类为 URL搜索参数_;

    //@@{ 二进制对象_:Blob }
    二进制对象_: 类为 二进制对象_;

    //@@{ 自定义元素:customElements, 自定义元素注册表_:CustomElementRegistry }
    自定义元素: 自定义元素注册表_;

    //@@{ 警报:alert, 消息:message }
    警报(消息?: 任意): 无值;

    //@@{ 失去焦点:blur }
    失去焦点(): 无值;

    //@@{ 取消动画帧:cancelAnimationFrame, 处理:handle }
    取消动画帧(处理: 数字): 无值;

    //@@{ 捕获事件:captureEvents }
    捕获事件(): 无值;

    //@@{ 关闭:close }
    关闭(): 无值;

    //@@{ 确认:confirm, 消息:message }
    确认(消息?: 文字): 真假;

    //@@{ 离开焦点:departFocus, 导航原因:navigationReason, 导航原因_:NavigationReason, 起点:origin, 焦点导航起源_:FocusNavigationOrigin }
    离开焦点(导航原因: 导航原因_, 起点: 焦点导航起源_): 无值;

    //@@{ 焦点:focus }
    焦点(): 无值;

    //@@{ 取计算风格:getComputedStyle, 元素:elt, 元素_:Element, 伪元素:pseudoElt, CSS样式声明_:CSSStyleDeclaration }
    取计算风格(元素: 元素_, 伪元素?: 文字): CSS样式声明_;

    //@@{ 取匹配CSS规则:getMatchedCSSRules, 元素:elt, 元素_:Element, 伪元素:pseudoElt, CSS规则列表_:CSSRuleList }
    取匹配CSS规则(元素: 元素_, 伪元素?: 文字): CSS规则列表_;

    //@@{ 取选择:getSelection, 选择的_:Selection }
    取选择(): 选择的_;

    //@@{ 匹配媒体:matchMedia, 媒体查询:mediaQuery, 媒体查询列表_:MediaQueryList }
    匹配媒体(媒体查询: 文字): 媒体查询列表_;

    //@@{ 移动从:moveBy }
    移动从(x?: 数字, y?: 数字): 无值;

    //@@{ 移动到:moveTo }
    移动到(x?: 数字, y?: 数字): 无值;

    //@@{ ms写分析器标记:msWriteProfilerMark, 分析器标记名字:profilerMarkName }
    ms写分析器标记(分析器标记名字: 文字): 无值;

    //@@{ 打开:open, 目标:target, 特性:features, 替换:replace, 窗口_:Window }
    打开(url?: 文字, 目标?: 文字, 特性?: 文字, 替换?: 真假): 窗口_ | 空值;

    //@@{ 发布消息:postMessage, 消息:message, 目标起点:targetOrigin, 转移:transfer }
    发布消息(消息: 任意, 目标起点: 文字, 转移?: 任意[]): 无值;

    //@@{ 打印:print }
    打印(): 无值;

    //@@{ 提示:prompt, 消息:message, _默认:_default }
    提示(消息?: 文字, _默认?: 文字): 文字 | 空值;

    //@@{ 释放事件:releaseEvents }
    释放事件(): 无值;

    //@@{ 请求帧动画:requestAnimationFrame, 回调:callback, 帧请求回调_:FrameRequestCallback }
    请求帧动画(回调: 帧请求回调_): 数字;

    //@@{ 调整从:resizeBy }
    调整从(x?: 数字, y?: 数字): 无值;

    //@@{ 调整到:resizeTo }
    调整到(x?: 数字, y?: 数字): 无值;

    //@@{ 滚动:scroll }
    滚动(x?: 数字, y?: 数字): 无值;

    //@@{ 滚动从:scrollBy }
    滚动从(x?: 数字, y?: 数字): 无值;

    //@@{ 滚动到:scrollTo }
    滚动到(x?: 数字, y?: 数字): 无值;

    //@@{ 停止:stop }
    停止(): 无值;

    //@@{ webkit取消动画帧:webkitCancelAnimationFrame, 处理:handle }
    webkit取消动画帧(处理: 数字): 无值;

    //@@{ webkit转换点从节点到页面:webkitConvertPointFromNodeToPage, 节点:node, 节点_:Node, 点:pt, WebKit点_:WebKitPoint }
    webkit转换点从节点到页面(节点: 节点_, 点: WebKit点_): WebKit点_;

    //@@{ webkit转换点从页面到节点:webkitConvertPointFromPageToNode, 节点:node, 节点_:Node, 点:pt, WebKit点_:WebKitPoint }
    webkit转换点从页面到节点(节点: 节点_, 点: WebKit点_): WebKit点_;

    //@@{ webkit请求帧动画:webkitRequestAnimationFrame, 回调:callback, 帧请求回调_:FrameRequestCallback }
    webkit请求帧动画(回调: 帧请求回调_): 数字;

    //@@{ 创建位图图像:createImageBitmap, 图像:image, HTML图像元素_:HTMLImageElement, SVG图像元素_:SVGImageElement, HTML视频元素_:HTMLVideoElement, HTML画板元素_:HTMLCanvasElement, 位图图像_:ImageBitmap, 图像数据_:ImageData, 二进制对象_:Blob, 选项:options, 位图图像选项_:ImageBitmapOptions, 预设_:Promise }
    创建位图图像(图像: HTML图像元素_ | SVG图像元素_ | HTML视频元素_ | HTML画板元素_ | 位图图像_ | 图像数据_ | 二进制对象_, 选项?: 位图图像选项_): 预设_<位图图像_>;

    //@@{ 图像:image, HTML图像元素_:HTMLImageElement, SVG图像元素_:SVGImageElement, HTML视频元素_:HTMLVideoElement, HTML画板元素_:HTMLCanvasElement, 位图图像_:ImageBitmap, 图像数据_:ImageData, 二进制对象_:Blob, 选项:options, 位图图像选项_:ImageBitmapOptions, 预设_:Promise }
    创建位图图像(图像: HTML图像元素_ | SVG图像元素_ | HTML视频元素_ | HTML画板元素_ | 位图图像_ | 图像数据_ | 二进制对象_, sx: 数字, sy: 数字, sw: 数字, sh: 数字, 选项?: 位图图像选项_): 预设_<位图图像_>;

    //@@{ 选项:options, 滚动到选项_:ScrollToOptions }
    滚动(选项?: 滚动到选项_): 无值;

    //@@{ 选项:options, 滚动到选项_:ScrollToOptions }
    滚动到(选项?: 滚动到选项_): 无值;

    //@@{ 选项:options, 滚动到选项_:ScrollToOptions }
    滚动从(选项?: 滚动到选项_): 无值;

    //@@{ 添加事件监听器:addEventListener, 窗口事件映射_:WindowEventMap, 类型:type, 侦听器:listener, 窗口_:Window, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 窗口事件映射_>(类型: K, 侦听器: (本体: 窗口_, ev: 窗口事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 窗口_: {

    //@@{ 原型:prototype, 窗口_:Window }
    原型: 窗口_;

    //@@{ 窗口_:Window }
    新建(): 窗口_;

};

//@@{ 工人事件映射_:WorkerEventMap, 抽象的工人事件映射_:AbstractWorkerEventMap }
接口 工人事件映射_ 扩展 抽象的工人事件映射_ {

    //@@{ "消息":"message", 消息事件_:MessageEvent }
    "消息": 消息事件_;

}

//@@{ 工人_:Worker, 事件目标_:EventTarget, 抽象的工人_:AbstractWorker }
接口 工人_ 扩展 事件目标_, 抽象的工人_ {

    //@@{ 正在消息:onmessage, 工人_:Worker, 消息事件_:MessageEvent }
    正在消息: (本体: 工人_, ev: 消息事件_) => 任意;

    //@@{ 发布消息:postMessage, 消息:message, 转移:transfer }
    发布消息(消息: 任意, 转移?: 任意[]): 无值;

    //@@{ 终止:terminate }
    终止(): 无值;

    //@@{ 添加事件监听器:addEventListener, 工人事件映射_:WorkerEventMap, 类型:type, 侦听器:listener, 工人_:Worker, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 工人事件映射_>(类型: K, 侦听器: (本体: 工人_, ev: 工人事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 工人_: {

    //@@{ 原型:prototype, 工人_:Worker }
    原型: 工人_;

    //@@{ 文字Url:stringUrl, 工人_:Worker }
    新建(文字Url: 文字): 工人_;

};

//@@{ XML文档_:XMLDocument, 文档_:Document }
接口 XML文档_ 扩展 文档_ {

    //@@{ 添加事件监听器:addEventListener, 文档事件映射_:DocumentEventMap, 类型:type, 侦听器:listener, XML文档_:XMLDocument, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 文档事件映射_>(类型: K, 侦听器: (本体: XML文档_, ev: 文档事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 XML文档_: {

    //@@{ 原型:prototype, XML文档_:XMLDocument }
    原型: XML文档_;

    //@@{ XML文档_:XMLDocument }
    新建(): XML文档_;

};

//@@{ XMLHttp请求事件映射_:XMLHttpRequestEventMap, XMLHttp请求事件目标事件映射_:XMLHttpRequestEventTargetEventMap }
接口 XMLHttp请求事件映射_ 扩展 XMLHttp请求事件目标事件映射_ {

    //@@{ "就绪状态改变":"readystatechange", 事件_:Event }
    "就绪状态改变": 事件_;

}

//@@{ XMLHttp请求_:XMLHttpRequest, 事件目标_:EventTarget, XMLHttp请求事件目标_:XMLHttpRequestEventTarget }
接口 XMLHttp请求_ 扩展 事件目标_, XMLHttp请求事件目标_ {

    //@@{ 正在就绪状态改变:onreadystatechange, XMLHttp请求_:XMLHttpRequest, 事件_:Event }
    正在就绪状态改变: (本体: XMLHttp请求_, ev: 事件_) => 任意;

    //@@{ 就绪状态:readyState }
    只读 就绪状态: 数字;

    //@@{ 响应:response }
    只读 响应: 任意;

    //@@{ 回复文本:responseText }
    只读 回复文本: 文字;

    //@@{ 响应类型:responseType, XMLHttp请求响应类型_:XMLHttpRequestResponseType }
    响应类型: XMLHttp请求响应类型_;

    //@@{ 响应URL:responseURL }
    只读 响应URL: 文字;

    //@@{ 响应XML:responseXML, 文档_:Document }
    只读 响应XML: 文档_ | 空值;

    //@@{ 状态:status }
    只读 状态: 数字;

    //@@{ 状态文本:statusText }
    只读 状态文本: 文字;

    //@@{ 超时:timeout }
    超时: 数字;

    //@@{ 上传:upload, XMLHttp请求上传:XMLHttpRequestUpload }
    只读 上传: XMLHttp请求上传;

    //@@{ 与凭证:withCredentials }
    与凭证: 真假;

    //@@{ ms缓存:msCaching }
    ms缓存?: 文字;

    //@@{ 终止:abort }
    终止(): 无值;

    //@@{ 取所有响应头:getAllResponseHeaders }
    取所有响应头(): 文字;

    //@@{ 取响应头:getResponseHeader, 头:header }
    取响应头(头: 文字): 文字 | 空值;

    //@@{ ms缓存启用:msCachingEnabled }
    ms缓存启用(): 真假;

    //@@{ 打开:open, 方法:method, 异步:async, 用户:user, 密码:password }
    打开(方法: 文字, url: 文字, 异步?: 真假, 用户?: 文字, 密码?: 文字): 无值;

    //@@{ 覆盖Mime类型:overrideMimeType }
    覆盖Mime类型(mime: 文字): 无值;

    //@@{ 发送:send, 数据:data, 文档_:Document }
    发送(数据?: 文档_): 无值;

    //@@{ 数据:data }
    发送(数据?: 文字): 无值;

    //@@{ 数据:data }
    发送(数据?: 任意): 无值;

    //@@{ 设置请求头:setRequestHeader, 头:header, 值:value }
    设置请求头(头: 文字, 值: 文字): 无值;

    //@@{ __完成__:DONE }
    只读 __完成__: 数字;

    //@@{ __头_收到了__:HEADERS_RECEIVED }
    只读 __头_收到了__: 数字;

    //@@{ __加载中__:LOADING }
    只读 __加载中__: 数字;

    //@@{ __打开了__:OPENED }
    只读 __打开了__: 数字;

    //@@{ __未寄出__:UNSENT }
    只读 __未寄出__: 数字;

    //@@{ 添加事件监听器:addEventListener, XMLHttp请求事件映射_:XMLHttpRequestEventMap, 类型:type, 侦听器:listener, XMLHttp请求_:XMLHttpRequest, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 XMLHttp请求事件映射_>(类型: K, 侦听器: (本体: XMLHttp请求_, ev: XMLHttp请求事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 XMLHttp请求_: {

    //@@{ 原型:prototype, XMLHttp请求_:XMLHttpRequest }
    原型: XMLHttp请求_;

    //@@{ XMLHttp请求_:XMLHttpRequest }
    新建(): XMLHttp请求_;

    //@@{ __完成__:DONE }
    只读 __完成__: 数字;

    //@@{ __头_收到了__:HEADERS_RECEIVED }
    只读 __头_收到了__: 数字;

    //@@{ __加载中__:LOADING }
    只读 __加载中__: 数字;

    //@@{ __打开了__:OPENED }
    只读 __打开了__: 数字;

    //@@{ __未寄出__:UNSENT }
    只读 __未寄出__: 数字;

};

//@@{ XMLHttp请求上传:XMLHttpRequestUpload, 事件目标_:EventTarget, XMLHttp请求事件目标_:XMLHttpRequestEventTarget }
接口 XMLHttp请求上传 扩展 事件目标_, XMLHttp请求事件目标_ {

    //@@{ 添加事件监听器:addEventListener, XMLHttp请求事件目标事件映射_:XMLHttpRequestEventTargetEventMap, 类型:type, 侦听器:listener, XMLHttp请求上传:XMLHttpRequestUpload, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 XMLHttp请求事件目标事件映射_>(类型: K, 侦听器: (本体: XMLHttp请求上传, ev: XMLHttp请求事件目标事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

//@@{ XMLHttp请求上传_:XMLHttpRequestUpload }
声明 值量 XMLHttp请求上传_: {

    //@@{ 原型:prototype, XMLHttp请求上传:XMLHttpRequestUpload }
    原型: XMLHttp请求上传;

    //@@{ XMLHttp请求上传:XMLHttpRequestUpload }
    新建(): XMLHttp请求上传;

};

//@@{ XML序列化器_:XMLSerializer }
接口 XML序列化器_ {

    //@@{ 序列化为字符串:serializeToString, 目标:target, 节点_:Node }
    序列化为字符串(目标: 节点_): 文字;

}

声明 值量 XML序列化器_: {

    //@@{ 原型:prototype, XML序列化器_:XMLSerializer }
    原型: XML序列化器_;

    //@@{ XML序列化器_:XMLSerializer }
    新建(): XML序列化器_;

};

//@@{ X路径评估者_:XPathEvaluator }
接口 X路径评估者_ {

    //@@{ 创建表达式:createExpression, 表达式:expression, 解析器:resolver, X路径NS解析器_:XPathNSResolver, X路径表达式_:XPathExpression }
    创建表达式(表达式: 文字, 解析器: X路径NS解析器_): X路径表达式_;

    //@@{ 创建NS解析器:createNSResolver, 节点解析器:nodeResolver, 节点_:Node, X路径NS解析器_:XPathNSResolver }
    创建NS解析器(节点解析器?: 节点_): X路径NS解析器_;

    //@@{ 评估:evaluate, 表达式:expression, 上下文节点:contextNode, 节点_:Node, 解析器:resolver, X路径NS解析器_:XPathNSResolver, 类型:type, 结果:result, X路径结果_:XPathResult }
    评估(表达式: 文字, 上下文节点: 节点_, 解析器: X路径NS解析器_ | 空值, 类型: 数字, 结果: X路径结果_ | 空值): X路径结果_;

}

声明 值量 X路径评估者_: {

    //@@{ 原型:prototype, X路径评估者_:XPathEvaluator }
    原型: X路径评估者_;

    //@@{ X路径评估者_:XPathEvaluator }
    新建(): X路径评估者_;

};

//@@{ X路径表达式_:XPathExpression }
接口 X路径表达式_ {

    //@@{ 评估:evaluate, 上下文节点:contextNode, 节点_:Node, 类型:type, 结果:result, X路径结果_:XPathResult }
    评估(上下文节点: 节点_, 类型: 数字, 结果: X路径结果_ | 空值): X路径结果_;

}

声明 值量 X路径表达式_: {

    //@@{ 原型:prototype, X路径表达式_:XPathExpression }
    原型: X路径表达式_;

    //@@{ X路径表达式_:XPathExpression }
    新建(): X路径表达式_;

};

//@@{ X路径NS解析器_:XPathNSResolver }
接口 X路径NS解析器_ {

    //@@{ 查找名称空间URI:lookupNamespaceURI, 前缀:prefix }
    查找名称空间URI(前缀: 文字): 文字; 

}

声明 值量 X路径NS解析器_: {

    //@@{ 原型:prototype, X路径NS解析器_:XPathNSResolver }
    原型: X路径NS解析器_;

    //@@{ X路径NS解析器_:XPathNSResolver }
    新建(): X路径NS解析器_;

};

//@@{ X路径结果_:XPathResult }
接口 X路径结果_ {

    //@@{ 布尔值:booleanValue }
    只读 布尔值: 真假;

    //@@{ 无效的迭代器状态:invalidIteratorState }
    只读 无效的迭代器状态: 真假;

    //@@{ 数值:numberValue }
    只读 数值: 数字;

    //@@{ 结果类型:resultType }
    只读 结果类型: 数字;

    //@@{ 单节点值:singleNodeValue, 节点_:Node }
    只读 单节点值: 节点_;

    //@@{ 快照长度:snapshotLength }
    只读 快照长度: 数字;

    //@@{ 字符串值:stringValue }
    只读 字符串值: 文字;

    //@@{ 重复下:iterateNext, 节点_:Node }
    重复下(): 节点_;

    //@@{ 项目快照:snapshotItem, 索引:index, 节点_:Node }
    项目快照(索引: 数字): 节点_;

    //@@{ __任何_类型__:ANY_TYPE }
    只读 __任何_类型__: 数字;

    //@@{ __任何_无序_节点_类型__:ANY_UNORDERED_NODE_TYPE }
    只读 __任何_无序_节点_类型__: 数字;

    //@@{ __布尔_类型__:BOOLEAN_TYPE }
    只读 __布尔_类型__: 数字;

    //@@{ __首个_命令_节点_类型__:FIRST_ORDERED_NODE_TYPE }
    只读 __首个_命令_节点_类型__: 数字;

    //@@{ __数字_类型__:NUMBER_TYPE }
    只读 __数字_类型__: 数字;

    //@@{ __命令_节点_迭代器_类型__:ORDERED_NODE_ITERATOR_TYPE }
    只读 __命令_节点_迭代器_类型__: 数字;

    //@@{ __命令_节点_快照_类型__:ORDERED_NODE_SNAPSHOT_TYPE }
    只读 __命令_节点_快照_类型__: 数字;

    //@@{ __文字_类型__:STRING_TYPE }
    只读 __文字_类型__: 数字;

    //@@{ __无序_节点_迭代器_类型__:UNORDERED_NODE_ITERATOR_TYPE }
    只读 __无序_节点_迭代器_类型__: 数字;

    //@@{ __无序_节点_快照_类型__:UNORDERED_NODE_SNAPSHOT_TYPE }
    只读 __无序_节点_快照_类型__: 数字;

}

声明 值量 X路径结果_: {

    //@@{ 原型:prototype, X路径结果_:XPathResult }
    原型: X路径结果_;

    //@@{ X路径结果_:XPathResult }
    新建(): X路径结果_;

    //@@{ __任何_类型__:ANY_TYPE }
    只读 __任何_类型__: 数字;

    //@@{ __任何_无序_节点_类型__:ANY_UNORDERED_NODE_TYPE }
    只读 __任何_无序_节点_类型__: 数字;

    //@@{ __布尔_类型__:BOOLEAN_TYPE }
    只读 __布尔_类型__: 数字;

    //@@{ __首个_命令_节点_类型__:FIRST_ORDERED_NODE_TYPE }
    只读 __首个_命令_节点_类型__: 数字;

    //@@{ __数字_类型__:NUMBER_TYPE }
    只读 __数字_类型__: 数字;

    //@@{ __命令_节点_迭代器_类型__:ORDERED_NODE_ITERATOR_TYPE }
    只读 __命令_节点_迭代器_类型__: 数字;

    //@@{ __命令_节点_快照_类型__:ORDERED_NODE_SNAPSHOT_TYPE }
    只读 __命令_节点_快照_类型__: 数字;

    //@@{ __文字_类型__:STRING_TYPE }
    只读 __文字_类型__: 数字;

    //@@{ __无序_节点_迭代器_类型__:UNORDERED_NODE_ITERATOR_TYPE }
    只读 __无序_节点_迭代器_类型__: 数字;

    //@@{ __无序_节点_快照_类型__:UNORDERED_NODE_SNAPSHOT_TYPE }
    只读 __无序_节点_快照_类型__: 数字;

};

//@@{ XSLT处理器_:XSLTProcessor }
接口 XSLT处理器_ {

    //@@{ 清除参数:clearParameters }
    清除参数(): 无值;

    //@@{ 取参数:getParameter, 名称空间URI:namespaceURI, 本地名称:localName }
    取参数(名称空间URI: 文字, 本地名称: 文字): 任意;

    //@@{ 导入样式表:importStylesheet, 样式:style, 节点_:Node }
    导入样式表(样式: 节点_): 无值;

    //@@{ 删除参数:removeParameter, 名称空间URI:namespaceURI, 本地名称:localName }
    删除参数(名称空间URI: 文字, 本地名称: 文字): 无值;

    //@@{ 重置:reset }
    重置(): 无值;

    //@@{ 设置参数:setParameter, 名称空间URI:namespaceURI, 本地名称:localName, 值:value }
    设置参数(名称空间URI: 文字, 本地名称: 文字, 值: 任意): 无值;

    //@@{ 变换到文档:transformToDocument, 源:source, 节点_:Node, 文档_:Document }
    变换到文档(源: 节点_): 文档_;

    //@@{ 变换到片段:transformToFragment, 源:source, 节点_:Node, 文档:document, 文档_:Document, 文档片段_:DocumentFragment }
    变换到片段(源: 节点_, 文档: 文档_): 文档片段_;

}

声明 值量 XSLT处理器_: {

    //@@{ 原型:prototype, XSLT处理器_:XSLTProcessor }
    原型: XSLT处理器_;

    //@@{ XSLT处理器_:XSLTProcessor }
    新建(): XSLT处理器_;

};

//@@{ 抽象的工人事件映射_:AbstractWorkerEventMap }
接口 抽象的工人事件映射_ {

    //@@{ "错误":"error", 错误事件_:ErrorEvent }
    "错误": 错误事件_;

}

//@@{ 抽象的工人_:AbstractWorker }
接口 抽象的工人_ {

    //@@{ 正在错误:onerror, 抽象的工人_:AbstractWorker, 错误事件_:ErrorEvent }
    正在错误: (本体: 抽象的工人_, ev: 错误事件_) => 任意;

    //@@{ 添加事件监听器:addEventListener, 抽象的工人事件映射_:AbstractWorkerEventMap, 类型:type, 侦听器:listener, 抽象的工人_:AbstractWorker, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 抽象的工人事件映射_>(类型: K, 侦听器: (本体: 抽象的工人_, ev: 抽象的工人事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

//@@{ 体_:Body }
接口 体_ {

    //@@{ 体使用:bodyUsed }
    只读 体使用: 真假;

    //@@{ 数组缓冲区:arrayBuffer, 预设_:Promise, 数组缓冲区_:ArrayBuffer }
    数组缓冲区(): 预设_<数组缓冲区_>;

    //@@{ 二进制对象:blob, 预设_:Promise, 二进制对象_:Blob }
    二进制对象(): 预设_<二进制对象_>;

    //@@{ json数据:json, 预设_:Promise }
    json数据(): 预设_<任意>;

    //@@{ 文本:text, 预设_:Promise }
    文本(): 预设_<文字>;

    //@@{ 表单数据:formData, 预设_:Promise, 表单数据_:FormData }
    表单数据(): 预设_<表单数据_>;

}

//@@{ 画板路径方法_:CanvasPathMethods }
接口 画板路径方法_ {

    //@@{ 弧:arc, 半径:radius, 开始角:startAngle, 结束角:endAngle, 逆时针方向:anticlockwise }
    弧(x: 数字, y: 数字, 半径: 数字, 开始角: 数字, 结束角: 数字, 逆时针方向?: 真假): 无值;

    //@@{ 弧到:arcTo, 半径:radius }
    弧到(x1: 数字, y1: 数字, x2: 数字, y2: 数字, 半径: 数字): 无值;

    //@@{ 贝塞尔曲线到:bezierCurveTo }
    贝塞尔曲线到(cp1x: 数字, cp1y: 数字, cp2x: 数字, cp2y: 数字, x: 数字, y: 数字): 无值;

    //@@{ 关闭路径:closePath }
    关闭路径(): 无值;

    //@@{ 椭圆:ellipse, 半径X:radiusX, 半径Y:radiusY, 旋转:rotation, 开始角:startAngle, 结束角:endAngle, 逆时针方向:anticlockwise }
    椭圆(x: 数字, y: 数字, 半径X: 数字, 半径Y: 数字, 旋转: 数字, 开始角: 数字, 结束角: 数字, 逆时针方向?: 真假): 无值;

    //@@{ 线到:lineTo }
    线到(x: 数字, y: 数字): 无值;

    //@@{ 移动到:moveTo }
    移动到(x: 数字, y: 数字): 无值;

    //@@{ 二次曲线到:quadraticCurveTo }
    二次曲线到(cpx: 数字, cpy: 数字, x: 数字, y: 数字): 无值;

    //@@{ 矩形:rect }
    矩形(x: 数字, y: 数字, w: 数字, h: 数字): 无值;

}

//@@{ 子节点_:ChildNode }
接口 子节点_ {

    //@@{ 删除:remove }
    删除(): 无值;

}

//@@{ 文档事件_:DocumentEvent }
接口 文档事件_ {

    //@@{ 创建事件:createEvent, 事件接口:eventInterface, "动画事件_":"AnimationEvent", 动画事件_:AnimationEvent }
    创建事件(事件接口: "动画事件_"): 动画事件_;

    //@@{ 事件接口:eventInterface, "音频处理事件_":"AudioProcessingEvent", 音频处理事件_:AudioProcessingEvent }
    创建事件(事件接口: "音频处理事件_"): 音频处理事件_;

    //@@{ 事件接口:eventInterface, "将卸载事件_":"BeforeUnloadEvent", 将卸载事件_:BeforeUnloadEvent }
    创建事件(事件接口: "将卸载事件_"): 将卸载事件_;

    //@@{ 事件接口:eventInterface, "剪贴板事件_":"ClipboardEvent", 剪贴板事件_:ClipboardEvent }
    创建事件(事件接口: "剪贴板事件_"): 剪贴板事件_;

    //@@{ 事件接口:eventInterface, "关闭事件_":"CloseEvent", 关闭事件_:CloseEvent }
    创建事件(事件接口: "关闭事件_"): 关闭事件_;

    //@@{ 事件接口:eventInterface, "组件事件_":"CompositionEvent", 组件事件_:CompositionEvent }
    创建事件(事件接口: "组件事件_"): 组件事件_;

    //@@{ 事件接口:eventInterface, "自定义事件_":"CustomEvent", 自定义事件_:CustomEvent }
    创建事件(事件接口: "自定义事件_"): 自定义事件_;

    //@@{ 事件接口:eventInterface, "设备环境光事件_":"DeviceLightEvent", 设备环境光事件_:DeviceLightEvent }
    创建事件(事件接口: "设备环境光事件_"): 设备环境光事件_;

    //@@{ 事件接口:eventInterface, "设备运动事件_":"DeviceMotionEvent", 设备运动事件_:DeviceMotionEvent }
    创建事件(事件接口: "设备运动事件_"): 设备运动事件_;

    //@@{ 事件接口:eventInterface, "设备定位事件_":"DeviceOrientationEvent", 设备定位事件_:DeviceOrientationEvent }
    创建事件(事件接口: "设备定位事件_"): 设备定位事件_;

    //@@{ 事件接口:eventInterface, "拖拽事件_":"DragEvent", 拖拽事件_:DragEvent }
    创建事件(事件接口: "拖拽事件_"): 拖拽事件_;

    //@@{ 事件接口:eventInterface, "错误事件_":"ErrorEvent", 错误事件_:ErrorEvent }
    创建事件(事件接口: "错误事件_"): 错误事件_;

    //@@{ 事件接口:eventInterface, "事件_":"Event", 事件_:Event }
    创建事件(事件接口: "事件_"): 事件_;

    //@@{ 事件接口:eventInterface, "事件组_":"Events", 事件_:Event }
    创建事件(事件接口: "事件组_"): 事件_;

    //@@{ 事件接口:eventInterface, "焦点事件_":"FocusEvent", 焦点事件_:FocusEvent }
    创建事件(事件接口: "焦点事件_"): 焦点事件_;

    //@@{ 事件接口:eventInterface, "焦点导航事件_":"FocusNavigationEvent", 焦点导航事件_:FocusNavigationEvent }
    创建事件(事件接口: "焦点导航事件_"): 焦点导航事件_;

    //@@{ 事件接口:eventInterface, "手柄事件_":"GamepadEvent", 手柄事件_:GamepadEvent }
    创建事件(事件接口: "手柄事件_"): 手柄事件_;

    //@@{ 事件接口:eventInterface, "哈希改变事件_":"HashChangeEvent", 哈希改变事件_:HashChangeEvent }
    创建事件(事件接口: "哈希改变事件_"): 哈希改变事件_;

    //@@{ 事件接口:eventInterface, "IDB版本改变事件_":"IDBVersionChangeEvent", IDB版本改变事件_:IDBVersionChangeEvent }
    创建事件(事件接口: "IDB版本改变事件_"): IDB版本改变事件_;

    //@@{ 事件接口:eventInterface, "键盘事件_":"KeyboardEvent", 键盘事件_:KeyboardEvent }
    创建事件(事件接口: "键盘事件_"): 键盘事件_;

    //@@{ 事件接口:eventInterface, "监听状态改变事件_":"ListeningStateChangedEvent", 监听状态改变事件_:ListeningStateChangedEvent }
    创建事件(事件接口: "监听状态改变事件_"): 监听状态改变事件_;

    //@@{ 事件接口:eventInterface, "检测到长时间运行脚本事件_":"LongRunningScriptDetectedEvent", 检测到长时间运行脚本事件_:LongRunningScriptDetectedEvent }
    创建事件(事件接口: "检测到长时间运行脚本事件_"): 检测到长时间运行脚本事件_;

    //@@{ 事件接口:eventInterface, "MS手势事件_":"MSGestureEvent", MS手势事件_:MSGestureEvent }
    创建事件(事件接口: "MS手势事件_"): MS手势事件_;

    //@@{ 事件接口:eventInterface, "MS操纵杆事件_":"MSManipulationEvent", MS操纵杆事件_:MSManipulationEvent }
    创建事件(事件接口: "MS操纵杆事件_"): MS操纵杆事件_;

    //@@{ 事件接口:eventInterface, "MS媒体键消息事件_":"MSMediaKeyMessageEvent", MS媒体键消息事件_:MSMediaKeyMessageEvent }
    创建事件(事件接口: "MS媒体键消息事件_"): MS媒体键消息事件_;

    //@@{ 事件接口:eventInterface, "MS媒体键需要事件_":"MSMediaKeyNeededEvent", MS媒体键需要事件_:MSMediaKeyNeededEvent }
    创建事件(事件接口: "MS媒体键需要事件_"): MS媒体键需要事件_;

    //@@{ 事件接口:eventInterface, "MS指针事件_":"MSPointerEvent", MS指针事件_:MSPointerEvent }
    创建事件(事件接口: "MS指针事件_"): MS指针事件_;

    //@@{ 事件接口:eventInterface, "MS网站模式事件_":"MSSiteModeEvent", MS网站模式事件_:MSSiteModeEvent }
    创建事件(事件接口: "MS网站模式事件_"): MS网站模式事件_;

    //@@{ 事件接口:eventInterface, "媒体加密事件_":"MediaEncryptedEvent", 媒体加密事件_:MediaEncryptedEvent }
    创建事件(事件接口: "媒体加密事件_"): 媒体加密事件_;

    //@@{ 事件接口:eventInterface, "媒体键消息事件_":"MediaKeyMessageEvent", 媒体键消息事件_:MediaKeyMessageEvent }
    创建事件(事件接口: "媒体键消息事件_"): 媒体键消息事件_;

    //@@{ 事件接口:eventInterface, "媒体流错误事件_":"MediaStreamErrorEvent", 媒体流错误事件_:MediaStreamErrorEvent }
    创建事件(事件接口: "媒体流错误事件_"): 媒体流错误事件_;

    //@@{ 事件接口:eventInterface, "媒体流事件_":"MediaStreamEvent", 媒体流事件_:MediaStreamEvent }
    创建事件(事件接口: "媒体流事件_"): 媒体流事件_;

    //@@{ 事件接口:eventInterface, "媒体流轨道事件_":"MediaStreamTrackEvent", 媒体流轨道事件_:MediaStreamTrackEvent }
    创建事件(事件接口: "媒体流轨道事件_"): 媒体流轨道事件_;

    //@@{ 事件接口:eventInterface, "消息事件_":"MessageEvent", 消息事件_:MessageEvent }
    创建事件(事件接口: "消息事件_"): 消息事件_;

    //@@{ 事件接口:eventInterface, "鼠标事件_":"MouseEvent", 鼠标事件_:MouseEvent }
    创建事件(事件接口: "鼠标事件_"): 鼠标事件_;

    //@@{ 事件接口:eventInterface, "鼠标事件组_":"MouseEvents", 鼠标事件_:MouseEvent }
    创建事件(事件接口: "鼠标事件组_"): 鼠标事件_;

    //@@{ 事件接口:eventInterface, "突变事件_":"MutationEvent", 突变事件_:MutationEvent }
    创建事件(事件接口: "突变事件_"): 突变事件_;

    //@@{ 事件接口:eventInterface, "突变事件组_":"MutationEvents", 突变事件_:MutationEvent }
    创建事件(事件接口: "突变事件组_"): 突变事件_;

    //@@{ 事件接口:eventInterface, "导航完成事件_":"NavigationCompletedEvent", 导航完成事件_:NavigationCompletedEvent }
    创建事件(事件接口: "导航完成事件_"): 导航完成事件_;

    //@@{ 事件接口:eventInterface, "导航事件_":"NavigationEvent", 导航事件_:NavigationEvent }
    创建事件(事件接口: "导航事件_"): 导航事件_;

    //@@{ 事件接口:eventInterface, "导航事件与介绍人_":"NavigationEventWithReferrer", 导航事件与介绍人_:NavigationEventWithReferrer }
    创建事件(事件接口: "导航事件与介绍人_"): 导航事件与介绍人_;

    //@@{ 事件接口:eventInterface, "离线音频完成事件_":"OfflineAudioCompletionEvent", 离线音频完成事件_:OfflineAudioCompletionEvent }
    创建事件(事件接口: "离线音频完成事件_"): 离线音频完成事件_;

    //@@{ 事件接口:eventInterface, "溢出事件_":"OverflowEvent", 溢出事件_:OverflowEvent }
    创建事件(事件接口: "溢出事件_"): 溢出事件_;

    //@@{ 事件接口:eventInterface, "页面过渡事件_":"PageTransitionEvent", 页面过渡事件_:PageTransitionEvent }
    创建事件(事件接口: "页面过渡事件_"): 页面过渡事件_;

    //@@{ 事件接口:eventInterface, "付款请求更新事件_":"PaymentRequestUpdateEvent", 付款请求更新事件_:PaymentRequestUpdateEvent }
    创建事件(事件接口: "付款请求更新事件_"): 付款请求更新事件_;

    //@@{ 事件接口:eventInterface, "许可请求事件_":"PermissionRequestedEvent", 许可请求事件_:PermissionRequestedEvent }
    创建事件(事件接口: "许可请求事件_"): 许可请求事件_;

    //@@{ 事件接口:eventInterface, "指针事件_":"PointerEvent", 指针事件_:PointerEvent }
    创建事件(事件接口: "指针事件_"): 指针事件_;

    //@@{ 事件接口:eventInterface, "回退状态事件_":"PopStateEvent", 回退状态事件:PopStateEvent }
    创建事件(事件接口: "回退状态事件_"): 回退状态事件;

    //@@{ 事件接口:eventInterface, "进度事件_":"ProgressEvent", 进度事件_:ProgressEvent }
    创建事件(事件接口: "进度事件_"): 进度事件_;

    //@@{ 事件接口:eventInterface, "RTCDTMF声调改变事件_":"RTCDTMFToneChangeEvent", RTCDTMF声调改变事件_:RTCDTMFToneChangeEvent }
    创建事件(事件接口: "RTCDTMF声调改变事件_"): RTCDTMF声调改变事件_;

    //@@{ 事件接口:eventInterface, "RTCDtls传输状态改变事件_":"RTCDtlsTransportStateChangedEvent", RTCDtls传输状态改变事件_:RTCDtlsTransportStateChangedEvent }
    创建事件(事件接口: "RTCDtls传输状态改变事件_"): RTCDtls传输状态改变事件_;

    //@@{ 事件接口:eventInterface, "RTCIce候选一对改变事件_":"RTCIceCandidatePairChangedEvent", RTCIce候选一对改变事件_:RTCIceCandidatePairChangedEvent }
    创建事件(事件接口: "RTCIce候选一对改变事件_"): RTCIce候选一对改变事件_;

    //@@{ 事件接口:eventInterface, "RTCIce采集者事件_":"RTCIceGathererEvent", RTCIce采集者事件_:RTCIceGathererEvent }
    创建事件(事件接口: "RTCIce采集者事件_"): RTCIce采集者事件_;

    //@@{ 事件接口:eventInterface, "RTCIce传输状态改变事件_":"RTCIceTransportStateChangedEvent", RTCIce传输状态改变事件_:RTCIceTransportStateChangedEvent }
    创建事件(事件接口: "RTCIce传输状态改变事件_"): RTCIce传输状态改变事件_;

    //@@{ 事件接口:eventInterface, "RTC对等连接Ice事件_":"RTCPeerConnectionIceEvent", RTC对等连接Ice事件_:RTCPeerConnectionIceEvent }
    创建事件(事件接口: "RTC对等连接Ice事件_"): RTC对等连接Ice事件_; 

    //@@{ 事件接口:eventInterface, "RTCSsrc冲突事件_":"RTCSsrcConflictEvent", RTCSsrc冲突事件_:RTCSsrcConflictEvent }
    创建事件(事件接口: "RTCSsrc冲突事件_"): RTCSsrc冲突事件_;

    //@@{ 事件接口:eventInterface, "SVG放缩事件_":"SVGZoomEvent", SVG放缩事件_:SVGZoomEvent }
    创建事件(事件接口: "SVG放缩事件_"): SVG放缩事件_;

    //@@{ 事件接口:eventInterface, "SVG放缩事件组_":"SVGZoomEvents", SVG放缩事件_:SVGZoomEvent }
    创建事件(事件接口: "SVG放缩事件组_"): SVG放缩事件_;

    //@@{ 事件接口:eventInterface, "脚本通知事件_":"ScriptNotifyEvent", 脚本通知事件_:ScriptNotifyEvent }
    创建事件(事件接口: "脚本通知事件_"): 脚本通知事件_;

    //@@{ 事件接口:eventInterface, "服务工人消息事件_":"ServiceWorkerMessageEvent", 服务工人消息事件_:ServiceWorkerMessageEvent }
    创建事件(事件接口: "服务工人消息事件_"): 服务工人消息事件_;

    //@@{ 事件接口:eventInterface, "语音合成事件_":"SpeechSynthesisEvent", 语音合成事件_:SpeechSynthesisEvent }
    创建事件(事件接口: "语音合成事件_"): 语音合成事件_;

    //@@{ 事件接口:eventInterface, "存储事件_":"StorageEvent", 存储事件_:StorageEvent }
    创建事件(事件接口: "存储事件_"): 存储事件_;

    //@@{ 事件接口:eventInterface, "文本事件_":"TextEvent", 文本事件_:TextEvent }
    创建事件(事件接口: "文本事件_"): 文本事件_;

    //@@{ 事件接口:eventInterface, "触摸事件_":"TouchEvent", 触摸事件_:TouchEvent }
    创建事件(事件接口: "触摸事件_"): 触摸事件_;

    //@@{ 事件接口:eventInterface, "轨道事件_":"TrackEvent", 轨道事件_:TrackEvent }
    创建事件(事件接口: "轨道事件_"): 轨道事件_;

    //@@{ 事件接口:eventInterface, "过渡事件_":"TransitionEvent", 过渡事件_:TransitionEvent }
    创建事件(事件接口: "过渡事件_"): 过渡事件_;

    //@@{ 事件接口:eventInterface, "UI事件_":"UIEvent", UI事件_:UIEvent }
    创建事件(事件接口: "UI事件_"): UI事件_;

    //@@{ 事件接口:eventInterface, "UI事件组_":"UIEvents", UI事件_:UIEvent }
    创建事件(事件接口: "UI事件组_"): UI事件_;

    //@@{ 事件接口:eventInterface, "无法观看内容识别事件_":"UnviewableContentIdentifiedEvent", 无法观看内容识别事件_:UnviewableContentIdentifiedEvent }
    创建事件(事件接口: "无法观看内容识别事件_"): 无法观看内容识别事件_;

    //@@{ 事件接口:eventInterface, "WebGL上下文事件_":"WebGLContextEvent", WebGL上下文事件_:WebGLContextEvent }
    创建事件(事件接口: "WebGL上下文事件_"): WebGL上下文事件_;

    //@@{ 事件接口:eventInterface, "轮事件_":"WheelEvent", 轮事件_:WheelEvent }
    创建事件(事件接口: "轮事件_"): 轮事件_;

    //@@{ 事件接口:eventInterface, 事件_:Event }
    创建事件(事件接口: 文字): 事件_;

}

//@@{ DOML2弃用颜色属性_:DOML2DeprecatedColorProperty }
接口 DOML2弃用颜色属性_ {

    //@@{ 颜色:color }
    颜色: 文字;

}

//@@{ DOML2弃用大小属性_:DOML2DeprecatedSizeProperty }
接口 DOML2弃用大小属性_ {

    //@@{ 大小:size }
    大小: 数字;

}

//@@{ 元素遍历_:ElementTraversal }
接口 元素遍历_ {

    //@@{ 子元素计数:childElementCount }
    只读 子元素计数: 数字;

    //@@{ 首元素子:firstElementChild, 元素_:Element }
    只读 首元素子: 元素_ | 空值;

    //@@{ 尾元素子:lastElementChild, 元素_:Element }
    只读 尾元素子: 元素_ | 空值;

    //@@{ 下个元素兄弟:nextElementSibling, 元素_:Element }
    只读 下个元素兄弟: 元素_ | 空值;

    //@@{ 前个元素兄弟:previousElementSibling, 元素_:Element }
    只读 前个元素兄弟: 元素_ | 空值;

}

//@@{ 取SVG文档_:GetSVGDocument }
接口 取SVG文档_ {

    //@@{ 取SVG文档:getSVGDocument, 文档_:Document }
    取SVG文档(): 文档_;

}

//@@{ 全局事件处理程序事件映射_:GlobalEventHandlersEventMap }
接口 全局事件处理程序事件映射_ {

    //@@{ "指针取消":"pointercancel", 指针事件_:PointerEvent }
    "指针取消": 指针事件_;

    //@@{ "指针按下":"pointerdown", 指针事件_:PointerEvent }
    "指针按下": 指针事件_;

    //@@{ "指针进入":"pointerenter", 指针事件_:PointerEvent }
    "指针进入": 指针事件_;

    //@@{ "指针离开":"pointerleave", 指针事件_:PointerEvent }
    "指针离开": 指针事件_;

    //@@{ "指针移动":"pointermove", 指针事件_:PointerEvent }
    "指针移动": 指针事件_;

    //@@{ "指针移出":"pointerout", 指针事件_:PointerEvent }
    "指针移出": 指针事件_;

    //@@{ "指针悬停":"pointerover", 指针事件_:PointerEvent }
    "指针悬停": 指针事件_;

    //@@{ "指针松开":"pointerup", 指针事件_:PointerEvent }
    "指针松开": 指针事件_;

    //@@{ "滚轮":"wheel", 轮事件_:WheelEvent }
    "滚轮": 轮事件_;

}

//@@{ 全局事件处理程序_:GlobalEventHandlers }
接口 全局事件处理程序_ {

    //@@{ 正在指针取消:onpointercancel, 全局事件处理程序_:GlobalEventHandlers, 指针事件_:PointerEvent }
    正在指针取消: (本体: 全局事件处理程序_, ev: 指针事件_) => 任意;

    //@@{ 正在指针按下:onpointerdown, 全局事件处理程序_:GlobalEventHandlers, 指针事件_:PointerEvent }
    正在指针按下: (本体: 全局事件处理程序_, ev: 指针事件_) => 任意;

    //@@{ 正在指针进入:onpointerenter, 全局事件处理程序_:GlobalEventHandlers, 指针事件_:PointerEvent }
    正在指针进入: (本体: 全局事件处理程序_, ev: 指针事件_) => 任意;

    //@@{ 正在指针离开:onpointerleave, 全局事件处理程序_:GlobalEventHandlers, 指针事件_:PointerEvent }
    正在指针离开: (本体: 全局事件处理程序_, ev: 指针事件_) => 任意;

    //@@{ 正在指针移动:onpointermove, 全局事件处理程序_:GlobalEventHandlers, 指针事件_:PointerEvent }
    正在指针移动: (本体: 全局事件处理程序_, ev: 指针事件_) => 任意;

    //@@{ 正在指针移出:onpointerout, 全局事件处理程序_:GlobalEventHandlers, 指针事件_:PointerEvent }
    正在指针移出: (本体: 全局事件处理程序_, ev: 指针事件_) => 任意;

    //@@{ 正在指针悬停:onpointerover, 全局事件处理程序_:GlobalEventHandlers, 指针事件_:PointerEvent }
    正在指针悬停: (本体: 全局事件处理程序_, ev: 指针事件_) => 任意;

    //@@{ 正在指针松开:onpointerup, 全局事件处理程序_:GlobalEventHandlers, 指针事件_:PointerEvent }
    正在指针松开: (本体: 全局事件处理程序_, ev: 指针事件_) => 任意;

    //@@{ 正在滚轮:onwheel, 全局事件处理程序_:GlobalEventHandlers, 轮事件_:WheelEvent }
    正在滚轮: (本体: 全局事件处理程序_, ev: 轮事件_) => 任意;

    //@@{ 添加事件监听器:addEventListener, 全局事件处理程序事件映射_:GlobalEventHandlersEventMap, 类型:type, 侦听器:listener, 全局事件处理程序_:GlobalEventHandlers, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 全局事件处理程序事件映射_>(类型: K, 侦听器: (本体: 全局事件处理程序_, ev: 全局事件处理程序事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

//@@{ 全局获取_:GlobalFetch }
接口 全局获取_ {

    //@@{ 获取:fetch, 输入:input, 请求信息_:RequestInfo, 初始化:init, 请求初始化_:RequestInit, 预设_:Promise, 响应_:Response }
    获取(输入: 请求信息_, 初始化?: 请求初始化_): 预设_<响应_>;

}

//@@{ HTML表校准_:HTMLTableAlignment }
接口 HTML表校准_ {

    /**
     * Sets or retrieves a value that you can use to implement your own ch functionality for the object.
     */

    ch: 文字;

    /**
     * Sets or retrieves a value that you can use to implement your own chOff functionality for the object.
     */

    //@@{ ch关闭:chOff }
    ch关闭: 文字;

    /**
     * Sets or retrieves how text and other content are vertically aligned within the object that contains them.
     */

    //@@{ 垂直对齐:vAlign }
    垂直对齐: 文字;

}

//@@{ IDB环境_:IDBEnvironment }
接口 IDB环境_ {

    //@@{ 索引DB:indexedDB, IDB工厂_:IDBFactory }
    只读 索引DB: IDB工厂_;

}

//@@{ 链接样式_:LinkStyle }
接口 链接样式_ {

    //@@{ 表:sheet, 样式表_:StyleSheet }
    只读 表: 样式表_;

}

//@@{ MS基读者事件映射_:MSBaseReaderEventMap }
接口 MS基读者事件映射_ {

    //@@{ "终止":"abort", 事件_:Event }
    "终止": 事件_;

    //@@{ "错误":"error", 错误事件_:ErrorEvent }
    "错误": 错误事件_;

    //@@{ "加载":"load", 事件_:Event }
    "加载": 事件_;

    //@@{ "加载结束":"loadend", 进度事件_:ProgressEvent }
    "加载结束": 进度事件_;

    //@@{ "加载开始":"loadstart", 事件_:Event }
    "加载开始": 事件_;

    //@@{ "进度":"progress", 进度事件_:ProgressEvent }
    "进度": 进度事件_;

}

//@@{ MS基读者_:MSBaseReader }
接口 MS基读者_ {

    //@@{ 正在终止:onabort, MS基读者_:MSBaseReader, 事件_:Event }
    正在终止: (本体: MS基读者_, ev: 事件_) => 任意;

    //@@{ 正在错误:onerror, MS基读者_:MSBaseReader, 错误事件_:ErrorEvent }
    正在错误: (本体: MS基读者_, ev: 错误事件_) => 任意;

    //@@{ 正在加载:onload, MS基读者_:MSBaseReader, 事件_:Event }
    正在加载: (本体: MS基读者_, ev: 事件_) => 任意;

    //@@{ 正在加载结束:onloadend, MS基读者_:MSBaseReader, 进度事件_:ProgressEvent }
    正在加载结束: (本体: MS基读者_, ev: 进度事件_) => 任意;

    //@@{ 正在加载开始:onloadstart, MS基读者_:MSBaseReader, 事件_:Event }
    正在加载开始: (本体: MS基读者_, ev: 事件_) => 任意;

    //@@{ 正在进度:onprogress, MS基读者_:MSBaseReader, 进度事件_:ProgressEvent }
    正在进度: (本体: MS基读者_, ev: 进度事件_) => 任意;

    //@@{ 就绪状态:readyState }
    只读 就绪状态: 数字;

    //@@{ 结果:result }
    只读 结果: 任意;

    //@@{ 终止:abort }
    终止(): 无值;

    //@@{ __完成__:DONE }
    只读 __完成__: 数字;

    //@@{ __空__:EMPTY }
    只读 __空__: 数字;

    //@@{ __加载中__:LOADING }
    只读 __加载中__: 数字;

    //@@{ 添加事件监听器:addEventListener, MS基读者事件映射_:MSBaseReaderEventMap, 类型:type, 侦听器:listener, MS基读者_:MSBaseReader, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 MS基读者事件映射_>(类型: K, 侦听器: (本体: MS基读者_, ev: MS基读者事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

//@@{ MS文件保存_:MSFileSaver }
接口 MS文件保存_ {

    //@@{ ms保存二进制对象:msSaveBlob, 二进制对象:blob, 默认名字:defaultName }
    ms保存二进制对象(二进制对象: 任意, 默认名字?: 文字): 真假;

    //@@{ ms保存或打开二进制对象:msSaveOrOpenBlob, 二进制对象:blob, 默认名字:defaultName }
    ms保存或打开二进制对象(二进制对象: 任意, 默认名字?: 文字): 真假;

}

//@@{ MS导航器无轨道_:MSNavigatorDoNotTrack }
接口 MS导航器无轨道_ {

    //@@{ 确认站点特定跟踪异常:confirmSiteSpecificTrackingException, 参数组:args, 确认站点特定的异常信息_:ConfirmSiteSpecificExceptionsInformation }
    确认站点特定跟踪异常(参数组: 确认站点特定的异常信息_): 真假;

    //@@{ 确认网络宽跟踪异常:confirmWebWideTrackingException, 参数组:args, 异常信息_:ExceptionInformation }
    确认网络宽跟踪异常(参数组: 异常信息_): 真假;

    //@@{ 删除站点特定的跟踪异常:removeSiteSpecificTrackingException, 参数组:args, 异常信息_:ExceptionInformation }
    删除站点特定的跟踪异常(参数组: 异常信息_): 无值;

    //@@{ 删除网络范围的跟踪异常:removeWebWideTrackingException, 参数组:args, 异常信息_:ExceptionInformation }
    删除网络范围的跟踪异常(参数组: 异常信息_): 无值;

    //@@{ 存储站点特定的跟踪异常:storeSiteSpecificTrackingException, 参数组:args, 存储站点具体的异常信息_:StoreSiteSpecificExceptionsInformation }
    存储站点特定的跟踪异常(参数组: 存储站点具体的异常信息_): 无值;

    //@@{ 存储网络宽跟踪异常:storeWebWideTrackingException, 参数组:args, 存储异常信息_:StoreExceptionsInformation }
    存储网络宽跟踪异常(参数组: 存储异常信息_): 无值;

}

//@@{ 导航信标_:NavigatorBeacon }
接口 导航信标_ {

    //@@{ 发送信标:sendBeacon, USV字符串:USVString, 数据:data, 体初始化_:BodyInit }
    发送信标(url: USV字符串, 数据?: 体初始化_): 真假;

}

//@@{ 导航器并行硬件_:NavigatorConcurrentHardware }
接口 导航器并行硬件_ {

    //@@{ 硬件并发:hardwareConcurrency }
    只读 硬件并发: 数字;

}

//@@{ 导航器内容工具_:NavigatorContentUtils }
接口 导航器内容工具_ {

}

//@@{ 导航定位_:NavigatorGeolocation }
接口 导航定位_ {

    //@@{ 地理位置:geolocation, 地理位置_:Geolocation }
    只读 地理位置: 地理位置_;

}

//@@{ 导航器ID_:NavigatorID }
接口 导航器ID_ {

    //@@{ 应用程序代码名称:appCodeName }
    只读 应用程序代码名称: 文字;

    //@@{ 应用程序名称:appName }
    只读 应用程序名称: 文字;

    //@@{ 应用程序版本:appVersion }
    只读 应用程序版本: 文字;

    //@@{ 平台:platform }
    只读 平台: 文字;

    //@@{ 产品:product }
    只读 产品: 文字;

    //@@{ 产品的子:productSub }
    只读 产品的子: 文字;

    //@@{ 用户代理:userAgent }
    只读 用户代理: 文字;

    //@@{ 供应商:vendor }
    只读 供应商: 文字;

    //@@{ 供应商子:vendorSub }
    只读 供应商子: 文字;

}

//@@{ 导航器在线_:NavigatorOnLine }
接口 导航器在线_ {

    //@@{ 在线:onLine }
    只读 在线: 真假;

}

//@@{ 导航器存储工具_:NavigatorStorageUtils }
接口 导航器存储工具_ {

}

//@@{ 导航用户媒体_:NavigatorUserMedia }
接口 导航用户媒体_ {

    //@@{ 媒体设备:mediaDevices, 媒体设备_:MediaDevices }
    只读 媒体设备: 媒体设备_;

    //@@{ 取用户媒体:getUserMedia, 约束:constraints, 媒体流约束_:MediaStreamConstraints, 成功回调:successCallback, 导航器用户媒体成功回调_:NavigatorUserMediaSuccessCallback, 错误回调:errorCallback, 导航器用户媒体错误回调_:NavigatorUserMediaErrorCallback }
    取用户媒体(约束: 媒体流约束_, 成功回调: 导航器用户媒体成功回调_, 错误回调: 导航器用户媒体错误回调_): 无值;

}

//@@{ 节点选择器_:NodeSelector }
接口 节点选择器_ {

    //@@{ 查询选择器:querySelector, 元素标签名称映射_:ElementTagNameMap, 选择:selectors }
    查询选择器<K 扩展 键为 元素标签名称映射_>(选择: K): 元素标签名称映射_[K] | 空值;

    //@@{ 元素_:Element, 选择:selectors }
    查询选择器<E 扩展 元素_ = 元素_>(选择: 文字): E | 空值;

    //@@{ 查询选择所有:querySelectorAll, 元素列表标签名称映射_:ElementListTagNameMap, 选择:selectors }
    查询选择所有<K 扩展 键为 元素列表标签名称映射_>(选择: K): 元素列表标签名称映射_[K];

    //@@{ 元素_:Element, 选择:selectors, 节点列表的_:NodeListOf }
    查询选择所有<E 扩展 元素_ = 元素_>(选择: 文字): 节点列表的_<E>;

}

//@@{ 随机源_:RandomSource }
接口 随机源_ {

    //@@{ 取随机值:getRandomValues, 整数数组8_:Int8Array, 正整数固定数组8_:Uint8ClampedArray, 正整数数组8_:Uint8Array, 整数数组16_:Int16Array, 正整数数组16_:Uint16Array, 整数数组32_:Int32Array, 正整数数组32_:Uint32Array, 数组:array }
    取随机值<T 扩展 整数数组8_ | 正整数固定数组8_ | 正整数数组8_ | 整数数组16_ | 正整数数组16_ | 整数数组32_ | 正整数数组32_>(数组: T): T;

}

//@@{ SVG动画点_:SVGAnimatedPoints }
接口 SVG动画点_ {

    //@@{ 动画点:animatedPoints, SVG点列表_:SVGPointList }
    只读 动画点: SVG点列表_;

    //@@{ 点:points, SVG点列表_:SVGPointList }
    只读 点: SVG点列表_;

}

//@@{ SVG过滤原始标准特性_:SVGFilterPrimitiveStandardAttributes }
接口 SVG过滤原始标准特性_ { 

    //@@{ 高度:height, SVG动画长度_:SVGAnimatedLength }
    只读 高度: SVG动画长度_;

    //@@{ 结果:result, SVG动画文字_:SVGAnimatedString }
    只读 结果: SVG动画文字_;

    //@@{ 宽度:width, SVG动画长度_:SVGAnimatedLength }
    只读 宽度: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 x: SVG动画长度_;

    //@@{ SVG动画长度_:SVGAnimatedLength }
    只读 y: SVG动画长度_;

}

//@@{ SVG适合于视图框_:SVGFitToViewBox }
接口 SVG适合于视图框_ {

    //@@{ 保持长宽比:preserveAspectRatio, SVG动画保护长宽比_:SVGAnimatedPreserveAspectRatio }
    只读 保持长宽比: SVG动画保护长宽比_;

    //@@{ 视图框:viewBox, SVG动画矩形_:SVGAnimatedRect }
    只读 视图框: SVG动画矩形_;

}

//@@{ SVG测试_:SVGTests }
接口 SVG测试_ {

    //@@{ 需要扩展:requiredExtensions, SVG文字列表_:SVGStringList }
    只读 需要扩展: SVG文字列表_;

    //@@{ 需要功能:requiredFeatures, SVG文字列表_:SVGStringList }
    只读 需要功能: SVG文字列表_;

    //@@{ 系统语言:systemLanguage, SVG文字列表_:SVGStringList }
    只读 系统语言: SVG文字列表_;

    //@@{ 有扩展:hasExtension, 扩展_:extension }
    有扩展(扩展_: 文字): 真假;

}

//@@{ SVGURI参考_:SVGURIReference }
接口 SVGURI参考_ {

    //@@{ 目标URL:href, SVG动画文字_:SVGAnimatedString }
    只读 目标URL: SVG动画文字_;

}

//@@{ 窗口基64_:WindowBase64 }
接口 窗口基64_ {

    //@@{ 解码:atob, 编码的字符串:encodedString }
    解码(编码的字符串: 文字): 文字;

    //@@{ 编码:btoa, 原始字符串:rawString }
    编码(原始字符串: 文字): 文字;

}

//@@{ 窗口控制台_:WindowConsole }
接口 窗口控制台_ {

    //@@{ 控制台:console, 控制台_:Console }
    只读 控制台: 控制台_;

}

//@@{ 窗口本地存储_:WindowLocalStorage }
接口 窗口本地存储_ {

    //@@{ 本地存储:localStorage, 存储_:Storage }
    只读 本地存储: 存储_;

}

//@@{ 窗口会话存储_:WindowSessionStorage }
接口 窗口会话存储_ {

    //@@{ 会话存储:sessionStorage, 存储_:Storage }
    只读 会话存储: 存储_;

}

//@@{ 窗口计时器_:WindowTimers, 实例_:Object, 窗口计时器扩展_:WindowTimersExtension }
接口 窗口计时器_ 扩展 实例_, 窗口计时器扩展_ {

    //@@{ 清除时间间隔:clearInterval, 处理:handle }
    清除时间间隔(处理: 数字): 无值;

    //@@{ 清除超时:clearTimeout, 处理:handle }
    清除超时(处理: 数字): 无值;

    //@@{ 置时间间隔:setInterval, 处理程序:handler, 参数组:args, 超时:timeout }
    置时间间隔(处理程序: (...参数组: 任意[]) => 无值, 超时: 数字): 数字;

    //@@{ 处理程序:handler, 超时:timeout, 参数组:args }
    置时间间隔(处理程序: 任意, 超时?: 任意, ...参数组: 任意[]): 数字;

    //@@{ 置超时:setTimeout, 处理程序:handler, 参数组:args, 超时:timeout }
    置超时(处理程序: (...参数组: 任意[]) => 无值, 超时: 数字): 数字;

    //@@{ 处理程序:handler, 超时:timeout, 参数组:args }
    置超时(处理程序: 任意, 超时?: 任意, ...参数组: 任意[]): 数字;

}

//@@{ 窗口计时器扩展_:WindowTimersExtension }
接口 窗口计时器扩展_ {

    //@@{ 清除立即:clearImmediate, 处理:handle }
    清除立即(处理: 数字): 无值;

    //@@{ 置立即:setImmediate, 处理程序:handler, 参数组:args }
    置立即(处理程序: (...参数组: 任意[]) => 无值): 数字;

    //@@{ 处理程序:handler, 参数组:args }
    置立即(处理程序: 任意, ...参数组: 任意[]): 数字;

}

//@@{ XMLHttp请求事件目标事件映射_:XMLHttpRequestEventTargetEventMap }
接口 XMLHttp请求事件目标事件映射_ {

    //@@{ "终止":"abort", 事件_:Event }
    "终止": 事件_;

    //@@{ "错误":"error", 错误事件_:ErrorEvent }
    "错误": 错误事件_;

    //@@{ "加载":"load", 事件_:Event }
    "加载": 事件_;

    //@@{ "加载结束":"loadend", 进度事件_:ProgressEvent }
    "加载结束": 进度事件_;

    //@@{ "加载开始":"loadstart", 事件_:Event }
    "加载开始": 事件_;

    //@@{ "进度":"progress", 进度事件_:ProgressEvent }
    "进度": 进度事件_;

    //@@{ "超时":"timeout", 进度事件_:ProgressEvent }
    "超时": 进度事件_;

}

//@@{ XMLHttp请求事件目标_:XMLHttpRequestEventTarget }
接口 XMLHttp请求事件目标_ {

    //@@{ 正在终止:onabort, XMLHttp请求_:XMLHttpRequest, 事件_:Event }
    正在终止: (本体: XMLHttp请求_, ev: 事件_) => 任意;

    //@@{ 正在错误:onerror, XMLHttp请求_:XMLHttpRequest, 错误事件_:ErrorEvent }
    正在错误: (本体: XMLHttp请求_, ev: 错误事件_) => 任意;

    //@@{ 正在加载:onload, XMLHttp请求_:XMLHttpRequest, 事件_:Event }
    正在加载: (本体: XMLHttp请求_, ev: 事件_) => 任意;

    //@@{ 正在加载结束:onloadend, XMLHttp请求_:XMLHttpRequest, 进度事件_:ProgressEvent }
    正在加载结束: (本体: XMLHttp请求_, ev: 进度事件_) => 任意;

    //@@{ 正在加载开始:onloadstart, XMLHttp请求_:XMLHttpRequest, 事件_:Event }
    正在加载开始: (本体: XMLHttp请求_, ev: 事件_) => 任意;

    //@@{ 正在进度:onprogress, XMLHttp请求_:XMLHttpRequest, 进度事件_:ProgressEvent }
    正在进度: (本体: XMLHttp请求_, ev: 进度事件_) => 任意;

    //@@{ 正在超时:ontimeout, XMLHttp请求_:XMLHttpRequest, 进度事件_:ProgressEvent }
    正在超时: (本体: XMLHttp请求_, ev: 进度事件_) => 任意;

    //@@{ 添加事件监听器:addEventListener, XMLHttp请求事件目标事件映射_:XMLHttpRequestEventTargetEventMap, 类型:type, 侦听器:listener, XMLHttp请求事件目标_:XMLHttpRequestEventTarget, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 XMLHttp请求事件目标事件映射_>(类型: K, 侦听器: (本体: XMLHttp请求事件目标_, ev: XMLHttp请求事件目标事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

//@@{ 广播频道_:BroadcastChannel, 事件目标_:EventTarget }
接口 广播频道_ 扩展 事件目标_ {

    //@@{ 名字:name }
    只读 名字: 文字;

    //@@{ 正在消息:onmessage, 消息事件_:MessageEvent }
    正在消息: (ev: 消息事件_) => 任意;

    //@@{ 正在消息错误:onmessageerror, 消息事件_:MessageEvent }
    正在消息错误: (ev: 消息事件_) => 任意;

    //@@{ 关闭:close }
    关闭(): 无值;

    //@@{ 发布消息:postMessage, 消息:message }
    发布消息(消息: 任意): 无值;

    //@@{ 添加事件监听器:addEventListener, 广播频道事件映射_:BroadcastChannelEventMap, 类型:type, 侦听器:listener, 广播频道_:BroadcastChannel, 使用捕获:useCapture }
    添加事件监听器<K 扩展 键为 广播频道事件映射_>(类型: K, 侦听器: (本体: 广播频道_, ev: 广播频道事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

    //@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
    添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

}

声明 值量 广播频道_: {

    //@@{ 原型:prototype, 广播频道_:BroadcastChannel }
    原型: 广播频道_;

    //@@{ 名字:name, 广播频道_:BroadcastChannel }
    新建(名字: 文字): 广播频道_;

};

//@@{ 广播频道事件映射_:BroadcastChannelEventMap }
接口 广播频道事件映射_ {

    //@@{ 消息:message, 消息事件_:MessageEvent }
    消息: 消息事件_;

    //@@{ 消息错误:messageerror, 消息事件_:MessageEvent }
    消息错误: 消息事件_;

}

接口 错误事件初始化_ {

    消息?: 文字;

    文件名?: 文字;

    行数?: 数字;

    列数?: 数字;

    错误?: 任意;

}

//@@{ 存储事件初始化_:StorageEventInit, 事件初始化_:EventInit }
接口 存储事件初始化_ 扩展 事件初始化_ {

    //@@{ 键:key }
    键?: 文字;

    //@@{ 旧值:oldValue }
    旧值?: 文字;

    //@@{ 新值:newValue }
    新值?: 文字;

    url: 文字;

    //@@{ 存储区域:storageArea, 存储_:Storage }
    存储区域?: 存储_;

}

//@@{ 画板2D上下文特性_:Canvas2DContextAttributes }
接口 画板2D上下文特性_ {

    //@@{ 透明:alpha }
    透明?: 真假;

    //@@{ 将读经常:willReadFrequently }
    将读经常?: 真假;

    //@@{ 存储:storage }
    存储?: 真假;

    //@@{ 特性:attribute }
    [特性: 文字]: 真假 | 文字 | 未定;

}

//@@{ 位图图像选项_:ImageBitmapOptions }
接口 位图图像选项_ {

    //@@{ 图像取向:imageOrientation, "没有":"none", "翻转Y":"flipY" }
    图像取向?: "没有" | "翻转Y";

    //@@{ 自左乘阿尔法:premultiplyAlpha, "没有":"none", "自左乘":"premultiply", "默认":"default" }
    自左乘阿尔法?: "没有" | "自左乘" | "默认";

    //@@{ 颜色空间转换:colorSpaceConversion, "没有":"none", "默认":"default" }
    颜色空间转换?: "没有" | "默认";

    //@@{ 调整宽度:resizeWidth }
    调整宽度?: 数字;

    //@@{ 调整高度:resizeHeight }
    调整高度?: 数字;

    //@@{ 调整质量:resizeQuality, "像素化":"pixelated", "低":"low", "媒介":"medium", "高":"high" }
    调整质量?: "像素化" | "低" | "媒介" | "高";

}

//@@{ 位图图像_:ImageBitmap }
接口 位图图像_ {

    //@@{ 宽度:width }
    只读 宽度: 数字;

    //@@{ 高度:height }
    只读 高度: 数字;

    //@@{ 关闭:close }
    关闭(): 无值;

}

//@@{ URL搜索参数_:URLSearchParams }
接口 URL搜索参数_ {

    /**
     * Appends a specified key/value pair as a new search parameter.
     */

    //@@{ 附加:append, 名字:name, 值:value }
    附加(名字: 文字, 值: 文字): 无值;

    /**
     * Deletes the given search parameter, and its associated value, from the list of all search parameters.
     */

    //@@{ 删除:delete, 名字:name }
    删除(名字: 文字): 无值;

    /**
     * Returns the first value associated to the given search parameter.
     */

    //@@{ 获取:get, 名字:name }
    获取(名字: 文字): 文字 | 空值;

    /**
     * Returns all the values association with a given search parameter.
     */

    //@@{ 取所有:getAll, 名字:name }
    取所有(名字: 文字): 文字[];

    /**
     * Returns a Boolean indicating if such a search parameter exists.
     */

    //@@{ 存在:has, 名字:name }
    存在(名字: 文字): 真假;

    /**
     * Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.
     */

    //@@{ 设置:set, 名字:name, 值:value }
    设置(名字: 文字, 值: 文字): 无值;

}

声明 值量 URL搜索参数_: {

    //@@{ 原型:prototype, URL搜索参数_:URLSearchParams }
    原型: URL搜索参数_;

    /**
     * Constructor returning a URLSearchParams object.
     */

    //@@{ 初始化:init, URL搜索参数_:URLSearchParams }
    新建 (初始化?: 文字 | URL搜索参数_): URL搜索参数_;

};

//@@{ 节点列表的_:NodeListOf, T节点:TNode, 节点_:Node, 节点列表_:NodeList }
接口 节点列表的_<T节点 扩展 节点_> 扩展 节点列表_ {

    //@@{ 长度:length }
    长度: 数字;

    //@@{ 项目:item, 索引:index, T节点:TNode }
    项目(索引: 数字): T节点;

    //@@{ 索引:index, T节点:TNode }
    [索引: 数字]: T节点;

}

//@@{ HTML集合的_:HTMLCollectionOf, 元素_:Element, HTML集合_:HTMLCollection }
接口 HTML集合的_<T 扩展 元素_> 扩展 HTML集合_ {

    //@@{ 项目:item, 索引:index }
    项目(索引: 数字): T;

    //@@{ 命名项目:namedItem, 名字:name }
    命名项目(名字: 文字): T;

    //@@{ 索引:index }
    [索引: 数字]: T;

}

//@@{ 二进制对象属性包_:BlobPropertyBag }
接口 二进制对象属性包_ {

    //@@{ 类型:type }
    类型?: 文字;

    //@@{ 结局:endings }
    结局?: 文字;

}

//@@{ 文件属性包_:FilePropertyBag, 二进制对象属性包_:BlobPropertyBag }
接口 文件属性包_ 扩展 二进制对象属性包_ {

    //@@{ 最后修改:lastModified }
    最后修改?: 数字;

}

//@@{ 事件监听器对象_:EventListenerObject }
接口 事件监听器对象_ {

    //@@{ 处理事件:handleEvent, 事:evt, 事件_:Event }
    处理事件(事: 事件_): 无值;

}

//@@{ 事件初始化_:EventInit }
接口 进度事件初始化_ 扩展 事件初始化_ {

    长度可计算?: 真假;

    加载?: 数字;

    汇总?: 数字;

}

//@@{ 滚动选项_:ScrollOptions }
接口 滚动选项_ {

    //@@{ 行为:behavior, 滚动行为_:ScrollBehavior }
    行为?: 滚动行为_;

}

//@@{ 滚动到选项_:ScrollToOptions, 滚动选项_:ScrollOptions }
接口 滚动到选项_ 扩展 滚动选项_ {

    //@@{ 左:left }
    左?: 数字;

    //@@{ 顶:top }
    顶?: 数字;

}

//@@{ 滚动到视图选项_:ScrollIntoViewOptions, 滚动选项_:ScrollOptions }
接口 滚动到视图选项_ 扩展 滚动选项_ {

    //@@{ 块:block, 滚动逻辑位置_:ScrollLogicalPosition }
    块?: 滚动逻辑位置_;

    //@@{ 内联:inline, 滚动逻辑位置_:ScrollLogicalPosition }
    内联?: 滚动逻辑位置_;

}

//@@{ 剪贴板事件初始化_:ClipboardEventInit, 事件初始化_:EventInit }
接口 剪贴板事件初始化_ 扩展 事件初始化_ {

    //@@{ 数据:data }
    数据?: 文字;

    //@@{ 数据类型:dataType }
    数据类型?: 文字;

}

//@@{ IDB数组键_:IDBArrayKey, 数组_:Array, IDB有效键:IDBValidKey }
接口 IDB数组键_ 扩展 数组_<IDB有效键> {

}

//@@{ Rsa密钥创参数_:RsaKeyGenParams, 算法_:Algorithm }
接口 Rsa密钥创参数_ 扩展 算法_ {

    //@@{ 模量长度:modulusLength }
    模量长度: 数字;

    //@@{ 公共指数:publicExponent, 正整数数组8_:Uint8Array }
    公共指数: 正整数数组8_;

}

//@@{ Rsa哈希键创参数组_:RsaHashedKeyGenParams, Rsa密钥创参数_:RsaKeyGenParams }
接口 Rsa哈希键创参数组_ 扩展 Rsa密钥创参数_ {

    //@@{ 哈希:hash, 算法标识符_:AlgorithmIdentifier }
    哈希: 算法标识符_;

}

//@@{ Rsa密钥算法_:RsaKeyAlgorithm, 键算法_:KeyAlgorithm }
接口 Rsa密钥算法_ 扩展 键算法_ {

    //@@{ 模量长度:modulusLength }
    模量长度: 数字;

    //@@{ 公共指数:publicExponent, 正整数数组8_:Uint8Array }
    公共指数: 正整数数组8_;

}

//@@{ Rsa散列密钥算法_:RsaHashedKeyAlgorithm, Rsa密钥算法_:RsaKeyAlgorithm }
接口 Rsa散列密钥算法_ 扩展 Rsa密钥算法_ {

    //@@{ 哈希:hash, 算法标识符_:AlgorithmIdentifier }
    哈希: 算法标识符_;

}

//@@{ Rsa散列导入参数_:RsaHashedImportParams }
接口 Rsa散列导入参数_ {

    //@@{ 哈希:hash, 算法标识符_:AlgorithmIdentifier }
    哈希: 算法标识符_;

}

//@@{ RsaPss参数_:RsaPssParams }
接口 RsaPss参数_ {

    //@@{ 盐的长度:saltLength }
    盐的长度: 数字;

}

//@@{ RsaOaep参数_:RsaOaepParams, 算法_:Algorithm }
接口 RsaOaep参数_ 扩展 算法_ {

    //@@{ 标签:label, 缓冲源_:BufferSource }
    标签?: 缓冲源_;

}

//@@{ Ecdsa参数_:EcdsaParams, 算法_:Algorithm }
接口 Ecdsa参数_ 扩展 算法_ {

    //@@{ 哈希:hash, 算法标识符_:AlgorithmIdentifier }
    哈希: 算法标识符_;

}

//@@{ Ec键创参数个数_:EcKeyGenParams, 算法_:Algorithm }
接口 Ec键创参数个数_ 扩展 算法_ {

    //@@{ 命名曲线:namedCurve }
    命名曲线: 文字;

}

//@@{ EC键算法_:EcKeyAlgorithm, 键算法_:KeyAlgorithm }
接口 EC键算法_ 扩展 键算法_ {

    //@@{ 类型曲线:typedCurve }
    类型曲线: 文字;

}

//@@{ EC键进口参数组_:EcKeyImportParams, 算法_:Algorithm }
接口 EC键进口参数组_ 扩展 算法_ {

    //@@{ 命名曲线:namedCurve }
    命名曲线: 文字;

}

//@@{ Ecdh键推导出参数组_:EcdhKeyDeriveParams, 算法_:Algorithm }
接口 Ecdh键推导出参数组_ 扩展 算法_ {

    //@@{ 公共:public, 加密密钥_:CryptoKey }
    公共: 加密密钥_;

}

//@@{ AesCtr参数_:AesCtrParams, 算法_:Algorithm }
接口 AesCtr参数_ 扩展 算法_ {

    //@@{ 计数器:counter, 缓冲源_:BufferSource }
    计数器: 缓冲源_;

    //@@{ 长度:length }
    长度: 数字;

}

//@@{ Aes键算法_:AesKeyAlgorithm, 键算法_:KeyAlgorithm }
接口 Aes键算法_ 扩展 键算法_ {

    //@@{ 长度:length }
    长度: 数字;

}

//@@{ Aes键创参数组_:AesKeyGenParams, 算法_:Algorithm }
接口 Aes键创参数组_ 扩展 算法_ {

    //@@{ 长度:length }
    长度: 数字;

}

//@@{ Aes派生的键参数组_:AesDerivedKeyParams, 算法_:Algorithm }
接口 Aes派生的键参数组_ 扩展 算法_ {

    //@@{ 长度:length }
    长度: 数字;

}

//@@{ AesCbc参数_:AesCbcParams, 算法_:Algorithm }
接口 AesCbc参数_ 扩展 算法_ {

    //@@{ 缓冲源_:BufferSource }
    iv: 缓冲源_;

}

//@@{ AesCmac参数组_:AesCmacParams, 算法_:Algorithm }
接口 AesCmac参数组_ 扩展 算法_ {

    //@@{ 长度:length }
    长度: 数字;

}

//@@{ AesGcm参数_:AesGcmParams, 算法_:Algorithm }
接口 AesGcm参数_ 扩展 算法_ {

    //@@{ 缓冲源_:BufferSource }
    iv: 缓冲源_;

    //@@{ 额外的数据:additionalData, 缓冲源_:BufferSource }
    额外的数据?: 缓冲源_;

    //@@{ 标签长度:tagLength }
    标签长度?: 数字;

}

//@@{ AesCbf参数组_:AesCfbParams, 算法_:Algorithm }
接口 AesCbf参数组_ 扩展 算法_ {

    //@@{ 缓冲源_:BufferSource }
    iv: 缓冲源_;

}

//@@{ Hmac进口参数_:HmacImportParams, 算法_:Algorithm }
接口 Hmac进口参数_ 扩展 算法_ {

    //@@{ 哈希:hash, 算法标识符_:AlgorithmIdentifier }
    哈希?: 算法标识符_;

    //@@{ 长度:length }
    长度?: 数字;

}

//@@{ Hmac键算法_:HmacKeyAlgorithm, 键算法_:KeyAlgorithm }
接口 Hmac键算法_ 扩展 键算法_ {

    //@@{ 哈希:hash, 算法标识符_:AlgorithmIdentifier }
    哈希: 算法标识符_;

    //@@{ 长度:length }
    长度: 数字;

}

//@@{ Hmac键创参数组_:HmacKeyGenParams, 算法_:Algorithm }
接口 Hmac键创参数组_ 扩展 算法_ {

    //@@{ 哈希:hash, 算法标识符_:AlgorithmIdentifier }
    哈希: 算法标识符_;

    //@@{ 长度:length }
    长度?: 数字;

}

//@@{ DH键创参数组_:DhKeyGenParams, 算法_:Algorithm }
接口 DH键创参数组_ 扩展 算法_ {

    //@@{ 首要的:prime, 正整数数组8_:Uint8Array }
    首要的: 正整数数组8_;

    //@@{ 发动机:generator, 正整数数组8_:Uint8Array }
    发动机: 正整数数组8_;

}

//@@{ Dh键算法_:DhKeyAlgorithm, 键算法_:KeyAlgorithm }
接口 Dh键算法_ 扩展 键算法_ {

    //@@{ 首要的:prime, 正整数数组8_:Uint8Array }
    首要的: 正整数数组8_;

    //@@{ 发动机:generator, 正整数数组8_:Uint8Array }
    发动机: 正整数数组8_;

}

//@@{ Dh键获得参数_:DhKeyDeriveParams, 算法_:Algorithm }
接口 Dh键获得参数_ 扩展 算法_ {

    //@@{ 公共:public, 加密密钥_:CryptoKey }
    公共: 加密密钥_;

}

//@@{ Dh进口键参数_:DhImportKeyParams, 算法_:Algorithm }
接口 Dh进口键参数_ 扩展 算法_ {

    //@@{ 首要的:prime, 正整数数组8_:Uint8Array }
    首要的: 正整数数组8_;

    //@@{ 发动机:generator, 正整数数组8_:Uint8Array }
    发动机: 正整数数组8_;

}

//@@{ 合并参数_:ConcatParams, 算法_:Algorithm }
接口 合并参数_ 扩展 算法_ {

    //@@{ 哈希:hash, 算法标识符_:AlgorithmIdentifier }
    哈希?: 算法标识符_;

    //@@{ 算法Id:algorithmId, 正整数数组8_:Uint8Array }
    算法Id: 正整数数组8_;

    //@@{ 正整数数组8_:Uint8Array }
    partyUInfo: 正整数数组8_;

    //@@{ 正整数数组8_:Uint8Array }
    partyVInfo: 正整数数组8_;

    //@@{ 公开信息:publicInfo, 正整数数组8_:Uint8Array }
    公开信息?: 正整数数组8_;

    //@@{ 私有信息:privateInfo, 正整数数组8_:Uint8Array }
    私有信息?: 正整数数组8_;

}

//@@{ HkdfCtr参数_:HkdfCtrParams, 算法_:Algorithm }
接口 HkdfCtr参数_ 扩展 算法_ {

    //@@{ 哈希:hash, 算法标识符_:AlgorithmIdentifier }
    哈希: 算法标识符_;

    //@@{ 标签:label, 缓冲源_:BufferSource }
    标签: 缓冲源_;

    //@@{ 上下文:context, 缓冲源_:BufferSource }
    上下文: 缓冲源_;

}

//@@{ Pbkdf2参数_:Pbkdf2Params, 算法_:Algorithm }
接口 Pbkdf2参数_ 扩展 算法_ {

    //@@{ 盐:salt, 缓冲源_:BufferSource }
    盐: 缓冲源_;

    //@@{ 迭代:iterations }
    迭代: 数字;

    //@@{ 哈希:hash, 算法标识符_:AlgorithmIdentifier }
    哈希: 算法标识符_;

}

//@@{ Rsa其他质数信息_:RsaOtherPrimesInfo }
接口 Rsa其他质数信息_ {

    r: 文字;

    d: 文字;

    t: 文字;

}

//@@{ Json网络键_:JsonWebKey }
接口 Json网络键_ {

    kty: 文字;

    use?: 文字;

    key_ops?: 文字[];

    alg?: 文字;

    kid?: 文字;

    x5u?: 文字;

    x5c?: 文字;

    x5t?: 文字;

    ext?: 真假;

    crv?: 文字;

    x?: 文字;

    y?: 文字;

    d?: 文字;

    n?: 文字;

    e?: 文字;

    p?: 文字;

    q?: 文字;

    dp?: 文字;

    dq?: 文字;

    qi?: 文字;

    //@@{ Rsa其他质数信息_:RsaOtherPrimesInfo }
    oth?: Rsa其他质数信息_[];

    k?: 文字;

}

//@@{ 父节点_:ParentNode }
接口 父节点_ {

    //@@{ 子集:children, HTML集合_:HTMLCollection }
    只读 子集: HTML集合_;

    //@@{ 首元素子:firstElementChild, 元素_:Element }
    只读 首元素子: 元素_ | 空值;

    //@@{ 尾元素子:lastElementChild, 元素_:Element }
    只读 尾元素子: 元素_ | 空值;

    //@@{ 子元素计数:childElementCount }
    只读 子元素计数: 数字;

}

//@@{ 文档或影子根_:DocumentOrShadowRoot }
接口 文档或影子根_ {

    //@@{ 活动元素:activeElement, 元素_:Element }
    只读 活动元素: 元素_ | 空值;

    //@@{ 样式表:styleSheets, 样式表列表_:StyleSheetList }
    只读 样式表: 样式表列表_;

    //@@{ 取选择:getSelection, 选择的_:Selection }
    取选择(): 选择的_ | 空值;

    //@@{ 元素从点:elementFromPoint, 元素_:Element }
    元素从点(x: 数字, y: 数字): 元素_ | 空值;

    //@@{ 元素组从点:elementsFromPoint, 元素_:Element }
    元素组从点(x: 数字, y: 数字): 元素_[];

}

//@@{ 影子根_:ShadowRoot, 文档或影子根_:DocumentOrShadowRoot, 文档片段_:DocumentFragment }
接口 影子根_ 扩展 文档或影子根_, 文档片段_ {

    //@@{ 主机:host, 元素_:Element }
    只读 主机: 元素_;

    //@@{ 内部HTML:innerHTML }
    内部HTML: 文字;

}

//@@{ 影子根初始化_:ShadowRootInit }
接口 影子根初始化_ {

    //@@{ 模式:mode, "打开":"open", "关闭":"closed" }
    模式: "打开" | "关闭";

    //@@{ 代表焦点:delegatesFocus }
    代表焦点?: 真假;

}

//@@{ HTML限位符元素_:HTMLSlotElement, HTML元素_:HTMLElement }
接口 HTML限位符元素_ 扩展 HTML元素_ {

    //@@{ 名字:name }
    名字: 文字;

    //@@{ 分配节点:assignedNodes, 选项:options, 分配节点选项_:AssignedNodesOptions, 节点_:Node }
    分配节点(选项?: 分配节点选项_): 节点_[];

}

//@@{ 分配节点选项_:AssignedNodesOptions }
接口 分配节点选项_ {

    //@@{ 扁平化:flatten }
    扁平化?: 真假;

}

//@@{ 元素定义选项_:ElementDefinitionOptions }
接口 元素定义选项_ {

    //@@{ 扩展:extends }
    扩展: 文字;

}

//@@{ 自定义元素注册表_:CustomElementRegistry }
接口 自定义元素注册表_ {

    //@@{ 定义:define, 名字:name, 构造函数:constructor, 函数_:Function, 选项:options, 元素定义选项_:ElementDefinitionOptions }
    定义(名字: 文字, 构造函数: 函数_, 选项?: 元素定义选项_): 无值;

    //@@{ 获取:get, 名字:name }
    获取(名字: 文字): 任意;

    //@@{ 当定义:whenDefined, 名字:name, 预设等_:PromiseLike }
    当定义(名字: 文字): 预设等_<无值>;

}

//@@{ 预设拒绝事件_:PromiseRejectionEvent, 事件_:Event }
接口 预设拒绝事件_ 扩展 事件_ {

    //@@{ 预设_:promise, 预设等_:PromiseLike }
    只读 预设_: 预设等_<任意>;

    //@@{ 原因:reason }
    只读 原因: 任意;

}

//@@{ 预设拒绝事件初始化_:PromiseRejectionEventInit, 事件初始化_:EventInit }
接口 预设拒绝事件初始化_ 扩展 事件初始化_ {

    //@@{ 预设_:promise, 预设等_:PromiseLike }
    预设_: 预设等_<任意>;

    //@@{ 原因:reason }
    原因?: 任意;

}

//@@{ 事件监听器选项_:EventListenerOptions }
接口 事件监听器选项_ {

    //@@{ 捕获:capture }
    捕获?: 真假;

}

//@@{ 添加事件监听器选项_:AddEventListenerOptions, 事件监听器选项_:EventListenerOptions }
接口 添加事件监听器选项_ 扩展 事件监听器选项_ {

    //@@{ 被动:passive }
    被动?: 真假;

    //@@{ 一次:once }
    一次?: 真假;

}

//@@{ 触摸事件初始化_:TouchEventInit, 事件修饰符初始化_:EventModifierInit }
接口 触摸事件初始化_ 扩展 事件修饰符初始化_ {

    //@@{ 触摸组:touches, 触摸_:Touch }
    触摸组?: 触摸_[];

    //@@{ 触摸目标:targetTouches, 触摸_:Touch }
    触摸目标?: 触摸_[];

    //@@{ 改变触摸集:changedTouches, 触摸_:Touch }
    改变触摸集?: 触摸_[];

}

//@@{ HTML对话框元素_:HTMLDialogElement, HTML元素_:HTMLElement }
接口 HTML对话框元素_ 扩展 HTML元素_ {

    //@@{ 打开:open }
    打开: 真假;

    //@@{ 返回值:returnValue }
    返回值: 文字;

    //@@{ 关闭:close, 返回值:returnValue }
    关闭(返回值?: 文字): 无值;

    //@@{ 显示:show }
    显示(): 无值;

    //@@{ 显示模式:showModal }
    显示模式(): 无值;

}

声明 值量 HTML对话框元素_: {

    //@@{ 原型:prototype, HTML对话框元素_:HTMLDialogElement }
    原型: HTML对话框元素_;

    //@@{ HTML对话框元素_:HTMLDialogElement }
    新建(): HTML对话框元素_;

};

//@@{ HTML主体元素_:HTMLMainElement, HTML元素_:HTMLElement }
接口 HTML主体元素_ 扩展 HTML元素_ {

}

声明 值量 HTML主体元素_: {

    //@@{ 原型:prototype, HTML主体元素_:HTMLMainElement }
    原型: HTML主体元素_;

    //@@{ HTML主体元素_:HTMLMainElement }
    新建(): HTML主体元素_;

};

//@@{ HTML细节元素_:HTMLDetailsElement, HTML元素_:HTMLElement }
接口 HTML细节元素_ 扩展 HTML元素_ {

    //@@{ 打开:open }
    打开: 真假;

}

声明 值量 HTML细节元素_: {

    //@@{ 原型:prototype, HTML细节元素_:HTMLDetailsElement }
    原型: HTML细节元素_;

    //@@{ HTML细节元素_:HTMLDetailsElement }
    新建(): HTML细节元素_;

};

//@@{ HTML总结元素_:HTMLSummaryElement, HTML元素_:HTMLElement }
接口 HTML总结元素_ 扩展 HTML元素_ {

}

声明 值量 HTML总结元素_: {

    //@@{ 原型:prototype, HTML总结元素_:HTMLSummaryElement }
    原型: HTML总结元素_;

    //@@{ HTML总结元素_:HTMLSummaryElement }
    新建(): HTML总结元素_;

};

//@@{ 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 事件监听器_:EventListener, 事件监听器对象_:EventListenerObject }
声明 类型 事件侦听器或事件侦听器对象_ = 事件监听器_ | 事件监听器对象_;

//@@{ 解码错误回调_:DecodeErrorCallback }
接口 解码错误回调_ {

    //@@{ 错误:error, 文档异常_:DOMException }
    (错误: 文档异常_): 无值;

}

//@@{ 解码成功回调_:DecodeSuccessCallback }
接口 解码成功回调_ {

    //@@{ 解码数据:decodedData, 音频缓冲区_:AudioBuffer }
    (解码数据: 音频缓冲区_): 无值;

}

//@@{ 错误事件处理程序_:ErrorEventHandler }
接口 错误事件处理程序_ {

    //@@{ 消息:message, 文件名:filename, 行数:lineno, 列数:colno, 错误:error, 错误_:Error }
    (消息: 文字, 文件名?: 文字, 行数?: 数字, 列数?: 数字, 错误?: 错误_): 无值;

}

//@@{ 循环执行回调_:ForEachCallback }
接口 循环执行回调_ {

    //@@{ 键Id:keyId, 状态:status, 媒体键状态_:MediaKeyStatus }
    (键Id: 任意, 状态: 媒体键状态_): 无值;

}

//@@{ 帧请求回调_:FrameRequestCallback }
接口 帧请求回调_ {

    //@@{ 时间:time }
    (时间: 数字): 无值;

}

//@@{ 函数字符串回调_:FunctionStringCallback }
接口 函数字符串回调_ {

    //@@{ 数据:data }
    (数据: 文字): 无值;

}

//@@{ 交叉观察者回调_:IntersectionObserverCallback }
接口 交叉观察者回调_ {

    //@@{ 条目:entries, 交叉观察者条目_:IntersectionObserverEntry, 观察者:observer, 交叉观察者_:IntersectionObserver }
    (条目: 交叉观察者条目_[], 观察者: 交叉观察者_): 无值;

}

//@@{ 媒体查询列表侦听器_:MediaQueryListListener }
接口 媒体查询列表侦听器_ {

    //@@{ 媒体查询列表:mql, 媒体查询列表_:MediaQueryList }
    (媒体查询列表: 媒体查询列表_): 无值;

}

//@@{ MS执行在优先级函数回调_:MSExecAtPriorityFunctionCallback }
接口 MS执行在优先级函数回调_ {

    //@@{ 参数组:args }
    (...参数组: 任意[]): 任意;

}

//@@{ MS发射Uri回调:MSLaunchUriCallback }
接口 MS发射Uri回调 {

    (): 无值;

}

//@@{ MS不安全的函数回调_:MSUnsafeFunctionCallback }
接口 MS不安全的函数回调_ {

    (): 任意;

}

//@@{ 突变回调_:MutationCallback }
接口 突变回调_ {

    //@@{ 突变:mutations, 突变记录_:MutationRecord, 观察者:observer, 突变观察者_:MutationObserver }
    (突变: 突变记录_[], 观察者: 突变观察者_): 无值;

}

//@@{ 导航器用户媒体错误回调_:NavigatorUserMediaErrorCallback }
接口 导航器用户媒体错误回调_ {

    //@@{ 错误:error }
    (错误: MediaStreamError): 无值;

}

//@@{ 导航器用户媒体成功回调_:NavigatorUserMediaSuccessCallback }
接口 导航器用户媒体成功回调_ {

    //@@{ 流:stream, 媒体流_:MediaStream }
    (流: 媒体流_): 无值;

}

//@@{ 通知允许回调_:NotificationPermissionCallback }
接口 通知允许回调_ {

    //@@{ 许可:permission, 通知许可_:NotificationPermission }
    (许可: 通知许可_): 无值;

}

//@@{ 位置回调_:PositionCallback }
接口 位置回调_ {

    //@@{ 位置:position, 位置_:Location }
    (位置: 位置_): 无值;

}

//@@{ 位置错误回调_:PositionErrorCallback }
接口 位置错误回调_ {

    //@@{ 错误:error, 位置错误_:PositionError }
    (错误: 位置错误_): 无值;

}

//@@{ RTC对等连接错误回调_:RTCPeerConnectionErrorCallback }
接口 RTC对等连接错误回调_ {

    //@@{ 错误:error, 文档错误_:DOMError }
    (错误: 文档错误_): 无值;

}

//@@{ RTC会话描述回调_:RTCSessionDescriptionCallback }
接口 RTC会话描述回调_ {

    //@@{ 会话描述:sdp, RTC会话描述_:RTCSessionDescription }
    (会话描述: RTC会话描述_): 无值;

}

//@@{ RTC统计数据回调_:RTCStatsCallback }
接口 RTC统计数据回调_ {

    //@@{ 报告:report, RTC统计报告_:RTCStatsReport }
    (报告: RTC统计报告_): 无值;

}

//@@{ 无效的函数_:VoidFunction }
接口 无效的函数_ {

    (): 无值;

}

//@@{ HTML元素标签名称映射_:HTMLElementTagNameMap }
接口 HTML元素标签名称映射_ {

    //@@{ "超链接":"a", HTML超链接元素_:HTMLAnchorElement }
    "超链接": HTML超链接元素_;

    //@@{ "应用程序":"applet", HTML应用程序元素_:HTMLAppletElement }
    "应用程序": HTML应用程序元素_;

    //@@{ "区域":"area", HTML区域元素_:HTMLAreaElement }
    "区域": HTML区域元素_;

    //@@{ "音频":"audio", HTML音频元素_:HTMLAudioElement }
    "音频": HTML音频元素_;

    //@@{ "基":"base", HTML基元素_:HTMLBaseElement }
    "基": HTML基元素_;

    //@@{ "基字体":"basefont", HTML基字体元素_:HTMLBaseFontElement }
    "基字体": HTML基字体元素_;

    //@@{ "引用":"blockquote", HTML引用元素_:HTMLQuoteElement }
    "引用": HTML引用元素_;

    //@@{ "体":"body", HTML体元素_:HTMLBodyElement }
    "体": HTML体元素_;

    //@@{ "换行":"br", HTML换行元素_:HTMLBRElement }
    "换行": HTML换行元素_;

    //@@{ "按钮":"button", HTML按钮元素_:HTMLButtonElement }
    "按钮": HTML按钮元素_;

    //@@{ "画板":"canvas", HTML画板元素_:HTMLCanvasElement }
    "画板": HTML画板元素_;

    //@@{ "表标题":"caption", HTML表标题元素_:HTMLTableCaptionElement }
    "表标题": HTML表标题元素_;

    //@@{ "表列":"col", HTML表列元素_:HTMLTableColElement }
    "表列": HTML表列元素_;

    //@@{ "表列组":"colgroup", HTML表列元素_:HTMLTableColElement }
    "表列组": HTML表列元素_;

    //@@{ "数据":"data", HTML数据元素_:HTMLDataElement }
    "数据": HTML数据元素_;

    //@@{ "数据列表":"datalist", HTML数据列表元素_:HTMLDataListElement }
    "数据列表": HTML数据列表元素_;

    //@@{ "删除":"del", HTML模板元素_:HTMLModElement }
    "删除": HTML模板元素_;

    //@@{ "目录":"dir", HTML目录元素_:HTMLDirectoryElement }
    "目录": HTML目录元素_;

    //@@{ "块":"div", HTML块元素_:HTMLDivElement }
    "块": HTML块元素_;

    //@@{ "定义列表":"dl", HTML列表元素_:HTMLDListElement }
    "定义列表": HTML列表元素_;

    //@@{ "嵌入":"embed", HTML嵌入元素_:HTMLEmbedElement }
    "嵌入": HTML嵌入元素_;

    //@@{ "分组":"fieldset", HTML分组元素_:HTMLFieldSetElement }
    "分组": HTML分组元素_;

    //@@{ "字体":"font", HTML字体元素_:HTMLFontElement }
    "字体": HTML字体元素_;

    //@@{ "表单":"form", HTML表单元素_:HTMLFormElement }
    "表单": HTML表单元素_;

    //@@{ "框架":"frame", HTML框架元素_:HTMLFrameElement }
    "框架": HTML框架元素_;

    //@@{ "框架分组":"frameset", HTML框架分组元素_:HTMLFrameSetElement }
    "框架分组": HTML框架分组元素_;

    //@@{ "标题1":"h1", HTML标题元素_:HTMLHeadingElement }
    "标题1": HTML标题元素_;

    //@@{ "标题2":"h2", HTML标题元素_:HTMLHeadingElement }
    "标题2": HTML标题元素_;

    //@@{ "标题3":"h3", HTML标题元素_:HTMLHeadingElement }
    "标题3": HTML标题元素_;

    //@@{ "标题4":"h4", HTML标题元素_:HTMLHeadingElement }
    "标题4": HTML标题元素_;

    //@@{ "标题5":"h5", HTML标题元素_:HTMLHeadingElement }
    "标题5": HTML标题元素_;

    //@@{ "标题6":"h6", HTML标题元素_:HTMLHeadingElement }
    "标题6": HTML标题元素_;

    //@@{ "头部":"head", HTML头部元素_:HTMLHeadElement }
    "头部": HTML头部元素_;

    //@@{ "水平线":"hr", HTML水平线元素_:HTMLHRElement }
    "水平线": HTML水平线元素_;

    //@@{ "超文本标记":"html", HTML超文本标记元素_:HTMLHtmlElement }
    "超文本标记": HTML超文本标记元素_;

    //@@{ "内联框架":"iframe", HTML内联框架元素_:HTMLIFrameElement }
    "内联框架": HTML内联框架元素_;

    //@@{ "图":"img", HTML图像元素_:HTMLImageElement }
    "图": HTML图像元素_;

    //@@{ "输入":"input", HTML输入元素_:HTMLInputElement }
    "输入": HTML输入元素_;

    //@@{ "插入":"ins", HTML模板元素_:HTMLModElement }
    "插入": HTML模板元素_;

    //@@{ "对话框":"isindex", HTML未知元素_:HTMLUnknownElement }
    "对话框": HTML未知元素_;

    //@@{ "标签":"label", HTML标签元素_:HTMLLabelElement }
    "标签": HTML标签元素_;

    //@@{ "组合":"legend", HTML分组标题元素_:HTMLLegendElement }
    "组合": HTML分组标题元素_;

    //@@{ "列表":"li", HTML列表项元素_:HTMLLIElement }
    "列表": HTML列表项元素_;

    //@@{ "外部链接":"link", HTML外部样式元素_:HTMLLinkElement }
    "外部链接": HTML外部样式元素_;

    //@@{ "清单":"listing", HTML预处理元素_:HTMLPreElement }
    "清单": HTML预处理元素_;

    //@@{ "图像映射":"map", HTML图像映射元素_:HTMLMapElement }
    "图像映射": HTML图像映射元素_;

    //@@{ "文字滚动":"marquee", HTML字幕元素_:HTMLMarqueeElement }
    "文字滚动": HTML字幕元素_;

    //@@{ "菜单":"menu", HTML菜单元素_:HTMLMenuElement }
    "菜单": HTML菜单元素_;

    //@@{ "元":"meta", HTML元数据元素_:HTMLMetaElement }
    "元": HTML元数据元素_;

    //@@{ "度量":"meter", HTML度量表元素_:HTMLMeterElement }
    "度量": HTML度量表元素_;

    //@@{ "下个id":"nextid", HTML未知元素_:HTMLUnknownElement }
    "下个id": HTML未知元素_;

    //@@{ "对象":"object", HTML对象元素_:HTMLObjectElement }
    "对象": HTML对象元素_;

    //@@{ "有序列表":"ol", HTML有序列表元素_:HTMLOListElement }
    "有序列表": HTML有序列表元素_;

    //@@{ "选项组":"optgroup", HTML选项组元素_:HTMLOptGroupElement }
    "选项组": HTML选项组元素_;

    //@@{ "选项":"option", HTML选项元素_:HTMLOptionElement }
    "选项": HTML选项元素_;

    //@@{ "输出":"output", HTML输出元素_:HTMLOutputElement }
    "输出": HTML输出元素_;

    //@@{ "段落":"p", HTML段落元素_:HTMLParagraphElement }
    "段落": HTML段落元素_;

    //@@{ "参数":"param", HTML参数元素_:HTMLParamElement }
    "参数": HTML参数元素_;

    //@@{ "照片":"picture", HTML照片元素_:HTMLPictureElement }
    "照片": HTML照片元素_;

    //@@{ "预处理":"pre", HTML预处理元素_:HTMLPreElement }
    "预处理": HTML预处理元素_;

    //@@{ "进度":"progress", HTML进度元素_:HTMLProgressElement }
    "进度": HTML进度元素_;

    //@@{ "引号":"q", HTML引用元素_:HTMLQuoteElement }
    "引号": HTML引用元素_;

    //@@{ "脚本":"script", HTML脚本元素_:HTMLScriptElement }
    "脚本": HTML脚本元素_;

    //@@{ "选择":"select", HTML选择元素_:HTMLSelectElement }
    "选择": HTML选择元素_;

    //@@{ "来源":"source", HTML来源元素_:HTMLSourceElement }
    "来源": HTML来源元素_;

    //@@{ "跨度":"span", HTML跨度元素_:HTMLSpanElement }
    "跨度": HTML跨度元素_;

    //@@{ "样式":"style", HTML样式元素_:HTMLStyleElement }
    "样式": HTML样式元素_;

    //@@{ "表":"table", HTML表元素_:HTMLTableElement }
    "表": HTML表元素_;

    //@@{ "表体":"tbody", HTML表部分元素_:HTMLTableSectionElement }
    "表体": HTML表部分元素_;

    //@@{ "列":"td", HTML表数据单元格元素_:HTMLTableDataCellElement }
    "列": HTML表数据单元格元素_;

    //@@{ "模板":"template", HTML模板元素_:HTMLModElement }
    "模板": HTML模板元素_;

    //@@{ "文本区域":"textarea", HTML文本区域元素_:HTMLTextAreaElement }
    "文本区域": HTML文本区域元素_;

    //@@{ "表脚":"tfoot", HTML表部分元素_:HTMLTableSectionElement }
    "表脚": HTML表部分元素_;

    //@@{ "表头列":"th", HTML表头单元格_:HTMLTableHeaderCellElement }
    "表头列": HTML表头单元格_;

    //@@{ "表头":"thead", HTML表部分元素_:HTMLTableSectionElement }
    "表头": HTML表部分元素_;

    //@@{ "时间":"time", HTML时间元素_:HTMLTimeElement }
    "时间": HTML时间元素_;

    //@@{ "标题":"title", HTML标题元素_:HTMLHeadingElement }
    "标题": HTML标题元素_;

    //@@{ "行":"tr", HTML表行元素_:HTMLTableRowElement }
    "行": HTML表行元素_;

    //@@{ "轨道":"track", HTML轨道元素_:HTMLTrackElement }
    "轨道": HTML轨道元素_;

    //@@{ "无序列表":"ul", HTML无序列表元素_:HTMLUListElement }
    "无序列表": HTML无序列表元素_;

    //@@{ "视频":"video", HTML视频元素_:HTMLVideoElement }
    "视频": HTML视频元素_;

    //@@{ "网络视图":"x-ms-webview", MSHTML网络视图元素_:MSHTMLWebViewElement }
    "网络视图": MSHTML网络视图元素_;

    //@@{ "字符串片段":"xmp", HTML预处理元素_:HTMLPreElement }
    "字符串片段": HTML预处理元素_;

}

//@@{ 元素标签名称映射_:ElementTagNameMap, HTML元素标签名称映射_:HTMLElementTagNameMap }
接口 元素标签名称映射_ 扩展 HTML元素标签名称映射_ {

    //@@{ "简写":"abbr", HTML元素_:HTMLElement }
    "简写": HTML元素_;

    //@@{ "首字母缩写":"acronym", HTML元素_:HTMLElement }
    "首字母缩写": HTML元素_;

    //@@{ "地址":"address", HTML元素_:HTMLElement }
    "地址": HTML元素_;

    //@@{ "文章":"article", HTML元素_:HTMLElement }
    "文章": HTML元素_;

    //@@{ "侧栏":"aside", HTML元素_:HTMLElement }
    "侧栏": HTML元素_;

    //@@{ "加粗":"b", HTML元素_:HTMLElement }
    "加粗": HTML元素_;

    //@@{ "覆盖方向":"bdo", HTML元素_:HTMLElement }
    "覆盖方向": HTML元素_;

    //@@{ "加大":"big", HTML元素_:HTMLElement }
    "加大": HTML元素_;

    //@@{ "中心":"center", HTML元素_:HTMLElement }
    "中心": HTML元素_;

    //@@{ "圆":"circle", SVG圆元素_:SVGCircleElement }
    "圆": SVG圆元素_;

    //@@{ "摘录":"cite", HTML元素_:HTMLElement }
    "摘录": HTML元素_;

    //@@{ "剪切路径":"clippath", SVG剪切路径元素_:SVGClipPathElement }
    "剪切路径": SVG剪切路径元素_;

    //@@{ "代码":"code", HTML元素_:HTMLElement }
    "代码": HTML元素_;

    //@@{ "定义内容":"dd", HTML元素_:HTMLElement }
    "定义内容": HTML元素_;

    //@@{ "引用容器":"defs", SVG预定元素:SVGDefsElement }
    "引用容器": SVG预定元素;

    //@@{ "描述":"desc", SVG纯文本元素_:SVGDescElement }
    "描述": SVG纯文本元素_;

    //@@{ "斜体":"dfn", HTML元素_:HTMLElement }
    "斜体": HTML元素_;

    //@@{ "项目":"dt", HTML元素_:HTMLElement }
    "项目": HTML元素_;

    //@@{ "椭圆":"ellipse", SVG椭圆元素_:SVGEllipseElement }
    "椭圆": SVG椭圆元素_;

    //@@{ "强调":"em", HTML元素_:HTMLElement }
    "强调": HTML元素_;

    //@@{ "滤镜":"feblend", SVG滤镜混合元素_:SVGFEBlendElement }
    "滤镜": SVG滤镜混合元素_;

    //@@{ "滤镜颜色矩阵":"fecolormatrix", SVG滤镜颜色矩阵元素_:SVGFEColorMatrixElement }
    "滤镜颜色矩阵": SVG滤镜颜色矩阵元素_;

    //@@{ "滤镜组件转移":"fecomponenttransfer", SVG滤镜组件转移元素_:SVGFEComponentTransferElement }
    "滤镜组件转移": SVG滤镜组件转移元素_;

    //@@{ "滤镜复合":"fecomposite", SVG滤镜复合元素_:SVGFECompositeElement }
    "滤镜复合": SVG滤镜复合元素_;

    //@@{ "滤镜卷积矩阵":"feconvolvematrix", SVG滤镜卷积矩阵元素_:SVGFEConvolveMatrixElement }
    "滤镜卷积矩阵": SVG滤镜卷积矩阵元素_;

    //@@{ "滤镜扩散灯光":"fediffuselighting", SVG滤镜扩散灯光元素_:SVGFEDiffuseLightingElement }
    "滤镜扩散灯光": SVG滤镜扩散灯光元素_;

    //@@{ "滤镜位移映射":"fedisplacementmap", SVG滤镜位移映射元素_:SVGFEDisplacementMapElement }
    "滤镜位移映射": SVG滤镜位移映射元素_;

    //@@{ "漫反射灯光":"fedistantlight", SVGFE漫反射灯光元素_:SVGFEDistantLightElement }
    "漫反射灯光": SVGFE漫反射灯光元素_;

    //@@{ "滤镜洪水":"feflood", SVG滤镜洪水元素_:SVGFEFloodElement }
    "滤镜洪水": SVG滤镜洪水元素_;

    //@@{ "滤镜透明函数":"fefunca", SVG滤镜透明函数元素_:SVGFEFuncAElement }
    "滤镜透明函数": SVG滤镜透明函数元素_;

    //@@{ "镜蓝函数":"fefuncb", SVG滤镜蓝函数元素_:SVGFEFuncBElement }
    "镜蓝函数": SVG滤镜蓝函数元素_;

    //@@{ "滤镜绿函数":"fefuncg", SVG滤镜绿函数元素_:SVGFEFuncGElement }
    "滤镜绿函数": SVG滤镜绿函数元素_;

    //@@{ "滤镜红函数":"fefuncr", SVG滤镜红函数元素_:SVGFEFuncRElement }
    "滤镜红函数": SVG滤镜红函数元素_;

    //@@{ "滤镜高斯模糊":"fegaussianblur", SVG滤镜高斯模糊元素_:SVGFEGaussianBlurElement }
    "滤镜高斯模糊": SVG滤镜高斯模糊元素_;

    //@@{ "滤镜图像":"feimage", SVG滤镜图像元素_:SVGFEImageElement }
    "滤镜图像": SVG滤镜图像元素_;

    //@@{ "滤镜合并":"femerge", SVG滤镜合并元素_:SVGFEMergeElement }
    "滤镜合并": SVG滤镜合并元素_;

    //@@{ "滤镜合并节点":"femergenode", SVG滤镜合并节点元素_:SVGFEMergeNodeElement }
    "滤镜合并节点": SVG滤镜合并节点元素_;

    //@@{ "滤镜形态":"femorphology", SVG滤镜形态元素_:SVGFEMorphologyElement }
    "滤镜形态": SVG滤镜形态元素_;

    //@@{ "滤镜偏移":"feoffset", SVG滤镜偏移元素_:SVGFEOffsetElement }
    "滤镜偏移": SVG滤镜偏移元素_;

    //@@{ "滤镜点灯光":"fepointlight", SVG滤镜点灯光元素_:SVGFEPointLightElement }
    "滤镜点灯光": SVG滤镜点灯光元素_;

    //@@{ "滤镜镜面灯光":"fespecularlighting", SVG滤镜镜面灯光元素_:SVGFESpecularLightingElement }
    "滤镜镜面灯光": SVG滤镜镜面灯光元素_;

    //@@{ "滤镜聚灯光":"fespotlight", SVG滤镜聚灯光元素_:SVGFESpotLightElement }
    "滤镜聚灯光": SVG滤镜聚灯光元素_;

    //@@{ "滤镜瓷砖":"fetile", SVG滤镜瓷砖元素_:SVGFETileElement }
    "滤镜瓷砖": SVG滤镜瓷砖元素_;

    //@@{ "滤镜动荡":"feturbulence", SVG滤镜动荡元素_:SVGFETurbulenceElement }
    "滤镜动荡": SVG滤镜动荡元素_;

    //@@{ "插图标题":"figcaption", HTML元素_:HTMLElement }
    "插图标题": HTML元素_;

    //@@{ "插图":"figure", HTML元素_:HTMLElement }
    "插图": HTML元素_;

    //@@{ "过滤器":"filter", SVG过滤器元素_:SVGFilterElement }
    "过滤器": SVG过滤器元素_;

    //@@{ "页脚":"footer", HTML元素_:HTMLElement }
    "页脚": HTML元素_;

    //@@{ "外部对象":"foreignobject", SVG外部对象元素_:SVGForeignObjectElement }
    "外部对象": SVG外部对象元素_;

    //@@{ "组":"g", SVG组元素_:SVGGElement }
    "组": SVG组元素_;

    //@@{ "页眉":"header", HTML元素_:HTMLElement }
    "页眉": HTML元素_;

    //@@{ "标题组":"hgroup", HTML元素_:HTMLElement }
    "标题组": HTML元素_;

    //@@{ "斜体文本":"i", HTML元素_:HTMLElement }
    "斜体文本": HTML元素_;

    //@@{ "图像":"image", SVG图像元素_:SVGImageElement }
    "图像": SVG图像元素_;

    //@@{ "键盘键":"kbd", HTML元素_:HTMLElement }
    "键盘键": HTML元素_;

    //@@{ "注册机":"keygen", HTML元素_:HTMLElement }
    "注册机": HTML元素_;

    //@@{ "线":"line", SVG线元素_:SVGLineElement }
    "线": SVG线元素_;

    //@@{ "线性渐变":"lineargradient", SVG线性渐变元素_:SVGLinearGradientElement }
    "线性渐变": SVG线性渐变元素_;

    //@@{ "标记出":"mark", HTML元素_:HTMLElement }
    "标记出": HTML元素_;

    //@@{ "标记":"marker", SVG标记元素_:SVGMarkerElement }
    "标记": SVG标记元素_
    //@@{ "遮罩":"mask", SVG遮罩元素_:SVGMaskElement }
    "遮罩": SVG遮罩元素_;

    //@@{ "元数据":"metadata", SVG元数据元素_:SVGMetadataElement }
    "元数据": SVG元数据元素_;

    //@@{ "导航":"nav", HTML元素_:HTMLElement }
    "导航": HTML元素_;

    //@@{ "强制不换行":"nobr", HTML元素_:HTMLElement }
    "强制不换行": HTML元素_;

    //@@{ "无框架":"noframes", HTML元素_:HTMLElement }
    "无框架": HTML元素_;

    //@@{ "无脚本":"noscript", HTML元素_:HTMLElement }
    "无脚本": HTML元素_;

    //@@{ "路径":"path", SVG路径元素_:SVGPathElement }
    "路径": SVG路径元素_;

    //@@{ "模式":"pattern", SVG模式元素_:SVGPatternElement }
    "模式": SVG模式元素_;

    //@@{ "明文":"plaintext", HTML元素_:HTMLElement }
    "明文": HTML元素_;

    //@@{ "多边形":"polygon", SVG多边形元素_:SVGPolygonElement }
    "多边形": SVG多边形元素_;

    //@@{ "多段线":"polyline", SVG折线元素_:SVGPolylineElement }
    "多段线": SVG折线元素_;

    //@@{ "径向渐变":"radialgradient", SVG径向渐变元素_:SVGRadialGradientElement }
    "径向渐变": SVG径向渐变元素_;

    //@@{ "矩形":"rect", SVG矩形元素_:SVGRectElement }
    "矩形": SVG矩形元素_;

    //@@{ "注释":"rt", HTML元素_:HTMLElement }
    "注释": HTML元素_;

    //@@{ "注音":"ruby", HTML元素_:HTMLElement }
    "注音": HTML元素_;

    //@@{ "删除线":"s", HTML元素_:HTMLElement }
    "删除线": HTML元素_;

    //@@{ "格式":"samp", HTML元素_:HTMLElement }
    "格式": HTML元素_;

    //@@{ "部分":"section", HTML元素_:HTMLElement }
    "部分": HTML元素_;

    //@@{ "小号":"small", HTML元素_:HTMLElement }
    "小号": HTML元素_;

    //@@{ "停止":"stop", SVG停止元素_:SVGStopElement }
    "停止": SVG停止元素_;

    //@@{ "删除标记":"strike", HTML元素_:HTMLElement }
    "删除标记": HTML元素_;

    //@@{ "加强":"strong", HTML元素_:HTMLElement }
    "加强": HTML元素_;

    //@@{ "下标":"sub", HTML元素_:HTMLElement }
    "下标": HTML元素_;

    //@@{ "上标":"sup", HTML元素_:HTMLElement }
    "上标": HTML元素_;

    //@@{ "矢量图形":"svg", SVGSVG元素_:SVGSVGElement }
    "矢量图形": SVGSVG元素_;

    //@@{ "分支":"switch", SVG分支元素_:SVGSwitchElement }
    "分支": SVG分支元素_;

    //@@{ "符号":"symbol", SVG符号元素_:SVGSymbolElement }
    "符号": SVG符号元素_;

    //@@{ "文本":"text", SVG文本元素_:SVGTextElement }
    "文本": SVG文本元素_;

    //@@{ "文本路径":"textpath", SVG文本路径元素_:SVGTextPathElement }
    "文本路径": SVG文本路径元素_;

    //@@{ "多行文本":"tspan", SVG文本跨度元素_:SVGTSpanElement }
    "多行文本": SVG文本跨度元素_;

    //@@{ "等宽":"tt", HTML元素_:HTMLElement }
    "等宽": HTML元素_;

    //@@{ "下划线":"u", HTML元素_:HTMLElement }
    "下划线": HTML元素_;

    //@@{ "使用":"use", SVG使用元素_:SVGUseElement }
    "使用": SVG使用元素_;

    //@@{ "变量":"var", HTML元素_:HTMLElement }
    "变量": HTML元素_;

    //@@{ "视图":"view", SVG视图元素_:SVGViewElement }
    "视图": SVG视图元素_;

    //@@{ "词":"wbr", HTML元素_:HTMLElement }
    "词": HTML元素_;

}

//@@{ 元素列表标签名称映射_:ElementListTagNameMap }
类型 元素列表标签名称映射_ = {

    //@@{ 元素标签名称映射_:ElementTagNameMap, 节点列表的_:NodeListOf }
    [key 位于 键为 元素标签名称映射_]: 节点列表的_<元素标签名称映射_[key]>

};

//@@{ 音频_:Audio, 源:src, HTML音频元素_:HTMLAudioElement }
声明 值量 音频_: { 新建(源?: 文字): HTML音频元素_; };

//@@{ 图像_:Image, 宽度:width, 高度:height, HTML图像元素_:HTMLImageElement }
声明 值量 图像_: { 新建(宽度?: 数字, 高度?: 数字): HTML图像元素_; };

//@@{ 选项_:Option, 文本:text, 值:value, 默认选中:defaultSelected, 选择的:selected, HTML选项元素_:HTMLOptionElement }
声明 值量 选项_: { 新建(文本?: 文字, 值?: 文字, 默认选中?: 真假, 选择的?: 真假): HTML选项元素_; };

//@@{ 应用程序缓存:applicationCache, 应用程序缓存_:ApplicationCache }
声明 值量 应用程序缓存: 应用程序缓存_;

//@@{ 缓存:caches, 缓存存储_:CacheStorage }
声明 值量 缓存: 缓存存储_;

//@@{ 客户信息:clientInformation, 导航器_:Navigator }
声明 值量 客户信息: 导航器_;

//@@{ 关闭的:closed }
声明 值量 关闭的: 真假;

//@@{ 加密:crypto, 加密_:Crypto }
声明 值量 加密: 加密_;

//@@{ 默认状态:defaultStatus }
声明 值量 默认状态: 文字;

//@@{ 设备像素比例:devicePixelRatio }
声明 值量 设备像素比例: 数字;

//@@{ 文档:document, 文档_:Document }
声明 值量 文档: 文档_;

//@@{ 无轨道:doNotTrack }
声明 值量 无轨道: 文字;

//@@{ 事件:event, 事件_:Event }
声明 值量 事件: 事件_ | 未定;

//@@{ 外部:external, 外部_:External }
声明 值量 外部: 外部_;

//@@{ 框架元素:frameElement, 元素_:Element }
声明 值量 框架元素: 元素_;

//@@{ 帧组:frames, 窗口_:Window }
声明 值量 帧组: 窗口_;

//@@{ 历史:history, 历史_:History }
声明 值量 历史: 历史_;

//@@{ 内部高度:innerHeight }
声明 值量 内部高度: 数字;

//@@{ 内部宽度:innerWidth }
声明 值量 内部宽度: 数字;

//@@{ 是安全上下文:isSecureContext }
声明 值量 是安全上下文: 真假;

//@@{ 长度:length }
声明 值量 长度: 数字;

//@@{ 位置:location, 位置_:Location }
声明 值量 位置: 位置_;

//@@{ 地址栏:locationbar }
声明 值量 地址栏: BarProp;

//@@{ 菜单条:menubar }
声明 值量 菜单条: BarProp;

//@@{ ms内容脚本:msContentScript, 扩展脚本API组_:ExtensionScriptApis }
声明 值量 ms内容脚本: 扩展脚本API组_;

//@@{ ms凭证:msCredentials, MS凭证_:MSCredentials }
声明 值量 ms凭证: MS凭证_;

//@@{ 名字:name }
声明 常量 名字: 不及;

//@@{ 导航器:navigator, 导航器_:Navigator }
声明 值量 导航器: 导航器_;

//@@{ 画面外缓冲:offscreenBuffering }
声明 值量 画面外缓冲: 文字 | 真假;

//@@{ 正在终止:onabort, 窗口_:Window, UI事件_:UIEvent }
声明 值量 正在终止: (本体: 窗口_, ev: UI事件_) => 任意;

//@@{ 正在在打印:onafterprint, 窗口_:Window, 事件_:Event }
声明 值量 正在在打印: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在将打印:onbeforeprint, 窗口_:Window, 事件_:Event }
声明 值量 正在将打印: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在将卸载:onbeforeunload, 窗口_:Window, 将卸载事件_:BeforeUnloadEvent }
声明 值量 正在将卸载: (本体: 窗口_, ev: 将卸载事件_) => 任意;

//@@{ 正在失去焦点:onblur, 窗口_:Window, 焦点事件_:FocusEvent }
声明 值量 正在失去焦点: (本体: 窗口_, ev: 焦点事件_) => 任意;

//@@{ 正在准备播放:oncanplay, 窗口_:Window, 事件_:Event }
声明 值量 正在准备播放: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在正常播放:oncanplaythrough, 窗口_:Window, 事件_:Event }
声明 值量 正在正常播放: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在改变:onchange, 窗口_:Window, 事件_:Event }
声明 值量 正在改变: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在点击:onclick, 窗口_:Window, 鼠标事件_:MouseEvent }
声明 值量 正在点击: (本体: 窗口_, ev: 鼠标事件_) => 任意;

//@@{ 正在校准罗盘:oncompassneedscalibration, 窗口_:Window, 事件_:Event }
声明 值量 正在校准罗盘: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在快捷菜单:oncontextmenu, 窗口_:Window, 指针事件_:PointerEvent }
声明 值量 正在快捷菜单: (本体: 窗口_, ev: 指针事件_) => 任意;

//@@{ 正在双击:ondblclick, 窗口_:Window, 鼠标事件_:MouseEvent }
声明 值量 正在双击: (本体: 窗口_, ev: 鼠标事件_) => 任意;

//@@{ 正在设备环境光:ondevicelight, 窗口_:Window, 设备环境光事件_:DeviceLightEvent }
声明 值量 正在设备环境光: (本体: 窗口_, ev: 设备环境光事件_) => 任意;

//@@{ 正在设备运动:ondevicemotion, 窗口_:Window, 设备运动事件_:DeviceMotionEvent }
声明 值量 正在设备运动: (本体: 窗口_, ev: 设备运动事件_) => 任意;

//@@{ 正在设备定位:ondeviceorientation, 窗口_:Window, 设备定位事件_:DeviceOrientationEvent }
声明 值量 正在设备定位: (本体: 窗口_, ev: 设备定位事件_) => 任意;

//@@{ 正在拖拽:ondrag, 窗口_:Window, 拖拽事件_:DragEvent }
声明 值量 正在拖拽: (本体: 窗口_, ev: 拖拽事件_) => 任意;

//@@{ 正在拖拽结束:ondragend, 窗口_:Window, 拖拽事件_:DragEvent }
声明 值量 正在拖拽结束: (本体: 窗口_, ev: 拖拽事件_) => 任意;

//@@{ 正在拖拽进入:ondragenter, 窗口_:Window, 拖拽事件_:DragEvent }
声明 值量 正在拖拽进入: (本体: 窗口_, ev: 拖拽事件_) => 任意;

//@@{ 正在拖拽离开:ondragleave, 窗口_:Window, 拖拽事件_:DragEvent }
声明 值量 正在拖拽离开: (本体: 窗口_, ev: 拖拽事件_) => 任意;

//@@{ 正在拖拽悬停:ondragover, 窗口_:Window, 拖拽事件_:DragEvent }
声明 值量 正在拖拽悬停: (本体: 窗口_, ev: 拖拽事件_) => 任意;

//@@{ 正在拖拽开始:ondragstart, 窗口_:Window, 拖拽事件_:DragEvent }
声明 值量 正在拖拽开始: (本体: 窗口_, ev: 拖拽事件_) => 任意;

//@@{ 正在拖放:ondrop, 窗口_:Window, 拖拽事件_:DragEvent }
声明 值量 正在拖放: (本体: 窗口_, ev: 拖拽事件_) => 任意;

//@@{ 正在时长改变:ondurationchange, 窗口_:Window, 事件_:Event }
声明 值量 正在时长改变: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在清空:onemptied, 窗口_:Window, 事件_:Event }
声明 值量 正在清空: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在结束了:onended, 窗口_:Window, 媒体流错误事件_:MediaStreamErrorEvent }
声明 值量 正在结束了: (本体: 窗口_, ev: 媒体流错误事件_) => 任意;

//@@{ 正在错误:onerror, 错误事件处理程序_:ErrorEventHandler }
声明 值量 正在错误: 错误事件处理程序_;

//@@{ 正在焦点:onfocus, 窗口_:Window, 焦点事件_:FocusEvent }
声明 值量 正在焦点: (本体: 窗口_, ev: 焦点事件_) => 任意;

//@@{ 正在哈希改变:onhashchange, 窗口_:Window, 哈希改变事件_:HashChangeEvent }
声明 值量 正在哈希改变: (本体: 窗口_, ev: 哈希改变事件_) => 任意;

//@@{ 正在输入:oninput, 窗口_:Window, 事件_:Event }
声明 值量 正在输入: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在无效的:oninvalid, 窗口_:Window, 事件_:Event }
声明 值量 正在无效的: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在键按下:onkeydown, 窗口_:Window, 键盘事件_:KeyboardEvent }
声明 值量 正在键按下: (本体: 窗口_, ev: 键盘事件_) => 任意;

//@@{ 正在键入:onkeypress, 窗口_:Window, 键盘事件_:KeyboardEvent }
声明 值量 正在键入: (本体: 窗口_, ev: 键盘事件_) => 任意;

//@@{ 正在键松开:onkeyup, 窗口_:Window, 键盘事件_:KeyboardEvent }
声明 值量 正在键松开: (本体: 窗口_, ev: 键盘事件_) => 任意;

//@@{ 正在加载:onload, 窗口_:Window, 事件_:Event }
声明 值量 正在加载: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在加载数据:onloadeddata, 窗口_:Window, 事件_:Event }
声明 值量 正在加载数据: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在加载元数据:onloadedmetadata, 窗口_:Window, 事件_:Event }
声明 值量 正在加载元数据: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在加载开始:onloadstart, 窗口_:Window, 事件_:Event }
声明 值量 正在加载开始: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在消息:onmessage, 窗口_:Window, 消息事件_:MessageEvent }
声明 值量 正在消息: (本体: 窗口_, ev: 消息事件_) => 任意;

//@@{ 正在鼠标按下:onmousedown, 窗口_:Window, 鼠标事件_:MouseEvent }
声明 值量 正在鼠标按下: (本体: 窗口_, ev: 鼠标事件_) => 任意;

//@@{ 正在鼠标进入:onmouseenter, 窗口_:Window, 鼠标事件_:MouseEvent }
声明 值量 正在鼠标进入: (本体: 窗口_, ev: 鼠标事件_) => 任意;

//@@{ 正在鼠标离开:onmouseleave, 窗口_:Window, 鼠标事件_:MouseEvent }
声明 值量 正在鼠标离开: (本体: 窗口_, ev: 鼠标事件_) => 任意;

//@@{ 正在鼠标移动:onmousemove, 窗口_:Window, 鼠标事件_:MouseEvent }
声明 值量 正在鼠标移动: (本体: 窗口_, ev: 鼠标事件_) => 任意;

//@@{ 正在鼠标移开:onmouseout, 窗口_:Window, 鼠标事件_:MouseEvent }
声明 值量 正在鼠标移开: (本体: 窗口_, ev: 鼠标事件_) => 任意;

//@@{ 正在鼠标悬停:onmouseover, 窗口_:Window, 鼠标事件_:MouseEvent }
声明 值量 正在鼠标悬停: (本体: 窗口_, ev: 鼠标事件_) => 任意;

//@@{ 正在鼠标松开:onmouseup, 窗口_:Window, 鼠标事件_:MouseEvent }
声明 值量 正在鼠标松开: (本体: 窗口_, ev: 鼠标事件_) => 任意;

//@@{ 正在鼠标滚轮:onmousewheel, 窗口_:Window, 轮事件_:WheelEvent }
声明 值量 正在鼠标滚轮: (本体: 窗口_, ev: 轮事件_) => 任意;

//@@{ 正在MS手势改变:onmsgesturechange, 窗口_:Window, MS手势事件_:MSGestureEvent }
声明 值量 正在MS手势改变: (本体: 窗口_, ev: MS手势事件_) => 任意;

//@@{ 正在MS手势双击:onmsgesturedoubletap, 窗口_:Window, MS手势事件_:MSGestureEvent }
声明 值量 正在MS手势双击: (本体: 窗口_, ev: MS手势事件_) => 任意;

//@@{ 正在MS手势结束:onmsgestureend, 窗口_:Window, MS手势事件_:MSGestureEvent }
声明 值量 正在MS手势结束: (本体: 窗口_, ev: MS手势事件_) => 任意;

//@@{ 正在MS手势保持:onmsgesturehold, 窗口_:Window, MS手势事件_:MSGestureEvent }
声明 值量 正在MS手势保持: (本体: 窗口_, ev: MS手势事件_) => 任意;

//@@{ 正在MS手势开始:onmsgesturestart, 窗口_:Window, MS手势事件_:MSGestureEvent }
声明 值量 正在MS手势开始: (本体: 窗口_, ev: MS手势事件_) => 任意;

//@@{ 正在MS手势点击:onmsgesturetap, 窗口_:Window, MS手势事件_:MSGestureEvent }
声明 值量 正在MS手势点击: (本体: 窗口_, ev: MS手势事件_) => 任意;

//@@{ 正在MS惯性启动:onmsinertiastart, 窗口_:Window, MS手势事件_:MSGestureEvent }
声明 值量 正在MS惯性启动: (本体: 窗口_, ev: MS手势事件_) => 任意;

//@@{ 正在MS指针取消:onmspointercancel, 窗口_:Window, MS指针事件_:MSPointerEvent }
声明 值量 正在MS指针取消: (本体: 窗口_, ev: MS指针事件_) => 任意;

//@@{ 正在MS指针按下:onmspointerdown, 窗口_:Window, MS指针事件_:MSPointerEvent }
声明 值量 正在MS指针按下: (本体: 窗口_, ev: MS指针事件_) => 任意;

//@@{ 正在MS指针进入:onmspointerenter, 窗口_:Window, MS指针事件_:MSPointerEvent }
声明 值量 正在MS指针进入: (本体: 窗口_, ev: MS指针事件_) => 任意;

//@@{ 正在MS指针离开:onmspointerleave, 窗口_:Window, MS指针事件_:MSPointerEvent }
声明 值量 正在MS指针离开: (本体: 窗口_, ev: MS指针事件_) => 任意;

//@@{ 正在MS指针移动:onmspointermove, 窗口_:Window, MS指针事件_:MSPointerEvent }
声明 值量 正在MS指针移动: (本体: 窗口_, ev: MS指针事件_) => 任意;

//@@{ 正在MS指针移出:onmspointerout, 窗口_:Window, MS指针事件_:MSPointerEvent }
声明 值量 正在MS指针移出: (本体: 窗口_, ev: MS指针事件_) => 任意;

//@@{ 正在MS指针悬停:onmspointerover, 窗口_:Window, MS指针事件_:MSPointerEvent }
声明 值量 正在MS指针悬停: (本体: 窗口_, ev: MS指针事件_) => 任意;

//@@{ 正在MS指针松开:onmspointerup, 窗口_:Window, MS指针事件_:MSPointerEvent }
声明 值量 正在MS指针松开: (本体: 窗口_, ev: MS指针事件_) => 任意;

//@@{ 正在离线:onoffline, 窗口_:Window, 事件_:Event }
声明 值量 正在离线: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在在线:ononline, 窗口_:Window, 事件_:Event }
声明 值量 正在在线: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在方向改变:onorientationchange, 窗口_:Window, 事件_:Event }
声明 值量 正在方向改变: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在页面隐藏:onpagehide, 窗口_:Window, 页面过渡事件_:PageTransitionEvent }
声明 值量 正在页面隐藏: (本体: 窗口_, ev: 页面过渡事件_) => 任意;

//@@{ 正在页面显示:onpageshow, 窗口_:Window, 页面过渡事件_:PageTransitionEvent }
声明 值量 正在页面显示: (本体: 窗口_, ev: 页面过渡事件_) => 任意;

//@@{ 正在暂停:onpause, 窗口_:Window, 事件_:Event }
声明 值量 正在暂停: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在播放:onplay, 窗口_:Window, 事件_:Event }
声明 值量 正在播放: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在播放中:onplaying, 窗口_:Window, 事件_:Event }
声明 值量 正在播放中: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在退回:onpopstate, 窗口_:Window, 回退状态事件:PopStateEvent }
声明 值量 正在退回: (本体: 窗口_, ev: 回退状态事件) => 任意;

//@@{ 正在进度:onprogress, 窗口_:Window, 进度事件_:ProgressEvent }
声明 值量 正在进度: (本体: 窗口_, ev: 进度事件_) => 任意;

//@@{ 正在播放速度改变:onratechange, 窗口_:Window, 事件_:Event }
声明 值量 正在播放速度改变: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在就绪状态改变:onreadystatechange, 窗口_:Window, 进度事件_:ProgressEvent }
声明 值量 正在就绪状态改变: (本体: 窗口_, ev: 进度事件_) => 任意;

//@@{ 正在重置:onreset, 窗口_:Window, 事件_:Event }
声明 值量 正在重置: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在调整:onresize, 窗口_:Window, UI事件_:UIEvent }
声明 值量 正在调整: (本体: 窗口_, ev: UI事件_) => 任意;

//@@{ 正在滚动:onscroll, 窗口_:Window, UI事件_:UIEvent }
声明 值量 正在滚动: (本体: 窗口_, ev: UI事件_) => 任意;

//@@{ 正在提示:onseeked, 窗口_:Window, 事件_:Event }
声明 值量 正在提示: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在重新定位:onseeking, 窗口_:Window, 事件_:Event }
声明 值量 正在重新定位: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在选择:onselect, 窗口_:Window, UI事件_:UIEvent }
声明 值量 正在选择: (本体: 窗口_, ev: UI事件_) => 任意;

//@@{ 正在停滞:onstalled, 窗口_:Window, 事件_:Event }
声明 值量 正在停滞: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在储存:onstorage, 窗口_:Window, 存储事件_:StorageEvent }
声明 值量 正在储存: (本体: 窗口_, ev: 存储事件_) => 任意;

//@@{ 正在提交:onsubmit, 窗口_:Window, 事件_:Event }
声明 值量 正在提交: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在阻止:onsuspend, 窗口_:Window, 事件_:Event }
声明 值量 正在阻止: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在更新时间:ontimeupdate, 窗口_:Window, 事件_:Event }
声明 值量 正在更新时间: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在触摸取消:ontouchcancel, 触摸事件_:TouchEvent }
声明 值量 正在触摸取消: (ev: 触摸事件_) => 任意;

//@@{ 正在触摸结束:ontouchend, 触摸事件_:TouchEvent }
声明 值量 正在触摸结束: (ev: 触摸事件_) => 任意;

//@@{ 正在触摸移动:ontouchmove, 触摸事件_:TouchEvent }
声明 值量 正在触摸移动: (ev: 触摸事件_) => 任意;

//@@{ 正在触摸开始:ontouchstart, 触摸事件_:TouchEvent }
声明 值量 正在触摸开始: (ev: 触摸事件_) => 任意;

//@@{ 正在卸载:onunload, 窗口_:Window, 事件_:Event }
声明 值量 正在卸载: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在音量改变:onvolumechange, 窗口_:Window, 事件_:Event }
声明 值量 正在音量改变: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 正在等待:onwaiting, 窗口_:Window, 事件_:Event }
声明 值量 正在等待: (本体: 窗口_, ev: 事件_) => 任意;

//@@{ 开启者:opener }
声明 值量 开启者: 任意;

//@@{ 取向:orientation }
声明 值量 取向: 文字 | 数字;

//@@{ 外高:outerHeight }
声明 值量 外高: 数字;

//@@{ 外宽:outerWidth }
声明 值量 外宽: 数字;

//@@{ 页X偏移:pageXOffset }
声明 值量 页X偏移: 数字;

//@@{ 页Y偏移:pageYOffset }
声明 值量 页Y偏移: 数字;

//@@{ 父:parent, 窗口_:Window }
声明 值量 父: 窗口_;

//@@{ 性能:performance, 性能_:Performance }
声明 值量 性能: 性能_;

//@@{ 私人栏:personalbar }
声明 值量 私人栏: BarProp;

//@@{ 屏幕:screen, 屏幕_:Screen }
声明 值量 屏幕: 屏幕_;

//@@{ 屏幕左边:screenLeft }
声明 值量 屏幕左边: 数字;

//@@{ 屏幕顶部:screenTop }
声明 值量 屏幕顶部: 数字;

//@@{ 屏幕X:screenX }
声明 值量 屏幕X: 数字;

//@@{ 屏幕Y:screenY }
声明 值量 屏幕Y: 数字;

//@@{ 滚动条:scrollbars }
声明 值量 滚动条: BarProp;

//@@{ 滚动X:scrollX }
声明 值量 滚动X: 数字;

//@@{ 滚动Y:scrollY }
声明 值量 滚动Y: 数字;

//@@{ 自我:self, 窗口_:Window }
声明 值量 自我: 窗口_;

//@@{ 语音合成:speechSynthesis, 语音合成_:SpeechSynthesis }
声明 值量 语音合成: 语音合成_;

//@@{ 状态:status }
声明 值量 状态: 文字;

//@@{ 状态栏:statusbar }
声明 值量 状态栏: BarProp;

//@@{ 样式媒体:styleMedia, 样式媒体_:StyleMedia }
声明 值量 样式媒体: 样式媒体_;

//@@{ 工具栏:toolbar }
声明 值量 工具栏: BarProp;

//@@{ 顶:top, 窗口_:Window }
声明 值量 顶: 窗口_;

//@@{ 窗口:window, 窗口_:Window }
声明 值量 窗口: 窗口_;

//@@{ 自定义元素:customElements, 自定义元素注册表_:CustomElementRegistry }
声明 值量 自定义元素: 自定义元素注册表_;

//@@{ 警报:alert, 消息:message }
声明 函数 警报(消息?: 任意): 无值;

//@@{ 失去焦点:blur }
声明 函数 失去焦点(): 无值;

//@@{ 取消动画帧:cancelAnimationFrame, 处理:handle }
声明 函数 取消动画帧(处理: 数字): 无值;

//@@{ 捕获事件:captureEvents }
声明 函数 捕获事件(): 无值;

//@@{ 关闭:close }
声明 函数 关闭(): 无值;

//@@{ 确认:confirm, 消息:message }
声明 函数 确认(消息?: 文字): 真假;

//@@{ 离开焦点:departFocus, 导航原因:navigationReason, 导航原因_:NavigationReason, 起点:origin, 焦点导航起源_:FocusNavigationOrigin }
声明 函数 离开焦点(导航原因: 导航原因_, 起点: 焦点导航起源_): 无值;

//@@{ 焦点:focus }
声明 函数 焦点(): 无值;

//@@{ 取计算风格:getComputedStyle, 元素:elt, 元素_:Element, 伪元素:pseudoElt, CSS样式声明_:CSSStyleDeclaration }
声明 函数 取计算风格(元素: 元素_, 伪元素?: 文字): CSS样式声明_;

//@@{ 取匹配CSS规则:getMatchedCSSRules, 元素:elt, 元素_:Element, 伪元素:pseudoElt, CSS规则列表_:CSSRuleList }
声明 函数 取匹配CSS规则(元素: 元素_, 伪元素?: 文字): CSS规则列表_;

//@@{ 取选择:getSelection, 选择的_:Selection }
声明 函数 取选择(): 选择的_;

//@@{ 匹配媒体:matchMedia, 媒体查询:mediaQuery, 媒体查询列表_:MediaQueryList }
声明 函数 匹配媒体(媒体查询: 文字): 媒体查询列表_;

//@@{ 移动从:moveBy }
声明 函数 移动从(x?: 数字, y?: 数字): 无值;

//@@{ 移动到:moveTo }
声明 函数 移动到(x?: 数字, y?: 数字): 无值;

//@@{ ms写分析器标记:msWriteProfilerMark, 分析器标记名字:profilerMarkName }
声明 函数 ms写分析器标记(分析器标记名字: 文字): 无值;

//@@{ 打开:open, 目标:target, 特性:features, 替换:replace, 窗口_:Window }
声明 函数 打开(url?: 文字, 目标?: 文字, 特性?: 文字, 替换?: 真假): 窗口_ | 空值;

//@@{ 发布消息:postMessage, 消息:message, 目标起点:targetOrigin, 转移:transfer }
声明 函数 发布消息(消息: 任意, 目标起点: 文字, 转移?: 任意[]): 无值;

//@@{ 打印:print }
声明 函数 打印(): 无值;

//@@{ 提示:prompt, 消息:message, _默认:_default }
声明 函数 提示(消息?: 文字, _默认?: 文字): 文字 | 空值;

//@@{ 释放事件:releaseEvents }
声明 函数 释放事件(): 无值;

//@@{ 请求帧动画:requestAnimationFrame, 回调:callback, 帧请求回调_:FrameRequestCallback }
声明 函数 请求帧动画(回调: 帧请求回调_): 数字;

//@@{ 调整从:resizeBy }
声明 函数 调整从(x?: 数字, y?: 数字): 无值;

//@@{ 调整到:resizeTo }
声明 函数 调整到(x?: 数字, y?: 数字): 无值;

//@@{ 滚动:scroll }
声明 函数 滚动(x?: 数字, y?: 数字): 无值;

//@@{ 滚动从:scrollBy }
声明 函数 滚动从(x?: 数字, y?: 数字): 无值;

//@@{ 滚动到:scrollTo }
声明 函数 滚动到(x?: 数字, y?: 数字): 无值;

//@@{ 停止:stop }
声明 函数 停止(): 无值;

//@@{ webkit取消动画帧:webkitCancelAnimationFrame, 处理:handle }
声明 函数 webkit取消动画帧(处理: 数字): 无值;

//@@{ webkit转换点从节点到页面:webkitConvertPointFromNodeToPage, 节点:node, 节点_:Node, 点:pt, WebKit点_:WebKitPoint }
声明 函数 webkit转换点从节点到页面(节点: 节点_, 点: WebKit点_): WebKit点_;

//@@{ webkit转换点从页面到节点:webkitConvertPointFromPageToNode, 节点:node, 节点_:Node, 点:pt, WebKit点_:WebKitPoint }
声明 函数 webkit转换点从页面到节点(节点: 节点_, 点: WebKit点_): WebKit点_;

//@@{ webkit请求帧动画:webkitRequestAnimationFrame, 回调:callback, 帧请求回调_:FrameRequestCallback }
声明 函数 webkit请求帧动画(回调: 帧请求回调_): 数字;

//@@{ 创建位图图像:createImageBitmap, 图像:image, HTML图像元素_:HTMLImageElement, SVG图像元素_:SVGImageElement, HTML视频元素_:HTMLVideoElement, HTML画板元素_:HTMLCanvasElement, 位图图像_:ImageBitmap, 图像数据_:ImageData, 二进制对象_:Blob, 选项:options, 位图图像选项_:ImageBitmapOptions, 预设_:Promise }
声明 函数 创建位图图像(图像: HTML图像元素_ | SVG图像元素_ | HTML视频元素_ | HTML画板元素_ | 位图图像_ | 图像数据_ | 二进制对象_, 选项?: 位图图像选项_): 预设_<位图图像_>;

//@@{ 图像:image, HTML图像元素_:HTMLImageElement, SVG图像元素_:SVGImageElement, HTML视频元素_:HTMLVideoElement, HTML画板元素_:HTMLCanvasElement, 位图图像_:ImageBitmap, 图像数据_:ImageData, 二进制对象_:Blob, 选项:options, 位图图像选项_:ImageBitmapOptions, 预设_:Promise }
声明 函数 创建位图图像(图像: HTML图像元素_ | SVG图像元素_ | HTML视频元素_ | HTML画板元素_ | 位图图像_ | 图像数据_ | 二进制对象_, sx: 数字, sy: 数字, sw: 数字, sh: 数字, 选项?: 位图图像选项_): 预设_<位图图像_>;

//@@{ 选项:options, 滚动到选项_:ScrollToOptions }
声明 函数 滚动(选项?: 滚动到选项_): 无值;

//@@{ 选项:options, 滚动到选项_:ScrollToOptions }
声明 函数 滚动到(选项?: 滚动到选项_): 无值;

//@@{ 选项:options, 滚动到选项_:ScrollToOptions }
声明 函数 滚动从(选项?: 滚动到选项_): 无值;

//@@{ 转为文字:toString }
声明 函数 转为文字(): 文字;

//@@{ 调度事件:dispatchEvent, 事:evt, 事件_:Event }
声明 函数 调度事件(事: 事件_): 真假;

//@@{ 删除事件监听器:removeEventListener, 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 选项:options, 事件监听器选项_:EventListenerOptions }
声明 函数 删除事件监听器(类型: 文字, 侦听器?: 事件侦听器或事件侦听器对象_, 选项?: 真假 | 事件监听器选项_): 无值;

//@@{ 清除时间间隔:clearInterval, 处理:handle }
声明 函数 清除时间间隔(处理: 数字): 无值;

//@@{ 清除超时:clearTimeout, 处理:handle }
声明 函数 清除超时(处理: 数字): 无值;

//@@{ 置时间间隔:setInterval, 处理程序:handler, 参数组:args, 超时:timeout }
声明 函数 置时间间隔(处理程序: (...参数组: 任意[]) => 无值, 超时: 数字): 数字;

//@@{ 处理程序:handler, 超时:timeout, 参数组:args }
声明 函数 置时间间隔(处理程序: 任意, 超时?: 任意, ...参数组: 任意[]): 数字;

//@@{ 置超时:setTimeout, 处理程序:handler, 参数组:args, 超时:timeout }
声明 函数 置超时(处理程序: (...参数组: 任意[]) => 无值, 超时: 数字): 数字;

//@@{ 处理程序:handler, 超时:timeout, 参数组:args }
声明 函数 置超时(处理程序: 任意, 超时?: 任意, ...参数组: 任意[]): 数字;

//@@{ 清除立即:clearImmediate, 处理:handle }
声明 函数 清除立即(处理: 数字): 无值;

//@@{ 置立即:setImmediate, 处理程序:handler, 参数组:args }
声明 函数 置立即(处理程序: (...参数组: 任意[]) => 无值): 数字;

//@@{ 处理程序:handler, 参数组:args }
声明 函数 置立即(处理程序: 任意, ...参数组: 任意[]): 数字;

//@@{ 会话存储:sessionStorage, 存储_:Storage }
声明 值量 会话存储: 存储_;

//@@{ 本地存储:localStorage, 存储_:Storage }
声明 值量 本地存储: 存储_;

//@@{ 控制台:console, 控制台_:Console }
声明 值量 控制台: 控制台_;

//@@{ 正在指针取消:onpointercancel, 窗口_:Window, 指针事件_:PointerEvent }
声明 值量 正在指针取消: (本体: 窗口_, ev: 指针事件_) => 任意;

//@@{ 正在指针按下:onpointerdown, 窗口_:Window, 指针事件_:PointerEvent }
声明 值量 正在指针按下: (本体: 窗口_, ev: 指针事件_) => 任意;

//@@{ 正在指针进入:onpointerenter, 窗口_:Window, 指针事件_:PointerEvent }
声明 值量 正在指针进入: (本体: 窗口_, ev: 指针事件_) => 任意;

//@@{ 正在指针离开:onpointerleave, 窗口_:Window, 指针事件_:PointerEvent }
声明 值量 正在指针离开: (本体: 窗口_, ev: 指针事件_) => 任意;

//@@{ 正在指针移动:onpointermove, 窗口_:Window, 指针事件_:PointerEvent }
声明 值量 正在指针移动: (本体: 窗口_, ev: 指针事件_) => 任意;

//@@{ 正在指针移出:onpointerout, 窗口_:Window, 指针事件_:PointerEvent }
声明 值量 正在指针移出: (本体: 窗口_, ev: 指针事件_) => 任意;

//@@{ 正在指针悬停:onpointerover, 窗口_:Window, 指针事件_:PointerEvent }
声明 值量 正在指针悬停: (本体: 窗口_, ev: 指针事件_) => 任意;

//@@{ 正在指针松开:onpointerup, 窗口_:Window, 指针事件_:PointerEvent }
声明 值量 正在指针松开: (本体: 窗口_, ev: 指针事件_) => 任意;

//@@{ 正在滚轮:onwheel, 窗口_:Window, 轮事件_:WheelEvent }
声明 值量 正在滚轮: (本体: 窗口_, ev: 轮事件_) => 任意;

//@@{ 索引DB:indexedDB, IDB工厂_:IDBFactory }
声明 值量 索引DB: IDB工厂_;

//@@{ 解码:atob, 编码的字符串:encodedString }
声明 函数 解码(编码的字符串: 文字): 文字;

//@@{ 编码:btoa, 原始字符串:rawString }
声明 函数 编码(原始字符串: 文字): 文字;

//@@{ 获取:fetch, 输入:input, 请求信息_:RequestInfo, 初始化:init, 请求初始化_:RequestInit, 预设_:Promise, 响应_:Response }
声明 函数 获取(输入: 请求信息_, 初始化?: 请求初始化_): 预设_<响应_>;

//@@{ 添加事件监听器:addEventListener, 窗口事件映射_:WindowEventMap, 类型:type, 侦听器:listener, 窗口_:Window, 使用捕获:useCapture }
声明 函数 添加事件监听器<K 扩展 键为 窗口事件映射_>(类型: K, 侦听器: (本体: 窗口_, ev: 窗口事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;

//@@{ 类型:type, 侦听器:listener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 使用捕获:useCapture }
声明 函数 添加事件监听器(类型: 文字, 侦听器: 事件侦听器或事件侦听器对象_, 使用捕获?: 真假): 无值;

类型 AAGUID = 文字;

//@@{ 算法标识符_:AlgorithmIdentifier, 算法_:Algorithm }
类型 算法标识符_ = 文字 | 算法_;

//@@{ 体初始化_:BodyInit }
类型 体初始化_ = 任意;

//@@{ 字节文字__:ByteString }
类型 字节文字__ = 文字;

//@@{ 限制真假_:ConstrainBoolean, 真假参数约束_:ConstrainBooleanParameters }
类型 限制真假_ = 真假 | 真假参数约束_;

//@@{ 限制文档文字__:ConstrainDOMString, DOM字符串参数约束_:ConstrainDOMStringParameters }
类型 限制文档文字__ = 文字 | 文字[] | DOM字符串参数约束_;

//@@{ 限制双精度_:ConstrainDouble, 双精度范围约束_:ConstrainDoubleRange }
类型 限制双精度_ = 数字 | 双精度范围约束_;

//@@{ 限制长整数_:ConstrainLong, 长整数范围约束_:ConstrainLongRange }
类型 限制长整数_ = 数字 | 长整数范围约束_;

//@@{ 加密操作数据_:CryptoOperationData, 数组缓冲区视图_:ArrayBufferView }
类型 加密操作数据_ = 数组缓冲区视图_;

//@@{ GL位字段_:GLbitfield }
类型 GL位字段_ = 数字;

//@@{ GL真假_:GLboolean }
类型 GL真假_ = 真假;

//@@{ GL位_:GLbyte }
类型 GL位_ = 数字;

//@@{ GL固定_:GLclampf }
类型 GL固定_ = 数字;

//@@{ GL枚举_:GLenum }
类型 GL枚举_ = 数字;

//@@{ GL小数_:GLfloat }
类型 GL小数_ = 数字;

//@@{ GL整数_:GLint }
类型 GL整数_ = 数字;

//@@{ GL整数指针_:GLintptr }
类型 GL整数指针_ = 数字;

//@@{ GL短整数_:GLshort }
类型 GL短整数_ = 数字;

//@@{ GL大小_:GLsizei }
类型 GL大小_ = 数字;

//@@{ GL大小指针_:GLsizeiptr }
类型 GL大小指针_ = 数字;

//@@{ GL正字节_:GLubyte }
类型 GL正字节_ = 数字;

//@@{ GL正整数_:GLuint }
类型 GL正整数_ = 数字;

//@@{ GL正短整数_:GLushort }
类型 GL正短整数_ = 数字;

//@@{ 头初始化_:HeadersInit, 报头_:Headers }
类型 头初始化_ = 报头_ | 文字[][];

//@@{ IDB键路径_:IDBKeyPath }
类型 IDB键路径_ = 文字;

//@@{ 键格式化_:KeyFormat }
类型 键格式化_ = 文字;

//@@{ 键类型_:KeyType }
类型 键类型_ = 文字;

//@@{ 键使用_:KeyUsage }
类型 键使用_ = 文字;

//@@{ MS入站有效载荷_:MSInboundPayload, MS视频Recv有效载荷_:MSVideoRecvPayload, MS音频接收有效载荷_:MSAudioRecvPayload }
类型 MS入站有效载荷_ = MS视频Recv有效载荷_ | MS音频接收有效载荷_;

//@@{ MS本地客户事件_:MSLocalClientEvent, MS本地客户端事件基类_:MSLocalClientEventBase, MS音频本地客户端事件_:MSAudioLocalClientEvent }
类型 MS本地客户事件_ = MS本地客户端事件基类_ | MS音频本地客户端事件_;

//@@{ MS出站有效载荷_:MSOutboundPayload, MS视频发送有效载荷_:MSVideoSendPayload, MS音频发送有效载荷_:MSAudioSendPayload }
类型 MS出站有效载荷_ = MS视频发送有效载荷_ | MS音频发送有效载荷_;

//@@{ RTCIce收集候选_:RTCIceGatherCandidate, RTCICE候选字典_:RTCIceCandidateDictionary, RTCICE候选完整性_:RTCIceCandidateComplete }
类型 RTCIce收集候选_ = RTCICE候选字典_ | RTCICE候选完整性_;

//@@{ RTC传输_:RTCTransport, RTCDtls传输_:RTCDtlsTransport, RTCSrtpsd传输_:RTCSrtpSdesTransport }
类型 RTC传输_ = RTCDtls传输_ | RTCSrtpsd传输_;

//@@{ 请求信息_:RequestInfo, 请求_:Request }
类型 请求信息_ = 请求_ | 文字;

//@@{ USV字符串:USVString }
类型 USV字符串 = 文字;

//@@{ 有效载荷类型:payloadtype }
类型 有效载荷类型 = 数字;

//@@{ 滚动行为_:ScrollBehavior, "自动":"auto", "即时":"instant", "平滑":"smooth" }
类型 滚动行为_ = "自动" | "即时" | "平滑";

//@@{ 滚动逻辑位置_:ScrollLogicalPosition, "开始":"start", "中心":"center", "结束":"end", "最近的":"nearest" }
类型 滚动逻辑位置_ = "开始" | "中心" | "结束" | "最近的";

//@@{ IDB有效键:IDBValidKey, 日期_:Date, IDB数组键_:IDBArrayKey }
类型 IDB有效键 = 数字 | 文字 | 日期_ | IDB数组键_;

//@@{ 缓冲源_:BufferSource, 数组缓冲区_:ArrayBuffer, 数组缓冲区视图_:ArrayBufferView }
类型 缓冲源_ = 数组缓冲区_ | 数组缓冲区视图_;

//@@{ 鼠标滚轮事件_:MouseWheelEvent, 轮事件_:WheelEvent }
类型 鼠标滚轮事件_ = 轮事件_;

//@@{ 滚动恢复_:ScrollRestoration, "自动":"auto", "手动":"manual" }
类型 滚动恢复_ = "自动" | "手动";

//@@{ 表单数据输入值_:FormDataEntryValue, 文件_:File }
类型 表单数据输入值_ = 文字 | 文件_;

//@@{ 插入位置_:InsertPosition, "在开始之前":"beforebegin", "在开始之后":"afterbegin", "在结束之前":"beforeend", "在结束之后":"afterend" }
类型 插入位置_ = "在开始之前" | "在开始之后" | "在结束之前" | "在结束之后";

//@@{ 附加模式_:AppendMode, "部分":"segments", "序列":"sequence" }
类型 附加模式_ = "部分" | "序列";

//@@{ 音频上下文状态_:AudioContextState, "暂停":"suspended", "运行":"running", "关闭":"closed" }
类型 音频上下文状态_ = "暂停" | "运行" | "关闭";

//@@{ 滤波器类型_:BiquadFilterType, "低通滤波器":"lowpass", "高通滤波":"highpass", "带通":"bandpass", "低架":"lowshelf", "高架":"highshelf", "见顶":"peaking", "切口":"notch", "全通":"allpass" }
类型 滤波器类型_ = "低通滤波器" | "高通滤波" | "带通" | "低架" | "高架" | "见顶" | "切口" | "全通";

//@@{ 画板填满规则_:CanvasFillRule, "非零":"nonzero", "奇偶":"evenodd" }
类型 画板填满规则_ = "非零" | "奇偶";

//@@{ 通道计数模式_:ChannelCountMode, "最大":"max", "夹-最大":"clamped-max", "显式的":"explicit" }
类型 通道计数模式_ = "最大" | "夹-最大" | "显式的";

//@@{ 通道解释_:ChannelInterpretation, "演讲者":"speakers", "离散":"discrete" }
类型 通道解释_ = "演讲者" | "离散";

//@@{ 距离模型类型_:DistanceModelType, "线性":"linear", "逆向":"inverse", "指数":"exponential" }
类型 距离模型类型_ = "线性" | "逆向" | "指数";

//@@{ 扩大粒度_:ExpandGranularity, "字符":"character", "词":"word", "句子":"sentence", "文本编辑":"textedit" }
类型 扩大粒度_ = "字符" | "词" | "句子" | "文本编辑";

//@@{ 手柄输入仿真类型_:GamepadInputEmulationType, "鼠标":"mouse", "键盘":"keyboard", "手柄":"gamepad" }
类型 手柄输入仿真类型_ = "鼠标" | "键盘" | "手柄";

//@@{ IDB光标方向_:IDBCursorDirection, "下个":"next", "下个唯一":"nextunique", "上个":"prev", "上个唯一":"prevunique" }
类型 IDB光标方向_ = "下个" | "下个唯一" | "上个" | "上个唯一";

//@@{ IDB请求就绪状态_:IDBRequestReadyState, "等待":"pending", "完成":"done" }
类型 IDB请求就绪状态_ = "等待" | "完成";

//@@{ IDB事务模式_:IDBTransactionMode, "只读的":"readonly", "读写":"readwrite", "版本改变":"versionchange" }
类型 IDB事务模式_ = "只读的" | "读写" | "版本改变";

//@@{ 监听状态_:ListeningState, "不活跃":"inactive", "活动":"active", "消歧":"disambiguation" }
类型 监听状态_ = "不活跃" | "活动" | "消歧";

//@@{ 媒体设备类_:MediaDeviceKind, "音频输入":"audiooutput", "视频输入":"videoinput" }
类型 媒体设备类_ = "音频输入" | "音频输入" | "视频输入";

//@@{ 媒体键消息类型_:MediaKeyMessageType, "许可证-要求":"license-request", "许可证-更新":"license-renewal", "许可证-释放":"license-release", "个性化-要求":"individualization-request" }
类型 媒体键消息类型_ = "许可证-要求" | "许可证-更新" | "许可证-释放" | "个性化-要求";

//@@{ 媒体键会话类型_:MediaKeySessionType, "临时":"temporary", "持续性-许可证":"persistent-license", "持续性-释放-消息":"persistent-release-message" }
类型 媒体键会话类型_ = "临时" | "持续性-许可证" | "持续性-释放-消息";

//@@{ 媒体键要求_:MediaKeysRequirement, "必须的":"required", "可选":"optional", "不-允许":"not-allowed" }
类型 媒体键要求_ = "必须的" | "可选" | "不-允许";

//@@{ 媒体键状态_:MediaKeyStatus, "可用的":"usable", "过期的":"expired", "输出-缩减":"output-downscaled", "输出-不-允许":"output-not-allowed", "状态-待定":"status-pending", "内部-错误":"internal-error" }
类型 媒体键状态_ = "可用的" | "过期的" | "输出-缩减" | "输出-不-允许" | "状态-待定" | "内部-错误";

//@@{ 媒体流跟踪状态_:MediaStreamTrackState, "存活":"live", "结束了":"ended" }
类型 媒体流跟踪状态_ = "存活" | "结束了";

//@@{ MS凭证类型_:MSCredentialType }
类型 MS凭证类型_ = "FIDO_2_0";

//@@{ MSIce地址类型_:MSIceAddrType, "系统":"os", "对等-源":"peer-derived" }
类型 MSIce地址类型_ = "系统" | "stun" | "turn" | "对等-源" ;

//@@{ MSIce类型_:MSIceType, "失败的":"failed", "直接":"direct", "中继":"relay" }
类型 MSIce类型_ = "失败的" | "直接" | "中继";

//@@{ MS统计数据类型_:MSStatsType, "描述":"description", "本地客户端事件":"localclientevent", "入站-网络":"inbound-network", "出站-网络":"outbound-network", "入站-有效荷载":"inbound-payload", "出站-有效荷载":"outbound-payload", "端口诊断特点":"transportdiagnostics" }
类型 MS统计数据类型_ = "描述" | "本地客户端事件" | "入站-网络" | "出站-网络" | "入站-有效荷载" | "出站-有效荷载" | "端口诊断特点";

//@@{ MS传输类型_:MSTransportType, "嵌入式":"Embedded" }
类型 MS传输类型_ = "嵌入式" | "USB" | "NFC" | "BT";

//@@{ MS网络视图许可状态_:MSWebViewPermissionState, "未知的":"unknown", "推迟":"defer", "允许":"allow", "否认":"deny" }
类型 MS网络视图许可状态_ = "未知的" | "推迟" | "允许" | "否认";

//@@{ 网络视图许可类型_:MSWebViewPermissionType, "地理位置":"geolocation", "无限索引数据库限额":"unlimitedIndexedDBQuota", "媒体":"media", "指针锁":"pointerlock", "网站通知":"webnotifications" }
类型 网络视图许可类型_ = "地理位置" | "无限索引数据库限额" | "媒体" | "指针锁" | "网站通知";

//@@{ 导航原因_:NavigationReason, "向上":"up", "向下":"down", "左":"left", "右":"right" }
类型 导航原因_ = "向上" | "向下" | "左" | "右";

//@@{ 导航类型_:NavigationType, "导航":"navigate", "重新加载":"reload", "退回_向前":"back_forward", "预渲染":"prerender" }
类型 导航类型_ = "导航" | "重新加载" | "退回_向前" | "预渲染";

//@@{ 通知方向_:NotificationDirection, "自动":"auto", "左向右":"ltr", "右向左":"rtl" }
类型 通知方向_ = "自动" | "左向右" | "右向左";

//@@{ 通知许可_:NotificationPermission, "默认":"default", "否认":"denied", "授予":"granted" }
类型 通知许可_ = "默认" | "否认" | "授予";

//@@{ 振荡器类型_:OscillatorType, "正弦":"sine", "广场":"square", "锯齿波":"sawtooth", "三角形":"triangle", "自定义":"custom" }
类型 振荡器类型_ = "正弦" | "广场" | "锯齿波" | "三角形" | "自定义";

//@@{ 样品类型_:OverSampleType, "没有":"none" }
类型 样品类型_ = "没有" | "2x" | "4x";

//@@{ 平移模型类型_:PanningModelType, "平等权力":"equalpower" }
类型 平移模型类型_ = "平等权力";

//@@{ 付款完成_:PaymentComplete, "成功":"success", "失败":"fail" }
类型 付款完成_ = "成功" | "失败" | "";

//@@{ 支付运输类型_:PaymentShippingType, "航运":"shipping", "交付":"delivery", "皮卡":"pickup" }
类型 支付运输类型_ = "航运" | "交付" | "皮卡";

//@@{ 压入加密键名称_:PushEncryptionKeyName, "身份验证":"auth" }
类型 压入加密键名称_ = "p256dh" | "身份验证";

//@@{ 压入许可状态_:PushPermissionState, "授予":"granted", "否认":"denied", "提示":"prompt" }
类型 压入许可状态_ = "授予" | "否认" | "提示";

//@@{ 推荐人政策_:ReferrerPolicy, "没-推荐人":"no-referrer", "没-推荐人-当-降级":"no-referrer-when-downgrade", "起点-只有":"origin-only", "起点-位于-焦点":"origin-when-cross-origin", "不安全-URL":"unsafe-url" }
类型 推荐人政策_ = "" | "没-推荐人" | "没-推荐人-当-降级" | "起点-只有" | "起点-位于-焦点" | "不安全-URL";

//@@{ 请求缓存_:RequestCache, "默认":"default", "没-商店":"no-store", "重新加载":"reload", "没-缓存":"no-cache", "隐藏-缓存":"force-cache" }
类型 请求缓存_ = "默认" | "没-商店" | "重新加载" | "没-缓存" | "隐藏-缓存";

//@@{ 请求凭证_:RequestCredentials, "省略":"omit", "相同-起点":"same-origin", "包括":"include" }
类型 请求凭证_ = "省略" | "相同-起点" | "包括";

//##{ "subresource":"子资源" ,"worker":"工人"}##

//@@{ 请求目的地_:RequestDestination, "文档":"document", "共享工人":"sharedworker", "未知的":"unknown" }
类型 请求目的地_ = "" | "文档" | "共享工人" | "子资源" | "未知的" | "工人";

//@@{ 请求模式_:RequestMode, "导航":"navigate", "相同-起点":"same-origin", "不-连续":"no-cors", "连续":"cors" }
类型 请求模式_ = "导航" | "相同-起点" | "不-连续" | "连续";

//@@{ 请求重定向_:RequestRedirect, "遵循":"follow", "错误":"error", "手动":"manual" }
类型 请求重定向_ = "遵循" | "错误" | "手动";

//@@{ 请求类型_:RequestType, "音频":"audio", "字体":"font", "图像":"image", "脚本":"script", "样式":"style", "轨道":"track", "视频":"video" }
类型 请求类型_ = "" | "音频" | "字体" | "图像" | "脚本" | "样式" | "轨道" | "视频";

//@@{ 响应类型_:ResponseType, "基本":"basic", "连续":"cors", "默认":"default", "错误":"error", "不透明的":"opaque", "不透明的重定向":"opaqueredirect" }
类型 响应类型_ = "基本" | "连续" | "默认" | "错误" | "不透明的" | "不透明的重定向";

//@@{ RTC包政策_:RTCBundlePolicy, "平衡":"balanced", "最大-兼容":"max-compat", "最大-包":"max-bundle" }
类型 RTC包政策_ = "平衡" | "最大-兼容" | "最大-包";

//@@{ RTC退化偏好_:RTCDegradationPreference, "保持-帧率":"maintain-framerate", "保持-分辨率":"maintain-resolution", "平衡":"balanced" }
类型 RTC退化偏好_ = "保持-帧率" | "保持-分辨率" | "平衡";

//@@{ RTCDtls角色_:RTCDtlsRole, "自动":"auto", "客户端":"client", "服务器":"server" }
类型 RTCDtls角色_ = "自动" | "客户端" | "服务器";

//@@{ RTCDtls传输状态_:RTCDtlsTransportState, "新建":"new", "连接时":"connecting", "连接后":"connected", "关闭":"closed" }
类型 RTCDtls传输状态_ = "新建" | "连接时" | "连接后" | "关闭";

//@@{ RTCIce候选类型:RTCIceCandidateType, "主机":"host", "中继":"relay" }
类型 RTCIce候选类型 = "主机" | "srflx" | "prflx" | "中继";

//@@{ RTCIce组件_:RTCIceComponent }
类型 RTCIce组件_ = "RTP" | "RTCP";

//@@{ RTCIce连接状态_:RTCIceConnectionState, "新建":"new", "检查":"checking", "连接后":"connected", "完成":"completed", "失败的":"failed", "断开连接":"disconnected", "关闭":"closed" }
类型 RTCIce连接状态_ = "新建" | "检查" | "连接后" | "完成" | "失败的" | "断开连接" | "关闭";

//@@{ RTCIce采集者状态_:RTCIceGathererState, "新建":"new", "收集":"gathering", "完整的":"complete" }
类型 RTCIce采集者状态_ = "新建" | "收集" | "完整的";

//@@{ RTCIce聚集状态_:RTCIceGatheringState, "新建":"new", "收集":"gathering", "完整的":"complete" }
类型 RTCIce聚集状态_ = "新建" | "收集" | "完整的";

//@@{ RTCIce收集政策_:RTCIceGatherPolicy, "所有":"all", "无主机":"nohost", "中继":"relay" }
类型 RTCIce收集政策_ = "所有" | "无主机" | "中继";

//@@{ RTCIce协议_:RTCIceProtocol }
类型 RTCIce协议_ = "udp" | "tcp";

//@@{ RTCIce角色_:RTCIceRole, "控制时":"controlling", "控制":"controlled" }
类型 RTCIce角色_ = "控制时" | "控制";

//@@{ RTCIceTcp候选类型_:RTCIceTcpCandidateType, "活动":"active", "被动":"passive" }
类型 RTCIceTcp候选类型_ = "活动" | "被动" | "so";

//@@{ RTCIce传输政策_:RTCIceTransportPolicy, "没有":"none", "中继":"relay", "所有":"all" }
类型 RTCIce传输政策_ = "没有" | "中继" | "所有";

//@@{ RTCIce传输状态_:RTCIceTransportState, "新建":"new", "检查":"checking", "连接后":"connected", "完成":"completed", "断开连接":"disconnected", "关闭":"closed" }
类型 RTCIce传输状态_ = "新建" | "检查" | "连接后" | "完成" | "断开连接" | "关闭";

//@@{ RTCSdp类型_:RTCSdpType, "提供":"offer" }
类型 RTCSdp类型_ = "提供" | "pranswer" | "answer";

//@@{ RTC信号状态_:RTCSignalingState, "稳定的":"stable", "有-本地-提供":"have-local-offer", "有-远程-提供":"have-remote-offer", "关闭":"closed" }
类型 RTC信号状态_ = "稳定的" | "有-本地-提供" | "有-远程-提供" | "have-local-pranswer" | "have-remote-pranswer" | "关闭";

//@@{ RTC统计Ice候选一对状态_:RTCStatsIceCandidatePairState, "冻":"frozen", "等待":"waiting", "按比例位移":"inprogress", "失败的":"failed", "成功":"succeeded", "取消了":"cancelled" }
类型 RTC统计Ice候选一对状态_ = "冻" | "等待" | "按比例位移" | "失败的" | "成功" | "取消了";

//@@{ RTC统计Ice候选类型_:RTCStatsIceCandidateType, "主机":"host", "服务器自反":"serverreflexive", "对等自反":"peerreflexive", "转播":"relayed" }
类型 RTC统计Ice候选类型_ = "主机" | "服务器自反" | "对等自反" | "转播";

//@@{ RTC统计类型_:RTCStatsType, "进站Rtp":"inboundrtp", "出站Rtp":"outboundrtp", "会话":"session", "数据通道":"datachannel", "轨道":"track", "传输":"transport", "候选对":"candidatepair", "本地候选":"localcandidate", "远的候选":"remotecandidate" }
类型 RTC统计类型_ = "进站Rtp" | "出站Rtp" | "会话" | "数据通道" | "轨道" | "传输" | "候选对" | "本地候选" | "远的候选";

//@@{ 作用域凭证类型_:ScopedCredentialType, "作用域信誉_":"ScopedCred" }
类型 作用域凭证类型_ = "作用域信誉_";

//@@{ 服务工作状态_:ServiceWorkerState, "安装中":"installing", "安装":"installed", "激活中":"activating", "激活":"activated", "冗余":"redundant" }
类型 服务工作状态_ = "安装中" | "安装" | "激活中" | "激活" | "冗余";

//@@{ 传输_:Transport }
类型 传输_ = "usb" | "nfc" | "ble";

//@@{ 视频面对模式枚举_:VideoFacingModeEnum, "用户":"user", "环境":"environment", "左":"left", "右":"right" }
类型 视频面对模式枚举_ = "用户" | "环境" | "左" | "右";

//@@{ 可见性状态_:VisibilityState, "隐藏的":"hidden", "可见的":"visible", "预渲染":"prerender", "卸载":"unloaded" }
类型 可见性状态_ = "隐藏的" | "可见的" | "预渲染" | "卸载";

//@@{ XMLHttp请求响应类型_:XMLHttpRequestResponseType, "数组缓冲":"arraybuffer", "二进制对象":"blob", "文档":"document", "文本":"text" }
类型 XMLHttp请求响应类型_ = "" | "数组缓冲" | "二进制对象" | "文档" | "json" | "文本";