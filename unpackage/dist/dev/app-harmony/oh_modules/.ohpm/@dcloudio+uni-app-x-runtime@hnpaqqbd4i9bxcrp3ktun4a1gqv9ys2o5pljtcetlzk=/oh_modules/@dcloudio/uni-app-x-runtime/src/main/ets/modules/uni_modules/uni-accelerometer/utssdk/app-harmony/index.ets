import { AccelerometerNative } from "./AccelerometerNative";
import { IUniError, UTSObject, UniError, UTSJSONObject, UTS, UTSHarmony } from "@dcloudio/uni-app-framework";
type AccelerometerInterval = 'game' | 'ui' | 'normal';
type AccelerometerErrorCode = 601 | 602 | 603 | 604 | 701 | 702 | 703 | 801 | 802 | 803 | 804 | 501 | 502 | 503 | 901;
interface IAccelerometerError extends IUniError {
    errCode: AccelerometerErrorCode;
}
interface IStartAccelerometerFail extends IAccelerometerError {
}
interface IStopAccelerometerFail extends IAccelerometerError {
}
class StartAccelerometerSuccess extends UTSObject {
    errMsg: string | null = null;
}
type StartAccelerometerFail = IStartAccelerometerFail;
type StartAccelerometerSuccessCallback = (res: StartAccelerometerSuccess) => void;
type StartAccelerometerFailCallback = (res: StartAccelerometerFail) => void;
type StartAccelerometerComplete = StartAccelerometerSuccess | StartAccelerometerFail;
type StartAccelerometerCompleteCallback = (res: StartAccelerometerComplete) => void;
class StopAccelerometerSuccess extends UTSObject {
    errMsg: string | null = null;
}
type StopAccelerometerFail = IStopAccelerometerFail;
type StopAccelerometerSuccessCallback = (res: StopAccelerometerSuccess) => void;
type StopAccelerometerFailCallback = (res: StopAccelerometerFail) => void;
type StopAccelerometerComplete = StopAccelerometerSuccess | StopAccelerometerFail;
type StopAccelerometerCompleteCallback = (res: StopAccelerometerComplete) => void;
class StartAccelerometerOptions extends UTSObject {
    interval: AccelerometerInterval | null = null;
    success: StartAccelerometerSuccessCallback | null = null;
    fail: StartAccelerometerFailCallback | null = null;
    complete: StartAccelerometerCompleteCallback | null = null;
}
class StopAccelerometerOptions extends UTSObject {
    success: StopAccelerometerSuccessCallback | null = null;
    fail: StopAccelerometerFailCallback | null = null;
    complete: StopAccelerometerCompleteCallback | null = null;
}
class OnAccelerometerChangeCallbackResult extends UTSObject {
    x!: number;
    y!: number;
    z!: number;
}
type OnAccelerometerChangeCallback = (result: OnAccelerometerChangeCallbackResult) => void;
type OnAccelerometerChange = (callback: OnAccelerometerChangeCallback) => void;
type OffAccelerometerChange = (callback: OnAccelerometerChangeCallback | null) => void;
type StartAccelerometer = (options?: StartAccelerometerOptions | null) => void;
type StopAccelerometer = (options?: StopAccelerometerOptions | null) => void;
const AccelerometerUniErrorSubject = 'uni-accelerometer';
const AccelerometerUniErrors: Map<number, string> = new Map([
    [
        601,
        'accelerometer not supported'
    ],
    [
        602,
        'start accelerometer failed'
    ],
    [
        603,
        'stop accelerometer failed'
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
        'android register listener failed'
    ],
    [
        801,
        'ios accelerometer unavailable'
    ],
    [
        802,
        'ios motion manager init failed'
    ],
    [
        803,
        'ios start accelerometer failed'
    ],
    [
        804,
        'ios stop accelerometer failed'
    ],
    [
        501,
        'harmony accelerometer unavailable'
    ],
    [
        502,
        'harmony subscribe accelerometer failed'
    ],
    [
        503,
        'harmony unsubscribe accelerometer failed'
    ],
    [
        901,
        'web accelerometer unsupported'
    ]
]);
class StartAccelerometerFailImpl extends UniError implements IStartAccelerometerFail {
    errCode: AccelerometerErrorCode;
    constructor(errCode: AccelerometerErrorCode){
        super();
        this.errCode = errCode;
        this.errSubject = AccelerometerUniErrorSubject;
    }
}
class StopAccelerometerFailImpl extends UniError implements IStopAccelerometerFail {
    errCode: AccelerometerErrorCode;
    constructor(errCode: AccelerometerErrorCode){
        super();
        this.errCode = errCode;
        this.errSubject = AccelerometerUniErrorSubject;
    }
}
function createStartAccelerometerFail(errCode: AccelerometerErrorCode, errMsg: string | null = null, data: UTSJSONObject | null = null, cause: Error | null = null): StartAccelerometerFailImpl {
    const error = new StartAccelerometerFailImpl(errCode);
    const defaultMessage = UTS.mapGet(AccelerometerUniErrors, errCode);
    error.errMsg = errMsg != null ? errMsg : defaultMessage != null ? defaultMessage : '';
    error.data = data;
    if (cause != null) {
        error.cause = cause;
    }
    return error;
}
function createStopAccelerometerFail(errCode: AccelerometerErrorCode, errMsg: string | null = null, data: UTSJSONObject | null = null, cause: Error | null = null): StopAccelerometerFailImpl {
    const error = new StopAccelerometerFailImpl(errCode);
    const defaultMessage = UTS.mapGet(AccelerometerUniErrors, errCode);
    error.errMsg = errMsg != null ? errMsg : defaultMessage != null ? defaultMessage : '';
    error.data = data;
    if (cause != null) {
        error.cause = cause;
    }
    return error;
}
const gravityAcceleration: number = -9.8;
function normalizeMetersPerSecondSquared(value: number): number {
    return value / gravityAcceleration;
}
function normalizeMetersPerSecondSquaredAxes(x: number, y: number, z: number): number[] {
    return [
        normalizeMetersPerSecondSquared(x),
        normalizeMetersPerSecondSquared(y),
        normalizeMetersPerSecondSquared(z)
    ];
}
const startOkMsg = 'startAccelerometer:ok';
const stopOkMsg = 'stopAccelerometer:ok';
const defaultInterval: AccelerometerInterval = 'normal';
const harmonyPermissions = [
    'ohos.permission.ACCELEROMETER'
];
let started: boolean = false;
let nativeListenerBound: boolean = false;
const callbacks: Array<OnAccelerometerChangeCallback> = [];
function createStartAccelerometerSuccess(errMsg: string): StartAccelerometerSuccess {
    return {
        errMsg: errMsg
    } as StartAccelerometerSuccess;
}
function createStopAccelerometerSuccess(errMsg: string): StopAccelerometerSuccess {
    return {
        errMsg: errMsg
    } as StopAccelerometerSuccess;
}
function normalizeInterval(interval: AccelerometerInterval | null): string {
    if (interval == 'game' || interval == 'ui') {
        return interval;
    }
    return defaultInterval;
}
function hasCallback(callback: OnAccelerometerChangeCallback): boolean {
    let index = 0;
    while(index < callbacks.length){
        if (callbacks[index] == callback) {
            return true;
        }
        index++;
    }
    return false;
}
function removeCallback(callback: OnAccelerometerChangeCallback): void {
    let index = 0;
    while(index < callbacks.length){
        if (callbacks[index] == callback) {
            callbacks.splice(index, 1);
            return;
        }
        index++;
    }
}
function dispatchAccelerometerChange(x: number, y: number, z: number): void {
    const normalizedValues = normalizeMetersPerSecondSquaredAxes(x, y, z);
    const result: OnAccelerometerChangeCallbackResult = {
        x: normalizedValues[0],
        y: normalizedValues[1],
        z: normalizedValues[2]
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
    AccelerometerNative.setListener((x: number, y: number, z: number)=>{
        dispatchAccelerometerChange(x, y, z);
    });
    nativeListenerBound = true;
}
function callStartSuccess(options: StartAccelerometerOptions | null): void {
    const result = createStartAccelerometerSuccess(startOkMsg);
    options?.success?.(result);
    options?.complete?.(result);
}
function callStartFail(options: StartAccelerometerOptions | null, fail: StartAccelerometerFail): void {
    options?.fail?.(fail);
    options?.complete?.(fail);
}
function callStopSuccess(options: StopAccelerometerOptions | null): void {
    const result = createStopAccelerometerSuccess(stopOkMsg);
    options?.success?.(result);
    options?.complete?.(result);
}
function callStopFail(options: StopAccelerometerOptions | null, fail: StopAccelerometerFail): void {
    options?.fail?.(fail);
    options?.complete?.(fail);
}
function createNativeData(nativeCode: number, action: string): UTSJSONObject {
    return new UTSJSONObject({
        platformCode: nativeCode,
        action: action
    });
}
function mapStartNativeError(nativeCode: number): StartAccelerometerFail {
    const data = createNativeData(nativeCode, 'startAccelerometer');
    let errCode: AccelerometerErrorCode = 604;
    if (nativeCode == 501 || nativeCode == 502 || nativeCode == 503) {
        errCode = nativeCode as AccelerometerErrorCode;
    } else {
        errCode = 602;
    }
    return createStartAccelerometerFail(errCode, 'startAccelerometer:fail', data);
}
function mapStopNativeError(nativeCode: number): StopAccelerometerFail {
    const data = createNativeData(nativeCode, 'stopAccelerometer');
    let errCode: AccelerometerErrorCode = 604;
    if (nativeCode == 501 || nativeCode == 502 || nativeCode == 503) {
        errCode = nativeCode as AccelerometerErrorCode;
    } else {
        errCode = 603;
    }
    return createStopAccelerometerFail(errCode, 'stopAccelerometer:fail', data);
}
function createPermissionFail(): StartAccelerometerFail {
    return createStartAccelerometerFail(602, 'startAccelerometer:fail permission denied');
}
function onAccelerometerChange(callback: OnAccelerometerChangeCallback): void {
    ensureNativeListener();
    if (!started) {
        startAccelerometer();
    }
    if (hasCallback(callback)) {
        return;
    }
    callbacks.push(callback);
}
function offAccelerometerChange(callback: OnAccelerometerChangeCallback | null = null): void {
    if (callback == null) {
        callbacks.length = 0;
    } else {
        removeCallback(callback);
    }
    if (callbacks.length == 0) {
        AccelerometerNative.removeListener();
        nativeListenerBound = false;
    }
}
function startAccelerometer(options: StartAccelerometerOptions | null = null): void {
    ensureNativeListener();
    if (started) {
        callStartSuccess(options);
        return;
    }
    const interval = normalizeInterval(options?.interval ?? null);
    UTSHarmony.requestSystemPermission(harmonyPermissions, (allRight: boolean)=>{
        if (!allRight) {
            callStartFail(options, createPermissionFail());
            return;
        }
        const nativeCode = AccelerometerNative.start(interval);
        if (nativeCode != 0) {
            callStartFail(options, mapStartNativeError(nativeCode));
            return;
        }
        started = true;
        callStartSuccess(options);
        return;
    }, ()=>{
        callStartFail(options, createPermissionFail());
        return;
    });
}
function stopAccelerometer(options: StopAccelerometerOptions | null = null): void {
    if (!started) {
        callStopSuccess(options);
        return;
    }
    const nativeCode = AccelerometerNative.stop();
    if (nativeCode != 0) {
        callStopFail(options, mapStopNativeError(nativeCode));
        return;
    }
    started = false;
    callStopSuccess(options);
}
export { AccelerometerInterval as AccelerometerInterval, OnAccelerometerChangeCallback as OnAccelerometerChangeCallback, OnAccelerometerChangeCallbackResult as OnAccelerometerChangeCallbackResult, StartAccelerometerComplete as StartAccelerometerComplete, StartAccelerometerCompleteCallback as StartAccelerometerCompleteCallback, StartAccelerometerFail as StartAccelerometerFail, StartAccelerometerFailCallback as StartAccelerometerFailCallback, StartAccelerometerOptions as StartAccelerometerOptions, StartAccelerometerSuccess as StartAccelerometerSuccess, StartAccelerometerSuccessCallback as StartAccelerometerSuccessCallback, StopAccelerometerComplete as StopAccelerometerComplete, StopAccelerometerCompleteCallback as StopAccelerometerCompleteCallback, StopAccelerometerFail as StopAccelerometerFail, StopAccelerometerFailCallback as StopAccelerometerFailCallback, StopAccelerometerSuccess as StopAccelerometerSuccess, StopAccelerometerSuccessCallback as StopAccelerometerSuccessCallback, StopAccelerometerOptions as StopAccelerometerOptions };
export { AccelerometerErrorCode as AccelerometerErrorCode, IAccelerometerError as IAccelerometerError, IStartAccelerometerFail as IStartAccelerometerFail, IStopAccelerometerFail as IStopAccelerometerFail, OffAccelerometerChange as OffAccelerometerChange, OnAccelerometerChange as OnAccelerometerChange, StartAccelerometer as StartAccelerometer, StopAccelerometer as StopAccelerometer };
export { onAccelerometerChange as onAccelerometerChange };
export { offAccelerometerChange as offAccelerometerChange };
export { startAccelerometer as startAccelerometer };
export { stopAccelerometer as stopAccelerometer };
