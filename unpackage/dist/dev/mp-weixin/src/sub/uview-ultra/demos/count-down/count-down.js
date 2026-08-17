"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_count_down_1 = common_vendor.resolveComponent("up-count-down");
  (_easycom_NavBar_1 + _easycom_up_count_down_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_count_down = () => "../../../../../uni_modules/uview-ultra/components/up-count-down/up-count-down.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_count_down + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "count-down",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "CountDown 倒计时",
          ["auto-back"]: true,
          class: "data-v-c92c7137"
        }),
        b: common_vendor.p({
          time: 30 * 60 * 60 * 1e3,
          format: "HH:mm:ss",
          class: "data-v-c92c7137"
        }),
        c: common_vendor.p({
          time: 30 * 60 * 60 * 1e3,
          format: "DD天HH时mm分ss秒",
          class: "data-v-c92c7137"
        }),
        d: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-count-down 倒计时",
          class: "data-v-c92c7137"
        }),
        e: common_vendor.gei(_ctx, ""),
        f: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-c92c7137"
        }),
        g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c92c7137"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/count-down/count-down.js.map
