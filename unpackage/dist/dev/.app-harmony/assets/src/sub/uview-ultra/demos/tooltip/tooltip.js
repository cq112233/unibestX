import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
const { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, createElementVNode, createCommentVNode } = globalThis.Vue
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-tooltip/up-tooltip.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/mixin/mpMixin.js";
import "../../../../../uni_modules/uview-ultra/libs/mixin/mixin.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-transition/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/overlay.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/store.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/config.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/token.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../store/user.js";
import "../../../../store/app.js";
import "../../../../i18n/index.js";
import "../../../../../uni_modules/lime-i18n/common/index.js";
import "../../../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../../../uni_modules/lime-i18n/common/format.js";
import "../../../../../uni_modules/lime-i18n/common/util.js";
import "../../../../../uni_modules/lime-i18n/common/errors.js";
import "../../../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../../../uni_modules/lime-i18n/common/types.js";
import "../../../../i18n/locales/zh_CN.js";
import "../../../../i18n/locales/en_US.js";
import "../../../../utils/toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-line/up-line.js";
import "../../../../../uni_modules/uview-ultra/components/up-line/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-line/line.js";
import "../../../../../uni_modules/uview-ultra/components/up-button/button.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
const _style_0 = { "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "flex": { "": { "display": "flex" } }, "flex-row": { "": { "flexDirection": "row" } }, "flex-wrap": { "": { "flexWrap": "wrap" } }, "items-center": { "": { "alignItems": "center" } }, "mb-8px": { "": { "marginBottom": 8 } }, "mr-12px": { "": { "marginRight": 12 } }, "mr-16px": { "": { "marginRight": 16 } }, "mt-12px": { "": { "marginTop": 12 } }, "none": { "": { "display": "none" } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "pb-30px": { "": { "paddingBottom": 30 } } };
const _style_1 = { "demo-block": { "": { "marginBottom": 12, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor": "#ffffff", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "demo-label": { "": { "fontSize": 14, "fontWeight": "bold", "color": "#606266", "marginBottom": 10, "paddingLeft": 4, "borderLeftWidth": 3, "borderLeftStyle": "solid", "borderLeftColor": "#2979ff" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_tooltip = resolveEasycom(resolveDynamicComponent("up-tooltip"), __easycom_1);
  const _component_up_button = resolveEasycom(resolveDynamicComponent("up-button"), __easycom_2);
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-tooltip 长按提示"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }, [
            createVNode(_component_NavBar, {
              title: "up-tooltip 长按提示",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            }),
            createElementVNode("view", { class: "p-16px" }, [
              createCommentVNode(" 基础用法 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "基础用法"),
                createElementVNode("view", { class: "flex flex-row items-center flex-wrap" }, [
                  createElementVNode("view", { class: "mr-12px mb-8px" }, [
                    createVNode(_component_up_tooltip, {
                      text: "长按此处复制文本",
                      direction: "top"
                    })
                  ]),
                  createElementVNode("view", { class: "mb-8px" }, [
                    createVNode(_component_up_tooltip, {
                      text: "长按显示操作",
                      direction: "top",
                      "show-copy": false,
                      buttons: $setup.tooltipButtons,
                      onClick: $setup.handleBtnClick
                    }, null, 8, ["buttons"])
                  ])
                ])
              ]),
              createCommentVNode(" 弹出方向 "),
              createElementVNode("view", { class: "demo-block mt-12px" }, [
                createElementVNode("text", { class: "demo-label" }, "弹出方向"),
                createElementVNode("view", { class: "flex flex-row items-center flex-wrap" }, [
                  createElementVNode("view", { class: "mr-16px mb-8px" }, [
                    createVNode(_component_up_tooltip, {
                      text: "长按文本，上方提示",
                      direction: "top"
                    })
                  ]),
                  createElementVNode("view", { class: "mb-8px" }, [
                    createVNode(_component_up_tooltip, {
                      text: "长按文本，下方提示",
                      direction: "bottom"
                    })
                  ])
                ])
              ]),
              createCommentVNode(" 高亮选中文本背景色 "),
              createElementVNode("view", { class: "demo-block mt-12px" }, [
                createElementVNode("text", { class: "demo-label" }, "高亮选中文本背景色"),
                createElementVNode("view", { class: "flex flex-row items-center" }, [
                  createVNode(_component_up_tooltip, {
                    text: "长按文本，显示背景色",
                    "bg-color": "#d1fae5",
                    direction: "top"
                  })
                ])
              ]),
              createCommentVNode(" 扩展按钮 "),
              createElementVNode("view", { class: "demo-block mt-12px" }, [
                createElementVNode("text", { class: "demo-label" }, "扩展按钮"),
                createElementVNode("view", { class: "flex flex-row items-center" }, [
                  createVNode(_component_up_tooltip, {
                    text: "显示多个扩展按钮",
                    "show-copy": true,
                    buttons: $setup.multiButtons,
                    onClick: $setup.handleBtnClick
                  }, null, 8, ["buttons"])
                ])
              ]),
              createCommentVNode(" 自定义触发器 (Slot) "),
              createElementVNode("view", { class: "demo-block mt-12px" }, [
                createElementVNode("text", { class: "demo-label" }, "自定义触发器 (Slot)"),
                createElementVNode("view", { class: "flex flex-row items-center" }, [
                  createElementVNode("view", { class: "mr-16px" }, [
                    createVNode(_component_up_tooltip, {
                      "show-copy": false,
                      buttons: ["设置", "赞"],
                      direction: "top",
                      onClick: $setup.handleBtnClick
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_up_button, {
                          type: "primary",
                          size: "small",
                          text: "点击/长按触发"
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  createElementVNode("view", null, [
                    createVNode(_component_up_tooltip, {
                      "show-copy": true,
                      buttons: ["自定义操作"],
                      direction: "bottom",
                      onClick: $setup.handleBtnClick
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_up_button, {
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
const tooltip = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/tooltip/tooltip.uvue"]]);
export {
  tooltip as default
};
//# sourceMappingURL=tooltip.js.map
