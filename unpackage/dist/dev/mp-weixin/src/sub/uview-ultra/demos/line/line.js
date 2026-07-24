"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_line_1 = common_vendor.resolveComponent("up-line");
  (_easycom_NavBar_1 + _easycom_up_line_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_line = () => "../../../../../uni_modules/uview-ultra/components/up-line/up-line.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_line + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "line",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Line 线条",
          ["auto-back"]: true,
          class: "data-v-bbad6b03"
        }),
        b: common_vendor.p({
          color: "#2979ff",
          length: "100%",
          class: "data-v-bbad6b03"
        }),
        c: common_vendor.p({
          color: "#2979ff",
          length: "100%",
          dashed: true,
          class: "data-v-bbad6b03"
        }),
        d: common_vendor.p({
          color: "#fa3534",
          length: "50%",
          class: "data-v-bbad6b03"
        }),
        e: common_vendor.p({
          color: "#19be6b",
          length: "80%",
          class: "data-v-bbad6b03"
        }),
        f: common_vendor.p({
          color: "#909399",
          direction: "col",
          length: "20px",
          margin: "0 10px",
          class: "data-v-bbad6b03"
        }),
        g: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-line 线条",
          class: "data-v-bbad6b03"
        }),
        h: common_vendor.gei(_ctx, ""),
        i: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-bbad6b03"
        }),
        j: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bbad6b03"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/line/line.js.map
