import type { CSSStyleValue as ICSSStyleValue } from './types';
import { Cache } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/cache&1.0.0";
// 断开对StyleValueFactory的依赖，否则会循环引用，导致编译失败CSSStyleValue -> StyleValueFactory -> CSSColorValue -> CSSStyleValue
interface IStyleValueFactory {
    fromString(property: string, cssText: string | number): CSSStyleValue;
}
let styleValueFactory: IStyleValueFactory | undefined;
export function initStyleValueFactory(factory: IStyleValueFactory) {
    styleValueFactory = factory;
}
/**
 * 鸿蒙方面说字符串拼接性能不好，这里测试过不使用字符串拼接，使用多层map性能并没有变好，徒增复杂性
 * 不要直接在CSSStyleValue.parse方法中使用缓存，CSSStyleValue.parse是公开的方法，开发者也会调用。
 */
const CSS_STYLE_VALUE_PARSE_CACHE = new Cache<string, CSSStyleValue | undefined>();
export function parseStyleWithCache(property: string, cssText: string | number): CSSStyleValue | undefined {
    const cacheKey = `${property}:${cssText}`;
    if (CSS_STYLE_VALUE_PARSE_CACHE.has(cacheKey)) {
        return CSS_STYLE_VALUE_PARSE_CACHE.get(cacheKey);
    }
    const value = styleValueFactory!.fromString(property, cssText);
    if (value == undefined) {
        return undefined;
    }
    value.cssText = cssText + '';
    CSS_STYLE_VALUE_PARSE_CACHE.set(cacheKey, value);
    return value;
}
export class CSSStyleValue implements ICSSStyleValue {
    static parse(property: string, cssText: string | number): CSSStyleValue | undefined {
        const value = styleValueFactory!.fromString(property, cssText);
        value.cssText = cssText + '';
        return value;
    }
    static parseAll(property: string, value: string): CSSStyleValue {
        throw new Error('Not implemented');
    }
    cssText: string = '';
    constructor() {
    }
    toString(): string {
        return this.cssText;
    }
}
