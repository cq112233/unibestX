import { CSSRotate as ICSSRotate, CSSNumberish as ICSSNumberish, DOMMatrix as IDOMMatrix } from './types';
import { CSSTransformComponent } from './CSSTransformComponent';
import { CSSUnitValue } from './CSSUnitValue';
export declare class CSSRotate extends CSSTransformComponent implements ICSSRotate {
    x: CSSUnitValue;
    y: CSSUnitValue;
    z: CSSUnitValue;
    angle: CSSUnitValue;
    private computedMatrix;
    constructor(x: ICSSNumberish, y: ICSSNumberish, z: ICSSNumberish | undefined, angle: CSSUnitValue);
    toMatrix(): IDOMMatrix;
    toString(): string;
}
