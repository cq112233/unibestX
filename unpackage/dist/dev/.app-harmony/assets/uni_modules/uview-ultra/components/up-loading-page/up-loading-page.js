import { _ as __easycom_0 } from "../up-loading-icon/up-loading-icon.js";
import { _ as __easycom_1 } from "../up-transition/up-transition.js";
import { a as addUnit, d as deepMerge, b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpLoadingPageUpLoadingPage";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-loading-page"
  },
  __dynamicSharedData: true,
  __hash: "b64a57be",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-loading-page/up-loading-page.uvue",
  __name: "up-loading-page",
  props: {
    loadingText: {
      type: [String, Number],
      default: "正在加载"
    },
    image: {
      type: String,
      default: ""
    },
    loadingMode: {
      type: String,
      default: "circle"
    },
    loading: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: "#ffffff"
    },
    color: {
      type: String,
      default: "#C8C8C8"
    },
    fontSize: {
      type: [String, Number],
      default: 19
    },
    iconSize: {
      type: [String, Number],
      default: 28
    },
    loadingColor: {
      type: String,
      default: "#C8C8C8"
    },
    zIndex: {
      type: [Number],
      default: 10
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpLoadingPageUpLoadingPageSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const imageSizeStyle = computed(() => {
      return new UTSJSONObject({
        width: addUnit(props.iconSize),
        height: addUnit(props.iconSize)
      });
    });
    const formattedIconSize = computed(() => {
      return addUnit(props.iconSize);
    });
    const textStyle = computed(() => {
      return new UTSJSONObject({
        fontSize: addUnit(props.fontSize),
        color: props.color
      });
    });
    const transitionStyle = computed(() => {
      const base = new UTSJSONObject({
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: props.bgColor,
        display: "flex",
        zIndex: props.zIndex
      });
      return deepMerge(base, addStyle(props.customStyle));
    });
    return () => {
      "raw js";
      const _component_up_loading_icon = __easycom_0;
      const _component_up_transition = __easycom_1;
      const n11 = _createSharedDataComponentWithFallback(
        _component_up_transition,
        "1ea37258",
        {
          show: () => {
            return __props.loading;
          },
          "custom-style": () => {
            return transitionStyle.value;
          }
        },
        {
          "default": _withSharedDataVaporCtx(() => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 3, _toSharedDataBoolean(__props.image != ""));
            }, () => {
              _renderSharedDataEffect(() => {
                _setSharedDataAttr(__sharedData, 4, _toSharedDataString(__props.image));
                _setSharedDataStyle(__sharedData, 5, imageSizeStyle.value);
              });
            }, () => {
              const n4 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "7e37e873", {
                mode: () => {
                  return __props.loadingMode;
                },
                size: () => {
                  return formattedIconSize.value;
                },
                color: () => {
                  return __props.loadingColor;
                }
              });
              _setSharedData(__sharedData, 6, n4?.sharedData);
            }, 261);
            _createSharedDataSlot("default", null, null, () => {
              _renderSharedDataEffect(() => {
                _setSharedDataStyle(__sharedData, 1, textStyle.value);
                _setSharedData(__sharedData, 2, _toDisplayString(__props.loadingText));
              });
            });
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n11?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {"flex":{"":{"display":"flex"}}};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-loading-page.js.map
