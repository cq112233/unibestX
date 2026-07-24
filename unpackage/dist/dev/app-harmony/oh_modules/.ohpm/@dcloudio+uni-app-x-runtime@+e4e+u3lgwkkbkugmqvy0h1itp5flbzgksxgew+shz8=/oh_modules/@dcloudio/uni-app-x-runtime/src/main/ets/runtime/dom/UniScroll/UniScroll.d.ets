import { Element as IUniElement, NodeData as INodeData } from '@dcloudio/uni-app-x/types/native';
import { UniElementImpl } from '../UniElement';
import { UniFrameNode } from '../../Node';
import { TinyEmitter as Emitter } from 'tiny-emitter';
import { UniTouchEvent } from '../UniTouchEvent';
import { ModifyEvent } from '../UniEvent';
import { UniCallbackWrapper } from '../UniCallbackWrapper';
import { GenericNodeController } from './utils';
export declare enum ScrollViewDirection {
    None = "none",
    All = "all",
    Horizontal = "horizontal",
    Vertical = "vertical"
}
export interface IOffset {
    x: number;
    y: number;
}
export declare const ScrollViewDirectionMap: Map<ScrollViewDirection, ScrollDirection>;
export declare const ScrollViewBouncesMap: Map<boolean, EdgeEffect>;
export declare const scrollViewShowScrollBarMap: Map<boolean, BarState>;
@ObservedV2
export declare class ScrollViewState {
    direction: ScrollViewDirection;
    bounces: boolean;
    upperThreshold: number;
    lowerThreshold: number;
    scrollTop: number;
    scrollLeft: number;
    scrollIntoView: string;
    scrollWithAnimation: boolean;
    showScrollbar: boolean;
    refresherEnabled: boolean;
    refresherThreshold: number;
    refresherMaxDragDistance: number;
    refresherDefaultStyle: 'black' | 'white' | 'none';
    refresherBackground: ResourceColor;
    refresherTriggered: boolean;
    tagName: 'SCROLL-VIEW' | 'LIST-VIEW' | 'WATERFLOW';
    realShowScrollbar: boolean;
    nestedOptions: NestedScrollOptions;
    /**
     * isNestedParent、isNestedChild仅用来实现nested-scroll-header、nested-scroll-body
     * startnestedscroll等事件再用其他参数
     */
    isNestedParent: boolean;
    isNestedChild: boolean;
    isPreventDefault: boolean;
    refresherElements: UniElementImpl[];
    lastTouchEvent: UniTouchEvent | null;
    emitter: Emitter;
    get realRefresherEnabled(): boolean;
    get realBounces(): boolean;
    get _direction(): ScrollViewDirection;
    get _realBounces(): boolean;
    get _showScrollbar(): boolean;
    get _realShowScrollbar(): boolean;
    get _nestedOptions(): NestedScrollOptions;
}
export declare function isRefresherSlotContent(child: IUniElement): boolean;
/**
 * scroll历史问题记录
 * 方案：refresherEnabled为true时再创建Refresh组件
 * 问题：refresherEnabled初始值为false，此时下拉一下scroll组件。再将refresherEnabled切换为true，之后Refresh组件都无法触发下拉刷新。
 * 调整：修改为refresherEnabled为false时也创建Refresh组件
 * 问题：未启用refresherEnabled的scroll的上bounce无法触发，且会导致嵌套滚动时父滚动元素表现异常
 * 调整：nestedScroll在竖向滚动且启用下拉刷新时，scrollBackward设为SELF_ONLY
 * 问题：list-view依然有上述不能下拉刷新的问题
 * 调整：List组件的nestedScroll需要调整为scrollBackward设为SELF_ONLY且scrollForward也设为SELF_ONLY才能正常刷新，应该是Bug
 * 问题：页面启用下拉刷新且根节点为scroll-view，触发下拉刷新后禁用下拉刷新再启用下拉刷新，如果使用if控制Refresh组件会导致页面内容全部丢失。两个scroll-view嵌套时也会出现类似的问题。
 * 调整：无论是否开启下拉刷新都启用Refresh组件? 闭环了......
 */
