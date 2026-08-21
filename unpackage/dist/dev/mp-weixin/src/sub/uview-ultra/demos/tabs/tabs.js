"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_tabs_1 = common_vendor.resolveComponent("up-tabs");
  (_easycom_NavBar_1 + _easycom_up_tabs_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_tabs = () => "../../../../../uni_modules/uview-ultra/components/up-tabs/up-tabs.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_tabs + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tabs",
  setup(__props) {
    const currentLong = common_vendor.ref(0);
    const longList = common_vendor.ref([
      new common_vendor.UTSJSONObject({ name: "关注" }),
      new common_vendor.UTSJSONObject({ name: "推荐" }),
      new common_vendor.UTSJSONObject({ name: "电影" }),
      new common_vendor.UTSJSONObject({ name: "电视剧" }),
      new common_vendor.UTSJSONObject({ name: "综艺" }),
      new common_vendor.UTSJSONObject({ name: "动漫" }),
      new common_vendor.UTSJSONObject({ name: "少儿" }),
      new common_vendor.UTSJSONObject({ name: "纪录片" }),
      new common_vendor.UTSJSONObject({ name: "体育" }),
      new common_vendor.UTSJSONObject({ name: "游戏" }),
      new common_vendor.UTSJSONObject({ name: "音乐" }),
      new common_vendor.UTSJSONObject({ name: "搞笑" }),
      new common_vendor.UTSJSONObject({ name: "科技" }),
      new common_vendor.UTSJSONObject({ name: "美食" })
    ]);
    const currentBase = common_vendor.ref(0);
    const baseList = common_vendor.ref([
      new common_vendor.UTSJSONObject({ name: "关注" }),
      new common_vendor.UTSJSONObject({ name: "推荐" }),
      new common_vendor.UTSJSONObject({ name: "电影" }),
      new common_vendor.UTSJSONObject({ name: "科技" })
    ]);
    const currentBadge = common_vendor.ref(0);
    const badgeList = common_vendor.ref([
      new common_vendor.UTSJSONObject({ name: "关注", badge: new common_vendor.UTSJSONObject({ isDot: true }) }),
      new common_vendor.UTSJSONObject({ name: "推荐", badge: new common_vendor.UTSJSONObject({ value: 5 }) }),
      new common_vendor.UTSJSONObject({ name: "消息", badge: new common_vendor.UTSJSONObject({ value: 99 }) }),
      new common_vendor.UTSJSONObject({ name: "热榜" })
    ]);
    const currentDisabled = common_vendor.ref(0);
    const disabledList = common_vendor.ref([
      new common_vendor.UTSJSONObject({ name: "国内新闻" }),
      new common_vendor.UTSJSONObject({ name: "国际焦点" }),
      new common_vendor.UTSJSONObject({ name: "付费专区", disabled: true }),
      new common_vendor.UTSJSONObject({ name: "数码测评" })
    ]);
    const currentCustom = common_vendor.ref(1);
    const customList = common_vendor.ref([
      new common_vendor.UTSJSONObject({ name: "最新发布" }),
      new common_vendor.UTSJSONObject({ name: "最热推荐" }),
      new common_vendor.UTSJSONObject({ name: "好评排行" }),
      new common_vendor.UTSJSONObject({ name: "折扣特惠" })
    ]);
    const currentEqual = common_vendor.ref(0);
    const equalList = common_vendor.ref([
      new common_vendor.UTSJSONObject({ name: "待付款" }),
      new common_vendor.UTSJSONObject({ name: "待发货" }),
      new common_vendor.UTSJSONObject({ name: "待收货" }),
      new common_vendor.UTSJSONObject({ name: "待评价" })
    ]);
    function onLongChange(item) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/demos/tabs/tabs.uvue:153", "超长Tabs切换:", item);
    }
    function onBaseChange(item) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/demos/tabs/tabs.uvue:157", "基础Tabs切换:", item);
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Tabs 标签页",
          ["auto-back"]: true,
          class: "data-v-01e0da23"
        }),
        b: common_vendor.o(onLongChange, "1f"),
        c: common_vendor.o(($event) => {
          return currentLong.value = $event;
        }, "a7"),
        d: common_vendor.p({
          list: longList.value,
          current: currentLong.value,
          class: "data-v-01e0da23"
        }),
        e: common_vendor.t(longList.value[currentLong.value].name),
        f: common_vendor.t(currentLong.value + 1),
        g: common_vendor.o(onBaseChange, "f5"),
        h: common_vendor.o(($event) => {
          return currentBase.value = $event;
        }, "d4"),
        i: common_vendor.p({
          list: baseList.value,
          current: currentBase.value,
          class: "data-v-01e0da23"
        }),
        j: common_vendor.t(baseList.value[currentBase.value].name),
        k: common_vendor.o(($event) => {
          return currentBadge.value = $event;
        }, "2d"),
        l: common_vendor.p({
          list: badgeList.value,
          current: currentBadge.value,
          class: "data-v-01e0da23"
        }),
        m: common_vendor.o(($event) => {
          return currentDisabled.value = $event;
        }, "bd"),
        n: common_vendor.p({
          list: disabledList.value,
          current: currentDisabled.value,
          class: "data-v-01e0da23"
        }),
        o: common_vendor.o(($event) => {
          return currentCustom.value = $event;
        }, "90"),
        p: common_vendor.p({
          list: customList.value,
          ["line-color"]: "#fa3534",
          ["line-width"]: "32px",
          ["line-height"]: "4px",
          ["active-style"]: {
            color: "#fa3534",
            fontWeight: "bold"
          },
          ["inactive-style"]: {
            color: "#909399"
          },
          current: currentCustom.value,
          class: "data-v-01e0da23"
        }),
        q: common_vendor.o(($event) => {
          return currentEqual.value = $event;
        }, "20"),
        r: common_vendor.p({
          list: equalList.value,
          scrollable: false,
          ["line-color"]: "#19be6b",
          ["active-style"]: {
            color: "#19be6b",
            fontWeight: "bold"
          },
          current: currentEqual.value,
          class: "data-v-01e0da23"
        }),
        s: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "Tabs 标签页",
          class: "data-v-01e0da23"
        }),
        t: common_vendor.gei(_ctx, ""),
        v: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-01e0da23"
        }),
        w: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-01e0da23"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/tabs/tabs.js.map
