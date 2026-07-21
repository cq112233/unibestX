import { UniElement as IUniElement, UniListViewElement as IUniListViewElement } from '@dcloudio/uni-app-x/types/native'
import { typeNode } from '@kit.ArkUI'
import { UniCssFlexEdge } from 'dcloudlayout'
import {
  UniScrollElementImpl,
  ScrollViewBouncesMap,
  scrollViewShowScrollBarMap,
  ScrollViewDirection,
  ScrollViewFrameNode,
  isRefresherSlotContent
} from './UniScroll'
import { UniElementImpl } from '../UniElement'
import { GenericNodeController } from './utils'

export const ListViewDirectionMap = new Map<ScrollViewDirection, Axis>([
// [ScrollViewDirection.None, Axis.Vertical], // list只有纵向横向
// [ScrollViewDirection.All, ScrollDirection.Free], // 安卓iOS均不支持，鸿蒙也已废弃
  [ScrollViewDirection.Horizontal, Axis.Horizontal],
  [ScrollViewDirection.Vertical, Axis.Vertical],
])

export class UniListViewElementImpl extends UniScrollElementImpl implements IUniListViewElement {
  private listFrameNode!: typeNode.List
  override hasWrapperNode: boolean = false

  override createFrameNode(): ScrollViewFrameNode {
    const frameNode = super.createFrameNode()
    this.state.tagName = 'LIST-VIEW'
    return frameNode
  }

  override createScrollNodeController() {
    const rootFrameNode = this.listFrameNode = typeNode.createNode(this.app.context!, 'List')
    rootFrameNode.initialize({
      scroller: this.scroller
    })
    rootFrameNode.attribute
      .nestedScroll(this.state.nestedOptions)
      .width('100%')
      .height('100%')
      .sticky(StickyStyle.Header)
      .listDirection(ListViewDirectionMap.get(this.state.direction))
      .edgeEffect(ScrollViewBouncesMap.get(this.state.realBounces))
      .scrollBar(scrollViewShowScrollBarMap.get(this.state.showScrollbar))
      .onAreaChange((oldArea: Area, newArea: Area) => {
        this.handleAreaChange(oldArea, newArea)
      })

    /**
     * List组件在声明式ui中支持onWillScroll、onScrollFrameBegin，但是在frameNode下两者均不支持。
     * 调用attribute.onWillScroll报错`is not callable`
     * 调用attribute.onScrollFrameBegin报错`Method not implemented`
     * 不同于onWillScroll，onScrollFrameBegin不会给出scrollSource
     * 触发onScrollFrameBegin的条件：手指拖动List、List惯性划动时每帧开始时触发；List超出边缘回弹、使用滚动控制器和拖动滚动条的滚动不会触发。
     *
     * 声明式ui内List的子项有着严格限制，无法简单的实现appendChild。
     *
     * 注意：客户端版本需要大于等于5.0.2(14)，否则List组件的frameNode什么事件都用不了
     */
    rootFrameNode.attribute.onWillScroll((offset: number, scrollState: ScrollState,
      scrollSource: ScrollSource): ScrollResult | undefined => {
      const isHorizontal = this.state.direction === ScrollViewDirection.Horizontal
      const isVertical = this.state.direction === ScrollViewDirection.Vertical
      const offsetResult: OffsetResult | undefined = this.onWillScroll(
        isHorizontal ? offset : 0,
        isVertical ? offset : 0,
        scrollState,
        scrollSource
      )
      if (!offsetResult) {
        return
      }
      if (isHorizontal) {
        return {
          offsetRemain: offsetResult.xOffset
        }
      }
      if (isVertical) {
        return {
          offsetRemain: offsetResult.yOffset
        }
      }
      return
    })
    rootFrameNode.attribute.onDidScroll((offset: number, scrollState: ScrollState) => {
      const isHorizontal = this.state.direction === ScrollViewDirection.Horizontal
      const isVertical = this.state.direction === ScrollViewDirection.Vertical
      this.onDidScroll(isHorizontal ? offset : 0, isVertical ? offset : 0, scrollState)
    })
    rootFrameNode.attribute.onScrollStop(() => {
      this.onScrollStop()
    })
    rootFrameNode.attribute.onScrollStart(() => {
      this.onScrollStart()
    })
    rootFrameNode.attribute.onAttach(() => {
      this.initialScroll()
    })
    rootFrameNode.attribute.onScrollIndex(() => {
      this.getWrapperSize()
    })
    this.state.emitter.on('stateChange', (prop: string) => {
      switch (prop) {
        case 'direction':
          rootFrameNode.attribute.listDirection(ListViewDirectionMap.get(this.state.direction))
          break
        case 'realBounces':
          rootFrameNode.attribute.edgeEffect(ScrollViewBouncesMap.get(this.state.realBounces))
          break
        case 'realShowScrollbar':
          rootFrameNode.attribute.scrollBar(scrollViewShowScrollBarMap.get(this.state.realShowScrollbar))
          break
        case 'nestedOptions':
          rootFrameNode.attribute.nestedScroll(this.state.nestedOptions)
          break
      }
    })

    return new GenericNodeController({
      rootFrameNode
    })
  }

