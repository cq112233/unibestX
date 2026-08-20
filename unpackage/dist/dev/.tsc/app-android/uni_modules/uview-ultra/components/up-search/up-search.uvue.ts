import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { addUnit, addStyle, deepMerge } from '../../libs/function/index.uts'


const __sfc__ = defineComponent({
  __name: 'up-search',
name: "up-search",
  props: {
	shape: {
		type: String,
		default: 'round'
	},
	bgColor: {
		type: String,
		default: '#f2f2f2'
	},
	placeholder: {
		type: String,
		default: '请输入关键字'
	},
	clearabled: {
		type: Boolean,
		default: true
	},
	focus: {
		type: Boolean,
		default: false
	},
	showAction: {
		type: Boolean,
		default: true
	},
	actionStyle: {
		type: Object,
		default: () => ({})
	},
	actionText: {
		type: String,
		default: '搜索'
	},
	inputAlign: {
		type: String,
		default: 'left'
	},
	inputStyle: {
		type: Object,
		default: () => ({})
	},
	disabled: {
		type: Boolean,
		default: false
	},
	borderColor: {
		type: String,
		default: 'transparent'
	},
	searchIconColor: {
		type: String,
		default: '#909399'
	},
	searchIconSize: {
		type: [Number, String],
		default: 22
	},
	color: {
		type: String,
		default: '#606266'
	},
	placeholderColor: {
		type: String,
		default: '#909399'
	},
	searchIcon: {
		type: String,
		default: 'search'
	},
	iconPosition: {
		type: String,
		default: 'left'
	},
	margin: {
		type: String,
		default: '0'
	},
	animation: {
		type: Boolean,
		default: false
	},
	modelValue: {
		type: [String, Number],
		default: ''
	},
	maxlength: {
		type: [String, Number],
		default: -1
	},
	height: {
		type: [String, Number],
		default: 34
	},
	label: {
		type: String,
		default: ''
	},
	adjustPosition: {
		type: Boolean,
		default: true
	},
	autoBlur: {
		type: Boolean,
		default: false
	},
	onlyClearableOnFocused: {
		type: Boolean,
		default: true
	},
	customStyle: {
		type: Object,
		default: () => ({})
	}
},
  emits: ['clear', 'search', 'custom', 'focus', 'blur', 'click', 'clickIcon', 'update:modelValue', 'change'],
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const keyword = ref<string>(props.modelValue.toString())
const show = ref<boolean>(false)
const focused = ref<boolean>(false)

watch((): any => props.modelValue, (nVal: any) => {
	keyword.value = nVal != null ? nVal.toString() : ''
})

const searchStyle = computed((): UTSJSONObject => {
	const base = { __$originalPosition: new UTSSourceMapPosition("base", "uni_modules/uview-ultra/components/up-search/up-search.uvue", 201, 8), 
		margin: props.margin
	} as UTSJSONObject
	const custom = addStyle(props.customStyle) as UTSJSONObject
	return deepMerge(base, custom) as UTSJSONObject
})

const contentStyle = computed((): UTSJSONObject => {
	return {
		backgroundColor: props.bgColor,
		borderRadius: props.shape == 'round' ? '100px' : '4px',
		borderColor: props.borderColor
	} as UTSJSONObject
})

const inputMergedStyle = computed((): UTSJSONObject => {
	const base = { __$originalPosition: new UTSSourceMapPosition("base", "uni_modules/uview-ultra/components/up-search/up-search.uvue", 217, 8), 
		pointerEvents: props.disabled ? 'none' : 'auto',
		textAlign: props.inputAlign,
		color: props.color,
		backgroundColor: props.bgColor,
		height: addUnit(props.height)
	} as UTSJSONObject
	const custom = (props.inputStyle ?? {}) as UTSJSONObject
	return deepMerge(base, custom) as UTSJSONObject
})

const actionCustomStyle = computed((): UTSJSONObject => {
	return (props.actionStyle ?? {}) as UTSJSONObject
})

const showActionBtn = computed<boolean>(() => {
	return !props.animation && props.showAction
})

const isShowClear = computed<boolean>(() => {
	if (!props.clearabled) {
		return false
	}
	if (props.onlyClearableOnFocused) {
		return !!focused.value && keyword.value != ''
	} else {
		return keyword.value != ''
	}
})

onMounted(() => {
	focused.value = props.focus
})

function inputChange(e: UniInputEvent) {
	keyword.value = e.detail.value
	emit('update:modelValue', keyword.value)
	emit('change', keyword.value)
}

function clear() {
	keyword.value = ''
	emit('update:modelValue', '')
	emit('change', '')
	nextTick(() => {
		emit('clear')
	})
}

function search(e: UniInputConfirmEvent) {
	emit('search', e.detail.value)
	try {
		uni.hideKeyboard()
	} catch (err) {}
}

function custom() {
	emit('custom', keyword.value)
	try {
		uni.hideKeyboard()
	} catch (err) {}
}

function getFocus() {
	focused.value = true
	if (props.animation && props.showAction) show.value = true
	emit('focus', keyword.value)
}

function blurFunc() {
	setTimeout(() => {
		focused.value = false
	}, 100)
	show.value = false
	emit('blur', keyword.value)
}

function clickHandler() {
	if (props.disabled) emit('click')
}

function clickIcon(e: UniPointerEvent) {
	emit('clickIcon', keyword.value)
	try {
		uni.hideKeyboard()
	} catch (err) {}
}

__expose({
	clear
})

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)

  return _cE("view", _uM({
    class: _nC(["up-search", [_ctx.iconPosition == 'right' ? 'up-search__reverse' : '']]),
    onClick: clickHandler,
    style: _nS(searchStyle.value)
  }), [
    _cE("view", _uM({
      class: "up-search__content",
      style: _nS(contentStyle.value)
    }), [
      isTrue(_ctx.$slots['label'] != null || _ctx.label != '')
        ? renderSlot(_ctx.$slots, "label", _uM({ key: 0 }), (): any[] => [
            _cE("text", _uM({ class: "up-search__content__label" }), _tD(_ctx.label), 1 /* TEXT */)
          ])
        : _cC("v-if", true),
      _cE("view", _uM({ class: "up-search__content__icon" }), [
        _cV(_component_up_icon, _uM({
          onClick: clickIcon,
          size: _ctx.searchIconSize,
          name: _ctx.searchIcon,
          color: _ctx.searchIconColor != '' ? _ctx.searchIconColor : _ctx.color
        }), null, 8 /* PROPS */, ["size", "name", "color"])
      ]),
      _cE("input", _uM({
        "confirm-type": "search",
        onBlur: blurFunc,
        value: keyword.value,
        onConfirm: search,
        onInput: inputChange,
        disabled: _ctx.disabled,
        onFocus: getFocus,
        focus: _ctx.focus,
        maxlength: _ctx.maxlength,
        "adjust-position": _ctx.adjustPosition,
        "auto-blur": _ctx.autoBlur,
        "placeholder-class": "up-search__content__input--placeholder",
        placeholder: _ctx.placeholder,
        "placeholder-style": `color: ${_ctx.placeholderColor}`,
        class: "up-search__content__input",
        type: "text",
        style: _nS(inputMergedStyle.value)
      }), null, 44 /* STYLE, PROPS, NEED_HYDRATION */, ["value", "disabled", "focus", "maxlength", "adjust-position", "auto-blur", "placeholder", "placeholder-style"]),
      isTrue(isShowClear.value)
        ? _cE("view", _uM({
            key: 1,
            class: "up-search__content__icon up-search__content__close",
            onClick: clear
          }), [
            _cV(_component_up_icon, _uM({
              name: "close",
              size: "11",
              color: "#ffffff",
              customStyle: "line-height: 12px"
            }))
          ])
        : _cC("v-if", true),
      renderSlot(_ctx.$slots, "inputRight")
    ], 4 /* STYLE */),
    _cE("text", _uM({
      style: _nS(actionCustomStyle.value),
      class: _nC(["up-search__action", [(showActionBtn.value || show.value) ? 'up-search__action--active' : '']]),
      onClick: withModifiers(custom, ["stop","prevent"])
    }), _tD(_ctx.actionText), 7 /* TEXT, CLASS, STYLE */)
  ], 6 /* CLASS, STYLE */)
}
}

})
export default __sfc__
export type UpSearchComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpSearchUpSearchStyles = [_uM([["up-search", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["up-search__content", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["paddingTop", 0], ["paddingRight", 10], ["paddingBottom", 0], ["paddingLeft", 10], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["justifyContent", "space-between"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "rgba(0,0,0,0)"], ["borderRightColor", "rgba(0,0,0,0)"], ["borderBottomColor", "rgba(0,0,0,0)"], ["borderLeftColor", "rgba(0,0,0,0)"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"], ["overflow", "hidden"]]))], ["up-search__content__icon", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"]]))], ["up-search__content__label", _pS(_uM([["color", "#303133"], ["fontSize", 14], ["marginTop", 0], ["marginRight", 4], ["marginBottom", 0], ["marginLeft", 4]]))], ["up-search__content__close", _pS(_uM([["width", 20], ["height", 20], ["borderTopLeftRadius", 100], ["borderTopRightRadius", 100], ["borderBottomRightRadius", 100], ["borderBottomLeftRadius", 100], ["backgroundColor", "#C6C7CB"], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"], ["transform", "scale(0.82)"]]))], ["up-search__content__input", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["fontSize", 14], ["lineHeight", 1], ["marginTop", 0], ["marginRight", 5], ["marginBottom", 0], ["marginLeft", 5], ["color", "#303133"]]))], ["up-search__content__input--placeholder", _pS(_uM([["color", "#909193"]]))], ["up-search__action", _pS(_uM([["fontSize", 14], ["color", "#303133"], ["width", 0], ["overflow", "hidden"], ["transitionProperty", "width"], ["transitionDuration", "0.3s"], ["whiteSpace", "nowrap"], ["textAlign", "center"]]))], ["up-search__action--active", _pS(_uM([["width", 40], ["marginLeft", 5]]))], ["@TRANSITION", _uM([["up-search__action", _uM([["property", "width"], ["duration", "0.3s"]])]])]])]
