import { CSSStyleValue } from './CSSStyleValue';
/**
 * lib.dom.d.ts没有CSSColorValue的类型定义，但是chromium源码内有
 * 由于鸿蒙本身支持各种颜色字符串，我们没必要再细分CSSRGB等子类
 */
export interface IHarmonyCSSColorValue {
    harmonyColor: string;
}
export declare class CSSColorValue extends CSSStyleValue implements IHarmonyCSSColorValue {
    static parse(cssText: string): CSSColorValue;
    harmonyColor: string;
    color: string;
    constructor(color: string);
    toString(): string;
}
export declare class HarmonyCSSColorValue extends CSSStyleValue implements IHarmonyCSSColorValue {
    harmonyColor: string;
    constructor(color: string);
    toString(): string;
}
/**
 * 将web规范颜色字符串转换为鸿蒙支持的颜色字符串
 * 主要处理如下差异
 * - 鸿蒙支持的颜色名称非常少，只有少数几种颜色名称。需要将颜色名称转为16进制字符串
 * - 鸿蒙16进制颜色字符串格式为#RGB、#RRGGBB或#AARRGGBB，其中#AARRGGBB与web规范不同，应将web规范的#RRGGBBAA转为#AARRGGBB
 * - 鸿蒙支持rgba和rgb颜色字符串，无须转换
 * @param color 颜色字符串，可能是颜色名称或16进制字符串
 * @returns
 */
export declare function toHarmonyColor(color: string): string;
export declare function fromHarmonyColor(color: string): string;
