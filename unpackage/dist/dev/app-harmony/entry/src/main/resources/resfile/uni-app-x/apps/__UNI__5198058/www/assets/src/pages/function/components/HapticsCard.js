import ohos_vibrator from '@ohos.vibrator';const { defineComponent, ref, openBlock, createBlock, withCtx, createElementVNode, withDirectives, vModelText } = globalThis.Vue
import { C as Card } from "../../basic/components/Card.js";
import vibrator from "@ohos.vibrator";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HapticsCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const copyText = ref("Hello unibestX!");
    function vibrationHarmony() {
      try {
        vibrator.startVibration(new UTSJSONObject({
          type: "time",
          duration: 15
        }), new UTSJSONObject({
          id: 0,
          usage: "unknown"
        })).then(() => {
          uni.showToast({ title: "已触发鸿蒙短震动", icon: "none" });
        }).catch((_err = null) => {
          uni.vibrateShort({
            success: () => {
              uni.showToast({ title: "已触发鸿蒙短震动", icon: "none" });
            },
            fail: () => {
              uni.showToast({ title: "鸿蒙震动触发失败", icon: "none" });
            }
          });
        });
      } catch (e) {
        uni.vibrateShort({
          success: () => {
            uni.showToast({ title: "已触发鸿蒙短震动", icon: "none" });
          },
          fail: () => {
            uni.showToast({ title: "鸿蒙震动调用失败", icon: "none" });
          }
        });
      }
    }
    function triggerVibration() {
      vibrationHarmony();
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
    const __returned__ = { copyText, vibrationHarmony, triggerVibration, handleCopy, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__10b981_": { "": { "backgroundImage": "none", "backgroundColor": "#10b981" } }, "bg-__f59e0b_": { "": { "backgroundImage": "none", "backgroundColor": "#f59e0b" } }, "bg-white": { "": { "backgroundColor": "rgba(255,255,255,var(--un-bg-opacity,1))" } }, "border-color-__cbd5e1_": { "": { "borderTopColor": "#cbd5e1", "borderRightColor": "#cbd5e1", "borderBottomColor": "#cbd5e1", "borderLeftColor": "#cbd5e1" } }, "border-color-__e2e8f0_": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex": { "": { "display": "flex" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "h-38px": { "": { "height": 38 } }, "h-44px": { "": { "height": 44 } }, "items-center": { "": { "alignItems": "center" } }, "justify-center": { "": { "justifyContent": "center" } }, "mb-12px": { "": { "marginBottom": 12 } }, "mb-16px": { "": { "marginBottom": 16 } }, "mb-8px": { "": { "marginBottom": 8 } }, "none": { "": { "display": "none" } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "px-12px": { "": { "paddingLeft": 12, "paddingRight": 12 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "rounded-6px": { "": { "borderTopLeftRadius": 6, "borderTopRightRadius": 6, "borderBottomRightRadius": 6, "borderBottomLeftRadius": 6 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "text-__334155_": { "": { "color": "#334155" } }, "text-__94a3b8_": { "": { "color": "#94a3b8" } }, "text-__ffffff_": { "": { "color": "#ffffff" } }, "text-12px": { "": { "fontSize": 12 } }, "text-14px": { "": { "fontSize": 14 } }, "w-full": { "": { "width": "100%" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Card"], { title: "触感与工具" }, {
    default: withCtx(() => [
      createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        createElementVNode("text", { class: "text-12px text-__94a3b8_ mb-8px" }, "剪贴板测试文本"),
        withDirectives(createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.copyText = $event),
            placeholder: "请输入要复制的文本",
            class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-14px text-__334155_ mb-12px"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vModelText, $setup.copyText]
        ]),
        createElementVNode("view", {
          class: "w-full h-38px rounded-8px bg-__10b981_ flex flex-row items-center justify-center",
          onClick: $setup.handleCopy
        }, [
          createElementVNode("text", { class: "text-__ffffff_ text-14px font-bold" }, "复制测试文本")
        ])
      ]),
      createElementVNode("view", {
        class: "w-full h-44px rounded-8px bg-__f59e0b_ flex flex-row items-center justify-center",
        onClick: $setup.triggerVibration
      }, [
        createElementVNode("text", { class: "text-__ffffff_ text-14px font-bold" }, "短震动反馈")
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
