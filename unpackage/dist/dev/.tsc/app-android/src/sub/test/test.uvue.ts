import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { ref } from 'vue';


const __sfc__ = defineComponent({
  __name: 'test',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const optionKeys = ref<string[]>([]);
const queryOptions = ref<UTSJSONObject | null>(null);

onLoad((options: UTSJSONObject | null) => {
  console.log('test page onLoad options:', options, " at src/sub/test/test.uvue:42");
  if (options != null) {
    queryOptions.value = options;
    optionKeys.value = UTSJSONObject.keys(options);
  }
});

function getOptionValue(key: string): string {
  const options = queryOptions.value;
  if (options != null) {
    const val = options[key];
    if (val != null) {
      return `${val}`;
    }
  }
  return '';
}

return (): any | null => {

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({ "navigation-bar-title-text": '测试' }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "p-_b5px_B min-h-screen bg-_b_hf8fafc_B" }), [
            _cE("view", _uM({ class: "bg-white rounded-lg p-_b5px_B shadow-sm border-_b1px_B border-solid border-_b_he2e8f0_B" }), [
              _cE("text", _uM({ class: "text-_b20px_B font-bold text-_b_h1e293b_B" }), "URL Query 页面参数获取测试"),
              _cE("text", _uM({ class: "text-_b12px_B text-_b_h94a3b8_B mt-_b2px_B" }), "本页面用于展示并测试如何获取 URL 中携带的 query 参数。"),
              _cE("view", _uM({ class: "mt-_b4px_B border-t-_b1px_B border-top-style-solid border-top-color-_b_hf1f5f9_B pt-_b4px_B" }), [
                _cE("view", _uM({ class: "mb-_b4px_B" }), [
                  _cE("text", _uM({ class: "text-_b14px_B font-bold text-_b_h64748b_B" }), "解析到的参数详情：")
                ]),
                _cE(Fragment, null, RenderHelpers.renderList(optionKeys.value, (key, __key, __index, _cached): any => {
                  return _cE("view", _uM({
                    key: key,
                    class: "flex flex-row justify-between items-center py-_b2px_B border-b-_b1px_B border-bottom-style-solid border-bottom-color-_b_hf8fafc_B"
                  }), [
                    _cE("text", _uM({ class: "text-_b14px_B text-_b_h64748b_B font-medium" }), _tD(key) + ":", 1 /* TEXT */),
                    _cE("text", _uM({ class: "text-_b14px_B text-_b_h334155_B font-semibold" }), _tD(getOptionValue(key)), 1 /* TEXT */)
                  ])
                }), 128 /* KEYED_FRAGMENT */),
                optionKeys.value.length == 0
                  ? _cE("view", _uM({
                      key: 0,
                      class: "py-_b4px_B text-center"
                    }), [
                      _cE("text", _uM({ class: "text-_b14px_B text-_b_h94a3b8_B" }), "暂无任何 query 参数")
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
const GenSrcSubTestTestStyles = [_uM([["p-_b5px_B", _pS(_uM([["paddingTop", 5], ["paddingRight", 5], ["paddingBottom", 5], ["paddingLeft", 5]]))], ["bg-_b_hf8fafc_B", _pS(_uM([["backgroundColor", "#f8fafc"]]))], ["bg-white", _pS(_uM([["backgroundColor", "#ffffff"]]))], ["rounded-lg", _pS(_uM([["borderTopLeftRadius", "16rpx"], ["borderTopRightRadius", "16rpx"], ["borderBottomRightRadius", "16rpx"], ["borderBottomLeftRadius", "16rpx"]]))], ["shadow-sm", _pS(_uM([["--tw-inset-shadow", "0 0 #0000"], ["--tw-inset-ring-shadow", "0 0 #0000"], ["--tw-ring-offset-shadow", "0 0 #0000"], ["--tw-ring-shadow", "0 0 #0000"], ["--tw-shadow", "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"], ["boxShadow", "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)"]]))], ["border-_b1px_B", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["border-solid", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["border-_b_he2e8f0_B", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["text-_b20px_B", _pS(_uM([["fontSize", 20]]))], ["font-bold", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["text-_b_h1e293b_B", _pS(_uM([["color", "#1e293b"]]))], ["text-_b12px_B", _pS(_uM([["fontSize", 12]]))], ["text-_b_h94a3b8_B", _pS(_uM([["color", "#94a3b8"]]))], ["mt-_b2px_B", _pS(_uM([["marginTop", 2]]))], ["mt-_b4px_B", _pS(_uM([["marginTop", 4]]))], ["border-t-_b1px_B", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderTopWidth", 1]]))], ["pt-_b4px_B", _pS(_uM([["paddingTop", 4]]))], ["mb-_b4px_B", _pS(_uM([["marginBottom", 4]]))], ["text-_b14px_B", _pS(_uM([["fontSize", 14]]))], ["text-_b_h64748b_B", _pS(_uM([["color", "#64748b"]]))], ["flex", _pS(_uM([["display", "flex"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["justify-between", _pS(_uM([["justifyContent", "space-between"]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["py-_b2px_B", _pS(_uM([["paddingTop", 2], ["paddingBottom", 2]]))], ["border-b-_b1px_B", _pS(_uM([["--tw-border-style", "solid"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderBottomWidth", 1]]))], ["font-medium", _pS(_uM([["--tw-font-weight", "500"], ["fontWeight", 500]]))], ["text-_b_h334155_B", _pS(_uM([["color", "#334155"]]))], ["font-semibold", _pS(_uM([["--tw-font-weight", "600"], ["fontWeight", 600]]))], ["py-_b4px_B", _pS(_uM([["paddingTop", 4], ["paddingBottom", 4]]))], ["text-center", _pS(_uM([["textAlign", "center"]]))]])]
