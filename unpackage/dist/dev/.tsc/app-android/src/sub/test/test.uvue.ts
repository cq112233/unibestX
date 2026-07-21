import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { ref } from 'vue'


const __sfc__ = defineComponent({
  __name: 'test',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const optionKeys = ref<string[]>([])
const queryOptions = ref<UTSJSONObject | null>(null)

onLoad((options: UTSJSONObject | null) => {
  console.log('test page onLoad options:', options, " at src/sub/test/test.uvue:79")
  if (options != null) {
    queryOptions.value = options
    optionKeys.value = UTSJSONObject.keys(options)
  }
})

function getOptionValue(key: string): string {
  const options = queryOptions.value
  if (options != null) {
    const val = options[key]
    if (val != null) {
      return `${val}`
    }
  }
  return ''
}

return (): any | null => {

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({ "navigation-bar-title-text": '' }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "p-5px min-h-screen bg-__f8fafc_" }), [
            _cE("view", _uM({ class: "bg-white rounded-lg p-5px shadow-sm border-width-1px border-style-solid border-color-__e2e8f0_" }), [
              _cE("text", _uM({ class: "text-20px font-bold text-__1e293b_" }), "URL Query 页面参数获取测试"),
              _cE("text", _uM({ class: "text-12px text-__94a3b8_ mt-2px" }), "本页面用于展示并测试如何获取 URL 中携带的 query 参数。"),
              _cE("view", _uM({ class: "mt-4px border-top-width-1px border-top-style-solid border-top-color-__f1f5f9_ pt-4px" }), [
                _cE("view", _uM({ class: "mb-4px" }), [
                  _cE("text", _uM({ class: "text-14px font-bold text-__64748b_" }), "解析到的参数详情：")
                ]),
                _cE(Fragment, null, RenderHelpers.renderList(optionKeys.value, (key, __key, __index, _cached): any => {
                  return _cE("view", _uM({
                    key: key,
                    class: "flex flex-row justify-between items-center py-2px border-bottom-width-1px border-bottom-style-solid border-bottom-color-__f8fafc_"
                  }), [
                    _cE("text", _uM({ class: "text-14px text-__64748b_ font-medium" }), _tD(key) + ":", 1 /* TEXT */),
                    _cE("text", _uM({ class: "text-14px text-__334155_ font-semibold" }), _tD(getOptionValue(key)), 1 /* TEXT */)
                  ])
                }), 128 /* KEYED_FRAGMENT */),
                optionKeys.value.length == 0
                  ? _cE("view", _uM({
                      key: 0,
                      class: "py-4px text-center"
                    }), [
                      _cE("text", _uM({ class: "text-14px text-__94a3b8_" }), "暂无任何 query 参数")
                    ])
                  : _cC("v-if", true)
              ])
            ])
          ])
        ]),
        _: 1 /* STABLE */
      }))
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcSubTestTestStyles = [_uM([["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["bg-white", _pS(_uM([["backgroundColor", "rgba(255,255,255,var(--un-bg-opacity,1))"]]))], ["border-bottom-color-__f8fafc_", _pS(_uM([["borderBottomColor", "#f8fafc"]]))], ["border-bottom-style-solid", _pS(_uM([["borderBottomStyle", "solid"]]))], ["border-bottom-width-1px", _pS(_uM([["borderBottomWidth", 1]]))], ["border-color-__e2e8f0_", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["border-style-solid", _pS(_uM([["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["border-top-color-__f1f5f9_", _pS(_uM([["borderTopColor", "#f1f5f9"]]))], ["border-top-style-solid", _pS(_uM([["borderTopStyle", "solid"]]))], ["border-top-width-1px", _pS(_uM([["borderTopWidth", 1]]))], ["border-width-1px", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["flex", _pS(_uM([["display", "flex"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["font-bold", _pS(_uM([["fontWeight", 700]]))], ["font-medium", _pS(_uM([["fontWeight", 500]]))], ["font-semibold", _pS(_uM([["fontWeight", 600]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-between", _pS(_uM([["justifyContent", "space-between"]]))], ["mb-4px", _pS(_uM([["marginBottom", 4]]))], ["mt-2px", _pS(_uM([["marginTop", 2]]))], ["mt-4px", _pS(_uM([["marginTop", 4]]))], ["p-5px", _pS(_uM([["paddingTop", 5], ["paddingRight", 5], ["paddingBottom", 5], ["paddingLeft", 5]]))], ["pt-4px", _pS(_uM([["paddingTop", 4]]))], ["py-2px", _pS(_uM([["paddingTop", 2], ["paddingBottom", 2]]))], ["py-4px", _pS(_uM([["paddingTop", 4], ["paddingBottom", 4]]))], ["rounded-lg", _pS(_uM([["borderTopLeftRadius", "var(--un-radius-lg-default,8rpx)"], ["borderTopRightRadius", "var(--un-radius-lg-default,8rpx)"], ["borderBottomRightRadius", "var(--un-radius-lg-default,8rpx)"], ["borderBottomLeftRadius", "var(--un-radius-lg-default,8rpx)"]]))], ["shadow-sm", _pS(_uM([["boxShadow", "var(--un-inset-shadow,0 0 #0000),var(--un-inset-ring-shadow,0 0 #0000),var(--un-ring-offset-shadow,0 0 #0000),var(--un-ring-shadow,0 0 #0000),var(--un-shadow,0 1rpx 3rpx 0 var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))))"], ["--un-shadow", "0 1rpx 3rpx 0rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1)))"]]))], ["text-__1e293b_", _pS(_uM([["color", "#1e293b"]]))], ["text-__334155_", _pS(_uM([["color", "#334155"]]))], ["text-__64748b_", _pS(_uM([["color", "#64748b"]]))], ["text-__94a3b8_", _pS(_uM([["color", "#94a3b8"]]))], ["text-12px", _pS(_uM([["fontSize", 12]]))], ["text-14px", _pS(_uM([["fontSize", 14]]))], ["text-20px", _pS(_uM([["fontSize", 20]]))], ["text-center", _pS(_uM([["textAlign", "center"]]))]])]
