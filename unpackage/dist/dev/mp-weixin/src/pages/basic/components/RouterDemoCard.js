"use strict";
const common_vendor = require("../../../../common/vendor.js");
const src_store_token = require("../../../store/token.js");
const src_store_user = require("../../../store/user.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "./Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "RouterDemoCard",
  setup(__props) {
    const tokenStore = src_store_token.useTokenStore();
    const userStore = src_store_user.useUserStore();
    const hasLogin = common_vendor.computed(() => {
      return tokenStore.hasValidLogin();
    });
    function jumpToTest() {
      common_vendor.index.navigateTo({
        url: "/src/sub/test/test?id=999&name=UNIX"
      });
    }
    function handleLogout() {
      tokenStore.clearToken();
      userStore.clearUserInfo();
      common_vendor.index.showToast({
        title: "已清除登录状态",
        icon: "success"
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.t(hasLogin.value ? "已登录" : "未登录"),
        b: hasLogin.value ? "#10b981" : "#f43f5e",
        c: common_vendor.o(jumpToTest, "db"),
        d: common_vendor.o(handleLogout, "1e"),
        e: common_vendor.gei(_ctx, ""),
        f: common_vendor.p({
          title: "路由拦截与传参测试",
          id: common_vendor.gei(_ctx, "")
        }),
        g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/RouterDemoCard.js.map
