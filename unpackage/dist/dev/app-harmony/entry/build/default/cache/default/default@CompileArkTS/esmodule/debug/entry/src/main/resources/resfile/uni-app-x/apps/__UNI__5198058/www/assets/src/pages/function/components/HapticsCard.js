import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataEvent: _setSharedDataEvent, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesFunctionComponentsHapticsCard";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "950937a8",
  __className,
  __filename: "src/pages/function/components/HapticsCard.uvue",
  __name: "HapticsCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionComponentsHapticsCardSharedData", sharedDataClassId: 0 })));
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
    return () => {
      "raw js";
      const _component_input = _resolveComponent("input");
      const n8 = _createSharedDataComponent(
        Card,
        "91c87b06",
        { title: "触感与工具" },
        {
          "default": _withSharedDataVaporCtx(() => {
            const n1 = _createSharedDataComponentWithFallback(_component_input, "5f35197f", {
              value: () => {
                return copyText.value;
              },
              "onUpdate:value": () => {
                return (_value) => {
                  return copyText.value = _value;
                };
              },
              placeholder: "请输入要复制的文本",
              class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-14px text-__334155_ mb-12px"
            });
            _setSharedData(__sharedData, 1, n1?.sharedData);
            _setSharedDataEvent(__sharedData, 2, handleCopy);
            _setSharedDataEvent(__sharedData, 3, triggerVibration);
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n8.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const HapticsCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  HapticsCard as H
};
//# sourceMappingURL=HapticsCard.js.map
