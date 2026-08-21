import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-tree/up-tree.js";
import { _ as __easycom_3 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { A as AppKu } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/app.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../tabbar/store.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/config.js";
import "../../../../i18n/index.js";
import "../../../../../uni_modules/lime-i18n/common/index.js";
import "../../../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/lime-i18n/common/format.js";
import "../../../../../uni_modules/lime-i18n/common/util.js";
import "../../../../../uni_modules/lime-i18n/common/errors.js";
import "../../../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../../../uni_modules/lime-i18n/common/types.js";
import "../../../../i18n/locales/zh-CN.js";
import "../../../../i18n/locales/en-US.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/index.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ru.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../utils/theme.js";
import "../../../../../theme.js";
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-checkbox/up-checkbox.js";
import "../../../../../uni_modules/uview-ultra/components/up-checkbox/checkbox.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../utils/toast.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosTreeTree";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "785d47de",
  __className,
  __filename: "src/sub/uview-ultra/demos/tree/tree.uvue",
  __name: "tree",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosTreeTreeSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosTreeTreeSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const treeData = ref([
      new UTSJSONObject({
        id: 1,
        label: "一级菜单 1",
        children: [
          new UTSJSONObject({ id: 11, label: "二级菜单 1-1" }),
          new UTSJSONObject({
            id: 12,
            label: "二级菜单 1-2",
            children: [
              new UTSJSONObject({ id: 121, label: "三级菜单 1-2-1" }),
              new UTSJSONObject({ id: 122, label: "三级菜单 1-2-2" })
            ]
          })
        ]
      }),
      new UTSJSONObject({
        id: 2,
        label: "一级菜单 2",
        children: [
          new UTSJSONObject({ id: 21, label: "二级菜单 2-1" })
        ]
      }),
      new UTSJSONObject({ id: 3, label: "一级菜单 3（叶子节点）" })
    ]);
    const customTreeProps = ref(new UTSJSONObject({
      label: "name",
      children: "list",
      nodeKey: "key",
      disabled: "forbidden"
    }));
    const customData = ref([
      new UTSJSONObject({
        key: "c1",
        name: "自定义字段 1",
        forbidden: false,
        list: [
          new UTSJSONObject({ key: "c1-1", name: "自定义字段 1-1", forbidden: false }),
          new UTSJSONObject({ key: "c1-2", name: "自定义字段 1-2（禁用）", forbidden: true })
        ]
      }),
      new UTSJSONObject({ key: "c2", name: "自定义字段 2", forbidden: false })
    ]);
    const eventLog = ref("点击节点或勾选复选框试试");
    const apiLog = ref("");
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
    const treeRef = ref(null);
    function onSetCheckedKeys() {
      const tree2 = treeRef.value;
      if (tree2 != null) {
        tree2.$callMethod("setCheckedKeys", [1, 11], false);
        apiLog.value = "已调用 setCheckedKeys([1, 11])";
      }
    }
    function onGetCheckedKeys() {
      const tree2 = treeRef.value;
      if (tree2 != null) {
        const keys = tree2.$callMethod("getCheckedKeys", false);
        apiLog.value = `getCheckedKeys() => ${keys.join(", ")}`;
      }
    }
    function onSetCurrentKey() {
      const tree2 = treeRef.value;
      if (tree2 != null) {
        tree2.$callMethod("setCurrentKey", 21);
        apiLog.value = "已调用 setCurrentKey(21)";
      }
    }
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_NavBar = __easycom_0;
      const _component_up_title = __easycom_1;
      const _component_up_tree = __easycom_2;
      const _component_up_button = __easycom_3;
      const n47 = _createSharedDataComponent(AppKu, "2b18be46", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n46 = _createSharedDataComponent(LayoutComponent, "64007ab9", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-tree 树形"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "1c0edd14", { title: "up-tree 树形" });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_title, "1c0ee3bd", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 3, n2?.sharedData);
              const n3 = _createSharedDataComponentWithFallback(_component_up_tree, "1c0ee7bd", { data: () => {
                return treeData.value;
              } });
              _setSharedData(__sharedData, 4, n3?.sharedData);
              const n6 = _createSharedDataComponentWithFallback(_component_up_title, "1c0eebda", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 5, n6?.sharedData);
              const n7 = _createSharedDataComponentWithFallback(_component_up_tree, "1c0eefbc", {
                data: () => {
                  return treeData.value;
                },
                "default-expand-all": ""
              });
              _setSharedData(__sharedData, 6, n7?.sharedData);
              const n10 = _createSharedDataComponentWithFallback(_component_up_title, "1c0ef6bf", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 7, n10?.sharedData);
              const n11 = _createSharedDataComponentWithFallback(_component_up_tree, "1c0efac1", {
                data: () => {
                  return treeData.value;
                },
                "default-expanded-keys": [1, 11],
                "current-node-key": 12,
                "highlight-current": ""
              });
              _setSharedData(__sharedData, 8, n11?.sharedData);
              const n14 = _createSharedDataComponentWithFallback(_component_up_title, "65ccaeff", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 9, n14?.sharedData);
              const n15 = _createSharedDataComponentWithFallback(_component_up_tree, "65ccb2fb", {
                data: () => {
                  return treeData.value;
                },
                "show-checkbox": ""
              });
              _setSharedData(__sharedData, 10, n15?.sharedData);
              const n18 = _createSharedDataComponentWithFallback(_component_up_title, "65ccb753", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 11, n18?.sharedData);
              const n19 = _createSharedDataComponentWithFallback(_component_up_tree, "65ccbdfb", {
                data: () => {
                  return treeData.value;
                },
                "show-checkbox": "",
                "check-strictly": ""
              });
              _setSharedData(__sharedData, 12, n19?.sharedData);
              const n22 = _createSharedDataComponentWithFallback(_component_up_title, "65ccc25e", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 13, n22?.sharedData);
              const n23 = _createSharedDataComponentWithFallback(_component_up_tree, "65ccc65d", {
                data: () => {
                  return treeData.value;
                },
                accordion: ""
              });
              _setSharedData(__sharedData, 14, n23?.sharedData);
              const n26 = _createSharedDataComponentWithFallback(_component_up_title, "65cd1bf8", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 15, n26?.sharedData);
              const n27 = _createSharedDataComponentWithFallback(_component_up_tree, "65cd2039", {
                data: () => {
                  return customData.value;
                },
                props: () => {
                  return customTreeProps.value;
                }
              });
              _setSharedData(__sharedData, 16, n27?.sharedData);
              const n30 = _createSharedDataComponentWithFallback(_component_up_title, "65cd2739", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 17, n30?.sharedData);
              const n31 = _createSharedDataComponentWithFallback(_component_up_tree, "65cd2b19", {
                data: () => {
                  return treeData.value;
                },
                "show-checkbox": "",
                onNodeClick: () => {
                  return onNodeClick;
                },
                onNodeExpand: () => {
                  return onNodeExpand;
                },
                onNodeCollapse: () => {
                  return onNodeCollapse;
                },
                onCheckChange: () => {
                  return onCheckChange;
                }
              });
              _setSharedData(__sharedData, 18, n31?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 24, _toDisplayString(eventLog.value));
              });
              const n36 = _createSharedDataComponentWithFallback(_component_up_title, "65cd3a9d", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 19, n36?.sharedData);
              const n37 = _createSharedDataComponentWithFallback(_component_up_tree, "65cd3e96", {
                data: () => {
                  return treeData.value;
                },
                "show-checkbox": "",
                "default-expand-all": ""
              });
              _setSharedData(__sharedData, 20, n37?.sharedData);
              _setTemplateRef(n37, treeRef, null, "treeRef");
              const n38 = _createSharedDataComponentWithFallback(_component_up_button, "65cd941b", {
                text: "setCheckedKeys",
                type: "primary",
                size: "small",
                class: "demo-btn",
                onClick: () => {
                  return onSetCheckedKeys;
                }
              });
              _setSharedData(__sharedData, 21, n38?.sharedData);
              const n39 = _createSharedDataComponentWithFallback(_component_up_button, "65cd9836", {
                text: "getCheckedKeys",
                type: "primary",
                size: "small",
                class: "demo-btn",
                onClick: () => {
                  return onGetCheckedKeys;
                }
              });
              _setSharedData(__sharedData, 22, n39?.sharedData);
              const n40 = _createSharedDataComponentWithFallback(_component_up_button, "65cd9c51", {
                text: "setCurrentKey",
                type: "primary",
                size: "small",
                class: "demo-btn",
                onClick: () => {
                  return onSetCurrentKey;
                }
              });
              _setSharedData(__sharedData, 23, n40?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 25, _toDisplayString(apiLog.value));
              });
            })
          });
          _setSharedData(__sharedData, 1, n46.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n47.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const tree = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  tree as default
};
//# sourceMappingURL=tree.js.map
