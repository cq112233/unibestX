"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upTextarea_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const defaultFormat = function(value) {
  return value;
};
const _sfc_main = common_vendor.defineComponent({
  name: "up-textarea",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upTextarea_props.propsTextarea],
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
      const style = new common_vendor.UTSJSONObject({});
      return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(this.customStyle));
    }
  },
  emits: ["update:modelValue", "linechange", "focus", "blur", "change", "confirm", "keyboardheightchange"],
  methods: {
    addStyle(style = null) {
      return uni_modules_uviewUltra_libs_function_index.addStyle(style);
    },
    addUnit(str = null) {
      return uni_modules_uviewUltra_libs_function_index.addUnit(str);
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: $data.innerValue,
    b: $options.addUnit(_ctx.height),
    c: _ctx.placeholder,
    d: $options.addStyle(_ctx.placeholderStyle),
    e: _ctx.placeholderClass,
    f: _ctx.disabled,
    g: _ctx.focus,
    h: _ctx.autoHeight,
    i: _ctx.fixed,
    j: _ctx.cursorSpacing,
    k: _ctx.cursor,
    l: _ctx.showConfirmBar,
    m: _ctx.selectionStart,
    n: _ctx.selectionEnd,
    o: _ctx.adjustPosition,
    p: _ctx.disableDefaultPadding,
    q: _ctx.holdKeyboard,
    r: _ctx.maxlength,
    s: _ctx.confirmType,
    t: _ctx.ignoreCompositionEvent,
    v: common_vendor.o((...args) => $options.onFocus && $options.onFocus(...args), "e3"),
    w: common_vendor.o((...args) => $options.onBlur && $options.onBlur(...args), "06"),
    x: common_vendor.o((...args) => $options.onLinechange && $options.onLinechange(...args), "c0"),
    y: common_vendor.o((...args) => $options.onInput && $options.onInput(...args), "67"),
    z: common_vendor.o((...args) => $options.onConfirm && $options.onConfirm(...args), "e3"),
    A: common_vendor.o((...args) => $options.onKeyboardheightchange && $options.onKeyboardheightchange(...args), "be"),
    B: _ctx.count
  }, _ctx.count ? {
    C: common_vendor.t($data.innerValue.length),
    D: common_vendor.t(_ctx.maxlength),
    E: _ctx.disabled ? "transparent" : "#fff"
  } : {}, {
    F: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    G: common_vendor.n($options.textareaClass),
    H: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
    I: common_vendor.s($options.textareaStyle),
    J: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d6d71d4f"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-textarea/up-textarea.js.map
