import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-radio/radio&";
import { a as addUnit, i as error, q as os, d as deepMerge, b as addStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, inject, ref, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-radio"
  },
  __name: "up-radio",
  props: {
    // radio的名称
    name: {
      type: [String, Number, Boolean],
      default: defProps.getString("radio.name")
    },
    // 形状，square为方形，circle为圆型
    shape: {
      type: String,
      default: defProps.getString("radio.shape")
    },
    // 是否禁用
    disabled: {
      type: [String, Boolean],
      default: defProps.getString("radio.disabled")
    },
    // 是否禁止点击提示语选中单选框
    labelDisabled: {
      type: [String, Boolean],
      default: defProps.getString("radio.labelDisabled")
    },
    // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
    activeColor: {
      type: String,
      default: defProps.getString("radio.activeColor")
    },
    // 未选中的颜色
    inactiveColor: {
      type: String,
      default: defProps.getString("radio.inactiveColor")
    },
    // 图标的大小，单位px
    iconSize: {
      type: [String, Number],
      default: defProps.getString("radio.iconSize")
    },
    // label的字体大小，px单位
    labelSize: {
      type: [String, Number],
      default: defProps.getString("radio.labelSize")
    },
    // label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式
    label: {
      type: [String, Number],
      default: defProps.getString("radio.label")
    },
    // 整体的大小
    size: {
      type: [String, Number],
      default: defProps.getString("radio.size")
    },
    // 图标颜色
    iconColor: {
      type: String,
      default: defProps.getString("radio.iconColor")
    },
    // label的颜色
    labelColor: {
      type: String,
      default: defProps.getString("radio.labelColor")
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
    var _b;
    var __expose = _a.expose, __emit = _a.emit;
    const instance = (_b = getCurrentInstance()) === null || _b === void 0 ? null : _b.proxy;
    const props = __props;
    const emit = __emit;
    const parentProps = inject("upRadioGroupProps", null);
    const parentChange = inject("upRadioGroupChange", null);
    const selfChecked = ref(false);
    const isChecked = computed(() => {
      if (!props.usedAlone && parentProps != null && parentProps.value != null) {
        const parentVal = parentProps.value["modelValue"];
        if (parentVal != null && props.name != null) {
          return parentVal.toString() == props.name.toString();
        }
        return false;
      }
      return selfChecked.value;
    });
    const elDisabled = computed(() => {
      const disabledVal = props.disabled;
      if (disabledVal != null && disabledVal.toString() != "") {
        return disabledVal.toString() == "true";
      }
      if (!props.usedAlone && parentProps != null && parentProps.value != null) {
        const parentDisabled = parentProps.value["disabled"];
        if (parentDisabled != null) {
          return parentDisabled;
        }
      }
      return false;
    });
    const elLabelDisabled = computed(() => {
      const labelDisabledVal = props.labelDisabled;
      if (labelDisabledVal != null && labelDisabledVal.toString() != "") {
        return labelDisabledVal.toString() == "true";
      }
      if (!props.usedAlone && parentProps != null && parentProps.value != null) {
        const parentLabelDisabled = parentProps.value["labelDisabled"];
        if (parentLabelDisabled != null) {
          return parentLabelDisabled;
        }
      }
      return false;
    });
    const elSize = computed(() => {
      const sizeVal = props.size;
      if (sizeVal != null && sizeVal.toString() != "") {
        return sizeVal.toString();
      }
      if (!props.usedAlone && parentProps != null && parentProps.value != null) {
        const parentSize = parentProps.value["size"];
        if (parentSize != null && parentSize.toString() != "") {
          return parentSize.toString();
        }
      }
      return "21";
    });
    const elIconSize = computed(() => {
      const iconSizeVal = props.iconSize;
      if (iconSizeVal != null && iconSizeVal.toString() != "") {
        return iconSizeVal.toString();
      }
      if (!props.usedAlone && parentProps != null && parentProps.value != null) {
        const parentIconSize = parentProps.value["iconSize"];
        if (parentIconSize != null && parentIconSize.toString() != "") {
          return parentIconSize.toString();
        }
      }
      return "12";
    });
    const elActiveColor = computed(() => {
      const activeColorVal = props.activeColor;
      if (activeColorVal != null && activeColorVal.toString() != "") {
        return activeColorVal.toString();
      }
      if (!props.usedAlone && parentProps != null && parentProps.value != null) {
        const parentActiveColor = parentProps.value["activeColor"];
        if (parentActiveColor != null && parentActiveColor.toString() != "") {
          return parentActiveColor.toString();
        }
      }
      return "#2979ff";
    });
    const elInactiveColor = computed(() => {
      const inactiveColorVal = props.inactiveColor;
      if (inactiveColorVal != null && inactiveColorVal.toString() != "") {
        return inactiveColorVal.toString();
      }
      if (!props.usedAlone && parentProps != null && parentProps.value != null) {
        const parentInactiveColor = parentProps.value["inactiveColor"];
        if (parentInactiveColor != null && parentInactiveColor.toString() != "") {
          return parentInactiveColor.toString();
        }
      }
      return "#c8c9cc";
    });
    const elLabelColor = computed(() => {
      const labelColorVal = props.labelColor;
      if (labelColorVal != null && labelColorVal.toString() != "") {
        return labelColorVal.toString();
      }
      if (!props.usedAlone && parentProps != null && parentProps.value != null) {
        const parentLabelColor = parentProps.value["labelColor"];
        if (parentLabelColor != null && parentLabelColor.toString() != "") {
          return parentLabelColor.toString();
        }
      }
      return "#606266";
    });
    const elShape = computed(() => {
      const shapeVal = props.shape;
      if (shapeVal != null && shapeVal.toString() != "") {
        return shapeVal.toString();
      }
      if (!props.usedAlone && parentProps != null && parentProps.value != null) {
        const parentShape = parentProps.value["shape"];
        if (parentShape != null && parentShape.toString() != "") {
          return parentShape.toString();
        }
      }
      return "circle";
    });
    const elLabelSize = computed(() => {
      const labelSizeVal = props.labelSize;
      if (labelSizeVal != null && labelSizeVal.toString() != "") {
        return addUnit(labelSizeVal);
      }
      if (!props.usedAlone && parentProps != null && parentProps.value != null) {
        const parentLabelSize = parentProps.value["labelSize"];
        if (parentLabelSize != null && parentLabelSize.toString() != "") {
          return addUnit(parentLabelSize);
        }
      }
      return addUnit("15");
    });
    const elIconColor = computed(() => {
      let iconColorStr = "#ffffff";
      const iconColorVal = props.iconColor;
      if (iconColorVal != null && iconColorVal.toString() != "") {
        iconColorStr = iconColorVal.toString();
      } else if (!props.usedAlone && parentProps != null && parentProps.value != null) {
        const parentIconColor = parentProps.value["iconColor"];
        if (parentIconColor != null && parentIconColor.toString() != "") {
          iconColorStr = parentIconColor.toString();
        }
      }
      if (elDisabled.value) {
        return isChecked.value ? elInactiveColor.value : "transparent";
      } else {
        return isChecked.value ? iconColorStr : "transparent";
      }
    });
    const iconClasses = computed(() => {
      let classes = [];
      classes.push("up-radio__icon-wrap--" + elShape.value);
      if (elDisabled.value) {
        classes.push("up-radio__icon-wrap--disabled");
      }
      if (isChecked.value && elDisabled.value) {
        classes.push("up-radio__icon-wrap--disabled--checked");
      }
      if (isChecked.value && !elDisabled.value && elActiveColor.value == "#2979ff") {
        classes.push("up-radio__icon-wrap--active");
      }
      return classes.join(" ");
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
      if (!props.usedAlone && parentProps != null && parentProps.value != null) {
        const parentPlacement = parentProps.value["iconPlacement"];
        if (parentPlacement != null && parentPlacement.toString() == "right") {
          style["marginRight"] = 0;
        }
      }
      return style;
    });
    const radioStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (!props.usedAlone && parentProps != null && parentProps.value != null) {
        const borderBottom = parentProps.value["borderBottom"];
        const placement = parentProps.value["placement"];
        if (borderBottom != null && borderBottom.toString() == "true" && placement != null && placement.toString() == "row") {
          error("检测到您将borderBottom设置为true，需要同时将up-radio-group的placement设置为column才有效");
        }
        if (borderBottom != null && borderBottom.toString() == "true" && placement != null && placement.toString() == "column") {
          style["paddingBottom"] = os() == "ios" ? "12px" : "8px";
        }
      }
      return deepMerge(style, addStyle(props.customStyle));
    });
    const iconPlacementClass = computed(() => {
      if (!props.usedAlone && parentProps != null && parentProps.value != null) {
        const p = parentProps.value["iconPlacement"];
        if (p != null && p.toString() != "") {
          return "up-radio-label--" + p.toString();
        }
      }
      return "up-radio-label--left";
    });
    const borderBottomClass = computed(() => {
      if (!props.usedAlone && parentProps != null && parentProps.value != null) {
        const borderBottom = parentProps.value["borderBottom"];
        const placement = parentProps.value["placement"];
        if (borderBottom != null && borderBottom.toString() == "true" && placement != null && placement.toString() == "column") {
          return "up-border-bottom";
        }
      }
      return "";
    });
    function emitEvent() {
      if (!isChecked.value) {
        emit("change", props.name);
        if (props.usedAlone) {
          emit("update:checked", true);
        }
        setTimeout(() => {
        }, 10);
      }
    }
    function setRadioCheckedStatus() {
      emitEvent();
      if (!props.usedAlone && parentChange != null) {
        parentChange(props.name);
      } else {
        selfChecked.value = true;
      }
    }
    function iconClickHandler(e) {
      e.stopPropagation();
      if (!elDisabled.value) {
        setRadioCheckedStatus();
      }
    }
    function wrapperClickHandler(e) {
      if (!props.usedAlone && parentProps != null && parentProps.value != null) {
        const p = parentProps.value["iconPlacement"];
        if (p != null && p.toString() == "right") {
          iconClickHandler(e);
          return null;
        }
      }
    }
    function labelClickHandler(e) {
      e.stopPropagation();
      if (!elLabelDisabled.value && !elDisabled.value) {
        setRadioCheckedStatus();
      }
    }
    const init = function() {
    };
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
    const __returned__ = { instance, props, emit, parentProps, parentChange, selfChecked, isChecked, elDisabled, elLabelDisabled, elSize, elIconSize, elActiveColor, elInactiveColor, elLabelColor, elShape, elLabelSize, elIconColor, iconClasses, iconWrapStyle, radioStyle, iconPlacementClass, borderBottomClass, emitEvent, setRadioCheckedStatus, iconClickHandler, wrapperClickHandler, labelClickHandler, init, getInternalState };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"u-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-radio":{"":{"display":"flex","flexDirection":"row","overflow":"hidden","alignItems":"center","marginBottom":5,"marginTop":5}},"up-radio-label--left":{"":{"flexDirection":"row"}},"up-radio-label--right":{"":{"flexDirection":"row-reverse","justifyContent":"space-between"}},"up-radio__icon-wrap":{"":{"display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","marginRight":6,"borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1,"borderTopColor":"#c8c9cc","borderRightColor":"#c8c9cc","borderBottomColor":"#c8c9cc","borderLeftColor":"#c8c9cc","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}},"up-radio__icon-wrap--circle":{"":{"borderTopLeftRadius":50,"borderTopRightRadius":50,"borderBottomRightRadius":50,"borderBottomLeftRadius":50}},"up-radio__icon-wrap--square":{"":{"borderTopLeftRadius":3,"borderTopRightRadius":3,"borderBottomRightRadius":3,"borderBottomLeftRadius":3}},"up-radio__icon-wrap--checked":{"":{"backgroundColor":"#FF0000","borderTopColor":"#2979ff","borderRightColor":"#2979ff","borderBottomColor":"#2979ff","borderLeftColor":"#2979ff"}},"up-radio__icon-wrap--active":{"":{"backgroundColor":"var(--theme-color, #0957de)","borderTopColor":"var(--theme-color, #0957de)","borderRightColor":"var(--theme-color, #0957de)","borderBottomColor":"var(--theme-color, #0957de)","borderLeftColor":"var(--theme-color, #0957de)"}},"up-radio__icon-wrap--disabled":{"":{"!backgroundColor":"#ebedf0"}},"up-radio__label":{"":{"marginLeft":5,"marginRight":12,"color":"#606266","fontSize":15}},"up-radio__label--disabled":{"":{"color":"#c8c9cc"}},"up-border-bottom":{"":{"borderBottomWidth":0.5,"borderColor":"#dadbde","borderBottomStyle":"solid"}},"flex":{"":{"display":"flex"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderSlot: _renderSlot, resolveComponent: _resolveComponent, createVNode: _createVNode, withModifiers: _withModifiers, normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-radio cursor-pointer", [$setup.iconPlacementClass, $setup.borderBottomClass]]),
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
      _renderSlot(_ctx.$slots, "label", {
        label: $props.label,
        elDisabled: $setup.elDisabled
      }, () => [
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
      ])
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
