const { defineComponent, computed, openBlock, createBlock, withCtx, createCommentVNode, createElementVNode, toDisplayString } = globalThis.Vue
import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { a as systemInfo, s as safeAreaInsets } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/systemInfo&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SystemInfoDemoCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const screenWidth = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = systemInfo.value) === null || _a2 === void 0 ? null : _a2.screenWidth) !== null && _b !== void 0 ? _b : 0;
    });
    const screenHeight = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = systemInfo.value) === null || _a2 === void 0 ? null : _a2.screenHeight) !== null && _b !== void 0 ? _b : 0;
    });
    const windowWidth = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = systemInfo.value) === null || _a2 === void 0 ? null : _a2.windowWidth) !== null && _b !== void 0 ? _b : 0;
    });
    const windowHeight = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = systemInfo.value) === null || _a2 === void 0 ? null : _a2.windowHeight) !== null && _b !== void 0 ? _b : 0;
    });
    const statusBarHeight = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = systemInfo.value) === null || _a2 === void 0 ? null : _a2.statusBarHeight) !== null && _b !== void 0 ? _b : 0;
    });
    const pixelRatio = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = systemInfo.value) === null || _a2 === void 0 ? null : _a2.pixelRatio) !== null && _b !== void 0 ? _b : 1;
    });
    const safeAreaTop = computed(() => {
      return safeAreaInsets.value != null ? `${safeAreaInsets.value.top}px` : "N/A";
    });
    const safeAreaBottom = computed(() => {
      return safeAreaInsets.value != null ? `${safeAreaInsets.value.bottom}px` : "N/A";
    });
    const safeAreaLeft = computed(() => {
      return safeAreaInsets.value != null ? `${safeAreaInsets.value.left}px` : "N/A";
    });
    const safeAreaRight = computed(() => {
      return safeAreaInsets.value != null ? `${safeAreaInsets.value.right}px` : "N/A";
    });
    const __returned__ = { screenWidth, screenHeight, windowWidth, windowHeight, statusBarHeight, pixelRatio, safeAreaTop, safeAreaBottom, safeAreaLeft, safeAreaRight, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "border-color-__e2e8f0_": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "justify-between": { "": { "justifyContent": "space-between" } }, "mb-12px": { "": { "marginBottom": 12 } }, "mb-16px": { "": { "marginBottom": 16 } }, "mb-8px": { "": { "marginBottom": 8 } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "text-__1e293b_": { "": { "color": "#1e293b" } }, "text-__334155_": { "": { "color": "#334155" } }, "text-__64748b_": { "": { "color": "#64748b" } }, "text-13px": { "": { "fontSize": 13 } }, "text-14px": { "": { "fontSize": 14 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Card"], { title: "系统与安全区域信息" }, {
    default: withCtx(() => [
      createCommentVNode(" 预览区域：安全区域 Insets "),
      createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        createElementVNode("text", { class: "text-13px font-bold text-__1e293b_ mb-12px" }, "安全区域内边距 (SafeAreaInsets)"),
        createElementVNode("view", { class: "flex-row justify-between mb-8px" }, [
          createElementVNode("text", { class: "text-14px text-__64748b_" }, "Top (顶部距离)"),
          createElementVNode(
            "text",
            { class: "text-14px font-bold text-__334155_" },
            toDisplayString($setup.safeAreaTop),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("view", { class: "flex-row justify-between mb-8px" }, [
          createElementVNode("text", { class: "text-14px text-__64748b_" }, "Bottom (底部距离)"),
          createElementVNode(
            "text",
            { class: "text-14px font-bold text-__334155_" },
            toDisplayString($setup.safeAreaBottom),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("view", { class: "flex-row justify-between mb-8px" }, [
          createElementVNode("text", { class: "text-14px text-__64748b_" }, "Left (左侧距离)"),
          createElementVNode(
            "text",
            { class: "text-14px font-bold text-__334155_" },
            toDisplayString($setup.safeAreaLeft),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("view", { class: "flex-row justify-between" }, [
          createElementVNode("text", { class: "text-14px text-__64748b_" }, "Right (右侧距离)"),
          createElementVNode(
            "text",
            { class: "text-14px font-bold text-__334155_" },
            toDisplayString($setup.safeAreaRight),
            1
            /* TEXT */
          )
        ])
      ]),
      createCommentVNode(" 预览区域：系统窗口信息 "),
      createElementVNode("view", { class: "rounded-12px p-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        createElementVNode("text", { class: "text-13px font-bold text-__1e293b_ mb-12px" }, "设备窗口规格 (WindowInfo)"),
        createElementVNode("view", { class: "flex-row justify-between mb-8px" }, [
          createElementVNode("text", { class: "text-14px text-__64748b_" }, "屏幕宽度"),
          createElementVNode(
            "text",
            { class: "text-14px font-bold text-__334155_" },
            toDisplayString($setup.screenWidth) + " px",
            1
            /* TEXT */
          )
        ]),
        createElementVNode("view", { class: "flex-row justify-between mb-8px" }, [
          createElementVNode("text", { class: "text-14px text-__64748b_" }, "屏幕高度"),
          createElementVNode(
            "text",
            { class: "text-14px font-bold text-__334155_" },
            toDisplayString($setup.screenHeight) + " px",
            1
            /* TEXT */
          )
        ]),
        createElementVNode("view", { class: "flex-row justify-between mb-8px" }, [
          createElementVNode("text", { class: "text-14px text-__64748b_" }, "可用窗口宽度"),
          createElementVNode(
            "text",
            { class: "text-14px font-bold text-__334155_" },
            toDisplayString($setup.windowWidth) + " px",
            1
            /* TEXT */
          )
        ]),
        createElementVNode("view", { class: "flex-row justify-between mb-8px" }, [
          createElementVNode("text", { class: "text-14px text-__64748b_" }, "可用窗口高度"),
          createElementVNode(
            "text",
            { class: "text-14px font-bold text-__334155_" },
            toDisplayString($setup.windowHeight) + " px",
            1
            /* TEXT */
          )
        ]),
        createElementVNode("view", { class: "flex-row justify-between mb-8px" }, [
          createElementVNode("text", { class: "text-14px text-__64748b_" }, "状态栏高度 (statusBarHeight)"),
          createElementVNode(
            "text",
            { class: "text-14px font-bold text-__334155_" },
            toDisplayString($setup.statusBarHeight) + " px",
            1
            /* TEXT */
          )
        ]),
        createElementVNode("view", { class: "flex-row justify-between" }, [
          createElementVNode("text", { class: "text-14px text-__64748b_" }, "设备像素比 (pixelRatio)"),
          createElementVNode(
            "text",
            { class: "text-14px font-bold text-__334155_" },
            toDisplayString($setup.pixelRatio),
            1
            /* TEXT */
          )
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const SystemInfoDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/SystemInfoDemoCard.uvue"]]);
export {
  SystemInfoDemoCard as S
};
//# sourceMappingURL=SystemInfoDemoCard.js.map
