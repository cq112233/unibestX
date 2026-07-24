import { CSSUnitValue } from './CSSUnitValue';
export declare function isPropertySupportedByCSSOM(property: string): boolean;
export declare function getCSSOMProperty(property: string): string;
/**
 * uni-app编译器会将px值移除单位，直接转为数字。需要注意以下情况
 * - line-height既支持px也支持单独数值，此时编译器会保留px单位
 * - z-index等支持数值的属性，值也会被转为数值
 * @deprecated 在此处处理不合适，多了很多判断，改为在CSSStyleValue的parse内处理，虽然违反类型定义
 * @param property
 * @param value
 * @returns
 */
export declare function parseUniAppStyleValue(property: string, value: string | number): string | CSSUnitValue;
