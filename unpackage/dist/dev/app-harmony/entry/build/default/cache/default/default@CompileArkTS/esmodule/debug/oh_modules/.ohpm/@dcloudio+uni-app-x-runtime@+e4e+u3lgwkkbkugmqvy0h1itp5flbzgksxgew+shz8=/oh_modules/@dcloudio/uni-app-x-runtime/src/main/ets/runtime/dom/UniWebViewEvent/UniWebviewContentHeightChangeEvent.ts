import type { UniWebViewContentHeightChangeEvent as IUniWebViewContentHeightChangeEvent, UniWebViewContentHeightChangeEventDetail as IUniWebViewContentHeightChangeEventDetail } from '@dcloudio/uni-app-x/types/native';
import { UniCustomEvent } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniCustomEvent&1.0.0";
export class UniWebViewContentHeightChangeEventDetail implements IUniWebViewContentHeightChangeEventDetail {
    height: number;
    constructor(height: number) {
        this.height = height;
    }
}
export class UniWebViewContentHeightChangeEvent extends UniCustomEvent<UniWebViewContentHeightChangeEventDetail> implements IUniWebViewContentHeightChangeEvent {
    constructor(detail: UniWebViewContentHeightChangeEventDetail) {
        super('contentheightchange', detail);
    }
}
