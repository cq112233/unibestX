"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_config_color = require("../../libs/config/color.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_text_1 = common_vendor.resolveComponent("up-text");
  (_easycom_up_icon_1 + _easycom_up_text_1)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_text = () => "../up-text/up-text.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_text)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-steps-item"
}, { __name: "up-steps-item", props: {
  title: {
    type: [String, Number],
    default: ""
  },
  desc: {
    type: [String, Number],
    default: ""
  },
  iconSize: {
    type: [String, Number],
    default: 17
  },
  error: {
    type: Boolean,
    default: false
  },
  index: {
    type: [Number, String, null],
    default: null
  },
  itemStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, setup(__props) {
  const props = __props;
  const parentProps = common_vendor.inject("upStepsProps", null);
  const registerStep = common_vendor.inject("upStepsRegister", null);
  const totalSteps = common_vendor.inject("upStepsItemCount", null);
  const internalIndex = common_vendor.ref(0);
  common_vendor.onMounted(() => {
    if (props.index != null) {
      internalIndex.value = parseInt(props.index.toString());
    } else if (registerStep != null) {
      internalIndex.value = registerStep();
    }
  });
  const stepIndex = common_vendor.computed(() => {
    if (props.index != null)
      return parseInt(props.index.toString());
    return internalIndex.value;
  });
  const childLength = common_vendor.computed(() => {
    var _a;
    return (_a = totalSteps === null || totalSteps === void 0 ? null : totalSteps.value) !== null && _a !== void 0 ? _a : 0;
  });
  const direction = common_vendor.computed(() => {
    var _a;
    return (_a = parentProps === null || parentProps === void 0 ? null : parentProps.direction) !== null && _a !== void 0 ? _a : "row";
  });
  const currentStep = common_vendor.computed(() => {
    var _a;
    return parseInt(((_a = parentProps === null || parentProps === void 0 ? null : parentProps.current) !== null && _a !== void 0 ? _a : 0).toString());
  });
  const activeColor = common_vendor.computed(() => {
    var _a;
    return (_a = parentProps === null || parentProps === void 0 ? null : parentProps.activeColor) !== null && _a !== void 0 ? _a : "#3c9cff";
  });
  const inactiveColor = common_vendor.computed(() => {
    var _a;
    return (_a = parentProps === null || parentProps === void 0 ? null : parentProps.inactiveColor) !== null && _a !== void 0 ? _a : "#969799";
  });
  const activeIcon = common_vendor.computed(() => {
    var _a;
    return (_a = parentProps === null || parentProps === void 0 ? null : parentProps.activeIcon) !== null && _a !== void 0 ? _a : "";
  });
  const inactiveIcon = common_vendor.computed(() => {
    var _a;
    return (_a = parentProps === null || parentProps === void 0 ? null : parentProps.inactiveIcon) !== null && _a !== void 0 ? _a : "";
  });
  const isDot = common_vendor.computed(() => {
    var _a;
    return (_a = parentProps === null || parentProps === void 0 ? null : parentProps.dot) !== null && _a !== void 0 ? _a : false;
  });
  const statusClass = common_vendor.computed(() => {
    if (props.error)
      return "error";
    if (stepIndex.value < currentStep.value)
      return "finish";
    if (stepIndex.value === currentStep.value)
      return "process";
    return "wait";
  });
  const itemWidthStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (direction.value === "row" && childLength.value > 0) {
      style["width"] = (100 / childLength.value).toString() + "%";
    }
    return style;
  });
  const itemStyleInner = common_vendor.computed(() => {
    var _a;
    const style = (_a = props.itemStyle) !== null && _a !== void 0 ? _a : new common_vendor.UTSJSONObject({});
    return style;
  });
  const contentStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    return style;
  });
  const lineStyle2 = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (direction.value === "row") {
      if (stepIndex.value == 0) {
        style["display"] = "none";
      } else {
        style["left"] = "0px";
        style["right"] = "50%";
        style["width"] = "auto";
      }
    } else {
      if (stepIndex.value == 0) {
        style["display"] = "none";
      } else {
        style["top"] = "0px";
        style["bottom"] = "50%";
        style["left"] = "10px";
        style["height"] = "auto";
        style["width"] = "1px";
      }
    }
    if (props.error) {
      style["backgroundColor"] = uni_modules_uviewUltra_libs_config_color.color["error"];
    } else if (stepIndex.value - 1 < currentStep.value) {
      if (activeColor.value != "#3c9cff") {
        style["backgroundColor"] = activeColor.value;
      }
    } else {
      style["backgroundColor"] = inactiveColor.value;
    }
    return style;
  });
  const lineStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (direction.value === "row") {
      if (childLength.value > 0 && stepIndex.value == childLength.value - 1) {
        style["display"] = "none";
      } else {
        style["left"] = "50%";
        style["right"] = "0px";
        style["width"] = "auto";
      }
    } else {
      if (childLength.value > 0 && stepIndex.value == childLength.value - 1) {
        style["display"] = "none";
      } else {
        style["top"] = "50%";
        style["bottom"] = "0px";
        style["left"] = "10px";
        style["height"] = "auto";
        style["width"] = "1px";
      }
    }
    if (stepIndex.value < currentStep.value) {
      if (activeColor.value != "#3c9cff") {
        style["backgroundColor"] = activeColor.value;
      }
    } else {
      style["backgroundColor"] = inactiveColor.value;
    }
    return style;
  });
  const dotStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (statusClass.value === "finish" || statusClass.value === "process") {
      if (activeColor.value != "#3c9cff") {
        style["backgroundColor"] = activeColor.value;
      }
    } else {
      style["backgroundColor"] = inactiveColor.value;
    }
    return style;
  });
  const circleStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (activeColor.value != "#3c9cff" || inactiveColor.value != "#969799") {
      if (statusClass.value === "process") {
        style["backgroundColor"] = activeColor.value;
        style["borderColor"] = activeColor.value;
      } else if (statusClass.value === "finish") {
        style["backgroundColor"] = "rgba(0, 0, 0, 0)";
        style["borderColor"] = activeColor.value;
      } else if (statusClass.value === "wait") {
        style["backgroundColor"] = "rgba(0, 0, 0, 0)";
        style["borderColor"] = inactiveColor.value;
      } else if (statusClass.value === "error") {
        style["backgroundColor"] = "rgba(0, 0, 0, 0)";
        style["borderColor"] = uni_modules_uviewUltra_libs_config_color.color["error"];
      }
    }
    return style;
  });
  const circleTextStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (activeColor.value != "#3c9cff" || inactiveColor.value != "#969799") {
      if (statusClass.value === "process") {
        style["color"] = "#ffffff";
      } else {
        style["color"] = inactiveColor.value;
      }
    }
    return style;
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.n(`up-steps-item__line--${direction.value}`),
      b: common_vendor.n(stepIndex.value < currentStep.value && activeColor.value == "#3c9cff" ? "up-steps-item__line--active" : ""),
      c: common_vendor.s(lineStyle.value),
      d: common_vendor.n(`up-steps-item__line--${direction.value}`),
      e: common_vendor.n(stepIndex.value - 1 < currentStep.value && activeColor.value == "#3c9cff" ? "up-steps-item__line--active" : ""),
      f: common_vendor.s(lineStyle2.value),
      g: isDot.value
    }, isDot.value ? {
      h: common_vendor.n(statusClass.value === "finish" || statusClass.value === "process" ? "up-steps-item__wrapper__dot--active" : ""),
      i: common_vendor.s(dotStyle.value)
    } : activeIcon.value != "" || inactiveIcon.value != "" ? {
      k: common_vendor.p({
        name: stepIndex.value <= currentStep.value ? activeIcon.value : inactiveIcon.value,
        size: __props.iconSize,
        color: stepIndex.value <= currentStep.value ? activeColor.value == "#3c9cff" ? "primary" : activeColor.value : inactiveColor.value,
        class: "data-v-be09750b"
      })
    } : common_vendor.e({
      l: statusClass.value === "process" || statusClass.value === "wait"
    }, statusClass.value === "process" || statusClass.value === "wait" ? {
      m: common_vendor.t(stepIndex.value + 1),
      n: common_vendor.n(statusClass.value === "process" ? "up-steps-item__wrapper__circle__text--active" : ""),
      o: common_vendor.s(circleTextStyle.value)
    } : {
      p: common_vendor.p({
        color: statusClass.value === "error" ? "error" : activeColor.value == "#3c9cff" ? "primary" : activeColor.value,
        size: "12",
        name: statusClass.value === "error" ? "close" : "checkmark",
        class: "data-v-be09750b"
      })
    }, {
      q: common_vendor.n(statusClass.value === "process" ? "up-steps-item__wrapper__circle--active" : ""),
      r: common_vendor.n(statusClass.value === "finish" ? "up-steps-item__wrapper__circle--finish" : ""),
      s: common_vendor.n(statusClass.value === "wait" ? "up-steps-item__wrapper__circle--wait" : ""),
      t: common_vendor.n(statusClass.value === "error" ? "up-steps-item__wrapper__circle--error" : ""),
      v: common_vendor.s(circleStyle.value)
    }), {
      j: activeIcon.value != "" || inactiveIcon.value != "",
      w: common_vendor.n(`up-steps-item__wrapper--${direction.value}`),
      x: common_vendor.n(isDot.value ? `up-steps-item__wrapper--${direction.value}--dot` : ""),
      y: common_vendor.s(itemStyleInner.value),
      z: common_vendor.r("content", {
        index: stepIndex.value
      }),
      A: _ctx.$slots["content"] == null
    }, _ctx.$slots["content"] == null ? common_vendor.e({
      B: _ctx.$slots["title"] == null
    }, _ctx.$slots["title"] == null ? {
      C: common_vendor.p({
        text: __props.title.toString(),
        lineHeight: "20px",
        color: currentStep.value == stepIndex.value ? activeColor.value == "#3c9cff" ? "" : activeColor.value : inactiveColor.value,
        type: currentStep.value == stepIndex.value && activeColor.value == "#3c9cff" ? "primary" : "default",
        size: currentStep.value == stepIndex.value ? 14 : 13,
        class: "data-v-be09750b"
      })
    } : {}, {
      D: _ctx.$slots["desc"] == null
    }, _ctx.$slots["desc"] == null ? {
      E: common_vendor.p({
        text: __props.desc.toString(),
        type: "tips",
        size: "12",
        class: "data-v-be09750b"
      })
    } : {}) : {}, {
      F: common_vendor.n(`up-steps-item__content--${direction.value}`),
      G: common_vendor.n(currentStep.value == stepIndex.value ? "up-steps-item__content--current" : ""),
      H: common_vendor.s(contentStyle.value),
      I: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      J: common_vendor.n(`up-steps-item--${direction.value}`),
      K: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      L: common_vendor.s(itemWidthStyle.value),
      M: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-be09750b"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-steps-item/up-steps-item.js.map