  override get slotFrameNode() {
    return this.listFrameNode
  }

  // override appendChild(aChild: IUniElement): void {
  //   if (aChild.tagName === 'STICKY-HEADER') {
  //     console.warn('[App-Harmony] sticky-header can only be a child of sticky-section.')
  //     return
  //   }
  //   super.appendChild(aChild)
  // }

  override insertBefore(newChild: IUniElement, refChild?: IUniElement | null | undefined): IUniElement | null

  override insertBefore(newChild: IUniElement): IUniElement | null

  override insertBefore(child: IUniElement, anchor?: IUniElement | null | undefined): IUniElement | null {
    if (child.tagName === 'STICKY-HEADER') {
      console.warn('[App-Harmony] sticky-header can only be a child of sticky-section.')
      return null
    }
    return super.insertBefore(child, anchor)
  }

  protected getWrapperSize(): void {
    const isHorizontal = this.state.direction === ScrollViewDirection.Horizontal
    const isVertical = this.state.direction === ScrollViewDirection.Vertical

    const currentLayoutWidth = this.rootContentSize.width
    const currentLayoutHeight = this.rootContentSize.height
    let width = currentLayoutWidth
    let height = currentLayoutHeight
    let lastChild = this.children[this.children.length - 1] as UniElementImpl
    if (lastChild && isRefresherSlotContent(lastChild) && this.children.length >= 2) {
      // 先仅考虑只有一个refresher的情况
      lastChild = this.children[this.children.length - 2] as UniElementImpl
    }
    if (lastChild && !isRefresherSlotContent(lastChild)) {
      const lastChildFrameNode = lastChild.frameNode
      const lastChildLayoutNode = lastChild.layoutNode
      if (!lastChildFrameNode) {
        // 容错，页面关闭后element会解除和frameNode的关联，此时机调用可能导致出错
        return
      }
      /**
       * 不同于scroll-view，list-view完全可以依赖鸿蒙本身的滚动内容高度，但是目前没有任何方式能取到list-view的滚动内容高度。如果以后有方式能取到务必重构这块逻辑
       * 由于list-item不应用排版器返回的位置，仅应用排版器margin，所以如下计算逻辑更合理。
       * scrollTop + 最后一个list-item到list-view的偏移量（使用frameNode获取）- list-view的paddingTop（排版器获取）+ 最后一个list-item的高度（排版器获取）+ 最后一个list-item的marginBottom（排版器获取）
       *
       * 上述方案不靠谱，ListItem frameNode获取相对于父组件的偏移并不准确，lastChildFrameNode在突然被回收后其PositionToParent会一直保持不变。现在全部改为自layoutNode获取，忍受一点偏差。
       */
      if (isVertical) {
        // height = this.scrollTop + lastChildFrameNode.getPositionToParent().y + lastChildLayoutNode.getLayoutHeight() +
        // lastChildLayoutNode.getLayoutMargin(UniCssFlexEdge.Bottom) -
        // this.layoutNode.getLayoutPadding(UniCssFlexEdge.Top)
        height = lastChildLayoutNode.getLayoutTop() + lastChildLayoutNode.getLayoutHeight() +
        lastChildLayoutNode.getLayoutMargin(UniCssFlexEdge.Bottom)
      } else if (isHorizontal) {
        // width = this.scrollLeft + lastChildFrameNode.getPositionToParent().x + lastChildLayoutNode.getLayoutWidth() +
        // lastChildLayoutNode.getLayoutMargin(UniCssFlexEdge.Right) -
        // this.layoutNode.getLayoutPadding(UniCssFlexEdge.Left)
        width = lastChildLayoutNode.getLayoutLeft() + lastChildLayoutNode.getLayoutHeight() +
        lastChildLayoutNode.getLayoutMargin(UniCssFlexEdge.Bottom)
      }
    }
    width = Math.max(currentLayoutWidth, width)
    height = Math.max(currentLayoutHeight, height)
    this.wrapperSize = {
      width,
      height
    }
  }

  override checkLayout(): void {
    super.checkLayout()
    const layoutNode = this.layoutNode
    this.listFrameNode.attribute.padding({
      top: layoutNode.getLayoutPadding(UniCssFlexEdge.Top),
      bottom: layoutNode.getLayoutPadding(UniCssFlexEdge.Bottom),
      left: layoutNode.getLayoutPadding(UniCssFlexEdge.Left),
      right: layoutNode.getLayoutPadding(UniCssFlexEdge.Right),
    })
  }

  override dispose(): void {
    const listFrameNode = this.listFrameNode
    if (listFrameNode) {
      listFrameNode.attribute.onAreaChange(undefined)
        .onScrollVisibleContentChange(undefined)
        .onScrollStart(undefined)
        .onScrollStop(undefined)
        .onDidScroll(undefined)
        .onWillScroll(undefined)
        .onAttach(undefined)
        .onScrollIndex(undefined)
    }
    super.dispose()
  }
}