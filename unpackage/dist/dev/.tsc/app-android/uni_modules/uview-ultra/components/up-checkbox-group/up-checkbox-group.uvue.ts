import { computed, provide, getCurrentInstance } from 'vue'
import { bem, addStyle, formValidate } from '../../libs/function/index'


const __sfc__ = defineComponent({
  __name: 'up-checkbox-group',
name: 'up-checkbox-group',
  props: {
	name: {
		type: String,
		default: ''
	},
	modelValue: {
		type: Array as PropType<Array<any>>,
		default: () => [] as Array<any>
	},
	shape: {
		type: String,
		default: 'circle'
	},
	disabled: {
		type: Boolean,
		default: false
	},
	activeColor: {
		type: String,
		default: ''
	},
	inactiveColor: {
		type: String,
		default: '#c8c9cc'
	},
	size: {
		type: [String, Number],
		default: 18
	},
	placement: {
		type: String,
		default: 'row'
	},
	labelSize: {
		type: [String, Number],
		default: 14
	},
	labelColor: {
		type: String,
		default: '#303133'
	},
	labelDisabled: {
		type: Boolean,
		default: false
	},
	iconColor: {
		type: String,
		default: '#ffffff'
	},
	iconSize: {
		type: [String, Number],
		default: 12
	},
	iconPlacement: {
		type: String,
		default: 'left'
	},
	borderBottom: {
		type: Boolean,
		default: false
	},
	customStyle: {
		type: Object,
		default: () => ({})
	}
},
  emits: ['update:modelValue', 'change'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}
const instance = getCurrentInstance()

const bemClass = computed(() => {
	return bem('checkbox-group', [props.placement], [])
})

const customStyleComputed = computed((): UTSJSONObject => {
	return addStyle(props.customStyle) as UTSJSONObject
})

function onCheckboxToggle(name: any) {
	const currentList = [...props.modelValue]
	const idx = currentList.findIndex((item: any): boolean => item.toString() == name.toString())
	if (idx > -1) {
		currentList.splice(idx, 1)
	} else {
		currentList.push(name)
	}
	emit('update:modelValue', currentList)
	emit('change', currentList)
	if (instance?.proxy != null) {
		formValidate(instance!.proxy!, 'change')
	}
}

const parentState = computed((): UTSJSONObject => {
	return {
		name: props.name,
		modelValue: props.modelValue,
		shape: props.shape,
		disabled: props.disabled,
		activeColor: props.activeColor,
		inactiveColor: props.inactiveColor,
		size: props.size,
		placement: props.placement,
		labelSize: props.labelSize,
		labelColor: props.labelColor,
		labelDisabled: props.labelDisabled,
		iconColor: props.iconColor,
		iconSize: props.iconSize,
		iconPlacement: props.iconPlacement,
		borderBottom: props.borderBottom,
	} as UTSJSONObject
})

provide('upCheckboxGroupProps', parentState)
provide('upCheckboxGroupToggle', onCheckboxToggle)

return (): any | null => {

  return _cE("view", _uM({
    class: _nC(["up-checkbox-group", bemClass.value]),
    style: _nS(customStyleComputed.value)
  }), [
    renderSlot(_ctx.$slots, "default")
  ], 6 /* CLASS, STYLE */)
}
}

})
export default __sfc__
export type UpCheckboxGroupComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpCheckboxGroupUpCheckboxGroupStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-checkbox-group", _pS(_uM([["display", "flex"], ["width", "100%"]]))], ["up-checkbox-group--row", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["flexWrap", "wrap"], ["alignItems", "center"], ["width", "100%"]]))], ["up-checkbox-group--column", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["width", "100%"]]))]])]
