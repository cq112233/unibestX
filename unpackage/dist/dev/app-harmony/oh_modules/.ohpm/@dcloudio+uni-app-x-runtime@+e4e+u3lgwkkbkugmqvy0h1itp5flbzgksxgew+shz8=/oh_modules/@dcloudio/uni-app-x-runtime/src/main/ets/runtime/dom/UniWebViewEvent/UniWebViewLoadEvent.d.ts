import { UniWebViewLoadEvent as IUniWebViewLoadEvent, UniWebViewLoadEventDetail as IUniWebViewLoadEventDetail } from '@dcloudio/uni-app-x/types/native';
import { UniCustomEvent } from '../UniCustomEvent';
export declare class UniWebViewLoadEventDetail implements IUniWebViewLoadEventDetail {
    url: string;
    src: string;
    constructor(detail: IUniWebViewLoadEventDetail);
}
export declare class UniWebViewLoadEvent extends UniCustomEvent<UniWebViewLoadEventDetail> implements IUniWebViewLoadEvent {
    constructor(type: string, detail: IUniWebViewLoadEventDetail);
}
