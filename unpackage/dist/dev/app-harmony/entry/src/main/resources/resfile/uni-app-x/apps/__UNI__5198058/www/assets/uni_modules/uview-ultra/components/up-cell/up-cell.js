import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_0$1 } from "../up-line/up-line.js";
import { d as defProps } from "./cell.js";
import { b as addStyle } from "../../libs/function/index.js";
import { e as empty } from "../../libs/function/test.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-cell"
  },
  __name: "up-cell",
  props: {
    customStyle: {
      type: [Object, String],
      default: () => {
        return new UTSJSONObject({});
      }
    },
    customClass: {
      type: String,
      default: ""
    },
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
    const customCellStyle = computed(() => {
      return addStyle(props.customStyle);
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
    const __returned__ = { props, emits, testEmpty, titleTextStyle, customCellStyle, clickHandler };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"u-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-cell__body":{"":{"display":"flex","flexDirection":"row","boxSizing":"border-box","!paddingTop":10,"!paddingRight":15,"!paddingBottom":10,"!paddingLeft":15,"alignItems":"center"}},"up-cell__body__content":{"":{"display":"flex","flexDirection":"row","alignItems":"center","flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"up-cell__body--large":{"":{"!paddingTop":13,"!paddingBottom":13}},"up-cell__left-icon-wrap":{"":{"display":"flex","flexDirection":"row","alignItems":"center","!marginRight":4}},"up-cell__right-icon-wrap":{"":{"display":"flex","flexDirection":"row","alignItems":"center","!marginLeft":4,"transitionProperty":"transform","transitionDuration":"0.3s"}},"up-cell__right-icon-wrap--up":{"":{"transform":"rotate(-90deg)"}},"up-cell__right-icon-wrap--down":{"":{"transform":"rotate(90deg)"}},"up-cell__title":{"":{"!flexGrow":1,"!flexShrink":1,"!flexBasis":"0%"}},"up-cell__title-text":{"":{"!fontSize":15,"!lineHeight":"22px","!color":"#303133"}},"up-cell__title-text--large":{"":{"!fontSize":16}},"up-cell__label":{"":{"!marginTop":5,"!fontSize":12,"!color":"#909193","!lineHeight":"18px"}},"up-cell__label--large":{"":{"!fontSize":14}},"up-cell__value":{"":{"textAlign":"right","marginLeft":"auto","!fontSize":14,"!lineHeight":"24px","!color":"#606266"}},"up-cell__value--large":{"":{"!fontSize":15}},"up-cell--clickable":{"":{"!backgroundColor":"#f3f4f6"}},"up-cell--disabled":{"":{"!color":"#c8c9cc"}},"up-cell--center":{"":{"alignItems":"center"}},"@TRANSITION":{"up-cell__right-icon-wrap":{"property":"transform","duration":"0.3s"}},"flex":{"":{"display":"flex"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderSlot: _renderSlot, createCommentVNode: _createCommentVNode, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  const _component_up_line = resolveEasycom(__resolveDynamicComponent("up-line"), __easycom_0$1);
  return _openBlock(), _createElementBlock("view", {
    class: _normalizeClass(["up-cell", [$props.customClass]]),
    style: _normalizeStyle($setup.customCellStyle),
    "hover-class": !$props.disabled && ($props.clickable || $props.isLink) ? "up-cell--clickable" : "",
    "hover-stay-time": 250,
    onClick: $setup.clickHandler
  }, [
    _createElementVNode(
      "view",
      {
        class: _normalizeClass(["up-cell__body", { "up-cell--center": $props.center, "up-cell__body--large": $props.size == "large" }])
      },
      [
        _createElementVNode("view", { class: "up-cell__body__content" }, [
          _ctx.$slots["icon"] != null || $props.icon != "" ? (_openBlock(), _createElementBlock("view", {
            key: 0,
            class: "up-cell__left-icon-wrap"
          }, [
            _ctx.$slots["icon"] != null ? _renderSlot(_ctx.$slots, "icon", { key: 0 }) : (_openBlock(), _createBlock(_component_up_icon, {
              key: 1,
              name: $props.icon,
              "custom-style": $props.iconStyle,
              size: $props.size == "large" ? "22px" : "18px"
            }, null, 8, ["name", "custom-style", "size"]))
          ])) : _createCommentVNode("v-if", true),
          _createElementVNode("view", { class: "up-cell__title" }, [
            _ctx.$slots["title"] != null && $props.title == "" ? _renderSlot(_ctx.$slots, "title", { key: 0 }) : (_openBlock(), _createElementBlock(
              "text",
              {
                key: 1,
                class: _normalizeClass(["up-cell__title-text", { "up-cell--disabled": $props.disabled, "up-cell__title-text--large": $props.size == "large" }]),
                style: _normalizeStyle($setup.titleTextStyle)
              },
              _toDisplayString($props.title),
              7
              /* TEXT, CLASS, STYLE */
            )),
            _renderSlot(_ctx.$slots, "label", {}, () => [
              $props.label != "" ? (_openBlock(), _createElementBlock(
                "text",
                {
                  key: 0,
                  class: _normalizeClass(["up-cell__label", { "up-cell--disabled": $props.disabled, "up-cell__label--large": $props.size == "large" }])
                },
                _toDisplayString($props.label),
                3
                /* TEXT, CLASS */
              )) : _createCommentVNode("v-if", true)
            ])
          ])
        ]),
        _renderSlot(_ctx.$slots, "value", {}, () => [
          $setup.testEmpty($props.value) == false ? (_openBlock(), _createElementBlock(
            "text",
            {
              key: 0,
              class: _normalizeClass(["up-cell__value", { "up-cell--disabled": $props.disabled, "up-cell__value--large": $props.size == "large" }])
            },
            _toDisplayString($props.value),
            3
            /* TEXT, CLASS */
          )) : _createCommentVNode("v-if", true)
        ]),
        _ctx.$slots["right-icon"] != null || $props.isLink ? (_openBlock(), _createElementBlock(
          "view",
          {
            key: 0,
            class: _normalizeClass(["up-cell__right-icon-wrap", [`up-cell__right-icon-wrap--${$props.arrowDirection}`]])
          },
          [
            _renderSlot(_ctx.$slots, "right-icon", {}, () => [
              $props.rightIcon != "" ? (_openBlock(), _createBlock(_component_up_icon, {
                key: 0,
                name: $props.rightIcon,
                "custom-style": $props.rightIconStyle,
                color: $props.disabled ? "#c8c9cc" : "info",
                size: $props.size == "large" ? "18px" : "16px"
              }, null, 8, ["name", "custom-style", "color", "size"])) : _createCommentVNode("v-if", true)
            ])
          ],
          2
          /* CLASS */
        )) : _createCommentVNode("v-if", true),
        _ctx.$slots["righticon"] != null ? (_openBlock(), _createElementBlock(
          "view",
          {
            key: 1,
            class: _normalizeClass(["up-cell__right-icon-wrap", [`up-cell__right-icon-wrap--${$props.arrowDirection}`]])
          },
          [
            _renderSlot(_ctx.$slots, "righticon")
          ],
          2
          /* CLASS */
        )) : _createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    ),
    $props.border ? (_openBlock(), _createBlock(_component_up_line, { key: 0 })) : _createCommentVNode("v-if", true)
  ], 14, ["hover-class"]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-cell/up-cell.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-cell.js.map
