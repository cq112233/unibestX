import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-line/up-line&";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, normalizeStyle, createBlock, createCommentVNode, createElementVNode, normalizeClass, createVNode, toDisplayString } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon&";
import { p as propsLoadmore } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-loadmore/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { a as addUnit, b as addStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-loadmore",
  mixins: [mpMixin, mixin, propsLoadmore],
  data() {
    return {
      // 粗点
      dotText: "●"
    };
  },
  computed: {
    // 加载的文字显示的样式
    loadTextStyle() {
      return new UTSJSONObject({
        color: this.color,
        fontSize: addUnit(this.fontSize),
        // lineHeight: addUnit(this.fontSize),
        backgroundColor: this.bgColor
      });
    },
    // 显示的提示文字
    showText() {
      let text = "";
      if (this.status == "loadmore")
        text = this.loadmoreText;
      else if (this.status == "loading")
        text = this.loadingText;
      else if (this.status == "nomore" && this.isDot)
        text = this.dotText;
      else
        text = this.nomoreText;
      return text;
    }
  },
  emits: ["loadmore"],
  methods: {
    addStyle(e = null) {
      return addStyle(e);
    },
    addUnit(e = null) {
      return addUnit(e);
    },
    loadMore() {
      if (this.status == "loadmore")
        this.$emit("loadmore");
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-loadmore": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-loadmore__content": { "": { "marginTop": 0, "marginRight": 15, "marginBottom": 0, "marginLeft": 15, "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "up-loadmore__content__icon-wrap": { "": { "marginRight": 8 } }, "up-loadmore__content__text": { "": { "fontSize": 14, "color": "#606266" } }, "up-loadmore__content__dot-text": { "": { "fontSize": 15, "color": "#909193" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_line = resolveEasycom(resolveDynamicComponent("up-line"), __easycom_0);
  const _component_up_loading_icon = resolveEasycom(resolveDynamicComponent("up-loading-icon"), __easycom_1$1);
  return openBlock(), createElementBlock(
    "view",
    {
      class: "up-loadmore",
      style: normalizeStyle([
        $options.addStyle(_ctx.customStyle),
        {
          backgroundColor: _ctx.bgColor,
          marginBottom: $options.addUnit(_ctx.marginBottom),
          marginTop: $options.addUnit(_ctx.marginTop),
          height: $options.addUnit(_ctx.height)
        }
      ])
    },
    [
      _ctx.line ? (openBlock(), createBlock(_component_up_line, {
        key: 0,
        length: "140rpx",
        color: _ctx.lineColor,
        hairline: false,
        dashed: _ctx.dashed
      }, null, 8, ["color", "dashed"])) : createCommentVNode("v-if", true),
      createCommentVNode(" 加载中和没有更多的状态才显示两边的横线 "),
      createElementVNode(
        "view",
        {
          class: normalizeClass([_ctx.status == "loadmore" || _ctx.status == "nomore" ? "up-more" : "", "up-loadmore__content"])
        },
        [
          _ctx.status === "loading" && _ctx.icon ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: "up-loadmore__content__icon-wrap"
          }, [
            createVNode(_component_up_loading_icon, {
              color: _ctx.iconColor,
              size: _ctx.iconSize,
              mode: _ctx.loadingIcon
            }, null, 8, ["color", "size", "mode"])
          ])) : createCommentVNode("v-if", true),
          createCommentVNode(" 如果没有更多的状态下，显示内容为dot（粗点），加载特定样式 "),
          createElementVNode(
            "text",
            {
              class: normalizeClass(["up-line-11", [_ctx.status == "nomore" && _ctx.isDot == true ? "up-loadmore__content__dot-text" : "up-loadmore__content__text"]]),
              style: normalizeStyle([$options.loadTextStyle]),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.loadMore && $options.loadMore(...args))
            },
            toDisplayString($options.showText),
            7
            /* TEXT, CLASS, STYLE */
          )
        ],
        2
        /* CLASS */
      ),
      _ctx.line ? (openBlock(), createBlock(_component_up_line, {
        key: 1,
        length: "140rpx",
        color: _ctx.lineColor,
        hairline: false,
        dashed: _ctx.dashed
      }, null, 8, ["color", "dashed"])) : createCommentVNode("v-if", true)
    ],
    4
    /* STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-loadmore/up-loadmore.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-loadmore.js.map
