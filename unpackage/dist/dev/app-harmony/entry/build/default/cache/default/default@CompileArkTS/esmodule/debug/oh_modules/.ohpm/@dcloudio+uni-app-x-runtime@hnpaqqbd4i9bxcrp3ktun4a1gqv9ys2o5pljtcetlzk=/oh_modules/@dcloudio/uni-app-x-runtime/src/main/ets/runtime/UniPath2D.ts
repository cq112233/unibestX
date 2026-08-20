import type { IPath2D } from './iPath2D';
export class UniPath2D extends Path2D implements IPath2D {
    constructor() {
        super();
    }
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void {
        if (counterclockwise) {
            super.arc(px2vp(x), px2vp(y), px2vp(radius), startAngle, endAngle, counterclockwise);
        }
        else {
            super.arc(px2vp(x), px2vp(y), px2vp(radius), startAngle, endAngle);
        }
    }
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void {
        super.arcTo(px2vp(x1), px2vp(y1), px2vp(x2), px2vp(y2), px2vp(radius));
    }
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) {
        super.bezierCurveTo(px2vp(cp1x), px2vp(cp1y), px2vp(cp2x), px2vp(cp2y), px2vp(x), px2vp(y));
    }
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void {
        if (counterclockwise) {
            super.ellipse(px2vp(x), px2vp(y), px2vp(radiusX), px2vp(radiusY), rotation, startAngle, endAngle, counterclockwise);
        }
        else {
            super.ellipse(px2vp(x), px2vp(y), px2vp(radiusX), px2vp(radiusY), rotation, startAngle, endAngle);
        }
    }
    moveTo(x: number, y: number) {
        super.moveTo(px2vp(x), px2vp(y));
    }
    lineTo(x: number, y: number) {
        super.lineTo(px2vp(x), px2vp(y));
    }
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number) {
        super.quadraticCurveTo(px2vp(cpx), px2vp(cpy), px2vp(x), px2vp(y));
    }
    rect(x: number, y: number, w: number, h: number): void {
        super.rect(px2vp(x), px2vp(y), px2vp(w), px2vp(h));
    }
}
