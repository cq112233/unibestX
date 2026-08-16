"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
require("../../../../../uni_modules/rice-ui/libs/store/useConfig.js");
require("../../../../../uni_modules/rice-ui/libs/use/useCountDown/index.js");
require("../../../../../uni_modules/rice-ui/libs/use/useNamespace/index.js");
require("../../../../../uni_modules/rice-ui/libs/use/usePopup/index.js");
require("../../../../../uni_modules/rice-ui/libs/use/useRelation/useChildren.js");
require("../../../../../uni_modules/rice-ui/libs/use/useRelation/useParent.js");
require("../../../../../uni_modules/rice-ui/libs/use/useSafeArea/index.js");
require("../../../../../uni_modules/rice-ui/libs/use/useTouch/index.js");
require("../../../../../uni_modules/rice-ui/libs/plugin/coloruts/constant.js");
require("../../../../../uni_modules/rice-ui/libs/plugin/coloruts/type.js");
require("../../../../../uni_modules/rice-ui/libs/plugin/dateuts/type.js");
require("../../../../../uni_modules/rice-ui/libs/plugin/dateuts/locale.js");
require("../../../../../uni_modules/rice-ui/components/rice-action-sheet/type.js");
require("../../../../../uni_modules/rice-ui/components/rice-action-sheet/api.js");
require("../../../../../uni_modules/rice-ui/components/rice-button/type.js");
require("../../../../../uni_modules/rice-ui/components/rice-calendar/type.js");
require("../../../../../uni_modules/rice-ui/components/rice-cascader/type.js");
require("../../../../../uni_modules/rice-ui/components/rice-dialog/type.js");
require("../../../../../uni_modules/rice-ui/components/rice-dialog/api.js");
require("../../../../../uni_modules/rice-ui/components/rice-datetime-picker/type.js");
require("../../../../../uni_modules/rice-ui/components/rice-float-fab/type.js");
require("../../../../../uni_modules/rice-ui/components/rice-loading/type.js");
const uni_modules_riceUi_components_ricePicker_type = require("../../../../../uni_modules/rice-ui/components/rice-picker/type.js");
require("../../../../../uni_modules/rice-ui/libs/utils/basic.js");
require("../../../../../uni_modules/rice-ui/components/rice-swipe-actions-item/type.js");
require("../../../../../uni_modules/rice-ui/components/rice-tabs/type.js");
require("../../../../../uni_modules/rice-ui/components/rice-icon/font.js");
require("../../../../../uni_modules/rice-ui/components/rice-uploader/type.js");
require("../../../../../uni_modules/rice-ui/components/rice-form/index.js");
require("../../../../../uni_modules/rice-ui/components/rice-radio/type.js");
require("../../../../../uni_modules/rice-ui/components/rice-radio-group/index.js");
require("../../../../../uni_modules/rice-ui/components/rice-checkbox/type.js");
require("../../../../../uni_modules/rice-ui/components/rice-checkbox-group/index.js");
require("../../../../../uni_modules/rice-ui/components/rice-code-input/type.js");
require("../../../../../uni_modules/rice-ui/components/rice-qrcode/type.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_picker_1 = common_vendor.resolveComponent("rice-picker");
  (_easycom_NavBar_1 + _easycom_rice_picker_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_picker = () => "../../../../../uni_modules/rice-ui/components/rice-picker/rice-picker.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_picker + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "picker",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const selectedCity = common_vendor.ref("杭州");
    const columns = [
      [
        new uni_modules_riceUi_components_ricePicker_type.PickerOption({
          disabled: null,
          children: null,
          extend: null,
          text: "杭州",
          value: "hangzhou"
        }),
        new uni_modules_riceUi_components_ricePicker_type.PickerOption({
          disabled: null,
          children: null,
          extend: null,
          text: "宁波",
          value: "ningbo"
        }),
        new uni_modules_riceUi_components_ricePicker_type.PickerOption({
          disabled: null,
          children: null,
          extend: null,
          text: "温州",
          value: "wenzhou"
        }),
        new uni_modules_riceUi_components_ricePicker_type.PickerOption({
          disabled: null,
          children: null,
          extend: null,
          text: "嘉兴",
          value: "jiaxing"
        }),
        new uni_modules_riceUi_components_ricePicker_type.PickerOption({
          disabled: null,
          children: null,
          extend: null,
          text: "绍兴",
          value: "shaoxing"
        })
      ]
    ];
    function onConfirm(e) {
      if (e.selectedOptions.length > 0) {
        selectedCity.value = e.selectedOptions[0].text;
      }
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Picker 选择器",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-41b8bdfc"
        }),
        b: currentTheme.value,
        c: common_vendor.o(onConfirm, "8a"),
        d: common_vendor.p({
          columns,
          ["use-popup"]: false,
          title: "选择城市",
          class: "data-v-41b8bdfc"
        }),
        e: common_vendor.t(common_vendor.unref(selectedCity)),
        f: common_vendor.gei(_ctx, ""),
        g: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-41b8bdfc"
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-41b8bdfc"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/picker/picker.js.map
