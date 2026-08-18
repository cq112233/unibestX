import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { C as ChildDemoBox } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/ChildDemoBox&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "PropsDemoCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
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
    const __returned__ = { parentCount, childMessage, tagList, onChildAdd, onChildReset, onChildSendMsg, addFiveFromParent, resetParent, get Card() {
      return Card;
    }, get ChildDemoBox() {
      return ChildDemoBox;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "wtu-vxgnz7-0": { "": { "backgroundColor": "#eff6ff" } }, "wtu-sv7fhw-1": { "": { "--tw-font-weight": "var(--font-weight-bold, 700)", "fontWeight": 700 } }, "wtu-44jmxl-2": { "": { "color": "#1e40af" } }, "wtu-1qcvxlr-3": { "": { "flexDirection": "row" } }, "wtu-i6zy5z-4": { "": { "alignItems": "center" } }, "wtu-1581zln-5": { "": { "color": "#3b82f6" } }, "wtu-1cwqag0-6": { "": { "color": "#1d4ed8" } }, "wtu-cj9lbh-7": { "": { "color": "#059669" } }, "wtu-1t9ug01-8": { "": { "backgroundColor": "#2563eb" } }, "wtu-19aj3kn-9": { "": { "justifyContent": "center" } }, "wtu-1c2l3ni-a": { "": { "color": "#ffffff" } }, "wtu-1h73awj-b": { "": { "backgroundColor": "#64748b" } }, "wtu-16203my-c": { "": { "justifyContent": "space-between" } }, "wtu-161zm7w-d": { "": { "color": "#1e293b" } }, "wtu-v9l0kh-e": { "": { "backgroundColor": "#dbeafe" } }, "wtu-1ue7bt4-f": { "": { "backgroundColor": "#f0fdf4" } }, "wtu-1gdtqyh-g": { "": { "color": "#15803d" } }, "wtu-165ep59-h": { "": { "color": "#166534" } }, "wtu-1nu791o-i": { "": { "--tw-font-weight": "var(--font-weight-medium, 500)", "fontWeight": 500 } }, "wtu-1qit6r8-j": { "": { "color": "#22c55e" } }, "wtu-1aizezg-k": { "": { "marginLeft": "auto" } }, "wtu-ntizu3-l": { "": { "color": "#64748b" } }, "wtu-1eoi3xb-m": { "": { "color": "#10b981" } } };
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "父子组件传参 & 具名插槽演示" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-vxgnz7-0 rounded-12px p-14px mb-14px border-width-1px border-style-solid border-color-[#bfdbfe]" }, [
        _createElementVNode("text", { class: "text-14px wtu-sv7fhw-1 wtu-44jmxl-2 mb-6px" }, "👨‍👩‍👧 父组件状态管理面板"),
        _createElementVNode("view", { class: "wtu-1qcvxlr-3 wtu-i6zy5z-4 mb-4px" }, [
          _createElementVNode("text", { class: "text-12px wtu-1581zln-5" }, "父组件 Count 变量: "),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-sv7fhw-1 wtu-1cwqag0-6 ml-6px" },
            _toDisplayString($setup.parentCount),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-1qcvxlr-3 wtu-i6zy5z-4 mb-10px" }, [
          _createElementVNode("text", { class: "text-12px wtu-1581zln-5" }, "接收到的子组件消息: "),
          _createElementVNode(
            "text",
            { class: "text-12px wtu-sv7fhw-1 wtu-cj9lbh-7 ml-6px" },
            _toDisplayString($setup.childMessage),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-1qcvxlr-3 wtu-i6zy5z-4" }, [
          _createElementVNode("view", {
            class: "wtu-1t9ug01-8 rounded-6px px-10px h-30px wtu-1qcvxlr-3 wtu-i6zy5z-4 wtu-19aj3kn-9 mr-8px",
            onClick: $setup.addFiveFromParent
          }, [
            _createElementVNode("text", { class: "wtu-1c2l3ni-a text-12px" }, "父组件直接 Count + 5")
          ]),
          _createElementVNode("view", {
            class: "wtu-1h73awj-b rounded-6px px-10px h-30px wtu-1qcvxlr-3 wtu-i6zy5z-4 wtu-19aj3kn-9",
            onClick: $setup.resetParent
          }, [
            _createElementVNode("text", { class: "wtu-1c2l3ni-a text-12px" }, "父组件重置状态")
          ])
        ])
      ]),
      _createVNode($setup["ChildDemoBox"], {
        title: "组件通信演示子节点",
        count: $setup.parentCount,
        tags: $setup.tagList,
        onAdd: $setup.onChildAdd,
        onReset: $setup.onChildReset,
        onSendMsg: $setup.onChildSendMsg
      }, {
        header: _withCtx(() => [
          _createElementVNode("view", { class: "wtu-1qcvxlr-3 wtu-i6zy5z-4 wtu-16203my-c" }, [
            _createElementVNode("text", { class: "text-14px wtu-sv7fhw-1 wtu-161zm7w-d" }, "🏷️ 父组件填入的具名 Header 插槽"),
            _createElementVNode("text", { class: "text-11px wtu-1581zln-5 wtu-v9l0kh-e px-6px py-2px rounded-4px" }, "自定义 Header")
          ])
        ]),
        itemSlot: _withCtx(({ item, index }) => [
          _createElementVNode("view", { class: "wtu-1qcvxlr-3 wtu-i6zy5z-4 wtu-1ue7bt4-f rounded-6px p-8px border-width-1px border-style-solid border-color-[#bbf7d0]" }, [
            _createElementVNode(
              "text",
              { class: "text-11px wtu-sv7fhw-1 wtu-1gdtqyh-g mr-6px" },
              "#" + _toDisplayString(index + 1),
              1
              /* TEXT */
            ),
            _createElementVNode(
              "text",
              { class: "text-12px wtu-165ep59-h wtu-1nu791o-i" },
              _toDisplayString(item),
              1
              /* TEXT */
            ),
            _createElementVNode(
              "text",
              { class: "text-10px wtu-1qit6r8-j wtu-1aizezg-k" },
              "具名Slot传参: " + _toDisplayString(item),
              1
              /* TEXT */
            )
          ])
        ]),
        footer: _withCtx(() => [
          _createElementVNode("view", { class: "wtu-1qcvxlr-3 wtu-i6zy5z-4 wtu-16203my-c" }, [
            _createElementVNode("text", { class: "text-11px wtu-ntizu3-l" }, "📌 父组件填入的具名 Footer 插槽"),
            _createElementVNode("text", { class: "text-11px wtu-1eoi3xb-m" }, "双向通信验证成功")
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["count", "tags"])
    ]),
    _: 1
    /* STABLE */
  });
}
const PropsDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/PropsDemoCard.uvue"]]);
export {
  PropsDemoCard as P
};
//# sourceMappingURL=PropsDemoCard.js.map
