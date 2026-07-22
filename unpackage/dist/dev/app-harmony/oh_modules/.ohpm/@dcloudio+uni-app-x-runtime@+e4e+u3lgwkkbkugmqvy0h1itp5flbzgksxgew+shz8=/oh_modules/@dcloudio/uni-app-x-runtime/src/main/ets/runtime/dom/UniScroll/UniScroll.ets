import { Element as IUniElement, NodeData as INodeData } from '@dcloudio/uni-app-x/types/native'
import { UniElementImpl } from '../UniElement'
import { ComponentContent, FrameNode, NodeContent, NodeController } from '@kit.ArkUI'
import { UniCssFlexEdge } from 'dcloudlayout'
import { UniFrameNode, createUniFrameNode, ComponentBaseOptions } from '../../Node'
import { TinyEmitter as Emitter } from 'tiny-emitter'
import {
  UniRefresherEventDetail,
  UniRefresherEvent,
  UniScrollEventDetail,
  UniScrollEvent,
  UniScrollToLowerEventDetail,
  UniScrollToLowerEvent,
  UniScrollToUpperEventDetail,
  UniScrollToUpperEvent
} from '../UniScrollEvent'
import { UniTouchEvent } from '../UniTouchEvent'
import { ModifyEvent, InternalUniEvent } from '../UniEvent'
import { RefresherState, RefresherNodeController, ScrollViewRefresher } from './UniRefresher'
import { convertStringAttribute } from '../../helper'
import { UniCallbackWrapper } from '../UniCallbackWrapper'
import { GenericNodeController } from './utils'

export enum ScrollViewDirection {
  None = 'none',
  All = 'all',
  Horizontal = 'horizontal',
  Vertical = 'vertical'
}

export interface IOffset {
  x: number,
  y: number
}


export const ScrollViewDirectionMap = new Map<ScrollViewDirection, ScrollDirection>([
  [ScrollViewDirection.None, ScrollDirection.None],
  // [ScrollViewDirection.All, ScrollDirection.Free], // 安卓iOS均不支持，鸿蒙也已废弃
  [ScrollViewDirection.Horizontal, ScrollDirection.Horizontal],
  [ScrollViewDirection.Vertical, ScrollDirection.Vertical],
])

// TODO Spring在嵌套滚动时存在Bug，https://issuereporter.developer.huawei.com/detail/250303121416022/comment
export const ScrollViewBouncesMap = new Map<boolean, EdgeEffect>([
// [true, EdgeEffect.Spring],
  [true, EdgeEffect.Fade],
  [false, EdgeEffect.None],
])

// TODO BarState.Auto的效果不合常理，其文档描述为“按需显示(触摸时显示，2s后消失)”，理应是滚动时显示。在UniScroll内自行实现此效果。待提交issue到鸿蒙
export const scrollViewShowScrollBarMap = new Map<boolean, BarState>([
// [true, BarState.Auto],
  [true, BarState.On],
  [false, BarState.Off]
])

interface PrivateUniNativePage {
  _emitter: Emitter
}

@ObservedV2
export class ScrollViewState {
  // 滚动元素通用属性
  @Trace direction: ScrollViewDirection = ScrollViewDirection.Vertical
  @Trace bounces: boolean = true
  @Trace upperThreshold = 50
  @Trace lowerThreshold = 50
  @Trace scrollTop = 0
  @Trace scrollLeft = 0
  @Trace scrollIntoView: string = ''
  @Trace scrollWithAnimation: boolean = false
  @Trace showScrollbar: boolean = true
  @Trace refresherEnabled: boolean = false
  @Trace refresherThreshold: number = 45
  @Trace refresherMaxDragDistance: number = 112
  @Trace refresherDefaultStyle: 'black' | 'white' | 'none' = 'black'
  @Trace refresherBackground: ResourceColor = 'transparent'
  @Trace refresherTriggered: boolean = false
  // 内部属性
  @Trace tagName: 'SCROLL-VIEW' | 'LIST-VIEW' | 'WATERFLOW' = 'SCROLL-VIEW'
  @Trace realShowScrollbar: boolean = false
  @Trace nestedOptions: NestedScrollOptions = {
    scrollForward: NestedScrollMode.SELF_FIRST,
    scrollBackward: NestedScrollMode.SELF_FIRST
  }
  /**
   * isNestedParent、isNestedChild仅用来实现nested-scroll-header、nested-scroll-body
   * startnestedscroll等事件再用其他参数
   */
  @Trace isNestedParent: boolean = false
  @Trace isNestedChild: boolean = false
  @Trace isPreventDefault: boolean = false
  refresherElements: UniElementImpl[] = []
  lastTouchEvent: UniTouchEvent | null = null
  emitter: Emitter = new Emitter()

  @Computed
  get realRefresherEnabled() {
    return this.refresherEnabled
  }

  @Computed
  get realBounces(): boolean {
    return this.isPreventDefault ? false : this.bounces
  }

  @Computed
  get _direction() {
    this.emitter.emit('stateChange', 'direction')
    return this.direction
  }

  @Computed
  get _realBounces() {
    this.emitter.emit('stateChange', 'realBounces')
    return this.realBounces
  }

  @Computed
  get _showScrollbar() {
    this.emitter.emit('stateChange', 'showScrollbar')
    return this.showScrollbar
  }

