"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("./type.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-progress",
  styleIsolation: "app-and-page"
}, { __name: "rice-progress", props: {
  percentage: { default: 0 },
  strokeWidth: {},
  showText: { type: Boolean, default: true },
  textColor: {},
  textSize: {},
  textPosition: { default: "right" },
  format: {},
  color: {},
  inactiveColor: {},
  radius: {},
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, setup(__props) {
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("progress");
  common_vendor.useSlots();
  const props = __props;
  const percent = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.toNum(props.percentage);
  });
  const formatText = common_vendor.computed(() => {
    if (typeof props.format == "function") {
      return props.format(percent.value);
    }
    return `${percent.value}%`;
  });
  const wrapperStyle = common_vendor.computed(() => {
    var _a;
    const css = /* @__PURE__ */ new Map();
    if (props.strokeWidth != null)
      css.set("height", uni_modules_riceUi_libs_utils_basic.addUnit(props.strokeWidth));
    if (props.inactiveColor != null)
      css.set("background", props.inactiveColor);
    css.set("border-radius", uni_modules_riceUi_libs_utils_basic.addUnit((_a = props.radius) !== null && _a !== void 0 ? _a : "100px"));
    return css;
  });
  const barStyle = common_vendor.computed(() => {
    var _a;
    const css = /* @__PURE__ */ new Map();
    css.set("width", `${percent.value}%`);
    if (props.color != null)
      css.set("background", props.color);
    css.set("border-radius", uni_modules_riceUi_libs_utils_basic.addUnit((_a = props.radius) !== null && _a !== void 0 ? _a : "100px"));
    return css;
  });
  const textStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.textColor != null)
      css.set("color", props.textColor);
    if (props.textSize != null)
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.textSize));
    return css;
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: _ctx.textPosition == "inside"
    }, _ctx.textPosition == "inside" ? common_vendor.e({
      b: _ctx.showText
    }, _ctx.showText ? {
      c: common_vendor.t(common_vendor.unref(formatText)),
      d: common_vendor.s(common_vendor.unref(textStyle))
    } : {}) : {}, {
      e: common_vendor.s(common_vendor.unref(barStyle)),
      f: common_vendor.sei("r0-4ccbb99e", "view", "wrapperRef"),
      g: _ctx.textPosition == "inside" ? 1 : "",
      h: common_vendor.s(common_vendor.unref(wrapperStyle)),
      i: _ctx.textPosition == "right"
    }, _ctx.textPosition == "right" ? common_vendor.e({
      j: _ctx.showText
    }, _ctx.showText ? {
      k: common_vendor.t(common_vendor.unref(formatText)),
      l: common_vendor.s(common_vendor.unref(textStyle))
    } : {}) : {}, {
      m: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      n: common_vendor.n(common_vendor.unref(ns).theme()),
      o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      p: common_vendor.s(_ctx.customStyle),
      q: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4ccbb99e"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-progress/rice-progress.js.map
