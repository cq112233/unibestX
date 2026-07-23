import { UniElement, UniTabsElement } from "./IUniElement"
import { UniElementImpl } from "./UniElement"

/**
 * tabs元素对象
 * @package io.dcloud.uniapp.runtime
 * @autodoc false
 */
export class UniTabsElementImpl extends UniElementImpl implements UniTabsElement {
  getTabBarHeight(): number

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
  appendCustomTabBar(tabBar: UniElement, direction: string): void
  hideTabBar(op: Map<string, any>): void
  switchSelect(pageId: string, index: number): void
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
  appendItem(itemElement: UniElement): void
  initTabBar(style: Map<string, any>): void
  appendItem(pageId: string): void
  currentItemId: string
  setTabBarBadge(op: Map<string, any>): void
  setTabBarStyle(op: Map<string, any>): void
  isTabBarVisible: boolean
  setTabBarItem(op: Map<string, any>): void
  hideTabBarRedDot(op: Map<string, any>): void
  showTabBar(op: Map<string, any>): void
  showTabBarRedDot(op: Map<string, any>): void
  removeTabBarBadge(op: Map<string, any>): void
}
