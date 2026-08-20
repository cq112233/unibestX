"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uniIcons_components_uniIcons_uniicons_file = require("./uniicons_file.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "uni-icons"
}, { __name: "uni-icons", props: {
  type: {
    type: String,
    default: ""
  },
  color: {
    type: String,
    default: "#333333"
  },
  size: {
    type: [Number, String],
    default: 16
  },
  fontFamily: {
    type: String,
    default: ""
  }
}, setup(__props) {
  const props = __props;
  function getFontSize(size) {
    return size + "px";
  }
  const unicode = common_vendor.computed(() => {
    const codes = common_vendor.UTS.arrayFind(uni_modules_uniIcons_components_uniIcons_uniicons_file.fontData, (item) => {
      return item.font_class == props.type;
    });
    if (codes != null) {
      return codes.unicode;
    }
    return "";
  });
  const iconSize = common_vendor.computed(() => {
    const size = props.size;
    if (typeof size == "string") {
      const reg = /^[0-9]*$/g;
      return reg.test(size) ? "" + size + "px" : "" + size;
    }
    return getFontSize(size);
  });
  const styleObj = common_vendor.computed(() => {
    if (props.fontFamily != "") {
      return new common_vendor.UTSJSONObject({ color: props.color, fontSize: iconSize.value, fontFamily: props.fontFamily });
    }
    return new common_vendor.UTSJSONObject({ color: props.color, fontSize: iconSize.value });
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.t(unicode.value),
      b: common_vendor.sei(common_vendor.gei(_ctx, ""), "text"),
      c: common_vendor.s(styleObj.value),
      d: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-776b174b"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-icons/components/uni-icons/uni-icons.js.map
