const { defineComponent, getCurrentInstance, ref, onMounted, openBlock, createElementBlock, normalizeClass, renderSlot } = globalThis.Vue
import { f as error, s as sleep, u as upGetRect } from "../../libs/function/index.js";
import { d as defProps } from "./indexItem.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-index-item"
  },
  __name: "up-index-item",
  props: {
    text: {
      type: [String, Number],
      default: defProps.getString("indexItem.text")
    }
  },
  emits: [],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const _b = useUltraUI(), parent = _b.parent, getParent = _b.getParent, getParentData = _b.getParentData;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const emit = __emit;
    const top = ref(0);
    const height = ref(0);
    const itemId = ref("");
    const anchor = ref(new UTSJSONObject({}));
    const getIndexItemRect = function() {
      return new Promise((resolve) => {
        upGetRect(".up-index-item", false, instance).then((size = null) => {
          resolve(size);
        });
      });
    };
    const init = function() {
      getParentData("up-index-list", instance, false);
      if (parent.value == null) {
        return error("up-index-item必须要搭配up-index-list组件使用");
      }
      sleep().then(() => {
        getIndexItemRect().then((size) => {
          var _a2, _b2;
          top.value = Math.ceil((_a2 = size.top) !== null && _a2 !== void 0 ? _a2 : 0);
          height.value = Math.ceil((_b2 = size.height) !== null && _b2 !== void 0 ? _b2 : 0);
        });
      });
    };
    onMounted(() => {
      if (props.text != "") {
        itemId.value = props.text.toString().charCodeAt(0).toString();
      }
      init();
    });
    const setId = function(idPam) {
      uni.__f__("log", "at uni_modules/uview-ultra/components/up-index-item/up-index-item.uvue:73", idPam);
      itemId.value = idPam;
    };
    const getRefs = function() {
      return new UTSJSONObject({
        height: height.value
      });
    };
    __expose({
      setId,
      getRefs
    });
    const __returned__ = { parent, getParent, getParentData, instance, props, emit, top, height, itemId, anchor, getIndexItemRect, init, setId, getRefs };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(["up-index-item", ["up-index-item-" + $setup.itemId]]),
    id: "up-index-item-" + $setup.itemId
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, ["id"]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-index-item/up-index-item.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-index-item.js.map
