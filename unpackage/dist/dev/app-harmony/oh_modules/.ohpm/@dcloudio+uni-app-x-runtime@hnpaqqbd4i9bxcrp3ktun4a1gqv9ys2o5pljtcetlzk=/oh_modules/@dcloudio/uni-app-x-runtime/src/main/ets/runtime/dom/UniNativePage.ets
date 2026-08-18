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
  UniScrollViewElement
} from '@dcloudio/uni-app-x/types/native'
import { UniCallbackWrapper } from '../libs/dom'
import {
  AsyncCallback,
  UTSJSONObject,
  setStatusBarStyle,
  cropPixelMap,
  Unknown,
  toRecord,
  getSafeAreaInsets,
  pixelMapToImgPath,
  getSnapShotElementByBody,
  windowSnapShot,
  setProperty,
  isTransparent
} from '../helper'
import { getUniApp, UniNativeAppImpl } from '../UniNativeApp'
import {
  DialogPageController,
  DialogPageControllerArray,
  PageContainer,
  AnimationController,
  PageStyle,
} from '../components/Page'
import { RootNodeContent } from '../Node'
import { TinyEmitter } from 'tiny-emitter'
import { typeNode, window } from '@kit.ArkUI'
import { UniSafeAreaInsets } from '@dcloudio/uni-app-x/types/native'
import { UniNativeDialogPageImpl } from './UniNativeDialogPage'
import {
  checkAnimationInType,
  checkAnimationOutType,
  createTransitionEffect,
  resolveAnimationOutType
} from '../helper/transitionEffect'
import { image } from '@kit.ImageKit'
import { BusinessError } from '@kit.BasicServicesKit'
import { UniDocumentImpl } from '../libs/dom'
import { bridge } from '../helper/bridge'
import { UniNativePageImpl as IUniNativePageImpl } from './IUniNativePage'
import { fileIo } from '@kit.CoreFileKit';
import { UniScrollViewElementImpl } from '../libs/dom'
import { UniElementImpl } from '../libs/dom'
import type { UniPageImpl } from '../UniPage'
import { getFullscreenError, NoElementFullScreenError, PageNotReadyOrDestroyedError } from '../libs/dom'

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

export const closingPagesMap: Map<string, IUniNativePage> = new Map()

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

type PageSizeChangeCallback = (size: Size) => void
type ParentPageChangeCallback = (parentPage: UniNativePageImpl | null) => void

type PageOrientation = "auto" | "portrait" | "landscape"

export class UniNativePageImpl implements IUniNativePage, IUniNativePageImpl {
  pageUrl: string
  pageId: string
  private _parentPage: UniNativePageImpl | null = null
  // tabBarElement: UniTabsElementImpl | null = null
  width!: number
  height!: number
  statusBarHeight!: number
  __uniPage: UniPageImpl | null = null

  get type() {
    return 'default'
  }

  _nativeElement: UniElement | null = null

  get bodyElement() {
    if (!this._nativeElement && this.page) {
      this._nativeElement = new UniElementImpl(0, this, 'BODY')
    }
    return this._nativeElement
  }

  document: ESObject
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
  private rootNodeContent: RootNodeContent
  fullscreenElement: UniElement | null = null
  private _emitter = new TinyEmitter()
  protected dialogPagesFrameNode: typeNode.Stack | null = null
  private pageStyleCache: Map<string, Object>
  /**
   * @internal
   */
  pageStyle = new PageStyle()
  /**
   * @internal
   */
  private dialogPages: DialogPageControllerArray = new DialogPageControllerArray()
  /**
   * @internal
   */
  animationController: AnimationController = new AnimationController()
  private stopContentSlotSizeChange: (() => void) | null = null
  private onParentPageChangeCallbacks: ParentPageChangeCallback[] = []

  get parentPage(): UniNativePageImpl | null {
    return this._parentPage
  }

  set parentPage(value: UniNativePageImpl | null) {
    if (this._parentPage === value) {
      return
    }
    this._parentPage = value
    this.onParentPageChangeCallbacks.forEach((callback) => {
      callback(value)
    })
  }

  protected onParentPageChange(callback: ParentPageChangeCallback): () => void {
    this.onParentPageChangeCallbacks.push(callback)
    return () => {
      const index = this.onParentPageChangeCallbacks.findIndex((item) => item === callback)
      if (index !== -1) {
        this.onParentPageChangeCallbacks.splice(index, 1)
      }
    }
  }

