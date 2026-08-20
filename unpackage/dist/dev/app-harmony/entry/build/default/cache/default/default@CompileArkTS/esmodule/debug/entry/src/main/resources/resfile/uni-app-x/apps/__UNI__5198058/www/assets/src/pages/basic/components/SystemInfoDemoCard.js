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
const _style_0 = { "wtu-nruop9-0": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "wtu-tiruoi-1": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "wtu-scfi6j-2": { "": { "marginBottom": 16 } }, "wtu-1xymh2w-3": { "": { "--tw-border-style": "solid", "borderTopStyle": "var(--tw-border-style)", "borderRightStyle": "var(--tw-border-style)", "borderBottomStyle": "var(--tw-border-style)", "borderLeftStyle": "var(--tw-border-style)", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "wtu-163p5ko-4": { "": { "--tw-border-style": "solid", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "wtu-1wychmu-5": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "wtu-iud1zm-6": { "": { "fontSize": 13 } }, "wtu-ok6xoz-7": { "": { "--tw-font-weight": "var(--font-weight-bold, 700)", "fontWeight": 700 } }, "wtu-sgmw91-8": { "": { "color": "#1e293b" } }, "wtu-1jkapvz-9": { "": { "marginBottom": 12 } }, "wtu-lbcsyi-a": { "": { "flexDirection": "row" } }, "wtu-1htvnc1-b": { "": { "justifyContent": "space-between" } }, "wtu-jynils-c": { "": { "marginBottom": 8 } }, "wtu-1pw3wr1-d": { "": { "fontSize": 14 } }, "wtu-1thuw5y-e": { "": { "color": "#64748b" } }, "wtu-1sdp0je-f": { "": { "color": "#334155" } } };
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "系统与安全区域信息" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-nruop9-0 wtu-tiruoi-1 wtu-scfi6j-2 wtu-1xymh2w-3 wtu-163p5ko-4 wtu-1wychmu-5" }, [
        _createElementVNode("text", { class: "wtu-iud1zm-6 wtu-ok6xoz-7 wtu-sgmw91-8 wtu-1jkapvz-9" }, "安全区域内边距 (SafeAreaInsets)"),
        _createElementVNode("view", { class: "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c" }, [
          _createElementVNode("text", { class: "wtu-1pw3wr1-d wtu-1thuw5y-e" }, "Top (顶部距离)"),
          _createElementVNode(
            "text",
            { class: "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f" },
            _toDisplayString($setup.safeAreaTop),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c" }, [
          _createElementVNode("text", { class: "wtu-1pw3wr1-d wtu-1thuw5y-e" }, "Bottom (底部距离)"),
          _createElementVNode(
            "text",
            { class: "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f" },
            _toDisplayString($setup.safeAreaBottom),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c" }, [
          _createElementVNode("text", { class: "wtu-1pw3wr1-d wtu-1thuw5y-e" }, "Left (左侧距离)"),
          _createElementVNode(
            "text",
            { class: "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f" },
            _toDisplayString($setup.safeAreaLeft),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-lbcsyi-a wtu-1htvnc1-b" }, [
          _createElementVNode("text", { class: "wtu-1pw3wr1-d wtu-1thuw5y-e" }, "Right (右侧距离)"),
          _createElementVNode(
            "text",
            { class: "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f" },
            _toDisplayString($setup.safeAreaRight),
            1
            /* TEXT */
          )
        ])
      ]),
      _createElementVNode("view", { class: "wtu-nruop9-0 wtu-tiruoi-1 wtu-1xymh2w-3 wtu-163p5ko-4 wtu-1wychmu-5" }, [
        _createElementVNode("text", { class: "wtu-iud1zm-6 wtu-ok6xoz-7 wtu-sgmw91-8 wtu-1jkapvz-9" }, "设备窗口规格 (WindowInfo)"),
        _createElementVNode("view", { class: "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c" }, [
          _createElementVNode("text", { class: "wtu-1pw3wr1-d wtu-1thuw5y-e" }, "屏幕宽度"),
          _createElementVNode(
            "text",
            { class: "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f" },
            _toDisplayString($setup.screenWidth) + " px",
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c" }, [
          _createElementVNode("text", { class: "wtu-1pw3wr1-d wtu-1thuw5y-e" }, "屏幕高度"),
          _createElementVNode(
            "text",
            { class: "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f" },
            _toDisplayString($setup.screenHeight) + " px",
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c" }, [
          _createElementVNode("text", { class: "wtu-1pw3wr1-d wtu-1thuw5y-e" }, "可用窗口宽度"),
          _createElementVNode(
            "text",
            { class: "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f" },
            _toDisplayString($setup.windowWidth) + " px",
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c" }, [
          _createElementVNode("text", { class: "wtu-1pw3wr1-d wtu-1thuw5y-e" }, "可用窗口高度"),
          _createElementVNode(
            "text",
            { class: "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f" },
            _toDisplayString($setup.windowHeight) + " px",
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c" }, [
          _createElementVNode("text", { class: "wtu-1pw3wr1-d wtu-1thuw5y-e" }, "状态栏高度 (statusBarHeight)"),
          _createElementVNode(
            "text",
            { class: "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f" },
            _toDisplayString($setup.statusBarHeight) + " px",
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-lbcsyi-a wtu-1htvnc1-b" }, [
          _createElementVNode("text", { class: "wtu-1pw3wr1-d wtu-1thuw5y-e" }, "设备像素比 (pixelRatio)"),
          _createElementVNode(
            "text",
            { class: "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f" },
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
