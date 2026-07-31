"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upCodeInput_codeInput = require("./codeInput.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "up-code-input",
  props: {
    // 键盘弹起时，是否自动上推页面
    adjustPosition: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upCodeInput_codeInput.defProps.getBoolean("codeInput.adjustPosition")
    },
    // 最大输入长度
    maxlength: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upCodeInput_codeInput.defProps.getNumber("codeInput.maxlength")
    },
    // 是否用圆点填充
    dot: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upCodeInput_codeInput.defProps.getBoolean("codeInput.dot")
    },
    // 显示模式，box-盒子模式，line-底部横线模式
    mode: {
      type: String,
      default: uni_modules_uviewUltra_components_upCodeInput_codeInput.defProps.getString("codeInput.mode")
    },
    // 是否细边框
    hairline: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upCodeInput_codeInput.defProps.getBoolean("codeInput.hairline")
    },
    // 字符间的距离
    space: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upCodeInput_codeInput.defProps.getNumber("codeInput.space")
    },
    // 预置值
    modelValue: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upCodeInput_codeInput.defProps.getString("codeInput.value")
    },
    // 是否自动获取焦点
    focus: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upCodeInput_codeInput.defProps.getBoolean("codeInput.focus")
    },
    // 字体是否加粗
    bold: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upCodeInput_codeInput.defProps.getBoolean("codeInput.bold")
    },
    // 字体颜色
    color: {
      type: String,
      default: uni_modules_uviewUltra_components_upCodeInput_codeInput.defProps.getString("codeInput.color")
    },
    // 字体大小
    fontSize: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upCodeInput_codeInput.defProps.getNumber("codeInput.fontSize")
    },
    // 输入框的大小，宽等于高
    size: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upCodeInput_codeInput.defProps.getNumber("codeInput.size")
    },
    // 是否隐藏原生键盘，如果想用自定义键盘的话，需设置此参数为true
    disabledKeyboard: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upCodeInput_codeInput.defProps.getBoolean("codeInput.disabledKeyboard")
    },
    // 边框和线条颜色
    borderColor: {
      type: String,
      default: uni_modules_uviewUltra_components_upCodeInput_codeInput.defProps.getString("codeInput.borderColor")
    },
    // 是否禁止输入"."符号
    disabledDot: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upCodeInput_codeInput.defProps.getBoolean("codeInput.disabledDot")
    }
  },
  emits: ["change", "finish", "update:modelValue"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emit = __emit;
    const inputValue = common_vendor.ref("");
    const isFocus = common_vendor.ref(false);
    const timer = common_vendor.ref(0);
    const cursorOpacity = common_vendor.ref(1);
    const codeLength = common_vendor.computed(() => {
      let list = [];
      for (var index = 0; index < props.maxlength; index++) {
        list.push("");
      }
      return list;
    });
    const codeArray = common_vendor.computed(() => {
      return inputValue.value.split("");
    });
    const inputLength = common_vendor.computed(() => {
      const length = inputValue.value.length;
      return Math.min(length, codeLength.value.length);
    });
    const lineStyle = common_vendor.computed(() => {
      const style = new common_vendor.UTSJSONObject({});
      style["height"] = props.hairline ? "2px" : "4px";
      style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.size);
      style["backgroundColor"] = props.borderColor;
      return style;
    });
    const inputHandler = (e) => {
      const value = e.detail.value;
      inputValue.value = value;
      if (props.disabledDot) {
        common_vendor.nextTick$1(() => {
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
      const style = new common_vendor.UTSJSONObject(
        {
          width: uni_modules_uviewUltra_libs_function_index.addUnit(props.size),
          height: uni_modules_uviewUltra_libs_function_index.addUnit(props.size)
        }
        // 盒子模式下，需要额外进行处理
      );
      if (props.mode == "box") {
        style["border"] = `${props.hairline ? 0.5 : 1}px solid ${props.borderColor}`;
        if (uni_modules_uviewUltra_libs_function_index.getPx(props.space) == "0") {
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
        style["marginRight"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.space);
      } else {
        style["marginRight"] = "0px";
      }
      return style;
    };
    isFocus.value = props.focus;
    if (isFocus.value) {
      startCursorTimer();
    }
    common_vendor.watch(() => {
      return props.modelValue;
    }, (val) => {
      inputValue.value = val.toString().substring(0, props.maxlength);
    }, { immediate: true });
    common_vendor.watch(isFocus, (val) => {
      if (val) {
        startCursorTimer();
      } else {
        clearCursorTimer();
        cursorOpacity.value = 1;
      }
    });
    common_vendor.onBeforeUnmount(() => {
      clearCursorTimer();
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.f(codeLength.value, (item, index, i0) => {
          return common_vendor.e({
            a: __props.dot && codeArray.value.length > index
          }, __props.dot && codeArray.value.length > index ? {} : {
            b: common_vendor.t(getCodeValue(index)),
            c: _ctx.$upAddUnit(__props.fontSize),
            d: __props.bold ? "bold" : "normal",
            e: __props.color
          }, __props.mode == "line" ? {
            f: common_vendor.s(lineStyle.value)
          } : {}, {
            g: isFocus.value && inputLength.value === index
          }, isFocus.value && inputLength.value === index ? {
            h: __props.color,
            i: cursorOpacity.value
          } : {}, {
            j: common_vendor.s(itemStyle(index)),
            k: index
          });
        }),
        b: __props.mode == "line",
        c: __props.disabledKeyboard,
        d: __props.focus,
        e: inputValue.value,
        f: __props.maxlength,
        g: __props.adjustPosition,
        h: common_vendor.o(inputHandler, "82"),
        i: _ctx.$upAddUnit(__props.size),
        j: common_vendor.o(($event) => {
          return isFocus.value = true;
        }, "9b"),
        k: common_vendor.o(($event) => {
          return isFocus.value = false;
        }, "6a"),
        l: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        m: `${_ctx.u_s_b_h}px`,
        n: `${_ctx.u_s_a_i_b}px`,
        o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7e001405"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-code-input/up-code-input.js.map
