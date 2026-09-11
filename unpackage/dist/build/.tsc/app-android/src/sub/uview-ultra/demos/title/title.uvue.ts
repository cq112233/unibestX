import _easycom_up_title from '@/uni_modules/uview-ultra/components/up-title/up-title.uvue'
import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { computed } from 'vue';
import { useAppStore } from '@/src/store/index.uts';

const __sfc__ = defineComponent({
  __name: 'title',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

const appStore = useAppStore();
const themeColor = computed<string>(() => appStore.state.theme);

return (): any | null => {

const _component_up_title = resolveEasyComponent("up-title",_easycom_up_title)
const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'up-title 标题','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'up-title 标题','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "基本使用（默认前缀竖条）")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cV(_component_up_title, null, _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border title-text" }), "这里是标题")
                  ]),
                  _: 1 /* STABLE */
                }))
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "自定义前缀（prefix 插槽）")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cV(_component_up_title, null, _uM({
                  prefix: withSlotCtx((): any[] => [
                    _cE("view", _uM({
                      class: "weapp-tw-border custom-prefix",
                      style: _nS(_uM({ backgroundColor: themeColor.value }))
                    }), [
                      _cE("text", _uM({ class: "weapp-tw-border custom-prefix-text" }), "◆")
                    ], 4 /* STYLE */)
                  ]),
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border title-text" }), "带自定义前缀的标题")
                  ]),
                  _: 1 /* STABLE */
                }))
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "组合使用（搭配 up-icon）")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cV(_component_up_title, null, _uM({
                  default: withSlotCtx((): any[] => [
                    _cV(_component_up_icon, _uM({
                      name: "bell",
                      size: "18",
                      color: themeColor.value
                    }), null, 8 /* PROPS */, ["color"]),
                    _cE("text", _uM({ class: "weapp-tw-border title-text" }), "带图标的标题")
                  ]),
                  _: 1 /* STABLE */
                }))
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "多级标题样式（通过 class 定制字号）")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cV(_component_up_title, null, _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border title-text title-lg" }), "大号标题")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cE("view", _uM({ class: "weapp-tw-border title-gap" })),
                _cV(_component_up_title, null, _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border title-text" }), "默认标题")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cE("view", _uM({ class: "weapp-tw-border title-gap" })),
                _cV(_component_up_title, null, _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border title-text title-sm" }), "小号标题")
                  ]),
                  _: 1 /* STABLE */
                }))
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "说明")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cE("text", _uM({ class: "weapp-tw-border demo-text" }), " up-title 已适配 vdom/vapor 双模式：无 props、无事件，仅通过默认插槽展示标题文本、通过 prefix 插槽自定义前缀；前缀竖条默认使用主题主色，可通过覆盖 .up-title 类定制整体样式，H5/小程序沿用原 .vue 实现。 ")
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
const GenSrcSubUviewUltraDemosTitleTitleStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-title", _pS(_uM([["marginBottom", 10]]))], ["demo-title-text", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"]]))], ["demo-text", _pS(_uM([["fontSize", 13], ["lineHeight", "20px"], ["color", "#64748b"]]))], ["title-text", _pS(_uM([["fontSize", 16], ["fontWeight", "bold"], ["color", "#1e293b"]]))], ["title-lg", _pS(_uM([["fontSize", 22]]))], ["title-sm", _pS(_uM([["fontSize", 13], ["fontWeight", "normal"], ["color", "#64748b"]]))], ["title-gap", _pS(_uM([["height", 10]]))], ["custom-prefix", _pS(_uM([["width", 18], ["height", 18], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"], ["borderTopLeftRadius", 4], ["borderTopRightRadius", 4], ["borderBottomRightRadius", 4], ["borderBottomLeftRadius", 4], ["marginRight", 8]]))], ["custom-prefix-text", _pS(_uM([["fontSize", 12], ["lineHeight", "12px"], ["color", "#ffffff"]]))]])]
