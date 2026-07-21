import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_transition from '@/uni_modules/uview-ultra/components/up-transition/up-transition.uvue'
import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { ref } from 'vue'


const __sfc__ = defineComponent({
  __name: 'transition',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const transitionShow = ref(true)

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_transition = resolveEasyComponent("up-transition",_easycom_up_transition)
const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-transition 动画'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }), [
            _cV(_component_NavBar, _uM({
              title: "Transition 动画",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            })),
            _cE("view", _uM({ class: "p-16px" }), [
              _cE("view", _uM({ class: "demo-block" }), [
                _cE("text", _uM({ class: "demo-label" }), "内置过渡动画"),
                _cE("view", _uM({ class: "transition-demo-wrapper" }), [
                  _cV(_component_up_transition, _uM({
                    show: transitionShow.value,
                    mode: "fade"
                  }), _uM({
                    default: withSlotCtx((): any[] => [
                      _cE("view", _uM({ class: "transition-demo-box transition-demo-blue" }), [
                        _cE("text", _uM({ class: "text-14px text-white font-500" }), "fade 淡入淡出")
                      ])
                    ]),
                    _: 1 /* STABLE */
                  }), 8 /* PROPS */, ["show"]),
                  _cE("view", _uM({ class: "mt-10px" }), [
                    _cV(_component_up_button, _uM({
                      type: "primary",
                      text: transitionShow.value ? '隐藏动画' : '显示动画',
                      size: "mini",
                      onClick: () => {transitionShow.value = !transitionShow.value}
                    }), null, 8 /* PROPS */, ["text", "onClick"])
                  ])
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
const GenSrcSubUviewUltraDemosTransitionTransitionStyles = [_uM([["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["font-500", _pS(_uM([["fontWeight", 500]]))], ["mt-10px", _pS(_uM([["marginTop", 10]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["pb-30px", _pS(_uM([["paddingBottom", 30]]))], ["text-14px", _pS(_uM([["fontSize", 14]]))], ["text-white", _pS(_uM([["color", "rgba(255,255,255,var(--un-color-opacity,1))"]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "#2979ff"]]))], ["transition-demo-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["alignItems", "center"], ["justifyContent", "center"], ["paddingTop", 20], ["paddingRight", 0], ["paddingBottom", 20], ["paddingLeft", 0]]))], ["transition-demo-box", _pS(_uM([["width", 120], ["height", 120], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8], ["display", "flex"], ["alignItems", "center"], ["justifyContent", "center"], ["marginBottom", 15]]))], ["transition-demo-blue", _pS(_uM([["backgroundColor", "#2979ff"]]))]])]
