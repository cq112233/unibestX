import { IUniError, UTSObject } from "@dcloudio/uni-app-framework";
type CompassErrorCode = 601 | 602 | 603 | 604 | 701 | 702 | 703 | 704 | 801 | 802 | 803 | 804 | 501 | 502 | 503 | 504 | 901;
interface ICompassError extends IUniError {
    errCode: CompassErrorCode;
}
interface IStartCompassFail extends ICompassError {
}
interface IStopCompassFail extends ICompassError {
}
declare class StartCompassSuccess extends UTSObject {
    errMsg: string | null;
}
type CompassAccuracy = number | string | null;
type StartCompassFail = IStartCompassFail;
type StartCompassSuccessCallback = (res: StartCompassSuccess) => void;
type StartCompassFailCallback = (res: StartCompassFail) => void;
type StartCompassComplete = StartCompassSuccess | StartCompassFail;
type StartCompassCompleteCallback = (res: StartCompassComplete) => void;
declare class StopCompassSuccess extends UTSObject {
    errMsg: string | null;
}
type StopCompassFail = IStopCompassFail;
type StopCompassSuccessCallback = (res: StopCompassSuccess) => void;
type StopCompassFailCallback = (res: StopCompassFail) => void;
type StopCompassComplete = StopCompassSuccess | StopCompassFail;
type StopCompassCompleteCallback = (res: StopCompassComplete) => void;
declare class StartCompassOptions extends UTSObject {
    success: StartCompassSuccessCallback | null;
    fail: StartCompassFailCallback | null;
    complete: StartCompassCompleteCallback | null;
}
declare class StopCompassOptions extends UTSObject {
    success: StopCompassSuccessCallback | null;
    fail: StopCompassFailCallback | null;
    complete: StopCompassCompleteCallback | null;
}
declare class OnCompassChangeCallbackResult extends UTSObject {
    direction: number;
    accuracy: CompassAccuracy | null;
    errMsg: string | null;
}
type OnCompassChangeCallback = (result: OnCompassChangeCallbackResult) => void;
type OnCompassChange = (callback: OnCompassChangeCallback) => void;
type OffCompassChange = (callback: OnCompassChangeCallback) => void;
type StartCompass = (options?: StartCompassOptions | null) => void;
type StopCompass = (options?: StopCompassOptions | null) => void;
declare function onCompassChange(callback: OnCompassChangeCallback): void;
declare function offCompassChange(callback?: OnCompassChangeCallback | null): void;
declare function startCompass(options?: StartCompassOptions | null): void;
declare function stopCompass(options?: StopCompassOptions | null): void;
export { OnCompassChangeCallback as OnCompassChangeCallback, OnCompassChangeCallbackResult as OnCompassChangeCallbackResult, StartCompassComplete as StartCompassComplete, StartCompassCompleteCallback as StartCompassCompleteCallback, StartCompassFail as StartCompassFail, StartCompassFailCallback as StartCompassFailCallback, StartCompassOptions as StartCompassOptions, StartCompassSuccess as StartCompassSuccess, StartCompassSuccessCallback as StartCompassSuccessCallback, StopCompassComplete as StopCompassComplete, StopCompassCompleteCallback as StopCompassCompleteCallback, StopCompassFail as StopCompassFail, StopCompassFailCallback as StopCompassFailCallback, StopCompassSuccess as StopCompassSuccess, StopCompassSuccessCallback as StopCompassSuccessCallback, StopCompassOptions as StopCompassOptions };
export { CompassAccuracy as CompassAccuracy, CompassErrorCode as CompassErrorCode, ICompassError as ICompassError, IStartCompassFail as IStartCompassFail, IStopCompassFail as IStopCompassFail, OffCompassChange as OffCompassChange, OnCompassChange as OnCompassChange, StartCompass as StartCompass, StopCompass as StopCompass };
export { onCompassChange as onCompassChange };
export { offCompassChange as offCompassChange };
export { startCompass as startCompass };
export { stopCompass as stopCompass };
