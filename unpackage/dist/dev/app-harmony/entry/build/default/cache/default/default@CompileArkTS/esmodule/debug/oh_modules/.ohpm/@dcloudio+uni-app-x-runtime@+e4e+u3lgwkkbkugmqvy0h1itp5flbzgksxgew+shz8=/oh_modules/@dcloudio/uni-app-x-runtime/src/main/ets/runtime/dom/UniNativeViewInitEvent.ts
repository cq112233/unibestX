import type { UniNativeViewElement as IUniNativeViewElement, UniNativeViewInitEvent as IUniNativeViewInitEvent, UniNativeViewInitEventDetail as IUniNativeViewInitEventDetail } from '@dcloudio/uni-app-x/types/native';
import { UniCustomEvent } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniCustomEvent&1.0.0";
export class UniNativeViewInitEventDetail implements IUniNativeViewInitEventDetail {
    element: IUniNativeViewElement;
    constructor(data: IUniNativeViewInitEventDetail) {
        this.element = data.element;
    }
}
export class UniNativeViewInitEvent extends UniCustomEvent<UniNativeViewInitEventDetail> implements IUniNativeViewInitEvent {
    constructor(type: string, detail: IUniNativeViewInitEventDetail) {
        super(type, new UniNativeViewInitEventDetail(detail));
    }
}
