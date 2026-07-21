import { _ as __easycom_0 } from "../up-status-bar/up-status-bar.js";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createCommentVNode, createElementVNode, createBlock, renderSlot, toDisplayString } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_35 } from "../up-icon/up-icon.js";
import { p as propsNavbar } from "./props.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { a as addUnit, g as getPx, b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = defineComponent({
  name: "up-navbar",
  mixins: [mpMixin, mixin, propsNavbar],
  data() {
    return {
      statusBarHeight: 0,
      placeholderHeight: "0px"
    };
  },
  emits: ["leftClick", "rightClick"],
  created() {
    this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
    this.placeholderHeight = addUnit(parseInt(getPx(this.height)) + this.statusBarHeight, "px");
  },
  methods: {
    addStyle(val = null) {
      return addStyle(val);
    },
    addUnit(val = null) {
      return addUnit(val);
    },
    getPx(val = null) {
      return getPx(val);
    },
    // 点击左侧区域
    leftClick() {
      this.$emit("leftClick");
      if (this.autoBack) {
        uni.navigateBack();
      }
    },
    // 点击右侧区域
    rightClick() {
      this.$emit("rightClick");
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-navbar--fixed": { "": { "position": "fixed", "left": 0, "right": 0, "top": 0, "zIndex": 11 } }, "up-navbar__content": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "height": 44, "backgroundColor": "#9acafc", "position": "relative", "justifyContent": "center" } }, "up-navbar__content__left": { "": { "paddingTop": 0, "paddingRight": 13, "paddingBottom": 0, "paddingLeft": 13, "position": "absolute", "top": 0, "bottom": 0, "display": "flex", "flexDirection": "row", "alignItems": "center", "left": 0 } }, "up-navbar__content__right": { "": { "paddingTop": 0, "paddingRight": 13, "paddingBottom": 0, "paddingLeft": 13, "position": "absolute", "top": 0, "bottom": 0, "display": "flex", "flexDirection": "row", "alignItems": "center", "right": 0 } }, "up-navbar__content__left--hover": { "": { "opacity": 0.7 } }, "up-navbar__content__left__text": { "": { "fontSize": 15, "marginLeft": 3 } }, "up-navbar__content__title": { "": { "textAlign": "center", "fontSize": 16, "color": "#303133" } }, "up-navbar__content__right__text": { "": { "fontSize": 15, "marginLeft": 3 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_status_bar = resolveEasycom(resolveDynamicComponent("up-status-bar"), __easycom_0);
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_35);
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["up-navbar", [_ctx.customClass]])
    },
    [
      _ctx.fixed && _ctx.placeholder ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: "up-navbar__placeholder",
          style: normalizeStyle({
            height: $data.placeholderHeight
          })
        },
        null,
        4
        /* STYLE */
      )) : createCommentVNode("v-if", true),
      createElementVNode(
        "view",
        {
          class: normalizeClass([_ctx.fixed ? "up-navbar--fixed" : ""])
        },
        [
          _ctx.safeAreaInsetTop ? (openBlock(), createBlock(_component_up_status_bar, {
            key: 0,
            bgColor: _ctx.bgColor
          }, null, 8, ["bgColor"])) : createCommentVNode("v-if", true),
          createElementVNode(
            "view",
            {
              class: normalizeClass(["up-navbar__content", [_ctx.border ? "up-border-bottom" : ""]]),
              style: normalizeStyle({
                height: $options.addUnit(_ctx.height),
                backgroundColor: _ctx.bgColor
              })
            },
            [
              createElementVNode("view", {
                class: "up-navbar__content__left",
                "hover-class": "up-navbar__content__left--hover",
                "hover-start-time": "150",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.leftClick && $options.leftClick(...args))
              }, [
                renderSlot(_ctx.$slots, "left", {}, () => [
                  _ctx.leftIcon ? (openBlock(), createBlock(_component_up_icon, {
                    key: 0,
                    name: _ctx.leftIcon,
                    size: _ctx.leftIconSize,
                    color: _ctx.leftIconColor
                  }, null, 8, ["name", "size", "color"])) : createCommentVNode("v-if", true),
                  _ctx.leftText ? (openBlock(), createElementBlock(
                    "text",
                    {
                      key: 1,
                      style: normalizeStyle({
                        color: _ctx.leftIconColor
                      }),
                      class: "up-navbar__content__left__text"
                    },
                    toDisplayString(_ctx.leftText),
                    5
                    /* TEXT, STYLE */
                  )) : createCommentVNode("v-if", true)
                ])
              ]),
              renderSlot(_ctx.$slots, "center", {}, () => [
                createElementVNode(
                  "text",
                  {
                    class: "up-line-1 up-navbar__content__title",
                    style: normalizeStyle([{
                      width: $options.addUnit(_ctx.titleWidth)
                    }, $options.addStyle(_ctx.titleStyle)])
                  },
                  toDisplayString(_ctx.title),
                  5
                  /* TEXT, STYLE */
                )
              ]),
              _ctx.$slots["right"] != null || _ctx.rightIcon != "" || _ctx.rightText != "" ? (openBlock(), createElementBlock("view", {
                key: 0,
                class: "up-navbar__content__right",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.rightClick && $options.rightClick(...args))
              }, [
                renderSlot(_ctx.$slots, "right", {}, () => [
                  _ctx.rightIcon ? (openBlock(), createBlock(_component_up_icon, {
                    key: 0,
                    name: _ctx.rightIcon,
                    size: "20"
                  }, null, 8, ["name"])) : createCommentVNode("v-if", true),
                  _ctx.rightText ? (openBlock(), createElementBlock(
                    "text",
                    {
                      key: 1,
                      class: "up-navbar__content__right__text"
                    },
                    toDisplayString(_ctx.rightText),
                    1
                    /* TEXT */
                  )) : createCommentVNode("v-if", true)
                ])
              ])) : createCommentVNode("v-if", true)
            ],
            6
            /* CLASS, STYLE */
          )
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const __easycom_29 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-navbar/up-navbar.uvue"]]);
export {
  __easycom_29 as _
};
//# sourceMappingURL=up-navbar.js.map
