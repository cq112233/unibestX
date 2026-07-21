import { _ as __easycom_0 } from "../up-icon/up-icon.js";
const { defineComponent, ref, computed, watch, onMounted, resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, normalizeStyle, renderSlot, createVNode, createCommentVNode } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { a as addUnit, h as deepMerge, b as addStyle } from "../../libs/function/index.js";
import { d as defProps } from "./image.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "up-image",
  props: {
    src: {
      type: String,
      default: () => {
        return defProps.getString("image.src");
      }
    },
    mode: {
      type: String,
      default: () => {
        return defProps.getString("image.mode");
      }
    },
    width: {
      type: String,
      default: () => {
        return defProps.getString("image.width");
      }
    },
    height: {
      type: String,
      default: () => {
        return defProps.getString("image.height");
      }
    },
    shape: {
      type: String,
      default: () => {
        return defProps.getString("image.shape");
      }
    },
    radius: {
      type: String,
      default: () => {
        return defProps.getString("image.radius");
      }
    },
    lazyLoad: {
      type: Boolean,
      default: () => {
        return defProps.getBoolean("image.lazyLoad");
      }
    },
    showMenuByLongpress: {
      type: Boolean,
      default: () => {
        return defProps.getBoolean("image.showMenuByLongpress");
      }
    },
    loadingIcon: {
      type: String,
      default: () => {
        return defProps.getString("image.loadingIcon");
      }
    },
    errorIcon: {
      type: String,
      default: () => {
        return defProps.getString("image.errorIcon");
      }
    },
    showLoading: {
      type: Boolean,
      default: () => {
        return defProps.getBoolean("image.showLoading");
      }
    },
    showError: {
      type: Boolean,
      default: () => {
        return defProps.getBoolean("image.showError");
      }
    },
    fade: {
      type: Boolean,
      default: () => {
        return defProps.getBoolean("image.fade");
      }
    },
    webp: {
      type: Boolean,
      default: () => {
        return defProps.getBoolean("image.webp");
      }
    },
    duration: {
      type: Number,
      default: () => {
        return defProps.getNumber("image.duration");
      }
    },
    bgColor: {
      type: String,
      default: () => {
        return defProps.getString("image.bgColor");
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
    const isError = ref(true);
    const loading = ref(true);
    const opacity = ref(1);
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
    const __returned__ = { props, isError, loading, opacity, backgroundStyle, show, emit, realSrc, wrapStyle, mergedCustomStyle, imageStyle, loadingStyle, errorStyle, initLoading, onClick, onErrorHandler, removeBgColor, onLoadHandler };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-image": { "": { "position": "relative", "transitionProperty": "opacity", "transitionDuration": "0.5s", "transitionTimingFunction": "ease-in-out" } }, "up-image__image": { "": { "width": "100%", "height": "100%" } }, "up-image__loading": { "": { "position": "absolute", "top": 0, "left": 0, "width": "100%", "height": "100%", "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "backgroundColor": "#f3f4f6" } }, "up-image__error": { "": { "position": "absolute", "top": 0, "left": 0, "width": "100%", "height": "100%", "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "backgroundColor": "#f3f4f6" } }, "@TRANSITION": { "up-image": { "property": "opacity", "duration": "0.5s", "timingFunction": "ease-in-out" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  return openBlock(), createElementBlock("view", {
    mode: "fade",
    show: $setup.show,
    duration: $props.fade ? 1e3 : 0
  }, [
    createElementVNode(
      "view",
      {
        class: "up-image",
        onClick: $setup.onClick,
        style: normalizeStyle([$setup.wrapStyle, $setup.backgroundStyle, $setup.mergedCustomStyle])
      },
      [
        createElementVNode("image", {
          src: $setup.realSrc,
          mode: $props.mode,
          onError: $setup.onErrorHandler,
          onLoad: $setup.onLoadHandler,
          "lazy-load": $props.lazyLoad,
          class: "up-image__image",
          style: normalizeStyle($setup.imageStyle)
        }, null, 44, ["src", "mode", "lazy-load"]),
        $props.showLoading && $setup.loading ? (openBlock(), createElementBlock(
          "view",
          {
            key: 0,
            class: "up-image__loading",
            style: normalizeStyle($setup.loadingStyle)
          },
          [
            renderSlot(_ctx.$slots, "loading", {}, () => [
              createVNode(_component_up_icon, {
                name: $props.loadingIcon,
                width: $props.width,
                height: $props.height
              }, null, 8, ["name", "width", "height"])
            ])
          ],
          4
          /* STYLE */
        )) : createCommentVNode("v-if", true),
        $props.showError && $setup.isError && !$setup.loading ? (openBlock(), createElementBlock(
          "view",
          {
            key: 1,
            class: "up-image__error",
            style: normalizeStyle($setup.errorStyle)
          },
          [
            renderSlot(_ctx.$slots, "error", {}, () => [
              createVNode(_component_up_icon, {
                name: $props.errorIcon,
                width: $props.width,
                height: $props.height
              }, null, 8, ["name", "width", "height"])
            ])
          ],
          4
          /* STYLE */
        )) : createCommentVNode("v-if", true)
      ],
      4
      /* STYLE */
    )
  ], 8, ["show", "duration"]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-image/up-image.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-image.js.map
