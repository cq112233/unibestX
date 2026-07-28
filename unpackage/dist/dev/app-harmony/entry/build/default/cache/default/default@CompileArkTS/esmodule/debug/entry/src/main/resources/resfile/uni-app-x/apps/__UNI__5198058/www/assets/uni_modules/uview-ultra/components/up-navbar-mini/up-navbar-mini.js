import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-status-bar/up-status-bar&";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, createBlock, createCommentVNode, normalizeStyle, renderSlot, createVNode } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_0$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { _ as __easycom_0$2 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-line/up-line&";
import { p as propsNavbarMini } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-navbar-mini/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { a as addUnit, b as addStyle, g as getPx } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_status_bar = resolveEasycom(resolveDynamicComponent("up-status-bar"), __easycom_0);
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0$1);
  const _component_up_line = resolveEasycom(resolveDynamicComponent("up-line"), __easycom_0$2);
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["up-navbar-mini", [_ctx.customClass]])
    },
    [
      createElementVNode(
        "view",
        {
          class: normalizeClass(["up-navbar-mini__inner", [_ctx.fixed ? "up-navbar-mini--fixed" : ""]])
        },
        [
          _ctx.safeAreaInsetTop ? (openBlock(), createBlock(_component_up_status_bar, { key: 0 })) : createCommentVNode("v-if", true),
          createElementVNode(
            "view",
            {
              class: "up-navbar-mini__content",
              style: normalizeStyle($options.contentStyle)
            },
            [
              createElementVNode("view", {
                class: "up-navbar-mini__content__left",
                "hover-class": "up-navbar-mini__content__left--hover",
                "hover-start-time": "150",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.leftClick && $options.leftClick(...args))
              }, [
                renderSlot(_ctx.$slots, "left", {}, () => [
                  createVNode(_component_up_icon, {
                    name: _ctx.leftIcon,
                    size: _ctx.iconSize,
                    color: _ctx.iconColor
                  }, null, 8, ["name", "size", "color"])
                ])
              ]),
              createElementVNode("view", { style: { "padding": "10px 10px" } }, [
                createVNode(_component_up_line, {
                  direction: "col",
                  color: "#fff",
                  length: "16px"
                })
              ]),
              createElementVNode("view", {
                class: "up-navbar-mini__content__center",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.homeClick && $options.homeClick(...args))
              }, [
                renderSlot(_ctx.$slots, "center", {}, () => [
                  createVNode(_component_up_icon, {
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
