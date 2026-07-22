import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
const { defineComponent, resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, createElementVNode } = globalThis.Vue
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-card/up-card.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-card/card.js";
import "../../../../../uni_modules/uview-ultra/components/up-button/button.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
const logoImg = "/static/logo.png";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "card",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const __returned__ = { logoImg, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "flex-row": { "": { "flexDirection": "row" } }, "h-10px": { "": { "height": 10 } }, "justify-between": { "": { "justifyContent": "space-between" } }, "justify-end": { "": { "justifyContent": "flex-end" } }, "leading-20px": { "": { "lineHeight": "20px" } }, "leading-24px": { "": { "lineHeight": "24px" } }, "mr-10px": { "": { "marginRight": 10 } }, "mt-12px": { "": { "marginTop": 12 } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "pb-30px": { "": { "paddingBottom": 30 } }, "text-__2979ff_": { "": { "color": "#2979ff" } }, "text-__333_": { "": { "color": "#333333" } }, "text-__606266_": { "": { "color": "#606266" } }, "text-__909399_": { "": { "color": "#909399" } }, "text-12px": { "": { "fontSize": 12 } }, "text-13px": { "": { "fontSize": 13 } }, "text-14px": { "": { "fontSize": 14 } }, "w-full": { "": { "width": "100%" } } };
const _style_1 = { "demo-block": { "": { "marginBottom": 12, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor": "#ffffff", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "demo-label": { "": { "fontSize": 14, "fontWeight": "bold", "color": "#606266", "marginBottom": 10, "paddingLeft": 4, "borderLeftWidth": 3, "borderLeftStyle": "solid", "borderLeftColor": "#2979ff" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_card = resolveEasycom(resolveDynamicComponent("up-card"), __easycom_1);
  const _component_up_button = resolveEasycom(resolveDynamicComponent("up-button"), __easycom_2);
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-card 卡片"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }, [
            createVNode(_component_NavBar, {
              title: "up-card 卡片",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            }),
            createElementVNode("view", { class: "p-16px" }, [
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "基础卡片"),
                createVNode(_component_up_card, {
                  title: "基础卡片",
                  "sub-title": "副标题",
                  margin: "0",
                  "show-foot": false
                }, {
                  default: withCtx(() => [
                    createElementVNode("text", {
                      slot: "body",
                      class: "text-13px text-__606266_ leading-20px"
                    }, "这是卡片主体内容区域，可以放置任意内容。")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createElementVNode("view", { class: "h-10px" }),
                createVNode(_component_up_card, {
                  title: "带缩略图",
                  thumb: $setup.logoImg,
                  "thumb-circle": true,
                  "thumb-width": "36px",
                  margin: "0"
                }, {
                  default: withCtx(() => [
                    createElementVNode("text", {
                      slot: "body",
                      class: "text-13px text-__606266_ leading-20px"
                    }, "左侧缩略图为圆形，适合展示头像或图标。"),
                    createElementVNode("view", {
                      slot: "foot",
                      class: "flex-row justify-between w-full"
                    }, [
                      createElementVNode("text", { class: "text-12px text-__909399_" }, "底部区域"),
                      createElementVNode("text", { class: "text-12px text-__2979ff_" }, "查看详情")
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createElementVNode("view", { class: "demo-block mt-12px" }, [
                createElementVNode("text", { class: "demo-label" }, "完整卡片(含头部和尾部)"),
                createVNode(_component_up_card, {
                  title: "订单信息",
                  "sub-title": "已完成",
                  thumb: $setup.logoImg,
                  margin: "0"
                }, {
                  default: withCtx(() => [
                    createElementVNode("text", {
                      slot: "body",
                      class: "text-14px text-__333_ leading-24px"
                    }, "订单编号：2023080112345678\n商品名称：某某精美商品一件\n购买时间：2023-08-01 12:34:56"),
                    createElementVNode("view", {
                      slot: "foot",
                      class: "flex-row justify-end w-full"
                    }, [
                      createVNode(_component_up_button, {
                        text: "评价",
                        type: "primary",
                        size: "mini",
                        plain: true,
                        class: "mr-10px"
                      }),
                      createVNode(_component_up_button, {
                        text: "再次购买",
                        type: "primary",
                        size: "mini"
                      })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createElementVNode("view", { class: "demo-block mt-12px" }, [
                createElementVNode("text", { class: "demo-label" }, "自定义阴影与边框"),
                createVNode(_component_up_card, {
                  title: "带明显阴影",
                  "sub-title": "自定义",
                  margin: "0",
                  "box-shadow": "0 4px 12px rgba(0,0,0,0.1)",
                  border: false
                }, {
                  default: withCtx(() => [
                    createElementVNode("text", {
                      slot: "body",
                      class: "text-13px text-__606266_"
                    }, "这个卡片去掉了边框，并自定义了较深的阴影效果。")
                  ]),
                  _: 1
                  /* STABLE */
                })
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
const card = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/card/card.uvue"]]);
export {
  card as default
};
//# sourceMappingURL=card.js.map
