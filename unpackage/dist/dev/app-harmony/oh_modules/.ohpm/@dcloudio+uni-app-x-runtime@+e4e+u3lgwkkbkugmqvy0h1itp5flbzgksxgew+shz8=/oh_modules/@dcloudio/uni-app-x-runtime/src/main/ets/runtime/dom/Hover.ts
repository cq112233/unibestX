import { Element, Event, TouchEvent } from '@dcloudio/uni-app-x/types/native'

function requestAnimationFrame(cb: () => void) {
  // TODO
  setTimeout(cb, 16)
}

// interface HoverProps {
//   'hover-class': string | 'none'
//   'hover-stop-propagation': boolean
//   'hover-start-time': number
//   'hover-stay-time': number
// }

type HoverProps = Map<string, any>

export class Hover {
  private $: Element
  private props: HoverProps
  private _listening: boolean = false
  private _hovering: boolean = false
  private _hoverTouch: boolean = false
  private _hoverStartTimer?: ReturnType<typeof setTimeout>
  private _hoverStayTimer?: ReturnType<typeof setTimeout>
  private __hoverTouchStart!: (evt: Event) => void
  private __hoverTouchEnd!: (evt?: Event) => void
  private __hoverTouchCancel!: (evt?: Event) => void
  private __hoverClassStyleMap = new Map<string, any>()

  constructor($: Element, props: HoverProps) {
    this.$ = $

    this.props = props

    this.__hoverTouchStart = this._hoverTouchStart.bind(this)
    this.__hoverTouchEnd = this._hoverTouchEnd.bind(this)
    this.__hoverTouchCancel = this._hoverTouchCancel.bind(this)
  }

  get hovering() {
    return this._hovering
  }

  set hovering(hovering: boolean) {
    this._hovering = hovering
    const hoverClass = this.props.get('hover-class')
    if (!(hoverClass instanceof Map)) {
      return
    }
    if (hovering) {
      this._addClass(hoverClass)
    } else {
      this._removeClass()
    }
  }

  addEvent() {
    if (this._listening) {
      return
    }
    // if (__DEV__) {
    //   console.log(
    //     formatLog(
    //       this.$.tagName,
    //       'Hover',
    //       'addEventListener',
    //       this.props['hover-class']
    //     )
    //   )
    // }
    this._listening = true
    this.$.addEventListener('touchstart', this.__hoverTouchStart)
    this.$.addEventListener('touchend', this.__hoverTouchEnd)
    this.$.addEventListener('touchcancel', this.__hoverTouchCancel)
  }

  removeEvent() {
    if (!this._listening) {
      return
    }
    // if (__DEV__) {
    //   console.log(formatLog(this.$.tagName, 'Hover', 'removeEventListener'))
    // }
    this._listening = false
    this.$.removeEventListener('touchstart', this.__hoverTouchStart)
    this.$.removeEventListener('touchend', this.__hoverTouchEnd)
    this.$.removeEventListener('touchcancel', this.__hoverTouchCancel)
  }

  _hoverTouchStart(evt: Event) {
    if ((evt as any)._hoverPropagationStopped) {
      return
    }
    const hoverClass = this.props.get('hover-class')
    if (!hoverClass || (this.$ as any).disabled) {
      return
    }
    if ((evt as TouchEvent).touches.length > 1) {
      return
    }
    if (this.props.get('hover-stop-propagation')) {
      ;
      (evt as any)._hoverPropagationStopped = true
    }
    this._hoverTouch = true
    let hoverStartTime = Number(this.props.get('hover-start-time'))
    hoverStartTime = isNaN(hoverStartTime) ? 50 : hoverStartTime
    this._hoverStartTimer = setTimeout(() => {
      this.hovering = true
      if (!this._hoverTouch) {
        // 防止在hoverStartTime时间内触发了 touchend 或 touchcancel
        this._hoverReset()
      }
    }, hoverStartTime)
  }

  _hoverTouchEnd() {
    this._hoverTouch = false
    if (this.hovering) {
      this._hoverReset()
    }
  }

  _hoverReset() {
    requestAnimationFrame(() => {
      clearTimeout(this._hoverStayTimer!)
      let hoverStayTime = Number(this.props.get('hover-stay-time'))
      hoverStayTime = isNaN(hoverStayTime) ? 400 : hoverStayTime
      this._hoverStayTimer = setTimeout(() => {
        this.hovering = false
      }, hoverStayTime)
    })
  }

  _hoverTouchCancel() {
    this._hoverTouch = false
    this.hovering = false
    clearTimeout(this._hoverStartTimer!)
  }

  private _addClass(styles: Map<string, any>) {
    styles.forEach((value, key) => {
      if (!this.__hoverClassStyleMap.has(key)) {
        this.__hoverClassStyleMap.set(key, this.$.style.getPropertyValue(key))
      }

      this.$.style.setProperty(key, value)
    })
  }

  private _removeClass() {
    this.__hoverClassStyleMap.forEach((value, key) => {
      if (value) {
        this.$.style.setProperty(key, value)
      } else  {
        this.$.style.removeProperty(key)
      }
    })
    this.__hoverClassStyleMap.clear()
  }
}
