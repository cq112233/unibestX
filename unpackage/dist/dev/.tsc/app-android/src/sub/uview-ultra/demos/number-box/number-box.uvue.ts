import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_number_box from '@/uni_modules/uview-ultra/components/up-number-box/up-number-box.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { ref } from 'vue';


const __sfc__ = defineComponent({
  __name: 'number-box',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const numberValue1 = ref(1);
const numberValue2 = ref(1);
const numberValue3 = ref(5);
const numberValue4 = ref(1);

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_number_box = resolveEasyComponent("up-number-box",_easycom_up_number_box)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-number-box 步进器'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cV(_component_NavBar, _uM({
              title: "up-number-box 步进器",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            })),
            _cE("view", _uM({ class: "p-_b16px_B" }), [
              _cE("view", _uM({ class: "demo-block" }), [
                _cE("text", _uM({ class: "demo-label" }), "基础用法"),
                _cV(_component_up_number_box, _uM({
                  modelValue: numberValue1.value,
                  "onUpdate:modelValue": $event => {(numberValue1).value = $event}
                }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
              ]),
              _cE("view", _uM({ class: "demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "demo-label" }), "指定步长"),
                _cV(_component_up_number_box, _uM({
                  modelValue: numberValue2.value,
                  "onUpdate:modelValue": $event => {(numberValue2).value = $event},
                  step: 2
                }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
              ]),
              _cE("view", _uM({ class: "demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "demo-label" }), "限制最大/最小值"),
                _cV(_component_up_number_box, _uM({
                  modelValue: numberValue3.value,
                  "onUpdate:modelValue": $event => {(numberValue3).value = $event},
                  min: 5,
                  max: 10
                }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
              ]),
              _cE("view", _uM({ class: "demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "demo-label" }), "禁用状态"),
                _cV(_component_up_number_box, _uM({
                  modelValue: numberValue4.value,
                  "onUpdate:modelValue": $event => {(numberValue4).value = $event},
                  disabled: true
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
const GenSrcSubUviewUltraDemosNumberBoxNumberBoxStyles = [_uM([["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "#2979ff"]]))]])]
