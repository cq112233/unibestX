import { _ as _sfc_main$1 } from "../../../App.ku.js";
import "../../store/index.js";
import { i as isPageTabbar, a as setCurIdxByPath } from "../../tabbar/store.js";
import { u as useTokenStore, I as ISingleTokenRes } from "../../store/token.js";
import { u as useUserStore, I as IUserInfo } from "../../store/user.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../tabbar/index.js";
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../tabbar/types.js";
import "../../utils/i18n.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh-CN.js";
import "../../i18n/locales/en-US.js";
import "../../utils/systemInfo.js";
import "../../../uni_modules/rice-ui/libs/store/useConfig.js";
import "../../../uni_modules/rice-ui/libs/use/useCountDown/index.js";
import "../../../uni_modules/rice-ui/libs/use/useNamespace/index.js";
import "../../../uni_modules/rice-ui/libs/use/usePopup/index.js";
import "../../../uni_modules/rice-ui/libs/utils/basic.js";
import "../../../uni_modules/rice-ui/libs/use/useRelation/useChildren.js";
import "../../../uni_modules/rice-ui/libs/use/useRelation/useParent.js";
import "../../../uni_modules/rice-ui/libs/use/useSafeArea/index.js";
import "../../../uni_modules/rice-ui/libs/use/useTouch/index.js";
import "../../../uni_modules/rice-ui/libs/plugin/coloruts/constant.js";
import "../../../uni_modules/rice-ui/libs/plugin/coloruts/type.js";
import "../../../uni_modules/rice-ui/libs/plugin/dateuts/type.js";
import "../../../uni_modules/rice-ui/libs/plugin/dateuts/locale.js";
import "../../../uni_modules/rice-ui/components/rice-action-sheet/type.js";
import "../../../uni_modules/rice-ui/components/rice-action-sheet/api.js";
import "../../../uni_modules/rice-ui/libs/utils/debug.js";
import "../../../uni_modules/rice-ui/components/rice-button/type.js";
import "../../../uni_modules/rice-ui/components/rice-loading/type.js";
import "../../../uni_modules/rice-ui/components/rice-calendar/type.js";
import "../../../uni_modules/rice-ui/components/rice-calendar/lunar.js";
import "../../../uni_modules/rice-ui/components/rice-cascader/type.js";
import "../../../uni_modules/rice-ui/components/rice-dialog/type.js";
import "../../../uni_modules/rice-ui/components/rice-dialog/api.js";
import "../../../uni_modules/rice-ui/components/rice-datetime-picker/type.js";
import "../../../uni_modules/rice-ui/components/rice-picker/type.js";
import "../../../uni_modules/rice-ui/components/rice-float-fab/type.js";
import "../../../uni_modules/rice-ui/components/rice-swipe-actions-item/type.js";
import "../../../uni_modules/rice-ui/components/rice-tabs/type.js";
import "../../../uni_modules/rice-ui/components/rice-badge/type.js";
import "../../../uni_modules/rice-ui/components/rice-icon/font.js";
import "../../../uni_modules/rice-ui/components/rice-uploader/type.js";
import "../../../uni_modules/rice-ui/components/rice-form/index.js";
import "../../../uni_modules/rice-ui/components/rice-form/type.js";
import "../../../uni_modules/rice-ui/components/rice-form-item/index.js";
import "../../../uni_modules/rice-ui/components/rice-form-item/type.js";
import "../../../uni_modules/rice-ui/components/rice-radio/type.js";
import "../../../uni_modules/rice-ui/components/rice-radio-group/index.js";
import "../../../uni_modules/rice-ui/components/rice-radio-group/type.js";
import "../../../uni_modules/rice-ui/components/rice-checkbox/type.js";
import "../../../uni_modules/rice-ui/components/rice-checkbox-group/index.js";
import "../../../uni_modules/rice-ui/components/rice-checkbox-group/type.js";
import "../../../uni_modules/rice-ui/components/rice-code-input/type.js";
import "../../../uni_modules/rice-ui/components/rice-qrcode/type.js";
import "../../store/app.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../tabbar/config.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, setSharedDataEvent: _setSharedDataEvent, createSharedDataComponent: _createSharedDataComponent, setSharedData: _setSharedData } = globalThis.Vue;
const __className = "GenSrcSubAuthLogin";
const { ref } = globalThis.Vue;
const { onLoad } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "27ee1752",
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
      const n5 = _createSharedDataComponent(_sfc_main$1, "44259de4", null, {
        "default": () => {
          _setSharedDataEvent(__sharedData, 1, doLogin);
        }
      });
      _setSharedData(__sharedData, 0, n5.sharedData);
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
