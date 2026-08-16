import {
  CSSSkew as ICSSSkew,
  CSSSkewX as ICSSSkewX,
  CSSSkewY as ICSSSkewY,
  CSSUnitValue as ICSSUnitValue,
  CSSNumericValue as ICSSNumericValue,
  DOMMatrix as IDOMMatrix
} from './types'
import { CSSTransformComponent } from './CSSTransformComponent'
import { CSSUnitValue, toDeg } from './CSSUnitValue'

export class CSSSkew extends CSSTransformComponent implements ICSSSkew {
  ax: CSSUnitValue
  ay: CSSUnitValue

  private computedMatrix: IDOMMatrix | undefined

  constructor(ax: ICSSNumericValue, ay: ICSSNumericValue) {
    super()
    if (!(ax instanceof CSSUnitValue) || !(ay instanceof CSSUnitValue)) {
      throw new TypeError('Failed to construct CSSSkew: parameter is not of type CSSUnitValue')
    }
    this.ax = ax
    this.ay = ay
  }

  override toMatrix(): IDOMMatrix {
    if (this.computedMatrix) {
      return this.computedMatrix
    }
    this.computedMatrix = this._matrix.skewXSelf(toDeg(this.ax)).skewYSelf(toDeg(this.ax))
    return this.computedMatrix
  }

  public toString(): string {
    return `skew(${this.ax.toString()}, ${this.ay.toString()})`
  }
}

export class CSSSkewX extends CSSTransformComponent implements ICSSSkewX {
  ax: CSSUnitValue

  private computedMatrix: IDOMMatrix | undefined

  constructor(ax: ICSSNumericValue) {
    super()
    if (!(ax instanceof CSSUnitValue)) {
      throw new TypeError('Failed to construct CSSSkewX: parameter is not of type CSSUnitValue')
    }
    this.ax = ax
  }

  override toMatrix(): IDOMMatrix {
    if (this.computedMatrix) {
      return this.computedMatrix
    }
    this.computedMatrix = this._matrix.skewXSelf(toDeg(this.ax))
    return this.computedMatrix
  }

  public toString(): string {
    return `skewX(${this.ax.toString()})`
  }
}

export class CSSSkewY extends CSSTransformComponent implements ICSSSkewY {
  ay: CSSUnitValue

  private computedMatrix: IDOMMatrix | undefined

  constructor(ay: ICSSNumericValue) {
    super()
    if (!(ay instanceof CSSUnitValue)) {
      throw new TypeError('Failed to construct CSSSkewY: parameter is not of type CSSUnitValue')
    }
    this.ay = ay
  }

  override toMatrix(): IDOMMatrix {
    if (this.computedMatrix) {
      return this.computedMatrix
    }
    this.computedMatrix = this._matrix.skewYSelf(toDeg(this.ay))
    return this.computedMatrix
  }

  public toString(): string {
    return `skewY(${this.ay.toString()})`
  }
}