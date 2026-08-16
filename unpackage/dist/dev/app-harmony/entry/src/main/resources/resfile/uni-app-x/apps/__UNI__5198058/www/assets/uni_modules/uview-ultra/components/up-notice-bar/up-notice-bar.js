import { _ as __easycom_0 } from "../up-column-notice/up-column-notice.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_1$1 } from "../up-row-notice/up-row-notice.js";
import { b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-notice-bar"
  },
  __name: "up-notice-bar",
  props: {
    text: {
      type: [Array, String],
      default: () => {
        return [];
      }
    },
    direction: {
      type: String,
      default: "row"
    },
    step: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: "volume"
    },
    mode: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#f9ae3d"
    },
    bgColor: {
      type: String,
      default: "#fdf6ec"
    },
    speed: {
      type: [String, Number],
      default: 80
    },
    fontSize: {
      type: [String, Number],
      default: 14
    },
    duration: {
      type: [String, Number],
      default: 2e3
    },
    disableTouch: {
      type: Boolean,
      default: true
    },
    url: {
      type: String,
      default: ""
    },
    linkType: {
      type: String,
      default: "navigateTo"
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["click", "close"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const show = ref(true);
    function click(index) {
      emit("click", index);
      if (props.url != "" && props.linkType != "") {
        if (props.linkType == "navigateTo") {
          uni.navigateTo({ url: props.url });
        } else if (props.linkType == "redirectTo") {
          uni.redirectTo({ url: props.url });
        } else if (props.linkType == "switchTab") {
          uni.switchTab({ url: props.url });
        } else if (props.linkType == "reLaunch") {
          uni.reLaunch({ url: props.url });
        }
      }
    }
    function close() {
      show.value = false;
      emit("close");
    }
    const __returned__ = { props, emit, show, click, close, get addStyle() {
      return addStyle;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-notice-bar": { "": { "paddingTop": 9, "paddingRight": 12, "paddingBottom": 9, "paddingLeft": 12 } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, normalizeStyle: _normalizeStyle, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_column_notice = resolveEasycom(__resolveDynamicComponent("up-column-notice"), __easycom_0);
  const _component_up_row_notice = resolveEasycom(__resolveDynamicComponent("up-row-notice"), __easycom_1$1);
  return $setup.show ? (_openBlock(), _createElementBlock(
    "view",
    {
      key: 0,
      class: "up-notice-bar",
      style: _normalizeStyle([{
        backgroundColor: $props.bgColor
      }, $setup.addStyle($props.customStyle)])
    },
    [
      $props.direction === "column" || $props.direction === "row" && $props.step ? (_openBlock(), _createBlock(_component_up_column_notice, {
        key: 0,
        color: $props.color,
        bgColor: $props.bgColor,
        text: $props.text,
        mode: $props.mode,
        step: $props.step,
        icon: $props.icon,
        "disable-touch": $props.disableTouch,
        fontSize: $props.fontSize,
        duration: $props.duration,
        onClose: $setup.close,
        onClick: $setup.click
      }, null, 8, ["color", "bgColor", "text", "mode", "step", "icon", "disable-touch", "fontSize", "duration"])) : (_openBlock(), _createBlock(_component_up_row_notice, {
        key: 1,
        color: $props.color,
        bgColor: $props.bgColor,
        text: $props.text,
        mode: $props.mode,
        fontSize: $props.fontSize,
        speed: $props.speed,
        url: $props.url,
        linkType: $props.linkType,
        icon: $props.icon,
        onClose: $setup.close,
        onClick: $setup.click
      }, null, 8, ["color", "bgColor", "text", "mode", "fontSize", "speed", "url", "linkType", "icon"]))
    ],
    4
    /* STYLE */
  )) : _createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-notice-bar/up-notice-bar.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-notice-bar.js.map
