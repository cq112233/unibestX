import buffer from "@ohos:buffer";
import uri from "@ohos:uri";
import util from "@ohos:util";
import zlib from "@ohos:zlib";
import type { BusinessError as BusinessError__1 } from "@ohos:base";
import type { BusinessError } from "@ohos:base";
import Hash from "@ohos:file.hash";
import { UTSObject, UTS, UniError, defineSyncApi } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { string, IUniError, ApiError } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import fileUri from "@ohos:file.fileuri";
import fs from "@ohos:file.fs";
import type { ReadTextOptions } from "@ohos:file.fs";
import fs__1 from "@ohos:file.fs";
import type { ListFileOptions, WriteOptions as OHWriteOptions, ReadOptions, ReadTextOptions as ReadTextOptions__1 } from "@ohos:file.fs";
import { getEnv as getEnv__1, getRealPath as runtimeGetRealPath } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import { getEnv, getRealPath } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
const GET_FILE_SYSTEM_MANAGER = 'getFileSystemManager';
class ReadFileSuccessResult extends UTSObject {
    data!: string | ArrayBuffer;
}
class OpenFileSuccessResult extends UTSObject {
    fd!: string;
    errMsg!: string;
}
class FileManagerSuccessResult extends UTSObject {
    errMsg!: string;
}
type FileManagerSuccessCallback = (res: FileManagerSuccessResult) => void;
type FileManagerFailCallback = (res: FileSystemManagerFail) => void;
type FileManagerCompleteCallback = (res: Object) => void;
type ReadFileSuccessCallback = (res: ReadFileSuccessResult) => void;
class ReadFileOptions extends UTSObject {
    encoding: "ascii" | "base64" | "utf-8" | null = null;
    filePath!: string.URIString;
    success: ReadFileSuccessCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
class WriteFileOptions extends UTSObject {
    filePath!: string.URIString;
    encoding: "ascii" | "base64" | "utf-8" | null = null;
    data!: string | ArrayBuffer;
    success: FileManagerSuccessCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
class AppendFileOptions extends UTSObject {
    filePath!: string.URIString;
    encoding: "ascii" | "base64" | "utf-8" | null = null;
    data!: string | ArrayBuffer;
    success: FileManagerSuccessCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
type OpenFileSuccessCallback = (res: OpenFileSuccessResult) => void;
class OpenFileOptions extends UTSObject {
    filePath!: string.URIString;
    flag!: "a" | "ax" | "a+" | "ax+" | "r" | "r+" | "w" | "wx" | "w+" | "wx+";
    success: OpenFileSuccessCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
class OpenFileSyncOptions extends UTSObject {
    filePath!: string.URIString;
    flag!: "a" | "ax" | "a+" | "ax+" | "r" | "r+" | "w" | "wx" | "w+" | "wx+";
}
type UnLinkSuccessCallback = (res: FileManagerSuccessResult) => void;
class UnLinkOptions extends UTSObject {
    filePath!: string.URIString;
    success: UnLinkSuccessCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
type MkDirSuccessCallback = (res: FileManagerSuccessResult) => void;
class MkDirOptions extends UTSObject {
    dirPath!: string.URIString;
    recursive!: boolean;
    success: MkDirSuccessCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
class RmDirOptions extends UTSObject {
    dirPath!: string.URIString;
    recursive!: boolean;
    success: MkDirSuccessCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
class ReadDirSuccessResult extends UTSObject {
    files!: string[];
    errMsg!: string;
}
type ReadDirSuccessCallback = (res: ReadDirSuccessResult) => void;
class ReadDirOptions extends UTSObject {
    dirPath!: string.URIString;
    success: ReadDirSuccessCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
class AccessOptions extends UTSObject {
    path!: string.URIString;
    success: FileManagerSuccessCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
class RenameOptions extends UTSObject {
    oldPath!: string.URIString;
    newPath!: string.URIString;
    success: FileManagerSuccessCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
class CopyFileOptions extends UTSObject {
    srcPath!: string.URIString;
    destPath!: string.URIString;
    success: FileManagerSuccessCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
class SaveFileOptions extends UTSObject {
    tempFilePath!: string.URIString;
    filePath: string.URIString | null = null;
    success: SaveFileSuccessCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
type SaveFileSuccessCallback = (res: SaveFileSuccessResult) => void;
class SaveFileSuccessResult extends UTSObject {
    savedFilePath!: string;
}
class GetFileInfoSuccessResult extends UTSObject {
    digest!: string;
    size!: number;
    errMsg!: string;
}
type GetFileInfoSuccessCallback = (res: GetFileInfoSuccessResult) => void;
class GetFileInfoOptions extends UTSObject {
    filePath!: string.URIString;
    digestAlgorithm: "md5" | "sha1" | null = null;
    success: GetFileInfoSuccessCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
interface Stats {
    mode: number;
    size: number;
    lastAccessedTime: number;
    lastModifiedTime: number;
    mIsFile: boolean;
    isDirectory(): boolean;
    isFile(): boolean;
}
class FileStats extends UTSObject {
    path!: string;
    stats!: Stats;
}
class StatSuccessResult extends UTSObject {
    errMsg!: string;
    stats!: FileStats[];
}
type StatSuccessCallback = (res: StatSuccessResult) => void;
class StatOptions extends UTSObject {
    path!: string.URIString;
    recursive!: boolean;
    success: StatSuccessCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
class UnzipFileOptions extends UTSObject {
    zipFilePath!: string;
    targetPath!: string;
    success: FileManagerSuccessCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
class GetSavedFileListResult extends UTSObject {
    fileList!: string[];
}
type GetSavedFileListCallback = (res: GetSavedFileListResult) => void;
class GetSavedFileListOptions extends UTSObject {
    success: GetSavedFileListCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
class TruncateFileOptions extends UTSObject {
    filePath!: string.URIString;
    length!: number;
    success: FileManagerSuccessCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
class ReadCompressedFileResult extends UTSObject {
    data!: string;
}
type ReadCompressedFileCallback = (res: ReadCompressedFileResult) => void;
class ReadCompressedFileOptions extends UTSObject {
    filePath!: string.URIString;
    compressionAlgorithm!: "br";
    success: ReadCompressedFileCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
class RemoveSavedFileOptions extends UTSObject {
    filePath!: string.URIString;
    success: FileManagerSuccessCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
class WriteResult extends UTSObject {
    bytesWritten!: number;
    errMsg!: string;
}
type WriteCallback = (res: WriteResult) => void;
class WriteOptions extends UTSObject {
    fd!: string;
    data!: string | ArrayBuffer;
    offset: number | null = null;
    length: number | null = null;
    position: number | null = null;
    encoding: "ascii" | "base64" | "utf-8" | null = null;
    success: WriteCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
class WriteSyncOptions extends UTSObject {
    fd!: string;
    data!: string | ArrayBuffer;
    encoding: "ascii" | "base64" | "utf-8" | null = null;
    length: number | null = null;
    offset: number | null = null;
    position: number | null = null;
}
class CloseOptions extends UTSObject {
    fd!: string;
    success: FileManagerSuccessCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
class CloseSyncOptions extends UTSObject {
    fd!: string;
}
class FStatSuccessResult extends UTSObject {
    stats!: Stats;
}
type FStatSuccessCallback = (res: FStatSuccessResult) => void;
class FStatOptions extends UTSObject {
    fd!: string;
    success: FStatSuccessCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
class FStatSyncOptions extends UTSObject {
    fd!: string;
}
class FTruncateFileOptions extends UTSObject {
    fd!: string;
    length!: number;
    success: FileManagerSuccessCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
class FTruncateFileSyncOptions extends UTSObject {
    fd!: string;
    length!: number;
}
class EntryItem extends UTSObject {
    path!: string;
    encoding: "ascii" | "base64" | "utf-8" | null = null;
}
class EntriesResult extends UTSObject {
    entries!: Map<string, ZipFileItem>;
    result!: Map<string, ZipFileItem>;
    errMsg!: string;
}
class ZipFileItem extends UTSObject {
    data: string | ArrayBuffer | null = null;
    errMsg!: string;
}
type ReadZipEntryCallback = (res: EntriesResult) => void;
class ReadZipEntryOptions extends UTSObject {
    filePath!: string.URIString;
    encoding: "ascii" | "base64" | "utf-8" | null = null;
    entries: EntryItem[] | null = null;
    success: ReadZipEntryCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    complete: FileManagerCompleteCallback | null = null;
}
class ReadSuccessCallbackResult extends UTSObject {
    arrayBuffer!: ArrayBuffer;
    bytesRead!: number;
    errMsg!: string;
}
type ReadSuccessCallback = (result: ReadSuccessCallbackResult) => void;
class ReadOption extends UTSObject {
    arrayBuffer!: ArrayBuffer;
    fd!: string;
    length: number | null = null;
    offset: number | null = null;
    position: number | null = null;
    complete: FileManagerCompleteCallback | null = null;
    fail: FileManagerFailCallback | null = null;
    success: ReadSuccessCallback | null = null;
}
class ReadSyncOption extends UTSObject {
    arrayBuffer!: ArrayBuffer;
    fd!: string;
    length: number | null = null;
    offset: number | null = null;
    position: number | null = null;
}
class ReadResult extends UTSObject {
    arrayBuffer!: ArrayBuffer;
    bytesRead!: number;
}
interface FileSystemManager {
    access(options: AccessOptions): void;
    accessSync(path: string): void;
    appendFile(options: AppendFileOptions): void;
    appendFileSync(filePath: string, data: string | ArrayBuffer, encoding?: string): void;
    close(options: CloseOptions): void;
    closeSync(options: CloseSyncOptions): void;
    copyFile(options: CopyFileOptions): void;
    copyFileSync(srcPath: string, destPath: string): void;
    fstat(options: FStatOptions): void;
    fstatSync(options: FStatSyncOptions): Stats;
    ftruncate(options: FTruncateFileOptions): void;
    ftruncateSync(options: FTruncateFileSyncOptions): void;
    getFileInfo(options: GetFileInfoOptions): void;
    getSavedFileList(options: GetSavedFileListOptions): void;
    mkdir(options: MkDirOptions): void;
    mkdirSync(dirPath: string, recursive: boolean): void;
    open(options: OpenFileOptions): void;
    openSync(options: OpenFileSyncOptions): string;
    readFile(options: ReadFileOptions): void;
    readFileSync(filePath: string, encoding?: string): string | ArrayBuffer;
    read(option: ReadOption): void;
    readSync(option: ReadSyncOption): ReadResult;
    readdir(options: ReadDirOptions): void;
    readdirSync(dirPath: string): string[] | null;
    readZipEntry(options: ReadZipEntryOptions): void;
    rmdir(options: RmDirOptions): void;
    rmdirSync(dirPath: string, recursive: boolean): void;
    rename(options: RenameOptions): void;
    renameSync(oldPath: string, newPath: string): void;
    removeSavedFile(options: RemoveSavedFileOptions): void;
    readCompressedFile(options: ReadCompressedFileOptions): void;
    readCompressedFileSync(filePath: string, compressionAlgorithm: string): string;
    saveFile(options: SaveFileOptions): void;
    saveFileSync(tempFilePath: string, filePath: string | null): string;
    stat(options: StatOptions): void;
    statSync(path: string, recursive: boolean): FileStats[];
    truncate(options: TruncateFileOptions): void;
    truncateSync(filePath: string, length?: number): void;
    unlink(options: UnLinkOptions): void;
    unlinkSync(filePath: string): void;
    unzip(options: UnzipFileOptions): void;
    writeFile(options: WriteFileOptions): void;
    writeFileSync(filePath: string, data: string | ArrayBuffer, encoding?: string): void;
    write(options: WriteOptions): void;
    writeSync(options: WriteSyncOptions): WriteResult;
}
type GetFileSystemManager = () => FileSystemManager;
type FileSystemManagerErrorCode = 1200002 | 1300002 | 1300013 | 1300021 | 1300022 | 1300066 | 1301003 | 1301005 | 1300201 | 1300202 | 1301111 | 1302003 | 1300009 | 1300010 | 1300011 | 1300012 | 1300015 | 1300014 | 1300016 | 1300017 | 1300018 | 1300019 | 1300020 | 1300033;
type FileSystemManagerFail = IFileSystemManagerFail;
interface IFileSystemManagerFail extends IUniError {
    errCode: FileSystemManagerErrorCode;
}
interface CallBack {
    success?: Function | null;
    fail?: Function | null;
    complete?: Function | null;
}
class FileCallback {
    successFn?: Function;
    failFn?: Function;
    completeFn?: Function;
    constructor(callback: CallBack = {}) {
        if (typeof callback.success === 'function')
            this.successFn = callback.success;
        if (typeof callback.fail === 'function')
            this.failFn = callback.fail;
        if (typeof callback.complete === 'function')
            this.completeFn = callback.complete;
    }
    success(...args: Object[]) {
        if (this.successFn) {
            try {
                this.successFn(...args);
            }
            catch (err) {
                UTS.console.error(err);
            }
        }
        if (this.completeFn) {
            try {
                this.completeFn(...args);
            }
            catch (err) {
                UTS.console.error(err);
            }
        }
    }
    fail(...args: Object[]) {
        if (this.failFn) {
            try {
                this.failFn(...args);
            }
            catch (err) {
                UTS.console.error(err);
            }
        }
        if (this.completeFn) {
            try {
                this.completeFn(...args);
            }
            catch (err) {
                UTS.console.error(err);
            }
        }
    }
}
const FileSystemManagerUniErrorSubject = 'uni-fileSystemManager';
const FileSystemManagerUniErrors: Map<FileSystemManagerErrorCode, string> = new Map([
    [
        1200002,
        'Type error. only support base64 / utf-8'
    ],
    [
        1300002,
        'No such file or directory'
    ],
    [
        1300013,
        'Permission denied'
    ],
    [
        1300021,
        'Is a directory'
    ],
    [
        1300022,
        'Invalid argument'
    ],
    [
        1300066,
        'Directory not empty'
    ],
    [
        1301003,
        'Illegal operation on a directory'
    ],
    [
        1301005,
        'File already exists'
    ],
    [
        1300201,
        'System error'
    ],
    [
        1300202,
        'The maximum size of the file storage limit is exceeded'
    ],
    [
        1301111,
        'Brotli decompress fail'
    ],
    [
        1302003,
        'Invalid flag'
    ],
    [
        1300009,
        'Bad file descriptor'
    ],
    [
        1300010,
        'Try again'
    ],
    [
        1300011,
        'Bad address'
    ],
    [
        1300012,
        'Operation would block'
    ],
    [
        1300014,
        'Network is unreachable'
    ],
    [
        1300015,
        'Unknown error'
    ],
    [
        1300016,
        'Not a directory'
    ],
    [
        1300017,
        'Text file busy'
    ],
    [
        1300018,
        'File too large'
    ],
    [
        1300019,
        'Read-only file system'
    ],
    [
        1300020,
        'File name too long'
    ],
    [
        1300033,
        'Too many symbolic links encountered'
    ]
]);
class FileSystemManagerFailImpl extends UniError implements IFileSystemManagerFail {
    errCode: FileSystemManagerErrorCode;
    constructor(errCode: FileSystemManagerErrorCode) {
        super();
        this.errSubject = FileSystemManagerUniErrorSubject;
        this.errCode = errCode;
        this.errMsg = UTS.mapGet(FileSystemManagerUniErrors, errCode) ?? "";
    }
}
let type = new util.types();
type ModeReflect = Record<string, string>;
const modeReflect: ModeReflect = {
    'ax': 'a',
    'ax+': 'a+',
    'wx': 'w',
    'wx+': 'w+'
};
const ENCODING = [
    'utf8',
    'utf-8',
    'ascii',
    'base64',
    'binary',
    'hex',
    'ucs2',
    'ucs-2',
    'utf16le',
    'utf-16le',
    'latin1'
];
function getFileTypeMode(stat: fs.Stat): number {
    if (stat.isBlockDevice()) {
        return 0o060000;
    }
    if (stat.isCharacterDevice()) {
        return 0o020000;
    }
    if (stat.isDirectory()) {
        return 0o040000;
    }
    if (stat.isFIFO()) {
        return 0o010000;
    }
    if (stat.isFile()) {
        return 0o100000;
    }
    if (stat.isSocket()) {
        return 0o140000;
    }
    if (stat.isSymbolicLink()) {
        return 0o120000;
    }
    return 0;
}
function getOpenMode(flag: string): number | null {
    switch (flag) {
        case 'a':
            return fs.OpenMode.CREATE | fs.OpenMode.APPEND;
        case 'a+':
            return fs.OpenMode.CREATE | fs.OpenMode.READ_WRITE | fs.OpenMode.APPEND;
        case 'as':
            return fs.OpenMode.SYNC | fs.OpenMode.CREATE | fs.OpenMode.APPEND;
        case 'as+':
            return fs.OpenMode.SYNC | fs.OpenMode.CREATE | fs.OpenMode.READ_WRITE | fs.OpenMode.APPEND;
        case 'r':
            return fs.OpenMode.READ_ONLY;
        case 'r+':
            return fs.OpenMode.READ_WRITE;
        case 'w':
            return fs.OpenMode.CREATE | fs.OpenMode.WRITE_ONLY | fs.OpenMode.TRUNC;
        case 'w+':
            return fs.OpenMode.CREATE | fs.OpenMode.READ_WRITE | fs.OpenMode.TRUNC;
    }
    return null;
}
function transformErrorCode(errCode: number): FileSystemManagerErrorCode {
    switch (errCode) {
        case 13900012:
        case 13900001:
            return 1300013;
        case 13900002:
            return 1300002;
        case 13900004:
            return 1300201;
        case 13900005:
            return 1301003;
        case 13900008:
            return 1300009;
        case 13900010:
            return 1300010;
        case 13900013:
            return 1300011;
        case 13900018:
            return 1300016;
        case 13900019:
            return 1300021;
        case 13900020:
            return 1300022;
        case 13900023:
            return 1300017;
        case 13900024:
            return 1300018;
        case 13900027:
            return 1300019;
        case 13900030:
            return 1300020;
        case 13900033:
            return 1300033;
        case 13900034:
            return 1300012;
        case 13900042:
            return 1300013;
        case 13900044:
            return 1300014;
    }
    return errCode as FileSystemManagerErrorCode;
}
function isString(data: DataType | null = null): boolean {
    return typeof data === 'string';
}
function isFunction(data: DataType | null = null): boolean {
    return typeof data === 'function';
}
function isNull(data: DataType | null = null): boolean {
    return data === null;
}
function isUndefined(data: DataType | null = null): boolean {
    return typeof data === 'undefined';
}
function isArray(data: DataType | null = null): boolean {
    return Array.isArray(data);
}
function isNumber(data: DataType | null = null): boolean {
    return typeof data === 'number' && !Number.isNaN(data) && Number.isFinite(data);
}
function isBoolean(data: DataType | null = null): boolean {
    return typeof data === 'boolean';
}
function isArrayBuffer(data: DataType | null = null): boolean {
    return type.isAnyArrayBuffer(data as object);
}
function checkSingleDataType(data: DataType, dataType: string): boolean {
    let result = false;
    switch (dataType) {
        case 'string':
            result = isString(data);
            break;
        case 'number':
            result = isNumber(data);
            break;
        case 'boolean':
            result = isBoolean(data);
            break;
        case 'function':
            result = isFunction(data);
            break;
        case 'arraybuffer':
            result = isArrayBuffer(data);
            break;
        case 'array':
            result = isArray(data);
            break;
        case 'null':
            result = isNull(data);
            break;
        case 'undefined':
            result = isUndefined(data);
            break;
    }
    return result;
}
type BaseType = number | string | boolean | null | undefined;
type DataType = BaseType | Object | Function | ArrayBuffer | Array<BaseType>;
function checkDataType(data: DataType, isRequired: boolean, dataType: string, customCheck: ((data: DataType) => boolean) | null = null): boolean {
    let result = false;
    try {
        if (isRequired && (isNull(data) || isUndefined(data))) {
            throw new Error('The param data is required');
        }
        if (!isString(dataType) && !isArray(dataType)) {
            throw new Error('The param dataType should be a String or an Array');
        }
        if (customCheck != null && typeof customCheck !== 'function') {
            throw new Error('If customCheck exist,it should be a Function');
        }
        if (!isRequired && (isNull(data) || isUndefined(data))) {
            return true;
        }
        result = checkSingleDataType(data as DataType, dataType);
        if (result && typeof customCheck === 'function') {
            result = customCheck!(data);
        }
    }
    catch (error) {
        UTS.console.log(error);
        return false;
    }
    return result;
}
interface CustomValidReturn {
    isValid: false;
    err: IFileSystemManagerFail;
}
interface CustomValidReturnValid {
    isValid: true;
}
function checkPathExistence(methodName: string, pathName: string, path: string): CustomValidReturn | CustomValidReturnValid {
    const errMsg = `${methodName}:fail ${pathName}`;
    let isValid = false;
    if (!checkDataType(path, true, 'string')) {
        return {
            isValid,
            err: getParameterError(errMsg)
        } as CustomValidReturn;
    }
    if (path === '') {
        return {
            isValid,
            err: getPermissionError(errMsg) as IFileSystemManagerFail
        } as CustomValidReturn;
    }
    if (!fs.accessSync(path)) {
        return {
            isValid,
            err: getNoSuchFileOrDirectoryError(errMsg) as IFileSystemManagerFail
        } as CustomValidReturn;
    }
    return {
        isValid: true
    } as CustomValidReturnValid;
}
function ohosReadText(filePath: string, option: ReadTextOptions, cb: FileCallback) {
    fs.readText(filePath, option).then((str) => {
        cb.success({
            data: str
        } as ReadFileSuccessResult);
    }).catch((err: BusinessError) => {
        cb.fail(new FileSystemManagerFailImpl(transformErrorCode(err.code)) as ApiError);
    });
}
interface ObtainUpperPathReturn {
    index: number;
    upperPath: string;
}
function obtainUpperPath(inputPath: string): ObtainUpperPathReturn {
    let index = inputPath.lastIndexOf('/');
    let upperPath = inputPath.substring(0, index);
    return {
        index,
        upperPath
    } as ObtainUpperPathReturn;
}
interface CheckFd {
    isValid: true;
    fd: number;
}
interface CheckFdErr {
    isValid: false;
    fd: number;
    err: IFileSystemManagerFail;
}
function checkFd(methodName: string, fd: string): CheckFd | CheckFdErr {
    const errMsg = `${methodName}:fail`;
    if (!checkDataType(fd, true, 'string')) {
        return {
            isValid: false,
            fd: 0,
            err: getParameterError(errMsg)
        };
    }
    const transFdToNum = Number(fd);
    if (isNaN(transFdToNum)) {
        return {
            isValid: false,
            fd: 0,
            err: getParameterError(errMsg)
        };
    }
    return {
        isValid: true,
        fd: transFdToNum
    };
}
function checkPath(methodName: string, pathName: string, path: string): CustomValidReturn | CustomValidReturnValid {
    const errMsg = `${methodName}:fail ${pathName}`;
    let isValid = false;
    if (!checkDataType(path, true, 'string')) {
        return {
            isValid,
            err: getParameterError(errMsg)
        };
    }
    if (path === '') {
        return {
            isValid,
            err: getPermissionError(errMsg)
        };
    }
    return {
        isValid: true
    };
}
function checkPathSync(methodName: string, pathName: string, path: string): CustomValidReturn | CustomValidReturnValid {
    const errMsg = `${methodName}:fail ${pathName}`;
    let isValid = false;
    if (path === '' || !checkDataType(path, true, 'string')) {
        return {
            isValid,
            err: getParameterError(errMsg)
        };
    }
    return {
        isValid: true
    };
}
function checkPathExistenceSync(methodName: string, pathName: string, path: string): CustomValidReturn | CustomValidReturnValid {
    const errMsg = `${methodName}:fail ${pathName}`;
    let isValid = false;
    if (path === '' || !checkDataType(path, true, 'string')) {
        return {
            isValid,
            err: getParameterError(errMsg)
        };
    }
    if (!fs.accessSync(path)) {
        return {
            isValid,
            err: getNoSuchFileOrDirectoryError(errMsg)
        };
    }
    return {
        isValid: true
    };
}
interface CheckEncodingReturn {
    isValid: boolean;
    errMsg: string;
}
function checkEncoding(methodName: string, encoding: string | null = null): CheckEncodingReturn {
    let isValid = false;
    if (encoding === null || !checkDataType(encoding, false, 'string')) {
        return {
            errMsg: `${methodName}:fail invalid encoding: ${encoding}`,
            isValid
        } as CheckEncodingReturn;
    }
    if (encoding !== '' && encoding !== undefined) {
        if (!ENCODING.includes(encoding)) {
            return {
                errMsg: `${methodName}:fail Unknown encoding: ${encoding}`,
                isValid
            } as CheckEncodingReturn;
        }
        if (encoding !== 'utf-8' && encoding !== 'utf8') {
            return {
                errMsg: `${methodName}:fail, The encoding is valid, but is not supported currently: ${encoding}`,
                isValid
            } as CheckEncodingReturn;
        }
    }
    return {
        isValid: true,
        errMsg: ''
    };
}
function isFileUri(path: string): boolean | "" {
    return path && typeof path === 'string' && (path.startsWith('file://') || path.startsWith('datashare://'));
}
interface FileSystemManagerApiError extends ApiError {
    errMsg: string;
}
function getApiError(errCode: number, errMsg: string | null = null): FileSystemManagerApiError {
    return wrapErrMsg(new FileSystemManagerFailImpl(transformErrorCode(errCode)), errMsg) as FileSystemManagerApiError;
}
function wrapErrMsg(err: IFileSystemManagerFail, errMsg: string | null = null): IFileSystemManagerFail {
    if (errMsg) {
        err.errMsg = `${errMsg} ${err.errMsg}`;
    }
    return err;
}
function getParameterError(errMsg: string | null = null): IFileSystemManagerFail {
    return getApiError(1300022, errMsg) as IFileSystemManagerFail;
}
function getPermissionError(errMsg: string | null = null): IFileSystemManagerFail {
    return getApiError(1300013, errMsg) as IFileSystemManagerFail;
}
function getNoSuchFileOrDirectoryError(errMsg: string | null = null): IFileSystemManagerFail {
    return getApiError(1300002, errMsg) as IFileSystemManagerFail;
}
function getAlreadyExistsError(errMsg: string | null = null): IFileSystemManagerFail {
    return getApiError(1301005, errMsg) as IFileSystemManagerFail;
}
function getIsDirectoryError(errMsg: string | null = null): IFileSystemManagerFail {
    return getApiError(1300021, errMsg) as IFileSystemManagerFail;
}
function getDirectoryNotEmpty(errMsg: string | null = null): IFileSystemManagerFail {
    return getApiError(1300066, errMsg) as IFileSystemManagerFail;
}
const SAVE_FILE_DIR = 'uni-store';
const UNI_FILE_SCHEME = 'unifile://';
const USER_DATA_PATH = `${UNI_FILE_SCHEME}usr/`;
const TEMP_PATH = `${UNI_FILE_SCHEME}temp/`;
const CACHE_PATH = `${UNI_FILE_SCHEME}cache/`;
const SANDBOX_PATH = `${UNI_FILE_SCHEME}sandbox/`;
function getUserDataPath(): string {
    return getEnv().USER_DATA_PATH + '/';
}
function getTempPath(): string {
    return getEnv().TEMP_PATH + '/';
}
function getSandboxPath(): string {
    return getEnv().SANDBOX_PATH + '/';
}
function getCachePath(): string {
    return getEnv().CACHE_PATH + '/';
}
function getSavedDir(): string {
    return `${getCachePath()}${SAVE_FILE_DIR}`;
}
const normalizeFilePath = (filePath: string): string => {
    if (filePath.startsWith(getUserDataPath())) {
        return filePath.replace(getUserDataPath(), USER_DATA_PATH);
    }
    if (filePath.startsWith(getTempPath())) {
        return filePath.replace(getTempPath(), TEMP_PATH);
    }
    if (filePath.startsWith(getCachePath())) {
        return filePath.replace(getCachePath(), CACHE_PATH);
    }
    if (filePath.startsWith(getSandboxPath())) {
        return filePath.replace(getSandboxPath(), SANDBOX_PATH);
    }
    return filePath;
};
const savedFileList = new Map<string, string>();
function getSavedFileName(fileName: string, index: number = 0): string {
    if (savedFileList.has(fileName)) {
        return getSavedFileName(`${fileName}${index}`, index + 1);
    }
    return fileName;
}
function getSavedFilePath(tempFilePath: string, savedPath: string, appendFileName: boolean): string {
    const uriInstance = new uri.URI(tempFilePath);
    const fileInfo = uriInstance.clearQuery().getLastSegment().split('.');
    const ext = fileInfo.length > 1 ? UTS.arrayPop(fileInfo) : '';
    let fileName = getSavedFileName(fileInfo.join('.'));
    if (ext) {
        fileName += '.' + ext;
    }
    const savedFilePath = appendFileName ? `${savedPath}${savedPath.endsWith('/') ? '' : '/'}${fileName}` : savedPath;
    if (!savedFilePath.startsWith(getSavedDir())) {
        savedFileList.set(fileName, normalizeFilePath(savedFilePath));
    }
    return savedFilePath;
}
function getFsPath(filePath: string): string {
    filePath = getRealPath(filePath) as string;
    if (!/^file:/.test(filePath)) {
        return filePath;
    }
    const rawPath = filePath.replace(/^file:\/\//, '');
    if (rawPath[0] === '/') {
        return rawPath;
    }
    return filePath;
}
function calculateAllPaths(paths: string[]): string[] {
    const allPaths = new Set<string>();
    paths.forEach((path) => {
        path = path.replace(/^\//, '');
        const uriInstance = new uri.URI(path);
        const segments = uriInstance.getSegment();
        segments.forEach((segment, index) => {
            if (index === segments.length - 1) {
                allPaths.add(`/${path}`);
            }
            else {
                allPaths.add(`/${segments.slice(0, index + 1).join('/')}`);
            }
        });
    });
    return Array.from(allPaths);
}
const DEFAULT_ENCODING = 'utf-8';
const ENCODING_SUPPORT = [
    "ascii",
    "base64",
    "utf-8"
];
const DIGEST_ALGORITHM_VALUES = [
    "md5",
    "sha1"
];
const DEFAULT_POSITION = 0;
const DEFAULT_LENGTH = 0;
const DEFAULT_FLAG = 'r';
const DEFAULT_OFFSET = 0;
type _FLAG = "a" | "ax" | "a+" | "ax+" | "r" | "r+" | "w" | "wx" | "w+" | "wx+";
const FLAG = [
    'a',
    'ax',
    'a+',
    'ax+',
    'as',
    'as+',
    'r',
    'r+',
    'w',
    'wx',
    'w+',
    'wx+'
];
function useGetRealPath(filepath: string): string {
    if (filepath.startsWith('/data/storage/'))
        return filepath;
    if (filepath.startsWith('file://') && !filepath.startsWith('file:///')) {
        return new fileUri.FileUri(filepath).path;
    }
    return (runtimeGetRealPath(filepath) as string).replace(/^file:\/\/\//, '/');
}
class StatsImpl implements Stats {
    stat: fs__1.Stat | null = null;
    mode: number = -1;
    size: number = -1;
    lastAccessedTime: number = -1;
    lastModifiedTime: number = -1;
    mIsFile: boolean = false;
    constructor(stat: fs__1.Stat, mode: number) {
        this.stat = stat;
        this.mode = mode;
        this.size = stat.size;
        this.lastAccessedTime = stat.atime;
        this.lastModifiedTime = stat.mtime;
        this.mIsFile = stat.isFile();
    }
    isDirectory(): boolean {
        if (this.stat == null) {
            return false;
        }
        return this.stat.isDirectory();
    }
    isFile(): boolean {
        if (this.stat == null) {
            return false;
        }
        return this.stat.isFile();
    }
}
class FileSystemManagerImpl implements FileSystemManager {
    readFile(options: ReadFileOptions): void {
        const errMsg = `readFile:fail`;
        let filePath = options.filePath, encoding = options.encoding, success = options.success, fail = options.fail, complete = options.complete;
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        filePath = useGetRealPath(filePath);
        const checkRes = checkPathExistence('readFile', 'filePath', filePath);
        if (!checkRes.isValid) {
            cb.fail(getParameterError((checkRes as CustomValidReturn).err.errMsg));
            return;
        }
        const stat = fs__1.statSync(filePath);
        if (stat.isDirectory()) {
            cb.fail(getApiError(1300021, errMsg));
            return;
        }
        const lengthOfFile = stat.size;
        if (encoding == undefined || encoding === 'base64' || encoding === 'ascii') {
            let sizeOfNewArrayBuffer = lengthOfFile;
            const file = fs__1.openSync(filePath, fs__1.OpenMode.READ_ONLY);
            const buf = new ArrayBuffer(sizeOfNewArrayBuffer);
            fs__1.read(file.fd, buf).then((readLen) => {
                if (encoding === 'base64' || encoding === 'ascii') {
                    cb.success({
                        data: buffer.from(buf).toString(encoding)
                    } as ReadFileSuccessResult);
                }
                else {
                    cb.success({
                        data: buf
                    } as ReadFileSuccessResult);
                }
            }).catch((err: BusinessError__1) => {
                cb.fail(new FileSystemManagerFailImpl(transformErrorCode(err.code)) as ApiError);
            }).finally(() => {
                fs__1.closeSync(file);
            });
        }
        else {
            const res = checkEncoding('readFile', encoding);
            if (!res.isValid) {
                cb.fail(getParameterError(res.errMsg));
                return;
            }
            ohosReadText(filePath, {
                encoding
            } as ReadTextOptions__1, cb);
        }
    }
    readFileSync(filePath: string, encoding: string | null = null): string | ArrayBuffer {
        const errMsg = `readFileSync:fail`;
        filePath = useGetRealPath(filePath);
        const res1 = checkPathExistenceSync('readFileSync', 'filePath', filePath);
        if (!res1.isValid) {
            throw new Error((res1 as CustomValidReturn).err?.errMsg);
        }
        const stat = fs__1.statSync(filePath);
        if (stat.isDirectory()) {
            throw new Error(getApiError(1300021, errMsg).errMsg);
        }
        const lengthOfFile = stat.size;
        if (encoding == undefined || encoding === 'base64' || encoding === 'ascii') {
            let sizeOfNewArrayBuffer = lengthOfFile;
            const file = fs__1.openSync(filePath, fs__1.OpenMode.READ_ONLY);
            const buf = new ArrayBuffer(sizeOfNewArrayBuffer);
            try {
                fs__1.readSync(file.fd, buf);
            }
            catch (err) {
                UTS.console.error(err);
            }
            fs__1.closeSync(file);
            if (encoding === 'base64' || encoding === 'ascii') {
                return buffer.from(buf).toString(encoding);
            }
            return buf;
        }
        else {
            const res2 = checkEncoding('readFileSync', encoding);
            if (!res2.isValid) {
                throw new Error(res2.errMsg);
            }
            if ((encoding as string) === 'utf8') {
                encoding = 'utf-8';
            }
            try {
                const str = fs__1.readTextSync(filePath, {
                    encoding
                } as ReadTextOptions__1);
                return str as string;
            }
            catch (err) {
                throw new Error(`readFileSync: ${(err as BusinessError__1).message}`);
            }
        }
    }
    writeFile(options: WriteFileOptions): void {
        const errMsg = `writeFile:fail`;
        let filePath = options.filePath, data = options.data, _options_encoding = options.encoding, encoding = _options_encoding == null ? DEFAULT_ENCODING : _options_encoding, success = options.success, fail = options.fail, complete = options.complete;
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        filePath = useGetRealPath(filePath);
        if (!checkDataType(filePath, true, 'string')) {
            cb.fail(getParameterError(`${errMsg} filePath`) as ApiError);
            return;
        }
        if (!(checkDataType((data as (string | ArrayBuffer)), true, 'string') || checkDataType((data as (string | ArrayBuffer)), true, 'arraybuffer'))) {
            throw new Error(getParameterError(`${errMsg} data`).errMsg);
        }
        if (!ENCODING_SUPPORT.includes(encoding)) {
            cb.fail(getParameterError(`${errMsg} encoding`));
            return;
        }
        let file: fs__1.File | null = null;
        try {
            const stat = fs__1.statSync(filePath);
            if (stat.isDirectory()) {
                cb.fail(getIsDirectoryError(errMsg));
                return;
            }
        }
        catch (error) {
            try {
                file = fs__1.openSync(filePath, fs__1.OpenMode.CREATE | fs__1.OpenMode.WRITE_ONLY | fs__1.OpenMode.TRUNC);
            }
            catch (error) {
                cb.fail(getApiError((error as BusinessError__1).code, errMsg));
                return;
            }
        }
        let _write: Promise<number> | null = null;
        if (file == null) {
            file = fs__1.openSync(filePath, fs__1.OpenMode.WRITE_ONLY | fs__1.OpenMode.TRUNC);
        }
        switch (encoding) {
            case 'ascii':
            case 'base64':
                if (data instanceof ArrayBuffer) {
                    _write = fs__1.write(file.fd, buffer.alloc(data.byteLength, buffer.from(data), encoding).buffer);
                }
                else {
                    _write = fs__1.write(file.fd, buffer.from((data as string), encoding).buffer);
                }
                break;
            case 'utf-8':
                const writeOptions: OHWriteOptions = {
                    encoding
                };
                _write = fs__1.write(file.fd, data as (string | ArrayBuffer), writeOptions);
                break;
            default:
                cb.fail(getParameterError(`${errMsg} encoding`));
                return;
        }
        _write?.then((_) => {
            cb.success({
                errMsg: 'writeFile:ok'
            } as FileManagerSuccessResult);
        }).catch((err: BusinessError__1) => {
            cb.fail(getApiError(err.code, errMsg));
        }).finally(() => {
            fs__1.closeSync(file);
        });
    }
    writeFileSync(filePath: string, data: string | ArrayBuffer, encoding: string = DEFAULT_ENCODING): void {
        const errMsg = `writeFileSync:fail`;
        filePath = useGetRealPath(filePath);
        if (!checkDataType(filePath, true, 'string')) {
            throw new Error(getParameterError(`${errMsg} filePath`).errMsg);
        }
        if (!(checkDataType((data as (string | ArrayBuffer)), true, 'string') || checkDataType((data as (string | ArrayBuffer)), true, 'arraybuffer'))) {
            throw new Error(getParameterError(`${errMsg} data`).errMsg);
        }
        if (!ENCODING_SUPPORT.includes(encoding)) {
            throw new Error(getParameterError(`${errMsg} encoding`).errMsg);
        }
        let file: fs__1.File | null = null;
        try {
            const stat = fs__1.statSync(filePath);
            if (stat.isDirectory()) {
                throw new Error(`${errMsg} illegal operation on a directory, open: ${filePath}`);
            }
        }
        catch (error) {
            try {
                file = fs__1.openSync(filePath, fs__1.OpenMode.CREATE | fs__1.OpenMode.WRITE_ONLY | fs__1.OpenMode.TRUNC);
            }
            catch (error) {
                throw new Error(getApiError((error as BusinessError__1).code, errMsg).errMsg);
            }
        }
        if (file == null) {
            file = fs__1.openSync(filePath, fs__1.OpenMode.WRITE_ONLY | fs__1.OpenMode.TRUNC);
        }
        try {
            switch (encoding) {
                case 'ascii':
                case 'base64':
                    if (data instanceof ArrayBuffer) {
                        fs__1.writeSync(file.fd, buffer.alloc(data.byteLength, buffer.from(data), encoding).buffer);
                    }
                    else {
                        fs__1.writeSync(file.fd, buffer.from((data as string), encoding).buffer);
                    }
                    break;
                case 'utf-8':
                    const writeOptions: OHWriteOptions = {
                        encoding
                    };
                    fs__1.writeSync(file.fd, data as (string | ArrayBuffer), writeOptions);
                    break;
                default:
                    throw new Error(getParameterError(`${errMsg} encoding`).errMsg);
            }
            fs__1.closeSync(file);
        }
        catch (err) {
            fs__1.closeSync(file);
            throw new Error(`${errMsg} ${(err as BusinessError__1).message}`);
        }
    }
    read(option: ReadOption): void {
        const errMsg = 'read:fail';
        let inFd = option.fd, arrayBuffer = option.arrayBuffer, offset = option.offset, length = option.length, position = option.position, success = option.success, fail = option.fail, complete = option.complete;
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        let fd: number = -1;
        if (!checkDataType(inFd, true, 'string') || inFd === '' || isNaN(Number(inFd))) {
            cb.fail(getParameterError(`${errMsg} fd`));
            return;
        }
        else {
            fd = Number(inFd);
        }
        if (!checkDataType(arrayBuffer, true, 'arraybuffer')) {
            cb.fail(getParameterError(`${errMsg} arrayBuffer`));
            return;
        }
        if (!checkDataType(offset, false, 'number') || offset! < 0) {
            offset = Number(offset);
            if (isNaN(offset) || offset < 0) {
                offset = DEFAULT_OFFSET;
            }
        }
        if (!checkDataType(length, false, 'number') || length! < 0) {
            length = Number(length);
            if (isNaN(length) || length < 0) {
                length = DEFAULT_LENGTH;
            }
        }
        const allowedSize = arrayBuffer.byteLength - offset!;
        if (allowedSize < length!) {
            cb.fail({
                errMsg: `${errMsg} RangeError [ERR_OUT_OF_RANGE]: The value length is out of range. It must be <= ${allowedSize}. Received ${length}`
            } as ApiError);
            return;
        }
        if (!checkDataType(position, false, 'number') || position! < 0) {
            position = DEFAULT_POSITION;
        }
        const arrayBufferOffset = offset!;
        const newBuffer = arrayBuffer.slice(arrayBufferOffset);
        fs__1.read(fd, newBuffer, {
            offset: position,
            length
        } as ReadOptions).then((readLen) => {
            const viewNewBuffer = new Uint8Array(newBuffer);
            const viewArrayBuffer = new Uint8Array(arrayBuffer);
            viewArrayBuffer.set(viewNewBuffer, arrayBufferOffset);
            cb.success({
                bytesRead: readLen,
                arrayBuffer: arrayBuffer,
                errMsg: 'read:ok'
            } as ReadSuccessCallbackResult);
        }).catch((err: BusinessError__1) => {
            cb.fail({
                errCode: 1300201,
                errMsg: `${errMsg} with error message: ${err.message},error code: ${err.code}`
            } as ApiError);
        });
    }
    readSync(option: ReadSyncOption): ReadResult {
        const errMsg = 'readSync:fail';
        let inFd = option.fd, arrayBuffer = option.arrayBuffer, offset = option.offset, length = option.length, position = option.position;
        let fd: number = -1;
        if (!checkDataType(inFd, true, 'string') || inFd === '' || isNaN(Number(inFd))) {
            throw new Error(`${errMsg} invalid fd`);
        }
        else {
            fd = Number(inFd);
        }
        if (!checkDataType(arrayBuffer, true, 'arraybuffer')) {
            throw new Error(`${errMsg} invalid arrayBuffer`);
        }
        if (!checkDataType(offset, false, 'number') || offset! < 0) {
            offset = Number(offset);
            if (isNaN(offset) || offset < 0) {
                offset = DEFAULT_OFFSET;
            }
        }
        if (!checkDataType(length, false, 'number') || length! < 0) {
            length = Number(length);
            if (isNaN(length) || length < 0) {
                length = DEFAULT_LENGTH;
            }
        }
        const allowedSize = arrayBuffer.byteLength - offset!;
        if (allowedSize < length!) {
            throw new Error(`${errMsg} RangeError [ERR_OUT_OF_RANGE]: The value length is out of range. It must be <= ${allowedSize}. Received ${length}`);
        }
        if (!checkDataType(position, false, 'number') || position! < 0) {
            position = DEFAULT_POSITION;
        }
        try {
            const arrayBufferOffset = offset!;
            let newBuffer = arrayBuffer.slice(arrayBufferOffset);
            const len = fs__1.readSync(fd, newBuffer, {
                offset: position,
                length
            } as ReadOptions);
            const viewNewBuffer = new Uint8Array(newBuffer);
            let viewArrayBuffer = new Uint8Array(arrayBuffer);
            viewArrayBuffer.set(viewNewBuffer, arrayBufferOffset);
            return {
                bytesRead: len,
                arrayBuffer: arrayBuffer
            } as ReadResult;
        }
        catch (err) {
            throw new Error(`${errMsg} ${(err as BusinessError__1).message}`);
        }
    }
    unlink(options: UnLinkOptions): void {
        const errMsg = 'unlink:fail';
        let filePath = options.filePath, success = options.success, fail = options.fail, complete = options.complete;
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        filePath = useGetRealPath(filePath);
        const res = checkPathExistence('unlink', 'filePath', filePath);
        if (!res.isValid) {
            cb.fail((res as CustomValidReturn).err);
            return;
        }
        const stat = fs__1.statSync(filePath);
        if (stat.isDirectory()) {
            cb.fail(getIsDirectoryError(`${errMsg} ${filePath}`));
            return;
        }
        fs__1.unlink(filePath).then(() => {
            cb.success({
                errMsg: 'unlink:ok'
            } as FileManagerSuccessResult);
        }).catch((err: BusinessError__1) => {
            cb.fail({
                errCode: 1300201,
                errMsg: `${errMsg} with error message: ${err.message}, error code: ${err.code}`
            } as ApiError);
        });
    }
    unlinkSync(filePath: string): void {
        const errMsg = 'unlinkSync:fail';
        filePath = useGetRealPath(filePath);
        const res = checkPathExistenceSync('unlinkSync', 'filePath', filePath);
        if (!res.isValid) {
            throw new Error((res as CustomValidReturn).err?.errMsg);
        }
        if (fs__1.statSync(filePath).isDirectory()) {
            throw new Error(`${errMsg} illegal operation on a directory, unlink: ${filePath}`);
        }
        try {
            fs__1.unlinkSync(filePath);
        }
        catch (err) {
            throw new Error(`${errMsg} ${(err as BusinessError__1).message}`);
        }
    }
    mkdir(options: MkDirOptions): void {
        const errMsg = `mkdir:fail`;
        let dirPath = options.dirPath, recursive = options.recursive, success = options.success, fail = options.fail, complete = options.complete;
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        if (!checkDataType(recursive, false, 'boolean')) {
            recursive = Boolean(recursive);
        }
        dirPath = useGetRealPath(dirPath);
        const checkRes = checkPath('mkdir', 'dirPath', dirPath);
        if (!checkRes.isValid) {
            cb.fail((checkRes as CustomValidReturn).err);
            return;
        }
        if (fs__1.accessSync(dirPath)) {
            cb.fail(getAlreadyExistsError(errMsg));
            return;
        }
        const getSubPath = obtainUpperPath(dirPath);
        if (!recursive && !fs__1.accessSync(getSubPath.upperPath)) {
            cb.fail(getNoSuchFileOrDirectoryError(errMsg));
            return;
        }
        fs__1.mkdir(dirPath, recursive).then(() => {
            cb.success({
                errMsg: 'mkdir:ok'
            } as FileManagerSuccessResult);
        }).catch((err: BusinessError__1) => {
            cb.fail(getApiError(err.code, errMsg));
        });
    }
    mkdirSync(dirPath: string, recursive: boolean): void {
        const errMsg = `mkdirSync:fail`;
        if (!checkDataType(recursive, false, 'boolean')) {
            recursive = Boolean(recursive);
        }
        dirPath = useGetRealPath(dirPath);
        const res = checkPathSync('mkdirSync', 'dirPath', dirPath);
        if (!res.isValid) {
            throw new Error((res as CustomValidReturn).err?.errMsg);
        }
        if (fs__1.accessSync(dirPath)) {
            throw new Error(`${errMsg} dirPath already exists: ${dirPath}`);
        }
        if (!recursive && !fs__1.accessSync(obtainUpperPath(dirPath).upperPath)) {
            throw new Error(`${errMsg} recursive is false and upper path does not exist`);
        }
        try {
            fs__1.mkdirSync(dirPath, recursive);
        }
        catch (error) {
            throw new Error(getApiError((error as BusinessError__1).code, errMsg).errMsg);
        }
    }
    rmdir(options: RmDirOptions): void {
        const errMsg = 'rmdir:fail';
        let dirPath = options.dirPath, recursive = options.recursive, success = options.success, fail = options.fail, complete = options.complete;
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        if (!checkDataType(recursive, false, 'boolean')) {
            recursive = Boolean(recursive);
        }
        let deleteDir = true;
        if (!dirPath.endsWith('/')) {
            dirPath = dirPath + '/';
        }
        if ([
            CACHE_PATH,
            USER_DATA_PATH,
            TEMP_PATH,
            SANDBOX_PATH
        ].includes(dirPath)) {
            deleteDir = false;
        }
        dirPath = useGetRealPath(dirPath);
        const res = checkPathExistence('rmdir', 'dirPath', dirPath);
        if (!res.isValid) {
            cb.fail((res as CustomValidReturn).err);
            return;
        }
        if (!fs__1.statSync(dirPath).isDirectory()) {
            cb.fail(getNoSuchFileOrDirectoryError(`${errMsg} ${dirPath}`));
            return;
        }
        if (!recursive) {
            let filenames = fs__1.listFileSync(dirPath);
            if (filenames.length) {
                cb.fail(getDirectoryNotEmpty(errMsg));
                return;
            }
        }
        fs__1.rmdir(dirPath).then(() => {
            if (!deleteDir) {
                fs__1.mkdirSync(dirPath, true);
            }
            cb.success({
                errMsg: 'rmdir:ok'
            } as FileManagerSuccessResult);
        }).catch((err: BusinessError__1) => {
            cb.fail(getApiError((err as BusinessError__1).code, errMsg));
        });
    }
    rmdirSync(dirPath: string, recursive: boolean): void {
        const errMsg = 'rmdirSync:fail';
        if (!checkDataType(recursive, false, 'boolean')) {
            recursive = Boolean(recursive);
        }
        let deleteDir = true;
        if (!dirPath.endsWith('/')) {
            dirPath = dirPath + '/';
        }
        if ([
            CACHE_PATH,
            USER_DATA_PATH,
            TEMP_PATH,
            SANDBOX_PATH
        ].includes(dirPath)) {
            deleteDir = false;
        }
        dirPath = useGetRealPath(dirPath);
        const res = checkPathExistenceSync('rmdirSync', 'dirPath', dirPath);
        if (!res.isValid) {
            throw new Error((res as CustomValidReturn).err?.errMsg);
        }
        if (!fs__1.statSync(dirPath).isDirectory()) {
            throw new Error(`${errMsg} no such directory, open: ${dirPath}`);
        }
        if (!recursive && (fs__1.listFileSync(dirPath).length > 0)) {
            throw new Error(`${errMsg} directory not empty`);
        }
        try {
            fs__1.rmdirSync(dirPath);
            if (!deleteDir) {
                fs__1.mkdirSync(dirPath, true);
            }
        }
        catch (err) {
            throw new Error(getApiError((err as BusinessError__1).code, errMsg).errMsg);
        }
    }
    readdir(options: ReadDirOptions): void {
        const errMsg = 'readdir:fail';
        let dirPath = options.dirPath, success = options.success, fail = options.fail, complete = options.complete;
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        dirPath = useGetRealPath(dirPath);
        const checkRes = checkPathExistence('readdir', 'dirPath', dirPath);
        if (!checkRes.isValid) {
            cb.fail((checkRes as CustomValidReturn).err);
            return;
        }
        const stat = fs__1.statSync(dirPath);
        if (stat.isFile()) {
            cb.fail(getNoSuchFileOrDirectoryError(`${errMsg} ${dirPath}`));
            return;
        }
        fs__1.listFile(dirPath).then((files) => {
            cb.success({
                files,
                errMsg: 'readdir:ok'
            } as ReadDirSuccessResult);
        }).catch((err: BusinessError__1) => {
            cb.fail({
                errCode: 1300201,
                errMsg: `${errMsg} with error message: ${err.message}, error code: ${err.code}`
            } as ApiError);
        });
    }
    readdirSync(dirPath: string): string[] | null {
        const errMsg = 'readdirSync:fail';
        dirPath = useGetRealPath(dirPath);
        const res = checkPathExistenceSync('readdirSync', 'dirPath', dirPath);
        if (!res.isValid) {
            throw new Error((res as CustomValidReturn).err?.errMsg);
        }
        if (fs__1.statSync(dirPath).isFile()) {
            throw new Error(`${errMsg} not a directory: ${dirPath}`);
        }
        try {
            return fs__1.listFileSync(dirPath);
        }
        catch (err) {
            throw new Error(getApiError((err as BusinessError__1).code, errMsg).errMsg);
        }
    }
    access(options: AccessOptions): void {
        const errMsg = 'access:fail';
        let path = options.path, success = options.success, fail = options.fail, complete = options.complete;
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        if (!checkDataType(path, true, 'string')) {
            cb.fail(getParameterError(`${errMsg} path`));
            return;
        }
        path = useGetRealPath(path);
        fs__1.access(path).then((res) => {
            if (res) {
                cb.success({
                    errMsg: 'access:ok'
                } as FileManagerSuccessResult);
            }
            else {
                cb.fail(getNoSuchFileOrDirectoryError(errMsg));
            }
        }, (err: BusinessError__1) => {
            cb.fail({
                errCode: err.code,
                errMsg: getApiError(err.code, errMsg).errMsg
            } as ApiError);
        });
    }
    accessSync(path: string): void {
        const errMsg = 'accessSync:fail';
        if (!checkDataType(path, true, 'string')) {
            throw new Error(`${errMsg} path must be a string`);
        }
        path = useGetRealPath(path);
        const res = fs__1.accessSync(path);
        if (!res) {
            throw new Error(`${errMsg} No such file or directory`);
        }
    }
    rename(options: RenameOptions): void {
        const errMsg = 'rename:fail';
        let oldPath = options.oldPath, newPath = options.newPath, success = options.success, fail = options.fail, complete = options.complete;
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        oldPath = useGetRealPath(oldPath);
        newPath = useGetRealPath(newPath);
        const checkRes1 = checkPathExistence('rename', 'oldPath', oldPath);
        if (!checkRes1.isValid) {
            cb.fail((checkRes1 as CustomValidReturn).err);
            return;
        }
        const checkRes2 = checkPath('rename', 'newPath', newPath);
        if (!checkRes2.isValid) {
            cb.fail((checkRes2 as CustomValidReturn).err);
            return;
        }
        const ifAccessNewPath = fs__1.accessSync(newPath);
        if (!ifAccessNewPath) {
            const getUpperPath = obtainUpperPath(newPath);
            if (!fs__1.accessSync(getUpperPath.upperPath)) {
                cb.fail(getNoSuchFileOrDirectoryError(errMsg));
                return;
            }
        }
        if (ifAccessNewPath && (oldPath !== newPath)) {
            cb.fail(getAlreadyExistsError(errMsg));
            return;
        }
        fs__1.rename(oldPath, newPath).then(() => {
            cb.success({
                errMsg: 'rename:ok'
            } as FileManagerSuccessResult);
        }).catch((err: BusinessError__1) => {
            cb.fail({
                errCode: 1300201,
                errMsg: getApiError((err as BusinessError__1).code, errMsg).errMsg
            } as ApiError);
        });
    }
    renameSync(oldPath: string, newPath: string): void {
        const errMsg = 'renameSync:fail';
        oldPath = useGetRealPath(oldPath);
        newPath = useGetRealPath(newPath);
        const res1 = checkPathExistenceSync('renameSync', 'oldPath', oldPath);
        if (!res1.isValid) {
            throw new Error((res1 as CustomValidReturn).err?.errMsg);
        }
        const res2 = checkPathSync('renameSync', 'newPath', newPath);
        if (!res2.isValid) {
            throw new Error((res2 as CustomValidReturn).err?.errMsg);
        }
        const ifAccessNewPath = fs__1.accessSync(newPath);
        if (!ifAccessNewPath && !fs__1.accessSync(obtainUpperPath(newPath).upperPath)) {
            throw new Error(`${errMsg} No such file or directory, open: ${newPath}`);
        }
        if (ifAccessNewPath && (oldPath !== newPath)) {
            throw new Error(errMsg);
        }
        try {
            fs__1.renameSync(oldPath, newPath);
        }
        catch (err) {
            throw new Error(getApiError((err as BusinessError__1).code, errMsg).errMsg);
        }
    }
    copyFile(options: CopyFileOptions): void {
        const errMsg = 'copyFile:fail';
        let srcPath = options.srcPath, destPath = options.destPath, success = options.success, fail = options.fail, complete = options.complete;
        srcPath = useGetRealPath(srcPath);
        destPath = useGetRealPath(destPath);
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        const checkResOfSrcPath = checkPathExistence('copyFile', 'srcPath', srcPath);
        if (!checkResOfSrcPath.isValid) {
            cb.fail((checkResOfSrcPath as CustomValidReturn).err);
            return;
        }
        const checkResOfDestPath = checkPath('copyFile', 'destPath', destPath);
        if (!checkResOfDestPath.isValid) {
            cb.fail((checkResOfDestPath as CustomValidReturn).err);
            return;
        }
        if (fs__1.statSync(srcPath).isDirectory()) {
            cb.fail(getIsDirectoryError(`${errMsg} ${srcPath}`));
            return;
        }
        if (destPath.endsWith('/')) {
            destPath = destPath.slice(0, -1);
        }
        let canAccessDestPath = false;
        try {
            canAccessDestPath = fs__1.accessSync(destPath);
        }
        catch (error) { }
        if (!canAccessDestPath) {
            const getUpperPath = obtainUpperPath(destPath);
            let canAccess = false;
            try {
                canAccess = fs__1.accessSync(getUpperPath.upperPath);
            }
            catch (error) { }
            if (!canAccess) {
                fs__1.mkdirSync(getUpperPath.upperPath, true);
            }
        }
        else {
            const destPathStat = fs__1.statSync(destPath);
            if (destPathStat.isDirectory()) {
                cb.fail(getApiError(1300021, errMsg) as IFileSystemManagerFail);
                return;
            }
        }
        fs__1.copyFile(srcPath, destPath).then(() => {
            cb.success({
                errMsg: 'copyFile:ok'
            } as FileManagerSuccessResult);
        }).catch((err: BusinessError__1) => {
            cb.fail(getApiError((err as BusinessError__1).code, errMsg));
        });
    }
    copyFileSync(srcPath: string, destPath: string): void {
        const errMsg = 'copyFileSync:fail';
        srcPath = useGetRealPath(srcPath);
        destPath = useGetRealPath(destPath);
        const checkResSrc = checkPathExistenceSync('copyFileSync', 'srcPath', srcPath);
        if (!checkResSrc.isValid) {
            throw new Error((checkResSrc as CustomValidReturn).err?.errMsg);
        }
        const checkResDest = checkPathSync('copyFileSync', 'destPath', destPath);
        if (!checkResDest.isValid) {
            throw new Error((checkResDest as CustomValidReturn).err?.errMsg);
        }
        if (fs__1.statSync(srcPath).isDirectory()) {
            throw new Error((getApiError(1301003, errMsg) as IFileSystemManagerFail).errMsg);
        }
        if (destPath.endsWith('/')) {
            destPath = destPath.slice(0, -1);
        }
        let canAccessDestPath = false;
        try {
            canAccessDestPath = fs__1.accessSync(destPath);
        }
        catch (error) { }
        if (!canAccessDestPath) {
            const getUpperPath = obtainUpperPath(destPath);
            let canAccess = false;
            try {
                canAccess = fs__1.accessSync(getUpperPath.upperPath);
            }
            catch (error) { }
            if (!canAccess) {
                fs__1.mkdirSync(getUpperPath.upperPath, true);
            }
        }
        else {
            const destPathStat = fs__1.statSync(destPath);
            if (destPathStat.isDirectory()) {
                throw new Error((getApiError(1300021, errMsg) as IFileSystemManagerFail).errMsg);
            }
        }
        try {
            fs__1.copyFileSync(srcPath, destPath);
        }
        catch (err) {
            throw new Error(`${errMsg} ${(err as BusinessError__1).message}`);
        }
    }
    getFileInfo(options: GetFileInfoOptions): void {
        const errMsg = 'getFileInfo:fail';
        let filePath = options.filePath, success = options.success, fail = options.fail, complete = options.complete;
        let digestAlgorithm: string = options.digestAlgorithm ?? 'md5';
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        filePath = useGetRealPath(filePath);
        const checkResOfFilePath = checkPathExistence('getFileInfo', 'filePath', filePath);
        if (!checkResOfFilePath.isValid) {
            cb.fail((checkResOfFilePath as CustomValidReturn).err);
            return;
        }
        if (!DIGEST_ALGORITHM_VALUES.includes(digestAlgorithm)) {
            cb.fail(getParameterError(`${errMsg} digestAlgorithm`));
            return;
        }
        try {
            const fd = fs__1.openSync(filePath, fs__1.OpenMode.READ_ONLY).fd;
            const stat = isFileUri(filePath) ? fs__1.statSync(fd) : fs__1.statSync(filePath);
            Hash.hash(filePath, digestAlgorithm, (err, hash) => {
                if (err) {
                    cb.fail(getApiError((err as BusinessError__1).code, errMsg));
                }
                else {
                    cb.success({
                        errMsg: 'getFileInfo:ok',
                        size: stat.size,
                        digest: hash.toLocaleLowerCase()
                    } as GetFileInfoSuccessResult);
                }
            });
        }
        catch (err) {
            cb.fail(getApiError((err as BusinessError__1).code, errMsg));
        }
    }
    stat(options: StatOptions): void {
        const errMsg = 'stat:fail';
        let path = options.path, recursive = options.recursive, success = options.success, fail = options.fail, complete = options.complete;
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        path = useGetRealPath(path);
        const res = checkPathExistence('stat', 'path', path);
        if (!res.isValid) {
            cb.fail((res as CustomValidReturn).err);
            return;
        }
        if (!checkDataType(recursive, false, 'boolean')) {
            recursive = Boolean(recursive);
        }
        try {
            const stat = fs__1.statSync(path);
            const isFile = stat.isFile();
            if (isFile)
                recursive = false;
            const combinationMode = getFileTypeMode(stat) | stat.mode;
            const fileStats = {
                path: isFile ? '' : '/',
                stats: new StatsImpl(stat, combinationMode)
            } as FileStats;
            if (recursive) {
                fs__1.listFile(path, {
                    recursion: true
                } as ListFileOptions).then((filePaths): Promise<FileStats>[] => {
                    return calculateAllPaths(filePaths).map((filePath): Promise<FileStats> => fs__1.stat(`${path}${filePath}`).then((stat): FileStats => {
                        const combinationMode = getFileTypeMode(stat) | stat.mode;
                        return {
                            path: filePath,
                            stats: new StatsImpl(stat, combinationMode)
                        } as FileStats;
                    }));
                }).then((fileStates) => {
                    Promise.all(fileStates).then((_fileStats) => {
                        cb.success({
                            stats: [
                                fileStats
                            ].concat(_fileStats) as FileStats[],
                            errMsg: 'stat:ok'
                        } as StatSuccessResult);
                    });
                }).catch((err: BusinessError__1) => {
                    cb.fail({
                        errCode: 1300201,
                        errMsg: `${errMsg} with error message: ${err.message}, error code: ${err.code}`
                    } as ApiError);
                });
                return;
            }
            cb.success({
                stats: [
                    fileStats
                ] as FileStats[],
                errMsg: 'stat:ok'
            } as StatSuccessResult);
        }
        catch (err) {
            cb.fail({
                errCode: 1300201,
                errMsg: `${errMsg} with error message: ${(err as BusinessError__1).message}, error code: ${(err as BusinessError__1).code}`
            } as ApiError);
        }
    }
    statSync(path: string, recursive: boolean): FileStats[] {
        const errMsg = 'statSync:fail';
        path = useGetRealPath(path);
        const res = checkPathExistenceSync('statSync', 'path', path);
        if (!res.isValid) {
            throw new Error((res as CustomValidReturn).err?.errMsg);
        }
        if (!checkDataType(recursive, false, 'boolean')) {
            recursive = Boolean(recursive);
        }
        try {
            const stat = fs__1.statSync(path);
            const isFile = stat.isFile();
            if (isFile)
                recursive = false;
            const combinationMode = getFileTypeMode(stat) | stat.mode;
            const fileStats = {
                path: isFile ? '' : '/',
                stats: new StatsImpl(stat, combinationMode)
            } as FileStats;
            if (recursive) {
                const filePaths = fs__1.listFileSync(path, {
                    recursion: true
                } as ListFileOptions);
                const _fileStats = calculateAllPaths(filePaths).map((filePath): FileStats => {
                    const stat = fs__1.statSync(`${path}${filePath}`);
                    const combinationMode = getFileTypeMode(stat) | stat.mode;
                    return {
                        path: filePath,
                        stats: new StatsImpl(stat, combinationMode)
                    } as FileStats;
                });
                return [
                    fileStats
                ].concat(_fileStats) as FileStats[];
            }
            return [
                fileStats
            ] as FileStats[];
        }
        catch (err) {
            throw new Error(getApiError((err as BusinessError__1).code, errMsg).errMsg);
        }
    }
    appendFile(options: AppendFileOptions): void {
        const errMsg = 'appendFile:fail';
        let filePath = options.filePath, data = options.data, _options_encoding = options.encoding, encoding = _options_encoding == null ? DEFAULT_ENCODING : _options_encoding, success = options.success, fail = options.fail, complete = options.complete;
        filePath = useGetRealPath(filePath);
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        if (!checkDataType(filePath, true, 'string')) {
            cb.fail(getParameterError(`${errMsg} filePath`));
            return;
        }
        if (!checkDataType(data, true, 'string') && !checkDataType(data, true, 'arraybuffer')) {
            cb.fail(getParameterError(`${errMsg} data`));
            return;
        }
        const res = fs__1.accessSync(filePath);
        if (!res) {
            cb.fail(getNoSuchFileOrDirectoryError(errMsg));
            return;
        }
        const writeOptions: OHWriteOptions = {};
        if (checkDataType(data, true, 'string'))
            writeOptions.encoding = encoding;
        const file = fs__1.openSync(filePath, fs__1.OpenMode.READ_WRITE | fs__1.OpenMode.APPEND);
        fs__1.write(file.fd, data as (string | ArrayBuffer), writeOptions).then((_) => {
            cb.success({
                errMsg: 'appendFile:ok'
            } as FileManagerSuccessResult);
        }).catch((err: BusinessError__1) => {
            cb.fail(getApiError(err.code, errMsg));
        }).finally(() => {
            fs__1.closeSync(file);
        });
    }
    appendFileSync(filePath: string, data: string | ArrayBuffer, encoding: string = DEFAULT_ENCODING): void {
        const errMsg = 'appendFileSync:fail';
        filePath = useGetRealPath(filePath);
        if (!checkDataType(filePath, true, 'string')) {
            throw new Error(`${errMsg} parameter error: parameter.filePath should be String`);
        }
        if (!checkDataType(data, true, 'string') && !checkDataType(data, true, 'arraybuffer')) {
            throw new Error(`${errMsg} parameter error: parameter.data should be String/ArrayBuffer`);
        }
        const res = fs__1.accessSync(filePath);
        if (!res) {
            throw new Error(`${errMsg} No such file or directory, open "${filePath}"`);
        }
        const writeOptions: OHWriteOptions = {};
        if (checkDataType(data, true, 'string'))
            writeOptions.encoding = encoding;
        const file = fs__1.openSync(filePath, fs__1.OpenMode.READ_WRITE | fs__1.OpenMode.APPEND);
        fs__1.writeSync(file.fd, data as (string | ArrayBuffer), writeOptions);
    }
    saveFile(options: SaveFileOptions): void {
        const errMsg = 'saveFile:fail';
        let filePath = options.filePath, success = options.success, fail = options.fail, complete = options.complete;
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        const tempFilePath = useGetRealPath(options.tempFilePath) as string;
        if (!fs__1.accessSync(tempFilePath)) {
            cb.fail(getNoSuchFileOrDirectoryError(`${errMsg} ${tempFilePath}`));
            return;
        }
        if (filePath != null && filePath.endsWith('/')) {
            filePath = filePath.slice(0, -1);
        }
        const savedPath = filePath ? useGetRealPath(filePath) : getSavedDir();
        const savedFilePath = getSavedFilePath(tempFilePath, savedPath, !filePath);
        let canAccessDestPath = false;
        try {
            canAccessDestPath = fs__1.accessSync(savedFilePath);
        }
        catch (error) { }
        if (!canAccessDestPath) {
            const getUpperPath = obtainUpperPath(savedFilePath);
            let canAccess = false;
            try {
                canAccess = fs__1.accessSync(getUpperPath.upperPath);
            }
            catch (error) { }
            if (!canAccess) {
                fs__1.mkdirSync(getUpperPath.upperPath, true);
            }
        }
        else {
            const destPathStat = fs__1.statSync(savedFilePath);
            if (destPathStat.isDirectory()) {
                cb.fail(getApiError(1301003, errMsg) as IFileSystemManagerFail);
                return;
            }
        }
        const operateSuccess = () => {
            cb.success({
                savedFilePath: normalizeFilePath(savedFilePath)
            } as SaveFileSuccessResult);
        };
        fs__1.rename(tempFilePath, savedFilePath).then(operateSuccess).catch((err: Error) => {
            if ((err as BusinessError__1).code === 13900016) {
                this.copyFile({
                    srcPath: tempFilePath,
                    destPath: savedFilePath,
                    success: operateSuccess,
                    fail: cb.fail,
                    complete: null
                } as CopyFileOptions);
            }
            else {
                cb.fail(getApiError((err as BusinessError__1).code, errMsg));
            }
        });
    }
    saveFileSync(inTempFilePath: string, filePath: string | null): string {
        const errMsg = 'saveFileSync:fail';
        const tempFilePath = useGetRealPath(inTempFilePath) as string;
        if (!fs__1.accessSync(tempFilePath)) {
            throw new Error(`${errMsg} No such file or directory. tempFilePath: ${tempFilePath}`);
        }
        if (filePath != null && filePath.endsWith('/')) {
            filePath = filePath.slice(0, -1);
        }
        const savedPath = filePath ? useGetRealPath(filePath) : getSavedDir();
        const savedFilePath = getSavedFilePath(tempFilePath, savedPath, !filePath);
        let canAccessDestPath = false;
        try {
            canAccessDestPath = fs__1.accessSync(savedFilePath);
        }
        catch (error) { }
        if (!canAccessDestPath) {
            const getUpperPath = obtainUpperPath(savedFilePath);
            let canAccess = false;
            try {
                canAccess = fs__1.accessSync(getUpperPath.upperPath);
            }
            catch (error) { }
            if (!canAccess) {
                fs__1.mkdirSync(getUpperPath.upperPath, true);
            }
        }
        else {
            const destPathStat = fs__1.statSync(savedFilePath);
            if (destPathStat.isDirectory()) {
                throw new Error(getApiError(1301003, errMsg).errMsg);
            }
        }
        try {
            fs__1.renameSync(tempFilePath, savedFilePath);
            return normalizeFilePath(savedFilePath);
        }
        catch (error) {
            if ((error as BusinessError__1).code === 13900016) {
                this.copyFileSync(tempFilePath, savedFilePath);
                return normalizeFilePath(savedFilePath);
            }
            else {
                throw new Error((error as Error).message);
            }
        }
    }
    removeSavedFile(options: RemoveSavedFileOptions): void {
        const errMsg = 'removeSavedFile:fail';
        const filePath = options.filePath, success = options.success, fail = options.fail, complete = options.complete;
        const savedFilePath = getFsPath(filePath);
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        if (!fs__1.accessSync(savedFilePath)) {
            cb.fail(getAlreadyExistsError(errMsg));
            return;
        }
        fs__1.unlink(savedFilePath, (err) => {
            if (err) {
                cb.fail(getApiError(err.code, 'removeSavedFile:fail'));
            }
            else {
                cb.success({
                    errMsg: 'removeSavedFile:ok'
                } as FileManagerSuccessResult);
            }
        });
    }
    getSavedFileList(options: GetSavedFileListOptions): void {
        const errMsg = 'getSavedFileList:fail';
        const success = options.success, fail = options.fail, complete = options.complete;
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        const savedPath = getSavedDir();
        if (!fs__1.accessSync(savedPath)) {
            cb.success({
                fileList: Array.from(savedFileList.values())
            } as GetSavedFileListResult);
            return;
        }
        fs__1.listFile(savedPath, {} as ListFileOptions, (err, fileList) => {
            if (err) {
                cb.fail(getApiError(err.code, errMsg));
            }
            else {
                cb.success({
                    fileList: fileList.map((filePath: string): string | null => {
                        const fullPath = savedPath + '/' + filePath;
                        const stat = fs__1.statSync(fullPath);
                        if (!stat.isFile()) {
                            return null;
                        }
                        return normalizeFilePath(fullPath);
                    }).concat(Array.from(savedFileList.values())).filter((item): boolean => !!item)
                } as GetSavedFileListResult);
            }
        });
    }
    truncate(options: TruncateFileOptions): void {
        const errMsg = 'truncate:fail';
        let filePath = options.filePath, length = options.length, success = options.success, fail = options.fail, complete = options.complete;
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        if (!checkDataType(filePath, true, 'string')) {
            cb.fail(getParameterError(`${errMsg} filePath`));
            return;
        }
        filePath = useGetRealPath(filePath);
        const res = fs__1.accessSync(filePath);
        if (!res) {
            cb.fail(getNoSuchFileOrDirectoryError(`${errMsg} ${filePath}`));
            return;
        }
        const fileStat = fs__1.statSync(filePath);
        if (fileStat.isDirectory()) {
            cb.fail(getIsDirectoryError(`${errMsg} ${filePath}`));
            return;
        }
        if (!checkDataType(length, false, 'number') || length! < 0) {
            length = 0;
        }
        const file = fs__1.openSync(filePath, fs__1.OpenMode.READ_WRITE);
        fs__1.truncate(file.fd, length).then(() => {
            cb.success({
                errMsg: 'truncate:ok'
            } as FileManagerSuccessResult);
        }).catch((err: BusinessError__1) => {
            cb.fail(getApiError(err.code, errMsg));
        });
    }
    truncateSync(filePath: string, length: number | null = null): void {
        const errMsg = 'truncateSync:fail';
        filePath = useGetRealPath(filePath);
        if (!checkDataType(filePath, true, 'string')) {
            throw new Error(`${errMsg} parameter error: parameter.filePath should be String`);
        }
        const res = fs__1.accessSync(filePath);
        if (!res) {
            throw new Error(`${errMsg} No such file or directory, open "${filePath}"`);
        }
        const fileStat = fs__1.statSync(filePath);
        if (fileStat.isDirectory()) {
            throw new Error(`${errMsg} illegal operation on a directory, open: ${filePath}`);
        }
        if (!checkDataType(length, false, 'number') || length! < 0) {
            length = 0;
        }
        const file = fs__1.openSync(filePath, fs__1.OpenMode.READ_WRITE);
        try {
            fs__1.truncateSync(file.fd, length!);
        }
        catch (error) {
            throw new Error(getApiError((error as BusinessError__1).code, errMsg).errMsg);
        }
    }
    open(options: OpenFileOptions): void {
        const errMsg = 'open:fail';
        let filePath = options.filePath, flag = options.flag, success = options.success, fail = options.fail, complete = options.complete;
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        filePath = useGetRealPath(filePath);
        if (!checkDataType(filePath, true, 'string')) {
            cb.fail(getParameterError(`${errMsg} filePath`));
            return;
        }
        if (!FLAG.includes(flag)) {
            flag = DEFAULT_FLAG;
        }
        if (Object.keys(modeReflect).includes(flag)) {
            if (fs__1.accessSync(filePath)) {
                cb.fail(getAlreadyExistsError(errMsg));
                return;
            }
            else {
                flag = modeReflect[flag as keyof ModeReflect] as _FLAG;
            }
        }
        fs__1.open(filePath, getOpenMode(flag)!, (err, file) => {
            if (err) {
                cb.fail(getApiError(err.code, errMsg));
            }
            else {
                cb.success({
                    fd: file.fd.toString(),
                    errMsg: 'open:ok'
                } as OpenFileSuccessResult);
            }
        });
    }
    openSync(options: OpenFileSyncOptions): string {
        let filePath = options.filePath, flag = options.flag;
        filePath = useGetRealPath(filePath);
        if (!checkDataType(filePath, true, 'string')) {
            throw new Error('openSync:fail parameter error: parameter.filePath should be String');
        }
        if (!FLAG.includes(flag)) {
            flag = DEFAULT_FLAG;
        }
        if (Object.keys(modeReflect).includes(flag)) {
            if (fs__1.accessSync(filePath)) {
                throw new Error('openSync:fail EXIST: file already exists');
            }
            else {
                flag = modeReflect[flag as keyof ModeReflect] as _FLAG;
            }
        }
        const file = fs__1.openSync(filePath, getOpenMode(flag)!);
        return file.fd.toString();
    }
    write(options: WriteOptions): void {
        const errMsg = 'write:fail';
        let inFd = options.fd, data = options.data, offset = options.offset, length = options.length, position = options.position, _options_encoding = options.encoding, encoding = _options_encoding == null ? 'utf-8' : _options_encoding, success = options.success, fail = options.fail, complete = options.complete;
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        let fd: number = -1;
        const writeOptions: OHWriteOptions = {};
        if (!checkDataType(inFd, true, 'string') || inFd === '' || isNaN(Number(inFd))) {
            cb.fail(getParameterError(`${errMsg} fd`));
            return;
        }
        else {
            fd = Number(inFd);
        }
        if (!checkDataType((data as DataType), true, 'arraybuffer') && !checkDataType((data as DataType), true, 'string')) {
            cb.fail(getParameterError(`${errMsg} data`));
            return;
        }
        if (checkDataType((data as DataType), true, 'arraybuffer')) {
            const sizeOfArrayBuffer = (data as ArrayBuffer).byteLength as number;
            if (!checkDataType(offset, false, 'number') || offset! < 0 || !offset) {
                offset = DEFAULT_OFFSET;
            }
            if (offset > sizeOfArrayBuffer) {
                cb.fail({
                    errCode: 1300201,
                    errMsg: `write:fail RangeError [ERR_OUT_OF_RANGE]: The value of offset is out of range. It must be <= ${sizeOfArrayBuffer}. Received ${offset}`
                } as ApiError);
                return;
            }
            if (!checkDataType(length, false, 'number') || length! < 0 || !length) {
                length = sizeOfArrayBuffer - offset;
            }
            if (length > sizeOfArrayBuffer - offset) {
                cb.fail({
                    errCode: 1300201,
                    errMsg: `write:fail RangeError [ERR_OUT_OF_RANGE]: The value of length is out of range. It must be <= ${sizeOfArrayBuffer - offset}. Received ${length}`
                } as ApiError);
                return;
            }
            const uint8ArrayTemp = new Uint8Array(data as ArrayBuffer);
            const slicedArray = uint8ArrayTemp.slice(offset);
            data = slicedArray.buffer;
        }
        if (checkDataType((data as DataType), true, 'string')) {
            const res = checkEncoding('write', encoding);
            if (!res.isValid) {
                cb.fail(getParameterError(res.errMsg));
                return;
            }
            writeOptions.encoding = encoding as string;
            length = buffer.byteLength(data as string);
        }
        if (!checkDataType(position, false, 'number') || position! < 0 || !position) {
            position = DEFAULT_POSITION;
        }
        writeOptions.offset = position;
        writeOptions.length = length!;
        let _write: Promise<number> | null = null;
        switch (encoding) {
            case 'ascii':
            case 'base64':
                if (data instanceof ArrayBuffer) {
                    _write = fs__1.write(fd, buffer.alloc(data.byteLength, buffer.from(data), encoding).buffer, writeOptions);
                }
                else {
                    _write = fs__1.write(fd, buffer.from((data as string), encoding).buffer, writeOptions);
                }
                break;
            case 'utf-8':
                writeOptions.encoding = encoding;
                _write = fs__1.write(fd, data as (string | ArrayBuffer), writeOptions);
                break;
        }
        _write!.then((bytesWritten) => {
            cb.success({
                bytesWritten,
                errMsg: 'writeFile:ok'
            } as WriteResult);
        }).catch((err: BusinessError__1) => {
            cb.fail(getApiError(err.code, errMsg));
        }).finally(() => {
            fs__1.closeSync(fd);
        });
    }
    writeSync(options: WriteSyncOptions): WriteResult {
        const errMsg = 'writeSync:fail';
        let inFd = options.fd, data = options.data, offset = options.offset, length = options.length, position = options.position, _options_encoding = options.encoding, encoding = _options_encoding == null ? 'utf-8' : _options_encoding;
        let fd: number = -1;
        const writeOptions: OHWriteOptions = {};
        if (!checkDataType(inFd, true, 'string') || inFd === '' || isNaN(Number(inFd))) {
            throw new Error('writeSync:fail invalid fd');
        }
        else {
            fd = Number(inFd);
        }
        if (!checkDataType((data as DataType), true, 'arraybuffer') && !checkDataType((data as DataType), true, 'string')) {
            throw new Error('writeSync:fail data must be a string or ArrayBuffer');
        }
        if (checkDataType((data as DataType), true, 'arraybuffer')) {
            const sizeOfArrayBuffer = (data as ArrayBuffer).byteLength as number;
            if (!checkDataType(offset, false, 'number') || offset! < 0 || !offset) {
                offset = DEFAULT_OFFSET;
            }
            if (offset > sizeOfArrayBuffer) {
                throw new Error(`write:fail RangeError [ERR_OUT_OF_RANGE]: The value of offset is out of range. It must be <= ${sizeOfArrayBuffer}. Received ${offset}`);
            }
            if (!checkDataType(length, false, 'number') || length! < 0 || !length) {
                length = sizeOfArrayBuffer - offset;
            }
            if (length > sizeOfArrayBuffer - offset) {
                throw new Error(`write:fail RangeError [ERR_OUT_OF_RANGE]: The value of length is out of range. It must be <= ${sizeOfArrayBuffer - offset}. Received ${length}`);
            }
            const uint8ArrayTemp = new Uint8Array(data as ArrayBuffer);
            const slicedArray = uint8ArrayTemp.slice(offset);
            data = slicedArray.buffer;
        }
        if (checkDataType((data as DataType), true, 'string')) {
            const res = checkEncoding('write', encoding);
            if (!res.isValid) {
                throw new Error(res.errMsg);
            }
            writeOptions.encoding = encoding as string;
            length = buffer.byteLength(data as string);
        }
        if (!checkDataType(position, false, 'number') || position! < 0 || !position) {
            position = DEFAULT_POSITION;
        }
        writeOptions.offset = position;
        writeOptions.length = length!;
        let writeLen: number = 0;
        try {
            switch (encoding) {
                case 'ascii':
                case 'base64':
                    if (data instanceof ArrayBuffer) {
                        writeLen = fs__1.writeSync(fd, buffer.alloc(data.byteLength, buffer.from(data), encoding).buffer, writeOptions);
                    }
                    else {
                        writeLen = fs__1.writeSync(fd, buffer.from((data as string), encoding).buffer, writeOptions);
                    }
                    break;
                case 'utf-8':
                    writeOptions.encoding = encoding;
                    writeLen = fs__1.writeSync(fd, data as (string | ArrayBuffer), writeOptions);
                    break;
                default:
                    throw new Error(getParameterError(`${errMsg} encoding`).errMsg);
            }
            return {
                bytesWritten: writeLen,
                errMsg: 'write:ok'
            } as WriteResult;
        }
        catch (err) {
            fs__1.closeSync(fd);
            throw new Error(`${errMsg} ${(err as BusinessError__1).message}`);
        }
    }
    close(options: CloseOptions): void {
        const errMsg = 'close:fail';
        let inFd = options.fd, success = options.success, fail = options.fail, complete = options.complete;
        let fd: number = -1;
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        const res = checkFd('fstat', inFd);
        if (!res.isValid) {
            cb.fail((res as CheckFdErr).err);
            return;
        }
        fd = res.fd;
        if (isNaN(fd)) {
            cb.fail(getParameterError(`${errMsg} invalid fd`));
            return;
        }
        fs__1.close(fd, (err) => {
            if (err) {
                cb.fail(getParameterError(`${errMsg} bad file descriptor`));
            }
            else {
                cb.success({
                    errMsg: 'close:ok'
                } as FileManagerSuccessResult);
            }
        });
    }
    closeSync(options: CloseSyncOptions): void {
        const errMsg = 'closeSync:fail';
        let inFd = options.fd;
        let fd: number = -1;
        if (inFd === '' || !checkDataType(inFd, true, 'string')) {
            throw new Error(`${errMsg} invalid fd`);
        }
        fd = Number(inFd);
        if (isNaN(fd)) {
            throw new Error(`${errMsg} bad file descriptor`);
        }
        fs__1.closeSync(fd);
    }
    fstat(options: FStatOptions): void {
        const errMsg = 'fstat:fail';
        let inFd = options.fd, success = options.success, fail = options.fail, complete = options.complete;
        let fd: number = -1;
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        const res = checkFd('fstat', inFd);
        if (!res.isValid) {
            cb.fail((res as CheckFdErr).err);
            return;
        }
        else {
            fd = res.fd;
        }
        fs__1.stat(fd, (err, stat) => {
            if (err) {
                cb.fail(getApiError(err.code, errMsg));
            }
            else {
                const combinationMode = getFileTypeMode(stat) | stat.mode;
                cb.success({
                    stats: new StatsImpl(stat, combinationMode)
                } as FStatSuccessResult);
            }
        });
    }
    fstatSync(options: FStatSyncOptions): Stats {
        const errMsg = 'fstatSync:fail';
        let fd: number = -1;
        const res = checkFd('fstatSync', options.fd);
        if (!res.isValid) {
            throw new Error((res as CheckFdErr).err?.errMsg);
        }
        else {
            fd = res.fd;
        }
        try {
            const stat = fs__1.statSync(fd);
            const combinationMode = getFileTypeMode(stat) | stat.mode;
            return new StatsImpl(stat, combinationMode);
        }
        catch (err) {
            throw new Error(getApiError((err as BusinessError__1).code, errMsg).errMsg);
        }
    }
    ftruncate(options: FTruncateFileOptions): void {
        const errMsg = 'ftruncate:fail';
        let inFd = options.fd, length = options.length, success = options.success, fail = options.fail, complete = options.complete;
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        let fd: number = -1;
        const res = checkFd('ftruncate', inFd);
        if (!res.isValid) {
            cb.fail((res as CheckFdErr).err);
            return;
        }
        else {
            fd = res.fd;
        }
        if (!checkDataType(length, true, 'number') || length < 0) {
            length = DEFAULT_LENGTH;
        }
        fs__1.truncate(fd, length).then(() => {
            cb.success({
                errMsg: 'ftruncate:ok'
            } as FileManagerSuccessResult);
        }).catch((err: BusinessError__1) => {
            cb.fail(getApiError((err as BusinessError__1).code, errMsg));
        });
    }
    ftruncateSync(options: FTruncateFileSyncOptions): void {
        const errMsg = 'ftruncateSync:fail';
        let inFd = options.fd, length = options.length;
        const res = checkFd('ftruncateSync', inFd);
        let fd: number = -1;
        if (!res.isValid) {
            throw new Error((res as CheckFdErr).err?.errMsg);
        }
        else {
            fd = res.fd;
        }
        if (!checkDataType(length, true, 'number') || length < 0) {
            length = DEFAULT_LENGTH;
        }
        try {
            fs__1.truncateSync(fd, length);
        }
        catch (err) {
            throw new Error(getApiError((err as BusinessError__1).code, errMsg).errMsg);
        }
    }
    unzip(options: UnzipFileOptions): void {
        const errMsg = 'unzip:fail';
        let zipFilePath = options.zipFilePath, targetPath = options.targetPath, success = options.success, fail = options.fail, complete = options.complete;
        zipFilePath = useGetRealPath(zipFilePath);
        targetPath = useGetRealPath(targetPath);
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        if (!checkDataType(zipFilePath, true, 'string')) {
            cb.fail(getParameterError(`${errMsg} zipFilePath`));
            return;
        }
        if (!checkDataType(targetPath, true, 'string')) {
            cb.fail(getParameterError(`${errMsg} targetPath`));
            return;
        }
        const res = fs__1.accessSync(zipFilePath);
        if (!res) {
            cb.fail(getNoSuchFileOrDirectoryError(errMsg));
            return;
        }
        const targetStat = fs__1.statSync(targetPath);
        if (!targetStat.isDirectory()) {
            cb.fail(getApiError(1300016, errMsg));
            return;
        }
        zlib.decompressFile(zipFilePath, targetPath).then(() => {
            cb.success({
                errMsg: 'unzip:ok'
            } as FileManagerSuccessResult);
        }).catch((err: BusinessError__1) => {
            cb.fail(getApiError((err as BusinessError__1).code, errMsg));
        });
    }
    readZipEntry(options: ReadZipEntryOptions): void {
        const errMsg = 'readZipEntry:fail';
        const okMsg = 'readZipEntry:ok';
        let filePath = options.filePath, encoding = options.encoding, entries = options.entries, success = options.success, fail = options.fail, complete = options.complete;
        filePath = useGetRealPath(filePath);
        const cb = new FileCallback({
            success,
            fail,
            complete
        } as CallBack);
        let isAll = false;
        let encodeArrayBuffer = false;
        if (!checkDataType(filePath, true, 'string')) {
            cb.fail(getParameterError(`${errMsg} filePath`));
            return;
        }
        if (entries != null) {
            if (!Array.isArray(entries)) {
                cb.fail(getParameterError(`${errMsg} entries`));
                return;
            }
            else {
                if (entries.length === 0) {
                    cb.fail(getParameterError(`${errMsg} entries`));
                    return;
                }
            }
        }
        else {
            isAll = true;
            if (encoding == null) {
                encodeArrayBuffer = true;
            }
            else if (isString(encoding)) {
                if ((encoding as string) === 'utf8') {
                    encoding = 'utf-8';
                }
            }
        }
        if (isString(encoding) && !ENCODING_SUPPORT.includes(encoding as string)) {
            cb.fail(getParameterError(`${errMsg} encoding`));
            return;
        }
        const res = fs__1.accessSync(filePath);
        if (!res) {
            cb.fail(getNoSuchFileOrDirectoryError(errMsg));
            return;
        }
        const targetPath = `${getEnv__1().TEMP_PATH}/unzip/${Date.now().toString()}`;
        fs__1.mkdir(targetPath, true).then(() => {
            this.unzip({
                zipFilePath: filePath,
                targetPath,
                success: () => {
                    const entriesResult: Map<string, ZipFileItem> = new Map();
                    const readFileSync = (file: string, fullPath: string, encoding: string | null = null) => {
                        const data = this.readFileSync(fullPath) as ArrayBuffer;
                        if (encodeArrayBuffer) {
                            entriesResult.set(file, {
                                data,
                                errMsg: okMsg
                            } as ZipFileItem);
                        }
                        else {
                            entriesResult.set(file, {
                                data: buffer.from(data).toString(encoding as string),
                                errMsg: okMsg
                            } as ZipFileItem);
                        }
                    };
                    try {
                        if (isAll) {
                            const files = fs__1.listFileSync(targetPath);
                            for (const file of files) {
                                const fullPath = `${targetPath}/${file}`;
                                if (fs__1.statSync(fullPath).isFile()) {
                                    readFileSync(file, fullPath, encoding as string);
                                }
                            }
                        }
                        else {
                            for (const entry of entries!) {
                                const entryPath = entry.path;
                                const fullPath = `${targetPath}/${entryPath}`;
                                if (!fs__1.accessSync(fullPath) || !fs__1.statSync(fullPath).isFile()) {
                                    continue;
                                }
                                readFileSync(entryPath, fullPath, entry.encoding as string);
                            }
                        }
                        cb.success({
                            entries: entriesResult,
                            result: entriesResult,
                            errMsg: okMsg
                        } as EntriesResult);
                    }
                    catch (err) {
                        cb.fail({
                            errMsg: `${errMsg} ${(err as Error).message}`
                        } as FileManagerSuccessResult);
                    }
                },
                fail: cb.fail,
                complete: null
            } as UnzipFileOptions);
        }).catch((err: BusinessError__1) => {
            cb.fail(getApiError((err as BusinessError__1).code, errMsg));
        });
    }
    readCompressedFile(options: ReadCompressedFileOptions): void {
        throw new Error('Method not implemented.');
    }
    readCompressedFileSync(filePath: string, compressionAlgorithm: string): string {
        throw new Error('Method not implemented.');
    }
}
const getFileSystemManager = defineSyncApi<FileSystemManager>(GET_FILE_SYSTEM_MANAGER, (): FileSystemManagerImpl => {
    return new FileSystemManagerImpl();
});
export { AccessOptions as AccessOptions, AppendFileOptions as AppendFileOptions, CloseOptions as CloseOptions, CloseSyncOptions as CloseSyncOptions, CopyFileOptions as CopyFileOptions, EntriesResult as EntriesResult, EntryItem as EntryItem, FStatOptions as FStatOptions, FStatSuccessResult as FStatSuccessResult, FStatSyncOptions as FStatSyncOptions, FTruncateFileOptions as FTruncateFileOptions, FTruncateFileSyncOptions as FTruncateFileSyncOptions, FileManagerSuccessResult as FileManagerSuccessResult, FileStats as FileStats, GetFileInfoOptions as GetFileInfoOptions, GetFileInfoSuccessResult as GetFileInfoSuccessResult, GetSavedFileListOptions as GetSavedFileListOptions, GetSavedFileListResult as GetSavedFileListResult, MkDirOptions as MkDirOptions, OpenFileOptions as OpenFileOptions, OpenFileSuccessResult as OpenFileSuccessResult, OpenFileSyncOptions as OpenFileSyncOptions, ReadCompressedFileOptions as ReadCompressedFileOptions, ReadCompressedFileResult as ReadCompressedFileResult, ReadDirOptions as ReadDirOptions, ReadDirSuccessResult as ReadDirSuccessResult, ReadFileOptions as ReadFileOptions, ReadFileSuccessResult as ReadFileSuccessResult, ReadOption as ReadOption, ReadResult as ReadResult, ReadSuccessCallbackResult as ReadSuccessCallbackResult, ReadSyncOption as ReadSyncOption, ReadZipEntryOptions as ReadZipEntryOptions, RemoveSavedFileOptions as RemoveSavedFileOptions, RenameOptions as RenameOptions, RmDirOptions as RmDirOptions, SaveFileOptions as SaveFileOptions, SaveFileSuccessResult as SaveFileSuccessResult, StatOptions as StatOptions, StatSuccessResult as StatSuccessResult, TruncateFileOptions as TruncateFileOptions, UnLinkOptions as UnLinkOptions, UnzipFileOptions as UnzipFileOptions, WriteFileOptions as WriteFileOptions, WriteOptions as WriteOptions, WriteResult as WriteResult, WriteSyncOptions as WriteSyncOptions, ZipFileItem as ZipFileItem };
export type { FStatSuccessCallback as FStatSuccessCallback, FileManagerCompleteCallback as FileManagerCompleteCallback, FileManagerFailCallback as FileManagerFailCallback, FileManagerSuccessCallback as FileManagerSuccessCallback, FileSystemManager as FileSystemManager, FileSystemManagerErrorCode as FileSystemManagerErrorCode, FileSystemManagerFail as FileSystemManagerFail, GetFileInfoSuccessCallback as GetFileInfoSuccessCallback, GetFileSystemManager as GetFileSystemManager, GetSavedFileListCallback as GetSavedFileListCallback, IFileSystemManagerFail as IFileSystemManagerFail, MkDirSuccessCallback as MkDirSuccessCallback, OpenFileSuccessCallback as OpenFileSuccessCallback, ReadCompressedFileCallback as ReadCompressedFileCallback, ReadDirSuccessCallback as ReadDirSuccessCallback, ReadFileSuccessCallback as ReadFileSuccessCallback, ReadSuccessCallback as ReadSuccessCallback, ReadZipEntryCallback as ReadZipEntryCallback, SaveFileSuccessCallback as SaveFileSuccessCallback, StatSuccessCallback as StatSuccessCallback, Stats as Stats, UnLinkSuccessCallback as UnLinkSuccessCallback, WriteCallback as WriteCallback };
export { getFileSystemManager as getFileSystemManager };
