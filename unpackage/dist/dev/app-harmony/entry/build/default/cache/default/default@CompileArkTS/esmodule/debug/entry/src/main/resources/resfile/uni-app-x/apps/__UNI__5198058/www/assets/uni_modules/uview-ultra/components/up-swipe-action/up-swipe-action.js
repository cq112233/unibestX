import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref, provide, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-swipe-action"
  },
  __name: "up-swipe-action",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const props = __props;
    const activeItemId = ref(-1);
    function registerActive(id) {
      if (props.autoClose) {
        activeItemId.value = id;
      }
    }
    provide("upSwipeActionContext", new UTSJSONObject({
      autoClose: props.autoClose,
      activeItemId,
      registerActive
    }));
    const __returned__ = { props, activeItemId, registerActive };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const { renderSlot: _renderSlot, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("view", { class: "up-swipe-action" }, [
    _renderSlot(_ctx.$slots, "default")
  ]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-swipe-action/up-swipe-action.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-swipe-action.js.map
