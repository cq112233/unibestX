import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-tooltip/up-tooltip.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/app.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../tabbar/store.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/config.js";
import "../../../../i18n/index.js";
import "../../../../../uni_modules/lime-i18n/common/index.js";
import "../../../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/lime-i18n/common/format.js";
import "../../../../../uni_modules/lime-i18n/common/util.js";
import "../../../../../uni_modules/lime-i18n/common/errors.js";
import "../../../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../../../uni_modules/lime-i18n/common/types.js";
import "../../../../i18n/locales/zh-CN.js";
import "../../../../i18n/locales/en-US.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/index.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ru.js";
import "../../../../utils/theme.js";
import "../../../../../theme.js";
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../utils/toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-line/up-line.js";
import "../../../../../uni_modules/uview-ultra/components/up-line/line.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "tooltip",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const tooltipButtons = ref(["编辑", "删除"]);
    const multiButtons = ref(["转发", "收藏", "删除"]);
    function handleBtnClick(index) {
      uni.showToast({
        title: `点击了第 ${index} 个按钮`,
        icon: "none"
      });
    }
    const __returned__ = { tooltipButtons, multiButtons, handleBtnClick, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"demo-block":{"":{"marginBottom":12,"paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12,"backgroundColor":"#ffffff","borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"demo-label":{"":{"fontSize":14,"fontWeight":"bold","color":"#606266","marginBottom":10,"paddingLeft":4,"borderLeftWidth":3,"borderLeftStyle":"solid","borderLeftColor":"#2979ff"}},"bg-_b_hf8fafc_B":{"":{"backgroundColor":"#f8fafc"}},"pb-_b30px_B":{"":{"paddingBottom":30}},"p-_b16px_B":{"":{"paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16,"padding":16}},"flex":{"":{"display":"flex"}},"flex-row":{"":{"flexDirection":"row"}},"items-center":{"":{"alignItems":"center"}},"flex-wrap":{"":{"flexWrap":"wrap"}},"mr-_b12px_B":{"":{"marginRight":12}},"mb-_b8px_B":{"":{"marginBottom":8}},"mt-_b12px_B":{"":{"marginTop":12}},"mr-_b16px_B":{"":{"marginRight":16}},"min-h-screen":{"":{"minHeight":"100vh"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(__resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_tooltip = resolveEasycom(__resolveDynamicComponent("up-tooltip"), __easycom_1);
  const _component_up_button = resolveEasycom(__resolveDynamicComponent("up-button"), __easycom_2);
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-tooltip 长按提示"
      }, {
        default: _withCtx(() => [
          _createElementVNode("view", { class: "page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }, [
            _createVNode(_component_NavBar, {
              title: "up-tooltip 长按提示",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            }),
            _createElementVNode("view", { class: "p-_b16px_B" }, [
              _createElementVNode("view", { class: "demo-block" }, [
                _createElementVNode("text", { class: "demo-label" }, "基础用法"),
                _createElementVNode("view", { class: "flex flex-row items-center flex-wrap" }, [
                  _createElementVNode("view", { class: "mr-_b12px_B mb-_b8px_B" }, [
                    _createVNode(_component_up_tooltip, {
                      text: "长按此处复制文本",
                      direction: "top"
                    })
                  ]),
                  _createElementVNode("view", { class: "mb-_b8px_B" }, [
                    _createVNode(_component_up_tooltip, {
                      text: "长按显示操作",
                      direction: "top",
                      "show-copy": false,
                      buttons: $setup.tooltipButtons,
                      onClick: $setup.handleBtnClick
                    }, null, 8, ["buttons"])
                  ])
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-_b12px_B" }, [
                _createElementVNode("text", { class: "demo-label" }, "弹出方向"),
                _createElementVNode("view", { class: "flex flex-row items-center flex-wrap" }, [
                  _createElementVNode("view", { class: "mr-_b16px_B mb-_b8px_B" }, [
                    _createVNode(_component_up_tooltip, {
                      text: "长按文本，上方提示",
                      direction: "top"
                    })
                  ]),
                  _createElementVNode("view", { class: "mb-_b8px_B" }, [
                    _createVNode(_component_up_tooltip, {
                      text: "长按文本，下方提示",
                      direction: "bottom"
                    })
                  ])
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-_b12px_B" }, [
                _createElementVNode("text", { class: "demo-label" }, "高亮选中文本背景色"),
                _createElementVNode("view", { class: "flex flex-row items-center" }, [
                  _createVNode(_component_up_tooltip, {
                    text: "长按文本，显示背景色",
                    "bg-color": "#d1fae5",
                    direction: "top"
                  })
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-_b12px_B" }, [
                _createElementVNode("text", { class: "demo-label" }, "扩展按钮"),
                _createElementVNode("view", { class: "flex flex-row items-center" }, [
                  _createVNode(_component_up_tooltip, {
                    text: "显示多个扩展按钮",
                    "show-copy": true,
                    buttons: $setup.multiButtons,
                    onClick: $setup.handleBtnClick
                  }, null, 8, ["buttons"])
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-_b12px_B" }, [
                _createElementVNode("text", { class: "demo-label" }, "自定义触发器 (Slot)"),
                _createElementVNode("view", { class: "flex flex-row items-center" }, [
                  _createElementVNode("view", { class: "mr-_b16px_B" }, [
                    _createVNode(_component_up_tooltip, {
                      "show-copy": false,
                      buttons: ["设置", "赞"],
                      direction: "top",
                      onClick: $setup.handleBtnClick
                    }, {
                      default: _withCtx(() => [
                        _createVNode(_component_up_button, {
                          type: "primary",
                          size: "small",
                          text: "点击/长按触发"
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _createElementVNode("view", null, [
                    _createVNode(_component_up_tooltip, {
                      "show-copy": true,
                      buttons: ["自定义操作"],
                      direction: "bottom",
                      onClick: $setup.handleBtnClick
                    }, {
                      default: _withCtx(() => [
                        _createVNode(_component_up_button, {
                          type: "warning",
                          size: "small",
                          text: "下方弹出"
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ])
              ])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const tooltip = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/tooltip/tooltip.uvue"]]);
export {
  tooltip as default
};
//# sourceMappingURL=tooltip.js.map
