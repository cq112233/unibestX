import { CSSTranslate as ICSSTranslate, CSSNumericValue as ICSSNumericValue, DOMMatrix as IDOMMatrix } from './types';
import { CSSTransformComponent } from './CSSTransformComponent';
export declare class CSSTranslate extends CSSTransformComponent implements ICSSTranslate {
    x: ICSSNumericValue;
    y: ICSSNumericValue;
    z: ICSSNumericValue;
    private computedMatrix;
    constructor(x: ICSSNumericValue, y: ICSSNumericValue, z?: ICSSNumericValue);
    toMatrix(): IDOMMatrix;
    toString(): string;
}
