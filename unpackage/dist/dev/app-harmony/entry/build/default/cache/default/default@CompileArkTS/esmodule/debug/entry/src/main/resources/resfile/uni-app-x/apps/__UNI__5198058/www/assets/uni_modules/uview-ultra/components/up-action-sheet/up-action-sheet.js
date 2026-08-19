import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { _ as __easycom_0$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-line/up-line&";
import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon&";
import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-gap/up-gap&";
import { _ as __easycom_2$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-popup/up-popup&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useButton&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useMp&";
import { u as useUltraUI } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/test&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/digit&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/config/config&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-action-sheet/types&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-action-sheet/actionSheet&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataEvent: _setSharedDataEvent, createSharedDataIf: _createSharedDataIf, setSharedDataStyle: _setSharedDataStyle, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedDataClass: _setSharedDataClass, toSharedDataString: _toSharedDataString, createSharedDataFor: _createSharedDataFor, createSharedDataSlot: _createSharedDataSlot, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpActionSheetUpActionSheet";
const { computed, onBeforeUnmount, getCurrentInstance } = globalThis.Vue;
const { onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    // ...mpSharedMpOptions,
    name: "up-action-sheet"
  },
  __dynamicSharedData: true,
  __hash: "1d40933b",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-action-sheet/up-action-sheet.uvue",
  __name: "up-action-sheet",
  props: {
    // 操作菜单是否展示 （默认false）
    show: {
      type: Boolean,
      default: defProps.getBoolean("actionSheet.show")
    },
    // 标题
    title: {
      type: String,
      default: defProps.getString("actionSheet.title")
    },
    // 选项上方的描述信息
    description: {
      type: String,
      default: defProps.getString("actionSheet.description")
    },
    // 数据
    actions: {
      type: Array,
      default: () => {
        return [];
      }
    },
    // 取消按钮的文字，不为空时显示按钮
    cancelText: {
      type: String,
      default: defProps.getString("actionSheet.cancelText")
    },
    // 点击某个菜单项时是否关闭弹窗
    closeOnClickAction: {
      type: Boolean,
      default: defProps.getBoolean("actionSheet.closeOnClickAction")
    },
    // 处理底部安全区（默认true）
    safeAreaInsetBottom: {
      type: Boolean,
      default: defProps.getBoolean("actionSheet.safeAreaInsetBottom")
    },
    // 小程序的打开方式
    openType: {
      type: String,
      default: defProps.getString("actionSheet.openType")
    },
    // 点击遮罩是否允许关闭 (默认true)
    closeOnClickOverlay: {
      type: Boolean,
      default: defProps.getBoolean("actionSheet.closeOnClickOverlay")
    },
    // 圆角值
    round: {
      type: [Boolean, String, Number],
      default: defProps.getAny("actionSheet.round")
    },
    // 选项区域最大高度
    wrapMaxHeight: {
      type: [String],
      default: defProps.getString("actionSheet.wrapMaxHeight")
    }
    // 	...commonProps,
    // 	...buttonProps
  },
  emits: [
    "close",
    "select",
    "update:show",
    "getuserinfo",
    "contact",
    "getphonenumber",
    "error",
    "launchapp",
    "opensetting"
  ],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpActionSheetUpActionSheetSharedData", sharedDataClassId: 0 })));
    const _b = useUltraUI(), onComponentDestroy = _b.onComponentDestroy;
    _b.preventEvent;
    _b.noop;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    onMounted(() => {
    });
    onBeforeUnmount(() => {
      onComponentDestroy(instance);
    });
    const emit = __emit;
    const itemStyle = computed(() => {
      return (index) => {
        let style = new UTSJSONObject(
          {}
          // if (props['actions'][index]['color'] != null && props.actions[index]['color'] != '') {
          //     style['color'] = props.actions[index].color
          // }
          // if (props.actions[index]['fontSize'] != null && props.actions[index]['fontSize'] != '') {
          //      style['fontSize'] = addUnit(props.actions[index].fontSize)
          // }
          // // 选项被禁用的样式
          // if (props.actions[index]['disabled'] != null && props.actions[index]['disabled'] == true) {
          //     style['color'] = '#c0c4cc'
          // }
        );
        return style;
      };
    });
    const closeHandler = () => {
      if (props.closeOnClickOverlay) {
        emit("update:show");
        emit("close");
      }
    };
    const cancel = () => {
      emit("update:show");
      emit("close");
    };
    const selectHandler = (index) => {
      const item = props.actions[index];
      if (item["disabled"] != true && item["loading"] != true) {
        emit("select", item);
        if (props.closeOnClickAction) {
          emit("update:show");
          emit("close");
        }
      }
    };
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0;
      const _component_up_line = __easycom_0$1;
      const _component_up_loading_icon = __easycom_1;
      const _component_up_gap = __easycom_1$1;
      const _component_up_popup = __easycom_2$1;
      const n38 = _createSharedDataComponentWithFallback(
        _component_up_popup,
        "f144a0de",
        {
          show: () => {
            return __props.show;
          },
          mode: "bottom",
          onClose: () => {
            return closeHandler;
          },
          safeAreaInsetBottom: () => {
            return __props.safeAreaInsetBottom;
          },
          round: () => {
            return __props.round;
          }
        },
        {
          "default": _withSharedDataVaporCtx(() => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 1, _toSharedDataBoolean(__props.title));
            }, () => {
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 4, _toDisplayString(__props.title));
              });
              const n3 = _createSharedDataComponentWithFallback(_component_up_icon, "26b01d55", {
                name: "close",
                size: "17",
                color: "#c8c9cc",
                bold: ""
              });
              _setSharedData(__sharedData, 2, n3?.sharedData);
              _setSharedDataEvent(__sharedData, 3, cancel);
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 5, _toSharedDataBoolean(__props.description));
            }, () => {
              _renderSharedDataEffect(() => {
                const _description = __props.description;
                _setSharedDataStyle(__sharedData, 6, [{
                  marginTop: `${__props.title != "" && _description != "" ? 0 : "18px"}`
                }]);
                _setSharedData(__sharedData, 7, _toDisplayString(_description));
              });
            });
            _createSharedDataSlot("default", null, null, () => {
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 8, _toSharedDataBoolean(__props.description));
              }, () => {
                const n13 = _createSharedDataComponentWithFallback(_component_up_line, "26b02bfe");
                _setSharedData(__sharedData, 9, n13?.sharedData);
              }, null, 129);
              _renderSharedDataEffect(() => {
                return _setSharedDataStyle(__sharedData, 11, { maxHeight: __props.wrapMaxHeight });
              });
              _createSharedDataFor(_setSharedDataScoped(__sharedData, 10, _createSharedDataVFor(__sharedDataScope, () => {
                return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
              })), () => {
                return __props.actions;
              }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                _renderSharedDataEffect(() => {
                  const _item = _for_item0.value;
                  _setSharedDataClass(__sharedData_VFor0, 10, _toSharedDataString(_item["disabled"] != true && _item["loading"] != true ? "up-action-sheet--hover" : ""));
                });
                _createSharedDataIf(() => {
                  return _setSharedData(__sharedData_VFor0, 3, _toSharedDataBoolean(_for_item0.value["loading"]));
                }, () => {
                  const n18 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "a15ba7f0-" + _for_key0.value, {
                    "custom-class": "van-action-sheet__loading",
                    size: "18",
                    mode: "circle"
                  });
                  _setSharedData(__sharedData_VFor0, 4, n18?.sharedData);
                }, () => {
                  _renderSharedDataEffect(() => {
                    _setSharedDataStyle(__sharedData_VFor0, 7, [itemStyle.value(_for_key0.value)]);
                    _setSharedData(__sharedData_VFor0, 8, _toDisplayString(_for_item0.value["name"]));
                  });
                  _createSharedDataIf(() => {
                    return _setSharedData(__sharedData_VFor0, 5, _toSharedDataBoolean(_for_item0.value["subname"] != ""));
                  }, () => {
                    _renderSharedDataEffect(() => {
                      return _setSharedData(__sharedData_VFor0, 6, _toDisplayString(_for_item0.value["subname"]));
                    });
                  });
                }, 1033);
                _setSharedDataEvent(__sharedData_VFor0, 9, () => {
                  return selectHandler(_for_key0.value);
                });
                _createSharedDataIf(() => {
                  return _setSharedData(__sharedData_VFor0, 1, _toSharedDataBoolean(_for_key0.value !== __props.actions.length - 1));
                }, () => {
                  const n27 = _createSharedDataComponentWithFallback(_component_up_line, "a15b813a-" + _for_key0.value);
                  _setSharedData(__sharedData_VFor0, 2, n27?.sharedData);
                });
                return null;
              }, (__sharedData_VFor0, item, index) => {
                return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
              }, 1);
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 12, _toSharedDataBoolean(__props.cancelText));
            }, () => {
              const n32 = _createSharedDataComponentWithFallback(_component_up_gap, "a15b79b4", {
                bgColor: "#eaeaec",
                height: "6"
              });
              _setSharedData(__sharedData, 13, n32?.sharedData);
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 14, _toSharedDataBoolean(__props.cancelText));
            }, () => {
              _setSharedDataEvent(__sharedData, 15, () => {
              });
              _setSharedDataEvent(__sharedData, 16, cancel);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 17, _toDisplayString(__props.cancelText));
              });
            });
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n38?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-action-sheet.js.map
