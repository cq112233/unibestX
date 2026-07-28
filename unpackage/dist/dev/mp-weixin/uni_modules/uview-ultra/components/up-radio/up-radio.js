"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upRadio_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-radio",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upRadio_props.propsRadio],
  data() {
    return {
      checked: false,
      // 当你看到这段代码的时候，
      // 父组件的默认值，因为头条小程序不支持在computed中使用this.parent.shape的形式
      // 故只能使用如此方法
      parentData: new UTSJSONObject({
        iconSize: "12px",
        labelDisabled: false,
        labelColor: "",
        labelSize: "",
        disabled: false,
        shape: "",
        activeColor: "",
        inactiveColor: "",
        size: "18px",
        value: "",
        modelValue: "",
        iconColor: "",
        placement: "row",
        borderBottom: false,
        iconPlacement: "left"
      })
    };
  },
  computed: {
    // 是否禁用，如果父组件up-raios-group禁用的话，将会忽略子组件的配置
    elDisabled() {
      const disabledVal = this.disabled;
      if (disabledVal != null) {
        const disabledStr = disabledVal.toString();
        if (disabledStr != "") {
          return disabledStr == "true";
        }
      }
      return this.parentData["disabled"] != null ? this.parentData["disabled"] : false;
    },
    // 是否禁用label点击
    elLabelDisabled() {
      const labelDisabledVal = this.labelDisabled;
      if (labelDisabledVal != null) {
        const labelDisabledStr = labelDisabledVal.toString();
        if (labelDisabledStr != "") {
          return labelDisabledStr == "true";
        }
      }
      return this.parentData["labelDisabled"] != null ? this.parentData["labelDisabled"] : false;
    },
    // 组件尺寸，对应size的值，默认值为21px
    elSize() {
      const sizeVal = this.size;
      if (sizeVal != null && sizeVal.toString() != "") {
        return sizeVal.toString();
      }
      const parentSizeVal = this.parentData["size"];
      if (parentSizeVal != null && parentSizeVal.toString() != "") {
        return parentSizeVal.toString();
      }
      return "21px";
    },
    // 组件的勾选图标的尺寸，默认12px
    elIconSize() {
      const iconSizeVal = this.iconSize;
      if (iconSizeVal != null && iconSizeVal.toString() != "") {
        return iconSizeVal.toString();
      }
      const parentIconSizeVal = this.parentData["iconSize"];
      if (parentIconSizeVal != null && parentIconSizeVal.toString() != "") {
        return parentIconSizeVal.toString();
      }
      return "12px";
    },
    // 组件选中激活时的颜色
    elActiveColor() {
      const activeColorVal = this.activeColor;
      if (activeColorVal != null && activeColorVal.toString() != "") {
        return activeColorVal.toString();
      }
      const parentActiveColorVal = this.parentData["activeColor"];
      if (parentActiveColorVal != null && parentActiveColorVal.toString() != "") {
        return parentActiveColorVal.toString();
      }
      return "#2979ff";
    },
    // 组件选未中激活时的颜色
    elInactiveColor() {
      const inactiveColorVal = this.inactiveColor;
      if (inactiveColorVal != null && inactiveColorVal.toString() != "") {
        return inactiveColorVal.toString();
      }
      const parentInactiveColorVal = this.parentData["inactiveColor"];
      if (parentInactiveColorVal != null && parentInactiveColorVal.toString() != "") {
        return parentInactiveColorVal.toString();
      }
      return "#c8c9cc";
    },
    // label的颜色
    elLabelColor() {
      const labelColorVal = this.labelColor;
      if (labelColorVal != null && labelColorVal.toString() != "") {
        return labelColorVal.toString();
      }
      const parentLabelColorVal = this.parentData["labelColor"];
      if (parentLabelColorVal != null && parentLabelColorVal.toString() != "") {
        return parentLabelColorVal.toString();
      }
      return "#606266";
    },
    // 组件的形状
    elShape() {
      const shapeVal = this.shape;
      if (shapeVal != null && shapeVal.toString() != "") {
        return shapeVal.toString();
      }
      const parentShapeVal = this.parentData["shape"];
      if (parentShapeVal != null && parentShapeVal.toString() != "") {
        return parentShapeVal.toString();
      }
      return "circle";
    },
    // label大小
    elLabelSize() {
      const labelSizeVal = this.labelSize;
      if (labelSizeVal != null && labelSizeVal.toString() != "") {
        return uni_modules_uviewUltra_libs_function_index.addUnit(labelSizeVal);
      }
      const parentLabelSizeVal = this.parentData["labelSize"];
      if (parentLabelSizeVal != null && parentLabelSizeVal.toString() != "") {
        return uni_modules_uviewUltra_libs_function_index.addUnit(parentLabelSizeVal);
      }
      return uni_modules_uviewUltra_libs_function_index.addUnit("15");
    },
    elIconColor() {
      const iconColorVal = this.iconColor;
      let iconColorStr = "";
      if (iconColorVal != null && iconColorVal.toString() != "") {
        iconColorStr = iconColorVal.toString();
      } else {
        const parentIconColorVal = this.parentData["iconColor"];
        if (parentIconColorVal != null && parentIconColorVal.toString() != "") {
          iconColorStr = parentIconColorVal.toString();
        } else {
          iconColorStr = "#ffffff";
        }
      }
      if (this.elDisabled) {
        return this.checked ? this.elInactiveColor : "transparent";
      } else {
        return this.checked ? iconColorStr : "transparent";
      }
    },
    iconClasses() {
      let classes = [];
      classes.push("up-radio__icon-wrap--" + this.elShape);
      if (this.elDisabled) {
        classes.push("up-radio__icon-wrap--disabled");
      }
      if (this.checked && this.elDisabled) {
        classes.push("up-radio__icon-wrap--disabled--checked");
      }
      if (this.checked && !this.elDisabled && this.elActiveColor == "#2979ff") {
        classes.push("up-radio__icon-wrap--active");
      }
      return classes.join(" ");
    },
    iconWrapStyle() {
      const style = new UTSJSONObject({});
      if (this.checked && !this.elDisabled) {
        if (this.elActiveColor != "#2979ff") {
          style["backgroundColor"] = this.elActiveColor;
          style["borderColor"] = this.elActiveColor;
        }
      } else {
        style["backgroundColor"] = "#ffffff";
        style["borderColor"] = this.elInactiveColor;
      }
      style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.elSize);
      style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.elSize);
      if (this.parentData["iconPlacement"] != null && this.parentData["iconPlacement"].toString() == "right") {
        style["marginRight"] = 0;
      }
      return style;
    },
    radioStyle() {
      const style = new UTSJSONObject({});
      if (this.parentData["borderBottom"] != null && this.parentData["borderBottom"].toString() == "true" && this.parentData["placement"] != null && this.parentData["placement"].toString() == "row") {
        uni_modules_uviewUltra_libs_function_index.error("检测到您将borderBottom设置为true，需要同时将up-radio-group的placement设置为column才有效");
      }
      if (this.parentData["borderBottom"] != null && this.parentData["borderBottom"].toString() == "true" && this.parentData["placement"] != null && this.parentData["placement"].toString() == "column") {
        style["paddingBottom"] = uni_modules_uviewUltra_libs_function_index.os() == "ios" ? "12px" : "8px";
      }
      return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(this.customStyle));
    }
  },
  mounted() {
    this.init();
  },
  emits: ["change"],
  methods: {
    init() {
      this.updateParentData();
      if (this.parent == null) {
        uni_modules_uviewUltra_libs_function_index.error("up-radio必须搭配up-radio-group组件使用");
      }
      const modelValueVal = this.parentData["modelValue"];
      if (modelValueVal != null && this.name != null) {
        this.checked = this.name.toString() == modelValueVal.toString();
      } else {
        this.checked = false;
      }
    },
    updateParentData() {
      this.getParentData("up-radio-group");
    },
    // 点击图标
    iconClickHandler(e) {
      this.preventEvent(e);
      if (!this.elDisabled) {
        this.setRadioCheckedStatus();
      }
    },
    // 横向两端排列时，点击组件即可触发选中事件
    wrapperClickHandler(e) {
      if (this.parentData["iconPlacement"] != null && this.parentData["iconPlacement"].toString() == "right") {
        this.iconClickHandler(e);
      }
    },
    // 点击label
    labelClickHandler(e) {
      this.preventEvent(e);
      if (!this.elLabelDisabled && !this.elDisabled) {
        this.setRadioCheckedStatus();
      }
    },
    emitEvent() {
      if (!this.checked) {
        this.$emit("change", this.name);
        this.$nextTick(() => {
        });
      }
    },
    // 改变组件选中状态
    setRadioCheckedStatus() {
      this.emitEvent();
      this.checked = true;
      if (this.$parent != null) {
        this.$parent.$callMethod("unCheckedOther", this);
      }
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
  return {
    a: common_vendor.p({
      name: "checkbox-mark",
      size: $options.elIconSize,
      color: $options.elIconColor,
      class: "up-radio__icon-wrap__icon data-v-45813f6f"
    }),
    b: common_vendor.o((...args) => $options.iconClickHandler && $options.iconClickHandler(...args), "fd"),
    c: common_vendor.n($options.iconClasses),
    d: common_vendor.s($options.iconWrapStyle),
    e: common_vendor.t(_ctx.label),
    f: common_vendor.n($options.elDisabled ? "up-radio__label--disabled" : ""),
    g: common_vendor.o((...args) => $options.labelClickHandler && $options.labelClickHandler(...args), "1d"),
    h: $options.elDisabled ? $options.elInactiveColor : $options.elLabelColor,
    i: $options.elLabelSize,
    j: $options.elLabelSize,
    k: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    l: common_vendor.o((...args) => $options.wrapperClickHandler && $options.wrapperClickHandler(...args), "99"),
    m: common_vendor.s($options.radioStyle),
    n: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    o: common_vendor.n("up-radio-label--" + ($data.parentData["iconPlacement"] != null ? $data.parentData["iconPlacement"].toString() : "left")),
    p: common_vendor.n($data.parentData["borderBottom"] != null && $data.parentData["borderBottom"].toString() == "true" && $data.parentData["placement"] != null && $data.parentData["placement"].toString() == "column" ? "up-border-bottom" : ""),
    q: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-45813f6f"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-radio/up-radio.js.map
