import { _ as __easycom_0 } from "../up-status-bar/up-status-bar.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_0$1 } from "../up-icon/up-icon.js";
import { a as addUnit, g as getPx, b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-navbar"
  },
  __name: "up-navbar",
  props: {
    safeAreaInsetTop: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: String,
      default: "arrow-left"
    },
    leftText: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: ""
    },
    rightIcon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    bgColor: {
      type: String,
      default: "#ffffff"
    },
    titleWidth: {
      type: [String, Number],
      default: "400rpx"
    },
    height: {
      type: [String, Number],
      default: "44px"
    },
    leftIconSize: {
      type: [String, Number],
      default: 20
    },
    leftIconColor: {
      type: String,
      default: "#303133"
    },
    autoBack: {
      type: Boolean,
      default: false
    },
    titleStyle: {
      type: [Object, String],
      default: () => {
        return new UTSJSONObject({});
      }
    },
    customClass: {
      type: String,
      default: ""
    }
  },
  emits: ["leftClick", "rightClick"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const placeholderHeight = computed(() => {
      const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
      return addUnit(parseInt(getPx(props.height)) + statusBarHeight, "px");
    });
    function leftClick() {
      emit("leftClick");
      if (props.autoBack) {
        uni.navigateBack();
      }
    }
    function rightClick() {
      emit("rightClick");
    }
    const __returned__ = { props, emit, placeholderHeight, leftClick, rightClick, get addUnit() {
      return addUnit;
    }, get addStyle() {
      return addStyle;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-navbar--fixed": { "": { "position": "fixed", "left": 0, "right": 0, "top": 0, "zIndex": 11 } }, "up-navbar__content": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "height": 44, "backgroundColor": "#9acafc", "position": "relative", "justifyContent": "center" } }, "up-navbar__content__left": { "": { "paddingTop": 0, "paddingRight": 13, "paddingBottom": 0, "paddingLeft": 13, "position": "absolute", "top": 0, "bottom": 0, "display": "flex", "flexDirection": "row", "alignItems": "center", "left": 0 } }, "up-navbar__content__right": { "": { "paddingTop": 0, "paddingRight": 13, "paddingBottom": 0, "paddingLeft": 13, "position": "absolute", "top": 0, "bottom": 0, "display": "flex", "flexDirection": "row", "alignItems": "center", "right": 0 } }, "up-navbar__content__left--hover": { "": { "opacity": 0.7 } }, "up-navbar__content__left__text": { "": { "fontSize": 15, "marginLeft": 3 } }, "up-navbar__content__title": { "": { "textAlign": "center", "fontSize": 16, "color": "#303133" } }, "up-navbar__content__right__text": { "": { "fontSize": 15, "marginLeft": 3 } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, resolveComponent: _resolveComponent, createBlock: _createBlock, renderSlot: _renderSlot, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, normalizeClass: _normalizeClass } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_status_bar = resolveEasycom(__resolveDynamicComponent("up-status-bar"), __easycom_0);
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0$1);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-navbar", [$props.customClass]])
    },
    [
      $props.fixed && $props.placeholder ? (_openBlock(), _createElementBlock(
        "view",
        {
          key: 0,
          class: "up-navbar__placeholder",
          style: _normalizeStyle({
            height: $setup.placeholderHeight
          })
        },
        null,
        4
        /* STYLE */
      )) : _createCommentVNode("v-if", true),
      _createElementVNode(
        "view",
        {
          class: _normalizeClass([$props.fixed ? "up-navbar--fixed" : ""])
        },
        [
          $props.safeAreaInsetTop ? (_openBlock(), _createBlock(_component_up_status_bar, {
            key: 0,
            bgColor: $props.bgColor
          }, null, 8, ["bgColor"])) : _createCommentVNode("v-if", true),
          _createElementVNode(
            "view",
            {
              class: _normalizeClass(["up-navbar__content", [$props.border ? "up-border-bottom" : ""]]),
              style: _normalizeStyle({
                height: $setup.addUnit($props.height),
                backgroundColor: $props.bgColor
              })
            },
            [
              _createElementVNode("view", {
                class: "up-navbar__content__left",
                "hover-class": "up-navbar__content__left--hover",
                "hover-start-time": "150",
                onClick: $setup.leftClick
              }, [
                _renderSlot(_ctx.$slots, "left", {}, () => [
                  $props.leftIcon != "" ? (_openBlock(), _createBlock(_component_up_icon, {
                    key: 0,
                    name: $props.leftIcon,
                    size: $props.leftIconSize,
                    color: $props.leftIconColor
                  }, null, 8, ["name", "size", "color"])) : _createCommentVNode("v-if", true),
                  $props.leftText != "" ? (_openBlock(), _createElementBlock(
                    "text",
                    {
                      key: 1,
                      style: _normalizeStyle({
                        color: $props.leftIconColor
                      }),
                      class: "up-navbar__content__left__text"
                    },
                    _toDisplayString($props.leftText),
                    5
                    /* TEXT, STYLE */
                  )) : _createCommentVNode("v-if", true)
                ])
              ]),
              _renderSlot(_ctx.$slots, "center", {}, () => [
                _createElementVNode(
                  "text",
                  {
                    class: "up-line-1 up-navbar__content__title",
                    style: _normalizeStyle([{
                      width: $setup.addUnit($props.titleWidth)
                    }, $setup.addStyle($props.titleStyle)])
                  },
                  _toDisplayString($props.title),
                  5
                  /* TEXT, STYLE */
                )
              ]),
              _ctx.$slots["right"] != null || $props.rightIcon != "" || $props.rightText != "" ? (_openBlock(), _createElementBlock("view", {
                key: 0,
                class: "up-navbar__content__right",
                onClick: $setup.rightClick
              }, [
                _renderSlot(_ctx.$slots, "right", {}, () => [
                  $props.rightIcon != "" ? (_openBlock(), _createBlock(_component_up_icon, {
                    key: 0,
                    name: $props.rightIcon,
                    size: "20"
                  }, null, 8, ["name"])) : _createCommentVNode("v-if", true),
                  $props.rightText != "" ? (_openBlock(), _createElementBlock(
                    "text",
                    {
                      key: 1,
                      class: "up-navbar__content__right__text"
                    },
                    _toDisplayString($props.rightText),
                    1
                    /* TEXT */
                  )) : _createCommentVNode("v-if", true)
                ])
              ])) : _createCommentVNode("v-if", true)
            ],
            6
            /* CLASS, STYLE */
          )
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-navbar/up-navbar.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-navbar.js.map
