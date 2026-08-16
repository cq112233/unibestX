import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-cell/up-cell&";
import { _ as __easycom_0$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-line/up-line&";
import { j as guid, u as upGetRect, s as sleep, k as error, a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { a as array } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/test&";
import { u as useUltraUI } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { nextTick, ref, watch, computed, onMounted, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-collapse-item"
  },
  __name: "up-collapse-item",
  props: {
    title: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isLink: {
      type: Boolean,
      default: true
    },
    clickable: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: "left"
    },
    name: {
      type: [String, Number],
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    showRight: {
      type: Boolean,
      default: true
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
      height.value = expanded.value ? rect.height == null ? "auto" : rect.height : 0;
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
    const __returned__ = { parent, parentData, getParentData, instance, props, timer, elId, height, expanded, showBorder, animating, titleCpu, setContentAnimate, init, clickHandler, getInternalState, get addUnit() {
      return addUnit;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-collapse-item__content": { "": { "overflow": "hidden", "height": 0, "transitionProperty": "height", "transitionDuration": "0.3s", "transitionTimingFunction": "ease-out" } }, "up-collapse-item__content__text": { "": { "paddingTop": 12, "paddingRight": 15, "paddingBottom": 12, "paddingLeft": 15, "color": "#606266", "fontSize": 14, "lineHeight": "18px" } }, "@TRANSITION": { "up-collapse-item__content": { "property": "height", "duration": "0.3s", "timingFunction": "ease-out" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderSlot: _renderSlot, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, resolveComponent: _resolveComponent, createBlock: _createBlock, Fragment: _Fragment, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, normalizeStyle: _normalizeStyle } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  const _component_up_cell = resolveEasycom(__resolveDynamicComponent("up-cell"), __easycom_1$1);
  const _component_up_line = resolveEasycom(__resolveDynamicComponent("up-line"), __easycom_0$1);
  return _openBlock(), _createElementBlock("view", { class: "up-collapse-item" }, [
    _createVNode(_component_up_cell, {
      title: $setup.titleCpu,
      value: $props.value,
      label: $props.label,
      icon: $props.icon,
      isLink: $props.isLink,
      clickable: $props.clickable,
      border: $props.border && $setup.showBorder,
      onClick: $setup.clickHandler,
      customStyle: {
        padding: "10px 0"
      }
    }, {
      title: _withCtx(() => [
        _renderSlot(_ctx.$slots, "title", {}, () => [
          _ctx.$slots["title"] != null && $props.title != "" ? (_openBlock(), _createElementBlock(
            "text",
            { key: 0 },
            _toDisplayString($props.title),
            1
            /* TEXT */
          )) : _createCommentVNode("v-if", true)
        ])
      ]),
      icon: _withCtx(() => [
        _renderSlot(_ctx.$slots, "icon", {}, () => [
          _ctx.$slots["icon"] != null && $props.icon != "" ? (_openBlock(), _createElementBlock(
            "text",
            { key: 0 },
            _toDisplayString($props.icon),
            1
            /* TEXT */
          )) : _createCommentVNode("v-if", true)
        ])
      ]),
      value: _withCtx(() => [
        _renderSlot(_ctx.$slots, "value", {}, () => [
          _ctx.$slots["value"] != null && $props.value != "" ? (_openBlock(), _createElementBlock(
            "text",
            { key: 0 },
            _toDisplayString($props.value),
            1
            /* TEXT */
          )) : _createCommentVNode("v-if", true)
        ])
      ]),
      "right-icon": _withCtx(() => [
        $props.showRight ? (_openBlock(), _createElementBlock(
          _Fragment,
          { key: 0 },
          [
            _ctx.$slots["right-icon"] != null ? (_openBlock(), _createBlock(_component_up_icon, {
              key: 0,
              size: 16,
              name: "arrow-right"
            })) : _createCommentVNode("v-if", true),
            _renderSlot(_ctx.$slots, "right-icon")
          ],
          64
          /* STABLE_FRAGMENT */
        )) : _createCommentVNode("v-if", true)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["title", "value", "label", "icon", "isLink", "clickable", "border"]),
    _createElementVNode(
      "view",
      {
        class: "up-collapse-item__content",
        style: _normalizeStyle({ height: $setup.addUnit($setup.height) })
      },
      [
        _createElementVNode("view", {
          class: "up-collapse-item__content__text content-class",
          id: $setup.elId,
          ref: $setup.elId
        }, [
          _renderSlot(_ctx.$slots, "default")
        ], 8, ["id"])
      ],
      4
      /* STYLE */
    ),
    $setup.parentData["border"] != null && $setup.parentData["border"] ? (_openBlock(), _createBlock(_component_up_line, { key: 0 })) : _createCommentVNode("v-if", true)
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-collapse-item/up-collapse-item.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-collapse-item.js.map
