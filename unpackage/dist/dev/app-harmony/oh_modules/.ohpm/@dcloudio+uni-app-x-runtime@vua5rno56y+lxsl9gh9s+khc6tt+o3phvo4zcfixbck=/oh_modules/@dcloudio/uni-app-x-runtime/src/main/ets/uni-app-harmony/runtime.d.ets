import { UniElement } from "@dcloudio/uni-runtime-harmony";
export interface IUniError {
    errSubject: string;
    errCode: number;
    errMsg?: string;
    cause?: Error;
    data?: ESObject;
}
export declare class UniError extends Error implements IUniError {
    errSubject: string;
    errCode: number;
    errMsg?: string;
    cause?: Error;
    data?: ESObject;
    constructor(errSubject?: string, errCode?: number | Record<string, ESObject>, errMsg?: string);
    toString(): string;
    toJSON(): Record<string, ESObject>;
}
export declare namespace HBuilderX {
}
export declare namespace string {
    type ImageURIString = string;
    type VideoURIString = string;
    type URIString = string;
    type WebviewIdString = string;
    type IDString = string;
    type ColorString = string;
    type PageURIString = string;
    type FontURIString = string;
    type VideoIdString = string;
}
export interface ComponentPublicInstance {
    $el: UniElement | null;
}
export interface ComponentInternalInstance {
}
export interface ISourceError {
    subject?: string | null;
    code: number;
    message: string;
    cause?: Error;
}
export declare class SourceError extends Error implements ISourceError {
    /**
     * 源错误模块名称
     */
    subject: string | null;
    /**
     * 源错误描述信息
     */
    message: string;
    /**
     * 源错误的错误码
     */
    code: number;
    cause?: Error;
    constructor(message?: string, options?: Record<string, ESObject>);
    toString(): string;
    toJSON(): Record<string, ESObject>;
}
