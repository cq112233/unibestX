/**
 * 为什么需要这个文件？
 * - ets从d.ts文件引用class作为类型使用会出现各种奇怪的报错
 *
 * 类型处理原则为
 * - interface、type使用d.ts类型
 * - class使用鸿蒙内部类型
 *
 * TODO 目前语法仓库类型过于混乱，比如 ViewToTempFilePathOptions 居然是个class...
 * native-types里面尽量导出interface、type。
 * - 开发者能new的对象，其类型、导出一致，从原生实现导出
 * - 其他开发者只能通过某种方式获取的对象，直接导出interface即可
 */
export { CSSStyleDeclaration } from './dom/CSSStyleDeclaration';
export { DOMRect } from './dom/DOMRect';
export { UniCallbackWrapper } from './dom/UniCallbackWrapper';
export { DrawableContext } from './dom/DrawableContext';
export { UniEvent } from './dom/UniEvent';
export { UniCommentElementImpl as UniCommentElement } from './dom/UniCommentElement';
export { ViewToTempFilePathOptionsForHarmony as ViewToTempFilePathOptions, ViewToTempFilePathSuccessForHarmony as ViewToTempFilePathSuccess, ViewToTempFilePathFailForHarmony as ViewToTempFilePathFail, } from './dom/UniNativePage';
export { UniScrollViewElementImpl as UniScrollViewElement } from './dom/UniScroll/UniScrollViewElement';
export { UniImageElementImpl as UniImageElement } from './dom/UniImageElement';
export { UniMouseEvent as MouseEvent, UniPointerEvent as PointerEvent } from './dom/UniMouseEvent';
export { UniInputEvent as InputEvent, UniInputEventDetail as InputEventDetail } from './dom/UniInputEvent';
export { UniTouch as Touch, UniTouchEvent as TouchEvent } from './dom/UniTouchEvent';
export { UniCustomEvent as CustomEvent, UniCustomEventOptions as CustomEventOptions } from './dom/UniCustomEvent';
export { UniImageLoadEvent, UniImageLoadEventDetail, } from './dom/UniImageLoadEvent';
export { UniImageErrorEventDetail, UniImageErrorEvent } from './dom/UniImageErrorEvent';
export { UniRefresherEventDetail, UniRefresherEvent, UniScrollEventDetail, UniScrollEvent, UniScrollToLowerEventDetail, UniScrollToLowerEvent, UniScrollToUpperEventDetail, UniScrollToUpperEvent, UniRefresherEvent as RefresherEvent } from './dom/UniScrollEvent';
export { UniNativeViewInitEventDetail, UniNativeViewInitEvent, } from './dom/UniNativeViewInitEvent';
export { TakeSnapshotOptionsForHarmony as TakeSnapshotOptions } from './UniPage';
type UniAnimation = ESObject;
export { UniAnimation };
/**
 * 移除类型
 * - Element
 * - Event
 * - UniKeyEvent
 * - UniPageEvent
 * - UniPageScrollEvent
 */
export { INodeData, UniNativePage, TakeSnapshotSuccess, TakeSnapshotFail, GetBoundingClientRectAsyncOptions, UniAnimationKeyframe, UniAnimationOption, RequestFullscreenOptions, UniPageBody, ExitFullscreenOptions, UniPageManager, UniNativeApp, UniDocument, FullscreenError, FullscreenErrorCode } from '@dcloudio/uni-app-x/types/native';
