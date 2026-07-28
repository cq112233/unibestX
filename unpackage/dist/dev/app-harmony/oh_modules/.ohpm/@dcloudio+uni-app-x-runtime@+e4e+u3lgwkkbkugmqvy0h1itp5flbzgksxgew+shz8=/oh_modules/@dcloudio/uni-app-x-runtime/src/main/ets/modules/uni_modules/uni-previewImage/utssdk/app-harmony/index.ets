import { IUniError, UTSObject, string, UTS, UniError, uni, UTSJSONObject, OpenDialogPageOptions } from "@dcloudio/uni-app-framework";
type PreviewImageErrorCode = 1001 | 1101001 | 1101003 | 1101004 | 1101005 | 1101010;
interface IPreviewImageError extends IUniError {
    errCode: PreviewImageErrorCode;
}
class PreviewImageSuccess extends UTSObject {
    errSubject!: string;
    errMsg!: string;
}
type PreviewImageFail = IPreviewImageError;
type PreviewImageSuccessCallback = (callback: PreviewImageSuccess) => void;
type PreviewImageFailCallback = (callback: PreviewImageFail) => void;
type PreviewImageCompleteCallback = (callback: Object) => void;
class LongPressActionsSuccessResult extends UTSObject {
    tapIndex!: number;
    index!: number;
}
type LongPressActionsFailResult = IPreviewImageError;
class LongPressActionsOptions extends UTSObject {
    itemList!: string[];
    itemColor: string | null = null;
    success: ((result: LongPressActionsSuccessResult) => void) | null = null;
    fail: ((result: LongPressActionsFailResult) => void) | null = null;
    complete: ((result: Object) => void) | null = null;
}
class PreviewImageOptions extends UTSObject {
    current: Object | null = null;
    urls!: Array<string.ImageURIString>;
    showmenu: boolean | null = null;
    indicator: 'default' | 'number' | 'none' | null = null;
    loop: boolean | null = null;
    longPressActions: LongPressActionsOptions | null = null;
    success: (PreviewImageSuccessCallback) | null = null;
    fail: (PreviewImageFailCallback) | null = null;
    complete: (PreviewImageCompleteCallback) | null = null;
}
type PreviewImage = (options: PreviewImageOptions) => void;
type ClosePreviewImage = (options: ClosePreviewImageOptions) => void;
class ClosePreviewImageSuccess extends UTSObject {
    errMsg!: string;
}
type ClosePreviewImageFail = IPreviewImageError;
type ClosePreviewImageSuccessCallback = (callback: ClosePreviewImageSuccess) => void;
type ClosePreviewImageFailCallback = (callback: ClosePreviewImageFail) => void;
type ClosePreviewImageCompleteCallback = PreviewImageCompleteCallback;
class ClosePreviewImageOptions extends UTSObject {
    success: (ClosePreviewImageSuccessCallback) | null = null;
    fail: (ClosePreviewImageFailCallback) | null = null;
    complete: (ClosePreviewImageCompleteCallback) | null = null;
}
interface Uni {
    previewImage(options: PreviewImageOptions): void;
    closePreviewImage(options: ClosePreviewImageOptions): void;
}
export { PreviewImageErrorCode as PreviewImageErrorCode };
export { IPreviewImageError as IPreviewImageError };
export { PreviewImageSuccess as PreviewImageSuccess };
export { PreviewImageFail as PreviewImageFail };
export { PreviewImageSuccessCallback as PreviewImageSuccessCallback };
export { PreviewImageFailCallback as PreviewImageFailCallback };
export { PreviewImageCompleteCallback as PreviewImageCompleteCallback };
export { LongPressActionsSuccessResult as LongPressActionsSuccessResult };
export { LongPressActionsFailResult as LongPressActionsFailResult };
export { LongPressActionsOptions as LongPressActionsOptions };
export { PreviewImageOptions as PreviewImageOptions };
export { PreviewImage as PreviewImage };
export { ClosePreviewImage as ClosePreviewImage };
export { ClosePreviewImageSuccess as ClosePreviewImageSuccess };
export { ClosePreviewImageFail as ClosePreviewImageFail };
export { ClosePreviewImageSuccessCallback as ClosePreviewImageSuccessCallback };
export { ClosePreviewImageFailCallback as ClosePreviewImageFailCallback };
export { ClosePreviewImageCompleteCallback as ClosePreviewImageCompleteCallback };
export { ClosePreviewImageOptions as ClosePreviewImageOptions };
export { Uni as Uni };
const UniErrorPreviewImage = 'uni-previewImage';
const PreviewImageUniErrors: Map<number, string> = new Map([
    [
        1101001,
        'user cancel'
    ],
    [
        1001,
        'fail parameter error: parameter.urls should have at least 1 item'
    ],
    [
        1101003,
        "file not find"
    ],
    [
        1101004,
        "Failed to load resource"
    ],
    [
        1101005,
        "No Permission"
    ],
    [
        1101010,
        "unexpect error:please check previewImage.uvue is in page.json"
    ]
]);
class PreviewImageErrorImpl extends UniError implements IPreviewImageError {
    errCode: PreviewImageErrorCode;
    constructor(errCode: PreviewImageErrorCode, uniErrorSubject: string){
        super();
        this.errSubject = uniErrorSubject;
        this.errCode = errCode;
        this.errMsg = UTS.mapGet(PreviewImageUniErrors, errCode) ?? "";
    }
}
function __previewImage(option: PreviewImageOptions) {
    if (option.urls.length == 0) {
        let error = new PreviewImageErrorImpl(1001, UniErrorPreviewImage);
        option.fail?.(error);
        option.complete?.(error);
        return;
    }
    uni.$once("__onPreviewLoad", ()=>{
        let object = new UTSJSONObject({
            current: option.current,
            urls: option.urls,
            indicator: option.indicator,
            loop: option.loop
        });
        if (option.longPressActions != null) {
            object["longPressActions"] = new UTSJSONObject({
                itemList: option.longPressActions!.itemList,
                itemColor: option.longPressActions!.itemColor
            });
        }
        uni.$emit("__onPreviewLoadCallback", object);
    });
    uni.$on("__UNIPREVIEWLONGPRESS", (value: UTSJSONObject)=>{
        if (option.longPressActions != null) {
            let type = value["type"] as string;
            let tapIndex = value["tapIndex"] as number;
            let index = value["index"] as number;
            if (type == "success") {
                let success: LongPressActionsSuccessResult = {
                    tapIndex: tapIndex,
                    index: index
                };
                option.longPressActions?.success?.(success);
                option.longPressActions?.complete?.(success);
            } else {
                let fail: LongPressActionsFailResult = new PreviewImageErrorImpl(1101001, UniErrorPreviewImage);
                option.longPressActions?.fail?.(fail);
                option.longPressActions?.complete?.(fail);
            }
        }
    });
    uni.openDialogPage({
        url: 'uni:previewImage',
        animationType: "fade-in",
        success (_) {
            let success: PreviewImageSuccess = {
                errMsg: 'ok',
                "errSubject": UniErrorPreviewImage
            };
            option.success?.(success);
            option.complete?.(success);
        },
        fail (_) {
            let error = new PreviewImageErrorImpl(1101010, UniErrorPreviewImage);
            option.fail?.(error);
            option.complete?.(error);
        }
    } as OpenDialogPageOptions);
}
function __closePreviewImage(option: ClosePreviewImageOptions) {
    uni.$emit("__CLOSEPREVIEWIMAGE", null);
    let callback: ClosePreviewImageSuccess = {
        errMsg: "ok"
    };
    option.success?.(callback);
    option.complete?.(callback);
}
const previewImage: PreviewImage = (option: PreviewImageOptions)=>{
    __previewImage(option);
};
const closePreviewImage: ClosePreviewImage = (option: ClosePreviewImageOptions)=>{
    __closePreviewImage(option);
};
export { previewImage as previewImage };
export { closePreviewImage as closePreviewImage };
