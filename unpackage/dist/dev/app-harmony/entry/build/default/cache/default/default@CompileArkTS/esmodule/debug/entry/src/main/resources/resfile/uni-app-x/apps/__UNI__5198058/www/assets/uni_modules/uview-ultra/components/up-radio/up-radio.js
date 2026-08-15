import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { a as addUnit, v as os, d as deepMerge, b as addStyle, i as formValidate } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, toDisplayString: _toDisplayString } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpRadioUpRadio";
const { computed, inject, getCurrentInstance, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-radio"
  },
  __dynamicSharedData: true,
  __hash: "78e96aaa",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-radio/up-radio.uvue",
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
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpRadioUpRadioSharedData", sharedDataClassId: 0 })));
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
      return "#2979ff";
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
      if (checked.value && !elDisabled.value && elActiveColor.value == "#2979ff") {
        classes.push("up-radio__icon-wrap--active");
      }
      return classes.join(" ");
    });
    const iconWrapStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (checked.value && !elDisabled.value) {
        if (elActiveColor.value != "#2979ff") {
          style["backgroundColor"] = elActiveColor.value;
          style["borderColor"] = elActiveColor.value;
        }
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
      if (elIconPlacement.value == "right") {
        iconClickHandler();
      }
    }
    function labelClickHandler(e) {
      if (!elLabelDisabled.value && !elDisabled.value) {
        setRadioCheckedStatus();
      }
    }
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 4, ["up-radio cursor-pointer", [
          "up-radio-label--" + elIconPlacement.value,
          elBorderBottom.value && elPlacement.value == "column" ? "up-border-bottom" : ""
        ]]);
        _setSharedDataStyle(__sharedData, 5, [radioStyle.value]);
        _setSharedDataClass(__sharedData, 6, ["up-radio__icon-wrap cursor-pointer", iconClasses.value]);
        _setSharedDataStyle(__sharedData, 7, [iconWrapStyle.value]);
      });
      _createSharedDataSlot("icon", null, null, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_up_icon, "90b95890", {
          class: "up-radio__icon-wrap__icon",
          name: "checkbox-mark",
          size: () => {
            return elIconSize.value;
          },
          color: () => {
            return elIconColor.value;
          }
        });
        _setSharedData(__sharedData, 0, n2?.sharedData);
      });
      _setSharedDataEvent(__sharedData, 1, iconClickHandler);
      _setSharedDataEvent(__sharedData, 2, labelClickHandler);
      _setSharedDataEvent(__sharedData, 3, wrapperClickHandler);
      _renderSharedDataEffect(() => {
        const _elDisabled = elDisabled.value;
        const _elLabelSize = elLabelSize.value;
        _setSharedDataClass(__sharedData, 8, ["up-radio__label", [_elDisabled ? "up-radio__label--disabled" : ""]]);
        _setSharedDataStyle(__sharedData, 9, {
          color: _elDisabled ? elInactiveColor.value : elLabelColor.value,
          fontSize: _elLabelSize,
          lineHeight: _elLabelSize
        });
        _setSharedData(__sharedData, 10, _toDisplayString(__props.label));
      });
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
