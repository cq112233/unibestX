"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_limeSignature_index = require("../../../../uni_modules/lime-signature/index.js");
if (!Array) {
  const _easycom_l_signature_1 = common_vendor.resolveComponent("l-signature");
  _easycom_l_signature_1();
}
const _easycom_l_signature = () => "../../../../uni_modules/lime-signature/components/l-signature/l-signature.js";
if (!Math) {
  (_easycom_l_signature + common_vendor.unref(Card))();
}
const Card = () => "./Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "SignatureCard",
  setup(__props) {
    const signatureRef = common_vendor.ref(null);
    const penColor = common_vendor.ref("red");
    const penSize = common_vendor.ref(4);
    const openSmooth = common_vendor.ref(true);
    const signUrl = common_vendor.ref("");
    const colorList = [
      new common_vendor.UTSJSONObject({ color: "#ef4444" }),
      new common_vendor.UTSJSONObject({ color: "#000000" }),
      new common_vendor.UTSJSONObject({ color: "#3b82f6" }),
      new common_vendor.UTSJSONObject({ color: "#10b981" }),
      new common_vendor.UTSJSONObject({ color: "#f59e0b" })
    ];
    function onPenSizeChange(e = null) {
      penSize.value = e.detail.value;
    }
    function onSmoothChange(e = null) {
      openSmooth.value = e.detail.value;
    }
    function handleClear() {
      const el = signatureRef.value;
      if (el != null) {
        el.clear();
        signUrl.value = "";
      }
    }
    function handleUndo() {
      const el = signatureRef.value;
      if (el != null) {
        el.undo();
      }
    }
    function handleRedo() {
      const el = signatureRef.value;
      if (el != null) {
        el.redo();
      }
    }
    function handleSave() {
      const el = signatureRef.value;
      if (el == null) {
        common_vendor.index.showToast({ title: "签名组件未就绪", icon: "none" });
        return null;
      }
      el.canvasToTempFilePath(new uni_modules_limeSignature_index.LimeSignatureToTempFilePathOptions({
        complete: null,
        format: null,
        success: (res) => {
          if (res.isEmpty) {
            common_vendor.index.showToast({ title: "请先签名", icon: "none" });
            return null;
          }
          signUrl.value = res.tempFilePath;
          common_vendor.index.showToast({ title: "签名保存成功", icon: "success" });
        },
        fail: (_err = null) => {
          common_vendor.index.showToast({ title: "保存失败", icon: "error" });
        }
      }));
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: common_vendor.sr(signatureRef, "1f2f7b1b-1,1f2f7b1b-0", {
          "k": "signatureRef"
        }),
        b: common_vendor.p({
          penColor: penColor.value,
          penSize: penSize.value,
          openSmooth: openSmooth.value,
          disableScroll: true,
          backgroundColor: "#ffffff",
          class: "r"
        }),
        c: common_vendor.o(handleSave, "1c"),
        d: common_vendor.o(handleUndo, "e3"),
        e: common_vendor.o(handleRedo, "00"),
        f: common_vendor.o(handleClear, "8d"),
        g: common_vendor.f(colorList, (item, _index, i0) => {
          return {
            a: item.color,
            b: item.color,
            c: penColor.value === item.color ? "#1e293b" : "transparent",
            d: common_vendor.o(($event) => {
              return penColor.value = item.color;
            }, item.color)
          };
        }),
        h: common_vendor.t(penSize.value),
        i: penSize.value,
        j: common_vendor.o(onPenSizeChange, "49"),
        k: openSmooth.value,
        l: common_vendor.o(onSmoothChange, "10"),
        m: signUrl.value !== ""
      }, signUrl.value !== "" ? {
        n: signUrl.value
      } : {}, {
        o: common_vendor.gei(_ctx, ""),
        p: common_vendor.p({
          title: "签名板 lime-signature",
          id: common_vendor.gei(_ctx, "")
        }),
        q: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/SignatureCard.js.map
