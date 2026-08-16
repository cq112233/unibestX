"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_link_1 = common_vendor.resolveComponent("up-link");
  (_easycom_NavBar_1 + _easycom_up_link_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_link = () => "../../../../../uni_modules/uview-ultra/components/up-link/up-link.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_link + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "link",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Link 超链接",
          ["auto-back"]: true,
          class: "data-v-9630bf50"
        }),
        b: common_vendor.p({
          href: "https://uniapp.dcloud.io/",
          text: "打开 uni-app 官网",
          class: "data-v-9630bf50"
        }),
        c: common_vendor.p({
          href: "https://uview-plus.jiangruyi.com/",
          text: "带下划线的超链接",
          ["under-line"]: true,
          class: "data-v-9630bf50"
        }),
        d: common_vendor.p({
          href: "https://github.com",
          text: "自定义绿色 16px",
          color: "#19be6b",
          ["font-size"]: "16",
          class: "data-v-9630bf50"
        }),
        e: common_vendor.gei(_ctx, ""),
        f: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-9630bf50"
        }),
        g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9630bf50"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/link/link.js.map
