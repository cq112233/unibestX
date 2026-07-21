const { defineComponent, computed, openBlock, createBlock, withCtx, createCommentVNode, createElementVNode, normalizeStyle, toDisplayString } = globalThis.Vue
import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { u as useTokenStore } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/token&";
import { u as useUserStore } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/user&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RouterDemoCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const tokenStore = useTokenStore();
    const userStore = useUserStore();
    const hasLogin = computed(() => {
      return tokenStore.hasValidLogin();
    });
    function jumpToTest() {
      uni.navigateTo({
        url: "/src/sub/test/test?id=999&name=UNIX"
      });
    }
    function handleLogout() {
      tokenStore.clearToken();
      userStore.clearUserInfo();
      uni.showToast({
        title: "已清除登录状态",
        icon: "success"
      });
    }
    const __returned__ = { tokenStore, userStore, hasLogin, jumpToTest, handleLogout, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__3182ce_": { "": { "backgroundImage": "none", "backgroundColor": "#3182ce" } }, "bg-__ef4444_": { "": { "backgroundImage": "none", "backgroundColor": "#ef4444" } }, "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "border-color-__e2e8f0_": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex": { "": { "display": "flex" } }, "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "flex-row": { "": { "flexDirection": "row" } }, "h-42px": { "": { "height": 42 } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "justify-center": { "": { "justifyContent": "center" } }, "leading-normal": { "": { "lineHeight": "normal" } }, "mb-16px": { "": { "marginBottom": 16 } }, "mb-8px": { "": { "marginBottom": 8 } }, "ml-12px": { "": { "marginLeft": 12 } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "text-__64748b_": { "": { "color": "#64748b" } }, "text-__94a3b8_": { "": { "color": "#94a3b8" } }, "text-__ffffff_": { "": { "color": "#ffffff" } }, "text-12px": { "": { "fontSize": 12 } }, "text-14px": { "": { "fontSize": 14 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Card"], { title: "路由拦截与传参测试" }, {
    default: withCtx(() => [
      createCommentVNode(" 状态展示 "),
      createElementVNode("view", { class: "bg-__f8fafc_ rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        createElementVNode("view", { class: "flex-row justify-between items-center mb-8px" }, [
          createElementVNode("text", { class: "text-14px text-__64748b_" }, "当前登录状态:"),
          createElementVNode(
            "text",
            {
              style: normalizeStyle({ fontSize: "14px", fontWeight: "bold", color: $setup.hasLogin ? "#10b981" : "#f43f5e" })
            },
            toDisplayString($setup.hasLogin ? "已登录" : "未登录"),
            5
            /* TEXT, STYLE */
          )
        ]),
        createElementVNode("text", { class: "text-12px text-__94a3b8_ leading-normal" }, " 测试场景说明：Test 页面属于需登录拦截页面。未登录时点击跳转将拦截并重定向到登录页，登录成功后会自动跳回 Test 页并解析 query 传参。 ")
      ]),
      createCommentVNode(" 操作按钮区 "),
      createElementVNode("view", { class: "flex-row justify-between" }, [
        createElementVNode("view", {
          class: "flex-1 bg-__3182ce_ rounded-8px h-42px flex flex-row items-center justify-center",
          onClick: $setup.jumpToTest
        }, [
          createElementVNode("text", { class: "text-__ffffff_ text-14px" }, "跳转 Test 页 (传参)")
        ]),
        createElementVNode("view", {
          class: "flex-1 ml-12px bg-__ef4444_ rounded-8px h-42px flex flex-row items-center justify-center",
          onClick: $setup.handleLogout
        }, [
          createElementVNode("text", { class: "text-__ffffff_ text-14px" }, "清除登录状态")
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const RouterDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/RouterDemoCard.uvue"]]);
export {
  RouterDemoCard as R
};
//# sourceMappingURL=RouterDemoCard.js.map
