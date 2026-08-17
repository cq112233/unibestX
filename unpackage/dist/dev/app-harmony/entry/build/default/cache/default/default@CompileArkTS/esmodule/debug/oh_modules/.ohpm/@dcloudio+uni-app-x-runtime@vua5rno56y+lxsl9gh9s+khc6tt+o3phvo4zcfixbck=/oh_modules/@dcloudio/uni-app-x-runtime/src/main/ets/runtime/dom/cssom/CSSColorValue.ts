import { CSSStyleValue } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/cssom/CSSStyleValue&1.0.0";
import { EXTENDED_COLOR_KEYWORDS } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/color&1.0.0";
/**
 * lib.dom.d.ts没有CSSColorValue的类型定义，但是chromium源码内有
 * 由于鸿蒙本身支持各种颜色字符串，我们没必要再细分CSSRGB等子类
 */
export interface IHarmonyCSSColorValue {
    harmonyColor: string;
}
export class CSSColorValue extends CSSStyleValue implements IHarmonyCSSColorValue {
    static parse(cssText: string): CSSColorValue {
        return new CSSColorValue(cssText);
    }
    harmonyColor: string;
    color: string;
    constructor(color: string) {
        super();
        this.color = color;
        this.harmonyColor = toHarmonyColor(color);
    }
    toString(): string {
        return this.color;
    }
}
export class HarmonyCSSColorValue extends CSSStyleValue implements IHarmonyCSSColorValue {
    harmonyColor: string;
    constructor(color: string) {
        super();
        this.harmonyColor = color;
    }
    toString(): string {
        return fromHarmonyColor(this.harmonyColor);
    }
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
export function toHarmonyColor(color: string): string {
    if (color.startsWith('#')) {
        if (color.length === 9) {
            // 将#RRGGBBAA转为#AARRGGBB
            return `#${color.substring(7, 9)}${color.substring(1, 7)}`;
        }
    }
    else if (color in EXTENDED_COLOR_KEYWORDS) {
        // 将颜色名称转换为16进制字符串
        return EXTENDED_COLOR_KEYWORDS[color];
    }
    return color;
}
export function fromHarmonyColor(color: string): string {
    if (color.startsWith('#')) {
        if (color.length === 9) {
            // 将#AARRGGBB转为#RRGGBBAA
            return `#${color.substring(3, 9)}${color.substring(1, 3)}`;
        }
    }
    return color;
}
