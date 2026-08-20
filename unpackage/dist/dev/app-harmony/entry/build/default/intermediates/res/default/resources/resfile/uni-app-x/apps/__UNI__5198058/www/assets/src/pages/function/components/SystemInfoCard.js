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
const _style_0 = {"wtu-oay3eq-0":{"":{"borderTopLeftRadius":12,"borderTopRightRadius":12,"borderBottomRightRadius":12,"borderBottomLeftRadius":12}},"wtu-xwpmb1-1":{"":{"paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16}},"wtu-1f04jd2-2":{"":{"marginBottom":16}},"wtu-yvwy5v-3":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderRightStyle":"var(--tw-border-style)","borderBottomStyle":"var(--tw-border-style)","borderLeftStyle":"var(--tw-border-style)","borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1}},"wtu-ydbv97-4":{"":{"--tw-border-style":"solid","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}},"wtu-luxr69-5":{"":{"borderTopColor":"#e2e8f0","borderRightColor":"#e2e8f0","borderBottomColor":"#e2e8f0","borderLeftColor":"#e2e8f0"}},"wtu-2dnwdx-6":{"":{"flexDirection":"row"}},"wtu-y6hc1g-7":{"":{"justifyContent":"space-between"}},"wtu-fxzeik-8":{"":{"marginBottom":10}},"wtu-1hz062s-9":{"":{"fontSize":14}},"wtu-2prjq9-a":{"":{"color":"#718096"}},"wtu-10grseq-b":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-14btyn8-c":{"":{"color":"#2d3748"}},"wtu-1tlvelu-d":{"":{"width":"100%"}},"wtu-xe6yl0-e":{"":{"height":44}},"wtu-79ydq7-f":{"":{"borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"wtu-17j8w31-g":{"":{"backgroundColor":"#3b82f6"}},"wtu-o8ie9c-h":{"":{"display":"flex"}},"wtu-1ie67qt-i":{"":{"alignItems":"center"}},"wtu-1d5n1t1-j":{"":{"justifyContent":"center"}},"wtu-tl526o-k":{"":{"color":"#ffffff"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "设备系统信息" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-oay3eq-0 wtu-xwpmb1-1 wtu-1f04jd2-2 wtu-yvwy5v-3 wtu-ydbv97-4 wtu-luxr69-5" }, [
        _createElementVNode("view", { class: "wtu-2dnwdx-6 wtu-y6hc1g-7 wtu-fxzeik-8" }, [
          _createElementVNode("text", { class: "wtu-1hz062s-9 wtu-2prjq9-a" }, "手机品牌"),
          _createElementVNode(
            "text",
            { class: "wtu-1hz062s-9 wtu-10grseq-b wtu-14btyn8-c" },
            _toDisplayString($setup.sysBrand !== "" ? $setup.sysBrand : "暂无数据"),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-2dnwdx-6 wtu-y6hc1g-7 wtu-fxzeik-8" }, [
          _createElementVNode("text", { class: "wtu-1hz062s-9 wtu-2prjq9-a" }, "手机型号"),
          _createElementVNode(
            "text",
            { class: "wtu-1hz062s-9 wtu-10grseq-b wtu-14btyn8-c" },
            _toDisplayString($setup.sysModel !== "" ? $setup.sysModel : "暂无数据"),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-2dnwdx-6 wtu-y6hc1g-7 wtu-fxzeik-8" }, [
          _createElementVNode("text", { class: "wtu-1hz062s-9 wtu-2prjq9-a" }, "操作系统"),
          _createElementVNode(
            "text",
            { class: "wtu-1hz062s-9 wtu-10grseq-b wtu-14btyn8-c" },
            _toDisplayString($setup.sysSystem !== "" ? $setup.sysSystem : "暂无数据"),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-2dnwdx-6 wtu-y6hc1g-7" }, [
          _createElementVNode("text", { class: "wtu-1hz062s-9 wtu-2prjq9-a" }, "运行平台"),
          _createElementVNode(
            "text",
            { class: "wtu-1hz062s-9 wtu-10grseq-b wtu-14btyn8-c" },
            _toDisplayString($setup.sysPlatform !== "" ? $setup.sysPlatform : "暂无数据"),
            1
            /* TEXT */
          )
        ])
      ]),
      _createElementVNode("view", {
        class: "wtu-1tlvelu-d wtu-xe6yl0-e wtu-79ydq7-f wtu-17j8w31-g wtu-o8ie9c-h wtu-2dnwdx-6 wtu-1ie67qt-i wtu-1d5n1t1-j",
        onClick: $setup.fetchSystemInfo
      }, [
        _createElementVNode("text", { class: "wtu-tl526o-k wtu-1hz062s-9 wtu-10grseq-b" }, "获取系统信息")
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
