import { UniElementImpl } from './UniElement'
import { UniTextElement as ITextNode, UniElement as IUniElement } from '@dcloudio/uni-app-x/types/native'
import { FrameNode, LengthMetrics, typeNode } from '@kit.ArkUI'
import {
  formatFontSize,
  formatLineHeight,
  formatTextAlign,
  formatColor,
  formatFontStyle,
  formatFontWeight,
  formatFontFamily,
  formatTextOverflow,
  formatTextDecorationLine,
  formatTextDecorationStyle,
  TextOverflowValue,
  formatNumber,
  formatLength,
  parseText,
  DecodeOptionsSpace,
  LINEFEED,
  DEFAULT_TRANSFORM,
} from '../helper'
import { UniCssFlexEdge, UniLayoutMeasureMode } from 'dcloudlayout'
import { DEFAULT_FONT_SIZE_NUM, DEFAULT_LINE_HEIGHT, updateFontSize, updateLineHeight } from './UniTextBaseElement'
import { init as initPointerEvent } from './UniPointerEvent'
import { useNativePreventDefault } from './UniEvent'
import { UniCallbackWrapper } from './UniCallbackWrapper'
import { CSSStyleValueFormatter } from './cssom/index'
import { CSSStyleValue as ICSSStyleValue } from './cssom/types'

interface NativeTextStyleCache {
  textStyle: TextStyleInterface
  paragraph: ParagraphStyleInterface
  decoration: DecorationStyleInterface
  padding: Padding
  lineHeight?: LineHeightStyle
  letterSpacing?: LetterSpacingStyle
}

export class UniTextElementImpl extends UniElementImpl<typeNode.Text> implements ITextNode {
  static skipDefaultFrameNodeStyle = true
  private nativeTextStyleCache!: NativeTextStyleCache
  private textController!: TextController
  private styleOptions!: Map<StyledStringKey, StyledStringValue>

  get value(): string {
    return this.getAttribute('value') || ''
  }

  static override get defaultStyle() {
    // Bug 在uni-app-x-runtime编译为har包且被其他har包引用时省略此as会导致引用uni-app-x-runtime的har包无法编译出.har文件
    const baseDefaultStyle =
      super.defaultStyle as Map<string, [string] | [string, boolean] | [string, boolean, (el: IUniElement) => void]>
    const style = new Map(baseDefaultStyle)
    style.set('color', ['#000000'])
    style.set('fontSize', [DEFAULT_FONT_SIZE_NUM + 'px'])
    // TODO 默认为 1.2，但取整方式有差异，后续增加配置
    style.set('lineHeight', [DEFAULT_LINE_HEIGHT])
    style.set('fontStyle', ['normal'])
    style.set('fontWeight', ['normal'])
    style.set('letterSpacing', ['0'])
    style.set('textAlign', ['left'])
    style.set('lines', ['-1'])
    style.set('textDecorationColor', ['#000000'])
    style.set('textDecorationLine', ['none'])
    style.set('textDecorationStyle', ['solid'])
    style.set('textOverflow', ['clip'])
    style.set('whiteSpace', ['normal'])
    style.set('textIndent', ['0'])
    return style
  }

