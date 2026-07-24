import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon&";
const { defineComponent, resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, normalizeStyle, createVNode, Fragment, renderList, renderSlot, createElementVNode, createCommentVNode, createBlock, toDisplayString } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_1$2 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-swiper-indicator/up-swiper-indicator&";
import { p as propsSwiper } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-swiper/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { b as addStyle, a as addUnit, f as error } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { o as object, i as image, v as video } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/test&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-swiper",
  mixins: [mpMixin, mixin, propsSwiper],
  data() {
    return {
      currentIndex: 0
    };
  },
  watch: {
    current(val, preVal) {
      if (val === preVal)
        return null;
      this.currentIndex = val;
    }
  },
  emits: ["click", "change", "update:current"],
  computed: {},
  methods: {
    addStyle(val = null) {
      return addStyle(val);
    },
    addUnit(val = null) {
      return addUnit(val);
    },
    itemStyle(index) {
      const style = new UTSJSONObject(
        {}
        // 左右流出空间的写法不支持nvue和头条
        // 只有配置了此二值，才加上对应的圆角，以及缩放
      );
      if (this.nextMargin != "" && this.previousMargin != "") {
        style["borderRadius"] = addUnit(this.radius);
        if (index !== this.currentIndex)
          style["transform"] = "scale(0.92)";
      }
      return style;
    },
    testObject(e = null) {
      return object(e);
    },
    testImage(e) {
      return image(e);
    },
    getItemType(item = null) {
      if (item == null)
        return "";
      if (typeof item === "string")
        return video(this.getSource(item)) ? "video" : "image";
      if (typeof item === "object" && this.keyName != "") {
        item = item;
        if (item["type"] == null)
          return video(this.getSource(item)) ? "video" : "image";
        if (item["type"] === "image")
          return "image";
        if (item["type"] === "video")
          return "video";
        return "image";
      }
      return "image";
    },
    // 获取目标路径，可能数组中为字符串，对象的形式，额外可指定对象的目标属性名keyName
    getSource(item = null) {
      let src = "";
      if (typeof item === "string")
        src = item;
      else if (typeof item === "object" && this.keyName != "") {
        item = item;
        src = item[this.keyName].toString();
      } else {
        error("请按格式传递列表参数");
        return "";
      }
      return src;
    },
    getItemTitle(item = null) {
      if (typeof item === "string")
        return item;
      if (typeof item === "object") {
        item = item;
        return item["title"].toString();
      } else
        error("请按格式传递列表参数");
      return "";
    },
    // 轮播切换事件
    change(e) {
      const current = e.detail.current;
      this.pauseVideo(this.currentIndex);
      this.currentIndex = current;
      this.$emit("update:current", this.currentIndex);
      this.$emit("change", e.detail);
    },
    // 切换轮播时，暂停视频播放
    pauseVideo(index) {
      const lastItem = this.getSource(this.list[index]);
      if (video(lastItem)) {
        const video2 = uni.createVideoContext(`video-${index}`, this);
        video2.pause();
      }
    },
    // 当一个轮播item为视频时，获取它的视频海报
    getPoster(item = null) {
      if (typeof item === "object") {
        item = item;
        return item["poster"].toString() != "" ? item["poster"].toString() : "";
      }
      return "";
    },
    // 点击某个item
    clickHandler(index) {
      this.$emit("click", index);
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-swiper": { "": { "display": "flex", "flexDirection": "column", "position": "relative", "overflow": "hidden", "width": "100%" } }, "up-swiper__loading": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "width": "100%", "height": "100%" } }, "up-swiper__wrapper": { "": { "width": "100%", "minWidth": 0 } }, "up-swiper__wrapper__item": { "": { "width": "100%" } }, "up-swiper__wrapper__item__wrapper": { "": { "display": "flex", "flexDirection": "row", "position": "relative", "overflow": "hidden", "transitionProperty": "transform", "transitionDuration": "0.3s", "width": "100%" } }, "up-swiper__wrapper__item__wrapper__image": { "": { "width": "100%" } }, "up-swiper__wrapper__item__wrapper__video": { "": { "width": "100%" } }, "up-swiper__wrapper__item__wrapper__title": { "": { "position": "absolute", "backgroundColor": "rgba(0,0,0,0.3)", "bottom": 0, "left": 0, "right": 0, "paddingTop": "12rpx", "paddingRight": "24rpx", "paddingBottom": "12rpx", "paddingLeft": "24rpx" } }, "up-swiper__wrapper__item__wrapper__title-text": { "": { "fontSize": "28rpx", "color": "#FFFFFF" } }, "up-swiper__indicator": { "": { "position": "absolute", "bottom": 10, "left": 0, "right": 0, "display": "flex", "flexDirection": "row", "justifyContent": "center", "zIndex": 10 } }, "@TRANSITION": { "up-swiper__wrapper__item__wrapper": { "property": "transform", "duration": "0.3s" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_loading_icon = resolveEasycom(resolveDynamicComponent("up-loading-icon"), __easycom_1$1);
  const _component_video = resolveComponent("video");
  const _component_up_swiper_indicator = resolveEasycom(resolveDynamicComponent("up-swiper-indicator"), __easycom_1$2);
  return openBlock(), createElementBlock(
    "view",
    {
      class: "up-swiper",
      style: normalizeStyle({
        backgroundColor: _ctx.bgColor,
        height: $options.addUnit(_ctx.height),
        borderRadius: $options.addUnit(_ctx.radius)
      })
    },
    [
      _ctx.loading ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "up-swiper__loading"
      }, [
        createVNode(_component_up_loading_icon, { mode: "circle" })
      ])) : (openBlock(), createElementBlock("swiper", {
        key: 1,
        class: "up-swiper__wrapper",
        style: normalizeStyle({
          width: "100%",
          height: $options.addUnit(_ctx.height)
        }),
        onChange: _cache[0] || (_cache[0] = (...args) => $options.change && $options.change(...args)),
        circular: _ctx.circular,
        interval: _ctx.interval,
        duration: _ctx.duration,
        autoplay: _ctx.autoplay,
        current: _ctx.current,
        vertical: _ctx.vertical
      }, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.list, (item, index) => {
            return openBlock(), createElementBlock("swiper-item", {
              class: "up-swiper__wrapper__item",
              key: index
            }, [
              renderSlot(_ctx.$slots, "default", {
                item,
                index
              }, () => [
                createElementVNode(
                  "view",
                  {
                    class: "up-swiper__wrapper__item__wrapper",
                    style: normalizeStyle([$options.itemStyle(index)])
                  },
                  [
                    createCommentVNode(" 在nvue中，image图片的宽度默认为屏幕宽度，需要通过flex:1撑开，另外必须设置高度才能显示图片 "),
                    $options.getItemType(item) === "image" ? (openBlock(), createElementBlock("image", {
                      key: 0,
                      class: "up-swiper__wrapper__item__wrapper__image",
                      src: $options.getSource(item),
                      mode: _ctx.imgMode,
                      onClick: ($event) => $options.clickHandler(index),
                      style: normalizeStyle({
                        width: "100%",
                        height: $options.addUnit(_ctx.height),
                        borderRadius: $options.addUnit(_ctx.radius)
                      })
                    }, null, 12, ["src", "mode", "onClick"])) : createCommentVNode("v-if", true),
                    $options.getItemType(item) === "video" ? (openBlock(), createBlock(_component_video, {
                      key: 1,
                      class: "up-swiper__wrapper__item__wrapper__video",
                      id: `video-${index}`,
                      "enable-progress-gesture": false,
                      src: $options.getSource(item),
                      poster: $options.getPoster(item),
                      title: _ctx.showTitle && $options.testObject(item) && $options.getItemTitle(item) != "" ? $options.getItemTitle(item) : "",
                      style: normalizeStyle({
                        height: $options.addUnit(_ctx.height)
                      }),
                      controls: "",
                      onClick: ($event) => $options.clickHandler(index)
                    }, null, 8, ["id", "src", "poster", "title", "style", "onClick"])) : createCommentVNode("v-if", true),
                    _ctx.showTitle && $options.getItemTitle(item) != "" && $options.testImage($options.getSource(item)) ? (openBlock(), createElementBlock("view", {
                      key: 2,
                      class: "up-swiper__wrapper__item__wrapper__title"
                    }, [
                      createElementVNode(
                        "text",
                        { class: "up-line-1 up-swiper__wrapper__item__wrapper__title-text" },
                        toDisplayString($options.getItemTitle(item)),
                        1
                        /* TEXT */
                      )
                    ])) : createCommentVNode("v-if", true)
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
      createElementVNode(
        "view",
        {
          class: "up-swiper__indicator",
          style: normalizeStyle([$options.addStyle(_ctx.indicatorStyle)])
        },
        [
          renderSlot(_ctx.$slots, "indicator", {}, () => [
            !_ctx.loading && _ctx.indicator && !_ctx.showTitle ? (openBlock(), createBlock(_component_up_swiper_indicator, {
              key: 0,
              indicatorActiveColor: _ctx.indicatorActiveColor,
              indicatorInactiveColor: _ctx.indicatorInactiveColor,
              length: _ctx.list.length,
              current: $data.currentIndex,
              indicatorMode: _ctx.indicatorMode
            }, null, 8, ["indicatorActiveColor", "indicatorInactiveColor", "length", "current", "indicatorMode"])) : createCommentVNode("v-if", true)
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
