import { UTSObject, IUniError } from "@dcloudio/uni-app-framework";
type SetScreenBrightness = (options: SetScreenBrightnessOptions) => void;
declare class SetScreenBrightnessSuccess extends UTSObject {
}
interface ISetScreenBrightnessFail extends IUniError {
}
type SetScreenBrightnessSuccessCallback = (result: SetScreenBrightnessSuccess) => void;
type SetScreenBrightnessFail = ISetScreenBrightnessFail;
type SetScreenBrightnessFailCallback = (result: SetScreenBrightnessFail) => void;
type SetScreenBrightnessComplete = SetScreenBrightnessSuccess | SetScreenBrightnessFail;
type SetScreenBrightnessCompleteCallback = (result: SetScreenBrightnessComplete) => void;
declare class SetScreenBrightnessOptions extends UTSObject {
    value: number;
    success: SetScreenBrightnessSuccessCallback | null;
    fail: SetScreenBrightnessFailCallback | null;
    complete: SetScreenBrightnessCompleteCallback | null;
}
type GetScreenBrightness = (options: GetScreenBrightnessOptions) => void;
declare class GetScreenBrightnessSuccess extends UTSObject {
    value: number;
}
interface IGetScreenBrightnessFail extends IUniError {
}
type GetScreenBrightnessSuccessCallback = (result: GetScreenBrightnessSuccess) => void;
type GetScreenBrightnessFail = IGetScreenBrightnessFail;
type GetScreenBrightnessFailCallback = (result: GetScreenBrightnessFail) => void;
type GetScreenBrightnessComplete = GetScreenBrightnessSuccess | GetScreenBrightnessFail;
type GetScreenBrightnessCompleteCallback = (result: GetScreenBrightnessComplete) => void;
declare class GetScreenBrightnessOptions extends UTSObject {
    success: GetScreenBrightnessSuccessCallback | null;
    fail: GetScreenBrightnessFailCallback | null;
    complete: GetScreenBrightnessCompleteCallback | null;
}
type SetKeepScreenOn = (options: SetKeepScreenOnOptions) => void;
declare class SetKeepScreenOnSuccess extends UTSObject {
    errMsg: string;
}
interface ISetKeepScreenOnFail extends IUniError {
}
type SetKeepScreenOnSuccessCallback = (result: SetKeepScreenOnSuccess) => void;
type SetKeepScreenOnFail = ISetKeepScreenOnFail;
type SetKeepScreenOnFailCallback = (result: SetKeepScreenOnFail) => void;
type SetKeepScreenOnComplete = SetKeepScreenOnSuccess | SetKeepScreenOnFail;
type SetKeepScreenOnCompleteCallback = (result: SetKeepScreenOnComplete) => void;
declare class SetKeepScreenOnOptions extends UTSObject {
    keepScreenOn: boolean;
    success: SetKeepScreenOnSuccessCallback | null;
    fail: SetKeepScreenOnFailCallback | null;
    complete: SetKeepScreenOnCompleteCallback | null;
}
declare const setScreenBrightness: SetScreenBrightness;
declare const getScreenBrightness: GetScreenBrightness;
declare const setKeepScreenOn: SetKeepScreenOn;
export { GetScreenBrightness as GetScreenBrightness, GetScreenBrightnessComplete as GetScreenBrightnessComplete, GetScreenBrightnessCompleteCallback as GetScreenBrightnessCompleteCallback, GetScreenBrightnessFail as GetScreenBrightnessFail, GetScreenBrightnessFailCallback as GetScreenBrightnessFailCallback, GetScreenBrightnessOptions as GetScreenBrightnessOptions, GetScreenBrightnessSuccess as GetScreenBrightnessSuccess, GetScreenBrightnessSuccessCallback as GetScreenBrightnessSuccessCallback, SetKeepScreenOn as SetKeepScreenOn, SetKeepScreenOnComplete as SetKeepScreenOnComplete, SetKeepScreenOnCompleteCallback as SetKeepScreenOnCompleteCallback, SetKeepScreenOnFail as SetKeepScreenOnFail, SetKeepScreenOnFailCallback as SetKeepScreenOnFailCallback, SetKeepScreenOnOptions as SetKeepScreenOnOptions, SetKeepScreenOnSuccess as SetKeepScreenOnSuccess, SetKeepScreenOnSuccessCallback as SetKeepScreenOnSuccessCallback, SetScreenBrightness as SetScreenBrightness, SetScreenBrightnessComplete as SetScreenBrightnessComplete, SetScreenBrightnessCompleteCallback as SetScreenBrightnessCompleteCallback, SetScreenBrightnessFail as SetScreenBrightnessFail, SetScreenBrightnessFailCallback as SetScreenBrightnessFailCallback, SetScreenBrightnessOptions as SetScreenBrightnessOptions, SetScreenBrightnessSuccess as SetScreenBrightnessSuccess, SetScreenBrightnessSuccessCallback as SetScreenBrightnessSuccessCallback };
export { IGetScreenBrightnessFail as IGetScreenBrightnessFail, ISetKeepScreenOnFail as ISetKeepScreenOnFail, ISetScreenBrightnessFail as ISetScreenBrightnessFail };
export { setScreenBrightness as setScreenBrightness };
export { getScreenBrightness as getScreenBrightness };
export { setKeepScreenOn as setKeepScreenOn };
