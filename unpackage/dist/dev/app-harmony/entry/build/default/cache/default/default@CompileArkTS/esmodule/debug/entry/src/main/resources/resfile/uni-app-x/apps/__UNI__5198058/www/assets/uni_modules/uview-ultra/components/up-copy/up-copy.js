const { defineComponent, openBlock, createElementBlock, renderSlot, createTextVNode } = globalThis.Vue
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "up-copy",
  props: {
    content: { type: [String, null], required: false, default: null },
    alertStyle: { type: [String, null], required: false, default: null },
    notice: { type: [String, null], required: false, default: null }
  },
  emits: ["success"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const handleClick = () => {
      let content = props.content;
      if (content == null || content.length == 0) {
        uni.showToast({
          title: "暂无",
          icon: "none",
          duration: 2e3
        });
        return null;
      }
      content = typeof content === "string" ? content : content.toString();
      uni.setClipboardData({
        data: content,
        success: function() {
          const alertStyle = props.alertStyle == null ? "toast" : props.alertStyle;
          const notice = props.notice == null ? "复制成功" : props.notice;
          if (alertStyle == "modal") {
            uni.showModal(new UTSJSONObject({
              title: "提示",
              content: notice
            }));
          } else {
            uni.showToast({
              title: notice,
              icon: "none"
            });
          }
          emit("success");
        },
        fail: function() {
          uni.showToast({
            title: "复制失败",
            icon: "none",
            duration: 3e3
          });
        }
      });
    };
    const __returned__ = { props, emit, handleClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "up-copy",
    onClick: $setup.handleClick
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createTextVNode("复制")
    ])
  ]);
}
const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-copy/up-copy.uvue"]]);
export {
  __easycom_4 as _
};
//# sourceMappingURL=up-copy.js.map
