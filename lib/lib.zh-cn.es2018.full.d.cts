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
/// <引用 路径="lib.zh-cn.es2017.d.cts" />
/// <引用 路径="lib.zh-cn.es2018.promise.d.cts" />
/// <引用 路径="lib.zh-cn.es2018.regexp.d.cts" />
/////////////////////////////
/// DOM APIs
/////////////////////////////
接口 Account {
    displayName: 文字;
    id: 文字;
    imageURL?: 文字;
    name?: 文字;
    rpDisplayName: 文字;

}
接口 AddEventListenerOptions 扩展 EventListenerOptions {
    once?: 真假;
    passive?: 真假;

}
接口 AesCbcParams 扩展 Algorithm {
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    iv: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值;

}
接口 AesCtrParams 扩展 Algorithm {
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    counter: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值;
    length: 数字;

}
接口 AesDerivedKeyParams 扩展 Algorithm {
    length: 数字;

}
接口 AesGcmParams 扩展 Algorithm {
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    additionalData?: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    iv: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值;
    tagLength?: 数字;

}
接口 AesKeyAlgorithm 扩展 KeyAlgorithm {
    length: 数字;

}
接口 AesKeyGenParams 扩展 Algorithm {
    length: 数字;

}
接口 Algorithm {
    name: 文字;

}
接口 AnalyserOptions 扩展 AudioNodeOptions {
    fftSize?: 数字;
    maxDecibels?: 数字;
    minDecibels?: 数字;
    smoothingTimeConstant?: 数字;

}
接口 AnimationEventInit 扩展 EventInit {
    animationName?: 文字;
    elapsedTime?: 数字;

}
接口 AssertionOptions {
    allowList?: ScopedCredentialDescriptor[];
    extensions?: WebAuthnExtensions;
    rpId?: 文字;
    timeoutSeconds?: 数字;

}
接口 AudioBufferOptions {
    length: 数字;
    numberOfChannels?: 数字;
    sampleRate: 数字;

}
接口 AudioBufferSourceOptions {
    buffer?: AudioBuffer | 空值;
    detune?: 数字;
    loop?: 真假;
    loopEnd?: 数字;
    loopStart?: 数字;
    playbackRate?: 数字;

}
接口 AudioContextInfo {
    currentTime?: 数字;
    sampleRate?: 数字;

}
接口 AudioContextOptions {
    latencyHint?: AudioContextLatencyCategory | 数字;
    sampleRate?: 数字;

}
接口 AudioNodeOptions {
    channelCount?: 数字;
    channelCountMode?: ChannelCountMode;
    channelInterpretation?: ChannelInterpretation;

}
接口 AudioParamDescriptor {
    defaultValue?: 数字;
    maxValue?: 数字;
    minValue?: 数字;
    name?: 文字;

}
接口 AudioProcessingEventInit 扩展 EventInit {
    inputBuffer: AudioBuffer;
    outputBuffer: AudioBuffer;
    playbackTime: 数字;

}
接口 AudioTimestamp {
    contextTime?: 数字;
    performanceTime?: 数字;

}
接口 BiquadFilterOptions 扩展 AudioNodeOptions {
    Q?: 数字;
    detune?: 数字;
    frequency?: 数字;
    gain?: 数字;
    type?: BiquadFilterType;

}
接口 ByteLengthChunk {
    byteLength?: 数字;

}
接口 CacheQueryOptions {
    cacheName?: 文字;
    ignoreMethod?: 真假;
    ignoreSearch?: 真假;
    ignoreVary?: 真假;

}
接口 ChannelMergerOptions 扩展 AudioNodeOptions {
    numberOfInputs?: 数字;

}
接口 ChannelSplitterOptions 扩展 AudioNodeOptions {
    numberOfOutputs?: 数字;

}
接口 ClientData {
    challenge: 文字;
    extensions?: WebAuthnExtensions;
    hashAlg: 文字 | Algorithm;
    origin: 文字;
    rpId: 文字;
    tokenBinding?: 文字;

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
接口 CompositionEventInit 扩展 UIEventInit {
    data?: 文字;

}
接口 ConfirmSiteSpecificExceptionsInformation 扩展 ExceptionInformation {
    arrayOfDomainStrings?: 文字[];

}
接口 ConstantSourceOptions {
    offset?: 数字;

}
接口 ConstrainBooleanParameters {
    exact?: 真假;
    ideal?: 真假;

}
接口 ConstrainDOMStringParameters {
    exact?: 文字 | 文字[];
    ideal?: 文字 | 文字[];

}
接口 ConstrainDoubleRange 扩展 DoubleRange {
    exact?: 数字;
    ideal?: 数字;

}
接口 ConstrainLongRange 扩展 LongRange {
    exact?: 数字;
    ideal?: 数字;

}
接口 ConstrainVideoFacingModeParameters {
    exact?: VideoFacingModeEnum | VideoFacingModeEnum[];
    ideal?: VideoFacingModeEnum | VideoFacingModeEnum[];

}
接口 ConvolverOptions 扩展 AudioNodeOptions {
    buffer?: AudioBuffer | 空值;
    disableNormalization?: 真假;

}
接口 CustomEventInit<T = 任意> 扩展 EventInit {
    detail?: T;

}
接口 DOMRectInit {
    height?: 数字;
    width?: 数字;
    x?: 数字;
    y?: 数字;

}
接口 DelayOptions 扩展 AudioNodeOptions {
    delayTime?: 数字;
    maxDelayTime?: 数字;

}
接口 DeviceAccelerationDict {
    x?: 数字 | 空值;
    y?: 数字 | 空值;
    z?: 数字 | 空值;

}
接口 DeviceLightEventInit 扩展 EventInit {
    value?: 数字;

}
接口 DeviceMotionEventInit 扩展 EventInit {
    acceleration?: DeviceAccelerationDict | 空值;
    accelerationIncludingGravity?: DeviceAccelerationDict | 空值;
    interval?: 数字 | 空值;
    rotationRate?: DeviceRotationRateDict | 空值;

}
接口 DeviceOrientationEventInit 扩展 EventInit {
    absolute?: 真假;
    alpha?: 数字 | 空值;
    beta?: 数字 | 空值;
    gamma?: 数字 | 空值;

}
接口 DeviceRotationRateDict {
    alpha?: 数字 | 空值;
    beta?: 数字 | 空值;
    gamma?: 数字 | 空值;

}
接口 DoubleRange {
    max?: 数字;
    min?: 数字;

}
接口 DynamicsCompressorOptions 扩展 AudioNodeOptions {
    attack?: 数字;
    knee?: 数字;
    ratio?: 数字;
    release?: 数字;
    threshold?: 数字;

}
接口 EcKeyAlgorithm 扩展 KeyAlgorithm {
    namedCurve: 文字;

}
接口 EcKeyGenParams 扩展 Algorithm {
    namedCurve: 文字;

}
接口 EcKeyImportParams 扩展 Algorithm {
    namedCurve: 文字;

}
接口 EcdhKeyDeriveParams 扩展 Algorithm {
    public: CryptoKey;

}
接口 EcdsaParams 扩展 Algorithm {
    hash: 文字 | Algorithm;

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
接口 EventModifierInit 扩展 UIEventInit {
    altKey?: 真假;
    ctrlKey?: 真假;
    metaKey?: 真假;
    modifierAltGraph?: 真假;
    modifierCapsLock?: 真假;
    modifierFn?: 真假;
    modifierFnLock?: 真假;
    modifierHyper?: 真假;
    modifierNumLock?: 真假;
    modifierOS?: 真假;
    modifierScrollLock?: 真假;
    modifierSuper?: 真假;
    modifierSymbol?: 真假;
    modifierSymbolLock?: 真假;
    shiftKey?: 真假;

}
接口 ExceptionInformation {
    domain?: 文字 | 空值;

}
接口 ExtendableEventInit 扩展 EventInit {

}
接口 ExtendableMessageEventInit 扩展 ExtendableEventInit {
    data?: 任意;
    lastEventId?: 文字;
    origin?: 文字;
    ports?: MessagePort[] | 空值;
    source?: 实例 | ServiceWorker | MessagePort | 空值;

}
接口 FetchEventInit 扩展 ExtendableEventInit {
    clientId?: 文字;
    request: Request;
    reservedClientId?: 文字;
    targetClientId?: 文字;

}
接口 FocusEventInit 扩展 UIEventInit {
    relatedTarget?: EventTarget | 空值;

}
接口 FocusNavigationEventInit 扩展 EventInit {
    navigationReason?: 文字 | 空值;
    originHeight?: 数字;
    originLeft?: 数字;
    originTop?: 数字;
    originWidth?: 数字;

}
接口 FocusNavigationOrigin {
    originHeight?: 数字;
    originLeft?: 数字;
    originTop?: 数字;
    originWidth?: 数字;

}
接口 GainOptions 扩展 AudioNodeOptions {
    gain?: 数字;

}
接口 GamepadEventInit 扩展 EventInit {
    gamepad?: Gamepad;

}
接口 GetNotificationOptions {
    tag?: 文字;

}
接口 HashChangeEventInit 扩展 EventInit {
    newURL?: 文字;
    oldURL?: 文字;

}
接口 HkdfParams 扩展 Algorithm {
    hash: 文字 | Algorithm;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    info: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    salt: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值;

}
接口 HmacImportParams 扩展 Algorithm {
    hash: 文字 | Algorithm;
    length?: 数字;

}
接口 HmacKeyAlgorithm 扩展 KeyAlgorithm {
    hash: KeyAlgorithm;
    length: 数字;

}
接口 HmacKeyGenParams 扩展 Algorithm {
    hash: 文字 | Algorithm;
    length?: 数字;

}
接口 IDBIndexParameters {
    multiEntry?: 真假;
    unique?: 真假;

}
接口 IDBObjectStoreParameters {
    autoIncrement?: 真假;
    keyPath?: 文字 | 文字[];

}
接口 IIRFilterOptions 扩展 AudioNodeOptions {
    feedback: 数字[];
    feedforward: 数字[];

}
接口 IntersectionObserverEntryInit {
    boundingClientRect: DOMRectInit;
    intersectionRect: DOMRectInit;
    isIntersecting: 真假;
    rootBounds: DOMRectInit;
    target: Element;
    time: 数字;

}
接口 IntersectionObserverInit {
    root?: Element | 空值;
    rootMargin?: 文字;
    threshold?: 数字 | 数字[];

}
接口 JsonWebKey {
    alg?: 文字;
    crv?: 文字;
    d?: 文字;
    dp?: 文字;
    dq?: 文字;
    e?: 文字;
    ext?: 真假;
    k?: 文字;
    key_ops?: 文字[];
    kty?: 文字;
    n?: 文字;
    oth?: RsaOtherPrimesInfo[];
    p?: 文字;
    q?: 文字;
    qi?: 文字;
    use?: 文字;
    x?: 文字;
    y?: 文字;

}
接口 KeyAlgorithm {
    name: 文字;

}
接口 KeyboardEventInit 扩展 EventModifierInit {
    code?: 文字;
    key?: 文字;
    location?: 数字;
    repeat?: 真假;

}
接口 LongRange {
    max?: 数字;
    min?: 数字;

}
接口 MSAccountInfo {
    accountImageUri?: 文字;
    accountName?: 文字;
    rpDisplayName: 文字;
    userDisplayName: 文字;
    userId?: 文字;

}
接口 MSAudioLocalClientEvent 扩展 MSLocalClientEventBase {
    cpuInsufficientEventRatio?: 数字;
    deviceCaptureNotFunctioningEventRatio?: 数字;
    deviceClippingEventRatio?: 数字;
    deviceEchoEventRatio?: 数字;
    deviceGlitchesEventRatio?: 数字;
    deviceHalfDuplexAECEventRatio?: 数字;
    deviceHowlingEventCount?: 数字;
    deviceLowSNREventRatio?: 数字;
    deviceLowSpeechLevelEventRatio?: 数字;
    deviceMultipleEndpointsEventCount?: 数字;
    deviceNearEndToEchoRatioEventRatio?: 数字;
    deviceRenderMuteEventRatio?: 数字;
    deviceRenderNotFunctioningEventRatio?: 数字;
    deviceRenderZeroVolumeEventRatio?: 数字;
    networkDelayEventRatio?: 数字;
    networkSendQualityEventRatio?: 数字;

}
接口 MSAudioRecvPayload 扩展 MSPayloadBase {
    burstLossLength1?: 数字;
    burstLossLength2?: 数字;
    burstLossLength3?: 数字;
    burstLossLength4?: 数字;
    burstLossLength5?: 数字;
    burstLossLength6?: 数字;
    burstLossLength7?: 数字;
    burstLossLength8OrHigher?: 数字;
    fecRecvDistance1?: 数字;
    fecRecvDistance2?: 数字;
    fecRecvDistance3?: 数字;
    packetReorderDepthAvg?: 数字;
    packetReorderDepthMax?: 数字;
    packetReorderRatio?: 数字;
    ratioCompressedSamplesAvg?: 数字;
    ratioConcealedSamplesAvg?: 数字;
    ratioStretchedSamplesAvg?: 数字;
    samplingRate?: 数字;
    signal?: MSAudioRecvSignal;

}
接口 MSAudioRecvSignal {
    initialSignalLevelRMS?: 数字;
    recvNoiseLevelCh1?: 数字;
    recvSignalLevelCh1?: 数字;
    renderLoopbackSignalLevel?: 数字;
    renderNoiseLevel?: 数字;
    renderSignalLevel?: 数字;

}
接口 MSAudioSendPayload 扩展 MSPayloadBase {
    audioFECUsed?: 真假;
    samplingRate?: 数字;
    sendMutePercent?: 数字;
    signal?: MSAudioSendSignal;

}
接口 MSAudioSendSignal {
    noiseLevel?: 数字;
    sendNoiseLevelCh1?: 数字;
    sendSignalLevelCh1?: 数字;

}
接口 MSConnectivity {
    iceType?: MSIceType;
    iceWarningFlags?: MSIceWarningFlags;
    relayAddress?: MSRelayAddress;

}
接口 MSCredentialFilter {
    accept?: MSCredentialSpec[];

}
接口 MSCredentialParameters {
    type?: MSCredentialType;

}
接口 MSCredentialSpec {
    id?: 文字;
    type: MSCredentialType;

}
接口 MSDCCEventInit 扩展 EventInit {
    maxFr?: 数字;
    maxFs?: 数字;

}
接口 MSDSHEventInit 扩展 EventInit {
    sources?: 数字[];
    timestamp?: 数字;

}
接口 MSDelay {
    roundTrip?: 数字;
    roundTripMax?: 数字;

}
接口 MSDescription 扩展 RTCStats {
    connectivity?: MSConnectivity;
    deviceDevName?: 文字;
    localAddr?: MSIPAddressInfo;
    networkconnectivity?: MSNetworkConnectivityInfo;
    reflexiveLocalIPAddr?: MSIPAddressInfo;
    remoteAddr?: MSIPAddressInfo;
    transport?: RTCIceProtocol;

}
接口 MSFIDOCredentialParameters 扩展 MSCredentialParameters {
    algorithm?: 文字 | Algorithm;
    authenticators?: 文字[];

}
接口 MSIPAddressInfo {
    ipAddr?: 文字;
    manufacturerMacAddrMask?: 文字;
    port?: 数字;

}
接口 MSIceWarningFlags {
    allocationMessageIntegrityFailed?: 真假;
    alternateServerReceived?: 真假;
    connCheckMessageIntegrityFailed?: 真假;
    connCheckOtherError?: 真假;
    fipsAllocationFailure?: 真假;
    multipleRelayServersAttempted?: 真假;
    noRelayServersConfigured?: 真假;
    portRangeExhausted?: 真假;
    pseudoTLSFailure?: 真假;
    tcpNatConnectivityFailed?: 真假;
    tcpRelayConnectivityFailed?: 真假;
    turnAuthUnknownUsernameError?: 真假;
    turnTcpAllocateFailed?: 真假;
    turnTcpSendFailed?: 真假;
    turnTcpTimedOut?: 真假;
    turnTurnTcpConnectivityFailed?: 真假;
    turnUdpAllocateFailed?: 真假;
    turnUdpSendFailed?: 真假;
    udpLocalConnectivityFailed?: 真假;
    udpNatConnectivityFailed?: 真假;
    udpRelayConnectivityFailed?: 真假;
    useCandidateChecksFailed?: 真假;

}
接口 MSJitter {
    interArrival?: 数字;
    interArrivalMax?: 数字;
    interArrivalSD?: 数字;

}
接口 MSLocalClientEventBase 扩展 RTCStats {
    networkBandwidthLowEventRatio?: 数字;
    networkReceiveQualityEventRatio?: 数字;

}
接口 MSNetwork 扩展 RTCStats {
    delay?: MSDelay;
    jitter?: MSJitter;
    packetLoss?: MSPacketLoss;
    utilization?: MSUtilization;

}
接口 MSNetworkConnectivityInfo {
    linkspeed?: 数字;
    networkConnectionDetails?: 文字;
    vpn?: 真假;

}
接口 MSNetworkInterfaceType {
    interfaceTypeEthernet?: 真假;
    interfaceTypePPP?: 真假;
    interfaceTypeTunnel?: 真假;
    interfaceTypeWWAN?: 真假;
    interfaceTypeWireless?: 真假;

}
接口 MSOutboundNetwork 扩展 MSNetwork {
    appliedBandwidthLimit?: 数字;

}
接口 MSPacketLoss {
    lossRate?: 数字;
    lossRateMax?: 数字;

}
接口 MSPayloadBase 扩展 RTCStats {
    payloadDescription?: 文字;

}
接口 MSPortRange {
    max?: 数字;
    min?: 数字;

}
接口 MSRelayAddress {
    port?: 数字;
    relayAddress?: 文字;

}
接口 MSSignatureParameters {
    userPrompt?: 文字;

}
接口 MSTransportDiagnosticsStats 扩展 RTCStats {
    allocationTimeInMs?: 数字;
    baseAddress?: 文字;
    baseInterface?: MSNetworkInterfaceType;
    iceRole?: RTCIceRole;
    iceWarningFlags?: MSIceWarningFlags;
    interfaces?: MSNetworkInterfaceType;
    localAddrType?: MSIceAddrType;
    localAddress?: 文字;
    localInterface?: MSNetworkInterfaceType;
    localMR?: 文字;
    localMRTCPPort?: 数字;
    localSite?: 文字;
    msRtcEngineVersion?: 文字;
    networkName?: 文字;
    numConsentReqReceived?: 数字;
    numConsentReqSent?: 数字;
    numConsentRespReceived?: 数字;
    numConsentRespSent?: 数字;
    portRangeMax?: 数字;
    portRangeMin?: 数字;
    protocol?: RTCIceProtocol;
    remoteAddrType?: MSIceAddrType;
    remoteAddress?: 文字;
    remoteMR?: 文字;
    remoteMRTCPPort?: 数字;
    remoteSite?: 文字;
    rtpRtcpMux?: 真假;
    stunVer?: 数字;

}
接口 MSUtilization {
    bandwidthEstimation?: 数字;
    bandwidthEstimationAvg?: 数字;
    bandwidthEstimationMax?: 数字;
    bandwidthEstimationMin?: 数字;
    bandwidthEstimationStdDev?: 数字;
    packets?: 数字;

}
接口 MSVideoPayload 扩展 MSPayloadBase {
    durationSeconds?: 数字;
    resolution?: 文字;
    videoBitRateAvg?: 数字;
    videoBitRateMax?: 数字;
    videoFrameRateAvg?: 数字;
    videoPacketLossRate?: 数字;

}
接口 MSVideoRecvPayload 扩展 MSVideoPayload {
    lowBitRateCallPercent?: 数字;
    lowFrameRateCallPercent?: 数字;
    recvBitRateAverage?: 数字;
    recvBitRateMaximum?: 数字;
    recvCodecType?: 文字;
    recvFpsHarmonicAverage?: 数字;
    recvFrameRateAverage?: 数字;
    recvNumResSwitches?: 数字;
    recvReorderBufferMaxSuccessfullyOrderedExtent?: 数字;
    recvReorderBufferMaxSuccessfullyOrderedLateTime?: 数字;
    recvReorderBufferPacketsDroppedDueToBufferExhaustion?: 数字;
    recvReorderBufferPacketsDroppedDueToTimeout?: 数字;
    recvReorderBufferReorderedPackets?: 数字;
    recvResolutionHeight?: 数字;
    recvResolutionWidth?: 数字;
    recvVideoStreamsMax?: 数字;
    recvVideoStreamsMin?: 数字;
    recvVideoStreamsMode?: 数字;
    reorderBufferTotalPackets?: 数字;
    videoFrameLossRate?: 数字;
    videoPostFECPLR?: 数字;
    videoResolutions?: MSVideoResolutionDistribution;

}
接口 MSVideoResolutionDistribution {
    cifQuality?: 数字;
    h1080Quality?: 数字;
    h1440Quality?: 数字;
    h2160Quality?: 数字;
    h720Quality?: 数字;
    vgaQuality?: 数字;

}
接口 MSVideoSendPayload 扩展 MSVideoPayload {
    sendBitRateAverage?: 数字;
    sendBitRateMaximum?: 数字;
    sendFrameRateAverage?: 数字;
    sendResolutionHeight?: 数字;
    sendResolutionWidth?: 数字;
    sendVideoStreamsMax?: 数字;

}
接口 MediaElementAudioSourceOptions {
    mediaElement: HTMLMediaElement;

}
接口 MediaEncryptedEventInit 扩展 EventInit {
    //@@{ 数组缓冲区_:ArrayBuffer }
    initData?: 数组缓冲区_ | 空值;
    initDataType?: 文字;

}
接口 MediaKeyMessageEventInit 扩展 EventInit {
    //@@{ 数组缓冲区_:ArrayBuffer }
    message?: 数组缓冲区_ | 空值;
    messageType?: MediaKeyMessageType;

}
接口 MediaKeySystemConfiguration {
    audioCapabilities?: MediaKeySystemMediaCapability[];
    distinctiveIdentifier?: MediaKeysRequirement;
    initDataTypes?: 文字[];
    persistentState?: MediaKeysRequirement;
    videoCapabilities?: MediaKeySystemMediaCapability[];

}
接口 MediaKeySystemMediaCapability {
    contentType?: 文字;
    robustness?: 文字;

}
接口 MediaStreamConstraints {
    audio?: 真假 | MediaTrackConstraints;
    video?: 真假 | MediaTrackConstraints;

}
接口 MediaStreamErrorEventInit 扩展 EventInit {
    error?: MediaStreamError | 空值;

}
接口 MediaStreamEventInit 扩展 EventInit {
    stream?: MediaStream;

}
接口 MediaStreamTrackEventInit 扩展 EventInit {
    track?: MediaStreamTrack | 空值;

}
接口 MediaTrackCapabilities {
    aspectRatio?: 数字 | DoubleRange;
    deviceId?: 文字;
    echoCancellation?: 真假[];
    facingMode?: 文字;
    frameRate?: 数字 | DoubleRange;
    groupId?: 文字;
    height?: 数字 | LongRange;
    sampleRate?: 数字 | LongRange;
    sampleSize?: 数字 | LongRange;
    volume?: 数字 | DoubleRange;
    width?: 数字 | LongRange;

}
接口 MediaTrackConstraintSet {
    aspectRatio?: 数字 | ConstrainDoubleRange;
    channelCount?: 数字 | ConstrainLongRange;
    deviceId?: 文字 | 文字[] | ConstrainDOMStringParameters;
    displaySurface?: 文字 | 文字[] | ConstrainDOMStringParameters;
    echoCancellation?: 真假 | ConstrainBooleanParameters;
    facingMode?: 文字 | 文字[] | ConstrainDOMStringParameters;
    frameRate?: 数字 | ConstrainDoubleRange;
    groupId?: 文字 | 文字[] | ConstrainDOMStringParameters;
    height?: 数字 | ConstrainLongRange;
    latency?: 数字 | ConstrainDoubleRange;
    logicalSurface?: 真假 | ConstrainBooleanParameters;
    sampleRate?: 数字 | ConstrainLongRange;
    sampleSize?: 数字 | ConstrainLongRange;
    volume?: 数字 | ConstrainDoubleRange;
    width?: 数字 | ConstrainLongRange;

}
接口 MediaTrackConstraints 扩展 MediaTrackConstraintSet {
    advanced?: MediaTrackConstraintSet[];

}
接口 MediaTrackSettings {
    aspectRatio?: 数字;
    deviceId?: 文字;
    echoCancellation?: 真假;
    facingMode?: 文字;
    frameRate?: 数字;
    groupId?: 文字;
    height?: 数字;
    sampleRate?: 数字;
    sampleSize?: 数字;
    volume?: 数字;
    width?: 数字;

}
接口 MediaTrackSupportedConstraints {
    aspectRatio?: 真假;
    deviceId?: 真假;
    echoCancellation?: 真假;
    facingMode?: 真假;
    frameRate?: 真假;
    groupId?: 真假;
    height?: 真假;
    sampleRate?: 真假;
    sampleSize?: 真假;
    volume?: 真假;
    width?: 真假;

}
接口 MessageEventInit 扩展 EventInit {
    channel?: 文字;
    data?: 任意;
    lastEventId?: 文字;
    origin?: 文字;
    ports?: MessagePort[];
    source?: Window | 空值;

}
接口 MouseEventInit 扩展 EventModifierInit {
    button?: 数字;
    buttons?: 数字;
    clientX?: 数字;
    clientY?: 数字;
    relatedTarget?: EventTarget | 空值;
    screenX?: 数字;
    screenY?: 数字;

}
接口 MsZoomToOptions {
    animate?: 文字;
    contentX?: 数字;
    contentY?: 数字;
    scaleFactor?: 数字;
    viewportX?: 文字 | 空值;
    viewportY?: 文字 | 空值;

}
接口 MutationObserverInit {
    attributeFilter?: 文字[];
    attributeOldValue?: 真假;
    attributes?: 真假;
    characterData?: 真假;
    characterDataOldValue?: 真假;
    childList?: 真假;
    subtree?: 真假;

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
接口 OfflineAudioCompletionEventInit 扩展 EventInit {
    renderedBuffer: AudioBuffer;

}
接口 OscillatorOptions 扩展 AudioNodeOptions {
    detune?: 数字;
    frequency?: 数字;
    periodicWave?: PeriodicWave;
    type?: OscillatorType;

}
接口 PannerOptions 扩展 AudioNodeOptions {
    coneInnerAngle?: 数字;
    coneOuterAngle?: 数字;
    coneOuterGain?: 数字;
    distanceModel?: DistanceModelType;
    maxDistance?: 数字;
    orientationX?: 数字;
    orientationY?: 数字;
    orientationZ?: 数字;
    panningModel?: PanningModelType;
    positionX?: 数字;
    positionY?: 数字;
    positionZ?: 数字;
    refDistance?: 数字;
    rolloffFactor?: 数字;

}
接口 PaymentCurrencyAmount {
    currency: 文字;
    currencySystem?: 文字;
    value: 文字;

}
接口 PaymentDetailsBase {
    displayItems?: PaymentItem[];
    modifiers?: PaymentDetailsModifier[];
    shippingOptions?: PaymentShippingOption[];

}
接口 PaymentDetailsInit 扩展 PaymentDetailsBase {
    id?: 文字;
    total: PaymentItem;

}
接口 PaymentDetailsModifier {
    additionalDisplayItems?: PaymentItem[];
    data?: 任意;
    supportedMethods: 文字 | 文字[];
    total?: PaymentItem;

}
接口 PaymentDetailsUpdate 扩展 PaymentDetailsBase {
    error?: 文字;
    total?: PaymentItem;

}
接口 PaymentItem {
    amount: PaymentCurrencyAmount;
    label: 文字;
    pending?: 真假;

}
接口 PaymentMethodData {
    data?: 任意;
    supportedMethods: 文字 | 文字[];

}
接口 PaymentOptions {
    requestPayerEmail?: 真假;
    requestPayerName?: 真假;
    requestPayerPhone?: 真假;
    requestShipping?: 真假;
    shippingType?: 文字;

}
接口 PaymentRequestUpdateEventInit 扩展 EventInit {

}
接口 PaymentShippingOption {
    amount: PaymentCurrencyAmount;
    id: 文字;
    label: 文字;
    selected?: 真假;

}
接口 Pbkdf2Params 扩展 Algorithm {
    hash: 文字 | Algorithm;
    iterations: 数字;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    salt: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值;

}
接口 PeriodicWaveConstraints {
    disableNormalization?: 真假;

}
接口 PeriodicWaveOptions 扩展 PeriodicWaveConstraints {
    imag?: 数字[];
    real?: 数字[];

}
接口 PointerEventInit 扩展 MouseEventInit {
    height?: 数字;
    isPrimary?: 真假;
    pointerId?: 数字;
    pointerType?: 文字;
    pressure?: 数字;
    tiltX?: 数字;
    tiltY?: 数字;
    width?: 数字;

}
接口 PopStateEventInit 扩展 EventInit {
    state?: 任意;

}
接口 PositionOptions {
    enableHighAccuracy?: 真假;
    maximumAge?: 数字;
    timeout?: 数字;

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
接口 QueuingStrategy {
    highWaterMark?: 数字;
    size?: WritableStreamChunkCallback;

}
接口 RTCConfiguration {
    bundlePolicy?: RTCBundlePolicy;
    iceServers?: RTCIceServer[];
    iceTransportPolicy?: RTCIceTransportPolicy;
    peerIdentity?: 文字;

}
接口 RTCDTMFToneChangeEventInit 扩展 EventInit {
    tone?: 文字;

}
接口 RTCDtlsFingerprint {
    algorithm?: 文字;
    value?: 文字;

}
接口 RTCDtlsParameters {
    fingerprints?: RTCDtlsFingerprint[];
    role?: RTCDtlsRole;

}
接口 RTCIceCandidateAttributes 扩展 RTCStats {
    addressSourceUrl?: 文字;
    candidateType?: RTCStatsIceCandidateType;
    ipAddress?: 文字;
    portNumber?: 数字;
    priority?: 数字;
    transport?: 文字;

}
接口 RTCIceCandidateComplete {

}
接口 RTCIceCandidateDictionary {
    foundation?: 文字;
    ip?: 文字;
    msMTurnSessionId?: 文字;
    port?: 数字;
    priority?: 数字;
    protocol?: RTCIceProtocol;
    relatedAddress?: 文字;
    relatedPort?: 数字;
    tcpType?: RTCIceTcpCandidateType;
    type?: RTCIceCandidateType;

}
接口 RTCIceCandidateInit {
    candidate?: 文字;
    sdpMLineIndex?: 数字;
    sdpMid?: 文字;

}
接口 RTCIceCandidatePair {
    local?: RTCIceCandidateDictionary;
    remote?: RTCIceCandidateDictionary;

}
接口 RTCIceCandidatePairStats 扩展 RTCStats {
    availableIncomingBitrate?: 数字;
    availableOutgoingBitrate?: 数字;
    bytesReceived?: 数字;
    bytesSent?: 数字;
    localCandidateId?: 文字;
    nominated?: 真假;
    priority?: 数字;
    readable?: 真假;
    remoteCandidateId?: 文字;
    roundTripTime?: 数字;
    state?: RTCStatsIceCandidatePairState;
    transportId?: 文字;
    writable?: 真假;

}
接口 RTCIceGatherOptions {
    gatherPolicy?: RTCIceGatherPolicy;
    iceservers?: RTCIceServer[];
    portRange?: MSPortRange;

}
接口 RTCIceParameters {
    iceLite?: 真假 | 空值;
    password?: 文字;
    usernameFragment?: 文字;

}
接口 RTCIceServer {
    credential?: 文字 | 空值;
    urls?: 任意;
    username?: 文字 | 空值;

}
接口 RTCInboundRTPStreamStats 扩展 RTCRTPStreamStats {
    bytesReceived?: 数字;
    fractionLost?: 数字;
    jitter?: 数字;
    packetsLost?: 数字;
    packetsReceived?: 数字;

}
接口 RTCMediaStreamTrackStats 扩展 RTCStats {
    audioLevel?: 数字;
    echoReturnLoss?: 数字;
    echoReturnLossEnhancement?: 数字;
    frameHeight?: 数字;
    frameWidth?: 数字;
    framesCorrupted?: 数字;
    framesDecoded?: 数字;
    framesDropped?: 数字;
    framesPerSecond?: 数字;
    framesReceived?: 数字;
    framesSent?: 数字;
    remoteSource?: 真假;
    ssrcIds?: 文字[];
    trackIdentifier?: 文字;

}
接口 RTCOfferOptions {
    iceRestart?: 真假;
    offerToReceiveAudio?: 数字;
    offerToReceiveVideo?: 数字;
    voiceActivityDetection?: 真假;

}
接口 RTCOutboundRTPStreamStats 扩展 RTCRTPStreamStats {
    bytesSent?: 数字;
    packetsSent?: 数字;
    roundTripTime?: 数字;
    targetBitrate?: 数字;

}
接口 RTCPeerConnectionIceEventInit 扩展 EventInit {
    candidate?: RTCIceCandidate;

}
接口 RTCRTPStreamStats 扩展 RTCStats {
    associateStatsId?: 文字;
    codecId?: 文字;
    firCount?: 数字;
    isRemote?: 真假;
    mediaTrackId?: 文字;
    mediaType?: 文字;
    nackCount?: 数字;
    pliCount?: 数字;
    sliCount?: 数字;
    ssrc?: 文字;
    transportId?: 文字;

}
接口 RTCRtcpFeedback {
    parameter?: 文字;
    type?: 文字;

}
接口 RTCRtcpParameters {
    cname?: 文字;
    mux?: 真假;
    reducedSize?: 真假;
    ssrc?: 数字;

}
接口 RTCRtpCapabilities {
    codecs?: RTCRtpCodecCapability[];
    fecMechanisms?: 文字[];
    headerExtensions?: RTCRtpHeaderExtension[];

}
接口 RTCRtpCodecCapability {
    clockRate?: 数字;
    kind?: 文字;
    maxSpatialLayers?: 数字;
    maxTemporalLayers?: 数字;
    maxptime?: 数字;
    name?: 文字;
    numChannels?: 数字;
    options?: 任意;
    parameters?: 任意;
    preferredPayloadType?: 数字;
    ptime?: 数字;
    rtcpFeedback?: RTCRtcpFeedback[];
    svcMultiStreamSupport?: 真假;

}
接口 RTCRtpCodecParameters {
    clockRate?: 数字;
    maxptime?: 数字;
    name?: 文字;
    numChannels?: 数字;
    parameters?: 任意;
    payloadType?: 数字;
    ptime?: 数字;
    rtcpFeedback?: RTCRtcpFeedback[];

}
接口 RTCRtpContributingSource {
    audioLevel?: 数字;
    csrc?: 数字;
    timestamp?: 数字;

}
接口 RTCRtpEncodingParameters {
    active?: 真假;
    codecPayloadType?: 数字;
    dependencyEncodingIds?: 文字[];
    encodingId?: 文字;
    fec?: RTCRtpFecParameters;
    framerateScale?: 数字;
    maxBitrate?: 数字;
    maxFramerate?: 数字;
    minQuality?: 数字;
    priority?: 数字;
    resolutionScale?: 数字;
    rtx?: RTCRtpRtxParameters;
    ssrc?: 数字;
    ssrcRange?: RTCSsrcRange;

}
接口 RTCRtpFecParameters {
    mechanism?: 文字;
    ssrc?: 数字;

}
接口 RTCRtpHeaderExtension {
    kind?: 文字;
    preferredEncrypt?: 真假;
    preferredId?: 数字;
    uri?: 文字;

}
接口 RTCRtpHeaderExtensionParameters {
    encrypt?: 真假;
    id?: 数字;
    uri?: 文字;

}
接口 RTCRtpParameters {
    codecs?: RTCRtpCodecParameters[];
    degradationPreference?: RTCDegradationPreference;
    encodings?: RTCRtpEncodingParameters[];
    headerExtensions?: RTCRtpHeaderExtensionParameters[];
    muxId?: 文字;
    rtcp?: RTCRtcpParameters;

}
接口 RTCRtpRtxParameters {
    ssrc?: 数字;

}
接口 RTCRtpUnhandled {
    muxId?: 文字;
    payloadType?: 数字;
    ssrc?: 数字;

}
接口 RTCSessionDescriptionInit {
    sdp?: 文字;
    type?: RTCSdpType;

}
接口 RTCSrtpKeyParam {
    keyMethod?: 文字;
    keySalt?: 文字;
    lifetime?: 文字;
    mkiLength?: 数字;
    mkiValue?: 数字;

}
接口 RTCSrtpSdesParameters {
    cryptoSuite?: 文字;
    keyParams?: RTCSrtpKeyParam[];
    sessionParams?: 文字[];
    tag?: 数字;

}
接口 RTCSsrcRange {
    max?: 数字;
    min?: 数字;

}
接口 RTCStats {
    id?: 文字;
    msType?: MSStatsType;
    timestamp?: 数字;
    type?: RTCStatsType;

}
接口 RTCStatsReport {

}
接口 RTCTransportStats 扩展 RTCStats {
    activeConnection?: 真假;
    bytesReceived?: 数字;
    bytesSent?: 数字;
    localCertificateId?: 文字;
    remoteCertificateId?: 文字;
    rtcpTransportStatsId?: 文字;
    selectedCandidatePairId?: 文字;

}
接口 RegistrationOptions {
    scope?: 文字;

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
    signal?: AbortSignal;
    window?: 任意;

}
接口 ResponseInit {
    headers?: HeadersInit;
    status?: 数字;
    statusText?: 文字;

}
接口 RsaHashedImportParams 扩展 Algorithm {
    hash: 文字 | Algorithm;

}
接口 RsaHashedKeyAlgorithm 扩展 RsaKeyAlgorithm {
    hash: KeyAlgorithm;

}
接口 RsaHashedKeyGenParams 扩展 RsaKeyGenParams {
    hash: 文字 | Algorithm;

}
接口 RsaKeyAlgorithm 扩展 KeyAlgorithm {
    modulusLength: 数字;
    //@@{ 正整数数组8_:Uint8Array }
    publicExponent: 正整数数组8_;

}
接口 RsaKeyGenParams 扩展 Algorithm {
    modulusLength: 数字;
    //@@{ 正整数数组8_:Uint8Array }
    publicExponent: 正整数数组8_;

}
接口 RsaOaepParams 扩展 Algorithm {
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    label?: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值;

}
接口 RsaOtherPrimesInfo {
    d?: 文字;
    r?: 文字;
    t?: 文字;

}
接口 RsaPssParams 扩展 Algorithm {
    saltLength: 数字;

}
接口 ScopedCredentialDescriptor {
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    id: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值;
    transports?: Transport[];
    type: ScopedCredentialType;

}
接口 ScopedCredentialOptions {
    excludeList?: ScopedCredentialDescriptor[];
    extensions?: WebAuthnExtensions;
    rpId?: 文字;
    timeoutSeconds?: 数字;

}
接口 ScopedCredentialParameters {
    algorithm: 文字 | Algorithm;
    type: ScopedCredentialType;

}
接口 SecurityPolicyViolationEventInit 扩展 EventInit {
    blockedURI?: 文字;
    columnNumber?: 数字;
    documentURI?: 文字;
    effectiveDirective?: 文字;
    lineNumber?: 数字;
    originalPolicy?: 文字;
    referrer?: 文字;
    sourceFile?: 文字;
    statusCode?: 数字;
    violatedDirective?: 文字;

}
接口 ServiceWorkerMessageEventInit 扩展 EventInit {
    data?: 任意;
    lastEventId?: 文字;
    origin?: 文字;
    ports?: MessagePort[] | 空值;
    source?: ServiceWorker | MessagePort | 空值;

}
接口 SpeechSynthesisEventInit 扩展 EventInit {
    charIndex?: 数字;
    charLength?: 数字;
    elapsedTime?: 数字;
    name?: 文字;
    utterance?: SpeechSynthesisUtterance | 空值;

}
接口 StereoPannerOptions 扩展 AudioNodeOptions {
    pan?: 数字;

}
接口 StoreExceptionsInformation 扩展 ExceptionInformation {
    detailURI?: 文字 | 空值;
    explanationString?: 文字 | 空值;
    siteName?: 文字 | 空值;

}
接口 StoreSiteSpecificExceptionsInformation 扩展 StoreExceptionsInformation {
    arrayOfDomainStrings?: 文字[];

}
接口 SyncEventInit 扩展 ExtendableEventInit {
    lastChance?: 真假;
    tag: 文字;

}
接口 TextDecodeOptions {
    stream?: 真假;

}
接口 TextDecoderOptions {
    fatal?: 真假;
    ignoreBOM?: 真假;

}
接口 TrackEventInit 扩展 EventInit {
    track?: VideoTrack | AudioTrack | TextTrack | 空值;

}
接口 TransitionEventInit 扩展 EventInit {
    elapsedTime?: 数字;
    propertyName?: 文字;

}
接口 UIEventInit 扩展 EventInit {
    detail?: 数字;
    view?: Window | 空值;

}
接口 UnderlyingSink {
    abort?: WritableStreamErrorCallback;
    close?: WritableStreamDefaultControllerCallback;
    start: WritableStreamDefaultControllerCallback;
    write?: WritableStreamChunkCallback;

}
接口 VRDisplayEventInit 扩展 EventInit {
    display: VRDisplay;
    reason?: VRDisplayEventReason;

}
接口 VRLayer {
    leftBounds?: 数字[] | 空值;
    rightBounds?: 数字[] | 空值;
    source?: HTMLCanvasElement | 空值;

}
接口 VRStageParameters {
    //@@{ 浮点数组32_:Float32Array }
    sittingToStandingTransform?: 浮点数组32_;
    sizeX?: 数字;
    sizeY?: 数字;

}
接口 WaveShaperOptions 扩展 AudioNodeOptions {
    curve?: 数字[];
    oversample?: OverSampleType;

}
接口 WebAuthnExtensions {

}
接口 WebGLContextAttributes {
    alpha?: 真假;
    antialias?: 真假;
    depth?: 真假;
    failIfMajorPerformanceCaveat?: 真假;
    premultipliedAlpha?: 真假;
    preserveDrawingBuffer?: 真假;
    stencil?: 真假;

}
接口 WebGLContextEventInit 扩展 EventInit {
    statusMessage?: 文字;

}
接口 WheelEventInit 扩展 MouseEventInit {
    deltaMode?: 数字;
    deltaX?: 数字;
    deltaY?: 数字;
    deltaZ?: 数字;

}
接口 EventListener {
    (evt: Event): 无值;

}
类型 WebKitEntriesCallback = ((entries: WebKitEntry[]) => 无值) | { handleEvent(entries: WebKitEntry[]): 无值; };
类型 WebKitErrorCallback = ((err: DOMError) => 无值) | { handleEvent(err: DOMError): 无值; };
类型 WebKitFileCallback = ((file: File) => 无值) | { handleEvent(file: File): 无值; };
接口 ANGLE_instanced_arrays {
    drawArraysInstancedANGLE(mode: 数字, first: 数字, count: 数字, primcount: 数字): 无值;
    drawElementsInstancedANGLE(mode: 数字, count: 数字, type: 数字, offset: 数字, primcount: 数字): 无值;
    vertexAttribDivisorANGLE(index: 数字, divisor: 数字): 无值;
    只读 VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: 数字;

}
声明 值量 ANGLE_instanced_arrays: {
    prototype: ANGLE_instanced_arrays;
    新建(): ANGLE_instanced_arrays;
    只读 VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: 数字;

};
接口 AbortController {
    只读 signal: AbortSignal;
    abort(): 无值;

}
声明 值量 AbortController: {
    prototype: AbortController;
    新建(): AbortController;

};
接口 AbortSignalEventMap {
    "abort": ProgressEvent;

}
接口 AbortSignal 扩展 EventTarget {
    只读 aborted: 真假;
    onabort: ((this: AbortSignal, ev: ProgressEvent) => 任意) | 空值;
    addEventListener<K 扩展 键为 AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 AbortSignal: {
    prototype: AbortSignal;
    新建(): AbortSignal;

};
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
接口 AesCfbParams 扩展 Algorithm {
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    iv: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_;

}
接口 AesCmacParams 扩展 Algorithm {
    length: 数字;

}
接口 AnalyserNode 扩展 AudioNode {
    fftSize: 数字;
    只读 frequencyBinCount: 数字;
    maxDecibels: 数字;
    minDecibels: 数字;
    smoothingTimeConstant: 数字;
    //@@{ 正整数数组8_:Uint8Array }
    getByteFrequencyData(array: 正整数数组8_): 无值;
    //@@{ 正整数数组8_:Uint8Array }
    getByteTimeDomainData(array: 正整数数组8_): 无值;
    //@@{ 浮点数组32_:Float32Array }
    getFloatFrequencyData(array: 浮点数组32_): 无值;
    //@@{ 浮点数组32_:Float32Array }
    getFloatTimeDomainData(array: 浮点数组32_): 无值;

}
声明 值量 AnalyserNode: {
    prototype: AnalyserNode;
    新建(): AnalyserNode;

};
接口 Animation {
    currentTime: 数字 | 空值;
    effect: AnimationEffectReadOnly;
    //@@{ 预设_:Promise }
    只读 finished: 预设_<Animation>;
    id: 文字;
    只读 pending: 真假;
    只读 playState: "idle" | "running" | "paused" | "finished";
    playbackRate: 数字;
    //@@{ 预设_:Promise }
    只读 ready: 预设_<Animation>;
    startTime: 数字;
    timeline: AnimationTimeline;
    cancel(): 无值;
    finish(): 无值;
    oncancel: (this: Animation, ev: AnimationPlaybackEvent) => 任意;
    onfinish: (this: Animation, ev: AnimationPlaybackEvent) => 任意;
    pause(): 无值;
    play(): 无值;
    reverse(): 无值;

}
声明 值量 Animation: {
    prototype: Animation;
    新建(effect?: AnimationEffectReadOnly, timeline?: AnimationTimeline): Animation;

};
接口 AnimationEffectReadOnly {
    只读 timing: 数字;
    getComputedTiming(): ComputedTimingProperties;

}
接口 AnimationEvent 扩展 Event {
    只读 animationName: 文字;
    只读 elapsedTime: 数字;

}
声明 值量 AnimationEvent: {
    prototype: AnimationEvent;
    新建(typeArg: 文字, eventInitDict?: AnimationEventInit): AnimationEvent;

};
接口 AnimationKeyFrame {
    easing?: 文字 | 文字[];
    offset?: 数字 | 空值 | (数字 | 空值)[];
    [index: 文字]: 文字 | 数字 | 数字[] | 文字[] | 空值 | (数字 | 空值)[] | 未定;

}
接口 AnimationOptions {
    delay?: 数字;
    direction?: "normal" | "reverse" | "alternate" | "alternate-reverse";
    duration?: 数字;
    easing?: 文字;
    endDelay?: 数字;
    fill?: "none" | "forwards" | "backwards" | "both"| "auto";
    id?: 文字;
    iterationStart?: 数字;
    iterations?: 数字;

}
接口 AnimationPlaybackEvent 扩展 Event {
    只读 currentTime: 数字 | 空值;
    只读 timelineTime: 数字 | 空值;

}
声明 值量 AnimationPlaybackEvent: {
    prototype: AnimationPlaybackEvent;
    新建(type: 文字, eventInitDict?: AnimationPlaybackEventInit): AnimationPlaybackEvent;

};
接口 AnimationPlaybackEventInit 扩展 EventInit {
    currentTime?: 数字 | 空值;
    timelineTime?: 数字 | 空值;

}
接口 AnimationTimeline {
    只读 currentTime: 数字 | 空值;

}
接口 ApplicationCacheEventMap {
    "cached": Event;
    "checking": Event;
    "downloading": Event;
    "error": Event;
    "noupdate": Event;
    "obsolete": Event;
    "progress": ProgressEvent;
    "updateready": Event;

}
接口 ApplicationCache 扩展 EventTarget {
    oncached: ((this: ApplicationCache, ev: Event) => 任意) | 空值;
    onchecking: ((this: ApplicationCache, ev: Event) => 任意) | 空值;
    ondownloading: ((this: ApplicationCache, ev: Event) => 任意) | 空值;
    onerror: ((this: ApplicationCache, ev: Event) => 任意) | 空值;
    onnoupdate: ((this: ApplicationCache, ev: Event) => 任意) | 空值;
    onobsolete: ((this: ApplicationCache, ev: Event) => 任意) | 空值;
    onprogress: ((this: ApplicationCache, ev: ProgressEvent) => 任意) | 空值;
    onupdateready: ((this: ApplicationCache, ev: Event) => 任意) | 空值;
    只读 status: 数字;
    abort(): 无值;
    swapCache(): 无值;
    update(): 无值;
    只读 CHECKING: 数字;
    只读 DOWNLOADING: 数字;
    只读 IDLE: 数字;
    只读 OBSOLETE: 数字;
    只读 UNCACHED: 数字;
    只读 UPDATEREADY: 数字;
    addEventListener<K 扩展 键为 ApplicationCacheEventMap>(type: K, listener: (this: ApplicationCache, ev: ApplicationCacheEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 ApplicationCacheEventMap>(type: K, listener: (this: ApplicationCache, ev: ApplicationCacheEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 ApplicationCache: {
    prototype: ApplicationCache;
    新建(): ApplicationCache;
    只读 CHECKING: 数字;
    只读 DOWNLOADING: 数字;
    只读 IDLE: 数字;
    只读 OBSOLETE: 数字;
    只读 UNCACHED: 数字;
    只读 UPDATEREADY: 数字;

};
接口 AssignedNodesOptions {
    flatten?: 真假;

}
接口 Attr 扩展 Node {
    只读 name: 文字;
    只读 ownerElement: Element | 空值;
    只读 prefix: 文字 | 空值;
    只读 specified: 真假;
    value: 文字;

}
声明 值量 Attr: {
    prototype: Attr;
    新建(): Attr;

};
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
接口 AudioBufferSourceNodeEventMap {
    "ended": Event;

}
接口 AudioBufferSourceNode 扩展 AudioNode {
    buffer: AudioBuffer | 空值;
    只读 detune: AudioParam;
    loop: 真假;
    loopEnd: 数字;
    loopStart: 数字;
    onended: ((this: AudioBufferSourceNode, ev: Event) => 任意) | 空值;
    只读 playbackRate: AudioParam;
    start(when?: 数字, offset?: 数字, duration?: 数字): 无值;
    stop(when?: 数字): 无值;
    addEventListener<K 扩展 键为 AudioBufferSourceNodeEventMap>(type: K, listener: (this: AudioBufferSourceNode, ev: AudioBufferSourceNodeEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 AudioBufferSourceNodeEventMap>(type: K, listener: (this: AudioBufferSourceNode, ev: AudioBufferSourceNodeEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 AudioBufferSourceNode: {
    prototype: AudioBufferSourceNode;
    新建(): AudioBufferSourceNode;

};
接口 AudioContextEventMap {
    "statechange": Event;

}
接口 AudioContextBase 扩展 EventTarget {
    只读 currentTime: 数字;
    只读 destination: AudioDestinationNode;
    只读 listener: AudioListener;
    onstatechange: ((this: AudioContext, ev: Event) => 任意) | 空值;
    只读 sampleRate: 数字;
    只读 state: AudioContextState;
    //@@{ 预设_:Promise }
    close(): 预设_<无值>;
    createAnalyser(): AnalyserNode;
    createBiquadFilter(): BiquadFilterNode;
    createBuffer(numberOfChannels: 数字, length: 数字, sampleRate: 数字): AudioBuffer;
    createBufferSource(): AudioBufferSourceNode;
    createChannelMerger(numberOfInputs?: 数字): ChannelMergerNode;
    createChannelSplitter(numberOfOutputs?: 数字): ChannelSplitterNode;
    createConvolver(): ConvolverNode;
    createDelay(maxDelayTime?: 数字): DelayNode;
    createDynamicsCompressor(): DynamicsCompressorNode;
    createGain(): GainNode;
    createIIRFilter(feedforward: 数字[], feedback: 数字[]): IIRFilterNode;
    createMediaElementSource(mediaElement: HTMLMediaElement): MediaElementAudioSourceNode;
    createMediaStreamSource(mediaStream: MediaStream): MediaStreamAudioSourceNode;
    createOscillator(): OscillatorNode;
    createPanner(): PannerNode;
    //@@{ 浮点数组32_:Float32Array }
    createPeriodicWave(real: 浮点数组32_, imag: 浮点数组32_, constraints?: PeriodicWaveConstraints): PeriodicWave;
    createScriptProcessor(bufferSize?: 数字, numberOfInputChannels?: 数字, numberOfOutputChannels?: 数字): ScriptProcessorNode;
    createStereoPanner(): StereoPannerNode;
    createWaveShaper(): WaveShaperNode;
    //@@{ 数组缓冲区_:ArrayBuffer, 预设_:Promise }
    decodeAudioData(audioData: 数组缓冲区_, successCallback?: DecodeSuccessCallback, errorCallback?: DecodeErrorCallback): 预设_<AudioBuffer>;
    //@@{ 预设_:Promise }
    resume(): 预设_<无值>;
    addEventListener<K 扩展 键为 AudioContextEventMap>(type: K, listener: (this: AudioContext, ev: AudioContextEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 AudioContextEventMap>(type: K, listener: (this: AudioContext, ev: AudioContextEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
接口 AudioContext 扩展 AudioContextBase {
    //@@{ 预设_:Promise }
    suspend(): 预设_<无值>;

}
声明 值量 AudioContext: {
    prototype: AudioContext;
    新建(): AudioContext;

};
接口 AudioDestinationNode 扩展 AudioNode {
    只读 maxChannelCount: 数字;

}
声明 值量 AudioDestinationNode: {
    prototype: AudioDestinationNode;
    新建(): AudioDestinationNode;

};
接口 AudioListener {

    /** @deprecated */
    dopplerFactor: 数字;

    /** @deprecated */
    speedOfSound: 数字;

    /** @deprecated */
    setOrientation(x: 数字, y: 数字, z: 数字, xUp: 数字, yUp: 数字, zUp: 数字): 无值;

    /** @deprecated */
    setPosition(x: 数字, y: 数字, z: 数字): 无值;

    /** @deprecated */
    setVelocity(x: 数字, y: 数字, z: 数字): 无值;

}
声明 值量 AudioListener: {
    prototype: AudioListener;
    新建(): AudioListener;

};
接口 AudioNode 扩展 EventTarget {
    channelCount: 数字;
    channelCountMode: ChannelCountMode;
    channelInterpretation: ChannelInterpretation;
    只读 context: AudioContext;
    只读 numberOfInputs: 数字;
    只读 numberOfOutputs: 数字;
    connect(destination: AudioNode, output?: 数字, input?: 数字): AudioNode;
    connect(destination: AudioParam, output?: 数字): 无值;
    disconnect(): 无值;
    disconnect(output: 数字): 无值;
    disconnect(destination: AudioNode): 无值;
    disconnect(destination: AudioNode, output: 数字): 无值;
    disconnect(destination: AudioNode, output: 数字, input: 数字): 无值;
    disconnect(destination: AudioParam): 无值;
    disconnect(destination: AudioParam, output: 数字): 无值;

}
声明 值量 AudioNode: {
    prototype: AudioNode;
    新建(): AudioNode;

};
接口 AudioParam {
    只读 defaultValue: 数字;
    value: 数字;
    cancelScheduledValues(cancelTime: 数字): AudioParam;
    exponentialRampToValueAtTime(value: 数字, endTime: 数字): AudioParam;
    linearRampToValueAtTime(value: 数字, endTime: 数字): AudioParam;
    setTargetAtTime(target: 数字, startTime: 数字, timeConstant: 数字): AudioParam;
    setValueAtTime(value: 数字, startTime: 数字): AudioParam;
    setValueCurveAtTime(values: 数字[], startTime: 数字, duration: 数字): AudioParam;

}
声明 值量 AudioParam: {
    prototype: AudioParam;
    新建(): AudioParam;

};
接口 AudioProcessingEvent 扩展 Event {
    只读 inputBuffer: AudioBuffer;
    只读 outputBuffer: AudioBuffer;
    只读 playbackTime: 数字;

}
声明 值量 AudioProcessingEvent: {
    prototype: AudioProcessingEvent;
    新建(): AudioProcessingEvent;

};
接口 AudioTrack {
    enabled: 真假;
    只读 id: 文字;
    kind: 文字;
    只读 label: 文字;
    language: 文字;
    只读 sourceBuffer: SourceBuffer;

}
声明 值量 AudioTrack: {
    prototype: AudioTrack;
    新建(): AudioTrack;

};
接口 AudioTrackListEventMap {
    "addtrack": TrackEvent;
    "change": Event;
    "removetrack": TrackEvent;

}
接口 AudioTrackList 扩展 EventTarget {
    只读 length: 数字;
    onaddtrack: ((this: AudioTrackList, ev: TrackEvent) => 任意) | 空值;
    onchange: ((this: AudioTrackList, ev: Event) => 任意) | 空值;
    onremovetrack: ((this: AudioTrackList, ev: TrackEvent) => 任意) | 空值;
    getTrackById(id: 文字): AudioTrack | 空值;
    item(index: 数字): AudioTrack;
    addEventListener<K 扩展 键为 AudioTrackListEventMap>(type: K, listener: (this: AudioTrackList, ev: AudioTrackListEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 AudioTrackListEventMap>(type: K, listener: (this: AudioTrackList, ev: AudioTrackListEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;
    [index: 数字]: AudioTrack;

}
声明 值量 AudioTrackList: {
    prototype: AudioTrackList;
    新建(): AudioTrackList;

};
接口 BarProp {
    只读 visible: 真假;

}
声明 值量 BarProp: {
    prototype: BarProp;
    新建(): BarProp;

};
接口 BeforeUnloadEvent 扩展 Event {
    returnValue: 任意;

}
声明 值量 BeforeUnloadEvent: {
    prototype: BeforeUnloadEvent;
    新建(): BeforeUnloadEvent;

};
接口 BhxBrowser {
    只读 lastError: DOMException;
    checkMatchesGlobExpression(pattern: 文字, value: 文字): 真假;
    checkMatchesUriExpression(pattern: 文字, value: 文字): 真假;
    clearLastError(): 无值;
    currentWindowId(): 数字;
    fireExtensionApiTelemetry(functionName: 文字, isSucceeded: 真假, isSupported: 真假, errorString: 文字): 无值;
    genericFunction(functionId: 数字, destination: 任意, parameters?: 文字, callbackId?: 数字): 无值;
    genericSynchronousFunction(functionId: 数字, parameters?: 文字): 文字;
    getExtensionId(): 文字;
    getThisAddress(): 任意;
    //@@{ 函数_:Function }
    registerGenericFunctionCallbackHandler(callbackHandler: 函数_): 无值;
    //@@{ 函数_:Function }
    registerGenericListenerHandler(eventHandler: 函数_): 无值;
    setLastError(parameters: 文字): 无值;
    webPlatformGenericFunction(destination: 任意, parameters?: 文字, callbackId?: 数字): 无值;

}
声明 值量 BhxBrowser: {
    prototype: BhxBrowser;
    新建(): BhxBrowser;

};
接口 BiquadFilterNode 扩展 AudioNode {
    只读 Q: AudioParam;
    只读 detune: AudioParam;
    只读 frequency: AudioParam;
    只读 gain: AudioParam;
    type: BiquadFilterType;
    //@@{ 浮点数组32_:Float32Array }
    getFrequencyResponse(frequencyHz: 浮点数组32_, magResponse: 浮点数组32_, phaseResponse: 浮点数组32_): 无值;

}
声明 值量 BiquadFilterNode: {
    prototype: BiquadFilterNode;
    新建(): BiquadFilterNode;

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
接口 BroadcastChannel 扩展 EventTarget {
    只读 name: 文字;
    onmessage: (ev: MessageEvent) => 任意;
    onmessageerror: (ev: MessageEvent) => 任意;
    addEventListener<K 扩展 键为 BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    close(): 无值;
    postMessage(message: 任意): 无值;
    removeEventListener<K 扩展 键为 BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 BroadcastChannel: {
    prototype: BroadcastChannel;
    新建(name: 文字): BroadcastChannel;

};
接口 BroadcastChannelEventMap {
    message: MessageEvent;
    messageerror: MessageEvent;

}
接口 ByteLengthQueuingStrategy {
    highWaterMark: 数字;
    size(chunk?: 任意): 数字;

}
声明 值量 ByteLengthQueuingStrategy: {
    prototype: ByteLengthQueuingStrategy;
    新建(strategy: QueuingStrategy): ByteLengthQueuingStrategy;

};
接口 CDATASection 扩展 Text {

}
声明 值量 CDATASection: {
    prototype: CDATASection;
    新建(): CDATASection;

};
接口 CSS {
    escape(value: 文字): 文字;
    supports(property: 文字, value?: 文字): 真假;

}
声明 值量 CSS: CSS;
接口 CSSConditionRule 扩展 CSSGroupingRule {
    conditionText: 文字;

}
声明 值量 CSSConditionRule: {
    prototype: CSSConditionRule;
    新建(): CSSConditionRule;

};
接口 CSSFontFaceRule 扩展 CSSRule {
    只读 style: CSSStyleDeclaration;

}
声明 值量 CSSFontFaceRule: {
    prototype: CSSFontFaceRule;
    新建(): CSSFontFaceRule;

};
接口 CSSGroupingRule 扩展 CSSRule {
    只读 cssRules: CSSRuleList;
    deleteRule(index: 数字): 无值;
    insertRule(rule: 文字, index: 数字): 数字;

}
声明 值量 CSSGroupingRule: {
    prototype: CSSGroupingRule;
    新建(): CSSGroupingRule;

};
接口 CSSImportRule 扩展 CSSRule {
    只读 href: 文字;
    只读 media: MediaList;
    只读 styleSheet: CSSStyleSheet;

}
声明 值量 CSSImportRule: {
    prototype: CSSImportRule;
    新建(): CSSImportRule;

};
接口 CSSKeyframeRule 扩展 CSSRule {
    keyText: 文字;
    只读 style: CSSStyleDeclaration;

}
声明 值量 CSSKeyframeRule: {
    prototype: CSSKeyframeRule;
    新建(): CSSKeyframeRule;

};
接口 CSSKeyframesRule 扩展 CSSRule {
    只读 cssRules: CSSRuleList;
    name: 文字;
    appendRule(rule: 文字): 无值;
    deleteRule(rule: 文字): 无值;
    findRule(rule: 文字): CSSKeyframeRule | 空值;

}
声明 值量 CSSKeyframesRule: {
    prototype: CSSKeyframesRule;
    新建(): CSSKeyframesRule;

};
接口 CSSMediaRule 扩展 CSSConditionRule {
    只读 media: MediaList;

}
声明 值量 CSSMediaRule: {
    prototype: CSSMediaRule;
    新建(): CSSMediaRule;

};
接口 CSSNamespaceRule 扩展 CSSRule {
    只读 namespaceURI: 文字;
    只读 prefix: 文字;

}
声明 值量 CSSNamespaceRule: {
    prototype: CSSNamespaceRule;
    新建(): CSSNamespaceRule;

};
接口 CSSPageRule 扩展 CSSRule {
    只读 pseudoClass: 文字;
    只读 selector: 文字;
    selectorText: 文字;
    只读 style: CSSStyleDeclaration;

}
声明 值量 CSSPageRule: {
    prototype: CSSPageRule;
    新建(): CSSPageRule;

};
接口 CSSRule {
    cssText: 文字;
    只读 parentRule: CSSRule | 空值;
    只读 parentStyleSheet: CSSStyleSheet | 空值;
    只读 type: 数字;
    只读 CHARSET_RULE: 数字;
    只读 FONT_FACE_RULE: 数字;
    只读 IMPORT_RULE: 数字;
    只读 KEYFRAMES_RULE: 数字;
    只读 KEYFRAME_RULE: 数字;
    只读 MEDIA_RULE: 数字;
    只读 NAMESPACE_RULE: 数字;
    只读 PAGE_RULE: 数字;
    只读 STYLE_RULE: 数字;
    只读 SUPPORTS_RULE: 数字;
    只读 UNKNOWN_RULE: 数字;
    只读 VIEWPORT_RULE: 数字;

}
声明 值量 CSSRule: {
    prototype: CSSRule;
    新建(): CSSRule;
    只读 CHARSET_RULE: 数字;
    只读 FONT_FACE_RULE: 数字;
    只读 IMPORT_RULE: 数字;
    只读 KEYFRAMES_RULE: 数字;
    只读 KEYFRAME_RULE: 数字;
    只读 MEDIA_RULE: 数字;
    只读 NAMESPACE_RULE: 数字;
    只读 PAGE_RULE: 数字;
    只读 STYLE_RULE: 数字;
    只读 SUPPORTS_RULE: 数字;
    只读 UNKNOWN_RULE: 数字;
    只读 VIEWPORT_RULE: 数字;

};
接口 CSSRuleList {
    只读 length: 数字;
    item(index: 数字): CSSRule | 空值;
    [index: 数字]: CSSRule;

}
声明 值量 CSSRuleList: {
    prototype: CSSRuleList;
    新建(): CSSRuleList;

};
接口 CSSStyleDeclaration {
    alignContent: 文字 | 空值;
    alignItems: 文字 | 空值;
    alignSelf: 文字 | 空值;
    alignmentBaseline: 文字 | 空值;
    animation: 文字 | 空值;
    animationDelay: 文字 | 空值;
    animationDirection: 文字 | 空值;
    animationDuration: 文字 | 空值;
    animationFillMode: 文字 | 空值;
    animationIterationCount: 文字 | 空值;
    animationName: 文字 | 空值;
    animationPlayState: 文字 | 空值;
    animationTimingFunction: 文字 | 空值;
    backfaceVisibility: 文字 | 空值;
    background: 文字 | 空值;
    backgroundAttachment: 文字 | 空值;
    backgroundClip: 文字 | 空值;
    backgroundColor: 文字 | 空值;
    backgroundImage: 文字 | 空值;
    backgroundOrigin: 文字 | 空值;
    backgroundPosition: 文字 | 空值;
    backgroundPositionX: 文字 | 空值;
    backgroundPositionY: 文字 | 空值;
    backgroundRepeat: 文字 | 空值;
    backgroundSize: 文字 | 空值;
    baselineShift: 文字 | 空值;
    border: 文字 | 空值;
    borderBottom: 文字 | 空值;
    borderBottomColor: 文字 | 空值;
    borderBottomLeftRadius: 文字 | 空值;
    borderBottomRightRadius: 文字 | 空值;
    borderBottomStyle: 文字 | 空值;
    borderBottomWidth: 文字 | 空值;
    borderCollapse: 文字 | 空值;
    borderColor: 文字 | 空值;
    borderImage: 文字 | 空值;
    borderImageOutset: 文字 | 空值;
    borderImageRepeat: 文字 | 空值;
    borderImageSlice: 文字 | 空值;
    borderImageSource: 文字 | 空值;
    borderImageWidth: 文字 | 空值;
    borderLeft: 文字 | 空值;
    borderLeftColor: 文字 | 空值;
    borderLeftStyle: 文字 | 空值;
    borderLeftWidth: 文字 | 空值;
    borderRadius: 文字 | 空值;
    borderRight: 文字 | 空值;
    borderRightColor: 文字 | 空值;
    borderRightStyle: 文字 | 空值;
    borderRightWidth: 文字 | 空值;
    borderSpacing: 文字 | 空值;
    borderStyle: 文字 | 空值;
    borderTop: 文字 | 空值;
    borderTopColor: 文字 | 空值;
    borderTopLeftRadius: 文字 | 空值;
    borderTopRightRadius: 文字 | 空值;
    borderTopStyle: 文字 | 空值;
    borderTopWidth: 文字 | 空值;
    borderWidth: 文字 | 空值;
    bottom: 文字 | 空值;
    boxShadow: 文字 | 空值;
    boxSizing: 文字 | 空值;
    breakAfter: 文字 | 空值;
    breakBefore: 文字 | 空值;
    breakInside: 文字 | 空值;
    captionSide: 文字 | 空值;
    clear: 文字 | 空值;
    clip: 文字 | 空值;
    clipPath: 文字 | 空值;
    clipRule: 文字 | 空值;
    color: 文字 | 空值;
    colorInterpolationFilters: 文字 | 空值;
    columnCount: 任意;
    columnFill: 文字 | 空值;
    columnGap: 任意;
    columnRule: 文字 | 空值;
    columnRuleColor: 任意;
    columnRuleStyle: 文字 | 空值;
    columnRuleWidth: 任意;
    columnSpan: 文字 | 空值;
    columnWidth: 任意;
    columns: 文字 | 空值;
    content: 文字 | 空值;
    counterIncrement: 文字 | 空值;
    counterReset: 文字 | 空值;
    cssFloat: 文字 | 空值;
    cssText: 文字;
    cursor: 文字 | 空值;
    direction: 文字 | 空值;
    display: 文字 | 空值;
    dominantBaseline: 文字 | 空值;
    emptyCells: 文字 | 空值;
    enableBackground: 文字 | 空值;
    fill: 文字 | 空值;
    fillOpacity: 文字 | 空值;
    fillRule: 文字 | 空值;
    filter: 文字 | 空值;
    flex: 文字 | 空值;
    flexBasis: 文字 | 空值;
    flexDirection: 文字 | 空值;
    flexFlow: 文字 | 空值;
    flexGrow: 文字 | 空值;
    flexShrink: 文字 | 空值;
    flexWrap: 文字 | 空值;
    floodColor: 文字 | 空值;
    floodOpacity: 文字 | 空值;
    font: 文字 | 空值;
    fontFamily: 文字 | 空值;
    fontFeatureSettings: 文字 | 空值;
    fontSize: 文字 | 空值;
    fontSizeAdjust: 文字 | 空值;
    fontStretch: 文字 | 空值;
    fontStyle: 文字 | 空值;
    fontVariant: 文字 | 空值;
    fontWeight: 文字 | 空值;
    gap: 文字 | 空值;
    glyphOrientationHorizontal: 文字 | 空值;
    glyphOrientationVertical: 文字 | 空值;
    grid: 文字 | 空值;
    gridArea: 文字 | 空值;
    gridAutoColumns: 文字 | 空值;
    gridAutoFlow: 文字 | 空值;
    gridAutoRows: 文字 | 空值;
    gridColumn: 文字 | 空值;
    gridColumnEnd: 文字 | 空值;
    gridColumnGap: 文字 | 空值;
    gridColumnStart: 文字 | 空值;
    gridGap: 文字 | 空值;
    gridRow: 文字 | 空值;
    gridRowEnd: 文字 | 空值;
    gridRowGap: 文字 | 空值;
    gridRowStart: 文字 | 空值;
    gridTemplate: 文字 | 空值;
    gridTemplateAreas: 文字 | 空值;
    gridTemplateColumns: 文字 | 空值;
    gridTemplateRows: 文字 | 空值;
    height: 文字 | 空值;
    imeMode: 文字 | 空值;
    justifyContent: 文字 | 空值;
    justifyItems: 文字 | 空值;
    justifySelf: 文字 | 空值;
    kerning: 文字 | 空值;
    layoutGrid: 文字 | 空值;
    layoutGridChar: 文字 | 空值;
    layoutGridLine: 文字 | 空值;
    layoutGridMode: 文字 | 空值;
    layoutGridType: 文字 | 空值;
    left: 文字 | 空值;
    只读 length: 数字;
    letterSpacing: 文字 | 空值;
    lightingColor: 文字 | 空值;
    lineBreak: 文字 | 空值;
    lineHeight: 文字 | 空值;
    listStyle: 文字 | 空值;
    listStyleImage: 文字 | 空值;
    listStylePosition: 文字 | 空值;
    listStyleType: 文字 | 空值;
    margin: 文字 | 空值;
    marginBottom: 文字 | 空值;
    marginLeft: 文字 | 空值;
    marginRight: 文字 | 空值;
    marginTop: 文字 | 空值;
    marker: 文字 | 空值;
    markerEnd: 文字 | 空值;
    markerMid: 文字 | 空值;
    markerStart: 文字 | 空值;
    mask: 文字 | 空值;
    maskImage: 文字 | 空值;
    maxHeight: 文字 | 空值;
    maxWidth: 文字 | 空值;
    minHeight: 文字 | 空值;
    minWidth: 文字 | 空值;
    msContentZoomChaining: 文字 | 空值;
    msContentZoomLimit: 文字 | 空值;
    msContentZoomLimitMax: 任意;
    msContentZoomLimitMin: 任意;
    msContentZoomSnap: 文字 | 空值;
    msContentZoomSnapPoints: 文字 | 空值;
    msContentZoomSnapType: 文字 | 空值;
    msContentZooming: 文字 | 空值;
    msFlowFrom: 文字 | 空值;
    msFlowInto: 文字 | 空值;
    msFontFeatureSettings: 文字 | 空值;
    msGridColumn: 任意;
    msGridColumnAlign: 文字 | 空值;
    msGridColumnSpan: 任意;
    msGridColumns: 文字 | 空值;
    msGridRow: 任意;
    msGridRowAlign: 文字 | 空值;
    msGridRowSpan: 任意;
    msGridRows: 文字 | 空值;
    msHighContrastAdjust: 文字 | 空值;
    msHyphenateLimitChars: 文字 | 空值;
    msHyphenateLimitLines: 任意;
    msHyphenateLimitZone: 任意;
    msHyphens: 文字 | 空值;
    msImeAlign: 文字 | 空值;
    msOverflowStyle: 文字 | 空值;
    msScrollChaining: 文字 | 空值;
    msScrollLimit: 文字 | 空值;
    msScrollLimitXMax: 任意;
    msScrollLimitXMin: 任意;
    msScrollLimitYMax: 任意;
    msScrollLimitYMin: 任意;
    msScrollRails: 文字 | 空值;
    msScrollSnapPointsX: 文字 | 空值;
    msScrollSnapPointsY: 文字 | 空值;
    msScrollSnapType: 文字 | 空值;
    msScrollSnapX: 文字 | 空值;
    msScrollSnapY: 文字 | 空值;
    msScrollTranslation: 文字 | 空值;
    msTextCombineHorizontal: 文字 | 空值;
    msTextSizeAdjust: 任意;
    msTouchAction: 文字 | 空值;
    msTouchSelect: 文字 | 空值;
    msUserSelect: 文字 | 空值;
    msWrapFlow: 文字;
    msWrapMargin: 任意;
    msWrapThrough: 文字;
    objectFit: 文字 | 空值;
    objectPosition: 文字 | 空值;
    opacity: 文字 | 空值;
    order: 文字 | 空值;
    orphans: 文字 | 空值;
    outline: 文字 | 空值;
    outlineColor: 文字 | 空值;
    outlineOffset: 文字 | 空值;
    outlineStyle: 文字 | 空值;
    outlineWidth: 文字 | 空值;
    overflow: 文字 | 空值;
    overflowX: 文字 | 空值;
    overflowY: 文字 | 空值;
    padding: 文字 | 空值;
    paddingBottom: 文字 | 空值;
    paddingLeft: 文字 | 空值;
    paddingRight: 文字 | 空值;
    paddingTop: 文字 | 空值;
    pageBreakAfter: 文字 | 空值;
    pageBreakBefore: 文字 | 空值;
    pageBreakInside: 文字 | 空值;
    只读 parentRule: CSSRule;
    penAction: 文字 | 空值;
    perspective: 文字 | 空值;
    perspectiveOrigin: 文字 | 空值;
    pointerEvents: 文字 | 空值;
    position: 文字 | 空值;
    quotes: 文字 | 空值;
    resize: 文字 | 空值;
    right: 文字 | 空值;
    rotate: 文字 | 空值;
    rowGap: 文字 | 空值;
    rubyAlign: 文字 | 空值;
    rubyOverhang: 文字 | 空值;
    rubyPosition: 文字 | 空值;
    scale: 文字 | 空值;
    stopColor: 文字 | 空值;
    stopOpacity: 文字 | 空值;
    stroke: 文字 | 空值;
    strokeDasharray: 文字 | 空值;
    strokeDashoffset: 文字 | 空值;
    strokeLinecap: 文字 | 空值;
    strokeLinejoin: 文字 | 空值;
    strokeMiterlimit: 文字 | 空值;
    strokeOpacity: 文字 | 空值;
    strokeWidth: 文字 | 空值;
    tableLayout: 文字 | 空值;
    textAlign: 文字 | 空值;
    textAlignLast: 文字 | 空值;
    textAnchor: 文字 | 空值;
    textCombineUpright: 文字 | 空值;
    textDecoration: 文字 | 空值;
    textIndent: 文字 | 空值;
    textJustify: 文字 | 空值;
    textKashida: 文字 | 空值;
    textKashidaSpace: 文字 | 空值;
    textOverflow: 文字 | 空值;
    textShadow: 文字 | 空值;
    textTransform: 文字 | 空值;
    textUnderlinePosition: 文字 | 空值;
    top: 文字 | 空值;
    touchAction: 文字 | 空值;
    transform: 文字 | 空值;
    transformOrigin: 文字 | 空值;
    transformStyle: 文字 | 空值;
    transition: 文字 | 空值;
    transitionDelay: 文字 | 空值;
    transitionDuration: 文字 | 空值;
    transitionProperty: 文字 | 空值;
    transitionTimingFunction: 文字 | 空值;
    translate: 文字 | 空值;
    unicodeBidi: 文字 | 空值;
    userSelect: 文字 | 空值;
    verticalAlign: 文字 | 空值;
    visibility: 文字 | 空值;
    webkitAlignContent: 文字 | 空值;
    webkitAlignItems: 文字 | 空值;
    webkitAlignSelf: 文字 | 空值;
    webkitAnimation: 文字 | 空值;
    webkitAnimationDelay: 文字 | 空值;
    webkitAnimationDirection: 文字 | 空值;
    webkitAnimationDuration: 文字 | 空值;
    webkitAnimationFillMode: 文字 | 空值;
    webkitAnimationIterationCount: 文字 | 空值;
    webkitAnimationName: 文字 | 空值;
    webkitAnimationPlayState: 文字 | 空值;
    webkitAnimationTimingFunction: 文字 | 空值;
    webkitAppearance: 文字 | 空值;
    webkitBackfaceVisibility: 文字 | 空值;
    webkitBackgroundClip: 文字 | 空值;
    webkitBackgroundOrigin: 文字 | 空值;
    webkitBackgroundSize: 文字 | 空值;
    webkitBorderBottomLeftRadius: 文字 | 空值;
    webkitBorderBottomRightRadius: 文字 | 空值;
    webkitBorderImage: 文字 | 空值;
    webkitBorderRadius: 文字 | 空值;
    webkitBorderTopLeftRadius: 文字 | 空值;
    webkitBorderTopRightRadius: 文字 | 空值;
    webkitBoxAlign: 文字 | 空值;
    webkitBoxDirection: 文字 | 空值;
    webkitBoxFlex: 文字 | 空值;
    webkitBoxOrdinalGroup: 文字 | 空值;
    webkitBoxOrient: 文字 | 空值;
    webkitBoxPack: 文字 | 空值;
    webkitBoxSizing: 文字 | 空值;
    webkitColumnBreakAfter: 文字 | 空值;
    webkitColumnBreakBefore: 文字 | 空值;
    webkitColumnBreakInside: 文字 | 空值;
    webkitColumnCount: 任意;
    webkitColumnGap: 任意;
    webkitColumnRule: 文字 | 空值;
    webkitColumnRuleColor: 任意;
    webkitColumnRuleStyle: 文字 | 空值;
    webkitColumnRuleWidth: 任意;
    webkitColumnSpan: 文字 | 空值;
    webkitColumnWidth: 任意;
    webkitColumns: 文字 | 空值;
    webkitFilter: 文字 | 空值;
    webkitFlex: 文字 | 空值;
    webkitFlexBasis: 文字 | 空值;
    webkitFlexDirection: 文字 | 空值;
    webkitFlexFlow: 文字 | 空值;
    webkitFlexGrow: 文字 | 空值;
    webkitFlexShrink: 文字 | 空值;
    webkitFlexWrap: 文字 | 空值;
    webkitJustifyContent: 文字 | 空值;
    webkitOrder: 文字 | 空值;
    webkitPerspective: 文字 | 空值;
    webkitPerspectiveOrigin: 文字 | 空值;
    webkitTapHighlightColor: 文字 | 空值;
    webkitTextFillColor: 文字 | 空值;
    webkitTextSizeAdjust: 任意;
    webkitTextStroke: 文字 | 空值;
    webkitTextStrokeColor: 文字 | 空值;
    webkitTextStrokeWidth: 文字 | 空值;
    webkitTransform: 文字 | 空值;
    webkitTransformOrigin: 文字 | 空值;
    webkitTransformStyle: 文字 | 空值;
    webkitTransition: 文字 | 空值;
    webkitTransitionDelay: 文字 | 空值;
    webkitTransitionDuration: 文字 | 空值;
    webkitTransitionProperty: 文字 | 空值;
    webkitTransitionTimingFunction: 文字 | 空值;
    webkitUserModify: 文字 | 空值;
    webkitUserSelect: 文字 | 空值;
    webkitWritingMode: 文字 | 空值;
    whiteSpace: 文字 | 空值;
    widows: 文字 | 空值;
    width: 文字 | 空值;
    wordBreak: 文字 | 空值;
    wordSpacing: 文字 | 空值;
    wordWrap: 文字 | 空值;
    writingMode: 文字 | 空值;
    zIndex: 文字 | 空值;
    zoom: 文字 | 空值;
    getPropertyPriority(propertyName: 文字): 文字;
    getPropertyValue(propertyName: 文字): 文字;
    item(index: 数字): 文字;
    removeProperty(propertyName: 文字): 文字;
    setProperty(propertyName: 文字, value: 文字 | 空值, priority?: 文字 | 空值): 无值;
    [index: 数字]: 文字;

}
声明 值量 CSSStyleDeclaration: {
    prototype: CSSStyleDeclaration;
    新建(): CSSStyleDeclaration;

};
接口 CSSStyleRule 扩展 CSSRule {
    selectorText: 文字;
    只读 style: CSSStyleDeclaration;

}
声明 值量 CSSStyleRule: {
    prototype: CSSStyleRule;
    新建(): CSSStyleRule;

};
接口 CSSStyleSheet 扩展 StyleSheet {
    只读 cssRules: CSSRuleList;

    /** @deprecated */
    cssText: 文字;

    /** @deprecated */
    只读 id: 文字;

    /** @deprecated */
    只读 imports: StyleSheetList;

    /** @deprecated */
    只读 isAlternate: 真假;

    /** @deprecated */
    只读 isPrefAlternate: 真假;
    只读 ownerRule: CSSRule | 空值;

    /** @deprecated */
    只读 owningElement: Element;

    /** @deprecated */
    只读 pages: 任意;

    /** @deprecated */
    只读 readOnly: 真假;
    只读 rules: CSSRuleList;

    /** @deprecated */
    addImport(bstrURL: 文字, lIndex?: 数字): 数字;

    /** @deprecated */
    addPageRule(bstrSelector: 文字, bstrStyle: 文字, lIndex?: 数字): 数字;
    addRule(bstrSelector: 文字, bstrStyle?: 文字, lIndex?: 数字): 数字;
    deleteRule(index?: 数字): 无值;
    insertRule(rule: 文字, index?: 数字): 数字;

    /** @deprecated */
    removeImport(lIndex: 数字): 无值;
    removeRule(lIndex: 数字): 无值;

}
声明 值量 CSSStyleSheet: {
    prototype: CSSStyleSheet;
    新建(): CSSStyleSheet;

};
接口 CSSSupportsRule 扩展 CSSConditionRule {

}
声明 值量 CSSSupportsRule: {
    prototype: CSSSupportsRule;
    新建(): CSSSupportsRule;

};
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
接口 Canvas2DContextAttributes {
    alpha?: 真假;
    storage?: 真假;
    willReadFrequently?: 真假;
    [attribute: 文字]: 真假 | 文字 | 未定;

}
接口 CanvasGradient {
    addColorStop(offset: 数字, color: 文字): 无值;

}
声明 值量 CanvasGradient: {
    prototype: CanvasGradient;
    新建(): CanvasGradient;

};
接口 CanvasPathMethods {
    arc(x: 数字, y: 数字, radius: 数字, startAngle: 数字, endAngle: 数字, anticlockwise?: 真假): 无值;
    arcTo(x1: 数字, y1: 数字, x2: 数字, y2: 数字, radius: 数字): 无值;
    arcTo(x1: 数字, y1: 数字, x2: 数字, y2: 数字, radiusX: 数字, radiusY: 数字, rotation: 数字): 无值;
    bezierCurveTo(cp1x: 数字, cp1y: 数字, cp2x: 数字, cp2y: 数字, x: 数字, y: 数字): 无值;
    closePath(): 无值;
    ellipse(x: 数字, y: 数字, radiusX: 数字, radiusY: 数字, rotation: 数字, startAngle: 数字, endAngle: 数字, anticlockwise?: 真假): 无值;
    lineTo(x: 数字, y: 数字): 无值;
    moveTo(x: 数字, y: 数字): 无值;
    quadraticCurveTo(cpx: 数字, cpy: 数字, x: 数字, y: 数字): 无值;
    rect(x: 数字, y: 数字, w: 数字, h: 数字): 无值;

}
接口 CanvasPattern {
    setTransform(matrix: SVGMatrix): 无值;

}
声明 值量 CanvasPattern: {
    prototype: CanvasPattern;
    新建(): CanvasPattern;

};
接口 CanvasRenderingContext2D 扩展 CanvasPathMethods {
    只读 canvas: HTMLCanvasElement;
    fillStyle: 文字 | CanvasGradient | CanvasPattern;
    font: 文字;
    globalAlpha: 数字;
    globalCompositeOperation: 文字;
    imageSmoothingEnabled: 真假;
    lineCap: 文字;
    lineDashOffset: 数字;
    lineJoin: 文字;
    lineWidth: 数字;
    miterLimit: 数字;
    mozImageSmoothingEnabled: 真假;
    msFillRule: CanvasFillRule;
    oImageSmoothingEnabled: 真假;
    shadowBlur: 数字;
    shadowColor: 文字;
    shadowOffsetX: 数字;
    shadowOffsetY: 数字;
    strokeStyle: 文字 | CanvasGradient | CanvasPattern;
    textAlign: 文字;
    textBaseline: 文字;
    webkitImageSmoothingEnabled: 真假;
    beginPath(): 无值;
    clearRect(x: 数字, y: 数字, w: 数字, h: 数字): 无值;
    clip(fillRule?: CanvasFillRule): 无值;
    clip(path: Path2D, fillRule?: CanvasFillRule): 无值;
    createImageData(imageDataOrSw: 数字 | ImageData, sh?: 数字): ImageData;
    createLinearGradient(x0: 数字, y0: 数字, x1: 数字, y1: 数字): CanvasGradient;
    createPattern(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, repetition: 文字): CanvasPattern;
    createRadialGradient(x0: 数字, y0: 数字, r0: 数字, x1: 数字, y1: 数字, r1: 数字): CanvasGradient;
    drawFocusIfNeeded(element: Element): 无值;
    drawFocusIfNeeded(path: Path2D, element: Element): 无值;
    drawImage(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap, dstX: 数字, dstY: 数字): 无值;
    drawImage(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap, dstX: 数字, dstY: 数字, dstW: 数字, dstH: 数字): 无值;
    drawImage(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap, srcX: 数字, srcY: 数字, srcW: 数字, srcH: 数字, dstX: 数字, dstY: 数字, dstW: 数字, dstH: 数字): 无值;
    fill(fillRule?: CanvasFillRule): 无值;
    fill(path: Path2D, fillRule?: CanvasFillRule): 无值;
    fillRect(x: 数字, y: 数字, w: 数字, h: 数字): 无值;
    fillText(text: 文字, x: 数字, y: 数字, maxWidth?: 数字): 无值;
    getImageData(sx: 数字, sy: 数字, sw: 数字, sh: 数字): ImageData;
    getLineDash(): 数字[];
    isPointInPath(x: 数字, y: 数字, fillRule?: CanvasFillRule): 真假;
    isPointInPath(path: Path2D, x: 数字, y: 数字, fillRule?: CanvasFillRule): 真假;
    isPointInStroke(x: 数字, y: 数字, fillRule?: CanvasFillRule): 真假;
    isPointInStroke(path: Path2D, x: 数字, y: 数字, fillRule?: CanvasFillRule): 真假;
    measureText(text: 文字): TextMetrics;
    putImageData(imagedata: ImageData, dx: 数字, dy: 数字, dirtyX?: 数字, dirtyY?: 数字, dirtyWidth?: 数字, dirtyHeight?: 数字): 无值;
    restore(): 无值;
    rotate(angle: 数字): 无值;
    save(): 无值;
    scale(x: 数字, y: 数字): 无值;
    setLineDash(segments: 数字[]): 无值;
    setTransform(m11: 数字, m12: 数字, m21: 数字, m22: 数字, dx: 数字, dy: 数字): 无值;
    stroke(path?: Path2D): 无值;
    strokeRect(x: 数字, y: 数字, w: 数字, h: 数字): 无值;
    strokeText(text: 文字, x: 数字, y: 数字, maxWidth?: 数字): 无值;
    transform(m11: 数字, m12: 数字, m21: 数字, m22: 数字, dx: 数字, dy: 数字): 无值;
    translate(x: 数字, y: 数字): 无值;

}
声明 值量 CanvasRenderingContext2D: {
    prototype: CanvasRenderingContext2D;
    新建(): CanvasRenderingContext2D;

};
接口 ChannelMergerNode 扩展 AudioNode {

}
声明 值量 ChannelMergerNode: {
    prototype: ChannelMergerNode;
    新建(): ChannelMergerNode;

};
接口 ChannelSplitterNode 扩展 AudioNode {

}
声明 值量 ChannelSplitterNode: {
    prototype: ChannelSplitterNode;
    新建(): ChannelSplitterNode;

};
接口 CharacterData 扩展 Node, ChildNode {
    data: 文字;
    只读 length: 数字;
    appendData(arg: 文字): 无值;
    deleteData(offset: 数字, count: 数字): 无值;
    insertData(offset: 数字, arg: 文字): 无值;
    replaceData(offset: 数字, count: 数字, arg: 文字): 无值;
    substringData(offset: 数字, count: 数字): 文字;

}
声明 值量 CharacterData: {
    prototype: CharacterData;
    新建(): CharacterData;

};
接口 ChildNode {
    remove(): 无值;

}
接口 ClientRect {
    bottom: 数字;
    只读 height: 数字;
    left: 数字;
    right: 数字;
    top: 数字;
    只读 width: 数字;

}
声明 值量 ClientRect: {
    prototype: ClientRect;
    新建(): ClientRect;

};
接口 ClientRectList {
    只读 length: 数字;
    item(index: 数字): ClientRect;
    [index: 数字]: ClientRect;

}
声明 值量 ClientRectList: {
    prototype: ClientRectList;
    新建(): ClientRectList;

};
接口 ClipboardEvent 扩展 Event {
    只读 clipboardData: DataTransfer;

}
声明 值量 ClipboardEvent: {
    prototype: ClipboardEvent;
    新建(type: 文字, eventInitDict?: ClipboardEventInit): ClipboardEvent;

};
接口 ClipboardEventInit 扩展 EventInit {
    data?: 文字;
    dataType?: 文字;

}
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
接口 Comment 扩展 CharacterData {
    text: 文字;

}
声明 值量 Comment: {
    prototype: Comment;
    新建(data?: 文字): Comment;

};
接口 CompositionEvent 扩展 UIEvent {
    只读 data: 文字;
    只读 locale: 文字;
    initCompositionEvent(typeArg: 文字, canBubbleArg: 真假, cancelableArg: 真假, viewArg: Window, dataArg: 文字, locale: 文字): 无值;

}
声明 值量 CompositionEvent: {
    prototype: CompositionEvent;
    新建(typeArg: 文字, eventInitDict?: CompositionEventInit): CompositionEvent;

};
接口 ComputedTimingProperties {
    activeDuration: 数字;
    currentIteration: 数字 | 空值;
    endTime: 数字;
    localTime: 数字 | 空值;
    progress: 数字 | 空值;

}
接口 ConcatParams 扩展 Algorithm {
    //@@{ 正整数数组8_:Uint8Array }
    algorithmId: 正整数数组8_;
    hash?: 文字 | Algorithm;
    //@@{ 正整数数组8_:Uint8Array }
    partyUInfo: 正整数数组8_;
    //@@{ 正整数数组8_:Uint8Array }
    partyVInfo: 正整数数组8_;
    //@@{ 正整数数组8_:Uint8Array }
    privateInfo?: 正整数数组8_;
    //@@{ 正整数数组8_:Uint8Array }
    publicInfo?: 正整数数组8_;

}
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
    msIsIndependentlyComposed(element: Element): 真假;
    profile(reportName?: 文字): 无值;
    profileEnd(): 无值;
    select(element: Element): 无值;
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
接口 ContentScriptGlobalScope 扩展 EventTarget {
    只读 msContentScript: ExtensionScriptApis;
    只读 window: Window;

}
声明 值量 ContentScriptGlobalScope: {
    prototype: ContentScriptGlobalScope;
    新建(): ContentScriptGlobalScope;

};
接口 ConvolverNode 扩展 AudioNode {
    buffer: AudioBuffer | 空值;
    normalize: 真假;

}
声明 值量 ConvolverNode: {
    prototype: ConvolverNode;
    新建(): ConvolverNode;

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
接口 CountQueuingStrategy {
    highWaterMark: 数字;
    size(): 数字;

}
声明 值量 CountQueuingStrategy: {
    prototype: CountQueuingStrategy;
    新建(strategy: QueuingStrategy): CountQueuingStrategy;

};
接口 Crypto {
    只读 subtle: SubtleCrypto;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView }
    getRandomValues(array: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 空值): 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 空值;

}
声明 值量 Crypto: {
    prototype: Crypto;
    新建(): Crypto;

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
接口 CryptoKeyPair {
    privateKey: CryptoKey;
    publicKey: CryptoKey;

}
声明 值量 CryptoKeyPair: {
    prototype: CryptoKeyPair;
    新建(): CryptoKeyPair;

};
接口 CustomElementRegistry {
    //@@{ 函数_:Function }
    define(name: 文字, constructor: 函数_, options?: ElementDefinitionOptions): 无值;
    get(name: 文字): 任意;
    //@@{ 预设等_:PromiseLike }
    whenDefined(name: 文字): 预设等_<无值>;

}
接口 CustomEvent<T = 任意> 扩展 Event {
    只读 detail: T;
    initCustomEvent(typeArg: 文字, canBubbleArg: 真假, cancelableArg: 真假, detailArg: T): 无值;

}
声明 值量 CustomEvent: {
    prototype: CustomEvent;
    新建<T>(typeArg: 文字, eventInitDict?: CustomEventInit<T>): CustomEvent<T>;

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
接口 DOMImplementation {
    createDocument(namespaceURI: 文字 | 空值, qualifiedName: 文字 | 空值, doctype: DocumentType | 空值): Document;
    createDocumentType(qualifiedName: 文字, publicId: 文字, systemId: 文字): DocumentType;
    createHTMLDocument(title?: 文字): Document;
    hasFeature(feature: 文字 | 空值, version: 文字 | 空值): 真假;

}
声明 值量 DOMImplementation: {
    prototype: DOMImplementation;
    新建(): DOMImplementation;

};
接口 DOML2DeprecatedColorProperty {
    color: 文字;

}
接口 DOML2DeprecatedSizeProperty {
    size: 数字;

}
接口 DOMParser {
    parseFromString(source: 文字, mimeType: 文字): Document;

}
声明 值量 DOMParser: {
    prototype: DOMParser;
    新建(): DOMParser;

};
接口 DOMRect 扩展 DOMRectReadOnly {
    height: 数字;
    width: 数字;
    x: 数字;
    y: 数字;

}
声明 值量 DOMRect: {
    prototype: DOMRect;
    新建 (x?: 数字, y?: 数字, width?: 数字, height?: 数字): DOMRect;
    fromRect(rectangle?: DOMRectInit): DOMRect;

};
接口 DOMRectList {
    只读 length: 数字;
    item(index: 数字): DOMRect | 空值;
    [index: 数字]: DOMRect;

}
接口 DOMRectReadOnly {
    只读 bottom: 数字;
    只读 height: 数字;
    只读 left: 数字;
    只读 right: 数字;
    只读 top: 数字;
    只读 width: 数字;
    只读 x: 数字;
    只读 y: 数字;

}
声明 值量 DOMRectReadOnly: {
    prototype: DOMRectReadOnly;
    新建 (x?: 数字, y?: 数字, width?: 数字, height?: 数字): DOMRectReadOnly;
    fromRect(rectangle?: DOMRectInit): DOMRectReadOnly;

};
接口 DOMSettableTokenList 扩展 DOMTokenList {
    value: 文字;

}
声明 值量 DOMSettableTokenList: {
    prototype: DOMSettableTokenList;
    新建(): DOMSettableTokenList;

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
接口 DOMStringMap {
    [name: 文字]: 文字 | 未定;

}
声明 值量 DOMStringMap: {
    prototype: DOMStringMap;
    新建(): DOMStringMap;

};
接口 DOMTokenList {
    只读 length: 数字;
    add(...tokens: 文字[]): 无值;
    contains(token: 文字): 真假;
    item(index: 数字): 文字 | 空值;
    remove(...tokens: 文字[]): 无值;
    replace(oldToken: 文字, newToken: 文字): 无值;
    toString(): 文字;
    toggle(token: 文字, force?: 真假): 真假;
    [index: 数字]: 文字;

}
声明 值量 DOMTokenList: {
    prototype: DOMTokenList;
    新建(): DOMTokenList;

};
接口 DataCue 扩展 TextTrackCue {
    //@@{ 数组缓冲区_:ArrayBuffer }
    data: 数组缓冲区_;
    addEventListener<K 扩展 键为 TextTrackCueEventMap>(type: K, listener: (this: DataCue, ev: TextTrackCueEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 TextTrackCueEventMap>(type: K, listener: (this: DataCue, ev: TextTrackCueEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 DataCue: {
    prototype: DataCue;
    新建(): DataCue;

};
接口 DataTransfer {
    dropEffect: 文字;
    effectAllowed: 文字;
    只读 files: FileList;
    只读 items: DataTransferItemList;
    只读 types: 文字[];
    clearData(format?: 文字): 真假;
    getData(format: 文字): 文字;
    setData(format: 文字, data: 文字): 真假;
    setDragImage(image: Element, x: 数字, y: 数字): 无值;

}
声明 值量 DataTransfer: {
    prototype: DataTransfer;
    新建(): DataTransfer;

};
接口 DataTransferItem {
    只读 kind: 文字;
    只读 type: 文字;
    getAsFile(): File | 空值;
    getAsString(_callback: FunctionStringCallback | 空值): 无值;
    webkitGetAsEntry(): 任意;

}
声明 值量 DataTransferItem: {
    prototype: DataTransferItem;
    新建(): DataTransferItem;

};
接口 DataTransferItemList {
    只读 length: 数字;
    add(data: File): DataTransferItem | 空值;
    add(data: 文字, type: 文字): DataTransferItem | 空值;
    clear(): 无值;
    item(index: 数字): DataTransferItem;
    remove(index: 数字): 无值;
    [name: 数字]: DataTransferItem;

}
声明 值量 DataTransferItemList: {
    prototype: DataTransferItemList;
    新建(): DataTransferItemList;

};
接口 DeferredPermissionRequest {
    只读 id: 数字;
    只读 type: MSWebViewPermissionType;
    只读 uri: 文字;
    allow(): 无值;
    deny(): 无值;

}
声明 值量 DeferredPermissionRequest: {
    prototype: DeferredPermissionRequest;
    新建(): DeferredPermissionRequest;

};
接口 DelayNode 扩展 AudioNode {
    只读 delayTime: AudioParam;

}
声明 值量 DelayNode: {
    prototype: DelayNode;
    新建(): DelayNode;

};
接口 DeviceAcceleration {
    只读 x: 数字 | 空值;
    只读 y: 数字 | 空值;
    只读 z: 数字 | 空值;

}
声明 值量 DeviceAcceleration: {
    prototype: DeviceAcceleration;
    新建(): DeviceAcceleration;

};
接口 DeviceLightEvent 扩展 Event {
    只读 value: 数字;

}
声明 值量 DeviceLightEvent: {
    prototype: DeviceLightEvent;
    新建(typeArg: 文字, eventInitDict?: DeviceLightEventInit): DeviceLightEvent;

};
接口 DeviceMotionEvent 扩展 Event {
    只读 acceleration: DeviceAcceleration | 空值;
    只读 accelerationIncludingGravity: DeviceAcceleration | 空值;
    只读 interval: 数字 | 空值;
    只读 rotationRate: DeviceRotationRate | 空值;
    initDeviceMotionEvent(type: 文字, bubbles: 真假, cancelable: 真假, acceleration: DeviceAccelerationDict | 空值, accelerationIncludingGravity: DeviceAccelerationDict | 空值, rotationRate: DeviceRotationRateDict | 空值, interval: 数字 | 空值): 无值;

}
声明 值量 DeviceMotionEvent: {
    prototype: DeviceMotionEvent;
    新建(typeArg: 文字, eventInitDict?: DeviceMotionEventInit): DeviceMotionEvent;

};
接口 DeviceOrientationEvent 扩展 Event {
    只读 absolute: 真假;
    只读 alpha: 数字 | 空值;
    只读 beta: 数字 | 空值;
    只读 gamma: 数字 | 空值;
    initDeviceOrientationEvent(type: 文字, bubbles: 真假, cancelable: 真假, alpha: 数字 | 空值, beta: 数字 | 空值, gamma: 数字 | 空值, absolute: 真假): 无值;

}
声明 值量 DeviceOrientationEvent: {
    prototype: DeviceOrientationEvent;
    新建(typeArg: 文字, eventInitDict?: DeviceOrientationEventInit): DeviceOrientationEvent;

};
接口 DeviceRotationRate {
    只读 alpha: 数字 | 空值;
    只读 beta: 数字 | 空值;
    只读 gamma: 数字 | 空值;

}
声明 值量 DeviceRotationRate: {
    prototype: DeviceRotationRate;
    新建(): DeviceRotationRate;

};
接口 DhImportKeyParams 扩展 Algorithm {
    //@@{ 正整数数组8_:Uint8Array }
    generator: 正整数数组8_;
    //@@{ 正整数数组8_:Uint8Array }
    prime: 正整数数组8_;

}
接口 DhKeyAlgorithm 扩展 KeyAlgorithm {
    //@@{ 正整数数组8_:Uint8Array }
    generator: 正整数数组8_;
    //@@{ 正整数数组8_:Uint8Array }
    prime: 正整数数组8_;

}
接口 DhKeyDeriveParams 扩展 Algorithm {
    public: CryptoKey;

}
接口 DhKeyGenParams 扩展 Algorithm {
    //@@{ 正整数数组8_:Uint8Array }
    generator: 正整数数组8_;
    //@@{ 正整数数组8_:Uint8Array }
    prime: 正整数数组8_;

}
接口 DocumentEventMap 扩展 GlobalEventHandlersEventMap {
    "abort": UIEvent;
    "activate": Event;
    "beforeactivate": Event;
    "beforedeactivate": Event;
    "blur": FocusEvent;
    "canplay": Event;
    "canplaythrough": Event;
    "change": Event;
    "click": MouseEvent;
    "contextmenu": PointerEvent;
    "dblclick": MouseEvent;
    "deactivate": Event;
    "drag": DragEvent;
    "dragend": DragEvent;
    "dragenter": DragEvent;
    "dragleave": DragEvent;
    "dragover": DragEvent;
    "dragstart": DragEvent;
    "drop": DragEvent;
    "durationchange": Event;
    "emptied": Event;
    "ended": Event;
    "error": ErrorEvent;
    "focus": FocusEvent;
    "fullscreenchange": Event;
    "fullscreenerror": Event;
    "input": Event;
    "invalid": Event;
    "keydown": KeyboardEvent;
    "keypress": KeyboardEvent;
    "keyup": KeyboardEvent;
    "load": Event;
    "loadeddata": Event;
    "loadedmetadata": Event;
    "loadstart": Event;
    "mousedown": MouseEvent;
    "mousemove": MouseEvent;
    "mouseout": MouseEvent;
    "mouseover": MouseEvent;
    "mouseup": MouseEvent;
    "mousewheel": WheelEvent;
    "MSContentZoom": Event;
    "MSGestureChange": Event;
    "MSGestureDoubleTap": Event;
    "MSGestureEnd": Event;
    "MSGestureHold": Event;
    "MSGestureStart": Event;
    "MSGestureTap": Event;
    "MSInertiaStart": Event;
    "MSManipulationStateChanged": Event;
    "MSPointerCancel": Event;
    "MSPointerDown": Event;
    "MSPointerEnter": Event;
    "MSPointerLeave": Event;
    "MSPointerMove": Event;
    "MSPointerOut": Event;
    "MSPointerOver": Event;
    "MSPointerUp": Event;
    "mssitemodejumplistitemremoved": Event;
    "msthumbnailclick": Event;
    "pause": Event;
    "play": Event;
    "playing": Event;
    "pointerlockchange": Event;
    "pointerlockerror": Event;
    "progress": ProgressEvent;
    "ratechange": Event;
    "readystatechange": Event;
    "reset": Event;
    "scroll": UIEvent;
    "seeked": Event;
    "seeking": Event;
    "select": UIEvent;
    "selectionchange": Event;
    "selectstart": Event;
    "stalled": Event;
    "stop": Event;
    "submit": Event;
    "suspend": Event;
    "timeupdate": Event;
    "touchcancel": TouchEvent;
    "touchend": TouchEvent;
    "touchmove": TouchEvent;
    "touchstart": TouchEvent;
    "volumechange": Event;
    "waiting": Event;
    "webkitfullscreenchange": Event;
    "webkitfullscreenerror": Event;

}
接口 Document 扩展 Node, GlobalEventHandlers, ParentNode, DocumentEvent {

    /**
     * Sets or gets the URL for the current document.
     */
    只读 URL: 文字;

    /**
     * Gets the URL for the document, stripped of any character encoding.
     */
    只读 URLUnencoded: 文字;

    /**
     * Gets the object that has the focus when the parent document has focus.
     */
    只读 activeElement: Element;

    /**
     * Sets or gets the color of all active links in the document.
     */
    alinkColor: 文字;

    /**
     * Returns a reference to the collection of elements contained by the object.
     */
    只读 all: HTMLAllCollection;

    /**
     * Retrieves a collection of all a objects that have a name and/or id property. Objects in this collection are in HTML source order.
     */
    只读 anchors: HTMLCollectionOf<HTMLAnchorElement>;

    /**
     * Retrieves a collection of all applet objects in the document.
     */
    只读 applets: HTMLCollectionOf<HTMLAppletElement>;

    /**
     * Deprecated. Sets or retrieves a value that indicates the background color behind the object.
     */
    bgColor: 文字;

    /**
     * Specifies the beginning and end of the document body.
     */
    body: HTMLElement;
    只读 characterSet: 文字;

    /**
     * Gets or sets the character set used to encode the object.
     */
    charset: 文字;

    /**
     * Gets a value that indicates whether standards-compliant mode is switched on for the object.
     */
    只读 compatMode: 文字;
    cookie: 文字;
    只读 currentScript: HTMLScriptElement | SVGScriptElement | 空值;
    只读 defaultView: Window;

    /**
     * Sets or gets a value that indicates whether the document can be edited.
     */
    designMode: 文字;

    /**
     * Sets or retrieves a value that indicates the reading order of the object.
     */
    dir: 文字;

    /**
     * Gets an object representing the document type declaration associated with the current document.
     */
    只读 doctype: DocumentType;

    /**
     * Gets a reference to the root node of the document.
     */
    只读 documentElement: HTMLElement;

    /**
     * Sets or gets the security domain of the document.
     */
    domain: 文字;

    /**
     * Retrieves a collection of all embed objects in the document.
     */
    只读 embeds: HTMLCollectionOf<HTMLEmbedElement>;

    /**
     * Sets or gets the foreground (text) color of the document.
     */
    fgColor: 文字;

    /**
     * Retrieves a collection, in source order, of all form objects in the document.
     */
    只读 forms: HTMLCollectionOf<HTMLFormElement>;
    只读 fullscreenElement: Element | 空值;
    只读 fullscreenEnabled: 真假;
    只读 head: HTMLHeadElement;
    只读 hidden: 真假;

    /**
     * Retrieves a collection, in source order, of img objects in the document.
     */
    只读 images: HTMLCollectionOf<HTMLImageElement>;

    /**
     * Gets the implementation object of the current document.
     */
    只读 implementation: DOMImplementation;

    /**
     * Returns the character encoding used to create the webpage that is loaded into the document object.
     */
    只读 inputEncoding: 文字 | 空值;

    /**
     * Gets the date that the page was last modified, if the page supplies one.
     */
    只读 lastModified: 文字;

    /**
     * Sets or gets the color of the document links.
     */
    linkColor: 文字;

    /**
     * Retrieves a collection of all a objects that specify the href property and all area objects in the document.
     */
    只读 links: HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement>;

    /**
     * Contains information about the current URL.
     */
    location: Location;
    msCSSOMElementFloatMetrics: 真假;
    msCapsLockWarningOff: 真假;

    /**
     * Fires when the user aborts the download.
     * @param ev The event.
     */
    onabort: ((this: Document, ev: UIEvent) => 任意) | 空值;

    /**
     * Fires when the object is set as the active element.
     * @param ev The event.
     */
    onactivate: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Fires immediately before the object is set as the active element.
     * @param ev The event.
     */
    onbeforeactivate: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Fires immediately before the activeElement is changed from the current object to another object in the parent document.
     * @param ev The event.
     */
    onbeforedeactivate: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Fires when the object loses the input focus.
     * @param ev The focus event.
     */
    onblur: ((this: Document, ev: FocusEvent) => 任意) | 空值;

    /**
     * Occurs when playback is possible, but would require further buffering.
     * @param ev The event.
     */
    oncanplay: ((this: Document, ev: Event) => 任意) | 空值;
    oncanplaythrough: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Fires when the contents of the object or selection have changed.
     * @param ev The event.
     */
    onchange: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Fires when the user clicks the left mouse button on the object
     * @param ev The mouse event.
     */
    onclick: ((this: Document, ev: MouseEvent) => 任意) | 空值;

    /**
     * Fires when the user clicks the right mouse button in the client area, opening the context menu.
     * @param ev The mouse event.
     */
    oncontextmenu: ((this: Document, ev: PointerEvent) => 任意) | 空值;

    /**
     * Fires when the user double-clicks the object.
     * @param ev The mouse event.
     */
    ondblclick: ((this: Document, ev: MouseEvent) => 任意) | 空值;

    /**
     * Fires when the activeElement is changed from the current object to another object in the parent document.
     * @param ev The UI Event
     */
    ondeactivate: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Fires on the source object continuously during a drag operation.
     * @param ev The event.
     */
    ondrag: ((this: Document, ev: DragEvent) => 任意) | 空值;

    /**
     * Fires on the source object when the user releases the mouse at the close of a drag operation.
     * @param ev The event.
     */
    ondragend: ((this: Document, ev: DragEvent) => 任意) | 空值;

    /**
     * Fires on the target element when the user drags the object to a valid drop target.
     * @param ev The drag event.
     */
    ondragenter: ((this: Document, ev: DragEvent) => 任意) | 空值;

    /**
     * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
     * @param ev The drag event.
     */
    ondragleave: ((this: Document, ev: DragEvent) => 任意) | 空值;

    /**
     * Fires on the target element continuously while the user drags the object over a valid drop target.
     * @param ev The event.
     */
    ondragover: ((this: Document, ev: DragEvent) => 任意) | 空值;

    /**
     * Fires on the source object when the user starts to drag a text selection or selected object.
     * @param ev The event.
     */
    ondragstart: ((this: Document, ev: DragEvent) => 任意) | 空值;
    ondrop: ((this: Document, ev: DragEvent) => 任意) | 空值;

    /**
     * Occurs when the duration attribute is updated.
     * @param ev The event.
     */
    ondurationchange: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Occurs when the media element is reset to its initial state.
     * @param ev The event.
     */
    onemptied: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Occurs when the end of playback is reached.
     * @param ev The event
     */
    onended: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Fires when an error occurs during object loading.
     * @param ev The event.
     */
    onerror: ((this: Document, ev: ErrorEvent) => 任意) | 空值;

    /**
     * Fires when the object receives focus.
     * @param ev The event.
     */
    onfocus: ((this: Document, ev: FocusEvent) => 任意) | 空值;
    onfullscreenchange: ((this: Document, ev: Event) => 任意) | 空值;
    onfullscreenerror: ((this: Document, ev: Event) => 任意) | 空值;
    oninput: ((this: Document, ev: Event) => 任意) | 空值;
    oninvalid: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Fires when the user presses a key.
     * @param ev The keyboard event
     */
    onkeydown: ((this: Document, ev: KeyboardEvent) => 任意) | 空值;

    /**
     * Fires when the user presses an alphanumeric key.
     * @param ev The event.
     */
    onkeypress: ((this: Document, ev: KeyboardEvent) => 任意) | 空值;

    /**
     * Fires when the user releases a key.
     * @param ev The keyboard event
     */
    onkeyup: ((this: Document, ev: KeyboardEvent) => 任意) | 空值;

    /**
     * Fires immediately after the browser loads the object.
     * @param ev The event.
     */
    onload: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Occurs when media data is loaded at the current playback position.
     * @param ev The event.
     */
    onloadeddata: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Occurs when the duration and dimensions of the media have been determined.
     * @param ev The event.
     */
    onloadedmetadata: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Occurs when Internet Explorer begins looking for media data.
     * @param ev The event.
     */
    onloadstart: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Fires when the user clicks the object with either mouse button.
     * @param ev The mouse event.
     */
    onmousedown: ((this: Document, ev: MouseEvent) => 任意) | 空值;

    /**
     * Fires when the user moves the mouse over the object.
     * @param ev The mouse event.
     */
    onmousemove: ((this: Document, ev: MouseEvent) => 任意) | 空值;

    /**
     * Fires when the user moves the mouse pointer outside the boundaries of the object.
     * @param ev The mouse event.
     */
    onmouseout: ((this: Document, ev: MouseEvent) => 任意) | 空值;

    /**
     * Fires when the user moves the mouse pointer into the object.
     * @param ev The mouse event.
     */
    onmouseover: ((this: Document, ev: MouseEvent) => 任意) | 空值;

    /**
     * Fires when the user releases a mouse button while the mouse is over the object.
     * @param ev The mouse event.
     */
    onmouseup: ((this: Document, ev: MouseEvent) => 任意) | 空值;

    /**
     * Fires when the wheel button is rotated.
     * @param ev The mouse event
     */
    onmousewheel: ((this: Document, ev: WheelEvent) => 任意) | 空值;
    onmscontentzoom: ((this: Document, ev: Event) => 任意) | 空值;
    onmsgesturechange: ((this: Document, ev: Event) => 任意) | 空值;
    onmsgesturedoubletap: ((this: Document, ev: Event) => 任意) | 空值;
    onmsgestureend: ((this: Document, ev: Event) => 任意) | 空值;
    onmsgesturehold: ((this: Document, ev: Event) => 任意) | 空值;
    onmsgesturestart: ((this: Document, ev: Event) => 任意) | 空值;
    onmsgesturetap: ((this: Document, ev: Event) => 任意) | 空值;
    onmsinertiastart: ((this: Document, ev: Event) => 任意) | 空值;
    onmsmanipulationstatechanged: ((this: Document, ev: Event) => 任意) | 空值;
    onmspointercancel: ((this: Document, ev: Event) => 任意) | 空值;
    onmspointerdown: ((this: Document, ev: Event) => 任意) | 空值;
    onmspointerenter: ((this: Document, ev: Event) => 任意) | 空值;
    onmspointerleave: ((this: Document, ev: Event) => 任意) | 空值;
    onmspointermove: ((this: Document, ev: Event) => 任意) | 空值;
    onmspointerout: ((this: Document, ev: Event) => 任意) | 空值;
    onmspointerover: ((this: Document, ev: Event) => 任意) | 空值;
    onmspointerup: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Occurs when an item is removed from a Jump List of a webpage running in Site Mode.
     * @param ev The event.
     */
    onmssitemodejumplistitemremoved: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Occurs when a user clicks a button in a Thumbnail Toolbar of a webpage running in Site Mode.
     * @param ev The event.
     */
    onmsthumbnailclick: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Occurs when playback is paused.
     * @param ev The event.
     */
    onpause: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Occurs when the play method is requested.
     * @param ev The event.
     */
    onplay: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Occurs when the audio or video has started playing.
     * @param ev The event.
     */
    onplaying: ((this: Document, ev: Event) => 任意) | 空值;
    onpointerlockchange: ((this: Document, ev: Event) => 任意) | 空值;
    onpointerlockerror: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Occurs to indicate progress while downloading media data.
     * @param ev The event.
     */
    onprogress: ((this: Document, ev: ProgressEvent) => 任意) | 空值;

    /**
     * Occurs when the playback rate is increased or decreased.
     * @param ev The event.
     */
    onratechange: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Fires when the state of the object has changed.
     * @param ev The event
     */
    onreadystatechange: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Fires when the user resets a form.
     * @param ev The event.
     */
    onreset: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Fires when the user repositions the scroll box in the scroll bar on the object.
     * @param ev The event.
     */
    onscroll: ((this: Document, ev: UIEvent) => 任意) | 空值;

    /**
     * Occurs when the seek operation ends.
     * @param ev The event.
     */
    onseeked: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Occurs when the current playback position is moved.
     * @param ev The event.
     */
    onseeking: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Fires when the current selection changes.
     * @param ev The event.
     */
    onselect: ((this: Document, ev: UIEvent) => 任意) | 空值;

    /**
     * Fires when the selection state of a document changes.
     * @param ev The event.
     */
    onselectionchange: ((this: Document, ev: Event) => 任意) | 空值;
    onselectstart: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Occurs when the download has stopped.
     * @param ev The event.
     */
    onstalled: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Fires when the user clicks the Stop button or leaves the Web page.
     * @param ev The event.
     */
    onstop: ((this: Document, ev: Event) => 任意) | 空值;
    onsubmit: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Occurs if the load operation has been intentionally halted.
     * @param ev The event.
     */
    onsuspend: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Occurs to indicate the current playback position.
     * @param ev The event.
     */
    ontimeupdate: ((this: Document, ev: Event) => 任意) | 空值;
    ontouchcancel: ((this: Document, ev: TouchEvent) => 任意) | 空值;
    ontouchend: ((this: Document, ev: TouchEvent) => 任意) | 空值;
    ontouchmove: ((this: Document, ev: TouchEvent) => 任意) | 空值;
    ontouchstart: ((this: Document, ev: TouchEvent) => 任意) | 空值;
    onvisibilitychange: (this: Document, ev: Event) => 任意;

    /**
     * Occurs when the volume is changed, or playback is muted or unmuted.
     * @param ev The event.
     */
    onvolumechange: ((this: Document, ev: Event) => 任意) | 空值;

    /**
     * Occurs when playback stops because the next frame of a video resource is not available.
     * @param ev The event.
     */
    onwaiting: ((this: Document, ev: Event) => 任意) | 空值;
    onwebkitfullscreenchange: ((this: Document, ev: Event) => 任意) | 空值;
    onwebkitfullscreenerror: ((this: Document, ev: Event) => 任意) | 空值;
    只读 plugins: HTMLCollectionOf<HTMLEmbedElement>;
    只读 pointerLockElement: Element;

    /**
     * Retrieves a value that indicates the current state of the object.
     */
    只读 readyState: DocumentReadyState;

    /**
     * Gets the URL of the location that referred the user to the current page.
     */
    只读 referrer: 文字;

    /**
     * Gets the root svg element in the document hierarchy.
     */
    只读 rootElement: SVGSVGElement;

    /**
     * Retrieves a collection of all script objects in the document.
     */
    只读 scripts: HTMLCollectionOf<HTMLScriptElement>;
    只读 scrollingElement: Element | 空值;

    /**
     * Retrieves a collection of styleSheet objects representing the style sheets that correspond to each instance of a link or style object in the document.
     */
    只读 styleSheets: StyleSheetList;

    /**
     * Contains the title of the document.
     */
    title: 文字;
    只读 visibilityState: VisibilityState;

    /**
     * Sets or gets the color of the links that the user has visited.
     */
    vlinkColor: 文字;
    只读 webkitCurrentFullScreenElement: Element | 空值;
    只读 webkitFullscreenElement: Element | 空值;
    只读 webkitFullscreenEnabled: 真假;
    只读 webkitIsFullScreen: 真假;
    只读 xmlEncoding: 文字 | 空值;
    xmlStandalone: 真假;

    /**
     * Gets or sets the version attribute specified in the declaration of an XML document.
     */
    xmlVersion: 文字 | 空值;
    adoptNode<T 扩展 Node>(source: T): T;
    captureEvents(): 无值;
    caretRangeFromPoint(x: 数字, y: 数字): Range;
    clear(): 无值;

    /**
     * Closes an output stream and forces the sent data to display.
     */
    close(): 无值;

    /**
     * Creates an attribute object with a specified name.
     * @param name String that sets the attribute object's name.
     */
    createAttribute(name: 文字): Attr;
    createAttributeNS(namespaceURI: 文字 | 空值, qualifiedName: 文字): Attr;
    createCDATASection(data: 文字): CDATASection;

    /**
     * Creates a comment object with the specified data.
     * @param data Sets the comment object's data.
     */
    createComment(data: 文字): Comment;

    /**
     * Creates a new document.
     */
    createDocumentFragment(): DocumentFragment;

    /**
     * Creates an instance of the element for the specified tag.
     * @param tagName The name of an element.
     */
    createElement<K 扩展 键为 HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K];
    createElement(tagName: 文字, options?: ElementCreationOptions): HTMLElement;
    createElementNS(namespaceURI: "http://www.w3.org/1999/xhtml", qualifiedName: 文字): HTMLElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "a"): SVGAElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "circle"): SVGCircleElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "clipPath"): SVGClipPathElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "componentTransferFunction"): SVGComponentTransferFunctionElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "defs"): SVGDefsElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "desc"): SVGDescElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "ellipse"): SVGEllipseElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feBlend"): SVGFEBlendElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feColorMatrix"): SVGFEColorMatrixElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feComponentTransfer"): SVGFEComponentTransferElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feComposite"): SVGFECompositeElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feConvolveMatrix"): SVGFEConvolveMatrixElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feDiffuseLighting"): SVGFEDiffuseLightingElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feDisplacementMap"): SVGFEDisplacementMapElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feDistantLight"): SVGFEDistantLightElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFlood"): SVGFEFloodElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFuncA"): SVGFEFuncAElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFuncB"): SVGFEFuncBElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFuncG"): SVGFEFuncGElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFuncR"): SVGFEFuncRElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feGaussianBlur"): SVGFEGaussianBlurElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feImage"): SVGFEImageElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feMerge"): SVGFEMergeElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feMergeNode"): SVGFEMergeNodeElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feMorphology"): SVGFEMorphologyElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feOffset"): SVGFEOffsetElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "fePointLight"): SVGFEPointLightElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feSpecularLighting"): SVGFESpecularLightingElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feSpotLight"): SVGFESpotLightElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feTile"): SVGFETileElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feTurbulence"): SVGFETurbulenceElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "filter"): SVGFilterElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "foreignObject"): SVGForeignObjectElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "g"): SVGGElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "image"): SVGImageElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "gradient"): SVGGradientElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "line"): SVGLineElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "linearGradient"): SVGLinearGradientElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "marker"): SVGMarkerElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "mask"): SVGMaskElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "path"): SVGPathElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "metadata"): SVGMetadataElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "pattern"): SVGPatternElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "polygon"): SVGPolygonElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "polyline"): SVGPolylineElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "radialGradient"): SVGRadialGradientElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "rect"): SVGRectElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "svg"): SVGSVGElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "script"): SVGScriptElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "stop"): SVGStopElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "style"): SVGStyleElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "switch"): SVGSwitchElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "symbol"): SVGSymbolElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "tspan"): SVGTSpanElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "textContent"): SVGTextContentElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "text"): SVGTextElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "textPath"): SVGTextPathElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "textPositioning"): SVGTextPositioningElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "title"): SVGTitleElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "use"): SVGUseElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "view"): SVGViewElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: 文字): SVGElement;
    createElementNS(namespaceURI: 文字 | 空值, qualifiedName: 文字): Element;
    createExpression(expression: 文字, resolver: XPathNSResolver): XPathExpression;
    createNSResolver(nodeResolver: Node): XPathNSResolver;

    /**
     * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
     * @param root The root element or node to start traversing on.
     * @param whatToShow The type of nodes or elements to appear in the node list
     * @param filter A custom NodeFilter function to use. For more information, see filter. Use null for no filter.
     * @param entityReferenceExpansion A flag that specifies whether entity reference nodes are expanded.
     */
    createNodeIterator(root: Node, whatToShow?: 数字, filter?: NodeFilter, entityReferenceExpansion?: 真假): NodeIterator;
    createProcessingInstruction(target: 文字, data: 文字): ProcessingInstruction;

    /**
     *  Returns an empty range object that has both of its boundary points positioned at the beginning of the document.
     */
    createRange(): Range;

    /**
     * Creates a text string from the specified value.
     * @param data String that specifies the nodeValue property of the text node.
     */
    createTextNode(data: 文字): Text;
    createTouch(view: Window, target: EventTarget, identifier: 数字, pageX: 数字, pageY: 数字, screenX: 数字, screenY: 数字): Touch;
    createTouchList(...touches: Touch[]): TouchList;

    /**
     * Creates a TreeWalker object that you can use to traverse filtered lists of nodes or elements in a document.
     * @param root The root element or node to start traversing on.
     * @param whatToShow The type of nodes or elements to appear in the node list. For more information, see whatToShow.
     * @param filter A custom NodeFilter function to use.
     * @param entityReferenceExpansion A flag that specifies whether entity reference nodes are expanded.
     */
    createTreeWalker(root: Node, whatToShow?: 数字, filter?: NodeFilter, entityReferenceExpansion?: 真假): TreeWalker;

    /**
     * Returns the element for the specified x coordinate and the specified y coordinate.
     * @param x The x-offset
     * @param y The y-offset
     */
    elementFromPoint(x: 数字, y: 数字): Element;
    elementsFromPoint(x: 数字, y: 数字): Element[];
    evaluate(expression: 文字, contextNode: Node, resolver: XPathNSResolver | 空值, type: 数字, result: XPathResult | 空值): XPathResult;

    /**
     * Executes a command on the current document, current selection, or the given range.
     * @param commandId String that specifies the command to execute. This command can be any of the command identifiers that can be executed in script.
     * @param showUI Display the user interface, defaults to false.
     * @param value Value to assign.
     */
    execCommand(commandId: 文字, showUI?: 真假, value?: 任意): 真假;

    /**
     * Displays help information for the given command identifier.
     * @param commandId Displays help information for the given command identifier.
     */
    execCommandShowHelp(commandId: 文字): 真假;
    exitFullscreen(): 无值;
    exitPointerLock(): 无值;

    /**
     * Causes the element to receive the focus and executes the code specified by the onfocus event.
     */
    /** @deprecated */
    focus(): 无值;

    /**
     * Returns a reference to the first object with the specified value of the ID or NAME attribute.
     * @param elementId String that specifies the ID value. Case-insensitive.
     */
    getElementById(elementId: 文字): HTMLElement | 空值;
    getElementsByClassName(classNames: 文字): HTMLCollectionOf<Element>;

    /**
     * Gets a collection of objects based on the value of the NAME or ID attribute.
     * @param elementName Gets a collection of objects based on the value of the NAME or ID attribute.
     */
    getElementsByName(elementName: 文字): NodeListOf<HTMLElement>;

    /**
     * Retrieves a collection of objects based on the specified element name.
     * @param name Specifies the name of an element.
     */
    getElementsByTagName<K 扩展 键为 HTMLElementTagNameMap>(tagname: K): NodeListOf<HTMLElementTagNameMap[K]>;
    getElementsByTagName<K 扩展 键为 SVGElementTagNameMap>(tagname: K): NodeListOf<SVGElementTagNameMap[K]>;
    getElementsByTagName(tagname: 文字): NodeListOf<Element>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: 文字): HTMLCollectionOf<HTMLElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: 文字): HTMLCollectionOf<SVGElement>;
    getElementsByTagNameNS(namespaceURI: 文字, localName: 文字): HTMLCollectionOf<Element>;

    /**
     * Returns an object representing the current selection of the document that is loaded into the object displaying a webpage.
     */
    getSelection(): Selection;

    /**
     * Gets a value indicating whether the object currently has focus.
     */
    hasFocus(): 真假;
    importNode<T 扩展 Node>(importedNode: T, deep: 真假): T;
    msElementsFromPoint(x: 数字, y: 数字): NodeListOf<Element>;
    msElementsFromRect(left: 数字, top: 数字, width: 数字, height: 数字): NodeListOf<Element>;

    /**
     * Opens a new window and loads a document specified by a given URL. Also, opens a new window that uses the url parameter and the name parameter to collect the output of the write method and the writeln method.
     * @param url Specifies a MIME type for the document.
     * @param name Specifies the name of the window. This name is used as the value for the TARGET attribute on a form or an anchor element.
     * @param features Contains a list of items separated by commas. Each item consists of an option and a value, separated by an equals sign (for example, "fullscreen=yes, toolbar=yes"). The following values are supported.
     * @param replace Specifies whether the existing entry for the document is replaced in the history list.
     */
    open(url?: 文字, name?: 文字, features?: 文字, replace?: 真假): Document;

    /**
     * Returns a Boolean value that indicates whether a specified command can be successfully executed using execCommand, given the current state of the document.
     * @param commandId Specifies a command identifier.
     */
    queryCommandEnabled(commandId: 文字): 真假;

    /**
     * Returns a Boolean value that indicates whether the specified command is in the indeterminate state.
     * @param commandId String that specifies a command identifier.
     */
    queryCommandIndeterm(commandId: 文字): 真假;

    /**
     * Returns a Boolean value that indicates the current state of the command.
     * @param commandId String that specifies a command identifier.
     */
    queryCommandState(commandId: 文字): 真假;

    /**
     * Returns a Boolean value that indicates whether the current command is supported on the current range.
     * @param commandId Specifies a command identifier.
     */
    queryCommandSupported(commandId: 文字): 真假;

    /**
     * Retrieves the string associated with a command.
     * @param commandId String that contains the identifier of a command. This can be any command identifier given in the list of Command Identifiers.
     */
    queryCommandText(commandId: 文字): 文字;

    /**
     * Returns the current value of the document, range, or current selection for the given command.
     * @param commandId String that specifies a command identifier.
     */
    queryCommandValue(commandId: 文字): 文字;
    releaseEvents(): 无值;
    updateSettings(): 无值;
    webkitCancelFullScreen(): 无值;
    webkitExitFullscreen(): 无值;

    /**
     * Writes one or more HTML expressions to a document in the specified window.
     * @param content Specifies the text and HTML tags to write.
     */
    write(...content: 文字[]): 无值;

    /**
     * Writes one or more HTML expressions, followed by a carriage return, to a document in the specified window.
     * @param content The text and HTML tags to write.
     */
    writeln(...content: 文字[]): 无值;
    addEventListener<K 扩展 键为 DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 Document: {
    prototype: Document;
    新建(): Document;

};
接口 DocumentEvent {
    createEvent(eventInterface: "AnimationEvent"): AnimationEvent;
    createEvent(eventInterface: "AnimationPlaybackEvent"): AnimationPlaybackEvent;
    createEvent(eventInterface: "AudioProcessingEvent"): AudioProcessingEvent;
    createEvent(eventInterface: "BeforeUnloadEvent"): BeforeUnloadEvent;
    createEvent(eventInterface: "ClipboardEvent"): ClipboardEvent;
    createEvent(eventInterface: "CloseEvent"): CloseEvent;
    createEvent(eventInterface: "CompositionEvent"): CompositionEvent;
    createEvent(eventInterface: "CustomEvent"): CustomEvent;
    createEvent(eventInterface: "DeviceLightEvent"): DeviceLightEvent;
    createEvent(eventInterface: "DeviceMotionEvent"): DeviceMotionEvent;
    createEvent(eventInterface: "DeviceOrientationEvent"): DeviceOrientationEvent;
    createEvent(eventInterface: "DragEvent"): DragEvent;
    createEvent(eventInterface: "ErrorEvent"): ErrorEvent;
    createEvent(eventInterface: "Event"): Event;
    createEvent(eventInterface: "Events"): Event;
    createEvent(eventInterface: "FocusEvent"): FocusEvent;
    createEvent(eventInterface: "FocusNavigationEvent"): FocusNavigationEvent;
    createEvent(eventInterface: "GamepadEvent"): GamepadEvent;
    createEvent(eventInterface: "HashChangeEvent"): HashChangeEvent;
    createEvent(eventInterface: "IDBVersionChangeEvent"): IDBVersionChangeEvent;
    createEvent(eventInterface: "KeyboardEvent"): KeyboardEvent;
    createEvent(eventInterface: "ListeningStateChangedEvent"): ListeningStateChangedEvent;
    createEvent(eventInterface: "MSDCCEvent"): MSDCCEvent;
    createEvent(eventInterface: "MSDSHEvent"): MSDSHEvent;
    createEvent(eventInterface: "MSMediaKeyMessageEvent"): MSMediaKeyMessageEvent;
    createEvent(eventInterface: "MSMediaKeyNeededEvent"): MSMediaKeyNeededEvent;
    createEvent(eventInterface: "MediaEncryptedEvent"): MediaEncryptedEvent;
    createEvent(eventInterface: "MediaKeyMessageEvent"): MediaKeyMessageEvent;
    createEvent(eventInterface: "MediaStreamErrorEvent"): MediaStreamErrorEvent;
    createEvent(eventInterface: "MediaStreamEvent"): MediaStreamEvent;
    createEvent(eventInterface: "MediaStreamTrackEvent"): MediaStreamTrackEvent;
    createEvent(eventInterface: "MessageEvent"): MessageEvent;
    createEvent(eventInterface: "MouseEvent"): MouseEvent;
    createEvent(eventInterface: "MouseEvents"): MouseEvent;
    createEvent(eventInterface: "MutationEvent"): MutationEvent;
    createEvent(eventInterface: "MutationEvents"): MutationEvent;
    createEvent(eventInterface: "OfflineAudioCompletionEvent"): OfflineAudioCompletionEvent;
    createEvent(eventInterface: "OverflowEvent"): OverflowEvent;
    createEvent(eventInterface: "PageTransitionEvent"): PageTransitionEvent;
    createEvent(eventInterface: "PaymentRequestUpdateEvent"): PaymentRequestUpdateEvent;
    createEvent(eventInterface: "PermissionRequestedEvent"): PermissionRequestedEvent;
    createEvent(eventInterface: "PointerEvent"): PointerEvent;
    createEvent(eventInterface: "PopStateEvent"): PopStateEvent;
    createEvent(eventInterface: "ProgressEvent"): ProgressEvent;
    createEvent(eventInterface: "PromiseRejectionEvent"): PromiseRejectionEvent;
    createEvent(eventInterface: "RTCDTMFToneChangeEvent"): RTCDTMFToneChangeEvent;
    createEvent(eventInterface: "RTCDtlsTransportStateChangedEvent"): RTCDtlsTransportStateChangedEvent;
    createEvent(eventInterface: "RTCIceCandidatePairChangedEvent"): RTCIceCandidatePairChangedEvent;
    createEvent(eventInterface: "RTCIceGathererEvent"): RTCIceGathererEvent;
    createEvent(eventInterface: "RTCIceTransportStateChangedEvent"): RTCIceTransportStateChangedEvent;
    createEvent(eventInterface: "RTCPeerConnectionIceEvent"): RTCPeerConnectionIceEvent;
    createEvent(eventInterface: "RTCSsrcConflictEvent"): RTCSsrcConflictEvent;
    createEvent(eventInterface: "SVGZoomEvent"): SVGZoomEvent;
    createEvent(eventInterface: "SVGZoomEvents"): SVGZoomEvent;
    createEvent(eventInterface: "SecurityPolicyViolationEvent"): SecurityPolicyViolationEvent;
    createEvent(eventInterface: "ServiceWorkerMessageEvent"): ServiceWorkerMessageEvent;
    createEvent(eventInterface: "SpeechSynthesisEvent"): SpeechSynthesisEvent;
    createEvent(eventInterface: "StorageEvent"): StorageEvent;
    createEvent(eventInterface: "TextEvent"): TextEvent;
    createEvent(eventInterface: "TouchEvent"): TouchEvent;
    createEvent(eventInterface: "TrackEvent"): TrackEvent;
    createEvent(eventInterface: "TransitionEvent"): TransitionEvent;
    createEvent(eventInterface: "UIEvent"): UIEvent;
    createEvent(eventInterface: "UIEvents"): UIEvent;
    createEvent(eventInterface: "VRDisplayEvent"): VRDisplayEvent;
    createEvent(eventInterface: "VRDisplayEvent "): VRDisplayEvent ;
    createEvent(eventInterface: "WebGLContextEvent"): WebGLContextEvent;
    createEvent(eventInterface: "WheelEvent"): WheelEvent;
    createEvent(eventInterface: 文字): Event;

}
接口 DocumentFragment 扩展 Node, ParentNode {
    getElementById(elementId: 文字): HTMLElement | 空值;

}
声明 值量 DocumentFragment: {
    prototype: DocumentFragment;
    新建(): DocumentFragment;

};
接口 DocumentOrShadowRoot {
    只读 activeElement: Element | 空值;
    只读 styleSheets: StyleSheetList;
    elementFromPoint(x: 数字, y: 数字): Element | 空值;
    elementsFromPoint(x: 数字, y: 数字): Element[];
    getSelection(): Selection | 空值;

}
接口 DocumentType 扩展 Node, ChildNode {
    只读 entities: NamedNodeMap;
    只读 internalSubset: 文字 | 空值;
    只读 name: 文字;
    只读 notations: NamedNodeMap;
    只读 publicId: 文字;
    只读 systemId: 文字;

}
声明 值量 DocumentType: {
    prototype: DocumentType;
    新建(): DocumentType;

};
接口 DragEvent 扩展 MouseEvent {
    只读 dataTransfer: DataTransfer;
    initDragEvent(typeArg: 文字, canBubbleArg: 真假, cancelableArg: 真假, viewArg: Window, detailArg: 数字, screenXArg: 数字, screenYArg: 数字, clientXArg: 数字, clientYArg: 数字, ctrlKeyArg: 真假, altKeyArg: 真假, shiftKeyArg: 真假, metaKeyArg: 真假, buttonArg: 数字, relatedTargetArg: EventTarget, dataTransferArg: DataTransfer): 无值;
    msConvertURL(file: File, targetType: 文字, targetURL?: 文字): 无值;

}
声明 值量 DragEvent: {
    prototype: DragEvent;
    新建(type: "drag" | "dragend" | "dragenter" | "dragexit" | "dragleave" | "dragover" | "dragstart" | "drop", dragEventInit?: { dataTransfer?: DataTransfer }): DragEvent;

};
接口 DynamicsCompressorNode 扩展 AudioNode {
    只读 attack: AudioParam;
    只读 knee: AudioParam;
    只读 ratio: AudioParam;
    只读 reduction: 数字;
    只读 release: AudioParam;
    只读 threshold: AudioParam;

}
声明 值量 DynamicsCompressorNode: {
    prototype: DynamicsCompressorNode;
    新建(): DynamicsCompressorNode;

};
接口 EXT_blend_minmax {
    只读 MAX_EXT: 数字;
    只读 MIN_EXT: 数字;

}
接口 EXT_frag_depth {

}
接口 EXT_sRGB {
    只读 FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: 数字;
    只读 SRGB8_ALPHA8_EXT: 数字;
    只读 SRGB_ALPHA_EXT: 数字;
    只读 SRGB_EXT: 数字;

}
接口 EXT_shader_texture_lod {

}
接口 EXT_texture_filter_anisotropic {
    只读 MAX_TEXTURE_MAX_ANISOTROPY_EXT: 数字;
    只读 TEXTURE_MAX_ANISOTROPY_EXT: 数字;

}
声明 值量 EXT_texture_filter_anisotropic: {
    prototype: EXT_texture_filter_anisotropic;
    新建(): EXT_texture_filter_anisotropic;
    只读 MAX_TEXTURE_MAX_ANISOTROPY_EXT: 数字;
    只读 TEXTURE_MAX_ANISOTROPY_EXT: 数字;

};
接口 ElementEventMap 扩展 GlobalEventHandlersEventMap {
    "ariarequest": Event;
    "command": Event;
    "gotpointercapture": PointerEvent;
    "lostpointercapture": PointerEvent;
    "MSGestureChange": Event;
    "MSGestureDoubleTap": Event;
    "MSGestureEnd": Event;
    "MSGestureHold": Event;
    "MSGestureStart": Event;
    "MSGestureTap": Event;
    "MSGotPointerCapture": Event;
    "MSInertiaStart": Event;
    "MSLostPointerCapture": Event;
    "MSPointerCancel": Event;
    "MSPointerDown": Event;
    "MSPointerEnter": Event;
    "MSPointerLeave": Event;
    "MSPointerMove": Event;
    "MSPointerOut": Event;
    "MSPointerOver": Event;
    "MSPointerUp": Event;
    "touchcancel": TouchEvent;
    "touchend": TouchEvent;
    "touchmove": TouchEvent;
    "touchstart": TouchEvent;
    "webkitfullscreenchange": Event;
    "webkitfullscreenerror": Event;

}
接口 Element 扩展 Node, GlobalEventHandlers, ElementTraversal, ParentNode, ChildNode {
    只读 assignedSlot: HTMLSlotElement | 空值;
    只读 attributes: NamedNodeMap;
    只读 classList: DOMTokenList;
    className: 文字;
    只读 clientHeight: 数字;
    只读 clientLeft: 数字;
    只读 clientTop: 数字;
    只读 clientWidth: 数字;
    id: 文字;
    innerHTML: 文字;
    msContentZoomFactor: 数字;
    只读 msRegionOverflow: 文字;
    onariarequest: ((this: Element, ev: Event) => 任意) | 空值;
    oncommand: ((this: Element, ev: Event) => 任意) | 空值;
    ongotpointercapture: ((this: Element, ev: PointerEvent) => 任意) | 空值;
    onlostpointercapture: ((this: Element, ev: PointerEvent) => 任意) | 空值;
    onmsgesturechange: ((this: Element, ev: Event) => 任意) | 空值;
    onmsgesturedoubletap: ((this: Element, ev: Event) => 任意) | 空值;
    onmsgestureend: ((this: Element, ev: Event) => 任意) | 空值;
    onmsgesturehold: ((this: Element, ev: Event) => 任意) | 空值;
    onmsgesturestart: ((this: Element, ev: Event) => 任意) | 空值;
    onmsgesturetap: ((this: Element, ev: Event) => 任意) | 空值;
    onmsgotpointercapture: ((this: Element, ev: Event) => 任意) | 空值;
    onmsinertiastart: ((this: Element, ev: Event) => 任意) | 空值;
    onmslostpointercapture: ((this: Element, ev: Event) => 任意) | 空值;
    onmspointercancel: ((this: Element, ev: Event) => 任意) | 空值;
    onmspointerdown: ((this: Element, ev: Event) => 任意) | 空值;
    onmspointerenter: ((this: Element, ev: Event) => 任意) | 空值;
    onmspointerleave: ((this: Element, ev: Event) => 任意) | 空值;
    onmspointermove: ((this: Element, ev: Event) => 任意) | 空值;
    onmspointerout: ((this: Element, ev: Event) => 任意) | 空值;
    onmspointerover: ((this: Element, ev: Event) => 任意) | 空值;
    onmspointerup: ((this: Element, ev: Event) => 任意) | 空值;
    ontouchcancel: ((this: Element, ev: TouchEvent) => 任意) | 空值;
    ontouchend: ((this: Element, ev: TouchEvent) => 任意) | 空值;
    ontouchmove: ((this: Element, ev: TouchEvent) => 任意) | 空值;
    ontouchstart: ((this: Element, ev: TouchEvent) => 任意) | 空值;
    onwebkitfullscreenchange: ((this: Element, ev: Event) => 任意) | 空值;
    onwebkitfullscreenerror: ((this: Element, ev: Event) => 任意) | 空值;
    outerHTML: 文字;
    只读 prefix: 文字 | 空值;
    只读 scrollHeight: 数字;
    scrollLeft: 数字;
    scrollTop: 数字;
    只读 scrollWidth: 数字;
    只读 shadowRoot: ShadowRoot | 空值;
    slot: 文字;
    只读 tagName: 文字;
    attachShadow(shadowRootInitDict: ShadowRootInit): ShadowRoot;
    closest<K 扩展 键为 HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | 空值;
    closest<K 扩展 键为 SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | 空值;
    closest(selector: 文字): Element | 空值;
    getAttribute(qualifiedName: 文字): 文字 | 空值;
    getAttributeNS(namespaceURI: 文字, localName: 文字): 文字;
    getAttributeNode(name: 文字): Attr | 空值;
    getAttributeNodeNS(namespaceURI: 文字, localName: 文字): Attr | 空值;
    getBoundingClientRect(): ClientRect | DOMRect;
    getClientRects(): ClientRectList | DOMRectList;
    getElementsByClassName(classNames: 文字): NodeListOf<Element>;
    getElementsByTagName<K 扩展 键为 HTMLElementTagNameMap>(name: K): NodeListOf<HTMLElementTagNameMap[K]>;
    getElementsByTagName<K 扩展 键为 SVGElementTagNameMap>(name: K): NodeListOf<SVGElementTagNameMap[K]>;
    getElementsByTagName(name: 文字): NodeListOf<Element>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: 文字): HTMLCollectionOf<HTMLElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: 文字): HTMLCollectionOf<SVGElement>;
    getElementsByTagNameNS(namespaceURI: 文字, localName: 文字): HTMLCollectionOf<Element>;
    hasAttribute(name: 文字): 真假;
    hasAttributeNS(namespaceURI: 文字, localName: 文字): 真假;
    hasAttributes(): 真假;
    insertAdjacentElement(position: InsertPosition, insertedElement: Element): Element | 空值;
    insertAdjacentHTML(where: InsertPosition, html: 文字): 无值;
    insertAdjacentText(where: InsertPosition, text: 文字): 无值;
    matches(selectors: 文字): 真假;
    msGetRegionContent(): 任意;
    msGetUntransformedBounds(): ClientRect;
    msMatchesSelector(selectors: 文字): 真假;
    msReleasePointerCapture(pointerId: 数字): 无值;
    msSetPointerCapture(pointerId: 数字): 无值;
    msZoomTo(args: MsZoomToOptions): 无值;
    releasePointerCapture(pointerId: 数字): 无值;
    removeAttribute(qualifiedName: 文字): 无值;
    removeAttributeNS(namespaceURI: 文字, localName: 文字): 无值;
    removeAttributeNode(oldAttr: Attr): Attr;
    requestFullscreen(): 无值;
    requestPointerLock(): 无值;
    scroll(options?: ScrollToOptions): 无值;
    scroll(x: 数字, y: 数字): 无值;
    scrollBy(options?: ScrollToOptions): 无值;
    scrollBy(x: 数字, y: 数字): 无值;
    scrollIntoView(arg?: 真假 | ScrollIntoViewOptions): 无值;
    scrollTo(options?: ScrollToOptions): 无值;
    scrollTo(x: 数字, y: 数字): 无值;
    setAttribute(qualifiedName: 文字, value: 文字): 无值;
    setAttributeNS(namespaceURI: 文字, qualifiedName: 文字, value: 文字): 无值;
    setAttributeNode(newAttr: Attr): Attr;
    setAttributeNodeNS(newAttr: Attr): Attr;
    setPointerCapture(pointerId: 数字): 无值;
    webkitMatchesSelector(selectors: 文字): 真假;
    webkitRequestFullScreen(): 无值;
    webkitRequestFullscreen(): 无值;
    addEventListener<K 扩展 键为 ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 Element: {
    prototype: Element;
    新建(): Element;

};
接口 ElementCSSInlineStyle {
    只读 style: CSSStyleDeclaration;

}
接口 ElementCreationOptions {
    is?: 文字;

}
接口 ElementDefinitionOptions {
    extends: 文字;

}
接口 ElementTraversal {
    只读 childElementCount: 数字;
    只读 firstElementChild: Element | 空值;
    只读 lastElementChild: Element | 空值;
    只读 nextElementSibling: Element | 空值;
    只读 previousElementSibling: Element | 空值;

}
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
    只读 srcElement: Element | 空值;
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
接口 EventSource 扩展 EventTarget {
    只读 CLOSED: 数字;
    只读 CONNECTING: 数字;
    只读 OPEN: 数字;
    onerror: (evt: MessageEvent) => 任意;
    onmessage: (evt: MessageEvent) => 任意;
    onopen: (evt: MessageEvent) => 任意;
    只读 readyState: 数字;
    只读 url: 文字;
    只读 withCredentials: 真假;
    close(): 无值;

}
声明 值量 EventSource: {
    prototype: EventSource;
    新建(url: 文字, eventSourceInitDict?: EventSourceInit): EventSource;

};
接口 EventSourceInit {
    只读 withCredentials: 真假;

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
接口 ExtensionScriptApis {
    extensionIdToShortId(extensionId: 文字): 数字;
    fireExtensionApiTelemetry(functionName: 文字, isSucceeded: 真假, isSupported: 真假, errorString: 文字): 无值;
    genericFunction(routerAddress: 任意, parameters?: 文字, callbackId?: 数字): 无值;
    genericSynchronousFunction(functionId: 数字, parameters?: 文字): 文字;
    genericWebRuntimeCallout(to: 任意, from: 任意, payload: 文字): 无值;
    getExtensionId(): 文字;
    //@@{ 函数_:Function }
    registerGenericFunctionCallbackHandler(callbackHandler: 函数_): 无值;
    //@@{ 函数_:Function }
    registerGenericPersistentCallbackHandler(callbackHandler: 函数_): 无值;
    //@@{ 函数_:Function }
    registerWebRuntimeCallbackHandler(handler: 函数_): 任意;

}
声明 值量 ExtensionScriptApis: {
    prototype: ExtensionScriptApis;
    新建(): ExtensionScriptApis;

};
接口 External {

}
声明 值量 External: {
    prototype: External;
    新建(): External;

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
接口 FocusEvent 扩展 UIEvent {
    只读 relatedTarget: EventTarget;
    initFocusEvent(typeArg: 文字, canBubbleArg: 真假, cancelableArg: 真假, viewArg: Window, detailArg: 数字, relatedTargetArg: EventTarget): 无值;

}
声明 值量 FocusEvent: {
    prototype: FocusEvent;
    新建(typeArg: 文字, eventInitDict?: FocusEventInit): FocusEvent;

};
接口 FocusNavigationEvent 扩展 Event {
    只读 navigationReason: NavigationReason;
    只读 originHeight: 数字;
    只读 originLeft: 数字;
    只读 originTop: 数字;
    只读 originWidth: 数字;
    requestFocus(): 无值;

}
声明 值量 FocusNavigationEvent: {
    prototype: FocusNavigationEvent;
    新建(type: 文字, eventInitDict?: FocusNavigationEventInit): FocusNavigationEvent;

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
    新建(form: HTMLFormElement): FormData;

};
接口 GainNode 扩展 AudioNode {
    只读 gain: AudioParam;

}
声明 值量 GainNode: {
    prototype: GainNode;
    新建(): GainNode;

};
接口 Gamepad {
    只读 axes: 数字[];
    只读 buttons: GamepadButton[];
    只读 connected: 真假;
    只读 displayId: 数字;
    只读 hand: GamepadHand;
    只读 hapticActuators: GamepadHapticActuator[];
    只读 id: 文字;
    只读 index: 数字;
    只读 mapping: GamepadMappingType;
    只读 pose: GamepadPose | 空值;
    只读 timestamp: 数字;

}
声明 值量 Gamepad: {
    prototype: Gamepad;
    新建(): Gamepad;

};
接口 GamepadButton {
    只读 pressed: 真假;
    只读 touched: 真假;
    只读 value: 数字;

}
声明 值量 GamepadButton: {
    prototype: GamepadButton;
    新建(): GamepadButton;

};
接口 GamepadEvent 扩展 Event {
    只读 gamepad: Gamepad;

}
声明 值量 GamepadEvent: {
    prototype: GamepadEvent;
    新建(typeArg: 文字, eventInitDict?: GamepadEventInit): GamepadEvent;

};
接口 GamepadHapticActuator {
    只读 type: GamepadHapticActuatorType;
    //@@{ 预设_:Promise }
    pulse(value: 数字, duration: 数字): 预设_<真假>;

}
声明 值量 GamepadHapticActuator: {
    prototype: GamepadHapticActuator;
    新建(): GamepadHapticActuator;

};
接口 GamepadPose {
    //@@{ 浮点数组32_:Float32Array }
    只读 angularAcceleration: 浮点数组32_ | 空值;
    //@@{ 浮点数组32_:Float32Array }
    只读 angularVelocity: 浮点数组32_ | 空值;
    只读 hasOrientation: 真假;
    只读 hasPosition: 真假;
    //@@{ 浮点数组32_:Float32Array }
    只读 linearAcceleration: 浮点数组32_ | 空值;
    //@@{ 浮点数组32_:Float32Array }
    只读 linearVelocity: 浮点数组32_ | 空值;
    //@@{ 浮点数组32_:Float32Array }
    只读 orientation: 浮点数组32_ | 空值;
    //@@{ 浮点数组32_:Float32Array }
    只读 position: 浮点数组32_ | 空值;

}
声明 值量 GamepadPose: {
    prototype: GamepadPose;
    新建(): GamepadPose;

};
接口 Geolocation {
    clearWatch(watchId: 数字): 无值;
    getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): 无值;
    watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): 数字;

}
声明 值量 Geolocation: {
    prototype: Geolocation;
    新建(): Geolocation;

};
接口 GetSVGDocument {
    getSVGDocument(): Document;

}
接口 GlobalEventHandlersEventMap {
    "pointercancel": PointerEvent;
    "pointerdown": PointerEvent;
    "pointerenter": PointerEvent;
    "pointerleave": PointerEvent;
    "pointermove": PointerEvent;
    "pointerout": PointerEvent;
    "pointerover": PointerEvent;
    "pointerup": PointerEvent;
    "wheel": WheelEvent;

}
接口 GlobalEventHandlers {
    onpointercancel: ((this: GlobalEventHandlers, ev: PointerEvent) => 任意) | 空值;
    onpointerdown: ((this: GlobalEventHandlers, ev: PointerEvent) => 任意) | 空值;
    onpointerenter: ((this: GlobalEventHandlers, ev: PointerEvent) => 任意) | 空值;
    onpointerleave: ((this: GlobalEventHandlers, ev: PointerEvent) => 任意) | 空值;
    onpointermove: ((this: GlobalEventHandlers, ev: PointerEvent) => 任意) | 空值;
    onpointerout: ((this: GlobalEventHandlers, ev: PointerEvent) => 任意) | 空值;
    onpointerover: ((this: GlobalEventHandlers, ev: PointerEvent) => 任意) | 空值;
    onpointerup: ((this: GlobalEventHandlers, ev: PointerEvent) => 任意) | 空值;
    onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => 任意) | 空值;
    addEventListener<K 扩展 键为 GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
接口 GlobalFetch {
    //@@{ 预设_:Promise }
    fetch(input?: Request | 文字, init?: RequestInit): 预设_<Response>;

}
接口 HTMLAllCollection {
    只读 length: 数字;
    item(nameOrIndex?: 文字): HTMLCollection | Element | 空值;
    namedItem(name: 文字): HTMLCollection | Element | 空值;
    [index: 数字]: Element;

}
声明 值量 HTMLAllCollection: {
    prototype: HTMLAllCollection;
    新建(): HTMLAllCollection;

};
接口 HTMLAnchorElement 扩展 HTMLElement, HTMLHyperlinkElementUtils {
    Methods: 文字;

    /**
     * Sets or retrieves the character set used to encode the object.
     */
    /** @deprecated */
    charset: 文字;

    /**
     * Sets or retrieves the coordinates of the object.
     */
    /** @deprecated */
    coords: 文字;
    download: 文字;

    /**
     * Sets or retrieves the language code of the object.
     */
    hreflang: 文字;
    只读 mimeType: 文字;

    /**
     * Sets or retrieves the shape of the object.
     */
    /** @deprecated */
    name: 文字;
    只读 nameProp: 文字;
    只读 protocolLong: 文字;

    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     */
    rel: 文字;

    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     */
    /** @deprecated */
    rev: 文字;

    /**
     * Sets or retrieves the shape of the object.
     */
    /** @deprecated */
    shape: 文字;

    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    target: 文字;

    /**
     * Retrieves or sets the text of the object as a string.
     */
    text: 文字;
    type: 文字;
    urn: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLAnchorElement: {
    prototype: HTMLAnchorElement;
    新建(): HTMLAnchorElement;

};
接口 HTMLAppletElement 扩展 HTMLElement {

    /** @deprecated */
    align: 文字;

    /**
     * Sets or retrieves a text alternative to the graphic.
     */
    /** @deprecated */
    alt: 文字;

    /**
     * Sets or retrieves a character string that can be used to implement your own archive functionality for the object.
     */
    /** @deprecated */
    archive: 文字;

    /** @deprecated */
    code: 文字;

    /**
     * Sets or retrieves the URL of the component.
     */
    /** @deprecated */
    codeBase: 文字;
    只读 form: HTMLFormElement | 空值;

    /**
     * Sets or retrieves the height of the object.
     */
    /** @deprecated */
    height: 文字;

    /** @deprecated */
    hspace: 数字;

    /**
     * Sets or retrieves the shape of the object.
     */
    /** @deprecated */
    name: 文字;

    /** @deprecated */
    object: 文字;

    /** @deprecated */
    vspace: 数字;

    /** @deprecated */
    width: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLAppletElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLAppletElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLAppletElement: {
    prototype: HTMLAppletElement;
    新建(): HTMLAppletElement;

};
接口 HTMLAreaElement 扩展 HTMLElement, HTMLHyperlinkElementUtils {

    /**
     * Sets or retrieves a text alternative to the graphic.
     */
    alt: 文字;

    /**
     * Sets or retrieves the coordinates of the object.
     */
    coords: 文字;
    download: 文字;

    /**
     * Sets or gets whether clicks in this region cause action.
     */
    /** @deprecated */
    noHref: 真假;
    rel: 文字;

    /**
     * Sets or retrieves the shape of the object.
     */
    shape: 文字;

    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    target: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLAreaElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLAreaElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLAreaElement: {
    prototype: HTMLAreaElement;
    新建(): HTMLAreaElement;

};
接口 HTMLAreasCollection 扩展 HTMLCollectionBase {

}
声明 值量 HTMLAreasCollection: {
    prototype: HTMLAreasCollection;
    新建(): HTMLAreasCollection;

};
接口 HTMLAudioElement 扩展 HTMLMediaElement {
    addEventListener<K 扩展 键为 HTMLMediaElementEventMap>(type: K, listener: (this: HTMLAudioElement, ev: HTMLMediaElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLMediaElementEventMap>(type: K, listener: (this: HTMLAudioElement, ev: HTMLMediaElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLAudioElement: {
    prototype: HTMLAudioElement;
    新建(): HTMLAudioElement;

};
接口 HTMLBRElement 扩展 HTMLElement {

    /**
     * Sets or retrieves the side on which floating objects are not to be positioned when any IHTMLBlockElement is inserted into the document.
     */
    /** @deprecated */
    clear: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLBRElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLBRElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLBRElement: {
    prototype: HTMLBRElement;
    新建(): HTMLBRElement;

};
接口 HTMLBaseElement 扩展 HTMLElement {

    /**
     * Gets or sets the baseline URL on which relative links are based.
     */
    href: 文字;

    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    target: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLBaseElement: {
    prototype: HTMLBaseElement;
    新建(): HTMLBaseElement;

};
接口 HTMLBaseFontElement 扩展 HTMLElement, DOML2DeprecatedColorProperty {

    /**
     * Sets or retrieves the current typeface family.
     */
    /** @deprecated */
    face: 文字;

    /**
     * Sets or retrieves the font size of the object.
     */
    /** @deprecated */
    size: 数字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLBaseFontElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLBaseFontElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLBaseFontElement: {
    prototype: HTMLBaseFontElement;
    新建(): HTMLBaseFontElement;

};
接口 HTMLBodyElementEventMap 扩展 HTMLElementEventMap, WindowEventHandlersEventMap {
    "blur": FocusEvent;
    "error": ErrorEvent;
    "focus": FocusEvent;
    "load": Event;
    "orientationchange": Event;
    "resize": UIEvent;
    "scroll": UIEvent;

}
接口 HTMLBodyElement 扩展 HTMLElement, WindowEventHandlers {

    /** @deprecated */
    aLink: 文字;

    /** @deprecated */
    background: 文字;

    /** @deprecated */
    bgColor: 文字;
    bgProperties: 文字;

    /** @deprecated */
    link: 文字;

    /** @deprecated */
    noWrap: 真假;
    onorientationchange: ((this: HTMLBodyElement, ev: Event) => 任意) | 空值;
    onresize: ((this: HTMLBodyElement, ev: UIEvent) => 任意) | 空值;

    /** @deprecated */
    text: 文字;

    /** @deprecated */
    vLink: 文字;
    addEventListener<K 扩展 键为 HTMLBodyElementEventMap>(type: K, listener: (this: HTMLBodyElement, ev: HTMLBodyElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLBodyElementEventMap>(type: K, listener: (this: HTMLBodyElement, ev: HTMLBodyElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLBodyElement: {
    prototype: HTMLBodyElement;
    新建(): HTMLBodyElement;

};
接口 HTMLButtonElement 扩展 HTMLElement {

    /**
     * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
     */
    autofocus: 真假;
    disabled: 真假;

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    只读 form: HTMLFormElement | 空值;

    /**
     * Overrides the action attribute (where the data on a form is sent) on the parent form element.
     */
    formAction: 文字;

    /**
     * Used to override the encoding (formEnctype attribute) specified on the form element.
     */
    formEnctype: 文字;

    /**
     * Overrides the submit method attribute previously specified on a form element.
     */
    formMethod: 文字;

    /**
     * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
     */
    formNoValidate: 真假;

    /**
     * Overrides the target attribute on a form element.
     */
    formTarget: 文字;

    /**
     * Sets or retrieves the name of the object.
     */
    name: 文字;
    status: 任意;

    /**
     * Gets the classification and default behavior of the button.
     */
    type: 文字;

    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    只读 validationMessage: 文字;

    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    只读 validity: ValidityState;

    /**
     * Sets or retrieves the default or selected value of the control.
     */
    value: 文字;

    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    只读 willValidate: 真假;

    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): 真假;

    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: 文字): 无值;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLButtonElement: {
    prototype: HTMLButtonElement;
    新建(): HTMLButtonElement;

};
接口 HTMLCanvasElement 扩展 HTMLElement {

    /**
     * Gets or sets the height of a canvas element on a document.
     */
    height: 数字;

    /**
     * Gets or sets the width of a canvas element on a document.
     */
    width: 数字;

    /**
     * Returns an object that provides methods and properties for drawing and manipulating images and graphics on a canvas element in a document. A context object includes information about colors, line widths, fonts, and other graphic parameters that can be drawn on a canvas.
     * @param contextId The identifier (ID) of the type of canvas to create. Internet Explorer 9 and Internet Explorer 10 support only a 2-D context using canvas.getContext("2d"); IE11 Preview also supports 3-D or WebGL context using canvas.getContext("experimental-webgl");
     */
    getContext(contextId: "2d", contextAttributes?: Canvas2DContextAttributes): CanvasRenderingContext2D | 空值;
    getContext(contextId: "webgl" | "experimental-webgl", contextAttributes?: WebGLContextAttributes): WebGLRenderingContext | 空值;
    getContext(contextId: 文字, contextAttributes?: {}): CanvasRenderingContext2D | WebGLRenderingContext | 空值;

    /**
     * Returns a blob object encoded as a Portable Network Graphics (PNG) format from a canvas image or drawing.
     */
    msToBlob(): Blob;
    toBlob(callback: (result: Blob | 空值) => 无值, type?: 文字, ...arguments: 任意[]): 无值;

    /**
     * Returns the content of the current canvas as an image that you can use as a source for another canvas or an HTML element.
     * @param type The standard MIME type for the image format to return. If you do not specify this parameter, the default value is a PNG format image.
     */
    toDataURL(type?: 文字, ...args: 任意[]): 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLCanvasElement: {
    prototype: HTMLCanvasElement;
    新建(): HTMLCanvasElement;

};
接口 HTMLCollectionBase {

    /**
     * Sets or retrieves the number of objects in a collection.
     */
    只读 length: 数字;

    /**
     * Retrieves an object from various collections.
     */
    item(index: 数字): Element;
    [index: 数字]: Element;

}
接口 HTMLCollection 扩展 HTMLCollectionBase {

    /**
     * Retrieves a select object or an object from an options collection.
     */
    namedItem(name: 文字): Element | 空值;

}
声明 值量 HTMLCollection: {
    prototype: HTMLCollection;
    新建(): HTMLCollection;

};
接口 HTMLCollectionOf<T 扩展 Element> 扩展 HTMLCollectionBase {
    item(index: 数字): T;
    namedItem(name: 文字): T;
    [index: 数字]: T;

}
接口 HTMLDListElement 扩展 HTMLElement {

    /** @deprecated */
    compact: 真假;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLDListElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLDListElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLDListElement: {
    prototype: HTMLDListElement;
    新建(): HTMLDListElement;

};
接口 HTMLDataElement 扩展 HTMLElement {
    value: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLDataElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLDataElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLDataElement: {
    prototype: HTMLDataElement;
    新建(): HTMLDataElement;

};
接口 HTMLDataListElement 扩展 HTMLElement {
    只读 options: HTMLCollectionOf<HTMLOptionElement>;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLDataListElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLDataListElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLDataListElement: {
    prototype: HTMLDataListElement;
    新建(): HTMLDataListElement;

};
接口 HTMLDetailsElement 扩展 HTMLElement {
    open: 真假;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLDetailsElement: {
    prototype: HTMLDetailsElement;
    新建(): HTMLDetailsElement;

};
接口 HTMLDialogElement 扩展 HTMLElement {
    open: 真假;
    returnValue: 文字;
    close(returnValue?: 文字): 无值;
    show(): 无值;
    showModal(): 无值;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLDialogElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLDialogElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLDialogElement: {
    prototype: HTMLDialogElement;
    新建(): HTMLDialogElement;

};
接口 HTMLDirectoryElement 扩展 HTMLElement {
    compact: 真假;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLDirectoryElement: {
    prototype: HTMLDirectoryElement;
    新建(): HTMLDirectoryElement;

};
接口 HTMLDivElement 扩展 HTMLElement {

    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: 文字;

    /**
     * Sets or retrieves whether the browser automatically performs wordwrap.
     */
    noWrap: 真假;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLDivElement: {
    prototype: HTMLDivElement;
    新建(): HTMLDivElement;

};
接口 HTMLDocument 扩展 Document {
    addEventListener<K 扩展 键为 DocumentEventMap>(type: K, listener: (this: HTMLDocument, ev: DocumentEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 DocumentEventMap>(type: K, listener: (this: HTMLDocument, ev: DocumentEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLDocument: {
    prototype: HTMLDocument;
    新建(): HTMLDocument;

};
接口 HTMLElementEventMap 扩展 ElementEventMap {
    "abort": UIEvent;
    "activate": Event;
    "beforeactivate": Event;
    "beforecopy": Event;
    "beforecut": Event;
    "beforedeactivate": Event;
    "beforepaste": Event;
    "blur": FocusEvent;
    "canplay": Event;
    "canplaythrough": Event;
    "change": Event;
    "click": MouseEvent;
    "contextmenu": PointerEvent;
    "copy": ClipboardEvent;
    "cuechange": Event;
    "cut": ClipboardEvent;
    "dblclick": MouseEvent;
    "deactivate": Event;
    "drag": DragEvent;
    "dragend": DragEvent;
    "dragenter": DragEvent;
    "dragleave": DragEvent;
    "dragover": DragEvent;
    "dragstart": DragEvent;
    "drop": DragEvent;
    "durationchange": Event;
    "emptied": Event;
    "ended": Event;
    "error": ErrorEvent;
    "focus": FocusEvent;
    "input": Event;
    "invalid": Event;
    "keydown": KeyboardEvent;
    "keypress": KeyboardEvent;
    "keyup": KeyboardEvent;
    "load": Event;
    "loadeddata": Event;
    "loadedmetadata": Event;
    "loadstart": Event;
    "mousedown": MouseEvent;
    "mouseenter": MouseEvent;
    "mouseleave": MouseEvent;
    "mousemove": MouseEvent;
    "mouseout": MouseEvent;
    "mouseover": MouseEvent;
    "mouseup": MouseEvent;
    "mousewheel": WheelEvent;
    "MSContentZoom": Event;
    "MSManipulationStateChanged": Event;
    "paste": ClipboardEvent;
    "pause": Event;
    "play": Event;
    "playing": Event;
    "progress": ProgressEvent;
    "ratechange": Event;
    "reset": Event;
    "scroll": UIEvent;
    "seeked": Event;
    "seeking": Event;
    "select": UIEvent;
    "selectstart": Event;
    "stalled": Event;
    "submit": Event;
    "suspend": Event;
    "timeupdate": Event;
    "volumechange": Event;
    "waiting": Event;

}
接口 HTMLElement 扩展 Element, ElementCSSInlineStyle {
    accessKey: 文字;
    contentEditable: 文字;
    只读 dataset: DOMStringMap;
    dir: 文字;
    draggable: 真假;
    hidden: 真假;
    hideFocus: 真假;
    innerText: 文字;
    只读 isContentEditable: 真假;
    lang: 文字;
    只读 offsetHeight: 数字;
    只读 offsetLeft: 数字;
    只读 offsetParent: Element;
    只读 offsetTop: 数字;
    只读 offsetWidth: 数字;
    onabort: ((this: HTMLElement, ev: UIEvent) => 任意) | 空值;
    onactivate: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onbeforeactivate: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onbeforecopy: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onbeforecut: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onbeforedeactivate: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onbeforepaste: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onblur: ((this: HTMLElement, ev: FocusEvent) => 任意) | 空值;
    oncanplay: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    oncanplaythrough: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onchange: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onclick: ((this: HTMLElement, ev: MouseEvent) => 任意) | 空值;
    oncontextmenu: ((this: HTMLElement, ev: PointerEvent) => 任意) | 空值;
    oncopy: ((this: HTMLElement, ev: ClipboardEvent) => 任意) | 空值;
    oncuechange: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    oncut: ((this: HTMLElement, ev: ClipboardEvent) => 任意) | 空值;
    ondblclick: ((this: HTMLElement, ev: MouseEvent) => 任意) | 空值;
    ondeactivate: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    ondrag: ((this: HTMLElement, ev: DragEvent) => 任意) | 空值;
    ondragend: ((this: HTMLElement, ev: DragEvent) => 任意) | 空值;
    ondragenter: ((this: HTMLElement, ev: DragEvent) => 任意) | 空值;
    ondragleave: ((this: HTMLElement, ev: DragEvent) => 任意) | 空值;
    ondragover: ((this: HTMLElement, ev: DragEvent) => 任意) | 空值;
    ondragstart: ((this: HTMLElement, ev: DragEvent) => 任意) | 空值;
    ondrop: ((this: HTMLElement, ev: DragEvent) => 任意) | 空值;
    ondurationchange: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onemptied: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onended: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onerror: ((this: HTMLElement, ev: ErrorEvent) => 任意) | 空值;
    onfocus: ((this: HTMLElement, ev: FocusEvent) => 任意) | 空值;
    oninput: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    oninvalid: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onkeydown: ((this: HTMLElement, ev: KeyboardEvent) => 任意) | 空值;
    onkeypress: ((this: HTMLElement, ev: KeyboardEvent) => 任意) | 空值;
    onkeyup: ((this: HTMLElement, ev: KeyboardEvent) => 任意) | 空值;
    onload: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onloadeddata: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onloadedmetadata: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onloadstart: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onmousedown: ((this: HTMLElement, ev: MouseEvent) => 任意) | 空值;
    onmouseenter: ((this: HTMLElement, ev: MouseEvent) => 任意) | 空值;
    onmouseleave: ((this: HTMLElement, ev: MouseEvent) => 任意) | 空值;
    onmousemove: ((this: HTMLElement, ev: MouseEvent) => 任意) | 空值;
    onmouseout: ((this: HTMLElement, ev: MouseEvent) => 任意) | 空值;
    onmouseover: ((this: HTMLElement, ev: MouseEvent) => 任意) | 空值;
    onmouseup: ((this: HTMLElement, ev: MouseEvent) => 任意) | 空值;
    onmousewheel: ((this: HTMLElement, ev: WheelEvent) => 任意) | 空值;
    onmscontentzoom: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onmsmanipulationstatechanged: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onpaste: ((this: HTMLElement, ev: ClipboardEvent) => 任意) | 空值;
    onpause: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onplay: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onplaying: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onprogress: ((this: HTMLElement, ev: ProgressEvent) => 任意) | 空值;
    onratechange: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onreset: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onscroll: ((this: HTMLElement, ev: UIEvent) => 任意) | 空值;
    onseeked: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onseeking: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onselect: ((this: HTMLElement, ev: UIEvent) => 任意) | 空值;
    onselectstart: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onstalled: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onsubmit: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onsuspend: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    ontimeupdate: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onvolumechange: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    onwaiting: ((this: HTMLElement, ev: Event) => 任意) | 空值;
    outerText: 文字;
    spellcheck: 真假;
    tabIndex: 数字;
    title: 文字;
    animate(keyframes: AnimationKeyFrame | AnimationKeyFrame[], options: 数字 | AnimationOptions): Animation;
    blur(): 无值;
    click(): 无值;
    dragDrop(): 真假;
    focus(): 无值;
    msGetInputContext(): MSInputMethodContext;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLElement: {
    prototype: HTMLElement;
    新建(): HTMLElement;

};
接口 HTMLEmbedElement 扩展 HTMLElement, GetSVGDocument {

    /**
     * Sets or retrieves the height of the object.
     */
    height: 文字;
    hidden: 任意;

    /**
     * Gets or sets whether the DLNA PlayTo device is available.
     */
    msPlayToDisabled: 真假;

    /**
     * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.
     */
    msPlayToPreferredSourceUri: 文字;

    /**
     * Gets or sets the primary DLNA PlayTo device.
     */
    msPlayToPrimary: 真假;

    /**
     * Gets the source associated with the media element for use by the PlayToManager.
     */
    只读 msPlayToSource: 任意;

    /**
     * Sets or retrieves the name of the object.
     */
    /** @deprecated */
    name: 文字;

    /**
     * Retrieves the palette used for the embedded document.
     */
    只读 palette: 文字;

    /**
     * Retrieves the URL of the plug-in used to view an embedded document.
     */
    只读 pluginspage: 文字;
    只读 readyState: 文字;

    /**
     * Sets or retrieves a URL to be loaded by the object.
     */
    src: 文字;

    /**
     * Sets or retrieves the height and width units of the embed object.
     */
    units: 文字;

    /**
     * Sets or retrieves the width of the object.
     */
    width: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLEmbedElement: {
    prototype: HTMLEmbedElement;
    新建(): HTMLEmbedElement;

};
接口 HTMLFieldSetElement 扩展 HTMLElement {

    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    align: 文字;
    disabled: 真假;

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    只读 form: HTMLFormElement | 空值;
    name: 文字;

    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    只读 validationMessage: 文字;

    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    只读 validity: ValidityState;

    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    只读 willValidate: 真假;

    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): 真假;

    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: 文字): 无值;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLFieldSetElement: {
    prototype: HTMLFieldSetElement;
    新建(): HTMLFieldSetElement;

};
接口 HTMLFontElement 扩展 HTMLElement, DOML2DeprecatedColorProperty, DOML2DeprecatedSizeProperty {

    /**
     * Sets or retrieves the current typeface family.
     */
    /** @deprecated */
    face: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLFontElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLFontElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLFontElement: {
    prototype: HTMLFontElement;
    新建(): HTMLFontElement;

};
接口 HTMLFormControlsCollection 扩展 HTMLCollectionBase {
    namedItem(name: 文字): HTMLCollection | Element | 空值;

}
声明 值量 HTMLFormControlsCollection: {
    prototype: HTMLFormControlsCollection;
    新建(): HTMLFormControlsCollection;

};
接口 HTMLFormElement 扩展 HTMLElement {

    /**
     * Sets or retrieves a list of character encodings for input data that must be accepted by the server processing the form.
     */
    acceptCharset: 文字;

    /**
     * Sets or retrieves the URL to which the form content is sent for processing.
     */
    action: 文字;

    /**
     * Specifies whether autocomplete is applied to an editable text field.
     */
    autocomplete: 文字;

    /**
     * Retrieves a collection, in source order, of all controls in a given form.
     */
    只读 elements: HTMLFormControlsCollection;

    /**
     * Sets or retrieves the MIME encoding for the form.
     */
    encoding: 文字;

    /**
     * Sets or retrieves the encoding type for the form.
     */
    enctype: 文字;

    /**
     * Sets or retrieves the number of objects in a collection.
     */
    只读 length: 数字;

    /**
     * Sets or retrieves how to send the form data to the server.
     */
    method: 文字;

    /**
     * Sets or retrieves the name of the object.
     */
    name: 文字;

    /**
     * Designates a form that is not validated when submitted.
     */
    noValidate: 真假;

    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    target: 文字;

    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): 真假;

    /**
     * Retrieves a form object or an object from an elements collection.
     * @param name Variant of type Number or String that specifies the object or collection to retrieve. If this parameter is a Number, it is the zero-based index of the object. If this parameter is a string, all objects with matching name or id properties are retrieved, and a collection is returned if more than one match is made.
     * @param index Variant of type Number that specifies the zero-based index of the object to retrieve when a collection is returned.
     */
    item(name?: 任意, index?: 任意): 任意;

    /**
     * Retrieves a form object or an object from an elements collection.
     */
    namedItem(name: 文字): 任意;
    reportValidity(): 真假;

    /**
     * Fires when the user resets a form.
     */
    reset(): 无值;

    /**
     * Fires when a FORM is about to be submitted.
     */
    submit(): 无值;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;
    [name: 文字]: 任意;

}
声明 值量 HTMLFormElement: {
    prototype: HTMLFormElement;
    新建(): HTMLFormElement;

};
接口 HTMLFrameElementEventMap 扩展 HTMLElementEventMap {
    "load": Event;

}
接口 HTMLFrameElement 扩展 HTMLElement, GetSVGDocument {

    /**
     * Specifies the properties of a border drawn around an object.
     */
    border: 文字;

    /**
     * Sets or retrieves the border color of the object.
     */
    borderColor: 任意;

    /**
     * Retrieves the document object of the page or frame.
     */
    /** @deprecated */
    只读 contentDocument: Document | 空值;

    /**
     * Retrieves the object of the specified.
     */
    /** @deprecated */
    只读 contentWindow: Window | 空值;

    /**
     * Sets or retrieves whether to display a border for the frame.
     */
    /** @deprecated */
    frameBorder: 文字;

    /**
     * Sets or retrieves the amount of additional space between the frames.
     */
    frameSpacing: 任意;

    /**
     * Sets or retrieves the height of the object.
     */
    height: 文字 | 数字;

    /**
     * Sets or retrieves a URI to a long description of the object.
     */
    /** @deprecated */
    longDesc: 文字;

    /**
     * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.
     */
    /** @deprecated */
    marginHeight: 文字;

    /**
     * Sets or retrieves the left and right margin widths before displaying the text in a frame.
     */
    /** @deprecated */
    marginWidth: 文字;

    /**
     * Sets or retrieves the frame name.
     */
    /** @deprecated */
    name: 文字;

    /**
     * Sets or retrieves whether the user can resize the frame.
     */
    /** @deprecated */
    noResize: 真假;

    /**
     * Sets or retrieves whether the frame can be scrolled.
     */
    /** @deprecated */
    scrolling: 文字;

    /**
     * Sets or retrieves a URL to be loaded by the object.
     */
    /** @deprecated */
    src: 文字;

    /**
     * Sets or retrieves the width of the object.
     */
    width: 文字 | 数字;
    addEventListener<K 扩展 键为 HTMLFrameElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: HTMLFrameElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLFrameElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: HTMLFrameElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLFrameElement: {
    prototype: HTMLFrameElement;
    新建(): HTMLFrameElement;

};
接口 HTMLFrameSetElementEventMap 扩展 HTMLElementEventMap, WindowEventHandlersEventMap {
    "blur": FocusEvent;
    "error": ErrorEvent;
    "focus": FocusEvent;
    "load": Event;
    "orientationchange": Event;
    "resize": UIEvent;
    "scroll": UIEvent;

}
接口 HTMLFrameSetElement 扩展 HTMLElement, WindowEventHandlers {

    /**
     * Sets or retrieves the frame widths of the object.
     */
    /** @deprecated */
    cols: 文字;
    name: 文字;
    onorientationchange: ((this: HTMLFrameSetElement, ev: Event) => 任意) | 空值;
    onresize: ((this: HTMLFrameSetElement, ev: UIEvent) => 任意) | 空值;

    /**
     * Sets or retrieves the frame heights of the object.
     */
    /** @deprecated */
    rows: 文字;
    addEventListener<K 扩展 键为 HTMLFrameSetElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: HTMLFrameSetElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLFrameSetElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: HTMLFrameSetElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLFrameSetElement: {
    prototype: HTMLFrameSetElement;
    新建(): HTMLFrameSetElement;

};
接口 HTMLHRElement 扩展 HTMLElement, DOML2DeprecatedColorProperty, DOML2DeprecatedSizeProperty {

    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: 文字;

    /**
     * Sets or retrieves whether the horizontal rule is drawn with 3-D shading.
     */
    /** @deprecated */
    noShade: 真假;

    /**
     * Sets or retrieves the width of the object.
     */
    /** @deprecated */
    width: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLHRElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLHRElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLHRElement: {
    prototype: HTMLHRElement;
    新建(): HTMLHRElement;

};
接口 HTMLHeadElement 扩展 HTMLElement {

    /** @deprecated */
    profile: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLHeadElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLHeadElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLHeadElement: {
    prototype: HTMLHeadElement;
    新建(): HTMLHeadElement;

};
接口 HTMLHeadingElement 扩展 HTMLElement {

    /**
     * Sets or retrieves a value that indicates the table alignment.
     */
    /** @deprecated */
    align: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLHeadingElement: {
    prototype: HTMLHeadingElement;
    新建(): HTMLHeadingElement;

};
接口 HTMLHtmlElement 扩展 HTMLElement {

    /**
     * Sets or retrieves the DTD version that governs the current document.
     */
    /** @deprecated */
    version: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLHtmlElement: {
    prototype: HTMLHtmlElement;
    新建(): HTMLHtmlElement;

};
接口 HTMLHyperlinkElementUtils {
    hash: 文字;
    host: 文字;
    hostname: 文字;
    href: 文字;
    origin: 文字;
    pathname: 文字;
    port: 文字;
    protocol: 文字;
    search: 文字;
    toString(): 文字;

}
接口 HTMLIFrameElementEventMap 扩展 HTMLElementEventMap {
    "load": Event;

}
接口 HTMLIFrameElement 扩展 HTMLElement, GetSVGDocument {

    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: 文字;
    allowFullscreen: 真假;
    allowPaymentRequest: 真假;

    /**
     * Retrieves the document object of the page or frame.
     */
    只读 contentDocument: Document | 空值;

    /**
     * Retrieves the object of the specified.
     */
    只读 contentWindow: Window | 空值;

    /**
     * Sets or retrieves whether to display a border for the frame.
     */
    /** @deprecated */
    frameBorder: 文字;

    /**
     * Sets or retrieves the height of the object.
     */
    height: 文字;

    /**
     * Sets or retrieves a URI to a long description of the object.
     */
    /** @deprecated */
    longDesc: 文字;

    /**
     * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.
     */
    /** @deprecated */
    marginHeight: 文字;

    /**
     * Sets or retrieves the left and right margin widths before displaying the text in a frame.
     */
    /** @deprecated */
    marginWidth: 文字;

    /**
     * Sets or retrieves the frame name.
     */
    name: 文字;
    只读 sandbox: DOMTokenList;

    /**
     * Sets or retrieves whether the frame can be scrolled.
     */
    /** @deprecated */
    scrolling: 文字;

    /**
     * Sets or retrieves a URL to be loaded by the object.
     */
    src: 文字;

    /**
     * Sets or retrives the content of the page that is to contain.
     */
    srcdoc: 文字;

    /**
     * Sets or retrieves the width of the object.
     */
    width: 文字;
    addEventListener<K 扩展 键为 HTMLIFrameElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLIFrameElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLIFrameElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLIFrameElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLIFrameElement: {
    prototype: HTMLIFrameElement;
    新建(): HTMLIFrameElement;

};
接口 HTMLImageElement 扩展 HTMLElement {

    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: 文字;

    /**
     * Sets or retrieves a text alternative to the graphic.
     */
    alt: 文字;

    /**
     * Specifies the properties of a border drawn around an object.
     */
    /** @deprecated */
    border: 文字;

    /**
     * Retrieves whether the object is fully loaded.
     */
    只读 complete: 真假;
    crossOrigin: 文字 | 空值;
    只读 currentSrc: 文字;
    decoding: "async" | "sync" | "auto";

    /**
     * Sets or retrieves the height of the object.
     */
    height: 数字;

    /**
     * Sets or retrieves the width of the border to draw around the object.
     */
    /** @deprecated */
    hspace: 数字;

    /**
     * Sets or retrieves whether the image is a server-side image map.
     */
    isMap: 真假;

    /**
     * Sets or retrieves a Uniform Resource Identifier (URI) to a long description of the object.
     */
    longDesc: 文字;

    /** @deprecated */
    lowsrc: 文字;

    /**
     * Gets or sets whether the DLNA PlayTo device is available.
     */
    msPlayToDisabled: 真假;
    msPlayToPreferredSourceUri: 文字;

    /**
     * Gets or sets the primary DLNA PlayTo device.
     */
    msPlayToPrimary: 真假;

    /**
     * Gets the source associated with the media element for use by the PlayToManager.
     */
    只读 msPlayToSource: 任意;

    /**
     * Sets or retrieves the name of the object.
     */
    /** @deprecated */
    name: 文字;

    /**
     * The original height of the image resource before sizing.
     */
    只读 naturalHeight: 数字;

    /**
     * The original width of the image resource before sizing.
     */
    只读 naturalWidth: 数字;
    sizes: 文字;

    /**
     * The address or URL of the a media resource that is to be considered.
     */
    src: 文字;
    srcset: 文字;

    /**
     * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
     */
    useMap: 文字;

    /**
     * Sets or retrieves the vertical margin for the object.
     */
    /** @deprecated */
    vspace: 数字;

    /**
     * Sets or retrieves the width of the object.
     */
    width: 数字;
    只读 x: 数字;
    只读 y: 数字;
    msGetAsCastingSource(): 任意;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLImageElement: {
    prototype: HTMLImageElement;
    新建(): HTMLImageElement;

};
接口 HTMLInputElement 扩展 HTMLElement {

    /**
     * Sets or retrieves a comma-separated list of content types.
     */
    accept: 文字;

    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: 文字;

    /**
     * Sets or retrieves a text alternative to the graphic.
     */
    alt: 文字;

    /**
     * Specifies whether autocomplete is applied to an editable text field.
     */
    autocomplete: 文字;

    /**
     * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
     */
    autofocus: 真假;

    /**
     * Sets or retrieves the state of the check box or radio button.
     */
    checked: 真假;

    /**
     * Sets or retrieves the state of the check box or radio button.
     */
    defaultChecked: 真假;

    /**
     * Sets or retrieves the initial contents of the object.
     */
    defaultValue: 文字;
    disabled: 真假;

    /**
     * Returns a FileList object on a file type input object.
     */
    files: FileList | 空值;

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    只读 form: HTMLFormElement | 空值;

    /**
     * Overrides the action attribute (where the data on a form is sent) on the parent form element.
     */
    formAction: 文字;

    /**
     * Used to override the encoding (formEnctype attribute) specified on the form element.
     */
    formEnctype: 文字;

    /**
     * Overrides the submit method attribute previously specified on a form element.
     */
    formMethod: 文字;

    /**
     * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
     */
    formNoValidate: 真假;

    /**
     * Overrides the target attribute on a form element.
     */
    formTarget: 文字;

    /**
     * Sets or retrieves the height of the object.
     */
    height: 数字;
    indeterminate: 真假;

    /**
     * Specifies the ID of a pre-defined datalist of options for an input element.
     */
    只读 list: HTMLElement | 空值;

    /**
     * Defines the maximum acceptable value for an input element with type="number".When used with the min and step attributes, lets you control the range and increment (such as only even numbers) that the user can enter into an input field.
     */
    max: 文字;

    /**
     * Sets or retrieves the maximum number of characters that the user can enter in a text control.
     */
    maxLength: 数字;

    /**
     * Defines the minimum acceptable value for an input element with type="number". When used with the max and step attributes, lets you control the range and increment (such as even numbers only) that the user can enter into an input field.
     */
    min: 文字;
    minLength: 数字;

    /**
     * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.
     */
    multiple: 真假;

    /**
     * Sets or retrieves the name of the object.
     */
    name: 文字;

    /**
     * Gets or sets a string containing a regular expression that the user's input must match.
     */
    pattern: 文字;

    /**
     * Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field.
     */
    placeholder: 文字;
    readOnly: 真假;

    /**
     * When present, marks an element that can't be submitted without a value.
     */
    required: 真假;
    selectionDirection: 文字 | 空值;

    /**
     * Gets or sets the end position or offset of a text selection.
     */
    selectionEnd: 数字 | 空值;

    /**
     * Gets or sets the starting position or offset of a text selection.
     */
    selectionStart: 数字 | 空值;
    size: 数字;

    /**
     * The address or URL of the a media resource that is to be considered.
     */
    src: 文字;

    /**
     * Defines an increment or jump between values that you want to allow the user to enter. When used with the max and min attributes, lets you control the range and increment (for example, allow only even numbers) that the user can enter into an input field.
     */
    step: 文字;

    /**
     * Returns the content type of the object.
     */
    type: 文字;

    /**
     * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
     */
    /** @deprecated */
    useMap: 文字;

    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    只读 validationMessage: 文字;

    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    只读 validity: ValidityState;

    /**
     * Returns the value of the data at the cursor's current position.
     */
    value: 文字;
    valueAsDate: 任意;

    /**
     * Returns the input field value as a number.
     */
    valueAsNumber: 数字;
    webkitdirectory: 真假;

    /**
     * Sets or retrieves the width of the object.
     */
    width: 数字;

    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    只读 willValidate: 真假;

    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): 真假;

    /**
     * Makes the selection equal to the current object.
     */
    select(): 无值;

    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: 文字): 无值;

    /**
     * Sets the start and end positions of a selection in a text field.
     * @param start The offset into the text field for the start of the selection.
     * @param end The offset into the text field for the end of the selection.
     * @param direction The direction in which the selection is performed.
     */
    setSelectionRange(start: 数字, end: 数字, direction?: "forward" | "backward" | "none"): 无值;

    /**
     * Decrements a range input control's value by the value given by the Step attribute. If the optional parameter is used, it will decrement the input control's step value multiplied by the parameter's value.
     * @param n Value to decrement the value by.
     */
    stepDown(n?: 数字): 无值;

    /**
     * Increments a range input control's value by the value given by the Step attribute. If the optional parameter is used, will increment the input control's value by that value.
     * @param n Value to increment the value by.
     */
    stepUp(n?: 数字): 无值;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLInputElement: {
    prototype: HTMLInputElement;
    新建(): HTMLInputElement;

};
接口 HTMLLIElement 扩展 HTMLElement {

    /** @deprecated */
    type: 文字;

    /**
     * Sets or retrieves the value of a list item.
     */
    value: 数字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLLIElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLLIElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLLIElement: {
    prototype: HTMLLIElement;
    新建(): HTMLLIElement;

};
接口 HTMLLabelElement 扩展 HTMLElement {
    只读 control: HTMLInputElement | 空值;

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    只读 form: HTMLFormElement | 空值;

    /**
     * Sets or retrieves the object to which the given label object is assigned.
     */
    htmlFor: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLLabelElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLLabelElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLLabelElement: {
    prototype: HTMLLabelElement;
    新建(): HTMLLabelElement;

};
接口 HTMLLegendElement 扩展 HTMLElement {

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    /** @deprecated */
    align: 文字;

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    只读 form: HTMLFormElement | 空值;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLLegendElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLLegendElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLLegendElement: {
    prototype: HTMLLegendElement;
    新建(): HTMLLegendElement;

};
接口 HTMLLinkElement 扩展 HTMLElement, LinkStyle {

    /**
     * Sets or retrieves the character set used to encode the object.
     */
    /** @deprecated */
    charset: 文字;
    crossOrigin: 文字 | 空值;

    /** @deprecated */
    disabled: 真假;

    /**
     * Sets or retrieves a destination URL or an anchor point.
     */
    href: 文字;

    /**
     * Sets or retrieves the language code of the object.
     */
    hreflang: 文字;
    import?: Document;
    integrity: 文字;

    /**
     * Sets or retrieves the media type.
     */
    media: 文字;

    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     */
    rel: 文字;

    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     */
    /** @deprecated */
    rev: 文字;

    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    /** @deprecated */
    target: 文字;

    /**
     * Sets or retrieves the MIME type of the object.
     */
    type: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLLinkElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLLinkElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLLinkElement: {
    prototype: HTMLLinkElement;
    新建(): HTMLLinkElement;

};
接口 HTMLMainElement 扩展 HTMLElement {
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLMainElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLMainElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLMainElement: {
    prototype: HTMLMainElement;
    新建(): HTMLMainElement;

};
接口 HTMLMapElement 扩展 HTMLElement {

    /**
     * Retrieves a collection of the area objects defined for the given map object.
     */
    只读 areas: HTMLAreasCollection;

    /**
     * Sets or retrieves the name of the object.
     */
    name: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLMapElement: {
    prototype: HTMLMapElement;
    新建(): HTMLMapElement;

};
接口 HTMLMarqueeElementEventMap 扩展 HTMLElementEventMap {
    "bounce": Event;
    "finish": Event;
    "start": Event;

}
接口 HTMLMarqueeElement 扩展 HTMLElement {

    /** @deprecated */
    behavior: 文字;

    /** @deprecated */
    bgColor: 文字;

    /** @deprecated */
    direction: 文字;

    /** @deprecated */
    height: 文字;

    /** @deprecated */
    hspace: 数字;

    /** @deprecated */
    loop: 数字;

    /** @deprecated */
    onbounce: ((this: HTMLMarqueeElement, ev: Event) => 任意) | 空值;

    /** @deprecated */
    onfinish: ((this: HTMLMarqueeElement, ev: Event) => 任意) | 空值;

    /** @deprecated */
    onstart: ((this: HTMLMarqueeElement, ev: Event) => 任意) | 空值;

    /** @deprecated */
    scrollAmount: 数字;

    /** @deprecated */
    scrollDelay: 数字;

    /** @deprecated */
    trueSpeed: 真假;

    /** @deprecated */
    vspace: 数字;

    /** @deprecated */
    width: 文字;

    /** @deprecated */
    start(): 无值;

    /** @deprecated */
    stop(): 无值;
    addEventListener<K 扩展 键为 HTMLMarqueeElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLMarqueeElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLMarqueeElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLMarqueeElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLMarqueeElement: {
    prototype: HTMLMarqueeElement;
    新建(): HTMLMarqueeElement;

};
接口 HTMLMediaElementEventMap 扩展 HTMLElementEventMap {
    "encrypted": MediaEncryptedEvent;
    "msneedkey": Event;

}
接口 HTMLMediaElement 扩展 HTMLElement {

    /**
     * Returns an AudioTrackList object with the audio tracks for a given video element.
     */
    只读 audioTracks: AudioTrackList;

    /**
     * Gets or sets a value that indicates whether to start playing the media automatically.
     */
    autoplay: 真假;

    /**
     * Gets a collection of buffered time ranges.
     */
    只读 buffered: TimeRanges;

    /**
     * Gets or sets a flag that indicates whether the client provides a set of controls for the media (in case the developer does not include controls for the player).
     */
    controls: 真假;
    crossOrigin: 文字 | 空值;

    /**
     * Gets the address or URL of the current media resource that is selected by IHTMLMediaElement.
     */
    只读 currentSrc: 文字;

    /**
     * Gets or sets the current playback position, in seconds.
     */
    currentTime: 数字;
    defaultMuted: 真假;

    /**
     * Gets or sets the default playback rate when the user is not using fast forward or reverse for a video or audio resource.
     */
    defaultPlaybackRate: 数字;

    /**
     * Returns the duration in seconds of the current media resource. A NaN value is returned if duration is not available, or Infinity if the media resource is streaming.
     */
    只读 duration: 数字;

    /**
     * Gets information about whether the playback has ended or not.
     */
    只读 ended: 真假;

    /**
     * Returns an object representing the current error state of the audio or video element.
     */
    只读 error: MediaError | 空值;

    /**
     * Gets or sets a flag to specify whether playback should restart after it completes.
     */
    loop: 真假;
    只读 mediaKeys: MediaKeys | 空值;

    /**
     * Specifies the purpose of the audio or video media, such as background audio or alerts.
     */
    msAudioCategory: 文字;

    /**
     * Specifies the output device id that the audio will be sent to.
     */
    msAudioDeviceType: 文字;
    只读 msGraphicsTrustStatus: MSGraphicsTrust;

    /**
     * Gets the MSMediaKeys object, which is used for decrypting media data, that is associated with this media element.
     */
    /** @deprecated */
    只读 msKeys: MSMediaKeys;

    /**
     * Gets or sets whether the DLNA PlayTo device is available.
     */
    msPlayToDisabled: 真假;

    /**
     * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.
     */
    msPlayToPreferredSourceUri: 文字;

    /**
     * Gets or sets the primary DLNA PlayTo device.
     */
    msPlayToPrimary: 真假;

    /**
     * Gets the source associated with the media element for use by the PlayToManager.
     */
    只读 msPlayToSource: 任意;

    /**
     * Specifies whether or not to enable low-latency playback on the media element.
     */
    msRealTime: 真假;

    /**
     * Gets or sets a flag that indicates whether the audio (either audio or the audio track on video media) is muted.
     */
    muted: 真假;

    /**
     * Gets the current network activity for the element.
     */
    只读 networkState: 数字;
    onencrypted: ((this: HTMLMediaElement, ev: MediaEncryptedEvent) => 任意) | 空值;

    /** @deprecated */
    onmsneedkey: ((this: HTMLMediaElement, ev: Event) => 任意) | 空值;

    /**
     * Gets a flag that specifies whether playback is paused.
     */
    只读 paused: 真假;

    /**
     * Gets or sets the current rate of speed for the media resource to play. This speed is expressed as a multiple of the normal speed of the media resource.
     */
    playbackRate: 数字;

    /**
     * Gets TimeRanges for the current media resource that has been played.
     */
    只读 played: TimeRanges;

    /**
     * Gets or sets the current playback position, in seconds.
     */
    preload: 文字;
    只读 readyState: 数字;

    /**
     * Returns a TimeRanges object that represents the ranges of the current media resource that can be seeked.
     */
    只读 seekable: TimeRanges;

    /**
     * Gets a flag that indicates whether the the client is currently moving to a new playback position in the media resource.
     */
    只读 seeking: 真假;

    /**
     * The address or URL of the a media resource that is to be considered.
     */
    src: 文字;
    srcObject: MediaStream | MediaSource | Blob | 空值;
    只读 textTracks: TextTrackList;
    只读 videoTracks: VideoTrackList;

    /**
     * Gets or sets the volume level for audio portions of the media element.
     */
    volume: 数字;
    addTextTrack(kind: TextTrackKind, label?: 文字, language?: 文字): TextTrack;

    /**
     * Returns a string that specifies whether the client can play a given media resource type.
     */
    canPlayType(type: 文字): CanPlayTypeResult;

    /**
     * Resets the audio or video object and loads a new media resource.
     */
    load(): 无值;

    /**
     * Clears all effects from the media pipeline.
     */
    msClearEffects(): 无值;
    msGetAsCastingSource(): 任意;

    /**
     * Inserts the specified audio effect into media pipeline.
     */
    msInsertAudioEffect(activatableClassId: 文字, effectRequired: 真假, config?: 任意): 无值;

    /** @deprecated */
    msSetMediaKeys(mediaKeys: MSMediaKeys): 无值;

    /**
     * Specifies the media protection manager for a given media pipeline.
     */
    msSetMediaProtectionManager(mediaProtectionManager?: 任意): 无值;

    /**
     * Pauses the current playback and sets paused to TRUE. This can be used to test whether the media is playing or paused. You can also use the pause or play events to tell whether the media is playing or not.
     */
    pause(): 无值;

    /**
     * Loads and starts playback of a media resource.
     */
    //@@{ 预设_:Promise }
    play(): 预设_<无值>;
    //@@{ 预设_:Promise }
    setMediaKeys(mediaKeys: MediaKeys | 空值): 预设_<无值>;
    只读 HAVE_CURRENT_DATA: 数字;
    只读 HAVE_ENOUGH_DATA: 数字;
    只读 HAVE_FUTURE_DATA: 数字;
    只读 HAVE_METADATA: 数字;
    只读 HAVE_NOTHING: 数字;
    只读 NETWORK_EMPTY: 数字;
    只读 NETWORK_IDLE: 数字;
    只读 NETWORK_LOADING: 数字;
    只读 NETWORK_NO_SOURCE: 数字;
    addEventListener<K 扩展 键为 HTMLMediaElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: HTMLMediaElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLMediaElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: HTMLMediaElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLMediaElement: {
    prototype: HTMLMediaElement;
    新建(): HTMLMediaElement;
    只读 HAVE_CURRENT_DATA: 数字;
    只读 HAVE_ENOUGH_DATA: 数字;
    只读 HAVE_FUTURE_DATA: 数字;
    只读 HAVE_METADATA: 数字;
    只读 HAVE_NOTHING: 数字;
    只读 NETWORK_EMPTY: 数字;
    只读 NETWORK_IDLE: 数字;
    只读 NETWORK_LOADING: 数字;
    只读 NETWORK_NO_SOURCE: 数字;

};
接口 HTMLMenuElement 扩展 HTMLElement {

    /** @deprecated */
    compact: 真假;
    type: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLMenuElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLMenuElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLMenuElement: {
    prototype: HTMLMenuElement;
    新建(): HTMLMenuElement;

};
接口 HTMLMetaElement 扩展 HTMLElement {

    /**
     * Sets or retrieves the character set used to encode the object.
     */
    /** @deprecated */
    charset: 文字;

    /**
     * Gets or sets meta-information to associate with httpEquiv or name.
     */
    content: 文字;

    /**
     * Gets or sets information used to bind the value of a content attribute of a meta element to an HTTP response header.
     */
    httpEquiv: 文字;

    /**
     * Sets or retrieves the value specified in the content attribute of the meta object.
     */
    name: 文字;

    /**
     * Sets or retrieves a scheme to be used in interpreting the value of a property specified for the object.
     */
    /** @deprecated */
    scheme: 文字;

    /**
     * Sets or retrieves the URL property that will be loaded after the specified time has elapsed.
     */
    /** @deprecated */
    url: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLMetaElement: {
    prototype: HTMLMetaElement;
    新建(): HTMLMetaElement;

};
接口 HTMLMeterElement 扩展 HTMLElement {
    high: 数字;
    low: 数字;
    max: 数字;
    min: 数字;
    optimum: 数字;
    value: 数字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLMeterElement: {
    prototype: HTMLMeterElement;
    新建(): HTMLMeterElement;

};
接口 HTMLModElement 扩展 HTMLElement {

    /**
     * Sets or retrieves reference information about the object.
     */
    cite: 文字;

    /**
     * Sets or retrieves the date and time of a modification to the object.
     */
    dateTime: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLModElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLModElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLModElement: {
    prototype: HTMLModElement;
    新建(): HTMLModElement;

};
接口 HTMLOListElement 扩展 HTMLElement {

    /** @deprecated */
    compact: 真假;

    /**
     * The starting number.
     */
    start: 数字;
    type: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLOListElement: {
    prototype: HTMLOListElement;
    新建(): HTMLOListElement;

};
接口 HTMLObjectElement 扩展 HTMLElement, GetSVGDocument {

    /**
     * Retrieves a string of the URL where the object tag can be found. This is often the href of the document that the object is in, or the value set by a base element.
     */
    只读 BaseHref: 文字;

    /** @deprecated */
    align: 文字;

    /**
     * Sets or retrieves a character string that can be used to implement your own archive functionality for the object.
     */
    /** @deprecated */
    archive: 文字;

    /** @deprecated */
    border: 文字;

    /**
     * Sets or retrieves the URL of the file containing the compiled Java class.
     */
    /** @deprecated */
    code: 文字;

    /**
     * Sets or retrieves the URL of the component.
     */
    /** @deprecated */
    codeBase: 文字;

    /**
     * Sets or retrieves the Internet media type for the code associated with the object.
     */
    /** @deprecated */
    codeType: 文字;

    /**
     * Retrieves the document object of the page or frame.
     */
    只读 contentDocument: Document | 空值;

    /**
     * Sets or retrieves the URL that references the data of the object.
     */
    data: 文字;

    /** @deprecated */
    declare: 真假;

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    只读 form: HTMLFormElement | 空值;

    /**
     * Sets or retrieves the height of the object.
     */
    height: 文字;

    /** @deprecated */
    hspace: 数字;

    /**
     * Gets or sets whether the DLNA PlayTo device is available.
     */
    msPlayToDisabled: 真假;

    /**
     * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.
     */
    msPlayToPreferredSourceUri: 文字;

    /**
     * Gets or sets the primary DLNA PlayTo device.
     */
    msPlayToPrimary: 真假;

    /**
     * Gets the source associated with the media element for use by the PlayToManager.
     */
    只读 msPlayToSource: 任意;

    /**
     * Sets or retrieves the name of the object.
     */
    name: 文字;
    只读 readyState: 数字;

    /**
     * Sets or retrieves a message to be displayed while an object is loading.
     */
    /** @deprecated */
    standby: 文字;

    /**
     * Sets or retrieves the MIME type of the object.
     */
    type: 文字;
    typemustmatch: 真假;

    /**
     * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
     */
    useMap: 文字;

    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    只读 validationMessage: 文字;

    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    只读 validity: ValidityState;

    /** @deprecated */
    vspace: 数字;

    /**
     * Sets or retrieves the width of the object.
     */
    width: 文字;

    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    只读 willValidate: 真假;

    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): 真假;

    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: 文字): 无值;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLObjectElement: {
    prototype: HTMLObjectElement;
    新建(): HTMLObjectElement;

};
接口 HTMLOptGroupElement 扩展 HTMLElement {
    disabled: 真假;

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    只读 form: HTMLFormElement | 空值;

    /**
     * Sets or retrieves a value that you can use to implement your own label functionality for the object.
     */
    label: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLOptGroupElement: {
    prototype: HTMLOptGroupElement;
    新建(): HTMLOptGroupElement;

};
接口 HTMLOptionElement 扩展 HTMLElement {

    /**
     * Sets or retrieves the status of an option.
     */
    defaultSelected: 真假;
    disabled: 真假;

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    只读 form: HTMLFormElement | 空值;

    /**
     * Sets or retrieves the ordinal position of an option in a list box.
     */
    只读 index: 数字;

    /**
     * Sets or retrieves a value that you can use to implement your own label functionality for the object.
     */
    label: 文字;

    /**
     * Sets or retrieves whether the option in the list box is the default item.
     */
    selected: 真假;

    /**
     * Sets or retrieves the text string specified by the option tag.
     */
    text: 文字;

    /**
     * Sets or retrieves the value which is returned to the server when the form control is submitted.
     */
    value: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLOptionElement: {
    prototype: HTMLOptionElement;
    新建(): HTMLOptionElement;

};
接口 HTMLOptionsCollection 扩展 HTMLCollectionOf<HTMLOptionElement> {
    length: 数字;
    selectedIndex: 数字;
    add(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | 数字 | 空值): 无值;
    remove(index: 数字): 无值;

}
声明 值量 HTMLOptionsCollection: {
    prototype: HTMLOptionsCollection;
    新建(): HTMLOptionsCollection;

};
接口 HTMLOutputElement 扩展 HTMLElement {
    defaultValue: 文字;
    只读 form: HTMLFormElement | 空值;
    只读 htmlFor: DOMTokenList;
    name: 文字;
    只读 type: 文字;
    只读 validationMessage: 文字;
    只读 validity: ValidityState;
    value: 文字;
    只读 willValidate: 真假;
    checkValidity(): 真假;
    reportValidity(): 真假;
    setCustomValidity(error: 文字): 无值;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLOutputElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLOutputElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLOutputElement: {
    prototype: HTMLOutputElement;
    新建(): HTMLOutputElement;

};
接口 HTMLParagraphElement 扩展 HTMLElement {

    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: 文字;
    clear: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLParagraphElement: {
    prototype: HTMLParagraphElement;
    新建(): HTMLParagraphElement;

};
接口 HTMLParamElement 扩展 HTMLElement {

    /**
     * Sets or retrieves the name of an input parameter for an element.
     */
    name: 文字;

    /**
     * Sets or retrieves the content type of the resource designated by the value attribute.
     */
    /** @deprecated */
    type: 文字;

    /**
     * Sets or retrieves the value of an input parameter for an element.
     */
    value: 文字;

    /**
     * Sets or retrieves the data type of the value attribute.
     */
    /** @deprecated */
    valueType: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLParamElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLParamElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLParamElement: {
    prototype: HTMLParamElement;
    新建(): HTMLParamElement;

};
接口 HTMLPictureElement 扩展 HTMLElement {
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLPictureElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLPictureElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLPictureElement: {
    prototype: HTMLPictureElement;
    新建(): HTMLPictureElement;

};
接口 HTMLPreElement 扩展 HTMLElement {

    /**
     * Sets or gets a value that you can use to implement your own width functionality for the object.
     */
    /** @deprecated */
    width: 数字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLPreElement: {
    prototype: HTMLPreElement;
    新建(): HTMLPreElement;

};
接口 HTMLProgressElement 扩展 HTMLElement {

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    只读 form: HTMLFormElement | 空值;

    /**
     * Defines the maximum, or "done" value for a progress element.
     */
    max: 数字;

    /**
     * Returns the quotient of value/max when the value attribute is set (determinate progress bar), or -1 when the value attribute is missing (indeterminate progress bar).
     */
    只读 position: 数字;

    /**
     * Sets or gets the current value of a progress element. The value must be a non-negative number between 0 and the max value.
     */
    value: 数字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLProgressElement: {
    prototype: HTMLProgressElement;
    新建(): HTMLProgressElement;

};
接口 HTMLQuoteElement 扩展 HTMLElement {

    /**
     * Sets or retrieves reference information about the object.
     */
    cite: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLQuoteElement: {
    prototype: HTMLQuoteElement;
    新建(): HTMLQuoteElement;

};
接口 HTMLScriptElement 扩展 HTMLElement {
    async: 真假;

    /**
     * Sets or retrieves the character set used to encode the object.
     */
    charset: 文字;
    crossOrigin: 文字 | 空值;

    /**
     * Sets or retrieves the status of the script.
     */
    defer: 真假;

    /**
     * Sets or retrieves the event for which the script is written.
     */
    /** @deprecated */
    event: 文字;

    /**
     * Sets or retrieves the object that is bound to the event script.
     */
    /** @deprecated */
    htmlFor: 文字;
    integrity: 文字;
    noModule: 真假;

    /**
     * Retrieves the URL to an external file that contains the source code or data.
     */
    src: 文字;

    /**
     * Retrieves or sets the text of the object as a string.
     */
    text: 文字;

    /**
     * Sets or retrieves the MIME type for the associated scripting engine.
     */
    type: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLScriptElement: {
    prototype: HTMLScriptElement;
    新建(): HTMLScriptElement;

};
接口 HTMLSelectElement 扩展 HTMLElement {

    /**
     * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
     */
    autofocus: 真假;
    disabled: 真假;

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    只读 form: HTMLFormElement | 空值;

    /**
     * Sets or retrieves the number of objects in a collection.
     */
    length: 数字;

    /**
     * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.
     */
    multiple: 真假;

    /**
     * Sets or retrieves the name of the object.
     */
    name: 文字;
    只读 options: HTMLOptionsCollection;

    /**
     * When present, marks an element that can't be submitted without a value.
     */
    required: 真假;

    /**
     * Sets or retrieves the index of the selected option in a select object.
     */
    selectedIndex: 数字;
    只读 selectedOptions: HTMLCollectionOf<HTMLOptionElement>;

    /**
     * Sets or retrieves the number of rows in the list box.
     */
    size: 数字;

    /**
     * Retrieves the type of select control based on the value of the MULTIPLE attribute.
     */
    只读 type: 文字;

    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    只读 validationMessage: 文字;

    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    只读 validity: ValidityState;

    /**
     * Sets or retrieves the value which is returned to the server when the form control is submitted.
     */
    value: 文字;

    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    只读 willValidate: 真假;

    /**
     * Adds an element to the areas, controlRange, or options collection.
     * @param element Variant of type Number that specifies the index position in the collection where the element is placed. If no value is given, the method places the element at the end of the collection.
     * @param before Variant of type Object that specifies an element to insert before, or null to append the object to the collection.
     */
    add(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | 数字 | 空值): 无值;

    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): 真假;

    /**
     * Retrieves a select object or an object from an options collection.
     * @param name Variant of type Number or String that specifies the object or collection to retrieve. If this parameter is an integer, it is the zero-based index of the object. If this parameter is a string, all objects with matching name or id properties are retrieved, and a collection is returned if more than one match is made.
     * @param index Variant of type Number that specifies the zero-based index of the object to retrieve when a collection is returned.
     */
    item(name?: 任意, index?: 任意): Element | 空值;

    /**
     * Retrieves a select object or an object from an options collection.
     * @param namedItem A String that specifies the name or id property of the object to retrieve. A collection is returned if more than one match is made.
     */
    namedItem(name: 文字): 任意;

    /**
     * Removes an element from the collection.
     * @param index Number that specifies the zero-based index of the element to remove from the collection.
     */
    remove(index?: 数字): 无值;

    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: 文字): 无值;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;
    [name: 文字]: 任意;

}
声明 值量 HTMLSelectElement: {
    prototype: HTMLSelectElement;
    新建(): HTMLSelectElement;

};
接口 HTMLSlotElement 扩展 HTMLElement {
    name: 文字;
    assignedNodes(options?: AssignedNodesOptions): Node[];
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
接口 HTMLSourceElement 扩展 HTMLElement {

    /**
     * Gets or sets the intended media type of the media source.
     */
    media: 文字;

    /** @deprecated */
    msKeySystem: 文字;
    sizes: 文字;

    /**
     * The address or URL of the a media resource that is to be considered.
     */
    src: 文字;
    srcset: 文字;

    /**
     * Gets or sets the MIME type of a media resource.
     */
    type: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLSourceElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLSourceElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLSourceElement: {
    prototype: HTMLSourceElement;
    新建(): HTMLSourceElement;

};
接口 HTMLSpanElement 扩展 HTMLElement {
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLSpanElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLSpanElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLSpanElement: {
    prototype: HTMLSpanElement;
    新建(): HTMLSpanElement;

};
接口 HTMLStyleElement 扩展 HTMLElement, LinkStyle {

    /** @deprecated */
    disabled: 真假;

    /**
     * Sets or retrieves the media type.
     */
    media: 文字;

    /**
     * Retrieves the CSS language in which the style sheet is written.
     */
    type: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLStyleElement: {
    prototype: HTMLStyleElement;
    新建(): HTMLStyleElement;

};
接口 HTMLSummaryElement 扩展 HTMLElement {
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLSummaryElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLSummaryElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLSummaryElement: {
    prototype: HTMLSummaryElement;
    新建(): HTMLSummaryElement;

};
接口 HTMLTableCaptionElement 扩展 HTMLElement {

    /**
     * Sets or retrieves the alignment of the caption or legend.
     */
    /** @deprecated */
    align: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLTableCaptionElement: {
    prototype: HTMLTableCaptionElement;
    新建(): HTMLTableCaptionElement;

};
接口 HTMLTableCellElement 扩展 HTMLElement {

    /**
     * Sets or retrieves abbreviated text for the object.
     */
    abbr: 文字;

    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: 文字;

    /**
     * Sets or retrieves a comma-delimited list of conceptual categories associated with the object.
     */
    /** @deprecated */
    axis: 文字;

    /** @deprecated */
    bgColor: 文字;

    /**
     * Retrieves the position of the object in the cells collection of a row.
     */
    只读 cellIndex: 数字;

    /** @deprecated */
    ch: 文字;

    /** @deprecated */
    chOff: 文字;

    /**
     * Sets or retrieves the number columns in the table that the object should span.
     */
    colSpan: 数字;

    /**
     * Sets or retrieves a list of header cells that provide information for the object.
     */
    headers: 文字;

    /**
     * Sets or retrieves the height of the object.
     */
    /** @deprecated */
    height: 文字;

    /**
     * Sets or retrieves whether the browser automatically performs wordwrap.
     */
    /** @deprecated */
    noWrap: 真假;

    /**
     * Sets or retrieves how many rows in a table the cell should span.
     */
    rowSpan: 数字;

    /**
     * Sets or retrieves the group of cells in a table to which the object's information applies.
     */
    scope: 文字;

    /** @deprecated */
    vAlign: 文字;

    /**
     * Sets or retrieves the width of the object.
     */
    /** @deprecated */
    width: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLTableCellElement: {
    prototype: HTMLTableCellElement;
    新建(): HTMLTableCellElement;

};
接口 HTMLTableColElement 扩展 HTMLElement {

    /**
     * Sets or retrieves the alignment of the object relative to the display or table.
     */
    /** @deprecated */
    align: 文字;

    /** @deprecated */
    ch: 文字;

    /** @deprecated */
    chOff: 文字;

    /**
     * Sets or retrieves the number of columns in the group.
     */
    span: 数字;

    /** @deprecated */
    vAlign: 文字;

    /**
     * Sets or retrieves the width of the object.
     */
    /** @deprecated */
    width: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTableColElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTableColElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLTableColElement: {
    prototype: HTMLTableColElement;
    新建(): HTMLTableColElement;

};
接口 HTMLTableDataCellElement 扩展 HTMLTableCellElement {
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTableDataCellElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTableDataCellElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLTableDataCellElement: {
    prototype: HTMLTableDataCellElement;
    新建(): HTMLTableDataCellElement;

};
接口 HTMLTableElement 扩展 HTMLElement {

    /**
     * Sets or retrieves a value that indicates the table alignment.
     */
    /** @deprecated */
    align: 文字;

    /** @deprecated */
    bgColor: 文字;

    /**
     * Sets or retrieves the width of the border to draw around the object.
     */
    /** @deprecated */
    border: 文字;

    /**
     * Retrieves the caption object of a table.
     */
    caption: HTMLTableCaptionElement | 空值;

    /**
     * Sets or retrieves the amount of space between the border of the cell and the content of the cell.
     */
    /** @deprecated */
    cellPadding: 文字;

    /**
     * Sets or retrieves the amount of space between cells in a table.
     */
    /** @deprecated */
    cellSpacing: 文字;

    /**
     * Sets or retrieves the way the border frame around the table is displayed.
     */
    /** @deprecated */
    frame: 文字;

    /**
     * Sets or retrieves the number of horizontal rows contained in the object.
     */
    只读 rows: HTMLCollectionOf<HTMLTableRowElement>;

    /**
     * Sets or retrieves which dividing lines (inner borders) are displayed.
     */
    /** @deprecated */
    rules: 文字;

    /**
     * Sets or retrieves a description and/or structure of the object.
     */
    /** @deprecated */
    summary: 文字;

    /**
     * Retrieves a collection of all tBody objects in the table. Objects in this collection are in source order.
     */
    只读 tBodies: HTMLCollectionOf<HTMLTableSectionElement>;

    /**
     * Retrieves the tFoot object of the table.
     */
    tFoot: HTMLTableSectionElement | 空值;

    /**
     * Retrieves the tHead object of the table.
     */
    tHead: HTMLTableSectionElement | 空值;

    /**
     * Sets or retrieves the width of the object.
     */
    /** @deprecated */
    width: 文字;

    /**
     * Creates an empty caption element in the table.
     */
    createCaption(): HTMLTableCaptionElement;

    /**
     * Creates an empty tBody element in the table.
     */
    createTBody(): HTMLTableSectionElement;

    /**
     * Creates an empty tFoot element in the table.
     */
    createTFoot(): HTMLTableSectionElement;

    /**
     * Returns the tHead element object if successful, or null otherwise.
     */
    createTHead(): HTMLTableSectionElement;

    /**
     * Deletes the caption element and its contents from the table.
     */
    deleteCaption(): 无值;

    /**
     * Removes the specified row (tr) from the element and from the rows collection.
     * @param index Number that specifies the zero-based position in the rows collection of the row to remove.
     */
    deleteRow(index?: 数字): 无值;

    /**
     * Deletes the tFoot element and its contents from the table.
     */
    deleteTFoot(): 无值;

    /**
     * Deletes the tHead element and its contents from the table.
     */
    deleteTHead(): 无值;

    /**
     * Creates a new row (tr) in the table, and adds the row to the rows collection.
     * @param index Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.
     */
    insertRow(index?: 数字): HTMLTableRowElement;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTableElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTableElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLTableElement: {
    prototype: HTMLTableElement;
    新建(): HTMLTableElement;

};
接口 HTMLTableHeaderCellElement 扩展 HTMLTableCellElement {
    scope: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTableHeaderCellElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTableHeaderCellElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLTableHeaderCellElement: {
    prototype: HTMLTableHeaderCellElement;
    新建(): HTMLTableHeaderCellElement;

};
接口 HTMLTableRowElement 扩展 HTMLElement {

    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: 文字;

    /** @deprecated */
    bgColor: 文字;

    /**
     * Retrieves a collection of all cells in the table row.
     */
    只读 cells: HTMLCollectionOf<HTMLTableDataCellElement | HTMLTableHeaderCellElement>;

    /** @deprecated */
    ch: 文字;

    /** @deprecated */
    chOff: 文字;

    /**
     * Retrieves the position of the object in the rows collection for the table.
     */
    只读 rowIndex: 数字;

    /**
     * Retrieves the position of the object in the collection.
     */
    只读 sectionRowIndex: 数字;

    /** @deprecated */
    vAlign: 文字;

    /**
     * Removes the specified cell from the table row, as well as from the cells collection.
     * @param index Number that specifies the zero-based position of the cell to remove from the table row. If no value is provided, the last cell in the cells collection is deleted.
     */
    deleteCell(index?: 数字): 无值;

    /**
     * Creates a new cell in the table row, and adds the cell to the cells collection.
     * @param index Number that specifies where to insert the cell in the tr. The default value is -1, which appends the new cell to the end of the cells collection.
     */
    insertCell(index?: 数字): HTMLTableDataCellElement;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLTableRowElement: {
    prototype: HTMLTableRowElement;
    新建(): HTMLTableRowElement;

};
接口 HTMLTableSectionElement 扩展 HTMLElement {

    /**
     * Sets or retrieves a value that indicates the table alignment.
     */
    /** @deprecated */
    align: 文字;

    /** @deprecated */
    ch: 文字;

    /** @deprecated */
    chOff: 文字;

    /**
     * Sets or retrieves the number of horizontal rows contained in the object.
     */
    只读 rows: HTMLCollectionOf<HTMLTableRowElement>;

    /** @deprecated */
    vAlign: 文字;

    /**
     * Removes the specified row (tr) from the element and from the rows collection.
     * @param index Number that specifies the zero-based position in the rows collection of the row to remove.
     */
    deleteRow(index?: 数字): 无值;

    /**
     * Creates a new row (tr) in the table, and adds the row to the rows collection.
     * @param index Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.
     */
    insertRow(index?: 数字): HTMLTableRowElement;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLTableSectionElement: {
    prototype: HTMLTableSectionElement;
    新建(): HTMLTableSectionElement;

};
接口 HTMLTemplateElement 扩展 HTMLElement {
    只读 content: DocumentFragment;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLTemplateElement: {
    prototype: HTMLTemplateElement;
    新建(): HTMLTemplateElement;

};
接口 HTMLTextAreaElement 扩展 HTMLElement {

    /**
     * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
     */
    autofocus: 真假;

    /**
     * Sets or retrieves the width of the object.
     */
    cols: 数字;

    /**
     * Sets or retrieves the initial contents of the object.
     */
    defaultValue: 文字;
    disabled: 真假;

    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    只读 form: HTMLFormElement | 空值;

    /**
     * Sets or retrieves the maximum number of characters that the user can enter in a text control.
     */
    maxLength: 数字;
    minLength: 数字;

    /**
     * Sets or retrieves the name of the object.
     */
    name: 文字;

    /**
     * Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field.
     */
    placeholder: 文字;

    /**
     * Sets or retrieves the value indicated whether the content of the object is read-only.
     */
    readOnly: 真假;

    /**
     * When present, marks an element that can't be submitted without a value.
     */
    required: 真假;

    /**
     * Sets or retrieves the number of horizontal rows contained in the object.
     */
    rows: 数字;

    /**
     * Gets or sets the end position or offset of a text selection.
     */
    selectionEnd: 数字;

    /**
     * Gets or sets the starting position or offset of a text selection.
     */
    selectionStart: 数字;

    /**
     * Retrieves the type of control.
     */
    只读 type: 文字;

    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    只读 validationMessage: 文字;

    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    只读 validity: ValidityState;

    /**
     * Retrieves or sets the text in the entry field of the textArea element.
     */
    value: 文字;

    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    只读 willValidate: 真假;

    /**
     * Sets or retrieves how to handle wordwrapping in the object.
     */
    wrap: 文字;

    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): 真假;

    /**
     * Highlights the input area of a form element.
     */
    select(): 无值;

    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: 文字): 无值;

    /**
     * Sets the start and end positions of a selection in a text field.
     * @param start The offset into the text field for the start of the selection.
     * @param end The offset into the text field for the end of the selection.
     * @param direction The direction in which the selection is performed.
     */
    setSelectionRange(start: 数字, end: 数字, direction?: "forward" | "backward" | "none"): 无值;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLTextAreaElement: {
    prototype: HTMLTextAreaElement;
    新建(): HTMLTextAreaElement;

};
接口 HTMLTimeElement 扩展 HTMLElement {
    dateTime: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTimeElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTimeElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLTimeElement: {
    prototype: HTMLTimeElement;
    新建(): HTMLTimeElement;

};
接口 HTMLTitleElement 扩展 HTMLElement {

    /**
     * Retrieves or sets the text of the object as a string.
     */
    text: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLTitleElement: {
    prototype: HTMLTitleElement;
    新建(): HTMLTitleElement;

};
接口 HTMLTrackElement 扩展 HTMLElement {
    default: 真假;
    kind: 文字;
    label: 文字;
    只读 readyState: 数字;
    src: 文字;
    srclang: 文字;
    只读 track: TextTrack;
    只读 ERROR: 数字;
    只读 LOADED: 数字;
    只读 LOADING: 数字;
    只读 NONE: 数字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTrackElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLTrackElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLTrackElement: {
    prototype: HTMLTrackElement;
    新建(): HTMLTrackElement;
    只读 ERROR: 数字;
    只读 LOADED: 数字;
    只读 LOADING: 数字;
    只读 NONE: 数字;

};
接口 HTMLUListElement 扩展 HTMLElement {

    /** @deprecated */
    compact: 真假;

    /** @deprecated */
    type: 文字;
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLUListElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLUListElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLUListElement: {
    prototype: HTMLUListElement;
    新建(): HTMLUListElement;

};
接口 HTMLUnknownElement 扩展 HTMLElement {
    addEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLElementEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: HTMLElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLUnknownElement: {
    prototype: HTMLUnknownElement;
    新建(): HTMLUnknownElement;

};
接口 HTMLVideoElementEventMap 扩展 HTMLMediaElementEventMap {
    "MSVideoFormatChanged": Event;
    "MSVideoFrameStepCompleted": Event;
    "MSVideoOptimalLayoutChanged": Event;

}
接口 HTMLVideoElement 扩展 HTMLMediaElement {

    /**
     * Gets or sets the height of the video element.
     */
    height: 数字;
    msHorizontalMirror: 真假;
    只读 msIsLayoutOptimalForPlayback: 真假;
    只读 msIsStereo3D: 真假;
    msStereo3DPackingMode: 文字;
    msStereo3DRenderMode: 文字;
    msZoom: 真假;
    onMSVideoFormatChanged: ((this: HTMLVideoElement, ev: Event) => 任意) | 空值;
    onMSVideoFrameStepCompleted: ((this: HTMLVideoElement, ev: Event) => 任意) | 空值;
    onMSVideoOptimalLayoutChanged: ((this: HTMLVideoElement, ev: Event) => 任意) | 空值;

    /**
     * Gets or sets a URL of an image to display, for example, like a movie poster. This can be a still frame from the video, or another image if no video data is available.
     */
    poster: 文字;

    /**
     * Gets the intrinsic height of a video in CSS pixels, or zero if the dimensions are not known.
     */
    只读 videoHeight: 数字;

    /**
     * Gets the intrinsic width of a video in CSS pixels, or zero if the dimensions are not known.
     */
    只读 videoWidth: 数字;
    只读 webkitDisplayingFullscreen: 真假;
    只读 webkitSupportsFullscreen: 真假;

    /**
     * Gets or sets the width of the video element.
     */
    width: 数字;
    getVideoPlaybackQuality(): VideoPlaybackQuality;
    msFrameStep(forward: 真假): 无值;
    msInsertVideoEffect(activatableClassId: 文字, effectRequired: 真假, config?: 任意): 无值;
    msSetVideoRectangle(left: 数字, top: 数字, right: 数字, bottom: 数字): 无值;
    webkitEnterFullScreen(): 无值;
    webkitEnterFullscreen(): 无值;
    webkitExitFullScreen(): 无值;
    webkitExitFullscreen(): 无值;
    addEventListener<K 扩展 键为 HTMLVideoElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLVideoElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 HTMLVideoElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLVideoElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 HTMLVideoElement: {
    prototype: HTMLVideoElement;
    新建(): HTMLVideoElement;

};
接口 HTMLegendElement {
    只读 form: HTMLFormElement | 空值;

}
声明 值量 HTMLegendElement: {
    prototype: HTMLegendElement;
    新建(): HTMLegendElement;

};
接口 HashChangeEvent 扩展 Event {
    只读 newURL: 文字;
    只读 oldURL: 文字;

}
声明 值量 HashChangeEvent: {
    prototype: HashChangeEvent;
    新建(type: 文字, eventInitDict?: HashChangeEventInit): HashChangeEvent;

};
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
接口 History {
    只读 length: 数字;
    scrollRestoration: ScrollRestoration;
    只读 state: 任意;
    back(distance?: 任意): 无值;
    forward(distance?: 任意): 无值;
    go(delta?: 任意): 无值;
    pushState(data: 任意, title?: 文字, url?: 文字 | 空值): 无值;
    replaceState(data: 任意, title?: 文字, url?: 文字 | 空值): 无值;

}
声明 值量 History: {
    prototype: History;
    新建(): History;

};
接口 HkdfCtrParams 扩展 Algorithm {
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    context: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_;
    hash: 文字 | Algorithm;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    label: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_;

}
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
接口 IDBEnvironment {
    只读 indexedDB: IDBFactory;

}
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
接口 IIRFilterNode 扩展 AudioNode {
    //@@{ 浮点数组32_:Float32Array }
    getFrequencyResponse(frequencyHz: 浮点数组32_, magResponse: 浮点数组32_, phaseResponse: 浮点数组32_): 无值;

}
声明 值量 IIRFilterNode: {
    prototype: IIRFilterNode;
    新建(): IIRFilterNode;

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
接口 IntersectionObserver {
    只读 root: Element | 空值;
    只读 rootMargin: 文字;
    只读 thresholds: 数字[];
    disconnect(): 无值;
    observe(target: Element): 无值;
    takeRecords(): IntersectionObserverEntry[];
    unobserve(target: Element): 无值;

}
声明 值量 IntersectionObserver: {
    prototype: IntersectionObserver;
    新建(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;

};
接口 IntersectionObserverEntry {
    只读 boundingClientRect: ClientRect | DOMRect;
    只读 intersectionRatio: 数字;
    只读 intersectionRect: ClientRect | DOMRect;
    只读 isIntersecting: 真假;
    只读 rootBounds: ClientRect | DOMRect;
    只读 target: Element;
    只读 time: 数字;

}
声明 值量 IntersectionObserverEntry: {
    prototype: IntersectionObserverEntry;
    新建(intersectionObserverEntryInit: IntersectionObserverEntryInit): IntersectionObserverEntry;

};
接口 KeyboardEvent 扩展 UIEvent {
    只读 altKey: 真假;

    /** @deprecated */
    char: 文字;

    /** @deprecated */
    只读 charCode: 数字;
    只读 code: 文字;
    只读 ctrlKey: 真假;
    只读 key: 文字;

    /** @deprecated */
    只读 keyCode: 数字;
    只读 location: 数字;
    只读 metaKey: 真假;
    只读 repeat: 真假;
    只读 shiftKey: 真假;

    /** @deprecated */
    只读 which: 数字;
    getModifierState(keyArg: 文字): 真假;

    /** @deprecated */
    initKeyboardEvent(typeArg: 文字, canBubbleArg: 真假, cancelableArg: 真假, viewArg: Window, keyArg: 文字, locationArg: 数字, modifiersListArg: 文字, repeat: 真假, locale: 文字): 无值;
    只读 DOM_KEY_LOCATION_JOYSTICK: 数字;
    只读 DOM_KEY_LOCATION_LEFT: 数字;
    只读 DOM_KEY_LOCATION_MOBILE: 数字;
    只读 DOM_KEY_LOCATION_NUMPAD: 数字;
    只读 DOM_KEY_LOCATION_RIGHT: 数字;
    只读 DOM_KEY_LOCATION_STANDARD: 数字;

}
声明 值量 KeyboardEvent: {
    prototype: KeyboardEvent;
    新建(typeArg: 文字, eventInitDict?: KeyboardEventInit): KeyboardEvent;
    只读 DOM_KEY_LOCATION_JOYSTICK: 数字;
    只读 DOM_KEY_LOCATION_LEFT: 数字;
    只读 DOM_KEY_LOCATION_MOBILE: 数字;
    只读 DOM_KEY_LOCATION_NUMPAD: 数字;
    只读 DOM_KEY_LOCATION_RIGHT: 数字;
    只读 DOM_KEY_LOCATION_STANDARD: 数字;

};
接口 LinkStyle {
    只读 sheet: StyleSheet | 空值;

}
接口 ListeningStateChangedEvent 扩展 Event {
    只读 label: 文字;
    只读 state: ListeningState;

}
声明 值量 ListeningStateChangedEvent: {
    prototype: ListeningStateChangedEvent;
    新建(): ListeningStateChangedEvent;

};
接口 Location {
    hash: 文字;
    host: 文字;
    hostname: 文字;
    href: 文字;
    只读 origin: 文字;
    pathname: 文字;
    port: 文字;
    protocol: 文字;
    search: 文字;
    assign(url: 文字): 无值;
    reload(forcedReload?: 真假): 无值;
    replace(url: 文字): 无值;
    toString(): 文字;

}
声明 值量 Location: {
    prototype: Location;
    新建(): Location;

};
接口 MSAssertion {
    只读 id: 文字;
    只读 type: MSCredentialType;

}
声明 值量 MSAssertion: {
    prototype: MSAssertion;
    新建(): MSAssertion;

};
接口 MSBlobBuilder {
    append(data: 任意, endings?: 文字): 无值;
    getBlob(contentType?: 文字): Blob;

}
声明 值量 MSBlobBuilder: {
    prototype: MSBlobBuilder;
    新建(): MSBlobBuilder;

};
接口 MSCredentials {
    //@@{ 预设_:Promise }
    getAssertion(challenge: 文字, filter?: MSCredentialFilter, params?: MSSignatureParameters): 预设_<MSAssertion>;
    //@@{ 预设_:Promise }
    makeCredential(accountInfo: MSAccountInfo, params: MSCredentialParameters[], challenge?: 文字): 预设_<MSAssertion>;

}
声明 值量 MSCredentials: {
    prototype: MSCredentials;
    新建(): MSCredentials;

};
接口 MSDCCEvent 扩展 Event {
    只读 maxFr: 数字;
    只读 maxFs: 数字;

}
声明 值量 MSDCCEvent: {
    prototype: MSDCCEvent;
    新建(type: 文字, eventInitDict: MSDCCEventInit): MSDCCEvent;

};
接口 MSDSHEvent 扩展 Event {
    只读 sources: 数字[];
    只读 timestamp: 数字;

}
声明 值量 MSDSHEvent: {
    prototype: MSDSHEvent;
    新建(type: 文字, eventInitDict: MSDSHEventInit): MSDSHEvent;

};
接口 MSFIDOCredentialAssertion 扩展 MSAssertion {
    只读 algorithm: 文字 | Algorithm;
    只读 attestation: 任意;
    只读 publicKey: 文字;
    只读 transportHints: MSTransportType[];

}
声明 值量 MSFIDOCredentialAssertion: {
    prototype: MSFIDOCredentialAssertion;
    新建(): MSFIDOCredentialAssertion;

};
接口 MSFIDOSignature {
    只读 authnrData: 文字;
    只读 clientData: 文字;
    只读 signature: 文字;

}
声明 值量 MSFIDOSignature: {
    prototype: MSFIDOSignature;
    新建(): MSFIDOSignature;

};
接口 MSFIDOSignatureAssertion 扩展 MSAssertion {
    只读 signature: MSFIDOSignature;

}
声明 值量 MSFIDOSignatureAssertion: {
    prototype: MSFIDOSignatureAssertion;
    新建(): MSFIDOSignatureAssertion;

};
接口 MSFileSaver {
    msSaveBlob(blob: 任意, defaultName?: 文字): 真假;
    msSaveOrOpenBlob(blob: 任意, defaultName?: 文字): 真假;

}
接口 MSGesture {
    target: Element;
    addPointer(pointerId: 数字): 无值;
    stop(): 无值;

}
声明 值量 MSGesture: {
    prototype: MSGesture;
    新建(): MSGesture;

};
接口 MSGestureEvent 扩展 UIEvent {
    只读 clientX: 数字;
    只读 clientY: 数字;
    只读 expansion: 数字;
    只读 gestureObject: 任意;
    只读 hwTimestamp: 数字;
    只读 offsetX: 数字;
    只读 offsetY: 数字;
    只读 rotation: 数字;
    只读 scale: 数字;
    只读 screenX: 数字;
    只读 screenY: 数字;
    只读 translationX: 数字;
    只读 translationY: 数字;
    只读 velocityAngular: 数字;
    只读 velocityExpansion: 数字;
    只读 velocityX: 数字;
    只读 velocityY: 数字;
    initGestureEvent(typeArg: 文字, canBubbleArg: 真假, cancelableArg: 真假, viewArg: Window, detailArg: 数字, screenXArg: 数字, screenYArg: 数字, clientXArg: 数字, clientYArg: 数字, offsetXArg: 数字, offsetYArg: 数字, translationXArg: 数字, translationYArg: 数字, scaleArg: 数字, expansionArg: 数字, rotationArg: 数字, velocityXArg: 数字, velocityYArg: 数字, velocityExpansionArg: 数字, velocityAngularArg: 数字, hwTimestampArg: 数字): 无值;
    只读 MSGESTURE_FLAG_BEGIN: 数字;
    只读 MSGESTURE_FLAG_CANCEL: 数字;
    只读 MSGESTURE_FLAG_END: 数字;
    只读 MSGESTURE_FLAG_INERTIA: 数字;
    只读 MSGESTURE_FLAG_NONE: 数字;

}
声明 值量 MSGestureEvent: {
    prototype: MSGestureEvent;
    新建(): MSGestureEvent;
    只读 MSGESTURE_FLAG_BEGIN: 数字;
    只读 MSGESTURE_FLAG_CANCEL: 数字;
    只读 MSGESTURE_FLAG_END: 数字;
    只读 MSGESTURE_FLAG_INERTIA: 数字;
    只读 MSGESTURE_FLAG_NONE: 数字;

};
接口 MSGraphicsTrust {
    只读 constrictionActive: 真假;
    只读 status: 文字;

}
声明 值量 MSGraphicsTrust: {
    prototype: MSGraphicsTrust;
    新建(): MSGraphicsTrust;

};
接口 MSInputMethodContextEventMap {
    "MSCandidateWindowHide": Event;
    "MSCandidateWindowShow": Event;
    "MSCandidateWindowUpdate": Event;

}
接口 MSInputMethodContext 扩展 EventTarget {
    只读 compositionEndOffset: 数字;
    只读 compositionStartOffset: 数字;
    oncandidatewindowhide: ((this: MSInputMethodContext, ev: Event) => 任意) | 空值;
    oncandidatewindowshow: ((this: MSInputMethodContext, ev: Event) => 任意) | 空值;
    oncandidatewindowupdate: ((this: MSInputMethodContext, ev: Event) => 任意) | 空值;
    只读 target: HTMLElement;
    getCandidateWindowClientRect(): ClientRect;
    getCompositionAlternatives(): 文字[];
    hasComposition(): 真假;
    isCandidateWindowVisible(): 真假;
    addEventListener<K 扩展 键为 MSInputMethodContextEventMap>(type: K, listener: (this: MSInputMethodContext, ev: MSInputMethodContextEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 MSInputMethodContextEventMap>(type: K, listener: (this: MSInputMethodContext, ev: MSInputMethodContextEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 MSInputMethodContext: {
    prototype: MSInputMethodContext;
    新建(): MSInputMethodContext;

};
接口 MSMediaKeyError {
    只读 code: 数字;
    只读 systemCode: 数字;
    只读 MS_MEDIA_KEYERR_CLIENT: 数字;
    只读 MS_MEDIA_KEYERR_DOMAIN: 数字;
    只读 MS_MEDIA_KEYERR_HARDWARECHANGE: 数字;
    只读 MS_MEDIA_KEYERR_OUTPUT: 数字;
    只读 MS_MEDIA_KEYERR_SERVICE: 数字;
    只读 MS_MEDIA_KEYERR_UNKNOWN: 数字;

}
声明 值量 MSMediaKeyError: {
    prototype: MSMediaKeyError;
    新建(): MSMediaKeyError;
    只读 MS_MEDIA_KEYERR_CLIENT: 数字;
    只读 MS_MEDIA_KEYERR_DOMAIN: 数字;
    只读 MS_MEDIA_KEYERR_HARDWARECHANGE: 数字;
    只读 MS_MEDIA_KEYERR_OUTPUT: 数字;
    只读 MS_MEDIA_KEYERR_SERVICE: 数字;
    只读 MS_MEDIA_KEYERR_UNKNOWN: 数字;

};
接口 MSMediaKeyMessageEvent 扩展 Event {
    只读 destinationURL: 文字 | 空值;
    //@@{ 正整数数组8_:Uint8Array }
    只读 message: 正整数数组8_;

}
声明 值量 MSMediaKeyMessageEvent: {
    prototype: MSMediaKeyMessageEvent;
    新建(): MSMediaKeyMessageEvent;

};
接口 MSMediaKeyNeededEvent 扩展 Event {
    //@@{ 正整数数组8_:Uint8Array }
    只读 initData: 正整数数组8_ | 空值;

}
声明 值量 MSMediaKeyNeededEvent: {
    prototype: MSMediaKeyNeededEvent;
    新建(): MSMediaKeyNeededEvent;

};
接口 MSMediaKeySession 扩展 EventTarget {
    只读 error: MSMediaKeyError | 空值;
    只读 keySystem: 文字;
    只读 sessionId: 文字;
    close(): 无值;
    //@@{ 正整数数组8_:Uint8Array }
    update(key: 正整数数组8_): 无值;

}
声明 值量 MSMediaKeySession: {
    prototype: MSMediaKeySession;
    新建(): MSMediaKeySession;

};
接口 MSMediaKeys {
    只读 keySystem: 文字;
    //@@{ 正整数数组8_:Uint8Array }
    createSession(type: 文字, initData: 正整数数组8_, cdmData?: 正整数数组8_ | 空值): MSMediaKeySession;

}
声明 值量 MSMediaKeys: {
    prototype: MSMediaKeys;
    新建(keySystem: 文字): MSMediaKeys;
    isTypeSupported(keySystem: 文字, type?: 文字 | 空值): 真假;
    isTypeSupportedWithFeatures(keySystem: 文字, type?: 文字 | 空值): 文字;

};
接口 MSNavigatorDoNotTrack {
    confirmSiteSpecificTrackingException(args: ConfirmSiteSpecificExceptionsInformation): 真假;
    confirmWebWideTrackingException(args: ExceptionInformation): 真假;
    removeSiteSpecificTrackingException(args: ExceptionInformation): 无值;
    removeWebWideTrackingException(args: ExceptionInformation): 无值;
    storeSiteSpecificTrackingException(args: StoreSiteSpecificExceptionsInformation): 无值;
    storeWebWideTrackingException(args: StoreExceptionsInformation): 无值;

}
接口 MSPointerEvent 扩展 MouseEvent {
    只读 currentPoint: 任意;
    只读 height: 数字;
    只读 hwTimestamp: 数字;
    只读 intermediatePoints: 任意;
    只读 isPrimary: 真假;
    只读 pointerId: 数字;
    只读 pointerType: 任意;
    只读 pressure: 数字;
    只读 rotation: 数字;
    只读 tiltX: 数字;
    只读 tiltY: 数字;
    只读 width: 数字;
    getCurrentPoint(element: Element): 无值;
    getIntermediatePoints(element: Element): 无值;
    initPointerEvent(typeArg: 文字, canBubbleArg: 真假, cancelableArg: 真假, viewArg: Window, detailArg: 数字, screenXArg: 数字, screenYArg: 数字, clientXArg: 数字, clientYArg: 数字, ctrlKeyArg: 真假, altKeyArg: 真假, shiftKeyArg: 真假, metaKeyArg: 真假, buttonArg: 数字, relatedTargetArg: EventTarget, offsetXArg: 数字, offsetYArg: 数字, widthArg: 数字, heightArg: 数字, pressure: 数字, rotation: 数字, tiltX: 数字, tiltY: 数字, pointerIdArg: 数字, pointerType: 任意, hwTimestampArg: 数字, isPrimary: 真假): 无值;

}
声明 值量 MSPointerEvent: {
    prototype: MSPointerEvent;
    新建(typeArg: 文字, eventInitDict?: PointerEventInit): MSPointerEvent;

};
接口 MSStream {
    只读 type: 文字;
    msClose(): 无值;
    msDetachStream(): 任意;

}
声明 值量 MSStream: {
    prototype: MSStream;
    新建(): MSStream;

};
接口 MSStreamReaderEventMap {
    "abort": UIEvent;
    "error": ErrorEvent;
    "load": Event;
    "loadend": ProgressEvent;
    "loadstart": Event;
    "progress": ProgressEvent;

}
接口 MSStreamReader 扩展 EventTarget {
    只读 error: DOMError;
    onabort: ((this: MSStreamReader, ev: UIEvent) => 任意) | 空值;
    onerror: ((this: MSStreamReader, ev: ErrorEvent) => 任意) | 空值;
    onload: ((this: MSStreamReader, ev: Event) => 任意) | 空值;
    onloadend: ((this: MSStreamReader, ev: ProgressEvent) => 任意) | 空值;
    onloadstart: ((this: MSStreamReader, ev: Event) => 任意) | 空值;
    onprogress: ((this: MSStreamReader, ev: ProgressEvent) => 任意) | 空值;
    只读 readyState: 数字;
    只读 result: 任意;
    abort(): 无值;
    readAsArrayBuffer(stream: MSStream, size?: 数字): 无值;
    readAsBinaryString(stream: MSStream, size?: 数字): 无值;
    readAsBlob(stream: MSStream, size?: 数字): 无值;
    readAsDataURL(stream: MSStream, size?: 数字): 无值;
    readAsText(stream: MSStream, encoding?: 文字, size?: 数字): 无值;
    只读 DONE: 数字;
    只读 EMPTY: 数字;
    只读 LOADING: 数字;
    addEventListener<K 扩展 键为 MSStreamReaderEventMap>(type: K, listener: (this: MSStreamReader, ev: MSStreamReaderEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 MSStreamReaderEventMap>(type: K, listener: (this: MSStreamReader, ev: MSStreamReaderEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 MSStreamReader: {
    prototype: MSStreamReader;
    新建(): MSStreamReader;
    只读 DONE: 数字;
    只读 EMPTY: 数字;
    只读 LOADING: 数字;

};
接口 MediaDeviceInfo {
    只读 deviceId: 文字;
    只读 groupId: 文字;
    只读 kind: MediaDeviceKind;
    只读 label: 文字;

}
声明 值量 MediaDeviceInfo: {
    prototype: MediaDeviceInfo;
    新建(): MediaDeviceInfo;

};
接口 MediaDevicesEventMap {
    "devicechange": Event;

}
接口 MediaDevices 扩展 EventTarget {
    ondevicechange: ((this: MediaDevices, ev: Event) => 任意) | 空值;
    //@@{ 预设_:Promise }
    enumerateDevices(): 预设_<MediaDeviceInfo[]>;
    getSupportedConstraints(): MediaTrackSupportedConstraints;
    //@@{ 预设_:Promise }
    getUserMedia(constraints: MediaStreamConstraints): 预设_<MediaStream>;
    addEventListener<K 扩展 键为 MediaDevicesEventMap>(type: K, listener: (this: MediaDevices, ev: MediaDevicesEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 MediaDevicesEventMap>(type: K, listener: (this: MediaDevices, ev: MediaDevicesEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 MediaDevices: {
    prototype: MediaDevices;
    新建(): MediaDevices;

};
接口 MediaElementAudioSourceNode 扩展 AudioNode {

}
声明 值量 MediaElementAudioSourceNode: {
    prototype: MediaElementAudioSourceNode;
    新建(): MediaElementAudioSourceNode;

};
接口 MediaEncryptedEvent 扩展 Event {
    //@@{ 数组缓冲区_:ArrayBuffer }
    只读 initData: 数组缓冲区_ | 空值;
    只读 initDataType: 文字;

}
声明 值量 MediaEncryptedEvent: {
    prototype: MediaEncryptedEvent;
    新建(type: 文字, eventInitDict?: MediaEncryptedEventInit): MediaEncryptedEvent;

};
接口 MediaError {
    只读 code: 数字;
    只读 message: 文字;
    只读 msExtendedCode: 数字;
    只读 MEDIA_ERR_ABORTED: 数字;
    只读 MEDIA_ERR_DECODE: 数字;
    只读 MEDIA_ERR_NETWORK: 数字;
    只读 MEDIA_ERR_SRC_NOT_SUPPORTED: 数字;
    只读 MS_MEDIA_ERR_ENCRYPTED: 数字;

}
声明 值量 MediaError: {
    prototype: MediaError;
    新建(): MediaError;
    只读 MEDIA_ERR_ABORTED: 数字;
    只读 MEDIA_ERR_DECODE: 数字;
    只读 MEDIA_ERR_NETWORK: 数字;
    只读 MEDIA_ERR_SRC_NOT_SUPPORTED: 数字;
    只读 MS_MEDIA_ERR_ENCRYPTED: 数字;

};
接口 MediaKeyMessageEvent 扩展 Event {
    //@@{ 数组缓冲区_:ArrayBuffer }
    只读 message: 数组缓冲区_;
    只读 messageType: MediaKeyMessageType;

}
声明 值量 MediaKeyMessageEvent: {
    prototype: MediaKeyMessageEvent;
    新建(type: 文字, eventInitDict?: MediaKeyMessageEventInit): MediaKeyMessageEvent;

};
接口 MediaKeySession 扩展 EventTarget {
    //@@{ 预设_:Promise }
    只读 closed: 预设_<无值>;
    只读 expiration: 数字;
    只读 keyStatuses: MediaKeyStatusMap;
    只读 sessionId: 文字;
    //@@{ 预设_:Promise }
    close(): 预设_<无值>;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer, 预设_:Promise }
    generateRequest(initDataType: 文字, initData: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值): 预设_<无值>;
    //@@{ 预设_:Promise }
    load(sessionId: 文字): 预设_<真假>;
    //@@{ 预设_:Promise }
    remove(): 预设_<无值>;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer, 预设_:Promise }
    update(response: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值): 预设_<无值>;

}
声明 值量 MediaKeySession: {
    prototype: MediaKeySession;
    新建(): MediaKeySession;

};
接口 MediaKeyStatusMap {
    只读 size: 数字;
    //@@{ 函数_:Function }
    forEach(callback: 函数_, thisArg?: 任意): 无值;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    get(keyId: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值): MediaKeyStatus;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    has(keyId: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值): 真假;

}
声明 值量 MediaKeyStatusMap: {
    prototype: MediaKeyStatusMap;
    新建(): MediaKeyStatusMap;

};
接口 MediaKeySystemAccess {
    只读 keySystem: 文字;
    //@@{ 预设_:Promise }
    createMediaKeys(): 预设_<MediaKeys>;
    getConfiguration(): MediaKeySystemConfiguration;

}
声明 值量 MediaKeySystemAccess: {
    prototype: MediaKeySystemAccess;
    新建(): MediaKeySystemAccess;

};
接口 MediaKeys {
    createSession(sessionType?: MediaKeySessionType): MediaKeySession;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer, 预设_:Promise }
    setServerCertificate(serverCertificate: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值): 预设_<无值>;

}
声明 值量 MediaKeys: {
    prototype: MediaKeys;
    新建(): MediaKeys;

};
接口 MediaList {
    只读 length: 数字;
    mediaText: 文字;
    appendMedium(medium: 文字): 无值;
    deleteMedium(medium: 文字): 无值;
    item(index: 数字): 文字 | 空值;
    toString(): 数字;
    [index: 数字]: 文字;

}
声明 值量 MediaList: {
    prototype: MediaList;
    新建(): MediaList;

};
接口 MediaQueryList {
    只读 matches: 真假;
    只读 media: 文字;
    addListener(listener: MediaQueryListListener): 无值;
    removeListener(listener: MediaQueryListListener): 无值;

}
声明 值量 MediaQueryList: {
    prototype: MediaQueryList;
    新建(): MediaQueryList;

};
接口 MediaSource 扩展 EventTarget {
    只读 activeSourceBuffers: SourceBufferList;
    duration: 数字;
    只读 readyState: 文字;
    只读 sourceBuffers: SourceBufferList;
    addSourceBuffer(type: 文字): SourceBuffer;
    endOfStream(error?: 数字): 无值;
    removeSourceBuffer(sourceBuffer: SourceBuffer): 无值;

}
声明 值量 MediaSource: {
    prototype: MediaSource;
    新建(): MediaSource;
    isTypeSupported(type: 文字): 真假;

};
接口 MediaStreamEventMap {
    "active": Event;
    "addtrack": MediaStreamTrackEvent;
    "inactive": Event;
    "removetrack": MediaStreamTrackEvent;

}
接口 MediaStream 扩展 EventTarget {
    只读 active: 真假;
    只读 id: 文字;
    onactive: ((this: MediaStream, ev: Event) => 任意) | 空值;
    onaddtrack: ((this: MediaStream, ev: MediaStreamTrackEvent) => 任意) | 空值;
    oninactive: ((this: MediaStream, ev: Event) => 任意) | 空值;
    onremovetrack: ((this: MediaStream, ev: MediaStreamTrackEvent) => 任意) | 空值;
    addTrack(track: MediaStreamTrack): 无值;
    clone(): MediaStream;
    getAudioTracks(): MediaStreamTrack[];
    getTrackById(trackId: 文字): MediaStreamTrack | 空值;
    getTracks(): MediaStreamTrack[];
    getVideoTracks(): MediaStreamTrack[];
    removeTrack(track: MediaStreamTrack): 无值;
    stop(): 无值;
    addEventListener<K 扩展 键为 MediaStreamEventMap>(type: K, listener: (this: MediaStream, ev: MediaStreamEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 MediaStreamEventMap>(type: K, listener: (this: MediaStream, ev: MediaStreamEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 MediaStream: {
    prototype: MediaStream;
    新建(): MediaStream;
    新建(stream: MediaStream): MediaStream;
    新建(tracks: MediaStreamTrack[]): MediaStream;

};
接口 MediaStreamAudioSourceNode 扩展 AudioNode {

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
接口 MediaStreamErrorEvent 扩展 Event {
    只读 error: MediaStreamError | 空值;

}
声明 值量 MediaStreamErrorEvent: {
    prototype: MediaStreamErrorEvent;
    新建(typeArg: 文字, eventInitDict?: MediaStreamErrorEventInit): MediaStreamErrorEvent;

};
接口 MediaStreamEvent 扩展 Event {
    只读 stream: MediaStream | 空值;

}
声明 值量 MediaStreamEvent: {
    prototype: MediaStreamEvent;
    新建(type: 文字, eventInitDict: MediaStreamEventInit): MediaStreamEvent;

};
接口 MediaStreamTrackEventMap {
    "ended": MediaStreamErrorEvent;
    "mute": Event;
    "overconstrained": MediaStreamErrorEvent;
    "unmute": Event;

}
接口 MediaStreamTrack 扩展 EventTarget {
    enabled: 真假;
    只读 id: 文字;
    只读 kind: 文字;
    只读 label: 文字;
    只读 muted: 真假;
    onended: ((this: MediaStreamTrack, ev: MediaStreamErrorEvent) => 任意) | 空值;
    onmute: ((this: MediaStreamTrack, ev: Event) => 任意) | 空值;
    onoverconstrained: ((this: MediaStreamTrack, ev: MediaStreamErrorEvent) => 任意) | 空值;
    onunmute: ((this: MediaStreamTrack, ev: Event) => 任意) | 空值;
    只读 readonly: 真假;
    只读 readyState: MediaStreamTrackState;
    只读 remote: 真假;
    //@@{ 预设_:Promise }
    applyConstraints(constraints: MediaTrackConstraints): 预设_<无值>;
    clone(): MediaStreamTrack;
    getCapabilities(): MediaTrackCapabilities;
    getConstraints(): MediaTrackConstraints;
    getSettings(): MediaTrackSettings;
    stop(): 无值;
    addEventListener<K 扩展 键为 MediaStreamTrackEventMap>(type: K, listener: (this: MediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 MediaStreamTrackEventMap>(type: K, listener: (this: MediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 MediaStreamTrack: {
    prototype: MediaStreamTrack;
    新建(): MediaStreamTrack;

};
接口 MediaStreamTrackEvent 扩展 Event {
    只读 track: MediaStreamTrack;

}
声明 值量 MediaStreamTrackEvent: {
    prototype: MediaStreamTrackEvent;
    新建(typeArg: 文字, eventInitDict?: MediaStreamTrackEventInit): MediaStreamTrackEvent;

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
    只读 source: Window | 空值;
    initMessageEvent(type: 文字, bubbles: 真假, cancelable: 真假, data: 任意, origin: 文字, lastEventId: 文字, source: Window): 无值;

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
接口 MimeType {
    只读 description: 文字;
    只读 enabledPlugin: Plugin;
    只读 suffixes: 文字;
    只读 type: 文字;

}
声明 值量 MimeType: {
    prototype: MimeType;
    新建(): MimeType;

};
接口 MimeTypeArray {
    只读 length: 数字;
    item(index: 数字): Plugin;
    namedItem(type: 文字): Plugin;
    [index: 数字]: Plugin;

}
声明 值量 MimeTypeArray: {
    prototype: MimeTypeArray;
    新建(): MimeTypeArray;

};
接口 MouseEvent 扩展 UIEvent {
    只读 altKey: 真假;
    只读 button: 数字;
    只读 buttons: 数字;
    只读 clientX: 数字;
    只读 clientY: 数字;
    只读 ctrlKey: 真假;

    /** @deprecated */
    只读 fromElement: Element;
    只读 layerX: 数字;
    只读 layerY: 数字;
    只读 metaKey: 真假;
    只读 movementX: 数字;
    只读 movementY: 数字;
    只读 offsetX: 数字;
    只读 offsetY: 数字;
    只读 pageX: 数字;
    只读 pageY: 数字;
    只读 relatedTarget: EventTarget;
    只读 screenX: 数字;
    只读 screenY: 数字;
    只读 shiftKey: 真假;

    /** @deprecated */
    只读 toElement: Element;

    /** @deprecated */
    只读 which: 数字;
    只读 x: 数字;
    只读 y: 数字;
    getModifierState(keyArg: 文字): 真假;
    initMouseEvent(typeArg: 文字, canBubbleArg: 真假, cancelableArg: 真假, viewArg: Window, detailArg: 数字, screenXArg: 数字, screenYArg: 数字, clientXArg: 数字, clientYArg: 数字, ctrlKeyArg: 真假, altKeyArg: 真假, shiftKeyArg: 真假, metaKeyArg: 真假, buttonArg: 数字, relatedTargetArg: EventTarget | 空值): 无值;

}
声明 值量 MouseEvent: {
    prototype: MouseEvent;
    新建(typeArg: 文字, eventInitDict?: MouseEventInit): MouseEvent;

};
接口 MutationEvent 扩展 Event {
    只读 attrChange: 数字;
    只读 attrName: 文字;
    只读 newValue: 文字;
    只读 prevValue: 文字;
    只读 relatedNode: Node;
    initMutationEvent(typeArg: 文字, canBubbleArg: 真假, cancelableArg: 真假, relatedNodeArg: Node, prevValueArg: 文字, newValueArg: 文字, attrNameArg: 文字, attrChangeArg: 数字): 无值;
    只读 ADDITION: 数字;
    只读 MODIFICATION: 数字;
    只读 REMOVAL: 数字;

}
声明 值量 MutationEvent: {
    prototype: MutationEvent;
    新建(): MutationEvent;
    只读 ADDITION: 数字;
    只读 MODIFICATION: 数字;
    只读 REMOVAL: 数字;

};
接口 MutationObserver {
    disconnect(): 无值;
    observe(target: Node, options: MutationObserverInit): 无值;
    takeRecords(): MutationRecord[];

}
声明 值量 MutationObserver: {
    prototype: MutationObserver;
    新建(callback: MutationCallback): MutationObserver;

};
接口 MutationRecord {
    只读 addedNodes: NodeList;
    只读 attributeName: 文字 | 空值;
    只读 attributeNamespace: 文字 | 空值;
    只读 nextSibling: Node | 空值;
    只读 oldValue: 文字 | 空值;
    只读 previousSibling: Node | 空值;
    只读 removedNodes: NodeList;
    只读 target: Node;
    只读 type: MutationRecordType;

}
声明 值量 MutationRecord: {
    prototype: MutationRecord;
    新建(): MutationRecord;

};
接口 NamedNodeMap {
    只读 length: 数字;
    getNamedItem(qualifiedName: 文字): Attr | 空值;
    getNamedItemNS(namespace: 文字 | 空值, localName: 文字): Attr | 空值;
    item(index: 数字): Attr | 空值;
    removeNamedItem(qualifiedName: 文字): Attr;
    removeNamedItemNS(namespace: 文字 | 空值, localName: 文字): Attr;
    setNamedItem(attr: Attr): Attr | 空值;
    setNamedItemNS(attr: Attr): Attr | 空值;
    [index: 数字]: Attr;

}
声明 值量 NamedNodeMap: {
    prototype: NamedNodeMap;
    新建(): NamedNodeMap;

};
接口 Navigator 扩展 NavigatorID, NavigatorOnLine, NavigatorContentUtils, NavigatorStorageUtils, MSNavigatorDoNotTrack, MSFileSaver, NavigatorBeacon, NavigatorConcurrentHardware, NavigatorUserMedia, NavigatorLanguage {
    //@@{ 只读数组_:ReadonlyArray }
    只读 activeVRDisplays: 只读数组_<VRDisplay>;
    只读 authentication: WebAuthentication;
    只读 cookieEnabled: 真假;
    只读 doNotTrack: 文字 | 空值;
    gamepadInputEmulation: GamepadInputEmulationType;
    只读 geolocation: Geolocation;
    只读 maxTouchPoints: 数字;
    只读 mimeTypes: MimeTypeArray;
    只读 msManipulationViewsEnabled: 真假;
    只读 msMaxTouchPoints: 数字;
    只读 msPointerEnabled: 真假;
    只读 plugins: PluginArray;
    只读 pointerEnabled: 真假;
    只读 serviceWorker: ServiceWorkerContainer;
    只读 webdriver: 真假;
    getGamepads(): (Gamepad | 空值)[];
    //@@{ 预设_:Promise }
    getVRDisplays(): 预设_<VRDisplay[]>;
    javaEnabled(): 真假;
    msLaunchUri(uri: 文字, successCallback?: MSLaunchUriCallback, noHandlerCallback?: MSLaunchUriCallback): 无值;
    //@@{ 预设_:Promise }
    requestMediaKeySystemAccess(keySystem: 文字, supportedConfigurations: MediaKeySystemConfiguration[]): 预设_<MediaKeySystemAccess>;
    vibrate(pattern: 数字 | 数字[]): 真假;

}
声明 值量 Navigator: {
    prototype: Navigator;
    新建(): Navigator;

};
接口 NavigatorBeacon {
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    sendBeacon(url: 文字, data?: Blob | 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | FormData | 文字 | 空值): 真假;

}
接口 NavigatorConcurrentHardware {
    只读 hardwareConcurrency: 数字;

}
接口 NavigatorContentUtils {

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
接口 NavigatorLanguage {
    只读 language: 文字;
    //@@{ 只读数组_:ReadonlyArray }
    只读 languages: 只读数组_<文字>;

}
接口 NavigatorOnLine {
    只读 onLine: 真假;

}
接口 NavigatorStorageUtils {

}
接口 NavigatorUserMedia {
    只读 mediaDevices: MediaDevices;
    //@@{ 预设_:Promise }
    getDisplayMedia(constraints: MediaStreamConstraints): 预设_<MediaStream>;
    getUserMedia(constraints: MediaStreamConstraints, successCallback: NavigatorUserMediaSuccessCallback, errorCallback: NavigatorUserMediaErrorCallback): 无值;

}
接口 Node 扩展 EventTarget {
    只读 baseURI: 文字 | 空值;
    只读 childNodes: NodeListOf<Node & ChildNode>;
    只读 firstChild: Node | 空值;
    只读 isConnected: 真假;
    只读 lastChild: Node | 空值;
    只读 localName: 文字 | 空值;
    只读 namespaceURI: 文字 | 空值;
    只读 nextSibling: Node | 空值;
    只读 nodeName: 文字;
    只读 nodeType: 数字;
    nodeValue: 文字 | 空值;
    只读 ownerDocument: Document;
    只读 parentElement: HTMLElement | 空值;
    只读 parentNode: Node | 空值;
    只读 previousSibling: Node | 空值;
    textContent: 文字 | 空值;
    appendChild<T 扩展 Node>(newChild: T): T;
    cloneNode(deep?: 真假): Node;
    compareDocumentPosition(other: Node): 数字;
    contains(child: Node): 真假;
    hasChildNodes(): 真假;
    insertBefore<T 扩展 Node>(newChild: T, refChild: Node | 空值): T;
    isDefaultNamespace(namespaceURI: 文字 | 空值): 真假;
    isEqualNode(arg: Node): 真假;
    isSameNode(other: Node): 真假;
    lookupNamespaceURI(prefix: 文字 | 空值): 文字 | 空值;
    lookupPrefix(namespaceURI: 文字 | 空值): 文字 | 空值;
    normalize(): 无值;
    removeChild<T 扩展 Node>(oldChild: T): T;
    replaceChild<T 扩展 Node>(newChild: Node, oldChild: T): T;
    只读 ATTRIBUTE_NODE: 数字;
    只读 CDATA_SECTION_NODE: 数字;
    只读 COMMENT_NODE: 数字;
    只读 DOCUMENT_FRAGMENT_NODE: 数字;
    只读 DOCUMENT_NODE: 数字;
    只读 DOCUMENT_POSITION_CONTAINED_BY: 数字;
    只读 DOCUMENT_POSITION_CONTAINS: 数字;
    只读 DOCUMENT_POSITION_DISCONNECTED: 数字;
    只读 DOCUMENT_POSITION_FOLLOWING: 数字;
    只读 DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 数字;
    只读 DOCUMENT_POSITION_PRECEDING: 数字;
    只读 DOCUMENT_TYPE_NODE: 数字;
    只读 ELEMENT_NODE: 数字;
    只读 ENTITY_NODE: 数字;
    只读 ENTITY_REFERENCE_NODE: 数字;
    只读 NOTATION_NODE: 数字;
    只读 PROCESSING_INSTRUCTION_NODE: 数字;
    只读 TEXT_NODE: 数字;

}
声明 值量 Node: {
    prototype: Node;
    新建(): Node;
    只读 ATTRIBUTE_NODE: 数字;
    只读 CDATA_SECTION_NODE: 数字;
    只读 COMMENT_NODE: 数字;
    只读 DOCUMENT_FRAGMENT_NODE: 数字;
    只读 DOCUMENT_NODE: 数字;
    只读 DOCUMENT_POSITION_CONTAINED_BY: 数字;
    只读 DOCUMENT_POSITION_CONTAINS: 数字;
    只读 DOCUMENT_POSITION_DISCONNECTED: 数字;
    只读 DOCUMENT_POSITION_FOLLOWING: 数字;
    只读 DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 数字;
    只读 DOCUMENT_POSITION_PRECEDING: 数字;
    只读 DOCUMENT_TYPE_NODE: 数字;
    只读 ELEMENT_NODE: 数字;
    只读 ENTITY_NODE: 数字;
    只读 ENTITY_REFERENCE_NODE: 数字;
    只读 NOTATION_NODE: 数字;
    只读 PROCESSING_INSTRUCTION_NODE: 数字;
    只读 TEXT_NODE: 数字;

};
接口 NodeFilter {
    acceptNode(node: Node): 数字;

}
声明 值量 NodeFilter: {
    只读 FILTER_ACCEPT: 数字;
    只读 FILTER_REJECT: 数字;
    只读 FILTER_SKIP: 数字;
    只读 SHOW_ALL: 数字;
    只读 SHOW_ATTRIBUTE: 数字;
    只读 SHOW_CDATA_SECTION: 数字;
    只读 SHOW_COMMENT: 数字;
    只读 SHOW_DOCUMENT: 数字;
    只读 SHOW_DOCUMENT_FRAGMENT: 数字;
    只读 SHOW_DOCUMENT_TYPE: 数字;
    只读 SHOW_ELEMENT: 数字;
    只读 SHOW_ENTITY: 数字;
    只读 SHOW_ENTITY_REFERENCE: 数字;
    只读 SHOW_NOTATION: 数字;
    只读 SHOW_PROCESSING_INSTRUCTION: 数字;
    只读 SHOW_TEXT: 数字;

};
接口 NodeIterator {

    /** @deprecated */
    只读 expandEntityReferences: 真假;
    只读 filter: NodeFilter | 空值;
    只读 root: Node;
    只读 whatToShow: 数字;
    detach(): 无值;
    nextNode(): Node | 空值;
    previousNode(): Node | 空值;

}
声明 值量 NodeIterator: {
    prototype: NodeIterator;
    新建(): NodeIterator;

};
接口 NodeList {
    只读 length: 数字;
    item(index: 数字): Node;
    [index: 数字]: Node;

}
声明 值量 NodeList: {
    prototype: NodeList;
    新建(): NodeList;

};
接口 NodeListOf<TNode 扩展 Node> 扩展 NodeList {
    length: 数字;
    item(index: 数字): TNode;
    [index: 数字]: TNode;

}
接口 NodeSelector {
    querySelector<K 扩展 键为 HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | 空值;
    querySelector<K 扩展 键为 SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | 空值;
    querySelector<E 扩展 Element = Element>(selectors: 文字): E | 空值;
    querySelectorAll<K 扩展 键为 HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
    querySelectorAll<K 扩展 键为 SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
    querySelectorAll<E 扩展 Element = Element>(selectors: 文字): NodeListOf<E>;

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
接口 OES_element_index_uint {

}
声明 值量 OES_element_index_uint: {
    prototype: OES_element_index_uint;
    新建(): OES_element_index_uint;

};
接口 OES_standard_derivatives {
    只读 FRAGMENT_SHADER_DERIVATIVE_HINT_OES: 数字;

}
声明 值量 OES_standard_derivatives: {
    prototype: OES_standard_derivatives;
    新建(): OES_standard_derivatives;
    只读 FRAGMENT_SHADER_DERIVATIVE_HINT_OES: 数字;

};
接口 OES_texture_float {

}
声明 值量 OES_texture_float: {
    prototype: OES_texture_float;
    新建(): OES_texture_float;

};
接口 OES_texture_float_linear {

}
声明 值量 OES_texture_float_linear: {
    prototype: OES_texture_float_linear;
    新建(): OES_texture_float_linear;

};
接口 OES_texture_half_float {
    只读 HALF_FLOAT_OES: 数字;

}
声明 值量 OES_texture_half_float: {
    prototype: OES_texture_half_float;
    新建(): OES_texture_half_float;
    只读 HALF_FLOAT_OES: 数字;

};
接口 OES_texture_half_float_linear {

}
声明 值量 OES_texture_half_float_linear: {
    prototype: OES_texture_half_float_linear;
    新建(): OES_texture_half_float_linear;

};
接口 OES_vertex_array_object {
    只读 VERTEX_ARRAY_BINDING_OES: 数字;
    bindVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES): 无值;
    createVertexArrayOES(): WebGLVertexArrayObjectOES;
    deleteVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES): 无值;
    isVertexArrayOES(value: 任意): value 作为 WebGLVertexArrayObjectOES;

}
接口 OfflineAudioCompletionEvent 扩展 Event {
    只读 renderedBuffer: AudioBuffer;

}
声明 值量 OfflineAudioCompletionEvent: {
    prototype: OfflineAudioCompletionEvent;
    新建(): OfflineAudioCompletionEvent;

};
接口 OfflineAudioContextEventMap 扩展 AudioContextEventMap {
    "complete": OfflineAudioCompletionEvent;

}
接口 OfflineAudioContext 扩展 AudioContextBase {
    只读 length: 数字;
    oncomplete: ((this: OfflineAudioContext, ev: OfflineAudioCompletionEvent) => 任意) | 空值;
    //@@{ 预设_:Promise }
    startRendering(): 预设_<AudioBuffer>;
    //@@{ 预设_:Promise }
    suspend(suspendTime: 数字): 预设_<无值>;
    addEventListener<K 扩展 键为 OfflineAudioContextEventMap>(type: K, listener: (this: OfflineAudioContext, ev: OfflineAudioContextEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 OfflineAudioContextEventMap>(type: K, listener: (this: OfflineAudioContext, ev: OfflineAudioContextEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 OfflineAudioContext: {
    prototype: OfflineAudioContext;
    新建(numberOfChannels: 数字, length: 数字, sampleRate: 数字): OfflineAudioContext;

};
接口 OscillatorNodeEventMap {
    "ended": Event;

}
接口 OscillatorNode 扩展 AudioNode {
    只读 detune: AudioParam;
    只读 frequency: AudioParam;
    onended: ((this: OscillatorNode, ev: Event) => 任意) | 空值;
    type: OscillatorType;
    setPeriodicWave(periodicWave: PeriodicWave): 无值;
    start(when?: 数字): 无值;
    stop(when?: 数字): 无值;
    addEventListener<K 扩展 键为 OscillatorNodeEventMap>(type: K, listener: (this: OscillatorNode, ev: OscillatorNodeEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 OscillatorNodeEventMap>(type: K, listener: (this: OscillatorNode, ev: OscillatorNodeEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 OscillatorNode: {
    prototype: OscillatorNode;
    新建(): OscillatorNode;

};
接口 OverflowEvent 扩展 UIEvent {
    只读 horizontalOverflow: 真假;
    只读 orient: 数字;
    只读 verticalOverflow: 真假;
    只读 BOTH: 数字;
    只读 HORIZONTAL: 数字;
    只读 VERTICAL: 数字;

}
声明 值量 OverflowEvent: {
    prototype: OverflowEvent;
    新建(): OverflowEvent;
    只读 BOTH: 数字;
    只读 HORIZONTAL: 数字;
    只读 VERTICAL: 数字;

};
接口 PageTransitionEvent 扩展 Event {
    只读 persisted: 真假;

}
声明 值量 PageTransitionEvent: {
    prototype: PageTransitionEvent;
    新建(): PageTransitionEvent;

};
接口 PannerNode 扩展 AudioNode {
    coneInnerAngle: 数字;
    coneOuterAngle: 数字;
    coneOuterGain: 数字;
    distanceModel: DistanceModelType;
    maxDistance: 数字;
    panningModel: PanningModelType;
    refDistance: 数字;
    rolloffFactor: 数字;

    /** @deprecated */
    setOrientation(x: 数字, y: 数字, z: 数字): 无值;

    /** @deprecated */
    setPosition(x: 数字, y: 数字, z: 数字): 无值;

    /** @deprecated */
    setVelocity(x: 数字, y: 数字, z: 数字): 无值;

}
声明 值量 PannerNode: {
    prototype: PannerNode;
    新建(): PannerNode;

};
接口 ParentNode {
    只读 childElementCount: 数字;
    只读 firstElementChild: Element | 空值;
    只读 lastElementChild: Element | 空值;

}
接口 ParentNode {
    只读 children: HTMLCollection;
    querySelector<K 扩展 键为 HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | 空值;
    querySelector<K 扩展 键为 SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | 空值;
    querySelector<E 扩展 Element = Element>(selectors: 文字): E | 空值;
    querySelectorAll<K 扩展 键为 HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
    querySelectorAll<K 扩展 键为 SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
    querySelectorAll<E 扩展 Element = Element>(selectors: 文字): NodeListOf<E>;

}
接口 Path2D 扩展 CanvasPathMethods {

}
声明 值量 Path2D: {
    prototype: Path2D;
    新建(d?: Path2D | 文字): Path2D;

};
接口 PaymentAddress {
    只读 addressLine: 文字[];
    只读 city: 文字;
    只读 country: 文字;
    只读 dependentLocality: 文字;
    只读 languageCode: 文字;
    只读 organization: 文字;
    只读 phone: 文字;
    只读 postalCode: 文字;
    只读 recipient: 文字;
    只读 region: 文字;
    只读 sortingCode: 文字;
    toJSON(): 任意;

}
声明 值量 PaymentAddress: {
    prototype: PaymentAddress;
    新建(): PaymentAddress;

};
接口 PaymentRequestEventMap {
    "shippingaddresschange": Event;
    "shippingoptionchange": Event;

}
接口 PaymentRequest 扩展 EventTarget {
    只读 id: 文字;
    onshippingaddresschange: ((this: PaymentRequest, ev: Event) => 任意) | 空值;
    onshippingoptionchange: ((this: PaymentRequest, ev: Event) => 任意) | 空值;
    只读 shippingAddress: PaymentAddress | 空值;
    只读 shippingOption: 文字 | 空值;
    只读 shippingType: PaymentShippingType | 空值;
    //@@{ 预设_:Promise }
    abort(): 预设_<无值>;
    //@@{ 预设_:Promise }
    canMakePayment(): 预设_<真假>;
    //@@{ 预设_:Promise }
    show(): 预设_<PaymentResponse>;
    addEventListener<K 扩展 键为 PaymentRequestEventMap>(type: K, listener: (this: PaymentRequest, ev: PaymentRequestEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 PaymentRequestEventMap>(type: K, listener: (this: PaymentRequest, ev: PaymentRequestEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 PaymentRequest: {
    prototype: PaymentRequest;
    新建(methodData: PaymentMethodData[], details: PaymentDetailsInit, options?: PaymentOptions): PaymentRequest;

};
接口 PaymentRequestUpdateEvent 扩展 Event {
    //@@{ 预设_:Promise }
    updateWith(detailsPromise: 预设_<PaymentDetailsUpdate>): 无值;

}
声明 值量 PaymentRequestUpdateEvent: {
    prototype: PaymentRequestUpdateEvent;
    新建(type: 文字, eventInitDict?: PaymentRequestUpdateEventInit): PaymentRequestUpdateEvent;

};
接口 PaymentResponse {
    只读 details: 任意;
    只读 methodName: 文字;
    只读 payerEmail: 文字 | 空值;
    只读 payerName: 文字 | 空值;
    只读 payerPhone: 文字 | 空值;
    只读 requestId: 文字;
    只读 shippingAddress: PaymentAddress | 空值;
    只读 shippingOption: 文字 | 空值;
    //@@{ 预设_:Promise }
    complete(result?: PaymentComplete): 预设_<无值>;
    toJSON(): 任意;

}
声明 值量 PaymentResponse: {
    prototype: PaymentResponse;
    新建(): PaymentResponse;

};
接口 PerfWidgetExternal {
    只读 activeNetworkRequestCount: 数字;
    只读 averageFrameTime: 数字;
    只读 averagePaintTime: 数字;
    只读 extraInformationEnabled: 真假;
    只读 independentRenderingEnabled: 真假;
    只读 irDisablingContentString: 文字;
    只读 irStatusAvailable: 真假;
    只读 maxCpuSpeed: 数字;
    只读 paintRequestsPerSecond: 数字;
    只读 performanceCounter: 数字;
    只读 performanceCounterFrequency: 数字;
    //@@{ 函数_:Function }
    addEventListener(eventType: 文字, callback: 函数_): 无值;
    getMemoryUsage(): 数字;
    getProcessCpuUsage(): 数字;
    getRecentCpuUsage(last: 数字 | 空值): 任意;
    getRecentFrames(last: 数字 | 空值): 任意;
    getRecentMemoryUsage(last: 数字 | 空值): 任意;
    getRecentPaintRequests(last: 数字 | 空值): 任意;
    //@@{ 函数_:Function }
    removeEventListener(eventType: 文字, callback: 函数_): 无值;
    repositionWindow(x: 数字, y: 数字): 无值;
    resizeWindow(width: 数字, height: 数字): 无值;

}
声明 值量 PerfWidgetExternal: {
    prototype: PerfWidgetExternal;
    新建(): PerfWidgetExternal;

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
接口 PerformanceEntry {
    只读 duration: 数字;
    只读 entryType: 文字;
    只读 name: 文字;
    只读 startTime: 数字;
    toJSON(): 任意;

}
声明 值量 PerformanceEntry: {
    prototype: PerformanceEntry;
    新建(): PerformanceEntry;

};
接口 PerformanceMark 扩展 PerformanceEntry {

}
声明 值量 PerformanceMark: {
    prototype: PerformanceMark;
    新建(): PerformanceMark;

};
接口 PerformanceMeasure 扩展 PerformanceEntry {

}
声明 值量 PerformanceMeasure: {
    prototype: PerformanceMeasure;
    新建(): PerformanceMeasure;

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
接口 PerformanceNavigationTiming 扩展 PerformanceEntry {

    /** @deprecated */
    只读 connectEnd: 数字;

    /** @deprecated */
    只读 connectStart: 数字;
    只读 domComplete: 数字;
    只读 domContentLoadedEventEnd: 数字;
    只读 domContentLoadedEventStart: 数字;
    只读 domInteractive: 数字;

    /** @deprecated */
    只读 domLoading: 数字;

    /** @deprecated */
    只读 domainLookupEnd: 数字;

    /** @deprecated */
    只读 domainLookupStart: 数字;

    /** @deprecated */
    只读 fetchStart: 数字;
    只读 loadEventEnd: 数字;
    只读 loadEventStart: 数字;

    /** @deprecated */
    只读 navigationStart: 数字;
    只读 redirectCount: 数字;

    /** @deprecated */
    只读 redirectEnd: 数字;

    /** @deprecated */
    只读 redirectStart: 数字;

    /** @deprecated */
    只读 requestStart: 数字;

    /** @deprecated */
    只读 responseEnd: 数字;

    /** @deprecated */
    只读 responseStart: 数字;
    只读 type: NavigationType;
    只读 unloadEventEnd: 数字;
    只读 unloadEventStart: 数字;
    只读 workerStart: 数字;

}
声明 值量 PerformanceNavigationTiming: {
    prototype: PerformanceNavigationTiming;
    新建(): PerformanceNavigationTiming;

};
接口 PerformanceResourceTiming 扩展 PerformanceEntry {
    只读 connectEnd: 数字;
    只读 connectStart: 数字;
    只读 domainLookupEnd: 数字;
    只读 domainLookupStart: 数字;
    只读 fetchStart: 数字;
    只读 initiatorType: 文字;
    只读 redirectEnd: 数字;
    只读 redirectStart: 数字;
    只读 requestStart: 数字;
    只读 responseEnd: 数字;
    只读 responseStart: 数字;
    只读 workerStart: 数字;

}
声明 值量 PerformanceResourceTiming: {
    prototype: PerformanceResourceTiming;
    新建(): PerformanceResourceTiming;

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
接口 PeriodicWave {

}
声明 值量 PeriodicWave: {
    prototype: PeriodicWave;
    新建(): PeriodicWave;

};
接口 PermissionRequest 扩展 DeferredPermissionRequest {
    只读 state: MSWebViewPermissionState;
    defer(): 无值;

}
声明 值量 PermissionRequest: {
    prototype: PermissionRequest;
    新建(): PermissionRequest;

};
接口 PermissionRequestedEvent 扩展 Event {
    只读 permissionRequest: PermissionRequest;

}
声明 值量 PermissionRequestedEvent: {
    prototype: PermissionRequestedEvent;
    新建(): PermissionRequestedEvent;

};
接口 Plugin {
    只读 description: 文字;
    只读 filename: 文字;
    只读 length: 数字;
    只读 name: 文字;
    只读 version: 文字;
    item(index: 数字): MimeType;
    namedItem(type: 文字): MimeType;
    [index: 数字]: MimeType;

}
声明 值量 Plugin: {
    prototype: Plugin;
    新建(): Plugin;

};
接口 PluginArray {
    只读 length: 数字;
    item(index: 数字): Plugin;
    namedItem(name: 文字): Plugin;
    refresh(reload?: 真假): 无值;
    [index: 数字]: Plugin;

}
声明 值量 PluginArray: {
    prototype: PluginArray;
    新建(): PluginArray;

};
接口 PointerEvent 扩展 MouseEvent {
    只读 currentPoint: 任意;
    只读 height: 数字;
    只读 hwTimestamp: 数字;
    只读 intermediatePoints: 任意;
    只读 isPrimary: 真假;
    只读 pointerId: 数字;
    只读 pointerType: 任意;
    只读 pressure: 数字;
    只读 rotation: 数字;
    只读 tiltX: 数字;
    只读 tiltY: 数字;
    只读 width: 数字;
    getCurrentPoint(element: Element): 无值;
    getIntermediatePoints(element: Element): 无值;
    initPointerEvent(typeArg: 文字, canBubbleArg: 真假, cancelableArg: 真假, viewArg: Window, detailArg: 数字, screenXArg: 数字, screenYArg: 数字, clientXArg: 数字, clientYArg: 数字, ctrlKeyArg: 真假, altKeyArg: 真假, shiftKeyArg: 真假, metaKeyArg: 真假, buttonArg: 数字, relatedTargetArg: EventTarget, offsetXArg: 数字, offsetYArg: 数字, widthArg: 数字, heightArg: 数字, pressure: 数字, rotation: 数字, tiltX: 数字, tiltY: 数字, pointerIdArg: 数字, pointerType: 任意, hwTimestampArg: 数字, isPrimary: 真假): 无值;

}
声明 值量 PointerEvent: {
    prototype: PointerEvent;
    新建(typeArg: 文字, eventInitDict?: PointerEventInit): PointerEvent;

};
接口 PopStateEvent 扩展 Event {
    只读 state: 任意;

}
声明 值量 PopStateEvent: {
    prototype: PopStateEvent;
    新建(type: 文字, eventInitDict?: PopStateEventInit): PopStateEvent;

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
接口 ProcessingInstruction 扩展 CharacterData {
    只读 target: 文字;

}
声明 值量 ProcessingInstruction: {
    prototype: ProcessingInstruction;
    新建(): ProcessingInstruction;

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
接口 PromiseRejectionEvent 扩展 Event {
    //@@{ 预设等_:PromiseLike }
    只读 promise: 预设等_<任意>;
    只读 reason: 任意;

}
接口 PromiseRejectionEventInit 扩展 EventInit {
    //@@{ 预设等_:PromiseLike }
    promise: 预设等_<任意>;
    reason?: 任意;

}
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
接口 PushSubscriptionOptions {
    //@@{ 数组缓冲区_:ArrayBuffer }
    只读 applicationServerKey: 数组缓冲区_ | 空值;
    只读 userVisibleOnly: 真假;

}
声明 值量 PushSubscriptionOptions: {
    prototype: PushSubscriptionOptions;
    新建(): PushSubscriptionOptions;

};
接口 RTCDTMFToneChangeEvent 扩展 Event {
    只读 tone: 文字;

}
声明 值量 RTCDTMFToneChangeEvent: {
    prototype: RTCDTMFToneChangeEvent;
    新建(typeArg: 文字, eventInitDict: RTCDTMFToneChangeEventInit): RTCDTMFToneChangeEvent;

};
接口 RTCDtlsTransportEventMap {
    "dtlsstatechange": RTCDtlsTransportStateChangedEvent;
    "error": Event;

}
接口 RTCDtlsTransport 扩展 RTCStatsProvider {
    ondtlsstatechange: ((this: RTCDtlsTransport, ev: RTCDtlsTransportStateChangedEvent) => 任意) | 空值;
    onerror: ((this: RTCDtlsTransport, ev: Event) => 任意) | 空值;
    只读 state: RTCDtlsTransportState;
    只读 transport: RTCIceTransport;
    getLocalParameters(): RTCDtlsParameters;
    //@@{ 数组缓冲区_:ArrayBuffer }
    getRemoteCertificates(): 数组缓冲区_[];
    getRemoteParameters(): RTCDtlsParameters | 空值;
    start(remoteParameters: RTCDtlsParameters): 无值;
    stop(): 无值;
    addEventListener<K 扩展 键为 RTCDtlsTransportEventMap>(type: K, listener: (this: RTCDtlsTransport, ev: RTCDtlsTransportEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 RTCDtlsTransportEventMap>(type: K, listener: (this: RTCDtlsTransport, ev: RTCDtlsTransportEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 RTCDtlsTransport: {
    prototype: RTCDtlsTransport;
    新建(transport: RTCIceTransport): RTCDtlsTransport;

};
接口 RTCDtlsTransportStateChangedEvent 扩展 Event {
    只读 state: RTCDtlsTransportState;

}
声明 值量 RTCDtlsTransportStateChangedEvent: {
    prototype: RTCDtlsTransportStateChangedEvent;
    新建(): RTCDtlsTransportStateChangedEvent;

};
接口 RTCDtmfSenderEventMap {
    "tonechange": RTCDTMFToneChangeEvent;

}
接口 RTCDtmfSender 扩展 EventTarget {
    只读 canInsertDTMF: 真假;
    只读 duration: 数字;
    只读 interToneGap: 数字;
    ontonechange: ((this: RTCDtmfSender, ev: RTCDTMFToneChangeEvent) => 任意) | 空值;
    只读 sender: RTCRtpSender;
    只读 toneBuffer: 文字;
    insertDTMF(tones: 文字, duration?: 数字, interToneGap?: 数字): 无值;
    addEventListener<K 扩展 键为 RTCDtmfSenderEventMap>(type: K, listener: (this: RTCDtmfSender, ev: RTCDtmfSenderEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 RTCDtmfSenderEventMap>(type: K, listener: (this: RTCDtmfSender, ev: RTCDtmfSenderEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 RTCDtmfSender: {
    prototype: RTCDtmfSender;
    新建(sender: RTCRtpSender): RTCDtmfSender;

};
接口 RTCIceCandidate {
    candidate: 文字 | 空值;
    sdpMLineIndex: 数字 | 空值;
    sdpMid: 文字 | 空值;
    toJSON(): 任意;

}
声明 值量 RTCIceCandidate: {
    prototype: RTCIceCandidate;
    新建(candidateInitDict?: RTCIceCandidateInit): RTCIceCandidate;

};
接口 RTCIceCandidatePairChangedEvent 扩展 Event {
    只读 pair: RTCIceCandidatePair;

}
声明 值量 RTCIceCandidatePairChangedEvent: {
    prototype: RTCIceCandidatePairChangedEvent;
    新建(): RTCIceCandidatePairChangedEvent;

};
接口 RTCIceGathererEventMap {
    "error": Event;
    "localcandidate": RTCIceGathererEvent;

}
接口 RTCIceGatherer 扩展 RTCStatsProvider {
    只读 component: RTCIceComponent;
    onerror: ((this: RTCIceGatherer, ev: Event) => 任意) | 空值;
    onlocalcandidate: ((this: RTCIceGatherer, ev: RTCIceGathererEvent) => 任意) | 空值;
    createAssociatedGatherer(): RTCIceGatherer;
    getLocalCandidates(): RTCIceCandidateDictionary[];
    getLocalParameters(): RTCIceParameters;
    addEventListener<K 扩展 键为 RTCIceGathererEventMap>(type: K, listener: (this: RTCIceGatherer, ev: RTCIceGathererEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 RTCIceGathererEventMap>(type: K, listener: (this: RTCIceGatherer, ev: RTCIceGathererEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 RTCIceGatherer: {
    prototype: RTCIceGatherer;
    新建(options: RTCIceGatherOptions): RTCIceGatherer;

};
接口 RTCIceGathererEvent 扩展 Event {
    只读 candidate: RTCIceCandidateDictionary | RTCIceCandidateComplete;

}
声明 值量 RTCIceGathererEvent: {
    prototype: RTCIceGathererEvent;
    新建(): RTCIceGathererEvent;

};
接口 RTCIceTransportEventMap {
    "candidatepairchange": RTCIceCandidatePairChangedEvent;
    "icestatechange": RTCIceTransportStateChangedEvent;

}
接口 RTCIceTransport 扩展 RTCStatsProvider {
    只读 component: RTCIceComponent;
    只读 iceGatherer: RTCIceGatherer | 空值;
    oncandidatepairchange: ((this: RTCIceTransport, ev: RTCIceCandidatePairChangedEvent) => 任意) | 空值;
    onicestatechange: ((this: RTCIceTransport, ev: RTCIceTransportStateChangedEvent) => 任意) | 空值;
    只读 role: RTCIceRole;
    只读 state: RTCIceTransportState;
    addRemoteCandidate(remoteCandidate: RTCIceCandidateDictionary | RTCIceCandidateComplete): 无值;
    createAssociatedTransport(): RTCIceTransport;
    getNominatedCandidatePair(): RTCIceCandidatePair | 空值;
    getRemoteCandidates(): RTCIceCandidateDictionary[];
    getRemoteParameters(): RTCIceParameters | 空值;
    setRemoteCandidates(remoteCandidates: RTCIceCandidateDictionary[]): 无值;
    start(gatherer: RTCIceGatherer, remoteParameters: RTCIceParameters, role?: RTCIceRole): 无值;
    stop(): 无值;
    addEventListener<K 扩展 键为 RTCIceTransportEventMap>(type: K, listener: (this: RTCIceTransport, ev: RTCIceTransportEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 RTCIceTransportEventMap>(type: K, listener: (this: RTCIceTransport, ev: RTCIceTransportEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 RTCIceTransport: {
    prototype: RTCIceTransport;
    新建(): RTCIceTransport;

};
接口 RTCIceTransportStateChangedEvent 扩展 Event {
    只读 state: RTCIceTransportState;

}
声明 值量 RTCIceTransportStateChangedEvent: {
    prototype: RTCIceTransportStateChangedEvent;
    新建(): RTCIceTransportStateChangedEvent;

};
接口 RTCPeerConnectionEventMap {
    "addstream": MediaStreamEvent;
    "icecandidate": RTCPeerConnectionIceEvent;
    "iceconnectionstatechange": Event;
    "icegatheringstatechange": Event;
    "negotiationneeded": Event;
    "removestream": MediaStreamEvent;
    "signalingstatechange": Event;

}
接口 RTCPeerConnection 扩展 EventTarget {
    只读 canTrickleIceCandidates: 真假 | 空值;
    只读 iceConnectionState: RTCIceConnectionState;
    只读 iceGatheringState: RTCIceGatheringState;
    只读 localDescription: RTCSessionDescription | 空值;
    onaddstream: ((this: RTCPeerConnection, ev: MediaStreamEvent) => 任意) | 空值;
    onicecandidate: ((this: RTCPeerConnection, ev: RTCPeerConnectionIceEvent) => 任意) | 空值;
    oniceconnectionstatechange: ((this: RTCPeerConnection, ev: Event) => 任意) | 空值;
    onicegatheringstatechange: ((this: RTCPeerConnection, ev: Event) => 任意) | 空值;
    onnegotiationneeded: ((this: RTCPeerConnection, ev: Event) => 任意) | 空值;
    onremovestream: ((this: RTCPeerConnection, ev: MediaStreamEvent) => 任意) | 空值;
    onsignalingstatechange: ((this: RTCPeerConnection, ev: Event) => 任意) | 空值;
    只读 remoteDescription: RTCSessionDescription | 空值;
    只读 signalingState: RTCSignalingState;
    //@@{ 预设_:Promise }
    addIceCandidate(candidate: RTCIceCandidateInit | RTCIceCandidate): 预设_<无值>;
    addStream(stream: MediaStream): 无值;
    close(): 无值;
    //@@{ 预设_:Promise }
    createAnswer(options?: RTCOfferOptions): 预设_<RTCSessionDescriptionInit>;
    //@@{ 预设_:Promise }
    createOffer(options?: RTCOfferOptions): 预设_<RTCSessionDescriptionInit>;
    getConfiguration(): RTCConfiguration;
    getLocalStreams(): MediaStream[];
    getRemoteStreams(): MediaStream[];
    //@@{ 预设_:Promise }
    getStats(selector: MediaStreamTrack | 空值, successCallback?: RTCStatsCallback, failureCallback?: RTCPeerConnectionErrorCallback): 预设_<RTCStatsReport>;
    getStreamById(streamId: 文字): MediaStream | 空值;
    removeStream(stream: MediaStream): 无值;
    //@@{ 预设_:Promise }
    setLocalDescription(description: RTCSessionDescriptionInit): 预设_<无值>;
    //@@{ 预设_:Promise }
    setRemoteDescription(description: RTCSessionDescriptionInit): 预设_<无值>;
    addEventListener<K 扩展 键为 RTCPeerConnectionEventMap>(type: K, listener: (this: RTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 RTCPeerConnectionEventMap>(type: K, listener: (this: RTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 RTCPeerConnection: {
    prototype: RTCPeerConnection;
    新建(configuration: RTCConfiguration): RTCPeerConnection;

};
接口 RTCPeerConnectionIceEvent 扩展 Event {
    只读 candidate: RTCIceCandidate;

}
声明 值量 RTCPeerConnectionIceEvent: {
    prototype: RTCPeerConnectionIceEvent;
    新建(type: 文字, eventInitDict: RTCPeerConnectionIceEventInit): RTCPeerConnectionIceEvent;

};
接口 RTCRtpReceiverEventMap {
    "error": Event;
    "msdecodercapacitychange": Event;
    "msdsh": Event;

}
接口 RTCRtpReceiver 扩展 RTCStatsProvider {
    onerror: ((this: RTCRtpReceiver, ev: Event) => 任意) | 空值;
    onmsdecodercapacitychange: ((this: RTCRtpReceiver, ev: Event) => 任意) | 空值;
    onmsdsh: ((this: RTCRtpReceiver, ev: Event) => 任意) | 空值;
    只读 rtcpTransport: RTCDtlsTransport;
    只读 track: MediaStreamTrack | 空值;
    只读 transport: RTCDtlsTransport | RTCSrtpSdesTransport;
    getContributingSources(): RTCRtpContributingSource[];
    receive(parameters: RTCRtpParameters): 无值;
    requestSendCSRC(csrc: 数字): 无值;
    setTransport(transport: RTCDtlsTransport | RTCSrtpSdesTransport, rtcpTransport?: RTCDtlsTransport): 无值;
    stop(): 无值;
    addEventListener<K 扩展 键为 RTCRtpReceiverEventMap>(type: K, listener: (this: RTCRtpReceiver, ev: RTCRtpReceiverEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 RTCRtpReceiverEventMap>(type: K, listener: (this: RTCRtpReceiver, ev: RTCRtpReceiverEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 RTCRtpReceiver: {
    prototype: RTCRtpReceiver;
    新建(transport: RTCDtlsTransport | RTCSrtpSdesTransport, kind: 文字, rtcpTransport?: RTCDtlsTransport): RTCRtpReceiver;
    getCapabilities(kind?: 文字): RTCRtpCapabilities;

};
接口 RTCRtpSenderEventMap {
    "error": Event;
    "ssrcconflict": RTCSsrcConflictEvent;

}
接口 RTCRtpSender 扩展 RTCStatsProvider {
    onerror: ((this: RTCRtpSender, ev: Event) => 任意) | 空值;
    onssrcconflict: ((this: RTCRtpSender, ev: RTCSsrcConflictEvent) => 任意) | 空值;
    只读 rtcpTransport: RTCDtlsTransport;
    只读 track: MediaStreamTrack;
    只读 transport: RTCDtlsTransport | RTCSrtpSdesTransport;
    send(parameters: RTCRtpParameters): 无值;
    setTrack(track: MediaStreamTrack): 无值;
    setTransport(transport: RTCDtlsTransport | RTCSrtpSdesTransport, rtcpTransport?: RTCDtlsTransport): 无值;
    stop(): 无值;
    addEventListener<K 扩展 键为 RTCRtpSenderEventMap>(type: K, listener: (this: RTCRtpSender, ev: RTCRtpSenderEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 RTCRtpSenderEventMap>(type: K, listener: (this: RTCRtpSender, ev: RTCRtpSenderEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 RTCRtpSender: {
    prototype: RTCRtpSender;
    新建(track: MediaStreamTrack, transport: RTCDtlsTransport | RTCSrtpSdesTransport, rtcpTransport?: RTCDtlsTransport): RTCRtpSender;
    getCapabilities(kind?: 文字): RTCRtpCapabilities;

};
接口 RTCSessionDescription {
    sdp: 文字 | 空值;
    type: RTCSdpType | 空值;
    toJSON(): 任意;

}
声明 值量 RTCSessionDescription: {
    prototype: RTCSessionDescription;
    新建(descriptionInitDict?: RTCSessionDescriptionInit): RTCSessionDescription;

};
接口 RTCSrtpSdesTransportEventMap {
    "error": Event;

}
接口 RTCSrtpSdesTransport 扩展 EventTarget {
    onerror: ((this: RTCSrtpSdesTransport, ev: Event) => 任意) | 空值;
    只读 transport: RTCIceTransport;
    addEventListener<K 扩展 键为 RTCSrtpSdesTransportEventMap>(type: K, listener: (this: RTCSrtpSdesTransport, ev: RTCSrtpSdesTransportEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 RTCSrtpSdesTransportEventMap>(type: K, listener: (this: RTCSrtpSdesTransport, ev: RTCSrtpSdesTransportEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 RTCSrtpSdesTransport: {
    prototype: RTCSrtpSdesTransport;
    新建(transport: RTCIceTransport, encryptParameters: RTCSrtpSdesParameters, decryptParameters: RTCSrtpSdesParameters): RTCSrtpSdesTransport;
    getLocalParameters(): RTCSrtpSdesParameters[];

};
接口 RTCSsrcConflictEvent 扩展 Event {
    只读 ssrc: 数字;

}
声明 值量 RTCSsrcConflictEvent: {
    prototype: RTCSsrcConflictEvent;
    新建(): RTCSsrcConflictEvent;

};
接口 RTCStatsProvider 扩展 EventTarget {
    //@@{ 预设_:Promise }
    getStats(): 预设_<RTCStatsReport>;
    //@@{ 预设_:Promise }
    msGetStats(): 预设_<RTCStatsReport>;

}
声明 值量 RTCStatsProvider: {
    prototype: RTCStatsProvider;
    新建(): RTCStatsProvider;

};
接口 RandomSource {
    //@@{ 整数数组8_:Int8Array, 正整数固定数组8_:Uint8ClampedArray, 正整数数组8_:Uint8Array, 整数数组16_:Int16Array, 正整数数组16_:Uint16Array, 整数数组32_:Int32Array, 正整数数组32_:Uint32Array }
    getRandomValues<T 扩展 整数数组8_ | 正整数固定数组8_ | 正整数数组8_ | 整数数组16_ | 正整数数组16_ | 整数数组32_ | 正整数数组32_>(array: T): T;

}
声明 值量 RandomSource: {
    prototype: RandomSource;
    新建(): RandomSource;

};
接口 Range {
    只读 collapsed: 真假;
    只读 commonAncestorContainer: Node;
    只读 endContainer: Node;
    只读 endOffset: 数字;
    只读 startContainer: Node;
    只读 startOffset: 数字;
    cloneContents(): DocumentFragment;
    cloneRange(): Range;
    collapse(toStart?: 真假): 无值;
    compareBoundaryPoints(how: 数字, sourceRange: Range): 数字;
    createContextualFragment(fragment: 文字): DocumentFragment;
    deleteContents(): 无值;
    detach(): 无值;
    expand(Unit: ExpandGranularity): 真假;
    extractContents(): DocumentFragment;
    getBoundingClientRect(): ClientRect | DOMRect;
    getClientRects(): ClientRectList | DOMRectList;
    insertNode(node: Node): 无值;
    isPointInRange(node: Node, offset: 数字): 真假;
    selectNode(node: Node): 无值;
    selectNodeContents(node: Node): 无值;
    setEnd(node: Node, offset: 数字): 无值;
    setEndAfter(node: Node): 无值;
    setEndBefore(node: Node): 无值;
    setStart(node: Node, offset: 数字): 无值;
    setStartAfter(node: Node): 无值;
    setStartBefore(node: Node): 无值;
    surroundContents(newParent: Node): 无值;
    toString(): 文字;
    只读 END_TO_END: 数字;
    只读 END_TO_START: 数字;
    只读 START_TO_END: 数字;
    只读 START_TO_START: 数字;

}
声明 值量 Range: {
    prototype: Range;
    新建(): Range;
    只读 END_TO_END: 数字;
    只读 END_TO_START: 数字;
    只读 START_TO_END: 数字;
    只读 START_TO_START: 数字;

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
    只读 signal: AbortSignal | 空值;
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
接口 SVGAElement 扩展 SVGGraphicsElement, SVGURIReference {
    只读 target: SVGAnimatedString;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGAElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGAElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGAElement: {
    prototype: SVGAElement;
    新建(): SVGAElement;

};
接口 SVGAngle {
    只读 unitType: 数字;
    value: 数字;
    valueAsString: 文字;
    valueInSpecifiedUnits: 数字;
    convertToSpecifiedUnits(unitType: 数字): 无值;
    newValueSpecifiedUnits(unitType: 数字, valueInSpecifiedUnits: 数字): 无值;
    只读 SVG_ANGLETYPE_DEG: 数字;
    只读 SVG_ANGLETYPE_GRAD: 数字;
    只读 SVG_ANGLETYPE_RAD: 数字;
    只读 SVG_ANGLETYPE_UNKNOWN: 数字;
    只读 SVG_ANGLETYPE_UNSPECIFIED: 数字;

}
声明 值量 SVGAngle: {
    prototype: SVGAngle;
    新建(): SVGAngle;
    只读 SVG_ANGLETYPE_DEG: 数字;
    只读 SVG_ANGLETYPE_GRAD: 数字;
    只读 SVG_ANGLETYPE_RAD: 数字;
    只读 SVG_ANGLETYPE_UNKNOWN: 数字;
    只读 SVG_ANGLETYPE_UNSPECIFIED: 数字;

};
接口 SVGAnimatedAngle {
    只读 animVal: SVGAngle;
    只读 baseVal: SVGAngle;

}
声明 值量 SVGAnimatedAngle: {
    prototype: SVGAnimatedAngle;
    新建(): SVGAnimatedAngle;

};
接口 SVGAnimatedBoolean {
    只读 animVal: 真假;
    baseVal: 真假;

}
声明 值量 SVGAnimatedBoolean: {
    prototype: SVGAnimatedBoolean;
    新建(): SVGAnimatedBoolean;

};
接口 SVGAnimatedEnumeration {
    只读 animVal: 数字;
    baseVal: 数字;

}
声明 值量 SVGAnimatedEnumeration: {
    prototype: SVGAnimatedEnumeration;
    新建(): SVGAnimatedEnumeration;

};
接口 SVGAnimatedInteger {
    只读 animVal: 数字;
    baseVal: 数字;

}
声明 值量 SVGAnimatedInteger: {
    prototype: SVGAnimatedInteger;
    新建(): SVGAnimatedInteger;

};
接口 SVGAnimatedLength {
    只读 animVal: SVGLength;
    只读 baseVal: SVGLength;

}
声明 值量 SVGAnimatedLength: {
    prototype: SVGAnimatedLength;
    新建(): SVGAnimatedLength;

};
接口 SVGAnimatedLengthList {
    只读 animVal: SVGLengthList;
    只读 baseVal: SVGLengthList;

}
声明 值量 SVGAnimatedLengthList: {
    prototype: SVGAnimatedLengthList;
    新建(): SVGAnimatedLengthList;

};
接口 SVGAnimatedNumber {
    只读 animVal: 数字;
    baseVal: 数字;

}
声明 值量 SVGAnimatedNumber: {
    prototype: SVGAnimatedNumber;
    新建(): SVGAnimatedNumber;

};
接口 SVGAnimatedNumberList {
    只读 animVal: SVGNumberList;
    只读 baseVal: SVGNumberList;

}
声明 值量 SVGAnimatedNumberList: {
    prototype: SVGAnimatedNumberList;
    新建(): SVGAnimatedNumberList;

};
接口 SVGAnimatedPoints {
    只读 animatedPoints: SVGPointList;
    只读 points: SVGPointList;

}
接口 SVGAnimatedPreserveAspectRatio {
    只读 animVal: SVGPreserveAspectRatio;
    只读 baseVal: SVGPreserveAspectRatio;

}
声明 值量 SVGAnimatedPreserveAspectRatio: {
    prototype: SVGAnimatedPreserveAspectRatio;
    新建(): SVGAnimatedPreserveAspectRatio;

};
接口 SVGAnimatedRect {
    只读 animVal: SVGRect;
    只读 baseVal: SVGRect;

}
声明 值量 SVGAnimatedRect: {
    prototype: SVGAnimatedRect;
    新建(): SVGAnimatedRect;

};
接口 SVGAnimatedString {
    只读 animVal: 文字;
    baseVal: 文字;

}
声明 值量 SVGAnimatedString: {
    prototype: SVGAnimatedString;
    新建(): SVGAnimatedString;

};
接口 SVGAnimatedTransformList {
    只读 animVal: SVGTransformList;
    只读 baseVal: SVGTransformList;

}
声明 值量 SVGAnimatedTransformList: {
    prototype: SVGAnimatedTransformList;
    新建(): SVGAnimatedTransformList;

};
接口 SVGCircleElement 扩展 SVGGraphicsElement {
    只读 cx: SVGAnimatedLength;
    只读 cy: SVGAnimatedLength;
    只读 r: SVGAnimatedLength;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGCircleElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGCircleElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGCircleElement: {
    prototype: SVGCircleElement;
    新建(): SVGCircleElement;

};
接口 SVGClipPathElement 扩展 SVGGraphicsElement, SVGUnitTypes {
    只读 clipPathUnits: SVGAnimatedEnumeration;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGClipPathElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGClipPathElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGClipPathElement: {
    prototype: SVGClipPathElement;
    新建(): SVGClipPathElement;

};
接口 SVGComponentTransferFunctionElement 扩展 SVGElement {
    只读 amplitude: SVGAnimatedNumber;
    只读 exponent: SVGAnimatedNumber;
    只读 intercept: SVGAnimatedNumber;
    只读 offset: SVGAnimatedNumber;
    只读 slope: SVGAnimatedNumber;
    只读 tableValues: SVGAnimatedNumberList;
    只读 type: SVGAnimatedEnumeration;
    只读 SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: 数字;
    只读 SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: 数字;
    只读 SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: 数字;
    只读 SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: 数字;
    只读 SVG_FECOMPONENTTRANSFER_TYPE_TABLE: 数字;
    只读 SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: 数字;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGComponentTransferFunctionElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGComponentTransferFunctionElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGComponentTransferFunctionElement: {
    prototype: SVGComponentTransferFunctionElement;
    新建(): SVGComponentTransferFunctionElement;
    只读 SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: 数字;
    只读 SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: 数字;
    只读 SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: 数字;
    只读 SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: 数字;
    只读 SVG_FECOMPONENTTRANSFER_TYPE_TABLE: 数字;
    只读 SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: 数字;

};
接口 SVGDefsElement 扩展 SVGGraphicsElement {
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGDefsElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGDefsElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGDefsElement: {
    prototype: SVGDefsElement;
    新建(): SVGDefsElement;

};
接口 SVGDescElement 扩展 SVGElement {
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGDescElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGDescElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGDescElement: {
    prototype: SVGDescElement;
    新建(): SVGDescElement;

};
接口 SVGElementEventMap 扩展 ElementEventMap {
    "click": MouseEvent;
    "dblclick": MouseEvent;
    "focusin": FocusEvent;
    "focusout": FocusEvent;
    "load": Event;
    "mousedown": MouseEvent;
    "mousemove": MouseEvent;
    "mouseout": MouseEvent;
    "mouseover": MouseEvent;
    "mouseup": MouseEvent;

}
接口 SVGElement 扩展 Element, ElementCSSInlineStyle {
    只读 className: 任意;
    onclick: ((this: SVGElement, ev: MouseEvent) => 任意) | 空值;
    ondblclick: ((this: SVGElement, ev: MouseEvent) => 任意) | 空值;
    onfocusin: ((this: SVGElement, ev: FocusEvent) => 任意) | 空值;
    onfocusout: ((this: SVGElement, ev: FocusEvent) => 任意) | 空值;
    onload: ((this: SVGElement, ev: Event) => 任意) | 空值;
    onmousedown: ((this: SVGElement, ev: MouseEvent) => 任意) | 空值;
    onmousemove: ((this: SVGElement, ev: MouseEvent) => 任意) | 空值;
    onmouseout: ((this: SVGElement, ev: MouseEvent) => 任意) | 空值;
    onmouseover: ((this: SVGElement, ev: MouseEvent) => 任意) | 空值;
    onmouseup: ((this: SVGElement, ev: MouseEvent) => 任意) | 空值;
    只读 ownerSVGElement: SVGSVGElement | 空值;
    只读 viewportElement: SVGElement | 空值;

    /** @deprecated */
    xmlbase: 文字;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGElement: {
    prototype: SVGElement;
    新建(): SVGElement;

};
接口 SVGElementInstance 扩展 EventTarget {
    只读 childNodes: SVGElementInstanceList;
    只读 correspondingElement: SVGElement;
    只读 correspondingUseElement: SVGUseElement;
    只读 firstChild: SVGElementInstance;
    只读 lastChild: SVGElementInstance;
    只读 nextSibling: SVGElementInstance;
    只读 parentNode: SVGElementInstance;
    只读 previousSibling: SVGElementInstance;

}
声明 值量 SVGElementInstance: {
    prototype: SVGElementInstance;
    新建(): SVGElementInstance;

};
接口 SVGElementInstanceList {

    /** @deprecated */
    只读 length: 数字;

    /** @deprecated */
    item(index: 数字): SVGElementInstance;

}
声明 值量 SVGElementInstanceList: {
    prototype: SVGElementInstanceList;
    新建(): SVGElementInstanceList;

};
接口 SVGEllipseElement 扩展 SVGGraphicsElement {
    只读 cx: SVGAnimatedLength;
    只读 cy: SVGAnimatedLength;
    只读 rx: SVGAnimatedLength;
    只读 ry: SVGAnimatedLength;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGEllipseElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGEllipseElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGEllipseElement: {
    prototype: SVGEllipseElement;
    新建(): SVGEllipseElement;

};
接口 SVGFEBlendElement 扩展 SVGElement, SVGFilterPrimitiveStandardAttributes {
    只读 in1: SVGAnimatedString;
    只读 in2: SVGAnimatedString;
    只读 mode: SVGAnimatedEnumeration;
    只读 SVG_FEBLEND_MODE_COLOR: 数字;
    只读 SVG_FEBLEND_MODE_COLOR_BURN: 数字;
    只读 SVG_FEBLEND_MODE_COLOR_DODGE: 数字;
    只读 SVG_FEBLEND_MODE_DARKEN: 数字;
    只读 SVG_FEBLEND_MODE_DIFFERENCE: 数字;
    只读 SVG_FEBLEND_MODE_EXCLUSION: 数字;
    只读 SVG_FEBLEND_MODE_HARD_LIGHT: 数字;
    只读 SVG_FEBLEND_MODE_HUE: 数字;
    只读 SVG_FEBLEND_MODE_LIGHTEN: 数字;
    只读 SVG_FEBLEND_MODE_LUMINOSITY: 数字;
    只读 SVG_FEBLEND_MODE_MULTIPLY: 数字;
    只读 SVG_FEBLEND_MODE_NORMAL: 数字;
    只读 SVG_FEBLEND_MODE_OVERLAY: 数字;
    只读 SVG_FEBLEND_MODE_SATURATION: 数字;
    只读 SVG_FEBLEND_MODE_SCREEN: 数字;
    只读 SVG_FEBLEND_MODE_SOFT_LIGHT: 数字;
    只读 SVG_FEBLEND_MODE_UNKNOWN: 数字;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEBlendElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEBlendElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFEBlendElement: {
    prototype: SVGFEBlendElement;
    新建(): SVGFEBlendElement;
    只读 SVG_FEBLEND_MODE_COLOR: 数字;
    只读 SVG_FEBLEND_MODE_COLOR_BURN: 数字;
    只读 SVG_FEBLEND_MODE_COLOR_DODGE: 数字;
    只读 SVG_FEBLEND_MODE_DARKEN: 数字;
    只读 SVG_FEBLEND_MODE_DIFFERENCE: 数字;
    只读 SVG_FEBLEND_MODE_EXCLUSION: 数字;
    只读 SVG_FEBLEND_MODE_HARD_LIGHT: 数字;
    只读 SVG_FEBLEND_MODE_HUE: 数字;
    只读 SVG_FEBLEND_MODE_LIGHTEN: 数字;
    只读 SVG_FEBLEND_MODE_LUMINOSITY: 数字;
    只读 SVG_FEBLEND_MODE_MULTIPLY: 数字;
    只读 SVG_FEBLEND_MODE_NORMAL: 数字;
    只读 SVG_FEBLEND_MODE_OVERLAY: 数字;
    只读 SVG_FEBLEND_MODE_SATURATION: 数字;
    只读 SVG_FEBLEND_MODE_SCREEN: 数字;
    只读 SVG_FEBLEND_MODE_SOFT_LIGHT: 数字;
    只读 SVG_FEBLEND_MODE_UNKNOWN: 数字;

};
接口 SVGFEColorMatrixElement 扩展 SVGElement, SVGFilterPrimitiveStandardAttributes {
    只读 in1: SVGAnimatedString;
    只读 type: SVGAnimatedEnumeration;
    只读 values: SVGAnimatedNumberList;
    只读 SVG_FECOLORMATRIX_TYPE_HUEROTATE: 数字;
    只读 SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: 数字;
    只读 SVG_FECOLORMATRIX_TYPE_MATRIX: 数字;
    只读 SVG_FECOLORMATRIX_TYPE_SATURATE: 数字;
    只读 SVG_FECOLORMATRIX_TYPE_UNKNOWN: 数字;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEColorMatrixElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEColorMatrixElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFEColorMatrixElement: {
    prototype: SVGFEColorMatrixElement;
    新建(): SVGFEColorMatrixElement;
    只读 SVG_FECOLORMATRIX_TYPE_HUEROTATE: 数字;
    只读 SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: 数字;
    只读 SVG_FECOLORMATRIX_TYPE_MATRIX: 数字;
    只读 SVG_FECOLORMATRIX_TYPE_SATURATE: 数字;
    只读 SVG_FECOLORMATRIX_TYPE_UNKNOWN: 数字;

};
接口 SVGFEComponentTransferElement 扩展 SVGElement, SVGFilterPrimitiveStandardAttributes {
    只读 in1: SVGAnimatedString;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEComponentTransferElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEComponentTransferElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFEComponentTransferElement: {
    prototype: SVGFEComponentTransferElement;
    新建(): SVGFEComponentTransferElement;

};
接口 SVGFECompositeElement 扩展 SVGElement, SVGFilterPrimitiveStandardAttributes {
    只读 in1: SVGAnimatedString;
    只读 in2: SVGAnimatedString;
    只读 k1: SVGAnimatedNumber;
    只读 k2: SVGAnimatedNumber;
    只读 k3: SVGAnimatedNumber;
    只读 k4: SVGAnimatedNumber;
    只读 operator: SVGAnimatedEnumeration;
    只读 SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: 数字;
    只读 SVG_FECOMPOSITE_OPERATOR_ATOP: 数字;
    只读 SVG_FECOMPOSITE_OPERATOR_IN: 数字;
    只读 SVG_FECOMPOSITE_OPERATOR_OUT: 数字;
    只读 SVG_FECOMPOSITE_OPERATOR_OVER: 数字;
    只读 SVG_FECOMPOSITE_OPERATOR_UNKNOWN: 数字;
    只读 SVG_FECOMPOSITE_OPERATOR_XOR: 数字;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFECompositeElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFECompositeElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFECompositeElement: {
    prototype: SVGFECompositeElement;
    新建(): SVGFECompositeElement;
    只读 SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: 数字;
    只读 SVG_FECOMPOSITE_OPERATOR_ATOP: 数字;
    只读 SVG_FECOMPOSITE_OPERATOR_IN: 数字;
    只读 SVG_FECOMPOSITE_OPERATOR_OUT: 数字;
    只读 SVG_FECOMPOSITE_OPERATOR_OVER: 数字;
    只读 SVG_FECOMPOSITE_OPERATOR_UNKNOWN: 数字;
    只读 SVG_FECOMPOSITE_OPERATOR_XOR: 数字;

};
接口 SVGFEConvolveMatrixElement 扩展 SVGElement, SVGFilterPrimitiveStandardAttributes {
    只读 bias: SVGAnimatedNumber;
    只读 divisor: SVGAnimatedNumber;
    只读 edgeMode: SVGAnimatedEnumeration;
    只读 in1: SVGAnimatedString;
    只读 kernelMatrix: SVGAnimatedNumberList;
    只读 kernelUnitLengthX: SVGAnimatedNumber;
    只读 kernelUnitLengthY: SVGAnimatedNumber;
    只读 orderX: SVGAnimatedInteger;
    只读 orderY: SVGAnimatedInteger;
    只读 preserveAlpha: SVGAnimatedBoolean;
    只读 targetX: SVGAnimatedInteger;
    只读 targetY: SVGAnimatedInteger;
    只读 SVG_EDGEMODE_DUPLICATE: 数字;
    只读 SVG_EDGEMODE_NONE: 数字;
    只读 SVG_EDGEMODE_UNKNOWN: 数字;
    只读 SVG_EDGEMODE_WRAP: 数字;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEConvolveMatrixElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEConvolveMatrixElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFEConvolveMatrixElement: {
    prototype: SVGFEConvolveMatrixElement;
    新建(): SVGFEConvolveMatrixElement;
    只读 SVG_EDGEMODE_DUPLICATE: 数字;
    只读 SVG_EDGEMODE_NONE: 数字;
    只读 SVG_EDGEMODE_UNKNOWN: 数字;
    只读 SVG_EDGEMODE_WRAP: 数字;

};
接口 SVGFEDiffuseLightingElement 扩展 SVGElement, SVGFilterPrimitiveStandardAttributes {
    只读 diffuseConstant: SVGAnimatedNumber;
    只读 in1: SVGAnimatedString;
    只读 kernelUnitLengthX: SVGAnimatedNumber;
    只读 kernelUnitLengthY: SVGAnimatedNumber;
    只读 surfaceScale: SVGAnimatedNumber;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEDiffuseLightingElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEDiffuseLightingElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFEDiffuseLightingElement: {
    prototype: SVGFEDiffuseLightingElement;
    新建(): SVGFEDiffuseLightingElement;

};
接口 SVGFEDisplacementMapElement 扩展 SVGElement, SVGFilterPrimitiveStandardAttributes {
    只读 in1: SVGAnimatedString;
    只读 in2: SVGAnimatedString;
    只读 scale: SVGAnimatedNumber;
    只读 xChannelSelector: SVGAnimatedEnumeration;
    只读 yChannelSelector: SVGAnimatedEnumeration;
    只读 SVG_CHANNEL_A: 数字;
    只读 SVG_CHANNEL_B: 数字;
    只读 SVG_CHANNEL_G: 数字;
    只读 SVG_CHANNEL_R: 数字;
    只读 SVG_CHANNEL_UNKNOWN: 数字;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEDisplacementMapElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEDisplacementMapElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFEDisplacementMapElement: {
    prototype: SVGFEDisplacementMapElement;
    新建(): SVGFEDisplacementMapElement;
    只读 SVG_CHANNEL_A: 数字;
    只读 SVG_CHANNEL_B: 数字;
    只读 SVG_CHANNEL_G: 数字;
    只读 SVG_CHANNEL_R: 数字;
    只读 SVG_CHANNEL_UNKNOWN: 数字;

};
接口 SVGFEDistantLightElement 扩展 SVGElement {
    只读 azimuth: SVGAnimatedNumber;
    只读 elevation: SVGAnimatedNumber;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEDistantLightElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEDistantLightElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFEDistantLightElement: {
    prototype: SVGFEDistantLightElement;
    新建(): SVGFEDistantLightElement;

};
接口 SVGFEFloodElement 扩展 SVGElement, SVGFilterPrimitiveStandardAttributes {
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEFloodElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEFloodElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFEFloodElement: {
    prototype: SVGFEFloodElement;
    新建(): SVGFEFloodElement;

};
接口 SVGFEFuncAElement 扩展 SVGComponentTransferFunctionElement {
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEFuncAElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEFuncAElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFEFuncAElement: {
    prototype: SVGFEFuncAElement;
    新建(): SVGFEFuncAElement;

};
接口 SVGFEFuncBElement 扩展 SVGComponentTransferFunctionElement {
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEFuncBElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEFuncBElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFEFuncBElement: {
    prototype: SVGFEFuncBElement;
    新建(): SVGFEFuncBElement;

};
接口 SVGFEFuncGElement 扩展 SVGComponentTransferFunctionElement {
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEFuncGElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEFuncGElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFEFuncGElement: {
    prototype: SVGFEFuncGElement;
    新建(): SVGFEFuncGElement;

};
接口 SVGFEFuncRElement 扩展 SVGComponentTransferFunctionElement {
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEFuncRElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEFuncRElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFEFuncRElement: {
    prototype: SVGFEFuncRElement;
    新建(): SVGFEFuncRElement;

};
接口 SVGFEGaussianBlurElement 扩展 SVGElement, SVGFilterPrimitiveStandardAttributes {
    只读 in1: SVGAnimatedString;
    只读 stdDeviationX: SVGAnimatedNumber;
    只读 stdDeviationY: SVGAnimatedNumber;
    setStdDeviation(stdDeviationX: 数字, stdDeviationY: 数字): 无值;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEGaussianBlurElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEGaussianBlurElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFEGaussianBlurElement: {
    prototype: SVGFEGaussianBlurElement;
    新建(): SVGFEGaussianBlurElement;

};
接口 SVGFEImageElement 扩展 SVGElement, SVGFilterPrimitiveStandardAttributes, SVGURIReference {
    只读 preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEImageElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEImageElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFEImageElement: {
    prototype: SVGFEImageElement;
    新建(): SVGFEImageElement;

};
接口 SVGFEMergeElement 扩展 SVGElement, SVGFilterPrimitiveStandardAttributes {
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEMergeElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEMergeElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFEMergeElement: {
    prototype: SVGFEMergeElement;
    新建(): SVGFEMergeElement;

};
接口 SVGFEMergeNodeElement 扩展 SVGElement {
    只读 in1: SVGAnimatedString;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEMergeNodeElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEMergeNodeElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFEMergeNodeElement: {
    prototype: SVGFEMergeNodeElement;
    新建(): SVGFEMergeNodeElement;

};
接口 SVGFEMorphologyElement 扩展 SVGElement, SVGFilterPrimitiveStandardAttributes {
    只读 in1: SVGAnimatedString;
    只读 operator: SVGAnimatedEnumeration;
    只读 radiusX: SVGAnimatedNumber;
    只读 radiusY: SVGAnimatedNumber;
    只读 SVG_MORPHOLOGY_OPERATOR_DILATE: 数字;
    只读 SVG_MORPHOLOGY_OPERATOR_ERODE: 数字;
    只读 SVG_MORPHOLOGY_OPERATOR_UNKNOWN: 数字;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEMorphologyElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEMorphologyElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFEMorphologyElement: {
    prototype: SVGFEMorphologyElement;
    新建(): SVGFEMorphologyElement;
    只读 SVG_MORPHOLOGY_OPERATOR_DILATE: 数字;
    只读 SVG_MORPHOLOGY_OPERATOR_ERODE: 数字;
    只读 SVG_MORPHOLOGY_OPERATOR_UNKNOWN: 数字;

};
接口 SVGFEOffsetElement 扩展 SVGElement, SVGFilterPrimitiveStandardAttributes {
    只读 dx: SVGAnimatedNumber;
    只读 dy: SVGAnimatedNumber;
    只读 in1: SVGAnimatedString;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEOffsetElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEOffsetElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFEOffsetElement: {
    prototype: SVGFEOffsetElement;
    新建(): SVGFEOffsetElement;

};
接口 SVGFEPointLightElement 扩展 SVGElement {
    只读 x: SVGAnimatedNumber;
    只读 y: SVGAnimatedNumber;
    只读 z: SVGAnimatedNumber;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEPointLightElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFEPointLightElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFEPointLightElement: {
    prototype: SVGFEPointLightElement;
    新建(): SVGFEPointLightElement;

};
接口 SVGFESpecularLightingElement 扩展 SVGElement, SVGFilterPrimitiveStandardAttributes {
    只读 in1: SVGAnimatedString;
    只读 kernelUnitLengthX: SVGAnimatedNumber;
    只读 kernelUnitLengthY: SVGAnimatedNumber;
    只读 specularConstant: SVGAnimatedNumber;
    只读 specularExponent: SVGAnimatedNumber;
    只读 surfaceScale: SVGAnimatedNumber;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFESpecularLightingElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFESpecularLightingElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFESpecularLightingElement: {
    prototype: SVGFESpecularLightingElement;
    新建(): SVGFESpecularLightingElement;

};
接口 SVGFESpotLightElement 扩展 SVGElement {
    只读 limitingConeAngle: SVGAnimatedNumber;
    只读 pointsAtX: SVGAnimatedNumber;
    只读 pointsAtY: SVGAnimatedNumber;
    只读 pointsAtZ: SVGAnimatedNumber;
    只读 specularExponent: SVGAnimatedNumber;
    只读 x: SVGAnimatedNumber;
    只读 y: SVGAnimatedNumber;
    只读 z: SVGAnimatedNumber;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFESpotLightElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFESpotLightElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFESpotLightElement: {
    prototype: SVGFESpotLightElement;
    新建(): SVGFESpotLightElement;

};
接口 SVGFETileElement 扩展 SVGElement, SVGFilterPrimitiveStandardAttributes {
    只读 in1: SVGAnimatedString;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFETileElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFETileElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFETileElement: {
    prototype: SVGFETileElement;
    新建(): SVGFETileElement;

};
接口 SVGFETurbulenceElement 扩展 SVGElement, SVGFilterPrimitiveStandardAttributes {
    只读 baseFrequencyX: SVGAnimatedNumber;
    只读 baseFrequencyY: SVGAnimatedNumber;
    只读 numOctaves: SVGAnimatedInteger;
    只读 seed: SVGAnimatedNumber;
    只读 stitchTiles: SVGAnimatedEnumeration;
    只读 type: SVGAnimatedEnumeration;
    只读 SVG_STITCHTYPE_NOSTITCH: 数字;
    只读 SVG_STITCHTYPE_STITCH: 数字;
    只读 SVG_STITCHTYPE_UNKNOWN: 数字;
    只读 SVG_TURBULENCE_TYPE_FRACTALNOISE: 数字;
    只读 SVG_TURBULENCE_TYPE_TURBULENCE: 数字;
    只读 SVG_TURBULENCE_TYPE_UNKNOWN: 数字;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFETurbulenceElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFETurbulenceElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFETurbulenceElement: {
    prototype: SVGFETurbulenceElement;
    新建(): SVGFETurbulenceElement;
    只读 SVG_STITCHTYPE_NOSTITCH: 数字;
    只读 SVG_STITCHTYPE_STITCH: 数字;
    只读 SVG_STITCHTYPE_UNKNOWN: 数字;
    只读 SVG_TURBULENCE_TYPE_FRACTALNOISE: 数字;
    只读 SVG_TURBULENCE_TYPE_TURBULENCE: 数字;
    只读 SVG_TURBULENCE_TYPE_UNKNOWN: 数字;

};
接口 SVGFilterElement 扩展 SVGElement, SVGUnitTypes, SVGURIReference {

    /** @deprecated */
    只读 filterResX: SVGAnimatedInteger;

    /** @deprecated */
    只读 filterResY: SVGAnimatedInteger;
    只读 filterUnits: SVGAnimatedEnumeration;
    只读 height: SVGAnimatedLength;
    只读 primitiveUnits: SVGAnimatedEnumeration;
    只读 width: SVGAnimatedLength;
    只读 x: SVGAnimatedLength;
    只读 y: SVGAnimatedLength;

    /** @deprecated */
    setFilterRes(filterResX: 数字, filterResY: 数字): 无值;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFilterElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGFilterElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGFilterElement: {
    prototype: SVGFilterElement;
    新建(): SVGFilterElement;

};
接口 SVGFilterPrimitiveStandardAttributes {
    只读 height: SVGAnimatedLength;
    只读 result: SVGAnimatedString;
    只读 width: SVGAnimatedLength;
    只读 x: SVGAnimatedLength;
    只读 y: SVGAnimatedLength;

}
接口 SVGFitToViewBox {
    只读 preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    只读 viewBox: SVGAnimatedRect;

}
接口 SVGForeignObjectElement 扩展 SVGGraphicsElement {
    只读 height: SVGAnimatedLength;
    只读 width: SVGAnimatedLength;
    只读 x: SVGAnimatedLength;
    只读 y: SVGAnimatedLength;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGForeignObjectElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGForeignObjectElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGForeignObjectElement: {
    prototype: SVGForeignObjectElement;
    新建(): SVGForeignObjectElement;

};
接口 SVGGElement 扩展 SVGGraphicsElement {
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGGElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGGElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGGElement: {
    prototype: SVGGElement;
    新建(): SVGGElement;

};
接口 SVGGradientElement 扩展 SVGElement, SVGUnitTypes, SVGURIReference {
    只读 gradientTransform: SVGAnimatedTransformList;
    只读 gradientUnits: SVGAnimatedEnumeration;
    只读 spreadMethod: SVGAnimatedEnumeration;
    只读 SVG_SPREADMETHOD_PAD: 数字;
    只读 SVG_SPREADMETHOD_REFLECT: 数字;
    只读 SVG_SPREADMETHOD_REPEAT: 数字;
    只读 SVG_SPREADMETHOD_UNKNOWN: 数字;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGGradientElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGGradientElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGGradientElement: {
    prototype: SVGGradientElement;
    新建(): SVGGradientElement;
    只读 SVG_SPREADMETHOD_PAD: 数字;
    只读 SVG_SPREADMETHOD_REFLECT: 数字;
    只读 SVG_SPREADMETHOD_REPEAT: 数字;
    只读 SVG_SPREADMETHOD_UNKNOWN: 数字;

};
接口 SVGGraphicsElement 扩展 SVGElement, SVGTests {

    /** @deprecated */
    只读 farthestViewportElement: SVGElement | 空值;

    /** @deprecated */
    只读 nearestViewportElement: SVGElement | 空值;
    只读 transform: SVGAnimatedTransformList;
    getBBox(): SVGRect;
    getCTM(): SVGMatrix | 空值;
    getScreenCTM(): SVGMatrix | 空值;

    /** @deprecated */
    getTransformToElement(element: SVGElement): SVGMatrix;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGGraphicsElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGGraphicsElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGGraphicsElement: {
    prototype: SVGGraphicsElement;
    新建(): SVGGraphicsElement;

};
接口 SVGImageElement 扩展 SVGGraphicsElement, SVGURIReference {
    只读 height: SVGAnimatedLength;
    只读 preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    只读 width: SVGAnimatedLength;
    只读 x: SVGAnimatedLength;
    只读 y: SVGAnimatedLength;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGImageElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGImageElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGImageElement: {
    prototype: SVGImageElement;
    新建(): SVGImageElement;

};
接口 SVGLength {
    只读 unitType: 数字;
    value: 数字;
    valueAsString: 文字;
    valueInSpecifiedUnits: 数字;
    convertToSpecifiedUnits(unitType: 数字): 无值;
    newValueSpecifiedUnits(unitType: 数字, valueInSpecifiedUnits: 数字): 无值;
    只读 SVG_LENGTHTYPE_CM: 数字;
    只读 SVG_LENGTHTYPE_EMS: 数字;
    只读 SVG_LENGTHTYPE_EXS: 数字;
    只读 SVG_LENGTHTYPE_IN: 数字;
    只读 SVG_LENGTHTYPE_MM: 数字;
    只读 SVG_LENGTHTYPE_NUMBER: 数字;
    只读 SVG_LENGTHTYPE_PC: 数字;
    只读 SVG_LENGTHTYPE_PERCENTAGE: 数字;
    只读 SVG_LENGTHTYPE_PT: 数字;
    只读 SVG_LENGTHTYPE_PX: 数字;
    只读 SVG_LENGTHTYPE_UNKNOWN: 数字;

}
声明 值量 SVGLength: {
    prototype: SVGLength;
    新建(): SVGLength;
    只读 SVG_LENGTHTYPE_CM: 数字;
    只读 SVG_LENGTHTYPE_EMS: 数字;
    只读 SVG_LENGTHTYPE_EXS: 数字;
    只读 SVG_LENGTHTYPE_IN: 数字;
    只读 SVG_LENGTHTYPE_MM: 数字;
    只读 SVG_LENGTHTYPE_NUMBER: 数字;
    只读 SVG_LENGTHTYPE_PC: 数字;
    只读 SVG_LENGTHTYPE_PERCENTAGE: 数字;
    只读 SVG_LENGTHTYPE_PT: 数字;
    只读 SVG_LENGTHTYPE_PX: 数字;
    只读 SVG_LENGTHTYPE_UNKNOWN: 数字;

};
接口 SVGLengthList {
    只读 numberOfItems: 数字;
    appendItem(newItem: SVGLength): SVGLength;
    clear(): 无值;
    getItem(index: 数字): SVGLength;
    initialize(newItem: SVGLength): SVGLength;
    insertItemBefore(newItem: SVGLength, index: 数字): SVGLength;
    removeItem(index: 数字): SVGLength;
    replaceItem(newItem: SVGLength, index: 数字): SVGLength;

}
声明 值量 SVGLengthList: {
    prototype: SVGLengthList;
    新建(): SVGLengthList;

};
接口 SVGLineElement 扩展 SVGGraphicsElement {
    只读 x1: SVGAnimatedLength;
    只读 x2: SVGAnimatedLength;
    只读 y1: SVGAnimatedLength;
    只读 y2: SVGAnimatedLength;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGLineElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGLineElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGLineElement: {
    prototype: SVGLineElement;
    新建(): SVGLineElement;

};
接口 SVGLinearGradientElement 扩展 SVGGradientElement {
    只读 x1: SVGAnimatedLength;
    只读 x2: SVGAnimatedLength;
    只读 y1: SVGAnimatedLength;
    只读 y2: SVGAnimatedLength;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGLinearGradientElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGLinearGradientElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGLinearGradientElement: {
    prototype: SVGLinearGradientElement;
    新建(): SVGLinearGradientElement;

};
接口 SVGMarkerElement 扩展 SVGElement, SVGFitToViewBox {
    只读 markerHeight: SVGAnimatedLength;
    只读 markerUnits: SVGAnimatedEnumeration;
    只读 markerWidth: SVGAnimatedLength;
    只读 orientAngle: SVGAnimatedAngle;
    只读 orientType: SVGAnimatedEnumeration;
    只读 refX: SVGAnimatedLength;
    只读 refY: SVGAnimatedLength;
    setOrientToAngle(angle: SVGAngle): 无值;
    setOrientToAuto(): 无值;
    只读 SVG_MARKERUNITS_STROKEWIDTH: 数字;
    只读 SVG_MARKERUNITS_UNKNOWN: 数字;
    只读 SVG_MARKERUNITS_USERSPACEONUSE: 数字;
    只读 SVG_MARKER_ORIENT_ANGLE: 数字;
    只读 SVG_MARKER_ORIENT_AUTO: 数字;
    只读 SVG_MARKER_ORIENT_UNKNOWN: 数字;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGMarkerElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGMarkerElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGMarkerElement: {
    prototype: SVGMarkerElement;
    新建(): SVGMarkerElement;
    只读 SVG_MARKERUNITS_STROKEWIDTH: 数字;
    只读 SVG_MARKERUNITS_UNKNOWN: 数字;
    只读 SVG_MARKERUNITS_USERSPACEONUSE: 数字;
    只读 SVG_MARKER_ORIENT_ANGLE: 数字;
    只读 SVG_MARKER_ORIENT_AUTO: 数字;
    只读 SVG_MARKER_ORIENT_UNKNOWN: 数字;

};
接口 SVGMaskElement 扩展 SVGElement, SVGTests, SVGUnitTypes {
    只读 height: SVGAnimatedLength;
    只读 maskContentUnits: SVGAnimatedEnumeration;
    只读 maskUnits: SVGAnimatedEnumeration;
    只读 width: SVGAnimatedLength;
    只读 x: SVGAnimatedLength;
    只读 y: SVGAnimatedLength;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGMaskElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGMaskElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGMaskElement: {
    prototype: SVGMaskElement;
    新建(): SVGMaskElement;

};
接口 SVGMatrix {
    a: 数字;
    b: 数字;
    c: 数字;
    d: 数字;
    e: 数字;
    f: 数字;
    flipX(): SVGMatrix;
    flipY(): SVGMatrix;
    inverse(): SVGMatrix;
    multiply(secondMatrix: SVGMatrix): SVGMatrix;
    rotate(angle: 数字): SVGMatrix;
    rotateFromVector(x: 数字, y: 数字): SVGMatrix;
    scale(scaleFactor: 数字): SVGMatrix;
    scaleNonUniform(scaleFactorX: 数字, scaleFactorY: 数字): SVGMatrix;
    skewX(angle: 数字): SVGMatrix;
    skewY(angle: 数字): SVGMatrix;
    translate(x: 数字, y: 数字): SVGMatrix;

}
声明 值量 SVGMatrix: {
    prototype: SVGMatrix;
    新建(): SVGMatrix;

};
接口 SVGMetadataElement 扩展 SVGElement {
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGMetadataElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGMetadataElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGMetadataElement: {
    prototype: SVGMetadataElement;
    新建(): SVGMetadataElement;

};
接口 SVGNumber {
    value: 数字;

}
声明 值量 SVGNumber: {
    prototype: SVGNumber;
    新建(): SVGNumber;

};
接口 SVGNumberList {
    只读 numberOfItems: 数字;
    appendItem(newItem: SVGNumber): SVGNumber;
    clear(): 无值;
    getItem(index: 数字): SVGNumber;
    initialize(newItem: SVGNumber): SVGNumber;
    insertItemBefore(newItem: SVGNumber, index: 数字): SVGNumber;
    removeItem(index: 数字): SVGNumber;
    replaceItem(newItem: SVGNumber, index: 数字): SVGNumber;

}
声明 值量 SVGNumberList: {
    prototype: SVGNumberList;
    新建(): SVGNumberList;

};
接口 SVGPathElement 扩展 SVGGraphicsElement {

    /** @deprecated */
    只读 pathSegList: SVGPathSegList;

    /** @deprecated */
    createSVGPathSegArcAbs(x: 数字, y: 数字, r1: 数字, r2: 数字, angle: 数字, largeArcFlag: 真假, sweepFlag: 真假): SVGPathSegArcAbs;

    /** @deprecated */
    createSVGPathSegArcRel(x: 数字, y: 数字, r1: 数字, r2: 数字, angle: 数字, largeArcFlag: 真假, sweepFlag: 真假): SVGPathSegArcRel;

    /** @deprecated */
    createSVGPathSegClosePath(): SVGPathSegClosePath;

    /** @deprecated */
    createSVGPathSegCurvetoCubicAbs(x: 数字, y: 数字, x1: 数字, y1: 数字, x2: 数字, y2: 数字): SVGPathSegCurvetoCubicAbs;

    /** @deprecated */
    createSVGPathSegCurvetoCubicRel(x: 数字, y: 数字, x1: 数字, y1: 数字, x2: 数字, y2: 数字): SVGPathSegCurvetoCubicRel;

    /** @deprecated */
    createSVGPathSegCurvetoCubicSmoothAbs(x: 数字, y: 数字, x2: 数字, y2: 数字): SVGPathSegCurvetoCubicSmoothAbs;

    /** @deprecated */
    createSVGPathSegCurvetoCubicSmoothRel(x: 数字, y: 数字, x2: 数字, y2: 数字): SVGPathSegCurvetoCubicSmoothRel;

    /** @deprecated */
    createSVGPathSegCurvetoQuadraticAbs(x: 数字, y: 数字, x1: 数字, y1: 数字): SVGPathSegCurvetoQuadraticAbs;

    /** @deprecated */
    createSVGPathSegCurvetoQuadraticRel(x: 数字, y: 数字, x1: 数字, y1: 数字): SVGPathSegCurvetoQuadraticRel;

    /** @deprecated */
    createSVGPathSegCurvetoQuadraticSmoothAbs(x: 数字, y: 数字): SVGPathSegCurvetoQuadraticSmoothAbs;

    /** @deprecated */
    createSVGPathSegCurvetoQuadraticSmoothRel(x: 数字, y: 数字): SVGPathSegCurvetoQuadraticSmoothRel;

    /** @deprecated */
    createSVGPathSegLinetoAbs(x: 数字, y: 数字): SVGPathSegLinetoAbs;

    /** @deprecated */
    createSVGPathSegLinetoHorizontalAbs(x: 数字): SVGPathSegLinetoHorizontalAbs;

    /** @deprecated */
    createSVGPathSegLinetoHorizontalRel(x: 数字): SVGPathSegLinetoHorizontalRel;

    /** @deprecated */
    createSVGPathSegLinetoRel(x: 数字, y: 数字): SVGPathSegLinetoRel;

    /** @deprecated */
    createSVGPathSegLinetoVerticalAbs(y: 数字): SVGPathSegLinetoVerticalAbs;

    /** @deprecated */
    createSVGPathSegLinetoVerticalRel(y: 数字): SVGPathSegLinetoVerticalRel;

    /** @deprecated */
    createSVGPathSegMovetoAbs(x: 数字, y: 数字): SVGPathSegMovetoAbs;

    /** @deprecated */
    createSVGPathSegMovetoRel(x: 数字, y: 数字): SVGPathSegMovetoRel;

    /** @deprecated */
    getPathSegAtLength(distance: 数字): 数字;
    getPointAtLength(distance: 数字): SVGPoint;
    getTotalLength(): 数字;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGPathElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGPathElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGPathElement: {
    prototype: SVGPathElement;
    新建(): SVGPathElement;

};
接口 SVGPathSeg {
    只读 pathSegType: 数字;
    只读 pathSegTypeAsLetter: 文字;
    只读 PATHSEG_ARC_ABS: 数字;
    只读 PATHSEG_ARC_REL: 数字;
    只读 PATHSEG_CLOSEPATH: 数字;
    只读 PATHSEG_CURVETO_CUBIC_ABS: 数字;
    只读 PATHSEG_CURVETO_CUBIC_REL: 数字;
    只读 PATHSEG_CURVETO_CUBIC_SMOOTH_ABS: 数字;
    只读 PATHSEG_CURVETO_CUBIC_SMOOTH_REL: 数字;
    只读 PATHSEG_CURVETO_QUADRATIC_ABS: 数字;
    只读 PATHSEG_CURVETO_QUADRATIC_REL: 数字;
    只读 PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: 数字;
    只读 PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: 数字;
    只读 PATHSEG_LINETO_ABS: 数字;
    只读 PATHSEG_LINETO_HORIZONTAL_ABS: 数字;
    只读 PATHSEG_LINETO_HORIZONTAL_REL: 数字;
    只读 PATHSEG_LINETO_REL: 数字;
    只读 PATHSEG_LINETO_VERTICAL_ABS: 数字;
    只读 PATHSEG_LINETO_VERTICAL_REL: 数字;
    只读 PATHSEG_MOVETO_ABS: 数字;
    只读 PATHSEG_MOVETO_REL: 数字;
    只读 PATHSEG_UNKNOWN: 数字;

}
声明 值量 SVGPathSeg: {
    prototype: SVGPathSeg;
    新建(): SVGPathSeg;
    只读 PATHSEG_ARC_ABS: 数字;
    只读 PATHSEG_ARC_REL: 数字;
    只读 PATHSEG_CLOSEPATH: 数字;
    只读 PATHSEG_CURVETO_CUBIC_ABS: 数字;
    只读 PATHSEG_CURVETO_CUBIC_REL: 数字;
    只读 PATHSEG_CURVETO_CUBIC_SMOOTH_ABS: 数字;
    只读 PATHSEG_CURVETO_CUBIC_SMOOTH_REL: 数字;
    只读 PATHSEG_CURVETO_QUADRATIC_ABS: 数字;
    只读 PATHSEG_CURVETO_QUADRATIC_REL: 数字;
    只读 PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: 数字;
    只读 PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: 数字;
    只读 PATHSEG_LINETO_ABS: 数字;
    只读 PATHSEG_LINETO_HORIZONTAL_ABS: 数字;
    只读 PATHSEG_LINETO_HORIZONTAL_REL: 数字;
    只读 PATHSEG_LINETO_REL: 数字;
    只读 PATHSEG_LINETO_VERTICAL_ABS: 数字;
    只读 PATHSEG_LINETO_VERTICAL_REL: 数字;
    只读 PATHSEG_MOVETO_ABS: 数字;
    只读 PATHSEG_MOVETO_REL: 数字;
    只读 PATHSEG_UNKNOWN: 数字;

};
接口 SVGPathSegArcAbs 扩展 SVGPathSeg {
    angle: 数字;
    largeArcFlag: 真假;
    r1: 数字;
    r2: 数字;
    sweepFlag: 真假;
    x: 数字;
    y: 数字;

}
声明 值量 SVGPathSegArcAbs: {
    prototype: SVGPathSegArcAbs;
    新建(): SVGPathSegArcAbs;

};
接口 SVGPathSegArcRel 扩展 SVGPathSeg {
    angle: 数字;
    largeArcFlag: 真假;
    r1: 数字;
    r2: 数字;
    sweepFlag: 真假;
    x: 数字;
    y: 数字;

}
声明 值量 SVGPathSegArcRel: {
    prototype: SVGPathSegArcRel;
    新建(): SVGPathSegArcRel;

};
接口 SVGPathSegClosePath 扩展 SVGPathSeg {

}
声明 值量 SVGPathSegClosePath: {
    prototype: SVGPathSegClosePath;
    新建(): SVGPathSegClosePath;

};
接口 SVGPathSegCurvetoCubicAbs 扩展 SVGPathSeg {
    x: 数字;
    x1: 数字;
    x2: 数字;
    y: 数字;
    y1: 数字;
    y2: 数字;

}
声明 值量 SVGPathSegCurvetoCubicAbs: {
    prototype: SVGPathSegCurvetoCubicAbs;
    新建(): SVGPathSegCurvetoCubicAbs;

};
接口 SVGPathSegCurvetoCubicRel 扩展 SVGPathSeg {
    x: 数字;
    x1: 数字;
    x2: 数字;
    y: 数字;
    y1: 数字;
    y2: 数字;

}
声明 值量 SVGPathSegCurvetoCubicRel: {
    prototype: SVGPathSegCurvetoCubicRel;
    新建(): SVGPathSegCurvetoCubicRel;

};
接口 SVGPathSegCurvetoCubicSmoothAbs 扩展 SVGPathSeg {
    x: 数字;
    x2: 数字;
    y: 数字;
    y2: 数字;

}
声明 值量 SVGPathSegCurvetoCubicSmoothAbs: {
    prototype: SVGPathSegCurvetoCubicSmoothAbs;
    新建(): SVGPathSegCurvetoCubicSmoothAbs;

};
接口 SVGPathSegCurvetoCubicSmoothRel 扩展 SVGPathSeg {
    x: 数字;
    x2: 数字;
    y: 数字;
    y2: 数字;

}
声明 值量 SVGPathSegCurvetoCubicSmoothRel: {
    prototype: SVGPathSegCurvetoCubicSmoothRel;
    新建(): SVGPathSegCurvetoCubicSmoothRel;

};
接口 SVGPathSegCurvetoQuadraticAbs 扩展 SVGPathSeg {
    x: 数字;
    x1: 数字;
    y: 数字;
    y1: 数字;

}
声明 值量 SVGPathSegCurvetoQuadraticAbs: {
    prototype: SVGPathSegCurvetoQuadraticAbs;
    新建(): SVGPathSegCurvetoQuadraticAbs;

};
接口 SVGPathSegCurvetoQuadraticRel 扩展 SVGPathSeg {
    x: 数字;
    x1: 数字;
    y: 数字;
    y1: 数字;

}
声明 值量 SVGPathSegCurvetoQuadraticRel: {
    prototype: SVGPathSegCurvetoQuadraticRel;
    新建(): SVGPathSegCurvetoQuadraticRel;

};
接口 SVGPathSegCurvetoQuadraticSmoothAbs 扩展 SVGPathSeg {
    x: 数字;
    y: 数字;

}
声明 值量 SVGPathSegCurvetoQuadraticSmoothAbs: {
    prototype: SVGPathSegCurvetoQuadraticSmoothAbs;
    新建(): SVGPathSegCurvetoQuadraticSmoothAbs;

};
接口 SVGPathSegCurvetoQuadraticSmoothRel 扩展 SVGPathSeg {
    x: 数字;
    y: 数字;

}
声明 值量 SVGPathSegCurvetoQuadraticSmoothRel: {
    prototype: SVGPathSegCurvetoQuadraticSmoothRel;
    新建(): SVGPathSegCurvetoQuadraticSmoothRel;

};
接口 SVGPathSegLinetoAbs 扩展 SVGPathSeg {
    x: 数字;
    y: 数字;

}
声明 值量 SVGPathSegLinetoAbs: {
    prototype: SVGPathSegLinetoAbs;
    新建(): SVGPathSegLinetoAbs;

};
接口 SVGPathSegLinetoHorizontalAbs 扩展 SVGPathSeg {
    x: 数字;

}
声明 值量 SVGPathSegLinetoHorizontalAbs: {
    prototype: SVGPathSegLinetoHorizontalAbs;
    新建(): SVGPathSegLinetoHorizontalAbs;

};
接口 SVGPathSegLinetoHorizontalRel 扩展 SVGPathSeg {
    x: 数字;

}
声明 值量 SVGPathSegLinetoHorizontalRel: {
    prototype: SVGPathSegLinetoHorizontalRel;
    新建(): SVGPathSegLinetoHorizontalRel;

};
接口 SVGPathSegLinetoRel 扩展 SVGPathSeg {
    x: 数字;
    y: 数字;

}
声明 值量 SVGPathSegLinetoRel: {
    prototype: SVGPathSegLinetoRel;
    新建(): SVGPathSegLinetoRel;

};
接口 SVGPathSegLinetoVerticalAbs 扩展 SVGPathSeg {
    y: 数字;

}
声明 值量 SVGPathSegLinetoVerticalAbs: {
    prototype: SVGPathSegLinetoVerticalAbs;
    新建(): SVGPathSegLinetoVerticalAbs;

};
接口 SVGPathSegLinetoVerticalRel 扩展 SVGPathSeg {
    y: 数字;

}
声明 值量 SVGPathSegLinetoVerticalRel: {
    prototype: SVGPathSegLinetoVerticalRel;
    新建(): SVGPathSegLinetoVerticalRel;

};
接口 SVGPathSegList {
    只读 numberOfItems: 数字;
    appendItem(newItem: SVGPathSeg): SVGPathSeg;
    clear(): 无值;
    getItem(index: 数字): SVGPathSeg;
    initialize(newItem: SVGPathSeg): SVGPathSeg;
    insertItemBefore(newItem: SVGPathSeg, index: 数字): SVGPathSeg;
    removeItem(index: 数字): SVGPathSeg;
    replaceItem(newItem: SVGPathSeg, index: 数字): SVGPathSeg;

}
声明 值量 SVGPathSegList: {
    prototype: SVGPathSegList;
    新建(): SVGPathSegList;

};
接口 SVGPathSegMovetoAbs 扩展 SVGPathSeg {
    x: 数字;
    y: 数字;

}
声明 值量 SVGPathSegMovetoAbs: {
    prototype: SVGPathSegMovetoAbs;
    新建(): SVGPathSegMovetoAbs;

};
接口 SVGPathSegMovetoRel 扩展 SVGPathSeg {
    x: 数字;
    y: 数字;

}
声明 值量 SVGPathSegMovetoRel: {
    prototype: SVGPathSegMovetoRel;
    新建(): SVGPathSegMovetoRel;

};
接口 SVGPatternElement 扩展 SVGElement, SVGTests, SVGUnitTypes, SVGFitToViewBox, SVGURIReference {
    只读 height: SVGAnimatedLength;
    只读 patternContentUnits: SVGAnimatedEnumeration;
    只读 patternTransform: SVGAnimatedTransformList;
    只读 patternUnits: SVGAnimatedEnumeration;
    只读 width: SVGAnimatedLength;
    只读 x: SVGAnimatedLength;
    只读 y: SVGAnimatedLength;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGPatternElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGPatternElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGPatternElement: {
    prototype: SVGPatternElement;
    新建(): SVGPatternElement;

};
接口 SVGPoint {
    x: 数字;
    y: 数字;
    matrixTransform(matrix: SVGMatrix): SVGPoint;

}
声明 值量 SVGPoint: {
    prototype: SVGPoint;
    新建(): SVGPoint;

};
接口 SVGPointList {
    只读 numberOfItems: 数字;
    appendItem(newItem: SVGPoint): SVGPoint;
    clear(): 无值;
    getItem(index: 数字): SVGPoint;
    initialize(newItem: SVGPoint): SVGPoint;
    insertItemBefore(newItem: SVGPoint, index: 数字): SVGPoint;
    removeItem(index: 数字): SVGPoint;
    replaceItem(newItem: SVGPoint, index: 数字): SVGPoint;

}
声明 值量 SVGPointList: {
    prototype: SVGPointList;
    新建(): SVGPointList;

};
接口 SVGPolygonElement 扩展 SVGGraphicsElement, SVGAnimatedPoints {
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGPolygonElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGPolygonElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGPolygonElement: {
    prototype: SVGPolygonElement;
    新建(): SVGPolygonElement;

};
接口 SVGPolylineElement 扩展 SVGGraphicsElement, SVGAnimatedPoints {
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGPolylineElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGPolylineElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGPolylineElement: {
    prototype: SVGPolylineElement;
    新建(): SVGPolylineElement;

};
接口 SVGPreserveAspectRatio {
    align: 数字;
    meetOrSlice: 数字;
    只读 SVG_MEETORSLICE_MEET: 数字;
    只读 SVG_MEETORSLICE_SLICE: 数字;
    只读 SVG_MEETORSLICE_UNKNOWN: 数字;
    只读 SVG_PRESERVEASPECTRATIO_NONE: 数字;
    只读 SVG_PRESERVEASPECTRATIO_UNKNOWN: 数字;
    只读 SVG_PRESERVEASPECTRATIO_XMAXYMAX: 数字;
    只读 SVG_PRESERVEASPECTRATIO_XMAXYMID: 数字;
    只读 SVG_PRESERVEASPECTRATIO_XMAXYMIN: 数字;
    只读 SVG_PRESERVEASPECTRATIO_XMIDYMAX: 数字;
    只读 SVG_PRESERVEASPECTRATIO_XMIDYMID: 数字;
    只读 SVG_PRESERVEASPECTRATIO_XMIDYMIN: 数字;
    只读 SVG_PRESERVEASPECTRATIO_XMINYMAX: 数字;
    只读 SVG_PRESERVEASPECTRATIO_XMINYMID: 数字;
    只读 SVG_PRESERVEASPECTRATIO_XMINYMIN: 数字;

}
声明 值量 SVGPreserveAspectRatio: {
    prototype: SVGPreserveAspectRatio;
    新建(): SVGPreserveAspectRatio;
    只读 SVG_MEETORSLICE_MEET: 数字;
    只读 SVG_MEETORSLICE_SLICE: 数字;
    只读 SVG_MEETORSLICE_UNKNOWN: 数字;
    只读 SVG_PRESERVEASPECTRATIO_NONE: 数字;
    只读 SVG_PRESERVEASPECTRATIO_UNKNOWN: 数字;
    只读 SVG_PRESERVEASPECTRATIO_XMAXYMAX: 数字;
    只读 SVG_PRESERVEASPECTRATIO_XMAXYMID: 数字;
    只读 SVG_PRESERVEASPECTRATIO_XMAXYMIN: 数字;
    只读 SVG_PRESERVEASPECTRATIO_XMIDYMAX: 数字;
    只读 SVG_PRESERVEASPECTRATIO_XMIDYMID: 数字;
    只读 SVG_PRESERVEASPECTRATIO_XMIDYMIN: 数字;
    只读 SVG_PRESERVEASPECTRATIO_XMINYMAX: 数字;
    只读 SVG_PRESERVEASPECTRATIO_XMINYMID: 数字;
    只读 SVG_PRESERVEASPECTRATIO_XMINYMIN: 数字;

};
接口 SVGRadialGradientElement 扩展 SVGGradientElement {
    只读 cx: SVGAnimatedLength;
    只读 cy: SVGAnimatedLength;
    只读 fx: SVGAnimatedLength;
    只读 fy: SVGAnimatedLength;
    只读 r: SVGAnimatedLength;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGRadialGradientElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGRadialGradientElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGRadialGradientElement: {
    prototype: SVGRadialGradientElement;
    新建(): SVGRadialGradientElement;

};
接口 SVGRect {
    height: 数字;
    width: 数字;
    x: 数字;
    y: 数字;

}
声明 值量 SVGRect: {
    prototype: SVGRect;
    新建(): SVGRect;

};
接口 SVGRectElement 扩展 SVGGraphicsElement {
    只读 height: SVGAnimatedLength;
    只读 rx: SVGAnimatedLength;
    只读 ry: SVGAnimatedLength;
    只读 width: SVGAnimatedLength;
    只读 x: SVGAnimatedLength;
    只读 y: SVGAnimatedLength;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGRectElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGRectElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGRectElement: {
    prototype: SVGRectElement;
    新建(): SVGRectElement;

};
接口 SVGSVGElementEventMap 扩展 SVGElementEventMap {
    "SVGAbort": Event;
    "SVGError": Event;
    "resize": UIEvent;
    "scroll": UIEvent;
    "SVGUnload": Event;
    "SVGZoom": SVGZoomEvent;

}
接口 SVGSVGElement 扩展 SVGGraphicsElement, DocumentEvent, SVGFitToViewBox, SVGZoomAndPan {

    /** @deprecated */
    contentScriptType: 文字;

    /** @deprecated */
    contentStyleType: 文字;
    currentScale: 数字;
    只读 currentTranslate: SVGPoint;
    只读 height: SVGAnimatedLength;
    onabort: ((this: SVGSVGElement, ev: Event) => 任意) | 空值;
    onerror: ((this: SVGSVGElement, ev: Event) => 任意) | 空值;
    onresize: ((this: SVGSVGElement, ev: UIEvent) => 任意) | 空值;
    onscroll: ((this: SVGSVGElement, ev: UIEvent) => 任意) | 空值;
    onunload: ((this: SVGSVGElement, ev: Event) => 任意) | 空值;
    onzoom: ((this: SVGSVGElement, ev: SVGZoomEvent) => 任意) | 空值;

    /** @deprecated */
    只读 pixelUnitToMillimeterX: 数字;

    /** @deprecated */
    只读 pixelUnitToMillimeterY: 数字;

    /** @deprecated */
    只读 screenPixelToMillimeterX: 数字;

    /** @deprecated */
    只读 screenPixelToMillimeterY: 数字;

    /** @deprecated */
    只读 viewport: SVGRect;
    只读 width: SVGAnimatedLength;
    只读 x: SVGAnimatedLength;
    只读 y: SVGAnimatedLength;
    checkEnclosure(element: SVGElement, rect: SVGRect): 真假;
    checkIntersection(element: SVGElement, rect: SVGRect): 真假;
    createSVGAngle(): SVGAngle;
    createSVGLength(): SVGLength;
    createSVGMatrix(): SVGMatrix;
    createSVGNumber(): SVGNumber;
    createSVGPoint(): SVGPoint;
    createSVGRect(): SVGRect;
    createSVGTransform(): SVGTransform;
    createSVGTransformFromMatrix(matrix: SVGMatrix): SVGTransform;
    deselectAll(): 无值;

    /** @deprecated */
    forceRedraw(): 无值;
    getComputedStyle(elt: Element, pseudoElt?: 文字 | 空值): CSSStyleDeclaration;

    /** @deprecated */
    getCurrentTime(): 数字;
    getElementById(elementId: 文字): Element;
    getEnclosureList(rect: SVGRect, referenceElement: SVGElement): NodeListOf<SVGCircleElement | SVGEllipseElement | SVGImageElement | SVGLineElement | SVGPathElement | SVGPolygonElement | SVGPolylineElement | SVGRectElement | SVGTextElement | SVGUseElement>;
    getIntersectionList(rect: SVGRect, referenceElement: SVGElement): NodeListOf<SVGCircleElement | SVGEllipseElement | SVGImageElement | SVGLineElement | SVGPathElement | SVGPolygonElement | SVGPolylineElement | SVGRectElement | SVGTextElement | SVGUseElement>;

    /** @deprecated */
    pauseAnimations(): 无值;

    /** @deprecated */
    setCurrentTime(seconds: 数字): 无值;

    /** @deprecated */
    suspendRedraw(maxWaitMilliseconds: 数字): 数字;

    /** @deprecated */
    unpauseAnimations(): 无值;

    /** @deprecated */
    unsuspendRedraw(suspendHandleID: 数字): 无值;

    /** @deprecated */
    unsuspendRedrawAll(): 无值;
    addEventListener<K 扩展 键为 SVGSVGElementEventMap>(type: K, listener: (this: SVGSVGElement, ev: SVGSVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGSVGElementEventMap>(type: K, listener: (this: SVGSVGElement, ev: SVGSVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGSVGElement: {
    prototype: SVGSVGElement;
    新建(): SVGSVGElement;

};
接口 SVGScriptElement 扩展 SVGElement, SVGURIReference {
    type: 文字;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGScriptElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGScriptElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGScriptElement: {
    prototype: SVGScriptElement;
    新建(): SVGScriptElement;

};
接口 SVGStopElement 扩展 SVGElement {
    只读 offset: SVGAnimatedNumber;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGStopElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGStopElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGStopElement: {
    prototype: SVGStopElement;
    新建(): SVGStopElement;

};
接口 SVGStringList {
    只读 numberOfItems: 数字;
    appendItem(newItem: 文字): 文字;
    clear(): 无值;
    getItem(index: 数字): 文字;
    initialize(newItem: 文字): 文字;
    insertItemBefore(newItem: 文字, index: 数字): 文字;
    removeItem(index: 数字): 文字;
    replaceItem(newItem: 文字, index: 数字): 文字;

}
声明 值量 SVGStringList: {
    prototype: SVGStringList;
    新建(): SVGStringList;

};
接口 SVGStylable {
    className: 任意;

}
声明 值量 SVGStylable: {
    prototype: SVGStylable;
    新建(): SVGStylable;

};
接口 SVGStyleElement 扩展 SVGElement {
    disabled: 真假;
    media: 文字;
    title: 文字;
    type: 文字;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGStyleElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGStyleElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGStyleElement: {
    prototype: SVGStyleElement;
    新建(): SVGStyleElement;

};
接口 SVGSwitchElement 扩展 SVGGraphicsElement {
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGSwitchElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGSwitchElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGSwitchElement: {
    prototype: SVGSwitchElement;
    新建(): SVGSwitchElement;

};
接口 SVGSymbolElement 扩展 SVGElement, SVGFitToViewBox {
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGSymbolElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGSymbolElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGSymbolElement: {
    prototype: SVGSymbolElement;
    新建(): SVGSymbolElement;

};
接口 SVGTSpanElement 扩展 SVGTextPositioningElement {
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGTSpanElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGTSpanElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGTSpanElement: {
    prototype: SVGTSpanElement;
    新建(): SVGTSpanElement;

};
接口 SVGTests {
    只读 requiredExtensions: SVGStringList;

    /** @deprecated */
    只读 requiredFeatures: SVGStringList;
    只读 systemLanguage: SVGStringList;

    /** @deprecated */
    hasExtension(extension: 文字): 真假;

}
接口 SVGTextContentElement 扩展 SVGGraphicsElement {
    只读 lengthAdjust: SVGAnimatedEnumeration;
    只读 textLength: SVGAnimatedLength;
    getCharNumAtPosition(point: SVGPoint): 数字;
    getComputedTextLength(): 数字;
    getEndPositionOfChar(charnum: 数字): SVGPoint;
    getExtentOfChar(charnum: 数字): SVGRect;
    getNumberOfChars(): 数字;
    getRotationOfChar(charnum: 数字): 数字;
    getStartPositionOfChar(charnum: 数字): SVGPoint;
    getSubStringLength(charnum: 数字, nchars: 数字): 数字;
    selectSubString(charnum: 数字, nchars: 数字): 无值;
    只读 LENGTHADJUST_SPACING: 数字;
    只读 LENGTHADJUST_SPACINGANDGLYPHS: 数字;
    只读 LENGTHADJUST_UNKNOWN: 数字;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGTextContentElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGTextContentElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGTextContentElement: {
    prototype: SVGTextContentElement;
    新建(): SVGTextContentElement;
    只读 LENGTHADJUST_SPACING: 数字;
    只读 LENGTHADJUST_SPACINGANDGLYPHS: 数字;
    只读 LENGTHADJUST_UNKNOWN: 数字;

};
接口 SVGTextElement 扩展 SVGTextPositioningElement {
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGTextElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGTextElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGTextElement: {
    prototype: SVGTextElement;
    新建(): SVGTextElement;

};
接口 SVGTextPathElement 扩展 SVGTextContentElement, SVGURIReference {
    只读 method: SVGAnimatedEnumeration;
    只读 spacing: SVGAnimatedEnumeration;
    只读 startOffset: SVGAnimatedLength;
    只读 TEXTPATH_METHODTYPE_ALIGN: 数字;
    只读 TEXTPATH_METHODTYPE_STRETCH: 数字;
    只读 TEXTPATH_METHODTYPE_UNKNOWN: 数字;
    只读 TEXTPATH_SPACINGTYPE_AUTO: 数字;
    只读 TEXTPATH_SPACINGTYPE_EXACT: 数字;
    只读 TEXTPATH_SPACINGTYPE_UNKNOWN: 数字;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGTextPathElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGTextPathElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGTextPathElement: {
    prototype: SVGTextPathElement;
    新建(): SVGTextPathElement;
    只读 TEXTPATH_METHODTYPE_ALIGN: 数字;
    只读 TEXTPATH_METHODTYPE_STRETCH: 数字;
    只读 TEXTPATH_METHODTYPE_UNKNOWN: 数字;
    只读 TEXTPATH_SPACINGTYPE_AUTO: 数字;
    只读 TEXTPATH_SPACINGTYPE_EXACT: 数字;
    只读 TEXTPATH_SPACINGTYPE_UNKNOWN: 数字;

};
接口 SVGTextPositioningElement 扩展 SVGTextContentElement {
    只读 dx: SVGAnimatedLengthList;
    只读 dy: SVGAnimatedLengthList;
    只读 rotate: SVGAnimatedNumberList;
    只读 x: SVGAnimatedLengthList;
    只读 y: SVGAnimatedLengthList;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGTextPositioningElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGTextPositioningElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGTextPositioningElement: {
    prototype: SVGTextPositioningElement;
    新建(): SVGTextPositioningElement;

};
接口 SVGTitleElement 扩展 SVGElement {
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGTitleElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGTitleElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGTitleElement: {
    prototype: SVGTitleElement;
    新建(): SVGTitleElement;

};
接口 SVGTransform {
    只读 angle: 数字;
    只读 matrix: SVGMatrix;
    只读 type: 数字;
    setMatrix(matrix: SVGMatrix): 无值;
    setRotate(angle: 数字, cx: 数字, cy: 数字): 无值;
    setScale(sx: 数字, sy: 数字): 无值;
    setSkewX(angle: 数字): 无值;
    setSkewY(angle: 数字): 无值;
    setTranslate(tx: 数字, ty: 数字): 无值;
    只读 SVG_TRANSFORM_MATRIX: 数字;
    只读 SVG_TRANSFORM_ROTATE: 数字;
    只读 SVG_TRANSFORM_SCALE: 数字;
    只读 SVG_TRANSFORM_SKEWX: 数字;
    只读 SVG_TRANSFORM_SKEWY: 数字;
    只读 SVG_TRANSFORM_TRANSLATE: 数字;
    只读 SVG_TRANSFORM_UNKNOWN: 数字;

}
声明 值量 SVGTransform: {
    prototype: SVGTransform;
    新建(): SVGTransform;
    只读 SVG_TRANSFORM_MATRIX: 数字;
    只读 SVG_TRANSFORM_ROTATE: 数字;
    只读 SVG_TRANSFORM_SCALE: 数字;
    只读 SVG_TRANSFORM_SKEWX: 数字;
    只读 SVG_TRANSFORM_SKEWY: 数字;
    只读 SVG_TRANSFORM_TRANSLATE: 数字;
    只读 SVG_TRANSFORM_UNKNOWN: 数字;

};
接口 SVGTransformList {
    只读 numberOfItems: 数字;
    appendItem(newItem: SVGTransform): SVGTransform;
    clear(): 无值;
    consolidate(): SVGTransform;
    createSVGTransformFromMatrix(matrix: SVGMatrix): SVGTransform;
    getItem(index: 数字): SVGTransform;
    initialize(newItem: SVGTransform): SVGTransform;
    insertItemBefore(newItem: SVGTransform, index: 数字): SVGTransform;
    removeItem(index: 数字): SVGTransform;
    replaceItem(newItem: SVGTransform, index: 数字): SVGTransform;

}
声明 值量 SVGTransformList: {
    prototype: SVGTransformList;
    新建(): SVGTransformList;

};
接口 SVGURIReference {
    只读 href: SVGAnimatedString;

}
接口 SVGUnitTypes {
    只读 SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: 数字;
    只读 SVG_UNIT_TYPE_UNKNOWN: 数字;
    只读 SVG_UNIT_TYPE_USERSPACEONUSE: 数字;

}
声明 值量 SVGUnitTypes: SVGUnitTypes;
接口 SVGUseElement 扩展 SVGGraphicsElement, SVGURIReference {
    只读 animatedInstanceRoot: SVGElementInstance | 空值;
    只读 height: SVGAnimatedLength;
    只读 instanceRoot: SVGElementInstance | 空值;
    只读 width: SVGAnimatedLength;
    只读 x: SVGAnimatedLength;
    只读 y: SVGAnimatedLength;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGUseElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGUseElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGUseElement: {
    prototype: SVGUseElement;
    新建(): SVGUseElement;

};
接口 SVGViewElement 扩展 SVGElement, SVGFitToViewBox, SVGZoomAndPan {

    /** @deprecated */
    只读 viewTarget: SVGStringList;
    addEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGViewElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SVGElementEventMap>(type: K, listener: (this: SVGViewElement, ev: SVGElementEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SVGViewElement: {
    prototype: SVGViewElement;
    新建(): SVGViewElement;

};
接口 SVGZoomAndPan {
    只读 zoomAndPan: 数字;

}
声明 值量 SVGZoomAndPan: {
    只读 SVG_ZOOMANDPAN_DISABLE: 数字;
    只读 SVG_ZOOMANDPAN_MAGNIFY: 数字;
    只读 SVG_ZOOMANDPAN_UNKNOWN: 数字;

};
接口 SVGZoomEvent 扩展 UIEvent {
    只读 newScale: 数字;
    只读 newTranslate: SVGPoint;
    只读 previousScale: 数字;
    只读 previousTranslate: SVGPoint;
    只读 zoomRectScreen: SVGRect;

}
声明 值量 SVGZoomEvent: {
    prototype: SVGZoomEvent;
    新建(): SVGZoomEvent;

};
接口 ScopedCredential {
    //@@{ 数组缓冲区_:ArrayBuffer }
    只读 id: 数组缓冲区_;
    只读 type: ScopedCredentialType;

}
声明 值量 ScopedCredential: {
    prototype: ScopedCredential;
    新建(): ScopedCredential;

};
接口 ScopedCredentialInfo {
    只读 credential: ScopedCredential;
    只读 publicKey: CryptoKey;

}
声明 值量 ScopedCredentialInfo: {
    prototype: ScopedCredentialInfo;
    新建(): ScopedCredentialInfo;

};
接口 ScreenEventMap {
    "MSOrientationChange": Event;

}
接口 Screen 扩展 EventTarget {
    只读 availHeight: 数字;
    只读 availWidth: 数字;

    /** @deprecated */
    bufferDepth: 数字;
    只读 colorDepth: 数字;
    只读 deviceXDPI: 数字;
    只读 deviceYDPI: 数字;
    只读 fontSmoothingEnabled: 真假;
    只读 height: 数字;
    只读 logicalXDPI: 数字;
    只读 logicalYDPI: 数字;
    只读 msOrientation: 文字;
    onmsorientationchange: ((this: Screen, ev: Event) => 任意) | 空值;
    只读 pixelDepth: 数字;
    只读 systemXDPI: 数字;
    只读 systemYDPI: 数字;
    只读 width: 数字;
    lockOrientation(orientations: OrientationLockType | OrientationLockType[]): 真假;
    msLockOrientation(orientations: 文字 | 文字[]): 真假;
    msUnlockOrientation(): 无值;
    unlockOrientation(): 无值;
    addEventListener<K 扩展 键为 ScreenEventMap>(type: K, listener: (this: Screen, ev: ScreenEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 ScreenEventMap>(type: K, listener: (this: Screen, ev: ScreenEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 Screen: {
    prototype: Screen;
    新建(): Screen;

};
接口 ScriptProcessorNodeEventMap {
    "audioprocess": AudioProcessingEvent;

}
接口 ScriptProcessorNode 扩展 AudioNode {

    /** @deprecated */
    只读 bufferSize: 数字;

    /** @deprecated */
    onaudioprocess: ((this: ScriptProcessorNode, ev: AudioProcessingEvent) => 任意) | 空值;
    addEventListener<K 扩展 键为 ScriptProcessorNodeEventMap>(type: K, listener: (this: ScriptProcessorNode, ev: ScriptProcessorNodeEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 ScriptProcessorNodeEventMap>(type: K, listener: (this: ScriptProcessorNode, ev: ScriptProcessorNodeEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 ScriptProcessorNode: {
    prototype: ScriptProcessorNode;
    新建(): ScriptProcessorNode;

};
接口 ScrollIntoViewOptions 扩展 ScrollOptions {
    block?: ScrollLogicalPosition;
    inline?: ScrollLogicalPosition;

}
接口 ScrollOptions {
    behavior?: ScrollBehavior;

}
接口 ScrollToOptions 扩展 ScrollOptions {
    left?: 数字;
    top?: 数字;

}
接口 SecurityPolicyViolationEvent 扩展 Event {
    只读 blockedURI: 文字;
    只读 columnNumber: 数字;
    只读 documentURI: 文字;
    只读 effectiveDirective: 文字;
    只读 lineNumber: 数字;
    只读 originalPolicy: 文字;
    只读 referrer: 文字;
    只读 sourceFile: 文字;
    只读 statusCode: 数字;
    只读 violatedDirective: 文字;

}
声明 值量 SecurityPolicyViolationEvent: {
    prototype: SecurityPolicyViolationEvent;
    新建(type: 文字, eventInitDict?: SecurityPolicyViolationEventInit): SecurityPolicyViolationEvent;

};
接口 Selection {
    只读 anchorNode: Node;
    只读 anchorOffset: 数字;
    只读 baseNode: Node;
    只读 baseOffset: 数字;
    只读 extentNode: Node;
    只读 extentOffset: 数字;
    只读 focusNode: Node;
    只读 focusOffset: 数字;
    只读 isCollapsed: 真假;
    只读 rangeCount: 数字;
    只读 type: 文字;
    addRange(range: Range): 无值;
    collapse(parentNode: Node, offset: 数字): 无值;
    collapseToEnd(): 无值;
    collapseToStart(): 无值;
    containsNode(node: Node, partlyContained: 真假): 真假;
    deleteFromDocument(): 无值;
    empty(): 无值;
    extend(newNode: Node, offset: 数字): 无值;
    getRangeAt(index: 数字): Range;
    removeAllRanges(): 无值;
    removeRange(range: Range): 无值;
    selectAllChildren(parentNode: Node): 无值;
    setBaseAndExtent(baseNode: Node, baseOffset: 数字, extentNode: Node, extentOffset: 数字): 无值;
    setPosition(parentNode: Node, offset: 数字): 无值;
    toString(): 文字;

}
声明 值量 Selection: {
    prototype: Selection;
    新建(): Selection;

};
接口 ServiceUIFrameContext {
    getCachedFrameMessage(key: 文字): 文字;
    postFrameMessage(key: 文字, data: 文字): 无值;

}
声明 值量 ServiceUIFrameContext: ServiceUIFrameContext;
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
接口 ServiceWorkerContainerEventMap {
    "controllerchange": Event;
    "message": ServiceWorkerMessageEvent;
    "messageerror": MessageEvent;

}
接口 ServiceWorkerContainer 扩展 EventTarget {
    只读 controller: ServiceWorker | 空值;
    oncontrollerchange: ((this: ServiceWorkerContainer, ev: Event) => 任意) | 空值;
    onmessage: ((this: ServiceWorkerContainer, ev: ServiceWorkerMessageEvent) => 任意) | 空值;
    onmessageerror: ((this: ServiceWorkerContainer, ev: MessageEvent) => 任意) | 空值;
    //@@{ 预设_:Promise }
    只读 ready: 预设_<ServiceWorkerRegistration>;
    //@@{ 预设_:Promise }
    getRegistration(clientURL?: 文字): 预设_<ServiceWorkerRegistration | 未定>;
    //@@{ 预设_:Promise }
    getRegistrations(): 预设_<ServiceWorkerRegistration[]>;
    //@@{ 预设_:Promise }
    register(scriptURL: 文字, options?: RegistrationOptions): 预设_<ServiceWorkerRegistration>;
    startMessages(): 无值;
    addEventListener<K 扩展 键为 ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 ServiceWorkerContainer: {
    prototype: ServiceWorkerContainer;
    新建(): ServiceWorkerContainer;

};
接口 ServiceWorkerMessageEvent 扩展 Event {
    只读 data: 任意;
    只读 lastEventId: 文字;
    只读 origin: 文字;
    //@@{ 只读数组_:ReadonlyArray }
    只读 ports: 只读数组_<MessagePort> | 空值;
    只读 source: ServiceWorker | MessagePort | 空值;

}
声明 值量 ServiceWorkerMessageEvent: {
    prototype: ServiceWorkerMessageEvent;
    新建(type: 文字, eventInitDict?: ServiceWorkerMessageEventInit): ServiceWorkerMessageEvent;

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
接口 ShadowRoot 扩展 DocumentOrShadowRoot, DocumentFragment {
    只读 host: Element;
    innerHTML: 文字;

}
接口 ShadowRootInit {
    delegatesFocus?: 真假;
    mode: "open" | "closed";

}
接口 SourceBuffer 扩展 EventTarget {
    appendWindowEnd: 数字;
    appendWindowStart: 数字;
    只读 audioTracks: AudioTrackList;
    只读 buffered: TimeRanges;
    mode: AppendMode;
    只读 textTracks: TextTrackList;
    timestampOffset: 数字;
    只读 updating: 真假;
    只读 videoTracks: VideoTrackList;
    abort(): 无值;
    //@@{ 数组缓冲区_:ArrayBuffer, 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView }
    appendBuffer(data: 数组缓冲区_ | 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 空值): 无值;
    appendStream(stream: MSStream, maxSize?: 数字): 无值;
    remove(start: 数字, end: 数字): 无值;

}
声明 值量 SourceBuffer: {
    prototype: SourceBuffer;
    新建(): SourceBuffer;

};
接口 SourceBufferList 扩展 EventTarget {
    只读 length: 数字;
    item(index: 数字): SourceBuffer;
    [index: 数字]: SourceBuffer;

}
声明 值量 SourceBufferList: {
    prototype: SourceBufferList;
    新建(): SourceBufferList;

};
接口 SpeechSynthesisEventMap {
    "voiceschanged": Event;

}
接口 SpeechSynthesis 扩展 EventTarget {
    onvoiceschanged: ((this: SpeechSynthesis, ev: Event) => 任意) | 空值;
    只读 paused: 真假;
    只读 pending: 真假;
    只读 speaking: 真假;
    cancel(): 无值;
    getVoices(): SpeechSynthesisVoice[];
    pause(): 无值;
    resume(): 无值;
    speak(utterance: SpeechSynthesisUtterance): 无值;
    addEventListener<K 扩展 键为 SpeechSynthesisEventMap>(type: K, listener: (this: SpeechSynthesis, ev: SpeechSynthesisEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SpeechSynthesisEventMap>(type: K, listener: (this: SpeechSynthesis, ev: SpeechSynthesisEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SpeechSynthesis: {
    prototype: SpeechSynthesis;
    新建(): SpeechSynthesis;

};
接口 SpeechSynthesisEvent 扩展 Event {
    只读 charIndex: 数字;
    只读 charLength: 数字;
    只读 elapsedTime: 数字;
    只读 name: 文字;
    只读 utterance: SpeechSynthesisUtterance;

}
声明 值量 SpeechSynthesisEvent: {
    prototype: SpeechSynthesisEvent;
    新建(type: 文字, eventInitDict?: SpeechSynthesisEventInit): SpeechSynthesisEvent;

};
接口 SpeechSynthesisUtteranceEventMap {
    "boundary": Event;
    "end": Event;
    "error": Event;
    "mark": Event;
    "pause": Event;
    "resume": Event;
    "start": Event;

}
接口 SpeechSynthesisUtterance 扩展 EventTarget {
    lang: 文字;
    onboundary: ((this: SpeechSynthesisUtterance, ev: Event) => 任意) | 空值;
    onend: ((this: SpeechSynthesisUtterance, ev: Event) => 任意) | 空值;
    onerror: ((this: SpeechSynthesisUtterance, ev: Event) => 任意) | 空值;
    onmark: ((this: SpeechSynthesisUtterance, ev: Event) => 任意) | 空值;
    onpause: ((this: SpeechSynthesisUtterance, ev: Event) => 任意) | 空值;
    onresume: ((this: SpeechSynthesisUtterance, ev: Event) => 任意) | 空值;
    onstart: ((this: SpeechSynthesisUtterance, ev: Event) => 任意) | 空值;
    pitch: 数字;
    rate: 数字;
    text: 文字;
    voice: SpeechSynthesisVoice;
    volume: 数字;
    addEventListener<K 扩展 键为 SpeechSynthesisUtteranceEventMap>(type: K, listener: (this: SpeechSynthesisUtterance, ev: SpeechSynthesisUtteranceEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 SpeechSynthesisUtteranceEventMap>(type: K, listener: (this: SpeechSynthesisUtterance, ev: SpeechSynthesisUtteranceEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 SpeechSynthesisUtterance: {
    prototype: SpeechSynthesisUtterance;
    新建(): SpeechSynthesisUtterance;
    新建(text: 文字): SpeechSynthesisUtterance;

};
接口 SpeechSynthesisVoice {
    只读 default: 真假;
    只读 lang: 文字;
    只读 localService: 真假;
    只读 name: 文字;
    只读 voiceURI: 文字;

}
声明 值量 SpeechSynthesisVoice: {
    prototype: SpeechSynthesisVoice;
    新建(): SpeechSynthesisVoice;

};
接口 StereoPannerNode 扩展 AudioNode {
    只读 pan: AudioParam;

}
声明 值量 StereoPannerNode: {
    prototype: StereoPannerNode;
    新建(): StereoPannerNode;

};
接口 Storage {
    只读 length: 数字;
    clear(): 无值;
    getItem(key: 文字): 文字 | 空值;
    key(index: 数字): 文字 | 空值;
    removeItem(key: 文字): 无值;
    setItem(key: 文字, value: 文字): 无值;
    [key: 文字]: 任意;

}
声明 值量 Storage: {
    prototype: Storage;
    新建(): Storage;

};
接口 StorageEvent 扩展 Event {
    只读 key: 文字 | 空值;
    只读 newValue: 文字 | 空值;
    只读 oldValue: 文字 | 空值;
    只读 storageArea: Storage | 空值;
    只读 url: 文字;

}
声明 值量 StorageEvent: {
    prototype: StorageEvent;
    新建 (type: 文字, eventInitDict?: StorageEventInit): StorageEvent;

};
接口 StorageEventInit 扩展 EventInit {
    key?: 文字;
    newValue?: 文字;
    oldValue?: 文字;
    storageArea?: Storage;
    url: 文字;

}
接口 StyleMedia {
    只读 type: 文字;
    matchMedium(mediaquery: 文字): 真假;

}
声明 值量 StyleMedia: {
    prototype: StyleMedia;
    新建(): StyleMedia;

};
接口 StyleSheet {
    disabled: 真假;
    只读 href: 文字 | 空值;
    只读 media: MediaList;
    只读 ownerNode: Node;
    只读 parentStyleSheet: StyleSheet | 空值;
    只读 title: 文字 | 空值;
    只读 type: 文字;

}
声明 值量 StyleSheet: {
    prototype: StyleSheet;
    新建(): StyleSheet;

};
接口 StyleSheetList {
    只读 length: 数字;
    item(index: 数字): StyleSheet | 空值;
    [index: 数字]: StyleSheet;

}
声明 值量 StyleSheetList: {
    prototype: StyleSheetList;
    新建(): StyleSheetList;

};
接口 SubtleCrypto {
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer, 预设等_:PromiseLike }
    decrypt(algorithm: 文字 | RsaOaepParams | AesCtrParams | AesCbcParams | AesCmacParams | AesGcmParams | AesCfbParams, key: CryptoKey, data: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_): 预设等_<数组缓冲区_>;
    //@@{ 预设等_:PromiseLike, 数组缓冲区_:ArrayBuffer }
    deriveBits(algorithm: 文字 | EcdhKeyDeriveParams | DhKeyDeriveParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, baseKey: CryptoKey, length: 数字): 预设等_<数组缓冲区_>;
    //@@{ 预设等_:PromiseLike }
    deriveKey(algorithm: 文字 | EcdhKeyDeriveParams | DhKeyDeriveParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, baseKey: CryptoKey, derivedKeyType: 文字 | AesDerivedKeyParams | HmacImportParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, extractable: 真假, keyUsages: 文字[]): 预设等_<CryptoKey>;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer, 预设等_:PromiseLike }
    digest(algorithm: 文字 | Algorithm, data: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_): 预设等_<数组缓冲区_>;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer, 预设等_:PromiseLike }
    encrypt(algorithm: 文字 | RsaOaepParams | AesCtrParams | AesCbcParams | AesCmacParams | AesGcmParams | AesCfbParams, key: CryptoKey, data: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_): 预设等_<数组缓冲区_>;
    //@@{ 预设等_:PromiseLike }
    exportKey(format: "jwk", key: CryptoKey): 预设等_<JsonWebKey>;
    //@@{ 预设等_:PromiseLike, 数组缓冲区_:ArrayBuffer }
    exportKey(format: "raw" | "pkcs8" | "spki", key: CryptoKey): 预设等_<数组缓冲区_>;
    //@@{ 预设等_:PromiseLike, 数组缓冲区_:ArrayBuffer }
    exportKey(format: 文字, key: CryptoKey): 预设等_<JsonWebKey | 数组缓冲区_>;
    //@@{ 预设等_:PromiseLike }
    generateKey(algorithm: 文字, extractable: 真假, keyUsages: 文字[]): 预设等_<CryptoKeyPair | CryptoKey>;
    //@@{ 预设等_:PromiseLike }
    generateKey(algorithm: RsaHashedKeyGenParams | EcKeyGenParams | DhKeyGenParams, extractable: 真假, keyUsages: 文字[]): 预设等_<CryptoKeyPair>;
    //@@{ 预设等_:PromiseLike }
    generateKey(algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params, extractable: 真假, keyUsages: 文字[]): 预设等_<CryptoKey>;
    //@@{ 预设等_:PromiseLike }
    importKey(format: "jwk", keyData: JsonWebKey, algorithm: 文字 | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams, extractable: 真假, keyUsages: 文字[]): 预设等_<CryptoKey>;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer, 预设等_:PromiseLike }
    importKey(format: "raw" | "pkcs8" | "spki", keyData: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_, algorithm: 文字 | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams, extractable: 真假, keyUsages: 文字[]): 预设等_<CryptoKey>;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer, 预设等_:PromiseLike }
    importKey(format: 文字, keyData: JsonWebKey | 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_, algorithm: 文字 | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams, extractable: 真假, keyUsages: 文字[]): 预设等_<CryptoKey>;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer, 预设等_:PromiseLike }
    sign(algorithm: 文字 | RsaPssParams | EcdsaParams | AesCmacParams, key: CryptoKey, data: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_): 预设等_<数组缓冲区_>;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer, 预设等_:PromiseLike }
    unwrapKey(format: 文字, wrappedKey: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_, unwrappingKey: CryptoKey, unwrapAlgorithm: 文字 | Algorithm, unwrappedKeyAlgorithm: 文字 | Algorithm, extractable: 真假, keyUsages: 文字[]): 预设等_<CryptoKey>;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer, 预设等_:PromiseLike }
    verify(algorithm: 文字 | RsaPssParams | EcdsaParams | AesCmacParams, key: CryptoKey, signature: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_, data: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_): 预设等_<真假>;
    //@@{ 预设等_:PromiseLike, 数组缓冲区_:ArrayBuffer }
    wrapKey(format: 文字, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: 文字 | Algorithm): 预设等_<数组缓冲区_>;

}
声明 值量 SubtleCrypto: {
    prototype: SubtleCrypto;
    新建(): SubtleCrypto;

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
接口 Text 扩展 CharacterData {
    只读 assignedSlot: HTMLSlotElement | 空值;
    只读 wholeText: 文字;
    splitText(offset: 数字): Text;

}
声明 值量 Text: {
    prototype: Text;
    新建(data?: 文字): Text;

};
接口 TextDecoder {
    只读 encoding: 文字;
    只读 fatal: 真假;
    只读 ignoreBOM: 真假;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    decode(input?: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值, options?: TextDecodeOptions): 文字;

}
声明 值量 TextDecoder: {
    prototype: TextDecoder;
    新建(label?: 文字, options?: TextDecoderOptions): TextDecoder;

};
接口 TextEncoder {
    只读 encoding: 文字;
    //@@{ 正整数数组8_:Uint8Array }
    encode(input?: 文字): 正整数数组8_;

}
声明 值量 TextEncoder: {
    prototype: TextEncoder;
    新建(): TextEncoder;

};
接口 TextEvent 扩展 UIEvent {
    只读 data: 文字;
    initTextEvent(typeArg: 文字, canBubbleArg: 真假, cancelableArg: 真假, viewArg: Window, dataArg: 文字, inputMethod: 数字, locale: 文字): 无值;
    只读 DOM_INPUT_METHOD_DROP: 数字;
    只读 DOM_INPUT_METHOD_HANDWRITING: 数字;
    只读 DOM_INPUT_METHOD_IME: 数字;
    只读 DOM_INPUT_METHOD_KEYBOARD: 数字;
    只读 DOM_INPUT_METHOD_MULTIMODAL: 数字;
    只读 DOM_INPUT_METHOD_OPTION: 数字;
    只读 DOM_INPUT_METHOD_PASTE: 数字;
    只读 DOM_INPUT_METHOD_SCRIPT: 数字;
    只读 DOM_INPUT_METHOD_UNKNOWN: 数字;
    只读 DOM_INPUT_METHOD_VOICE: 数字;

}
声明 值量 TextEvent: {
    prototype: TextEvent;
    新建(): TextEvent;
    只读 DOM_INPUT_METHOD_DROP: 数字;
    只读 DOM_INPUT_METHOD_HANDWRITING: 数字;
    只读 DOM_INPUT_METHOD_IME: 数字;
    只读 DOM_INPUT_METHOD_KEYBOARD: 数字;
    只读 DOM_INPUT_METHOD_MULTIMODAL: 数字;
    只读 DOM_INPUT_METHOD_OPTION: 数字;
    只读 DOM_INPUT_METHOD_PASTE: 数字;
    只读 DOM_INPUT_METHOD_SCRIPT: 数字;
    只读 DOM_INPUT_METHOD_UNKNOWN: 数字;
    只读 DOM_INPUT_METHOD_VOICE: 数字;

};
接口 TextMetrics {
    只读 width: 数字;

}
声明 值量 TextMetrics: {
    prototype: TextMetrics;
    新建(): TextMetrics;

};
接口 TextTrackEventMap {
    "cuechange": Event;
    "error": Event;
    "load": Event;

}
接口 TextTrack 扩展 EventTarget {
    只读 activeCues: TextTrackCueList;
    只读 cues: TextTrackCueList;
    只读 inBandMetadataTrackDispatchType: 文字;
    只读 kind: 文字;
    只读 label: 文字;
    只读 language: 文字;
    mode: TextTrackMode | 数字;
    oncuechange: ((this: TextTrack, ev: Event) => 任意) | 空值;
    onerror: ((this: TextTrack, ev: Event) => 任意) | 空值;
    onload: ((this: TextTrack, ev: Event) => 任意) | 空值;
    只读 readyState: 数字;
    addCue(cue: TextTrackCue): 无值;
    removeCue(cue: TextTrackCue): 无值;
    只读 DISABLED: 数字;
    只读 ERROR: 数字;
    只读 HIDDEN: 数字;
    只读 LOADED: 数字;
    只读 LOADING: 数字;
    只读 NONE: 数字;
    只读 SHOWING: 数字;
    addEventListener<K 扩展 键为 TextTrackEventMap>(type: K, listener: (this: TextTrack, ev: TextTrackEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 TextTrackEventMap>(type: K, listener: (this: TextTrack, ev: TextTrackEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 TextTrack: {
    prototype: TextTrack;
    新建(): TextTrack;
    只读 DISABLED: 数字;
    只读 ERROR: 数字;
    只读 HIDDEN: 数字;
    只读 LOADED: 数字;
    只读 LOADING: 数字;
    只读 NONE: 数字;
    只读 SHOWING: 数字;

};
接口 TextTrackCueEventMap {
    "enter": Event;
    "exit": Event;

}
接口 TextTrackCue 扩展 EventTarget {
    endTime: 数字;
    id: 文字;
    onenter: ((this: TextTrackCue, ev: Event) => 任意) | 空值;
    onexit: ((this: TextTrackCue, ev: Event) => 任意) | 空值;
    pauseOnExit: 真假;
    startTime: 数字;
    text: 文字;
    只读 track: TextTrack;
    getCueAsHTML(): DocumentFragment;
    addEventListener<K 扩展 键为 TextTrackCueEventMap>(type: K, listener: (this: TextTrackCue, ev: TextTrackCueEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 TextTrackCueEventMap>(type: K, listener: (this: TextTrackCue, ev: TextTrackCueEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 TextTrackCue: {
    prototype: TextTrackCue;
    新建(startTime: 数字, endTime: 数字, text: 文字): TextTrackCue;

};
接口 TextTrackCueList {
    只读 length: 数字;
    getCueById(id: 文字): TextTrackCue;
    item(index: 数字): TextTrackCue;
    [index: 数字]: TextTrackCue;

}
声明 值量 TextTrackCueList: {
    prototype: TextTrackCueList;
    新建(): TextTrackCueList;

};
接口 TextTrackListEventMap {
    "addtrack": TrackEvent;

}
接口 TextTrackList 扩展 EventTarget {
    只读 length: 数字;
    onaddtrack: ((this: TextTrackList, ev: TrackEvent) => 任意) | 空值;
    item(index: 数字): TextTrack;
    addEventListener<K 扩展 键为 TextTrackListEventMap>(type: K, listener: (this: TextTrackList, ev: TextTrackListEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 TextTrackListEventMap>(type: K, listener: (this: TextTrackList, ev: TextTrackListEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;
    [index: 数字]: TextTrack;

}
声明 值量 TextTrackList: {
    prototype: TextTrackList;
    新建(): TextTrackList;

};
接口 TimeRanges {
    只读 length: 数字;
    end(index: 数字): 数字;
    start(index: 数字): 数字;

}
声明 值量 TimeRanges: {
    prototype: TimeRanges;
    新建(): TimeRanges;

};
接口 Touch {
    只读 clientX: 数字;
    只读 clientY: 数字;
    只读 identifier: 数字;
    只读 pageX: 数字;
    只读 pageY: 数字;
    只读 screenX: 数字;
    只读 screenY: 数字;
    只读 target: EventTarget;

}
声明 值量 Touch: {
    prototype: Touch;
    新建(): Touch;

};
接口 TouchEvent 扩展 UIEvent {
    只读 altKey: 真假;
    只读 changedTouches: TouchList;
    只读 charCode: 数字;
    只读 ctrlKey: 真假;
    只读 keyCode: 数字;
    只读 metaKey: 真假;
    只读 shiftKey: 真假;
    只读 targetTouches: TouchList;
    只读 touches: TouchList;

    /** @deprecated */
    只读 which: 数字;

}
声明 值量 TouchEvent: {
    prototype: TouchEvent;
    新建(type: 文字, touchEventInit?: TouchEventInit): TouchEvent;

};
接口 TouchEventInit 扩展 EventModifierInit {
    changedTouches?: Touch[];
    targetTouches?: Touch[];
    touches?: Touch[];

}
接口 TouchList {
    只读 length: 数字;
    item(index: 数字): Touch | 空值;
    [index: 数字]: Touch;

}
声明 值量 TouchList: {
    prototype: TouchList;
    新建(): TouchList;

};
接口 TrackEvent 扩展 Event {
    只读 track: VideoTrack | AudioTrack | TextTrack | 空值;

}
声明 值量 TrackEvent: {
    prototype: TrackEvent;
    新建(typeArg: 文字, eventInitDict?: TrackEventInit): TrackEvent;

};
接口 TransitionEvent 扩展 Event {
    只读 elapsedTime: 数字;
    只读 propertyName: 文字;
    initTransitionEvent(typeArg: 文字, canBubbleArg: 真假, cancelableArg: 真假, propertyNameArg: 文字, elapsedTimeArg: 数字): 无值;

}
声明 值量 TransitionEvent: {
    prototype: TransitionEvent;
    新建(typeArg: 文字, eventInitDict?: TransitionEventInit): TransitionEvent;

};
接口 TreeWalker {
    currentNode: Node;

    /** @deprecated */
    只读 expandEntityReferences: 真假;
    只读 filter: NodeFilter | 空值;
    只读 root: Node;
    只读 whatToShow: 数字;
    firstChild(): Node | 空值;
    lastChild(): Node | 空值;
    nextNode(): Node | 空值;
    nextSibling(): Node | 空值;
    parentNode(): Node | 空值;
    previousNode(): Node | 空值;
    previousSibling(): Node | 空值;

}
声明 值量 TreeWalker: {
    prototype: TreeWalker;
    新建(): TreeWalker;

};
接口 UIEvent 扩展 Event {
    只读 detail: 数字;
    只读 view: Window;
    initUIEvent(typeArg: 文字, canBubbleArg: 真假, cancelableArg: 真假, viewArg: Window, detailArg: 数字): 无值;

}
声明 值量 UIEvent: {
    prototype: UIEvent;
    新建(typeArg: 文字, eventInitDict?: UIEventInit): UIEvent;

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
接口 VRDisplay 扩展 EventTarget {
    只读 capabilities: VRDisplayCapabilities;
    depthFar: 数字;
    depthNear: 数字;
    只读 displayId: 数字;
    只读 displayName: 文字;
    只读 isConnected: 真假;
    只读 isPresenting: 真假;
    只读 stageParameters: VRStageParameters | 空值;
    cancelAnimationFrame(handle: 数字): 无值;
    //@@{ 预设_:Promise }
    exitPresent(): 预设_<无值>;
    getEyeParameters(whichEye: 文字): VREyeParameters;
    getFrameData(frameData: VRFrameData): 真假;
    getLayers(): VRLayer[];

    /** @deprecated */
    getPose(): VRPose;
    requestAnimationFrame(callback: FrameRequestCallback): 数字;
    //@@{ 预设_:Promise }
    requestPresent(layers: VRLayer[]): 预设_<无值>;
    resetPose(): 无值;
    submitFrame(pose?: VRPose): 无值;

}
声明 值量 VRDisplay: {
    prototype: VRDisplay;
    新建(): VRDisplay;

};
接口 VRDisplayCapabilities {
    只读 canPresent: 真假;
    只读 hasExternalDisplay: 真假;
    只读 hasOrientation: 真假;
    只读 hasPosition: 真假;
    只读 maxLayers: 数字;

}
声明 值量 VRDisplayCapabilities: {
    prototype: VRDisplayCapabilities;
    新建(): VRDisplayCapabilities;

};
接口 VRDisplayEvent 扩展 Event {
    只读 display: VRDisplay;
    只读 reason: VRDisplayEventReason | 空值;

}
声明 值量 VRDisplayEvent: {
    prototype: VRDisplayEvent;
    新建(type: 文字, eventInitDict: VRDisplayEventInit): VRDisplayEvent;

};
接口 VREyeParameters {

    /** @deprecated */
    只读 fieldOfView: VRFieldOfView;
    //@@{ 浮点数组32_:Float32Array }
    只读 offset: 浮点数组32_;
    只读 renderHeight: 数字;
    只读 renderWidth: 数字;

}
声明 值量 VREyeParameters: {
    prototype: VREyeParameters;
    新建(): VREyeParameters;

};
接口 VRFieldOfView {
    只读 downDegrees: 数字;
    只读 leftDegrees: 数字;
    只读 rightDegrees: 数字;
    只读 upDegrees: 数字;

}
声明 值量 VRFieldOfView: {
    prototype: VRFieldOfView;
    新建(): VRFieldOfView;

};
接口 VRFrameData {
    //@@{ 浮点数组32_:Float32Array }
    只读 leftProjectionMatrix: 浮点数组32_;
    //@@{ 浮点数组32_:Float32Array }
    只读 leftViewMatrix: 浮点数组32_;
    只读 pose: VRPose;
    //@@{ 浮点数组32_:Float32Array }
    只读 rightProjectionMatrix: 浮点数组32_;
    //@@{ 浮点数组32_:Float32Array }
    只读 rightViewMatrix: 浮点数组32_;
    只读 timestamp: 数字;

}
声明 值量 VRFrameData: {
    prototype: VRFrameData;
    新建(): VRFrameData;

};
接口 VRPose {
    //@@{ 浮点数组32_:Float32Array }
    只读 angularAcceleration: 浮点数组32_ | 空值;
    //@@{ 浮点数组32_:Float32Array }
    只读 angularVelocity: 浮点数组32_ | 空值;
    //@@{ 浮点数组32_:Float32Array }
    只读 linearAcceleration: 浮点数组32_ | 空值;
    //@@{ 浮点数组32_:Float32Array }
    只读 linearVelocity: 浮点数组32_ | 空值;
    //@@{ 浮点数组32_:Float32Array }
    只读 orientation: 浮点数组32_ | 空值;
    //@@{ 浮点数组32_:Float32Array }
    只读 position: 浮点数组32_ | 空值;
    只读 timestamp: 数字;

}
声明 值量 VRPose: {
    prototype: VRPose;
    新建(): VRPose;

};
接口 ValidityState {
    只读 badInput: 真假;
    只读 customError: 真假;
    只读 patternMismatch: 真假;
    只读 rangeOverflow: 真假;
    只读 rangeUnderflow: 真假;
    只读 stepMismatch: 真假;
    只读 tooLong: 真假;
    只读 tooShort: 真假;
    只读 typeMismatch: 真假;
    只读 valid: 真假;
    只读 valueMissing: 真假;

}
声明 值量 ValidityState: {
    prototype: ValidityState;
    新建(): ValidityState;

};
接口 VideoPlaybackQuality {
    只读 corruptedVideoFrames: 数字;
    只读 creationTime: 数字;
    只读 droppedVideoFrames: 数字;
    只读 totalFrameDelay: 数字;
    只读 totalVideoFrames: 数字;

}
声明 值量 VideoPlaybackQuality: {
    prototype: VideoPlaybackQuality;
    新建(): VideoPlaybackQuality;

};
接口 VideoTrack {
    只读 id: 文字;
    kind: 文字;
    只读 label: 文字;
    language: 文字;
    selected: 真假;
    只读 sourceBuffer: SourceBuffer;

}
声明 值量 VideoTrack: {
    prototype: VideoTrack;
    新建(): VideoTrack;

};
接口 VideoTrackListEventMap {
    "addtrack": TrackEvent;
    "change": Event;
    "removetrack": TrackEvent;

}
接口 VideoTrackList 扩展 EventTarget {
    只读 length: 数字;
    onaddtrack: ((this: VideoTrackList, ev: TrackEvent) => 任意) | 空值;
    onchange: ((this: VideoTrackList, ev: Event) => 任意) | 空值;
    onremovetrack: ((this: VideoTrackList, ev: TrackEvent) => 任意) | 空值;
    只读 selectedIndex: 数字;
    getTrackById(id: 文字): VideoTrack | 空值;
    item(index: 数字): VideoTrack;
    addEventListener<K 扩展 键为 VideoTrackListEventMap>(type: K, listener: (this: VideoTrackList, ev: VideoTrackListEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 VideoTrackListEventMap>(type: K, listener: (this: VideoTrackList, ev: VideoTrackListEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;
    [index: 数字]: VideoTrack;

}
声明 值量 VideoTrackList: {
    prototype: VideoTrackList;
    新建(): VideoTrackList;

};
接口 WEBGL_color_buffer_float {
    只读 FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: 数字;
    只读 RGB32F_EXT: 数字;
    只读 RGBA32F_EXT: 数字;
    只读 UNSIGNED_NORMALIZED_EXT: 数字;

}
接口 WEBGL_compressed_texture_astc {
    只读 COMPRESSED_RGBA_ASTC_10x10_KHR: 数字;
    只读 COMPRESSED_RGBA_ASTC_10x5_KHR: 数字;
    只读 COMPRESSED_RGBA_ASTC_10x6_KHR: 数字;
    只读 COMPRESSED_RGBA_ASTC_10x8_KHR: 数字;
    只读 COMPRESSED_RGBA_ASTC_12x10_KHR: 数字;
    只读 COMPRESSED_RGBA_ASTC_12x12_KHR: 数字;
    只读 COMPRESSED_RGBA_ASTC_4x4_KHR: 数字;
    只读 COMPRESSED_RGBA_ASTC_5x4_KHR: 数字;
    只读 COMPRESSED_RGBA_ASTC_5x5_KHR: 数字;
    只读 COMPRESSED_RGBA_ASTC_6x5_KHR: 数字;
    只读 COMPRESSED_RGBA_ASTC_6x6_KHR: 数字;
    只读 COMPRESSED_RGBA_ASTC_8x5_KHR: 数字;
    只读 COMPRESSED_RGBA_ASTC_8x6_KHR: 数字;
    只读 COMPRESSED_RGBA_ASTC_8x8_KHR: 数字;
    只读 COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: 数字;
    只读 COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: 数字;
    只读 COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: 数字;
    只读 COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR: 数字;
    只读 COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: 数字;
    只读 COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: 数字;
    只读 COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: 数字;
    只读 COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: 数字;
    只读 COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: 数字;
    只读 COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: 数字;
    只读 COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: 数字;
    只读 COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: 数字;
    只读 COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: 数字;
    只读 COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: 数字;
    getSupportedProfiles(): 文字[];

}
接口 WEBGL_compressed_texture_s3tc {
    只读 COMPRESSED_RGBA_S3TC_DXT1_EXT: 数字;
    只读 COMPRESSED_RGBA_S3TC_DXT3_EXT: 数字;
    只读 COMPRESSED_RGBA_S3TC_DXT5_EXT: 数字;
    只读 COMPRESSED_RGB_S3TC_DXT1_EXT: 数字;

}
声明 值量 WEBGL_compressed_texture_s3tc: {
    prototype: WEBGL_compressed_texture_s3tc;
    新建(): WEBGL_compressed_texture_s3tc;
    只读 COMPRESSED_RGBA_S3TC_DXT1_EXT: 数字;
    只读 COMPRESSED_RGBA_S3TC_DXT3_EXT: 数字;
    只读 COMPRESSED_RGBA_S3TC_DXT5_EXT: 数字;
    只读 COMPRESSED_RGB_S3TC_DXT1_EXT: 数字;

};
接口 WEBGL_compressed_texture_s3tc_srgb {
    只读 COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: 数字;
    只读 COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: 数字;
    只读 COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: 数字;
    只读 COMPRESSED_SRGB_S3TC_DXT1_EXT: 数字;

}
接口 WEBGL_debug_renderer_info {
    只读 UNMASKED_RENDERER_WEBGL: 数字;
    只读 UNMASKED_VENDOR_WEBGL: 数字;

}
声明 值量 WEBGL_debug_renderer_info: {
    prototype: WEBGL_debug_renderer_info;
    新建(): WEBGL_debug_renderer_info;
    只读 UNMASKED_RENDERER_WEBGL: 数字;
    只读 UNMASKED_VENDOR_WEBGL: 数字;

};
接口 WEBGL_debug_shaders {
    getTranslatedShaderSource(shader: WebGLShader): 文字;

}
接口 WEBGL_depth_texture {
    只读 UNSIGNED_INT_24_8_WEBGL: 数字;

}
声明 值量 WEBGL_depth_texture: {
    prototype: WEBGL_depth_texture;
    新建(): WEBGL_depth_texture;
    只读 UNSIGNED_INT_24_8_WEBGL: 数字;

};
接口 WEBGL_draw_buffers {
    只读 COLOR_ATTACHMENT0_WEBGL: 数字;
    只读 COLOR_ATTACHMENT10_WEBGL: 数字;
    只读 COLOR_ATTACHMENT11_WEBGL: 数字;
    只读 COLOR_ATTACHMENT12_WEBGL: 数字;
    只读 COLOR_ATTACHMENT13_WEBGL: 数字;
    只读 COLOR_ATTACHMENT14_WEBGL: 数字;
    只读 COLOR_ATTACHMENT15_WEBGL: 数字;
    只读 COLOR_ATTACHMENT1_WEBGL: 数字;
    只读 COLOR_ATTACHMENT2_WEBGL: 数字;
    只读 COLOR_ATTACHMENT3_WEBGL: 数字;
    只读 COLOR_ATTACHMENT4_WEBGL: 数字;
    只读 COLOR_ATTACHMENT5_WEBGL: 数字;
    只读 COLOR_ATTACHMENT6_WEBGL: 数字;
    只读 COLOR_ATTACHMENT7_WEBGL: 数字;
    只读 COLOR_ATTACHMENT8_WEBGL: 数字;
    只读 COLOR_ATTACHMENT9_WEBGL: 数字;
    只读 DRAW_BUFFER0_WEBGL: 数字;
    只读 DRAW_BUFFER10_WEBGL: 数字;
    只读 DRAW_BUFFER11_WEBGL: 数字;
    只读 DRAW_BUFFER12_WEBGL: 数字;
    只读 DRAW_BUFFER13_WEBGL: 数字;
    只读 DRAW_BUFFER14_WEBGL: 数字;
    只读 DRAW_BUFFER15_WEBGL: 数字;
    只读 DRAW_BUFFER1_WEBGL: 数字;
    只读 DRAW_BUFFER2_WEBGL: 数字;
    只读 DRAW_BUFFER3_WEBGL: 数字;
    只读 DRAW_BUFFER4_WEBGL: 数字;
    只读 DRAW_BUFFER5_WEBGL: 数字;
    只读 DRAW_BUFFER6_WEBGL: 数字;
    只读 DRAW_BUFFER7_WEBGL: 数字;
    只读 DRAW_BUFFER8_WEBGL: 数字;
    只读 DRAW_BUFFER9_WEBGL: 数字;
    只读 MAX_COLOR_ATTACHMENTS_WEBGL: 数字;
    只读 MAX_DRAW_BUFFERS_WEBGL: 数字;
    drawBuffersWEBGL(buffers: 数字[]): 无值;

}
接口 WEBGL_lose_context {
    loseContext(): 无值;
    restoreContext(): 无值;

}
接口 WaveShaperNode 扩展 AudioNode {
    //@@{ 浮点数组32_:Float32Array }
    curve: 浮点数组32_ | 空值;
    oversample: OverSampleType;

}
声明 值量 WaveShaperNode: {
    prototype: WaveShaperNode;
    新建(): WaveShaperNode;

};
接口 WebAuthentication {
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer, 预设_:Promise }
    getAssertion(assertionChallenge: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值, options?: AssertionOptions): 预设_<WebAuthnAssertion>;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer, 预设_:Promise }
    makeCredential(accountInformation: Account, cryptoParameters: ScopedCredentialParameters[], attestationChallenge: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值, options?: ScopedCredentialOptions): 预设_<ScopedCredentialInfo>;

}
声明 值量 WebAuthentication: {
    prototype: WebAuthentication;
    新建(): WebAuthentication;

};
接口 WebAuthnAssertion {
    //@@{ 数组缓冲区_:ArrayBuffer }
    只读 authenticatorData: 数组缓冲区_;
    //@@{ 数组缓冲区_:ArrayBuffer }
    只读 clientData: 数组缓冲区_;
    只读 credential: ScopedCredential;
    //@@{ 数组缓冲区_:ArrayBuffer }
    只读 signature: 数组缓冲区_;

}
声明 值量 WebAuthnAssertion: {
    prototype: WebAuthnAssertion;
    新建(): WebAuthnAssertion;

};
接口 WebGLActiveInfo {
    只读 name: 文字;
    只读 size: 数字;
    只读 type: 数字;

}
声明 值量 WebGLActiveInfo: {
    prototype: WebGLActiveInfo;
    新建(): WebGLActiveInfo;

};
接口 WebGLBuffer 扩展 WebGLObject {

}
声明 值量 WebGLBuffer: {
    prototype: WebGLBuffer;
    新建(): WebGLBuffer;

};
接口 WebGLContextEvent 扩展 Event {
    只读 statusMessage: 文字;

}
声明 值量 WebGLContextEvent: {
    prototype: WebGLContextEvent;
    新建(typeArg: 文字, eventInitDict?: WebGLContextEventInit): WebGLContextEvent;

};
接口 WebGLFramebuffer 扩展 WebGLObject {

}
声明 值量 WebGLFramebuffer: {
    prototype: WebGLFramebuffer;
    新建(): WebGLFramebuffer;

};
接口 WebGLObject {

}
声明 值量 WebGLObject: {
    prototype: WebGLObject;
    新建(): WebGLObject;

};
接口 WebGLProgram 扩展 WebGLObject {

}
声明 值量 WebGLProgram: {
    prototype: WebGLProgram;
    新建(): WebGLProgram;

};
接口 WebGLRenderbuffer 扩展 WebGLObject {

}
声明 值量 WebGLRenderbuffer: {
    prototype: WebGLRenderbuffer;
    新建(): WebGLRenderbuffer;

};
接口 WebGLRenderingContext {
    只读 canvas: HTMLCanvasElement;
    只读 drawingBufferHeight: 数字;
    只读 drawingBufferWidth: 数字;
    activeTexture(texture: 数字): 无值;
    attachShader(program: WebGLProgram | 空值, shader: WebGLShader | 空值): 无值;
    bindAttribLocation(program: WebGLProgram | 空值, index: 数字, name: 文字): 无值;
    bindBuffer(target: 数字, buffer: WebGLBuffer | 空值): 无值;
    bindFramebuffer(target: 数字, framebuffer: WebGLFramebuffer | 空值): 无值;
    bindRenderbuffer(target: 数字, renderbuffer: WebGLRenderbuffer | 空值): 无值;
    bindTexture(target: 数字, texture: WebGLTexture | 空值): 无值;
    blendColor(red: 数字, green: 数字, blue: 数字, alpha: 数字): 无值;
    blendEquation(mode: 数字): 无值;
    blendEquationSeparate(modeRGB: 数字, modeAlpha: 数字): 无值;
    blendFunc(sfactor: 数字, dfactor: 数字): 无值;
    blendFuncSeparate(srcRGB: 数字, dstRGB: 数字, srcAlpha: 数字, dstAlpha: 数字): 无值;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    bufferData(target: 数字, size: 数字 | 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值, usage: 数字): 无值;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    bufferSubData(target: 数字, offset: 数字, data: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值): 无值;
    checkFramebufferStatus(target: 数字): 数字;
    clear(mask: 数字): 无值;
    clearColor(red: 数字, green: 数字, blue: 数字, alpha: 数字): 无值;
    clearDepth(depth: 数字): 无值;
    clearStencil(s: 数字): 无值;
    colorMask(red: 真假, green: 真假, blue: 真假, alpha: 真假): 无值;
    compileShader(shader: WebGLShader | 空值): 无值;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView }
    compressedTexImage2D(target: 数字, level: 数字, internalformat: 数字, width: 数字, height: 数字, border: 数字, data: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 空值): 无值;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView }
    compressedTexSubImage2D(target: 数字, level: 数字, xoffset: 数字, yoffset: 数字, width: 数字, height: 数字, format: 数字, data: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 空值): 无值;
    copyTexImage2D(target: 数字, level: 数字, internalformat: 数字, x: 数字, y: 数字, width: 数字, height: 数字, border: 数字): 无值;
    copyTexSubImage2D(target: 数字, level: 数字, xoffset: 数字, yoffset: 数字, x: 数字, y: 数字, width: 数字, height: 数字): 无值;
    createBuffer(): WebGLBuffer | 空值;
    createFramebuffer(): WebGLFramebuffer | 空值;
    createProgram(): WebGLProgram | 空值;
    createRenderbuffer(): WebGLRenderbuffer | 空值;
    createShader(type: 数字): WebGLShader | 空值;
    createTexture(): WebGLTexture | 空值;
    cullFace(mode: 数字): 无值;
    deleteBuffer(buffer: WebGLBuffer | 空值): 无值;
    deleteFramebuffer(framebuffer: WebGLFramebuffer | 空值): 无值;
    deleteProgram(program: WebGLProgram | 空值): 无值;
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | 空值): 无值;
    deleteShader(shader: WebGLShader | 空值): 无值;
    deleteTexture(texture: WebGLTexture | 空值): 无值;
    depthFunc(func: 数字): 无值;
    depthMask(flag: 真假): 无值;
    depthRange(zNear: 数字, zFar: 数字): 无值;
    detachShader(program: WebGLProgram | 空值, shader: WebGLShader | 空值): 无值;
    disable(cap: 数字): 无值;
    disableVertexAttribArray(index: 数字): 无值;
    drawArrays(mode: 数字, first: 数字, count: 数字): 无值;
    drawElements(mode: 数字, count: 数字, type: 数字, offset: 数字): 无值;
    enable(cap: 数字): 无值;
    enableVertexAttribArray(index: 数字): 无值;
    finish(): 无值;
    flush(): 无值;
    framebufferRenderbuffer(target: 数字, attachment: 数字, renderbuffertarget: 数字, renderbuffer: WebGLRenderbuffer | 空值): 无值;
    framebufferTexture2D(target: 数字, attachment: 数字, textarget: 数字, texture: WebGLTexture | 空值, level: 数字): 无值;
    frontFace(mode: 数字): 无值;
    generateMipmap(target: 数字): 无值;
    getActiveAttrib(program: WebGLProgram | 空值, index: 数字): WebGLActiveInfo | 空值;
    getActiveUniform(program: WebGLProgram | 空值, index: 数字): WebGLActiveInfo | 空值;
    getAttachedShaders(program: WebGLProgram | 空值): WebGLShader[] | 空值;
    getAttribLocation(program: WebGLProgram | 空值, name: 文字): 数字;
    getBufferParameter(target: 数字, pname: 数字): 任意;
    getContextAttributes(): WebGLContextAttributes;
    getError(): 数字;
    getExtension(extensionName: "EXT_blend_minmax"): EXT_blend_minmax | 空值;
    getExtension(extensionName: "EXT_texture_filter_anisotropic"): EXT_texture_filter_anisotropic | 空值;
    getExtension(extensionName: "EXT_frag_depth"): EXT_frag_depth | 空值;
    getExtension(extensionName: "EXT_shader_texture_lod"): EXT_shader_texture_lod | 空值;
    getExtension(extensionName: "EXT_sRGB"): EXT_sRGB | 空值;
    getExtension(extensionName: "OES_vertex_array_object"): OES_vertex_array_object | 空值;
    getExtension(extensionName: "WEBGL_color_buffer_float"): WEBGL_color_buffer_float | 空值;
    getExtension(extensionName: "WEBGL_compressed_texture_astc"): WEBGL_compressed_texture_astc | 空值;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc_srgb"): WEBGL_compressed_texture_s3tc_srgb | 空值;
    getExtension(extensionName: "WEBGL_debug_shaders"): WEBGL_debug_shaders | 空值;
    getExtension(extensionName: "WEBGL_draw_buffers"): WEBGL_draw_buffers | 空值;
    getExtension(extensionName: "WEBGL_lose_context"): WEBGL_lose_context | 空值;
    getExtension(extensionName: "WEBGL_depth_texture"): WEBGL_depth_texture | 空值;
    getExtension(extensionName: "WEBGL_debug_renderer_info"): WEBGL_debug_renderer_info | 空值;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc"): WEBGL_compressed_texture_s3tc | 空值;
    getExtension(extensionName: "OES_texture_half_float_linear"): OES_texture_half_float_linear | 空值;
    getExtension(extensionName: "OES_texture_half_float"): OES_texture_half_float | 空值;
    getExtension(extensionName: "OES_texture_float_linear"): OES_texture_float_linear | 空值;
    getExtension(extensionName: "OES_texture_float"): OES_texture_float | 空值;
    getExtension(extensionName: "OES_standard_derivatives"): OES_standard_derivatives | 空值;
    getExtension(extensionName: "OES_element_index_uint"): OES_element_index_uint | 空值;
    getExtension(extensionName: "ANGLE_instanced_arrays"): ANGLE_instanced_arrays | 空值;
    getExtension(extensionName: 文字): 任意;
    getFramebufferAttachmentParameter(target: 数字, attachment: 数字, pname: 数字): 任意;
    getParameter(pname: 数字): 任意;
    getProgramInfoLog(program: WebGLProgram | 空值): 文字 | 空值;
    getProgramParameter(program: WebGLProgram | 空值, pname: 数字): 任意;
    getRenderbufferParameter(target: 数字, pname: 数字): 任意;
    getShaderInfoLog(shader: WebGLShader | 空值): 文字 | 空值;
    getShaderParameter(shader: WebGLShader | 空值, pname: 数字): 任意;
    getShaderPrecisionFormat(shadertype: 数字, precisiontype: 数字): WebGLShaderPrecisionFormat | 空值;
    getShaderSource(shader: WebGLShader | 空值): 文字 | 空值;
    getSupportedExtensions(): 文字[] | 空值;
    getTexParameter(target: 数字, pname: 数字): 任意;
    getUniform(program: WebGLProgram | 空值, location: WebGLUniformLocation | 空值): 任意;
    getUniformLocation(program: WebGLProgram | 空值, name: 文字): WebGLUniformLocation | 空值;
    getVertexAttrib(index: 数字, pname: 数字): 任意;
    getVertexAttribOffset(index: 数字, pname: 数字): 数字;
    hint(target: 数字, mode: 数字): 无值;
    isBuffer(buffer: WebGLBuffer | 空值): 真假;
    isContextLost(): 真假;
    isEnabled(cap: 数字): 真假;
    isFramebuffer(framebuffer: WebGLFramebuffer | 空值): 真假;
    isProgram(program: WebGLProgram | 空值): 真假;
    isRenderbuffer(renderbuffer: WebGLRenderbuffer | 空值): 真假;
    isShader(shader: WebGLShader | 空值): 真假;
    isTexture(texture: WebGLTexture | 空值): 真假;
    lineWidth(width: 数字): 无值;
    linkProgram(program: WebGLProgram | 空值): 无值;
    pixelStorei(pname: 数字, param: 数字 | 真假): 无值;
    polygonOffset(factor: 数字, units: 数字): 无值;
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView }
    readPixels(x: 数字, y: 数字, width: 数字, height: 数字, format: 数字, type: 数字, pixels: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 空值): 无值;
    renderbufferStorage(target: 数字, internalformat: 数字, width: 数字, height: 数字): 无值;
    sampleCoverage(value: 数字, invert: 真假): 无值;
    scissor(x: 数字, y: 数字, width: 数字, height: 数字): 无值;
    shaderSource(shader: WebGLShader | 空值, source: 文字): 无值;
    stencilFunc(func: 数字, ref: 数字, mask: 数字): 无值;
    stencilFuncSeparate(face: 数字, func: 数字, ref: 数字, mask: 数字): 无值;
    stencilMask(mask: 数字): 无值;
    stencilMaskSeparate(face: 数字, mask: 数字): 无值;
    stencilOp(fail: 数字, zfail: 数字, zpass: 数字): 无值;
    stencilOpSeparate(face: 数字, fail: 数字, zfail: 数字, zpass: 数字): 无值;
    //@@{ 数组缓冲区视图_:ArrayBufferView }
    texImage2D(target: 数字, level: 数字, internalformat: 数字, width: 数字, height: 数字, border: 数字, format: 数字, type: 数字, pixels: 数组缓冲区视图_ | 空值): 无值;
    texImage2D(target: 数字, level: 数字, internalformat: 数字, format: 数字, type: 数字, pixels: ImageBitmap | ImageData | HTMLVideoElement | HTMLImageElement | HTMLCanvasElement): 无值;
    texParameterf(target: 数字, pname: 数字, param: 数字): 无值;
    texParameteri(target: 数字, pname: 数字, param: 数字): 无值;
    //@@{ 数组缓冲区视图_:ArrayBufferView }
    texSubImage2D(target: 数字, level: 数字, xoffset: 数字, yoffset: 数字, width: 数字, height: 数字, format: 数字, type: 数字, pixels: 数组缓冲区视图_ | 空值): 无值;
    texSubImage2D(target: 数字, level: 数字, xoffset: 数字, yoffset: 数字, format: 数字, type: 数字, pixels: ImageBitmap | ImageData | HTMLVideoElement | HTMLImageElement | HTMLCanvasElement): 无值;
    uniform1f(location: WebGLUniformLocation | 空值, x: 数字): 无值;
    //@@{ 浮点数组32_:Float32Array, 数组等_:ArrayLike }
    uniform1fv(location: WebGLUniformLocation | 空值, v: 浮点数组32_ | 数组等_<数字>): 无值;
    uniform1i(location: WebGLUniformLocation | 空值, x: 数字): 无值;
    //@@{ 整数数组32_:Int32Array, 数组等_:ArrayLike }
    uniform1iv(location: WebGLUniformLocation | 空值, v: 整数数组32_ | 数组等_<数字>): 无值;
    uniform2f(location: WebGLUniformLocation | 空值, x: 数字, y: 数字): 无值;
    //@@{ 浮点数组32_:Float32Array, 数组等_:ArrayLike }
    uniform2fv(location: WebGLUniformLocation | 空值, v: 浮点数组32_ | 数组等_<数字>): 无值;
    uniform2i(location: WebGLUniformLocation | 空值, x: 数字, y: 数字): 无值;
    //@@{ 整数数组32_:Int32Array, 数组等_:ArrayLike }
    uniform2iv(location: WebGLUniformLocation | 空值, v: 整数数组32_ | 数组等_<数字>): 无值;
    uniform3f(location: WebGLUniformLocation | 空值, x: 数字, y: 数字, z: 数字): 无值;
    //@@{ 浮点数组32_:Float32Array, 数组等_:ArrayLike }
    uniform3fv(location: WebGLUniformLocation | 空值, v: 浮点数组32_ | 数组等_<数字>): 无值;
    uniform3i(location: WebGLUniformLocation | 空值, x: 数字, y: 数字, z: 数字): 无值;
    //@@{ 整数数组32_:Int32Array, 数组等_:ArrayLike }
    uniform3iv(location: WebGLUniformLocation | 空值, v: 整数数组32_ | 数组等_<数字>): 无值;
    uniform4f(location: WebGLUniformLocation | 空值, x: 数字, y: 数字, z: 数字, w: 数字): 无值;
    //@@{ 浮点数组32_:Float32Array, 数组等_:ArrayLike }
    uniform4fv(location: WebGLUniformLocation | 空值, v: 浮点数组32_ | 数组等_<数字>): 无值;
    uniform4i(location: WebGLUniformLocation | 空值, x: 数字, y: 数字, z: 数字, w: 数字): 无值;
    //@@{ 整数数组32_:Int32Array, 数组等_:ArrayLike }
    uniform4iv(location: WebGLUniformLocation | 空值, v: 整数数组32_ | 数组等_<数字>): 无值;
    //@@{ 浮点数组32_:Float32Array, 数组等_:ArrayLike }
    uniformMatrix2fv(location: WebGLUniformLocation | 空值, transpose: 真假, value: 浮点数组32_ | 数组等_<数字>): 无值;
    //@@{ 浮点数组32_:Float32Array, 数组等_:ArrayLike }
    uniformMatrix3fv(location: WebGLUniformLocation | 空值, transpose: 真假, value: 浮点数组32_ | 数组等_<数字>): 无值;
    //@@{ 浮点数组32_:Float32Array, 数组等_:ArrayLike }
    uniformMatrix4fv(location: WebGLUniformLocation | 空值, transpose: 真假, value: 浮点数组32_ | 数组等_<数字>): 无值;
    useProgram(program: WebGLProgram | 空值): 无值;
    validateProgram(program: WebGLProgram | 空值): 无值;
    vertexAttrib1f(indx: 数字, x: 数字): 无值;
    //@@{ 浮点数组32_:Float32Array }
    vertexAttrib1fv(indx: 数字, values: 浮点数组32_ | 数字[]): 无值;
    vertexAttrib2f(indx: 数字, x: 数字, y: 数字): 无值;
    //@@{ 浮点数组32_:Float32Array }
    vertexAttrib2fv(indx: 数字, values: 浮点数组32_ | 数字[]): 无值;
    vertexAttrib3f(indx: 数字, x: 数字, y: 数字, z: 数字): 无值;
    //@@{ 浮点数组32_:Float32Array }
    vertexAttrib3fv(indx: 数字, values: 浮点数组32_ | 数字[]): 无值;
    vertexAttrib4f(indx: 数字, x: 数字, y: 数字, z: 数字, w: 数字): 无值;
    //@@{ 浮点数组32_:Float32Array }
    vertexAttrib4fv(indx: 数字, values: 浮点数组32_ | 数字[]): 无值;
    vertexAttribPointer(indx: 数字, size: 数字, type: 数字, normalized: 真假, stride: 数字, offset: 数字): 无值;
    viewport(x: 数字, y: 数字, width: 数字, height: 数字): 无值;
    只读 ACTIVE_ATTRIBUTES: 数字;
    只读 ACTIVE_TEXTURE: 数字;
    只读 ACTIVE_UNIFORMS: 数字;
    只读 ALIASED_LINE_WIDTH_RANGE: 数字;
    只读 ALIASED_POINT_SIZE_RANGE: 数字;
    只读 ALPHA: 数字;
    只读 ALPHA_BITS: 数字;
    只读 ALWAYS: 数字;
    只读 ARRAY_BUFFER: 数字;
    只读 ARRAY_BUFFER_BINDING: 数字;
    只读 ATTACHED_SHADERS: 数字;
    只读 BACK: 数字;
    只读 BLEND: 数字;
    只读 BLEND_COLOR: 数字;
    只读 BLEND_DST_ALPHA: 数字;
    只读 BLEND_DST_RGB: 数字;
    只读 BLEND_EQUATION: 数字;
    只读 BLEND_EQUATION_ALPHA: 数字;
    只读 BLEND_EQUATION_RGB: 数字;
    只读 BLEND_SRC_ALPHA: 数字;
    只读 BLEND_SRC_RGB: 数字;
    只读 BLUE_BITS: 数字;
    只读 BOOL: 数字;
    只读 BOOL_VEC2: 数字;
    只读 BOOL_VEC3: 数字;
    只读 BOOL_VEC4: 数字;
    只读 BROWSER_DEFAULT_WEBGL: 数字;
    只读 BUFFER_SIZE: 数字;
    只读 BUFFER_USAGE: 数字;
    只读 BYTE: 数字;
    只读 CCW: 数字;
    只读 CLAMP_TO_EDGE: 数字;
    只读 COLOR_ATTACHMENT0: 数字;
    只读 COLOR_BUFFER_BIT: 数字;
    只读 COLOR_CLEAR_VALUE: 数字;
    只读 COLOR_WRITEMASK: 数字;
    只读 COMPILE_STATUS: 数字;
    只读 COMPRESSED_TEXTURE_FORMATS: 数字;
    只读 CONSTANT_ALPHA: 数字;
    只读 CONSTANT_COLOR: 数字;
    只读 CONTEXT_LOST_WEBGL: 数字;
    只读 CULL_FACE: 数字;
    只读 CULL_FACE_MODE: 数字;
    只读 CURRENT_PROGRAM: 数字;
    只读 CURRENT_VERTEX_ATTRIB: 数字;
    只读 CW: 数字;
    只读 DECR: 数字;
    只读 DECR_WRAP: 数字;
    只读 DELETE_STATUS: 数字;
    只读 DEPTH_ATTACHMENT: 数字;
    只读 DEPTH_BITS: 数字;
    只读 DEPTH_BUFFER_BIT: 数字;
    只读 DEPTH_CLEAR_VALUE: 数字;
    只读 DEPTH_COMPONENT: 数字;
    只读 DEPTH_COMPONENT16: 数字;
    只读 DEPTH_FUNC: 数字;
    只读 DEPTH_RANGE: 数字;
    只读 DEPTH_STENCIL: 数字;
    只读 DEPTH_STENCIL_ATTACHMENT: 数字;
    只读 DEPTH_TEST: 数字;
    只读 DEPTH_WRITEMASK: 数字;
    只读 DITHER: 数字;
    只读 DONT_CARE: 数字;
    只读 DST_ALPHA: 数字;
    只读 DST_COLOR: 数字;
    只读 DYNAMIC_DRAW: 数字;
    只读 ELEMENT_ARRAY_BUFFER: 数字;
    只读 ELEMENT_ARRAY_BUFFER_BINDING: 数字;
    只读 EQUAL: 数字;
    只读 FASTEST: 数字;
    只读 FLOAT: 数字;
    只读 FLOAT_MAT2: 数字;
    只读 FLOAT_MAT3: 数字;
    只读 FLOAT_MAT4: 数字;
    只读 FLOAT_VEC2: 数字;
    只读 FLOAT_VEC3: 数字;
    只读 FLOAT_VEC4: 数字;
    只读 FRAGMENT_SHADER: 数字;
    只读 FRAMEBUFFER: 数字;
    只读 FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 数字;
    只读 FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 数字;
    只读 FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 数字;
    只读 FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 数字;
    只读 FRAMEBUFFER_BINDING: 数字;
    只读 FRAMEBUFFER_COMPLETE: 数字;
    只读 FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 数字;
    只读 FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 数字;
    只读 FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 数字;
    只读 FRAMEBUFFER_UNSUPPORTED: 数字;
    只读 FRONT: 数字;
    只读 FRONT_AND_BACK: 数字;
    只读 FRONT_FACE: 数字;
    只读 FUNC_ADD: 数字;
    只读 FUNC_REVERSE_SUBTRACT: 数字;
    只读 FUNC_SUBTRACT: 数字;
    只读 GENERATE_MIPMAP_HINT: 数字;
    只读 GEQUAL: 数字;
    只读 GREATER: 数字;
    只读 GREEN_BITS: 数字;
    只读 HIGH_FLOAT: 数字;
    只读 HIGH_INT: 数字;
    只读 IMPLEMENTATION_COLOR_READ_FORMAT: 数字;
    只读 IMPLEMENTATION_COLOR_READ_TYPE: 数字;
    只读 INCR: 数字;
    只读 INCR_WRAP: 数字;
    只读 INT: 数字;
    只读 INT_VEC2: 数字;
    只读 INT_VEC3: 数字;
    只读 INT_VEC4: 数字;
    只读 INVALID_ENUM: 数字;
    只读 INVALID_FRAMEBUFFER_OPERATION: 数字;
    只读 INVALID_OPERATION: 数字;
    只读 INVALID_VALUE: 数字;
    只读 INVERT: 数字;
    只读 KEEP: 数字;
    只读 LEQUAL: 数字;
    只读 LESS: 数字;
    只读 LINEAR: 数字;
    只读 LINEAR_MIPMAP_LINEAR: 数字;
    只读 LINEAR_MIPMAP_NEAREST: 数字;
    只读 LINES: 数字;
    只读 LINE_LOOP: 数字;
    只读 LINE_STRIP: 数字;
    只读 LINE_WIDTH: 数字;
    只读 LINK_STATUS: 数字;
    只读 LOW_FLOAT: 数字;
    只读 LOW_INT: 数字;
    只读 LUMINANCE: 数字;
    只读 LUMINANCE_ALPHA: 数字;
    只读 MAX_COMBINED_TEXTURE_IMAGE_UNITS: 数字;
    只读 MAX_CUBE_MAP_TEXTURE_SIZE: 数字;
    只读 MAX_FRAGMENT_UNIFORM_VECTORS: 数字;
    只读 MAX_RENDERBUFFER_SIZE: 数字;
    只读 MAX_TEXTURE_IMAGE_UNITS: 数字;
    只读 MAX_TEXTURE_SIZE: 数字;
    只读 MAX_VARYING_VECTORS: 数字;
    只读 MAX_VERTEX_ATTRIBS: 数字;
    只读 MAX_VERTEX_TEXTURE_IMAGE_UNITS: 数字;
    只读 MAX_VERTEX_UNIFORM_VECTORS: 数字;
    只读 MAX_VIEWPORT_DIMS: 数字;
    只读 MEDIUM_FLOAT: 数字;
    只读 MEDIUM_INT: 数字;
    只读 MIRRORED_REPEAT: 数字;
    只读 NEAREST: 数字;
    只读 NEAREST_MIPMAP_LINEAR: 数字;
    只读 NEAREST_MIPMAP_NEAREST: 数字;
    只读 NEVER: 数字;
    只读 NICEST: 数字;
    只读 NONE: 数字;
    只读 NOTEQUAL: 数字;
    只读 NO_ERROR: 数字;
    只读 ONE: 数字;
    只读 ONE_MINUS_CONSTANT_ALPHA: 数字;
    只读 ONE_MINUS_CONSTANT_COLOR: 数字;
    只读 ONE_MINUS_DST_ALPHA: 数字;
    只读 ONE_MINUS_DST_COLOR: 数字;
    只读 ONE_MINUS_SRC_ALPHA: 数字;
    只读 ONE_MINUS_SRC_COLOR: 数字;
    只读 OUT_OF_MEMORY: 数字;
    只读 PACK_ALIGNMENT: 数字;
    只读 POINTS: 数字;
    只读 POLYGON_OFFSET_FACTOR: 数字;
    只读 POLYGON_OFFSET_FILL: 数字;
    只读 POLYGON_OFFSET_UNITS: 数字;
    只读 RED_BITS: 数字;
    只读 RENDERBUFFER: 数字;
    只读 RENDERBUFFER_ALPHA_SIZE: 数字;
    只读 RENDERBUFFER_BINDING: 数字;
    只读 RENDERBUFFER_BLUE_SIZE: 数字;
    只读 RENDERBUFFER_DEPTH_SIZE: 数字;
    只读 RENDERBUFFER_GREEN_SIZE: 数字;
    只读 RENDERBUFFER_HEIGHT: 数字;
    只读 RENDERBUFFER_INTERNAL_FORMAT: 数字;
    只读 RENDERBUFFER_RED_SIZE: 数字;
    只读 RENDERBUFFER_STENCIL_SIZE: 数字;
    只读 RENDERBUFFER_WIDTH: 数字;
    只读 RENDERER: 数字;
    只读 REPEAT: 数字;
    只读 REPLACE: 数字;
    只读 RGB: 数字;
    只读 RGB565: 数字;
    只读 RGB5_A1: 数字;
    只读 RGBA: 数字;
    只读 RGBA4: 数字;
    只读 SAMPLER_2D: 数字;
    只读 SAMPLER_CUBE: 数字;
    只读 SAMPLES: 数字;
    只读 SAMPLE_ALPHA_TO_COVERAGE: 数字;
    只读 SAMPLE_BUFFERS: 数字;
    只读 SAMPLE_COVERAGE: 数字;
    只读 SAMPLE_COVERAGE_INVERT: 数字;
    只读 SAMPLE_COVERAGE_VALUE: 数字;
    只读 SCISSOR_BOX: 数字;
    只读 SCISSOR_TEST: 数字;
    只读 SHADER_TYPE: 数字;
    只读 SHADING_LANGUAGE_VERSION: 数字;
    只读 SHORT: 数字;
    只读 SRC_ALPHA: 数字;
    只读 SRC_ALPHA_SATURATE: 数字;
    只读 SRC_COLOR: 数字;
    只读 STATIC_DRAW: 数字;
    只读 STENCIL_ATTACHMENT: 数字;
    只读 STENCIL_BACK_FAIL: 数字;
    只读 STENCIL_BACK_FUNC: 数字;
    只读 STENCIL_BACK_PASS_DEPTH_FAIL: 数字;
    只读 STENCIL_BACK_PASS_DEPTH_PASS: 数字;
    只读 STENCIL_BACK_REF: 数字;
    只读 STENCIL_BACK_VALUE_MASK: 数字;
    只读 STENCIL_BACK_WRITEMASK: 数字;
    只读 STENCIL_BITS: 数字;
    只读 STENCIL_BUFFER_BIT: 数字;
    只读 STENCIL_CLEAR_VALUE: 数字;
    只读 STENCIL_FAIL: 数字;
    只读 STENCIL_FUNC: 数字;
    只读 STENCIL_INDEX: 数字;
    只读 STENCIL_INDEX8: 数字;
    只读 STENCIL_PASS_DEPTH_FAIL: 数字;
    只读 STENCIL_PASS_DEPTH_PASS: 数字;
    只读 STENCIL_REF: 数字;
    只读 STENCIL_TEST: 数字;
    只读 STENCIL_VALUE_MASK: 数字;
    只读 STENCIL_WRITEMASK: 数字;
    只读 STREAM_DRAW: 数字;
    只读 SUBPIXEL_BITS: 数字;
    只读 TEXTURE: 数字;
    只读 TEXTURE0: 数字;
    只读 TEXTURE1: 数字;
    只读 TEXTURE10: 数字;
    只读 TEXTURE11: 数字;
    只读 TEXTURE12: 数字;
    只读 TEXTURE13: 数字;
    只读 TEXTURE14: 数字;
    只读 TEXTURE15: 数字;
    只读 TEXTURE16: 数字;
    只读 TEXTURE17: 数字;
    只读 TEXTURE18: 数字;
    只读 TEXTURE19: 数字;
    只读 TEXTURE2: 数字;
    只读 TEXTURE20: 数字;
    只读 TEXTURE21: 数字;
    只读 TEXTURE22: 数字;
    只读 TEXTURE23: 数字;
    只读 TEXTURE24: 数字;
    只读 TEXTURE25: 数字;
    只读 TEXTURE26: 数字;
    只读 TEXTURE27: 数字;
    只读 TEXTURE28: 数字;
    只读 TEXTURE29: 数字;
    只读 TEXTURE3: 数字;
    只读 TEXTURE30: 数字;
    只读 TEXTURE31: 数字;
    只读 TEXTURE4: 数字;
    只读 TEXTURE5: 数字;
    只读 TEXTURE6: 数字;
    只读 TEXTURE7: 数字;
    只读 TEXTURE8: 数字;
    只读 TEXTURE9: 数字;
    只读 TEXTURE_2D: 数字;
    只读 TEXTURE_BINDING_2D: 数字;
    只读 TEXTURE_BINDING_CUBE_MAP: 数字;
    只读 TEXTURE_CUBE_MAP: 数字;
    只读 TEXTURE_CUBE_MAP_NEGATIVE_X: 数字;
    只读 TEXTURE_CUBE_MAP_NEGATIVE_Y: 数字;
    只读 TEXTURE_CUBE_MAP_NEGATIVE_Z: 数字;
    只读 TEXTURE_CUBE_MAP_POSITIVE_X: 数字;
    只读 TEXTURE_CUBE_MAP_POSITIVE_Y: 数字;
    只读 TEXTURE_CUBE_MAP_POSITIVE_Z: 数字;
    只读 TEXTURE_MAG_FILTER: 数字;
    只读 TEXTURE_MIN_FILTER: 数字;
    只读 TEXTURE_WRAP_S: 数字;
    只读 TEXTURE_WRAP_T: 数字;
    只读 TRIANGLES: 数字;
    只读 TRIANGLE_FAN: 数字;
    只读 TRIANGLE_STRIP: 数字;
    只读 UNPACK_ALIGNMENT: 数字;
    只读 UNPACK_COLORSPACE_CONVERSION_WEBGL: 数字;
    只读 UNPACK_FLIP_Y_WEBGL: 数字;
    只读 UNPACK_PREMULTIPLY_ALPHA_WEBGL: 数字;
    只读 UNSIGNED_BYTE: 数字;
    只读 UNSIGNED_INT: 数字;
    只读 UNSIGNED_SHORT: 数字;
    只读 UNSIGNED_SHORT_4_4_4_4: 数字;
    只读 UNSIGNED_SHORT_5_5_5_1: 数字;
    只读 UNSIGNED_SHORT_5_6_5: 数字;
    只读 VALIDATE_STATUS: 数字;
    只读 VENDOR: 数字;
    只读 VERSION: 数字;
    只读 VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 数字;
    只读 VERTEX_ATTRIB_ARRAY_ENABLED: 数字;
    只读 VERTEX_ATTRIB_ARRAY_NORMALIZED: 数字;
    只读 VERTEX_ATTRIB_ARRAY_POINTER: 数字;
    只读 VERTEX_ATTRIB_ARRAY_SIZE: 数字;
    只读 VERTEX_ATTRIB_ARRAY_STRIDE: 数字;
    只读 VERTEX_ATTRIB_ARRAY_TYPE: 数字;
    只读 VERTEX_SHADER: 数字;
    只读 VIEWPORT: 数字;
    只读 ZERO: 数字;

}
声明 值量 WebGLRenderingContext: {
    prototype: WebGLRenderingContext;
    新建(): WebGLRenderingContext;
    只读 ACTIVE_ATTRIBUTES: 数字;
    只读 ACTIVE_TEXTURE: 数字;
    只读 ACTIVE_UNIFORMS: 数字;
    只读 ALIASED_LINE_WIDTH_RANGE: 数字;
    只读 ALIASED_POINT_SIZE_RANGE: 数字;
    只读 ALPHA: 数字;
    只读 ALPHA_BITS: 数字;
    只读 ALWAYS: 数字;
    只读 ARRAY_BUFFER: 数字;
    只读 ARRAY_BUFFER_BINDING: 数字;
    只读 ATTACHED_SHADERS: 数字;
    只读 BACK: 数字;
    只读 BLEND: 数字;
    只读 BLEND_COLOR: 数字;
    只读 BLEND_DST_ALPHA: 数字;
    只读 BLEND_DST_RGB: 数字;
    只读 BLEND_EQUATION: 数字;
    只读 BLEND_EQUATION_ALPHA: 数字;
    只读 BLEND_EQUATION_RGB: 数字;
    只读 BLEND_SRC_ALPHA: 数字;
    只读 BLEND_SRC_RGB: 数字;
    只读 BLUE_BITS: 数字;
    只读 BOOL: 数字;
    只读 BOOL_VEC2: 数字;
    只读 BOOL_VEC3: 数字;
    只读 BOOL_VEC4: 数字;
    只读 BROWSER_DEFAULT_WEBGL: 数字;
    只读 BUFFER_SIZE: 数字;
    只读 BUFFER_USAGE: 数字;
    只读 BYTE: 数字;
    只读 CCW: 数字;
    只读 CLAMP_TO_EDGE: 数字;
    只读 COLOR_ATTACHMENT0: 数字;
    只读 COLOR_BUFFER_BIT: 数字;
    只读 COLOR_CLEAR_VALUE: 数字;
    只读 COLOR_WRITEMASK: 数字;
    只读 COMPILE_STATUS: 数字;
    只读 COMPRESSED_TEXTURE_FORMATS: 数字;
    只读 CONSTANT_ALPHA: 数字;
    只读 CONSTANT_COLOR: 数字;
    只读 CONTEXT_LOST_WEBGL: 数字;
    只读 CULL_FACE: 数字;
    只读 CULL_FACE_MODE: 数字;
    只读 CURRENT_PROGRAM: 数字;
    只读 CURRENT_VERTEX_ATTRIB: 数字;
    只读 CW: 数字;
    只读 DECR: 数字;
    只读 DECR_WRAP: 数字;
    只读 DELETE_STATUS: 数字;
    只读 DEPTH_ATTACHMENT: 数字;
    只读 DEPTH_BITS: 数字;
    只读 DEPTH_BUFFER_BIT: 数字;
    只读 DEPTH_CLEAR_VALUE: 数字;
    只读 DEPTH_COMPONENT: 数字;
    只读 DEPTH_COMPONENT16: 数字;
    只读 DEPTH_FUNC: 数字;
    只读 DEPTH_RANGE: 数字;
    只读 DEPTH_STENCIL: 数字;
    只读 DEPTH_STENCIL_ATTACHMENT: 数字;
    只读 DEPTH_TEST: 数字;
    只读 DEPTH_WRITEMASK: 数字;
    只读 DITHER: 数字;
    只读 DONT_CARE: 数字;
    只读 DST_ALPHA: 数字;
    只读 DST_COLOR: 数字;
    只读 DYNAMIC_DRAW: 数字;
    只读 ELEMENT_ARRAY_BUFFER: 数字;
    只读 ELEMENT_ARRAY_BUFFER_BINDING: 数字;
    只读 EQUAL: 数字;
    只读 FASTEST: 数字;
    只读 FLOAT: 数字;
    只读 FLOAT_MAT2: 数字;
    只读 FLOAT_MAT3: 数字;
    只读 FLOAT_MAT4: 数字;
    只读 FLOAT_VEC2: 数字;
    只读 FLOAT_VEC3: 数字;
    只读 FLOAT_VEC4: 数字;
    只读 FRAGMENT_SHADER: 数字;
    只读 FRAMEBUFFER: 数字;
    只读 FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 数字;
    只读 FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 数字;
    只读 FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 数字;
    只读 FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 数字;
    只读 FRAMEBUFFER_BINDING: 数字;
    只读 FRAMEBUFFER_COMPLETE: 数字;
    只读 FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 数字;
    只读 FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 数字;
    只读 FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 数字;
    只读 FRAMEBUFFER_UNSUPPORTED: 数字;
    只读 FRONT: 数字;
    只读 FRONT_AND_BACK: 数字;
    只读 FRONT_FACE: 数字;
    只读 FUNC_ADD: 数字;
    只读 FUNC_REVERSE_SUBTRACT: 数字;
    只读 FUNC_SUBTRACT: 数字;
    只读 GENERATE_MIPMAP_HINT: 数字;
    只读 GEQUAL: 数字;
    只读 GREATER: 数字;
    只读 GREEN_BITS: 数字;
    只读 HIGH_FLOAT: 数字;
    只读 HIGH_INT: 数字;
    只读 IMPLEMENTATION_COLOR_READ_FORMAT: 数字;
    只读 IMPLEMENTATION_COLOR_READ_TYPE: 数字;
    只读 INCR: 数字;
    只读 INCR_WRAP: 数字;
    只读 INT: 数字;
    只读 INT_VEC2: 数字;
    只读 INT_VEC3: 数字;
    只读 INT_VEC4: 数字;
    只读 INVALID_ENUM: 数字;
    只读 INVALID_FRAMEBUFFER_OPERATION: 数字;
    只读 INVALID_OPERATION: 数字;
    只读 INVALID_VALUE: 数字;
    只读 INVERT: 数字;
    只读 KEEP: 数字;
    只读 LEQUAL: 数字;
    只读 LESS: 数字;
    只读 LINEAR: 数字;
    只读 LINEAR_MIPMAP_LINEAR: 数字;
    只读 LINEAR_MIPMAP_NEAREST: 数字;
    只读 LINES: 数字;
    只读 LINE_LOOP: 数字;
    只读 LINE_STRIP: 数字;
    只读 LINE_WIDTH: 数字;
    只读 LINK_STATUS: 数字;
    只读 LOW_FLOAT: 数字;
    只读 LOW_INT: 数字;
    只读 LUMINANCE: 数字;
    只读 LUMINANCE_ALPHA: 数字;
    只读 MAX_COMBINED_TEXTURE_IMAGE_UNITS: 数字;
    只读 MAX_CUBE_MAP_TEXTURE_SIZE: 数字;
    只读 MAX_FRAGMENT_UNIFORM_VECTORS: 数字;
    只读 MAX_RENDERBUFFER_SIZE: 数字;
    只读 MAX_TEXTURE_IMAGE_UNITS: 数字;
    只读 MAX_TEXTURE_SIZE: 数字;
    只读 MAX_VARYING_VECTORS: 数字;
    只读 MAX_VERTEX_ATTRIBS: 数字;
    只读 MAX_VERTEX_TEXTURE_IMAGE_UNITS: 数字;
    只读 MAX_VERTEX_UNIFORM_VECTORS: 数字;
    只读 MAX_VIEWPORT_DIMS: 数字;
    只读 MEDIUM_FLOAT: 数字;
    只读 MEDIUM_INT: 数字;
    只读 MIRRORED_REPEAT: 数字;
    只读 NEAREST: 数字;
    只读 NEAREST_MIPMAP_LINEAR: 数字;
    只读 NEAREST_MIPMAP_NEAREST: 数字;
    只读 NEVER: 数字;
    只读 NICEST: 数字;
    只读 NONE: 数字;
    只读 NOTEQUAL: 数字;
    只读 NO_ERROR: 数字;
    只读 ONE: 数字;
    只读 ONE_MINUS_CONSTANT_ALPHA: 数字;
    只读 ONE_MINUS_CONSTANT_COLOR: 数字;
    只读 ONE_MINUS_DST_ALPHA: 数字;
    只读 ONE_MINUS_DST_COLOR: 数字;
    只读 ONE_MINUS_SRC_ALPHA: 数字;
    只读 ONE_MINUS_SRC_COLOR: 数字;
    只读 OUT_OF_MEMORY: 数字;
    只读 PACK_ALIGNMENT: 数字;
    只读 POINTS: 数字;
    只读 POLYGON_OFFSET_FACTOR: 数字;
    只读 POLYGON_OFFSET_FILL: 数字;
    只读 POLYGON_OFFSET_UNITS: 数字;
    只读 RED_BITS: 数字;
    只读 RENDERBUFFER: 数字;
    只读 RENDERBUFFER_ALPHA_SIZE: 数字;
    只读 RENDERBUFFER_BINDING: 数字;
    只读 RENDERBUFFER_BLUE_SIZE: 数字;
    只读 RENDERBUFFER_DEPTH_SIZE: 数字;
    只读 RENDERBUFFER_GREEN_SIZE: 数字;
    只读 RENDERBUFFER_HEIGHT: 数字;
    只读 RENDERBUFFER_INTERNAL_FORMAT: 数字;
    只读 RENDERBUFFER_RED_SIZE: 数字;
    只读 RENDERBUFFER_STENCIL_SIZE: 数字;
    只读 RENDERBUFFER_WIDTH: 数字;
    只读 RENDERER: 数字;
    只读 REPEAT: 数字;
    只读 REPLACE: 数字;
    只读 RGB: 数字;
    只读 RGB565: 数字;
    只读 RGB5_A1: 数字;
    只读 RGBA: 数字;
    只读 RGBA4: 数字;
    只读 SAMPLER_2D: 数字;
    只读 SAMPLER_CUBE: 数字;
    只读 SAMPLES: 数字;
    只读 SAMPLE_ALPHA_TO_COVERAGE: 数字;
    只读 SAMPLE_BUFFERS: 数字;
    只读 SAMPLE_COVERAGE: 数字;
    只读 SAMPLE_COVERAGE_INVERT: 数字;
    只读 SAMPLE_COVERAGE_VALUE: 数字;
    只读 SCISSOR_BOX: 数字;
    只读 SCISSOR_TEST: 数字;
    只读 SHADER_TYPE: 数字;
    只读 SHADING_LANGUAGE_VERSION: 数字;
    只读 SHORT: 数字;
    只读 SRC_ALPHA: 数字;
    只读 SRC_ALPHA_SATURATE: 数字;
    只读 SRC_COLOR: 数字;
    只读 STATIC_DRAW: 数字;
    只读 STENCIL_ATTACHMENT: 数字;
    只读 STENCIL_BACK_FAIL: 数字;
    只读 STENCIL_BACK_FUNC: 数字;
    只读 STENCIL_BACK_PASS_DEPTH_FAIL: 数字;
    只读 STENCIL_BACK_PASS_DEPTH_PASS: 数字;
    只读 STENCIL_BACK_REF: 数字;
    只读 STENCIL_BACK_VALUE_MASK: 数字;
    只读 STENCIL_BACK_WRITEMASK: 数字;
    只读 STENCIL_BITS: 数字;
    只读 STENCIL_BUFFER_BIT: 数字;
    只读 STENCIL_CLEAR_VALUE: 数字;
    只读 STENCIL_FAIL: 数字;
    只读 STENCIL_FUNC: 数字;
    只读 STENCIL_INDEX: 数字;
    只读 STENCIL_INDEX8: 数字;
    只读 STENCIL_PASS_DEPTH_FAIL: 数字;
    只读 STENCIL_PASS_DEPTH_PASS: 数字;
    只读 STENCIL_REF: 数字;
    只读 STENCIL_TEST: 数字;
    只读 STENCIL_VALUE_MASK: 数字;
    只读 STENCIL_WRITEMASK: 数字;
    只读 STREAM_DRAW: 数字;
    只读 SUBPIXEL_BITS: 数字;
    只读 TEXTURE: 数字;
    只读 TEXTURE0: 数字;
    只读 TEXTURE1: 数字;
    只读 TEXTURE10: 数字;
    只读 TEXTURE11: 数字;
    只读 TEXTURE12: 数字;
    只读 TEXTURE13: 数字;
    只读 TEXTURE14: 数字;
    只读 TEXTURE15: 数字;
    只读 TEXTURE16: 数字;
    只读 TEXTURE17: 数字;
    只读 TEXTURE18: 数字;
    只读 TEXTURE19: 数字;
    只读 TEXTURE2: 数字;
    只读 TEXTURE20: 数字;
    只读 TEXTURE21: 数字;
    只读 TEXTURE22: 数字;
    只读 TEXTURE23: 数字;
    只读 TEXTURE24: 数字;
    只读 TEXTURE25: 数字;
    只读 TEXTURE26: 数字;
    只读 TEXTURE27: 数字;
    只读 TEXTURE28: 数字;
    只读 TEXTURE29: 数字;
    只读 TEXTURE3: 数字;
    只读 TEXTURE30: 数字;
    只读 TEXTURE31: 数字;
    只读 TEXTURE4: 数字;
    只读 TEXTURE5: 数字;
    只读 TEXTURE6: 数字;
    只读 TEXTURE7: 数字;
    只读 TEXTURE8: 数字;
    只读 TEXTURE9: 数字;
    只读 TEXTURE_2D: 数字;
    只读 TEXTURE_BINDING_2D: 数字;
    只读 TEXTURE_BINDING_CUBE_MAP: 数字;
    只读 TEXTURE_CUBE_MAP: 数字;
    只读 TEXTURE_CUBE_MAP_NEGATIVE_X: 数字;
    只读 TEXTURE_CUBE_MAP_NEGATIVE_Y: 数字;
    只读 TEXTURE_CUBE_MAP_NEGATIVE_Z: 数字;
    只读 TEXTURE_CUBE_MAP_POSITIVE_X: 数字;
    只读 TEXTURE_CUBE_MAP_POSITIVE_Y: 数字;
    只读 TEXTURE_CUBE_MAP_POSITIVE_Z: 数字;
    只读 TEXTURE_MAG_FILTER: 数字;
    只读 TEXTURE_MIN_FILTER: 数字;
    只读 TEXTURE_WRAP_S: 数字;
    只读 TEXTURE_WRAP_T: 数字;
    只读 TRIANGLES: 数字;
    只读 TRIANGLE_FAN: 数字;
    只读 TRIANGLE_STRIP: 数字;
    只读 UNPACK_ALIGNMENT: 数字;
    只读 UNPACK_COLORSPACE_CONVERSION_WEBGL: 数字;
    只读 UNPACK_FLIP_Y_WEBGL: 数字;
    只读 UNPACK_PREMULTIPLY_ALPHA_WEBGL: 数字;
    只读 UNSIGNED_BYTE: 数字;
    只读 UNSIGNED_INT: 数字;
    只读 UNSIGNED_SHORT: 数字;
    只读 UNSIGNED_SHORT_4_4_4_4: 数字;
    只读 UNSIGNED_SHORT_5_5_5_1: 数字;
    只读 UNSIGNED_SHORT_5_6_5: 数字;
    只读 VALIDATE_STATUS: 数字;
    只读 VENDOR: 数字;
    只读 VERSION: 数字;
    只读 VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 数字;
    只读 VERTEX_ATTRIB_ARRAY_ENABLED: 数字;
    只读 VERTEX_ATTRIB_ARRAY_NORMALIZED: 数字;
    只读 VERTEX_ATTRIB_ARRAY_POINTER: 数字;
    只读 VERTEX_ATTRIB_ARRAY_SIZE: 数字;
    只读 VERTEX_ATTRIB_ARRAY_STRIDE: 数字;
    只读 VERTEX_ATTRIB_ARRAY_TYPE: 数字;
    只读 VERTEX_SHADER: 数字;
    只读 VIEWPORT: 数字;
    只读 ZERO: 数字;

};
接口 WebGLShader 扩展 WebGLObject {

}
声明 值量 WebGLShader: {
    prototype: WebGLShader;
    新建(): WebGLShader;

};
接口 WebGLShaderPrecisionFormat {
    只读 precision: 数字;
    只读 rangeMax: 数字;
    只读 rangeMin: 数字;

}
声明 值量 WebGLShaderPrecisionFormat: {
    prototype: WebGLShaderPrecisionFormat;
    新建(): WebGLShaderPrecisionFormat;

};
接口 WebGLTexture 扩展 WebGLObject {

}
声明 值量 WebGLTexture: {
    prototype: WebGLTexture;
    新建(): WebGLTexture;

};
接口 WebGLUniformLocation {

}
声明 值量 WebGLUniformLocation: {
    prototype: WebGLUniformLocation;
    新建(): WebGLUniformLocation;

};
接口 WebGLVertexArrayObjectOES {

}
接口 WebKitCSSMatrix {
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
    inverse(): WebKitCSSMatrix;
    multiply(secondMatrix: WebKitCSSMatrix): WebKitCSSMatrix;
    rotate(angleX: 数字, angleY?: 数字, angleZ?: 数字): WebKitCSSMatrix;
    rotateAxisAngle(x: 数字, y: 数字, z: 数字, angle: 数字): WebKitCSSMatrix;
    scale(scaleX: 数字, scaleY?: 数字, scaleZ?: 数字): WebKitCSSMatrix;
    setMatrixValue(value: 文字): 无值;
    skewX(angle: 数字): WebKitCSSMatrix;
    skewY(angle: 数字): WebKitCSSMatrix;
    toString(): 文字;
    translate(x: 数字, y: 数字, z?: 数字): WebKitCSSMatrix;

}
声明 值量 WebKitCSSMatrix: {
    prototype: WebKitCSSMatrix;
    新建(text?: 文字): WebKitCSSMatrix;

};
接口 WebKitDirectoryEntry 扩展 WebKitEntry {
    createReader(): WebKitDirectoryReader;

}
声明 值量 WebKitDirectoryEntry: {
    prototype: WebKitDirectoryEntry;
    新建(): WebKitDirectoryEntry;

};
接口 WebKitDirectoryReader {
    readEntries(successCallback: WebKitEntriesCallback, errorCallback?: WebKitErrorCallback): 无值;

}
声明 值量 WebKitDirectoryReader: {
    prototype: WebKitDirectoryReader;
    新建(): WebKitDirectoryReader;

};
接口 WebKitEntry {
    只读 filesystem: WebKitFileSystem;
    只读 fullPath: 文字;
    只读 isDirectory: 真假;
    只读 isFile: 真假;
    只读 name: 文字;

}
声明 值量 WebKitEntry: {
    prototype: WebKitEntry;
    新建(): WebKitEntry;

};
接口 WebKitFileEntry 扩展 WebKitEntry {
    file(successCallback: WebKitFileCallback, errorCallback?: WebKitErrorCallback): 无值;

}
声明 值量 WebKitFileEntry: {
    prototype: WebKitFileEntry;
    新建(): WebKitFileEntry;

};
接口 WebKitFileSystem {
    只读 name: 文字;
    只读 root: WebKitDirectoryEntry;

}
声明 值量 WebKitFileSystem: {
    prototype: WebKitFileSystem;
    新建(): WebKitFileSystem;

};
接口 WebKitPoint {
    x: 数字;
    y: 数字;

}
声明 值量 WebKitPoint: {
    prototype: WebKitPoint;
    新建(x?: 数字, y?: 数字): WebKitPoint;

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
接口 WheelEvent 扩展 MouseEvent {
    只读 deltaMode: 数字;
    只读 deltaX: 数字;
    只读 deltaY: 数字;
    只读 deltaZ: 数字;
    只读 wheelDelta: 数字;
    只读 wheelDeltaX: 数字;
    只读 wheelDeltaY: 数字;
    getCurrentPoint(element: Element): 无值;
    initWheelEvent(typeArg: 文字, canBubbleArg: 真假, cancelableArg: 真假, viewArg: Window, detailArg: 数字, screenXArg: 数字, screenYArg: 数字, clientXArg: 数字, clientYArg: 数字, buttonArg: 数字, relatedTargetArg: EventTarget, modifiersListArg: 文字, deltaXArg: 数字, deltaYArg: 数字, deltaZArg: 数字, deltaMode: 数字): 无值;
    只读 DOM_DELTA_LINE: 数字;
    只读 DOM_DELTA_PAGE: 数字;
    只读 DOM_DELTA_PIXEL: 数字;

}
声明 值量 WheelEvent: {
    prototype: WheelEvent;
    新建(typeArg: 文字, eventInitDict?: WheelEventInit): WheelEvent;
    只读 DOM_DELTA_LINE: 数字;
    只读 DOM_DELTA_PAGE: 数字;
    只读 DOM_DELTA_PIXEL: 数字;

};
接口 WindowEventMap 扩展 GlobalEventHandlersEventMap {
    "abort": UIEvent;
    "afterprint": Event;
    "beforeprint": Event;
    "beforeunload": BeforeUnloadEvent;
    "blur": FocusEvent;
    "canplay": Event;
    "canplaythrough": Event;
    "change": Event;
    "click": MouseEvent;
    "compassneedscalibration": Event;
    "contextmenu": PointerEvent;
    "dblclick": MouseEvent;
    "devicelight": DeviceLightEvent;
    "devicemotion": DeviceMotionEvent;
    "deviceorientation": DeviceOrientationEvent;
    "drag": DragEvent;
    "dragend": DragEvent;
    "dragenter": DragEvent;
    "dragleave": DragEvent;
    "dragover": DragEvent;
    "dragstart": DragEvent;
    "drop": DragEvent;
    "durationchange": Event;
    "emptied": Event;
    "ended": Event;
    "error": ErrorEvent;
    "focus": FocusEvent;
    "hashchange": HashChangeEvent;
    "input": Event;
    "invalid": Event;
    "keydown": KeyboardEvent;
    "keypress": KeyboardEvent;
    "keyup": KeyboardEvent;
    "load": Event;
    "loadeddata": Event;
    "loadedmetadata": Event;
    "loadstart": Event;
    "message": MessageEvent;
    "mousedown": MouseEvent;
    "mouseenter": MouseEvent;
    "mouseleave": MouseEvent;
    "mousemove": MouseEvent;
    "mouseout": MouseEvent;
    "mouseover": MouseEvent;
    "mouseup": MouseEvent;
    "mousewheel": WheelEvent;
    "MSGestureChange": Event;
    "MSGestureDoubleTap": Event;
    "MSGestureEnd": Event;
    "MSGestureHold": Event;
    "MSGestureStart": Event;
    "MSGestureTap": Event;
    "MSInertiaStart": Event;
    "MSPointerCancel": Event;
    "MSPointerDown": Event;
    "MSPointerEnter": Event;
    "MSPointerLeave": Event;
    "MSPointerMove": Event;
    "MSPointerOut": Event;
    "MSPointerOver": Event;
    "MSPointerUp": Event;
    "offline": Event;
    "online": Event;
    "orientationchange": Event;
    "pagehide": PageTransitionEvent;
    "pageshow": PageTransitionEvent;
    "pause": Event;
    "play": Event;
    "playing": Event;
    "popstate": PopStateEvent;
    "progress": ProgressEvent;
    "ratechange": Event;
    "readystatechange": ProgressEvent;
    "reset": Event;
    "resize": UIEvent;
    "scroll": UIEvent;
    "seeked": Event;
    "seeking": Event;
    "select": UIEvent;
    "stalled": Event;
    "storage": StorageEvent;
    "submit": Event;
    "suspend": Event;
    "timeupdate": Event;
    "touchcancel": TouchEvent;
    "touchend": TouchEvent;
    "touchmove": TouchEvent;
    "touchstart": TouchEvent;
    "unload": Event;
    "volumechange": Event;
    "vrdisplayactivate": Event;
    "vrdisplayblur": Event;
    "vrdisplayconnect": Event;
    "vrdisplaydeactivate": Event;
    "vrdisplaydisconnect": Event;
    "vrdisplayfocus": Event;
    "vrdisplaypointerrestricted": Event;
    "vrdisplaypointerunrestricted": Event;
    "vrdisplaypresentchange": Event;
    "waiting": Event;

}
接口 Window 扩展 EventTarget, WindowTimers, WindowSessionStorage, WindowLocalStorage, WindowConsole, GlobalEventHandlers, IDBEnvironment, WindowBase64, GlobalFetch {
    Blob: 类为 Blob;
    URL: 类为 URL;
    URLSearchParams: 类为 URLSearchParams;
    只读 applicationCache: ApplicationCache;
    只读 caches: CacheStorage;
    只读 clientInformation: Navigator;
    只读 closed: 真假;
    只读 crypto: Crypto;
    customElements: CustomElementRegistry;
    defaultStatus: 文字;
    只读 devicePixelRatio: 数字;
    只读 doNotTrack: 文字;
    只读 document: Document;
    event: Event | 未定;
    只读 external: External;
    只读 frameElement: Element;
    只读 frames: Window;
    只读 history: History;
    只读 innerHeight: 数字;
    只读 innerWidth: 数字;
    只读 isSecureContext: 真假;
    只读 length: 数字;
    location: Location;
    只读 locationbar: BarProp;
    只读 menubar: BarProp;
    只读 msContentScript: ExtensionScriptApis;
    只读 msCredentials: MSCredentials;
    name: 文字;
    只读 navigator: Navigator;
    offscreenBuffering: 文字 | 真假;
    onabort: ((this: Window, ev: UIEvent) => 任意) | 空值;
    onafterprint: ((this: Window, ev: Event) => 任意) | 空值;
    onbeforeprint: ((this: Window, ev: Event) => 任意) | 空值;
    onbeforeunload: ((this: Window, ev: BeforeUnloadEvent) => 任意) | 空值;
    onblur: ((this: Window, ev: FocusEvent) => 任意) | 空值;
    oncanplay: ((this: Window, ev: Event) => 任意) | 空值;
    oncanplaythrough: ((this: Window, ev: Event) => 任意) | 空值;
    onchange: ((this: Window, ev: Event) => 任意) | 空值;
    onclick: ((this: Window, ev: MouseEvent) => 任意) | 空值;
    oncompassneedscalibration: ((this: Window, ev: Event) => 任意) | 空值;
    oncontextmenu: ((this: Window, ev: PointerEvent) => 任意) | 空值;
    ondblclick: ((this: Window, ev: MouseEvent) => 任意) | 空值;
    ondevicelight: ((this: Window, ev: DeviceLightEvent) => 任意) | 空值;
    ondevicemotion: ((this: Window, ev: DeviceMotionEvent) => 任意) | 空值;
    ondeviceorientation: ((this: Window, ev: DeviceOrientationEvent) => 任意) | 空值;
    ondrag: ((this: Window, ev: DragEvent) => 任意) | 空值;
    ondragend: ((this: Window, ev: DragEvent) => 任意) | 空值;
    ondragenter: ((this: Window, ev: DragEvent) => 任意) | 空值;
    ondragleave: ((this: Window, ev: DragEvent) => 任意) | 空值;
    ondragover: ((this: Window, ev: DragEvent) => 任意) | 空值;
    ondragstart: ((this: Window, ev: DragEvent) => 任意) | 空值;
    ondrop: ((this: Window, ev: DragEvent) => 任意) | 空值;
    ondurationchange: ((this: Window, ev: Event) => 任意) | 空值;
    onemptied: ((this: Window, ev: Event) => 任意) | 空值;
    onended: ((this: Window, ev: Event) => 任意) | 空值;
    onerror: ErrorEventHandler;
    onfocus: ((this: Window, ev: FocusEvent) => 任意) | 空值;
    onhashchange: ((this: Window, ev: HashChangeEvent) => 任意) | 空值;
    oninput: ((this: Window, ev: Event) => 任意) | 空值;
    oninvalid: ((this: Window, ev: Event) => 任意) | 空值;
    onkeydown: ((this: Window, ev: KeyboardEvent) => 任意) | 空值;
    onkeypress: ((this: Window, ev: KeyboardEvent) => 任意) | 空值;
    onkeyup: ((this: Window, ev: KeyboardEvent) => 任意) | 空值;
    onload: ((this: Window, ev: Event) => 任意) | 空值;
    onloadeddata: ((this: Window, ev: Event) => 任意) | 空值;
    onloadedmetadata: ((this: Window, ev: Event) => 任意) | 空值;
    onloadstart: ((this: Window, ev: Event) => 任意) | 空值;
    onmessage: ((this: Window, ev: MessageEvent) => 任意) | 空值;
    onmousedown: ((this: Window, ev: MouseEvent) => 任意) | 空值;
    onmouseenter: ((this: Window, ev: MouseEvent) => 任意) | 空值;
    onmouseleave: ((this: Window, ev: MouseEvent) => 任意) | 空值;
    onmousemove: ((this: Window, ev: MouseEvent) => 任意) | 空值;
    onmouseout: ((this: Window, ev: MouseEvent) => 任意) | 空值;
    onmouseover: ((this: Window, ev: MouseEvent) => 任意) | 空值;
    onmouseup: ((this: Window, ev: MouseEvent) => 任意) | 空值;
    onmousewheel: ((this: Window, ev: WheelEvent) => 任意) | 空值;
    onmsgesturechange: ((this: Window, ev: Event) => 任意) | 空值;
    onmsgesturedoubletap: ((this: Window, ev: Event) => 任意) | 空值;
    onmsgestureend: ((this: Window, ev: Event) => 任意) | 空值;
    onmsgesturehold: ((this: Window, ev: Event) => 任意) | 空值;
    onmsgesturestart: ((this: Window, ev: Event) => 任意) | 空值;
    onmsgesturetap: ((this: Window, ev: Event) => 任意) | 空值;
    onmsinertiastart: ((this: Window, ev: Event) => 任意) | 空值;
    onmspointercancel: ((this: Window, ev: Event) => 任意) | 空值;
    onmspointerdown: ((this: Window, ev: Event) => 任意) | 空值;
    onmspointerenter: ((this: Window, ev: Event) => 任意) | 空值;
    onmspointerleave: ((this: Window, ev: Event) => 任意) | 空值;
    onmspointermove: ((this: Window, ev: Event) => 任意) | 空值;
    onmspointerout: ((this: Window, ev: Event) => 任意) | 空值;
    onmspointerover: ((this: Window, ev: Event) => 任意) | 空值;
    onmspointerup: ((this: Window, ev: Event) => 任意) | 空值;
    onoffline: ((this: Window, ev: Event) => 任意) | 空值;
    ononline: ((this: Window, ev: Event) => 任意) | 空值;
    onorientationchange: ((this: Window, ev: Event) => 任意) | 空值;
    onpagehide: ((this: Window, ev: PageTransitionEvent) => 任意) | 空值;
    onpageshow: ((this: Window, ev: PageTransitionEvent) => 任意) | 空值;
    onpause: ((this: Window, ev: Event) => 任意) | 空值;
    onplay: ((this: Window, ev: Event) => 任意) | 空值;
    onplaying: ((this: Window, ev: Event) => 任意) | 空值;
    onpopstate: ((this: Window, ev: PopStateEvent) => 任意) | 空值;
    onprogress: ((this: Window, ev: ProgressEvent) => 任意) | 空值;
    onratechange: ((this: Window, ev: Event) => 任意) | 空值;
    onreadystatechange: ((this: Window, ev: ProgressEvent) => 任意) | 空值;
    onreset: ((this: Window, ev: Event) => 任意) | 空值;
    onresize: ((this: Window, ev: UIEvent) => 任意) | 空值;
    onscroll: ((this: Window, ev: UIEvent) => 任意) | 空值;
    onseeked: ((this: Window, ev: Event) => 任意) | 空值;
    onseeking: ((this: Window, ev: Event) => 任意) | 空值;
    onselect: ((this: Window, ev: UIEvent) => 任意) | 空值;
    onstalled: ((this: Window, ev: Event) => 任意) | 空值;
    onstorage: ((this: Window, ev: StorageEvent) => 任意) | 空值;
    onsubmit: ((this: Window, ev: Event) => 任意) | 空值;
    onsuspend: ((this: Window, ev: Event) => 任意) | 空值;
    ontimeupdate: ((this: Window, ev: Event) => 任意) | 空值;
    ontouchcancel: (ev: TouchEvent) => 任意;
    ontouchend: (ev: TouchEvent) => 任意;
    ontouchmove: (ev: TouchEvent) => 任意;
    ontouchstart: (ev: TouchEvent) => 任意;
    onunload: ((this: Window, ev: Event) => 任意) | 空值;
    onvolumechange: ((this: Window, ev: Event) => 任意) | 空值;
    onvrdisplayactivate: ((this: Window, ev: Event) => 任意) | 空值;
    onvrdisplayblur: ((this: Window, ev: Event) => 任意) | 空值;
    onvrdisplayconnect: ((this: Window, ev: Event) => 任意) | 空值;
    onvrdisplaydeactivate: ((this: Window, ev: Event) => 任意) | 空值;
    onvrdisplaydisconnect: ((this: Window, ev: Event) => 任意) | 空值;
    onvrdisplayfocus: ((this: Window, ev: Event) => 任意) | 空值;
    onvrdisplaypointerrestricted: ((this: Window, ev: Event) => 任意) | 空值;
    onvrdisplaypointerunrestricted: ((this: Window, ev: Event) => 任意) | 空值;
    onvrdisplaypresentchange: ((this: Window, ev: Event) => 任意) | 空值;
    onwaiting: ((this: Window, ev: Event) => 任意) | 空值;
    opener: 任意;
    只读 orientation: 文字 | 数字;
    只读 outerHeight: 数字;
    只读 outerWidth: 数字;
    只读 pageXOffset: 数字;
    只读 pageYOffset: 数字;
    只读 parent: Window;
    只读 performance: Performance;
    只读 personalbar: BarProp;
    只读 screen: Screen;
    只读 screenLeft: 数字;
    只读 screenTop: 数字;
    只读 screenX: 数字;
    只读 screenY: 数字;
    只读 scrollX: 数字;
    只读 scrollY: 数字;
    只读 scrollbars: BarProp;
    只读 self: Window;
    只读 speechSynthesis: SpeechSynthesis;
    status: 文字;
    只读 statusbar: BarProp;
    只读 styleMedia: StyleMedia;
    只读 toolbar: BarProp;
    只读 top: Window;
    只读 window: Window;
    alert(message?: 任意): 无值;
    blur(): 无值;
    cancelAnimationFrame(handle: 数字): 无值;
    captureEvents(): 无值;
    close(): 无值;
    confirm(message?: 文字): 真假;
    //@@{ 预设_:Promise }
    createImageBitmap(image: HTMLImageElement | SVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | ImageData | Blob, options?: ImageBitmapOptions): 预设_<ImageBitmap>;
    //@@{ 预设_:Promise }
    createImageBitmap(image: HTMLImageElement | SVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | ImageData | Blob, sx: 数字, sy: 数字, sw: 数字, sh: 数字, options?: ImageBitmapOptions): 预设_<ImageBitmap>;
    departFocus(navigationReason: NavigationReason, origin: FocusNavigationOrigin): 无值;
    focus(): 无值;
    getComputedStyle(elt: Element, pseudoElt?: 文字 | 空值): CSSStyleDeclaration;
    getMatchedCSSRules(elt: Element, pseudoElt?: 文字 | 空值): CSSRuleList;
    getSelection(): Selection;
    matchMedia(mediaQuery: 文字): MediaQueryList;
    moveBy(x?: 数字, y?: 数字): 无值;
    moveTo(x?: 数字, y?: 数字): 无值;
    msWriteProfilerMark(profilerMarkName: 文字): 无值;
    open(url?: 文字, target?: 文字, features?: 文字, replace?: 真假): Window | 空值;
    postMessage(message: 任意, targetOrigin: 文字, transfer?: 任意[]): 无值;
    print(): 无值;
    prompt(message?: 文字, _default?: 文字): 文字 | 空值;
    releaseEvents(): 无值;
    requestAnimationFrame(callback: FrameRequestCallback): 数字;
    resizeBy(x?: 数字, y?: 数字): 无值;
    resizeTo(x?: 数字, y?: 数字): 无值;
    scroll(options?: ScrollToOptions): 无值;
    scroll(x?: 数字, y?: 数字): 无值;
    scrollBy(options?: ScrollToOptions): 无值;
    scrollBy(x?: 数字, y?: 数字): 无值;
    scrollTo(options?: ScrollToOptions): 无值;
    scrollTo(x?: 数字, y?: 数字): 无值;
    stop(): 无值;
    webkitCancelAnimationFrame(handle: 数字): 无值;
    webkitConvertPointFromNodeToPage(node: Node, pt: WebKitPoint): WebKitPoint;
    webkitConvertPointFromPageToNode(node: Node, pt: WebKitPoint): WebKitPoint;
    webkitRequestAnimationFrame(callback: FrameRequestCallback): 数字;
    addEventListener<K 扩展 键为 WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 Window: {
    prototype: Window;
    新建(): Window;

};
接口 WindowBase64 {
    atob(encodedString: 文字): 文字;
    btoa(rawString: 文字): 文字;

}
接口 WindowConsole {
    只读 console: Console;

}
接口 WindowEventHandlersEventMap {
    "afterprint": Event;
    "beforeprint": Event;
    "beforeunload": BeforeUnloadEvent;
    "hashchange": HashChangeEvent;
    "message": MessageEvent;
    "offline": Event;
    "online": Event;
    "pagehide": PageTransitionEvent;
    "pageshow": PageTransitionEvent;
    "popstate": PopStateEvent;
    "storage": StorageEvent;
    "unload": Event;

}
接口 WindowEventHandlers {
    onafterprint: ((this: WindowEventHandlers, ev: Event) => 任意) | 空值;
    onbeforeprint: ((this: WindowEventHandlers, ev: Event) => 任意) | 空值;
    onbeforeunload: ((this: WindowEventHandlers, ev: BeforeUnloadEvent) => 任意) | 空值;
    onhashchange: ((this: WindowEventHandlers, ev: HashChangeEvent) => 任意) | 空值;
    onmessage: ((this: WindowEventHandlers, ev: MessageEvent) => 任意) | 空值;
    onoffline: ((this: WindowEventHandlers, ev: Event) => 任意) | 空值;
    ononline: ((this: WindowEventHandlers, ev: Event) => 任意) | 空值;
    onpagehide: ((this: WindowEventHandlers, ev: PageTransitionEvent) => 任意) | 空值;
    onpageshow: ((this: WindowEventHandlers, ev: PageTransitionEvent) => 任意) | 空值;
    onpopstate: ((this: WindowEventHandlers, ev: PopStateEvent) => 任意) | 空值;
    onstorage: ((this: WindowEventHandlers, ev: StorageEvent) => 任意) | 空值;
    onunload: ((this: WindowEventHandlers, ev: Event) => 任意) | 空值;
    addEventListener<K 扩展 键为 WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
接口 WindowLocalStorage {
    只读 localStorage: Storage;

}
接口 WindowSessionStorage {
    只读 sessionStorage: Storage;

}
接口 WindowTimers 扩展 WindowTimersExtension {
    clearInterval(handle?: 数字): 无值;
    clearTimeout(handle?: 数字): 无值;
    setInterval(handler: (...args: 任意[]) => 无值, timeout: 数字): 数字;
    setInterval(handler: 任意, timeout?: 任意, ...args: 任意[]): 数字;
    setTimeout(handler: (...args: 任意[]) => 无值, timeout: 数字): 数字;
    setTimeout(handler: 任意, timeout?: 任意, ...args: 任意[]): 数字;

}
接口 WindowTimersExtension {
    clearImmediate(handle: 数字): 无值;
    setImmediate(handler: (...args: 任意[]) => 无值): 数字;
    setImmediate(handler: 任意, ...args: 任意[]): 数字;

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
接口 WritableStream {
    只读 locked: 真假;
    //@@{ 预设_:Promise }
    abort(reason?: 任意): 预设_<无值>;
    getWriter(): WritableStreamDefaultWriter;

}
声明 值量 WritableStream: {
    prototype: WritableStream;
    新建(underlyingSink?: UnderlyingSink, strategy?: QueuingStrategy): WritableStream;

};
接口 WritableStreamDefaultController {
    error(error?: 任意): 无值;

}
声明 值量 WritableStreamDefaultController: {
    prototype: WritableStreamDefaultController;
    新建(): WritableStreamDefaultController;

};
接口 WritableStreamDefaultWriter {
    //@@{ 预设_:Promise }
    只读 closed: 预设_<无值>;
    只读 desiredSize: 数字;
    //@@{ 预设_:Promise }
    只读 ready: 预设_<无值>;
    //@@{ 预设_:Promise }
    abort(reason?: 任意): 预设_<无值>;
    //@@{ 预设_:Promise }
    close(): 预设_<无值>;
    releaseLock(): 无值;
    //@@{ 预设_:Promise }
    write(chunk?: 任意): 预设_<任意>;

}
声明 值量 WritableStreamDefaultWriter: {
    prototype: WritableStreamDefaultWriter;
    新建(): WritableStreamDefaultWriter;

};
接口 XMLDocument 扩展 Document {
    addEventListener<K 扩展 键为 DocumentEventMap>(type: K, listener: (this: XMLDocument, ev: DocumentEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 DocumentEventMap>(type: K, listener: (this: XMLDocument, ev: DocumentEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 XMLDocument: {
    prototype: XMLDocument;
    新建(): XMLDocument;

};
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
    只读 responseXML: Document | 空值;
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
接口 XMLSerializer {
    serializeToString(target: Node): 文字;

}
声明 值量 XMLSerializer: {
    prototype: XMLSerializer;
    新建(): XMLSerializer;

};
接口 XPathEvaluator {
    createExpression(expression: 文字, resolver: XPathNSResolver): XPathExpression;
    createNSResolver(nodeResolver?: Node): XPathNSResolver;
    evaluate(expression: 文字, contextNode: Node, resolver: XPathNSResolver | 空值, type: 数字, result: XPathResult | 空值): XPathResult;

}
声明 值量 XPathEvaluator: {
    prototype: XPathEvaluator;
    新建(): XPathEvaluator;

};
接口 XPathExpression {
    evaluate(contextNode: Node, type: 数字, result: XPathResult | 空值): XPathResult;

}
声明 值量 XPathExpression: {
    prototype: XPathExpression;
    新建(): XPathExpression;

};
接口 XPathNSResolver {
    lookupNamespaceURI(prefix: 文字): 文字;

}
声明 值量 XPathNSResolver: {
    prototype: XPathNSResolver;
    新建(): XPathNSResolver;

};
接口 XPathResult {
    只读 booleanValue: 真假;
    只读 invalidIteratorState: 真假;
    只读 numberValue: 数字;
    只读 resultType: 数字;
    只读 singleNodeValue: Node;
    只读 snapshotLength: 数字;
    只读 stringValue: 文字;
    iterateNext(): Node;
    snapshotItem(index: 数字): Node;
    只读 ANY_TYPE: 数字;
    只读 ANY_UNORDERED_NODE_TYPE: 数字;
    只读 BOOLEAN_TYPE: 数字;
    只读 FIRST_ORDERED_NODE_TYPE: 数字;
    只读 NUMBER_TYPE: 数字;
    只读 ORDERED_NODE_ITERATOR_TYPE: 数字;
    只读 ORDERED_NODE_SNAPSHOT_TYPE: 数字;
    只读 STRING_TYPE: 数字;
    只读 UNORDERED_NODE_ITERATOR_TYPE: 数字;
    只读 UNORDERED_NODE_SNAPSHOT_TYPE: 数字;

}
声明 值量 XPathResult: {
    prototype: XPathResult;
    新建(): XPathResult;
    只读 ANY_TYPE: 数字;
    只读 ANY_UNORDERED_NODE_TYPE: 数字;
    只读 BOOLEAN_TYPE: 数字;
    只读 FIRST_ORDERED_NODE_TYPE: 数字;
    只读 NUMBER_TYPE: 数字;
    只读 ORDERED_NODE_ITERATOR_TYPE: 数字;
    只读 ORDERED_NODE_SNAPSHOT_TYPE: 数字;
    只读 STRING_TYPE: 数字;
    只读 UNORDERED_NODE_ITERATOR_TYPE: 数字;
    只读 UNORDERED_NODE_SNAPSHOT_TYPE: 数字;

};
接口 XSLTProcessor {
    clearParameters(): 无值;
    getParameter(namespaceURI: 文字, localName: 文字): 任意;
    importStylesheet(style: Node): 无值;
    removeParameter(namespaceURI: 文字, localName: 文字): 无值;
    reset(): 无值;
    setParameter(namespaceURI: 文字, localName: 文字, value: 任意): 无值;
    transformToDocument(source: Node): Document;
    transformToFragment(source: Node, document: Document): DocumentFragment;

}
声明 值量 XSLTProcessor: {
    prototype: XSLTProcessor;
    新建(): XSLTProcessor;

};
接口 webkitRTCPeerConnection 扩展 RTCPeerConnection {
    addEventListener<K 扩展 键为 RTCPeerConnectionEventMap>(type: K, listener: (this: webkitRTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
    addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
    removeEventListener<K 扩展 键为 RTCPeerConnectionEventMap>(type: K, listener: (this: webkitRTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
    removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;

}
声明 值量 webkitRTCPeerConnection: {
    prototype: webkitRTCPeerConnection;
    新建(configuration: RTCConfiguration): webkitRTCPeerConnection;

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
接口 EventHandlerNonNull {
    (event: Event): 任意;

}
接口 ForEachCallback {
    //@@{ 整数数组8_:Int8Array, 整数数组16_:Int16Array, 整数数组32_:Int32Array, 正整数数组8_:Uint8Array, 正整数数组16_:Uint16Array, 正整数数组32_:Uint32Array, 正整数固定数组8_:Uint8ClampedArray, 浮点数组32_:Float32Array, 浮点数组64_:Float64Array, 数据视图_:DataView, 数组缓冲区_:ArrayBuffer }
    (keyId: 整数数组8_ | 整数数组16_ | 整数数组32_ | 正整数数组8_ | 正整数数组16_ | 正整数数组32_ | 正整数固定数组8_ | 浮点数组32_ | 浮点数组64_ | 数据视图_ | 数组缓冲区_ | 空值, status: MediaKeyStatus): 无值;

}
接口 FrameRequestCallback {
    (time: 数字): 无值;

}
接口 FunctionStringCallback {
    (data: 文字): 无值;

}
接口 IntersectionObserverCallback {
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver): 无值;

}
接口 MSLaunchUriCallback {
    (): 无值;

}
接口 MediaQueryListListener {
    (mql: MediaQueryList): 无值;

}
接口 MutationCallback {
    (mutations: MutationRecord[], observer: MutationObserver): 无值;

}
接口 NavigatorUserMediaErrorCallback {
    (error: MediaStreamError): 无值;

}
接口 NavigatorUserMediaSuccessCallback {
    (stream: MediaStream): 无值;

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
接口 RTCPeerConnectionErrorCallback {
    (error: DOMError): 无值;

}
接口 RTCSessionDescriptionCallback {
    (sdp: RTCSessionDescription): 无值;

}
接口 RTCStatsCallback {
    (report: RTCStatsReport): 无值;

}
接口 VoidFunction {
    (): 无值;

}
接口 WritableStreamChunkCallback {
    (chunk: 任意, controller: WritableStreamDefaultController): 无值;

}
接口 WritableStreamDefaultControllerCallback {
    (controller: WritableStreamDefaultController): 无值;

}
接口 WritableStreamErrorCallback {
    (reason: 文字): 无值;

}
接口 HTMLElementTagNameMap {
    "a": HTMLAnchorElement;
    "abbr": HTMLElement;
    "acronym": HTMLElement;
    "address": HTMLElement;
    "applet": HTMLAppletElement;
    "area": HTMLAreaElement;
    "article": HTMLElement;
    "aside": HTMLElement;
    "audio": HTMLAudioElement;
    "b": HTMLElement;
    "base": HTMLBaseElement;
    "basefont": HTMLBaseFontElement;
    "bdo": HTMLElement;
    "big": HTMLElement;
    "blockquote": HTMLQuoteElement;
    "body": HTMLBodyElement;
    "br": HTMLBRElement;
    "button": HTMLButtonElement;
    "canvas": HTMLCanvasElement;
    "caption": HTMLTableCaptionElement;
    "center": HTMLElement;
    "cite": HTMLElement;
    "code": HTMLElement;
    "col": HTMLTableColElement;
    "colgroup": HTMLTableColElement;
    "data": HTMLDataElement;
    "datalist": HTMLDataListElement;
    "dd": HTMLElement;
    "del": HTMLModElement;
    "dfn": HTMLElement;
    "dir": HTMLDirectoryElement;
    "div": HTMLDivElement;
    "dl": HTMLDListElement;
    "dt": HTMLElement;
    "em": HTMLElement;
    "embed": HTMLEmbedElement;
    "fieldset": HTMLFieldSetElement;
    "figcaption": HTMLElement;
    "figure": HTMLElement;
    "font": HTMLFontElement;
    "footer": HTMLElement;
    "form": HTMLFormElement;
    "frame": HTMLFrameElement;
    "frameset": HTMLFrameSetElement;
    "h1": HTMLHeadingElement;
    "h2": HTMLHeadingElement;
    "h3": HTMLHeadingElement;
    "h4": HTMLHeadingElement;
    "h5": HTMLHeadingElement;
    "h6": HTMLHeadingElement;
    "head": HTMLHeadElement;
    "header": HTMLElement;
    "hgroup": HTMLElement;
    "hr": HTMLHRElement;
    "html": HTMLHtmlElement;
    "i": HTMLElement;
    "iframe": HTMLIFrameElement;
    "img": HTMLImageElement;
    "input": HTMLInputElement;
    "ins": HTMLModElement;
    "isindex": HTMLUnknownElement;
    "kbd": HTMLElement;
    "keygen": HTMLElement;
    "label": HTMLLabelElement;
    "legend": HTMLLegendElement;
    "li": HTMLLIElement;
    "link": HTMLLinkElement;
    "listing": HTMLPreElement;
    "map": HTMLMapElement;
    "mark": HTMLElement;
    "marquee": HTMLMarqueeElement;
    "menu": HTMLMenuElement;
    "meta": HTMLMetaElement;
    "meter": HTMLMeterElement;
    "nav": HTMLElement;
    "nextid": HTMLUnknownElement;
    "nobr": HTMLElement;
    "noframes": HTMLElement;
    "noscript": HTMLElement;
    "object": HTMLObjectElement;
    "ol": HTMLOListElement;
    "optgroup": HTMLOptGroupElement;
    "option": HTMLOptionElement;
    "output": HTMLOutputElement;
    "p": HTMLParagraphElement;
    "param": HTMLParamElement;
    "picture": HTMLPictureElement;
    "plaintext": HTMLElement;
    "pre": HTMLPreElement;
    "progress": HTMLProgressElement;
    "q": HTMLQuoteElement;
    "rt": HTMLElement;
    "ruby": HTMLElement;
    "s": HTMLElement;
    "samp": HTMLElement;
    "script": HTMLScriptElement;
    "section": HTMLElement;
    "select": HTMLSelectElement;
    "slot": HTMLSlotElement;
    "small": HTMLElement;
    "source": HTMLSourceElement;
    "span": HTMLSpanElement;
    "strike": HTMLElement;
    "strong": HTMLElement;
    "style": HTMLStyleElement;
    "sub": HTMLElement;
    "sup": HTMLElement;
    "table": HTMLTableElement;
    "tbody": HTMLTableSectionElement;
    "td": HTMLTableDataCellElement;
    "template": HTMLTemplateElement;
    "textarea": HTMLTextAreaElement;
    "tfoot": HTMLTableSectionElement;
    "th": HTMLTableHeaderCellElement;
    "thead": HTMLTableSectionElement;
    "time": HTMLTimeElement;
    "title": HTMLTitleElement;
    "tr": HTMLTableRowElement;
    "track": HTMLTrackElement;
    "tt": HTMLElement;
    "u": HTMLElement;
    "ul": HTMLUListElement;
    "var": HTMLElement;
    "video": HTMLVideoElement;
    "wbr": HTMLElement;
    "xmp": HTMLPreElement;

}
接口 SVGElementTagNameMap {
    "circle": SVGCircleElement;
    "clippath": SVGClipPathElement;
    "defs": SVGDefsElement;
    "desc": SVGDescElement;
    "ellipse": SVGEllipseElement;
    "feblend": SVGFEBlendElement;
    "fecolormatrix": SVGFEColorMatrixElement;
    "fecomponenttransfer": SVGFEComponentTransferElement;
    "fecomposite": SVGFECompositeElement;
    "feconvolvematrix": SVGFEConvolveMatrixElement;
    "fediffuselighting": SVGFEDiffuseLightingElement;
    "fedisplacementmap": SVGFEDisplacementMapElement;
    "fedistantlight": SVGFEDistantLightElement;
    "feflood": SVGFEFloodElement;
    "fefunca": SVGFEFuncAElement;
    "fefuncb": SVGFEFuncBElement;
    "fefuncg": SVGFEFuncGElement;
    "fefuncr": SVGFEFuncRElement;
    "fegaussianblur": SVGFEGaussianBlurElement;
    "feimage": SVGFEImageElement;
    "femerge": SVGFEMergeElement;
    "femergenode": SVGFEMergeNodeElement;
    "femorphology": SVGFEMorphologyElement;
    "feoffset": SVGFEOffsetElement;
    "fepointlight": SVGFEPointLightElement;
    "fespecularlighting": SVGFESpecularLightingElement;
    "fespotlight": SVGFESpotLightElement;
    "fetile": SVGFETileElement;
    "feturbulence": SVGFETurbulenceElement;
    "filter": SVGFilterElement;
    "foreignobject": SVGForeignObjectElement;
    "g": SVGGElement;
    "image": SVGImageElement;
    "line": SVGLineElement;
    "lineargradient": SVGLinearGradientElement;
    "marker": SVGMarkerElement;
    "mask": SVGMaskElement;
    "metadata": SVGMetadataElement;
    "path": SVGPathElement;
    "pattern": SVGPatternElement;
    "polygon": SVGPolygonElement;
    "polyline": SVGPolylineElement;
    "radialgradient": SVGRadialGradientElement;
    "rect": SVGRectElement;
    "stop": SVGStopElement;
    "svg": SVGSVGElement;
    "switch": SVGSwitchElement;
    "symbol": SVGSymbolElement;
    "text": SVGTextElement;
    "textpath": SVGTextPathElement;
    "tspan": SVGTSpanElement;
    "use": SVGUseElement;
    "view": SVGViewElement;

}
/** @deprecated Directly use HTMLElementTagNameMap or SVGElementTagNameMap as appropriate, instead. */
接口 ElementTagNameMap 扩展 HTMLElementTagNameMap, SVGElementTagNameMap { }
声明 值量 Audio: {
    新建(src?: 文字): HTMLAudioElement;

};
声明 值量 Image: {
    新建(width?: 数字, height?: 数字): HTMLImageElement;

};
声明 值量 Option: {
    新建(text?: 文字, value?: 文字, defaultSelected?: 真假, selected?: 真假): HTMLOptionElement;

};
声明 值量 Blob: 类为 Blob;
声明 值量 URL: 类为 URL;
声明 值量 URLSearchParams: 类为 URLSearchParams;
声明 值量 applicationCache: ApplicationCache;
声明 值量 caches: CacheStorage;
声明 值量 clientInformation: Navigator;
声明 值量 closed: 真假;
声明 值量 crypto: Crypto;
声明 值量 customElements: CustomElementRegistry;
声明 值量 defaultStatus: 文字;
声明 值量 devicePixelRatio: 数字;
声明 值量 doNotTrack: 文字;
声明 值量 document: Document;
声明 值量 event: Event | 未定;
声明 值量 external: External;
声明 值量 frameElement: Element;
声明 值量 frames: Window;
声明 值量 history: History;
声明 值量 innerHeight: 数字;
声明 值量 innerWidth: 数字;
声明 值量 isSecureContext: 真假;
声明 值量 length: 数字;
声明 值量 location: Location;
声明 值量 locationbar: BarProp;
声明 值量 menubar: BarProp;
声明 值量 msContentScript: ExtensionScriptApis;
声明 值量 msCredentials: MSCredentials;
声明 常量 name: 不及;
声明 值量 navigator: Navigator;
声明 值量 offscreenBuffering: 文字 | 真假;
声明 值量 onabort: ((this: Window, ev: UIEvent) => 任意) | 空值;
声明 值量 onafterprint: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onbeforeprint: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onbeforeunload: ((this: Window, ev: BeforeUnloadEvent) => 任意) | 空值;
声明 值量 onblur: ((this: Window, ev: FocusEvent) => 任意) | 空值;
声明 值量 oncanplay: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 oncanplaythrough: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onchange: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onclick: ((this: Window, ev: MouseEvent) => 任意) | 空值;
声明 值量 oncompassneedscalibration: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 oncontextmenu: ((this: Window, ev: PointerEvent) => 任意) | 空值;
声明 值量 ondblclick: ((this: Window, ev: MouseEvent) => 任意) | 空值;
声明 值量 ondevicelight: ((this: Window, ev: DeviceLightEvent) => 任意) | 空值;
声明 值量 ondevicemotion: ((this: Window, ev: DeviceMotionEvent) => 任意) | 空值;
声明 值量 ondeviceorientation: ((this: Window, ev: DeviceOrientationEvent) => 任意) | 空值;
声明 值量 ondrag: ((this: Window, ev: DragEvent) => 任意) | 空值;
声明 值量 ondragend: ((this: Window, ev: DragEvent) => 任意) | 空值;
声明 值量 ondragenter: ((this: Window, ev: DragEvent) => 任意) | 空值;
声明 值量 ondragleave: ((this: Window, ev: DragEvent) => 任意) | 空值;
声明 值量 ondragover: ((this: Window, ev: DragEvent) => 任意) | 空值;
声明 值量 ondragstart: ((this: Window, ev: DragEvent) => 任意) | 空值;
声明 值量 ondrop: ((this: Window, ev: DragEvent) => 任意) | 空值;
声明 值量 ondurationchange: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onemptied: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onended: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onerror: ErrorEventHandler;
声明 值量 onfocus: ((this: Window, ev: FocusEvent) => 任意) | 空值;
声明 值量 onhashchange: ((this: Window, ev: HashChangeEvent) => 任意) | 空值;
声明 值量 oninput: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 oninvalid: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onkeydown: ((this: Window, ev: KeyboardEvent) => 任意) | 空值;
声明 值量 onkeypress: ((this: Window, ev: KeyboardEvent) => 任意) | 空值;
声明 值量 onkeyup: ((this: Window, ev: KeyboardEvent) => 任意) | 空值;
声明 值量 onload: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onloadeddata: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onloadedmetadata: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onloadstart: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onmessage: ((this: Window, ev: MessageEvent) => 任意) | 空值;
声明 值量 onmousedown: ((this: Window, ev: MouseEvent) => 任意) | 空值;
声明 值量 onmouseenter: ((this: Window, ev: MouseEvent) => 任意) | 空值;
声明 值量 onmouseleave: ((this: Window, ev: MouseEvent) => 任意) | 空值;
声明 值量 onmousemove: ((this: Window, ev: MouseEvent) => 任意) | 空值;
声明 值量 onmouseout: ((this: Window, ev: MouseEvent) => 任意) | 空值;
声明 值量 onmouseover: ((this: Window, ev: MouseEvent) => 任意) | 空值;
声明 值量 onmouseup: ((this: Window, ev: MouseEvent) => 任意) | 空值;
声明 值量 onmousewheel: ((this: Window, ev: WheelEvent) => 任意) | 空值;
声明 值量 onmsgesturechange: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onmsgesturedoubletap: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onmsgestureend: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onmsgesturehold: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onmsgesturestart: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onmsgesturetap: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onmsinertiastart: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onmspointercancel: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onmspointerdown: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onmspointerenter: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onmspointerleave: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onmspointermove: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onmspointerout: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onmspointerover: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onmspointerup: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onoffline: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 ononline: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onorientationchange: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onpagehide: ((this: Window, ev: PageTransitionEvent) => 任意) | 空值;
声明 值量 onpageshow: ((this: Window, ev: PageTransitionEvent) => 任意) | 空值;
声明 值量 onpause: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onplay: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onplaying: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onpopstate: ((this: Window, ev: PopStateEvent) => 任意) | 空值;
声明 值量 onprogress: ((this: Window, ev: ProgressEvent) => 任意) | 空值;
声明 值量 onratechange: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onreadystatechange: ((this: Window, ev: ProgressEvent) => 任意) | 空值;
声明 值量 onreset: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onresize: ((this: Window, ev: UIEvent) => 任意) | 空值;
声明 值量 onscroll: ((this: Window, ev: UIEvent) => 任意) | 空值;
声明 值量 onseeked: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onseeking: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onselect: ((this: Window, ev: UIEvent) => 任意) | 空值;
声明 值量 onstalled: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onstorage: ((this: Window, ev: StorageEvent) => 任意) | 空值;
声明 值量 onsubmit: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onsuspend: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 ontimeupdate: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 ontouchcancel: (ev: TouchEvent) => 任意;
声明 值量 ontouchend: (ev: TouchEvent) => 任意;
声明 值量 ontouchmove: (ev: TouchEvent) => 任意;
声明 值量 ontouchstart: (ev: TouchEvent) => 任意;
声明 值量 onunload: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onvolumechange: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onvrdisplayactivate: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onvrdisplayblur: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onvrdisplayconnect: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onvrdisplaydeactivate: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onvrdisplaydisconnect: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onvrdisplayfocus: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onvrdisplaypointerrestricted: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onvrdisplaypointerunrestricted: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onvrdisplaypresentchange: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 onwaiting: ((this: Window, ev: Event) => 任意) | 空值;
声明 值量 opener: 任意;
声明 值量 orientation: 文字 | 数字;
声明 值量 outerHeight: 数字;
声明 值量 outerWidth: 数字;
声明 值量 pageXOffset: 数字;
声明 值量 pageYOffset: 数字;
声明 值量 parent: Window;
声明 值量 performance: Performance;
声明 值量 personalbar: BarProp;
声明 值量 screen: Screen;
声明 值量 screenLeft: 数字;
声明 值量 screenTop: 数字;
声明 值量 screenX: 数字;
声明 值量 screenY: 数字;
声明 值量 scrollX: 数字;
声明 值量 scrollY: 数字;
声明 值量 scrollbars: BarProp;
声明 值量 self: Window;
声明 值量 speechSynthesis: SpeechSynthesis;
声明 值量 status: 文字;
声明 值量 statusbar: BarProp;
声明 值量 styleMedia: StyleMedia;
声明 值量 toolbar: BarProp;
声明 值量 top: Window;
声明 值量 window: Window;
声明 函数 alert(message?: 任意): 无值;
声明 函数 blur(): 无值;
声明 函数 cancelAnimationFrame(handle: 数字): 无值;
声明 函数 captureEvents(): 无值;
声明 函数 close(): 无值;
声明 函数 confirm(message?: 文字): 真假;
//@@{ 预设_:Promise }
声明 函数 createImageBitmap(image: HTMLImageElement | SVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | ImageData | Blob, options?: ImageBitmapOptions): 预设_<ImageBitmap>;
//@@{ 预设_:Promise }
声明 函数 createImageBitmap(image: HTMLImageElement | SVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | ImageData | Blob, sx: 数字, sy: 数字, sw: 数字, sh: 数字, options?: ImageBitmapOptions): 预设_<ImageBitmap>;
声明 函数 departFocus(navigationReason: NavigationReason, origin: FocusNavigationOrigin): 无值;
声明 函数 focus(): 无值;
声明 函数 getComputedStyle(elt: Element, pseudoElt?: 文字 | 空值): CSSStyleDeclaration;
声明 函数 getMatchedCSSRules(elt: Element, pseudoElt?: 文字 | 空值): CSSRuleList;
声明 函数 getSelection(): Selection;
声明 函数 matchMedia(mediaQuery: 文字): MediaQueryList;
声明 函数 moveBy(x?: 数字, y?: 数字): 无值;
声明 函数 moveTo(x?: 数字, y?: 数字): 无值;
声明 函数 msWriteProfilerMark(profilerMarkName: 文字): 无值;
声明 函数 open(url?: 文字, target?: 文字, features?: 文字, replace?: 真假): Window | 空值;
声明 函数 postMessage(message: 任意, targetOrigin: 文字, transfer?: 任意[]): 无值;
声明 函数 print(): 无值;
声明 函数 prompt(message?: 文字, _default?: 文字): 文字 | 空值;
声明 函数 releaseEvents(): 无值;
声明 函数 requestAnimationFrame(callback: FrameRequestCallback): 数字;
声明 函数 resizeBy(x?: 数字, y?: 数字): 无值;
声明 函数 resizeTo(x?: 数字, y?: 数字): 无值;
声明 函数 scroll(options?: ScrollToOptions): 无值;
声明 函数 scroll(x?: 数字, y?: 数字): 无值;
声明 函数 scrollBy(options?: ScrollToOptions): 无值;
声明 函数 scrollBy(x?: 数字, y?: 数字): 无值;
声明 函数 scrollTo(options?: ScrollToOptions): 无值;
声明 函数 scrollTo(x?: 数字, y?: 数字): 无值;
声明 函数 stop(): 无值;
声明 函数 webkitCancelAnimationFrame(handle: 数字): 无值;
声明 函数 webkitConvertPointFromNodeToPage(node: Node, pt: WebKitPoint): WebKitPoint;
声明 函数 webkitConvertPointFromPageToNode(node: Node, pt: WebKitPoint): WebKitPoint;
声明 函数 webkitRequestAnimationFrame(callback: FrameRequestCallback): 数字;
声明 函数 toString(): 文字;
声明 函数 dispatchEvent(evt: Event): 真假;
声明 函数 clearInterval(handle?: 数字): 无值;
声明 函数 clearTimeout(handle?: 数字): 无值;
声明 函数 setInterval(handler: (...args: 任意[]) => 无值, timeout: 数字): 数字;
声明 函数 setInterval(handler: 任意, timeout?: 任意, ...args: 任意[]): 数字;
声明 函数 setTimeout(handler: (...args: 任意[]) => 无值, timeout: 数字): 数字;
声明 函数 setTimeout(handler: 任意, timeout?: 任意, ...args: 任意[]): 数字;
声明 函数 clearImmediate(handle: 数字): 无值;
声明 函数 setImmediate(handler: (...args: 任意[]) => 无值): 数字;
声明 函数 setImmediate(handler: 任意, ...args: 任意[]): 数字;
声明 值量 sessionStorage: Storage;
声明 值量 localStorage: Storage;
声明 值量 console: Console;
声明 值量 onpointercancel: ((this: Window, ev: PointerEvent) => 任意) | 空值;
声明 值量 onpointerdown: ((this: Window, ev: PointerEvent) => 任意) | 空值;
声明 值量 onpointerenter: ((this: Window, ev: PointerEvent) => 任意) | 空值;
声明 值量 onpointerleave: ((this: Window, ev: PointerEvent) => 任意) | 空值;
声明 值量 onpointermove: ((this: Window, ev: PointerEvent) => 任意) | 空值;
声明 值量 onpointerout: ((this: Window, ev: PointerEvent) => 任意) | 空值;
声明 值量 onpointerover: ((this: Window, ev: PointerEvent) => 任意) | 空值;
声明 值量 onpointerup: ((this: Window, ev: PointerEvent) => 任意) | 空值;
声明 值量 onwheel: ((this: Window, ev: WheelEvent) => 任意) | 空值;
声明 值量 indexedDB: IDBFactory;
声明 函数 atob(encodedString: 文字): 文字;
声明 函数 btoa(rawString: 文字): 文字;
//@@{ 预设_:Promise }
声明 函数 fetch(input?: Request | 文字, init?: RequestInit): 预设_<Response>;
声明 函数 addEventListener<K 扩展 键为 WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => 任意, options?: 真假 | AddEventListenerOptions): 无值;
声明 函数 addEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | AddEventListenerOptions): 无值;
声明 函数 removeEventListener<K 扩展 键为 WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => 任意, options?: 真假 | EventListenerOptions): 无值;
声明 函数 removeEventListener(type: 文字, listener: EventListenerOrEventListenerObject, options?: 真假 | EventListenerOptions): 无值;
类型 ScrollBehavior = "auto" | "instant" | "smooth";
类型 ScrollLogicalPosition = "start" | "center" | "end" | "nearest";
类型 MouseWheelEvent = WheelEvent;
类型 ScrollRestoration = "auto" | "manual";
类型 FormDataEntryValue = 文字 | File;
类型 InsertPosition = "beforebegin" | "afterbegin" | "beforeend" | "afterend";
类型 HeadersInit = Headers | 文字[][] | { [key: 文字]: 文字 };
类型 OrientationLockType = "any" | "natural" | "portrait" | "landscape" | "portrait-primary" | "portrait-secondary" | "landscape-primary"| "landscape-secondary";
//@@{ 日期_:Date }
类型 IDBValidKey = 数字 | 文字 | 日期_ | IDBArrayKey;
类型 AlgorithmIdentifier = 文字 | Algorithm;
类型 MutationRecordType = "attributes" | "characterData" | "childList";
类型 AAGUID = 文字;
类型 BodyInit = 任意;
类型 ByteString = 文字;
类型 ConstrainBoolean = 真假 | ConstrainBooleanParameters;
类型 ConstrainDOMString = 文字 | 文字[] | ConstrainDOMStringParameters;
类型 ConstrainDouble = 数字 | ConstrainDoubleRange;
类型 ConstrainLong = 数字 | ConstrainLongRange;
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
类型 MSInboundPayload = MSVideoRecvPayload | MSAudioRecvPayload;
类型 MSLocalClientEvent = MSLocalClientEventBase | MSAudioLocalClientEvent;
类型 MSOutboundPayload = MSVideoSendPayload | MSAudioSendPayload;
类型 RTCIceGatherCandidate = RTCIceCandidateDictionary | RTCIceCandidateComplete;
类型 RTCTransport = RTCDtlsTransport | RTCSrtpSdesTransport;
类型 RequestInfo = Request | 文字;
类型 USVString = 文字;
类型 payloadtype = 数字;
//@@{ 数组缓冲区_:ArrayBuffer, 数组缓冲区视图_:ArrayBufferView }
类型 BufferSource = 数组缓冲区_ | 数组缓冲区视图_;
类型 ClientTypes = "window" | "worker" | "sharedworker" | "all";
类型 AppendMode = "segments" | "sequence";
类型 AudioContextLatencyCategory = "balanced" | "interactive" | "playback";
类型 AudioContextState = "suspended" | "running" | "closed";
类型 BinaryType = "blob" | "arraybuffer";
类型 BiquadFilterType = "lowpass" | "highpass" | "bandpass" | "lowshelf" | "highshelf" | "peaking" | "notch" | "allpass";
类型 CanPlayTypeResult = "" | "maybe" | "probably";
类型 CanvasFillRule = "nonzero" | "evenodd";
类型 ChannelCountMode = "max" | "clamped-max" | "explicit";
类型 ChannelInterpretation = "speakers" | "discrete";
类型 DisplayCaptureSurfaceType = "monitor" | "window" | "application" | "browser";
类型 DistanceModelType = "linear" | "inverse" | "exponential";
类型 DocumentReadyState = "loading" | "interactive" | "complete";
类型 EndOfStreamError = "network" | "decode";
类型 ExpandGranularity = "character" | "word" | "sentence" | "textedit";
类型 GamepadHand = "" | "left" | "right";
类型 GamepadHapticActuatorType = "vibration";
类型 GamepadInputEmulationType = "mouse" | "keyboard" | "gamepad";
类型 GamepadMappingType = "" | "standard";
类型 IDBCursorDirection = "next" | "nextunique" | "prev" | "prevunique";
类型 IDBRequestReadyState = "pending" | "done";
类型 IDBTransactionMode = "readonly" | "readwrite" | "versionchange";
类型 KeyFormat = "raw" | "spki" | "pkcs8" | "jwk";
类型 KeyType = "public" | "private" | "secret";
类型 KeyUsage = "encrypt" | "decrypt" | "sign" | "verify" | "deriveKey" | "deriveBits" | "wrapKey" | "unwrapKey";
类型 ListeningState = "inactive" | "active" | "disambiguation";
类型 MSCredentialType = "FIDO_2_0";
类型 MSIceAddrType = "os" | "stun" | "turn" | "peer-derived";
类型 MSIceType = "failed" | "direct" | "relay";
类型 MSStatsType = "description" | "localclientevent" | "inbound-network" | "outbound-network" | "inbound-payload" | "outbound-payload" | "transportdiagnostics";
类型 MSTransportType = "Embedded" | "USB" | "NFC" | "BT";
类型 MSWebViewPermissionState = "unknown" | "defer" | "allow" | "deny";
类型 MSWebViewPermissionType = "geolocation" | "unlimitedIndexedDBQuota" | "media" | "pointerlock" | "webnotifications";
类型 MediaDeviceKind = "audioinput" | "audiooutput" | "videoinput";
类型 MediaKeyMessageType = "license-request" | "license-renewal" | "license-release" | "individualization-request";
类型 MediaKeySessionType = "temporary" | "persistent-license" | "persistent-release-message";
类型 MediaKeyStatus = "usable" | "expired" | "output-downscaled" | "output-not-allowed" | "status-pending" | "internal-error";
类型 MediaKeysRequirement = "required" | "optional" | "not-allowed";
类型 MediaStreamTrackState = "live" | "ended";
类型 NavigationReason = "up" | "down" | "left" | "right";
类型 NavigationType = "navigate" | "reload" | "back_forward" | "prerender";
类型 NotificationDirection = "auto" | "ltr" | "rtl";
类型 NotificationPermission = "default" | "denied" | "granted";
类型 OscillatorType = "sine" | "square" | "sawtooth" | "triangle" | "custom";
类型 OverSampleType = "none" | "2x" | "4x";
类型 PanningModelType = "equalpower" | "HRTF";
类型 PaymentComplete = "success" | "fail" | "unknown";
类型 PaymentShippingType = "shipping" | "delivery" | "pickup";
类型 PushEncryptionKeyName = "p256dh" | "auth";
类型 PushPermissionState = "granted" | "denied" | "prompt";
类型 RTCBundlePolicy = "balanced" | "max-compat" | "max-bundle";
类型 RTCDegradationPreference = "maintain-framerate" | "maintain-resolution" | "balanced";
类型 RTCDtlsRole = "auto" | "client" | "server";
类型 RTCDtlsTransportState = "new" | "connecting" | "connected" | "closed";
类型 RTCIceCandidateType = "host" | "srflx" | "prflx" | "relay";
类型 RTCIceComponent = "RTP" | "RTCP";
类型 RTCIceConnectionState = "new" | "checking" | "connected" | "completed" | "failed" | "disconnected" | "closed";
类型 RTCIceGatherPolicy = "all" | "nohost" | "relay";
类型 RTCIceGathererState = "new" | "gathering" | "complete";
类型 RTCIceGatheringState = "new" | "gathering" | "complete";
类型 RTCIceProtocol = "udp" | "tcp";
类型 RTCIceRole = "controlling" | "controlled";
类型 RTCIceTcpCandidateType = "active" | "passive" | "so";
类型 RTCIceTransportPolicy = "none" | "relay" | "all";
类型 RTCIceTransportState = "new" | "checking" | "connected" | "completed" | "disconnected" | "closed";
类型 RTCSdpType = "offer" | "pranswer" | "answer";
类型 RTCSignalingState = "stable" | "have-local-offer" | "have-remote-offer" | "have-local-pranswer" | "have-remote-pranswer" | "closed";
类型 RTCStatsIceCandidatePairState = "frozen" | "waiting" | "inprogress" | "failed" | "succeeded" | "cancelled";
类型 RTCStatsIceCandidateType = "host" | "serverreflexive" | "peerreflexive" | "relayed";
类型 RTCStatsType = "inboundrtp" | "outboundrtp" | "session" | "datachannel" | "track" | "transport" | "candidatepair" | "localcandidate" | "remotecandidate";
类型 ReadyState = "closed" | "open" | "ended";
类型 ReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "origin-only" | "origin-when-cross-origin" | "unsafe-url";
类型 RequestCache = "default" | "no-store" | "reload" | "no-cache" | "force-cache";
类型 RequestCredentials = "omit" | "same-origin" | "include";
类型 RequestDestination = "" | "document" | "sharedworker" | "subresource" | "unknown" | "worker";
类型 RequestMode = "navigate" | "same-origin" | "no-cors" | "cors";
类型 RequestRedirect = "follow" | "error" | "manual";
类型 RequestType = "" | "audio" | "font" | "image" | "script" | "style" | "track" | "video";
类型 ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";
类型 ScopedCredentialType = "ScopedCred";
类型 ServiceWorkerState = "installing" | "installed" | "activating" | "activated" | "redundant";
类型 TextTrackKind = "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
类型 TextTrackMode = "disabled" | "hidden" | "showing";
类型 Transport = "usb" | "nfc" | "ble";
类型 VRDisplayEventReason = "mounted" | "navigation" | "requested" | "unmounted";
类型 VREye = "left" | "right";
类型 VideoFacingModeEnum = "user" | "environment" | "left" | "right";
类型 VisibilityState = "hidden" | "visible" | "prerender" | "unloaded";
类型 XMLHttpRequestResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text";

/////////////////////////////
/// WorkerGlobalScope APIs
/////////////////////////////
// These are only available in a Web Worker
声明 函数 importScripts(...urls: 文字[]): 无值;

/////////////////////////////
/// Windows Script Host APIS
/////////////////////////////
接口 ActiveXObject {
    新建 (s: 文字): 任意;

}
声明 值量 ActiveXObject: ActiveXObject;
接口 ITextWriter {
    Write(s: 文字): 无值;
    WriteLine(s: 文字): 无值;
    Close(): 无值;

}
接口 TextStreamBase {

    /**
     * The column number of the current character position in an input stream.
     */
    Column: 数字;

    /**
     * The current line number in an input stream.
     */
    Line: 数字;

    /**
     * Closes a text stream.
     * It is not necessary to close standard streams; they close automatically when the process ends. If
     * you close a standard stream, be aware that any other pointers to that standard stream become invalid.
     */
    Close(): 无值;

}
接口 TextStreamWriter 扩展 TextStreamBase {

    /**
     * Sends a string to an output stream.
     */
    Write(s: 文字): 无值;

    /**
     * Sends a specified number of blank lines (newline characters) to an output stream.
     */
    WriteBlankLines(intLines: 数字): 无值;

    /**
     * Sends a string followed by a newline character to an output stream.
     */
    WriteLine(s: 文字): 无值;

}
接口 TextStreamReader 扩展 TextStreamBase {

    /**
     * Returns a specified number of characters from an input stream, starting at the current pointer position.
     * Does not return until the ENTER key is pressed.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     */
    Read(characters: 数字): 文字;

    /**
     * Returns all characters from an input stream.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     */
    ReadAll(): 文字;

    /**
     * Returns an entire line from an input stream.
     * Although this method extracts the newline character, it does not add it to the returned string.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     */
    ReadLine(): 文字;

    /**
     * Skips a specified number of characters when reading from an input text stream.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     * @param characters Positive number of characters to skip forward. (Backward skipping is not supported.)
     */
    Skip(characters: 数字): 无值;

    /**
     * Skips the next line when reading from an input text stream.
     * Can only be used on a stream in reading mode, not writing or appending mode.
     */
    SkipLine(): 无值;

    /**
     * Indicates whether the stream pointer position is at the end of a line.
     */
    AtEndOfLine: 真假;

    /**
     * Indicates whether the stream pointer position is at the end of a stream.
     */
    AtEndOfStream: 真假;

}
声明 值量 WScript: {

    /**
     * Outputs text to either a message box (under WScript.exe) or the command console window followed by
     * a newline (under CScript.exe).
     */
    Echo(s: 任意): 无值;

    /**
     * Exposes the write-only error output stream for the current script.
     * Can be accessed only while using CScript.exe.
     */
    StdErr: TextStreamWriter;

    /**
     * Exposes the write-only output stream for the current script.
     * Can be accessed only while using CScript.exe.
     */
    StdOut: TextStreamWriter;
    Arguments: { length: 数字; Item(n: 数字): 文字; };

    /**
     *  The full path of the currently running script.
     */
    ScriptFullName: 文字;

    /**
     * Forces the script to stop immediately, with an optional exit code.
     */
    Quit(exitCode?: 数字): 数字;

    /**
     * The Windows Script Host build version number.
     */
    BuildVersion: 数字;

    /**
     * Fully qualified path of the host executable.
     */
    FullName: 文字;

    /**
     * Gets/sets the script mode - interactive(true) or batch(false).
     */
    Interactive: 真假;

    /**
     * The name of the host executable (WScript.exe or CScript.exe).
     */
    Name: 文字;

    /**
     * Path of the directory containing the host executable.
     */
    Path: 文字;

    /**
     * The filename of the currently running script.
     */
    ScriptName: 文字;

    /**
     * Exposes the read-only input stream for the current script.
     * Can be accessed only while using CScript.exe.
     */
    StdIn: TextStreamReader;

    /**
     * Windows Script Host version
     */
    Version: 文字;

    /**
     * Connects a COM object's event sources to functions named with a given prefix, in the form prefix_event.
     */
    ConnectObject(objEventSource: 任意, strPrefix: 文字): 无值;

    /**
     * Creates a COM object.
     * @param strProgiID
     * @param strPrefix Function names in the form prefix_event will be bound to this object's COM events.
     */
    CreateObject(strProgID: 文字, strPrefix?: 文字): 任意;

    /**
     * Disconnects a COM object from its event sources.
     */
    DisconnectObject(obj: 任意): 无值;

    /**
     * Retrieves an existing object with the specified ProgID from memory, or creates a new one from a file.
     * @param strPathname Fully qualified path to the file containing the object persisted to disk.
     *                       For objects in memory, pass a zero-length string.
     * @param strProgID
     * @param strPrefix Function names in the form prefix_event will be bound to this object's COM events.
     */
    GetObject(strPathname: 文字, strProgID?: 文字, strPrefix?: 文字): 任意;

    /**
     * Suspends script execution for a specified length of time, then continues execution.
     * @param intTime Interval (in milliseconds) to suspend script execution.
     */
    Sleep(intTime: 数字): 无值;

};
/**
 * Represents an Automation SAFEARRAY
 */
声明 类别 SafeArray<T = 任意> {
    私有 构造();
    私有 SafeArray_typekey: SafeArray<T>;

}
/**
 * Allows enumerating over a COM collection, which may not have indexed item access.
 */
接口 Enumerator<T = 任意> {

    /**
     * Returns true if the current item is the last one in the collection, or the collection is empty,
     * or the current item is undefined.
     */
    atEnd(): 真假;

    /**
     * Returns the current item in the collection
     */
    item(): T;

    /**
     * Resets the current item in the collection to the first item. If there are no items in the collection,
     * the current item is set to undefined.
     */
    moveFirst(): 无值;

    /**
     * Moves the current item to the next item in the collection. If the enumerator is at the end of
     * the collection or the collection is empty, the current item is set to undefined.
     */
    moveNext(): 无值;

}
接口 EnumeratorConstructor {
    新建 <T = 任意>(safearray: SafeArray<T>): Enumerator<T>;
    新建 <T = 任意>(collection: { Item(index: 任意): T }): Enumerator<T>;
    新建 <T = 任意>(collection: 任意): Enumerator<T>;

}
声明 值量 Enumerator: EnumeratorConstructor;

/**
 * Enables reading from a COM safe array, which might have an alternate lower bound, or multiple dimensions.
 */
接口 VBArray<T = 任意> {

    /**
     * Returns the number of dimensions (1-based).
     */
    dimensions(): 数字;

    /**
     * Takes an index for each dimension in the array, and returns the item at the corresponding location.
     */
    getItem(dimension1Index: 数字, ...dimensionNIndexes: 数字[]): T;

    /**
     * Returns the smallest available index for a given dimension.
     * @param dimension 1-based dimension (defaults to 1)
     */
    lbound(dimension?: 数字): 数字;

    /**
     * Returns the largest available index for a given dimension.
     * @param dimension 1-based dimension (defaults to 1)
     */
    ubound(dimension?: 数字): 数字;

    /**
     * Returns a Javascript array with all the elements in the VBArray. If there are multiple dimensions,
     * each successive dimension is appended to the end of the array.
     * Example: [[1,2,3],[4,5,6]] becomes [1,2,3,4,5,6]
     */
    toArray(): T[];

}
接口 VBArrayConstructor {
    新建 <T = 任意>(safeArray: SafeArray<T>): VBArray<T>;

}
声明 值量 VBArray: VBArrayConstructor;

/**
 * Automation date (VT_DATE)
 */
声明 类别 VarDate {
    私有 构造();
    私有 VarDate_typekey: VarDate;

}
//@@{ 日期构造函数_:DateConstructor }
接口 日期构造函数_ {
    //@@{ 日期_:Date }
    新建 (vd: VarDate): 日期_;

}
//@@{ 日期_:Date }
接口 日期_ {
    getVarDate: () => VarDate;

}
/// <reference path="lib.dom.d.ts" />
接口 DOMTokenList {
    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<文字>;

}
接口 Headers {
    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<[文字, 文字]>;

    /**
     * Returns an iterator allowing to go through all key/value pairs contained in this object.
     */
    //@@{ 可迭代迭代器_:IterableIterator }
    entries(): 可迭代迭代器_<[文字, 文字]>;

    /**
     * Returns an iterator allowing to go through all keys f the key/value pairs contained in this object.
     */
    //@@{ 可迭代迭代器_:IterableIterator }
    keys(): 可迭代迭代器_<文字>;

    /**
     * Returns an iterator allowing to go through all values of the key/value pairs contained in this object.
     */
    //@@{ 可迭代迭代器_:IterableIterator }
    values(): 可迭代迭代器_<文字>;

}
接口 NodeList {

    /**
     * Returns an array of key, value pairs for every entry in the list
     */
    //@@{ 可迭代迭代器_:IterableIterator }
    entries(): 可迭代迭代器_<[数字, Node]>;

    /**
     * Performs the specified action for each node in an list.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    forEach(callbackfn: (value: Node, index: 数字, listObj: NodeList) => 无值, thisArg?: 任意): 无值;

    /**
     * Returns an list of keys in the list
     */
    //@@{ 可迭代迭代器_:IterableIterator }
    keys(): 可迭代迭代器_<数字>;

    /**
     * Returns an list of values in the list
     */
    //@@{ 可迭代迭代器_:IterableIterator }
    values(): 可迭代迭代器_<Node>;
    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<Node>;

}
接口 NodeListOf<TNode 扩展 Node> {

    /**
     * Returns an array of key, value pairs for every entry in the list
     */
    //@@{ 可迭代迭代器_:IterableIterator }
    entries(): 可迭代迭代器_<[数字, TNode]>;

    /**
     * Performs the specified action for each node in an list.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    forEach(callbackfn: (value: TNode, index: 数字, listObj: NodeListOf<TNode>) => 无值, thisArg?: 任意): 无值;

    /**
     * Returns an list of keys in the list
     */
    //@@{ 可迭代迭代器_:IterableIterator }
    keys(): 可迭代迭代器_<数字>;

    /**
     * Returns an list of values in the list
     */
    //@@{ 可迭代迭代器_:IterableIterator }
    values(): 可迭代迭代器_<TNode>;
    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<TNode>;

}
接口 HTMLCollectionBase {
    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<Element>;

}
接口 HTMLCollectionOf<T 扩展 Element> {
    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<T>;

}
接口 FormData {

    /**
     * Returns an array of key, value pairs for every entry in the list
     */
    //@@{ 可迭代迭代器_:IterableIterator }
    entries(): 可迭代迭代器_<[文字, 文字 | File]>;

    /**
     * Returns a list of keys in the list
     */
    //@@{ 可迭代迭代器_:IterableIterator }
    keys(): 可迭代迭代器_<文字>;

    /**
     * Returns a list of values in the list
     */
    //@@{ 可迭代迭代器_:IterableIterator }
    values(): 可迭代迭代器_<文字 | File>;
    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<文字 | File>;

}
接口 URLSearchParams {

    /**
     * Returns an array of key, value pairs for every entry in the search params
     */
    //@@{ 可迭代迭代器_:IterableIterator }
    entries(): 可迭代迭代器_<[文字, 文字]>;

    /**
     * Returns a list of keys in the search params
     */
    //@@{ 可迭代迭代器_:IterableIterator }
    keys(): 可迭代迭代器_<文字>;

    /**
     * Returns a list of values in the search params
     */
    //@@{ 可迭代迭代器_:IterableIterator }
    values(): 可迭代迭代器_<文字>;

    /**
     * iterate over key/value pairs
     */
    //@@{ 符号_:Symbol, 迭代器:iterator, 可迭代迭代器_:IterableIterator }
    [符号_.迭代器](): 可迭代迭代器_<[文字, 文字]>;
}
