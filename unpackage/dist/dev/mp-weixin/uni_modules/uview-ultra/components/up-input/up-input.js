"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/composable/useUltraUI.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_components_upInput_input = require("./input.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon_1();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-input"
}, { __name: "up-input", props: {
  // 绑定的值
  modelValue: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getString("input.value")
  },
  // number-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数
  // idcard-身份证输入键盘，微信、支付宝、百度、QQ小程序
  // digit-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序
  // text-文本输入键盘
  type: {
    type: String,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getString("input.type")
  },
  // 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true，
  // 兼容性：微信小程序、百度小程序、字节跳动小程序、QQ小程序
  fixed: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getBoolean("input.fixed")
  },
  // 是否禁用输入框
  disabled: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getBoolean("input.disabled")
  },
  // 禁用状态时的背景色
  disabledColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getString("input.disabledColor")
  },
  // 是否显示清除控件
  clearable: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getBoolean("input.clearable")
  },
  // 是否密码类型
  password: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getBoolean("input.password")
  },
  // 最大输入长度，设置为 -1 的时候不限制最大长度
  maxlength: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getNumber("input.maxlength")
  },
  // 	输入框为空时的占位符
  placeholder: {
    type: String,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getString("input.placeholder")
  },
  // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
  placeholderClass: {
    type: String,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getString("input.placeholderClass")
  },
  // 指定placeholder的样式
  placeholderStyle: {
    type: [String, Object],
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getString("input.placeholderStyle")
  },
  // 是否显示输入字数统计，只在 type ="text"或type ="textarea"时有效
  showWordLimit: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getBoolean("input.showWordLimit")
  },
  // 设置右下角按钮的文字，有效值：send|search|next|go|done，兼容性详见uni-app文档
  // https://uniapp.dcloud.io/component/input
  // https://uniapp.dcloud.io/component/textarea
  confirmType: {
    type: String,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getString("input.confirmType")
  },
  // 点击键盘右下角按钮时是否保持键盘不收起，H5无效
  confirmHold: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getBoolean("input.confirmHold")
  },
  // focus时，点击页面的时候不收起键盘，微信小程序有效
  holdKeyboard: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getBoolean("input.holdKeyboard")
  },
  // 自动获取焦点
  // 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点
  focus: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getBoolean("input.focus")
  },
  // 键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效
  autoBlur: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getBoolean("input.autoBlur")
  },
  // 是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效
  disableDefaultPadding: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getBoolean("input.disableDefaultPadding")
  },
  // 指定focus时光标的位置
  cursor: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getNumber("input.cursor")
  },
  // 输入框聚焦时底部与键盘的距离
  cursorSpacing: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getNumber("input.cursorSpacing")
  },
  // 光标起始位置，自动聚集时有效，需与selection-end搭配使用
  selectionStart: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getNumber("input.selectionStart")
  },
  // 光标结束位置，自动聚集时有效，需与selection-start搭配使用
  selectionEnd: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getNumber("input.selectionEnd")
  },
  // 键盘弹起时，是否自动上推页面
  adjustPosition: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getBoolean("input.adjustPosition")
  },
  // 输入框内容对齐方式，可选值为：left|center|right
  inputAlign: {
    type: String,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getString("input.inputAlign")
  },
  // 输入框字体的大小
  fontSize: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getString("input.fontSize")
  },
  // 输入框字体颜色
  color: {
    type: String,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getString("input.color")
  },
  // 输入框前置图标
  prefixIcon: {
    type: String,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getString("input.prefixIcon")
  },
  // 前置图标样式，对象或字符串
  prefixIconStyle: {
    type: [String, Object],
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getString("input.prefixIconStyle")
  },
  // 输入框后置图标
  suffixIcon: {
    type: String,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getString("input.suffixIcon")
  },
  // 后置图标样式，对象或字符串
  suffixIconStyle: {
    type: [String, Object],
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getString("input.suffixIconStyle")
  },
  // 边框类型，surround-四周边框，bottom-底部边框，none-无边框
  border: {
    type: String,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getString("input.border")
  },
  // 是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会
  readonly: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getBoolean("input.readonly")
  },
  // 输入框形状，circle-圆形，square-方形
  shape: {
    type: String,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getString("input.shape")
  },
  // 用于处理或者过滤输入框内容的方法
  formatter: {
    type: [Function],
    default: () => {
      return (val = null) => {
        return val;
      };
    }
  },
  // 是否忽略组件内对文本合成系统事件的处理
  ignoreCompositionEvent: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upInput_input.defPropsInput.getBoolean("input.ignoreCompositionEvent")
  }
}, emits: ["update:modelValue", "focus", "blur", "change", "confirm", "clear", "keyboardheightchange"], setup(__props, _a) {
  var __emit = _a.emit;
  common_vendor.getCurrentInstance().proxy;
  const props = __props;
  const emit = __emit;
  const clearInput = common_vendor.ref(false);
  const innerValue = common_vendor.ref("");
  const focused = common_vendor.ref(false);
  const firstChange = common_vendor.ref(true);
  const changeFromInner = common_vendor.ref(false);
  const defaultFormat = function(value) {
    return value;
  };
  common_vendor.ref(defaultFormat);
  const valueChange = function(val = null, isOut) {
    if (clearInput.value) {
      innerValue.value = "";
      clearInput.value = false;
    }
    setTimeout(() => {
      if (!isOut || clearInput.value) {
        changeFromInner.value = true;
        emit("change", val.toString());
        emit("update:modelValue", val.toString());
      }
    }, 0);
  };
  common_vendor.watch(() => {
    return props.modelValue;
  }, (newVal = null, oldVal) => {
    if (changeFromInner.value || innerValue.value == newVal) {
      changeFromInner.value = false;
      return null;
    }
    innerValue.value = newVal;
    if (firstChange.value == false && changeFromInner.value == false) {
      valueChange(innerValue.value, true);
    } else {
      if (!firstChange.value)
        ;
    }
    firstChange.value = false;
    changeFromInner.value = false;
  }, { immediate: true });
  const isShowClear = common_vendor.computed(() => {
    return !!props.clearable && !props.readonly && !!focused.value && innerValue.value !== "";
  });
  const inputClass = common_vendor.computed(() => {
    let classes = [];
    if (props.border === "surround") {
      classes = classes.concat(["up-border", "up-input--radius"]);
    }
    classes.push(`up-input--${props.shape}`);
    if (props.border === "bottom") {
      classes = classes.concat([
        "up-border-bottom",
        "up-input--no-radius"
      ]);
    }
    return classes.join(" ");
  });
  const wrapperStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (props.disabled) {
      style["backgroundColor"] = props.disabledColor;
    }
    if (props.border === "none") {
      style["padding"] = "0";
    } else {
      style["paddingTop"] = "6px";
      style["paddingBottom"] = "6px";
      style["paddingLeft"] = "9px";
      style["paddingRight"] = "9px";
    }
    return uni_modules_uviewUltra_libs_function_index.deepMerge(style, new common_vendor.UTSJSONObject({}));
  });
  const inputStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({
      color: props.color,
      fontSize: uni_modules_uviewUltra_libs_function_index.addUnit(props.fontSize),
      textAlign: props.inputAlign
    });
    return style;
  });
  const onInput = (e) => {
    let value = e.detail.value;
    common_vendor.index.__f__("log", "at uni_modules/uview-ultra/components/up-input/up-input.uvue:391", "onInput", value, innerValue.value);
    innerValue.value = value;
    setTimeout(() => {
      valueChange(value.toString(), false);
    }, 0);
  };
  const onBlur = (event) => {
    emit("blur", event.detail.value);
    focused.value = false;
  };
  const onFocus = (event) => {
    focused.value = true;
    emit("focus");
  };
  const onConfirm = (event) => {
    emit("confirm", innerValue.value);
  };
  const onkeyboardheightchange = (event) => {
    emit("keyboardheightchange", event);
  };
  const onClear = () => {
    clearInput.value = true;
    innerValue.value = "";
    setTimeout(() => {
      valueChange("", false);
      emit("clear");
    }, 0);
  };
  const clickHandler = () => {
  };
  const inputNativeRef = common_vendor.ref(null);
  common_vendor.onMounted(() => {
    innerValue.value = props.modelValue;
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.prefixIcon != "" || _ctx.$slots["prefix"] != null
    }, __props.prefixIcon != "" || _ctx.$slots["prefix"] != null ? {
      b: common_vendor.p({
        name: __props.prefixIcon,
        size: "18",
        customStyle: __props.prefixIconStyle,
        class: "data-v-bd93bb3a"
      })
    } : {}, {
      c: common_vendor.sei("r0-bd93bb3a", "input", inputNativeRef, {
        "k": "inputNativeRef"
      }),
      d: common_vendor.s(inputStyle.value),
      e: __props.type,
      f: __props.focus,
      g: __props.cursor,
      h: innerValue.value,
      i: __props.autoBlur,
      j: __props.disabled || __props.readonly,
      k: __props.maxlength,
      l: __props.placeholder,
      m: __props.placeholderStyle,
      n: __props.placeholderClass,
      o: __props.confirmType,
      p: __props.confirmHold,
      q: __props.holdKeyboard,
      r: __props.cursorSpacing,
      s: __props.adjustPosition,
      t: __props.selectionEnd,
      v: __props.selectionStart,
      w: __props.password || __props.type === "password" || false,
      x: __props.ignoreCompositionEvent,
      y: common_vendor.o(onInput, "cb"),
      z: common_vendor.o(onBlur, "62"),
      A: common_vendor.o(onFocus, "a3"),
      B: common_vendor.o(onConfirm, "25"),
      C: common_vendor.o(onkeyboardheightchange, "26"),
      D: common_vendor.o(clickHandler, "79"),
      E: isShowClear.value
    }, isShowClear.value ? {
      F: common_vendor.p({
        name: "close",
        size: "11",
        color: "#ffffff",
        customStyle: "line-height: 12px",
        class: "data-v-bd93bb3a"
      }),
      G: common_vendor.o(onClear, "d0")
    } : {}, {
      H: __props.suffixIcon != "" || _ctx.$slots["suffix"] != null
    }, __props.suffixIcon != "" || _ctx.$slots["suffix"] != null ? {
      I: common_vendor.p({
        name: __props.suffixIcon,
        size: "18",
        customStyle: __props.suffixIconStyle,
        class: "data-v-bd93bb3a"
      })
    } : {}, {
      J: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      K: common_vendor.n(inputClass.value),
      L: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      M: common_vendor.s(wrapperStyle.value),
      N: common_vendor.s(_ctx.$up.addStyle(_ctx.customStyle)),
      O: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bd93bb3a"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-input/up-input.js.map
