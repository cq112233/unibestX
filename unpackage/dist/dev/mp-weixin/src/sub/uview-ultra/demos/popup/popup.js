"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_popup_1 = common_vendor.resolveComponent("up-popup");
  (_easycom_NavBar_1 + _easycom_up_button_1 + _easycom_up_popup_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
const _easycom_up_popup = () => "../../../../../uni_modules/uview-ultra/components/up-popup/up-popup.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_button + _easycom_up_popup + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "popup",
  setup(__props) {
    const popupShow = common_vendor.ref(false);
    const popupMode = common_vendor.ref("bottom");
    function openPopup(mode) {
      popupMode.value = mode;
      popupShow.value = true;
    }
    function onPopupClose() {
      popupShow.value = false;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-popup 弹出层",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-d0054422"
        }),
        b: common_vendor.o(($event) => {
          return openPopup("top");
        }, "25"),
        c: common_vendor.p({
          type: "primary",
          text: "顶部弹出",
          size: "mini",
          class: "data-v-d0054422"
        }),
        d: common_vendor.o(($event) => {
          return openPopup("bottom");
        }, "1d"),
        e: common_vendor.p({
          type: "primary",
          text: "底部弹出",
          size: "mini",
          class: "data-v-d0054422"
        }),
        f: common_vendor.o(($event) => {
          return openPopup("left");
        }, "c1"),
        g: common_vendor.p({
          type: "success",
          text: "左侧弹出",
          size: "mini",
          class: "data-v-d0054422"
        }),
        h: common_vendor.o(($event) => {
          return openPopup("right");
        }, "fe"),
        i: common_vendor.p({
          type: "success",
          text: "右侧弹出",
          size: "mini",
          class: "data-v-d0054422"
        }),
        j: common_vendor.o(($event) => {
          return openPopup("center");
        }, "3b"),
        k: common_vendor.p({
          type: "success",
          text: "居中弹出",
          size: "mini",
          class: "data-v-d0054422"
        }),
        l: common_vendor.t(popupMode.value),
        m: common_vendor.o(onPopupClose, "03"),
        n: common_vendor.p({
          show: popupShow.value,
          mode: popupMode.value,
          closeable: true,
          round: 10,
          class: "data-v-d0054422"
        }),
        o: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-popup 弹出层",
          class: "data-v-d0054422"
        }),
        p: common_vendor.gei(_ctx, ""),
        q: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-d0054422"
        }),
        r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d0054422"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/popup/popup.js.map
