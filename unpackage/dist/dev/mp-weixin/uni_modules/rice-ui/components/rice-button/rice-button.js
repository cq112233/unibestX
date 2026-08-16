"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_libs_utils_debug = require("../../libs/utils/debug.js");
const uni_modules_riceUi_libs_plugin_coloruts_conversion = require("../../libs/plugin/coloruts/conversion.js");
require("../../libs/plugin/coloruts/constant.js");
require("../../libs/plugin/coloruts/type.js");
require("../../libs/plugin/dateuts/type.js");
require("../../libs/plugin/dateuts/locale.js");
require("../../libs/use/useCountDown/index.js");
const uni_modules_riceUi_libs_store_useConfig = require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
require("./type.js");
const uni_modules_riceUi_components_riceButton_utils = require("./utils.js");
if (!Array) {
  const _easycom_rice_loading_1 = common_vendor.resolveComponent("rice-loading");
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  (_easycom_rice_loading_1 + _easycom_rice_icon_1)();
}
const _easycom_rice_loading = () => "../rice-loading/rice-loading.js";
const _easycom_rice_icon = () => "../rice-icon/rice-icon.js";
if (!Math) {
  (_easycom_rice_loading + _easycom_rice_icon)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-button",
  styleIsolation: "app-and-page"
}, { __name: "rice-button", props: {
  type: {},
  size: {},
  text: {},
  color: {},
  darkColor: {},
  textColor: {},
  textSize: {},
  icon: {},
  iconSize: {},
  iconColor: {},
  iconFontFamily: {},
  plainFill: { type: Boolean, default: false },
  plain: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  loadingSize: {},
  loadingText: {},
  loadingMode: {},
  shape: {},
  width: {},
  height: {},
  openType: {},
  formType: {},
  lang: {},
  sessionFrom: {},
  sendMessageTitle: {},
  sendMessageImg: {},
  sendMessagePath: {},
  showMessageCard: {},
  appParameter: {},
  to: {},
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, emits: [
  "click",
  "getphonenumber",
  "getrealtimephonenumber",
  "getuserinfo",
  "chooseavatar",
  "launchapp",
  "agreeprivacyauthorization",
  "opensetting",
  "error",
  "contact"
], setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("button");
  const emit = __emit;
  const props = __props;
  const btnText = common_vendor.computed(() => {
    return props.loading && uni_modules_riceUi_libs_utils_basic.hasStrValue(props.loadingText) ? props.loadingText : props.text;
  });
  const isPlain = common_vendor.computed(() => {
    return props.plain || props.plainFill;
  });
  const buttonColor = common_vendor.computed(() => {
    var _a2;
    return uni_modules_riceUi_libs_store_useConfig.isDark.value ? (_a2 = props.darkColor) !== null && _a2 !== void 0 ? _a2 : props.color : props.color;
  });
  const emitClick = (e) => {
    e.stopPropagation();
    if (props.disabled || props.loading)
      return null;
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.to)) {
      common_vendor.index.navigateTo({
        url: props.to,
        fail: (err) => {
          uni_modules_riceUi_libs_utils_debug.debugWarn("Button", err.errMsg);
        }
      });
    }
    emit("click");
  };
  const _iconSize = common_vendor.computed(() => {
    var _a2, _b;
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.iconSize))
      return props.iconSize;
    return (_b = uni_modules_riceUi_components_riceButton_utils.iconSizeTypes[(_a2 = props.size) !== null && _a2 !== void 0 ? _a2 : "default"]) !== null && _b !== void 0 ? _b : "16px";
  });
  const _loadingSize = common_vendor.computed(() => {
    var _a2, _b;
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.loadingSize))
      return props.loadingSize;
    return (_b = uni_modules_riceUi_components_riceButton_utils.loadingSizeTypes[(_a2 = props.size) !== null && _a2 !== void 0 ? _a2 : "default"]) !== null && _b !== void 0 ? _b : "18px";
  });
  const buttonType = common_vendor.computed(() => {
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(buttonColor.value))
      return "";
    if (props.type == "info")
      return "info";
    return uni_modules_riceUi_libs_utils_basic.isThemeColor(props.type) ? props.type : "default";
  });
  const getTextColor = () => {
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.textColor))
      return props.textColor;
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(buttonColor.value)) {
      return isPlain.value && !uni_modules_riceUi_libs_utils_basic.isGradientColor(buttonColor.value) ? buttonColor.value : "";
    }
    return "";
  };
  common_vendor.ref("");
  const _iconColor = common_vendor.computed(() => {
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.iconColor)) {
      return props.iconColor;
    }
    const textColor = getTextColor();
    if (textColor != "")
      return textColor;
    return "inherit";
  });
  function darken(color, amount = 20) {
    return color.mix("#141414", amount).toHexString();
  }
  const btnStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(buttonColor.value)) {
      const color = buttonColor.value;
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
    const textColor = getTextColor();
    if (textColor != "")
      css.set("color", textColor);
    if (props.height != null)
      css.set("height", uni_modules_riceUi_libs_utils_basic.addUnit(props.height));
    if (props.width != null)
      css.set("width", uni_modules_riceUi_libs_utils_basic.addUnit(props.width));
    return css;
  });
  const buttonClass = common_vendor.computed(() => {
    const basic = [
      ns.b(""),
      ns.theme(),
      ns.m(props.size),
      ns.m(props.shape),
      ns.is("disabled", props.disabled)
    ];
    if (buttonType.value != "") {
      const theme = ns.m(props.plainFill ? `${buttonType.value}--plain-fill` : buttonType.value);
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
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.icon) || props.loading)
      css.set("margin-left", "4px");
    return css;
  });
  const textClass = common_vendor.computed(() => {
    const basic = [ns.e("text")];
    if (buttonType.value != "") {
      const theme = ns.m(isPlain.value ? `${buttonType.value}--plain__text` : `${buttonType.value}__text`);
      basic.push(theme);
    }
    if (props.size != null)
      basic.push(ns.m(`${props.size}__text`));
    return basic;
  });
  const hoverClass = common_vendor.computed(() => {
    if (props.disabled || props.loading)
      return "none";
    if (isPlain.value || buttonType.value == "")
      return "rice-button--hover";
    return `rice-button--${buttonType.value}--hover`;
  });
  const getphonenumber = (e = null) => {
    emit("getphonenumber", e);
  };
  const getrealtimephonenumber = (e = null) => {
    emit("getrealtimephonenumber", e);
  };
  const getuserinfo = (e = null) => {
    emit("getuserinfo", e);
  };
  const chooseavatar = (e = null) => {
    emit("chooseavatar", e);
  };
  const agreeprivacyauthorization = (e = null) => {
    emit("agreeprivacyauthorization", e);
  };
  const launchapp = (e = null) => {
    emit("launchapp");
  };
  const opensetting = (e = null) => {
    emit("opensetting", e);
  };
  const error = (e = null) => {
    emit("error", e);
  };
  const contact = (e = null) => {
  };
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: _ctx.loading
    }, _ctx.loading ? {
      b: common_vendor.p({
        color: common_vendor.unref(_iconColor),
        size: common_vendor.unref(_loadingSize),
        mode: _ctx.loadingMode,
        class: "data-v-219b6131"
      })
    } : {}, {
      c: _ctx.icon
    }, _ctx.icon ? {
      d: common_vendor.p({
        name: _ctx.icon,
        color: common_vendor.unref(_iconColor),
        size: common_vendor.unref(_iconSize),
        ["font-family"]: _ctx.iconFontFamily,
        class: "data-v-219b6131"
      })
    } : {}, {
      e: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.text)
    }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.text) ? {
      f: common_vendor.t(common_vendor.unref(btnText)),
      g: common_vendor.n(common_vendor.unref(textClass)),
      h: common_vendor.s(common_vendor.unref(textStyle))
    } : {}, {
      i: common_vendor.n(common_vendor.unref(ns).e("mp")),
      j: common_vendor.n(common_vendor.unref(ns).e("reset")),
      k: _ctx.openType,
      l: _ctx.formType,
      m: common_vendor.o(emitClick, "4f"),
      n: common_vendor.o(getphonenumber, "2a"),
      o: common_vendor.o(getrealtimephonenumber, "b9"),
      p: common_vendor.o(getuserinfo, "54"),
      q: common_vendor.o(chooseavatar, "09"),
      r: common_vendor.o(agreeprivacyauthorization, "9c"),
      s: common_vendor.o(launchapp, "ae"),
      t: common_vendor.o(opensetting, "f9"),
      v: common_vendor.o(error, "24"),
      w: common_vendor.o(contact, "ed"),
      x: common_vendor.sei(common_vendor.gei(_ctx, "", "r0-219b6131"), "view", "buttonRef"),
      y: common_vendor.n(common_vendor.unref(buttonClass)),
      z: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      A: common_vendor.s(common_vendor.unref(btnStyle)),
      B: common_vendor.s(_ctx.customStyle),
      C: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      D: common_vendor.unref(hoverClass),
      E: common_vendor.o(emitClick, "6a")
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-219b6131"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-button/rice-button.js.map
