"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_picker_1 = common_vendor.resolveComponent("up-picker");
  (_easycom_NavBar_1 + _easycom_up_button_1 + _easycom_up_picker_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
const _easycom_up_picker = () => "../../../../../uni_modules/uview-ultra/components/up-picker/up-picker.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_button + _easycom_up_picker + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "picker",
  setup(__props) {
    const pickerShow1 = common_vendor.ref(false);
    const pickerShow2 = common_vendor.ref(false);
    const pickerShow3 = common_vendor.ref(false);
    const columns1 = common_vendor.ref([
      ["中国", "美国", "日本", "英国"]
    ]);
    const columns2 = common_vendor.ref([
      ["亚洲", "欧洲"],
      ["中国", "英国"]
    ]);
    function showPicker1() {
      pickerShow1.value = true;
    }
    function showPicker2() {
      pickerShow2.value = true;
    }
    function showPicker3() {
      pickerShow3.value = true;
    }
    function onConfirm1(e) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/demos/picker/picker.uvue:59", "picker 1 confirm", e);
      pickerShow1.value = false;
    }
    function onConfirm2(e) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/demos/picker/picker.uvue:63", "picker 2 confirm", e);
      pickerShow2.value = false;
    }
    function onConfirm3(e) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/demos/picker/picker.uvue:67", "picker 3 confirm", e);
      pickerShow3.value = false;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-picker 选择器",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-a5480f59"
        }),
        b: common_vendor.o(showPicker1, "1f"),
        c: common_vendor.p({
          type: "primary",
          text: "单列选择",
          size: "mini",
          class: "data-v-a5480f59"
        }),
        d: common_vendor.o(showPicker2, "7d"),
        e: common_vendor.p({
          type: "success",
          text: "多列选择",
          size: "mini",
          class: "data-v-a5480f59"
        }),
        f: common_vendor.o(showPicker3, "37"),
        g: common_vendor.p({
          type: "warning",
          text: "加载中选择",
          size: "mini",
          class: "data-v-a5480f59"
        }),
        h: common_vendor.o(onConfirm1, "75"),
        i: common_vendor.o(($event) => {
          return pickerShow1.value = false;
        }, "f0"),
        j: common_vendor.p({
          show: pickerShow1.value,
          columns: columns1.value,
          class: "data-v-a5480f59"
        }),
        k: common_vendor.o(onConfirm2, "be"),
        l: common_vendor.o(($event) => {
          return pickerShow2.value = false;
        }, "c3"),
        m: common_vendor.p({
          show: pickerShow2.value,
          columns: columns2.value,
          class: "data-v-a5480f59"
        }),
        n: common_vendor.o(onConfirm3, "b4"),
        o: common_vendor.o(($event) => {
          return pickerShow3.value = false;
        }, "72"),
        p: common_vendor.p({
          show: pickerShow3.value,
          columns: columns1.value,
          loading: true,
          class: "data-v-a5480f59"
        }),
        q: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-picker 选择器",
          class: "data-v-a5480f59"
        }),
        r: common_vendor.gei(_ctx, ""),
        s: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-a5480f59"
        }),
        t: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a5480f59"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/picker/picker.js.map
