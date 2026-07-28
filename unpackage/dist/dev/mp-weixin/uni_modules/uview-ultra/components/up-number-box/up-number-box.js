"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upNumberBox_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-number-box",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upNumberBox_props.propsNumberBox],
  data() {
    return {
      type: "",
      // 输入框实际操作的值
      currentValue: "",
      // 定时器
      longPressTimer: null
    };
  },
  watch: {
    // 多个值之间，只要一个值发生变化，都要重新检查check()函数
    watchChange(n = null) {
      this.check();
    },
    // 监听v-mode的变化，重新初始化内部的值
    modelValue: {
      handler: function(newV, oldV) {
        if (newV !== this.currentValue) {
          this.currentValue = this.format(newV.toString());
        }
      },
      immediate: true
    }
  },
  computed: {
    hideMinus() {
      return this.currentValue.toString() == "0" && this.miniMode == true;
    },
    getCursorSpacing() {
      return uni_modules_uviewUltra_libs_function_index.getPx(this.cursorSpacing);
    },
    // 输入框的样式
    inputStyle() {
      this.disabled || this.disabledInput;
      const style = new UTSJSONObject({
        color: this.color,
        backgroundColor: this.inputBgColor != "" ? this.inputBgColor : this.bgColor,
        height: uni_modules_uviewUltra_libs_function_index.addUnit(this.buttonSize),
        width: uni_modules_uviewUltra_libs_function_index.addUnit(this.inputWidth)
      });
      return style;
    },
    // 用于监听多个值发生变化
    watchChange() {
      return [this.integer, this.decimalLength, this.min, this.max];
    }
  },
  mounted() {
    this.init();
  },
  emits: ["update:modelValue", "focus", "blur", "overlimit", "change", "plus", "minus"],
  methods: {
    init() {
      this.currentValue = this.format(this.modelValue != null ? this.modelValue.toString() : "0");
    },
    // 按钮的样式
    buttonStyle(type) {
      const style = new UTSJSONObject({
        backgroundColor: this.bgColor,
        width: uni_modules_uviewUltra_libs_function_index.addUnit(this.buttonWidth),
        height: uni_modules_uviewUltra_libs_function_index.addUnit(this.buttonSize),
        borderRadius: this.buttonRadius
      });
      if (this.isDisabled(type)) {
        style.backgroundColor = this.disabledBgColor;
      }
      return style;
    },
    isDisabled(type) {
      if (type === "plus") {
        return this.disabled || this.disablePlus;
      }
      return this.disabled || this.disableMinus || parseFloat(this.currentValue.toString()) <= parseFloat(this.min.toString());
    },
    // 格式化整理数据，限制范围
    format(value) {
      value = this.filter(value);
      let valueNum = value == "" ? 0 : parseFloat(value);
      valueNum = Math.max(Math.min(parseFloat(this.max.toString()), parseFloat(value.toString())), parseFloat(this.min.toString()));
      let decimalLength = parseInt(this.decimalLength.toString());
      if (decimalLength != 0 && valueNum != 0) {
        valueNum = parseFloat(valueNum.toFixed(decimalLength));
      }
      return valueNum;
    },
    // 过滤非法的字符
    filter(value) {
      value = value.toString();
      value = value.replace(/[^0-9.-]/g, "");
      if (this.integer && value.indexOf(".") != -1) {
        value = value.split(".")[0];
      }
      return value;
    },
    check() {
      const val = this.format(this.currentValue.toString());
      if (val !== this.currentValue) {
        this.currentValue = val;
        this.emitChange(val);
      }
    },
    // 输入框活动焦点
    onFocus(event) {
      this.$emit("focus", new UTSJSONObject(Object.assign(Object.assign({}, event.detail), { name: this.name })));
    },
    // 输入框失去焦点
    onBlur(event) {
      const value = this.format(event.detail.value);
      this.emitChange(value);
      this.$emit("blur", new UTSJSONObject(Object.assign(Object.assign({}, event.detail), { name: this.name })));
    },
    // 输入框值发生变化
    onInput(e) {
      let value = e.detail.value;
      if (value === "") {
        this.currentValue = "";
        return null;
      }
      let formatted = this.filter(value.toString());
      this.emitChange(value);
      if (formatted.indexOf(".") != -1) {
        const pair = formatted.split(".");
        formatted = `${pair[0]}.${pair[1].slice(0, parseInt(this.decimalLength.toString()))}`;
      }
      let formatted2 = this.format(formatted);
      this.emitChange(formatted2);
      return formatted2;
    },
    // 发出change事件，type目前只支持点击时有值，手动输入不支持。
    emitChange(value, type = "") {
      if (!this.asyncChange) {
        this.$nextTick(() => {
          this.$emit("update:modelValue", value);
          this.currentValue = value;
          this.$forceUpdate();
        });
      }
      this.$emit("change", new UTSJSONObject({
        value: parseFloat(value.toString()),
        name: this.name,
        type
        // 当前变更类型
      }));
    },
    onChange() {
      const type = this.type;
      if (this.isDisabled(type)) {
        return this.$emit("overlimit", type);
      }
      const diff = type === "minus" ? 0 - parseFloat(this.step.toString()) : 0 + parseFloat(this.step.toString());
      const value = this.format(this.add(0 + parseFloat(this.currentValue.toString()), diff).toString());
      this.emitChange(value, type);
      this.$emit(type);
    },
    // 对值扩大后进行四舍五入，再除以扩大因子，避免出现浮点数操作的精度问题
    add(num1, num2) {
      const cardinal = Math.pow(10, 10);
      return Math.round((num1 + num2) * cardinal) / cardinal;
    },
    // 点击加减按钮
    clickHandler(type) {
      this.type = type;
      this.onChange();
    },
    longPressStep() {
      this.clearTimeout();
      this.longPressTimer = setTimeout(() => {
        this.onChange();
        this.longPressStep();
      }, 250);
    },
    onTouchStart(type) {
      if (!this.longPress)
        return null;
      this.clearTimeout();
      this.type = type;
      this.longPressTimer = setTimeout(() => {
        this.onChange();
        this.longPressStep();
      }, 600);
    },
    // 触摸结束，清除定时器，停止长按加减
    onTouchEnd() {
      if (!this.longPress)
        return null;
      this.clearTimeout();
    },
    // 清除定时器
    clearTimeout() {
      var _a;
      clearTimeout((_a = this.longPressTimer) !== null && _a !== void 0 ? _a : 0);
      this.longPressTimer = null;
    }
  }
});
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon2();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: _ctx.showMinus && !$options.hideMinus && _ctx.$slots["minus"] != null
  }, _ctx.showMinus && !$options.hideMinus && _ctx.$slots["minus"] != null ? {
    b: common_vendor.o(($event) => $options.clickHandler("minus"), "b0"),
    c: common_vendor.o(($event) => $options.onTouchStart("minus"), "70"),
    d: common_vendor.o((...args) => $options.clearTimeout && $options.clearTimeout(...args), "0d")
  } : _ctx.showMinus && !$options.hideMinus ? {
    f: common_vendor.p({
      name: "minus",
      color: $options.isDisabled("minus") ? "#c8c9cc" : "#323233",
      size: "15",
      bold: true,
      customStyle: _ctx.iconStyle,
      class: "data-v-ea035928"
    }),
    g: common_vendor.o(($event) => $options.clickHandler("minus"), "3f"),
    h: common_vendor.o(($event) => $options.onTouchStart("minus"), "eb"),
    i: common_vendor.o((...args) => $options.clearTimeout && $options.clearTimeout(...args), "6b"),
    j: $options.isDisabled("minus") ? 1 : "",
    k: common_vendor.s($options.buttonStyle("minus"))
  } : {}, {
    e: _ctx.showMinus && !$options.hideMinus,
    l: !$options.hideMinus
  }, !$options.hideMinus ? {
    m: _ctx.disabledInput || _ctx.disabled,
    n: $options.getCursorSpacing,
    o: _ctx.disabled || _ctx.disabledInput ? 1 : "",
    p: $data.currentValue,
    q: common_vendor.o((...args) => $options.onBlur && $options.onBlur(...args), "dc"),
    r: common_vendor.o((...args) => $options.onFocus && $options.onFocus(...args), "05"),
    s: common_vendor.o((...args) => $options.onInput && $options.onInput(...args), "6c"),
    t: common_vendor.s($options.inputStyle)
  } : {}, {
    v: _ctx.showPlus && _ctx.$slots["plus"] != null
  }, _ctx.showPlus && _ctx.$slots["plus"] != null ? {
    w: common_vendor.o(($event) => $options.clickHandler("plus"), "d2"),
    x: common_vendor.o(($event) => $options.onTouchStart("plus"), "f6"),
    y: common_vendor.o((...args) => $options.clearTimeout && $options.clearTimeout(...args), "f8")
  } : _ctx.showPlus ? {
    A: common_vendor.p({
      name: "plus",
      color: $options.isDisabled("plus") ? "#c8c9cc" : "#323233",
      size: "15",
      bold: true,
      customStyle: _ctx.iconStyle,
      class: "data-v-ea035928"
    }),
    B: common_vendor.o(($event) => $options.clickHandler("plus"), "c3"),
    C: common_vendor.o(($event) => $options.onTouchStart("plus"), "52"),
    D: common_vendor.o((...args) => $options.clearTimeout && $options.clearTimeout(...args), "fc"),
    E: $options.isDisabled("plus") ? 1 : "",
    F: common_vendor.s($options.buttonStyle("plus"))
  } : {}, {
    z: _ctx.showPlus,
    G: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    H: `${_ctx.u_s_b_h}px`,
    I: `${_ctx.u_s_a_i_b}px`,
    J: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ea035928"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-number-box/up-number-box.js.map
