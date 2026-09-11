import _easycom_up_switch from '@/uni_modules/uview-ultra/components/up-switch/up-switch.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { ref } from 'vue';

const __sfc__ = defineComponent({
  __name: 'switch',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

const switchValue1 = ref(true);
const switchValue2 = ref(true);
const switchValue3 = ref(true);
const switchValue4 = ref(true);
const switchValue5 = ref(true);

return (): any | null => {

const _component_up_switch = resolveEasyComponent("up-switch",_easycom_up_switch)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'up-switch 开关','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'up-switch 开关','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "基础用法"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center" }), [
                  _cV(_component_up_switch, _uM({
                    modelValue: switchValue1.value,
                    "onUpdate:modelValue": $event => {(switchValue1).value = $event}
                  }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"]),
                  _cE("text", _uM({ class: "weapp-tw-border text-_b14px_B ml-_b10px_B" }), _tD(switchValue1.value ? '已开启' : '已关闭'), 1 /* TEXT */)
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "禁用状态"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center" }), [
                  _cV(_component_up_switch, _uM({
                    modelValue: switchValue2.value,
                    "onUpdate:modelValue": $event => {(switchValue2).value = $event},
                    disabled: true
                  }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "加载状态"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center" }), [
                  _cV(_component_up_switch, _uM({
                    modelValue: switchValue3.value,
                    "onUpdate:modelValue": $event => {(switchValue3).value = $event},
                    loading: ""
                  }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "自定义颜色"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center" }), [
                  _cV(_component_up_switch, _uM({
                    modelValue: switchValue4.value,
                    "onUpdate:modelValue": $event => {(switchValue4).value = $event},
                    "active-color": "#fa3534",
                    "inactive-color": "#f56c6c"
                  }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "不同尺寸"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center" }), [
                  _cV(_component_up_switch, _uM({
                    modelValue: switchValue5.value,
                    "onUpdate:modelValue": $event => {(switchValue5).value = $event},
                    size: "20",
                    class: "mr-_b10px_B"
                  }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"]),
                  _cV(_component_up_switch, _uM({
                    modelValue: switchValue5.value,
                    "onUpdate:modelValue": $event => {(switchValue5).value = $event},
                    size: "28"
                  }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                ])
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
const GenSrcSubUviewUltraDemosSwitchSwitchStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))]])]
