"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_title_1 = common_vendor.resolveComponent("up-title");
  const _easycom_up_tree_1 = common_vendor.resolveComponent("up-tree");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  (_easycom_NavBar_1 + _easycom_up_title_1 + _easycom_up_tree_1 + _easycom_up_button_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_title = () => "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
const _easycom_up_tree = () => "../../../../../uni_modules/uview-ultra/components/up-tree/up-tree.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_title + _easycom_up_tree + _easycom_up_button + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tree",
  setup(__props) {
    const treeData = common_vendor.ref([
      new common_vendor.UTSJSONObject({
        id: 1,
        label: "一级菜单 1",
        children: [
          new common_vendor.UTSJSONObject({ id: 11, label: "二级菜单 1-1" }),
          new common_vendor.UTSJSONObject({
            id: 12,
            label: "二级菜单 1-2",
            children: [
              new common_vendor.UTSJSONObject({ id: 121, label: "三级菜单 1-2-1" }),
              new common_vendor.UTSJSONObject({ id: 122, label: "三级菜单 1-2-2" })
            ]
          })
        ]
      }),
      new common_vendor.UTSJSONObject({
        id: 2,
        label: "一级菜单 2",
        children: [
          new common_vendor.UTSJSONObject({ id: 21, label: "二级菜单 2-1" })
        ]
      }),
      new common_vendor.UTSJSONObject({ id: 3, label: "一级菜单 3（叶子节点）" })
    ]);
    const customTreeProps = common_vendor.ref(new common_vendor.UTSJSONObject({
      label: "name",
      children: "list",
      nodeKey: "key",
      disabled: "forbidden"
    }));
    const customData = common_vendor.ref([
      new common_vendor.UTSJSONObject({
        key: "c1",
        name: "自定义字段 1",
        forbidden: false,
        list: [
          new common_vendor.UTSJSONObject({ key: "c1-1", name: "自定义字段 1-1", forbidden: false }),
          new common_vendor.UTSJSONObject({ key: "c1-2", name: "自定义字段 1-2（禁用）", forbidden: true })
        ]
      }),
      new common_vendor.UTSJSONObject({ key: "c2", name: "自定义字段 2", forbidden: false })
    ]);
    const eventLog = common_vendor.ref("点击节点或勾选复选框试试");
    const apiLog = common_vendor.ref("");
    function getNodeLabel(node) {
      const label = node.label;
      return label == null ? "" : label.toString();
    }
    function onNodeClick(node) {
      eventLog.value = `node-click：${getNodeLabel(node)}`;
    }
    function onNodeExpand(node) {
      eventLog.value = `node-expand：${getNodeLabel(node)}`;
    }
    function onNodeCollapse(node) {
      eventLog.value = `node-collapse：${getNodeLabel(node)}`;
    }
    function onCheckChange(node, checked) {
      eventLog.value = `check-change：${getNodeLabel(node)} => ${checked ? "勾选" : "取消勾选"}`;
    }
    const treeRef = common_vendor.ref(null);
    function onSetCheckedKeys() {
      const tree = treeRef.value;
      if (tree != null) {
        tree.$callMethod("setCheckedKeys", [1, 11], false);
        apiLog.value = "已调用 setCheckedKeys([1, 11])";
      }
    }
    function onGetCheckedKeys() {
      const tree = treeRef.value;
      if (tree != null) {
        const keys = tree.$callMethod("getCheckedKeys", false);
        apiLog.value = `getCheckedKeys() => ${keys.join(", ")}`;
      }
    }
    function onSetCurrentKey() {
      const tree = treeRef.value;
      if (tree != null) {
        tree.$callMethod("setCurrentKey", 21);
        apiLog.value = "已调用 setCurrentKey(21)";
      }
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-tree 树形",
          class: "data-v-d42ad85d"
        }),
        b: common_vendor.p({
          class: "demo-title data-v-d42ad85d"
        }),
        c: common_vendor.p({
          data: treeData.value,
          class: "data-v-d42ad85d"
        }),
        d: common_vendor.p({
          class: "demo-title data-v-d42ad85d"
        }),
        e: common_vendor.p({
          data: treeData.value,
          ["default-expand-all"]: true,
          class: "data-v-d42ad85d"
        }),
        f: common_vendor.p({
          class: "demo-title data-v-d42ad85d"
        }),
        g: common_vendor.p({
          data: treeData.value,
          ["default-expanded-keys"]: [1, 11],
          ["current-node-key"]: 12,
          ["highlight-current"]: true,
          class: "data-v-d42ad85d"
        }),
        h: common_vendor.p({
          class: "demo-title data-v-d42ad85d"
        }),
        i: common_vendor.p({
          data: treeData.value,
          ["show-checkbox"]: true,
          class: "data-v-d42ad85d"
        }),
        j: common_vendor.p({
          class: "demo-title data-v-d42ad85d"
        }),
        k: common_vendor.p({
          data: treeData.value,
          ["show-checkbox"]: true,
          ["check-strictly"]: true,
          class: "data-v-d42ad85d"
        }),
        l: common_vendor.p({
          class: "demo-title data-v-d42ad85d"
        }),
        m: common_vendor.p({
          data: treeData.value,
          accordion: true,
          class: "data-v-d42ad85d"
        }),
        n: common_vendor.p({
          class: "demo-title data-v-d42ad85d"
        }),
        o: common_vendor.p({
          data: customData.value,
          props: customTreeProps.value,
          class: "data-v-d42ad85d"
        }),
        p: common_vendor.p({
          class: "demo-title data-v-d42ad85d"
        }),
        q: common_vendor.o(onNodeClick, "b9"),
        r: common_vendor.o(onNodeExpand, "c3"),
        s: common_vendor.o(onNodeCollapse, "aa"),
        t: common_vendor.o(onCheckChange, "27"),
        v: common_vendor.p({
          data: treeData.value,
          ["show-checkbox"]: true,
          class: "data-v-d42ad85d"
        }),
        w: common_vendor.t(eventLog.value),
        x: common_vendor.p({
          class: "demo-title data-v-d42ad85d"
        }),
        y: common_vendor.sr(treeRef, "d42ad85d-20,d42ad85d-1", {
          "k": "treeRef"
        }),
        z: common_vendor.p({
          data: treeData.value,
          ["show-checkbox"]: true,
          ["default-expand-all"]: true,
          class: "r data-v-d42ad85d"
        }),
        A: common_vendor.o(onSetCheckedKeys, "5b"),
        B: common_vendor.p({
          text: "setCheckedKeys",
          type: "primary",
          size: "small",
          class: "demo-btn data-v-d42ad85d"
        }),
        C: common_vendor.o(onGetCheckedKeys, "38"),
        D: common_vendor.p({
          text: "getCheckedKeys",
          type: "primary",
          size: "small",
          class: "demo-btn data-v-d42ad85d"
        }),
        E: common_vendor.o(onSetCurrentKey, "f6"),
        F: common_vendor.p({
          text: "setCurrentKey",
          type: "primary",
          size: "small",
          class: "demo-btn data-v-d42ad85d"
        }),
        G: common_vendor.t(apiLog.value),
        H: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-tree 树形",
          class: "data-v-d42ad85d"
        }),
        I: common_vendor.gei(_ctx, ""),
        J: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-d42ad85d"
        }),
        K: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d42ad85d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/tree/tree.js.map
