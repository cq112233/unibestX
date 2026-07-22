import { _ as __easycom_0 } from "../up-icon/up-icon.js";
const { defineComponent, computed, ref, watch, resolveDynamicComponent, openBlock, createElementBlock, normalizeStyle, Fragment, createVNode, toDisplayString, createCommentVNode, renderSlot } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { d as defProps } from "./backtop.js";
import { a as addUnit, g as getPx, d as deepMerge, b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "up-back-top",
  props: {
    // 返回顶部的形状，circle-圆形，square-方形
    mode: {
      type: String,
      default: defProps.getString("backtop.mode")
    },
    // 自定义图标
    icon: {
      type: String,
      default: defProps.getString("backtop.icon")
    },
    // 提示文字
    text: {
      type: String,
      default: defProps.getString("backtop.text")
    },
    // 返回顶部滚动时间
    duration: {
      type: [String, Number],
      default: defProps.getNumber("backtop.duration")
    },
    // 滚动距离
    scrollTop: {
      type: [String, Number],
      default: defProps.getNumber("backtop.scrollTop")
    },
    // 距离顶部多少距离显示，单位px
    top: {
      type: [String, Number],
      default: defProps.getNumber("backtop.top")
    },
    // 返回顶部按钮到底部的距离，单位px
    bottom: {
      type: [String, Number],
      default: defProps.getNumber("backtop.bottom")
    },
    // 返回顶部按钮到右边的距离，单位px
    right: {
      type: [String, Number],
      default: defProps.getNumber("backtop.right")
    },
    // 层级
    zIndex: {
      type: [String, Number],
      default: defProps.getNumber("backtop.zIndex")
    },
    // 图标的样式，对象形式
    iconStyle: {
      type: Object,
      default: () => {
        var _a;
        return (_a = defProps.getAny("backtop.iconStyle")) !== null && _a !== void 0 ? _a : new UTSJSONObject({});
      }
    },
    // 定义需要用到的外部样式
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
    const prop = __props;
    const emit = __emit;
    const backTopStyle = computed(() => {
      const style = new UTSJSONObject({
        bottom: addUnit(prop.bottom),
        right: addUnit(prop.right),
        width: "40px",
        height: "40px",
        position: "fixed",
        zIndex: parseInt(prop.zIndex.toString())
      });
      return style;
    });
    const show = ref(false);
    watch(() => {
      return prop.scrollTop;
    }, (newVal = null) => {
      show.value = parseInt(getPx(newVal)) > parseInt(getPx(prop.top.toString()));
    }, { immediate: true });
    const contentStyle = computed(() => {
      const style = new UTSJSONObject({});
      let radius = "0px";
      if (prop.mode === "circle") {
        radius = "100px";
      } else {
        radius = "4px";
      }
      style["borderRadius"] = radius;
      return deepMerge(style, addStyle(prop.customStyle));
    });
    function backToTop(e = null) {
      uni.pageScrollTo(new UTSJSONObject({
        scrollTop: 0,
        duration: parseInt(prop.duration.toString()),
        fail: (_err) => {
        }
      }));
      emit("click", e);
    }
    const __returned__ = { prop, emit, backTopStyle, show, contentStyle, backToTop };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-back-top": { "": { "display": "flex", "flexDirection": "column", "alignItems": "center", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "height": "100%", "justifyContent": "center", "backgroundColor": "#E1E1E1" } }, "up-back-top__tips": { "": { "fontSize": 12, "transform": "scale(0.8)" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  return $setup.show ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      style: normalizeStyle([$setup.backTopStyle, $setup.contentStyle]),
      class: "up-back-top",
      onClick: $setup.backToTop
    },
    [
      _ctx.$slots["default"] == null && _ctx.$slots["$default"] == null ? (openBlock(), createElementBlock(
        Fragment,
        { key: 0 },
        [
          createVNode(_component_up_icon, {
            name: $props.icon,
            "custom-style": $props.iconStyle
          }, null, 8, ["name", "custom-style"]),
          $props.text ? (openBlock(), createElementBlock(
            "text",
            {
              key: 0,
              class: "up-back-top__text"
            },
            toDisplayString($props.text),
            1
            /* TEXT */
          )) : createCommentVNode("v-if", true)
        ],
        64
        /* STABLE_FRAGMENT */
      )) : renderSlot(_ctx.$slots, "default", { key: 1 })
    ],
    4
    /* STYLE */
  )) : createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-back-top/up-back-top.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-back-top.js.map
