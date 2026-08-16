"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_components_riceRow_index = require("../rice-row/index.js");
require("./type.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-col",
  styleIsolation: "app-and-page"
}, { __name: "rice-col", props: {
  span: { default: 24 },
  offset: { default: 0 },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, setup(__props) {
  const props = __props;
  const row = common_vendor.inject(uni_modules_riceUi_components_riceRow_index.rowInjectKey, null);
  const gutter = common_vendor.computed(() => {
    var _a;
    return (_a = row === null || row === void 0 ? null : row.gutter.value) !== null && _a !== void 0 ? _a : 0;
  });
  const colStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (gutter.value > 0) {
      const gutterNum = uni_modules_riceUi_libs_utils_basic.addUnit(gutter.value / 2);
      css.set("padding-left", `${gutterNum}`);
      css.set("padding-right", `${gutterNum}`);
    }
    return css;
  });
  const colClass = common_vendor.computed(() => {
    const offset = props.offset > 0 ? `rice-col-offset-${props.offset}` : "";
    return [`rice-col-${props.span}`, offset];
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      b: common_vendor.n(common_vendor.unref(colClass)),
      c: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      d: common_vendor.s(common_vendor.unref(colStyle)),
      e: common_vendor.s(_ctx.customStyle),
      f: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d9174d7b"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-col/rice-col.js.map
