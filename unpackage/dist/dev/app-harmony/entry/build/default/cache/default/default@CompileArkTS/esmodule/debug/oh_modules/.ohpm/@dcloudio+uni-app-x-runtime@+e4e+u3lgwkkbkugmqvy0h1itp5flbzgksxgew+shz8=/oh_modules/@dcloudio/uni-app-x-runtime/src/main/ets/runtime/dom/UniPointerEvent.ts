import { UniMouseEvent } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniMouseEvent&1.0.0";
import type { UniElementImpl } from './UniElement';
import { getPointer } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/index&1.0.0";
export { UniPointerEvent } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniMouseEvent&1.0.0";
export function init<T extends FrameNode | null = FrameNode | null>(element: UniElementImpl<T>, event: ClickEvent) {
    const pointer = getPointer(element, event);
    return new UniMouseEvent('click', pointer.clientX, pointer.clientY, pointer.clientX, pointer.clientY, pointer.pageX, pointer.pageY, pointer.screenX, pointer.screenY);
}
