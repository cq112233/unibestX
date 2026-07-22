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
export declare enum Property {
    'align-content' = 0,
    'align-items' = 1,
    'align-self' = 2,
    'background-color' = 3,
    'border-bottom-color' = 4,
    'border-bottom-style' = 5,
    'border-bottom-width' = 6,
    'border-left-color' = 7,
    'border-left-style' = 8,
    'border-left-width' = 9,
    'border-right-color' = 10,
    'border-right-style' = 11,
    'border-right-width' = 12,
    'border-top-color' = 13,
    'border-top-style' = 14,
    'border-top-width' = 15,
    'border-top-left-radius' = 16,
    'border-top-right-radius' = 17,
    'border-bottom-left-radius' = 18,
    'border-bottom-right-radius' = 19,
    'bottom' = 20,
    'box-sizing' = 21,
    'caret-color' = 22,
    'color' = 23,
    'direction' = 24,
    'display' = 25,
    'flex-basis' = 26,
    'flex-direction' = 27,
    'flex-grow' = 28,
    'flex-shrink' = 29,
    'flex-wrap' = 30,
    'font-size' = 31,
    'font-style' = 32,
    'font-weight' = 33,
    'height' = 34,
    'justify-content' = 35,
    'left' = 36,
    'line-height' = 37,
    'margin-bottom' = 38,
    'margin-left' = 39,
    'margin-right' = 40,
    'margin-top' = 41,
    'max-height' = 42,
    'max-width' = 43,
    'min-height' = 44,
    'min-width' = 45,
    'opacity' = 46,
    'overflow' = 47,
    'padding-bottom' = 48,
    'padding-left' = 49,
    'padding-right' = 50,
    'padding-top' = 51,
    'point-events' = 52,
    'position' = 53,
    'right' = 54,
    'text-align' = 55,
    'text-decoration-line' = 56,
    'text-decoration-style' = 57,
    'text-decoration-color' = 58,
    'top' = 59,
    'transition-duration' = 60,
    'visibility' = 61,
    'white-space' = 62,
    'width' = 63,
    'z-index' = 64
}
export declare const BORDER_WIDTH_VALUES: string[];
export declare const TEXT_DECORATION_LINE_VALUES: string[];
export declare const BORDER_STYLE_VALUES: string[];
export declare const KEYWORD_AUTO = "auto";
export declare const AUTO_VALUES: string[];
export declare const BOX_SIZING_VALUES: string[];
export declare const DIRECTION_VALUES: string[];
export declare const DISPLAY_VALUES: string[];
export declare const FONT_STYLE_VALUES: string[];
export declare const FONT_WEIGHT_VALUES: string[];
export declare const OVERFLOW_VALUES: string[];
export declare const POSITION_VALUES: string[];
export declare const TEXT_ALIGN_VALUES: string[];
export declare const VISIBILITY_VALUES: string[];
export declare const WHITE_SPACE_VALUES: string[];
export declare const FONT_SIZE_VALUES: string[];
export declare const POINT_EVENTS_VALUES: string[];
export declare const FLEX_DIRECTION_VALUES: string[];
export declare const FLEX_WRAP_VALUES: string[];
export declare const ALIGN_CONTENT_VALUES: string[];
export declare const ALIGN_ITEMS_VALUES: string[];
export declare const ALIGN_SELF_VALUES: string[];
export declare const JUSTIFY_CONTENT_VALUES: string[];
export declare const KeywordValues: Map<number, string[]>;
