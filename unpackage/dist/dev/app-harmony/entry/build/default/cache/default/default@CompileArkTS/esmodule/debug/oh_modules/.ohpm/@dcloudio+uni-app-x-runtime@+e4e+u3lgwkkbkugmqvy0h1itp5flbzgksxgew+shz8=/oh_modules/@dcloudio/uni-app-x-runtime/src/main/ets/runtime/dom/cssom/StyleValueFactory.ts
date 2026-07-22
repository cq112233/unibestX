import type { CSSStyleValue } from './CSSStyleValue';
import { CSSColorValue, } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/cssom/CSSColorValue&1.0.0";
import { CSSKeywordValue, } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/cssom/CSSKeywordValue&1.0.0";
import { toCSSUnitValue, UnitType } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/cssom/CSSUnitValue&1.0.0";
import { parseUnparsedValue } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/cssom/CSSUnparsedValue&1.0.0";
import { BORDER_STYLE_VALUES, BORDER_WIDTH_VALUES, Property, KEYWORD_AUTO, TEXT_DECORATION_LINE_VALUES, ALIGN_CONTENT_VALUES, ALIGN_ITEMS_VALUES, ALIGN_SELF_VALUES, BOX_SIZING_VALUES, DIRECTION_VALUES, DISPLAY_VALUES, FONT_STYLE_VALUES, FONT_WEIGHT_VALUES, FONT_SIZE_VALUES, FLEX_DIRECTION_VALUES, FLEX_WRAP_VALUES, JUSTIFY_CONTENT_VALUES, OVERFLOW_VALUES, POSITION_VALUES, POINT_EVENTS_VALUES, TEXT_ALIGN_VALUES, VISIBILITY_VALUES, WHITE_SPACE_VALUES, } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/cssom/constants&1.0.0";
export class StyleValueFactory {
    static fromString(property: string, value: string | number): CSSStyleValue | undefined {
        if (property.startsWith('--')) {
            // css变量的值不会被编译器转为数字
            return parseUnparsedValue(value as string);
        }
        const propertyId = Property[property];
        if (propertyId == null) {
            throw new Error(`Failed to execute 'parse' on 'CSSStyleValue': Invalid property name`);
        }
        if (typeof value === 'string' && value.includes('var(')) {
            return parseUnparsedValue(value as string);
        }
        let result: CSSStyleValue | undefined;
        switch (propertyId) {
            case Property['caret-color']: {
                if (value === KEYWORD_AUTO) {
                    result = CSSKeywordValue.getCSSKeywordValue(value);
                }
                else {
                    result = new CSSColorValue(value as string);
                }
                break;
            }
            case Property['background-color']:
            case Property['border-bottom-color']:
            case Property['border-left-color']:
            case Property['border-right-color']:
            case Property['border-top-color']:
            case Property.color: {
                result = new CSSColorValue(value as string);
                break;
            }
            case Property['border-bottom-style']:
            case Property['border-left-style']:
            case Property['border-right-style']:
            case Property['border-top-style']: {
                if (BORDER_STYLE_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                break;
            }
            case Property['text-decoration']:
            case Property['text-decoration-line']: {
                if (TEXT_DECORATION_LINE_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                break;
            }
            case Property['border-bottom-width']:
            case Property['border-left-width']:
            case Property['border-right-width']:
            case Property['border-top-width']:
                if (BORDER_WIDTH_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                else {
                    result = toCSSUnitValue(value, [UnitType.length]);
                }
                break;
            case Property.bottom:
            case Property.height:
            case Property.left:
            case Property.right:
            case Property.top:
            case Property.width:
            case Property['margin-bottom']:
            case Property['margin-left']:
            case Property['margin-right']:
            case Property['margin-top']:
            case Property['min-height']:
            case Property['min-height']:
            case Property['max-height']:
            case Property['max-width']:
                if (value === KEYWORD_AUTO) {
                    result = CSSKeywordValue.getCSSKeywordValue(value);
                }
                else {
                    result = toCSSUnitValue(value, [UnitType.length, UnitType.percent]);
                }
                break;
            case Property['padding-bottom']:
            case Property['padding-left']:
            case Property['padding-right']:
            case Property['padding-top']:
            case Property['border-top-right-radius']:
            case Property['border-top-left-radius']:
            case Property['border-bottom-left-radius']:
            case Property['border-bottom-right-radius']:
                result = toCSSUnitValue(value, [UnitType.length, UnitType.percent]);
                break;
            case Property['line-height']:
                result = toCSSUnitValue(value, [UnitType.number, UnitType.length, UnitType.percent]);
                break;
            case Property.opacity:
                result = toCSSUnitValue(value, [UnitType.number]);
                break;
            case Property['align-content']:
                if (ALIGN_CONTENT_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                break;
            case Property['align-items']:
                if (ALIGN_ITEMS_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                break;
            case Property['align-self']:
                if (ALIGN_SELF_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                break;
            case Property['box-sizing']:
                if (BOX_SIZING_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                break;
            case Property.direction:
                if (DIRECTION_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                break;
            case Property.display:
                if (DISPLAY_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                break;
            case Property['flex-basis']:
                if (value === KEYWORD_AUTO) {
                    result = CSSKeywordValue.getCSSKeywordValue(value);
                }
                else {
                    result = toCSSUnitValue(value, [UnitType.length, UnitType.percent]);
                }
                break;
            case Property['flex-direction']:
                if (FLEX_DIRECTION_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                break;
            case Property['flex-grow']:
                result = toCSSUnitValue(value, [UnitType.number]);
                break;
            case Property['flex-shrink']:
                result = toCSSUnitValue(value, [UnitType.number]);
                break;
            case Property['flex-wrap']:
                if (FLEX_WRAP_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                break;
            case Property['font-size']:
                if (FONT_SIZE_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                else {
                    result = toCSSUnitValue(value, [UnitType.number, UnitType.length]);
                }
                break;
            case Property['font-style']:
                if (FONT_STYLE_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                break;
            case Property['font-weight']:
                if (FONT_WEIGHT_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                else {
                    result = toCSSUnitValue(value, [UnitType.number]);
                }
                break;
            case Property['justify-content']:
                if (JUSTIFY_CONTENT_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                break;
            // uni-app-x仅支持overflow单个值，不支持overflow-x、overflow-y
            case Property['overflow']:
            case Property['overflow-x']:
            case Property['overflow-y']:
                if (OVERFLOW_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                break;
            case Property['pointer-events']:
                if (POINT_EVENTS_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                break;
            case Property.position:
                if (POSITION_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                break;
            case Property['text-align']:
                if (TEXT_ALIGN_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                break;
            // case Property.transform: {
            //   // TODO 待实现
            // }
            case Property['transition-duration']:
                result = toCSSUnitValue(value, [UnitType.time]);
                break;
            case Property.visibility:
                if (VISIBILITY_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                break;
            case Property['white-space']:
                if (WHITE_SPACE_VALUES.includes(value as string)) {
                    result = CSSKeywordValue.getCSSKeywordValue(value as string);
                }
                break;
            case Property['z-index']:
                if (value === KEYWORD_AUTO) {
                    result = CSSKeywordValue.getCSSKeywordValue(value);
                }
                else {
                    result = toCSSUnitValue(value, [UnitType.number]);
                }
                break;
        }
        if (result) {
            return result;
        }
        return;
        // 此处和web规范不同，不抛出错误
        // throw new Error(`Failed to execute 'parse' on 'CSSStyleValue': Invalid value or property '${property}': ${value}`);
    }
}
