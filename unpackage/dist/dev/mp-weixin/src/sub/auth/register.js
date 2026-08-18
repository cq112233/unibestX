"use strict";
const common_vendor = require("../../../common/vendor.js");
const src_router_config = require("../../router/config.js");
if (!Math) {
  (common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../App.ku.js";
const LayoutComponent = () => "../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "register",
  setup(__props) {
    function doRegister() {
      common_vendor.index.showToast({
        title: "注册成功",
        icon: "success"
      });
      setTimeout(() => {
        common_vendor.index.navigateTo({
          url: src_router_config.LOGIN_PAGE
        });
      }, 1e3);
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.o(doRegister, "39"),
        b: common_vendor.p({
          ["navigation-bar-title-text"]: "注册"
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
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/sub/auth/register.js.map
