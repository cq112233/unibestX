import { IUniError, UTSObject, string } from "@dcloudio/uni-app-framework";
type PromptErrorCode = 1 | 1001;
interface IPromptError extends IUniError {
    errCode: PromptErrorCode;
}
declare class ShowToastSuccess extends UTSObject {
}
type ShowToastFail = IPromptError;
type ShowToastSuccessCallback = (res: ShowToastSuccess) => void;
type ShowToastFailCallback = (res: ShowToastFail) => void;
type ShowToastCompleteCallback = (res: Object) => void;
type Icon = "success" | "error" | "fail" | "exception" | "loading" | "none";
type ShowToastPosition = "top" | "center" | "bottom";
declare class ShowToastOptions extends UTSObject {
    title: string;
    icon: Icon | null;
    image: string.ImageURIString | null;
    mask: boolean | null;
    duration: number | null;
    position: ShowToastPosition | null;
    success: ShowToastSuccessCallback | null;
    fail: ShowToastFailCallback | null;
    complete: ShowToastCompleteCallback | null;
}
type ShowToast = (options: ShowToastOptions) => void;
type HideToast = () => void;
declare const showToast: ShowToast;
declare const hideToast: HideToast;
export { showToast as showToast, hideToast as hideToast };
export { HideToast as HideToast, IPromptError as IPromptError, Icon as Icon, PromptErrorCode as PromptErrorCode, ShowToast as ShowToast, ShowToastCompleteCallback as ShowToastCompleteCallback, ShowToastFail as ShowToastFail, ShowToastFailCallback as ShowToastFailCallback, ShowToastOptions as ShowToastOptions, ShowToastPosition as ShowToastPosition, ShowToastSuccess as ShowToastSuccess, ShowToastSuccessCallback as ShowToastSuccessCallback };