  private getScreenSize(): Size {
    const windowRect = this.app.window.getWindowProperties().windowRect
    return {
      width: px2vp(windowRect.width),
      height: px2vp(windowRect.height),
    }
  }

  getWindowSize(): Size {
    if (this.parentPage) {
      return this.parentPage.getContentSlotSize()
    }
    return this.getScreenSize()
  }

  getContentSlotSize(): Size {
    return this.getWindowSize()
  }

  onWindowSizeChange(callback: PageSizeChangeCallback): () => void {
    let stopWindowSizeChange: (() => void) | null = null

    const bindWindowSizeChange = (parentPage: UniNativePageImpl | null) => {
      stopWindowSizeChange?.()
      if (parentPage) {
        stopWindowSizeChange = parentPage.onContentSlotSizeChange(callback)
        return
      }
      const onWindowSizeChange = (size: Size) => {
        callback({
          width: px2vp(size.width),
          height: px2vp(size.height),
        } as Size)
      }
      this.app.window.on('windowSizeChange', onWindowSizeChange)
      stopWindowSizeChange = () => {
        // 避免整个应用被 kill 时鸿蒙 API 内部报错
        try {
          this.app.window.off('windowSizeChange', onWindowSizeChange)
        } catch (_) {
          // ignore
        }
      }
    }

    bindWindowSizeChange(this.parentPage)
    const stopParentPageChange = this.onParentPageChange((parentPage: UniNativePageImpl | null) => {
      bindWindowSizeChange(parentPage)
      // 仅在 parentPage 有值时直接触发 change
      if (parentPage) {
        callback(this.getWindowSize())
      }
    })
    return () => {
      stopWindowSizeChange?.()
      stopParentPageChange()
    }
  }

  onContentSlotSizeChange(callback: PageSizeChangeCallback): () => void {
    return this.onWindowSizeChange(callback)
  }

