import { UniDocument } from "./UniDocument"
import { INodeData } from "./NodeData"
import { UniPageEvent } from "./UniPageEvent"
import { UniPageScrollEvent } from "./UniPageScrollEvent"
import { NativeLoadFontFaceOptions } from "./NativeLoadFontFaceOptions"
import { UniCallbackWrapper } from "./UniCallbackWrapper"
import { ViewToTempFilePathOptions } from "./ViewToTempFilePathOptions"
import { UniSafeAreaInsets } from "./UniSafeAreaInsets"
import { UniPageBody } from "./UniPageBody"

/**
 * @package io.dcloud.uniapp.runtime
 * @internal
 */
export interface UniNativePage {
  readonly pageUrl: string
  /**
   * 页面id
   */
  readonly pageId: string
  /**
   * 页面类型
   * 取值范围 'default'|'dialog'
   */
  readonly type: string
  /**
   * @internal
   */
  readonly document: UniDocument
  /**
   * 页面内容区域信息
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.51"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.51"
   *   	    }
   *    }
   * }
   */
  readonly pageBody: UniPageBody
  /**
   * 安全区域插入位置（与屏幕边界的距离）信息
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.51"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.51"
   *   	    }
   *    }
   * }
   */
  readonly safeAreaInsets: UniSafeAreaInsets
  /**
   * 页面窗口宽度
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.61"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.61"
   *   	    }
   *    }
   * }
   */
  readonly width: number
  /**
   * 页面窗口高度
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.61"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.61"
   *   	    }
   *    }
   * }
   */
  readonly height: number
  /**
   * 页面状态栏高度
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.61"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.61"
   *   	    }
   *    }
   * }
   */
  readonly statusBarHeight: number
  /**
   * 开启排版渲染
   * @internal
   */
  startRender(): void
  /**
   * 开启排版渲染
   * @param callback 首次排版回调监听器
   * @internal
   */
  startRender(callback?: (() => void) | null): void
  /**
   * 显示页面
   * @param options 显示配置项
   * @param callback 显示完毕监听器
   * @internal
   */
  show(options?: Map<string, any | null> | null, callback?: (() => void) | null): void
  /**
   * @internal
   */
  show(options?: Map<string, any | null> | null): void

  /**
   * 关闭页面
   * @param options 关闭配置项
   * @param callback 关闭完毕监听器
   * @internal
   */
  close(options?: Map<string, any | null> | null, callback?: (() => void) | null): void
  /**
   * @internal
   */
  close(options?: Map<string, any | null> | null): void

  /**
   * @internal
   */
  updateStyle(style: Map<string, any | null>): void
  /**
   * 创建Document 已废弃
   * @internal
   */
  createDocument(documentData: INodeData): UniDocument
  /**
   * 监听页面相应事件
   */
  addPageEventListener(
    type:
      | "onReady"
      | "onShow"
      | "onHide"
      | "onTabItemTap"
      | "onUnload"
      | "onReachBottom"
      | "onPullDownRefresh"
      | "onPageScroll"
      | "onResize"
      | "onWebViewServiceMessage"
      | "onPopGesture"
      | "onRestart",//页面被重新启动
    callback: (event: UniPageEvent) => void
  ): UniCallbackWrapper
  /**
   * 监听页面onPageScroll事件
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *   	  }
   *    }
   * }
   */
  addPageScrollEventListener(callback: (event: UniPageScrollEvent) => void): UniCallbackWrapper

  /**
   * @internal
   */
  viewToTempFilePath(options: ViewToTempFilePathOptions): void
  /**
   * 加载自定义字体
   * @internal
   */
  loadFontFace(options: NativeLoadFontFaceOptions): void
  /**
   * 开始页面下拉刷新
   */
  startPullDownRefresh(): void
  /**
   * 设置当前页面是否开启下拉刷新
   * @param enable 是否开启下拉刷新
   * @internal
   */
  setEnablePullDownRefresh(enable: boolean): void
  /**
   * 仅 iOS 支持 options 参数
   * @internal
   */
  startPullDownRefresh(options: { success: (res: any) => void; fail: (res: any) => void }): void
  /**
   * 停止当前页面下拉刷新
   */
  stopPullDownRefresh(): void
  /**
   * 页面渲染耗时
   * @internal
   */
  getPageRenderDuration(): number
  /**
   * 页面排版耗时
   * @internal
   */
  getPageLayoutDuration(): number
  /**
   * 页面渲染次数
   * @internal
   */
  getPageRenderCount(): number
  /**
   * 页面排版次数
   * @internal
   */
  getPageLayoutCount(): number
  /**
   * 首次渲染开始时间
   * @internal
   */
  getFirstRenderStartTime(): number
  /**
   * 首次排版开始时间
   * @internal
   */
  getFirstLayoutStartTime(): number
  /**
   * 页面首次渲染时间
   * @internal
   */
  getFirstPageRenderDuration(): number
  /**
   * 页面首次排版时间
   * @internal
   */
  getFirstPageLayoutDuration(): number

  /**
   * 页面已创建的element个数
   * @internal
   */
  getCreatedElementCount(): number

  /**
   * 页面已创建element的总耗时
   * @internal
   */
  getCreatedElementDuration(): number

  /**
   * 获取Android原生activity对象 可为空
   * @internal
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.0"
   *        },
   *        "ios": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *   	  }
   *    }
   * }
   */
  getAndroidActivity(): Activity | null

  /**
   * 返回android平台页面根view
   * @internal
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.25"
   *        },
   *        "ios": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *   	  }
   *    }
   * }
   */
  getAndroidView(): View | null

  /**
   * 返回 iOS 平台页面根 view
   * @internal
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "x",
   *            "unixUtsPlugin": "4.33"
   *   	  }
   *    }
   * }
   */
  getIOSView(): View | null

  /**
   * 获取页面style
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.13"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.13"
   *   	  }
   *    }
   * }
   */
  getPageStyle(): UTSJSONObject

  /**
   * 设置页面style
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "4.13"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.13"
   *   	  }
   *    }
   * }
   */
  setPageStyle(style: UTSJSONObject): void
}
export type IPage = UniNativePage
