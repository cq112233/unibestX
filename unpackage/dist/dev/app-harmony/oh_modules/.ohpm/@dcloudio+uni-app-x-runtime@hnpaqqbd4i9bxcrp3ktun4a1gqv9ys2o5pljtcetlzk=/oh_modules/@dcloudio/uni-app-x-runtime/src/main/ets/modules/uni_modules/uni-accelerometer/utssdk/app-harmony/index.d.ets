import { IUniError, UTSObject } from "@dcloudio/uni-app-framework";
type AccelerometerInterval = 'game' | 'ui' | 'normal';
type AccelerometerErrorCode = 601 | 602 | 603 | 604 | 701 | 702 | 703 | 801 | 802 | 803 | 804 | 501 | 502 | 503 | 901;
interface IAccelerometerError extends IUniError {
    errCode: AccelerometerErrorCode;
}
interface IStartAccelerometerFail extends IAccelerometerError {
}
interface IStopAccelerometerFail extends IAccelerometerError {
}
declare class StartAccelerometerSuccess extends UTSObject {
    errMsg: string | null;
}
type StartAccelerometerFail = IStartAccelerometerFail;
type StartAccelerometerSuccessCallback = (res: StartAccelerometerSuccess) => void;
type StartAccelerometerFailCallback = (res: StartAccelerometerFail) => void;
type StartAccelerometerComplete = StartAccelerometerSuccess | StartAccelerometerFail;
type StartAccelerometerCompleteCallback = (res: StartAccelerometerComplete) => void;
declare class StopAccelerometerSuccess extends UTSObject {
    errMsg: string | null;
}
type StopAccelerometerFail = IStopAccelerometerFail;
type StopAccelerometerSuccessCallback = (res: StopAccelerometerSuccess) => void;
type StopAccelerometerFailCallback = (res: StopAccelerometerFail) => void;
type StopAccelerometerComplete = StopAccelerometerSuccess | StopAccelerometerFail;
type StopAccelerometerCompleteCallback = (res: StopAccelerometerComplete) => void;
declare class StartAccelerometerOptions extends UTSObject {
    interval: AccelerometerInterval | null;
    success: StartAccelerometerSuccessCallback | null;
    fail: StartAccelerometerFailCallback | null;
    complete: StartAccelerometerCompleteCallback | null;
}
declare class StopAccelerometerOptions extends UTSObject {
    success: StopAccelerometerSuccessCallback | null;
    fail: StopAccelerometerFailCallback | null;
    complete: StopAccelerometerCompleteCallback | null;
}
declare class OnAccelerometerChangeCallbackResult extends UTSObject {
    x: number;
    y: number;
    z: number;
}
type OnAccelerometerChangeCallback = (result: OnAccelerometerChangeCallbackResult) => void;
type OnAccelerometerChange = (callback: OnAccelerometerChangeCallback) => void;
type OffAccelerometerChange = (callback: OnAccelerometerChangeCallback | null) => void;
type StartAccelerometer = (options?: StartAccelerometerOptions | null) => void;
type StopAccelerometer = (options?: StopAccelerometerOptions | null) => void;
declare function onAccelerometerChange(callback: OnAccelerometerChangeCallback): void;
declare function offAccelerometerChange(callback?: OnAccelerometerChangeCallback | null): void;
declare function startAccelerometer(options?: StartAccelerometerOptions | null): void;
declare function stopAccelerometer(options?: StopAccelerometerOptions | null): void;
export { AccelerometerInterval as AccelerometerInterval, OnAccelerometerChangeCallback as OnAccelerometerChangeCallback, OnAccelerometerChangeCallbackResult as OnAccelerometerChangeCallbackResult, StartAccelerometerComplete as StartAccelerometerComplete, StartAccelerometerCompleteCallback as StartAccelerometerCompleteCallback, StartAccelerometerFail as StartAccelerometerFail, StartAccelerometerFailCallback as StartAccelerometerFailCallback, StartAccelerometerOptions as StartAccelerometerOptions, StartAccelerometerSuccess as StartAccelerometerSuccess, StartAccelerometerSuccessCallback as StartAccelerometerSuccessCallback, StopAccelerometerComplete as StopAccelerometerComplete, StopAccelerometerCompleteCallback as StopAccelerometerCompleteCallback, StopAccelerometerFail as StopAccelerometerFail, StopAccelerometerFailCallback as StopAccelerometerFailCallback, StopAccelerometerSuccess as StopAccelerometerSuccess, StopAccelerometerSuccessCallback as StopAccelerometerSuccessCallback, StopAccelerometerOptions as StopAccelerometerOptions };
export { AccelerometerErrorCode as AccelerometerErrorCode, IAccelerometerError as IAccelerometerError, IStartAccelerometerFail as IStartAccelerometerFail, IStopAccelerometerFail as IStopAccelerometerFail, OffAccelerometerChange as OffAccelerometerChange, OnAccelerometerChange as OnAccelerometerChange, StartAccelerometer as StartAccelerometer, StopAccelerometer as StopAccelerometer };
export { onAccelerometerChange as onAccelerometerChange };
export { offAccelerometerChange as offAccelerometerChange };
export { startAccelerometer as startAccelerometer };
export { stopAccelerometer as stopAccelerometer };
