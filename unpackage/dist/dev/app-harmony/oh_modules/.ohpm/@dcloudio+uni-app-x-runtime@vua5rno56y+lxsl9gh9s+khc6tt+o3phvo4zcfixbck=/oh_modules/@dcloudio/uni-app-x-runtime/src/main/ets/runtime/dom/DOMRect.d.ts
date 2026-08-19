import { DOMRect as IDOMRect } from '@dcloudio/uni-app-x/types/native';
export declare class DOMRect implements IDOMRect {
    private _x;
    private _y;
    private _width;
    private _height;
    constructor(x?: number, y?: number, width?: number, height?: number);
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    get width(): number;
    set width(width: number);
    get height(): number;
    set height(height: number);
    get left(): number;
    set left(left: number);
    get top(): number;
    set top(top: number);
    get right(): number;
    set right(right: number);
    get bottom(): number;
    set bottom(bottom: number);
    toJSON(): Object;
}
