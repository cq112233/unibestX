"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_up_number_keyboard_1 = common_vendor.resolveComponent("up-number-keyboard");
  const _easycom_up_car_keyboard_1 = common_vendor.resolveComponent("up-car-keyboard");
  const _easycom_up_popup_1 = common_vendor.resolveComponent("up-popup");
  (_easycom_up_number_keyboard_1 + _easycom_up_car_keyboard_1 + _easycom_up_popup_1)();
}
const _easycom_up_number_keyboard = () => "../up-number-keyboard/up-number-keyboard.js";
const _easycom_up_car_keyboard = () => "../up-car-keyboard/up-car-keyboard.js";
const _easycom_up_popup = () => "../up-popup/up-popup.js";
if (!Math) {
  (_easycom_up_number_keyboard + _easycom_up_car_keyboard + _easycom_up_popup)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-keyboard"
}, { __name: "up-keyboard", props: {
  mode: {
    type: String,
    default: "number"
  },
  dotDisabled: {
    type: Boolean,
    default: false
  },
  tooltip: {
    type: Boolean,
    default: true
  },
  showTips: {
    type: Boolean,
    default: true
  },
  tips: {
    type: String,
    default: ""
  },
  showCancel: {
    type: Boolean,
    default: true
  },
  showConfirm: {
    type: Boolean,
    default: true
  },
  random: {
    type: Boolean,
    default: false
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  },
  show: {
    type: Boolean,
    default: false
  },
  overlay: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: [String, Number],
    default: 1075
  },
  cancelText: {
    type: String,
    default: "取消"
  },
  confirmText: {
    type: String,
    default: "确认"
  },
  autoChange: {
    type: Boolean,
    default: false
  }
}, emits: ["change", "close", "confirm", "cancel", "backspace"], setup(__props, _a) {
  var __emit = _a.emit;
  const emit = __emit;
  function keyboardChange(e = null) {
    emit("change", e.toString());
  }
  function popupClose() {
    emit("close");
  }
  function onConfirm() {
    emit("confirm");
  }
  function onCancel() {
    emit("cancel");
  }
  function keyboardBackspace() {
    emit("backspace");
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.tooltip
    }, __props.tooltip ? common_vendor.e({
      b: __props.showCancel
    }, __props.showCancel ? {
      c: common_vendor.t(__props.cancelText),
      d: common_vendor.o(onCancel, "e4")
    } : {}, {
      e: __props.showTips
    }, __props.showTips ? {
      f: common_vendor.t(__props.tips != "" ? __props.tips : __props.mode == "number" ? "数字键盘" : __props.mode == "card" ? "身份证键盘" : "车牌号键盘")
    } : {}, {
      g: __props.showConfirm
    }, __props.showConfirm ? {
      h: common_vendor.t(__props.showConfirm ? __props.confirmText : ""),
      i: common_vendor.o(onConfirm, "7c")
    } : {}) : {}, {
      j: __props.mode == "number" || __props.mode == "card"
    }, __props.mode == "number" || __props.mode == "card" ? {
      k: common_vendor.o(keyboardBackspace, "83"),
      l: common_vendor.o(keyboardChange, "78"),
      m: common_vendor.p({
        random: __props.random,
        mode: __props.mode,
        dotDisabled: __props.dotDisabled,
        class: "data-v-a2014f5b"
      })
    } : {
      n: common_vendor.o(keyboardBackspace, "43"),
      o: common_vendor.o(keyboardChange, "fa"),
      p: common_vendor.p({
        random: __props.random,
        autoChange: __props.autoChange,
        class: "data-v-a2014f5b"
      })
    }, {
      q: common_vendor.gei(_ctx, ""),
      r: common_vendor.o(popupClose, "41"),
      s: common_vendor.p({
        overlay: __props.overlay,
        closeOnClickOverlay: __props.closeOnClickOverlay,
        mode: "bottom",
        popup: false,
        show: __props.show,
        safeAreaInsetBottom: __props.safeAreaInsetBottom,
        zIndex: __props.zIndex,
        customStyle: {
          backgroundColor: "rgb(214, 218, 220)"
        },
        id: common_vendor.gei(_ctx, ""),
        class: "data-v-a2014f5b"
      }),
      t: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a2014f5b"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-keyboard/up-keyboard.js.map
