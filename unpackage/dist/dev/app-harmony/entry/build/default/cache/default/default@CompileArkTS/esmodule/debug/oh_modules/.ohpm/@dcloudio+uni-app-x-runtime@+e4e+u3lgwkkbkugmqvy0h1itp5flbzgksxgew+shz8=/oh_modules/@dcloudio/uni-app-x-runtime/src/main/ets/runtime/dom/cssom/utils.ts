import { Property } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/cssom/constants&1.0.0";
import { hyphenate } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/utils&1.0.0";
import { CSSUnitValue, LengthUnit, NumberUnit } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/cssom/CSSUnitValue&1.0.0";
export function isPropertySupportedByCSSOM(property: string): boolean {
    return Property[property] !== undefined || property.startsWith('--');
}
export function getCSSOMProperty(property: string): string {
    if (property.startsWith('--')) {
        return property;
    }
    return hyphenate(property);
}
/**
 * uni-app编译器会将px值移除单位，直接转为数字。需要注意以下情况
 * - line-height既支持px也支持单独数值，此时编译器会保留px单位
 * - z-index等支持数值的属性，值也会被转为数值
 * @deprecated 在此处处理不合适，多了很多判断，改为在CSSStyleValue的parse内处理，虽然违反类型定义
 * @param property
 * @param value
 * @returns
 */
export function parseUniAppStyleValue(property: string, value: string | number): string | CSSUnitValue {
    if (typeof value === 'number') {
        if (property === 'line-height') {
            return new CSSUnitValue(value, NumberUnit.number);
        }
        else {
            return new CSSUnitValue(value, LengthUnit.px);
        }
    }
    return value;
}
