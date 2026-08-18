import { A as AppKu } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import "../../store/index.js";
import { i as isPageTabbar, a as setCurIdxByPath } from "../../tabbar/store.js";
import { u as useTokenStore, I as ISingleTokenRes } from "../../store/token.js";
import { u as useUserStore, I as IUserInfo } from "../../store/user.js";
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
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../tabbar/types.js";
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
import "../../utils/toast.js";
import "../../store/app.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
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
import "../../tabbar/config.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const { onLoad } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "login",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const tokenStore = useTokenStore();
    const userStore = useUserStore();
    const redirectUrl = ref("");
    onLoad((options = null) => {
      if (options != null) {
        const redirect = options["redirect"];
        if (redirect != null) {
          redirectUrl.value = redirect;
        }
      }
    });
    function doLogin() {
      var _a2;
      if (tokenStore.hasValidLogin()) {
        if (redirectUrl.value !== "") {
          const targetUrl = (_a2 = decodeURIComponent(redirectUrl.value)) !== null && _a2 !== void 0 ? _a2 : "";
          if (isPageTabbar(targetUrl)) {
            setCurIdxByPath(targetUrl);
            uni.switchTab({ url: targetUrl });
          } else {
            uni.redirectTo({ url: targetUrl });
          }
        } else {
          uni.navigateBack();
        }
        return null;
      }
      tokenStore.setSingleToken(new ISingleTokenRes({
        token: "mock-token-UNIX-123456",
        expiresIn: 7200
      }));
      userStore.setUserInfo(new IUserInfo({
        userId: 1001,
        username: "UNIX",
        nickname: "UNIX 开发者",
        avatar: "/static/logo.png"
      }));
      uni.showToast({
        title: "登录成功",
        icon: "success"
      });
      setTimeout(() => {
        var _a3;
        if (redirectUrl.value !== "") {
          const targetUrl = (_a3 = decodeURIComponent(redirectUrl.value)) !== null && _a3 !== void 0 ? _a3 : "";
          if (isPageTabbar(targetUrl)) {
            setCurIdxByPath(targetUrl);
            uni.switchTab({ url: targetUrl });
          } else {
            uni.redirectTo({ url: targetUrl });
          }
        } else {
          uni.navigateBack();
        }
      }, 1e3);
    }
    const __returned__ = { tokenStore, userStore, redirectUrl, doLogin, get AppKu() {
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
      _createVNode($setup["LayoutComponent"], { "navigation-bar-title-text": "登录" }, {
        default: _withCtx(() => [
          _createElementVNode("view", { class: "flex-1 p-30px items-center justify-center" }, [
            _createElementVNode("view", { class: "mb-30px" }, [
              _createElementVNode("text", { class: "text-20px font-bold text-_b_h1e293b_B" }, "登录页")
            ]),
            _createElementVNode("view", {
              class: "w-200px h-44px rounded-8px bg-_b_h3b82f6_B flex flex-row items-center justify-center",
              onClick: $setup.doLogin
            }, [
              _createElementVNode("text", { class: "text-_b_hffffff_B text-14px font-bold" }, "点击模拟登录")
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
const _style_wt = {"flex-1":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"items-center":{"":{"alignItems":"center"}},"justify-center":{"":{"justifyContent":"center"}},"font-bold":{"":{"--tw-font-weight":"700","fontWeight":700}},"text-_b_h1e293b_B":{"":{"color":"#1e293b"}},"bg-_b_h3b82f6_B":{"":{"backgroundColor":"#3b82f6"}},"flex":{"":{"display":"flex"}},"flex-row":{"":{"flexDirection":"row"}},"text-_b_hffffff_B":{"":{"color":"#ffffff"}}};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_wt]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/auth/login.uvue"]]);
export {
  login as default
};
//# sourceMappingURL=login.js.map
