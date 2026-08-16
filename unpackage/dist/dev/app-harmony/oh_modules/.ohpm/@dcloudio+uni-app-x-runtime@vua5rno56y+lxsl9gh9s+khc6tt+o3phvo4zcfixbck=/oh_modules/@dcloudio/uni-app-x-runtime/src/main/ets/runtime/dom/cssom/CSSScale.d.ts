import { CSSScale as ICSSScale, CSSNumberish as ICSSNumberish, DOMMatrix as IDOMMatrix } from './types';
import { CSSTransformComponent } from './CSSTransformComponent';
import { CSSUnitValue } from './CSSUnitValue';
export declare class CSSScale extends CSSTransformComponent implements ICSSScale {
    x: CSSUnitValue;
    y: CSSUnitValue;
    z: CSSUnitValue;
    private computedMatrix;
    constructor(x: ICSSNumberish, y: ICSSNumberish, z?: ICSSNumberish);
    toMatrix(): IDOMMatrix;
    toString(): string;
}
