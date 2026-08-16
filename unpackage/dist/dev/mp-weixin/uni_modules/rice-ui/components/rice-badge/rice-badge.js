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
  name: "rice-badge",
  styleIsolation: "app-and-page",
  externalClasses: ["text-class"]
}, { __name: "rice-badge", props: {
  value: {},
  max: {},
  isDot: { type: Boolean, default: false },
  hidden: { type: Boolean, default: false },
  type: { default: "error" },
  showZero: { type: Boolean, default: true },
  bgColor: {},
  color: {},
  fontSize: {},
  position: { default: "top-right" },
  offset: { default: () => {
    return [];
  } },
  absolute: { type: Boolean },
  textClass: { default: "" },
  badgeStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, setup(__props) {
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("badge");
  const slots = common_vendor.useSlots();
  const props = __props;
  const single = common_vendor.computed(() => {
    return slots["default"] == null;
  });
  const isAbsolute = common_vendor.computed(() => {
    return !single.value || props.absolute == true;
  });
  const isNumZero = common_vendor.computed(() => {
    return props.value === 0;
  });
  const showBadge = common_vendor.computed(() => {
    return !props.hidden && (props.isDot || props.showZero || !isNumZero.value);
  });
  const formatValue = common_vendor.computed(() => {
    if (props.isDot)
      return "";
    if (typeof props.value == "number" && typeof props.max == "number") {
      return props.max < props.value ? `${props.max}+` : props.value;
    }
    return props.value;
  });
  const contentClass = common_vendor.computed(() => {
    return [
      ns.e("content"),
      ns.m(props.type),
      ns.is("fixed", isAbsolute.value),
      ns.is("dot", props.isDot),
      ns.m(isAbsolute.value ? props.position : ""),
      ns.theme()
    ];
  });
  const getOffsetUumString = (val) => {
    return val.startsWith("-") ? uni_modules_riceUi_libs_utils_basic.addUnit(val.replace("-", "")) : `-${uni_modules_riceUi_libs_utils_basic.addUnit(val)}`;
  };
  const contentStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.bgColor != null) {
      css.set("background-color", props.bgColor);
    }
    if (props.offset.length > 0) {
      const x = props.offset[0];
      const y = props.offset.length >= 2 ? props.offset[1] : 0;
      if (!isAbsolute.value) {
        css.set("margin-left", uni_modules_riceUi_libs_utils_basic.addUnit(x));
        css.set("margin-top", uni_modules_riceUi_libs_utils_basic.addUnit(y));
      } else {
        const p = props.position.split("-");
        const offsetY = p[0];
        const offsetX = p[1];
        if (typeof x == "number") {
          css.set(offsetX, uni_modules_riceUi_libs_utils_basic.addUnit(offsetX == "left" ? x : -x));
        } else {
          css.set(offsetX, offsetX == "left" ? uni_modules_riceUi_libs_utils_basic.addUnit(x) : getOffsetUumString(x));
        }
        if (typeof y == "number") {
          css.set(offsetY, uni_modules_riceUi_libs_utils_basic.addUnit(offsetY == "top" ? y : -y));
        } else {
          css.set(offsetY, offsetY == "top" ? uni_modules_riceUi_libs_utils_basic.addUnit(y) : getOffsetUumString(y));
        }
      }
    }
    return css;
  });
  const textStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.color != null) {
      css.set("color", props.color);
    }
    if (props.fontSize != null) {
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.fontSize));
    }
    return css;
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: !common_vendor.unref(single)
    }, !common_vendor.unref(single) ? common_vendor.e({
      b: common_vendor.unref(showBadge)
    }, common_vendor.unref(showBadge) ? common_vendor.e({
      c: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(common_vendor.unref(formatValue))
    }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(common_vendor.unref(formatValue)) ? {
      d: common_vendor.t(common_vendor.unref(formatValue)),
      e: common_vendor.n(_ctx.textClass),
      f: common_vendor.s(common_vendor.unref(textStyle))
    } : {}, {
      g: common_vendor.n(common_vendor.unref(contentClass)),
      h: common_vendor.s(common_vendor.unref(contentStyle)),
      i: common_vendor.s(_ctx.badgeStyle)
    }) : {}, {
      j: `${_ctx.u_s_b_h}px`,
      k: `${_ctx.u_s_a_i_b}px`
    }) : common_vendor.e({
      l: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(common_vendor.unref(formatValue))
    }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(common_vendor.unref(formatValue)) ? {
      m: common_vendor.t(common_vendor.unref(formatValue)),
      n: common_vendor.n(_ctx.textClass),
      o: common_vendor.s(common_vendor.unref(textStyle))
    } : {}, {
      p: common_vendor.n(common_vendor.unref(ns).b("")),
      q: common_vendor.n(common_vendor.unref(contentClass)),
      r: common_vendor.s(common_vendor.unref(contentStyle)),
      s: common_vendor.s(_ctx.badgeStyle),
      t: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    }));
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9ecbe9e4"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-badge/rice-badge.js.map
