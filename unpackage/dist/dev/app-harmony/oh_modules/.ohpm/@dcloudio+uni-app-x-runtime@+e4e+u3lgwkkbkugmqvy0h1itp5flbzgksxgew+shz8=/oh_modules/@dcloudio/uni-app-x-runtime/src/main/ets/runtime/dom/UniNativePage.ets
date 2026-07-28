import {
  INodeData,
  UniNativePage as IUniNativePage,
  NativeLoadFontFaceOptions,
  UniDocument,
  UniPageEvent,
  UniPageScrollEvent,
  UniPageBody as IUniPageBody,
  UniElement,
  ViewToTempFilePathSuccess,
  ViewToTempFilePathFail,
  ExitFullscreenOptions,
  UniPage
} from '@dcloudio/uni-app-x/types/native'
import { UniCallbackWrapper } from './UniCallbackWrapper'
import {
  AsyncCallback,
  UTSJSONObject,
  setStatusBarStyle,
  pixelMapToImgPath,
  cropPixelMap,
  scrollSnapshot,
  getSnapShotElementByBody,
  windowSnapShot,
  isScrollAbleElement,
  Unknown,
} from '../helper'
import { getUniApp, UniNativeAppImpl } from '../UniNativeApp'
import type { PageContainer } from '../components/Page'
import { UniDocumentImpl } from './UniDocument'
import { RootNodeController } from '../Node'
import { TinyEmitter } from 'tiny-emitter'
import { typeNode, window } from '@kit.ArkUI'
import { NavBarFrameNode, createNavBarFrameNode } from './NavBarFrameNode'
import { UniSafeAreaInsets } from '@dcloudio/uni-app-x/types/native'
import { UniNativeDialogPageImpl } from './UniNativeDialogPage'
import {
  checkAnimationInType,
  checkAnimationOutType,
  createTransitionEffect,
  resolveAnimationOutType
} from '../helper/transitionEffect'
import { UniViewElementImpl } from './UniViewElement'
import { UniTabsElementImpl } from './UniTabsElement'
import { UniScrollElementImpl } from './UniScroll/UniScroll'
import { image } from '@kit.ImageKit'
import { UniElementImpl } from './UniElement'
import { BusinessError } from '@kit.BasicServicesKit'
import { NoElementFullScreenError, PageNotReadyOrDestroyedError } from '../dom/UniElementRequestFullscreen'

// TODO 与用户配置合并后设置？不设置默认样式？
export const DefaultPageStyle = new Map<string, string | number | boolean>([
  ["navigationBarBackgroundColor", "#F8F8F8"],
  ["navigationBarTextStyle", "black"],
  ["navigationBarTitleText", ""],
  ["navigationStyle", "default"],
  ["backgroundColor", "#ffffff"],
  ["backgroundColorContent", "#ffffff"],
  ["enablePullDownRefresh", false],
  ["onReachBottomDistance", 50],
  ["pageOrientation", "portrait"],
  ["hideStatusBar", false],
])

export const pagesMap: Map<string, IUniNativePage> = new Map()

export const pagesArray: IUniNativePage[] = []

export const homeDialogPages: Map<UniNativeDialogPageImpl, Map<string, Object>> = new Map()

interface ViewToTempFilePathOptionsArea {
  x: number
  y: number
  width?: number
  height?: number
}

interface ViewToTempFilePathOptionsForHarmony {
  deviceShot: boolean
  area?: ViewToTempFilePathOptionsArea,
  id: string | null
  offsetX: string | null
  offsetY: string | null
  wholeContent: boolean
  path: string | null
  overwrite?: boolean | null
  success?: ((res: ViewToTempFilePathSuccess) => void) | null
  fail?: ((res: ViewToTempFilePathFail) => void) | null
  complete?: ((res: ViewToTempFilePathSuccess | ViewToTempFilePathFail) => void) | null
}

interface PrivateTinyEmitter {
  e: Record<string, Function>
}

type PageOrientation = "auto" | "portrait" | "landscape"

export class UniNativePageImpl implements IUniNativePage {
  pageUrl: string
  pageId: string
  parentPage: UniNativePageImpl | null = null
  tabBarElement: UniTabsElementImpl | null = null
  width!: number
  height!: number
  statusBarHeight!: number
  __uniPage: UniPage | null = null

  get type() {
    return 'default'
  }

