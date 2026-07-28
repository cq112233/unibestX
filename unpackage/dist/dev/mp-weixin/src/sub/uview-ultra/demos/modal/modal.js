"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_modal_1 = common_vendor.resolveComponent("up-modal");
  (_easycom_NavBar_1 + _easycom_up_button_1 + _easycom_up_modal_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
const _easycom_up_modal = () => "../../../../../uni_modules/uview-ultra/components/up-modal/up-modal.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_button + _easycom_up_modal + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "modal",
  setup(__props) {
    const modalShow = common_vendor.ref(false);
    const modalTitle = common_vendor.ref("");
    const modalContent = common_vendor.ref("");
    const modalShowCancel = common_vendor.ref(false);
    function showModal() {
      modalTitle.value = "提示";
      modalContent.value = "这是一个模态弹窗，用于提示重要信息。";
      modalShowCancel.value = false;
      modalShow.value = true;
    }
    function showConfirmModal() {
      modalTitle.value = "确认操作";
      modalContent.value = "确定要执行此操作吗？此操作不可撤销。";
      modalShowCancel.value = true;
      modalShow.value = true;
    }
    function showNoTitleModal() {
      modalTitle.value = "";
      modalContent.value = "这是一个没有标题的弹窗，显得更加简洁。";
      modalShowCancel.value = false;
      modalShow.value = true;
    }
    function showLongModal() {
      modalTitle.value = "用户协议";
      modalContent.value = "1. 这是一个很长很长很长很长很长很长很长很长的内容\n2. 这是一个很长很长很长很长很长很长很长很长的内容";
      modalShowCancel.value = false;
      modalShow.value = true;
    }
    function onModalConfirm() {
      modalShow.value = false;
      common_vendor.index.showToast({ title: "操作成功", icon: "success" });
    }
    function onModalClose() {
      modalShow.value = false;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-modal 模态框",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-027f8c12"
        }),
        b: common_vendor.o(showModal, "07"),
        c: common_vendor.p({
          type: "primary",
          text: "弹窗提示",
          size: "mini",
          class: "data-v-027f8c12"
        }),
        d: common_vendor.o(showConfirmModal, "93"),
        e: common_vendor.p({
          type: "warning",
          text: "确认弹窗",
          size: "mini",
          class: "data-v-027f8c12"
        }),
        f: common_vendor.o(showNoTitleModal, "5c"),
        g: common_vendor.p({
          type: "success",
          text: "无标题",
          size: "mini",
          class: "data-v-027f8c12"
        }),
        h: common_vendor.o(showLongModal, "e0"),
        i: common_vendor.p({
          type: "error",
          text: "长内容",
          size: "mini",
          class: "data-v-027f8c12"
        }),
        j: common_vendor.o(onModalConfirm, "2c"),
        k: common_vendor.o(onModalClose, "79"),
        l: common_vendor.p({
          show: modalShow.value,
          title: modalTitle.value,
          content: modalContent.value,
          ["show-confirm-button"]: true,
          ["show-cancel-button"]: modalShowCancel.value,
          class: "data-v-027f8c12"
        }),
        m: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-modal 模态框",
          class: "data-v-027f8c12"
        }),
        n: common_vendor.gei(_ctx, ""),
        o: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-027f8c12"
        }),
        p: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-027f8c12"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/modal/modal.js.map
