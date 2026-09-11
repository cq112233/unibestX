import _easycom_up_tag from '@/uni_modules/uview-ultra/components/up-tag/up-tag.uvue'
import { computed } from 'vue'


const __sfc__ = defineComponent({
  __name: 'up-coupon',
name: 'up-coupon',
  props: {
	amount: {
		type: [String, Number],
		default: ''
	},
	unit: {
		type: String,
		default: '￥'
	},
	unitPosition: {
		type: String,
		default: 'left'
	},
	limit: {
		type: String,
		default: ''
	},
	title: {
		type: String,
		default: '优惠券'
	},
	desc: {
		type: String,
		default: ''
	},
	time: {
		type: String,
		default: ''
	},
	actionText: {
		type: String,
		default: '使用'
	},
	shape: {
		type: String,
		default: 'coupon'
	},
	size: {
		type: String,
		default: 'medium'
	},
	circle: {
		type: Boolean,
		default: false
	},
	disabled: {
		type: Boolean,
		default: false
	},
	bgColor: {
		type: String,
		default: ''
	},
	color: {
		type: String,
		default: ''
	},
	type: {
		type: String,
		default: ''
	}
},
  emits: ['click'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const couponStyle = computed<UTSJSONObject>(() => {
	const style = {} as UTSJSONObject
	if (props.bgColor.length > 0) style['backgroundColor'] = props.bgColor
	return style
})

function hasType(): boolean {
	return props.type.length > 0
}

function handleClick() {
	if (props.disabled) return
	emit('click')
}

return (): any | null => {

const _component_up_tag = resolveEasyComponent("up-tag",_easycom_up_tag)

  return _cE("view", _uM({
    class: _nC(["weapp-tw-border up-coupon", [`up-coupon--${_ctx.shape}`, `up-coupon--${_ctx.type}`, `up-coupon--${_ctx.size}`, _uM({'up-coupon--disabled': _ctx.disabled})]]),
    style: _nS([couponStyle.value]),
    onClick: handleClick
  }), [
    _cE("view", _uM({ class: "weapp-tw-border up-coupon__content" }), [
      _cE("view", _uM({ class: "weapp-tw-border up-coupon__amount" }), [
        _ctx.unitPosition == 'left'
          ? renderSlot(_ctx.$slots, "unit", _uM({
              key: 0,
              unit: _ctx.unit,
              unitPosition: _ctx.unitPosition
            }), (): any[] => [
              _ctx.unitPosition == 'left'
                ? _cE("text", _uM({
                    key: 0,
                    class: "weapp-tw-border up-coupon__amount-unit"
                  }), _tD(_ctx.unit), 1 /* TEXT */)
                : _cC("v-if", true)
            ])
          : _cC("v-if", true),
        renderSlot(_ctx.$slots, "amount", _uM({ amount: _ctx.amount }), (): any[] => [
          _cE("text", _uM({ class: "weapp-tw-border up-coupon__amount-value" }), _tD(_ctx.amount), 1 /* TEXT */)
        ]),
        _ctx.unitPosition == 'right'
          ? renderSlot(_ctx.$slots, "unit", _uM({
              key: 1,
              unit: _ctx.unit,
              unitPosition: _ctx.unitPosition
            }), (): any[] => [
              _ctx.unitPosition == 'right'
                ? _cE("text", _uM({
                    key: 0,
                    class: "weapp-tw-border up-coupon__amount-unit"
                  }), _tD(_ctx.unit), 1 /* TEXT */)
                : _cC("v-if", true)
            ])
          : _cC("v-if", true),
        renderSlot(_ctx.$slots, "limit", _uM({ limit: _ctx.limit }), (): any[] => [
          isTrue(_ctx.limit)
            ? _cE("text", _uM({
                key: 0,
                class: "weapp-tw-border up-coupon__amount-limit"
              }), _tD(_ctx.limit), 1 /* TEXT */)
            : _cC("v-if", true)
        ])
      ]),
      _cE("view", _uM({ class: "weapp-tw-border up-coupon__info" }), [
        renderSlot(_ctx.$slots, "title", _uM({ title: _ctx.title }), (): any[] => [
          _cE("text", _uM({ class: "weapp-tw-border up-coupon__info-title" }), _tD(_ctx.title), 1 /* TEXT */)
        ]),
        renderSlot(_ctx.$slots, "desc", _uM({ desc: _ctx.desc }), (): any[] => [
          isTrue(_ctx.desc)
            ? _cE("text", _uM({
                key: 0,
                class: "weapp-tw-border up-coupon__info-desc"
              }), _tD(_ctx.desc), 1 /* TEXT */)
            : _cC("v-if", true)
        ]),
        renderSlot(_ctx.$slots, "time", _uM({ time: _ctx.time }), (): any[] => [
          isTrue(_ctx.time)
            ? _cE("text", _uM({
                key: 0,
                class: "weapp-tw-border up-coupon__info-time"
              }), _tD(_ctx.time), 1 /* TEXT */)
            : _cC("v-if", true)
        ])
      ]),
      _cE("view", _uM({ class: "weapp-tw-border up-coupon__action up-padding-right-20" }), [
        renderSlot(_ctx.$slots, "action", _uM({
          actionText: _ctx.actionText,
          circle: _ctx.circle
        }), (): any[] => [
          _cV(_component_up_tag, _uM({
            type: "error",
            text: _ctx.actionText,
            bgColor: hasType() ? 'transparent' : '#eb433d',
            borderColor: hasType() ? '#eee' : '#eb433d',
            borderRadius: "6px",
            size: "medium",
            class: "up-coupon__action-text",
            shape: _ctx.circle ? 'circle' : 'square'
          }), null, 8 /* PROPS */, ["text", "bgColor", "borderColor", "shape"])
        ])
      ])
    ]),
    _ctx.shape == 'envelope'
      ? _cE("view", _uM({
          key: 0,
          class: "weapp-tw-border up-coupon__rope"
        }))
      : _cC("v-if", true),
    renderSlot(_ctx.$slots, "default")
  ], 6 /* CLASS, STYLE */)
}
}

})
export default __sfc__
export type UpCouponComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpCouponUpCouponStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["up-coupon", _pS(_uM([["position", "relative"], ["overflow", "hidden"], ["borderTopLeftRadius", "16rpx"], ["borderTopRightRadius", "16rpx"], ["borderBottomRightRadius", "16rpx"], ["borderBottomLeftRadius", "16rpx"], ["backgroundColor", "#ffffff"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "#f0f1f4"], ["borderRightColor", "#f0f1f4"], ["borderBottomColor", "#f0f1f4"], ["borderLeftColor", "#f0f1f4"], ["width", "100%"]]))], ["up-coupon--coupon", _pS(_uM([["borderTopLeftRadius", "16rpx"], ["borderTopRightRadius", "16rpx"], ["borderBottomRightRadius", "16rpx"], ["borderBottomLeftRadius", "16rpx"], ["overflow", "hidden"]]))], ["up-coupon--envelope", _pS(_uM([["borderTopLeftRadius", "16rpx"], ["borderTopRightRadius", "16rpx"], ["borderBottomRightRadius", "16rpx"], ["borderBottomLeftRadius", "16rpx"]]))], ["up-coupon--card", _pS(_uM([["borderTopLeftRadius", "16rpx"], ["borderTopRightRadius", "16rpx"], ["borderBottomRightRadius", "16rpx"], ["borderBottomLeftRadius", "16rpx"]]))], ["up-coupon--small", _pS(_uM([["height", "160rpx"]]))], ["up-coupon--medium", _pS(_uM([["height", "180rpx"]]))], ["up-coupon--large", _pS(_uM([["height", "220rpx"]]))], ["up-coupon--disabled", _pS(_uM([["opacity", 0.5]]))], ["up-coupon__content", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "space-between"], ["paddingTop", "20rpx"], ["paddingRight", "20rpx"], ["paddingBottom", "20rpx"], ["paddingLeft", "20rpx"], ["height", "100%"], ["boxSizing", "border-box"]]))], ["up-coupon__amount", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "flex-end"], ["minWidth", "140rpx"]]))], ["up-coupon__amount-unit", _pS(_uM([["fontSize", "28rpx"], ["color", "#eb433d"], ["fontWeight", "bold"]]))], ["up-coupon__amount-value", _pS(_uM([["fontSize", "52rpx"], ["color", "#eb433d"], ["fontWeight", "bold"], ["lineHeight", 1]]))], ["up-coupon__amount-limit", _pS(_uM([["fontSize", "20rpx"], ["color", "#909193"], ["marginLeft", "8rpx"]]))], ["up-coupon__info", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["paddingTop", 0], ["paddingRight", "20rpx"], ["paddingBottom", 0], ["paddingLeft", "20rpx"], ["overflow", "hidden"]]))], ["up-coupon__info-title", _pS(_uM([["fontSize", "28rpx"], ["fontWeight", "bold"], ["color", "#303133"], ["marginBottom", "8rpx"], ["textOverflow", "ellipsis"]]))], ["up-coupon__info-desc", _pS(_uM([["fontSize", "22rpx"], ["color", "#909193"], ["marginBottom", "6rpx"], ["textOverflow", "ellipsis"]]))], ["up-coupon__info-time", _pS(_uM([["fontSize", "20rpx"], ["color", "#c0c4cc"]]))], ["up-coupon__action", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"]]))], ["up-coupon__rope", _pS(_uM([["position", "absolute"], ["top", "-10rpx"], ["right", "60rpx"], ["width", "6rpx"], ["height", "40rpx"], ["backgroundColor", "#ffd700"], ["borderTopLeftRadius", "3rpx"], ["borderTopRightRadius", "3rpx"], ["borderBottomRightRadius", "3rpx"], ["borderBottomLeftRadius", "3rpx"]]))]])]
