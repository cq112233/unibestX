"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_swipe_action_item_1 = common_vendor.resolveComponent("up-swipe-action-item");
  const _easycom_up_swipe_action_1 = common_vendor.resolveComponent("up-swipe-action");
  (_easycom_NavBar_1 + _easycom_up_swipe_action_item_1 + _easycom_up_swipe_action_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_swipe_action_item = () => "../../../../../uni_modules/uview-ultra/components/up-swipe-action-item/up-swipe-action-item.js";
const _easycom_up_swipe_action = () => "../../../../../uni_modules/uview-ultra/components/up-swipe-action/up-swipe-action.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_swipe_action_item + _easycom_up_swipe_action + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "swipe-action",
  setup(__props) {
    const options1 = common_vendor.ref([
      new UTSJSONObject({
        text: "删除",
        style: new UTSJSONObject({
          backgroundColor: "#f56c6c"
        })
      })
    ]);
    const options2 = common_vendor.ref([
      new UTSJSONObject({
        text: "置顶",
        style: new UTSJSONObject({
          backgroundColor: "#2979ff"
        })
      }),
      new UTSJSONObject({
        text: "删除",
        style: new UTSJSONObject({
          backgroundColor: "#f56c6c"
        })
      })
    ]);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "SwipeAction 滑动操作",
          ["auto-back"]: true,
          class: "data-v-569ddfc7"
        }),
        b: common_vendor.p({
          options: options1.value,
          class: "data-v-569ddfc7"
        }),
        c: common_vendor.p({
          class: "data-v-569ddfc7"
        }),
        d: common_vendor.p({
          options: options2.value,
          class: "data-v-569ddfc7"
        }),
        e: common_vendor.p({
          class: "data-v-569ddfc7"
        }),
        f: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-swipe-action 滑动操作",
          class: "data-v-569ddfc7"
        }),
        g: common_vendor.gei(_ctx, ""),
        h: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-569ddfc7"
        }),
        i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-569ddfc7"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/swipe-action/swipe-action.js.map
