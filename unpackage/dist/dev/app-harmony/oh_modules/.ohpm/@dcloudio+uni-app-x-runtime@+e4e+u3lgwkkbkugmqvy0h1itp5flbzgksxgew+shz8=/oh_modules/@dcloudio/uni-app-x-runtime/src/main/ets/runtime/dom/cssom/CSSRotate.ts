import {
  CSSRotate as ICSSRotate,
  CSSNumberish as ICSSNumberish,
  DOMMatrix as IDOMMatrix
} from './types'
import { CSSTransformComponent } from './CSSTransformComponent'
import { CSSUnitValue, AngleUnit, isCSSNumberish, numberishToCSSUnitValue } from './CSSUnitValue'

export class CSSRotate extends CSSTransformComponent implements ICSSRotate {
  x: CSSUnitValue
  y: CSSUnitValue
  z: CSSUnitValue
  angle: CSSUnitValue

  private computedMatrix: IDOMMatrix | undefined

  constructor(x: ICSSNumberish, y: ICSSNumberish, z: ICSSNumberish | undefined, angle: CSSUnitValue) {
    super()
    if (
      !isCSSNumberish(x) ||
      !isCSSNumberish(y) ||
      (z != null && !isCSSNumberish(z))
    ) {
      throw new TypeError('Failed to construct CSSScale: constructor parameters must be CSSNumberish')
    }
    if (!(angle instanceof CSSUnitValue) || !AngleUnit[angle.unit]) {
      throw new TypeError('Failed to construct CSSRotate: angle parameter is not of type CSSUnitValue with angle unit')
    }
    this.x = numberishToCSSUnitValue(x)
    this.y = numberishToCSSUnitValue(y)
    this.z = numberishToCSSUnitValue(z ? z : 1)
    this.angle = angle
    this.is2D = x != null || y != null
  }

  override toMatrix(): IDOMMatrix {
    if (this.computedMatrix) {
      return this.computedMatrix
    }
    this.computedMatrix = this._matrix.rotateSelf(this.x.value, this.y.value, this.z.value)
    return this.computedMatrix
  }

  public toString(): string {
    if (this.is2D) {
      return `rotate(${this.angle.toString()})`
    }
    return `rotate3d(${this.x.toString()}, ${this.y.toString()}, ${this.z.toString()}, ${this.angle.toString()})`
  }
}