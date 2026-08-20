"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-circle-progress"
}, { __name: "up-circle-progress", props: {
  percentage: {
    type: [String, Number],
    default: 30
  },
  activeColor: {
    type: String,
    default: ""
  },
  inactiveColor: {
    type: String,
    default: "#e5e9f2"
  },
  width: {
    type: [String, Number],
    default: 80
  },
  strokeWidth: {
    type: [String, Number],
    default: 6
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, setup(__props) {
  function normalizeNumber(value = null, defaultValue = 0) {
    if (typeof value == "number") {
      return value;
    }
    if (value == null) {
      return defaultValue;
    }
    const parsed = parseFloat(value.toString());
    return isNaN(parsed) ? defaultValue : parsed;
  }
  const props = __props;
  const isDefaultColor = common_vendor.computed(() => {
    return props.activeColor == "";
  });
  const percent = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.range(0, 100, normalizeNumber(props.percentage, 30));
  });
  const size = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.addUnit(props.width);
  });
  const stroke = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.addUnit(props.strokeWidth);
  });
  const rootStyle = common_vendor.computed(() => {
    const base = new common_vendor.UTSJSONObject({});
    base["width"] = size.value;
    base["height"] = size.value;
    const custom = uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle);
    return uni_modules_uviewUltra_libs_function_index.deepMerge(base, custom);
  });
  const trackStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      width: size.value,
      height: size.value,
      borderWidth: stroke.value,
      borderColor: props.inactiveColor
    });
  });
  const textStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (props.activeColor != "") {
      style["color"] = props.activeColor;
    }
    return style;
  });
  function buildFillStyle(deg) {
    const style = new common_vendor.UTSJSONObject({});
    style["width"] = size.value;
    style["height"] = size.value;
    style["borderWidth"] = stroke.value;
    if (props.activeColor != "") {
      style["borderTopColor"] = props.activeColor;
      style["borderRightColor"] = props.activeColor;
    }
    style["borderBottomColor"] = "transparent";
    style["borderLeftColor"] = "transparent";
    style["transform"] = `rotate(${deg.toString()}deg)`;
    return style;
  }
  const rightStyle = common_vendor.computed(() => {
    let deg = percent.value * 3.6 - 135;
    if (deg > 45) {
      deg = 45;
    }
    if (deg < -135) {
      deg = -135;
    }
    return buildFillStyle(deg);
  });
  const leftStyle = common_vendor.computed(() => {
    let deg = percent.value * 3.6 - 135;
    if (deg < 45) {
      deg = 45;
    }
    if (deg > 225) {
      deg = 225;
    }
    return buildFillStyle(deg);
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.s(trackStyle.value),
      b: percent.value > 0
    }, percent.value > 0 ? {
      c: common_vendor.n(isDefaultColor.value ? "up-circle-progress__fill--primary" : ""),
      d: common_vendor.s(rightStyle.value)
    } : {}, {
      e: percent.value > 50
    }, percent.value > 50 ? {
      f: common_vendor.n(isDefaultColor.value ? "up-circle-progress__fill--primary" : ""),
      g: common_vendor.s(leftStyle.value)
    } : {}, {
      h: common_vendor.t(percent.value),
      i: common_vendor.n(isDefaultColor.value ? "up-circle-progress__text--primary" : ""),
      j: common_vendor.s(textStyle.value),
      k: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      l: common_vendor.s(rootStyle.value),
      m: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      n: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d3ad93d9"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-circle-progress/up-circle-progress.js.map
