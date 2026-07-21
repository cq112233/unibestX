import { UTSObject, IUniError, string, AsyncApiSuccessResult, AsyncApiResult } from "@dcloudio/uni-app-framework";
declare class LoadFontFaceOptionDesc extends UTSObject {
    style: string | null;
    weight: string | null;
    variant: string | null;
}
type LoadFontFaceErrCode = 4 | 99 | 101 | 100001 | 100002 | 200001 | 300001 | 300002;
interface LoadFontFaceFail extends IUniError {
    errCode: LoadFontFaceErrCode;
}
declare class LoadFontFaceOptions extends UTSObject {
    global: boolean | null;
    family: string;
    source: string.FontURIString;
    desc: LoadFontFaceOptionDesc | null;
    success: LoadFontFaceSuccessCallback | null;
    fail: LoadFontFaceFailCallback | null;
    complete: LoadFontFaceCompleteCallback | null;
}
type LoadFontFaceSuccess = AsyncApiSuccessResult;
type LoadFontFaceSuccessCallback = (result: LoadFontFaceSuccess) => void;
type LoadFontFaceFailCallback = (error: LoadFontFaceFail) => void;
type LoadFontFaceComplete = AsyncApiResult;
type LoadFontFaceCompleteCallback = (res: LoadFontFaceComplete) => void;
type LoadFontFace = (options: LoadFontFaceOptions) => Promise<LoadFontFaceSuccess> | null;
declare const loadFontFace: LoadFontFace;
export { LoadFontFace as LoadFontFace, LoadFontFaceComplete as LoadFontFaceComplete, LoadFontFaceCompleteCallback as LoadFontFaceCompleteCallback, LoadFontFaceErrCode as LoadFontFaceErrCode, LoadFontFaceFail as LoadFontFaceFail, LoadFontFaceFailCallback as LoadFontFaceFailCallback, LoadFontFaceOptionDesc as LoadFontFaceOptionDesc, LoadFontFaceOptions as LoadFontFaceOptions, LoadFontFaceSuccess as LoadFontFaceSuccess, LoadFontFaceSuccessCallback as LoadFontFaceSuccessCallback };
export { loadFontFace as loadFontFace };
