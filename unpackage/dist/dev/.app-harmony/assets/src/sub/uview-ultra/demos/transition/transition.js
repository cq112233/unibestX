import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
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
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/store.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/config.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../i18n/index.js";
import "../../../../../uni_modules/lime-i18n/common/index.js";
import "../../../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../../../uni_modules/lime-i18n/common/format.js";
import "../../../../../uni_modules/lime-i18n/common/util.js";
import "../../../../../uni_modules/lime-i18n/common/errors.js";
import "../../../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../../../uni_modules/lime-i18n/common/types.js";
import "../../../../i18n/locales/zh-CN.js";
import "../../../../i18n/locales/en-US.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/app.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
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
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../utils/toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
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
const _style_0 = {"demo-block":{"":{"marginBottom":12,"paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12,"backgroundColor":"#ffffff","borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"demo-label":{"":{"fontSize":14,"fontWeight":"bold","color":"#606266","marginBottom":10,"paddingLeft":4,"borderLeftWidth":3,"borderLeftStyle":"solid","borderLeftColor":"#2979ff"}},"transition-demo-wrapper":{"":{"display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center","paddingTop":20,"paddingRight":0,"paddingBottom":20,"paddingLeft":0}},"transition-demo-box":{"":{"width":120,"height":120,"borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8,"display":"flex","alignItems":"center","justifyContent":"center","marginBottom":15}},"transition-demo-blue":{"":{"backgroundColor":"#2979ff"}},"flex":{"":{"display":"flex"}},"bg-_b_hf8fafc_B":{"":{"backgroundColor":"#f8fafc"}},"text-white":{"":{"color":"var(--color-white)"}},"flex-row":{"":{"flexDirection":"row"}},"items-center":{"":{"alignItems":"center"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(__resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_transition = resolveEasycom(__resolveDynamicComponent("up-transition"), __easycom_1);
  const _component_up_button = resolveEasycom(__resolveDynamicComponent("up-button"), __easycom_2);
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-transition 动画"
      }, {
        default: _withCtx(() => [
          _createElementVNode("view", { class: "page-container bg-_b_hf8fafc_B min-h-screen pb-30px" }, [
            _createVNode(_component_NavBar, {
              title: "Transition 动画",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            }),
            _createElementVNode("view", { class: "p-16px" }, [
              _createElementVNode("view", { class: "demo-block" }, [
                _createElementVNode("text", { class: "demo-label" }, "内置过渡动画"),
                _createElementVNode("view", { class: "transition-demo-wrapper" }, [
                  _createVNode(_component_up_transition, {
                    show: $setup.transitionShow,
                    mode: "fade"
                  }, {
                    default: _withCtx(() => [
                      _createElementVNode("view", { class: "transition-demo-box transition-demo-blue" }, [
                        _createElementVNode("text", { class: "text-14px text-white font-500" }, "fade 淡入淡出")
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["show"]),
                  _createElementVNode("view", { class: "mt-10px" }, [
                    _createVNode(_component_up_button, {
                      type: "primary",
                      text: $setup.transitionShow ? "隐藏动画" : "显示动画",
                      size: "mini",
                      onClick: _cache[0] || (_cache[0] = ($event) => $setup.transitionShow = !$setup.transitionShow)
                    }, null, 8, ["text"])
                  ])
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-12px" }, [
                _createElementVNode("text", { class: "demo-label" }, "缩放动画"),
                _createElementVNode("view", { class: "transition-demo-wrapper" }, [
                  _createVNode(_component_up_transition, {
                    show: $setup.transitionShow,
                    mode: "zoom"
                  }, {
                    default: _withCtx(() => [
                      _createElementVNode("view", { class: "transition-demo-box bg-_b_h19be6b_B" }, [
                        _createElementVNode("text", { class: "text-14px text-white font-500" }, "zoom 缩放")
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["show"])
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-12px" }, [
                _createElementVNode("text", { class: "demo-label" }, "滑动动画"),
                _createElementVNode("view", { class: "transition-demo-wrapper" }, [
                  _createVNode(_component_up_transition, {
                    show: $setup.slideShow,
                    mode: $setup.slideMode
                  }, {
                    default: _withCtx(() => [
                      _createElementVNode("view", { class: "transition-demo-box bg-_b_hf56c6c_B" }, [
                        _createElementVNode("text", { class: "text-14px text-white font-500" }, "slide 滑动")
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["show", "mode"])
                ]),
                _createElementVNode("view", { class: "flex-row items-center justify-around mt-10px" }, [
                  _createVNode(_component_up_button, {
                    type: "primary",
                    text: "上滑",
                    size: "mini",
                    "custom-style": "margin: 0 4px;",
                    onClick: _cache[1] || (_cache[1] = ($event) => $setup.triggerSlide("slide-up"))
                  }),
                  _createVNode(_component_up_button, {
                    type: "success",
                    text: "下滑",
                    size: "mini",
                    "custom-style": "margin: 0 4px;",
                    onClick: _cache[2] || (_cache[2] = ($event) => $setup.triggerSlide("slide-down"))
                  }),
                  _createVNode(_component_up_button, {
                    type: "warning",
                    text: "左滑",
                    size: "mini",
                    "custom-style": "margin: 0 4px;",
                    onClick: _cache[3] || (_cache[3] = ($event) => $setup.triggerSlide("slide-left"))
                  }),
                  _createVNode(_component_up_button, {
                    type: "error",
                    text: "右滑",
                    size: "mini",
                    "custom-style": "margin: 0 4px;",
                    onClick: _cache[4] || (_cache[4] = ($event) => $setup.triggerSlide("slide-right"))
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
const transition = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/transition/transition.uvue"]]);
export {
  transition as default
};
//# sourceMappingURL=transition.js.map
