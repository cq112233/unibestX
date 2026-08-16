import { UniTouch, UniTouchEvent } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniTouchEvent/UniTouchEvent&1.0.0";
import type { UniElementImpl } from '../UniElement';
import { getPointer } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/index&1.0.0";
function createTouch<T extends FrameNode | null = FrameNode | null>(element: UniElementImpl<T>, event: TouchObject): UniTouch {
    const pointer = getPointer(element, event);
    const uniTouch = new UniTouch();
    uniTouch.clientX = pointer.clientX;
    uniTouch.clientY = pointer.clientY;
    uniTouch.pageX = pointer.pageX;
    uniTouch.pageY = pointer.pageY;
    uniTouch.screenX = event.screenX;
    uniTouch.screenY = pointer.screenY;
    uniTouch.identifier = event.id;
    // TODO uniTouch.force
    return uniTouch;
}
let lastTouchEventId: string = '';
let lastTouchEvent: UniTouchEvent | null = null;
export function init<T extends FrameNode | null = FrameNode | null>(type: string, element: UniElementImpl<T>, event: TouchEvent) {
    const currentId = '' + event.timestamp + '_' + event.type + '_' + event.touches.length + '_' + event.pressure;
    if (lastTouchEventId === currentId && lastTouchEvent) {
        return lastTouchEvent;
    }
    // web规范，touches表示还在屏幕上的所有触摸点的列表
    // 而鸿蒙平台，touchend时，touches可能还包含了已经离开屏幕的触摸点
    // 为了拉齐，需要在end过滤掉发生变化的触摸点（发生变化说明已经离开屏幕？）
    const arkUITouches = event.touches;
    const arkUIChangedTouches = event.changedTouches;
    const touches = (type === 'touchend' ?
        arkUITouches.filter((touch) => !arkUIChangedTouches.some((changedTouch) => changedTouch.id === touch.id)) :
        arkUITouches).map(item => createTouch(element, item));
    const changedTouches = arkUIChangedTouches.map(item => createTouch(element, item));
    const uniEvent = new UniTouchEvent(type, touches, changedTouches);
    lastTouchEventId = currentId;
    lastTouchEvent = uniEvent;
    setTimeout(() => {
        if (lastTouchEventId === currentId) {
            lastTouchEventId = '';
            lastTouchEvent = null;
        }
    }, 350);
    return uniEvent;
}
