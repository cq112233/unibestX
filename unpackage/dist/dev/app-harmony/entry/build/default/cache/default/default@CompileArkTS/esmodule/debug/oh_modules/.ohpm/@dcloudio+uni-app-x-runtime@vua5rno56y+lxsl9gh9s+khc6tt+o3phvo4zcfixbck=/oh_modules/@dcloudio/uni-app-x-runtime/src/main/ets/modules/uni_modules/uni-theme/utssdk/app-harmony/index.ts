import { UTSObject, UTS, UniError, UTSHarmony, defineAsyncApi } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { IUniError, ProtocolOptions, ApiExecutor, ApiError } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
class OsThemeChangeResult extends UTSObject {
    osTheme!: 'light' | 'dark';
}
class AppThemeChangeResult extends UTSObject {
    appTheme!: 'light' | 'dark';
}
type OnOsThemeChangeCallback = (res: OsThemeChangeResult) => void;
type OnOsThemeChange = (callback: OnOsThemeChangeCallback) => number;
type OffOsThemeChange = (id: number) => void;
type OnHostThemeChange = (callback: OnHostThemeChangeCallback) => number;
type OffHostThemeChange = (id: number) => void;
type SetAppTheme = (options: SetAppThemeOptions) => void;
type OnAppThemeChangeCallback = (res: AppThemeChangeResult) => void;
type OnAppThemeChange = (callback: OnAppThemeChangeCallback) => number;
type OffAppThemeChange = (id: number) => void;
class SetAppThemeSuccessResult extends UTSObject {
    theme!: string;
}
type SetAppThemeSuccessCallback = (result: SetAppThemeSuccessResult) => void;
type SetAppThemeFailCallback = (result: AppThemeFail) => void;
type SetAppThemeCompleteCallback = (result: Object) => void;
class SetAppThemeOptions extends UTSObject {
    theme!: 'light' | 'dark' | 'auto';
    success: SetAppThemeSuccessCallback | null = null;
    fail: SetAppThemeFailCallback | null = null;
    complete: SetAppThemeCompleteCallback | null = null;
}
type AppThemeErrorCode = 702001 | 2002000;
type AppThemeFail = IAppThemeFail;
interface IAppThemeFail extends IUniError {
    errCode: AppThemeErrorCode;
}
class OnHostThemeChangeCallbackResult extends UTSObject {
    hostTheme!: 'light' | 'dark';
}
type OnHostThemeChangeCallback = (result: OnHostThemeChangeCallbackResult) => void;
class OnThemeChangeCallbackResult extends UTSObject {
    theme!: 'light' | 'dark';
}
const AppThemeUniErrorSubject = 'uni-theme';
const AppThemeUniErrors: Map<AppThemeErrorCode, string> = new Map([
    [
        702001,
        'invalid parameter'
    ],
    [
        2002000,
        'unknown error'
    ]
]);
class AppThemeFailImpl extends UniError implements IAppThemeFail {
    errCode: AppThemeErrorCode;
    constructor(errCode: AppThemeErrorCode) {
        super();
        this.errSubject = AppThemeUniErrorSubject;
        this.errCode = errCode;
        this.errMsg = UTS.mapGet(AppThemeUniErrors, errCode) ?? "";
    }
}
const API_SET_APP_THEME = 'setAppTheme';
const SetAppThemeApiProtocol = new Map<string, ProtocolOptions>([
    [
        'theme',
        {
            type: 'string',
            required: true
        }
    ]
]);
const onOsThemeChange: OnOsThemeChange = (callback: OnOsThemeChangeCallback): number => {
    return UTSHarmony.onOsThemeChange((res: OsThemeChangeResult) => {
        let result = {
            osTheme: res.osTheme
        } as OsThemeChangeResult;
        callback(result);
    });
};
const offOsThemeChange: OffOsThemeChange = (id: number) => {
    UTSHarmony.offOsThemeChange(id);
};
const setAppTheme: SetAppTheme = defineAsyncApi<SetAppThemeOptions, SetAppThemeSuccessResult>(API_SET_APP_THEME, (options: SetAppThemeOptions, exec: ApiExecutor<SetAppThemeSuccessResult>) => {
    if ([
        'auto',
        'dark',
        'light'
    ].includes(options.theme)) {
        UTSHarmony.setAppTheme(options.theme);
        let result = {
            theme: options.theme
        } as SetAppThemeSuccessResult;
        exec.resolve(result);
    }
    else {
        let error = new AppThemeFailImpl(702001);
        exec.reject(error.message, error as ApiError);
    }
}, SetAppThemeApiProtocol) as SetAppTheme;
const onAppThemeChange: OnAppThemeChange = (callback: OnAppThemeChangeCallback): number => {
    return UTSHarmony.onAppThemeChange((res: AppThemeChangeResult) => {
        let result = {
            appTheme: res.appTheme
        } as AppThemeChangeResult;
        callback(result);
    });
};
const offAppThemeChange: OffAppThemeChange = (id: number) => {
    UTSHarmony.offAppThemeChange(id);
};
const onHostThemeChange: OnHostThemeChange = (callback: OnHostThemeChangeCallback): number => {
    return UTSHarmony.onOsThemeChange((res: OsThemeChangeResult) => {
        const osTheme = res.osTheme;
        let result = {
            hostTheme: osTheme === "dark" ? "dark" : "light"
        } as OnHostThemeChangeCallbackResult;
        callback(result);
    });
};
const offHostThemeChange: OffHostThemeChange = (id: number) => {
    UTSHarmony.offOsThemeChange(id);
};
export { AppThemeChangeResult as AppThemeChangeResult, OnHostThemeChangeCallbackResult as OnHostThemeChangeCallbackResult, OnThemeChangeCallbackResult as OnThemeChangeCallbackResult, OsThemeChangeResult as OsThemeChangeResult, SetAppThemeOptions as SetAppThemeOptions, SetAppThemeSuccessResult as SetAppThemeSuccessResult };
export type { AppThemeErrorCode as AppThemeErrorCode, AppThemeFail as AppThemeFail, IAppThemeFail as IAppThemeFail, OffAppThemeChange as OffAppThemeChange, OffHostThemeChange as OffHostThemeChange, OffOsThemeChange as OffOsThemeChange, OnAppThemeChange as OnAppThemeChange, OnAppThemeChangeCallback as OnAppThemeChangeCallback, OnHostThemeChange as OnHostThemeChange, OnHostThemeChangeCallback as OnHostThemeChangeCallback, OnOsThemeChange as OnOsThemeChange, OnOsThemeChangeCallback as OnOsThemeChangeCallback, SetAppTheme as SetAppTheme, SetAppThemeCompleteCallback as SetAppThemeCompleteCallback, SetAppThemeFailCallback as SetAppThemeFailCallback, SetAppThemeSuccessCallback as SetAppThemeSuccessCallback };
export { onOsThemeChange as onOsThemeChange };
export { offOsThemeChange as offOsThemeChange };
export { setAppTheme as setAppTheme };
export { onAppThemeChange as onAppThemeChange };
export { offAppThemeChange as offAppThemeChange };
export { onHostThemeChange as onHostThemeChange };
export { offHostThemeChange as offHostThemeChange };
