import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { a as addUnit, d as deepMerge, b as addStyle, i as formValidate } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, watch, inject, getCurrentInstance, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-checkbox"
  },
  __name: "up-checkbox",
  props: {
    name: {
      type: [String, Number, Boolean],
      default: ""
    },
    shape: {
      type: String,
      default: ""
    },
    size: {
      type: [String, Number],
      default: ""
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    },
    iconSize: {
      type: [String, Number],
      default: ""
    },
    iconColor: {
      type: String,
      default: ""
    },
    label: {
      type: [String, Number],
      default: ""
    },
    labelColor: {
      type: String,
      default: ""
    },
    labelSize: {
      type: [String, Number],
      default: ""
    },
    labelDisabled: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    usedAlone: {
      type: Boolean,
      default: false
    }
  },
  emits: ["change", "update:checked"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance();
    const parentGroup = inject("upCheckboxGroup", null);
    const localChecked = ref(props.checked);
    watch(() => {
      return props.checked;
    }, (val) => {
      localChecked.value = val;
    });
    const isChecked = computed(() => {
      if (props.usedAlone || parentGroup == null || parentGroup.props == null) {
        return localChecked.value;
      }
      const groupVal = parentGroup.props.modelValue;
      if (groupVal != null && props.name != null) {
        return groupVal.some((element = null) => {
          return element.toString() == props.name.toString();
        });
      }
      return false;
    });
    const elDisabled = computed(() => {
      var _a2;
      if (props.disabled)
        return true;
      if (!props.usedAlone && parentGroup != null && parentGroup.props != null) {
        return (_a2 = parentGroup.props.disabled) !== null && _a2 !== void 0 ? _a2 : false;
      }
      return false;
    });
    const elLabelDisabled = computed(() => {
      var _a2;
      if (props.labelDisabled)
        return true;
      if (!props.usedAlone && parentGroup != null && parentGroup.props != null) {
        return (_a2 = parentGroup.props.labelDisabled) !== null && _a2 !== void 0 ? _a2 : false;
      }
      return false;
    });
    const elSize = computed(() => {
      if (props.size != "")
        return addUnit(props.size);
      if (!props.usedAlone && parentGroup != null && parentGroup.props != null && parentGroup.props.size != "") {
        return addUnit(parentGroup.props.size);
      }
      return "21px";
    });
    const elIconSize = computed(() => {
      if (props.iconSize != "")
        return addUnit(props.iconSize);
      if (!props.usedAlone && parentGroup != null && parentGroup.props != null && parentGroup.props.iconSize != "") {
        return addUnit(parentGroup.props.iconSize);
      }
      return "12px";
    });
    const elActiveColor = computed(() => {
      if (props.activeColor != "")
        return props.activeColor;
      if (!props.usedAlone && parentGroup != null && parentGroup.props != null && parentGroup.props.activeColor != "") {
        return parentGroup.props.activeColor;
      }
      return "";
    });
    const elInactiveColor = computed(() => {
      if (props.inactiveColor != "")
        return props.inactiveColor;
      if (!props.usedAlone && parentGroup != null && parentGroup.props != null && parentGroup.props.inactiveColor != "") {
        return parentGroup.props.inactiveColor;
      }
      return "#c8c9cc";
    });
    const elLabelColor = computed(() => {
      if (props.labelColor != "")
        return props.labelColor;
      if (!props.usedAlone && parentGroup != null && parentGroup.props != null && parentGroup.props.labelColor != "") {
        return parentGroup.props.labelColor;
      }
      return "#606266";
    });
    const elShape = computed(() => {
      if (props.shape != "")
        return props.shape;
      if (!props.usedAlone && parentGroup != null && parentGroup.props != null && parentGroup.props.shape != "") {
        return parentGroup.props.shape;
      }
      return "circle";
    });
    const elLabelSize = computed(() => {
      if (props.labelSize != "")
        return addUnit(props.labelSize);
      if (!props.usedAlone && parentGroup != null && parentGroup.props != null && parentGroup.props.labelSize != "") {
        return addUnit(parentGroup.props.labelSize);
      }
      return "15px";
    });
    const elIconColor = computed(() => {
      const iconColor = props.iconColor != "" ? props.iconColor : !props.usedAlone && parentGroup != null && parentGroup.props != null && parentGroup.props.iconColor != "" ? parentGroup.props.iconColor : "#ffffff";
      if (elDisabled.value) {
        return isChecked.value ? elInactiveColor.value : "transparent";
      }
      return isChecked.value ? iconColor : "transparent";
    });
    const elIconPlacement = computed(() => {
      if (!props.usedAlone && parentGroup != null && parentGroup.props != null && parentGroup.props.iconPlacement != "") {
        return parentGroup.props.iconPlacement;
      }
      return "left";
    });
    const elBorderBottom = computed(() => {
      var _a2;
      if (!props.usedAlone && parentGroup != null && parentGroup.props != null) {
        return (_a2 = parentGroup.props.borderBottom) !== null && _a2 !== void 0 ? _a2 : false;
      }
      return false;
    });
    const elPlacement = computed(() => {
      var _a2;
      if (!props.usedAlone && parentGroup != null && parentGroup.props != null) {
        return (_a2 = parentGroup.props.placement) !== null && _a2 !== void 0 ? _a2 : "row";
      }
      return "row";
    });
    const iconClasses = computed(() => {
      let classes = ["up-checkbox__icon-wrap--" + elShape.value];
      if (elDisabled.value) {
        classes.push("up-checkbox__icon-wrap--disabled");
      }
      if (isChecked.value && elDisabled.value) {
        classes.push("up-checkbox__icon-wrap--disabled--checked");
      }
      if (isChecked.value && !elDisabled.value) {
        classes.push("up-checkbox__icon-wrap--checked");
      }
      return classes.join(" ");
    });
    const iconWrapStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (isChecked.value && !elDisabled.value) {
        if (elActiveColor.value != "") {
          style["backgroundColor"] = elActiveColor.value;
          style["borderColor"] = elActiveColor.value;
        }
      } else if (isChecked.value && elDisabled.value) {
        style["backgroundColor"] = "#ebedf0";
        style["borderColor"] = "#c8c9cc";
      } else {
        style["backgroundColor"] = "#ffffff";
        style["borderColor"] = elInactiveColor.value;
      }
      style["width"] = elSize.value;
      style["height"] = elSize.value;
      if (elIconPlacement.value == "right") {
        style["marginRight"] = 0;
      }
      return style;
    });
    const checkboxStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (elBorderBottom.value && elPlacement.value == "column") {
        style["paddingBottom"] = "8px";
      }
      return deepMerge(style, addStyle(props.customStyle));
    });
    function setCheckboxCheckedStatus() {
      if (props.usedAlone || parentGroup == null) {
        localChecked.value = !localChecked.value;
        emit("change", localChecked.value);
        emit("update:checked", localChecked.value);
      } else {
        parentGroup.onCheckboxToggle(props.name);
        emit("change", !isChecked.value);
      }
      nextTick(() => {
        formValidate(instance === null || instance === void 0 ? null : instance.proxy, "change");
      });
    }
    function iconClickHandler(e) {
      if (!elDisabled.value) {
        setCheckboxCheckedStatus();
      }
    }
    function wrapperClickHandler(e) {
      iconClickHandler();
    }
    function labelClickHandler(e) {
      if (!elLabelDisabled.value && !elDisabled.value) {
        setCheckboxCheckedStatus();
      }
    }
    const __returned__ = { props, emit, instance, parentGroup, localChecked, isChecked, elDisabled, elLabelDisabled, elSize, elIconSize, elActiveColor, elInactiveColor, elLabelColor, elShape, elLabelSize, elIconColor, elIconPlacement, elBorderBottom, elPlacement, iconClasses, iconWrapStyle, checkboxStyle, setCheckboxCheckedStatus, iconClickHandler, wrapperClickHandler, labelClickHandler };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-checkbox": { "": { "display": "flex", "flexDirection": "row", "overflow": "hidden", "alignItems": "center", "marginBottom": 5, "marginTop": 5 } }, "up-checkbox-label--left": { "": { "flexDirection": "row" } }, "up-checkbox-label--right": { "": { "flexDirection": "row-reverse", "justifyContent": "space-between" } }, "up-checkbox__icon-wrap": { "": { "boxSizing": "border-box", "transitionProperty": "borderColor,backgroundColor,color", "transitionDuration": "0.2s", "color": "rgba(0,0,0,0)", "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "textAlign": "center", "marginRight": 6, "fontSize": 6, "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopColor": "#c8c9cc", "borderRightColor": "#c8c9cc", "borderBottomColor": "#c8c9cc", "borderLeftColor": "#c8c9cc", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "up-checkbox__icon-wrap--circle": { "": { "borderTopLeftRadius": 99, "borderTopRightRadius": 99, "borderBottomRightRadius": 99, "borderBottomLeftRadius": 99 } }, "up-checkbox__icon-wrap--square": { "": { "borderTopLeftRadius": 3, "borderTopRightRadius": 3, "borderBottomRightRadius": 3, "borderBottomLeftRadius": 3 } }, "up-checkbox__icon-wrap--checked": { "": { "color": "#ffffff", "!backgroundColor": "var(--theme-color, #0957de)", "!borderTopColor": "var(--theme-color, #0957de)", "!borderRightColor": "var(--theme-color, #0957de)", "!borderBottomColor": "var(--theme-color, #0957de)", "!borderLeftColor": "var(--theme-color, #0957de)" } }, "up-checkbox__icon-wrap--disabled": { "": { "!backgroundColor": "#ebedf0" } }, "up-checkbox__icon-wrap--disabled--checked": { "": { "!color": "#c8c9cc" } }, "up-checkbox__label": { "": { "marginLeft": 5, "marginRight": 12, "color": "#606266", "fontSize": 15 } }, "up-checkbox__label--disabled": { "": { "color": "#c8c9cc" } }, "@TRANSITION": { "up-checkbox__icon-wrap": { "property": "borderColor,backgroundColor,color", "duration": "0.2s" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderSlot: _renderSlot, resolveComponent: _resolveComponent, createVNode: _createVNode, withModifiers: _withModifiers, normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-checkbox cursor-pointer", [
        `up-checkbox-label--` + $setup.elIconPlacement,
        $setup.elBorderBottom && $setup.elPlacement == "column" ? "up-border-bottom" : ""
      ]]),
      style: _normalizeStyle([$setup.checkboxStyle]),
      onClick: _withModifiers($setup.wrapperClickHandler, ["stop"])
    },
    [
      _createElementVNode(
        "view",
        {
          class: _normalizeClass(["up-checkbox__icon-wrap cursor-pointer", $setup.iconClasses]),
          onClick: _withModifiers($setup.iconClickHandler, ["stop"]),
          style: _normalizeStyle([$setup.iconWrapStyle])
        },
        [
          _renderSlot(_ctx.$slots, "icon", {}, () => [
            _createVNode(_component_up_icon, {
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
      _renderSlot(_ctx.$slots, "label", {
        label: $props.label,
        elDisabled: $setup.elDisabled
      }, () => [
        _createElementVNode(
          "text",
          {
            onClick: _withModifiers($setup.labelClickHandler, ["stop"]),
            style: _normalizeStyle({
              color: $setup.elDisabled ? $setup.elInactiveColor : $setup.elLabelColor,
              fontSize: $setup.elLabelSize,
              lineHeight: $setup.elLabelSize
            })
          },
          _toDisplayString($props.label),
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
