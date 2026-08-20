import {
  CSSScale as ICSSScale,
  CSSNumberish as ICSSNumberish,
  DOMMatrix as IDOMMatrix
} from './types'
import { CSSTransformComponent } from './CSSTransformComponent'
import { CSSUnitValue, isCSSNumberish, numberishToCSSUnitValue } from './CSSUnitValue'

export class CSSScale extends CSSTransformComponent implements ICSSScale {
  x: CSSUnitValue
  y: CSSUnitValue
  z: CSSUnitValue

  private computedMatrix: IDOMMatrix | undefined

  constructor(x: ICSSNumberish, y: ICSSNumberish, z?: ICSSNumberish) {
    super()
    if (
      !isCSSNumberish(x) ||
      !isCSSNumberish(y) ||
      (z != null && !isCSSNumberish(z))
    ) {
      throw new TypeError('Failed to construct CSSScale: constructor parameters must be numbers')
    }
    this.x = numberishToCSSUnitValue(x)
    this.y = numberishToCSSUnitValue(y)
    this.z = numberishToCSSUnitValue(z ? z : 1)
    this.is2D = z == null
  }

  override toMatrix(): IDOMMatrix {
    if (this.computedMatrix) {
      return this.computedMatrix
    }
    this.computedMatrix = this._matrix.scale3dSelf(this.x.value, this.y.value, this.z.value)
    return this.computedMatrix
  }

  public toString(): string {
    if (this.is2D) {
      return `scale(${this.x.toString()}, ${this.y.toString()})`
    }
    return `scale3d(${this.x.toString()}, ${this.y.toString()}, ${this.z.toString()})`
  }
}