"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_title_1 = common_vendor.resolveComponent("up-title");
  const _easycom_up_signature_1 = common_vendor.resolveComponent("up-signature");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  (_easycom_NavBar_1 + _easycom_up_title_1 + _easycom_up_signature_1 + _easycom_up_button_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_title = () => "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
const _easycom_up_signature = () => "../../../../../uni_modules/uview-ultra/components/up-signature/up-signature.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_title + _easycom_up_signature + _easycom_up_button + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "signature",
  setup(__props) {
    const bgColor = common_vendor.ref("#ffffff");
    const sigRef1 = common_vendor.ref(null);
    const sigRef2 = common_vendor.ref(null);
    const exportPath = common_vendor.ref("");
    const eventLog = common_vendor.ref("绘制完成后点击工具栏对勾导出，confirm 事件返回图片路径");
    function onConfirm(path) {
      exportPath.value = path;
      eventLog.value = `confirm => ${path}`;
    }
    function onError(msg = null) {
      const text = msg == null ? "unknown" : msg.toString();
      eventLog.value = `error => ${text}`;
    }
    function onClear() {
      eventLog.value = "clear => 已清空";
    }
    function clearSig2() {
      const sig = sigRef2.value;
      if (sig != null) {
        sig.$callMethod("clearCanvas");
        eventLog.value = "clear => 第二块签名已清空";
      }
    }
    function exportSig2() {
      const sig = sigRef2.value;
      if (sig != null) {
        sig.$callMethod("exportSignature");
      }
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: common_vendor.p({
          title: "up-signature 签名",
          class: "data-v-376fa91b"
        }),
        b: common_vendor.p({
          class: "demo-title data-v-376fa91b"
        }),
        c: common_vendor.sr(sigRef1, "376fa91b-4,376fa91b-1", {
          "k": "sigRef1"
        }),
        d: common_vendor.o(onConfirm, "0f"),
        e: common_vendor.o(onError, "98"),
        f: common_vendor.o(onClear, "fc"),
        g: common_vendor.p({
          width: 300,
          height: 200,
          ["bg-color"]: bgColor.value,
          class: "r data-v-376fa91b"
        }),
        h: common_vendor.p({
          class: "demo-title data-v-376fa91b"
        }),
        i: common_vendor.sr(sigRef2, "376fa91b-6,376fa91b-1", {
          "k": "sigRef2"
        }),
        j: common_vendor.o(onConfirm, "25"),
        k: common_vendor.o(onError, "33"),
        l: common_vendor.p({
          width: 300,
          height: 160,
          ["bg-color"]: "#fff7e6",
          color: "#ff4d4f",
          thickness: 5,
          ["show-toolbar"]: false,
          class: "r data-v-376fa91b"
        }),
        m: common_vendor.o(clearSig2, "92"),
        n: common_vendor.p({
          text: "清空",
          type: "primary",
          plain: true,
          size: "small",
          class: "sig-btn data-v-376fa91b"
        }),
        o: common_vendor.o(exportSig2, "c4"),
        p: common_vendor.p({
          text: "导出",
          type: "primary",
          size: "small",
          class: "sig-btn data-v-376fa91b"
        }),
        q: exportPath.value != ""
      }, exportPath.value != "" ? {
        r: common_vendor.p({
          class: "demo-title data-v-376fa91b"
        }),
        s: exportPath.value
      } : {}, {
        t: common_vendor.p({
          class: "demo-title data-v-376fa91b"
        }),
        v: common_vendor.t(eventLog.value),
        w: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-signature 签名",
          class: "data-v-376fa91b"
        }),
        x: common_vendor.gei(_ctx, ""),
        y: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-376fa91b"
        }),
        z: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-376fa91b"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/signature/signature.js.map
