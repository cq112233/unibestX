import * as _dcloudio_uni_app_x_types_native from '@dcloudio/uni-app-x/types/native';
import { CSSStyleDeclaration as CSSStyleDeclaration$1, INodeData, UniCallbackWrapper as UniCallbackWrapper$1, DOMRect as DOMRect$1, Element, UniNativePage, Event, UniElement, UniPage, TakeSnapshotOptions, GetBoundingClientRectAsyncOptions, DrawableContext, UniEvent as UniEvent$1, UniAnimationKeyframe, UniAnimationOption, UniAnimation, RequestFullscreenOptions, UniTextElement, UniCommentElement, UniPageOnLayoutChangeCallback, UniPageBody, ExitFullscreenOptions, UniPageOnRenderChangeCallback, UniPageManager, UniNativeApp, UniKeyEvent, NativeLoadFontFaceOptions, UniDocument, UniPageEvent, UniPageScrollEvent, ViewToTempFilePathOptions, UniScrollViewElement, UniRichTextNativeElement, UniImageElement, MouseEvent, InputEvent as InputEvent$1, InputEventDetail as InputEventDetail$1, PointerEvent, Touch, TouchEvent, CustomEvent, CustomEventOptions, UniImageLoadEventDetail as UniImageLoadEventDetail$1, UniImageLoadEvent as UniImageLoadEvent$1, UniImageErrorEventDetail as UniImageErrorEventDetail$1, UniImageErrorEvent as UniImageErrorEvent$1, UniScrollEventDetail as UniScrollEventDetail$1, UniScrollEvent as UniScrollEvent$1, UniScrollToLowerEventDetail as UniScrollToLowerEventDetail$1, UniScrollToLowerEvent as UniScrollToLowerEvent$1, UniScrollToUpperEventDetail as UniScrollToUpperEventDetail$1, UniScrollToUpperEvent as UniScrollToUpperEvent$1, UniRefresherEventDetail as UniRefresherEventDetail$1, RefresherEvent, UniNativeViewInitEventDetail as UniNativeViewInitEventDetail$1, UniNativeViewElement, UniNativeViewInitEvent as UniNativeViewInitEvent$1, UniNativeViewReadyEventDetail as UniNativeViewReadyEventDetail$1, UniNativeViewReadyEvent as UniNativeViewReadyEvent$1, UniNativeViewEvent as UniNativeViewEvent$1, UniRichTextNativeItemClickEventDetail as UniRichTextNativeItemClickEventDetail$1, UniRichTextNativeItemClickEvent as UniRichTextNativeItemClickEvent$1, FullscreenError as FullscreenError$1, FullscreenErrorCode } from '@dcloudio/uni-app-x/types/native';

declare class CSSStyleDeclaration implements CSSStyleDeclaration$1 {
    private _element;
    constructor(element: UniElementJs);
    get element(): UniElementJs;
    getPropertyValue(property: string): string;
    setProperty(property: string, value: string, priority?: string): void;
    removeProperty(property: string): string;
    getPropertyPriority(property: string): string;
}

/**
 * 模仿原生 Map，缺省值为 null
 */
declare class NativeMap<K, V> extends Map<K, V> {
    get(key: K): V | null;
    get(key: K): V | undefined;
}

declare class NodeData implements INodeData {
    id: string;
    name: string;
    attrs: NativeMap<string, any | null>;
    style: NativeMap<string, any | null>;
    constructor(id: string, name: string, attrs?: NativeMap<string, any | null>, style?: NativeMap<string, any | null>);
}

declare class UniCallbackWrapper implements UniCallbackWrapper$1 {
    callback: (...args: any[]) => any;
    constructor(callback: (...args: any[]) => any);
}

declare class DOMRect implements DOMRect$1 {
    private _x;
    private _y;
    private _width;
    private _height;
    constructor(x?: number, y?: number, width?: number, height?: number);
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    get width(): number;
    set width(width: number);
    get height(): number;
    set height(height: number);
    get left(): number;
    set left(left: number);
    get top(): number;
    set top(top: number);
    get right(): number;
    set right(right: number);
    get bottom(): number;
    set bottom(bottom: number);
    toJSON(): object;
}

