import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpPdfReaderUpPdfReader";
const { ref, computed, watch, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-pdf-reader"
  },
  __dynamicSharedData: true,
  __hash: "e86c3466",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-pdf-reader/up-pdf-reader.uvue",
  __name: "up-pdf-reader",
  props: {
    src: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: "500px"
    },
    baseUrl: {
      type: String,
      default: "https://uview-plus.jiangruyi.com/h5"
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpPdfReaderUpPdfReaderSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const baseUrlInner = ref(props.baseUrl.length > 0 ? props.baseUrl : "https://uview-plus.jiangruyi.com/h5");
    const viewerUrl = ref("");
    const readerStyle = computed(() => {
      const style = new UTSJSONObject({});
      style["height"] = props.height;
      return style;
    });
    const webViewStyle = computed(() => {
      const style = new UTSJSONObject({});
      style["width"] = "100%";
      style["height"] = props.height;
      return style;
    });
    function updateViewerUrl() {
      const base = baseUrlInner.value.length > 0 ? baseUrlInner.value : "https://uview-plus.jiangruyi.com/h5";
      viewerUrl.value = base + "/static/pdfjs/web/viewer.html?file=" + encodeURIComponent(props.src);
    }
    watch(() => {
      return props.baseUrl;
    }, (val) => {
      baseUrlInner.value = val;
      updateViewerUrl();
    });
    watch(() => {
      return props.src;
    }, () => {
      updateViewerUrl();
    });
    onMounted(() => {
      updateViewerUrl();
    });
    return () => {
      "raw js";
      const _component_web_view = _resolveComponent("web-view");
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 1, readerStyle.value);
      });
      const n0 = _createSharedDataComponentWithFallback(_component_web_view, "749471a0", {
        fullscreen: false,
        src: () => {
          return viewerUrl.value;
        },
        style: () => {
          return webViewStyle.value;
        },
        frameborder: "0"
      });
      _setSharedData(__sharedData, 0, n0?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_3 as _
};
//# sourceMappingURL=up-pdf-reader.js.map
