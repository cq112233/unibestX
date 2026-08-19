import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataEvent: _setSharedDataEvent, createSharedDataComponent: _createSharedDataComponent, setSharedData: _setSharedData } = globalThis.Vue;
const __className = "GenSrcPagesBasicComponentsUViewUltraDemoCard";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "196c68e4",
  __className,
  __filename: "src/pages/basic/components/UViewUltraDemoCard.uvue",
  __name: "UViewUltraDemoCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsUViewUltraDemoCardSharedData", sharedDataClassId: 0 })));
    function copyWebsiteUrl() {
      uni.setClipboardData({
        data: "https://uview-ultra.lingyun.net/",
        success: () => {
          uni.showToast({
            title: "官网网址已复制到剪贴板",
            icon: "none"
          });
        }
      });
    }
    function navigateToShowcase() {
      uni.navigateTo({
        url: "/src/sub/uview-ultra/uview-ultra",
        fail: (err) => {
          uni.__f__("error", "at src/pages/basic/components/UViewUltraDemoCard.uvue:58", "navigateToShowcase fail:", err);
        }
      });
    }
    return () => {
      "raw js";
      const n15 = _createSharedDataComponent(
        Card,
        "169f0af0",
        { title: "uview-ultra 组件库" },
        {
          "default": () => {
            _setSharedDataEvent(__sharedData, 1, copyWebsiteUrl);
            _setSharedDataEvent(__sharedData, 2, navigateToShowcase);
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
const UViewUltraDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  UViewUltraDemoCard as U
};
//# sourceMappingURL=UViewUltraDemoCard.js.map
