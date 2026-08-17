import { CSSStyleValue as ICSSStyleValue } from './types'
import { CSSKeywordValue, } from './CSSKeywordValue'
import { CSSUnitValue, LengthUnit, PercentUnit, NumberUnit } from './CSSUnitValue'
import { CSSColorValue, HarmonyCSSColorValue } from './CSSColorValue'
import { isLayoutVar } from './CSSUnparsedValue'
import {
  UniLengthUnit,
  UniCssBorderStyle,
  UniCssDirection,
  UniCssBoxSizing,
  UniCssFlexAlign,
  UniCssFlexDirection,
  UniCssFlexJustify,
  UniCssFlexOverflow,
  UniCssPositionType,
  UniCssFlexWrap,
  UniCssDisplayType
} from 'dcloudlayout'
import { LayoutLength } from '../../helper/css'

/**
 * 将CSSStyleValue格式化为LayoutNode或FrameNode接收的值
 */
export function toLayoutNodeLength(value: ICSSStyleValue): LayoutLength | undefined {
  if (value instanceof CSSKeywordValue) {
    if (value.value === 'auto') {
      return {
        value: NaN,
        unit: UniLengthUnit.Auto
      }
    }
  }
  if (value instanceof CSSUnitValue) {
    switch (value.unit) {
      case LengthUnit.px:
        return {
          value: value.value,
          unit: UniLengthUnit.PXPoint
        }
      case LengthUnit.rpx:
      case LengthUnit.upx:
        return {
          value: value.value,
          unit: UniLengthUnit.RPXPoint
        }
      case LengthUnit.in:
        return {
          value: value.value * 96,
          unit: UniLengthUnit.PXPoint
        }
      case LengthUnit.cm:
        return {
          value: value.value * 37.8,
          unit: UniLengthUnit.PXPoint
        }
      case PercentUnit.percent:
        return {
          value: value.value,
          unit: UniLengthUnit.Percent
        }
      default:
        break;
    }
  }
  if(isLayoutVar(value)) {
    return {
      value: value.toString(),
      unit: UniLengthUnit.Function
    }
  }
  return
}

export function toLayoutNodeNumber(value: ICSSStyleValue): number | undefined {
  if (value instanceof CSSUnitValue) {
    switch (value.unit) {
      case NumberUnit.number:
        return value.value
      default:
        break;
    }
  }
  return
}

export function toLayoutNodeDirection(value: ICSSStyleValue): UniCssDirection | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'ltr':
        return UniCssDirection.LTR
      case 'rtl':
        return UniCssDirection.RTL
      default:
    }
  }
  return
}

export function toLayoutNodeBoxSizing(value: ICSSStyleValue): UniCssBoxSizing | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'border-box':
        return UniCssBoxSizing.BorderBox
      case 'content-box':
        return UniCssBoxSizing.ContentBox
      default:
    }
  }
  return
}

export function toLayoutNodeBorderStyle(value: ICSSStyleValue): UniCssBorderStyle | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'none':
        return UniCssBorderStyle.None
      default:
        return UniCssBorderStyle.Border
    }
  }
  return
}

export function toLayoutNodeDisplay(value: ICSSStyleValue): UniCssDisplayType | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'flex':
        return UniCssDisplayType.Flex
      case 'none':
        return UniCssDisplayType.None
    }
  }
  return
}

export function toLayoutNodeFlexDirection(value: ICSSStyleValue): UniCssFlexDirection | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'row':
        return UniCssFlexDirection.Row
      case 'row-reverse':
        return UniCssFlexDirection.RowReverse
      case 'column':
        return UniCssFlexDirection.Column
      case 'column-reverse':
        return UniCssFlexDirection.ColumnReverse
    }
  }
  return
}

