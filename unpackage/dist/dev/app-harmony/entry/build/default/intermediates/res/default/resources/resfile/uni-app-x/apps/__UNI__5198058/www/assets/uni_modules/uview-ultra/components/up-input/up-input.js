import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import "../../libs/composable/useUltraUI.js";
import { d as deepMerge, a as addUnit } from "../../libs/function/index.js";
import { d as defProps } from "./input.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataSlot: _createSharedDataSlot, createSharedDataIf: _createSharedDataIf, setSharedDataTemplateRef: _setSharedDataTemplateRef, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpInputUpInput";
const { ref, computed, watch, getCurrentInstance } = globalThis.Vue;
const { onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-input"
  },
  __dynamicSharedData: true,
  __hash: "18321698",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-input/up-input.uvue",
  __name: "up-input",
  props: {
    // 绑定的值
    modelValue: {
      type: [String, Number],
      default: defProps.getString("input.value")
    },
    // number-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数
    // idcard-身份证输入键盘，微信、支付宝、百度、QQ小程序
    // digit-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序
    // text-文本输入键盘
    type: {
      type: String,
      default: defProps.getString("input.type")
    },
    // 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true，
    // 兼容性：微信小程序、百度小程序、字节跳动小程序、QQ小程序
    fixed: {
      type: Boolean,
      default: defProps.getBoolean("input.fixed")
    },
    // 是否禁用输入框
    disabled: {
      type: Boolean,
      default: defProps.getBoolean("input.disabled")
    },
    // 禁用状态时的背景色
    disabledColor: {
      type: String,
      default: defProps.getString("input.disabledColor")
    },
    // 是否显示清除控件
    clearable: {
      type: Boolean,
      default: defProps.getBoolean("input.clearable")
    },
    // 是否密码类型
    password: {
      type: Boolean,
      default: defProps.getBoolean("input.password")
    },
    // 最大输入长度，设置为 -1 的时候不限制最大长度
    maxlength: {
      type: [String, Number],
      default: defProps.getNumber("input.maxlength")
    },
    // 	输入框为空时的占位符
    placeholder: {
      type: String,
      default: defProps.getString("input.placeholder")
    },
    // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
    placeholderClass: {
      type: String,
      default: defProps.getString("input.placeholderClass")
    },
    // 指定placeholder的样式
    placeholderStyle: {
      type: [String, Object],
      default: defProps.getString("input.placeholderStyle")
    },
    // 是否显示输入字数统计，只在 type ="text"或type ="textarea"时有效
    showWordLimit: {
      type: Boolean,
      default: defProps.getBoolean("input.showWordLimit")
    },
    // 设置右下角按钮的文字，有效值：send|search|next|go|done，兼容性详见uni-app文档
    // https://uniapp.dcloud.io/component/input
    // https://uniapp.dcloud.io/component/textarea
    confirmType: {
      type: String,
      default: defProps.getString("input.confirmType")
    },
    // 点击键盘右下角按钮时是否保持键盘不收起，H5无效
    confirmHold: {
      type: Boolean,
      default: defProps.getBoolean("input.confirmHold")
    },
    // focus时，点击页面的时候不收起键盘，微信小程序有效
    holdKeyboard: {
      type: Boolean,
      default: defProps.getBoolean("input.holdKeyboard")
    },
    // 自动获取焦点
    // 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点
    focus: {
      type: Boolean,
      default: defProps.getBoolean("input.focus")
    },
    // 键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效
    autoBlur: {
      type: Boolean,
      default: defProps.getBoolean("input.autoBlur")
    },
    // 是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效
    disableDefaultPadding: {
      type: Boolean,
      default: defProps.getBoolean("input.disableDefaultPadding")
    },
    // 指定focus时光标的位置
    cursor: {
      type: [String, Number],
      default: defProps.getNumber("input.cursor")
    },
    // 输入框聚焦时底部与键盘的距离
    cursorSpacing: {
      type: [String, Number],
      default: defProps.getNumber("input.cursorSpacing")
    },
    // 光标起始位置，自动聚集时有效，需与selection-end搭配使用
    selectionStart: {
      type: [String, Number],
      default: defProps.getNumber("input.selectionStart")
    },
    // 光标结束位置，自动聚集时有效，需与selection-start搭配使用
    selectionEnd: {
      type: [String, Number],
      default: defProps.getNumber("input.selectionEnd")
    },
    // 键盘弹起时，是否自动上推页面
    adjustPosition: {
      type: Boolean,
      default: defProps.getBoolean("input.adjustPosition")
    },
    // 输入框内容对齐方式，可选值为：left|center|right
    inputAlign: {
      type: String,
      default: defProps.getString("input.inputAlign")
    },
    // 输入框字体的大小
    fontSize: {
      type: [String, Number],
      default: defProps.getString("input.fontSize")
    },
    // 输入框字体颜色
    color: {
      type: String,
      default: defProps.getString("input.color")
    },
    // 输入框前置图标
    prefixIcon: {
      type: String,
      default: defProps.getString("input.prefixIcon")
    },
    // 前置图标样式，对象或字符串
    prefixIconStyle: {
      type: [String, Object],
      default: defProps.getString("input.prefixIconStyle")
    },
    // 输入框后置图标
    suffixIcon: {
      type: String,
      default: defProps.getString("input.suffixIcon")
    },
    // 后置图标样式，对象或字符串
    suffixIconStyle: {
      type: [String, Object],
      default: defProps.getString("input.suffixIconStyle")
    },
    // 边框类型，surround-四周边框，bottom-底部边框，none-无边框
    border: {
      type: String,
      default: defProps.getString("input.border")
    },
    // 是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会
    readonly: {
      type: Boolean,
      default: defProps.getBoolean("input.readonly")
    },
    // 输入框形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: defProps.getString("input.shape")
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
      default: defProps.getBoolean("input.ignoreCompositionEvent")
    }
  },
  emits: ["update:modelValue", "focus", "blur", "change", "confirm", "clear", "keyboardheightchange"],
  setup(__props, _a) {
    var __emit = _a.emit, $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpInputUpInputSharedData", sharedDataClassId: 0 })));
    getCurrentInstance().proxy;
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
    ref(defaultFormat);
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
    onMounted(() => {
      innerValue.value = props.modelValue;
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_up_icon = __easycom_0;
      const _component_input = _resolveComponent("input");
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 10, ["up-input", inputClass.value]);
        _setSharedDataStyle(__sharedData, 11, [wrapperStyle.value, $up.addStyle(customStyle)]);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.prefixIcon != "" || $slots["prefix"] != null));
      }, () => {
        _createSharedDataSlot("prefix", null, null, () => {
          const n4 = _createSharedDataComponentWithFallback(_component_up_icon, "3788ace0", {
            name: () => {
              return __props.prefixIcon;
            },
            size: "18",
            customStyle: () => {
              return __props.prefixIconStyle;
            }
          });
          _setSharedData(__sharedData, 1, n4?.sharedData);
        });
      });
      const n6 = _createSharedDataComponentWithFallback(_component_input, "37888844", {
        class: "up-input__content__field-wrapper__field",
        style: () => {
          return [inputStyle.value];
        },
        type: () => {
          return __props.type;
        },
        focus: () => {
          return __props.focus;
        },
        cursor: () => {
          return __props.cursor;
        },
        value: () => {
          return innerValue.value;
        },
        "auto-blur": () => {
          return __props.autoBlur;
        },
        disabled: () => {
          return __props.disabled || __props.readonly;
        },
        maxlength: () => {
          return __props.maxlength;
        },
        placeholder: () => {
          return __props.placeholder;
        },
        "placeholder-style": () => {
          return __props.placeholderStyle;
        },
        "placeholder-class": () => {
          return __props.placeholderClass;
        },
        "confirm-type": () => {
          return __props.confirmType;
        },
        "confirm-hold": () => {
          return __props.confirmHold;
        },
        "hold-keyboard": () => {
          return __props.holdKeyboard;
        },
        "cursor-spacing": () => {
          return __props.cursorSpacing;
        },
        "adjust-position": () => {
          return __props.adjustPosition;
        },
        "selection-end": () => {
          return __props.selectionEnd;
        },
        "selection-start": () => {
          return __props.selectionStart;
        },
        password: () => {
          return __props.password || __props.type === "password" || false;
        },
        ignoreCompositionEvent: () => {
          return __props.ignoreCompositionEvent;
        },
        onInput: () => {
          return onInput;
        },
        onBlur: () => {
          return onBlur;
        },
        onFocus: () => {
          return onFocus;
        },
        onConfirm: () => {
          return onConfirm;
        },
        onKeyboardheightchange: () => {
          return onkeyboardheightchange;
        }
      });
      _setSharedData(__sharedData, 7, n6?.sharedData);
      _setSharedDataTemplateRef(__sharedData, 8, (n62) => {
        _setTemplateRef(n62, inputNativeRef, null, "inputNativeRef");
      });
      _setSharedDataEvent(__sharedData, 9, clickHandler);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 2, _toSharedDataBoolean(isShowClear.value));
      }, () => {
        const n10 = _createSharedDataComponentWithFallback(_component_up_icon, "b98ded44", {
          name: "close",
          size: "11",
          color: "#ffffff",
          customStyle: "line-height: 12px"
        });
        _setSharedData(__sharedData, 3, n10?.sharedData);
        _setSharedDataEvent(__sharedData, 4, onClear);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 5, _toSharedDataBoolean(__props.suffixIcon != "" || $slots["suffix"] != null));
      }, () => {
        _createSharedDataSlot("suffix", null, null, () => {
          const n16 = _createSharedDataComponentWithFallback(_component_up_icon, "b98dcec0", {
            name: () => {
              return __props.suffixIcon;
            },
            size: "18",
            customStyle: () => {
              return __props.suffixIconStyle;
            }
          });
          _setSharedData(__sharedData, 6, n16?.sharedData);
        });
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-input.js.map
