import { IUniError, UniError, string, UTSObject, UniPage, uni, UTS, UTSJSONObject, OpenDialogPageOptions, getCurrentPages, CloseDialogPageOptions } from "@dcloudio/uni-app-framework";
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
class ShowModalSuccessImpl implements ShowModalSuccess {
    errMsg: string;
    content?: string | null;
    cancel: boolean;
    confirm: boolean;
    constructor(cancel: boolean, confirm: boolean, content: string | null = null, errMsg: string = 'showModal:ok'){
        this.errMsg = errMsg;
        this.content = content;
        this.cancel = cancel;
        this.confirm = confirm;
    }
}
class ShowModalFailImpl extends UniError implements ShowModalFail {
    errCode: ShowModalErrorCode;
    constructor(errMsg: string = 'showModal:fail cancel', errCode: ShowModalErrorCode = 4){
        super();
        this.errMsg = errMsg;
        this.errCode = errCode;
    }
}
type ShowModalFailCallback = (result: ShowModalFail) => void;
type ShowModalSuccessCallback = (result: ShowModalSuccess) => void;
type ShowModalComplete = Object;
type UniShowModalCompleteCallback = (result: ShowModalComplete) => void;
class ShowModalOptions extends UTSObject {
    title: string | null = null;
    content: string | null = null;
    showCancel: boolean | null = true;
    cancelText: string | null = null;
    cancelColor: string.ColorString | null = null;
    confirmText: string | null = null;
    confirmColor: string.ColorString | null = null;
    editable: boolean | null = null;
    placeholderText: string | null = null;
    success: ShowModalSuccessCallback | null = null;
    fail: ShowModalFailCallback | null = null;
    complete: UniShowModalCompleteCallback | null = null;
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
class HideModalSuccessImpl implements HideModalSuccess {
    errMsg: string;
    constructor(errMsg: string = 'hideModal:ok'){
        this.errMsg = errMsg;
    }
}
class HideModalFailImpl extends UniError implements HideModalFail {
    errCode: HideModalErrorCode;
    constructor(errMsg: string = 'hideModal:fail cancel', errCode: HideModalErrorCode = 4){
        super();
        this.errMsg = errMsg;
        this.errCode = errCode;
    }
}
type UniHideModalFailCallback = (result: HideModalFail) => void;
type UniHideModalSuccessCallback = (result: HideModalSuccess) => void;
type HideModalComplete = Object;
type UniHideModalCompleteCallback = (result: HideModalComplete) => void;
class HideModalOptions extends UTSObject {
    modalPage: ModalPage | null = null;
    success: UniHideModalSuccessCallback | null = null;
    fail: UniHideModalFailCallback | null = null;
    complete: UniHideModalCompleteCallback | null = null;
}
type HideModal = (options?: HideModalOptions | null) => void;
const showModal: ShowModal = (options: ShowModalOptions | null = null): UniPage | null =>{
    const uuid = `${Date.now()}${Math.floor(Math.random() * 1e7)}`;
    const baseEventName = `uni_modal_${uuid}`;
    const readyEventName = `${baseEventName}_ready`;
    const optionsEventName = `${baseEventName}_options`;
    const successEventName = `${baseEventName}_success`;
    const failEventName = `${baseEventName}_fail`;
    uni.$on(readyEventName, ()=>{
        uni.$emit(optionsEventName, options != null ? UTS.JSON.parse(UTS.JSON.stringify(options)!) : new UTSJSONObject({}));
    });
    uni.$on(successEventName, (inputParamStr: string)=>{
        const inputParam = UTS.JSON.parse(inputParamStr)! as UTSJSONObject;
        const res = new ShowModalSuccessImpl(inputParam["cancel"] as boolean, inputParam["confirm"] as boolean, inputParam["content"] as string | null);
        options?.success?.(res);
        options?.complete?.(res);
    });
    uni.$on(failEventName, ()=>{
        const res = new ShowModalFailImpl();
        options?.fail?.(res);
        options?.complete?.(res);
    });
    const openRet: UniPage | null = uni.openDialogPage({
        url: `uni:uniModal?readyEventName=${readyEventName}&optionsEventName=${optionsEventName}&successEventName=${successEventName}&failEventName=${failEventName}`,
        fail (err) {
            const res = new ShowModalFailImpl(`showModal failed, ${err['errMsg']}`);
            options?.fail?.(res);
            options?.complete?.(res);
            uni.$off(readyEventName);
            uni.$off(successEventName);
            uni.$off(failEventName);
        }
    } as OpenDialogPageOptions);
    if (openRet != null) {
        return openRet as ModalPage;
    }
    const res = new ShowModalFailImpl();
    options?.fail?.(res);
    options?.complete?.(res);
    return null;
};
const SYSTEM_DIALOG_MODAL_PAGE_PATH = 'uni:uniModal';
const hideModal: HideModal = (options: HideModalOptions | null = null)=>{
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    if (currentPage == null) {
        const res = new HideModalFailImpl();
        options?.fail?.(res);
        options?.complete?.(res);
        return;
    }
    const systemDialogPages = currentPage.$getSystemDialogPages();
    const modalPage = options?.modalPage;
    for(let i = systemDialogPages.length - 1; i >= 0; i--){
        const page = systemDialogPages[i];
        if (!page.route.startsWith(SYSTEM_DIALOG_MODAL_PAGE_PATH)) {
            continue;
        }
        if (modalPage == null) {
            uni.closeDialogPage({
                dialogPage: page
            } as CloseDialogPageOptions);
        } else {
            if (modalPage === page) {
                uni.closeDialogPage({
                    dialogPage: page
                } as CloseDialogPageOptions);
                break;
            }
        }
    }
    const res = new HideModalSuccessImpl();
    options?.success?.(res);
    options?.complete?.(res);
};
export { ShowModal as ShowModal, ShowModalOptions as ShowModalOptions, ShowModalSuccess as ShowModalSuccess, ShowModalSuccessImpl as ShowModalSuccessImpl, ShowModalFail as ShowModalFail, ShowModalFailImpl as ShowModalFailImpl, ShowModalErrorCode as ShowModalErrorCode, ModalPage as ModalPage, HideModal as HideModal, HideModalOptions as HideModalOptions, HideModalSuccess as HideModalSuccess, HideModalSuccessImpl as HideModalSuccessImpl, HideModalFail as HideModalFail, HideModalFailImpl as HideModalFailImpl, HideModalErrorCode as HideModalErrorCode };
export { showModal as showModal };
export { hideModal as hideModal };
