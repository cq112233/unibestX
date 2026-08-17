"use strict";
const common_vendor = require("../../../common/vendor.js");
require("../../store/index.js");
const src_tabbar_store = require("../../tabbar/store.js");
const src_store_token = require("../../store/token.js");
const src_store_user = require("../../store/user.js");
if (!Math) {
  (common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../App.ku.js";
const LayoutComponent = () => "../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "login",
  setup(__props) {
    const tokenStore = src_store_token.useTokenStore();
    const userStore = src_store_user.useUserStore();
    const redirectUrl = common_vendor.ref("");
    common_vendor.onLoad((options = null) => {
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
          if (src_tabbar_store.isPageTabbar(targetUrl)) {
            src_tabbar_store.setCurIdxByPath(targetUrl);
            common_vendor.index.switchTab({ url: targetUrl });
          } else {
            common_vendor.index.redirectTo({ url: targetUrl });
          }
        } else {
          common_vendor.index.navigateBack();
        }
        return null;
      }
      tokenStore.setSingleToken(new src_store_token.ISingleTokenRes({
        token: "mock-token-UNIX-123456",
        expiresIn: 7200
      }));
      userStore.setUserInfo(new src_store_user.IUserInfo({
        userId: 1001,
        username: "UNIX",
        nickname: "UNIX 开发者",
        avatar: "/static/logo.png"
      }));
      common_vendor.index.showToast({
        title: "登录成功",
        icon: "success"
      });
      setTimeout(() => {
        var _a2;
        if (redirectUrl.value !== "") {
          const targetUrl = (_a2 = decodeURIComponent(redirectUrl.value)) !== null && _a2 !== void 0 ? _a2 : "";
          if (src_tabbar_store.isPageTabbar(targetUrl)) {
            src_tabbar_store.setCurIdxByPath(targetUrl);
            common_vendor.index.switchTab({ url: targetUrl });
          } else {
            common_vendor.index.redirectTo({ url: targetUrl });
          }
        } else {
          common_vendor.index.navigateBack();
        }
      }, 1e3);
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.o(doLogin, "ec"),
        b: common_vendor.p({
          ["navigation-bar-title-text"]: "登录"
        }),
        c: common_vendor.gei(_ctx, ""),
        d: common_vendor.p({
          id: common_vendor.gei(_ctx, "")
        }),
        e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/sub/auth/login.js.map
