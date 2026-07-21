import {
  CSSTranslate as ICSSTranslate,
  CSSNumericValue as ICSSNumericValue,
  DOMMatrix as IDOMMatrix
} from './types'
import { CSSTransformComponent } from './CSSTransformComponent'
import { CSSUnitValue, LengthUnit, toPx } from './CSSUnitValue'

export class CSSTranslate extends CSSTransformComponent implements ICSSTranslate {
  x: ICSSNumericValue
  y: ICSSNumericValue
  z: ICSSNumericValue

  private computedMatrix: IDOMMatrix | undefined

  constructor(x: ICSSNumericValue, y: ICSSNumericValue, z?: ICSSNumericValue) {
    super()
    if (
      !(x instanceof CSSUnitValue) ||
      !(y instanceof CSSUnitValue) ||
      (z && !(z instanceof CSSUnitValue))
    ) {
      throw new TypeError('Failed to construct CSSTranslate: parameter is not of type CSSNumericValue')
    }
    this.x = x
    this.y = y
    this.z = z ? z : new CSSUnitValue(0, LengthUnit.px)
    this.is2D = z == null
  }

  override toMatrix(): IDOMMatrix {
    if (this.computedMatrix) {
      return this.computedMatrix
    }
    try {
      const xPx = toPx(this.x as CSSUnitValue)
      const yPx = toPx(this.y as CSSUnitValue)
      const zPx = toPx(this.z as CSSUnitValue)
      this.computedMatrix = this._matrix.translateSelf(xPx, yPx, zPx)
      return this._matrix
    } catch (error) {
      throw new Error('Failed to execute toMatrix: Cannot create matrix if units are not compatible with px')
    }
  }

  public toString(): string {
    if (this.is2D) {
      return `translate(${this.x.toString()}, ${this.y.toString()})`
    }
    return `translate3d(${this.x.toString()}, ${this.y.toString()}, ${this.z.toString()})`
  }
}