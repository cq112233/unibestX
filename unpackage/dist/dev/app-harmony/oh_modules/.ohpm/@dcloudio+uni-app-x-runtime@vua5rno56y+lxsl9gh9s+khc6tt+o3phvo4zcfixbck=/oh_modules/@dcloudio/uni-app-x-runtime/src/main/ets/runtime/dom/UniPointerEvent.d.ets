import { UniMouseEvent } from './UniMouseEvent';
import type { UniElementImpl } from './UniElement';
export { UniPointerEvent } from './UniMouseEvent';
export declare function init<T extends FrameNode | null = FrameNode | null>(element: UniElementImpl<T>, event: ClickEvent): UniMouseEvent;
