import buffer from '@ohos.buffer';
import fs from '@ohos.file.fs';
import webview from '@ohos.web.webview';
import { BusinessError as BusinessError__1 } from '@ohos.base';
import { BusinessError as BusinessError__2 } from '@ohos.base';
import { BusinessError } from '@ohos.base';
import { Emitter as Emitter__1, getCurrentMP as getCurrentMP__1 } from "@dcloudio/uni-app-framework";
import { Emitter, getCurrentMP } from "@dcloudio/uni-app-framework";
import { UTSJSONObject, UTSObject, IUniError, ProtocolOptions, ApiOptions, UTS, defineTaskApi, ApiExecutor, ApiError, UTSHarmony, ref, defineAsyncApi } from "@dcloudio/uni-app-framework";
import buffer__1 from '@ohos.buffer';
import fs__1 from '@ohos.file.fs';
import { getEnv, Emitter as Emitter__2, getCurrentMP as getCurrentMP__2 } from "@dcloudio/uni-app-framework";
import { getRealPath } from "@dcloudio/uni-app-framework";
import harmonyUrl from '@ohos.url';
import harmonyUrl__1 from '@ohos.url';
import { http } from '@kit.NetworkKit';
import http__1 from '@ohos.net.http';
import http__2 from '@ohos.net.http';
import http__3 from '@ohos.net.http';
type Request<T> = (param: RequestOptions<T>) => RequestTask;
class RequestOptions<T> extends UTSObject {
    url!: string;
    data: Object | null = null;
    header: UTSJSONObject | null = null;
    method: RequestMethod | null = null;
    timeout: number | null = null;
    enableQuic: boolean | null = null;
    dataType: string | null = null;
    responseType: string | null = null;
    sslVerify: boolean | null = null;
    withCredentials: boolean | null = null;
    firstIpv4: boolean | null = null;
    enableChunked: boolean | null = null;
    success: RequestSuccessCallback<T> | null = null;
    fail: RequestFailCallback | null = null;
    complete: RequestCompleteCallback | null = null;
}
class RequestSuccess<T> extends UTSObject {
    data: T | null = null;
    statusCode!: number;
    header!: Object;
    cookies!: Array<string>;
}
type RequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";
type RequestErrorCode = 5 | 1000 | 100001 | 100002 | 100003 | 600003 | 600008 | 600009 | 602001;
interface RequestFail extends IUniError {
    errCode: RequestErrorCode;
}
type RequestSuccessCallback<T> = (option: RequestSuccess<T>) => void;
type RequestFailCallback = (option: RequestFail) => void;
type RequestCompleteCallback = (option: Object) => void;
class RequestTaskOnChunkReceivedListenerResult extends UTSObject {
    data!: ArrayBuffer;
}
type RequestTaskOnChunkReceivedCallback = (result: RequestTaskOnChunkReceivedListenerResult) => void;
class RequestTaskOnHeadersReceivedListenerResult extends UTSObject {
    cookies!: string[];
    header!: UTSJSONObject;
    statusCode!: number;
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
class UploadFileOptionFiles extends UTSObject {
    name: string | null = null;
    uri!: string;
    file: Object | null = null;
}
class UploadFileSuccess extends UTSObject {
    data!: string;
    statusCode!: number;
}
type UploadFileSuccessCallback = (result: UploadFileSuccess) => void;
interface UploadFileFail extends IUniError {
    errCode: RequestErrorCode;
}
type UploadFileFailCallback = (result: UploadFileFail) => void;
type UploadFileCompleteCallback = (result: Object) => void;
class UploadFileOptions extends UTSObject {
    url!: string;
    filePath: string | null = null;
    name: string | null = null;
    files: (UploadFileOptionFiles[]) | null = null;
    header: UTSJSONObject | null = null;
    formData: UTSJSONObject | null = null;
    timeout: number | null = null;
    success: UploadFileSuccessCallback | null = null;
    fail: UploadFileFailCallback | null = null;
    complete: UploadFileCompleteCallback | null = null;
}
class OnProgressUpdateResult extends UTSObject {
    progress!: number;
    totalBytesSent!: number;
    totalBytesExpectedToSend!: number;
}
type UploadFileProgressUpdateCallback = (result: OnProgressUpdateResult) => void;
interface UploadTask {
    abort(): void;
    onProgressUpdate(callback: UploadFileProgressUpdateCallback): void;
}
type DownloadFile = (options: DownloadFileOptions) => DownloadTask;
class DownloadFileSuccess extends UTSObject {
    tempFilePath!: string;
    statusCode!: number;
}
type DownloadFileSuccessCallback = (result: DownloadFileSuccess) => void;
interface DownloadFileFail extends IUniError {
    errCode: RequestErrorCode;
}
type DownloadFileFailCallback = (result: DownloadFileFail) => void;
type DownloadFileComplete = Object;
type DownloadFileCompleteCallback = (result: DownloadFileComplete) => void;
class DownloadFileOptions extends UTSObject {
    url!: string;
    header: UTSJSONObject | null = null;
    filePath: string | null = null;
    timeout: number | null = null;
    success: DownloadFileSuccessCallback | null = null;
    fail: DownloadFileFailCallback | null = null;
    complete: DownloadFileCompleteCallback | null = null;
}
class OnProgressDownloadResult extends UTSObject {
    progress!: number;
    totalBytesWritten!: number;
    totalBytesExpectedToWrite!: number;
}
type DownloadFileProgressUpdateCallback = (result: OnProgressDownloadResult) => void;
interface DownloadTask {
    abort(): void;
    onProgressUpdate(callback: DownloadFileProgressUpdateCallback): void;
}
type ConfigMTLS = (options: ConfigMTLSOptions) => void;
class Certificate extends UTSObject {
    host!: string;
    client: string | null = null;
    clientPassword: string | null = null;
    keyPath: string | null = null;
    server: (string[]) | null = null;
}
class ConfigMTLSSuccess extends UTSObject {
    code!: number;
}
type ConfigMTLSSuccessCallback = (result: ConfigMTLSSuccess) => void;
class ConfigMTLSFail extends UTSObject {
    code!: number;
}
type ConfigMTLSFailCallback = (result: ConfigMTLSFail) => void;
type ConfigMTLSComplete = Object;
type ConfigMTLSCompleteCallback = (result: ConfigMTLSComplete) => void;
class ConfigMTLSOptions extends UTSObject {
    certificates!: Certificate[];
    success: ConfigMTLSSuccessCallback | null = null;
    fail: ConfigMTLSFailCallback | null = null;
    complete: ConfigMTLSCompleteCallback | null = null;
}
const API_REQUEST = 'request';
const RequestApiProtocol = new Map<string, ProtocolOptions>([
    [
        'url',
        {
            type: 'string',
            required: true
        }
    ],
    [
        'header',
        {
            type: 'object',
            required: false
        }
    ],
    [
        'method',
        {
            type: 'string',
            required: false
        }
    ],
    [
        'dataType',
        {
            type: 'string',
            required: false
        }
    ],
    [
        'responseType',
        {
            type: 'string',
            required: false
        }
    ],
    [
        'timeout',
        {
            type: 'number',
            required: false
        }
    ],
    [
        'sslVerify',
        {
            type: 'boolean',
            required: false
        }
    ],
    [
        'withCredentials',
        {
            type: 'boolean',
            required: false
        }
    ],
    [
        'firstIpv4',
        {
            type: 'boolean',
            required: false
        }
    ],
    [
        'enableQuic',
        {
            type: 'boolean',
            required: false
        }
    ]
]);
const RequestApiOptions: ApiOptions<RequestOptions<Object>> = {
    formatArgs: new Map<string, Function>([
        [
            'url',
            (url: string, params: RequestOptions<Object>)=>{
                if (url == null) {
                    throw new Error('url is required');
                }
            }
        ],
        [
            'method',
            (method: string, params: RequestOptions<Object>)=>{
                params.method = (method || 'GET').toUpperCase() as RequestMethod;
            }
        ],
        [
            'dataType',
            (dataType: string, params: RequestOptions<Object>)=>{
                if (dataType == null) {
                    params.dataType = 'json';
                }
            }
        ],
        [
            'responseType',
            (responseType: string, params: RequestOptions<Object>)=>{
                if (responseType == null) {
                    params.responseType = 'text';
                }
            }
        ],
        [
            'timeout',
            (timeout: number, params: RequestOptions<Object>)=>{
                if (timeout == null) {
                    params.timeout = 60000;
                }
            }
        ],
        [
            'sslVerify',
            (sslVerify: boolean, params: RequestOptions<Object>)=>{
                if (sslVerify == null) {
                    params.sslVerify = true;
                }
            }
        ],
        [
            'withCredentials',
            (withCredentials: boolean, params: RequestOptions<Object>)=>{
                if (withCredentials == null) {
                    params.withCredentials = false;
                }
            }
        ],
        [
            'firstIpv4',
            (firstIpv4: boolean, params: RequestOptions<Object>)=>{
                if (firstIpv4 == null) {
                    params.firstIpv4 = false;
                }
            }
        ],
        [
            'enableQuic',
            (enableQuic: boolean, params: RequestOptions<Object>)=>{
                if (enableQuic == null) {
                    params.enableQuic = false;
                }
            }
        ]
    ])
};
const API_DOWNLOAD_FILE = 'downloadFile';
const DownloadFileApiProtocol = new Map<string, ProtocolOptions>([
    [
        'url',
        {
            type: 'string',
            required: true
        }
    ],
    [
        'header',
        {
            type: 'object',
            required: false
        }
    ],
    [
        'timeout',
        {
            type: 'number',
            required: false
        }
    ]
]);
const DownloadFileApiOptions: ApiOptions<DownloadFileOptions> = {
    formatArgs: new Map<string, Function>([
        [
            'url',
            (url: string, params: DownloadFileOptions)=>{
                if (url == null) {
                    throw new Error('url is required');
                }
            }
        ]
    ])
};
const API_UPLOAD_FILE = 'uploadFile';
const UploadFileApiProtocol = new Map<string, ProtocolOptions>([
    [
        'url',
        {
            type: 'string',
            required: true
        }
    ],
    [
        'filePath',
        {
            type: 'string',
            required: false
        }
    ],
    [
        'name',
        {
            type: 'string',
            required: false
        }
    ],
    [
        'header',
        {
            type: 'object',
            required: false
        }
    ],
    [
        'formData',
        {
            type: 'object',
            required: false
        }
    ],
    [
        'timeout',
        {
            type: 'number',
            required: false
        }
    ]
]);
const UploadFileApiOptions: ApiOptions<UploadFileOptions> = {
    formatArgs: new Map<string, Function>([
        [
            'url',
            (url: string, params: UploadFileOptions)=>{
                if (url == null) {
                    throw new Error('url is required');
                }
            }
        ],
        [
            'name',
            (name: string, params: UploadFileOptions)=>{
                if (name == null) {
                    params.name = 'file';
                }
            }
        ]
    ])
};
const API_CONFIG_MTLS = 'configMTLS';
const ConfigMTLSApiProtocol = new Map<string, ProtocolOptions>([
    [
        'certificates',
        {
            type: 'array',
            required: true
        }
    ]
]);
const ConfigMTLSApiOptions: ApiOptions<ConfigMTLSOptions> = {
    formatArgs: new Map<string, Function>([
        [
            'certificates',
            (certificates: (Certificate[]) | null = null): string | undefined =>{
                if (!certificates || certificates.some((item): boolean =>typeof item.host !== 'string')) {
                    return '参数 certificates 配置错误，请确认后重试';
                }
                return undefined;
            }
        ]
    ])
};
function needsEncoding(str: string): boolean {
    const decoded = decodeURIComponent(str);
    if (decoded !== str) {
        if (encodeURIComponent(decoded) === str) {
            return false;
        }
    }
    return encodeURIComponent(decoded) !== decoded;
}
function parseUrl(url: string): string {
    try {
        const urlObj = harmonyUrl.URL.parseURL(url);
        urlObj.params.forEach((value, key)=>{
            if (needsEncoding(value)) {
                urlObj.params.set(key, value);
            }
        });
        return urlObj.toString();
    } catch (error) {
        return url;
    }
}
const certificates: Certificate[] = [];
function getCertType(certPath: string): http.CertType {
    const certExt = UTS.arrayPop(certPath.split('.'));
    switch(certExt){
        case 'p12':
            return http.CertType.P12;
        case 'pem':
            return http.CertType.PEM;
        default:
            return http.CertType.PEM;
    }
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
function getClientCertificate(url: string): http.ClientCert | undefined {
    if (certificates.length === 0) return undefined;
    const urlObj = harmonyUrl.URL.parseURL(url);
    const cert = UTS.arrayFind(certificates, (certificate): boolean =>certificate.host === urlObj.host);
    if (cert) {
        return {
            certType: getCertType(cert.client!),
            certPath: getFsPath(cert.client!),
            keyPath: cert.keyPath ?? '',
            keyPassword: cert.clientPassword
        } as http.ClientCert;
    }
    return undefined;
}
function getCookieSync(url: string): string {
    return webview.WebCookieManager.fetchCookieSync(url);
}
function setCookieSync(url: string, cookies: string[]): void {
    cookies.forEach((cookie)=>{
        try {
            webview.WebCookieManager.configCookieSync(url, cookie);
        } catch (error) {}
    });
    webview.WebCookieManager.saveCookieAsync();
}
interface IUniRequestEmitter {
    on: (eventName: string, callback: Function) => void;
    once: (eventName: string, callback: Function) => void;
    off: (eventName: string, callback?: Function | null) => void;
    emit: (eventName: string, ...args: (Object | undefined | null)[]) => void;
}
interface IRequestTask {
    abort: Function;
    onChunkReceived: (listener: RequestTaskOnChunkReceivedCallback) => void;
    offChunkReceived: (listener?: RequestTaskOnChunkReceivedCallback | null) => void;
    onHeadersReceived: (listener: RequestTaskOnHeadersReceivedCallback) => void;
    offHeadersReceived: (listener?: RequestTaskOnHeadersReceivedCallback | null) => void;
}
class RequestTask__1 implements RequestTask {
    __v_skip: boolean = true;
    private _requestTask: IRequestTask;
    private _requestOnChunkReceiveCallbackId: number = 0;
    private _requestOnChunkReceiveCallbacks: Map<number, RequestTaskOnChunkReceivedCallback> = new Map();
    private _requestOnHeadersReceiveCallbackId: number = 0;
    private _requestOnHeadersReceiveCallbacks: Map<number, RequestTaskOnHeadersReceivedCallback> = new Map();
    constructor(requestTask: IRequestTask){
        this._requestTask = requestTask;
    }
    abort() {
        this._requestTask.abort();
    }
    onChunkReceived(callback: RequestTaskOnChunkReceivedCallback): number {
        this._requestTask.onChunkReceived(callback);
        this._requestOnChunkReceiveCallbackId++;
        this._requestOnChunkReceiveCallbacks.set(this._requestOnChunkReceiveCallbackId, callback);
        return this._requestOnChunkReceiveCallbackId;
    }
    offChunkReceived(callbackId: RequestTaskOnChunkReceivedCallback | number | null = null) {
        if (callbackId === undefined || callbackId === null) {
            this._requestTask.offChunkReceived();
            this._requestOnChunkReceiveCallbacks.clear();
            return;
        }
        if (typeof callbackId === 'function') {
            this._requestOnChunkReceiveCallbacks.forEach((callback, id)=>{
                if (callback === callbackId) {
                    this._requestOnChunkReceiveCallbacks.delete(id);
                    this._requestTask.offChunkReceived(callback);
                    return;
                }
            });
            return;
        }
        const callback = UTS.mapGet(this._requestOnChunkReceiveCallbacks, callbackId);
        if (!callback) {
            return;
        }
        this._requestOnChunkReceiveCallbacks.delete(callbackId);
        this._requestTask.offChunkReceived(callback);
    }
    onHeadersReceived(callback: RequestTaskOnHeadersReceivedCallback): number {
        this._requestTask.onHeadersReceived(callback);
        this._requestOnHeadersReceiveCallbackId++;
        this._requestOnHeadersReceiveCallbacks.set(this._requestOnHeadersReceiveCallbackId, callback);
        return this._requestOnHeadersReceiveCallbackId;
    }
    offHeadersReceived(callbackId: RequestTaskOnHeadersReceivedCallback | number | null = null) {
        if (callbackId === undefined || callbackId === null) {
            this._requestTask.offHeadersReceived();
            this._requestOnHeadersReceiveCallbacks.clear();
            return;
        }
        if (typeof callbackId === 'function') {
            this._requestOnHeadersReceiveCallbacks.forEach((callback, id)=>{
                if (callback === callbackId) {
                    this._requestOnHeadersReceiveCallbacks.delete(id);
                    this._requestTask.offHeadersReceived(callback);
                    return;
                }
            });
            return;
        }
        const callback = UTS.mapGet(this._requestOnHeadersReceiveCallbacks, callbackId);
        if (!callback) {
            return;
        }
        this._requestOnHeadersReceiveCallbacks.delete(callbackId);
        this._requestTask.offHeadersReceived(callback);
    }
}
const stringifyQuery = (url: string, data: UTSJSONObject): string =>{
    let newUrl = url;
    let str = url.split('#');
    let hash = '';
    if (str.length > 1) {
        hash = str[1];
    }
    str = str[0].split('?');
    let query = '';
    if (str.length > 1) {
        query = str[1];
    }
    newUrl = str[0];
    const queryObj = new UTSJSONObject({});
    if (query.length > 0) {
        const pairs = query.split('&');
        pairs.forEach((item, _)=>{
            const temp = item.split('=');
            if (temp.length > 1) {
                queryObj[temp[0]] = temp[1];
            }
        });
    }
    const dataKeys = Object.keys(data);
    dataKeys.forEach((key)=>{
        let value: object = data[key];
        let encodeKey = encodeURIComponent(key)!;
        if (value instanceof UTSJSONObject || value instanceof Array) {
            queryObj[encodeKey] = encodeURIComponent(UTS.JSON.stringify(value))!;
        } else {
            queryObj[encodeKey] = encodeURIComponent("" + value)!;
        }
    });
    let queryStr = "";
    const queryKeys = Object.keys(queryObj);
    queryKeys.forEach((key, index)=>{
        if (index > 0) {
            queryStr += "&";
        }
        queryStr += key + "=" + queryObj[key];
    });
    if (queryStr.length > 0) {
        newUrl += "?" + queryStr;
    }
    if (hash.length > 0) {
        newUrl += "#" + hash;
    }
    return newUrl;
};
const request = defineTaskApi<RequestOptions<Object>, RequestSuccess<Object>, RequestTask>(API_REQUEST, (args: RequestOptions<Object>, exec: ApiExecutor<RequestSuccess<Object>>): RequestTask__1 =>{
    let header = args.header, method = args.method, dataType = args.dataType, timeout = args.timeout, url = args.url, responseType = args.responseType, enableQuic = args.enableQuic;
    let data: ESObject = args.data;
    header = header || {} as ESObject;
    if (!header!['Cookie'] && !header!['cookie']) {
        header!['Cookie'] = getCookieSync(url);
    }
    let contentType = '';
    const headers = {} as Record<string, Object>;
    const headerRecord = header as Object as Record<string, string>;
    const headerKeys = Object.keys(headerRecord);
    for(let i = 0; i < headerKeys.length; i++){
        const name = headerKeys[i];
        if (name.toLowerCase() === 'content-type') {
            contentType = headerRecord[name] as string;
        }
        headers[name.toLowerCase()] = headerRecord[name];
    }
    if (!contentType && method === 'POST') {
        headers['Content-Type'] = 'application/json';
        contentType = 'application/json';
    }
    if (method === 'GET' && data && typeof data === 'object') {
        url = stringifyQuery(url, data);
        data = null;
    } else if (method !== 'GET' && contentType && contentType.indexOf('application/json') === 0 && data && typeof data !== 'string') {
        data = UTS.JSON.stringify(data);
    } else if (method !== 'GET' && contentType && contentType.indexOf('application/x-www-form-urlencoded') === 0 && data && typeof data === 'object') {
        const dataRecord = data as Record<string, Object>;
        data = Object.keys(dataRecord).map((key): string =>{
            return (encodeURIComponent(key) + '=' + encodeURIComponent(dataRecord[key] as number | string | boolean));
        }).join('&');
    }
    const httpRequest = http__1.createHttp();
    const mp = getCurrentMP();
    const userAgent = mp.userAgent.fullUserAgent;
    if (userAgent && headers && !headers!['User-Agent'] && !headers!['user-agent']) {
        headers!['User-Agent'] = userAgent;
    }
    const emitter = new Emitter() as IUniRequestEmitter;
    const requestTask: IRequestTask = {
        abort () {
            emitter.off('headersReceive');
            httpRequest.destroy();
            exec.reject('request:fail abort');
        },
        onHeadersReceived (callback: RequestTaskOnHeadersReceivedCallback) {
            emitter.on('headersReceive', callback);
        },
        offHeadersReceived (callback: RequestTaskOnHeadersReceivedCallback | null = null) {
            emitter.off('headersReceive', callback || undefined);
        },
        onChunkReceived (callback: RequestTaskOnChunkReceivedCallback) {
            emitter.on('dataReceive', callback);
        },
        offChunkReceived (callback: RequestTaskOnChunkReceivedCallback | null = null) {
            emitter.off('dataReceive', callback || undefined);
        }
    };
    const realRequestTask = new RequestTask__1(requestTask);
    const destroy = ()=>{
        emitter.off('headersReceive');
        httpRequest.destroy();
    };
    mp.on('beforeClose', destroy);
    let latestHeaders: Object | null = null;
    let lastUrl = url;
    httpRequest.on('headersReceive', (headers: Object)=>{
        latestHeaders = headers;
        const realHeaders = headers as Record<string, string | string[]>;
        const setCookieHeader = realHeaders['set-cookie'] || realHeaders['Set-Cookie'];
        const location = realHeaders['location'] || realHeaders['Location'];
        if (location) {
            lastUrl = location as string;
        }
        if (setCookieHeader) {
            try {
                setCookieSync(lastUrl, setCookieHeader as string[]);
            } catch (error) {
                UTS.console.error('setCookieSync error:', error);
                UTS.console.log('setCookieSync error url:', lastUrl);
                UTS.console.log('setCookieSync error setCookieHeader:', UTS.JSON.stringify(setCookieHeader));
            }
        }
    });
    let headersReceiveTriggered = false;
    const bufs = [] as buffer.Buffer[];
    httpRequest.on('dataReceive', (data)=>{
        if (!headersReceiveTriggered) {
            headersReceiveTriggered = true;
            const headers = new UTSJSONObject({});
            const realHeaders = latestHeaders as Record<string, string | string[]>;
            let cookies = [] as string[];
            if (realHeaders) {
                const keys = Object.keys(realHeaders);
                for(let i = 0; i < keys.length; i++){
                    const key = keys[i];
                    if (key === 'set-cookie' || key === 'Set-Cookie') {
                        const setCookieHeader = realHeaders[key] as string[];
                        for(let i = setCookieHeader.length - 1; i >= 0; i--){
                            const cookie = setCookieHeader[i];
                            if (setCookieHeader.indexOf(cookie) !== i) {
                                setCookieHeader.splice(i, 1);
                            }
                        }
                        cookies = setCookieHeader as string[];
                        headers[key] = Array.isArray(setCookieHeader) ? setCookieHeader.join(',') : setCookieHeader;
                    } else {
                        headers[key] = realHeaders[key];
                    }
                }
            }
            emitter.emit('headersReceive', {
                header: headers,
                statusCode: NaN,
                cookies: cookies
            } as RequestTaskOnHeadersReceivedListenerResult);
        }
        bufs.push(buffer.from(data));
        if (args.enableChunked) {
            emitter.emit('dataReceive', {
                data: data
            } as RequestTaskOnChunkReceivedListenerResult);
        }
    });
    httpRequest.requestInStream(parseUrl(url), {
        header: headers,
        method: (method || 'GET').toUpperCase() as http__1.RequestMethod,
        extraData: data || undefined,
        connectTimeout: timeout ? timeout : undefined,
        readTimeout: timeout ? timeout : undefined,
        clientCert: getClientCertificate(url),
        usingProtocol: enableQuic != null && enableQuic ? http__1.HttpProtocol.HTTP3 : undefined
    } as http__1.HttpRequestOptions, (err: BusinessError, statusCode)=>{
        if (err) {
            const businessError = err as BusinessError;
            const harmonyErrorCode = businessError.code;
            let uniErrorCode = 602001;
            if (harmonyErrorCode === 2300028) {
                uniErrorCode = 5;
            } else if (harmonyErrorCode === 2300006) {
                uniErrorCode = 600009;
            } else if (harmonyErrorCode === 2300007 || harmonyErrorCode === 2300047) {
                uniErrorCode = 1000;
            } else if (harmonyErrorCode === 2300003) {
                uniErrorCode = 600009;
            } else if (harmonyErrorCode === 2300999) {
                uniErrorCode = 600003;
            }
            exec.reject(businessError.message, {
                errCode: uniErrorCode
            } as ApiError);
        } else {
            if (!headersReceiveTriggered && latestHeaders) {
                const headers = new UTSJSONObject({});
                const realHeaders = latestHeaders as Record<string, string | string[]>;
                let cookies = [] as string[];
                if (realHeaders) {
                    const keys = Object.keys(realHeaders);
                    for(let i = 0; i < keys.length; i++){
                        const key = keys[i];
                        if (key === 'set-cookie' || key === 'Set-Cookie') {
                            const setCookieHeader = realHeaders[key] as string[];
                            for(let j = setCookieHeader.length - 1; j >= 0; j--){
                                const cookie = setCookieHeader[j];
                                if (setCookieHeader.indexOf(cookie) !== j) {
                                    setCookieHeader.splice(j, 1);
                                }
                            }
                            cookies = setCookieHeader as string[];
                            headers[key] = Array.isArray(setCookieHeader) ? setCookieHeader.join(',') : setCookieHeader;
                        } else {
                            headers[key] = realHeaders[key];
                        }
                    }
                }
                emitter.emit('headersReceive', {
                    header: headers,
                    statusCode: statusCode,
                    cookies: cookies
                } as RequestTaskOnHeadersReceivedListenerResult);
            }
            const responseData = buffer.concat(bufs);
            let data: ArrayBuffer | string | object = '';
            if (responseType === 'arraybuffer') {
                data = responseData.buffer;
            } else {
                data = responseData.toString('utf8');
                if (data && dataType === 'json') {
                    try {
                        data = globalThis.UTS.JSON.parse(data) || data;
                    } catch (e) {}
                }
            }
            const headers = latestHeaders as Record<string, string | string[]>;
            const oldCookies = headers ? (headers['Set-Cookie'] || headers['set-cookie'] || []) as string[] : [] as string[];
            let newCookies = oldCookies.join(',');
            if (newCookies) {
                if (headers['Set-Cookie']) {
                    headers['Set-Cookie'] = newCookies;
                } else {
                    headers['set-cookie'] = newCookies;
                }
            }
            exec.resolve({
                data,
                statusCode,
                header: latestHeaders!,
                cookies: oldCookies
            } as RequestSuccess<Object>);
        }
        httpRequest.off('headersReceive');
        httpRequest.off('dataReceive');
        realRequestTask.offChunkReceived();
        realRequestTask.offHeadersReceived();
        httpRequest.destroy();
        mp.off('beforeClose', destroy);
    });
    return realRequestTask;
}, RequestApiProtocol, RequestApiOptions) as Request<Object>;
function lookupExt(contentType: string): string | undefined {
    const rawContentType = contentType.split(';')[0].trim().toLowerCase();
    return (UTSHarmony.getExtensionFromMimeType(rawContentType) as string | null) || undefined;
}
function lookupContentTypeWithUri(uri: string): string | undefined {
    const uriArr = uri.split('.');
    if (uriArr.length <= 1) {
        return undefined;
    }
    const ext = UTS.arrayPop(uriArr) as string;
    return (UTSHarmony.getMimeTypeFromExtension(ext) as string | null) || undefined;
}
interface IUniUploadFileEmitter {
    on: (eventName: string, callback: Function) => void;
    once: (eventName: string, callback: Function) => void;
    off: (eventName: string, callback?: Function | null) => void;
    emit: (eventName: string, ...args: (Object | undefined | null)[]) => void;
}
interface IUploadTask {
    abort: Function;
    onHeadersReceived: Function;
    offHeadersReceived: Function;
    onProgressUpdate: Function;
    offProgressUpdate: Function;
}
class UploadTask__1 implements UploadTask {
    __v_skip: boolean = true;
    private _uploadTask: IUploadTask;
    constructor(uploadTask: IUploadTask){
        this._uploadTask = uploadTask;
    }
    abort() {
        this._uploadTask.abort();
    }
    onProgressUpdate(callback: Function) {
        this._uploadTask.onProgressUpdate(callback);
    }
    offProgressUpdate(callback: Function | null = null) {
        this._uploadTask.offProgressUpdate(callback);
    }
    onHeadersReceived(callback: Function) {
        this._uploadTask.onHeadersReceived(callback);
    }
    offHeadersReceived(callback: Function | null = null) {
        this._uploadTask.offHeadersReceived(callback);
    }
}
function readFile(filePath: string): ArrayBuffer {
    const readFilePath = getFsPath(filePath) as string;
    const file = fs.openSync(readFilePath, fs.OpenMode.READ_ONLY);
    const stat = fs.statSync(file.fd);
    const data = new ArrayBuffer(stat.size);
    fs.readSync(file.fd, data);
    fs.closeSync(file.fd);
    return data;
}
const uploadFile = defineTaskApi<UploadFileOptions, UploadFileSuccess, UploadTask>(API_UPLOAD_FILE, (args: UploadFileOptions, exec: ApiExecutor<UploadFileSuccess>): UploadTask__1 =>{
    let url = args.url, timeout = args.timeout, header = args.header, formData = args.formData, files = args.files, filePath = args.filePath, name = args.name;
    header = header || {} as ESObject;
    if (!header!['Cookie'] && !header!['cookie']) {
        header!['Cookie'] = getCookieSync(url);
    }
    const headers = {} as Record<string, Object>;
    if (header) {
        const headerRecord = header as Object as Record<string, string>;
        const headerKeys = Object.keys(headerRecord);
        for(let i = 0; i < headerKeys.length; i++){
            const name = headerKeys[i];
            headers[name.toLowerCase()] = headerRecord[name];
        }
    }
    headers['Content-Type'] = 'multipart/form-data';
    const multiFormDataList = [] as Array<http__2.MultiFormData>;
    if (formData) {
        const formDataRecord = formData as Object as Record<string, Object>;
        const formDataKeys = Object.keys(formDataRecord);
        for(let i = 0; i < formDataKeys.length; i++){
            const name = formDataKeys[i];
            multiFormDataList.push({
                name,
                contentType: 'text/plain',
                data: String(formDataRecord[name])
            } as http__2.MultiFormData);
        }
    }
    try {
        if (files && files.length) {
            for(let i = 0; i < files.length; i++){
                const _files_i = files[i], name = _files_i.name, uri = _files_i.uri;
                multiFormDataList.push({
                    name: name || 'file',
                    contentType: lookupContentTypeWithUri(uri) || 'application/octet-stream',
                    remoteFileName: UTS.arrayPop(uri.split('/')) || 'no-name',
                    data: readFile(uri!)
                } as http__2.MultiFormData);
            }
        } else if (filePath) {
            multiFormDataList.push({
                name: name || 'file',
                contentType: lookupContentTypeWithUri(filePath!) || 'application/octet-stream',
                remoteFileName: UTS.arrayPop(filePath.split('/')) || 'no-name',
                data: readFile(filePath!)
            } as http__2.MultiFormData);
        }
    } catch (error) {
        exec.reject((error as Error).message);
        return new UploadTask__1({
            abort: ()=>{},
            onHeadersReceived: (callback: Function)=>{},
            offHeadersReceived: (callback: Function)=>{},
            onProgressUpdate: (callback: Function)=>{},
            offProgressUpdate: (callback: Function)=>{}
        } as IUploadTask);
    }
    const httpRequest = http__2.createHttp();
    const mp = getCurrentMP__1();
    const userAgent = mp.userAgent.fullUserAgent;
    if (userAgent && !headers['User-Agent'] && !headers['user-agent']) {
        headers['User-Agent'] = userAgent;
    }
    const emitter = new Emitter__1() as IUniUploadFileEmitter;
    const uploadTask: IUploadTask = {
        abort () {
            emitter.off('headersReceive');
            emitter.off('progress');
            httpRequest.destroy();
        },
        onHeadersReceived (callback: Function) {
            emitter.on('headersReceive', callback);
        },
        offHeadersReceived (callback: Function | null = null) {
            emitter.off('headersReceive', callback);
        },
        onProgressUpdate (callback: Function) {
            emitter.on('progress', callback);
        },
        offProgressUpdate (callback: Function | null = null) {
            emitter.off('progress', callback);
        }
    };
    const destroy = ()=>{
        emitter.off('headersReceive');
        emitter.off('progress');
        httpRequest.destroy();
    };
    mp.on('beforeClose', destroy);
    let lastUrl = url;
    httpRequest.on('headersReceive', (headers: Object)=>{
        const realHeaders = headers as Record<string, string | string[]>;
        const setCookieHeader = realHeaders['set-cookie'] || realHeaders['Set-Cookie'];
        if (setCookieHeader) {
            setCookieSync(lastUrl, setCookieHeader as string[]);
        }
        const location = realHeaders['location'] || realHeaders['Location'];
        if (location) {
            lastUrl = location as string;
        }
    });
    httpRequest.on('dataSendProgress', (ref)=>{
        let sendSize = ref.sendSize, totalSize = ref.totalSize;
        emitter.emit('progress', {
            progress: Math.floor((sendSize / totalSize) * 100),
            totalBytesSent: sendSize,
            totalBytesExpectedToSend: totalSize
        } as OnProgressUpdateResult);
    });
    const bufs = [] as buffer__1.Buffer[];
    httpRequest.on('dataReceive', (data)=>{
        bufs.push(buffer__1.from(data));
    });
    httpRequest.requestInStream(parseUrl(url), {
        header: headers,
        method: http__2.RequestMethod.POST,
        connectTimeout: timeout ? timeout : undefined,
        readTimeout: timeout ? timeout : undefined,
        multiFormDataList,
        expectDataType: http__2.HttpDataType.STRING,
        clientCert: getClientCertificate(url)
    } as http__2.HttpRequestOptions, (err, statusCode)=>{
        if (err) {
            exec.reject(err.message);
        } else {
            const responseData = buffer__1.concat(bufs);
            exec.resolve({
                data: responseData.toString('utf8'),
                statusCode
            } as UploadFileSuccess);
        }
        httpRequest.off('headersReceive');
        httpRequest.off('dataReceive');
        uploadTask.offHeadersReceived();
        uploadTask.offProgressUpdate();
        httpRequest.destroy();
        mp.off('beforeClose', destroy);
    });
    return new UploadTask__1(uploadTask);
}, UploadFileApiProtocol, UploadFileApiOptions) as UploadFile;
interface IUniDownloadFileEmitter {
    on: (eventName: string, callback: Function) => void;
    once: (eventName: string, callback: Function) => void;
    off: (eventName: string, callback?: Function | null) => void;
    emit: (eventName: string, ...args: (Object | undefined | null)[]) => void;
}
interface IDownloadTask {
    abort: Function;
    onHeadersReceived: Function;
    offHeadersReceived: Function;
    onProgressUpdate: Function;
    offProgressUpdate: Function;
}
function getContentFileName(contentDisposition: string): string {
    const contentDispositionFileNameMatches = contentDisposition.match(/filename=['"]?(.*?)(['"]|$)/);
    const contentDispositionFileName = contentDispositionFileNameMatches ? contentDispositionFileNameMatches[1] : '';
    return contentDispositionFileName || '';
}
interface GetDownloadFilePathOptions {
    dirName: string;
    fileName: string;
    contentType: string;
    contentDisposition: string;
    url: string;
    downloadPath: string;
}
function fileExists(filePath: string): boolean {
    try {
        fs__1.statSync(filePath);
        return true;
    } catch (error) {
        return false;
    }
}
function getDownloadFilePath(options: GetDownloadFilePathOptions): string {
    const dirName = options.dirName, fileName = options.fileName, contentType = options.contentType, contentDisposition = options.contentDisposition, url = options.url, downloadPath = options.downloadPath;
    if (dirName && fileName) {
        const realFilePath = dirName + '/' + fileName;
        if (fileExists(realFilePath)) {
            fs__1.unlinkSync(realFilePath);
        }
        if (!fileExists(dirName)) {
            fs__1.mkdirSync(dirName, true);
        }
        return realFilePath;
    }
    let realDirName = dirName || downloadPath;
    const contentDispositionFileName = getContentFileName(contentDisposition);
    const urlFileName = (UTS.arrayPop(harmonyUrl__1.URL.parseURL(url).pathname.split('/')) ?? '').slice(0, 255);
    let realFileName: string = contentDispositionFileName || urlFileName || '';
    if (!realFileName) {
        const ext = lookupExt(contentType) || '';
        const now = Date.now();
        realFileName = ext ? '' + now + '.' + ext : '' + now;
    }
    const lastIndexOfDot = realFileName.lastIndexOf('.');
    const realFileNameExt = realFileName.substring(lastIndexOfDot + 1);
    const realFileNameWithoutExt = realFileName.substring(0, lastIndexOfDot);
    let realFilePath: string = realDirName + '/' + realFileName;
    let number = 1;
    while(fileExists(realFilePath)){
        realFilePath = realDirName + '/' + realFileNameWithoutExt + '(' + number + ').' + realFileNameExt;
        number++;
    }
    if (!fileExists(realDirName)) {
        fs__1.mkdirSync(realDirName, true);
    }
    return decodeURIComponent(realFilePath);
}
class DownloadTask__1 implements DownloadTask {
    __v_skip: boolean = true;
    private _downloadTask: IDownloadTask;
    constructor(downloadTask: IDownloadTask){
        this._downloadTask = downloadTask;
    }
    abort() {
        this._downloadTask.abort();
    }
    onProgressUpdate(callback: Function) {
        this._downloadTask.onProgressUpdate(callback);
    }
    offProgressUpdate(callback: Function | null = null) {
        this._downloadTask.offProgressUpdate(callback);
    }
    onHeadersReceived(callback: Function) {
        this._downloadTask.onHeadersReceived(callback);
    }
    offHeadersReceived(callback: Function | null = null) {
        this._downloadTask.offHeadersReceived(callback);
    }
}
const downloadFile = defineTaskApi<DownloadFileOptions, DownloadFileSuccess, DownloadTask>(API_DOWNLOAD_FILE, (args: DownloadFileOptions, exec: ApiExecutor<DownloadFileSuccess>): DownloadTask__1 =>{
    let url = args.url, timeout = args.timeout, header = args.header, filePath = args.filePath;
    let dirName = '';
    let fileName = '';
    if (filePath) {
        const realPath = getFsPath(filePath) as string;
        if (filePath.endsWith('/')) {
            dirName = realPath.endsWith('/') ? realPath.slice(0, -1) : realPath;
        } else {
            dirName = realPath.substring(0, realPath.lastIndexOf('/'));
            fileName = realPath.substring(realPath.lastIndexOf('/') + 1);
        }
    }
    header = header || {} as ESObject;
    if (!header!['Cookie'] && !header!['cookie']) {
        header!['Cookie'] = getCookieSync(url);
    }
    const httpRequest = http__3.createHttp();
    const mp = getCurrentMP__2();
    const userAgent = mp.userAgent.fullUserAgent;
    if (userAgent && !header!['User-Agent'] && !header!['user-agent']) {
        header!['User-Agent'] = userAgent;
    }
    const emitter = new Emitter__2() as IUniDownloadFileEmitter;
    const downloadTask: IDownloadTask = {
        abort () {
            emitter.off('headersReceive');
            emitter.off('progress');
            httpRequest.destroy();
        },
        onHeadersReceived (callback: Function) {
            emitter.on('headersReceive', callback);
        },
        offHeadersReceived (callback: Function | null = null) {
            emitter.off('headersReceive', callback);
        },
        onProgressUpdate (callback: Function) {
            emitter.on('progress', callback);
        },
        offProgressUpdate (callback: Function | null = null) {
            emitter.off('progress', callback);
        }
    };
    const destroy = ()=>{
        downloadTask.abort();
    };
    mp.on('beforeClose', destroy);
    let responseContentType = '';
    let responseContentDisposition = '';
    let lastUrl = url;
    httpRequest.on('headersReceive', (headers: Object)=>{
        const realHeaders = headers as Record<string, string | string[]>;
        responseContentType = realHeaders['content-type'] as string || realHeaders['Content-Type'] as string || '';
        responseContentDisposition = realHeaders['content-disposition'] as string || realHeaders['Content-Disposition'] as string || '';
        const setCookieHeader = realHeaders['set-cookie'] || realHeaders['Set-Cookie'];
        if (setCookieHeader) {
            setCookieSync(lastUrl, setCookieHeader as string[]);
        }
        const location = realHeaders['location'] || realHeaders['Location'];
        if (location) {
            lastUrl = location as string;
        }
    });
    httpRequest.on('dataReceiveProgress', (ref)=>{
        let receiveSize = ref.receiveSize, totalSize = ref.totalSize;
        emitter.emit('progress', {
            progress: Math.floor((receiveSize / totalSize) * 100),
            totalBytesWritten: receiveSize,
            totalBytesExpectedToWrite: totalSize
        } as OnProgressDownloadResult);
    });
    const CACHE_PATH = getEnv().CACHE_PATH as string;
    const downloadPath = CACHE_PATH + '/uni-download';
    if (!fs__1.accessSync(downloadPath)) {
        fs__1.mkdirSync(downloadPath, true);
    }
    let stream: fs__1.Stream;
    let tempFilePath = '';
    let writePromise = Promise.resolve(0);
    const queueWrite = async (data: ArrayBuffer): Promise<number> =>{
        writePromise = writePromise.then(async (total)=>{
            const length = await stream.write(data);
            return total + length;
        });
        return writePromise;
    };
    httpRequest.on('dataReceive', (data)=>{
        if (!stream) {
            tempFilePath = getDownloadFilePath({
                dirName,
                fileName,
                contentType: responseContentType,
                contentDisposition: responseContentDisposition,
                url,
                downloadPath
            } as GetDownloadFilePathOptions);
            try {
                stream = fs__1.createStreamSync(tempFilePath, 'w+');
            } catch (error) {
                exec.reject((error as BusinessError__1).message);
            }
        }
        queueWrite(data);
    });
    httpRequest.requestInStream(parseUrl(url), {
        header: header ? header : {} as ESObject,
        method: http__3.RequestMethod.GET,
        connectTimeout: timeout ? timeout : undefined,
        readTimeout: timeout ? timeout : undefined,
        clientCert: getClientCertificate(url)
    } as http__3.HttpRequestOptions, (err, statusCode)=>{
        let finishPromise: Promise<void> = Promise.resolve();
        if (err) {
            exec.reject(err.message);
        } else {
            finishPromise = writePromise.then(async ()=>{
                await stream.flush();
                await stream.close();
                exec.resolve({
                    tempFilePath,
                    statusCode
                } as DownloadFileSuccess);
            }).catch((err: Error)=>{
                exec.reject(err.message);
            });
        }
        finishPromise.then(()=>{
            httpRequest.off('headersReceive');
            httpRequest.off('dataReceive');
            downloadTask.offHeadersReceived();
            downloadTask.offProgressUpdate();
            httpRequest.destroy();
            mp.off('beforeClose', destroy);
        });
    });
    return new DownloadTask__1(downloadTask);
}, DownloadFileApiProtocol, DownloadFileApiOptions) as DownloadFile;
const configMTLS: ConfigMTLS = defineAsyncApi<ConfigMTLSOptions, ConfigMTLSSuccess>(API_CONFIG_MTLS, (args: ConfigMTLSOptions, executor: ApiExecutor<ConfigMTLSSuccess>)=>{
    try {
        args.certificates.forEach((certificate)=>{
            const certHosts = certificates.map((cert): string =>cert.host);
            const certHostIndex = certHosts.indexOf(certificate.host);
            if (certHostIndex > -1) {
                certificates.splice(certHostIndex, 1);
            }
            certificates.push(certificate);
        });
        executor.resolve();
    } catch (error) {
        executor.reject((error as BusinessError__2).message);
    }
}, ConfigMTLSApiProtocol, ConfigMTLSApiOptions) as ConfigMTLS;
export { RequestTask as RequestTask, RequestOptions as RequestOptions, RequestSuccess as RequestSuccess, RequestFail as RequestFail, Request as Request, UploadTask as UploadTask, UploadFileOptions as UploadFileOptions, UploadFileSuccess as UploadFileSuccess, OnProgressUpdateResult as OnProgressUpdateResult, UploadFile as UploadFile, DownloadTask as DownloadTask, DownloadFileOptions as DownloadFileOptions, DownloadFileSuccess as DownloadFileSuccess, OnProgressDownloadResult as OnProgressDownloadResult, DownloadFile as DownloadFile, ConfigMTLSOptions as ConfigMTLSOptions, ConfigMTLSSuccess as ConfigMTLSSuccess, ConfigMTLS as ConfigMTLS, UploadFileCompleteCallback as UploadFileCompleteCallback, UploadFileFail as UploadFileFail, UploadFileFailCallback as UploadFileFailCallback, UploadFileOptionFiles as UploadFileOptionFiles, UploadFileProgressUpdateCallback as UploadFileProgressUpdateCallback, UploadFileSuccessCallback as UploadFileSuccessCallback, DownloadFileProgressUpdateCallback as DownloadFileProgressUpdateCallback, DownloadFileComplete as DownloadFileComplete, DownloadFileCompleteCallback as DownloadFileCompleteCallback, DownloadFileFail as DownloadFileFail, DownloadFileFailCallback as DownloadFileFailCallback, DownloadFileSuccessCallback as DownloadFileSuccessCallback, RequestCompleteCallback as RequestCompleteCallback, RequestErrorCode as RequestErrorCode, RequestFailCallback as RequestFailCallback, RequestMethod as RequestMethod, RequestSuccessCallback as RequestSuccessCallback, ConfigMTLSComplete as ConfigMTLSComplete, ConfigMTLSCompleteCallback as ConfigMTLSCompleteCallback, ConfigMTLSFail as ConfigMTLSFail, ConfigMTLSFailCallback as ConfigMTLSFailCallback, ConfigMTLSSuccessCallback as ConfigMTLSSuccessCallback, Certificate as Certificate, RequestTaskOnChunkReceivedCallback as RequestTaskOnChunkReceivedCallback, RequestTaskOnChunkReceivedListenerResult as RequestTaskOnChunkReceivedListenerResult, RequestTaskOnHeadersReceivedCallback as RequestTaskOnHeadersReceivedCallback, RequestTaskOnHeadersReceivedListenerResult as RequestTaskOnHeadersReceivedListenerResult };
export { request as request, uploadFile as uploadFile, downloadFile as downloadFile, configMTLS as configMTLS };
