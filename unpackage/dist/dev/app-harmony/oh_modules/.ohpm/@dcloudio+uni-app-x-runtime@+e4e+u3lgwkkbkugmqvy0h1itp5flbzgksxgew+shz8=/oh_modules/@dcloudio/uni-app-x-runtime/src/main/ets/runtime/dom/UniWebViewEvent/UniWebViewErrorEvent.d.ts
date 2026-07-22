import { UniWebViewErrorEvent as IUniWebViewErrorEvent, UniWebViewErrorEventDetail as IUniWebViewErrorEventDetail } from '@dcloudio/uni-app-x/types/native';
import { UniCustomEvent } from '../UniCustomEvent';
export declare class UniWebViewErrorEventDetail implements IUniWebViewErrorEventDetail {
    errSubject: string;
    /**
     * 统一错误码
     * 100001 ssl error
     * 100002 page error
     * 100003 http error
     */
    errCode: 100001 | 100002 | 100003;
    /**
     * 统一错误描述信息
     */
    errMsg: string;
    /**
     * 加载错误的网页链接，非完整链接，仅包含scheme://authority部分，4.13版本起支持
     */
    url: string;
    /**
     * 加载错误的网页链接，完整链接，4.13版本起支持
     */
    fullUrl: string;
    /**
     * 加载错误的网页链接，完整链接，4.13版本起支持
     */
    src: string;
    constructor(detail: IUniWebViewErrorEventDetail);
}
export declare class UniWebViewErrorEvent extends UniCustomEvent<UniWebViewErrorEventDetail> implements IUniWebViewErrorEvent {
    constructor(type: string, detail: IUniWebViewErrorEventDetail);
}
