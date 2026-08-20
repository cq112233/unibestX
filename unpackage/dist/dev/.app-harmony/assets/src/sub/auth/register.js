import { A as AppKu } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import { L as LOGIN_PAGE } from "../../router/config.js";
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
import "../../utils/theme.js";
import "../../../theme.js";
import "../../store/token.js";
import "../../store/user.js";
import "../../utils/systemInfo.js";
import "../../utils/toast.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "register",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    function doRegister() {
      uni.showToast({
        title: "注册成功",
        icon: "success"
      });
      setTimeout(() => {
        uni.navigateTo({
          url: LOGIN_PAGE
        });
      }, 1e3);
    }
    const __returned__ = { doRegister, get AppKu() {
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
      _createVNode($setup["LayoutComponent"], { "navigation-bar-title-text": "注册" }, {
        default: _withCtx(() => [
          _createElementVNode("view", { class: "flex-1 p-_b30px_B items-center justify-center" }, [
            _createElementVNode("view", { class: "mb-_b30px_B" }, [
              _createElementVNode("text", { class: "text-_b20px_B font-bold text-_b_h1e293b_B" }, "注册页")
            ]),
            _createElementVNode("view", {
              class: "w-_b200px_B h-_b44px_B rounded-_b8px_B bg-_b_h10b981_B flex flex-row items-center justify-center",
              onClick: $setup.doRegister
            }, [
              _createElementVNode("text", { class: "text-_b_hffffff_B text-_b14px_B font-bold" }, "点击模拟注册")
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
const _style_wt = {"flex-1":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"p-_b30px_B":{"":{"paddingTop":30,"paddingRight":30,"paddingBottom":30,"paddingLeft":30}},"items-center":{"":{"alignItems":"center"}},"justify-center":{"":{"justifyContent":"center"}},"mb-_b30px_B":{"":{"marginBottom":30}},"text-_b20px_B":{"":{"fontSize":20}},"font-bold":{"":{"--tw-font-weight":"700","fontWeight":700}},"text-_b_h1e293b_B":{"":{"color":"#1e293b"}},"w-_b200px_B":{"":{"width":200}},"h-_b44px_B":{"":{"height":44}},"rounded-_b8px_B":{"":{"borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"bg-_b_h10b981_B":{"":{"backgroundColor":"#10b981"}},"flex":{"":{"display":"flex"}},"flex-row":{"":{"flexDirection":"row"}},"text-_b_hffffff_B":{"":{"color":"#ffffff"}},"text-_b14px_B":{"":{"fontSize":14}}};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_wt]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/auth/register.uvue"]]);
export {
  register as default
};
//# sourceMappingURL=register.js.map
