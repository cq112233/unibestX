import { _ as __easycom_1$1 } from "../up-icon/up-icon.js";
import { _ as __easycom_1$2 } from "../up-badge/up-badge.js";
import { b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataSlot: _createSharedDataSlot, toDisplayString: _toDisplayString, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpTabbarItemUpTabbarItem";
const { computed, inject, ref, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-tabbar-item"
  },
  __dynamicSharedData: true,
  __hash: "1fdc7846",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-tabbar-item/up-tabbar-item.uvue",
  __name: "up-tabbar-item",
  props: {
    name: {
      type: [String, Number],
      default: null
    },
    icon: {
      type: String,
      default: ""
    },
    badge: {
      type: [String, Number],
      default: null
    },
    dot: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    },
    badgeStyle: {
      type: [Object, String],
      default: () => {
        return new UTSJSONObject({ top: "6px", right: "2px" });
      }
    },
    mode: {
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
  emits: ["click"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpTabbarItemUpTabbarItemSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const parentProps = inject("upTabbarProps", null);
    const parentRegister = inject("upTabbarRegister", null);
    const parentChange = inject("upTabbarChange", null);
    const internalIndex = ref(0);
    onMounted(() => {
      if (parentRegister != null) {
        internalIndex.value = parentRegister();
      }
    });
    const isMidButton = computed(() => {
      return props.mode == "midButton";
    });
    const itemName = computed(() => {
      if (props.name != null) {
        return props.name;
      }
      return internalIndex.value;
    });
    const isActive = computed(() => {
      if (parentProps == null)
        return false;
      const parentObj = parentProps.value;
      if (parentObj == null)
        return false;
      const parentVal = parentObj["value"];
      if (parentVal == null)
        return false;
      return parentVal.toString() == itemName.value.toString();
    });
    const activeColor = computed(() => {
      if (parentProps != null && parentProps.value != null) {
        const val = parentProps.value["activeColor"];
        if (val != null && val.toString() != "")
          return val.toString();
      }
      return "#1989fa";
    });
    const inactiveColor = computed(() => {
      if (parentProps != null && parentProps.value != null) {
        const val = parentProps.value["inactiveColor"];
        if (val != null && val.toString() != "")
          return val.toString();
      }
      return "#7d7e80";
    });
    const customTabbarItemStyle = computed(() => {
      return addStyle(props.customStyle);
    });
    const customBadgeStyle = computed(() => {
      return addStyle(props.badgeStyle);
    });
    function clickHandler() {
      if (parentChange != null) {
        parentChange(itemName.value);
      }
      emit("click", itemName.value);
    }
    return () => {
      "raw js";
      const _component_up_icon = __easycom_1$1;
      const _component_up_badge = __easycom_1$2;
      _renderSharedDataEffect(() => {
        const _isMidButton = isMidButton.value;
        _setSharedDataClass(__sharedData, 8, ["up-tabbar-item", [_isMidButton ? "up-tabbar-item--mid-button" : ""]]);
        _setSharedDataStyle(__sharedData, 9, customTabbarItemStyle.value);
        _setSharedDataClass(__sharedData, 10, ["up-tabbar-item__icon", [_isMidButton ? "up-tabbar-item__icon--mid-button" : ""]]);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 2, _toSharedDataBoolean(isMidButton.value));
      }, () => {
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 3, _toSharedDataBoolean(__props.icon != ""));
      }, () => {
        const n5 = _createSharedDataComponentWithFallback(_component_up_icon, "ff2f6ab6", {
          name: () => {
            return __props.icon;
          },
          color: () => {
            return isActive.value ? activeColor.value : inactiveColor.value;
          },
          size: () => {
            return isMidButton.value ? 26 : 20;
          }
        });
        _setSharedData(__sharedData, 4, n5?.sharedData);
      }, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 5, _toSharedDataBoolean(isActive.value));
        }, () => {
          _createSharedDataSlot("active-icon", null, null);
        }, () => {
          _createSharedDataSlot("inactive-icon", null, null);
        }, 773);
      }, 517);
      const n13 = _createSharedDataComponentWithFallback(_component_up_badge, "ff2f5378", {
        absolute: "",
        offset: () => {
          return [0, __props.dot ? "34rpx" : __props.badge != null && parseInt(__props.badge.toString()) > 9 ? "14rpx" : "20rpx"];
        },
        customStyle: () => {
          return customBadgeStyle.value;
        },
        isDot: () => {
          return __props.dot;
        },
        value: () => {
          return __props.badge != null ? __props.dot ? 1 : __props.badge : 0;
        },
        show: () => {
          return __props.dot ? true : __props.badge != null ? parseInt(__props.badge.toString()) > 0 : false;
        }
      });
      _setSharedData(__sharedData, 6, n13?.sharedData);
      _createSharedDataSlot("text", null, null, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData, 0, {
            color: isActive.value ? activeColor.value : inactiveColor.value
          });
          _setSharedData(__sharedData, 1, _toDisplayString(__props.text));
        });
      });
      _setSharedDataEvent(__sharedData, 7, clickHandler);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-tabbar-item.js.map
