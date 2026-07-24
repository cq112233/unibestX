const { defineComponent, getCurrentInstance, ref, computed, watch, onMounted, openBlock, createElementBlock, normalizeStyle, renderSlot } = globalThis.Vue
import "../../libs/composable/useMp.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { d as deepMerge, b as addStyle, u as upGetRect } from "../../libs/function/index.js";
import { d as defProps } from "./grid.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-grid"
  },
  __name: "up-grid",
  props: {
    col: {
      type: [String, Number],
      default: defProps.getNumber("grid.col")
    },
    border: {
      type: Boolean,
      default: defProps.getBoolean("grid.border")
    },
    align: {
      type: String,
      default: defProps.getString("grid.align")
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const _b = useUltraUI(), children = _b.children, getChildren = _b.getChildren, addChild = _b.addChild;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const emit = __emit;
    const width = ref(0);
    const parentDataCpu = computed(() => {
      return new UTSJSONObject({
        col: props.col,
        border: props.border,
        align: props.align
      });
    });
    const gridStyle = computed(() => {
      let style = new UTSJSONObject({});
      switch (props.align) {
        case "left":
          style["justifyContent"] = "flex-start";
          break;
        case "center":
          style["justifyContent"] = "center";
          break;
        case "right":
          style["justifyContent"] = "flex-end";
          break;
        default:
          style["justifyContent"] = "flex-start";
      }
      return deepMerge(style, addStyle(new UTSJSONObject({})));
    });
    const getWidth = () => {
      upGetRect(`.up-grid`, false, instance).then((size) => {
        if (size.width != null) {
          width.value = size.width;
        }
      });
    };
    const childClick = (name = null) => {
      emit("click", name);
    };
    watch(parentDataCpu, () => {
      if (children.value.length > 0) {
        children.value.map((child) => {
          child.$callMethod("updateParentData", instance);
        });
      }
    });
    onMounted(() => {
      getWidth();
    });
    const getProps = function() {
      return parentDataCpu.value;
    };
    const getRefs = function() {
      return new UTSJSONObject({
        width: width.value
      });
    };
    __expose({
      childClick,
      getChildren,
      addChild,
      children,
      getProps,
      getRefs
    });
    const __returned__ = { children, getChildren, addChild, instance, props, emit, width, parentDataCpu, gridStyle, getWidth, childClick, getProps, getRefs };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-grid": { "": { "width": "100%", "position": "relative", "boxSizing": "border-box", "overflow": "hidden", "justifyContent": "center", "display": "flex", "flexDirection": "row", "flexWrap": "wrap", "alignItems": "center" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: "up-grid",
      ref: "up-grid",
      style: normalizeStyle([$setup.gridStyle])
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    4
    /* STYLE */
  );
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-grid/up-grid.uvue"]]);
export {
  __easycom_3 as _
};
//# sourceMappingURL=up-grid.js.map
