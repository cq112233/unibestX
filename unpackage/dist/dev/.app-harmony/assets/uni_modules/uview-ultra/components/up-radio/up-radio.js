import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { d as defProps } from "./radio.js";
import { a as addUnit, i as error, q as os, d as deepMerge, b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, toDisplayString: _toDisplayString } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpRadioUpRadio";
const { computed, inject, ref, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-radio"
  },
  __dynamicSharedData: true,
  __hash: "5ded71f8",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-radio/up-radio.uvue",
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
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpRadioUpRadioSharedData", sharedDataClassId: 0 })));
    (_b = getCurrentInstance()) === null || _b === void 0 ? null : _b.proxy;
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
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 8, ["up-radio cursor-pointer", [iconPlacementClass.value, borderBottomClass.value]]);
        _setSharedDataStyle(__sharedData, 9, [radioStyle.value]);
        _setSharedDataClass(__sharedData, 10, ["up-radio__icon-wrap cursor-pointer", iconClasses.value]);
        _setSharedDataStyle(__sharedData, 11, [iconWrapStyle.value]);
      });
      _createSharedDataSlot("icon", null, null, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_up_icon, "90b95f5e", {
          class: "up-radio__icon-wrap__icon",
          name: "checkbox-mark",
          size: () => {
            return elIconSize.value;
          },
          color: () => {
            return elIconColor.value;
          }
        });
        _setSharedData(__sharedData, 5, n2?.sharedData);
      });
      _setSharedDataEvent(__sharedData, 6, iconClickHandler);
      _createSharedDataSlot("label", {
        label: () => {
          return __props.label;
        },
        elDisabled: () => {
          return elDisabled.value;
        }
      }, (data) => {
        return _setSharedData(__sharedData, 0, data);
      }, () => {
        _setSharedDataEvent(__sharedData, 1, labelClickHandler);
        _renderSharedDataEffect(() => {
          const _elDisabled = elDisabled.value;
          const _elLabelSize = elLabelSize.value;
          _setSharedDataClass(__sharedData, 2, ["up-radio__label", [_elDisabled ? "up-radio__label--disabled" : ""]]);
          _setSharedDataStyle(__sharedData, 3, {
            color: _elDisabled ? elInactiveColor.value : elLabelColor.value,
            fontSize: _elLabelSize,
            lineHeight: _elLabelSize
          });
          _setSharedData(__sharedData, 4, _toDisplayString(__props.label));
        });
      });
      _setSharedDataEvent(__sharedData, 7, wrapperClickHandler);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-radio.js.map
