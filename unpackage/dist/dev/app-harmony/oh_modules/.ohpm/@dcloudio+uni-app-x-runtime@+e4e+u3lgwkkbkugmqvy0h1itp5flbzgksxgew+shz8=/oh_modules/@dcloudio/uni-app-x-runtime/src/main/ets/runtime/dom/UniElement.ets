import {
  DrawableContext,
  Element as IUniElement,
  TakeSnapshotOptions,
  INodeData,
  UniEvent as IUniEvent,
  GetBoundingClientRectAsyncOptions,
  UniAnimation,
  CSSStyleDeclaration as ICSSStyleDeclaration,
  RequestFullscreenOptions,
  TakeSnapshotSuccess,
  TakeSnapshotFail
} from '@dcloudio/uni-app-x/types/native'
import { UniCallbackWrapper } from './UniCallbackWrapper'
import { CSSStyleDeclaration, StyleElement, enableAttributeStyleMap } from './CSSStyleDeclaration'
import { UniEvent, useNativePreventDefault, useNativeStopPropagation } from './UniEvent'
import { NodeData } from './NodeData'
import { NamedNodeMap } from './NamedNodeMap'
import { getUniApp, UniNativeAppImpl } from '../UniNativeApp'
import { FrameNode, matrix4, componentSnapshot, AnimatorResult, typeNode } from '@kit.ArkUI'
import { image } from '@kit.ImageKit'
import { init as initPointerEvent } from './UniPointerEvent'
import { isUniFrameNode, UniFrameNode } from '../Node'
import { init as initTouchEvent, onLongPress, offLongPress, LONGPRESS_TIMEOUT, clearLongPress } from './UniTouchEvent'
import {
  addEventListenerByProxy,
  formatBoxSizing,
  formatDirection,
  formatFlexDirection,
  formatLengthValue,
  formatLayoutLength,
  formatLayoutLengthWithCSSStyleValue,
  removeEventListenerByProxy,
  formatJustifyContent,
  formatFlexAlign,
  formatPosition,
  formatFlexWrap,
  formatOverflow,
  formatDisplay,
  formatNumber,
  formatBorderStyle,
  formatLength,
  formatTransform,
  formatColor,
  formatVisibility,
  LinearGradientValue,
  formatLinearGradient,
  formatBorderWidth,
  BORDER_WIDTH,
  formatBoxShadow,
  NotNull,
  formatAnimationOptions,
  formatTransformOrigin,
  DEFAULT_TRANSFORM_ORIGIN,
  DEFAULT_TRANSFORM,
  parseTimeToMs,
  handleNativeNodeTransitionAnimation,
  handleLayoutTransitionAnimation,
  expandTransitionAnimationProperty,
  transformPointerEvents,
  getValidNodes,
  pixelMapToImgPath,
  clearEventListenerByProxy,
  Unknown,
  isNeedForceRenderAttribute,
  camelize
} from '../helper'
import {
  UniCssBoxSizing,
  UniCssDirection,
  UniCssDisplayType,
  UniCssFlexAlign,
  UniCssFlexDirection,
  UniCssFlexEdge,
  UniCssPositionType,
  UniLayoutFlexNode,
  UniLayoutMeasureMode,
  UniLayoutSize,
  UniCssNodeLevel,
  UniCssBorderStyle,
  UniLengthUnit,
  UniCssFlexWrap,
  UniCssFlexOverflow
} from 'dcloudlayout'
import { UniCustomElement } from './CustomElement'
import { ElementOptions, DefaultStyleItem, InitialStyle } from './BuiltInElement'
import { UniNativePageImpl } from './UniNativePage'
import { NativeMap } from './NativeMap'
import { DOMRect } from './DOMRect'
import { UniCustomEvent, UniCustomEventOptions } from './UniCustomEvent'
import { BusinessError } from '@kit.BasicServicesKit'
import { hilog } from '@kit.PerformanceAnalysisKit';
import { UniPage } from "@dcloudio/uni-app-x/types/native";
import { getSnapshotId } from '../helper/snapshot'
import { ElementNotSupportFullScreenError } from '../dom/UniElementRequestFullscreen'
import { StylePropertyMap, CSSStyleValue, CSSStyleValueFormatter } from './cssom'
import { CSSStyleValue as ICSSStyleValue } from './cssom/types'

type CurrentElementArgument = [INodeData, UniNativePageImpl] | undefined
let currentElementArgument: CurrentElementArgument = undefined

export function setCurrentElementArgument(data: INodeData, page: UniNativePageImpl) {
  const origin = currentElementArgument
  currentElementArgument = [data, page]
  return () => {
    currentElementArgument = origin
  }
}

export function getCurrentElementArgument(): CurrentElementArgument {
  return currentElementArgument
}

export function isScrollElement(ele: UniElementImpl) {
  // TODO 改为instanceof UniScrollElement判断？
  return ele.tagName === 'SCROLL-VIEW' || ele.tagName === 'LIST-VIEW' || ele.tagName === 'WATERFLOW'
}

export function isRecycleElement(ele: UniElementImpl) {
  // TODO 改为instanceof判断？
  return ele.tagName === 'LIST-ITEM' || ele.tagName === 'STICKY-SECTION' || ele.tagName === 'STICKY-HEADER' ||
    ele.tagName === 'FLOW-ITEM'
}

interface NativeStyleCache {
  position: Position
  borderColor: EdgeColors
  borderWidth: EdgeWidths
  borderStyle: EdgeStyles
  borderRadius: BorderRadiuses
  visibility: Visibility
  hidden: boolean
  transform: string
  transformOrigin: string
}

interface ResetTransform {
  transform: number,
  translate: number,
  scale: number,
  rotate: number
}

interface TransitionEndEventDetail {
  propertyName: string
}

export interface SnapshotOptions {
  offsetX?: number;
  offsetY?: number;
  success: (res: string) => void;
  fail?: (err: BusinessError) => void;
}

type MeasureFunction = (width: number, widthMode: UniLayoutMeasureMode, height: number,
  heightMode: UniLayoutMeasureMode) => UniLayoutSize

interface IPosition {
  x: number,
  y: number,
}

interface ISize {
  width: number,
  height: number,
}

interface PrivateUniElementImpl {
  isFixed: boolean
  _getPosition: () => IPosition
}

interface LayoutNodeCache {
  width: number
  height: number
  x: number
  y: number
  borderLeft: number
  borderTop: number
  borderRight: number
  borderBottom: number
}

interface FullscreenLayoutCacheItem {
  key: string,
  args: Array<Object | undefined>
}

export class UniElementImpl<T extends FrameNode | null = FrameNode | null> implements IUniElement, StyleElement {
  // 记录通过 animate 方法要修改的需要同步排版的属性
  public needForceRenderAnimationKeys: string[] = []
  static skipDefaultFrameNodeStyle = false
  static skipDefaultLayoutNodeStyle = false
  private transitionDuration: number = 0
  private transitionProperty: string[] = []
  private isTransitionPropertyAll: boolean = true
  private transitionTimingFunction: string = 'linear'
  private transitionDelay: number = 0
  protected fullscreenLayoutCache: Map<string, FullscreenLayoutCacheItem> = new Map()
  // 记录现有动画实例，如果在动画期间有新的相同属性动画执行，停掉现有动画实例，并在当前基础上执行新的动画
  // TODO: 当切换很快时，依然存在问题
  protected animatorsCache: Map<string, AnimatorResult> = new Map()
  __v_skip: boolean = true
  classList: string[] = []
  protected isFullscreen = false
  private _isConnected: boolean = false

  get isConnected(): boolean {
    return this._isConnected
  }

  get firstChild(): IUniElement | null {
    const array = this.childNodes
    return array.length > 0 ? array[0] : null
  }

  get lastChild(): IUniElement | null {
    const array = this.childNodes
    return array.length > 0
      ? array[array.length - 1]
      : null
  }

  private _parent: IUniElement | null = null

  get parentNode(): IUniElement | null {
    return this._parent
  }

  get parentElement(): IUniElement | null {
    return this._parent
  }

  get previousSibling(): IUniElement | null {
    const array = this.parentNode?.childNodes
    const index = array?.indexOf(this)
    if (index) {
      return array![index - 1]
    }
    return null
  }

  get previousElementSibling(): IUniElement | null {
    const array = this.parentNode?.children
    const index = array?.indexOf(this)
    if (index) {
      return array![index - 1]
    }
    return null
  }

  get nextSibling(): IUniElement | null {
    const array = this.parentNode?.childNodes
    const index = array?.indexOf(this)
    if (
      index !== undefined &&
        index > -1 &&
        index < array!.length - 1
    ) {
      return array![index + 1]
    }
    return null
  }

  get nextElementSibling(): IUniElement | null {
    const array = this.parentNode?.children
    const index = array?.indexOf(this)
    if (
      index !== undefined &&
        index > -1 &&
        index < array!.length - 1
    ) {
      return array![index + 1]
    }
    return null
  }

  children: IUniElement[] = []
  childNodes: IUniElement[] = []
  /**
   * 是否为纯节点，纯节点不会被添加到 children 中
   */
  protected isPureNode: boolean = false
  tagName: string
  nodeName: string
  dataset: NativeMap<string, Object> = new NativeMap()
  attributes: NamedNodeMap = new NamedNodeMap(this)
  private _style: CSSStyleDeclaration
  private _attributeStyleMap: StylePropertyMap

  get style(): CSSStyleDeclaration {
    return this._style
  }

  get attributeStyleMap(): StylePropertyMap {
    return this._attributeStyleMap
  }

  // TODO 暂时不支持解析样式字符串
  // set style(value: string) {
  //   throw new Error('Method not implemented.')
  // }

  get scrollWidth(): number {
    throw new Error('Method not implemented.')
  }

  get scrollHeight(): number {
    throw new Error('Method not implemented.')
  }

  get scrollLeft(): number {
    throw new Error('Method not implemented.')
  }

  get scrollTop(): number {
    throw new Error('Method not implemented.')
  }

  get offsetLeft(): number {
    if (!this.frameNode) {
      return 0
    }
    // TODO 强制排版
    return Math.round(this.layoutNode.getLayoutLeft())
  }

  get offsetTop(): number {
    if (!this.frameNode) {
      return 0
    }
    // TODO 强制排版
    return Math.round(this.layoutNode.getLayoutTop())
  }

  get offsetWidth(): number {
    if (!this.frameNode) {
      return 0
    }
    // TODO 强制排版
    return Math.round(this.layoutNode.getLayoutWidth())
  }

  get offsetHeight(): number {
    if (!this.frameNode) {
      return 0
    }
    // TODO 强制排版
    return Math.round(this.layoutNode.getLayoutHeight())
  }

  ext: NativeMap<string, Object> = new NativeMap()
  /**
   * @internal
   */
  private __id: string
  /**
   * 关联的 UniApp 实例
   * @internal
   */
  app: UniNativeAppImpl
  /**
   * @internal
   */
  page: UniNativePageImpl

  get uniPage(): UniPage {
    // uniPage 实例不许为空
    return this.page.__uniPage!
  }

  /**
   * 等待子类初始化
   * @internal
   */
  frameNode: T

  /**
   * 插槽节点，默认与 frameNode 相同
   */
  get slotFrameNode(): FrameNode | null {
    return this.frameNode
  }

  /**
   * @internal
   */
  layoutNode: UniLayoutFlexNode
  private eventListeners: Map<string, [Array<UniCallbackWrapper>, Object | void]> = new Map()
  /**
   * @internal
   */
  _options?: ElementOptions