  @Computed
  get _realShowScrollbar() {
    this.emitter.emit('stateChange', 'realShowScrollbar')
    return this.realShowScrollbar
  }

  @Computed
  get _nestedOptions(): NestedScrollOptions {
    let scrollForward: NestedScrollMode = NestedScrollMode.SELF_FIRST
    let scrollBackward: NestedScrollMode = NestedScrollMode.SELF_FIRST
    /**
     * this.isNestedChild的判断要在this.refresherEnabled的判断后面，嵌套滚动优先级高
     */
    if (this.realRefresherEnabled && this.direction === ScrollViewDirection.Vertical) {
      scrollBackward = NestedScrollMode.SELF_ONLY
      if (this.tagName === 'LIST-VIEW') {
        scrollForward = NestedScrollMode.SELF_ONLY
      }
    }
    if (this.isNestedChild) {
      scrollForward = NestedScrollMode.PARENT_FIRST
    }
    this.nestedOptions = {
      scrollForward,
      scrollBackward
    }
    this.emitter.emit('stateChange', 'nestedOptions')
    return this.nestedOptions
  }
}

interface ScrollViewOptions extends ComponentBaseOptions {
  scroller: Scroller
  state: ScrollViewState
  emitter: Emitter
  scrollNodeController: GenericNodeController
}

export function isRefresherSlotContent(child: IUniElement) {
  return child.hasAttribute('slot') && child.getAttribute('slot') === 'refresher'
}

/**
 * scroll历史问题记录
 * 方案：refresherEnabled为true时再创建Refresh组件
 * 问题：refresherEnabled初始值为false，此时下拉一下scroll组件。再将refresherEnabled切换为true，之后Refresh组件都无法触发下拉刷新。
 * 调整：修改为refresherEnabled为false时也创建Refresh组件
 * 问题：未启用refresherEnabled的scroll的上bounce无法触发，且会导致嵌套滚动时父滚动元素表现异常
 * 调整：nestedScroll在竖向滚动且启用下拉刷新时，scrollBackward设为SELF_ONLY
 * 问题：list-view依然有上述不能下拉刷新的问题
 * 调整：List组件的nestedScroll需要调整为scrollBackward设为SELF_ONLY且scrollForward也设为SELF_ONLY才能正常刷新，应该是Bug
 * 问题：页面启用下拉刷新且根节点为scroll-view，触发下拉刷新后禁用下拉刷新再启用下拉刷新，如果使用if控制Refresh组件会导致页面内容全部丢失。两个scroll-view嵌套时也会出现类似的问题。
 * 调整：无论是否开启下拉刷新都启用Refresh组件? 闭环了......
 */

@ComponentV2
struct ScrollView {
  @Event onAboutToAppear!: Function
  @Event onAboutToDisappear!: Function
  @Once @Require @Param scroller: Scroller
  @Once @Require @Param emitter: Emitter
  @Once @Require @Param state: ScrollViewState
  @Once @Require @Param attributeUpdater: AttributeModifier<CommonAttribute> | null = null
  @Once @Require @Param scrollNodeController: GenericNodeController | null = null
  @Local pullDownRatio: number = 1
  @Local refreshStatus: RefreshStatus | null = null
  @Local refreshOffset: number = 0
  private refresherContentNode ?: ComponentContent<Object> = undefined
  private refresherNodeController: RefresherNodeController | null = new RefresherNodeController()
  private refresherElement: UniElementImpl | null = null

  /**
   * TODO 这里使用Computed作为watchEffect，调研有无其他实现方式
   */
  @Computed
  get refresherBackground() {
    this.updateRefresher()
    return this.state.refresherBackground
  }

  /**
   * TODO 这里使用Computed作为watchEffect，调研有无其他实现方式
   */
  @Computed
  get refresherDefaultStyle() {
    this.updateRefresher()
    return this.state.refresherDefaultStyle
  }

  /**
   * TODO 这里使用Computed作为watchEffect，调研有无其他实现方式
   */
  @Computed
  get refresherThreshold() {
    this.updateRefresher()
    return this.state.refresherThreshold
  }

  updateRefresher() {
    this.refresherContentNode && this.refresherContentNode.update({
      refresherBackground: this.state.refresherBackground,
      refresherDefaultStyle: this.state.refresherDefaultStyle,
      refresherElement: this.refresherElement,
      refresherNodeController: this.refresherNodeController,
      refresherThreshold: this.state.refresherThreshold
    })
  }

  updateRefresherNodeController() {
    if (this.refresherElement) {
      this.refresherNodeController?.removeRefresherElement(this.refresherElement)
    }
    const refresherElement = this.state.refresherElements[this.state.refresherElements.length - 1]
    this.refresherElement = refresherElement || null
    if (this.refresherElement) {
      this.refresherNodeController?.appendRefresherElement(this.refresherElement)
    }
    this.updateRefresher()
  }

  aboutToAppear(): void {
    this.onAboutToAppear?.(this)
    this.updateRefresherNodeController()
    this.refresherContentNode = new ComponentContent(
      this.getUIContext(),
      wrapBuilder(ScrollViewRefresher),
      {
        refresherBackground: this.state.refresherBackground,
        refresherDefaultStyle: this.state.refresherDefaultStyle,
        refresherElement: this.refresherElement,
        refresherNodeController: this.refresherNodeController,
        refresherThreshold: this.state.refresherThreshold
      } as RefresherState
    )
    this.emitter.on('updateRefresherElement', () => {
      this.updateRefresherNodeController()
    })
  }

