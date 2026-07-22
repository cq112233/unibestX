import type { Color } from "@ohos:graphics.scene";
export type Unknown = Object | undefined | null;
export type UTSJSONObject = {
    get(key: string): ESObject | null;
    set(key: string, value: ESObject): void;
    getAny(key: string, def?: ESObject | null): ESObject;
    getBoolean(key: string, def?: boolean | null): boolean;
    getNumber(key: string, def?: number | null): number;
    getString(key: string, def?: string | null): string;
    getJSON(key: string, def?: UTSJSONObject | null): UTSJSONObject;
    getArray<T = ESObject>(key: string, def?: Array<T> | null): Array<T>;
    toMap(): Map<string, ESObject>;
};
export type LinearGradientValue = {
    angle?: number | string;
    colors: Array<[
        Color | number | string | any,
        number
    ]>;
    repeating?: boolean;
};
export type NotNull<T> = T extends null | undefined ? never : T;
export interface Constructor<T> {
    new (...params: any[]): T;
}
