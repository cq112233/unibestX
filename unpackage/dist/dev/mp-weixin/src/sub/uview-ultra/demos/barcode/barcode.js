"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_title_1 = common_vendor.resolveComponent("up-title");
  const _easycom_up_barcode_1 = common_vendor.resolveComponent("up-barcode");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  (_easycom_NavBar_1 + _easycom_up_title_1 + _easycom_up_barcode_1 + _easycom_up_button_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_title = () => "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
const _easycom_up_barcode = () => "../../../../../uni_modules/uview-ultra/components/up-barcode/up-barcode.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_title + _easycom_up_barcode + _easycom_up_button + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "barcode",
  setup(__props) {
    const barcodeValue = common_vendor.ref("123456789012");
    const eventLog = common_vendor.ref("");
    const barcodeRef = common_vendor.ref(null);
    function onRendered(event) {
      const format = event.format;
      eventLog.value = `rendered => format: ${format == null ? "" : format.toString()}`;
    }
    function onError(event) {
      const message = event.message;
      eventLog.value = `error => ${message == null ? "" : message.toString()}`;
    }
    function onRegenerate() {
      const barcode = barcodeRef.value;
      if (barcode != null) {
        barcode.$callMethod("generateBarcode");
        eventLog.value = "已调用 generateBarcode()";
      }
    }
    function onChangeValue() {
      barcodeValue.value = barcodeValue.value == "123456789012" ? "987654321098" : "123456789012";
      eventLog.value = `value 已改为 ${barcodeValue.value}`;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-barcode 条形码",
          class: "data-v-d9288557"
        }),
        b: common_vendor.p({
          class: "demo-title data-v-d9288557"
        }),
        c: common_vendor.p({
          value: "123456789012",
          class: "data-v-d9288557"
        }),
        d: common_vendor.p({
          class: "demo-title data-v-d9288557"
        }),
        e: common_vendor.p({
          value: "6922233612192",
          format: "EAN13",
          class: "data-v-d9288557"
        }),
        f: common_vendor.p({
          value: "UVIEW-ULTRA",
          format: "CODE39",
          class: "data-v-d9288557"
        }),
        g: common_vendor.p({
          value: "012345678905",
          format: "UPCA",
          class: "data-v-d9288557"
        }),
        h: common_vendor.p({
          class: "demo-title data-v-d9288557"
        }),
        i: common_vendor.p({
          value: "20260820",
          format: "CODE128",
          width: 260,
          height: 90,
          margin: 12,
          background: "#f0f9ff",
          ["line-color"]: "#0957de",
          ["text-position"]: "top",
          ["font-size"]: 12,
          class: "data-v-d9288557"
        }),
        j: common_vendor.p({
          class: "demo-title data-v-d9288557"
        }),
        k: common_vendor.sr(barcodeRef, "d9288557-12,d9288557-1", {
          "k": "barcodeRef"
        }),
        l: common_vendor.o(onRendered, "08"),
        m: common_vendor.o(onError, "47"),
        n: common_vendor.p({
          value: barcodeValue.value,
          format: "CODE128",
          class: "r data-v-d9288557"
        }),
        o: common_vendor.o(onRegenerate, "43"),
        p: common_vendor.p({
          text: "重新生成",
          type: "primary",
          size: "small",
          class: "demo-btn data-v-d9288557"
        }),
        q: common_vendor.o(onChangeValue, "8d"),
        r: common_vendor.p({
          text: "换一个值",
          type: "primary",
          size: "small",
          class: "demo-btn data-v-d9288557"
        }),
        s: common_vendor.t(eventLog.value),
        t: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-barcode 条形码",
          class: "data-v-d9288557"
        }),
        v: common_vendor.gei(_ctx, ""),
        w: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-d9288557"
        }),
        x: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d9288557"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/barcode/barcode.js.map
