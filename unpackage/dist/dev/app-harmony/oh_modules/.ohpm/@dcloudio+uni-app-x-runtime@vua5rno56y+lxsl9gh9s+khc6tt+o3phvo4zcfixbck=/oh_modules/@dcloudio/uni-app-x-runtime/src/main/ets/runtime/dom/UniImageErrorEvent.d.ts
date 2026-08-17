import { UniImageErrorEvent as IUniImageErrorEvent, UniImageErrorEventDetail as IUniImageErrorEventDetail } from '@dcloudio/uni-app-x/types/native';
import { UniEvent } from './UniEvent';
export declare class UniImageErrorEventDetail implements IUniImageErrorEventDetail {
    constructor(errMsg: string);
    errMsg: string;
}
export declare class UniImageErrorEvent extends UniEvent implements IUniImageErrorEvent {
    detail: IUniImageErrorEventDetail;
    constructor(type: string, detail: IUniImageErrorEventDetail);
}
