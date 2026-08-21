"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_checkbox_1 = common_vendor.resolveComponent("up-checkbox");
  (_easycom_up_icon_1 + _easycom_up_checkbox_1)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_checkbox = () => "../up-checkbox/up-checkbox.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_checkbox)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-tree"
}, { __name: "up-tree", props: {
  data: {
    type: Array,
    default: () => {
      return [];
    }
  },
  props: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({
        label: "label",
        children: "children",
        nodeKey: "id",
        disabled: "disabled"
      });
    }
  },
  nodeKey: {
    type: String,
    default: ""
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  defaultExpandAll: {
    type: Boolean,
    default: false
  },
  defaultExpandedKeys: {
    type: Array,
    default: () => {
      return [];
    }
  },
  defaultCheckedKeys: {
    type: Array,
    default: () => {
      return [];
    }
  },
  expandOnClickNode: {
    type: Boolean,
    default: true
  },
  checkOnClickNode: {
    type: Boolean,
    default: false
  },
  checkStrictly: {
    type: Boolean,
    default: false
  },
  accordion: {
    type: Boolean,
    default: false
  },
  highlightCurrent: {
    type: Boolean,
    default: false
  },
  currentNodeKey: {
    type: [String, Number],
    default: ""
  },
  indent: {
    type: [String, Number],
    default: 32
  },
  iconSize: {
    type: [String, Number],
    default: 14
  },
  checkboxSize: {
    type: [String, Number],
    default: 16
  },
  expandIcon: {
    type: String,
    default: "play-right-fill"
  },
  collapseIcon: {
    type: String,
    default: "arrow-down-fill"
  }
}, emits: ["node-click", "check-change", "check", "node-expand", "node-collapse", "current-change"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  function createTreeList() {
    return [];
  }
  function createNodeMap() {
    return /* @__PURE__ */ new Map();
  }
  function createTreeProps() {
    return new common_vendor.UTSJSONObject({
      label: "label",
      children: "children",
      nodeKey: "id",
      disabled: "disabled"
    });
  }
  function valueToString(value = null) {
    return value == null ? "" : value.toString();
  }
  function valueToBoolean(value = null) {
    return value == true;
  }
  const props = __props;
  const emit = __emit;
  const treeData = common_vendor.ref(createTreeList());
  const currentKey = common_vendor.ref(valueToString(props.currentNodeKey));
  let nodeMap = createNodeMap();
  let privateKeySeed = 0;
  const treeProps = common_vendor.computed(() => {
    const merged = createTreeProps();
    const custom = props.props;
    const label = custom["label"];
    if (valueToString(label) != "") {
      merged["label"] = label;
    }
    const children = custom["children"];
    if (valueToString(children) != "") {
      merged["children"] = children;
    }
    const nKey = custom["nodeKey"];
    if (valueToString(nKey) != "") {
      merged["nodeKey"] = nKey;
    }
    const disabled = custom["disabled"];
    if (valueToString(disabled) != "") {
      merged["disabled"] = disabled;
    }
    return merged;
  });
  const labelKey = common_vendor.computed(() => {
    return valueToString(treeProps.value["label"]) == "" ? "label" : valueToString(treeProps.value["label"]);
  });
  const childrenKey = common_vendor.computed(() => {
    return valueToString(treeProps.value["children"]) == "" ? "children" : valueToString(treeProps.value["children"]);
  });
  const disabledKey = common_vendor.computed(() => {
    return valueToString(treeProps.value["disabled"]) == "" ? "disabled" : valueToString(treeProps.value["disabled"]);
  });
  const keyField = common_vendor.computed(() => {
    return props.nodeKey != "" ? props.nodeKey : valueToString(treeProps.value["nodeKey"]);
  });
  const switcherColor = common_vendor.computed(() => {
    return "#606266";
  });
  function getItemHasChildren(item) {
    return valueToBoolean(item["hasChildren"]);
  }
  function getItemExpanded(item) {
    return valueToBoolean(item["expanded"]);
  }
  function getItemChecked(item) {
    return valueToBoolean(item["checked"]);
  }
  function getItemDisabled(item) {
    return valueToBoolean(item["disabled"]);
  }
  function getItemLabel(item) {
    return valueToString(item["label"]);
  }
  function getChildren(node) {
    const rawChildren = node[childrenKey.value];
    if (Array.isArray(rawChildren)) {
      return rawChildren;
    }
    return createTreeList();
  }
  function getNodeKey(node) {
    return valueToString(node["__upTreeKey"]);
  }
  function getNodeLabel(node) {
    return valueToString(node[labelKey.value]);
  }
  function isNodeDisabled(node) {
    return valueToBoolean(node[disabledKey.value]);
  }
  function includesKey(keys, key) {
    for (let i = 0; i < keys.length; i++) {
      if (valueToString(keys[i]) == key) {
        return true;
      }
    }
    return false;
  }
  function resolveNodeKey(node, parentKey, index) {
    const rawKey = node[keyField.value];
    const normalized = valueToString(rawKey);
    if (normalized != "") {
      return normalized;
    }
    privateKeySeed = privateKeySeed + 1;
    return (parentKey == "" ? "root" : parentKey) + "-" + index.toString() + "-" + privateKeySeed.toString();
  }
  function setChildrenChecked(node, checked) {
    const children = getChildren(node);
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (!isNodeDisabled(child)) {
        child["checked"] = checked;
        child["indeterminate"] = false;
        setChildrenChecked(child, checked);
      }
    }
  }
  function cloneNodes(nodes, parentKey, level) {
    const list = [];
    for (let i = 0; i < nodes.length; i++) {
      const source = nodes[i];
      const cloned = uni_modules_uviewUltra_libs_function_index.deepClone(source);
      const clone = cloned == null ? new common_vendor.UTSJSONObject({}) : cloned;
      const key = resolveNodeKey(clone, parentKey, i);
      const rawChildren = source[childrenKey.value];
      const children = Array.isArray(rawChildren) ? rawChildren : createTreeList();
      const expanded = props.defaultExpandAll || includesKey(props.defaultExpandedKeys, key) || valueToBoolean(clone["expanded"]);
      const checked = includesKey(props.defaultCheckedKeys, key) || valueToBoolean(clone["checked"]);
      clone["__upTreeKey"] = key;
      clone["__upTreeParentKey"] = parentKey;
      clone["__upTreeLevel"] = level;
      clone["expanded"] = expanded;
      clone["checked"] = checked;
      clone["indeterminate"] = false;
      clone[childrenKey.value] = cloneNodes(children, key, level + 1);
      if (checked && !props.checkStrictly) {
        setChildrenChecked(clone, true);
      }
      nodeMap.set(key, clone);
      list.push(clone);
    }
    return list;
  }
  function syncParentChecked(nodes) {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      const children = getChildren(node);
      if (children.length > 0) {
        syncParentChecked(children);
        let enabledCount = 0;
        let checkedCount = 0;
        let someChecked = false;
        for (let j = 0; j < children.length; j++) {
          const child = children[j];
          if (!isNodeDisabled(child)) {
            enabledCount = enabledCount + 1;
            if (valueToBoolean(child["checked"])) {
              checkedCount = checkedCount + 1;
            }
            if (valueToBoolean(child["checked"]) || valueToBoolean(child["indeterminate"])) {
              someChecked = true;
            }
          }
        }
        const allChecked = enabledCount > 0 && checkedCount == enabledCount;
        node["checked"] = allChecked;
        node["indeterminate"] = !allChecked && someChecked;
      }
    }
  }
  function collectVisibleNodes(nodes, level, result) {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      const children = getChildren(node);
      const item = new common_vendor.UTSJSONObject({
        key: getNodeKey(node),
        node,
        level,
        slotLevel: level + 1,
        label: getNodeLabel(node),
        hasChildren: children.length > 0,
        expanded: valueToBoolean(node["expanded"]),
        checked: valueToBoolean(node["checked"]),
        indeterminate: valueToBoolean(node["indeterminate"]),
        disabled: isNodeDisabled(node)
      });
      result.push(item);
      if (children.length > 0 && valueToBoolean(node["expanded"])) {
        collectVisibleNodes(children, level + 1, result);
      }
    }
  }
  const visibleItems = common_vendor.ref(createTreeList());
  let renderVersion = 0;
  function rebuildVisibleItems() {
    renderVersion = renderVersion + 1;
    const result = [];
    collectVisibleNodes(treeData.value, 0, result);
    for (let i = 0; i < result.length; i++) {
      const item = result[i];
      item["renderKey"] = valueToString(item["key"]) + "@" + renderVersion.toString();
    }
    visibleItems.value = result;
  }
  function getItemKey(item) {
    return valueToString(item["renderKey"]);
  }
  function initTree() {
    privateKeySeed = 0;
    nodeMap = createNodeMap();
    treeData.value = cloneNodes(props.data, "", 0);
    if (!props.checkStrictly) {
      syncParentChecked(treeData.value);
    }
    rebuildVisibleItems();
  }
  function getNodeClass(item) {
    const classes = [];
    if (valueToBoolean(item["disabled"])) {
      classes.push("up-tree-node--disabled");
    }
    return classes.join(" ");
  }
  function getNodeContentClass(item) {
    if (props.highlightCurrent && valueToString(item["key"]) == currentKey.value) {
      return "up-tree-node__content--current";
    }
    return "";
  }
  function getIndentValue(level) {
    const raw = props.indent;
    if (typeof raw == "number") {
      return (raw * level).toString() + "rpx";
    }
    const val = valueToString(raw);
    if (val == "") {
      return "0rpx";
    }
    if (val.endsWith("px")) {
      return (parseFloat(val.replace("px", "")) * level).toString() + "px";
    }
    if (val.endsWith("rpx")) {
      return (parseFloat(val.replace("rpx", "")) * level).toString() + "rpx";
    }
    return (parseFloat(val) * level).toString() + "rpx";
  }
  function getNodeByKey(key = null) {
    return common_vendor.UTS.mapGet(nodeMap, valueToString(key));
  }
  function getCurrentNode() {
    return getNodeByKey(currentKey.value);
  }
  function getParentNode(node) {
    const parentKey = valueToString(node["__upTreeParentKey"]);
    if (parentKey == "") {
      return null;
    }
    return common_vendor.UTS.mapGet(nodeMap, parentKey);
  }
  function collapseSiblingNodes(node) {
    const parent = getParentNode(node);
    const siblings = parent == null ? treeData.value : getChildren(parent);
    const curKey = getNodeKey(node);
    for (let i = 0; i < siblings.length; i++) {
      const sibling = siblings[i];
      if (getNodeKey(sibling) != curKey) {
        sibling["expanded"] = false;
      }
    }
  }
  function getNodeContentStyle(item) {
    return new common_vendor.UTSJSONObject({
      paddingLeft: getIndentValue(item["level"])
    });
  }
  function toggleExpand(item) {
    const node = item["node"];
    const nextExpanded = !valueToBoolean(node["expanded"]);
    if (props.accordion && nextExpanded) {
      collapseSiblingNodes(node);
    }
    node["expanded"] = nextExpanded;
    if (nextExpanded) {
      emit("node-expand", node);
    } else {
      emit("node-collapse", node);
    }
  }
  function handleExpandClick(item) {
    if (valueToBoolean(item["hasChildren"])) {
      toggleExpand(item);
      rebuildVisibleItems();
    }
  }
  function updateParentChecked(node) {
    const parent = getParentNode(node);
    if (parent == null) {
      return null;
    }
    const children = getChildren(parent);
    let enabledCount = 0;
    let checkedCount = 0;
    let someChecked = false;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (!isNodeDisabled(child)) {
        enabledCount = enabledCount + 1;
        if (valueToBoolean(child["checked"])) {
          checkedCount = checkedCount + 1;
        }
        if (valueToBoolean(child["checked"]) || valueToBoolean(child["indeterminate"])) {
          someChecked = true;
        }
      }
    }
    const allChecked = enabledCount > 0 && checkedCount == enabledCount;
    parent["checked"] = allChecked;
    parent["indeterminate"] = !allChecked && someChecked;
    updateParentChecked(parent);
  }
  function setNodeChecked(node, checked, deep) {
    node["checked"] = checked;
    node["indeterminate"] = false;
    if (!props.checkStrictly && deep) {
      setChildrenChecked(node, checked);
    }
    if (!props.checkStrictly) {
      updateParentChecked(node);
    }
  }
  function walkNodes(nodes, callback) {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      callback(node);
      walkNodes(getChildren(node), callback);
    }
  }
  function getCheckedNodes(leafOnly = false) {
    const result = [];
    walkNodes(treeData.value, (node) => {
      const isLeaf = getChildren(node).length == 0;
      if (valueToBoolean(node["checked"]) && (!leafOnly || isLeaf)) {
        result.push(node);
      }
    });
    return result;
  }
  function getCheckedKeys(leafOnly = false) {
    const checkedNodes = getCheckedNodes(leafOnly);
    const result = [];
    for (let i = 0; i < checkedNodes.length; i++) {
      result.push(getNodeKey(checkedNodes[i]));
    }
    return result;
  }
  function getHalfCheckedNodes() {
    const result = [];
    walkNodes(treeData.value, (node) => {
      if (valueToBoolean(node["indeterminate"])) {
        result.push(node);
      }
    });
    return result;
  }
  function getHalfCheckedKeys() {
    const halfCheckedNodes = getHalfCheckedNodes();
    const result = [];
    for (let i = 0; i < halfCheckedNodes.length; i++) {
      result.push(getNodeKey(halfCheckedNodes[i]));
    }
    return result;
  }
  function emitCheck(node) {
    emit("check", node, new common_vendor.UTSJSONObject({
      checkedNodes: getCheckedNodes(false),
      checkedKeys: getCheckedKeys(false),
      halfCheckedNodes: getHalfCheckedNodes(),
      halfCheckedKeys: getHalfCheckedKeys()
    }));
  }
  function handleNodeClick(item) {
    const node = item["node"];
    const oldCurrentNode = getCurrentNode();
    currentKey.value = valueToString(item["key"]);
    if (props.expandOnClickNode && valueToBoolean(item["hasChildren"])) {
      toggleExpand(item);
    }
    if (props.checkOnClickNode && props.showCheckbox && !valueToBoolean(item["disabled"])) {
      setNodeChecked(node, !valueToBoolean(node["checked"]), true);
      emitCheck(node);
    }
    emit("node-click", node);
    if (oldCurrentNode !== node) {
      emit("current-change", node, oldCurrentNode);
    }
    rebuildVisibleItems();
  }
  function handleCheckboxChange(item, checked) {
    if (valueToBoolean(item["disabled"])) {
      return null;
    }
    const node = item["node"];
    setNodeChecked(node, checked, true);
    emit("check-change", node, checked);
    emitCheck(node);
    rebuildVisibleItems();
  }
  function handleCheckboxChangeEvent(item, event = null) {
    handleCheckboxChange(item, valueToBoolean(event));
  }
  function setCheckedKeys(keys, leafOnly = false) {
    walkNodes(treeData.value, (node) => {
      node["checked"] = false;
      node["indeterminate"] = false;
    });
    for (let i = 0; i < keys.length; i++) {
      const node = getNodeByKey(keys[i]);
      if (node != null) {
        const isLeaf = getChildren(node).length == 0;
        if (!leafOnly || isLeaf) {
          setNodeChecked(node, true, !props.checkStrictly);
        }
      }
    }
    if (!props.checkStrictly) {
      syncParentChecked(treeData.value);
    }
    rebuildVisibleItems();
  }
  function setChecked(key = null, checked, deep = true) {
    const node = getNodeByKey(key);
    if (node != null) {
      setNodeChecked(node, checked, deep);
      rebuildVisibleItems();
    }
  }
  function setCurrentKey(key = null) {
    currentKey.value = valueToString(key);
  }
  function getCurrentKey() {
    return currentKey.value;
  }
  common_vendor.watch(() => {
    return props.data;
  }, () => {
    initTree();
  }, { deep: true, immediate: true });
  common_vendor.watch(() => {
    return props.props;
  }, () => {
    initTree();
  }, { deep: true });
  common_vendor.watch(() => {
    return props.nodeKey;
  }, () => {
    initTree();
  });
  common_vendor.watch(() => {
    return props.defaultExpandAll;
  }, () => {
    initTree();
  });
  common_vendor.watch(() => {
    return props.defaultExpandedKeys;
  }, () => {
    initTree();
  });
  common_vendor.watch(() => {
    return props.defaultCheckedKeys;
  }, () => {
    initTree();
  });
  common_vendor.watch(() => {
    return props.checkStrictly;
  }, () => {
    initTree();
  });
  common_vendor.watch(() => {
    return props.currentNodeKey;
  }, (value = null) => {
    currentKey.value = valueToString(value);
  }, { immediate: true });
  __expose({
    getCheckedNodes,
    getCheckedKeys,
    getHalfCheckedNodes,
    getHalfCheckedKeys,
    setCheckedKeys,
    setChecked,
    setCurrentKey,
    getCurrentKey,
    getCurrentNode
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.f(visibleItems.value, (item, k0, i0) => {
        return common_vendor.e({
          a: getItemHasChildren(item)
        }, getItemHasChildren(item) ? {
          b: "34fa8750-0-" + i0,
          c: common_vendor.p({
            name: getItemExpanded(item) ? __props.collapseIcon : __props.expandIcon,
            size: __props.iconSize,
            color: switcherColor.value,
            class: "data-v-34fa8750"
          })
        } : {}, {
          d: common_vendor.o(($event) => {
            return handleExpandClick(item);
          }, getItemKey(item))
        }, __props.showCheckbox ? {
          e: common_vendor.o(($event) => {
            return handleCheckboxChangeEvent(item, $event);
          }, getItemKey(item)),
          f: "34fa8750-1-" + i0,
          g: common_vendor.p({
            usedAlone: true,
            size: __props.checkboxSize,
            checked: getItemChecked(item),
            disabled: getItemDisabled(item),
            class: "up-tree-node__checkbox data-v-34fa8750"
          })
        } : {}, {
          h: common_vendor.t(getItemLabel(item)),
          i: common_vendor.n(getNodeContentClass(item)),
          j: common_vendor.s(getNodeContentStyle(item)),
          k: common_vendor.o(($event) => {
            return handleNodeClick(item);
          }, getItemKey(item)),
          l: getItemKey(item),
          m: common_vendor.n(getNodeClass(item))
        });
      }),
      b: __props.showCheckbox,
      c: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      d: `${_ctx.u_s_b_h}px`,
      e: `${_ctx.u_s_a_i_b}px`,
      f: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-34fa8750"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-tree/up-tree.js.map
