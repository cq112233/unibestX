import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_line from '@/uni_modules/uview-ultra/components/up-line/up-line.uvue'
import { computed } from 'vue'
	import defProps from './cell'
	import { addStyle } from '../../libs/function/index'
	import { empty as _testEmpty } from '../../libs/function/test'
	// props
	
const __sfc__ = defineComponent({
  __name: 'up-cell',

		name: "up-cell"
	,
  props: {
		title: {
			type: String,
			default: defProps.getString('cell.title')
		},
		label: {
			type: String,
			default: defProps.getString('cell.label')
		},
		value: {
			type: [String, Number],
			default: defProps.getString('cell.value')
		},
		icon: {
			type: String,
			default: defProps.getString('cell.icon')
		},
		iconStyle: {
			type: [String, Object],
			default: defProps.getAny('cell.iconStyle')
		},
		rightIcon: {
			type: String,
			default: defProps.getString('cell.rightIcon')
		},
		rightIconStyle: {
			type: [String, Object],
			default: defProps.getAny('cell.rightIconStyle')
		},
		size: {
			type: String,
			default: defProps.getString('cell.size')
		},
		center: {
			type: Boolean,
			default: defProps.getBoolean('cell.center')
		},
		url: {
			type: String,
			default: defProps.getString('cell.url')
		},
		name: {
			type: [String, Number],
			default: defProps.getString('cell.name')
		},
		linkType: {
			type: String,
			default: defProps.getString('cell.linkType')
		},
		clickable: {
			type: Boolean,
			default: defProps.getBoolean('cell.clickable')
		},
		isLink: {
			type: Boolean,
			default: defProps.getBoolean('cell.isLink')
		},
		arrowDirection: {
			type: String,
			default: defProps.getString('cell.arrowDirection')
		},
		border: {
			type: Boolean,
			default: defProps.getBoolean('cell.border')
		},
		disabled: {
			type: Boolean,
			default: defProps.getBoolean('cell.disabled')
		},
		titleStyle: {
			type: Object,
			default: defProps.getAny('cell.titleStyle')
		},
	},
  emits: ['click'],
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

	const props = __props
	

	function emits(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

	const testEmpty = function(val: string|number) {
		return _testEmpty(val)
	}

	const titleTextStyle = computed(() => {
		return addStyle(props.titleStyle)
	})

	const clickHandler = (e: any) => {
		if (props.disabled) return
		emits('click', {
			name: props.name
		})
		// 如果配置了url(此props参数通过mixin引入)参数，跳转页面
		// openPage()
		if (!props.isLink) return
		if (props.url != '') {
			uni.navigateTo({
				url: props.url
			})
		}

		// 是否阻止事件传播
		// todo
		// this.stop && this.preventEvent(e)
	}

	__expose({
		testEmpty
	})

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_line = resolveEasyComponent("up-line",_easycom_up_line)

  return _cE("view", _uM({
    class: _nC(["up-cell", [_ctx.customClass]]),
    style: _nS([_ctx.$up.addStyle(_ctx.customStyle)]),
    "hover-class": (!_ctx.disabled && (_ctx.clickable || _ctx.isLink)) ? 'up-cell--clickable' : '',
    "hover-stay-time": 250,
    onClick: clickHandler
  }), [
    _cE("view", _uM({
      class: "up-cell__body",
      aclass: "[ center && 'up-cell--center', size === 'large' && 'up-cell__body--large']"
    }), [
      _cE("view", _uM({ class: "up-cell__body__content" }), [
        isTrue(_ctx.$slots['icon'] != null || _ctx.icon != '')
          ? _cE("view", _uM({
              key: 0,
              class: "up-cell__left-icon-wrap"
            }), [
              _ctx.$slots['icon'] != null
                ? renderSlot(_ctx.$slots, "icon", _uM({ key: 0 }))
                : _cV(_component_up_icon, _uM({
                    key: 1,
                    name: _ctx.icon,
                    "custom-style": _ctx.iconStyle,
                    size: _ctx.size === 'large' ? '22px' : '18px'
                  }), null, 8 /* PROPS */, ["name", "custom-style", "size"])
            ])
          : _cC("v-if", true),
        _cE("view", _uM({ class: "up-cell__title" }), [
          isTrue(_ctx.$slots['title'] != null && _ctx.title == '')
            ? renderSlot(_ctx.$slots, "title", _uM({ key: 0 }))
            : _cE("text", _uM({
                key: 1,
                class: "up-cell__title-text",
                style: _nS([titleTextStyle.value]),
                aclass: "[disabled && 'up-cell--disabled', size === 'large' && 'up-cell__title-text--large']"
              }), _tD(_ctx.title), 5 /* TEXT, STYLE */),
          renderSlot(_ctx.$slots, "label", {}, (): any[] => [
            isTrue(_ctx.label)
              ? _cE("text", _uM({
                  key: 0,
                  class: "up-cell__label",
                  aclass: "[disabled && 'up-cell--disabled', size === 'large' && 'up-cell__label--large']"
                }), _tD(_ctx.label), 1 /* TEXT */)
              : _cC("v-if", true)
          ])
        ])
      ]),
      renderSlot(_ctx.$slots, "value", {}, (): any[] => [
        testEmpty(_ctx.value) == false
          ? _cE("text", _uM({
              key: 0,
              class: "up-cell__value",
              aclass: "[disabled && 'up-cell--disabled', size === 'large' && 'up-cell__value--large']"
            }), _tD(_ctx.value), 1 /* TEXT */)
          : _cC("v-if", true)
      ]),
      isTrue(_ctx.$slots['right-icon'] != null || _ctx.isLink)
        ? _cE("view", _uM({
            key: 0,
            class: _nC(["up-cell__right-icon-wrap", [`up-cell__right-icon-wrap--${_ctx.arrowDirection}`]])
          }), [
            renderSlot(_ctx.$slots, "right-icon", {}, (): any[] => [
              isTrue(_ctx.rightIcon)
                ? _cV(_component_up_icon, _uM({
                    key: 0,
                    name: _ctx.rightIcon,
                    "custom-style": _ctx.rightIconStyle,
                    color: _ctx.disabled ? '#c8c9cc' : 'info',
                    size: _ctx.size === 'large' ? '18px' : '16px'
                  }), null, 8 /* PROPS */, ["name", "custom-style", "color", "size"])
                : _cC("v-if", true)
            ])
          ], 2 /* CLASS */)
        : _cC("v-if", true),
      _ctx.$slots['righticon'] != null
        ? _cE("view", _uM({
            key: 1,
            class: _nC(["up-cell__right-icon-wrap", [`up-cell__right-icon-wrap--${_ctx.arrowDirection}`]])
          }), [
            renderSlot(_ctx.$slots, "righticon")
          ], 2 /* CLASS */)
        : _cC("v-if", true)
    ]),
    isTrue(_ctx.border)
      ? _cV(_component_up_line, _uM({ key: 0 }))
      : _cC("v-if", true)
  ], 14 /* CLASS, STYLE, PROPS */, ["hover-class"])
}
}

})
export default __sfc__
export type UpCellComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpCellUpCellStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-cell__body", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["boxSizing", "border-box"], ["!paddingTop", 10], ["!paddingRight", 15], ["!paddingBottom", 10], ["!paddingLeft", 15], ["alignItems", "center"]]))], ["up-cell__body__content", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["up-cell__body--large", _pS(_uM([["!paddingTop", 13], ["!paddingBottom", 13]]))], ["up-cell__left-icon-wrap", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["!marginRight", 4]]))], ["up-cell__right-icon-wrap", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["!marginLeft", 4], ["transitionProperty", "transform"], ["transitionDuration", "0.3s"]]))], ["up-cell__right-icon-wrap--up", _pS(_uM([["transform", "rotate(-90deg)"]]))], ["up-cell__right-icon-wrap--down", _pS(_uM([["transform", "rotate(90deg)"]]))], ["up-cell__title", _pS(_uM([["!flexGrow", 1], ["!flexShrink", 1], ["!flexBasis", "0%"]]))], ["up-cell__title-text", _pS(_uM([["!fontSize", 15], ["!lineHeight", "22px"], ["!color", "#303133"]]))], ["up-cell__title-text--large", _pS(_uM([["!fontSize", 16]]))], ["up-cell__label", _pS(_uM([["!marginTop", 5], ["!fontSize", 12], ["!color", "#909193"], ["!lineHeight", "18px"]]))], ["up-cell__label--large", _pS(_uM([["!fontSize", 14]]))], ["up-cell__value", _pS(_uM([["textAlign", "right"], ["marginLeft", "auto"], ["!fontSize", 14], ["!lineHeight", "24px"], ["!color", "#606266"]]))], ["up-cell__value--large", _pS(_uM([["!fontSize", 15]]))], ["up-cell--clickable", _pS(_uM([["!backgroundColor", "#f3f4f6"]]))], ["up-cell--disabled", _pS(_uM([["!color", "#c8c9cc"]]))], ["up-cell--center", _pS(_uM([["alignItems", "center"]]))], ["@TRANSITION", _uM([["up-cell__right-icon-wrap", _uM([["property", "transform"], ["duration", "0.3s"]])]])]])]
