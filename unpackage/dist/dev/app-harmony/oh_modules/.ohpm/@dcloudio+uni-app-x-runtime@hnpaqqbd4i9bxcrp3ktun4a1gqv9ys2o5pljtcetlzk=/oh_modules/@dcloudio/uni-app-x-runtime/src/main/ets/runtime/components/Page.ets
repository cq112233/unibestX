import { getUniApp } from '../UniNativeApp'
import { RootNodeContent } from '../Node'
import { callPageLifeCycle } from '../Page'
import { AttributeUpdater, display, FrameCallback } from '@kit.ArkUI'
import { displaySync } from '@kit.ArkGraphics2D'
import { TabBar, TabBarStyle, TabBarItem, TabBarListObservedArray } from './TabBar'
import { TabBarWithAnimation } from './TabBarWithAnimation'

export class AnimationAttributeUpdater extends AttributeUpdater<CommonAttribute> {
  private isInitialized: boolean = false
  private callbacks: Array<(attribute: CommonAttribute) => void> = []

  initializeModifier(attribute: CommonAttribute): void {
    this.isInitialized = true
    this.callbacks.forEach(callback => {
      callback(attribute)
    })
    this.callbacks = []
  }

  getAttribute(callback: (attribute: CommonAttribute) => void) {
    if (this.isInitialized) {
      callback(this.attribute!)
    } else {
      this.callbacks.push(callback)
    }
  }
}

export class AnimationController {
  type?: string
  duration?: number
  callback?: (() => void) | null
  attributeUpdater: AnimationAttributeUpdater = new AnimationAttributeUpdater()
  finish?: () => void

  constructor(type?: string, duration?: number) {
    this.type = type
    this.duration = duration
  }

  animate(context: UIContext, onFinish: () => void, linkPageController?: AnimationController) {
    this.setBeginState(linkPageController)
    context.animateTo({
      duration: this.duration,
      curve: Curve.EaseOut,
      playMode: PlayMode.Normal,
      onFinish: onFinish
    }, () => {
      this.setEndState(linkPageController)
    })
  }

  setBeginState(linkPageController?: AnimationController) {
    const attributeUpdater = this.attributeUpdater
    attributeUpdater.getAttribute((attribute) => {
      switch (this.type) {
        case 'pop-in': {
          attribute.translate({
            x: '100%'
          })
          linkPageController?.attributeUpdater.attribute?.translate({
            x: 0
          })
          break
        }
        case 'slide-in-right':
          attribute.translate({
            x: '100%'
          })
          break
        case 'slide-in-left':
          attribute.translate({
            x: '-100%'
          })
          break
        case 'slide-in-top':
          attribute.translate({
            y: '-100%'
          })
          break
        case 'slide-in-bottom':
          attribute.translate({
            y: '100%'
          })
          break
        case 'pop-out': {
          attribute.translate({ x: 0 })
          linkPageController?.attributeUpdater.attribute?.translate({
            x: '-50%'
          })
          break
        }
        case 'slide-out-right':
        case 'slide-out-left':
          attribute.translate({ x: 0 })
          break
        case 'slide-out-top':
        case 'slide-out-bottom':
          attribute.translate({ y: 0 })
          break
        case 'fade-in':
          attribute.opacity(0)
          break
        case 'fade-out':
          attribute.opacity(1)
          break
        case 'zoom-out':
          attribute.scale({ x: 0, y: 0 })
          break
        case 'zoom-fade-out': {
          attribute.scale({ x: 0, y: 0 })
          attribute.opacity(0)
          break
        }
        case 'zoom-in':
          attribute.scale({ x: 1, y: 1 })
          break
        case 'zoom-fade-in': {
          attribute.scale({ x: 1, y: 1 })
          attribute.opacity(1)
          break
        }
      }
    })
  }