  document: UniDocumentImpl
  protected isRendering = false
  /**
   * 关联的 UniApp 实例
   * @internal
   */
  app: UniNativeAppImpl
  /**
   * 页面实例
   * @internal
   */
  page: PageContainer | null = null
  /**
   * @internal
   */
  rootNodeController: RootNodeController
  navBarFrameNode: NavBarFrameNode
  pageFrameNode: typeNode.Column
  fullscreenElement: UniElement | null = null
  private _emitter = new TinyEmitter()
  protected dialogPagesFrameNode: typeNode.Stack | null = null
  protected fullscreenFrameNode: typeNode.Stack | null = null
  /**
   * @internal
   */
  contentFrameNode: typeNode.Stack
  private pageStyle: Map<string, Object>

  constructor(
    pageUrl: string,
    pageId: string,
    pageStyle: Map<string, Object>,
  ) {
    this.pageUrl = pageUrl
    this.pageId = pageId
    this.pageStyle = pageStyle
    pagesMap.set(pageId, this)
    pagesArray.push(this)
    this.app = getUniApp()!
    const context = this.app.context!
    const rootNodeController = this.rootNodeController = new RootNodeController(context)

    // 增加一层Stack用于包裹普通页面内容以及Dialog页面列表
    const pageRootFrameNode = typeNode.createNode(context, 'Stack')
    pageRootFrameNode.initialize({ alignContent: Alignment.TopStart })
    rootNodeController.rootFrameNode.appendChild(pageRootFrameNode)

    const pageFrameNode = this.pageFrameNode = typeNode.createNode(context, 'Column')
    pageFrameNode.attribute.width('100%')
      .height('100%')
      .onTouch((e) => {
        if (e.type === TouchType.Down) {
          this._emitter.emit('onPageTouchStart')
        } else if (e.type === TouchType.Up) {
          this._emitter.emit('onPageTouchEnd')
        }
      })
    pageRootFrameNode.appendChild(pageFrameNode)
    const navBarFrameNode = this.navBarFrameNode = createNavBarFrameNode(context, {
      onBackClick: () => {
        this.app._emitter.emit('onBackButton')
      }
    })
    // 包裹一层 stack 使导航栏组件不必让软键盘
    const navBarContainer = typeNode.createNode(context, 'Stack')
    navBarContainer.attribute.expandSafeArea([SafeAreaType.KEYBOARD]).zIndex(9999)
    navBarContainer.appendChild(navBarFrameNode)
    pageFrameNode.appendChild(navBarContainer)

    const document = this.document = new UniDocumentImpl(this)
    document.init()
    const contentFrameNode = this.contentFrameNode = document.frameNode
    pageFrameNode.appendChild(contentFrameNode)
    document.onReady(() => {
      // 在首次渲染后监听，避免渲染完成前多次触发
      let lastSize = pageFrameNode.getMeasuredSize()
      pageFrameNode.commonEvent.setOnSizeChange(() => {
        const size = pageFrameNode.getMeasuredSize()
        // 避免重复触发
        if (size.width === lastSize.width && size.height === lastSize.height) {
          return
        }
        lastSize = size
        // const deviceOrientation
        const pageSize = pageRootFrameNode.getMeasuredSize()
        const windowSize = contentFrameNode.getMeasuredSize()
        // TODO 使用 types 中的类型
        interface OnResizeOptions {
          /**
           * 屏幕方向
           */
          deviceOrientation: string
          /**
           * 新的显示区域尺寸
           */
          size: OnResizeSize
        }

        interface OnResizeSize {
          /**
           * 新的屏幕高度
           */
          screenHeight: number
          /**
           * 新的屏幕宽度
           */
          screenWidth: number
          /**
           * 新的显示区域高度
           */
          windowHeight: number
          /**
           * 新的显示区域宽度
           */
          windowWidth: number
        }

        let currentWindow = this.app.window
        const orientation = currentWindow.getPreferredOrientation()
        const options: OnResizeOptions = {
          deviceOrientation: orientation === window.Orientation.LANDSCAPE ||
            orientation === window.Orientation.LANDSCAPE_INVERTED ? 'landscape' : 'portrait',
          size: {
            screenHeight: px2vp(pageSize.height),
            screenWidth: px2vp(pageSize.width),
            windowHeight: px2vp(windowSize.height),
            windowWidth: px2vp(windowSize.width)
          }
        }
        // console.log('onResize', JSON.stringify(options))
        this._emitter.emit('onResize', options)
      })
      // TODO 使用更精准的时机
      setTimeout(() => {
        this._emitter.emit('onReady')
      }, 0)
    })

    // requestFullscreen
    const fullscreenFrameNode = this.fullscreenFrameNode = typeNode.createNode(context, 'Stack')
    fullscreenFrameNode.initialize({ alignContent: Alignment.TopStart })
    fullscreenFrameNode.attribute.clip(true)
      .width('100%')
      .height('100%')
    fullscreenFrameNode.attribute.visibility(Visibility.Hidden)
    pageRootFrameNode.appendChild(fullscreenFrameNode)


    // dialogPages
    if (this.type === 'default') { // 仅普通页面需要创建dialogPagesFrameNode
      const dialogPagesFrameNode = this.dialogPagesFrameNode = typeNode.createNode(context, 'Stack')
      dialogPagesFrameNode.initialize({ alignContent: Alignment.TopStart })
      dialogPagesFrameNode.attribute.clip(true)
        .width('100%')
        .height('100%')
      dialogPagesFrameNode.attribute.visibility(Visibility.Hidden)
      pageRootFrameNode.appendChild(dialogPagesFrameNode)
      // 在页面创建之前就调用了openDialogPage，需要挂靠在首页上
      // 注意目前有一个空id的页面，需要屏蔽一下，
      // 如果带了tabBar，默认就是先创建tabBar页面，所以不需要判断是否取parentPage
      if (homeDialogPages.size && pageId != '') {
        homeDialogPages.forEach((showOptions, dialogPage) => {
          this.addDialogPage(dialogPage)
          dialogPage.show(showOptions)
        })
        homeDialogPages.clear()
      }
    }

    this.updateStyle(pageStyle)
  }

