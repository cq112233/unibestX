import { _ as __easycom_35 } from "../up-icon/up-icon.js";
const { defineComponent, getCurrentInstance, ref, watch, computed, onMounted, nextTick, resolveDynamicComponent, openBlock, createElementBlock, createVNode, withCtx, renderSlot, toDisplayString, createCommentVNode, createBlock, Fragment, createElementVNode, normalizeStyle } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_39 } from "../up-cell/up-cell.js";
import { _ as __easycom_0 } from "../up-line/up-line.js";
import { d as defProps } from "./collapseItem.js";
import { i as guid, u as upGetRect, s as sleep, f as error } from "../../libs/function/index.js";
import { a as array } from "../../libs/function/test.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-collapse-item"
  },
  __name: "up-collapse-item",
  props: {
    title: {
      type: [String],
      default: defProps.getString("collapseItem.title")
    },
    value: {
      type: [String],
      default: defProps.getString("collapseItem.value")
    },
    label: {
      type: [String],
      default: defProps.getString("collapseItem.label")
    },
    disabled: {
      type: [Boolean],
      default: defProps.getBoolean("collapseItem.disabled")
    },
    isLink: {
      type: [Boolean],
      default: defProps.getBoolean("collapseItem.isLink")
    },
    clickable: {
      type: [Boolean],
      default: defProps.getBoolean("collapseItem.clickable")
    },
    border: {
      type: [Boolean],
      default: defProps.getBoolean("collapseItem.border")
    },
    align: {
      type: [String],
      default: defProps.getString("collapseItem.align")
    },
    name: {
      type: [String, Number],
      default: defProps.getString("collapseItem.name")
    },
    icon: {
      type: [String],
      default: defProps.getString("collapseItem.icon")
    },
    duration: {
      type: [Number, String],
      default: defProps.getNumber("collapseItem.duration")
    },
    showRight: {
      type: [Boolean],
      default: defProps.getBoolean("collapseItem.showRight")
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    const _b = useUltraUI(), parent = _b.parent, parentData = _b.parentData, getParentData = _b.getParentData;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const timer = ref(0);
    const elId = ref(guid());
    const height = ref(0);
    const animationData = ref(new UTSJSONObject({}));
    const expanded = ref(false);
    const showBorder = ref(false);
    const animating = ref(false);
    watch(expanded, (n) => {
      clearTimeout(timer.value);
      timer.value = 0;
      timer.value = setTimeout(() => {
        showBorder.value = n;
      }, n ? 10 : 290);
    });
    const titleCpu = computed(() => {
      if ((instance === null || instance === void 0 ? null : instance.$slots["title"]) == null) {
        return props.title.toString();
      } else {
        return "";
      }
    });
    async function setContentAnimate(expandedFrom) {
      expanded.value = expandedFrom;
      const rect = await upGetRect(`#${elId.value}`, false, instance);
      height.value = expanded.value ? rect.height == null ? 0 : rect.height : 0;
      animating.value = true;
      await sleep(parseInt(props.duration.toString()));
      animating.value = false;
    }
    async function init() {
      var _a2;
      getParentData("up-collapse", instance, false);
      if (parent.value == null) {
        return error("up-collapse-item必须要搭配up-collapse组件使用");
      }
      let value = (_a2 = parentData.value["value"]) !== null && _a2 !== void 0 ? _a2 : "";
      const accordion = parentData.value["accordion"];
      if (accordion != null && accordion) {
        if (array(value)) {
          return error("手风琴模式下，up-collapse组件的value参数不能为数组");
        }
        expanded.value = props.name.toString() == value.toString();
      } else {
        if (!array(value) && value != "") {
          uni.__f__("log", "at uni_modules/uview-ultra/components/up-collapse-item/up-collapse-item.uvue:197", "#", value, "#");
          return error("非手风琴模式下，up-collapse组件的value参数必须为数组");
        }
        if (value == "") {
          value = [];
        }
        const valueArr = value;
        const sameName = (element) => {
          return element == props.name.toString();
        };
        expanded.value = valueArr.some(sameName);
      }
      await nextTick();
      setContentAnimate(expanded.value);
    }
    const clickHandler = function() {
      if (props.disabled || animating.value)
        return null;
      if (parent.value != null) {
        parent.value.$callMethod("onChange", instance);
      } else {
        uni.__f__("error", "at uni_modules/uview-ultra/components/up-collapse-item/up-collapse-item.uvue:220", "parent is null");
      }
    };
    onMounted(() => {
      init();
    });
    const getInternalState = () => {
      return new UTSJSONObject({
        name: props.name,
        expanded: expanded.value
      });
    };
    __expose({
      init,
      setContentAnimate,
      getInternalState
    });
    const __returned__ = { parent, parentData, getParentData, instance, props, timer, elId, height, animationData, expanded, showBorder, animating, titleCpu, setContentAnimate, init, clickHandler, getInternalState };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-collapse-item__content": { "": { "overflow": "hidden", "height": 0, "transitionProperty": "height", "transitionDuration": "0.5s", "transitionTimingFunction": "ease-out" } }, "up-collapse-item__content__text": { "": { "paddingTop": 12, "paddingRight": 15, "paddingBottom": 12, "paddingLeft": 15 } }, "text": { ".up-collapse-item__content__text ": { "color": "#606266", "fontSize": 14, "lineHeight": "18px" } }, "@TRANSITION": { "up-collapse-item__content": { "property": "height", "duration": "0.5s", "timingFunction": "ease-out" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_35);
  const _component_up_cell = resolveEasycom(resolveDynamicComponent("up-cell"), __easycom_39);
  const _component_up_line = resolveEasycom(resolveDynamicComponent("up-line"), __easycom_0);
  return openBlock(), createElementBlock("view", { class: "up-collapse-item" }, [
    createVNode(_component_up_cell, {
      title: $setup.titleCpu,
      value: $props.value,
      label: $props.label,
      icon: $props.icon,
      isLink: $props.isLink,
      clickable: $props.clickable,
      border: $setup.parentData["border"] != null && $setup.parentData["border"] && $setup.showBorder,
      onClick: $setup.clickHandler,
      arrowDirection: $setup.expanded ? "up" : "down",
      disabled: $props.disabled
    }, {
      title: withCtx(() => [
        renderSlot(_ctx.$slots, "title", {}, () => [
          _ctx.$slots["title"] != null && $props.title != "" ? (openBlock(), createElementBlock(
            "text",
            { key: 0 },
            toDisplayString($props.title),
            1
            /* TEXT */
          )) : createCommentVNode("v-if", true)
        ])
      ]),
      icon: withCtx(() => [
        renderSlot(_ctx.$slots, "icon", {}, () => [
          _ctx.$slots["icon"] != null && $props.icon != "" ? (openBlock(), createBlock(_component_up_icon, {
            key: 0,
            size: 22,
            name: $props.icon
          }, null, 8, ["name"])) : createCommentVNode("v-if", true)
        ])
      ]),
      value: withCtx(() => [
        renderSlot(_ctx.$slots, "value", {}, () => [
          _ctx.$slots["value"] != null && $props.value != "" ? (openBlock(), createElementBlock(
            "text",
            { key: 0 },
            toDisplayString($props.value),
            1
            /* TEXT */
          )) : createCommentVNode("v-if", true)
        ])
      ]),
      "right-icon": withCtx(() => [
        $props.showRight ? (openBlock(), createElementBlock(
          Fragment,
          { key: 0 },
          [
            _ctx.$slots["right-icon"] != null ? (openBlock(), createBlock(_component_up_icon, {
              key: 0,
              size: 16,
              name: "arrow-right"
            })) : createCommentVNode("v-if", true),
            renderSlot(_ctx.$slots, "right-icon")
          ],
          64
          /* STABLE_FRAGMENT */
        )) : createCommentVNode("v-if", true)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["title", "value", "label", "icon", "isLink", "clickable", "border", "arrowDirection", "disabled"]),
    createElementVNode("view", {
      class: "up-collapse-item__content",
      style: normalizeStyle({ height: _ctx.$up.addUnit($setup.height) }),
      animation: $setup.animationData,
      ref: "animation"
    }, [
      createElementVNode("view", {
        class: "up-collapse-item__content__text content-class",
        id: $setup.elId,
        ref: $setup.elId
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, ["id"])
    ], 12, ["animation"]),
    $setup.parentData["border"] ? (openBlock(), createBlock(_component_up_line, { key: 0 })) : createCommentVNode("v-if", true)
  ]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-collapse-item/up-collapse-item.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-collapse-item.js.map
