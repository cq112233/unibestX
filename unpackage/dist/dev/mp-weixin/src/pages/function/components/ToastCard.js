"use strict";
const common_vendor = require("../../../../common/vendor.js");
const src_utils_toast = require("../../../utils/toast.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "../../basic/components/Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "ToastCard",
  setup(__props) {
    const customMsg = common_vendor.ref("来自 Function 功能页的 Toast 消息！");
    function showCustomToast() {
      if (customMsg.value.trim() == "") {
        src_utils_toast.toast("请输入提示内容");
        return null;
      }
      src_utils_toast.toast(customMsg.value);
    }
    function showSuccessToast() {
      src_utils_toast.toastSuccess("Function 页面全局 Toast 触发成功！");
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: customMsg.value,
        b: common_vendor.o(($event) => {
          return customMsg.value = $event.detail.value;
        }, "dc"),
        c: common_vendor.o(showCustomToast, "df"),
        d: common_vendor.o(showSuccessToast, "ec"),
        e: common_vendor.gei(_ctx, ""),
        f: common_vendor.p({
          title: "全局 Toast 提示调用",
          id: common_vendor.gei(_ctx, "")
        }),
        g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/function/components/ToastCard.js.map
