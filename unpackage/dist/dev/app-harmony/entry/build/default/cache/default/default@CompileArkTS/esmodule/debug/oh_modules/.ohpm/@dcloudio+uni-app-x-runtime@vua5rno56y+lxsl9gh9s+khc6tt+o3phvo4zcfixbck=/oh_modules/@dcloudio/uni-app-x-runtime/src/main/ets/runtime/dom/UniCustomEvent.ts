import { UniEvent } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniEvent&1.0.0";
import type { CustomEvent as ICustomEvent, CustomEventOptions as ICustomEventOptions } from '@dcloudio/uni-app-x/types/native';
export class UniCustomEventOptions<T> implements ICustomEventOptions<T> {
    constructor(public detail: T) { }
}
export class UniCustomEvent<T> extends UniEvent implements ICustomEvent<T> {
    detail: T;
    constructor(type: string, detail: T);
    constructor(type: string, options: UniCustomEventOptions<T>);
    constructor(type: string, options: UniCustomEventOptions<T> | T) {
        super(type);
        this.detail =
            typeof options === 'object' &&
                'detail' in (options as UniCustomEventOptions<T>)
                ? (options as UniCustomEventOptions<T>).detail
                : (options as T);
    }
}
