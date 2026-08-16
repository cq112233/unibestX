"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_cell_1 = common_vendor.resolveComponent("rice-cell");
  const _easycom_rice_switch_1 = common_vendor.resolveComponent("rice-switch");
  const _easycom_rice_cell_group_1 = common_vendor.resolveComponent("rice-cell-group");
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  (_easycom_NavBar_1 + _easycom_rice_cell_1 + _easycom_rice_switch_1 + _easycom_rice_cell_group_1 + _easycom_rice_icon_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_cell = () => "../../../../../uni_modules/rice-ui/components/rice-cell/rice-cell.js";
const _easycom_rice_switch = () => "../../../../../uni_modules/rice-ui/components/rice-switch/rice-switch.js";
const _easycom_rice_cell_group = () => "../../../../../uni_modules/rice-ui/components/rice-cell-group/rice-cell-group.js";
const _easycom_rice_icon = () => "../../../../../uni_modules/rice-ui/components/rice-icon/rice-icon.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_cell + _easycom_rice_switch + _easycom_rice_cell_group + _easycom_rice_icon + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "cell",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const cellSwitch = common_vendor.ref(true);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Cell 单元格",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-9a93224a"
        }),
        b: currentTheme.value,
        c: common_vendor.p({
          title: "个人信息",
          value: "已完善",
          ["is-link"]: true,
          class: "data-v-9a93224a"
        }),
        d: common_vendor.p({
          title: "收货地址",
          value: "浙江省杭州市",
          ["is-link"]: true,
          class: "data-v-9a93224a"
        }),
        e: common_vendor.p({
          title: "账号安全",
          label: "修改密码与绑定手机",
          ["is-link"]: true,
          class: "data-v-9a93224a"
        }),
        f: common_vendor.o(($event) => {
          return common_vendor.isRef(cellSwitch) ? cellSwitch.value = $event : null;
        }, "b3"),
        g: common_vendor.p({
          ["active-color"]: currentTheme.value,
          size: "20px",
          modelValue: common_vendor.unref(cellSwitch),
          class: "data-v-9a93224a"
        }),
        h: common_vendor.p({
          title: "开关设置",
          class: "data-v-9a93224a"
        }),
        i: common_vendor.p({
          class: "data-v-9a93224a"
        }),
        j: currentTheme.value,
        k: common_vendor.p({
          name: "volume",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-9a93224a",
          style: "margin-right:8px"
        }),
        l: common_vendor.p({
          title: "我的消息",
          value: "3 条未读",
          ["is-link"]: true,
          class: "data-v-9a93224a"
        }),
        m: common_vendor.p({
          name: "star-fill",
          color: currentTheme.value,
          size: "18px",
          class: "data-v-9a93224a",
          style: "margin-right:8px"
        }),
        n: common_vendor.p({
          title: "我的收藏",
          ["is-link"]: true,
          class: "data-v-9a93224a"
        }),
        o: common_vendor.p({
          class: "data-v-9a93224a"
        }),
        p: common_vendor.gei(_ctx, ""),
        q: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-9a93224a"
        }),
        r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9a93224a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/cell/cell.js.map
