import { UniFormControlElementImpl } from "./UniFormControlElement";
import { UniInputElement as IInputNode } from '@dcloudio/uni-app-x/types/native'
import { UniFrameNode } from '../Node'
import { EventDetail, InputEventDetail, FocusEventDetail, Textarea } from '../components/Textarea'
import { typeNode, KeyboardAvoidMode, window } from "@kit.ArkUI";
import { UniLayoutMeasureMode } from "dcloudlayout";
import { formatFontFamily, formatFontSize, formatFontStyle, formatFontWeight, callClass } from '../helper'
import { UniTextElementImpl } from './UniTextElement'
import { UniCustomEvent, UniCustomEventOptions } from './UniCustomEvent'
import { UniScrollElementImpl } from './UniScroll/UniScroll'
import { UniElement } from '..'
import { UniListItemElementImpl } from './UniScroll/UniListItemElement'
import { NodeData } from './NodeData'

export class TextareaFrameNode extends UniFrameNode {
  componentInstance!: Textarea
}

export const CONFIRM_TYPES = new Map<string, EnterKeyType>([
  ['return', EnterKeyType.NEW_LINE],
  ['send', EnterKeyType.Send],
  ['search', EnterKeyType.Search],
  ['next', EnterKeyType.Next],
  ['go', EnterKeyType.Go],
  ['done', EnterKeyType.Done],
])

interface SelectionData {
  start: number,
  end: number
}

interface PlaceholderStyleLevel {
  fontFamily: number,
  fontWeight: number,
  fontSize: number,
  fontStyle: number,
  color: number
}

interface BorderWidth {
  top: number,
  bottom: number
}

interface StyleCache {
  borderColor: EdgeColors,
  placeholderFont: Font,
  placeholderColor: ResourceColor,
  placeholderStyleLevel: PlaceholderStyleLevel
  padding: Padding
  borderWidth: BorderWidth
}

export interface KeyboardHeightChangeEventDetail {
  height: number,
  duration: number
}

export class UniInputFileElementImpl extends UniFormControlElementImpl<string, FrameNode | TextareaFrameNode> implements IInputNode {
  type: string = 'text'
  placeholder: string = ''
  disabled: boolean = false
  autofocus: boolean = false
  protected textValue: string = ''
  protected preTextValue: string = ''
  protected controller!: TextInputController | TextAreaController
  protected inputFileFrameNode!: TextareaFrameNode | typeNode.TextInput
  protected mounted: boolean = false
  protected needFocusWhenMounted: boolean = false
  protected needDispatchInput: boolean = false
  protected holdKeyboard: boolean = false
  protected isTouching: boolean = false
  protected processingPageTouch: boolean = false
  protected maxLength: number | null = null
  protected initValue: string | null = null
  protected handledAutoFocus: boolean = false
  protected selection: SelectionData = { start: -1, end: -1 }
  protected confirmHold: boolean = false
  protected confirmHoldHandled: boolean = false
  protected styleCache!: StyleCache
  protected currentWindow: window.Window | null = null
  protected keyboardHeight: number = 0
  protected cursor: number = 0
  protected needDispatchKeyboardHeightChange: boolean = false
  protected needDispatchConfirm: boolean = false
  protected adjustPosition: boolean = true
  protected needDispatchFocus: boolean = false
  protected needDispatchBLur: boolean = false
  protected isFocusing: boolean = false
  protected rollAbleParents: UniScrollElementImpl[] = []
  protected resetElementPositionWhenBlur: () => void = () => {
  }
  private placeholderElsForRollAbleParent: UniListItemElementImpl[] = []
  private keyboardAnimationDuration: number = 350
  private keyboardHeightChangeCallback: ((height: number) => void) | null = null
  protected hasPlaceholderFontSize: boolean = false
  protected styleHeight: string = 'auto'
  protected defaultFontSize: number = 15
  protected currentFontSize: number = this.defaultFontSize