  /**
   * 返回默认样式字典，用于初始化默认样式，Web CSS 样式，不支持组合样式(简写)
   */
  static get defaultStyle() {
    return new Map<string, DefaultStyleItem>([
      ['overflow', ['hidden', true, el => {
        (el as UniElementImpl).updateNativeNodeStyle('clip', true)
      }]],
      ['height', ['auto']],
      ['width', ['auto']],
      ['left', ['auto']],
      ['top', ['auto']],
      ['right', ['auto']],
      ['bottom', ['auto']],

      ['paddingTop', ['0',]],
      ['paddingBottom', ['0']],
      ['paddingLeft', ['0']],
      ['paddingRight', ['0']],

      ['marginTop', ['0']],
      ['marginBottom', ['0']],
      ['marginLeft', ['0']],
      ['marginRight', ['0']],
      ['position', ['relative']],
      ['display', ['flex']],
      ['minWidth', ['auto']],
      ['minHeight', ['auto']],
      ['maxWidth', ['auto']],
      ['maxHeight', ['auto']],
      ['direction', ['ltr']],
      ['flexBasis', ['auto']],
      ['flexDirection', ['column']],
      ['flexWrap', ['nowrap']],
      ['justifyContent', ['start']],
      ['alignItems', ['stretch']],
      ['alignContent', ['stretch']],
      ['alignSelf', ['auto']],
      ['boxSizing', ['border-box']],

      ['borderTopStyle', ['none']],
      ['borderBottomStyle', ['none']],
      ['borderLeftStyle', ['none']],
      ['borderRightStyle', ['none']],

      ['borderTopColor', ['#000000']],
      ['borderBottomColor', ['#000000']],
      ['borderLeftColor', ['#000000']],
      ['borderRightColor', ['#000000']],

      ['borderTopWidth', [BORDER_WIDTH.Medium]],
      ['borderBottomWidth', [BORDER_WIDTH.Medium]],
      ['borderLeftWidth', [BORDER_WIDTH.Medium]],
      ['borderRightWidth', [BORDER_WIDTH.Medium]],

      ['borderTopLeftRadius', ['0']],
      ['borderTopRightRadius', ['0']],
      ['borderBottomLeftRadius', ['0']],
      ['borderBottomRightRadius', ['0']],

      ['flexGrow', ['0']],
      // 与浏览器不一致
      ['flexShrink', ['0']],
      ['backgroundColor', ['#00000000']],
      ['transform', [DEFAULT_TRANSFORM]],
      ['transformOrigin', [`${DEFAULT_TRANSFORM_ORIGIN.centerX} ${DEFAULT_TRANSFORM_ORIGIN.centerY}`]],
      ['opacity', ['1']],
      ['visibility', ['visible']],
      ['zIndex', ['0']],
      ['pointerEvents', ['auto']]
    ])
  }

  static get defaultFrameNodeStyleKeys(): string[] {
    return ['overflow', 'transform', 'opacity']
  }

  static get initialDefaultStyle(): Map<string, DefaultStyleItem> {
    const frameNodeStyleKeys = this.defaultFrameNodeStyleKeys
    const initialDefaultStyle = new Map<string, DefaultStyleItem>()
    this.defaultStyle.forEach((value, key) => {
      const diff = value[1]
      if (diff) {
        if (this.skipDefaultFrameNodeStyle && frameNodeStyleKeys.includes(key)) {
          return
        }
        initialDefaultStyle.set(key, value)
      }
    })
    return initialDefaultStyle
  }

  constructor(data?: INodeData, page?: UniNativePageImpl) {
    if (!data || !page) {
      const args = getCurrentElementArgument()
      if (args) {
        data = args[0]
        page = args[1]
      }
    }
    if (!(data instanceof NodeData) || !page) {
      throw new Error('Illegal constructor')
    }
    const options = this._options = data.options
    this.__id = data.id
    this.page = page
    this.tagName = this.nodeName = data.name.toUpperCase()
    this.app = getUniApp()!
    this.initClass()
    this.layoutNode = this.createLayoutNode()
    this.frameNode = this.createFrameNode()
    if (data.attrs.size) {
      data.attrs.forEach((value, key) => {
        this.attributes.set(key, value)
      })
    }
    // TODO，后续调整像素取整逻辑
    // this.updateNativeNodeStyle('pixelRound', {
    //   start: PixelRoundCalcPolicy.NO_FORCE_ROUND,
    //   end: PixelRoundCalcPolicy.NO_FORCE_ROUND,
    //   top: PixelRoundCalcPolicy.NO_FORCE_ROUND,
    //   bottom: PixelRoundCalcPolicy.NO_FORCE_ROUND,
    // } as PixelRoundPolicy)
    const style = this._style = new CSSStyleDeclaration(this)
    this._attributeStyleMap = new StylePropertyMap(this)
    this.preferBatchSetStyle && this.batchSetStyleStart()

    const defaultStyle = options?.initialDefaultStyle || options?.defaultStyle
    defaultStyle?.forEach((value, key) => {
      const val = value[0]
      const diff = value[1]
      if (diff) {
        const init = value[2]
        if (init) {
          init(this)
        } else {
          this.parseStyle(key, val)
        }
      }
    })
    data.style.forEach((value, key) => {
      style.setProperty(key, value)
    })
    this.preferBatchSetStyle && this.batchSetStyleEnd()
  }