interface ElementConstructor {
    new (...params: any[]): Element;
    buildEvent(nativeEvent: NativeEvent, page: UniNativePage, event?: UniEvent): UniEvent;
}
declare function define(name: string, constructor: ElementConstructor): void;
declare function find(name: string): ElementConstructor | undefined;
interface ElementInfo {
    id: number;
    tagName: string;
    /**
     * 原始类型
     */
    originTagName: string;
    /**
     * 组件单根节点会存储 instance.uid，用于查找组件实例
     */
    vueId?: number;
}
declare function buildElement(elementInfo: ElementInfo, pageId: string | number): Element;
declare function buildElement(elementInfo: ElementInfo, page: UniNativePage): Element;

type NativeEvent = Omit<Event, 'target' | 'currentTarget'> & {
    target: ElementInfo;
    currentTarget: ElementInfo;
};
type EventInit = {
    bubbles?: boolean;
    cancelable?: boolean;
};
declare class UniEvent implements Event {
    __v_skip: boolean;
    get [Symbol.toStringTag](): string;
    type: string;
    target?: UniElement | null | undefined;
    currentTarget?: UniElement | null | undefined;
    timeStamp: number;
    private _bubbles;
    get bubbles(): boolean;
    set bubbles(value: boolean);
    private _cancelable;
    get cancelable(): boolean;
    set cancelable(value: boolean);
    constructor(type: string, eventInit?: EventInit);
    stopPropagation: () => void;
    preventDefault: () => void;
}

declare const UNI_BASE_EVENT_TYPES: string[];
declare class UniElementImpl implements UniElement {
    isConnected: boolean;
    get uniPage(): UniPage;
    firstChild: UniElement | null;
    lastChild: UniElement | null;
    parentNode: UniElement | null;
    previousSibling: UniElement | null;
    nextSibling: UniElement | null;
    childNodes: UniElement[];
    tagName: string;
    nodeName: string;
    get dataset(): Map<string, any>;
    set dataset(dataset: Map<string, any>);
    attributes: Map<string, any>;
    ext: Map<string, any>;
    /**
     * @internal
     */
    private __id;
    /**
     * @internal
     */
    page: UniNativePage;
    /**
     * 用于兼容老版本使用方式
     * @internal
     */
    get pageId(): string;
    get [Symbol.toStringTag](): string;
    _style: CSSStyleDeclaration | null;
    _nativeElement: UniElementJs | null;
    get nativeElement(): UniElementJs;
    constructor(id: number, page: UniNativePage, tagName: string);
    /**
     * TODO 纠正类型
     */
    getNodeId(): any;
    get offsetLeft(): number;
    get offsetTop(): number;
    get offsetWidth(): number;
    get offsetHeight(): number;
    get style(): CSSStyleDeclaration;
    get parentElement(): UniElement | null;
    get children(): UniElement[];
    get previousElementSibling(): UniElement | null;
    get nextElementSibling(): UniElement | null;
    get classList(): string[];
    get scrollWidth(): number;
    get scrollHeight(): number;
    get scrollLeft(): number;
    set scrollLeft(v: number);
    get scrollTop(): number;
    set scrollTop(v: number);
    takeSnapshot(options: TakeSnapshotOptions): void;
    appendChild(aChild: UniElement): void;
    insertBefore(newChild: UniElement, refChild?: UniElement | null | undefined): UniElement | null;
    insertBefore(newChild: UniElement): UniElement | null;
    setAttribute(key: string, value: string): void;
    setAnyAttribute(key: string, value: any): void;
    getAttribute(key: string): string | null;
    getAnyAttribute(key: string): any;
    hasAttribute(key: string): boolean;
    removeAttribute(key: string): void;
    updateStyle(map: Map<string, any>): void;
    getBoundingClientRect(): DOMRect$1;
    getBoundingClientRectAsync(options?: GetBoundingClientRectAsyncOptions | null | undefined): Promise<DOMRect$1> | null;
    getDrawableContext(): DrawableContext | null;
    addEventListener<T extends UniEvent$1, R>(type: string, callback: (event: T) => R): UniCallbackWrapper$1;
    removeEventListener(type: string, callbackWrapper: UniCallbackWrapper$1): void;
    removeChild(aChild: UniElement): UniElement | null;
    remove(): void;
    dispatchEvent(type: string, value: UniEvent$1): void;
    dispatchEvent(value: UniEvent$1): void;
    scrollTo(x: number, y: number): void;
    scrollBy(x: number, y: number): void;
    querySelector(selector: string): UniElement | null;
    querySelectorAll(selector: string): UniElement[] | null;
    focus(): void;
    blur(): void;
    getIOSView(): any;
    /**
     * 当前平台不支持此方法，不作实现
     */
    getAndroidView: any;
    /**
     * 当前平台不支持此方法，不作实现
     */
    getAndroidActivity: any;
    /**
     * @deprecated use .uniPage
     */
    getPage(): UniPage | null;
    animate(keyframes: UniAnimationKeyframe | UniAnimationKeyframe[], options: number | UniAnimationOption): UniAnimation | null;
    /**
     * 当前平台不支持此方法，不作实现
     */
    getHarmonyController(): any;
    getHarmonyController<T>(): T | null;
    requestFullscreen(options?: RequestFullscreenOptions | null | undefined): void;
    protected getDelegate<T = any>(prop: string): T | undefined;
    protected setDelegate(prop: string, value: any): boolean;
    static buildEvent(nativeEvent: NativeEvent, page: UniNativePage, event?: UniEvent): UniEvent;
}

