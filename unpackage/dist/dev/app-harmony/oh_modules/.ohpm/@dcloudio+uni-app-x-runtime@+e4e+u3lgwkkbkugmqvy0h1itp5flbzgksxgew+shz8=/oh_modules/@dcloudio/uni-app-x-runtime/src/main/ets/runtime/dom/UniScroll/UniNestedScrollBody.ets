import {
  INodeData,
  UniNestedScrollBodyElement as IUniNestedScrollBodyElement
} from '@dcloudio/uni-app-x/types/native'
import { UniNestedScrollBaseElementImpl } from './UniNestedScrollBase'

export class UniNestedScrollBodyElementImpl extends UniNestedScrollBaseElementImpl implements IUniNestedScrollBodyElement {
  constructor(data?: INodeData) {
    super(data)
    this.style.setProperty('width', '100%')
    this.style.setProperty('height', '100%')
  }
}