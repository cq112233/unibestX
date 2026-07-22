const { defineComponent, openBlock, createBlock, withCtx, createCommentVNode, createElementVNode, normalizeStyle, createElementBlock, Fragment, renderList } = globalThis.Vue
import { C as Card } from "./Card.js";
import "../../../store/index.js";
import { u as useAppStore } from "../../../store/app.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThemeSwitchCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const appStore = useAppStore();
    const colorOptions = [
      "#37c2bc",
      "#0957DE",
      "#10b981",
      "#f43f5e",
      "#f97316"
    ];
    function changeTheme(color) {
      appStore.setTheme(color);
      uni.showToast({
        title: "主题切换成功",
        icon: "none",
        duration: 1500
      });
    }
    const __returned__ = { appStore, colorOptions, changeTheme, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "border-color-__e2e8f0_": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex": { "": { "display": "flex" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "h-40px": { "": { "height": 40 } }, "h-44px": { "": { "height": 44 } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "justify-center": { "": { "justifyContent": "center" } }, "mb-16px": { "": { "marginBottom": 16 } }, "mb-8px": { "": { "marginBottom": 8 } }, "mt-10px": { "": { "marginTop": 10 } }, "mx-auto": { "": { "marginLeft": "auto", "marginRight": "auto" } }, "none": { "": { "display": "none" } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "py-10px": { "": { "paddingTop": 10, "paddingBottom": 10 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "rounded-20px": { "": { "borderTopLeftRadius": 20, "borderTopRightRadius": 20, "borderBottomRightRadius": 20, "borderBottomLeftRadius": 20 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "text-__94a3b8_": { "": { "color": "#94a3b8" } }, "text-__ffffff_": { "": { "color": "#ffffff" } }, "text-12px": { "": { "fontSize": 12 } }, "text-14px": { "": { "fontSize": 14 } }, "text-16px": { "": { "fontSize": 16 } }, "text-white": { "": { "color": "rgba(255,255,255,var(--un-color-opacity,1))" } }, "w-200px": { "": { "width": 200 } }, "w-40px": { "": { "width": 40 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Card"], { title: "主题设置" }, {
    default: withCtx(() => [
      createCommentVNode(" 预览区域 "),
      createElementVNode("view", { class: "bg-__f8fafc_ rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_ items-center" }, [
        createElementVNode("text", { class: "text-12px text-__94a3b8_ mb-8px" }, "主题色效果预览"),
        createElementVNode(
          "view",
          {
            class: "mt-10px mx-auto w-200px h-44px rounded-8px flex flex-row items-center justify-center",
            style: normalizeStyle({ backgroundColor: $setup.appStore.state.theme })
          },
          [
            createElementVNode("text", { class: "text-__ffffff_ text-14px" }, "主题按钮")
          ],
          4
          /* STYLE */
        )
      ]),
      createCommentVNode(" 颜色选择区 "),
      createElementVNode("view", { class: "flex-row justify-between py-10px" }, [
        (openBlock(), createElementBlock(
          Fragment,
          null,
          renderList($setup.colorOptions, (item, index) => {
            return createElementVNode("view", {
              key: index,
              class: "w-40px h-40px rounded-20px items-center justify-center",
              style: normalizeStyle({
                backgroundColor: item,
                borderWidth: $setup.appStore.state.theme === item ? "3px" : "0px",
                borderStyle: "solid",
                borderColor: "#1e293b"
              }),
              onClick: ($event) => $setup.changeTheme(item)
            }, [
              $setup.appStore.state.theme === item ? (openBlock(), createElementBlock("text", {
                key: 0,
                class: "text-16px text-white font-bold"
              }, "✓")) : createCommentVNode("v-if", true)
            ], 12, ["onClick"]);
          }),
          64
          /* STABLE_FRAGMENT */
        ))
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const ThemeSwitchCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/ThemeSwitchCard.uvue"]]);
export {
  ThemeSwitchCard as T
};
//# sourceMappingURL=ThemeSwitchCard.js.map
