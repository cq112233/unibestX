import type { UniElementImpl } from '../dom/UniElement';
interface Pointer {
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
    screenX: number;
    screenY: number;
}
export function getPointer<T extends FrameNode | null = FrameNode | null>(element: UniElementImpl<T>, event: ClickEvent | TouchObject): Pointer {
    const screenX = event.windowX;
    const screenY = event.windowY;
    const contentFrameNode = element.page.contentFrameNode;
    const position = contentFrameNode.getPositionToWindow();
    const clientX = screenX - position.x;
    const clientY = screenY - position.y;
    const pageScrollElement = element.page.pageScrollElement;
    const pageX = clientX + (pageScrollElement ? pageScrollElement.scrollLeft : 0);
    const pageY = clientY + (pageScrollElement ? pageScrollElement.scrollTop : 0);
    return {
        clientX,
        clientY,
        pageX,
        pageY,
        screenX,
        screenY
    };
}
