"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_loading_icon_1 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_list_1 = common_vendor.resolveComponent("up-list");
  (_easycom_NavBar_1 + _easycom_up_icon_1 + _easycom_up_loading_icon_1 + _easycom_up_list_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_icon = () => "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
const _easycom_up_loading_icon = () => "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
const _easycom_up_list = () => "../../../../../uni_modules/uview-ultra/components/up-list/up-list.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_icon + _easycom_up_loading_icon + _easycom_up_list + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "list",
  setup(__props) {
    const listItems = common_vendor.ref([
      new UTSJSONObject({ title: "List 列表项 01", desc: "这是高性能列表的第一项" }),
      new UTSJSONObject({ title: "List 列表项 02", desc: "支持下拉刷新和滚动加载更多" }),
      new UTSJSONObject({ title: "List 列表项 03", desc: "基于 scroll-view 封装" }),
      new UTSJSONObject({ title: "List 列表项 04", desc: "适用于长列表滚动场景" }),
      new UTSJSONObject({ title: "List 列表项 05", desc: "内置 refresher 下拉刷新能力" }),
      new UTSJSONObject({ title: "List 列表项 06", desc: "支持 scrolltolower 触底加载" })
    ]);
    const listLoading = common_vendor.ref(false);
    const listRefreshing = common_vendor.ref(false);
    let listLoadCount = 1;
    function onListLoadMore() {
      if (listLoading.value)
        return null;
      listLoading.value = true;
      setTimeout(() => {
        listLoadCount += 1;
        const newItems = [];
        for (let i = 1; i <= 3; i++) {
          newItems.push(new UTSJSONObject({
            title: `加载项 ${listLoadCount}-${i}`,
            desc: `这是第 ${listLoadCount} 批加载的第 ${i} 条数据`
          }));
        }
        listItems.value = listItems.value.concat(newItems);
        listLoading.value = false;
        common_vendor.index.showToast({ title: `加载了 ${newItems.length} 条`, icon: "none", duration: 1500 });
      }, 1e3);
    }
    function onListRefresh() {
      listRefreshing.value = true;
      setTimeout(() => {
        listRefreshing.value = false;
        common_vendor.index.showToast({ title: "刷新完成", icon: "none", duration: 1500 });
      }, 1500);
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: common_vendor.p({
          title: "up-list 列表",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-47edb2b5"
        }),
        b: common_vendor.f(listItems.value, (item, idx, i0) => {
          return {
            a: "47edb2b5-4-" + i0 + ",47edb2b5-3",
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.desc),
            d: idx
          };
        }),
        c: common_vendor.p({
          name: "account",
          size: "20",
          color: "#ffffff",
          class: "data-v-47edb2b5"
        }),
        d: listLoading.value
      }, listLoading.value ? {
        e: common_vendor.p({
          mode: "circle",
          size: "20",
          class: "data-v-47edb2b5"
        })
      } : {}, {
        f: common_vendor.o(onListLoadMore, "aa"),
        g: common_vendor.o(onListRefresh, "f6"),
        h: common_vendor.p({
          height: 300,
          ["lower-threshold"]: 20,
          ["refresher-enabled"]: true,
          ["refresher-triggered"]: listRefreshing.value,
          class: "data-v-47edb2b5"
        }),
        i: common_vendor.f(10, (item, idx, i0) => {
          return {
            a: common_vendor.t(item),
            b: idx
          };
        }),
        j: common_vendor.p({
          height: 200,
          class: "data-v-47edb2b5"
        }),
        k: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-list 列表",
          class: "data-v-47edb2b5"
        }),
        l: common_vendor.gei(_ctx, ""),
        m: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-47edb2b5"
        }),
        n: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-47edb2b5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/list/list.js.map
