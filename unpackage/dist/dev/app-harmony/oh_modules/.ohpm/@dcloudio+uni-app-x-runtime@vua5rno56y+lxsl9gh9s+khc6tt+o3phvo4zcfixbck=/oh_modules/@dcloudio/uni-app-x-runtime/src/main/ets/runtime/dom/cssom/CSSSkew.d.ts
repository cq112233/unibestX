import { CSSSkew as ICSSSkew, CSSSkewX as ICSSSkewX, CSSSkewY as ICSSSkewY, CSSNumericValue as ICSSNumericValue, DOMMatrix as IDOMMatrix } from './types';
import { CSSTransformComponent } from './CSSTransformComponent';
import { CSSUnitValue } from './CSSUnitValue';
export declare class CSSSkew extends CSSTransformComponent implements ICSSSkew {
    ax: CSSUnitValue;
    ay: CSSUnitValue;
    private computedMatrix;
    constructor(ax: ICSSNumericValue, ay: ICSSNumericValue);
    toMatrix(): IDOMMatrix;
    toString(): string;
}
export declare class CSSSkewX extends CSSTransformComponent implements ICSSSkewX {
    ax: CSSUnitValue;
    private computedMatrix;
    constructor(ax: ICSSNumericValue);
    toMatrix(): IDOMMatrix;
    toString(): string;
}
export declare class CSSSkewY extends CSSTransformComponent implements ICSSSkewY {
    ay: CSSUnitValue;
    private computedMatrix;
    constructor(ay: ICSSNumericValue);
    toMatrix(): IDOMMatrix;
    toString(): string;
}
