import { UniScrollToLowerEventDetail as IUniScrollToLowerEventDetail, UniScrollToLowerEvent as IUniScrollToLowerEvent } from '@dcloudio/uni-app-x/types/native';
import { UniCustomEvent } from '../UniCustomEvent';
export declare class UniScrollToLowerEventDetail implements IUniScrollToLowerEventDetail {
    direction: string;
    constructor(detail: IUniScrollToLowerEventDetail);
}
export declare class UniScrollToLowerEvent extends UniCustomEvent<UniScrollToLowerEventDetail> implements IUniScrollToLowerEvent {
    constructor(type: string, detail: UniScrollToLowerEventDetail);
}
