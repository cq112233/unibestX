import { computed } from 'vue'
import { addUnit, addStyle, deepMerge } from '../../libs/function/index'


const __sfc__ = defineComponent({
  __name: 'up-badge',
name: 'up-badge',
  props: {
	isDot: {
		type: Boolean,
		default: false
	},
	value: {
		type: [Number, String],
		default: ''
	},
	modelValue: {
		type: [Number, String],
		default: ''
	},
	show: {
		type: Boolean,
		default: true
	},
	max: {
		type: [Number, String],
		default: 999
	},
	type: {
		type: String,
		default: 'error'
	},
	showZero: {
		type: Boolean,
		default: false
	},
	bgColor: {
		type: String,
		default: ''
	},
	color: {
		type: String,
		default: '#ffffff'
	},
	shape: {
		type: String,
		default: 'circle'
	},
	numberType: {
		type: String,
		default: 'overflow'
	},
	offset: {
		type: Array as PropType<Array<any>>,
		default: () => [] as Array<any>
	},
	inverted: {
		type: Boolean,
		default: false
	},
	absolute: {
		type: Boolean,
		default: false
	},
	customStyle: {
		type: Object,
		default: () => ({})
	}
},
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

const badgeStyle = computed<UTSJSONObject>(() => {
	const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-badge/up-badge.uvue", 84, 8), } as UTSJSONObject
	if (props.color != '') {
		style['color'] = props.color
	}
	if (props.bgColor != '' && !props.inverted) {
		style['backgroundColor'] = props.bgColor
	}
	if (props.absolute) {
		style['position'] = 'absolute'
		let offsetArray = props.offset
		if (offsetArray.length > 0) {
			const top = offsetArray[0]
			style['top'] = addUnit(top)
			if (offsetArray.length == 2) {
				style['right'] = addUnit(offsetArray[1])
			} else {
				style['right'] = addUnit(top)
			}
		}
	}
	return style
})

const computedBadgeStyle = computed((): UTSJSONObject => {
	const custom = addStyle(props.customStyle) as UTSJSONObject
	const badge = badgeStyle.value
	return deepMerge(badge, custom) as UTSJSONObject
})

const showValue = computed<string>(() => {
	let valueReturn = ''
	const valStr = props.value != '' ? props.value.toString() : (props.modelValue != '' ? props.modelValue.toString() : '0')
	switch (props.numberType.toString()) {
		case 'overflow':
			valueReturn = parseInt(valStr) > parseInt(props.max.toString()) ? props.max.toString() + '+' : valStr
			break
		case 'ellipsis':
			valueReturn = parseInt(valStr) > parseInt(props.max.toString()) ? '...' : valStr
			break
		case 'limit':
			valueReturn = parseInt(valStr) > 999
				? (parseInt(valStr) >= 9999 ? (Math.floor(parseInt(valStr) / 1e4 * 100) / 100).toString() + 'w' : (Math.floor(parseInt(valStr) / 1e3 * 100) / 100).toString() + 'k')
				: valStr
			break
		default:
			valueReturn = valStr
	}
	return valueReturn
})

return (): any | null => {

  return isTrue(_ctx.show && ((parseInt(_ctx.value.toString()) == 0 ? _ctx.showZero : true) || _ctx.isDot))
    ? _cE("text", _uM({
        key: 0,
        class: _nC(["up-badge", [_ctx.isDot ? 'up-badge--dot' : 'up-badge--not-dot',
			_ctx.inverted ? 'up-badge--inverted' : '',
			_ctx.shape === 'horn' ? 'up-badge--horn' : '',
			_ctx.inverted ? `up-badge--${_ctx.type}--inverted` : `up-badge--${_ctx.type}`]]),
        style: _nS(computedBadgeStyle.value)
      }), _tD(_ctx.isDot ? '' : showValue.value), 7 /* TEXT, CLASS, STYLE */)
    : _cC("v-if", true)
}
}

})
export default __sfc__
export type UpBadgeComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpBadgeUpBadgeStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-badge", _pS(_uM([["borderTopRightRadius", 100], ["borderTopLeftRadius", 100], ["borderBottomLeftRadius", 100], ["borderBottomRightRadius", 100], ["lineHeight", "11px"], ["textAlign", "center"], ["fontSize", 11], ["color", "#FFFFFF"]]))], ["up-badge--dot", _pS(_uM([["height", 8], ["width", 8]]))], ["up-badge--inverted", _pS(_uM([["fontSize", 13]]))], ["up-badge--not-dot", _pS(_uM([["paddingTop", 2], ["paddingRight", 5], ["paddingBottom", 2], ["paddingLeft", 5]]))], ["up-badge--horn", _pS(_uM([["borderBottomLeftRadius", 0]]))], ["up-badge--primary", _pS(_uM([["backgroundColor", "var(--theme-color, #0957de)"]]))], ["up-badge--primary--inverted", _pS(_uM([["color", "var(--theme-color, #0957de)"]]))], ["up-badge--error", _pS(_uM([["backgroundColor", "#f56c6c"]]))], ["up-badge--error--inverted", _pS(_uM([["color", "#f56c6c"]]))], ["up-badge--success", _pS(_uM([["backgroundColor", "#5ac725"]]))], ["up-badge--success--inverted", _pS(_uM([["color", "#5ac725"]]))], ["up-badge--info", _pS(_uM([["backgroundColor", "#909399"]]))], ["up-badge--info--inverted", _pS(_uM([["color", "#909399"]]))], ["up-badge--warning", _pS(_uM([["backgroundColor", "#f9ae3d"]]))], ["up-badge--warning--inverted", _pS(_uM([["color", "#f9ae3d"]]))]])]
