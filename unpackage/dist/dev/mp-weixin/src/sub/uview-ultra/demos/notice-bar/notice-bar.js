"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_notice_bar_1 = common_vendor.resolveComponent("up-notice-bar");
  (_easycom_NavBar_1 + _easycom_up_notice_bar_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_notice_bar = () => "../../../../../uni_modules/uview-ultra/components/up-notice-bar/up-notice-bar.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_notice_bar + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "notice-bar",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-notice-bar 滚动通知",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-15218ebf"
        }),
        b: common_vendor.p({
          text: "uview-ultra 是一款专为 uni-app X 设计的高品质 UI 组件库",
          mode: "link",
          class: "data-v-15218ebf"
        }),
        c: common_vendor.p({
          text: "通知：系统将于今晚 24:00 进行维护更新。",
          type: "warning",
          class: "data-v-15218ebf"
        }),
        d: common_vendor.p({
          text: "成功：数据已经成功备份到云端。",
          type: "success",
          class: "data-v-15218ebf"
        }),
        e: common_vendor.p({
          text: "错误：网络连接失败，请检查设置。",
          type: "error",
          class: "data-v-15218ebf"
        }),
        f: common_vendor.p({
          text: ["第一条重要通知", "第二条重要通知", "第三条重要通知"],
          direction: "column",
          class: "data-v-15218ebf"
        }),
        g: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-notice-bar 通知",
          class: "data-v-15218ebf"
        }),
        h: common_vendor.gei(_ctx, ""),
        i: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-15218ebf"
        }),
        j: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-15218ebf"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/notice-bar/notice-bar.js.map
