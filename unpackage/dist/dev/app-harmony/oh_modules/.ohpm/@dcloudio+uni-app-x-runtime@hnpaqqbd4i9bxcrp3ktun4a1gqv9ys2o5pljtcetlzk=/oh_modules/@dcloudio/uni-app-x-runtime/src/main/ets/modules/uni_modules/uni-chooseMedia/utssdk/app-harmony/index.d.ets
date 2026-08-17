import { IUniError, UTSObject } from "@dcloudio/uni-app-framework";
type ChooseMediaErrorCode = 1101001 | 1101005 | 1101006 | 1101008 | 1101010;
interface IChooseMediaError extends IUniError {
    errCode: ChooseMediaErrorCode;
}
type ChooseMediaFileType = 'image' | 'video';
declare class ChooseMediaTempFile extends UTSObject {
    tempFilePath: string;
    fileType: ChooseMediaFileType;
    size: number;
    byteSize: number | null;
    duration: number | null;
    height: number | null;
    width: number | null;
    thumbTempFilePath: string | null;
}
declare class ChooseMediaSuccess extends UTSObject {
    tempFiles: ChooseMediaTempFile[];
    type: 'image' | 'video' | 'mix';
}
type ChooseMediaFail = IChooseMediaError;
type ChooseMediaSuccessCallback = (callback: ChooseMediaSuccess) => void;
type ChooseMediaFailCallback = (callback: ChooseMediaFail) => void;
type ChooseMediaCompleteCallback = (callback: Object) => void;
type ChooseMediaPageOrientation = "auto" | "portrait" | "landscape";
declare class ChooseMediaOptions extends UTSObject {
    pageOrientation: ChooseMediaPageOrientation | null;
    count: number | null;
    mediaType: (string[]) | null;
    sourceType: (string[]) | null;
    maxDuration: number | null;
    camera: 'front' | 'back' | null;
    success: (ChooseMediaSuccessCallback) | null;
    fail: (ChooseMediaFailCallback) | null;
    complete: (ChooseMediaCompleteCallback) | null;
}
type ChooseMedia = (options: ChooseMediaOptions) => void;
declare const chooseMedia: ChooseMedia;
export { ChooseMedia as ChooseMedia, ChooseMediaCompleteCallback as ChooseMediaCompleteCallback, ChooseMediaErrorCode as ChooseMediaErrorCode, ChooseMediaFail as ChooseMediaFail, ChooseMediaFailCallback as ChooseMediaFailCallback, ChooseMediaFileType as ChooseMediaFileType, ChooseMediaOptions as ChooseMediaOptions, ChooseMediaPageOrientation as ChooseMediaPageOrientation, ChooseMediaSuccess as ChooseMediaSuccess, ChooseMediaSuccessCallback as ChooseMediaSuccessCallback, ChooseMediaTempFile as ChooseMediaTempFile, IChooseMediaError as IChooseMediaError };
export { chooseMedia as chooseMedia };
