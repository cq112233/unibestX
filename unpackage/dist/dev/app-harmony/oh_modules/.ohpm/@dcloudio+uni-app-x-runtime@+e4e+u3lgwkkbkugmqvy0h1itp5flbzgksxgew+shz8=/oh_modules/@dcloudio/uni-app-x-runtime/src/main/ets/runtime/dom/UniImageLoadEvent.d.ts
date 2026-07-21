import { UniImageLoadEvent as IUniImageLoadEvent, UniImageLoadEventDetail as IUniImageLoadEventDetail } from '@dcloudio/uni-app-x/types/native';
import { UniEvent } from './UniEvent';
export declare class UniImageLoadEventDetail implements IUniImageLoadEventDetail {
    width: number;
    height: number;
    constructor(data: IUniImageLoadEventDetail);
}
export declare class UniImageLoadEvent extends UniEvent implements IUniImageLoadEvent {
    detail: IUniImageLoadEventDetail;
    constructor(type: string, detail: IUniImageLoadEventDetail);
}
