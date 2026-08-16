"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_button_1 = common_vendor.resolveComponent("rice-button");
  const _easycom_rice_dialog_1 = common_vendor.resolveComponent("rice-dialog");
  (_easycom_NavBar_1 + _easycom_rice_button_1 + _easycom_rice_dialog_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_button = () => "../../../../../uni_modules/rice-ui/components/rice-button/rice-button.js";
const _easycom_rice_dialog = () => "../../../../../uni_modules/rice-ui/components/rice-dialog/rice-dialog.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_button + _easycom_rice_dialog + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "dialog",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const showDialog1 = common_vendor.ref(false);
    const showDialog2 = common_vendor.ref(false);
    function onConfirm() {
      common_vendor.index.showToast({
        title: "已确认操作",
        icon: "success"
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Dialog 对话框",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-b3005fa6"
        }),
        b: currentTheme.value,
        c: common_vendor.o(($event) => {
          return showDialog1.value = true;
        }, "15"),
        d: common_vendor.p({
          type: "primary",
          color: currentTheme.value,
          text: "打开确认对话框",
          class: "data-v-b3005fa6"
        }),
        e: common_vendor.o(onConfirm, "26"),
        f: common_vendor.o(($event) => {
          return common_vendor.isRef(showDialog1) ? showDialog1.value = $event : null;
        }, "9f"),
        g: common_vendor.p({
          title: "系统提示",
          message: "是否确认退出当前登录状态？",
          ["confirm-button-color"]: currentTheme.value,
          ["show-cancel-button"]: true,
          show: common_vendor.unref(showDialog1),
          class: "data-v-b3005fa6"
        }),
        h: currentTheme.value,
        i: common_vendor.o(($event) => {
          return showDialog2.value = true;
        }, "5c"),
        j: common_vendor.p({
          type: "success",
          text: "打开圆角对话框",
          class: "data-v-b3005fa6"
        }),
        k: common_vendor.o(($event) => {
          return common_vendor.isRef(showDialog2) ? showDialog2.value = $event : null;
        }, "a2"),
        l: common_vendor.p({
          title: "恭喜完成",
          message: "恭喜您已成功完成全部设置！",
          ["button-theme"]: "round",
          ["confirm-button-color"]: currentTheme.value,
          ["show-cancel-button"]: false,
          show: common_vendor.unref(showDialog2),
          class: "data-v-b3005fa6"
        }),
        m: common_vendor.gei(_ctx, ""),
        n: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-b3005fa6"
        }),
        o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b3005fa6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/dialog/dialog.js.map
