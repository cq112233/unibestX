import _easycom_up_loading_icon from '@/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.uvue'
import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { ref } from 'vue';

const __sfc__ = defineComponent({
  __name: 'loading-icon',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

const loadingShow = ref(true);

return (): any | null => {

const _component_up_loading_icon = resolveEasyComponent("up-loading-icon",_easycom_up_loading_icon)
const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'LoadingIcon 加载图标','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'LoadingIcon 加载图标','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "基础用法"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row flex-wrap items-center" }), [
                  _cV(_component_up_loading_icon, _uM({ class: "mr-_b20px_B my-_b10px_B" }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "其他模式"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row flex-wrap items-center" }), [
                  _cV(_component_up_loading_icon, _uM({
                    mode: "circle",
                    class: "mr-_b20px_B my-_b10px_B"
                  })),
                  _cV(_component_up_loading_icon, _uM({
                    mode: "semicircle",
                    class: "mr-_b20px_B my-_b10px_B"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "自定义大小"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row flex-wrap items-center" }), [
                  _cV(_component_up_loading_icon, _uM({
                    size: "16",
                    class: "mr-_b20px_B my-_b10px_B"
                  })),
                  _cV(_component_up_loading_icon, _uM({
                    size: "24",
                    class: "mr-_b20px_B my-_b10px_B"
                  })),
                  _cV(_component_up_loading_icon, _uM({
                    size: "40",
                    class: "mr-_b20px_B my-_b10px_B"
                  })),
                  _cV(_component_up_loading_icon, _uM({
                    size: "60",
                    class: "mr-_b20px_B my-_b10px_B"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "自定义颜色"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row flex-wrap items-center" }), [
                  _cV(_component_up_loading_icon, _uM({
                    color: "#2979ff",
                    class: "mr-_b20px_B my-_b10px_B"
                  })),
                  _cV(_component_up_loading_icon, _uM({
                    color: "#19be6b",
                    class: "mr-_b20px_B my-_b10px_B"
                  })),
                  _cV(_component_up_loading_icon, _uM({
                    color: "#fa3534",
                    class: "mr-_b20px_B my-_b10px_B"
                  })),
                  _cV(_component_up_loading_icon, _uM({
                    color: "#ff9900",
                    mode: "circle",
                    class: "mr-_b20px_B my-_b10px_B"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "带提示文字"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row flex-wrap items-center" }), [
                  _cV(_component_up_loading_icon, _uM({
                    text: "加载中...",
                    class: "mr-_b24px_B my-_b10px_B"
                  })),
                  _cV(_component_up_loading_icon, _uM({
                    text: "正在提交",
                    color: "#2979ff",
                    class: "mr-_b24px_B my-_b10px_B"
                  })),
                  _cV(_component_up_loading_icon, _uM({
                    text: "请求失败",
                    color: "#fa3534",
                    mode: "circle",
                    class: "mr-_b24px_B my-_b10px_B"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "文字与图标垂直排列"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row flex-wrap items-center" }), [
                  _cV(_component_up_loading_icon, _uM({
                    vertical: "",
                    text: "加载中",
                    class: "mr-_b30px_B my-_b10px_B"
                  })),
                  _cV(_component_up_loading_icon, _uM({
                    vertical: "",
                    text: "请稍候",
                    color: "#19be6b",
                    mode: "circle",
                    class: "mr-_b30px_B my-_b10px_B"
                  })),
                  _cV(_component_up_loading_icon, _uM({
                    vertical: "",
                    text: "拼命加载中",
                    color: "#ff9900",
                    size: "36",
                    class: "mr-_b30px_B my-_b10px_B"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "自定义文字颜色与字号"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row flex-wrap items-center" }), [
                  _cV(_component_up_loading_icon, _uM({
                    text: "大号文字",
                    "text-size": "20",
                    "text-color": "#2979ff",
                    class: "mr-_b24px_B my-_b10px_B"
                  })),
                  _cV(_component_up_loading_icon, _uM({
                    text: "小号文字",
                    "text-size": "12",
                    "text-color": "#909193",
                    class: "mr-_b24px_B my-_b10px_B"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "自定义圆环暗边颜色（仅 circle 模式生效）"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row flex-wrap items-center" }), [
                  _cV(_component_up_loading_icon, _uM({
                    mode: "circle",
                    color: "#fa3534",
                    "inactive-color": "#fbd6d8",
                    class: "mr-_b20px_B my-_b10px_B"
                  })),
                  _cV(_component_up_loading_icon, _uM({
                    mode: "circle",
                    color: "#2979ff",
                    "inactive-color": "#d4e2fd",
                    class: "mr-_b20px_B my-_b10px_B"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "自定义动画速度（duration，单位 ms）"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row flex-wrap items-center" }), [
                  _cV(_component_up_loading_icon, _uM({
                    duration: "600",
                    text: "快 600",
                    class: "mr-_b24px_B my-_b10px_B"
                  })),
                  _cV(_component_up_loading_icon, _uM({
                    duration: "1200",
                    text: "标准 1200",
                    class: "mr-_b24px_B my-_b10px_B"
                  })),
                  _cV(_component_up_loading_icon, _uM({
                    duration: "2400",
                    text: "慢 2400",
                    class: "mr-_b24px_B my-_b10px_B"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "显示与隐藏（show）"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center h-_b40px_B" }), [
                  _cV(_component_up_loading_icon, _uM({
                    show: loadingShow.value,
                    text: "切换下方按钮查看效果",
                    color: "#2979ff"
                  }), null, 8 /* PROPS */, ["show"])
                ]),
                _cE("view", _uM({ class: "weapp-tw-border mt-_b12px_B" }), [
                  _cV(_component_up_button, _uM({
                    type: "primary",
                    size: "mini",
                    text: loadingShow.value ? '隐藏加载动画' : '显示加载动画',
                    onClick: () => {loadingShow.value = !loadingShow.value}
                  }), null, 8 /* PROPS */, ["text", "onClick"])
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
const GenSrcSubUviewUltraDemosLoadingIconLoadingIconStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))]])]
