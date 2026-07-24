import { InputEvent as IInputEvent, InputEventDetail as IInputEventDetail } from "@dcloudio/uni-app-x/types/native";
import { UniEvent } from './UniEvent';
export declare class UniInputEventDetail implements IInputEventDetail {
    value: string;
    cursor: number;
    keyCode: number;
    constructor(detail: IInputEventDetail);
}
export declare class UniInputEvent extends UniEvent implements IInputEvent {
    detail: UniInputEventDetail;
    constructor(type: string, detail: IInputEventDetail);
}
