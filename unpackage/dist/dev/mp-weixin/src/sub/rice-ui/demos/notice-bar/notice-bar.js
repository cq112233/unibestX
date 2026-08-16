"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_notice_bar_1 = common_vendor.resolveComponent("rice-notice-bar");
  (_easycom_NavBar_1 + _easycom_rice_notice_bar_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_notice_bar = () => "../../../../../uni_modules/rice-ui/components/rice-notice-bar/rice-notice-bar.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_notice_bar + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "notice-bar",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "NoticeBar 公告栏",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-2dd2c5f7"
        }),
        b: currentTheme.value,
        c: common_vendor.p({
          message: "🎉 欢迎体验 unibestX 集成的 Rice UI 组件库，全端原生渲染，轻盈灵动！",
          scrollable: true,
          color: currentTheme.value,
          ["left-icon"]: "volume",
          class: "data-v-2dd2c5f7"
        }),
        d: currentTheme.value,
        e: common_vendor.p({
          type: "primary",
          color: currentTheme.value,
          message: "系统已升级至最新版本，体验更佳。",
          class: "data-v-2dd2c5f7"
        }),
        f: common_vendor.p({
          type: "success",
          message: "您提交的申请已审批通过。",
          class: "data-v-2dd2c5f7"
        }),
        g: common_vendor.p({
          type: "error",
          message: "网络连接异常，请检查网络设置。",
          closeable: true,
          class: "data-v-2dd2c5f7"
        }),
        h: common_vendor.gei(_ctx, ""),
        i: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-2dd2c5f7"
        }),
        j: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dd2c5f7"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/notice-bar/notice-bar.js.map
