import { DOMPoint as IDOMPoint, DOMPointInit as IDOMPointInit, DOMMatrix as IDOMMatrix } from './types';
export declare class DOMPoint implements IDOMPoint {
    x: number;
    y: number;
    z: number;
    w: number;
    static fromPoint(point: IDOMPointInit): IDOMPoint;
    constructor(init?: IDOMPointInit);
    toJSON(): {
        x: number;
        y: number;
        z: number;
        w: number;
    };
    matrixTransform(matrix: IDOMMatrix): IDOMPoint;
}
