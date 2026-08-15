"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("./link.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-link"
}, { __name: "up-link", props: {
  color: {
    type: String,
    default: "#3c9cff"
  },
  fontSize: {
    type: [String, Number],
    default: "15px"
  },
  underLine: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
    default: ""
  },
  mpTips: {
    type: String,
    default: "链接已复制，请在浏览器打开"
  },
  lineColor: {
    type: String,
    default: ""
  },
  text: {
    type: String,
    default: ""
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["click"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const linkStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({
      color: props.color,
      fontSize: uni_modules_uviewUltra_libs_function_index.addUnit(props.fontSize),
      lineHeight: uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(uni_modules_uviewUltra_libs_function_index.getPx(props.fontSize)) + 2),
      textDecoration: props.underLine ? "underline" : "none"
    });
    return style;
  });
  function openLink() {
    emit("click");
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.t(__props.text),
      b: common_vendor.sei(common_vendor.gei(_ctx, ""), "text"),
      c: common_vendor.o(openLink, "eb"),
      d: common_vendor.s(linkStyle.value),
      e: common_vendor.s(common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addStyle)(__props.customStyle)),
      f: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b6767399"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-link/up-link.js.map
