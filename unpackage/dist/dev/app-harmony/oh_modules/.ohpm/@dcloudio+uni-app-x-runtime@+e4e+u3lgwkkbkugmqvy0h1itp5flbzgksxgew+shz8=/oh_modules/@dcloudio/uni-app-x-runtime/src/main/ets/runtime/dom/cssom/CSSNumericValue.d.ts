import { CSSNumericValue as ICSSNumericValue, CSSNumberish as ICSSNumberish, CSSUnitValue as ICSSUnitValue, CSSMathSum as ICSSMathSum, CSSNumericType as ICSSNumericType } from './types';
import { CSSStyleValue } from './CSSStyleValue';
export declare class CSSNumericValue extends CSSStyleValue implements ICSSNumericValue {
    add(...values: ICSSNumberish[]): CSSNumericValue;
    div(...values: ICSSNumberish[]): ICSSNumericValue;
    equals(...values: ICSSNumberish[]): boolean;
    max(...values: ICSSNumberish[]): CSSNumericValue;
    min(...values: ICSSNumberish[]): CSSNumericValue;
    mul(...values: ICSSNumberish[]): CSSNumericValue;
    sub(...values: ICSSNumberish[]): CSSNumericValue;
    to(unit: string): ICSSUnitValue;
    toSum(...units: string[]): ICSSMathSum;
    type(): ICSSNumericType;
}
