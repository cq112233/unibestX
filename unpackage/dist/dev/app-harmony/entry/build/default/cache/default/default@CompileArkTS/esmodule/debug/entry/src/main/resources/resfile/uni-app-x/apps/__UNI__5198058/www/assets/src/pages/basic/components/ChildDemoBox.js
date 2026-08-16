import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
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
const _style_0 = { "bg-__059669_": { "": { "backgroundImage": "none", "backgroundColor": "#059669" } }, "bg-__2563eb_": { "": { "backgroundImage": "none", "backgroundColor": "#2563eb" } }, "bg-__dc2626_": { "": { "backgroundImage": "none", "backgroundColor": "#dc2626" } }, "bg-__f1f5f9_": { "": { "backgroundImage": "none", "backgroundColor": "#f1f5f9" } }, "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "bg-white": { "": { "backgroundColor": "rgba(255,255,255,var(--un-bg-opacity,1))" } }, "border-b-color-__cbd5e1_": { "": { "borderBottomColor": "#cbd5e1" } }, "border-b-style-solid": { "": { "borderBottomStyle": "solid" } }, "border-b-width-1px": { "": { "borderBottomWidth": 1 } }, "border-color-__cbd5e1_": { "": { "borderTopColor": "#cbd5e1", "borderRightColor": "#cbd5e1", "borderBottomColor": "#cbd5e1", "borderLeftColor": "#cbd5e1" } }, "border-color-__e2e8f0_": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-t-color-__cbd5e1_": { "": { "borderTopColor": "#cbd5e1" } }, "border-t-style-solid": { "": { "borderTopStyle": "solid" } }, "border-t-width-1px": { "": { "borderTopWidth": 1 } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "h-30px": { "": { "height": 30 } }, "h-32px": { "": { "height": 32 } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "justify-center": { "": { "justifyContent": "center" } }, "mb-10px": { "": { "marginBottom": 10 } }, "mb-12px": { "": { "marginBottom": 12 } }, "mb-4px": { "": { "marginBottom": 4 } }, "mb-6px": { "": { "marginBottom": 6 } }, "mb-8px": { "": { "marginBottom": 8 } }, "ml-6px": { "": { "marginLeft": 6 } }, "ml-8px": { "": { "marginLeft": 8 } }, "mr-6px": { "": { "marginRight": 6 } }, "none": { "": { "display": "none" } }, "p-10px": { "": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10 } }, "p-14px": { "": { "paddingTop": 14, "paddingRight": 14, "paddingBottom": 14, "paddingLeft": 14 } }, "p-6px": { "": { "paddingTop": 6, "paddingRight": 6, "paddingBottom": 6, "paddingLeft": 6 } }, "p-8px": { "": { "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8 } }, "pb-8px": { "": { "paddingBottom": 8 } }, "pt-6px": { "": { "paddingTop": 6 } }, "px-10px": { "": { "paddingLeft": 10, "paddingRight": 10 } }, "px-8px": { "": { "paddingLeft": 8, "paddingRight": 8 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "rounded-4px": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "rounded-6px": { "": { "borderTopLeftRadius": 6, "borderTopRightRadius": 6, "borderBottomRightRadius": 6, "borderBottomLeftRadius": 6 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "text-__2563eb_": { "": { "color": "#2563eb" } }, "text-__334155_": { "": { "color": "#334155" } }, "text-__475569_": { "": { "color": "#475569" } }, "text-__64748b_": { "": { "color": "#64748b" } }, "text-__94a3b8_": { "": { "color": "#94a3b8" } }, "text-11px": { "": { "fontSize": 11 } }, "text-12px": { "": { "fontSize": 12 } }, "text-14px": { "": { "fontSize": 14 } }, "text-white": { "": { "color": "rgba(255,255,255,var(--un-color-opacity,1))" } } };
const { renderSlot: _renderSlot, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, vModelText: _vModelText, withDirectives: _withDirectives } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("view", { class: "bg-__f1f5f9_ rounded-12px p-14px border-width-1px border-style-solid border-color-__cbd5e1_" }, [
    _createElementVNode("view", { class: "mb-10px border-b-width-1px border-b-style-solid border-b-color-__cbd5e1_ pb-8px" }, [
      _renderSlot(_ctx.$slots, "header", {}, () => [
        _createElementVNode(
          "text",
          { class: "text-14px font-bold text-__334155_" },
          "📦 " + _toDisplayString($props.title) + "（默认 Header）",
          1
          /* TEXT */
        )
      ])
    ]),
    _createElementVNode("view", { class: "mb-12px bg-white rounded-8px p-10px" }, [
      _createElementVNode("text", { class: "text-12px font-bold text-__475569_ mb-4px" }, "【父传子 Props 动态接收】"),
      _createElementVNode("view", { class: "flex-row items-center" }, [
        _createElementVNode("text", { class: "text-12px text-__64748b_" }, "父组件传递的 Count: "),
        _createElementVNode(
          "text",
          { class: "text-14px font-bold text-__2563eb_ ml-6px" },
          _toDisplayString($props.count),
          1
          /* TEXT */
        )
      ])
    ]),
    _createElementVNode("view", { class: "mb-12px bg-white rounded-8px p-10px" }, [
      _createElementVNode("text", { class: "text-12px font-bold text-__475569_ mb-6px" }, "【具名作用域插槽 (Slot 向父组件传参)】"),
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
              _createElementVNode("view", { class: "bg-__f8fafc_ rounded-4px p-6px" }, [
                _createElementVNode(
                  "text",
                  { class: "text-12px text-__64748b_" },
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
    _createElementVNode("view", { class: "mb-10px bg-white rounded-8px p-10px" }, [
      _createElementVNode("text", { class: "text-12px font-bold text-__475569_ mb-8px" }, "【子传父 Emits 事件触发】"),
      _createElementVNode("view", { class: "flex-row justify-between items-center mb-8px" }, [
        _createElementVNode("view", {
          class: "flex-1 bg-__2563eb_ rounded-6px h-32px flex-row items-center justify-center mr-6px",
          onClick: $setup.handleAdd
        }, [
          _createElementVNode("text", { class: "text-white text-12px" }, "触发 Count + 1")
        ]),
        _createElementVNode("view", {
          class: "flex-1 bg-__dc2626_ rounded-6px h-32px flex-row items-center justify-center ml-6px",
          onClick: $setup.handleReset
        }, [
          _createElementVNode("text", { class: "text-white text-12px" }, "触发 重置事件")
        ])
      ]),
      _createElementVNode("view", { class: "bg-__f8fafc_ rounded-6px p-8px border-width-1px border-style-solid border-color-__e2e8f0_ flex-row items-center justify-between" }, [
        _withDirectives(_createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.inputMsg = $event),
            placeholder: "输入要送回父组件的消息",
            class: "text-12px flex-1 h-30px px-8px bg-white rounded-4px border-width-1px border-style-solid border-color-__cbd5e1_"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [_vModelText, $setup.inputMsg]
        ]),
        _createElementVNode("view", {
          class: "bg-__059669_ rounded-6px h-30px px-10px flex-row items-center justify-center ml-8px",
          onClick: $setup.handleSendMsg
        }, [
          _createElementVNode("text", { class: "text-white text-12px" }, "发送给父组件")
        ])
      ])
    ]),
    _createElementVNode("view", { class: "pt-6px border-t-width-1px border-t-style-solid border-t-color-__cbd5e1_" }, [
      _renderSlot(_ctx.$slots, "footer", {}, () => [
        _createElementVNode("text", { class: "text-11px text-__94a3b8_" }, "（默认 Footer）")
      ])
    ])
  ]);
}
const ChildDemoBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/ChildDemoBox.uvue"]]);
export {
  ChildDemoBox as C
};
//# sourceMappingURL=ChildDemoBox.js.map
