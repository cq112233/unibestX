import { UniWebViewDownloadEvent as IUniWebViewDownloadEvent, UniWebViewDownloadEventDetail as IUniWebViewDownloadEventDetail } from '@dcloudio/uni-app-x/types/native';
import { UniCustomEvent } from '../UniCustomEvent';
export declare class UniWebViewDownloadEventDetail implements IUniWebViewDownloadEventDetail {
    url: string;
    userAgent: string;
    contentDisposition: string;
    mimetype: string;
    contentLength: number;
    constructor(detail: IUniWebViewDownloadEventDetail);
}
export declare class UniWebViewDownloadEvent extends UniCustomEvent<UniWebViewDownloadEventDetail> implements IUniWebViewDownloadEvent {
    constructor(type: string, detail: IUniWebViewDownloadEventDetail);
}
