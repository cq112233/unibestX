import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
import { _ as __easycom_3 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as __easycom_3$1 } from "../../../../../uni_modules/uview-ultra/components/up-poster/up-poster.js";
import { A as AppKu } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/app.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../tabbar/store.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/config.js";
import "../../../../i18n/index.js";
import "../../../../../uni_modules/lime-i18n/common/index.js";
import "../../../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/lime-i18n/common/format.js";
import "../../../../../uni_modules/lime-i18n/common/util.js";
import "../../../../../uni_modules/lime-i18n/common/errors.js";
import "../../../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../../../uni_modules/lime-i18n/common/types.js";
import "../../../../i18n/locales/zh-CN.js";
import "../../../../i18n/locales/en-US.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/index.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ru.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../utils/theme.js";
import "../../../../../theme.js";
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
import "../../../../../uni_modules/uview-ultra/components/up-qrcode/qrcode.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../utils/toast.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosPosterPoster";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "42f29580",
  __className,
  __filename: "src/sub/uview-ultra/demos/poster/poster.uvue",
  __name: "poster",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosPosterPosterSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosPosterPosterSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const baseJson = ref(new UTSJSONObject({
      css: new UTSJSONObject({
        width: "375px",
        height: "600px",
        background: "linear-gradient(to bottom, #0957de, #7c3aed)",
        radius: "12px"
      }),
      views: [
        new UTSJSONObject({
          type: "view",
          css: new UTSJSONObject({
            left: 20,
            top: 20,
            width: 335,
            height: 120,
            background: "rgba(255, 255, 255, 0.2)",
            radius: 12
          })
        }),
        new UTSJSONObject({
          type: "text",
          text: "unibestX",
          css: new UTSJSONObject({ left: 40, top: 40, width: 240, fontSize: 28, lineHeight: 34, color: "#ffffff", fontWeight: "bold" })
        }),
        new UTSJSONObject({
          type: "text",
          text: "uni-app X 开发模板",
          css: new UTSJSONObject({ left: 40, top: 84, width: 260, fontSize: 15, lineHeight: 20, color: "#e2e8f0" })
        }),
        new UTSJSONObject({
          type: "image",
          src: "/static/logo.png",
          css: new UTSJSONObject({ left: 30, top: 170, width: 100, height: 100, radius: 50 })
        }),
        new UTSJSONObject({
          type: "text",
          text: "uview-ultra",
          css: new UTSJSONObject({ left: 150, top: 188, width: 200, fontSize: 22, lineHeight: 28, color: "#1e293b", fontWeight: "bold" })
        }),
        new UTSJSONObject({
          type: "text",
          text: "基于 uni-app X 的组件库",
          css: new UTSJSONObject({ left: 150, top: 224, width: 200, fontSize: 14, lineHeight: 20, color: "#64748b" })
        }),
        new UTSJSONObject({
          type: "view",
          css: new UTSJSONObject({
            left: 30,
            top: 300,
            width: 315,
            height: 120,
            background: "#f8fafc",
            radius: 12
          })
        }),
        new UTSJSONObject({
          type: "text",
          text: "扫码查看",
          css: new UTSJSONObject({ left: 60, top: 320, width: 120, fontSize: 16, lineHeight: 22, color: "#334155", fontWeight: "bold" })
        }),
        new UTSJSONObject({
          type: "qrcode",
          text: "https://uview-ultra.lingyun.net",
          css: new UTSJSONObject({ left: 200, top: 310, width: 100, foreground: "#0957de", background: "#ffffff", lv: 3 })
        }),
        new UTSJSONObject({
          type: "view",
          css: new UTSJSONObject({
            left: 30,
            top: 440,
            width: 315,
            height: 130,
            background: "linear-gradient(to right, #f59e0b, #ef4444)",
            radius: 12
          })
        }),
        new UTSJSONObject({
          type: "text",
          text: "2026.08.20",
          css: new UTSJSONObject({ left: 60, top: 486, width: 260, fontSize: 24, lineHeight: 30, color: "#ffffff", fontWeight: "bold" })
        })
      ]
    }));
    const posterJson = ref(baseJson.value);
    const customJson = ref(new UTSJSONObject({
      css: new UTSJSONObject({
        width: "300px",
        height: "480px",
        background: "linear-gradient(to bottom, #0f172a, #334155)",
        radius: "8px"
      }),
      views: [
        new UTSJSONObject({
          type: "text",
          text: "CUSTOM POSTER",
          css: new UTSJSONObject({ left: 30, top: 30, width: 240, fontSize: 24, lineHeight: 30, color: "#fbbf24", fontWeight: "bold" })
        }),
        new UTSJSONObject({
          type: "text",
          text: "自定义样式海报",
          css: new UTSJSONObject({ left: 30, top: 74, width: 240, fontSize: 15, lineHeight: 20, color: "#e2e8f0" })
        }),
        new UTSJSONObject({
          type: "qrcode",
          text: "https://github.com/cq112233/unibestX",
          css: new UTSJSONObject({ left: 100, top: 140, width: 100, foreground: "#f8fafc", background: "#ffffff", lv: 3 })
        }),
        new UTSJSONObject({
          type: "text",
          text: "扫码关注",
          css: new UTSJSONObject({ left: 30, top: 270, width: 240, fontSize: 16, lineHeight: 22, color: "#94a3b8" })
        }),
        new UTSJSONObject({
          type: "view",
          css: new UTSJSONObject({
            left: 30,
            top: 330,
            width: 240,
            height: 80,
            background: "linear-gradient(to right, #0ea5e9, #6366f1)",
            radius: 40
          })
        }),
        new UTSJSONObject({
          type: "text",
          text: "立即体验",
          css: new UTSJSONObject({ left: 30, top: 360, width: 240, fontSize: 20, lineHeight: 26, color: "#ffffff", fontWeight: "bold" })
        })
      ]
    }));
    const posterPath = ref("");
    const eventLog = ref("");
    const isCustom = ref(false);
    const posterRef = ref(null);
    function onGenerate() {
      const poster2 = posterRef.value;
      if (poster2 == null)
        return null;
      poster2.$callMethod("exportImage");
      eventLog.value = "正在生成海报...";
    }
    function onSwitchJson() {
      const poster2 = posterRef.value;
      if (poster2 == null)
        return null;
      if (isCustom.value) {
        posterJson.value = baseJson.value;
        isCustom.value = false;
        eventLog.value = "已切换回默认样式，正在生成...";
      } else {
        posterJson.value = customJson.value;
        isCustom.value = true;
        eventLog.value = "已切换自定义样式，正在生成...";
      }
      poster2.$callMethod("exportImage");
    }
    function onExport(event) {
      const path = event.path;
      if (path != null && path.toString().length > 0) {
        posterPath.value = path.toString();
        eventLog.value = "生成成功";
      } else {
        eventLog.value = "生成失败：未返回图片路径";
      }
    }
    function onError(event) {
      const message = event.message;
      eventLog.value = `error => ${message == null ? "生成失败" : message.toString()}`;
    }
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_NavBar = __easycom_0;
      const _component_up_title = __easycom_1;
      const _component_up_button = __easycom_3;
      const _component_up_poster = __easycom_3$1;
      const n23 = _createSharedDataComponent(AppKu, "4f5929fb", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n22 = _createSharedDataComponent(LayoutComponent, "c867d54a", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-poster 海报"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "4492d298", { title: "up-poster 海报" });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_title, "4492c542", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 4, n2?.sharedData);
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 5, _toSharedDataBoolean(posterPath.value.length > 0));
              }, () => {
                _renderSharedDataEffect(() => {
                  return _setSharedDataAttr(__sharedData, 6, _toSharedDataString(posterPath.value));
                });
              }, () => {
              }, 261);
              const n10 = _createSharedDataComponentWithFallback(_component_up_button, "4492a5c8", {
                text: "生成海报",
                type: "primary",
                size: "small",
                class: "demo-btn",
                onClick: () => {
                  return onGenerate;
                }
              });
              _setSharedData(__sharedData, 7, n10?.sharedData);
              const n11 = _createSharedDataComponentWithFallback(_component_up_button, "44929e06", {
                text: "切换样式",
                type: "primary",
                plain: "",
                size: "small",
                class: "demo-btn",
                onClick: () => {
                  return onSwitchJson;
                }
              });
              _setSharedData(__sharedData, 8, n11?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 10, _toDisplayString(eventLog.value));
              });
              const n16 = _createSharedDataComponentWithFallback(_component_up_title, "4dc7b454", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 9, n16?.sharedData);
              const n20 = _createSharedDataComponentWithFallback(_component_up_poster, "4dc79e84", {
                json: () => {
                  return posterJson.value;
                },
                onExport: () => {
                  return onExport;
                },
                onError: () => {
                  return onError;
                }
              });
              _setSharedData(__sharedData, 3, n20?.sharedData);
              _setTemplateRef(n20, posterRef, null, "posterRef");
            })
          });
          _setSharedData(__sharedData, 1, n22.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n23.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const poster = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  poster as default
};
//# sourceMappingURL=poster.js.map