declare class UniTextElementImpl extends UniElementImpl implements UniTextElement {
    get value(): string;
    set value(val: string);
    getTextExtra(): any;
}

declare class UniCommentElementImpl extends UniElementImpl implements UniCommentElement {
    get [Symbol.toStringTag](): string;
    text: string;
}

interface IUniNativePage extends UniNativePage {
    waitNativeRender(callback: () => void): void;
}

declare class UniDocumentImpl {
    page?: IUniNativePage;
    constructor(page?: IUniNativePage);
    createElement(): void;
    createComment(): void;
    waitNativeRender(callback: () => void): void;
}

declare class UniPageImpl implements UniPage {
    route: string;
    options: UTSJSONObject;
    vm: unknown;
    $vm: unknown;
    _nativePageId: string;
    __nativePage: UniNativePageImpl | null;
    /**
     * @internal
     */
    $fontFamilySet: Set<string>;
    constructor();
    onLayoutChange(callback: UniPageOnLayoutChangeCallback): number;
    offLayoutChange(id: number): void;
    get __nativePageId(): string;
    set __nativePageId(value: string);
    get width(): number;
    get height(): number;
    get statusBarHeight(): number;
    getNativePage(): UniNativePageImpl;
    getPageStyle(): UTSJSONObject;
    $getPageStyle(): UTSJSONObject;
    setPageStyle(style: UTSJSONObject): void;
    $setPageStyle(style: UTSJSONObject): void;
    getParentPage(): UniPage | null;
    $dialogPages: UniPage[];
    getDialogPages(): UniPage[];
    $systemDialogPages: UniPage[];
    $getSystemDialogPages(): UniPage[];
    __$$getSystemDialogPages(): UniPage[];
    getElementById(id: string): UniElement | null;
    querySelector(selector: string): UniElement | null;
    querySelectorAll(selector: string): UniElement[] | null;
    /**
     * @internal
     */
    getNodeById<T extends UniElement = UniElement>(id: string): T | null;
    getAndroidView(): unknown;
    getIOSView(): unknown;
    getHTMLElement(): UniElement | null;
    get pageBody(): UniPageBody;
    get safeAreaInsets(): _dcloudio_uni_app_x_types_native.UniSafeAreaInsets;
    exitFullscreen(options?: ExitFullscreenOptions | null): void;
    get fullscreenElement(): UniElement | null;
    getAndroidActivity(): unknown;
    createElement(tagName: string): UniElement;
    /**
     * 监听页面渲染变化更新事件
     * 前端封装为页面的生命周期 onLayout
     */
    onRenderChange(callback: UniPageOnRenderChangeCallback): number;
    /**
     * 取消监听页面渲染变化更新事件
     */
    offRenderChange(id: number): void;
    onTouchStart(callback: () => void): number;
    offTouchStart(id: number): void;
    onTouchEnd(callback: () => void): number;
    offTouchEnd(id: number): void;
    takeSnapshot(options?: TakeSnapshotOptions): void;
}