  aboutToDisappear(): void {
    this.scrollNodeController?.dispose()
    this.scrollNodeController = null
    this.refresherNodeController?.dispose()
    this.refresherNodeController = null
    this.updateRefresher() // TODO 为处理内存泄露问题，看似有点多此一举
    this.refresherContentNode?.dispose()
    this.refresherContentNode = undefined
    this.attributeUpdater = null
    this.onAboutToDisappear()
  }

  build() {
    Stack() {
      if (this.state.realRefresherEnabled) {
        Refresh({
          refreshing: this.state.refresherTriggered,
          refreshingContent: this.refresherContentNode
        }) {
          NodeContainer(this.scrollNodeController)
            .width('100%')
            .height('100%')
        }
        .width('100%')
        .height('100%')
        .refreshOffset(this.state.refresherThreshold)
        .pullDownRatio(this.pullDownRatio)
        // offset单位vp
        .onOffsetChange((offset: number) => {
          // 越接近最大距离，下拉跟手系数越小
          this.pullDownRatio = 1 - Math.pow((offset / this.state.refresherMaxDragDistance), 3)
          this.refreshOffset = offset
          if (this.refreshStatus !== RefreshStatus.Done) {
            this.emitter.emit('refresherpulling', offset)
          }
          if (offset === 0) {
            /**
             * 经测试onStateChange在onOffsetChange之后触发
             * 所有事件执行完毕后，重置内部状态，防止下次再触发刷新时状态不对。
             */
            this.refreshStatus = null
          }
        })
        .onStateChange((status: RefreshStatus) => {
          /**
           * 开发者设置的refresherTriggered也会修改this.state.refresherTriggered
           * 内部修改refresherTriggered防止回调时机导致开发者设置refresherTriggered不及时
           */
          this.refreshStatus = status
          switch (status) {
            case RefreshStatus.Inactive:
              this.emitter.emit('refresherabort', this.refreshOffset)
              break
            case RefreshStatus.Refresh:
              this.emitter.emit('refresherrefresh', this.state.refresherThreshold)
              break
            case RefreshStatus.Done:
              this.emitter.emit('refresherrestore', this.refreshOffset)
              break
            default:
              break
          }
        })
      } else {
        NodeContainer(this.scrollNodeController)
          .width('100%')
          .height('100%')
      }
    }
    // 由 issue 19008 去掉
    // .attributeModifier(this.attributeUpdater)
  }
}

@Builder
function ScrollViewBuilder(options: ScrollViewOptions) {
  /**
   * TODO 调研除设置hitTestBehavior之外的方式
   * ScrollView的attributeModifier作用于其内部的Stack节点，但是ScrollView组件位置（审查元素时可以看到组件根节点）仍是错误的。
   * 上述行为导致ScrollView组件覆盖在了其他组件之上，导致其他组件无法点击
   * 此处hitTestBehavior将ScrollView组件根节点设置为不响应触碰事件，用于处理上述问题。
   */
  ScrollView({
    onAboutToAppear: options.onAboutToAppear!,
    attributeUpdater: options.attributeUpdater!,
    emitter: options.emitter!,
    scroller: options.scroller!,
    state: options.state!,
    scrollNodeController: options.scrollNodeController
  })
  // 由 issue 19008 去掉
  // .hitTestBehavior(HitTestMode.Transparent)
}

const ScrollViewWrappedBuilder = wrapBuilder(ScrollViewBuilder)

export class ScrollViewFrameNode extends UniFrameNode {
  componentInstance!: ScrollView
}

interface ListenerState {
  scrolltoupper: boolean
  scrolltolower: boolean
  scroll: boolean
  scrollend: boolean
  refresherpulling: boolean
  refresherrefresh: boolean
  refresherrestore: boolean
  refresherabort: boolean
}

interface NodeSize {
  width: number
  height: number
}

interface ActionScrollTo {
  type: 'scrollTo',
  x?: number,
  y?: number,
  animation: boolean
}

interface ActionScrollBy {
  type: 'scrollBy',
  x?: number,
  y?: number,
  animation: boolean
}

interface ActionScrollToItem {
  type: 'scrollToItem',
  id: string,
  animation: boolean
}

function isScrollByUser(scrollSource: ScrollSource): boolean {
  return scrollSource !== ScrollSource.FLING &&
    scrollSource !== ScrollSource.EDGE_EFFECT &&
    scrollSource !== ScrollSource.SCROLL_BAR_FLING
}

interface IScrollStage {
  scrollSource: ScrollSource
  direction: -1 | 1 | 0
}

function isSameDirection(d1: number, d2: number) {
  return d1 * d2 >= 0
}

class ScrollStages {
  stages: IScrollStage[] = []

  constructor() {
  }

  push(stage: IScrollStage) {
    const lastStage = this.stages.length >= 1 && this.stages[this.stages.length - 1]
    if (!lastStage) {
      this.stages.push(stage)
      return
    }
    if (isSameDirection(stage.direction, lastStage.direction) && stage.scrollSource === lastStage.scrollSource) {
      return
    }
    if (stage.direction === 0) {
      this.stages.push({
        direction: lastStage.direction,
        scrollSource: stage.scrollSource
      })
      return
    }
    this.stages.push(stage)
  }

