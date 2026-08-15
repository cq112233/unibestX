import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { a as addUnit, d as deepMerge, b as addStyle, i as formValidate } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, toDisplayString: _toDisplayString } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCheckboxUpCheckbox";
const { computed, ref, watch, inject, getCurrentInstance, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-checkbox"
  },
  __dynamicSharedData: true,
  __hash: "db06719c",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-checkbox/up-checkbox.uvue",
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
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCheckboxUpCheckboxSharedData", sharedDataClassId: 0 })));
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
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 7, ["up-checkbox cursor-pointer", [
          `up-checkbox-label--` + elIconPlacement.value,
          elBorderBottom.value && elPlacement.value == "column" ? "up-border-bottom" : ""
        ]]);
        _setSharedDataStyle(__sharedData, 8, [checkboxStyle.value]);
        _setSharedDataClass(__sharedData, 9, ["up-checkbox__icon-wrap cursor-pointer", iconClasses.value]);
        _setSharedDataStyle(__sharedData, 10, [iconWrapStyle.value]);
      });
      _createSharedDataSlot("icon", null, null, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_up_icon, "2bb63e26", {
          class: "up-checkbox__icon-wrap__icon",
          name: "checkbox-mark",
          size: () => {
            return elIconSize.value;
          },
          color: () => {
            return elIconColor.value;
          }
        });
        _setSharedData(__sharedData, 4, n2?.sharedData);
      });
      _setSharedDataEvent(__sharedData, 5, iconClickHandler);
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
          const _elLabelSize = elLabelSize.value;
          _setSharedDataStyle(__sharedData, 2, {
            color: elDisabled.value ? elInactiveColor.value : elLabelColor.value,
            fontSize: _elLabelSize,
            lineHeight: _elLabelSize
          });
          _setSharedData(__sharedData, 3, _toDisplayString(__props.label));
        });
      });
      _setSharedDataEvent(__sharedData, 6, wrapperClickHandler);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-checkbox.js.map
