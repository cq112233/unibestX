import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { a as addUnit, i as error, d as deepMerge, b as addStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-checkbox/checkbox&";
import { u as useUltraUI } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, toDisplayString: _toDisplayString } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCheckboxUpCheckbox";
const { computed, ref, watch, onMounted, inject, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-checkbox"
  },
  __dynamicSharedData: true,
  __hash: "512d5442",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-checkbox/up-checkbox.uvue",
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
    var _b;
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCheckboxUpCheckboxSharedData", sharedDataClassId: 0 })));
    const _c = useUltraUI(), parent = _c.parent, parentData = _c.parentData, getParentData = _c.getParentData;
    const instance = (_b = getCurrentInstance()) === null || _b === void 0 ? null : _b.proxy;
    const props = __props;
    const emit = __emit;
    const injectedParentProps = inject("upCheckboxGroupProps", null);
    const injectedParentToggle = inject("upCheckboxGroupToggle", null);
    function getParentVal(key) {
      if (!props.usedAlone) {
        if (injectedParentProps != null && injectedParentProps.value != null) {
          const obj = injectedParentProps.value;
          if (obj != null && obj[key] != null) {
            return obj[key];
          }
        }
        if (parentData.value != null && parentData.value[key] != null) {
          return parentData.value[key];
        }
      }
      return null;
    }
    const selfChecked = ref(props.checked);
    const isChecked = computed(() => {
      if (!props.usedAlone) {
        const val = getParentVal("modelValue");
        if (val != null) {
          const arr = val;
          if (props.name != null) {
            for (let i = 0; i < arr.length; i++) {
              if (arr[i] != null && arr[i].toString() == props.name.toString()) {
                return true;
              }
            }
          }
          return false;
        }
      }
      return selfChecked.value;
    });
    const elDisabled = computed(() => {
      let disabledVal = props.disabled;
      if (disabledVal != null && disabledVal.toString() != "") {
        return disabledVal.toString() == "true";
      }
      const p = getParentVal("disabled");
      if (p != null) {
        return p;
      }
      return false;
    });
    const elLabelDisabled = computed(() => {
      let labelDisabledVal = props.labelDisabled;
      if (labelDisabledVal != null && labelDisabledVal.toString() != "") {
        return labelDisabledVal.toString() == "true";
      }
      const p = getParentVal("labelDisabled");
      if (p != null) {
        return p;
      }
      return false;
    });
    const elSize = computed(() => {
      if (props.size != null && props.size.toString() != "") {
        return props.size.toString();
      }
      const p = getParentVal("size");
      if (p != null && p.toString() != "") {
        return p.toString();
      }
      return "21";
    });
    const elIconSize = computed(() => {
      if (props.iconSize != null && props.iconSize.toString() != "") {
        return props.iconSize.toString();
      }
      const p = getParentVal("iconSize");
      if (p != null && p.toString() != "") {
        return p.toString();
      }
      return "12";
    });
    const elActiveColor = computed(() => {
      const activeColorProp = props.activeColor;
      if (activeColorProp != null && activeColorProp.toString() != "") {
        return activeColorProp.toString();
      }
      const p = getParentVal("activeColor");
      if (p != null && p.toString() != "") {
        return p.toString();
      }
      return "#2979ff";
    });
    const elInactiveColor = computed(() => {
      const inactiveColorProp = props.inactiveColor;
      if (inactiveColorProp != null && inactiveColorProp.toString() != "") {
        return inactiveColorProp.toString();
      }
      const p = getParentVal("inactiveColor");
      if (p != null && p.toString() != "") {
        return p.toString();
      }
      return "#c8c9cc";
    });
    const elLabelColor = computed(() => {
      if (props.labelColor != null && props.labelColor.toString() != "") {
        return props.labelColor.toString();
      }
      const p = getParentVal("labelColor");
      if (p != null && p.toString() != "") {
        return p.toString();
      }
      return "#606266";
    });
    const elShape = computed(() => {
      if (props.shape != null && props.shape.toString() != "") {
        return props.shape.toString();
      }
      const p = getParentVal("shape");
      if (p != null && p.toString() != "") {
        return p.toString();
      }
      return "circle";
    });
    const elLabelSize = computed(() => {
      if (props.labelSize != null && props.labelSize.toString() != "") {
        return addUnit(props.labelSize.toString());
      }
      const p = getParentVal("labelSize");
      if (p != null && p.toString() != "") {
        return addUnit(p.toString());
      }
      return addUnit("15");
    });
    const elIconColor = computed(() => {
      let iconColor = "#ffffff";
      if (props.iconColor.toString() != "") {
        iconColor = props.iconColor.toString();
      } else {
        const p = getParentVal("iconColor");
        if (p != null && p.toString() != "") {
          iconColor = p.toString();
        }
      }
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
      const iconPlacement = getParentVal("iconPlacement");
      if (iconPlacement != null && iconPlacement.toString() == "right") {
        style["marginRight"] = 0;
      }
      return style;
    });
    const checkboxStyle = computed(() => {
      const style = new UTSJSONObject({});
      const borderBottom = getParentVal("borderBottom");
      const placement = getParentVal("placement");
      if (borderBottom != null && borderBottom.toString() == "true" && placement != null && placement.toString() == "row") {
        error("检测到您将borderBottom设置为true，需要同时将up-checkbox-group的placement设置为column才有效");
      }
      if (borderBottom != null && borderBottom.toString() == "true" && placement != null && placement.toString() == "column") {
        style["paddingBottom"] = "8px";
      }
      return deepMerge(style, addStyle(props.customStyle));
    });
    const iconPlacementClass = computed(() => {
      const p = getParentVal("iconPlacement");
      if (p != null && p.toString() != "") {
        return "up-checkbox-label--" + p.toString();
      }
      return "up-checkbox-label--left";
    });
    const borderBottomClass = computed(() => {
      const borderBottom = getParentVal("borderBottom");
      const placement = getParentVal("placement");
      if (borderBottom != null && borderBottom.toString() == "true" && placement != null && placement.toString() == "column") {
        return "up-border-bottom";
      }
      return "";
    });
    const init = function() {
      if (!props.usedAlone && injectedParentProps == null) {
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
        if (instance != null) {
          getParentData("up-checkbox-group", instance, false);
        }
      }
      if (props.checked) {
        selfChecked.value = true;
      }
    };
    function setRadioCheckedStatus() {
      var _a2;
      const targetChecked = !isChecked.value;
      if (!props.usedAlone && injectedParentToggle != null) {
        injectedParentToggle(props.name != null ? props.name.toString() : "", targetChecked);
      } else {
        selfChecked.value = targetChecked;
        if (!props.usedAlone && parent.value != null && instance != null) {
          (_a2 = parent.value) === null || _a2 === void 0 ? null : _a2.$callMethod("unCheckedOther", instance);
        }
      }
      emit("change", targetChecked);
      if (props.usedAlone) {
        emit("update:checked", targetChecked);
      }
      setTimeout(() => {
      }, 10);
    }
    function iconClickHandler(e) {
      e.stopPropagation();
      if (!elDisabled.value) {
        setRadioCheckedStatus();
      }
    }
    function wrapperClickHandler(e) {
      const iconPlacement = getParentVal("iconPlacement");
      if (iconPlacement != null && iconPlacement.toString() == "right") {
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
      if (newVal != selfChecked.value) {
        selfChecked.value = newVal;
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
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 7, ["up-checkbox cursor-pointer", [iconPlacementClass.value, borderBottomClass.value]]);
        _setSharedDataStyle(__sharedData, 8, [checkboxStyle.value]);
        _setSharedDataClass(__sharedData, 9, ["up-checkbox__icon-wrap cursor-pointer", iconClasses.value]);
        _setSharedDataStyle(__sharedData, 10, [iconWrapStyle.value]);
      });
      _createSharedDataSlot("icon", null, null, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_up_icon, "2bb64524", {
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
