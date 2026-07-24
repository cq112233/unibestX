import { _ as __easycom_0 } from "../up-icon/up-icon.js";
const { defineComponent, computed, resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot, createBlock, createCommentVNode, toDisplayString } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_0$1 } from "../up-line/up-line.js";
import { d as defProps } from "./cell.js";
import { b as addStyle } from "../../libs/function/index.js";
import { e as empty } from "../../libs/function/test.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-cell"
  },
  __name: "up-cell",
  props: {
    title: {
      type: String,
      default: defProps.getString("cell.title")
    },
    label: {
      type: String,
      default: defProps.getString("cell.label")
    },
    value: {
      type: [String, Number],
      default: defProps.getString("cell.value")
    },
    icon: {
      type: String,
      default: defProps.getString("cell.icon")
    },
    iconStyle: {
      type: [String, Object],
      default: defProps.getAny("cell.iconStyle")
    },
    rightIcon: {
      type: String,
      default: defProps.getString("cell.rightIcon")
    },
    rightIconStyle: {
      type: [String, Object],
      default: defProps.getAny("cell.rightIconStyle")
    },
    size: {
      type: String,
      default: defProps.getString("cell.size")
    },
    center: {
      type: Boolean,
      default: defProps.getBoolean("cell.center")
    },
    url: {
      type: String,
      default: defProps.getString("cell.url")
    },
    name: {
      type: [String, Number],
      default: defProps.getString("cell.name")
    },
    linkType: {
      type: String,
      default: defProps.getString("cell.linkType")
    },
    clickable: {
      type: Boolean,
      default: defProps.getBoolean("cell.clickable")
    },
    isLink: {
      type: Boolean,
      default: defProps.getBoolean("cell.isLink")
    },
    arrowDirection: {
      type: String,
      default: defProps.getString("cell.arrowDirection")
    },
    border: {
      type: Boolean,
      default: defProps.getBoolean("cell.border")
    },
    disabled: {
      type: Boolean,
      default: defProps.getBoolean("cell.disabled")
    },
    titleStyle: {
      type: Object,
      default: defProps.getAny("cell.titleStyle")
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const props = __props;
    const emits = __emit;
    const testEmpty = function(val) {
      return empty(val);
    };
    const titleTextStyle = computed(() => {
      return addStyle(props.titleStyle);
    });
    const clickHandler = (e = null) => {
      if (props.disabled)
        return null;
      emits("click", new UTSJSONObject({
        name: props.name
      }));
      if (!props.isLink)
        return null;
      if (props.url != "") {
        uni.navigateTo({
          url: props.url
        });
      }
    };
    __expose({
      testEmpty
    });
    const __returned__ = { props, emits, testEmpty, titleTextStyle, clickHandler };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-cell__body": { "": { "display": "flex", "flexDirection": "row", "boxSizing": "border-box", "!paddingTop": 10, "!paddingRight": 15, "!paddingBottom": 10, "!paddingLeft": 15, "alignItems": "center" } }, "up-cell__body__content": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-cell__body--large": { "": { "!paddingTop": 13, "!paddingBottom": 13 } }, "up-cell__left-icon-wrap": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "!marginRight": 4 } }, "up-cell__right-icon-wrap": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "!marginLeft": 4, "transitionProperty": "transform", "transitionDuration": "0.3s" } }, "up-cell__right-icon-wrap--up": { "": { "transform": "rotate(-90deg)" } }, "up-cell__right-icon-wrap--down": { "": { "transform": "rotate(90deg)" } }, "up-cell__title": { "": { "!flexGrow": 1, "!flexShrink": 1, "!flexBasis": "0%" } }, "up-cell__title-text": { "": { "!fontSize": 15, "!lineHeight": "22px", "!color": "#303133" } }, "up-cell__title-text--large": { "": { "!fontSize": 16 } }, "up-cell__label": { "": { "!marginTop": 5, "!fontSize": 12, "!color": "#909193", "!lineHeight": "18px" } }, "up-cell__label--large": { "": { "!fontSize": 14 } }, "up-cell__value": { "": { "textAlign": "right", "marginLeft": "auto", "!fontSize": 14, "!lineHeight": "24px", "!color": "#606266" } }, "up-cell__value--large": { "": { "!fontSize": 15 } }, "up-cell--clickable": { "": { "!backgroundColor": "#f3f4f6" } }, "up-cell--disabled": { "": { "!color": "#c8c9cc" } }, "up-cell--center": { "": { "alignItems": "center" } }, "@TRANSITION": { "up-cell__right-icon-wrap": { "property": "transform", "duration": "0.3s" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  const _component_up_line = resolveEasycom(resolveDynamicComponent("up-line"), __easycom_0$1);
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(["up-cell", [_ctx.customClass]]),
    style: normalizeStyle([_ctx.$up.addStyle(_ctx.customStyle)]),
    "hover-class": !$props.disabled && ($props.clickable || $props.isLink) ? "up-cell--clickable" : "",
    "hover-stay-time": 250,
    onClick: $setup.clickHandler
  }, [
    createElementVNode("view", {
      class: "up-cell__body",
      aclass: "[ center && 'up-cell--center', size === 'large' && 'up-cell__body--large']"
    }, [
      createElementVNode("view", { class: "up-cell__body__content" }, [
        _ctx.$slots["icon"] != null || $props.icon != "" ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "up-cell__left-icon-wrap"
        }, [
          _ctx.$slots["icon"] != null ? renderSlot(_ctx.$slots, "icon", { key: 0 }) : (openBlock(), createBlock(_component_up_icon, {
            key: 1,
            name: $props.icon,
            "custom-style": $props.iconStyle,
            size: $props.size === "large" ? "22px" : "18px"
          }, null, 8, ["name", "custom-style", "size"]))
        ])) : createCommentVNode("v-if", true),
        createElementVNode("view", { class: "up-cell__title" }, [
          _ctx.$slots["title"] != null && $props.title == "" ? renderSlot(_ctx.$slots, "title", { key: 0 }) : (openBlock(), createElementBlock(
            "text",
            {
              key: 1,
              class: "up-cell__title-text",
              style: normalizeStyle([$setup.titleTextStyle]),
              aclass: "[disabled && 'up-cell--disabled', size === 'large' && 'up-cell__title-text--large']"
            },
            toDisplayString($props.title),
            5
            /* TEXT, STYLE */
          )),
          renderSlot(_ctx.$slots, "label", {}, () => [
            $props.label ? (openBlock(), createElementBlock(
              "text",
              {
                key: 0,
                class: "up-cell__label",
                aclass: "[disabled && 'up-cell--disabled', size === 'large' && 'up-cell__label--large']"
              },
              toDisplayString($props.label),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true)
          ])
        ])
      ]),
      renderSlot(_ctx.$slots, "value", {}, () => [
        $setup.testEmpty($props.value) == false ? (openBlock(), createElementBlock(
          "text",
          {
            key: 0,
            class: "up-cell__value",
            aclass: "[disabled && 'up-cell--disabled', size === 'large' && 'up-cell__value--large']"
          },
          toDisplayString($props.value),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true)
      ]),
      _ctx.$slots["right-icon"] != null || $props.isLink ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: normalizeClass(["up-cell__right-icon-wrap", [`up-cell__right-icon-wrap--${$props.arrowDirection}`]])
        },
        [
          renderSlot(_ctx.$slots, "right-icon", {}, () => [
            $props.rightIcon ? (openBlock(), createBlock(_component_up_icon, {
              key: 0,
              name: $props.rightIcon,
              "custom-style": $props.rightIconStyle,
              color: $props.disabled ? "#c8c9cc" : "info",
              size: $props.size === "large" ? "18px" : "16px"
            }, null, 8, ["name", "custom-style", "color", "size"])) : createCommentVNode("v-if", true)
          ])
        ],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true),
      _ctx.$slots["righticon"] != null ? (openBlock(), createElementBlock(
        "view",
        {
          key: 1,
          class: normalizeClass(["up-cell__right-icon-wrap", [`up-cell__right-icon-wrap--${$props.arrowDirection}`]])
        },
        [
          renderSlot(_ctx.$slots, "righticon")
        ],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true)
    ]),
    $props.border ? (openBlock(), createBlock(_component_up_line, { key: 0 })) : createCommentVNode("v-if", true)
  ], 14, ["hover-class"]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-cell/up-cell.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-cell.js.map
