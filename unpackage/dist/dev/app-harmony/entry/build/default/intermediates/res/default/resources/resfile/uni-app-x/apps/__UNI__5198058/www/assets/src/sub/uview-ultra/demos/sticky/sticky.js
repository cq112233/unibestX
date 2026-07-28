import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
const { defineComponent, ref, computed, resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, createElementVNode, normalizeStyle, createCommentVNode, createElementBlock, Fragment, renderList, toDisplayString } = globalThis.Vue
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as __easycom_2$1 } from "../../../../../uni_modules/uview-ultra/components/up-sticky/up-sticky.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
import { s as safeAreaInsets, a as systemInfo } from "../../../../utils/systemInfo.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
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
import "../../../../utils/toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-button/button.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
import "../../../../../uni_modules/uview-ultra/components/up-sticky/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-sticky/sticky.js";
import "../../../../../uni_modules/uview-ultra/libs/config/zIndex.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sticky",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const scrollTop = ref(0);
    const windowHeight = ref(uni.getWindowInfo().windowHeight);
    const navHeight = computed(() => {
      var _a2, _b, _c, _d;
      const top = (_d = (_b = (_a2 = safeAreaInsets.value) === null || _a2 === void 0 ? null : _a2.top) !== null && _b !== void 0 ? _b : (_c = systemInfo.value) === null || _c === void 0 ? null : _c.statusBarHeight) !== null && _d !== void 0 ? _d : 0;
      return top + 44;
    });
    function handleScroll(e) {
      scrollTop.value = e.detail.scrollTop;
    }
    const __returned__ = { scrollTop, windowHeight, navHeight, handleScroll, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__2979ff_": { "": { "backgroundImage": "none", "backgroundColor": "#2979ff" } }, "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "bg-white": { "": { "backgroundColor": "rgba(255,255,255,var(--un-bg-opacity,1))" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "h-14px": { "": { "height": 14 } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "leading-20px": { "": { "lineHeight": "20px" } }, "mb-10px": { "": { "marginBottom": 10 } }, "mb-12px": { "": { "marginBottom": 12 } }, "mr-6px": { "": { "marginRight": 6 } }, "mt-10px": { "": { "marginTop": 10 } }, "mt-4px": { "": { "marginTop": 4 } }, "p-12px": { "": { "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12 } }, "rounded-2px": { "": { "borderTopLeftRadius": 2, "borderTopRightRadius": 2, "borderBottomRightRadius": 2, "borderBottomLeftRadius": 2 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "shadow-sm": { "": { "boxShadow": "var(--un-inset-shadow,0 0 #0000),var(--un-inset-ring-shadow,0 0 #0000),var(--un-ring-offset-shadow,0 0 #0000),var(--un-ring-shadow,0 0 #0000),var(--un-shadow,0 1rpx 3rpx 0 var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))))", "--un-shadow": "0 1rpx 3rpx 0rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1)))" } }, "shadow-xs": { "": { "boxShadow": "var(--un-inset-shadow,0 0 #0000),var(--un-inset-ring-shadow,0 0 #0000),var(--un-ring-offset-shadow,0 0 #0000),var(--un-ring-shadow,0 0 #0000),var(--un-shadow,0 1rpx 3rpx 0 var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))))", "--un-shadow": "0 1rpx 2rpx 0rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.05)))" } }, "text-__1e293b_": { "": { "color": "#1e293b" } }, "text-__334155_": { "": { "color": "#334155" } }, "text-__64748b_": { "": { "color": "#64748b" } }, "text-__94a3b8_": { "": { "color": "#94a3b8" } }, "text-12px": { "": { "fontSize": 12 } }, "text-13px": { "": { "fontSize": 13 } }, "text-14px": { "": { "fontSize": 14 } }, "text-white": { "": { "color": "rgba(255,255,255,var(--un-color-opacity,1))" } }, "w-3px": { "": { "width": 3 } }, "w-90px": { "": { "width": 90 } } };
const _style_1 = { "page-container": { "": { "display": "flex", "flexDirection": "column" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_button = resolveEasycom(resolveDynamicComponent("up-button"), __easycom_2);
  const _component_up_sticky = resolveEasycom(resolveDynamicComponent("up-sticky"), __easycom_2$1);
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-sticky 吸顶"
      }, {
        default: withCtx(() => [
          createElementVNode(
            "view",
            {
              class: "page-container bg-__f8fafc_",
              style: normalizeStyle({ height: `${$setup.windowHeight}px` })
            },
            [
              createVNode(_component_NavBar, {
                title: "Sticky 吸顶",
                "auto-back": true
              }),
              createElementVNode(
                "scroll-view",
                {
                  style: { "flex": "1", "padding": "16px" },
                  "scroll-y": true,
                  onScroll: $setup.handleScroll
                },
                [
                  createCommentVNode(" 提示卡片 "),
                  createElementVNode("view", { class: "bg-white rounded-8px p-12px mb-12px shadow-xs" }, [
                    createElementVNode("view", { class: "flex-row items-center mb-10px" }, [
                      createElementVNode("view", { class: "w-3px h-14px bg-__2979ff_ mr-6px rounded-2px" }),
                      createElementVNode("text", { class: "text-14px font-bold text-__1e293b_" }, "吸顶效果说明")
                    ]),
                    createElementVNode("text", { class: "text-13px text-__64748b_ leading-20px" }, " 向上滑动页面，当下面的操作栏滚动到顶部时，会触发 up-sticky 组件吸顶悬浮固定。 ")
                  ]),
                  createCommentVNode(" 核心示范：使用 up-sticky 组件 "),
                  createVNode(_component_up_sticky, {
                    "offset-top": 0,
                    "custom-nav-height": $setup.navHeight,
                    "scroll-top": $setup.scrollTop
                  }, {
                    default: withCtx(() => [
                      createElementVNode("view", { class: "bg-__2979ff_ p-12px rounded-8px flex-row items-center justify-between shadow-sm mb-10px" }, [
                        createElementVNode("text", { class: "text-white font-bold text-14px" }, "📌 悬浮吸顶操作栏"),
                        createVNode(_component_up_button, {
                          size: "small",
                          type: "warning",
                          text: "立即体验",
                          class: "w-90px"
                        })
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["custom-nav-height", "scroll-top"]),
                  createCommentVNode(" 长列表填充区域 "),
                  (openBlock(), createElementBlock(
                    Fragment,
                    null,
                    renderList(25, (i) => {
                      return createElementVNode("view", {
                        key: i,
                        class: "bg-white rounded-8px p-12px mt-10px shadow-xs"
                      }, [
                        createElementVNode(
                          "text",
                          { class: "text-14px font-bold text-__334155_" },
                          "列表条目 #" + toDisplayString(i),
                          1
                          /* TEXT */
                        ),
                        createElementVNode("text", { class: "text-12px text-__94a3b8_ mt-4px" }, "向下滑动页面查看吸顶保持效果...")
                      ]);
                    }),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ],
                32
                /* NEED_HYDRATION */
              )
            ],
            4
            /* STYLE */
          )
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const sticky = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/sticky/sticky.uvue"]]);
export {
  sticky as default
};
//# sourceMappingURL=sticky.js.map
