import { CSSKeywordValue as ICSSKeywordValue } from './types';
import { CSSStyleValue } from './CSSStyleValue';
export declare class CSSKeywordValue extends CSSStyleValue implements ICSSKeywordValue {
    /**
     * 此方法和StyleValueFactory有可以共用的逻辑，为保证StyleValueFactory的执行效率，不进行代码复用
     */
    static parse(property: string, cssText: string): CSSKeywordValue;
    /**
     * 获取已存在的CSSKeywordValue实例，不同于web规范，缓存CSSKeywordValue实例加速比较及创建
     */
    static getCSSKeywordValue(value: string): CSSKeywordValue;
    static isEqual(a: CSSKeywordValue, b: CSSKeywordValue): boolean;
    value: string;
    constructor(value: string);
    toString(): string;
}
