import type { PropType } from 'vue'
import { computed } from 'vue'
import { commonProps, useUltraUI } from '../../libs/composable/useUltraUI'
import { addUnit, getPx } from '../../libs/function/index'
import defProps from './card.uts'

// options

const __sfc__ = defineComponent({
  __name: 'up-card',

  name: 'up-card'
,
  props: {
  // 与屏幕两侧是否留空隙
  full: {
    type: Boolean,
    default: defProps.getBoolean('card.full')
  },
  // 标题
  title: {
    type: String,
    default: defProps.getString('card.title')
  },
  // 标题颜色
  titleColor: {
    type: String,
    default: defProps.getString('card.titleColor')
  },
  // 标题字体大小
  titleSize: {
    type: [Number, String],
    default: defProps.getString('card.titleSize')
  },
  // 副标题
  subTitle: {
    type: String,
    default: defProps.getString('card.subTitle')
  },
  // 副标题颜色
  subTitleColor: {
    type: String,
    default: defProps.getString('card.subTitleColor')
  },
  // 副标题字体大小
  subTitleSize: {
    type: [Number, String],
    default: defProps.getBoolean('card.subTitleSize')
  },
  // 是否显示外部边框，只对full=false时有效(卡片与边框有空隙时)
  border: {
    type: Boolean,
    default: defProps.getBoolean('card.border')
  },
  // 用于标识点击了第几个
  index: {
    type: [Number, String, Object],
    default: defProps.getString('card.index')
  },
  // 用于隔开上下左右的边距，带单位的写法，如："30px 30px"，"20px 20px 30px 30px"
  margin: {
    type: String,
    default: defProps.getString('card.margin')
  },
  // card卡片的圆角
  borderRadius: {
    type: [Number, String],
    default: defProps.getString('card.borderRadius')
  },
  // 头部自定义样式，对象形式
  headStyle: {
    type: Object,
    default: defProps.getAny('card.headStyle') as UTSJSONObject
  },
  // 主体自定义样式，对象形式
  bodyStyle: {
    type: Object,
    default: defProps.getAny('card.bodyStyle') as UTSJSONObject
  },
  // 底部自定义样式，对象形式
  footStyle: {
    type: Object,
    default: defProps.getAny('card.footStyle') as UTSJSONObject
  },
  // 头部是否下边框
  headBorderBottom: {
    type: Boolean,
    default: defProps.getBoolean('card.headBorderBottom')
  },
  // 底部是否有上边框
  footBorderTop: {
    type: Boolean,
    default: defProps.getBoolean('card.footBorderTop')
  },
  // 标题左边的缩略图
  thumb: {
    type: String,
    default: defProps.getString('card.thumb')
  },
  // 缩略图宽高
  thumbWidth: {
    type: [String, Number],
    default: defProps.getString('card.thumbWidth')
  },
  // 缩略图是否为圆形
  thumbCircle: {
    type: Boolean,
    default: defProps.getBoolean('card.thumbCircle')
  },
  // 给head，body，foot的内边距
  padding: {
    type: [String, Number],
    default: defProps.getString('card.padding')
  },
  paddingHead: {
    type: [String, Number],
    default: defProps.getString('card.paddingHead')
  },
  paddingBody: {
    type: [String, Number],
    default: defProps.getString('card.paddingBody')
  },
  paddingFoot: {
    type: [String, Number],
    default: defProps.getString('card.paddingFoot')
  },
  // 是否显示头部
  showHead: {
    type: Boolean,
    default: defProps.getBoolean('card.showHead')
  },
  // 是否显示尾部
  showFoot: {
    type: Boolean,
    default: defProps.getBoolean('card.showFoot')
  },
  // 卡片外围阴影，字符串形式
  boxShadow: {
    type: String,
    default: defProps.getString('card.boxShadow')
  }
},
  emits: ['click', 'head-click', 'body-click', 'foot-click'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



// props
const props = __props

// ==================== computed ====================
const realThumb = computed((): string => {
  if (props.thumb == '') return ''
  return props.thumb
})

const hasBorderRadius = computed((): boolean => {
  const pxStr = getPx(props.borderRadius)
  return parseFloat(pxStr) > 0
})

const cardStyle = computed((): UTSJSONObject => {
  return {
    borderRadius: addUnit(props.borderRadius),
    margin: props.margin,
    boxShadow: props.boxShadow
  } as UTSJSONObject
})

const headPaddingStyle = computed((): UTSJSONObject => {
  const padVal = props.paddingHead != '' ? props.paddingHead : props.padding
  return { padding: addUnit(padVal) } as UTSJSONObject
})

const thumbStyle = computed((): UTSJSONObject => {
  return {
    height: addUnit(props.thumbWidth),
    width: addUnit(props.thumbWidth),
    borderRadius: props.thumbCircle ? '50px' : '4px'
  } as UTSJSONObject
})

const titleStyle = computed((): UTSJSONObject => {
  return {
    fontSize: addUnit(props.titleSize),
    color: props.titleColor
  } as UTSJSONObject
})

const subTitleStyle = computed((): UTSJSONObject => {
  return {
    fontSize: addUnit(props.subTitleSize),
    color: props.subTitleColor
  } as UTSJSONObject
})

const bodyPaddingStyle = computed((): UTSJSONObject => {
  const padVal = props.paddingBody != '' ? props.paddingBody : props.padding
  return { padding: addUnit(padVal) } as UTSJSONObject
})

const footPaddingStyle = computed((): UTSJSONObject => {
  const padVal = props.paddingFoot != '' ? props.paddingFoot : props.padding
  return { padding: addUnit(padVal) } as UTSJSONObject
})

// 定义事件
function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

// 方法
const click = () => {
  emit('click', props.index);
}

const headClick = () => {
  emit('head-click', props.index);
}

const bodyClick = () => {
  emit('body-click', props.index);
}

const footClick = () => {
  emit('foot-click', props.index);
}

return (): any | null => {

  return _cE("view", _uM({
    class: _nC(["up-card", _uM({ 'up-border': _ctx.border, 'up-card-full': _ctx.full,
			'up-card--border': hasBorderRadius.value })]),
    onClick: withModifiers(click, ["stop"]),
    style: _nS(cardStyle.value)
  }), [
    isTrue(_ctx.showHead)
      ? _cE("view", _uM({
          key: 0,
          class: _nC(["up-card__head", _uM({
				'up-border-bottom': _ctx.headBorderBottom
			})]),
          style: _nS([headPaddingStyle.value, (_ctx.headStyle ?? _uM<string, any | null>({})) as any]),
          onClick: headClick
        }), [
          _ctx.$slots['head'] == null
            ? _cE("view", _uM({
                key: 0,
                class: "up-flex up-row-between up-flex-between up-flex-items-center"
              }), [
                _ctx.title != ''
                  ? _cE("view", _uM({
                      key: 0,
                      class: "up-card__head--left up-flex up-flex-items-center up-line-11"
                    }), [
                      realThumb.value != ''
                        ? _cE("image", _uM({
                            key: 0,
                            src: realThumb.value,
                            class: "up-card__head--left__thumb",
                            mode: "aspectFill",
                            style: _nS(thumbStyle.value)
                          }), null, 12 /* STYLE, PROPS */, ["src"])
                        : _cC("v-if", true),
                      _cE("text", _uM({
                        class: "up-card__head--left__title up-line-1",
                        style: _nS(titleStyle.value)
                      }), _tD(_ctx.title), 5 /* TEXT, STYLE */)
                    ])
                  : _cC("v-if", true),
                _ctx.subTitle != ''
                  ? _cE("view", _uM({
                      key: 1,
                      class: "up-card__head--right up-line-1"
                    }), [
                      _cE("text", _uM({
                        class: "up-card__head__title__text",
                        style: _nS(subTitleStyle.value)
                      }), _tD(_ctx.subTitle), 5 /* TEXT, STYLE */)
                    ])
                  : _cC("v-if", true)
              ])
            : renderSlot(_ctx.$slots, "head", _uM({ key: 1 }))
        ], 6 /* CLASS, STYLE */)
      : _cC("v-if", true),
    _cE("view", _uM({
      onClick: bodyClick,
      class: "up-card__body",
      style: _nS([bodyPaddingStyle.value, (_ctx.bodyStyle ?? _uM<string, any | null>({})) as any])
    }), [
      renderSlot(_ctx.$slots, "body", {}, (): any[] => [
        renderSlot(_ctx.$slots, "default")
      ])
    ], 4 /* STYLE */),
    isTrue(_ctx.showFoot)
      ? _cE("view", _uM({
          key: 1,
          class: _nC(["up-card__foot", _uM({
				'up-border-top': _ctx.footBorderTop
			})]),
          onClick: footClick,
          style: _nS([footPaddingStyle.value, (_ctx.footStyle ?? _uM<string, any | null>({})) as any])
        }), [
          renderSlot(_ctx.$slots, "foot")
        ], 6 /* CLASS, STYLE */)
      : _cC("v-if", true)
  ], 6 /* CLASS, STYLE */)
}
}

})
export default __sfc__
export type UpCardComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpCardUpCardStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-card", _pS(_uM([["position", "relative"], ["overflow", "hidden"], ["backgroundColor", "#ffffff"], ["boxSizing", "border-box"]]))], ["up-card-full", _pS(_uM([["!marginLeft", 0], ["!marginRight", 0], ["width", "100%"]]))], ["up-card--border", _pS(_uM([["borderTopLeftRadius:after", "16rpx"], ["borderTopRightRadius:after", "16rpx"], ["borderBottomRightRadius:after", "16rpx"], ["borderBottomLeftRadius:after", "16rpx"]]))], ["up-card__head--left", _pS(_uM([["color", "#303133"]]))], ["up-card__head--left__thumb", _pS(_uM([["marginRight", "16rpx"]]))], ["up-card__head--left__title", _pS(_uM([["maxWidth", "400rpx"]]))], ["up-card__head--right", _pS(_uM([["color", "#909193"], ["marginLeft", "16rpx"]]))], ["up-card__body", _pS(_uM([["color", "#606266"]]))], ["up-card__foot", _pS(_uM([["color", "#909193"]]))]])]
