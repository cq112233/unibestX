import { C as Card } from "../../basic/components/Card.js";
import { t as toast, a as toastSuccess } from "../../../utils/toast.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataEvent: _setSharedDataEvent, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesFunctionComponentsToastCard";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "3290fe0f",
  __className,
  __filename: "src/pages/function/components/ToastCard.uvue",
  __name: "ToastCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionComponentsToastCardSharedData", sharedDataClassId: 0 })));
    const customMsg = ref("来自 Function 功能页的 Toast 消息！");
    function showCustomToast() {
      if (customMsg.value.trim() == "") {
        toast("请输入提示内容");
        return null;
      }
      toast(customMsg.value);
    }
    function showSuccessToast() {
      toastSuccess("Function 页面全局 Toast 触发成功！");
    }
    return () => {
      "raw js";
      const _component_input = _resolveComponent("input");
      const n10 = _createSharedDataComponent(
        Card,
        "43d3d1a8",
        { title: "全局 Toast 提示调用" },
        {
          "default": _withSharedDataVaporCtx(() => {
            const n3 = _createSharedDataComponentWithFallback(_component_input, "c3b3dbb6", {
              value: () => {
                return customMsg.value;
              },
              "onUpdate:value": () => {
                return (_value) => {
                  return customMsg.value = _value;
                };
              },
              placeholder: "请输入要提示的文字内容",
              class: "wtu-16m9tth-c wtu-19clxu8-d wtu-6x9tj9-e wtu-y4lian-f wtu-33hvuz-3 wtu-4tuys3-4 wtu-f8q5hx-g wtu-1l8aqp8-h wtu-12c53hp-i"
            });
            _setSharedData(__sharedData, 1, n3?.sharedData);
            _setSharedDataEvent(__sharedData, 2, showCustomToast);
            _setSharedDataEvent(__sharedData, 3, showSuccessToast);
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n10.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const ToastCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  ToastCard as T
};
//# sourceMappingURL=ToastCard.js.map
