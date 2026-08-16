import { IUniError, string, UTSObject, AsyncApiSuccessResult, AsyncApiResult } from "@dcloudio/uni-app-framework";
type SetNavigationBarColorErrorCode = 4;
interface SetNavigationBarColorFail extends IUniError {
    errCode: SetNavigationBarColorErrorCode;
}
declare class SetNavigationBarColorOptions extends UTSObject {
    frontColor: '#ffffff' | '#000000';
    backgroundColor: string.ColorString;
    success: SetNavigationBarColorSuccessCallback | null;
    fail: SetNavigationBarColorFailCallback | null;
    complete: SetNavigationBarColorCompleteCallback | null;
}
type SetNavigationBarColorSuccess = AsyncApiSuccessResult;
type SetNavigationBarColorSuccessCallback = (result: SetNavigationBarColorSuccess) => void;
type SetNavigationBarColorFailCallback = (error: SetNavigationBarColorFail) => void;
type SetNavigationBarColorComplete = AsyncApiResult;
type SetNavigationBarColorCompleteCallback = (res: SetNavigationBarColorComplete) => void;
type SetNavigationBarColor = (options: SetNavigationBarColorOptions) => void;
type SetNavigationBarTitleErrorCode = 4;
interface SetNavigationBarTitleFail extends IUniError {
    errCode: SetNavigationBarTitleErrorCode;
}
declare class SetNavigationBarTitleOptions extends UTSObject {
    title: string;
    success: SetNavigationBarTitleSuccessCallback | null;
    fail: SetNavigationBarTitleFailCallback | null;
    complete: SetNavigationBarTitleCompleteCallback | null;
}
type SetNavigationBarTitleSuccess = AsyncApiSuccessResult;
type SetNavigationBarTitleSuccessCallback = (result: SetNavigationBarTitleSuccess) => void;
type SetNavigationBarTitleFailCallback = (error: SetNavigationBarTitleFail) => void;
type SetNavigationBarTitleComplete = AsyncApiResult;
type SetNavigationBarTitleCompleteCallback = (res: SetNavigationBarTitleComplete) => void;
type SetNavigationBarTitle = (options: SetNavigationBarTitleOptions) => void;
type ShowNavigationBarLoadingSuccess = AsyncApiSuccessResult;
type ShowNavigationBarLoadingSuccessCallback = (result: ShowNavigationBarLoadingSuccess) => void;
interface ShowNavigationBarLoadingFail extends IUniError {
}
type ShowNavigationBarLoadingFailCallback = (error: ShowNavigationBarLoadingFail) => void;
declare class ShowNavigationBarLoadingOptions extends UTSObject {
    success: ShowNavigationBarLoadingSuccessCallback | null;
    fail: ShowNavigationBarLoadingFailCallback | null;
    complete: (() => void) | null;
}
type ShowNavigationBarLoading = (options?: ShowNavigationBarLoadingOptions | null) => void;
type HideNavigationBarLoadingSuccess = AsyncApiSuccessResult;
type HideNavigationBarLoadingSuccessCallback = (result: HideNavigationBarLoadingSuccess) => void;
interface HideNavigationBarLoadingFail extends IUniError {
}
type HideNavigationBarLoadingFailCallback = (error: HideNavigationBarLoadingFail) => void;
declare class HideNavigationBarLoadingOptions extends UTSObject {
    success: HideNavigationBarLoadingSuccessCallback | null;
    fail: HideNavigationBarLoadingFailCallback | null;
    complete: (() => void) | null;
}
type HideNavigationBarLoading = (options?: HideNavigationBarLoadingOptions | null) => void;
declare const setNavigationBarColor: SetNavigationBarColor;
declare const setNavigationBarTitle: SetNavigationBarTitle;
declare const showNavigationBarLoading: ShowNavigationBarLoading;
declare const hideNavigationBarLoading: HideNavigationBarLoading;
export { HideNavigationBarLoading as HideNavigationBarLoading, HideNavigationBarLoadingFail as HideNavigationBarLoadingFail, HideNavigationBarLoadingFailCallback as HideNavigationBarLoadingFailCallback, HideNavigationBarLoadingOptions as HideNavigationBarLoadingOptions, HideNavigationBarLoadingSuccess as HideNavigationBarLoadingSuccess, HideNavigationBarLoadingSuccessCallback as HideNavigationBarLoadingSuccessCallback, SetNavigationBarColor as SetNavigationBarColor, SetNavigationBarColorComplete as SetNavigationBarColorComplete, SetNavigationBarColorCompleteCallback as SetNavigationBarColorCompleteCallback, SetNavigationBarColorErrorCode as SetNavigationBarColorErrorCode, SetNavigationBarColorFail as SetNavigationBarColorFail, SetNavigationBarColorFailCallback as SetNavigationBarColorFailCallback, SetNavigationBarColorOptions as SetNavigationBarColorOptions, SetNavigationBarColorSuccess as SetNavigationBarColorSuccess, SetNavigationBarColorSuccessCallback as SetNavigationBarColorSuccessCallback, SetNavigationBarTitle as SetNavigationBarTitle, SetNavigationBarTitleComplete as SetNavigationBarTitleComplete, SetNavigationBarTitleCompleteCallback as SetNavigationBarTitleCompleteCallback, SetNavigationBarTitleErrorCode as SetNavigationBarTitleErrorCode, SetNavigationBarTitleFail as SetNavigationBarTitleFail, SetNavigationBarTitleFailCallback as SetNavigationBarTitleFailCallback, SetNavigationBarTitleOptions as SetNavigationBarTitleOptions, SetNavigationBarTitleSuccess as SetNavigationBarTitleSuccess, SetNavigationBarTitleSuccessCallback as SetNavigationBarTitleSuccessCallback, ShowNavigationBarLoading as ShowNavigationBarLoading, ShowNavigationBarLoadingFail as ShowNavigationBarLoadingFail, ShowNavigationBarLoadingFailCallback as ShowNavigationBarLoadingFailCallback, ShowNavigationBarLoadingOptions as ShowNavigationBarLoadingOptions, ShowNavigationBarLoadingSuccess as ShowNavigationBarLoadingSuccess, ShowNavigationBarLoadingSuccessCallback as ShowNavigationBarLoadingSuccessCallback };
export { setNavigationBarColor as setNavigationBarColor };
export { setNavigationBarTitle as setNavigationBarTitle };
export { showNavigationBarLoading as showNavigationBarLoading };
export { hideNavigationBarLoading as hideNavigationBarLoading };
