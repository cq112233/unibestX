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
  (_easycom_NavBar + _easycom_up_keyboard + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "keyboard",
  setup(__props) {
    const showNumber = common_vendor.ref(false);
    const valNumber = common_vendor.ref("");
    function onNumberChange(val) {
      valNumber.value += val;
    }
    function onNumberBackspace() {
      if (valNumber.value.length > 0) {
        valNumber.value = valNumber.value.substring(0, valNumber.value.length - 1);
      }
    }
    const showCard = common_vendor.ref(false);
    const valCard = common_vendor.ref("");
    function onCardChange(val) {
      valCard.value += val;
    }
    function onCardBackspace() {
      if (valCard.value.length > 0) {
        valCard.value = valCard.value.substring(0, valCard.value.length - 1);
      }
    }
    const showCar = common_vendor.ref(false);
    const valCar = common_vendor.ref("");
    function onCarChange(val) {
      valCar.value += val;
    }
    function onCarBackspace() {
      if (valCar.value.length > 0) {
        valCar.value = valCar.value.substring(0, valCar.value.length - 1);
      }
    }
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
        }, "1a"),
        e: common_vendor.o(onNumberChange, "e2"),
        f: common_vendor.o(onNumberBackspace, "b6"),
        g: common_vendor.o(($event) => {
          return showNumber.value = false;
        }, "15"),
        h: common_vendor.o(($event) => {
          return showNumber.value = false;
        }, "db"),
        i: common_vendor.o(($event) => {
          return showNumber.value = false;
        }, "13"),
        j: common_vendor.p({
          mode: "number",
          show: showNumber.value,
          class: "data-v-6e648c8f"
        }),
        k: common_vendor.t(valCard.value || "请点击输入身份证"),
        l: common_vendor.n(valCard.value ? "mock-input-text" : "mock-input-placeholder"),
        m: common_vendor.o(($event) => {
          return showCard.value = true;
        }, "3d"),
        n: common_vendor.o(onCardChange, "ab"),
        o: common_vendor.o(onCardBackspace, "53"),
        p: common_vendor.o(($event) => {
          return showCard.value = false;
        }, "d3"),
        q: common_vendor.o(($event) => {
          return showCard.value = false;
        }, "4f"),
        r: common_vendor.o(($event) => {
          return showCard.value = false;
        }, "93"),
        s: common_vendor.p({
          mode: "card",
          show: showCard.value,
          class: "data-v-6e648c8f"
        }),
        t: common_vendor.t(valCar.value || "请点击输入车牌号"),
        v: common_vendor.n(valCar.value ? "mock-input-text" : "mock-input-placeholder"),
        w: common_vendor.o(($event) => {
          return showCar.value = true;
        }, "ba"),
        x: common_vendor.o(onCarChange, "53"),
        y: common_vendor.o(onCarBackspace, "0b"),
        z: common_vendor.o(($event) => {
          return showCar.value = false;
        }, "50"),
        A: common_vendor.o(($event) => {
          return showCar.value = false;
        }, "82"),
        B: common_vendor.o(($event) => {
          return showCar.value = false;
        }, "0e"),
        C: common_vendor.p({
          mode: "car",
          show: showCar.value,
          class: "data-v-6e648c8f"
        }),
        D: common_vendor.gei(_ctx, ""),
        E: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-6e648c8f"
        }),
        F: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6e648c8f"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/keyboard/keyboard.js.map