declare class UniPageManagerImpl implements UniPageManager {
    app: UniNativeAppImpl;
    private _pages;
    constructor(app: UniNativeAppImpl);
    createPage(pageUrl: string, pageId: string, pageStyle: Map<string, unknown>, pageOptions?: Map<string, any> | null): UniNativePageImpl;
    /**
     * 兼容 iOS 旧版接口，后续会删除
     */
    createDialogPage(parentPageId: string, pageId: string, pageUrl: string, pageStyle: Map<string, any | null>): UniNativePageImpl;
    createDialogPage(pageUrl: string, pageId: string, pageStyle: Map<string, any | null>, parentPage?: IUniNativePage | null, dialogOptions?: Map<string, any | null> | null, pageOptions?: Map<string, any> | null): UniNativePageImpl;
    findPageById(pageId: string): UniNativePageImpl | null;
    /**
     * @internal
     */
    getTopPage(): UniNativePageImpl | null;
    /**
     * @internal
     */
    getBottomPage(): UniNativePageImpl | null;
    /**
     * @internal
     */
    removePage(pageId: string): void;
}

type NativeApp = typeof nativeApp;
declare class UniNativeAppImpl implements UniNativeApp {
    /**
     * 原始 app 实例
     */
    private app;
    appid: string;
    pageManager: UniPageManagerImpl;
    nativePageManager: NativeApp['pageManager'];
    appTheme: string;
    constructor(app: NativeApp);
    onEvent(event: string): void;
    addEventListener<T>(event: 'onShow' | 'onHide' | 'onExit' | 'onThemeChange' | 'onError' | 'onNewIntent', callback: (event: T) => void): UniCallbackWrapper$1;
    removeEventListener(event: string, callbackWrapper: UniCallbackWrapper$1): void;
    addKeyEventListener(event: 'onBackButton', callback: (event: UniKeyEvent) => boolean): void;
    quit(): void;
    getAppStartDuration(): number;
    loadFontFace(options: NativeLoadFontFaceOptions): void;
    getRedirectInfo(): Map<string, any | null>;
    connectResizeObserver(observerId: string, callback?: (res: any) => void): void;
    observeResizeObserver(observerId: string, pageId: string, elemId: string): void;
    unobserveResizeObserver(observerId: string, pageId: string, elemId: string): void;
    disconnectResizeObserver(observerId: string): void;
    getLaunchOptionsSync(): {
        appScheme: string;
        appLink: string;
    };
    getAndroidApplication(): void;
}

type UniNativePageWithNativeMethods = ReturnType<(typeof nativeApp.pageManager)['createPage']>;
declare class UniNativePageImpl implements IUniNativePage {
    get pageUrl(): string;
    pageId: string;
    get width(): number;
    get height(): number;
    get statusBarHeight(): number;
    __uniPage: UniPageImpl | null;
    get type(): string;
    document: any;
    /**
     * 关联的 UniApp 实例
     * @internal
     */
    app: UniNativeAppImpl;
    /**
     * 原始 page 实例
     */
    page: UniNativePageWithNativeMethods;
    fullscreenElement: UniElement | null;
    get safeAreaInsets(): _dcloudio_uni_app_x_types_native.UniSafeAreaInsets;
    constructor(app: UniNativeAppImpl, pageUrl: string, pageId: string, pageStyle: Map<string, unknown>, pageOptions?: Map<string, any> | null, page?: UniNativePageWithNativeMethods);
    getIOSView(): unknown;
    get pageBody(): UniPageBody;
    startRender(): void;
    startRender(callback?: (() => void) | null): void;
    show(options?: Map<string, any> | null | undefined, callback?: (() => void) | null | undefined): void;
    close(options?: Map<string, any> | null | undefined, callback?: (() => void) | null | undefined): void;
    updateStyle(style: Map<string, any>): void;
    createDocument(documentData: INodeData): UniDocument;
    addPageEventListener(type: 'onReady' | 'onShow' | 'onHide' | 'onTabItemTap' | 'onUnload' | 'onReachBottom' | 'onPullDownRefresh' | 'onPageScroll' | 'onResize' | 'onWebViewServiceMessage' | 'onPopGesture' | 'onRestart', callback: (event: UniPageEvent) => void): UniCallbackWrapper$1;
    addPageScrollEventListener(callback: (event: UniPageScrollEvent) => void): UniCallbackWrapper$1;
    viewToTempFilePath(options: ViewToTempFilePathOptions): void;
    loadFontFace(options: NativeLoadFontFaceOptions): void;
    startPullDownRefresh(): void;
    setEnablePullDownRefresh(enable: boolean): void;
    stopPullDownRefresh(): void;
    getPageRenderDuration(): number;
    getPageLayoutDuration(): number;
    getPageRenderCount(): number;
    getPageLayoutCount(): number;
    getFirstRenderStartTime(): number;
    getFirstLayoutStartTime(): number;
    getFirstPageRenderDuration(): number;
    getFirstPageLayoutDuration(): number;
    getCreatedElementCount(): number;
    getCreatedElementDuration(): number;
    getAndroidActivity(): unknown;
    getAndroidView(): unknown;
    getPageStyle(): UTSJSONObject;
    setPageStyle(style: UTSJSONObject): void;
    waitNativeRender(callback: () => void): void;
    applyStatusBarStyle(): void;
}

