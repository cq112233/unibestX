import { _ as __easycom_2 } from "./uni_modules/uview-ultra/components/up-toast/up-toast.js";
import { T as Tabbar } from "./src/tabbar/index.js";
import "./src/store/index.js";
import { i as isPageTabbar, s as syncCurIdxByCurrentPage } from "./src/tabbar/store.js";
import { r as registerToast, u as unregisterToast } from "./src/utils/toast.js";
import { u as useAppStore } from "./src/store/app.js";
import { _ as _export_sfc } from "./plugin-vue-export-helper.js";
function resolveEasycom(component, easycom) {
  return typeof component === "string" ? easycom : component;
}
const { defineComponent: _defineComponent } = globalThis.Vue;
const { onBeforeMount, onMounted, onUnmounted, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "App.ku",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const appStore = useAppStore();
    const isCurrentPageTabbar = ref(false);
    const uToastRef = ref(null);
    onBeforeMount(() => {
      const pages = getCurrentPages();
      if (pages.length > 0) {
        const route = pages[pages.length - 1].route;
        if (route != null && route.length > 0) {
          const path = route.startsWith("/") ? route : `/${route}`;
          const isTabbar = isPageTabbar(path);
          isCurrentPageTabbar.value = isTabbar;
          if (isTabbar) {
            syncCurIdxByCurrentPage();
          }
        }
      }
      if (uToastRef.value != null) {
        registerToast(uToastRef.value);
      }
    });
    onMounted(() => {
      if (uToastRef.value != null) {
        registerToast(uToastRef.value);
      }
    });
    onUnmounted(() => {
      if (uToastRef.value != null) {
        unregisterToast(uToastRef.value);
      }
    });
    const __returned__ = { appStore, isCurrentPageTabbar, uToastRef, get Tabbar() {
      return Tabbar;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderSlot: _renderSlot, createElementVNode: _createElementVNode, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, normalizeStyle: _normalizeStyle, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_toast = resolveEasycom(__resolveDynamicComponent("up-toast"), __easycom_2);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: "flex flex-col flex-1",
      style: _normalizeStyle([{ "flex": "1" }, { "--theme-color": $setup.appStore.state.theme }])
    },
    [
      _createElementVNode("scroll-view", {
        direction: "vertical",
        class: "flex-1",
        style: { "flex": "1" }
      }, [
        _renderSlot(_ctx.$slots, "default")
      ]),
      $setup.isCurrentPageTabbar ? (_openBlock(), _createBlock($setup["Tabbar"], { key: 0 })) : _createCommentVNode("v-if", true),
      _createVNode(
        _component_up_toast,
        { ref: "uToastRef" },
        null,
        512
        /* NEED_PATCH */
      )
    ],
    4
    /* STYLE */
  );
}
const AppKu = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/App.ku.uvue"]]);
export {
  AppKu as A,
  resolveEasycom as r
};
//# sourceMappingURL=App.ku.js.map
