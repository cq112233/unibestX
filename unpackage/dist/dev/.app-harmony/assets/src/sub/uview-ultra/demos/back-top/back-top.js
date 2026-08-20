import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-back-top/up-back-top.js";
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
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "back-top",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const currentScrollTop = ref(0);
    const scrollTop = ref(0);
    const windowHeight = ref(uni.getWindowInfo().windowHeight);
    function handleScroll(e) {
      currentScrollTop.value = e.detail.scrollTop;
      scrollTop.value = e.detail.scrollTop;
    }
    function scrollToTop() {
      scrollTop.value = 0;
      currentScrollTop.value = 0;
    }
    const __returned__ = { currentScrollTop, scrollTop, windowHeight, handleScroll, scrollToTop, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"page-container":{"":{"display":"flex","flexDirection":"column"}},"flex":{"":{"display":"flex"}},"bg-_b_hf8fafc_B":{"":{"backgroundColor":"#f8fafc"}},"flex-col":{"":{"flexDirection":"column"}},"flex-1":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%","flex":"1"}},"p-_b16px_B":{"":{"paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16,"padding":16}},"bg-white":{"":{"backgroundColor":"var(--color-white)"}},"rounded-_b8px_B":{"":{"borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8,"borderRadius":8}},"p-_b12px_B":{"":{"paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12,"padding":12}},"mb-_b12px_B":{"":{"marginBottom":12}},"shadow-xs":{"":{"--tw-inset-shadow":"0 0 #0000","--tw-inset-ring-shadow":"0 0 #0000","--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 1px 2px 0 rgba(0, 0, 0, 0.05)","boxShadow":"var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","-TwShadow":"0 1px 2px 0 var(--tw-shadow-color,rgba(0,0,0,0.05))"}},"flex-row":{"":{"flexDirection":"row"}},"items-center":{"":{"alignItems":"center"}},"mb-_b10px_B":{"":{"marginBottom":10}},"w-_b3px_B":{"":{"width":3}},"h-_b14px_B":{"":{"height":14}},"bg-_b_h2979ff_B":{"":{"backgroundColor":"#2979ff"}},"mr-_b6px_B":{"":{"marginRight":6}},"rounded-_b2px_B":{"":{"borderTopLeftRadius":2,"borderTopRightRadius":2,"borderBottomRightRadius":2,"borderBottomLeftRadius":2,"borderRadius":2}},"text-_b14px_B":{"":{"fontSize":14}},"font-bold":{"":{"--tw-font-weight":"700","fontWeight":"var(--font-weight-bold)","-TwFontWeight":"var(--font-weight-bold)"}},"text-_b_h1e293b_B":{"":{"color":"#1e293b"}},"text-_b13px_B":{"":{"fontSize":13}},"text-_b_h64748b_B":{"":{"color":"#64748b"}},"leading-_b20px_B":{"":{"--tw-leading":"20px","lineHeight":20,"-TwLeading":20}},"text-_b12px_B":{"":{"fontSize":12}},"text-_b_h2563eb_B":{"":{"color":"#2563eb"}},"mt-_b6px_B":{"":{"marginTop":6}},"mt-_b10px_B":{"":{"marginTop":10}},"text-_b_h334155_B":{"":{"color":"#334155"}},"text-_b_h94a3b8_B":{"":{"color":"#94a3b8"}},"mt-_b4px_B":{"":{"marginTop":4}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, normalizeStyle: _normalizeStyle, withCtx: _withCtx, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(__resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_back_top = resolveEasycom(__resolveDynamicComponent("up-back-top"), __easycom_1);
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createVNode($setup["LayoutComponent"], {
        "navigation-bar-title-text": "Back Top 返回顶部",
        "navigation-style": "custom"
      }, {
        default: _withCtx(() => [
          _createElementVNode(
            "view",
            {
              class: "page-container bg-_b_hf8fafc_B flex flex-col",
              style: _normalizeStyle({ height: `${$setup.windowHeight}px` })
            },
            [
              _createVNode(_component_NavBar, {
                title: "Back Top 返回顶部",
                "auto-back": true
              }),
              _createElementVNode("scroll-view", {
                class: "flex-1 p-_b16px_B",
                direction: "vertical",
                "scroll-top": $setup.scrollTop,
                onScroll: $setup.handleScroll
              }, [
                _createElementVNode("view", { class: "bg-white rounded-_b8px_B p-_b12px_B mb-_b12px_B shadow-xs" }, [
                  _createElementVNode("view", { class: "flex-row items-center mb-_b10px_B" }, [
                    _createElementVNode("view", { class: "w-_b3px_B h-_b14px_B bg-_b_h2979ff_B mr-_b6px_B rounded-_b2px_B" }),
                    _createElementVNode("text", { class: "text-_b14px_B font-bold text-_b_h1e293b_B" }, "返回顶部说明")
                  ]),
                  _createElementVNode("text", { class: "text-_b13px_B text-_b_h64748b_B leading-_b20px_B" }, " 请向下滑动页面（超过 100px），右下角会自动浮现返回顶部按钮，点击后平滑一键置顶。 "),
                  _createElementVNode(
                    "text",
                    { class: "text-_b12px_B text-_b_h2563eb_B mt-_b6px_B" },
                    "当前 实时高度: " + _toDisplayString($setup.currentScrollTop) + "px",
                    1
                    /* TEXT */
                  )
                ]),
                (_openBlock(), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(20, (i) => {
                    return _createElementVNode("view", {
                      key: i,
                      class: "bg-white rounded-_b8px_B p-_b12px_B mt-_b10px_B shadow-xs"
                    }, [
                      _createElementVNode(
                        "text",
                        { class: "text-_b14px_B font-bold text-_b_h334155_B" },
                        "长列表测试卡片 #" + _toDisplayString(i),
                        1
                        /* TEXT */
                      ),
                      _createElementVNode("text", { class: "text-_b12px_B text-_b_h94a3b8_B mt-_b4px_B" }, "向下滚动触发右下角返回顶部悬浮图标...")
                    ]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ], 40, ["scroll-top"]),
              _createVNode(_component_up_back_top, {
                "scroll-top": $setup.currentScrollTop,
                top: 100,
                bottom: 80,
                right: 20,
                onClick: $setup.scrollToTop
              }, null, 8, ["scroll-top"])
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
const backTop = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/back-top/back-top.uvue"]]);
export {
  backTop as default
};
//# sourceMappingURL=back-top.js.map
