const { defineComponent, ref, onMounted, openBlock, createBlock, withCtx, createElementVNode, toDisplayString } = globalThis.Vue
import { C as Card } from "../../basic/components/Card.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SystemInfoCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const sysBrand = ref("");
    const sysModel = ref("");
    const sysSystem = ref("");
    const sysPlatform = ref("");
    function fetchSystemInfo() {
      var _a2, _b, _c, _d;
      try {
        const info = uni.getSystemInfoSync();
        sysBrand.value = (_a2 = info.brand) !== null && _a2 !== void 0 ? _a2 : "";
        sysModel.value = (_b = info.model) !== null && _b !== void 0 ? _b : "";
        sysSystem.value = (_c = info.system) !== null && _c !== void 0 ? _c : "";
        sysPlatform.value = (_d = info.uniPlatform) !== null && _d !== void 0 ? _d : "";
      } catch (err) {
        uni.__f__("error", "at src/pages/function/components/SystemInfoCard.uvue:45", err);
      }
    }
    onMounted(() => {
      fetchSystemInfo();
    });
    const __returned__ = { sysBrand, sysModel, sysSystem, sysPlatform, fetchSystemInfo, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__3b82f6_": { "": { "backgroundImage": "none", "backgroundColor": "#3b82f6" } }, "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "border-color-__e2e8f0_": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex": { "": { "display": "flex" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "h-44px": { "": { "height": 44 } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "justify-center": { "": { "justifyContent": "center" } }, "mb-10px": { "": { "marginBottom": 10 } }, "mb-16px": { "": { "marginBottom": 16 } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "text-__2d3748_": { "": { "color": "#2d3748" } }, "text-__718096_": { "": { "color": "#718096" } }, "text-__ffffff_": { "": { "color": "#ffffff" } }, "text-14px": { "": { "fontSize": 14 } }, "w-full": { "": { "width": "100%" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Card"], { title: "设备系统信息" }, {
    default: withCtx(() => [
      createElementVNode("view", { class: "bg-__f8fafc_ rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        createElementVNode("view", { class: "flex-row justify-between mb-10px" }, [
          createElementVNode("text", { class: "text-14px text-__718096_" }, "手机品牌"),
          createElementVNode(
            "text",
            { class: "text-14px font-bold text-__2d3748_" },
            toDisplayString($setup.sysBrand !== "" ? $setup.sysBrand : "暂无数据"),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("view", { class: "flex-row justify-between mb-10px" }, [
          createElementVNode("text", { class: "text-14px text-__718096_" }, "手机型号"),
          createElementVNode(
            "text",
            { class: "text-14px font-bold text-__2d3748_" },
            toDisplayString($setup.sysModel !== "" ? $setup.sysModel : "暂无数据"),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("view", { class: "flex-row justify-between mb-10px" }, [
          createElementVNode("text", { class: "text-14px text-__718096_" }, "操作系统"),
          createElementVNode(
            "text",
            { class: "text-14px font-bold text-__2d3748_" },
            toDisplayString($setup.sysSystem !== "" ? $setup.sysSystem : "暂无数据"),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("view", { class: "flex-row justify-between" }, [
          createElementVNode("text", { class: "text-14px text-__718096_" }, "运行平台"),
          createElementVNode(
            "text",
            { class: "text-14px font-bold text-__2d3748_" },
            toDisplayString($setup.sysPlatform !== "" ? $setup.sysPlatform : "暂无数据"),
            1
            /* TEXT */
          )
        ])
      ]),
      createElementVNode("view", {
        class: "w-full h-44px rounded-8px bg-__3b82f6_ flex flex-row items-center justify-center",
        onClick: $setup.fetchSystemInfo
      }, [
        createElementVNode("text", { class: "text-__ffffff_ text-14px font-bold" }, "获取系统信息")
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const SystemInfoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/function/components/SystemInfoCard.uvue"]]);
export {
  SystemInfoCard as S
};
//# sourceMappingURL=SystemInfoCard.js.map
