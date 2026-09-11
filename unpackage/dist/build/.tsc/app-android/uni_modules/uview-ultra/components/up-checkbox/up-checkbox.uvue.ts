import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import { computed, inject, ref, watch } from 'vue'
	import { addStyle, addUnit, deepMerge, error } from '../../libs/function/index'
	import config from '../../libs/config/config'
	import { CHECKBOX_GROUP_KEY } from '../up-checkbox-group/type.uts'
	import type { CheckboxGroupProvide } from '../up-checkbox-group/type.uts'
	import type { CheckboxProps } from './type.uts'

	
const __sfc__ = defineComponent({
  __name: 'up-checkbox',
name: 'up-checkbox',
  props: {
    name: { type: [String, Number, Boolean], required: false, default: '' },
    shape: { type: String, required: false, default: '' },
    size: { type: [String, Number], required: false, default: '' },
    checked: { type: Boolean, required: false, default: false },
    disabled: { type: [String, Boolean], required: false, default: '' },
    activeColor: { type: String, required: false, default: '' },
    inactiveColor: { type: String, required: false, default: '' },
    iconSize: { type: [String, Number], required: false, default: '' },
    iconColor: { type: String, required: false, default: '' },
    label: { type: [String, Number], required: false, default: '' },
    labelColor: { type: String, required: false, default: '' },
    labelSize: { type: [String, Number], required: false, default: '' },
    labelDisabled: { type: [String, Boolean], required: false, default: '' },
    customStyle: { type: UTSJSONObject, required: false, default: () : UTSJSONObject => ({}) },
    usedAlone: { type: Boolean, required: false, default: false }
  },
  emits: ['change', 'update:checked'],
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

	

	// 默认值逐字对齐 components/up-checkbox/checkbox.uts。空串表示「未设置，向 group 取值」，
	// 不要把 disabled / labelDisabled 改成 false —— false.toString() 是 'false' 而非 ''，
	// 会让组件不再向 group 取值，父子联动静默失效。
	const props = __props

	function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

	const group = inject<CheckboxGroupProvide | null>(CHECKBOX_GROUP_KEY, null)

	/** 未处于 group 内时的本地选中态 */
	const selfChecked = ref<boolean>(props.checked)

	/**
	 * prop 优先，其次取 group 下发值，最后回落默认值。
	 * 空串与 null 一律视为「未设置」。
	 * `?? ''` 是必需的封口：UTS 中对 any|null 调 .toString() 返回 String?，
	 * 不封口会把可空性传播到调用方。
	 */
	function pick(own : any | null, parent : any | null, fallback : string) : string {
		const o = own == null ? '' : (own.toString() ?? '')
		if (o != '') return o
		const p = parent == null ? '' : (parent.toString() ?? '')
		if (p != '') return p
		return fallback
	}

	/** group 存在且非独立使用时，读取 group 的某个字段 */
	function fromGroup(key : string) : any | null {
		if (props.usedAlone || group == null) return null
		if (key == 'modelValue') return group!.modelValue.value
		if (key == 'shape') return group!.shape.value
		if (key == 'disabled') return group!.disabled.value
		if (key == 'activeColor') return group!.activeColor.value
		if (key == 'inactiveColor') return group!.inactiveColor.value
		if (key == 'size') return group!.size.value
		if (key == 'placement') return group!.placement.value
		if (key == 'labelSize') return group!.labelSize.value
		if (key == 'labelColor') return group!.labelColor.value
		if (key == 'labelDisabled') return group!.labelDisabled.value
		if (key == 'iconColor') return group!.iconColor.value
		if (key == 'iconSize') return group!.iconSize.value
		if (key == 'iconPlacement') return group!.iconPlacement.value
		if (key == 'borderBottom') return group!.borderBottom.value
		return null
	}

	/** group 的 modelValue 是数组，判定「数组是否包含 props.name」 */
	const isChecked = computed<boolean>((): boolean => {
		const val = fromGroup('modelValue')
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
		return selfChecked.value
	})

	const elDisabled = computed<boolean>((): boolean => {
		const v = pick(props.disabled, fromGroup('disabled'), 'false')
		return v == 'true'
	})

	const elLabelDisabled = computed<boolean>((): boolean => {
		const v = pick(props.labelDisabled, fromGroup('labelDisabled'), 'false')
		return v == 'true'
	})

	const elSize = computed<string>((): string => {
		return pick(props.size, fromGroup('size'), '21')
	})

	const elIconSize = computed<string>((): string => {
		return pick(props.iconSize, fromGroup('iconSize'), '12')
	})

	const primaryColor = computed((): string => {
		const colorMap = config['color'] as UTSJSONObject
		const cfg = colorMap['up-primary'] as string | null
		return cfg != null && cfg != '' && cfg != '#2979ff' && cfg != '#3c9cff' ? cfg : '#37c2bc'
	})

	const elActiveColor = computed<string>((): string => {
		const c = pick(props.activeColor, fromGroup('activeColor'), '')
		if (c != '' && c != '#2979ff') {
			return c
		}
		return primaryColor.value
	})

	const elInactiveColor = computed<string>((): string => {
		return pick(props.inactiveColor, fromGroup('inactiveColor'), '#c8c9cc')
	})

	const elLabelColor = computed<string>((): string => {
		return pick(props.labelColor, fromGroup('labelColor'), '#606266')
	})

	const elShape = computed<string>((): string => {
		return pick(props.shape, fromGroup('shape'), 'square')
	})

	const elLabelSize = computed<string>((): string => {
		return addUnit(pick(props.labelSize, fromGroup('labelSize'), '15'))
	})

	const elIconColor = computed<string>((): string => {
		const iconColorStr = pick(props.iconColor, fromGroup('iconColor'), '#ffffff')
		if (elDisabled.value) {
			return isChecked.value ? elInactiveColor.value : 'transparent'
		}
		return isChecked.value ? iconColorStr : 'transparent'
	})

	const iconClasses = computed<string>((): string => {
		let classes : string[] = []
		classes.push('up-checkbox__icon-wrap--' + elShape.value)
		if (elDisabled.value) {
			classes.push('up-checkbox__icon-wrap--disabled')
		}
		if (isChecked.value && elDisabled.value) {
			classes.push('up-checkbox__icon-wrap--disabled--checked')
		}
		if (isChecked.value && !elDisabled.value) {
			classes.push('up-checkbox__icon-wrap--active')
		}
		return classes.join(' ')
	})

	const iconWrapStyle = computed<UTSJSONObject>((): UTSJSONObject => {
		const style = {} as UTSJSONObject
		const size = addUnit(elSize.value)
		style['width'] = size
		style['height'] = size
		style['borderWidth'] = '1px'
		style['borderStyle'] = 'solid'
		style['borderRadius'] = elShape.value == 'circle' ? '100px' : '3px'
		style['display'] = 'flex'
		style['flexDirection'] = 'row'
		style['alignItems'] = 'center'
		style['justifyContent'] = 'center'
		style['flexShrink'] = 0

		if (isChecked.value && !elDisabled.value) {
			style['backgroundColor'] = elActiveColor.value
			style['borderColor'] = elActiveColor.value
		} else if (elDisabled.value) {
			style['backgroundColor'] = '#ebedf0'
			style['borderColor'] = elInactiveColor.value
		} else {
			style['backgroundColor'] = '#ffffff'
			style['borderColor'] = elInactiveColor.value
		}

		const iconPlacement = fromGroup('iconPlacement')
		if (iconPlacement != null && iconPlacement.toString() == 'right') {
			style['marginRight'] = '0px'
		} else {
			style['marginRight'] = '6px'
		}
		return style
	})

	const labelStyle = computed<UTSJSONObject>((): UTSJSONObject => {
		const style = {} as UTSJSONObject
		style['color'] = elDisabled.value ? elInactiveColor.value : elLabelColor.value
		style['fontSize'] = elLabelSize.value
		style['lineHeight'] = elLabelSize.value
		style['marginLeft'] = '5px'
		style['marginRight'] = '12px'
		return style
	})

	// 必须在 checkboxStyle 之前声明：UTS 编译到 Kotlin 后不允许局部 val 前向引用，
	// 被 checkboxStyle 的箭头函数捕获时会报「找不到名称 iconPlacementClass」。
	const iconPlacementClass = computed<string>((): string => {
		const p = fromGroup('iconPlacement')
		if (p != null && p.toString() != '') {
			return 'up-checkbox-label--' + p.toString()
		}
		return 'up-checkbox-label--left'
	})

	const borderBottomClass = computed<string>((): string => {
		const borderBottom = fromGroup('borderBottom')
		const placement = fromGroup('placement')
		if (borderBottom != null && borderBottom.toString() == 'true' && placement != null && placement.toString() == 'column') {
			return 'up-border-bottom'
		}
		return ''
	})

	const checkboxStyle = computed<UTSJSONObject>((): UTSJSONObject => {
		const style = {} as UTSJSONObject
		style['display'] = 'flex'
		style['flexDirection'] = iconPlacementClass.value == 'up-checkbox-label--right' ? 'row-reverse' : 'row'
		style['alignItems'] = 'center'
		style['marginTop'] = '5px'
		style['marginBottom'] = '5px'
		const borderBottom = fromGroup('borderBottom')
		const placement = fromGroup('placement')
		if (borderBottom != null && borderBottom.toString() == 'true' && placement != null && placement.toString() == 'row') {
			error('检测到您将borderBottom设置为true，需要同时将up-checkbox-group的placement设置为column才有效')
		}
		if (borderBottom != null && borderBottom.toString() == 'true' && placement != null && placement.toString() == 'column') {
			style['paddingBottom'] = '8px'
		}
		return deepMerge(style, addStyle(props.customStyle)) as UTSJSONObject
	})

	/**
	 * checkbox 与 radio 的关键差异：**无论选中还是取消，都派发 change**，
	 * 载荷是新状态布尔值。不要照抄 radio 的 `if (!isChecked.value)`。
	 */
	function setCheckboxStatus() {
		const targetChecked = !isChecked.value
		if (!props.usedAlone && group != null) {
			group!.toggle(props.name != null ? props.name!.toString() : '', targetChecked)
		} else {
			selfChecked.value = targetChecked
		}
		emit('change', targetChecked)
		if (props.usedAlone) {
			emit('update:checked', targetChecked)
		}
	}

	function iconClickHandler(e : UniEvent) {
		e.stopPropagation()
		if (!elDisabled.value) {
			setCheckboxStatus()
		}
	}

	/** 横向两端排列时，点击组件即可触发选中事件 */
	function wrapperClickHandler(e : UniEvent) {
		const iconPlacement = fromGroup('iconPlacement')
		if (iconPlacement != null && iconPlacement.toString() == 'right') {
			iconClickHandler(e)
		}
	}

	function labelClickHandler(e : UniEvent) {
		e.stopPropagation()
		if (!elLabelDisabled.value && !elDisabled.value) {
			setCheckboxStatus()
		}
	}

	// 监听 checked 属性变化
	watch((): boolean => props.checked, (newVal : boolean) => {
		if (newVal != selfChecked.value) {
			selfChecked.value = newVal
		}
	})

	/** 保留 defineExpose 契约；原实现中的 parentData 初始化已随遗留机制删除 */
	const init = function() {}

	const getInternalState = () : UTSJSONObject => {
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
    class: _nC(["weapp-tw-border up-checkbox wtu-1s7f97t-0", [iconPlacementClass.value, borderBottomClass.value]]),
    style: _nS(checkboxStyle.value),
    onClick: withModifiers(wrapperClickHandler, ["stop"])
  }), [
    _cE("view", _uM({
      class: _nC(["weapp-tw-border up-checkbox__icon-wrap wtu-1s7f97t-0", iconClasses.value]),
      onClick: withModifiers(iconClickHandler, ["stop"]),
      style: _nS(iconWrapStyle.value)
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
        class: _nC(["weapp-tw-border up-checkbox__label", [elDisabled.value ? 'up-checkbox__label--disabled' : '']]),
        style: _nS(labelStyle.value),
        onClick: withModifiers(labelClickHandler, ["stop"])
      }), _tD(_ctx.label), 7 /* TEXT, CLASS, STYLE */)
    ])
  ], 6 /* CLASS, STYLE */)
}
}

})
export default __sfc__
export type UpCheckboxComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpCheckboxUpCheckboxStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["up-checkbox", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["overflow", "hidden"], ["alignItems", "center"], ["marginBottom", 5], ["marginTop", 5]]))], ["up-checkbox-label--left", _pS(_uM([["flexDirection", "row"]]))], ["up-checkbox-label--right", _pS(_uM([["flexDirection", "row-reverse"], ["justifyContent", "space-between"]]))], ["up-checkbox__icon-wrap", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"], ["marginRight", 6], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "#c8c9cc"], ["borderRightColor", "#c8c9cc"], ["borderBottomColor", "#c8c9cc"], ["borderLeftColor", "#c8c9cc"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["up-checkbox__icon-wrap--circle", _pS(_uM([["borderTopLeftRadius", 100], ["borderTopRightRadius", 100], ["borderBottomRightRadius", 100], ["borderBottomLeftRadius", 100]]))], ["up-checkbox__icon-wrap--square", _pS(_uM([["borderTopLeftRadius", 3], ["borderTopRightRadius", 3], ["borderBottomRightRadius", 3], ["borderBottomLeftRadius", 3]]))], ["up-checkbox__icon-wrap--checked", _pS(_uM([["backgroundColor", "#FF0000"], ["borderTopColor", "#2979ff"], ["borderRightColor", "#2979ff"], ["borderBottomColor", "#2979ff"], ["borderLeftColor", "#2979ff"]]))], ["up-checkbox__icon-wrap--active", _pS(_uM([["backgroundColor", "#2979ff"], ["borderTopColor", "#2979ff"], ["borderRightColor", "#2979ff"], ["borderBottomColor", "#2979ff"], ["borderLeftColor", "#2979ff"]]))], ["up-checkbox__icon-wrap--disabled", _pS(_uM([["backgroundColor", "#ebedf0"]]))], ["up-checkbox__icon-wrap--disabled--checked", _pS(_uM([["color", "#c8c9cc"]]))], ["up-checkbox__label", _pS(_uM([["marginLeft", 5], ["marginRight", 12], ["color", "#606266"], ["fontSize", 15]]))], ["up-checkbox__label--disabled", _pS(_uM([["color", "#c8c9cc"]]))], ["wtu-1s7f97t-0", _pS(_uM([["cursor", "pointer"]]))]])]
