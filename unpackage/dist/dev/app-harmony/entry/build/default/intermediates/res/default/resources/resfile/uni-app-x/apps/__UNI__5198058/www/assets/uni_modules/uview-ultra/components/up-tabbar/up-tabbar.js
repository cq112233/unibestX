import { _ as __easycom_0 } from "../up-safe-bottom/up-safe-bottom.js";
import { d as deepMerge, b as addStyle, s as sleep, u as upGetRect } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpTabbarUpTabbar";
const { computed, ref, watch, provide, onMounted, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-tabbar"
  },
  __dynamicSharedData: true,
  __hash: "0d3705f7",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-tabbar/up-tabbar.uvue",
  __name: "up-tabbar",
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    borderColor: {
      type: String,
      default: ""
    },
    zIndex: {
      type: [String, Number],
      default: 1
    },
    activeColor: {
      type: String,
      default: "#1989fa"
    },
    inactiveColor: {
      type: String,
      default: "#7d7e80"
    },
    fixed: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: "#ffffff"
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["change", "update:value"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpTabbarUpTabbarSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance();
    const placeholderHeight = ref(0);
    const tabbarStyle = computed(() => {
      const style = new UTSJSONObject({
        zIndex: props.zIndex
      });
      if (props.borderColor != "") {
        style["borderColor"] = props.borderColor + " !important";
      }
      if (props.backgroundColor != "") {
        style["backgroundColor"] = props.backgroundColor;
      }
      return deepMerge(style, addStyle(props.customStyle));
    });
    const parentState = computed(() => {
      return new UTSJSONObject({
        value: props.value,
        activeColor: props.activeColor,
        inactiveColor: props.inactiveColor,
        safeAreaInsetBottom: props.safeAreaInsetBottom,
        border: props.border,
        borderColor: props.borderColor,
        zIndex: props.zIndex,
        fixed: props.fixed,
        placeholder: props.placeholder,
        backgroundColor: props.backgroundColor
      });
    });
    const itemCount = ref(0);
    const registerTabbarItem = () => {
      const currentIndex = itemCount.value;
      itemCount.value = itemCount.value + 1;
      return currentIndex;
    };
    provide("upTabbarProps", parentState);
    provide("upTabbarRegister", registerTabbarItem);
    provide("upTabbarChange", (name = null) => {
      emit("update:value", name);
      emit("change", name);
    });
    async function setPlaceholderHeight() {
      if (!props.fixed || !props.placeholder)
        return Promise.resolve(null);
      await sleep(20);
      upGetRect(".up-tabbar__content", false, instance === null || instance === void 0 ? null : instance.proxy).then((size) => {
        var _a2;
        placeholderHeight.value = (_a2 = size.height) !== null && _a2 !== void 0 ? _a2 : 50;
      });
    }
    function noop() {
    }
    watch(() => {
      return [props.fixed, props.placeholder];
    }, () => {
      setPlaceholderHeight();
    });
    onMounted(() => {
      setPlaceholderHeight();
    });
    return () => {
      "raw js";
      const _component_up_safe_bottom = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 5, ["up-tabbar__content", [__props.border ? "up-border-top" : "", __props.fixed ? "up-tabbar--fixed" : ""]]);
        _setSharedDataStyle(__sharedData, 6, tabbarStyle.value);
      });
      _createSharedDataSlot("default", null, null);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 2, _toSharedDataBoolean(__props.safeAreaInsetBottom));
      }, () => {
        const n4 = _createSharedDataComponentWithFallback(_component_up_safe_bottom, "d503d244");
        _setSharedData(__sharedData, 3, n4?.sharedData);
      });
      _setSharedDataEvent(__sharedData, 4, noop);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.placeholder && __props.fixed));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 1, {
            height: placeholderHeight.value + "px"
          });
        });
      });
      return __sharedData;
    };
  }
});
const _style_0 = {"up-border-top":{"":{"borderTopWidth":0.5,"borderColor":"#dadbde","borderTopStyle":"solid"}}};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-tabbar.js.map
