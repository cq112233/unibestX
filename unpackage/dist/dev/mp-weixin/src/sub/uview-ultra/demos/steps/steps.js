"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_steps_item_1 = common_vendor.resolveComponent("up-steps-item");
  const _easycom_up_steps_1 = common_vendor.resolveComponent("up-steps");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  (_easycom_NavBar_1 + _easycom_up_steps_item_1 + _easycom_up_steps_1 + _easycom_up_button_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_steps_item = () => "../../../../../uni_modules/uview-ultra/components/up-steps-item/up-steps-item.js";
const _easycom_up_steps = () => "../../../../../uni_modules/uview-ultra/components/up-steps/up-steps.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_steps_item + _easycom_up_steps + _easycom_up_button + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "steps",
  setup(__props) {
    const currentStep = common_vendor.ref(1);
    function nextStep() {
      currentStep.value = (currentStep.value + 1) % 4;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Steps 步骤条",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-958efd76"
        }),
        b: common_vendor.p({
          title: "已下单",
          desc: "10:30",
          class: "data-v-958efd76"
        }),
        c: common_vendor.p({
          title: "已出库",
          desc: "10:35",
          class: "data-v-958efd76"
        }),
        d: common_vendor.p({
          title: "运输中",
          desc: "11:40",
          class: "data-v-958efd76"
        }),
        e: common_vendor.p({
          title: "已签收",
          desc: "14:20",
          class: "data-v-958efd76"
        }),
        f: common_vendor.p({
          current: currentStep.value,
          class: "data-v-958efd76"
        }),
        g: common_vendor.o(nextStep, "95"),
        h: common_vendor.p({
          size: "small",
          type: "primary",
          text: "下一步",
          class: "data-v-958efd76"
        }),
        i: common_vendor.p({
          title: "已下单",
          desc: "10:30",
          class: "data-v-958efd76"
        }),
        j: common_vendor.p({
          title: "已出库",
          desc: "10:35",
          class: "data-v-958efd76"
        }),
        k: common_vendor.p({
          title: "运输中",
          desc: "11:40",
          class: "data-v-958efd76"
        }),
        l: common_vendor.p({
          current: 1,
          dot: true,
          class: "data-v-958efd76"
        }),
        m: common_vendor.p({
          title: "已下单",
          desc: "10:30",
          class: "data-v-958efd76"
        }),
        n: common_vendor.p({
          title: "出库异常",
          desc: "10:35",
          error: true,
          class: "data-v-958efd76"
        }),
        o: common_vendor.p({
          title: "运输中",
          desc: "11:40",
          class: "data-v-958efd76"
        }),
        p: common_vendor.p({
          current: 1,
          ["active-color"]: "#19be6b",
          class: "data-v-958efd76"
        }),
        q: common_vendor.p({
          title: "已下单",
          desc: "买家已提交订单 10:30",
          class: "data-v-958efd76"
        }),
        r: common_vendor.p({
          title: "已出库",
          desc: "包裹已出库并在分拣 10:35",
          class: "data-v-958efd76"
        }),
        s: common_vendor.p({
          title: "运输中",
          desc: "快件正在运往目的地 11:40",
          class: "data-v-958efd76"
        }),
        t: common_vendor.p({
          title: "已签收",
          desc: "快件已安全送达 14:20",
          class: "data-v-958efd76"
        }),
        v: common_vendor.p({
          current: 1,
          direction: "column",
          class: "data-v-958efd76"
        }),
        w: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-steps 步骤条",
          class: "data-v-958efd76"
        }),
        x: common_vendor.gei(_ctx, ""),
        y: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-958efd76"
        }),
        z: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-958efd76"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/steps/steps.js.map
