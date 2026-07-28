import { UniWebViewMessageEvent as IUniWebViewMessageEvent, UniWebViewMessageEventDetail as IUniWebViewMessageEventDetail } from '@dcloudio/uni-app-x/types/native';
import { UniCustomEvent } from '../UniCustomEvent';
export declare class UniWebViewMessageEventDetail implements IUniWebViewMessageEventDetail {
    data: Array<ESObject>;
    constructor(detail: IUniWebViewMessageEventDetail);
}
export declare class UniWebViewMessageEvent extends UniCustomEvent<UniWebViewMessageEventDetail> implements IUniWebViewMessageEvent {
    constructor(type: string, detail: IUniWebViewMessageEventDetail);
}
