import { UniIntersectionObserver as IUniIntersectionObserver, UniIntersectionObserverMargins as IUniIntersectionObserverMargins, UniIntersectionObserverRectResult as IUniIntersectionObserverRectResult, UniIntersectionObserverObserveCallbackResult as IUniIntersectionObserverObserveCallbackResult, UniIntersectionObserverObserveCallback as IUniIntersectionObserverObserveCallback, CreateIntersectionObserverOptions as ICreateIntersectionObserverOptions } from './UniIntersectionObserver-types';
declare class UniIntersectionObserver implements IUniIntersectionObserver {
    private _rootElement;
    private _relativeToElement;
    private _targetElement;
    private _observeCallback;
    private _relativeToSelector;
    private _targetSelector;
    private _margins;
    private _observeAll;
    private _initialRatio;
    private _thresholds;
    private _relativeToAreaChangeCallback;
    private _targetAreaChangeCallback;
    private _checkIntersectionTimes;
    private _lastIntersectionRatio;
    constructor(component: ESObject, options: ICreateIntersectionObserverOptions);
    relativeTo(selector: string, margins?: IUniIntersectionObserverMargins | null): IUniIntersectionObserver;
    relativeToViewport(margins?: IUniIntersectionObserverMargins | null): IUniIntersectionObserver;
    observe(targetSelector: string, callback: IUniIntersectionObserverObserveCallback): void;
    private isReachNextThreshold;
    private _wrapCheckIntersection;
    private checkIntersection;
    private getIntersectionRect;
    disconnect(): void;
}
declare function createIntersectionObserver(component: ESObject, options: ICreateIntersectionObserverOptions): UniIntersectionObserver;
export { createIntersectionObserver, UniIntersectionObserver, ICreateIntersectionObserverOptions as CreateIntersectionObserverOptions, IUniIntersectionObserverMargins as UniIntersectionObserverMargins, IUniIntersectionObserverRectResult as UniIntersectionObserverRectResult, IUniIntersectionObserverObserveCallbackResult as UniIntersectionObserverObserveCallbackResult, IUniIntersectionObserverObserveCallback as UniIntersectionObserverObserveCallback, };
