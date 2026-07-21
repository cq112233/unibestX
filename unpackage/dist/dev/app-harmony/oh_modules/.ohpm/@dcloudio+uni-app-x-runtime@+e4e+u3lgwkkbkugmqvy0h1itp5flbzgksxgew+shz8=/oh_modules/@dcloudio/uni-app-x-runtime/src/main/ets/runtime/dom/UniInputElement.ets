import { typeNode, FrameNode, ComponentContent } from '@kit.ArkUI'
import { formatColor, callObject } from '../helper'
import {
  DEFAULT_FONT_SIZE_NUM,
  updateFontSize,
  updateLineHeight,
  setTextBaseStyleCache,
  lengthMetricsToString
} from './UniTextBaseElement'
import { UniCssFlexEdge } from 'dcloudlayout'
import { CONFIRM_TYPES, UniInputFileElementImpl } from './UniInputFile'
import { deviceInfo } from '@kit.BasicServicesKit';

const INPUT_TYPES = new Map<string, InputType>([
  // for type
  ['text', InputType.Normal],
  ['number', InputType.Number],
  ['digit', InputType.NUMBER_DECIMAL],
  ['tel', InputType.PhoneNumber],
  // for password
  ['password', InputType.Password],
  // for inputMode
  ['email', InputType.Email],
  ['url', InputType.URL],
])

const DEFAULT_LINE_HEIGHT = '1.4em'

@Builder
function CustomKeyboardBuilder() {
  Column() {}.height(0)
}

export class UniInputElementImpl extends UniInputFileElementImpl {
  private inputFrameNode!: typeNode.TextInput
  private isPassword = false
  private isSetUpCustomKeyboard = false

  static override get defaultStyle() {
    // Bug 在uni-app-x-runtime编译为har包且被其他har包引用时省略此as会导致引用uni-app-x-runtime的har包无法编译出.har文件
    const baseDefaultStyle = super.defaultStyle as Map<string, [string] | [string, boolean]>
    const defaultStyle = new Map(baseDefaultStyle)
    defaultStyle.set('fontSize', [DEFAULT_FONT_SIZE_NUM + 'px'])
    defaultStyle.set('lineHeight', [DEFAULT_LINE_HEIGHT, true])
    defaultStyle.set('height', ['auto', true])
    return defaultStyle
  }

  protected override initClass(): void {
    super.initClass()
    setTextBaseStyleCache(this, {
      fontSize: DEFAULT_FONT_SIZE_NUM,
      lineHeight: '1.5em',
    })

    this.controller = new TextInputController()
    // TODO 增加 inputLayoutNode 来实现 inputFrameNode flex 1 撑满父元素
    const input = this.inputFrameNode = this.inputFileFrameNode = typeNode.createNode(this.app.context, 'TextInput')
    input.attribute.padding(0).borderRadius(0).backgroundColor(Color.Transparent)
    input.attribute.showPasswordIcon(false)
    // 设置 key 供 requestFocus 使用
    input.attribute.key(this.getNodeId())

    input.attribute.onChange((value: string, previewText?: PreviewText, opt?: TextChangeOptions) => {
      if (value === this.textValue) {
        return
      }
      super.handleInput(value, opt?.rangeAfter?.end || null)
      this.dispatchInput()
    })

    input.attribute.onAttach(() => {
      this.handleMountedFocus()
      this.collectScrollAbleParents()
      this.watchKeyboardHeightChange()
      this.initTouchEventListener()
    })

    input.attribute.onFocus(() => {
      this.baseFocusEvent()
      this.dispatchFocus()
    })
    input.attribute.onBlur(() => {
      this.baseBlurEvent()
      this.dispatchBlur()
    })
    input.attribute.onSubmit((_: EnterKeyType, event: SubmitEvent) => {
      if (this.confirmHold) {
        event.keepEditableState()
      }
      this.dispatchConfirm()
    })
  }

  constructor() {
    super()
  }

  protected resetCustomKeyboard(){
    if(this.isSetUpCustomKeyboard){
      this.isSetUpCustomKeyboard = false
      callObject(this.inputFrameNode.attribute,this.inputFrameNode.attribute,'customKeyboard',[undefined])
    }
  }

  private updateInputType(): void {
    const type = INPUT_TYPES.get(this.isPassword ? 'password' : this.type)
    if (type !== undefined) {
      this.inputFrameNode.attribute.type(type)
    }
  }

  protected override createFrameNode(): FrameNode {
    // input 包含 padding 时测量不准确(时机), 使用 frame 包裹以避免 input 包含 padding
    const frameNode = new FrameNode(this.app.context!)
    frameNode.commonAttribute.clip(false).align(Alignment.Center)
    frameNode.appendChild(this.inputFrameNode)
    return frameNode
  }

