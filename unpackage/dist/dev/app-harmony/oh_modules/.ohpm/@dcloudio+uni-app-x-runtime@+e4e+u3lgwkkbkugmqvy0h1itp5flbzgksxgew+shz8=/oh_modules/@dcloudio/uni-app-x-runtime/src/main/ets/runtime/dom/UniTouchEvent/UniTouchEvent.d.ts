import { TouchEvent as ITouchEvent, Touch as ITouch } from '@dcloudio/uni-app-x/types/native';
import { UniEvent } from '../UniEvent';
export declare class UniTouch implements ITouch {
    clientX: number;
    clientY: number;
    identifier: number;
    pageX: number;
    pageY: number;
    screenX: number;
    screenY: number;
    force: number | null;
}
export declare class UniTouchEvent extends UniEvent implements ITouchEvent {
    touches: UniTouch[];
    changedTouches: UniTouch[];
    constructor(type: string, touches: UniTouch[], changedTouches: UniTouch[]);
}
