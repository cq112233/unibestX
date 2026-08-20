import { UTSObject, IUniError } from "@dcloudio/uni-app-framework";
declare class ShareWithSystemSuccess extends UTSObject {
}
type ShareWithSystemFail = IShareWithSystemFail;
interface IShareWithSystemFail extends IUniError {
    errCode: ShareWithSystemErrorCode;
}
type ShareWithSystemErrorCode = 1310600 | 1310601 | 1310602 | 1310603 | 1310604 | 1310605 | 1310606 | 1310607;
type ShareWithSystemSuccessCallback = (res: ShareWithSystemSuccess) => void;
type ShareWithSystemFailCallback = (res: ShareWithSystemFail) => void;
type ShareWithSystemCallback = (res: Object) => void;
declare class ShareWithSystemOptions extends UTSObject {
    type: 'text' | 'image' | 'video' | 'audio' | 'file' | null;
    summary: string | null;
    href: string | null;
    imageUrl: string | null;
    imagePaths: Array<string> | null;
    videoPaths: Array<string> | null;
    audioPaths: Array<string> | null;
    filePaths: Array<string> | null;
    success: ShareWithSystemSuccessCallback | null;
    fail: ShareWithSystemFailCallback | null;
    complete: ShareWithSystemCallback | null;
}
type ShareWithSystem = (options: ShareWithSystemOptions) => void;
declare const shareWithSystem: ShareWithSystem;
export { shareWithSystem as shareWithSystem };
export { IShareWithSystemFail as IShareWithSystemFail, ShareWithSystem as ShareWithSystem, ShareWithSystemCallback as ShareWithSystemCallback, ShareWithSystemErrorCode as ShareWithSystemErrorCode, ShareWithSystemFail as ShareWithSystemFail, ShareWithSystemFailCallback as ShareWithSystemFailCallback, ShareWithSystemOptions as ShareWithSystemOptions, ShareWithSystemSuccess as ShareWithSystemSuccess, ShareWithSystemSuccessCallback as ShareWithSystemSuccessCallback };
