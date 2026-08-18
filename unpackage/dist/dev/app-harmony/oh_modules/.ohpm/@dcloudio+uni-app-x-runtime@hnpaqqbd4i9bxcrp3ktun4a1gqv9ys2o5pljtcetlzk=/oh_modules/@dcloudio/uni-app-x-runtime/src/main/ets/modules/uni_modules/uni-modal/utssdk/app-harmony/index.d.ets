import { IUniError, UniError, string, UTSObject, UniPage } from "@dcloudio/uni-app-framework";
interface ShowModalSuccess {
    errMsg: string;
    content?: string | null;
    cancel: boolean;
    confirm: boolean;
}
type ShowModalErrorCode = 4;
interface ShowModalFail extends IUniError {
    errCode: ShowModalErrorCode;
}
declare class ShowModalSuccessImpl implements ShowModalSuccess {
    errMsg: string;
    content?: string | null;
    cancel: boolean;
    confirm: boolean;
    constructor(cancel: boolean, confirm: boolean, content?: string | null, errMsg?: string);
}
declare class ShowModalFailImpl extends UniError implements ShowModalFail {
    errCode: ShowModalErrorCode;
    constructor(errMsg?: string, errCode?: ShowModalErrorCode);
}
type ShowModalFailCallback = (result: ShowModalFail) => void;
type ShowModalSuccessCallback = (result: ShowModalSuccess) => void;
type ShowModalComplete = Object;
type UniShowModalCompleteCallback = (result: ShowModalComplete) => void;
declare class ShowModalOptions extends UTSObject {
    title: string | null;
    content: string | null;
    showCancel: boolean | null;
    cancelText: string | null;
    cancelColor: string.ColorString | null;
    confirmText: string | null;
    confirmColor: string.ColorString | null;
    editable: boolean | null;
    placeholderText: string | null;
    success: ShowModalSuccessCallback | null;
    fail: ShowModalFailCallback | null;
    complete: UniShowModalCompleteCallback | null;
}
type ShowModal = (options?: ShowModalOptions | null) => ModalPage | null;
type ModalPage = UniPage;
interface HideModalSuccess {
    errMsg: string;
}
type HideModalErrorCode = 4;
interface HideModalFail extends IUniError {
    errCode: HideModalErrorCode;
}
declare class HideModalSuccessImpl implements HideModalSuccess {
    errMsg: string;
    constructor(errMsg?: string);
}
declare class HideModalFailImpl extends UniError implements HideModalFail {
    errCode: HideModalErrorCode;
    constructor(errMsg?: string, errCode?: HideModalErrorCode);
}
type UniHideModalFailCallback = (result: HideModalFail) => void;
type UniHideModalSuccessCallback = (result: HideModalSuccess) => void;
type HideModalComplete = Object;
type UniHideModalCompleteCallback = (result: HideModalComplete) => void;
declare class HideModalOptions extends UTSObject {
    modalPage: ModalPage | null;
    success: UniHideModalSuccessCallback | null;
    fail: UniHideModalFailCallback | null;
    complete: UniHideModalCompleteCallback | null;
}
type HideModal = (options?: HideModalOptions | null) => void;
declare const showModal: ShowModal;
declare const hideModal: HideModal;
export { ShowModal as ShowModal, ShowModalOptions as ShowModalOptions, ShowModalSuccess as ShowModalSuccess, ShowModalSuccessImpl as ShowModalSuccessImpl, ShowModalFail as ShowModalFail, ShowModalFailImpl as ShowModalFailImpl, ShowModalErrorCode as ShowModalErrorCode, ModalPage as ModalPage, HideModal as HideModal, HideModalOptions as HideModalOptions, HideModalSuccess as HideModalSuccess, HideModalSuccessImpl as HideModalSuccessImpl, HideModalFail as HideModalFail, HideModalFailImpl as HideModalFailImpl, HideModalErrorCode as HideModalErrorCode };
export { showModal as showModal };
export { hideModal as hideModal };