  constructor() {
    super()

    if (!this.inputFileFrameNode) {
      // UniTextareaElement initClass 初始化 inputFileFrameNode 这里拿不到，使用 frameNode
      this.inputFileFrameNode = this.frameNode as TextareaFrameNode
    }

    this.setMeasureFunction((width, widthMode, height, heightMode) => {
      const frameNode = this.inputFileFrameNode
      const widthPx = vp2px(width)
      const heightPx = vp2px(height)

      frameNode.measure({
        maxSize: {
          width: widthMode === UniLayoutMeasureMode.AtMost ? widthPx : widthPx,
          height: heightMode === UniLayoutMeasureMode.AtMost ? Number.MAX_VALUE : heightPx
        },
        minSize: {
          width: widthMode === UniLayoutMeasureMode.AtMost ? 0 : widthPx,
          height: heightMode === UniLayoutMeasureMode.AtMost ? 0 : heightPx
        },
        percentReference: { width: widthPx, height: heightPx },
      })
      const size = frameNode.getMeasuredSize()
      return {
        height: px2vp(size.height),
        width: px2vp(size.width),
      }
    })
  }

  protected override initClass(): void {
    this.initStyleCache()
  }

  protected initStyleCache() {
    this.styleCache = {
      borderColor: {},
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      placeholderFont: {},
      placeholderStyleLevel: {
        fontFamily: 0,
        fontWeight: 0,
        fontSize: 0,
        fontStyle: 0,
        color: 0
      },
      placeholderColor: '',
      borderWidth: {
        top: 0,
        bottom: 0
      }
    }
  }

  protected handleMountedFocus() {
    this.mounted = true
    if (this.needFocusWhenMounted || this.autofocus) {
      // 等待页面加载完成再聚焦，单纯 onAttach 会因为页面内容太多导致时机太早
      this.page.document.requestRenderQueue(() => {
        this.triggerFocus()
      })
    }
  }

  protected initTouchEventListener() {
    // 不需要主动移除监听，会随页面销毁一起回收
    // 通过监听元素及页面的 touch 事件支持 holdKeyboard
    this.addEventListener('touchstart', () => {
      this.isTouching = true
    })
    this.addEventListener('touchend', () => {
      this.isTouching = false
    })
    this.page.addPageEventListener('onPageTouchStart', () => {
      // holdKeyboard:false 且当前操作的不是输入框，需要失焦
      if (!this.holdKeyboard && !this.isTouching && this.isFocusing) {
        this.app.context?.getFocusController().clearFocus()
      }
    })
  }

  get value(): string {
    return this.textValue
  }

  getCurrentFontSize(): number {
    return this.currentFontSize
  }

  protected updateCurrentFontSize(value: Object | undefined): number {
    let fontSize = this.currentFontSize
    // 样式重置时 value 可能为空，需要回退默认字号，避免沿用上一次的大字号缓存。
    formatFontSize(value ?? this.defaultFontSize, (value) => {
      if (typeof value === 'number' && !Number.isNaN(value)) {
        fontSize = value
      }
    })
    this.currentFontSize = fontSize
    return fontSize
  }

  protected getInputContentMinHeight(): number {
    return this.getInputTextMinHeight() + this.getVerticalBoxInset()
  }

  protected adjustHeightForCurrentFontSize(): void {
    // 只修正未显式设置高度的场景，避免覆盖用户主动设置的小高度。
    if (this.styleHeight !== 'auto' || this.currentFontSize <= this.defaultFontSize) {
      return
    }
    const minHeight = this.getInputContentMinHeight()
    if (this.getCurrentHeightForFontSize() >= minHeight) {
      return
    }
    this.inputFileFrameNode.commonAttribute.height(minHeight)
    super.parseStyle('height', minHeight)
  }

  protected getInputTextMinHeight(): number {
    return this.currentFontSize
  }

  private getCurrentHeightForFontSize(): number {
    return this.getBoundingClientRect().height || this.layoutNode.getLayoutHeight()
  }

