import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import _easycom_up_loading_icon from '@/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.uvue'
import _easycom_up_overlay from '@/uni_modules/uview-ultra/components/up-overlay/up-overlay.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { ref } from 'vue';

const __sfc__ = defineComponent({
  __name: 'overlay',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

const overlayShow = ref(false);
const overlayOpacity = ref(0.5);

return (): any | null => {

const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)
const _component_up_loading_icon = resolveEasyComponent("up-loading-icon",_easycom_up_loading_icon)
const _component_up_overlay = resolveEasyComponent("up-overlay",_easycom_up_overlay)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'up-overlay 遮罩层','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'up-overlay 遮罩层','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "基础用法"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center" }), [
                  _cV(_component_up_button, _uM({
                    type: "primary",
                    text: "显示遮罩",
                    size: "mini",
                    onClick: () => {overlayShow.value = true}
                  }), null, 8 /* PROPS */, ["onClick"]),
                  _cE("view", _uM({ class: "weapp-tw-border w-_b10px_B" })),
                  _cV(_component_up_button, _uM({
                    type: "warning",
                    text: "半透明遮罩",
                    size: "mini",
                    onClick: () => {overlayOpacity.value = 0.3; overlayShow.value = true}
                  }), null, 8 /* PROPS */, ["onClick"])
                ])
              ])
            ]),
            _cV(_component_up_overlay, _uM({
              show: overlayShow.value,
              opacity: overlayOpacity.value,
              onClick: () => {overlayShow.value = false}
            }), _uM({
              default: withSlotCtx((): any[] => [
                _cE("view", _uM({ class: "weapp-tw-border flex-1 items-center justify-center" }), [
                  _cE("view", _uM({
                    class: "weapp-tw-border bg-white rounded-_b8px_B p-_b20px_B items-center",
                    onClick: withModifiers(() => {}, ["stop"])
                  }), [
                    _cV(_component_up_loading_icon, _uM({ mode: "circle" })),
                    _cE("text", _uM({ class: "weapp-tw-border text-_b14px_B text-_b_h303133_B mt-_b10px_B" }), "加载中，点击遮罩关闭")
                  ], 8 /* PROPS */, ["onClick"])
                ])
              ]),
              _: 1 /* STABLE */
            }), 8 /* PROPS */, ["show", "opacity", "onClick"])
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
const GenSrcSubUviewUltraDemosOverlayOverlayStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))]])]
