import { CSSTransformComponent as ICSSTransformComponent, DOMMatrix as IDOMMatrix } from './types';
import { DOMMatrix } from './DOMMatrix';
export declare class CSSTransformComponent implements ICSSTransformComponent {
    is2D: boolean;
    protected _matrix: DOMMatrix;
    toMatrix(): IDOMMatrix;
    toString(): string;
}