  clear() {
    this.stages.splice(0, this.stages.length)
  }

  /**
   * 一次手指拖动引发的滚动，scrollSource会经历ScrollSource.DRAG -> ScrollSource.FLING? -> ScrollSource.EDGE_EFFECT（Spring效果先同向滚动再反向滚动）
   * 强制scrollSource遵循此顺序，可以被用户滚动打断，仅限制手指滑动的流程
   * 惯性滚动限制此次滚动和上次滚动方向一致，注意不可限制EDGE_EFFECT，EDGE_EFFECT本身会进行相反方向的滚动
   */
  check(stage: IScrollStage): boolean {
    const lastStage = this.stages.length >= 1 && this.stages[this.stages.length - 1]
    if (!lastStage) {
      if (!isScrollByUser(stage.scrollSource)) {
        return false
      }
      return true
    }
    const lastDirection = lastStage.direction
    const lastScrollSource = lastStage.scrollSource
    const direction = stage.direction || lastStage.direction
    const scrollSource = stage.scrollSource
    if (isSameDirection(direction, lastDirection) && scrollSource === lastScrollSource) {
      return true
    }
    switch (scrollSource) {
      case ScrollSource.FLING:
        if (!isSameDirection(lastDirection, direction)) {
          return false
        } else if (!isScrollByUser(lastScrollSource)) {
          return false
        }
        break
      case ScrollSource.EDGE_EFFECT:
        if (lastScrollSource !== ScrollSource.EDGE_EFFECT) {
          if (!isSameDirection(lastDirection, direction)) {
            return false
          }
        } else {
          const secondLastStage = this.stages.length >= 2 && this.stages[this.stages.length - 2]
          if (!secondLastStage || secondLastStage.scrollSource === ScrollSource.EDGE_EFFECT) {
            return false
          }
        }
        break
    }
    return true
  }
}

export class UniScrollElementImpl extends UniElementImpl<ScrollViewFrameNode> {
  protected state!: ScrollViewState
  protected scroller!: Scroller
  protected emitter!: Emitter
  protected listenerState!: ListenerState
  protected onWillScroll!: Function
  protected handleAreaChange!: (oldValue: Area, newValue: Area) => void
  protected onScrollStop!: Function
  protected onDidScroll!: Function
  protected onScrollStart!: Function
  protected initialScroll!: Function
  protected _onTouchMove!: (e: UniTouchEvent) => void
  protected _onTouchmoveStopPropagation!: (e: ModifyEvent) => void
  protected _onTouchMoveCb!: UniCallbackWrapper
  protected _onTouchmoveStopPropagationCb!: UniCallbackWrapper
  protected canScroll: boolean = false
  protected isPageScrollElement: boolean = false
  protected scrollQueue: Array<ActionScrollTo | ActionScrollBy | ActionScrollToItem> = []
  protected scrollStages: ScrollStages = new ScrollStages()
  protected showScrollBarTimer: number | null = null
  protected widthByAreaChange: number = 0
  protected heightByAreaChange: number = 0
  protected scrollNodeController!: GenericNodeController
  /**
   * 单位vp，不舍弃小数
   */
  protected wrapperSize: NodeSize = {
    width: 0,
    height: 0
  }
  /**
   * 单位vp，不舍弃小数
   */
  protected rootContentSize: NodeSize = {
    width: 0,
    height: 0
  }
  protected hasWrapperNode: boolean = false

  constructor(data?: INodeData) {
    super(data)
    this.initEmitter()
    this.listenerState = {
      scrolltoupper: false,
      scrolltolower: false,
      scroll: false,
      scrollend: false,
      refresherpulling: false,
      refresherrefresh: false,
      refresherrestore: false,
      refresherabort: false,
    }

    // this.addEventListener('_touchmovePreventDefault', (event: ModifyEvent) => {
    //   /**
    //    * 此处存储最后一个touchmove对应的UniEvent有如下考量（按照web规范）
    //    * - 同一个事件在不同target上应为同一对象
    //    * - 父元素touchmove内调用preventDefault会导致子元素不可滚动
    //    * - 一次touch操作中多次触发的touchstart、touchmove、touchend事件都是互相独立的，如果需要完全阻止滚动需要所有的touchmove事件内都调用preventDefault
    //    */
    //   this.state.lastTouchEventPreventDefault = true
    // })

    this._onTouchMove = (event: UniTouchEvent) => {
      this.state.lastTouchEvent = event
    }
    this._onTouchmoveStopPropagation = (event: ModifyEvent) => {
      this.state.lastTouchEvent = event.uniEvent as UniTouchEvent
    }
    this._onTouchMoveCb = this.addEventListener('touchmove', this._onTouchMove)
    this._onTouchmoveStopPropagationCb =
      this.addEventListener('_touchmoveStopPropagation', this._onTouchmoveStopPropagation)
  }

  /**
   * Bug 初次滚动时机过早时（即使在onAttach之后）scrollWithAnimation为false时，需要延迟很长时间才能滚动到指定位置。
   * 此处改为实际滚动发生前将scrollWithAnimation为false时将滚动动画设置为1ms来实现无动画效果。
   */
  private _scrolled: boolean = false