  constructor(
    pageUrl: string,
    pageId: string,
    pageStyle: Map<string, Object>,
  ) {
    this.pageUrl = pageUrl
    this.pageId = pageId
    this.pageStyleCache = new Map<string, Object>()
    pagesMap.set(pageId, this)
    pagesArray.push(this)
    this.app = getUniApp()!
    const rootNodeContent = this.rootNodeContent = new RootNodeContent()
    const nativeStyle = this.updateStyle(pageStyle, false)!
    // TODO 暂时使用 window 大小，后续需要根据实际可用大小设置
    const contentSlotSize = this.getContentSlotSize()
    bridge.__uni__page_Create(Number(pageId), rootNodeContent, contentSlotSize.width, contentSlotSize.height, nativeStyle)
    this.stopContentSlotSizeChange = this.onContentSlotSizeChange((contentSlotSize) => {
      const width = contentSlotSize.width
      const height = contentSlotSize.height
      bridge.__uni__page_OnSizeChange(Number(pageId), width, height)
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

      const screenSize = this.getScreenSize()
      let currentWindow = this.app.window
      const orientation = currentWindow.getPreferredOrientation()
      const options: OnResizeOptions = {
        deviceOrientation: orientation === window.Orientation.LANDSCAPE ||
          orientation === window.Orientation.LANDSCAPE_INVERTED ? 'landscape' : 'portrait',
        size: {
          screenHeight: screenSize.height,
          screenWidth: screenSize.width,
          windowHeight: Math.max(contentSlotSize.height - this.getNavigationHeight(), 0),
          windowWidth: contentSlotSize.width
        }
      }
      this._emitter.emit('onResize', options)
    })
    this.document = new UniDocumentImpl(this)

    // dialogPages
    if (this.type === 'default') { // 仅普通页面需要创建dialogPages
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
    const contentSlotSize = this.getContentSlotSize()
    const windowWidth = contentSlotSize.width
    const windowHeight = contentSlotSize.height
    const insetTop = this.getNavigationHeight()
    // TODO SafeAreaInsets
    const insetLeft = 0
    const insetRight = 0
    return {
      top: insetTop,
      // bottom 定义为距离顶部的坐标
      bottom: Math.ceil(windowHeight),
      left: insetLeft,
      // right 定义为距离左侧的坐标
      right: Math.ceil(windowWidth - insetRight),
      width: Math.ceil(windowWidth - insetLeft - insetRight),
      height: Math.ceil(windowHeight - insetTop),
    } as IUniPageBody
  }

  /**
   * @internal
   */
  init(page: PageContainer) {
    this.page = page
    page.pageStyle = this.pageStyle
    page.rootNodeContent = this.rootNodeContent
    page.dialogPages = this.dialogPages
    page.animationController = this.animationController
    page.onTouchCallback = (event: TouchEvent) => {
      const uniPage = this.__uniPage
      if (uniPage) {
        switch (event.type) {
          case TouchType.Down:
            uniPage.triggerTouchStart()
            break
          case TouchType.Up:
            uniPage.triggerTouchEnd()
            break
        }
      }
    }
  }

  startRender(): void

  startRender(callback?: (() => void) | null): void

  startRender(callback?: (() => void) | null): void {
    // TODO
  }

  private stopRender() {
    // TODO
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
    let duration = animationType === 'none' ? 0 : (typeof animationDuration === 'number' ? animationDuration : 300)
    if (this.isRendering) {
      duration = 0
    }
    this.showAnimationType = animationType
    this.showDuration = duration
    // 沿用无动画情况下立即回调的旧逻辑
    this.showWithAnimation(animationType, duration, duration ? callback : null)
    this.isRendering = true
    if (!duration && callback) {
      callback()
    }
    // TODO
    this._emitter.emit('onShow')
  }

  protected showWithAnimation(animationType: string | undefined, duration: number,
    callback?: (() => void) | null | undefined): void {
    let useAnimationControllerCallback = false
    const router = this.app.router
    if (!this.isRendering) {
      this.animationController.type = animationType
      this.animationController.duration = duration
      if (duration !== 0) {
        this.animationController.callback = callback
        useAnimationControllerCallback = true
      }
      router.pushPathByName(this.pageId, duration !== 0)
    } else {
      // 已显示的非Tab页面移动到顶层
      if (this.page) {
        router.moveToTop(this.page.pageId, false)
      }
    }
    if (!useAnimationControllerCallback && callback) {
      setTimeout(callback, duration)
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
    let duration = animationType === 'none' ? 0 : (typeof animationDuration === 'number' ? animationDuration : 300)
    pagesMap.delete(this.pageId)
    closingPagesMap.set(this.pageId, this)
    const index = pagesArray.indexOf(this)
    if (index !== -1) {
      pagesArray.splice(index, 1)
    }
    this.stopRender()
    if (!this.isRendering) {
      duration = 0
    }
    this.closeWithAnimation(animationType, duration, () => {
      if (callback) {
        try {
          callback()
        } catch (e) {
          console.error(e)
        }
      }
      this.dispose()
    })
    this.isRendering = false
    // 触发onUnload
    this._emitter.emit('onUnload')
    if (!callback) {
      this.dispose()
    }
  }

  // 避免内存泄漏
  dispose() {
    closingPagesMap.delete(this.pageId)
    this.stopContentSlotSizeChange?.()
    this.stopContentSlotSizeChange = null
    bridge.__uni__page_Close(Number(this.pageId))
    if (this.page) {
      this.page.onTouchCallback = null
      this.page = null
    }
    // this.navBarFrameNode.disposeTree()
    // this.dialogPagesFrameNode?.dispose()
    // this.contentFrameNode.dispose();
    // this.rootNodeController.dispose()
    // this.fullscreenFrameNode?.disposeTree()
    // // TODO 内存泄漏 为何必须主动移除onTouch？，否则会导致内存泄漏
    // // 即使this.pageFrameNode设置为null，或者 dispose等，均不生效，必须主动移除onTouch
    // this.pageFrameNode.attribute.onTouch(undefined)
    // this.pageFrameNode.commonEvent.setOnSizeChange(undefined)
    // this.pageFrameNode.dispose()
    // // 强制释放，正常来说是不需要手动释放的，但是可能其他代码有问题，导致无法释放
    // this.document.dispose();
    // (this._emitter as object as PrivateTinyEmitter).e = {}
    // this.app = undefined as Unknown as UniNativeAppImpl
    // this.__uniPage = null
  }

  protected closeWithAnimation(animationType: string | undefined, duration: number,
    callback?: (() => void) | null | undefined): void {
    this.animationController.finish?.()
    let useAnimationControllerCallback = false
    if (this.isRendering) {
      const router = this.app.router
      const array = router.getAllPathName()
      const name = this.pageId
      if (array.includes(name)) {
        // 移除首页也使用 pop 以避免 removeByName 产生的额外动画
        if (array[array.length - 1] === name) {
          this.animationController.type = animationType
          this.animationController.duration = duration
          // 无动画或无页面挂载时不使用 animationController.callback
          if (duration != 0 && this.page) {
            this.animationController.callback = callback
            useAnimationControllerCallback = true
          }
          router.pop(duration !== 0)
        } else {
          router.removeByName(name)
        }
      } else {
        console.error('close page error')
      }
    }
    if (!useAnimationControllerCallback && callback) {
      setTimeout(callback, duration)
    }
  }

  /**
   * @internal
   */
  private isCustomNavigationStyle = false

  /**
   * @internal
   */
  getNavigationHeight(): number {
    if (this.isCustomNavigationStyle) {
      return 0
    }
    const H = 44
    const top = getSafeAreaInsets().top
    return H + top
  }

  updateStyle(style: Map<string, Object>, useNativeStyle: boolean = true): undefined | Object {
    // backgroundColor 同 Dom1 逻辑，不作更多校验
    const backgroundColor = style.get('backgroundColor') as string | undefined
    if (typeof backgroundColor === 'string') {
      this.pageStyle.backgroundColor = backgroundColor
    }
    // TODO fullscreen
    this.setPageOrientation(style)
    this.setHideStatusBar(style)

    interface NativeStyle {
      /**
       * 页面容器背景色
       */
      backgroundColorContent?: string
      /**
       * 导航栏样式
       */
      navigationStyle?: string
      /**
       * 导航栏标题文字内容
       */
      navigationBarTitleText?: string
      /**
       * 导航栏背景颜色（同状态栏背景色）
       */
      navigationBarBackgroundColor?: string
      /**
       * 导航栏标题颜色
       */
      navigationBarTextStyle?: string
      /**
       * 返回按钮
       */
      navigationBarAutoBackButton?: boolean
      navigationBarLoading?: boolean
      enablePullDownRefresh?: boolean
      onReachBottomDistance?: number
    }

    this.isCustomNavigationStyle = style.get('navigationStyle') === 'custom'

    const nativeStyle = {} as NativeStyle
    const pageStyleNativeKeys = [
      'backgroundColor',
      'backgroundColorContent',
      'navigationStyle',
      'navigationBarTitleText',
      'navigationBarBackgroundColor',
      'navigationBarTextStyle',
      'navigationBarAutoBackButton',
      'navigationBarLoading',
      'enablePullDownRefresh',
      'onReachBottomDistance',
    ]
    style.forEach((value, key) => {
      if (pageStyleNativeKeys.includes(key)) {
        setProperty(nativeStyle, key, value)
        // TODO 暂时不作校验 直接合并至 this.pageStyleCache
        this.pageStyleCache.set(key, value)
      }
    })
    if (useNativeStyle) {
      bridge.__uni__page_UpdateStyle(this.app.id, Number(this.pageId), nativeStyle)
      return
    }
    return nativeStyle
  }

  setPageOrientation(style: Map<string, Object>) {
    const pageOrientation =
      (style.get('pageOrientation') ?? this.pageStyleCache.get('pageOrientation')) as PageOrientation | undefined
    if (typeof pageOrientation !== 'undefined') {
      switch (pageOrientation) {
        case 'auto': {
          this.pageStyleCache.set('pageOrientation', 'auto')
          if (canIUse('SystemCapability.Window.SessionManager')) {
            return this.app.window.setPreferredOrientation(window.Orientation.AUTO_ROTATION_UNSPECIFIED)
          } else {
            return this.app.window.setPreferredOrientation(window.Orientation.AUTO_ROTATION_RESTRICTED)
          }
        }
        case 'portrait':
          this.pageStyleCache.set('pageOrientation', 'portrait')
          return this.app.window.setPreferredOrientation(window.Orientation.PORTRAIT)
        case 'landscape':
          this.pageStyleCache.set('pageOrientation', 'landscape')
          return this.app.window.setPreferredOrientation(window.Orientation.AUTO_ROTATION_LANDSCAPE_RESTRICTED)
        default:
          this.pageStyleCache.set('pageOrientation', 'portrait')
          return this.app.window.setPreferredOrientation(window.Orientation.PORTRAIT)
      }
    } else {
      this.pageStyleCache.set('pageOrientation', 'portrait')
      return this.app.window.setPreferredOrientation(window.Orientation.PORTRAIT)
    }
  }

  setHideStatusBar(style: Map<string, Object>) {
    const hideStatusBar =
      (style.get('hideStatusBar') ?? this.pageStyleCache.get('hideStatusBar')) as boolean | undefined
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
      this.pageStyleCache.set('hideStatusBar', hideStatusBar)
    } else {
      this.pageStyleCache.set('hideStatusBar', false)
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
    const selfEvents = ['onShow', 'onHide', 'onResize', 'onUnload']
    if (selfEvents.includes(type)) {
      this._emitter.on(type, callback)
    } else {
      bridge.__uni__page_AddEventListener(this.app.id, Number(this.pageId), type.substring(2).toLowerCase(), callback)
    }
    return callbackWrapper
  }

  addPageScrollEventListener(callback: (event: UniPageScrollEvent) => void): UniCallbackWrapper {
    throw new Error('Method not implemented.')
  }

  async viewToTempFilePath(options: ViewToTempFilePathOptionsForHarmony): Promise<void> {
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
      this.__uniPage!.getElementById(id) :
      // 当页面配置允许下拉刷新时，会在 body 根节点上创建一个 scroll-view,通过 pageScrollElement 尝试获取真正的根滚动容器
      (this.pageScrollElement || (this.bodyElement ? getSnapShotElementByBody(this.bodyElement) : null));
    if (el) {
      // 暂时通过修改截图元素的背景色补充截图背景
      const originBgColor = el.style.getPropertyValue('background-color');
      // dom2 返回背景色格式为 #aa(透明度)bbbbbb(色值)格式
      (!originBgColor || isTransparent(originBgColor)) &&
        el.style.setProperty('background-color', this.pageStyleCache.get('backgroundColorContent') || '#ffffff');
      el.takeSnapshot({
        success(res) {
          try {
            const file = fileIo.openSync(res.tempFilePath, fileIo.OpenMode.READ_ONLY);
            console.info('file fd: ' + file.fd);
            const decodingOptions: image.DecodingOptions = {
              editable: true
            }
            const imageSource: image.ImageSource = image.createImageSource(file.fd);
            imageSource.createPixelMap(decodingOptions, (err: BusinessError, pixelMap: image.PixelMap) => {
              if (err !== undefined) {
                callFail(`viewToTempFilePath fail: ${err.message}`)
              } else {
                _cropPixelMap(pixelMap)
              }
            })
          } catch (e) {
            // 62980109 裁剪错误
            if (e == 62980109) {
              e = '62980109 裁剪错误'
            }
            callFail(`viewToTempFilePath fail: ${e}`)
          }
        },
        fail(error) {
          callFail(`viewToTempFilePath fail: ${error.errMsg}`)
        },
        complete() {
          (!originBgColor || isTransparent(originBgColor)) && el!.style.setProperty('background-color', originBgColor)
        }
      })
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
    // const refresherState = this.document.body.refresherState
    // if (!this.enablePagePullDownRefresh) {
    //   return
    // }
    // refresherState.refresherTriggered = true
    // options && options.success({ errMsg: "startPullDownRefresh: ok" })
  }

  setEnablePullDownRefresh(enable: boolean): void {
    // this.document.body.refresherState.refresherEnabled = enable
  }

  stopPullDownRefresh(): void {
    // const refresherState = this.document.body.refresherState
    // if (!this.enablePagePullDownRefresh) {
    //   return
    // }
    // refresherState.refresherTriggered = false
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
    throw new Error('Method not implemented.')
  }

  getFirstPageLayoutDuration(): number {
    throw new Error('Method not implemented.')
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
    this.pageStyleCache.forEach((value: Object, key: string) => {
      if (pageStyleWhiteList.includes(key)) {
        pageStyleMap.set(key, value)
      }
    })
    pageStyleWhiteList.forEach((key: string) => {
      if (this.pageStyleCache.has(key)) {
        pageStyleMap.set(key, this.pageStyleCache.get(key)!)
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
    this.pageStyleCache.forEach((value, key) => {
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
    const navigationBarTextStyle = this.pageStyleCache.get('navigationBarTextStyle')
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
      this.setHideStatusBar(this.pageStyleCache)
      await this.setPageOrientation(this.pageStyleCache)
    }
  }

  waitNativeRender(callback: () => void) {
    bridge.__uni__page_WaitNativeRender(this.app.id, Number(this.pageId), callback)
  }

  addDialogPage(dialogPage: UniNativeDialogPageImpl) {
    // 设置父页面
    dialogPage.parentPage = this
    this.dialogPages.push(this.createDialogPageController(dialogPage))
    return true
  }

  showDialogPage(dialogPage: UniNativeDialogPageImpl, animationType: string | undefined, duration: number) {
    const dialogPageController = this.findDialogPageController(dialogPage)
    if (dialogPageController) {
      // TODO 页面显示动画
      dialogPageController.visibility = Visibility.Visible
      dialogPageController.attributeUpdater.getAttribute(attr => {
        attr.visibility(Visibility.Visible)
      })
      return true
    }
    return false
  }

  closeDialogPage(dialogPage: UniNativeDialogPageImpl, animationType: string | undefined, duration: number) {
    const dialogPageController = this.findDialogPageController(dialogPage)
    if (dialogPageController) {
      dialogPage.parentPage = null
      // TODO 页面关闭动画
      // 暂时与 Dom1 一致，所以通过setTimeout来处理
      setTimeout(() => {
        this.dialogPages.splice(this.dialogPages.indexOf(dialogPageController), 1)
      }, duration)
      return true
    }
    return false
  }

  findDialogPageController(dialogPage: UniNativeDialogPageImpl): DialogPageController | null {
    const dialogPageController = this.dialogPages.find(item => item.pageId === dialogPage.pageId)
    return dialogPageController || null
  }

  createDialogPageController(dialogPage: UniNativeDialogPageImpl): DialogPageController {
    const dialogPageController = new DialogPageController(dialogPage.pageId, Visibility.Hidden)
    return dialogPageController
  }

  requestFullscreen(): void {
    this.parentPage?.requestFullscreen()
  }

  exitFullscreen(options?: ExitFullscreenOptions | null): Promise<void> | undefined {
    this.parentPage?.exitFullscreen(options)
    if (this.fullscreenElement == null && this.parentPage != null) {
      const err = new NoElementFullScreenError('exitFullscreen')
      options?.fail?.(err)
      options?.complete?.(err)
      return
    }
    const fullscreenElement = this.fullscreenElement
    if (fullscreenElement == null) {
      const err = new NoElementFullScreenError('exitFullscreen')
      options?.fail?.(err)
      options?.complete?.(err)
      return
    }
    this.fullscreenElement = null;
    const appWindow = getUniApp()?.window
    if (appWindow == null) {
      const err = new PageNotReadyOrDestroyedError('exitFullscreen')
      options?.fail?.(err)
      options?.complete?.(err)
      return
    }

    appWindow?.setSpecificSystemBarEnabled('navigationIndicator', true)

    return this.applyStatusBarStyle().then(() => new Promise((resolve): void => {
      setTimeout(() => {
        const status = (fullscreenElement as Unknown as ESObject)?._exitFullscreen(options) as Promise<boolean>
        status.then(() => {
          if (canIUse('SystemCapability.Window.SessionManager')) {
            appWindow?.disableLandscapeMultiWindow().finally(resolve)
          } else {
            resolve()
          }
        }).catch(() => {
          const err = getFullscreenError('exitFullscreen')
          options?.fail?.(err)
          options?.complete?.(err)
          resolve()
        })
      }, 20)
    }))
  }

  // /**
  //  * 对齐安卓iOS，页面根节点有一个元素且这个元素是scroll元素时才认为其滚动内容为“文档”
  //  */
  get pageScrollElement(): UniScrollViewElementImpl | undefined {
    const body = this.bodyElement
    if (body?.children.length !== 1) {
      return
    }
    let rootNode = body.children[0]
    if (!(rootNode instanceof UniScrollViewElementImpl)) {
      return
    }
    return rootNode
  }
}
