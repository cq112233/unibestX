import { _ as __easycom_0 } from "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const { defineComponent, computed, resolveDynamicComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, createVNode, normalizeStyle, toDisplayString } = globalThis.Vue
import { r as resolveEasycom } from "../../App.ku.js";
import "./types.js";
import { c as curIdx, t as themeColor } from "./store.js";
import { _ as _export_sfc } from "../../plugin-vue-export-helper.js";
const inactiveColor = "#999999";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TabbarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    isBulge: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const props = __props;
    const tabbarItem = computed(() => {
      return props.item;
    });
    function getIcon() {
      if (curIdx.value == props.index && tabbarItem.value.iconActive.length > 0) {
        return tabbarItem.value.iconActive;
      }
      return tabbarItem.value.icon;
    }
    function getActiveColor() {
      return curIdx.value == props.index ? themeColor.value : inactiveColor;
    }
    function isDotBadge() {
      return tabbarItem.value.badge != null && tabbarItem.value.badge == "dot";
    }
    function isNumberBadge() {
      return tabbarItem.value.badge != null && tabbarItem.value.badge != "dot";
    }
    function getBadgeText() {
      const badge = tabbarItem.value.badge;
      if (badge == null || badge == "dot")
        return "";
      if (typeof badge == "number") {
        const num = badge;
        if (num > 99)
          return "99+";
        return `${num}`;
      }
      return `${badge}`;
    }
    const __returned__ = { props, inactiveColor, tabbarItem, getIcon, getActiveColor, isDotBadge, isNumberBadge, getBadgeText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "tabbar-item-inner": { "": { "alignItems": "center", "justifyContent": "center", "position": "relative" } }, "icon-normal": { "": { "width": 24, "height": 24 } }, "tabbar-text": { "": { "fontSize": 10, "marginTop": 2, "textAlign": "center" } }, "badge-dot": { "": { "position": "absolute", "top": 0, "right": 0, "width": 8, "height": 8, "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8, "backgroundColor": "#f56c6c" } }, "badge-count": { "": { "position": "absolute", "top": 0, "right": -6, "height": 16, "paddingLeft": 4, "paddingRight": 4, "borderTopLeftRadius": 16, "borderTopRightRadius": 16, "borderBottomRightRadius": 16, "borderBottomLeftRadius": 16, "backgroundColor": "#f56c6c", "alignItems": "center", "justifyContent": "center" } }, "badge-count-text": { "": { "fontSize": 10, "color": "#ffffff", "textAlign": "center" } }, "bulge-item": { "": { "position": "relative", "width": "100%", "height": 80, "alignItems": "center" } }, "bulge-btn": { "": { "position": "absolute", "top": 18, "width": 52, "height": 52, "borderTopLeftRadius": 26, "borderTopRightRadius": 26, "borderBottomRightRadius": 26, "borderBottomLeftRadius": 26, "backgroundImage": "linear-gradient(135deg, #0ea5e9, #2563eb)", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "borderTopColor": "rgba(255,255,255,0.5)", "borderRightColor": "rgba(255,255,255,0.5)", "borderBottomColor": "rgba(255,255,255,0.5)", "borderLeftColor": "rgba(255,255,255,0.5)", "alignItems": "center", "justifyContent": "center", "boxShadow": "0px 3px 8px rgba(37, 99, 235, 0.25)" } }, "ai-btn-text": { "": { "color": "#ffffff", "fontSize": 14, "fontWeight": 600, "letterSpacing": 1, "textAlign": "center" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0);
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" 鼓包项：用绝对定位让按鈕居中突出在 tabbar 顶部边缘 "),
      $setup.props.isBulge ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "bulge-item"
      }, [
        createElementVNode("view", { class: "bulge-btn" }, [
          createElementVNode("text", { class: "ai-btn-text" }, "AI")
        ])
      ])) : (openBlock(), createElementBlock(
        Fragment,
        { key: 1 },
        [
          createCommentVNode(" 普通项 "),
          createElementVNode("view", { class: "tabbar-item-inner" }, [
            createCommentVNode(" 图片图标 "),
            $setup.tabbarItem.iconType === "image" ? (openBlock(), createElementBlock("image", {
              key: 0,
              src: $setup.getIcon(),
              mode: "scaleToFill",
              class: "icon-normal"
            }, null, 8, ["src"])) : createCommentVNode("v-if", true),
            createCommentVNode(" uni-icons 字体图标 "),
            $setup.tabbarItem.iconType === "icon" ? (openBlock(), createElementBlock("view", {
              key: 1,
              class: "icon-normal",
              style: { "align-items": "center", "justify-content": "center" }
            }, [
              createVNode(_component_uni_icons, {
                type: $setup.getIcon(),
                size: "24",
                style: normalizeStyle({ color: $setup.getActiveColor() })
              }, null, 8, ["type", "style"])
            ])) : createCommentVNode("v-if", true),
            createCommentVNode(" 文本（包含 i18n 翻译，支持动态语言切换） "),
            createElementVNode(
              "text",
              {
                class: "tabbar-text",
                style: normalizeStyle({ color: $setup.getActiveColor() })
              },
              toDisplayString(_ctx.$t($setup.tabbarItem.text)),
              5
              /* TEXT, STYLE */
            ),
            createCommentVNode(" 角标：小红点 "),
            $setup.isDotBadge() ? (openBlock(), createElementBlock("view", {
              key: 2,
              class: "badge-dot"
            })) : createCommentVNode("v-if", true),
            createCommentVNode(" 角标：数字 "),
            $setup.isNumberBadge() ? (openBlock(), createElementBlock("view", {
              key: 3,
              class: "badge-count"
            }, [
              createElementVNode(
                "text",
                { class: "badge-count-text" },
                toDisplayString($setup.getBadgeText()),
                1
                /* TEXT */
              )
            ])) : createCommentVNode("v-if", true)
          ])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      ))
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
const TabbarItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/tabbar/TabbarItem.uvue"]]);
export {
  TabbarItem as T
};
//# sourceMappingURL=TabbarItem.js.map
