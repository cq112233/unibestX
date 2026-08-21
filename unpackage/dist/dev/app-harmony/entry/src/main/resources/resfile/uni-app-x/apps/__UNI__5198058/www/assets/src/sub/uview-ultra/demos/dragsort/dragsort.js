import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-dragsort/up-dragsort.js";
import { _ as __easycom_1$1 } from "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
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
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, createSharedDataScopedSlot: _createSharedDataScopedSlot, createSharedDataVSlot: _createSharedDataVSlot, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, withSharedDataVaporCtx: _withSharedDataVaporCtx, setSharedDataClass: _setSharedDataClass, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosDragsortDragsort";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "b09698f4",
  __className,
  __filename: "src/sub/uview-ultra/demos/dragsort/dragsort.uvue",
  __name: "dragsort",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosDragsortDragsortSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosDragsortDragsortSharedData", sharedDataClassId: 0 })));
    const __sharedDataScope = _useSharedDataScope(__sharedData);
    const plainList = ref([
      new UTSJSONObject({ id: 1, label: "普通列表项 1" }),
      new UTSJSONObject({ id: 2, label: "普通列表项 2" }),
      new UTSJSONObject({ id: 3, label: "普通列表项 3" }),
      new UTSJSONObject({ id: 4, label: "普通列表项 4" }),
      new UTSJSONObject({ id: 5, label: "普通列表项 5" })
    ]);
    const leftHandleList = ref([
      new UTSJSONObject({ id: 1, label: "左侧手柄项 1" }),
      new UTSJSONObject({ id: 2, label: "左侧手柄项 2" }),
      new UTSJSONObject({ id: 3, label: "左侧手柄项 3" }),
      new UTSJSONObject({ id: 4, label: "左侧手柄项 4" })
    ]);
    const verticalList = ref([
      new UTSJSONObject({ id: 1, label: "列表项 1" }),
      new UTSJSONObject({ id: 2, label: "列表项 2" }),
      new UTSJSONObject({ id: 3, label: "列表项 3" }),
      new UTSJSONObject({ id: 4, label: "列表项 4" }),
      new UTSJSONObject({ id: 5, label: "列表项 5" })
    ]);
    const horizontalList = ref([
      new UTSJSONObject({ id: 1, label: "卡片 1" }),
      new UTSJSONObject({ id: 2, label: "卡片 2" }),
      new UTSJSONObject({ id: 3, label: "卡片 3" }),
      new UTSJSONObject({ id: 4, label: "卡片 4" })
    ]);
    const gridList = ref([
      new UTSJSONObject({ id: 1, label: "应用 1" }),
      new UTSJSONObject({ id: 2, label: "应用 2" }),
      new UTSJSONObject({ id: 3, label: "应用 3" }),
      new UTSJSONObject({ id: 4, label: "应用 4" }),
      new UTSJSONObject({ id: 5, label: "应用 5" }),
      new UTSJSONObject({ id: 6, label: "应用 6" }),
      new UTSJSONObject({ id: 7, label: "应用 7" }),
      new UTSJSONObject({ id: 8, label: "应用 8" })
    ]);
    const disabledList = ref([
      new UTSJSONObject({ id: 1, label: "普通项 1" }),
      new UTSJSONObject({ id: 2, label: "锁定项（不可拖动）", draggable: false }),
      new UTSJSONObject({ id: 3, label: "普通项 2" }),
      new UTSJSONObject({ id: 4, label: "普通项 3" }),
      new UTSJSONObject({ id: 5, label: "锁定项（不可拖动）", draggable: false }),
      new UTSJSONObject({ id: 6, label: "普通项 4" })
    ]);
    const eventLog = ref("拖拽完成后，drag-end 会返回最新列表顺序");
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
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_title = __easycom_1;
      const _component_up_dragsort = __easycom_2;
      const _component_up_icon = __easycom_1$1;
      const n71 = _createSharedDataComponent(AppKu, "d9a0f376", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n70 = _createSharedDataComponent(LayoutComponent, "5a7d7b5e", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-dragsort 拖拽排序"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "f531eefc", { title: "up-dragsort 拖拽排序" });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_title, "f531e16a", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 3, n2?.sharedData);
              const n7 = _createSharedDataComponentWithFallback(_component_up_dragsort, "f531d93c", {
                "initial-list": () => {
                  return plainList.value;
                },
                direction: "vertical",
                onDragEnd: () => {
                  return onDragEnd;
                }
              }, {
                "default": _createSharedDataScopedSlot(_createSharedDataVSlot(__sharedDataScope, () => {
                  return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
                }), (_slotProps0, __sharedData_VSlot0) => {
                  _renderSharedDataEffect(() => {
                    _setSharedData(__sharedData_VSlot0, 0, _toDisplayString(getLabel(_slotProps0.item)));
                    _setSharedData(__sharedData_VSlot0, 1, _toDisplayString(_slotProps0.index + 1));
                  });
                })
              });
              _setSharedData(__sharedData, 4, n7?.sharedData);
              const n10 = _createSharedDataComponentWithFallback(_component_up_title, "f531b2ee", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 5, n10?.sharedData);
              const n18 = _createSharedDataComponentWithFallback(_component_up_dragsort, "2779ecd4", {
                "initial-list": () => {
                  return verticalList.value;
                },
                direction: "vertical",
                "handle-drag": "",
                onDragEnd: () => {
                  return onDragEnd;
                }
              }, {
                "handler": _withSharedDataVaporCtx(() => {
                  const n11 = _createSharedDataComponentWithFallback(_component_up_icon, "2779f4b4", {
                    name: "list",
                    color: "#64748b",
                    size: "20"
                  });
                  _setSharedData(__sharedData, 7, n11?.sharedData);
                }),
                "default": _createSharedDataScopedSlot(_createSharedDataVSlot(__sharedDataScope, () => {
                  return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
                }), (_slotProps0, __sharedData_VSlot1) => {
                  _renderSharedDataEffect(() => {
                    _setSharedData(__sharedData_VSlot1, 0, _toDisplayString(getLabel(_slotProps0.item)));
                    _setSharedData(__sharedData_VSlot1, 1, _toDisplayString(_slotProps0.index + 1));
                  });
                })
              });
              _setSharedData(__sharedData, 6, n18?.sharedData);
              const n21 = _createSharedDataComponentWithFallback(_component_up_title, "277a0793", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 8, n21?.sharedData);
              const n29 = _createSharedDataComponentWithFallback(_component_up_dragsort, "277a0b92", {
                "initial-list": () => {
                  return leftHandleList.value;
                },
                direction: "vertical",
                "handle-drag": "",
                "handler-position": "left",
                onDragEnd: () => {
                  return onDragEnd;
                }
              }, {
                "handler": _withSharedDataVaporCtx(() => {
                  const n22 = _createSharedDataComponentWithFallback(_component_up_icon, "277a6572", {
                    name: "list",
                    color: "#64748b",
                    size: "20"
                  });
                  _setSharedData(__sharedData, 10, n22?.sharedData);
                }),
                "default": _createSharedDataScopedSlot(_createSharedDataVSlot(__sharedDataScope, () => {
                  return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 3 });
                }), (_slotProps0, __sharedData_VSlot2) => {
                  _renderSharedDataEffect(() => {
                    _setSharedData(__sharedData_VSlot2, 0, _toDisplayString(getLabel(_slotProps0.item)));
                    _setSharedData(__sharedData_VSlot2, 1, _toDisplayString(_slotProps0.index + 1));
                  });
                })
              });
              _setSharedData(__sharedData, 9, n29?.sharedData);
              const n32 = _createSharedDataComponentWithFallback(_component_up_title, "277a7870", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 11, n32?.sharedData);
              const n39 = _createSharedDataComponentWithFallback(_component_up_dragsort, "277a7c71", {
                "initial-list": () => {
                  return horizontalList.value;
                },
                direction: "horizontal",
                "handle-drag": "",
                onDragEnd: () => {
                  return onDragEnd;
                }
              }, {
                "handler": _withSharedDataVaporCtx(() => {
                  const n33 = _createSharedDataComponentWithFallback(_component_up_icon, "277ad5cc", {
                    name: "list",
                    color: "#2563eb",
                    size: "20"
                  });
                  _setSharedData(__sharedData, 13, n33?.sharedData);
                }),
                "default": _createSharedDataScopedSlot(_createSharedDataVSlot(__sharedDataScope, () => {
                  return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 4 });
                }), (_slotProps0, __sharedData_VSlot3) => {
                  _renderSharedDataEffect(() => {
                    return _setSharedData(__sharedData_VSlot3, 0, _toDisplayString(getLabel(_slotProps0.item)));
                  });
                })
              });
              _setSharedData(__sharedData, 12, n39?.sharedData);
              const n42 = _createSharedDataComponentWithFallback(_component_up_title, "277ae4f5", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 14, n42?.sharedData);
              const n50 = _createSharedDataComponentWithFallback(_component_up_dragsort, "277ae931", {
                "initial-list": () => {
                  return gridList.value;
                },
                direction: "all",
                columns: 3,
                "handle-drag": "",
                onDragEnd: () => {
                  return onDragEnd;
                }
              }, {
                "handler": _withSharedDataVaporCtx(() => {
                  const n43 = _createSharedDataComponentWithFallback(_component_up_icon, "277af3d9", {
                    name: "list",
                    color: "#475569",
                    size: "14"
                  });
                  _setSharedData(__sharedData, 16, n43?.sharedData);
                }),
                "default": _createSharedDataScopedSlot(_createSharedDataVSlot(__sharedDataScope, () => {
                  return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 5 });
                }), (_slotProps0, __sharedData_VSlot4) => {
                  _renderSharedDataEffect(() => {
                    _setSharedData(__sharedData_VSlot4, 0, _toDisplayString(getLabel(_slotProps0.item)));
                    _setSharedData(__sharedData_VSlot4, 1, _toDisplayString(_slotProps0.index + 1));
                  });
                })
              });
              _setSharedData(__sharedData, 15, n50?.sharedData);
              const n53 = _createSharedDataComponentWithFallback(_component_up_title, "277b55ad", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 17, n53?.sharedData);
              const n60 = _createSharedDataComponentWithFallback(_component_up_dragsort, "277b59cc", {
                "initial-list": () => {
                  return disabledList.value;
                },
                direction: "vertical",
                "handle-drag": "",
                onDragEnd: () => {
                  return onDragEnd;
                }
              }, {
                "handler": _withSharedDataVaporCtx(_createSharedDataScopedSlot(_createSharedDataVSlot(__sharedDataScope, () => {
                  return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 6 });
                }), (_slotProps0, __sharedData_VSlot5) => {
                  _renderSharedDataEffect(() => {
                    return _setSharedDataClass(__sharedData_VSlot5, 1, ["drag-handler", getItemDisabled(_slotProps0.item) ? "drag-handler--disabled" : ""]);
                  });
                  const n54 = _createSharedDataComponentWithFallback(_component_up_icon, "277b654f", {
                    name: "list",
                    color: () => {
                      return getItemDisabled(_slotProps0.item) ? "#94a3b8" : "#64748b";
                    },
                    size: "20"
                  });
                  _setSharedData(__sharedData_VSlot5, 0, n54?.sharedData);
                })),
                "default": _createSharedDataScopedSlot(_createSharedDataVSlot(__sharedDataScope, () => {
                  return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 7 });
                }), (_slotProps0, __sharedData_VSlot6) => {
                  _renderSharedDataEffect(() => {
                    const _item = _slotProps0.item;
                    _setSharedDataClass(__sharedData_VSlot6, 0, ["drag-item", getItemDisabled(_item) ? "drag-item--disabled" : ""]);
                    _setSharedData(__sharedData_VSlot6, 1, _toDisplayString(getLabel(_item)));
                  });
                })
              });
              _setSharedData(__sharedData, 18, n60?.sharedData);
              const n63 = _createSharedDataComponentWithFallback(_component_up_title, "277bca09", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 19, n63?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 20, _toDisplayString(eventLog.value));
              });
            })
          });
          _setSharedData(__sharedData, 1, n70.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n71.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const dragsort = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  dragsort as default
};
//# sourceMappingURL=dragsort.js.map
