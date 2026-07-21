const { defineComponent, getCurrentInstance, computed, onMounted, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, toDisplayString } = globalThis.Vue
import { f as error, m as getParentFunc } from "../../libs/function/index.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { d as defProps } from "./indexAnchor.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-index-anchor"
  },
  __name: "up-index-anchor",
  props: {
    text: {
      type: [String, Number],
      default: defProps.getString("indexAnchor.text")
    },
    color: {
      type: String,
      default: defProps.getString("indexAnchor.color")
    },
    size: {
      type: [String, Number],
      default: defProps.getNumber("indexAnchor.size")
    },
    bgColor: {
      type: String,
      default: defProps.getString("indexAnchor.bgColor")
    },
    height: {
      type: [String, Number],
      default: defProps.getNumber("indexAnchor.height")
    }
  },
  emits: [],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const _b = useUltraUI(), parent = _b.parent, parentData = _b.parentData, getParent = _b.getParent;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const emit = __emit;
    const textName = computed(() => {
      return props.text.toString();
    });
    const parentSticky = computed(() => {
      const indexList = getParent("up-index-list", instance);
      if (parentData.value["sticky"] != null) {
        return indexList != null ? parentData.value["sticky"] : true;
      } else {
        return false;
      }
    });
    const init = function() {
      const indexList = getParent("up-index-list", instance);
      if (indexList == null) {
        return error("up-index-anchor必须要搭配up-index-list组件使用");
      }
      if (parent.value != null) {
        parent.value.$callMethod("addAnchors", instance);
      }
      const indexListItem = getParentFunc("up-index-item", instance);
      if (indexListItem == null) {
        return error("up-index-anchor必须要搭配up-index-item组件使用");
      }
      if (props.text.toString().charCodeAt(0) != null) {
        indexListItem.$callMethod("setId", props.text.toString().charCodeAt(0).toString());
      }
    };
    onMounted(() => {
      init();
    });
    const __returned__ = { parent, parentData, getParent, instance, props, emit, textName, parentSticky, init };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-index-anchor": { "": { "position": "relative", "top": 0, "display": "flex", "flexDirection": "row", "alignItems": "center", "paddingLeft": 15, "zIndex": 1 } }, "up-index-anchor--sticky": { "": { "position": "relative", "top": 0 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["up-index-anchor up-border-bottom", { "up-index-anchor--sticky": $setup.parentSticky }]),
      ref: `up-index-anchor-${$setup.textName}`,
      style: normalizeStyle({
        height: _ctx.$up.addUnit($props.height),
        backgroundColor: $props.bgColor
      })
    },
    [
      createElementVNode(
        "text",
        {
          class: "up-index-anchor__text",
          style: normalizeStyle({
            fontSize: _ctx.$up.addUnit($props.size),
            color: $props.color
          })
        },
        toDisplayString($setup.textName),
        5
        /* TEXT, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_26 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-index-anchor/up-index-anchor.uvue"]]);
export {
  __easycom_26 as _
};
//# sourceMappingURL=up-index-anchor.js.map
