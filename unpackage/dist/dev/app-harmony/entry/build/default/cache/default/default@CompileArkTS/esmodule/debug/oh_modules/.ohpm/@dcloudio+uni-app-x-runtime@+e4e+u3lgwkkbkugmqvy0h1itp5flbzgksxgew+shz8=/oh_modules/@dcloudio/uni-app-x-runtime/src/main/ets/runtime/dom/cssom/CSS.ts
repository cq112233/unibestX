import { CSSUnitValue, LengthUnit, PercentUnit, } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/cssom/CSSUnitValue&1.0.0";
export function px(value: number): CSSUnitValue {
    return new CSSUnitValue(value, LengthUnit.px);
}
export function rpx(value: number): CSSUnitValue {
    return new CSSUnitValue(value, LengthUnit.rpx);
}
export function upx(value: number): CSSUnitValue {
    return new CSSUnitValue(value, LengthUnit.upx);
}
function _in(value: number): CSSUnitValue {
    return new CSSUnitValue(value, LengthUnit.in);
}
export function cm(value: number): CSSUnitValue {
    return new CSSUnitValue(value, LengthUnit.cm);
}
export function percent(value: number): CSSUnitValue {
    return new CSSUnitValue(value, PercentUnit.percent);
}
export { _in as in, };
