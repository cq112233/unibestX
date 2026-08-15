import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { a as addUnit, d as deepMerge, b as addStyle } from "../../libs/function/index.js";
import { i as imageProps } from "./image.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataEvent: _setSharedDataEvent, setSharedDataStyle: _setSharedDataStyle, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, toSharedDataImageMode: _toSharedDataImageMode, toSharedDataAttrBoolean: _toSharedDataAttrBoolean, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataSlot: _createSharedDataSlot, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpImageUpImage";
const { nextTick, ref, computed, onMounted, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "12840405",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-image/up-image.uvue",
  __name: "up-image",
  props: {
    src: {
      type: String,
      default: () => {
        return imageProps.getString("image.src");
      }
    },
    mode: {
      type: String,
      default: () => {
        return imageProps.getString("image.mode");
      }
    },
    width: {
      type: String,
      default: () => {
        return imageProps.getString("image.width");
      }
    },
    height: {
      type: String,
      default: () => {
        return imageProps.getString("image.height");
      }
    },
    shape: {
      type: String,
      default: () => {
        return imageProps.getString("image.shape");
      }
    },
    radius: {
      type: String,
      default: () => {
        return imageProps.getString("image.radius");
      }
    },
    lazyLoad: {
      type: Boolean,
      default: () => {
        return imageProps.getBoolean("image.lazyLoad");
      }
    },
    showMenuByLongpress: {
      type: Boolean,
      default: () => {
        return imageProps.getBoolean("image.showMenuByLongpress");
      }
    },
    loadingIcon: {
      type: String,
      default: () => {
        return imageProps.getString("image.loadingIcon");
      }
    },
    errorIcon: {
      type: String,
      default: () => {
        return imageProps.getString("image.errorIcon");
      }
    },
    showLoading: {
      type: Boolean,
      default: () => {
        return imageProps.getBoolean("image.showLoading");
      }
    },
    showError: {
      type: Boolean,
      default: () => {
        return imageProps.getBoolean("image.showError");
      }
    },
    fade: {
      type: Boolean,
      default: () => {
        return imageProps.getBoolean("image.fade");
      }
    },
    webp: {
      type: Boolean,
      default: () => {
        return imageProps.getBoolean("image.webp");
      }
    },
    duration: {
      type: Number,
      default: () => {
        return imageProps.getNumber("image.duration");
      }
    },
    bgColor: {
      type: String,
      default: () => {
        return imageProps.getString("image.bgColor");
      }
    },
    customStyle: {
      type: [Object, String],
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["click", "error", "load"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpImageUpImageSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const isError = ref(true);
    const loading = ref(true);
    ref(1);
    const backgroundStyle = ref(new UTSJSONObject({}));
    const show = ref(false);
    const emit = __emit;
    const realSrc = computed(() => {
      if (props.src == "")
        return "";
      return props.src;
    });
    const wrapStyle = computed(() => {
      let style = new UTSJSONObject({});
      style["width"] = addUnit(props.width);
      style["height"] = addUnit(props.height);
      style["borderRadius"] = props.shape == "circle" ? "10000px" : addUnit(props.radius);
      if (props.radius != null) {
        style["overflow"] = parseInt(props.radius) > 0 ? "hidden" : "visible";
      }
      return deepMerge(style, new UTSJSONObject({}));
    });
    const mergedCustomStyle = computed(() => {
      return addStyle(props.customStyle);
    });
    const imageStyle = computed(() => {
      return new UTSJSONObject({
        borderRadius: props.shape == "circle" ? "10000px" : addUnit(props.radius),
        width: addUnit(props.width),
        height: addUnit(props.height)
      });
    });
    const loadingStyle = computed(() => {
      return new UTSJSONObject({
        borderRadius: props.shape == "circle" ? "50%" : addUnit(props.radius),
        backgroundColor: props.bgColor,
        width: addUnit(props.width),
        height: addUnit(props.height)
      });
    });
    const errorStyle = computed(() => {
      return new UTSJSONObject({
        borderRadius: props.shape == "circle" ? "50%" : addUnit(props.radius),
        width: addUnit(props.width),
        height: addUnit(props.height)
      });
    });
    const initLoading = (src) => {
      if (src == "") {
        isError.value = true;
        loading.value = false;
      } else {
        isError.value = false;
        if (!src.startsWith("http://") && !src.startsWith("https://")) {
          loading.value = false;
        } else {
          loading.value = true;
        }
      }
    };
    watch(() => {
      return props.src;
    }, (newVal) => {
      initLoading(newVal);
    });
    onMounted(() => {
      show.value = true;
      initLoading(props.src);
    });
    const onClick = () => {
      emit("click");
    };
    const onErrorHandler = (err = null) => {
      loading.value = false;
      isError.value = true;
      emit("error", err);
    };
    const removeBgColor = () => {
      backgroundStyle.value = new UTSJSONObject({
        backgroundColor: "transparent"
      });
    };
    const onLoadHandler = (event = null) => {
      loading.value = false;
      isError.value = false;
      emit("load", event);
      removeBgColor();
    };
    __expose({
      onClick,
      onErrorHandler,
      onLoadHandler
    });
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0;
      _setSharedDataEvent(__sharedData, 6, onErrorHandler);
      _setSharedDataEvent(__sharedData, 7, onLoadHandler);
      _renderSharedDataEffect(() => {
        _setSharedDataStyle(__sharedData, 9, [wrapStyle.value, backgroundStyle.value, mergedCustomStyle.value]);
        _setSharedDataAttr(__sharedData, 10, _toSharedDataString(realSrc.value));
        _setSharedDataAttr(__sharedData, 11, _toSharedDataImageMode(__props.mode));
        _setSharedDataAttr(__sharedData, 12, _toSharedDataAttrBoolean(__props.lazyLoad, false));
        _setSharedDataStyle(__sharedData, 13, imageStyle.value);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.showLoading && loading.value));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 2, loadingStyle.value);
        });
        _createSharedDataSlot("loading", null, null, () => {
          const n5 = _createSharedDataComponentWithFallback(_component_up_icon, "35b887b8", {
            name: () => {
              return __props.loadingIcon;
            },
            width: () => {
              return __props.width;
            },
            height: () => {
              return __props.height;
            }
          });
          _setSharedData(__sharedData, 1, n5?.sharedData);
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 3, _toSharedDataBoolean(__props.showError && isError.value && !loading.value));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 5, errorStyle.value);
        });
        _createSharedDataSlot("error", null, null, () => {
          const n11 = _createSharedDataComponentWithFallback(_component_up_icon, "35b88fd0", {
            name: () => {
              return __props.errorIcon;
            },
            width: () => {
              return __props.width;
            },
            height: () => {
              return __props.height;
            }
          });
          _setSharedData(__sharedData, 4, n11?.sharedData);
        });
      });
      _setSharedDataEvent(__sharedData, 8, onClick);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-image.js.map
