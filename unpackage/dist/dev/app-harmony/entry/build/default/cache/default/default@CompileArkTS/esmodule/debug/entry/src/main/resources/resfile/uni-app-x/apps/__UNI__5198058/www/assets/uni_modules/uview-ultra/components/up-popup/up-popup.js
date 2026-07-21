import { _ as __easycom_2$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-overlay/up-overlay&";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, createBlock, createCommentVNode, createVNode, withCtx, createElementVNode, normalizeStyle, withModifiers, renderSlot } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-status-bar/up-status-bar&";
import { _ as __easycom_0$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { _ as __easycom_3 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom&";
import { _ as __easycom_2$2 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-transition/up-transition&";
import { p as propsPopup } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-popup/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { h as deepMerge, a as addUnit, b as addStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-popup",
  mixins: [mpMixin, mixin, propsPopup],
  data() {
    return {
      overlayDuration: 0
    };
  },
  created() {
    this.overlayDuration = parseInt(this.duration.toString()) + 50;
  },
  watch: {
    show(newValue = null, oldValue = null) {
    }
  },
  computed: {
    transitionStyle() {
      const style = new UTSJSONObject({
        display: "flex"
      });
      if (!this.pageInline) {
        style["zIndex"] = parseInt(this.zIndex.toString()) + 1;
        style["position"] = "fixed";
      }
      style[this.mode] = 0;
      if (this.mode === "left") {
        return deepMerge(style, new UTSJSONObject({
          bottom: 0,
          top: 0
        }));
      } else if (this.mode === "right") {
        return deepMerge(style, new UTSJSONObject({
          bottom: 0,
          top: 0
        }));
      } else if (this.mode === "top") {
        return deepMerge(style, new UTSJSONObject({
          left: 0,
          right: 0
        }));
      } else if (this.mode === "bottom") {
        return deepMerge(style, new UTSJSONObject({
          left: 0,
          right: 0
        }));
      } else if (this.mode === "center") {
        return deepMerge(style, new UTSJSONObject({
          alignItems: "center",
          "justify-content": "center",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }));
      }
      return new UTSJSONObject({});
    },
    contentStyle() {
      const style = new UTSJSONObject(
        {}
        // 通过设备信息的safeAreaInsets值来判断是否需要预留顶部状态栏和底部安全局的位置
        // 不使用css方案，是因为nvue不支持css的iPhoneX安全区查询属性
      );
      uni.getWindowInfo().safeAreaInsets;
      if (this.mode !== "center") {
        style["flex"] = 1;
      }
      if (this.bgColor != "") {
        style["backgroundColor"] = this.bgColor;
      }
      if (this.round != "") {
        const value = addUnit(this.round);
        if (this.mode === "top") {
          style["borderBottomLeftRadius"] = value;
          style["borderBottomRightRadius"] = value;
        } else if (this.mode === "bottom") {
          style["borderTopLeftRadius"] = value;
          style["borderTopRightRadius"] = value;
        } else if (this.mode === "center") {
          style["borderRadius"] = value;
        }
      }
      return deepMerge(style, addStyle(this.customStyle));
    },
    position() {
      if (this.mode === "center") {
        return this.zoom ? "fade-zoom" : "fade";
      }
      if (this.mode === "left") {
        return "slide-left";
      }
      if (this.mode === "right") {
        return "slide-right";
      }
      if (this.mode === "bottom") {
        return "slide-up";
      }
      if (this.mode === "top") {
        return "slide-down";
      }
      return "";
    }
  },
  emits: ["open", "close", "click", "update:show"],
  methods: {
    // 点击遮罩
    overlayClick() {
      if (this.closeOnClickOverlay) {
        this.$emit("update:show", false);
        this.$emit("close");
      }
    },
    close(e = null) {
      this.$emit("update:show", false);
      this.$emit("close");
    },
    afterEnter() {
      this.$emit("open");
    },
    clickHandler() {
      if (this.mode === "center") {
        this.overlayClick();
      }
      this.$emit("click");
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-popup": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-popup__content": { "": { "backgroundColor": "#ffffff", "position": "relative" } }, "up-popup__content--round-top": { "": { "borderTopLeftRadius": 0, "borderTopRightRadius": 0, "borderBottomLeftRadius": 10, "borderBottomRightRadius": 10 } }, "up-popup__content--round-left": { "": { "borderTopLeftRadius": 0, "borderTopRightRadius": 10, "borderBottomLeftRadius": 0, "borderBottomRightRadius": 10 } }, "up-popup__content--round-right": { "": { "borderTopLeftRadius": 10, "borderTopRightRadius": 0, "borderBottomLeftRadius": 10, "borderBottomRightRadius": 0 } }, "up-popup__content--round-bottom": { "": { "borderTopLeftRadius": 10, "borderTopRightRadius": 10, "borderBottomLeftRadius": 0, "borderBottomRightRadius": 0 } }, "up-popup__content--round-center": { "": { "borderTopLeftRadius": 10, "borderTopRightRadius": 10, "borderBottomLeftRadius": 10, "borderBottomRightRadius": 10 } }, "up-popup__content__close": { "": { "position": "absolute" } }, "up-popup__content__close--hover": { "": { "opacity": 0.4 } }, "up-popup__content__close--top-left": { "": { "top": 15, "left": 15 } }, "up-popup__content__close--top-right": { "": { "top": 15, "right": 15 } }, "up-popup__content__close--bottom-left": { "": { "bottom": 15, "left": 15 } }, "up-popup__content__close--bottom-right": { "": { "right": 15, "bottom": 15 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_overlay = resolveEasycom(resolveDynamicComponent("up-overlay"), __easycom_2$1);
  const _component_up_status_bar = resolveEasycom(resolveDynamicComponent("up-status-bar"), __easycom_0);
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0$1);
  const _component_up_safe_bottom = resolveEasycom(resolveDynamicComponent("up-safe-bottom"), __easycom_3);
  const _component_up_transition = resolveEasycom(resolveDynamicComponent("up-transition"), __easycom_2$2);
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["up-popup", [_ctx.customClass]])
    },
    [
      _ctx.overlay && !_ctx.pageInline ? (openBlock(), createBlock(_component_up_overlay, {
        key: 0,
        show: _ctx.show && !_ctx.pageInline,
        onClick: $options.overlayClick,
        zIndex: _ctx.zIndex,
        duration: $data.overlayDuration,
        customStyle: _ctx.overlayStyle,
        opacity: _ctx.overlayOpacity
      }, null, 8, ["show", "onClick", "zIndex", "duration", "customStyle", "opacity"])) : createCommentVNode("v-if", true),
      createVNode(_component_up_transition, {
        show: _ctx.pageInline ? true : _ctx.show,
        customStyle: $options.transitionStyle,
        mode: _ctx.pageInline ? "none" : $options.position,
        duration: _ctx.duration,
        onAfterEnter: $options.afterEnter,
        onClick: $options.clickHandler
      }, {
        default: withCtx(() => [
          createElementVNode(
            "view",
            {
              class: "up-popup__content",
              style: normalizeStyle([$options.contentStyle]),
              onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.noop && _ctx.noop(...args), ["stop"]))
            },
            [
              _ctx.safeAreaInsetTop ? (openBlock(), createBlock(_component_up_status_bar, { key: 0 })) : createCommentVNode("v-if", true),
              renderSlot(_ctx.$slots, "default"),
              _ctx.closeable ? (openBlock(), createElementBlock(
                "view",
                {
                  key: 1,
                  onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.close && $options.close(...args), ["stop"])),
                  class: normalizeClass(["up-popup__content__close", ["up-popup__content__close--" + _ctx.closeIconPos]]),
                  "hover-class": "up-popup__content__close--hover",
                  "hover-stay-time": "150"
                },
                [
                  createVNode(_component_up_icon, {
                    name: "close",
                    color: "#909399",
                    size: "18",
                    bold: ""
                  })
                ],
                2
                /* CLASS */
              )) : createCommentVNode("v-if", true),
              _ctx.safeAreaInsetBottom ? (openBlock(), createBlock(_component_up_safe_bottom, { key: 2 })) : createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          )
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["show", "customStyle", "mode", "duration", "onAfterEnter", "onClick"])
    ],
    2
    /* CLASS */
  );
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-popup/up-popup.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-popup.js.map
