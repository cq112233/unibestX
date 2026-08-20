import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-status-bar/up-status-bar&";
import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { _ as __easycom_1$2 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-line/up-line&";
import { a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, setSharedDataStyle: _setSharedDataStyle, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpNavbarMiniUpNavbarMini";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-navbar-mini"
  },
  __dynamicSharedData: true,
  __hash: "05b78300",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-navbar-mini/up-navbar-mini.uvue",
  __name: "up-navbar-mini",
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
    leftIcon: {
      type: String,
      default: "arrow-left"
    },
    bgColor: {
      type: String,
      default: "#ffffff"
    },
    height: {
      type: [String, Number],
      default: "44px"
    },
    iconSize: {
      type: [String, Number],
      default: "20px"
    },
    iconColor: {
      type: String,
      default: "#303133"
    },
    autoBack: {
      type: Boolean,
      default: false
    },
    homeUrl: {
      type: String,
      default: ""
    },
    customClass: {
      type: String,
      default: ""
    }
  },
  emits: ["leftClick", "homeClick"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpNavbarMiniUpNavbarMiniSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const contentStyle = computed(() => {
      return new UTSJSONObject({
        height: addUnit(props.height),
        backgroundColor: props.bgColor
      });
    });
    function leftClick() {
      emit("leftClick");
      if (props.autoBack) {
        uni.navigateBack();
      }
    }
    function homeClick() {
      emit("homeClick");
      if (props.homeUrl != "") {
        uni.reLaunch({ url: props.homeUrl });
      }
    }
    return () => {
      "raw js";
      const _component_up_status_bar = __easycom_0;
      const _component_up_icon = __easycom_1$1;
      const _component_up_line = __easycom_1$2;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 7, ["up-navbar-mini", [__props.customClass]]);
        _setSharedDataClass(__sharedData, 8, ["up-navbar-mini__inner", [__props.fixed ? "up-navbar-mini--fixed" : ""]]);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.safeAreaInsetTop));
      }, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_up_status_bar, "4b8fb3d5");
        _setSharedData(__sharedData, 1, n2?.sharedData);
      });
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 9, contentStyle.value);
      });
      _createSharedDataSlot("left", null, null, () => {
        const n5 = _createSharedDataComponentWithFallback(_component_up_icon, "4b8fbf8f", {
          name: () => {
            return __props.leftIcon;
          },
          size: () => {
            return __props.iconSize;
          },
          color: () => {
            return __props.iconColor;
          }
        });
        _setSharedData(__sharedData, 2, n5?.sharedData);
      });
      _setSharedDataEvent(__sharedData, 5, leftClick);
      const n7 = _createSharedDataComponentWithFallback(_component_up_line, "4b8fc6b4", {
        direction: "col",
        color: "#fff",
        length: "16px"
      });
      _setSharedData(__sharedData, 3, n7?.sharedData);
      _createSharedDataSlot("center", null, null, () => {
        const n11 = _createSharedDataComponentWithFallback(_component_up_icon, "4b8fce79", {
          name: "home",
          size: () => {
            return __props.iconSize;
          },
          color: () => {
            return __props.iconColor;
          }
        });
        _setSharedData(__sharedData, 4, n11?.sharedData);
      });
      _setSharedDataEvent(__sharedData, 6, homeClick);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-navbar-mini.js.map
