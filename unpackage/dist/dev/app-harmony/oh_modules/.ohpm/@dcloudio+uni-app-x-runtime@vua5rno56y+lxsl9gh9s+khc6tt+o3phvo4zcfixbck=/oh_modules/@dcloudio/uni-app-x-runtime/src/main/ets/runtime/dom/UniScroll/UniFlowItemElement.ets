import {
  INodeData,
} from '@dcloudio/uni-app-x/types/native'
import { UniNativePageImpl } from '../UniNativePage'
import { UniFlowItemElement as IUniFlowItemElement } from '@dcloudio/uni-app-x/types/native'
import { UniElementImpl } from '../UniElement'
import { UniCssFlexEdge } from 'dcloudlayout'
import { FrameNode, typeNode } from '@kit.ArkUI'

export class UniFlowItemElementImpl extends UniElementImpl<typeNode.FlowItem> implements IUniFlowItemElement {
  private _wrapperFrameNode!: FrameNode

  override createFrameNode(): typeNode.FlowItem {
    this.layoutNode.setGridItemLayout(true)
    const flowItem = typeNode.createNode(this.app.context!, 'FlowItem')
    flowItem.attribute.width('100%').align(Alignment.TopStart)
    this._wrapperFrameNode = new FrameNode(this.app.context!)
    this._wrapperFrameNode.commonAttribute.width('100%').height('100%')
    flowItem.appendChild(this._wrapperFrameNode)
    return flowItem
  }

  override get slotFrameNode() {
    return this._wrapperFrameNode
  }

  override updateNativeAttribute(key: string, value: ESObject): void {
    if (key === 'slot' && value) {
      this.layoutNode.setGridItemLayout(false)
    }
    super.updateNativeAttribute(key, value)
  }

  override updateNativeNodeStyle(key: string, value: Object | undefined, commonAttribute?: CommonAttribute): void {
    switch (key) {
      case 'x':
      case 'y':
      case 'width':
        break
      default:
        super.updateNativeNodeStyle(key, value, commonAttribute)
        break
    }
  }

  override checkLayout(): void {
    super.checkLayout()
    const layoutNode = this.layoutNode
    this.frameNode.attribute.margin({
      top: layoutNode.getLayoutMargin(UniCssFlexEdge.Top),
      bottom: layoutNode.getLayoutMargin(UniCssFlexEdge.Bottom),
      left: layoutNode.getLayoutMargin(UniCssFlexEdge.Left),
      right: layoutNode.getLayoutMargin(UniCssFlexEdge.Right),
    })
  }
}