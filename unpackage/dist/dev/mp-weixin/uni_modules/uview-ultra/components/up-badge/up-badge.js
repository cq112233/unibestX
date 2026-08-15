"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-badge"
}, { __name: "up-badge", props: {
  isDot: {
    type: Boolean,
    default: false
  },
  value: {
    type: [Number, String],
    default: ""
  },
  modelValue: {
    type: [Number, String],
    default: ""
  },
  show: {
    type: Boolean,
    default: true
  },
  max: {
    type: [Number, String],
    default: 999
  },
  type: {
    type: String,
    default: "error"
  },
  showZero: {
    type: Boolean,
    default: false
  },
  bgColor: {
    type: String,
    default: ""
  },
  color: {
    type: String,
    default: "#ffffff"
  },
  shape: {
    type: String,
    default: "circle"
  },
  numberType: {
    type: String,
    default: "overflow"
  },
  offset: {
    type: Array,
    default: () => {
      return [];
    }
  },
  inverted: {
    type: Boolean,
    default: false
  },
  absolute: {
    type: Boolean,
    default: false
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, setup(__props) {
  const props = __props;
  const badgeStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (props.color != "") {
      style["color"] = props.color;
    }
    if (props.bgColor != "" && !props.inverted) {
      style["backgroundColor"] = props.bgColor;
    }
    if (props.absolute) {
      style["position"] = "absolute";
      let offsetArray = props.offset;
      if (offsetArray.length > 0) {
        const top_1 = offsetArray[0];
        style["top"] = uni_modules_uviewUltra_libs_function_index.addUnit(top_1);
        if (offsetArray.length == 2) {
          style["right"] = uni_modules_uviewUltra_libs_function_index.addUnit(offsetArray[1]);
        } else {
          style["right"] = uni_modules_uviewUltra_libs_function_index.addUnit(top_1);
        }
      }
    }
    return style;
  });
  const showValue = common_vendor.computed(() => {
    let valueReturn = "";
    const valStr = props.value != "" ? props.value.toString() : props.modelValue != "" ? props.modelValue.toString() : "0";
    switch (props.numberType.toString()) {
      case "overflow":
        valueReturn = parseInt(valStr) > parseInt(props.max.toString()) ? props.max.toString() + "+" : valStr;
        break;
      case "ellipsis":
        valueReturn = parseInt(valStr) > parseInt(props.max.toString()) ? "..." : valStr;
        break;
      case "limit":
        valueReturn = parseInt(valStr) > 999 ? parseInt(valStr) >= 9999 ? (Math.floor(parseInt(valStr) / 1e4 * 100) / 100).toString() + "w" : (Math.floor(parseInt(valStr) / 1e3 * 100) / 100).toString() + "k" : valStr;
        break;
      default:
        valueReturn = valStr;
    }
    return valueReturn;
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.show && ((parseInt(__props.value.toString()) == 0 ? __props.showZero : true) || __props.isDot)
    }, __props.show && ((parseInt(__props.value.toString()) == 0 ? __props.showZero : true) || __props.isDot) ? {
      b: common_vendor.t(__props.isDot ? "" : showValue.value),
      c: common_vendor.sei(common_vendor.gei(_ctx, ""), "text"),
      d: common_vendor.n(__props.isDot ? "up-badge--dot" : "up-badge--not-dot"),
      e: common_vendor.n(__props.inverted ? "up-badge--inverted" : ""),
      f: common_vendor.n(__props.shape === "horn" ? "up-badge--horn" : ""),
      g: common_vendor.n(__props.inverted ? `up-badge--${__props.type}--inverted` : `up-badge--${__props.type}`),
      h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      i: common_vendor.s(common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addStyle)(__props.customStyle)),
      j: common_vendor.s(badgeStyle.value),
      k: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    } : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9d382ba3"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-badge/up-badge.js.map
