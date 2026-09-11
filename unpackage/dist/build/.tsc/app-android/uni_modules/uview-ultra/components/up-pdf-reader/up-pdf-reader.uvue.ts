import { ref, computed, watch, onMounted } from 'vue'


const __sfc__ = defineComponent({
  __name: 'up-pdf-reader',
name: 'up-pdf-reader',
  props: {
	src: {
		type: String,
		default: ''
	},
	height: {
		type: String,
		default: '500px'
	},
	baseUrl: {
		type: String,
		default: 'https://uview-plus.jiangruyi.com/h5'
	}
},
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

const baseUrlInner = ref<string>(props.baseUrl.length > 0 ? props.baseUrl : 'https://uview-plus.jiangruyi.com/h5')
const viewerUrl = ref<string>('')

const readerStyle = computed<UTSJSONObject>(() => {
	const style = {} as UTSJSONObject
	style['height'] = props.height
	return style
})

const webViewStyle = computed<UTSJSONObject>(() => {
	const style = {} as UTSJSONObject
	style['width'] = '100%'
	style['height'] = props.height
	return style
})

function updateViewerUrl(): void {
	const base = baseUrlInner.value.length > 0 ? baseUrlInner.value : 'https://uview-plus.jiangruyi.com/h5'
	viewerUrl.value = base + '/static/pdfjs/web/viewer.html?file=' + encodeURIComponent(props.src)
}

watch((): string => props.baseUrl, (val: string) => {
	baseUrlInner.value = val
	updateViewerUrl()
})

watch((): string => props.src, () => {
	updateViewerUrl()
})

onMounted(() => {
	updateViewerUrl()
})

return (): any | null => {

const _component_web_view = resolveComponent("web-view")

  return _cE("view", _uM({
    class: "weapp-tw-border up-pdf-reader",
    style: _nS(readerStyle.value)
  }), [
    _cV(_component_web_view, _uM({
      fullscreen: false,
      src: viewerUrl.value,
      style: _nS(webViewStyle.value),
      frameborder: "0"
    }), null, 8 /* PROPS */, ["src", "style"])
  ], 4 /* STYLE */)
}
}

})
export default __sfc__
export type UpPdfReaderComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpPdfReaderUpPdfReaderStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))]])]
