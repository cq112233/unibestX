import common from '@ohos.app.ability.common';
import { BusinessError } from '@kit.BasicServicesKit';
import { UTSObject, IUniError, ApiOptions, ProtocolOptions, defineAsyncApi, ApiExecutor, UTSHarmony } from "@dcloudio/uni-app-framework";
import harmonyWindow from '@ohos.window';
import { settings } from '@kit.BasicServicesKit';
type SetScreenBrightness = (options: SetScreenBrightnessOptions) => void;
class SetScreenBrightnessSuccess extends UTSObject {
}
interface ISetScreenBrightnessFail extends IUniError {
}
type SetScreenBrightnessSuccessCallback = (result: SetScreenBrightnessSuccess) => void;
type SetScreenBrightnessFail = ISetScreenBrightnessFail;
type SetScreenBrightnessFailCallback = (result: SetScreenBrightnessFail) => void;
type SetScreenBrightnessComplete = SetScreenBrightnessSuccess | SetScreenBrightnessFail;
type SetScreenBrightnessCompleteCallback = (result: SetScreenBrightnessComplete) => void;
class SetScreenBrightnessOptions extends UTSObject {
    value!: number;
    success: SetScreenBrightnessSuccessCallback | null = null;
    fail: SetScreenBrightnessFailCallback | null = null;
    complete: SetScreenBrightnessCompleteCallback | null = null;
}
type GetScreenBrightness = (options: GetScreenBrightnessOptions) => void;
class GetScreenBrightnessSuccess extends UTSObject {
    value!: number;
}
interface IGetScreenBrightnessFail extends IUniError {
}
type GetScreenBrightnessSuccessCallback = (result: GetScreenBrightnessSuccess) => void;
type GetScreenBrightnessFail = IGetScreenBrightnessFail;
type GetScreenBrightnessFailCallback = (result: GetScreenBrightnessFail) => void;
type GetScreenBrightnessComplete = GetScreenBrightnessSuccess | GetScreenBrightnessFail;
type GetScreenBrightnessCompleteCallback = (result: GetScreenBrightnessComplete) => void;
class GetScreenBrightnessOptions extends UTSObject {
    success: GetScreenBrightnessSuccessCallback | null = null;
    fail: GetScreenBrightnessFailCallback | null = null;
    complete: GetScreenBrightnessCompleteCallback | null = null;
}
type SetKeepScreenOn = (options: SetKeepScreenOnOptions) => void;
class SetKeepScreenOnSuccess extends UTSObject {
    errMsg!: string;
}
interface ISetKeepScreenOnFail extends IUniError {
}
type SetKeepScreenOnSuccessCallback = (result: SetKeepScreenOnSuccess) => void;
type SetKeepScreenOnFail = ISetKeepScreenOnFail;
type SetKeepScreenOnFailCallback = (result: SetKeepScreenOnFail) => void;
type SetKeepScreenOnComplete = SetKeepScreenOnSuccess | SetKeepScreenOnFail;
type SetKeepScreenOnCompleteCallback = (result: SetKeepScreenOnComplete) => void;
class SetKeepScreenOnOptions extends UTSObject {
    keepScreenOn!: boolean;
    success: SetKeepScreenOnSuccessCallback | null = null;
    fail: SetKeepScreenOnFailCallback | null = null;
    complete: SetKeepScreenOnCompleteCallback | null = null;
}
const API_SET_SCREEN_BRIGHTNESS = 'setScreenBrightness';
const API_GET_SCREEN_BRIGHTNESS = 'getScreenBrightness';
const API_SET_KEEP_SCREEN_ON = 'setKeepScreenOn';
const SetScreenBrightnessApiOptions: ApiOptions<SetScreenBrightnessOptions> = {
    formatArgs: new Map<string, Function>([
        [
            'value',
            (value: number, params: SetScreenBrightnessOptions)=>{
                if (value < 0) {
                    params.value = 0;
                }
                if (value > 1) {
                    params.value = 1;
                }
            }
        ]
    ])
};
const SetScreenBrightnessApiProtocol = new Map<string, ProtocolOptions>([
    [
        'value',
        {
            type: 'number',
            required: true
        }
    ]
]);
function normalizeBrightness(value: number): number {
    if (value < 0) {
        return 0;
    }
    if (value > 1) {
        return 1;
    }
    return value;
}
const setScreenBrightness: SetScreenBrightness = defineAsyncApi<SetScreenBrightnessOptions, SetScreenBrightnessSuccess>(API_SET_SCREEN_BRIGHTNESS, (options: SetScreenBrightnessOptions, res: ApiExecutor<SetScreenBrightnessSuccess>)=>{
    const windowStage: harmonyWindow.WindowStage = UTSHarmony.getWindowStage() as harmonyWindow.WindowStage;
    windowStage.getMainWindow((err: BusinessError, window)=>{
        const errCode: number = err.code;
        if (errCode) {
            res.reject(`setScreenBrightness:fail. code: ${err.code}, message: ${err.message}`);
            return;
        }
        let brightness: number = normalizeBrightness(options.value);
        try {
            window.setWindowBrightness(brightness, (err: BusinessError)=>{
                const errCode: number = err.code;
                if (errCode) {
                    res.reject(`setScreenBrightness:fail. code: ${err.code}, message: ${err.message}`);
                    return;
                }
                res.resolve({} as SetScreenBrightnessSuccess);
            });
        } catch (exception) {
            res.reject(`setScreenBrightness:fail. code: ${exception.code}, message: ${exception.message}`);
        }
    });
}, SetScreenBrightnessApiProtocol, SetScreenBrightnessApiOptions) as SetScreenBrightness;
const getScreenBrightness: GetScreenBrightness = defineAsyncApi<GetScreenBrightnessOptions, GetScreenBrightnessSuccess>(API_GET_SCREEN_BRIGHTNESS, (_: GetScreenBrightnessOptions, res: ApiExecutor<GetScreenBrightnessSuccess>)=>{
    const windowStage: harmonyWindow.WindowStage = UTSHarmony.getWindowStage() as harmonyWindow.WindowStage;
    windowStage.getMainWindow((err: BusinessError, window)=>{
        const errCode: number = err.code;
        if (errCode) {
            res.reject(`getScreenBrightness:fail. code: ${err.code}, message: ${err.message}`);
            return;
        }
        try {
            let brightness = window.getWindowProperties().brightness;
            if (brightness == -1) {
                const context = UTSHarmony.getUIAbilityContext() as common.UIAbilityContext;
                let value = Number(settings.getValueSync(context, settings.display.SCREEN_BRIGHTNESS_STATUS, '-1'));
                brightness = (!isNaN(value) && value >= 0) ? value / 255 : 1;
            }
            res.resolve({
                value: normalizeBrightness(brightness)
            } as GetScreenBrightnessSuccess);
        } catch (exception) {
            res.reject(`getScreenBrightness:fail. code: ${exception.code}, message: ${exception.message}`);
        }
    });
}) as GetScreenBrightness;
const setKeepScreenOn: SetKeepScreenOn = defineAsyncApi<SetKeepScreenOnOptions, SetKeepScreenOnSuccess>(API_SET_KEEP_SCREEN_ON, (option: SetKeepScreenOnOptions, res: ApiExecutor<SetKeepScreenOnSuccess>)=>{
    const windowStage: harmonyWindow.WindowStage = UTSHarmony.getWindowStage() as harmonyWindow.WindowStage;
    windowStage.getMainWindow((err: BusinessError, window)=>{
        const errCode: number = err.code;
        if (errCode) {
            res.reject(`setKeepScreenOn:fail. code: ${err.code}, message: ${err.message}`);
            return;
        }
        try {
            window.setWindowKeepScreenOn(option.keepScreenOn, (err: BusinessError)=>{
                const errCode: number = err.code;
                if (errCode) {
                    res.reject(`setKeepScreenOn:fail. code: ${err.code}, message: ${err.message}`);
                    return;
                }
                res.resolve({
                    errMsg: 'setKeepScreenOn:ok'
                } as SetKeepScreenOnSuccess);
            });
        } catch (exception) {
            res.reject(`setKeepScreenOn:fail. code: ${exception.code}, message: ${exception.message}`);
        }
    });
}) as SetKeepScreenOn;
export { GetScreenBrightness as GetScreenBrightness, GetScreenBrightnessComplete as GetScreenBrightnessComplete, GetScreenBrightnessCompleteCallback as GetScreenBrightnessCompleteCallback, GetScreenBrightnessFail as GetScreenBrightnessFail, GetScreenBrightnessFailCallback as GetScreenBrightnessFailCallback, GetScreenBrightnessOptions as GetScreenBrightnessOptions, GetScreenBrightnessSuccess as GetScreenBrightnessSuccess, GetScreenBrightnessSuccessCallback as GetScreenBrightnessSuccessCallback, SetKeepScreenOn as SetKeepScreenOn, SetKeepScreenOnComplete as SetKeepScreenOnComplete, SetKeepScreenOnCompleteCallback as SetKeepScreenOnCompleteCallback, SetKeepScreenOnFail as SetKeepScreenOnFail, SetKeepScreenOnFailCallback as SetKeepScreenOnFailCallback, SetKeepScreenOnOptions as SetKeepScreenOnOptions, SetKeepScreenOnSuccess as SetKeepScreenOnSuccess, SetKeepScreenOnSuccessCallback as SetKeepScreenOnSuccessCallback, SetScreenBrightness as SetScreenBrightness, SetScreenBrightnessComplete as SetScreenBrightnessComplete, SetScreenBrightnessCompleteCallback as SetScreenBrightnessCompleteCallback, SetScreenBrightnessFail as SetScreenBrightnessFail, SetScreenBrightnessFailCallback as SetScreenBrightnessFailCallback, SetScreenBrightnessOptions as SetScreenBrightnessOptions, SetScreenBrightnessSuccess as SetScreenBrightnessSuccess, SetScreenBrightnessSuccessCallback as SetScreenBrightnessSuccessCallback };
export { IGetScreenBrightnessFail as IGetScreenBrightnessFail, ISetKeepScreenOnFail as ISetKeepScreenOnFail, ISetScreenBrightnessFail as ISetScreenBrightnessFail };
export { setScreenBrightness as setScreenBrightness };
export { getScreenBrightness as getScreenBrightness };
export { setKeepScreenOn as setKeepScreenOn };
