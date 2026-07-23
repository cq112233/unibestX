import { UTSJSONObject, UTSObject, IUniError } from "@dcloudio/uni-app-framework";
type Request<T> = (param: RequestOptions<T>) => RequestTask;
declare class RequestOptions<T> extends UTSObject {
    url: string;
    data: Object | null;
    header: UTSJSONObject | null;
    method: RequestMethod | null;
    timeout: number | null;
    enableQuic: boolean | null;
    dataType: string | null;
    responseType: string | null;
    sslVerify: boolean | null;
    withCredentials: boolean | null;
    firstIpv4: boolean | null;
    enableChunked: boolean | null;
    success: RequestSuccessCallback<T> | null;
    fail: RequestFailCallback | null;
    complete: RequestCompleteCallback | null;
}
declare class RequestSuccess<T> extends UTSObject {
    data: T | null;
    statusCode: number;
    header: Object;
    cookies: Array<string>;
}
type RequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";
type RequestErrorCode = 5 | 1000 | 100001 | 100002 | 100003 | 600003 | 600008 | 600009 | 602001;
interface RequestFail extends IUniError {
    errCode: RequestErrorCode;
}
type RequestSuccessCallback<T> = (option: RequestSuccess<T>) => void;
type RequestFailCallback = (option: RequestFail) => void;
type RequestCompleteCallback = (option: Object) => void;
declare class RequestTaskOnChunkReceivedListenerResult extends UTSObject {
    data: ArrayBuffer;
}
type RequestTaskOnChunkReceivedCallback = (result: RequestTaskOnChunkReceivedListenerResult) => void;
declare class RequestTaskOnHeadersReceivedListenerResult extends UTSObject {
    cookies: string[];
    header: UTSJSONObject;
    statusCode: number;
}
type RequestTaskOnHeadersReceivedCallback = (result: RequestTaskOnHeadersReceivedListenerResult) => void;
interface RequestTask {
    abort(): void;
    onChunkReceived(listener: RequestTaskOnChunkReceivedCallback): number;
    offChunkReceived(listener?: number | RequestTaskOnChunkReceivedCallback | null): void;
    onHeadersReceived(listener: RequestTaskOnHeadersReceivedCallback): number;
    offHeadersReceived(listener?: number | RequestTaskOnHeadersReceivedCallback | null): void;
}
type UploadFile = (options: UploadFileOptions) => UploadTask;
declare class UploadFileOptionFiles extends UTSObject {
    name: string | null;
    uri: string;
    file: Object | null;
}
declare class UploadFileSuccess extends UTSObject {
    data: string;
    statusCode: number;
}
type UploadFileSuccessCallback = (result: UploadFileSuccess) => void;
interface UploadFileFail extends IUniError {
    errCode: RequestErrorCode;
}
type UploadFileFailCallback = (result: UploadFileFail) => void;
type UploadFileCompleteCallback = (result: Object) => void;
declare class UploadFileOptions extends UTSObject {
    url: string;
    filePath: string | null;
    name: string | null;
    files: (UploadFileOptionFiles[]) | null;
    header: UTSJSONObject | null;
    formData: UTSJSONObject | null;
    timeout: number | null;
    success: UploadFileSuccessCallback | null;
    fail: UploadFileFailCallback | null;
    complete: UploadFileCompleteCallback | null;
}
declare class OnProgressUpdateResult extends UTSObject {
    progress: number;
    totalBytesSent: number;
    totalBytesExpectedToSend: number;
}
type UploadFileProgressUpdateCallback = (result: OnProgressUpdateResult) => void;
interface UploadTask {
    abort(): void;
    onProgressUpdate(callback: UploadFileProgressUpdateCallback): void;
}
type DownloadFile = (options: DownloadFileOptions) => DownloadTask;
declare class DownloadFileSuccess extends UTSObject {
    tempFilePath: string;
    statusCode: number;
}
type DownloadFileSuccessCallback = (result: DownloadFileSuccess) => void;
interface DownloadFileFail extends IUniError {
    errCode: RequestErrorCode;
}
type DownloadFileFailCallback = (result: DownloadFileFail) => void;
type DownloadFileComplete = Object;
type DownloadFileCompleteCallback = (result: DownloadFileComplete) => void;
declare class DownloadFileOptions extends UTSObject {
    url: string;
    header: UTSJSONObject | null;
    filePath: string | null;
    timeout: number | null;
    success: DownloadFileSuccessCallback | null;
    fail: DownloadFileFailCallback | null;
    complete: DownloadFileCompleteCallback | null;
}
declare class OnProgressDownloadResult extends UTSObject {
    progress: number;
    totalBytesWritten: number;
    totalBytesExpectedToWrite: number;
}
type DownloadFileProgressUpdateCallback = (result: OnProgressDownloadResult) => void;
interface DownloadTask {
    abort(): void;
    onProgressUpdate(callback: DownloadFileProgressUpdateCallback): void;
}
type ConfigMTLS = (options: ConfigMTLSOptions) => void;
declare class Certificate extends UTSObject {
    host: string;
    client: string | null;
    clientPassword: string | null;
    keyPath: string | null;
    server: (string[]) | null;
}
declare class ConfigMTLSSuccess extends UTSObject {
    code: number;
}
type ConfigMTLSSuccessCallback = (result: ConfigMTLSSuccess) => void;
declare class ConfigMTLSFail extends UTSObject {
    code: number;
}
type ConfigMTLSFailCallback = (result: ConfigMTLSFail) => void;
type ConfigMTLSComplete = Object;
type ConfigMTLSCompleteCallback = (result: ConfigMTLSComplete) => void;
declare class ConfigMTLSOptions extends UTSObject {
    certificates: Certificate[];
    success: ConfigMTLSSuccessCallback | null;
    fail: ConfigMTLSFailCallback | null;
    complete: ConfigMTLSCompleteCallback | null;
}
declare const request: Request<Object>;
declare const uploadFile: UploadFile;
declare const downloadFile: DownloadFile;
declare const configMTLS: ConfigMTLS;
export { RequestTask as RequestTask, RequestOptions as RequestOptions, RequestSuccess as RequestSuccess, RequestFail as RequestFail, Request as Request, UploadTask as UploadTask, UploadFileOptions as UploadFileOptions, UploadFileSuccess as UploadFileSuccess, OnProgressUpdateResult as OnProgressUpdateResult, UploadFile as UploadFile, DownloadTask as DownloadTask, DownloadFileOptions as DownloadFileOptions, DownloadFileSuccess as DownloadFileSuccess, OnProgressDownloadResult as OnProgressDownloadResult, DownloadFile as DownloadFile, ConfigMTLSOptions as ConfigMTLSOptions, ConfigMTLSSuccess as ConfigMTLSSuccess, ConfigMTLS as ConfigMTLS, UploadFileCompleteCallback as UploadFileCompleteCallback, UploadFileFail as UploadFileFail, UploadFileFailCallback as UploadFileFailCallback, UploadFileOptionFiles as UploadFileOptionFiles, UploadFileProgressUpdateCallback as UploadFileProgressUpdateCallback, UploadFileSuccessCallback as UploadFileSuccessCallback, DownloadFileProgressUpdateCallback as DownloadFileProgressUpdateCallback, DownloadFileComplete as DownloadFileComplete, DownloadFileCompleteCallback as DownloadFileCompleteCallback, DownloadFileFail as DownloadFileFail, DownloadFileFailCallback as DownloadFileFailCallback, DownloadFileSuccessCallback as DownloadFileSuccessCallback, RequestCompleteCallback as RequestCompleteCallback, RequestErrorCode as RequestErrorCode, RequestFailCallback as RequestFailCallback, RequestMethod as RequestMethod, RequestSuccessCallback as RequestSuccessCallback, ConfigMTLSComplete as ConfigMTLSComplete, ConfigMTLSCompleteCallback as ConfigMTLSCompleteCallback, ConfigMTLSFail as ConfigMTLSFail, ConfigMTLSFailCallback as ConfigMTLSFailCallback, ConfigMTLSSuccessCallback as ConfigMTLSSuccessCallback, Certificate as Certificate, RequestTaskOnChunkReceivedCallback as RequestTaskOnChunkReceivedCallback, RequestTaskOnChunkReceivedListenerResult as RequestTaskOnChunkReceivedListenerResult, RequestTaskOnHeadersReceivedCallback as RequestTaskOnHeadersReceivedCallback, RequestTaskOnHeadersReceivedListenerResult as RequestTaskOnHeadersReceivedListenerResult };
export { request as request, uploadFile as uploadFile, downloadFile as downloadFile, configMTLS as configMTLS };
