import { A as AppKu } from "../../../App.ku.js";
import "../../store/index.js";
import { L as LOGIN_PAGE } from "../../router/config.js";
import { h as handleBackPressExit } from "../../utils/backPress.js";
import { a as setCurIdxByPath } from "../../tabbar/store.js";
import { u as useUserStore } from "../../store/user.js";
import { u as useTokenStore } from "../../store/token.js";
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
const { onBackPress, computed, onShow } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "me",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
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
      uni.__f__("log", "at src/pages/me/me.uvue:89", "All storage keys:", uni.getStorageInfoSync().keys);
      uni.__f__("log", "at src/pages/me/me.uvue:90", "pinia:token:", uni.getStorageSync("pinia:token"));
      uni.__f__("log", "at src/pages/me/me.uvue:91", "pinia:user:", uni.getStorageSync("pinia:user"));
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
    const __returned__ = { userStore, tokenStore, avatarUrl, userInfoJson, handleLogin, handleLogout, get AppKu() {
      return AppKu;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"wtu-1hohpe6-0":{"":{"display":"flex"}},"wtu-kfqmh9-1":{"":{"flexDirection":"column"}},"wtu-tikv1r-2":{"":{"alignItems":"center"}},"wtu-v9mcu4-3":{"":{"width":"100%"}},"wtu-4q8au6-4":{"":{"backgroundColor":"#fff"}},"wtu-1q8anq5-5":{"":{"--tw-border-style":"solid","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid","-TwBorderStyle":"solid","borderStyle":"solid"}},"wtu-58fnu4-6":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":"700","-TwFontWeight":"var(--font-weight-bold,700)"}},"wtu-1c3ypac-7":{"":{"color":"#1e293b"}},"wtu-1ya1no3-8":{"":{"color":"#64748b"}},"wtu-1pllh87-9":{"":{"flexDirection":"row"}},"wtu-17lenqs-a":{"":{"--tw-font-weight":"var(--font-weight-medium, 500)","fontWeight":"500","-TwFontWeight":"var(--font-weight-medium,500)"}},"wtu-j5499y-b":{"":{"overflow":"hidden"}},"wtu-1x8u93y-c":{"":{"backgroundColor":"#d1fae5"}},"wtu-1obvnxf-d":{"":{"color":"#065f46"}},"wtu-11a9dql-e":{"":{"backgroundColor":"#f1f5f9"}},"wtu-4yhcom-f":{"":{"--tw-font-weight":"var(--font-weight-semibold, 600)","fontWeight":"600","-TwFontWeight":"var(--font-weight-semibold,600)"}},"wtu-wy5oxr-g":{"":{"color":"#334155"}},"wtu-1p4csuv-h":{"":{"backgroundColor":"#0f172a"}},"wtu-1f6mdr3-i":{"":{"color":"#38bdf8"}},"wtu-1l9wu4z-j":{"":{"backgroundColor":"#ef4444"}},"wtu-1rnqkyn-k":{"":{"justifyContent":"center"}},"wtu-amc2mi-l":{"":{"color":"#ffffff"}},"wtu-1y6dimz-m":{"":{"backgroundColor":"#3b82f6"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, normalizeClass: _normalizeClass, withCtx: _withCtx, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-1hohpe6-0 wtu-kfqmh9-1 wtu-tikv1r-2 px-16px py-24px pb-100px" }, [
        _createElementVNode("view", { class: "wtu-v9mcu4-3 wtu-4q8au6-4 rounded-12px px-20px py-30px mb-20px wtu-1hohpe6-0 wtu-kfqmh9-1 wtu-tikv1r-2" }, [
          _createElementVNode("image", {
            class: "w-90px h-90px rounded-45px mb-16px border-width-3px border-color-[#f1f5f9] wtu-1q8anq5-5",
            src: $setup.avatarUrl
          }, null, 8, ["src"]),
          _createElementVNode(
            "text",
            { class: "text-20px wtu-58fnu4-6 wtu-1c3ypac-7 mb-4px" },
            _toDisplayString($setup.userStore.state.userInfo.username.length > 0 ? $setup.userStore.state.userInfo.username : "未登录用户"),
            1
            /* TEXT */
          ),
          $setup.userStore.state.userInfo.username.length > 0 ? (_openBlock(), _createElementBlock(
            "text",
            {
              key: 0,
              class: "text-14px wtu-1ya1no3-8 mb-12px"
            },
            _toDisplayString($setup.userStore.state.userInfo.nickname),
            1
            /* TEXT */
          )) : _createCommentVNode("v-if", true),
          _createElementVNode("view", { class: "wtu-1hohpe6-0 wtu-1pllh87-9" }, [
            _createElementVNode(
              "text",
              {
                class: _normalizeClass(["text-12px px-12px py-4px rounded-20px wtu-17lenqs-a wtu-j5499y-b", $setup.tokenStore.hasValidLogin() ? "wtu-1x8u93y-c wtu-1obvnxf-d" : "wtu-11a9dql-e wtu-1ya1no3-8"])
              },
              _toDisplayString($setup.tokenStore.hasValidLogin() ? "已登录" : "未登录"),
              3
              /* TEXT, CLASS */
            )
          ])
        ]),
        _createElementVNode("view", { class: "wtu-v9mcu4-3 wtu-4q8au6-4 rounded-12px p-20px mb-24px wtu-1hohpe6-0 wtu-kfqmh9-1" }, [
          _createElementVNode("view", { class: "border-bottom-width-1px border-bottom-style-solid border-bottom-color-[#f1f5f9] pb-8px mb-12px wtu-1hohpe6-0 wtu-1pllh87-9" }, [
            _createElementVNode("text", { class: "text-15px wtu-4yhcom-f wtu-wy5oxr-g" }, "用户信息 (JSON)")
          ]),
          _createElementVNode("scroll-view", {
            class: "wtu-1p4csuv-h rounded-8px p-12px h-180px",
            direction: "vertical"
          }, [
            _createElementVNode(
              "text",
              {
                class: "text-13px wtu-1f6mdr3-i leading-20px",
                style: { "font-family": "monospace" }
              },
              _toDisplayString($setup.userInfoJson),
              1
              /* TEXT */
            )
          ])
        ]),
        _createElementVNode("view", { class: "wtu-v9mcu4-3 px-8px wtu-1hohpe6-0 wtu-kfqmh9-1" }, [
          $setup.tokenStore.hasValidLogin() ? (_openBlock(), _createElementBlock("view", {
            key: 0,
            class: "wtu-v9mcu4-3 h-48px rounded-8px wtu-1l9wu4z-j wtu-1hohpe6-0 wtu-1pllh87-9 wtu-tikv1r-2 wtu-1rnqkyn-k",
            onClick: $setup.handleLogout
          }, [
            _createElementVNode("text", { class: "wtu-amc2mi-l text-14px wtu-58fnu4-6" }, "退出登录")
          ])) : (_openBlock(), _createElementBlock("view", {
            key: 1,
            class: "wtu-v9mcu4-3 h-48px rounded-8px wtu-1y6dimz-m wtu-1hohpe6-0 wtu-1pllh87-9 wtu-tikv1r-2 wtu-1rnqkyn-k",
            onClick: $setup.handleLogin
          }, [
            _createElementVNode("text", { class: "wtu-amc2mi-l text-14px wtu-58fnu4-6" }, "登录")
          ]))
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const me = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/me/me.uvue"]]);
export {
  me as default
};
//# sourceMappingURL=me.js.map
