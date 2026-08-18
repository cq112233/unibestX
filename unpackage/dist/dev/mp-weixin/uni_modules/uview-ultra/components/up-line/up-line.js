"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("./line.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-line"
}, { __name: "up-line", props: {
  color: {
    type: String,
    default: "#d6d7d9"
  },
  length: {
    type: [String, Number],
    default: "100%"
  },
  direction: {
    type: String,
    default: "row"
  },
  hairline: {
    type: Boolean,
    default: true
  },
  margin: {
    type: String,
    default: "0"
  },
  dashed: {
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
  const lineStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    style["margin"] = props.margin;
    if (props.direction === "row") {
      style["borderBottomWidth"] = "1px";
      style["borderBottomStyle"] = props.dashed ? "dashed" : "solid";
      style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.length);
      if (props.hairline)
        style["transform"] = "scaleY(0.5)";
    } else {
      style["borderLeftWidth"] = "1px";
      style["borderLeftStyle"] = props.dashed ? "dashed" : "solid";
      style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.length);
      if (props.hairline)
        style["transform"] = "scaleX(0.5)";
    }
    style["borderColor"] = props.color;
    return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle));
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      b: common_vendor.s(lineStyle.value),
      c: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      d: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-549a29ec"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-line/up-line.js.map
