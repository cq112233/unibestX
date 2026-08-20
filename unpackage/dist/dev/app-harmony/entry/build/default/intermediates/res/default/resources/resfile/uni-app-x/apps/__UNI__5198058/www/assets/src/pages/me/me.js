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
      uni.__f__("log", "at src/pages/me/me.uvue:90", "All storage keys:", uni.getStorageInfoSync().keys);
      uni.__f__("log", "at src/pages/me/me.uvue:91", "pinia:token:", uni.getStorageSync("pinia:token"));
      uni.__f__("log", "at src/pages/me/me.uvue:92", "pinia:user:", uni.getStorageSync("pinia:user"));
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
const _style_0 = {"wtu-1hohpe6-0":{"":{"display":"flex"}},"wtu-kfqmh9-1":{"":{"flexDirection":"column"}},"wtu-tikv1r-2":{"":{"alignItems":"center"}},"wtu-ivlko1-3":{"":{"paddingLeft":16,"paddingRight":16}},"wtu-nw53rz-4":{"":{"paddingTop":24,"paddingBottom":24}},"wtu-1bwf8vl-5":{"":{"paddingBottom":100}},"wtu-v9mcu4-6":{"":{"width":"100%"}},"wtu-4q8au6-7":{"":{"backgroundColor":"#fff"}},"wtu-4hefdc-8":{"":{"borderTopLeftRadius":12,"borderTopRightRadius":12,"borderBottomRightRadius":12,"borderBottomLeftRadius":12,"borderRadius":12}},"wtu-8ywmhi-9":{"":{"paddingLeft":20,"paddingRight":20}},"wtu-eogvvs-a":{"":{"paddingTop":30,"paddingBottom":30}},"wtu-ugiijb-b":{"":{"marginBottom":20}},"wtu-1xovv6-c":{"":{"width":90}},"wtu-1h6ymxp-d":{"":{"height":90}},"wtu-152xqwk-e":{"":{"borderTopLeftRadius":45,"borderTopRightRadius":45,"borderBottomRightRadius":45,"borderBottomLeftRadius":45,"borderRadius":45}},"wtu-r07p60-f":{"":{"marginBottom":16}},"wtu-19juoov-g":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderRightStyle":"var(--tw-border-style)","borderBottomStyle":"var(--tw-border-style)","borderLeftStyle":"var(--tw-border-style)","borderTopWidth":3,"borderRightWidth":3,"borderBottomWidth":3,"borderLeftWidth":3,"-TwBorderStyle":"solid","borderStyle":"var(--tw-border-style)","borderWidth":3}},"wtu-1ypllkc-h":{"":{"borderTopColor":"#f1f5f9","borderRightColor":"#f1f5f9","borderBottomColor":"#f1f5f9","borderLeftColor":"#f1f5f9","borderColor":"#f1f5f9"}},"wtu-1q8anq5-i":{"":{"--tw-border-style":"solid","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid","-TwBorderStyle":"solid","borderStyle":"solid"}},"wtu-1fov80n-j":{"":{"fontSize":20}},"wtu-58fnu4-k":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":"700","-TwFontWeight":"var(--font-weight-bold,700)"}},"wtu-1c3ypac-l":{"":{"color":"#1e293b"}},"wtu-tminbx-m":{"":{"marginBottom":4}},"wtu-1n331w6-n":{"":{"fontSize":14}},"wtu-1ya1no3-o":{"":{"color":"#64748b"}},"wtu-kjtkcs-p":{"":{"marginBottom":12}},"wtu-1pllh87-q":{"":{"flexDirection":"row"}},"wtu-15s69u4-r":{"":{"fontSize":12}},"wtu-jzjlp-s":{"":{"paddingLeft":12,"paddingRight":12}},"wtu-1vsb6g1-t":{"":{"paddingTop":4,"paddingBottom":4}},"wtu-w73263-u":{"":{"borderTopLeftRadius":20,"borderTopRightRadius":20,"borderBottomRightRadius":20,"borderBottomLeftRadius":20,"borderRadius":20}},"wtu-17lenqs-v":{"":{"--tw-font-weight":"var(--font-weight-medium, 500)","fontWeight":"500","-TwFontWeight":"var(--font-weight-medium,500)"}},"wtu-j5499y-w":{"":{"overflow":"hidden"}},"wtu-1x8u93y-x":{"":{"backgroundColor":"#d1fae5"}},"wtu-1obvnxf-y":{"":{"color":"#065f46"}},"wtu-11a9dql-z":{"":{"backgroundColor":"#f1f5f9"}},"wtu-zc1s4-10":{"":{"paddingTop":20,"paddingRight":20,"paddingBottom":20,"paddingLeft":20,"padding":20}},"wtu-c4whgz-11":{"":{"marginBottom":24}},"wtu-f24hak-12":{"":{"paddingBottom":8}},"wtu-1dvngh7-13":{"":{"fontSize":15}},"wtu-4yhcom-14":{"":{"--tw-font-weight":"var(--font-weight-semibold, 600)","fontWeight":"600","-TwFontWeight":"var(--font-weight-semibold,600)"}},"wtu-wy5oxr-15":{"":{"color":"#334155"}},"wtu-oegkbd-16":{"":{"height":1}},"wtu-1p4csuv-17":{"":{"backgroundColor":"#0f172a"}},"wtu-tcbx2t-18":{"":{"borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8,"borderRadius":8}},"wtu-1ahbmur-19":{"":{"paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12,"padding":12}},"wtu-wpo3pd-1a":{"":{"height":180}},"wtu-ysnhyx-1b":{"":{"fontSize":13}},"wtu-1f6mdr3-1c":{"":{"color":"#38bdf8"}},"wtu-6wgrlu-1d":{"":{"--tw-leading":"20px","lineHeight":20,"-TwLeading":20}},"wtu-w39gum-1e":{"":{"paddingLeft":8,"paddingRight":8}},"wtu-8ijhou-1f":{"":{"height":48}},"wtu-1l9wu4z-1g":{"":{"backgroundColor":"#ef4444"}},"wtu-1rnqkyn-1h":{"":{"justifyContent":"center"}},"wtu-amc2mi-1i":{"":{"color":"#ffffff"}},"wtu-1y6dimz-1j":{"":{"backgroundColor":"#3b82f6"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, normalizeClass: _normalizeClass, withCtx: _withCtx, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-1hohpe6-0 wtu-kfqmh9-1 wtu-tikv1r-2 wtu-ivlko1-3 wtu-nw53rz-4 wtu-1bwf8vl-5" }, [
        _createElementVNode("view", { class: "wtu-v9mcu4-6 wtu-4q8au6-7 wtu-4hefdc-8 wtu-8ywmhi-9 wtu-eogvvs-a wtu-ugiijb-b wtu-1hohpe6-0 wtu-kfqmh9-1 wtu-tikv1r-2" }, [
          _createElementVNode("image", {
            class: "wtu-1xovv6-c wtu-1h6ymxp-d wtu-152xqwk-e wtu-r07p60-f wtu-19juoov-g wtu-1ypllkc-h wtu-1q8anq5-i",
            src: $setup.avatarUrl
          }, null, 8, ["src"]),
          _createElementVNode(
            "text",
            { class: "wtu-1fov80n-j wtu-58fnu4-k wtu-1c3ypac-l wtu-tminbx-m" },
            _toDisplayString($setup.userStore.state.userInfo.username.length > 0 ? $setup.userStore.state.userInfo.username : "未登录用户"),
            1
            /* TEXT */
          ),
          $setup.userStore.state.userInfo.username.length > 0 ? (_openBlock(), _createElementBlock(
            "text",
            {
              key: 0,
              class: "wtu-1n331w6-n wtu-1ya1no3-o wtu-kjtkcs-p"
            },
            _toDisplayString($setup.userStore.state.userInfo.nickname),
            1
            /* TEXT */
          )) : _createCommentVNode("v-if", true),
          _createElementVNode("view", { class: "wtu-1hohpe6-0 wtu-1pllh87-q" }, [
            _createElementVNode(
              "text",
              {
                class: _normalizeClass(["wtu-15s69u4-r wtu-jzjlp-s wtu-1vsb6g1-t wtu-w73263-u wtu-17lenqs-v wtu-j5499y-w", $setup.tokenStore.hasValidLogin() ? "wtu-1x8u93y-x wtu-1obvnxf-y" : "wtu-11a9dql-z wtu-1ya1no3-o"])
              },
              _toDisplayString($setup.tokenStore.hasValidLogin() ? "已登录" : "未登录"),
              3
              /* TEXT, CLASS */
            )
          ])
        ]),
        _createElementVNode("view", { class: "wtu-v9mcu4-6 wtu-4q8au6-7 wtu-4hefdc-8 wtu-zc1s4-10 wtu-c4whgz-11 wtu-1hohpe6-0 wtu-kfqmh9-1" }, [
          _createElementVNode("view", { class: "wtu-f24hak-12 wtu-1hohpe6-0 wtu-1pllh87-q" }, [
            _createElementVNode("text", { class: "wtu-1dvngh7-13 wtu-4yhcom-14 wtu-wy5oxr-15" }, "用户信息 (JSON)")
          ]),
          _createElementVNode("view", { class: "wtu-oegkbd-16 wtu-11a9dql-z wtu-kjtkcs-p" }),
          _createElementVNode("scroll-view", {
            class: "wtu-1p4csuv-17 wtu-tcbx2t-18 wtu-1ahbmur-19 wtu-wpo3pd-1a",
            direction: "vertical"
          }, [
            _createElementVNode(
              "text",
              {
                class: "wtu-ysnhyx-1b wtu-1f6mdr3-1c wtu-6wgrlu-1d",
                style: { "font-family": "monospace" }
              },
              _toDisplayString($setup.userInfoJson),
              1
              /* TEXT */
            )
          ])
        ]),
        _createElementVNode("view", { class: "wtu-v9mcu4-6 wtu-w39gum-1e wtu-1hohpe6-0 wtu-kfqmh9-1" }, [
          $setup.tokenStore.hasValidLogin() ? (_openBlock(), _createElementBlock("view", {
            key: 0,
            class: "wtu-v9mcu4-6 wtu-8ijhou-1f wtu-tcbx2t-18 wtu-1l9wu4z-1g wtu-1hohpe6-0 wtu-1pllh87-q wtu-tikv1r-2 wtu-1rnqkyn-1h",
            onClick: $setup.handleLogout
          }, [
            _createElementVNode("text", { class: "wtu-amc2mi-1i wtu-1n331w6-n wtu-58fnu4-k" }, "退出登录")
          ])) : (_openBlock(), _createElementBlock("view", {
            key: 1,
            class: "wtu-v9mcu4-6 wtu-8ijhou-1f wtu-tcbx2t-18 wtu-1y6dimz-1j wtu-1hohpe6-0 wtu-1pllh87-q wtu-tikv1r-2 wtu-1rnqkyn-1h",
            onClick: $setup.handleLogin
          }, [
            _createElementVNode("text", { class: "wtu-amc2mi-1i wtu-1n331w6-n wtu-58fnu4-k" }, "登录")
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
