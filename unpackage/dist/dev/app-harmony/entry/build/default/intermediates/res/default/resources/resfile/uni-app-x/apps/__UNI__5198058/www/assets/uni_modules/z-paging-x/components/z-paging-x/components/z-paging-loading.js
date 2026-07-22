const { defineComponent, ref, onMounted, nextTick, openBlock, createElementBlock } = globalThis.Vue
import { c as base64Flower } from "../static/index.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "z-paging-loading",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const times = ref(0);
    const element = ref(null);
    const base64FlowerImg = ref(base64Flower);
    const doRotate = () => {
      if (element.value !== null) {
        times.value = times.value + 1;
        element.value.style.setProperty("transform", "rotate(" + times.value * 360 + "deg)");
        element.value.style.setProperty("transition-duration", "1000ms");
      }
    };
    onMounted(() => {
      nextTick(() => {
        setTimeout(() => {
          element.value = uni.getElementById("z-paging-loading-img");
          doRotate();
        }, 10);
      });
    });
    const __returned__ = { times, element, base64FlowerImg, doRotate };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "zpx-loading-img": { "": { "width": "34rpx", "height": "34rpx", "transitionDuration": "2000ms", "transitionProperty": "transform", "transitionTimingFunction": "linear", "transform": "rotate(0deg)" } }, "@TRANSITION": { "zpx-loading-img": { "duration": "2000ms", "property": "transform", "timingFunction": "linear" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("image", {
    class: "zpx-loading-img",
    id: "z-paging-loading-img",
    src: $setup.base64FlowerImg,
    onTransitionend: $setup.doRotate
  }, null, 40, ["src"]);
}
const zPagingLoading = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/z-paging-x/components/z-paging-x/components/z-paging-loading.uvue"]]);
export {
  zPagingLoading as z
};
//# sourceMappingURL=z-paging-loading.js.map
