import { DrawableContext, Element as IUniElement, TakeSnapshotOptions, INodeData, UniEvent as IUniEvent, GetBoundingClientRectAsyncOptions, UniAnimation, RequestFullscreenOptions } from '@dcloudio/uni-app-x/types/native';
import { UniCallbackWrapper } from './UniCallbackWrapper';
import { CSSStyleDeclaration, StyleElement } from './CSSStyleDeclaration';
import { NamedNodeMap } from './NamedNodeMap';
import { UniNativeAppImpl } from '../UniNativeApp';
import { FrameNode as FrameNode } from "@ohos.arkui.node";
import { AnimatorResult as AnimatorResult } from "@ohos.animator";
import { UniLayoutFlexNode, UniLayoutMeasureMode, UniLayoutSize } from 'dcloudlayout';
import { ElementOptions, DefaultStyleItem } from './BuiltInElement';
import { UniNativePageImpl } from './UniNativePage';
import { NativeMap } from './NativeMap';
import { DOMRect } from './DOMRect';
import { BusinessError as BusinessError } from "@ohos.base";
import { UniPage } from "@dcloudio/uni-app-x/types/native";
import { StylePropertyMap } from './cssom';
import { CSSStyleValue as ICSSStyleValue } from './cssom/types';
type CurrentElementArgument = [INodeData, UniNativePageImpl] | undefined;
export declare function setCurrentElementArgument(data: INodeData, page: UniNativePageImpl): () => void;
export declare function getCurrentElementArgument(): CurrentElementArgument;
export declare function isScrollElement(ele: UniElementImpl): boolean;
export declare function isRecycleElement(ele: UniElementImpl): boolean;
interface NativeStyleCache {
    position: Position;
    borderColor: EdgeColors;
    borderWidth: EdgeWidths;
    borderStyle: EdgeStyles;
    borderRadius: BorderRadiuses;
    visibility: Visibility;
    hidden: boolean;
    transform: string;
    transformOrigin: string;
}
export interface SnapshotOptions {
    offsetX?: number;
    offsetY?: number;
    success: (res: string) => void;
    fail?: (err: BusinessError) => void;
}
type MeasureFunction = (width: number, widthMode: UniLayoutMeasureMode, height: number, heightMode: UniLayoutMeasureMode) => UniLayoutSize;
interface LayoutNodeCache {
    width: number;
    height: number;
    x: number;
    y: number;
    borderLeft: number;
    borderTop: number;
    borderRight: number;
    borderBottom: number;
}
interface FullscreenLayoutCacheItem {
    key: string;
    args: Array<Object | undefined>;
}
export declare class UniElementImpl<T extends FrameNode | null = FrameNode | null> implements IUniElement, StyleElement {
    needForceRenderAnimationKeys: string[];
    static skipDefaultFrameNodeStyle: boolean;
    static skipDefaultLayoutNodeStyle: boolean;
    private transitionDuration;
    private transitionProperty;
    private isTransitionPropertyAll;
    private transitionTimingFunction;
    private transitionDelay;
    protected fullscreenLayoutCache: Map<string, FullscreenLayoutCacheItem>;
    protected animatorsCache: Map<string, AnimatorResult>;
    __v_skip: boolean;
    classList: string[];
    protected isFullscreen: boolean;
    private _isConnected;
    get isConnected(): boolean;
    get firstChild(): IUniElement | null;
    get lastChild(): IUniElement | null;
    private _parent;
    get parentNode(): IUniElement | null;
    get parentElement(): IUniElement | null;
    get previousSibling(): IUniElement | null;
    get previousElementSibling(): IUniElement | null;
    get nextSibling(): IUniElement | null;
    get nextElementSibling(): IUniElement | null;
    children: IUniElement[];
    childNodes: IUniElement[];
    /**
     * 是否为纯节点，纯节点不会被添加到 children 中
     */
    protected isPureNode: boolean;
    tagName: string;
    nodeName: string;
    dataset: NativeMap<string, Object>;
    attributes: NamedNodeMap;
    private _style;
    private _attributeStyleMap;
    get style(): CSSStyleDeclaration;
    get attributeStyleMap(): StylePropertyMap;
    get scrollWidth(): number;
    get scrollHeight(): number;
    get scrollLeft(): number;
    get scrollTop(): number;
    get offsetLeft(): number;
    get offsetTop(): number;
    get offsetWidth(): number;
    get offsetHeight(): number;
    ext: NativeMap<string, Object>;
    /**
     * @internal
     */
    private __id;
    /**
     * 关联的 UniApp 实例
     * @internal
     */
    app: UniNativeAppImpl;
    /**
     * @internal
     */
    page: UniNativePageImpl;
    get uniPage(): UniPage;
    /**
     * 等待子类初始化
     * @internal
     */
    frameNode: T;
    /**
     * 插槽节点，默认与 frameNode 相同
     */
    get slotFrameNode(): FrameNode | null;
    /**
     * @internal
     */
    layoutNode: UniLayoutFlexNode;
    private eventListeners;
    /**
     * @internal
     */
    _options?: ElementOptions;
    /**
     * 返回默认样式字典，用于初始化默认样式，Web CSS 样式，不支持组合样式(简写)
     */
    static get defaultStyle(): Map<string, DefaultStyleItem>;
    static get defaultFrameNodeStyleKeys(): string[];
    static get initialDefaultStyle(): Map<string, DefaultStyleItem>;
    constructor(data?: INodeData, page?: UniNativePageImpl);
    setStyleValue(key: string, value: ICSSStyleValue): void;
    removeStyleValue(property: string): void;
    protected initClass(): void;
    protected createLayoutNode(): UniLayoutFlexNode;
    protected createFrameNode(): T;
    getNodeId(): string;
    takeSnapshot(options: TakeSnapshotOptions): void;
    /**
     * 此处不实现完整的webcomponent slot。
     *
     * 底层能力不足以实现完整的slot功能。以scroll-view的自定义下拉刷新为例。排版器只能把自定义下拉刷新作为scrol-view的直接子元素来排版。
     * 例如给自定义下拉刷新元素设置height: 100%;则其高度会直接等于scroll-view的高度。
     *
     * slot功能调研记录
     * .children属性返回的element顺序只和appendChild顺序有关，和实际树形结构里面的顺序无关
     * 多次append同一个名称的slot内容，会都push到children内，并且都在对应的slot位置显示
     * slot名称未匹配到时也会push到children内，但是不在界面显示
     *
     * TODO 动态更新slot属性名。两种方式 header.slot = 'footer'; header.setAttribute('slot', 'footer');
     */
    protected slotMap: Map<string, UniElementImpl<FrameNode>[]>;
    protected appendSlotContent(slotName: string, aChild: UniElementImpl): void;
    protected removeSlotContent(slotName: string, aChild: UniElementImpl): void;
    appendChild(aChild: IUniElement): void;
    insertBefore(newChild: IUniElement, refChild?: IUniElement | null | undefined): IUniElement | null;
    insertBefore(newChild: IUniElement): IUniElement | null;
    /**
     * @internal
     */
    protected setConnected(connected: boolean): void;
    protected addFrameNode(frameNode: FrameNode): void;
    protected insertFrameNodeAfter(frameNode: FrameNode, anchor: FrameNode | null): void;
    getRealChildFrameNode(child: UniElementImpl): FrameNode | null;
    isSlotChild(child: UniElementImpl): boolean;
    private addFrameNodeFn;
    protected addNativeNode(index: number, isConnected: boolean): void;
    /**
     * @internal
     */
    updateNativeAttribute(key: string, value: ESObject): void;
    setAttribute(key: string, value: string): void;
    setAnyAttribute(key: string, value: Object): void;
    getAttribute(key: string): string | null;
    getAnyAttribute(key: string): Object;
    hasAttribute(key: string): boolean;
    removeAttribute(key: string): void;
    protected preferBatchSetStyle: boolean;
    protected isDuringBatchSetStyle: boolean;
    protected batchSetStyleStart(): void;
    protected batchSetStyleEnd(): void;
    updateStyle(map: Map<string, Object>): void;
    private updateTransitionStyle;
    private updateTransitionProperty;
    private updateTransitionDuration;
    private clearAnimators;
    private _getNotAttachedPosition;
    private _getPosition;
    private _getSize;
    getBoundingClientRect(): DOMRect;
    /**
     * @deprecated use .page
     */
    private getPageAsync;
    getBoundingClientRectAsync(options?: GetBoundingClientRectAsyncOptions | null | undefined): Promise<DOMRect> | null;
    getDrawableContext(): DrawableContext | null;
    addEventListener<T extends IUniEvent, R>(type: string, callback: (event: T) => R): UniCallbackWrapper;
    animate(keyframes: ESObject | ESObject[], options: ESObject): UniAnimation | null;
    /**
     * 用于在longpress触发时屏蔽click
     * TODO 子元素touchstart事件stopPropagation时，父元素无法准确判断
     */
    private onTouchStartForClick;
    private onTouchStartForClickTimestamp;
    protected initNativeEvent(type: string): Object | void;
    removeEventListener(type: string, callbackWrapper: UniCallbackWrapper): void;
    protected deleteNativeEvent(type: string, res: Object | void): boolean;
    removeChild(aChild: IUniElement): IUniElement | null;
    remove(): void;
    protected removeFrameNode(frameNode: FrameNode): void;
    protected removeNativeNode(): void;
    /**
     * @param bubbles 内部参数，是否冒泡
     */
    dispatchEvent(typeOrValue: string | IUniEvent, value?: IUniEvent, bubbles?: boolean): void;
    scrollTo(x: number, y: number): void;
    scrollBy(x: number, y: number): void;
    querySelector(selector: string): IUniElement | null;
    querySelectorAll(selector: string): IUniElement[];
    focus(): void;
    blur(): void;
    getIOSView(): object;
    getAndroidView(): object | null;
    getAndroidView<T>(): T | null;
    getHarmonyController(): object | null;
    getHarmonyController<T>(): T | null;
    getAndroidActivity(): object;
    /**
     * @deprecated use .uniPage
     */
    getPage(): UniPage | null;
    private resetTransform;
    private setTransform;
    normalizeStyleValue(key: string, value: Object): Object;
    /**
     * @internal
     */
    parseStyle(key: string, value: Object): boolean;
    protected nativeStyleCache: NativeStyleCache;
    protected _commonAttribute: CommonAttribute | null;
    protected batchSetStyleKeys: Set<string>;
    protected applyBatchSetStyle(): void;
    protected updateLayoutNodeStyleWithTransition(key: string, method: string, ...args: Array<Object | undefined>): void;
    protected updateLayoutNodeStyleSync(key: string, method: string, ...args: Array<Object | undefined>): void;
    protected updateLayoutNodeStyle(key: string, method: string, ...args: Array<Object | undefined>): void;
    private handleFullScreenLayout;
    protected updateNativeNodeStyleWithTransition(key: string, value: Object | undefined, commonAttribute?: CommonAttribute): void;
    /**
     * @internal
     */
    updateNativeNodeStyle(key: string, value: Object | undefined, commonAttribute?: CommonAttribute): void;
    protected layoutNodeCache: LayoutNodeCache;
    /**
     * @internal
     */
    checkLayout(): void;
    protected layoutNodeDirty(callback?: () => void, force?: boolean): void;
    private _measureFunction?;
    protected setMeasureFunction(callback: MeasureFunction): void;
    private isFixed;
    checkPosition(isFixed: boolean): void;
    private triggerTransitionEnd;
    getSnapshotPixelMap(): Promise<PixelMap>;
    requestFullscreen(options?: RequestFullscreenOptions | null): void;
    dispose(): void;
}
export {};