  private getRealAnimation(realAnimation: boolean): boolean | ScrollAnimationOptions {
    /**
     * 无论何时都使用带动画的滚动，否则无动画的滚动scrollEnd不会触发
     */
    return realAnimation || {
      duration: 1, // 1ms
      curve: Curve.Ease,
      canOverScroll: false
    }
  }

  protected _scrollTo(x?: number, y?: number, animation?: boolean) {
    if (this.canScroll) {
      const realAnimation = animation === undefined ? this.state.scrollWithAnimation : animation
      const currentOffset = this.getCurrentOffset()
      if (x === undefined) {
        x = currentOffset.xOffset
      }
      if (y === undefined) {
        y = currentOffset.yOffset
      }
      if (!this._scrolled && this.isConnected) {
        this.page.document.waitNativeRender(() => {
          this.scroller.scrollTo({
            xOffset: x,
            yOffset: y,
            animation: this.getRealAnimation(realAnimation)
          })
        })
      } else {
        this.scroller.scrollTo({
          xOffset: x,
          yOffset: y,
          animation: this.getRealAnimation(realAnimation)
        })
      }
    } else {
      this.scrollQueue.push({
        type: 'scrollTo',
        x,
        y,
        animation: this.getRealAnimation(this.state.scrollWithAnimation)
      } as ActionScrollTo)
    }
  }

  protected _scrollBy(x?: number, y?: number, animation?: boolean) {
    if (this.canScroll) {
      const realAnimation = animation === undefined ? this.state.scrollWithAnimation : animation
      const currentOffset = this.getCurrentOffset()
      if (x === undefined) {
        x = 0
      }
      if (y === undefined) {
        y = 0
      }
      // 原生scrollBy无动画
      this.scroller.scrollTo({
        xOffset: currentOffset.xOffset + x,
        yOffset: currentOffset.yOffset + y,
        animation: this.getRealAnimation(realAnimation)
      })
    } else {
      this.scrollQueue.push({
        type: 'scrollBy',
        x,
        y,
        animation: this.getRealAnimation(this.state.scrollWithAnimation)
      } as ActionScrollBy)
    }
  }

  /**
   * TODO scroll-into-view需要实现滚动到子元素及更深层级的子元素，在scroll-view组件内依赖于UniElement的offsetTop。在list-view组件内如何实现需要再行调研。
   */
  protected _scrollToItem(id: string, animation?: boolean) {
    if (this.canScroll) {
      const realAnimation = animation === undefined ? this.state.scrollWithAnimation : animation
      const child = this.querySelector('#' + id) as UniElementImpl | null
      if (child) {
        const childOffset = this.getChildOffset(child)
        this.scroller.scrollTo({
          xOffset: this.state.direction === ScrollViewDirection.Horizontal ?
          Math.round(childOffset.x) : 0,
          yOffset: this.state.direction === ScrollViewDirection.Vertical ?
          Math.round(childOffset.y) : 0,
          animation: this.getRealAnimation(realAnimation)
        })
      }
    } else {
      this.scrollQueue.push({
        type: 'scrollToItem',
        id,
        animation: this.getRealAnimation(this.state.scrollWithAnimation)
      } as ActionScrollToItem)
    }
  }

  protected getChildOffset(child: UniElementImpl): IOffset {
    const offset: IOffset = {
      x: 0,
      y: 0
    }
    const childBoundingClientRect = child.getBoundingClientRect()
    offset.x = childBoundingClientRect.x
    offset.y = childBoundingClientRect.y
    const boundingClientRect = this.getBoundingClientRect()
    offset.x -= boundingClientRect.x
    offset.y -= boundingClientRect.y
    const currentOffset = this.scroller.currentOffset()
    offset.x += currentOffset.xOffset
    offset.y += currentOffset.yOffset
    return offset
  }

  override scrollTo(x: number, y: number) {
    this._scrollTo(x, y)
  }

  // 内部方法，提供支持 animation 的 scrollTo
  __scrollTo(x: number, y: number, animation: ScrollAnimationOptions) {
    this.scroller.scrollTo({
      xOffset: x,
      yOffset: y,
      animation
    })
  }

  override scrollBy(x: number, y: number): void {
    this._scrollBy(x, y)
  }

  protected getCurrentOffset(): OffsetResult {
    // TODO 部分页面在滚动期间返回获取到的this.scroller.currentOffset()是undefined，疑似鸿蒙bug
    const defaultOffset: OffsetResult = {
      xOffset: 0,
      yOffset: 0
    }
    try {
      return this.scroller.currentOffset() || defaultOffset
    } catch (e) {
      return defaultOffset
    }
  }

  set scrollLeft(left: number) {
    this._scrollTo(left)
  }

  get scrollLeft() {
    const currentOffset = this.getCurrentOffset()
    return currentOffset.xOffset
  }

  set scrollTop(top: number) {
    this._scrollTo(undefined, top)
  }

  get scrollTop() {
    const currentOffset = this.getCurrentOffset()
    return currentOffset.yOffset
  }

  get scrollWidth() {
    return this.wrapperSize.width
  }

  get scrollHeight() {
    return this.wrapperSize.height
  }

