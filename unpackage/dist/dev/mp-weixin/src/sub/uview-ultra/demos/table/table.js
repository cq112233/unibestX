"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_th_1 = common_vendor.resolveComponent("up-th");
  const _easycom_up_tr_1 = common_vendor.resolveComponent("up-tr");
  const _easycom_up_td_1 = common_vendor.resolveComponent("up-td");
  const _easycom_up_table_1 = common_vendor.resolveComponent("up-table");
  (_easycom_NavBar_1 + _easycom_up_th_1 + _easycom_up_tr_1 + _easycom_up_td_1 + _easycom_up_table_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_th = () => "../../../../../uni_modules/uview-ultra/components/up-th/up-th.js";
const _easycom_up_tr = () => "../../../../../uni_modules/uview-ultra/components/up-tr/up-tr.js";
const _easycom_up_td = () => "../../../../../uni_modules/uview-ultra/components/up-td/up-td.js";
const _easycom_up_table = () => "../../../../../uni_modules/uview-ultra/components/up-table/up-table.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_th + _easycom_up_tr + _easycom_up_td + _easycom_up_table + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "table",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Table 表格",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-53e2aa09"
        }),
        b: common_vendor.p({
          text: "学校",
          class: "data-v-53e2aa09"
        }),
        c: common_vendor.p({
          text: "班级",
          class: "data-v-53e2aa09"
        }),
        d: common_vendor.p({
          text: "年龄",
          class: "data-v-53e2aa09"
        }),
        e: common_vendor.p({
          class: "data-v-53e2aa09"
        }),
        f: common_vendor.p({
          text: "浙江大学",
          class: "data-v-53e2aa09"
        }),
        g: common_vendor.p({
          text: "二年级",
          class: "data-v-53e2aa09"
        }),
        h: common_vendor.p({
          text: "22",
          class: "data-v-53e2aa09"
        }),
        i: common_vendor.p({
          class: "data-v-53e2aa09"
        }),
        j: common_vendor.p({
          text: "清华大学",
          class: "data-v-53e2aa09"
        }),
        k: common_vendor.p({
          text: "05班",
          class: "data-v-53e2aa09"
        }),
        l: common_vendor.p({
          text: "24",
          class: "data-v-53e2aa09"
        }),
        m: common_vendor.p({
          class: "data-v-53e2aa09"
        }),
        n: common_vendor.p({
          class: "data-v-53e2aa09"
        }),
        o: common_vendor.p({
          text: "名称",
          class: "data-v-53e2aa09"
        }),
        p: common_vendor.p({
          text: "类型",
          class: "data-v-53e2aa09"
        }),
        q: common_vendor.p({
          class: "data-v-53e2aa09"
        }),
        r: common_vendor.p({
          text: "uview-ultra",
          class: "data-v-53e2aa09"
        }),
        s: common_vendor.p({
          text: "UI库",
          class: "data-v-53e2aa09"
        }),
        t: common_vendor.p({
          class: "data-v-53e2aa09"
        }),
        v: common_vendor.p({
          text: "uni-app X",
          class: "data-v-53e2aa09"
        }),
        w: common_vendor.p({
          text: "框架",
          class: "data-v-53e2aa09"
        }),
        x: common_vendor.p({
          class: "data-v-53e2aa09"
        }),
        y: common_vendor.p({
          border: false,
          class: "data-v-53e2aa09"
        }),
        z: common_vendor.gei(_ctx, ""),
        A: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-53e2aa09"
        }),
        B: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-53e2aa09"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/table/table.js.map
