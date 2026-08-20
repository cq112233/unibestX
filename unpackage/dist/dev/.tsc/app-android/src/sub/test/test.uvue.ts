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
          _cE("view", _uM({ class: "p-5px min-h-screen bg-_b_hf8fafc_B" }), [
            _cE("view", _uM({ class: "bg-white rounded-lg p-5px shadow-sm border-width-1px border-style-solid border-color-_b_he2e8f0_B" }), [
              _cE("text", _uM({ class: "text-20px font-bold text-_b_h1e293b_B" }), "URL Query 页面参数获取测试"),
              _cE("text", _uM({ class: "text-12px text-_b_h94a3b8_B mt-2px" }), "本页面用于展示并测试如何获取 URL 中携带的 query 参数。"),
              _cE("view", _uM({ class: "mt-4px border-top-width-1px border-top-style-solid border-top-color-_b_hf1f5f9_B pt-4px" }), [
                _cE("view", _uM({ class: "mb-4px" }), [
                  _cE("text", _uM({ class: "text-14px font-bold text-_b_h64748b_B" }), "解析到的参数详情：")
                ]),
                _cE(Fragment, null, RenderHelpers.renderList(optionKeys.value, (key, __key, __index, _cached): any => {
                  return _cE("view", _uM({
                    key: key,
                    class: "flex flex-row justify-between items-center py-2px border-bottom-width-1px border-bottom-style-solid border-bottom-color-_b_hf8fafc_B"
                  }), [
                    _cE("text", _uM({ class: "text-14px text-_b_h64748b_B font-medium" }), _tD(key) + ":", 1 /* TEXT */),
                    _cE("text", _uM({ class: "text-14px text-_b_h334155_B font-semibold" }), _tD(getOptionValue(key)), 1 /* TEXT */)
                  ])
                }), 128 /* KEYED_FRAGMENT */),
                optionKeys.value.length == 0
                  ? _cE("view", _uM({
                      key: 0,
                      class: "py-4px text-center"
                    }), [
                      _cE("text", _uM({ class: "text-14px text-_b_h94a3b8_B" }), "暂无任何 query 参数")
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
const GenSrcSubTestTestStyles = [_uM([["bg-_b_hf8fafc_B", _pS(_uM([["backgroundColor", "#f8fafc"]]))], ["bg-white", _pS(_uM([["backgroundColor", "#ffffff"]]))], ["shadow-sm", _pS(_uM([["--tw-inset-shadow", "0 0 #0000"], ["--tw-inset-ring-shadow", "0 0 #0000"], ["--tw-ring-offset-shadow", "0 0 #0000"], ["--tw-ring-shadow", "0 0 #0000"], ["--tw-shadow", "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"], ["boxShadow", "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)"]]))], ["font-bold", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["text-_b_h1e293b_B", _pS(_uM([["color", "#1e293b"]]))], ["text-_b_h94a3b8_B", _pS(_uM([["color", "#94a3b8"]]))], ["text-_b_h64748b_B", _pS(_uM([["color", "#64748b"]]))], ["flex", _pS(_uM([["display", "flex"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["justify-between", _pS(_uM([["justifyContent", "space-between"]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["font-medium", _pS(_uM([["--tw-font-weight", "500"], ["fontWeight", 500]]))], ["text-_b_h334155_B", _pS(_uM([["color", "#334155"]]))], ["font-semibold", _pS(_uM([["--tw-font-weight", "600"], ["fontWeight", 600]]))], ["text-center", _pS(_uM([["textAlign", "center"]]))]])]
