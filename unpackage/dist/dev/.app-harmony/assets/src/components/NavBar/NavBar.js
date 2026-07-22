const { defineComponent, computed, openBlock, createElementBlock, createCommentVNode, createElementVNode, normalizeClass, normalizeStyle, renderSlot, toDisplayString } = globalThis.Vue
import { s as safeAreaInsets, a as systemInfo } from "../../utils/systemInfo.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NavBar",
  props: {
    title: {
      type: String,
      default: ""
    },
    titleColor: {
      type: String,
      default: "#1e293b"
    },
    bgColor: {
      type: String,
      default: "#ffffff"
    },
    showBack: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const props = __props;
    const statusBarHeight = computed(() => {
      var _a2, _b, _c, _d;
      return (_d = (_b = (_a2 = safeAreaInsets.value) === null || _a2 === void 0 ? null : _a2.top) !== null && _b !== void 0 ? _b : (_c = systemInfo.value) === null || _c === void 0 ? null : _c.statusBarHeight) !== null && _d !== void 0 ? _d : 0;
    });
    function handleBack() {
      uni.navigateBack(new UTSJSONObject({
        success() {
          uni.__f__("log", "at src/components/NavBar/NavBar.uvue:86", "返回成功");
        },
        fail() {
          uni.switchTab({
            url: "/src/pages/index/index"
          });
        }
      }));
    }
    const __returned__ = { props, statusBarHeight, handleBack };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "border": { "": { "borderTopWidth": "var(--un-line-width-default,1px)", "borderRightWidth": "var(--un-line-width-default,1px)", "borderBottomWidth": "var(--un-line-width-default,1px)", "borderLeftWidth": "var(--un-line-width-default,1px)" } }, "fixed": { "": { "position": "fixed" } } };
const _style_1 = { "navbar-container": { "": { "width": "100%", "display": "flex", "flexDirection": "column" } }, "navbar-fixed": { "": { "position": "fixed", "top": 0, "left": 0, "right": 0, "zIndex": 999 } }, "navbar-content": { "": { "height": 44, "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "position": "relative", "width": "100%" } }, "navbar-left": { "": { "position": "absolute", "left": 0, "top": 0, "bottom": 0, "width": 60, "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "flex-start", "zIndex": 10 } }, "back-btn-wrapper": { "": { "paddingTop": 10, "paddingRight": 15, "paddingBottom": 10, "paddingLeft": 15, "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "back-arrow": { "": { "width": 10, "height": 10, "borderLeftWidth": 2, "borderLeftStyle": "solid", "borderLeftColor": "#1e293b", "borderBottomWidth": 2, "borderBottomStyle": "solid", "borderBottomColor": "#1e293b", "transform": "rotate(45deg)" } }, "navbar-title": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "height": "100%", "paddingLeft": 60, "paddingRight": 60 } }, "title-text": { "": { "fontSize": 16, "fontWeight": 700, "textOverflow": "ellipsis", "overflow": "hidden", "whiteSpace": "nowrap" } }, "navbar-right": { "": { "position": "absolute", "right": 0, "top": 0, "bottom": 0, "width": 60, "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "flex-end", "zIndex": 10, "paddingRight": 15 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", null, [
    createCommentVNode(" 导航栏外层容器 "),
    createElementVNode(
      "view",
      {
        class: normalizeClass($props.fixed ? "navbar-container navbar-fixed" : "navbar-container"),
        style: normalizeStyle({ backgroundColor: $props.bgColor, borderBottom: $props.border ? "1px solid #e2e8f0" : "none" })
      },
      [
        createCommentVNode(" 安全区域：状态栏占位高度 "),
        createElementVNode(
          "view",
          {
            style: normalizeStyle({ height: `${$setup.statusBarHeight}px` })
          },
          null,
          4
          /* STYLE */
        ),
        createCommentVNode(" 导航栏内容区 "),
        createElementVNode("view", { class: "navbar-content" }, [
          createCommentVNode(" 左侧返回按钮区域 "),
          createElementVNode("view", {
            class: "navbar-left",
            onClick: $setup.handleBack
          }, [
            renderSlot(_ctx.$slots, "left", {}, () => [
              $props.showBack ? (openBlock(), createElementBlock("view", {
                key: 0,
                class: "back-btn-wrapper"
              }, [
                createElementVNode(
                  "view",
                  {
                    class: "back-arrow",
                    style: normalizeStyle({ borderColor: $props.titleColor })
                  },
                  null,
                  4
                  /* STYLE */
                )
              ])) : createCommentVNode("v-if", true)
            ])
          ]),
          createCommentVNode(" 中间标题区域 "),
          createElementVNode("view", { class: "navbar-title" }, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createElementVNode(
                "text",
                {
                  class: "title-text",
                  style: normalizeStyle({ color: $props.titleColor })
                },
                toDisplayString($props.title),
                5
                /* TEXT, STYLE */
              )
            ])
          ]),
          createCommentVNode(" 右侧操作栏区域 "),
          createElementVNode("view", { class: "navbar-right" }, [
            renderSlot(_ctx.$slots, "right")
          ])
        ])
      ],
      6
      /* CLASS, STYLE */
    ),
    createCommentVNode(" 占位垫高块：当固定在顶部时防内容遮挡 "),
    $props.fixed && $props.placeholder ? (openBlock(), createElementBlock(
      "view",
      {
        key: 0,
        style: normalizeStyle({ height: `${$setup.statusBarHeight + 44}px` })
      },
      null,
      4
      /* STYLE */
    )) : createCommentVNode("v-if", true)
  ]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/components/NavBar/NavBar.uvue"]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=NavBar.js.map
