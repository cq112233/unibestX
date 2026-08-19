import {
  CSSTransformValue as ICSSTransformValue,
  CSSTransformComponent as ICSSTransformComponent,
  DOMMatrix as IDOMMatrix
} from './types'
import { CSSStyleValue } from './CSSStyleValue'
import { DOMMatrix } from './DOMMatrix'

export class CSSTransformValue extends CSSStyleValue implements ICSSTransformValue {
  [key: number]: ICSSTransformComponent
  private _transforms: Array<ICSSTransformComponent> = []

  length: number = 0

  constructor(transforms: Array<ICSSTransformComponent>) {
    super()
    this._transforms = transforms
    for (let i = 0; i < transforms.length; i++) {
      const transform = transforms[i];
      this[i] = transform
    }
    this.length = transforms.length
  }

  get is2D(): boolean {
    for (let i = 0; i < this._transforms.length; i++) {
      const transform = this._transforms[i]
      if (!transform.is2D) {
        return false
      }
    }
    return true
  }

  toMatrix(): IDOMMatrix {
    const matrix = new DOMMatrix()
    for (let i = 0; i < this._transforms.length; i++) {
      const transform = this._transforms[i]
      if (transform.is2D) {
        matrix.multiplySelf(transform.toMatrix())
      } else {
        throw new TypeError('Failed to construct CSSTransformValue: parameter is not of type CSSTransformComponent')
      }
    }
    return matrix
  }

  public toString(): string {
    return this._transforms.map((component) => component.toString()).join(', ')
  }

  forEach(callbackfn: (value: ICSSTransformComponent, key: number, parent: ICSSTransformValue) => void, thisArg?: any): void {
    for (let i = 0; i < this._transforms.length; i++) {
      const transform = this._transforms[i]
      callbackfn.call(thisArg, transform, i, this)
    }
  }
}