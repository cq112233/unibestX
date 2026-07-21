import { NEED_FORCE_RENDER_ATTRIBUTES } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/index&1.0.0";
import type { LinearGradientValue } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/index&1.0.0";
import type { AnimatorResult } from "@ohos:animator";
import matrix4 from "@native:ohos.matrix4";
import { UniCssBoxSizing, UniCssFlexDirection, UniCssDirection, UniCssFlexJustify, UniCssFlexAlign, UniCssPositionType, UniCssFlexWrap, UniCssFlexOverflow, UniCssDisplayType, UniCssBorderStyle, UniCssFlexEdge, UniLengthUnit } from "@normalized:N&&&dcloudlayout/Index&1.0.0";
import type { UniLayoutFlexNode } from "@normalized:N&&&dcloudlayout/Index&1.0.0";
import type { CSSStyleDeclaration } from '@dcloudio/uni-app-x/types/native';
import { toDegrees, toRadians } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/rotate&1.0.0";
import { CSSUnitValue, CSSKeywordValue, LengthUnit, PercentUnit } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/cssom/index&1.0.0";
import type { CSSStyleValue as ICSSStyleValue } from '../dom/cssom/types';
/**
 * line-height: 5px;会优先尝试作为number parse，此时会抛出错误，外层捕获后再尝试使用其他类型的解析方式。
 * 如果每次都new Error会比较影响性能
 */
