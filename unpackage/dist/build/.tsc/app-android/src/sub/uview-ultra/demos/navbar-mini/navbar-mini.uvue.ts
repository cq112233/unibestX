import _easycom_up_navbar_mini from '@/uni_modules/uview-ultra/components/up-navbar-mini/up-navbar-mini.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue';

const __sfc__ = defineComponent({
  __name: 'navbar-mini',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;


return (): any | null => {

const _component_up_navbar_mini = resolveEasyComponent("up-navbar-mini",_easycom_up_navbar_mini)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'Navbar Mini 迷你导航栏','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'Navbar Mini 迷你导航栏','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "基础用法"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center p-_b8px_B" }), [
                  _cV(_component_up_navbar_mini, _uM({
                    "safe-area-inset-top": false,
                    fixed: false,
                    "bg-color": "#3c9cff",
                    "icon-color": "#ffffff"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "自定义图标"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center p-_b8px_B" }), [
                  _cV(_component_up_navbar_mini, _uM({
                    "safe-area-inset-top": false,
                    fixed: false,
                    "left-icon": "arrow-left",
                    "bg-color": "#e2e8f0",
                    "icon-color": "#334155",
                    "home-url": "/pages/index/index"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "自定义颜色"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center p-_b8px_B" }), [
                  _cV(_component_up_navbar_mini, _uM({
                    "safe-area-inset-top": false,
                    fixed: false,
                    "bg-color": "#fa3534",
                    "icon-color": "#ffffff"
                  }))
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
const GenSrcSubUviewUltraDemosNavbarMiniNavbarMiniStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))]])]
