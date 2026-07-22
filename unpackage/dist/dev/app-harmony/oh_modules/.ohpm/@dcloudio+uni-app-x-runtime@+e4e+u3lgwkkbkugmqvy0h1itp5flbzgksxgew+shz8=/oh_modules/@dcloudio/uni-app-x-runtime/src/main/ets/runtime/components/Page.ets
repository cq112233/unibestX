import { getUniApp } from '../UniNativeApp'
import { ComponentBaseOptions, RootNodeController } from '../Node'
import { callPageLifeCycle } from '../Page'
import { FrameCallback } from '@kit.ArkUI'

@Entry({ routeName: 'UniPage' })
@Component
struct UniPage {
  router = getUniApp()?.router
  animationType = getUniApp()?.animationType
  animationDuration = getUniApp()?.animationDuration
  @State x: number | string = 0
  @State y: number | string = 0
  @State opacityValue: number = 1

  build() {
    Stack({
      alignContent: Alignment.TopEnd
    }) {
      Navigation(this.router)
        .mode(NavigationMode.Stack)
        .titleMode(NavigationTitleMode.Mini)
        .navDestination(this.pageBuilder)
        .hideTitleBar(true)
    }
    .height('100%')
    .width('100%')
    .translate({
      x: this.x,
      y: this.y
    })
    .opacity(this.opacityValue)
    .animation({
      duration: this.animationDuration,
      curve: Curve.EaseOut,
      playMode: PlayMode.Normal
    })
    .onAppear(() => {


    })
  }

  @Builder
  pageBuilder(name: string) {
    NavDestination() {
      PageContainer({ name: name })
    }
    .hideTitleBar(true)

    .onBackPressed(() => {
      getUniApp()?._emitter.emit('onBackButton')
      return true
    })
  }

  setAnimationBeginState() {
    switch (this.animationType) {
      case 'slide-in-right':
        this.x = '100%'
        break
      case 'slide-in-left':
        this.x = '-100%'
        break
      case 'slide-in-top':
        this.y = '-100%'
        break
      case 'slide-in-bottom':
        this.y = '100%'
        break
      case 'fade-in':
        this.opacityValue = 0
        break
    }
  }

  setAnimationEndState() {
    switch (this.animationType) {
      case 'slide-in-right':
        this.x = 0
        break
      case 'slide-in-left':
        this.x = 0
        break
      case 'slide-in-top':
        this.y = 0
        break
      case 'slide-in-bottom':
        this.y = 0
        break
      case 'fade-in':
        this.opacityValue = 1
        break
    }
  }

  aboutToAppear(): void {
    this.setAnimationBeginState()
  }

  onDidBuild(): void {
    const self = this

    class CustomFrameCallback extends FrameCallback {
      onIdle() {
        self.setAnimationEndState()
      }
    }

    this.getUIContext()?.postFrameCallback(new CustomFrameCallback())
  }
}

export const TEMPLATE_PAGE_NAME = 'UniPage'

@Component
export struct PageContainer {
  @Prop name: string
  rootNodeController: RootNodeController | null = null

  build() {
    RelativeContainer() {
      NodeContainer(this.rootNodeController)
    }
    .height('100%')
    .width('100%')
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

export interface IUniSubPage {
  name: string
}

export interface UniSubPageOptions extends ComponentBaseOptions, IUniSubPage {}

@Component
export struct UniSubPage {
  onAboutToAppear?: (instance: UniSubPage) => void
  @Prop name: string

  build() {
    PageContainer({ name: this.name })
  }

  aboutToAppear(): void {
    this.onAboutToAppear?.(this)
  }
}