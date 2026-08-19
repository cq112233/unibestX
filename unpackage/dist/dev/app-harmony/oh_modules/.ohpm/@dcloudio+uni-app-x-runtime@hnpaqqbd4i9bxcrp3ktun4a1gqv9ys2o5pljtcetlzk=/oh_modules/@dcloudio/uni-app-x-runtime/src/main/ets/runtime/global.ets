import {
  buildElement,
  buildEvent,
  define,
  NodeData,
  UniElementImpl,
  UniCustomEvent,
  UniPointerEvent,
  UniScrollViewElementImpl,
  UniTextElementImpl,
  UniTouch,
  UniTouchEvent,
  InputEvent,
  InputEventDetail,
  UniInputEvent,
  UniInputEventDetail,
  waitNativeRender,
} from './libs/dom'
import { UniPageImpl, UniNormalPageImpl, UniDialogPageImpl } from './UniPage'
import { UniAppImpl } from './UniApp'
import { getApp } from './UniApp'
import { requestAnimationFrame, cancelAnimationFrame } from './AnimationFrame'
import { UniViewElementImpl } from './dom/UniViewElement'
import { UniVueElement } from './dom/UniVueElement'
import { UniNativeViewElementImpl } from './dom/UniNativeViewElement'

globalThis.UniNativeViewElementImpl = UniNativeViewElementImpl
globalThis.UniElementImpl = UniElementImpl
// 兼容安卓用法
globalThis.UniPageImpl = UniPageImpl
globalThis.UniNormalPageImpl = UniNormalPageImpl
globalThis.UniDialogPageImpl = UniDialogPageImpl
globalThis.UniAppImpl = UniAppImpl
globalThis.getApp = getApp
globalThis.requestAnimationFrame = requestAnimationFrame
globalThis.cancelAnimationFrame = cancelAnimationFrame
globalThis.UniCustomEvent = UniCustomEvent
globalThis.UniTouchEvent = UniTouchEvent
globalThis.UniTouch = UniTouch
globalThis.UniPointerEvent = UniPointerEvent
globalThis.UniInputEvent = UniInputEvent
// 兼容安卓用法
globalThis.UniElement = UniElementImpl
globalThis.UniTextElement = UniTextElementImpl
globalThis.UniViewElementImpl = UniViewElementImpl
globalThis.UniScrollViewElementImpl = UniScrollViewElementImpl
globalThis.UniVueElement = UniVueElement
globalThis.NodeData = NodeData

globalThis.buildEvent = buildEvent
globalThis.buildElement = buildElement
// 允许 js framework 注册 Element
globalThis.customElements = { define }
// 模拟全局 waitNativeRender 方法
globalThis.waitNativeRender = waitNativeRender