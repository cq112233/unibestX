import { UniError, UTSObject, uni, UTS, UTSJSONObject, getCurrentPages } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { IUniError, UniPage, OpenDialogPageOptions, CloseDialogPageOptions } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
interface ShowLoadingSuccess {
    errMsg: string;
}
type ShowLoadingFailErrorCode = 4;
interface ShowLoadingFail extends IUniError {
    errCode: ShowLoadingFailErrorCode;
}
class ShowLoadingSuccessImpl implements ShowLoadingSuccess {
    errMsg: string;
    constructor(errMsg: string = 'showLoading:ok') {
        this.errMsg = errMsg;
    }
}
class ShowLoadingFailImpl extends UniError implements ShowLoadingFail {
    errCode: ShowLoadingFailErrorCode;
    constructor(errMsg: string = 'showLoading:fail cancel', errCode: ShowLoadingFailErrorCode = 4) {
        super();
        this.errMsg = errMsg;
        this.errCode = errCode;
    }
}
type ShowLoadingComplete = Object;
type ShowLoadingSuccessCallback = (res: ShowLoadingSuccess) => void;
type ShowLoadingFailCallback = (res: ShowLoadingFail) => void;
type ShowLoadingCompleteCallback = (res: ShowLoadingComplete) => void;
class ShowLoadingOptions extends UTSObject {
    title: string | null = null;
    mask: boolean | null = null;
    iosSpinner: boolean | null = true;
    success: ShowLoadingSuccessCallback | null = null;
    fail: ShowLoadingFailCallback | null = null;
    complete: ShowLoadingCompleteCallback | null = null;
}
type ShowLoading = (options?: ShowLoadingOptions | null) => LoadingPage | null;
interface HideLoadingSuccess {
    errMsg: string;
}
type HideLoadingFailErrorCode = 4;
interface HideLoadingFail extends IUniError {
    errCode: HideLoadingFailErrorCode;
}
class HideLoadingSuccessImpl implements HideLoadingSuccess {
    errMsg: string;
    constructor(errMsg: string = 'hideLoading:ok') {
        this.errMsg = errMsg;
    }
}
class HideLoadingFailImpl extends UniError implements HideLoadingFail {
    errCode: HideLoadingFailErrorCode;
    constructor(errMsg: string = 'hideLoading:fail cancel', errCode: HideLoadingFailErrorCode = 4) {
        super();
        this.errMsg = errMsg;
        this.errCode = errCode;
    }
}
type HideLoadingComplete = Object;
type HideLoadingSuccessCallback = (res: HideLoadingSuccess) => void;
type HideLoadingFailCallback = (res: HideLoadingFail) => void;
type HideLoadingCompleteCallback = (res: HideLoadingComplete) => void;
class HideLoadingOptions extends UTSObject {
    loadingPage: LoadingPage | null = null;
    success: HideLoadingSuccessCallback | null = null;
    fail: HideLoadingFailCallback | null = null;
    complete: HideLoadingCompleteCallback | null = null;
}
type HideLoading = (options?: HideLoadingOptions | null) => void;
type LoadingPage = UniPage;
const showLoading: ShowLoading = (options: ShowLoadingOptions | null = null): UniPage | null => {
    const uuid = `${Date.now()}${Math.floor(Math.random() * 1e7)}`;
    const baseEventName = `uni_loading_${uuid}`;
    const readyEventName = `${baseEventName}_ready`;
    const optionsEventName = `${baseEventName}_options`;
    const successEventName = `${baseEventName}_success`;
    const failEventName = `${baseEventName}_fail`;
    uni.$on(readyEventName, () => {
        uni.$emit(optionsEventName, options != null ? UTS.JSON.parse(UTS.JSON.stringify(options)!) : new UTSJSONObject({}));
    });
    uni.$on(successEventName, (_: string) => {
        const res = new ShowLoadingSuccessImpl();
        options?.success?.(res);
        options?.complete?.(res);
    });
    uni.$on(failEventName, () => {
        const res = new ShowLoadingFailImpl();
        options?.fail?.(res);
        options?.complete?.(res);
    });
    const openRet: UniPage | null = uni.openDialogPage({
        url: `uni:showLoading?readyEventName=${readyEventName}&optionsEventName=${optionsEventName}&successEventName=${successEventName}&failEventName=${failEventName}`,
        fail(err) {
            const res = new ShowLoadingFailImpl(`showLoading failed, ${err['errMsg']}`);
            options?.fail?.(res);
            options?.complete?.(res);
            uni.$off(readyEventName);
            uni.$off(successEventName);
            uni.$off(failEventName);
        }
    } as OpenDialogPageOptions);
    if (openRet != null) {
        return openRet as LoadingPage;
    }
    const res = new ShowLoadingFailImpl();
    options?.fail?.(res);
    options?.complete?.(res);
    return null;
};
const SYSTEM_DIALOG_LOADING_PAGE_PATH = 'uni:showLoading';
const hideLoading: HideLoading = (options: HideLoadingOptions | null = null) => {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    if (currentPage == null) {
        const res = new HideLoadingFailImpl();
        options?.fail?.(res);
        options?.complete?.(res);
        return;
    }
    const loadingPage = options?.loadingPage;
    const systemDialogPages = currentPage.$getSystemDialogPages();
    for (let i = systemDialogPages.length - 1; i >= 0; i--) {
        const page = systemDialogPages[i];
        if (!page.route.startsWith(SYSTEM_DIALOG_LOADING_PAGE_PATH)) {
            continue;
        }
        if (loadingPage == null) {
            uni.closeDialogPage({
                dialogPage: page
            } as CloseDialogPageOptions);
        }
        else {
            if (loadingPage === page) {
                uni.closeDialogPage({
                    dialogPage: page
                } as CloseDialogPageOptions);
                break;
            }
        }
    }
    const res = new HideLoadingSuccessImpl();
    options?.success?.(res);
    options?.complete?.(res);
};
export { ShowLoadingOptions as ShowLoadingOptions, ShowLoadingSuccessImpl as ShowLoadingSuccessImpl, ShowLoadingFailImpl as ShowLoadingFailImpl, HideLoadingOptions as HideLoadingOptions, HideLoadingSuccessImpl as HideLoadingSuccessImpl, HideLoadingFailImpl as HideLoadingFailImpl };
export type { ShowLoading as ShowLoading, ShowLoadingSuccess as ShowLoadingSuccess, ShowLoadingSuccessCallback as ShowLoadingSuccessCallback, ShowLoadingFail as ShowLoadingFail, ShowLoadingFailErrorCode as ShowLoadingFailErrorCode, ShowLoadingFailCallback as ShowLoadingFailCallback, ShowLoadingComplete as ShowLoadingComplete, ShowLoadingCompleteCallback as ShowLoadingCompleteCallback, LoadingPage as LoadingPage, HideLoading as HideLoading, HideLoadingSuccess as HideLoadingSuccess, HideLoadingSuccessCallback as HideLoadingSuccessCallback, HideLoadingFail as HideLoadingFail, HideLoadingFailCallback as HideLoadingFailCallback, HideLoadingFailErrorCode as HideLoadingFailErrorCode, HideLoadingComplete as HideLoadingComplete, HideLoadingCompleteCallback as HideLoadingCompleteCallback };
export { showLoading as showLoading };
export { hideLoading as hideLoading };
