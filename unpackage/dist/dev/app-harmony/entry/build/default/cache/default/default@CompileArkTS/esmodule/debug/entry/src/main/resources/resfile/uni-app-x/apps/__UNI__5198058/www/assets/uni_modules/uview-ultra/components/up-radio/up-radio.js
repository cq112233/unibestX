import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, withModifiers, normalizeStyle, createElementVNode, renderSlot, createVNode, toDisplayString } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { p as propsRadio } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-radio/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { a as addUnit, f as error, q as os, d as deepMerge, b as addStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-radio",
  mixins: [mpMixin, mixin, propsRadio],
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
        return addUnit(labelSizeVal);
      }
      const parentLabelSizeVal = this.parentData["labelSize"];
      if (parentLabelSizeVal != null && parentLabelSizeVal.toString() != "") {
        return addUnit(parentLabelSizeVal);
      }
      return addUnit("15");
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
      style["width"] = addUnit(this.elSize);
      style["height"] = addUnit(this.elSize);
      if (this.parentData["iconPlacement"] != null && this.parentData["iconPlacement"].toString() == "right") {
        style["marginRight"] = 0;
      }
      return style;
    },
    radioStyle() {
      const style = new UTSJSONObject({});
      if (this.parentData["borderBottom"] != null && this.parentData["borderBottom"].toString() == "true" && this.parentData["placement"] != null && this.parentData["placement"].toString() == "row") {
        error("检测到您将borderBottom设置为true，需要同时将up-radio-group的placement设置为column才有效");
      }
      if (this.parentData["borderBottom"] != null && this.parentData["borderBottom"].toString() == "true" && this.parentData["placement"] != null && this.parentData["placement"].toString() == "column") {
        style["paddingBottom"] = os() == "ios" ? "12px" : "8px";
      }
      return deepMerge(style, addStyle(this.customStyle));
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
        error("up-radio必须搭配up-radio-group组件使用");
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
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-radio": { "": { "display": "flex", "flexDirection": "row", "overflow": "hidden", "alignItems": "center", "marginBottom": 5, "marginTop": 5 } }, "up-radio-label--left": { "": { "flexDirection": "row" } }, "up-radio-label--right": { "": { "flexDirection": "row-reverse", "justifyContent": "space-between" } }, "up-radio__icon-wrap": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "marginRight": 6, "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopColor": "#c8c9cc", "borderRightColor": "#c8c9cc", "borderBottomColor": "#c8c9cc", "borderLeftColor": "#c8c9cc", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "up-radio__icon-wrap--circle": { "": { "borderTopLeftRadius": 50, "borderTopRightRadius": 50, "borderBottomRightRadius": 50, "borderBottomLeftRadius": 50 } }, "up-radio__icon-wrap--square": { "": { "borderTopLeftRadius": 3, "borderTopRightRadius": 3, "borderBottomRightRadius": 3, "borderBottomLeftRadius": 3 } }, "up-radio__icon-wrap--checked": { "": { "backgroundColor": "#FF0000", "borderTopColor": "#2979ff", "borderRightColor": "#2979ff", "borderBottomColor": "#2979ff", "borderLeftColor": "#2979ff" } }, "up-radio__icon-wrap--active": { "": { "backgroundColor": "var(--theme-color, #0957de)", "borderTopColor": "var(--theme-color, #0957de)", "borderRightColor": "var(--theme-color, #0957de)", "borderBottomColor": "var(--theme-color, #0957de)", "borderLeftColor": "var(--theme-color, #0957de)" } }, "up-radio__icon-wrap--disabled": { "": { "!backgroundColor": "#ebedf0" } }, "up-radio__label": { "": { "marginLeft": 5, "marginRight": 12, "color": "#606266", "fontSize": 15 } }, "up-radio__label--disabled": { "": { "color": "#c8c9cc" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["up-radio cursor-pointer", [
        "up-radio-label--" + ($data.parentData["iconPlacement"] != null ? $data.parentData["iconPlacement"].toString() : "left"),
        $data.parentData["borderBottom"] != null && $data.parentData["borderBottom"].toString() == "true" && $data.parentData["placement"] != null && $data.parentData["placement"].toString() == "column" ? "up-border-bottom" : ""
      ]]),
      onClick: _cache[2] || (_cache[2] = withModifiers((...args) => $options.wrapperClickHandler && $options.wrapperClickHandler(...args), ["stop"])),
      style: normalizeStyle([$options.radioStyle])
    },
    [
      createElementVNode(
        "view",
        {
          class: normalizeClass(["up-radio__icon-wrap cursor-pointer", $options.iconClasses]),
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.iconClickHandler && $options.iconClickHandler(...args), ["stop"])),
          style: normalizeStyle([$options.iconWrapStyle])
        },
        [
          renderSlot(_ctx.$slots, "icon", {}, () => [
            createVNode(_component_up_icon, {
              class: "up-radio__icon-wrap__icon",
              name: "checkbox-mark",
              size: $options.elIconSize,
              color: $options.elIconColor
            }, null, 8, ["size", "color"])
          ])
        ],
        6
        /* CLASS, STYLE */
      ),
      createElementVNode(
        "text",
        {
          class: normalizeClass(["up-radio__label", [$options.elDisabled ? "up-radio__label--disabled" : ""]]),
          onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.labelClickHandler && $options.labelClickHandler(...args), ["stop"])),
          style: normalizeStyle({
            color: $options.elDisabled ? $options.elInactiveColor : $options.elLabelColor,
            fontSize: $options.elLabelSize,
            lineHeight: $options.elLabelSize
          })
        },
        toDisplayString(_ctx.label),
        7
        /* TEXT, CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-radio/up-radio.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-radio.js.map
