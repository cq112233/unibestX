import { _ as __easycom_0 } from "../up-status-bar/up-status-bar.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_0$1 } from "../up-icon/up-icon.js";
import { _ as __easycom_0$2 } from "../up-line/up-line.js";
import { p as propsNavbarMini } from "./props.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { a as addUnit, b as addStyle, g as getPx } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent } = globalThis.Vue;
const _sfc_main = defineComponent({
  name: "up-navbar-mini",
  mixins: [mpMixin, mixin, propsNavbarMini],
  data() {
    return {};
  },
  computed: {
    contentStyle() {
      return new UTSJSONObject({
        height: addUnit(this.height),
        backgroundColor: this.bgColor
      });
    }
  },
  emits: ["leftClick", "homeClick"],
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
    homeClick() {
      if (this.homeUrl != "") {
        uni.reLaunch({ url: this.homeUrl });
      }
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-navbar-mini__inner": { "": { "width": "180rpx", "overflow": "hidden" } }, "up-navbar-mini--fixed": { "": { "position": "fixed", "left": 20, "right": 0, "top": 10, "zIndex": 11 } }, "up-navbar-mini__content": { "": { "display": "flex", "flexDirection": "row", "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15, "borderTopLeftRadius": 20, "borderTopRightRadius": 20, "borderBottomRightRadius": 20, "borderBottomLeftRadius": 20, "alignItems": "center", "height": 36, "backgroundColor": "#9acafc", "position": "relative", "justifyContent": "space-between" } }, "up-navbar-mini__content__left": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "up-navbar-mini__content__left--hover": { "": { "opacity": 0.7 } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, renderSlot: _renderSlot, createVNode: _createVNode, createElementVNode: _createElementVNode, normalizeStyle: _normalizeStyle, normalizeClass: _normalizeClass, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_status_bar = resolveEasycom(__resolveDynamicComponent("up-status-bar"), __easycom_0);
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0$1);
  const _component_up_line = resolveEasycom(__resolveDynamicComponent("up-line"), __easycom_0$2);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-navbar-mini", [_ctx.customClass]])
    },
    [
      _createElementVNode(
        "view",
        {
          class: _normalizeClass(["up-navbar-mini__inner", [_ctx.fixed ? "up-navbar-mini--fixed" : ""]])
        },
        [
          _ctx.safeAreaInsetTop ? (_openBlock(), _createBlock(_component_up_status_bar, { key: 0 })) : _createCommentVNode("v-if", true),
          _createElementVNode(
            "view",
            {
              class: "up-navbar-mini__content",
              style: _normalizeStyle($options.contentStyle)
            },
            [
              _createElementVNode("view", {
                class: "up-navbar-mini__content__left",
                "hover-class": "up-navbar-mini__content__left--hover",
                "hover-start-time": "150",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.leftClick && $options.leftClick(...args))
              }, [
                _renderSlot(_ctx.$slots, "left", {}, () => [
                  _createVNode(_component_up_icon, {
                    name: _ctx.leftIcon,
                    size: _ctx.iconSize,
                    color: _ctx.iconColor
                  }, null, 8, ["name", "size", "color"])
                ])
              ]),
              _createElementVNode("view", { style: { "padding": "10px 10px" } }, [
                _createVNode(_component_up_line, {
                  direction: "col",
                  color: "#fff",
                  length: "16px"
                })
              ]),
              _createElementVNode("view", {
                class: "up-navbar-mini__content__center",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.homeClick && $options.homeClick(...args))
              }, [
                _renderSlot(_ctx.$slots, "center", {}, () => [
                  _createVNode(_component_up_icon, {
                    name: "home",
                    size: _ctx.iconSize,
                    color: _ctx.iconColor
                  }, null, 8, ["size", "color"])
                ])
              ])
            ],
            4
            /* STYLE */
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
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-navbar-mini/up-navbar-mini.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-navbar-mini.js.map
