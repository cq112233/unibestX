import { UTSObject, IUniError, UTS, UniError } from "@dcloudio/uni-app-framework";
import { VibrateNative } from "./VibrateNative";
type VibrateShortType = "heavy" | "medium" | "light";
class VibrateShortSuccess extends UTSObject {
    errMsg!: string;
}
class VibrateLongSuccess extends UTSObject {
    errMsg!: string;
}
type VibrateErrorCode = 9001001 | 9001002 | 9001003;
interface IVibrateShortFail extends IUniError {
    errCode: VibrateErrorCode;
}
interface IVibrateLongFail extends IUniError {
    errCode: VibrateErrorCode;
}
type VibrateShortFail = IVibrateShortFail;
type VibrateLongFail = IVibrateLongFail;
type VibrateShortSuccessCallback = (result: VibrateShortSuccess) => void;
type VibrateLongSuccessCallback = (result: VibrateLongSuccess) => void;
type VibrateShortFailCallback = (result: VibrateShortFail) => void;
type VibrateLongFailCallback = (result: VibrateLongFail) => void;
type VibrateShortComplete = VibrateShortSuccess | VibrateShortFail;
type VibrateLongComplete = VibrateLongSuccess | VibrateLongFail;
type VibrateShortCompleteCallback = (result: VibrateShortComplete) => void;
type VibrateLongCompleteCallback = (result: VibrateLongComplete) => void;
class VibrateShortOptions extends UTSObject {
    type!: VibrateShortType;
    success: VibrateShortSuccessCallback | null = null;
    fail: VibrateShortFailCallback | null = null;
    complete: VibrateShortCompleteCallback | null = null;
}
class VibrateLongOptions extends UTSObject {
    success: VibrateLongSuccessCallback | null = null;
    fail: VibrateLongFailCallback | null = null;
    complete: VibrateLongCompleteCallback | null = null;
}
type VibrateShort = (options: VibrateShortOptions) => void;
type VibrateLong = (options: VibrateLongOptions) => void;
const VibrateUniErrorSubject = 'uni-vibrate';
const VibrateUniErrors: Map<VibrateErrorCode, string> = new Map([
    [
        9001001,
        'vibrate:fail app context is null'
    ],
    [
        9001002,
        'vibrate:fail system not support'
    ],
    [
        9001003,
        'vibrate:fail trigger vibrator failed'
    ]
]);
class VibrateShortFailImpl extends UniError implements IVibrateShortFail {
    errCode: VibrateErrorCode;
    constructor(errCode: VibrateErrorCode){
        super();
        this.errSubject = VibrateUniErrorSubject;
        this.errCode = errCode;
        this.errMsg = UTS.mapGet(VibrateUniErrors, errCode) ?? '';
    }
}
class VibrateLongFailImpl extends UniError implements IVibrateLongFail {
    errCode: VibrateErrorCode;
    constructor(errCode: VibrateErrorCode){
        super();
        this.errSubject = VibrateUniErrorSubject;
        this.errCode = errCode;
        this.errMsg = UTS.mapGet(VibrateUniErrors, errCode) ?? '';
    }
}
function createVibrateShortFail(code: number): VibrateShortFail {
    return new VibrateShortFailImpl(code as VibrateErrorCode);
}
function createVibrateLongFail(code: number): VibrateLongFail {
    return new VibrateLongFailImpl(code as VibrateErrorCode);
}
const vibrateShort: VibrateShort = (options: VibrateShortOptions)=>{
    const resultCode = VibrateNative.vibrateShort(options.type);
    if (resultCode == 0) {
        const result: VibrateShortSuccess = {
            errMsg: 'vibrateShort:ok'
        };
        options.success?.(result);
        options.complete?.(result);
        return;
    }
    const fail = createVibrateShortFail(resultCode);
    options.fail?.(fail);
    options.complete?.(fail);
};
const vibrateLong: VibrateLong = (options: VibrateLongOptions)=>{
    const resultCode = VibrateNative.vibrateLong();
    if (resultCode == 0) {
        const result: VibrateLongSuccess = {
            errMsg: 'vibrateLong:ok'
        };
        options.success?.(result);
        options.complete?.(result);
        return;
    }
    const fail = createVibrateLongFail(resultCode);
    options.fail?.(fail);
    options.complete?.(fail);
};
export { VibrateShortType as VibrateShortType, VibrateShortSuccess as VibrateShortSuccess, VibrateShortSuccessCallback as VibrateShortSuccessCallback, VibrateShortFail as VibrateShortFail, VibrateShortFailCallback as VibrateShortFailCallback, VibrateShortComplete as VibrateShortComplete, VibrateShortCompleteCallback as VibrateShortCompleteCallback, VibrateLongSuccess as VibrateLongSuccess, VibrateLongSuccessCallback as VibrateLongSuccessCallback, VibrateLongFail as VibrateLongFail, VibrateLongFailCallback as VibrateLongFailCallback, VibrateLongComplete as VibrateLongComplete, VibrateLongCompleteCallback as VibrateLongCompleteCallback, VibrateErrorCode as VibrateErrorCode, VibrateShortOptions as VibrateShortOptions, VibrateLongOptions as VibrateLongOptions, VibrateShort as VibrateShort, VibrateLong as VibrateLong };
export { IVibrateLongFail as IVibrateLongFail, IVibrateShortFail as IVibrateShortFail };
export { vibrateShort as vibrateShort };
export { vibrateLong as vibrateLong };
