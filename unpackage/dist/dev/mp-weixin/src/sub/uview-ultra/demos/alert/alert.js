"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_alert_1 = common_vendor.resolveComponent("up-alert");
  (_easycom_NavBar_1 + _easycom_up_alert_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_alert = () => "../../../../../uni_modules/uview-ultra/components/up-alert/up-alert.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_alert + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "alert",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-alert 警告提示",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-fed9496c"
        }),
        b: common_vendor.p({
          title: "成功提示",
          type: "success",
          ["show-icon"]: true,
          class: "data-v-fed9496c"
        }),
        c: common_vendor.p({
          title: "警告提示",
          type: "warning",
          ["show-icon"]: true,
          class: "data-v-fed9496c"
        }),
        d: common_vendor.p({
          title: "主要提示",
          type: "primary",
          class: "data-v-fed9496c"
        }),
        e: common_vendor.p({
          title: "错误提示",
          type: "error",
          class: "data-v-fed9496c"
        }),
        f: common_vendor.p({
          title: "信息提示",
          type: "info",
          class: "data-v-fed9496c"
        }),
        g: common_vendor.p({
          title: "成功",
          type: "success",
          description: "这是一段成功的描述信息",
          ["show-icon"]: true,
          class: "data-v-fed9496c"
        }),
        h: common_vendor.p({
          title: "带关闭按钮的提示",
          type: "warning",
          closable: true,
          ["show-icon"]: true,
          class: "data-v-fed9496c"
        }),
        i: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-alert 警告提示",
          class: "data-v-fed9496c"
        }),
        j: common_vendor.gei(_ctx, ""),
        k: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-fed9496c"
        }),
        l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fed9496c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/alert/alert.js.map
