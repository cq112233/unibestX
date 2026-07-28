import { UTSObject, IUniError } from "@dcloudio/uni-app-framework";
declare class OsThemeChangeResult extends UTSObject {
    osTheme: 'light' | 'dark';
}
declare class AppThemeChangeResult extends UTSObject {
    appTheme: 'light' | 'dark';
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
declare class SetAppThemeSuccessResult extends UTSObject {
    theme: string;
}
type SetAppThemeSuccessCallback = (result: SetAppThemeSuccessResult) => void;
type SetAppThemeFailCallback = (result: AppThemeFail) => void;
type SetAppThemeCompleteCallback = (result: Object) => void;
declare class SetAppThemeOptions extends UTSObject {
    theme: 'light' | 'dark' | 'auto';
    success: SetAppThemeSuccessCallback | null;
    fail: SetAppThemeFailCallback | null;
    complete: SetAppThemeCompleteCallback | null;
}
type AppThemeErrorCode = 702001 | 2002000;
type AppThemeFail = IAppThemeFail;
interface IAppThemeFail extends IUniError {
    errCode: AppThemeErrorCode;
}
declare class OnHostThemeChangeCallbackResult extends UTSObject {
    hostTheme: 'light' | 'dark';
}
type OnHostThemeChangeCallback = (result: OnHostThemeChangeCallbackResult) => void;
declare class OnThemeChangeCallbackResult extends UTSObject {
    theme: 'light' | 'dark';
}
declare const onOsThemeChange: OnOsThemeChange;
declare const offOsThemeChange: OffOsThemeChange;
declare const setAppTheme: SetAppTheme;
declare const onAppThemeChange: OnAppThemeChange;
declare const offAppThemeChange: OffAppThemeChange;
declare const onHostThemeChange: OnHostThemeChange;
declare const offHostThemeChange: OffHostThemeChange;
export { AppThemeChangeResult as AppThemeChangeResult, AppThemeErrorCode as AppThemeErrorCode, AppThemeFail as AppThemeFail, IAppThemeFail as IAppThemeFail, OffAppThemeChange as OffAppThemeChange, OffHostThemeChange as OffHostThemeChange, OffOsThemeChange as OffOsThemeChange, OnAppThemeChange as OnAppThemeChange, OnAppThemeChangeCallback as OnAppThemeChangeCallback, OnHostThemeChange as OnHostThemeChange, OnHostThemeChangeCallback as OnHostThemeChangeCallback, OnHostThemeChangeCallbackResult as OnHostThemeChangeCallbackResult, OnOsThemeChange as OnOsThemeChange, OnOsThemeChangeCallback as OnOsThemeChangeCallback, OnThemeChangeCallbackResult as OnThemeChangeCallbackResult, OsThemeChangeResult as OsThemeChangeResult, SetAppTheme as SetAppTheme, SetAppThemeCompleteCallback as SetAppThemeCompleteCallback, SetAppThemeFailCallback as SetAppThemeFailCallback, SetAppThemeOptions as SetAppThemeOptions, SetAppThemeSuccessCallback as SetAppThemeSuccessCallback, SetAppThemeSuccessResult as SetAppThemeSuccessResult };
export { onOsThemeChange as onOsThemeChange };
export { offOsThemeChange as offOsThemeChange };
export { setAppTheme as setAppTheme };
export { onAppThemeChange as onAppThemeChange };
export { offAppThemeChange as offAppThemeChange };
export { onHostThemeChange as onHostThemeChange };
export { offHostThemeChange as offHostThemeChange };
