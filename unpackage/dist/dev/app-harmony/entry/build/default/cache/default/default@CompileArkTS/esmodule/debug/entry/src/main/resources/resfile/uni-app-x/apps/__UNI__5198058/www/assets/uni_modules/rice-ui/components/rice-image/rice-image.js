import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-icon/rice-icon&";
import { a as addUnit, c as clamp } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-image/type&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, toSharedDataImageMode: _toSharedDataImageMode } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceImageRiceImage";
const { computed, ref, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-image",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "dfbbcb48",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-image/rice-image.uvue",
  __name: "rice-image",
  props: {
    src: { default: "", type: String },
    mode: { default: "scaleToFill", type: String },
    width: { type: [String, Number] },
    height: { type: [String, Number] },
    round: { type: Boolean },
    radius: { type: [String, Number] },
    showError: { type: Boolean, default: true },
    showLoading: { type: Boolean, default: true },
    errorIcon: { default: "photo-fail", type: String },
    loadingIcon: { default: "photo", type: String },
    iconSize: { default: "30px", type: String },
    iconColor: { type: String },
    bgColor: { type: String },
    preview: { type: Boolean, default: false },
    previewSrcList: { type: Array },
    previewIndex: { type: Number },
    lazyLoad: { type: Boolean, default: false },
    fadeShow: { type: Boolean, default: false },
    webp: { type: Boolean, default: true },
    showMenuByLongpress: { type: Boolean, default: false },
    draggable: { type: Boolean, default: false },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  emits: ["click", "load", "error"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceImageRiceImageSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("image");
    const emit = __emit;
    const props = __props;
    const _iconColor = computed(() => {
      var _a2;
      return (_a2 = props.iconColor) !== null && _a2 !== void 0 ? _a2 : "var(--rice-image-icon-color)";
    });
    const error = ref(false);
    const loading = ref(true);
    watch(() => {
      return props.src;
    }, () => {
      error.value = false;
      loading.value = true;
    });
    const handleLoad = (event) => {
      error.value = false;
      if (loading.value) {
        loading.value = false;
        emit("load", event);
      }
    };
    const handleError = (event) => {
      error.value = true;
      loading.value = false;
      emit("error", event);
    };
    const handleClick = () => {
      var _a2;
      if (loading.value || error.value)
        return null;
      const hasPreviewList = Array.isArray(props.previewSrcList) && props.previewSrcList.length > 0;
      if (props.preview || hasPreviewList) {
        const urls = hasPreviewList ? props.previewSrcList : [props.src];
        let current = (_a2 = props.previewIndex) !== null && _a2 !== void 0 ? _a2 : urls.findIndex((v = null) => {
          return v == props.src;
        });
        current = clamp(current, 0, urls.length - 1);
        uni.previewImage({
          urls,
          current
        });
        return null;
      }
      emit("click");
    };
    const rootStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.height != null)
        css.set("height", addUnit(props.height));
      if (props.width != null)
        css.set("width", addUnit(props.width));
      if (props.radius != null)
        css.set("border-radius", addUnit(props.radius));
      if (props.bgColor != null)
        css.set("background-color", props.bgColor);
      return css;
    });
    const imgStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.radius != null)
        css.set("border-radius", addUnit(props.radius));
      return css;
    });
    const rootClass = computed(() => {
      return [
        ns.b(""),
        ns.theme(),
        ns.is("round", props.round == true)
      ];
    });
    const imgClass = computed(() => {
      return [
        ns.e("img"),
        ns.is("round", props.round == true)
      ];
    });
    const bgColorStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.bgColor != null)
        css.set("background-color", props.bgColor);
      return css;
    });
    return () => {
      "raw js";
      const _component_rice_icon = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 15, _unref(rootClass));
        _setSharedDataStyle(__sharedData, 16, [_unref(rootStyle), __props.customStyle]);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(_unref(error)));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 3, _unref(bgColorStyle));
        });
        _createSharedDataSlot("error", null, null, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 1, _toSharedDataBoolean(__props.showError));
          }, () => {
            const n6 = _createSharedDataComponentWithFallback(_component_rice_icon, "726de9a6", {
              name: () => {
                return __props.errorIcon;
              },
              size: () => {
                return __props.iconSize;
              },
              color: () => {
                return _unref(_iconColor);
              }
            });
            _setSharedData(__sharedData, 2, n6?.sharedData);
          });
        });
      }, () => {
        _setSharedDataEvent(__sharedData, 4, handleLoad);
        _setSharedDataEvent(__sharedData, 5, handleError);
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 6, _unref(imgClass));
          _setSharedDataAttr(__sharedData, 7, _toSharedDataString(__props.src));
          _setSharedDataAttr(__sharedData, 8, _toSharedDataImageMode(__props.mode));
          _setSharedDataStyle(__sharedData, 9, _unref(imgStyle));
        });
      }, 517);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 10, _toSharedDataBoolean(_unref(loading)));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 13, _unref(bgColorStyle));
        });
        _createSharedDataSlot("loading", null, null, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 11, _toSharedDataBoolean(__props.showLoading));
          }, () => {
            const n16 = _createSharedDataComponentWithFallback(_component_rice_icon, "726df831", {
              name: () => {
                return __props.loadingIcon;
              },
              size: () => {
                return __props.iconSize;
              },
              color: () => {
                return _unref(_iconColor);
              }
            });
            _setSharedData(__sharedData, 12, n16?.sharedData);
          });
        });
      });
      _setSharedDataEvent(__sharedData, 14, handleClick);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=rice-image.js.map
