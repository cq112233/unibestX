import { UniError, UTSObject, getCurrentPages, UniViewElementImpl } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { IUniError, AsyncApiSuccessResult, UniElement } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
type PullDownRefreshErrorCode = 4;
interface StartPullDownRefreshFail extends IUniError {
    errCode: PullDownRefreshErrorCode;
}
class StartPullDownRefreshFailImpl extends UniError implements StartPullDownRefreshFail {
    errCode: PullDownRefreshErrorCode;
    constructor(errMsg: string = 'startPullDownRefresh:fail', errCode: PullDownRefreshErrorCode = 4) {
        super();
        this.errMsg = errMsg;
        this.errCode = errCode;
    }
}
class StartPullDownRefreshOptions extends UTSObject {
    success: StartPullDownRefreshSuccessCallback | null = null;
    fail: StartPullDownRefreshFailCallback | null = null;
    complete: StartPullDownRefreshCompleteCallback | null = null;
}
type StartPullDownRefreshSuccess = AsyncApiSuccessResult;
class StartPullDownRefreshSuccessImpl implements StartPullDownRefreshSuccess {
    errMsg: string;
    constructor(errMsg: string = 'startPullDownRefresh:ok') {
        this.errMsg = errMsg;
    }
}
type StartPullDownRefreshSuccessCallback = (result: StartPullDownRefreshSuccess) => void;
type StartPullDownRefreshFailCallback = (result: StartPullDownRefreshFail) => void;
type StartPullDownRefreshComplete = Object;
type StartPullDownRefreshCompleteCallback = (result: StartPullDownRefreshComplete) => void;
type StartPullDownRefresh = (options: StartPullDownRefreshOptions) => void;
type StopPullDownRefresh = () => void;
const startPullDownRefresh = (options: StartPullDownRefreshOptions | null = null) => {
    const pages = getCurrentPages();
    const page = pages[pages.length - 1];
    if (page === null) {
        const error = new StartPullDownRefreshFailImpl('startPullDownRefresh:fail, page is not ready', 4);
        options?.fail?.(error);
        options?.complete?.(error);
        return;
    }
    const rootEl = page.querySelector('page') as UniElement | null;
    if (rootEl == null || rootEl instanceof UniViewElementImpl == true) {
        const error = new StartPullDownRefreshFailImpl('startPullDownRefresh:fail, disabled', 4);
        options?.fail?.(error);
        options?.complete?.(error);
        return;
    }
    const refresherTriggered = rootEl?.getAttribute('refresher-triggered');
    if (refresherTriggered != 'true') {
        rootEl?.setAnyAttribute('refresher-triggered', 'true');
    }
    const res = new StartPullDownRefreshSuccessImpl();
    options?.success?.(res);
    options?.complete?.(res);
};
const stopPullDownRefresh = () => {
    const pages = getCurrentPages();
    const page = pages[pages.length - 1];
    if (page === null) {
        return;
    }
    const rootEl = page.querySelector('page') as UniElement | null;
    rootEl?.setAnyAttribute('refresher-triggered', 'false');
};
export { StartPullDownRefreshOptions as StartPullDownRefreshOptions };
export type { PullDownRefreshErrorCode as PullDownRefreshErrorCode, StartPullDownRefresh as StartPullDownRefresh, StartPullDownRefreshComplete as StartPullDownRefreshComplete, StartPullDownRefreshCompleteCallback as StartPullDownRefreshCompleteCallback, StartPullDownRefreshFail as StartPullDownRefreshFail, StartPullDownRefreshFailCallback as StartPullDownRefreshFailCallback, StartPullDownRefreshSuccess as StartPullDownRefreshSuccess, StartPullDownRefreshSuccessCallback as StartPullDownRefreshSuccessCallback, StopPullDownRefresh as StopPullDownRefresh };
export { StartPullDownRefreshFailImpl as StartPullDownRefreshFailImpl, StartPullDownRefreshSuccessImpl as StartPullDownRefreshSuccessImpl };
export { startPullDownRefresh as startPullDownRefresh };
export { stopPullDownRefresh as stopPullDownRefresh };
