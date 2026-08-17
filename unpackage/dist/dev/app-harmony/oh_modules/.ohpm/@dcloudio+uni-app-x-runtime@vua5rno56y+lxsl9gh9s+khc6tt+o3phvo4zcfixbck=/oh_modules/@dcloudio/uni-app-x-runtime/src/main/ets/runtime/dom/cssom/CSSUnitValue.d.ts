import { CSSUnitValue as ICSSUnitValue, CSSNumberish as ICSSNumberish } from './types';
import { CSSNumericValue } from './CSSNumericValue';
export declare enum PercentUnit {
    percent = "percent"
}
export declare enum LengthUnit {
    px = "px",
    rpx = "rpx",
    upx = "upx",
    in = "in",
    cm = "cm"
}
export declare enum AngleUnit {
    deg = "deg",
    rad = "rad",
    turn = "turn"
}
export declare enum TimeUnit {
    s = "s",
    ms = "ms"
}
export declare enum NumberUnit {
    number = "number"
}
export declare enum UnitType {
    length = 0,
    percent = 1,
    number = 2,
    angle = 3,
    time = 4
}
export declare function toPx(value: CSSUnitValue): number;
export declare function toDeg(value: CSSUnitValue): number;
export declare function toRad(value: CSSUnitValue): number;
export declare function toCSSUnitValue(value: string | number, validTypes: UnitType[]): CSSUnitValue | undefined;
export declare class CSSUnitValue extends CSSNumericValue implements ICSSUnitValue {
    static parse(cssText: string): CSSUnitValue;
    unit: string;
    value: number;
    constructor(value: number, unit: string);
    toString(): string;
}
export declare function isCSSNumberish(value: any): value is ICSSNumberish;
export declare function numberishToCSSUnitValue(value: ICSSNumberish): CSSUnitValue;
