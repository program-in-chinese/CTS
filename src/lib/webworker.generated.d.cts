/////////////////////////////
/// Worker APIs
/////////////////////////////

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
    //@@{ 关闭:close }
    关闭(返回值?: 文字): 无值;
    //@@{ 显示:show }
    显示(): 无值;
    //@@{ 显示模式:showModal }
    显示模式(): 无值;

}
//@@{ HTML对话框元素_:HTMLDialogElement }
声明 值量 HTML对话框元素_: {
    //@@{ 原型:prototype, HTML对话框元素_:HTMLDialogElement }
    原型: HTML对话框元素_;
    //@@{ HTML对话框元素_:HTMLDialogElement }
    新建(): HTML对话框元素_;

};
//@@{ HTML主体元素_:HTMLMainElement, HTML元素_:HTMLElement }
接口 HTML主体元素_ 扩展 HTML元素_ {

}
//@@{ HTML主体元素_:HTMLMainElement }
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
//@@{ HTML细节元素_:HTMLDetailsElement }
声明 值量 HTML细节元素_: {
    //@@{ 原型:prototype, HTML细节元素_:HTMLDetailsElement }
    原型: HTML细节元素_;
    //@@{ HTML细节元素_:HTMLDetailsElement }
    新建(): HTML细节元素_;

};
//@@{ HTML总结元素_:HTMLSummaryElement, HTML元素_:HTMLElement }
接口 HTML总结元素_ 扩展 HTML元素_ {

}
//@@{ HTML总结元素_:HTMLSummaryElement }
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
    //@@{ 文档异常_:DOMException }
    (错误: 文档异常_): 无值;

}
//@@{ 解码成功回调_:DecodeSuccessCallback }
接口 解码成功回调_ {
    //@@{ 音频缓冲区_:AudioBuffer }
    (解码数据: 音频缓冲区_): 无值;

}
//@@{ 错误事件处理程序_:ErrorEventHandler }
接口 错误事件处理程序_ {
    //@@{ 错误类:Error }
    (消息: 文字, 文件名?: 文字, 行数?: 数字, 列数?: 数字, 错误?: 错误类): 无值;

}
//@@{ 循环执行回调_:ForEachCallback }
接口 循环执行回调_ {
    //@@{ 媒体键状态_:MediaKeyStatus }
    (键Id: 任意, 状态: 媒体键状态_): 无值;

}
//@@{ 帧请求回调_:FrameRequestCallback }
接口 帧请求回调_ {
    (时间: 数字): 无值;

}
//@@{ 函数字符串回调_:FunctionStringCallback }
接口 函数字符串回调_ {
    (数据: 文字): 无值;

}
//@@{ 交叉观察者回调_:IntersectionObserverCallback }
接口 交叉观察者回调_ {
    //@@{ 交叉观察者条目_:IntersectionObserverEntry, 交叉观察者_:IntersectionObserver }
    (条目: 交叉观察者条目_[], 观察者: 交叉观察者_): 无值;

}
//@@{ 媒体查询列表侦听器_:MediaQueryListListener }
接口 媒体查询列表侦听器_ {
    //@@{ 媒体查询列表_:MediaQueryList }
    (媒体查询列表: 媒体查询列表_): 无值;

}
//@@{ MS执行在优先级函数回调_:MSExecAtPriorityFunctionCallback }
接口 MS执行在优先级函数回调_ {
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
    //@@{ 突变记录_:MutationRecord, 突变观察者_:MutationObserver }
    (突变: 突变记录_[], 观察者: 突变观察者_): 无值;

}
//@@{ 导航器用户媒体错误回调_:NavigatorUserMediaErrorCallback }
接口 导航器用户媒体错误回调_ {
    (错误: MediaStreamError): 无值;

}
//@@{ 导航器用户媒体成功回调_:NavigatorUserMediaSuccessCallback }
接口 导航器用户媒体成功回调_ {
    //@@{ 媒体流_:MediaStream }
    (流: 媒体流_): 无值;

}
//@@{ 通知允许回调_:NotificationPermissionCallback }
接口 通知允许回调_ {
    //@@{ 通知许可_:NotificationPermission }
    (许可: 通知许可_): 无值;

}
//@@{ 位置回调_:PositionCallback }
接口 位置回调_ {
    //@@{ 位置_:Location }
    (位置: 位置_): 无值;

}
//@@{ 位置错误回调_:PositionErrorCallback }
接口 位置错误回调_ {
    //@@{ 位置错误_:PositionError }
    (错误: 位置错误_): 无值;

}
//@@{ RTC对等连接错误回调_:RTCPeerConnectionErrorCallback }
接口 RTC对等连接错误回调_ {
    //@@{ 文档错误_:DOMError }
    (错误: 文档错误_): 无值;

}
//@@{ RTC会话描述回调_:RTCSessionDescriptionCallback }
接口 RTC会话描述回调_ {
    //@@{ RTC会话描述_:RTCSessionDescription }
    (会话描述: RTC会话描述_): 无值;

}
//@@{ RTC统计数据回调_:RTCStatsCallback }
接口 RTC统计数据回调_ {
    //@@{ RTC统计报告_:RTCStatsReport }
    (报告: RTC统计报告_): 无值;

}
//@@{ 无效的函数_:VoidFunction }
接口 无效的函数_ {
    (): 无值;

}
//@@{ HTML元素标签名称映射_:HTMLElementTagNameMap }
接口 HTML元素标签名称映射_ {
    //@@{ HTML超链接元素_:HTMLAnchorElement }
    "超链接": HTML超链接元素_;
    //@@{ HTML应用程序元素_:HTMLAppletElement }
    "应用程序": HTML应用程序元素_;
    //@@{ HTML区域元素_:HTMLAreaElement }
    "区域": HTML区域元素_;
    //@@{ HTML音频元素_:HTMLAudioElement }
    "音频": HTML音频元素_;
    //@@{ HTML基元素_:HTMLBaseElement }
    "基": HTML基元素_;
    //@@{ HTML基字体元素_:HTMLBaseFontElement }
    "基字体": HTML基字体元素_;
    //@@{ HTML引用元素_:HTMLQuoteElement }
    "引用": HTML引用元素_;
    //@@{ HTML体元素_:HTMLBodyElement }
    "体": HTML体元素_;
    //@@{ HTML换行元素_:HTMLBRElement }
    "换行": HTML换行元素_;
    //@@{ HTML按钮元素_:HTMLButtonElement }
    "按钮": HTML按钮元素_;
    //@@{ HTML画板元素_:HTMLCanvasElement }
    "画板": HTML画板元素_;
    //@@{ HTML表标题元素_:HTMLTableCaptionElement }
    "表标题": HTML表标题元素_;
    //@@{ HTML表列元素_:HTMLTableColElement }
    "表列": HTML表列元素_;
    //@@{ HTML表列元素_:HTMLTableColElement }
    "表列组": HTML表列元素_;
    //@@{ HTML数据元素_:HTMLDataElement }
    "数据": HTML数据元素_;
    //@@{ HTML数据列表元素_:HTMLDataListElement }
    "数据列表": HTML数据列表元素_;
    //@@{ HTML模板元素_:HTMLModElement }
    "删除": HTML模板元素_;
    //@@{ HTML目录元素_:HTMLDirectoryElement }
    "目录": HTML目录元素_;
    //@@{ HTML块元素_:HTMLDivElement }
    "块": HTML块元素_;
    //@@{ HTML列表元素_:HTMLDListElement }
    "定义列表": HTML列表元素_;
    //@@{ HTML嵌入元素_:HTMLEmbedElement }
    "嵌入": HTML嵌入元素_;
    //@@{ HTML分组元素_:HTMLFieldSetElement }
    "分组": HTML分组元素_;
    //@@{ HTML字体元素_:HTMLFontElement }
    "字体": HTML字体元素_;
    //@@{ HTML表单元素_:HTMLFormElement }
    "表单": HTML表单元素_;
    //@@{ HTML框架元素_:HTMLFrameElement }
    "框架": HTML框架元素_;
    //@@{ HTML框架分组元素_:HTMLFrameSetElement }
    "框架分组": HTML框架分组元素_;
    //@@{ HTML标题元素_:HTMLHeadingElement }
    "标题1": HTML标题元素_;
    //@@{ HTML标题元素_:HTMLHeadingElement }
    "标题2": HTML标题元素_;
    //@@{ HTML标题元素_:HTMLHeadingElement }
    "标题3": HTML标题元素_;
    //@@{ HTML标题元素_:HTMLHeadingElement }
    "标题4": HTML标题元素_;
    //@@{ HTML标题元素_:HTMLHeadingElement }
    "标题5": HTML标题元素_;
    //@@{ HTML标题元素_:HTMLHeadingElement }
    "标题6": HTML标题元素_;
    //@@{ HTML头部元素_:HTMLHeadElement }
    "头部": HTML头部元素_;
    //@@{ HTML水平线元素_:HTMLHRElement }
    "水平线": HTML水平线元素_;
    //@@{ HTML超文本标记元素_:HTMLHtmlElement }
    "超文本标记": HTML超文本标记元素_;
    //@@{ HTML内联框架元素_:HTMLIFrameElement }
    "内联框架": HTML内联框架元素_;
    //@@{ HTML图像元素_:HTMLImageElement }
    "图": HTML图像元素_;
    //@@{ HTML输入元素_:HTMLInputElement }
    "输入": HTML输入元素_;
    //@@{ HTML模板元素_:HTMLModElement }
    "插入": HTML模板元素_;
    //@@{ HTML未知元素_:HTMLUnknownElement }
    "对话框": HTML未知元素_;
    //@@{ HTML标签元素_:HTMLLabelElement }
    "标签": HTML标签元素_;
    //@@{ HTML分组标题元素_:HTMLLegendElement }
    "组合": HTML分组标题元素_;
    //@@{ HTML列表项元素_:HTMLLIElement }
    "列表": HTML列表项元素_;
    //@@{ HTML外部样式元素_:HTMLLinkElement }
    "外部链接": HTML外部样式元素_;
    //@@{ HTML预处理元素_:HTMLPreElement }
    "清单": HTML预处理元素_;
    //@@{ HTML图像映射元素_:HTMLMapElement }
    "图像映射": HTML图像映射元素_;
    //@@{ HTML字幕元素_:HTMLMarqueeElement }
    "文字滚动": HTML字幕元素_;
    //@@{ HTML菜单元素_:HTMLMenuElement }
    "菜单": HTML菜单元素_;
    //@@{ HTML元数据元素_:HTMLMetaElement }
    "元": HTML元数据元素_;
    //@@{ HTML度量表元素_:HTMLMeterElement }
    "度量": HTML度量表元素_;
    //@@{ HTML未知元素_:HTMLUnknownElement }
    "下个id": HTML未知元素_;
    //@@{ HTML对象元素_:HTMLObjectElement }
    "对象": HTML对象元素_;
    //@@{ HTML有序列表元素_:HTMLOListElement }
    "有序列表": HTML有序列表元素_;
    //@@{ HTML选项组元素_:HTMLOptGroupElement }
    "选项组": HTML选项组元素_;
    //@@{ HTML选项元素_:HTMLOptionElement }
    "选项": HTML选项元素_;
    //@@{ HTML输出元素_:HTMLOutputElement }
    "输出": HTML输出元素_;
    //@@{ HTML段落元素_:HTMLParagraphElement }
    "段落": HTML段落元素_;
    //@@{ HTML参数元素_:HTMLParamElement }
    "参数": HTML参数元素_;
    //@@{ HTML照片元素_:HTMLPictureElement }
    "照片": HTML照片元素_;
    //@@{ HTML预处理元素_:HTMLPreElement }
    "预处理": HTML预处理元素_;
    //@@{ HTML进度元素_:HTMLProgressElement }
    "进度": HTML进度元素_;
    //@@{ HTML引用元素_:HTMLQuoteElement }
    "引号": HTML引用元素_;
    //@@{ HTML脚本元素_:HTMLScriptElement }
    "脚本": HTML脚本元素_;
    //@@{ HTML选择元素_:HTMLSelectElement }
    "选择": HTML选择元素_;
    //@@{ HTML来源元素_:HTMLSourceElement }
    "来源": HTML来源元素_;
    //@@{ HTML跨度元素_:HTMLSpanElement }
    "跨度": HTML跨度元素_;
    //@@{ HTML样式元素_:HTMLStyleElement }
    "样式": HTML样式元素_;
    //@@{ HTML表元素_:HTMLTableElement }
    "表": HTML表元素_;
    //@@{ HTML表部分元素_:HTMLTableSectionElement }
    "表体": HTML表部分元素_;
    //@@{ HTML表数据单元格元素_:HTMLTableDataCellElement }
    "列": HTML表数据单元格元素_;
    //@@{ HTML模板元素_:HTMLModElement }
    "模板": HTML模板元素_;
    //@@{ HTML文本区域元素_:HTMLTextAreaElement }
    "文本区域": HTML文本区域元素_;
    //@@{ HTML表部分元素_:HTMLTableSectionElement }
    "表脚": HTML表部分元素_;
    //@@{ HTML表头单元格_:HTMLTableHeaderCellElement }
    "表头列": HTML表头单元格_;
    //@@{ HTML表部分元素_:HTMLTableSectionElement }
    "表头": HTML表部分元素_;
    //@@{ HTML时间元素_:HTMLTimeElement }
    "时间": HTML时间元素_;
    //@@{ HTML标题元素_:HTMLHeadingElement }
    "标题": HTML标题元素_;
    //@@{ HTML表行元素_:HTMLTableRowElement }
    "行": HTML表行元素_;
    //@@{ HTML轨道元素_:HTMLTrackElement }
    "轨道": HTML轨道元素_;
    //@@{ HTML无序列表元素_:HTMLUListElement }
    "无序列表": HTML无序列表元素_;
    //@@{ HTML视频元素_:HTMLVideoElement }
    "视频": HTML视频元素_;
    //@@{ MSHTML网络视图元素_:MSHTMLWebViewElement }
    "网络视图": MSHTML网络视图元素_;
    //@@{ HTML预处理元素_:HTMLPreElement }
    "字符串片段": HTML预处理元素_;

}
//@@{ 元素标签名称映射_:ElementTagNameMap, HTML元素标签名称映射_:HTMLElementTagNameMap }
接口 元素标签名称映射_ 扩展 HTML元素标签名称映射_ {
    //@@{ HTML元素_:HTMLElement }
    "简写": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "首字母缩写": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "地址": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "文章": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "侧栏": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "加粗": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "覆盖方向": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "加大": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "中心": HTML元素_;
    //@@{ SVG圆元素_:SVGCircleElement }
    "圆": SVG圆元素_;
    //@@{ HTML元素_:HTMLElement }
    "摘录": HTML元素_;
    //@@{ SVG剪切路径元素_:SVGClipPathElement }
    "剪切路径": SVG剪切路径元素_;
    //@@{ HTML元素_:HTMLElement }
    "代码": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "定义内容": HTML元素_;
    //@@{ SVG预定元素:SVGDefsElement }
    "引用容器": SVG预定元素;
    //@@{ SVG纯文本元素_:SVGDescElement }
    "描述": SVG纯文本元素_;
    //@@{ HTML元素_:HTMLElement }
    "斜体": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "项目": HTML元素_;
    //@@{ SVG椭圆元素_:SVGEllipseElement }
    "椭圆": SVG椭圆元素_;
    //@@{ HTML元素_:HTMLElement }
    "强调": HTML元素_;
    //@@{ SVG滤镜混合元素_:SVGFEBlendElement }
    "滤镜": SVG滤镜混合元素_;
    //@@{ SVG滤镜颜色矩阵元素_:SVGFEColorMatrixElement }
    "滤镜颜色矩阵": SVG滤镜颜色矩阵元素_;
    //@@{ SVG滤镜组件转移元素_:SVGFEComponentTransferElement }
    "滤镜组件转移": SVG滤镜组件转移元素_;
    //@@{ SVG滤镜复合元素_:SVGFECompositeElement }
    "滤镜复合": SVG滤镜复合元素_;
    //@@{ SVG滤镜卷积矩阵元素_:SVGFEConvolveMatrixElement }
    "滤镜卷积矩阵": SVG滤镜卷积矩阵元素_;
    //@@{ SVG滤镜扩散灯光元素_:SVGFEDiffuseLightingElement }
    "滤镜扩散灯光": SVG滤镜扩散灯光元素_;
    //@@{ SVG滤镜位移映射元素_:SVGFEDisplacementMapElement }
    "滤镜位移映射": SVG滤镜位移映射元素_;
    //@@{ SVGFE漫反射灯光元素_:SVGFEDistantLightElement }
    "漫反射灯光": SVGFE漫反射灯光元素_;
    //@@{ SVG滤镜洪水元素_:SVGFEFloodElement }
    "滤镜洪水": SVG滤镜洪水元素_;
    //@@{ SVG滤镜透明函数元素_:SVGFEFuncAElement }
    "滤镜透明函数": SVG滤镜透明函数元素_;
    //@@{ SVG滤镜蓝函数元素_:SVGFEFuncBElement }
    "镜蓝函数": SVG滤镜蓝函数元素_;
    //@@{ SVG滤镜绿函数元素_:SVGFEFuncGElement }
    "滤镜绿函数": SVG滤镜绿函数元素_;
    //@@{ SVG滤镜红函数元素_:SVGFEFuncRElement }
    "滤镜红函数": SVG滤镜红函数元素_;
    //@@{ SVG滤镜高斯模糊元素_:SVGFEGaussianBlurElement }
    "滤镜高斯模糊": SVG滤镜高斯模糊元素_;
    //@@{ SVG滤镜图像元素_:SVGFEImageElement }
    "滤镜图像": SVG滤镜图像元素_;
    //@@{ SVG滤镜合并元素_:SVGFEMergeElement }
    "滤镜合并": SVG滤镜合并元素_;
    //@@{ SVG滤镜合并节点元素_:SVGFEMergeNodeElement }
    "滤镜合并节点": SVG滤镜合并节点元素_;
    //@@{ SVG滤镜形态元素_:SVGFEMorphologyElement }
    "滤镜形态": SVG滤镜形态元素_;
    //@@{ SVG滤镜偏移元素_:SVGFEOffsetElement }
    "滤镜偏移": SVG滤镜偏移元素_;
    //@@{ SVG滤镜点灯光元素_:SVGFEPointLightElement }
    "滤镜点灯光": SVG滤镜点灯光元素_;
    //@@{ SVG滤镜镜面灯光元素_:SVGFESpecularLightingElement }
    "滤镜镜面灯光": SVG滤镜镜面灯光元素_;
    //@@{ SVG滤镜聚灯光元素_:SVGFESpotLightElement }
    "滤镜聚灯光": SVG滤镜聚灯光元素_;
    //@@{ SVG滤镜瓷砖元素_:SVGFETileElement }
    "滤镜瓷砖": SVG滤镜瓷砖元素_;
    //@@{ SVG滤镜动荡元素_:SVGFETurbulenceElement }
    "滤镜动荡": SVG滤镜动荡元素_;
    //@@{ HTML元素_:HTMLElement }
    "插图标题": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "插图": HTML元素_;
    //@@{ SVG过滤器元素_:SVGFilterElement }
    "过滤器": SVG过滤器元素_;
    //@@{ HTML元素_:HTMLElement }
    "页脚": HTML元素_;
    //@@{ SVG外部对象元素_:SVGForeignObjectElement }
    "外部对象": SVG外部对象元素_;
    //@@{ SVG组元素_:SVGGElement }
    "组": SVG组元素_;
    //@@{ HTML元素_:HTMLElement }
    "页眉": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "标题组": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "斜体文本": HTML元素_;
    //@@{ SVG图像元素_:SVGImageElement }
    "图像": SVG图像元素_;
    //@@{ HTML元素_:HTMLElement }
    "键盘键": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "注册机": HTML元素_;
    //@@{ SVG线元素_:SVGLineElement }
    "线": SVG线元素_;
    //@@{ SVG线性渐变元素_:SVGLinearGradientElement }
    "线性渐变": SVG线性渐变元素_;
    //@@{ HTML元素_:HTMLElement }
    "标记出": HTML元素_;
    //@@{ SVG标记元素_:SVGMarkerElement }
    "标记": SVG标记元素_
    //@@{ SVG遮罩元素_:SVGMaskElement }
    "遮罩": SVG遮罩元素_;
    //@@{ SVG元数据元素_:SVGMetadataElement }
    "元数据": SVG元数据元素_;
    //@@{ HTML元素_:HTMLElement }
    "导航": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "强制不换行": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "无框架": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "无脚本": HTML元素_;
    //@@{ SVG路径元素_:SVGPathElement }
    "路径": SVG路径元素_;
    //@@{ SVG模式元素_:SVGPatternElement }
    "模式": SVG模式元素_;
    //@@{ HTML元素_:HTMLElement }
    "明文": HTML元素_;
    //@@{ SVG多边形元素_:SVGPolygonElement }
    "多边形": SVG多边形元素_;
    //@@{ SVG折线元素_:SVGPolylineElement }
    "多段线": SVG折线元素_;
    //@@{ SVG径向渐变元素_:SVGRadialGradientElement }
    "径向渐变": SVG径向渐变元素_;
    //@@{ SVG矩形元素_:SVGRectElement }
    "矩形": SVG矩形元素_;
    //@@{ HTML元素_:HTMLElement }
    "注释": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "注音": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "删除线": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "格式": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "部分": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "小号": HTML元素_;
    //@@{ SVG停止元素_:SVGStopElement }
    "停止": SVG停止元素_;
    //@@{ HTML元素_:HTMLElement }
    "删除标记": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "加强": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "下标": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "上标": HTML元素_;
    //@@{ SVGSVG元素_:SVGSVGElement }
    "矢量图形": SVGSVG元素_;
    //@@{ SVG分支元素_:SVGSwitchElement }
    "分支": SVG分支元素_;
    //@@{ SVG符号元素_:SVGSymbolElement }
    "符号": SVG符号元素_;
    //@@{ SVG文本元素_:SVGTextElement }
    "文本": SVG文本元素_;
    //@@{ SVG文本路径元素_:SVGTextPathElement }
    "文本路径": SVG文本路径元素_;
    //@@{ SVG文本跨度元素_:SVGTSpanElement }
    "多行文本": SVG文本跨度元素_;
    //@@{ HTML元素_:HTMLElement }
    "等宽": HTML元素_;
    //@@{ HTML元素_:HTMLElement }
    "下划线": HTML元素_;
    //@@{ SVG使用元素_:SVGUseElement }
    "使用": SVG使用元素_;
    //@@{ HTML元素_:HTMLElement }
    "变量": HTML元素_;
    //@@{ SVG视图元素_:SVGViewElement }
    "视图": SVG视图元素_;
    //@@{ HTML元素_:HTMLElement }
    "词": HTML元素_;

}
//@@{ 元素列表标签名称映射_:ElementListTagNameMap }
类型 元素列表标签名称映射_ = {
    //@@{ 元素标签名称映射_:ElementTagNameMap, 节点列表的_:NodeListOf }
    [key 位于 键为 元素标签名称映射_]: 节点列表的_<元素标签名称映射_[key]>

};
//@@{ 音频_:Audio, HTML音频元素_:HTMLAudioElement }
声明 值量 音频_: { 新建(源?: 文字): HTML音频元素_; };
//@@{ 图像_:Image, HTML图像元素_:HTMLImageElement }
声明 值量 图像_: { 新建(宽度?: 数字, 高度?: 数字): HTML图像元素_; };
//@@{ 选项_:Option, HTML选项元素_:HTMLOptionElement }
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
//@@{ 警报:alert }
声明 函数 警报(消息?: 任意): 无值;
//@@{ 失去焦点:blur }
声明 函数 失去焦点(): 无值;
//@@{ 取消动画帧:cancelAnimationFrame }
声明 函数 取消动画帧(处理: 数字): 无值;
//@@{ 捕获事件:captureEvents }
声明 函数 捕获事件(): 无值;
//@@{ 关闭:close }
声明 函数 关闭(): 无值;
//@@{ 确认:confirm }
声明 函数 确认(消息?: 文字): 真假;
//@@{ 离开焦点:departFocus, 导航原因_:NavigationReason, 焦点导航起源_:FocusNavigationOrigin }
声明 函数 离开焦点(导航原因: 导航原因_, 起点: 焦点导航起源_): 无值;
//@@{ 焦点:focus }
声明 函数 焦点(): 无值;
//@@{ 取计算风格:getComputedStyle, 元素_:Element, CSS样式声明_:CSSStyleDeclaration }
声明 函数 取计算风格(元素: 元素_, 伪元素?: 文字): CSS样式声明_;
//@@{ 取匹配CSS规则:getMatchedCSSRules, 元素_:Element, CSS规则列表_:CSSRuleList }
声明 函数 取匹配CSS规则(元素: 元素_, 伪元素?: 文字): CSS规则列表_;
//@@{ 取选择:getSelection, 选择的_:Selection }
声明 函数 取选择(): 选择的_;
//@@{ 匹配媒体:matchMedia, 媒体查询列表_:MediaQueryList }
声明 函数 匹配媒体(媒体查询: 文字): 媒体查询列表_;
//@@{ 移动从:moveBy }
声明 函数 移动从(x?: 数字, y?: 数字): 无值;
//@@{ 移动到:moveTo }
声明 函数 移动到(x?: 数字, y?: 数字): 无值;
//@@{ ms写分析器标记:msWriteProfilerMark }
声明 函数 ms写分析器标记(分析器标记名字: 文字): 无值;
//@@{ 打开:open, 窗口_:Window }
声明 函数 打开(url?: 文字, 目标?: 文字, 特性?: 文字, 替换?: 真假): 窗口_ | 空值;
//@@{ 发布消息:postMessage }
声明 函数 发布消息(消息: 任意, 目标起点: 文字, 转移?: 任意[]): 无值;
//@@{ 打印:print }
声明 函数 打印(): 无值;
//@@{ 提示:prompt }
声明 函数 提示(消息?: 文字, _默认?: 文字): 文字 | 空值;
//@@{ 释放事件:releaseEvents }
声明 函数 释放事件(): 无值;
//@@{ 请求帧动画:requestAnimationFrame, 帧请求回调_:FrameRequestCallback }
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
//@@{ webkit取消动画帧:webkitCancelAnimationFrame }
声明 函数 webkit取消动画帧(处理: 数字): 无值;
//@@{ webkit转换点从节点到页面:webkitConvertPointFromNodeToPage, 节点_:Node, WebKit点_:WebKitPoint }
声明 函数 webkit转换点从节点到页面(节点: 节点_, 点: WebKit点_): WebKit点_;
//@@{ webkit转换点从页面到节点:webkitConvertPointFromPageToNode, 节点_:Node, WebKit点_:WebKitPoint }
声明 函数 webkit转换点从页面到节点(节点: 节点_, 点: WebKit点_): WebKit点_;
//@@{ webkit请求帧动画:webkitRequestAnimationFrame, 帧请求回调_:FrameRequestCallback }
声明 函数 webkit请求帧动画(回调: 帧请求回调_): 数字;
//@@{ 创建位图图像:createImageBitmap, HTML图像元素_:HTMLImageElement, SVG图像元素_:SVGImageElement, HTML视频元素_:HTMLVideoElement, HTML画板元素_:HTMLCanvasElement, 位图图像_:ImageBitmap, 图像数据_:ImageData, 二进制对象_:Blob, 位图图像选项_:ImageBitmapOptions, 预设_:Promise }
声明 函数 创建位图图像(图像: HTML图像元素_ | SVG图像元素_ | HTML视频元素_ | HTML画板元素_ | 位图图像_ | 图像数据_ | 二进制对象_, 选项?: 位图图像选项_): 预设_<位图图像_>;
//@@{ 创建位图图像:createImageBitmap, HTML图像元素_:HTMLImageElement, SVG图像元素_:SVGImageElement, HTML视频元素_:HTMLVideoElement, HTML画板元素_:HTMLCanvasElement, 位图图像_:ImageBitmap, 图像数据_:ImageData, 二进制对象_:Blob, 位图图像选项_:ImageBitmapOptions, 预设_:Promise }
声明 函数 创建位图图像(图像: HTML图像元素_ | SVG图像元素_ | HTML视频元素_ | HTML画板元素_ | 位图图像_ | 图像数据_ | 二进制对象_, sx: 数字, sy: 数字, sw: 数字, sh: 数字, 选项?: 位图图像选项_): 预设_<位图图像_>;
//@@{ 滚动:scroll, 滚动到选项_:ScrollToOptions }
声明 函数 滚动(选项?: 滚动到选项_): 无值;
//@@{ 滚动到:scrollTo, 滚动到选项_:ScrollToOptions }
声明 函数 滚动到(选项?: 滚动到选项_): 无值;
//@@{ 滚动从:scrollBy, 滚动到选项_:ScrollToOptions }
声明 函数 滚动从(选项?: 滚动到选项_): 无值;
//@@{ 转为文字:toString }
声明 函数 转为文字(): 文字;
//@@{ 调度事件:dispatchEvent, 事件_:Event }
声明 函数 调度事件(事: 事件_): 真假;
//@@{ 删除事件监听器:removeEventListener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject, 事件监听器选项_:EventListenerOptions }
声明 函数 删除事件监听器(类型: 文字, 侦听器?: 事件侦听器或事件侦听器对象_, 选项?: 真假 | 事件监听器选项_): 无值;
//@@{ 清除时间间隔:clearInterval }
声明 函数 清除时间间隔(处理: 数字): 无值;
//@@{ 清除超时:clearTimeout }
声明 函数 清除超时(处理: 数字): 无值;
//@@{ 置时间间隔:setInterval }
声明 函数 置时间间隔(处理程序: (...参数组: 任意[]) => 无值, 超时: 数字): 数字;
//@@{ 置时间间隔:setInterval }
声明 函数 置时间间隔(处理程序: 任意, 超时?: 任意, ...参数组: 任意[]): 数字;
//@@{ 置超时:setTimeout }
声明 函数 置超时(处理程序: (...参数组: 任意[]) => 无值, 超时: 数字): 数字;
//@@{ 置超时:setTimeout }
声明 函数 置超时(处理程序: 任意, 超时?: 任意, ...参数组: 任意[]): 数字;
//@@{ 清除立即:clearImmediate }
声明 函数 清除立即(处理: 数字): 无值;
//@@{ 置立即:setImmediate }
声明 函数 置立即(处理程序: (...参数组: 任意[]) => 无值): 数字;
//@@{ 置立即:setImmediate }
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
//@@{ 解码:atob }
声明 函数 解码(编码的字符串: 文字): 文字;
//@@{ 编码:btoa }
声明 函数 编码(原始字符串: 文字): 文字;
//@@{ 获取:fetch, 请求信息_:RequestInfo, 请求初始化_:RequestInit, 预设_:Promise, 响应_:Response }
声明 函数 获取(输入: 请求信息_, 初始化?: 请求初始化_): 预设_<响应_>;
//@@{ 添加事件监听器:addEventListener, 窗口事件映射_:WindowEventMap, 窗口_:Window }
声明 函数 添加事件监听器<K 扩展 键为 窗口事件映射_>(类型: K, 侦听器: (本体: 窗口_, ev: 窗口事件映射_[K]) => 任意, 使用捕获?: 真假): 无值;
//@@{ 添加事件监听器:addEventListener, 事件侦听器或事件侦听器对象_:EventListenerOrEventListenerObject }
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
//@@{ 滚动行为_:ScrollBehavior }
类型 滚动行为_ = "自动" | "即时" | "平滑";
//@@{ 滚动逻辑位置_:ScrollLogicalPosition }
类型 滚动逻辑位置_ = "开始" | "中心" | "结束" | "最近的";
//@@{ IDB有效键:IDBValidKey, 日期_:Date, IDB数组键_:IDBArrayKey }
类型 IDB有效键 = 数字 | 文字 | 日期_ | IDB数组键_;
//@@{ 缓冲源_:BufferSource, 数组缓冲区_:ArrayBuffer, 数组缓冲区视图_:ArrayBufferView }
类型 缓冲源_ = 数组缓冲区_ | 数组缓冲区视图_;
//@@{ 鼠标滚轮事件_:MouseWheelEvent, 轮事件_:WheelEvent }
类型 鼠标滚轮事件_ = 轮事件_;
//@@{ 滚动恢复_:ScrollRestoration }
类型 滚动恢复_ = "自动" | "手动";
//@@{ 表单数据输入值_:FormDataEntryValue, 文件_:File }
类型 表单数据输入值_ = 文字 | 文件_;
//@@{ 插入位置_:InsertPosition }
类型 插入位置_ = "在开始之前" | "在开始之后" | "在结束之前" | "在结束之后";
//@@{ 附加模式_:AppendMode }
类型 附加模式_ = "部分" | "序列";
//@@{ 音频上下文状态_:AudioContextState }
类型 音频上下文状态_ = "暂停" | "运行" | "关闭";
//@@{ 滤波器类型_:BiquadFilterType }
类型 滤波器类型_ = "低通滤波器" | "高通滤波" | "带通" | "低架" | "高架" | "见顶" | "切口" | "全通";
//@@{ 画板填满规则_:CanvasFillRule }
类型 画板填满规则_ = "非零" | "奇偶";
//@@{ 通道计数模式_:ChannelCountMode }
类型 通道计数模式_ = "最大" | "夹-最大" | "显式的";
//@@{ 通道解释_:ChannelInterpretation }
类型 通道解释_ = "演讲者" | "离散";
//@@{ 距离模型类型_:DistanceModelType }
类型 距离模型类型_ = "线性" | "逆向" | "指数";
//@@{ 扩大粒度_:ExpandGranularity }
类型 扩大粒度_ = "字符" | "词" | "句子" | "文本编辑";
//@@{ 手柄输入仿真类型_:GamepadInputEmulationType }
类型 手柄输入仿真类型_ = "鼠标" | "键盘" | "手柄";
//@@{ IDB光标方向_:IDBCursorDirection }
类型 IDB光标方向_ = "下个" | "下个唯一" | "上个" | "上个唯一";
//@@{ IDB请求就绪状态_:IDBRequestReadyState }
类型 IDB请求就绪状态_ = "等待" | "完成";
//@@{ IDB事务模式_:IDBTransactionMode }
类型 IDB事务模式_ = "只读的" | "读写" | "版本改变";
//@@{ 监听状态_:ListeningState }
类型 监听状态_ = "不活跃" | "活动" | "消歧";
//@@{ 媒体设备类_:MediaDeviceKind }
类型 媒体设备类_ = "音频输入" | "音频输入" | "视频输入";
//@@{ 媒体键消息类型_:MediaKeyMessageType }
类型 媒体键消息类型_ = "许可证-要求" | "许可证-更新" | "许可证-释放" | "个性化-要求";
//@@{ 媒体键会话类型_:MediaKeySessionType }
类型 媒体键会话类型_ = "临时" | "持续性-许可证" | "持续性-释放-消息";
//@@{ 媒体键要求_:MediaKeysRequirement }
类型 媒体键要求_ = "必须的" | "可选" | "不-允许";
//@@{ 媒体键状态_:MediaKeyStatus }
类型 媒体键状态_ = "可用的" | "过期的" | "输出-缩减" | "输出-不-允许" | "状态-待定" | "内部-错误";
//@@{ 媒体流跟踪状态_:MediaStreamTrackState }
类型 媒体流跟踪状态_ = "存活" | "结束了";
//@@{ MS凭证类型_:MSCredentialType }
类型 MS凭证类型_ = "FIDO_2_0";
//@@{ MSIce地址类型_:MSIceAddrType }
类型 MSIce地址类型_ = "系统" | "stun" | "turn" | "对等-源" ;
//@@{ MSIce类型_:MSIceType }
类型 MSIce类型_ = "失败的" | "直接" | "中继";
//@@{ MS统计数据类型_:MSStatsType }
类型 MS统计数据类型_ = "描述" | "本地客户端事件" | "入站-网络" | "出站-网络" | "入站-有效荷载" | "出站-有效荷载" | "端口诊断特点";
//@@{ MS传输类型_:MSTransportType }
类型 MS传输类型_ = "嵌入式" | "USB" | "NFC" | "BT";
//@@{ MS网络视图许可状态_:MSWebViewPermissionState }
类型 MS网络视图许可状态_ = "未知的" | "推迟" | "允许" | "否认";
//@@{ 网络视图许可类型_:MSWebViewPermissionType }
类型 网络视图许可类型_ = "地理位置" | "无限索引数据库限额" | "媒体" | "指针锁" | "网站通知";
//@@{ 导航原因_:NavigationReason }
类型 导航原因_ = "向上" | "向下" | "左" | "右";
//@@{ 导航类型_:NavigationType }
类型 导航类型_ = "导航" | "重新加载" | "退回_向前" | "预渲染";
//@@{ 通知方向_:NotificationDirection }
类型 通知方向_ = "自动" | "左向右" | "右向左";
//@@{ 通知许可_:NotificationPermission }
类型 通知许可_ = "默认" | "否认" | "授予";
//@@{ 振荡器类型_:OscillatorType }
类型 振荡器类型_ = "正弦" | "广场" | "锯齿波" | "三角形" | "自定义";
//@@{ 样品类型_:OverSampleType }
类型 样品类型_ = "没有" | "2x" | "4x";
//@@{ 平移模型类型_:PanningModelType }
类型 平移模型类型_ = "平等权力";
//@@{ 付款完成_:PaymentComplete }
类型 付款完成_ = "成功" | "失败" | "";
//@@{ 支付运输类型_:PaymentShippingType }
类型 支付运输类型_ = "航运" | "交付" | "皮卡";
//@@{ 压入加密键名称_:PushEncryptionKeyName }
类型 压入加密键名称_ = "p256dh" | "身份验证";
//@@{ 压入许可状态_:PushPermissionState }
类型 压入许可状态_ = "授予" | "否认" | "提示";
//@@{ 推荐人政策_:ReferrerPolicy }
类型 推荐人政策_ = "" | "没-推荐人" | "没-推荐人-当-降级" | "起点-只有" | "起点-位于-焦点" | "不安全-URL";
//@@{ 请求缓存_:RequestCache }
类型 请求缓存_ = "默认" | "没-商店" | "重新加载" | "没-缓存" | "隐藏-缓存";
//@@{ 请求凭证_:RequestCredentials }
类型 请求凭证_ = "省略" | "相同-起点" | "包括";
//@@{ 请求目的地_:RequestDestination, "子资源":"subresource", "工人":"worker" }
类型 请求目的地_ = "" | "文档" | "共享工人" | "子资源" | "未知的" | "工人";
//@@{ 请求模式_:RequestMode }
类型 请求模式_ = "导航" | "相同-起点" | "不-连续" | "连续";
//@@{ 请求重定向_:RequestRedirect }
类型 请求重定向_ = "遵循" | "错误" | "手动";
//@@{ 请求类型_:RequestType }
类型 请求类型_ = "" | "音频" | "字体" | "图像" | "脚本" | "样式" | "轨道" | "视频";
//@@{ 响应类型_:ResponseType }
类型 响应类型_ = "基本" | "连续" | "默认" | "错误" | "不透明的" | "不透明的重定向";
//@@{ RTC包政策_:RTCBundlePolicy }
类型 RTC包政策_ = "平衡" | "最大-兼容" | "最大-包";
//@@{ RTC退化偏好_:RTCDegradationPreference }
类型 RTC退化偏好_ = "保持-帧率" | "保持-分辨率" | "平衡";
//@@{ RTCDtls角色_:RTCDtlsRole }
类型 RTCDtls角色_ = "自动" | "客户端" | "服务器";
//@@{ RTCDtls传输状态_:RTCDtlsTransportState }
类型 RTCDtls传输状态_ = "新建" | "连接时" | "连接后" | "关闭";
//@@{ RTCIce候选类型:RTCIceCandidateType }
类型 RTCIce候选类型 = "主机" | "srflx" | "prflx" | "中继";
//@@{ RTCIce组件_:RTCIceComponent }
类型 RTCIce组件_ = "RTP" | "RTCP";
//@@{ RTCIce连接状态_:RTCIceConnectionState }
类型 RTCIce连接状态_ = "新建" | "检查" | "连接后" | "完成" | "失败的" | "断开连接" | "关闭";
//@@{ RTCIce采集者状态_:RTCIceGathererState }
类型 RTCIce采集者状态_ = "新建" | "收集" | "完整的";
//@@{ RTCIce聚集状态_:RTCIceGatheringState }
类型 RTCIce聚集状态_ = "新建" | "收集" | "完整的";
//@@{ RTCIce收集政策_:RTCIceGatherPolicy }
类型 RTCIce收集政策_ = "所有" | "无主机" | "中继";
//@@{ RTCIce协议_:RTCIceProtocol }
类型 RTCIce协议_ = "udp" | "tcp";
//@@{ RTCIce角色_:RTCIceRole }
类型 RTCIce角色_ = "控制时" | "控制";
//@@{ RTCIceTcp候选类型_:RTCIceTcpCandidateType }
类型 RTCIceTcp候选类型_ = "活动" | "被动" | "so";
//@@{ RTCIce传输政策_:RTCIceTransportPolicy }
类型 RTCIce传输政策_ = "没有" | "中继" | "所有";
//@@{ RTCIce传输状态_:RTCIceTransportState }
类型 RTCIce传输状态_ = "新建" | "检查" | "连接后" | "完成" | "断开连接" | "关闭";
//@@{ RTCSdp类型_:RTCSdpType }
类型 RTCSdp类型_ = "提供" | "pranswer" | "answer";
//@@{ RTC信号状态_:RTCSignalingState }
类型 RTC信号状态_ = "稳定的" | "有-本地-提供" | "有-远程-提供" | "have-local-pranswer" | "have-remote-pranswer" | "关闭";
//@@{ RTC统计Ice候选一对状态_:RTCStatsIceCandidatePairState }
类型 RTC统计Ice候选一对状态_ = "冻" | "等待" | "按比例位移" | "失败的" | "成功" | "取消了";
//@@{ RTC统计Ice候选类型_:RTCStatsIceCandidateType }
类型 RTC统计Ice候选类型_ = "主机" | "服务器自反" | "对等自反" | "转播";
//@@{ RTC统计类型_:RTCStatsType }
类型 RTC统计类型_ = "进站Rtp" | "出站Rtp" | "会话" | "数据通道" | "轨道" | "传输" | "候选对" | "本地候选" | "远的候选";
//@@{ 作用域凭证类型_:ScopedCredentialType }
类型 作用域凭证类型_ = "作用域信誉_";
//@@{ 服务工作状态_:ServiceWorkerState }
类型 服务工作状态_ = "安装中" | "安装" | "激活中" | "激活" | "冗余";
//@@{ 传输_:Transport }
类型 传输_ = "usb" | "nfc" | "ble";
//@@{ 视频面对模式枚举_:VideoFacingModeEnum }
类型 视频面对模式枚举_ = "用户" | "环境" | "左" | "右";
//@@{ 可见性状态_:VisibilityState }
类型 可见性状态_ = "隐藏的" | "可见的" | "预渲染" | "卸载";
//@@{ XMLHttp请求响应类型_:XMLHttpRequestResponseType }
类型 XMLHttp请求响应类型_ = "" | "数组缓冲" | "二进制对象" | "文档" | "json" | "文本";