import {
  UniPage,
  ExitFullscreenOptions,
  UniElement as IUniElement,
  UniPageOnRenderChangeCallback,
  UniPageOnLayoutChangeCallback,
  TakeSnapshotOptions
} from "@dcloudio/uni-app-x/types/native";
import { UniElement, UniPageBody as IUniPageBody } from "@dcloudio/uni-app-x/types/native";
import { getUniApp } from "./UniNativeApp";
import { getSafeAreaInsets, ISafeAreaInsets, Unknown, UTSJSONObject } from "./helper";
import { UniNativePageImpl } from "./dom/UniNativePage";
import { UniNativeDialogPageImpl } from "./dom/UniNativeDialogPage";
import { bridge } from "./helper/bridge";

interface IXY {
  x: number;
  y: number;
}

interface IPageBody {
  left: number;
  right: number;
  top: number;
  bottom: number;
  width: number;
  height: number;
}

interface IPageVm$RootAttrs {
  __pageId: number
}

interface IPageVm$Root {
  attrs: IPageVm$RootAttrs
}

interface IPageVm$ {
  root: IPageVm$Root
}

interface IPageVm {
  $: IPageVm$
}

/**
 * 页面性能计时信息
 */
interface UniPagePerformanceTiming {
  /**
   * 性能计时持续的时间，单位为ms
   */
  duration: number
}

export class UniPageImpl implements UniPage {
  route!: string;
  options: UTSJSONObject = new globalThis.UTSJSONObject();
  vm: Unknown;
  $vm: Unknown;
  _nativePageId!: string;
  __nativePage: UniNativePageImpl | null = null;
  /**
   * @internal
   */
  $fontFamilySet = new Set<string>()

  constructor() {
  }

  onLayoutChange(callback: UniPageOnLayoutChangeCallback): number {
    throw new Error("Method not implemented.");
  }

  offLayoutChange(id: number): void {
    throw new Error("Method not implemented.");
  }

  // TODO
  innerWidth!: number
  innerHeight!: number

  get __nativePageId(): string {
    return this._nativePageId
  }

  set __nativePageId(value: string) {
    this._nativePageId = value
    if (this.__nativePage === null) {
      const nativePage: UniNativePageImpl = getUniApp()!.pageManager.findPageById(
        this._nativePageId
      ) as UniNativePageImpl
      this.__nativePage = nativePage
      nativePage.__uniPage = this
    }
  }

  get width(): number {
    return this.pageBody.width
  }

  get height(): number {
    // TODO 暂时使用 window 大小，后续需要根据实际可用大小设置
    const windowRect = this.getNativePage()
      .app
      .window
      .getWindowProperties()
      .windowRect
    return windowRect.height
  }

  get statusBarHeight(): number {
    // TODO 暂时使用安全区信息替代
    const nativeSafeAreaInsets = getSafeAreaInsets();
    return nativeSafeAreaInsets.top
  }

  // Bug 在uni-app-x-runtime编译为har包且被其他包引用时省略此返回类型会导致引用uni-app-x-runtime的har包无法编译出.har文件
  getNativePage(): UniNativePageImpl | UniNativeDialogPageImpl {
    return this.__nativePage!;
  }

  getPageStyle(): UTSJSONObject {
    return this.getNativePage().getPageStyle();
  }

  $getPageStyle(): UTSJSONObject {
    return this.getPageStyle();
  }

  setPageStyle(style: UTSJSONObject): void {
    this.getNativePage().setPageStyle(style);
  }

  $setPageStyle(style: UTSJSONObject): void {
    this.setPageStyle(style);
  }

  getParentPage(): UniPage | null {
    return null;
  }

  $dialogPages: UniPage[] = [];

  getDialogPages(): UniPage[] {
    return this.$dialogPages;
  }

  $systemDialogPages: UniPage[] = [];

  $getSystemDialogPages(): UniPage[] {
    return this.$systemDialogPages;
  }

  __$$getSystemDialogPages(): UniPage[] {
    return this.$systemDialogPages
  }

  getElementById(id: string): UniElement | null {
    const el = bridge.__uni__page_GetElementById(this.getNativePage().app.id, Number(this.getNativePage().pageId), id)
    return el;
  }

  querySelector(selector: string): IUniElement | null {
    const el =
      bridge.__uni__page_QuerySelector(this.getNativePage().app.id, Number(this.getNativePage().pageId), selector)
    return el;
  }

  querySelectorAll(selector: string): IUniElement[] | null {
    const els =
      bridge.__uni__page_QuerySelectorAll(this.getNativePage().app.id, Number(this.getNativePage().pageId), selector)
    return els;
  }

