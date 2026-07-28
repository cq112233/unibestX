const { defineComponent, onBackPress, computed, onShow, openBlock, createBlock, withCtx, createVNode, createElementVNode, createCommentVNode, toDisplayString, createElementBlock, normalizeClass } = globalThis.Vue
import { A as AppKu } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import "../../store/index.js";
import { L as LOGIN_PAGE } from "../../router/config.js";
import { h as handleBackPressExit } from "../../utils/backPress.js";
import { a as setCurIdxByPath } from "../../tabbar/store.js";
import { u as useUserStore } from "../../store/user.js";
import { u as useTokenStore } from "../../store/token.js";
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
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../tabbar/types.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const __returned__ = { userStore, tokenStore, avatarUrl, userInfoJson, handleLogin, handleLogout, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__0f172a_": { "": { "backgroundImage": "none", "backgroundColor": "#0f172a" } }, "bg-__3b82f6_": { "": { "backgroundImage": "none", "backgroundColor": "#3b82f6" } }, "bg-__d1fae5_": { "": { "backgroundImage": "none", "backgroundColor": "#d1fae5" } }, "bg-__ef4444_": { "": { "backgroundImage": "none", "backgroundColor": "#ef4444" } }, "bg-__f1f5f9_": { "": { "backgroundImage": "none", "backgroundColor": "#f1f5f9" } }, "bg-white": { "": { "backgroundColor": "rgba(255,255,255,var(--un-bg-opacity,1))" } }, "border-bottom-color-__f1f5f9_": { "": { "borderBottomColor": "#f1f5f9" } }, "border-bottom-style-solid": { "": { "borderBottomStyle": "solid" } }, "border-bottom-width-1px": { "": { "borderBottomWidth": 1 } }, "border-color-__f1f5f9_": { "": { "borderTopColor": "#f1f5f9", "borderRightColor": "#f1f5f9", "borderBottomColor": "#f1f5f9", "borderLeftColor": "#f1f5f9" } }, "border-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-width-3px": { "": { "borderTopWidth": 3, "borderRightWidth": 3, "borderBottomWidth": 3, "borderLeftWidth": 3 } }, "flex": { "": { "display": "flex" } }, "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "flex-col": { "": { "flexDirection": "column" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "font-medium": { "": { "fontWeight": 500 } }, "font-semibold": { "": { "fontWeight": 600 } }, "h-180px": { "": { "height": 180 } }, "h-48px": { "": { "height": 48 } }, "h-90px": { "": { "height": 90 } }, "items-center": { "": { "alignItems": "center" } }, "justify-center": { "": { "justifyContent": "center" } }, "leading-20px": { "": { "lineHeight": "20px" } }, "mb-12px": { "": { "marginBottom": 12 } }, "mb-16px": { "": { "marginBottom": 16 } }, "mb-20px": { "": { "marginBottom": 20 } }, "mb-24px": { "": { "marginBottom": 24 } }, "mb-4px": { "": { "marginBottom": 4 } }, "overflow-hidden": { "": { "overflow": "hidden" } }, "p-12px": { "": { "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12 } }, "p-20px": { "": { "paddingTop": 20, "paddingRight": 20, "paddingBottom": 20, "paddingLeft": 20 } }, "pb-8px": { "": { "paddingBottom": 8 } }, "px-12px": { "": { "paddingLeft": 12, "paddingRight": 12 } }, "px-16px": { "": { "paddingLeft": 16, "paddingRight": 16 } }, "px-20px": { "": { "paddingLeft": 20, "paddingRight": 20 } }, "px-8px": { "": { "paddingLeft": 8, "paddingRight": 8 } }, "py-24px": { "": { "paddingTop": 24, "paddingBottom": 24 } }, "py-30px": { "": { "paddingTop": 30, "paddingBottom": 30 } }, "py-4px": { "": { "paddingTop": 4, "paddingBottom": 4 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "rounded-20px": { "": { "borderTopLeftRadius": 20, "borderTopRightRadius": 20, "borderBottomRightRadius": 20, "borderBottomLeftRadius": 20 } }, "rounded-45px": { "": { "borderTopLeftRadius": 45, "borderTopRightRadius": 45, "borderBottomRightRadius": 45, "borderBottomLeftRadius": 45 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "text-__065f46_": { "": { "color": "#065f46" } }, "text-__1e293b_": { "": { "color": "#1e293b" } }, "text-__334155_": { "": { "color": "#334155" } }, "text-__38bdf8_": { "": { "color": "#38bdf8" } }, "text-__64748b_": { "": { "color": "#64748b" } }, "text-__ffffff_": { "": { "color": "#ffffff" } }, "text-12px": { "": { "fontSize": 12 } }, "text-13px": { "": { "fontSize": 13 } }, "text-14px": { "": { "fontSize": 14 } }, "text-15px": { "": { "fontSize": 15 } }, "text-20px": { "": { "fontSize": 20 } }, "w-90px": { "": { "width": 90 } }, "w-full": { "": { "width": "100%" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], { "navigation-bar-title-text": "我的" }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "flex flex-col items-center px-16px py-24px flex-1" }, [
            createCommentVNode(" 头部卡片：用户头像及状态 "),
            createElementVNode("view", { class: "w-full bg-white rounded-12px px-20px py-30px mb-20px flex flex-col items-center" }, [
              createElementVNode("image", {
                class: "w-90px h-90px rounded-45px mb-16px border-width-3px border-color-__f1f5f9_ border-solid",
                src: $setup.avatarUrl
              }, null, 8, ["src"]),
              createElementVNode(
                "text",
                { class: "text-20px font-bold text-__1e293b_ mb-4px" },
                toDisplayString($setup.userStore.state.userInfo.username.length > 0 ? $setup.userStore.state.userInfo.username : "未登录用户"),
                1
                /* TEXT */
              ),
              $setup.userStore.state.userInfo.username.length > 0 ? (openBlock(), createElementBlock(
                "text",
                {
                  key: 0,
                  class: "text-14px text-__64748b_ mb-12px"
                },
                toDisplayString($setup.userStore.state.userInfo.nickname),
                1
                /* TEXT */
              )) : createCommentVNode("v-if", true),
              createElementVNode("view", { class: "flex flex-row" }, [
                createElementVNode(
                  "text",
                  {
                    class: normalizeClass(["text-12px px-12px py-4px rounded-20px font-medium overflow-hidden", $setup.tokenStore.hasValidLogin() ? "bg-__d1fae5_ text-__065f46_" : "bg-__f1f5f9_ text-__64748b_"])
                  },
                  toDisplayString($setup.tokenStore.hasValidLogin() ? "已登录" : "未登录"),
                  3
                  /* TEXT, CLASS */
                )
              ])
            ]),
            createCommentVNode(" 信息区域：序列化数据展示 "),
            createElementVNode("view", { class: "w-full bg-white rounded-12px p-20px mb-24px flex flex-col" }, [
              createElementVNode("view", { class: "border-bottom-width-1px border-bottom-style-solid border-bottom-color-__f1f5f9_ pb-8px mb-12px flex flex-row" }, [
                createElementVNode("text", { class: "text-15px font-semibold text-__334155_" }, "用户信息 (JSON)")
              ]),
              createElementVNode("scroll-view", {
                class: "bg-__0f172a_ rounded-8px p-12px h-180px",
                "scroll-y": "true"
              }, [
                createElementVNode(
                  "text",
                  {
                    class: "text-13px text-__38bdf8_ leading-20px",
                    style: { "font-family": "monospace" }
                  },
                  toDisplayString($setup.userInfoJson),
                  1
                  /* TEXT */
                )
              ])
            ]),
            createCommentVNode(" 按钮区域 "),
            createElementVNode("view", { class: "w-full px-8px flex flex-col" }, [
              $setup.tokenStore.hasValidLogin() ? (openBlock(), createElementBlock("view", {
                key: 0,
                class: "w-full h-48px rounded-8px bg-__ef4444_ flex flex-row items-center justify-center",
                onClick: $setup.handleLogout
              }, [
                createElementVNode("text", { class: "text-__ffffff_ text-14px font-bold" }, "退出登录")
              ])) : (openBlock(), createElementBlock("view", {
                key: 1,
                class: "w-full h-48px rounded-8px bg-__3b82f6_ flex flex-row items-center justify-center",
                onClick: $setup.handleLogin
              }, [
                createElementVNode("text", { class: "text-__ffffff_ text-14px font-bold" }, "登录")
              ]))
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
const me = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/me/me.uvue"]]);
export {
  me as default
};
//# sourceMappingURL=me.js.map
