"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/use/useCountDown/index.js");
const uni_modules_riceUi_libs_store_useConfig = require("../../libs/store/useConfig.js");
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
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
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
  name: "rice-tag",
  styleIsolation: "app-and-page"
}, { __name: "rice-tag", props: {
  type: {},
  size: {},
  color: {},
  text: {},
  icon: {},
  textColor: {},
  textSize: {},
  show: { type: Boolean, default: true },
  plain: { type: Boolean, default: false },
  plainFill: { type: Boolean, default: false },
  round: { type: Boolean, default: true },
  mark: { type: Boolean, default: false },
  closeable: { type: Boolean, default: false },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, emits: ["click", "close"], setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("tag");
  const emit = __emit;
  const props = __props;
  const isPlain = common_vendor.computed(() => {
    return props.plain || props.plainFill;
  });
  const realShow = common_vendor.ref(props.show);
  const handleClick = () => {
    emit("click");
  };
  const handleClose = (e) => {
    e.stopPropagation();
    emit("close");
  };
  const onTransitionend = () => {
    realShow.value = props.show;
  };
  common_vendor.watch(() => {
    return props.show;
  }, () => {
    if (props.show)
      realShow.value = true;
  });
  const getTextColor = () => {
    if (props.textColor != null)
      return props.textColor;
    if (props.color != null) {
      return isPlain.value && !uni_modules_riceUi_libs_utils_basic.isGradientColor(props.color) ? props.color : "#f5f5f5";
    }
    return "";
  };
  const iconSize = common_vendor.computed(() => {
    if (props.size == "large")
      return 18;
    if (props.size == "small")
      return 14;
    return 16;
  });
  const iconColor = common_vendor.computed(() => {
    const textColor = getTextColor();
    if (textColor != "")
      return textColor;
    const baseColor = "var(--rice-text-color)";
    const themeColor = `var(--rice-${props.type}-color)`;
    if (isPlain.value)
      return uni_modules_riceUi_libs_utils_basic.isThemeColor(props.type) ? themeColor : baseColor;
    return uni_modules_riceUi_libs_utils_basic.isThemeColor(props.type) ? "#f5f5f5" : baseColor;
  });
  function darken(color, amount = 20) {
    return color.mix("#141414", amount).toHexString();
  }
  const tagStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.color != null) {
      const color = props.color;
      if (uni_modules_riceUi_libs_utils_basic.isGradientColor(color)) {
        css.set("background", color);
        css.set("border-style", "none");
      } else {
        const colorUts = new uni_modules_riceUi_libs_plugin_coloruts_conversion.Coloruts(color);
        css.set("border-color", color);
        if (!isPlain.value) {
          css.set("background", color);
        } else if (props.plainFill) {
          css.set("background", uni_modules_riceUi_libs_store_useConfig.isDark.value ? darken(colorUts, 90) : colorUts.tint(90).toHexString());
        }
      }
    }
    css.set("opacity", props.show ? 1 : 0);
    return css;
  });
  const tagClass = common_vendor.computed(() => {
    const basic = [
      ns.b(""),
      ns.theme(),
      ns.is("round", props.round),
      ns.is("mark", props.mark),
      ns.m(props.size)
    ];
    if (uni_modules_riceUi_libs_utils_basic.isThemeColor(props.type)) {
      const theme = ns.m(props.plainFill ? `${props.type}--plain-fill` : props.type);
      basic.push(theme);
    }
    basic.push(ns.is("plain", props.plain));
    return basic;
  });
  const textStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    const textColor = getTextColor();
    if (textColor != "")
      css.set("color", textColor);
    if (props.textSize != null)
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.textSize));
    return css;
  });
  const textClass = common_vendor.computed(() => {
    const basic = [ns.e("text")];
    if (uni_modules_riceUi_libs_utils_basic.isThemeColor(props.type)) {
      const theme = ns.m(isPlain.value ? `${props.type}--plain__text` : `${props.type}__text`);
      basic.push(theme);
    }
    if (props.size != null) {
      basic.push(ns.m(`${props.size}__text`));
    }
    return basic;
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.unref(realShow)
    }, common_vendor.unref(realShow) ? common_vendor.e({
      b: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.icon)
    }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.icon) ? {
      c: common_vendor.p({
        name: _ctx.icon,
        color: common_vendor.unref(iconColor),
        size: `${common_vendor.unref(iconSize)}px`,
        ["custom-style"]: {
          marginRight: "2px"
        },
        class: "data-v-559af254"
      })
    } : {}, {
      d: common_vendor.t(_ctx.text),
      e: common_vendor.n(common_vendor.unref(textClass)),
      f: common_vendor.s(common_vendor.unref(textStyle)),
      g: _ctx.closeable
    }, _ctx.closeable ? {
      h: common_vendor.p({
        name: "cross",
        color: common_vendor.unref(iconColor),
        size: `${common_vendor.unref(iconSize) - 2}px`,
        ["custom-style"]: {
          marginLeft: "4px"
        },
        class: "data-v-559af254"
      }),
      i: common_vendor.o(handleClose, "ad")
    } : {}, {
      j: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      k: common_vendor.n(common_vendor.unref(tagClass)),
      l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      m: common_vendor.s(common_vendor.unref(tagStyle)),
      n: common_vendor.s(_ctx.customStyle),
      o: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      p: common_vendor.o(handleClick, "02"),
      q: common_vendor.o(onTransitionend, "cf")
    }) : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-559af254"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-tag/rice-tag.js.map
