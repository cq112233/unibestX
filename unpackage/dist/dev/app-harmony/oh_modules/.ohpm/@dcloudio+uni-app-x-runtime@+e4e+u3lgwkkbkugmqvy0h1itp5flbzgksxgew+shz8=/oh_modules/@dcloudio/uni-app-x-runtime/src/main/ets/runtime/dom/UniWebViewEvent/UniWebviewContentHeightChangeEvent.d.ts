import { UniWebViewContentHeightChangeEvent as IUniWebViewContentHeightChangeEvent, UniWebViewContentHeightChangeEventDetail as IUniWebViewContentHeightChangeEventDetail } from '@dcloudio/uni-app-x/types/native';
import { UniCustomEvent } from '../UniCustomEvent';
export declare class UniWebViewContentHeightChangeEventDetail implements IUniWebViewContentHeightChangeEventDetail {
    height: number;
    constructor(height: number);
}
export declare class UniWebViewContentHeightChangeEvent extends UniCustomEvent<UniWebViewContentHeightChangeEventDetail> implements IUniWebViewContentHeightChangeEvent {
    constructor(detail: UniWebViewContentHeightChangeEventDetail);
}
