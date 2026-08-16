"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_button_1 = common_vendor.resolveComponent("rice-button");
  (_easycom_NavBar_1 + _easycom_rice_button_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_button = () => "../../../../../uni_modules/rice-ui/components/rice-button/rice-button.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_button + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "button",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Button 按钮",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-f07a2deb"
        }),
        b: currentTheme.value,
        c: common_vendor.p({
          type: "primary",
          color: currentTheme.value,
          text: "主要按钮",
          class: "data-v-f07a2deb"
        }),
        d: common_vendor.p({
          type: "success",
          text: "成功按钮",
          class: "data-v-f07a2deb"
        }),
        e: common_vendor.p({
          type: "warning",
          text: "警告按钮",
          class: "data-v-f07a2deb"
        }),
        f: common_vendor.p({
          type: "error",
          text: "危险按钮",
          class: "data-v-f07a2deb"
        }),
        g: common_vendor.p({
          type: "info",
          text: "信息按钮",
          class: "data-v-f07a2deb"
        }),
        h: common_vendor.p({
          type: "default",
          text: "默认按钮",
          class: "data-v-f07a2deb"
        }),
        i: currentTheme.value,
        j: common_vendor.p({
          type: "primary",
          color: currentTheme.value,
          text: "朴素主要",
          plain: true,
          class: "data-v-f07a2deb"
        }),
        k: common_vendor.p({
          type: "success",
          text: "朴素成功",
          plain: true,
          class: "data-v-f07a2deb"
        }),
        l: common_vendor.p({
          type: "warning",
          text: "朴素警告",
          plain: true,
          class: "data-v-f07a2deb"
        }),
        m: common_vendor.p({
          type: "error",
          text: "朴素危险",
          plain: true,
          class: "data-v-f07a2deb"
        }),
        n: currentTheme.value,
        o: common_vendor.p({
          type: "primary",
          color: currentTheme.value,
          text: "大号按钮 (large)",
          size: "large",
          class: "data-v-f07a2deb"
        }),
        p: common_vendor.p({
          type: "primary",
          color: currentTheme.value,
          text: "普通按钮 (normal)",
          size: "normal",
          class: "data-v-f07a2deb"
        }),
        q: common_vendor.p({
          type: "primary",
          color: currentTheme.value,
          text: "小型按钮 (small)",
          size: "small",
          class: "data-v-f07a2deb"
        }),
        r: common_vendor.p({
          type: "primary",
          color: currentTheme.value,
          text: "迷你 (mini)",
          size: "mini",
          class: "data-v-f07a2deb"
        }),
        s: currentTheme.value,
        t: common_vendor.p({
          type: "primary",
          color: currentTheme.value,
          icon: "search",
          text: "搜索",
          class: "data-v-f07a2deb"
        }),
        v: common_vendor.p({
          type: "success",
          icon: "plus",
          text: "添加",
          class: "data-v-f07a2deb"
        }),
        w: common_vendor.p({
          type: "primary",
          color: currentTheme.value,
          loading: true,
          ["loading-text"]: "加载中...",
          class: "data-v-f07a2deb"
        }),
        x: common_vendor.p({
          type: "primary",
          color: currentTheme.value,
          disabled: true,
          text: "禁用状态",
          class: "data-v-f07a2deb"
        }),
        y: currentTheme.value,
        z: common_vendor.p({
          type: "primary",
          color: currentTheme.value,
          shape: "round",
          text: "圆形按钮",
          class: "data-v-f07a2deb"
        }),
        A: common_vendor.p({
          color: "#7232dd",
          text: "单色按钮",
          class: "data-v-f07a2deb"
        }),
        B: common_vendor.p({
          color: "linear-gradient(to right, #ff6034, #ee0a24)",
          text: "渐变按钮",
          class: "data-v-f07a2deb"
        }),
        C: common_vendor.gei(_ctx, ""),
        D: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-f07a2deb"
        }),
        E: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f07a2deb"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/button/button.js.map
