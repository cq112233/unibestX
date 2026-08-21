"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_title_1 = common_vendor.resolveComponent("up-title");
  const _easycom_up_coupon_1 = common_vendor.resolveComponent("up-coupon");
  (_easycom_NavBar_1 + _easycom_up_title_1 + _easycom_up_coupon_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_title = () => "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
const _easycom_up_coupon = () => "../../../../../uni_modules/uview-ultra/components/up-coupon/up-coupon.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_title + _easycom_up_coupon + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "coupon",
  setup(__props) {
    const eventLog = common_vendor.ref("点击优惠券查看事件");
    function onClick() {
      eventLog.value = "click => 点击了优惠券";
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-coupon 优惠券",
          class: "data-v-96f94cd5"
        }),
        b: common_vendor.p({
          class: "demo-title data-v-96f94cd5"
        }),
        c: common_vendor.o(onClick, "3c"),
        d: common_vendor.p({
          amount: "50",
          title: "新人专享优惠券",
          desc: "满 100 元可用",
          time: "有效期至 2026-12-31",
          ["action-text"]: "立即领取",
          class: "data-v-96f94cd5"
        }),
        e: common_vendor.p({
          class: "demo-title data-v-96f94cd5"
        }),
        f: common_vendor.o(onClick, "94"),
        g: common_vendor.p({
          amount: "20",
          title: "信封样式",
          shape: "envelope",
          class: "data-v-96f94cd5"
        }),
        h: common_vendor.o(onClick, "b1"),
        i: common_vendor.p({
          amount: "30",
          title: "卡片样式",
          desc: "全场通用",
          shape: "card",
          class: "mt-_b12px_B data-v-96f94cd5"
        }),
        j: common_vendor.p({
          class: "demo-title data-v-96f94cd5"
        }),
        k: common_vendor.o(onClick, "18"),
        l: common_vendor.p({
          amount: "10",
          title: "小型",
          size: "small",
          class: "data-v-96f94cd5"
        }),
        m: common_vendor.o(onClick, "02"),
        n: common_vendor.p({
          amount: "10",
          title: "中型",
          size: "medium",
          class: "mt-_b12px_B data-v-96f94cd5"
        }),
        o: common_vendor.o(onClick, "fc"),
        p: common_vendor.p({
          amount: "10",
          title: "大型",
          size: "large",
          class: "mt-_b12px_B data-v-96f94cd5"
        }),
        q: common_vendor.p({
          class: "demo-title data-v-96f94cd5"
        }),
        r: common_vendor.o(onClick, "23"),
        s: common_vendor.p({
          amount: "99",
          title: "已失效优惠券",
          ["action-text"]: "已过期",
          disabled: true,
          class: "data-v-96f94cd5"
        }),
        t: common_vendor.o(onClick, "f4"),
        v: common_vendor.p({
          amount: "15",
          title: "自定义背景",
          ["bg-color"]: "#eef7ff",
          ["action-text"]: "去使用",
          class: "mt-_b12px_B data-v-96f94cd5"
        }),
        w: common_vendor.p({
          class: "demo-title data-v-96f94cd5"
        }),
        x: common_vendor.o(onClick, "b3"),
        y: common_vendor.p({
          amount: "88",
          title: "大额优惠券",
          desc: "自定义右侧按钮",
          class: "data-v-96f94cd5"
        }),
        z: common_vendor.p({
          class: "demo-title data-v-96f94cd5"
        }),
        A: common_vendor.t(eventLog.value),
        B: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-coupon 优惠券",
          class: "data-v-96f94cd5"
        }),
        C: common_vendor.gei(_ctx, ""),
        D: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-96f94cd5"
        }),
        E: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-96f94cd5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/coupon/coupon.js.map
