"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_transition_1 = common_vendor.resolveComponent("up-transition");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  (_easycom_NavBar_1 + _easycom_up_transition_1 + _easycom_up_button_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_transition = () => "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_transition + _easycom_up_button + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "transition",
  setup(__props) {
    const transitionShow = common_vendor.ref(true);
    const slideMode = common_vendor.ref("slide-up");
    const slideShow = common_vendor.ref(false);
    function triggerSlide(mode) {
      slideMode.value = mode;
      slideShow.value = true;
      setTimeout(() => {
        slideShow.value = false;
      }, 1500);
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Transition 动画",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-9492a62a"
        }),
        b: common_vendor.p({
          show: transitionShow.value,
          mode: "fade",
          class: "data-v-9492a62a"
        }),
        c: common_vendor.o(($event) => {
          return transitionShow.value = !transitionShow.value;
        }, "12"),
        d: common_vendor.p({
          type: "primary",
          text: transitionShow.value ? "隐藏动画" : "显示动画",
          size: "mini",
          class: "data-v-9492a62a"
        }),
        e: common_vendor.p({
          show: transitionShow.value,
          mode: "zoom",
          class: "data-v-9492a62a"
        }),
        f: common_vendor.p({
          show: slideShow.value,
          mode: slideMode.value,
          class: "data-v-9492a62a"
        }),
        g: common_vendor.o(($event) => {
          return triggerSlide("slide-up");
        }, "c7"),
        h: common_vendor.p({
          type: "primary",
          text: "上滑",
          size: "mini",
          ["custom-style"]: "margin: 0 4px;",
          class: "data-v-9492a62a"
        }),
        i: common_vendor.o(($event) => {
          return triggerSlide("slide-down");
        }, "7a"),
        j: common_vendor.p({
          type: "success",
          text: "下滑",
          size: "mini",
          ["custom-style"]: "margin: 0 4px;",
          class: "data-v-9492a62a"
        }),
        k: common_vendor.o(($event) => {
          return triggerSlide("slide-left");
        }, "84"),
        l: common_vendor.p({
          type: "warning",
          text: "左滑",
          size: "mini",
          ["custom-style"]: "margin: 0 4px;",
          class: "data-v-9492a62a"
        }),
        m: common_vendor.o(($event) => {
          return triggerSlide("slide-right");
        }, "0e"),
        n: common_vendor.p({
          type: "error",
          text: "右滑",
          size: "mini",
          ["custom-style"]: "margin: 0 4px;",
          class: "data-v-9492a62a"
        }),
        o: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-transition 动画",
          class: "data-v-9492a62a"
        }),
        p: common_vendor.gei(_ctx, ""),
        q: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-9492a62a"
        }),
        r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9492a62a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/transition/transition.js.map
