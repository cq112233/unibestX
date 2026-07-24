import { Event as IUniEvent } from '@dcloudio/uni-app-x/types/native';
import { UniElement } from '@dcloudio/uni-app-x/types/native';
export type EventInit = {
    bubbles?: boolean;
    cancelable?: boolean;
};
export declare class UniEvent implements IUniEvent {
    __v_skip: boolean;
    get [Symbol.toStringTag](): string;
    type: string;
    target?: UniElement | null | undefined;
    currentTarget?: UniElement | null | undefined;
    timeStamp: number;
    private _bubbles;
    get bubbles(): boolean;
    set bubbles(value: boolean);
    private _cancelable;
    get cancelable(): boolean;
    set cancelable(value: boolean);
    constructor(type: string, eventInit?: EventInit);
    stopPropagation: () => void;
    preventDefault: () => void;
}
export interface InternalUniEvent {
    defaultPrevented: boolean;
}
interface NativeStopPropagationEvent {
    stopPropagation(): void;
}
interface NativePreventDefaultEvent {
    preventDefault(): void;
}
export declare class ModifyEvent extends UniEvent {
    uniEvent: UniEvent;
    constructor(type: string, uniEvent: UniEvent);
}
export declare function useNativeStopPropagation(uniEvent: UniEvent, nativeEvent: NativeStopPropagationEvent): void;
export declare function useNativePreventDefault(uniEvent: UniEvent, nativeEvent: NativePreventDefaultEvent): void;
export {};
