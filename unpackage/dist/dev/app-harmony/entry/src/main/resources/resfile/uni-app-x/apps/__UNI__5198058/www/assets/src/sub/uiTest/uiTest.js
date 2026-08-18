import { A as AppKu } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import { _ as _imports_0 } from "./images/logo.js";
import { _ as _imports_0$1 } from "../../../static/logo.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../uni_modules/uview-ultra/libs/function/test.js";
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
import "../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../tabbar/index.js";
import "../../tabbar/store.js";
import "../../tabbar/types.js";
import "../../tabbar/config.js";
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../utils/i18n.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh-CN.js";
import "../../i18n/locales/en-US.js";
import "../../utils/systemInfo.js";
import "../../store/index.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/app.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../uni_modules/uview-ultra/libs/i18n/index.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ru.js";
import "../../store/token.js";
import "../../store/user.js";
import "../../utils/toast.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
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
const { createElementVNode: _createElementVNode, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createVNode($setup["LayoutComponent"], { "navigation-bar-title-text": "UI 测试" }, {
        default: _withCtx(() => [
          _createElementVNode("view", { class: "p-16px min-h-screen bg-_b_hf8fafc_B" }, [
            _createElementVNode("text", { class: "text-18px font-bold text-_b_h334155_B mb-16px" }, "Image 标签测试"),
            _createElementVNode("view", { class: "mb-16px p-12px bg-white rounded-8px shadow-xs" }, [
              _createElementVNode("text", { class: "text-14px font-bold text-_b_h64748b_B mb-8px" }, "1. 相对路径引用 (./images/logo.png)"),
              _createElementVNode("image", {
                src: _imports_0,
                style: { "width": "80px", "height": "80px" },
                mode: "aspectFit"
              })
            ]),
            _createElementVNode("view", { class: "mb-16px p-12px bg-white rounded-8px shadow-xs" }, [
              _createElementVNode("text", { class: "text-14px font-bold text-_b_h64748b_B mb-8px" }, "2. 绝对静态路径 (/static/logo.png)"),
              _createElementVNode("image", {
                src: _imports_0$1,
                style: { "width": "80px", "height": "80px" },
                mode: "aspectFit"
              })
            ]),
            _createElementVNode("view", { class: "mb-16px p-12px bg-white rounded-8px shadow-xs" }, [
              _createElementVNode("text", { class: "text-14px font-bold text-_b_h64748b_B mb-8px" }, "3. JS 变量绑定 (imported logo)"),
              _createElementVNode("image", {
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
const _style_wt = {"bg-_b_hf8fafc_B":{"":{"backgroundColor":"#f8fafc"}},"font-bold":{"":{"--tw-font-weight":"700","fontWeight":700}},"text-_b_h334155_B":{"":{"color":"#334155"}},"bg-white":{"":{"backgroundColor":"#ffffff"}},"text-_b_h64748b_B":{"":{"color":"#64748b"}}};
const uiTest = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_wt]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uiTest/uiTest.uvue"]]);
export {
  uiTest as default
};
//# sourceMappingURL=uiTest.js.map