  private initEmitter() {
    this.emitter.on('scroll', (xOffset: number, yOffset: number) => {
      const currentOffset = this.getCurrentOffset()
      if (this.listenerState.scroll) {
        this.dispatchEvent(
          new UniScrollEvent(
            'scroll',
            new UniScrollEventDetail({
              scrollTop: currentOffset.yOffset,
              scrollLeft: currentOffset.xOffset,
              scrollHeight: Math.round(this.wrapperSize!.height as number),
              scrollWidth: Math.round(this.wrapperSize!.width as number),
              deltaX: -xOffset,
              deltaY: -yOffset
            })
          )
        )
      }
      if (this.listenerState.scrolltoupper) {
        const upperThreshold = this.state.upperThreshold
        if (this.state.direction === ScrollViewDirection.Vertical) {
          if (currentOffset.yOffset - yOffset > upperThreshold && currentOffset.yOffset <= upperThreshold) {
            this.dispatchEvent(
              new UniScrollToUpperEvent(
                'scrolltoupper',
                new UniScrollToUpperEventDetail({
                  direction: 'top'
                })
              )
            )
          }
        }
        if (this.state.direction === ScrollViewDirection.Horizontal) {
          if (currentOffset.xOffset - xOffset > upperThreshold && currentOffset.xOffset <= upperThreshold) {
            this.dispatchEvent(
              new UniScrollToUpperEvent(
                'scrolltoupper',
                new UniScrollToUpperEventDetail({
                  direction: 'left'
                })
              )
            )
          }
        }
      }
      if (this.listenerState.scrolltolower) {
        const lowerThreshold = this.state.lowerThreshold
        if (this.state.direction === ScrollViewDirection.Vertical) {
          const bottom = this.wrapperSize.height - currentOffset.yOffset - this.rootContentSize.height
          if (bottom <= lowerThreshold && bottom + yOffset >= lowerThreshold) {
            this.dispatchEvent(
              new UniScrollToLowerEvent(
                'scrolltolower',
                new UniScrollToLowerEventDetail({
                  direction: 'bottom'
                })
              )
            )
          }
        }
        if (this.state.direction === ScrollViewDirection.Horizontal) {
          const right = this.wrapperSize.width - currentOffset.xOffset - this.rootContentSize.width
          if (right <= lowerThreshold && right + xOffset >= lowerThreshold) {
            this.dispatchEvent(
              new UniScrollToLowerEvent(
                'scrolltolower',
                new UniScrollToLowerEventDetail({
                  direction: 'right'
                })
              )
            )
          }
        }
      }

      if (this.isPageScrollElement && this.state.direction === ScrollViewDirection.Vertical) {
        const onReachBottomDistance: number = this.page.getPageStyle()['onReachBottomDistance'] ?? 50
        const bottom = this.wrapperSize.height - currentOffset.yOffset - this.rootContentSize.height
        if (bottom <= onReachBottomDistance && bottom + yOffset >= onReachBottomDistance) {
          (this.page as Object as PrivateUniNativePage)._emitter.emit('onReachBottom')
        }
      }
    })
    this.emitter.on('scrollend', () => {
      if (this.listenerState.scrollend) {
        const currentOffset = this.getCurrentOffset()
        this.dispatchEvent(
          new UniScrollEvent(
            'scrollend',
            new UniScrollEventDetail({
              scrollTop: currentOffset.yOffset,
              scrollLeft: currentOffset.xOffset,
              scrollHeight: Math.round(this.wrapperSize.height),
              scrollWidth: Math.round(this.wrapperSize.width),
              deltaX: 0,
              deltaY: 0
            })
          )
        )
      }
    })
    this.emitter.on('refresherpulling', (offset: number) => {
      if (this.listenerState.refresherpulling) {
        this.dispatchEvent(
          new UniRefresherEvent(
            'refresherpulling',
            new UniRefresherEventDetail(offset)
          )
        )
      }
    })
    this.emitter.on('refresherrefresh', (offset: number) => {
      this.setAnyAttribute('refresherTriggered', true)
      if (this.listenerState.refresherrefresh) {
        this.dispatchEvent(
          new UniRefresherEvent(
            'refresherrefresh',
            new UniRefresherEventDetail(offset)
          )
        )
      }
    })
    this.emitter.on('refresherrestore', (offset: number) => {
      if (this.listenerState.refresherrestore) {
        this.dispatchEvent(
          new UniRefresherEvent(
            'refresherrestore',
            new UniRefresherEventDetail(offset)
          )
        )
      }
    })
    this.emitter.on('refresherabort', (offset: number) => {
      if (this.listenerState.refresherabort) {
        this.dispatchEvent(
          new UniRefresherEvent(
            'refresherabort',
            new UniRefresherEventDetail(offset)
          )
        )
      }
    })
  }

  createScrollNodeController(): GenericNodeController {
    throw new Error('createScrollNodeController is not implemented')
  }

  override setAnyAttribute(key: string, value: ESObject): void {
    switch (key) {
      case 'scrollTop':
      case 'scroll-top': {
        const realValue = convertStringAttribute<number>(value, 'number')
        if (realValue != null) {
          this.scrollTop = value
        }
        return
      }
      case 'scrollLeft':
      case 'scroll-left': {
        const realValue = convertStringAttribute<number>(value, 'number')
        if (realValue != null) {
          this.scrollLeft = value
        }
        return
      }
      default:
        return super.setAnyAttribute(key, value)
    }
  }

  override getAnyAttribute(key: string): ESObject | null {
    switch (key) {
      case 'scrollTop':
      case 'scroll-top':
        return this.scrollTop
      case 'scrollLeft':
      case 'scroll-left':
        return this.scrollLeft
      default:
        return super.getAnyAttribute(key)
    }
  }

