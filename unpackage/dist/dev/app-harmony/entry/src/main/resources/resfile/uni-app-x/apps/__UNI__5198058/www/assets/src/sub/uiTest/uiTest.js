import { l as logoImg } from "./images/logo.js";
import { _ as _sfc_main$1 } from "../../../App.ku.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
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
import "../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh-CN.js";
import "../../i18n/locales/en-US.js";
import "../../utils/systemInfo.js";
import "../../store/index.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/token.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../store/user.js";
import "../../store/app.js";
import "../../../uni_modules/rice-ui/libs/store/useConfig.js";
import "../../../uni_modules/rice-ui/libs/use/useCountDown/index.js";
import "../../../uni_modules/rice-ui/libs/use/useNamespace/index.js";
import "../../../uni_modules/rice-ui/libs/use/usePopup/index.js";
import "../../../uni_modules/rice-ui/libs/utils/basic.js";
import "../../../uni_modules/rice-ui/libs/use/useRelation/useChildren.js";
import "../../../uni_modules/rice-ui/libs/use/useRelation/useParent.js";
import "../../../uni_modules/rice-ui/libs/use/useSafeArea/index.js";
import "../../../uni_modules/rice-ui/libs/use/useTouch/index.js";
import "../../../uni_modules/rice-ui/libs/plugin/coloruts/constant.js";
import "../../../uni_modules/rice-ui/libs/plugin/coloruts/type.js";
import "../../../uni_modules/rice-ui/libs/plugin/dateuts/type.js";
import "../../../uni_modules/rice-ui/libs/plugin/dateuts/locale.js";
import "../../../uni_modules/rice-ui/components/rice-action-sheet/type.js";
import "../../../uni_modules/rice-ui/components/rice-action-sheet/api.js";
import "../../../uni_modules/rice-ui/libs/utils/debug.js";
import "../../../uni_modules/rice-ui/components/rice-button/type.js";
import "../../../uni_modules/rice-ui/components/rice-loading/type.js";
import "../../../uni_modules/rice-ui/components/rice-calendar/type.js";
import "../../../uni_modules/rice-ui/components/rice-calendar/lunar.js";
import "../../../uni_modules/rice-ui/components/rice-cascader/type.js";
import "../../../uni_modules/rice-ui/components/rice-dialog/type.js";
import "../../../uni_modules/rice-ui/components/rice-dialog/api.js";
import "../../../uni_modules/rice-ui/components/rice-datetime-picker/type.js";
import "../../../uni_modules/rice-ui/components/rice-picker/type.js";
import "../../../uni_modules/rice-ui/components/rice-float-fab/type.js";
import "../../../uni_modules/rice-ui/components/rice-swipe-actions-item/type.js";
import "../../../uni_modules/rice-ui/components/rice-tabs/type.js";
import "../../../uni_modules/rice-ui/components/rice-badge/type.js";
import "../../../uni_modules/rice-ui/components/rice-icon/font.js";
import "../../../uni_modules/rice-ui/components/rice-uploader/type.js";
import "../../../uni_modules/rice-ui/components/rice-form/index.js";
import "../../../uni_modules/rice-ui/components/rice-form/type.js";
import "../../../uni_modules/rice-ui/components/rice-form-item/index.js";
import "../../../uni_modules/rice-ui/components/rice-form-item/type.js";
import "../../../uni_modules/rice-ui/components/rice-radio/type.js";
import "../../../uni_modules/rice-ui/components/rice-radio-group/index.js";
import "../../../uni_modules/rice-ui/components/rice-radio-group/type.js";
import "../../../uni_modules/rice-ui/components/rice-checkbox/type.js";
import "../../../uni_modules/rice-ui/components/rice-checkbox-group/index.js";
import "../../../uni_modules/rice-ui/components/rice-checkbox-group/type.js";
import "../../../uni_modules/rice-ui/components/rice-code-input/type.js";
import "../../../uni_modules/rice-ui/components/rice-qrcode/type.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, setSharedDataAttr: _setSharedDataAttr, unref: _unref, toSharedDataString: _toSharedDataString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponent: _createSharedDataComponent, setSharedData: _setSharedData } = globalThis.Vue;
const __className = "GenSrcSubUiTestUiTest";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "25e11a30",
  __className,
  __filename: "src/sub/uiTest/uiTest.uvue",
  __name: "uiTest",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUiTestUiTestSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUiTestUiTestSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const logoSrc = logoImg;
    return () => {
      "raw js";
      const n9 = _createSharedDataComponent(_sfc_main$1, "86c4cc4a", null, {
        "default": () => {
          _renderSharedDataEffect(() => {
            return _setSharedDataAttr(__sharedData, 1, _toSharedDataString(_unref(logoSrc)));
          });
        }
      });
      _setSharedData(__sharedData, 0, n9.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const uiTest = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  uiTest as default
};
//# sourceMappingURL=uiTest.js.map
