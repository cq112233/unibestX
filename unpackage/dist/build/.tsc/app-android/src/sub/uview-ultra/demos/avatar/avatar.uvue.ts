import _easycom_up_avatar from '@/uni_modules/uview-ultra/components/up-avatar/up-avatar.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue';

const __sfc__ = defineComponent({
  __name: 'avatar',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;


return (): any | null => {

const _component_up_avatar = resolveEasyComponent("up-avatar",_easycom_up_avatar)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'up-avatar 头像','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'up-avatar 头像','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "基础用法"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center" }), [
                  _cV(_component_up_avatar, _uM({
                    src: "/static/logo.png",
                    size: "40",
                    class: "mr-_b10px_B"
                  })),
                  _cV(_component_up_avatar, _uM({
                    text: "U",
                    size: "40",
                    "bg-color": "#2979ff",
                    class: "mr-_b10px_B"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "形状设定"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center" }), [
                  _cV(_component_up_avatar, _uM({
                    src: "/static/logo.png",
                    shape: "circle",
                    size: "40",
                    class: "mr-_b10px_B"
                  })),
                  _cV(_component_up_avatar, _uM({
                    src: "/static/logo.png",
                    shape: "square",
                    size: "40"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "不同尺寸"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center" }), [
                  _cV(_component_up_avatar, _uM({
                    src: "/static/logo.png",
                    size: "50",
                    class: "mr-_b10px_B"
                  })),
                  _cV(_component_up_avatar, _uM({
                    src: "/static/logo.png",
                    size: "40",
                    class: "mr-_b10px_B"
                  })),
                  _cV(_component_up_avatar, _uM({
                    src: "/static/logo.png",
                    size: "30",
                    class: "mr-_b10px_B"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "自定义背景色和图标"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center" }), [
                  _cV(_component_up_avatar, _uM({
                    icon: "level",
                    size: "40",
                    "bg-color": "#fa3534",
                    class: "mr-_b10px_B"
                  })),
                  _cV(_component_up_avatar, _uM({
                    icon: "photo",
                    size: "40",
                    "bg-color": "#ff9900",
                    class: "mr-_b10px_B"
                  })),
                  _cV(_component_up_avatar, _uM({
                    text: "张",
                    size: "40",
                    "bg-color": "#19be6b"
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
const GenSrcSubUviewUltraDemosAvatarAvatarStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))]])]
