"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "../../basic/components/Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "HapticsCard",
  setup(__props) {
    const copyText = common_vendor.ref("Hello unibestX!");
    function triggerVibration() {
      common_vendor.index.showToast({
        title: "当前环境不支持震动",
        icon: "none"
      });
    }
    function handleCopy() {
      if (copyText.value === "")
        return null;
      common_vendor.index.setClipboardData({
        data: copyText.value,
        success: () => {
          common_vendor.index.showToast({
            title: "复制成功",
            icon: "success"
          });
        }
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: copyText.value,
        b: common_vendor.o(($event) => {
          return copyText.value = $event.detail.value;
        }, "d9"),
        c: common_vendor.o(handleCopy, "2b"),
        d: common_vendor.o(triggerVibration, "d5"),
        e: common_vendor.gei(_ctx, ""),
        f: common_vendor.p({
          title: "触感与工具",
          id: common_vendor.gei(_ctx, "")
        }),
        g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/function/components/HapticsCard.js.map