  protected getVerticalBoxInset(): number {
    return this.toNumber(this.styleCache.padding.top) + this.toNumber(this.styleCache.padding.bottom) +
    this.styleCache.borderWidth.top + this.styleCache.borderWidth.bottom
  }

  private toNumber(value: Object | undefined): number {
    if (typeof value === 'number') {
      return Number.isNaN(value) ? 0 : value
    }
    const result = parseFloat(String(value ?? 0))
    return Number.isNaN(result) ? 0 : result
  }

  // 供 from reset 调用
  reset(): void {
    this.textValue = this.initValue as string
  }

  override setAnyAttribute(key: string, value: Object): void {
    switch (key) {
      case 'value':
        this.textValue = String(value)
        if (this.maxLength !== null) {
          this.textValue = this.textValue.slice(0, this.maxLength)
        }
        if (this.initValue === null) {
          this.initValue = this.textValue
        }
        this.attributes.set(key, this.textValue)
        break
      default:
        super.setAnyAttribute(key, value)
        break
    }
  }

  override updateNativeAttribute(key: string, value: ESObject) {
    switch (key) {
      case 'name':
        this.name = value
        break
      case 'value':
        this.textValue = String(value)
        if (this.maxLength !== null) {
          this.textValue = this.textValue.slice(0, this.maxLength)
        }
        break
      case 'maxlength':
        if (typeof value !== 'number' || value < 0) {
          return
        }
        this.maxLength = value as number
        break
      case 'disabled':
        this.disabled = value as boolean
        break
      case 'autoFocus':
        if (this.handledAutoFocus) {
          return
        }
        this.autofocus = value as boolean
        this.handledAutoFocus = true
        break
      case 'focus':
        if (value) {
          if(this.isFocusing) return

          if (!this.mounted) {
            this.needFocusWhenMounted = true
            return
          }
          this.triggerFocus()
        } else {
          if (this.isFocusing) {
            this.triggerBlur()
          }
        }
        break
      case 'confirmHold':
        this.confirmHold = value
        break
      case 'selectionStart':
        this.selection.start = value as number
        break
      case 'selectionEnd':
        this.selection.end = value as number
        break
      case 'holdKeyboard':
        this.holdKeyboard = value as boolean
        break
      case 'placeholderClass':
        const placeHolderClassValue: ESObject = {} as ESObject
        if (value !== '') {
          (value as Map<string, number | string>).forEach((value: number | string, key: string) => {
            placeHolderClassValue[key] = value
          })
        }
        this.parsePlaceholderStyle(placeHolderClassValue, 1)
        break
      case 'placeholderStyle':
        // textAlign 不支持
        this.parsePlaceholderStyle(value, 2)
        break
      case 'adjustPosition':
        this.adjustPosition = value as boolean
        break
      default:
        super.updateNativeAttribute(key, value)
        break
    }
  }

  protected triggerFocus() {
    try {
      this.app?.context!.getFocusController().requestFocus(this.getNodeId())
      this.isFocusing = true
      // 需要聚焦状态后设置光标位置
      setTimeout(() => {
        if(this.selection.end !== -1 && this.selection.end >= this.selection.start){
          this.controller.setTextSelection(this.selection.start, this.selection.end)
        }else{
          this.controller.setTextSelection(this.value.length, this.value.length)
        }
      }, 0)
    } catch (e) {
      console.error(e.message)
    }
  }

  protected triggerBlur(){
    try {
      this.app?.context!.getFocusController().clearFocus()
    } catch (e) {
      console.error(e.message)
    }
  }

