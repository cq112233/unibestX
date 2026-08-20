import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_line from '@/uni_modules/uview-ultra/components/up-line/up-line.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'

const __sfc__ = defineComponent({
  __name: 'line',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;


return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_line = resolveEasyComponent("up-line",_easycom_up_line)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-line 线条'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cV(_component_NavBar, _uM({
              title: "Line 线条",
              "auto-back": true
            })),
            _cE("view", _uM({ class: "p-_b16px_B" }), [
              _cE("view", _uM({ class: "demo-block" }), [
                _cE("text", _uM({ class: "demo-label" }), "基础用法"),
                _cV(_component_up_line, _uM({
                  color: "#2979ff",
                  length: "100%"
                }))
              ]),
              _cE("view", _uM({ class: "demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "demo-label" }), "虚线"),
                _cV(_component_up_line, _uM({
                  color: "#2979ff",
                  length: "100%",
                  dashed: ""
                }))
              ]),
              _cE("view", _uM({ class: "demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "demo-label" }), "自定义颜色"),
                _cV(_component_up_line, _uM({
                  color: "#fa3534",
                  length: "50%"
                })),
                _cE("view", _uM({ class: "h-_b10px_B" })),
                _cV(_component_up_line, _uM({
                  color: "#19be6b",
                  length: "80%"
                }))
              ]),
              _cE("view", _uM({ class: "demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "demo-label" }), "垂直方向"),
                _cE("view", _uM({ class: "flex-row items-center h-_b40px_B" }), [
                  _cE("text", null, "左侧"),
                  _cV(_component_up_line, _uM({
                    color: "#909399",
                    direction: "col",
                    length: "20px",
                    margin: "0 10px"
                  })),
                  _cE("text", null, "右侧")
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
const GenSrcSubUviewUltraDemosLineLineStyles = [_uM([["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "#2979ff"]]))]])]