  // TODO
  innerWidth!: number
  innerHeight!: number
  // safeArea!: UniSafeArea
  safeAreaInsets!: UniSafeAreaInsets

  getIOSView(): Object {
    throw new Error('Method not implemented.')
  }

  get pageBody(): IUniPageBody {
    throw new Error('not implement yet')
  }

  /**
   * @internal
   */
  init(page: PageContainer) {
    this.page = page
    page.rootNodeController = this.rootNodeController
  }

  startRender(): void

  startRender(callback?: (() => void) | null): void

  startRender(callback?: (() => void) | null): void {
    this.document.startRender(callback)
  }

  private stopRender() {
    this.document.stopRender()
  }

  // 需要存储，因为close时，需要处理auto类型
  private showAnimationType: string | undefined
  private showDuration: number | undefined

  show(options?: Map<string, Object> | null | undefined, callback?: (() => void) | null | undefined): void

  show(options?: Map<string, Object> | null | undefined): void

  show(options?: Map<string, Object> | null | undefined, callback?: (() => void) | null | undefined): void {
    // 与其他端一致以 tabBar 开头的 id 为 tabBar 页面，不需要动画
    const animationType =
      this.pageId.startsWith('tabBar') ? 'none' :
        checkAnimationInType(options?.get('animationType') as string | undefined)
    const animationDuration = options?.get('animationDuration') as number | undefined
    let duration = animationType === 'none' ? 0 : animationDuration || 300
    if (this.isRendering) {
      duration = 0
    }
    this.showAnimationType = animationType
    this.showDuration = duration
    this.showWithAnimation(animationType, duration)
    this.isRendering = true
    if (callback) {
      if (duration > 0) {
        // TODO 使用页面显示动画完成时机
        setTimeout(callback, duration)
      } else {
        callback()
      }
    }
    // TODO
    this._emitter.emit('onShow')
  }

  protected showWithAnimation(animationType: string | undefined, duration: number): void {
    const router = this.app.router
    if (!this.isRendering) {
      // 页面动画暂时仅支持 pop-in none
      router.pushPathByName(this.pageId, undefined, duration !== 0)
    } else {
      // 已显示的非Tab页面移动到顶层
      if (this.page) {
        router.moveToTop(this.page.name, false)
      }
    }
  }

  close(options?: Map<string, Object> | null | undefined, callback?: (() => void) | null | undefined): void

  close(options?: Map<string, Object> | null | undefined): void