@ComponentV2
declare struct ScrollView {
    @Event
    onAboutToAppear: Function;
    @Event
    onAboutToDisappear: Function;
    @Once
    @Require
    @Param
    scroller: Scroller;
    @Once
    @Require
    @Param
    emitter: Emitter;
    @Once
    @Require
    @Param
    state: ScrollViewState;
    @Once
    @Require
    @Param
    attributeUpdater: AttributeModifier<CommonAttribute> | null;
    @Once
    @Require
    @Param
    scrollNodeController: GenericNodeController | null;
    @Local
    pullDownRatio: number;
    @Local
    refreshStatus: RefreshStatus | null;
    @Local
    refreshOffset: number;
    private refresherContentNode?;
    private refresherNodeController;
    private refresherElement;
    /**
     * TODO 这里使用Computed作为watchEffect，调研有无其他实现方式
     */
    get refresherBackground(): ResourceColor;
    /**
     * TODO 这里使用Computed作为watchEffect，调研有无其他实现方式
     */
    get refresherDefaultStyle(): "none" | "black" | "white";
    /**
     * TODO 这里使用Computed作为watchEffect，调研有无其他实现方式
     */
    get refresherThreshold(): number;
    updateRefresher(): void;
    updateRefresherNodeController(): void;
    aboutToAppear(): void;
    aboutToDisappear(): void;
    build(): void;
}
export declare class ScrollViewFrameNode extends UniFrameNode {
    componentInstance: ScrollView;
}
interface ListenerState {
    scrolltoupper: boolean;
    scrolltolower: boolean;
    scroll: boolean;
    scrollend: boolean;
    refresherpulling: boolean;
    refresherrefresh: boolean;
    refresherrestore: boolean;
    refresherabort: boolean;
}
interface NodeSize {
    width: number;
    height: number;
}
interface ActionScrollTo {
    type: 'scrollTo';
    x?: number;
    y?: number;
    animation: boolean;
}
interface ActionScrollBy {
    type: 'scrollBy';
    x?: number;
    y?: number;
    animation: boolean;
}
interface ActionScrollToItem {
    type: 'scrollToItem';
    id: string;
    animation: boolean;
}
interface IScrollStage {
    scrollSource: ScrollSource;
    direction: -1 | 1 | 0;
}
declare class ScrollStages {
    stages: IScrollStage[];
    constructor();
    push(stage: IScrollStage): void;
    clear(): void;
    /**
     * 一次手指拖动引发的滚动，scrollSource会经历ScrollSource.DRAG -> ScrollSource.FLING? -> ScrollSource.EDGE_EFFECT（Spring效果先同向滚动再反向滚动）
     * 强制scrollSource遵循此顺序，可以被用户滚动打断，仅限制手指滑动的流程
     * 惯性滚动限制此次滚动和上次滚动方向一致，注意不可限制EDGE_EFFECT，EDGE_EFFECT本身会进行相反方向的滚动
     */
    check(stage: IScrollStage): boolean;
}
export declare class UniScrollElementImpl extends UniElementImpl<ScrollViewFrameNode> {
    protected state: ScrollViewState;
    protected scroller: Scroller;
    protected emitter: Emitter;
    protected listenerState: ListenerState;
    protected onWillScroll: Function;
    protected handleAreaChange: (oldValue: Area, newValue: Area) => void;
    protected onScrollStop: Function;
    protected onDidScroll: Function;
    protected onScrollStart: Function;
    protected initialScroll: Function;
    protected _onTouchMove: (e: UniTouchEvent) => void;
    protected _onTouchmoveStopPropagation: (e: ModifyEvent) => void;
    protected _onTouchMoveCb: UniCallbackWrapper;
    protected _onTouchmoveStopPropagationCb: UniCallbackWrapper;
    protected canScroll: boolean;
    protected isPageScrollElement: boolean;
    protected scrollQueue: Array<ActionScrollTo | ActionScrollBy | ActionScrollToItem>;
    protected scrollStages: ScrollStages;
    protected showScrollBarTimer: number | null;
    protected widthByAreaChange: number;
    protected heightByAreaChange: number;
    protected scrollNodeController: GenericNodeController;
    /**
     * 单位vp，不舍弃小数
     */
    protected wrapperSize: NodeSize;
    /**
     * 单位vp，不舍弃小数
     */
    protected rootContentSize: NodeSize;
    protected hasWrapperNode: boolean;
    constructor(data?: INodeData);
    /**
     * Bug 初次滚动时机过早时（即使在onAttach之后）scrollWithAnimation为false时，需要延迟很长时间才能滚动到指定位置。
     * 此处改为实际滚动发生前将scrollWithAnimation为false时将滚动动画设置为1ms来实现无动画效果。
     */
    private _scrolled;
    private getRealAnimation;
    protected _scrollTo(x?: number, y?: number, animation?: boolean): void;
    protected _scrollBy(x?: number, y?: number, animation?: boolean): void;
    /**
     * TODO scroll-into-view需要实现滚动到子元素及更深层级的子元素，在scroll-view组件内依赖于UniElement的offsetTop。在list-view组件内如何实现需要再行调研。
     */
    protected _scrollToItem(id: string, animation?: boolean): void;
    protected getChildOffset(child: UniElementImpl): IOffset;
    scrollTo(x: number, y: number): void;
    __scrollTo(x: number, y: number, animation: ScrollAnimationOptions): void;
    scrollBy(x: number, y: number): void;
    protected getCurrentOffset(): OffsetResult;
    set scrollLeft(left: number);
    get scrollLeft(): number;
    set scrollTop(top: number);
    get scrollTop(): number;
    get scrollWidth(): number;
    get scrollHeight(): number;
    private initEmitter;
    createScrollNodeController(): GenericNodeController;
    setAnyAttribute(key: string, value: ESObject): void;
    getAnyAttribute(key: string): ESObject | null;
    protected createFrameNode(): ScrollViewFrameNode;
    protected appendSlotContent(slotName: string, aChild: UniElementImpl): void;
    protected removeSlotContent(slotName: string, aChild: UniElementImpl): void;
    insertBefore(newChild: IUniElement, refChild?: IUniElement | null | undefined): IUniElement | null;
    insertBefore(newChild: IUniElement): IUniElement | null;
    checkLayout(): void;
    updateNativeNodeStyle(key: string, value: Object | undefined, commonAttribute?: CommonAttribute): void;
    updateNativeAttribute(key: string, value: ESObject): void;
    initNativeEvent(type: string): void;
    deleteNativeEvent(type: string, res: void | Object): boolean;
    dispose(): void;
}
export {};
