import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { a as systemInfo, s as safeAreaInsets } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/systemInfo&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
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
const _style_0 = { "wtu-ok6xoz-0": { "": { "--tw-font-weight": "var(--font-weight-bold, 700)", "fontWeight": 700 } }, "wtu-sgmw91-1": { "": { "color": "#1e293b" } }, "wtu-lbcsyi-2": { "": { "flexDirection": "row" } }, "wtu-1htvnc1-3": { "": { "justifyContent": "space-between" } }, "wtu-1thuw5y-4": { "": { "color": "#64748b" } }, "wtu-1sdp0je-5": { "": { "color": "#334155" } } };
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "系统与安全区域信息" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("text", { class: "text-13px wtu-ok6xoz-0 wtu-sgmw91-1 mb-12px" }, "安全区域内边距 (SafeAreaInsets)"),
        _createElementVNode("view", { class: "wtu-lbcsyi-2 wtu-1htvnc1-3 mb-8px" }, [
          _createElementVNode("text", { class: "text-14px wtu-1thuw5y-4" }, "Top (顶部距离)"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-ok6xoz-0 wtu-1sdp0je-5" },
            _toDisplayString($setup.safeAreaTop),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-lbcsyi-2 wtu-1htvnc1-3 mb-8px" }, [
          _createElementVNode("text", { class: "text-14px wtu-1thuw5y-4" }, "Bottom (底部距离)"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-ok6xoz-0 wtu-1sdp0je-5" },
            _toDisplayString($setup.safeAreaBottom),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-lbcsyi-2 wtu-1htvnc1-3 mb-8px" }, [
          _createElementVNode("text", { class: "text-14px wtu-1thuw5y-4" }, "Left (左侧距离)"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-ok6xoz-0 wtu-1sdp0je-5" },
            _toDisplayString($setup.safeAreaLeft),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-lbcsyi-2 wtu-1htvnc1-3" }, [
          _createElementVNode("text", { class: "text-14px wtu-1thuw5y-4" }, "Right (右侧距离)"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-ok6xoz-0 wtu-1sdp0je-5" },
            _toDisplayString($setup.safeAreaRight),
            1
            /* TEXT */
          )
        ])
      ]),
      _createElementVNode("view", { class: "rounded-12px p-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("text", { class: "text-13px wtu-ok6xoz-0 wtu-sgmw91-1 mb-12px" }, "设备窗口规格 (WindowInfo)"),
        _createElementVNode("view", { class: "wtu-lbcsyi-2 wtu-1htvnc1-3 mb-8px" }, [
          _createElementVNode("text", { class: "text-14px wtu-1thuw5y-4" }, "屏幕宽度"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-ok6xoz-0 wtu-1sdp0je-5" },
            _toDisplayString($setup.screenWidth) + " px",
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-lbcsyi-2 wtu-1htvnc1-3 mb-8px" }, [
          _createElementVNode("text", { class: "text-14px wtu-1thuw5y-4" }, "屏幕高度"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-ok6xoz-0 wtu-1sdp0je-5" },
            _toDisplayString($setup.screenHeight) + " px",
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-lbcsyi-2 wtu-1htvnc1-3 mb-8px" }, [
          _createElementVNode("text", { class: "text-14px wtu-1thuw5y-4" }, "可用窗口宽度"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-ok6xoz-0 wtu-1sdp0je-5" },
            _toDisplayString($setup.windowWidth) + " px",
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-lbcsyi-2 wtu-1htvnc1-3 mb-8px" }, [
          _createElementVNode("text", { class: "text-14px wtu-1thuw5y-4" }, "可用窗口高度"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-ok6xoz-0 wtu-1sdp0je-5" },
            _toDisplayString($setup.windowHeight) + " px",
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-lbcsyi-2 wtu-1htvnc1-3 mb-8px" }, [
          _createElementVNode("text", { class: "text-14px wtu-1thuw5y-4" }, "状态栏高度 (statusBarHeight)"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-ok6xoz-0 wtu-1sdp0je-5" },
            _toDisplayString($setup.statusBarHeight) + " px",
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-lbcsyi-2 wtu-1htvnc1-3" }, [
          _createElementVNode("text", { class: "text-14px wtu-1thuw5y-4" }, "设备像素比 (pixelRatio)"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-ok6xoz-0 wtu-1sdp0je-5" },
            _toDisplayString($setup.pixelRatio),
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
