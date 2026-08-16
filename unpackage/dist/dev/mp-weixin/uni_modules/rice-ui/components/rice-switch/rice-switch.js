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
const uni_modules_riceUi_components_riceForm_index = require("../rice-form/index.js");
require("./type.js");
if (!Array) {
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  const _easycom_rice_loading_1 = common_vendor.resolveComponent("rice-loading");
  (_easycom_rice_icon_1 + _easycom_rice_loading_1)();
}
const _easycom_rice_icon = () => "../rice-icon/rice-icon.js";
const _easycom_rice_loading = () => "../rice-loading/rice-loading.js";
if (!Math) {
  (_easycom_rice_icon + _easycom_rice_loading)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-switch",
  styleIsolation: "app-and-page"
}, { __name: "rice-switch", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  activeValue: { type: [String, Number, Boolean], default: true },
  inactiveValue: { type: [String, Number, Boolean], default: false },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  width: {},
  iconSize: { default: "12px" },
  textSize: {},
  activeColor: {},
  inactiveColor: {},
  activeText: {},
  inactiveText: {},
  activeIcon: {},
  inactiveIcon: {},
  promptPosition: { default: "outball" },
  beforeChange: {},
  vibrate: { type: Boolean, default: true },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}), new common_vendor.UTSJSONObject({
  "modelValue": {
    type: [String, Number, Boolean],
    default: false
  },
  "modelModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["change"], ["update:modelValue"]), setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("switch");
  const emit = __emit;
  const props = __props;
  const modelValue = common_vendor.useModel(__props, "modelValue");
  const formDisabled = common_vendor.inject(uni_modules_riceUi_components_riceForm_index.formDisabledInjectKey, null);
  const formReadonly = common_vendor.inject(uni_modules_riceUi_components_riceForm_index.formReadonlyInjectKey, null);
  const isDisabled = common_vendor.computed(() => {
    var _a2;
    return ((_a2 = formDisabled === null || formDisabled === void 0 ? null : formDisabled.value) !== null && _a2 !== void 0 ? _a2 : false) || props.disabled;
  });
  const isReadonly = common_vendor.computed(() => {
    var _a2;
    return ((_a2 = formReadonly === null || formReadonly === void 0 ? null : formReadonly.value) !== null && _a2 !== void 0 ? _a2 : false) || props.readonly;
  });
  const isChecked = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.isSameValue(modelValue.value, props.activeValue);
  });
  const hasText = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.hasStrValue(props.activeText) || uni_modules_riceUi_libs_utils_basic.hasStrValue(props.inactiveText);
  });
  const hasIcon = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.hasStrValue(props.activeIcon) || uni_modules_riceUi_libs_utils_basic.hasStrValue(props.inactiveIcon);
  });
  const showOutBall = common_vendor.computed(() => {
    return props.promptPosition == "outball" && (hasText.value || hasIcon.value);
  });
  const showInsidePrompt = common_vendor.computed(() => {
    return props.promptPosition == "inball" && (hasText.value || hasIcon.value);
  });
  const handleChange = () => {
    const value = isChecked.value ? props.inactiveValue : props.activeValue;
    modelValue.value = value;
    if (props.vibrate) {
      common_vendor.index.vibrateShort({
        type: "medium"
      });
    }
    emit("change", value);
  };
  const changeValue = (e) => {
    e.stopPropagation();
    if (isDisabled.value || isReadonly.value || props.loading)
      return null;
    if (typeof props.beforeChange != "function") {
      handleChange();
      return null;
    }
    uni_modules_riceUi_libs_utils_basic.callInterceptor(props.beforeChange, new uni_modules_riceUi_libs_utils_basic.InterceptorOption({
      args: null,
      canceled: null,
      error: null,
      undone: null,
      complete: null,
      done() {
        handleChange();
      }
    }));
  };
  const switchColor = common_vendor.computed(() => {
    var _a2, _b;
    if (isChecked.value)
      return (_a2 = props.activeColor) !== null && _a2 !== void 0 ? _a2 : "";
    return (_b = props.inactiveColor) !== null && _b !== void 0 ? _b : "";
  });
  const iconColor = common_vendor.computed(() => {
    return switchColor.value != "" ? switchColor.value : "inherit";
  });
  const switchStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (switchColor.value != "") {
      css.set("background-color", switchColor.value);
      css.set("color", switchColor.value);
    }
    if (props.width != null) {
      css.set("width", uni_modules_riceUi_libs_utils_basic.addUnit(props.width));
    }
    return css;
  });
  const innerTextStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.textSize != null) {
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.textSize));
    }
    return css;
  });
  const nodeTextStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.textSize != null) {
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.textSize));
    }
    return css;
  });
  const nodeStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    const switchWidth = props.width != null ? uni_modules_riceUi_libs_utils_basic.getPxNum(props.width) : 50;
    const nodeWidth = 22;
    const translateX = isChecked.value ? `${switchWidth - nodeWidth - 4}px` : "4px";
    css.set("transform", `translateX(${translateX})`);
    return css;
  });
  const switchClass = common_vendor.computed(() => {
    return [
      ns.b(""),
      ns.theme(),
      ns.is("disabled", isDisabled.value),
      ns.is("active", isChecked.value)
    ];
  });
  const innerClass = common_vendor.computed(() => {
    return [
      ns.e("inner"),
      ns.is("__inner--active", isChecked.value)
    ];
  });
  const nodeClass = common_vendor.computed(() => {
    return [
      ns.e("node")
    ];
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.unref(showOutBall)
    }, common_vendor.unref(showOutBall) ? common_vendor.e({
      b: common_vendor.unref(hasIcon)
    }, common_vendor.unref(hasIcon) ? {
      c: common_vendor.p({
        name: common_vendor.unref(isChecked) ? _ctx.activeIcon : _ctx.inactiveIcon,
        color: "rgba(255,255,255,.9)",
        size: _ctx.iconSize,
        class: "data-v-2d10b861"
      })
    } : common_vendor.unref(hasText) ? {
      e: common_vendor.t(common_vendor.unref(isChecked) ? _ctx.activeText : _ctx.inactiveText),
      f: common_vendor.s(common_vendor.unref(innerTextStyle))
    } : {}, {
      d: common_vendor.unref(hasText),
      g: common_vendor.n(common_vendor.unref(innerClass))
    }) : {}, {
      h: _ctx.loading
    }, _ctx.loading ? {
      i: common_vendor.p({
        size: "17",
        color: common_vendor.unref(iconColor),
        class: "data-v-2d10b861"
      })
    } : common_vendor.unref(showInsidePrompt) ? common_vendor.e({
      k: common_vendor.unref(hasIcon)
    }, common_vendor.unref(hasIcon) ? {
      l: common_vendor.p({
        name: common_vendor.unref(isChecked) ? _ctx.activeIcon : _ctx.inactiveIcon,
        color: common_vendor.unref(iconColor),
        size: _ctx.iconSize,
        class: "data-v-2d10b861"
      })
    } : common_vendor.unref(hasText) ? {
      n: common_vendor.t(common_vendor.unref(isChecked) ? _ctx.activeText : _ctx.inactiveText),
      o: common_vendor.s(common_vendor.unref(nodeTextStyle))
    } : {}, {
      m: common_vendor.unref(hasText)
    }) : {}, {
      j: common_vendor.unref(showInsidePrompt),
      p: common_vendor.n(common_vendor.unref(nodeClass)),
      q: common_vendor.s(common_vendor.unref(nodeStyle)),
      r: common_vendor.sei(common_vendor.gei(_ctx, "", "r0-2d10b861"), "view", "switchRef"),
      s: common_vendor.n(common_vendor.unref(switchClass)),
      t: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      v: common_vendor.s(common_vendor.unref(switchStyle)),
      w: common_vendor.s(_ctx.customStyle),
      x: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      y: common_vendor.o(changeValue, "44")
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2d10b861"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-switch/rice-switch.js.map
