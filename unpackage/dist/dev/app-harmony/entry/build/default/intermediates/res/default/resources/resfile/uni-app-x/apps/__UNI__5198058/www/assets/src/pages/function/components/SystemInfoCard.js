import { C as Card } from "../../basic/components/Card.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { onMounted, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
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
const _style_0 = {"wtu-2dnwdx-0":{"":{"flexDirection":"row"}},"wtu-y6hc1g-1":{"":{"justifyContent":"space-between"}},"wtu-2prjq9-2":{"":{"color":"#718096"}},"wtu-10grseq-3":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-14btyn8-4":{"":{"color":"#2d3748"}},"wtu-1tlvelu-5":{"":{"width":"100%"}},"wtu-17j8w31-6":{"":{"backgroundColor":"#3b82f6"}},"wtu-o8ie9c-7":{"":{"display":"flex"}},"wtu-1ie67qt-8":{"":{"alignItems":"center"}},"wtu-1d5n1t1-9":{"":{"justifyContent":"center"}},"wtu-tl526o-a":{"":{"color":"#ffffff"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "设备系统信息" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("view", { class: "wtu-2dnwdx-0 wtu-y6hc1g-1 mb-10px" }, [
          _createElementVNode("text", { class: "text-14px wtu-2prjq9-2" }, "手机品牌"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-10grseq-3 wtu-14btyn8-4" },
            _toDisplayString($setup.sysBrand !== "" ? $setup.sysBrand : "暂无数据"),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-2dnwdx-0 wtu-y6hc1g-1 mb-10px" }, [
          _createElementVNode("text", { class: "text-14px wtu-2prjq9-2" }, "手机型号"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-10grseq-3 wtu-14btyn8-4" },
            _toDisplayString($setup.sysModel !== "" ? $setup.sysModel : "暂无数据"),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-2dnwdx-0 wtu-y6hc1g-1 mb-10px" }, [
          _createElementVNode("text", { class: "text-14px wtu-2prjq9-2" }, "操作系统"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-10grseq-3 wtu-14btyn8-4" },
            _toDisplayString($setup.sysSystem !== "" ? $setup.sysSystem : "暂无数据"),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-2dnwdx-0 wtu-y6hc1g-1" }, [
          _createElementVNode("text", { class: "text-14px wtu-2prjq9-2" }, "运行平台"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-10grseq-3 wtu-14btyn8-4" },
            _toDisplayString($setup.sysPlatform !== "" ? $setup.sysPlatform : "暂无数据"),
            1
            /* TEXT */
          )
        ])
      ]),
      _createElementVNode("view", {
        class: "wtu-1tlvelu-5 h-44px rounded-8px wtu-17j8w31-6 wtu-o8ie9c-7 wtu-2dnwdx-0 wtu-1ie67qt-8 wtu-1d5n1t1-9",
        onClick: $setup.fetchSystemInfo
      }, [
        _createElementVNode("text", { class: "wtu-tl526o-a text-14px wtu-10grseq-3" }, "获取系统信息")
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
