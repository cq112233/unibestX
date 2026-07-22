import { MemoryWarningNative } from "./MemoryWarningNative";
import { UTSObject, IUniError, UTS, UniError, UTSJSONObject, UTSHarmony } from "@dcloudio/uni-app-framework";
class MemoryWarningCallbackResult extends UTSObject {
    level: number | null = null;
}
type OnMemoryWarningCallback = (result: MemoryWarningCallbackResult) => void;
type OnMemoryWarning = (callback: OnMemoryWarningCallback) => void;
type OffMemoryWarning = (callback: OnMemoryWarningCallback | null) => void;
type MemoryWarningErrorCode = 1100601 | 1100602;
interface MemoryWarningFail extends IUniError {
    errCode: MemoryWarningErrorCode;
}
const MemoryWarningUniErrorSubject = 'uni-memorywarning';
const MemoryWarningUniErrors: Map<MemoryWarningErrorCode, string> = new Map([
    [
        1100601,
        'memory warning listener registration failed'
    ],
    [
        1100602,
        'memory warning listener removal failed'
    ]
]);
class MemoryWarningFailImpl extends UniError implements MemoryWarningFail {
    errCode: MemoryWarningErrorCode;
    constructor(errCode: MemoryWarningErrorCode){
        super();
        this.errSubject = MemoryWarningUniErrorSubject;
        this.errCode = errCode;
        this.errMsg = UTS.mapGet(MemoryWarningUniErrors, errCode) ?? '';
    }
}
function createMemoryWarningNativeError(errCode: MemoryWarningErrorCode, platformCode: number | null, detail: string | null = null): MemoryWarningFailImpl {
    const fail = new MemoryWarningFailImpl(errCode);
    if (detail != null) {
        fail.errMsg = detail;
    }
    if (platformCode != null) {
        fail.data = new UTSJSONObject({
            platformCode: platformCode
        });
    }
    return fail;
}
let listeners: OnMemoryWarningCallback[] = [];
let nativeWrappers: Map<OnMemoryWarningCallback, (event: MemoryWarningCallbackResult) => void> = new Map();
const onMemoryWarning: OnMemoryWarning = (callback: OnMemoryWarningCallback)=>{
    if (listeners.indexOf(callback) != -1) {
        return;
    }
    const wrapper = (event: MemoryWarningCallbackResult): void =>{
        callback(event);
    };
    const shouldStartNativeListen = listeners.length == 0;
    try {
        if (shouldStartNativeListen) {
            const uiAbilityContext = UTSHarmony.getUIAbilityContext();
            MemoryWarningNative.startListen(uiAbilityContext);
        }
        MemoryWarningNative.addListener(wrapper);
    } catch (e) {
        throw createMemoryWarningNativeError(1100601, 501, (e as Error).message);
    }
    listeners.push(callback);
    nativeWrappers.set(callback, wrapper);
};
const offMemoryWarning: OffMemoryWarning = (callback: OnMemoryWarningCallback | null = null)=>{
    if (callback == null) {
        try {
            listeners.forEach((item)=>{
                const wrapper = UTS.mapGet(nativeWrappers, item);
                if (wrapper != null) {
                    MemoryWarningNative.removeListener(wrapper);
                }
            });
            const uiAbilityContext = UTSHarmony.getUIAbilityContext();
            MemoryWarningNative.stopListen(uiAbilityContext);
            listeners = [];
            nativeWrappers.clear();
        } catch (e) {
            throw createMemoryWarningNativeError(1100602, 502, (e as Error).message);
        }
        return;
    }
    const wrapper = UTS.mapGet(nativeWrappers, callback);
    if (wrapper == null) {
        return;
    }
    try {
        MemoryWarningNative.removeListener(wrapper);
        if (listeners.length == 1) {
            const uiAbilityContext = UTSHarmony.getUIAbilityContext();
            MemoryWarningNative.stopListen(uiAbilityContext);
        }
    } catch (e) {
        throw createMemoryWarningNativeError(1100602, 502, (e as Error).message);
    }
    nativeWrappers.delete(callback);
    const index = listeners.indexOf(callback);
    if (index != -1) {
        listeners.splice(index, 1);
    }
};
export { MemoryWarningCallbackResult as MemoryWarningCallbackResult, MemoryWarningErrorCode as MemoryWarningErrorCode, MemoryWarningFail as MemoryWarningFail, OffMemoryWarning as OffMemoryWarning, OnMemoryWarning as OnMemoryWarning, OnMemoryWarningCallback as OnMemoryWarningCallback };
export { onMemoryWarning as onMemoryWarning };
export { offMemoryWarning as offMemoryWarning };
