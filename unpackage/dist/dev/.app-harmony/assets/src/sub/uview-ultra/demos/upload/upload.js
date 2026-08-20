import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-upload/up-upload.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/up-popup.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/up-status-bar.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/statusBar.js";
import "../../../../../uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/popup.js";
import "../../../../../uni_modules/uview-ultra/components/up-upload/utils.js";
import "../../../../../uni_modules/uview-ultra/components/up-upload/types.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../utils/toast.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosUploadUpload";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "f135a088",
  __className,
  __filename: "src/sub/uview-ultra/demos/upload/upload.uvue",
  __name: "upload",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosUploadUploadSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosUploadUploadSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const fileList1 = ref([]);
    const fileList2 = ref([]);
    async function uploadFilePromise(url) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(url);
        }, 1e3);
      });
    }
    async function afterRead(event) {
      const fileData = event.get("file");
      const lists = Array.isArray(fileData) ? fileData : [fileData];
      let fileListLen = fileList1.value.length;
      lists.forEach((item) => {
        fileList1.value.push(new UTSJSONObject({
          ...item,
          status: "uploading",
          message: "上传中"
        }));
      });
      for (let i = 0; i < lists.length; i++) {
        const url = lists[i].getString("url");
        const result = await uploadFilePromise(url);
        const item = fileList1.value[fileListLen];
        fileList1.value.splice(fileListLen, 1, Object.assign(item, new UTSJSONObject({
          status: "success",
          message: "",
          url: result
        })));
        fileListLen++;
      }
    }
    function deletePic(event) {
      fileList1.value.splice(event.getNumber("index"), 1);
    }
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_upload = __easycom_1;
      const _component_up_button = __easycom_2;
      const n11 = _createSharedDataComponent(AppKu, "67e80b3a", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n10 = _createSharedDataComponent(LayoutComponent, "95195c1a", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-upload 上传"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "0e1225c8", {
                title: "up-upload 上传",
                "auto-back": true,
                "safe-area-inset-top": true,
                "bg-color": "#ffffff"
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_upload, "0e121134", {
                "file-list": () => {
                  return fileList1.value;
                },
                name: "1",
                multiple: "",
                "max-count": 3,
                onAfterRead: () => {
                  return afterRead;
                },
                onDelete: () => {
                  return deletePic;
                }
              });
              _setSharedData(__sharedData, 3, n2?.sharedData);
              const n6 = _createSharedDataComponentWithFallback(_component_up_upload, "0e11faa0", {
                "file-list": () => {
                  return fileList2.value;
                },
                name: "2",
                multiple: "",
                "max-count": 3
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n5 = _createSharedDataComponentWithFallback(_component_up_button, "0e11f26a", {
                    type: "success",
                    text: "选择文件",
                    icon: "plus",
                    size: "mini"
                  });
                  _setSharedData(__sharedData, 5, n5?.sharedData);
                })
              });
              _setSharedData(__sharedData, 4, n6?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n10.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n11.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const upload = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  upload as default
};
//# sourceMappingURL=upload.js.map
