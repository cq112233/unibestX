import { GyroscopeNative } from "./GyroscopeNative";
import { IUniError, UTSObject, UniError, UTSJSONObject, UTS, UTSHarmony } from "@dcloudio/uni-app-framework";
type GyroscopeInterval = 'game' | 'ui' | 'normal';
type GyroscopeErrorCode = 601 | 602 | 603 | 604 | 701 | 702 | 703 | 704 | 801 | 802 | 803 | 804 | 501 | 502 | 503 | 504 | 901;
interface IGyroscopeError extends IUniError {
    errCode: GyroscopeErrorCode;
}
interface IStartGyroscopeFail extends IGyroscopeError {
}
interface IStopGyroscopeFail extends IGyroscopeError {
}
class StartGyroscopeSuccess extends UTSObject {
    errMsg: string | null = null;
}
type StartGyroscopeFail = IStartGyroscopeFail;
type StartGyroscopeSuccessCallback = (res: StartGyroscopeSuccess) => void;
type StartGyroscopeFailCallback = (res: StartGyroscopeFail) => void;
type StartGyroscopeComplete = StartGyroscopeSuccess | StartGyroscopeFail;
type StartGyroscopeCompleteCallback = (res: StartGyroscopeComplete) => void;
class StopGyroscopeSuccess extends UTSObject {
    errMsg: string | null = null;
}
type StopGyroscopeFail = IStopGyroscopeFail;
type StopGyroscopeSuccessCallback = (res: StopGyroscopeSuccess) => void;
type StopGyroscopeFailCallback = (res: StopGyroscopeFail) => void;
type StopGyroscopeComplete = StopGyroscopeSuccess | StopGyroscopeFail;
type StopGyroscopeCompleteCallback = (res: StopGyroscopeComplete) => void;
class StartGyroscopeOptions extends UTSObject {
    interval: GyroscopeInterval | null = null;
    success: StartGyroscopeSuccessCallback | null = null;
    fail: StartGyroscopeFailCallback | null = null;
    complete: StartGyroscopeCompleteCallback | null = null;
}
class StopGyroscopeOptions extends UTSObject {
    success: StopGyroscopeSuccessCallback | null = null;
    fail: StopGyroscopeFailCallback | null = null;
    complete: StopGyroscopeCompleteCallback | null = null;
}
class OnGyroscopeChangeCallbackResult extends UTSObject {
    x!: number;
    y!: number;
    z!: number;
}
type OnGyroscopeChangeCallback = (result: OnGyroscopeChangeCallbackResult) => void;
type StartGyroscope = (options?: StartGyroscopeOptions | null) => void;
type StopGyroscope = (options?: StopGyroscopeOptions | null) => void;
type OnGyroscopeChange = (callback: OnGyroscopeChangeCallback) => void;
type OffGyroscopeChange = (callback: OnGyroscopeChangeCallback | null) => void;
const defaultGyroscopeInterval: GyroscopeInterval = 'normal';
function normalizeGyroscopeInterval(interval: GyroscopeInterval | null): GyroscopeInterval {
    if (interval != null) {
        if (interval == 'game') {
            return 'game';
        }
        if (interval == 'ui') {
            return 'ui';
        }
    }
    return defaultGyroscopeInterval;
}
const GyroscopeUniErrorSubject = 'uni-gyroscope';
const GyroscopeUniErrors: Map<number, string> = new Map([
    [
        601,
        'gyroscope unsupported'
    ],
    [
        602,
        'start gyroscope failed'
    ],
    [
        603,
        'stop gyroscope failed'
    ],
    [
        604,
        'gyroscope internal error'
    ],
    [
        701,
        'android sensor manager unavailable'
    ],
    [
        702,
        'android gyroscope sensor unavailable'
    ],
    [
        703,
        'android register listener failed'
    ],
    [
        704,
        'android sensor data invalid'
    ],
    [
        801,
        'ios gyroscope unavailable'
    ],
    [
        802,
        'ios motion manager init failed'
    ],
    [
        803,
        'ios start gyroscope failed'
    ],
    [
        804,
        'ios stop gyroscope failed'
    ],
    [
        501,
        'harmony gyroscope unavailable'
    ],
    [
        502,
        'harmony subscribe gyroscope failed'
    ],
    [
        503,
        'harmony unsubscribe gyroscope failed'
    ],
    [
        504,
        'harmony sensor data invalid'
    ],
    [
        901,
        'web gyroscope unsupported'
    ]
]);
class StartGyroscopeFailImpl extends UniError implements IStartGyroscopeFail {
    errCode: GyroscopeErrorCode;
    constructor(errCode: GyroscopeErrorCode){
        super();
        this.errCode = errCode;
        this.errSubject = GyroscopeUniErrorSubject;
    }
}
class StopGyroscopeFailImpl extends UniError implements IStopGyroscopeFail {
    errCode: GyroscopeErrorCode;
    constructor(errCode: GyroscopeErrorCode){
        super();
        this.errCode = errCode;
        this.errSubject = GyroscopeUniErrorSubject;
    }
}
function createStartGyroscopeFail(errCode: GyroscopeErrorCode, errMsg: string | null = null, data: UTSJSONObject | null = null, cause: Error | null = null): StartGyroscopeFailImpl {
    const error = new StartGyroscopeFailImpl(errCode);
    const defaultMessage = UTS.mapGet(GyroscopeUniErrors, errCode);
    error.errMsg = errMsg != null ? errMsg : defaultMessage != null ? defaultMessage : '';
    error.data = data;
    if (cause != null) {
        error.cause = cause;
    }
    return error;
}
function createStopGyroscopeFail(errCode: GyroscopeErrorCode, errMsg: string | null = null, data: UTSJSONObject | null = null, cause: Error | null = null): StopGyroscopeFailImpl {
    const error = new StopGyroscopeFailImpl(errCode);
    const defaultMessage = UTS.mapGet(GyroscopeUniErrors, errCode);
    error.errMsg = errMsg != null ? errMsg : defaultMessage != null ? defaultMessage : '';
    error.data = data;
    if (cause != null) {
        error.cause = cause;
    }
    return error;
}
const permissions = [
    'ohos.permission.GYROSCOPE'
];
const callbacks: Array<OnGyroscopeChangeCallback> = [];
let started: boolean = false;
let nativeListenerBound: boolean = false;
function createStartGyroscopeSuccess(errMsg: string): StartGyroscopeSuccess {
    return {
        errMsg: errMsg
    } as StartGyroscopeSuccess;
}
function createStopGyroscopeSuccess(errMsg: string): StopGyroscopeSuccess {
    return {
        errMsg: errMsg
    } as StopGyroscopeSuccess;
}
function callStartSuccess(options: StartGyroscopeOptions | null): void {
    const result = createStartGyroscopeSuccess('startGyroscope:ok');
    options?.success?.(result);
    options?.complete?.(result);
}
function callStartFail(options: StartGyroscopeOptions | null, fail: StartGyroscopeFail): void {
    options?.fail?.(fail);
    options?.complete?.(fail);
}
function callStopSuccess(options: StopGyroscopeOptions | null): void {
    const result = createStopGyroscopeSuccess('stopGyroscope:ok');
    options?.success?.(result);
    options?.complete?.(result);
}
function callStopFail(options: StopGyroscopeOptions | null, fail: StopGyroscopeFail): void {
    options?.fail?.(fail);
    options?.complete?.(fail);
}
function hasCallback(callback: OnGyroscopeChangeCallback): boolean {
    let index = 0;
    while(index < callbacks.length){
        if (callbacks[index] == callback) {
            return true;
        }
        index++;
    }
    return false;
}
function removeCallback(callback: OnGyroscopeChangeCallback): void {
    let index = 0;
    while(index < callbacks.length){
        if (callbacks[index] == callback) {
            callbacks.splice(index, 1);
            return;
        }
        index++;
    }
}
function dispatchGyroscopeChange(x: number, y: number, z: number): void {
    const result: OnGyroscopeChangeCallbackResult = {
        x: x,
        y: y,
        z: z
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
    GyroscopeNative.setListener((x: number, y: number, z: number)=>{
        dispatchGyroscopeChange(x, y, z);
    });
    nativeListenerBound = true;
}
function mapStartNativeError(code: number): StartGyroscopeFail {
    let errCode: GyroscopeErrorCode = 604;
    if (code == 501 || code == 502 || code == 503 || code == 504) {
        errCode = code as GyroscopeErrorCode;
    } else {
        errCode = 602;
    }
    return createStartGyroscopeFail(errCode, 'startGyroscope:fail', new UTSJSONObject({
        platformCode: code
    }));
}
function mapStopNativeError(code: number): StopGyroscopeFail {
    let errCode: GyroscopeErrorCode = 604;
    if (code == 501 || code == 502 || code == 503 || code == 504) {
        errCode = code as GyroscopeErrorCode;
    } else {
        errCode = 603;
    }
    return createStopGyroscopeFail(errCode, 'stopGyroscope:fail', new UTSJSONObject({
        platformCode: code
    }));
}
function onGyroscopeChange(callback: OnGyroscopeChangeCallback): void {
    ensureNativeListener();
    if (!started) {
        startGyroscope();
    }
    if (hasCallback(callback)) {
        return;
    }
    callbacks.push(callback);
}
function offGyroscopeChange(callback: OnGyroscopeChangeCallback | null = null): void {
    if (callback == null) {
        callbacks.length = 0;
    } else {
        removeCallback(callback);
    }
    if (callbacks.length == 0) {
        GyroscopeNative.removeListener();
        nativeListenerBound = false;
    }
}
function startGyroscope(options: StartGyroscopeOptions | null = null): void {
    ensureNativeListener();
    if (started) {
        callStartSuccess(options);
        return;
    }
    const interval: GyroscopeInterval = normalizeGyroscopeInterval(options?.interval ?? null);
    UTSHarmony.requestSystemPermission(permissions, (allRight: boolean, _: Array<string>)=>{
        if (!allRight) {
            callStartFail(options, createStartGyroscopeFail(602, 'startGyroscope:fail permission denied'));
            return;
        }
        const code = GyroscopeNative.start(interval);
        if (code != 0) {
            callStartFail(options, mapStartNativeError(code));
            return;
        }
        started = true;
        callStartSuccess(options);
    }, (_granted: boolean, _permissions: Array<string>)=>{
        callStartFail(options, createStartGyroscopeFail(502, 'startGyroscope:fail permission request failed'));
    });
}
function stopGyroscope(options: StopGyroscopeOptions | null = null): void {
    if (!started) {
        callStopSuccess(options);
        return;
    }
    const code = GyroscopeNative.stop();
    if (code != 0) {
        callStopFail(options, mapStopNativeError(code));
        return;
    }
    started = false;
    callStopSuccess(options);
}
export { GyroscopeErrorCode as GyroscopeErrorCode, GyroscopeInterval as GyroscopeInterval, IGyroscopeError as IGyroscopeError, IStartGyroscopeFail as IStartGyroscopeFail, IStopGyroscopeFail as IStopGyroscopeFail, OffGyroscopeChange as OffGyroscopeChange, OnGyroscopeChange as OnGyroscopeChange, OnGyroscopeChangeCallback as OnGyroscopeChangeCallback, OnGyroscopeChangeCallbackResult as OnGyroscopeChangeCallbackResult, StartGyroscope as StartGyroscope, StartGyroscopeComplete as StartGyroscopeComplete, StartGyroscopeCompleteCallback as StartGyroscopeCompleteCallback, StartGyroscopeFail as StartGyroscopeFail, StartGyroscopeFailCallback as StartGyroscopeFailCallback, StartGyroscopeOptions as StartGyroscopeOptions, StartGyroscopeSuccess as StartGyroscopeSuccess, StartGyroscopeSuccessCallback as StartGyroscopeSuccessCallback, StopGyroscope as StopGyroscope, StopGyroscopeComplete as StopGyroscopeComplete, StopGyroscopeCompleteCallback as StopGyroscopeCompleteCallback, StopGyroscopeFail as StopGyroscopeFail, StopGyroscopeFailCallback as StopGyroscopeFailCallback, StopGyroscopeOptions as StopGyroscopeOptions, StopGyroscopeSuccess as StopGyroscopeSuccess, StopGyroscopeSuccessCallback as StopGyroscopeSuccessCallback };
export { onGyroscopeChange as onGyroscopeChange };
export { offGyroscopeChange as offGyroscopeChange };
export { startGyroscope as startGyroscope };
export { stopGyroscope as stopGyroscope };
