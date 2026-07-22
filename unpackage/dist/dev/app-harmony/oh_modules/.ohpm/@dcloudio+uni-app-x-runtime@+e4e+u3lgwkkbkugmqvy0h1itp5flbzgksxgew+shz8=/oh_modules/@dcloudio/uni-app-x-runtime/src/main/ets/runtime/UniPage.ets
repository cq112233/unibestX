import {
  UniPage,
  ExitFullscreenOptions,
  UniElement as IUniElement,
  UniPageBody as IUniPageBody,
  TakeSnapshotOptions,
  TakeSnapshotFail
} from "@dcloudio/uni-app-x/types/native";
import { getUniApp } from "./UniNativeApp";
import { Unknown, UTSJSONObject } from "./helper";
import {
  ISafeAreaInsets,
  getNativeSafeAreaInsets,
  getNativeWindowRect,
  formatValueCeil,
  formatValueRound,
} from "./window";
import { UniDocumentImpl } from "./dom/UniDocument";
import { UniNativePageImpl } from "./dom/UniNativePage";
import { UniNativeDialogPageImpl } from "./dom/UniNativeDialogPage";
import { SnapshotOptions } from "./dom/UniElement";

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

  // TODO
  innerWidth!: number
  innerHeight!: number

  get __nativePageId(): string {
    return this._nativePageId
  }

  set __nativePageId(value: string) {
    this._nativePageId = value
    if (this.__nativePage === null) {
      const nativePage: UniNativePageImpl | null = getUniApp()!.pageManager.findPageById(
        this._nativePageId
      )
      this.__nativePage = nativePage
      nativePage && (nativePage.__uniPage = this)
    }
  }

  get width(): number {
    return this.pageBody.width
  }

  get height(): number {
    const navBarFrameNode = this.getNativePage().navBarFrameNode
    const navBarHeightVp = navBarFrameNode ? navBarFrameNode.getMeasuredSize().height : 0
    return this.pageBody.height + formatValueRound(navBarHeightVp)
  }

  get statusBarHeight(): number {
    const nativeSafeAreaInsets = getNativeSafeAreaInsets();
    return formatValueRound(nativeSafeAreaInsets.top)
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

  getElementById(id: string): IUniElement | null {
    return this.getNativePage().document.getElementById(id);
  }

  querySelector(selector: string): IUniElement | null {
    return this.getNativePage().document.querySelector(selector);
  }

  querySelectorAll(selector: string): IUniElement[] | null {
    return this.getNativePage().document.querySelectorAll(selector);
  }

  getAndroidView(): Unknown {
    return null;
  }

  getIOSView(): Unknown {
    return null;
  }

  getHTMLElement(): IUniElement | null {
    return null;
  }

  get pageBody(): IUniPageBody {
    /**
     * onReady时使用bodyElement无法获取大小，临时改用documentElement
     * 如果要彻底修复应调整onReady时机
     */
    const nativePage = this.getNativePage();
    const document = nativePage.document as UniDocumentImpl
    const documentPosition = document.frameNode.getPositionToWindow()
    const documentSize = document.frameNode.getMeasuredSize()

    const top = vp2px(documentPosition.y);
    const left = vp2px(documentPosition.x);
    const width = documentSize.width
    const height = documentSize.height
    const bottom = top + height
    const right = left + width
    return {
      top: formatValueRound(top),
      bottom: formatValueCeil(bottom),
      left: formatValueRound(left),
      right: formatValueCeil(right),
      width: formatValueCeil(width),
      height: formatValueCeil(height),
    } as IPageBody;
  }

  get safeAreaInsets() {
    const nativeSafeAreaInsets = getNativeSafeAreaInsets();
    const nativeWindowRect = getNativeWindowRect();
    const nativePage = this.getNativePage();
    const document = nativePage.document as UniDocumentImpl
    const documentPosition = document.frameNode.getPositionToWindow();
    const documentSize = document.frameNode.getMeasuredSize();

    const bodyPositionPx = {
      x: Math.round(vp2px(documentPosition.x)),
      y: Math.round(vp2px(documentPosition.y)),
    } as IXY;

    const bodyArea = {
      top: bodyPositionPx.y,
      bottom: nativeWindowRect.height - bodyPositionPx.y - documentSize.height,
      left: bodyPositionPx.x,
      right: nativeWindowRect.width - bodyPositionPx.x - documentSize.width,
    } as ISafeAreaInsets;
    const computeEdge = (bodyEdge: number, nativeEdge: number) => {
      return Math.max(0, nativeEdge - bodyEdge);
    };
    return {
      top: formatValueRound(computeEdge(bodyArea.top, nativeSafeAreaInsets.top)),
      bottom: formatValueRound(
        computeEdge(bodyArea.bottom, nativeSafeAreaInsets.bottom)
      ),
      left: formatValueRound(computeEdge(bodyArea.left, nativeSafeAreaInsets.left)),
      right: formatValueRound(
        computeEdge(bodyArea.right, nativeSafeAreaInsets.right)
      ),
    } as ISafeAreaInsets;
  }

  exitFullscreen(options?: ExitFullscreenOptions | null) {
    this.getNativePage().exitFullscreen(options)
  }

  get fullscreenElement(): IUniElement | null {
    return this.getNativePage().fullscreenElement
  }

  getAndroidActivity(): object {
    throw new Error('Method not implemented.')
  }

  createElement(tagName: string): IUniElement {
    // nativePage 实例不许为空
    return this.__nativePage!.document.createElement(tagName)
  }

  /**
   * @internal
   */
  getNodeById<T extends IUniElement = IUniElement>(id: string): T | null {
    return this.getNativePage().document.getRealDomNodeById<T>(id)
  }
  takeSnapshot(options: TakeSnapshotOptions) {
    if(this.vm == null){
      const err: TakeSnapshotFail = {errMsg: 'page instance does not exist'}
      options.fail?.(err)
      options.complete?.(err)
      return
    }
    ;(this.vm as UTSJSONObject)['$nativePage'].viewToTempFilePath({
      path: `uni-page-take-snapshot_${Date.now()}`,
      wholeContent: true,
      success: options.success,
      fail: options.fail,
      complete: options.complete,
    })
  }
}

export class UniNormalPageImpl extends UniPageImpl {
}

export class UniDialogPageImpl extends UniPageImpl {
}
