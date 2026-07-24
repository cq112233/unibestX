import type { PropType } from 'vue'
	import { computed } from 'vue'
	import { addUnit } from '../../libs/function/index';
	import defProps from './badge.uts'
	
	/**
	 * badge 徽标数
	 * @description 该组件一般用于图标右上角显示未读的消息数量，提示用户点击，有圆点和圆包含文字两种形式。
	 * @tutorial https://uview-plus.jiangruyi.com/components/badge.html
	 * 
	 * @property {Boolean} 			isDot 		是否显示圆点 （默认 false ）
	 * @property {String | Number} 	value 		显示的内容
	 * @property {Boolean} 			show 		是否显示 （默认 true ）
	 * @property {String | Number} 	max 		最大值，超过最大值会显示 '{max}+'  （默认999）
	 * @property {String} 			type 		主题类型，error|warning|success|primary （默认 'error' ）
	 * @property {Boolean} 			showZero	当数值为 0 时，是否展示 Badge （默认 false ）
	 * @property {String} 			bgColor 	背景颜色，优先级比type高，如设置，type参数会失效
	 * @property {String} 			color 		字体颜色 （默认 '#ffffff' ）
	 * @property {String} 			shape 		徽标形状，circle-四角均为圆角，horn-左下角为直角 （默认 'circle' ）
	 * @property {String} 			numberType	设置数字的显示方式，overflow|ellipsis|limit  （默认 'overflow' ）
	 * @property {Array}} 			offset		设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效
	 * @property {Boolean} 			inverted	是否反转背景和字体颜色（默认 false ）
	 * @property {Boolean} 			absolute	是否绝对定位（默认 false ）
	 * @property {Object}			customStyle	定义需要用到的外部样式
	 * @example <up-badge :type="type" :count="count"></up-badge>
	 */
	
	// options
	
const __sfc__ = defineComponent({
  __name: 'up-badge',

	  name: 'up-badge'
	,
  props: {
		// 是否显示圆点
		isDot: {
			type: Boolean,
			default: defProps.getBoolean('badge.isDot')
		},
		// 显示的内容
		value: {
			type: [Number, String],
			default: defProps.getString('badge.value')
		},
		// 显示的内容
		modelValue: {
			type: [Number, String],
			default: defProps.getString('badge.modelValue')
		},
		// 是否显示
		show: {
			type: Boolean,
			default: defProps.getBoolean('badge.show')
		},
		// 最大值，超过最大值会显示 '{max}+'
		max: {
			type: [Number, String],
			default: defProps.getNumber('badge.max')
		},
		// 主题类型，error|warning|success|primary
		type: {
			type: String,
			default: defProps.getString('badge.type')
		},
		// 当数值为 0 时，是否展示 Badge
		showZero: {
			type: Boolean,
			default: defProps.getBoolean('badge.showZero')
		},
		// 背景颜色，优先级比type高，如设置，type参数会失效
		bgColor: {
			type: String,
			default: defProps.getString('badge.bgColor')
		},
		// 字体颜色
		color: {
			type: String,
			default: defProps.getString('badge.color')
		},
		// 徽标形状，circle-四角均为圆角，horn-左下角为直角
		shape: {
			type: String,
			default: defProps.getString('badge.shape')
		},
		// 设置数字的显示方式，overflow|ellipsis|limit
		// overflow会根据max字段判断，超出显示`${max}+`
		// ellipsis会根据max判断，超出显示`${max}...`
		// limit会依据1000作为判断条件，超出1000，显示`${value/1000}K`，比如2.2k、3.34w，最多保留2位小数
		numberType: {
			type: String,
			default: defProps.getString('badge.numberType')
		},
		// 设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效
		offset: {
			type: Array as PropType<number[]>,
			default: defProps.getArray<number>('badge.offset')
		},
		// 是否反转背景和字体颜色
		inverted: {
			type: Boolean,
			default: defProps.getBoolean('badge.inverted')
		},
		// 是否绝对定位
		absolute: {
			type: Boolean,
			default: defProps.getBoolean('badge.absolute')
		}
	},
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

	

	// props
	const props = __props

	// 整个组件的样式
	const badgeStyle = computed(() => {
		const style: UTSJSONObject = {}
		if(props.color != '') {
			style['color'] = props.color
		}
		if (props.bgColor != '' && !props.inverted) {
			style['backgroundColor'] = props.bgColor
		}
		if (props.absolute) {
			style['position'] = 'absolute'
			let offsetArray = props.offset as number[]
			// 如果有设置offset参数
			if(offsetArray.length > 0) {
				// top和right分为为offset的第一个和第二个值，如果没有第二个值，则right等于top
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

	// 显示值
	const showValue = computed(():string => {
		let valueReturn = ''
		switch (props.numberType.toString()) {
			case "overflow":
				valueReturn = parseInt(props.value.toString()) > parseInt(props.max.toString()) ? props.max.toString() + "+" : props.value.toString()
				break;
			case "ellipsis":
				valueReturn = parseInt(props.value.toString()) > parseInt(props.max.toString()) ? "..." : props.value.toString()
				break;
			case "limit":
				valueReturn = parseInt(props.value.toString()) > 999
						?
							parseInt(props.value.toString()) >= 9999 ?
							(Math.floor(parseInt(props.value.toString()) / 1e4 * 100) / 100).toString() + "w"
							: (Math.floor(parseInt(props.value.toString()) / 1e3 * 100) / 100).toString() + "k"
						: props.value.toString()
				break;
			default:
				valueReturn = props.value.toString()
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
        style: _nS([_ctx.$upAddStyle(_ctx.customStyle), badgeStyle.value])
      }), _tD(_ctx.isDot ? '' : showValue.value), 7 /* TEXT, CLASS, STYLE */)
    : _cC("v-if", true)
}
}

})
export default __sfc__
export type UpBadgeComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpBadgeUpBadgeStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-badge", _pS(_uM([["borderTopRightRadius", 100], ["borderTopLeftRadius", 100], ["borderBottomLeftRadius", 100], ["borderBottomRightRadius", 100], ["lineHeight", "11px"], ["textAlign", "center"], ["fontSize", 11], ["color", "#FFFFFF"]]))], ["up-badge--dot", _pS(_uM([["height", 8], ["width", 8]]))], ["up-badge--inverted", _pS(_uM([["fontSize", 13]]))], ["up-badge--not-dot", _pS(_uM([["paddingTop", 2], ["paddingRight", 5], ["paddingBottom", 2], ["paddingLeft", 5]]))], ["up-badge--horn", _pS(_uM([["borderBottomLeftRadius", 0]]))], ["up-badge--primary", _pS(_uM([["backgroundColor", "var(--theme-color, #0957de)"]]))], ["up-badge--primary--inverted", _pS(_uM([["color", "var(--theme-color, #0957de)"]]))], ["up-badge--error", _pS(_uM([["backgroundColor", "#f56c6c"]]))], ["up-badge--error--inverted", _pS(_uM([["color", "#f56c6c"]]))], ["up-badge--success", _pS(_uM([["backgroundColor", "#5ac725"]]))], ["up-badge--success--inverted", _pS(_uM([["color", "#5ac725"]]))], ["up-badge--info", _pS(_uM([["backgroundColor", "#909399"]]))], ["up-badge--info--inverted", _pS(_uM([["color", "#909399"]]))], ["up-badge--warning", _pS(_uM([["backgroundColor", "#f9ae3d"]]))], ["up-badge--warning--inverted", _pS(_uM([["color", "#f9ae3d"]]))]])]
