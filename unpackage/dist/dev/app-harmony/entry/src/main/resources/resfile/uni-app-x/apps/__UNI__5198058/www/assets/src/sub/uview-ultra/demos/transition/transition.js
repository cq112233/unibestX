import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
const { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, createElementVNode } = globalThis.Vue
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-transition/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-button/button.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "transition",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const transitionShow = ref(true);
    const slideMode = ref("slide-up");
    const slideShow = ref(false);
    function triggerSlide(mode) {
      slideMode.value = mode;
      slideShow.value = true;
      setTimeout(() => {
        slideShow.value = false;
      }, 1500);
    }
    const __returned__ = { transitionShow, slideMode, slideShow, triggerSlide, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__19be6b_": { "": { "backgroundImage": "none", "backgroundColor": "#19be6b" } }, "bg-__f56c6c_": { "": { "backgroundImage": "none", "backgroundColor": "#f56c6c" } }, "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-500": { "": { "fontWeight": 500 } }, "items-center": { "": { "alignItems": "center" } }, "justify-around": { "": { "justifyContent": "space-around" } }, "mt-10px": { "": { "marginTop": 10 } }, "mt-12px": { "": { "marginTop": 12 } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "pb-30px": { "": { "paddingBottom": 30 } }, "text-14px": { "": { "fontSize": 14 } }, "text-white": { "": { "color": "rgba(255,255,255,var(--un-color-opacity,1))" } } };
const _style_1 = { "demo-block": { "": { "marginBottom": 12, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor": "#ffffff", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "demo-label": { "": { "fontSize": 14, "fontWeight": "bold", "color": "#606266", "marginBottom": 10, "paddingLeft": 4, "borderLeftWidth": 3, "borderLeftStyle": "solid", "borderLeftColor": "#2979ff" } }, "transition-demo-wrapper": { "": { "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "paddingTop": 20, "paddingRight": 0, "paddingBottom": 20, "paddingLeft": 0 } }, "transition-demo-box": { "": { "width": 120, "height": 120, "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8, "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": 15 } }, "transition-demo-blue": { "": { "backgroundColor": "#2979ff" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_transition = resolveEasycom(resolveDynamicComponent("up-transition"), __easycom_1);
  const _component_up_button = resolveEasycom(resolveDynamicComponent("up-button"), __easycom_2);
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-transition 动画"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }, [
            createVNode(_component_NavBar, {
              title: "Transition 动画",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            }),
            createElementVNode("view", { class: "p-16px" }, [
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "内置过渡动画"),
                createElementVNode("view", { class: "transition-demo-wrapper" }, [
                  createVNode(_component_up_transition, {
                    show: $setup.transitionShow,
                    mode: "fade"
                  }, {
                    default: withCtx(() => [
                      createElementVNode("view", { class: "transition-demo-box transition-demo-blue" }, [
                        createElementVNode("text", { class: "text-14px text-white font-500" }, "fade 淡入淡出")
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["show"]),
                  createElementVNode("view", { class: "mt-10px" }, [
                    createVNode(_component_up_button, {
                      type: "primary",
                      text: $setup.transitionShow ? "隐藏动画" : "显示动画",
                      size: "mini",
                      onClick: _cache[0] || (_cache[0] = ($event) => $setup.transitionShow = !$setup.transitionShow)
                    }, null, 8, ["text"])
                  ])
                ])
              ]),
              createElementVNode("view", { class: "demo-block mt-12px" }, [
                createElementVNode("text", { class: "demo-label" }, "缩放动画"),
                createElementVNode("view", { class: "transition-demo-wrapper" }, [
                  createVNode(_component_up_transition, {
                    show: $setup.transitionShow,
                    mode: "zoom"
                  }, {
                    default: withCtx(() => [
                      createElementVNode("view", { class: "transition-demo-box bg-__19be6b_" }, [
                        createElementVNode("text", { class: "text-14px text-white font-500" }, "zoom 缩放")
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["show"])
                ])
              ]),
              createElementVNode("view", { class: "demo-block mt-12px" }, [
                createElementVNode("text", { class: "demo-label" }, "滑动动画"),
                createElementVNode("view", { class: "transition-demo-wrapper" }, [
                  createVNode(_component_up_transition, {
                    show: $setup.slideShow,
                    mode: $setup.slideMode
                  }, {
                    default: withCtx(() => [
                      createElementVNode("view", { class: "transition-demo-box bg-__f56c6c_" }, [
                        createElementVNode("text", { class: "text-14px text-white font-500" }, "slide 滑动")
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["show", "mode"])
                ]),
                createElementVNode("view", { class: "flex-row items-center justify-around mt-10px" }, [
                  createVNode(_component_up_button, {
                    type: "primary",
                    text: "上滑",
                    size: "mini",
                    onClick: _cache[1] || (_cache[1] = ($event) => $setup.triggerSlide("slide-up")),
                    "custom-style": "margin: 0 4px;"
                  }),
                  createVNode(_component_up_button, {
                    type: "success",
                    text: "下滑",
                    size: "mini",
                    onClick: _cache[2] || (_cache[2] = ($event) => $setup.triggerSlide("slide-down")),
                    "custom-style": "margin: 0 4px;"
                  }),
                  createVNode(_component_up_button, {
                    type: "warning",
                    text: "左滑",
                    size: "mini",
                    onClick: _cache[3] || (_cache[3] = ($event) => $setup.triggerSlide("slide-left")),
                    "custom-style": "margin: 0 4px;"
                  }),
                  createVNode(_component_up_button, {
                    type: "error",
                    text: "右滑",
                    size: "mini",
                    onClick: _cache[4] || (_cache[4] = ($event) => $setup.triggerSlide("slide-right")),
                    "custom-style": "margin: 0 4px;"
                  })
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
const transition = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/transition/transition.uvue"]]);
export {
  transition as default
};
//# sourceMappingURL=transition.js.map
