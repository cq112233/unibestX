import { INodeData } from "./NodeData"
import { UniElement, UniCommentElement } from "./IUniElement"

/**
 * @package io.dcloud.uniapp.runtime
 * @autodoc false
 */
export interface UniDocument extends UniElement {
  readonly body: UniElement

  getRealDomNodeById<T>(tag: string): T | null

  startRender(): void

  startRender(callback: (() => void) | null): void

  createElement(tagName: string): UniElement

  createElement(data: INodeData): UniElement

  createComment(data: string): UniCommentElement

  /**
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
  notifyLayout(): void

  /**
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
  runAsyncDomTask(fn: () => any | null, callback: (value: any | null) => void): void

  /**
   * 页面排版完毕回调callback
   */
  waitNativeRender(callback: () => void): void

  /**
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
  getElementById(id: string): UniElement | null
}

export type IDocument = UniDocument
