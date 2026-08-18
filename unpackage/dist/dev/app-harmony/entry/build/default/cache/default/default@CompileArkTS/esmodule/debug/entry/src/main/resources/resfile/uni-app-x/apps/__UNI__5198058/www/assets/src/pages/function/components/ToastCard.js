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
const _style_0 = {"wtu-1pd9yl-0":{"":{"color":"#64748b"}},"wtu-b5uul9-1":{"":{"color":"#94a3b8"}},"wtu-19clxu8-2":{"":{"backgroundColor":"#ffffff"}},"wtu-12c53hp-3":{"":{"color":"#334155"}},"wtu-1yca3x4-4":{"":{"display":"flex"}},"wtu-clldfh-5":{"":{"flexDirection":"row"}},"wtu-bte5oa-6":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"wtu-zsktp1-7":{"":{"backgroundColor":"#3b82f6"}},"wtu-xpmuf1-8":{"":{"alignItems":"center"}},"wtu-164irp9-9":{"":{"justifyContent":"center"}},"wtu-pubmk8-a":{"":{"color":"#ffffff"}},"wtu-bj9ji2-b":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-zhey3t-c":{"":{"backgroundColor":"#10b981"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, vModelText: _vModelText, withDirectives: _withDirectives, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "全局 Toast 提示调用" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("text", { class: "text-12px wtu-1pd9yl-0 leading-20px" }, ' 演示从功能页调用 App.ku.uvue 全局挂载的 <up-toast ref="uToastRef" />，支持自定义消息、类型与轻提示反馈。 ')
      ]),
      _createElementVNode("view", { class: "mb-12px" }, [
        _createElementVNode("text", { class: "text-12px wtu-b5uul9-1 mb-6px" }, "自定义 Toast 内容"),
        _withDirectives(_createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.customMsg = $event),
            placeholder: "请输入要提示的文字内容",
            class: "h-38px wtu-19clxu8-2 rounded-6px px-12px border-width-1px border-style-solid border-color-[#cbd5e1] text-14px wtu-12c53hp-3"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [_vModelText, $setup.customMsg]
        ])
      ]),
      _createElementVNode("view", { class: "wtu-1yca3x4-4 wtu-clldfh-5" }, [
        _createElementVNode("view", {
          class: "wtu-bte5oa-6 mr-10px wtu-zsktp1-7 rounded-8px h-40px wtu-1yca3x4-4 wtu-clldfh-5 wtu-xpmuf1-8 wtu-164irp9-9",
          onClick: $setup.showCustomToast
        }, [
          _createElementVNode("text", { class: "wtu-pubmk8-a text-13px wtu-bj9ji2-b" }, "弹出自定义 Toast")
        ]),
        _createElementVNode("view", {
          class: "wtu-bte5oa-6 wtu-zhey3t-c rounded-8px h-40px wtu-1yca3x4-4 wtu-clldfh-5 wtu-xpmuf1-8 wtu-164irp9-9",
          onClick: $setup.showSuccessToast
        }, [
          _createElementVNode("text", { class: "wtu-pubmk8-a text-13px wtu-bj9ji2-b" }, "弹出成功 Toast")
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
