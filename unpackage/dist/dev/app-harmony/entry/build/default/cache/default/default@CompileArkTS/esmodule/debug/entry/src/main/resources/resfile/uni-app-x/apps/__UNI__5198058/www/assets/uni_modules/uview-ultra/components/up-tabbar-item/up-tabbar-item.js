import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-badge/up-badge&";
import { b as addStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataSlot: _createSharedDataSlot, toDisplayString: _toDisplayString, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpTabbarItemUpTabbarItem";
const { computed, inject } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-tabbar-item"
  },
  __dynamicSharedData: true,
  __hash: "e67f5b18",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-tabbar-item/up-tabbar-item.uvue",
  __name: "up-tabbar-item",
  props: {
    name: {
      type: [String, Number, null],
      default: null
    },
    icon: {
      type: String,
      default: ""
    },
    badge: {
      type: [String, Number, null],
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
      default: "top: 6px;right:2px;"
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
    const parentChange = inject("upTabbarChange", null);
    const isMidButton = computed(() => {
      return props.mode === "midButton";
    });
    const isActive = computed(() => {
      if (parentProps == null || props.name == null)
        return false;
      return parentProps.value == props.name;
    });
    const activeColor = computed(() => {
      var _a2;
      return (_a2 = parentProps === null || parentProps === void 0 ? null : parentProps.activeColor) !== null && _a2 !== void 0 ? _a2 : "#1989fa";
    });
    const inactiveColor = computed(() => {
      var _a2;
      return (_a2 = parentProps === null || parentProps === void 0 ? null : parentProps.inactiveColor) !== null && _a2 !== void 0 ? _a2 : "#7d7e80";
    });
    function clickHandler() {
      if (props.name != null && parentChange != null) {
        parentChange(props.name);
      }
      emit("click", props.name);
    }
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0;
      const _component_up_badge = __easycom_1$1;
      _renderSharedDataEffect(() => {
        const _isMidButton = isMidButton.value;
        _setSharedDataClass(__sharedData, 8, ["up-tabbar-item", [_isMidButton ? "up-tabbar-item--mid-button" : ""]]);
        _setSharedDataStyle(__sharedData, 9, [_unref(addStyle)(__props.customStyle)]);
        _setSharedDataClass(__sharedData, 10, ["up-tabbar-item__icon", [_isMidButton ? "up-tabbar-item__icon--mid-button" : ""]]);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 2, _toSharedDataBoolean(isMidButton.value));
      }, () => {
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 3, _toSharedDataBoolean(__props.icon != ""));
      }, () => {
        const n5 = _createSharedDataComponentWithFallback(_component_up_icon, "ff2f6ab2", {
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
      const n13 = _createSharedDataComponentWithFallback(_component_up_badge, "ff2f5374", {
        absolute: "",
        offset: () => {
          return [0, __props.dot ? "34rpx" : __props.badge != null && parseInt(__props.badge.toString()) > 9 ? "14rpx" : "20rpx"];
        },
        customStyle: () => {
          return __props.badgeStyle;
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
