import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { C as ChildDemoBox } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/ChildDemoBox&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataEvent: _setSharedDataEvent, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataScopedSlot: _createSharedDataScopedSlot, createSharedDataVSlot: _createSharedDataVSlot, createSharedDataComponent: _createSharedDataComponent, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenSrcPagesBasicComponentsPropsDemoCard";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "586faf47",
  __className,
  __filename: "src/pages/basic/components/PropsDemoCard.uvue",
  __name: "PropsDemoCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsPropsDemoCardSharedData", sharedDataClassId: 0 })));
    const parentCount = ref(10);
    const childMessage = ref("暂无子组件消息");
    const tagList = ref(["响应式 Props 传递", "Emits 事件监听与回传", "具名 Header/Footer 插槽", "具名 Slot 作用域传参"]);
    function onChildAdd(delta) {
      parentCount.value += delta;
    }
    function onChildReset() {
      parentCount.value = 0;
      childMessage.value = "已被子组件重置为 0";
    }
    function onChildSendMsg(msg) {
      childMessage.value = msg;
    }
    function addFiveFromParent() {
      parentCount.value += 5;
    }
    function resetParent() {
      parentCount.value = 10;
      childMessage.value = "已重置为初始状态";
    }
    return () => {
      "raw js";
      const n27 = _createSharedDataComponent(
        Card,
        "da44ccdc",
        { title: "父子组件传参 & 具名插槽演示" },
        {
          "default": _withSharedDataVaporCtx(() => {
            _setSharedDataEvent(__sharedData, 2, addFiveFromParent);
            _setSharedDataEvent(__sharedData, 3, resetParent);
            _renderSharedDataEffect(() => {
              _setSharedData(__sharedData, 4, _toDisplayString(parentCount.value));
              _setSharedData(__sharedData, 5, _toDisplayString(childMessage.value));
            });
            const n26 = _createSharedDataComponent(ChildDemoBox, "2c5bfab8", {
              title: "组件通信演示子节点",
              count: () => {
                return parentCount.value;
              },
              tags: () => {
                return tagList.value;
              },
              onAdd: () => {
                return onChildAdd;
              },
              onReset: () => {
                return onChildReset;
              },
              onSendMsg: () => {
                return onChildSendMsg;
              }
            }, {
              "header": () => {
              },
              "itemSlot": _createSharedDataScopedSlot(_createSharedDataVSlot(__sharedDataScope, () => {
                return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
              }), (_slotProps0, __sharedData_VSlot0) => {
                _renderSharedDataEffect(() => {
                  const _item = _slotProps0.item;
                  _setSharedData(__sharedData_VSlot0, 0, _toDisplayString(_slotProps0.index + 1));
                  _setSharedData(__sharedData_VSlot0, 1, _toDisplayString(_item));
                  _setSharedData(__sharedData_VSlot0, 2, _toDisplayString(_item));
                });
              }),
              "footer": () => {
              }
            });
            _setSharedData(__sharedData, 1, n26.sharedData);
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n27.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const PropsDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  PropsDemoCard as P
};
//# sourceMappingURL=PropsDemoCard.js.map
