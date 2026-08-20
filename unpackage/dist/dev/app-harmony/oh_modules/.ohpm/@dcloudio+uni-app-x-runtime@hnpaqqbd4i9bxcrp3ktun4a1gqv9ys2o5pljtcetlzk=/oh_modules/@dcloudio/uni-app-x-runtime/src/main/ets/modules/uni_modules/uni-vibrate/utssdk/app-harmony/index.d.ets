import { UTSObject, IUniError } from "@dcloudio/uni-app-framework";
type VibrateShortType = "heavy" | "medium" | "light";
declare class VibrateShortSuccess extends UTSObject {
    errMsg: string;
}
declare class VibrateLongSuccess extends UTSObject {
    errMsg: string;
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
declare class VibrateShortOptions extends UTSObject {
    type: VibrateShortType;
    success: VibrateShortSuccessCallback | null;
    fail: VibrateShortFailCallback | null;
    complete: VibrateShortCompleteCallback | null;
}
declare class VibrateLongOptions extends UTSObject {
    success: VibrateLongSuccessCallback | null;
    fail: VibrateLongFailCallback | null;
    complete: VibrateLongCompleteCallback | null;
}
type VibrateShort = (options: VibrateShortOptions) => void;
type VibrateLong = (options: VibrateLongOptions) => void;
declare const vibrateShort: VibrateShort;
declare const vibrateLong: VibrateLong;
export { VibrateShortType as VibrateShortType, VibrateShortSuccess as VibrateShortSuccess, VibrateShortSuccessCallback as VibrateShortSuccessCallback, VibrateShortFail as VibrateShortFail, VibrateShortFailCallback as VibrateShortFailCallback, VibrateShortComplete as VibrateShortComplete, VibrateShortCompleteCallback as VibrateShortCompleteCallback, VibrateLongSuccess as VibrateLongSuccess, VibrateLongSuccessCallback as VibrateLongSuccessCallback, VibrateLongFail as VibrateLongFail, VibrateLongFailCallback as VibrateLongFailCallback, VibrateLongComplete as VibrateLongComplete, VibrateLongCompleteCallback as VibrateLongCompleteCallback, VibrateErrorCode as VibrateErrorCode, VibrateShortOptions as VibrateShortOptions, VibrateLongOptions as VibrateLongOptions, VibrateShort as VibrateShort, VibrateLong as VibrateLong };
export { IVibrateLongFail as IVibrateLongFail, IVibrateShortFail as IVibrateShortFail };
export { vibrateShort as vibrateShort };
export { vibrateLong as vibrateLong };
