import { DOMMatrix as IDOMMatrix, DOMMatrixInit, DOMPointInit as IDOMPointInit, DOMPoint as IDOMPoint } from './types'
import {
  DOMPoint
} from './DOMPoint'
import matrix4 from '@ohos.matrix4';

export function createDOMMatrixFormMatrix4(matrix: matrix4.Matrix4Transit): IDOMMatrix {
  const result = new DOMMatrix()
  result._matrix = matrix
  return result
}

/**
 * 
 * @param angle in degrees
 * @returns 
 */
function formatSkewValue(angle: number): number {
  return Math.tan(angle / 180 * Math.PI)
}

export class DOMMatrix implements IDOMMatrix {
  /**
   * @internal
   */
  _matrix: matrix4.Matrix4Transit

  constructor(...args: number[]) {
    if (args.length === 0) {
      this._matrix = matrix4.init([
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
      ])
    } else if (args.length === 6) {
      this._matrix = matrix4.init([
        args[0], args[1], 0, 0,
        args[2], args[3], 0, 0,
        0, 0, 1, 0,
        args[4], args[5], 0, 1
      ])
    } else if (args.length === 16) {
      this._matrix = matrix4.init([
        args[0], args[1], args[2], args[3],
        args[4], args[5], args[6], args[7],
        args[8], args[9], args[10], args[11],
        args[12], args[13], args[14], args[15]
      ])
    } else {
      throw new Error('Failed to construct DOMMatrix: invalid number of arguments')
    }
  }

  flipX(): IDOMMatrix {
    return createDOMMatrixFormMatrix4(
      this._matrix.copy()
        .scale({
          x: -1,
          y: 1,
          z: 1
        })
    )
  }

  flipY(): IDOMMatrix {
    return createDOMMatrixFormMatrix4(
      this._matrix.copy()
        .scale({
          x: 1,
          y: -1,
          z: 1
        })
    )
  }

  inverse(): IDOMMatrix {
    return createDOMMatrixFormMatrix4(this._matrix.copy().invert())
  }

  invertSelf(): IDOMMatrix {
    this._matrix.invert()
    return this
  }

  multiply(other?: DOMMatrixInit | undefined): IDOMMatrix {
    if (other instanceof DOMMatrix) {
      return createDOMMatrixFormMatrix4(this._matrix.copy().combine((other as object as DOMMatrix)._matrix))
    } else {
      throw new Error('multiply() method only accepts DOMMatrix')
    }
  }

  rotate(rotX?: number | undefined, rotY?: number | undefined, rotZ?: number | undefined): IDOMMatrix {
    return createDOMMatrixFormMatrix4(
      this._matrix.copy()
        .rotate({
          x: rotX,
          y: rotY,
          z: rotZ
        })
    )
  }


  multiplySelf(matrix: IDOMMatrix): IDOMMatrix {
    this._matrix.combine((matrix as object as DOMMatrix)._matrix)
    return this
  }

  preMultiplySelf(other?: DOMMatrixInit | undefined): IDOMMatrix {
    if (other instanceof DOMMatrix) {
      this._matrix = (other as object as DOMMatrix)._matrix.combine(this._matrix)
      return this
    } else {
      throw new Error('preMultiplySelf() method only accepts DOMMatrix')
    }
  }

  rotateAxisAngle(x?: number | undefined, y?: number | undefined, z?: number | undefined,
    angle?: number | undefined): IDOMMatrix {
    return createDOMMatrixFormMatrix4(
      this._matrix.copy()
        .rotate({
          x: x,
          y: y,
          z: z,
          angle: angle
        })
    )
  }

  rotateFromVector(x?: number | undefined, y?: number | undefined): IDOMMatrix {
    return createDOMMatrixFormMatrix4(
      this._matrix.copy()
        .rotate({
          x: x,
          y: y
        })
    )
  }


  rotateAxisAngleSelf(x?: number | undefined, y?: number | undefined, z?: number | undefined,
    angle?: number | undefined): IDOMMatrix {
    this._matrix.rotate({
      x: x,
      y: y,
      z: z,
      angle: angle
    })
    return this
  }

  rotateFromVectorSelf(x?: number | undefined, y?: number | undefined): IDOMMatrix {
    this._matrix.rotate({
      x: x,
      y: y
    })
    return this
  }

  rotateSelf(rotX?: number | undefined, rotY?: number | undefined, rotZ?: number | undefined): IDOMMatrix {
    this._matrix.rotate({
      x: rotX,
      y: rotY,
      z: rotZ
    })
    return this
  }

  scale(scaleX?: number | undefined, scaleY?: number | undefined, scaleZ?: number | undefined,
    originX?: number | undefined, originY?: number | undefined, originZ?: number | undefined): IDOMMatrix {
    return createDOMMatrixFormMatrix4(
      this._matrix.copy()
        .scale({
          x: scaleX,
          y: scaleY,
          z: scaleZ,
          centerX: originX,
          centerY: originY
        })
    )
  }

  scale3d(scale?: number | undefined, originX?: number | undefined, originY?: number | undefined,
    originZ?: number | undefined): IDOMMatrix {
    return createDOMMatrixFormMatrix4(
      this._matrix.copy()
        .scale({
          x: scale,
          y: scale,
          z: scale,
          centerX: originX,
          centerY: originY
        })
    )
  }

