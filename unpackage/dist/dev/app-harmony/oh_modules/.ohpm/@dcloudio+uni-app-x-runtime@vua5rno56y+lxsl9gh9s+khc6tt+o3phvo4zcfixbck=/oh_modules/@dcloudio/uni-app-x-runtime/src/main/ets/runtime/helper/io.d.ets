import buffer from '@ohos.buffer';
interface Env {
    USER_DATA_PATH: string;
    TEMP_PATH: string;
    CACHE_PATH: string;
    SANDBOX_PATH: string;
    STATIC_PATH: string;
}
export declare const RAW_PATH = "resource://rawfile";
export declare function getEnv(): Env;
export declare function getFilesDir(): string;
export declare function getResourceDir(): string;
export declare function getPrivateDir(appID?: string): string;
export declare function getResourceStr(filepath: string, forceStr?: boolean, appID?: string): string | ResourceStr;
export declare function addLeadingSlash(str: string): string;
export declare function getRealRoute(fromRoute: string, toRoute: string): string;
export declare function getFileURL(url: string, appID?: string): string;
/**
 * 小文件读取，一次读出所有内容
 * @param filePath
 * @returns
 */
export declare function readBufferSync(filePath: string): buffer.Buffer;
export declare function readTextSync(filePath: string): string;
export declare function formatFontFaceSrc(value?: string | null): string;
export {};