  protected override createFrameNode(): ScrollViewFrameNode {
    this.state = new ScrollViewState()
    this.scroller = new Scroller()
    this.emitter = new Emitter()

    this.onWillScroll = (xOffset: number, yOffset: number, scrollState: ScrollState,
      scrollSource: ScrollSource): OffsetResult | undefined => {
      /**
       * onWillScroll事件触发频率低于touchmove。touchmove每帧触发一次，onWillScroll每秒60次。
       * 所有touchmove结束后，会触发两次由drag触发的onWillScroll。
       * 如果仅判断上一次touchmove是否preventDefault，则最后一次由drag触发的onWillScroll不会被阻止。
       * 最后一次drag触发的onWillScroll还会触发惯性滚动，比较影响体验
       * 猜测最后一次drag触发的onWillScroll是将前面未滚动完的距离全部滚完。
       */

      const currentOffset = this.state.direction === ScrollViewDirection.Horizontal ? xOffset : yOffset
      const currentScrollDirection = currentOffset === 0 ? 0 : currentOffset > 0 ? 1 : -1
      const currentScrollStage = {
        scrollSource,
        direction: currentScrollDirection
      } as IScrollStage
      const allowScroll = this.scrollStages.check(currentScrollStage)
      if (!allowScroll) {
        this.scrollStages.clear()
        if (!this.state.isNestedParent) {
          this.state.isPreventDefault = false
          return {
            xOffset: 0,
            yOffset: 0
          }
        }
      }

      if (scrollSource === ScrollSource.DRAG || scrollSource === ScrollSource.FLING ||
        scrollSource === ScrollSource.EDGE_EFFECT) {
        if (this.state.lastTouchEvent) {
          const defaultPrevented = (this.state.lastTouchEvent as Object as InternalUniEvent).defaultPrevented
          if (defaultPrevented) {
            this.state.isPreventDefault = true
            return {
              xOffset: 0,
              yOffset: 0
            }
          }
        }
      } else {
        this.state.lastTouchEvent = null
      }

      this.state.isPreventDefault = false
      // TODO 嵌套滚动时需要在嵌套滚动计算完成后才能push
      this.scrollStages.push(currentScrollStage)
      return
    }

    this.onScrollStart = () => {
      this.isPageScrollElement = this.page.pageScrollElement === this
    }

    this.onDidScroll = (xOffset: number, yOffset: number, scrollState: ScrollState) => {
      // TODO 待排查或提交issue，鸿蒙偶尔会出现一些x、y offset均为0的滚动
      if (xOffset === 0 && yOffset === 0) {
        return
      }
      this._scrolled = true
      this.emitter.emit('scroll', xOffset, yOffset)
      if (this.isPageScrollElement && yOffset !== 0) {
        (this.page as Object as PrivateUniNativePage)._emitter.emit('onPageScroll', {
          scrollTop: this.getCurrentOffset().yOffset
        })
      }
      if (!this.state.showScrollbar || scrollState === ScrollState.Idle) {
        return
      }
      if (this.showScrollBarTimer !== null) {
        clearTimeout(this.showScrollBarTimer)
      }
      this.state.realShowScrollbar = true
      this.showScrollBarTimer = setTimeout(() => {
        this.state.realShowScrollbar = false
      }, 1000)
    }
    this.handleAreaChange = (_: Area, newValue: Area) => {
      this.widthByAreaChange = newValue.width as number
      this.heightByAreaChange = newValue.height as number
    }
    this.onScrollStop = () => {
      this.scrollStages.clear()
      this.emitter.emit('scrollend')
    }
    this.initialScroll = () => {
      this.canScroll = true
      this.scrollQueue.forEach((action) => {
        switch (action.type) {
          case 'scrollTo':
            this._scrollTo(action.x, action.y, action.animation)
            break;
          case 'scrollBy':
            this._scrollTo(action.x, action.y, action.animation)
            break;
          case 'scrollToItem':
            this._scrollToItem(action.id, action.animation)
            break;
        }
      })
    }

    this.scrollNodeController = this.createScrollNodeController()
    const scrollFrameNode = createUniFrameNode<ScrollViewFrameNode, ScrollViewOptions>(
      this.app.context!,
      ScrollViewFrameNode,
      ScrollViewWrappedBuilder,
      {
        scroller: this.scroller,
        state: this.state,
        emitter: this.emitter,
        scrollNodeController: this.scrollNodeController
      }
    )
    return scrollFrameNode
  }

  protected appendSlotContent(slotName: string, aChild: UniElementImpl) {
    if (slotName === 'refresher') {
      this.state.refresherElements.push(aChild)
      this.emitter.emit('updateRefresherElement')
    }
    super.appendSlotContent(slotName, aChild)
  }

  protected removeSlotContent(slotName: string, aChild: UniElementImpl) {
    if (slotName === 'refresher') {
      this.state.refresherElements.splice(
        this.state.refresherElements.indexOf(aChild), 1
      )
      this.emitter.emit('updateRefresherElement')
    }
    super.removeSlotContent(slotName, aChild)
  }