  override updateNativeAttribute(key: string, value: ESObject) {
    // TODO: 低优先级 cursor-spacing, harmony 回复暂不支持
    switch (key) {
      case 'value':
        super.updateNativeAttribute(key, value)
        this.inputFrameNode.initialize({
          text: this.textValue,
          placeholder: this.placeholder,
          controller: this.controller
        })
        this.layoutNodeDirty()
        break
      case 'placeholder':
        this.placeholder = value as string
        this.inputFrameNode.initialize({ text: this.textValue, placeholder: value, controller: this.controller })
        break
      case 'maxlength':
        super.updateNativeAttribute(key, value)
        this.inputFrameNode.attribute.maxLength(this.maxLength)
        break
      case 'confirmType':
        const confirmType = CONFIRM_TYPES.get(value)
        if (confirmType) {
          this.inputFrameNode.attribute.enterKeyType(confirmType)
        }
        break
      case 'disabled':
        super.updateNativeAttribute(key, value)
        this.inputFrameNode.attribute.enabled(!this.disabled)
        break
      case 'cursor':
        // 因为 triggerFocus 在 setTimeout 中, 所以这里也要在 setTimeout 中
        setTimeout(() => {
          this.inputFrameNode.attribute.caretPosition(value as number)
        }, 0)
        break
      case 'cursorColor':
        formatColor(value as string, (value) => {
          this.inputFrameNode.attribute.caretColor(value)
        })
        break
      case 'cursorStyle':
        this.inputFrameNode.attribute.caretStyle(value as CaretStyle)
        break
      case 'type':
        if (value === 'none') {
          // API 22 customKeyboard 才支持 ComponentContent | undefined 类型
          if (deviceInfo.sdkApiVersion >= 22) {
            // 'none' 设置聚焦不弹起软键盘 https://issuereporter.developer.huawei.com/detail/250428155020088/comment
            callObject(this.inputFrameNode.attribute,this.inputFrameNode.attribute,'customKeyboard',[new ComponentContent(this.app.context!, wrapBuilder(CustomKeyboardBuilder))])
            this.isSetUpCustomKeyboard = true
          }
          return
        }
        this.resetCustomKeyboard()
        const typeValue = value as string
        const type = INPUT_TYPES.get(typeValue)
        if (type !== undefined) {
          this.type = typeValue
          if (!this.isPassword) {
            this.inputFrameNode.attribute.type(type)
          }
        }
        break
      case 'password':
        this.isPassword = value as boolean
        this.updateInputType()
        break
      default:
        super.updateNativeAttribute(key, value)
        break
    }
  }

  protected parsePlaceholderStyle(value: ESObject, level: number) {
    super.parsePlaceholderStyle(value, level)

    if (level >= this.styleCache.placeholderStyleLevel.color) {
      const color: string | undefined = value['color']
      color !== undefined
        ? formatColor(color as string, (v) => { this.inputFrameNode.attribute.placeholderColor(v) })
        : this.inputFrameNode.attribute.placeholderColor('')
      this.styleCache.placeholderStyleLevel.color = level
    }
    this.inputFrameNode.attribute.placeholderFont(this.styleCache.placeholderFont)
  }

  override updateNativeNodeStyle(key: string, value: Object | undefined) {
    const attribute = this.inputFrameNode.attribute
    switch (key) {
      case 'clip':
        break
      case 'color':
        attribute.fontColor(value as string)
        break
      case 'fontSize': {
        const fontSize = this.updateCurrentFontSize(value)
        updateFontSize(this, fontSize, (value) => {
          // number 类型在此处代表 fp 而不代表 vp，需要特殊处理
          attribute.fontSize(lengthMetricsToString(value))
        })
        this.adjustHeightForCurrentFontSize()
        break
      }
      case 'fontStyle':
        attribute.fontStyle(value as FontStyle)
        this.layoutNodeDirty()
        break
      case 'fontWeight':
        attribute.fontWeight(value as FontWeight)
        this.layoutNodeDirty()
        break
      case 'fontFamily':
        attribute.fontFamily(value as string)
        this.layoutNodeDirty()
        break
      case 'lineHeight': {
        updateLineHeight(this, value as string | number, (value) => {
          // lineHeight 存在居中问题，暂时使用 height 的居中特性替代
          attribute.height(lengthMetricsToString(value))
        })
        break
      }
      case 'textAlign':
        attribute.textAlign(value as TextAlign)
        this.layoutNodeDirty()
        break
      case 'paddingTop':
      case 'paddingRight':
      case 'paddingBottom':
      case 'paddingLeft': {
        const direction = key.replace('padding', '').toLowerCase()
        const padding = this.styleCache.padding
        if (padding[direction] !== value) {
          padding[direction] = value as number
          this.frameNode.commonAttribute.padding(padding)
          if (key === 'paddingTop' || key === 'paddingBottom') {
            // 垂直 padding 会改变默认高度下可容纳的文本空间，需要重新校正 auto 高度。
            this.adjustHeightForCurrentFontSize()
          }
        }
        break
      }
      default:
        super.updateNativeNodeStyle(key, value)
        break
    }
  }

  override checkLayout(): void {
    super.checkLayout()
    const layoutNode = this.layoutNode
    this.updateNativeNodeStyle('paddingLeft', layoutNode.getLayoutPadding(UniCssFlexEdge.Left))
    this.updateNativeNodeStyle('paddingRight', layoutNode.getLayoutPadding(UniCssFlexEdge.Right))
    this.updateNativeNodeStyle('paddingTop', layoutNode.getLayoutPadding(UniCssFlexEdge.Top))
    this.updateNativeNodeStyle('paddingBottom', layoutNode.getLayoutPadding(UniCssFlexEdge.Bottom))
  }

  override reset() {
    super.reset()
    this.inputFrameNode.initialize({
      text: this.textValue,
      placeholder: this.placeholder,
      controller: this.controller
    })
  }

  override getHarmonyController<T extends TextInputController>(): T {
    return this.controller as T
  }

  override dispose() {
    const attribute = this.inputFrameNode.attribute
    attribute.onChange(undefined)
    attribute.onAttach(undefined)
    attribute.onFocus(undefined)
    attribute.onBlur(undefined)
    attribute.onSubmit(undefined)
    this.inputFrameNode.dispose()
    super.dispose()
  }
}
