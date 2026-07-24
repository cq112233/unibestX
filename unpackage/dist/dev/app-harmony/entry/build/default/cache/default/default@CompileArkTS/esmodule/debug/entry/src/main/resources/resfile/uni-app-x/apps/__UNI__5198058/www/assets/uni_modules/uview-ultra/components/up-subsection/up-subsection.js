const { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, Fragment, renderList, renderSlot, toDisplayString } = globalThis.Vue
import { s as subsectionProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-subsection/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { b as addStyle, a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-subsection",
  mixins: [
    mpMixin,
    mixin,
    subsectionProps
  ],
  data() {
    return {
      innerCurrent: 0,
      componentWidth: 0,
      firstTime: true,
      windowResizeCallback: new UTSJSONObject({})
    };
  },
  watch: {
    list() {
      this.init();
    },
    current: {
      immediate: true,
      handler(n) {
        let nn = parseInt(n.toString());
        if (nn !== this.innerCurrent) {
          this.innerCurrent = nn;
        }
      }
    }
  },
  computed: {
    wrapperStyle() {
      const style = new UTSJSONObject({});
      if (this.mode === "button") {
        style["backgroundColor"] = this.bgColor;
      }
      return style;
    },
    // 滑块的样式
    barStyle() {
      const style = new UTSJSONObject({});
      if (this.componentWidth > 0) {
        const itemWidth = this.componentWidth / this.list.length;
        style["width"] = itemWidth.toString() + "px";
        style["transform"] = `translateX(${this.innerCurrent * itemWidth}px)`;
      } else {
        if (this.list.length > 0) {
          style["width"] = (100 / this.list.length).toString() + "%";
        }
        style["transform"] = `translateX(${this.innerCurrent * 100}%)`;
      }
      if (this.firstTime) {
        style["transitionDuration"] = "0ms";
      } else {
        style["transitionDuration"] = "300ms";
      }
      style["left"] = "0px";
      style["top"] = "0px";
      style["bottom"] = "0px";
      return style;
    },
    innerBarStyle() {
      const style = new UTSJSONObject({});
      if (this.mode === "subsection") {
        if (this.activeColor != "#3c9cff") {
          style["backgroundColor"] = this.activeColor;
        }
      }
      return style;
    }
  },
  mounted() {
    this.init();
  },
  beforeUnmount() {
  },
  emits: ["change"],
  methods: {
    addStyle(e = null) {
      return addStyle(e);
    },
    addUnit(e = null) {
      return addUnit(e);
    },
    init() {
      this.innerCurrent = parseInt(this.current.toString());
      this.$nextTick(() => {
        this.resize();
      });
    },
    resize() {
      this.getWrapperRect().then((rect = null) => {
        if (rect != null && rect.width != null && rect.width > 0) {
          this.componentWidth = rect.width;
          if (this.firstTime) {
            this.$nextTick(() => {
              setTimeout(() => {
                this.firstTime = false;
              }, 50);
            });
          }
        }
      });
    },
    getWrapperRect() {
      return new Promise((resolve) => {
        uni.createSelectorQuery().in(this).select(".up-subsection").boundingClientRect().exec((rect) => {
          if (rect != null && rect.length > 0) {
            resolve(rect[0]);
          } else {
            resolve(null);
          }
        });
      });
    },
    itemStyle(index) {
      const style = new UTSJSONObject({});
      if (this.mode === "subsection") {
        if (this.activeColor != "#3c9cff") {
          style["borderColor"] = this.activeColor;
        }
        style["borderWidth"] = "1px";
        style["borderStyle"] = "solid";
      }
      return style;
    },
    textStyle(index) {
      var _a, _b;
      const style = new UTSJSONObject({});
      if (this.disabled) {
        style["fontWeight"] = "normal";
        style["fontSize"] = addUnit(this.fontSize);
        style["color"] = "#c8c9cc";
        return style;
      }
      style["fontWeight"] = this.bold && this.innerCurrent === index ? "bold" : "normal";
      style["fontSize"] = addUnit(this.fontSize);
      const item = this.list[index];
      const activeColorTemp = typeof item == "object" && item != null ? (_a = item[this.activeColorKeyName]) !== null && _a !== void 0 ? _a : "" : "";
      const inactiveColorTemp = typeof item === "object" && item != null ? (_b = item[this.inactiveColorKeyName]) !== null && _b !== void 0 ? _b : "" : "";
      if (this.mode === "subsection") {
        style["color"] = this.innerCurrent === index ? activeColorTemp != "" ? activeColorTemp : "#fff" : inactiveColorTemp != "" ? inactiveColorTemp : this.inactiveColor;
      } else {
        const c = activeColorTemp != "" ? activeColorTemp : this.activeColor;
        if (this.innerCurrent == index) {
          if (c != "#3c9cff") {
            style["color"] = c;
          }
        } else {
          style["color"] = inactiveColorTemp != "" ? inactiveColorTemp : this.inactiveColor;
        }
      }
      return style;
    },
    // 判断展示文本
    getText(item = null) {
      if (typeof item === "string") {
        return item;
      } else if (typeof item === "object") {
        let temp = UTS.JSON.parse(UTS.JSON.stringify(item));
        return temp.getString(this.keyName);
      } else {
        return "error";
      }
    },
    clickHandler(index) {
      if (this.disabled)
        return null;
      this.innerCurrent = index;
      this.$emit("change", index);
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-subsection": { "": { "display": "flex", "flexDirection": "row", "position": "relative", "overflow": "hidden", "width": "100%", "boxSizing": "border-box" } }, "up-subsection--button": { "": { "height": 34, "backgroundColor": "#eeeeef", "paddingTop": 3, "paddingRight": 3, "paddingBottom": 3, "paddingLeft": 3, "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4, "alignItems": "stretch" } }, "up-subsection--button__bar": { "": { "backgroundColor": "#ffffff", "!borderTopLeftRadius": 4, "!borderTopRightRadius": 4, "!borderBottomRightRadius": 4, "!borderBottomLeftRadius": 4 } }, "up-subsection--subsection": { "": { "height": 32 } }, "up-subsection__bar": { "": { "position": "absolute", "left": 0, "transitionProperty": "transform,color", "transitionDuration": "0.3s", "transitionTimingFunction": "ease-in-out", "display": "flex", "flexDirection": "row", "alignItems": "stretch" } }, "up-subsection__bar__inner": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "alignSelf": "stretch", "backgroundColor": "var(--theme-color, #0957de)" } }, "up-subsection__bar__inner--button": { "": { "marginTop": 3, "marginRight": 3, "marginBottom": 3, "marginLeft": 3, "backgroundColor": "#ffffff" } }, "up-subsection__bar--first": { "": { "borderTopLeftRadius": 4, "borderBottomLeftRadius": 4, "borderTopRightRadius": 0, "borderBottomRightRadius": 0 } }, "up-subsection__bar--center": { "": { "borderTopLeftRadius": 0, "borderBottomLeftRadius": 0, "borderTopRightRadius": 0, "borderBottomRightRadius": 0 } }, "up-subsection__bar--last": { "": { "borderTopLeftRadius": 0, "borderBottomLeftRadius": 0, "borderTopRightRadius": 4, "borderBottomRightRadius": 4 } }, "up-subsection__item": { "": { "display": "flex", "flexDirection": "row", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "justifyContent": "center", "alignItems": "center", "position": "relative", "borderTopColor": "var(--theme-color, #0957de)", "borderRightColor": "var(--theme-color, #0957de)", "borderBottomColor": "var(--theme-color, #0957de)", "borderLeftColor": "var(--theme-color, #0957de)" } }, "up-subsection__item--no-border-right": { "": { "!borderRightWidth": 0 } }, "up-subsection__item--first": { "": { "borderTopLeftRadius": 4, "borderBottomLeftRadius": 4 } }, "up-subsection__item--last": { "": { "borderTopRightRadius": 4, "borderBottomRightRadius": 4 } }, "up-subsection__item__text": { "": { "fontSize": 12, "lineHeight": "14px", "transitionProperty": "color", "transitionDuration": "0.3s" } }, "up-subsection__item__text--disabled": { "": { "!color": "#c8c9cc" } }, "up-subsection__item__text--active": { "": { "color": "var(--theme-color, #0957de)" } }, "@TRANSITION": { "up-subsection__bar": { "property": "transform,color", "duration": "0.3s", "timingFunction": "ease-in-out" }, "up-subsection__item__text": { "property": "color", "duration": "0.3s" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["up-subsection", [`up-subsection--${_ctx.mode}`]]),
      ref: "up-subsection",
      style: normalizeStyle([$options.addStyle(_ctx.customStyle), $options.wrapperStyle])
    },
    [
      createElementVNode(
        "view",
        {
          class: "up-subsection__bar cursor-pointer",
          ref: "up-subsection__bar",
          style: normalizeStyle($options.barStyle)
        },
        [
          createElementVNode(
            "view",
            {
              class: normalizeClass(["up-subsection__bar__inner", {
                "up-subsection--button__bar": _ctx.mode === "button",
                "up-subsection__bar__inner--button": _ctx.mode === "button",
                "up-subsection__bar--first": $data.innerCurrent == 0 && _ctx.mode === "subsection",
                "up-subsection__bar--center": $data.innerCurrent > 0 && $data.innerCurrent < _ctx.list.length - 1 && _ctx.mode === "subsection",
                "up-subsection__bar--last": $data.innerCurrent == _ctx.list.length - 1 && _ctx.mode === "subsection"
              }]),
              style: normalizeStyle($options.innerBarStyle)
            },
            null,
            6
            /* CLASS, STYLE */
          )
        ],
        4
        /* STYLE */
      ),
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList(_ctx.list, (item, index) => {
          return openBlock(), createElementBlock("view", {
            class: normalizeClass(["up-subsection__item cursor-pointer", [
              `up-subsection__item--${index.toString()}`,
              index < _ctx.list.length - 1 ? "up-subsection__item--no-border-right" : "",
              index == 0 ? "up-subsection__item--first" : "",
              index == _ctx.list.length - 1 ? "up-subsection__item--last" : "",
              _ctx.disabled ? "up-subsection__item--disabled" : ""
            ]]),
            ref_for: true,
            ref: `up-subsection__item--${index.toString()}`,
            style: normalizeStyle([$options.itemStyle(index)]),
            onClick: ($event) => $options.clickHandler(index),
            key: index
          }, [
            renderSlot(_ctx.$slots, "item", {
              item,
              index
            }, () => [
              createElementVNode(
                "text",
                {
                  class: normalizeClass(["up-subsection__item__text", [
                    _ctx.disabled ? "up-subsection__item__text--disabled" : "",
                    $data.innerCurrent == index && _ctx.mode === "button" && _ctx.activeColor == "#3c9cff" ? "up-subsection__item__text--active" : ""
                  ]]),
                  style: normalizeStyle([$options.textStyle(index)])
                },
                toDisplayString($options.getText(item)),
                7
                /* TEXT, CLASS, STYLE */
              )
            ])
          ], 14, ["onClick"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-subsection/up-subsection.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-subsection.js.map
