import { C as Card } from "../../basic/components/Card.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "HapticsCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const copyText = ref("Hello unibestX!");
    function triggerVibration() {
      uni.vibrateShort({
        type: "light",
        success: () => {
          uni.showToast({ title: "已触发短震动", icon: "none" });
        },
        fail: () => {
          uni.showToast({ title: "震动触发失败", icon: "none" });
        }
      });
    }
    function handleCopy() {
      if (copyText.value === "")
        return null;
      uni.setClipboardData({
        data: copyText.value,
        success: () => {
          uni.showToast({
            title: "复制成功",
            icon: "success"
          });
        }
      });
    }
    const __returned__ = { copyText, triggerVibration, handleCopy, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"wtu-1pqljrd-0":{"":{"borderTopLeftRadius":12,"borderTopRightRadius":12,"borderBottomRightRadius":12,"borderBottomLeftRadius":12}},"wtu-1nsrzwm-1":{"":{"paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16}},"wtu-z7ly8f-2":{"":{"marginBottom":16}},"wtu-cu4oh8-3":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderRightStyle":"var(--tw-border-style)","borderBottomStyle":"var(--tw-border-style)","borderLeftStyle":"var(--tw-border-style)","borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1}},"wtu-1ae0mn0-4":{"":{"--tw-border-style":"solid","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}},"wtu-1dpq0lu-5":{"":{"borderTopColor":"#e2e8f0","borderRightColor":"#e2e8f0","borderBottomColor":"#e2e8f0","borderLeftColor":"#e2e8f0"}},"wtu-1e3pw8z-6":{"":{"fontSize":12}},"wtu-xlfis6-7":{"":{"color":"#94a3b8"}},"wtu-1174kp0-8":{"":{"marginBottom":8}},"wtu-14leste-9":{"":{"height":38}},"wtu-44c3cb-a":{"":{"backgroundColor":"#ffffff"}},"wtu-rkq1ns-b":{"":{"borderTopLeftRadius":6,"borderTopRightRadius":6,"borderBottomRightRadius":6,"borderBottomLeftRadius":6}},"wtu-3rena2-c":{"":{"paddingLeft":12,"paddingRight":12}},"wtu-17e4xae-d":{"":{"borderTopColor":"#cbd5e1","borderRightColor":"#cbd5e1","borderBottomColor":"#cbd5e1","borderLeftColor":"#cbd5e1"}},"wtu-wgd06p-e":{"":{"fontSize":14}},"wtu-lwq7o6-f":{"":{"color":"#334155"}},"wtu-7zqqiz-g":{"":{"marginBottom":12}},"wtu-1phhh09-h":{"":{"width":"100%"}},"wtu-18u1qwy-i":{"":{"borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"wtu-1km86q6-j":{"":{"backgroundColor":"#10b981"}},"wtu-snabsj-k":{"":{"display":"flex"}},"wtu-1e9fgzq-l":{"":{"flexDirection":"row"}},"wtu-15f70xm-m":{"":{"alignItems":"center"}},"wtu-1kekspa-n":{"":{"justifyContent":"center"}},"wtu-199nxoz-o":{"":{"color":"#ffffff"}},"wtu-17exkt3-p":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-1i30ucf-q":{"":{"height":44}},"wtu-nwcnqo-r":{"":{"backgroundColor":"#f59e0b"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, vModelText: _vModelText, withDirectives: _withDirectives, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "触感与工具" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-1pqljrd-0 wtu-1nsrzwm-1 wtu-z7ly8f-2 wtu-cu4oh8-3 wtu-1ae0mn0-4 wtu-1dpq0lu-5" }, [
        _createElementVNode("text", { class: "wtu-1e3pw8z-6 wtu-xlfis6-7 wtu-1174kp0-8" }, "剪贴板测试文本"),
        _withDirectives(_createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.copyText = $event),
            placeholder: "请输入要复制的文本",
            class: "wtu-14leste-9 wtu-44c3cb-a wtu-rkq1ns-b wtu-3rena2-c wtu-cu4oh8-3 wtu-1ae0mn0-4 wtu-17e4xae-d wtu-wgd06p-e wtu-lwq7o6-f wtu-7zqqiz-g"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [_vModelText, $setup.copyText]
        ]),
        _createElementVNode("view", {
          class: "wtu-1phhh09-h wtu-14leste-9 wtu-18u1qwy-i wtu-1km86q6-j wtu-snabsj-k wtu-1e9fgzq-l wtu-15f70xm-m wtu-1kekspa-n",
          onClick: $setup.handleCopy
        }, [
          _createElementVNode("text", { class: "wtu-199nxoz-o wtu-wgd06p-e wtu-17exkt3-p" }, "复制测试文本")
        ])
      ]),
      _createElementVNode("view", {
        class: "wtu-1phhh09-h wtu-1i30ucf-q wtu-18u1qwy-i wtu-nwcnqo-r wtu-snabsj-k wtu-1e9fgzq-l wtu-15f70xm-m wtu-1kekspa-n",
        onClick: $setup.triggerVibration
      }, [
        _createElementVNode("text", { class: "wtu-199nxoz-o wtu-wgd06p-e wtu-17exkt3-p" }, "短震动反馈")
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const HapticsCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/function/components/HapticsCard.uvue"]]);
export {
  HapticsCard as H
};
//# sourceMappingURL=HapticsCard.js.map
