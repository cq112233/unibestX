"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_gap_1 = common_vendor.resolveComponent("up-gap");
  (_easycom_NavBar_1 + _easycom_up_gap_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_gap = () => "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_gap + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "gap",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Gap 间隔槽",
          ["auto-back"]: true,
          class: "data-v-59ed2efe"
        }),
        b: common_vendor.p({
          height: "30",
          ["bg-color"]: "#f3f4f6",
          class: "data-v-59ed2efe"
        }),
        c: common_vendor.p({
          height: "50",
          ["bg-color"]: "#f3f4f6",
          class: "data-v-59ed2efe"
        }),
        d: common_vendor.p({
          height: "30",
          ["bg-color"]: "#fa3534",
          class: "data-v-59ed2efe"
        }),
        e: common_vendor.p({
          height: "20",
          ["bg-color"]: "#f3f4f6",
          ["margin-top"]: "10",
          ["margin-bottom"]: "10",
          class: "data-v-59ed2efe"
        }),
        f: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-gap 间隔槽",
          class: "data-v-59ed2efe"
        }),
        g: common_vendor.gei(_ctx, ""),
        h: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-59ed2efe"
        }),
        i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-59ed2efe"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/gap/gap.js.map
