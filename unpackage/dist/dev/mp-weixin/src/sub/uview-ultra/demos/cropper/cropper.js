"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_title_1 = common_vendor.resolveComponent("up-title");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_cropper_1 = common_vendor.resolveComponent("up-cropper");
  (_easycom_NavBar_1 + _easycom_up_title_1 + _easycom_up_button_1 + _easycom_up_cropper_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_title = () => "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
const _easycom_up_cropper = () => "../../../../../uni_modules/uview-ultra/components/up-cropper/up-cropper.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_title + _easycom_up_button + _easycom_up_cropper + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "cropper",
  setup(__props) {
    const croppedPath = common_vendor.ref("");
    const eventLog = common_vendor.ref("");
    const cropperRef = common_vendor.ref(null);
    function onChoose() {
      const cropper = cropperRef.value;
      if (cropper == null)
        return null;
      cropper.$callMethod("chooseImage", 0, new common_vendor.UTSJSONObject({}), null);
      eventLog.value = "正在选择图片...";
    }
    function onReset() {
      croppedPath.value = "";
      eventLog.value = "已清空结果";
    }
    function onConfirm(event) {
      const path = event.path;
      croppedPath.value = path == null ? "" : path.toString();
      const len = croppedPath.value.length;
      const prefix = len > 24 ? `${croppedPath.value.substring(0, 24)}...` : croppedPath.value;
      eventLog.value = `confirm => 图片长度 ${len}，前缀 ${prefix}`;
    }
    function onCancel() {
      eventLog.value = "cancel => 已取消裁剪";
    }
    function onError(event) {
      const message = event.message;
      eventLog.value = `error => ${message == null ? "裁剪失败" : message.toString()}`;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: common_vendor.p({
          title: "up-cropper 裁剪",
          class: "data-v-aea4d4bc"
        }),
        b: common_vendor.p({
          class: "demo-title data-v-aea4d4bc"
        }),
        c: croppedPath.value.length > 0
      }, croppedPath.value.length > 0 ? {
        d: croppedPath.value
      } : {}, {
        e: common_vendor.o(onChoose, "15"),
        f: common_vendor.p({
          text: "选择图片",
          type: "primary",
          size: "small",
          class: "demo-btn data-v-aea4d4bc"
        }),
        g: common_vendor.o(onReset, "7c"),
        h: common_vendor.p({
          text: "清空结果",
          type: "primary",
          plain: true,
          size: "small",
          class: "demo-btn data-v-aea4d4bc"
        }),
        i: common_vendor.t(eventLog.value),
        j: common_vendor.p({
          class: "demo-title data-v-aea4d4bc"
        }),
        k: common_vendor.sr(cropperRef, "aea4d4bc-7,aea4d4bc-1", {
          "k": "cropperRef"
        }),
        l: common_vendor.o(onConfirm, "94"),
        m: common_vendor.o(onCancel, "c6"),
        n: common_vendor.o(onError, "eb"),
        o: common_vendor.p({
          ["can-change-size"]: true,
          class: "r data-v-aea4d4bc"
        }),
        p: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-cropper 裁剪",
          class: "data-v-aea4d4bc"
        }),
        q: common_vendor.gei(_ctx, ""),
        r: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-aea4d4bc"
        }),
        s: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aea4d4bc"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/cropper/cropper.js.map