// TODO 优化line-height解析逻辑
const InvalidLengthError = new Error('Invalid number');
function formatNumberSync(value: Object): number {
    if (typeof value === 'number' && !isNaN(value)) {
        return value;
    }
    if (typeof value === 'string') {
        if (/^-{0,1}\d+(\.\d+)?$/.test(value)) {
            return parseFloat(value);
        }
    }
    throw InvalidLengthError;
}
export function formatNumber(value: Object, success: (val: number) => void, fail?: () => void) {
    try {
        success(formatNumberSync(value));
    }
    catch (e) {
        fail?.();
    }
}
function formatLengthValueSync(value: Object | undefined) {
    if (typeof value === 'string') {
        if (value === 'auto') {
            return NaN;
        }
        const len = value.length;
        // 为优化性能直接使用 parseFloat,不使用formatNumberSync
        const num = parseFloat(value);
        if (num !== num) { // 检查 NaN
            throw new Error('Invalid length');
        }
        const lastChar = value[len - 1];
        switch (lastChar) {
            case 'x':
                if (value[len - 2] === 'p') {
                    const last3 = value[len - 3];
                    if (last3 === 'u' || last3 === 'r') {
                        return px2vp(lpx2px(num));
                    }
                    return num;
                }
                break;
            case '%':
                return num;
            case 'n':
                // in
                if (value[len - 2] === 'i') {
                    return num * 96;
                }
                break;
            case 'm':
                // cm
                if (value[len - 2] === 'c') {
                    return num * 37.8;
                }
                break;
            default:
                return num;
        }
    }
    else if (typeof value === 'number') {
        if (value !== value) { // 检查 NaN
            throw new Error('Invalid length');
        }
        return value;
    }
    throw new Error('Invalid length');
}
function formatLayoutLengthSync(value: Object | undefined): LayoutLength {
    if (typeof value === 'string') {
        if (value === 'auto') {
            return {
                value: NaN,
                unit: UniLengthUnit.Auto
            };
        }
        const len = value.length;
        const num = parseFloat(value);
        if (num !== num) { // 检查 NaN
            if (value.startsWith('var') || value.startsWith('env')) {
                return {
                    value,
                    unit: UniLengthUnit.Function
                };
            }
            throw new Error('Invalid length');
        }
        const lastChar = value[len - 1];
        switch (lastChar) {
            case 'x':
                if (value[len - 2] === 'p') {
                    const last3 = value[len - 3];
                    if (last3 === 'u' || last3 === 'r') {
                        return {
                            value: num,
                            unit: UniLengthUnit.RPXPoint
                        };
                    }
                    return {
                        value: num,
                        unit: UniLengthUnit.PXPoint
                    };
                }
                break;
            case '%':
                return {
                    value: num,
                    unit: UniLengthUnit.Percent
                };
            case 'n':
                // in
                if (value[len - 2] === 'i') {
                    return {
                        value: num * 96,
                        unit: UniLengthUnit.PXPoint
                    };
                }
                break;
            case 'm':
                // cm
                if (value[len - 2] === 'c') {
                    return {
                        value: num * 37.8,
                        unit: UniLengthUnit.PXPoint
                    };
                }
                break;
            default:
                return {
                    value: num,
                    unit: UniLengthUnit.PXPoint
                };
        }
    }
    else if (typeof value === 'number') {
        if (value !== value) { // 检查 NaN
            throw new Error('Invalid length');
        }
        return {
            value: value,
            unit: UniLengthUnit.PXPoint
        };
    }
    throw new Error('Invalid length');
}
export function formatLengthValue(value: Object | undefined, onLength: (val: number) => void, onLengthPercent?: (val: number) => void, fail?: () => void) {
    try {
        const lengthValue = formatLengthValueSync(value);
        if (typeof value === 'string' && value.endsWith('%')) {
            onLengthPercent?.(lengthValue);
            return;
        }
        onLength(lengthValue);
    }
    catch (e) {
        fail?.();
    }
}
export interface LayoutLength {
    value: number | string;
    unit: UniLengthUnit;
}
export function formatLayoutLength(value: Object | undefined, success: (val: LayoutLength) => void, fail?: (error: Error) => void) {
    let res: LayoutLength;
    try {
        res = formatLayoutLengthSync(value);
    }
    catch (e) {
        fail?.(e);
        return;
    }
    success(res);
}
export function formatLayoutLengthWithCSSStyleValue(value: ICSSStyleValue | undefined, success: (val: LayoutLength) => void, fail?: (error: Error) => void) {
    let res: LayoutLength;
    try {
        res = formatLayoutLengthWithCSSStyleValueSync(value);
    }
    catch (e) {
        fail?.(e);
        return;
    }
    success(res);
}
export function formatLayoutLengthWithCSSStyleValueSync(value: ICSSStyleValue | undefined): LayoutLength {
    if (value instanceof CSSKeywordValue) {
        if (value.value === 'auto') {
            return {
                value: NaN,
                unit: UniLengthUnit.Auto
            };
        }
    }
    if (value instanceof CSSUnitValue) {
        switch (value.unit) {
            case LengthUnit.px:
                return {
                    value: value.value,
                    unit: UniLengthUnit.PXPoint
                };
            case LengthUnit.rpx:
            case LengthUnit.upx:
                return {
                    value: value.value,
                    unit: UniLengthUnit.RPXPoint
                };
            case LengthUnit.in:
                return {
                    value: value.value * 96,
                    unit: UniLengthUnit.PXPoint
                };
            case LengthUnit.cm:
                return {
                    value: value.value * 37.8,
                    unit: UniLengthUnit.PXPoint
                };
            case PercentUnit.percent:
                return {
                    value: value.value,
                    unit: UniLengthUnit.Percent
                };
            default:
                break;
        }
    }
    throw new Error('Invalid length');
}
export function formatLength(value: Object | undefined, success: (val: number | string | undefined) => void, fail?: () => void) {
    formatLengthValue(value, (val) => {
        if (Number.isNaN(val)) {
            success(undefined);
            return;
        }
        success(val);
    }, (val) => {
        success(val + '%');
    }, fail);
}
export function formatLineHeight(value: Object, success: (val: string | number | undefined) => void, fail?: () => void) {
    // TODO normal
    // 优先处理数值类型
    formatNumber(value, value => {
        success(value + 'em');
    }, () => {
        if (typeof value === 'string' && value.endsWith('em')) {
            success(value);
            return;
        }
        formatLengthValue(value, success, fail, fail);
    });
}
export function formatVisibility(value: Object, success: (val: Visibility) => void, fail?: () => void) {
    if (typeof value === 'string') {
        switch (value) {
            case 'visible':
                success(Visibility.Visible);
                return;
            case 'hidden':
                success(Visibility.Hidden);
                return;
        }
    }
    fail?.();
}
export interface TextOverflowValue {
    overflow: TextOverflow;
}
export function formatTextOverflow(value: Object, success: (val: TextOverflowValue) => void, fail?: () => void) {
    if (typeof value === 'string') {
        switch (value) {
            case 'clip':
                success({
                    overflow: TextOverflow.Clip
                });
                return;
            case 'ellipsis':
                success({
                    overflow: TextOverflow.Ellipsis
                });
                return;
        }
    }
    fail?.();
}
export function formatTextDecorationLine(value: Object, success: (val: TextDecorationType) => void, fail?: () => void) {
    if (typeof value === 'string') {
        switch (value) {
            case 'none':
                success(TextDecorationType.None);
                return;
            case 'underline':
                success(TextDecorationType.Underline);
                return;
            case 'line-through':
                success(TextDecorationType.LineThrough);
                return;
            case 'overline':
                success(TextDecorationType.Overline);
                return;
        }
    }
    fail?.();
}
export function formatTextDecorationStyle(value: Object, success: (val: TextDecorationStyle) => void, fail?: () => void) {
    if (typeof value === 'string') {
        switch (value) {
            case 'solid':
                success(TextDecorationStyle.SOLID);
                return;
            case 'double':
                success(TextDecorationStyle.DOUBLE);
                return;
            case 'dotted':
                success(TextDecorationStyle.DOTTED);
                return;
            case 'dashed':
                success(TextDecorationStyle.DASHED);
                return;
            case 'wavy':
                success(TextDecorationStyle.WAVY);
                return;
        }
    }
    fail?.();
}
export function formatFontStyle(value: Object, success: (val: FontStyle) => void, fail?: () => void) {
    if (typeof value === 'string') {
        switch (value) {
            case 'normal':
                success(FontStyle.Normal);
                return;
            case 'italic':
                success(FontStyle.Italic);
                return;
        }
    }
    fail?.();
}
export function formatFontWeight(value: Object, success: (val: FontWeight | number | string) => void, fail?: () => void) {
    if (typeof value === 'string') {
        switch (value) {
            case 'normal':
                success(FontWeight.Normal);
                return;
            case 'bold':
                success(FontWeight.Bold);
                return;
            case 'bolder':
                success(FontWeight.Bolder);
                return;
            case 'lighter':
                success(FontWeight.Lighter);
                return;
        }
    }
    formatNumber(value, value => {
        success(value);
    }, fail);
}
export function formatFontFamily(value: Object, success: (val: string) => void, fail?: () => void) {
    if (typeof value === 'string') {
        success(value);
        return;
    }
    fail?.();
}
export function formatFontSize(value: Object, success: (val: string | number | undefined) => void, fail?: () => void) {
    if (typeof value === 'string') {
        switch (value) {
            case 'xx-small':
                value = (9);
                break;
            case 'x-small':
                value = (10);
                break;
            case 'small':
                value = (13);
                break;
            case 'medium':
                value = (16);
                break;
            case 'large':
                value = (18);
                break;
            case 'x-large':
                value = (24);
                break;
            case 'xx-large':
                value = (32);
                break;
            case 'xxx-large':
                value = (48);
                break;
            // TODO larger, smaller 相对大小关键字。字体大小将相对于父元素的字体大小变大或变小，大致按照上面用于区分绝对大小关键字的比率。
            case 'larger':
            case 'smaller':
                fail?.();
                return;
        }
    }
    formatLengthValue(value, success, fail, fail);
}
export function formatDirection(value: Object, success: (val: UniCssDirection) => void, fail?: () => void) {
    let res: UniCssDirection;
    if (typeof value === 'string') {
        switch (value) {
            case 'ltr':
                res = UniCssDirection.LTR;
                break;
            case 'rtl':
                res = UniCssDirection.RTL;
                break;
            default:
                fail?.();
                return;
        }
    }
    else {
        fail?.();
        return;
    }
    success(res!);
}
export function formatBoxSizing(value: Object, success: (val: UniCssBoxSizing) => void, fail?: () => void) {
    let res: UniCssBoxSizing;
    if (typeof value === 'string') {
        switch (value) {
            case 'content-box':
                res = UniCssBoxSizing.ContentBox;
                break;
            case 'border-box':
                res = UniCssBoxSizing.BorderBox;
                break;
            default:
                fail?.();
                return;
        }
    }
    else {
        fail?.();
        return;
    }
    success(res!);
}
export function formatFlexDirection(value: Object, success: (val: UniCssFlexDirection) => void, fail?: () => void) {
    let res: UniCssFlexDirection;
    if (typeof value === 'string') {
        switch (value) {
            case 'row':
                res = UniCssFlexDirection.Row;
                break;
            case 'row-reverse':
                res = UniCssFlexDirection.RowReverse;
                break;
            case 'column':
                res = UniCssFlexDirection.Column;
                break;
            case 'column-reverse':
                res = UniCssFlexDirection.ColumnReverse;
                break;
            default:
                fail?.();
                return;
        }
    }
    else {
        fail?.();
        return;
    }
    success(res!);
}
export function formatJustifyContent(value: Object, success: (val: UniCssFlexJustify) => void, fail?: () => void) {
    let res: UniCssFlexJustify;
    if (typeof value === 'string') {
        switch (value) {
            case 'flex-start':
                res = UniCssFlexJustify.FlexStart;
                break;
            case 'flex-end':
                res = UniCssFlexJustify.FlexEnd;
                break;
            case 'center':
                res = UniCssFlexJustify.Center;
                break;
            case 'space-between':
                res = UniCssFlexJustify.SpaceBetween;
                break;
            case 'space-around':
                res = UniCssFlexJustify.SpaceAround;
                break;
            case 'space-evenly':
                res = UniCssFlexJustify.SpaceEvenly;
                break;
            default:
                fail?.();
                return;
        }
    }
    else {
        fail?.();
        return;
    }
    success(res!);
}
export function formatFlexAlign(value: Object, success: (val: UniCssFlexAlign) => void, fail?: () => void) {
    let res: UniCssFlexAlign;
    if (typeof value === 'string') {
        switch (value) {
            case 'normal':
                res = UniCssFlexAlign.Auto;
                break;
            case 'start':
            case 'flex-start':
                res = UniCssFlexAlign.FlexStart;
                break;
            case 'end':
            case 'flex-end':
                res = UniCssFlexAlign.FlexEnd;
                break;
            case 'center':
                res = UniCssFlexAlign.Center;
                break;
            case 'baseline':
                res = UniCssFlexAlign.BaseLine;
                break;
            case 'stretch':
                res = UniCssFlexAlign.Stretch;
                break;
            case 'space-between':
                res = UniCssFlexAlign.SpaceBetween;
                break;
            case 'space-around':
                res = UniCssFlexAlign.SpaceAround;
                break;
            default:
                fail?.();
                return;
        }
    }
    else {
        fail?.();
        return;
    }
    success(res!);
}
export function formatPosition(value: Object, success: (val: UniCssPositionType) => void, fail?: () => void) {
    let res: UniCssPositionType;
    if (typeof value === 'string') {
        switch (value) {
            case 'relative':
                res = UniCssPositionType.Relative;
                break;
            case 'absolute':
                res = UniCssPositionType.Absolute;
                break;
            case 'fixed':
                res = UniCssPositionType.Fixed;
                break;
            default:
                fail?.();
                return;
        }
    }
    else {
        fail?.();
        return;
    }
    success(res!);
}
export function formatFlexWrap(value: Object, success: (val: UniCssFlexWrap) => void, fail?: () => void) {
    let res: UniCssFlexWrap;
    if (typeof value === 'string') {
        switch (value) {
            case 'nowrap':
                res = UniCssFlexWrap.NoWrap;
                break;
            case 'wrap':
                res = UniCssFlexWrap.Wrap;
                break;
            case 'wrap-reverse':
                res = UniCssFlexWrap.WrapReverse;
                break;
            default:
                fail?.();
                return;
        }
    }
    else {
        fail?.();
        return;
    }
    success(res!);
}
export function formatOverflow(value: Object, success: (val: UniCssFlexOverflow, val2: boolean) => void, fail?: () => void) {
    let res: UniCssFlexOverflow;
    let res2: boolean;
    if (typeof value === 'string') {
        switch (value) {
            case 'visible':
                res = UniCssFlexOverflow.Visible;
                res2 = false;
                break;
            case 'hidden':
                res = UniCssFlexOverflow.Hidden;
                res2 = true;
                break;
            default:
                fail?.();
                return;
        }
    }
    else {
        fail?.();
        return;
    }
    success(res!, res2);
}
export function formatDisplay(value: Object, success: (val: UniCssDisplayType) => void, fail?: () => void) {
    let res: UniCssDisplayType;
    if (typeof value === 'string') {
        switch (value) {
            case 'flex':
                res = UniCssDisplayType.Flex;
                break;
            case 'none':
                res = UniCssDisplayType.None;
                break;
            default:
                fail?.();
                return;
        }
    }
    else {
        fail?.();
        return;
    }
    success(res!);
}
export function formatBorderStyle(value: Object, success: (val1: UniCssBorderStyle, val2: BorderStyle | undefined) => void, fail?: () => void) {
    let res1: UniCssBorderStyle;
    let res2: BorderStyle | undefined;
    if (typeof value === 'string') {
        switch (value) {
            case 'none':
                res1 = UniCssBorderStyle.None;
                res2 = undefined;
                break;
            case 'solid':
                res1 = UniCssBorderStyle.Border;
                res2 = BorderStyle.Solid;
                break;
            case 'dashed':
                res1 = UniCssBorderStyle.Border;
                res2 = BorderStyle.Dashed;
                break;
            case 'dotted':
                res1 = UniCssBorderStyle.Border;
                res2 = BorderStyle.Dotted;
                break;
            case 'double': // TODO
            default:
                fail?.();
                return;
        }
    }
    else {
        fail?.();
        return;
    }
    success(res1!, res2);
}
export enum BORDER_WIDTH {
    Thin = "1",
    Medium = "3",
    Thick = "5"
}
export function formatBorderWidth(value: Object, success: (val: LayoutLength) => void, fail?: () => void) {
    if (typeof value === 'string') {
        switch (value) {
            case 'thin':
                value = BORDER_WIDTH.Thin;
                break;
            case 'medium':
                value = BORDER_WIDTH.Medium;
                break;
            case 'thick':
                value = BORDER_WIDTH.Thick;
                break;
        }
    }
    formatLayoutLength(value, success, fail);
}
export function formatTextAlign(value: Object, success: (val: TextAlign) => void, fail?: () => void) {
    if (typeof value === 'string') {
        switch (value) {
            case 'start':
            case 'left':
                success(TextAlign.Start);
                return;
            case 'end':
            case 'right':
                success(TextAlign.End);
                return;
            case 'center':
                success(TextAlign.Center);
                return;
            case 'justify':
                success(TextAlign.JUSTIFY);
                return;
        }
    }
    fail?.();
}
export interface TransformParse {
    name: string;
    args: string[];
}
export function formatAngle(angle: string) {
    if (angle.endsWith('turn')) {
        return parseFloat(angle.slice(0, -4)) * 360;
    }
    if (angle.endsWith('rad')) {
        // angle = rad * 180 / Math.PI
        return toDegrees(parseFloat(angle.slice(0, -3)));
    }
    return parseFloat(angle);
}
function formatSkewValue(angle: string) {
    return Math.tan(toRadians(formatAngle(angle)));
}
export const DEFAULT_TRANSFORM = 'none';
export const DEFAULT_TRANSFORM_ORIGIN: TransFormOrigin = {
    centerX: '50%',
    centerY: '50%'
};
function formatTransformParse(transformParses: TransformParse[]) {
    if (!transformParses.length) {
        return;
    }
    let _matrix4 = matrix4.identity();
    // TODO 鸿蒙矩阵计算顺序与浏览器相反
    for (let i = transformParses.length - 1; i >= 0; i--) {
        const transformParse = transformParses[i];
        const name = transformParse.name;
        const args = transformParse.args;
        switch (name) {
            case 'perspective':
                _matrix4.combine(matrix4.init([
                    1.0, 0.0, 0.0, 0.0,
                    0.0, 1.0, 0.0, 0.0,
                    0.0, 0.0, 1.0, 0.0,
                    0.0, 0.0, -1 / formatLengthValueSync(args[0]), 1.0
                ]));
                break;
            case 'matrix':
                _matrix4.combine(matrix4.init([
                    parseFloat(args[0]), parseFloat(args[2]), 0.0, parseFloat(args[4]),
                    parseFloat(args[1]), parseFloat(args[3]), 0.0, parseFloat(args[5]),
                    0.0, 0.0, 1.0, 0.0,
                    0.0, 0.0, 0.0, 1.0
                ]));
                break;
            case 'matrix3d':
                _matrix4.combine(matrix4.init([
                    parseFloat(args[0]), parseFloat(args[4]), parseFloat(args[8]), parseFloat(args[12]),
                    parseFloat(args[1]), parseFloat(args[5]), parseFloat(args[9]), parseFloat(args[13]),
                    parseFloat(args[2]), parseFloat(args[6]), parseFloat(args[10]), parseFloat(args[14]),
                    parseFloat(args[3]), parseFloat(args[7]), parseFloat(args[11]), parseFloat(args[15])
                ]));
                break;
            case 'rotate':
                _matrix4.rotate({ z: 1, angle: formatAngle(args[0]) });
                break;
            case 'rotate3d':
                _matrix4
                    .rotate({
                    x: parseFloat(args[0]),
                    y: parseFloat(args[1]),
                    z: parseFloat(args[2]),
                    angle: formatAngle(args[3])
                });
                break;
            case 'rotateX':
                _matrix4.rotate({ x: 1, angle: formatAngle(args[0]) });
                break;
            case 'rotateY':
                _matrix4.rotate({ y: 1, angle: formatAngle(args[0]) });
                break;
            case 'rotateZ':
                _matrix4.rotate({ z: 1, angle: formatAngle(args[0]) });
                break;
            case 'scale':
                const xScale = parseFloat(args[0]);
                _matrix4.scale({ x: xScale, y: args[1] ? parseFloat(args[1]) : xScale });
                break;
            case 'scale3d':
                _matrix4
                    .scale({ x: parseFloat(args[0]), y: parseFloat(args[1]), z: parseFloat(args[2]) });
                break;
            case 'scaleX':
                _matrix4.scale({ x: parseFloat(args[0]) });
                break;
            case 'scaleY':
                _matrix4.scale({ y: parseFloat(args[0]) });
                break;
            case 'scaleZ':
                _matrix4.scale({ z: parseFloat(args[0]) });
                break;
            case 'skew':
                // 不清楚鸿蒙 skew 是怎么传参的，此处自行计算
                const xSkew = formatSkewValue(args[0]);
                const ySkew = args[1] ? formatSkewValue(args[1]) : xSkew;
                _matrix4.combine(matrix4.init([
                    1.0, 0.0, ySkew, 0.0,
                    xSkew, 1.0, 0.0, 0.0,
                    0.0, 0.0, 1.0, 0.0,
                    0.0, 0.0, 0.0, 1.0
                ]));
                break;
            case 'skewX':
                _matrix4.combine(matrix4.init([
                    1.0, 0.0, 0.0, 0.0,
                    formatSkewValue(args[0]), 1.0, 0.0, 0.0,
                    0.0, 0.0, 1.0, 0.0,
                    0.0, 0.0, 0.0, 1.0
                ]));
                break;
            case 'skewY':
                _matrix4.combine(matrix4.init([
                    1.0, formatSkewValue(args[0]), 0.0, 0.0,
                    0.0, 1.0, 0.0, 0.0,
                    0.0, 0.0, 1.0, 0.0,
                    0.0, 0.0, 0.0, 1.0
                ]));
                break;
            case 'translate':
                const x = vp2px(formatLengthValueSync(args[0]));
                _matrix4.translate({ x, y: args[1] ? vp2px(formatLengthValueSync(args[1])) : x });
                break;
            case 'translate3d':
                _matrix4.translate({
                    x: vp2px(formatLengthValueSync(args[0])),
                    y: vp2px(formatLengthValueSync(args[1])),
                    z: vp2px(formatLengthValueSync(args[2]))
                });
                break;
            case 'translateX':
                _matrix4.translate({ x: vp2px(formatLengthValueSync(args[0])) });
                break;
            case 'translateY':
                _matrix4.translate({ y: vp2px(formatLengthValueSync(args[0])) });
                break;
            case 'translateZ':
                _matrix4.translate({ z: vp2px(formatLengthValueSync(args[0])) });
                break;
        }
    }
    return _matrix4;
}
export function parseTransformValue(value: string) {
    return value.split(/\)\s/)
        .map(item => {
        if (!item.endsWith(')')) {
            item += ')';
        }
        const matchRes = item.match(/(\w+)\((.*)\)/) ?? [];
        return {
            name: matchRes[1],
            args: matchRes[2]?.split(',').map(i => i.trim()) ?? []
        } as TransformParse;
    });
}
interface TransformOptions {
    translate?: TranslateOptions;
    rotate?: RotateOptions;
    scale?: ScaleOptions;
}
// TODO translate 只计算数值和百分比，不支持混合计算
function calculateTranslate(value: string | number, value2: string | number): string | number {
    if (typeof value === 'string') {
        if (typeof value2 === 'string') {
            if (value.endsWith('%') && value2.endsWith('%')) {
                return `${parseFloat(value) + parseFloat(value2)}%`;
            }
            if (!value.endsWith('%') && !value2.endsWith('%')) {
                return parseFloat(value) + parseFloat(value2);
            }
        }
        else {
            if (!value.endsWith('%')) {
                return parseFloat(value) + value2;
            }
        }
    }
    else {
        if (typeof value2 === 'string') {
            if (!value2.endsWith('%')) {
                return value + parseFloat(value2);
            }
        }
        else {
            return value + value2;
        }
    }
    return value;
}
export function formatTransform(value: Object, transformOrigin: TransFormOrigin, success: (val?: object, transformOptions?: TransformOptions) => void, fail?: () => void) {
    if (value === DEFAULT_TRANSFORM) {
        success(matrix4.identity());
        return;
    }
    if (typeof value === 'string') {
        let transformValue = parseTransformValue(value);
        let transformOptions: TransformOptions = {};
        try {
            if (transformValue.length > 0) {
                for (let i = 0; i < transformValue.length; i++) {
                    const item = transformValue[i];
                    /**
                     * 处理 translate 百分比
                     */
                    if (item.name.startsWith('translate')) {
                        const hasPercent = item.args.some(arg => arg.endsWith('%'));
                        if (hasPercent) {
                            const existsX = transformOptions.translate?.x ?? 0;
                            const existsY = transformOptions.translate?.y ?? 0;
                            const existsZ = transformOptions.translate?.z ?? 0;
                            switch (item.name) {
                                case 'translate':
                                    transformOptions.translate = {
                                        x: calculateTranslate(item.args[0], existsX),
                                        y: calculateTranslate(item.args[1] ?? item.args[0], existsY),
                                        z: existsZ
                                    };
                                    break;
                                case 'translateX':
                                    transformOptions.translate = {
                                        x: calculateTranslate(item.args[0], existsX),
                                        y: existsY,
                                        z: existsZ
                                    };
                                    break;
                                case 'translateY':
                                    transformOptions.translate = {
                                        x: existsX,
                                        y: calculateTranslate(item.args[0], existsY),
                                        z: existsZ
                                    };
                                    break;
                                case 'translate3d':
                                    transformOptions.translate = {
                                        x: calculateTranslate(item.args[0], existsX),
                                        y: calculateTranslate(item.args[1], existsY),
                                        z: calculateTranslate(item.args[2], existsZ),
                                    };
                                    break;
                            }
                            transformValue.splice(i, 1);
                            --i;
                        }
                    }
                    // rotate3d 计算复杂丢失精度，暂不支持
                    /*const existsX = transformOptions.rotate?.x ?? 0
                    const existsY = transformOptions.rotate?.y ?? 0
                    const existsZ = transformOptions.rotate?.z ?? 1*/
                    const existsAngle = (transformOptions.rotate?.angle ?? 0) as number;
                    if (item.name.startsWith('rotate')) {
                        switch (item.name) {
                            case 'rotateZ':
                            case 'rotate':
                                transformOptions.rotate = {
                                    z: 1,
                                    perspective: Number.MAX_SAFE_INTEGER,
                                    angle: formatAngle(item.args[0]) + existsAngle,
                                    centerX: transformOrigin.centerX,
                                    centerY: transformOrigin.centerY,
                                    centerZ: 0
                                };
                                break;
                            case 'rotateX':
                                transformOptions.rotate = {
                                    x: 1,
                                    perspective: Number.MAX_SAFE_INTEGER,
                                    angle: formatAngle(item.args[0]) + existsAngle,
                                    centerX: transformOrigin.centerX,
                                    centerY: transformOrigin.centerY,
                                    centerZ: 0
                                };
                                break;
                            case 'rotateY':
                                transformOptions.rotate = {
                                    y: 1,
                                    perspective: Number.MAX_SAFE_INTEGER,
                                    angle: formatAngle(item.args[0]) + existsAngle,
                                    centerX: transformOrigin.centerX,
                                    centerY: transformOrigin.centerY,
                                    centerZ: 0
                                };
                                break;
                            case 'rotate3d':
                                transformOptions.rotate = {
                                    x: parseFloat(item.args[0]),
                                    y: parseFloat(item.args[1]),
                                    z: parseFloat(item.args[2]),
                                    perspective: Number.MAX_SAFE_INTEGER,
                                    angle: formatAngle(item.args[3]) + existsAngle,
                                    centerX: transformOrigin.centerX,
                                    centerY: transformOrigin.centerY,
                                    centerZ: 0
                                };
                                break;
                        }
                        transformValue.splice(i, 1);
                        --i;
                    }
                    // 处理 transformOrigin
                    const transformOriginIsNotDefault = transformOrigin.centerX !== DEFAULT_TRANSFORM_ORIGIN.centerX ||
                        transformOrigin.centerY !== DEFAULT_TRANSFORM_ORIGIN.centerY;
                    if (transformOriginIsNotDefault) {
                        if (item.name.startsWith('scale')) {
                            const existsX = (transformOptions.scale?.x ?? 1) as number;
                            const existsY = (transformOptions.scale?.y ?? 1) as number;
                            const existsZ = (transformOptions.scale?.z ?? 1) as number;
                            switch (item.name) {
                                case 'scale':
                                    transformOptions.scale = {
                                        x: parseFloat(item.args[0]) * existsX,
                                        y: (item.args[1] ? parseFloat(item.args[1]) : parseFloat(item.args[0])) * existsY,
                                        z: existsZ,
                                        centerX: transformOrigin.centerX,
                                        centerY: transformOrigin.centerY
                                    };
                                    break;
                                case 'scaleX':
                                    transformOptions.scale = {
                                        x: parseFloat(item.args[0]) * existsX,
                                        y: existsY,
                                        z: existsZ,
                                        centerX: transformOrigin.centerX,
                                        centerY: transformOrigin.centerY
                                    };
                                    break;
                                case 'scaleY':
                                    transformOptions.scale = {
                                        x: existsX,
                                        y: parseFloat(item.args[0]) * existsY,
                                        z: existsZ,
                                        centerX: transformOrigin.centerX,
                                        centerY: transformOrigin.centerY
                                    };
                                    break;
                                case 'scaleZ':
                                    transformOptions.scale = {
                                        x: existsX,
                                        y: existsY,
                                        z: parseFloat(item.args[0]) * existsZ,
                                        centerX: transformOrigin.centerX,
                                        centerY: transformOrigin.centerY
                                    };
                                    break;
                                case 'scale3d':
                                    transformOptions.scale = {
                                        x: parseFloat(item.args[0]) * existsX,
                                        y: parseFloat(item.args[1]) * existsY,
                                        z: parseFloat(item.args[2]) * existsZ,
                                        centerX: transformOrigin.centerX,
                                        centerY: transformOrigin.centerY
                                    };
                                    break;
                            }
                            transformValue.splice(i, 1);
                            --i;
                        }
                    }
                }
            }
        }
        catch (e) {
            fail?.();
            return;
        }
        success(formatTransformParse(transformValue), transformOptions);
        return;
    }
    fail?.();
}
interface TransFormOrigin {
    centerX: string | number;
    centerY: string | number;
}
function getTransformOriginValueKeepPercentage(value: string): string | number {
    if (value.endsWith('%')) {
        return value;
    }
    return parseFloat(value);
}
export function formatTransformOrigin(value: string): TransFormOrigin {
    value = value.replace(/\s+/g, ' ').trim();
    switch (value) {
        case 'top':
        case 'top center':
        case 'center top':
            return {
                centerX: '50%',
                centerY: '0%'
            };
        case 'bottom':
        case 'bottom center':
        case 'center bottom':
            return {
                centerX: '50%',
                centerY: '100%'
            };
        case 'left':
        case 'left center':
        case 'center left':
            return {
                centerX: '0%',
                centerY: '50%'
            };
        case 'right':
        case 'right center':
        case 'center right':
            return {
                centerX: '100%',
                centerY: '50%'
            };
        case 'center':
        case 'center center':
            return {
                centerX: '50%',
                centerY: '50%'
            };
        case 'top left':
        case 'left top':
            return {
                centerX: '0%',
                centerY: '0%'
            };
        case 'top right':
        case 'right top':
            return {
                centerX: '100%',
                centerY: '0%'
            };
        case 'bottom left':
        case 'left bottom':
            return {
                centerX: '0%',
                centerY: '100%'
            };
        case 'bottom right':
        case 'right bottom':
            return {
                centerX: '100%',
                centerY: '100%'
            };
        case 'center left':
        case 'left center':
            return {
                centerX: '0%',
                centerY: '50%'
            };
        case 'center right':
        case 'right center':
            return {
                centerX: '100%',
                centerY: '50%'
            };
        default:
            const values = value.split(' ');
            if (values.length === 1) {
                let centerX = getTransformOriginValueKeepPercentage(values[0]);
                return {
                    centerX: centerX,
                    centerY: centerX
                };
            }
            else if (values.length >= 2) {
                return {
                    centerX: getTransformOriginValueKeepPercentage(values[0]),
                    centerY: getTransformOriginValueKeepPercentage(values[1])
                };
            }
            return {
                centerX: '50%',
                centerY: '50%'
            };
    }
}
// http://www.w3.org/TR/css3-color/#svg-color
const EXTENDED_COLOR_KEYWORDS: Record<string, string> = {
    "aliceblue": "#F0F8FF",
    "antiquewhite": "#FAEBD7",
    "aqua": "#00FFFF",
    "aquamarine": "#7FFFD4",
    "azure": "#F0FFFF",
    "beige": "#F5F5DC",
    "bisque": "#FFE4C4",
    "black": "#000000",
    "blanchedalmond": "#FFEBCD",
    "blue": "#0000FF",
    "blueviolet": "#8A2BE2",
    "brown": "#A52A2A",
    "burlywood": "#DEB887",
    "cadetblue": "#5F9EA0",
    "chartreuse": "#7FFF00",
    "chocolate": "#D2691E",
    "coral": "#FF7F50",
    "cornflowerblue": "#6495ED",
    "cornsilk": "#FFF8DC",
    "crimson": "#DC143C",
    "cyan": "#00FFFF",
    "darkblue": "#00008B",
    "darkcyan": "#008B8B",
    "darkgoldenrod": "#B8860B",
    "darkgray": "#A9A9A9",
    "darkgreen": "#006400",
    "darkgrey": "#A9A9A9",
    "darkkhaki": "#BDB76B",
    "darkmagenta": "#8B008B",
    "darkolivegreen": "#556B2F",
    "darkorange": "#FF8C00",
    "darkorchid": "#9932CC",
    "darkred": "#8B0000",
    "darksalmon": "#E9967A",
    "darkseagreen": "#8FBC8F",
    "darkslateblue": "#483D8B",
    "darkslategray": "#2F4F4F",
    "darkslategrey": "#2F4F4F",
    "darkturquoise": "#00CED1",
    "darkviolet": "#9400D3",
    "deeppink": "#FF1493",
    "deepskyblue": "#00BFFF",
    "dimgray": "#696969",
    "dimgrey": "#696969",
    "dodgerblue": "#1E90FF",
    "firebrick": "#B22222",
    "floralwhite": "#FFFAF0",
    "forestgreen": "#228B22",
    "fuchsia": "#FF00FF",
    "gainsboro": "#DCDCDC",
    "ghostwhite": "#F8F8FF",
    "gold": "#FFD700",
    "goldenrod": "#DAA520",
    "gray": "#808080",
    "green": "#008000",
    "greenyellow": "#ADFF2F",
    "grey": "#808080",
    "honeydew": "#F0FFF0",
    "hotpink": "#FF69B4",
    "indianred": "#CD5C5C",
    "indigo": "#4B0082",
    "ivory": "#FFFFF0",
    "khaki": "#F0E68C",
    "lavender": "#E6E6FA",
    "lavenderblush": "#FFF0F5",
    "lawngreen": "#7CFC00",
    "lemonchiffon": "#FFFACD",
    "lightblue": "#ADD8E6",
    "lightcoral": "#F08080",
    "lightcyan": "#E0FFFF",
    "lightgoldenrodyellow": "#FAFAD2",
    "lightgray": "#D3D3D3",
    "lightgreen": "#90EE90",
    "lightgrey": "#D3D3D3",
    "lightpink": "#FFB6C1",
    "lightsalmon": "#FFA07A",
    "lightseagreen": "#20B2AA",
    "lightskyblue": "#87CEFA",
    "lightslategray": "#778899",
    "lightslategrey": "#778899",
    "lightsteelblue": "#B0C4DE",
    "lightyellow": "#FFFFE0",
    "lime": "#00FF00",
    "limegreen": "#32CD32",
    "linen": "#FAF0E6",
    "magenta": "#FF00FF",
    "maroon": "#800000",
    "mediumaquamarine": "#66CDAA",
    "mediumblue": "#0000CD",
    "mediumorchid": "#BA55D3",
    "mediumpurple": "#9370DB",
    "mediumseagreen": "#3CB371",
    "mediumslateblue": "#7B68EE",
    "mediumspringgreen": "#00FA9A",
    "mediumturquoise": "#48D1CC",
    "mediumvioletred": "#C71585",
    "midnightblue": "#191970",
    "mintcream": "#F5FFFA",
    "mistyrose": "#FFE4E1",
    "moccasin": "#FFE4B5",
    "navajowhite": "#FFDEAD",
    "navy": "#000080",
    "oldlace": "#FDF5E6",
    "olive": "#808000",
    "olivedrab": "#6B8E23",
    "orange": "#FFA500",
    "orangered": "#FF4500",
    "orchid": "#DA70D6",
    "palegoldenrod": "#EEE8AA",
    "palegreen": "#98FB98",
    "paleturquoise": "#AFEEEE",
    "palevioletred": "#DB7093",
    "papayawhip": "#FFEFD5",
    "peachpuff": "#FFDAB9",
    "peru": "#CD853F",
    "pink": "#FFC0CB",
    "plum": "#DDA0DD",
    "powderblue": "#B0E0E6",
    "purple": "#800080",
    "red": "#FF0000",
    "rosybrown": "#BC8F8F",
    "royalblue": "#4169E1",
    "saddlebrown": "#8B4513",
    "salmon": "#FA8072",
    "sandybrown": "#F4A460",
    "seagreen": "#2E8B57",
    "seashell": "#FFF5EE",
    "sienna": "#A0522D",
    "silver": "#C0C0C0",
    "skyblue": "#87CEEB",
    "slateblue": "#6A5ACD",
    "slategray": "#708090",
    "slategrey": "#708090",
    "snow": "#FFFAFA",
    "springgreen": "#00FF7F",
    "steelblue": "#4682B4",
    "tan": "#D2B48C",
    "teal": "#008080",
    "thistle": "#D8BFD8",
    "tomato": "#FF6347",
    "turquoise": "#40E0D0",
    "violet": "#EE82EE",
    "wheat": "#F5DEB3",
    "white": "#FFFFFF",
    "whitesmoke": "#F5F5F5",
    "yellow": "#FFFF00",
    "yellowgreen": "#9ACD32"
};
function normalizeColor(v: string) {
    v = (v || '').toString();
    if (v.match(/^#[0-9a-fA-F]{6}$/)) {
        return v;
    }
    // rgba issues 13371
    if (v.match(/^#[0-9a-fA-F]{4}$/)) {
        return '#' + v[1] + v[1] + v[2] + v[2] + v[3] + v[3] + v[4] + v[4];
    }
    if (v.match(/^#[0-9a-fA-F]{8}$/)) {
        return v;
    }
    if (v.match(/^#[0-9a-fA-F]{3}$/)) {
        return '#' + v[1] + v[1] + v[2] + v[2] + v[3] + v[3];
    }
    if (EXTENDED_COLOR_KEYWORDS[v]) {
        return EXTENDED_COLOR_KEYWORDS[v];
    }
    let r: number, g: number, b: number, a: number;
    const RGB_REGEXP = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/gi;
    const RGBA_REGEXP = /^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d*\.?\d+)\s*\)$/gi;
    let arrColor = RGB_REGEXP.exec(v);
    if (arrColor) {
        r = parseInt(arrColor[1]);
        g = parseInt(arrColor[2]);
        b = parseInt(arrColor[3]);
        if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
            return 'rgb(' + [r, g, b].join(',') + ')';
        }
    }
    if ((arrColor = RGBA_REGEXP.exec(v))) {
        r = parseInt(arrColor[1]);
        g = parseInt(arrColor[2]);
        b = parseInt(arrColor[3]);
        a = parseFloat(arrColor[4]);
        if (r >= 0 &&
            r <= 255 &&
            g >= 0 &&
            g <= 255 &&
            b >= 0 &&
            b <= 255 &&
            a >= 0 &&
            a <= 1) {
            return 'rgba(' + [r, g, b, a].join(',') + ')';
        }
    }
    if (v === 'transparent') {
        return 'rgba(0,0,0,0)';
    }
    return null;
}
export function formatColor(value: Object, success: (val: ResourceColor) => void, fail?: () => void) {
    if (typeof value === 'string') {
        let color = normalizeColor(value);
        if (color == null) {
            fail?.();
            return;
        }
        // #RRGGBBAA -> #AARRGGBB
        if (color.startsWith('#') && color.length === 9) {
            color = color.slice(-2) + color.slice(1, -2);
            success(`#${color}`);
            return;
        }
        success(color);
        return;
    }
    fail?.();
}
export function formatColorSync(value: Object): ResourceColor {
    if (typeof value === 'string') {
        let color = normalizeColor(value);
        if (color == null) {
            return value;
        }
        // #RRGGBBAA -> #AARRGGBB
        if (color.startsWith('#') && color.length === 9) {
            color = color.slice(-2) + color.slice(1, -2);
            return `#${color}`;
        }
        return color;
    }
    return value as ResourceColor;
}
const LINEAR_GRADIENT_DIRECTION_ANGLE: Map<string, number> = new Map([
    ['to bottom', 180],
    ['to top', 0],
    ['to right', 90],
    ['to left', 270],
    ['to bottom right', 135],
    ['to right bottom', 135],
    ['to top right', 45],
    ['to right top', 45],
    ['to bottom left', 225],
    ['to left bottom', 225],
    ['to top left', 315],
    ['to left top', 315],
]);
// TODO: 处理多个 linear-gradient 的情况
// TODO: 处理中间某个值不是颜色值的情况
// https://issuereporter.developer.huawei.com/detail/250109190336026/comment
export function formatLinearGradient(value: string, success: (val: LinearGradientValue) => void) {
    // remove linear-gradient( & )
    value = value.substring(16, value.length - 1);
    const values = value.split(/,(?=[^)]*(?:\(|$))/);
    let noDirection = false;
    let directionOrAngle = values[0].trim();
    let angle = 180;
    if (LINEAR_GRADIENT_DIRECTION_ANGLE.has(directionOrAngle)) {
        angle = LINEAR_GRADIENT_DIRECTION_ANGLE.get(directionOrAngle)!;
    }
    else if (directionOrAngle.endsWith('deg')) {
        angle = parseFloat(directionOrAngle);
    }
    else if (directionOrAngle.endsWith('turn')) {
        angle = parseFloat(directionOrAngle) * 360;
    }
    else {
        noDirection = true;
    }
    const colorItems = noDirection ? values : values.slice(1);
    const colors: Array<[
        Color | number | string,
        number
    ]> = [];
    colorItems.forEach((colorItem, index) => {
        const arr = colorItem.trim().replace(/(?<=,)\s+/g, '').split(' ');
        const color = normalizeColor(arr[0]) ?? arr[0];
        if (arr.length === 1) {
            let stop = index / (colorItems.length - 1);
            colors.push([color, stop]);
            return;
        }
        for (let i = 1; i < arr.length; i++) {
            const currentStop = parseFloat(arr[i]) / 100;
            colors.push([color, currentStop]);
        }
    });
    const res: LinearGradientValue = { angle, colors };
    success(res);
}
// TODO: 处理多个 box-shadow 的情况
export function formatBoxShadow(value: string, success: (val: ShadowOptions) => void) {
    // TODO: 阴影扩散半径 & inset 有问题 https://issuereporter.developer.huawei.com/detail/250111112316061/comment
    let radius = 0.1;
    let color = 'rgba(0, 0, 0, 1)';
    let offsetX = 0;
    let offsetY = 0;
    if (value.indexOf('rgb') != -1) {
        // 删除 rgb 或者 rgba 中可能存在的空格
        value = value.replace(/rgba?\(([^)]+)\)/g, (match) => match.replace(/\s+/g, ''));
    }
    let values = value.split(/\s+/);
    if (values[0] === 'inset') {
        values = values.slice(1);
    }
    const length = values.length;
    if (length >= 2) {
        offsetX = vp2px(formatLengthValueSync(values[0]));
        offsetY = vp2px(formatLengthValueSync(values[1]));
        if (length === 3) {
            color = normalizeColor(values[2]) ?? 'rgba(0, 0, 0, 1)';
        }
        else if (length === 4) {
            radius = vp2px(formatLengthValueSync(values[2]));
            color = normalizeColor(values[3]) ?? 'rgba(0, 0, 0, 1)';
        }
        if (length === 5) {
            radius = vp2px(formatLengthValueSync(values[2]));
            color = normalizeColor(values[4]) ?? 'rgba(0, 0, 0, 1)';
        }
    }
    const res: ShadowOptions = {
        radius,
        color,
        offsetX,
        offsetY
    };
    success(res);
}
const ANIMATION_CURVES = new Map<string, Curve>([
    ['ease', Curve.Ease],
    ['linear', Curve.Linear],
    ['ease-in', Curve.EaseIn],
    ['ease-out', Curve.EaseOut],
    ['ease-in-out', Curve.EaseInOut],
]);
function formatAnimationCurve(value: string) {
    return ANIMATION_CURVES.get(value) ?? Curve.Linear;
}
export function formatAnimationOptions(self: any, options: any, keyframes: any | any[], success: (param: KeyframeAnimateParam, keyframes: Array<KeyframeState>) => void) {
    const params = {} as KeyframeAnimateParam;
    if (options.delay) {
        params.delay = options.delay;
    }
    if (options.iterations) {
        params.iterations = options.iterations == Infinity ? -1 : options.iterations;
    }
    const totalDuration: number = options.duration ?? 0;
    const easing = formatAnimationCurve(options.easing);
    if (!Array.isArray(keyframes)) {
        keyframes = [keyframes];
    }
    // 遍历获取所有要修改的属性
    const initAttributes: any = {};
    keyframes.forEach((keyframe: any) => {
        Object.keys(keyframe).forEach(key => {
            if (key === 'offset') {
                return;
            }
            initAttributes[key] = null;
        });
    });
    // 获取元素初始状态
    Object.keys(initAttributes).forEach(key => {
        let style = (self.style as CSSStyleDeclaration).getPropertyValue(key);
        if (style !== undefined) {
            initAttributes[key] = style;
        }
    });
    // 硬编码处理 backgroundColor 无法恢复默认透明问题
    if (initAttributes['backgroundColor'] === '') {
        initAttributes['backgroundColor'] = 'transparent';
    }
    // 如果只有一帧，需要补充一个首帧
    if (keyframes.length === 1) {
        const fistKeyframeOptions: any = initAttributes;
        fistKeyframeOptions.offset = 0;
        keyframes.unshift(fistKeyframeOptions);
    }
    const firstKeyframe: any = keyframes[0];
    if (firstKeyframe.offset === undefined) {
        // 确保第一帧存在 offset
        firstKeyframe.offset = 0;
    }
    const lastKeyframe: any = keyframes[keyframes.length - 1];
    if (lastKeyframe.offset === undefined) {
        // 确保最后一帧存在 offset
        lastKeyframe.offset = 1;
    }
    else if (parseFloat(lastKeyframe.offset) !== 1.0) {
        // 如果数组中最后一项不是尾帧，补充一个尾帧
        const lastKeyframeOptions: any = initAttributes;
        lastKeyframeOptions.offset = 1;
        keyframes.push(lastKeyframeOptions);
    }
    let preDuration = 0;
    const keyframeStates: KeyframeState[] = keyframes.map((keyframe: any, index: number) => {
        if (keyframe['offset'] === undefined) {
            let j = index + 1;
            while (keyframes[j].offset === undefined) {
                j++;
            }
            const endOffset: number = keyframes[j].offset;
            const space = j - index + 1;
            keyframe['offset'] = (endOffset - keyframes[index - 1].offset) / space + keyframes[index - 1].offset;
        }
        const state = {
            curve: easing
        } as KeyframeState;
        state.duration = keyframe['offset'] * totalDuration - preDuration;
        preDuration += state.duration;
        state.event = () => {
            Object.keys(keyframe).forEach(key => {
                if (key === 'offset') {
                    return;
                }
                if (NEED_FORCE_RENDER_ATTRIBUTES.indexOf(key) != -1) {
                    self.needForceRenderAnimationKeys.push(key);
                }
                self.parseStyle(key, keyframe[key]);
            });
        };
        return state;
    });
    success(params, keyframeStates);
}
const TIME_UNITS = new Map<string, number>([
    ['ms', 1],
    ['s', 1000],
    ['m', 60 * 1000],
    ['h', 60 * 60 * 1000],
    ['d', 24 * 60 * 60 * 1000],
]);
export function parseTimeToMs(timeStr: string, success: (res: number) => void) {
    const match = timeStr.match(/^(\d*\.?\d+)([a-z]+)$/i);
    if (!match) {
        console.error('parseTimeToMs: Invalid time format');
        success(0);
        return;
    }
    const value = match[1];
    const unit = match[2];
    const multiplier = TIME_UNITS.get(unit.toLowerCase());
    if (!multiplier) {
        console.error('parseTimeToMs: Invalid time unit');
        success(0);
        return;
    }
    success(parseFloat(value) * multiplier);
}
export const NUMERIC_CSS_PROPS = new Set<string>([
    'height', 'width', 'minHeight', 'minWidth', 'maxHeight', 'maxWidth',
    'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
    'marginTop', 'marginRight', 'marginBottom', 'marginLeft',
    'top', 'right', 'bottom', 'left',
    'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth',
]);
export const NON_NUMERIC_CSS_PROPS = new Set<string>([
    'backgroundColor', 'color', 'opacity',
    'borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor',
    'borderTopRadius', 'borderRightRadius', 'borderBottomRadius', 'borderLeftRadius',
    'boxShadow', 'textShadow', 'textDecorationColor',
    'transform', 'transformOrigin', 'perspective', 'translate', 'scale', 'rotate',
    'fontSize', 'letterSpacing', 'wordSpacing', 'textIndent',
]);
const KEYS_NEED_GET_FROM_LAYOUT = new Set<string>([
    'height', 'width',
    'top', 'right', 'bottom', 'left',
    'marginTop', 'marginRight', 'marginBottom', 'marginLeft',
    'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
]);
function getLayoutValue(layoutNode: UniLayoutFlexNode, key: string): number {
    switch (key) {
        case 'width':
            return layoutNode.getLayoutWidth();
        case 'height':
            return layoutNode.getLayoutHeight();
        case 'top':
            return layoutNode.getLayoutTop();
        case 'right':
            return layoutNode.getLayoutRight();
        case 'bottom':
            return layoutNode.getLayoutBottom();
        case 'left':
            return layoutNode.getLayoutLeft();
        case 'marginTop':
            return layoutNode.getLayoutMargin(UniCssFlexEdge.Top);
        case 'marginRight':
            return layoutNode.getLayoutMargin(UniCssFlexEdge.Right);
        case 'marginBottom':
            return layoutNode.getLayoutMargin(UniCssFlexEdge.Bottom);
        case 'marginLeft':
            return layoutNode.getLayoutMargin(UniCssFlexEdge.Left);
        case 'paddingTop':
            return layoutNode.getLayoutPadding(UniCssFlexEdge.Top);
        case 'paddingRight':
            return layoutNode.getLayoutPadding(UniCssFlexEdge.Right);
        case 'paddingBottom':
            return layoutNode.getLayoutPadding(UniCssFlexEdge.Bottom);
        case 'paddingLeft':
            return layoutNode.getLayoutPadding(UniCssFlexEdge.Left);
        default:
            return 0;
    }
}
export function handleLayoutTransitionAnimation(isMounted: boolean, animatorsCache: Map<string, AnimatorResult>, layoutNode: UniLayoutFlexNode, style: CSSStyleDeclaration, transitionProperty: string[], isTransitionPropertyAll: boolean, transitionDuration: number, transitionDelay: number, transitionTimingFunction: string, key: string, context: UIContext | null, callback: (val: Array<Object | undefined>, isSync?: boolean) => void, args: Array<Object | undefined>, onFinish: () => void) {
    const originValByStyle = parseFloat(style?.getPropertyValue(key));
    const originVal = KEYS_NEED_GET_FROM_LAYOUT.has(key) ? getLayoutValue(layoutNode, key) : originValByStyle;
    if (key === 'width' && isNaN(originValByStyle)) {
        isMounted = false;
    }
    if (isMounted &&
        (transitionProperty.indexOf(key) !== -1 || isTransitionPropertyAll) &&
        NUMERIC_CSS_PROPS.has(key) &&
        (transitionDuration || transitionDelay) &&
        context) {
        const targetValue = args[args.length - 2];
        const diff = (targetValue as number) - originVal;
        if (diff === 0) {
            callback(args);
            return;
        }
        // 如果有相同 key 的动画在做，取消并删除
        const oldAnimator = animatorsCache.get(key);
        if (oldAnimator) {
            oldAnimator.pause();
            animatorsCache.delete(key);
        }
        const animator = context.createAnimator({
            duration: transitionDuration,
            delay: transitionDelay,
            easing: transitionTimingFunction,
            fill: 'forwards',
            direction: 'normal',
            iterations: 1,
            begin: 0,
            end: 100,
        });
        animator!.onFrame = (percent) => {
            const _value = originVal + diff * percent / 100;
            const _args = args;
            _args[args.length - 2] = _value;
            callback(_args, true);
        };
        animatorsCache.set(key, animator);
        animator!.onFinish = () => {
            animatorsCache.delete(key);
            onFinish?.();
        };
        animator!.play();
    }
    else {
        callback(args);
    }
}
export function handleNativeNodeTransitionAnimation(transitionProperty: string[], isTransitionPropertyAll: boolean, transitionDuration: number, transitionDelay: number, transitionTimingFunction: string, key: string, context: UIContext | null, onFinish: () => void, callback: () => void) {
    if ((transitionProperty.indexOf(key) !== -1 || isTransitionPropertyAll) &&
        NON_NUMERIC_CSS_PROPS.has(key) &&
        (transitionDuration || transitionDelay) &&
        context) {
        context.animateTo({
            duration: transitionDuration,
            delay: transitionDelay,
            curve: transitionTimingFunction,
            onFinish,
        }, () => {
            callback();
        });
    }
    else {
        callback();
    }
}
// TODO: 是否走一个通用的解析通道处理
const NEED_EXPAND_TRANSITION_ANIMATION_PROPERTY = new Map<string, string[]>([
    ['borderColor', ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor']],
    ['background-color', ['backgroundColor']],
    ['transform', ['transform', 'translate', 'scale', 'rotate', 'transformOrigin']],
]);
export function expandTransitionAnimationProperty(transitionProperty: string[]) {
    transitionProperty.forEach((property, index) => {
        const expandProperties = NEED_EXPAND_TRANSITION_ANIMATION_PROPERTY.get(property);
        if (expandProperties) {
            transitionProperty.splice(index, 1, ...expandProperties);
        }
    });
}
interface PointerEvents {
    hitTestMode: HitTestMode;
    responseRegion: Rectangle;
}
export function transformPointerEvents(value: string): PointerEvents {
    switch (value) {
        case 'none':
            return {
                hitTestMode: HitTestMode.None,
                responseRegion: {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }
            };
        case 'auto':
        default:
            return {
                hitTestMode: HitTestMode.Default,
                responseRegion: {
                    x: 0,
                    y: 0,
                    width: '100%',
                    height: '100%'
                }
            };
    }
}
