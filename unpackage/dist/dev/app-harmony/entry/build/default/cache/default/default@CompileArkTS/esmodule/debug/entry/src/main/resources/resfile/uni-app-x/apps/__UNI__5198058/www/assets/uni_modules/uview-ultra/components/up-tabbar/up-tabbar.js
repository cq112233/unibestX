import { _ as __easycom_3 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom&";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, withModifiers, normalizeStyle, renderSlot, createBlock, createCommentVNode } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { p as propsTabbar } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-tabbar/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { d as deepMerge, b as addStyle, s as sleep } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-tabbar",
  mixins: [mpMixin, mixin, propsTabbar],
  data() {
    return {
      placeholderHeight: 0
    };
  },
  emits: ["change"],
  computed: {
    tabbarStyle() {
      const style = new UTSJSONObject({
        zIndex: this.zIndex
      });
      if (this.borderColor != "") {
        style["borderColor"] = this.borderColor + " !important";
      }
      if (this.backgroundColor != "") {
        style["backgroundColor"] = this.backgroundColor;
      }
      return deepMerge(style, addStyle(this.customStyle));
    },
    // 监听多个参数的变化，通过在computed执行对应的操作
    updateChild() {
      return [this.value, this.activeColor, this.inactiveColor];
    },
    updatePlaceholder() {
      return [this.fixed, this.placeholder];
    }
  },
  watch: {
    updateChild() {
      this.updateChildren();
    },
    updatePlaceholder() {
      this.setPlaceholderHeight();
    }
  },
  created() {
  },
  mounted() {
    this.setPlaceholderHeight();
  },
  methods: {
    updateChildren() {
      if (this.children.length > 0) {
        this.children.map((child) => {
          child === null || child === void 0 ? null : child.$callMethod("updateFromParent");
        });
      }
    },
    // 设置用于防止塌陷元素的高度
    async setPlaceholderHeight() {
      if (!this.fixed || !this.placeholder)
        return Promise.resolve(null);
      await sleep(20);
      this.upGetRect(".up-tabbar__content").then((size) => {
        var _a;
        this.placeholderHeight = (_a = size.height) !== null && _a !== void 0 ? _a : 50;
      });
    },
    noop() {
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabbar": { "": { "display": "flex", "flexDirection": "column", "width": "100%" } }, "up-tabbar__content": { "": { "display": "flex", "flexDirection": "column", "backgroundColor": "#ffffff" } }, "up-tabbar__content__item-wrapper": { "": { "height": 50, "display": "flex", "flexDirection": "row", "justifyContent": "space-around", "alignItems": "stretch", "width": "100%" } }, "up-tabbar--fixed": { "": { "position": "fixed", "bottom": 0, "left": 0, "right": 0 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_safe_bottom = resolveEasycom(resolveDynamicComponent("up-safe-bottom"), __easycom_3);
  return openBlock(), createElementBlock("view", { class: "up-tabbar" }, [
    createElementVNode(
      "view",
      {
        class: normalizeClass(["up-tabbar__content", [_ctx.border ? "up-border-top" : "", _ctx.fixed ? "up-tabbar--fixed" : ""]]),
        ref: "up-tabbar__content",
        onTouchmove: _cache[0] || (_cache[0] = withModifiers((...args) => $options.noop && $options.noop(...args), ["stop", "prevent"])),
        style: normalizeStyle([$options.tabbarStyle])
      },
      [
        createElementVNode("view", { class: "up-tabbar__content__item-wrapper" }, [
          renderSlot(_ctx.$slots, "default")
        ]),
        _ctx.safeAreaInsetBottom ? (openBlock(), createBlock(_component_up_safe_bottom, { key: 0 })) : createCommentVNode("v-if", true)
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    ),
    _ctx.placeholder ? (openBlock(), createElementBlock(
      "view",
      {
        key: 0,
        class: "up-tabbar__placeholder",
        style: normalizeStyle({
          height: $data.placeholderHeight + "px"
        })
      },
      null,
      4
      /* STYLE */
    )) : createCommentVNode("v-if", true)
  ]);
}
const __easycom_19 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-tabbar/up-tabbar.uvue"]]);
export {
  __easycom_19 as _
};
//# sourceMappingURL=up-tabbar.js.map