  setEndState(linkPageController?: AnimationController) {
    const attribute = this.attributeUpdater.attribute!
    switch (this.type) {
      case 'pop-in': {
        attribute.translate({ x: 0 })
        linkPageController?.attributeUpdater.attribute?.translate({ x: '-50%' })
        break
      }
      case 'slide-in-right':
      case 'slide-in-left':
        attribute.translate({ x: 0 })
        break
      case 'slide-in-top':
      case 'slide-in-bottom':
        attribute.translate({ y: 0 })
        break
      case 'pop-out': {
        attribute.translate({ x: '100%' })
        linkPageController?.attributeUpdater.attribute?.translate({ x: 0 })
        break
      }
      case 'slide-out-right':
        attribute.translate({ x: '100%' })
        break
      case 'slide-out-left':
        attribute.translate({ x: '-100%' })
        break
      case 'slide-out-top':
        attribute.translate({ y: '-100%' })
        break
      case 'slide-out-bottom':
        attribute.translate({ y: '100%' })
        break
      case 'fade-in':
        attribute.opacity(1)
        break
      case 'fade-out':
        attribute.opacity(0)
        break
      case 'zoom-out':
        attribute.scale({ x: 1, y: 1 })
        break
      case 'zoom-fade-out': {
        attribute.scale({ x: 1, y: 1 })
        attribute.opacity(1)
        break
      }
      case 'zoom-in':
        attribute.scale({ x: 0, y: 0 })
        break
      case 'zoom-fade-in': {
        attribute.scale({ x: 0, y: 0 })
        attribute.opacity(0)
        break
      }
    }
  }

  resetState(linkPageController?: AnimationController) {
    switch (this.type) {
      // 暂时仅处理 pop-in 动画
      case 'pop-in': {
        // 暂时仅处理 linkPage
        linkPageController?.attributeUpdater.attribute?.translate({
          x: 0
        })
        break
      }
    }
  }
}

@Entry({ routeName: 'UniPage' })
@Component
struct UniPage {
  router = getUniApp()?.router
  private highFrameRateDisplaySync: displaySync.DisplaySync | undefined
  @State animationController: AnimationController =
    new AnimationController(getUniApp()?.animationType, getUniApp()?.animationDuration)

  build() {
    Stack({
      alignContent: Alignment.TopEnd
    }) {
      Navigation(this.router)
        .mode(NavigationMode.Stack)
        .titleMode(NavigationTitleMode.Mini)
        .navDestination(this.pageBuilder)
        .hideTitleBar(true)
        .customNavContentTransition((from: NavContentInfo, to: NavContentInfo, operation: NavigationOperation) => {
          const target = operation === NavigationOperation.PUSH ? to : from
          const other = operation === NavigationOperation.PUSH ? from : to
          const pageManager = getUniApp()!.pageManager;
          const targetPage = pageManager.findPageById(target.name!)
          const linkPage = pageManager.findPageById(other.name!)
          // reLaunch 时 pushPathByName 与 removeByName 合并为 POP，此时无 targetPage
          if (!targetPage) {
            return {
              timeout: 0,
              transition: (transitionProxy: NavigationTransitionProxy) => {
                return
              }
            } as NavigationAnimatedTransition
          }
          const animationController = targetPage.page!.animationController
          const duration = animationController.duration || 300
          return {
            timeout: duration + 100,
            transition: (transitionProxy: NavigationTransitionProxy) => {
              if (!from.navDestinationId || !to.navDestinationId) {
                return;
              }
              animationController.finish = () => {
                animationController.finish = undefined
                transitionProxy.finishTransition()
              }
              animationController.animate(this.getUIContext(), () => {
                animationController.finish?.()
              }, linkPage?.animationController)
            },
            onTransitionEnd() {
              // 结束后重置 linkPage 状态，避免下次 linkPage 不参与动画时显示异常
              animationController.resetState(linkPage?.animationController)
              animationController.callback?.()
              animationController.callback = null
            }
          } as NavigationAnimatedTransition
        })
    }
    .height('100%')
    .width('100%')
    .attributeModifier(this.animationController.attributeUpdater)
  }

  @Builder
  pageBuilder(name: string) {
    PageContainer({ pageId: name })
  }

  aboutToAppear(): void {
    this.animationController.setBeginState()
    const displayInfo = display.getDefaultDisplaySync()
    const maxRefreshRate = displayInfo.supportedRefreshRates?.reduce(
      (max, refreshRate) => Math.max(max, refreshRate),
      displayInfo.refreshRate
    ) ?? displayInfo.refreshRate
    this.highFrameRateDisplaySync = displaySync.create()
    this.highFrameRateDisplaySync.setExpectedFrameRateRange({
      min: maxRefreshRate,
      max: maxRefreshRate,
      expected: maxRefreshRate,
    })
    this.highFrameRateDisplaySync.start()
  }

  aboutToDisappear(): void {
    this.highFrameRateDisplaySync?.stop()
    this.highFrameRateDisplaySync = undefined
  }

  onDidBuild(): void {
    const self = this

    class CustomFrameCallback extends FrameCallback {
      onIdle() {
        // self.setAnimationEndState()
        self.getUIContext().animateTo({
          duration: self.animationController.duration,
          curve: Curve.EaseOut,
          playMode: PlayMode.Normal
        }, () => {
          self.animationController.setEndState()
        })
      }
    }

    this.getUIContext()?.postFrameCallback(new CustomFrameCallback())
  }
}

