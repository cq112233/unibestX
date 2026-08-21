"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_title_1 = common_vendor.resolveComponent("up-title");
  const _easycom_up_color_picker_1 = common_vendor.resolveComponent("up-color-picker");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  (_easycom_NavBar_1 + _easycom_up_title_1 + _easycom_up_color_picker_1 + _easycom_up_button_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_title = () => "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
const _easycom_up_color_picker = () => "../../../../../uni_modules/uview-ultra/components/up-color-picker/up-color-picker.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_title + _easycom_up_color_picker + _easycom_up_button + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "color-picker",
  setup(__props) {
    const color1 = common_vendor.ref("#ff0000");
    const color2 = common_vendor.ref("#2979ff");
    const color3 = common_vendor.ref("#19be6b");
    const gradientColor = common_vendor.ref("linear-gradient(to right, #ff0000, #0000ff)");
    const customColors = common_vendor.ref([
      "#2979ff",
      "#fa3534",
      "#19be6b",
      "#ff9900",
      "#ff00ff",
      "#00ffff"
    ]);
    const apiLog = common_vendor.ref("");
    const colorPickerRef = common_vendor.ref(null);
    function onOpenPicker() {
      const picker = colorPickerRef.value;
      if (picker != null) {
        picker.$callMethod("open");
        apiLog.value = "已调用 open()";
      }
    }
    function onConfirm(color) {
      apiLog.value = `confirm => ${color}`;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-color-picker 颜色选择",
          class: "data-v-2348fc0a"
        }),
        b: common_vendor.p({
          class: "demo-title data-v-2348fc0a"
        }),
        c: common_vendor.o(($event) => {
          return color1.value = $event;
        }, "97"),
        d: common_vendor.p({
          modelValue: color1.value,
          class: "data-v-2348fc0a"
        }),
        e: common_vendor.t(color1.value),
        f: common_vendor.p({
          class: "demo-title data-v-2348fc0a"
        }),
        g: common_vendor.o(($event) => {
          return color2.value = $event;
        }, "48"),
        h: common_vendor.p({
          ["common-colors"]: customColors.value,
          modelValue: color2.value,
          class: "data-v-2348fc0a"
        }),
        i: common_vendor.t(color2.value),
        j: common_vendor.p({
          class: "demo-title data-v-2348fc0a"
        }),
        k: common_vendor.o(($event) => {
          return gradientColor.value = $event;
        }, "9f"),
        l: common_vendor.p({
          modelValue: gradientColor.value,
          class: "data-v-2348fc0a"
        }),
        m: common_vendor.t(gradientColor.value),
        n: gradientColor.value,
        o: common_vendor.p({
          class: "demo-title data-v-2348fc0a"
        }),
        p: common_vendor.sr(colorPickerRef, "2348fc0a-10,2348fc0a-1", {
          "k": "colorPickerRef"
        }),
        q: common_vendor.o(onConfirm, "17"),
        r: common_vendor.o(($event) => {
          return color3.value = $event;
        }, "5d"),
        s: common_vendor.p({
          modelValue: color3.value,
          class: "r data-v-2348fc0a"
        }),
        t: common_vendor.o(onOpenPicker, "a3"),
        v: common_vendor.p({
          text: "打开选择器",
          type: "primary",
          size: "small",
          class: "demo-btn ml-_b12px_B data-v-2348fc0a"
        }),
        w: common_vendor.t(apiLog.value),
        x: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-color-picker 颜色选择",
          class: "data-v-2348fc0a"
        }),
        y: common_vendor.gei(_ctx, ""),
        z: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-2348fc0a"
        }),
        A: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2348fc0a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/color-picker/color-picker.js.map