declare class GlobalDocument {
    uniPage: UniNativePageImpl;
    get body(): any;
    private checkRootDocument;
    createElement(data: string): UniElement;
    createComment(data: string): UniElement;
    dispose(): void;
}

declare class UniScrollViewElementImpl extends UniElementImpl implements UniScrollViewElement {
    static buildEvent(nativeEvent: NativeEvent, page: UniNativePageImpl, event?: UniEvent): UniEvent;
}

declare class UniRichTextNativeElementImpl extends UniElementImpl implements UniRichTextNativeElement {
    static buildEvent(nativeEvent: NativeEvent, page: UniNativePageImpl, event?: UniEvent): UniEvent;
}

declare class UniImageElementImpl extends UniElementImpl implements UniImageElement {
    _src: string;
    get src(): string;
    set src(value: string);
    onload(): void | null;
    static buildEvent(nativeEvent: NativeEvent, page: any, event?: UniEvent): UniEvent;
}

declare function setUniApp(app: UniNativeApp): void;
declare function getUniApp(): UniNativeApp | null;

declare function buildEvent(event: NativeEvent, pageId: string, uniEvent?: UniEvent): Event;

declare class UniMouseEvent extends UniEvent implements MouseEvent {
    x: number;
    y: number;
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
    screenX: number;
    screenY: number;
    constructor(type: string, x: number, y: number, clientX: number, clientY: number, pageX: number, pageY: number, screenX: number, screenY: number);
}
interface NativeEventForUniMouseEvent extends NativeEvent {
    x: number;
    y: number;
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
    screenX: number;
    screenY: number;
}

declare class UniInputEventDetail implements InputEventDetail$1 {
    value: string;
    cursor: number;
    keyCode: number;
    constructor(value: string, cursor: number, keyCode: number);
    constructor(detail: InputEventDetail$1);
}
declare class UniInputEvent extends UniEvent implements InputEvent$1 {
    detail: UniInputEventDetail;
    constructor(type: string, detail: InputEventDetail$1);
}
declare const InputEvent: typeof UniInputEvent;
declare const InputEventDetail: typeof UniInputEventDetail;
interface NativeEventForUniInputEvent extends NativeEvent {
    detail: UniInputEventDetail;
}

declare class UniPointerEvent extends UniEvent implements PointerEvent {
    x: number;
    y: number;
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
    screenX: number;
    screenY: number;
    constructor(type: string, x: number, y: number, clientX: number, clientY: number, pageX: number, pageY: number, screenX: number, screenY: number);
}
interface NativeEventForUniPointerEvent extends NativeEvent {
    x: number;
    y: number;
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
    screenX: number;
    screenY: number;
}

declare class UniTouch implements Touch {
    clientX: number;
    clientY: number;
    identifier: number;
    pageX: number;
    pageY: number;
    screenX: number;
    screenY: number;
    force: number | null;
}
declare class UniTouchEvent extends UniEvent implements TouchEvent {
    touches: UniTouch[];
    changedTouches: UniTouch[];
    constructor(type: string, touches: UniTouch[], changedTouches: UniTouch[]);
}
interface NativeEventForUniTouchEvent extends NativeEvent {
    touches: UniTouch[];
    changedTouches: UniTouch[];
}

declare class UniCustomEventOptions<T> implements CustomEventOptions<T> {
    detail: T;
    constructor(detail: T);
}
declare class UniCustomEvent<T> extends UniEvent implements CustomEvent<T> {
    detail: T;
    constructor(type: string, detail: T);
    constructor(type: string, options: UniCustomEventOptions<T>);
}

declare class UniImageLoadEventDetail implements UniImageLoadEventDetail$1 {
    width: number;
    height: number;
    constructor(detail: UniImageLoadEventDetail$1);
}
declare class UniImageLoadEvent extends UniCustomEvent<UniImageLoadEventDetail> implements UniImageLoadEvent$1 {
    constructor(type: string, detail: UniImageLoadEventDetail$1);
}
interface NativeEventForUniImageLoadEvent extends NativeEvent {
    detail: UniImageLoadEventDetail;
}

