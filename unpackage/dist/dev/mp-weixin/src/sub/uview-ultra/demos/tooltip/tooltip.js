"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_tooltip_1 = common_vendor.resolveComponent("up-tooltip");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  (_easycom_NavBar_1 + _easycom_up_tooltip_1 + _easycom_up_button_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_tooltip = () => "../../../../../uni_modules/uview-ultra/components/up-tooltip/up-tooltip.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_tooltip + _easycom_up_button + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tooltip",
  setup(__props) {
    const tooltipButtons = common_vendor.ref(["编辑", "删除"]);
    const multiButtons = common_vendor.ref(["转发", "收藏", "删除"]);
    function handleBtnClick(index) {
      common_vendor.index.showToast({
        title: `点击了第 ${index} 个按钮`,
        icon: "none"
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-tooltip 长按提示",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-065444fb"
        }),
        b: common_vendor.p({
          text: "长按此处复制文本",
          direction: "top",
          class: "data-v-065444fb"
        }),
        c: common_vendor.o(handleBtnClick, "2c"),
        d: common_vendor.p({
          text: "长按显示操作",
          direction: "top",
          ["show-copy"]: false,
          buttons: tooltipButtons.value,
          class: "data-v-065444fb"
        }),
        e: common_vendor.p({
          text: "长按文本，上方提示",
          direction: "top",
          class: "data-v-065444fb"
        }),
        f: common_vendor.p({
          text: "长按文本，下方提示",
          direction: "bottom",
          class: "data-v-065444fb"
        }),
        g: common_vendor.p({
          text: "长按文本，显示背景色",
          ["bg-color"]: "#d1fae5",
          direction: "top",
          class: "data-v-065444fb"
        }),
        h: common_vendor.o(handleBtnClick, "30"),
        i: common_vendor.p({
          text: "显示多个扩展按钮",
          ["show-copy"]: true,
          buttons: multiButtons.value,
          class: "data-v-065444fb"
        }),
        j: common_vendor.p({
          type: "primary",
          size: "small",
          text: "点击/长按触发",
          class: "data-v-065444fb"
        }),
        k: common_vendor.o(handleBtnClick, "9a"),
        l: common_vendor.p({
          ["show-copy"]: false,
          buttons: ["设置", "赞"],
          direction: "top",
          class: "data-v-065444fb"
        }),
        m: common_vendor.p({
          type: "warning",
          size: "small",
          text: "下方弹出",
          class: "data-v-065444fb"
        }),
        n: common_vendor.o(handleBtnClick, "28"),
        o: common_vendor.p({
          ["show-copy"]: true,
          buttons: ["自定义操作"],
          direction: "bottom",
          class: "data-v-065444fb"
        }),
        p: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-tooltip 长按提示",
          class: "data-v-065444fb"
        }),
        q: common_vendor.gei(_ctx, ""),
        r: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-065444fb"
        }),
        s: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-065444fb"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/tooltip/tooltip.js.map
