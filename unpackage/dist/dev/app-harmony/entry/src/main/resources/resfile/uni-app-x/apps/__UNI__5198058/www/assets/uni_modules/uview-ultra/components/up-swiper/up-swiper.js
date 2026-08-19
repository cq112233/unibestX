import { _ as __easycom_1$1 } from "../up-loading-icon/up-loading-icon.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_1$2 } from "../up-swiper-indicator/up-swiper-indicator.js";
import "./swiper.js";
import { a as addUnit, b as addStyle, i as error } from "../../libs/function/index.js";
import { i as image, v as video } from "../../libs/function/test.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-swiper"
  },
  __name: "up-swiper",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    indicator: {
      type: Boolean,
      default: false
    },
    indicatorActiveColor: {
      type: String,
      default: "#FFFFFF"
    },
    indicatorInactiveColor: {
      type: String,
      default: "rgba(255, 255, 255, 0.35)"
    },
    indicatorStyle: {
      type: [String, Object],
      default: ""
    },
    indicatorMode: {
      type: String,
      default: "line"
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    current: {
      type: [String, Number],
      default: 0
    },
    currentItemId: {
      type: String,
      default: ""
    },
    interval: {
      type: [String, Number],
      default: 3e3
    },
    duration: {
      type: [String, Number],
      default: 300
    },
    circular: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    previousMargin: {
      type: [String, Number],
      default: 0
    },
    nextMargin: {
      type: [String, Number],
      default: 0
    },
    acceleration: {
      type: Boolean,
      default: false
    },
    displayMultipleItems: {
      type: Number,
      default: 1
    },
    easingFunction: {
      type: String,
      default: "default"
    },
    keyName: {
      type: String,
      default: "url"
    },
    imgMode: {
      type: String,
      default: "aspectFill"
    },
    height: {
      type: [String, Number],
      default: 130
    },
    bgColor: {
      type: String,
      default: "#f3f4f6"
    },
    radius: {
      type: [String, Number],
      default: 4
    },
    loading: {
      type: Boolean,
      default: false
    },
    showTitle: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click", "change", "update:current"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const currentIndex = ref(parseInt(props.current.toString()));
    const swiperContainerStyle = computed(() => {
      return new UTSJSONObject({
        backgroundColor: props.bgColor,
        height: addUnit(props.height),
        borderRadius: addUnit(props.radius)
      });
    });
    const swiperWrapperStyle = computed(() => {
      return new UTSJSONObject({
        width: "100%",
        height: addUnit(props.height)
      });
    });
    const swiperImageStyle = computed(() => {
      return new UTSJSONObject({
        width: "100%",
        height: addUnit(props.height),
        borderRadius: addUnit(props.radius)
      });
    });
    const swiperVideoStyle = computed(() => {
      return new UTSJSONObject({
        height: addUnit(props.height)
      });
    });
    const customIndicatorStyle = computed(() => {
      const res = addStyle(props.indicatorStyle);
      if (typeof res === "object" && res != null) {
        return res;
      }
      return new UTSJSONObject({});
    });
    function getSource(item = null) {
      var _a2, _b;
      let src = "";
      if (item == null)
        return "";
      if (typeof item === "string") {
        src = item;
      } else if (typeof item === "object" && props.keyName != "") {
        const obj = item;
        src = (_b = (_a2 = obj[props.keyName]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
      } else {
        error("请按格式传递列表参数");
        return "";
      }
      return src;
    }
    function getItemTitle(item = null) {
      var _a2, _b;
      if (item == null)
        return "";
      if (typeof item === "string")
        return item;
      if (typeof item === "object") {
        const obj = item;
        return (_b = (_a2 = obj["title"]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
      }
      return "";
    }
    function getPoster(item = null) {
      var _a2, _b;
      if (item == null)
        return "";
      if (typeof item === "object") {
        const obj = item;
        return (_b = (_a2 = obj["poster"]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
      }
      return "";
    }
    function getVideoTitle(item = null) {
      if (!props.showTitle || item == null)
        return "";
      if (typeof item === "object") {
        return getItemTitle(item);
      }
      return "";
    }
    function isImageTitleVisible(item = null) {
      if (!props.showTitle || item == null)
        return false;
      const title = getItemTitle(item);
      if (title == "")
        return false;
      return image(getSource(item));
    }
    function getItemType(item = null) {
      if (item == null)
        return "";
      if (typeof item === "string")
        return video(getSource(item)) ? "video" : "image";
      if (typeof item === "object" && props.keyName != "") {
        const obj = item;
        if (obj["type"] == null)
          return video(getSource(item)) ? "video" : "image";
        if (obj["type"] == "image")
          return "image";
        if (obj["type"] == "video")
          return "video";
        return "image";
      }
      return "image";
    }
    function pauseVideo(index) {
      if (index >= 0 && index < props.list.length) {
        const lastItem = getSource(props.list[index]);
        if (video(lastItem)) {
          const video2 = uni.createVideoContext(`video-${index}`);
          video2 === null || video2 === void 0 ? null : video2.pause();
        }
      }
    }
    function change(e) {
      const current = e.detail.current;
      pauseVideo(currentIndex.value);
      currentIndex.value = current;
      emit("update:current", currentIndex.value);
      emit("change", e.detail);
    }
    function itemStyle(index) {
      const style = new UTSJSONObject({});
      if (props.nextMargin.toString() != "" && props.previousMargin.toString() != "") {
        style["borderRadius"] = addUnit(props.radius);
        if (index != currentIndex.value) {
          style["transform"] = "scale(0.92)";
        }
      }
      return style;
    }
    function clickHandler(index) {
      emit("click", index);
    }
    watch(() => {
      return props.current;
    }, (val = null, preVal = null) => {
      if (val == preVal)
        return null;
      currentIndex.value = parseInt(val.toString());
    });
    const __returned__ = { props, emit, currentIndex, swiperContainerStyle, swiperWrapperStyle, swiperImageStyle, swiperVideoStyle, customIndicatorStyle, getSource, getItemTitle, getPoster, getVideoTitle, isImageTitleVisible, getItemType, pauseVideo, change, itemStyle, clickHandler };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-swiper": { "": { "display": "flex", "flexDirection": "column", "position": "relative", "overflow": "hidden", "width": "100%" } }, "up-swiper__loading": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "width": "100%", "height": "100%" } }, "up-swiper__wrapper": { "": { "width": "100%", "minWidth": 0 } }, "up-swiper__wrapper__item": { "": { "width": "100%" } }, "up-swiper__wrapper__item__wrapper": { "": { "display": "flex", "flexDirection": "row", "position": "relative", "overflow": "hidden", "transitionProperty": "transform", "transitionDuration": "0.3s", "width": "100%" } }, "up-swiper__wrapper__item__wrapper__image": { "": { "width": "100%" } }, "up-swiper__wrapper__item__wrapper__video": { "": { "width": "100%" } }, "up-swiper__wrapper__item__wrapper__title": { "": { "position": "absolute", "backgroundColor": "rgba(0,0,0,0.3)", "bottom": 0, "left": 0, "right": 0, "paddingTop": "12rpx", "paddingRight": "24rpx", "paddingBottom": "12rpx", "paddingLeft": "24rpx" } }, "up-swiper__wrapper__item__wrapper__title-text": { "": { "fontSize": "28rpx", "color": "#FFFFFF" } }, "up-swiper__indicator": { "": { "position": "absolute", "bottom": 10, "left": 0, "right": 0, "display": "flex", "flexDirection": "row", "justifyContent": "center", "zIndex": 10 } }, "@TRANSITION": { "up-swiper__wrapper__item__wrapper": { "property": "transform", "duration": "0.3s" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, renderList: _renderList, Fragment: _Fragment, renderSlot: _renderSlot, normalizeStyle: _normalizeStyle, createBlock: _createBlock, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_loading_icon = resolveEasycom(__resolveDynamicComponent("up-loading-icon"), __easycom_1$1);
  const _component_video = _resolveComponent("video");
  const _component_up_swiper_indicator = resolveEasycom(__resolveDynamicComponent("up-swiper-indicator"), __easycom_1$2);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: "up-swiper",
      style: _normalizeStyle($setup.swiperContainerStyle)
    },
    [
      $props.loading ? (_openBlock(), _createElementBlock("view", {
        key: 0,
        class: "up-swiper__loading"
      }, [
        _createVNode(_component_up_loading_icon, { mode: "circle" })
      ])) : (_openBlock(), _createElementBlock("swiper", {
        key: 1,
        class: "up-swiper__wrapper",
        style: _normalizeStyle($setup.swiperWrapperStyle),
        onChange: $setup.change,
        circular: $props.circular,
        interval: $props.interval,
        duration: $props.duration,
        autoplay: $props.autoplay,
        current: $props.current,
        vertical: $props.vertical
      }, [
        (_openBlock(true), _createElementBlock(
          _Fragment,
          null,
          _renderList($props.list, (item, index) => {
            return _openBlock(), _createElementBlock("swiper-item", {
              class: "up-swiper__wrapper__item",
              key: index
            }, [
              _renderSlot(_ctx.$slots, "default", {
                item,
                index
              }, () => [
                _createElementVNode(
                  "view",
                  {
                    class: "up-swiper__wrapper__item__wrapper",
                    style: _normalizeStyle($setup.itemStyle(index))
                  },
                  [
                    $setup.getItemType(item) == "image" ? (_openBlock(), _createElementBlock("image", {
                      key: 0,
                      class: "up-swiper__wrapper__item__wrapper__image",
                      src: $setup.getSource(item),
                      mode: $props.imgMode,
                      onClick: ($event) => $setup.clickHandler(index),
                      style: _normalizeStyle($setup.swiperImageStyle)
                    }, null, 12, ["src", "mode", "onClick"])) : _createCommentVNode("v-if", true),
                    $setup.getItemType(item) == "video" ? (_openBlock(), _createBlock(_component_video, {
                      key: 1,
                      class: "up-swiper__wrapper__item__wrapper__video",
                      id: `video-${index}`,
                      "enable-progress-gesture": false,
                      src: $setup.getSource(item),
                      poster: $setup.getPoster(item),
                      title: $setup.getVideoTitle(item),
                      style: _normalizeStyle($setup.swiperVideoStyle),
                      controls: "",
                      onClick: ($event) => $setup.clickHandler(index)
                    }, null, 8, ["id", "src", "poster", "title", "style", "onClick"])) : _createCommentVNode("v-if", true),
                    $setup.isImageTitleVisible(item) ? (_openBlock(), _createElementBlock("view", {
                      key: 2,
                      class: "up-swiper__wrapper__item__wrapper__title"
                    }, [
                      _createElementVNode(
                        "text",
                        { class: "up-line-1 up-swiper__wrapper__item__wrapper__title-text" },
                        _toDisplayString($setup.getItemTitle(item)),
                        1
                        /* TEXT */
                      )
                    ])) : _createCommentVNode("v-if", true)
                  ],
                  4
                  /* STYLE */
                )
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ], 44, ["circular", "interval", "duration", "autoplay", "current", "vertical"])),
      _createElementVNode(
        "view",
        {
          class: "up-swiper__indicator",
          style: _normalizeStyle($setup.customIndicatorStyle)
        },
        [
          _renderSlot(_ctx.$slots, "indicator", {}, () => [
            !$props.loading && $props.indicator && !$props.showTitle ? (_openBlock(), _createBlock(_component_up_swiper_indicator, {
              key: 0,
              indicatorActiveColor: $props.indicatorActiveColor,
              indicatorInactiveColor: $props.indicatorInactiveColor,
              length: $props.list.length,
              current: $setup.currentIndex,
              indicatorMode: $props.indicatorMode
            }, null, 8, ["indicatorActiveColor", "indicatorInactiveColor", "length", "current", "indicatorMode"])) : _createCommentVNode("v-if", true)
          ])
        ],
        4
        /* STYLE */
      )
    ],
    4
    /* STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-swiper/up-swiper.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-swiper.js.map