  protected parsePlaceholderStyle(value: ESObject, level: number) {
    if (this.styleCache.placeholderFont.family === undefined || level >= this.styleCache.placeholderStyleLevel.fontFamily) {
      if (value['fontFamily'] !== undefined) {
        formatFontFamily(value['fontFamily'], (v) => { this.styleCache.placeholderFont.family = v })
      } else {
        this.styleCache.placeholderFont.family = undefined
      }
      this.styleCache.placeholderStyleLevel.fontFamily = level
    }
    if (this.styleCache.placeholderFont.weight === undefined || level >= this.styleCache.placeholderStyleLevel.fontWeight) {
      if (value['fontWeight'] !== undefined) {
        formatFontWeight(value['fontWeight'], (v) => { this.styleCache.placeholderFont.weight = v })
      } else {
        this.styleCache.placeholderFont.weight = undefined
      }
      this.styleCache.placeholderStyleLevel.fontWeight = level
    }
    if (this.styleCache.placeholderFont.size === undefined || level >= this.styleCache.placeholderStyleLevel.fontSize) {
      if (value['fontSize'] !== undefined) {
        formatFontSize(value['fontSize'] as string, (v) => { this.styleCache.placeholderFont.size = v })
      } else {
        this.styleCache.placeholderFont.size = undefined
      }
      this.styleCache.placeholderStyleLevel.fontSize = level
    }
    if (this.styleCache.placeholderFont.style === undefined || level >= this.styleCache.placeholderStyleLevel.fontStyle) {
      if (value['fontStyle'] !== undefined) {
        formatFontStyle(value['fontStyle'] as string, (v) => { this.styleCache.placeholderFont.style = v })
      } else {
        this.styleCache.placeholderFont.style = undefined
      }
      this.styleCache.placeholderStyleLevel.fontStyle = level
    }
  }

  override parseStyle(key: string, value: Object): boolean {
    value = this.normalizeStyleValue(key, value)
    switch (key) {
      case 'color':
      case 'fontStyle':
      case 'fontWeight':
      case 'fontFamily':
      case 'lineHeight':
      case 'textAlign':
        return callClass(this, UniTextElementImpl, 'parseStyle', [key, value])
      case 'height':
        this.styleHeight = value as string
        return super.parseStyle(key, value)
      case 'fontSize':
        const res: boolean = callClass(this, UniTextElementImpl, 'parseStyle', [key, value])
        if(!this.hasPlaceholderFontSize && res){
          formatFontSize(value as string, (value) => {
            if(value != undefined){
              this.parsePlaceholderStyle({fontSize: value}, 0)
              this.updateCurrentFontSize(value)
              this.adjustHeightForCurrentFontSize()
            }
          })
        }
        return res
      default:
        return super.parseStyle(key, value)
    }
  }

  protected collectScrollAbleParents() {
    let currentParent = this.parentNode
    while (currentParent) {
      if (this.isScrollAbleElement(currentParent)) {
        this.rollAbleParents.push(currentParent as UniScrollElementImpl)
      }
      currentParent = currentParent.parentNode
    }
  }

  protected isScrollAbleElement(el: UniElement): boolean {
    return el instanceof UniScrollElementImpl
  }

  protected watchKeyboardHeightChange() {
    this.keyboardHeightChangeCallback = this.handleKeyboardHeightChange.bind(this)
    window.getLastWindow(getContext(this)).then(currentWindow => {
      this.currentWindow = currentWindow
      this.currentWindow.on('keyboardHeightChange', this.keyboardHeightChangeCallback!)
    })
  }

  protected handleKeyboardHeightChange(height: number) {
    this.keyboardHeight = px2vp(height)
    this.handleElementPositionWhenFocus()
    this.dispatchKeyboardHeightChange()
  }

