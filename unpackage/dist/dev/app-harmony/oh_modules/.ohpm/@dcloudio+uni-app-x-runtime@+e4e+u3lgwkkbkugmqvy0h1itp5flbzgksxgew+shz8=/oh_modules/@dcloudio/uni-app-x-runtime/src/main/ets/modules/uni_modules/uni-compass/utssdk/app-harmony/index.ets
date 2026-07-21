import { CompassNative } from "./CompassNative";
import { IUniError, UTSObject, UniError, UTSJSONObject, UTS } from "@dcloudio/uni-app-framework";
type CompassErrorCode = 601 | 602 | 603 | 604 | 701 | 702 | 703 | 704 | 801 | 802 | 803 | 804 | 501 | 502 | 503 | 504 | 901;
interface ICompassError extends IUniError {
    errCode: CompassErrorCode;
}
interface IStartCompassFail extends ICompassError {
}
interface IStopCompassFail extends ICompassError {
}
class StartCompassSuccess extends UTSObject {
    errMsg: string | null = null;
}
type CompassAccuracy = number | string | null;
type StartCompassFail = IStartCompassFail;
type StartCompassSuccessCallback = (res: StartCompassSuccess) => void;
type StartCompassFailCallback = (res: StartCompassFail) => void;
type StartCompassComplete = StartCompassSuccess | StartCompassFail;
type StartCompassCompleteCallback = (res: StartCompassComplete) => void;
class StopCompassSuccess extends UTSObject {
    errMsg: string | null = null;
}
type StopCompassFail = IStopCompassFail;
type StopCompassSuccessCallback = (res: StopCompassSuccess) => void;
type StopCompassFailCallback = (res: StopCompassFail) => void;
type StopCompassComplete = StopCompassSuccess | StopCompassFail;
type StopCompassCompleteCallback = (res: StopCompassComplete) => void;
class StartCompassOptions extends UTSObject {
    success: StartCompassSuccessCallback | null = null;
    fail: StartCompassFailCallback | null = null;
    complete: StartCompassCompleteCallback | null = null;
}
class StopCompassOptions extends UTSObject {
    success: StopCompassSuccessCallback | null = null;
    fail: StopCompassFailCallback | null = null;
    complete: StopCompassCompleteCallback | null = null;
}
class OnCompassChangeCallbackResult extends UTSObject {
    direction!: number;
    accuracy: CompassAccuracy | null = null;
    errMsg: string | null = null;
}
type OnCompassChangeCallback = (result: OnCompassChangeCallbackResult) => void;
type OnCompassChange = (callback: OnCompassChangeCallback) => void;
type OffCompassChange = (callback: OnCompassChangeCallback) => void;
type StartCompass = (options?: StartCompassOptions | null) => void;
type StopCompass = (options?: StopCompassOptions | null) => void;
const CompassUniErrorSubject = 'uni-compass';
const CompassUniErrors: Map<number, string> = new Map([
    [
        601,
        'compass not supported'
    ],
    [
        602,
        'start compass failed'
    ],
    [
        603,
        'stop compass failed'
    ],
    [
        604,
        'native internal error'
    ],
    [
        701,
        'android sensor manager unavailable'
    ],
    [
        702,
        'android accelerometer unavailable'
    ],
    [
        703,
        'android magnetic sensor unavailable'
    ],
    [
        704,
        'android register listener failed'
    ],
    [
        801,
        'ios heading unavailable'
    ],
    [
        802,
        'ios location manager init failed'
    ],
    [
        803,
        'ios start heading failed'
    ],
    [
        804,
        'ios stop heading failed'
    ],
    [
        501,
        'harmony orientation sensor unavailable'
    ],
    [
        502,
        'harmony subscribe orientation failed'
    ],
    [
        503,
        'harmony unsubscribe orientation failed'
    ],
    [
        504,
        'harmony sensor internal error'
    ],
    [
        901,
        'web compass unsupported'
    ]
]);
class StartCompassFailImpl extends UniError implements IStartCompassFail {
    errCode: CompassErrorCode;
    constructor(errCode: CompassErrorCode){
        super();
        this.errCode = errCode;
        this.errSubject = CompassUniErrorSubject;
    }
}
class StopCompassFailImpl extends UniError implements IStopCompassFail {
    errCode: CompassErrorCode;
    constructor(errCode: CompassErrorCode){
        super();
        this.errCode = errCode;
        this.errSubject = CompassUniErrorSubject;
    }
}
function createStartCompassFail(errCode: CompassErrorCode, errMsg: string | null = null, data: UTSJSONObject | null = null, cause: Error | null = null): StartCompassFailImpl {
    const error = new StartCompassFailImpl(errCode);
    const defaultMessage = UTS.mapGet(CompassUniErrors, errCode);
    error.errMsg = errMsg != null ? errMsg : defaultMessage != null ? defaultMessage : '';
    error.data = data;
    if (cause != null) {
        error.cause = cause;
    }
    return error;
}
function createStopCompassFail(errCode: CompassErrorCode, errMsg: string | null = null, data: UTSJSONObject | null = null, cause: Error | null = null): StopCompassFailImpl {
    const error = new StopCompassFailImpl(errCode);
    const defaultMessage = UTS.mapGet(CompassUniErrors, errCode);
    error.errMsg = errMsg != null ? errMsg : defaultMessage != null ? defaultMessage : '';
    error.data = data;
    if (cause != null) {
        error.cause = cause;
    }
    return error;
}
const startErrMsg = 'startCompass:ok';
const stopErrMsg = 'stopCompass:ok';
const changeErrMsg = 'onCompassChange:ok';
let started: boolean = false;
let nativeListenerBound: boolean = false;
let lastDispatchTime: number = 0;
const callbacks: Array<OnCompassChangeCallback> = [];
function resetDispatchState(): void {
    lastDispatchTime = 0;
}
function shouldDispatch(): boolean {
    const now = Date.now();
    if (lastDispatchTime != 0 && now - lastDispatchTime < 200) {
        return false;
    }
    lastDispatchTime = now;
    return true;
}
function createStartCompassSuccess(errMsg: string): StartCompassSuccess {
    return {
        errMsg: errMsg
    } as StartCompassSuccess;
}
function createStopCompassSuccess(errMsg: string): StopCompassSuccess {
    return {
        errMsg: errMsg
    } as StopCompassSuccess;
}
function hasCallback(callback: OnCompassChangeCallback): boolean {
    let index = 0;
    while(index < callbacks.length){
        if (callbacks[index] == callback) {
            return true;
        }
        index++;
    }
    return false;
}
function dispatchCompassChange(direction: number, accuracy: CompassAccuracy): void {
    if (!shouldDispatch()) {
        return;
    }
    const result: OnCompassChangeCallbackResult = {
        direction: direction,
        accuracy: accuracy,
        errMsg: changeErrMsg
    };
    let index = 0;
    while(index < callbacks.length){
        callbacks[index](result);
        index++;
    }
}
function ensureNativeListener(): void {
    if (nativeListenerBound) {
        return;
    }
    CompassNative.setListener((direction: number, accuracy: number | null)=>{
        dispatchCompassChange(direction, accuracy);
    });
    nativeListenerBound = true;
}
function callStartSuccess(options: StartCompassOptions | null): void {
    const result = createStartCompassSuccess(startErrMsg);
    options?.success?.(result);
    options?.complete?.(result);
}
function callStartFail(options: StartCompassOptions | null, fail: StartCompassFail): void {
    options?.fail?.(fail);
    options?.complete?.(fail);
}
function callStopSuccess(options: StopCompassOptions | null): void {
    const result = createStopCompassSuccess(stopErrMsg);
    options?.success?.(result);
    options?.complete?.(result);
}
function callStopFail(options: StopCompassOptions | null, fail: StopCompassFail): void {
    options?.fail?.(fail);
    options?.complete?.(fail);
}
function createNativeData(nativeCode: number): UTSJSONObject {
    return new UTSJSONObject({
        platformCode: nativeCode
    });
}
function mapStartNativeError(nativeCode: number): StartCompassFail {
    const data = createNativeData(nativeCode);
    let errCode: CompassErrorCode = 604;
    if (nativeCode == 501) {
        errCode = 601;
    } else if (nativeCode == 502) {
        errCode = 602;
    }
    return createStartCompassFail(errCode, 'startCompass:fail', data);
}
function mapStopNativeError(nativeCode: number): StopCompassFail {
    const data = createNativeData(nativeCode);
    let errCode: CompassErrorCode = 603;
    if (nativeCode == 501) {
        errCode = 601;
    } else if (nativeCode == 502) {
        errCode = 602;
    }
    return createStopCompassFail(errCode, 'stopCompass:fail', data);
}
function onCompassChange(callback: OnCompassChangeCallback): void {
    ensureNativeListener();
    if (hasCallback(callback)) {
        return;
    }
    callbacks.push(callback);
    if (!started) {
        startCompass();
    }
}
function offCompassChange(callback: OnCompassChangeCallback | null = null): void {
    if (callback == null) {
        callbacks.length = 0;
    } else {
        let index = 0;
        while(index < callbacks.length){
            if (callbacks[index] == callback) {
                callbacks.splice(index, 1);
                return;
            }
            index++;
        }
    }
}
function startCompass(options: StartCompassOptions | null = null): void {
    ensureNativeListener();
    if (started) {
        callStartSuccess(options);
        return;
    }
    const nativeCode = CompassNative.start();
    if (nativeCode != 0) {
        callStartFail(options, mapStartNativeError(nativeCode));
        return;
    }
    started = true;
    resetDispatchState();
    callStartSuccess(options);
}
function stopCompass(options: StopCompassOptions | null = null): void {
    if (!started) {
        callStopSuccess(options);
        return;
    }
    const nativeCode = CompassNative.stop();
    if (nativeCode != 0) {
        callStopFail(options, mapStopNativeError(nativeCode));
        return;
    }
    started = false;
    resetDispatchState();
    callStopSuccess(options);
}
export { OnCompassChangeCallback as OnCompassChangeCallback, OnCompassChangeCallbackResult as OnCompassChangeCallbackResult, StartCompassComplete as StartCompassComplete, StartCompassCompleteCallback as StartCompassCompleteCallback, StartCompassFail as StartCompassFail, StartCompassFailCallback as StartCompassFailCallback, StartCompassOptions as StartCompassOptions, StartCompassSuccess as StartCompassSuccess, StartCompassSuccessCallback as StartCompassSuccessCallback, StopCompassComplete as StopCompassComplete, StopCompassCompleteCallback as StopCompassCompleteCallback, StopCompassFail as StopCompassFail, StopCompassFailCallback as StopCompassFailCallback, StopCompassSuccess as StopCompassSuccess, StopCompassSuccessCallback as StopCompassSuccessCallback, StopCompassOptions as StopCompassOptions };
export { CompassAccuracy as CompassAccuracy, CompassErrorCode as CompassErrorCode, ICompassError as ICompassError, IStartCompassFail as IStartCompassFail, IStopCompassFail as IStopCompassFail, OffCompassChange as OffCompassChange, OnCompassChange as OnCompassChange, StartCompass as StartCompass, StopCompass as StopCompass };
export { onCompassChange as onCompassChange };
export { offCompassChange as offCompassChange };
export { startCompass as startCompass };
export { stopCompass as stopCompass };
