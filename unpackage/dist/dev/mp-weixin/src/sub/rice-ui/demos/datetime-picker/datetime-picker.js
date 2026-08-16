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
  const _easycom_rice_datetime_picker_1 = common_vendor.resolveComponent("rice-datetime-picker");
  (_easycom_NavBar_1 + _easycom_rice_datetime_picker_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_datetime_picker = () => "../../../../../uni_modules/rice-ui/components/rice-datetime-picker/rice-datetime-picker.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_datetime_picker + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "datetime-picker",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const currentDate = common_vendor.ref("2026-08-15");
    const currentTime = common_vendor.ref("12:00:00");
    function onConfirm(e) {
      currentDate.value = e.value;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "DateTimePicker 时间选择",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-94b4cc54"
        }),
        b: currentTheme.value,
        c: common_vendor.o(onConfirm, "af"),
        d: common_vendor.o(($event) => {
          return common_vendor.isRef(currentDate) ? currentDate.value = $event : null;
        }, "17"),
        e: common_vendor.p({
          type: "date",
          ["use-popup"]: false,
          title: "选择日期",
          modelValue: common_vendor.unref(currentDate),
          class: "data-v-94b4cc54"
        }),
        f: common_vendor.t(common_vendor.unref(currentDate)),
        g: currentTheme.value,
        h: common_vendor.o(($event) => {
          return common_vendor.isRef(currentTime) ? currentTime.value = $event : null;
        }, "db"),
        i: common_vendor.p({
          type: "time",
          ["use-popup"]: false,
          title: "选择具体时间",
          modelValue: common_vendor.unref(currentTime),
          class: "data-v-94b4cc54"
        }),
        j: common_vendor.t(common_vendor.unref(currentTime)),
        k: common_vendor.gei(_ctx, ""),
        l: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-94b4cc54"
        }),
        m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-94b4cc54"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/datetime-picker/datetime-picker.js.map
