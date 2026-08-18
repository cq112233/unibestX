import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-status-bar/up-status-bar&";
import { _ as __easycom_0$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { a as addUnit, g as getPx, b as addStyle, d as deepMerge } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataStyle: _setSharedDataStyle, createSharedDataIf: _createSharedDataIf, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpNavbarUpNavbar";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-navbar"
  },
  __dynamicSharedData: true,
  __hash: "193d2626",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-navbar/up-navbar.uvue",
  __name: "up-navbar",
  props: {
    safeAreaInsetTop: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: String,
      default: "arrow-left"
    },
    leftText: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: ""
    },
    rightIcon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    bgColor: {
      type: String,
      default: "#ffffff"
    },
    titleWidth: {
      type: [String, Number],
      default: "400rpx"
    },
    height: {
      type: [String, Number],
      default: "44px"
    },
    leftIconSize: {
      type: [String, Number],
      default: 20
    },
    leftIconColor: {
      type: String,
      default: "#303133"
    },
    autoBack: {
      type: Boolean,
      default: false
    },
    titleStyle: {
      type: [Object, String],
      default: () => {
        return new UTSJSONObject({});
      }
    },
    customClass: {
      type: String,
      default: ""
    }
  },
  emits: ["leftClick", "rightClick"],
  setup(__props, _a) {
    var __emit = _a.emit, $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpNavbarUpNavbarSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const placeholderHeight = computed(() => {
      const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
      return addUnit(parseInt(getPx(props.height)) + statusBarHeight, "px");
    });
    const placeholderStyle = computed(() => {
      return new UTSJSONObject({
        height: placeholderHeight.value
      });
    });
    const contentStyle = computed(() => {
      return new UTSJSONObject({
        height: addUnit(props.height),
        backgroundColor: props.bgColor
      });
    });
    const leftTextStyle = computed(() => {
      return new UTSJSONObject({
        color: props.leftIconColor
      });
    });
    const mergedTitleStyle = computed(() => {
      const custom = addStyle(props.titleStyle);
      const base = new UTSJSONObject({
        width: addUnit(props.titleWidth)
      });
      return deepMerge(base, custom);
    });
    function leftClick() {
      emit("leftClick");
      if (props.autoBack) {
        uni.navigateBack();
      }
    }
    function rightClick() {
      emit("rightClick");
    }
    return () => {
      "raw js";
      const _component_up_status_bar = __easycom_0;
      const _component_up_icon = __easycom_0$1;
      _renderSharedDataEffect(() => {
        return _setSharedDataClass(__sharedData, 18, ["up-navbar", [__props.customClass]]);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.fixed && __props.placeholder));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 1, placeholderStyle.value);
        });
      });
      _renderSharedDataEffect(() => {
        return _setSharedDataClass(__sharedData, 19, [__props.fixed ? "up-navbar--fixed" : ""]);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 2, _toSharedDataBoolean(__props.safeAreaInsetTop));
      }, () => {
        const n5 = _createSharedDataComponentWithFallback(_component_up_status_bar, "05520d64", { bgColor: () => {
          return __props.bgColor;
        } });
        _setSharedData(__sharedData, 3, n5?.sharedData);
      });
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 20, ["up-navbar__content", [__props.border ? "up-border-bottom" : ""]]);
        _setSharedDataStyle(__sharedData, 21, contentStyle.value);
      });
      _createSharedDataSlot("left", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 12, _toSharedDataBoolean(__props.leftIcon != ""));
        }, () => {
          const n10 = _createSharedDataComponentWithFallback(_component_up_icon, "0551ef98", {
            name: () => {
              return __props.leftIcon;
            },
            size: () => {
              return __props.leftIconSize;
            },
            color: () => {
              return __props.leftIconColor;
            }
          });
          _setSharedData(__sharedData, 13, n10?.sharedData);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 14, _toSharedDataBoolean(__props.leftText != ""));
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData, 15, leftTextStyle.value);
            _setSharedData(__sharedData, 16, _toDisplayString(__props.leftText));
          });
        });
      });
      _setSharedDataEvent(__sharedData, 17, leftClick);
      _createSharedDataSlot("center", null, null, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData, 4, mergedTitleStyle.value);
          _setSharedData(__sharedData, 5, _toDisplayString(__props.title));
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 6, _toSharedDataBoolean($slots["right"] != null || __props.rightIcon != "" || __props.rightText != ""));
      }, () => {
        _createSharedDataSlot("right", null, null, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 7, _toSharedDataBoolean(__props.rightIcon != ""));
          }, () => {
            const n24 = _createSharedDataComponentWithFallback(_component_up_icon, "a4f080a6", {
              name: () => {
                return __props.rightIcon;
              },
              size: "20"
            });
            _setSharedData(__sharedData, 8, n24?.sharedData);
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 9, _toSharedDataBoolean(__props.rightText != ""));
          }, () => {
            _renderSharedDataEffect(() => {
              return _setSharedData(__sharedData, 10, _toDisplayString(__props.rightText));
            });
          });
        });
        _setSharedDataEvent(__sharedData, 11, rightClick);
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
//# sourceMappingURL=up-navbar.js.map