export function toLayoutNodeFlexAlign(value: ICSSStyleValue): UniCssFlexAlign | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'auto':
        return UniCssFlexAlign.Auto
      case 'flex-start':
        return UniCssFlexAlign.FlexStart
      case 'center':
        return UniCssFlexAlign.Center
      case 'flex-end':
        return UniCssFlexAlign.FlexEnd
      case 'stretch':
        return UniCssFlexAlign.Stretch
      case 'baseline':
        return UniCssFlexAlign.BaseLine
      case 'space-between':
        return UniCssFlexAlign.SpaceBetween
      case 'space-around':
        return UniCssFlexAlign.SpaceAround
      case 'space-evenly':
        return UniCssFlexAlign.SpaceEvenly
    }
  }
  return
}

export function toLayoutNodeFlexJustify(value: ICSSStyleValue): UniCssFlexJustify | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'flex-start':
        return UniCssFlexJustify.FlexStart
      case 'center':
        return UniCssFlexJustify.Center
      case 'flex-end':
        return UniCssFlexJustify.FlexEnd
      case 'space-between':
        return UniCssFlexJustify.SpaceBetween
      case 'space-around':
        return UniCssFlexJustify.SpaceAround
      case 'space-evenly':
        return UniCssFlexJustify.SpaceEvenly
    }
  }
  return
}

export function toLayoutNodeOverflow(value: ICSSStyleValue): UniCssFlexOverflow | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'visible':
        return UniCssFlexOverflow.Visible
      case 'hidden':
        return UniCssFlexOverflow.Hidden
      case 'scroll':
        return UniCssFlexOverflow.Scroll
    }
  }
  return
}

export function toLayoutNodePosition(value: ICSSStyleValue): UniCssPositionType | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'relative':
        return UniCssPositionType.Relative
      case 'absolute':
        return UniCssPositionType.Absolute
      case 'fixed':
        return UniCssPositionType.Fixed
    }
  }
  return
}

export function toLayoutNodeFlexWrap(value: ICSSStyleValue): UniCssFlexWrap | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'nowrap':
        return UniCssFlexWrap.NoWrap
      case 'wrap':
        return UniCssFlexWrap.Wrap
      case 'wrap-reverse':
        return UniCssFlexWrap.WrapReverse
    }
  }
  return
}

export function toLayoutNodeBorderWidth(value: ICSSStyleValue): LayoutLength | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'thin':
        return {
          value: 1,
          unit: UniLengthUnit.PXPoint
        }
      case 'medium':
        return {
          value: 3,
          unit: UniLengthUnit.PXPoint
        }
      case 'thick':
        return {
          value: 5,
          unit: UniLengthUnit.PXPoint
        }
    }
  }
  return toLayoutNodeLength(value)
}

export function colorToFrameNodeColor(value: ICSSStyleValue): string | undefined {
  if (value instanceof CSSColorValue || value instanceof HarmonyCSSColorValue) {
    return value.harmonyColor
  }
  return
}

// TODO 额外支持overflow简写
export function overflowToFrameNodeClip(value: ICSSStyleValue): boolean | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'visible':
        return false
      case 'hidden':
        return true
      case 'scroll':
        return true
    }
  }
  return
}

export function displayToFrameNodeHidden(value: ICSSStyleValue): boolean | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'flex':
        return false
      case 'none':
        return true
    }
  }
  return
}

export function borderStyleToFrameNodeBorderStyle(value: ICSSStyleValue): BorderStyle | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'dashed':
        return BorderStyle.Dashed
      case 'dotted':
        return BorderStyle.Dotted
      case 'solid':
        return BorderStyle.Solid
    }
  }
  return
}

export function lengthToFrameNodeLength(value: ICSSStyleValue) {
  if (value instanceof CSSUnitValue) {
    switch (value.unit) {
      case LengthUnit.px:
        return value.value
      case LengthUnit.in:
        return value.value * 96
      case LengthUnit.cm:
        return value.value * 37.8
      case PercentUnit.percent:
        return value.toString()
    }
  }
  return
}

