import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_1$1 } from "../up-badge/up-badge.js";
import { b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, inject } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-tabbar-item"
  },
  __name: "up-tabbar-item",
  props: {
    name: {
      type: [String, Number, null],
      default: null
    },
    icon: {
      type: String,
      default: ""
    },
    badge: {
      type: [String, Number, null],
      default: null
    },
    dot: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    },
    badgeStyle: {
      type: [Object, String],
      default: "top: 6px;right:2px;"
    },
    mode: {
      type: String,
      default: ""
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const parentProps = inject("upTabbarProps", null);
    const parentChange = inject("upTabbarChange", null);
    const isMidButton = computed(() => {
      return props.mode === "midButton";
    });
    const isActive = computed(() => {
      if (parentProps == null || props.name == null)
        return false;
      return parentProps.value == props.name;
    });
    const activeColor = computed(() => {
      var _a2;
      return (_a2 = parentProps === null || parentProps === void 0 ? null : parentProps.activeColor) !== null && _a2 !== void 0 ? _a2 : "#1989fa";
    });
    const inactiveColor = computed(() => {
      var _a2;
      return (_a2 = parentProps === null || parentProps === void 0 ? null : parentProps.inactiveColor) !== null && _a2 !== void 0 ? _a2 : "#7d7e80";
    });
    function clickHandler() {
      if (props.name != null && parentChange != null) {
        parentChange(props.name);
      }
      emit("click", props.name);
    }
    const __returned__ = { props, emit, parentProps, parentChange, isMidButton, isActive, activeColor, inactiveColor, clickHandler, get addStyle() {
      return addStyle;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabbar-item": { "": { "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-tabbar-item__icon": { "": { "position": "relative", "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "up-tabbar-item__text": { "": { "marginTop": 2, "fontSize": 11, "color": "#606266", "textAlign": "center" } }, "up-tabbar-item--mid-button": { "": { "position": "relative" } }, "up-tabbar-item__icon--mid-button": { "": { "position": "absolute", "top": -18, "width": 44, "height": 44, "borderTopLeftRadius": "50%", "borderTopRightRadius": "50%", "borderBottomRightRadius": "50%", "borderBottomLeftRadius": "50%", "backgroundColor": "#ffffff", "boxShadow": "0 2px 8px rgba(0, 0, 0, 0.15)", "display": "flex", "alignItems": "center", "justifyContent": "center", "zIndex": 10 } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, resolveComponent: _resolveComponent, createBlock: _createBlock, renderSlot: _renderSlot, Fragment: _Fragment, createVNode: _createVNode, normalizeClass: _normalizeClass, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  const _component_up_badge = resolveEasycom(__resolveDynamicComponent("up-badge"), __easycom_1$1);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-tabbar-item", [$setup.isMidButton ? "up-tabbar-item--mid-button" : ""]]),
      style: _normalizeStyle([$setup.addStyle($props.customStyle)]),
      onClick: $setup.clickHandler
    },
    [
      _createElementVNode(
        "view",
        {
          class: _normalizeClass(["up-tabbar-item__icon", [$setup.isMidButton ? "up-tabbar-item__icon--mid-button" : ""]])
        },
        [
          $setup.isMidButton ? (_openBlock(), _createElementBlock("view", {
            key: 0,
            class: "up-tabbar-item--mid-button-cover"
          })) : _createCommentVNode("v-if", true),
          $props.icon != "" ? (_openBlock(), _createBlock(_component_up_icon, {
            key: 1,
            name: $props.icon,
            color: $setup.isActive ? $setup.activeColor : $setup.inactiveColor,
            size: $setup.isMidButton ? 26 : 20
          }, null, 8, ["name", "color", "size"])) : (_openBlock(), _createElementBlock(
            _Fragment,
            { key: 2 },
            [
              $setup.isActive ? _renderSlot(_ctx.$slots, "active-icon", { key: 0 }) : _renderSlot(_ctx.$slots, "inactive-icon", { key: 1 })
            ],
            64
            /* STABLE_FRAGMENT */
          )),
          _createVNode(_component_up_badge, {
            absolute: "",
            offset: [0, $props.dot ? "34rpx" : $props.badge != null && parseInt($props.badge.toString()) > 9 ? "14rpx" : "20rpx"],
            customStyle: $props.badgeStyle,
            isDot: $props.dot,
            value: $props.badge != null ? $props.dot ? 1 : $props.badge : 0,
            show: $props.dot ? true : $props.badge != null ? parseInt($props.badge.toString()) > 0 : false
          }, null, 8, ["offset", "customStyle", "isDot", "value", "show"])
        ],
        2
        /* CLASS */
      ),
      _renderSlot(_ctx.$slots, "text", {}, () => [
        _createElementVNode(
          "text",
          {
            class: "up-tabbar-item__text",
            style: _normalizeStyle({
              color: $setup.isActive ? $setup.activeColor : $setup.inactiveColor
            })
          },
          _toDisplayString($props.text),
          5
          /* TEXT, STYLE */
        )
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-tabbar-item/up-tabbar-item.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-tabbar-item.js.map
