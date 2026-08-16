import { d as deepMerge, b as addStyle, a as addUnit, i as formValidate } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, watch, nextTick, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-textarea"
  },
  __name: "up-textarea",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    placeholderClass: {
      type: String,
      default: "textarea-placeholder"
    },
    placeholderStyle: {
      type: [String, Object],
      default: "color: #c0c4cc"
    },
    height: {
      type: [String, Number],
      default: 70
    },
    confirmType: {
      type: String,
      default: "done"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    count: {
      type: Boolean,
      default: false
    },
    focus: {
      type: Boolean,
      default: false
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    cursorSpacing: {
      type: Number,
      default: 0
    },
    cursor: {
      type: [String, Number],
      default: -1
    },
    showConfirmBar: {
      type: Boolean,
      default: true
    },
    selectionStart: {
      type: Number,
      default: -1
    },
    selectionEnd: {
      type: Number,
      default: -1
    },
    adjustPosition: {
      type: Boolean,
      default: true
    },
    disableDefaultPadding: {
      type: Boolean,
      default: false
    },
    holdKeyboard: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: [String, Number],
      default: 140
    },
    border: {
      type: String,
      default: "surround"
    },
    ignoreCompositionEvent: {
      type: Boolean,
      default: true
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["update:modelValue", "linechange", "focus", "blur", "change", "confirm", "keyboardheightchange"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance();
    const innerValue = ref("");
    const changeFromInner = ref(false);
    watch(() => {
      return props.modelValue;
    }, (newVal) => {
      innerValue.value = newVal;
      changeFromInner.value = false;
    }, { immediate: true });
    const placeholderStyleStr = computed(() => {
      if (typeof props.placeholderStyle === "string") {
        return props.placeholderStyle;
      }
      return "";
    });
    const textareaClass = computed(() => {
      let classes = ["up-textarea"];
      if (props.border === "surround") {
        classes.push("up-border");
        classes.push("up-textarea--radius");
      } else if (props.border === "bottom") {
        classes.push("up-border-bottom");
        classes.push("up-textarea--no-radius");
      }
      if (props.disabled) {
        classes.push("up-textarea--disabled");
      }
      return classes.join(" ");
    });
    const textareaStyle = computed(() => {
      const style = new UTSJSONObject({});
      return deepMerge(style, addStyle(props.customStyle));
    });
    function onFocus(e) {
      emit("focus", e);
    }
    function onBlur(e) {
      emit("blur", e);
      formValidate(instance === null || instance === void 0 ? null : instance.proxy, "blur");
    }
    function onLinechange(e) {
      emit("linechange", e);
    }
    function valueChange() {
      const value = innerValue.value;
      nextTick(() => {
        emit("update:modelValue", value);
        changeFromInner.value = true;
        emit("change", value);
        formValidate(instance === null || instance === void 0 ? null : instance.proxy, "change");
      });
    }
    function onInput(e) {
      let value = e.detail.value;
      innerValue.value = value;
      nextTick(() => {
        valueChange();
      });
    }
    function onConfirm(e) {
      emit("confirm", e);
    }
    function onKeyboardheightchange(e) {
      emit("keyboardheightchange", e);
    }
    const __returned__ = { props, emit, instance, innerValue, changeFromInner, placeholderStyleStr, textareaClass, textareaStyle, onFocus, onBlur, onLinechange, valueChange, onInput, onConfirm, onKeyboardheightchange, get addUnit() {
      return addUnit;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-textarea": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4, "backgroundColor": "#ffffff", "position": "relative", "display": "flex", "flexDirection": "row", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "paddingTop": 9, "paddingRight": 9, "paddingBottom": 9, "paddingLeft": 9 } }, "up-textarea--radius": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "up-textarea--no-radius": { "": { "borderTopLeftRadius": 0, "borderTopRightRadius": 0, "borderBottomRightRadius": 0, "borderBottomLeftRadius": 0 } }, "up-textarea--disabled": { "": { "backgroundColor": "#f5f7fa" } }, "up-textarea__field": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "fontSize": 15, "color": "#606266", "width": "100%" } }, "up-textarea__count": { "": { "position": "absolute", "right": 5, "bottom": 2, "fontSize": 12, "color": "#909193", "backgroundColor": "#ffffff", "paddingTop": 1, "paddingRight": 4, "paddingBottom": 1, "paddingLeft": 4 } } };
const { normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, normalizeClass: _normalizeClass } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-textarea", $setup.textareaClass]),
      style: _normalizeStyle($setup.textareaStyle)
    },
    [
      _createElementVNode("textarea", {
        class: "up-textarea__field",
        value: $setup.innerValue,
        style: _normalizeStyle({ height: $setup.addUnit($props.height) }),
        placeholder: $props.placeholder,
        "placeholder-style": $setup.placeholderStyleStr,
        "placeholder-class": $props.placeholderClass,
        disabled: $props.disabled,
        focus: $props.focus,
        autoHeight: $props.autoHeight,
        fixed: $props.fixed,
        cursorSpacing: $props.cursorSpacing,
        cursor: $props.cursor,
        showConfirmBar: $props.showConfirmBar,
        selectionStart: $props.selectionStart,
        selectionEnd: $props.selectionEnd,
        adjustPosition: $props.adjustPosition,
        disableDefaultPadding: $props.disableDefaultPadding,
        holdKeyboard: $props.holdKeyboard,
        maxlength: $props.maxlength,
        "confirm-type": $props.confirmType,
        ignoreCompositionEvent: $props.ignoreCompositionEvent,
        onFocus: $setup.onFocus,
        onBlur: $setup.onBlur,
        onLinechange: $setup.onLinechange,
        onInput: $setup.onInput,
        onConfirm: $setup.onConfirm,
        onKeyboardheightchange: $setup.onKeyboardheightchange
      }, null, 44, ["value", "placeholder", "placeholder-style", "placeholder-class", "disabled", "focus", "autoHeight", "fixed", "cursorSpacing", "cursor", "showConfirmBar", "selectionStart", "selectionEnd", "adjustPosition", "disableDefaultPadding", "holdKeyboard", "maxlength", "confirm-type", "ignoreCompositionEvent"]),
      $props.count ? (_openBlock(), _createElementBlock(
        "text",
        {
          key: 0,
          class: "up-textarea__count",
          style: _normalizeStyle({
            "background-color": $props.disabled ? "transparent" : "#fff"
          })
        },
        _toDisplayString($setup.innerValue.length) + "/" + _toDisplayString($props.maxlength),
        5
        /* TEXT, STYLE */
      )) : _createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-textarea/up-textarea.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-textarea.js.map
