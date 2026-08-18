import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon&";
import { g as getPx, a as addUnit, d as deepMerge, b as addStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpSwitchUpSwitch";
const { computed, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-switch"
  },
  __dynamicSharedData: true,
  __hash: "8b5b2c20",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-switch/up-switch.uvue",
  __name: "up-switch",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: [String, Number],
      default: 25
    },
    activeColor: {
      type: String,
      default: "#2979ff"
    },
    inactiveColor: {
      type: String,
      default: "#ffffff"
    },
    modelValue: {
      type: [Boolean, String, Number],
      default: false
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    asyncChange: {
      type: Boolean,
      default: false
    },
    space: {
      type: [String, Number],
      default: 0
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpSwitchUpSwitchSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const isActive = computed(() => {
      return props.modelValue == props.activeValue;
    });
    const customInactiveColor = computed(() => {
      return props.inactiveColor != "#fff" && props.inactiveColor != "#ffffff";
    });
    const loadingIconSize = computed(() => {
      return parseInt(getPx(props.size)) * 0.6;
    });
    const loadingColor = computed(() => {
      if (isActive.value) {
        if (props.activeColor != "" && props.activeColor != "#2979ff") {
          return props.activeColor;
        }
        return "var(--theme-color, #2979ff)";
      }
      return "#AAABAD";
    });
    const switchClass = computed(() => {
      let classes = ["up-switch", "cursor-pointer"];
      if (props.disabled) {
        classes.push("up-switch--disabled");
      }
      if (isActive.value) {
        classes.push("up-switch--on");
      } else {
        classes.push("up-switch--off");
      }
      return classes.join(" ");
    });
    const switchStyle = computed(() => {
      let style = new UTSJSONObject({});
      if (props.size.toString() != "25") {
        style["width"] = addUnit(parseInt(props.size.toString()) * 2 + 2);
        style["height"] = addUnit(parseInt(props.size.toString()) + 2);
      }
      if (isActive.value) {
        style["borderColor"] = "rgba(0, 0, 0, 0)";
      } else {
        if (customInactiveColor.value) {
          style["borderColor"] = "rgba(0, 0, 0, 0)";
        } else {
          style["borderColor"] = "rgba(0, 0, 0, 0.12)";
        }
      }
      return style;
    });
    const mergedSwitchStyle = computed(() => {
      return deepMerge(switchStyle.value, addStyle(props.customStyle));
    });
    const bgActiveStyle = computed(() => {
      let style = new UTSJSONObject({});
      style["width"] = addUnit(parseInt(props.size.toString()) * 2 + 2);
      style["height"] = addUnit(parseInt(props.size.toString()) + 2);
      if (props.activeColor != "#2979ff") {
        style["backgroundColor"] = props.activeColor;
      }
      return style;
    });
    const nodeStyle = computed(() => {
      let style = new UTSJSONObject({});
      const sizeVal = parseInt(props.size.toString());
      const spaceVal = parseInt(props.space.toString());
      style["width"] = addUnit(sizeVal - spaceVal);
      style["height"] = addUnit(sizeVal - spaceVal);
      const translateX = isActive.value ? addUnit(props.space) : addUnit(props.size);
      style["transform"] = `translateX(-${translateX})`;
      return style;
    });
    const bgStyle = computed(() => {
      let style = new UTSJSONObject({});
      style["width"] = addUnit(parseInt(props.size.toString()) * 2);
      style["height"] = addUnit(parseInt(props.size.toString()));
      style["backgroundColor"] = props.inactiveColor;
      style["transform"] = `scale(${isActive.value ? 0 : 1})`;
      return style;
    });
    function clickHandler() {
      if (!props.disabled && !props.loading) {
        const oldValue = isActive.value ? props.inactiveValue : props.activeValue;
        if (!props.asyncChange) {
          emit("update:modelValue", oldValue);
        }
        nextTick(() => {
          emit("change", oldValue);
        });
      }
    }
    return () => {
      "raw js";
      const _component_up_loading_icon = __easycom_1$1;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 6, switchClass.value);
        _setSharedDataStyle(__sharedData, 7, mergedSwitchStyle.value);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(isActive.value));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 1, bgActiveStyle.value);
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 2, _toSharedDataBoolean(!isActive.value));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 3, bgStyle.value);
        });
      });
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 8, ["up-switch__node", [__props.modelValue == __props.activeValue ? "up-switch__node--on" : ""]]);
        _setSharedDataStyle(__sharedData, 9, nodeStyle.value);
      });
      const n6 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "0a5a6f34", {
        show: () => {
          return __props.loading;
        },
        mode: "circle",
        timingFunction: "linear",
        color: () => {
          return loadingColor.value;
        },
        size: () => {
          return loadingIconSize.value;
        }
      });
      _setSharedData(__sharedData, 4, n6?.sharedData);
      _setSharedDataEvent(__sharedData, 5, clickHandler);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-switch.js.map