  setStyleValue(key: string, value: ICSSStyleValue) {
    switch (key) {
      // layout node box-model
      case 'box-sizing': {
        const layoutNodeBoxSizing = CSSStyleValueFormatter.toLayoutNodeBoxSizing(value)
        if (layoutNodeBoxSizing != null) {
          this.updateLayoutNodeStyle(key, 'setStyleBoxSizing', layoutNodeBoxSizing)
        }
      }
      case 'width': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleWidth', layoutNodeLength.value, layoutNodeLength.unit)
        }
        break;
      }
      case 'height': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleHeight', layoutNodeLength.value, layoutNodeLength.unit)
        }
        break;
      }
      case 'min-width': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleMinWidth', layoutNodeLength.value,
            layoutNodeLength.unit)
        }
        break;
      }
      case 'min-height': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleMinHeight', layoutNodeLength.value,
            layoutNodeLength.unit)
        }
        break;
      }
      case 'max-width': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleMaxWidth', layoutNodeLength.value,
            layoutNodeLength.unit)
        }
        break;
      }
      case 'max-height': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleMaxHeight', layoutNodeLength.value,
            layoutNodeLength.unit)
        }
        break;
      }
      case 'padding-top': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStylePadding', UniCssFlexEdge.Top, layoutNodeLength.value,
            layoutNodeLength.unit)
        }
        break;
      }
      case 'padding-bottom': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStylePadding', UniCssFlexEdge.Bottom,
            layoutNodeLength.value, layoutNodeLength.unit)
        }
        break;
      }
      case 'padding-left': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStylePadding', UniCssFlexEdge.Left, layoutNodeLength.value,
            layoutNodeLength.unit)
        }
        break;
      }
      case 'padding-right': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStylePadding', UniCssFlexEdge.Right, layoutNodeLength.value,
            layoutNodeLength.unit)
        }
        break;
      }
      case 'margin-top': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleMargin', UniCssFlexEdge.Top, layoutNodeLength.value,
            layoutNodeLength.unit)
        }
        break;
      }
      case 'margin-bottom': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleMargin', UniCssFlexEdge.Bottom, layoutNodeLength.value,
            layoutNodeLength.unit)
        }
        break;
      }
      case 'margin-left': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleMargin', UniCssFlexEdge.Left, layoutNodeLength.value,
            layoutNodeLength.unit)
        }
        break;
      }
      case 'margin-right': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleMargin', UniCssFlexEdge.Right, layoutNodeLength.value,
            layoutNodeLength.unit)
        }
        break;
      }
      case 'border-top-width': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeBorderWidth(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleBorder', UniCssFlexEdge.Top, layoutNodeLength.value,
            layoutNodeLength.unit)
        }
        const frameNodeLength = CSSStyleValueFormatter.lengthToFrameNodeLength(value)
        if (frameNodeLength != null) {
          this.updateNativeNodeStyle('borderTopWidth', frameNodeLength)
        }
        break;
      }
      case 'border-bottom-width': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleBorder', UniCssFlexEdge.Bottom, layoutNodeLength.value,
            layoutNodeLength.unit)
        }
        const frameNodeLength = CSSStyleValueFormatter.lengthToFrameNodeLength(value)
        if (frameNodeLength != null) {
          this.updateNativeNodeStyle('borderBottomWidth', frameNodeLength)
        }
        break;
      }
      case 'border-left-width': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleBorder', UniCssFlexEdge.Left, layoutNodeLength.value,
            layoutNodeLength.unit)
        }
        const frameNodeLength = CSSStyleValueFormatter.lengthToFrameNodeLength(value)
        if (frameNodeLength != null) {
          this.updateNativeNodeStyle('borderLeftWidth', frameNodeLength)
        }
        break;
      }
      case 'border-right-width': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleBorder', UniCssFlexEdge.Right, layoutNodeLength.value,
            layoutNodeLength.unit)
        }
        const frameNodeLength = CSSStyleValueFormatter.lengthToFrameNodeLength(value)
        if (frameNodeLength != null) {
          this.updateNativeNodeStyle('borderRightWidth', frameNodeLength)
        }
        break;
      }
      case 'border-top-style': {
        const layoutNodeBorderStyle = CSSStyleValueFormatter.toLayoutNodeBorderStyle(value)
        if (layoutNodeBorderStyle != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleBorderStyle', UniCssFlexEdge.Top,
            layoutNodeBorderStyle)
        }
        if (layoutNodeBorderStyle === UniCssBorderStyle.None) {
          this.updateNativeNodeStyle('borderTopStyle', undefined)
        } else {
          const frameNodeBorderStyle = CSSStyleValueFormatter.borderStyleToFrameNodeBorderStyle(value)
          if (frameNodeBorderStyle != null) {
            this.updateNativeNodeStyle('borderTopStyle', frameNodeBorderStyle)
          }
        }
        break;
      }
      case 'border-bottom-style': {
        const layoutNodeBorderStyle = CSSStyleValueFormatter.toLayoutNodeBorderStyle(value)
        if (layoutNodeBorderStyle != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleBorderStyle', UniCssFlexEdge.Bottom,
            layoutNodeBorderStyle)
        }
        if (layoutNodeBorderStyle === UniCssBorderStyle.None) {
          this.updateNativeNodeStyle('borderBottomStyle', undefined)
        } else {
          const frameNodeBorderStyle = CSSStyleValueFormatter.borderStyleToFrameNodeBorderStyle(value)
          if (frameNodeBorderStyle != null) {
            this.updateNativeNodeStyle('borderBottomStyle', frameNodeBorderStyle)
          }
        }
      }
      case 'border-left-style': {
        const layoutNodeBorderStyle = CSSStyleValueFormatter.toLayoutNodeBorderStyle(value)
        if (layoutNodeBorderStyle != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleBorderStyle', UniCssFlexEdge.Left,
            layoutNodeBorderStyle)
        }
        if (layoutNodeBorderStyle === UniCssBorderStyle.None) {
          this.updateNativeNodeStyle('borderLeftStyle', undefined)
        } else {
          const frameNodeBorderStyle = CSSStyleValueFormatter.borderStyleToFrameNodeBorderStyle(value)
          if (frameNodeBorderStyle != null) {
            this.updateNativeNodeStyle('borderLeftStyle', frameNodeBorderStyle)
          }
        }
      }
      case 'border-right-style': {
        const layoutNodeBorderStyle = CSSStyleValueFormatter.toLayoutNodeBorderStyle(value)
        if (layoutNodeBorderStyle != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleBorderStyle', UniCssFlexEdge.Right,
            layoutNodeBorderStyle)
        }
        if (layoutNodeBorderStyle === UniCssBorderStyle.None) {
          this.updateNativeNodeStyle('borderRightStyle', undefined)
        } else {
          const frameNodeBorderStyle = CSSStyleValueFormatter.borderStyleToFrameNodeBorderStyle(value)
          if (frameNodeBorderStyle != null) {
            this.updateNativeNodeStyle('borderRightStyle', frameNodeBorderStyle)
          }
        }
        break;
      }
      // layout node flex
      case 'flex-grow': {
        const layoutNodeNumber = CSSStyleValueFormatter.toLayoutNodeNumber(value)
        if (layoutNodeNumber != null) {
          this.updateLayoutNodeStyle(key, 'setStyleFlexGrow', layoutNodeNumber)
        }
        break;
      }
      case 'flex-shrink': {
        const layoutNodeNumber = CSSStyleValueFormatter.toLayoutNodeNumber(value)
        if (layoutNodeNumber != null) {
          this.updateLayoutNodeStyle(key, 'setStyleFlexShrink', layoutNodeNumber)
        }
        break;
      }
      case 'flex-basis': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyle(key, 'setStyleFlexBasis', layoutNodeLength.value,
            layoutNodeLength.unit)
        }
        break;
      }
      case 'flex-direction': {
        const layoutNodeFlexDirection = CSSStyleValueFormatter.toLayoutNodeFlexDirection(value)
        if (layoutNodeFlexDirection != null) {
          this.updateLayoutNodeStyle(key, 'setStyleFlexDirection', layoutNodeFlexDirection)
        }
        break;
      }
      case 'flex-wrap': {
        const layoutNodeFlexWrap = CSSStyleValueFormatter.toLayoutNodeFlexWrap(value)
        if (layoutNodeFlexWrap != null) {
          this.updateLayoutNodeStyle(key, 'setStyleFlexWrap', layoutNodeFlexWrap)
        }
        break;
      }
      case 'justify-content': {
        const layoutNodeFlexAlign = CSSStyleValueFormatter.toLayoutNodeFlexAlign(value)
        if (layoutNodeFlexAlign != null) {
          this.updateLayoutNodeStyle(key, 'setStyleJustifyContent', layoutNodeFlexAlign)
        }
        break;
      }
      case 'align-items': {
        const layoutNodeFlexAlign = CSSStyleValueFormatter.toLayoutNodeFlexAlign(value)
        if (layoutNodeFlexAlign != null) {
          this.updateLayoutNodeStyle(key, 'setStyleAlignItems', layoutNodeFlexAlign)
        }
        break;
      }
      case 'align-content': {
        const layoutNodeFlexAlign = CSSStyleValueFormatter.toLayoutNodeFlexAlign(value)
        if (layoutNodeFlexAlign != null) {
          this.updateLayoutNodeStyle(key, 'setStyleAlignContent', layoutNodeFlexAlign)
        }
        break;
      }
      case 'align-self': {
        const layoutNodeFlexAlign = CSSStyleValueFormatter.toLayoutNodeFlexAlign(value)
        if (layoutNodeFlexAlign != null) {
          this.updateLayoutNodeStyle(key, 'setStyleAlignSelf', layoutNodeFlexAlign)
        }
        break;
      }
      // layout node other property
      case 'display': {
        const layoutNodeDisplay = CSSStyleValueFormatter.toLayoutNodeDisplay(value)
        if (layoutNodeDisplay != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleDisplay', layoutNodeDisplay)
          this.updateNativeNodeStyle('hidden', layoutNodeDisplay === UniCssDisplayType.None)
        }
        break;
      }
      case 'position': {
        const layoutNodePosition = CSSStyleValueFormatter.toLayoutNodePosition(value)
        if (layoutNodePosition != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStylePositionType', layoutNodePosition)
        }
        break;
      }
      case 'left': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStylePosition', UniCssFlexEdge.Left, layoutNodeLength.value,
            layoutNodeLength.unit)
        }
        break;
      }
      case 'top': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStylePosition', UniCssFlexEdge.Top, layoutNodeLength.value,
            layoutNodeLength.unit)
        }
        break;
      }
      case 'right': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStylePosition', UniCssFlexEdge.Right,
            layoutNodeLength.value,
            layoutNodeLength.unit)
        }
        break;
      }
      case 'bottom': {
        const layoutNodeLength = CSSStyleValueFormatter.toLayoutNodeLength(value)
        if (layoutNodeLength != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStylePosition', UniCssFlexEdge.Bottom,
            layoutNodeLength.value,
            layoutNodeLength.unit)
        }
        break;
      }
      case 'overflow': {
        const layoutNodeOverflow = CSSStyleValueFormatter.toLayoutNodeOverflow(value)
        if (layoutNodeOverflow != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleOverflow', layoutNodeOverflow)
        }
        const frameNodeClip = CSSStyleValueFormatter.overflowToFrameNodeClip(value)
        if (frameNodeClip != null) {
          this.updateNativeNodeStyle('clip', frameNodeClip)
        }
        break;
      }
      case 'direction': {
        const layoutNodeDirection = CSSStyleValueFormatter.toLayoutNodeDirection(value)
        if (layoutNodeDirection != null) {
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleDirection', layoutNodeDirection)
        }
        break;
      }
      // frame node style
      case 'visibility': {
        const frameNodeVisibility = CSSStyleValueFormatter.visibilityToFrameNodeVisibility(value)
        if (frameNodeVisibility != null) {
          this.updateNativeNodeStyle('visibility', frameNodeVisibility)
        }
        break;
      }
      case 'background-color': {
        const frameNodeBackgroudColor = CSSStyleValueFormatter.colorToFrameNodeColor(value)
        if (frameNodeBackgroudColor != null) {
          this.updateNativeNodeStyle('backgroundColor', frameNodeBackgroudColor)
        }
        break;
      }
      case 'border-top-color': {
        const frameNodeColor = CSSStyleValueFormatter.colorToFrameNodeColor(value)
        if (frameNodeColor != null) {
          this.updateNativeNodeStyle('borderTopColor', frameNodeColor)
        }
        break;
      }
      case 'border-bottom-color': {
        const frameNodeColor = CSSStyleValueFormatter.colorToFrameNodeColor(value)
        if (frameNodeColor != null) {
          this.updateNativeNodeStyle('borderBottomColor', frameNodeColor)
        }
        break;
      }
      case 'border-left-color': {
        const frameNodeColor = CSSStyleValueFormatter.colorToFrameNodeColor(value)
        if (frameNodeColor != null) {
          this.updateNativeNodeStyle('borderLeftColor', frameNodeColor)
        }
        break;
      }
      case 'border-right-color': {
        const frameNodeColor = CSSStyleValueFormatter.colorToFrameNodeColor(value)
        if (frameNodeColor != null) {
          this.updateNativeNodeStyle('borderRightColor', frameNodeColor)
        }
        break;
      }
      case 'border-top-left-radius': {
        const frameNodeLength = CSSStyleValueFormatter.lengthToFrameNodeLength(value)
        if (frameNodeLength != null) {
          this.updateNativeNodeStyle('borderTopLeftRadius', frameNodeLength)
        }
        break;
      }
      case 'border-top-right-radius': {
        const frameNodeLength = CSSStyleValueFormatter.lengthToFrameNodeLength(value)
        if (frameNodeLength != null) {
          this.updateNativeNodeStyle('borderTopRightRadius', frameNodeLength)
        }
        break;
      }
      case 'border-bottom-left-radius': {
        const frameNodeLength = CSSStyleValueFormatter.lengthToFrameNodeLength(value)
        if (frameNodeLength != null) {
          this.updateNativeNodeStyle('borderBottomLeftRadius', frameNodeLength)
        }
        break;
      }
      case 'border-bottom-right-radius': {
        const frameNodeLength = CSSStyleValueFormatter.lengthToFrameNodeLength(value)
        if (frameNodeLength != null) {
          this.updateNativeNodeStyle('borderBottomRightRadius', frameNodeLength)
        }
        break;
      }
      case 'opacity': {
        const frameNodeOpacity = CSSStyleValueFormatter.numberToFrameNodeNumber(value)
        if (frameNodeOpacity != null) {
          this.updateNativeNodeStyle('opacity', frameNodeOpacity)
        }
        break;
      }
      case 'pointer-events': {
        const frameNodeHitTestMode = CSSStyleValueFormatter.pointerEventsToFrameNodeHitTestMode(value)
        if (frameNodeHitTestMode != null) {
          this.updateNativeNodeStyle('hitTestMode', frameNodeHitTestMode)
        }
        break;
      }
      case 'transition-duration': {
        const frameNodeTransitionDuration = value.toString()
        if (frameNodeTransitionDuration != null) {
          this.updateTransitionDuration(frameNodeTransitionDuration)
        }
        break;
      }
      case 'z-index': {
        const frameNodeZIndex = CSSStyleValueFormatter.numberToFrameNodeNumber(value)
        if (frameNodeZIndex != null) {
          this.updateNativeNodeStyle('zIndex', frameNodeZIndex)
        }
        break;
      }
      default:
        break;
    }
  }

  removeStyleValue(property: string) {
    switch (property) {
      case 'box-sizing': {
        this.updateLayoutNodeStyle(property, 'setStyleBoxSizing', UniCssBoxSizing.BorderBox)
        break;
      }
      case 'width': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStyleWidth', NaN, UniLengthUnit.Auto)
        break;
      }
      case 'height': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStyleHeight', NaN, UniLengthUnit.Auto)
        break;
      }
      case 'min-width': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStyleMinWidth', NaN, UniLengthUnit.Auto)
        break;
      }
      case 'min-height': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStyleMinHeight', NaN, UniLengthUnit.Auto)
        break;
      }
      case 'max-width': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStyleMaxWidth', NaN, UniLengthUnit.Auto)
        break;
      }
      case 'max-height': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStyleMaxHeight', NaN, UniLengthUnit.Auto)
        break;
      }
      case 'padding-top': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStylePadding', UniCssFlexEdge.Top, 0,
          UniLengthUnit.PXPoint)
        break;
      }
      case 'padding-bottom': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStylePadding', UniCssFlexEdge.Bottom, 0,
          UniLengthUnit.PXPoint)
        break;
      }
      case 'padding-left': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStylePadding', UniCssFlexEdge.Left, 0,
          UniLengthUnit.PXPoint)
        break;
      }
      case 'padding-right': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStylePadding', UniCssFlexEdge.Right, 0,
          UniLengthUnit.PXPoint)
        break;
      }
      case 'border-top-width': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStyleBorder', UniCssFlexEdge.Top, 0,
          UniLengthUnit.PXPoint)
        break;
      }
      case 'border-bottom-width': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStyleBorder', UniCssFlexEdge.Bottom, 0,
          UniLengthUnit.PXPoint)
        break;
      }
      case 'border-left-width': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStyleBorder', UniCssFlexEdge.Left, 0,
          UniLengthUnit.PXPoint)
        break;
      }
      case 'border-right-width': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStyleBorder', UniCssFlexEdge.Right, 0,
          UniLengthUnit.PXPoint)
        break;
      }
      case 'border-top-style': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStyleBorderStyle', UniCssFlexEdge.Top,
          UniCssBorderStyle.None)
        this.updateNativeNodeStyle('borderTopStyle', undefined)
        break;
      }
      case 'border-bottom-style': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStyleBorderStyle', UniCssFlexEdge.Bottom,
          UniCssBorderStyle.None)
        this.updateNativeNodeStyle('borderBottomStyle', undefined)
        break;
      }
      case 'border-left-style': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStyleBorder', UniCssFlexEdge.Left, 0,
          UniLengthUnit.PXPoint)
        this.updateNativeNodeStyle('borderLeftStyle', undefined)
        break;
      }
      case 'border-right-style': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStyleBorder', UniCssFlexEdge.Right, 0,
          UniLengthUnit.PXPoint)
        this.updateNativeNodeStyle('borderRightStyle', undefined)
        break;
      }
      case 'margin-top': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStyleMargin', UniCssFlexEdge.Top, 0,
          UniLengthUnit.PXPoint)
        break;
      }
      case 'margin-bottom': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStyleMargin', UniCssFlexEdge.Bottom, 0,
          UniLengthUnit.PXPoint)
        break;
      }
      case 'margin-left': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStyleMargin', UniCssFlexEdge.Left, 0,
          UniLengthUnit.PXPoint)
        break;
      }
      case 'margin-right': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStyleMargin', UniCssFlexEdge.Right, 0,
          UniLengthUnit.PXPoint)
        break;
      }
      case 'flex-grow': {
        this.updateLayoutNodeStyle(property, 'setStyleFlexGrow', 0)
        break;
      }
      case 'flex-shrink': {
        this.updateLayoutNodeStyle(property, 'setStyleFlexShrink', 0)
        break;
      }
      case 'flex-basis': {
        this.updateLayoutNodeStyle(property, 'setStyleFlexBasis', 0, UniLengthUnit.PXPoint)
        break;
      }
      case 'flex-direction': {
        this.updateLayoutNodeStyle(property, 'setStyleFlexDirection', UniCssFlexDirection.Row)
        break;
      }
      case 'flex-wrap': {
        this.updateLayoutNodeStyle(property, 'setStyleFlexWrap', UniCssFlexWrap.NoWrap)
        break;
      }
      case 'justify-content': {
        this.updateLayoutNodeStyle(property, 'setStyleJustifyContent', UniCssFlexAlign.FlexStart)
        break;
      }
      case 'align-items': {
        this.updateLayoutNodeStyle(property, 'setStyleAlignItems', UniCssFlexAlign.Stretch)
        break;
      }
      case 'align-content': {
        this.updateLayoutNodeStyle(property, 'setStyleAlignContent', UniCssFlexAlign.Stretch)
        break;
      }
      case 'align-self': {
        this.updateLayoutNodeStyle(property, 'setStyleAlignSelf', UniCssFlexAlign.Auto)
        break;
      }
      case 'display': {
        this.updateLayoutNodeStyle(property, 'setStyleDisplay', UniCssDisplayType.Flex)
        this.updateNativeNodeStyle('hidden', undefined)
        break;
      }
      case 'position': {
        this.updateLayoutNodeStyle(property, 'setStylePositionType', UniCssPositionType.Relative)
        break;
      }
      case 'left': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStylePosition', UniCssFlexEdge.Left, NaN,
          UniLengthUnit.Auto)
        break;
      }
      case 'top': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStylePosition', UniCssFlexEdge.Top, NaN,
          UniLengthUnit.Auto)
        break;
      }
      case 'right': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStylePosition', UniCssFlexEdge.Right, NaN,
          UniLengthUnit.Auto)
        break;
      }
      case 'bottom': {
        this.updateLayoutNodeStyleWithTransition(property, 'setStylePosition', UniCssFlexEdge.Bottom, NaN,
          UniLengthUnit.Auto)
        break;
      }
      case 'overflow': {
        this.updateLayoutNodeStyle(property, 'setStyleOverflow', UniCssFlexOverflow.Visible)
        this.updateNativeNodeStyle('clip', undefined)
        break;
      }
      case 'direction': {
        this.updateLayoutNodeStyle(property, 'setStyleDirection', UniCssDirection.LTR)
        break;
      }
      case 'visibility': {
        this.updateNativeNodeStyle('visibility', undefined)
        break;
      }
      case 'background-color': {
        this.updateNativeNodeStyle('backgroundColor', undefined)
        break;
      }
      case 'border-top-color': {
        this.updateNativeNodeStyle('borderTopColor', undefined)
        break;
      }
      case 'border-bottom-color': {
        this.updateNativeNodeStyle('borderBottomColor', undefined)
        break;
      }
      case 'border-left-color': {
        this.updateNativeNodeStyle('borderLeftColor', undefined)
        break;
      }
      case 'border-right-color': {
        this.updateNativeNodeStyle('borderRightColor', undefined)
        break;
      }
      case 'border-top-left-radius': {
        this.updateNativeNodeStyle('borderTopLeftRadius', undefined)
        break;
      }
      case 'border-top-right-radius': {
        this.updateNativeNodeStyle('borderTopRightRadius', undefined)
        break;
      }
      case 'border-bottom-left-radius': {
        this.updateNativeNodeStyle('borderBottomLeftRadius', undefined)
        break;
      }
      case 'border-bottom-right-radius': {
        this.updateNativeNodeStyle('borderBottomRightRadius', undefined)
        break;
      }
      case 'opacity': {
        this.updateNativeNodeStyle('opacity', undefined)
        break;
      }
      case 'pointer-events': {
        this.updateNativeNodeStyle('hitTestMode', undefined)
        break;
      }
      case 'z-index': {
        this.updateNativeNodeStyle('zIndex', undefined)
        break;
      }
    }
  }

  protected initClass() {
    // 用于子类初始化
  }

  protected createLayoutNode() {
    return new UniLayoutFlexNode(UniCssNodeLevel.Default, this.page.document.layoutNode)
  }

  protected createFrameNode(): T {
    return null as T
  }

  getNodeId(): string {
    return this.__id
  }

  takeSnapshot(options: TakeSnapshotOptions): void {
    const format = options.format || 'png'
    this.getSnapshotPixelMap()
      .then((pixMap) => pixelMapToImgPath(getContext(this), format, pixMap, null))
      .then((tempFilePath) => {
        const res: TakeSnapshotSuccess = { tempFilePath }
        options.success?.(res)
        options.complete?.(res)
      })
      .catch((error: Error) => {
        const err: TakeSnapshotFail = { errMsg: `UniElement takeSnapshot fail: ${error.message}` }
        options.fail?.(err)
        options.complete?.(err)
      })
  }

  /**
   * 此处不实现完整的webcomponent slot。
   *
   * 底层能力不足以实现完整的slot功能。以scroll-view的自定义下拉刷新为例。排版器只能把自定义下拉刷新作为scrol-view的直接子元素来排版。
   * 例如给自定义下拉刷新元素设置height: 100%;则其高度会直接等于scroll-view的高度。
   *
   * slot功能调研记录
   * .children属性返回的element顺序只和appendChild顺序有关，和实际树形结构里面的顺序无关
   * 多次append同一个名称的slot内容，会都push到children内，并且都在对应的slot位置显示
   * slot名称未匹配到时也会push到children内，但是不在界面显示
   *
   * TODO 动态更新slot属性名。两种方式 header.slot = 'footer'; header.setAttribute('slot', 'footer');
   */
  protected slotMap = new Map<string, UniElementImpl[]>()

  protected appendSlotContent(slotName: string, aChild: UniElementImpl) {
    if (!this.slotMap.has(slotName)) {
      this.slotMap.set(slotName, [])
    }
    const slotContent = this.slotMap.get(slotName)!
    slotContent.push(aChild)
  }

  protected removeSlotContent(slotName: string, aChild: UniElementImpl) {
    const childIndex = this.children.indexOf(aChild)
    if (childIndex === -1) {
      return
    }
    this.children.splice(childIndex, 1)
    const childNodeIndex = this.childNodes.indexOf(aChild)
    if (childNodeIndex > -1) {
      this.childNodes.splice(childNodeIndex, 1)
    }
    this.layoutNode.removeChildNode(aChild.layoutNode)
    aChild._parent = null
    aChild.setConnected(false)
    if (this._isConnected) {
      this.page.document.requestRenderQueue()
    }
    if (!this.slotMap.has(slotName)) {
      return
    }
    const slotContent = this.slotMap.get(slotName)!
    const slotContentIndex = slotContent.indexOf(aChild)
    if (slotContentIndex > -1) {
      slotContent.splice(slotContentIndex, 1)
    }
    if (slotContent.length === 0) {
      this.slotMap.delete(slotName)
    }
  }

  appendChild(aChild: IUniElement): void {
    this.insertBefore(aChild)
  }

  insertBefore(newChild: IUniElement, refChild?: IUniElement | null | undefined): IUniElement | null

  insertBefore(newChild: IUniElement): IUniElement | null

  insertBefore(child: IUniElement,
    anchor?: IUniElement | null | undefined): IUniElement | null {
    let index = -1
    const childNodes = this.childNodes
    const children = this.children
    if (anchor) {
      index = childNodes.indexOf(anchor)
      if (index > -1) {
        if (child.parentNode) {
          child.remove()
        }
        childNodes.splice(index, 0, child)
        while (anchor && (anchor as UniElementImpl).isPureNode) {
          index++
          anchor = this.childNodes[index]
        }
        index = children.indexOf(anchor)
        if (!(child as UniElementImpl).isPureNode) {
          if (index > -1) {
            children.splice(index, 0, child)
          } else {
            children.push(child)
          }
        }
      } else {
        throw new Error('referenceNode is not in DOM')
      }
    } else {
      if (child.parentNode) {
        child.remove()
      }
      childNodes.push(child)
      if (!(child as UniElementImpl).isPureNode) {
        children.push(child)
      }
    }

    const childImpl = child as UniElementImpl
    childImpl._parent = this
    const isConnected = this._isConnected
    // if (!childImpl.isPureNode) ，考虑效率，基类不作判断，由 PureNode 子类重写 addNativeNode 跳过
    childImpl.addNativeNode(index, isConnected)
    childImpl.setConnected(isConnected)
    return child
  }

  /**
   * @internal
   */
  protected setConnected(connected: boolean) {
    this.style.updateAllVars()
    if (this._isConnected === connected) {
      return
    }
    this._isConnected = connected
    const customElement = this as UniCustomElement
    try {
      if (connected) {
        customElement.connectedCallback?.()
      } else {
        customElement.disconnectedCallback?.()
      }
    } catch (e) {
      // ignore
    }
    this.childNodes.forEach(child => {
      (child as UniElementImpl).setConnected(connected)
    })
  }

  protected addFrameNode(frameNode: FrameNode) {
    if (this.isFixed) {
      this.page.document.body.slotFrameNode!.appendChild(frameNode)
      return
    }
    if (this.isFullscreen) {
      this.page.appendFullscreenFrameNode(frameNode, this)
      return
    }

    const parent = this.parentNode as UniElementImpl
    const parentFrameNode = parent?.slotFrameNode
    if (parentFrameNode == null) {
      // 暂不考虑支持延迟加载 slotFrameNode
      console.error('parent slot frameNode is null')
      return
    }

    if (parent.isSlotChild(this as object as UniElementImpl)) {
      return
    }

    let previousSibling: UniElementImpl = this.previousElementSibling as UniElementImpl
    while (previousSibling && previousSibling.isFixed) {
      previousSibling = previousSibling.previousElementSibling as UniElementImpl
    }
    if (previousSibling) {
      const siblingFrameNode = parent.getRealChildFrameNode(previousSibling)
      parent.insertFrameNodeAfter(frameNode, siblingFrameNode)
    } else {
      parent.insertFrameNodeAfter(frameNode, null)
    }
  }

  // insertChildAfter(xxx, null)存在Bug（鸿蒙方面不认为是Bug），参考：https://developer.huawei.com/consumer/cn/support/issues/detail/250428200314101/comment
  protected insertFrameNodeAfter(frameNode: FrameNode, anchor: FrameNode | null) {
    if (!this.slotFrameNode) {
      return
    }
    try {
      this.slotFrameNode.insertChildAfter(frameNode, anchor)
    } catch (e) {
      // frameNode.isModifiable() 为 true 但是在插入时抛出异常，测试不影响功能
      hilog.warn(0x0001, "insertFrameNodeAfter",
        "Parent(%{public}s) Failed to insertChildAfter Child(%{public}s): %{public}s",
        this.parentElement?.tagName ?? "null",
        this.tagName,
        (e as BusinessError).message
      );
    }
  }

  getRealChildFrameNode(child: UniElementImpl): FrameNode | null {
    return child.frameNode
  }

  isSlotChild(child: UniElementImpl): boolean {
    let isSlot = false;
    this.slotMap.forEach((value: UniElementImpl[]) => {
      if (value.indexOf(child) > -1) {
        isSlot = true
      }
    })
    return isSlot
  }

  private addFrameNodeFn: (() => void) | null = null

  protected addNativeNode(index: number, isConnected: boolean) {
    const parent = this.parentNode as UniElementImpl
    const children = parent.children

    const parentLayoutNode = parent.layoutNode
    const layoutNode = this.layoutNode
    index = index === 0 || children[index - 1] ? index : children.length - 1
    parentLayoutNode.insertChildAtIndex(layoutNode, index)
    if (isConnected) {
      // TODO 暂时异步添加节点，目的是避免节点二次渲染，但节点添加和其他状态修改不在同一帧可能导致闪烁
      const addFrameNode = this.addFrameNodeFn = () => {
        this.addFrameNodeFn = null
        // 为了性能考虑暂时不做非空判断，由子类保证非空
        this.addFrameNode(this.frameNode!)
      }
      this.page.document.requestRenderQueue(addFrameNode)
    } else {
      // 为了性能考虑暂时不做非空判断，由子类保证非空
      this.addFrameNode(this.frameNode!)
    }
  }

  /**
   * @internal
   */
  updateNativeAttribute(key: string, value: ESObject): void {
    // 具体由子类实现
  }

  setAttribute(key: string, value: string): void {
    this.setAnyAttribute(key, value)
  }

  setAnyAttribute(key: string, value: Object): void {
    if (key === 'class') {
      this.classList.length = 0
      this.classList.push(...String(value).split(' '))
    }
    this.attributes.set(key, value)
  }

  getAttribute(key: string): string | null {
    const val = this.getAnyAttribute(key)
    return val === null ? null : String(val)
  }

  getAnyAttribute(key: string): Object {
    return this.attributes.get(key)
  }

  hasAttribute(key: string): boolean {
    return this.attributes.has(key)
  }

  removeAttribute(key: string): void {
    this.attributes.delete(key)
  }

  protected preferBatchSetStyle: boolean = true
  protected isDuringBatchSetStyle: boolean = false

  protected batchSetStyleStart() {
    this.isDuringBatchSetStyle = true
  }

  protected batchSetStyleEnd() {
    this.isDuringBatchSetStyle = false
    this.applyBatchSetStyle()
  }

  updateStyle(map: Map<string, Object>): void {
    const preferBatchSetStyle = this.preferBatchSetStyle
    preferBatchSetStyle && this.batchSetStyleStart()
    this.updateTransitionStyle(map)
    map.forEach((value, key) => {
      this.style.setProperty(key, value)
    })
    preferBatchSetStyle && this.batchSetStyleEnd()
  }

  private updateTransitionStyle(map: Map<string, Object>): void {
    if (map.has('transitionProperty')) {
      this.updateTransitionProperty(map.get('transitionProperty') as string)
      map.delete('transitionProperty')
    }
    if (map.has('transitionDuration')) {
      this.updateTransitionDuration(map.get('transitionDuration') as string)
      map.delete('transitionDuration')
    }
  }

  private updateTransitionProperty(value: string) {
    if (value === 'none' || value === "") {
      this.isTransitionPropertyAll = false
      this.transitionProperty = []
      this.clearAnimators()
    } else if (value === 'all') {
      this.isTransitionPropertyAll = true
      this.transitionProperty = []
    } else {
      this.isTransitionPropertyAll = false
      this.transitionProperty = (value as string).split(',').map(item => item.trim())
      expandTransitionAnimationProperty(this.transitionProperty)
    }
  }

  private updateTransitionDuration(value: string) {
    parseTimeToMs(value as string, (val) => {
      this.transitionDuration = val
      if (this.transitionDuration === 0) {
        this.clearAnimators()
      }
    })
  }

  private clearAnimators() {
    this.animatorsCache.forEach((animator, key) => {
      animator.pause()
      this.animatorsCache.delete(key)
    })
  }

  private _getNotAttachedPosition(): IPosition {
    let x = this.layoutNode.getLayoutLeft()
    let y = this.layoutNode.getLayoutTop()
    const parent = this.parentElement as UniElementImpl
    if (!this.isFixed && !this.isFullscreen && parent) {
      const parentRect = (parent as object as PrivateUniElementImpl)._getPosition()
      x += parentRect.x
      y += parentRect.y
      if (isScrollElement(parent)) {
        x -= parent.scrollLeft
        y -= parent.scrollTop
      }
    }
    return {
      x,
      y
    }
  }

  private _getPosition(): IPosition {
    const frameNode = this.frameNode
    const bodyFrameNode = this.page.document.body.frameNode!
    const isAttached = frameNode && frameNode.isAttached()
    if (!isAttached) {
      return this._getNotAttachedPosition()
    }
    // TODO list-item、sticky-section、sticky-header、flow-item 等组件在出屏幕被回收后既无法通过layoutNode获取位置也无法通过frameNode获取，目前没有找到比较好的解决办法。
    const positionToWindow = frameNode.getPositionToWindowWithTransform()
    const bodyPositionToWindow = bodyFrameNode.getPositionToWindowWithTransform()
    return {
      x: positionToWindow.x - bodyPositionToWindow.x,
      y: positionToWindow.y - bodyPositionToWindow.y,
    }
  }

  private _getSize(): ISize {
    const frameNode = this.frameNode
    const isAttached = frameNode && frameNode.isAttached()
    if (!isAttached) {
      const width = this.layoutNode.getLayoutWidth()
      const height = this.layoutNode.getLayoutHeight()
      return {
        width,
        height
      }
    }

    if (this.resetTransform.transform === 1) {
      // fix 节点 transform 后获取 size 不准确的问题 https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-framenode#getinspectorinfo12
      const inspectorInfo = frameNode.getInspectorInfo()
      if (inspectorInfo && typeof (inspectorInfo as ESObject).$rect === 'string') {
        // $rect "[35.00, 326.00],[1530.20,573.20]"
        const coordinateMatch = ((inspectorInfo as ESObject).$rect as string).match(/-?\d+\.?\d*/g)
        if (coordinateMatch != null && coordinateMatch.length === 4) {
          const coordinates = coordinateMatch.map(item => parseFloat(item))
          if (!coordinates.some(coordinate => isNaN(coordinate))) {
            const x1 = coordinates[0]
            const y1 = coordinates[1]
            const x2 = coordinates[2]
            const y2 = coordinates[3]

            const width = Math.abs(x2 - x1)
            const height = Math.abs(y2 - y1)

            return {
              width: px2vp(width),
              height: px2vp(height)
            }
          }
        }
      }
    }

    const size = frameNode.getMeasuredSize()
    if (size.width === 0 && size.height === 0) {
      const width = this.layoutNode.getLayoutWidth()
      const height = this.layoutNode.getLayoutHeight()
      return {
        width,
        height
      }
    }
    return {
      width: px2vp(size.width),
      height: px2vp(size.height)
    }
  }

  getBoundingClientRect(): DOMRect {
    /**
     * 排版器大小位置均可能不准确，但是鸿蒙在frameNode attach之后只能保证位置准确，不能保证大小准确。
     * TODO 此处先判断frameNode size为0时仍使用排版器数据。需要给鸿蒙方面提issue
     */
    const position = this._getPosition()
    const size = this._getSize()

    return new DOMRect(position.x, position.y, size.width, size.height)
  }

  /**
   * @deprecated use .page
   */
  private getPageAsync() {
    return Promise.resolve(this.page)
  }

  getBoundingClientRectAsync(options?: GetBoundingClientRectAsyncOptions | null | undefined): Promise<DOMRect> | null {
    if (options) {
      // TODO remove getPageAsync
      this.getPageAsync().then((page) => {
        page.document.waitNativeRender(() => {
          const rect = this.getBoundingClientRect()
          options?.success?.(rect)
          options?.complete?.(rect)
        })
      })
      return null
    } else {
      return new Promise<DOMRect>((resolve, reject) => {
        // TODO remove getPageAsync
        this.getPageAsync().then((page) => {
          page.document.waitNativeRender(() => {
            resolve(this.getBoundingClientRect())
          })
        })
      })
    }
  }

  getDrawableContext(): DrawableContext | null {
    throw new Error('Method not implemented.')
  }

  addEventListener<T extends IUniEvent, R>(type: string, callback: (event: T) => R): UniCallbackWrapper {
    const callbackWrapper = new UniCallbackWrapper(callback)
    const res = this.eventListeners.get(type)
    if (res) {
      const listeners = res[0]
      listeners.push(callbackWrapper)
    } else {
      const res = this.initNativeEvent(type)
      this.eventListeners.set(type, [[callbackWrapper], res])
    }
    return callbackWrapper
  }

  animate(keyframes: ESObject | ESObject[], options: ESObject): UniAnimation | null {
    // options fill direction harmony 不支持
    // 不支持返回 animation 实例
    formatAnimationOptions(this, options, keyframes, (param: KeyframeAnimateParam, keyframes: Array<KeyframeState>) => {
      this.app.context?.keyframeAnimateTo(param, keyframes)
    })
    return null
  }

  /**
   * 用于在longpress触发时屏蔽click
   * TODO 子元素touchstart事件stopPropagation时，父元素无法准确判断
   */
  private onTouchStartForClick: Function | null = null
  private onTouchStartForClickTimestamp: number = 0

  protected initNativeEvent(type: string): Object | void {
    switch (type) {
      case 'click': {
        if (!this.onTouchStartForClick) {
          this.onTouchStartForClick = (e: TouchEvent) => {
            if (e.type === TouchType.Down) {
              this.onTouchStartForClickTimestamp = e.timestamp
            }
          }
        }
        const frameNode = this.frameNode
        if (frameNode) {
          addEventListenerByProxy(frameNode.commonEvent, 'setOnTouch', this.onTouchStartForClick!)
          // 仅注册一次无需代理
          frameNode.commonEvent.setOnClick((event) => {
            if (
              (
                this.eventListeners.has('longpress') ||
                this.eventListeners.has('longtap')
              ) &&
                event.timestamp - this.onTouchStartForClickTimestamp > LONGPRESS_TIMEOUT * 1e6
            ) {
              return
            }
            const uniEvent = initPointerEvent(this, event)
            useNativePreventDefault(uniEvent, event)
            this.dispatchEvent(type, uniEvent)
          })
        }
        break
      }
      case 'touchstart':
      case 'touchmove':
      case 'touchend':
      case 'touchcancel': {
        let touchType: TouchType
        switch (type) {
          case 'touchstart':
            touchType = TouchType.Down
            break
          case 'touchmove':
            touchType = TouchType.Move
            break
          case 'touchend':
            touchType = TouchType.Up
            break
          case 'touchcancel':
            touchType = TouchType.Cancel
            break
        }
        const callback = (event: TouchEvent) => {
          if (event.type === touchType) {
            // TODO 重用事件对象
            const uniEvent = initTouchEvent(type, this, event)
            useNativePreventDefault(uniEvent, event)
            // 使用原生层冒泡
            useNativeStopPropagation(uniEvent, event)
            this.dispatchEvent(type, uniEvent, false)
          }
        }
        const frameNode = this.frameNode
        if (frameNode) {
          addEventListenerByProxy(frameNode.commonEvent, 'setOnTouch', callback)
        }
        return callback
      }
      case 'longtap':
      case 'longpress': {
        // FrameNode 层不支持 gesture 使用，相关：https://issuereporter.developer.huawei.com/detail/241112201026101/comment
        // this._frameNode.commonAttribute.gesture(LongPressGesture().onAction
        const callback = (uniEvent: UniEvent) => {
          this.dispatchEvent(type, uniEvent)
        }
        const frameNode = this.frameNode
        if (frameNode) {
          onLongPress(this, callback)
        }
        return callback
      }
    }
  }

  removeEventListener(type: string, callbackWrapper: UniCallbackWrapper): void {
    const res = this.eventListeners.get(type)
    if (res) {
      const listeners = res[0]
      if (callbackWrapper) {
        const index = listeners.indexOf(callbackWrapper)
        if (index > -1) {
          listeners.splice(index, 1)
        }
      } else {
        listeners.length = 0
      }
      if (listeners.length === 0) {
        if (this.deleteNativeEvent(type, res[1])) {
          this.eventListeners.delete(type)
        }
      }
    }
  }

  protected deleteNativeEvent(type: string, res: Object | void) {
    switch (type) {
      case 'click': {
        const frameNode = this.frameNode
        if (frameNode) {
          if (this.onTouchStartForClick) {
            removeEventListenerByProxy(frameNode.commonEvent, 'setOnTouch', this.onTouchStartForClick)
            this.onTouchStartForClick = null
          }
          frameNode.commonEvent.setOnClick(undefined)
        }
        return true
      }
      case 'touchstart':
      case 'touchmove':
      case 'touchend':
      case 'touchcancel': {
        const callback = res as Function
        const frameNode = this.frameNode
        if (frameNode) {
          removeEventListenerByProxy(frameNode.commonEvent, 'setOnTouch', callback)
        }
        return true
      }
      case 'longtap':
      case 'longpress': {
        const callback = res as Function
        const frameNode = this.frameNode
        if (frameNode) {
          offLongPress(this, callback)
        }
        return true
      }
    }
    return false
  }

  removeChild(aChild: IUniElement): IUniElement | null {
    if (aChild instanceof UniElementImpl && aChild.attributes.has('slot')) {
      const slotName = (aChild.attributes.get('slot') || '') as string
      if (slotName) {
        this.removeSlotContent(slotName, aChild)
        return aChild
      }
    }
    const childNodes = this.childNodes
    const index = childNodes.indexOf(aChild)
    if (index > -1) {
      // TODO 内存泄漏 递归清理子节点，防止内存泄漏，目前需要递归释放text节点的onClick
      // aChild.childNodes.slice(0).forEach(child => {
      //   aChild.removeChild(child)
      // })
      childNodes.splice(index, 1)
      const childImpl = aChild as UniElementImpl
      // if (!childImpl.isPureNode) ，考虑效率，基类不作判断，由 PureNode 子类重写 removeNativeNode 跳过
      // TODO 内存泄漏 临时方案：为何 text 的 fixClick 事件会导致内存泄漏
      if (childImpl.tagName === 'TEXT' && childImpl.frameNode) {
        (childImpl.frameNode as typeNode.Text).attribute.onClick(undefined)
      }
      // TODO 内存泄漏 主动清理下
      if (childImpl.frameNode) {
        clearEventListenerByProxy(childImpl.frameNode.commonEvent)
      }
      childImpl.removeNativeNode()
      childImpl._parent = null
      childImpl.setConnected(false)
      const children = this.children
      const childIndex = children.indexOf(aChild)
      if (childIndex > -1) {
        children.splice(childIndex, 1)
      }
    } else {
      throw new Error(
        "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.",
      )
    }
    return aChild
  }

  remove(): void {
    if (this.parentNode) {
      try {
        this.parentNode.removeChild(this)
      } catch (e) {
        console.error(`${this.parentElement?.tagName} Failed to remove child(${this.tagName}): ${(e as BusinessError).message}}`)
      }
    }
  }

  protected removeFrameNode(frameNode: FrameNode): void {
    /**
     * 测试代码，不可启用。
     * 部分情况下在removeChild之前调用则无内存泄露，在removeChild之后调用则存在内存泄露
     */
    // frameNode.dispose()
    const parentFrameNode = frameNode.getParent()
    if (parentFrameNode && parentFrameNode.isModifiable()) {
      parentFrameNode.removeChild(frameNode)
    }
  }

  protected removeNativeNode(): void {
    const parentLayoutNode = (this._parent as UniElementImpl).layoutNode
    const layoutNode = this.layoutNode
    parentLayoutNode.removeChildNode(layoutNode)
    // TODO 暂时使用同步移除，避免后续移动节点出现问题，但移除与其他状态修改不在同一帧可能导致闪烁
    if (this.addFrameNodeFn) {
      this.page.document.cancelRenderQueue(undefined, this.addFrameNodeFn)
      this.addFrameNodeFn = null
    } else {
      const frameNode = this.frameNode
      if (frameNode) {
        this.removeFrameNode(frameNode)
      }
    }
    if (this._isConnected) {
      this.page.document.requestRenderQueue()
    }
  }

  /**
   * @param bubbles 内部参数，是否冒泡
   */
  dispatchEvent(typeOrValue: string | IUniEvent, value?: IUniEvent, bubbles?: boolean): void {
    let event: UniEvent
    let type: string

    if (typeof typeOrValue === 'string' && value) {
      event = value as UniEvent
      type = typeOrValue
    } else if (typeOrValue instanceof UniEvent) {
      event = typeOrValue as UniEvent
      type = event.type
    } else {
      throw new Error('Invalid arguments')
    }
    // TODO 考虑外部干扰
    if (!event.target) {
      event.target = this
    }
    event.currentTarget = this
    bubbles = typeof bubbles === 'boolean' ? bubbles : event.bubbles
    let isStopPropagation = false
    if (bubbles) {
      const stopPropagation = event.stopPropagation
      event.stopPropagation = () => {
        stopPropagation()
        isStopPropagation = true
      }
    }
    try {
      const res = this.eventListeners.get(type)
      if (res) {
        const listeners = res[0]
        listeners.forEach(callbackWrapper => {
          callbackWrapper?.callback(event)
        })
      }
    } catch (_) {
      // no catch
    }
    if (bubbles && !isStopPropagation) {
      this.parentNode?.dispatchEvent(type, event)
    }
    event.currentTarget = null
  }

  scrollTo(x: number, y: number): void {
    throw new Error('Method not implemented.')
  }

  scrollBy(x: number, y: number): void {
    throw new Error('Method not implemented.')
  }

  querySelector(selector: string): IUniElement | null {
    const res: IUniElement[] = []
    this.childNodes.forEach(child => {
      getValidNodes(child, selector, res)
    })
    return res.length > 0 ? res[0] : null
  }

  querySelectorAll(selector: string): IUniElement[] {
    const res: IUniElement[] = []
    this.childNodes.forEach(child => {
      getValidNodes(child, selector, res, true)
    })
    return res
  }

  focus(): void {
    if (this.nodeName == 'INPUT' || this.nodeName == 'TEXTAREA') {
      this.updateNativeAttribute('focus', true)
    }
  }

  blur(): void {
    if (this.nodeName == 'INPUT' || this.nodeName == 'TEXTAREA') {
      this.updateNativeAttribute('focus', false)
    }
  }

  getIOSView(): object {
    throw new Error('Method not implemented.')
  }

  getAndroidView(): object | null

  getAndroidView<T>(): T | null

  getAndroidView(): object | null {
    throw new Error('Method not implemented.')
  }

  getHarmonyController(): object | null

  getHarmonyController<T>(): T | null

  getHarmonyController(): object | null {
    // 由子类实现
    return null
  }

  getAndroidActivity(): object {
    throw new Error('Method not implemented.')
  }

  /**
   * @deprecated use .uniPage
   */
  getPage(): UniPage | null {
    return this.uniPage
  }

  private resetTransform: ResetTransform = {
    transform: 0,
    translate: 0,
    scale: 0,
    rotate: 0
  }

  private setTransform(cb: (result: boolean) => void) {
    formatTransform(this.nativeStyleCache.transform, formatTransformOrigin(this.nativeStyleCache.transformOrigin),
      (val, transformOptions) => {
        cb(true)

        // TODO 为了和 transform scale 对齐使用不取整计算，后续考虑自定义取整逻辑
        if (this.nativeStyleCache.transform === DEFAULT_TRANSFORM) {
          this.updateNativeNodeStyle('pixelRound', {
            start: PixelRoundCalcPolicy.FORCE_CEIL,
            end: PixelRoundCalcPolicy.FORCE_CEIL,
            top: PixelRoundCalcPolicy.FORCE_CEIL,
            bottom: PixelRoundCalcPolicy.FORCE_CEIL,
          } as PixelRoundPolicy)
        } else {
          this.updateNativeNodeStyle('pixelRound', {
            start: PixelRoundCalcPolicy.NO_FORCE_ROUND,
            end: PixelRoundCalcPolicy.NO_FORCE_ROUND,
            top: PixelRoundCalcPolicy.NO_FORCE_ROUND,
            bottom: PixelRoundCalcPolicy.NO_FORCE_ROUND,
          } as PixelRoundPolicy)
        }

        if (val) {
          this.resetTransform.transform = 1
        } else if (this.resetTransform.transform) {
          this.updateNativeNodeStyleWithTransition('transform', matrix4.identity())
          this.resetTransform.transform = 0
        }
        if (transformOptions?.translate) {
          this.resetTransform.translate = 1
        } else if (this.resetTransform.translate) {
          this.updateNativeNodeStyleWithTransition('translate', {} as TranslateOptions)
          this.resetTransform.translate = 0
        }
        if (transformOptions?.scale) {
          this.resetTransform.scale = 1
        } else if (this.resetTransform.scale) {
          this.updateNativeNodeStyleWithTransition('scale', {} as ScaleOptions)
          this.resetTransform.scale = 0
        }
        if (transformOptions?.rotate) {
          this.resetTransform.rotate = 1
        } else if (this.resetTransform.rotate) {
          this.updateNativeNodeStyleWithTransition('rotate', {} as RotateOptions)
          this.resetTransform.rotate = 0
        }

        transformOptions?.translate && this.updateNativeNodeStyleWithTransition('translate', transformOptions.translate)
        transformOptions?.scale && this.updateNativeNodeStyleWithTransition('scale', transformOptions.scale)
        transformOptions?.rotate && this.updateNativeNodeStyleWithTransition('rotate', transformOptions.rotate)

        val && this.updateNativeNodeStyleWithTransition('transform', val)
      })
  }

  normalizeStyleValue(key: string, value: Object) {
    if (value === '') {
      const newValue = this._options?.defaultStyle?.get(key)
      if (newValue) {
        value = newValue[0]
      } else {
        console.warn(`The default value of ${key} is empty`)
      }
    }
    return value
  }

  /**
   * @internal
   */
  parseStyle(key: string, value: Object): boolean {
    value = this.normalizeStyleValue(key, value)
    let result = false
    switch (key) {
      case 'direction':
        formatDirection(value, (val) => {
          result = true
          this.updateLayoutNodeStyle(key, 'setStyleDirection', val)
        })
        break
      case 'boxSizing':
        formatBoxSizing(value, (val) => {
          result = true
          this.updateLayoutNodeStyle(key, 'setStyleBoxSizing', val)
        })
        break
      case 'flexDirection':
        formatFlexDirection(value, (val) => {
          result = true
          this.updateLayoutNodeStyle(key, 'setStyleFlexDirection', val)
        })
        break
      case 'justifyContent':
        formatJustifyContent(value, (val) => {
          result = true
          this.updateLayoutNodeStyle(key, 'setStyleJustifyContent', val)
        })
        break
      case 'alignItems':
        formatFlexAlign(value, (val) => {
          result = true
          this.updateLayoutNodeStyle(key, 'setStyleAlignItems', val)
        })
        break
      case 'alignContent':
        formatFlexAlign(value, (val) => {
          result = true
          this.updateLayoutNodeStyle(key, 'setStyleAlignContent', val)
        })
        break
      case 'alignSelf':
        formatFlexAlign(value, (val) => {
          result = true
          this.updateLayoutNodeStyle(key, 'setStyleAlignSelf', val)
        })
        break
      case 'position':
        formatPosition(value, (val) => {
          result = true
          this.updateLayoutNodeStyle(key, 'setStylePositionType', val)
          this.checkPosition(val === UniCssPositionType.Fixed)
        })
        break
      case 'flexWrap':
        formatFlexWrap(value, (val) => {
          result = true
          this.updateLayoutNodeStyle(key, 'setStyleFlexWrap', val)
        })
        break
      case 'overflow':
        formatOverflow(value, (val, val2) => {
          result = true
          this.updateLayoutNodeStyle(key, 'setStyleOverflow', val)
          this.updateNativeNodeStyle('clip', val2)
        })
        break
      case 'display':
        formatDisplay(value, (val) => {
          result = true
          this.updateLayoutNodeStyle(key, 'setStyleDisplay', val)
          this.updateNativeNodeStyle('hidden', val === UniCssDisplayType.None)
        })
        break
      case 'flexGrow':
        formatNumber(value, (val) => {
          result = true
          this.updateLayoutNodeStyle(key, 'setStyleFlexGrow', val)
        })
        break
      case 'flexShrink':
        formatNumber(value, (val) => {
          result = true
          this.updateLayoutNodeStyle(key, 'setStyleFlexShrink', val)
        })
        break
      case 'flexBasis':
        formatLayoutLength(value, (val) => {
          result = true
          this.updateLayoutNodeStyle(key, 'setStyleFlexBasis', val.value, val.unit)
        })
        break
      case 'width':
        formatLayoutLength(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleWidth', val.value, val.unit)
        })
        break
      case 'height':
        formatLayoutLength(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleHeight', val.value, val.unit)
        })
        break
      case 'minWidth':
        formatLayoutLength(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleMinWidth', val.value, val.unit)
        })
        break
      case 'minHeight':
        formatLayoutLength(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleMinHeight', val.value, val.unit)
        })
        break
      case 'maxWidth':
        formatLayoutLength(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleMaxWidth', val.value, val.unit)
        })
        break
      case 'maxHeight':
        formatLayoutLength(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleMaxHeight', val.value, val.unit)
        })
        break
      case 'marginLeft': {
        formatLayoutLength(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleMargin', UniCssFlexEdge.Left, val.value, val.unit)
        })
        break
      }
      case 'marginRight': {
        formatLayoutLength(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleMargin', UniCssFlexEdge.Right, val.value, val.unit)
        })
        break
      }
      case 'marginTop': {
        formatLayoutLength(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleMargin', UniCssFlexEdge.Top, val.value, val.unit)
        })
        break
      }
      case 'marginBottom': {
        formatLayoutLength(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleMargin', UniCssFlexEdge.Bottom, val.value, val.unit)
        })
        break
      }
      case 'paddingLeft': {
        formatLayoutLength(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStylePadding', UniCssFlexEdge.Left, val.value, val.unit)
        })
        break
      }
      case 'paddingRight': {
        formatLayoutLength(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStylePadding', UniCssFlexEdge.Right, val.value, val.unit)
        })
        break
      }
      case 'paddingTop': {
        formatLayoutLength(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStylePadding', UniCssFlexEdge.Top, val.value, val.unit)
        })
        break
      }
      case 'paddingBottom': {
        formatLayoutLength(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStylePadding', UniCssFlexEdge.Bottom, val.value, val.unit)
        })
        break
      }
      case 'left':
        formatLayoutLength(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStylePosition', UniCssFlexEdge.Left, val.value, val.unit)
        })
        break
      case 'right':
        formatLayoutLength(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStylePosition', UniCssFlexEdge.Right, val.value, val.unit)
        })
        break
      case 'top':
        formatLayoutLength(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStylePosition', UniCssFlexEdge.Top, val.value, val.unit)
        })
        break
      case 'bottom':
        formatLayoutLength(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStylePosition', UniCssFlexEdge.Bottom, val.value, val.unit)
        })
        break
      case 'borderLeftWidth':
        formatBorderWidth(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleBorder', UniCssFlexEdge.Left, val.value, val.unit)
        })
        break
      case 'borderRightWidth':
        formatBorderWidth(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleBorder', UniCssFlexEdge.Right, val.value, val.unit)
        })
        break
      case 'borderTopWidth':
        formatBorderWidth(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleBorder', UniCssFlexEdge.Top, val.value, val.unit)
        })
        break
      case 'borderBottomWidth':
        formatBorderWidth(value, (val) => {
          result = true
          this.updateLayoutNodeStyleWithTransition(key, 'setStyleBorder', UniCssFlexEdge.Bottom, val.value, val.unit)
        })
        break
      case 'borderLeftStyle':
        formatBorderStyle(value, (val1, val2) => {
          result = true
          this.updateLayoutNodeStyle(key, 'setStyleBorderStyle', UniCssFlexEdge.Left, val1)
          this.updateNativeNodeStyle(key, val2)
        })
        break
      case 'borderRightStyle':
        formatBorderStyle(value, (val1, val2) => {
          result = true
          this.updateLayoutNodeStyle(key, 'setStyleBorderStyle', UniCssFlexEdge.Right, val1)
          this.updateNativeNodeStyle(key, val2)
        })
        break
      case 'borderTopStyle':
        formatBorderStyle(value, (val1, val2) => {
          result = true
          this.updateLayoutNodeStyle(key, 'setStyleBorderStyle', UniCssFlexEdge.Top, val1)
          this.updateNativeNodeStyle(key, val2)
        })
        break
      case 'borderBottomStyle':
        formatBorderStyle(value, (val1, val2) => {
          result = true
          this.updateLayoutNodeStyle(key, 'setStyleBorderStyle', UniCssFlexEdge.Bottom, val1)
          this.updateNativeNodeStyle(key, val2)
        })
        break
      case 'borderTopLeftRadius':
      case 'borderTopRightRadius':
      case 'borderBottomLeftRadius':
      case 'borderBottomRightRadius':
        formatLength(value, (val) => {
          result = true
          this.updateNativeNodeStyleWithTransition(key, val)
        })
        break
      case 'borderTopColor':
        formatColor(value, (val) => {
          result = true
          this.updateNativeNodeStyleWithTransition(key, val)
        })
        break
      case 'borderBottomColor':
        formatColor(value, (val) => {
          result = true
          this.updateNativeNodeStyleWithTransition(key, val)
        })
        break
      case 'borderLeftColor':
        formatColor(value, (val) => {
          result = true
          this.updateNativeNodeStyleWithTransition(key, val)
        })
        break
      case 'borderRightColor':
        formatColor(value, (val) => {
          result = true
          this.updateNativeNodeStyleWithTransition(key, val)
        })
        break
      case 'backgroundColor':
        formatColor(value, (val) => {
          result = true
          this.updateNativeNodeStyleWithTransition(key, val)
        })
        break
      case 'transformOrigin': {
        const nativeStyleCache = this.nativeStyleCache
        if (nativeStyleCache.transformOrigin === value) {
          break
        }
        nativeStyleCache.transformOrigin = value as string
        this.setTransform((res) => {
          result = res
        })
        break
      }
      case 'transform': {
        const nativeStyleCache = this.nativeStyleCache
        if (nativeStyleCache.transform === value) {
          break
        }
        nativeStyleCache.transform = value as string
        this.setTransform((res) => {
          result = res
        })
        break
      }
      case 'opacity':
        formatNumber(value, (val) => {
          result = true
          this.updateNativeNodeStyleWithTransition(key, val)
        })
        break
      case 'visibility':
        formatVisibility(value, (val) => {
          result = true
          this.updateNativeNodeStyle(key, val)
        })
        break
      case 'zIndex':
        formatNumber(value, (val) => {
          result = true
          this.updateNativeNodeStyle(key, val)
        })
        break
      case 'backgroundImage':
        if (typeof value === 'string') {
          if (value.startsWith('linear-gradient(')) {
            formatLinearGradient(value, (val) => {
              this.updateNativeNodeStyle('linearGradient', val)
            })
          } else if (value == '' || value === 'none') {
            this.updateNativeNodeStyle('linearGradient', { colors: [] } as LinearGradientValue)
          }
          result = true
        }
        break
      case 'boxShadow':
        formatBoxShadow(value as string, (val) => {
          result = true
          this.updateNativeNodeStyleWithTransition(key, val)
        })
        break
      case 'transitionDuration':
        this.updateTransitionDuration(value as string)
        result = true
        break
      case 'transitionProperty':
        this.updateTransitionProperty(value as string)
        result = true
        break
      case 'transitionTimingFunction':
        this.transitionTimingFunction = value as string
        result = true
        break
      case 'transitionDelay':
        parseTimeToMs(value as string, (val) => {
          this.transitionDelay = val
          result = true
        })
        break
      case 'pointerEvents': {
        const pointerEvents = transformPointerEvents(value as string)
        this.updateNativeNodeStyle('hitTestMode', pointerEvents.hitTestMode)
        /**
         * TODO 遗留问题，web端父组件设置pointer-events: none后子组件不可点击，此行为是由子组件继承父组件的pointer-events样式引发的。子组件也可以使用自己的pointer-events覆盖继承来的样式。
         * 但是在鸿蒙平台现状是子组件无法覆盖父组件的pointer-events: none样式，实测安卓平台也有一样的问题，暂时遗留。
         */
        this.updateNativeNodeStyle('responseRegion', pointerEvents.responseRegion)
        result = true
        break
      }
    }
    return result
  }

  protected nativeStyleCache: NativeStyleCache = {
    position: {
      x: '0px',
      y: '0px',
    },
    borderColor: {},
    borderWidth: {
      left: '0px',
      right: '0px',
      top: '0px',
      bottom: '0px',
    },
    borderStyle: {},
    borderRadius: {},
    visibility: Visibility.Visible,
    hidden: false,
    transform: DEFAULT_TRANSFORM,
    transformOrigin: `${DEFAULT_TRANSFORM_ORIGIN.centerX} ${DEFAULT_TRANSFORM_ORIGIN.centerY}`
  }
  protected _commonAttribute: CommonAttribute | null = null
  protected batchSetStyleKeys = new Set<string>()

  protected applyBatchSetStyle() {
    this.batchSetStyleKeys.forEach((key: string) => {
      switch (key) {
        case 'position':
          this._commonAttribute?.position(this.nativeStyleCache.position)
          break;
        case 'borderColor':
          this._commonAttribute?.borderColor(this.nativeStyleCache.borderColor)
          break;
        case 'borderWidth':
          this._commonAttribute?.borderWidth(this.nativeStyleCache.borderWidth)
          break;
        case 'borderStyle':
          this._commonAttribute?.borderStyle(this.nativeStyleCache.borderStyle)
          break;
        case 'borderRadius':
          this._commonAttribute?.borderRadius(this.nativeStyleCache.borderRadius)
          break;
      }
    })
    this._commonAttribute = null
    this.batchSetStyleKeys.clear()
  }

  protected updateLayoutNodeStyleWithTransition(key: string, method: string, ...args: Array<Object | undefined>): void {
    handleLayoutTransitionAnimation(
      Boolean(this.frameNode?.isAttached()),
      this.animatorsCache,
      this.layoutNode,
      this.style,
      this.transitionProperty,
      this.isTransitionPropertyAll,
      this.transitionDuration,
      this.transitionDelay,
      this.transitionTimingFunction,
      key,
      this.app.context,
      (_args, isSync) => {
        // isNeedForceRenderAttribute 用来处理 animate 方法要修改的需要同步排版的属性
        if (isSync || isNeedForceRenderAttribute(key, this)) {
          this.updateLayoutNodeStyleSync(key, method, ..._args)
        } else {
          this.updateLayoutNodeStyle(key, method, ..._args)
        }
      },
      args,
      () => {
        this.triggerTransitionEnd(key)
      }
    )
  }

  protected updateLayoutNodeStyleSync(key: string, method: string, ...args: Array<Object | undefined>): void {
    this.handleFullScreenLayout(key, method, ...args)
    if (this.isFullscreen) {
      return
    }
    this.layoutNode[method](...args)
    if (this._isConnected) {
      this.page.document.requestRenderQueue(undefined, true)
    }
  }

  protected updateLayoutNodeStyle(key: string, method: string, ...args: Array<Object | undefined>): void {
    if (enableAttributeStyleMap) {
      key = camelize(key)
    }
    this.handleFullScreenLayout(key, method, ...args)
    if (this.isFullscreen) {
      return
    }
    this.layoutNode[method](...args)
    if (this._isConnected) {
      this.page.document.requestRenderQueue()
    }
  }

  private handleFullScreenLayout(key: string, method: string, ...args: Array<Object | undefined>): void {
    switch (method) {
      case 'setStyleWidth':
      case 'setStyleWidthPercent':

      case 'setStyleHeight':
      case 'setStyleHeightPercent':

      case 'setStyleMinWidth':
      case 'setStyleMinHeight':
      case 'setStyleMaxWidth':
      case 'setStyleMaxHeight':

      case 'setStylePosition':
      case 'setStylePositionPercent':

      case 'setStyleMargin':
      case 'setStyleMarginPercent':
      case 'setStylePositionType':
        this.fullscreenLayoutCache.set(method, { key, args })
        this.fullscreenLayoutCache.delete(method.endsWith('Percent') ? method.replace('Percent', '') :
          method + 'Percent')
        break
    }
  }

  protected updateNativeNodeStyleWithTransition(key: string, value: Object | undefined,
    commonAttribute?: CommonAttribute): void {
    handleNativeNodeTransitionAnimation(
      this.transitionProperty,
      this.isTransitionPropertyAll,
      this.transitionDuration,
      this.transitionDelay,
      this.transitionTimingFunction,
      key,
      this.app.context,
      () => {
        this.triggerTransitionEnd(key)
      },
      () => {
        this.updateNativeNodeStyle(key, value, commonAttribute)
      }
    )
  }

  /**
   * @internal
   */
  updateNativeNodeStyle(key: string, value: Object | undefined, commonAttribute?: CommonAttribute): void {
    // 为了性能考虑暂时不做非空判断，由子类保证非空
    const frameNode = this.frameNode!
    // UniFrameNode 除位置外使用 attribute 修改内层节点属性
    commonAttribute =
      commonAttribute ?? (isUniFrameNode(frameNode) && !['x', 'y'].includes(key) ?
        (frameNode as FrameNode as UniFrameNode).attribute :
        frameNode.commonAttribute)
    this._commonAttribute = commonAttribute
    switch (key) {
      case 'width':
        commonAttribute.width(value as Length)
        break
      case 'height':
        commonAttribute.height(value as Length)
        break
      case 'x': {
        const position = this.nativeStyleCache.position
        if (value !== position.x) {
          position.x = value as Length
          if (!this.isFullscreen) {
            if (!this.isDuringBatchSetStyle) {
              commonAttribute.position(position)
            } else {
              this.batchSetStyleKeys.add('position')
            }
          }
        }
        break
      }
      case 'y': {
        const position = this.nativeStyleCache.position
        if (value !== position.y) {
          position.y = value as Length
          if (!this.isFullscreen) {
            if (!this.isDuringBatchSetStyle) {
              commonAttribute.position(position)
            } else {
              this.batchSetStyleKeys.add('position')
            }
          }
        }
        break
      }
      case 'borderLeftColor': {
        const borderColor = this.nativeStyleCache.borderColor
        borderColor.left = value as ResourceColor
        if (!this.isDuringBatchSetStyle) {
          commonAttribute.borderColor(borderColor)
        } else {
          this.batchSetStyleKeys.add('borderColor')
        }
        break
      }
      case 'borderRightColor': {
        const borderColor = this.nativeStyleCache.borderColor
        borderColor.right = value as ResourceColor
        if (!this.isDuringBatchSetStyle) {
          commonAttribute.borderColor(borderColor)
        } else {
          this.batchSetStyleKeys.add('borderColor')
        }
        break
      }
      case 'borderTopColor': {
        const borderColor = this.nativeStyleCache.borderColor
        borderColor.top = value as ResourceColor
        if (!this.isDuringBatchSetStyle) {
          commonAttribute.borderColor(borderColor)
        } else {
          this.batchSetStyleKeys.add('borderColor')
        }
        break
      }
      case 'borderBottomColor': {
        const borderColor = this.nativeStyleCache.borderColor
        borderColor.bottom = value as ResourceColor
        if (!this.isDuringBatchSetStyle) {
          commonAttribute.borderColor(borderColor)
        } else {
          this.batchSetStyleKeys.add('borderColor')
        }
        break
      }
      case 'borderLeftWidth': {
        const borderWidth = this.nativeStyleCache.borderWidth
        if (value !== borderWidth.left) {
          borderWidth.left = value as string | undefined
          if (!this.isDuringBatchSetStyle) {
            commonAttribute.borderWidth(borderWidth)
          } else {
            this.batchSetStyleKeys.add('borderWidth')
          }
        }
        break
      }
      case 'borderRightWidth': {
        const borderWidth = this.nativeStyleCache.borderWidth
        if (value !== borderWidth.right) {
          borderWidth.right = value as string | undefined
          if (!this.isDuringBatchSetStyle) {
            commonAttribute.borderWidth(borderWidth)
          } else {
            this.batchSetStyleKeys.add('borderWidth')
          }
        }
        break
      }
      case 'borderTopWidth': {
        const borderWidth = this.nativeStyleCache.borderWidth
        if (value !== borderWidth.top) {
          borderWidth.top = value as string | undefined
          if (!this.isDuringBatchSetStyle) {
            commonAttribute.borderWidth(borderWidth)
          } else {
            this.batchSetStyleKeys.add('borderWidth')
          }
        }
        break
      }
      case 'borderBottomWidth': {
        const borderWidth = this.nativeStyleCache.borderWidth
        if (value !== borderWidth.bottom) {
          borderWidth.bottom = value as string | undefined
          if (!this.isDuringBatchSetStyle) {
            commonAttribute.borderWidth(borderWidth)
          } else {
            this.batchSetStyleKeys.add('borderWidth')
          }
        }
        break
      }
      case 'borderWidth': {
        const borderWidth = this.nativeStyleCache.borderWidth
        const newValue = value as EdgeWidths
        if (newValue.left !== borderWidth.left ||
          newValue.right !== borderWidth.right ||
          newValue.top !== borderWidth.top ||
          newValue.bottom !== borderWidth.bottom) {
          borderWidth.left = newValue.left
          borderWidth.right = newValue.right
          borderWidth.top = newValue.top
          borderWidth.bottom = newValue.bottom
          if (!this.isDuringBatchSetStyle) {
            commonAttribute.borderWidth(borderWidth)
          } else {
            this.batchSetStyleKeys.add('borderWidth')
          }
        }
        break
      }
      case 'borderLeftStyle': {
        const borderStyle = this.nativeStyleCache.borderStyle
        borderStyle.left = value as BorderStyle | undefined
        if (!this.isDuringBatchSetStyle) {
          commonAttribute.borderStyle(borderStyle)
        } else {
          this.batchSetStyleKeys.add('borderStyle')
        }
        break
      }
      case 'borderRightStyle': {
        const borderStyle = this.nativeStyleCache.borderStyle
        borderStyle.right = value as BorderStyle | undefined
        if (!this.isDuringBatchSetStyle) {
          commonAttribute.borderStyle(borderStyle)
        } else {
          this.batchSetStyleKeys.add('borderStyle')
        }
        break
      }
      case 'borderTopStyle': {
        const borderStyle = this.nativeStyleCache.borderStyle
        borderStyle.top = value as BorderStyle | undefined
        if (!this.isDuringBatchSetStyle) {
          commonAttribute.borderStyle(borderStyle)
        } else {
          this.batchSetStyleKeys.add('borderStyle')
        }
        break
      }
      case 'borderBottomStyle': {
        const borderStyle = this.nativeStyleCache.borderStyle
        borderStyle.bottom = value as BorderStyle | undefined
        if (!this.isDuringBatchSetStyle) {
          commonAttribute.borderStyle(borderStyle)
        } else {
          this.batchSetStyleKeys.add('borderStyle')
        }
        break
      }
      case 'borderTopLeftRadius': {
        const borderRadius = this.nativeStyleCache.borderRadius
        borderRadius.topLeft = value as Length
        if (!this.isDuringBatchSetStyle) {
          commonAttribute.borderRadius(borderRadius)
        } else {
          this.batchSetStyleKeys.add('borderRadius')
        }
        break
      }
      case 'borderTopRightRadius': {
        const borderRadius = this.nativeStyleCache.borderRadius
        borderRadius.topRight = value as Length
        if (!this.isDuringBatchSetStyle) {
          commonAttribute.borderRadius(borderRadius)
        } else {
          this.batchSetStyleKeys.add('borderRadius')
        }
        break
      }
      case 'borderBottomLeftRadius': {
        const borderRadius = this.nativeStyleCache.borderRadius
        borderRadius.bottomLeft = value as Length
        if (!this.isDuringBatchSetStyle) {
          commonAttribute.borderRadius(borderRadius)
        } else {
          this.batchSetStyleKeys.add('borderRadius')
        }
        break
      }
      case 'borderBottomRightRadius': {
        const borderRadius = this.nativeStyleCache.borderRadius
        borderRadius.bottomRight = value as Length
        if (!this.isDuringBatchSetStyle) {
          commonAttribute.borderRadius(borderRadius)
        } else {
          this.batchSetStyleKeys.add('borderRadius')
        }
        break
      }
      case 'clip':
        commonAttribute.clip(value as boolean)
        break
      case 'backgroundColor':
        // TODO background 不支持绘制到 border 区域：https://issuereporter.developer.huawei.com/detail/241119205712031/comment
        commonAttribute.backgroundColor(value as string)
        break
      case 'transform':
        commonAttribute.transform(value as object)
        break
      case 'translate':
        commonAttribute.translate(value as TranslateOptions)
        break
      case 'rotate':
        commonAttribute.rotate(value as RotateOptions)
        break
      case 'scale':
        commonAttribute.scale(value as ScaleOptions)
        break
      case 'zIndex':
        commonAttribute.zIndex(value as number)
        break
      case 'visibility': {
        const nativeStyleCache = this.nativeStyleCache
        nativeStyleCache.visibility = value as Visibility
        if (!nativeStyleCache.hidden) {
          commonAttribute.visibility(value as Visibility)
        }
        break
      }
      case 'hidden': {
        const nativeStyleCache = this.nativeStyleCache
        nativeStyleCache.hidden = value as boolean
        commonAttribute.visibility(value ? Visibility.None : nativeStyleCache.visibility)
        break
      }
      case 'opacity':
        commonAttribute.opacity(value as number)
        break
      case 'linearGradient':
        commonAttribute.linearGradient(value as LinearGradientValue)
        break
      case 'boxShadow':
        commonAttribute.shadow(value as ShadowOptions)
        break
      case 'pixelRound':
        commonAttribute.pixelRound(value as PixelRoundPolicy)
        break
      case 'hitTestMode':
        commonAttribute.hitTestBehavior(value as HitTestMode)
        break
      case 'responseRegion':
        commonAttribute.responseRegion(value as Rectangle)
        break
    }
  }

  protected layoutNodeCache: LayoutNodeCache = {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    borderBottom: 0,
  }

  /**
   * @internal
   */
  checkLayout() {
    const layoutNode = this.layoutNode
    // hasNewLayout 仅代表自身的布局是否发生变化，不代表子节点的布局是否发生变化，需要继续检查子节点
    if (layoutNode.hasNewLayout()) {
      const cache = this.layoutNodeCache
      const res = layoutNode.getLayoutBuffer()
      const x = res[0]
      const y = res[1]
      const width = res[2]
      const height = res[3]
      const borderTop = res[4]
      const borderRight = res[5]
      const borderBottom = res[6]
      const borderLeft = res[7]
      if (cache.x !== x) {
        this.updateNativeNodeStyle('x', x)
        cache.x = x
      }
      if (cache.y !== y) {
        this.updateNativeNodeStyle('y', y)
        cache.y = y
      }
      if (cache.width !== width) {
        this.updateNativeNodeStyle('width', width)
        cache.width = width
      }
      if (cache.height !== height) {
        this.updateNativeNodeStyle('height', height)
        cache.height = height
      }
      if (cache.borderLeft !== borderLeft ||
        cache.borderRight !== borderRight ||
        cache.borderTop !== borderTop ||
        cache.borderBottom !== borderBottom) {
        this.updateNativeNodeStyle('borderWidth', {
          left: borderLeft,
          right: borderRight,
          top: borderTop,
          bottom: borderBottom
        } as EdgeWidths)
        cache.borderLeft = borderLeft
        cache.borderRight = borderRight
        cache.borderTop = borderTop
        cache.borderBottom = borderBottom
      }
      layoutNode.markLayoutSeen()
    }
    this.children.forEach(child => {
      (child as UniElementImpl).checkLayout()
    })
  }

  protected layoutNodeDirty(callback?: () => void, force?: boolean) {
    this.layoutNode.dirty()
    if (this._isConnected) {
      this.page.document.requestRenderQueue(callback, force)
    }
  }

  private _measureFunction?: MeasureFunction

  protected setMeasureFunction(callback: MeasureFunction) {
    // 存储以避免回收
    this._measureFunction = callback
    this.layoutNode.setMeasureFunction(callback)
  }

  private isFixed = false

  checkPosition(isFixed: boolean) {
    if (this.isFixed === isFixed) {
      return
    }
    this.isFixed = isFixed
    const frameNode = this.frameNode
    if (frameNode) {
      const parent = frameNode.getParent()
      // 仅处理存在父节点的情况，其他情况在原时机根据 isFixed 标记处理
      if (parent) {
        parent.removeChild(frameNode)
        this.addFrameNode(frameNode)
      }
    }
  }

  private triggerTransitionEnd(key: string) {
    this.dispatchEvent(new UniCustomEvent('transitionend',
      new UniCustomEventOptions<TransitionEndEventDetail>({ propertyName: key })))
  }

  getSnapshotPixelMap(): Promise<PixelMap> {
    return new Promise((resolve, reject) => {
      const screenShotId = getSnapshotId()
      if (!this.frameNode) {
        reject({
          code: 0,
          message: 'frameNode is null'
        } as BusinessError)
        return
      }
      this.frameNode.commonAttribute.id(screenShotId)
      componentSnapshot.get(screenShotId, (error: BusinessError, pixmap: image.PixelMap) => {
        this.frameNode?.commonAttribute.id(undefined)
        error ? reject(error) : resolve(pixmap);
      }, { waitUntilRenderFinished: true })
    })
  }

  requestFullscreen(options?: RequestFullscreenOptions | null) {
    options?.fail?.(new ElementNotSupportFullScreenError())
  }

  dispose() {
    if (this.frameNode) {
      clearLongPress(this)
      clearEventListenerByProxy(this.frameNode.commonEvent)
      // 需要主动移除，否则 touchend 事件仍然会触发
      this.frameNode.commonEvent.setOnTouch(undefined)
      this.frameNode.commonEvent.setOnClick(undefined)
      this.frameNode.dispose()
      this.frameNode = null as T
    }
    this.eventListeners.clear()
    this.app = undefined as Unknown as UniNativeAppImpl
    this.page = undefined as Unknown as UniNativePageImpl
    this._style.dispose()
    this.fullscreenLayoutCache.clear()
    this._parent = null
  }
}
