import { UniPageManager } from "./UniPageManager"
import { UniCallbackWrapper } from "./UniCallbackWrapper"
import { NativeLoadFontFaceOptions } from "./NativeLoadFontFaceOptions"
import { UniKeyEvent } from "./UniEvent"

/**
 * @package io.dcloud.uniapp.runtime
 * @autodoc false
 */
export interface UniNativeApp {
  /**
   * 应用id
   */
  readonly appid: string

  /**
   * 页面管理
   */
  readonly pageManager: UniPageManager

  /**
   * app主题 值域为 dark | light | auto
   * @internal
   */
  appTheme: string

  /**
   * 接收框架触发的event
   * @autodoc false
   */
  onEvent(event: string): void

  /**
   * 监听app事件
   */
  addEventListener<T>(event: "onShow" | "onHide" | "onExit" | "onThemeChange" | "onError" | "onNewIntent", callback: (event: T) => void): UniCallbackWrapper

  /**
   * 注销app监听
   */
  removeEventListener(event: string, callbackWrapper: UniCallbackWrapper): void

  /**
   * 监听app按键监听
   */
  addKeyEventListener(event: "onBackButton", callback: (event: UniKeyEvent) => boolean): void

  /**
   * 退出app
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
  quit(): void

  /**
   * 获取原生app启动耗时，不包含uniapp启动时间
   * @autodoc false
   */
  getAppStartDuration(): number

  /**
   * 加载自定义字体
   */
  loadFontFace(options: NativeLoadFontFaceOptions): void

  /**
   * 获取直达相关信息
   * @autodoc false
   */
  getRedirectInfo(): Map<string, any | null>

  /**
   * 建立监听元素尺寸变化关系
   * @internal
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *        },
   *        "ios": {
   *             "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.18"
   *   	  }
   *    }
   * }
   */
  connectResizeObserver(observerId: string, callback?: (res: any) => void): void

  /**
   * 开始监听元素尺寸变化
   * @internal
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.18"
   *   	  }
   *    }
   * }
   */
  observeResizeObserver(observerId: string, pageId: string, elemId: string): void

  /**
   * 取消监听元素尺寸变化
   * @internal
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.18"
   *   	  }
   *    }
   * }
   */
  unobserveResizeObserver(observerId: string, pageId: string, elemId: string): void

  /**
   * 断开监听元素尺寸变化
   * @internal
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.18"
   *   	  }
   *    }
   * }
   */
  disconnectResizeObserver(observerId: string): void

  /**
   * 获取启动参数
   * @internal
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "4.24"
   *   	  }
   *    }
   * }
   */
  getLaunchOptionsSync(): { appScheme: string; appLink: string }

  /**
   * 获取应用Application上下文
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
  getAndroidApplication(): Application
}

export type IApp = UniNativeApp
