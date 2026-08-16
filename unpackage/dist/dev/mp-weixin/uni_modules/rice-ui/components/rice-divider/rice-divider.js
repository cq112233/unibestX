"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
require("./type.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-divider",
  styleIsolation: "app-and-page"
}, { __name: "rice-divider", props: {
  dashed: { type: Boolean, default: false },
  hairline: { type: Boolean, default: true },
  width: {},
  lineColor: {},
  text: {},
  textPosition: { default: "center" },
  textColor: {},
  textSize: {},
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, setup(__props) {
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("divider");
  const slots = common_vendor.useSlots();
  const props = __props;
  const hasText = common_vendor.computed(() => {
    return slots["default"] != null || uni_modules_riceUi_libs_utils_basic.hasStrValue(props.text);
  });
  const dividerStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.lineColor != null && !hasText.value)
      css.set("border-color", props.lineColor);
    return css;
  });
  const dividerLineStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.lineColor != null)
      css.set("border-color", props.lineColor);
    return css;
  });
  const dividerClass = common_vendor.computed(() => {
    return [
      ns.b(""),
      ns.theme(),
      ns.is("single", !hasText.value),
      ns.is("hairline", props.hairline && !hasText.value),
      ns.is("dashed", props.dashed && !hasText.value)
    ];
  });
  const getLineClass = (position) => {
    return [
      ns.e(position),
      ns.is("hairline", props.hairline),
      ns.is("sides", props.textPosition == position),
      ns.is("dashed", props.dashed)
    ];
  };
  const textStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.textSize != null)
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.textSize));
    if (props.textColor != null)
      css.set("color", props.textColor);
    return css;
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.unref(hasText)
    }, common_vendor.unref(hasText) ? {
      b: common_vendor.n(getLineClass("left")),
      c: common_vendor.s(common_vendor.unref(dividerLineStyle)),
      d: common_vendor.t(_ctx.text),
      e: common_vendor.s(common_vendor.unref(textStyle)),
      f: common_vendor.n(getLineClass("right")),
      g: common_vendor.s(common_vendor.unref(dividerLineStyle))
    } : {}, {
      h: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      i: common_vendor.n(common_vendor.unref(dividerClass)),
      j: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      k: common_vendor.s(common_vendor.unref(dividerStyle)),
      l: common_vendor.s(_ctx.customStyle),
      m: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f6198ac3"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-divider/rice-divider.js.map
