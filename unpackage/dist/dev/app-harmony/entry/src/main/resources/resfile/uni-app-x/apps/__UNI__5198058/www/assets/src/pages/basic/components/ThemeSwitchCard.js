import { C as Card } from "./Card.js";
import "../../../store/index.js";
import { $ as $t } from "../../../utils/i18n.js";
import { u as useAppStore } from "../../../store/app.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "ThemeSwitchCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const appStore = useAppStore();
    const themeTitle = computed(() => {
      return $t("basic.themeTitle");
    });
    const themePreview = computed(() => {
      return $t("basic.themePreview");
    });
    const themeButton = computed(() => {
      return $t("basic.themeButton");
    });
    const currentTheme = computed(() => {
      return appStore.state.theme;
    });
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
        title: $t("basic.themeSuccess"),
        icon: "none",
        duration: 1500
      });
    }
    const __returned__ = { appStore, themeTitle, themePreview, themeButton, currentTheme, colorOptions, changeTheme, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "border-color-__e2e8f0_": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex": { "": { "display": "flex" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "h-40px": { "": { "height": 40 } }, "h-44px": { "": { "height": 44 } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "justify-center": { "": { "justifyContent": "center" } }, "mb-16px": { "": { "marginBottom": 16 } }, "mb-8px": { "": { "marginBottom": 8 } }, "mt-10px": { "": { "marginTop": 10 } }, "mx-auto": { "": { "marginLeft": "auto", "marginRight": "auto" } }, "none": { "": { "display": "none" } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "py-10px": { "": { "paddingTop": 10, "paddingBottom": 10 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "rounded-20px": { "": { "borderTopLeftRadius": 20, "borderTopRightRadius": 20, "borderBottomRightRadius": 20, "borderBottomLeftRadius": 20 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "text-__94a3b8_": { "": { "color": "#94a3b8" } }, "text-__ffffff_": { "": { "color": "#ffffff" } }, "text-12px": { "": { "fontSize": 12 } }, "text-14px": { "": { "fontSize": 14 } }, "text-16px": { "": { "fontSize": 16 } }, "text-white": { "": { "color": "rgba(255,255,255,var(--un-color-opacity,1))" } }, "w-200px": { "": { "width": 200 } }, "w-40px": { "": { "width": 40 } } };
const { toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, normalizeStyle: _normalizeStyle, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, withCtx: _withCtx, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: $setup.themeTitle }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_ items-center" }, [
        _createElementVNode(
          "text",
          { class: "text-12px text-__94a3b8_ mb-8px" },
          _toDisplayString($setup.themePreview),
          1
          /* TEXT */
        ),
        _createElementVNode(
          "view",
          {
            class: "mt-10px mx-auto w-200px h-44px rounded-8px flex flex-row items-center justify-center",
            style: _normalizeStyle({ backgroundColor: $setup.currentTheme })
          },
          [
            _createElementVNode(
              "text",
              { class: "text-__ffffff_ text-14px" },
              _toDisplayString($setup.themeButton),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )
      ]),
      _createElementVNode("view", { class: "flex-row justify-between py-10px" }, [
        (_openBlock(), _createElementBlock(
          _Fragment,
          null,
          _renderList($setup.colorOptions, (item, index) => {
            return _createElementVNode("view", {
              key: index,
              class: "w-40px h-40px rounded-20px items-center justify-center",
              style: _normalizeStyle({
                backgroundColor: item,
                borderWidth: $setup.currentTheme == item ? "3px" : "0px",
                borderStyle: "solid",
                borderColor: "#1e293b"
              }),
              onClick: ($event) => $setup.changeTheme(item)
            }, [
              $setup.currentTheme == item ? (_openBlock(), _createElementBlock("text", {
                key: 0,
                class: "text-16px text-white font-bold"
              }, " ✓ ")) : _createCommentVNode("v-if", true)
            ], 12, ["onClick"]);
          }),
          64
          /* STABLE_FRAGMENT */
        ))
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["title"]);
}
const ThemeSwitchCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/ThemeSwitchCard.uvue"]]);
export {
  ThemeSwitchCard as T
};
//# sourceMappingURL=ThemeSwitchCard.js.map
