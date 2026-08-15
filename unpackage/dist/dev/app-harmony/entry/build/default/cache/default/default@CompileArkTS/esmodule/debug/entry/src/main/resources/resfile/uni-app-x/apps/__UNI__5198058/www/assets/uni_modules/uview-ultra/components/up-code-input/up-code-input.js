import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-code-input/codeInput&";
import { a as addUnit, g as getPx } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, toSharedDataBoolean: _toSharedDataBoolean, unref: _unref, createSharedDataIf: _createSharedDataIf, createSharedDataFor: _createSharedDataFor, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCodeInputUpCodeInput";
const { ref, computed, watch, nextTick, onBeforeUnmount } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "18f41df6",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-code-input/up-code-input.uvue",
  __name: "up-code-input",
  props: {
    customStyle: {
      type: [Object, String],
      default: () => {
        return new UTSJSONObject({});
      }
    },
    customClass: {
      type: String,
      default: ""
    },
    // 键盘弹起时，是否自动上推页面
    adjustPosition: {
      type: Boolean,
      default: defProps.getBoolean("codeInput.adjustPosition")
    },
    // 最大输入长度
    maxlength: {
      type: [String, Number],
      default: defProps.getNumber("codeInput.maxlength")
    },
    // 是否用圆点填充
    dot: {
      type: Boolean,
      default: defProps.getBoolean("codeInput.dot")
    },
    // 显示模式，box-盒子模式，line-底部横线模式
    mode: {
      type: String,
      default: defProps.getString("codeInput.mode")
    },
    // 是否细边框
    hairline: {
      type: Boolean,
      default: defProps.getBoolean("codeInput.hairline")
    },
    // 字符间的距离
    space: {
      type: [String, Number],
      default: defProps.getNumber("codeInput.space")
    },
    // 预置值
    modelValue: {
      type: [String, Number],
      default: defProps.getString("codeInput.value")
    },
    // 是否自动获取焦点
    focus: {
      type: Boolean,
      default: defProps.getBoolean("codeInput.focus")
    },
    // 字体是否加粗
    bold: {
      type: Boolean,
      default: defProps.getBoolean("codeInput.bold")
    },
    // 字体颜色
    color: {
      type: String,
      default: defProps.getString("codeInput.color")
    },
    // 字体大小
    fontSize: {
      type: [String, Number],
      default: defProps.getNumber("codeInput.fontSize")
    },
    // 输入框的大小，宽等于高
    size: {
      type: [String, Number],
      default: defProps.getNumber("codeInput.size")
    },
    // 是否隐藏原生键盘，如果想用自定义键盘的话，需设置此参数为true
    disabledKeyboard: {
      type: Boolean,
      default: defProps.getBoolean("codeInput.disabledKeyboard")
    },
    // 边框和线条颜色
    borderColor: {
      type: String,
      default: defProps.getString("codeInput.borderColor")
    },
    // 是否禁止输入"."符号
    disabledDot: {
      type: Boolean,
      default: defProps.getBoolean("codeInput.disabledDot")
    }
  },
  emits: ["change", "finish", "update:modelValue"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCodeInputUpCodeInputSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const inputValue = ref("");
    const isFocus = ref(false);
    const timer = ref(0);
    const cursorOpacity = ref(1);
    const codeLength = computed(() => {
      let list = [];
      for (var index = 0; index < props.maxlength; index++) {
        list.push("");
      }
      return list;
    });
    const codeArray = computed(() => {
      return inputValue.value.split("");
    });
    const inputLength = computed(() => {
      const length = inputValue.value.length;
      return Math.min(length, codeLength.value.length);
    });
    const lineStyle = computed(() => {
      const style = new UTSJSONObject({});
      style["height"] = props.hairline ? "2px" : "4px";
      style["width"] = addUnit(props.size);
      style["backgroundColor"] = props.borderColor;
      return style;
    });
    const inputHandler = (e) => {
      const value = e.detail.value;
      inputValue.value = value;
      if (props.disabledDot) {
        nextTick(() => {
          inputValue.value = value.replace(".", "");
        });
      }
      emit("change", value);
      emit("update:modelValue", value);
      if (value.length >= props.maxlength) {
        emit("finish", value);
      }
    };
    const getCodeValue = (index) => {
      if (index < codeArray.value.length) {
        return codeArray.value[index];
      }
      return "";
    };
    const clearCursorTimer = () => {
      if (timer.value > 0) {
        clearInterval(timer.value);
        timer.value = 0;
      }
    };
    const startCursorTimer = () => {
      clearCursorTimer();
      cursorOpacity.value = 1;
      timer.value = setInterval(() => {
        cursorOpacity.value = cursorOpacity.value == 1 ? 0 : 1;
      }, 600);
    };
    const itemStyle = (index) => {
      const style = new UTSJSONObject(
        {
          width: addUnit(props.size),
          height: addUnit(props.size)
        }
        // 盒子模式下，需要额外进行处理
      );
      if (props.mode == "box") {
        style["border"] = `${props.hairline ? 0.5 : 1}px solid ${props.borderColor}`;
        if (getPx(props.space) == "0") {
          if (index == 0) {
            style["borderTopLeftRadius"] = "3px";
            style["borderBottomLeftRadius"] = "3px";
          }
          if (index == codeLength.value.length - 1) {
            style["borderTopRightRadius"] = "3px";
            style["borderBottomRightRadius"] = "3px";
          }
          if (index != codeLength.value.length - 1) {
            style["borderRight"] = "none";
          }
        }
      }
      if (index != codeLength.value.length - 1) {
        style["marginRight"] = addUnit(props.space);
      } else {
        style["marginRight"] = "0px";
      }
      return style;
    };
    isFocus.value = props.focus;
    if (isFocus.value) {
      startCursorTimer();
    }
    watch(() => {
      return props.modelValue;
    }, (val) => {
      inputValue.value = val.toString().substring(0, props.maxlength);
    }, { immediate: true });
    watch(isFocus, (val) => {
      if (val) {
        startCursorTimer();
      } else {
        clearCursorTimer();
        cursorOpacity.value = 1;
      }
    });
    onBeforeUnmount(() => {
      clearCursorTimer();
    });
    return () => {
      "raw js";
      const _component_input = _resolveComponent("input");
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 0, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return codeLength.value;
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData_VFor0, 8, [itemStyle(_for_key0.value)]);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData_VFor0, 1, _toSharedDataBoolean(__props.dot && codeArray.value.length > _for_key0.value));
        }, () => {
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData_VFor0, 2, {
              fontSize: _unref(addUnit)(__props.fontSize),
              fontWeight: __props.bold ? "bold" : "normal",
              color: __props.color
            });
            _setSharedData(__sharedData_VFor0, 3, _toDisplayString(getCodeValue(_for_key0.value)));
          });
        }, 261);
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData_VFor0, 4, _toSharedDataBoolean(__props.mode == "line"));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData_VFor0, 5, [lineStyle.value]);
          });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData_VFor0, 6, _toSharedDataBoolean(isFocus.value && inputLength.value === _for_key0.value));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData_VFor0, 7, { backgroundColor: __props.color, opacity: cursorOpacity.value });
          });
        });
        return null;
      }, (__sharedData_VFor0, item, index) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
      });
      const _on_focus = () => {
        return isFocus.value = true;
      };
      const _on_blur = () => {
        return isFocus.value = false;
      };
      const n14 = _createSharedDataComponentWithFallback(_component_input, "59ae04fa", {
        disabled: () => {
          return __props.disabledKeyboard;
        },
        type: "number",
        focus: () => {
          return __props.focus;
        },
        value: () => {
          return inputValue.value;
        },
        maxlength: () => {
          return __props.maxlength;
        },
        adjustPosition: () => {
          return __props.adjustPosition;
        },
        class: "up-code-input__input",
        onInput: () => {
          return inputHandler;
        },
        style: () => {
          return {
            height: _unref(addUnit)(__props.size)
          };
        },
        onFocus: () => {
          return _on_focus;
        },
        onBlur: () => {
          return _on_blur;
        }
      });
      _setSharedData(__sharedData, 1, n14?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-code-input.js.map
