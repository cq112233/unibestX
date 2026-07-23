import { UniNativeViewElement as IUniNativeViewElement, UniNativeViewInitEvent as IUniNativeViewInitEvent, UniNativeViewInitEventDetail as IUniNativeViewInitEventDetail } from '@dcloudio/uni-app-x/types/native';
import { UniCustomEvent } from './UniCustomEvent';
export declare class UniNativeViewInitEventDetail implements IUniNativeViewInitEventDetail {
    element: IUniNativeViewElement;
    constructor(data: IUniNativeViewInitEventDetail);
}
export declare class UniNativeViewInitEvent extends UniCustomEvent<UniNativeViewInitEventDetail> implements IUniNativeViewInitEvent {
    constructor(type: string, detail: IUniNativeViewInitEventDetail);
}
