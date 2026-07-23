import { DOMRect as IDOMRect, } from '@dcloudio/uni-app-x/types/native'

export class DOMRect implements IDOMRect {
  private _x: number;
  private _y: number;
  private _width: number;
  private _height: number;

  constructor(x?: number, y?: number, width?: number, height?: number) {
    this._x = x ?? 0;
    this._y = y ?? 0;
    this._width = width ?? 0;
    this._height = height ?? 0;
  }

  get x(): number {
    return this._x
  }

  set x(x: number) {
    this._x = x
  }

  get y(): number {
    return this._y
  }

  set y(y: number) {
    this._y = y
  }

  get width(): number {
    return this._width
  }

  set width(width: number) {
    this._width = width
  }

  get height(): number {
    return this._height
  }

  set height(height: number) {
    this._height = height
  }

  get left(): number {
    if (this._width >= 0) {
      return this._x
    }
    return this._x + this._width
  }

  set left(left: number) {
    // do noting
  }

  get top(): number {
    if (this._height >= 0) {
      return this._y
    }
    return this._y + this._height
  }

  set top(top: number) {
    // do noting
  }

  get right(): number {
    if (this._width >= 0) {
      return this._x + this._width
    }
    return this._x
  }

  set right(right: number) {
    // do noting
  }

  get bottom(): number {
    if (this._height >= 0) {
      return this._y + this._height
    }
    return this._y
  }

  set bottom(bottom: number) {
    // do noting
  }

  toJSON(): Object {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      left: this.left,
      top: this.top,
      right: this.right,
      bottom: this.bottom
    }
  }
}
