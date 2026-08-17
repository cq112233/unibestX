import buffer from '@ohos.buffer';
import fs from '@ohos.file.fs';
import Hash from '@ohos.file.hash';
import { ListFileOptions } from '@ohos.file.fs';
import { UTSObject, UTS, defineAsyncApi, ApiExecutor } from "@dcloudio/uni-app-framework";
import { getEnv, getRealPath } from "@dcloudio/uni-app-framework";
const API_SAVE_FILE = 'saveFile';
const API_GET_FILE_INFO = 'getFileInfo';
const API_GET_SAVED_FILE_INFO = 'getSavedFileInfo';
const API_GET_SAVED_FILE_LIST = 'getSavedFileList';
const API_REMOVE_SAVED_FILE = 'removeSavedFile';
class LegacySaveFileSuccess extends UTSObject {
    savedFilePath!: string;
}
type LegacySaveFileSuccessCallback = (res: LegacySaveFileSuccess) => void;
class LegacySaveFileFail extends UTSObject {
}
type LegacySaveFileFailCallback = (res: LegacySaveFileFail) => void;
type LegacySaveFileCompleteCallback = (res: Object) => void;
class LegacySaveFileOptions extends UTSObject {
    tempFilePath!: string;
    success: LegacySaveFileSuccessCallback | null = null;
    fail: LegacySaveFileFailCallback | null = null;
    complete: LegacySaveFileCompleteCallback | null = null;
}
class LegacyGetFileInfoSuccess extends UTSObject {
    digest!: string;
    size!: number;
}
type LegacyGetFileInfoSuccessCallback = (res: LegacyGetFileInfoSuccess) => void;
class LegacyGetFileInfoFail extends UTSObject {
}
type LegacyGetFileInfoFailCallback = (res: LegacyGetFileInfoFail) => void;
type LegacyGetFileInfoCompleteCallback = (res: Object) => void;
class LegacyGetFileInfoOptions extends UTSObject {
    filePath!: string;
    digestAlgorithm: string | null = null;
    success: LegacyGetFileInfoSuccessCallback | null = null;
    fail: LegacyGetFileInfoFailCallback | null = null;
    complete: LegacyGetFileInfoCompleteCallback | null = null;
}
class LegacyGetSavedFileInfoSuccess extends UTSObject {
    size!: number;
    createTime!: number;
}
type LegacyGetSavedFileInfoSuccessCallback = (res: LegacyGetSavedFileInfoSuccess) => void;
class LegacyGetSavedFileInfoFail extends UTSObject {
}
type LegacyGetSavedFileInfoFailCallback = (res: LegacyGetSavedFileInfoFail) => void;
type LegacyGetSavedFileInfoCompleteCallback = (res: Object) => void;
class LegacyGetSavedFileInfoOptions extends UTSObject {
    filePath!: string;
    success: LegacyGetSavedFileInfoSuccessCallback | null = null;
    fail: LegacyGetSavedFileInfoFailCallback | null = null;
    complete: LegacyGetSavedFileInfoCompleteCallback | null = null;
}
class LegacyRemoveSavedFileSuccess extends UTSObject {
}
type LegacyRemoveSavedFileSuccessCallback = (res: LegacyRemoveSavedFileSuccess) => void;
class LegacyRemoveSavedFileFail extends UTSObject {
}
type LegacyRemoveSavedFileFailCallback = (res: LegacyRemoveSavedFileFail) => void;
type LegacyRemoveSavedFileCompleteCallback = (res: Object) => void;
class LegacyRemoveSavedFileOptions extends UTSObject {
    filePath!: string;
    success: LegacyRemoveSavedFileSuccessCallback | null = null;
    fail: LegacyRemoveSavedFileFailCallback | null = null;
    complete: LegacyRemoveSavedFileCompleteCallback | null = null;
}
class LegacySavedFileListItem extends UTSObject {
    filePath!: string;
    size!: number;
    createTime!: number;
}
class LegacyGetSavedFileListSuccess extends UTSObject {
    fileList!: LegacySavedFileListItem[];
}
type LegacyGetSavedFileListSuccessCallback = (res: LegacyGetSavedFileListSuccess) => void;
class LegacyGetSavedFileListFail extends UTSObject {
}
type LegacyGetSavedFileListFailCallback = (res: LegacyGetSavedFileListFail) => void;
type LegacyGetSavedFileListCompleteCallback = (res: Object) => void;
class LegacyGetSavedFileListOptions extends UTSObject {
    success: LegacyGetSavedFileListSuccessCallback | null = null;
    fail: LegacyGetSavedFileListFailCallback | null = null;
    complete: LegacyGetSavedFileListCompleteCallback | null = null;
}
type SaveFile = (options?: LegacySaveFileOptions | null) => void;
type GetFileInfo = (options?: LegacyGetFileInfoOptions | null) => void;
type GetSavedFileInfo = (options?: LegacyGetSavedFileInfoOptions | null) => void;
type RemoveSavedFile = (options?: LegacyRemoveSavedFileOptions | null) => void;
type GetSavedFileList = (options?: LegacyGetSavedFileListOptions | null) => void;
const SAVE_FILE_DIR = 'uni-store';
const CACHE_PATH = `unifile://cache/`;
function getSavedDirEnv(): string {
    return `${CACHE_PATH}${SAVE_FILE_DIR}`;
}
function getSavedDir(): string {
    return `${getEnv().CACHE_PATH}/${SAVE_FILE_DIR}`;
}
let savedIndex: [string, number] = [
    '0',
    0
];
function getSavedFileName(filePath: string): string {
    const ext = UTS.arrayPop(filePath.split('/'))?.split('.').slice(1).join('.');
    let fileName = Date.now() + '';
    if (savedIndex[0] === fileName) {
        savedIndex[1]++;
        if (savedIndex[1] > 0) {
            fileName += '-' + savedIndex[1];
        }
    } else {
        savedIndex[0] = fileName;
        savedIndex[1] = 0;
    }
    if (ext) {
        fileName += '.' + ext;
    }
    return fileName;
}
function getFsPath(filePath: string): string {
    filePath = getRealPath(filePath) as string;
    if (!filePath.startsWith('file:')) {
        return filePath;
    }
    const rawPath = filePath.replace(/^file:\/\//, '');
    if (rawPath[0] === '/') {
        return rawPath;
    }
    return filePath;
}
const saveFile: SaveFile = defineAsyncApi<LegacySaveFileOptions, LegacySaveFileSuccess>(API_SAVE_FILE, (options: LegacySaveFileOptions, exec: ApiExecutor<LegacySaveFileSuccess>)=>{
    const tempFilePath = getRealPath(options.tempFilePath) as string;
    const savedPath = getSavedDir();
    if (!fs.accessSync(savedPath)) {
        fs.mkdirSync(savedPath, true);
    }
    let srcFile: fs.File;
    try {
        srcFile = fs.openSync(tempFilePath, fs.OpenMode.READ_ONLY);
    } catch (error) {
        exec.reject((error as Error).message);
        return;
    }
    const savedFileName = getSavedFileName(tempFilePath);
    const savedFilePath = `${savedPath}/${savedFileName}`;
    fs.copyFile(srcFile.fd, savedFilePath, (err)=>{
        fs.closeSync(srcFile);
        if (err) {
            exec.reject(err.message);
        } else {
            exec.resolve({
                savedFilePath: `${getSavedDirEnv()}/${savedFileName}`
            } as LegacySaveFileSuccess);
        }
    });
}) as SaveFile;
const getSavedFileList: GetSavedFileList = defineAsyncApi<LegacyGetSavedFileListOptions, LegacyGetSavedFileListSuccess>(API_GET_SAVED_FILE_LIST, (options: LegacyGetSavedFileListOptions, exec: ApiExecutor<LegacyGetSavedFileListSuccess>)=>{
    const savedPath = getSavedDir();
    if (!fs.accessSync(savedPath)) {
        exec.resolve({
            fileList: []
        } as LegacyGetSavedFileListSuccess);
    }
    fs.listFile(savedPath, {} as ListFileOptions, (err, fileList)=>{
        if (err) {
            exec.reject(err.message);
        } else {
            exec.resolve({
                fileList: fileList.map((filePath: string): LegacySavedFileListItem | null =>{
                    const fullPath = `${savedPath}/${filePath}`;
                    const stat = fs.statSync(fullPath);
                    if (!stat.isFile()) {
                        return null;
                    }
                    return {
                        filePath: `${getSavedDirEnv()}/${filePath}`,
                        size: stat.size,
                        createTime: stat.ctime
                    } as LegacySavedFileListItem;
                }).filter((item): boolean =>!!item)
            } as LegacyGetSavedFileListSuccess);
        }
    });
}) as GetSavedFileList;
const getSavedFileInfo: GetSavedFileInfo = defineAsyncApi<LegacyGetSavedFileInfoOptions, LegacyGetSavedFileInfoSuccess>(API_GET_SAVED_FILE_INFO, (options: LegacyGetSavedFileInfoOptions, exec: ApiExecutor<LegacyGetSavedFileInfoSuccess>)=>{
    const savedFilePath = getFsPath(options.filePath);
    if (!fs.accessSync(savedFilePath)) {
        exec.reject('file not exist');
        return;
    }
    const stat = fs.statSync(savedFilePath);
    if (!stat.isFile()) {
        exec.reject('file not exist');
    }
    exec.resolve({
        size: stat.size,
        createTime: stat.ctime
    } as LegacyGetSavedFileInfoSuccess);
}) as GetSavedFileInfo;
const removeSavedFile: RemoveSavedFile = defineAsyncApi<LegacyRemoveSavedFileOptions, LegacyRemoveSavedFileSuccess>(API_REMOVE_SAVED_FILE, (options: LegacyRemoveSavedFileOptions, exec: ApiExecutor<LegacyRemoveSavedFileSuccess>)=>{
    const savedFilePath = getFsPath(options.filePath);
    if (!fs.accessSync(savedFilePath)) {
        exec.reject('file not exist');
        return;
    }
    fs.unlink(savedFilePath, (err)=>{
        if (err) {
            exec.reject(err.message);
        } else {
            exec.resolve();
        }
    });
}) as RemoveSavedFile;
const SupportedHashAlgorithm = [
    'md5',
    'sha1'
];
const getFileInfo: GetFileInfo = defineAsyncApi<LegacyGetFileInfoOptions, LegacyGetFileInfoSuccess>(API_GET_FILE_INFO, async (options: LegacyGetFileInfoOptions, exec: ApiExecutor<LegacyGetFileInfoSuccess>): Promise<void> =>{
    const filePath = getFsPath(options.filePath);
    if (options.digestAlgorithm && !SupportedHashAlgorithm.includes(options.digestAlgorithm)) {
        exec.reject('digestAlgorithm not support');
        return;
    }
    const digestAlgorithm = options.digestAlgorithm || 'md5';
    if (!filePath.startsWith('file:')) {
        try {
            fs.accessSync(filePath);
        } catch (error) {
            exec.reject('file not exist or inaccessible');
            return;
        }
        const stat = fs.statSync(filePath);
        if (!stat.isFile()) {
            exec.reject('file not exist');
        }
        Hash.hash(filePath, digestAlgorithm, (err, hash)=>{
            if (err) {
                exec.reject(err.message);
            } else {
                exec.resolve({
                    size: stat.size,
                    digest: hash
                } as LegacyGetFileInfoSuccess);
            }
        });
    } else {
        let file: fs.File | undefined = undefined;
        try {
            file = await fs.open(filePath);
        } catch (e) {
            exec.reject((e as Error).message);
            return;
        }
        const fd = file.fd as number;
        try {
            const stat = fs.statSync(fd);
            const hasher = Hash.createHash(digestAlgorithm);
            const buf = buffer.alloc(1024);
            while(true){
                const size = await fs.read(fd, buf.buffer);
                if (size === 1024) {
                    hasher.update(buf.buffer);
                } else {
                    hasher.update(buf.subarray(0, size).buffer);
                    break;
                }
            }
            exec.resolve({
                size: stat.size,
                digest: hasher.digest()
            } as LegacyGetFileInfoSuccess);
        } catch (error) {
            exec.reject((error as Error).message);
        } finally {
            fs.closeSync(fd);
        }
    }
}) as GetFileInfo;
export { GetFileInfo as GetFileInfo, GetSavedFileInfo as GetSavedFileInfo, GetSavedFileList as GetSavedFileList, LegacyGetFileInfoCompleteCallback as LegacyGetFileInfoCompleteCallback, LegacyGetFileInfoFail as LegacyGetFileInfoFail, LegacyGetFileInfoFailCallback as LegacyGetFileInfoFailCallback, LegacyGetFileInfoOptions as LegacyGetFileInfoOptions, LegacyGetFileInfoSuccess as LegacyGetFileInfoSuccess, LegacyGetFileInfoSuccessCallback as LegacyGetFileInfoSuccessCallback, LegacyGetSavedFileInfoCompleteCallback as LegacyGetSavedFileInfoCompleteCallback, LegacyGetSavedFileInfoFail as LegacyGetSavedFileInfoFail, LegacyGetSavedFileInfoFailCallback as LegacyGetSavedFileInfoFailCallback, LegacyGetSavedFileInfoOptions as LegacyGetSavedFileInfoOptions, LegacyGetSavedFileInfoSuccess as LegacyGetSavedFileInfoSuccess, LegacyGetSavedFileInfoSuccessCallback as LegacyGetSavedFileInfoSuccessCallback, LegacyGetSavedFileListCompleteCallback as LegacyGetSavedFileListCompleteCallback, LegacyGetSavedFileListFail as LegacyGetSavedFileListFail, LegacyGetSavedFileListFailCallback as LegacyGetSavedFileListFailCallback, LegacyGetSavedFileListOptions as LegacyGetSavedFileListOptions, LegacyGetSavedFileListSuccess as LegacyGetSavedFileListSuccess, LegacyGetSavedFileListSuccessCallback as LegacyGetSavedFileListSuccessCallback, LegacyRemoveSavedFileCompleteCallback as LegacyRemoveSavedFileCompleteCallback, LegacyRemoveSavedFileFail as LegacyRemoveSavedFileFail, LegacyRemoveSavedFileFailCallback as LegacyRemoveSavedFileFailCallback, LegacyRemoveSavedFileOptions as LegacyRemoveSavedFileOptions, LegacyRemoveSavedFileSuccess as LegacyRemoveSavedFileSuccess, LegacyRemoveSavedFileSuccessCallback as LegacyRemoveSavedFileSuccessCallback, LegacySaveFileCompleteCallback as LegacySaveFileCompleteCallback, LegacySaveFileFail as LegacySaveFileFail, LegacySaveFileFailCallback as LegacySaveFileFailCallback, LegacySaveFileOptions as LegacySaveFileOptions, LegacySaveFileSuccess as LegacySaveFileSuccess, LegacySaveFileSuccessCallback as LegacySaveFileSuccessCallback, LegacySavedFileListItem as LegacySavedFileListItem, RemoveSavedFile as RemoveSavedFile, SaveFile as SaveFile };
export { CACHE_PATH as CACHE_PATH };
export { getSavedDirEnv as getSavedDirEnv };
export { saveFile as saveFile };
export { getSavedFileList as getSavedFileList };
export { getSavedFileInfo as getSavedFileInfo };
export { removeSavedFile as removeSavedFile };
export { getFileInfo as getFileInfo };
