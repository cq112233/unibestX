const { defineComponent, ref, computed, watch, onBeforeUnmount, nextTick, openBlock, createElementBlock, Fragment, renderList, normalizeStyle, toDisplayString, createCommentVNode, createElementVNode } = globalThis.Vue
import { d as defProps } from "./codeInput.js";
import { a as addUnit, g as getPx } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "up-code-input",
  props: {
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
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
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
    const __returned__ = { props, emit, inputValue, isFocus, timer, cursorOpacity, codeLength, codeArray, inputLength, lineStyle, inputHandler, getCodeValue, clearCursorTimer, startCursorTimer, itemStyle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-code-input": { "": { "display": "flex", "flexDirection": "row", "position": "relative", "overflow": "hidden" } }, "up-code-input__item": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "position": "relative" } }, "up-code-input__item__text": { "": { "fontSize": 15, "color": "#606266" } }, "up-code-input__item__dot": { "": { "width": 7, "height": 7, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "backgroundColor": "#606266" } }, "up-code-input__item__line": { "": { "position": "absolute", "bottom": 0, "height": 4, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "width": 40, "backgroundColor": "#606266" } }, "up-code-input__item__cursor": { "": { "position": "absolute", "top": "50%", "left": "50%", "opacity": 1, "transform": "translate(-50%, -50%)", "width": 1, "height": 20 } }, "up-code-input__input": { "": { "position": "absolute", "left": "-750rpx", "width": "1500rpx", "top": 0, "backgroundColor": "rgba(0,0,0,0)", "textAlign": "left" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", { class: "up-code-input" }, [
    (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($setup.codeLength, (item, index) => {
        return openBlock(), createElementBlock(
          "view",
          {
            class: "up-code-input__item",
            style: normalizeStyle([$setup.itemStyle(index)]),
            key: index
          },
          [
            $props.dot && $setup.codeArray.length > index ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: "up-code-input__item__dot"
            })) : (openBlock(), createElementBlock(
              "text",
              {
                key: 1,
                style: normalizeStyle({
                  fontSize: _ctx.$upAddUnit($props.fontSize),
                  fontWeight: $props.bold ? "bold" : "normal",
                  color: $props.color
                })
              },
              toDisplayString($setup.getCodeValue(index)),
              5
              /* TEXT, STYLE */
            )),
            $props.mode == "line" ? (openBlock(), createElementBlock(
              "view",
              {
                key: 2,
                class: "up-code-input__item__line",
                style: normalizeStyle([$setup.lineStyle])
              },
              null,
              4
              /* STYLE */
            )) : createCommentVNode("v-if", true),
            $setup.isFocus && $setup.inputLength === index ? (openBlock(), createElementBlock(
              "view",
              {
                key: 3,
                style: normalizeStyle({ backgroundColor: $props.color, opacity: $setup.cursorOpacity }),
                class: "up-code-input__item__cursor"
              },
              null,
              4
              /* STYLE */
            )) : createCommentVNode("v-if", true)
          ],
          4
          /* STYLE */
        );
      }),
      128
      /* KEYED_FRAGMENT */
    )),
    createElementVNode("input", {
      disabled: $props.disabledKeyboard,
      type: "number",
      focus: $props.focus,
      value: $setup.inputValue,
      maxlength: $props.maxlength,
      adjustPosition: $props.adjustPosition,
      class: "up-code-input__input",
      onInput: $setup.inputHandler,
      style: normalizeStyle({
        height: _ctx.$upAddUnit($props.size)
      }),
      onFocus: _cache[0] || (_cache[0] = ($event) => $setup.isFocus = true),
      onBlur: _cache[1] || (_cache[1] = ($event) => $setup.isFocus = false)
    }, null, 44, ["disabled", "focus", "value", "maxlength", "adjustPosition"])
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-code-input/up-code-input.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-code-input.js.map
