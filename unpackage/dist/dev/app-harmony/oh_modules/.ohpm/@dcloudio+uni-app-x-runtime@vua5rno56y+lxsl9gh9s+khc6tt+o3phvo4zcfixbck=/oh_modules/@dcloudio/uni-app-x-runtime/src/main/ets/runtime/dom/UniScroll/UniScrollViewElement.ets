import { UniScrollViewElement as IUniScrollViewElement } from '@dcloudio/uni-app-x/types/native'
import { BuilderNode, FrameNode, NodeController, UIContext } from '@kit.ArkUI'
import {
  UniScrollElementImpl,
  ScrollViewState,
  ScrollViewDirectionMap,
  ScrollViewBouncesMap,
  scrollViewShowScrollBarMap,
  isRefresherSlotContent,
  ScrollViewDirection
} from './UniScroll'
import { UniElementImpl } from '../UniElement'
import { GenericNodeController } from './utils'
import { UniCssFlexEdge } from 'dcloudlayout'

interface PrivateUniElement {
  isFullscreen: boolean
  isFixed: boolean
}

@ComponentV2
struct ScrollViewScroll {
  @Require @Param scroller: Scroller
  @Once @Require @Param wrapperNodeController: GenericNodeController | null = null
  @Require @Param state: ScrollViewState
  @Require @Param onWillScroll: Function
  @Require @Param handleAreaChange: (oldValue: Area, newValue: Area) => void
  @Require @Param onScrollStop: Function
  @Require @Param onScrollStart: Function
  @Require @Param onDidScroll: Function
  @Require @Param initialScroll: Function
  @Require @Param onAboutToDisappear: Function

  aboutToDisappear(): void {
    this.wrapperNodeController?.dispose()
    this.wrapperNodeController = null
    this.onAboutToDisappear()
  }

  build() {
    Scroll(this.scroller) {
      NodeContainer(this.wrapperNodeController)
    }
    .onAttach(() => {
      this.initialScroll()
    })
    .nestedScroll(this.state.nestedOptions)
    .width('100%')
    .height('100%')
    .scrollable(ScrollViewDirectionMap.get(this.state.direction))
    .edgeEffect(ScrollViewBouncesMap.get(this.state.realBounces))
    .scrollBar(scrollViewShowScrollBarMap.get(this.state.realShowScrollbar))
    .onWillScroll((xOffset: number, yOffset: number, scrollState: ScrollState,
      scrollSource: ScrollSource): OffsetResult | undefined => {
      return this.onWillScroll(xOffset, yOffset, scrollState, scrollSource)
    })
    .onDidScroll((xOffset: number, yOffset: number, scrollState: ScrollState) => {
      return this.onDidScroll(xOffset, yOffset, scrollState)
    })
    .onAreaChange((oldArea: Area, newArea: Area) => {
      this.handleAreaChange(oldArea, newArea)
    })
    .onScrollStop(() => {
      this.onScrollStop()
    })
    .onScrollStart(() => {
      this.onScrollStart()
    })
    .align(Alignment.TopStart)
  }
}

interface ScrollBuilderOptions {
  onWillScroll: Function
  handleAreaChange: (oldValue: Area, newValue: Area) => void
  onScrollStop: Function
  initialScroll: Function
  onDidScroll: Function
  onScrollStart: Function
  onAboutToDisappear: Function
  state: ScrollViewState
  scroller: Scroller
  wrapperNodeController: GenericNodeController
}

@Builder
function ScrollViewScrollBuilder(options: ScrollBuilderOptions) {
  ScrollViewScroll({
    onWillScroll: options.onWillScroll,
    handleAreaChange: options.handleAreaChange,
    onScrollStop: options.onScrollStop,
    initialScroll: options.initialScroll,
    onDidScroll: options.onDidScroll,
    onScrollStart: options.onScrollStart,
    onAboutToDisappear: options.onAboutToDisappear,
    state: options.state,
    scroller: options.scroller,
    wrapperNodeController: options.wrapperNodeController,
  })
}

const wrappedScrollBuilder = wrapBuilder<[ScrollBuilderOptions]>(ScrollViewScrollBuilder)

export class UniScrollViewElementImpl extends UniScrollElementImpl implements IUniScrollViewElement {
  protected wrapper!: FrameNode

  override createScrollNodeController() {
    const rootBuilderNode = new BuilderNode<[ScrollBuilderOptions]>(this.app.context!)
    const slotFrameNode = new FrameNode(this.app.context!)
    this.wrapper = slotFrameNode
    const onAboutToDisappear = () => {
      this.slotFrameNode.dispose()
      rootBuilderNode.update({})
    }
    rootBuilderNode.build(wrappedScrollBuilder, {
      onAboutToDisappear,
      onWillScroll: this.onWillScroll,
      handleAreaChange: this.handleAreaChange,
      onScrollStop: this.onScrollStop,
      initialScroll: this.initialScroll,
      onDidScroll: this.onDidScroll,
      onScrollStart: this.onScrollStart,
      state: this.state,
      scroller: this.scroller,
      wrapperNodeController: new GenericNodeController({
        rootFrameNode: slotFrameNode
      })
    })
    const rootFrameNode = rootBuilderNode.getFrameNode()!
    return new GenericNodeController({
      rootFrameNode
    })
  }

  override get slotFrameNode() {
    return this.wrapper!
  }

  protected getWrapperSize(): void {
    let height = 0
    let width = 0
    const children = this.children
    const childCount = children.length
    let lastChild: UniElementImpl | null = null
    for (let i = childCount - 1; i >= childCount - 10 && i >= 0; i--) {
      lastChild = children[i] as UniElementImpl
      if (isRefresherSlotContent(lastChild)) {
        continue
      }
      const layoutNode = (lastChild as UniElementImpl).layoutNode
      const tempHeight = layoutNode.getLayoutTop() + layoutNode.getLayoutHeight() + layoutNode.getLayoutMargin(UniCssFlexEdge.Bottom)
      const tempWidth = layoutNode.getLayoutLeft() + layoutNode.getLayoutWidth() + layoutNode.getLayoutMargin(UniCssFlexEdge.Right)
      height = Math.max(height, tempHeight)
      width = Math.max(width, tempWidth)
    }
    width = Math.max(this.rootContentSize.width, width)
    height = Math.max(this.rootContentSize.height, height)
    this.wrapperSize = {
      width,
      height
    }
  }

  override checkLayout(): void {
    super.checkLayout()
    this.getWrapperSize()
    this.wrapper.commonAttribute.width(this.wrapperSize.width)
    this.wrapper.commonAttribute.height(this.wrapperSize.height)
  }
}