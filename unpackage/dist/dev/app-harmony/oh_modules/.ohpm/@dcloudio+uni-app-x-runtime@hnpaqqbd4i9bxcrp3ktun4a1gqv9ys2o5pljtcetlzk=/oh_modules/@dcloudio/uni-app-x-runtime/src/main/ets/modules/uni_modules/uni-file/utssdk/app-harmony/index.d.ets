import { UTSObject } from "@dcloudio/uni-app-framework";
declare class LegacySaveFileSuccess extends UTSObject {
    savedFilePath: string;
}
type LegacySaveFileSuccessCallback = (res: LegacySaveFileSuccess) => void;
declare class LegacySaveFileFail extends UTSObject {
}
type LegacySaveFileFailCallback = (res: LegacySaveFileFail) => void;
type LegacySaveFileCompleteCallback = (res: Object) => void;
declare class LegacySaveFileOptions extends UTSObject {
    tempFilePath: string;
    success: LegacySaveFileSuccessCallback | null;
    fail: LegacySaveFileFailCallback | null;
    complete: LegacySaveFileCompleteCallback | null;
}
declare class LegacyGetFileInfoSuccess extends UTSObject {
    digest: string;
    size: number;
}
type LegacyGetFileInfoSuccessCallback = (res: LegacyGetFileInfoSuccess) => void;
declare class LegacyGetFileInfoFail extends UTSObject {
}
type LegacyGetFileInfoFailCallback = (res: LegacyGetFileInfoFail) => void;
type LegacyGetFileInfoCompleteCallback = (res: Object) => void;
declare class LegacyGetFileInfoOptions extends UTSObject {
    filePath: string;
    digestAlgorithm: string | null;
    success: LegacyGetFileInfoSuccessCallback | null;
    fail: LegacyGetFileInfoFailCallback | null;
    complete: LegacyGetFileInfoCompleteCallback | null;
}
declare class LegacyGetSavedFileInfoSuccess extends UTSObject {
    size: number;
    createTime: number;
}
type LegacyGetSavedFileInfoSuccessCallback = (res: LegacyGetSavedFileInfoSuccess) => void;
declare class LegacyGetSavedFileInfoFail extends UTSObject {
}
type LegacyGetSavedFileInfoFailCallback = (res: LegacyGetSavedFileInfoFail) => void;
type LegacyGetSavedFileInfoCompleteCallback = (res: Object) => void;
declare class LegacyGetSavedFileInfoOptions extends UTSObject {
    filePath: string;
    success: LegacyGetSavedFileInfoSuccessCallback | null;
    fail: LegacyGetSavedFileInfoFailCallback | null;
    complete: LegacyGetSavedFileInfoCompleteCallback | null;
}
declare class LegacyRemoveSavedFileSuccess extends UTSObject {
}
type LegacyRemoveSavedFileSuccessCallback = (res: LegacyRemoveSavedFileSuccess) => void;
declare class LegacyRemoveSavedFileFail extends UTSObject {
}
type LegacyRemoveSavedFileFailCallback = (res: LegacyRemoveSavedFileFail) => void;
type LegacyRemoveSavedFileCompleteCallback = (res: Object) => void;
declare class LegacyRemoveSavedFileOptions extends UTSObject {
    filePath: string;
    success: LegacyRemoveSavedFileSuccessCallback | null;
    fail: LegacyRemoveSavedFileFailCallback | null;
    complete: LegacyRemoveSavedFileCompleteCallback | null;
}
declare class LegacySavedFileListItem extends UTSObject {
    filePath: string;
    size: number;
    createTime: number;
}
declare class LegacyGetSavedFileListSuccess extends UTSObject {
    fileList: LegacySavedFileListItem[];
}
type LegacyGetSavedFileListSuccessCallback = (res: LegacyGetSavedFileListSuccess) => void;
declare class LegacyGetSavedFileListFail extends UTSObject {
}
type LegacyGetSavedFileListFailCallback = (res: LegacyGetSavedFileListFail) => void;
type LegacyGetSavedFileListCompleteCallback = (res: Object) => void;
declare class LegacyGetSavedFileListOptions extends UTSObject {
    success: LegacyGetSavedFileListSuccessCallback | null;
    fail: LegacyGetSavedFileListFailCallback | null;
    complete: LegacyGetSavedFileListCompleteCallback | null;
}
type SaveFile = (options?: LegacySaveFileOptions | null) => void;
type GetFileInfo = (options?: LegacyGetFileInfoOptions | null) => void;
type GetSavedFileInfo = (options?: LegacyGetSavedFileInfoOptions | null) => void;
type RemoveSavedFile = (options?: LegacyRemoveSavedFileOptions | null) => void;
type GetSavedFileList = (options?: LegacyGetSavedFileListOptions | null) => void;
declare const CACHE_PATH = "unifile://cache/";
declare function getSavedDirEnv(): string;
declare const saveFile: SaveFile;
declare const getSavedFileList: GetSavedFileList;
declare const getSavedFileInfo: GetSavedFileInfo;
declare const removeSavedFile: RemoveSavedFile;
declare const getFileInfo: GetFileInfo;
export { GetFileInfo as GetFileInfo, GetSavedFileInfo as GetSavedFileInfo, GetSavedFileList as GetSavedFileList, LegacyGetFileInfoCompleteCallback as LegacyGetFileInfoCompleteCallback, LegacyGetFileInfoFail as LegacyGetFileInfoFail, LegacyGetFileInfoFailCallback as LegacyGetFileInfoFailCallback, LegacyGetFileInfoOptions as LegacyGetFileInfoOptions, LegacyGetFileInfoSuccess as LegacyGetFileInfoSuccess, LegacyGetFileInfoSuccessCallback as LegacyGetFileInfoSuccessCallback, LegacyGetSavedFileInfoCompleteCallback as LegacyGetSavedFileInfoCompleteCallback, LegacyGetSavedFileInfoFail as LegacyGetSavedFileInfoFail, LegacyGetSavedFileInfoFailCallback as LegacyGetSavedFileInfoFailCallback, LegacyGetSavedFileInfoOptions as LegacyGetSavedFileInfoOptions, LegacyGetSavedFileInfoSuccess as LegacyGetSavedFileInfoSuccess, LegacyGetSavedFileInfoSuccessCallback as LegacyGetSavedFileInfoSuccessCallback, LegacyGetSavedFileListCompleteCallback as LegacyGetSavedFileListCompleteCallback, LegacyGetSavedFileListFail as LegacyGetSavedFileListFail, LegacyGetSavedFileListFailCallback as LegacyGetSavedFileListFailCallback, LegacyGetSavedFileListOptions as LegacyGetSavedFileListOptions, LegacyGetSavedFileListSuccess as LegacyGetSavedFileListSuccess, LegacyGetSavedFileListSuccessCallback as LegacyGetSavedFileListSuccessCallback, LegacyRemoveSavedFileCompleteCallback as LegacyRemoveSavedFileCompleteCallback, LegacyRemoveSavedFileFail as LegacyRemoveSavedFileFail, LegacyRemoveSavedFileFailCallback as LegacyRemoveSavedFileFailCallback, LegacyRemoveSavedFileOptions as LegacyRemoveSavedFileOptions, LegacyRemoveSavedFileSuccess as LegacyRemoveSavedFileSuccess, LegacyRemoveSavedFileSuccessCallback as LegacyRemoveSavedFileSuccessCallback, LegacySaveFileCompleteCallback as LegacySaveFileCompleteCallback, LegacySaveFileFail as LegacySaveFileFail, LegacySaveFileFailCallback as LegacySaveFileFailCallback, LegacySaveFileOptions as LegacySaveFileOptions, LegacySaveFileSuccess as LegacySaveFileSuccess, LegacySaveFileSuccessCallback as LegacySaveFileSuccessCallback, LegacySavedFileListItem as LegacySavedFileListItem, RemoveSavedFile as RemoveSavedFile, SaveFile as SaveFile };
export { CACHE_PATH as CACHE_PATH };
export { getSavedDirEnv as getSavedDirEnv };
export { saveFile as saveFile };
export { getSavedFileList as getSavedFileList };
export { getSavedFileInfo as getSavedFileInfo };
export { removeSavedFile as removeSavedFile };
export { getFileInfo as getFileInfo };
