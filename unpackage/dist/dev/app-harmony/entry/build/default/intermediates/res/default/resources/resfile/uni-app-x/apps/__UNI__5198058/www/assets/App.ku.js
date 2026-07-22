import { _ as __easycom_2 } from "./uni_modules/uview-ultra/components/up-toast/up-toast.js";
const { isInSSRComponentSetup, injectHook, getCurrentInstance, defineComponent, ref, onBeforeMount, onMounted, onUnmounted, resolveDynamicComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeStyle, renderSlot, createBlock, createVNode } = globalThis.Vue
import { T as Tabbar } from "./src/tabbar/index.js";
import "./src/store/index.js";
import { i as isPageTabbar, s as syncCurIdxByCurrentPage } from "./src/tabbar/store.js";
import { r as registerToast, u as unregisterToast } from "./src/utils/toast.js";
import { u as useAppStore } from "./src/store/app.js";
import { _ as _export_sfc } from "./plugin-vue-export-helper.js";
const ON_PAGE_SCROLL = "onPageScroll";
function resolveEasycom(component, easycom) {
  return typeof component === "string" ? easycom : component;
}
const createLifeCycleHook = (lifecycle, flag = 0) => (hook, target = getCurrentInstance()) => {
  !isInSSRComponentSetup && injectHook(lifecycle, hook, target);
};
const onPageScroll = /* @__PURE__ */ createLifeCycleHook(
  ON_PAGE_SCROLL,
  2
  /* HookFlags.PAGE */
);
const _sfc_main = /* @__PURE__ */ defineComponent({
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_toast = resolveEasycom(resolveDynamicComponent("up-toast"), __easycom_2);
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" 应用全局骨架与皮肤容器，通过 CSS 变量绑定响应式主题色 "),
      createElementVNode(
        "view",
        {
          class: "flex flex-col flex-1 h-full",
          style: normalizeStyle({ "--theme-color": $setup.appStore.state.theme, "backgroundColor": "#f8f8f8" })
        },
        [
          createCommentVNode(" 主滚动区域，包裹子页面插槽内容（开启 custom-nested-scroll 以适配 HBuilderX 5.15+ 嵌套手势） "),
          createElementVNode("scroll-view", {
            direction: "vertical",
            class: "flex-1 h-0",
            style: { backgroundColor: "#f8f8f8" }
          }, [
            renderSlot(_ctx.$slots, "default")
          ]),
          createCommentVNode(" 仅在当前页面为底部 Tabbar 页面时渲染自定义导航栏 "),
          $setup.isCurrentPageTabbar ? (openBlock(), createBlock($setup["Tabbar"], { key: 0 })) : createCommentVNode("v-if", true),
          createCommentVNode(" 全局统一绑定的 Toast 轻提示弹窗组件 "),
          createVNode(
            _component_up_toast,
            { ref: "uToastRef" },
            null,
            512
            /* NEED_PATCH */
          )
        ],
        4
        /* STYLE */
      )
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
const AppKu = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/App.ku.uvue"]]);
export {
  AppKu as A,
  onPageScroll as o,
  resolveEasycom as r
};
//# sourceMappingURL=App.ku.js.map
