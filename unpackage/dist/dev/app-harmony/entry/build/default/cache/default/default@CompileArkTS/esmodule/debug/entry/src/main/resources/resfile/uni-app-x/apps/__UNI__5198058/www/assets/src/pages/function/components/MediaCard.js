import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
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
const _style_0 = {"wtu-q8b8gq-0":{"":{"alignItems":"center"}},"wtu-b9ro1a-1":{"":{"justifyContent":"center"}},"wtu-1s564xi-2":{"":{"color":"#94a3b8"}},"wtu-2xyrg9-3":{"":{"width":"100%"}},"wtu-1y0ezim-4":{"":{"backgroundColor":"#3b82f6"}},"wtu-y8rs9f-5":{"":{"display":"flex"}},"wtu-kkkwyu-6":{"":{"flexDirection":"row"}},"wtu-1ra95rn-7":{"":{"color":"#ffffff"}},"wtu-qeuvjr-8":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-1j4877a-9":{"":{"color":"#334155"}},"wtu-yibfla-a":{"":{"backgroundColor":"#10b981"}},"flex":{"":{"display":"flex"}}};
const { openBlock: _openBlock, createElementBlock: _createElementBlock, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, withCtx: _withCtx, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "相机与多媒体" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0] wtu-q8b8gq-0 wtu-b9ro1a-1" }, [
        $setup.photoUrl === "" ? (_openBlock(), _createElementBlock("text", {
          key: 0,
          class: "text-14px wtu-1s564xi-2"
        }, "未选择照片")) : (_openBlock(), _createElementBlock("image", {
          key: 1,
          src: $setup.photoUrl,
          class: "w-150px h-150px rounded-8px",
          mode: "aspectFill"
        }, null, 8, ["src"]))
      ]),
      _createElementVNode("view", {
        class: "wtu-2xyrg9-3 h-44px rounded-8px wtu-1y0ezim-4 mb-12px wtu-y8rs9f-5 wtu-kkkwyu-6 wtu-q8b8gq-0 wtu-b9ro1a-1",
        onClick: $setup.chooseImage
      }, [
        _createElementVNode("text", { class: "wtu-1ra95rn-7 text-14px wtu-qeuvjr-8" }, "拍摄/选择照片")
      ]),
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("text", { class: "text-12px wtu-1s564xi-2 mb-8px" }, "扫码结果"),
        _createElementVNode(
          "text",
          { class: "text-14px wtu-qeuvjr-8 wtu-1j4877a-9" },
          _toDisplayString($setup.scanResult !== "" ? $setup.scanResult : "暂无数据"),
          1
          /* TEXT */
        )
      ]),
      _createElementVNode("view", {
        class: "wtu-2xyrg9-3 h-44px rounded-8px wtu-yibfla-a wtu-y8rs9f-5 wtu-kkkwyu-6 wtu-q8b8gq-0 wtu-b9ro1a-1",
        onClick: $setup.scanCode
      }, [
        _createElementVNode("text", { class: "wtu-1ra95rn-7 text-14px wtu-qeuvjr-8" }, "扫码测试")
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
