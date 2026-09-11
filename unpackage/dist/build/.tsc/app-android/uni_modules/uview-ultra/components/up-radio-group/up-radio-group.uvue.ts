import { computed, provide } from 'vue'
	import { bem } from '../../libs/function/index'
	import { RADIO_GROUP_KEY } from './type.uts'
	import type { RadioGroupProps, RadioGroupProvide, RadioValue } from './type.uts'

	
const __sfc__ = defineComponent({
  __name: 'up-radio-group',
name: 'up-radio-group',
  props: {
    name: { type: String, required: false, default: '' },
    modelValue: { type: [String, Number, Boolean], required: false, default: '' },
    shape: { type: String, required: false, default: 'circle' },
    disabled: { type: Boolean, required: false, default: false },
    activeColor: { type: String, required: false, default: '#2979ff' },
    inactiveColor: { type: String, required: false, default: '#c8c9cc' },
    size: { type: [String, Number], required: false, default: 18 },
    placement: { type: String, required: false, default: 'row' },
    labelSize: { type: [String, Number], required: false, default: 14 },
    labelColor: { type: String, required: false, default: '#303133' },
    labelDisabled: { type: Boolean, required: false, default: false },
    iconColor: { type: String, required: false, default: '#ffffff' },
    iconSize: { type: [String, Number], required: false, default: 12 },
    iconPlacement: { type: String, required: false, default: 'left' },
    borderBottom: { type: Boolean, required: false, default: false }
  },
  emits: ['update:modelValue', 'change'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

	

	// 默认值逐字对齐 components/up-radio-group/radioGroup.uts，勿改：空串表示「未设置」
	const props = __props

	function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

	// 只读 computed：仅作为下发给子组件的响应式源。
	// 不要写 computed({ get, set }) —— uni-app X 运行时不支持该对象字面量形式，会在运行期抛
	// ClassCastException: UTSJSONObject cannot be cast to WritableComputedOptions，编译期无任何告警。
	// v-model 回写一律在下方直接 emit。
	const modelValue = computed<RadioValue>((): RadioValue => props.modelValue)

	const select = (name : RadioValue) => {
		if (name == null) {
			emit('update:modelValue', '')
			emit('change', '')
			return
		}
		emit('update:modelValue', name)
		emit('change', name)
	}

	provide(RADIO_GROUP_KEY, {
		modelValue,
		shape: computed(() => props.shape),
		disabled: computed(() => props.disabled),
		activeColor: computed(() => props.activeColor),
		inactiveColor: computed(() => props.inactiveColor),
		size: computed(() => props.size),
		placement: computed(() => props.placement),
		labelSize: computed(() => props.labelSize),
		labelColor: computed(() => props.labelColor),
		labelDisabled: computed(() => props.labelDisabled),
		iconColor: computed(() => props.iconColor),
		iconSize: computed(() => props.iconSize),
		iconPlacement: computed(() => props.iconPlacement),
		borderBottom: computed(() => props.borderBottom),
		select
	} as RadioGroupProvide)

	const bemClass = computed(() => {
		return bem('radio-group', [props.placement], [])
	})

	const groupStyle = computed<UTSJSONObject>((): UTSJSONObject => {
		const style = {} as UTSJSONObject
		style['display'] = 'flex'
		style['flexDirection'] = props.placement == 'column' ? 'column' : 'row'
		style['flexWrap'] = 'wrap'
		style['alignItems'] = 'center'
		return style
	})

return (): any | null => {

  return _cE("view", _uM({
    class: _nC(["weapp-tw-border up-radio-group", bemClass.value]),
    style: _nS(groupStyle.value)
  }), [
    renderSlot(_ctx.$slots, "default")
  ], 6 /* CLASS, STYLE */)
}
}

})
export default __sfc__
export type UpRadioGroupComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpRadioGroupUpRadioGroupStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["up-radio-group", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["up-radio-group--row", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["flexWrap", "wrap"], ["alignItems", "center"]]))], ["up-radio-group--column", _pS(_uM([["display", "flex"], ["flexDirection", "column"]]))]])]
