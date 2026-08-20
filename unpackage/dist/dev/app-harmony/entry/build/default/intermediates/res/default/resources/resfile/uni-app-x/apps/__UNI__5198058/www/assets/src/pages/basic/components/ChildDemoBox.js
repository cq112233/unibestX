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
const _style_0 = { "wtu-gcabbq-0": { "": { "backgroundColor": "#f1f5f9" } }, "wtu-1v0f2ef-1": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "wtu-j5w8hi-2": { "": { "paddingTop": 14, "paddingRight": 14, "paddingBottom": 14, "paddingLeft": 14 } }, "wtu-1oapzb6-3": { "": { "--tw-border-style": "solid", "borderTopStyle": "var(--tw-border-style)", "borderRightStyle": "var(--tw-border-style)", "borderBottomStyle": "var(--tw-border-style)", "borderLeftStyle": "var(--tw-border-style)", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "wtu-efe1oe-4": { "": { "--tw-border-style": "solid", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "wtu-tbqpp4-5": { "": { "borderTopColor": "#cbd5e1", "borderRightColor": "#cbd5e1", "borderBottomColor": "#cbd5e1", "borderLeftColor": "#cbd5e1" } }, "wtu-1k2269n-6": { "": { "marginBottom": 10 } }, "wtu-1qjt5t5-7": { "": { "--tw-border-style": "solid", "borderBottomStyle": "var(--tw-border-style)", "borderBottomWidth": 1 } }, "wtu-vp8uuf-8": { "": { "borderBottomColor": "#cbd5e1" } }, "wtu-1cjjz3f-9": { "": { "paddingBottom": 8 } }, "wtu-5zjli3-a": { "": { "fontSize": 14 } }, "wtu-1nivbe9-b": { "": { "--tw-font-weight": "var(--font-weight-bold, 700)", "fontWeight": 700 } }, "wtu-15nsgd4-c": { "": { "color": "#334155" } }, "wtu-ucwwyt-d": { "": { "marginBottom": 12 } }, "wtu-182oteh-e": { "": { "backgroundColor": "#ffffff" } }, "wtu-1kpj8o8-f": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "wtu-1adrg6y-g": { "": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10 } }, "wtu-1pxnoyx-h": { "": { "fontSize": 12 } }, "wtu-c3ez2v-i": { "": { "color": "#475569" } }, "wtu-yp9fxe-j": { "": { "marginBottom": 4 } }, "wtu-x7nkyg-k": { "": { "flexDirection": "row" } }, "wtu-ix6v4k-l": { "": { "alignItems": "center" } }, "wtu-grng8o-m": { "": { "color": "#64748b" } }, "wtu-18ekrle-n": { "": { "color": "#2563eb" } }, "wtu-9yebru-o": { "": { "marginLeft": 6 } }, "wtu-hisbzo-p": { "": { "marginBottom": 6 } }, "wtu-zipktt-q": { "": { "backgroundColor": "#f8fafc" } }, "wtu-l9uwt0-r": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "wtu-2vrnhv-s": { "": { "paddingTop": 6, "paddingRight": 6, "paddingBottom": 6, "paddingLeft": 6 } }, "wtu-1rszb3q-t": { "": { "marginBottom": 8 } }, "wtu-jpge2z-u": { "": { "justifyContent": "space-between" } }, "wtu-812ws7-v": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "wtu-s60y7a-w": { "": { "backgroundColor": "#2563eb" } }, "wtu-1uy7k1u-x": { "": { "borderTopLeftRadius": 6, "borderTopRightRadius": 6, "borderBottomRightRadius": 6, "borderBottomLeftRadius": 6 } }, "wtu-1i4pv7e-y": { "": { "height": 32 } }, "wtu-1pd1px4-z": { "": { "justifyContent": "center" } }, "wtu-1udz6jo-10": { "": { "marginRight": 6 } }, "wtu-ih0clp-11": { "": { "color": "#ffffff" } }, "wtu-4dipnu-12": { "": { "backgroundColor": "#dc2626" } }, "wtu-1y1vdmh-13": { "": { "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8 } }, "wtu-6plw78-14": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "wtu-8x6qng-15": { "": { "height": 30 } }, "wtu-1w52wo5-16": { "": { "paddingLeft": 8, "paddingRight": 8 } }, "wtu-aufsc6-17": { "": { "backgroundColor": "#059669" } }, "wtu-xmcsy6-18": { "": { "paddingLeft": 10, "paddingRight": 10 } }, "wtu-lfb8b4-19": { "": { "marginLeft": 8 } }, "wtu-c2r1er-1a": { "": { "paddingTop": 6 } }, "wtu-11ta45z-1b": { "": { "--tw-border-style": "solid", "borderTopStyle": "var(--tw-border-style)", "borderTopWidth": 1 } }, "wtu-1k4o3ax-1c": { "": { "borderTopColor": "#cbd5e1" } }, "wtu-1h5fdje-1d": { "": { "fontSize": 11 } }, "wtu-1xb3h6w-1e": { "": { "color": "#94a3b8" } } };
const { renderSlot: _renderSlot, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, vModelText: _vModelText, withDirectives: _withDirectives } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("view", { class: "wtu-gcabbq-0 wtu-1v0f2ef-1 wtu-j5w8hi-2 wtu-1oapzb6-3 wtu-efe1oe-4 wtu-tbqpp4-5" }, [
    _createElementVNode("view", { class: "wtu-1k2269n-6 wtu-1qjt5t5-7 wtu-efe1oe-4 wtu-vp8uuf-8 wtu-1cjjz3f-9" }, [
      _renderSlot(_ctx.$slots, "header", {}, () => [
        _createElementVNode(
          "text",
          { class: "wtu-5zjli3-a wtu-1nivbe9-b wtu-15nsgd4-c" },
          "📦 " + _toDisplayString($props.title) + "（默认 Header）",
          1
          /* TEXT */
        )
      ])
    ]),
    _createElementVNode("view", { class: "wtu-ucwwyt-d wtu-182oteh-e wtu-1kpj8o8-f wtu-1adrg6y-g" }, [
      _createElementVNode("text", { class: "wtu-1pxnoyx-h wtu-1nivbe9-b wtu-c3ez2v-i wtu-yp9fxe-j" }, "【父传子 Props 动态接收】"),
      _createElementVNode("view", { class: "wtu-x7nkyg-k wtu-ix6v4k-l" }, [
        _createElementVNode("text", { class: "wtu-1pxnoyx-h wtu-grng8o-m" }, "父组件传递的 Count: "),
        _createElementVNode(
          "text",
          { class: "wtu-5zjli3-a wtu-1nivbe9-b wtu-18ekrle-n wtu-9yebru-o" },
          _toDisplayString($props.count),
          1
          /* TEXT */
        )
      ])
    ]),
    _createElementVNode("view", { class: "wtu-ucwwyt-d wtu-182oteh-e wtu-1kpj8o8-f wtu-1adrg6y-g" }, [
      _createElementVNode("text", { class: "wtu-1pxnoyx-h wtu-1nivbe9-b wtu-c3ez2v-i wtu-hisbzo-p" }, "【具名作用域插槽 (Slot 向父组件传参)】"),
      (_openBlock(true), _createElementBlock(
        _Fragment,
        null,
        _renderList($props.tags, (item, index) => {
          return _openBlock(), _createElementBlock("view", {
            key: index,
            class: "wtu-hisbzo-p"
          }, [
            _renderSlot(_ctx.$slots, "itemSlot", {
              item,
              index
            }, () => [
              _createElementVNode("view", { class: "wtu-zipktt-q wtu-l9uwt0-r wtu-2vrnhv-s" }, [
                _createElementVNode(
                  "text",
                  { class: "wtu-1pxnoyx-h wtu-grng8o-m" },
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
    _createElementVNode("view", { class: "wtu-1k2269n-6 wtu-182oteh-e wtu-1kpj8o8-f wtu-1adrg6y-g" }, [
      _createElementVNode("text", { class: "wtu-1pxnoyx-h wtu-1nivbe9-b wtu-c3ez2v-i wtu-1rszb3q-t" }, "【子传父 Emits 事件触发】"),
      _createElementVNode("view", { class: "wtu-x7nkyg-k wtu-jpge2z-u wtu-ix6v4k-l wtu-1rszb3q-t" }, [
        _createElementVNode("view", {
          class: "wtu-812ws7-v wtu-s60y7a-w wtu-1uy7k1u-x wtu-1i4pv7e-y wtu-x7nkyg-k wtu-ix6v4k-l wtu-1pd1px4-z wtu-1udz6jo-10",
          onClick: $setup.handleAdd
        }, [
          _createElementVNode("text", { class: "wtu-ih0clp-11 wtu-1pxnoyx-h" }, "触发 Count + 1")
        ]),
        _createElementVNode("view", {
          class: "wtu-812ws7-v wtu-4dipnu-12 wtu-1uy7k1u-x wtu-1i4pv7e-y wtu-x7nkyg-k wtu-ix6v4k-l wtu-1pd1px4-z wtu-9yebru-o",
          onClick: $setup.handleReset
        }, [
          _createElementVNode("text", { class: "wtu-ih0clp-11 wtu-1pxnoyx-h" }, "触发 重置事件")
        ])
      ]),
      _createElementVNode("view", { class: "wtu-zipktt-q wtu-1uy7k1u-x wtu-1y1vdmh-13 wtu-1oapzb6-3 wtu-efe1oe-4 wtu-6plw78-14 wtu-x7nkyg-k wtu-ix6v4k-l wtu-jpge2z-u" }, [
        _withDirectives(_createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.inputMsg = $event),
            placeholder: "输入要送回父组件的消息",
            class: "wtu-1pxnoyx-h wtu-812ws7-v wtu-8x6qng-15 wtu-1w52wo5-16 wtu-182oteh-e wtu-l9uwt0-r wtu-1oapzb6-3 wtu-efe1oe-4 wtu-tbqpp4-5"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [_vModelText, $setup.inputMsg]
        ]),
        _createElementVNode("view", {
          class: "wtu-aufsc6-17 wtu-1uy7k1u-x wtu-8x6qng-15 wtu-xmcsy6-18 wtu-x7nkyg-k wtu-ix6v4k-l wtu-1pd1px4-z wtu-lfb8b4-19",
          onClick: $setup.handleSendMsg
        }, [
          _createElementVNode("text", { class: "wtu-ih0clp-11 wtu-1pxnoyx-h" }, "发送给父组件")
        ])
      ])
    ]),
    _createElementVNode("view", { class: "wtu-c2r1er-1a wtu-11ta45z-1b wtu-efe1oe-4 wtu-1k4o3ax-1c" }, [
      _renderSlot(_ctx.$slots, "footer", {}, () => [
        _createElementVNode("text", { class: "wtu-1h5fdje-1d wtu-1xb3h6w-1e" }, "（默认 Footer）")
      ])
    ])
  ]);
}
const ChildDemoBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/ChildDemoBox.uvue"]]);
export {
  ChildDemoBox as C
};
//# sourceMappingURL=ChildDemoBox.js.map
