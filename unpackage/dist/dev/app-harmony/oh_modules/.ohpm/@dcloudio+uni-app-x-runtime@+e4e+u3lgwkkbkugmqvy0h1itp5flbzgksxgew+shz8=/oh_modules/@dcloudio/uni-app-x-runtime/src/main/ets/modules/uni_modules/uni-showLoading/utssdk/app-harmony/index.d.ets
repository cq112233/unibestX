import { IUniError, UniError, UTSObject, UniPage } from "@dcloudio/uni-app-framework";
interface ShowLoadingSuccess {
    errMsg: string;
}
type ShowLoadingFailErrorCode = 4;
interface ShowLoadingFail extends IUniError {
    errCode: ShowLoadingFailErrorCode;
}
declare class ShowLoadingSuccessImpl implements ShowLoadingSuccess {
    errMsg: string;
    constructor(errMsg?: string);
}
declare class ShowLoadingFailImpl extends UniError implements ShowLoadingFail {
    errCode: ShowLoadingFailErrorCode;
    constructor(errMsg?: string, errCode?: ShowLoadingFailErrorCode);
}
type ShowLoadingComplete = Object;
type ShowLoadingSuccessCallback = (res: ShowLoadingSuccess) => void;
type ShowLoadingFailCallback = (res: ShowLoadingFail) => void;
type ShowLoadingCompleteCallback = (res: ShowLoadingComplete) => void;
declare class ShowLoadingOptions extends UTSObject {
    title: string | null;
    mask: boolean | null;
    iosSpinner: boolean | null;
    success: ShowLoadingSuccessCallback | null;
    fail: ShowLoadingFailCallback | null;
    complete: ShowLoadingCompleteCallback | null;
}
type ShowLoading = (options?: ShowLoadingOptions | null) => LoadingPage | null;
interface HideLoadingSuccess {
    errMsg: string;
}
type HideLoadingFailErrorCode = 4;
interface HideLoadingFail extends IUniError {
    errCode: HideLoadingFailErrorCode;
}
declare class HideLoadingSuccessImpl implements HideLoadingSuccess {
    errMsg: string;
    constructor(errMsg?: string);
}
declare class HideLoadingFailImpl extends UniError implements HideLoadingFail {
    errCode: HideLoadingFailErrorCode;
    constructor(errMsg?: string, errCode?: HideLoadingFailErrorCode);
}
type HideLoadingComplete = Object;
type HideLoadingSuccessCallback = (res: HideLoadingSuccess) => void;
type HideLoadingFailCallback = (res: HideLoadingFail) => void;
type HideLoadingCompleteCallback = (res: HideLoadingComplete) => void;
declare class HideLoadingOptions extends UTSObject {
    loadingPage: LoadingPage | null;
    success: HideLoadingSuccessCallback | null;
    fail: HideLoadingFailCallback | null;
    complete: HideLoadingCompleteCallback | null;
}
type HideLoading = (options?: HideLoadingOptions | null) => void;
type LoadingPage = UniPage;
declare const showLoading: ShowLoading;
declare const hideLoading: HideLoading;
export { ShowLoading as ShowLoading, ShowLoadingOptions as ShowLoadingOptions, ShowLoadingSuccess as ShowLoadingSuccess, ShowLoadingSuccessImpl as ShowLoadingSuccessImpl, ShowLoadingSuccessCallback as ShowLoadingSuccessCallback, ShowLoadingFail as ShowLoadingFail, ShowLoadingFailImpl as ShowLoadingFailImpl, ShowLoadingFailErrorCode as ShowLoadingFailErrorCode, ShowLoadingFailCallback as ShowLoadingFailCallback, ShowLoadingComplete as ShowLoadingComplete, ShowLoadingCompleteCallback as ShowLoadingCompleteCallback, LoadingPage as LoadingPage, HideLoading as HideLoading, HideLoadingOptions as HideLoadingOptions, HideLoadingSuccess as HideLoadingSuccess, HideLoadingSuccessImpl as HideLoadingSuccessImpl, HideLoadingSuccessCallback as HideLoadingSuccessCallback, HideLoadingFail as HideLoadingFail, HideLoadingFailImpl as HideLoadingFailImpl, HideLoadingFailCallback as HideLoadingFailCallback, HideLoadingFailErrorCode as HideLoadingFailErrorCode, HideLoadingComplete as HideLoadingComplete, HideLoadingCompleteCallback as HideLoadingCompleteCallback };
export { showLoading as showLoading };
export { hideLoading as hideLoading };
