import {
  DOMPoint as IDOMPoint,
  DOMPointInit as IDOMPointInit,
  DOMMatrix as IDOMMatrix
} from './types'

export class DOMPoint implements IDOMPoint {
  x: number
  y: number
  z: number
  w: number

  static fromPoint(point: IDOMPointInit): IDOMPoint {
    return new DOMPoint(point)
  }

  constructor(init?: IDOMPointInit) {
    this.x = init?.x ?? 0
    this.y = init?.y ?? 0
    this.z = init?.z ?? 0
    this.w = init?.w ?? 1
  }

  toJSON() {
    return {
      x: this.x,
      y: this.y,
      z: this.z,
      w: this.w
    }
  }

  matrixTransform(matrix: IDOMMatrix): IDOMPoint {
    return matrix.transformPoint(this)
  }

}