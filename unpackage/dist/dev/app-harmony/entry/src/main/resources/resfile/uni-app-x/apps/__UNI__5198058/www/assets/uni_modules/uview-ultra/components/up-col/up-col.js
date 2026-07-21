const { defineComponent, getCurrentInstance, ref, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot } = globalThis.Vue
import { d as defProps } from "./col.js";
import { a as addUnit, g as getPx } from "../../libs/function/index.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    namne: "up-col"
  },
  __name: "up-col",
  props: {
    // 占父容器宽度的多少等分，总分为12份
    span: {
      type: [String, Number],
      default: defProps.getNumber("col.span")
    },
    // 指定栅格左侧的间隔数(总12栏)
    offset: {
      type: [String, Number],
      default: defProps.getNumber("col.offset")
    },
    // 水平排列方式，可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`)
    justify: {
      type: String,
      default: defProps.getString("col.justify")
    },
    // 垂直对齐方式，可选值为top、center、bottom、stretch
    align: {
      type: String,
      default: defProps.getString("col.align")
    },
    // 文字对齐方式
    textAlign: {
      type: String,
      default: defProps.getString("col.textAlign")
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const _b = useUltraUI(new UTSJSONObject({
      gutter: 0
    })), parent = _b.parent, parentData = _b.parentData, getParentData = _b.getParentData;
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance().proxy;
    const width = ref(0);
    const gridNum = ref(12);
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
    const colStyle = computed(() => {
      let pct = 100 / gridNum.value * parseInt(props.span.toString());
      const style = new UTSJSONObject({
        // 这里写成"padding: 0 10px"的形式是因为nvue的需要
        // @ts-ignore
        paddingLeft: addUnit(parseInt(getPx(parentData.value["gutter"].toString())) / 2),
        // @ts-ignore
        paddingRight: addUnit(parseInt(getPx(parentData.value["gutter"].toString())) / 2),
        alignItems: uAlignItem.value,
        // @ts-ignore
        justifyContent: uJustify.value,
        flex: `0 0 ${pct.toString()}%`,
        // @ts-ignore
        marginLeft: (100 / 12 * parseInt(props.offset.toString())).toString() + "%"
      });
      return style;
    });
    const updateParentData = () => {
      getParentData("up-row", instance, false);
    };
    const init = () => {
      var _a2;
      updateParentData();
      let promise = (_a2 = parent.value) === null || _a2 === void 0 ? null : _a2.$callMethod("getComponentWidth");
      if (promise != null) {
        promise.then((widthTmp = null) => {
          if (widthTmp != null) {
            width.value = parseInt(widthTmp.toString());
          }
        });
      }
    };
    const clickHandler = (e = null) => {
      emit("click");
    };
    init();
    const __returned__ = { parent, parentData, getParentData, props, emit, instance, width, gridNum, uJustify, uAlignItem, colStyle, updateParentData, init, clickHandler };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-col": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "boxSizing": "border-box" } }, "up-col-0": { "": { "width": 0 } }, "up-col-1": { "": { "width": "8.3333333333%" } }, "up-col-2": { "": { "width": "16.6666666667%" } }, "up-col-3": { "": { "width": "25%" } }, "up-col-4": { "": { "width": "33.3333333333%" } }, "up-col-5": { "": { "width": "41.6666666667%" } }, "up-col-6": { "": { "width": "50%" } }, "up-col-7": { "": { "width": "58.3333333333%" } }, "up-col-8": { "": { "width": "66.6666666667%" } }, "up-col-9": { "": { "width": "75%" } }, "up-col-10": { "": { "width": "83.3333333333%" } }, "up-col-11": { "": { "width": "91.6666666667%" } }, "up-col-12": { "": { "width": "100%" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["up-col", [
        "up-col-" + $props.span
      ]]),
      ref: "up-col",
      style: normalizeStyle([$setup.colStyle, _ctx.$upAddStyle(_ctx.customStyle)]),
      onClick: $setup.clickHandler
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_47 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-col/up-col.uvue"]]);
export {
  __easycom_47 as _
};
//# sourceMappingURL=up-col.js.map
