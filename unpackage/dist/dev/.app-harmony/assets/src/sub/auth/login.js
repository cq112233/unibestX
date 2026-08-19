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
import "../../utils/theme.js";
import "../../../theme.js";
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
import "../../utils/systemInfo.js";
import "../../utils/toast.js";
import "../../tabbar/config.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, setSharedDataEvent: _setSharedDataEvent, createSharedDataComponent: _createSharedDataComponent, setSharedData: _setSharedData, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenSrcSubAuthLogin";
const { ref } = globalThis.Vue;
const { onLoad } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "7a34a651",
  __className,
  __filename: "src/sub/auth/login.uvue",
  __name: "login",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubAuthLoginSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubAuthLoginSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
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
      var _a;
      if (tokenStore.hasValidLogin()) {
        if (redirectUrl.value !== "") {
          const targetUrl = (_a = decodeURIComponent(redirectUrl.value)) !== null && _a !== void 0 ? _a : "";
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
        var _a2;
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
      }, 1e3);
    }
    return () => {
      "raw js";
      const n6 = _createSharedDataComponent(AppKu, "44259de4", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n5 = _createSharedDataComponent(LayoutComponent, "408e1e92", { "navigation-bar-title-text": "登录" }, {
            "default": () => {
              _setSharedDataEvent(__sharedData, 2, doLogin);
            }
          });
          _setSharedData(__sharedData, 1, n5.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n6.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  login as default
};
//# sourceMappingURL=login.js.map
