import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
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
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
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
    const __returned__ = { emit, inputMsg, handleAdd, handleReset, handleSendMsg };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "wtu-gcabbq-0": { "": { "backgroundColor": "#f1f5f9" } }, "wtu-1nivbe9-1": { "": { "--tw-font-weight": "var(--font-weight-bold, 700)", "fontWeight": 700 } }, "wtu-15nsgd4-2": { "": { "color": "#334155" } }, "wtu-182oteh-3": { "": { "backgroundColor": "#ffffff" } }, "wtu-c3ez2v-4": { "": { "color": "#475569" } }, "wtu-x7nkyg-5": { "": { "flexDirection": "row" } }, "wtu-ix6v4k-6": { "": { "alignItems": "center" } }, "wtu-grng8o-7": { "": { "color": "#64748b" } }, "wtu-18ekrle-8": { "": { "color": "#2563eb" } }, "wtu-zipktt-9": { "": { "backgroundColor": "#f8fafc" } }, "wtu-jpge2z-a": { "": { "justifyContent": "space-between" } }, "wtu-812ws7-b": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "wtu-s60y7a-c": { "": { "backgroundColor": "#2563eb" } }, "wtu-1pd1px4-d": { "": { "justifyContent": "center" } }, "wtu-ih0clp-e": { "": { "color": "#ffffff" } }, "wtu-4dipnu-f": { "": { "backgroundColor": "#dc2626" } }, "wtu-aufsc6-g": { "": { "backgroundColor": "#059669" } }, "wtu-1xb3h6w-h": { "": { "color": "#94a3b8" } } };
const { renderSlot: _renderSlot, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, vModelText: _vModelText, withDirectives: _withDirectives } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("view", { class: "wtu-gcabbq-0 rounded-12px p-14px border-width-1px border-style-solid border-color-[#cbd5e1]" }, [
    _createElementVNode("view", { class: "mb-10px border-b-width-1px border-b-style-solid border-b-color-[#cbd5e1] pb-8px" }, [
      _renderSlot(_ctx.$slots, "header", {}, () => [
        _createElementVNode(
          "text",
          { class: "text-14px wtu-1nivbe9-1 wtu-15nsgd4-2" },
          "📦 " + _toDisplayString($props.title) + "（默认 Header）",
          1
          /* TEXT */
        )
      ])
    ]),
    _createElementVNode("view", { class: "mb-12px wtu-182oteh-3 rounded-8px p-10px" }, [
      _createElementVNode("text", { class: "text-12px wtu-1nivbe9-1 wtu-c3ez2v-4 mb-4px" }, "【父传子 Props 动态接收】"),
      _createElementVNode("view", { class: "wtu-x7nkyg-5 wtu-ix6v4k-6" }, [
        _createElementVNode("text", { class: "text-12px wtu-grng8o-7" }, "父组件传递的 Count: "),
        _createElementVNode(
          "text",
          { class: "text-14px wtu-1nivbe9-1 wtu-18ekrle-8 ml-6px" },
          _toDisplayString($props.count),
          1
          /* TEXT */
        )
      ])
    ]),
    _createElementVNode("view", { class: "mb-12px wtu-182oteh-3 rounded-8px p-10px" }, [
      _createElementVNode("text", { class: "text-12px wtu-1nivbe9-1 wtu-c3ez2v-4 mb-6px" }, "【具名作用域插槽 (Slot 向父组件传参)】"),
      (_openBlock(true), _createElementBlock(
        _Fragment,
        null,
        _renderList($props.tags, (item, index) => {
          return _openBlock(), _createElementBlock("view", {
            key: index,
            class: "mb-6px"
          }, [
            _renderSlot(_ctx.$slots, "itemSlot", {
              item,
              index
            }, () => [
              _createElementVNode("view", { class: "wtu-zipktt-9 rounded-4px p-6px" }, [
                _createElementVNode(
                  "text",
                  { class: "text-12px wtu-grng8o-7" },
                  "Tag " + _toDisplayString(index + 1) + ": " + _toDisplayString(item),
                  1
                  /* TEXT */
                )
              ])
            ])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]),
    _createElementVNode("view", { class: "mb-10px wtu-182oteh-3 rounded-8px p-10px" }, [
      _createElementVNode("text", { class: "text-12px wtu-1nivbe9-1 wtu-c3ez2v-4 mb-8px" }, "【子传父 Emits 事件触发】"),
      _createElementVNode("view", { class: "wtu-x7nkyg-5 wtu-jpge2z-a wtu-ix6v4k-6 mb-8px" }, [
        _createElementVNode("view", {
          class: "wtu-812ws7-b wtu-s60y7a-c rounded-6px h-32px wtu-x7nkyg-5 wtu-ix6v4k-6 wtu-1pd1px4-d mr-6px",
          onClick: $setup.handleAdd
        }, [
          _createElementVNode("text", { class: "wtu-ih0clp-e text-12px" }, "触发 Count + 1")
        ]),
        _createElementVNode("view", {
          class: "wtu-812ws7-b wtu-4dipnu-f rounded-6px h-32px wtu-x7nkyg-5 wtu-ix6v4k-6 wtu-1pd1px4-d ml-6px",
          onClick: $setup.handleReset
        }, [
          _createElementVNode("text", { class: "wtu-ih0clp-e text-12px" }, "触发 重置事件")
        ])
      ]),
      _createElementVNode("view", { class: "wtu-zipktt-9 rounded-6px p-8px border-width-1px border-style-solid border-color-[#e2e8f0] wtu-x7nkyg-5 wtu-ix6v4k-6 wtu-jpge2z-a" }, [
        _withDirectives(_createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.inputMsg = $event),
            placeholder: "输入要送回父组件的消息",
            class: "text-12px wtu-812ws7-b h-30px px-8px wtu-182oteh-3 rounded-4px border-width-1px border-style-solid border-color-[#cbd5e1]"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [_vModelText, $setup.inputMsg]
        ]),
        _createElementVNode("view", {
          class: "wtu-aufsc6-g rounded-6px h-30px px-10px wtu-x7nkyg-5 wtu-ix6v4k-6 wtu-1pd1px4-d ml-8px",
          onClick: $setup.handleSendMsg
        }, [
          _createElementVNode("text", { class: "wtu-ih0clp-e text-12px" }, "发送给父组件")
        ])
      ])
    ]),
    _createElementVNode("view", { class: "pt-6px border-t-width-1px border-t-style-solid border-t-color-[#cbd5e1]" }, [
      _renderSlot(_ctx.$slots, "footer", {}, () => [
        _createElementVNode("text", { class: "text-11px wtu-1xb3h6w-h" }, "（默认 Footer）")
      ])
    ])
  ]);
}
const ChildDemoBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/ChildDemoBox.uvue"]]);
export {
  ChildDemoBox as C
};
//# sourceMappingURL=ChildDemoBox.js.map
