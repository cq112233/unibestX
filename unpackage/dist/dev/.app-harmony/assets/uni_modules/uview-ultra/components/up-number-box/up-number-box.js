import { _ as __easycom_0 } from "../up-icon/up-icon.js";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, withModifiers, renderSlot, normalizeClass, normalizeStyle, createVNode, createCommentVNode, withDirectives, createElementVNode, vModelText } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { p as propsNumberBox } from "./props.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { f as getPx, a as addUnit } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = defineComponent({
  name: "up-number-box",
  mixins: [mpMixin, mixin, propsNumberBox],
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
      return getPx(this.cursorSpacing);
    },
    // 输入框的样式
    inputStyle() {
      this.disabled || this.disabledInput;
      const style = new UTSJSONObject({
        color: this.color,
        backgroundColor: this.inputBgColor != "" ? this.inputBgColor : this.bgColor,
        height: addUnit(this.buttonSize),
        width: addUnit(this.inputWidth)
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
        width: addUnit(this.buttonWidth),
        height: addUnit(this.buttonSize),
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
      this.$emit("focus", new UTSJSONObject({
        ...event.detail,
        name: this.name
      }));
    },
    // 输入框失去焦点
    onBlur(event) {
      const value = this.format(event.detail.value);
      this.emitChange(value);
      this.$emit("blur", new UTSJSONObject({
        ...event.detail,
        name: this.name
      }));
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
const _style_0 = { "up-number-box": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "up-number-box__plus": { "": { "width": 35, "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "borderTopRightRadius": 4, "borderBottomRightRadius": 4 } }, "up-number-box__minus": { "": { "width": 35, "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "borderTopLeftRadius": 4, "borderBottomLeftRadius": 4 } }, "up-number-box__plus--hover": { "": { "!backgroundColor": "#E6E6E6" } }, "up-number-box__minus--hover": { "": { "!backgroundColor": "#E6E6E6" } }, "up-number-box__plus--disabled": { "": { "backgroundColor": "#f7f8fa" } }, "up-number-box__minus--disabled": { "": { "backgroundColor": "#f7f8fa" } }, "up-number-box__input": { "": { "textAlign": "center", "fontSize": 15, "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "marginTop": 0, "marginRight": 2, "marginBottom": 0, "marginLeft": 2 } }, "up-number-box__input--disabled": { "": { "color": "#c8c9cc", "backgroundColor": "#f2f3f5" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  return openBlock(), createElementBlock("view", { class: "up-number-box" }, [
    _ctx.showMinus && !$options.hideMinus && _ctx.$slots["minus"] != null ? (openBlock(), createElementBlock(
      "view",
      {
        key: 0,
        class: "up-number-box__slot cursor-pointer",
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.clickHandler("minus"), ["stop"])),
        onTouchstart: _cache[1] || (_cache[1] = ($event) => $options.onTouchStart("minus")),
        onTouchend: _cache[2] || (_cache[2] = withModifiers((...args) => $options.clearTimeout && $options.clearTimeout(...args), ["stop"]))
      },
      [
        renderSlot(_ctx.$slots, "minus")
      ],
      32
      /* NEED_HYDRATION */
    )) : _ctx.showMinus && !$options.hideMinus ? (openBlock(), createElementBlock(
      "view",
      {
        key: 1,
        class: normalizeClass(["up-number-box__minus cursor-pointer", { "up-number-box__minus--disabled": $options.isDisabled("minus") }]),
        onClick: _cache[3] || (_cache[3] = withModifiers(($event) => $options.clickHandler("minus"), ["stop"])),
        onTouchstart: _cache[4] || (_cache[4] = ($event) => $options.onTouchStart("minus")),
        onTouchend: _cache[5] || (_cache[5] = withModifiers((...args) => $options.clearTimeout && $options.clearTimeout(...args), ["stop"])),
        "hover-class": "up-number-box__minus--hover",
        "hover-stay-time": "150",
        style: normalizeStyle([$options.buttonStyle("minus")])
      },
      [
        createVNode(_component_up_icon, {
          name: "minus",
          color: $options.isDisabled("minus") ? "#c8c9cc" : "#323233",
          size: "15",
          bold: "",
          customStyle: _ctx.iconStyle
        }, null, 8, ["color", "customStyle"])
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    )) : createCommentVNode("v-if", true),
    !$options.hideMinus ? renderSlot(_ctx.$slots, "input", { key: 2 }, () => [
      withDirectives(createElementVNode("input", {
        disabled: _ctx.disabledInput || _ctx.disabled,
        "cursor-spacing": $options.getCursorSpacing,
        class: normalizeClass([{ "up-number-box__input--disabled": _ctx.disabled || _ctx.disabledInput }, "up-number-box__input"]),
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.currentValue = $event),
        onBlur: _cache[7] || (_cache[7] = (...args) => $options.onBlur && $options.onBlur(...args)),
        onFocus: _cache[8] || (_cache[8] = (...args) => $options.onFocus && $options.onFocus(...args)),
        onInput: _cache[9] || (_cache[9] = (...args) => $options.onInput && $options.onInput(...args)),
        type: "number",
        style: normalizeStyle([$options.inputStyle])
      }, null, 46, ["disabled", "cursor-spacing"]), [
        [vModelText, $data.currentValue]
      ])
    ]) : createCommentVNode("v-if", true),
    _ctx.showPlus && _ctx.$slots["plus"] != null ? (openBlock(), createElementBlock(
      "view",
      {
        key: 3,
        class: "up-number-box__slot cursor-pointer",
        onClick: _cache[10] || (_cache[10] = withModifiers(($event) => $options.clickHandler("plus"), ["stop"])),
        onTouchstart: _cache[11] || (_cache[11] = ($event) => $options.onTouchStart("plus")),
        onTouchend: _cache[12] || (_cache[12] = withModifiers((...args) => $options.clearTimeout && $options.clearTimeout(...args), ["stop"]))
      },
      [
        renderSlot(_ctx.$slots, "plus")
      ],
      32
      /* NEED_HYDRATION */
    )) : _ctx.showPlus ? (openBlock(), createElementBlock(
      "view",
      {
        key: 4,
        class: normalizeClass(["up-number-box__plus cursor-pointer", { "up-number-box__minus--disabled": $options.isDisabled("plus") }]),
        onClick: _cache[13] || (_cache[13] = withModifiers(($event) => $options.clickHandler("plus"), ["stop"])),
        onTouchstart: _cache[14] || (_cache[14] = ($event) => $options.onTouchStart("plus")),
        onTouchend: _cache[15] || (_cache[15] = withModifiers((...args) => $options.clearTimeout && $options.clearTimeout(...args), ["stop"])),
        "hover-class": "up-number-box__plus--hover",
        "hover-stay-time": "150",
        style: normalizeStyle([$options.buttonStyle("plus")])
      },
      [
        createVNode(_component_up_icon, {
          name: "plus",
          color: $options.isDisabled("plus") ? "#c8c9cc" : "#323233",
          size: "15",
          bold: "",
          customStyle: _ctx.iconStyle
        }, null, 8, ["color", "customStyle"])
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    )) : createCommentVNode("v-if", true)
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-number-box/up-number-box.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-number-box.js.map
