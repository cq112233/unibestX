import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { u as useTokenStore } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/token&";
import { u as useUserStore } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/user&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
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
const _style_0 = {"wtu-1st5nxt-0":{"":{"borderTopLeftRadius":12,"borderTopRightRadius":12,"borderBottomRightRadius":12,"borderBottomLeftRadius":12}},"wtu-j0fle6-1":{"":{"paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16}},"wtu-1v2ij9z-2":{"":{"marginBottom":16}},"wtu-1p7g57o-3":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderRightStyle":"var(--tw-border-style)","borderBottomStyle":"var(--tw-border-style)","borderLeftStyle":"var(--tw-border-style)","borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1}},"wtu-xh5qwk-4":{"":{"--tw-border-style":"solid","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}},"wtu-198xyh6-5":{"":{"borderTopColor":"#e2e8f0","borderRightColor":"#e2e8f0","borderBottomColor":"#e2e8f0","borderLeftColor":"#e2e8f0"}},"wtu-1mii4ha-6":{"":{"flexDirection":"row"}},"wtu-1bpud9-7":{"":{"justifyContent":"space-between"}},"wtu-1rv0ode-8":{"":{"alignItems":"center"}},"wtu-2onxqk-9":{"":{"marginBottom":8}},"wtu-qv3lw9-a":{"":{"fontSize":14}},"wtu-v3kjc2-b":{"":{"color":"#64748b"}},"wtu-15y3kej-c":{"":{"fontSize":12}},"wtu-15zxwf2-d":{"":{"color":"#94a3b8"}},"wtu-16blrxy-e":{"":{"--tw-leading":"var(--leading-normal, 1.5)","lineHeight":1.5}},"wtu-1b8tya1-f":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"wtu-16axtl9-g":{"":{"backgroundColor":"#3182ce"}},"wtu-1d89kne-h":{"":{"borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"wtu-7mwwf1-i":{"":{"height":42}},"wtu-1h8vv6j-j":{"":{"display":"flex"}},"wtu-1d05fpi-k":{"":{"justifyContent":"center"}},"wtu-gc256j-l":{"":{"color":"#ffffff"}},"wtu-1gwi2a9-m":{"":{"marginLeft":12}},"wtu-1echmqm-n":{"":{"backgroundColor":"#ef4444"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "路由拦截与传参测试" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-1st5nxt-0 wtu-j0fle6-1 wtu-1v2ij9z-2 wtu-1p7g57o-3 wtu-xh5qwk-4 wtu-198xyh6-5" }, [
        _createElementVNode("view", { class: "wtu-1mii4ha-6 wtu-1bpud9-7 wtu-1rv0ode-8 wtu-2onxqk-9" }, [
          _createElementVNode("text", { class: "wtu-qv3lw9-a wtu-v3kjc2-b" }, "当前登录状态:"),
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
        _createElementVNode("text", { class: "wtu-15y3kej-c wtu-15zxwf2-d wtu-16blrxy-e" }, " 测试场景说明：Test 页面属于需登录拦截页面。未登录时点击跳转将拦截并重定向到登录页，登录成功后会自动跳回 Test 页并解析 query 传参。 ")
      ]),
      _createElementVNode("view", { class: "wtu-1mii4ha-6 wtu-1bpud9-7" }, [
        _createElementVNode("view", {
          class: "wtu-1b8tya1-f wtu-16axtl9-g wtu-1d89kne-h wtu-7mwwf1-i wtu-1h8vv6j-j wtu-1mii4ha-6 wtu-1rv0ode-8 wtu-1d05fpi-k",
          onClick: $setup.jumpToTest
        }, [
          _createElementVNode("text", { class: "wtu-gc256j-l wtu-qv3lw9-a" }, "跳转 Test 页 (传参)")
        ]),
        _createElementVNode("view", {
          class: "wtu-1b8tya1-f wtu-1gwi2a9-m wtu-1echmqm-n wtu-1d89kne-h wtu-7mwwf1-i wtu-1h8vv6j-j wtu-1mii4ha-6 wtu-1rv0ode-8 wtu-1d05fpi-k",
          onClick: $setup.handleLogout
        }, [
          _createElementVNode("text", { class: "wtu-gc256j-l wtu-qv3lw9-a" }, "清除登录状态")
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
