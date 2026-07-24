import type { UniIntersectionObserver as IUniIntersectionObserver, UniIntersectionObserverMargins as IUniIntersectionObserverMargins, UniIntersectionObserverRectResult as IUniIntersectionObserverRectResult, UniIntersectionObserverObserveCallbackResult as IUniIntersectionObserverObserveCallbackResult, UniIntersectionObserverObserveCallback as IUniIntersectionObserverObserveCallback, CreateIntersectionObserverOptions as ICreateIntersectionObserverOptions } from './UniIntersectionObserver-types';
import { UniElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniElement&1.0.0";
import { addEventListenerByProxy, removeEventListenerByProxy } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/index&1.0.0";
import type { DOMRect } from './DOMRect';
/**
 * IntersectionObserver调研
 * - 被观测的元素必须是root的后代
 * - 被观测的元素必须是滚动元素的后代
 * - root可以为任意祖先节点，多层嵌套滚动的子元素也可以观察到
 * - 触发阈值为双向检测，从大到小可以触发，从小到大也可以触发
 * - 微信observe之前多次调用relativeTo只生效最先触发的元素，web端只生效最后relativeTo的元素。此场景并不常用，暂时使用web端规范
 * - 被观测元素或观测元素移出、挂载、隐藏、显示时机均会触发
 */
type checkIntersectionStatus = 'normal' | 'show' | 'hide' | 'appear' | 'disappear';
class UniIntersectionObserver implements IUniIntersectionObserver {
    private _rootElement: UniElementImpl;
    private _relativeToElement: UniElementImpl | null = null;
    private _targetElement: UniElementImpl | null = null;
    private _observeCallback: IUniIntersectionObserverObserveCallback | null = null;
    private _relativeToSelector: string | null = null;
    private _targetSelector: string | null = null;
    private _margins: IUniIntersectionObserverMargins = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    };
    private _observeAll: boolean = false;
    private _initialRatio: number = 0;
    private _thresholds: number[] = [0];
    private _relativeToAreaChangeCallback: Function | null = null;
    private _targetAreaChangeCallback: Function | null = null;
    private _checkIntersectionTimes: number = 0;
    private _lastIntersectionRatio: number = 0;
    constructor(component: any, options: ICreateIntersectionObserverOptions) {
        if (!component ||
            !component.$el ||
            !(component.$el instanceof UniElementImpl) ||
            !(component.$el.parentElement instanceof UniElementImpl)) {
            throw new Error('Invalid component parameter for createIntersectionObserver');
        }
        this._rootElement = component.$el.parentElement as UniElementImpl;
        this._observeAll = options.observeAll || false;
        if (this._observeAll) {
            throw new Error('observeAll is not supported');
        }
        this._initialRatio = options.initialRatio || 0;
        this._lastIntersectionRatio = this._initialRatio;
        this._thresholds = options.thresholds ? options.thresholds.sort() : [0];
    }
    relativeTo(selector: string, margins?: IUniIntersectionObserverMargins | null): IUniIntersectionObserver {
        this._relativeToSelector = selector;
        if (margins) {
            this._margins.left = margins.left || 0;
            this._margins.right = margins.right || 0;
            this._margins.top = margins.top || 0;
            this._margins.bottom = margins.bottom || 0;
        }
        return this;
    }
    relativeToViewport(margins?: IUniIntersectionObserverMargins | null): IUniIntersectionObserver {
        this._relativeToSelector = null;
        if (margins) {
            this._margins.left = margins.left || 0;
            this._margins.right = margins.right || 0;
            this._margins.top = margins.top || 0;
            this._margins.bottom = margins.bottom || 0;
        }
        return this;
    }
    observe(targetSelector: string, callback: IUniIntersectionObserverObserveCallback): void {
        // 容错多次调用observe的场景
        this.disconnect();
        this._targetSelector = targetSelector;
        this._observeCallback = callback;
        if (!this._relativeToSelector) {
            this._relativeToElement = this._rootElement.page?.document?.body as UniElementImpl | null;
        }
        else {
            this._relativeToElement = this._rootElement.querySelector(this._relativeToSelector) as UniElementImpl | null;
        }
        if (!this._relativeToElement) {
            return;
        }
        if (!this._targetSelector) {
            return;
        }
        this._targetElement = this._rootElement.querySelector(this._targetSelector) as UniElementImpl | null;
        if (!this._targetElement) {
            return;
        }
        const relativeToFrameNode = this._relativeToElement.frameNode;
        if (!relativeToFrameNode) {
            return;
        }
        const targetFrameNode = this._targetElement.frameNode;
        if (!targetFrameNode) {
            return;
        }
        this._targetAreaChangeCallback = this._relativeToAreaChangeCallback = () => {
            this._wrapCheckIntersection();
        };
        /**
         * 相交api实现背景：water-flow组件任何滚动事件都不会触发、或者不能绑定。用户如果要实现滚动到底部加载没有方案可用。
         * 设想如下场景，water-flow初始仅包含一个flow-item，用于触发加载更多。此时会触发一次相交观测回调，加载了第一页内容放在了加载更多之前，加载更多被移出屏幕外。在此场景下有如下问题。
         * 加载更多组件attribute onAreaChange、onDetach、onDisappear均不会触发
         * 加载更多组件commonEvent setOnSizeChange、setOnDisappear、setOnVisibleAreaApproximateChange均不会触发
         * 期望onAreaChange一个事件就能覆盖所有情况
         * 另外flow-item onVisibleAreaChange报错`Method not implemented.`
         *
         * 涉及如下issue
         * - [FlowItem的frameNode不支持onVisibleAreaChange](https://issuereporter.developer.huawei.com/detail/250425201721058/comment)
         * - [FlowItem组件onAreaChange部分情况不触发](https://issuereporter.developer.huawei.com/detail/250425150719047/comment)
         */
        addEventListenerByProxy(relativeToFrameNode.commonAttribute, 'onAreaChange', this._relativeToAreaChangeCallback);
        addEventListenerByProxy(targetFrameNode.commonAttribute, 'onAreaChange', this._targetAreaChangeCallback);
        this._wrapCheckIntersection();
    }
    private isReachNextThreshold(intersectionRatio: number): boolean {
        for (let i = 0; i < this._thresholds.length; i++) {
            const threshold = this._thresholds[i];
            if (this._lastIntersectionRatio <= threshold && intersectionRatio >= threshold ||
                this._lastIntersectionRatio >= threshold && intersectionRatio <= threshold) {
                return true;
            }
        }
        return false;
    }
    private _wrapCheckIntersection() {
        const document = this._targetElement?.page.document;
        if (!document) {
            this.checkIntersection();
            return;
        }
        document.waitNativeRender(() => {
            this.checkIntersection();
        });
    }
    private checkIntersection() {
        const relativeToRect = this._relativeToElement!.getBoundingClientRect();
        const targetRect = this._targetElement!.getBoundingClientRect();
        const intersectionRect = this.getIntersectionRect(relativeToRect, targetRect);
        const intersectionRatio = intersectionRect.width * intersectionRect.height / (targetRect.width * targetRect.height);
        if (this._checkIntersectionTimes === 0 && intersectionRatio === this._initialRatio) {
            return;
        }
        if (!this.isReachNextThreshold(intersectionRatio)) {
            return;
        }
        if (this._lastIntersectionRatio === intersectionRatio) {
            return;
        }
        this._checkIntersectionTimes++;
        this._lastIntersectionRatio = intersectionRatio;
        this._observeCallback && this._observeCallback({
            boundingClientRect: targetRect,
            dataset: this._targetElement!.dataset,
            id: this._targetElement!.getAttribute('id') || '',
            intersectionRatio: intersectionRatio,
            intersectionRect: intersectionRect,
            relativeRect: relativeToRect,
            time: Date.now()
        } as IUniIntersectionObserverObserveCallbackResult);
    }
    private getIntersectionRect(relativeToRect: DOMRect, targetRect: DOMRect): IUniIntersectionObserverRectResult {
        const left = Math.max(relativeToRect.left + (this._margins.left || 0), targetRect.left);
        const right = Math.min(relativeToRect.right - (this._margins.right || 0), targetRect.right);
        const top = Math.max(relativeToRect.top + (this._margins.top || 0), targetRect.top);
        const bottom = Math.min(relativeToRect.bottom - (this._margins.bottom || 0), targetRect.bottom);
        const width = right - left;
        const height = bottom - top;
        const intersectionRect: IUniIntersectionObserverRectResult = {
            left: left,
            top: top,
            width: width,
            height: height,
            right: right,
            bottom: bottom,
        };
        if (width <= 0 || height <= 0) {
            intersectionRect.width = 0;
            intersectionRect.height = 0;
            intersectionRect.left = 0;
            intersectionRect.top = 0;
            intersectionRect.right = 0;
            intersectionRect.bottom = 0;
        }
        return intersectionRect;
    }
    disconnect(): void {
        if (this._targetElement?.frameNode && this._targetAreaChangeCallback) {
            removeEventListenerByProxy(this._targetElement.frameNode.commonAttribute, 'onAreaChange', this._targetAreaChangeCallback);
        }
        if (this._relativeToElement?.frameNode && this._relativeToAreaChangeCallback) {
            removeEventListenerByProxy(this._relativeToElement.frameNode.commonAttribute, 'onAreaChange', this._relativeToAreaChangeCallback);
        }
    }
}
function createIntersectionObserver(component: any, options: ICreateIntersectionObserverOptions) {
    return new UniIntersectionObserver(component, options);
}
export { createIntersectionObserver, UniIntersectionObserver, };
export type { ICreateIntersectionObserverOptions as CreateIntersectionObserverOptions, IUniIntersectionObserverMargins as UniIntersectionObserverMargins, IUniIntersectionObserverRectResult as UniIntersectionObserverRectResult, IUniIntersectionObserverObserveCallbackResult as UniIntersectionObserverObserveCallbackResult, IUniIntersectionObserverObserveCallback as UniIntersectionObserverObserveCallback };
