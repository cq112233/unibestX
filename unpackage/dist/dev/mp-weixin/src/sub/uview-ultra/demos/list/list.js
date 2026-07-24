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
      new UTSJSONObject({ title: "列表 1 - 项目 01", desc: "支持下拉刷新与触底加载" }),
      new UTSJSONObject({ title: "列表 1 - 项目 02", desc: "基于 scroll-view 封装" }),
      new UTSJSONObject({ title: "列表 1 - 项目 03", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 04", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 05", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 06", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 07", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 08", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 09", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 10", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 11", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 12", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 13", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 14", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 15", desc: "支持单指内部滚动" })
    ]);
    const staticListItems = common_vendor.ref([
      new UTSJSONObject({ title: "列表 2 - 项目 01", desc: "静态列表第 1 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 02", desc: "静态列表第 2 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 03", desc: "静态列表第 3 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 04", desc: "静态列表第 4 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 05", desc: "静态列表第 5 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 06", desc: "静态列表第 6 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 07", desc: "静态列表第 7 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 08", desc: "静态列表第 8 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 09", desc: "静态列表第 9 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 10", desc: "静态列表第 10 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 11", desc: "静态列表第 11 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 12", desc: "静态列表第 12 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 13", desc: "静态列表第 13 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 14", desc: "静态列表第 14 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 15", desc: "静态列表第 15 项内容" })
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
          title: "up-list 双列表",
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
        f: common_vendor.o(onListLoadMore, "63"),
        g: common_vendor.o(onListRefresh, "45"),
        h: common_vendor.p({
          height: 380,
          ["lower-threshold"]: 20,
          ["refresher-enabled"]: true,
          ["refresher-triggered"]: listRefreshing.value,
          class: "bg-white rounded-8px shadow-xs data-v-47edb2b5"
        }),
        i: common_vendor.f(staticListItems.value, (item, idx, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.desc),
            c: idx
          };
        }),
        j: common_vendor.p({
          height: 280,
          class: "bg-white rounded-8px shadow-xs data-v-47edb2b5"
        }),
        k: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-list 列表",
          ["disable-scroll"]: true,
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