  protected handleElementPositionWhenFocus() {
    if (this.isFocusing && this.rollAbleParents.length > 0 && this.adjustPosition && this.page != null) {
      const windowHeight = this.uniPage.pageBody.height

      const boundingClientRect = this.getBoundingClientRect()
      const elementHeight = boundingClientRect.height
      // 判断元素的位置是否高于键盘高度
      // 元素距离底部距离 = 窗口高度-元素纵坐标-元素高度
      const elementToBottomDistance = windowHeight - boundingClientRect.y - elementHeight
      // 使元素在软键盘上面，需要滚动的距离
      const needMoreScrollDistance = this.keyboardHeight - elementToBottomDistance
      // 如果元素位置高于软键盘顶部，不需要处理
      if (needMoreScrollDistance <= 0) {
        return
      }

      let currentParentNode!: UniScrollElementImpl
      let currentParentToBottomDistance: number = 0
      for (let i = 0; i < this.rollAbleParents.length; i++) {
        currentParentNode = this.rollAbleParents[i]
        const parentBoundingClientRect = currentParentNode.getBoundingClientRect()
        currentParentToBottomDistance = windowHeight - parentBoundingClientRect.y
        // 如果该滚动容器的位置能够露出元素，使用该滚动容器
        if (currentParentToBottomDistance - elementHeight >= this.keyboardHeight) {
          break
        }
      }
      // 如果上面没有选到合适的滚动容器，此时无法通过操作滚动容器露出元素, 向上移动整个页面露出元素
      if (currentParentToBottomDistance - elementHeight < this.keyboardHeight) {
        this.app?.context!.animateTo({
          duration: 400,
          curve: Curve.ExtremeDeceleration,
        }, () => {
          this.page?.document.body.parseStyle('top', `-${this.keyboardHeight - elementToBottomDistance}px`)
        })
        this.resetElementPositionWhenBlur = () => {
          this.app?.context!.animateTo({
            duration: 400,
            curve: Curve.ExtremeDeceleration,
          }, () => {
            this.page?.document.body.parseStyle('top', '0px')
          })
        }
        return
      }

      const parentScrollHeight = currentParentNode.scrollHeight
      const parentScrollTop = currentParentNode.scrollTop
      // 计算剩余可滚动高度
      const canMoreScrollDistance =
        parentScrollHeight - parentScrollTop - currentParentNode.getBoundingClientRect().height
      // 剩余可滚动高度不足以露出元素，新增占位子元素，使其可以滚动
      if (canMoreScrollDistance < needMoreScrollDistance) {
        // 某些情况会需要多次增加占位元素调整元素位置，比如切换输入法导致聚焦状态时键盘高度变化，所以使用数组存储占位元素
        // 因为 list-view 的子元素只能是 list-item, 所以这里填充的占位元素使用 list-item
        const placeholderElement =
          new UniListItemElementImpl(new NodeData(`placeholder_id_${Date.now()}_${Math.floor(Math.random() * 1000000)}`,
            "list-item"), this.page)
        placeholderElement.parseStyle('height', `${this.keyboardHeight}px`)
        currentParentNode.appendChild(placeholderElement)
        this.placeholderElsForRollAbleParent.push(placeholderElement)
      }
      this.resetElementPositionWhenBlur = () => {
        currentParentNode!.scrollTop = parentScrollTop
        while (this.placeholderElsForRollAbleParent.length > 0) {
          const placeholderElement = this.placeholderElsForRollAbleParent.pop()
          currentParentNode.removeChild(placeholderElement as UniElement)
        }
      }
      // 滚动滚动容器，露出元素 setTimeout 是为了等待 append 的子元素渲染
      setTimeout(() => {
        currentParentNode.__scrollTo(
          currentParentNode.scrollLeft,
          parentScrollTop + needMoreScrollDistance, {
          duration: this.keyboardAnimationDuration,
          curve: Curve.ExtremeDeceleration,
        } as ScrollAnimationOptions
        )
      }, 50)
    }
  }

  protected dispatchKeyboardHeightChange() {
    // 如果该组件不需要触发键盘高度变化事件，或者当前没有聚焦状态，则不需要触发
    if (!this.needDispatchKeyboardHeightChange || !this.isFocusing) {
      return
    }

    this.dispatchEvent(new UniCustomEvent(
      'keyboardheightchange',
      new UniCustomEventOptions<KeyboardHeightChangeEventDetail>({ height: this.keyboardHeight, duration: 0 })
    ))
  }

