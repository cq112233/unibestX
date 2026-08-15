import { IUniError, UniError, UTSObject, AsyncApiSuccessResult } from "@dcloudio/uni-app-framework";
type PullDownRefreshErrorCode = 4;
interface StartPullDownRefreshFail extends IUniError {
    errCode: PullDownRefreshErrorCode;
}
declare class StartPullDownRefreshFailImpl extends UniError implements StartPullDownRefreshFail {
    errCode: PullDownRefreshErrorCode;
    constructor(errMsg?: string, errCode?: PullDownRefreshErrorCode);
}
declare class StartPullDownRefreshOptions extends UTSObject {
    success: StartPullDownRefreshSuccessCallback | null;
    fail: StartPullDownRefreshFailCallback | null;
    complete: StartPullDownRefreshCompleteCallback | null;
}
type StartPullDownRefreshSuccess = AsyncApiSuccessResult;
declare class StartPullDownRefreshSuccessImpl implements StartPullDownRefreshSuccess {
    errMsg: string;
    constructor(errMsg?: string);
}
type StartPullDownRefreshSuccessCallback = (result: StartPullDownRefreshSuccess) => void;
type StartPullDownRefreshFailCallback = (result: StartPullDownRefreshFail) => void;
type StartPullDownRefreshComplete = Object;
type StartPullDownRefreshCompleteCallback = (result: StartPullDownRefreshComplete) => void;
type StartPullDownRefresh = (options: StartPullDownRefreshOptions) => void;
type StopPullDownRefresh = () => void;
declare const startPullDownRefresh: (options?: StartPullDownRefreshOptions | null) => void;
declare const stopPullDownRefresh: () => void;
export { PullDownRefreshErrorCode as PullDownRefreshErrorCode, StartPullDownRefresh as StartPullDownRefresh, StartPullDownRefreshComplete as StartPullDownRefreshComplete, StartPullDownRefreshCompleteCallback as StartPullDownRefreshCompleteCallback, StartPullDownRefreshFail as StartPullDownRefreshFail, StartPullDownRefreshFailCallback as StartPullDownRefreshFailCallback, StartPullDownRefreshOptions as StartPullDownRefreshOptions, StartPullDownRefreshSuccess as StartPullDownRefreshSuccess, StartPullDownRefreshSuccessCallback as StartPullDownRefreshSuccessCallback, StopPullDownRefresh as StopPullDownRefresh };
export { StartPullDownRefreshFailImpl as StartPullDownRefreshFailImpl, StartPullDownRefreshSuccessImpl as StartPullDownRefreshSuccessImpl };
export { startPullDownRefresh as startPullDownRefresh };
export { stopPullDownRefresh as stopPullDownRefresh };
