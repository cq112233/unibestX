"use strict";
const common_vendor = require("../../common/vendor.js");
const src_tabbar_store = require("./store.js");
const src_utils_systemInfo = require("../utils/systemInfo.js");
if (!Math) {
  common_vendor.unref(TabbarItem)();
}
const TabbarItem = () => "./TabbarItem.js";
const TABBAR_HEIGHT = 50;
const TABBAR_CONTAINER_HEIGHT = 80;
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const safeAreaBottom = common_vendor.computed(() => {
      const insets = src_utils_systemInfo.safeAreaInsets.value;
      if (insets != null) {
        return insets.bottom;
      }
      return 0;
    });
    function handleClickBulge() {
      common_vendor.index.navigateTo({
        url: "/src/pages/ai/ai"
      });
    }
    function handleClick(index) {
      if (index == src_tabbar_store.curIdx.value)
        return null;
      const list = src_tabbar_store.tabbarList;
      if (list.length <= index)
        return null;
      if (list[index].isBulge) {
        handleClickBulge();
        return null;
      }
      const url = list[index].pagePath;
      src_tabbar_store.setCurIdx(index);
      common_vendor.index.switchTab({ url });
    }
    common_vendor.onMounted(() => {
      src_tabbar_store.syncCurIdxByCurrentPage();
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: `${TABBAR_HEIGHT + common_vendor.unref(safeAreaBottom)}px`,
        b: common_vendor.f(common_vendor.unref(src_tabbar_store.tabbarList), (item, index, i0) => {
          return {
            a: "083506f5-0-" + i0,
            b: common_vendor.p({
              item,
              index,
              ["is-bulge"]: item.isBulge
            }),
            c: index,
            d: item.isBulge ? 1 : "",
            e: common_vendor.o(($event) => {
              return handleClick(index);
            }, index)
          };
        }),
        c: `${common_vendor.unref(safeAreaBottom)}px`,
        d: `${TABBAR_CONTAINER_HEIGHT + common_vendor.unref(safeAreaBottom)}px`,
        e: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        f: common_vendor.s({
          height: `${TABBAR_HEIGHT + common_vendor.unref(safeAreaBottom)}px`
        }),
        g: common_vendor.s({
          "--status-bar-height": `${_ctx.u_s_b_h}px`,
          "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/tabbar/index.js.map
