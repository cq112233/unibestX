import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import { computed, ref, watch, onMounted, inject, getCurrentInstance } from 'vue'
	import type { ComputedRef } from 'vue'
	import { addStyle, addUnit, deepMerge, formValidate, error } from '../../libs/function/index'
	import defProps from './checkbox.uts'
	import { useUltraUI } from '../../libs/composable/useUltraUI'
	
const __sfc__ = defineComponent({
  __name: 'up-checkbox',
name: 'up-checkbox',
  props: {
		// checkbox组件的标示符
		name: {
			type: [String, Number, Boolean],
			default: defProps.getAny('checkbox.name')
		},
		// 形状，square为方形，circle为圆型
		shape: {
			type: String,
			default: defProps.getString('checkbox.shape')
		},
		// 整体的大小
		size: {
			type: [String, Number],
			default: defProps.getAny('checkbox.size')
		},
		// 是否默认选中
		checked: {
			type: Boolean,
			default: defProps.getBoolean('checkbox.checked')
		},
		// 是否禁用
		disabled: {
			type: [String, Boolean],
			default: defProps.getAny('checkbox.disabled')
		},
		// 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
		activeColor: {
			type: String,
			default: defProps.getString('checkbox.activeColor')
		},
		// 未选中的颜色
		inactiveColor: {
			type: String,
			default: defProps.getString('checkbox.inactiveColor')
		},
		// 图标的大小，单位px
		iconSize: {
			type: [String, Number],
			default: defProps.getAny('checkbox.iconSize')
		},
		// 图标颜色
		iconColor: {
			type: String,
			default: defProps.getString('checkbox.iconColor')
		},
		// label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式
		label: {
			type: [String, Number],
			default: defProps.getAny('checkbox.label')
		},
		// label的颜色
		labelColor: {
			type: String,
			default: defProps.getString('checkbox.labelColor')
		},
		// label的字体大小，px单位
		labelSize: {
			type: [String, Number],
			default: defProps.getAny('checkbox.labelSize')
		},
		// 是否禁止点击提示语选中复选框
		labelDisabled: {
			type: [String, Boolean],
			default: defProps.getAny('checkbox.labelDisabled')
		},
		// 定义需要用到的外部样式
		customStyle: {
			type: Object,
			default: () => ({})
		},
		// 是否独立使用
		usedAlone: {
			type: Boolean,
			default: false
		}
	},
  emits: ['change', 'update:checked'],
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

	const { parent, parentData, getParentData } = useUltraUI()
	const instance = getCurrentInstance()?.proxy
	
	
	
	// 定义 props
	const props = __props
	
	// 定义 emit
	function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}
	
	const injectedParentProps = inject<ComputedRef<UTSJSONObject> | null>('upCheckboxGroupProps', null)
	const injectedParentToggle = inject<((name: string, checked: boolean) => void) | null>('upCheckboxGroupToggle', null)

	// 获取父组件属性的统一工具方法
	function getParentVal(key: string): any | null {
		if (!props.usedAlone) {
			if (injectedParentProps != null && injectedParentProps!.value != null) {
				const obj = injectedParentProps!.value
				if (obj != null && obj[key] != null) {
					return obj[key]
				}
			}
			if (parentData.value != null && parentData.value[key] != null) {
				return parentData.value[key]
			}
		}
		return null
	}

	// 定义响应式数据
	const selfChecked = ref(props.checked)

	const isChecked = computed((): boolean => {
		if (!props.usedAlone) {
			const val = getParentVal('modelValue')
			if (val != null) {
				const arr = val as any[]
				if (props.name != null) {
					for (let i = 0; i < arr.length; i++) {
						if (arr[i] != null && arr[i].toString() == props.name!.toString()) {
							return true
						}
					}
				}
				return false
			}
		}
		return selfChecked.value
	})
	
	// 是否禁用，如果父组件up-checkbox-group禁用的话，将会忽略子组件的配置
	const elDisabled = computed((): boolean => {
		let disabledVal = props.disabled
		if (disabledVal != null && disabledVal.toString() != '') {
			return disabledVal.toString() == 'true'
		}
		const p = getParentVal('disabled')
		if (p != null) {
			return p as boolean
		}
		return false
	})
	
	// 是否禁用label点击
	const elLabelDisabled = computed((): boolean => {
		let labelDisabledVal = props.labelDisabled
		if (labelDisabledVal != null && labelDisabledVal.toString() != '') {
			return labelDisabledVal.toString() == 'true'
		}
		const p = getParentVal('labelDisabled')
		if (p != null) {
			return p as boolean
		}
		return false
	})
	
	// 组件尺寸，对应size的值，默认值为21px
	const elSize = computed((): string => {
		if (props.size != null && props.size!.toString() != '') {
			return props.size!.toString()
		}
		const p = getParentVal('size')
		if (p != null && p.toString() != '') {
			return p.toString()
		}
		return '21'
	})
	
	// 组件的勾选图标的尺寸，默认12px
	const elIconSize = computed((): string => {
		if (props.iconSize != null && props.iconSize!.toString() != '') {
			return props.iconSize!.toString()
		}
		const p = getParentVal('iconSize')
		if (p != null && p.toString() != '') {
			return p.toString()
		}
		return '12'
	})
	
	// 组件选中激活时的颜色
	const elActiveColor = computed((): string => {
		const activeColorProp = props.activeColor
		if (activeColorProp != null && activeColorProp.toString() != '') {
			return activeColorProp.toString()
		}
		const p = getParentVal('activeColor')
		if (p != null && p.toString() != '') {
			return p.toString()
		}
		return '#2979ff'
	})
	
	// 组件选未中激活时的颜色
	const elInactiveColor = computed((): string => {
		const inactiveColorProp = props.inactiveColor
		if (inactiveColorProp != null && inactiveColorProp.toString() != '') {
			return inactiveColorProp.toString()
		}
		const p = getParentVal('inactiveColor')
		if (p != null && p.toString() != '') {
			return p.toString()
		}
		return '#c8c9cc'
	})
	
	// label的颜色
	const elLabelColor = computed((): string => {
		if (props.labelColor != null && props.labelColor.toString() != '') {
			return props.labelColor.toString()
		}
		const p = getParentVal('labelColor')
		if (p != null && p.toString() != '') {
			return p.toString()
		}
		return '#606266'
	})
	
	// 组件的形状
	const elShape = computed((): string => {
		if (props.shape != null && props.shape.toString() != '') {
			return props.shape.toString()
		}
		const p = getParentVal('shape')
		if (p != null && p.toString() != '') {
			return p.toString()
		}
		return 'circle'
	})
	
	// label大小
	const elLabelSize = computed((): string => {
		if (props.labelSize != null && props.labelSize!.toString() != '') {
			return addUnit(props.labelSize!.toString())
		}
		const p = getParentVal('labelSize')
		if (p != null && p.toString() != '') {
			return addUnit(p.toString())
		}
		return addUnit('15')
	})
	
	const elIconColor = computed((): string => {
		let iconColor = '#ffffff'
		if (props.iconColor.toString() != '') {
			iconColor = props.iconColor.toString()
		} else {
			const p = getParentVal('iconColor')
			if (p != null && p.toString() != '') {
				iconColor = p.toString()
			}
		}
		// 图标的颜色
		if (elDisabled.value) {
			// disabled状态下，已勾选的checkbox图标改为elInactiveColor
			return isChecked.value ? elInactiveColor.value : 'transparent'
		} else {
			return isChecked.value ? iconColor : 'transparent'
		}
	})
	
	const iconClasses = computed((): string => {
		let classes = [] as Array<string>
		// 组件的形状
		classes.push('up-checkbox__icon-wrap--' + elShape.value.toString())
		if (elDisabled.value) {
			classes.push('up-checkbox__icon-wrap--disabled')
		}
		if (isChecked.value && elDisabled.value) {
			classes.push('up-checkbox__icon-wrap--disabled--checked')
		}
		if (isChecked.value && !elDisabled.value && elActiveColor.value == '#2979ff') {
			classes.push('up-checkbox__icon-wrap--active')
		}
		return classes.join(' ')
	})
	
	const iconWrapStyle = computed((): any => {
		// checkbox的整体样式
		const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-checkbox/up-checkbox.uvue", 320, 9), } as UTSJSONObject
		if (isChecked.value && !elDisabled.value) {
			if (elActiveColor.value != '#2979ff') {
				style['backgroundColor'] = elActiveColor.value
				style['borderColor'] = elActiveColor.value
			}
		} else {
			style['backgroundColor'] = '#ffffff'
			style['borderColor'] = elInactiveColor.value
		}
		style['width'] = addUnit(elSize.value)
		style['height'] = addUnit(elSize.value)
		const iconPlacement = getParentVal('iconPlacement')
		if (iconPlacement != null && iconPlacement.toString() == 'right') {
			style['marginRight'] = 0
		}
		return style
	})
	
	const checkboxStyle = computed((): any => {
		const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-checkbox/up-checkbox.uvue", 340, 9), } as UTSJSONObject
		const borderBottom = getParentVal('borderBottom')
		const placement = getParentVal('placement')
		if (borderBottom != null && borderBottom.toString() == 'true' && placement != null && placement.toString() == 'row') {
			error('检测到您将borderBottom设置为true，需要同时将up-checkbox-group的placement设置为column才有效')
		}
		if (borderBottom != null && borderBottom.toString() == 'true' && placement != null && placement.toString() == 'column') {
			style['paddingBottom'] = '8px'
		}
		return deepMerge(style, addStyle(props.customStyle))
	})

	const iconPlacementClass = computed((): string => {
		const p = getParentVal('iconPlacement')
		if (p != null && p.toString() != '') {
			return 'up-checkbox-label--' + p.toString()
		}
		return 'up-checkbox-label--left'
	})

	const borderBottomClass = computed((): string => {
		const borderBottom = getParentVal('borderBottom')
		const placement = getParentVal('placement')
		if (borderBottom != null && borderBottom.toString() == 'true' && placement != null && placement.toString() == 'column') {
			return 'up-border-bottom'
		}
		return ''
	})
	
	// 初始化
	const init = function() {
		if (!props.usedAlone && injectedParentProps == null) {
			parentData.value = {
				iconSize: 12,
				labelDisabled: null,
				disabled: null,
				shape: 'square',
				activeColor: null,
				inactiveColor: null,
				size: 18,
				modelValue: null,
				iconColor: null,
				placement: 'row',
				borderBottom: false,
				iconPlacement: 'left'
			}
			if (instance != null) {
				getParentData('up-checkbox-group', instance!, false)
			}
		}
		if (props.checked) {
			selfChecked.value = true
		}
	}
	
	// 改变组件选中状态
	function setRadioCheckedStatus() {
		const targetChecked = !isChecked.value
		if (!props.usedAlone && injectedParentToggle != null) {
			injectedParentToggle(props.name != null ? props.name!.toString() : '', targetChecked)
		} else {
			selfChecked.value = targetChecked
			if (!props.usedAlone && parent.value != null && instance != null) {
				parent.value?.$callMethod('unCheckedOther', instance!)
			}
		}
		emit('change', targetChecked)
		if (props.usedAlone) {
			emit('update:checked', targetChecked)
		}
		setTimeout(() => {
			if (instance != null) {
				formValidate(instance!, 'change')
			}
		}, 10)
	}
	
	// 点击图标
	function iconClickHandler(e: UniEvent) {
		e.stopPropagation()
		if (!elDisabled.value) {
			setRadioCheckedStatus()
		}
	}
	
	// 横向两端排列时，点击组件即可触发选中事件
	function wrapperClickHandler(e: UniEvent) {
		const iconPlacement = getParentVal('iconPlacement')
		if (iconPlacement != null && iconPlacement.toString() == 'right') {
			iconClickHandler(e)
		}
	}
	
	// 点击label
	function labelClickHandler(e: UniEvent) {
		e.stopPropagation()
		if (!elLabelDisabled.value && !elDisabled.value) {
			setRadioCheckedStatus()
		}
	}
	
	// 监听 checked 属性变化
	watch((): boolean => props.checked, (newVal: boolean) => {
		if (newVal != selfChecked.value) {
			selfChecked.value = newVal
		}
	})
	
	onMounted(() => {
		init()
	})

	const getInternalState = (): UTSJSONObject => {
		return {
			name: props.name,
			isChecked: isChecked.value
		} as UTSJSONObject
	}

	__expose({
		init,
		getInternalState
	})

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)

  return _cE("view", _uM({
    class: _nC(["up-checkbox cursor-pointer", [iconPlacementClass.value, borderBottomClass.value]]),
    style: _nS([checkboxStyle.value]),
    onClick: withModifiers(wrapperClickHandler, ["stop"])
  }), [
    _cE("view", _uM({
      class: _nC(["up-checkbox__icon-wrap cursor-pointer", iconClasses.value]),
      onClick: withModifiers(iconClickHandler, ["stop"]),
      style: _nS([iconWrapStyle.value])
    }), [
      renderSlot(_ctx.$slots, "icon", {}, (): any[] => [
        _cV(_component_up_icon, _uM({
          class: "up-checkbox__icon-wrap__icon",
          name: "checkbox-mark",
          size: elIconSize.value,
          color: elIconColor.value
        }), null, 8 /* PROPS */, ["size", "color"])
      ])
    ], 6 /* CLASS, STYLE */),
    renderSlot(_ctx.$slots, "label", _uM({
      label: _ctx.label,
      elDisabled: elDisabled.value
    }), (): any[] => [
      _cE("text", _uM({
        onClick: withModifiers(labelClickHandler, ["stop"]),
        style: _nS(_uM({
					color: elDisabled.value ? elInactiveColor.value : elLabelColor.value,
					fontSize: elLabelSize.value,
					lineHeight: elLabelSize.value
				}))
      }), _tD(_ctx.label), 5 /* TEXT, STYLE */)
    ])
  ], 6 /* CLASS, STYLE */)
}
}

})
export default __sfc__
export type UpCheckboxComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpCheckboxUpCheckboxStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-checkbox", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["overflow", "hidden"], ["alignItems", "center"], ["marginBottom", 5], ["marginTop", 5]]))], ["up-checkbox-label--left", _pS(_uM([["flexDirection", "row"]]))], ["up-checkbox-label--right", _pS(_uM([["flexDirection", "row-reverse"], ["justifyContent", "space-between"]]))], ["up-checkbox__icon-wrap", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"], ["marginRight", 6], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "#c8c9cc"], ["borderRightColor", "#c8c9cc"], ["borderBottomColor", "#c8c9cc"], ["borderLeftColor", "#c8c9cc"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["up-checkbox__icon-wrap--circle", _pS(_uM([["borderTopLeftRadius", 99], ["borderTopRightRadius", 99], ["borderBottomRightRadius", 99], ["borderBottomLeftRadius", 99]]))], ["up-checkbox__icon-wrap--square", _pS(_uM([["borderTopLeftRadius", 3], ["borderTopRightRadius", 3], ["borderBottomRightRadius", 3], ["borderBottomLeftRadius", 3]]))], ["up-checkbox__icon-wrap--checked", _pS(_uM([["color", "#ffffff"], ["backgroundColor", "#FF0000"], ["borderTopColor", "#2979ff"], ["borderRightColor", "#2979ff"], ["borderBottomColor", "#2979ff"], ["borderLeftColor", "#2979ff"]]))], ["up-checkbox__icon-wrap--active", _pS(_uM([["backgroundColor", "var(--theme-color, #0957de)"], ["borderTopColor", "var(--theme-color, #0957de)"], ["borderRightColor", "var(--theme-color, #0957de)"], ["borderBottomColor", "var(--theme-color, #0957de)"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))], ["up-checkbox__icon-wrap--disabled", _pS(_uM([["!backgroundColor", "#ebedf0"]]))], ["up-checkbox__icon-wrap--disabled--checked", _pS(_uM([["!color", "#c8c9cc"]]))], ["up-checkbox__label", _pS(_uM([["marginLeft", 5], ["marginRight", 12], ["color", "#606266"], ["fontSize", 15]]))], ["up-checkbox__label--disabled", _pS(_uM([["color", "#c8c9cc"]]))]])]
