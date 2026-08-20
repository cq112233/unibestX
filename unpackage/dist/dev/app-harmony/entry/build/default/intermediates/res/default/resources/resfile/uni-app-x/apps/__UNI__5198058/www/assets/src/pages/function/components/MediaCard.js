import { C as Card } from "../../basic/components/Card.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "MediaCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const photoUrl = ref("");
    const scanResult = ref("");
    function chooseImage() {
      uni.chooseImage(new UTSJSONObject({
        count: 1,
        success: (res) => {
          const paths = res.tempFilePaths;
          if (paths.length > 0) {
            photoUrl.value = paths[0];
          }
        },
        fail: (err) => {
          uni.__f__("error", "at src/pages/function/components/MediaCard.uvue:39", err);
        }
      }));
    }
    function scanCode() {
      uni.scanCode(new UTSJSONObject({
        success: (res) => {
          scanResult.value = res.result;
        },
        fail: (err) => {
          uni.__f__("error", "at src/pages/function/components/MediaCard.uvue:50", err);
        }
      }));
    }
    const __returned__ = { photoUrl, scanResult, chooseImage, scanCode, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"wtu-19w2j55-0":{"":{"borderTopLeftRadius":12,"borderTopRightRadius":12,"borderBottomRightRadius":12,"borderBottomLeftRadius":12}},"wtu-vj37ae-1":{"":{"paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16}},"wtu-iq02sv-2":{"":{"marginBottom":16}},"wtu-1ohql58-3":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderRightStyle":"var(--tw-border-style)","borderBottomStyle":"var(--tw-border-style)","borderLeftStyle":"var(--tw-border-style)","borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1}},"wtu-pa6ipo-4":{"":{"--tw-border-style":"solid","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}},"wtu-tlxzxu-5":{"":{"borderTopColor":"#e2e8f0","borderRightColor":"#e2e8f0","borderBottomColor":"#e2e8f0","borderLeftColor":"#e2e8f0"}},"wtu-q8b8gq-6":{"":{"alignItems":"center"}},"wtu-b9ro1a-7":{"":{"justifyContent":"center"}},"wtu-1q5m829-8":{"":{"fontSize":14}},"wtu-1s564xi-9":{"":{"color":"#94a3b8"}},"wtu-p8f9m4-a":{"":{"width":150}},"wtu-13oewch-b":{"":{"height":150}},"wtu-6cklr6-c":{"":{"borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"wtu-2xyrg9-d":{"":{"width":"100%"}},"wtu-1e3977j-e":{"":{"height":44}},"wtu-1y0ezim-f":{"":{"backgroundColor":"#3b82f6"}},"wtu-xcm8yz-g":{"":{"marginBottom":12}},"wtu-y8rs9f-h":{"":{"display":"flex"}},"wtu-kkkwyu-i":{"":{"flexDirection":"row"}},"wtu-1ra95rn-j":{"":{"color":"#ffffff"}},"wtu-qeuvjr-k":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-18z544j-l":{"":{"fontSize":12}},"wtu-1ek978k-m":{"":{"marginBottom":8}},"wtu-1j4877a-n":{"":{"color":"#334155"}},"wtu-yibfla-o":{"":{"backgroundColor":"#10b981"}},"flex":{"":{"display":"flex"}}};
const { openBlock: _openBlock, createElementBlock: _createElementBlock, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, withCtx: _withCtx, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "相机与多媒体" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-19w2j55-0 wtu-vj37ae-1 wtu-iq02sv-2 wtu-1ohql58-3 wtu-pa6ipo-4 wtu-tlxzxu-5 wtu-q8b8gq-6 wtu-b9ro1a-7" }, [
        $setup.photoUrl === "" ? (_openBlock(), _createElementBlock("text", {
          key: 0,
          class: "wtu-1q5m829-8 wtu-1s564xi-9"
        }, "未选择照片")) : (_openBlock(), _createElementBlock("image", {
          key: 1,
          src: $setup.photoUrl,
          class: "wtu-p8f9m4-a wtu-13oewch-b wtu-6cklr6-c",
          mode: "aspectFill"
        }, null, 8, ["src"]))
      ]),
      _createElementVNode("view", {
        class: "wtu-2xyrg9-d wtu-1e3977j-e wtu-6cklr6-c wtu-1y0ezim-f wtu-xcm8yz-g wtu-y8rs9f-h wtu-kkkwyu-i wtu-q8b8gq-6 wtu-b9ro1a-7",
        onClick: $setup.chooseImage
      }, [
        _createElementVNode("text", { class: "wtu-1ra95rn-j wtu-1q5m829-8 wtu-qeuvjr-k" }, "拍摄/选择照片")
      ]),
      _createElementVNode("view", { class: "wtu-19w2j55-0 wtu-vj37ae-1 wtu-iq02sv-2 wtu-1ohql58-3 wtu-pa6ipo-4 wtu-tlxzxu-5" }, [
        _createElementVNode("text", { class: "wtu-18z544j-l wtu-1s564xi-9 wtu-1ek978k-m" }, "扫码结果"),
        _createElementVNode(
          "text",
          { class: "wtu-1q5m829-8 wtu-qeuvjr-k wtu-1j4877a-n" },
          _toDisplayString($setup.scanResult !== "" ? $setup.scanResult : "暂无数据"),
          1
          /* TEXT */
        )
      ]),
      _createElementVNode("view", {
        class: "wtu-2xyrg9-d wtu-1e3977j-e wtu-6cklr6-c wtu-yibfla-o wtu-y8rs9f-h wtu-kkkwyu-i wtu-q8b8gq-6 wtu-b9ro1a-7",
        onClick: $setup.scanCode
      }, [
        _createElementVNode("text", { class: "wtu-1ra95rn-j wtu-1q5m829-8 wtu-qeuvjr-k" }, "扫码测试")
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const MediaCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/function/components/MediaCard.uvue"]]);
export {
  MediaCard as M
};
//# sourceMappingURL=MediaCard.js.map
