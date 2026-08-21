import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { t as toast, a as toastSuccess, b as toastError, c as toastWarning } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/toast&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataEvent: _setSharedDataEvent, createSharedDataComponent: _createSharedDataComponent, setSharedData: _setSharedData } = globalThis.Vue;
const __className = "GenSrcPagesBasicComponentsToastDemoCard";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "c92edae0",
  __className,
  __filename: "src/pages/basic/components/ToastDemoCard.uvue",
  __name: "ToastDemoCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsToastDemoCardSharedData", sharedDataClassId: 0 })));
    function handleDefaultToast() {
      toast("这是一条通过 App.ku 全局组件触发的轻提示");
    }
    function handleSuccessToast() {
      toastSuccess("恭喜！全局 Toast 触发成功");
    }
    function handleErrorToast() {
      toastError("操作异常，全局 Toast 报错提示");
    }
    function handleWarningToast() {
      toastWarning("注意：这是一条全局警告轻提示");
    }
    return () => {
      "raw js";
      const n13 = _createSharedDataComponent(
        Card,
        "14fda4ee",
        { title: "全局 Toast 轻提示" },
        {
          "default": () => {
            _setSharedDataEvent(__sharedData, 1, handleDefaultToast);
            _setSharedDataEvent(__sharedData, 2, handleSuccessToast);
            _setSharedDataEvent(__sharedData, 3, handleErrorToast);
            _setSharedDataEvent(__sharedData, 4, handleWarningToast);
          }
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n13.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const ToastDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  ToastDemoCard as T
};
//# sourceMappingURL=ToastDemoCard.js.map
