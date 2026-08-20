import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
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
const _style_0 = {"wtu-13iqdf5-0":{"":{"flexDirection":"column"}},"wtu-1d5cxys-1":{"":{"marginBottom":16}},"wtu-w1o5fx-2":{"":{"fontSize":13}},"wtu-1785dy7-3":{"":{"color":"#64748b"}},"wtu-pfly9v-4":{"":{"--tw-leading":"18px","lineHeight":"18px"}},"wtu-1kr9ink-5":{"":{"marginBottom":12}},"wtu-1q4tojf-6":{"":{"flexDirection":"row"}},"wtu-w5085f-7":{"":{"alignItems":"center"}},"wtu-16me7zd-8":{"":{"backgroundColor":"#f1f5f9"}},"wtu-430mh4-9":{"":{"paddingTop":8,"paddingRight":8,"paddingBottom":8,"paddingLeft":8}},"wtu-19kp62j-a":{"":{"borderTopLeftRadius":6,"borderTopRightRadius":6,"borderBottomRightRadius":6,"borderBottomLeftRadius":6}},"wtu-1ksfa3k-b":{"":{"fontSize":12}},"wtu-1qimyho-c":{"":{"color":"#475569"}},"wtu-4bvek0-d":{"":{"--tw-font-weight":"var(--font-weight-medium, 500)","fontWeight":500}},"wtu-1ltypld-e":{"":{"marginRight":4}},"wtu-ficp91-f":{"":{"color":"#2563eb"}},"wtu-htznmv-g":{"":{"textDecorationLine":"underline"}},"wtu-6q2ecc-h":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"wtu-eqrddv-i":{"":{"fontSize":11}},"wtu-1vmhsdv-j":{"":{"color":"#94a3b8"}},"wtu-mjrjfl-k":{"":{"marginBottom":4}},"wtu-1r3ycv9-l":{"":{"flexWrap":"wrap"}},"wtu-1tb23ev-m":{"":{"marginRight":6}},"wtu-ffxk5r-n":{"":{"paddingLeft":10,"paddingRight":10}},"wtu-loqjyq-o":{"":{"paddingTop":3,"paddingBottom":3}},"wtu-emxvyn-p":{"":{"borderTopLeftRadius":20,"borderTopRightRadius":20,"borderBottomRightRadius":20,"borderBottomLeftRadius":20}},"wtu-4xy5je-q":{"":{"backgroundColor":"#e0edff"}},"wtu-18q4kl-r":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderRightStyle":"var(--tw-border-style)","borderBottomStyle":"var(--tw-border-style)","borderLeftStyle":"var(--tw-border-style)","borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1}},"wtu-1dzl0d5-s":{"":{"--tw-border-style":"solid","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}},"wtu-1gc7zx2-t":{"":{"borderTopColor":"#bfdbfe","borderRightColor":"#bfdbfe","borderBottomColor":"#bfdbfe","borderLeftColor":"#bfdbfe"}},"wtu-1s7ijmi-u":{"":{"backgroundColor":"#d1fae5"}},"wtu-1fh5oba-v":{"":{"borderTopColor":"#a7f3d0","borderRightColor":"#a7f3d0","borderBottomColor":"#a7f3d0","borderLeftColor":"#a7f3d0"}},"wtu-2n85i1-w":{"":{"color":"#059669"}},"wtu-1gfg2fq-x":{"":{"backgroundColor":"#fef3c7"}},"wtu-1y4kgb1-y":{"":{"borderTopColor":"#fde68a","borderRightColor":"#fde68a","borderBottomColor":"#fde68a","borderLeftColor":"#fde68a"}},"wtu-3gfhmb-z":{"":{"color":"#d97706"}},"wtu-1qytvm8-10":{"":{"width":"100%"}},"wtu-15ubny6-11":{"":{"height":44}},"wtu-1g7vkj5-12":{"":{"borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"wtu-y5c8pz-13":{"":{"backgroundColor":"#3b82f6"}},"wtu-23qlii-14":{"":{"display":"flex"}},"wtu-1v0n2r7-15":{"":{"justifyContent":"center"}},"wtu-53w5ye-16":{"":{"color":"#ffffff"}},"wtu-1o11cnm-17":{"":{"fontSize":14}},"wtu-moifc8-18":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"underline":{"":{"textDecorationLine":"underline"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "uview-ultra 组件库" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-13iqdf5-0 wtu-1d5cxys-1" }, [
        _createElementVNode("text", { class: "wtu-w1o5fx-2 wtu-1785dy7-3 wtu-pfly9v-4 wtu-1kr9ink-5" }, " uview-ultra 是一款专为 uni-app X 设计的高品质 UI 组件库，高度适配 UTS 强类型系统与原生跨端开发，包含按钮、表单、反馈等丰富且精美的组件集。 "),
        _createElementVNode("view", {
          class: "wtu-1q4tojf-6 wtu-w5085f-7 wtu-16me7zd-8 wtu-430mh4-9 wtu-19kp62j-a wtu-1kr9ink-5",
          onClick: $setup.copyWebsiteUrl
        }, [
          _createElementVNode("text", { class: "wtu-1ksfa3k-b wtu-1qimyho-c wtu-4bvek0-d wtu-1ltypld-e" }, "官网："),
          _createElementVNode("text", { class: "wtu-1ksfa3k-b wtu-ficp91-f wtu-htznmv-g wtu-6q2ecc-h" }, "https://uview-ultra.lingyun.net/"),
          _createElementVNode("text", { class: "wtu-eqrddv-i wtu-1vmhsdv-j" }, "点击复制")
        ]),
        _createElementVNode("view", { class: "wtu-1q4tojf-6 wtu-w5085f-7 wtu-mjrjfl-k wtu-1r3ycv9-l" }, [
          _createElementVNode("view", { class: "wtu-1tb23ev-m wtu-mjrjfl-k wtu-ffxk5r-n wtu-loqjyq-o wtu-emxvyn-p wtu-4xy5je-q wtu-18q4kl-r wtu-1dzl0d5-s wtu-1gc7zx2-t" }, [
            _createElementVNode("text", { class: "wtu-eqrddv-i wtu-ficp91-f wtu-4bvek0-d" }, "高品质组件")
          ]),
          _createElementVNode("view", { class: "wtu-1tb23ev-m wtu-mjrjfl-k wtu-ffxk5r-n wtu-loqjyq-o wtu-emxvyn-p wtu-1s7ijmi-u wtu-18q4kl-r wtu-1dzl0d5-s wtu-1fh5oba-v" }, [
            _createElementVNode("text", { class: "wtu-eqrddv-i wtu-2n85i1-w wtu-4bvek0-d" }, "原生 UTS 支持")
          ]),
          _createElementVNode("view", { class: "wtu-mjrjfl-k wtu-ffxk5r-n wtu-loqjyq-o wtu-emxvyn-p wtu-1gfg2fq-x wtu-18q4kl-r wtu-1dzl0d5-s wtu-1y4kgb1-y" }, [
            _createElementVNode("text", { class: "wtu-eqrddv-i wtu-3gfhmb-z wtu-4bvek0-d" }, "跨端一致性")
          ])
        ])
      ]),
      _createElementVNode("view", {
        class: "wtu-1qytvm8-10 wtu-15ubny6-11 wtu-1g7vkj5-12 wtu-y5c8pz-13 wtu-23qlii-14 wtu-1q4tojf-6 wtu-w5085f-7 wtu-1v0n2r7-15",
        onClick: $setup.navigateToShowcase
      }, [
        _createElementVNode("text", { class: "wtu-53w5ye-16 wtu-1o11cnm-17 wtu-moifc8-18" }, "进入 uview-ultra 示例")
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
