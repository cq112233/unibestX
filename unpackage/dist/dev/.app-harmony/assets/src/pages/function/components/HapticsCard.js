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
const _style_0 = {"wtu-xlfis6-0":{"":{"color":"#94a3b8"}},"wtu-44c3cb-1":{"":{"backgroundColor":"#ffffff"}},"wtu-lwq7o6-2":{"":{"color":"#334155"}},"wtu-1phhh09-3":{"":{"width":"100%"}},"wtu-1km86q6-4":{"":{"backgroundColor":"#10b981"}},"wtu-snabsj-5":{"":{"display":"flex"}},"wtu-1e9fgzq-6":{"":{"flexDirection":"row"}},"wtu-15f70xm-7":{"":{"alignItems":"center"}},"wtu-1kekspa-8":{"":{"justifyContent":"center"}},"wtu-199nxoz-9":{"":{"color":"#ffffff"}},"wtu-17exkt3-a":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-nwcnqo-b":{"":{"backgroundColor":"#f59e0b"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, vModelText: _vModelText, withDirectives: _withDirectives, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "触感与工具" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("text", { class: "text-12px wtu-xlfis6-0 mb-8px" }, "剪贴板测试文本"),
        _withDirectives(_createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.copyText = $event),
            placeholder: "请输入要复制的文本",
            class: "h-38px wtu-44c3cb-1 rounded-6px px-12px border-width-1px border-style-solid border-color-[#cbd5e1] text-14px wtu-lwq7o6-2 mb-12px"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [_vModelText, $setup.copyText]
        ]),
        _createElementVNode("view", {
          class: "wtu-1phhh09-3 h-38px rounded-8px wtu-1km86q6-4 wtu-snabsj-5 wtu-1e9fgzq-6 wtu-15f70xm-7 wtu-1kekspa-8",
          onClick: $setup.handleCopy
        }, [
          _createElementVNode("text", { class: "wtu-199nxoz-9 text-14px wtu-17exkt3-a" }, "复制测试文本")
        ])
      ]),
      _createElementVNode("view", {
        class: "wtu-1phhh09-3 h-44px rounded-8px wtu-nwcnqo-b wtu-snabsj-5 wtu-1e9fgzq-6 wtu-15f70xm-7 wtu-1kekspa-8",
        onClick: $setup.triggerVibration
      }, [
        _createElementVNode("text", { class: "wtu-199nxoz-9 text-14px wtu-17exkt3-a" }, "短震动反馈")
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
