import _easycom_up_text from '@/uni_modules/uview-ultra/components/up-text/up-text.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue';

const __sfc__ = defineComponent({
  __name: 'text',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;


return (): any | null => {

const _component_up_text = resolveEasyComponent("up-text",_easycom_up_text)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'Text 文本','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'Text 文本','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "基础类型"),
                _cV(_component_up_text, _uM({
                  text: "主色文本",
                  type: "primary",
                  class: "mb-_b10px_B"
                })),
                _cV(_component_up_text, _uM({
                  text: "成功文本",
                  type: "success",
                  class: "mb-_b10px_B"
                })),
                _cV(_component_up_text, _uM({
                  text: "警告文本",
                  type: "warning",
                  class: "mb-_b10px_B"
                })),
                _cV(_component_up_text, _uM({
                  text: "错误文本",
                  type: "error",
                  class: "mb-_b10px_B"
                })),
                _cV(_component_up_text, _uM({
                  text: "常规文本",
                  type: "info"
                }))
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "文字脱敏"),
                _cV(_component_up_text, _uM({
                  text: "13888888888",
                  mode: "phone",
                  format: "encrypt",
                  class: "mb-_b10px_B"
                })),
                _cV(_component_up_text, _uM({
                  text: "张三疯",
                  mode: "name",
                  format: "encrypt",
                  class: "mb-_b10px_B"
                })),
                _cV(_component_up_text, _uM({
                  text: "110105199001011234",
                  mode: "idcard",
                  format: "encrypt"
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
const GenSrcSubUviewUltraDemosTextTextStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))]])]
