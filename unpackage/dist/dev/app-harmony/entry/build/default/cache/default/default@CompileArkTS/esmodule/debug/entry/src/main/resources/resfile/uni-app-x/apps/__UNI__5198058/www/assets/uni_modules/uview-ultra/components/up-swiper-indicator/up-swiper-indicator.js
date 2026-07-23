const { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, createCommentVNode, Fragment, renderList } = globalThis.Vue
import { p as propsSwiperIndicator } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-swiper-indicator/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-swiper-indicator",
  mixins: [mpMixin, mixin, propsSwiperIndicator],
  data() {
    return {
      lineWidth: 22
    };
  },
  computed: {
    lengthArray() {
      var _a;
      let list = [];
      const len = (_a = this.$props["length"]) !== null && _a !== void 0 ? _a : 0;
      for (var index = 0; index < len; index++) {
        list.push(index.toString());
      }
      return list;
    },
    // 指示器为线型的样式
    lineStyle() {
      let style = new UTSJSONObject({});
      style["width"] = addUnit(this.lineWidth);
      style["transform"] = `translateX(${addUnit(this.current * this.lineWidth)})`;
      style["backgroundColor"] = this.indicatorActiveColor;
      return style;
    }
  },
  methods: {
    addUnit(val = null) {
      return addUnit(val);
    },
    // 指示器为点型的样式
    dotStyle(index) {
      let style = new UTSJSONObject({});
      style["backgroundColor"] = index === this.current ? this.indicatorActiveColor : this.indicatorInactiveColor;
      return style;
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-swiper-indicator__wrapper": { "": { "display": "flex", "flexDirection": "row" } }, "up-swiper-indicator__wrapper--line": { "": { "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "height": 4 } }, "up-swiper-indicator__wrapper--line__bar": { "": { "width": 22, "height": 4, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "backgroundColor": "#FFFFFF", "transitionProperty": "transform", "transitionDuration": "0.3s" } }, "up-swiper-indicator__wrapper__dot": { "": { "width": 5, "height": 5, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "marginTop": 0, "marginRight": 4, "marginBottom": 0, "marginLeft": 4 } }, "up-swiper-indicator__wrapper__dot--active": { "": { "width": 12 } }, "@TRANSITION": { "up-swiper-indicator__wrapper--line__bar": { "property": "transform", "duration": "0.3s" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", { class: "up-swiper-indicator" }, [
    _ctx.indicatorMode === "line" ? (openBlock(), createElementBlock(
      "view",
      {
        key: 0,
        class: normalizeClass(["up-swiper-indicator__wrapper", [`up-swiper-indicator__wrapper--${_ctx.indicatorMode}`]]),
        style: normalizeStyle({
          width: $options.addUnit($data.lineWidth * _ctx.length),
          backgroundColor: _ctx.indicatorInactiveColor
        })
      },
      [
        createElementVNode(
          "view",
          {
            class: "up-swiper-indicator__wrapper--line__bar",
            style: normalizeStyle([$options.lineStyle])
          },
          null,
          4
          /* STYLE */
        )
      ],
      6
      /* CLASS, STYLE */
    )) : createCommentVNode("v-if", true),
    _ctx.indicatorMode === "dot" ? (openBlock(), createElementBlock("view", {
      key: 1,
      class: "up-swiper-indicator__wrapper"
    }, [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($options.lengthArray, (item, index) => {
          return openBlock(), createElementBlock(
            "view",
            {
              class: normalizeClass(["up-swiper-indicator__wrapper__dot", [index === _ctx.current ? "up-swiper-indicator__wrapper__dot--active" : ""]]),
              key: index,
              style: normalizeStyle([$options.dotStyle(index)])
            },
            null,
            6
            /* CLASS, STYLE */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ])) : createCommentVNode("v-if", true)
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-swiper-indicator/up-swiper-indicator.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-swiper-indicator.js.map
