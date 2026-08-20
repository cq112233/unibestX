import { computed } from 'vue'
import { addStyle, addUnit, deepMerge, range } from '../../libs/function/index.uts'


const __sfc__ = defineComponent({
  __name: 'up-circle-progress',
name: 'up-circle-progress',
  props: {
	percentage: {
		type: [String, Number],
		default: 30
	},
	activeColor: {
		type: String,
		default: ''
	},
	inactiveColor: {
		type: String,
		default: '#e5e9f2'
	},
	width: {
		type: [String, Number],
		default: 80
	},
	strokeWidth: {
		type: [String, Number],
		default: 6
	},
	customStyle: {
		type: Object,
		default: () : UTSJSONObject => ({})
	}
},
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



function normalizeNumber(value: any | null, defaultValue: number = 0): number {
	if (typeof value == 'number') {
		return value as number
	}
	if (value == null) {
		return defaultValue
	}
	const parsed = parseFloat(value.toString())
	return isNaN(parsed) ? defaultValue : parsed
}

const props = __props

const isDefaultColor = computed<boolean>((): boolean => {
	return props.activeColor == ''
})

const percent = computed<number>(() => {
	return range(0, 100, normalizeNumber(props.percentage, 30))
})

const size = computed<string>(() => {
	return addUnit(props.width)
})

const stroke = computed<string>(() => {
	return addUnit(props.strokeWidth)
})

const rootStyle = computed((): UTSJSONObject => {
	const base = { __$originalPosition: new UTSSourceMapPosition("base", "uni_modules/uview-ultra/components/up-circle-progress/up-circle-progress.uvue", 93, 8), } as UTSJSONObject
	base['width'] = size.value
	base['height'] = size.value
	const custom = addStyle(props.customStyle) as UTSJSONObject
	return deepMerge(base, custom) as UTSJSONObject
})

const trackStyle = computed((): UTSJSONObject => {
	return {
		width: size.value,
		height: size.value,
		borderWidth: stroke.value,
		borderColor: props.inactiveColor
	} as UTSJSONObject
})

const textStyle = computed((): UTSJSONObject => {
	const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-circle-progress/up-circle-progress.uvue", 110, 8), } as UTSJSONObject
	if (props.activeColor != '') {
		style['color'] = props.activeColor
	}
	return style
})

function buildFillStyle(deg: number): UTSJSONObject {
	const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-circle-progress/up-circle-progress.uvue", 118, 8), } as UTSJSONObject
	style['width'] = size.value
	style['height'] = size.value
	style['borderWidth'] = stroke.value
	if (props.activeColor != '') {
		style['borderTopColor'] = props.activeColor
		style['borderRightColor'] = props.activeColor
	}
	style['borderBottomColor'] = 'transparent'
	style['borderLeftColor'] = 'transparent'
	style['transform'] = `rotate(${deg.toString()}deg)`
	return style
}

const rightStyle = computed((): UTSJSONObject => {
	let deg: number = percent.value * 3.6 - 135
	if (deg > 45) {
		deg = 45
	}
	if (deg < -135) {
		deg = -135
	}
	return buildFillStyle(deg)
})

const leftStyle = computed((): UTSJSONObject => {
	let deg: number = percent.value * 3.6 - 135
	if (deg < 45) {
		deg = 45
	}
	if (deg > 225) {
		deg = 225
	}
	return buildFillStyle(deg)
})

return (): any | null => {

  return _cE("view", _uM({
    class: "up-circle-progress",
    style: _nS(rootStyle.value)
  }), [
    _cE("view", _uM({
      class: "up-circle-progress__track",
      style: _nS(trackStyle.value)
    }), null, 4 /* STYLE */),
    percent.value > 0
      ? _cE("view", _uM({
          key: 0,
          class: "up-circle-progress__mask up-circle-progress__mask--right"
        }), [
          _cE("view", _uM({
            class: _nC(["up-circle-progress__fill up-circle-progress__fill--right", [isDefaultColor.value ? 'up-circle-progress__fill--primary' : '']]),
            style: _nS(rightStyle.value)
          }), null, 6 /* CLASS, STYLE */)
        ])
      : _cC("v-if", true),
    percent.value > 50
      ? _cE("view", _uM({
          key: 1,
          class: "up-circle-progress__mask up-circle-progress__mask--left"
        }), [
          _cE("view", _uM({
            class: _nC(["up-circle-progress__fill up-circle-progress__fill--left", [isDefaultColor.value ? 'up-circle-progress__fill--primary' : '']]),
            style: _nS(leftStyle.value)
          }), null, 6 /* CLASS, STYLE */)
        ])
      : _cC("v-if", true),
    _cE("view", _uM({ class: "up-circle-progress__content" }), [
      renderSlot(_ctx.$slots, "default", {}, (): any[] => [
        _cE("text", _uM({
          class: _nC(["up-circle-progress__text", [isDefaultColor.value ? 'up-circle-progress__text--primary' : '']]),
          style: _nS(textStyle.value)
        }), _tD(percent.value) + "%", 7 /* TEXT, CLASS, STYLE */)
      ])
    ])
  ], 4 /* STYLE */)
}
}

})
export default __sfc__
export type UpCircleProgressComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpCircleProgressUpCircleProgressStyles = [_uM([["up-circle-progress", _pS(_uM([["position", "relative"], ["display", "flex"], ["alignItems", "center"], ["justifyContent", "center"], ["boxSizing", "border-box"]]))], ["up-circle-progress__track", _pS(_uM([["position", "absolute"], ["top", 0], ["left", 0], ["boxSizing", "border-box"], ["borderTopLeftRadius", "50%"], ["borderTopRightRadius", "50%"], ["borderBottomRightRadius", "50%"], ["borderBottomLeftRadius", "50%"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["up-circle-progress__mask", _pS(_uM([["position", "absolute"], ["top", 0], ["width", "50%"], ["height", "100%"], ["overflow", "hidden"], ["boxSizing", "border-box"]]))], ["up-circle-progress__mask--right", _pS(_uM([["right", 0]]))], ["up-circle-progress__mask--left", _pS(_uM([["left", 0]]))], ["up-circle-progress__fill", _pS(_uM([["position", "absolute"], ["top", 0], ["boxSizing", "border-box"], ["borderTopLeftRadius", "50%"], ["borderTopRightRadius", "50%"], ["borderBottomRightRadius", "50%"], ["borderBottomLeftRadius", "50%"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"], ["borderBottomColor", "rgba(0,0,0,0)"], ["borderLeftColor", "rgba(0,0,0,0)"]]))], ["up-circle-progress__fill--primary", _pS(_uM([["borderTopColor", "var(--theme-color, #0957de)"], ["borderRightColor", "var(--theme-color, #0957de)"]]))], ["up-circle-progress__fill--right", _pS(_uM([["right", 0]]))], ["up-circle-progress__fill--left", _pS(_uM([["left", 0]]))], ["up-circle-progress__content", _pS(_uM([["position", "relative"], ["display", "flex"], ["alignItems", "center"], ["justifyContent", "center"], ["zIndex", 2]]))], ["up-circle-progress__text", _pS(_uM([["fontSize", 14], ["fontWeight", 500]]))], ["up-circle-progress__text--primary", _pS(_uM([["color", "var(--theme-color, #0957de)"]]))]])]
