import { UTSObject, IUniError, string, UniError } from "@dcloudio/uni-app-framework";
declare class Popover extends UTSObject {
    top: number;
    left: number;
    width: number;
    height: number;
}
type ShowActionSheetErrorCode = 4;
interface ShowActionSheetSuccess {
    errMsg: string;
    tapIndex: number;
}
type ShowActionSheetSuccessCallback = (result: ShowActionSheetSuccess) => void;
interface ShowActionSheetFail extends IUniError {
    errCode: ShowActionSheetErrorCode;
}
type ShowActionSheetFailCallback = (result: ShowActionSheetFail) => void;
type ShowActionSheetComplete = Object;
type ShowActionSheetCompleteCallback = (result: ShowActionSheetComplete) => void;
declare class ShowActionSheetOptions extends UTSObject {
    title: string | null;
    alertText: string | null;
    itemList: string[];
    itemColor: string.ColorString | null;
    popover: Popover | null;
    titleColor: string.ColorString | null;
    cancelText: string | null;
    cancelColor: string.ColorString | null;
    backgroundColor: string.ColorString | null;
    success: ShowActionSheetSuccessCallback | null;
    fail: ShowActionSheetFailCallback | null;
    complete: ShowActionSheetCompleteCallback | null;
}
type ShowActionSheet = (options: ShowActionSheetOptions) => void;
declare class ShowActionSheetSuccessImpl implements ShowActionSheetSuccess {
    tapIndex: number;
    errMsg: string;
    constructor(tapIndex: number, errMsg?: string);
}
declare class ShowActionSheetFailImpl extends UniError implements ShowActionSheetFail {
    errCode: ShowActionSheetErrorCode;
    constructor(errMsg?: string, errCode?: ShowActionSheetErrorCode);
}
type HideActionSheet = () => void;
declare const showActionSheet: ShowActionSheet;
declare const hideActionSheet: () => void;
export { Popover as Popover, ShowActionSheetErrorCode as ShowActionSheetErrorCode, ShowActionSheetSuccess as ShowActionSheetSuccess, ShowActionSheetFail as ShowActionSheetFail, ShowActionSheetComplete as ShowActionSheetComplete, ShowActionSheetOptions as ShowActionSheetOptions, ShowActionSheet as ShowActionSheet, ShowActionSheetSuccessImpl as ShowActionSheetSuccessImpl, ShowActionSheetFailImpl as ShowActionSheetFailImpl, HideActionSheet as HideActionSheet };
export { showActionSheet as showActionSheet };
export { hideActionSheet as hideActionSheet };
