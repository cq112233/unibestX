import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, createSharedDataFor: _createSharedDataFor, setSharedDataEvent: _setSharedDataEvent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback } = globalThis.Vue;
const __className = "GenSrcPagesBasicComponentsChildDemoBox";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "29eac82c",
  __className,
  __filename: "src/pages/basic/components/ChildDemoBox.uvue",
  __name: "ChildDemoBox",
  props: {
    title: {
      type: String,
      default: "通信子组件"
    },
    count: {
      type: Number,
      default: 0
    },
    tags: {
      type: Array,
      default: () => {
        return ["Vue3", "uni-app X", "UTS"];
      }
    }
  },
  emits: ["add", "reset", "send-msg"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsChildDemoBoxSharedData", sharedDataClassId: 0 })));
    const emit = __emit;
    const inputMsg = ref("Hello Parent from Child!");
    function handleAdd() {
      emit("add", 1);
    }
    function handleReset() {
      emit("reset");
    }
    function handleSendMsg() {
      if (inputMsg.value.trim() == "") {
        uni.showToast({
          title: "请输入消息内容",
          icon: "none"
        });
        return null;
      }
      emit("send-msg", inputMsg.value);
      uni.showToast({
        title: "消息已发送",
        icon: "success"
      });
    }
    return () => {
      "raw js";
      const _component_input = _resolveComponent("input");
      _createSharedDataSlot("header", null, null, () => {
        _renderSharedDataEffect(() => {
          return _setSharedData(__sharedData, 0, _toDisplayString(__props.title));
        });
      });
      _renderSharedDataEffect(() => {
        return _setSharedData(__sharedData, 6, _toDisplayString(__props.count));
      });
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 1, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return __props.tags;
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _createSharedDataSlot("itemSlot", {
          item: () => {
            return _for_item0.value;
          },
          index: () => {
            return _for_key0.value;
          }
        }, (data) => {
          return _setSharedData(__sharedData_VFor0, 1, data);
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedData(__sharedData_VFor0, 2, _toDisplayString(_for_key0.value + 1));
            _setSharedData(__sharedData_VFor0, 3, _toDisplayString(_for_item0.value));
          });
        });
        return null;
      }, (__sharedData_VFor0, item, index) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
      });
      _setSharedDataEvent(__sharedData, 3, handleAdd);
      _setSharedDataEvent(__sharedData, 4, handleReset);
      const n25 = _createSharedDataComponentWithFallback(_component_input, "51e13ac9", {
        value: () => {
          return inputMsg.value;
        },
        "onUpdate:value": () => {
          return (_value) => {
            return inputMsg.value = _value;
          };
        },
        placeholder: "输入要送回父组件的消息",
        class: "wtu-1pxnoyx-i wtu-812ws7-v wtu-8x6qng-14 wtu-1w52wo5-15 wtu-182oteh-e wtu-l9uwt0-r wtu-1oapzb6-3 wtu-efe1oe-4 wtu-tbqpp4-16"
      });
      _setSharedData(__sharedData, 2, n25?.sharedData);
      _setSharedDataEvent(__sharedData, 5, handleSendMsg);
      _createSharedDataSlot("footer", null, null, () => {
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const ChildDemoBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  ChildDemoBox as C
};
//# sourceMappingURL=ChildDemoBox.js.map