  scale3dSelf(scale?: number | undefined, originX?: number | undefined, originY?: number | undefined,
    originZ?: number | undefined): IDOMMatrix {
    this._matrix.scale({
      x: scale,
      y: scale,
      z: scale,
      centerX: originX,
      centerY: originY
    })
    return this
  }

  scaleNonUniform(scaleX?: number | undefined, scaleY?: number | undefined): IDOMMatrix {
    throw new Error('scaleNonUniform() is not implemented')
  }

  scaleSelf(scaleX?: number | undefined, scaleY?: number | undefined, scaleZ?: number | undefined,
    originX?: number | undefined, originY?: number | undefined, originZ?: number | undefined): IDOMMatrix {
    this._matrix.scale({
      x: scaleX,
      y: scaleY,
      z: scaleZ,
      centerX: originX,
      centerY: originY
    })
    return this
  }

  setMatrixValue(transformList: string): IDOMMatrix {
    throw new Error('setMatrixValue() is not implemented')
  }

  skewX(sx?: number | undefined): IDOMMatrix {
    if (!sx) {
      return createDOMMatrixFormMatrix4(this._matrix.copy())

    }
    return createDOMMatrixFormMatrix4(
      this._matrix.copy()
        .combine(
          matrix4.init([
            1, formatSkewValue(sx), 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
          ])
        )
    )
  }

  skewY(sy?: number | undefined): IDOMMatrix {
    if (!sy) {
      return createDOMMatrixFormMatrix4(this._matrix.copy())
    }
    return createDOMMatrixFormMatrix4(
      this._matrix.copy()
        .combine(
          matrix4.init([
            1, 0, 0, 0,
            formatSkewValue(sy), 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
          ])
        )
    )
  }

  skewXSelf(sx?: number | undefined): IDOMMatrix {
    if (!sx) {
      return this
    }
    this._matrix.combine(
      matrix4.init([
        1, formatSkewValue(sx), 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
      ])
    )
    return this
  }

  skewYSelf(sy?: number | undefined): IDOMMatrix {
    if (!sy) {
      return this
    }
    this._matrix.combine(
      matrix4.init([
        1, 0, 0, 0,
        formatSkewValue(sy), 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
      ])
    )
    return this
  }

  transformPoint(point?: IDOMPointInit | undefined): IDOMPoint {
    if (point) {
      const harmonyPoint = this._matrix.transformPoint([point.x, point.y])
      return new DOMPoint({
        x: harmonyPoint[0],
        y: harmonyPoint[1]
      })
    } else {
      throw new Error('transformPoint() method only accepts DOMPoint')
    }
  }

  translate(tx?: number | undefined, ty?: number | undefined, tz?: number | undefined): IDOMMatrix {
    return createDOMMatrixFormMatrix4(
      this._matrix.copy()
        .translate({
          x: tx,
          y: ty,
          z: tz
        })
    )
  }

  translateSelf(tx?: number | undefined, ty?: number | undefined, tz?: number | undefined): IDOMMatrix {
    this._matrix.translate({
      x: tx,
      y: ty,
      z: tz
    })
    return this
  }

  toFloat32Array(): Float32Array {
    throw new Error('toFloat32Array() is not implemented')
  }

  toFloat64Array(): Float64Array {
    throw new Error('toFloat64Array() is not implemented')
  }

  toJSON(): any {
    throw new Error('toJSON() is not implemented')
  }

  get a(): number {
    throw new Error('get a() is not implemented')
  }

  get b(): number {
    throw new Error('get b() is not implemented')
  }

  get c(): number {
    throw new Error('get c() is not implemented')
  }

  get d(): number {
    throw new Error('get d() is not implemented')
  }

  get e(): number {
    throw new Error('get e() is not implemented')
  }

  get f(): number {
    throw new Error('get f() is not implemented')
  }

  get is2D(): boolean {
    throw new Error('get is2D() is not implemented')
  }

  get isIdentity(): boolean {
    throw new Error('get isIdentity() is not implemented')
  }

  get m11(): number {
    throw new Error('get m11() is not implemented')
  }

  get m12(): number {
    throw new Error('get m12() is not implemented')
  }

  get m13(): number {
    throw new Error('get m13() is not implemented')
  }

  get m14(): number {
    throw new Error('get m14() is not implemented')
  }

  get m21(): number {
    throw new Error('get m21() is not implemented')
  }

  get m22(): number {
    throw new Error('get m22() is not implemented')
  }

  get m23(): number {
    throw new Error('get m23() is not implemented')
  }

  get m24(): number {
    throw new Error('get m24() is not implemented')
  }

  get m31(): number {
    throw new Error('get m31() is not implemented')
  }

  get m32(): number {
    throw new Error('get m32() is not implemented')
  }

  get m33(): number {
    throw new Error('get m33() is not implemented')
  }

  get m34(): number {
    throw new Error('get m34() is not implemented')
  }

  get m41(): number {
    throw new Error('get m41() is not implemented')
  }

  get m42(): number {
    throw new Error('get m42() is not implemented')
  }

  get m43(): number {
    throw new Error('get m43() is not implemented')
  }

  get m44(): number {
    throw new Error('get m44() is not implemented')
  }

  toString(): string {
    throw new Error('toString() is not implemented')
  }
}