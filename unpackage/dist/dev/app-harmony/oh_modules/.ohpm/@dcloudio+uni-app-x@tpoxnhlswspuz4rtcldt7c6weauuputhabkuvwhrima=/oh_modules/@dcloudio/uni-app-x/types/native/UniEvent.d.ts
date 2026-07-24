import { UniElement } from "./IUniElement"

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniEvent {
  /**
   * 创建一个新的事件对象
   * @param {string} type 事件的名称
   */
  constructor (type: string)

  /**
   * 创建一个新的事件对象
   * @param {string} type 事件的名称
   * @param {string} eventInit 事件初始参数。支持字段：`bubbles`表明该事件是否冒泡。可选，默认为false；`cancelable`表明该事件是否可以被取消。可选，默认为false。
   */
  constructor (type: string, eventInit: UTSJSONObject)
  /**
   * 是否冒泡
   */
  bubbles: boolean
  /**
   * 是否可以取消
   */
  cancelable: boolean
  /**
   * 事件类型
   */
  type: string
  /**
   * 触发事件的组件
   */
  target?: UniElement | null
  /**
   * 当前组件
   */
  currentTarget?: UniElement | null
  /**
   * 事件发生时的时间戳
   */
  timeStamp: number
  /**
   * 阻止当前事件的进一步传播
   */
  stopPropagation(): void

  /**
   * 阻止当前事件的默认行为
   *
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "3.9"
   *        },
   *        "ios": {
   *            "osVer": "12.0",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *   	  }
   *    }
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  preventDefault(): void
}

export class UniKeyEvent extends UniEvent {
  readonly keyCode: number
  readonly keyType: string
}

export type Event = UniEvent
export const Event: typeof UniEvent

export type KeyEvent = UniKeyEvent
export const KeyEvent: typeof UniKeyEvent

export class UniAppEvent extends UniEvent {

}
export class UniThemeChangeEvent extends UniAppEvent {
  /**
   * app主题 值为 light 或 dark
   */
  readonly theme: string
}

/**
 * app异常
 * @package io.dcloud.uniapp.runtime
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.31"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "x"
 *   	  }
 *    }
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
export class UniAppErrorEvent extends UniAppEvent {
  /**
   * 错误日志堆栈
   */
  readonly error: Throwable
}
