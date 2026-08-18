import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/index&";
import { $ as $t } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/i18n&";
import { u as useAppStore } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/app&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
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
const _style_0 = {"wtu-1vbahwj-0":{"":{"alignItems":"center"}},"wtu-i5demr-1":{"":{"color":"#94a3b8"}},"wtu-7gvrw-2":{"":{"marginLeft":"auto","marginRight":"auto"}},"wtu-27v8zu-3":{"":{"display":"flex"}},"wtu-1q091sr-4":{"":{"flexDirection":"row"}},"wtu-1r3uoj-5":{"":{"justifyContent":"center"}},"wtu-g3vc06-6":{"":{"color":"#ffffff"}},"wtu-1o0f0um-7":{"":{"justifyContent":"space-between"}},"wtu-19gexn6-8":{"":{"color":"#ffffff"}},"wtu-1x7cgzs-9":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"flex":{"":{"display":"flex"}}};
const { toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, normalizeStyle: _normalizeStyle, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, withCtx: _withCtx, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: $setup.themeTitle }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0] wtu-1vbahwj-0" }, [
        _createElementVNode(
          "text",
          { class: "text-12px wtu-i5demr-1 mb-8px" },
          _toDisplayString($setup.themePreview),
          1
          /* TEXT */
        ),
        _createElementVNode(
          "view",
          {
            class: "mt-10px wtu-7gvrw-2 w-200px h-44px rounded-8px wtu-27v8zu-3 wtu-1q091sr-4 wtu-1vbahwj-0 wtu-1r3uoj-5",
            style: _normalizeStyle({ backgroundColor: $setup.currentTheme })
          },
          [
            _createElementVNode(
              "text",
              { class: "wtu-g3vc06-6 text-14px" },
              _toDisplayString($setup.themeButton),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )
      ]),
      _createElementVNode("view", { class: "wtu-1q091sr-4 wtu-1o0f0um-7 py-10px" }, [
        (_openBlock(), _createElementBlock(
          _Fragment,
          null,
          _renderList($setup.colorOptions, (item, index) => {
            return _createElementVNode("view", {
              key: index,
              class: "w-40px h-40px rounded-20px wtu-1vbahwj-0 wtu-1r3uoj-5",
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
                class: "text-16px wtu-19gexn6-8 wtu-1x7cgzs-9"
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
