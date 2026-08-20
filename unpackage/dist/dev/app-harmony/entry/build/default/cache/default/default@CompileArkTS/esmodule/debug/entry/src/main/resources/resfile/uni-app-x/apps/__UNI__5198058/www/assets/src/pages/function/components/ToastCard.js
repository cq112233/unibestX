import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { t as toast, a as toastSuccess } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/toast&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "ToastCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const customMsg = ref("来自 Function 功能页的 Toast 消息！");
    function showCustomToast() {
      if (customMsg.value.trim() == "") {
        toast("请输入提示内容");
        return null;
      }
      toast(customMsg.value);
    }
    function showSuccessToast() {
      toastSuccess("Function 页面全局 Toast 触发成功！");
    }
    const __returned__ = { customMsg, showCustomToast, showSuccessToast, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"wtu-mnbm96-0":{"":{"borderTopLeftRadius":12,"borderTopRightRadius":12,"borderBottomRightRadius":12,"borderBottomLeftRadius":12}},"wtu-1bq9shh-1":{"":{"paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16}},"wtu-13ryylq-2":{"":{"marginBottom":16}},"wtu-33hvuz-3":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderRightStyle":"var(--tw-border-style)","borderBottomStyle":"var(--tw-border-style)","borderLeftStyle":"var(--tw-border-style)","borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1}},"wtu-4tuys3-4":{"":{"--tw-border-style":"solid","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}},"wtu-8r66y1-5":{"":{"borderTopColor":"#e2e8f0","borderRightColor":"#e2e8f0","borderBottomColor":"#e2e8f0","borderLeftColor":"#e2e8f0"}},"wtu-3i3gs6-6":{"":{"fontSize":12}},"wtu-1pd9yl-7":{"":{"color":"#64748b"}},"wtu-aahijk-8":{"":{"--tw-leading":"20px","lineHeight":"20px"}},"wtu-4tpahe-9":{"":{"marginBottom":12}},"wtu-b5uul9-a":{"":{"color":"#94a3b8"}},"wtu-9szial-b":{"":{"marginBottom":6}},"wtu-16m9tth-c":{"":{"height":38}},"wtu-19clxu8-d":{"":{"backgroundColor":"#ffffff"}},"wtu-6x9tj9-e":{"":{"borderTopLeftRadius":6,"borderTopRightRadius":6,"borderBottomRightRadius":6,"borderBottomLeftRadius":6}},"wtu-y4lian-f":{"":{"paddingLeft":12,"paddingRight":12}},"wtu-f8q5hx-g":{"":{"borderTopColor":"#cbd5e1","borderRightColor":"#cbd5e1","borderBottomColor":"#cbd5e1","borderLeftColor":"#cbd5e1"}},"wtu-1l8aqp8-h":{"":{"fontSize":14}},"wtu-12c53hp-i":{"":{"color":"#334155"}},"wtu-1yca3x4-j":{"":{"display":"flex"}},"wtu-clldfh-k":{"":{"flexDirection":"row"}},"wtu-bte5oa-l":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"wtu-nw1q8k-m":{"":{"marginRight":10}},"wtu-zsktp1-n":{"":{"backgroundColor":"#3b82f6"}},"wtu-13pz9mv-o":{"":{"borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"wtu-1b6qia0-p":{"":{"height":40}},"wtu-xpmuf1-q":{"":{"alignItems":"center"}},"wtu-164irp9-r":{"":{"justifyContent":"center"}},"wtu-pubmk8-s":{"":{"color":"#ffffff"}},"wtu-1tbrxcb-t":{"":{"fontSize":13}},"wtu-bj9ji2-u":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-zhey3t-v":{"":{"backgroundColor":"#10b981"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, vModelText: _vModelText, withDirectives: _withDirectives, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "全局 Toast 提示调用" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-mnbm96-0 wtu-1bq9shh-1 wtu-13ryylq-2 wtu-33hvuz-3 wtu-4tuys3-4 wtu-8r66y1-5" }, [
        _createElementVNode("text", { class: "wtu-3i3gs6-6 wtu-1pd9yl-7 wtu-aahijk-8" }, ' 演示从功能页调用 App.ku.uvue 全局挂载的 <up-toast ref="uToastRef" />，支持自定义消息、类型与轻提示反馈。 ')
      ]),
      _createElementVNode("view", { class: "wtu-4tpahe-9" }, [
        _createElementVNode("text", { class: "wtu-3i3gs6-6 wtu-b5uul9-a wtu-9szial-b" }, "自定义 Toast 内容"),
        _withDirectives(_createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.customMsg = $event),
            placeholder: "请输入要提示的文字内容",
            class: "wtu-16m9tth-c wtu-19clxu8-d wtu-6x9tj9-e wtu-y4lian-f wtu-33hvuz-3 wtu-4tuys3-4 wtu-f8q5hx-g wtu-1l8aqp8-h wtu-12c53hp-i"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [_vModelText, $setup.customMsg]
        ])
      ]),
      _createElementVNode("view", { class: "wtu-1yca3x4-j wtu-clldfh-k" }, [
        _createElementVNode("view", {
          class: "wtu-bte5oa-l wtu-nw1q8k-m wtu-zsktp1-n wtu-13pz9mv-o wtu-1b6qia0-p wtu-1yca3x4-j wtu-clldfh-k wtu-xpmuf1-q wtu-164irp9-r",
          onClick: $setup.showCustomToast
        }, [
          _createElementVNode("text", { class: "wtu-pubmk8-s wtu-1tbrxcb-t wtu-bj9ji2-u" }, "弹出自定义 Toast")
        ]),
        _createElementVNode("view", {
          class: "wtu-bte5oa-l wtu-zhey3t-v wtu-13pz9mv-o wtu-1b6qia0-p wtu-1yca3x4-j wtu-clldfh-k wtu-xpmuf1-q wtu-164irp9-r",
          onClick: $setup.showSuccessToast
        }, [
          _createElementVNode("text", { class: "wtu-pubmk8-s wtu-1tbrxcb-t wtu-bj9ji2-u" }, "弹出成功 Toast")
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const ToastCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/function/components/ToastCard.uvue"]]);
export {
  ToastCard as T
};
//# sourceMappingURL=ToastCard.js.map
