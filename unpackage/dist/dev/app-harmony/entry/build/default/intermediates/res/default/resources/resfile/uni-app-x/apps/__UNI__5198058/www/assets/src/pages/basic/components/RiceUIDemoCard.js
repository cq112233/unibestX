import "../../../store/index.js";
import { C as Card } from "./Card.js";
import { u as useAppStore } from "../../../store/app.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataEvent: _setSharedDataEvent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponent: _createSharedDataComponent, setSharedData: _setSharedData } = globalThis.Vue;
const __className = "GenSrcPagesBasicComponentsRiceUIDemoCard";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "2a010afb",
  __className,
  __filename: "src/pages/basic/components/RiceUIDemoCard.uvue",
  __name: "RiceUIDemoCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsRiceUIDemoCardSharedData", sharedDataClassId: 0 })));
    const appStore = useAppStore();
    const currentTheme = computed(() => {
      return appStore.state.theme;
    });
    function copyWebsiteUrl() {
      uni.setClipboardData({
        data: "https://riceui.cn/",
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
        url: "/src/sub/rice-ui/rice-ui",
        fail: (err) => {
          uni.__f__("error", "at src/pages/basic/components/RiceUIDemoCard.uvue:64", "navigateToShowcase fail:", err);
        }
      });
    }
    return () => {
      "raw js";
      const n15 = _createSharedDataComponent(
        Card,
        "fa06683a",
        { title: "Rice UI 组件库" },
        {
          "default": () => {
            _setSharedDataEvent(__sharedData, 1, copyWebsiteUrl);
            _setSharedDataEvent(__sharedData, 2, navigateToShowcase);
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData, 3, { backgroundColor: currentTheme.value });
            });
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
const RiceUIDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  RiceUIDemoCard as R
};
//# sourceMappingURL=RiceUIDemoCard.js.map
