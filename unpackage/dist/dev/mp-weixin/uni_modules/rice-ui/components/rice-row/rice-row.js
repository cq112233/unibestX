"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_components_riceRow_index = require("./index.js");
const uni_modules_riceUi_components_riceRow_type = require("./type.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-row",
  styleIsolation: "app-and-page"
}, { __name: "rice-row", props: {
  gutter: { default: 0 },
  justify: { default: "start" },
  align: {},
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, setup(__props) {
  const props = __props;
  const alignItems = common_vendor.computed(() => {
    if (props.align == "top")
      return "flex-start";
    else if (props.align == "center")
      return "center";
    else if (props.align == "bottom")
      return "flex-end";
    return "";
  });
  const rowStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.gutter > 0) {
      const gutterNum = uni_modules_riceUi_libs_utils_basic.addUnit(props.gutter / 2);
      css.set("margin-left", `-${gutterNum}`);
      css.set("margin-right", `-${gutterNum}`);
    }
    let justifyContent = props.justify;
    if (props.justify == "start" || props.justify == "end") {
      justifyContent = "flex-" + justifyContent;
    }
    css.set("justify-content", justifyContent);
    if (alignItems.value != "") {
      css.set("align-items", alignItems.value);
    }
    return css;
  });
  common_vendor.provide(uni_modules_riceUi_components_riceRow_index.rowInjectKey, new uni_modules_riceUi_components_riceRow_type.RowProvide({
    gutter: common_vendor.toRef(() => {
      return props.gutter;
    })
  }));
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      b: common_vendor.s(common_vendor.unref(rowStyle)),
      c: common_vendor.s(_ctx.customStyle),
      d: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-645744c0"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-row/rice-row.js.map
