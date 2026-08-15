import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { b as addStyle, a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, createSharedDataIf: _createSharedDataIf, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpSearchUpSearch";
const { ref, computed, watch, onMounted, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-search"
  },
  __dynamicSharedData: true,
  __hash: "4f4cc5ab",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-search/up-search.uvue",
  __name: "up-search",
  props: {
    shape: {
      type: String,
      default: "round"
    },
    bgColor: {
      type: String,
      default: "#f2f2f2"
    },
    placeholder: {
      type: String,
      default: "请输入关键字"
    },
    clearabled: {
      type: Boolean,
      default: true
    },
    focus: {
      type: Boolean,
      default: false
    },
    showAction: {
      type: Boolean,
      default: true
    },
    actionStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    actionText: {
      type: String,
      default: "搜索"
    },
    inputAlign: {
      type: String,
      default: "left"
    },
    inputStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    borderColor: {
      type: String,
      default: "transparent"
    },
    searchIconColor: {
      type: String,
      default: "#909399"
    },
    searchIconSize: {
      type: [Number, String],
      default: 22
    },
    color: {
      type: String,
      default: "#606266"
    },
    placeholderColor: {
      type: String,
      default: "#909399"
    },
    searchIcon: {
      type: String,
      default: "search"
    },
    iconPosition: {
      type: String,
      default: "left"
    },
    margin: {
      type: String,
      default: "0"
    },
    animation: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    maxlength: {
      type: [String, Number],
      default: -1
    },
    height: {
      type: [String, Number],
      default: 34
    },
    label: {
      type: String,
      default: ""
    },
    adjustPosition: {
      type: Boolean,
      default: true
    },
    autoBlur: {
      type: Boolean,
      default: false
    },
    onlyClearableOnFocused: {
      type: Boolean,
      default: true
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["clear", "search", "custom", "focus", "blur", "click", "clickIcon", "update:modelValue", "change"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit, $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpSearchUpSearchSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const keyword = ref(props.modelValue.toString());
    const show = ref(false);
    const focused = ref(false);
    watch(() => {
      return props.modelValue;
    }, (nVal = null) => {
      keyword.value = nVal != null ? nVal.toString() : "";
    });
    const showActionBtn = computed(() => {
      return !props.animation && props.showAction;
    });
    const isShowClear = computed(() => {
      if (!props.clearabled) {
        return false;
      }
      if (props.onlyClearableOnFocused) {
        return !!focused.value && keyword.value !== "";
      } else {
        return keyword.value !== "";
      }
    });
    onMounted(() => {
      focused.value = props.focus;
    });
    function inputChange(e) {
      keyword.value = e.detail.value;
      emit("update:modelValue", keyword.value);
      emit("change", keyword.value);
    }
    function clear() {
      keyword.value = "";
      emit("update:modelValue", "");
      emit("change", "");
      nextTick(() => {
        emit("clear");
      });
    }
    function search(e) {
      emit("search", e.detail.value);
      try {
        uni.hideKeyboard();
      } catch (err) {
      }
    }
    function custom() {
      emit("custom", keyword.value);
      try {
        uni.hideKeyboard();
      } catch (err) {
      }
    }
    function getFocus() {
      focused.value = true;
      if (props.animation && props.showAction)
        show.value = true;
      emit("focus", keyword.value);
    }
    function blurFunc() {
      setTimeout(() => {
        focused.value = false;
      }, 100);
      show.value = false;
      emit("blur", keyword.value);
    }
    function clickHandler() {
      if (props.disabled)
        emit("click");
    }
    function clickIcon(e) {
      emit("clickIcon", keyword.value);
      try {
        uni.hideKeyboard();
      } catch (err) {
      }
    }
    __expose({
      clear
    });
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0;
      const _component_input = _resolveComponent("input");
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 9, ["up-search", [__props.iconPosition === "right" ? "up-search__reverse" : ""]]);
        _setSharedDataStyle(__sharedData, 10, [{
          margin: __props.margin
        }, _unref(addStyle)(__props.customStyle)]);
        _setSharedDataStyle(__sharedData, 11, {
          backgroundColor: __props.bgColor,
          borderRadius: __props.shape == "round" ? "100px" : "4px",
          borderColor: __props.borderColor
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean($slots["label"] != null || __props.label !== ""));
      }, () => {
        _createSharedDataSlot("label", null, null, () => {
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData, 1, _toDisplayString(__props.label));
          });
        });
      });
      const n5 = _createSharedDataComponentWithFallback(_component_up_icon, "ef052e98", {
        onClick: () => {
          return clickIcon;
        },
        size: () => {
          return __props.searchIconSize;
        },
        name: () => {
          return __props.searchIcon;
        },
        color: () => {
          return __props.searchIconColor != "" ? __props.searchIconColor : __props.color;
        }
      });
      _setSharedData(__sharedData, 6, n5?.sharedData);
      const n7 = _createSharedDataComponentWithFallback(_component_input, "ef052008", {
        "confirm-type": "search",
        onBlur: () => {
          return blurFunc;
        },
        value: () => {
          return keyword.value;
        },
        onConfirm: () => {
          return search;
        },
        onInput: () => {
          return inputChange;
        },
        disabled: () => {
          return __props.disabled;
        },
        onFocus: () => {
          return getFocus;
        },
        focus: () => {
          return __props.focus;
        },
        maxlength: () => {
          return __props.maxlength;
        },
        "adjust-position": () => {
          return __props.adjustPosition;
        },
        "auto-blur": () => {
          return __props.autoBlur;
        },
        "placeholder-class": "up-search__content__input--placeholder",
        placeholder: () => {
          return __props.placeholder;
        },
        "placeholder-style": () => {
          return `color: ${__props.placeholderColor}`;
        },
        class: "up-search__content__input",
        type: "text",
        style: () => {
          return [{
            pointerEvents: __props.disabled ? "none" : "auto",
            textAlign: __props.inputAlign,
            color: __props.color,
            backgroundColor: __props.bgColor,
            height: _unref(addUnit)(__props.height)
          }, __props.inputStyle];
        }
      });
      _setSharedData(__sharedData, 2, n7?.sharedData);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 3, _toSharedDataBoolean(isShowClear.value));
      }, () => {
        const n10 = _createSharedDataComponentWithFallback(_component_up_icon, "f1a45d84", {
          name: "close",
          size: "11",
          color: "#ffffff",
          customStyle: "line-height: 12px"
        });
        _setSharedData(__sharedData, 4, n10?.sharedData);
        _setSharedDataEvent(__sharedData, 5, clear);
      });
      _createSharedDataSlot("inputRight", null, null);
      _setSharedDataEvent(__sharedData, 7, custom);
      _setSharedDataEvent(__sharedData, 8, clickHandler);
      _renderSharedDataEffect(() => {
        _setSharedDataStyle(__sharedData, 12, [__props.actionStyle]);
        _setSharedDataClass(__sharedData, 13, ["up-search__action", [showActionBtn.value || show.value ? "up-search__action--active" : ""]]);
        _setSharedData(__sharedData, 14, _toDisplayString(__props.actionText));
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
//# sourceMappingURL=up-search.js.map
