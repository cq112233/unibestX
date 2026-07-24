import { osThemeChangeEmitter } from './osTheme'
import { ON_OS_THEME_CHANGE } from './constants'

type HostTHeme = 'dark' | 'light'

interface OnHostThemeChangeCallbackResult {
  /**
   * 主题名称
   */
  hostTheme: HostTHeme;
}
type OnHostThemeChangeCallback = (res: OnHostThemeChangeCallbackResult) => void;

const THEME_CALLBACKS: Record<number, OnHostThemeChangeCallback | undefined> = {}
let THEME_CALLBACK_ID = 0

/**
 * 监听主机主题变化
 *
 * @param {OnHostThemeChangeCallback} callback 主机主题变化回调
 * @returns {number} 监听ID
 * @internal
 */
export function onHostThemeChange(callback: OnHostThemeChangeCallback) {
  osThemeChangeEmitter.on(ON_OS_THEME_CHANGE, callback)
  const id = THEME_CALLBACK_ID++
  THEME_CALLBACKS[id] = callback
  return id
}

/**
 * 取消监听主机主题变化
 *
 * @param {number} id 监听ID
 * @internal
 */
export function offHostThemeChange(id: number) {
  const callback = THEME_CALLBACKS[id]
  if (id < 0 || typeof callback !== 'function') {
    return
  }
  THEME_CALLBACKS[id] = undefined
  osThemeChangeEmitter.off(ON_OS_THEME_CHANGE, callback)
}
