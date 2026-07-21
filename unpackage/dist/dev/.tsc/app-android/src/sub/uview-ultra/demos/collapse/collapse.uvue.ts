import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_collapse_item from '@/uni_modules/uview-ultra/components/up-collapse-item/up-collapse-item.uvue'
import _easycom_up_collapse from '@/uni_modules/uview-ultra/components/up-collapse/up-collapse.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { ref } from 'vue'


const __sfc__ = defineComponent({
  __name: 'collapse',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const collapseValue = ref('1')

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_collapse_item = resolveEasyComponent("up-collapse-item",_easycom_up_collapse_item)
const _component_up_collapse = resolveEasyComponent("up-collapse",_easycom_up_collapse)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-collapse 折叠面板'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }), [
            _cV(_component_NavBar, _uM({
              title: "up-collapse 折叠面板",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            })),
            _cE("view", _uM({ class: "p-16px" }), [
              _cE("view", _uM({ class: "demo-block" }), [
                _cE("text", _uM({ class: "demo-label" }), "基础用法"),
                _cV(_component_up_collapse, _uM({
                  value: collapseValue.value,
                  accordion: true
                }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cV(_component_up_collapse_item, _uM({
                      title: "第一项",
                      name: "1"
                    }), _uM({
                      default: withSlotCtx((): any[] => [
                        _cE("text", _uM({ class: "collapse-text" }), "uview-ultra 是基于 uview-plus 修改的 uni-app-x 版本")
                      ]),
                      _: 1 /* STABLE */
                    })),
                    _cV(_component_up_collapse_item, _uM({
                      title: "第二项",
                      name: "2"
                    }), _uM({
                      default: withSlotCtx((): any[] => [
                        _cE("text", _uM({ class: "collapse-text" }), "支持 iOS、Android、H5、小程序等多端")
                      ]),
                      _: 1 /* STABLE */
                    }))
                  ]),
                  _: 1 /* STABLE */
                }), 8 /* PROPS */, ["value"])
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
const GenSrcSubUviewUltraDemosCollapseCollapseStyles = [_uM([["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["pb-30px", _pS(_uM([["paddingBottom", 30]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "#2979ff"]]))], ["collapse-text", _pS(_uM([["fontSize", 13], ["color", "#909399"], ["lineHeight", "20px"]]))]])]