declare class UniImageErrorEventDetail implements UniImageErrorEventDetail$1 {
    errMsg: string;
    constructor(detail: UniImageErrorEventDetail$1);
}
declare class UniImageErrorEvent extends UniCustomEvent<UniImageErrorEventDetail> implements UniImageErrorEvent$1 {
    constructor(type: string, detail: UniImageErrorEventDetail$1);
}
interface NativeEventForUniImageErrorEvent extends NativeEvent {
    detail: UniImageErrorEventDetail;
}

declare class UniScrollEventDetail implements UniScrollEventDetail$1 {
    scrollTop: number;
    scrollLeft: number;
    scrollHeight: number;
    scrollWidth: number;
    deltaY: number;
    deltaX: number;
    constructor(detail: UniScrollEventDetail$1);
}
declare class UniScrollEvent extends UniCustomEvent<UniScrollEventDetail> implements UniScrollEvent$1 {
    constructor(type: string, detail: UniScrollEventDetail$1);
}
interface NativeEventForUniScrollEvent extends NativeEvent {
    detail: UniScrollEventDetail;
}

declare class UniScrollToLowerEventDetail implements UniScrollToLowerEventDetail$1 {
    direction: string;
    constructor(detail: UniScrollToLowerEventDetail$1);
}
declare class UniScrollToLowerEvent extends UniCustomEvent<UniScrollToLowerEventDetail> implements UniScrollToLowerEvent$1 {
    constructor(type: string, detail: UniScrollToLowerEventDetail);
}
interface NativeEventForUniScrollToLowerEvent extends NativeEvent {
    detail: UniScrollToLowerEventDetail;
}

declare class UniScrollToUpperEventDetail implements UniScrollToUpperEventDetail$1 {
    direction: string;
    constructor(detail: UniScrollToUpperEventDetail$1);
}
declare class UniScrollToUpperEvent extends UniCustomEvent<UniScrollToUpperEventDetail> implements UniScrollToUpperEvent$1 {
    constructor(type: string, detail: UniScrollToUpperEventDetail);
}
interface NativeEventForUniScrollToUpperEvent extends NativeEvent {
    detail: UniScrollToUpperEventDetail;
}

declare class UniRefresherEventDetail implements UniRefresherEventDetail$1 {
    dy: number;
    constructor(dy: number);
    constructor(data: UniRefresherEventDetail$1);
}
declare class UniRefresherEvent extends UniEvent implements RefresherEvent {
    detail: UniRefresherEventDetail$1;
    constructor(type: string, dy: number);
    constructor(type: string, detail: UniRefresherEventDetail$1);
}
interface NativeEventForUniRefresherEvent extends NativeEvent {
    detail: UniRefresherEventDetail;
}

declare class UniNativeViewInitEventDetail implements UniNativeViewInitEventDetail$1 {
    element: UniNativeViewElement;
    constructor(data: UniNativeViewInitEventDetail$1);
}
declare class UniNativeViewInitEvent extends UniCustomEvent<UniNativeViewInitEventDetail> implements UniNativeViewInitEvent$1 {
    constructor(type: string, detail: UniNativeViewInitEventDetail$1);
}
interface NativeEventDetailForUniNativeViewInitEvent {
    element: ElementInfo;
}
interface NativeEventForUniNativeViewInitEvent extends NativeEvent {
    detail: NativeEventDetailForUniNativeViewInitEvent;
}

declare class UniNativeViewReadyEventDetail implements UniNativeViewReadyEventDetail$1 {
    element: UniNativeViewElement;
    constructor(data: UniNativeViewReadyEventDetail$1);
}
declare class UniNativeViewReadyEvent extends UniCustomEvent<UniNativeViewReadyEventDetail> implements UniNativeViewReadyEvent$1 {
    constructor(type: string, detail: UniNativeViewReadyEventDetail$1);
}
interface NativeEventDetailForUniNativeViewReadyEvent {
    element: ElementInfo;
}
interface NativeEventForUniNativeViewReadyEvent extends NativeEvent {
    detail: NativeEventDetailForUniNativeViewReadyEvent;
}

declare class UniNativeViewEvent extends UniCustomEvent<UTSJSONObject> implements UniNativeViewEvent$1 {
}
interface NativeEventForUniNativeViewEvent extends NativeEvent {
    detail: UTSJSONObject;
}

