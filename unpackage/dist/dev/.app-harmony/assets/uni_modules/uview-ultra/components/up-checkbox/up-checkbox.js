import { _ as __easycom_0 } from "../up-icon/up-icon.js";
const { defineComponent, getCurrentInstance, ref, computed, watch, onMounted, resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, withModifiers, createElementVNode, renderSlot, createVNode, toDisplayString } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import "../../libs/function/test.js";
import { a as addUnit, f as error, d as deepMerge, b as addStyle } from "../../libs/function/index.js";
import { d as defProps } from "./checkbox.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-checkbox"
  },
  __name: "up-checkbox",
  props: {
    // checkbox组件的标示符
    name: {
      type: [String, Number, Boolean],
      default: defProps.getAny("checkbox.name")
    },
    // 形状，square为方形，circle为圆型
    shape: {
      type: String,
      default: defProps.getString("checkbox.shape")
    },
    // 整体的大小
    size: {
      type: [String, Number],
      default: defProps.getAny("checkbox.size")
    },
    // 是否默认选中
    checked: {
      type: Boolean,
      default: defProps.getBoolean("checkbox.checked")
    },
    // 是否禁用
    disabled: {
      type: [String, Boolean],
      default: defProps.getAny("checkbox.disabled")
    },
    // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
    activeColor: {
      type: String,
      default: defProps.getString("checkbox.activeColor")
    },
    // 未选中的颜色
    inactiveColor: {
      type: String,
      default: defProps.getString("checkbox.inactiveColor")
    },
    // 图标的大小，单位px
    iconSize: {
      type: [String, Number],
      default: defProps.getAny("checkbox.iconSize")
    },
    // 图标颜色
    iconColor: {
      type: String,
      default: defProps.getString("checkbox.iconColor")
    },
    // label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式
    label: {
      type: [String, Number],
      default: defProps.getAny("checkbox.label")
    },
    // label的颜色
    labelColor: {
      type: String,
      default: defProps.getString("checkbox.labelColor")
    },
    // label的字体大小，px单位
    labelSize: {
      type: [String, Number],
      default: defProps.getAny("checkbox.labelSize")
    },
    // 是否禁止点击提示语选中复选框
    labelDisabled: {
      type: [String, Boolean],
      default: defProps.getAny("checkbox.labelDisabled")
    },
    // 定义需要用到的外部样式
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    // 是否独立使用
    usedAlone: {
      type: Boolean,
      default: false
    }
  },
  emits: ["change", "update:checked"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const _b = useUltraUI(), parent = _b.parent, parentData = _b.parentData, getParentData = _b.getParentData;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const emit = __emit;
    const isChecked = ref(false);
    const elDisabled = computed(() => {
      let disabledVal = props.disabled;
      if (disabledVal != null && disabledVal.toString() != "") {
        return disabledVal.toString() == "true";
      } else {
        return parentData.value["disabled"] != null ? parentData.value["disabled"] : false;
      }
    });
    const elLabelDisabled = computed(() => {
      let labelDisabledVal = props.labelDisabled;
      if (labelDisabledVal != null && labelDisabledVal.toString() != "") {
        return labelDisabledVal.toString() == "true";
      } else {
        return parentData.value["labelDisabled"] != null ? parentData.value["labelDisabled"] : false;
      }
    });
    const elSize = computed(() => {
      return props.size.toString() != "" ? props.size.toString() : parentData.value["size"] != null ? parentData.value["size"].toString() : "21";
    });
    const elIconSize = computed(() => {
      return props.iconSize.toString() != "" ? props.iconSize.toString() : parentData.value["iconSize"] != null ? parentData.value["iconSize"].toString() : "12";
    });
    const elActiveColor = computed(() => {
      const activeColorProp = props.activeColor;
      if (activeColorProp != null && activeColorProp.toString() != "") {
        return activeColorProp.toString();
      }
      const parentActiveColor = parentData.value["activeColor"];
      if (parentActiveColor != null && parentActiveColor.toString() != "") {
        return parentActiveColor.toString();
      }
      return "#2979ff";
    });
    const elInactiveColor = computed(() => {
      const inactiveColorProp = props.inactiveColor;
      if (inactiveColorProp != null && inactiveColorProp.toString() != "") {
        return inactiveColorProp.toString();
      }
      const parentInactiveColor = parentData.value["inactiveColor"];
      if (parentInactiveColor != null && parentInactiveColor.toString() != "") {
        return parentInactiveColor.toString();
      }
      return "#c8c9cc";
    });
    const elLabelColor = computed(() => {
      return props.labelColor != null ? props.labelColor.toString() : parentData.value["labelColor"] != null ? parentData.value["labelColor"].toString() : "#606266";
    });
    const elShape = computed(() => {
      return props.shape != null ? props.shape.toString() : parentData.value["shape"] != null ? parentData.value["shape"].toString() : "circle";
    });
    const elLabelSize = computed(() => {
      return addUnit(props.labelSize != null ? props.labelSize.toString() : parentData.value["labelSize"] != null ? parentData.value["labelSize"].toString() : "15");
    });
    const elIconColor = computed(() => {
      const iconColor = props.iconColor.toString() != "" ? props.iconColor.toString() : parentData.value["iconColor"] != null ? parentData.value["iconColor"].toString() : "#ffffff";
      if (elDisabled.value) {
        return isChecked.value ? elInactiveColor.value : "transparent";
      } else {
        return isChecked.value ? iconColor : "transparent";
      }
    });
    const iconClasses = computed(() => {
      let classes = [];
      classes.push("up-checkbox__icon-wrap--" + elShape.value.toString());
      if (elDisabled.value) {
        classes.push("up-checkbox__icon-wrap--disabled");
      }
      if (isChecked.value && elDisabled.value) {
        classes.push("up-checkbox__icon-wrap--disabled--checked");
      }
      if (isChecked.value && !elDisabled.value && elActiveColor.value == "#2979ff") {
        classes.push("up-checkbox__icon-wrap--active");
      }
      let classStr = "";
      classStr = classes.join(" ");
      return classStr;
    });
    const iconWrapStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (isChecked.value && !elDisabled.value) {
        if (elActiveColor.value != "#2979ff") {
          style["backgroundColor"] = elActiveColor.value;
          style["borderColor"] = elActiveColor.value;
        }
      } else {
        style["backgroundColor"] = "#ffffff";
        style["borderColor"] = elInactiveColor.value;
      }
      style["width"] = addUnit(elSize.value);
      style["height"] = addUnit(elSize.value);
      if (!props.usedAlone && parentData.value != null && parentData.value["iconPlacement"] != null) {
        if (parentData.value["iconPlacement"].toString() == "right") {
          style["marginRight"] = 0;
        }
      }
      return style;
    });
    const checkboxStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (!props.usedAlone && parentData.value != null && parentData.value["borderBottom"] != null) {
        if (parentData.value["borderBottom"].toString() == "true" && parentData.value["placement"] == "row") {
          error("检测到您将borderBottom设置为true，需要同时将up-checkbox-group的placement设置为column才有效");
        }
        if (parentData.value["borderBottom"].toString() == "true" && parentData.value["placement"] == "column") {
          style["paddingBottom"] = "8px";
        }
      }
      return deepMerge(style, addStyle(props.customStyle));
    });
    const init = function() {
      if (!props.usedAlone) {
        parentData.value = new UTSJSONObject({
          iconSize: 12,
          labelDisabled: null,
          disabled: null,
          shape: "square",
          activeColor: null,
          inactiveColor: null,
          size: 18,
          modelValue: null,
          iconColor: null,
          placement: "row",
          borderBottom: false,
          iconPlacement: "left"
        });
        getParentData("up-checkbox-group", instance, false);
        if (parent.value == null) {
          error("up-checkbox必须搭配up-checkbox-group组件使用");
        }
        const value = parentData.value["modelValue"];
        if (props.checked) {
          isChecked.value = true;
        } else if (value != null) {
          const valueTmp = value;
          if (valueTmp != null) {
            const even = (element = null) => {
              return element.toString() == props.name.toString();
            };
            isChecked.value = valueTmp.some(even);
          }
        }
      } else {
        if (props.checked) {
          isChecked.value = true;
        }
      }
    };
    function emitEvent() {
      emit("change", isChecked.value);
      if (props.usedAlone) {
        emit("update:checked", isChecked.value);
      }
      setTimeout(() => {
      }, 10);
    }
    function setRadioCheckedStatus() {
      isChecked.value = !isChecked.value;
      emitEvent();
      if (!props.usedAlone && parent.value != null) {
        parent.value.$callMethod("unCheckedOther", instance);
      }
    }
    function iconClickHandler(e) {
      e.stopPropagation();
      if (!elDisabled.value) {
        setRadioCheckedStatus();
      }
    }
    function wrapperClickHandler(e) {
      if (!props.usedAlone && parentData.value != null && parentData.value["iconPlacement"] != null) {
        if (parentData.value["iconPlacement"].toString() == "right") {
          iconClickHandler(e);
        } else {
          iconClickHandler(e);
        }
      } else {
        iconClickHandler(e);
      }
    }
    function labelClickHandler(e) {
      e.stopPropagation();
      if (!elLabelDisabled.value && !elDisabled.value) {
        setRadioCheckedStatus();
      }
    }
    watch(() => {
      return props.checked;
    }, (newVal) => {
      if (newVal != isChecked.value) {
        isChecked.value = newVal;
      }
    });
    onMounted(() => {
      init();
    });
    const getInternalState = () => {
      return new UTSJSONObject({
        name: props.name,
        isChecked: isChecked.value
      });
    };
    __expose({
      init,
      getInternalState
    });
    const __returned__ = { parent, parentData, getParentData, instance, props, emit, isChecked, elDisabled, elLabelDisabled, elSize, elIconSize, elActiveColor, elInactiveColor, elLabelColor, elShape, elLabelSize, elIconColor, iconClasses, iconWrapStyle, checkboxStyle, init, emitEvent, setRadioCheckedStatus, iconClickHandler, wrapperClickHandler, labelClickHandler, getInternalState };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-checkbox": { "": { "display": "flex", "flexDirection": "row", "overflow": "hidden", "alignItems": "center", "marginBottom": 5, "marginTop": 5 } }, "up-checkbox-label--left": { "": { "flexDirection": "row" } }, "up-checkbox-label--right": { "": { "flexDirection": "row-reverse", "justifyContent": "space-between" } }, "up-checkbox__icon-wrap": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "marginRight": 6, "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopColor": "#c8c9cc", "borderRightColor": "#c8c9cc", "borderBottomColor": "#c8c9cc", "borderLeftColor": "#c8c9cc", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "up-checkbox__icon-wrap--circle": { "": { "borderTopLeftRadius": 99, "borderTopRightRadius": 99, "borderBottomRightRadius": 99, "borderBottomLeftRadius": 99 } }, "up-checkbox__icon-wrap--square": { "": { "borderTopLeftRadius": 3, "borderTopRightRadius": 3, "borderBottomRightRadius": 3, "borderBottomLeftRadius": 3 } }, "up-checkbox__icon-wrap--checked": { "": { "color": "#ffffff", "backgroundColor": "#FF0000", "borderTopColor": "#2979ff", "borderRightColor": "#2979ff", "borderBottomColor": "#2979ff", "borderLeftColor": "#2979ff" } }, "up-checkbox__icon-wrap--active": { "": { "backgroundColor": "var(--theme-color, #0957de)", "borderTopColor": "var(--theme-color, #0957de)", "borderRightColor": "var(--theme-color, #0957de)", "borderBottomColor": "var(--theme-color, #0957de)", "borderLeftColor": "var(--theme-color, #0957de)" } }, "up-checkbox__icon-wrap--disabled": { "": { "!backgroundColor": "#ebedf0" } }, "up-checkbox__icon-wrap--disabled--checked": { "": { "!color": "#c8c9cc" } }, "up-checkbox__label": { "": { "marginLeft": 5, "marginRight": 12, "color": "#606266", "fontSize": 15 } }, "up-checkbox__label--disabled": { "": { "color": "#c8c9cc" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["up-checkbox cursor-pointer", [
        `up-checkbox-label--` + ($setup.parentData["iconPlacement"] != null ? $setup.parentData["iconPlacement"].toString() : ""),
        $setup.parentData["borderBottom"] != false && $setup.parentData["placement"] != null && $setup.parentData["placement"].toString() == "column" ? "up-border-bottom" : ""
      ]]),
      style: normalizeStyle([$setup.checkboxStyle]),
      onClick: withModifiers($setup.wrapperClickHandler, ["stop"])
    },
    [
      createElementVNode(
        "view",
        {
          class: normalizeClass(["up-checkbox__icon-wrap cursor-pointer", $setup.iconClasses]),
          onClick: withModifiers($setup.iconClickHandler, ["stop"]),
          style: normalizeStyle([$setup.iconWrapStyle])
        },
        [
          renderSlot(_ctx.$slots, "icon", {}, () => [
            createVNode(_component_up_icon, {
              class: "up-checkbox__icon-wrap__icon",
              name: "checkbox-mark",
              size: $setup.elIconSize,
              color: $setup.elIconColor
            }, null, 8, ["size", "color"])
          ])
        ],
        6
        /* CLASS, STYLE */
      ),
      renderSlot(_ctx.$slots, "label", {
        label: $props.label,
        elDisabled: $setup.elDisabled
      }, () => [
        createElementVNode(
          "text",
          {
            onClick: withModifiers($setup.labelClickHandler, ["stop"]),
            style: normalizeStyle({
              color: $setup.elDisabled ? $setup.elInactiveColor : $setup.elLabelColor,
              fontSize: $setup.elLabelSize,
              lineHeight: $setup.elLabelSize
            })
          },
          toDisplayString($props.label),
          5
          /* TEXT, STYLE */
        )
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-checkbox/up-checkbox.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-checkbox.js.map