  close(options?: Map<string, Object> | null | undefined, callback?: (() => void) | null | undefined): void {
    let animationType = checkAnimationOutType(options?.get('animationType') as string | undefined)
    const animationDuration =
      options?.has('animationDuration') ? options?.get('animationDuration') as number | undefined : this.showDuration
    if (animationType === 'auto') {
      animationType = resolveAnimationOutType(this.showAnimationType)
    }
    let duration = animationType === 'none' ? 0 : animationDuration || 300
    pagesMap.delete(this.pageId)
    const index = pagesArray.indexOf(this)
    if (index !== -1) {
      pagesArray.splice(index, 1)
    }
    this.stopRender()
    if (!this.isRendering) {
      duration = 0
    }
    this.closeWithAnimation(animationType, duration)
    this.isRendering = false
    // TODO clean
    // TODO 使用页面显示动画完成时机
    if (callback) {
      setTimeout(() => {
        try {
          callback()
        } catch (e) {
          console.error(e)
        }
        this.dispose()
      }, duration)
    }
    // 触发onUnload
    this._emitter.emit('onUnload')
    if (!callback) {
      this.dispose()
    }
  }

  // 避免内存泄漏
  dispose() {
    this.navBarFrameNode.disposeTree()
    this.dialogPagesFrameNode?.dispose()
    this.contentFrameNode.dispose();
    this.rootNodeController.dispose()
    this.fullscreenFrameNode?.disposeTree()
    this.page = null
    // TODO 内存泄漏 为何必须主动移除onTouch？，否则会导致内存泄漏
    // 即使this.pageFrameNode设置为null，或者 dispose等，均不生效，必须主动移除onTouch
    this.pageFrameNode.attribute.onTouch(undefined)
    this.pageFrameNode.commonEvent.setOnSizeChange(undefined)
    this.pageFrameNode.dispose()
    // 强制释放，正常来说是不需要手动释放的，但是可能其他代码有问题，导致无法释放
    this.document.dispose();
    (this._emitter as object as PrivateTinyEmitter).e = {}
    this.app = undefined as Unknown as UniNativeAppImpl
    this.__uniPage = null
  }

  protected closeWithAnimation(animationType: string | undefined, duration: number): void {
    if (this.isRendering) {
      const router = this.app.router
      const array = router.getAllPathName()
      const name = this.pageId
      if (array.includes(name)) {
        // 移除首页也使用 pop 以避免 removeByName 产生的额外动画
        if (array[array.length-1] === name) {
          router.pop(duration !== 0)
        } else {
          router.removeByName(name)
        }
      } else {
        console.error('close page error')
      }
    }
  }

  updateStyle(style: Map<string, Object>): void {
    const backgroundColor = style.get('backgroundColor')
    if (typeof backgroundColor === 'string') {
      this.pageFrameNode.attribute.backgroundColor(backgroundColor)
      this.pageStyle.set('backgroundColor', backgroundColor)
    }
    const backgroundColorContent = style.get('backgroundColorContent')
    if (typeof backgroundColorContent === 'string') {
      this.contentFrameNode.attribute.backgroundColor(backgroundColorContent)
      this.pageStyle.set('backgroundColorContent', backgroundColorContent)
    }

    const navBarComponentInstance = this.navBarFrameNode.componentInstance

    const navigationStyle = style.get('navigationStyle') as string | undefined
    if (typeof navigationStyle === 'string') {
      navBarComponentInstance.navigationStyle = navigationStyle
      this.pageStyle.set('navigationStyle', navigationStyle)
    }

    const navigationBarTitleText = style.get('navigationBarTitleText') as string | undefined
    if (typeof navigationBarTitleText === 'string') {
      navBarComponentInstance.titleText = navigationBarTitleText
      this.pageStyle.set('navigationBarTitleText', navigationBarTitleText)
    }
    const navigationBarBackgroundColor = style.get('navigationBarBackgroundColor') as string | undefined
    if (typeof navigationBarBackgroundColor === 'string') {
      navBarComponentInstance.titleBackgroundColor = navigationBarBackgroundColor
      this.pageStyle.set('navigationBarBackgroundColor', navigationBarBackgroundColor)
    }
    const navigationBarTextStyle = style.get('navigationBarTextStyle') as string | undefined
    if (typeof navigationBarTextStyle === 'string') {
      navBarComponentInstance.titleColor = navigationBarTextStyle
      this.pageStyle.set('navigationBarTextStyle', navigationBarTextStyle)
      this.applyStatusBarStyle()
    }
    const navigationBarAutoBackButton = style.get('navigationBarAutoBackButton') as boolean | undefined
    if (typeof navigationBarAutoBackButton === 'boolean') {
      navBarComponentInstance.autoBackButton = navigationBarAutoBackButton
      this.pageStyle.set('navigationBarAutoBackButton', navigationBarAutoBackButton)
    }
    const navigationBarLoading = style.get('navigationBarLoading') as boolean | undefined
    if (typeof navigationBarLoading === 'boolean') {
      navBarComponentInstance.loading = navigationBarLoading
      this.pageStyle.set('navigationBarLoading', navigationBarLoading)
    }

    const enablePullDownRefresh = style.get('enablePullDownRefresh') as boolean | undefined
    if (typeof enablePullDownRefresh === 'boolean') {
      this.setEnablePullDownRefresh(enablePullDownRefresh)
      this.pageStyle.set('enablePullDownRefresh', enablePullDownRefresh)
    }

    if (this.fullscreenElement == null) {
      this.setPageOrientation(style)
      this.setHideStatusBar(style)
    }
  }

