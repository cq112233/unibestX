"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_tabbar_item_1 = common_vendor.resolveComponent("up-tabbar-item");
  const _easycom_up_tabbar_1 = common_vendor.resolveComponent("up-tabbar");
  (_easycom_NavBar_1 + _easycom_up_tabbar_item_1 + _easycom_up_tabbar_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_tabbar_item = () => "../../../../../uni_modules/uview-ultra/components/up-tabbar-item/up-tabbar-item.js";
const _easycom_up_tabbar = () => "../../../../../uni_modules/uview-ultra/components/up-tabbar/up-tabbar.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_tabbar_item + _easycom_up_tabbar + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tabbar",
  setup(__props) {
    const value1 = common_vendor.ref(0);
    const value2 = common_vendor.ref(0);
    const value3 = common_vendor.ref(0);
    function change1(index = null) {
      value1.value = parseInt(index.toString());
    }
    function change2(index = null) {
      value2.value = parseInt(index.toString());
    }
    function change3(index = null) {
      value3.value = parseInt(index.toString());
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Tabbar 底部导航",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-6c6d21f6"
        }),
        b: common_vendor.p({
          text: "首页",
          icon: "home",
          class: "data-v-6c6d21f6"
        }),
        c: common_vendor.p({
          text: "放映厅",
          icon: "photo",
          class: "data-v-6c6d21f6"
        }),
        d: common_vendor.p({
          text: "直播",
          icon: "play-right",
          class: "data-v-6c6d21f6"
        }),
        e: common_vendor.p({
          text: "我的",
          icon: "account",
          class: "data-v-6c6d21f6"
        }),
        f: common_vendor.o(change1, "6c"),
        g: common_vendor.p({
          value: value1.value,
          fixed: false,
          ["safe-area-inset-bottom"]: false,
          class: "data-v-6c6d21f6"
        }),
        h: common_vendor.p({
          text: "首页",
          icon: "home",
          badge: "5",
          class: "data-v-6c6d21f6"
        }),
        i: common_vendor.p({
          text: "消息",
          icon: "chat",
          dot: true,
          class: "data-v-6c6d21f6"
        }),
        j: common_vendor.p({
          text: "我的",
          icon: "account",
          class: "data-v-6c6d21f6"
        }),
        k: common_vendor.o(change2, "29"),
        l: common_vendor.p({
          value: value2.value,
          fixed: false,
          ["safe-area-inset-bottom"]: false,
          class: "data-v-6c6d21f6"
        }),
        m: common_vendor.p({
          text: "发现",
          icon: "search",
          class: "data-v-6c6d21f6"
        }),
        n: common_vendor.p({
          text: "购物车",
          icon: "shopping-cart",
          class: "data-v-6c6d21f6"
        }),
        o: common_vendor.p({
          text: "我的",
          icon: "account",
          class: "data-v-6c6d21f6"
        }),
        p: common_vendor.o(change3, "42"),
        q: common_vendor.p({
          value: value3.value,
          fixed: false,
          ["safe-area-inset-bottom"]: false,
          ["active-color"]: "#fa3534",
          ["inactive-color"]: "#909399",
          class: "data-v-6c6d21f6"
        }),
        r: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-tabbar 底部导航",
          class: "data-v-6c6d21f6"
        }),
        s: common_vendor.gei(_ctx, ""),
        t: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-6c6d21f6"
        }),
        v: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6c6d21f6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/tabbar/tabbar.js.map
