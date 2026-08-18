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
const Card = () => "../../basic/components/Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "SignatureCard",
  setup(__props) {
    let sigInstance = null;
    function onSigRef(el = null) {
      sigInstance = el;
    }
    const penColor = common_vendor.ref("red");
    const penSize = common_vendor.ref(4);
    const openSmooth = common_vendor.ref(true);
    const signUrl = common_vendor.ref("");
    const colorList = ["#ef4444", "#000000", "#3b82f6", "#10b981", "#f59e0b"];
    const penSizeOptions = [1, 3, 5, 8, 12];
    function onAction(type) {
      const el = sigInstance;
      if (el == null) {
        common_vendor.index.showToast({ title: "签名组件未就绪", icon: "none" });
        return null;
      }
      if (type === "clear") {
        el.clear();
        signUrl.value = "";
      } else if (type === "undo") {
        el.undo();
      } else if (type === "redo") {
        el.redo();
      } else if (type === "save") {
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
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: common_vendor.sr(onSigRef, "2113a5a6-1,2113a5a6-0"),
        b: onSigRef,
        c: common_vendor.p({
          ["pen-color"]: penColor.value,
          ["pen-size"]: penSize.value,
          ["open-smooth"]: openSmooth.value,
          ["disable-scroll"]: true,
          ["background-color"]: "#ffffff",
          class: "r"
        }),
        d: common_vendor.o(($event) => {
          return onAction("save");
        }, "fc"),
        e: common_vendor.o(($event) => {
          return onAction("undo");
        }, "2d"),
        f: common_vendor.o(($event) => {
          return onAction("redo");
        }, "c8"),
        g: common_vendor.o(($event) => {
          return onAction("clear");
        }, "77"),
        h: common_vendor.f(colorList, (clr, k0, i0) => {
          return {
            a: clr,
            b: clr,
            c: penColor.value === clr ? "#1e293b" : "transparent",
            d: common_vendor.o(($event) => {
              return penColor.value = clr;
            }, clr)
          };
        }),
        i: common_vendor.t(penSize.value),
        j: common_vendor.f(penSizeOptions, (sz, _j, i0) => {
          return {
            a: common_vendor.t(sz),
            b: penSize.value === sz ? "#ffffff" : "#475569",
            c: sz,
            d: common_vendor.n(_j < penSizeOptions.length - 1 ? "mr-6px" : ""),
            e: penSize.value === sz ? "#3b82f6" : "#e2e8f0",
            f: common_vendor.o(($event) => {
              return penSize.value = sz;
            }, sz)
          };
        }),
        k: common_vendor.t(openSmooth.value ? "开" : "关"),
        l: openSmooth.value ? "#10b981" : "#cbd5e1",
        m: common_vendor.o(($event) => {
          return openSmooth.value = !openSmooth.value;
        }, "26"),
        n: signUrl.value !== ""
      }, signUrl.value !== "" ? {
        o: signUrl.value
      } : {}, {
        p: common_vendor.gei(_ctx, ""),
        q: common_vendor.p({
          title: "签名板 lime-signature",
          id: common_vendor.gei(_ctx, "")
        }),
        r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/function/components/SignatureCard.js.map
