import { C as Card } from "./Card.js";
import { u as useTokenStore } from "../../../store/token.js";
import { u as useUserStore } from "../../../store/user.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
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
const _style_0 = {"wtu-1mii4ha-0":{"":{"flexDirection":"row"}},"wtu-1bpud9-1":{"":{"justifyContent":"space-between"}},"wtu-1rv0ode-2":{"":{"alignItems":"center"}},"wtu-v3kjc2-3":{"":{"color":"#64748b"}},"wtu-15zxwf2-4":{"":{"color":"#94a3b8"}},"wtu-16blrxy-5":{"":{"--tw-leading":"var(--leading-normal, 1.5)","lineHeight":1.5}},"wtu-1b8tya1-6":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"wtu-16axtl9-7":{"":{"backgroundColor":"#3182ce"}},"wtu-1h8vv6j-8":{"":{"display":"flex"}},"wtu-1d05fpi-9":{"":{"justifyContent":"center"}},"wtu-gc256j-a":{"":{"color":"#ffffff"}},"wtu-1echmqm-b":{"":{"backgroundColor":"#ef4444"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "路由拦截与传参测试" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("view", { class: "wtu-1mii4ha-0 wtu-1bpud9-1 wtu-1rv0ode-2 mb-8px" }, [
          _createElementVNode("text", { class: "text-14px wtu-v3kjc2-3" }, "当前登录状态:"),
          _createElementVNode(
            "text",
            {
              style: _normalizeStyle({ fontSize: "14px", fontWeight: "bold", color: $setup.hasLogin ? "#10b981" : "#f43f5e" })
            },
            _toDisplayString($setup.hasLogin ? "已登录" : "未登录"),
            5
            /* TEXT, STYLE */
          )
        ]),
        _createElementVNode("text", { class: "text-12px wtu-15zxwf2-4 wtu-16blrxy-5" }, " 测试场景说明：Test 页面属于需登录拦截页面。未登录时点击跳转将拦截并重定向到登录页，登录成功后会自动跳回 Test 页并解析 query 传参。 ")
      ]),
      _createElementVNode("view", { class: "wtu-1mii4ha-0 wtu-1bpud9-1" }, [
        _createElementVNode("view", {
          class: "wtu-1b8tya1-6 wtu-16axtl9-7 rounded-8px h-42px wtu-1h8vv6j-8 wtu-1mii4ha-0 wtu-1rv0ode-2 wtu-1d05fpi-9",
          onClick: $setup.jumpToTest
        }, [
          _createElementVNode("text", { class: "wtu-gc256j-a text-14px" }, "跳转 Test 页 (传参)")
        ]),
        _createElementVNode("view", {
          class: "wtu-1b8tya1-6 ml-12px wtu-1echmqm-b rounded-8px h-42px wtu-1h8vv6j-8 wtu-1mii4ha-0 wtu-1rv0ode-2 wtu-1d05fpi-9",
          onClick: $setup.handleLogout
        }, [
          _createElementVNode("text", { class: "wtu-gc256j-a text-14px" }, "清除登录状态")
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
