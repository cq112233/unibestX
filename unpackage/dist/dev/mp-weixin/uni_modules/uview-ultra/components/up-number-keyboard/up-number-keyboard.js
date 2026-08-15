"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon_1();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const dot = ".";
const cardX = "X";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-number-keyboard"
}, { __name: "up-number-keyboard", props: {
  mode: {
    type: String,
    default: "number"
  },
  dotDisabled: {
    type: Boolean,
    default: true
  },
  random: {
    type: Boolean,
    default: false
  }
}, emits: ["change", "backspace"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  let timer = null;
  function noop() {
  }
  const numList = common_vendor.computed(() => {
    let tmp = [];
    if (props.dotDisabled && props.mode == "number") {
      if (!props.random) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
      } else {
        return uni_modules_uviewUltra_libs_function_index.randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
      }
    } else if (!props.dotDisabled && props.mode == "number") {
      if (!props.random) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, dot, 0];
      } else {
        return uni_modules_uviewUltra_libs_function_index.randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, dot, 0]);
      }
    } else if (props.mode == "card") {
      if (!props.random) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, cardX, 0];
      } else {
        return uni_modules_uviewUltra_libs_function_index.randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, cardX, 0]);
      }
    }
    return tmp;
  });
  function itemStyle(index) {
    let style = new common_vendor.UTSJSONObject({});
    if (props.mode == "number" && props.dotDisabled && index == 9) {
      style["width"] = "464rpx";
    }
    return style;
  }
  function backspaceClick() {
    emit("backspace");
    if (timer != null) {
      clearInterval(timer);
      timer = null;
    }
    timer = setInterval(() => {
      emit("backspace");
    }, 250);
  }
  function clearTimer() {
    if (timer != null) {
      clearInterval(timer);
      timer = null;
    }
  }
  function keyboardClick(val = null) {
    let res = val;
    if (!props.dotDisabled && val != dot && val != cardX) {
      res = parseInt(val.toString());
    }
    emit("change", res);
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.f(numList.value, (item, index, i0) => {
        return {
          a: common_vendor.t(item),
          b: common_vendor.s(itemStyle(index)),
          c: common_vendor.o(($event) => {
            return keyboardClick(item);
          }, index),
          d: index
        };
      }),
      b: common_vendor.p({
        name: "backspace",
        color: "#303133",
        size: "28",
        class: "data-v-d09600de"
      }),
      c: common_vendor.o(backspaceClick, "98"),
      d: common_vendor.o(clearTimer, "47"),
      e: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      f: common_vendor.o(noop, "ab"),
      g: `${_ctx.u_s_b_h}px`,
      h: `${_ctx.u_s_a_i_b}px`,
      i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d09600de"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-number-keyboard/up-number-keyboard.js.map
