import { C as Card } from "./Card.js";
import { t as toast, a as toastSuccess, b as toastError, c as toastWarning } from "../../../utils/toast.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "ToastDemoCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    function handleDefaultToast() {
      toast("这是一条通过 App.ku 全局组件触发的轻提示");
    }
    function handleSuccessToast() {
      toastSuccess("恭喜！全局 Toast 触发成功");
    }
    function handleErrorToast() {
      toastError("操作异常，全局 Toast 报错提示");
    }
    function handleWarningToast() {
      toastWarning("注意：这是一条全局警告轻提示");
    }
    const __returned__ = { handleDefaultToast, handleSuccessToast, handleErrorToast, handleWarningToast, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"wtu-q8b26m-0":{"":{"color":"#64748b"}},"wtu-1vpegqf-1":{"":{"display":"flex"}},"wtu-1ate7qk-2":{"":{"flexDirection":"column"}},"wtu-6fefs2-3":{"":{"flexDirection":"row"}},"wtu-19zbq4t-4":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"wtu-1d2a3bm-5":{"":{"backgroundColor":"#3b82f6"}},"wtu-veardi-6":{"":{"alignItems":"center"}},"wtu-1b7vdei-7":{"":{"justifyContent":"center"}},"wtu-yniy87-8":{"":{"color":"#ffffff"}},"wtu-1lwcb0b-9":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-h4bkhu-a":{"":{"backgroundColor":"#10b981"}},"wtu-kqvbsq-b":{"":{"backgroundColor":"#ef4444"}},"wtu-1hkdjp8-c":{"":{"backgroundColor":"#f59e0b"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "全局 Toast 轻提示" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("text", { class: "text-12px wtu-q8b26m-0 leading-20px" }, " 通过 App.ku.uvue 全局挂载的 <up-toast />，直接导入 @/src/utils/toast 即可在任意页面与逻辑中唤起轻提示。 ")
      ]),
      _createElementVNode("view", { class: "wtu-1vpegqf-1 wtu-1ate7qk-2" }, [
        _createElementVNode("view", { class: "wtu-1vpegqf-1 wtu-6fefs2-3 mb-10px" }, [
          _createElementVNode("view", {
            class: "wtu-19zbq4t-4 mr-10px wtu-1d2a3bm-5 rounded-8px h-40px wtu-1vpegqf-1 wtu-6fefs2-3 wtu-veardi-6 wtu-1b7vdei-7",
            onClick: $setup.handleDefaultToast
          }, [
            _createElementVNode("text", { class: "wtu-yniy87-8 text-13px wtu-1lwcb0b-9" }, "默认 Toast")
          ]),
          _createElementVNode("view", {
            class: "wtu-19zbq4t-4 wtu-h4bkhu-a rounded-8px h-40px wtu-1vpegqf-1 wtu-6fefs2-3 wtu-veardi-6 wtu-1b7vdei-7",
            onClick: $setup.handleSuccessToast
          }, [
            _createElementVNode("text", { class: "wtu-yniy87-8 text-13px wtu-1lwcb0b-9" }, "成功 Toast")
          ])
        ]),
        _createElementVNode("view", { class: "wtu-1vpegqf-1 wtu-6fefs2-3" }, [
          _createElementVNode("view", {
            class: "wtu-19zbq4t-4 mr-10px wtu-kqvbsq-b rounded-8px h-40px wtu-1vpegqf-1 wtu-6fefs2-3 wtu-veardi-6 wtu-1b7vdei-7",
            onClick: $setup.handleErrorToast
          }, [
            _createElementVNode("text", { class: "wtu-yniy87-8 text-13px wtu-1lwcb0b-9" }, "错误 Toast")
          ]),
          _createElementVNode("view", {
            class: "wtu-19zbq4t-4 wtu-1hkdjp8-c rounded-8px h-40px wtu-1vpegqf-1 wtu-6fefs2-3 wtu-veardi-6 wtu-1b7vdei-7",
            onClick: $setup.handleWarningToast
          }, [
            _createElementVNode("text", { class: "wtu-yniy87-8 text-13px wtu-1lwcb0b-9" }, "警告 Toast")
          ])
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const ToastDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/ToastDemoCard.uvue"]]);
export {
  ToastDemoCard as T
};
//# sourceMappingURL=ToastDemoCard.js.map
