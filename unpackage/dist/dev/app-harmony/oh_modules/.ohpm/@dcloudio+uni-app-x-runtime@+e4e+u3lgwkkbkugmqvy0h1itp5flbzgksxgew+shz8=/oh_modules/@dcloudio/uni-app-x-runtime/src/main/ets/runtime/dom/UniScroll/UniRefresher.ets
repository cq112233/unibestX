import { UniElementImpl } from '../UniElement'
import { FrameNode, NodeController, UIContext } from '@kit.ArkUI'

const ScrollViewRefresherColorMap = new Map<string, Color | string>([
  ['white', '#ffffffff'],
  ['black', '#ff666666'],
  ['none', '#ff666666']
])

export class RefresherNodeController extends NodeController {
  private rootNode: FrameNode | null = null;
  private refresherElement: UniElementImpl | null = null

  makeNode(uiContext: UIContext): FrameNode | null {
    if (!this.refresherElement) {
      return null
    }
    this.rootNode = this.rootNode || new FrameNode(uiContext)
    this.rootNode.appendChild(this.refresherElement.frameNode)
    return this.rootNode!
  }

  appendRefresherElement(refresherElement: UniElementImpl) {
    this.refresherElement = refresherElement
    this.rebuild()
  }

  removeRefresherElement(refresherElement: UniElementImpl) {
    if (!this.rootNode) {
      return
    }
    this.refresherElement = null
    this.rootNode.removeChild(refresherElement.frameNode)
    this.rebuild()
  }

  dispose() {
    this.rootNode?.disposeTree()
    this.rootNode = null
  }
}

export interface RefresherState {
  refresherBackground?: ResourceColor
  refresherDefaultStyle?: 'black' | 'white' | 'none'
  refresherElement?: UniElementImpl
  refresherNodeController: RefresherNodeController
  refresherThreshold: number
}

@Builder
export function ScrollViewRefresher(refresherState: RefresherState) {
  Stack({
    alignContent: Alignment.Bottom
  }) {
    Stack({
      alignContent: Alignment.Center
    }) {
      if (refresherState.refresherNodeController && refresherState.refresherElement && refresherState.refresherDefaultStyle === 'none') {
        NodeContainer(refresherState.refresherNodeController)
          .width('100%')
          .height('100%')
      } else {
        LoadingProgress()
          .color(ScrollViewRefresherColorMap.get(refresherState.refresherDefaultStyle) || '#ff666666')
          .width(36)
          .height(36)
      }
    }
    .width('100%')
    .height(refresherState.refresherThreshold)
  }
  .width('100%')
  .height('100%')
  .clip(true)
  .backgroundColor(refresherState.refresherBackground)
}
