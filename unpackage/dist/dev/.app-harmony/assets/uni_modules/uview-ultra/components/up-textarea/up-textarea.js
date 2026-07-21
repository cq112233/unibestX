const { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, toDisplayString, createCommentVNode } = globalThis.Vue
import { p as propsTextarea } from "./props.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { d as deepMerge, b as addStyle, a as addUnit } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const defaultFormat = function(value) {
  return value;
};
const _sfc_main = defineComponent({
  name: "up-textarea",
  mixins: [mpMixin, mixin, propsTextarea],
  data() {
    return {
      // 输入框的值
      innerValue: "",
      // 是否处于获得焦点状态
      focused: false,
      // value是否第一次变化，在watch中，由于加入immediate属性，会在第一次触发，此时不应该认为value发生了变化
      firstChange: true,
      // value绑定值的变化是由内部还是外部引起的
      changeFromInner: false,
      // 过滤处理方法
      innerFormatter: defaultFormat
    };
  },
  created() {
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(newVal, oldVal) {
        this.innerValue = newVal;
        this.firstChange = false;
        this.changeFromInner = false;
      }
    }
  },
  computed: {
    // 组件的类名
    textareaClass() {
      let classes = [], _a = this, border = _a.border, disabled = _a.disabled;
      if (border === "surround") {
        classes = classes.concat(["up-border", "up-textarea--radius"]);
      }
      if (border === "bottom") {
        classes = classes.concat([
          "up-border-bottom",
          "up-textarea--no-radius"
        ]);
      }
      if (disabled) {
        classes.push("up-textarea--disabled");
      }
      return classes.join(" ");
    },
    // 组件的样式
    textareaStyle() {
      const style = new UTSJSONObject({});
      return deepMerge(style, addStyle(this.customStyle));
    }
  },
  emits: ["update:modelValue", "linechange", "focus", "blur", "change", "confirm", "keyboardheightchange"],
  methods: {
    addStyle(style = null) {
      return addStyle(style);
    },
    addUnit(str = null) {
      return addUnit(str);
    },
    // 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
    setFormatter(e) {
      this.innerFormatter = e;
    },
    onFocus(e) {
      this.$emit("focus", e);
    },
    onBlur(e) {
      this.$emit("blur", e);
    },
    onLinechange(e) {
      this.$emit("linechange", e);
    },
    onInput(e) {
      let value = e.detail.value;
      const formatValue = value;
      this.innerValue = value;
      this.$nextTick(() => {
        this.innerValue = formatValue;
        this.valueChange();
      });
    },
    // 内容发生变化，进行处理
    valueChange() {
      const value = this.innerValue;
      this.$nextTick(() => {
        this.$emit("update:modelValue", value);
        this.changeFromInner = true;
        this.$emit("change", value);
      });
    },
    onConfirm(e) {
      this.$emit("confirm", e);
    },
    onKeyboardheightchange(e) {
      this.$emit("keyboardheightchange", e);
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-textarea": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4, "backgroundColor": "#ffffff", "position": "relative", "display": "flex", "flexDirection": "row", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "paddingTop": 9, "paddingRight": 9, "paddingBottom": 9, "paddingLeft": 9 } }, "up-textarea--radius": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "up-textarea--no-radius": { "": { "borderTopLeftRadius": 0, "borderTopRightRadius": 0, "borderBottomRightRadius": 0, "borderBottomLeftRadius": 0 } }, "up-textarea--disabled": { "": { "backgroundColor": "#f5f7fa" } }, "up-textarea__field": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "fontSize": 15, "color": "#606266", "width": "100%" } }, "up-textarea__count": { "": { "position": "absolute", "right": 5, "bottom": 2, "fontSize": 12, "color": "#909193", "backgroundColor": "#ffffff", "paddingTop": 1, "paddingRight": 4, "paddingBottom": 1, "paddingLeft": 4 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["up-textarea", $options.textareaClass]),
      style: normalizeStyle($options.textareaStyle)
    },
    [
      createElementVNode("textarea", {
        class: "up-textarea__field",
        value: $data.innerValue,
        style: normalizeStyle({ height: $options.addUnit(_ctx.height) }),
        placeholder: _ctx.placeholder,
        "placeholder-style": $options.addStyle(_ctx.placeholderStyle),
        "placeholder-class": _ctx.placeholderClass,
        disabled: _ctx.disabled,
        focus: _ctx.focus,
        autoHeight: _ctx.autoHeight,
        fixed: _ctx.fixed,
        cursorSpacing: _ctx.cursorSpacing,
        cursor: _ctx.cursor,
        showConfirmBar: _ctx.showConfirmBar,
        selectionStart: _ctx.selectionStart,
        selectionEnd: _ctx.selectionEnd,
        adjustPosition: _ctx.adjustPosition,
        disableDefaultPadding: _ctx.disableDefaultPadding,
        holdKeyboard: _ctx.holdKeyboard,
        maxlength: _ctx.maxlength,
        "confirm-type": _ctx.confirmType,
        ignoreCompositionEvent: _ctx.ignoreCompositionEvent,
        onFocus: _cache[0] || (_cache[0] = (...args) => $options.onFocus && $options.onFocus(...args)),
        onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
        onLinechange: _cache[2] || (_cache[2] = (...args) => $options.onLinechange && $options.onLinechange(...args)),
        onInput: _cache[3] || (_cache[3] = (...args) => $options.onInput && $options.onInput(...args)),
        onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
        onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onKeyboardheightchange && $options.onKeyboardheightchange(...args))
      }, null, 44, ["value", "placeholder", "placeholder-style", "placeholder-class", "disabled", "focus", "autoHeight", "fixed", "cursorSpacing", "cursor", "showConfirmBar", "selectionStart", "selectionEnd", "adjustPosition", "disableDefaultPadding", "holdKeyboard", "maxlength", "confirm-type", "ignoreCompositionEvent"]),
      _ctx.count ? (openBlock(), createElementBlock(
        "text",
        {
          key: 0,
          class: "up-textarea__count",
          style: normalizeStyle({
            "background-color": _ctx.disabled ? "transparent" : "#fff"
          })
        },
        toDisplayString($data.innerValue.length) + "/" + toDisplayString(_ctx.maxlength),
        5
        /* TEXT, STYLE */
      )) : createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_11 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-textarea/up-textarea.uvue"]]);
export {
  __easycom_11 as _
};
//# sourceMappingURL=up-textarea.js.map
