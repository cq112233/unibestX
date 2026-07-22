import { CSSTransformValue as ICSSTransformValue, CSSTransformComponent as ICSSTransformComponent, DOMMatrix as IDOMMatrix } from './types';
import { CSSStyleValue } from './CSSStyleValue';
export declare class CSSTransformValue extends CSSStyleValue implements ICSSTransformValue {
    [key: number]: ICSSTransformComponent;
    private _transforms;
    length: number;
    constructor(transforms: Array<ICSSTransformComponent>);
    get is2D(): boolean;
    toMatrix(): IDOMMatrix;
    toString(): string;
    forEach(callbackfn: (value: ICSSTransformComponent, key: number, parent: ICSSTransformValue) => void, thisArg?: any): void;
}
