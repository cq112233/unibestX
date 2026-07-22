import type { UniElementImpl } from '../dom/UniElement';
interface Pointer {
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
    screenX: number;
    screenY: number;
}
export declare function getPointer<T extends FrameNode | null = FrameNode | null>(element: UniElementImpl<T>, event: ClickEvent | TouchObject): Pointer;
export {};
