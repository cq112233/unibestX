import { UTSObject, IUniError, string, UniError, uni, UTS, OpenDialogPageOptions, getCurrentPages, CloseDialogPageOptions } from "@dcloudio/uni-app-framework";
class Popover extends UTSObject {
    top!: number;
    left!: number;
    width!: number;
    height!: number;
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
class ShowActionSheetOptions extends UTSObject {
    title: string | null = null;
    alertText: string | null = null;
    itemList!: string[];
    itemColor: string.ColorString | null = null;
    popover: Popover | null = null;
    titleColor: string.ColorString | null = null;
    cancelText: string | null = null;
    cancelColor: string.ColorString | null = null;
    backgroundColor: string.ColorString | null = null;
    success: ShowActionSheetSuccessCallback | null = null;
    fail: ShowActionSheetFailCallback | null = null;
    complete: ShowActionSheetCompleteCallback | null = null;
}
type ShowActionSheet = (options: ShowActionSheetOptions) => void;
class ShowActionSheetSuccessImpl implements ShowActionSheetSuccess {
    tapIndex: number;
    errMsg: string;
    constructor(tapIndex: number, errMsg: string = 'showActionSheet:ok'){
        this.errMsg = errMsg;
        this.tapIndex = tapIndex;
    }
}
class ShowActionSheetFailImpl extends UniError implements ShowActionSheetFail {
    errCode: ShowActionSheetErrorCode;
    constructor(errMsg: string = 'showActionSheet:fail cancel', errCode: ShowActionSheetErrorCode = 4){
        super();
        this.errMsg = errMsg;
        this.errCode = errCode;
    }
}
type HideActionSheet = () => void;
const showActionSheet: ShowActionSheet = (options: ShowActionSheetOptions)=>{
    const uuid = `${Date.now()}${Math.floor(Math.random() * 1e7)}`;
    const baseEventName = `uni_action_sheet_${uuid}`;
    const readyEventName = `${baseEventName}_ready`;
    const optionsEventName = `${baseEventName}_options`;
    const successEventName = `${baseEventName}_success`;
    const failEventName = `${baseEventName}_fail`;
    uni.$on(readyEventName, ()=>{
        uni.$emit(optionsEventName, UTS.JSON.parse(UTS.JSON.stringify(options)!));
    });
    uni.$on(successEventName, (index: number)=>{
        const res = new ShowActionSheetSuccessImpl(index);
        options.success?.(res);
        options.complete?.(res);
    });
    uni.$on(failEventName, ()=>{
        const res = new ShowActionSheetFailImpl();
        options.fail?.(res);
        options.complete?.(res);
    });
    uni.openDialogPage({
        url: `uni:actionSheet?readyEventName=${readyEventName}&optionsEventName=${optionsEventName}&successEventName=${successEventName}&failEventName=${failEventName}`,
        fail (err) {
            const res = new ShowActionSheetFailImpl(`showActionSheet failed, ${err['errMsg']}`);
            options.fail?.(res);
            options.complete?.(res);
            uni.$off(readyEventName);
            uni.$off(successEventName);
            uni.$off(failEventName);
        }
    } as OpenDialogPageOptions);
};
const SYSTEM_DIALOG_ACTION_SHEET_PAGE_PATH = 'uni:actionSheet';
const hideActionSheet = ()=>{
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    if (currentPage == null) return;
    const systemDialogPages = currentPage.$getSystemDialogPages();
    systemDialogPages.forEach((page)=>{
        if (page.route.startsWith(SYSTEM_DIALOG_ACTION_SHEET_PAGE_PATH)) {
            uni.closeDialogPage({
                dialogPage: page
            } as CloseDialogPageOptions);
        }
    });
};
export { Popover as Popover, ShowActionSheetErrorCode as ShowActionSheetErrorCode, ShowActionSheetSuccess as ShowActionSheetSuccess, ShowActionSheetFail as ShowActionSheetFail, ShowActionSheetComplete as ShowActionSheetComplete, ShowActionSheetOptions as ShowActionSheetOptions, ShowActionSheet as ShowActionSheet, ShowActionSheetSuccessImpl as ShowActionSheetSuccessImpl, ShowActionSheetFailImpl as ShowActionSheetFailImpl, HideActionSheet as HideActionSheet };
export { showActionSheet as showActionSheet };
export { hideActionSheet as hideActionSheet };
