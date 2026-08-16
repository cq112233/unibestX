import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/rice-ui/components/rice-uploader/rice-uploader.js";
import { _ as _sfc_main$1 } from "../../../../../App.ku.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/rice-ui/libs/store/useConfig.js";
import "../../../../../uni_modules/rice-ui/libs/use/useCountDown/index.js";
import "../../../../../uni_modules/rice-ui/libs/use/useNamespace/index.js";
import "../../../../../uni_modules/rice-ui/libs/use/usePopup/index.js";
import "../../../../../uni_modules/rice-ui/libs/use/useRelation/useChildren.js";
import "../../../../../uni_modules/rice-ui/libs/use/useRelation/useParent.js";
import "../../../../../uni_modules/rice-ui/libs/use/useSafeArea/index.js";
import "../../../../../uni_modules/rice-ui/libs/use/useTouch/index.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/coloruts/constant.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/coloruts/type.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/dateuts/type.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/dateuts/locale.js";
import "../../../../../uni_modules/rice-ui/components/rice-action-sheet/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-action-sheet/api.js";
import "../../../../../uni_modules/rice-ui/components/rice-button/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-calendar/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-cascader/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-dialog/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-dialog/api.js";
import "../../../../../uni_modules/rice-ui/components/rice-datetime-picker/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-float-fab/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-loading/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-picker/type.js";
import "../../../../../uni_modules/rice-ui/libs/utils/basic.js";
import "../../../../../uni_modules/rice-ui/components/rice-swipe-actions-item/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-tabs/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-icon/font.js";
import { U as UploaderFileItem } from "../../../../../uni_modules/rice-ui/components/rice-uploader/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-form/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-radio/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-radio-group/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-checkbox/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-checkbox-group/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-code-input/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-qrcode/type.js";
import { u as useAppStore } from "../../../../store/app.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../../uni_modules/rice-ui/components/rice-icon/rice-icon.js";
import "../../../../../uni_modules/rice-ui/components/rice-icon/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-loading/rice-loading.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/coloruts/conversion.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/coloruts/utils.js";
import "../../../../../uni_modules/rice-ui/components/rice-loading/useLoading.js";
import "../../../../../uni_modules/rice-ui/components/rice-uploader/utils.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/store.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/config.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
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
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/token.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../store/user.js";
import "../../../../../uni_modules/rice-ui/libs/utils/debug.js";
import "../../../../../uni_modules/rice-ui/components/rice-calendar/lunar.js";
import "../../../../../uni_modules/rice-ui/components/rice-badge/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-form/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-form-item/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-form-item/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-radio-group/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-checkbox-group/type.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubRiceUiDemosUploaderUploader";
const { computed, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "98affbf0",
  __className,
  __filename: "src/sub/rice-ui/demos/uploader/uploader.uvue",
  __name: "uploader",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubRiceUiDemosUploaderUploaderSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubRiceUiDemosUploaderUploaderSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const appStore = useAppStore();
    const currentTheme = computed(() => {
      return appStore.state.theme;
    });
    const fileList = ref([
      new UploaderFileItem({
        poster: null,
        fileName: null,
        status: null,
        fileType: null,
        message: null,
        percent: null,
        size: null,
        duration: null,
        deletable: null,
        uid: null,
        name: null,
        action: null,
        formData: null,
        header: null,
        url: "/static/logo.png"
      })
    ]);
    function onUpdateFileList(files) {
      fileList.value = files;
    }
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_rice_uploader = __easycom_1;
      const n6 = _createSharedDataComponent(_sfc_main$1, "a33267fc", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "1e72b50b", {
            title: "Uploader 上传",
            "auto-back": true,
            "safe-area-inset-top": true,
            "bg-color": "#ffffff"
          });
          _setSharedData(__sharedData, 1, n0?.sharedData);
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 3, { borderLeftColor: currentTheme.value });
          });
          const n2 = _createSharedDataComponentWithFallback(_component_rice_uploader, "a0384b80", {
            "model-value": () => {
              return fileList.value;
            },
            "max-count": 3,
            "onUpdate:modelValue": () => {
              return onUpdateFileList;
            }
          });
          _setSharedData(__sharedData, 2, n2?.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n6.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const uploader = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  uploader as default
};
//# sourceMappingURL=uploader.js.map
