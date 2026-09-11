import _easycom_up_alert from '@/uni_modules/uview-ultra/components/up-alert/up-alert.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue';

const __sfc__ = defineComponent({
  __name: 'alert',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;


return (): any | null => {

const _component_up_alert = resolveEasyComponent("up-alert",_easycom_up_alert)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'up-alert 警告提示','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'up-alert 警告提示','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "基础用法"),
                _cV(_component_up_alert, _uM({
                  title: "成功提示",
                  type: "success",
                  "show-icon": true
                })),
                _cE("view", _uM({ class: "weapp-tw-border h-_b10px_B" })),
                _cV(_component_up_alert, _uM({
                  title: "警告提示",
                  type: "warning",
                  "show-icon": true
                }))
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "不同主题"),
                _cV(_component_up_alert, _uM({
                  title: "主要提示",
                  type: "primary"
                })),
                _cE("view", _uM({ class: "weapp-tw-border h-_b10px_B" })),
                _cV(_component_up_alert, _uM({
                  title: "错误提示",
                  type: "error"
                })),
                _cE("view", _uM({ class: "weapp-tw-border h-_b10px_B" })),
                _cV(_component_up_alert, _uM({
                  title: "信息提示",
                  type: "info"
                }))
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "显示描述信息与图标"),
                _cV(_component_up_alert, _uM({
                  title: "成功",
                  type: "success",
                  description: "这是一段成功的描述信息",
                  "show-icon": true
                }))
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "可关闭提示"),
                _cV(_component_up_alert, _uM({
                  title: "带关闭按钮的提示",
                  type: "warning",
                  closable: true,
                  "show-icon": true
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
const GenSrcSubUviewUltraDemosAlertAlertStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))]])]
