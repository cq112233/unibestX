import { _ as __easycom_0 } from "../../../../uni_modules/uview-ultra/components/up-tag/up-tag.js";
const { defineComponent, resolveDynamicComponent, openBlock, createBlock, withCtx, createElementVNode, createCommentVNode, createVNode } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_0$1 } from "../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { C as Card } from "./Card.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UViewUltraDemoCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    function navigateToShowcase() {
      uni.navigateTo({
        url: "/src/sub/uview-ultra/uview-ultra"
      });
    }
    const __returned__ = { navigateToShowcase, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__3b82f6_": { "": { "backgroundImage": "none", "backgroundColor": "#3b82f6" } }, "bg-__d1fae5_": { "": { "backgroundImage": "none", "backgroundColor": "#d1fae5" } }, "bg-__e0edff_": { "": { "backgroundImage": "none", "backgroundColor": "#e0edff" } }, "bg-__fef3c7_": { "": { "backgroundImage": "none", "backgroundColor": "#fef3c7" } }, "border-color-__a7f3d0_": { "": { "borderTopColor": "#a7f3d0", "borderRightColor": "#a7f3d0", "borderBottomColor": "#a7f3d0", "borderLeftColor": "#a7f3d0" } }, "border-color-__bfdbfe_": { "": { "borderTopColor": "#bfdbfe", "borderRightColor": "#bfdbfe", "borderBottomColor": "#bfdbfe", "borderLeftColor": "#bfdbfe" } }, "border-color-__fde68a_": { "": { "borderTopColor": "#fde68a", "borderRightColor": "#fde68a", "borderBottomColor": "#fde68a", "borderLeftColor": "#fde68a" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex": { "": { "display": "flex" } }, "flex-col": { "": { "flexDirection": "column" } }, "flex-row": { "": { "flexDirection": "row" } }, "flex-wrap": { "": { "flexWrap": "wrap" } }, "font-bold": { "": { "fontWeight": 700 } }, "font-medium": { "": { "fontWeight": 500 } }, "h-44px": { "": { "height": 44 } }, "items-center": { "": { "alignItems": "center" } }, "justify-center": { "": { "justifyContent": "center" } }, "leading-18px": { "": { "lineHeight": "18px" } }, "mb-12px": { "": { "marginBottom": 12 } }, "mb-16px": { "": { "marginBottom": 16 } }, "mb-4px": { "": { "marginBottom": 4 } }, "mr-6px": { "": { "marginRight": 6 } }, "px-10px": { "": { "paddingLeft": 10, "paddingRight": 10 } }, "py-3px": { "": { "paddingTop": 3, "paddingBottom": 3 } }, "rounded-20px": { "": { "borderTopLeftRadius": 20, "borderTopRightRadius": 20, "borderBottomRightRadius": 20, "borderBottomLeftRadius": 20 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "text-__059669_": { "": { "color": "#059669" } }, "text-__2563eb_": { "": { "color": "#2563eb" } }, "text-__64748b_": { "": { "color": "#64748b" } }, "text-__d97706_": { "": { "color": "#d97706" } }, "text-__ffffff_": { "": { "color": "#ffffff" } }, "text-11px": { "": { "fontSize": 11 } }, "text-13px": { "": { "fontSize": 13 } }, "text-14px": { "": { "fontSize": 14 } }, "w-full": { "": { "width": "100%" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_tag = resolveEasycom(resolveDynamicComponent("up-tag"), __easycom_0);
  const _component_up_button = resolveEasycom(resolveDynamicComponent("up-button"), __easycom_0$1);
  return openBlock(), createBlock($setup["Card"], { title: "uview-ultra 组件库" }, {
    default: withCtx(() => [
      createElementVNode("view", { class: "flex-col mb-16px" }, [
        createElementVNode("text", { class: "text-13px text-__64748b_ leading-18px mb-12px" }, " uview-ultra 是一款专为 uni-app X 设计的高品质 UI 组件库，高度适配 UTS 强类型系统与原生跨端开发，包含按钮、表单、反馈等丰富且精美的组件集。 "),
        createCommentVNode(" 亮点标签点缀 "),
        createElementVNode("view", { class: "flex-row items-center mb-4px" }, [
          createElementVNode("view", { class: "mr-6px" }, [
            createVNode(_component_up_tag, {
              text: "高品质组件",
              type: "primary",
              size: "mini",
              plain: true
            })
          ]),
          createElementVNode("view", { class: "mr-6px" }, [
            createVNode(_component_up_tag, {
              text: "原生 UTS 支持",
              type: "success",
              size: "mini",
              plain: true
            })
          ]),
          createElementVNode("view", null, [
            createVNode(_component_up_tag, {
              text: "跨端一致性",
              type: "warning",
              size: "mini",
              plain: true
            })
          ])
        ])
      ]),
      createCommentVNode(" 进入演示页面按钮 "),
      createVNode(_component_up_button, {
        type: "primary",
        text: "进入 uview-ultra 示例",
        onClick: $setup.navigateToShowcase
      })
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
