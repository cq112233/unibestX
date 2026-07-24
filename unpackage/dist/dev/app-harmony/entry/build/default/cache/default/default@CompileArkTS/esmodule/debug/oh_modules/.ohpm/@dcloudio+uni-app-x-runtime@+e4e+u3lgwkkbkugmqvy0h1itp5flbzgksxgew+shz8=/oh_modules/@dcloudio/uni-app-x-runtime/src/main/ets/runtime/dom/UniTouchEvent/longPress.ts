import type { UniTouchEvent } from "./UniTouchEvent";
import { init } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniTouchEvent/init&1.0.0";
import { addEventListenerByProxy, removeEventListenerByProxy } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/index&1.0.0";
import type { UniElementImpl } from '../UniElement';
export const LONGPRESS_TIMEOUT = 350;
export const LONGPRESS_THRESHOLD = 10;
const store = new WeakMap<UICommonEvent, Map<Function, Function>>();
export function onLongPress<T extends FrameNode | null = FrameNode | null>(element: UniElementImpl<T>, callback: (evt: UniTouchEvent) => void) {
    const commonEvent = element.frameNode!.commonEvent;
    let longPressTimer: number | null = null;
    const clearLongPressTimer = () => {
        if (longPressTimer) {
            clearTimeout(longPressTimer);
            longPressTimer = null;
        }
    };
    let startPageX = 0;
    let startPageY = 0;
    const newCallback = (evt: TouchEvent): void => {
        switch (evt.type) {
            case TouchType.Down: {
                clearLongPressTimer();
                if (evt.touches.length !== 1) {
                    return;
                }
                const touch = evt.touches[0];
                startPageX = touch.windowX;
                startPageY = touch.windowY;
                longPressTimer = setTimeout(() => {
                    const uniEvent = init('longpress', element, evt);
                    callback(uniEvent);
                }, LONGPRESS_TIMEOUT);
                break;
            }
            case TouchType.Move: {
                if (!longPressTimer) {
                    return;
                }
                if (evt.touches.length !== 1) {
                    return clearLongPressTimer();
                }
                const touch = evt.touches[0];
                const pageX = touch.windowX;
                const pageY = touch.windowY;
                if (Math.abs(pageX - startPageX) > LONGPRESS_THRESHOLD ||
                    Math.abs(pageY - startPageY) > LONGPRESS_THRESHOLD) {
                    return clearLongPressTimer();
                }
                break;
            }
            case TouchType.Up:
            case TouchType.Cancel:
                clearLongPressTimer();
                break;
        }
    };
    addEventListenerByProxy(commonEvent, 'setOnTouch', newCallback);
    let map = store.get(commonEvent);
    if (!map) {
        map = new Map();
        store.set(commonEvent, map);
    }
    map.set(callback, newCallback);
}
export function clearLongPress(element: UniElementImpl) {
    const commonEvent = element.frameNode?.commonEvent;
    commonEvent && store.delete(commonEvent);
}
export function offLongPress<T extends FrameNode | null = FrameNode | null>(element: UniElementImpl<T>, callback: Function) {
    const commonEvent = element.frameNode!.commonEvent;
    const map = store.get(commonEvent);
    if (!map) {
        return;
    }
    const newCallback = map.get(callback);
    if (!newCallback) {
        return;
    }
    removeEventListenerByProxy(commonEvent, 'setOnTouch', newCallback);
    map.delete(callback);
    if (map.size === 0) {
        store.delete(commonEvent);
    }
}
