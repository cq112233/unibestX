export interface UTSJSONObject extends Record<string, ESObject> {
    get(key: string): ESObject | null;
    set(key: string, value: ESObject): void;
    getAny(key: string, def?: undefined | null): ESObject | null;
    getAny(key: string, def: ESObject): ESObject;
    getBoolean(key: string, def?: undefined | null): boolean | null;
    getBoolean(key: string, def: boolean): boolean;
    getNumber(key: string, def?: undefined | null): number | null;
    getNumber(key: string, def: number): number;
    getString(key: string, def?: undefined | null): string | null;
    getString(key: string, def: string): string;
    getJSON(key: string, def?: undefined | null): UTSJSONObject | null;
    getJSON(key: string, def: UTSJSONObject): UTSJSONObject;
    getArray<T = ESObject>(key: string, def?: undefined | null): Array<T> | null;
    getArray<T = ESObject>(key: string, def: Array<T>): Array<T>;
    toMap(): Map<string, ESObject>;
}
interface UTSJSONObjectConstructor {
    prototype: UTSJSONObject;
    new (content?: ESObject): UTSJSONObject;
    keys(item: UTSJSONObject): Array<string>;
    assign(...items: UTSJSONObject[]): UTSJSONObject;
    assign<T>(...items: ESObject[]): T;
}
export declare const UTSJSONObject: UTSJSONObjectConstructor;
export interface IUTSObject extends Record<string, ESObject> {
}
export declare class UTSObject implements IUTSObject {
    constructor(content?: ESObject);
}
export { resolveInOperator, IJSONStringify, IUTSDefaultGenericParent } from './uts-helper';
/**
 * 将T中所有类型兼容null的key都变为可选
 * 目前主要用于处理RequestOptions类型问题
 */
export type OptionalNull<T> = {
    [K in keyof T as null extends T[K] ? K : never]?: T[K];
} & {
    [K in keyof T as null extends T[K] ? never : K]: T[K];
};
