import { C as Card } from "./Card.js";
import { u as useTokenStore } from "../../../store/token.js";
import { u as useUserStore } from "../../../store/user.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataEvent: _setSharedDataEvent, setSharedDataStyle: _setSharedDataStyle, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesBasicComponentsRouterDemoCard";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "2a24664c",
  __className,
  __filename: "src/pages/basic/components/RouterDemoCard.uvue",
  __name: "RouterDemoCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsRouterDemoCardSharedData", sharedDataClassId: 0 })));
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
    return () => {
      "raw js";
      const n10 = _createSharedDataComponent(
        Card,
        "65bc6202",
        { title: "路由拦截与传参测试" },
        {
          "default": () => {
            _setSharedDataEvent(__sharedData, 1, jumpToTest);
            _setSharedDataEvent(__sharedData, 2, handleLogout);
            _renderSharedDataEffect(() => {
              const _hasLogin = hasLogin.value;
              _setSharedDataStyle(__sharedData, 3, { fontSize: "14px", fontWeight: "bold", color: _hasLogin ? "#10b981" : "#f43f5e" });
              _setSharedData(__sharedData, 4, _toDisplayString(_hasLogin ? "已登录" : "未登录"));
            });
          }
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n10.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const RouterDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  RouterDemoCard as R
};
//# sourceMappingURL=RouterDemoCard.js.map
