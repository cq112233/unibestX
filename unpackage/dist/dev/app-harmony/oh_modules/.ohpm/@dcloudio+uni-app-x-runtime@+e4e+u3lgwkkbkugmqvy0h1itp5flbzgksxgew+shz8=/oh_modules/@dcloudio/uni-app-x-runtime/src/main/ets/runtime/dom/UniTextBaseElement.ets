import { UniElementImpl } from './UniElement'
import { Cache } from '../helper/cache'
import { LengthMetrics, LengthUnit } from '@ohos.arkui.node'

export const DEFAULT_FONT_SIZE_NUM = 16

export const DEFAULT_LINE_HEIGHT = '1.2em'

const store = new WeakMap<UniElementImpl, TextBaseStyleCache>()

function getTextBaseStyleCache<T extends FrameNode | null = FrameNode | null>(element: UniElementImpl<T>) {
  let cache = store.get(element as Object as UniElementImpl)
  if (!cache) {
    cache = {
      fontSize: DEFAULT_FONT_SIZE_NUM,
      lineHeight: DEFAULT_LINE_HEIGHT,
    }
    store.set(element as Object as UniElementImpl, cache)
  }
  return cache
}

export function setTextBaseStyleCache<T extends FrameNode | null = FrameNode | null>(element: UniElementImpl<T>,
  cache?: TextBaseStyleCache) {
  store.set(element as Object as UniElementImpl, cache ?? {
    fontSize: DEFAULT_FONT_SIZE_NUM,
    lineHeight: DEFAULT_LINE_HEIGHT,
  })
}
// TODO 抽离工具方法
const fontSizeCache = new Cache<string | number, LengthMetrics>()

function toLengthMetrics(value: number, unit: string | LengthUnit): LengthMetrics {
  switch (unit) {
    case 'vp':
    case LengthUnit.VP:
      return LengthMetrics.vp(value)
    case 'px':
    case LengthUnit.PX:
      return LengthMetrics.px(value)
    case 'lpx':
    case LengthUnit.LPX:
      return LengthMetrics.lpx(value)
    case 'fp':
    case LengthUnit.FP:
      return LengthMetrics.fp(value)
    case '%':
    case LengthUnit.PERCENT:
      return LengthMetrics.percent(value)
  }
  throw new Error('Invalid length metrics: ' + value + unit)
}

export function lengthMetricsToString(value: LengthMetrics) {
  switch (value.unit)  {
    case LengthUnit.VP:
      return value.value + 'vp'
    case LengthUnit.PX:
      return value.value + 'px'
    case LengthUnit.LPX:
      return value.value + 'lpx'
    case LengthUnit.FP:
      return value.value + 'fp'
    case LengthUnit.PERCENT:
      return value.value + '%'
  }
  throw new Error('Invalid length metrics: ' + value)
}

function getFontSize(size: string | number): LengthMetrics {
  if (fontSizeCache.has(size)) {
    return fontSizeCache.get(size)!
  }
  if(typeof size === 'number') {
    return LengthMetrics.vp(size)
  }
  let unitIndex = size.length
  for (let index = size.length - 1; index >= 0; index--) {
    const charCode = size.charCodeAt(index)
    if (charCode >= 48 && charCode <= 57) {
      unitIndex = index + 1
      break
    }
  }
  const unit = size.slice(unitIndex)
  const value = parseFloat(size)
  const result: LengthMetrics = toLengthMetrics(value, unit)
  if (result) {
    fontSizeCache.set(size, result)
    return result
  }
  throw new Error('Invalid font size: ' + size)
}

function calcLineHeight<T extends FrameNode | null = FrameNode | null>(element: UniElementImpl<T>,
  callback: (value: LengthMetrics) => void) {
  const cache = getTextBaseStyleCache(element)
  const fontSize = cache.fontSize
  const lineHeight = cache.lineHeight
  if (typeof lineHeight === 'string' && lineHeight.endsWith('em')) {
    if (typeof fontSize === 'number') {
      const value = parseFloat(lineHeight) * fontSize
      callback(LengthMetrics.vp(value))
    } else {
      let fontSizeLength = getFontSize(fontSize as string)
      callback(
        toLengthMetrics(
          fontSizeLength.value * parseFloat(lineHeight),
          fontSizeLength.unit
        )
      )
    }
  }
}

export function updateFontSize<T extends FrameNode | null = FrameNode | null>(element: UniElementImpl<T>,
  value: number | string, callback: (value: LengthMetrics) => void) {
  const cache = getTextBaseStyleCache(element)
  if (cache.fontSize !== value) {
    cache.fontSize = value
    callback(getFontSize(value))
    calcLineHeight(element, (value) => {
      cache.ignoreLineHeight = true
      element.updateNativeNodeStyle('lineHeight', value)
      cache.ignoreLineHeight = false
    })
  }
}

export function updateLineHeight<T extends FrameNode | null = FrameNode | null>(element: UniElementImpl<T>,
  value: string | number, callback: (value: LengthMetrics) => void) {
  const cache = getTextBaseStyleCache(element)
  if (cache.lineHeight !== value) {
    if (!cache.ignoreLineHeight) {
      cache.lineHeight = value
    }
    if (typeof value === 'string' && value.endsWith('em')) {
      calcLineHeight(element, callback)
    } else if (typeof value === 'number') {
      callback(LengthMetrics.vp(value))
    }
  }
}

export interface TextBaseStyleCache {
  fontSize?: number | string
  lineHeight?: number | string
  ignoreLineHeight?: boolean
}