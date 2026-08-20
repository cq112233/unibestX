import { UniEvent } from './UniEvent';
import { CustomEvent as ICustomEvent, CustomEventOptions as ICustomEventOptions } from '@dcloudio/uni-app-x/types/native';
export declare class UniCustomEventOptions<T> implements ICustomEventOptions<T> {
    detail: T;
    constructor(detail: T);
}
export declare class UniCustomEvent<T> extends UniEvent implements ICustomEvent<T> {
    detail: T;
    constructor(type: string, detail: T);
    constructor(type: string, options: UniCustomEventOptions<T>);
}
