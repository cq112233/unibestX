const { defineComponent, openBlock, createBlock, withCtx, createElementVNode, createCommentVNode } = globalThis.Vue
import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UViewUltraDemoCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    let isNavigating = false;
    function navigateToShowcase() {
      if (isNavigating) {
        return null;
      }
      isNavigating = true;
      uni.navigateTo({
        url: "/src/sub/uview-ultra/uview-ultra",
        complete: () => {
          setTimeout(() => {
            isNavigating = false;
          }, 500);
        }
      });
    }
    const __returned__ = { get isNavigating() {
      return isNavigating;
    }, set isNavigating(v) {
      isNavigating = v;
    }, navigateToShowcase, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__3b82f6_": { "": { "backgroundImage": "none", "backgroundColor": "#3b82f6" } }, "bg-__d1fae5_": { "": { "backgroundImage": "none", "backgroundColor": "#d1fae5" } }, "bg-__e0edff_": { "": { "backgroundImage": "none", "backgroundColor": "#e0edff" } }, "bg-__fef3c7_": { "": { "backgroundImage": "none", "backgroundColor": "#fef3c7" } }, "border-color-__a7f3d0_": { "": { "borderTopColor": "#a7f3d0", "borderRightColor": "#a7f3d0", "borderBottomColor": "#a7f3d0", "borderLeftColor": "#a7f3d0" } }, "border-color-__bfdbfe_": { "": { "borderTopColor": "#bfdbfe", "borderRightColor": "#bfdbfe", "borderBottomColor": "#bfdbfe", "borderLeftColor": "#bfdbfe" } }, "border-color-__fde68a_": { "": { "borderTopColor": "#fde68a", "borderRightColor": "#fde68a", "borderBottomColor": "#fde68a", "borderLeftColor": "#fde68a" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex": { "": { "display": "flex" } }, "flex-col": { "": { "flexDirection": "column" } }, "flex-row": { "": { "flexDirection": "row" } }, "flex-wrap": { "": { "flexWrap": "wrap" } }, "font-bold": { "": { "fontWeight": 700 } }, "font-medium": { "": { "fontWeight": 500 } }, "h-44px": { "": { "height": 44 } }, "items-center": { "": { "alignItems": "center" } }, "justify-center": { "": { "justifyContent": "center" } }, "leading-18px": { "": { "lineHeight": "18px" } }, "mb-12px": { "": { "marginBottom": 12 } }, "mb-16px": { "": { "marginBottom": 16 } }, "mb-4px": { "": { "marginBottom": 4 } }, "mr-6px": { "": { "marginRight": 6 } }, "px-10px": { "": { "paddingLeft": 10, "paddingRight": 10 } }, "py-3px": { "": { "paddingTop": 3, "paddingBottom": 3 } }, "rounded-20px": { "": { "borderTopLeftRadius": 20, "borderTopRightRadius": 20, "borderBottomRightRadius": 20, "borderBottomLeftRadius": 20 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "text-__059669_": { "": { "color": "#059669" } }, "text-__2563eb_": { "": { "color": "#2563eb" } }, "text-__64748b_": { "": { "color": "#64748b" } }, "text-__d97706_": { "": { "color": "#d97706" } }, "text-__ffffff_": { "": { "color": "#ffffff" } }, "text-11px": { "": { "fontSize": 11 } }, "text-13px": { "": { "fontSize": 13 } }, "text-14px": { "": { "fontSize": 14 } }, "w-full": { "": { "width": "100%" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Card"], { title: "uview-ultra 组件库" }, {
    default: withCtx(() => [
      createElementVNode("view", { class: "flex-col mb-16px" }, [
        createElementVNode("text", { class: "text-13px text-__64748b_ leading-18px mb-12px" }, " uview-ultra 是一款专为 uni-app X 设计的高品质 UI 组件库，高度适配 UTS 强类型系统与原生跨端开发，包含按钮、表单、反馈等丰富且精美的组件集。 "),
        createCommentVNode(" 亮点标签点缀 "),
        createElementVNode("view", { class: "flex-row items-center mb-4px flex-wrap" }, [
          createElementVNode("view", { class: "mr-6px mb-4px px-10px py-3px rounded-20px bg-__e0edff_ border-width-1px border-style-solid border-color-__bfdbfe_" }, [
            createElementVNode("text", { class: "text-11px text-__2563eb_ font-medium" }, "高品质组件")
          ]),
          createElementVNode("view", { class: "mr-6px mb-4px px-10px py-3px rounded-20px bg-__d1fae5_ border-width-1px border-style-solid border-color-__a7f3d0_" }, [
            createElementVNode("text", { class: "text-11px text-__059669_ font-medium" }, "原生 UTS 支持")
          ]),
          createElementVNode("view", { class: "mb-4px px-10px py-3px rounded-20px bg-__fef3c7_ border-width-1px border-style-solid border-color-__fde68a_" }, [
            createElementVNode("text", { class: "text-11px text-__d97706_ font-medium" }, "跨端一致性")
          ])
        ])
      ]),
      createCommentVNode(" 进入演示页面按钮 "),
      createElementVNode("view", {
        class: "w-full h-44px rounded-8px bg-__3b82f6_ flex flex-row items-center justify-center",
        onClick: $setup.navigateToShowcase
      }, [
        createElementVNode("text", { class: "text-__ffffff_ text-14px font-bold" }, "进入 uview-ultra 示例")
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
