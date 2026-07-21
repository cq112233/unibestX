const { defineComponent, getCurrentInstance, ref, computed, onMounted, onUnmounted, nextTick, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createCommentVNode } = globalThis.Vue
import "../../libs/composable/useMp.js";
import { d as deepMerge, b as addStyle } from "../../libs/function/index.js";
import { d as defProps } from "./gridItem.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-grid-item"
  },
  __name: "up-grid-item",
  props: {
    name: {
      type: [String, Number],
      default: defProps.getArray("grid-item.name")
    },
    bgColor: {
      type: String,
      default: defProps.getString("grid-item.bgColor")
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const _b = useUltraUI(new UTSJSONObject({
      col: 0,
      border: true,
      width: 0
    })), parent = _b.parent, parentData = _b.parentData, getParentData = _b.getParentData;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const emit = __emit;
    const width = ref("");
    const classes = ref("");
    const parentCol = computed(() => {
      if (parentData.value["col"] != null) {
        return parseInt(parentData.value["col"].toString());
      }
      return 0;
    });
    const itemStyle = computed(() => {
      const style = new UTSJSONObject({
        background: props.bgColor
      });
      style["width"] = width.value;
      return deepMerge(style, addStyle(new UTSJSONObject({})));
    });
    const clickHandler = () => {
      var _a2, _b2;
      let name = props.name;
      let children = (_a2 = parent.value) === null || _a2 === void 0 ? null : _a2.$callMethod("getChildren");
      if (children == null) {
        children = (_b2 = parent.value) === null || _b2 === void 0 ? null : _b2.$data["children"];
      }
      const finalChildren = children != null ? children : [];
      if (props.name === null) {
        name = finalChildren.findIndex((child) => {
          return child === instance;
        });
      }
      parent.value.$callMethod("childClick", name);
      emit("click", name);
    };
    const getItemWidth = () => {
      let widthVal = "";
      if (parent.value != null) {
        let parentRefs = parent.value.$callMethod("getRefs");
        const parentWidth = parseFloat(parentRefs["width"].toString());
        widthVal = (parentWidth / parseInt(parentData.value["col"].toString())).toString() + "px";
      }
      width.value = widthVal;
    };
    const gridItemClasses = () => {
      if (parentData.value["border"]) {
        let classList = [];
        if (parent.value != null) {
          let childrenPat = parent.value.$callMethod("getChildren");
          childrenPat.map((child, index) => {
            let parentCol2 = parseInt(parentData.value["col"].toString());
            if (instance === child && parentCol2 > 0) {
              const len = childrenPat.length;
              if ((index + 1) % parentCol2 != 0 && index + 1 != len) {
                classList.push("up-border-right");
              }
              const lessNum = len % parentCol2 == 0 ? parentCol2 : len % parentCol2;
              if (index < len - lessNum) {
                classList.push("up-border-bottom");
              }
            }
          });
        }
        classes.value = classList;
      }
    };
    const init = () => {
      getParentData("up-grid", instance, false);
      nextTick(() => {
        getItemWidth();
      });
      uni.$emit("$upGridItem");
      gridItemClasses();
    };
    onMounted(() => {
      init();
    });
    onUnmounted(() => {
      uni.$off("$upGridItem");
    });
    __expose({
      gridItemClasses
    });
    const __returned__ = { parent, parentData, getParentData, instance, props, emit, width, classes, parentCol, itemStyle, clickHandler, getItemWidth, gridItemClasses, init };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-grid-item": { "": { "alignItems": "center", "justifyContent": "center", "position": "relative", "flexDirection": "column", "boxSizing": "border-box", "display": "flex" } }, "up-grid-item--hover-class": { "": { "opacity": 0.5 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.parentCol > 0 ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      class: normalizeClass(["up-grid-item", $setup.classes]),
      "hover-class": "up-grid-item--hover-class",
      "hover-stay-time": 200,
      onClick: $setup.clickHandler,
      style: normalizeStyle([$setup.itemStyle])
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )) : createCommentVNode("v-if", true);
}
const __easycom_49 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-grid-item/up-grid-item.uvue"]]);
export {
  __easycom_49 as _
};
//# sourceMappingURL=up-grid-item.js.map
