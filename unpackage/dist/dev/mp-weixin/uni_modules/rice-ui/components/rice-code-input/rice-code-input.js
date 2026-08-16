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
  name: "rice-code-input",
  styleIsolation: "app-and-page"
}, { __name: "rice-code-input", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  maxlength: { default: 4 },
  dot: { type: Boolean, default: false },
  mode: { default: "box" },
  bgColor: {},
  borderColor: {},
  showCursor: { type: Boolean, default: true },
  cursorColor: {},
  space: { default: "10px" },
  justifyContent: {},
  size: {},
  fontSize: {},
  color: {},
  bold: { type: Boolean },
  focus: { type: Boolean, default: false },
  disabledKeyboard: { type: Boolean, default: false },
  adjustPosition: { type: Boolean, default: true },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}), new common_vendor.UTSJSONObject({
  "modelValue": {
    type: String
  },
  "modelModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["finish", "change", "focus", "blur"], ["update:modelValue"]), setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("code-input");
  const emit = __emit;
  const props = __props;
  const modelValue = common_vendor.useModel(__props, "modelValue");
  const displayValue = common_vendor.ref("");
  const isFocus = common_vendor.ref(props.focus);
  const getCodeNum = (index) => {
    return displayValue.value.charAt(index);
  };
  common_vendor.watch(modelValue, (newVal = null) => {
    if (newVal != null) {
      if (newVal != displayValue.value) {
        displayValue.value = newVal.substring(0, props.maxlength);
      }
    } else {
      displayValue.value = "";
    }
  }, {
    immediate: true
  });
  const onInput = (e) => {
    const value = e.detail.value;
    const newVal = value.substring(0, props.maxlength);
    modelValue.value = newVal;
    displayValue.value = newVal;
    emit("change", newVal);
    if (value.length >= props.maxlength) {
      emit("finish", newVal);
    }
  };
  const onFocus = (e) => {
    isFocus.value = true;
    emit("focus", e);
  };
  const onBlur = (e) => {
    isFocus.value = false;
    emit("blur", e);
  };
  common_vendor.watch(() => {
    return props.focus;
  }, () => {
    isFocus.value = props.focus;
  });
  const boxClick = () => {
  };
  const codeInputStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.justifyContent)) {
      css.set("justify-content", props.justifyContent);
    }
    return css;
  });
  const boxStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.bgColor) && props.mode != "line") {
      css.set("background-color", props.bgColor);
    }
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.borderColor)) {
      css.set("border-color", props.borderColor);
    }
    if (props.size != null) {
      css.set("height", uni_modules_riceUi_libs_utils_basic.addUnit(props.size));
      css.set("width", uni_modules_riceUi_libs_utils_basic.addUnit(props.size));
    }
    return css;
  });
  const getBoxStyle = (index) => {
    const css = /* @__PURE__ */ new Map();
    const space = uni_modules_riceUi_libs_utils_basic.getPxNum(props.space);
    if (index == props.maxlength - 1) {
      css.set("margin-right", "0px");
    } else {
      css.set("margin-right", uni_modules_riceUi_libs_utils_basic.addUnit(props.space));
    }
    if (space == 0) {
      if (index == 0 && props.mode != "line") {
        css.set("border-top-left-radius", "4px");
        css.set("border-bottom-left-radius", "4px");
      }
      if (index == props.maxlength - 1 && props.mode != "line") {
        css.set("border-top-right-radius", "4px");
        css.set("border-bottom-right-radius", "4px");
      }
      if (index != props.maxlength - 1) {
        css.set("borderRight", "none");
      }
    }
    return css;
  };
  const boxClass = common_vendor.computed(() => {
    const basic = [ns.e("box")];
    if (uni_modules_riceUi_libs_utils_basic.getPxNum(props.space) != 0) {
      basic.push(ns.e("box--radius"));
    }
    if (props.mode == "line") {
      basic.push(ns.e("box--line"));
    }
    return basic;
  });
  const inputStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.size != null)
      css.set("height", uni_modules_riceUi_libs_utils_basic.addUnit(props.size));
    return css;
  });
  const textStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.bold == true)
      css.set("font-weight", "bold");
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.color))
      css.set("color", props.color);
    if (props.fontSize != null)
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.fontSize));
    return css;
  });
  const boxLineStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.cursorColor))
      css.set("background-color", props.cursorColor);
    return css;
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.f(_ctx.maxlength, (_, index, i0) => {
        return common_vendor.e({
          a: _ctx.dot && common_vendor.unref(displayValue).length > index
        }, _ctx.dot && common_vendor.unref(displayValue).length > index ? {} : {
          b: common_vendor.t(getCodeNum(index)),
          c: common_vendor.s(common_vendor.unref(textStyle))
        }, {
          d: common_vendor.sei("r0-a99b59b9-" + index, "view", "boxLineRef", {
            "f": 1
          }),
          e: _ctx.showCursor && index == common_vendor.unref(displayValue).length && common_vendor.unref(isFocus),
          f: index,
          g: common_vendor.s(getBoxStyle(index)),
          h: common_vendor.o(boxClick, index)
        });
      }),
      b: common_vendor.s(common_vendor.unref(boxLineStyle)),
      c: common_vendor.s(common_vendor.unref(boxStyle)),
      d: common_vendor.n(common_vendor.unref(boxClass)),
      e: _ctx.disabledKeyboard,
      f: common_vendor.unref(displayValue),
      g: common_vendor.s(common_vendor.unref(inputStyle)),
      h: common_vendor.unref(isFocus),
      i: _ctx.maxlength,
      j: _ctx.adjustPosition,
      k: common_vendor.o(onInput, "c2"),
      l: common_vendor.o(onFocus, "2e"),
      m: common_vendor.o(onBlur, "9e"),
      n: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      o: common_vendor.n(common_vendor.unref(ns).theme()),
      p: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      q: common_vendor.s(common_vendor.unref(codeInputStyle)),
      r: common_vendor.s(_ctx.customStyle),
      s: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a99b59b9"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-code-input/rice-code-input.js.map
