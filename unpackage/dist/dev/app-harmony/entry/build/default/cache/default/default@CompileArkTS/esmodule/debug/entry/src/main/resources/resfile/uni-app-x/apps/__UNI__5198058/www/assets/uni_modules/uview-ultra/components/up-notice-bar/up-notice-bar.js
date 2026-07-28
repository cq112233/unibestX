import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-column-notice/up-column-notice&";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, normalizeStyle, createBlock, createCommentVNode } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-row-notice/up-row-notice&";
import { p as propsNoticeBar } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-notice-bar/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { b as addStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-notice-bar",
  mixins: [mpMixin, mixin, propsNoticeBar],
  data() {
    return {
      show: true
    };
  },
  emits: ["click", "close"],
  methods: {
    addStyle(val = null) {
      return addStyle(val);
    },
    // 点击通告栏
    click(index) {
      this.$emit("click", index);
      if (this.url != "" && this.linkType != "") {
        this.openPage();
      }
    },
    // 点击关闭按钮
    close() {
      this.show = false;
      this.$emit("close");
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-notice-bar": { "": { "overflow": "hidden", "paddingTop": 9, "paddingRight": 12, "paddingBottom": 9, "paddingLeft": 12, "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_column_notice = resolveEasycom(resolveDynamicComponent("up-column-notice"), __easycom_0);
  const _component_up_row_notice = resolveEasycom(resolveDynamicComponent("up-row-notice"), __easycom_1$1);
  return $data.show ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      class: "up-notice-bar",
      style: normalizeStyle([{
        backgroundColor: _ctx.bgColor
      }, $options.addStyle(_ctx.customStyle)])
    },
    [
      _ctx.direction === "column" || _ctx.direction === "row" && _ctx.step ? (openBlock(), createBlock(_component_up_column_notice, {
        key: 0,
        color: _ctx.color,
        bgColor: _ctx.bgColor,
        text: _ctx.text,
        mode: _ctx.mode,
        step: _ctx.step,
        icon: _ctx.icon,
        "disable-touch": _ctx.disableTouch,
        fontSize: _ctx.fontSize,
        duration: _ctx.duration,
        onClose: $options.close,
        onClick: $options.click
      }, null, 8, ["color", "bgColor", "text", "mode", "step", "icon", "disable-touch", "fontSize", "duration", "onClose", "onClick"])) : (openBlock(), createBlock(_component_up_row_notice, {
        key: 1,
        color: _ctx.color,
        bgColor: _ctx.bgColor,
        text: _ctx.text,
        mode: _ctx.mode,
        fontSize: _ctx.fontSize,
        speed: _ctx.speed,
        url: _ctx.url,
        linkType: _ctx.linkType,
        icon: _ctx.icon,
        onClose: $options.close,
        onClick: $options.click
      }, null, 8, ["color", "bgColor", "text", "mode", "fontSize", "speed", "url", "linkType", "icon", "onClose", "onClick"]))
    ],
    4
    /* STYLE */
  )) : createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-notice-bar/up-notice-bar.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-notice-bar.js.map
