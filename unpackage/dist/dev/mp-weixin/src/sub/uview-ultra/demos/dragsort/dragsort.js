"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_title_1 = common_vendor.resolveComponent("up-title");
  const _easycom_up_dragsort_1 = common_vendor.resolveComponent("up-dragsort");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  (_easycom_NavBar_1 + _easycom_up_title_1 + _easycom_up_dragsort_1 + _easycom_up_icon_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_title = () => "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
const _easycom_up_dragsort = () => "../../../../../uni_modules/uview-ultra/components/up-dragsort/up-dragsort.js";
const _easycom_up_icon = () => "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_title + _easycom_up_dragsort + _easycom_up_icon + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "dragsort",
  setup(__props) {
    const plainList = common_vendor.ref([
      new common_vendor.UTSJSONObject({ id: 1, label: "普通列表项 1" }),
      new common_vendor.UTSJSONObject({ id: 2, label: "普通列表项 2" }),
      new common_vendor.UTSJSONObject({ id: 3, label: "普通列表项 3" }),
      new common_vendor.UTSJSONObject({ id: 4, label: "普通列表项 4" }),
      new common_vendor.UTSJSONObject({ id: 5, label: "普通列表项 5" })
    ]);
    const leftHandleList = common_vendor.ref([
      new common_vendor.UTSJSONObject({ id: 1, label: "左侧手柄项 1" }),
      new common_vendor.UTSJSONObject({ id: 2, label: "左侧手柄项 2" }),
      new common_vendor.UTSJSONObject({ id: 3, label: "左侧手柄项 3" }),
      new common_vendor.UTSJSONObject({ id: 4, label: "左侧手柄项 4" })
    ]);
    const verticalList = common_vendor.ref([
      new common_vendor.UTSJSONObject({ id: 1, label: "列表项 1" }),
      new common_vendor.UTSJSONObject({ id: 2, label: "列表项 2" }),
      new common_vendor.UTSJSONObject({ id: 3, label: "列表项 3" }),
      new common_vendor.UTSJSONObject({ id: 4, label: "列表项 4" }),
      new common_vendor.UTSJSONObject({ id: 5, label: "列表项 5" })
    ]);
    const horizontalList = common_vendor.ref([
      new common_vendor.UTSJSONObject({ id: 1, label: "卡片 1" }),
      new common_vendor.UTSJSONObject({ id: 2, label: "卡片 2" }),
      new common_vendor.UTSJSONObject({ id: 3, label: "卡片 3" }),
      new common_vendor.UTSJSONObject({ id: 4, label: "卡片 4" })
    ]);
    const gridList = common_vendor.ref([
      new common_vendor.UTSJSONObject({ id: 1, label: "应用 1" }),
      new common_vendor.UTSJSONObject({ id: 2, label: "应用 2" }),
      new common_vendor.UTSJSONObject({ id: 3, label: "应用 3" }),
      new common_vendor.UTSJSONObject({ id: 4, label: "应用 4" }),
      new common_vendor.UTSJSONObject({ id: 5, label: "应用 5" }),
      new common_vendor.UTSJSONObject({ id: 6, label: "应用 6" }),
      new common_vendor.UTSJSONObject({ id: 7, label: "应用 7" }),
      new common_vendor.UTSJSONObject({ id: 8, label: "应用 8" })
    ]);
    const disabledList = common_vendor.ref([
      new common_vendor.UTSJSONObject({ id: 1, label: "普通项 1" }),
      new common_vendor.UTSJSONObject({ id: 2, label: "锁定项（不可拖动）", draggable: false }),
      new common_vendor.UTSJSONObject({ id: 3, label: "普通项 2" }),
      new common_vendor.UTSJSONObject({ id: 4, label: "普通项 3" }),
      new common_vendor.UTSJSONObject({ id: 5, label: "锁定项（不可拖动）", draggable: false }),
      new common_vendor.UTSJSONObject({ id: 6, label: "普通项 4" })
    ]);
    const eventLog = common_vendor.ref("拖拽完成后，drag-end 会返回最新列表顺序");
    function getLabel(item) {
      const label = item.label;
      return label == null ? "" : label.toString();
    }
    function getItemDisabled(item) {
      const draggableValue = item.draggable;
      return draggableValue != null && draggableValue.toString() == "false";
    }
    function getOrder(list) {
      const labels = [];
      for (let i = 0; i < list.length; i++) {
        labels.push(getLabel(list[i]));
      }
      return labels.join(" → ");
    }
    function onDragEnd(list) {
      eventLog.value = `drag-end => ${getOrder(list)}`;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-dragsort 拖拽排序",
          class: "data-v-d982303d"
        }),
        b: common_vendor.p({
          class: "demo-title data-v-d982303d"
        }),
        c: common_vendor.w((_a, s0, i0) => {
          var item = _a.item, index = _a.index;
          return {
            a: common_vendor.t(getLabel(item)),
            b: common_vendor.t(index + 1),
            c: i0,
            d: s0
          };
        }, {
          name: "d",
          path: "c",
          vueId: "d982303d-4,d982303d-1"
        }),
        d: common_vendor.o(onDragEnd, "27"),
        e: common_vendor.p({
          ["initial-list"]: plainList.value,
          direction: "vertical",
          class: "data-v-d982303d"
        }),
        f: common_vendor.p({
          class: "demo-title data-v-d982303d"
        }),
        g: common_vendor.p({
          name: "list",
          color: "#64748b",
          size: "20",
          class: "data-v-d982303d"
        }),
        h: common_vendor.w((_a, s0, i0) => {
          var item = _a.item, index = _a.index;
          return {
            a: common_vendor.t(getLabel(item)),
            b: common_vendor.t(index + 1),
            c: i0,
            d: s0
          };
        }, {
          name: "d",
          path: "h",
          vueId: "d982303d-6,d982303d-1"
        }),
        i: common_vendor.o(onDragEnd, "9d"),
        j: common_vendor.p({
          ["initial-list"]: verticalList.value,
          direction: "vertical",
          ["handle-drag"]: true,
          class: "data-v-d982303d"
        }),
        k: common_vendor.p({
          class: "demo-title data-v-d982303d"
        }),
        l: common_vendor.p({
          name: "list",
          color: "#64748b",
          size: "20",
          class: "data-v-d982303d"
        }),
        m: common_vendor.w((_a, s0, i0) => {
          var item = _a.item, index = _a.index;
          return {
            a: common_vendor.t(getLabel(item)),
            b: common_vendor.t(index + 1),
            c: i0,
            d: s0
          };
        }, {
          name: "d",
          path: "m",
          vueId: "d982303d-9,d982303d-1"
        }),
        n: common_vendor.o(onDragEnd, "1d"),
        o: common_vendor.p({
          ["initial-list"]: leftHandleList.value,
          direction: "vertical",
          ["handle-drag"]: true,
          ["handler-position"]: "left",
          class: "data-v-d982303d"
        }),
        p: common_vendor.p({
          class: "demo-title data-v-d982303d"
        }),
        q: common_vendor.p({
          name: "list",
          color: "#2563eb",
          size: "20",
          class: "data-v-d982303d"
        }),
        r: common_vendor.w((_a, s0, i0) => {
          var item = _a.item;
          return {
            a: common_vendor.t(getLabel(item)),
            b: i0,
            c: s0
          };
        }, {
          name: "d",
          path: "r",
          vueId: "d982303d-12,d982303d-1"
        }),
        s: common_vendor.o(onDragEnd, "31"),
        t: common_vendor.p({
          ["initial-list"]: horizontalList.value,
          direction: "horizontal",
          ["handle-drag"]: true,
          class: "data-v-d982303d"
        }),
        v: common_vendor.p({
          class: "demo-title data-v-d982303d"
        }),
        w: common_vendor.p({
          name: "list",
          color: "#475569",
          size: "14",
          class: "data-v-d982303d"
        }),
        x: common_vendor.w((_a, s0, i0) => {
          var item = _a.item, index = _a.index;
          return {
            a: common_vendor.t(getLabel(item)),
            b: common_vendor.t(index + 1),
            c: i0,
            d: s0
          };
        }, {
          name: "d",
          path: "x",
          vueId: "d982303d-15,d982303d-1"
        }),
        y: common_vendor.o(onDragEnd, "d9"),
        z: common_vendor.p({
          ["initial-list"]: gridList.value,
          direction: "all",
          columns: 3,
          ["handle-drag"]: true,
          class: "data-v-d982303d"
        }),
        A: common_vendor.p({
          class: "demo-title data-v-d982303d"
        }),
        B: common_vendor.w((_a, s0, i0) => {
          var item = _a.item;
          return {
            a: "d982303d-19-" + i0 + ",d982303d-18",
            b: common_vendor.p({
              name: "list",
              color: getItemDisabled(item) ? "#94a3b8" : "#64748b",
              size: "20",
              class: "data-v-d982303d"
            }),
            c: common_vendor.n(getItemDisabled(item) ? "drag-handler--disabled" : ""),
            d: i0,
            e: s0
          };
        }, {
          name: "handler",
          path: "B",
          vueId: "d982303d-18,d982303d-1"
        }),
        C: common_vendor.w((_a, s0, i0) => {
          var item = _a.item;
          return {
            a: common_vendor.t(getLabel(item)),
            b: common_vendor.n(getItemDisabled(item) ? "drag-item--disabled" : ""),
            c: i0,
            d: s0
          };
        }, {
          name: "d",
          path: "C",
          vueId: "d982303d-18,d982303d-1"
        }),
        D: common_vendor.o(onDragEnd, "8e"),
        E: common_vendor.p({
          ["initial-list"]: disabledList.value,
          direction: "vertical",
          ["handle-drag"]: true,
          class: "data-v-d982303d"
        }),
        F: common_vendor.p({
          class: "demo-title data-v-d982303d"
        }),
        G: common_vendor.t(eventLog.value),
        H: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-dragsort 拖拽排序",
          class: "data-v-d982303d"
        }),
        I: common_vendor.gei(_ctx, ""),
        J: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-d982303d"
        }),
        K: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d982303d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/dragsort/dragsort.js.map
