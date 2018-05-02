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



/// <引用 不用默认库="真"/>
/////////////////////////////
/// Worker APIs
/////////////////////////////
接口 AddEventListenerOptions 扩展 EventListenerOptions {
    once?: 真假;
    passive?: 真假;

}
接口 Algorithm {
    name: 文字;

}
接口 CacheQueryOptions {
    cacheName?: 文字;
    ignoreMethod?: 真假;
    ignoreSearch?: 真假;
    ignoreVary?: 真假;

}
接口 ClientQueryOptions {
    includeReserved?: 真假;
    includeUncontrolled?: 真假;
    type?: ClientTypes;

}
接口 CloseEventInit 扩展 EventInit {
    code?: 数字;
    reason?: 文字;
    wasClean?: 真假;

}
接口 ErrorEventInit 扩展 EventInit {
    colno?: 数字;
    error?: 任意;
    filename?: 文字;
    lineno?: 数字;
    message?: 文字;

}
接口 EventInit {
    bubbles?: 真假;
    cancelable?: 真假;
    scoped?: 真假;

}
接口 EventListenerOptions {
    capture?: 真假;

}
接口 ExtendableEventInit 扩展 EventInit {

}
接口 ExtendableMessageEventInit 扩展 ExtendableEventInit {
    data?: 任意;
    lastEventId?: 文字;
    origin?: 文字;
    ports?: MessagePort[] | 空值;
    source?: Client | ServiceWorker | MessagePort | 空值;

}
接口 FetchEventInit 扩展 ExtendableEventInit {
    clientId?: 文字;
    request: Request;
    reservedClientId?: 文字;
    targetClientId?: 文字;

}
接口 GetNotificationOptions {
    tag?: 文字;

}
接口 IDBIndexParameters {
    multiEntry?: 真假;
    unique?: 真假;

}
接口 IDBObjectStoreParameters {
    autoIncrement?: 真假;
    keyPath?: 文字 | 文字[];

}
接口 KeyAlgorithm {
    name: 文字;

}
接口 MessageEventInit 扩展 EventInit {
    channel?: 文字;
    data?: 任意;
    lastEventId?: 文字;
    origin?: 文字;
    ports?: MessagePort[];
    source?: 实例 | 空值;

}
接口 NotificationEventInit 扩展 ExtendableEventInit {
    action?: 文字;
    notification: Notification;

}
接口 NotificationOptions {
    body?: 文字;
    data?: 任意;
    dir?: NotificationDirection;
    icon?: 文字;
    lang?: 文字;
    tag?: 文字;

}
接口 ObjectURLOptions {
    oneTimeOnly?: 真假;

}
接口 ProgressEventInit 扩展 EventInit {
    lengthComputable?: 真假;
    loaded?: 数字;
    total?: 数字;

}
接口 PushEventInit 扩展 ExtendableEventInit {
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    data?: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 文字 | 空值;

}
接口 PushSubscriptionChangeInit 扩展 ExtendableEventInit {
    newSubscription?: PushSubscription;
    oldSubscription?: PushSubscription;

}
接口 PushSubscriptionOptionsInit {
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    applicationServerKey?: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 文字 | 空值;
    userVisibleOnly?: 真假;

}
接口 RequestInit {
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    body?: Blob | 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | FormData | 文字 | 空值;
    cache?: RequestCache;
    credentials?: RequestCredentials;
    headers?: HeadersInit;
    integrity?: 文字;
    keepalive?: 真假;
    method?: 文字;
    mode?: RequestMode;
    redirect?: RequestRedirect;
    referrer?: 文字;
    referrerPolicy?: ReferrerPolicy;
    signal?: 实例;
    window?: 任意;

}
接口 ResponseInit {
    headers?: HeadersInit;
    status?: 数字;
    statusText?: 文字;

}
接口 SyncEventInit 扩展 ExtendableEventInit {
    lastChance?: 真假;
    tag: 文字;

}
接口 EventListener {
    (evt: Event): 无值;

}
接口 AbstractWorkerEventMap {
    "error": ErrorEvent;

}
接口 AbstractWorker {
    onerror: ((this: AbstractWorker, ev: ErrorEvent) => 任意) | 空值;
    addEventListener<K 扩展 键为 AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
接口 AudioBuffer {
    只读 duration: 数字;
    只读 length: 数字;
    只读 numberOfChannels: 数字;
    只读 sampleRate: 数字;
    //@@{ 浮点数组32_:Float32Array }
    copyFromChannel(destination: 浮点数组32_, channelNumber: 数字, startInChannel?: 数字): 无值;
    //@@{ 浮点数组32_:Float32Array }
    copyToChannel(source: 浮点数组32_, channelNumber: 数字, startInChannel?: 数字): 无值;
    //@@{ 浮点数组32_:Float32Array }
    getChannelData(channel: 数字): 浮点数组32_;

}
声明 值量 AudioBuffer: {
    prototype: AudioBuffer;
    新建(): AudioBuffer;

};
接口 Blob {
    只读 size: 数字;
    只读 type: 文字;
    msClose(): 无值;
    msDetachStream(): 任意;
    slice(start?: 数字, end?: 数字, contentType?: 文字): Blob;

}
声明 值量 Blob: {
    prototype: Blob;
    新建 (blobParts?: 任意[], options?: BlobPropertyBag): Blob;

};
接口 BlobPropertyBag {
    endings?: 文字;
    type?: 文字;

}
接口 Body {
    只读 bodyUsed: 真假;
    //@@{ 预设_:Promise, 数组缓冲区_:ArrayBuffer }
    arrayBuffer(): 预设_<数组缓冲区_>;
    //@@{ 预设_:Promise }
    blob(): 预设_<Blob>;
    //@@{ 预设_:Promise }
    formData(): 预设_<FormData>;
    //@@{ 预设_:Promise }
    json(): 预设_<任意>;
    //@@{ 预设_:Promise }
    text(): 预设_<文字>;

}
接口 Cache {
    //@@{ 预设_:Promise }
    add(request: Request | 文字): 预设_<无值>;
    //@@{ 预设_:Promise }
    addAll(requests: (Request | 文字)[]): 预设_<无值>;
    //@@{ 预设_:Promise }
    delete(request: Request | 文字, options?: CacheQueryOptions): 预设_<真假>;
    //@@{ 预设_:Promise }
    keys(request?: Request | 文字, options?: CacheQueryOptions): 预设_<Request[]>;
    //@@{ 预设_:Promise }
    match(request: Request | 文字, options?: CacheQueryOptions): 预设_<Response>;
    //@@{ 预设_:Promise }
    matchAll(request?: Request | 文字, options?: CacheQueryOptions): 预设_<Response[]>;
    //@@{ 预设_:Promise }
    put(request: Request | 文字, response: Response): 预设_<无值>;

}
声明 值量 Cache: {
    prototype: Cache;
    新建(): Cache;

};
接口 CacheStorage {
    //@@{ 预设_:Promise }
    delete(cacheName: 文字): 预设_<真假>;
    //@@{ 预设_:Promise }
    has(cacheName: 文字): 预设_<真假>;
    //@@{ 预设_:Promise }
    keys(): 预设_<文字[]>;
    //@@{ 预设_:Promise }
    match(request: Request | 文字, options?: CacheQueryOptions): 预设_<任意>;
    //@@{ 预设_:Promise }
    open(cacheName: 文字): 预设_<Cache>;

}
声明 值量 CacheStorage: {
    prototype: CacheStorage;
    新建(): CacheStorage;

};
接口 Client {
    只读 id: 文字;
    只读 reserved: 真假;
    只读 type: ClientTypes;
    只读 url: 文字;
    postMessage(message: 任意, transfer?: 任意[]): 无值;

}
声明 值量 Client: {
    prototype: Client;
    新建(): Client;

};
接口 Clients {
    //@@{ 预设_:Promise }
    claim(): 预设_<无值>;
    //@@{ 预设_:Promise }
    get(id: 文字): 预设_<任意>;
    //@@{ 预设_:Promise }
    matchAll(options?: ClientQueryOptions): 预设_<Client[]>;
    //@@{ 预设_:Promise }
    openWindow(url: 文字): 预设_<WindowClient | 空值>;

}
声明 值量 Clients: {
    prototype: Clients;
    新建(): Clients;

};
接口 CloseEvent 扩展 Event {
    只读 code: 数字;
    只读 reason: 文字;
    只读 wasClean: 真假;

    /** @deprecated */
    initCloseEvent(typeArg: 文字, canBubbleArg: 真假, cancelableArg: 真假, wasCleanArg: 真假, codeArg: 数字, reasonArg: 文字): 无值;

}
声明 值量 CloseEvent: {
    prototype: CloseEvent;
    新建(type: 文字, eventInitDict?: CloseEventInit): CloseEvent;

};
接口 Console {
    memory: 任意;
    assert(condition?: 真假, message?: 文字, ...data: 任意[]): 无值;
    clear(): 无值;
    count(label?: 文字): 无值;
    debug(message?: 任意, ...optionalParams: 任意[]): 无值;
    dir(value?: 任意, ...optionalParams: 任意[]): 无值;
    dirxml(value: 任意): 无值;
    error(message?: 任意, ...optionalParams: 任意[]): 无值;
    exception(message?: 文字, ...optionalParams: 任意[]): 无值;
    group(groupTitle?: 文字, ...optionalParams: 任意[]): 无值;
    groupCollapsed(groupTitle?: 文字, ...optionalParams: 任意[]): 无值;
    groupEnd(): 无值;
    info(message?: 任意, ...optionalParams: 任意[]): 无值;
    log(message?: 任意, ...optionalParams: 任意[]): 无值;
    markTimeline(label?: 文字): 无值;
    msIsIndependentlyComposed(element: 实例): 真假;
    profile(reportName?: 文字): 无值;
    profileEnd(): 无值;
    select(element: 实例): 无值;
    table(...tabularData: 任意[]): 无值;
    time(label?: 文字): 无值;
    timeEnd(label?: 文字): 无值;
    timeStamp(label?: 文字): 无值;
    timeline(label?: 文字): 无值;
    timelineEnd(label?: 文字): 无值;
    trace(message?: 任意, ...optionalParams: 任意[]): 无值;
    warn(message?: 任意, ...optionalParams: 任意[]): 无值;

}
声明 值量 Console: {
    prototype: Console;
    新建(): Console;

};
接口 Coordinates {
    只读 accuracy: 数字;
    只读 altitude: 数字 | 空值;
    只读 altitudeAccuracy: 数字 | 空值;
    只读 heading: 数字 | 空值;
    只读 latitude: 数字;
    只读 longitude: 数字;
    只读 speed: 数字 | 空值;

}
声明 值量 Coordinates: {
    prototype: Coordinates;
    新建(): Coordinates;

};
接口 CryptoKey {
    只读 algorithm: KeyAlgorithm;
    只读 extractable: 真假;
    只读 type: 文字;
    只读 usages: 文字[];

}
声明 值量 CryptoKey: {
    prototype: CryptoKey;
    新建(): CryptoKey;

};
接口 DOMError {
    只读 name: 文字;
    toString(): 文字;

}
声明 值量 DOMError: {
    prototype: DOMError;
    新建(): DOMError;

};
接口 DOMException {
    只读 code: 数字;
    只读 message: 文字;
    只读 name: 文字;
    toString(): 文字;
    只读 ABORT_ERR: 数字;
    只读 DATA_CLONE_ERR: 数字;
    只读 DOMSTRING_SIZE_ERR: 数字;
    只读 HIERARCHY_REQUEST_ERR: 数字;
    只读 INDEX_SIZE_ERR: 数字;
    只读 INUSE_ATTRIBUTE_ERR: 数字;
    只读 INVALID_ACCESS_ERR: 数字;
    只读 INVALID_CHARACTER_ERR: 数字;
    只读 INVALID_MODIFICATION_ERR: 数字;
    只读 INVALID_NODE_TYPE_ERR: 数字;
    只读 INVALID_STATE_ERR: 数字;
    只读 NAMESPACE_ERR: 数字;
    只读 NETWORK_ERR: 数字;
    只读 NOT_FOUND_ERR: 数字;
    只读 NOT_SUPPORTED_ERR: 数字;
    只读 NO_DATA_ALLOWED_ERR: 数字;
    只读 NO_MODIFICATION_ALLOWED_ERR: 数字;
    只读 PARSE_ERR: 数字;
    只读 QUOTA_EXCEEDED_ERR: 数字;
    只读 SECURITY_ERR: 数字;
    只读 SERIALIZE_ERR: 数字;
    只读 SYNTAX_ERR: 数字;
    只读 TIMEOUT_ERR: 数字;
    只读 TYPE_MISMATCH_ERR: 数字;
    只读 URL_MISMATCH_ERR: 数字;
    只读 VALIDATION_ERR: 数字;
    只读 WRONG_DOCUMENT_ERR: 数字;

}
声明 值量 DOMException: {
    prototype: DOMException;
    新建(message?: 文字, name?: 文字): DOMException;
    只读 ABORT_ERR: 数字;
    只读 DATA_CLONE_ERR: 数字;
    只读 DOMSTRING_SIZE_ERR: 数字;
    只读 HIERARCHY_REQUEST_ERR: 数字;
    只读 INDEX_SIZE_ERR: 数字;
    只读 INUSE_ATTRIBUTE_ERR: 数字;
    只读 INVALID_ACCESS_ERR: 数字;
    只读 INVALID_CHARACTER_ERR: 数字;
    只读 INVALID_MODIFICATION_ERR: 数字;
    只读 INVALID_NODE_TYPE_ERR: 数字;
    只读 INVALID_STATE_ERR: 数字;
    只读 NAMESPACE_ERR: 数字;
    只读 NETWORK_ERR: 数字;
    只读 NOT_FOUND_ERR: 数字;
    只读 NOT_SUPPORTED_ERR: 数字;
    只读 NO_DATA_ALLOWED_ERR: 数字;
    只读 NO_MODIFICATION_ALLOWED_ERR: 数字;
    只读 PARSE_ERR: 数字;
    只读 QUOTA_EXCEEDED_ERR: 数字;
    只读 SECURITY_ERR: 数字;
    只读 SERIALIZE_ERR: 数字;
    只读 SYNTAX_ERR: 数字;
    只读 TIMEOUT_ERR: 数字;
    只读 TYPE_MISMATCH_ERR: 数字;
    只读 URL_MISMATCH_ERR: 数字;
    只读 VALIDATION_ERR: 数字;
    只读 WRONG_DOCUMENT_ERR: 数字;

};
接口 DOMStringList {
    只读 length: 数字;
    contains(str: 文字): 真假;
    item(index: 数字): 文字 | 空值;
    [index: 数字]: 文字;

}
声明 值量 DOMStringList: {
    prototype: DOMStringList;
    新建(): DOMStringList;

};
接口 DedicatedWorkerGlobalScopeEventMap 扩展 WorkerGlobalScopeEventMap {
    "message": MessageEvent;

}
接口 DedicatedWorkerGlobalScope 扩展 WorkerGlobalScope {
    onmessage: ((this: DedicatedWorkerGlobalScope, ev: MessageEvent) => 任意) | 空值;
    close(): 无值;
    postMessage(message: 任意, transfer?: 任意[]): 无值;
    addEventListener<K 扩展 键为 DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 DedicatedWorkerGlobalScope: {
    prototype: DedicatedWorkerGlobalScope;
    新建(): DedicatedWorkerGlobalScope;

};
接口 ErrorEvent 扩展 Event {
    只读 colno: 数字;
    只读 error: 任意;
    只读 filename: 文字;
    只读 lineno: 数字;
    只读 message: 文字;
    initErrorEvent(typeArg: 文字, canBubbleArg: 真假, cancelableArg: 真假, messageArg: 文字, filenameArg: 文字, linenoArg: 数字): 无值;

}
声明 值量 ErrorEvent: {
    prototype: ErrorEvent;
    新建(typeArg: 文字, eventInitDict?: ErrorEventInit): ErrorEvent;

};
接口 Event {
    只读 bubbles: 真假;
    cancelBubble: 真假;
    只读 cancelable: 真假;
    只读 currentTarget: EventTarget | 空值;
    只读 defaultPrevented: 真假;
    只读 eventPhase: 数字;
    只读 isTrusted: 真假;
    returnValue: 真假;
    只读 scoped: 真假;
    只读 srcElement: 实例 | 空值;
    只读 target: EventTarget | 空值;
    只读 timeStamp: 数字;
    只读 type: 文字;
    deepPath(): EventTarget[];
    initEvent(type: 文字, bubbles?: 真假, cancelable?: 真假): 无值;
    preventDefault(): 无值;
    stopImmediatePropagation(): 无值;
    stopPropagation(): 无值;
    只读 AT_TARGET: 数字;
    只读 BUBBLING_PHASE: 数字;
    只读 CAPTURING_PHASE: 数字;
    只读 NONE: 数字;

}
声明 值量 Event: {
    prototype: Event;
    新建(typeArg: 文字, eventInitDict?: EventInit): Event;
    只读 AT_TARGET: 数字;
    只读 BUBBLING_PHASE: 数字;
    只读 CAPTURING_PHASE: 数字;
    只读 NONE: 数字;

};
接口 EventListenerObject {
    handleEvent(evt: Event): 无值;

}
接口 EventTarget {
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject | 空值, options?: 真假 | AddEventListenerOptions): 无值;
    dispatchEvent(evt: Event): 真假;
    removeEventListener(type: 文字, listener?: EventListenerOrEventListenerObject | 空值, options?: EventListenerOptions | 真假): 无值;

}
声明 值量 EventTarget: {
    prototype: EventTarget;
    新建(): EventTarget;

};
接口 ExtendableEvent 扩展 Event {
    //@@{ 预设_:Promise }
    waitUntil(f: 预设_<任意>): 无值;

}
声明 值量 ExtendableEvent: {
    prototype: ExtendableEvent;
    新建(type: 文字, eventInitDict?: ExtendableEventInit): ExtendableEvent;

};
接口 ExtendableMessageEvent 扩展 ExtendableEvent {
    只读 data: 任意;
    只读 lastEventId: 文字;
    只读 origin: 文字;
    //@@{ 只读数组_:ReadonlyArray }
    只读 ports: 只读数组_<MessagePort> | 空值;
    只读 source: Client | ServiceWorker | MessagePort | 空值;

}
声明 值量 ExtendableMessageEvent: {
    prototype: ExtendableMessageEvent;
    新建(type: 文字, eventInitDict?: ExtendableMessageEventInit): ExtendableMessageEvent;

};
接口 FetchEvent 扩展 ExtendableEvent {
    只读 clientId: 文字;
    只读 request: Request;
    只读 reservedClientId: 文字;
    只读 targetClientId: 文字;
    //@@{ 预设_:Promise }
    respondWith(r: 预设_<Response>): 无值;

}
声明 值量 FetchEvent: {
    prototype: FetchEvent;
    新建(type: 文字, eventInitDict: FetchEventInit): FetchEvent;

};
接口 File 扩展 Blob {
    只读 lastModified: 数字;

    /** @deprecated */
    //@@{ 日期_:Date }
    只读 lastModifiedDate: 日期_;
    只读 name: 文字;
    只读 webkitRelativePath: 文字;

}
声明 值量 File: {
    prototype: File;
    //@@{ 数组缓冲区_:ArrayBuffer, 数组缓冲区视图_:ArrayBufferView }
    新建 (parts: (数组缓冲区_ | 数组缓冲区视图_ | Blob | 文字)[], filename: 文字, properties?: FilePropertyBag): File;

};
接口 FileList {
    只读 length: 数字;
    item(index: 数字): File | 空值;
    [index: 数字]: File;

}
声明 值量 FileList: {
    prototype: FileList;
    新建(): FileList;

};
接口 FilePropertyBag 扩展 BlobPropertyBag {
    lastModified?: 数字;

}
接口 FileReaderEventMap {
    "abort": ProgressEvent;
    "error": ProgressEvent;
    "load": ProgressEvent;
    "loadend": ProgressEvent;
    "loadstart": ProgressEvent;
    "progress": ProgressEvent;

}
接口 FileReader 扩展 EventTarget {
    只读 error: DOMException | 空值;
    onabort: ((this: FileReader, ev: FileReaderProgressEvent) => 任意) | 空值;
    onerror: ((this: FileReader, ev: FileReaderProgressEvent) => 任意) | 空值;
    onload: ((this: FileReader, ev: FileReaderProgressEvent) => 任意) | 空值;
    onloadend: ((this: FileReader, ev: FileReaderProgressEvent) => 任意) | 空值;
    onloadstart: ((this: FileReader, ev: FileReaderProgressEvent) => 任意) | 空值;
    onprogress: ((this: FileReader, ev: FileReaderProgressEvent) => 任意) | 空值;
    只读 readyState: 数字;
    只读 result: 任意;
    abort(): 无值;
    readAsArrayBuffer(blob: Blob): 无值;
    readAsBinaryString(blob: Blob): 无值;
    readAsDataURL(blob: Blob): 无值;
    readAsText(blob: Blob, label?: 文字): 无值;
    只读 DONE: 数字;
    只读 EMPTY: 数字;
    只读 LOADING: 数字;
    addEventListener<K 扩展 键为 FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 FileReader: {
    prototype: FileReader;
    新建(): FileReader;
    只读 DONE: 数字;
    只读 EMPTY: 数字;
    只读 LOADING: 数字;

};
接口 FileReaderProgressEvent 扩展 ProgressEvent {
    只读 target: FileReader | 空值;

}
接口 FileReaderSync {
    readAsArrayBuffer(blob: Blob): 任意;
    readAsBinaryString(blob: Blob): 无值;
    readAsDataURL(blob: Blob): 文字;
    readAsText(blob: Blob, encoding?: 文字): 文字;

}
声明 值量 FileReaderSync: {
    prototype: FileReaderSync;
    新建(): FileReaderSync;

};
接口 FormData {
    append(name: 文字, value: 文字 | Blob, fileName?: 文字): 无值;
    delete(name: 文字): 无值;
    get(name: 文字): FormDataEntryValue | 空值;
    getAll(name: 文字): FormDataEntryValue[];
    has(name: 文字): 真假;
    set(name: 文字, value: 文字 | Blob, fileName?: 文字): 无值;

}
声明 值量 FormData: {
    prototype: FormData;
    新建(): FormData;
    新建(form: 实例): FormData;

};
接口 GlobalFetch {
    //@@{ 预设_:Promise }
    fetch(input?: Request | 文字, init?: RequestInit): 预设_<Response>;

}
接口 Headers {
    append(name: 文字, value: 文字): 无值;
    delete(name: 文字): 无值;
    //@@{ 函数_:Function }
    forEach(callback: 函数_, thisArg?: 任意): 无值;
    get(name: 文字): 文字 | 空值;
    has(name: 文字): 真假;
    set(name: 文字, value: 文字): 无值;

}
声明 值量 Headers: {
    prototype: Headers;
    新建(init?: HeadersInit): Headers;

};
//@@{ 数组_:Array, 日期_:Date }
接口 IDBArrayKey 扩展 数组_<数字 | 文字 | 日期_ | IDBArrayKey> {

}
接口 IDBCursor {
    只读 direction: IDBCursorDirection;
    //@@{ 日期_:Date }
    只读 key: IDBKeyRange | 数字 | 文字 | 日期_ | IDBArrayKey;
    只读 primaryKey: 任意;
    只读 source: IDBObjectStore | IDBIndex;
    advance(count: 数字): 无值;
    //@@{ 日期_:Date }
    continue(key?: IDBKeyRange | 数字 | 文字 | 日期_ | IDBArrayKey): 无值;
    delete(): IDBRequest;
    update(value: 任意): IDBRequest;
    只读 NEXT: 文字;
    只读 NEXT_NO_DUPLICATE: 文字;
    只读 PREV: 文字;
    只读 PREV_NO_DUPLICATE: 文字;

}
声明 值量 IDBCursor: {
    prototype: IDBCursor;
    新建(): IDBCursor;
    只读 NEXT: 文字;
    只读 NEXT_NO_DUPLICATE: 文字;
    只读 PREV: 文字;
    只读 PREV_NO_DUPLICATE: 文字;

};
接口 IDBCursorWithValue 扩展 IDBCursor {
    只读 value: 任意;

}
声明 值量 IDBCursorWithValue: {
    prototype: IDBCursorWithValue;
    新建(): IDBCursorWithValue;

};
接口 IDBDatabaseEventMap {
    "abort": Event;
    "error": Event;

}
接口 IDBDatabase 扩展 EventTarget {
    只读 name: 文字;
    只读 objectStoreNames: DOMStringList;
    onabort: ((this: IDBDatabase, ev: Event) => 任意) | 空值;
    onerror: ((this: IDBDatabase, ev: Event) => 任意) | 空值;
    onversionchange: ((this: IDBDatabase, ev: Event) => 任意) | 空值;
    只读 version: 数字;
    close(): 无值;
    createObjectStore(name: 文字, optionalParameters?: IDBObjectStoreParameters): IDBObjectStore;
    deleteObjectStore(name: 文字): 无值;
    transaction(storeNames: 文字 | 文字[], mode?: IDBTransactionMode): IDBTransaction;
    addEventListener<K 扩展 键为 IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 IDBDatabase: {
    prototype: IDBDatabase;
    新建(): IDBDatabase;

};
接口 IDBFactory {
    cmp(first: 任意, second: 任意): 数字;
    deleteDatabase(name: 文字): IDBOpenDBRequest;
    open(name: 文字, version?: 数字): IDBOpenDBRequest;

}
声明 值量 IDBFactory: {
    prototype: IDBFactory;
    新建(): IDBFactory;

};
接口 IDBIndex {
    只读 keyPath: 文字 | 文字[];
    multiEntry: 真假;
    只读 name: 文字;
    只读 objectStore: IDBObjectStore;
    只读 unique: 真假;
    //@@{ 日期_:Date }
    count(key?: IDBKeyRange | 数字 | 文字 | 日期_ | IDBArrayKey): IDBRequest;
    //@@{ 日期_:Date }
    get(key: IDBKeyRange | 数字 | 文字 | 日期_ | IDBArrayKey): IDBRequest;
    //@@{ 日期_:Date }
    getKey(key: IDBKeyRange | 数字 | 文字 | 日期_ | IDBArrayKey): IDBRequest;
    //@@{ 日期_:Date }
    openCursor(range?: IDBKeyRange | 数字 | 文字 | 日期_ | IDBArrayKey, direction?: IDBCursorDirection): IDBRequest;
    //@@{ 日期_:Date }
    openKeyCursor(range?: IDBKeyRange | 数字 | 文字 | 日期_ | IDBArrayKey, direction?: IDBCursorDirection): IDBRequest;

}
声明 值量 IDBIndex: {
    prototype: IDBIndex;
    新建(): IDBIndex;

};
接口 IDBKeyRange {
    只读 lower: 任意;
    只读 lowerOpen: 真假;
    只读 upper: 任意;
    只读 upperOpen: 真假;

}
声明 值量 IDBKeyRange: {
    prototype: IDBKeyRange;
    新建(): IDBKeyRange;
    bound(lower: 任意, upper: 任意, lowerOpen?: 真假, upperOpen?: 真假): IDBKeyRange;
    lowerBound(lower: 任意, open?: 真假): IDBKeyRange;
    only(value: 任意): IDBKeyRange;
    upperBound(upper: 任意, open?: 真假): IDBKeyRange;

};
接口 IDBObjectStore {
    autoIncrement: 真假;
    只读 indexNames: DOMStringList;
    只读 keyPath: 文字 | 文字[] | 空值;
    只读 name: 文字;
    只读 transaction: IDBTransaction;
    //@@{ 日期_:Date }
    add(value: 任意, key?: IDBKeyRange | 数字 | 文字 | 日期_ | IDBArrayKey): IDBRequest;
    clear(): IDBRequest;
    //@@{ 日期_:Date }
    count(key?: IDBKeyRange | 数字 | 文字 | 日期_ | IDBArrayKey): IDBRequest;
    createIndex(name: 文字, keyPath: 文字 | 文字[], optionalParameters?: IDBIndexParameters): IDBIndex;
    //@@{ 日期_:Date }
    delete(key: IDBKeyRange | 数字 | 文字 | 日期_ | IDBArrayKey): IDBRequest;
    deleteIndex(indexName: 文字): 无值;
    get(key: 任意): IDBRequest;
    index(name: 文字): IDBIndex;
    //@@{ 日期_:Date }
    openCursor(range?: IDBKeyRange | 数字 | 文字 | 日期_ | IDBArrayKey, direction?: IDBCursorDirection): IDBRequest;
    //@@{ 日期_:Date }
    put(value: 任意, key?: IDBKeyRange | 数字 | 文字 | 日期_ | IDBArrayKey): IDBRequest;

}
声明 值量 IDBObjectStore: {
    prototype: IDBObjectStore;
    新建(): IDBObjectStore;

};
接口 IDBOpenDBRequestEventMap 扩展 IDBRequestEventMap {
    "blocked": Event;
    "upgradeneeded": IDBVersionChangeEvent;

}
接口 IDBOpenDBRequest 扩展 IDBRequest {
    onblocked: ((this: IDBOpenDBRequest, ev: Event) => 任意) | 空值;
    onupgradeneeded: ((this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => 任意) | 空值;
    addEventListener<K 扩展 键为 IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 IDBOpenDBRequest: {
    prototype: IDBOpenDBRequest;
    新建(): IDBOpenDBRequest;

};
接口 IDBRequestEventMap {
    "error": Event;
    "success": Event;

}
接口 IDBRequest 扩展 EventTarget {
    只读 error: DOMException;
    onerror: ((this: IDBRequest, ev: Event) => 任意) | 空值;
    onsuccess: ((this: IDBRequest, ev: Event) => 任意) | 空值;
    只读 readyState: IDBRequestReadyState;
    只读 result: 任意;
    只读 source: IDBObjectStore | IDBIndex | IDBCursor;
    只读 transaction: IDBTransaction;
    addEventListener<K 扩展 键为 IDBRequestEventMap>(type: K, listener: (this: IDBRequest, ev: IDBRequestEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 IDBRequestEventMap>(type: K, listener: (this: IDBRequest, ev: IDBRequestEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 IDBRequest: {
    prototype: IDBRequest;
    新建(): IDBRequest;

};
接口 IDBTransactionEventMap {
    "abort": Event;
    "complete": Event;
    "error": Event;

}
接口 IDBTransaction 扩展 EventTarget {
    只读 db: IDBDatabase;
    只读 error: DOMException;
    只读 mode: IDBTransactionMode;
    onabort: ((this: IDBTransaction, ev: Event) => 任意) | 空值;
    oncomplete: ((this: IDBTransaction, ev: Event) => 任意) | 空值;
    onerror: ((this: IDBTransaction, ev: Event) => 任意) | 空值;
    abort(): 无值;
    objectStore(name: 文字): IDBObjectStore;
    只读 READ_ONLY: 文字;
    只读 READ_WRITE: 文字;
    只读 VERSION_CHANGE: 文字;
    addEventListener<K 扩展 键为 IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 IDBTransaction: {
    prototype: IDBTransaction;
    新建(): IDBTransaction;
    只读 READ_ONLY: 文字;
    只读 READ_WRITE: 文字;
    只读 VERSION_CHANGE: 文字;

};
接口 IDBVersionChangeEvent 扩展 Event {
    只读 newVersion: 数字 | 空值;
    只读 oldVersion: 数字;

}
声明 值量 IDBVersionChangeEvent: {
    prototype: IDBVersionChangeEvent;
    新建(): IDBVersionChangeEvent;

};
接口 ImageBitmap {
    只读 height: 数字;
    只读 width: 数字;
    close(): 无值;

}
接口 ImageBitmapOptions {
    colorSpaceConversion?: "none" | "default";
    imageOrientation?: "none" | "flipY";
    premultiplyAlpha?: "none" | "premultiply" | "default";
    resizeHeight?: 数字;
    resizeQuality?: "pixelated" | "low" | "medium" | "high";
    resizeWidth?: 数字;

}
接口 ImageData {
    //@@{ 正整数固定数组8_:Uint8ClampedArray }
    只读 data: 正整数固定数组8_;
    只读 height: 数字;
    只读 width: 数字;

}
声明 值量 ImageData: {
    prototype: ImageData;
    新建(width: 数字, height: 数字): ImageData;
    //@@{ 正整数固定数组8_:Uint8ClampedArray }
    新建(array: 正整数固定数组8_, width: 数字, height: 数字): ImageData;

};
接口 MessageChannel {
    只读 port1: MessagePort;
    只读 port2: MessagePort;

}
声明 值量 MessageChannel: {
    prototype: MessageChannel;
    新建(): MessageChannel;

};
接口 MessageEvent 扩展 Event {
    只读 data: 任意;
    只读 origin: 文字;
    //@@{ 只读数组_:ReadonlyArray }
    只读 ports: 只读数组_<MessagePort>;
    只读 source: 实例 | 空值;
    initMessageEvent(type: 文字, bubbles: 真假, cancelable: 真假, data: 任意, origin: 文字, lastEventId: 文字, source: 实例): 无值;

}
声明 值量 MessageEvent: {
    prototype: MessageEvent;
    新建(type: 文字, eventInitDict?: MessageEventInit): MessageEvent;

};
接口 MessagePortEventMap {
    "message": MessageEvent;

}
接口 MessagePort 扩展 EventTarget {
    onmessage: ((this: MessagePort, ev: MessageEvent) => 任意) | 空值;
    close(): 无值;
    postMessage(message?: 任意, transfer?: 任意[]): 无值;
    start(): 无值;
    addEventListener<K 扩展 键为 MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 MessagePort: {
    prototype: MessagePort;
    新建(): MessagePort;

};
接口 NavigatorBeacon {
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    sendBeacon(url: 文字, data?: Blob | 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | FormData | 文字 | 空值): 真假;

}
接口 NavigatorConcurrentHardware {
    只读 hardwareConcurrency: 数字;

}
接口 NavigatorID {
    只读 appCodeName: 文字;
    只读 appName: 文字;
    只读 appVersion: 文字;
    只读 platform: 文字;
    只读 product: 文字;
    只读 productSub: 文字;
    只读 userAgent: 文字;
    只读 vendor: 文字;
    只读 vendorSub: 文字;

}
接口 NavigatorOnLine {
    只读 onLine: 真假;

}
接口 NotificationEventMap {
    "click": Event;
    "close": Event;
    "error": Event;
    "show": Event;

}
接口 Notification 扩展 EventTarget {
    只读 body: 文字 | 空值;
    只读 data: 任意;
    只读 dir: NotificationDirection;
    只读 icon: 文字 | 空值;
    只读 lang: 文字 | 空值;
    onclick: ((this: Notification, ev: Event) => 任意) | 空值;
    onclose: ((this: Notification, ev: Event) => 任意) | 空值;
    onerror: ((this: Notification, ev: Event) => 任意) | 空值;
    onshow: ((this: Notification, ev: Event) => 任意) | 空值;
    只读 permission: NotificationPermission;
    只读 tag: 文字 | 空值;
    只读 title: 文字;
    close(): 无值;
    addEventListener<K 扩展 键为 NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 Notification: {
    prototype: Notification;
    新建(title: 文字, options?: NotificationOptions): Notification;
    //@@{ 预设_:Promise }
    requestPermission(callback?: NotificationPermissionCallback): 预设_<NotificationPermission>;

};
接口 NotificationEvent 扩展 ExtendableEvent {
    只读 action: 文字;
    只读 notification: Notification;

}
声明 值量 NotificationEvent: {
    prototype: NotificationEvent;
    新建(type: 文字, eventInitDict: NotificationEventInit): NotificationEvent;

};
接口 Performance {

    /** @deprecated */
    只读 navigation: PerformanceNavigation;
    只读 timeOrigin: 数字;

    /** @deprecated */
    只读 timing: PerformanceTiming;
    clearMarks(markName?: 文字): 无值;
    clearMeasures(measureName?: 文字): 无值;
    clearResourceTimings(): 无值;
    getEntries(): 任意;
    getEntriesByName(name: 文字, type?: 文字): 任意;
    getEntriesByType(type: 文字): 任意;

    /** @deprecated */
    getMarks(markName?: 文字): 任意;

    /** @deprecated */
    getMeasures(measureName?: 文字): 任意;
    mark(markName: 文字): 无值;
    measure(measureName: 文字, startMarkName?: 文字, endMarkName?: 文字): 无值;
    now(): 数字;
    setResourceTimingBufferSize(maxSize: 数字): 无值;
    toJSON(): 任意;

}
声明 值量 Performance: {
    prototype: Performance;
    新建(): Performance;

};
接口 PerformanceNavigation {
    只读 redirectCount: 数字;
    只读 type: 数字;
    toJSON(): 任意;
    只读 TYPE_BACK_FORWARD: 数字;
    只读 TYPE_NAVIGATE: 数字;
    只读 TYPE_RELOAD: 数字;
    只读 TYPE_RESERVED: 数字;

}
声明 值量 PerformanceNavigation: {
    prototype: PerformanceNavigation;
    新建(): PerformanceNavigation;
    只读 TYPE_BACK_FORWARD: 数字;
    只读 TYPE_NAVIGATE: 数字;
    只读 TYPE_RELOAD: 数字;
    只读 TYPE_RESERVED: 数字;

};
接口 PerformanceTiming {
    只读 connectEnd: 数字;
    只读 connectStart: 数字;
    只读 domComplete: 数字;
    只读 domContentLoadedEventEnd: 数字;
    只读 domContentLoadedEventStart: 数字;
    只读 domInteractive: 数字;
    只读 domLoading: 数字;
    只读 domainLookupEnd: 数字;
    只读 domainLookupStart: 数字;
    只读 fetchStart: 数字;
    只读 loadEventEnd: 数字;
    只读 loadEventStart: 数字;
    只读 msFirstPaint: 数字;
    只读 navigationStart: 数字;
    只读 redirectEnd: 数字;
    只读 redirectStart: 数字;
    只读 requestStart: 数字;
    只读 responseEnd: 数字;
    只读 responseStart: 数字;
    只读 secureConnectionStart: 数字;
    只读 unloadEventEnd: 数字;
    只读 unloadEventStart: 数字;
    toJSON(): 任意;

}
声明 值量 PerformanceTiming: {
    prototype: PerformanceTiming;
    新建(): PerformanceTiming;

};
接口 Position {
    只读 coords: Coordinates;
    只读 timestamp: 数字;

}
声明 值量 Position: {
    prototype: Position;
    新建(): Position;

};
接口 PositionError {
    只读 code: 数字;
    只读 message: 文字;
    toString(): 文字;
    只读 PERMISSION_DENIED: 数字;
    只读 POSITION_UNAVAILABLE: 数字;
    只读 TIMEOUT: 数字;

}
声明 值量 PositionError: {
    prototype: PositionError;
    新建(): PositionError;
    只读 PERMISSION_DENIED: 数字;
    只读 POSITION_UNAVAILABLE: 数字;
    只读 TIMEOUT: 数字;

};
接口 ProgressEvent 扩展 Event {
    只读 lengthComputable: 真假;
    只读 loaded: 数字;
    只读 total: 数字;
    initProgressEvent(typeArg: 文字, canBubbleArg: 真假, cancelableArg: 真假, lengthComputableArg: 真假, loadedArg: 数字, totalArg: 数字): 无值;

}
声明 值量 ProgressEvent: {
    prototype: ProgressEvent;
    新建(typeArg: 文字, eventInitDict?: ProgressEventInit): ProgressEvent;

};
接口 PushEvent 扩展 ExtendableEvent {
    只读 data: PushMessageData | 空值;

}
声明 值量 PushEvent: {
    prototype: PushEvent;
    新建(type: 文字, eventInitDict?: PushEventInit): PushEvent;

};
接口 PushManager {
    //@@{ 只读数组_:ReadonlyArray }
    只读 supportedContentEncodings: 只读数组_<文字>;
    //@@{ 预设_:Promise }
    getSubscription(): 预设_<PushSubscription | 空值>;
    //@@{ 预设_:Promise }
    permissionState(options?: PushSubscriptionOptionsInit): 预设_<PushPermissionState>;
    //@@{ 预设_:Promise }
    subscribe(options?: PushSubscriptionOptionsInit): 预设_<PushSubscription>;

}
声明 值量 PushManager: {
    prototype: PushManager;
    新建(): PushManager;

};
接口 PushMessageData {
    //@@{ 数组缓冲区_:ArrayBuffer }
    arrayBuffer(): 数组缓冲区_;
    blob(): Blob;
    json(): 任意;
    text(): 文字;

}
声明 值量 PushMessageData: {
    prototype: PushMessageData;
    新建(): PushMessageData;

};
接口 PushSubscription {
    只读 endpoint: 文字;
    只读 expirationTime: 数字 | 空值;
    只读 options: PushSubscriptionOptions;
    //@@{ 数组缓冲区_:ArrayBuffer }
    getKey(name: PushEncryptionKeyName): 数组缓冲区_ | 空值;
    toJSON(): 任意;
    //@@{ 预设_:Promise }
    unsubscribe(): 预设_<真假>;

}
声明 值量 PushSubscription: {
    prototype: PushSubscription;
    新建(): PushSubscription;

};
接口 PushSubscriptionChangeEvent 扩展 ExtendableEvent {
    只读 newSubscription: PushSubscription | 空值;
    只读 oldSubscription: PushSubscription | 空值;

}
声明 值量 PushSubscriptionChangeEvent: {
    prototype: PushSubscriptionChangeEvent;
    新建(type: 文字, eventInitDict?: PushSubscriptionChangeInit): PushSubscriptionChangeEvent;

};
接口 PushSubscriptionOptions {
    //@@{ 数组缓冲区_:ArrayBuffer }
    只读 applicationServerKey: 数组缓冲区_ | 空值;
    只读 userVisibleOnly: 真假;

}
声明 值量 PushSubscriptionOptions: {
    prototype: PushSubscriptionOptions;
    新建(): PushSubscriptionOptions;

};
接口 ReadableStream {
    只读 locked: 真假;
    //@@{ 预设_:Promise }
    cancel(): 预设_<无值>;
    getReader(): ReadableStreamReader;

}
声明 值量 ReadableStream: {
    prototype: ReadableStream;
    新建(): ReadableStream;

};
接口 ReadableStreamReader {
    //@@{ 预设_:Promise }
    cancel(): 预设_<无值>;
    //@@{ 预设_:Promise }
    read(): 预设_<任意>;
    releaseLock(): 无值;

}
声明 值量 ReadableStreamReader: {
    prototype: ReadableStreamReader;
    新建(): ReadableStreamReader;

};
接口 Request 扩展 Body {
    只读 cache: RequestCache;
    只读 credentials: RequestCredentials;
    只读 destination: RequestDestination;
    只读 headers: Headers;
    只读 integrity: 文字;
    只读 keepalive: 真假;
    只读 method: 文字;
    只读 mode: RequestMode;
    只读 redirect: RequestRedirect;
    只读 referrer: 文字;
    只读 referrerPolicy: ReferrerPolicy;
    只读 signal: 实例 | 空值;
    只读 type: RequestType;
    只读 url: 文字;
    clone(): Request;

}
声明 值量 Request: {
    prototype: Request;
    新建(input: Request | 文字, init?: RequestInit): Request;

};
接口 Response 扩展 Body {
    只读 body: ReadableStream | 空值;
    只读 headers: Headers;
    只读 ok: 真假;
    只读 redirected: 真假;
    只读 status: 数字;
    只读 statusText: 文字;
    只读 type: ResponseType;
    只读 url: 文字;
    clone(): Response;

}
声明 值量 Response: {
    prototype: Response;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    新建(body?: Blob | 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | FormData | 文字 | 空值, init?: ResponseInit): Response;
    error(): Response;
    redirect(url: 文字, status?: 数字): Response;

};
接口 ServiceWorkerEventMap 扩展 AbstractWorkerEventMap {
    "statechange": Event;

}
接口 ServiceWorker 扩展 EventTarget, AbstractWorker {
    onstatechange: ((this: ServiceWorker, ev: Event) => 任意) | 空值;
    只读 scriptURL: 文字;
    只读 state: ServiceWorkerState;
    postMessage(message: 任意, transfer?: 任意[]): 无值;
    addEventListener<K 扩展 键为 ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 ServiceWorker: {
    prototype: ServiceWorker;
    新建(): ServiceWorker;

};
接口 ServiceWorkerGlobalScopeEventMap 扩展 WorkerGlobalScopeEventMap {
    "activate": ExtendableEvent;
    "fetch": FetchEvent;
    "install": ExtendableEvent;
    "message": ExtendableMessageEvent;
    "messageerror": MessageEvent;
    "notificationclick": NotificationEvent;
    "notificationclose": NotificationEvent;
    "push": PushEvent;
    "pushsubscriptionchange": PushSubscriptionChangeEvent;
    "sync": SyncEvent;

}
接口 ServiceWorkerGlobalScope 扩展 WorkerGlobalScope {
    只读 clients: Clients;
    onactivate: ((this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => 任意) | 空值;
    onfetch: ((this: ServiceWorkerGlobalScope, ev: FetchEvent) => 任意) | 空值;
    oninstall: ((this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => 任意) | 空值;
    onmessage: ((this: ServiceWorkerGlobalScope, ev: ExtendableMessageEvent) => 任意) | 空值;
    onmessageerror: ((this: ServiceWorkerGlobalScope, ev: MessageEvent) => 任意) | 空值;
    onnotificationclick: ((this: ServiceWorkerGlobalScope, ev: NotificationEvent) => 任意) | 空值;
    onnotificationclose: ((this: ServiceWorkerGlobalScope, ev: NotificationEvent) => 任意) | 空值;
    onpush: ((this: ServiceWorkerGlobalScope, ev: PushEvent) => 任意) | 空值;
    onpushsubscriptionchange: ((this: ServiceWorkerGlobalScope, ev: PushSubscriptionChangeEvent) => 任意) | 空值;
    onsync: ((this: ServiceWorkerGlobalScope, ev: SyncEvent) => 任意) | 空值;
    只读 registration: ServiceWorkerRegistration;
    //@@{ 预设_:Promise }
    skipWaiting(): 预设_<无值>;
    addEventListener<K 扩展 键为 ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 ServiceWorkerGlobalScope: {
    prototype: ServiceWorkerGlobalScope;
    新建(): ServiceWorkerGlobalScope;

};
接口 ServiceWorkerRegistrationEventMap {
    "updatefound": Event;

}
接口 ServiceWorkerRegistration 扩展 EventTarget {
    只读 active: ServiceWorker | 空值;
    只读 installing: ServiceWorker | 空值;
    onupdatefound: ((this: ServiceWorkerRegistration, ev: Event) => 任意) | 空值;
    只读 pushManager: PushManager;
    只读 scope: 文字;
    只读 sync: SyncManager;
    只读 waiting: ServiceWorker | 空值;
    //@@{ 预设_:Promise }
    getNotifications(filter?: GetNotificationOptions): 预设_<Notification[]>;
    //@@{ 预设_:Promise }
    showNotification(title: 文字, options?: NotificationOptions): 预设_<无值>;
    //@@{ 预设_:Promise }
    unregister(): 预设_<真假>;
    //@@{ 预设_:Promise }
    update(): 预设_<无值>;
    addEventListener<K 扩展 键为 ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 ServiceWorkerRegistration: {
    prototype: ServiceWorkerRegistration;
    新建(): ServiceWorkerRegistration;

};
接口 SyncEvent 扩展 ExtendableEvent {
    只读 lastChance: 真假;
    只读 tag: 文字;

}
声明 值量 SyncEvent: {
    prototype: SyncEvent;
    新建(type: 文字, init: SyncEventInit): SyncEvent;

};
接口 SyncManager {
    //@@{ 预设_:Promise }
    getTags(): 预设_<文字[]>;
    //@@{ 预设_:Promise }
    register(tag: 文字): 预设_<无值>;

}
声明 值量 SyncManager: {
    prototype: SyncManager;
    新建(): SyncManager;

};
接口 URL {
    hash: 文字;
    host: 文字;
    hostname: 文字;
    href: 文字;
    只读 origin: 文字;
    password: 文字;
    pathname: 文字;
    port: 文字;
    protocol: 文字;
    search: 文字;
    只读 searchParams: URLSearchParams;
    username: 文字;
    toString(): 文字;

}
声明 值量 URL: {
    prototype: URL;
    新建(url: 文字, base?: 文字 | URL): URL;
    createObjectURL(object: 任意, options?: ObjectURLOptions): 文字;
    revokeObjectURL(url: 文字): 无值;

};
接口 URLSearchParams {

    /**
     * Appends a specified key/value pair as a new search parameter.
     */
    append(name: 文字, value: 文字): 无值;

    /**
     * Deletes the given search parameter, and its associated value, from the list of all search parameters.
     */
    delete(name: 文字): 无值;

    /**
     * Returns the first value associated to the given search parameter.
     */
    get(name: 文字): 文字 | 空值;

    /**
     * Returns all the values association with a given search parameter.
     */
    getAll(name: 文字): 文字[];

    /**
     * Returns a Boolean indicating if such a search parameter exists.
     */
    has(name: 文字): 真假;

    /**
     * Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.
     */
    set(name: 文字, value: 文字): 无值;

}
声明 值量 URLSearchParams: {
    prototype: URLSearchParams;
    新建 (init?: 文字 | URLSearchParams): URLSearchParams;

};
接口 WebSocketEventMap {
    "close": CloseEvent;
    "error": Event;
    "message": MessageEvent;
    "open": Event;

}
接口 WebSocket 扩展 EventTarget {
    binaryType: BinaryType;
    只读 bufferedAmount: 数字;
    只读 extensions: 文字;
    onclose: ((this: WebSocket, ev: CloseEvent) => 任意) | 空值;
    onerror: ((this: WebSocket, ev: Event) => 任意) | 空值;
    onmessage: ((this: WebSocket, ev: MessageEvent) => 任意) | 空值;
    onopen: ((this: WebSocket, ev: Event) => 任意) | 空值;
    只读 protocol: 文字;
    只读 readyState: 数字;
    只读 url: 文字;
    close(code?: 数字, reason?: 文字): 无值;
    //@@{ 数组缓冲区等_:ArrayBufferLike, 数组缓冲区视图_:ArrayBufferView }
    send(data: 文字 | 数组缓冲区等_ | Blob | 数组缓冲区视图_): 无值;
    只读 CLOSED: 数字;
    只读 CLOSING: 数字;
    只读 CONNECTING: 数字;
    只读 OPEN: 数字;
    addEventListener<K 扩展 键为 WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 WebSocket: {
    prototype: WebSocket;
    新建(url: 文字, protocols?: 文字 | 文字[]): WebSocket;
    只读 CLOSED: 数字;
    只读 CLOSING: 数字;
    只读 CONNECTING: 数字;
    只读 OPEN: 数字;

};
接口 WindowBase64 {
    atob(encodedString: 文字): 文字;
    btoa(rawString: 文字): 文字;

}
接口 WindowClient 扩展 Client {
    //@@{ 只读数组_:ReadonlyArray }
    只读 ancestorOrigins: 只读数组_<文字>;
    只读 focused: 真假;
    只读 visibilityState: VisibilityState;
    //@@{ 预设_:Promise }
    focus(): 预设_<WindowClient>;
    //@@{ 预设_:Promise }
    navigate(url: 文字): 预设_<WindowClient>;

}
声明 值量 WindowClient: {
    prototype: WindowClient;
    新建(): WindowClient;

};
接口 WindowConsole {
    只读 console: Console;

}
接口 WorkerEventMap 扩展 AbstractWorkerEventMap {
    "message": MessageEvent;

}
接口 Worker 扩展 EventTarget, AbstractWorker {
    onmessage: ((this: Worker, ev: MessageEvent) => 任意) | 空值;

    /** @deprecated */
    postMessage(message: 任意, transfer?: 任意[]): 无值;
    terminate(): 无值;
    addEventListener<K 扩展 键为 WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 Worker: {
    prototype: Worker;
    新建(stringUrl: 文字): Worker;

};
接口 WorkerGlobalScopeEventMap {
    "error": ErrorEvent;

}
接口 WorkerGlobalScope 扩展 EventTarget, WorkerUtils, WindowConsole, GlobalFetch {
    只读 caches: CacheStorage;
    只读 isSecureContext: 真假;
    只读 location: WorkerLocation;
    onerror: ((this: WorkerGlobalScope, ev: ErrorEvent) => 任意) | 空值;
    只读 performance: Performance;
    只读 self: WorkerGlobalScope;
    //@@{ 预设_:Promise }
    createImageBitmap(image: ImageBitmap | ImageData | Blob, options?: ImageBitmapOptions): 预设_<ImageBitmap>;
    //@@{ 预设_:Promise }
    createImageBitmap(image: ImageBitmap | ImageData | Blob, sx: 数字, sy: 数字, sw: 数字, sh: 数字, options?: ImageBitmapOptions): 预设_<ImageBitmap>;
    msWriteProfilerMark(profilerMarkName: 文字): 无值;
    addEventListener<K 扩展 键为 WorkerGlobalScopeEventMap>(type: K, listener: (this: WorkerGlobalScope, ev: WorkerGlobalScopeEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 WorkerGlobalScopeEventMap>(type: K, listener: (this: WorkerGlobalScope, ev: WorkerGlobalScopeEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 WorkerGlobalScope: {
    prototype: WorkerGlobalScope;
    新建(): WorkerGlobalScope;

};
接口 WorkerLocation {
    只读 hash: 文字;
    只读 host: 文字;
    只读 hostname: 文字;
    只读 href: 文字;
    只读 origin: 文字;
    只读 pathname: 文字;
    只读 port: 文字;
    只读 protocol: 文字;
    只读 search: 文字;
    toString(): 文字;

}
声明 值量 WorkerLocation: {
    prototype: WorkerLocation;
    新建(): WorkerLocation;

};
接口 WorkerNavigator 扩展 NavigatorID, NavigatorOnLine, NavigatorBeacon, NavigatorConcurrentHardware {

}
声明 值量 WorkerNavigator: {
    prototype: WorkerNavigator;
    新建(): WorkerNavigator;

};
接口 WorkerUtils 扩展 WindowBase64 {
    只读 indexedDB: IDBFactory;
    只读 msIndexedDB: IDBFactory;
    只读 navigator: WorkerNavigator;
    clearImmediate(handle: 数字): 无值;
    clearInterval(handle: 数字): 无值;
    clearTimeout(handle: 数字): 无值;
    importScripts(...urls: 文字[]): 无值;
    setImmediate(handler: 任意, ...args: 任意[]): 数字;
    setInterval(handler: 任意, timeout?: 任意, ...args: 任意[]): 数字;
    setTimeout(handler: 任意, timeout?: 任意, ...args: 任意[]): 数字;

}
接口 XMLHttpRequestEventMap 扩展 XMLHttpRequestEventTargetEventMap {
    "readystatechange": Event;

}
接口 XMLHttpRequest 扩展 EventTarget, XMLHttpRequestEventTarget {
    msCaching: 文字;
    onreadystatechange: ((this: XMLHttpRequest, ev: Event) => 任意) | 空值;
    只读 readyState: 数字;
    只读 response: 任意;
    只读 responseText: 文字;
    responseType: XMLHttpRequestResponseType;
    只读 responseURL: 文字;
    只读 responseXML: 实例 | 空值;
    只读 status: 数字;
    只读 statusText: 文字;
    timeout: 数字;
    只读 upload: XMLHttpRequestUpload;
    withCredentials: 真假;
    abort(): 无值;
    getAllResponseHeaders(): 文字;
    getResponseHeader(header: 文字): 文字 | 空值;
    msCachingEnabled(): 真假;
    open(method: 文字, url: 文字, async?: 真假, user?: 文字 | 空值, password?: 文字 | 空值): 无值;
    overrideMimeType(mime: 文字): 无值;
    send(data?: 任意): 无值;
    setRequestHeader(header: 文字, value: 文字): 无值;
    只读 DONE: 数字;
    只读 HEADERS_RECEIVED: 数字;
    只读 LOADING: 数字;
    只读 OPENED: 数字;
    只读 UNSENT: 数字;
    addEventListener<K 扩展 键为 XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 XMLHttpRequest: {
    prototype: XMLHttpRequest;
    新建(): XMLHttpRequest;
    只读 DONE: 数字;
    只读 HEADERS_RECEIVED: 数字;
    只读 LOADING: 数字;
    只读 OPENED: 数字;
    只读 UNSENT: 数字;

};
接口 XMLHttpRequestEventTargetEventMap {
    "abort": Event;
    "error": ErrorEvent;
    "load": Event;
    "loadend": ProgressEvent;
    "loadstart": Event;
    "progress": ProgressEvent;
    "timeout": ProgressEvent;

}
接口 XMLHttpRequestEventTarget {
    onabort: ((this: XMLHttpRequest, ev: Event) => 任意) | 空值;
    onerror: ((this: XMLHttpRequest, ev: ErrorEvent) => 任意) | 空值;
    onload: ((this: XMLHttpRequest, ev: Event) => 任意) | 空值;
    onloadend: ((this: XMLHttpRequest, ev: ProgressEvent) => 任意) | 空值;
    onloadstart: ((this: XMLHttpRequest, ev: Event) => 任意) | 空值;
    onprogress: ((this: XMLHttpRequest, ev: ProgressEvent) => 任意) | 空值;
    ontimeout: ((this: XMLHttpRequest, ev: ProgressEvent) => 任意) | 空值;
    addEventListener<K 扩展 键为 XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
接口 XMLHttpRequestUpload 扩展 EventTarget, XMLHttpRequestEventTarget {
    addEventListener<K 扩展 键为 XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 XMLHttpRequestUpload: {
    prototype: XMLHttpRequestUpload;
    新建(): XMLHttpRequestUpload;

};
声明 类型 EventListenerOrEventListenerObject = EventListener | EventListenerObject;
接口 DecodeErrorCallback {
    (error: DOMException): 无值;

}
接口 DecodeSuccessCallback {
    (decodedData: AudioBuffer): 无值;

}
接口 ErrorEventHandler {
    //@@{ 错误_:Error }
    (event: Event | 文字, source?: 文字, fileno?: 数字, columnNumber?: 数字, error?: 错误_): 无值;

}
接口 ForEachCallback {
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    (keyId: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值, status: MediaKeyStatus): 无值;

}
接口 FunctionStringCallback {
    (data: 文字): 无值;

}
接口 NotificationPermissionCallback {
    (permission: NotificationPermission): 无值;

}
接口 PositionCallback {
    (position: Position): 无值;

}
接口 PositionErrorCallback {
    (error: PositionError): 无值;

}
声明 值量 onmessage: ((this: DedicatedWorkerGlobalScope, ev: MessageEvent) => 任意) | 空值;
声明 函数 close(): 无值;
声明 函数 postMessage(message: 任意, transfer?: 任意[]): 无值;
声明 函数 dispatchEvent(evt: Event): 真假;
声明 值量 caches: CacheStorage;
声明 值量 isSecureContext: 真假;
声明 值量 location: WorkerLocation;
声明 值量 onerror: ((this: DedicatedWorkerGlobalScope, ev: ErrorEvent) => 任意) | 空值;
声明 值量 performance: Performance;
声明 值量 self: WorkerGlobalScope;
//@@{ 预设_:Promise }
声明 函数 createImageBitmap(image: ImageBitmap | ImageData | Blob, options?: ImageBitmapOptions): 预设_<ImageBitmap>;
//@@{ 预设_:Promise }
声明 函数 createImageBitmap(image: ImageBitmap | ImageData | Blob, sx: 数字, sy: 数字, sw: 数字, sh: 数字, options?: ImageBitmapOptions): 预设_<ImageBitmap>;
声明 函数 msWriteProfilerMark(profilerMarkName: 文字): 无值;
声明 函数 dispatchEvent(evt: Event): 真假;
声明 值量 indexedDB: IDBFactory;
声明 值量 msIndexedDB: IDBFactory;
声明 值量 navigator: WorkerNavigator;
声明 函数 clearImmediate(handle: 数字): 无值;
声明 函数 clearInterval(handle: 数字): 无值;
声明 函数 clearTimeout(handle: 数字): 无值;
声明 函数 importScripts(...urls: 文字[]): 无值;
声明 函数 setImmediate(handler: 任意, ...args: 任意[]): 数字;
声明 函数 setInterval(handler: 任意, timeout?: 任意, ...args: 任意[]): 数字;
声明 函数 setTimeout(handler: 任意, timeout?: 任意, ...args: 任意[]): 数字;
声明 函数 atob(encodedString: 文字): 文字;
声明 函数 btoa(rawString: 文字): 文字;
声明 值量 console: Console;
//@@{ 预设_:Promise }
声明 函数 fetch(input?: Request | 文字, init?: RequestInit): 预设_<Response>;
声明 函数 addEventListener<K 扩展 键为 DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
声明 函数 addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
声明 函数 removeEventListener<K 扩展 键为 DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
声明 函数 removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;
类型 FormDataEntryValue = 文字 | File;
类型 HeadersInit = Headers | 文字[][] | { [key: 文字]: 文字 };
类型 AlgorithmIdentifier = 文字 | Algorithm;
类型 AAGUID = 文字;
类型 BodyInit = 任意;
类型 ByteString = 文字;
//@@{ 数组缓冲区视图_:ArrayBufferView }
类型 CryptoOperationData = 数组缓冲区视图_;
类型 GLbitfield = 数字;
类型 GLboolean = 真假;
类型 GLbyte = 数字;
类型 GLclampf = 数字;
类型 GLenum = 数字;
类型 GLfloat = 数字;
类型 GLint = 数字;
类型 GLintptr = 数字;
类型 GLshort = 数字;
类型 GLsizei = 数字;
类型 GLsizeiptr = 数字;
类型 GLubyte = 数字;
类型 GLuint = 数字;
类型 GLushort = 数字;
类型 IDBKeyPath = 文字;
类型 RequestInfo = Request | 文字;
类型 USVString = 文字;
类型 payloadtype = 数字;
类型 ClientTypes = "window" | "worker" | "sharedworker" | "all";
类型 BinaryType = "blob" | "arraybuffer";
类型 IDBCursorDirection = "next" | "nextunique" | "prev" | "prevunique";
类型 IDBRequestReadyState = "pending" | "done";
类型 IDBTransactionMode = "readonly" | "readwrite" | "versionchange";
类型 KeyFormat = "raw" | "spki" | "pkcs8" | "jwk";
类型 KeyType = "public" | "private" | "secret";
类型 KeyUsage = "encrypt" | "decrypt" | "sign" | "verify" | "deriveKey" | "deriveBits" | "wrapKey" | "unwrapKey";
类型 MediaKeyStatus = "usable" | "expired" | "output-downscaled" | "output-not-allowed" | "status-pending" | "internal-error";
类型 NotificationDirection = "auto" | "ltr" | "rtl";
类型 NotificationPermission = "default" | "denied" | "granted";
类型 PushEncryptionKeyName = "p256dh" | "auth";
类型 PushPermissionState = "granted" | "denied" | "prompt";
类型 ReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "origin-only" | "origin-when-cross-origin" | "unsafe-url";
类型 RequestCache = "default" | "no-store" | "reload" | "no-cache" | "force-cache";
类型 RequestCredentials = "omit" | "same-origin" | "include";
类型 RequestDestination = "" | "document" | "sharedworker" | "subresource" | "unknown" | "worker";
类型 RequestMode = "navigate" | "same-origin" | "no-cors" | "cors";
类型 RequestRedirect = "follow" | "error" | "manual";
类型 RequestType = "" | "audio" | "font" | "image" | "script" | "style" | "track" | "video";
类型 ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";
类型 ServiceWorkerState = "installing" | "installed" | "activating" | "activated" | "redundant";
类型 VisibilityState = "hidden" | "visible" | "prerender" | "unloaded";
类型 XMLHttpRequestResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text";