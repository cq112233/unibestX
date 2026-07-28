"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const common_assets = require("../../../../../common/assets.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_waterfall_1 = common_vendor.resolveComponent("up-waterfall");
  (_easycom_NavBar_1 + _easycom_up_waterfall_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_waterfall = () => "../../../../../uni_modules/uview-ultra/components/up-waterfall/up-waterfall.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_waterfall + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "waterfall",
  setup(__props) {
    const list = common_vendor.ref([
      new UTSJSONObject({ title: "uview-ultra 核心UI组件", desc: "轻量级UI框架", price: 129, imgHeight: "80px" }),
      new UTSJSONObject({ title: "高性能 UniAppX 跨端套件", desc: "支持原生Android/iOS", price: 299, imgHeight: "160px" }),
      new UTSJSONObject({ title: "智能瀑布流弹性排版", desc: "自动适配列高", price: 89, imgHeight: "110px" }),
      new UTSJSONObject({ title: "极速渲染流畅体验", desc: "零延迟丝滑滚动", price: 199, imgHeight: "200px" }),
      new UTSJSONObject({ title: "炫彩主题切换系统", desc: "一键换肤体验", price: 49, imgHeight: "90px" }),
      new UTSJSONObject({ title: "全套内置工程级图标库", desc: "上百款高清矢量图标", price: 159, imgHeight: "140px" }),
      new UTSJSONObject({ title: "响应式页面布局容器", desc: "完美适配屏幕", price: 79, imgHeight: "180px" }),
      new UTSJSONObject({ title: "开箱即用多端示例", desc: "快速构建产品原型", price: 99, imgHeight: "120px" })
    ]);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Waterfall 瀑布流",
          ["auto-back"]: true,
          class: "data-v-c3d0adfd"
        }),
        b: common_vendor.w((_a, s0, i0) => {
          var colList = _a.colList;
          return {
            a: common_vendor.f(colList, (item, idx, i1) => {
              return {
                a: item.getString("imgHeight") ?? "100px",
                b: common_vendor.t(item.getString("title")),
                c: common_vendor.t(item.getString("desc")),
                d: common_vendor.t(item.getNumber("price")),
                e: idx
              };
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "column",
          path: "b",
          vueId: "c3d0adfd-3,c3d0adfd-1"
        }),
        c: common_assets._imports_0,
        d: common_vendor.o(($event) => {
          return list.value = $event;
        }, "ca"),
        e: common_vendor.p({
          columns: 2,
          modelValue: list.value,
          class: "data-v-c3d0adfd"
        }),
        f: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-waterfall 瀑布流",
          class: "data-v-c3d0adfd"
        }),
        g: common_vendor.gei(_ctx, ""),
        h: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-c3d0adfd"
        }),
        i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c3d0adfd"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/waterfall/waterfall.js.map
