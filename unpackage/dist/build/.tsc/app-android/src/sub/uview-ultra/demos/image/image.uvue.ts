import _easycom_up_image from '@/uni_modules/uview-ultra/components/up-image/up-image.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue';

const __sfc__ = defineComponent({
  __name: 'image',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;


return (): any | null => {

const _component_up_image = resolveEasyComponent("up-image",_easycom_up_image)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'Image 图片','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'Image 图片','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "基础图片"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center" }), [
                  _cV(_component_up_image, _uM({
                    src: "/static/logo.png",
                    width: "60px",
                    height: "60px"
                  })),
                  _cE("view", _uM({ class: "weapp-tw-border w-_b15px_B" })),
                  _cV(_component_up_image, _uM({
                    src: "/static/logo.png",
                    width: "60px",
                    height: "60px",
                    shape: "circle"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "不同裁切模式"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center" }), [
                  _cV(_component_up_image, _uM({
                    src: "/static/logo.png",
                    width: "80px",
                    height: "60px",
                    mode: "aspectFit"
                  })),
                  _cE("view", _uM({ class: "weapp-tw-border w-_b15px_B" })),
                  _cV(_component_up_image, _uM({
                    src: "/static/logo.png",
                    width: "80px",
                    height: "60px",
                    mode: "scaleToFill"
                  }))
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
const GenSrcSubUviewUltraDemosImageImageStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))]])]
