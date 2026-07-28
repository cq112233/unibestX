"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_components_upImage_image = require("./image.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon_1();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "up-image",
  props: {
    src: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upImage_image.imageProps.getString("image.src");
      }
    },
    mode: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upImage_image.imageProps.getString("image.mode");
      }
    },
    width: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upImage_image.imageProps.getString("image.width");
      }
    },
    height: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upImage_image.imageProps.getString("image.height");
      }
    },
    shape: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upImage_image.imageProps.getString("image.shape");
      }
    },
    radius: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upImage_image.imageProps.getString("image.radius");
      }
    },
    lazyLoad: {
      type: Boolean,
      default: () => {
        return uni_modules_uviewUltra_components_upImage_image.imageProps.getBoolean("image.lazyLoad");
      }
    },
    showMenuByLongpress: {
      type: Boolean,
      default: () => {
        return uni_modules_uviewUltra_components_upImage_image.imageProps.getBoolean("image.showMenuByLongpress");
      }
    },
    loadingIcon: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upImage_image.imageProps.getString("image.loadingIcon");
      }
    },
    errorIcon: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upImage_image.imageProps.getString("image.errorIcon");
      }
    },
    showLoading: {
      type: Boolean,
      default: () => {
        return uni_modules_uviewUltra_components_upImage_image.imageProps.getBoolean("image.showLoading");
      }
    },
    showError: {
      type: Boolean,
      default: () => {
        return uni_modules_uviewUltra_components_upImage_image.imageProps.getBoolean("image.showError");
      }
    },
    fade: {
      type: Boolean,
      default: () => {
        return uni_modules_uviewUltra_components_upImage_image.imageProps.getBoolean("image.fade");
      }
    },
    webp: {
      type: Boolean,
      default: () => {
        return uni_modules_uviewUltra_components_upImage_image.imageProps.getBoolean("image.webp");
      }
    },
    duration: {
      type: Number,
      default: () => {
        return uni_modules_uviewUltra_components_upImage_image.imageProps.getNumber("image.duration");
      }
    },
    bgColor: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upImage_image.imageProps.getString("image.bgColor");
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
    const props = __props;
    const isError = common_vendor.ref(true);
    const loading = common_vendor.ref(true);
    common_vendor.ref(1);
    const backgroundStyle = common_vendor.ref(new UTSJSONObject({}));
    const show = common_vendor.ref(false);
    const emit = __emit;
    const realSrc = common_vendor.computed(() => {
      if (props.src == "")
        return "";
      return props.src;
    });
    const wrapStyle = common_vendor.computed(() => {
      let style = new UTSJSONObject({});
      style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.width);
      style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.height);
      style["borderRadius"] = props.shape == "circle" ? "10000px" : uni_modules_uviewUltra_libs_function_index.addUnit(props.radius);
      if (props.radius != null) {
        style["overflow"] = parseInt(props.radius) > 0 ? "hidden" : "visible";
      }
      return uni_modules_uviewUltra_libs_function_index.deepMerge(style, new UTSJSONObject({}));
    });
    const mergedCustomStyle = common_vendor.computed(() => {
      return uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle);
    });
    const imageStyle = common_vendor.computed(() => {
      return new UTSJSONObject({
        borderRadius: props.shape == "circle" ? "10000px" : uni_modules_uviewUltra_libs_function_index.addUnit(props.radius),
        width: uni_modules_uviewUltra_libs_function_index.addUnit(props.width),
        height: uni_modules_uviewUltra_libs_function_index.addUnit(props.height)
      });
    });
    const loadingStyle = common_vendor.computed(() => {
      return new UTSJSONObject({
        borderRadius: props.shape == "circle" ? "50%" : uni_modules_uviewUltra_libs_function_index.addUnit(props.radius),
        backgroundColor: props.bgColor,
        width: uni_modules_uviewUltra_libs_function_index.addUnit(props.width),
        height: uni_modules_uviewUltra_libs_function_index.addUnit(props.height)
      });
    });
    const errorStyle = common_vendor.computed(() => {
      return new UTSJSONObject({
        borderRadius: props.shape == "circle" ? "50%" : uni_modules_uviewUltra_libs_function_index.addUnit(props.radius),
        width: uni_modules_uviewUltra_libs_function_index.addUnit(props.width),
        height: uni_modules_uviewUltra_libs_function_index.addUnit(props.height)
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
    common_vendor.watch(() => {
      return props.src;
    }, (newVal) => {
      initLoading(newVal);
    });
    common_vendor.onMounted(() => {
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
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: realSrc.value,
        b: __props.mode,
        c: common_vendor.o(onErrorHandler, "28"),
        d: common_vendor.o(onLoadHandler, "1b"),
        e: __props.lazyLoad,
        f: common_vendor.s(imageStyle.value),
        g: __props.showLoading && loading.value
      }, __props.showLoading && loading.value ? {
        h: common_vendor.p({
          name: __props.loadingIcon,
          width: __props.width,
          height: __props.height,
          class: "data-v-efb2adde"
        }),
        i: common_vendor.s(loadingStyle.value)
      } : {}, {
        j: __props.showError && isError.value && !loading.value
      }, __props.showError && isError.value && !loading.value ? {
        k: common_vendor.p({
          name: __props.errorIcon,
          width: __props.width,
          height: __props.height,
          class: "data-v-efb2adde"
        }),
        l: common_vendor.s(errorStyle.value)
      } : {}, {
        m: common_vendor.o(onClick, "4c"),
        n: common_vendor.s(wrapStyle.value),
        o: common_vendor.s(backgroundStyle.value),
        p: common_vendor.s(mergedCustomStyle.value),
        q: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        r: show.value,
        s: __props.fade ? 1e3 : 0,
        t: `${_ctx.u_s_b_h}px`,
        v: `${_ctx.u_s_a_i_b}px`,
        w: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-efb2adde"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-image/up-image.js.map
