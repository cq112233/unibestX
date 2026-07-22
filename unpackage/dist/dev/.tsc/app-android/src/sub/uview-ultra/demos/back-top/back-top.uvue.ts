import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_back_top from '@/uni_modules/uview-ultra/components/up-back-top/up-back-top.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { ref } from 'vue'
import { onPageScroll } from '@dcloudio/uni-app'


const __sfc__ = defineComponent({
  __name: 'back-top',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const scrollTop = ref(0)
onPageScroll((e) => {
  scrollTop.value = e.scrollTop
})

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_back_top = resolveEasyComponent("up-back-top",_easycom_up_back_top)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-bar-title-text": 'Back Top 返回顶部',
        "navigation-style": 'custom'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }), [
            _cV(_component_NavBar, _uM({
              title: "Back Top 返回顶部",
              "auto-back": true
            })),
            _cE("view", _uM({ class: "p-16px" }), [
              _cE("view", _uM({ class: "demo-block" }), [
                _cE("text", _uM({ class: "demo-label" }), "基础用法"),
                _cE("text", _uM({
                  style: _nS(_uM({"font-size":"12px","color":"#999"}))
                }), "请向下滑动页面，右下角会出现返回顶部按钮", 4 /* STYLE */),
                _cE("view", _uM({
                  style: _nS(_uM({"height":"1000px","display":"flex","align-items":"center","justify-content":"center"}))
                }), [
                  _cE("text", _uM({
                    style: _nS(_uM({"color":"#ccc"}))
                  }), "向下滚动", 4 /* STYLE */)
                ], 4 /* STYLE */),
                _cV(_component_up_back_top, _uM({ "scroll-top": scrollTop.value }), null, 8 /* PROPS */, ["scroll-top"])
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
const GenSrcSubUviewUltraDemosBackTopBackTopStyles = [_uM([["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["pb-30px", _pS(_uM([["paddingBottom", 30]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "#2979ff"]]))]])]
