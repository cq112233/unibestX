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
const uni_modules_riceUi_components_riceSwipeActionsItem_type = require("../../../../../uni_modules/rice-ui/components/rice-swipe-actions-item/type.js");
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
  const _easycom_rice_swipe_actions_item_1 = common_vendor.resolveComponent("rice-swipe-actions-item");
  const _easycom_rice_swipe_actions_1 = common_vendor.resolveComponent("rice-swipe-actions");
  (_easycom_NavBar_1 + _easycom_rice_swipe_actions_item_1 + _easycom_rice_swipe_actions_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_swipe_actions_item = () => "../../../../../uni_modules/rice-ui/components/rice-swipe-actions-item/rice-swipe-actions-item.js";
const _easycom_rice_swipe_actions = () => "../../../../../uni_modules/rice-ui/components/rice-swipe-actions/rice-swipe-actions.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_swipe_actions_item + _easycom_rice_swipe_actions + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "swipe-actions",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const leftOptions = common_vendor.computed(() => {
      return [
        new uni_modules_riceUi_components_riceSwipeActionsItem_type.SwipeActionsMenu({
          icon: null,
          iconSize: null,
          disabled: null,
          text: "已读",
          style: new common_vendor.UTSJSONObject({
            backgroundColor: "#10b981",
            color: "#ffffff"
          })
        })
      ];
    });
    const rightOptions = common_vendor.computed(() => {
      return [
        new uni_modules_riceUi_components_riceSwipeActionsItem_type.SwipeActionsMenu({
          icon: null,
          iconSize: null,
          disabled: null,
          text: "收藏",
          style: new common_vendor.UTSJSONObject({
            backgroundColor: currentTheme.value,
            color: "#ffffff"
          })
        }),
        new uni_modules_riceUi_components_riceSwipeActionsItem_type.SwipeActionsMenu({
          icon: null,
          iconSize: null,
          disabled: null,
          text: "删除",
          style: new common_vendor.UTSJSONObject({
            backgroundColor: "#f56c6c",
            color: "#ffffff"
          })
        })
      ];
    });
    function onClickAction(e) {
      if (e.position == "cell") {
        return null;
      }
      common_vendor.index.showToast({
        title: `点击了${e.position == "left" ? "左侧" : "右侧"}第 ${e.index + 1} 个操作`,
        icon: "none"
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "SwipeActions 滑动单元格",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-6ad8f7f5"
        }),
        b: currentTheme.value,
        c: common_vendor.o(onClickAction, "38"),
        d: common_vendor.p({
          ["right-menu"]: rightOptions.value,
          class: "data-v-6ad8f7f5"
        }),
        e: common_vendor.o(onClickAction, "75"),
        f: common_vendor.p({
          ["right-menu"]: rightOptions.value,
          class: "data-v-6ad8f7f5"
        }),
        g: common_vendor.p({
          class: "data-v-6ad8f7f5"
        }),
        h: currentTheme.value,
        i: common_vendor.o(onClickAction, "b9"),
        j: common_vendor.p({
          ["left-menu"]: leftOptions.value,
          ["right-menu"]: rightOptions.value,
          class: "data-v-6ad8f7f5"
        }),
        k: common_vendor.p({
          class: "data-v-6ad8f7f5"
        }),
        l: common_vendor.gei(_ctx, ""),
        m: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-6ad8f7f5"
        }),
        n: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6ad8f7f5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/swipe-actions/swipe-actions.js.map
