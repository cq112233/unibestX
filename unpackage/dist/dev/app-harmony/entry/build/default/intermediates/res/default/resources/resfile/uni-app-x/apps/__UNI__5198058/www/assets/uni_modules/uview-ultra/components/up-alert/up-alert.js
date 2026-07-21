import { _ as __easycom_0 } from "../up-icon/up-icon.js";
const { defineComponent, ref, computed, resolveDynamicComponent, openBlock, createBlock, withCtx, createElementVNode, normalizeClass, withModifiers, normalizeStyle, createElementBlock, createVNode, createCommentVNode, toDisplayString } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_2 } from "../up-transition/up-transition.js";
import "../../libs/composable/useMp.js";
import { a as addUnit, b as addStyle } from "../../libs/function/index.js";
import { d as defProps } from "./alert.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    //...mpSharedMpOptions,
    name: "up-alert"
  },
  __name: "up-alert",
  props: {
    // 主题，success/warning/info/error
    type: {
      type: String,
      default: defProps.getString("alert.type")
    },
    // 辅助性文字
    description: {
      type: String,
      default: defProps.getString("alert.description")
    },
    // 是否可关闭
    closable: {
      type: Boolean,
      default: defProps.getBoolean("alert.closable")
    },
    // 是否显示图标
    showIcon: {
      type: Boolean,
      default: defProps.getBoolean("alert.showIcon")
    },
    // 浅或深色调，light-浅色，dark-深色
    effect: {
      type: String,
      default: defProps.getString("alert.effect")
    },
    // 文字是否居中
    center: {
      type: Boolean,
      default: defProps.getBoolean("alert.center")
    },
    // 字体大小
    fontSize: {
      type: [String, Number],
      default: defProps.getNumber("alert.fontSize")
    },
    // 自定义样式
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    // 标题文字
    title: {
      type: String,
      default: defProps.getString("alert.title", "")
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const show = ref(true);
    const style1 = computed(() => {
      return new UTSJSONObject({
        fontSize: addUnit(props.fontSize),
        textAlign: props.center ? "center" : "left"
      });
    });
    const iconColor = computed(() => {
      return props.effect == "light" ? props.type : "#ffffff";
    });
    const iconName = computed(() => {
      switch (props.type) {
        case "success":
          return "checkmark-circle-fill";
        case "error":
          return "close-circle-fill";
        case "warning":
          return "error-circle-fill";
        case "info":
          return "info-circle-fill";
        case "primary":
          return "more-circle-fill";
        default:
          return "error-circle-fill";
      }
    });
    const addUnitFunc = (val = null) => {
      return addUnit(val);
    };
    const addStyleFunc = (val = null) => {
      return addStyle(val);
    };
    const clickHandler = () => {
      emit("click");
    };
    const closeHandler = () => {
      show.value = false;
    };
    const __returned__ = { props, emit, show, style1, iconColor, iconName, addUnitFunc, addStyleFunc, clickHandler, closeHandler };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-alert": { "": { "position": "relative", "backgroundColor": "var(--theme-color, #0957de)", "paddingTop": 8, "paddingRight": 10, "paddingBottom": 8, "paddingLeft": 10, "display": "flex", "flexDirection": "row", "alignItems": "center", "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomLeftRadius": 4, "borderBottomRightRadius": 4 } }, "up-alert--primary--dark": { "": { "backgroundColor": "var(--theme-color, #0957de)" } }, "up-alert--primary--light": { "": { "backgroundColor": "#ecf5ff" } }, "up-alert--error--dark": { "": { "backgroundColor": "#f56c6c" } }, "up-alert--error--light": { "": { "backgroundColor": "#FEF0F0" } }, "up-alert--success--dark": { "": { "backgroundColor": "#5ac725" } }, "up-alert--success--light": { "": { "backgroundColor": "#f5fff0" } }, "up-alert--warning--dark": { "": { "backgroundColor": "#f9ae3d" } }, "up-alert--warning--light": { "": { "backgroundColor": "#FDF6EC" } }, "up-alert--info--dark": { "": { "backgroundColor": "#909399" } }, "up-alert--info--light": { "": { "backgroundColor": "#f4f4f5" } }, "up-alert__icon": { "": { "marginRight": 5 } }, "up-alert__content": { "": { "display": "flex", "flexDirection": "column", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-alert__content__title": { "": { "color": "#ffffff", "fontSize": 14, "fontWeight": "bold", "marginBottom": 2 } }, "up-alert__content__desc": { "": { "color": "#ffffff", "fontSize": 14, "flexWrap": "wrap" } }, "up-alert__title--dark": { "": { "color": "#FFFFFF" } }, "up-alert__desc--dark": { "": { "color": "#FFFFFF" } }, "up-alert__text--primary--light": { "": { "color": "var(--theme-color, #0957de)" } }, "up-alert__text--success--light": { "": { "color": "#5ac725" } }, "up-alert__text--warning--light": { "": { "color": "#f9ae3d" } }, "up-alert__text--error--light": { "": { "color": "#f56c6c" } }, "up-alert__text--info--light": { "": { "color": "#909399" } }, "up-alert__close": { "": { "position": "absolute", "top": 11, "right": 10 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  const _component_up_transition = resolveEasycom(resolveDynamicComponent("up-transition"), __easycom_2);
  return openBlock(), createBlock(_component_up_transition, {
    mode: "fade",
    show: $setup.show
  }, {
    default: withCtx(() => [
      createElementVNode(
        "view",
        {
          class: normalizeClass(["up-alert", [`up-alert--${$props.type}--${$props.effect}`]]),
          onClick: withModifiers($setup.clickHandler, ["stop"]),
          style: normalizeStyle([_ctx.$upAddStyle($props.customStyle)])
        },
        [
          $props.showIcon ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: "up-alert__icon"
          }, [
            createVNode(_component_up_icon, {
              name: $setup.iconName,
              size: "18",
              color: $setup.iconColor
            }, null, 8, ["name", "color"])
          ])) : createCommentVNode("v-if", true),
          createElementVNode(
            "view",
            {
              class: "up-alert__content",
              style: normalizeStyle([{
                paddingRight: $props.closable ? "20px" : 0
              }])
            },
            [
              $props.title ? (openBlock(), createElementBlock(
                "text",
                {
                  key: 0,
                  class: normalizeClass(["up-alert__content__title", [$props.effect === "dark" ? "up-alert__text--dark" : `up-alert__text--${$props.type}--light`]]),
                  style: normalizeStyle([$setup.style1])
                },
                toDisplayString($props.title),
                7
                /* TEXT, CLASS, STYLE */
              )) : createCommentVNode("v-if", true),
              $props.description ? (openBlock(), createElementBlock(
                "text",
                {
                  key: 1,
                  class: normalizeClass(["up-alert__content__desc", [$props.effect === "dark" ? "up-alert__text--dark" : `up-alert__text--${$props.type}--light`]]),
                  style: normalizeStyle([$setup.style1])
                },
                toDisplayString($props.description),
                7
                /* TEXT, CLASS, STYLE */
              )) : createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          ),
          $props.closable ? (openBlock(), createElementBlock("view", {
            key: 1,
            class: "up-alert__close",
            onClick: withModifiers($setup.closeHandler, ["stop"])
          }, [
            createVNode(_component_up_icon, {
              name: "close",
              color: $setup.iconColor,
              size: "15"
            }, null, 8, ["color"])
          ])) : createCommentVNode("v-if", true)
        ],
        6
        /* CLASS, STYLE */
      )
    ]),
    _: 1
    /* STABLE */
  }, 8, ["show"]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-alert/up-alert.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-alert.js.map