  // override appendChild(aChild: IUniElement): void {
  //   if (aChild instanceof UniElementImpl && aChild.attributes.has('slot')) {
  //     const slotName = (aChild.attributes.get('slot') || '') as string
  //     if (slotName) {
  //       this.appendSlotContent(slotName, aChild)
  //     }
  //   }
  //   super.appendChild(aChild)
  // }

  override insertBefore(newChild: IUniElement, refChild?: IUniElement | null | undefined): IUniElement | null

  override insertBefore(newChild: IUniElement): IUniElement | null

  override insertBefore(child: IUniElement,
    anchor?: IUniElement | null | undefined): IUniElement | null {

    if (child instanceof UniElementImpl && child.attributes.has('slot')) {
      const slotName = (child.attributes.get('slot') || '') as string
      if (slotName) {
        this.appendSlotContent(slotName, child)
      }
    }
    return super.insertBefore(child, anchor)
  }

  override checkLayout() {
    const hasNewLayout = this.layoutNode.hasNewLayout()
    super.checkLayout()
    if (hasNewLayout) {
      this.rootContentSize = {
        width: this.layoutNode.getLayoutWidth() - this.layoutNode.getLayoutPadding(UniCssFlexEdge.Left) -
        this.layoutNode.getLayoutPadding(UniCssFlexEdge.Right),
        height: this.layoutNode.getLayoutHeight() - this.layoutNode.getLayoutPadding(UniCssFlexEdge.Top) -
        this.layoutNode.getLayoutPadding(UniCssFlexEdge.Bottom)
      }
    }
    // TODO 在refresher内部直接忽略position？
    this.state.refresherElements.forEach((child: IUniElement) => {
      (child as UniElementImpl).frameNode!.commonAttribute.position({
        x: 0,
        y: 0
      })
    })
  }

  override updateNativeNodeStyle(key: string, value: Object | undefined, commonAttribute?: CommonAttribute): void {
    super.updateNativeNodeStyle(key, value, commonAttribute)
  }

  override updateNativeAttribute(key: string, value: ESObject) {
    switch (key) {
      case 'type':
        this.state.isNestedParent = (value === 'nested')
        break
      case 'associativeContainer':
        this.state.isNestedChild = (value === 'nested-scroll-view')
        break
      case 'direction':
        this.state.direction = value as ScrollViewDirection
        break
      case 'scrollWithAnimation':
        this.state.scrollWithAnimation = !!value
        break
      case 'bounces':
        this.state.bounces = !!value
        break
      case 'showScrollbar':
        this.state.showScrollbar = !!value
        break
      case 'scrollTop':
        this.state.scrollTop = value
        if (this.state.direction === ScrollViewDirection.Vertical) {
          this._scrollTo(undefined, value as number)
        }
        break
      case 'scrollLeft':
        this.state.scrollLeft = value
        if (this.state.direction === ScrollViewDirection.Horizontal) {
          this._scrollTo(value as number)
        }
        break
      case 'scrollIntoView':
        this._scrollToItem(value as string)
        break
      case 'refresherEnabled':
        this.state.refresherEnabled = !!value
        break
      case 'refresherThreshold':
        this.state.refresherThreshold = value
        break
      case 'refresherMaxDragDistance':
        this.state.refresherMaxDragDistance = value
        break
      case 'refresherTriggered':
        this.state.refresherTriggered = !!value
        break
      case 'refresherBackground':
        this.state.refresherBackground = value
        break
      case 'refresherDefaultStyle':
        this.state.refresherDefaultStyle = value
        break
      default:
        break
    }
    super.updateNativeAttribute(key, value)
  }

  override initNativeEvent(type: string): void {
    switch (type) {
      case 'scrolltoupper':
        this.listenerState.scrolltoupper = true
        break
      case 'scrolltolower':
        this.listenerState.scrolltolower = true
        break
      case 'scroll':
        this.listenerState.scroll = true
        break
      case 'scrollend':
        this.listenerState.scrollend = true
        break
      case 'refresherpulling':
        this.listenerState.refresherpulling = true
        break
      case 'refresherrefresh':
        this.listenerState.refresherrefresh = true
        break
      case 'refresherrestore':
        this.listenerState.refresherrestore = true
        break
      case 'refresherabort':
        this.listenerState.refresherabort = true
        break
      default:
        super.initNativeEvent(type)
        break
    }
  }

  override deleteNativeEvent(type: string, res: void | Object): boolean {
    switch (type) {
      case 'scrolltoupper':
        this.listenerState.scrolltoupper = false
        return true
      case 'scrolltolower':
        this.listenerState.scrolltolower = false
        return true
      case 'scroll':
        this.listenerState.scroll = false
        return true
      case 'scrollend':
        this.listenerState.scrollend = false
        return true
      case 'refresherpulling':
        this.listenerState.refresherpulling = false
        return true
      case 'refresherrefresh':
        this.listenerState.refresherrefresh = false
        return true
      case 'refresherrestore':
        this.listenerState.refresherrestore = false
        return true
      case 'refresherabort':
        this.listenerState.refresherabort = false
        return true
      default:
        return super.deleteNativeEvent(type, res)
    }
  }

  override dispose() {
    this.state.lastTouchEvent = null
    this.removeEventListener('touchmove', this._onTouchMoveCb)
    this.removeEventListener('_touchmoveStopPropagation', this._onTouchmoveStopPropagationCb)
    this.scrollNodeController.dispose()
    super.dispose()
  }
}