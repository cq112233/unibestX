import type { UniWebViewLoadingEvent as IUniWebViewLoadingEvent, UniWebViewLoadingEventDetail as IUniWebViewLoadingEventDetail } from '@dcloudio/uni-app-x/types/native';
import { UniCustomEvent } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniCustomEvent&1.0.0";
export class UniWebViewLoadingEventDetail implements IUniWebViewLoadingEventDetail {
    public url: string;
    public src: string;
    constructor(detail: IUniWebViewLoadingEventDetail) {
        this.url = detail.url;
        this.src = detail.src;
    }
}
export class UniWebViewLoadingEvent extends UniCustomEvent<UniWebViewLoadingEventDetail> implements IUniWebViewLoadingEvent {
    constructor(type: string, detail: IUniWebViewLoadingEventDetail) {
        super(type, detail);
    }
}
