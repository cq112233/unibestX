import window from '@ohos.window'
import { BusinessError } from '@ohos.base'
import { TinyEmitter } from 'tiny-emitter'
import { getUniApp, type UniNativeAppImpl } from '../UniNativeApp'
import { getCurrentMP } from '../polyfill/mp'
import { getWindowStage } from '../App'
import { formatValueRound } from '../window'

const safeAreasEvents = new WeakMap<UniNativeAppImpl, TinyEmitter>()

function toValue(value: number, px?: boolean) {
  if (!px) {
    value = formatValueRound(value)
  }
  return value
}

interface SafeAreaInsets {
  top: number
  bottom: number
  left: number
  right: number
  keyboardHeight?: number
}

export function getSafeAreaInsets(px?: boolean) {
  const safeAreaInsets: SafeAreaInsets = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }
  const currentWindow = getUniApp()?.window
  if (currentWindow) {
    const systemArea = currentWindow.getWindowAvoidArea(
      window.AvoidAreaType.TYPE_SYSTEM,
    )
    const navArea = currentWindow.getWindowAvoidArea(
      window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR,
    )
    const keyboard = currentWindow.getWindowAvoidArea(
      window.AvoidAreaType.TYPE_KEYBOARD,
    )
    // TODO 仅按常规方位推断，状态栏在顶部，导航栏在底部，暂时忽略左右两侧可能出现刘海
    safeAreaInsets.top = toValue(systemArea.topRect.height, px)
    safeAreaInsets.bottom = toValue(navArea.bottomRect.height, px)
    safeAreaInsets.keyboardHeight = toValue(keyboard.bottomRect.height, px)
  }
  return safeAreaInsets
}

export function onSafeAreaInsetsChange(
  callback: (info: SafeAreaInsets) => void,
  px?: boolean,
) {
  const mp = getUniApp()
  if (!mp) {
    throw new Error('current mp not found')
  }
  let safeAreasEvent = safeAreasEvents.get(mp)
  if (!safeAreasEvent) {
    safeAreasEvent = new TinyEmitter()
    safeAreasEvents.set(mp, safeAreasEvent)
    // 全局监听一次
    const safeAreaInsetsChangeCallback = (
      options: window.AvoidAreaOptions,
    ) => {
      const safeAreaInsets: Record<string, number> = {}
      // TODO 仅按常规方位推断，状态栏在顶部，导航栏在底部，暂时忽略左右两侧可能出现刘海
      switch (options.type) {
        case window.AvoidAreaType.TYPE_KEYBOARD:
          safeAreaInsets.keyboardHeight = toValue(
            options.area.bottomRect.height,
            px,
          )
          break
        case window.AvoidAreaType.TYPE_SYSTEM:
          safeAreaInsets.top = toValue(options.area.topRect.height, px)
          break
        case window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR:
          safeAreaInsets.bottom = toValue(options.area.bottomRect.height, px)
          break
        default:
          break
      }
      safeAreasEvent!.emit('safeAreaInsetsChange', safeAreaInsets)
    }
    const currentWindow = mp.window!
    currentWindow.on('avoidAreaChange', safeAreaInsetsChangeCallback)
  }
  safeAreasEvent.on('safeAreaInsetsChange', callback)
}

export function offSafeAreaInsetsChange(callback: Function) {
  const mp = getUniApp()
  if (mp) {
    const safeAreasEvent = safeAreasEvents.get(mp)
    safeAreasEvent?.off('safeAreaInsetsChange', callback)
  }
}

export function clearSafeAreaInsetsChange() {
  const mp = getUniApp()
  if (mp) {
    const safeAreasEvent = safeAreasEvents.get(mp)
    if (safeAreasEvent) {
      safeAreasEvent.off('safeAreaInsetsChange')
      safeAreasEvents.delete(mp)
    }
  }
}

export function getOrientation() {
  const map: Record<number, number> = {
    // PORTRAIT
    1: 0,
    // LANDSCAPE
    2: 90,
    // PORTRAIT_INVERTED
    3: 180,
    // LANDSCAPE_INVERTED
    4: -90,
  }
  let currentWindow = getCurrentMP()?.window
  if (!currentWindow) {
    const windowStage = getWindowStage()!
    currentWindow = windowStage.getMainWindowSync()
  }
  const orientation = currentWindow.getPreferredOrientation()
  return map[orientation] || 0
}

function setWindowSystemBarProperties(
  systemBarProperties: window.SystemBarProperties,
) {
  let promise = Promise.resolve()
  try {
    const window = getCurrentMP().window
    if (window) {
      promise = window.setWindowSystemBarProperties(systemBarProperties)
    } else {
      const windowStage = getWindowStage()!
      promise = windowStage
        // TODO getSubWindow?
        .getMainWindowSync()
        .setWindowSystemBarProperties(systemBarProperties)
    }
    return promise.catch((err: BusinessError) => {
      console.error(
        'Failed to set the system bar properties. Cause: ' +
        JSON.stringify(err),
      )
    })
  } catch (exception) {
    return Promise.reject(exception)
  }
}

export function setStatusBarStyle(style: 'dark' | 'light', statusBarBackground?: string) {
  const systemBarProperties: window.SystemBarProperties = {}

  if (statusBarBackground) {
    systemBarProperties.statusBarColor = statusBarBackground
  }

  switch (style) {
    case 'dark':
      systemBarProperties.statusBarContentColor = '#000000'
      break
    case 'light':
      systemBarProperties.statusBarContentColor = '#FFFFFF'
      break
    default:
      return
  }
  setWindowSystemBarProperties(systemBarProperties)
}

interface Navigator {
  setStatusBarStyle: (style: 'dark' | 'light', statusBarBackground?: string) => void
}

export const navigator: Navigator = {
  setStatusBarStyle
} as Navigator
