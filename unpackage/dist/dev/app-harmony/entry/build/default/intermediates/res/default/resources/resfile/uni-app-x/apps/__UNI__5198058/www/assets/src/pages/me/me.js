import { _ as _sfc_main$1 } from "../../../App.ku.js";
import "../../store/index.js";
import { L as LOGIN_PAGE } from "../../router/config.js";
import { h as handleBackPressExit } from "../../utils/backPress.js";
import { a as setCurIdxByPath } from "../../tabbar/store.js";
import { u as useUserStore } from "../../store/user.js";
import { u as useTokenStore } from "../../store/token.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, unref: _unref, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, setSharedDataClass: _setSharedDataClass, setSharedDataEvent: _setSharedDataEvent, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesMeMe";
const { onBackPress, computed, onShow } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "a7bc1ff2",
  __className,
  __filename: "src/pages/me/me.uvue",
  __name: "me",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesMeMeSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcPagesMeMeSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    onBackPress((options) => {
      if (options.from == "backbutton") {
        return handleBackPressExit();
      }
      return false;
    });
    const userStore = useUserStore();
    const tokenStore = useTokenStore();
    const avatarUrl = computed(() => {
      if (userStore.state.userInfo.avatar.length > 0) {
        return userStore.state.userInfo.avatar;
      }
      return "/static/logo.png";
    });
    const userInfoJson = computed(() => {
      const info = new UTSJSONObject({
        userId: userStore.state.userInfo.userId,
        username: userStore.state.userInfo.username,
        nickname: userStore.state.userInfo.nickname,
        avatar: userStore.state.userInfo.avatar
      });
      return UTS.JSON.stringify(info, null, 2);
    });
    onShow(() => {
      uni.__f__("log", "at src/pages/me/me.uvue:82", "All storage keys:", uni.getStorageInfoSync().keys);
      uni.__f__("log", "at src/pages/me/me.uvue:83", "pinia:token:", uni.getStorageSync("pinia:token"));
      uni.__f__("log", "at src/pages/me/me.uvue:84", "pinia:user:", uni.getStorageSync("pinia:user"));
    });
    function handleLogin() {
      uni.navigateTo({
        url: LOGIN_PAGE
      });
    }
    function handleLogout() {
      uni.showModal(new UTSJSONObject({
        title: "提示",
        content: "确定要退出登录吗？",
        success: (res) => {
          if (res.confirm) {
            tokenStore.clearToken();
            userStore.clearUserInfo();
            uni.showToast({
              title: "退出登录成功",
              icon: "success"
            });
            setTimeout(() => {
              const targetUrl = "/src/pages/index/index";
              setCurIdxByPath(targetUrl);
              uni.switchTab({ url: targetUrl });
            }, 0);
          }
        }
      }));
    }
    return () => {
      "raw js";
      const n23 = _createSharedDataComponent(_sfc_main$1, "69b481fa", null, {
        "default": () => {
          _renderSharedDataEffect(() => {
            const _userStore = _unref(userStore);
            const _userStore_state = _userStore.state;
            _setSharedDataAttr(__sharedData, 6, _toSharedDataString(_unref(avatarUrl)));
            _setSharedData(__sharedData, 7, _toDisplayString(_userStore_state.userInfo.username.length > 0 ? _userStore_state.userInfo.username : "未登录用户"));
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 1, _toSharedDataBoolean(_unref(userStore).state.userInfo.username.length > 0));
          }, () => {
            _renderSharedDataEffect(() => {
              return _setSharedData(__sharedData, 2, _toDisplayString(_unref(userStore).state.userInfo.nickname));
            });
          });
          _renderSharedDataEffect(() => {
            const _tokenStore = _unref(tokenStore);
            _setSharedDataClass(__sharedData, 8, ["text-12px px-12px py-4px rounded-20px font-medium overflow-hidden", _tokenStore.hasValidLogin() ? "bg-__d1fae5_ text-__065f46_" : "bg-__f1f5f9_ text-__64748b_"]);
            _setSharedData(__sharedData, 9, _toDisplayString(_tokenStore.hasValidLogin() ? "已登录" : "未登录"));
            _setSharedData(__sharedData, 10, _toDisplayString(_unref(userInfoJson)));
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 3, _toSharedDataBoolean(_unref(tokenStore).hasValidLogin()));
          }, () => {
            _setSharedDataEvent(__sharedData, 4, handleLogout);
          }, () => {
            _setSharedDataEvent(__sharedData, 5, handleLogin);
          }, 517);
        }
      });
      _setSharedData(__sharedData, 0, n23.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const me = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  me as default
};
//# sourceMappingURL=me.js.map
