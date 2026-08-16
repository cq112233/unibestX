import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as _sfc_main$1 } from "../../../../../App.ku.js";
import "../../../../store/index.js";
import { u as useAppStore } from "../../../../store/app.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
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
import "../../../../../uni_modules/rice-ui/libs/store/useConfig.js";
import "../../../../../uni_modules/rice-ui/libs/use/useCountDown/index.js";
import "../../../../../uni_modules/rice-ui/libs/use/useNamespace/index.js";
import "../../../../../uni_modules/rice-ui/libs/use/usePopup/index.js";
import "../../../../../uni_modules/rice-ui/libs/utils/basic.js";
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
import "../../../../../uni_modules/rice-ui/libs/utils/debug.js";
import "../../../../../uni_modules/rice-ui/components/rice-button/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-loading/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-calendar/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-calendar/lunar.js";
import "../../../../../uni_modules/rice-ui/components/rice-cascader/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-dialog/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-dialog/api.js";
import "../../../../../uni_modules/rice-ui/components/rice-datetime-picker/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-picker/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-float-fab/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-swipe-actions-item/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-tabs/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-badge/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-icon/font.js";
import "../../../../../uni_modules/rice-ui/components/rice-uploader/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-form/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-form/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-form-item/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-form-item/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-radio/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-radio-group/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-radio-group/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-checkbox/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-checkbox-group/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-checkbox-group/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-code-input/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-qrcode/type.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/token.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../store/user.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, createSharedDataFor: _createSharedDataFor, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubRiceUiDemosWaterflowWaterflow";
const { computed } = globalThis.Vue;
class CardItem extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          id: { type: Number, optional: false },
          height: { type: String, optional: false }
        };
      },
      name: "CardItem"
    };
  }
  constructor(options, metadata = CardItem.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.id = this.__props__.id;
    this.height = this.__props__.height;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "4a1036d8",
  __className,
  __filename: "src/sub/rice-ui/demos/waterflow/waterflow.uvue",
  __name: "waterflow",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubRiceUiDemosWaterflowWaterflowSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubRiceUiDemosWaterflowWaterflowSharedData", sharedDataClassId: 0 })));
    const __sharedDataScope = _useSharedDataScope(__sharedData);
    const appStore = useAppStore();
    const currentTheme = computed(() => {
      return appStore.state.theme;
    });
    const leftList = [
      new CardItem({ id: 1, height: "120px" }),
      new CardItem({ id: 3, height: "160px" }),
      new CardItem({ id: 5, height: "100px" })
    ];
    const rightList = [
      new CardItem({ id: 2, height: "150px" }),
      new CardItem({ id: 4, height: "110px" }),
      new CardItem({ id: 6, height: "140px" })
    ];
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const n16 = _createSharedDataComponent(_sfc_main$1, "31e75374", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "0b031972", {
            title: "Waterflow 瀑布流",
            "auto-back": true,
            "safe-area-inset-top": true,
            "bg-color": "#ffffff"
          });
          _setSharedData(__sharedData, 1, n0?.sharedData);
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 4, { borderLeftColor: currentTheme.value });
          });
          _createSharedDataFor(_setSharedDataScoped(__sharedData, 2, _createSharedDataVFor(__sharedDataScope, () => {
            return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
          })), () => {
            return leftList;
          }, (__sharedData_VFor0, _for_item0) => {
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData_VFor0, 1, { height: _for_item0.value.height, backgroundColor: currentTheme.value });
            });
            _setSharedData(__sharedData_VFor0, 2, _toDisplayString(_for_item0.value.id));
            return null;
          }, (__sharedData_VFor0, item) => {
            return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(item.id));
          }, 1);
          _createSharedDataFor(_setSharedDataScoped(__sharedData, 3, _createSharedDataVFor(__sharedDataScope, () => {
            return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
          })), () => {
            return rightList;
          }, (__sharedData_VFor1, _for_item1) => {
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData_VFor1, 1, { height: _for_item1.value.height, backgroundColor: currentTheme.value });
            });
            _setSharedData(__sharedData_VFor1, 2, _toDisplayString(_for_item1.value.id));
            return null;
          }, (__sharedData_VFor1, item) => {
            return _setSharedData(__sharedData_VFor1, 0, _toDisplayString(item.id));
          }, 1);
        })
      });
      _setSharedData(__sharedData, 0, n16.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const waterflow = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  waterflow as default
};
//# sourceMappingURL=waterflow.js.map
