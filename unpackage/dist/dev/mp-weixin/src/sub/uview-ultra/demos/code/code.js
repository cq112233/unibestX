"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_code_1 = common_vendor.resolveComponent("up-code");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  (_easycom_NavBar_1 + _easycom_up_code_1 + _easycom_up_button_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_code = () => "../../../../../uni_modules/uview-ultra/components/up-code/up-code.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_code + _easycom_up_button + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "code",
  setup(__props) {
    const uCodeRef = common_vendor.ref(null);
    const tips = common_vendor.ref("获取验证码");
    function codeChange(text) {
      tips.value = text;
    }
    function getCode() {
      if (uCodeRef.value != null) {
        const codeObj = uCodeRef.value;
        const canGet = codeObj.$callMethod("canGetCode");
        if (canGet == true) {
          common_vendor.index.showLoading(new common_vendor.UTSJSONObject({ title: "正在获取验证码" }));
          setTimeout(() => {
            common_vendor.index.hideLoading();
            common_vendor.index.showToast({ title: "验证码已发送", icon: "success" });
            codeObj.$callMethod("start");
          }, 1e3);
        } else {
          common_vendor.index.showToast({ title: "倒计时中，请稍后再试", icon: "none" });
        }
      }
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Code 验证码倒计时",
          ["auto-back"]: true,
          class: "data-v-a71ac0ed"
        }),
        b: common_vendor.sr(uCodeRef, "a71ac0ed-3,a71ac0ed-1", {
          "k": "uCodeRef"
        }),
        c: common_vendor.o(codeChange, "e9"),
        d: common_vendor.p({
          seconds: "60",
          class: "r data-v-a71ac0ed"
        }),
        e: common_vendor.o(getCode, "53"),
        f: common_vendor.p({
          text: tips.value,
          type: "primary",
          size: "small",
          class: "data-v-a71ac0ed"
        }),
        g: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-code 验证码倒计时",
          class: "data-v-a71ac0ed"
        }),
        h: common_vendor.gei(_ctx, ""),
        i: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-a71ac0ed"
        }),
        j: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a71ac0ed"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/code/code.js.map
