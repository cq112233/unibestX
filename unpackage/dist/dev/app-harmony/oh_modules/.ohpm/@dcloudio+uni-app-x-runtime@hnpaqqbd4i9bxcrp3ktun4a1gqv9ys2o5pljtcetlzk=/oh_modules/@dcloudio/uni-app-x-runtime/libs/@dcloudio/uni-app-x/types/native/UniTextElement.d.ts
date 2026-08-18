import { UniElementImpl } from "./UniElement"
import { UniTextElement } from "./IUniElement"
import { PageNode } from "./PageNode"
import { INodeData } from "./NodeData"
/**
 * text元素对象
 * @package io.dcloud.uniapp.runtime
 * @autodoc false
 */
export class UniTextElementImpl extends UniElementImpl implements UniTextElement {
  /**
   * 只读属性 text元素的文案内容
   */
  value: string

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
   * @internal
   */
  getTextExtra(): any | null
  constructor(data: INodeData, pageNode?: PageNode)
}
