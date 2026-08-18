"use strict";
const common_vendor = require("../../../../common/vendor.js");
const src_utils_toast = require("../../../utils/toast.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "./Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "ToastDemoCard",
  setup(__props) {
    function handleDefaultToast() {
      src_utils_toast.toast("这是一条通过 App.ku 全局组件触发的轻提示");
    }
    function handleSuccessToast() {
      src_utils_toast.toastSuccess("恭喜！全局 Toast 触发成功");
    }
    function handleErrorToast() {
      src_utils_toast.toastError("操作异常，全局 Toast 报错提示");
    }
    function handleWarningToast() {
      src_utils_toast.toastWarning("注意：这是一条全局警告轻提示");
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.o(handleDefaultToast, "dc"),
        b: common_vendor.o(handleSuccessToast, "8c"),
        c: common_vendor.o(handleErrorToast, "b7"),
        d: common_vendor.o(handleWarningToast, "a9"),
        e: common_vendor.gei(_ctx, ""),
        f: common_vendor.p({
          title: "全局 Toast 轻提示",
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-aa955926"
        }),
        g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aa955926"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/ToastDemoCard.js.map
