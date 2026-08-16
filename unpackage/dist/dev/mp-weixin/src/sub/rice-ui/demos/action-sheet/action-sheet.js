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
const uni_modules_riceUi_components_riceActionSheet_type = require("../../../../../uni_modules/rice-ui/components/rice-action-sheet/type.js");
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
  const _easycom_rice_button_1 = common_vendor.resolveComponent("rice-button");
  const _easycom_rice_action_sheet_1 = common_vendor.resolveComponent("rice-action-sheet");
  (_easycom_NavBar_1 + _easycom_rice_button_1 + _easycom_rice_action_sheet_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_button = () => "../../../../../uni_modules/rice-ui/components/rice-button/rice-button.js";
const _easycom_rice_action_sheet = () => "../../../../../uni_modules/rice-ui/components/rice-action-sheet/rice-action-sheet.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_button + _easycom_rice_action_sheet + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "action-sheet",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const showActionSheet1 = common_vendor.ref(false);
    const showActionSheet2 = common_vendor.ref(false);
    const actions1 = [
      new uni_modules_riceUi_components_riceActionSheet_type.ActionSheetAction({
        value: null,
        subname: null,
        color: null,
        icon: null,
        iconSize: null,
        iconFontFamily: null,
        disabled: null,
        name: "选项一"
      }),
      new uni_modules_riceUi_components_riceActionSheet_type.ActionSheetAction({
        value: null,
        subname: null,
        color: null,
        icon: null,
        iconSize: null,
        iconFontFamily: null,
        disabled: null,
        name: "选项二"
      }),
      new uni_modules_riceUi_components_riceActionSheet_type.ActionSheetAction({
        value: null,
        subname: null,
        color: null,
        icon: null,
        iconSize: null,
        iconFontFamily: null,
        disabled: null,
        name: "选项三"
      })
    ];
    const actions2 = [
      new uni_modules_riceUi_components_riceActionSheet_type.ActionSheetAction({
        value: null,
        color: null,
        icon: null,
        iconSize: null,
        iconFontFamily: null,
        disabled: null,
        name: "分享到微信",
        subname: "分享给微信好友"
      }),
      new uni_modules_riceUi_components_riceActionSheet_type.ActionSheetAction({
        value: null,
        color: null,
        icon: null,
        iconSize: null,
        iconFontFamily: null,
        disabled: null,
        name: "保存到相册",
        subname: "保存高清图片"
      }),
      new uni_modules_riceUi_components_riceActionSheet_type.ActionSheetAction({
        value: null,
        subname: null,
        icon: null,
        iconSize: null,
        iconFontFamily: null,
        disabled: null,
        name: "删除该项",
        color: "#ee0a24"
      })
    ];
    function onSelect(action) {
      common_vendor.index.showToast({
        title: `选择了: ${action.name}`,
        icon: "none"
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "ActionSheet 动作面板",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-235175d6"
        }),
        b: currentTheme.value,
        c: common_vendor.o(($event) => {
          return showActionSheet1.value = true;
        }, "ce"),
        d: common_vendor.p({
          type: "primary",
          color: currentTheme.value,
          text: "打开基础动作面板",
          class: "data-v-235175d6"
        }),
        e: common_vendor.o(onSelect, "1a"),
        f: common_vendor.o(($event) => {
          return common_vendor.isRef(showActionSheet1) ? showActionSheet1.value = $event : null;
        }, "e3"),
        g: common_vendor.p({
          actions: actions1,
          ["show-cancel"]: true,
          title: "请选择操作",
          show: common_vendor.unref(showActionSheet1),
          class: "data-v-235175d6"
        }),
        h: currentTheme.value,
        i: common_vendor.o(($event) => {
          return showActionSheet2.value = true;
        }, "c0"),
        j: common_vendor.p({
          type: "warning",
          text: "打开带描述动作面板",
          class: "data-v-235175d6"
        }),
        k: common_vendor.o(onSelect, "74"),
        l: common_vendor.o(($event) => {
          return common_vendor.isRef(showActionSheet2) ? showActionSheet2.value = $event : null;
        }, "58"),
        m: common_vendor.p({
          actions: actions2,
          ["show-cancel"]: true,
          show: common_vendor.unref(showActionSheet2),
          class: "data-v-235175d6"
        }),
        n: common_vendor.gei(_ctx, ""),
        o: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-235175d6"
        }),
        p: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-235175d6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/action-sheet/action-sheet.js.map
