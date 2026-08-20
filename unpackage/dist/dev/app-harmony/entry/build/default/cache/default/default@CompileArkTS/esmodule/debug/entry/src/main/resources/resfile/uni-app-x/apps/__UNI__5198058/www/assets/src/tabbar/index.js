import { s as syncCurIdxByCurrentPage, b as tabbarList, c as curIdx, d as setCurIdx } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/tabbar/store&";
import { T as TabbarItem } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/tabbar/TabbarItem&";
import { s as safeAreaInsets } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/systemInfo&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/index&";
import { g as getThemeTokens } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/theme&";
import { u as useAppStore } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/app&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, onMounted } = globalThis.Vue;
const TABBAR_HEIGHT = 50;
const TABBAR_CONTAINER_HEIGHT = 80;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "index",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const themeTokens = computed(() => {
      return getThemeTokens(useAppStore().state.isDark);
    });
    const safeAreaBottom = computed(() => {
      const insets = safeAreaInsets.value;
      if (insets != null) {
        return insets.bottom;
      }
      return 0;
    });
    function handleClickBulge() {
      uni.navigateTo({
        url: "/src/pages/ai/ai"
      });
    }
    function handleClick(index) {
      if (index == curIdx.value)
        return null;
      const list = tabbarList;
      if (list.length <= index)
        return null;
      if (list[index].isBulge) {
        handleClickBulge();
        return null;
      }
      const url = list[index].pagePath;
      setCurIdx(index);
      uni.switchTab({ url });
    }
    onMounted(() => {
      syncCurIdxByCurrentPage();
      uni.hideTabBar(new UTSJSONObject({
        fail: (err = null) => {
          uni.__f__("log", "at src/tabbar/index.uvue:59", "hideTabBar fail: ", err);
        }
      }));
    });
    const __returned__ = { TABBAR_HEIGHT, TABBAR_CONTAINER_HEIGHT, themeTokens, safeAreaBottom, handleClickBulge, handleClick, get tabbarList() {
      return tabbarList;
    }, get TabbarItem() {
      return TabbarItem;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "tabbar-container": { "": { "position": "fixed", "bottom": 0, "left": 0, "right": 0, "zIndex": 1, "backgroundColor": "rgba(0,0,0,0)", "flexDirection": "column" } }, "tabbar-bg": { "": { "position": "absolute", "bottom": 0, "left": 0, "right": 0, "borderTopWidth": "1rpx", "borderTopStyle": "solid", "zIndex": 1 } }, "tabbar-inner": { "": { "flexDirection": "row", "height": 80, "alignItems": "flex-end", "zIndex": 2 } }, "tabbar-item": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "alignItems": "center", "justifyContent": "center", "height": 50 } }, "tabbar-item-bulge": { "": { "height": 80 } }, "safe-area-bg": { "": { "zIndex": 1 } } };
const { normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, createVNode: _createVNode, normalizeClass: _normalizeClass } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: "tabbar-placeholder",
      style: _normalizeStyle({ height: `${$setup.TABBAR_HEIGHT + $setup.safeAreaBottom}px` })
    },
    [
      _createElementVNode(
        "view",
        {
          class: "tabbar-container",
          style: _normalizeStyle({ height: `${$setup.TABBAR_CONTAINER_HEIGHT + $setup.safeAreaBottom}px` })
        },
        [
          _createElementVNode(
            "view",
            {
              class: "tabbar-bg",
              style: _normalizeStyle({ height: `${$setup.TABBAR_HEIGHT + $setup.safeAreaBottom}px`, backgroundColor: $setup.themeTokens.tabBg, borderTopColor: $setup.themeTokens.tabBorder })
            },
            null,
            4
            /* STYLE */
          ),
          _createElementVNode("view", { class: "tabbar-inner" }, [
            (_openBlock(true), _createElementBlock(
              _Fragment,
              null,
              _renderList($setup.tabbarList, (item, index) => {
                return _openBlock(), _createElementBlock("view", {
                  key: index,
                  class: _normalizeClass(["tabbar-item", { "tabbar-item-bulge": item.isBulge }]),
                  onClick: ($event) => $setup.handleClick(index)
                }, [
                  _createVNode($setup["TabbarItem"], {
                    item,
                    index,
                    "is-bulge": item.isBulge
                  }, null, 8, ["item", "index", "is-bulge"])
                ], 10, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _createElementVNode(
            "view",
            {
              class: "safe-area-bg",
              style: _normalizeStyle({ height: `${$setup.safeAreaBottom}px`, backgroundColor: $setup.themeTokens.tabBg })
            },
            null,
            4
            /* STYLE */
          )
        ],
        4
        /* STYLE */
      )
    ],
    4
    /* STYLE */
  );
}
const Tabbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/tabbar/index.uvue"]]);
export {
  Tabbar as T
};
//# sourceMappingURL=index.js.map