  setPageOrientation(style: Map<string, Object>) {
    const pageOrientation =
      (style.get('pageOrientation') ?? this.pageStyle.get('pageOrientation')) as PageOrientation | undefined
    if (typeof pageOrientation !== 'undefined') {
      switch (pageOrientation) {
        case 'auto': {
          this.pageStyle.set('pageOrientation', 'auto')
          if (canIUse('SystemCapability.Window.SessionManager')) {
            return this.app.window.setPreferredOrientation(window.Orientation.AUTO_ROTATION_UNSPECIFIED)
          } else {
            return this.app.window.setPreferredOrientation(window.Orientation.AUTO_ROTATION_RESTRICTED)
          }
        }
        case 'portrait':
          this.pageStyle.set('pageOrientation', 'portrait')
          return this.app.window.setPreferredOrientation(window.Orientation.PORTRAIT)
        case 'landscape':
          this.pageStyle.set('pageOrientation', 'landscape')
          return this.app.window.setPreferredOrientation(window.Orientation.AUTO_ROTATION_LANDSCAPE_RESTRICTED)
        default:
          this.pageStyle.set('pageOrientation', 'portrait')
          return this.app.window.setPreferredOrientation(window.Orientation.PORTRAIT)
      }
    } else {
      this.pageStyle.set('pageOrientation', 'portrait')
      return this.app.window.setPreferredOrientation(window.Orientation.PORTRAIT)
    }
  }

  setHideStatusBar(style: Map<string, Object>) {
    const hideStatusBar = (style.get('hideStatusBar') ?? this.pageStyle.get('hideStatusBar')) as boolean | undefined
    if (typeof hideStatusBar === 'boolean') {
      if (canIUse('SystemCapability.Window.SessionManager')) {
        this.app.window.setSpecificSystemBarEnabled('status', !hideStatusBar)
      } else {
        if (hideStatusBar) {
          this.app.window.setWindowSystemBarEnable(['navigation'])
        } else {
          this.app.window.setWindowSystemBarEnable(['status', 'navigation'])
        }
      }
      this.pageStyle.set('hideStatusBar', hideStatusBar)
    } else {
      this.pageStyle.set('hideStatusBar', false)
      if (canIUse('SystemCapability.Window.SessionManager')) {
        this.app.window.setSpecificSystemBarEnabled('status', true)
      } else {
        this.app.window.setWindowSystemBarEnable(['status', 'navigation'])
      }
    }
  }

  createDocument(documentData: INodeData): UniDocument {
    // 废弃接口，仅用于兼容
    return this.document
  }

  addPageEventListener(type: 'onReady' | 'onShow' | 'onHide' | 'onTabItemTap' | 'onUnload' | 'onReachBottom' | 'onPullDownRefresh' | 'onPageScroll' | 'onResize' | 'onWebViewServiceMessage' | 'onPopGesture' | 'onRestart' | 'onPageTouchStart' | 'onPageTouchEnd',
    callback: (event: UniPageEvent) => void): UniCallbackWrapper {
    const callbackWrapper = new UniCallbackWrapper(callback)
    this._emitter.on(type, callback)
    return callbackWrapper
  }

  addPageScrollEventListener(callback: (event: UniPageScrollEvent) => void): UniCallbackWrapper {
    throw new Error('Method not implemented.')
  }

