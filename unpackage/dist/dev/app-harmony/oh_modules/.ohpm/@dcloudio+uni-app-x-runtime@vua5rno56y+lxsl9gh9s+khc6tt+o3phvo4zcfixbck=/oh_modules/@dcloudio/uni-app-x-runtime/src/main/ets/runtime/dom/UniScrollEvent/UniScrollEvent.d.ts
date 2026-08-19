import { UniScrollEventDetail as IUniScrollEventDetail, UniScrollEvent as IUniScrollEvent } from '@dcloudio/uni-app-x/types/native';
import { UniCustomEvent } from '../UniCustomEvent';
export declare class UniScrollEventDetail implements IUniScrollEventDetail {
    scrollTop: number;
    scrollLeft: number;
    scrollHeight: number;
    scrollWidth: number;
    deltaY: number;
    deltaX: number;
    constructor(detail: IUniScrollEventDetail);
}
export declare class UniScrollEvent extends UniCustomEvent<UniScrollEventDetail> implements IUniScrollEvent {
    constructor(type: string, detail: IUniScrollEventDetail);
}
