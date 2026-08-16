import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_navbar_mini from '@/uni_modules/uview-ultra/components/up-navbar-mini/up-navbar-mini.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'

const __sfc__ = defineComponent({
  __name: 'navbar-mini',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;


return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_navbar_mini = resolveEasyComponent("up-navbar-mini",_easycom_up_navbar_mini)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-navbar-mini 迷你导航栏'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }), [
            _cV(_component_NavBar, _uM({
              title: "Navbar Mini 迷你导航栏",
              "auto-back": true
            })),
            _cE("view", _uM({ class: "p-16px" }), [
              _cE("view", _uM({ class: "demo-block" }), [
                _cE("text", _uM({ class: "demo-label" }), "基础用法"),
                _cE("view", _uM({ class: "flex-row items-center p-8px" }), [
                  _cV(_component_up_navbar_mini, _uM({
                    "safe-area-inset-top": false,
                    fixed: false,
                    "bg-color": "#3c9cff",
                    "icon-color": "#ffffff"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "demo-block mt-12px" }), [
                _cE("text", _uM({ class: "demo-label" }), "自定义图标"),
                _cE("view", _uM({ class: "flex-row items-center p-8px" }), [
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
              _cE("view", _uM({ class: "demo-block mt-12px" }), [
                _cE("text", _uM({ class: "demo-label" }), "自定义颜色"),
                _cE("view", _uM({ class: "flex-row items-center p-8px" }), [
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
const GenSrcSubUviewUltraDemosNavbarMiniNavbarMiniStyles = [_uM([["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["mt-12px", _pS(_uM([["marginTop", 12]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["p-8px", _pS(_uM([["paddingTop", 8], ["paddingRight", 8], ["paddingBottom", 8], ["paddingLeft", 8]]))], ["pb-30px", _pS(_uM([["paddingBottom", 30]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "#2979ff"]]))]])]
