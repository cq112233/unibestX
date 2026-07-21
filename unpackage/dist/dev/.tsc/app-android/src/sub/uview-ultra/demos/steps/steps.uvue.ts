import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_steps_item from '@/uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue'
import _easycom_up_steps from '@/uni_modules/uview-ultra/components/up-steps/up-steps.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'

const __sfc__ = defineComponent({
  __name: 'steps',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;


return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_steps_item = resolveEasyComponent("up-steps-item",_easycom_up_steps_item)
const _component_up_steps = resolveEasyComponent("up-steps",_easycom_up_steps)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-steps 步骤条'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }), [
            _cV(_component_NavBar, _uM({
              title: "Steps 步骤条",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            })),
            _cE("view", _uM({ class: "p-16px" }), [
              _cE("view", _uM({ class: "demo-block" }), [
                _cE("text", _uM({ class: "demo-label" }), "基础步骤条"),
                _cV(_component_up_steps, _uM({ current: "0" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cV(_component_up_steps_item, _uM({
                      title: "已下单",
                      desc: "10:30"
                    })),
                    _cV(_component_up_steps_item, _uM({
                      title: "已出库",
                      desc: "10:35"
                    })),
                    _cV(_component_up_steps_item, _uM({
                      title: "运输中",
                      desc: "11:40"
                    }))
                  ]),
                  _: 1 /* STABLE */
                }))
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
const GenSrcSubUviewUltraDemosStepsStepsStyles = [_uM([["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["pb-30px", _pS(_uM([["paddingBottom", 30]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "#2979ff"]]))]])]
