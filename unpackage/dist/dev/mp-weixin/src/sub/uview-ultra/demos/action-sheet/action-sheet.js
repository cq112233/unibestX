"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_action_sheet_1 = common_vendor.resolveComponent("up-action-sheet");
  (_easycom_NavBar_1 + _easycom_up_button_1 + _easycom_up_action_sheet_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
const _easycom_up_action_sheet = () => "../../../../../uni_modules/uview-ultra/components/up-action-sheet/up-action-sheet.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_button + _easycom_up_action_sheet + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "action-sheet",
  setup(__props) {
    const actionSheetShow = common_vendor.ref(false);
    const actionSheetShow2 = common_vendor.ref(false);
    const actionSheetShow3 = common_vendor.ref(false);
    const actionList = common_vendor.ref([
      new UTSJSONObject({ name: "拍照" }),
      new UTSJSONObject({ name: "从相册选择" })
    ]);
    const actionListComplex = common_vendor.ref([
      new UTSJSONObject({ name: "着色选项", color: "#ffaa33" }),
      new UTSJSONObject({ name: "禁用选项", disabled: true }),
      new UTSJSONObject({ name: "带副标题选项", subname: "我是副标题" })
    ]);
    function onActionSelect(e) {
      common_vendor.index.__f__("log", "at src/sub/uview-ultra/demos/action-sheet/action-sheet.uvue:68", "action select", e);
      actionSheetShow.value = false;
      actionSheetShow2.value = false;
      actionSheetShow3.value = false;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-action-sheet 动作面板",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-7e7cb4af"
        }),
        b: common_vendor.o(($event) => {
          return actionSheetShow.value = true;
        }, "73"),
        c: common_vendor.p({
          type: "primary",
          text: "弹出面板",
          size: "mini",
          class: "data-v-7e7cb4af"
        }),
        d: common_vendor.o(($event) => {
          return actionSheetShow2.value = true;
        }, "c8"),
        e: common_vendor.p({
          type: "success",
          text: "带取消按钮",
          size: "mini",
          class: "data-v-7e7cb4af"
        }),
        f: common_vendor.o(($event) => {
          return actionSheetShow3.value = true;
        }, "4f"),
        g: common_vendor.p({
          type: "warning",
          text: "复杂面板",
          size: "mini",
          class: "data-v-7e7cb4af"
        }),
        h: common_vendor.o(($event) => {
          return actionSheetShow.value = false;
        }, "bc"),
        i: common_vendor.o(onActionSelect, "87"),
        j: common_vendor.p({
          show: actionSheetShow.value,
          actions: actionList.value,
          title: "请选择操作",
          class: "data-v-7e7cb4af"
        }),
        k: common_vendor.o(($event) => {
          return actionSheetShow2.value = false;
        }, "57"),
        l: common_vendor.o(onActionSelect, "22"),
        m: common_vendor.p({
          show: actionSheetShow2.value,
          actions: actionList.value,
          title: "请选择操作",
          ["cancel-text"]: "取消",
          class: "data-v-7e7cb4af"
        }),
        n: common_vendor.o(($event) => {
          return actionSheetShow3.value = false;
        }, "cb"),
        o: common_vendor.o(onActionSelect, "b3"),
        p: common_vendor.p({
          show: actionSheetShow3.value,
          actions: actionListComplex.value,
          title: "请选择操作",
          description: "这是一段描述信息",
          ["cancel-text"]: "取消",
          class: "data-v-7e7cb4af"
        }),
        q: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-action-sheet 动作面板",
          class: "data-v-7e7cb4af"
        }),
        r: common_vendor.gei(_ctx, ""),
        s: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-7e7cb4af"
        }),
        t: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7e7cb4af"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/action-sheet/action-sheet.js.map
