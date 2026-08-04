"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_keyboard_1 = common_vendor.resolveComponent("up-keyboard");
  (_easycom_NavBar_1 + _easycom_up_keyboard_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_keyboard = () => "../../../../../uni_modules/uview-ultra/components/up-keyboard/up-keyboard.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_keyboard + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "keyboard",
  setup(__props) {
    const showNumber = common_vendor.ref(false);
    const valNumber = common_vendor.ref("");
    const onNumberChange = (val) => {
      valNumber.value += val;
    };
    const onNumberBackspace = () => {
      if (valNumber.value.length > 0) {
        valNumber.value = valNumber.value.substring(0, valNumber.value.length - 1);
      }
    };
    const showCard = common_vendor.ref(false);
    const valCard = common_vendor.ref("");
    const onCardChange = (val) => {
      valCard.value += val;
    };
    const onCardBackspace = () => {
      if (valCard.value.length > 0) {
        valCard.value = valCard.value.substring(0, valCard.value.length - 1);
      }
    };
    const showCar = common_vendor.ref(false);
    const valCar = common_vendor.ref("");
    const onCarChange = (val) => {
      valCar.value += val;
    };
    const onCarBackspace = () => {
      if (valCar.value.length > 0) {
        valCar.value = valCar.value.substring(0, valCar.value.length - 1);
      }
    };
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Keyboard 键盘",
          ["auto-back"]: true,
          class: "data-v-6e648c8f"
        }),
        b: common_vendor.t(valNumber.value || "请点击输入数字"),
        c: common_vendor.n(valNumber.value ? "mock-input-text" : "mock-input-placeholder"),
        d: common_vendor.o(($event) => {
          return showNumber.value = true;
        }, "97"),
        e: common_vendor.o(onNumberChange, "d7"),
        f: common_vendor.o(onNumberBackspace, "19"),
        g: common_vendor.o(($event) => {
          return showNumber.value = false;
        }, "f0"),
        h: common_vendor.o(($event) => {
          return showNumber.value = false;
        }, "7b"),
        i: common_vendor.o(($event) => {
          return showNumber.value = false;
        }, "1e"),
        j: common_vendor.p({
          mode: "number",
          show: showNumber.value,
          class: "data-v-6e648c8f"
        }),
        k: common_vendor.t(valCard.value || "请点击输入身份证"),
        l: common_vendor.n(valCard.value ? "mock-input-text" : "mock-input-placeholder"),
        m: common_vendor.o(($event) => {
          return showCard.value = true;
        }, "ac"),
        n: common_vendor.o(onCardChange, "80"),
        o: common_vendor.o(onCardBackspace, "e1"),
        p: common_vendor.o(($event) => {
          return showCard.value = false;
        }, "82"),
        q: common_vendor.o(($event) => {
          return showCard.value = false;
        }, "8a"),
        r: common_vendor.o(($event) => {
          return showCard.value = false;
        }, "19"),
        s: common_vendor.p({
          mode: "card",
          show: showCard.value,
          class: "data-v-6e648c8f"
        }),
        t: common_vendor.t(valCar.value || "请点击输入车牌号"),
        v: common_vendor.n(valCar.value ? "mock-input-text" : "mock-input-placeholder"),
        w: common_vendor.o(($event) => {
          return showCar.value = true;
        }, "76"),
        x: common_vendor.o(onCarChange, "e2"),
        y: common_vendor.o(onCarBackspace, "b0"),
        z: common_vendor.o(($event) => {
          return showCar.value = false;
        }, "05"),
        A: common_vendor.o(($event) => {
          return showCar.value = false;
        }, "3c"),
        B: common_vendor.o(($event) => {
          return showCar.value = false;
        }, "59"),
        C: common_vendor.p({
          mode: "car",
          show: showCar.value,
          class: "data-v-6e648c8f"
        }),
        D: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-keyboard 键盘",
          class: "data-v-6e648c8f"
        }),
        E: common_vendor.gei(_ctx, ""),
        F: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-6e648c8f"
        }),
        G: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6e648c8f"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/keyboard/keyboard.js.map
