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
const _style_0 = {"wtu-1bttlw5-0":{"":{"borderTopLeftRadius":12,"borderTopRightRadius":12,"borderBottomRightRadius":12,"borderBottomLeftRadius":12}},"wtu-1uxb1kq-1":{"":{"paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16}},"wtu-16etgk3-2":{"":{"marginBottom":16}},"wtu-ghwkpc-3":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderRightStyle":"var(--tw-border-style)","borderBottomStyle":"var(--tw-border-style)","borderLeftStyle":"var(--tw-border-style)","borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1}},"wtu-u4o9tc-4":{"":{"--tw-border-style":"solid","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}},"wtu-gs0gzi-5":{"":{"borderTopColor":"#e2e8f0","borderRightColor":"#e2e8f0","borderBottomColor":"#e2e8f0","borderLeftColor":"#e2e8f0"}},"wtu-17lkbu7-6":{"":{"fontSize":12}},"wtu-q8b26m-7":{"":{"color":"#64748b"}},"wtu-h2u4nj-8":{"":{"--tw-leading":"20px","lineHeight":"20px"}},"wtu-1vpegqf-9":{"":{"display":"flex"}},"wtu-1ate7qk-a":{"":{"flexDirection":"column"}},"wtu-6fefs2-b":{"":{"flexDirection":"row"}},"wtu-1z0mo75-c":{"":{"marginBottom":10}},"wtu-19zbq4t-d":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"wtu-109salt-e":{"":{"marginRight":10}},"wtu-1d2a3bm-f":{"":{"backgroundColor":"#3b82f6"}},"wtu-7qumcm-g":{"":{"borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"wtu-n1y8nz-h":{"":{"height":40}},"wtu-veardi-i":{"":{"alignItems":"center"}},"wtu-1b7vdei-j":{"":{"justifyContent":"center"}},"wtu-yniy87-k":{"":{"color":"#ffffff"}},"wtu-19sabru-l":{"":{"fontSize":13}},"wtu-1lwcb0b-m":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-h4bkhu-n":{"":{"backgroundColor":"#10b981"}},"wtu-kqvbsq-o":{"":{"backgroundColor":"#ef4444"}},"wtu-1hkdjp8-p":{"":{"backgroundColor":"#f59e0b"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "全局 Toast 轻提示" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-1bttlw5-0 wtu-1uxb1kq-1 wtu-16etgk3-2 wtu-ghwkpc-3 wtu-u4o9tc-4 wtu-gs0gzi-5" }, [
        _createElementVNode("text", { class: "wtu-17lkbu7-6 wtu-q8b26m-7 wtu-h2u4nj-8" }, " 通过 App.ku.uvue 全局挂载的 <up-toast />，直接导入 @/src/utils/toast 即可在任意页面与逻辑中唤起轻提示。 ")
      ]),
      _createElementVNode("view", { class: "wtu-1vpegqf-9 wtu-1ate7qk-a" }, [
        _createElementVNode("view", { class: "wtu-1vpegqf-9 wtu-6fefs2-b wtu-1z0mo75-c" }, [
          _createElementVNode("view", {
            class: "wtu-19zbq4t-d wtu-109salt-e wtu-1d2a3bm-f wtu-7qumcm-g wtu-n1y8nz-h wtu-1vpegqf-9 wtu-6fefs2-b wtu-veardi-i wtu-1b7vdei-j",
            onClick: $setup.handleDefaultToast
          }, [
            _createElementVNode("text", { class: "wtu-yniy87-k wtu-19sabru-l wtu-1lwcb0b-m" }, "默认 Toast")
          ]),
          _createElementVNode("view", {
            class: "wtu-19zbq4t-d wtu-h4bkhu-n wtu-7qumcm-g wtu-n1y8nz-h wtu-1vpegqf-9 wtu-6fefs2-b wtu-veardi-i wtu-1b7vdei-j",
            onClick: $setup.handleSuccessToast
          }, [
            _createElementVNode("text", { class: "wtu-yniy87-k wtu-19sabru-l wtu-1lwcb0b-m" }, "成功 Toast")
          ])
        ]),
        _createElementVNode("view", { class: "wtu-1vpegqf-9 wtu-6fefs2-b" }, [
          _createElementVNode("view", {
            class: "wtu-19zbq4t-d wtu-109salt-e wtu-kqvbsq-o wtu-7qumcm-g wtu-n1y8nz-h wtu-1vpegqf-9 wtu-6fefs2-b wtu-veardi-i wtu-1b7vdei-j",
            onClick: $setup.handleErrorToast
          }, [
            _createElementVNode("text", { class: "wtu-yniy87-k wtu-19sabru-l wtu-1lwcb0b-m" }, "错误 Toast")
          ]),
          _createElementVNode("view", {
            class: "wtu-19zbq4t-d wtu-1hkdjp8-p wtu-7qumcm-g wtu-n1y8nz-h wtu-1vpegqf-9 wtu-6fefs2-b wtu-veardi-i wtu-1b7vdei-j",
            onClick: $setup.handleWarningToast
          }, [
            _createElementVNode("text", { class: "wtu-yniy87-k wtu-19sabru-l wtu-1lwcb0b-m" }, "警告 Toast")
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
