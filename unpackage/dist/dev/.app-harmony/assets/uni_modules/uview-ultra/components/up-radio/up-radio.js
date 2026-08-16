import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { a as addUnit, v as os, d as deepMerge, b as addStyle, i as formValidate } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, inject, getCurrentInstance, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-radio"
  },
  __name: "up-radio",
  props: {
    name: {
      type: [String, Number, Boolean],
      default: ""
    },
    shape: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    labelDisabled: {
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
    labelSize: {
      type: [String, Number],
      default: ""
    },
    label: {
      type: [String, Number],
      default: ""
    },
    size: {
      type: [String, Number],
      default: ""
    },
    iconColor: {
      type: String,
      default: ""
    },
    labelColor: {
      type: String,
      default: ""
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["change"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance();
    const parentGroup = inject("upRadioGroup", null);
    const checked = computed(() => {
      if (parentGroup != null && parentGroup.props != null) {
        const groupVal = parentGroup.props.modelValue;
        if (groupVal != null && props.name != null) {
          return groupVal.toString() == props.name.toString();
        }
      }
      return false;
    });
    const elDisabled = computed(() => {
      var _a2;
      if (props.disabled)
        return true;
      if (parentGroup != null && parentGroup.props != null) {
        return (_a2 = parentGroup.props.disabled) !== null && _a2 !== void 0 ? _a2 : false;
      }
      return false;
    });
    const elLabelDisabled = computed(() => {
      var _a2;
      if (props.labelDisabled)
        return true;
      if (parentGroup != null && parentGroup.props != null) {
        return (_a2 = parentGroup.props.labelDisabled) !== null && _a2 !== void 0 ? _a2 : false;
      }
      return false;
    });
    const elSize = computed(() => {
      if (props.size != "")
        return addUnit(props.size);
      if (parentGroup != null && parentGroup.props != null && parentGroup.props.size != "") {
        return addUnit(parentGroup.props.size);
      }
      return "21px";
    });
    const elIconSize = computed(() => {
      if (props.iconSize != "")
        return addUnit(props.iconSize);
      if (parentGroup != null && parentGroup.props != null && parentGroup.props.iconSize != "") {
        return addUnit(parentGroup.props.iconSize);
      }
      return "12px";
    });
    const elActiveColor = computed(() => {
      if (props.activeColor != "")
        return props.activeColor;
      if (parentGroup != null && parentGroup.props != null && parentGroup.props.activeColor != "") {
        return parentGroup.props.activeColor;
      }
      return "";
    });
    const elInactiveColor = computed(() => {
      if (props.inactiveColor != "")
        return props.inactiveColor;
      if (parentGroup != null && parentGroup.props != null && parentGroup.props.inactiveColor != "") {
        return parentGroup.props.inactiveColor;
      }
      return "#c8c9cc";
    });
    const elLabelColor = computed(() => {
      if (props.labelColor != "")
        return props.labelColor;
      if (parentGroup != null && parentGroup.props != null && parentGroup.props.labelColor != "") {
        return parentGroup.props.labelColor;
      }
      return "#606266";
    });
    const elShape = computed(() => {
      if (props.shape != "")
        return props.shape;
      if (parentGroup != null && parentGroup.props != null && parentGroup.props.shape != "") {
        return parentGroup.props.shape;
      }
      return "circle";
    });
    const elLabelSize = computed(() => {
      if (props.labelSize != "")
        return addUnit(props.labelSize);
      if (parentGroup != null && parentGroup.props != null && parentGroup.props.labelSize != "") {
        return addUnit(parentGroup.props.labelSize);
      }
      return "15px";
    });
    const elIconColor = computed(() => {
      let iconColorStr = "#ffffff";
      if (props.iconColor != "") {
        iconColorStr = props.iconColor;
      } else if (parentGroup != null && parentGroup.props != null && parentGroup.props.iconColor != "") {
        iconColorStr = parentGroup.props.iconColor;
      }
      if (elDisabled.value) {
        return checked.value ? elInactiveColor.value : "transparent";
      }
      return checked.value ? iconColorStr : "transparent";
    });
    const elIconPlacement = computed(() => {
      if (parentGroup != null && parentGroup.props != null && parentGroup.props.iconPlacement != "") {
        return parentGroup.props.iconPlacement;
      }
      return "left";
    });
    const elBorderBottom = computed(() => {
      var _a2;
      if (parentGroup != null && parentGroup.props != null) {
        return (_a2 = parentGroup.props.borderBottom) !== null && _a2 !== void 0 ? _a2 : false;
      }
      return false;
    });
    const elPlacement = computed(() => {
      var _a2;
      if (parentGroup != null && parentGroup.props != null) {
        return (_a2 = parentGroup.props.placement) !== null && _a2 !== void 0 ? _a2 : "row";
      }
      return "row";
    });
    const iconClasses = computed(() => {
      let classes = ["up-radio__icon-wrap--" + elShape.value];
      if (elDisabled.value) {
        classes.push("up-radio__icon-wrap--disabled");
      }
      if (checked.value && elDisabled.value) {
        classes.push("up-radio__icon-wrap--disabled--checked");
      }
      if (checked.value && !elDisabled.value) {
        classes.push("up-radio__icon-wrap--checked");
      }
      return classes.join(" ");
    });
    const iconWrapStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (checked.value && !elDisabled.value) {
        if (elActiveColor.value != "") {
          style["backgroundColor"] = elActiveColor.value;
          style["borderColor"] = elActiveColor.value;
        }
      } else if (checked.value && elDisabled.value) {
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
    const radioStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (elBorderBottom.value && elPlacement.value == "column") {
        style["paddingBottom"] = os() == "ios" ? "12px" : "8px";
      }
      return deepMerge(style, addStyle(props.customStyle));
    });
    function setRadioCheckedStatus() {
      if (parentGroup != null) {
        parentGroup.onRadioSelected(props.name);
      }
      emit("change", props.name);
      nextTick(() => {
        formValidate(instance === null || instance === void 0 ? null : instance.proxy, "change");
      });
    }
    function iconClickHandler(e) {
      if (!elDisabled.value) {
        setRadioCheckedStatus();
      }
    }
    function wrapperClickHandler(e) {
      if (!elLabelDisabled.value && !elDisabled.value) {
        setRadioCheckedStatus();
      }
    }
    function labelClickHandler(e) {
      if (!elLabelDisabled.value && !elDisabled.value) {
        setRadioCheckedStatus();
      }
    }
    const __returned__ = { props, emit, instance, parentGroup, checked, elDisabled, elLabelDisabled, elSize, elIconSize, elActiveColor, elInactiveColor, elLabelColor, elShape, elLabelSize, elIconColor, elIconPlacement, elBorderBottom, elPlacement, iconClasses, iconWrapStyle, radioStyle, setRadioCheckedStatus, iconClickHandler, wrapperClickHandler, labelClickHandler };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-radio": { "": { "display": "flex", "flexDirection": "row", "overflow": "hidden", "alignItems": "center", "marginBottom": 5, "marginTop": 5 } }, "up-radio-label--left": { "": { "flexDirection": "row" } }, "up-radio-label--right": { "": { "flexDirection": "row-reverse", "justifyContent": "space-between" } }, "up-radio__icon-wrap": { "": { "boxSizing": "border-box", "transitionProperty": "borderColor,backgroundColor,color", "transitionDuration": "0.2s", "color": "rgba(0,0,0,0)", "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "textAlign": "center", "marginRight": 6, "fontSize": 20, "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopColor": "#c8c9cc", "borderRightColor": "#c8c9cc", "borderBottomColor": "#c8c9cc", "borderLeftColor": "#c8c9cc", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "up-radio__icon-wrap--circle": { "": { "borderTopLeftRadius": 50, "borderTopRightRadius": 50, "borderBottomRightRadius": 50, "borderBottomLeftRadius": 50 } }, "up-radio__icon-wrap--square": { "": { "borderTopLeftRadius": 3, "borderTopRightRadius": 3, "borderBottomRightRadius": 3, "borderBottomLeftRadius": 3 } }, "up-radio__icon-wrap--checked": { "": { "color": "#ffffff", "!backgroundColor": "var(--theme-color, #0957de)", "!borderTopColor": "var(--theme-color, #0957de)", "!borderRightColor": "var(--theme-color, #0957de)", "!borderBottomColor": "var(--theme-color, #0957de)", "!borderLeftColor": "var(--theme-color, #0957de)" } }, "up-radio__icon-wrap--disabled": { "": { "!backgroundColor": "#ebedf0" } }, "up-radio__icon-wrap--disabled--checked": { "": { "!color": "#c8c9cc" } }, "up-radio__label": { "": { "marginLeft": 5, "marginRight": 12, "color": "#606266", "fontSize": 15 } }, "up-radio__label--disabled": { "": { "color": "#c8c9cc" } }, "@TRANSITION": { "up-radio__icon-wrap": { "property": "borderColor,backgroundColor,color", "duration": "0.2s" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderSlot: _renderSlot, resolveComponent: _resolveComponent, createVNode: _createVNode, withModifiers: _withModifiers, normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-radio cursor-pointer", [
        "up-radio-label--" + $setup.elIconPlacement,
        $setup.elBorderBottom && $setup.elPlacement == "column" ? "up-border-bottom" : ""
      ]]),
      onClick: _withModifiers($setup.wrapperClickHandler, ["stop"]),
      style: _normalizeStyle([$setup.radioStyle])
    },
    [
      _createElementVNode(
        "view",
        {
          class: _normalizeClass(["up-radio__icon-wrap cursor-pointer", $setup.iconClasses]),
          onClick: _withModifiers($setup.iconClickHandler, ["stop"]),
          style: _normalizeStyle([$setup.iconWrapStyle])
        },
        [
          _renderSlot(_ctx.$slots, "icon", {}, () => [
            _createVNode(_component_up_icon, {
              class: "up-radio__icon-wrap__icon",
              name: "checkbox-mark",
              size: $setup.elIconSize,
              color: $setup.elIconColor
            }, null, 8, ["size", "color"])
          ])
        ],
        6
        /* CLASS, STYLE */
      ),
      _createElementVNode(
        "text",
        {
          class: _normalizeClass(["up-radio__label", [$setup.elDisabled ? "up-radio__label--disabled" : ""]]),
          onClick: _withModifiers($setup.labelClickHandler, ["stop"]),
          style: _normalizeStyle({
            color: $setup.elDisabled ? $setup.elInactiveColor : $setup.elLabelColor,
            fontSize: $setup.elLabelSize,
            lineHeight: $setup.elLabelSize
          })
        },
        _toDisplayString($props.label),
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
