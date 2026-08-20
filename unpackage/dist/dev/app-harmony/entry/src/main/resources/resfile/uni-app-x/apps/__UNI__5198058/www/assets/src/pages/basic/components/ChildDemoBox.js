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
const _style_0 = { "wtu-zipktt-0": { "": { "backgroundColor": "#f8fafc" } }, "wtu-1v0f2ef-1": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "wtu-j5w8hi-2": { "": { "paddingTop": 14, "paddingRight": 14, "paddingBottom": 14, "paddingLeft": 14 } }, "wtu-1oapzb6-3": { "": { "--tw-border-style": "solid", "borderTopStyle": "var(--tw-border-style)", "borderRightStyle": "var(--tw-border-style)", "borderBottomStyle": "var(--tw-border-style)", "borderLeftStyle": "var(--tw-border-style)", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "wtu-efe1oe-4": { "": { "--tw-border-style": "solid", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "wtu-6plw78-5": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "wtu-1k2269n-6": { "": { "marginBottom": 10 } }, "wtu-5zjli3-7": { "": { "fontSize": 14 } }, "wtu-1nivbe9-8": { "": { "--tw-font-weight": "var(--font-weight-bold, 700)", "fontWeight": 700 } }, "wtu-15nsgd4-9": { "": { "color": "#334155" } }, "wtu-1t03los-a": { "": { "height": 1 } }, "wtu-qb9abt-b": { "": { "backgroundColor": "#e2e8f0" } }, "wtu-jtxdk8-c": { "": { "marginTop": 8 } }, "wtu-ucwwyt-d": { "": { "marginBottom": 12 } }, "wtu-182oteh-e": { "": { "backgroundColor": "#ffffff" } }, "wtu-1kpj8o8-f": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "wtu-1adrg6y-g": { "": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10 } }, "wtu-7kw8bf-h": { "": { "borderTopColor": "#f1f5f9", "borderRightColor": "#f1f5f9", "borderBottomColor": "#f1f5f9", "borderLeftColor": "#f1f5f9" } }, "wtu-1pxnoyx-i": { "": { "fontSize": 12 } }, "wtu-c3ez2v-j": { "": { "color": "#475569" } }, "wtu-yp9fxe-k": { "": { "marginBottom": 4 } }, "wtu-x7nkyg-l": { "": { "flexDirection": "row" } }, "wtu-ix6v4k-m": { "": { "alignItems": "center" } }, "wtu-grng8o-n": { "": { "color": "#64748b" } }, "wtu-18ekrle-o": { "": { "color": "#2563eb" } }, "wtu-9yebru-p": { "": { "marginLeft": 6 } }, "wtu-hisbzo-q": { "": { "marginBottom": 6 } }, "wtu-l9uwt0-r": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "wtu-2vrnhv-s": { "": { "paddingTop": 6, "paddingRight": 6, "paddingBottom": 6, "paddingLeft": 6 } }, "wtu-1rszb3q-t": { "": { "marginBottom": 8 } }, "wtu-jpge2z-u": { "": { "justifyContent": "space-between" } }, "wtu-812ws7-v": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "wtu-s60y7a-w": { "": { "backgroundColor": "#2563eb" } }, "wtu-1uy7k1u-x": { "": { "borderTopLeftRadius": 6, "borderTopRightRadius": 6, "borderBottomRightRadius": 6, "borderBottomLeftRadius": 6 } }, "wtu-1i4pv7e-y": { "": { "height": 32 } }, "wtu-1pd1px4-z": { "": { "justifyContent": "center" } }, "wtu-1udz6jo-10": { "": { "marginRight": 6 } }, "wtu-ih0clp-11": { "": { "color": "#ffffff" } }, "wtu-4dipnu-12": { "": { "backgroundColor": "#dc2626" } }, "wtu-1y1vdmh-13": { "": { "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8 } }, "wtu-8x6qng-14": { "": { "height": 30 } }, "wtu-1w52wo5-15": { "": { "paddingLeft": 8, "paddingRight": 8 } }, "wtu-tbqpp4-16": { "": { "borderTopColor": "#cbd5e1", "borderRightColor": "#cbd5e1", "borderBottomColor": "#cbd5e1", "borderLeftColor": "#cbd5e1" } }, "wtu-aufsc6-17": { "": { "backgroundColor": "#059669" } }, "wtu-xmcsy6-18": { "": { "paddingLeft": 10, "paddingRight": 10 } }, "wtu-lfb8b4-19": { "": { "marginLeft": 8 } }, "wtu-1iqlyvo-1a": { "": { "marginTop": 4 } }, "wtu-1h5fdje-1b": { "": { "fontSize": 11 } }, "wtu-1xb3h6w-1c": { "": { "color": "#94a3b8" } } };
const { renderSlot: _renderSlot, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, vModelText: _vModelText, withDirectives: _withDirectives } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("view", { class: "wtu-zipktt-0 wtu-1v0f2ef-1 wtu-j5w8hi-2 wtu-1oapzb6-3 wtu-efe1oe-4 wtu-6plw78-5" }, [
    _createElementVNode("view", { class: "wtu-1k2269n-6" }, [
      _renderSlot(_ctx.$slots, "header", {}, () => [
        _createElementVNode(
          "text",
          { class: "wtu-5zjli3-7 wtu-1nivbe9-8 wtu-15nsgd4-9" },
          "📦 " + _toDisplayString($props.title) + "（默认 Header）",
          1
          /* TEXT */
        )
      ]),
      _createElementVNode("view", { class: "wtu-1t03los-a wtu-qb9abt-b wtu-jtxdk8-c" })
    ]),
    _createElementVNode("view", { class: "wtu-ucwwyt-d wtu-182oteh-e wtu-1kpj8o8-f wtu-1adrg6y-g wtu-1oapzb6-3 wtu-efe1oe-4 wtu-7kw8bf-h" }, [
      _createElementVNode("text", { class: "wtu-1pxnoyx-i wtu-1nivbe9-8 wtu-c3ez2v-j wtu-yp9fxe-k" }, "【父传子 Props 动态接收】"),
      _createElementVNode("view", { class: "wtu-x7nkyg-l wtu-ix6v4k-m" }, [
        _createElementVNode("text", { class: "wtu-1pxnoyx-i wtu-grng8o-n" }, "父组件传递的 Count: "),
        _createElementVNode(
          "text",
          { class: "wtu-5zjli3-7 wtu-1nivbe9-8 wtu-18ekrle-o wtu-9yebru-p" },
          _toDisplayString($props.count),
          1
          /* TEXT */
        )
      ])
    ]),
    _createElementVNode("view", { class: "wtu-ucwwyt-d wtu-182oteh-e wtu-1kpj8o8-f wtu-1adrg6y-g wtu-1oapzb6-3 wtu-efe1oe-4 wtu-7kw8bf-h" }, [
      _createElementVNode("text", { class: "wtu-1pxnoyx-i wtu-1nivbe9-8 wtu-c3ez2v-j wtu-hisbzo-q" }, "【具名作用域插槽 (Slot 向父组件传参)】"),
      (_openBlock(true), _createElementBlock(
        _Fragment,
        null,
        _renderList($props.tags, (item, index) => {
          return _openBlock(), _createElementBlock("view", {
            key: index,
            class: "wtu-hisbzo-q"
          }, [
            _renderSlot(_ctx.$slots, "itemSlot", {
              item,
              index
            }, () => [
              _createElementVNode("view", { class: "wtu-zipktt-0 wtu-l9uwt0-r wtu-2vrnhv-s" }, [
                _createElementVNode(
                  "text",
                  { class: "wtu-1pxnoyx-i wtu-grng8o-n" },
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
    _createElementVNode("view", { class: "wtu-1k2269n-6 wtu-182oteh-e wtu-1kpj8o8-f wtu-1adrg6y-g wtu-1oapzb6-3 wtu-efe1oe-4 wtu-7kw8bf-h" }, [
      _createElementVNode("text", { class: "wtu-1pxnoyx-i wtu-1nivbe9-8 wtu-c3ez2v-j wtu-1rszb3q-t" }, "【子传父 Emits 事件触发】"),
      _createElementVNode("view", { class: "wtu-x7nkyg-l wtu-jpge2z-u wtu-ix6v4k-m wtu-1rszb3q-t" }, [
        _createElementVNode("view", {
          class: "wtu-812ws7-v wtu-s60y7a-w wtu-1uy7k1u-x wtu-1i4pv7e-y wtu-x7nkyg-l wtu-ix6v4k-m wtu-1pd1px4-z wtu-1udz6jo-10",
          onClick: $setup.handleAdd
        }, [
          _createElementVNode("text", { class: "wtu-ih0clp-11 wtu-1pxnoyx-i" }, "触发 Count + 1")
        ]),
        _createElementVNode("view", {
          class: "wtu-812ws7-v wtu-4dipnu-12 wtu-1uy7k1u-x wtu-1i4pv7e-y wtu-x7nkyg-l wtu-ix6v4k-m wtu-1pd1px4-z wtu-9yebru-p",
          onClick: $setup.handleReset
        }, [
          _createElementVNode("text", { class: "wtu-ih0clp-11 wtu-1pxnoyx-i" }, "触发 重置事件")
        ])
      ]),
      _createElementVNode("view", { class: "wtu-zipktt-0 wtu-1uy7k1u-x wtu-1y1vdmh-13 wtu-1oapzb6-3 wtu-efe1oe-4 wtu-6plw78-5 wtu-x7nkyg-l wtu-ix6v4k-m wtu-jpge2z-u" }, [
        _withDirectives(_createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.inputMsg = $event),
            placeholder: "输入要送回父组件的消息",
            class: "wtu-1pxnoyx-i wtu-812ws7-v wtu-8x6qng-14 wtu-1w52wo5-15 wtu-182oteh-e wtu-l9uwt0-r wtu-1oapzb6-3 wtu-efe1oe-4 wtu-tbqpp4-16"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [_vModelText, $setup.inputMsg]
        ]),
        _createElementVNode("view", {
          class: "wtu-aufsc6-17 wtu-1uy7k1u-x wtu-8x6qng-14 wtu-xmcsy6-18 wtu-x7nkyg-l wtu-ix6v4k-m wtu-1pd1px4-z wtu-lfb8b4-19",
          onClick: $setup.handleSendMsg
        }, [
          _createElementVNode("text", { class: "wtu-ih0clp-11 wtu-1pxnoyx-i" }, "发送给父组件")
        ])
      ])
    ]),
    _createElementVNode("view", { class: "wtu-1iqlyvo-1a" }, [
      _createElementVNode("view", { class: "wtu-1t03los-a wtu-qb9abt-b wtu-1rszb3q-t" }),
      _renderSlot(_ctx.$slots, "footer", {}, () => [
        _createElementVNode("text", { class: "wtu-1h5fdje-1b wtu-1xb3h6w-1c" }, "（默认 Footer）")
      ])
    ])
  ]);
}
const ChildDemoBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/ChildDemoBox.uvue"]]);
export {
  ChildDemoBox as C
};
//# sourceMappingURL=ChildDemoBox.js.map
