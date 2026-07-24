import {
  CSSTransformComponent as ICSSTransformComponent,
  DOMMatrix as IDOMMatrix,
} from './types';
import {
  DOMMatrix
} from './DOMMatrix'

export class CSSTransformComponent implements ICSSTransformComponent {
  is2D: boolean = false;
  protected _matrix: DOMMatrix = new DOMMatrix();

  toMatrix(): IDOMMatrix {
    // 遇到用户设置了非px兼容数值，比如百分比，此方法会抛出错误
    return this._matrix
  };

  toString(): string {
    return '';
  }
}