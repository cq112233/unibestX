import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_tooltip from '@/uni_modules/uview-ultra/components/up-tooltip/up-tooltip.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { ref } from 'vue'


const __sfc__ = defineComponent({
  __name: 'tooltip',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const tooltipButtons = ref(['编辑', '删除'] as string[])

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_tooltip = resolveEasyComponent("up-tooltip",_easycom_up_tooltip)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-tooltip 长按提示'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }), [
            _cV(_component_NavBar, _uM({
              title: "up-tooltip 长按提示",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            })),
            _cE("view", _uM({ class: "p-16px" }), [
              _cE("view", _uM({ class: "demo-block" }), [
                _cE("text", _uM({ class: "demo-label" }), "基础用法"),
                _cE("view", _uM({ class: "flex-row items-center" }), [
                  _cV(_component_up_tooltip, _uM({
                    text: "长按此处复制文本",
                    direction: "top"
                  })),
                  _cE("view", _uM({ class: "w-20px" })),
                  _cV(_component_up_tooltip, _uM({
                    text: "长按显示操作",
                    direction: "top",
                    "show-copy": false,
                    buttons: tooltipButtons.value
                  }), null, 8 /* PROPS */, ["buttons"])
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
const GenSrcSubUviewUltraDemosTooltipTooltipStyles = [_uM([["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["pb-30px", _pS(_uM([["paddingBottom", 30]]))], ["w-20px", _pS(_uM([["width", 20]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "#2979ff"]]))]])]
