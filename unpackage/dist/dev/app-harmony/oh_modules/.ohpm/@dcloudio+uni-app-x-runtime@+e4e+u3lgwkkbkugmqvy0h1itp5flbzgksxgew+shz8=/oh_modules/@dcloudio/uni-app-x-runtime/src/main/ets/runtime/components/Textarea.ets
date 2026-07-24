import { ComponentBaseOptions } from '../Node'
import { KeyboardAvoidMode } from '@kit.ArkUI'

export interface TextareaOptions extends ComponentBaseOptions {
  placeholder?: string
  text: string
  controller: TextAreaController
}

export interface EventDetail {
  value: string | number
}

export interface InputEventDetail {
  value: string | number
  cursor: number | null
}

export interface FocusEventDetail {
  value: string | number
  height: number
}

export interface InputEvent {
  detail: InputEventDetail
}

@Component
export struct Textarea {
  // 用于获取组件实例
  onAboutToAppear?: (instance: Textarea) => void
  // 用于获取组件属性
  attributeUpdater?: object
  controller = new TextAreaController()
  @Prop cacheKey: string = ''
  @Prop text: string = ''
  @Prop textAreaComponentHeight: number | string = 150
  @Prop placeholder: string = ''
  @Prop disabled: boolean = false
  @Prop adjustPosition: boolean = true
  @Prop cacheBorderColor: EdgeColors = {}
  @Prop cachePlaceholderFont: Font = {}
  @Prop cachePlaceholderColor: ResourceColor = ''
  @Prop cacheMaxLength: number = -1
  @Prop cacheConfirmType: EnterKeyType = EnterKeyType.NEW_LINE
  @Prop cacheCaretColor: ResourceColor = ''
  @Prop cacheCaretStyle: CaretStyle = {}
  @Prop cacheInputMode: TextAreaType = TextAreaType.NORMAL
  @Prop cachePadding: Padding = {}
  @Prop autoHeight: boolean = false
  handleInput?: (event: InputEvent) => void = undefined
  handleFocus?: () => void = undefined
  handleBlur?: () => void = undefined
  handleConfirm?: (enterKey: EnterKeyType, event: SubmitEvent) => void = undefined
  handleEditChange ?: (isEditing: boolean) => void = undefined
  handleAttach?: () => void = undefined

  build() {
    TextArea({text: this.text, placeholder: this.placeholder, controller: this.controller})
      .attributeModifier(this.attributeUpdater)
      .key(this.cacheKey)
      .height(this.textAreaComponentHeight)
      .enabled(!this.disabled)
      .padding(this.cachePadding)
      .borderColor(this.cacheBorderColor)
      .placeholderFont(this.cachePlaceholderFont)
      .placeholderColor(this.cachePlaceholderColor)
      .maxLength(this.cacheMaxLength)
      .enterKeyType(this.cacheConfirmType)
      .caretColor(this.cacheCaretColor)
      .caretStyle(this.cacheCaretStyle)
      .type(this.cacheInputMode)
      .barState(this.autoHeight ? BarState.Off : BarState.Auto)
      .onChange((value:string, previewText?: PreviewText, opt?: TextChangeOptions) => {
        this.text = value
        this.handleInput?.({detail: {value, cursor: opt?.rangeAfter?.end || null}})
      })
      .onFocus(() => {
        this.getUIContext()!.setKeyboardAvoidMode(this.adjustPosition ? KeyboardAvoidMode.OFFSET : KeyboardAvoidMode.NONE)
        this.handleFocus?.()
      })
      .onBlur(() => {
        this.getUIContext()!.setKeyboardAvoidMode(KeyboardAvoidMode.OFFSET)
        this.handleBlur?.()
      })
      .onSubmit((enterKey: EnterKeyType, event: SubmitEvent) => {
        if(enterKey !== EnterKeyType.NEW_LINE) {
          this.handleConfirm?.(enterKey, event)
        }
      })
      .onEditChange((isEditing: boolean) => {
        this.handleEditChange?.(isEditing)
      })
      .onAttach(() => {
        this.handleAttach?.()
      })
  }

  aboutToAppear(): void {
    this.onAboutToAppear?.(this)
  }
}
