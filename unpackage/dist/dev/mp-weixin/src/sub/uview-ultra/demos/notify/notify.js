"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_notify_1 = common_vendor.resolveComponent("up-notify");
  (_easycom_NavBar_1 + _easycom_up_button_1 + _easycom_up_notify_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
const _easycom_up_notify = () => "../../../../../uni_modules/uview-ultra/components/up-notify/up-notify.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_button + _easycom_up_notify + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "notify",
  setup(__props) {
    const uNotify = common_vendor.ref(null);
    function showNotify(type) {
      const notify = uNotify.value;
      if (notify != null) {
        const msgs = new UTSJSONObject({
          primary: "主要通知消息",
          success: "操作成功通知",
          warning: "请注意安全通知",
          error: "发生错误通知"
        });
        notify.$callMethod("show", new UTSJSONObject({
          message: msgs[type],
          type
        }));
      }
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-notify 消息通知",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-2a34887b"
        }),
        b: common_vendor.o(($event) => {
          return showNotify("primary");
        }, "8d"),
        c: common_vendor.p({
          type: "primary",
          text: "主要通知",
          size: "mini",
          class: "data-v-2a34887b"
        }),
        d: common_vendor.o(($event) => {
          return showNotify("success");
        }, "76"),
        e: common_vendor.p({
          type: "success",
          text: "成功通知",
          size: "mini",
          class: "data-v-2a34887b"
        }),
        f: common_vendor.o(($event) => {
          return showNotify("warning");
        }, "8e"),
        g: common_vendor.p({
          type: "warning",
          text: "警告通知",
          size: "mini",
          class: "data-v-2a34887b"
        }),
        h: common_vendor.o(($event) => {
          return showNotify("error");
        }, "45"),
        i: common_vendor.p({
          type: "error",
          text: "错误通知",
          size: "mini",
          class: "data-v-2a34887b"
        }),
        j: common_vendor.sr(uNotify, "2a34887b-7,2a34887b-1", {
          "k": "uNotify"
        }),
        k: common_vendor.p({
          class: "r data-v-2a34887b"
        }),
        l: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-notify 消息通知",
          class: "data-v-2a34887b"
        }),
        m: common_vendor.gei(_ctx, ""),
        n: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-2a34887b"
        }),
        o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2a34887b"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/notify/notify.js.map
