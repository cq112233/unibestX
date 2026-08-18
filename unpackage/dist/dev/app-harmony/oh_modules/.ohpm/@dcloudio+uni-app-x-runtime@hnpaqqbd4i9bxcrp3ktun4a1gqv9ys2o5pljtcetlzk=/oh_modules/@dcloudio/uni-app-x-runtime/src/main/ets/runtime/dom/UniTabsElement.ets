import {
  UniTabsElement as IUniTabsElement,
  UniElement as IUniElement,
  UniEvent,
  UniTabTapEvent
} from '@dcloudio/uni-app-x/types/native'
import { UniElementImpl } from '../libs/dom'
import { UniCallbackWrapper } from '../libs/dom'
import type { UniNativeTabBarPage } from './UniNativeTabBarPage'

export class UniTabsElementImpl extends UniElementImpl implements IUniTabsElement {
  private readonly listeners = new Map<string, Set<UniCallbackWrapper>>()
  declare page: UniNativeTabBarPage

  get isTabBarVisible(): boolean {
    return this.page.tabBarController.isVisible
  }

  get currentItemId(): string | null {
    return this.page.currentItemId
  }

  set currentItemId(value: string | null) {
    this.page.currentItemId = value
  }

  constructor(page: UniNativeTabBarPage) {
    super(-1, page, 'tabs')
  }

  appendItem(pageId: string): void

  appendItem(itemElement: IUniElement): void

  appendItem(item: string | IUniElement): void {
    if (typeof item === 'string') {
      this.page.appendItem(item)
    } else {
      throw new Error('Method not implemented.')
    }
  }

  initTabBar(tabBar: Map<string, Object>): void {
    this.page.initTabBar(tabBar)
  }

  appendCustomTabBar(tabBar: IUniElement, direction: string): void {
    throw new Error('Method not implemented.')
  }

  switchSelect(pageId: string, index: number): void {
    if (this.page.currentItemId === pageId) {
      this.page.tabBarController.selectedId = pageId
      this.page.updateSelectedIndex(index)
      return
    }
    this.page.currentItemId = pageId
    this.page.tabBarController.selectedId = pageId
    this.page.updateSelectedIndex(index)
  }

  hideTabBar(op: Map<string, Object>): void {
    this.page.hideTabBar(op)
  }

  showTabBar(op: Map<string, Object>): void {
    this.page.showTabBar(op)
  }

  setTabBarBadge(op: Map<string, Object>): void {
    this.page.setTabBarBadge(op)
  }

  removeTabBarBadge(op: Map<string, Object>): void {
    this.page.removeTabBarBadge(op)
  }

  showTabBarRedDot(op: Map<string, Object>): void {
    this.page.showTabBarRedDot(op)
  }

  hideTabBarRedDot(op: Map<string, Object>): void {
    this.page.hideTabBarRedDot(op)
  }

  setTabBarItem(op: Map<string, Object>): void {
    this.page.setTabBarItem(op)
  }

  setTabBarStyle(tabBar: Map<string, Object>): void {
    this.page.setTabBarStyle(tabBar)
  }

  getTabBarHeight(): number {
    // 由于定义模糊且未找到明确的使用者 暂不实现此方法
    throw new Error('Method not implemented.')
  }

  override addEventListener<T extends UniEvent, R>(type: string, callback: (event: T) => R): UniCallbackWrapper {
    let callbacks = this.listeners.get(type)
    if (!callbacks) {
      callbacks = new Set<UniCallbackWrapper>()
      this.listeners.set(type, callbacks)
    }
    const callbackWrapper = new UniCallbackWrapper(callback)
    callbacks.add(callbackWrapper)
    return callbackWrapper
  }

  override removeEventListener(type: string, callbackWrapper: UniCallbackWrapper): void {
    this.listeners.get(type)?.delete(callbackWrapper)
  }

  override dispatchEvent(type: string, value: UniTabTapEvent): void

  override dispatchEvent(value: UniTabTapEvent): void

  override dispatchEvent(type: string | UniTabTapEvent, value?: UniTabTapEvent): void {
    const eventType = typeof type === 'string' ? type : type.type
    let event: UniTabTapEvent
    if (typeof type === 'string') {
      event = value!
    } else {
      event = type
    }
    this.listeners.get(eventType)?.forEach(callbackWrapper => {
      callbackWrapper.callback(event)
    })
  }
}
