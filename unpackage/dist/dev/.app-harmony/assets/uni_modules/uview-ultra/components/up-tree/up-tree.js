import { _ as __easycom_1 } from "../up-icon/up-icon.js";
import { _ as __easycom_1$1 } from "../up-checkbox/up-checkbox.js";
import { j as deepClone } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, setSharedDataEvent: _setSharedDataEvent, createSharedDataSlot: _createSharedDataSlot, createSharedDataFor: _createSharedDataFor } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpTreeUpTree";
const { ref, computed, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-tree"
  },
  __dynamicSharedData: true,
  __hash: "5df5632a",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-tree/up-tree.uvue",
  __name: "up-tree",
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      }
    },
    props: {
      type: Object,
      default: () => {
        return new UTSJSONObject({
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
  },
  emits: ["node-click", "check-change", "check", "node-expand", "node-collapse", "current-change"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpTreeUpTreeSharedData", sharedDataClassId: 0 })));
    function createTreeList() {
      return [];
    }
    function createNodeMap() {
      return /* @__PURE__ */ new Map();
    }
    function createTreeProps() {
      return new UTSJSONObject({
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
    const treeData = ref(createTreeList());
    const currentKey = ref(valueToString(props.currentNodeKey));
    let nodeMap = createNodeMap();
    let privateKeySeed = 0;
    const treeProps = computed(() => {
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
    const labelKey = computed(() => {
      return valueToString(treeProps.value["label"]) == "" ? "label" : valueToString(treeProps.value["label"]);
    });
    const childrenKey = computed(() => {
      return valueToString(treeProps.value["children"]) == "" ? "children" : valueToString(treeProps.value["children"]);
    });
    const disabledKey = computed(() => {
      return valueToString(treeProps.value["disabled"]) == "" ? "disabled" : valueToString(treeProps.value["disabled"]);
    });
    const keyField = computed(() => {
      return props.nodeKey != "" ? props.nodeKey : valueToString(treeProps.value["nodeKey"]);
    });
    const switcherColor = computed(() => {
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
    function getItemIndeterminate(item) {
      return valueToBoolean(item["indeterminate"]);
    }
    function getItemDisabled(item) {
      return valueToBoolean(item["disabled"]);
    }
    function getItemSlotLevel(item) {
      const val = item["slotLevel"];
      if (typeof val === "number") {
        return val;
      }
      return parseInt(valueToString(val));
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
        const cloned = deepClone(source);
        const clone = cloned == null ? new UTSJSONObject({}) : cloned;
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
        const item = new UTSJSONObject({
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
    const visibleItems = ref(createTreeList());
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
    function getItemNode(item) {
      const node = item["node"];
      return node == null ? new UTSJSONObject({}) : node;
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
      return UTS.mapGet(nodeMap, valueToString(key));
    }
    function getCurrentNode() {
      return getNodeByKey(currentKey.value);
    }
    function getParentNode(node) {
      const parentKey = valueToString(node["__upTreeParentKey"]);
      if (parentKey == "") {
        return null;
      }
      return UTS.mapGet(nodeMap, parentKey);
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
      return new UTSJSONObject({
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
      emit("check", node, new UTSJSONObject({
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
    watch(() => {
      return props.data;
    }, () => {
      initTree();
    }, { deep: true, immediate: true });
    watch(() => {
      return props.props;
    }, () => {
      initTree();
    }, { deep: true });
    watch(() => {
      return props.nodeKey;
    }, () => {
      initTree();
    });
    watch(() => {
      return props.defaultExpandAll;
    }, () => {
      initTree();
    });
    watch(() => {
      return props.defaultExpandedKeys;
    }, () => {
      initTree();
    });
    watch(() => {
      return props.defaultCheckedKeys;
    }, () => {
      initTree();
    });
    watch(() => {
      return props.checkStrictly;
    }, () => {
      initTree();
    });
    watch(() => {
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
    return () => {
      "raw js";
      const _component_up_icon = __easycom_1;
      const _component_up_checkbox = __easycom_1$1;
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 0, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return visibleItems.value;
      }, (__sharedData_VFor0, _for_item0) => {
        _renderSharedDataEffect(() => {
          const _item = _for_item0.value;
          _setSharedDataClass(__sharedData_VFor0, 9, ["up-tree-node", getNodeClass(_item)]);
          _setSharedDataClass(__sharedData_VFor0, 10, ["up-tree-node__content", getNodeContentClass(_item)]);
          _setSharedDataStyle(__sharedData_VFor0, 11, getNodeContentStyle(_item));
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData_VFor0, 3, _toSharedDataBoolean(getItemHasChildren(_for_item0.value)));
        }, () => {
          const n4 = _createSharedDataComponentWithFallback(_component_up_icon, "a31d2efc-" + getItemKey(_for_item0.value), {
            name: () => {
              return getItemExpanded(_for_item0.value) ? __props.collapseIcon : __props.expandIcon;
            },
            size: () => {
              return __props.iconSize;
            },
            color: () => {
              return switcherColor.value;
            }
          });
          _setSharedData(__sharedData_VFor0, 4, n4?.sharedData);
        });
        _setSharedDataEvent(__sharedData_VFor0, 7, () => {
          return handleExpandClick(_for_item0.value);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData_VFor0, 1, _toSharedDataBoolean(__props.showCheckbox));
        }, () => {
          const _on_change = ($event) => {
            return handleCheckboxChangeEvent(_for_item0.value, $event);
          };
          const n8 = _createSharedDataComponentWithFallback(_component_up_checkbox, "a31d1f74-" + getItemKey(_for_item0.value), {
            class: "up-tree-node__checkbox",
            usedAlone: "",
            size: () => {
              return __props.checkboxSize;
            },
            checked: () => {
              return getItemChecked(_for_item0.value);
            },
            disabled: () => {
              return getItemDisabled(_for_item0.value);
            },
            onChange: () => {
              return _on_change;
            }
          });
          _setSharedData(__sharedData_VFor0, 2, n8?.sharedData);
        });
        _createSharedDataSlot("default", {
          node: () => {
            return getItemNode(_for_item0.value);
          },
          data: () => {
            return getItemNode(_for_item0.value);
          },
          level: () => {
            return getItemSlotLevel(_for_item0.value);
          },
          expanded: () => {
            return getItemExpanded(_for_item0.value);
          },
          checked: () => {
            return getItemChecked(_for_item0.value);
          },
          indeterminate: () => {
            return getItemIndeterminate(_for_item0.value);
          },
          disabled: () => {
            return getItemDisabled(_for_item0.value);
          }
        }, (data) => {
          return _setSharedData(__sharedData_VFor0, 5, data);
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData_VFor0, 6, _toDisplayString(getItemLabel(_for_item0.value)));
          });
        });
        _setSharedDataEvent(__sharedData_VFor0, 8, () => {
          return handleNodeClick(_for_item0.value);
        });
        return null;
      }, (__sharedData_VFor0, item) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(getItemKey(item)));
      }, 1);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-tree.js.map
