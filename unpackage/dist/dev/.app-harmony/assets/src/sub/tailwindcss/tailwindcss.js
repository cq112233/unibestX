import { _ as __easycom_0 } from "../../components/NavBar/NavBar.js";
import { A as AppKu } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import { W as WeappTailwindcss } from "./components/WeappTailwindcss.js";
import { B as BindClass } from "./components/BindClass.js";
import { _ as _sfc_main$1 } from "./components/t-button.js";
import "../../store/index.js";
import { u as useAppStore } from "../../store/app.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../utils/systemInfo.js";
import "../../utils/theme.js";
import "../../../theme.js";
import "../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../tabbar/index.js";
import "../../tabbar/store.js";
import "../../tabbar/types.js";
import "../../tabbar/config.js";
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../utils/i18n.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh-CN.js";
import "../../i18n/locales/en-US.js";
import "../../utils/toast.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/token.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../store/user.js";
import "../../../uni_modules/uview-ultra/libs/i18n/index.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ru.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataClass: _setSharedDataClass, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponent: _createSharedDataComponent, toDisplayString: _toDisplayString, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenSrcSubTailwindcssTailwindcss";
const { computed, ref, onLoad } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "84d63276",
  __className,
  __filename: "src/sub/tailwindcss/tailwindcss.uvue",
  __name: "tailwindcss",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubTailwindcssTailwindcssSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubTailwindcssTailwindcssSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const appStore = useAppStore();
    const isDark = computed(() => {
      return appStore.state.isDark;
    });
    function toggleDark() {
      const nextMode = appStore.state.isDark ? "light" : "dark";
      appStore.setThemeMode(nextMode);
    }
    const buttonColors = [
      "bg-_b_h000_B",
      "bg-_b_h111_B",
      "bg-_b_h222_B",
      "bg-_b_h333_B",
      "bg-_b_h444_B",
      "bg-_b_h555_B",
      "bg-_b_h666_B",
      "bg-_b_h777_B",
      "bg-_b_h888_B",
      "bg-_b_h999_B",
      "bg-_b_haaa_B",
      "bg-_b_hbbb_B",
      "bg-_b_hccc_B",
      "bg-_b_hddd_B",
      "bg-_b_heee_B",
      "bg-_b_hfff_B"
    ];
    const globalNum = ref(0);
    const buttonClass = computed(() => {
      const index = globalNum.value % buttonColors.length;
      return buttonColors[index];
    });
    const templateCorpusDynamicClass = computed(() => {
      return "template-corpus-dynamic bg-_b_h68c828_B text-slate-700 text-_b26px_B w-_b323px_B h-_b45px_B leading-_b45px_B px-3";
    });
    function setGlobalNum(num) {
      globalNum.value = num;
    }
    onLoad(() => {
      uni.__f__("log", "at src/sub/tailwindcss/tailwindcss.uvue:51", "欢迎使用 weapp-tailwindcss 模板");
    });
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_button = _resolveComponent("button");
      const n36 = _createSharedDataComponent(AppKu, "6724c3a2", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n35 = _createSharedDataComponent(LayoutComponent, "7d73b0b2", {
            "navigation-bar-title-text": "weapp-tailwindcss 示例",
            "navigation-style": "custom"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "677ecd32", { title: "weapp-tailwindcss 示例" });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedDataClass(__sharedData, 10, ["content", { dark: _unref(isDark) }]);
              });
              const n1 = _createSharedDataComponent(WeappTailwindcss, "677ed10e");
              _setSharedData(__sharedData, 3, n1.sharedData);
              const n2 = _createSharedDataComponent(BindClass, "677ed168");
              _setSharedData(__sharedData, 4, n2.sharedData);
              const n4 = _createSharedDataComponentWithFallback(_component_button, "677ed1a6", {
                class: "mt-4 w-64 rounded-full bg-_b_heccc68_B px-4 py-2 text-white dark_cbg-_b_h3498db_B",
                onClick: () => {
                  return toggleDark;
                }
              }, {
                "default": () => {
                  _renderSharedDataEffect(() => {
                    return _setSharedData(__sharedData, 6, _toDisplayString(_unref(isDark) ? "切换到亮色模式" : "切换到暗色模式"));
                  });
                }
              });
              _setSharedData(__sharedData, 5, n4?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedDataClass(__sharedData, 11, _unref(templateCorpusDynamicClass));
              });
              const _on_click = () => {
                return setGlobalNum(_unref(globalNum) + 1);
              };
              const n24 = _createSharedDataComponentWithFallback(_component_button, "ef495674", {
                class: () => {
                  return ["w-64 text-white", _unref(buttonClass)];
                },
                onClick: () => {
                  return _on_click;
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  _renderSharedDataEffect(() => {
                    return _setSharedData(__sharedData, 9, _toDisplayString(_unref(globalNum)));
                  });
                }, "string")
              });
              _setSharedData(__sharedData, 8, n24?.sharedData);
              const n31 = _createSharedDataComponent(_sfc_main$1, "ef487d38", {
                "t-class": "bg-_b_h0977ee_B text-_b31rpx_B",
                "t-class-content": "px-_b29rpx_B"
              }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 7, n31.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n35.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n36.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {"content":{"":{"display":"flex","flexDirection":"column","alignItems":"center","paddingTop":"32rpx","paddingBottom":"32rpx"}},"bg-_b_h000_B":{"":{"backgroundColor":"#000"}},"bg-_b_h111_B":{"":{"backgroundColor":"#111"}},"bg-_b_h222_B":{"":{"backgroundColor":"#222"}},"bg-_b_h333_B":{"":{"backgroundColor":"#333"}},"bg-_b_h444_B":{"":{"backgroundColor":"#444"}},"bg-_b_h555_B":{"":{"backgroundColor":"#555"}},"bg-_b_h666_B":{"":{"backgroundColor":"#666"}},"bg-_b_h777_B":{"":{"backgroundColor":"#777"}},"bg-_b_h888_B":{"":{"backgroundColor":"#888"}},"bg-_b_h999_B":{"":{"backgroundColor":"#999"}},"bg-_b_haaa_B":{"":{"backgroundColor":"#aaa"}},"bg-_b_hbbb_B":{"":{"backgroundColor":"#bbb"}},"bg-_b_hccc_B":{"":{"backgroundColor":"#ccc"}},"bg-_b_hddd_B":{"":{"backgroundColor":"#ddd"}},"bg-_b_heee_B":{"":{"backgroundColor":"#eee"}},"bg-_b_hfff_B":{"":{"backgroundColor":"#fff"}},"bg-_b_h68c828_B":{"":{"backgroundColor":"#68c828"}},"text-slate-700":{"":{"color":"var(--color-slate-700)"}},"text-_b26px_B":{"":{"fontSize":26}},"w-_b323px_B":{"":{"width":323}},"h-_b45px_B":{"":{"height":45}},"leading-_b45px_B":{"":{"-TwLeading":45,"lineHeight":45}},"px-3":{"":{"paddingInline":"calc(var(--spacing) * 3)"}},"mt-4":{"":{"marginTop":"calc(var(--spacing) * 4)"}},"w-64":{"":{"width":"calc(var(--spacing) * 64)"}},"rounded-full":{"":{"borderRadius":"calc(infinity * 1px)"}},"bg-_b_heccc68_B":{"":{"backgroundColor":"#eccc68"}},"px-4":{"":{"paddingInline":"calc(var(--spacing) * 4)"}},"py-2":{"":{"paddingBlock":"calc(var(--spacing) * 2)"}},"text-white":{"":{"color":"var(--color-white)"}},"dark_cbg-_b_h3498db_B":{"":{"backgroundColor":"#3498db"}},"bg-_b_h0977ee_B":{"":{"backgroundColor":"#0977ee"}},"text-_b31rpx_B":{"":{"fontSize":"31rpx"}},"px-_b29rpx_B":{"":{"paddingInline":"29rpx"}},"flex":{"":{"display":"flex"}}};
const tailwindcss = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  tailwindcss as default
};
//# sourceMappingURL=tailwindcss.js.map
