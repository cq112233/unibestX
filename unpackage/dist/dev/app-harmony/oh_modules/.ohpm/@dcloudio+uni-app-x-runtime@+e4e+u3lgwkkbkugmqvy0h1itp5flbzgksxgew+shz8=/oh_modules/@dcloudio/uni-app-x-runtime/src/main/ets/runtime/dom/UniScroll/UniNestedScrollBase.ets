import { UniElement as IUniElement } from '@dcloudio/uni-app-x/types/native'
import { UniElementImpl } from '../UniElement'
import { FrameNode } from '@kit.ArkUI'

export class UniNestedScrollBaseElementImpl extends UniElementImpl<FrameNode> {
  private currentChild: IUniElement | null = null

  protected override createFrameNode(): FrameNode {
    return new FrameNode(this.app.context!)
  }

  // 内部调用了insertBefore，拦截insertBefore后无需拦截appendChild
  // override appendChild(aChild: IUniElement): void {
  //   if (this.currentChild) {
  //     return
  //   }
  //   this.currentChild = aChild
  //   super.appendChild(aChild)
  // }

  override insertBefore(newChild: IUniElement, refChild?: IUniElement | null | undefined): IUniElement | null
  override insertBefore(newChild: IUniElement): IUniElement | null
  override insertBefore(child: IUniElement,
    anchor?: IUniElement | null | undefined): IUniElement | null {
    if (this.currentChild) {
      return null
    }
    this.currentChild = child
    return super.insertBefore(child, anchor)
  }

  override removeChild(aChild: IUniElement): IUniElement | null {
    if (this.currentChild !== aChild) {
      return null
    }
    this.currentChild = null
    return super.removeChild(aChild) || null
  }
}