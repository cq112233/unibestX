import { UTSJSONObject } from '../uts-polyfill';
declare const UTSJSON: {
    parse<T = UTSJSONObject>(text: string, reviver?: (this: any, key: string, value: any) => any): T;
    parseArray<T_1 = Object>(text: string): T_1[];
    parseObject<T_2 = UTSJSONObject>(text: string): T_2;
    stringify: (value: any) => string;
};
export { UTSJSON };
