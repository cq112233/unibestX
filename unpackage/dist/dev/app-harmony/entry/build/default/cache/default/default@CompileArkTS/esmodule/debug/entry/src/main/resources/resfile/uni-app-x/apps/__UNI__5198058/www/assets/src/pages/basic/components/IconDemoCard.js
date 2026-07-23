import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uni-icons/components/uni-icons/uni-icons&";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createVNode, withCtx, createElementVNode } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-icon/components/l-icon/l-icon&";
import { _ as __easycom_0$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconDemoCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const __returned__ = { get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__10b981_": { "": { "backgroundImage": "none", "backgroundColor": "#10b981" } }, "bg-__3b82f6_": { "": { "backgroundImage": "none", "backgroundColor": "#3b82f6" } }, "bg-__a855f7_": { "": { "backgroundImage": "none", "backgroundColor": "#a855f7" } }, "bg-__fff1f2_": { "": { "backgroundImage": "none", "backgroundColor": "#fff1f2" } }, "border-bottom-color-__f1f5f9_": { "": { "borderBottomColor": "#f1f5f9" } }, "border-bottom-style-solid": { "": { "borderBottomStyle": "solid" } }, "border-bottom-width-1px": { "": { "borderBottomWidth": 1 } }, "border-color-__ffe4e6_": { "": { "borderTopColor": "#ffe4e6", "borderRightColor": "#ffe4e6", "borderBottomColor": "#ffe4e6", "borderLeftColor": "#ffe4e6" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-top-color-__f1f5f9_": { "": { "borderTopColor": "#f1f5f9" } }, "border-top-style-solid": { "": { "borderTopStyle": "solid" } }, "border-top-width-1px": { "": { "borderTopWidth": 1 } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex-col": { "": { "flexDirection": "column" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-medium": { "": { "fontWeight": 500 } }, "h-6px": { "": { "height": 6 } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "mr-8px": { "": { "marginRight": 8 } }, "mt-4px": { "": { "marginTop": 4 } }, "px-6px": { "": { "paddingLeft": 6, "paddingRight": 6 } }, "py-12px": { "": { "paddingTop": 12, "paddingBottom": 12 } }, "py-2px": { "": { "paddingTop": 2, "paddingBottom": 2 } }, "rounded-3px": { "": { "borderTopLeftRadius": 3, "borderTopRightRadius": 3, "borderBottomRightRadius": 3, "borderBottomLeftRadius": 3 } }, "rounded-4px": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "self-start": { "": { "alignSelf": "flex-start" } }, "text-__475569_": { "": { "color": "#475569" } }, "text-__94a3b8_": { "": { "color": "#94a3b8" } }, "text-__f43f5e_": { "": { "color": "#f43f5e" } }, "text-10px": { "": { "fontSize": 10 } }, "text-12px": { "": { "fontSize": 12 } }, "text-14px": { "": { "fontSize": 14 } }, "w-6px": { "": { "width": 6 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0);
  const _component_l_icon = resolveEasycom(resolveDynamicComponent("l-icon"), __easycom_1);
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0$1);
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" 使用封装 of Card 组件 "),
      createVNode($setup["Card"], { title: "字体图标示例" }, {
        default: withCtx(() => [
          createCommentVNode(" uni-icon 示例 "),
          createElementVNode("view", { class: "flex-row items-center justify-between py-12px border-bottom-width-1px border-bottom-style-solid border-bottom-color-__f1f5f9_" }, [
            createElementVNode("view", { class: "flex-row items-center" }, [
              createElementVNode("view", { class: "w-6px h-6px rounded-3px bg-__3b82f6_ mr-8px" }),
              createElementVNode("text", { class: "text-14px text-__475569_ font-medium" }, "uni-icon")
            ]),
            createElementVNode("view", { class: "flex-row items-center" }, [
              createVNode(_component_uni_icons, {
                type: "contact",
                size: "26",
                style: { "color": "#3b82f6", "margin-right": "8px" }
              }),
              createElementVNode("text", { class: "text-12px text-__94a3b8_" }, "contact")
            ])
          ]),
          createCommentVNode(" lime-icon 示例 "),
          createElementVNode("view", { class: "flex-row items-center justify-between py-12px" }, [
            createElementVNode("view", { class: "flex-row items-center" }, [
              createElementVNode("view", { class: "w-6px h-6px rounded-3px bg-__10b981_ mr-8px" }),
              createElementVNode("view", { class: "flex-col" }, [
                createElementVNode("text", { class: "text-14px text-__475569_ font-medium" }, "lime-icon"),
                createElementVNode("view", { class: "bg-__fff1f2_ rounded-4px py-2px px-6px mt-4px self-start border-width-1px border-style-solid border-color-__ffe4e6_" }, [
                  createElementVNode("text", { class: "text-10px text-__f43f5e_" }, "SVG模式需授权收费")
                ])
              ])
            ]),
            createElementVNode("view", { class: "flex-row items-center" }, [
              createVNode(_component_l_icon, {
                name: "circle",
                size: "24",
                style: { "color": "#10b981", "margin-right": "8px" }
              }),
              createElementVNode("text", { class: "text-12px text-__94a3b8_" }, "circle")
            ])
          ]),
          createCommentVNode(" up-icon (uview-ultra) 示例 "),
          createElementVNode("view", { class: "flex-row items-center justify-between py-12px border-top-width-1px border-top-style-solid border-top-color-__f1f5f9_" }, [
            createElementVNode("view", { class: "flex-row items-center" }, [
              createElementVNode("view", { class: "w-6px h-6px rounded-3px bg-__a855f7_ mr-8px" }),
              createElementVNode("text", { class: "text-14px text-__475569_ font-medium" }, "up-icon (uview-ultra)")
            ]),
            createElementVNode("view", { class: "flex-row items-center" }, [
              createVNode(_component_up_icon, {
                name: "setting",
                size: "24",
                style: { "color": "#a855f7", "margin-right": "8px" }
              }),
              createElementVNode("text", { class: "text-12px text-__94a3b8_" }, "setting")
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
const IconDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/IconDemoCard.uvue"]]);
export {
  IconDemoCard as I
};
//# sourceMappingURL=IconDemoCard.js.map
