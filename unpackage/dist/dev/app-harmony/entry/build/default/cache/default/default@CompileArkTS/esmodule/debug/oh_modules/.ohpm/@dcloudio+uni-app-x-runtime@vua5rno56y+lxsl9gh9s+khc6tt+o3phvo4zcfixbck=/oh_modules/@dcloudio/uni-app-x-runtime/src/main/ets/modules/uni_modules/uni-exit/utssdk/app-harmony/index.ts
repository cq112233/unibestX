import { UTSObject, defineSyncApi, UTSHarmony } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { IUniError } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
const API_EXIT = 'exit';
class ExitSuccess extends UTSObject {
    errMsg!: string;
}
type ExitErrorCode = 12001 | 12002 | 12003;
interface IExitError extends IUniError {
    errCode: ExitErrorCode;
}
type ExitFail = IExitError;
type ExitSuccessCallback = (res: ExitSuccess) => void;
type ExitFailCallback = (res: ExitFail) => void;
type ExitCompleteCallback = (res: Object) => void;
class ExitOptions extends UTSObject {
    success: ExitSuccessCallback | null = null;
    fail: ExitFailCallback | null = null;
    complete: ExitCompleteCallback | null = null;
}
type Exit = (options?: ExitOptions | null) => void;
const exit: Exit = defineSyncApi<void>(API_EXIT, () => {
    UTSHarmony.exit();
}) as Exit;
export { ExitOptions as ExitOptions, ExitSuccess as ExitSuccess };
export type { Exit as Exit, ExitCompleteCallback as ExitCompleteCallback, ExitErrorCode as ExitErrorCode, ExitFail as ExitFail, ExitFailCallback as ExitFailCallback, ExitSuccessCallback as ExitSuccessCallback, IExitError as IExitError };
export { exit as exit };
