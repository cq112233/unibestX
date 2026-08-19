import { IUniError, UTSObject } from "@dcloudio/uni-app-framework";
type ClipBoardErrorCode = 102;
interface IClipBoardError extends IUniError {
    errCode: ClipBoardErrorCode;
}
type SetClipboardData = (options: SetClipboardDataOptions) => void;
declare class SetClipboardDataSuccess extends UTSObject {
}
type SetClipboardDataSuccessCallback = (result: SetClipboardDataSuccess) => void;
type SetClipboardDataFail = IClipBoardError;
type SetClipboardDataFailCallback = (result: SetClipboardDataFail) => void;
type SetClipboardDataComplete = Object;
type SetClipboardDataCompleteCallback = (result: SetClipboardDataComplete) => void;
declare class SetClipboardDataOptions extends UTSObject {
    data: string;
    showToast: boolean | null;
    success: SetClipboardDataSuccessCallback | null;
    fail: SetClipboardDataFailCallback | null;
    complete: SetClipboardDataCompleteCallback | null;
}
type GetClipboardData = (options: GetClipboardDataOptions) => void;
declare class GetClipboardDataSuccess extends UTSObject {
    data: string;
}
type GetClipboardDataSuccessCallback = (result: GetClipboardDataSuccess) => void;
type GetClipboardDataFail = IClipBoardError;
type GetClipboardDataFailCallback = (result: GetClipboardDataFail) => void;
type GetClipboardDataComplete = Object;
type GetClipboardDataCompleteCallback = (result: GetClipboardDataComplete) => void;
declare class GetClipboardDataOptions extends UTSObject {
    success: GetClipboardDataSuccessCallback | null;
    fail: GetClipboardDataFailCallback | null;
    complete: GetClipboardDataCompleteCallback | null;
}
declare const getClipboardData: GetClipboardData;
declare const setClipboardData: SetClipboardData;
export { ClipBoardErrorCode as ClipBoardErrorCode, GetClipboardData as GetClipboardData, GetClipboardDataComplete as GetClipboardDataComplete, GetClipboardDataCompleteCallback as GetClipboardDataCompleteCallback, GetClipboardDataFail as GetClipboardDataFail, GetClipboardDataFailCallback as GetClipboardDataFailCallback, GetClipboardDataOptions as GetClipboardDataOptions, GetClipboardDataSuccess as GetClipboardDataSuccess, GetClipboardDataSuccessCallback as GetClipboardDataSuccessCallback, IClipBoardError as IClipBoardError, SetClipboardData as SetClipboardData, SetClipboardDataComplete as SetClipboardDataComplete, SetClipboardDataCompleteCallback as SetClipboardDataCompleteCallback, SetClipboardDataFail as SetClipboardDataFail, SetClipboardDataFailCallback as SetClipboardDataFailCallback, SetClipboardDataOptions as SetClipboardDataOptions, SetClipboardDataSuccess as SetClipboardDataSuccess, SetClipboardDataSuccessCallback as SetClipboardDataSuccessCallback };
export { getClipboardData as getClipboardData };
export { setClipboardData as setClipboardData };
