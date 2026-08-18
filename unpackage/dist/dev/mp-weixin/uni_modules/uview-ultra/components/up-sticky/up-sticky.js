"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("./sticky.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_config_zIndex = require("../../libs/config/zIndex.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-sticky"
}, { __name: "up-sticky", props: {
  offsetTop: {
    type: [String, Number],
    default: 0
  },
  customNavHeight: {
    type: [String, Number],
    default: 0
  },
  disabled: {
    type: Boolean,
    default: false
  },
  bgColor: {
    type: String,
    default: "transparent"
  },
  zIndex: {
    type: [String, Number],
    default: ""
  },
  index: {
    type: [String, Number],
    default: ""
  },
  scrollTop: {
    type: [String, Number],
    default: 0
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, setup(__props) {
  const props = __props;
  const uZindex = common_vendor.computed(() => {
    var _a;
    const zVal = props.zIndex;
    if (zVal != null && zVal.toString() != "") {
      const parsed = parseInt(zVal.toString());
      if (!isNaN(parsed)) {
        return parsed;
      }
    }
    return (_a = uni_modules_uviewUltra_libs_config_zIndex.zIndexConfig["sticky"]) !== null && _a !== void 0 ? _a : 999;
  });
  const webMpStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (!props.disabled) {
      style["position"] = "sticky";
      const top_1 = parseFloat(uni_modules_uviewUltra_libs_function_index.getPx(props.offsetTop));
      style["top"] = top_1 + "px";
      style["zIndex"] = uZindex.value;
    } else {
      style["position"] = "relative";
    }
    if (props.bgColor != "") {
      style["backgroundColor"] = props.bgColor;
    }
    return uni_modules_uviewUltra_libs_function_index.deepMerge(uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle), style);
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      b: common_vendor.s(webMpStyle.value),
      c: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      d: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d941f132"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-sticky/up-sticky.js.map
