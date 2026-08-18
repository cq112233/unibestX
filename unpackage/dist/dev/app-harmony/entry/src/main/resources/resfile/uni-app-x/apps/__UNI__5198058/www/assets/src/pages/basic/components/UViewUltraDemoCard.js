import { C as Card } from "./Card.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "UViewUltraDemoCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    function copyWebsiteUrl() {
      uni.setClipboardData({
        data: "https://uview-ultra.lingyun.net/",
        success: () => {
          uni.showToast({
            title: "官网网址已复制到剪贴板",
            icon: "none"
          });
        }
      });
    }
    function navigateToShowcase() {
      uni.navigateTo({
        url: "/src/sub/uview-ultra/uview-ultra",
        fail: (err) => {
          uni.__f__("error", "at src/pages/basic/components/UViewUltraDemoCard.uvue:58", "navigateToShowcase fail:", err);
        }
      });
    }
    const __returned__ = { copyWebsiteUrl, navigateToShowcase, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"wtu-13iqdf5-0":{"":{"flexDirection":"column"}},"wtu-1785dy7-1":{"":{"color":"#64748b"}},"wtu-1q4tojf-2":{"":{"flexDirection":"row"}},"wtu-w5085f-3":{"":{"alignItems":"center"}},"wtu-16me7zd-4":{"":{"backgroundColor":"#f1f5f9"}},"wtu-1qimyho-5":{"":{"color":"#475569"}},"wtu-4bvek0-6":{"":{"--tw-font-weight":"var(--font-weight-medium, 500)","fontWeight":500}},"wtu-ficp91-7":{"":{"color":"#2563eb"}},"wtu-htznmv-8":{"":{"textDecorationLine":"underline"}},"wtu-6q2ecc-9":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"wtu-1vmhsdv-a":{"":{"color":"#94a3b8"}},"wtu-1r3ycv9-b":{"":{"flexWrap":"wrap"}},"wtu-4xy5je-c":{"":{"backgroundColor":"#e0edff"}},"wtu-1s7ijmi-d":{"":{"backgroundColor":"#d1fae5"}},"wtu-2n85i1-e":{"":{"color":"#059669"}},"wtu-1gfg2fq-f":{"":{"backgroundColor":"#fef3c7"}},"wtu-3gfhmb-g":{"":{"color":"#d97706"}},"wtu-1qytvm8-h":{"":{"width":"100%"}},"wtu-y5c8pz-i":{"":{"backgroundColor":"#3b82f6"}},"wtu-23qlii-j":{"":{"display":"flex"}},"wtu-1v0n2r7-k":{"":{"justifyContent":"center"}},"wtu-53w5ye-l":{"":{"color":"#ffffff"}},"wtu-moifc8-m":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"underline":{"":{"textDecorationLine":"underline"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "uview-ultra 组件库" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-13iqdf5-0 mb-16px" }, [
        _createElementVNode("text", { class: "text-13px wtu-1785dy7-1 leading-18px mb-12px" }, " uview-ultra 是一款专为 uni-app X 设计的高品质 UI 组件库，高度适配 UTS 强类型系统与原生跨端开发，包含按钮、表单、反馈等丰富且精美的组件集。 "),
        _createElementVNode("view", {
          class: "wtu-1q4tojf-2 wtu-w5085f-3 wtu-16me7zd-4 p-8px rounded-6px mb-12px",
          onClick: $setup.copyWebsiteUrl
        }, [
          _createElementVNode("text", { class: "text-12px wtu-1qimyho-5 wtu-4bvek0-6 mr-4px" }, "官网："),
          _createElementVNode("text", { class: "text-12px wtu-ficp91-7 wtu-htznmv-8 wtu-6q2ecc-9" }, "https://uview-ultra.lingyun.net/"),
          _createElementVNode("text", { class: "text-11px wtu-1vmhsdv-a" }, "点击复制")
        ]),
        _createElementVNode("view", { class: "wtu-1q4tojf-2 wtu-w5085f-3 mb-4px wtu-1r3ycv9-b" }, [
          _createElementVNode("view", { class: "mr-6px mb-4px px-10px py-3px rounded-20px wtu-4xy5je-c border-width-1px border-style-solid border-color-[#bfdbfe]" }, [
            _createElementVNode("text", { class: "text-11px wtu-ficp91-7 wtu-4bvek0-6" }, "高品质组件")
          ]),
          _createElementVNode("view", { class: "mr-6px mb-4px px-10px py-3px rounded-20px wtu-1s7ijmi-d border-width-1px border-style-solid border-color-[#a7f3d0]" }, [
            _createElementVNode("text", { class: "text-11px wtu-2n85i1-e wtu-4bvek0-6" }, "原生 UTS 支持")
          ]),
          _createElementVNode("view", { class: "mb-4px px-10px py-3px rounded-20px wtu-1gfg2fq-f border-width-1px border-style-solid border-color-[#fde68a]" }, [
            _createElementVNode("text", { class: "text-11px wtu-3gfhmb-g wtu-4bvek0-6" }, "跨端一致性")
          ])
        ])
      ]),
      _createElementVNode("view", {
        class: "wtu-1qytvm8-h h-44px rounded-8px wtu-y5c8pz-i wtu-23qlii-j wtu-1q4tojf-2 wtu-w5085f-3 wtu-1v0n2r7-k",
        onClick: $setup.navigateToShowcase
      }, [
        _createElementVNode("text", { class: "wtu-53w5ye-l text-14px wtu-moifc8-m" }, "进入 uview-ultra 示例")
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const UViewUltraDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/UViewUltraDemoCard.uvue"]]);
export {
  UViewUltraDemoCard as U
};
//# sourceMappingURL=UViewUltraDemoCard.js.map
