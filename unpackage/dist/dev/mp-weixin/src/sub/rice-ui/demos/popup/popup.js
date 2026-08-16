"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_button_1 = common_vendor.resolveComponent("rice-button");
  const _easycom_rice_popup_1 = common_vendor.resolveComponent("rice-popup");
  (_easycom_NavBar_1 + _easycom_rice_button_1 + _easycom_rice_popup_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_button = () => "../../../../../uni_modules/rice-ui/components/rice-button/rice-button.js";
const _easycom_rice_popup = () => "../../../../../uni_modules/rice-ui/components/rice-popup/rice-popup.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_button + _easycom_rice_popup + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "popup",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const showPopup = common_vendor.ref(false);
    const position = common_vendor.ref("bottom");
    const popupStyle = common_vendor.computed(() => {
      const map = /* @__PURE__ */ new Map();
      if (position.value == "bottom" || position.value == "top") {
        map.set("min-height", "200px");
      } else if (position.value == "left" || position.value == "right") {
        map.set("width", "240px");
        map.set("height", "100%");
      } else {
        map.set("width", "280px");
        map.set("border-radius", "12px");
      }
      return map;
    });
    function openPopup(pos) {
      position.value = pos;
      showPopup.value = true;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Popup 弹出层",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-7be74504"
        }),
        b: currentTheme.value,
        c: common_vendor.o(($event) => {
          return openPopup("bottom");
        }, "1a"),
        d: common_vendor.p({
          type: "primary",
          color: currentTheme.value,
          text: "底部弹出 (Bottom)",
          class: "data-v-7be74504"
        }),
        e: common_vendor.o(($event) => {
          return openPopup("top");
        }, "45"),
        f: common_vendor.p({
          type: "success",
          text: "顶部弹出 (Top)",
          class: "data-v-7be74504"
        }),
        g: common_vendor.o(($event) => {
          return openPopup("center");
        }, "54"),
        h: common_vendor.p({
          type: "warning",
          text: "居中弹出 (Center)",
          class: "data-v-7be74504"
        }),
        i: common_vendor.o(($event) => {
          return openPopup("left");
        }, "f4"),
        j: common_vendor.p({
          type: "info",
          text: "左侧弹出 (Left)",
          class: "data-v-7be74504"
        }),
        k: common_vendor.t(common_vendor.unref(position)),
        l: common_vendor.s(popupStyle.value),
        m: common_vendor.o(($event) => {
          return common_vendor.isRef(showPopup) ? showPopup.value = $event : null;
        }, "57"),
        n: common_vendor.p({
          position: common_vendor.unref(position),
          round: true,
          closeable: true,
          show: common_vendor.unref(showPopup),
          class: "data-v-7be74504"
        }),
        o: common_vendor.gei(_ctx, ""),
        p: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-7be74504"
        }),
        q: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7be74504"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/popup/popup.js.map
