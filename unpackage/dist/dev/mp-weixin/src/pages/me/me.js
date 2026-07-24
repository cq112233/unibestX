"use strict";
const common_vendor = require("../../../common/vendor.js");
require("../../store/index.js");
const src_router_config = require("../../router/config.js");
const src_tabbar_store = require("../../tabbar/store.js");
const src_store_user = require("../../store/user.js");
const src_store_token = require("../../store/token.js");
if (!Math) {
  (common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../App.ku.js";
const LayoutComponent = () => "../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "me",
  setup(__props) {
    common_vendor.onBackPress((options) => {
      return false;
    });
    const userStore = src_store_user.useUserStore();
    const tokenStore = src_store_token.useTokenStore();
    const avatarUrl = common_vendor.computed(() => {
      if (userStore.state.userInfo.avatar.length > 0) {
        return userStore.state.userInfo.avatar;
      }
      return "/static/logo.png";
    });
    const userInfoJson = common_vendor.computed(() => {
      const info = new common_vendor.UTSJSONObject({
        userId: userStore.state.userInfo.userId,
        username: userStore.state.userInfo.username,
        nickname: userStore.state.userInfo.nickname,
        avatar: userStore.state.userInfo.avatar
      });
      return common_vendor.UTS.JSON.stringify(info, null, 2);
    });
    common_vendor.onShow(() => {
      common_vendor.index.__f__("log", "at src/pages/me/me.uvue:82", "All storage keys:", common_vendor.index.getStorageInfoSync().keys);
      common_vendor.index.__f__("log", "at src/pages/me/me.uvue:83", "pinia:token:", common_vendor.index.getStorageSync("pinia:token"));
      common_vendor.index.__f__("log", "at src/pages/me/me.uvue:84", "pinia:user:", common_vendor.index.getStorageSync("pinia:user"));
    });
    function handleLogin() {
      common_vendor.index.navigateTo({
        url: src_router_config.LOGIN_PAGE
      });
    }
    function handleLogout() {
      common_vendor.index.showModal(new common_vendor.UTSJSONObject({
        title: "提示",
        content: "确定要退出登录吗？",
        success: (res) => {
          if (res.confirm) {
            tokenStore.clearToken();
            userStore.clearUserInfo();
            common_vendor.index.showToast({
              title: "退出登录成功",
              icon: "success"
            });
            setTimeout(() => {
              const targetUrl = "/src/pages/index/index";
              src_tabbar_store.setCurIdxByPath(targetUrl);
              common_vendor.index.switchTab({ url: targetUrl });
            }, 0);
          }
        }
      }));
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: common_vendor.unref(avatarUrl),
        b: common_vendor.t(common_vendor.unref(userStore).state.userInfo.username.length > 0 ? common_vendor.unref(userStore).state.userInfo.username : "未登录用户"),
        c: common_vendor.unref(userStore).state.userInfo.username.length > 0
      }, common_vendor.unref(userStore).state.userInfo.username.length > 0 ? {
        d: common_vendor.t(common_vendor.unref(userStore).state.userInfo.nickname)
      } : {}, {
        e: common_vendor.t(common_vendor.unref(tokenStore).hasValidLogin() ? "已登录" : "未登录"),
        f: common_vendor.n(common_vendor.unref(tokenStore).hasValidLogin() ? "bg-__d1fae5_ text-__065f46_" : "bg-__f1f5f9_ text-__64748b_"),
        g: common_vendor.t(common_vendor.unref(userInfoJson)),
        h: common_vendor.unref(tokenStore).hasValidLogin()
      }, common_vendor.unref(tokenStore).hasValidLogin() ? {
        i: common_vendor.o(handleLogout, "11")
      } : {
        j: common_vendor.o(handleLogin, "94")
      }, {
        k: common_vendor.p({
          ["navigation-bar-title-text"]: "我的"
        }),
        l: common_vendor.gei(_ctx, ""),
        m: common_vendor.p({
          id: common_vendor.gei(_ctx, "")
        }),
        n: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/pages/me/me.js.map
