import { Event as IUniEvent } from '@dcloudio/uni-app-x/types/native'
import { UniElement } from '@dcloudio/uni-app-x/types/native'

export type EventInit = { bubbles?: boolean; cancelable?: boolean }

export class UniEvent implements IUniEvent {
  __v_skip: boolean = true

  get [Symbol.toStringTag]() {
    return 'UniEvent'
  }

  type: string
  target?: UniElement | null | undefined
  currentTarget?: UniElement | null | undefined
  timeStamp: number = Date.now()
  private _bubbles: boolean = false

  get bubbles() {
    return this._bubbles
  }

  set bubbles(value) {
  }

  private _cancelable: boolean = false

  get cancelable() {
    return this._cancelable
  }

  set cancelable(value) {
  }

  constructor(
    type: string,
    eventInit?: EventInit,
  ) {
    this.type = type
    if (eventInit) {
      this._bubbles = !!eventInit.bubbles
      this._cancelable = !!eventInit.cancelable
    }
  }

  // 暂时使用属性声明，用于内部重写
  stopPropagation: () => void = () => {
  }
  preventDefault: () => void = () => {
  }
}

export interface InternalUniEvent {
  defaultPrevented: boolean
}

interface NativeStopPropagationEvent {
  stopPropagation(): void
}

interface NativePreventDefaultEvent {
  preventDefault(): void
}

const ComponentDefault = new Map<string, string[]>([
  ['SCROLL-VIEW', ['touchmove']],
  ['LIST-VIEW', ['touchmove']],
  ['WATERFLOW', ['touchmove']],
  ['SWIPER', ['touchstart', 'touchmove']]
])

export class ModifyEvent extends UniEvent {
  uniEvent: UniEvent
  constructor(type:string, uniEvent: UniEvent) {
    super(type, {
      bubbles: false
    })
    this.uniEvent = uniEvent
  }
}

function dispatchPreventDefaultEvent(element: UniElement, uniEvent: UniEvent) {
  const type = uniEvent.type
  const nodeName = element.nodeName
  if (!ComponentDefault.has(nodeName)) {
    return
  }
  const eventNames = ComponentDefault.get(nodeName)!
  if (!eventNames.includes(type)) {
    return
  }
  const preventDefaultEventName = '_' + type + 'PreventDefault'
  element.dispatchEvent(
    preventDefaultEventName,
    new ModifyEvent(preventDefaultEventName, uniEvent)
  )
}

function dispatchStopPropagationEvent(element: UniElement, uniEvent: UniEvent) {
  const type = uniEvent.type
  const nodeName = element.nodeName
  if (!ComponentDefault.has(nodeName)) {
    return
  }
  const eventNames = ComponentDefault.get(nodeName)!
  if (!eventNames.includes(type)) {
    return
  }
  const stopPropagationEventName = '_' + type + 'StopPropagation'
  element.dispatchEvent(
    stopPropagationEventName,
    new ModifyEvent(stopPropagationEventName, uniEvent)
  )
}

function preventDefault(uniEvent: UniEvent, nativeEvent: NativePreventDefaultEvent) {
  const e = uniEvent as unknown as InternalUniEvent
  e.defaultPrevented = true
  if(uniEvent.currentTarget) {
    let element: UniElement = uniEvent.currentTarget
    while (element) {
      dispatchPreventDefaultEvent(element, uniEvent)
      element = element.parentElement
    }
  }
  try {
    nativeEvent.preventDefault()
  } catch (e) {
    // Error: Component does not support prevent function
    // console.warn(e)
  }
}

function stopPropagation(uniEvent: UniEvent, nativeEvent: NativeStopPropagationEvent) {
  if(uniEvent.currentTarget) {
    let element: UniElement = uniEvent.currentTarget
    while (element) {
      dispatchStopPropagationEvent(element, uniEvent)
      element = element.parentElement
    }
  }
  nativeEvent.stopPropagation()
}

export function useNativeStopPropagation(uniEvent: UniEvent, nativeEvent: NativeStopPropagationEvent) {
  uniEvent.stopPropagation = () => {
    stopPropagation(uniEvent, nativeEvent)
  }
}

export function useNativePreventDefault(uniEvent: UniEvent, nativeEvent: NativePreventDefaultEvent) {
  uniEvent.preventDefault = () => {
    preventDefault(uniEvent, nativeEvent)
  }
}