  async viewToTempFilePath(options: ViewToTempFilePathOptionsForHarmony): Promise<void> {
    // TODO: path overwrite
    const context = getContext(this)
    const callFail = (errMsg: string) => {
      options.fail?.({ errMsg })
      options.complete?.({ errMsg })
    }
    const _pixelMapToImgPath = (pixelMap: image.PixelMap) => {
      pixelMapToImgPath(context, 'png', pixelMap, options.path).then((tempFilePath: string) => {
        options.success?.({ tempFilePath })
        options.complete?.({ tempFilePath })
      }).catch((err: BusinessError) => {
        callFail(`viewToTempFilePath fail: ${err.message}`)
      })
    }
    const _cropPixelMap = (pixelMap: image.PixelMap) => {
      cropPixelMap(
        pixelMap,
        options.offsetX ? vp2px(parseInt(options.offsetX)) : 0,
        options.offsetY ? vp2px(parseInt(options.offsetY)) : 0,
        null, null
      ).then(() => {
        _pixelMapToImgPath(pixelMap)
      }).catch((err: BusinessError) => {
        callFail(`viewToTempFilePath fail: ${err.message}`)
      })
    }
    const id = options.id
    if (options.deviceShot || (!id && !options.wholeContent)) {
      // 窗口截图
      const pixelMap: image.PixelMap = await windowSnapShot(context)
      _cropPixelMap(pixelMap)
      return
    }
    const el: UniElement | null = id ?
      this.document.getElementById(id) :
      // 当页面配置允许下拉刷新时，会在 body 根节点上创建一个 scroll-view,通过 pageScrollElement 尝试获取真正的根滚动容器
      (this.pageScrollElement || getSnapShotElementByBody(this.document.body));
    if (el) {
      // 暂时通过修改截图元素的背景色补充截图背景
      const originBgColor = el.style.getPropertyValue('backgroundColor');
      !originBgColor &&
      el.style.setProperty('backgroundColor', this.pageStyle.get('backgroundColorContent') || '#ffffff');

      try {
        const pixelMap: image.PixelMap = (options.wholeContent && isScrollAbleElement(el)) ?
          await scrollSnapshot(el) :
          await (el as UniElementImpl).getSnapshotPixelMap()

        _cropPixelMap(pixelMap)
      } catch (e) {
        // 62980109 裁剪错误
        if (e == 62980109) {
          e = '62980109 裁剪错误'
        }
        callFail(`viewToTempFilePath fail: ${e}`)
      }

      !originBgColor && el!.style.setProperty('backgroundColor', originBgColor)
    } else {
      callFail('viewToTempFilePath fail: element not found')
    }
  }

  loadFontFace(options: NativeLoadFontFaceOptions): void {
    this.app.loadFontFace(options)
  }

  get enablePagePullDownRefresh() {
    return !!this.getPageStyle()['enablePullDownRefresh']
  }

  startPullDownRefresh(): void

  startPullDownRefresh(options: AsyncCallback): void

  startPullDownRefresh(options?: AsyncCallback): void {
    const refresherState = this.document.body.refresherState
    if (!this.enablePagePullDownRefresh) {
      return
    }
    refresherState.refresherTriggered = true
    options && options.success({ errMsg: "startPullDownRefresh: ok" })
  }

  setEnablePullDownRefresh(enable: boolean): void {
    this.document.body.refresherState.refresherEnabled = enable
  }

  stopPullDownRefresh(): void {
    const refresherState = this.document.body.refresherState
    if (!this.enablePagePullDownRefresh) {
      return
    }
    refresherState.refresherTriggered = false
  }

  getPageRenderDuration(): number {
    throw new Error('Method not implemented.')
  }

  getPageLayoutDuration(): number {
    throw new Error('Method not implemented.')
  }

  getPageRenderCount(): number {
    throw new Error('Method not implemented.')
  }

  getPageLayoutCount(): number {
    throw new Error('Method not implemented.')
  }

  getFirstRenderStartTime(): number {
    throw new Error('Method not implemented.')
  }

  getFirstLayoutStartTime(): number {
    throw new Error('Method not implemented.')
  }

  getFirstPageRenderDuration(): number {
    return this.document.firstRenderDuration
  }

  getFirstPageLayoutDuration(): number {
    return this.document.firstLayoutDuration
  }

  getCreatedElementCount(): number {
    throw new Error('Method not implemented.')
  }

  getCreatedElementDuration(): number {
    throw new Error('Method not implemented.')
  }

  getAndroidActivity(): object {
    throw new Error('Method not implemented.')
  }

