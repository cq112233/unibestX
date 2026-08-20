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
const _style_0 = { "wtu-vxgnz7-0": { "": { "backgroundColor": "#eff6ff" } }, "wtu-bzagc8-1": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "wtu-b66ka1-2": { "": { "paddingTop": 14, "paddingRight": 14, "paddingBottom": 14, "paddingLeft": 14 } }, "wtu-74ncny-3": { "": { "marginBottom": 14 } }, "wtu-1owovkx-4": { "": { "--tw-border-style": "solid", "borderTopStyle": "var(--tw-border-style)", "borderRightStyle": "var(--tw-border-style)", "borderBottomStyle": "var(--tw-border-style)", "borderLeftStyle": "var(--tw-border-style)", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "wtu-1pdwtsl-5": { "": { "--tw-border-style": "solid", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "wtu-cwe6v6-6": { "": { "borderTopColor": "#bfdbfe", "borderRightColor": "#bfdbfe", "borderBottomColor": "#bfdbfe", "borderLeftColor": "#bfdbfe" } }, "wtu-1a5l072-7": { "": { "fontSize": 14 } }, "wtu-sv7fhw-8": { "": { "--tw-font-weight": "var(--font-weight-bold, 700)", "fontWeight": 700 } }, "wtu-44jmxl-9": { "": { "color": "#1e40af" } }, "wtu-bhsfe3-a": { "": { "marginBottom": 6 } }, "wtu-1qcvxlr-b": { "": { "flexDirection": "row" } }, "wtu-i6zy5z-c": { "": { "alignItems": "center" } }, "wtu-1vkc6z9-d": { "": { "marginBottom": 4 } }, "wtu-1hmoe0k-e": { "": { "fontSize": 12 } }, "wtu-1581zln-f": { "": { "color": "#3b82f6" } }, "wtu-1cwqag0-g": { "": { "color": "#1d4ed8" } }, "wtu-1cbwlqp-h": { "": { "marginLeft": 6 } }, "wtu-hqsngi-i": { "": { "marginBottom": 10 } }, "wtu-cj9lbh-j": { "": { "color": "#059669" } }, "wtu-1t9ug01-k": { "": { "backgroundColor": "#2563eb" } }, "wtu-1qt2m0f-l": { "": { "borderTopLeftRadius": 6, "borderTopRightRadius": 6, "borderBottomRightRadius": 6, "borderBottomLeftRadius": 6 } }, "wtu-hvwz4r-m": { "": { "paddingLeft": 10, "paddingRight": 10 } }, "wtu-bf75hz-n": { "": { "height": 30 } }, "wtu-19aj3kn-o": { "": { "justifyContent": "center" } }, "wtu-6ebfap-p": { "": { "marginRight": 8 } }, "wtu-1c2l3ni-q": { "": { "color": "#ffffff" } }, "wtu-1h73awj-r": { "": { "backgroundColor": "#64748b" } }, "wtu-16203my-s": { "": { "justifyContent": "space-between" } }, "wtu-161zm7w-t": { "": { "color": "#1e293b" } }, "wtu-1j9rfuf-u": { "": { "fontSize": 11 } }, "wtu-v9l0kh-v": { "": { "backgroundColor": "#dbeafe" } }, "wtu-zb8dsk-w": { "": { "paddingLeft": 6, "paddingRight": 6 } }, "wtu-1y4fkff-x": { "": { "paddingTop": 2, "paddingBottom": 2 } }, "wtu-1jbz86x-y": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "wtu-1ue7bt4-z": { "": { "backgroundColor": "#f0fdf4" } }, "wtu-1932lzo-10": { "": { "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8 } }, "wtu-16vqpiu-11": { "": { "borderTopColor": "#bbf7d0", "borderRightColor": "#bbf7d0", "borderBottomColor": "#bbf7d0", "borderLeftColor": "#bbf7d0" } }, "wtu-1gdtqyh-12": { "": { "color": "#15803d" } }, "wtu-1ys92t7-13": { "": { "marginRight": 6 } }, "wtu-165ep59-14": { "": { "color": "#166534" } }, "wtu-1nu791o-15": { "": { "--tw-font-weight": "var(--font-weight-medium, 500)", "fontWeight": 500 } }, "wtu-1sh719e-16": { "": { "fontSize": 10 } }, "wtu-1qit6r8-17": { "": { "color": "#22c55e" } }, "wtu-1aizezg-18": { "": { "marginLeft": "auto" } }, "wtu-ntizu3-19": { "": { "color": "#64748b" } }, "wtu-5777z3-1a": { "": { "backgroundColor": "#ecfdf5" } } };
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "父子组件传参 & 具名插槽演示" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-vxgnz7-0 wtu-bzagc8-1 wtu-b66ka1-2 wtu-74ncny-3 wtu-1owovkx-4 wtu-1pdwtsl-5 wtu-cwe6v6-6" }, [
        _createElementVNode("text", { class: "wtu-1a5l072-7 wtu-sv7fhw-8 wtu-44jmxl-9 wtu-bhsfe3-a" }, "👨‍👩‍👧 父组件状态管理面板"),
        _createElementVNode("view", { class: "wtu-1qcvxlr-b wtu-i6zy5z-c wtu-1vkc6z9-d" }, [
          _createElementVNode("text", { class: "wtu-1hmoe0k-e wtu-1581zln-f" }, "父组件 Count 变量: "),
          _createElementVNode(
            "text",
            { class: "wtu-1a5l072-7 wtu-sv7fhw-8 wtu-1cwqag0-g wtu-1cbwlqp-h" },
            _toDisplayString($setup.parentCount),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-1qcvxlr-b wtu-i6zy5z-c wtu-hqsngi-i" }, [
          _createElementVNode("text", { class: "wtu-1hmoe0k-e wtu-1581zln-f" }, "接收到的子组件消息: "),
          _createElementVNode(
            "text",
            { class: "wtu-1hmoe0k-e wtu-sv7fhw-8 wtu-cj9lbh-j wtu-1cbwlqp-h" },
            _toDisplayString($setup.childMessage),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-1qcvxlr-b wtu-i6zy5z-c" }, [
          _createElementVNode("view", {
            class: "wtu-1t9ug01-k wtu-1qt2m0f-l wtu-hvwz4r-m wtu-bf75hz-n wtu-1qcvxlr-b wtu-i6zy5z-c wtu-19aj3kn-o wtu-6ebfap-p",
            onClick: $setup.addFiveFromParent
          }, [
            _createElementVNode("text", { class: "wtu-1c2l3ni-q wtu-1hmoe0k-e" }, "父组件直接 Count + 5")
          ]),
          _createElementVNode("view", {
            class: "wtu-1h73awj-r wtu-1qt2m0f-l wtu-hvwz4r-m wtu-bf75hz-n wtu-1qcvxlr-b wtu-i6zy5z-c wtu-19aj3kn-o",
            onClick: $setup.resetParent
          }, [
            _createElementVNode("text", { class: "wtu-1c2l3ni-q wtu-1hmoe0k-e" }, "父组件重置状态")
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
          _createElementVNode("view", { class: "wtu-1qcvxlr-b wtu-i6zy5z-c wtu-16203my-s" }, [
            _createElementVNode("text", { class: "wtu-1a5l072-7 wtu-sv7fhw-8 wtu-161zm7w-t" }, "🏷️ 父组件填入的具名 Header 插槽"),
            _createElementVNode("text", { class: "wtu-1j9rfuf-u wtu-1581zln-f wtu-v9l0kh-v wtu-zb8dsk-w wtu-1y4fkff-x wtu-1jbz86x-y" }, "自定义 Header")
          ])
        ]),
        itemSlot: _withCtx(({ item, index }) => [
          _createElementVNode("view", { class: "wtu-1qcvxlr-b wtu-i6zy5z-c wtu-1ue7bt4-z wtu-1qt2m0f-l wtu-1932lzo-10 wtu-1owovkx-4 wtu-1pdwtsl-5 wtu-16vqpiu-11" }, [
            _createElementVNode(
              "text",
              { class: "wtu-1j9rfuf-u wtu-sv7fhw-8 wtu-1gdtqyh-12 wtu-1ys92t7-13" },
              "#" + _toDisplayString(index + 1),
              1
              /* TEXT */
            ),
            _createElementVNode(
              "text",
              { class: "wtu-1hmoe0k-e wtu-165ep59-14 wtu-1nu791o-15" },
              _toDisplayString(item),
              1
              /* TEXT */
            ),
            _createElementVNode(
              "text",
              { class: "wtu-1sh719e-16 wtu-1qit6r8-17 wtu-1aizezg-18" },
              "具名Slot传参: " + _toDisplayString(item),
              1
              /* TEXT */
            )
          ])
        ]),
        footer: _withCtx(() => [
          _createElementVNode("view", { class: "wtu-1qcvxlr-b wtu-i6zy5z-c wtu-16203my-s wtu-1y4fkff-x" }, [
            _createElementVNode("text", { class: "wtu-1hmoe0k-e wtu-ntizu3-19" }, "📌 父组件填入的具名 Footer 插槽"),
            _createElementVNode("text", { class: "wtu-1j9rfuf-u wtu-cj9lbh-j wtu-5777z3-1a wtu-zb8dsk-w wtu-1y4fkff-x wtu-1jbz86x-y wtu-1nu791o-15" }, "双向通信验证成功")
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
