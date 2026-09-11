import _easycom_up_th from '@/uni_modules/uview-ultra/components/up-th/up-th.uvue'
import _easycom_up_tr from '@/uni_modules/uview-ultra/components/up-tr/up-tr.uvue'
import _easycom_up_td from '@/uni_modules/uview-ultra/components/up-td/up-td.uvue'
import _easycom_up_table from '@/uni_modules/uview-ultra/components/up-table/up-table.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue';

const __sfc__ = defineComponent({
  __name: 'table',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;


return (): any | null => {

const _component_up_th = resolveEasyComponent("up-th",_easycom_up_th)
const _component_up_tr = resolveEasyComponent("up-tr",_easycom_up_tr)
const _component_up_td = resolveEasyComponent("up-td",_easycom_up_td)
const _component_up_table = resolveEasyComponent("up-table",_easycom_up_table)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'Table 表格','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'Table 表格','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "基础表格"),
                _cV(_component_up_table, null, _uM({
                  default: withSlotCtx((): any[] => [
                    _cV(_component_up_tr, null, _uM({
                      default: withSlotCtx((): any[] => [
                        _cV(_component_up_th, _uM({ text: "学校" })),
                        _cV(_component_up_th, _uM({ text: "班级" })),
                        _cV(_component_up_th, _uM({ text: "年龄" }))
                      ]),
                      _: 1 /* STABLE */
                    })),
                    _cV(_component_up_tr, null, _uM({
                      default: withSlotCtx((): any[] => [
                        _cV(_component_up_td, _uM({ text: "浙江大学" })),
                        _cV(_component_up_td, _uM({ text: "二年级" })),
                        _cV(_component_up_td, _uM({ text: "22" }))
                      ]),
                      _: 1 /* STABLE */
                    })),
                    _cV(_component_up_tr, null, _uM({
                      default: withSlotCtx((): any[] => [
                        _cV(_component_up_td, _uM({ text: "清华大学" })),
                        _cV(_component_up_td, _uM({ text: "05班" })),
                        _cV(_component_up_td, _uM({ text: "24" }))
                      ]),
                      _: 1 /* STABLE */
                    }))
                  ]),
                  _: 1 /* STABLE */
                }))
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "无边框"),
                _cV(_component_up_table, _uM({ border: false }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cV(_component_up_tr, null, _uM({
                      default: withSlotCtx((): any[] => [
                        _cV(_component_up_th, _uM({ text: "名称" })),
                        _cV(_component_up_th, _uM({ text: "类型" }))
                      ]),
                      _: 1 /* STABLE */
                    })),
                    _cV(_component_up_tr, null, _uM({
                      default: withSlotCtx((): any[] => [
                        _cV(_component_up_td, _uM({ text: "uview-ultra" })),
                        _cV(_component_up_td, _uM({ text: "UI库" }))
                      ]),
                      _: 1 /* STABLE */
                    })),
                    _cV(_component_up_tr, null, _uM({
                      default: withSlotCtx((): any[] => [
                        _cV(_component_up_td, _uM({ text: "uni-app X" })),
                        _cV(_component_up_td, _uM({ text: "框架" }))
                      ]),
                      _: 1 /* STABLE */
                    }))
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
const GenSrcSubUviewUltraDemosTableTableStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))]])]
