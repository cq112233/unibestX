import { A as AppKu } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/navbar.js";
import { W as WeappTailwindcss } from "./components/WeappTailwindcss.js";
import { B as BindClass } from "./components/BindClass.js";
import { T as TButton } from "./components/t-button.js";
import "../../store/index.js";
import { u as useAppStore } from "../../store/app.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../utils/systemInfo.js";
import "../../tabbar/config.js";
import "../../tabbar/types.js";
import "../../tabbar/index.js";
import "../../tabbar/helper/index.js";
import "../../tabbar/helper/store.js";
import "../../utils/theme.js";
import "../../../theme.js";
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../utils/i18n.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh-CN.js";
import "../../i18n/locales/en-US.js";
import "../../tabbar/custom/index.js";
import "../../utils/toast.js";
import "../../components/NavBar/NavBar.js";
import "../../utils/pageScroll.js";
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
import "../../../uni_modules/uview-ultra/libs/config/config.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponent: _createSharedDataComponent, setSharedData: _setSharedData, toDisplayString: _toDisplayString, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback } = globalThis.Vue;
const __className = "GenSrcSubTailwindcssTailwindcss";
const { computed, ref, onLoad } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
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
      uni.__f__("log", "at src/sub/tailwindcss/tailwindcss.uvue:67", "欢迎使用 weapp-tailwindcss 模板");
    });
    return () => {
      "raw js";
      const _component_button = _resolveComponent("button");
      const n42 = _createSharedDataComponent(AppKu, "6724c3a2", {
        layout: "navbar",
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": { "navigationBarTitleText": "weapp-tailwindcss 示例", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n41 = _createSharedDataComponent(LayoutComponent, "677ece0b", {
            "show-back": true,
            "hide-navbar": false,
            "enable-pull-down-refresh": false,
            "page-style": { "navigationBarTitleText": "weapp-tailwindcss 示例", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              _renderSharedDataEffect(() => {
                return _setSharedDataClass(__sharedData, 9, ["weapp-tw-border content", { dark: _unref(isDark) }]);
              });
              const n0 = _createSharedDataComponent(WeappTailwindcss, "677ed930");
              _setSharedData(__sharedData, 2, n0.sharedData);
              const n1 = _createSharedDataComponent(BindClass, "677edc15");
              _setSharedData(__sharedData, 3, n1.sharedData);
              const n3 = _createSharedDataComponentWithFallback(_component_button, "677edc53", {
                class: "mt-4 w-64 rounded-full px-4 py-2 text-white",
                style: () => {
                  return { backgroundColor: _unref(isDark) ? "#3498db" : "#eccc68" };
                },
                onClick: () => {
                  return toggleDark;
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  _renderSharedDataEffect(() => {
                    return _setSharedData(__sharedData, 5, _toDisplayString(_unref(isDark) ? "切换到亮色模式" : "切换到暗色模式"));
                  });
                }, "string")
              });
              _setSharedData(__sharedData, 4, n3?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedDataClass(__sharedData, 10, ["weapp-tw-border", _unref(templateCorpusDynamicClass)]);
              });
              const _on_click = () => {
                return setGlobalNum(_unref(globalNum) + 1);
              };
              const n28 = _createSharedDataComponentWithFallback(_component_button, "ef48853c", {
                class: () => {
                  return ["w-64 text-white", _unref(buttonClass)];
                },
                onClick: () => {
                  return _on_click;
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  _renderSharedDataEffect(() => {
                    return _setSharedData(__sharedData, 8, _toDisplayString(_unref(globalNum)));
                  });
                }, "string")
              });
              _setSharedData(__sharedData, 7, n28?.sharedData);
              _renderSharedDataEffect(() => {
                const _isDark = _unref(isDark);
                _setSharedDataClass(__sharedData, 11, ["weapp-tw-border theme-mode-demo mt-4 rounded px-4 py-3", _isDark ? "bg-zinc-900 text-zinc-50" : "bg-white text-slate-900"]);
                _setSharedDataClass(__sharedData, 12, ["weapp-tw-border theme-dark mt-2 rounded px-3 py-2", _isDark ? "bg-zinc-950 text-zinc-50" : "bg-white text-slate-900"]);
              });
              const n37 = _createSharedDataComponent(TButton, "ef4847b6", {
                "t-class": "bg-_b_h0977ee_B text-_b31rpx_B",
                "t-class-content": "px-_b29rpx_B"
              }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 6, n37.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n41.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n42.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {"bg-_b_h000_B":{"":{"backgroundColor":"#000"}},"bg-_b_h111_B":{"":{"backgroundColor":"#111"}},"bg-_b_h222_B":{"":{"backgroundColor":"#222"}},"bg-_b_h333_B":{"":{"backgroundColor":"#333"}},"bg-_b_h444_B":{"":{"backgroundColor":"#444"}},"bg-_b_h555_B":{"":{"backgroundColor":"#555"}},"bg-_b_h666_B":{"":{"backgroundColor":"#666"}},"bg-_b_h777_B":{"":{"backgroundColor":"#777"}},"bg-_b_h888_B":{"":{"backgroundColor":"#888"}},"bg-_b_h999_B":{"":{"backgroundColor":"#999"}},"bg-_b_haaa_B":{"":{"backgroundColor":"#aaa"}},"bg-_b_hbbb_B":{"":{"backgroundColor":"#bbb"}},"bg-_b_hccc_B":{"":{"backgroundColor":"#ccc"}},"bg-_b_hddd_B":{"":{"backgroundColor":"#ddd"}},"bg-_b_heee_B":{"":{"backgroundColor":"#eee"}},"bg-_b_hfff_B":{"":{"backgroundColor":"#fff"}},"bg-_b_h68c828_B":{"":{"backgroundColor":"#68c828"}},"text-slate-700":{"":{"color":"var(--color-slate-700)"}},"text-_b26px_B":{"":{"fontSize":26}},"w-_b323px_B":{"":{"width":323}},"h-_b45px_B":{"":{"height":45}},"leading-_b45px_B":{"":{"-TwLeading":45,"lineHeight":"45px"}},"px-3":{"":{"paddingInline":"calc(var(--spacing) * 3)"}},"mt-4":{"":{"marginTop":"calc(var(--spacing) * 4)"}},"w-64":{"":{"width":"calc(var(--spacing) * 64)"}},"rounded-full":{"":{"borderRadius":"calc(infinity * 1px)"}},"px-4":{"":{"paddingInline":"calc(var(--spacing) * 4)"}},"py-2":{"":{"paddingBlock":"calc(var(--spacing) * 2)"}},"text-white":{"":{"color":"var(--color-white)"}},"rounded":{"":{"borderRadius":"0.25rem"}},"py-3":{"":{"paddingBlock":"calc(var(--spacing) * 3)"}},"bg-zinc-900":{"":{"backgroundColor":"var(--color-zinc-900)"}},"text-zinc-50":{"":{"color":"var(--color-zinc-50)"}},"bg-white":{"":{"backgroundColor":"var(--color-white)"}},"text-slate-900":{"":{"color":"var(--color-slate-900)"}},"mt-2":{"":{"marginTop":"calc(var(--spacing) * 2)"}},"bg-zinc-950":{"":{"backgroundColor":"var(--color-zinc-950)"}},"bg-_b_h0977ee_B":{"":{"backgroundColor":"#0977ee"}},"text-_b31rpx_B":{"":{"fontSize":"31rpx"}},"px-_b29rpx_B":{"":{"paddingInline":"29rpx"}}};
const _style_1 = {};
const tailwindcss = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  tailwindcss as default
};
