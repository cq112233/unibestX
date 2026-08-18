import { IUniError, UTSObject, string } from "@dcloudio/uni-app-framework";
type PreviewImageErrorCode = 1001 | 1101001 | 1101003 | 1101004 | 1101005 | 1101010;
interface IPreviewImageError extends IUniError {
    errCode: PreviewImageErrorCode;
}
declare class PreviewImageSuccess extends UTSObject {
    errSubject: string;
    errMsg: string;
}
type PreviewImageFail = IPreviewImageError;
type PreviewImageSuccessCallback = (callback: PreviewImageSuccess) => void;
type PreviewImageFailCallback = (callback: PreviewImageFail) => void;
type PreviewImageCompleteCallback = (callback: Object) => void;
declare class LongPressActionsSuccessResult extends UTSObject {
    tapIndex: number;
    index: number;
}
type LongPressActionsFailResult = IPreviewImageError;
declare class LongPressActionsOptions extends UTSObject {
    itemList: string[];
    itemColor: string | null;
    success: ((result: LongPressActionsSuccessResult) => void) | null;
    fail: ((result: LongPressActionsFailResult) => void) | null;
    complete: ((result: Object) => void) | null;
}
declare class PreviewImageOptions extends UTSObject {
    current: Object | null;
    urls: Array<string.ImageURIString>;
    showmenu: boolean | null;
    indicator: 'default' | 'number' | 'none' | null;
    loop: boolean | null;
    longPressActions: LongPressActionsOptions | null;
    success: (PreviewImageSuccessCallback) | null;
    fail: (PreviewImageFailCallback) | null;
    complete: (PreviewImageCompleteCallback) | null;
}
type PreviewImage = (options: PreviewImageOptions) => void;
type ClosePreviewImage = (options: ClosePreviewImageOptions) => void;
declare class ClosePreviewImageSuccess extends UTSObject {
    errMsg: string;
}
type ClosePreviewImageFail = IPreviewImageError;
type ClosePreviewImageSuccessCallback = (callback: ClosePreviewImageSuccess) => void;
type ClosePreviewImageFailCallback = (callback: ClosePreviewImageFail) => void;
type ClosePreviewImageCompleteCallback = PreviewImageCompleteCallback;
declare class ClosePreviewImageOptions extends UTSObject {
    success: (ClosePreviewImageSuccessCallback) | null;
    fail: (ClosePreviewImageFailCallback) | null;
    complete: (ClosePreviewImageCompleteCallback) | null;
}
declare const previewImage: PreviewImage;
declare const closePreviewImage: ClosePreviewImage;
export { ClosePreviewImage as ClosePreviewImage, ClosePreviewImageCompleteCallback as ClosePreviewImageCompleteCallback, ClosePreviewImageFail as ClosePreviewImageFail, ClosePreviewImageFailCallback as ClosePreviewImageFailCallback, ClosePreviewImageOptions as ClosePreviewImageOptions, ClosePreviewImageSuccess as ClosePreviewImageSuccess, ClosePreviewImageSuccessCallback as ClosePreviewImageSuccessCallback, IPreviewImageError as IPreviewImageError, LongPressActionsFailResult as LongPressActionsFailResult, LongPressActionsOptions as LongPressActionsOptions, LongPressActionsSuccessResult as LongPressActionsSuccessResult, PreviewImage as PreviewImage, PreviewImageCompleteCallback as PreviewImageCompleteCallback, PreviewImageErrorCode as PreviewImageErrorCode, PreviewImageFail as PreviewImageFail, PreviewImageFailCallback as PreviewImageFailCallback, PreviewImageOptions as PreviewImageOptions, PreviewImageSuccess as PreviewImageSuccess, PreviewImageSuccessCallback as PreviewImageSuccessCallback };
export { previewImage as previewImage };
export { closePreviewImage as closePreviewImage };
