import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import _easycom_up_toast from '@/uni_modules/uview-ultra/components/up-toast/up-toast.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { ref } from 'vue'


const __sfc__ = defineComponent({
  __name: 'toast',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const uToast = ref(null as ComponentPublicInstance | null)
function showToast(type: string) {
  const toast = uToast.value
  if (toast != null) {
    const configs = { __$originalPosition: new UTSSourceMapPosition("configs", "src/sub/uview-ultra/demos/toast/toast.uvue", 43, 11), 
      success: { message: '操作成功！', type: 'success' },
      error: { message: '操作失败！', type: 'error' },
      warning: { message: '请注意风险！', type: 'warning' },
      default: { message: '这是一条提示', type: 'default' },
    } as UTSJSONObject
    const config = configs[type] as UTSJSONObject
    toast.$callMethod('show', {
      message: config.message as string,
      type: config.type as string,
    })
  }
}

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)
const _component_up_toast = resolveEasyComponent("up-toast",_easycom_up_toast)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-toast 消息提示'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }), [
            _cV(_component_NavBar, _uM({
              title: "up-toast 消息提示",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            })),
            _cE("view", _uM({ class: "p-16px" }), [
              _cE("view", _uM({ class: "demo-block" }), [
                _cE("text", _uM({ class: "demo-label" }), "基础用法"),
                _cE("view", _uM({ class: "flex-row items-center" }), [
                  _cV(_component_up_button, _uM({
                    type: "primary",
                    text: "成功提示",
                    size: "mini",
                    onClick: () => {showToast('success')}
                  }), null, 8 /* PROPS */, ["onClick"]),
                  _cE("view", _uM({ class: "w-10px" })),
                  _cV(_component_up_button, _uM({
                    type: "error",
                    text: "错误提示",
                    size: "mini",
                    onClick: () => {showToast('error')}
                  }), null, 8 /* PROPS */, ["onClick"])
                ])
              ])
            ]),
            _cV(_component_up_toast, _uM({
              ref_key: "uToast",
              ref: uToast
            }), null, 512 /* NEED_PATCH */)
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
const GenSrcSubUviewUltraDemosToastToastStyles = [_uM([["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["pb-30px", _pS(_uM([["paddingBottom", 30]]))], ["w-10px", _pS(_uM([["width", 10]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "#2979ff"]]))]])]
