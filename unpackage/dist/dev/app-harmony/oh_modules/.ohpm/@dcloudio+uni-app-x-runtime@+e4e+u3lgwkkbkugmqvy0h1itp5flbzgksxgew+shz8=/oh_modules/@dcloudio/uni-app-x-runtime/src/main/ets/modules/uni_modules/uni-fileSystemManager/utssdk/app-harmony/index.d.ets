import { UTSObject, string, IUniError } from "@dcloudio/uni-app-framework";
declare class ReadFileSuccessResult extends UTSObject {
    data: string | ArrayBuffer;
}
declare class OpenFileSuccessResult extends UTSObject {
    fd: string;
    errMsg: string;
}
declare class FileManagerSuccessResult extends UTSObject {
    errMsg: string;
}
type FileManagerSuccessCallback = (res: FileManagerSuccessResult) => void;
type FileManagerFailCallback = (res: FileSystemManagerFail) => void;
type FileManagerCompleteCallback = (res: Object) => void;
type ReadFileSuccessCallback = (res: ReadFileSuccessResult) => void;
declare class ReadFileOptions extends UTSObject {
    encoding: "ascii" | "base64" | "utf-8" | null;
    filePath: string.URIString;
    success: ReadFileSuccessCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
declare class WriteFileOptions extends UTSObject {
    filePath: string.URIString;
    encoding: "ascii" | "base64" | "utf-8" | null;
    data: string | ArrayBuffer;
    success: FileManagerSuccessCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
declare class AppendFileOptions extends UTSObject {
    filePath: string.URIString;
    encoding: "ascii" | "base64" | "utf-8" | null;
    data: string | ArrayBuffer;
    success: FileManagerSuccessCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
type OpenFileSuccessCallback = (res: OpenFileSuccessResult) => void;
declare class OpenFileOptions extends UTSObject {
    filePath: string.URIString;
    flag: "a" | "ax" | "a+" | "ax+" | "r" | "r+" | "w" | "wx" | "w+" | "wx+";
    success: OpenFileSuccessCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
declare class OpenFileSyncOptions extends UTSObject {
    filePath: string.URIString;
    flag: "a" | "ax" | "a+" | "ax+" | "r" | "r+" | "w" | "wx" | "w+" | "wx+";
}
type UnLinkSuccessCallback = (res: FileManagerSuccessResult) => void;
declare class UnLinkOptions extends UTSObject {
    filePath: string.URIString;
    success: UnLinkSuccessCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
type MkDirSuccessCallback = (res: FileManagerSuccessResult) => void;
declare class MkDirOptions extends UTSObject {
    dirPath: string.URIString;
    recursive: boolean;
    success: MkDirSuccessCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
declare class RmDirOptions extends UTSObject {
    dirPath: string.URIString;
    recursive: boolean;
    success: MkDirSuccessCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
declare class ReadDirSuccessResult extends UTSObject {
    files: string[];
    errMsg: string;
}
type ReadDirSuccessCallback = (res: ReadDirSuccessResult) => void;
declare class ReadDirOptions extends UTSObject {
    dirPath: string.URIString;
    success: ReadDirSuccessCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
declare class AccessOptions extends UTSObject {
    path: string.URIString;
    success: FileManagerSuccessCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
declare class RenameOptions extends UTSObject {
    oldPath: string.URIString;
    newPath: string.URIString;
    success: FileManagerSuccessCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
declare class CopyFileOptions extends UTSObject {
    srcPath: string.URIString;
    destPath: string.URIString;
    success: FileManagerSuccessCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
declare class SaveFileOptions extends UTSObject {
    tempFilePath: string.URIString;
    filePath: string.URIString | null;
    success: SaveFileSuccessCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
type SaveFileSuccessCallback = (res: SaveFileSuccessResult) => void;
declare class SaveFileSuccessResult extends UTSObject {
    savedFilePath: string;
}
declare class GetFileInfoSuccessResult extends UTSObject {
    digest: string;
    size: number;
    errMsg: string;
}
type GetFileInfoSuccessCallback = (res: GetFileInfoSuccessResult) => void;
declare class GetFileInfoOptions extends UTSObject {
    filePath: string.URIString;
    digestAlgorithm: "md5" | "sha1" | null;
    success: GetFileInfoSuccessCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
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
declare class FileStats extends UTSObject {
    path: string;
    stats: Stats;
}
declare class StatSuccessResult extends UTSObject {
    errMsg: string;
    stats: FileStats[];
}
type StatSuccessCallback = (res: StatSuccessResult) => void;
declare class StatOptions extends UTSObject {
    path: string.URIString;
    recursive: boolean;
    success: StatSuccessCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
declare class UnzipFileOptions extends UTSObject {
    zipFilePath: string;
    targetPath: string;
    success: FileManagerSuccessCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
declare class GetSavedFileListResult extends UTSObject {
    fileList: string[];
}
type GetSavedFileListCallback = (res: GetSavedFileListResult) => void;
declare class GetSavedFileListOptions extends UTSObject {
    success: GetSavedFileListCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
declare class TruncateFileOptions extends UTSObject {
    filePath: string.URIString;
    length: number;
    success: FileManagerSuccessCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
declare class ReadCompressedFileResult extends UTSObject {
    data: string;
}
type ReadCompressedFileCallback = (res: ReadCompressedFileResult) => void;
declare class ReadCompressedFileOptions extends UTSObject {
    filePath: string.URIString;
    compressionAlgorithm: "br";
    success: ReadCompressedFileCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
declare class RemoveSavedFileOptions extends UTSObject {
    filePath: string.URIString;
    success: FileManagerSuccessCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
declare class WriteResult extends UTSObject {
    bytesWritten: number;
    errMsg: string;
}
type WriteCallback = (res: WriteResult) => void;
declare class WriteOptions extends UTSObject {
    fd: string;
    data: string | ArrayBuffer;
    offset: number | null;
    length: number | null;
    position: number | null;
    encoding: "ascii" | "base64" | "utf-8" | null;
    success: WriteCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
declare class WriteSyncOptions extends UTSObject {
    fd: string;
    data: string | ArrayBuffer;
    encoding: "ascii" | "base64" | "utf-8" | null;
    length: number | null;
    offset: number | null;
    position: number | null;
}
declare class CloseOptions extends UTSObject {
    fd: string;
    success: FileManagerSuccessCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
declare class CloseSyncOptions extends UTSObject {
    fd: string;
}
declare class FStatSuccessResult extends UTSObject {
    stats: Stats;
}
type FStatSuccessCallback = (res: FStatSuccessResult) => void;
declare class FStatOptions extends UTSObject {
    fd: string;
    success: FStatSuccessCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
declare class FStatSyncOptions extends UTSObject {
    fd: string;
}
declare class FTruncateFileOptions extends UTSObject {
    fd: string;
    length: number;
    success: FileManagerSuccessCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
declare class FTruncateFileSyncOptions extends UTSObject {
    fd: string;
    length: number;
}
declare class EntryItem extends UTSObject {
    path: string;
    encoding: "ascii" | "base64" | "utf-8" | null;
}
declare class EntriesResult extends UTSObject {
    entries: Map<string, ZipFileItem>;
    result: Map<string, ZipFileItem>;
    errMsg: string;
}
declare class ZipFileItem extends UTSObject {
    data: string | ArrayBuffer | null;
    errMsg: string;
}
type ReadZipEntryCallback = (res: EntriesResult) => void;
declare class ReadZipEntryOptions extends UTSObject {
    filePath: string.URIString;
    encoding: "ascii" | "base64" | "utf-8" | null;
    entries: EntryItem[] | null;
    success: ReadZipEntryCallback | null;
    fail: FileManagerFailCallback | null;
    complete: FileManagerCompleteCallback | null;
}
declare class ReadSuccessCallbackResult extends UTSObject {
    arrayBuffer: ArrayBuffer;
    bytesRead: number;
    errMsg: string;
}
type ReadSuccessCallback = (result: ReadSuccessCallbackResult) => void;
declare class ReadOption extends UTSObject {
    arrayBuffer: ArrayBuffer;
    fd: string;
    length: number | null;
    offset: number | null;
    position: number | null;
    complete: FileManagerCompleteCallback | null;
    fail: FileManagerFailCallback | null;
    success: ReadSuccessCallback | null;
}
declare class ReadSyncOption extends UTSObject {
    arrayBuffer: ArrayBuffer;
    fd: string;
    length: number | null;
    offset: number | null;
    position: number | null;
}
declare class ReadResult extends UTSObject {
    arrayBuffer: ArrayBuffer;
    bytesRead: number;
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
declare const getFileSystemManager: (...args: Object[]) => FileSystemManager;
export { AccessOptions as AccessOptions, AppendFileOptions as AppendFileOptions, CloseOptions as CloseOptions, CloseSyncOptions as CloseSyncOptions, CopyFileOptions as CopyFileOptions, EntriesResult as EntriesResult, EntryItem as EntryItem, FStatOptions as FStatOptions, FStatSuccessCallback as FStatSuccessCallback, FStatSuccessResult as FStatSuccessResult, FStatSyncOptions as FStatSyncOptions, FTruncateFileOptions as FTruncateFileOptions, FTruncateFileSyncOptions as FTruncateFileSyncOptions, FileManagerCompleteCallback as FileManagerCompleteCallback, FileManagerFailCallback as FileManagerFailCallback, FileManagerSuccessCallback as FileManagerSuccessCallback, FileManagerSuccessResult as FileManagerSuccessResult, FileStats as FileStats, FileSystemManager as FileSystemManager, FileSystemManagerErrorCode as FileSystemManagerErrorCode, FileSystemManagerFail as FileSystemManagerFail, GetFileInfoOptions as GetFileInfoOptions, GetFileInfoSuccessCallback as GetFileInfoSuccessCallback, GetFileInfoSuccessResult as GetFileInfoSuccessResult, GetFileSystemManager as GetFileSystemManager, GetSavedFileListCallback as GetSavedFileListCallback, GetSavedFileListOptions as GetSavedFileListOptions, GetSavedFileListResult as GetSavedFileListResult, IFileSystemManagerFail as IFileSystemManagerFail, MkDirOptions as MkDirOptions, MkDirSuccessCallback as MkDirSuccessCallback, OpenFileOptions as OpenFileOptions, OpenFileSuccessCallback as OpenFileSuccessCallback, OpenFileSuccessResult as OpenFileSuccessResult, OpenFileSyncOptions as OpenFileSyncOptions, ReadCompressedFileCallback as ReadCompressedFileCallback, ReadCompressedFileOptions as ReadCompressedFileOptions, ReadCompressedFileResult as ReadCompressedFileResult, ReadDirOptions as ReadDirOptions, ReadDirSuccessCallback as ReadDirSuccessCallback, ReadDirSuccessResult as ReadDirSuccessResult, ReadFileOptions as ReadFileOptions, ReadFileSuccessCallback as ReadFileSuccessCallback, ReadFileSuccessResult as ReadFileSuccessResult, ReadOption as ReadOption, ReadResult as ReadResult, ReadSuccessCallback as ReadSuccessCallback, ReadSuccessCallbackResult as ReadSuccessCallbackResult, ReadSyncOption as ReadSyncOption, ReadZipEntryCallback as ReadZipEntryCallback, ReadZipEntryOptions as ReadZipEntryOptions, RemoveSavedFileOptions as RemoveSavedFileOptions, RenameOptions as RenameOptions, RmDirOptions as RmDirOptions, SaveFileOptions as SaveFileOptions, SaveFileSuccessCallback as SaveFileSuccessCallback, SaveFileSuccessResult as SaveFileSuccessResult, StatOptions as StatOptions, StatSuccessCallback as StatSuccessCallback, StatSuccessResult as StatSuccessResult, Stats as Stats, TruncateFileOptions as TruncateFileOptions, UnLinkOptions as UnLinkOptions, UnLinkSuccessCallback as UnLinkSuccessCallback, UnzipFileOptions as UnzipFileOptions, WriteCallback as WriteCallback, WriteFileOptions as WriteFileOptions, WriteOptions as WriteOptions, WriteResult as WriteResult, WriteSyncOptions as WriteSyncOptions, ZipFileItem as ZipFileItem };
export { getFileSystemManager as getFileSystemManager };
