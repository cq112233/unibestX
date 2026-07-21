import { _ as __easycom_0 } from "../up-line/up-line.js";
const { defineComponent, getCurrentInstance, computed, watch, resolveDynamicComponent, openBlock, createElementBlock, createBlock, createCommentVNode, renderSlot } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { d as defProps } from "./collapse.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-collapse"
  },
  __name: "up-collapse",
  props: {
    value: {
      type: [String, Number, Array],
      default: () => {
        return defProps.getString("collapse.value");
      }
    },
    accordion: {
      type: Boolean,
      default: defProps.getBoolean("collapse.accordion")
    },
    border: {
      type: Boolean,
      default: defProps.getBoolean("collapse.border")
    }
  },
  emits: ["change", "open", "close"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const _b = useUltraUI(), children = _b.children, getChildren = _b.getChildren, addChild = _b.addChild;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const emit = __emit;
    const parentDataSelf = computed(() => {
      return new UTSJSONObject({
        accordion: props.accordion,
        border: props.border,
        value: props.value
      });
    });
    const init = function() {
      var _a2;
      (_a2 = children.value) === null || _a2 === void 0 ? null : _a2.map((child) => {
        child === null || child === void 0 ? null : child.$callMethod("init");
      });
    };
    const onChange = function(target) {
      var _a2;
      const changeArr = [];
      (_a2 = children.value) === null || _a2 === void 0 ? null : _a2.map((child, index) => {
        let childState = child.$callMethod("getInternalState");
        if (props.accordion) {
          if (child !== target) {
            child.$callMethod("setContentAnimate", false);
          }
        }
        if (child === target) {
          child.$callMethod("setContentAnimate", !childState["expanded"]);
        }
        changeArr.push(new UTSJSONObject({
          // 如果没有定义name属性，则默认返回组件的index索引
          name: childState["name"] != null ? childState["name"].toString() : index.toString(),
          status: childState["expanded"] ? "open" : "close"
        }));
      });
      emit("change", changeArr);
      let trgetState = target.$callMethod("getInternalState");
      const expand = trgetState["expanded"];
      emit(expand ? "open" : "close", trgetState["name"] != null ? trgetState["name"] : "");
    };
    watch(parentDataSelf, () => {
      init();
    }, { deep: true });
    const getProps = function() {
      return parentDataSelf.value;
    };
    const getRefs = function() {
      return new UTSJSONObject({});
    };
    __expose({
      onChange,
      getChildren,
      addChild,
      getProps,
      getRefs
    });
    const __returned__ = { children, getChildren, addChild, instance, props, emit, parentDataSelf, init, onChange, getProps, getRefs };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_line = resolveEasycom(resolveDynamicComponent("up-line"), __easycom_0);
  return openBlock(), createElementBlock("view", { class: "up-collapse" }, [
    $props.border ? (openBlock(), createBlock(_component_up_line, { key: 0 })) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default")
  ]);
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-collapse/up-collapse.uvue"]]);
export {
  __easycom_3 as _
};
//# sourceMappingURL=up-collapse.js.map
