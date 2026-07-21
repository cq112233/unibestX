"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
if (!Array) {
  const _easycom_up_card_1 = common_vendor.resolveComponent("up-card");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_loading_icon_1 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_list_1 = common_vendor.resolveComponent("up-list");
  const _easycom_up_divider_1 = common_vendor.resolveComponent("up-divider");
  (_easycom_up_card_1 + _easycom_up_icon_1 + _easycom_up_loading_icon_1 + _easycom_up_list_1 + _easycom_up_divider_1)();
}
const _easycom_up_card = () => "../../../../uni_modules/uview-ultra/components/up-card/up-card.js";
const _easycom_up_icon = () => "../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
const _easycom_up_loading_icon = () => "../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
const _easycom_up_list = () => "../../../../uni_modules/uview-ultra/components/up-list/up-list.js";
const _easycom_up_divider = () => "../../../../uni_modules/uview-ultra/components/up-divider/up-divider.js";
if (!Math) {
  (_easycom_up_card + _easycom_up_icon + _easycom_up_loading_icon + _easycom_up_list + _easycom_up_divider)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "DemoShow",
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
          listItems.value.length + i;
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
          title: "基础卡片",
          ["sub-title"]: "副标题",
          margin: "0",
          ["show-foot"]: false,
          class: "data-v-8c0664b7"
        }),
        b: common_vendor.p({
          title: "带缩略图",
          thumb: common_vendor.unref(common_assets.logoImg),
          ["thumb-circle"]: true,
          ["thumb-width"]: "36px",
          margin: "0",
          class: "data-v-8c0664b7"
        }),
        c: common_vendor.f(listItems.value, (item, idx, i0) => {
          return {
            a: "8c0664b7-3-" + i0 + ",8c0664b7-2",
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.desc),
            d: idx
          };
        }),
        d: common_vendor.p({
          name: "account",
          size: "20",
          color: "#ffffff",
          class: "data-v-8c0664b7"
        }),
        e: listLoading.value
      }, listLoading.value ? {
        f: common_vendor.p({
          mode: "circle",
          size: "20",
          class: "data-v-8c0664b7"
        })
      } : {}, {
        g: common_vendor.o(onListLoadMore, "ec"),
        h: common_vendor.o(onListRefresh, "db"),
        i: common_vendor.p({
          height: 300,
          ["lower-threshold"]: 20,
          ["refresher-enabled"]: true,
          ["refresher-triggered"]: listRefreshing.value,
          class: "data-v-8c0664b7"
        }),
        j: common_vendor.p({
          text: "展示组件结束",
          class: "data-v-8c0664b7"
        }),
        k: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        l: `${_ctx.u_s_b_h}px`,
        m: `${_ctx.u_s_a_i_b}px`,
        n: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8c0664b7"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/components/DemoShow.js.map
