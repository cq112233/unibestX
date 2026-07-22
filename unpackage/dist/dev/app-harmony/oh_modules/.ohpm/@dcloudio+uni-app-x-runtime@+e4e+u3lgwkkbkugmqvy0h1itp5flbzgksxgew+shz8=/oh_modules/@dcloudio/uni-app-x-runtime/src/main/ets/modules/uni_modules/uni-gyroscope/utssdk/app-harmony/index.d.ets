import { IUniError, UTSObject } from "@dcloudio/uni-app-framework";
type GyroscopeInterval = 'game' | 'ui' | 'normal';
type GyroscopeErrorCode = 601 | 602 | 603 | 604 | 701 | 702 | 703 | 704 | 801 | 802 | 803 | 804 | 501 | 502 | 503 | 504 | 901;
interface IGyroscopeError extends IUniError {
    errCode: GyroscopeErrorCode;
}
interface IStartGyroscopeFail extends IGyroscopeError {
}
interface IStopGyroscopeFail extends IGyroscopeError {
}
declare class StartGyroscopeSuccess extends UTSObject {
    errMsg: string | null;
}
type StartGyroscopeFail = IStartGyroscopeFail;
type StartGyroscopeSuccessCallback = (res: StartGyroscopeSuccess) => void;
type StartGyroscopeFailCallback = (res: StartGyroscopeFail) => void;
type StartGyroscopeComplete = StartGyroscopeSuccess | StartGyroscopeFail;
type StartGyroscopeCompleteCallback = (res: StartGyroscopeComplete) => void;
declare class StopGyroscopeSuccess extends UTSObject {
    errMsg: string | null;
}
type StopGyroscopeFail = IStopGyroscopeFail;
type StopGyroscopeSuccessCallback = (res: StopGyroscopeSuccess) => void;
type StopGyroscopeFailCallback = (res: StopGyroscopeFail) => void;
type StopGyroscopeComplete = StopGyroscopeSuccess | StopGyroscopeFail;
type StopGyroscopeCompleteCallback = (res: StopGyroscopeComplete) => void;
declare class StartGyroscopeOptions extends UTSObject {
    interval: GyroscopeInterval | null;
    success: StartGyroscopeSuccessCallback | null;
    fail: StartGyroscopeFailCallback | null;
    complete: StartGyroscopeCompleteCallback | null;
}
declare class StopGyroscopeOptions extends UTSObject {
    success: StopGyroscopeSuccessCallback | null;
    fail: StopGyroscopeFailCallback | null;
    complete: StopGyroscopeCompleteCallback | null;
}
declare class OnGyroscopeChangeCallbackResult extends UTSObject {
    x: number;
    y: number;
    z: number;
}
type OnGyroscopeChangeCallback = (result: OnGyroscopeChangeCallbackResult) => void;
type StartGyroscope = (options?: StartGyroscopeOptions | null) => void;
type StopGyroscope = (options?: StopGyroscopeOptions | null) => void;
type OnGyroscopeChange = (callback: OnGyroscopeChangeCallback) => void;
type OffGyroscopeChange = (callback: OnGyroscopeChangeCallback | null) => void;
declare function onGyroscopeChange(callback: OnGyroscopeChangeCallback): void;
declare function offGyroscopeChange(callback?: OnGyroscopeChangeCallback | null): void;
declare function startGyroscope(options?: StartGyroscopeOptions | null): void;
declare function stopGyroscope(options?: StopGyroscopeOptions | null): void;
export { GyroscopeErrorCode as GyroscopeErrorCode, GyroscopeInterval as GyroscopeInterval, IGyroscopeError as IGyroscopeError, IStartGyroscopeFail as IStartGyroscopeFail, IStopGyroscopeFail as IStopGyroscopeFail, OffGyroscopeChange as OffGyroscopeChange, OnGyroscopeChange as OnGyroscopeChange, OnGyroscopeChangeCallback as OnGyroscopeChangeCallback, OnGyroscopeChangeCallbackResult as OnGyroscopeChangeCallbackResult, StartGyroscope as StartGyroscope, StartGyroscopeComplete as StartGyroscopeComplete, StartGyroscopeCompleteCallback as StartGyroscopeCompleteCallback, StartGyroscopeFail as StartGyroscopeFail, StartGyroscopeFailCallback as StartGyroscopeFailCallback, StartGyroscopeOptions as StartGyroscopeOptions, StartGyroscopeSuccess as StartGyroscopeSuccess, StartGyroscopeSuccessCallback as StartGyroscopeSuccessCallback, StopGyroscope as StopGyroscope, StopGyroscopeComplete as StopGyroscopeComplete, StopGyroscopeCompleteCallback as StopGyroscopeCompleteCallback, StopGyroscopeFail as StopGyroscopeFail, StopGyroscopeFailCallback as StopGyroscopeFailCallback, StopGyroscopeOptions as StopGyroscopeOptions, StopGyroscopeSuccess as StopGyroscopeSuccess, StopGyroscopeSuccessCallback as StopGyroscopeSuccessCallback };
export { onGyroscopeChange as onGyroscopeChange };
export { offGyroscopeChange as offGyroscopeChange };
export { startGyroscope as startGyroscope };
export { stopGyroscope as stopGyroscope };
