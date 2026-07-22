import { MouseEvent as IMouseEvent } from '@dcloudio/uni-app-x/types/native';
import { UniEvent } from './UniEvent';
export declare class UniMouseEvent extends UniEvent implements IMouseEvent {
    x: number;
    y: number;
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
    screenX: number;
    screenY: number;
    constructor(type: string, x: number, y: number, clientX: number, clientY: number, pageX: number, pageY: number, screenX: number, screenY: number);
}
export type UniPointerEvent = UniMouseEvent;
export declare const UniPointerEvent: typeof UniMouseEvent;
