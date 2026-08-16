import { _ as __easycom_0 } from "../../components/NavBar/NavBar.js";
import { _ as __easycom_0$1 } from "../../../uni_modules/rice-ui/components/rice-icon/rice-icon.js";
import { _ as __easycom_1 } from "../../../uni_modules/rice-ui/components/rice-cell/rice-cell.js";
import { _ as __easycom_3 } from "../../../uni_modules/rice-ui/components/rice-cell-group/rice-cell-group.js";
import { _ as _sfc_main$1 } from "../../../App.ku.js";
import "../../store/index.js";
import { i as isDark, s as setTheme } from "../../../uni_modules/rice-ui/libs/store/useConfig.js";
import "../../../uni_modules/rice-ui/libs/use/useCountDown/index.js";
import "../../../uni_modules/rice-ui/libs/use/useNamespace/index.js";
import "../../../uni_modules/rice-ui/libs/use/usePopup/index.js";
import "../../../uni_modules/rice-ui/libs/use/useRelation/useChildren.js";
import "../../../uni_modules/rice-ui/libs/use/useRelation/useParent.js";
import "../../../uni_modules/rice-ui/libs/use/useSafeArea/index.js";
import "../../../uni_modules/rice-ui/libs/use/useTouch/index.js";
import "../../../uni_modules/rice-ui/libs/plugin/coloruts/constant.js";
import "../../../uni_modules/rice-ui/libs/plugin/coloruts/type.js";
import "../../../uni_modules/rice-ui/libs/plugin/dateuts/type.js";
import "../../../uni_modules/rice-ui/libs/plugin/dateuts/locale.js";
import "../../../uni_modules/rice-ui/components/rice-action-sheet/type.js";
import "../../../uni_modules/rice-ui/components/rice-action-sheet/api.js";
import "../../../uni_modules/rice-ui/components/rice-button/type.js";
import "../../../uni_modules/rice-ui/components/rice-calendar/type.js";
import "../../../uni_modules/rice-ui/components/rice-cascader/type.js";
import "../../../uni_modules/rice-ui/components/rice-dialog/type.js";
import "../../../uni_modules/rice-ui/components/rice-dialog/api.js";
import "../../../uni_modules/rice-ui/components/rice-datetime-picker/type.js";
import "../../../uni_modules/rice-ui/components/rice-float-fab/type.js";
import "../../../uni_modules/rice-ui/components/rice-loading/type.js";
import "../../../uni_modules/rice-ui/components/rice-picker/type.js";
import "../../../uni_modules/rice-ui/libs/utils/basic.js";
import "../../../uni_modules/rice-ui/components/rice-swipe-actions-item/type.js";
import "../../../uni_modules/rice-ui/components/rice-tabs/type.js";
import "../../../uni_modules/rice-ui/components/rice-icon/font.js";
import "../../../uni_modules/rice-ui/components/rice-uploader/type.js";
import "../../../uni_modules/rice-ui/components/rice-form/index.js";
import "../../../uni_modules/rice-ui/components/rice-radio/type.js";
import "../../../uni_modules/rice-ui/components/rice-radio-group/index.js";
import "../../../uni_modules/rice-ui/components/rice-checkbox/type.js";
import "../../../uni_modules/rice-ui/components/rice-checkbox-group/index.js";
import "../../../uni_modules/rice-ui/components/rice-code-input/type.js";
import "../../../uni_modules/rice-ui/components/rice-qrcode/type.js";
import { u as useAppStore } from "../../store/app.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../utils/systemInfo.js";
import "../../../uni_modules/rice-ui/components/rice-icon/type.js";
import "../../../uni_modules/rice-ui/libs/utils/debug.js";
import "../../../uni_modules/rice-ui/components/rice-cell/type.js";
import "../../../uni_modules/rice-ui/components/rice-cell-group/type.js";
import "../../tabbar/index.js";
import "../../tabbar/store.js";
import "../../tabbar/types.js";
import "../../tabbar/config.js";
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../utils/i18n.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh-CN.js";
import "../../i18n/locales/en-US.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/token.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../store/user.js";
import "../../../uni_modules/rice-ui/components/rice-calendar/lunar.js";
import "../../../uni_modules/rice-ui/components/rice-badge/type.js";
import "../../../uni_modules/rice-ui/components/rice-form/type.js";
import "../../../uni_modules/rice-ui/components/rice-form-item/index.js";
import "../../../uni_modules/rice-ui/components/rice-form-item/type.js";
import "../../../uni_modules/rice-ui/components/rice-radio-group/type.js";
import "../../../uni_modules/rice-ui/components/rice-checkbox-group/type.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataEvent: _setSharedDataEvent, setSharedDataStyle: _setSharedDataStyle, toDisplayString: _toDisplayString, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubRiceUiRiceUi";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "2b3fb793",
  __className,
  __filename: "src/sub/rice-ui/rice-ui.uvue",
  __name: "rice-ui",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubRiceUiRiceUiSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubRiceUiRiceUiSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const appStore = useAppStore();
    const currentTheme = computed(() => {
      return appStore.state.theme;
    });
    const isDarkMode = computed(() => {
      return isDark.value;
    });
    function toggleTheme() {
      if (isDarkMode.value) {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    }
    function goToDemo(page) {
      uni.navigateTo({
        url: `/src/sub/rice-ui/demos/${page}/${page}`,
        fail: (err) => {
          uni.__f__("error", "at src/sub/rice-ui/rice-ui.uvue:362", "goToDemo fail:", err);
          uni.showToast({
            title: `打开 ${page} 页面失败`,
            icon: "none"
          });
        }
      });
    }
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_rice_icon = __easycom_0$1;
      const _component_rice_cell = __easycom_1;
      const _component_rice_cell_group = __easycom_3;
      const n184 = _createSharedDataComponent(_sfc_main$1, "6cc84529", null, {
        "default": _withSharedDataVaporCtx(() => {
          _renderSharedDataEffect(() => {
            return _setSharedDataClass(__sharedData, 106, ["page-container pb-50px", isDarkMode.value ? "bg-__121212_" : "bg-__f8fafc_"]);
          });
          const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "5bcb9d86", {
            title: "Rice UI 组件演示",
            "auto-back": true,
            "safe-area-inset-top": true,
            "bg-color": () => {
              return isDarkMode.value ? "#1e1e1e" : "#ffffff";
            }
          });
          _setSharedData(__sharedData, 1, n0?.sharedData);
          _setSharedDataEvent(__sharedData, 105, toggleTheme);
          _renderSharedDataEffect(() => {
            const _isDarkMode = isDarkMode.value;
            const _isDarkMode_text_f8fafc_text_1e293b = _isDarkMode ? "text-__f8fafc_" : "text-__1e293b_";
            const _isDarkMode_bg_1e1e1e_bg_white = _isDarkMode ? "bg-__1e1e1e_" : "bg-white";
            const __backgroundColor_currentTheme = { backgroundColor: currentTheme.value };
            _setSharedDataClass(__sharedData, 107, ["p-16px mb-12px shadow-xs flex-row items-center justify-between", _isDarkMode_bg_1e1e1e_bg_white]);
            _setSharedDataClass(__sharedData, 108, ["text-16px font-bold", _isDarkMode_text_f8fafc_text_1e293b]);
            _setSharedDataStyle(__sharedData, 109, __backgroundColor_currentTheme);
            _setSharedDataClass(__sharedData, 110, ["text-12px mt-4px", _isDarkMode ? "text-__94a3b8_" : "text-__64748b_"]);
            _setSharedDataClass(__sharedData, 111, ["px-10px py-6px rounded-6px flex-row items-center", _isDarkMode ? "bg-__334155_" : "bg-__f1f5f9_"]);
            _setSharedDataClass(__sharedData, 112, ["text-12px font-medium", _isDarkMode ? "text-__f8fafc_" : "text-__334155_"]);
            _setSharedData(__sharedData, 113, _toDisplayString(_isDarkMode ? "🌙 暗黑" : "☀️ 明亮"));
            _setSharedDataClass(__sharedData, 114, ["demo-group-card", _isDarkMode_bg_1e1e1e_bg_white]);
            _setSharedDataStyle(__sharedData, 115, __backgroundColor_currentTheme);
            _setSharedDataClass(__sharedData, 116, ["group-title", _isDarkMode_text_f8fafc_text_1e293b]);
          });
          const n26 = _createSharedDataComponentWithFallback(_component_rice_cell_group, "1da82e71", { border: false }, {
            "default": _withSharedDataVaporCtx(() => {
              const _on_click = () => {
                return goToDemo("button");
              };
              const n16 = _createSharedDataComponentWithFallback(_component_rice_cell, "1da8317a", {
                title: "Button 按钮",
                "is-link": "",
                onClick: () => {
                  return _on_click;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n14 = _createSharedDataComponentWithFallback(_component_rice_icon, "1da8842e", {
                    name: "plus",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 4, n14?.sharedData);
                })
              });
              _setSharedData(__sharedData, 3, n16?.sharedData);
              const _on_click1 = () => {
                return goToDemo("icon");
              };
              const n19 = _createSharedDataComponentWithFallback(_component_rice_cell, "1da88869", {
                title: "Icon 图标",
                "is-link": "",
                onClick: () => {
                  return _on_click1;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n17 = _createSharedDataComponentWithFallback(_component_rice_icon, "1da88c44", {
                    name: "search",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 6, n17?.sharedData);
                })
              });
              _setSharedData(__sharedData, 5, n19?.sharedData);
              const _on_click2 = () => {
                return goToDemo("image");
              };
              const n22 = _createSharedDataComponentWithFallback(_component_rice_cell, "1da8930c", {
                title: "Image 图片",
                "is-link": "",
                onClick: () => {
                  return _on_click2;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n20 = _createSharedDataComponentWithFallback(_component_rice_icon, "1da896d4", {
                    name: "photo",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 8, n20?.sharedData);
                })
              });
              _setSharedData(__sharedData, 7, n22?.sharedData);
              const _on_click3 = () => {
                return goToDemo("layout");
              };
              const n25 = _createSharedDataComponentWithFallback(_component_rice_cell, "1da89b10", {
                title: "Layout 布局",
                "is-link": "",
                onClick: () => {
                  return _on_click3;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n23 = _createSharedDataComponentWithFallback(_component_rice_icon, "1da89eef", {
                    name: "app",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 10, n23?.sharedData);
                })
              });
              _setSharedData(__sharedData, 9, n25?.sharedData);
            })
          });
          _setSharedData(__sharedData, 2, n26?.sharedData);
          _renderSharedDataEffect(() => {
            const _isDarkMode = isDarkMode.value;
            _setSharedDataClass(__sharedData, 117, ["demo-group-card", _isDarkMode ? "bg-__1e1e1e_" : "bg-white"]);
            _setSharedDataStyle(__sharedData, 118, { backgroundColor: currentTheme.value });
            _setSharedDataClass(__sharedData, 119, ["group-title", _isDarkMode ? "text-__f8fafc_" : "text-__1e293b_"]);
          });
          const n85 = _createSharedDataComponentWithFallback(_component_rice_cell_group, "1da903b2", { border: false }, {
            "default": _withSharedDataVaporCtx(() => {
              const _on_click4 = () => {
                return goToDemo("calendar");
              };
              const n33 = _createSharedDataComponentWithFallback(_component_rice_cell, "1da90445", {
                title: "Calendar 日历",
                "is-link": "",
                onClick: () => {
                  return _on_click4;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n31 = _createSharedDataComponentWithFallback(_component_rice_icon, "1da90828", {
                    name: "calendar",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 13, n31?.sharedData);
                })
              });
              _setSharedData(__sharedData, 12, n33?.sharedData);
              const _on_click5 = () => {
                return goToDemo("cascader");
              };
              const n36 = _createSharedDataComponentWithFallback(_component_rice_cell, "1da90ef2", {
                title: "Cascader 级联选择器",
                "is-link": "",
                onClick: () => {
                  return _on_click5;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n34 = _createSharedDataComponentWithFallback(_component_rice_icon, "1da912ed", {
                    name: "bars",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 15, n34?.sharedData);
                })
              });
              _setSharedData(__sharedData, 14, n36?.sharedData);
              const _on_click6 = () => {
                return goToDemo("checkbox");
              };
              const n39 = _createSharedDataComponentWithFallback(_component_rice_cell, "1da91713", {
                title: "Checkbox 复选框",
                "is-link": "",
                onClick: () => {
                  return _on_click6;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n37 = _createSharedDataComponentWithFallback(_component_rice_icon, "1da91b0c", {
                    name: "checked-circle",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 17, n37?.sharedData);
                })
              });
              _setSharedData(__sharedData, 16, n39?.sharedData);
              const _on_click7 = () => {
                return goToDemo("code-input");
              };
              const n42 = _createSharedDataComponentWithFallback(_component_rice_cell, "1da970c6", {
                title: "CodeInput 验证码输入框",
                "is-link": "",
                onClick: () => {
                  return _on_click7;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n40 = _createSharedDataComponentWithFallback(_component_rice_icon, "1da974c5", {
                    name: "edit",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 19, n40?.sharedData);
                })
              });
              _setSharedData(__sharedData, 18, n42?.sharedData);
              const _on_click8 = () => {
                return goToDemo("color-picker");
              };
              const n45 = _createSharedDataComponentWithFallback(_component_rice_cell, "1da978eb", {
                title: "ColorPicker 颜色选择器",
                "is-link": "",
                onClick: () => {
                  return _on_click8;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n43 = _createSharedDataComponentWithFallback(_component_rice_icon, "1da97f8d", {
                    name: "set",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 21, n43?.sharedData);
                })
              });
              _setSharedData(__sharedData, 20, n45?.sharedData);
              const _on_click9 = () => {
                return goToDemo("datetime-picker");
              };
              const n48 = _createSharedDataComponentWithFallback(_component_rice_cell, "1da983b2", {
                title: "DateTimePicker 时间选择器",
                "is-link": "",
                onClick: () => {
                  return _on_click9;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n46 = _createSharedDataComponentWithFallback(_component_rice_icon, "1da987cf", {
                    name: "calendar",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 23, n46?.sharedData);
                })
              });
              _setSharedData(__sharedData, 22, n48?.sharedData);
              const _on_click10 = () => {
                return goToDemo("form");
              };
              const n51 = _createSharedDataComponentWithFallback(_component_rice_cell, "1da98eae", {
                title: "Form 表单",
                "is-link": "",
                onClick: () => {
                  return _on_click10;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n49 = _createSharedDataComponentWithFallback(_component_rice_icon, "1da9e149", {
                    name: "file-success",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 25, n49?.sharedData);
                })
              });
              _setSharedData(__sharedData, 24, n51?.sharedData);
              const _on_click11 = () => {
                return goToDemo("input");
              };
              const n54 = _createSharedDataComponentWithFallback(_component_rice_cell, "1da9e5a1", {
                title: "Input 输入框",
                "is-link": "",
                onClick: () => {
                  return _on_click11;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n52 = _createSharedDataComponentWithFallback(_component_rice_icon, "1da9e96a", {
                    name: "edit",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 27, n52?.sharedData);
                })
              });
              _setSharedData(__sharedData, 26, n54?.sharedData);
              const _on_click12 = () => {
                return goToDemo("picker");
              };
              const n57 = _createSharedDataComponentWithFallback(_component_rice_cell, "1da9f030", {
                title: "Picker 选择器",
                "is-link": "",
                onClick: () => {
                  return _on_click12;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n55 = _createSharedDataComponentWithFallback(_component_rice_icon, "1da9f410", {
                    name: "arrow-down",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 29, n55?.sharedData);
                })
              });
              _setSharedData(__sharedData, 28, n57?.sharedData);
              const _on_click13 = () => {
                return goToDemo("radio");
              };
              const n60 = _createSharedDataComponentWithFallback(_component_rice_cell, "1da9f866", {
                title: "Radio 单选框",
                "is-link": "",
                onClick: () => {
                  return _on_click13;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n58 = _createSharedDataComponentWithFallback(_component_rice_icon, "1da9fc2f", {
                    name: "checked-circle",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 31, n58?.sharedData);
                })
              });
              _setSharedData(__sharedData, 30, n60?.sharedData);
              const _on_click14 = () => {
                return goToDemo("rate");
              };
              const n63 = _createSharedDataComponentWithFallback(_component_rice_cell, "1daa0314", {
                title: "Rate 评分",
                "is-link": "",
                onClick: () => {
                  return _on_click14;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n61 = _createSharedDataComponentWithFallback(_component_rice_icon, "1daa55c4", {
                    name: "star-fill",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 33, n61?.sharedData);
                })
              });
              _setSharedData(__sharedData, 32, n63?.sharedData);
              const _on_click15 = () => {
                return goToDemo("search");
              };
              const n66 = _createSharedDataComponentWithFallback(_component_rice_cell, "1daa5a04", {
                title: "Search 搜索框",
                "is-link": "",
                onClick: () => {
                  return _on_click15;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n64 = _createSharedDataComponentWithFallback(_component_rice_icon, "1daa5de4", {
                    name: "search",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 35, n64?.sharedData);
                })
              });
              _setSharedData(__sharedData, 34, n66?.sharedData);
              const _on_click16 = () => {
                return goToDemo("signature");
              };
              const n69 = _createSharedDataComponentWithFallback(_component_rice_cell, "1daa64ac", {
                title: "Signature 签名",
                "is-link": "",
                onClick: () => {
                  return _on_click16;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n67 = _createSharedDataComponentWithFallback(_component_rice_icon, "1daa68a6", {
                    name: "edit",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 37, n67?.sharedData);
                })
              });
              _setSharedData(__sharedData, 36, n69?.sharedData);
              const _on_click17 = () => {
                return goToDemo("slider");
              };
              const n72 = _createSharedDataComponentWithFallback(_component_rice_cell, "1daa6ccc", {
                title: "Slider 滑块",
                "is-link": "",
                onClick: () => {
                  return _on_click17;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n70 = _createSharedDataComponentWithFallback(_component_rice_icon, "1daa70ab", {
                    name: "minus",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 39, n70?.sharedData);
                })
              });
              _setSharedData(__sharedData, 38, n72?.sharedData);
              const _on_click18 = () => {
                return goToDemo("stepper");
              };
              const n75 = _createSharedDataComponentWithFallback(_component_rice_cell, "1daa7772", {
                title: "Stepper 步进器",
                "is-link": "",
                onClick: () => {
                  return _on_click18;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n73 = _createSharedDataComponentWithFallback(_component_rice_icon, "1daaca29", {
                    name: "plus",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 41, n73?.sharedData);
                })
              });
              _setSharedData(__sharedData, 40, n75?.sharedData);
              const _on_click19 = () => {
                return goToDemo("switch");
              };
              const n78 = _createSharedDataComponentWithFallback(_component_rice_cell, "1daace64", {
                title: "Switch 开关",
                "is-link": "",
                onClick: () => {
                  return _on_click19;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n76 = _createSharedDataComponentWithFallback(_component_rice_icon, "1daad243", {
                    name: "checked",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 43, n76?.sharedData);
                })
              });
              _setSharedData(__sharedData, 42, n78?.sharedData);
              const _on_click20 = () => {
                return goToDemo("textarea");
              };
              const n81 = _createSharedDataComponentWithFallback(_component_rice_cell, "1daad90c", {
                title: "Textarea 多行文本框",
                "is-link": "",
                onClick: () => {
                  return _on_click20;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n79 = _createSharedDataComponentWithFallback(_component_rice_icon, "1daadd07", {
                    name: "edit",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 45, n79?.sharedData);
                })
              });
              _setSharedData(__sharedData, 44, n81?.sharedData);
              const _on_click21 = () => {
                return goToDemo("uploader");
              };
              const n84 = _createSharedDataComponentWithFallback(_component_rice_cell, "1daae142", {
                title: "Uploader 上传",
                "is-link": "",
                onClick: () => {
                  return _on_click21;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n82 = _createSharedDataComponentWithFallback(_component_rice_icon, "1daae525", {
                    name: "upload",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 47, n82?.sharedData);
                })
              });
              _setSharedData(__sharedData, 46, n84?.sharedData);
            })
          });
          _setSharedData(__sharedData, 11, n85?.sharedData);
          _renderSharedDataEffect(() => {
            const _isDarkMode = isDarkMode.value;
            _setSharedDataClass(__sharedData, 120, ["demo-group-card", _isDarkMode ? "bg-__1e1e1e_" : "bg-white"]);
            _setSharedDataStyle(__sharedData, 121, { backgroundColor: currentTheme.value });
            _setSharedDataClass(__sharedData, 122, ["group-title", _isDarkMode ? "text-__f8fafc_" : "text-__1e293b_"]);
          });
          const n135 = _createSharedDataComponentWithFallback(_component_rice_cell_group, "1dab49eb", { border: false }, {
            "default": _withSharedDataVaporCtx(() => {
              const _on_click22 = () => {
                return goToDemo("avatar");
              };
              const n92 = _createSharedDataComponentWithFallback(_component_rice_cell, "1dab4a7e", {
                title: "Avatar 头像",
                "is-link": "",
                onClick: () => {
                  return _on_click22;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n90 = _createSharedDataComponentWithFallback(_component_rice_icon, "1dab4e5d", {
                    name: "user",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 50, n90?.sharedData);
                })
              });
              _setSharedData(__sharedData, 49, n92?.sharedData);
              const _on_click23 = () => {
                return goToDemo("badge");
              };
              const n95 = _createSharedDataComponentWithFallback(_component_rice_cell, "1dab550e", {
                title: "Badge 徽标",
                "is-link": "",
                onClick: () => {
                  return _on_click23;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n93 = _createSharedDataComponentWithFallback(_component_rice_icon, "1dab58eb", {
                    name: "info",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 52, n93?.sharedData);
                })
              });
              _setSharedData(__sharedData, 51, n95?.sharedData);
              const _on_click24 = () => {
                return goToDemo("cell");
              };
              const n98 = _createSharedDataComponentWithFallback(_component_rice_cell, "1dab5d26", {
                title: "Cell 单元格",
                "is-link": "",
                onClick: () => {
                  return _on_click24;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n96 = _createSharedDataComponentWithFallback(_component_rice_icon, "1dab60ed", {
                    name: "bars",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 54, n96?.sharedData);
                })
              });
              _setSharedData(__sharedData, 53, n98?.sharedData);
              const _on_click25 = () => {
                return goToDemo("collapse");
              };
              const n101 = _createSharedDataComponentWithFallback(_component_rice_cell, "1dabb688", {
                title: "Collapse 折叠面板",
                "is-link": "",
                onClick: () => {
                  return _on_click25;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n99 = _createSharedDataComponentWithFallback(_component_rice_icon, "1dabba82", {
                    name: "arrow-down",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 56, n99?.sharedData);
                })
              });
              _setSharedData(__sharedData, 55, n101?.sharedData);
              const _on_click26 = () => {
                return goToDemo("count-down");
              };
              const n104 = _createSharedDataComponentWithFallback(_component_rice_cell, "1dabbec3", {
                title: "CountDown 倒计时",
                "is-link": "",
                onClick: () => {
                  return _on_click26;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n102 = _createSharedDataComponentWithFallback(_component_rice_icon, "1dabc2bf", {
                    name: "calendar",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 58, n102?.sharedData);
                })
              });
              _setSharedData(__sharedData, 57, n104?.sharedData);
              const _on_click27 = () => {
                return goToDemo("count-to");
              };
              const n107 = _createSharedDataComponentWithFallback(_component_rice_cell, "1dabc989", {
                title: "CountTo 数字滚动",
                "is-link": "",
                onClick: () => {
                  return _on_click27;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n105 = _createSharedDataComponentWithFallback(_component_rice_icon, "1dabcd6d", {
                    name: "trend",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 60, n105?.sharedData);
                })
              });
              _setSharedData(__sharedData, 59, n107?.sharedData);
              const _on_click28 = () => {
                return goToDemo("divider");
              };
              const n110 = _createSharedDataComponentWithFallback(_component_rice_cell, "1dabd1a9", {
                title: "Divider 分割线",
                "is-link": "",
                onClick: () => {
                  return _on_click28;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n108 = _createSharedDataComponentWithFallback(_component_rice_icon, "d14c34b2", {
                    name: "minus",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 62, n108?.sharedData);
                })
              });
              _setSharedData(__sharedData, 61, n110?.sharedData);
              const _on_click29 = () => {
                return goToDemo("grid");
              };
              const n113 = _createSharedDataComponentWithFallback(_component_rice_cell, "d14c2c64", {
                title: "Grid 宫格",
                "is-link": "",
                onClick: () => {
                  return _on_click29;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n111 = _createSharedDataComponentWithFallback(_component_rice_icon, "d14c24a4", {
                    name: "app",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 64, n111?.sharedData);
                })
              });
              _setSharedData(__sharedData, 63, n113?.sharedData);
              const _on_click30 = () => {
                return goToDemo("progress");
              };
              const n116 = _createSharedDataComponentWithFallback(_component_rice_cell, "d14c1c30", {
                title: "Progress 进度条",
                "is-link": "",
                onClick: () => {
                  return _on_click30;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n114 = _createSharedDataComponentWithFallback(_component_rice_icon, "d14c0f28", {
                    name: "minus",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 66, n114?.sharedData);
                })
              });
              _setSharedData(__sharedData, 65, n116?.sharedData);
              const _on_click31 = () => {
                return goToDemo("progress-circle");
              };
              const n119 = _createSharedDataComponentWithFallback(_component_rice_cell, "d14c06da", {
                title: "ProgressCircle 圆环进度条",
                "is-link": "",
                onClick: () => {
                  return _on_click31;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n117 = _createSharedDataComponentWithFallback(_component_rice_icon, "d14bfea0", {
                    name: "replay",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 68, n117?.sharedData);
                })
              });
              _setSharedData(__sharedData, 67, n119?.sharedData);
              const _on_click32 = () => {
                return goToDemo("qrcode");
              };
              const n122 = _createSharedDataComponentWithFallback(_component_rice_cell, "d14bf110", {
                title: "QRCode 二维码",
                "is-link": "",
                onClick: () => {
                  return _on_click32;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n120 = _createSharedDataComponentWithFallback(_component_rice_icon, "d14b4ba6", {
                    name: "qr",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 70, n120?.sharedData);
                })
              });
              _setSharedData(__sharedData, 69, n122?.sharedData);
              const _on_click33 = () => {
                return goToDemo("scroll-x");
              };
              const n125 = _createSharedDataComponentWithFallback(_component_rice_cell, "d14b4334", {
                title: "ScrollX 横向滚动列表",
                "is-link": "",
                onClick: () => {
                  return _on_click33;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n123 = _createSharedDataComponentWithFallback(_component_rice_icon, "d14b3b3e", {
                    name: "right",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 72, n123?.sharedData);
                })
              });
              _setSharedData(__sharedData, 71, n125?.sharedData);
              const _on_click34 = () => {
                return goToDemo("tag");
              };
              const n128 = _createSharedDataComponentWithFallback(_component_rice_cell, "d14b2dda", {
                title: "Tag 标签",
                "is-link": "",
                onClick: () => {
                  return _on_click34;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n126 = _createSharedDataComponentWithFallback(_component_rice_icon, "d14b2628", {
                    name: "gift",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 74, n126?.sharedData);
                })
              });
              _setSharedData(__sharedData, 73, n128?.sharedData);
              const _on_click35 = () => {
                return goToDemo("time-format");
              };
              const n131 = _createSharedDataComponentWithFallback(_component_rice_cell, "d14b1db2", {
                title: "TimeFormat 时间格式化",
                "is-link": "",
                onClick: () => {
                  return _on_click35;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n129 = _createSharedDataComponentWithFallback(_component_rice_icon, "d14b15b2", {
                    name: "calendar",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 76, n129?.sharedData);
                })
              });
              _setSharedData(__sharedData, 75, n131?.sharedData);
              const _on_click36 = () => {
                return goToDemo("waterflow");
              };
              const n134 = _createSharedDataComponentWithFallback(_component_rice_cell, "d14b081e", {
                title: "Waterflow 瀑布流",
                "is-link": "",
                onClick: () => {
                  return _on_click36;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n132 = _createSharedDataComponentWithFallback(_component_rice_icon, "d14a62a8", {
                    name: "app",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 78, n132?.sharedData);
                })
              });
              _setSharedData(__sharedData, 77, n134?.sharedData);
            })
          });
          _setSharedData(__sharedData, 48, n135?.sharedData);
          _renderSharedDataEffect(() => {
            const _isDarkMode = isDarkMode.value;
            _setSharedDataClass(__sharedData, 123, ["demo-group-card", _isDarkMode ? "bg-__1e1e1e_" : "bg-white"]);
            _setSharedDataStyle(__sharedData, 124, { backgroundColor: currentTheme.value });
            _setSharedDataClass(__sharedData, 125, ["group-title", _isDarkMode ? "text-__f8fafc_" : "text-__1e293b_"]);
          });
          const n164 = _createSharedDataComponentWithFallback(_component_rice_cell_group, "d14a3bba", { border: false }, {
            "default": _withSharedDataVaporCtx(() => {
              const _on_click37 = () => {
                return goToDemo("action-sheet");
              };
              const n142 = _createSharedDataComponentWithFallback(_component_rice_cell, "d14a35a8", {
                title: "ActionSheet 动作面板",
                "is-link": "",
                onClick: () => {
                  return _on_click37;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n140 = _createSharedDataComponentWithFallback(_component_rice_icon, "d14a2da6", {
                    name: "arrow-up",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 81, n140?.sharedData);
                })
              });
              _setSharedData(__sharedData, 80, n142?.sharedData);
              const _on_click38 = () => {
                return goToDemo("dialog");
              };
              const n145 = _createSharedDataComponentWithFallback(_component_rice_cell, "d14a2528", {
                title: "Dialog 对话框",
                "is-link": "",
                onClick: () => {
                  return _on_click38;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n143 = _createSharedDataComponentWithFallback(_component_rice_icon, "d14a1d68", {
                    name: "info",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 83, n143?.sharedData);
                })
              });
              _setSharedData(__sharedData, 82, n145?.sharedData);
              const _on_click39 = () => {
                return goToDemo("float-fab");
              };
              const n148 = _createSharedDataComponentWithFallback(_component_rice_cell, "d1497232", {
                title: "FloatFab 悬浮按钮",
                "is-link": "",
                onClick: () => {
                  return _on_click39;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n146 = _createSharedDataComponentWithFallback(_component_rice_icon, "d1496a3c", {
                    name: "plus",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 85, n146?.sharedData);
                })
              });
              _setSharedData(__sharedData, 84, n148?.sharedData);
              const _on_click40 = () => {
                return goToDemo("loading");
              };
              const n151 = _createSharedDataComponentWithFallback(_component_rice_cell, "d14961f0", {
                title: "Loading 加载",
                "is-link": "",
                onClick: () => {
                  return _on_click40;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n149 = _createSharedDataComponentWithFallback(_component_rice_icon, "d14954ee", {
                    name: "replay",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 87, n149?.sharedData);
                })
              });
              _setSharedData(__sharedData, 86, n151?.sharedData);
              const _on_click41 = () => {
                return goToDemo("notice-bar");
              };
              const n154 = _createSharedDataComponentWithFallback(_component_rice_cell, "d1494c74", {
                title: "NoticeBar 公告",
                "is-link": "",
                onClick: () => {
                  return _on_click41;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n152 = _createSharedDataComponentWithFallback(_component_rice_icon, "d14944a8", {
                    name: "volume",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 89, n152?.sharedData);
                })
              });
              _setSharedData(__sharedData, 88, n154?.sharedData);
              const _on_click42 = () => {
                return goToDemo("overlay");
              };
              const n157 = _createSharedDataComponentWithFallback(_component_rice_cell, "d1493c2e", {
                title: "Overlay 遮罩层",
                "is-link": "",
                onClick: () => {
                  return _on_click42;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n155 = _createSharedDataComponentWithFallback(_component_rice_icon, "d14891aa", {
                    name: "cross",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 91, n155?.sharedData);
                })
              });
              _setSharedData(__sharedData, 90, n157?.sharedData);
              const _on_click43 = () => {
                return goToDemo("popup");
              };
              const n160 = _createSharedDataComponentWithFallback(_component_rice_cell, "d1488932", {
                title: "Popup 弹出层",
                "is-link": "",
                onClick: () => {
                  return _on_click43;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n158 = _createSharedDataComponentWithFallback(_component_rice_icon, "d1488176", {
                    name: "arrow-up",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 93, n158?.sharedData);
                })
              });
              _setSharedData(__sharedData, 92, n160?.sharedData);
              const _on_click44 = () => {
                return goToDemo("swipe-actions");
              };
              const n163 = _createSharedDataComponentWithFallback(_component_rice_cell, "d14878f8", {
                title: "SwipeActions 滑动单元格",
                "is-link": "",
                onClick: () => {
                  return _on_click44;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n161 = _createSharedDataComponentWithFallback(_component_rice_icon, "d1486bb0", {
                    name: "left",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 95, n161?.sharedData);
                })
              });
              _setSharedData(__sharedData, 94, n163?.sharedData);
            })
          });
          _setSharedData(__sharedData, 79, n164?.sharedData);
          _renderSharedDataEffect(() => {
            const _isDarkMode = isDarkMode.value;
            _setSharedDataClass(__sharedData, 126, ["demo-group-card", _isDarkMode ? "bg-__1e1e1e_" : "bg-white"]);
            _setSharedDataStyle(__sharedData, 127, { backgroundColor: currentTheme.value });
            _setSharedDataClass(__sharedData, 128, ["group-title", _isDarkMode ? "text-__f8fafc_" : "text-__1e293b_"]);
          });
          const n181 = _createSharedDataComponentWithFallback(_component_rice_cell_group, "d147a740", { border: false }, {
            "default": _withSharedDataVaporCtx(() => {
              const _on_click45 = () => {
                return goToDemo("back-top");
              };
              const n171 = _createSharedDataComponentWithFallback(_component_rice_cell, "d147a12e", {
                title: "BackTop 返回顶部",
                "is-link": "",
                onClick: () => {
                  return _on_click45;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n169 = _createSharedDataComponentWithFallback(_component_rice_icon, "d147993c", {
                    name: "back-top",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 98, n169?.sharedData);
                })
              });
              _setSharedData(__sharedData, 97, n171?.sharedData);
              const _on_click46 = () => {
                return goToDemo("navbar");
              };
              const n174 = _createSharedDataComponentWithFallback(_component_rice_cell, "d14790be", {
                title: "Navbar 导航栏",
                "is-link": "",
                onClick: () => {
                  return _on_click46;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n172 = _createSharedDataComponentWithFallback(_component_rice_icon, "d14788fe", {
                    name: "arrow-left",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 100, n172?.sharedData);
                })
              });
              _setSharedData(__sharedData, 99, n174?.sharedData);
              const _on_click47 = () => {
                return goToDemo("subsection");
              };
              const n177 = _createSharedDataComponentWithFallback(_component_rice_cell, "d1477b66", {
                title: "Subsection 分段器",
                "is-link": "",
                onClick: () => {
                  return _on_click47;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n175 = _createSharedDataComponentWithFallback(_component_rice_icon, "d147736c", {
                    name: "app",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 102, n175?.sharedData);
                })
              });
              _setSharedData(__sharedData, 101, n177?.sharedData);
              const _on_click48 = () => {
                return goToDemo("tabs");
              };
              const n180 = _createSharedDataComponentWithFallback(_component_rice_cell, "d1476af8", {
                title: "Tabs 选项卡",
                "is-link": "",
                onClick: () => {
                  return _on_click48;
                }
              }, {
                "leftIcon": _withSharedDataVaporCtx(() => {
                  const n178 = _createSharedDataComponentWithFallback(_component_rice_icon, "d147636a", {
                    name: "right",
                    color: () => {
                      return currentTheme.value;
                    },
                    size: "18px",
                    style: "margin-right: 8px;"
                  });
                  _setSharedData(__sharedData, 104, n178?.sharedData);
                })
              });
              _setSharedData(__sharedData, 103, n180?.sharedData);
            })
          });
          _setSharedData(__sharedData, 96, n181?.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n184.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const riceUi = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  riceUi as default
};
//# sourceMappingURL=rice-ui.js.map
