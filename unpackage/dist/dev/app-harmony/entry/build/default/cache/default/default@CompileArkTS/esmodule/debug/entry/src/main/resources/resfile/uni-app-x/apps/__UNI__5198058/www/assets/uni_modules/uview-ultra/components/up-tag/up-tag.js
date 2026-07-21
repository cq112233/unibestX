import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
const { defineComponent, resolveDynamicComponent, openBlock, createBlock, withCtx, createElementVNode, normalizeClass, withModifiers, normalizeStyle, renderSlot, createElementBlock, createCommentVNode, createTextVNode, toDisplayString, createVNode } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_2 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-transition/up-transition&";
import { p as propsTag } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-tag/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { i as image } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/test&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-tag",
  mixins: [mpMixin, mixin, propsTag],
  data() {
    return {};
  },
  computed: {
    style() {
      const style = new UTSJSONObject({});
      if (this.bgColor != "") {
        style["backgroundColor"] = this.bgColor;
      }
      if (this.color != "") {
        style["color"] = this.color;
      }
      if (this.borderColor != "") {
        style["borderColor"] = this.borderColor;
      }
      return style;
    },
    // nvue下，文本颜色无法继承父元素
    textColor() {
      const style = new UTSJSONObject({});
      if (this.color != "") {
        style["color"] = this.color;
      }
      return style;
    },
    imgStyle() {
      const width = this.size === "large" ? "17px" : this.size === "medium" ? "15px" : "13px";
      return new UTSJSONObject({
        width,
        height: width
      });
    },
    // 文本的样式
    closeSize() {
      const size = this.size === "large" ? "15px" : this.size === "medium" ? "13px" : "12px";
      return size;
    },
    // 图标大小
    iconSize() {
      const size = this.size === "large" ? "21px" : this.size === "medium" ? "19px" : "16px";
      return size;
    },
    // 图标颜色
    elIconColor() {
      return this.iconColor != "" ? this.iconColor : this.plain ? this.type : "#ffffff";
    }
  },
  emits: ["click", "close"],
  methods: {
    testImage(str) {
      return image(str);
    },
    // 点击关闭按钮
    closeHandler() {
      this.$emit("close", this.$props["name"].toString());
    },
    // 点击标签
    clickHandler() {
      this.$emit("click", this.$props["name"].toString());
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tag-wrapper": { "": { "position": "relative" } }, "up-tag": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "up-tag--circle": { "": { "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100 } }, "up-tag--square": { "": { "borderTopLeftRadius": 3, "borderTopRightRadius": 3, "borderBottomRightRadius": 3, "borderBottomLeftRadius": 3 } }, "up-tag__icon": { "": { "marginRight": 4 } }, "up-tag__text--mini": { "": { "fontSize": 12, "lineHeight": "12px" } }, "up-tag__text--medium": { "": { "fontSize": 13, "lineHeight": "13px" } }, "up-tag__text--large": { "": { "fontSize": 15, "lineHeight": "15px" } }, "up-tag--mini": { "": { "height": 22, "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 5 } }, "up-tag--medium": { "": { "height": 26, "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10 } }, "up-tag--large": { "": { "height": 32, "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15 } }, "up-tag--primary": { "": { "backgroundColor": "var(--theme-color, #0957de)", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopColor": "var(--theme-color, #0957de)", "borderRightColor": "var(--theme-color, #0957de)", "borderBottomColor": "var(--theme-color, #0957de)", "borderLeftColor": "var(--theme-color, #0957de)" } }, "up-tag--primary--plain": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopColor": "var(--theme-color, #0957de)", "borderRightColor": "var(--theme-color, #0957de)", "borderBottomColor": "var(--theme-color, #0957de)", "borderLeftColor": "var(--theme-color, #0957de)" } }, "up-tag--primary--plain--fill": { "": { "backgroundColor": "#ecf5ff" } }, "up-tag__text--primary": { "": { "color": "#FFFFFF" } }, "up-tag__text--primary--plain": { "": { "color": "var(--theme-color, #0957de)" } }, "up-tag--error": { "": { "backgroundColor": "#f56c6c", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopColor": "#f56c6c", "borderRightColor": "#f56c6c", "borderBottomColor": "#f56c6c", "borderLeftColor": "#f56c6c" } }, "up-tag--error--plain": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopColor": "#f56c6c", "borderRightColor": "#f56c6c", "borderBottomColor": "#f56c6c", "borderLeftColor": "#f56c6c" } }, "up-tag--error--plain--fill": { "": { "backgroundColor": "#fef0f0" } }, "up-tag__text--error": { "": { "color": "#FFFFFF" } }, "up-tag__text--error--plain": { "": { "color": "#f56c6c" } }, "up-tag--warning": { "": { "backgroundColor": "#f9ae3d", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopColor": "#f9ae3d", "borderRightColor": "#f9ae3d", "borderBottomColor": "#f9ae3d", "borderLeftColor": "#f9ae3d" } }, "up-tag--warning--plain": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopColor": "#f9ae3d", "borderRightColor": "#f9ae3d", "borderBottomColor": "#f9ae3d", "borderLeftColor": "#f9ae3d" } }, "up-tag--warning--plain--fill": { "": { "backgroundColor": "#fdf6ec" } }, "up-tag__text--warning": { "": { "color": "#FFFFFF" } }, "up-tag__text--warning--plain": { "": { "color": "#f9ae3d" } }, "up-tag--success": { "": { "backgroundColor": "#5ac725", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopColor": "#5ac725", "borderRightColor": "#5ac725", "borderBottomColor": "#5ac725", "borderLeftColor": "#5ac725" } }, "up-tag--success--plain": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopColor": "#5ac725", "borderRightColor": "#5ac725", "borderBottomColor": "#5ac725", "borderLeftColor": "#5ac725" } }, "up-tag--success--plain--fill": { "": { "backgroundColor": "#f5fff0" } }, "up-tag__text--success": { "": { "color": "#FFFFFF" } }, "up-tag__text--success--plain": { "": { "color": "#5ac725" } }, "up-tag--info": { "": { "backgroundColor": "#909399", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopColor": "#909399", "borderRightColor": "#909399", "borderBottomColor": "#909399", "borderLeftColor": "#909399" } }, "up-tag--info--plain": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopColor": "#909399", "borderRightColor": "#909399", "borderBottomColor": "#909399", "borderLeftColor": "#909399" } }, "up-tag--info--plain--fill": { "": { "backgroundColor": "#f4f4f5" } }, "up-tag__text--info": { "": { "color": "#FFFFFF" } }, "up-tag__text--info--plain": { "": { "color": "#909399" } }, "up-tag__close": { "": { "position": "absolute", "zIndex": 999, "top": 10, "right": 10, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "backgroundColor": "#C6C7CB", "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "transform": "scale(0.6) translate(50%, -50%)" } }, "up-tag__close--mini": { "": { "width": 18, "height": 18 } }, "up-tag__close--medium": { "": { "width": 22, "height": 22 } }, "up-tag__close--large": { "": { "width": 25, "height": 25 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  const _component_up_transition = resolveEasycom(resolveDynamicComponent("up-transition"), __easycom_2);
  return openBlock(), createBlock(_component_up_transition, {
    mode: "fade",
    show: _ctx.show,
    style: { "display": "flex" }
  }, {
    default: withCtx(() => [
      createElementVNode("view", { class: "up-tag-wrapper cursor-pointer" }, [
        createElementVNode(
          "view",
          {
            class: normalizeClass(["up-tag", [`up-tag--${_ctx.shape}`, !_ctx.plain ? `up-tag--${_ctx.type}` : "", _ctx.plain ? `up-tag--${_ctx.type}--plain` : "", `up-tag--${_ctx.size}`, _ctx.plain && _ctx.plainFill ? `up-tag--${_ctx.type}--plain--fill` : ""]]),
            onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.clickHandler && $options.clickHandler(...args), ["stop"])),
            style: normalizeStyle([{
              marginRight: _ctx.closable ? "10px" : 0,
              marginTop: _ctx.closable ? "10px" : 0
            }, $options.style])
          },
          [
            renderSlot(_ctx.$slots, "icon", {}, () => [
              _ctx.icon ? (openBlock(), createElementBlock("view", {
                key: 0,
                class: "up-tag__icon"
              }, [
                $options.testImage(_ctx.icon) ? (openBlock(), createElementBlock("image", {
                  key: 0,
                  src: _ctx.icon,
                  style: normalizeStyle([$options.imgStyle])
                }, null, 12, ["src"])) : (openBlock(), createBlock(_component_up_icon, {
                  key: 1,
                  color: $options.elIconColor,
                  name: _ctx.icon,
                  size: $options.iconSize
                }, null, 8, ["color", "name", "size"]))
              ])) : createCommentVNode("v-if", true)
            ]),
            createElementVNode(
              "text",
              {
                class: normalizeClass(["up-tag__text", [`up-tag__text--${_ctx.type}`, _ctx.plain ? `up-tag__text--${_ctx.type}--plain` : "", `up-tag__text--${_ctx.size}`]]),
                style: normalizeStyle([$options.textColor])
              },
              [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createTextVNode(
                    toDisplayString(_ctx.text),
                    1
                    /* TEXT */
                  )
                ])
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          6
          /* CLASS, STYLE */
        ),
        _ctx.closable ? (openBlock(), createElementBlock(
          "view",
          {
            key: 0,
            class: normalizeClass(["up-tag__close", [`up-tag__close--${_ctx.size}`]]),
            onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.closeHandler && $options.closeHandler(...args), ["stop"])),
            style: normalizeStyle({ backgroundColor: _ctx.closeColor })
          },
          [
            createVNode(_component_up_icon, {
              name: "close",
              size: $options.closeSize,
              color: "#ffffff"
            }, null, 8, ["size"])
          ],
          6
          /* CLASS, STYLE */
        )) : createCommentVNode("v-if", true)
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["show"]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-tag/up-tag.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-tag.js.map
