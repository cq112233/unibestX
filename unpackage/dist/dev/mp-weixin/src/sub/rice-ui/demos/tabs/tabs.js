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
require("../../../../../uni_modules/rice-ui/components/rice-picker/type.js");
require("../../../../../uni_modules/rice-ui/libs/utils/basic.js");
require("../../../../../uni_modules/rice-ui/components/rice-swipe-actions-item/type.js");
const uni_modules_riceUi_components_riceTabs_type = require("../../../../../uni_modules/rice-ui/components/rice-tabs/type.js");
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
  const _easycom_rice_tabs_1 = common_vendor.resolveComponent("rice-tabs");
  (_easycom_NavBar_1 + _easycom_rice_tabs_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_tabs = () => "../../../../../uni_modules/rice-ui/components/rice-tabs/rice-tabs.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_tabs + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tabs",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const tabIndex1 = common_vendor.ref(0);
    const tabIndex2 = common_vendor.ref(0);
    const tabList1 = [
      new uni_modules_riceUi_components_riceTabs_type.TabsOptions({
        value: null,
        disabled: null,
        badge: null,
        name: "关注"
      }),
      new uni_modules_riceUi_components_riceTabs_type.TabsOptions({
        value: null,
        disabled: null,
        badge: null,
        name: "推荐"
      }),
      new uni_modules_riceUi_components_riceTabs_type.TabsOptions({
        value: null,
        disabled: null,
        badge: null,
        name: "热榜"
      })
    ];
    const tabList2 = [
      new uni_modules_riceUi_components_riceTabs_type.TabsOptions({
        value: null,
        disabled: null,
        badge: null,
        name: "综合"
      }),
      new uni_modules_riceUi_components_riceTabs_type.TabsOptions({
        value: null,
        disabled: null,
        badge: null,
        name: "前端"
      }),
      new uni_modules_riceUi_components_riceTabs_type.TabsOptions({
        value: null,
        disabled: null,
        badge: null,
        name: "Android"
      }),
      new uni_modules_riceUi_components_riceTabs_type.TabsOptions({
        value: null,
        disabled: null,
        badge: null,
        name: "iOS"
      }),
      new uni_modules_riceUi_components_riceTabs_type.TabsOptions({
        value: null,
        disabled: null,
        badge: null,
        name: "Harmony"
      }),
      new uni_modules_riceUi_components_riceTabs_type.TabsOptions({
        value: null,
        disabled: null,
        badge: null,
        name: "AI"
      }),
      new uni_modules_riceUi_components_riceTabs_type.TabsOptions({
        value: null,
        disabled: null,
        badge: null,
        name: "工具"
      })
    ];
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Tabs 选项卡",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-5082b660"
        }),
        b: currentTheme.value,
        c: common_vendor.o(($event) => {
          return common_vendor.isRef(tabIndex1) ? tabIndex1.value = $event : null;
        }, "78"),
        d: common_vendor.p({
          list: tabList1,
          color: currentTheme.value,
          modelValue: common_vendor.unref(tabIndex1),
          class: "data-v-5082b660"
        }),
        e: common_vendor.t(tabList1[common_vendor.unref(tabIndex1)].name),
        f: currentTheme.value,
        g: common_vendor.o(($event) => {
          return common_vendor.isRef(tabIndex2) ? tabIndex2.value = $event : null;
        }, "b2"),
        h: common_vendor.p({
          list: tabList2,
          color: currentTheme.value,
          modelValue: common_vendor.unref(tabIndex2),
          class: "data-v-5082b660"
        }),
        i: common_vendor.t(tabList2[common_vendor.unref(tabIndex2)].name),
        j: common_vendor.gei(_ctx, ""),
        k: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-5082b660"
        }),
        l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5082b660"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/tabs/tabs.js.map