  getAndroidView(): object {
    throw new Error('Method not implemented.')
  }

  getPageStyle(): UTSJSONObject {
    // 并非所有属性都需要返回给用户，用户只能看到pages.json内可设置的这些属性。比如：navigationBarAutoBackButton不可返回给用户
    const pageStyleWhiteList = [
      "navigationBarBackgroundColor",
      "navigationBarTextStyle",
      "navigationBarLoading",
      "navigationBarTitleText",
      "navigationStyle",
      "backgroundColor",
      "backgroundColorContent",
      "enablePullDownRefresh",
      "onReachBottomDistance",
      "pageOrientation",
      "hideStatusBar",
      // TODO
      "navigationBarShadow",
      "disableScroll",
      "backgroundTextStyle",
      "hideBottomNavigationIndicator",
      "androidThreeButtonNavigationTranslucent",
      "backgroundColorTop",
      "backgroundColorBottom",
      "disableSwipeBack",
      "titleImage",
      "transparentTitle",
      "titlePenetrate"
    ]
    const pageStyleMap: Map<string, Object> = new Map()
    this.pageStyle.forEach((value: Object, key: string) => {
      if (pageStyleWhiteList.includes(key)) {
        pageStyleMap.set(key, value)
      }
    })
    pageStyleWhiteList.forEach((key: string) => {
      if (this.pageStyle.has(key)) {
        pageStyleMap.set(key, this.pageStyle.get(key)!)
        return
      }
      if (DefaultPageStyle.has(key)) {
        pageStyleMap.set(key, DefaultPageStyle.get(key)!)
        return
      }
    })
    // pageStyle并没有嵌套多层对象，是用这种方式转为UTSJSONObject即可
    return new globalThis.UTSJSONObject(pageStyleMap)
  }

  setPageStyle(style: UTSJSONObject): void {
    // const styleMap = style!.toMap() as Map<string, Object>
    // 兼容一下传入非UTSJSONObject的场景
    const styleMap: Map<string, Object> = new Map()
    const keys = Object.keys(style)
    this.pageStyle.forEach((value, key) => {
      if (!keys.includes(key)) {
        styleMap.set(key, value)
      }
    })
    keys.forEach((key: string) => {
      styleMap.set(key, style[key])
    })
    this.updateStyle(styleMap)
  }

  /**
   * 应用状态栏样式（页面返回时会调用）
   */
  async applyStatusBarStyle() {
    const navigationBarTextStyle = this.pageStyle.get('navigationBarTextStyle')
    switch (navigationBarTextStyle) {
      case 'white':
        setStatusBarStyle('light')
        break;
      case 'black':
      default:
        setStatusBarStyle('dark')
        break;
    }

    if (this.fullscreenElement == null) {
      this.setHideStatusBar(this.pageStyle)
      await this.setPageOrientation(this.pageStyle)
    }
  }

  addDialogPage(dialogPage: UniNativeDialogPageImpl) {
    const dialogPagesFrameNode = this.dialogPagesFrameNode
    if (dialogPagesFrameNode) {
      // 设置父页面
      dialogPage.parentPage = this
      dialogPagesFrameNode.appendChild(this.createDialogPageFrameNode(dialogPage))
      return true
    }
    return false
  }

  showDialogPage(dialogPage: UniNativeDialogPageImpl, animationType: string | undefined, duration: number) {
    const stackFrameNode = this.findDialogPageStackFrameNode(dialogPage)
    if (stackFrameNode) {
      const dialogPagesFrameNode = this.dialogPagesFrameNode!
      dialogPagesFrameNode.attribute.visibility(Visibility.Visible)
      stackFrameNode.attribute.transition(createTransitionEffect(animationType || 'none', duration))
      stackFrameNode.attribute.visibility(Visibility.Visible)
      return true
    }
    return false
  }

