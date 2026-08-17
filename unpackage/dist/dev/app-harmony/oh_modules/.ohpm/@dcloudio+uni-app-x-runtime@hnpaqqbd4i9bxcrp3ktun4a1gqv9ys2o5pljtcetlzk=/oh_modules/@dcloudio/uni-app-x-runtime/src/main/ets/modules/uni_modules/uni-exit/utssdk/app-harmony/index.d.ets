import { UTSObject, IUniError } from "@dcloudio/uni-app-framework";
declare class ExitSuccess extends UTSObject {
    errMsg: string;
}
type ExitErrorCode = 12001 | 12002 | 12003;
interface IExitError extends IUniError {
    errCode: ExitErrorCode;
}
type ExitFail = IExitError;
type ExitSuccessCallback = (res: ExitSuccess) => void;
type ExitFailCallback = (res: ExitFail) => void;
type ExitCompleteCallback = (res: Object) => void;
declare class ExitOptions extends UTSObject {
    success: ExitSuccessCallback | null;
    fail: ExitFailCallback | null;
    complete: ExitCompleteCallback | null;
}
type Exit = (options?: ExitOptions | null) => void;
declare const exit: Exit;
export { Exit as Exit, ExitCompleteCallback as ExitCompleteCallback, ExitErrorCode as ExitErrorCode, ExitFail as ExitFail, ExitFailCallback as ExitFailCallback, ExitOptions as ExitOptions, ExitSuccess as ExitSuccess, ExitSuccessCallback as ExitSuccessCallback, IExitError as IExitError };
export { exit as exit };
