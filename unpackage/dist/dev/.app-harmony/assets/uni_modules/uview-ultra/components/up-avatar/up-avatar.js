import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_0$1 } from "../up-text/up-text.js";
import { r as random, b as addStyle, a as addUnit } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref, computed, watch, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-avatar"
  },
  __name: "up-avatar",
  props: {
    src: {
      type: String,
      default: ""
    },
    shape: {
      type: String,
      default: "circle"
    },
    size: {
      type: [String, Number],
      default: 40
    },
    mode: {
      type: String,
      default: "scaleToFill"
    },
    text: {
      type: String,
      default: ""
    },
    bgColor: {
      type: String,
      default: "#eee"
    },
    color: {
      type: String,
      default: "#fff"
    },
    fontSize: {
      type: [String, Number],
      default: 18
    },
    icon: {
      type: String,
      default: ""
    },
    mpAvatar: {
      type: Boolean,
      default: false
    },
    randomBgColor: {
      type: Boolean,
      default: false
    },
    defaultUrl: {
      type: String,
      default: ""
    },
    colorIndex: {
      type: [String, Number],
      default: ""
    },
    name: {
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
    const colors = [
      "#ffb34b",
      "#f2bba9",
      "#f7a196",
      "#f18080",
      "#88a867",
      "#bfbf39",
      "#89c152",
      "#94d554",
      "#f19ec2",
      "#afaae4",
      "#e1b0df",
      "#c38cc1",
      "#72dcdc",
      "#9acdcb",
      "#77b1cc",
      "#448aca",
      "#86cefa",
      "#98d1ee",
      "#73d1f1",
      "#80a7dc"
    ];
    const avatarUrl = ref("");
    const getBackColor = computed(() => {
      let result = "#eeeeee";
      if (props.text !== "" || props.icon !== "") {
        const colorIndexNo = parseInt(props.colorIndex.toString());
        if (props.randomBgColor) {
          if (props.colorIndex.toString() !== "") {
            result = colors[colorIndexNo];
          } else {
            result = colors[random(0, 19)];
          }
        } else {
          result = props.bgColor;
        }
      } else {
        result = "transparent";
      }
      return result;
    });
    const errorHandler = () => {
      avatarUrl.value = props.defaultUrl;
    };
    const clickHandler = () => {
      emit("click", props.name);
    };
    watch(() => {
      return props.src;
    }, (newValue) => {
      avatarUrl.value = newValue;
    });
    onMounted(() => {
      avatarUrl.value = props.src;
    });
    const __returned__ = { props, emit, colors, avatarUrl, getBackColor, errorHandler, clickHandler, get addStyle() {
      return addStyle;
    }, get addUnit() {
      return addUnit;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-avatar": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "position": "relative" } }, "up-avatar--circle": { "": { "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100 } }, "up-avatar--square": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "up-avatar__image": { "": { "width": "100%", "height": "100%" } }, "up-avatar__image--circle": { "": { "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100 } }, "up-avatar__image--square": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderSlot: _renderSlot, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock, normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  const _component_up_text = resolveEasycom(__resolveDynamicComponent("up-text"), __easycom_0$1);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-avatar", [`up-avatar--${$props.shape}`]]),
      style: _normalizeStyle([{
        backgroundColor: $setup.getBackColor,
        width: $setup.addUnit($props.size),
        height: $setup.addUnit($props.size)
      }, $setup.addStyle($props.customStyle)]),
      onClick: $setup.clickHandler
    },
    [
      _renderSlot(_ctx.$slots, "default", {}, () => [
        $props.icon != "" ? (_openBlock(), _createBlock(_component_up_icon, {
          key: 0,
          name: $props.icon,
          size: $props.fontSize,
          color: $props.color
        }, null, 8, ["name", "size", "color"])) : $props.text != "" ? (_openBlock(), _createBlock(_component_up_text, {
          key: 1,
          text: $props.text,
          size: $props.fontSize,
          color: $props.color,
          align: "center",
          style: { justifyContent: "center" }
        }, null, 8, ["text", "size", "color"])) : (_openBlock(), _createElementBlock("image", {
          key: 2,
          class: _normalizeClass(["up-avatar__image", [`up-avatar__image--${$props.shape}`]]),
          src: $setup.avatarUrl != "" ? $setup.avatarUrl : $props.defaultUrl,
          mode: $props.mode,
          onError: $setup.errorHandler,
          style: _normalizeStyle([{
            width: $setup.addUnit($props.size),
            height: $setup.addUnit($props.size)
          }])
        }, null, 46, ["src", "mode"]))
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-avatar/up-avatar.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-avatar.js.map