  closeDialogPage(dialogPage: UniNativeDialogPageImpl, animationType: string | undefined, duration: number) {
    const stackFrameNode = this.findDialogPageStackFrameNode(dialogPage)
    if (stackFrameNode) {
      dialogPage.parentPage = null
      const dialogPagesFrameNode = this.dialogPagesFrameNode!
      stackFrameNode.attribute.transition(createTransitionEffect(animationType || 'none', duration, () => {
        // TODO 目前该回调始终不触发
        // dialogPagesFrameNode.removeChild(stackFrameNode)
        // if (!dialogPagesFrameNode.getChildrenCount()) {
        //   dialogPagesFrameNode.attribute.visibility(Visibility.Hidden)
        // }
      }))
      // TODO 触发关闭动画 会导致页面关闭时内容看不到了
      stackFrameNode.attribute.visibility(Visibility.Hidden)
      // 因为 onFinish 不触发，所以通过setTimeout来处理
      setTimeout(() => {
        dialogPagesFrameNode.removeChild(stackFrameNode)
        if (!dialogPagesFrameNode.getChildrenCount()) {
          dialogPagesFrameNode.attribute.visibility(Visibility.Hidden)
        }
      }, duration)
      return true
    }
    return false
  }

  findDialogPageStackFrameNode(dialogPage: UniNativeDialogPageImpl): typeNode.Stack | null {
    const dialogPagesFrameNode = this.dialogPagesFrameNode
    if (dialogPagesFrameNode) {
      const len = dialogPagesFrameNode.getChildrenCount()
      for (let i = 0; i < len; i++) {
        const stackFrameNode = dialogPagesFrameNode.getChild(i)
        if (stackFrameNode?.getFirstChild() === dialogPage.rootNodeController.rootFrameNode) {
          return stackFrameNode as typeNode.Stack
        }
      }
    }
    return null
  }

  createDialogPageFrameNode(dialogPage: UniNativeDialogPageImpl): typeNode.Stack {
    const context = this.app.context
    const stackFrameNode = typeNode.createNode(context, 'Stack')
    stackFrameNode.initialize({ alignContent: Alignment.TopStart })
    stackFrameNode.attribute.visibility(Visibility.Hidden)
    stackFrameNode.appendChild(dialogPage.rootNodeController.rootFrameNode)
    return stackFrameNode
  }

  requestFullscreen(): void {
    (this.parentPage ?? this.tabBarElement)?.requestFullscreen()
  }

  appendFullscreenFrameNode(frameNode: FrameNode, element: UniElement) {
    if (this.fullscreenElement != null) {
      return
    }
    this.fullscreenElement = element
    const context = this.app.context!
    const fullscreenFrameNodeLayer = typeNode.createNode(context, 'Column')
    fullscreenFrameNodeLayer.attribute
      .alignItems(HorizontalAlign.Start)
      .align(Alignment.TopStart)
      .clip(true)
      .width('100%')
      .height('100%')
      .backgroundColor(Color.Black)

    fullscreenFrameNodeLayer.appendChild(frameNode)
    this.fullscreenFrameNode?.appendChild(fullscreenFrameNodeLayer)
    this.fullscreenFrameNode?.attribute.visibility(Visibility.Visible)
  }

  exitFullscreen(options?: ExitFullscreenOptions | null): Promise<void> | undefined {
    (this.parentPage ?? this.tabBarElement)?.exitFullscreen(options)
    if (this.fullscreenElement == null && this.parentPage != null) {
      options?.fail?.(new NoElementFullScreenError('exitFullscreen'))
      options?.complete?.({})
      return
    }
    const fullscreenElement = this.fullscreenElement
    this.fullscreenElement = null;
    const appWindow = getUniApp()?.window
    if (appWindow == null) {
      options?.fail?.(new PageNotReadyOrDestroyedError('exitFullscreen'))
      options?.complete?.({})
      return
    }

    return this.applyStatusBarStyle().then(() =>
    new Promise((resolve): void => {
      setTimeout(() => {
        const status = (fullscreenElement as UniViewElementImpl)?._exitFullscreen(options)
        this.fullscreenFrameNode?.attribute.visibility(Visibility.Hidden)
        if (canIUse('SystemCapability.Window.SessionManager')) {
          appWindow?.disableLandscapeMultiWindow().finally(() => {
            if (status) {
              options?.success?.()
              options?.complete?.({})
            }
            resolve()
          })
        } else {
          if (status) {
            options?.success?.()
            options?.complete?.({})
          }
          resolve()
        }
      }, 20)
    })
    )
  }

  /**
   * 对齐安卓iOS，页面根节点有一个元素且这个元素是scroll元素时才认为其滚动内容为“文档”
   */
  get pageScrollElement(): UniScrollElementImpl | undefined {
    const body = this.document.body
    if (body.children.length !== 1) {
      return
    }
    let rootNode = body.children[0]
    if (!(rootNode instanceof UniScrollElementImpl)) {
      return
    }
    return rootNode
  }
}