  /**
   * @internal
   */
  getNodeById<T extends IUniElement = IUniElement>(id: string): T | null {
    const el = bridge.__uni__page_GetNodeById(this.getNativePage().app.id, Number(this.getNativePage().pageId), id)
    return el as T | null
  }

  getAndroidView(): Unknown {
    return null;
  }

  getIOSView(): Unknown {
    return null;
  }

  getHTMLElement(): UniElement | null {
    return null;
  }

  get pageBody(): IUniPageBody {
    const nativePage = this.getNativePage();
    return nativePage.pageBody
  }

  get safeAreaInsets(): ISafeAreaInsets {
    const nativePage = this.getNativePage()
    const info = getSafeAreaInsets()
    const navBarHeight = nativePage.getNavigationHeight()
    const windowSize = nativePage.getWindowSize()
    const contentSlotSize = nativePage.getContentSlotSize()
    const bottomOffset = Math.max(windowSize.height - contentSlotSize.height, 0)
    return {
      top: Math.max(info.top - navBarHeight, 0),
      bottom: Math.max(info.bottom - bottomOffset, 0),
      left: info.left,
      right: info.right,
    }
  }

  exitFullscreen(options?: ExitFullscreenOptions | null) {
    this.getNativePage().exitFullscreen(options)
  }

  get fullscreenElement(): UniElement | null {
    return this.getNativePage().fullscreenElement
  }

  getAndroidActivity(): object {
    throw new Error('Method not implemented.')
  }

  createElement(tagName: string): IUniElement {
    // nativePage 实例不许为空
    return this.__nativePage!.document.createElement(tagName)
  }

  onRenderChangeIndex: number = 0
  onRenderChangeCallbacks: Map<number, UniPageOnRenderChangeCallback> = new Map()

  /**
   * 监听页面渲染变化更新事件
   * 前端封装为页面的生命周期 onLayout
   */
  onRenderChange(callback: UniPageOnRenderChangeCallback): number {
    const id = this.onRenderChangeIndex++
    this.onRenderChangeCallbacks.set(id, callback)
    bridge.__uni__page_AddEventListener(this.getNativePage().app.id, Number(this.getNativePage().pageId),
      'renderchange', callback)
    return id
  }

  /**
   * 取消监听页面渲染变化更新事件
   */
  offRenderChange(id: number): void {
    const callback = this.onRenderChangeCallbacks.get(id)
    if (callback) {
      this.onRenderChangeCallbacks.delete(id)
      bridge.__uni__page_RemoveEventListener(this.getNativePage().app.id, Number(this.getNativePage().pageId),
        'renderchange', callback)
    }
  }

  private onTouchStartIndex: number = 0
  private onTouchStartCallbacks: Map<number, () => void> = new Map()

  onTouchStart(callback: () => void): number {
    const id = this.onTouchStartIndex++
    this.onTouchStartCallbacks.set(id, callback)
    return id
  }

  offTouchStart(id: number): void {
    const callback = this.onTouchStartCallbacks.get(id)
    if (callback) {
      this.onTouchStartCallbacks.delete(id)
    }
  }

  /**
   * @internal
   */
  triggerTouchStart(): void {
    this.onTouchStartCallbacks.forEach((callback) => {
      callback()
    })
  }

  private onTouchEndIndex: number = 0
  private onTouchEndCallbacks: Map<number, () => void> = new Map()

  onTouchEnd(callback: () => void): number {
    const id = this.onTouchEndIndex++
    this.onTouchEndCallbacks.set(id, callback)
    return id
  }

  offTouchEnd(id: number): void {
    const callback = this.onTouchEndCallbacks.get(id)
    if (callback) {
      this.onTouchEndCallbacks.delete(id)
    }
  }

  /**
   * @internal
   */
  triggerTouchEnd(): void {
    this.onTouchEndCallbacks.forEach((callback) => {
      callback()
    })
  }

  takeSnapshot(options: TakeSnapshotOptions): void {
    this.__nativePage?.viewToTempFilePath({
      id: null,
      offsetX: null,
      offsetY: null,
      deviceShot: false,
      wholeContent: true,
      path: `uni-page-take-snapshot_${Date.now()}`,
      overwrite: true,
      success: options.success,
      fail: options.fail,
      complete: options.complete
    })
  }
}

export class UniNormalPageImpl extends UniPageImpl {
}

export class UniDialogPageImpl extends UniPageImpl {
}
