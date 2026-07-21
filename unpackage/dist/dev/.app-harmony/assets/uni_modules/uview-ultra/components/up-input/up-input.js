import { _ as __easycom_35 } from "../up-icon/up-icon.js";
const { defineComponent, getCurrentInstance, ref, watch, computed, onMounted, resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot, createVNode, createCommentVNode } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import "../../libs/composable/useUltraUI.js";
import { d as deepMerge, a as addUnit } from "../../libs/function/index.js";
import { d as defPropsInput } from "./input.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-input"
  },
  __name: "up-input",
  props: {
    // 绑定的值
    modelValue: {
      type: [String, Number],
      default: defPropsInput.getString("input.value")
    },
    // number-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数
    // idcard-身份证输入键盘，微信、支付宝、百度、QQ小程序
    // digit-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序
    // text-文本输入键盘
    type: {
      type: String,
      default: defPropsInput.getString("input.type")
    },
    // 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true，
    // 兼容性：微信小程序、百度小程序、字节跳动小程序、QQ小程序
    fixed: {
      type: Boolean,
      default: defPropsInput.getBoolean("input.fixed")
    },
    // 是否禁用输入框
    disabled: {
      type: Boolean,
      default: defPropsInput.getBoolean("input.disabled")
    },
    // 禁用状态时的背景色
    disabledColor: {
      type: String,
      default: defPropsInput.getString("input.disabledColor")
    },
    // 是否显示清除控件
    clearable: {
      type: Boolean,
      default: defPropsInput.getBoolean("input.clearable")
    },
    // 是否密码类型
    password: {
      type: Boolean,
      default: defPropsInput.getBoolean("input.password")
    },
    // 最大输入长度，设置为 -1 的时候不限制最大长度
    maxlength: {
      type: [String, Number],
      default: defPropsInput.getNumber("input.maxlength")
    },
    // 	输入框为空时的占位符
    placeholder: {
      type: String,
      default: defPropsInput.getString("input.placeholder")
    },
    // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
    placeholderClass: {
      type: String,
      default: defPropsInput.getString("input.placeholderClass")
    },
    // 指定placeholder的样式
    placeholderStyle: {
      type: [String, Object],
      default: defPropsInput.getString("input.placeholderStyle")
    },
    // 是否显示输入字数统计，只在 type ="text"或type ="textarea"时有效
    showWordLimit: {
      type: Boolean,
      default: defPropsInput.getBoolean("input.showWordLimit")
    },
    // 设置右下角按钮的文字，有效值：send|search|next|go|done，兼容性详见uni-app文档
    // https://uniapp.dcloud.io/component/input
    // https://uniapp.dcloud.io/component/textarea
    confirmType: {
      type: String,
      default: defPropsInput.getString("input.confirmType")
    },
    // 点击键盘右下角按钮时是否保持键盘不收起，H5无效
    confirmHold: {
      type: Boolean,
      default: defPropsInput.getBoolean("input.confirmHold")
    },
    // focus时，点击页面的时候不收起键盘，微信小程序有效
    holdKeyboard: {
      type: Boolean,
      default: defPropsInput.getBoolean("input.holdKeyboard")
    },
    // 自动获取焦点
    // 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点
    focus: {
      type: Boolean,
      default: defPropsInput.getBoolean("input.focus")
    },
    // 键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效
    autoBlur: {
      type: Boolean,
      default: defPropsInput.getBoolean("input.autoBlur")
    },
    // 是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效
    disableDefaultPadding: {
      type: Boolean,
      default: defPropsInput.getBoolean("input.disableDefaultPadding")
    },
    // 指定focus时光标的位置
    cursor: {
      type: [String, Number],
      default: defPropsInput.getNumber("input.cursor")
    },
    // 输入框聚焦时底部与键盘的距离
    cursorSpacing: {
      type: [String, Number],
      default: defPropsInput.getNumber("input.cursorSpacing")
    },
    // 光标起始位置，自动聚集时有效，需与selection-end搭配使用
    selectionStart: {
      type: [String, Number],
      default: defPropsInput.getNumber("input.selectionStart")
    },
    // 光标结束位置，自动聚集时有效，需与selection-start搭配使用
    selectionEnd: {
      type: [String, Number],
      default: defPropsInput.getNumber("input.selectionEnd")
    },
    // 键盘弹起时，是否自动上推页面
    adjustPosition: {
      type: Boolean,
      default: defPropsInput.getBoolean("input.adjustPosition")
    },
    // 输入框内容对齐方式，可选值为：left|center|right
    inputAlign: {
      type: String,
      default: defPropsInput.getString("input.inputAlign")
    },
    // 输入框字体的大小
    fontSize: {
      type: [String, Number],
      default: defPropsInput.getString("input.fontSize")
    },
    // 输入框字体颜色
    color: {
      type: String,
      default: defPropsInput.getString("input.color")
    },
    // 输入框前置图标
    prefixIcon: {
      type: String,
      default: defPropsInput.getString("input.prefixIcon")
    },
    // 前置图标样式，对象或字符串
    prefixIconStyle: {
      type: [String, Object],
      default: defPropsInput.getString("input.prefixIconStyle")
    },
    // 输入框后置图标
    suffixIcon: {
      type: String,
      default: defPropsInput.getString("input.suffixIcon")
    },
    // 后置图标样式，对象或字符串
    suffixIconStyle: {
      type: [String, Object],
      default: defPropsInput.getString("input.suffixIconStyle")
    },
    // 边框类型，surround-四周边框，bottom-底部边框，none-无边框
    border: {
      type: String,
      default: defPropsInput.getString("input.border")
    },
    // 是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会
    readonly: {
      type: Boolean,
      default: defPropsInput.getBoolean("input.readonly")
    },
    // 输入框形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: defPropsInput.getString("input.shape")
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
      default: defPropsInput.getBoolean("input.ignoreCompositionEvent")
    }
  },
  emits: ["update:modelValue", "focus", "blur", "change", "confirm", "clear", "keyboardheightchange"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const emit = __emit;
    const clearInput = ref(false);
    const innerValue = ref("");
    const focused = ref(false);
    const firstChange = ref(true);
    const changeFromInner = ref(false);
    const defaultFormat = function(value) {
      return value;
    };
    const innerFormatter = ref(defaultFormat);
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
    watch(() => {
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
    const isShowClear = computed(() => {
      return !!props.clearable && !props.readonly && !!focused.value && innerValue.value !== "";
    });
    const inputClass = computed(() => {
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
    const wrapperStyle = computed(() => {
      const style = new UTSJSONObject({});
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
      return deepMerge(style, new UTSJSONObject({}));
    });
    const inputStyle = computed(() => {
      const style = new UTSJSONObject({
        color: props.color,
        fontSize: addUnit(props.fontSize),
        textAlign: props.inputAlign
      });
      return style;
    });
    const onInput = (e) => {
      let value = e.detail.value;
      uni.__f__("log", "at uni_modules/uview-ultra/components/up-input/up-input.uvue:391", "onInput", value, innerValue.value);
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
    const inputNativeRef = ref(null);
    const doFocus = () => {
      var _a2;
      if (inputNativeRef.value != null) {
        (_a2 = inputNativeRef.value) === null || _a2 === void 0 ? null : _a2.$callMethod("focus");
      }
    };
    const doBlur = () => {
      var _a2;
      if (inputNativeRef.value != null) {
        (_a2 = inputNativeRef.value) === null || _a2 === void 0 ? null : _a2.$callMethod("blur");
      }
    };
    const setFormatter = (e) => {
      innerFormatter.value = e;
    };
    onMounted(() => {
      innerValue.value = props.modelValue;
    });
    const __returned__ = { instance, props, emit, clearInput, innerValue, focused, firstChange, changeFromInner, defaultFormat, innerFormatter, valueChange, isShowClear, inputClass, wrapperStyle, inputStyle, onInput, onBlur, onFocus, onConfirm, onkeyboardheightchange, onClear, clickHandler, inputNativeRef, doFocus, doBlur, setFormatter };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-input": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-input--radius": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "up-input--square": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "up-input--no-radius": { "": { "borderTopLeftRadius": 0, "borderTopRightRadius": 0, "borderBottomRightRadius": 0, "borderBottomLeftRadius": 0 } }, "up-input--circle": { "": { "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100 } }, "up-input__content": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "up-input__content__field-wrapper": { "": { "position": "relative", "display": "flex", "flexDirection": "row", "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-input__content__field-wrapper__field": { "": { "textAlign": "left", "color": "#303133", "height": 24, "fontSize": 15, "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-input__content__clear": { "": { "width": 20, "height": 20, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "backgroundColor": "#c6c7cb", "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "transform": "scale(0.82)", "marginLeft": 4 } }, "up-input__content__subfix-icon": { "": { "marginLeft": 4 } }, "up-input__content__prefix-icon": { "": { "marginRight": 4 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_35);
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["up-input", $setup.inputClass]),
      style: normalizeStyle([$setup.wrapperStyle, _ctx.$up.addStyle(_ctx.customStyle)])
    },
    [
      createElementVNode("view", { class: "up-input__content" }, [
        $props.prefixIcon != "" || _ctx.$slots["prefix"] != null ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "up-input__content__prefix-icon"
        }, [
          renderSlot(_ctx.$slots, "prefix", {}, () => [
            createVNode(_component_up_icon, {
              name: $props.prefixIcon,
              size: "18",
              customStyle: $props.prefixIconStyle
            }, null, 8, ["name", "customStyle"])
          ])
        ])) : createCommentVNode("v-if", true),
        createElementVNode("view", {
          class: "up-input__content__field-wrapper",
          onClick: $setup.clickHandler
        }, [
          createCommentVNode(" 根据uni-app的input组件文档，H5和APP中只要声明了password参数(无论true还是false)，type均失效，此时\n					为了防止type=number时，又存在password属性，type无效，此时需要设置password为undefined\n				 "),
          createElementVNode("input", {
            ref: "inputNativeRef",
            class: "up-input__content__field-wrapper__field",
            style: normalizeStyle([$setup.inputStyle]),
            type: $props.type,
            focus: $props.focus,
            cursor: $props.cursor,
            value: $setup.innerValue,
            "auto-blur": $props.autoBlur,
            disabled: $props.disabled || $props.readonly,
            maxlength: $props.maxlength,
            placeholder: $props.placeholder,
            "placeholder-style": $props.placeholderStyle,
            "placeholder-class": $props.placeholderClass,
            "confirm-type": $props.confirmType,
            "confirm-hold": $props.confirmHold,
            "hold-keyboard": $props.holdKeyboard,
            "cursor-spacing": $props.cursorSpacing,
            "adjust-position": $props.adjustPosition,
            "selection-end": $props.selectionEnd,
            "selection-start": $props.selectionStart,
            password: $props.password || $props.type === "password" || false,
            ignoreCompositionEvent: $props.ignoreCompositionEvent,
            onInput: $setup.onInput,
            onBlur: $setup.onBlur,
            onFocus: $setup.onFocus,
            onConfirm: $setup.onConfirm,
            onKeyboardheightchange: $setup.onkeyboardheightchange
          }, null, 44, ["type", "focus", "cursor", "value", "auto-blur", "disabled", "maxlength", "placeholder", "placeholder-style", "placeholder-class", "confirm-type", "confirm-hold", "hold-keyboard", "cursor-spacing", "adjust-position", "selection-end", "selection-start", "password", "ignoreCompositionEvent"])
        ]),
        $setup.isShowClear ? (openBlock(), createElementBlock("view", {
          key: 1,
          class: "up-input__content__clear",
          onClick: $setup.onClear
        }, [
          createVNode(_component_up_icon, {
            name: "close",
            size: "11",
            color: "#ffffff",
            customStyle: "line-height: 12px"
          })
        ])) : createCommentVNode("v-if", true),
        $props.suffixIcon != "" || _ctx.$slots["suffix"] != null ? (openBlock(), createElementBlock("view", {
          key: 2,
          class: "up-input__content__subfix-icon"
        }, [
          renderSlot(_ctx.$slots, "suffix", {}, () => [
            createVNode(_component_up_icon, {
              name: $props.suffixIcon,
              size: "18",
              customStyle: $props.suffixIconStyle
            }, null, 8, ["name", "customStyle"])
          ])
        ])) : createCommentVNode("v-if", true)
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-input/up-input.uvue"]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=up-input.js.map