export function numberToFrameNodeNumber(value: ICSSStyleValue): number | undefined {
  if (value instanceof CSSUnitValue && value.unit === NumberUnit.number) {
    return value.value
  }
  return
}

export function visibilityToFrameNodeVisibility(value: ICSSStyleValue): Visibility | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'visible':
        return Visibility.Visible
      case 'hidden':
        return Visibility.Hidden
    }
  }
  return
}

export function pointerEventsToFrameNodeHitTestMode(value: ICSSStyleValue): HitTestMode | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'auto':
        return HitTestMode.Default
      case 'none':
        return HitTestMode.None
    }
  }
  return
}

export function fontSizeToFrameNodeFontSize(value: ICSSStyleValue): number | string | undefined {
  if(value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'xx-small':
        return 9
      case 'x-small':
        return 10
      case 'small':
        return 13
      case 'medium':
        return 16
      case 'large':
        return 18
      case 'x-large':
        return 24
      case 'xx-large':
        return 32
      case 'xxx-large':
        return 48
    }
  } else if (value instanceof CSSUnitValue) {
    return lengthToFrameNodeLength(value)
  }
  return
}

export function fontWeightToFrameNodeFontWeight(value: ICSSStyleValue): FontWeight | number | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'normal':
        return FontWeight.Normal
      case 'bold':
        return FontWeight.Bold
        return
      case 'bolder':
        return FontWeight.Bolder
      case 'lighter':
        return FontWeight.Lighter
    }
  } else if (value instanceof CSSUnitValue && value.unit === NumberUnit.number) {
    return value.value
  }
  return
}

export function fontStyleToFrameNodeFontStyle(value: ICSSStyleValue): FontStyle | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'normal':
        return FontStyle.Normal
      case 'italic':
        return FontStyle.Italic
    }
  }
  return
}

export function lineHeightToFrameNodeLineHeight(value: ICSSStyleValue): string | number | undefined {
  if (value instanceof CSSUnitValue) {
    if(value.unit === NumberUnit.number) {
      return value.value + 'em'
    } else {
      return lengthToFrameNodeLength(value)
    }
  }
  return
}

export function textAlignToFrameNodeTextAlign(value: ICSSStyleValue): TextAlign | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'start':
      case 'left':
        return TextAlign.Start
      case 'end':
      case 'right':
        return TextAlign.End
        return
      case 'center':
        return TextAlign.Center
      case 'justify':
        return TextAlign.JUSTIFY
    }
  }
  return
}

export function whiteSpaceToFrameNodeMaxLines(value: ICSSStyleValue): number | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'nowrap':
        return 1
      default:
        return -1
    }
  }
  return
}

export interface TextOverflowValue {
  overflow: TextOverflow
}

export function textOverflowToFrameNodeTextOverflow(value: ICSSStyleValue): TextOverflowValue | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'clip':
        return {
          overflow: TextOverflow.Clip
        } as TextOverflowValue
      case 'ellipsis':
        return {
          overflow: TextOverflow.Ellipsis
        } as TextOverflowValue
    }
  }
  return
}

export function textDecorationLineToFrameNodeTextDecorationType(value: ICSSStyleValue): TextDecorationType | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'none':
        return TextDecorationType.None
      case 'underline':
        return TextDecorationType.Underline
      case 'line-through':
        return TextDecorationType.LineThrough
      case 'overline':
        return TextDecorationType.Overline
    }
  }
  return
}

export function textDecorationStyleToFrameNodeTextDecorationStyle(value: ICSSStyleValue): TextDecorationStyle | undefined {
  if (value instanceof CSSKeywordValue) {
    switch (value.value) {
      case 'solid':
        return TextDecorationStyle.SOLID
      case 'double':
        return TextDecorationStyle.DOUBLE
      case 'dotted':
        return TextDecorationStyle.DOTTED
      case 'dashed':
        return TextDecorationStyle.DASHED
      case 'wavy':
        return TextDecorationStyle.WAVY
    }
  }
  return
}