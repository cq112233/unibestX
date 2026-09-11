import _easycom_up_search from '@/uni_modules/uview-ultra/components/up-search/up-search.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { ref } from 'vue';

const __sfc__ = defineComponent({
  __name: 'search',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

const searchValue1 = ref('');
const searchValue2 = ref('');
const searchValue3 = ref('');
const searchValue4 = ref('');
const searchValue5 = ref('');

return (): any | null => {

const _component_up_search = resolveEasyComponent("up-search",_easycom_up_search)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'up-search 搜索','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'up-search 搜索','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "基础用法"),
                _cV(_component_up_search, _uM({
                  modelValue: searchValue1.value,
                  "onUpdate:modelValue": $event => {(searchValue1).value = $event},
                  placeholder: "请输入搜索关键字"
                }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "隐藏右侧按钮"),
                _cV(_component_up_search, _uM({
                  modelValue: searchValue2.value,
                  "onUpdate:modelValue": $event => {(searchValue2).value = $event},
                  placeholder: "隐藏操作按钮",
                  "show-action": false
                }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "方形与自定义图标颜色"),
                _cV(_component_up_search, _uM({
                  modelValue: searchValue3.value,
                  "onUpdate:modelValue": $event => {(searchValue3).value = $event},
                  shape: "square",
                  "search-icon-color": "#fa3534",
                  placeholder: "方形搜索框"
                }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "自定义按钮文字"),
                _cV(_component_up_search, _uM({
                  modelValue: searchValue4.value,
                  "onUpdate:modelValue": $event => {(searchValue4).value = $event},
                  "action-text": "搜一下"
                }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "禁用状态"),
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
const GenSrcSubUviewUltraDemosSearchSearchStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))]])]
