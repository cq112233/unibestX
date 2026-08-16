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
const uni_modules_riceUi_components_riceCascader_type = require("../../../../../uni_modules/rice-ui/components/rice-cascader/type.js");
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
  const _easycom_rice_cascader_1 = common_vendor.resolveComponent("rice-cascader");
  (_easycom_NavBar_1 + _easycom_rice_cascader_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_cascader = () => "../../../../../uni_modules/rice-ui/components/rice-cascader/rice-cascader.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_cascader + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "cascader",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const resultText = common_vendor.ref("未选择");
    const options = [
      new uni_modules_riceUi_components_riceCascader_type.CascaderOption({
        disabled: null,
        extend: null,
        text: "浙江省",
        value: "330000",
        children: [
          new uni_modules_riceUi_components_riceCascader_type.CascaderOption({
            disabled: null,
            extend: null,
            text: "杭州市",
            value: "330100",
            children: [
              new uni_modules_riceUi_components_riceCascader_type.CascaderOption({
                disabled: null,
                children: null,
                extend: null,
                text: "西湖区",
                value: "330106"
              }),
              new uni_modules_riceUi_components_riceCascader_type.CascaderOption({
                disabled: null,
                children: null,
                extend: null,
                text: "余杭区",
                value: "330110"
              }),
              new uni_modules_riceUi_components_riceCascader_type.CascaderOption({
                disabled: null,
                children: null,
                extend: null,
                text: "滨江区",
                value: "330108"
              })
            ]
          }),
          new uni_modules_riceUi_components_riceCascader_type.CascaderOption({
            disabled: null,
            extend: null,
            text: "宁波市",
            value: "330200",
            children: [
              new uni_modules_riceUi_components_riceCascader_type.CascaderOption({
                disabled: null,
                children: null,
                extend: null,
                text: "海曙区",
                value: "330203"
              }),
              new uni_modules_riceUi_components_riceCascader_type.CascaderOption({
                disabled: null,
                children: null,
                extend: null,
                text: "江北区",
                value: "330205"
              })
            ]
          })
        ]
      }),
      new uni_modules_riceUi_components_riceCascader_type.CascaderOption({
        disabled: null,
        extend: null,
        text: "江苏省",
        value: "320000",
        children: [
          new uni_modules_riceUi_components_riceCascader_type.CascaderOption({
            disabled: null,
            extend: null,
            text: "南京市",
            value: "320100",
            children: [
              new uni_modules_riceUi_components_riceCascader_type.CascaderOption({
                disabled: null,
                children: null,
                extend: null,
                text: "玄武区",
                value: "320102"
              }),
              new uni_modules_riceUi_components_riceCascader_type.CascaderOption({
                disabled: null,
                children: null,
                extend: null,
                text: "秦淮区",
                value: "320104"
              })
            ]
          }),
          new uni_modules_riceUi_components_riceCascader_type.CascaderOption({
            disabled: null,
            extend: null,
            text: "苏州市",
            value: "320500",
            children: [
              new uni_modules_riceUi_components_riceCascader_type.CascaderOption({
                disabled: null,
                children: null,
                extend: null,
                text: "姑苏区",
                value: "320508"
              }),
              new uni_modules_riceUi_components_riceCascader_type.CascaderOption({
                disabled: null,
                children: null,
                extend: null,
                text: "虎丘区",
                value: "320505"
              })
            ]
          })
        ]
      })
    ];
    function onFinish(e) {
      const names = e.selectedOptions.map((item) => {
        return item.text;
      });
      resultText.value = names.join(" / ");
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Cascader 级联选择",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-c4d2b46a"
        }),
        b: currentTheme.value,
        c: common_vendor.o(onFinish, "e3"),
        d: common_vendor.p({
          options,
          ["use-popup"]: false,
          ["active-color"]: currentTheme.value,
          title: "选择所在地区",
          class: "data-v-c4d2b46a"
        }),
        e: common_vendor.t(common_vendor.unref(resultText)),
        f: common_vendor.gei(_ctx, ""),
        g: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-c4d2b46a"
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c4d2b46a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/cascader/cascader.js.map
