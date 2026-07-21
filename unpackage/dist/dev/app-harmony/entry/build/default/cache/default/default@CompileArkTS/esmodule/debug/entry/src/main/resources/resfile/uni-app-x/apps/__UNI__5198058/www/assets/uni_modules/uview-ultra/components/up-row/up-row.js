const { defineComponent, computed, openBlock, createElementBlock, normalizeStyle, renderSlot } = globalThis.Vue
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-row/row&";
import { a as addUnit, s as sleep, u as upGetRect } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { u as useUltraUI } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-row"
  },
  __name: "up-row",
  props: {
    // 栅格间隔，左右各为此值的一半，单位px
    gutter: {
      type: [String, Number],
      default: defProps.getNumber("row.gutter")
    },
    // 水平排列方式(微信小程序暂不支持) 可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`)
    justify: {
      type: String,
      default: defProps.getNumber("row.justify")
    },
    // 垂直排列方式
    align: {
      type: String,
      default: defProps.getNumber("row.align")
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const children = useUltraUI().children;
    const props = __props;
    const emit = __emit;
    const uJustify = computed(() => {
      if (props.justify == "end" || props.justify == "start")
        return "flex-" + props.justify;
      else if (props.justify == "around" || props.justify == "between")
        return "space-" + props.justify;
      else
        return props.justify;
    });
    const uAlignItem = computed(() => {
      if (props.align == "top")
        return "flex-start";
      if (props.align == "bottom")
        return "flex-end";
      else
        return props.align;
    });
    const rowStyle = computed(() => {
      const style = new UTSJSONObject(
        {
          alignItems: uAlignItem.value,
          justifyContent: uJustify.value
        }
        // 通过给up-row左右两边的负外边距，消除up-col在有gutter时，第一个和最后一个元素的左内边距和右内边距造成的影响
      );
      if (props.gutter != "") {
        style["marginLeft"] = addUnit((0 - parseInt(props.gutter.toString())) / 2);
        style["marginRight"] = addUnit((0 - parseInt(props.gutter.toString())) / 2);
      }
      return style;
    });
    const clickHandler = (e = null) => {
      emit("click");
    };
    const getComponentWidth = () => {
      return new Promise((resolve) => {
        sleep().then(() => {
          upGetRect(".up-row").then((res = null) => {
            let node = res;
            resolve(node.width != null ? node.width : 0);
          });
        });
      });
    };
    const getProps = function() {
      return new UTSJSONObject({
        gutter: props.gutter,
        justify: props.justify,
        align: props.align
      });
    };
    const getRefs = function() {
      return new UTSJSONObject({});
    };
    __expose({
      getComponentWidth,
      getProps,
      getRefs
    });
    const __returned__ = { children, props, emit, uJustify, uAlignItem, rowStyle, clickHandler, getComponentWidth, getProps, getRefs };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-row": { "": { "display": "flex", "flexDirection": "row" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: "up-row",
      ref: "up-row",
      style: normalizeStyle([$setup.rowStyle, _ctx.$upAddStyle($setup.props.customStyle)]),
      onClick: $setup.clickHandler
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    4
    /* STYLE */
  );
}
const __easycom_48 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-row/up-row.uvue"]]);
export {
  __easycom_48 as _
};
//# sourceMappingURL=up-row.js.map
