"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  (_easycom_NavBar_1 + _easycom_rice_icon_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_icon = () => "../../../../../uni_modules/rice-ui/components/rice-icon/rice-icon.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_icon + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "icon",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Icon 图标",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-a293183c"
        }),
        b: currentTheme.value,
        c: common_vendor.p({
          name: "search",
          size: "28px",
          color: currentTheme.value,
          class: "data-v-a293183c"
        }),
        d: common_vendor.p({
          name: "plus",
          size: "28px",
          color: currentTheme.value,
          class: "data-v-a293183c"
        }),
        e: common_vendor.p({
          name: "minus",
          size: "28px",
          color: currentTheme.value,
          class: "data-v-a293183c"
        }),
        f: common_vendor.p({
          name: "cross",
          size: "28px",
          color: currentTheme.value,
          class: "data-v-a293183c"
        }),
        g: currentTheme.value,
        h: common_vendor.p({
          name: "star-fill",
          size: "18px",
          color: currentTheme.value,
          class: "data-v-a293183c"
        }),
        i: common_vendor.p({
          name: "star-fill",
          size: "26px",
          color: currentTheme.value,
          class: "data-v-a293183c"
        }),
        j: common_vendor.p({
          name: "star-fill",
          size: "36px",
          color: currentTheme.value,
          class: "data-v-a293183c"
        }),
        k: currentTheme.value,
        l: common_vendor.p({
          name: "user",
          size: "24px",
          color: currentTheme.value,
          class: "data-v-a293183c"
        }),
        m: common_vendor.p({
          name: "set",
          size: "24px",
          color: currentTheme.value,
          class: "data-v-a293183c"
        }),
        n: common_vendor.p({
          name: "chat",
          size: "24px",
          color: currentTheme.value,
          class: "data-v-a293183c"
        }),
        o: common_vendor.p({
          name: "shopping",
          size: "24px",
          color: currentTheme.value,
          class: "data-v-a293183c"
        }),
        p: common_vendor.p({
          name: "like",
          size: "24px",
          color: currentTheme.value,
          class: "data-v-a293183c"
        }),
        q: common_vendor.p({
          name: "share",
          size: "24px",
          color: currentTheme.value,
          class: "data-v-a293183c"
        }),
        r: common_vendor.p({
          name: "home",
          size: "24px",
          color: currentTheme.value,
          class: "data-v-a293183c"
        }),
        s: common_vendor.p({
          name: "phone",
          size: "24px",
          color: currentTheme.value,
          class: "data-v-a293183c"
        }),
        t: common_vendor.p({
          name: "location",
          size: "24px",
          color: currentTheme.value,
          class: "data-v-a293183c"
        }),
        v: common_vendor.p({
          name: "camera",
          size: "24px",
          color: currentTheme.value,
          class: "data-v-a293183c"
        }),
        w: common_vendor.p({
          name: "gift",
          size: "24px",
          color: currentTheme.value,
          class: "data-v-a293183c"
        }),
        x: common_vendor.p({
          name: "volume",
          size: "24px",
          color: currentTheme.value,
          class: "data-v-a293183c"
        }),
        y: common_vendor.gei(_ctx, ""),
        z: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-a293183c"
        }),
        A: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a293183c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/icon/icon.js.map
