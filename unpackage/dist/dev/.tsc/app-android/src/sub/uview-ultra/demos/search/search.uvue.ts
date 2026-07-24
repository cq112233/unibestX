import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_search from '@/uni_modules/uview-ultra/components/up-search/up-search.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { ref } from 'vue'


const __sfc__ = defineComponent({
  __name: 'search',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const searchValue1 = ref('')
const searchValue2 = ref('')
const searchValue3 = ref('')
const searchValue4 = ref('')
const searchValue5 = ref('')

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_search = resolveEasyComponent("up-search",_easycom_up_search)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-search 搜索'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }), [
            _cV(_component_NavBar, _uM({
              title: "up-search 搜索",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            })),
            _cE("view", _uM({ class: "p-16px" }), [
              _cE("view", _uM({ class: "demo-block" }), [
                _cE("text", _uM({ class: "demo-label" }), "基础用法"),
                _cV(_component_up_search, _uM({
                  modelValue: searchValue1.value,
                  "onUpdate:modelValue": $event => {(searchValue1).value = $event},
                  placeholder: "请输入搜索关键字"
                }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
              ]),
              _cE("view", _uM({ class: "demo-block mt-12px" }), [
                _cE("text", _uM({ class: "demo-label" }), "隐藏右侧按钮"),
                _cV(_component_up_search, _uM({
                  modelValue: searchValue2.value,
                  "onUpdate:modelValue": $event => {(searchValue2).value = $event},
                  placeholder: "隐藏操作按钮",
                  "show-action": false
                }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
              ]),
              _cE("view", _uM({ class: "demo-block mt-12px" }), [
                _cE("text", _uM({ class: "demo-label" }), "方形与自定义图标颜色"),
                _cV(_component_up_search, _uM({
                  modelValue: searchValue3.value,
                  "onUpdate:modelValue": $event => {(searchValue3).value = $event},
                  shape: "square",
                  "search-icon-color": "#fa3534",
                  placeholder: "方形搜索框"
                }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
              ]),
              _cE("view", _uM({ class: "demo-block mt-12px" }), [
                _cE("text", _uM({ class: "demo-label" }), "自定义按钮文字"),
                _cV(_component_up_search, _uM({
                  modelValue: searchValue4.value,
                  "onUpdate:modelValue": $event => {(searchValue4).value = $event},
                  "action-text": "搜一下"
                }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
              ]),
              _cE("view", _uM({ class: "demo-block mt-12px" }), [
                _cE("text", _uM({ class: "demo-label" }), "禁用状态"),
                _cV(_component_up_search, _uM({
                  modelValue: searchValue5.value,
                  "onUpdate:modelValue": $event => {(searchValue5).value = $event},
                  disabled: true,
                  placeholder: "禁用输入"
                }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
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
const GenSrcSubUviewUltraDemosSearchSearchStyles = [_uM([["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["mt-12px", _pS(_uM([["marginTop", 12]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["pb-30px", _pS(_uM([["paddingBottom", 30]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "#2979ff"]]))]])]
