import type { UniElement } from "@dcloudio/uni-runtime-harmony";
import { setGlobalValue } from "@normalized:N&&&@dcloudio/uni-app-harmony/polyfill&1.0.0";
interface IUniErrorJson {
    errSubject: string;
    errCode: number;
    errMsg: string;
    data?: any;
    cause?: Error;
}
export interface IUniError {
    errSubject: string;
    errCode: number;
    errMsg?: string;
    cause?: Error;
    data?: any;
}
export class UniError extends Error implements IUniError {
    errSubject: string;
    errCode: number;
    errMsg?: string;
    cause?: Error;
    data?: any;
    constructor(errSubject?: string, errCode?: number | Record<string, any>, errMsg?: string) {
        let options: Record<string, any> = {};
        const argsLength = Array.from(arguments).length;
        switch (argsLength) {
            case 0:
                errSubject = '';
                errMsg = '';
                errCode = 0;
                break;
            case 1:
                errMsg = errSubject;
                errSubject = '';
                errCode = 0;
                break;
            case 2:
                errMsg = errSubject;
                options = errCode as Record<string, any>;
                errCode = options.errCode || 0;
                errSubject = options.errSubject || '';
                break;
            case 3:
            default:
                break;
        }
        super(errMsg);
        this.name = 'UniError';
        this.errSubject = errSubject as string;
        this.errCode = errCode as number;
        this.errMsg = errMsg as string;
        if (options.data) {
            this.data = options.data;
        }
        if (options.cause) {
            this.cause = options.cause;
        }
    }
    toString(): string {
        return this.errMsg || '';
    }
    toJSON(): Record<string, any> {
        return {
            errSubject: this.errSubject,
            errCode: this.errCode,
            errMsg: this.errMsg || '',
            data: this.data,
            cause: this.cause && typeof (this.cause as UniError).toJSON === 'function'
                ? (this.cause as UniError).toJSON()
                : this.cause,
        } as IUniErrorJson;
    }
}
setGlobalValue('UniError', UniError);
export namespace HBuilderX {
    type ImageURIString = string;
    type VideoURIString = string;
    type URIString = string;
    type WebviewIdString = string;
    type IDString = string;
    type ColorString = string;
    type PageURIString = string;
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
export class SourceError extends Error implements ISourceError {
    /**
     * 源错误模块名称
     */
    subject: string | null = null;
    /**
     * 源错误描述信息
     */
    message: string;
    /**
     * 源错误的错误码
     */
    code: number = 0;
    cause?: Error;
    constructor(message: string = '', options: Record<string, any> = {}) {
        super(message);
        this.message = message!;
        if (options.cause) {
            this.cause = options.cause;
        }
    }
    toString(): string {
        return this.message || '';
    }
    toJSON(): Record<string, any> {
        return {
            subject: this.subject,
            message: this.message,
            code: this.code || '',
            cause: this.cause && typeof (this.cause as UniError).toJSON === 'function'
                ? (this.cause as UniError).toJSON()
                : this.cause,
        } as ISourceError;
    }
}