  protected handleKeyboardAvoidMode() {
    // 如果父元素中有滚动容器，设置键盘不避让，框架处理推起页面逻辑
    if (!this.adjustPosition || this.rollAbleParents.length > 0) {
      this.app?.context!.setKeyboardAvoidMode(KeyboardAvoidMode.NONE)
      return
    }
    this.app?.context!.setKeyboardAvoidMode(KeyboardAvoidMode.OFFSET)
  }

  protected resetKeyboardAvoidMode() {
    this.app?.context!.setKeyboardAvoidMode(KeyboardAvoidMode.OFFSET)
  }

  protected baseFocusEvent() {
    this.preTextValue = this.textValue
    this.isFocusing = true
    this.handleKeyboardAvoidMode()
  }

  protected dispatchFocus() {
    if (this.needDispatchFocus) {
      this.dispatchEvent(new UniCustomEvent('focus', new UniCustomEventOptions<FocusEventDetail>({ value: this.textValue, height: this.keyboardHeight })))
    }
  }

  protected baseBlurEvent() {
    this.app.context?.getFocusController().clearFocus()
    // 等待软键盘收起再移除聚焦状态
    setTimeout(() => {
      this.isFocusing = false
    }, this.keyboardAnimationDuration)
    this.resetKeyboardAvoidMode()
    this.resetElementPositionWhenBlur()
    this.dispatchChange()
  }

  protected dispatchChange() {
    if (this.textValue !== this.preTextValue) {
      this.dispatchEvent(new UniCustomEvent('change',
        new UniCustomEventOptions<EventDetail>({ value: this.textValue })))
    }
  }

  protected dispatchBlur() {
    if (this.needDispatchBLur) {
      this.dispatchEvent(new UniCustomEvent('blur', new UniCustomEventOptions<InputEventDetail>({ value: this.textValue, cursor: this.cursor })))
    }
  }

  protected handleInput(value: string, cursor: number | null) {
    if (this.maxLength !== null) {
      value = value.slice(0, this.maxLength)
    }
    this.textValue = value
    if(cursor != null){
      this.cursor = cursor
    }
  }

  protected dispatchInput() {
    if (this.needDispatchInput) {
      this.dispatchEvent(new UniCustomEvent('input', new UniCustomEventOptions<InputEventDetail>({ value: this.textValue, cursor: this.cursor })))
    }
  }

  protected dispatchConfirm() {
    if (this.needDispatchConfirm) {
      this.dispatchEvent(new UniCustomEvent('confirm',
        new UniCustomEventOptions<EventDetail>({ value: this.textValue })))
    }
  }

  protected override initNativeEvent(type: string): void {
    switch (type) {
      case 'input': {
        this.needDispatchInput = true
        break
      }
      case 'focus': {
        this.needDispatchFocus = true
        break
      }
      case 'blur': {
        this.needDispatchBLur = true
        break
      }
      case 'keyboardheightchange': {
        this.needDispatchKeyboardHeightChange = true
        break
      }
      case 'confirm': {
        this.needDispatchConfirm = true
        break
      }
      default:
        super.initNativeEvent(type)
        break
    }

  }

  protected override deleteNativeEvent(type: string, res: void | Object): boolean {
    switch (type) {
      case 'input':
        this.needDispatchInput = false
        return true
      case 'focus': {
        this.needDispatchFocus = false
        return true
      }
      case 'blur': {
        this.needDispatchBLur = false
        return true
      }
      case 'keyboardheightchange': {
        this.needDispatchKeyboardHeightChange = false
        return true
      }
      case 'confirm': {
        this.needDispatchConfirm = false
        return true
      }
      default:
        return super.deleteNativeEvent(type, res)
    }
  }

  override dispose(): void {
    this.rollAbleParents = []
    this.resetElementPositionWhenBlur = () => {
    }
    this.inputFileFrameNode?.dispose()
    if (this.keyboardHeightChangeCallback) {
      this.currentWindow?.off('keyboardHeightChange', this.keyboardHeightChangeCallback)
    }
    super.dispose()
  }
}
