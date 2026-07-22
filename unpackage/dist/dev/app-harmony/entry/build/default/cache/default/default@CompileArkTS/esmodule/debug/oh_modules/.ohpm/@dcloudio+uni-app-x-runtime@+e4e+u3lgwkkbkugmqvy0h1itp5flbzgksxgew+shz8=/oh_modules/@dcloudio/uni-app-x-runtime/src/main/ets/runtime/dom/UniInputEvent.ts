import type { InputEvent as IInputEvent, InputEventDetail as IInputEventDetail } from "@dcloudio/uni-app-x/types/native";
import { UniEvent } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniEvent&1.0.0";
export class UniInputEventDetail implements IInputEventDetail {
    value: string;
    cursor: number;
    keyCode: number;
    constructor(detail: IInputEventDetail) {
        this.value = detail.value;
        this.cursor = detail.cursor;
        this.keyCode = detail.keyCode;
    }
}
export class UniInputEvent extends UniEvent implements IInputEvent {
    public detail: UniInputEventDetail;
    constructor(type: string, detail: IInputEventDetail) {
        super(type);
        this.detail = new UniInputEventDetail(detail);
    }
}
