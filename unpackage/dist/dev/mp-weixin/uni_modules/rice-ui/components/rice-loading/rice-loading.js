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
const uni_modules_riceUi_libs_plugin_coloruts_conversion = require("../../libs/plugin/coloruts/conversion.js");
require("../../libs/plugin/coloruts/constant.js");
require("../../libs/plugin/coloruts/type.js");
require("../../libs/plugin/dateuts/type.js");
require("../../libs/plugin/dateuts/locale.js");
require("./type.js");
if (!Array) {
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  _easycom_rice_icon_1();
}
const _easycom_rice_icon = () => "../rice-icon/rice-icon.js";
if (!Math) {
  _easycom_rice_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-loading",
  styleIsolation: "app-and-page",
  externalClasses: ["text-class"]
}, { __name: "rice-loading", props: {
  mode: { default: "circular" },
  duration: { default: 1100 },
  color: {},
  inactiveColor: {},
  size: { default: "24px" },
  text: {},
  textColor: {},
  textSize: {},
  textClass: { default: "" },
  vertical: { type: Boolean, default: false },
  timingFunction: { default: "ease-in-out" },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, setup(__props) {
  common_vendor.useCssVars((_ctx = null) => {
    return new common_vendor.UTSJSONObject({
      "31e842e0": common_vendor.unref(color),
      "731e9d4a": props.duration + "ms"
    });
  });
  const slot = common_vendor.useSlots();
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("loading");
  const props = __props;
  const color = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.hasStrValue(props.color) ? props.color : "#1989fa";
  });
  const hasText = common_vendor.computed(() => {
    return props.text != null && props.text != "" || slot["default"] != null;
  });
  common_vendor.computed(() => {
    return props.mode;
  });
  const rootClass = common_vendor.computed(() => {
    return [
      ns.b(""),
      ns.theme(),
      ns.is("vertical", props.vertical),
      ns.is("slot", slot["icon"] != null)
    ];
  });
  const semicircleStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    const size = uni_modules_riceUi_libs_utils_basic.addUnit(props.size);
    css.set("height", size);
    css.set("width", size);
    if (props.mode == "circle") {
      if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.inactiveColor)) {
        css.set("border-color", props.inactiveColor);
      } else if (color.value != "inherit") {
        const rgb = new uni_modules_riceUi_libs_plugin_coloruts_conversion.Coloruts(color.value).toRgb();
        css.set("border-color", `rgba(${rgb["r"]},${rgb["g"]},${rgb["b"]},.2)`);
      }
    }
    css.set("border-top-color", color.value);
    css.set("animation-timing-function", props.timingFunction);
    return css;
  });
  const circularStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    const size = uni_modules_riceUi_libs_utils_basic.addUnit(props.size);
    css.set("height", size);
    css.set("width", size);
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
  const loadingTextClass = common_vendor.computed(() => {
    return `rice-loading__text--${props.vertical ? "vertical" : "row"}`;
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: _ctx.mode == "snow" || common_vendor.unref(slot)["icon"] != null
    }, _ctx.mode == "snow" || common_vendor.unref(slot)["icon"] != null ? {
      b: common_vendor.p({
        name: "loading",
        size: _ctx.size,
        color: common_vendor.unref(color),
        class: "data-v-55e28e25"
      }),
      c: common_vendor.sei("r0-55e28e25", "view", "rotateRef")
    } : _ctx.mode == "semicircle" || _ctx.mode == "circle" ? {
      e: common_vendor.sei("r1-55e28e25", "view", "rotateRef"),
      f: common_vendor.n(common_vendor.unref(ns).m(_ctx.mode)),
      g: common_vendor.s(common_vendor.unref(semicircleStyle))
    } : {
      h: common_vendor.sei("r2-55e28e25", "view", "circularRef"),
      i: common_vendor.s(common_vendor.unref(circularStyle))
    }, {
      d: _ctx.mode == "semicircle" || _ctx.mode == "circle",
      j: common_vendor.unref(hasText)
    }, common_vendor.unref(hasText) ? {
      k: common_vendor.t(_ctx.text),
      l: common_vendor.n(common_vendor.unref(loadingTextClass)),
      m: common_vendor.n(props.textClass),
      n: common_vendor.s(common_vendor.unref(textStyle))
    } : {}, {
      o: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      p: common_vendor.n(common_vendor.unref(rootClass)),
      q: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      r: common_vendor.s(_ctx.customStyle),
      s: common_vendor.s(_ctx.__cssVars()),
      t: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-55e28e25"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-loading/rice-loading.js.map
