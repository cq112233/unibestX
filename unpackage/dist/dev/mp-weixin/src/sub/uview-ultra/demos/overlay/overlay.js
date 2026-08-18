"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_loading_icon_1 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_overlay_1 = common_vendor.resolveComponent("up-overlay");
  (_easycom_NavBar_1 + _easycom_up_button_1 + _easycom_up_loading_icon_1 + _easycom_up_overlay_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
const _easycom_up_loading_icon = () => "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
const _easycom_up_overlay = () => "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_button + _easycom_up_loading_icon + _easycom_up_overlay + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "overlay",
  setup(__props) {
    const overlayShow = common_vendor.ref(false);
    const overlayOpacity = common_vendor.ref(0.5);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-overlay 遮罩层",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-3c9ec2b3"
        }),
        b: common_vendor.o(($event) => {
          return overlayShow.value = true;
        }, "41"),
        c: common_vendor.p({
          type: "primary",
          text: "显示遮罩",
          size: "mini",
          class: "data-v-3c9ec2b3"
        }),
        d: common_vendor.o(($event) => {
          overlayOpacity.value = 0.3;
          overlayShow.value = true;
        }, "74"),
        e: common_vendor.p({
          type: "warning",
          text: "半透明遮罩",
          size: "mini",
          class: "data-v-3c9ec2b3"
        }),
        f: common_vendor.p({
          mode: "circle",
          class: "data-v-3c9ec2b3"
        }),
        g: common_vendor.o(() => {
        }, "a3"),
        h: common_vendor.o(($event) => {
          return overlayShow.value = false;
        }, "55"),
        i: common_vendor.p({
          show: overlayShow.value,
          opacity: overlayOpacity.value,
          class: "data-v-3c9ec2b3"
        }),
        j: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-overlay 遮罩层",
          class: "data-v-3c9ec2b3"
        }),
        k: common_vendor.gei(_ctx, ""),
        l: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-3c9ec2b3"
        }),
        m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3c9ec2b3"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/overlay/overlay.js.map
