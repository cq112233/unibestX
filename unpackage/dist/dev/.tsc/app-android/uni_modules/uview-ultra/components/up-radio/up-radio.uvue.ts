import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import { computed, inject, getCurrentInstance, nextTick } from 'vue'
import { addUnit, addStyle, os, deepMerge, formValidate } from '../../libs/function/index'


const __sfc__ = defineComponent({
  __name: 'up-radio',
name: 'up-radio',
  props: {
	name: {
		type: [String, Number, Boolean],
		default: ''
	},
	shape: {
		type: String,
		default: ''
	},
	disabled: {
		type: Boolean,
		default: false
	},
	labelDisabled: {
		type: Boolean,
		default: false
	},
	activeColor: {
		type: String,
		default: ''
	},
	inactiveColor: {
		type: String,
		default: ''
	},
	iconSize: {
		type: [String, Number],
		default: ''
	},
	labelSize: {
		type: [String, Number],
		default: ''
	},
	label: {
		type: [String, Number],
		default: ''
	},
	size: {
		type: [String, Number],
		default: ''
	},
	iconColor: {
		type: String,
		default: ''
	},
	labelColor: {
		type: String,
		default: ''
	},
	customStyle: {
		type: Object,
		default: () => ({})
	}
},
  emits: ['change'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}
const instance = getCurrentInstance()
const parentProps = inject<ComputedRef<UTSJSONObject> | null>('upRadioGroupProps', null)
const parentSelect = inject<((val: any) => void) | null>('upRadioGroupSelect', null)

const parentGroupProps = computed((): UTSJSONObject | null => {
	if (parentProps == null) return null
	return parentProps!.value
})

const checked = computed<boolean>(() => {
	if (parentGroupProps.value != null) {
		const groupVal = parentGroupProps.value!['modelValue']
		if (groupVal != null && props.name != null) {
			return groupVal.toString() == props.name.toString()
		}
	}
	return false
})

const elDisabled = computed<boolean>(() => {
	if (props.disabled) return true
	if (parentGroupProps.value != null) {
		return (parentGroupProps.value!['disabled'] as boolean | null) ?? false
	}
	return false
})

const elLabelDisabled = computed<boolean>(() => {
	if (props.labelDisabled) return true
	if (parentGroupProps.value != null) {
		return (parentGroupProps.value!['labelDisabled'] as boolean | null) ?? false
	}
	return false
})

const elSize = computed<string>(() => {
	if (props.size != '') return addUnit(props.size)
	if (parentGroupProps.value != null && (parentGroupProps.value!['size'] ?? '') != '') {
		return addUnit(parentGroupProps.value!['size']!)
	}
	return '21px'
})

const elIconSize = computed<string>(() => {
	if (props.iconSize != '') return addUnit(props.iconSize)
	if (parentGroupProps.value != null && (parentGroupProps.value!['iconSize'] ?? '') != '') {
		return addUnit(parentGroupProps.value!['iconSize']!)
	}
	return '12px'
})

const elActiveColor = computed<string>(() => {
	if (props.activeColor != '') return props.activeColor
	if (parentGroupProps.value != null && (parentGroupProps.value!['activeColor'] ?? '') != '') {
		return (parentGroupProps.value!['activeColor'] as string)
	}
	return ''
})

const elInactiveColor = computed<string>(() => {
	if (props.inactiveColor != '') return props.inactiveColor
	if (parentGroupProps.value != null && (parentGroupProps.value!['inactiveColor'] ?? '') != '') {
		return (parentGroupProps.value!['inactiveColor'] as string)
	}
	return '#c8c9cc'
})

const elLabelColor = computed<string>(() => {
	if (props.labelColor != '') return props.labelColor
	if (parentGroupProps.value != null && (parentGroupProps.value!['labelColor'] ?? '') != '') {
		return (parentGroupProps.value!['labelColor'] as string)
	}
	return '#606266'
})

const elShape = computed<string>(() => {
	if (props.shape != '') return props.shape
	if (parentGroupProps.value != null && (parentGroupProps.value!['shape'] ?? '') != '') {
		return (parentGroupProps.value!['shape'] as string)
	}
	return 'circle'
})

const elLabelSize = computed<string>(() => {
	if (props.labelSize != '') return addUnit(props.labelSize)
	if (parentGroupProps.value != null && (parentGroupProps.value!['labelSize'] ?? '') != '') {
		return addUnit(parentGroupProps.value!['labelSize']!)
	}
	return '15px'
})

const elIconColor = computed<string>(() => {
	let iconColorStr = '#ffffff'
	const parentColor = parentGroupProps.value != null ? (parentGroupProps.value!['iconColor'] as string | null) : null
	if (props.iconColor != '') {
		iconColorStr = props.iconColor
	} else if (parentColor != null && parentColor != '') {
		iconColorStr = parentColor
	}
	if (elDisabled.value) {
		return checked.value ? elInactiveColor.value : 'transparent'
	}
	return checked.value ? iconColorStr : 'transparent'
})

const elIconPlacement = computed<string>(() => {
	if (parentGroupProps.value != null && (parentGroupProps.value!['iconPlacement'] ?? '') != '') {
		return (parentGroupProps.value!['iconPlacement'] as string)
	}
	return 'left'
})

const elBorderBottom = computed<boolean>(() => {
	if (parentGroupProps.value != null) {
		return (parentGroupProps.value!['borderBottom'] as boolean | null) ?? false
	}
	return false
})

const elPlacement = computed<string>(() => {
	if (parentGroupProps.value != null) {
		return (parentGroupProps.value!['placement'] as string | null) ?? 'row'
	}
	return 'row'
})

const iconClasses = computed((): string => {
	let classes = ['up-radio__icon-wrap--' + elShape.value]
	if (elDisabled.value) {
		classes.push('up-radio__icon-wrap--disabled')
	}
	if (checked.value && elDisabled.value) {
		classes.push('up-radio__icon-wrap--disabled--checked')
	}
	if (checked.value && !elDisabled.value) {
		classes.push('up-radio__icon-wrap--checked')
	} else if (!checked.value && !elDisabled.value) {
		classes.push('up-radio__icon-wrap--unchecked')
	}
	return classes.join(' ')
})

const iconWrapStyle = computed<UTSJSONObject>(() => {
	const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-radio/up-radio.uvue", 244, 8), } as UTSJSONObject
	if (checked.value && !elDisabled.value) {
		if (elActiveColor.value != '') {
			style['backgroundColor'] = elActiveColor.value
			style['borderColor'] = elActiveColor.value
		}
	} else if (!checked.value && !elDisabled.value) {
		if (elInactiveColor.value != '' && elInactiveColor.value != '#c8c9cc') {
			style['borderColor'] = elInactiveColor.value
		}
	}
	if (elSize.value != '') {
		style['width'] = elSize.value
		style['height'] = elSize.value
	}
	if (elIconPlacement.value == 'right') {
		style['marginRight'] = 0
	}
	return style
})

const radioStyle = computed<UTSJSONObject>(() => {
	const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-radio/up-radio.uvue", 266, 8), } as UTSJSONObject
	if (elBorderBottom.value && elPlacement.value == 'column') {
		style['paddingBottom'] = os() == 'ios' ? '12px' : '8px'
	}
	return deepMerge(style, addStyle(props.customStyle)) as UTSJSONObject
})

function setRadioCheckedStatus(): void {
	if (parentSelect != null) {
		parentSelect!(props.name)
	}
	emit('change', props.name)
	nextTick(() => {
		if (instance?.proxy != null) {
			formValidate(instance!.proxy!, 'change')
		}
	})
}

function iconClickHandler(e: UniEvent): void {
	if (!elDisabled.value) {
		setRadioCheckedStatus()
	}
}

function wrapperClickHandler(e: UniEvent): void {
	if (!elLabelDisabled.value && !elDisabled.value) {
		setRadioCheckedStatus()
	}
}

function labelClickHandler(e: UniEvent): void {
	if (!elLabelDisabled.value && !elDisabled.value) {
		setRadioCheckedStatus()
	}
}

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)

  return _cE("view", _uM({
    class: _nC(["up-radio cursor-pointer", ['up-radio-label--' + elIconPlacement.value,
			(elBorderBottom.value && elPlacement.value == 'column') ? 'up-border-bottom' : '']]),
    onClick: withModifiers(wrapperClickHandler, ["stop"]),
    style: _nS(radioStyle.value)
  }), [
    _cE("view", _uM({
      class: _nC(["up-radio__icon-wrap cursor-pointer", iconClasses.value]),
      onClick: withModifiers(iconClickHandler, ["stop"]),
      style: _nS(iconWrapStyle.value)
    }), [
      renderSlot(_ctx.$slots, "icon", {}, (): any[] => [
        _cV(_component_up_icon, _uM({
          class: "up-radio__icon-wrap__icon",
          name: "checkbox-mark",
          size: elIconSize.value,
          color: elIconColor.value
        }), null, 8 /* PROPS */, ["size", "color"])
      ])
    ], 6 /* CLASS, STYLE */),
    _cE("text", _uM({
      class: _nC(["up-radio__label", [elDisabled.value ? 'up-radio__label--disabled' : '']]),
      onClick: withModifiers(labelClickHandler, ["stop"]),
      style: _nS(_uM({
				color: elDisabled.value ? elInactiveColor.value : elLabelColor.value,
				fontSize: elLabelSize.value,
				lineHeight: elLabelSize.value
			}))
    }), _tD(_ctx.label), 7 /* TEXT, CLASS, STYLE */)
  ], 6 /* CLASS, STYLE */)
}
}

})
export default __sfc__
export type UpRadioComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpRadioUpRadioStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-radio", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["overflow", "hidden"], ["alignItems", "center"], ["marginBottom", 5], ["marginTop", 5]]))], ["up-radio-label--left", _pS(_uM([["flexDirection", "row"]]))], ["up-radio-label--right", _pS(_uM([["flexDirection", "row-reverse"], ["justifyContent", "space-between"]]))], ["up-radio__icon-wrap", _pS(_uM([["boxSizing", "border-box"], ["transitionProperty", "borderColor,backgroundColor,color"], ["transitionDuration", "0.2s"], ["color", "rgba(0,0,0,0)"], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"], ["textAlign", "center"], ["marginRight", 6], ["fontSize", 20], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "#c8c9cc"], ["borderRightColor", "#c8c9cc"], ["borderBottomColor", "#c8c9cc"], ["borderLeftColor", "#c8c9cc"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["up-radio__icon-wrap--circle", _pS(_uM([["borderTopLeftRadius", 50], ["borderTopRightRadius", 50], ["borderBottomRightRadius", 50], ["borderBottomLeftRadius", 50]]))], ["up-radio__icon-wrap--square", _pS(_uM([["borderTopLeftRadius", 3], ["borderTopRightRadius", 3], ["borderBottomRightRadius", 3], ["borderBottomLeftRadius", 3]]))], ["up-radio__icon-wrap--unchecked", _pS(_uM([["backgroundColor", "#ffffff"], ["borderTopColor", "#c8c9cc"], ["borderRightColor", "#c8c9cc"], ["borderBottomColor", "#c8c9cc"], ["borderLeftColor", "#c8c9cc"]]))], ["up-radio__icon-wrap--checked", _pS(_uM([["color", "#ffffff"], ["!backgroundColor", "var(--theme-color, #0957de)"], ["!borderTopColor", "var(--theme-color, #0957de)"], ["!borderRightColor", "var(--theme-color, #0957de)"], ["!borderBottomColor", "var(--theme-color, #0957de)"], ["!borderLeftColor", "var(--theme-color, #0957de)"]]))], ["up-radio__icon-wrap--disabled", _pS(_uM([["!backgroundColor", "#ebedf0"], ["!borderTopColor", "#c8c9cc"], ["!borderRightColor", "#c8c9cc"], ["!borderBottomColor", "#c8c9cc"], ["!borderLeftColor", "#c8c9cc"]]))], ["up-radio__icon-wrap--disabled--checked", _pS(_uM([["!color", "#c8c9cc"]]))], ["up-radio__label", _pS(_uM([["marginLeft", 5], ["marginRight", 12], ["color", "#606266"], ["fontSize", 15]]))], ["up-radio__label--disabled", _pS(_uM([["color", "#c8c9cc"]]))], ["@TRANSITION", _uM([["up-radio__icon-wrap", _uM([["property", "borderColor,backgroundColor,color"], ["duration", "0.2s"]])]])]])]
