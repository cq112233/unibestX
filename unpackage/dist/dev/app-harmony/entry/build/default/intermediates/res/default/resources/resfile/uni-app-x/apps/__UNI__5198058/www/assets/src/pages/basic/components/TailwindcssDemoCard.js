import { C as Card } from "./Card.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "TailwindcssDemoCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    function navigateToDemo() {
      uni.navigateTo({
        url: "/src/sub/tailwindcss/tailwindcss",
        fail: (err) => {
          uni.__f__("error", "at src/pages/basic/components/TailwindcssDemoCard.uvue:40", "navigateToDemo fail:", err);
        }
      });
    }
    const __returned__ = { navigateToDemo, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"wtu-10fxz8g-0":{"":{"flexDirection":"column"}},"wtu-n07vof-1":{"":{"marginBottom":16}},"wtu-1swt5i6-2":{"":{"fontSize":13}},"wtu-7ut3h6-3":{"":{"color":"#64748b"}},"wtu-v1603q-4":{"":{"--tw-leading":"18px","lineHeight":"18px"}},"wtu-1k2vr17-5":{"":{"marginBottom":12}},"wtu-1ue8wuu-6":{"":{"flexDirection":"row"}},"wtu-ugr1m2-7":{"":{"alignItems":"center"}},"wtu-8yh2zy-8":{"":{"flexWrap":"wrap"}},"wtu-3xj2e-9":{"":{"marginRight":6}},"wtu-1s0c5bc-a":{"":{"marginBottom":4}},"wtu-1qnaxng-b":{"":{"paddingLeft":10,"paddingRight":10}},"wtu-1smlacz-c":{"":{"paddingTop":3,"paddingBottom":3}},"wtu-s74oky-d":{"":{"borderTopLeftRadius":20,"borderTopRightRadius":20,"borderBottomRightRadius":20,"borderBottomLeftRadius":20}},"wtu-rwf26b-e":{"":{"backgroundColor":"#e0edff"}},"wtu-6u6y64-f":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderRightStyle":"var(--tw-border-style)","borderBottomStyle":"var(--tw-border-style)","borderLeftStyle":"var(--tw-border-style)","borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1}},"wtu-1rjkyp8-g":{"":{"--tw-border-style":"solid","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}},"wtu-9gow7j-h":{"":{"borderTopColor":"#bfdbfe","borderRightColor":"#bfdbfe","borderBottomColor":"#bfdbfe","borderLeftColor":"#bfdbfe"}},"wtu-9ng6ts-i":{"":{"fontSize":11}},"wtu-155roug-j":{"":{"color":"#2563eb"}},"wtu-p1t5tf-k":{"":{"--tw-font-weight":"var(--font-weight-medium, 500)","fontWeight":500}},"wtu-1796l3j-l":{"":{"backgroundColor":"#d1fae5"}},"wtu-173g5br-m":{"":{"borderTopColor":"#a7f3d0","borderRightColor":"#a7f3d0","borderBottomColor":"#a7f3d0","borderLeftColor":"#a7f3d0"}},"wtu-itbynk-n":{"":{"color":"#059669"}},"wtu-1v1k4mz-o":{"":{"backgroundColor":"#fef3c7"}},"wtu-h6hcp8-p":{"":{"borderTopColor":"#fde68a","borderRightColor":"#fde68a","borderBottomColor":"#fde68a","borderLeftColor":"#fde68a"}},"wtu-1cm941u-q":{"":{"color":"#d97706"}},"wtu-1bmc39l-r":{"":{"width":"100%"}},"wtu-1tf82vj-s":{"":{"height":44}},"wtu-12wk9v6-t":{"":{"borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"wtu-13en0gu-u":{"":{"backgroundColor":"#3b82f6"}},"wtu-vx8l1f-v":{"":{"display":"flex"}},"wtu-xicm2m-w":{"":{"justifyContent":"center"}},"wtu-jq9nhf-x":{"":{"color":"#ffffff"}},"wtu-kasb8h-y":{"":{"fontSize":14}},"wtu-1w3ascn-z":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "weapp-tailwindcss Demo" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-10fxz8g-0 wtu-n07vof-1" }, [
        _createElementVNode("text", { class: "wtu-1swt5i6-2 wtu-7ut3h6-3 wtu-v1603q-4 wtu-1k2vr17-5" }, " 项目已接入 Tailwind CSS v4 + weapp-tailwindcss，支持方括号任意值（如 text-[14px]、mt-[12px]）、dark: 暗黑变体与多端平台变体，一套类名全端生效，写法与 Web 端完全一致。 "),
        _createElementVNode("view", { class: "wtu-1ue8wuu-6 wtu-ugr1m2-7 wtu-8yh2zy-8" }, [
          _createElementVNode("view", { class: "wtu-3xj2e-9 wtu-1s0c5bc-a wtu-1qnaxng-b wtu-1smlacz-c wtu-s74oky-d wtu-rwf26b-e wtu-6u6y64-f wtu-1rjkyp8-g wtu-9gow7j-h" }, [
            _createElementVNode("text", { class: "wtu-9ng6ts-i wtu-155roug-j wtu-p1t5tf-k" }, "Tailwind CSS v4")
          ]),
          _createElementVNode("view", { class: "wtu-3xj2e-9 wtu-1s0c5bc-a wtu-1qnaxng-b wtu-1smlacz-c wtu-s74oky-d wtu-1796l3j-l wtu-6u6y64-f wtu-1rjkyp8-g wtu-173g5br-m" }, [
            _createElementVNode("text", { class: "wtu-9ng6ts-i wtu-itbynk-n wtu-p1t5tf-k" }, "方括号任意值")
          ]),
          _createElementVNode("view", { class: "wtu-1s0c5bc-a wtu-1qnaxng-b wtu-1smlacz-c wtu-s74oky-d wtu-1v1k4mz-o wtu-6u6y64-f wtu-1rjkyp8-g wtu-h6hcp8-p" }, [
            _createElementVNode("text", { class: "wtu-9ng6ts-i wtu-1cm941u-q wtu-p1t5tf-k" }, "dark: 暗黑变体")
          ])
        ])
      ]),
      _createElementVNode("view", {
        class: "wtu-1bmc39l-r wtu-1tf82vj-s wtu-12wk9v6-t wtu-13en0gu-u wtu-vx8l1f-v wtu-1ue8wuu-6 wtu-ugr1m2-7 wtu-xicm2m-w",
        onClick: $setup.navigateToDemo
      }, [
        _createElementVNode("text", { class: "wtu-jq9nhf-x wtu-kasb8h-y wtu-1w3ascn-z" }, "进入 weapp-tailwindcss 示例")
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const TailwindcssDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/TailwindcssDemoCard.uvue"]]);
export {
  TailwindcssDemoCard as T
};
//# sourceMappingURL=TailwindcssDemoCard.js.map