  constructor() {
    super()
    this.frameNode.initialize(undefined, {
      controller: this.textController
    })
    this.setMeasureFunction((width, widthMode, height, heightMode) => {
      // TODO 使用 textController.getLayoutManager() 测量
      const text = this.frameNode
      // 先去除 width height padding，再 measure
      text.attribute.width('auto').height('auto').padding(0)
      const widthPx = vp2px(width)
      const heightPx = vp2px(height)
      text.measure({
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
      const size = text.getMeasuredSize()
      // 恢复 padding
      const attribute = text.attribute
      attribute.padding(this.nativeTextStyleCache.padding)
      const cache = this.layoutNodeCache
      const layoutNode = this.layoutNode
      const layoutWidth = layoutNode.getLayoutWidth()
      const layoutHeight = layoutNode.getLayoutHeight()
      // 恢复 width height
      if (cache.height === layoutHeight) {
        attribute.height(layoutHeight)
      }
      if (cache.width === layoutWidth) {
        attribute.width(layoutWidth)
      }
      return { width: px2vp(size.width), height: px2vp(size.height) }
    })
  }

  override batchSetStyleEnd() {
    const batchSetTextStyleSize = this.applyBatchSetTextStyle()
    super.batchSetStyleEnd()
    if (batchSetTextStyleSize > 0) {
      this.updateText()
    }
  }

  protected override initClass() {
    this.textController = new TextController()
    this.batchSetTextStyleKeys = new Set<StyledStringKey>()
    this.styleOptions = new Map()
    this.nativeTextStyleCache = {
      textStyle: {},
      paragraph: {
        textAlign: TextAlign.Start
      },
      decoration: {
        type: TextDecorationType.None,
        color: Color.Black,
        style: TextDecorationStyle.SOLID
      },
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
    }
  }

  protected override createFrameNode(): typeNode.Text {
    const text = typeNode.createNode(this.app.context, 'Text')
    text.attribute
      .clip(true)
      .transform(DEFAULT_TRANSFORM as Object as object)
      .opacity(1)
      .align(Alignment.TopStart)
      .halfLeading(true)

    return text
  }

  getTextExtra(): object {
    throw new Error('Method not implemented.')
  }

  private fixClickCallback?: UniCallbackWrapper

  private fixClick(enable: boolean) {
    let fixClickCallback = this.fixClickCallback
    if (enable) {
      if (!fixClickCallback) {
        this.fixClickCallback = this.addEventListener('click', () => {
        })
      }
    } else {
      if (fixClickCallback) {
        this.removeEventListener('click', fixClickCallback)
      }
    }
  }

  override updateNativeAttribute(key: string, value: ESObject) {
    switch (key) {
      case 'selectable': {
        // 文本是否可选
        let mode = value ? TextSelectableMode.SELECTABLE_UNFOCUSABLE : TextSelectableMode.UNSELECTABLE
        // 禁用文本选择且启用复制会影响 GestureStyle 点击监听
        this.frameNode.attribute.textSelectable(mode).copyOption(value ? CopyOptions.LocalDevice : CopyOptions.None)
        // 启用 textSelectable 会导致原生层文本点击事件不冒泡
        this.fixClick(value)
        break
      }
      case 'decode':
        this.updateText()
        break
      case 'space': {
        this.updateText()
        break
      }
    }
  }

  override setAnyAttribute(key: string, value: ESObject): void {
    const diff = key === 'value' && this.getAttribute(key) !== value
    super.setAnyAttribute(key, value)
    if (diff) {
      this.updateText()
    }
  }

  private updateText(ignoreLayout = false) {
    const parent = this.parentNode as UniElementImpl | null
    if (!parent) {
      return
    }
    if (parent instanceof UniTextElementImpl) {
      parent.updateText(ignoreLayout)
      return
    }
    const styledStringOptions = this.getStyledStringOptions(true)
    let value = styledStringOptions[0]
    const styles = styledStringOptions[1]
    const styledString = new StyledString(value, styles)
    this.textController.setStyledString(styledString)
    if (!ignoreLayout) {
      this.layoutNodeDirty()
    }
  }

  /**
   * @internal
   */
  getStyledStringOptions(isRoot?: boolean): [string, StyleOptions[]] {
    // TODO cache
    const decode = this.getAnyAttribute('decode') as boolean
    const space = this.getAnyAttribute('space') as DecodeOptionsSpace
    let value = parseText(this.value, { space, decode }).join(LINEFEED)
    const styles: StyleOptions[] = []
    this.styleOptions.forEach((styledValue, styledKey) => {
      // 根节点部分属性使用 attribute 配置，而不使用 styles 配置，以兼容文本外层区域，如：padding
      const rootAttrs = [StyledStringKey.BACKGROUND_COLOR, StyledStringKey.GESTURE]
      if (isRoot && rootAttrs.includes(styledKey)) {
        return
      }
      // TODO 与iOS安卓一致暂时固定纠正下划线颜色为文字颜色
      if (styledKey === StyledStringKey.DECORATION) {
        const decoration = styledValue as DecorationStyle
        const color = this.style.getPropertyValue('color')
        styledValue = new DecorationStyle({
          type: decoration.type,
          color: color,
          style: decoration.style
        })
      }
      styles.push({
        start: 0,
        length: value.length,
        styledKey,
        styledValue
      })
    })
    this.children.forEach((child) => {
      if (child instanceof UniTextElementImpl) {
        const childStyledStringOptions = child.getStyledStringOptions()
        const childValue = childStyledStringOptions[0]
        const childStyles = childStyledStringOptions[1]
        const start = value.length
        value += childValue
        childStyles.forEach(style => {
          styles.push({
            start: start + style.start!,
            length: style.length!,
            styledKey: style.styledKey,
            styledValue: style.styledValue
          })
        })
      }
    })
    return [value, styles]
  }

  override setStyleValue(property: string, value: ICSSStyleValue) {
    switch (property) {
      case 'color': {
        const frameNodeColor = CSSStyleValueFormatter.colorToFrameNodeColor(value)
        if (frameNodeColor !== undefined) {
          this.updateNativeNodeStyle('color', frameNodeColor)
        }
        break
      }
      case 'font-size': {
        const frameNodeFontSize = CSSStyleValueFormatter.fontSizeToFrameNodeFontSize(value)
        if (frameNodeFontSize !== undefined) {
          this.updateNativeNodeStyle('fontSize', frameNodeFontSize)
        }
        break
      }
      case 'font-weight': {
        const frameNodeFontSize = CSSStyleValueFormatter.fontWeightToFrameNodeFontWeight(value)
        if (frameNodeFontSize !== undefined) {
          this.updateNativeNodeStyle('fontWeight', frameNodeFontSize)
        }
        break
      }
      case 'font-style': {
        const frameNodeFontStyle = CSSStyleValueFormatter.fontStyleToFrameNodeFontStyle(value)
        if (frameNodeFontStyle !== undefined) {
          this.updateNativeNodeStyle('fontStyle', frameNodeFontStyle)
        }
        break
      }
      case 'line-height': {
        const frameNodeLineHeight = CSSStyleValueFormatter.lineHeightToFrameNodeLineHeight(value)
        if (frameNodeLineHeight !== undefined) {
          this.updateNativeNodeStyle('lineHeight', frameNodeLineHeight)
        }
        break
      }
      case 'text-align': {
        const frameNodeTextAlign = CSSStyleValueFormatter.textAlignToFrameNodeTextAlign(value)
        if (frameNodeTextAlign !== undefined) {
          this.updateNativeNodeStyle('textAlign', frameNodeTextAlign)
        }
        break
      }
      case 'lines': {
        const frameNodeMaxLines = CSSStyleValueFormatter.numberToFrameNodeNumber(value)
        if (frameNodeMaxLines !== undefined) {
          this.updateNativeNodeStyle('maxLines', frameNodeMaxLines)
        }
        break
      }
      case 'white-space': {
        const frameNodeMaxLines = CSSStyleValueFormatter.whiteSpaceToFrameNodeMaxLines(value)
        if (frameNodeMaxLines !== undefined) {
          this.updateNativeNodeStyle('maxLines', frameNodeMaxLines)
        }
        break
      }
      case 'text-indent': {
        const frameNodeTextIndent = CSSStyleValueFormatter.lengthToFrameNodeLength(value)
        if (frameNodeTextIndent !== undefined) {
          this.updateNativeNodeStyle('textIndent', frameNodeTextIndent)
        }
        break
      }
      case 'text-overflow': {
        const frameNodeTextOverflow = CSSStyleValueFormatter.textOverflowToFrameNodeTextOverflow(value)
        if (frameNodeTextOverflow !== undefined) {
          this.updateNativeNodeStyle('textOverflow', frameNodeTextOverflow)
        }
        break
      }
      case 'text-decoration-color': {
        const frameNodeTextDecorationColor = CSSStyleValueFormatter.colorToFrameNodeColor(value)
        if (frameNodeTextDecorationColor !== undefined) {
          this.updateNativeNodeStyle('textDecorationColor', frameNodeTextDecorationColor)
        }
        break
      }
      case 'text-decoration-line': {
        const frameNodeTextDecorationType =
          CSSStyleValueFormatter.textDecorationLineToFrameNodeTextDecorationType(value)
        if (frameNodeTextDecorationType !== undefined) {
          this.updateNativeNodeStyle('textDecorationLine', frameNodeTextDecorationType)
        }
        break
      }
      case 'text-decoration-style': {
        const frameNodeTextDecorationStyle =
          CSSStyleValueFormatter.textDecorationStyleToFrameNodeTextDecorationStyle(value)
        if (frameNodeTextDecorationStyle !== undefined) {
          this.updateNativeNodeStyle('textDecorationStyle', frameNodeTextDecorationStyle)
        }
        break
      }
      case 'letter-spacing': {
        const frameNodeLetterSpacing = CSSStyleValueFormatter.lengthToFrameNodeLength(value)
        if (frameNodeLetterSpacing !== undefined) {
          this.updateNativeNodeStyle('letterSpacing', frameNodeLetterSpacing)
        }
        break
      }
      default:
        super.setStyleValue(property, value)
    }
  }

  override removeStyleValue(property: string) {
    switch (property) {
      case 'color':
        this.updateNativeNodeStyle('color', undefined)
        break
      case 'font-size':
        this.updateNativeNodeStyle('fontSize', undefined)
        break
      case 'font-weight':
        this.updateNativeNodeStyle('fontWeight', undefined)
        break
      case 'font-family':
        this.updateNativeNodeStyle('fontFamily', undefined)
        break
      case 'font-style':
        this.updateNativeNodeStyle('fontStyle', undefined)
        break
      case 'line-height':
        this.updateNativeNodeStyle('lineHeight', undefined)
        break
      case 'text-align':
        this.updateNativeNodeStyle('textAlign', undefined)
        break
      case 'lines':
        this.updateNativeNodeStyle('maxLines', undefined)
        break;
      case 'white-space':
        // TODO white-space移除时lines应继续生效
        this.updateNativeNodeStyle('maxLines', undefined)
        break
      case 'textIndent':
        this.updateNativeNodeStyle('textIndent', undefined)
        break
      case 'textOverflow':
        this.updateNativeNodeStyle('textOverflow', undefined)
        break
      case 'textDecorationColor':
        this.updateNativeNodeStyle('textDecorationColor', undefined)
        break
      case 'textDecorationLine':
        this.updateNativeNodeStyle('textDecorationLine', undefined)
        break
      case 'textDecorationStyle':
        this.updateNativeNodeStyle('textDecorationStyle', undefined)
        break
      case 'letterSpacing':
        this.updateNativeNodeStyle('letterSpacing', undefined)
        break
      default:
        super.removeStyleValue(property)
    }
  }

  override parseStyle(key: string, value: Object): boolean {
    value = this.normalizeStyleValue(key, value)
    let result = false
    switch (key) {
      case 'color':
        formatColor(value as string, (value) => {
          result = true
          this.updateNativeNodeStyle(key, value)
        })
        break
      case 'fontSize':
        formatFontSize(value as string, (value) => {
          result = true
          this.updateNativeNodeStyle(key, value)
        })
        break
      case 'fontWeight':
        formatFontWeight(value, (value) => {
          result = true
          this.updateNativeNodeStyle(key, value)
        })
        break
      case 'fontFamily':
        formatFontFamily(value, (value) => {
          result = true
          this.updateNativeNodeStyle(key, value)
        })
        break
      case 'fontStyle':
        formatFontStyle(value, (value) => {
          result = true
          this.updateNativeNodeStyle(key, value)
        })
        break
      case 'lineHeight':
        formatLineHeight(value, (value) => {
          result = true
          this.updateNativeNodeStyle(key, value)
        })
        break
      case 'textAlign':
        formatTextAlign(value, (value) => {
          result = true
          this.updateNativeNodeStyle(key, value)
        })
        break
      case 'lines':
        formatNumber(value, (value) => {
          result = true
          this.updateNativeNodeStyle('maxLines', value)
        })
        break;
      case 'whiteSpace':
        switch (value) {
          case 'nowrap':
            result = true
            this.updateNativeNodeStyle('maxLines', 1)
            break;
          case 'normal':
          default:
            result = true
            this.updateNativeNodeStyle('maxLines', -1)
            break;
        }
        break
      case 'textIndent':
        formatLength(value, (value) => {
          result = true
          this.updateNativeNodeStyle(key, value)
        })
        break
      case 'textOverflow':
        formatTextOverflow(value, (value) => {
          result = true
          this.updateNativeNodeStyle(key, value)
        })
        break
      case 'textDecorationColor':
        formatColor(value, (value) => {
          result = true
          this.updateNativeNodeStyle(key, value)
        })
        break
      case 'textDecorationLine':
        formatTextDecorationLine(value, (value) => {
          result = true
          this.updateNativeNodeStyle(key, value)
        })
        break
      case 'textDecorationStyle':
        formatTextDecorationStyle(value, (value) => {
          result = true
          this.updateNativeNodeStyle(key, value)
        })
        break
      case 'letterSpacing':
        formatLength(value, (value) => {
          result = true
          this.updateNativeNodeStyle(key, value)
        })
        break
      default:
        return super.parseStyle(key, value)
    }
    return result
  }

  private updateStyleOptions(key: StyledStringKey, value: StyledStringValue, ignoreLayout = false) {
    this.styleOptions.set(key, value)
    if (!this.isDuringBatchSetStyle) {
      this.updateText(ignoreLayout)
    }
  }

  private removeStyleOptions(key: StyledStringKey, ignoreLayout = false) {
    this.styleOptions.delete(key)
    this.updateText(ignoreLayout)
  }

  protected batchSetTextStyleKeys!: Set<StyledStringKey>

  protected applyBatchSetTextStyle() {
    this.batchSetTextStyleKeys.forEach((key: StyledStringKey) => {
      switch (key) {
        case StyledStringKey.FONT: {
          const textStyle = this.nativeTextStyleCache.textStyle
          this.updateStyleOptions(StyledStringKey.FONT, new TextStyle(textStyle))
          break
        }
        case StyledStringKey.PARAGRAPH_STYLE: {
          const paragraph = this.nativeTextStyleCache.paragraph
          this.updateStyleOptions(StyledStringKey.PARAGRAPH_STYLE, new ParagraphStyle(paragraph))
          break
        }
        case StyledStringKey.DECORATION: {
          const decoration = this.nativeTextStyleCache.decoration
          this.updateStyleOptions(StyledStringKey.DECORATION, new DecorationStyle(decoration), true)
          break
        }
        case StyledStringKey.LINE_HEIGHT: {
          const lineHeight = this.nativeTextStyleCache.lineHeight
          lineHeight && this.updateStyleOptions(StyledStringKey.LINE_HEIGHT, lineHeight)
          break
        }
        case StyledStringKey.LETTER_SPACING: {
          const letterSpacing = this.nativeTextStyleCache.letterSpacing
          letterSpacing && this.updateStyleOptions(StyledStringKey.LETTER_SPACING, letterSpacing)
          break
        }
      }
    })
    const size = this.batchSetTextStyleKeys.size
    this.batchSetTextStyleKeys.clear()
    return size
  }

  override updateNativeNodeStyle(key: string, value: Object | undefined) {
    switch (key) {
      case 'color': {
        const textStyle = this.nativeTextStyleCache.textStyle
        textStyle.fontColor = value as string
        if (!this.isDuringBatchSetStyle) {
          this.updateStyleOptions(StyledStringKey.FONT, new TextStyle(textStyle), true)
        } else {
          this.batchSetTextStyleKeys.add(StyledStringKey.FONT)
        }
        break
      }
      case 'fontSize': {
        updateFontSize(this, value as number, (value) => {
          const textStyle = this.nativeTextStyleCache.textStyle
          textStyle.fontSize = value
          if (!this.isDuringBatchSetStyle) {
            this.updateStyleOptions(StyledStringKey.FONT, new TextStyle(textStyle))
          } else {
            this.batchSetTextStyleKeys.add(StyledStringKey.FONT)
          }
        })
        break
      }
      case 'fontStyle': {
        const textStyle = this.nativeTextStyleCache.textStyle
        textStyle.fontStyle = value as FontStyle
        if (!this.isDuringBatchSetStyle) {
          this.updateStyleOptions(StyledStringKey.FONT, new TextStyle(textStyle))
        } else {
          this.batchSetTextStyleKeys.add(StyledStringKey.FONT)
        }
        break
      }
      case 'fontWeight': {
        const textStyle = this.nativeTextStyleCache.textStyle
        textStyle.fontWeight = value as FontWeight
        if (!this.isDuringBatchSetStyle) {
          this.updateStyleOptions(StyledStringKey.FONT, new TextStyle(textStyle))
        } else {
          this.batchSetTextStyleKeys.add(StyledStringKey.FONT)
        }
        break
      }
      case 'lineHeight': {
        updateLineHeight(this, value as string | number, (value) => {
          this.nativeTextStyleCache.lineHeight = new LineHeightStyle(value)
          if (!this.isDuringBatchSetStyle) {
            this.updateStyleOptions(StyledStringKey.LINE_HEIGHT, this.nativeTextStyleCache.lineHeight)
          } else {
            this.batchSetTextStyleKeys.add(StyledStringKey.LINE_HEIGHT)
          }
        })
        break
      }
      case 'fontFamily': {
        const textStyle = this.nativeTextStyleCache.textStyle
        textStyle.fontFamily = value as string
        if (!this.isDuringBatchSetStyle) {
          this.updateStyleOptions(StyledStringKey.FONT, new TextStyle(textStyle))
        } else {
          this.batchSetTextStyleKeys.add(StyledStringKey.FONT)
        }
        break
      }
      case 'textAlign': {
        const paragraph = this.nativeTextStyleCache.paragraph
        paragraph.textAlign = value as TextAlign
        if (!this.isDuringBatchSetStyle) {
          this.updateStyleOptions(StyledStringKey.PARAGRAPH_STYLE, new ParagraphStyle(paragraph))
        } else {
          this.batchSetTextStyleKeys.add(StyledStringKey.PARAGRAPH_STYLE)
        }
        break
      }
      case 'maxLines': {
        // const paragraph = this.nativeTextStyleCache.paragraph
        // paragraph.maxLines = value as number
        // if (!this.isDuringBatchSetStyle) {
        //   this.updateStyleOptions(StyledStringKey.PARAGRAPH_STYLE, new ParagraphStyle(paragraph))
        // } else {
        //   this.batchSetTextStyleKeys.add(StyledStringKey.PARAGRAPH_STYLE)
        // }
        // ParagraphStyle 包含换行时存在问题，临时改为配置文本外层 attribute，https://issuereporter.developer.huawei.com/detail/250331151329018/comment
        this.frameNode.attribute.maxLines(value as number)
        break
      }
      case 'textOverflow': {
        const paragraph = this.nativeTextStyleCache.paragraph
        paragraph.overflow = (value as TextOverflowValue).overflow
        if (!this.isDuringBatchSetStyle) {
          this.updateStyleOptions(StyledStringKey.PARAGRAPH_STYLE, new ParagraphStyle(paragraph))
        } else {
          this.batchSetTextStyleKeys.add(StyledStringKey.PARAGRAPH_STYLE)
        }
        break
      }
      case 'textDecorationColor': {
        const decoration = this.nativeTextStyleCache.decoration
        decoration.color = value as ResourceColor
        if (!this.isDuringBatchSetStyle) {
          this.updateStyleOptions(StyledStringKey.DECORATION, new DecorationStyle(decoration), true)
        } else {
          this.batchSetTextStyleKeys.add(StyledStringKey.DECORATION)
        }
        break
      }
      case 'textDecorationLine': {
        const decoration = this.nativeTextStyleCache.decoration
        decoration.type = value as TextDecorationType
        if (!this.isDuringBatchSetStyle) {
          this.updateStyleOptions(StyledStringKey.DECORATION, new DecorationStyle(decoration), true)
        } else {
          this.batchSetTextStyleKeys.add(StyledStringKey.DECORATION)
        }
        break
      }
      case 'textDecorationStyle': {
        const decoration = this.nativeTextStyleCache.decoration
        decoration.style = value as TextDecorationStyle
        if (!this.isDuringBatchSetStyle) {
          this.updateStyleOptions(StyledStringKey.DECORATION, new DecorationStyle(decoration), true)
        } else {
          this.batchSetTextStyleKeys.add(StyledStringKey.DECORATION)
        }
        break
      }
      case 'letterSpacing':
        this.nativeTextStyleCache.letterSpacing = new LetterSpacingStyle(LengthMetrics.vp(value as number))
        if (!this.isDuringBatchSetStyle) {
          this.updateStyleOptions(StyledStringKey.LETTER_SPACING, this.nativeTextStyleCache.letterSpacing)
        } else {
          this.batchSetTextStyleKeys.add(StyledStringKey.LETTER_SPACING)
        }
        break
      case 'textIndent': {
        const paragraph = this.nativeTextStyleCache.paragraph
        paragraph.textIndent = LengthMetrics.vp(value as number)
        if (!this.isDuringBatchSetStyle) {
          this.updateStyleOptions(StyledStringKey.PARAGRAPH_STYLE, new ParagraphStyle(paragraph))
        } else {
          this.batchSetTextStyleKeys.add(StyledStringKey.PARAGRAPH_STYLE)
        }
        break
      }
      case 'backgroundColor': {
        // 尝试避免在 API14 以下崩溃
        try {
          this.updateStyleOptions(StyledStringKey.BACKGROUND_COLOR,
            new BackgroundColorStyle({ color: value as string }))
        } catch (e) {
        }
        // 同时配置文本外层背景色
        super.updateNativeNodeStyle(key, value)
        break
      }
      default:
        super.updateNativeNodeStyle(key, value)
        break
    }
  }

  override checkLayout(): void {
    const layoutNode = this.layoutNode
    const hasNewLayout = layoutNode.hasNewLayout()
    if (hasNewLayout) {
      super.checkLayout()
      const padding = layoutNode.getLayoutPaddingBuffer()
      const paddingLeft = padding[3]
      const paddingRight = padding[1]
      const paddingTop = padding[0]
      const paddingBottom = padding[2]
      const cache = this.nativeTextStyleCache.padding
      if (paddingLeft !== cache.left || paddingRight !== cache.right || paddingTop !== cache.top ||
        paddingBottom !== cache.bottom) {
        cache.left = paddingLeft
        cache.right = paddingRight
        cache.top = paddingTop
        cache.bottom = paddingBottom
        this.frameNode.attribute.padding(cache)
      }
    }
  }

  protected override addFrameNode(frameNode: FrameNode): void {
    const parent = this.parentNode as UniElementImpl
    if (parent instanceof UniTextElementImpl) {
      parent.updateText()
    } else {
      this.updateText()
      super.addFrameNode(frameNode)
    }
  }

  protected override removeFrameNode(frameNode: FrameNode): void {
    const parent = this.parentNode as UniElementImpl
    if (parent instanceof UniTextElementImpl) {
      parent.updateText()
    } else {
      super.removeFrameNode(frameNode)
    }
  }

  protected override initNativeEvent(type: string): void | Object {
    if (type === 'click') {
      // 同时配置 styles 和 attribute 以考虑文本外层点击
      const onClick = (event: ClickEvent) => {
        const uniEvent = initPointerEvent(this, event)
        useNativePreventDefault(uniEvent, event)
        this.dispatchEvent(type, uniEvent)
      }
      this.updateStyleOptions(StyledStringKey.GESTURE, new GestureStyle({
        // 禁用 textSelectable 且启用 copyOption 会导致监听失效，https://issuereporter.developer.huawei.com/detail/250301163645059/comment
        onClick
      }), true)
      // 使用 attribute.onClick 替代 commonEvent.setOnClick 可以防止和 GestureStyle onClick 同时出发
      this.frameNode.attribute.onClick(onClick)
      return
    }
    return super.initNativeEvent(type)
  }

  protected override deleteNativeEvent(type: string, res: void | Object): boolean {
    if (type === 'click') {
      this.removeStyleOptions(StyledStringKey.GESTURE, true)
      this.frameNode.attribute.onClick(undefined)
      return true
    }
    return super.deleteNativeEvent(type, res)
  }

  override getHarmonyController<T extends TextController>(): T {
    return this.textController as T
  }
}
