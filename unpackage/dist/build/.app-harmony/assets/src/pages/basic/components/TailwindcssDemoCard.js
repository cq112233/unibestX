import { C as Card } from "./Card.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataEvent: _setSharedDataEvent, createSharedDataComponent: _createSharedDataComponent, setSharedData: _setSharedData } = globalThis.Vue;
const __className = "GenSrcPagesBasicComponentsTailwindcssDemoCard";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/pages/basic/components/TailwindcssDemoCard.uvue",
  __name: "TailwindcssDemoCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsTailwindcssDemoCardSharedData", sharedDataClassId: 0 })));
    function copyWebsiteUrl() {
      uni.setClipboardData({
        data: "https://tw.icebreaker.top/zh-cn/",
        success: () => {
          uni.showToast({
            title: "官网网址已复制到剪贴板",
            icon: "none"
          });
        }
      });
    }
    function navigateToDemo() {
      uni.navigateTo({
        url: "/src/sub/tailwindcss/tailwindcss",
        fail: (err) => {
          uni.__f__("error", "at src/pages/basic/components/TailwindcssDemoCard.uvue:64", "navigateToDemo fail:", err);
        }
      });
    }
    return () => {
      "raw js";
      const n15 = _createSharedDataComponent(
        Card,
        "0e428ee6",
        { title: "weapp-tailwindcss Demo" },
        {
          "default": () => {
            _setSharedDataEvent(__sharedData, 1, copyWebsiteUrl);
            _setSharedDataEvent(__sharedData, 2, navigateToDemo);
          }
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n15.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const TailwindcssDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  TailwindcssDemoCard as T
};
