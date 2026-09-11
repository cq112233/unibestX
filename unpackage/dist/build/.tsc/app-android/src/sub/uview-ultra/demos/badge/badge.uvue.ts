import _easycom_up_badge from '@/uni_modules/uview-ultra/components/up-badge/up-badge.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue';

const __sfc__ = defineComponent({
  __name: 'badge',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;


return (): any | null => {

const _component_up_badge = resolveEasyComponent("up-badge",_easycom_up_badge)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'up-badge 徽标','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'up-badge 徽标','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "基础用法"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center" }), [
                  _cV(_component_up_badge, _uM({
                    type: "error",
                    value: 9,
                    class: "mr-_b20px_B"
                  })),
                  _cV(_component_up_badge, _uM({
                    type: "warning",
                    value: 99,
                    class: "mr-_b20px_B"
                  })),
                  _cV(_component_up_badge, _uM({
                    type: "success",
                    value: 100,
                    max: "99"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "小圆点"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center" }), [
                  _cV(_component_up_badge, _uM({
                    type: "error",
                    "is-dot": true
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "自定义颜色"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center" }), [
                  _cV(_component_up_badge, _uM({
                    value: "新",
                    "bg-color": "#8a2be2",
                    color: "#ffffff",
                    class: "mr-_b20px_B"
                  })),
                  _cV(_component_up_badge, _uM({
                    value: "热",
                    "bg-color": "#ff9900",
                    color: "#ffffff",
                    class: "mr-_b20px_B"
                  })),
                  _cV(_component_up_badge, _uM({
                    "is-dot": true,
                    "bg-color": "#000000",
                    class: "mr-_b20px_B"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "绝对定位"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center" }), [
                  _cE("view", _uM({ class: "weapp-tw-border relative w-_b40px_B h-_b40px_B bg-_b_he5e5e5_B rounded-_b4px_B" }), [
                    _cV(_component_up_badge, _uM({
                      type: "error",
                      value: 5,
                      absolute: "",
                      offset: [-10, -10]
                    }))
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
const GenSrcSubUviewUltraDemosBadgeBadgeStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))]])]
