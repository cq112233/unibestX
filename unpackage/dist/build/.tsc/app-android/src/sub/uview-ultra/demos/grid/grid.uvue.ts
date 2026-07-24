import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_grid_item from '@/uni_modules/uview-ultra/components/up-grid-item/up-grid-item.uvue'
import _easycom_up_grid from '@/uni_modules/uview-ultra/components/up-grid/up-grid.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'

const __sfc__ = defineComponent({
  __name: 'grid',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;


return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_grid_item = resolveEasyComponent("up-grid-item",_easycom_up_grid_item)
const _component_up_grid = resolveEasyComponent("up-grid",_easycom_up_grid)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-grid 宫格'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }), [
            _cV(_component_NavBar, _uM({
              title: "Grid 宫格",
              "auto-back": true
            })),
            _cE("view", _uM({ class: "p-16px" }), [
              _cE("view", _uM({ class: "demo-block" }), [
                _cE("text", _uM({ class: "demo-label" }), "基础用法"),
                _cV(_component_up_grid, _uM({ border: true }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE(Fragment, null, RenderHelpers.renderList(4, (i, __key, __index, _cached): any => {
                      return _cV(_component_up_grid_item, _uM({ key: i }), _uM({
                        default: withSlotCtx((): any[] => [
                          _cV(_component_up_icon, _uM({
                            name: "photo",
                            size: 30
                          })),
                          _cE("text", _uM({
                            style: _nS(_uM({"margin-top":"10px","font-size":"14px","color":"#333"}))
                          }), "宫格", 4 /* STYLE */)
                        ]),
                        _: 2 /* DYNAMIC */
                      }), 1024 /* DYNAMIC_SLOTS */)
                    }), 64 /* STABLE_FRAGMENT */)
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
const GenSrcSubUviewUltraDemosGridGridStyles = [_uM([["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["pb-30px", _pS(_uM([["paddingBottom", 30]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "#2979ff"]]))]])]
