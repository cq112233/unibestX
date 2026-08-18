import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_circle_progress from '@/uni_modules/uview-ultra/components/up-circle-progress/up-circle-progress.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'

const __sfc__ = defineComponent({
  __name: 'circle-progress',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;


return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_circle_progress = resolveEasyComponent("up-circle-progress",_easycom_up_circle_progress)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-bar-title-text": 'CircleProgress 圆形进度条',
        "navigation-style": 'custom'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-_b_hf8fafc_B min-h-screen pb-30px" }), [
            _cV(_component_NavBar, _uM({
              title: "CircleProgress 圆形进度条",
              "auto-back": true
            })),
            _cE("view", _uM({ class: "p-16px" }), [
              _cE("view", _uM({ class: "demo-block" }), [
                _cE("text", _uM({ class: "demo-label" }), "基础用法"),
                _cV(_component_up_circle_progress)
              ]),
              _cE("view", _uM({ class: "demo-block mt-12px" }), [
                _cE("text", _uM({ class: "demo-label" }), "自定义颜色"),
                _cE("view", _uM({ class: "flex-row items-center" }), [
                  _cV(_component_up_circle_progress, _uM({
                    percentage: "30",
                    "active-color": "#19be6b"
                  })),
                  _cE("view", _uM({ class: "w-20px" })),
                  _cV(_component_up_circle_progress, _uM({
                    percentage: "60",
                    "active-color": "#ffaa33",
                    "inactive-color": "#f3f4f6"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "demo-block mt-12px" }), [
                _cE("text", _uM({ class: "demo-label" }), "自定义宽度与大小"),
                _cV(_component_up_circle_progress, _uM({
                  percentage: "80",
                  width: "100"
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
const GenSrcSubUviewUltraDemosCircleProgressCircleProgressStyles = [_uM([["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftColor", "var(--theme-color, #2979ff)"], ["borderLeftStyle", "solid"]]))]])]
