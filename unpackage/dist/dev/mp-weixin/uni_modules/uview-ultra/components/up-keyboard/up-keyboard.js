"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_components_upKeyboard_props = require("./props.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-keyboard",
  data() {
    return {};
  },
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upKeyboard_props.propsKeyboard],
  emits: ["change", "close", "confirm", "cancel", "backspace"],
  methods: {
    keyboardChange(e = null) {
      this.$emit("change", e.toString());
    },
    // 键盘关闭
    popupClose() {
      this.$emit("close");
    },
    // 输入完成
    onConfirm() {
      this.$emit("confirm");
    },
    // 取消输入
    onCancel() {
      this.$emit("cancel");
    },
    // 退格键
    keyboardBackspace() {
      this.$emit("backspace");
    }
  }
});
if (!Array) {
  const _easycom_up_number_keyboard2 = common_vendor.resolveComponent("up-number-keyboard");
  const _easycom_up_car_keyboard2 = common_vendor.resolveComponent("up-car-keyboard");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  (_easycom_up_number_keyboard2 + _easycom_up_car_keyboard2 + _easycom_up_popup2)();
}
const _easycom_up_number_keyboard = () => "../up-number-keyboard/up-number-keyboard.js";
const _easycom_up_car_keyboard = () => "../up-car-keyboard/up-car-keyboard.js";
const _easycom_up_popup = () => "../up-popup/up-popup.js";
if (!Math) {
  (_easycom_up_number_keyboard + _easycom_up_car_keyboard + _easycom_up_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: _ctx.tooltip
  }, _ctx.tooltip ? common_vendor.e({
    b: _ctx.showCancel
  }, _ctx.showCancel ? {
    c: common_vendor.t(_ctx.cancelText),
    d: common_vendor.o((...args) => $options.onCancel && $options.onCancel(...args), "8d")
  } : {}, {
    e: _ctx.showTips
  }, _ctx.showTips ? {
    f: common_vendor.t(_ctx.tips != "" ? _ctx.tips : _ctx.mode == "number" ? "数字键盘" : _ctx.mode == "card" ? "身份证键盘" : "车牌号键盘")
  } : {}, {
    g: _ctx.showConfirm
  }, _ctx.showConfirm ? {
    h: common_vendor.t(_ctx.showConfirm ? _ctx.confirmText : ""),
    i: common_vendor.o((...args) => $options.onConfirm && $options.onConfirm(...args), "72")
  } : {}) : {}, {
    j: _ctx.mode == "number" || _ctx.mode == "card"
  }, _ctx.mode == "number" || _ctx.mode == "card" ? {
    k: common_vendor.o($options.keyboardBackspace, "38"),
    l: common_vendor.o($options.keyboardChange, "f7"),
    m: common_vendor.p({
      random: _ctx.random,
      mode: _ctx.mode,
      dotDisabled: _ctx.dotDisabled,
      class: "data-v-a2014f5b"
    })
  } : {
    n: common_vendor.o($options.keyboardBackspace, "16"),
    o: common_vendor.o($options.keyboardChange, "4b"),
    p: common_vendor.p({
      random: _ctx.random,
      autoChange: _ctx.autoChange,
      class: "data-v-a2014f5b"
    })
  }, {
    q: common_vendor.gei(_ctx, ""),
    r: common_vendor.o($options.popupClose, "ae"),
    s: common_vendor.p({
      overlay: _ctx.overlay,
      closeOnClickOverlay: _ctx.closeOnClickOverlay,
      mode: "bottom",
      popup: false,
      show: _ctx.show,
      safeAreaInsetBottom: _ctx.safeAreaInsetBottom,
      zIndex: _ctx.zIndex,
      customStyle: {
        backgroundColor: "rgb(214, 218, 220)"
      },
      id: common_vendor.gei(_ctx, ""),
      class: "data-v-a2014f5b"
    }),
    t: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a2014f5b"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-keyboard/up-keyboard.js.map
