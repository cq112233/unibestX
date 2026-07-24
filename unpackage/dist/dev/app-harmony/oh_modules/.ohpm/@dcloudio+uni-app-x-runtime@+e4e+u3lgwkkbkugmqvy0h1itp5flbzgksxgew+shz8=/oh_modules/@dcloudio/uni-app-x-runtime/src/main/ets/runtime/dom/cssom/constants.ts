/**
 * 要支持的样式属性列表
 - align-content
 - align-items
 - align-self
 - background-color
 - border-bottom-color
 - border-bottom-style
 - border-bottom-width
 - border-left-color
 - border-left-style
 - border-left-width
 - border-right-color
 - border-right-style
 - border-right-width
 - border-top-color
 - border-top-style
 - border-top-width
 - bottom
 - box-sizing
 - caret-color
 - color
 - direction
 - display
 - flex-basis
 - flex-direction
 - flex-grow
 - flex-shrink
 - flex-wrap
 - font-size
 - font-style
 - font-weight
 - height
 - justify-content
 - left
 - line-height
 - margin-bottom
 - margin-left
 - margin-right
 - margin-top
 - max-height
 - max-width
 - min-height
 - min-width
 - opacity
 - overflow-x
 - overflow-y
 - padding-bottom
 - padding-left
 - padding-right
 - padding-top
 - point-events
 - position
 - right
 - text-align
 - text-decoration-style
 - top
 - transform
 - transition-duration
 - visibility
 - white-space
 - width
 - z-index
 */

/**
 * 注意：部分属性在UniElement基类不支持，需要子类自行实现
 * 例如：text组件需要实现如下属性
 * - font-size
 * - font-style
 * - font-weight
 * - line-height
 * - text-align
 * - text-decoration
 * - ~~text-decoration-line~~ // 暂不实现
 * - white-space
 */

export enum Property {
  'align-content',
  'align-items',
  'align-self',
  'background-color',
  'border-bottom-color',
  'border-bottom-style',
  'border-bottom-width',
  'border-left-color',
  'border-left-style',
  'border-left-width',
  'border-right-color',
  'border-right-style',
  'border-right-width',
  'border-top-color',
  'border-top-style',
  'border-top-width',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  'bottom',
  'box-sizing',
  'caret-color',
  'color',
  'direction',
  'display',
  'flex-basis',
  'flex-direction',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'font-size',
  'font-style',
  'font-weight',
  'height',
  'justify-content',
  'left',
  'line-height',
  'margin-bottom',
  'margin-left',
  'margin-right',
  'margin-top',
  'max-height',
  'max-width',
  'min-height',
  'min-width',
  'opacity',
  'overflow', // uni-app-x仅支持overflow，不支持overflow-x、overflow-y。
  // 'overflow-x',
  // 'overflow-y',
  'padding-bottom',
  'padding-left',
  'padding-right',
  'padding-top',
  'point-events',
  'position',
  'right',
  'text-align',
  'text-decoration-line',
  'text-decoration-style',
  'text-decoration-color',
  'top',
  // 'transform',
  'transition-duration',
  'visibility',
  'white-space',
  'width',
  'z-index'
}