export const TEMPLATE_PAGE_NAME = 'UniPage'


@Observed
export class TabBarPageController {
  pageId: string

  constructor(pageId: string) {
    this.pageId = pageId
  }
}

@Observed
export class TabBarPageControllerArray extends Array<TabBarPageController> {
}

@Observed
export class TabBarController {
  style: TabBarStyle = new TabBarStyle()
  list: TabBarListObservedArray<TabBarItem> = new TabBarListObservedArray<TabBarItem>()
  pages: TabBarPageControllerArray = new TabBarPageControllerArray()
  selectedId: string | null = null
  isVisible: boolean = true
  selectedIndex: number = 0
  onTabItemClick?: (index: number) => void
  tabBar?: TabBar | null
  attributeUpdater: AnimationAttributeUpdater = new AnimationAttributeUpdater()
  onAboutToAppear: (tabBar: TabBar) => void = (tabBar: TabBar) => {
    this.tabBar = tabBar
    tabBar.selectedIndex = this.selectedIndex
  }
}

export class DialogPageController {
  pageId: string
  visibility: Visibility
  attributeUpdater: AnimationAttributeUpdater = new AnimationAttributeUpdater()

  constructor(pageId: string, visibility: Visibility) {
    this.pageId = pageId
    this.visibility = visibility
  }
}

@Observed
export class DialogPageControllerArray extends Array<DialogPageController> {
}

@Observed
export class PageStyle {
  backgroundColor?: string
}

@Component
export struct PageContainer {
  @Prop pageId: string
  @Prop isSubPage: boolean
  @State pageStyle: PageStyle | null = null
  rootNodeContent: RootNodeContent | null = null
  @State tabBarController: TabBarController | null = null
  @State dialogPages: DialogPageControllerArray | null = null
  animationController!: AnimationController
  onTouchCallback: ((event: TouchEvent) => void) | null = null

  @Builder
  buildRelativeContainer() {
    RelativeContainer() {
      if (this.tabBarController) {
        Column() {
          Stack({ alignContent: Alignment.TopStart }) {
            ForEach(this.tabBarController.pages, (item: TabBarPageController) => {
              UniSubPage({ pageId: item.pageId })
                .width('100%')
                .height('100%')
                .clip(true)
                .visibility(this.tabBarController?.selectedId === item.pageId ? Visibility.Visible : Visibility.Hidden)
            }, (item: TabBarPageController) => item.pageId)
          }
          .width('100%')
          .layoutWeight(1)
          .clip(true)

          TabBarWithAnimation({
            onAboutToAppear: this.tabBarController.onAboutToAppear,
            list: this.tabBarController.list,
            style: this.tabBarController.style,
            onTabItemClick: this.tabBarController.onTabItemClick,
            attributeUpdater: this.tabBarController.attributeUpdater
          })
        }
        .height('100%')
        .width('100%')
      } else {
        ContentSlot(this.rootNodeContent)
      }
      if (this.dialogPages) {
        ForEach(this.dialogPages, (item: DialogPageController) => {
          UniSubPage({ pageId: item.pageId })
            .width('100%')
            .height('100%')
            .clip(true)
            .visibility(item.visibility)
            .zIndex(1)
            .attributeModifier(item.attributeUpdater)
        }, (item: DialogPageController) => item.pageId)
      }
    }
    .height('100%')
    .width('100%')
    .backgroundColor(this.pageStyle?.backgroundColor)
    .onTouch(event => {
      this.onTouchCallback?.(event)
    })
  }

  build() {
    if (this.isSubPage) {
      this.buildRelativeContainer()
    } else {
      NavDestination() {
        this.buildRelativeContainer()
      }
      .attributeModifier(this.animationController.attributeUpdater)
      .hideTitleBar(true)
      .onBackPressed(() => {
        getUniApp()?._emitter.emit('onBackButton')
        return true
      })
    }
  }

  aboutToAppear() {
    callPageLifeCycle('aboutToAppear', this)
  }

  onDidBuild(): void {
    callPageLifeCycle('onDidBuild', this)
  }

  aboutToDisappear() {
    callPageLifeCycle('aboutToDisappear', this)
  }
}

@Component
export struct UniSubPage {
  onAboutToAppear?: (instance: UniSubPage) => void
  @Prop pageId: string

  build() {
    PageContainer({ pageId: this.pageId, isSubPage: true })
  }

  aboutToAppear(): void {
    this.onAboutToAppear?.(this)
  }
}