declare class UniRichTextNativeItemClickEventDetail implements UniRichTextNativeItemClickEventDetail$1 {
    src: string | null;
    href: string | null;
    constructor(detail: UniRichTextNativeItemClickEventDetail$1);
}
declare class UniRichTextNativeItemClickEvent extends UniCustomEvent<UniRichTextNativeItemClickEventDetail> implements UniRichTextNativeItemClickEvent$1 {
    constructor(type: string, detail: UniRichTextNativeItemClickEventDetail$1);
}
interface NativeEventForUniRichTextNativeItemClickEvent extends NativeEvent {
    detail: UniRichTextNativeItemClickEventDetail;
}

declare class fullscreenchangeEvent extends UniEvent {
    constructor();
}

declare class FullscreenError extends UniEvent implements FullscreenError$1 {
    errCode: FullscreenErrorCode;
    errSubject: 'requestFullscreen' | 'exitFullscreen';
    data: any;
    errMsg: string;
    cause: Error | null;
    constructor(errSubject: 'requestFullscreen' | 'exitFullscreen', errCode: FullscreenErrorCode, errMsg?: string);
}
declare class AlreadyFullScreenError extends FullscreenError {
    constructor();
}
declare class ElementNotSupportFullScreenError extends FullscreenError {
    constructor();
}
declare class NoElementFullScreenError extends FullscreenError {
    constructor(errSubject: 'requestFullscreen' | 'exitFullscreen');
}
declare class PageNotReadyOrDestroyedError extends FullscreenError {
    constructor(errSubject: 'requestFullscreen' | 'exitFullscreen');
}
declare class ComponentNotReadyError extends FullscreenError {
    constructor(errSubject: 'requestFullscreen' | 'exitFullscreen');
}
declare class fullscreenerrorEvent extends UniEvent {
    constructor();
}
declare function getFullscreenError(errSubject: 'requestFullscreen' | 'exitFullscreen', errCode?: number): FullscreenError$1;

declare function waitNativeRender(callback: () => void): void;

export { AlreadyFullScreenError, CSSStyleDeclaration, ComponentNotReadyError, DOMRect, type ElementInfo, ElementNotSupportFullScreenError, FullscreenError, GlobalDocument, InputEvent, InputEventDetail, type NativeEvent, type NativeEventDetailForUniNativeViewInitEvent, type NativeEventDetailForUniNativeViewReadyEvent, type NativeEventForUniImageErrorEvent, type NativeEventForUniImageLoadEvent, type NativeEventForUniInputEvent, type NativeEventForUniMouseEvent, type NativeEventForUniNativeViewEvent, type NativeEventForUniNativeViewInitEvent, type NativeEventForUniNativeViewReadyEvent, type NativeEventForUniPointerEvent, type NativeEventForUniRefresherEvent, type NativeEventForUniRichTextNativeItemClickEvent, type NativeEventForUniScrollEvent, type NativeEventForUniScrollToLowerEvent, type NativeEventForUniScrollToUpperEvent, type NativeEventForUniTouchEvent, NativeMap, NoElementFullScreenError, NodeData, PageNotReadyOrDestroyedError, UNI_BASE_EVENT_TYPES, UniCallbackWrapper, UniCommentElementImpl, UniCustomEvent, UniCustomEventOptions, UniDocumentImpl, UniElementImpl, UniEvent, UniImageElementImpl, UniImageErrorEvent, UniImageErrorEventDetail, UniImageLoadEvent, UniImageLoadEventDetail, UniInputEvent, UniInputEventDetail, UniMouseEvent, UniNativeViewEvent, UniNativeViewInitEvent, UniNativeViewInitEventDetail, UniNativeViewReadyEvent, UniNativeViewReadyEventDetail, UniPointerEvent, UniRefresherEvent, UniRefresherEventDetail, UniRichTextNativeElementImpl, UniRichTextNativeItemClickEvent, UniRichTextNativeItemClickEventDetail, UniScrollEvent, UniScrollEventDetail, UniScrollToLowerEvent, UniScrollToLowerEventDetail, UniScrollToUpperEvent, UniScrollToUpperEventDetail, UniScrollViewElementImpl, UniTextElementImpl, UniTouch, UniTouchEvent, buildElement, buildEvent, define, find, fullscreenchangeEvent, fullscreenerrorEvent, getFullscreenError, getUniApp, setUniApp, waitNativeRender };
