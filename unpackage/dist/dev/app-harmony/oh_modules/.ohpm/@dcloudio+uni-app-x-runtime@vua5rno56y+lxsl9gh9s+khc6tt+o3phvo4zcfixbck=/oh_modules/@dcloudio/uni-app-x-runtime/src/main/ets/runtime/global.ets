import { UniCustomEvent } from './dom/UniCustomEvent'
import { UniTouchEvent, UniTouch } from './dom/UniTouchEvent'
import { UniPointerEvent } from './dom/UniPointerEvent'
import { UniInputEventDetail, UniInputEvent } from './dom/UniInputEvent'
import { UniTextElementImpl } from './dom/UniTextElement'
import { UniPageImpl, UniNormalPageImpl, UniDialogPageImpl } from './UniPage'
import { UniAppImpl } from './UniApp'
import { getApp } from './UniApp'
import { requestAnimationFrame, cancelAnimationFrame } from './AnimationFrame'
import { NodeData } from './dom/NodeData'
import {
  UniRefresherEventDetail,
  UniRefresherEvent,
  UniScrollEventDetail,
  UniScrollEvent,
  UniScrollToLowerEventDetail,
  UniScrollToLowerEvent,
  UniScrollToUpperEventDetail,
  UniScrollToUpperEvent
} from './dom/UniScrollEvent'
import { UniViewElementImpl } from './dom/UniViewElement'
import { UniElementImpl } from './dom/UniElement'
import { UniFormControlViewElementImpl } from './dom/UniFormControlElement'
import { UniNativeViewElementImpl } from './dom/UniNativeViewElement'
import { UniResizeObserver } from './dom/UniResizeObserver'
import { customElements } from './dom/CustomElement'

globalThis.customElements = customElements
globalThis.UniResizeObserver = UniResizeObserver
globalThis.UniNativeViewElementImpl = UniNativeViewElementImpl
globalThis.UniFormControlElement = UniFormControlViewElementImpl
globalThis.UniElementImpl = UniElementImpl
// 兼容安卓用法
globalThis.UniElement = UniElementImpl
globalThis.UniTextElement = UniTextElementImpl
globalThis.UniViewElementImpl = UniViewElementImpl
globalThis.UniCustomEvent = UniCustomEvent
globalThis.UniTouchEvent = UniTouchEvent
globalThis.UniTouch = UniTouch
globalThis.UniPointerEvent = UniPointerEvent
globalThis.UniInputEventDetail = UniInputEventDetail
globalThis.UniInputEvent = UniInputEvent
globalThis.UniTextElementImpl = UniTextElementImpl
// 兼容安卓用法
globalThis.UniTextElement = UniTextElementImpl
globalThis.UniPageImpl = UniPageImpl
globalThis.UniNormalPageImpl = UniNormalPageImpl
globalThis.UniDialogPageImpl = UniDialogPageImpl
globalThis.UniAppImpl = UniAppImpl
globalThis.getApp = getApp
globalThis.requestAnimationFrame = requestAnimationFrame
globalThis.cancelAnimationFrame = cancelAnimationFrame
globalThis.NodeData = NodeData

globalThis.UniRefresherEventDetail = UniRefresherEventDetail
globalThis.UniRefresherEvent = UniRefresherEvent
globalThis.UniScrollEventDetail = UniScrollEventDetail
globalThis.UniScrollEvent = UniScrollEvent
globalThis.UniScrollToLowerEventDetail = UniScrollToLowerEventDetail
globalThis.UniScrollToLowerEvent = UniScrollToLowerEvent
globalThis.UniScrollToUpperEventDetail = UniScrollToUpperEventDetail
globalThis.UniScrollToUpperEvent = UniScrollToUpperEvent

class UniFormControlElement {
}

globalThis.UniFormControlElement = UniFormControlElement
