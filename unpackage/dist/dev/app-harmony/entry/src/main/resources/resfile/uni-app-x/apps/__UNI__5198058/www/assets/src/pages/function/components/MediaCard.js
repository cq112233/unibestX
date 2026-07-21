import { _ as __easycom_0 } from "../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
const { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, withCtx, createElementVNode, createElementBlock, createVNode, createTextVNode, createCommentVNode, toDisplayString } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { C as Card } from "../../basic/components/Card.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
const _style_0 = { "bg-__10b981_": { "": { "backgroundImage": "none", "backgroundColor": "#10b981" } }, "bg-__3b82f6_": { "": { "backgroundImage": "none", "backgroundColor": "#3b82f6" } }, "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "border-color-__e2e8f0_": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex": { "": { "display": "flex" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "h-150px": { "": { "height": 150 } }, "h-44px": { "": { "height": 44 } }, "items-center": { "": { "alignItems": "center" } }, "justify-center": { "": { "justifyContent": "center" } }, "mb-12px": { "": { "marginBottom": 12 } }, "mb-16px": { "": { "marginBottom": 16 } }, "mb-8px": { "": { "marginBottom": 8 } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "text-__334155_": { "": { "color": "#334155" } }, "text-__94a3b8_": { "": { "color": "#94a3b8" } }, "text-__ffffff_": { "": { "color": "#ffffff" } }, "text-12px": { "": { "fontSize": 12 } }, "text-14px": { "": { "fontSize": 14 } }, "w-150px": { "": { "width": 150 } }, "w-full": { "": { "width": "100%" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_button = resolveEasycom(resolveDynamicComponent("up-button"), __easycom_0);
  return openBlock(), createBlock($setup["Card"], { title: "相机与多媒体" }, {
    default: withCtx(() => [
      createElementVNode("view", { class: "bg-__f8fafc_ rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_ items-center justify-center" }, [
        $setup.photoUrl === "" ? (openBlock(), createElementBlock("text", {
          key: 0,
          class: "text-14px text-__94a3b8_"
        }, "未选择照片")) : (openBlock(), createElementBlock("image", {
          key: 1,
          src: $setup.photoUrl,
          class: "w-150px h-150px rounded-8px",
          mode: "aspectFill"
        }, null, 8, ["src"]))
      ]),
      createVNode(_component_up_button, {
        type: "primary",
        class: "mb-12px",
        onClick: $setup.chooseImage
      }, {
        default: withCtx(() => [
          createTextVNode(" 拍摄/选择照片 ")
        ]),
        _: 1
        /* STABLE */
      }),
      createCommentVNode(" 扫码测试 "),
      createElementVNode("view", { class: "bg-__f8fafc_ rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        createElementVNode("text", { class: "text-12px text-__94a3b8_ mb-8px" }, "扫码结果"),
        createElementVNode(
          "text",
          { class: "text-14px font-bold text-__334155_" },
          toDisplayString($setup.scanResult !== "" ? $setup.scanResult : "暂无数据"),
          1
          /* TEXT */
        )
      ]),
      createVNode(_component_up_button, {
        type: "success",
        onClick: $setup.scanCode
      }, {
        default: withCtx(() => [
          createTextVNode(" 扫码测试 ")
        ]),
        _: 1
        /* STABLE */
      })
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
