import { A as AppKu } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/navbar.js";
import "../../store/index.js";
import { L as LOGIN_PAGE } from "../../router/config.js";
import { h as handleBackPressExit } from "../../utils/backPress.js";
import { b as switchTabbar } from "../../tabbar/helper/index.js";
import { o as onNavbarPullDownRefresh, s as stopNavbarPullDownRefresh } from "../../utils/refresh.js";
import { u as useUserStore } from "../../store/user.js";
import { u as useTokenStore } from "../../store/token.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../utils/systemInfo.js";
import "../../tabbar/config.js";
import "../../tabbar/types.js";
import "../../tabbar/index.js";
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
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
import "../../tabbar/helper/store.js";
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
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../tabbar/custom/index.js";
import "../../utils/toast.js";
import "../../components/NavBar/NavBar.js";
import "../../utils/pageScroll.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, unref: _unref, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, setSharedDataClass: _setSharedDataClass, setSharedDataEvent: _setSharedDataEvent, createSharedDataComponent: _createSharedDataComponent, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenSrcPagesMeMe";
const { computed } = globalThis.Vue;
const { onBackPress, onShow } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/pages/me/me.uvue",
  __name: "me",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesMeMeSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcPagesMeMeSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    onNavbarPullDownRefresh(() => {
      setTimeout(() => {
        stopNavbarPullDownRefresh();
      }, 1e3);
    });
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
      uni.__f__("log", "at src/pages/me/me.uvue:108", "All storage keys:", uni.getStorageInfoSync().keys);
      uni.__f__("log", "at src/pages/me/me.uvue:109", "pinia:token:", uni.getStorageSync("pinia:token"));
      uni.__f__("log", "at src/pages/me/me.uvue:110", "pinia:user:", uni.getStorageSync("pinia:user"));
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
              switchTabbar("/src/pages/index/index");
            }, 0);
          }
        }
      }));
    }
    return () => {
      "raw js";
      const n25 = _createSharedDataComponent(AppKu, "69b481fa", {
        layout: "navbar",
        "show-back": false,
        "enable-pull-down-refresh": true,
        "page-style": { "navigationBarTitleText": "我的", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n24 = _createSharedDataComponent(LayoutComponent, "ce9bed38", {
            "show-back": false,
            "enable-pull-down-refresh": true,
            "page-style": { "navigationBarTitleText": "我的", "navigationStyle": "custom" }
          }, {
            "default": () => {
              _renderSharedDataEffect(() => {
                const _userStore = _unref(userStore);
                const _userStore_state = _userStore.state;
                _setSharedDataAttr(__sharedData, 7, _toSharedDataString(avatarUrl.value));
                _setSharedData(__sharedData, 8, _toDisplayString(_userStore_state.userInfo.username.length > 0 ? _userStore_state.userInfo.username : "未登录用户"));
              });
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 2, _toSharedDataBoolean(_unref(userStore).state.userInfo.username.length > 0));
              }, () => {
                _renderSharedDataEffect(() => {
                  return _setSharedData(__sharedData, 3, _toDisplayString(_unref(userStore).state.userInfo.nickname));
                });
              });
              _renderSharedDataEffect(() => {
                const _tokenStore = _unref(tokenStore);
                _setSharedDataClass(__sharedData, 9, ["weapp-tw-border wtu-15s69u4-r wtu-jzjlp-s wtu-15d7yqm-t wtu-w73263-u wtu-17lenqs-v wtu-j5499y-w", _tokenStore.hasValidLogin() ? "wtu-1x8u93y-x wtu-1obvnxf-y" : "wtu-11a9dql-z wtu-1ya1no3-o"]);
                _setSharedData(__sharedData, 10, _toDisplayString(_tokenStore.hasValidLogin() ? "已登录" : "未登录"));
                _setSharedData(__sharedData, 11, _toDisplayString(userInfoJson.value));
              });
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 4, _toSharedDataBoolean(_unref(tokenStore).hasValidLogin()));
              }, () => {
                _setSharedDataEvent(__sharedData, 5, handleLogout);
              }, () => {
                _setSharedDataEvent(__sharedData, 6, handleLogin);
              }, 517);
            }
          });
          _setSharedData(__sharedData, 1, n24.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n25.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const me = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  me as default
};
