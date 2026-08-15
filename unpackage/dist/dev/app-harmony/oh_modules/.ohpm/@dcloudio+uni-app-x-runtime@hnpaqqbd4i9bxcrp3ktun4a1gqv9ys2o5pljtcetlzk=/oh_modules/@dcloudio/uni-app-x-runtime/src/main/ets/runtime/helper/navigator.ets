import window from '@ohos.window'
import { BusinessError } from '@ohos.base'
import { TinyEmitter } from 'tiny-emitter'
import { getUniApp, type UniNativeAppImpl } from '../UniNativeApp'
import { getCurrentMP } from '../polyfill/mp'
import { getWindowStage } from '../App'
import { formatValueRound } from '../window'

const safeAreasEvents = new WeakMap<UniNativeAppImpl, TinyEmitter>()

function toValue(value: number, useDevicePixels?: boolean) {
  if (!useDevicePixels) {
    value = formatValueRound(value)
  }
  return value
}

export interface ISafeAreaInsets {
  top: number
  bottom: number
  left: number
  right: number
}

export function getSafeAreaInsets(useDevicePixels?: boolean): ISafeAreaInsets {
  let top = 0
  let bottom = 0
  let left = 0
  let right = 0
  const currentWindow = getUniApp()?.window
  if (currentWindow) {
    const systemArea = currentWindow.getWindowAvoidArea(
      window.AvoidAreaType.TYPE_SYSTEM,
    )
    const navArea = currentWindow.getWindowAvoidArea(
      window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR,
    )
    const cutoutArea = currentWindow.getWindowAvoidArea(
      window.AvoidAreaType.TYPE_CUTOUT,
    )

    top = systemArea.topRect.height
    if (cutoutArea.topRect.height > 0) {
      top = Math.max(top, cutoutArea.topRect.height + cutoutArea.topRect.top)
    }

    if (cutoutArea.leftRect.width > 0) {
      left = Math.max(left, cutoutArea.leftRect.width + cutoutArea.leftRect.left)
    }

    let windowRect: window.Rect | null = null
    if (cutoutArea.bottomRect.height > 0 || cutoutArea.rightRect.width > 0) {
      windowRect = currentWindow.getWindowProperties().windowRect
    }

    if (cutoutArea.rightRect.width > 0) {
      right = Math.max(right, windowRect!.width - cutoutArea.rightRect.left)
    }

    bottom = navArea.bottomRect.height
    if (cutoutArea.bottomRect.height > 0) {
      bottom = Math.max(bottom, windowRect!.height - cutoutArea.bottomRect.top)
    }
  }
  return {
    top: toValue(top, useDevicePixels),
    bottom: toValue(bottom, useDevicePixels),
    left: toValue(left, useDevicePixels),
    right: toValue(right, useDevicePixels),
  }
}

export function onSafeAreaInsetsChange(
  callback: (info: ISafeAreaInsets) => void,
  useDevicePixels?: boolean,
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
      // TODO 便于维护 暂时不使用差量数据
      const safeAreaInsets = getSafeAreaInsets(useDevicePixels)
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
