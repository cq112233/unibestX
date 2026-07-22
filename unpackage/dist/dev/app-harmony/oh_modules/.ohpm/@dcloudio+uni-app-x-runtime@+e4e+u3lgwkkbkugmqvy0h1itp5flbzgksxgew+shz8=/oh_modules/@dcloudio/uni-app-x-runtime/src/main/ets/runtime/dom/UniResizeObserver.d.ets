import { UniResizeObserverEntry as IUniResizeObserverEntry, UniElement as IUniElement, UniBorderBoxSize as IUniBorderBoxSize, UniContentBoxSize as IUniContentBoxSize, UniDevicePixelContentBoxSize as IUniDevicePixelContentBoxSize } from '@dcloudio/uni-app-x/types/native';
import { IUniResizeObserver } from './NativeTypes';
type UniResizeObserverCallback = (entries: IUniResizeObserverEntry[]) => void;
/**
 * 特性记录
 * - 对同一个element多次observe在触发时仅会触发一次
 * - 对同一个element多次observe再unobserve会移除所有的监听
 * - entries内仅包含变动的element，数量不固定
 */
export declare class UniResizeObserver implements IUniResizeObserver {
    private _callback;
    private _elements;
    private _changedElements;
    private _resizeCallback;
    constructor(callback: UniResizeObserverCallback);
    private flush;
    private triggerResize;
    observe(target: IUniElement): void;
    private _unobserve;
    unobserve(target: IUniElement): void;
    disconnect(): void;
}
export { IUniResizeObserverEntry as UniResizeObserverEntry, IUniBorderBoxSize as UniBorderBoxSize, IUniContentBoxSize as UniContentBoxSize, IUniDevicePixelContentBoxSize as UniDevicePixelContentBoxSize };