export const BORDER_WIDTH_VALUES = [
  'thin',
  'medium',
  'thick'
]
export const TEXT_DECORATION_LINE_VALUES = [
  'none',
  'underline',
  'overline',
  'line-through'
]
export const BORDER_STYLE_VALUES = [
  'none',
  'hidden',
  'dotted',
  'dashed',
  'solid',
  'double',
  'groove',
  'ridge',
  'inset',
  'outset'
]
export const KEYWORD_AUTO = 'auto'
export const AUTO_VALUES = [
  KEYWORD_AUTO
]
export const BOX_SIZING_VALUES = [
  'border-box',
  'content-box'
]
export const DIRECTION_VALUES = [
  'ltr',
  'rtl',
]
export const DISPLAY_VALUES = [
  'none',
  'flex',
]
export const FONT_STYLE_VALUES = [
  'normal',
  'italic',
  'oblique'
]
export const FONT_WEIGHT_VALUES = [
  'normal',
  'bold',
  'bolder',
  'lighter'
]
export const OVERFLOW_VALUES = [
  'visible',
  'hidden',
  'scroll',
  'auto'
]
export const POSITION_VALUES = [
  'static',
  'relative',
  'absolute',
  'fixed',
  'sticky'
]
export const TEXT_ALIGN_VALUES = [
  'left',
  'right',
  'center',
  'justify',
  'start',
  'end'
]
export const VISIBILITY_VALUES = [
  'visible',
  'hidden'
]
export const WHITE_SPACE_VALUES = [
  'normal',
  'nowrap',
  'pre',
  'pre-line',
  'pre-wrap'
]
export const FONT_SIZE_VALUES = [
  'xx-small',
  'x-small',
  'small',
  'medium',
  'large',
  'x-large',
  'xx-large',
  'xxx-large',
// 不支持
// 'smaller',
// 'larger'
]
export const POINT_EVENTS_VALUES = [
  'auto',
  'none'
]
export const FLEX_DIRECTION_VALUES = [
  'row',
  'row-reverse',
  'column',
  'column-reverse'
]
export const FLEX_WRAP_VALUES = [
  'nowrap',
  'wrap',
  'wrap-reverse'
]
export const ALIGN_CONTENT_VALUES = [
  'normal',
  'flex-start',
  'flex-end',
  'center',
  'start',
  'end',
  'space-between',
  'space-around',
  'space-evenly',
  'baseline',
  'stretch',
]
export const ALIGN_ITEMS_VALUES = [
  'normal',
  'flex-start',
  'flex-end',
  'center',
  'start',
  'end',
  'self-start',
  'self-end',
  'baseline',
  'stretch'
]
export const ALIGN_SELF_VALUES = [
  'auto',
  'normal',
  'flex-start',
  'flex-end',
  'center',
  'self-start',
  'self-end',
  'baseline',
  'stretch'
]
export const JUSTIFY_CONTENT_VALUES = [
  'normal',
  'flex-start',
  'flex-end',
  'center',
  'start',
  'end',
  'space-between',
  'space-around',
  'space-evenly',
  'baseline',
  'stretch',
  // 不支持
  // 'left',
  // 'right',
]

export const KeywordValues = new Map<number, string[]>([
  [Property['align-items'], ALIGN_ITEMS_VALUES],
  [Property['align-self'], ALIGN_SELF_VALUES],
  [Property['align-content'], ALIGN_CONTENT_VALUES],
  [Property['border-bottom-style'], BORDER_STYLE_VALUES],
  [Property['border-left-style'], BORDER_STYLE_VALUES],
  [Property['border-right-style'], BORDER_STYLE_VALUES],
  [Property['border-top-style'], BORDER_STYLE_VALUES],
  [Property['bottom'], AUTO_VALUES],
  [Property['box-sizing'], BOX_SIZING_VALUES],
  [Property['direction'], DIRECTION_VALUES],
  [Property['display'], DISPLAY_VALUES],
  [Property['flex-basis'], AUTO_VALUES],
  [Property['flex-direction'], FLEX_DIRECTION_VALUES],
  [Property['flex-wrap'], FLEX_WRAP_VALUES],
  [Property['font-size'], FONT_SIZE_VALUES],
  [Property['height'], AUTO_VALUES],
  [Property['justify-content'], JUSTIFY_CONTENT_VALUES],
  [Property['left'], AUTO_VALUES],
  [Property['margin-bottom'], AUTO_VALUES],
  [Property['margin-left'], AUTO_VALUES],
  [Property['margin-right'], AUTO_VALUES],
  [Property['margin-top'], AUTO_VALUES],
  [Property['min-height'], AUTO_VALUES],
  [Property['min-width'], AUTO_VALUES],
  [Property['overflow-x'], OVERFLOW_VALUES],
  [Property['overflow-y'], OVERFLOW_VALUES],
  [Property['point-events'], POINT_EVENTS_VALUES],
  [Property['position'], POSITION_VALUES],
  [Property['right'], AUTO_VALUES],
  [Property['text-align'], TEXT_ALIGN_VALUES],
  [Property['text-decoration-line'], TEXT_DECORATION_LINE_VALUES],
  [Property['top'], AUTO_VALUES],
  [Property['visibility'], VISIBILITY_VALUES],
  [Property['white-space'], WHITE_SPACE_VALUES],
  [Property['width'], AUTO_VALUES],
  [Property['z-index'], AUTO_VALUES]
])