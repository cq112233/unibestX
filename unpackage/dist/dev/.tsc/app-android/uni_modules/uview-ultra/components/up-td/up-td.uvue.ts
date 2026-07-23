import { ref, onMounted, getCurrentInstance } from 'vue'
	import defProps from './td.uts'
	import { addUnit } from '../../libs/function/index'
	import { commonProps, useUltraUI } from '../../libs/composable/useUltraUI'
	
const __sfc__ = defineComponent({
  __name: 'up-td',

	  name: 'up-td'
	,
  props: {
		// 宽度，百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比
		width: {
			type: [String],
			default: defProps.getString('td.width')
		},
		textAlign: {
			type: String,
			default: defProps.getString('td.textAlign')
		},
		fontSize: {
			type: String,
			default: defProps.getString('td.fontSize')
		},
		borderColor: {
			type: String,
			default: defProps.getString('td.borderColor')
		},
		color: {
			type: String,
			default: defProps.getString('td.color')
		}
	},
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

	const { parent, getParent } = useUltraUI({
		padding: 0,
		align: '',
		borderColor: '',
		thStyle:{}
	})
	const instance = getCurrentInstance()!.proxy!
	
	// options
	
	
	// props
	const props = __props
	
	const tdStyle = ref<UTSJSONObject>({})
	
	const tdTextStyle = ref<UTSJSONObject>({})
	
	// 在组件挂载后设置样式
	onMounted(() => {
		// 获取父组件up-table
		getParent('up-table', instance)
		if (parent.value != null) {
			// 将父组件的相关参数，合并到本组件
			let style: UTSJSONObject = {__$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-td/up-td.uvue", 63, 8),}
			let styleText: UTSJSONObject = {__$originalPosition: new UTSSourceMapPosition("styleText", "uni_modules/uview-ultra/components/up-td/up-td.uvue", 64, 8),}
			let parentProps = parent.value.$callMethod('getProps') as UTSJSONObject
			if (props.width != "auto") style['flex'] = `0 0 ${props.width}`
			styleText['textAlign'] = parentProps.getString('align')
			styleText['fontSize'] = addUnit(parentProps.getString('fontSize'))
			style['padding'] = parentProps.getString('padding')
			style['borderBottom'] = `solid 1px `+ parentProps.getString('borderColor')
			style['borderRight'] = `solid 1px `+ parentProps.getString('borderColor')
			styleText['color'] = parentProps.getString('color')
			if (props.textAlign != '') {
				styleText['textAlign'] = props.textAlign
			}
			if (props.fontSize != '') {
				styleText['fontSize'] = props.fontSize
			}
			if (props.borderColor != '') {
				style['borderColor'] = props.borderColor
			}
			if (props.color != '') {
				styleText['color'] = props.color
			}
			tdStyle.value = style
			tdTextStyle.value = styleText
		}
	})

return (): any | null => {

  return _cE("view", _uM({
    class: "up-td",
    style: _nS([tdStyle.value])
  }), [
    _cE("text", _uM({
      class: "up-td__text",
      style: _nS([tdTextStyle.value])
    }), [
      renderSlot(_ctx.$slots, "default")
    ], 4 /* STYLE */),
    renderSlot(_ctx.$slots, "content")
  ], 4 /* STYLE */)
}
}

})
export default __sfc__
export type UpTdComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpTdUpTdStyles = [_uM([["up-td", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["justifyContent", "center"], ["alignSelf", "stretch"], ["boxSizing", "border-box"], ["height", "100%"]]))], ["up-td__text", _uM([[".up-td ", _uM([["fontSize", 14], ["color", "#606266"]])]])]])]
