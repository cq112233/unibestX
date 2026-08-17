"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon_1();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
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
    type: [Number, String],
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
  function getParentProp(key, defaultVal = null) {
    var _a;
    if (parentProps == null)
      return defaultVal;
    const obj = parentProps.value;
    if (obj != null && obj[key] != null) {
      return (_a = obj[key]) !== null && _a !== void 0 ? _a : defaultVal;
    }
    return defaultVal;
  }
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
    return getParentProp("direction", "row").toString();
  });
  const currentStep = common_vendor.computed(() => {
    const c = getParentProp("current", 0);
    return parseInt(c.toString());
  });
  const activeColor = common_vendor.computed(() => {
    return getParentProp("activeColor", "#3c9cff").toString();
  });
  const inactiveColor = common_vendor.computed(() => {
    return getParentProp("inactiveColor", "#969799").toString();
  });
  const activeIcon = common_vendor.computed(() => {
    return getParentProp("activeIcon", "").toString();
  });
  const inactiveIcon = common_vendor.computed(() => {
    return getParentProp("inactiveIcon", "").toString();
  });
  const isDot = common_vendor.computed(() => {
    var _a;
    return (_a = getParentProp("dot", false)) !== null && _a !== void 0 ? _a : false;
  });
  const statusClass = common_vendor.computed(() => {
    if (props.error)
      return "error";
    if (stepIndex.value < currentStep.value)
      return "finish";
    if (stepIndex.value == currentStep.value)
      return "process";
    return "wait";
  });
  const itemContainerStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (direction.value == "row") {
      style["flex"] = "1";
    } else {
      style["width"] = "100%";
    }
    return style;
  });
  const itemStyleInner = common_vendor.computed(() => {
    var _a;
    return (_a = props.itemStyle) !== null && _a !== void 0 ? _a : new common_vendor.UTSJSONObject({});
  });
  const contentStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({});
  });
  const lineLeftStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (stepIndex.value <= currentStep.value) {
      style["backgroundColor"] = activeColor.value;
    } else {
      style["backgroundColor"] = inactiveColor.value;
    }
    return style;
  });
  const lineRightStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (stepIndex.value < currentStep.value) {
      style["backgroundColor"] = activeColor.value;
    } else {
      style["backgroundColor"] = inactiveColor.value;
    }
    return style;
  });
  const lineColTopStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (stepIndex.value <= currentStep.value) {
      style["backgroundColor"] = activeColor.value;
    } else {
      style["backgroundColor"] = inactiveColor.value;
    }
    return style;
  });
  const lineColBottomStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (stepIndex.value < currentStep.value) {
      style["backgroundColor"] = activeColor.value;
    } else {
      style["backgroundColor"] = inactiveColor.value;
    }
    return style;
  });
  const dotStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (statusClass.value == "finish" || statusClass.value == "process") {
      style["backgroundColor"] = activeColor.value;
    } else {
      style["backgroundColor"] = inactiveColor.value;
    }
    return style;
  });
  const circleStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (statusClass.value == "process") {
      style["backgroundColor"] = activeColor.value;
      style["borderColor"] = activeColor.value;
    } else if (statusClass.value == "finish") {
      style["backgroundColor"] = "#ffffff";
      style["borderColor"] = activeColor.value;
    } else if (statusClass.value == "error") {
      style["backgroundColor"] = "#ffffff";
      style["borderColor"] = "#f56c6c";
    } else {
      style["backgroundColor"] = "#ffffff";
      style["borderColor"] = inactiveColor.value;
    }
    return style;
  });
  const circleTextStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (statusClass.value == "process") {
      style["color"] = "#ffffff";
    } else {
      style["color"] = inactiveColor.value;
    }
    return style;
  });
  const titleStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (statusClass.value == "process" || statusClass.value == "finish") {
      style["color"] = "#303133";
      style["fontWeight"] = "bold";
    } else {
      style["color"] = inactiveColor.value;
    }
    return style;
  });
  const descStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    style["color"] = "#909399";
    return style;
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: direction.value == "row" && stepIndex.value > 0
    }, direction.value == "row" && stepIndex.value > 0 ? {
      b: common_vendor.s(lineLeftStyle.value)
    } : {}, {
      c: direction.value == "row" && (childLength.value == 0 || stepIndex.value < childLength.value - 1)
    }, direction.value == "row" && (childLength.value == 0 || stepIndex.value < childLength.value - 1) ? {
      d: common_vendor.s(lineRightStyle.value)
    } : {}, {
      e: direction.value == "column" && stepIndex.value > 0
    }, direction.value == "column" && stepIndex.value > 0 ? {
      f: common_vendor.s(lineColTopStyle.value)
    } : {}, {
      g: direction.value == "column" && (childLength.value == 0 || stepIndex.value < childLength.value - 1)
    }, direction.value == "column" && (childLength.value == 0 || stepIndex.value < childLength.value - 1) ? {
      h: common_vendor.s(lineColBottomStyle.value)
    } : {}, {
      i: isDot.value
    }, isDot.value ? {
      j: common_vendor.s(dotStyle.value)
    } : activeIcon.value != "" || inactiveIcon.value != "" ? {
      l: common_vendor.p({
        name: stepIndex.value <= currentStep.value ? activeIcon.value != "" ? activeIcon.value : inactiveIcon.value : inactiveIcon.value != "" ? inactiveIcon.value : activeIcon.value,
        size: __props.iconSize,
        color: stepIndex.value <= currentStep.value ? activeColor.value != "" ? activeColor.value : "#3c9cff" : inactiveColor.value,
        class: "data-v-be09750b"
      })
    } : common_vendor.e({
      m: statusClass.value == "process" || statusClass.value == "wait"
    }, statusClass.value == "process" || statusClass.value == "wait" ? {
      n: common_vendor.t(stepIndex.value + 1),
      o: common_vendor.s(circleTextStyle.value)
    } : {
      p: common_vendor.p({
        color: statusClass.value == "error" ? "#f56c6c" : activeColor.value != "" ? activeColor.value : "#3c9cff",
        size: "12",
        name: statusClass.value == "error" ? "close" : "checkmark",
        class: "data-v-be09750b"
      })
    }, {
      q: common_vendor.s(circleStyle.value)
    }), {
      k: activeIcon.value != "" || inactiveIcon.value != "",
      r: common_vendor.n(`up-steps-item__wrapper--${direction.value}`),
      s: common_vendor.n(isDot.value ? `up-steps-item__wrapper--${direction.value}--dot` : ""),
      t: common_vendor.s(itemStyleInner.value),
      v: common_vendor.t(__props.title.toString()),
      w: common_vendor.s(titleStyle.value),
      x: __props.desc.toString() != ""
    }, __props.desc.toString() != "" ? {
      y: common_vendor.t(__props.desc.toString()),
      z: common_vendor.s(descStyle.value)
    } : {}, {
      A: common_vendor.r("content", {
        index: stepIndex.value
      }),
      B: common_vendor.n(`up-steps-item__content--${direction.value}`),
      C: common_vendor.s(contentStyle.value),
      D: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      E: common_vendor.n(`up-steps-item--${direction.value}`),
      F: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      G: common_vendor.s(itemContainerStyle.value),
      H: common_vendor.s({
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
