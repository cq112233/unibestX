import type { UniScrollToLowerEventDetail as IUniScrollToLowerEventDetail, UniScrollToLowerEvent as IUniScrollToLowerEvent } from '@dcloudio/uni-app-x/types/native';
import { UniCustomEvent } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniCustomEvent&1.0.0";
export class UniScrollToLowerEventDetail implements IUniScrollToLowerEventDetail {
    direction: string;
    constructor(detail: IUniScrollToLowerEventDetail) {
        this.direction = detail.direction;
    }
}
export class UniScrollToLowerEvent extends UniCustomEvent<UniScrollToLowerEventDetail> implements IUniScrollToLowerEvent {
    constructor(type: string, detail: UniScrollToLowerEventDetail) {
        super(type, detail);
    }
}
