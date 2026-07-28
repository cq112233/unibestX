"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_toast_1 = common_vendor.resolveComponent("up-toast");
  (_easycom_NavBar_1 + _easycom_up_button_1 + _easycom_up_toast_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
const _easycom_up_toast = () => "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_button + _easycom_up_toast + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "toast",
  setup(__props) {
    const uToast = common_vendor.ref(null);
    function showToast(type) {
      const toast = uToast.value;
      if (toast != null) {
        const configs = new UTSJSONObject({
          success: new UTSJSONObject({ message: "操作成功！", type: "success" }),
          error: new UTSJSONObject({ message: "操作失败！", type: "error" }),
          warning: new UTSJSONObject({ message: "请注意风险！", type: "warning" }),
          default: new UTSJSONObject({ message: "这是一条提示", type: "default" })
        });
        const config = configs[type];
        toast.$callMethod("show", new UTSJSONObject({
          message: config.message,
          type: config.type
        }));
      }
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-toast 消息提示",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-5402aa37"
        }),
        b: common_vendor.o(($event) => {
          return showToast("success");
        }, "36"),
        c: common_vendor.p({
          type: "primary",
          text: "成功提示",
          size: "mini",
          class: "data-v-5402aa37"
        }),
        d: common_vendor.o(($event) => {
          return showToast("error");
        }, "b1"),
        e: common_vendor.p({
          type: "error",
          text: "错误提示",
          size: "mini",
          class: "data-v-5402aa37"
        }),
        f: common_vendor.o(($event) => {
          return showToast("warning");
        }, "ed"),
        g: common_vendor.p({
          type: "warning",
          text: "警告提示",
          size: "mini",
          class: "data-v-5402aa37"
        }),
        h: common_vendor.o(($event) => {
          return showToast("default");
        }, "6d"),
        i: common_vendor.p({
          type: "default",
          text: "默认提示",
          size: "mini",
          class: "data-v-5402aa37"
        }),
        j: common_vendor.sr(uToast, "5402aa37-7,5402aa37-1", {
          "k": "uToast"
        }),
        k: common_vendor.p({
          class: "r data-v-5402aa37"
        }),
        l: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-toast 消息提示",
          class: "data-v-5402aa37"
        }),
        m: common_vendor.gei(_ctx, ""),
        n: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-5402aa37"
        }),
        o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5402aa37"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/toast/toast.js.map
