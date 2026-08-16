import { computed } from 'vue'
	import { fontData, IconsDataItem } from './uniicons_file'

	
const __sfc__ = defineComponent({
  __name: 'uni-icons',
name: "uni-icons",
  props: {
		type: {
			type: String,
			default: ''
		},
		color: {
			type: String,
			default: '#333333'
		},
		size: {
			type: [Number, String],
			default: 16
		},
		fontFamily: {
			type: String,
			default: ''
		}
	},
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

	

	const props = __props

	function getFontSize(size: number): string {
		return size + 'px'
	}

	const unicode = computed<string>(() => {
		const codes = fontData.find((item: IconsDataItem): boolean => item.font_class == props.type)
		if (codes != null) {
			return codes.unicode
		}
		return ''
	})

	const iconSize = computed<string>(() => {
		const size = props.size
		if (typeof size == 'string') {
			const reg = /^[0-9]*$/g
			return reg.test(size as string) ? '' + size + 'px' : '' + size
		}
		return getFontSize(size as number)
	})

	const styleObj = computed<UTSJSONObject>(() => {
		if (props.fontFamily != '') {
			return { color: props.color, fontSize: iconSize.value, fontFamily: props.fontFamily } as UTSJSONObject
		}
		return { color: props.color, fontSize: iconSize.value } as UTSJSONObject
	})

return (): any | null => {

  return _cE("text", _uM({
    class: "uni-icons",
    style: _nS(styleObj.value)
  }), _tD(unicode.value), 5 /* TEXT, STYLE */)
}
}

})
export default __sfc__
export type UniIconsComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUniIconsComponentsUniIconsUniIconsStyles = [_uM([["uni-icons", _pS(_uM([["fontFamily", "UniIconsFontFamily"], ["fontSize", 18], ["fontStyle", "normal"], ["color", "#333333"]]))], ["@FONT-FACE", _uM([["0", _uM([["fontFamily", "UniIconsFontFamily"], ["src", "url('/assets/uniicons.32e978a5.ttf')"]])]])]])]
