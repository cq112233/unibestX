import { UniWebViewLoadingEvent as IUniWebViewLoadingEvent, UniWebViewLoadingEventDetail as IUniWebViewLoadingEventDetail } from '@dcloudio/uni-app-x/types/native';
import { UniCustomEvent } from '../UniCustomEvent';
export declare class UniWebViewLoadingEventDetail implements IUniWebViewLoadingEventDetail {
    url: string;
    src: string;
    constructor(detail: IUniWebViewLoadingEventDetail);
}
export declare class UniWebViewLoadingEvent extends UniCustomEvent<UniWebViewLoadingEventDetail> implements IUniWebViewLoadingEvent {
    constructor(type: string, detail: IUniWebViewLoadingEventDetail);
}
