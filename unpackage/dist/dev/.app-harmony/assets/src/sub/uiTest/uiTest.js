const { defineComponent, openBlock, createBlock, withCtx, createVNode, createElementVNode, createCommentVNode } = globalThis.Vue
import { A as AppKu } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import { _ as _imports_0 } from "./images/logo.js";
import { _ as _imports_1 } from "../../../static/logo.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/props.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../uni_modules/uview-ultra/libs/mixin/mpMixin.js";
import "../../../uni_modules/uview-ultra/libs/mixin/mixin.js";
import "../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../uni_modules/uview-ultra/components/up-transition/props.js";
import "../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/props.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/overlay.js";
import "../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../tabbar/index.js";
import "../../tabbar/store.js";
import "../../tabbar/types.js";
import "../../tabbar/config.js";
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../utils/systemInfo.js";
import "../../store/index.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/token.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../store/user.js";
import "../../store/app.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh_CN.js";
import "../../i18n/locales/en_US.js";
import "../../utils/toast.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "uiTest",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const logoSrc = _imports_0;
    const __returned__ = { logoSrc, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "bg-white": { "": { "backgroundColor": "rgba(255,255,255,var(--un-bg-opacity,1))" } }, "font-bold": { "": { "fontWeight": 700 } }, "mb-16px": { "": { "marginBottom": 16 } }, "mb-8px": { "": { "marginBottom": 8 } }, "p-12px": { "": { "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12 } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "shadow-xs": { "": { "boxShadow": "var(--un-inset-shadow,0 0 #0000),var(--un-inset-ring-shadow,0 0 #0000),var(--un-ring-offset-shadow,0 0 #0000),var(--un-ring-shadow,0 0 #0000),var(--un-shadow,0 1rpx 3rpx 0 var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))))", "--un-shadow": "0 1rpx 2rpx 0rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.05)))" } }, "text-__334155_": { "": { "color": "#334155" } }, "text-__64748b_": { "": { "color": "#64748b" } }, "text-14px": { "": { "fontSize": 14 } }, "text-18px": { "": { "fontSize": 18 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], { "navigation-bar-title-text": "UI 测试" }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "p-16px min-h-screen bg-__f8fafc_" }, [
            createElementVNode("text", { class: "text-18px font-bold text-__334155_ mb-16px" }, "Image 标签测试"),
            createCommentVNode(" 1. 相对路径导入 / static 相对路径 "),
            createElementVNode("view", { class: "mb-16px p-12px bg-white rounded-8px shadow-xs" }, [
              createElementVNode("text", { class: "text-14px font-bold text-__64748b_ mb-8px" }, "1. 相对路径引用 (./images/logo.png)"),
              createElementVNode("image", {
                src: _imports_0,
                style: { "width": "80px", "height": "80px" },
                mode: "aspectFit"
              })
            ]),
            createCommentVNode(" 2. 根目录 /static/logo.png "),
            createElementVNode("view", { class: "mb-16px p-12px bg-white rounded-8px shadow-xs" }, [
              createElementVNode("text", { class: "text-14px font-bold text-__64748b_ mb-8px" }, "2. 绝对静态路径 (/static/logo.png)"),
              createElementVNode("image", {
                src: _imports_1,
                style: { "width": "80px", "height": "80px" },
                mode: "aspectFit"
              })
            ]),
            createCommentVNode(" 3. JS 动态 import / 响应式绑定 "),
            createElementVNode("view", { class: "mb-16px p-12px bg-white rounded-8px shadow-xs" }, [
              createElementVNode("text", { class: "text-14px font-bold text-__64748b_ mb-8px" }, "3. JS 变量绑定 (imported logo)"),
              createElementVNode("image", {
                src: $setup.logoSrc,
                style: { "width": "80px", "height": "80px" },
                mode: "aspectFit"
              }, null, 8, ["src"])
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
const uiTest = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uiTest/uiTest.uvue"]]);
export {
  uiTest as default
};
//# sourceMappingURL=uiTest.js.map
