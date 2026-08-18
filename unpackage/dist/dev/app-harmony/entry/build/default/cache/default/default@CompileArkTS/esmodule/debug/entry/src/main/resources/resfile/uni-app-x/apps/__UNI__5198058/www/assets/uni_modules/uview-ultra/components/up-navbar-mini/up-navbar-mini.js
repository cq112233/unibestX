import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-status-bar/up-status-bar&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_0$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { _ as __easycom_0$2 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-line/up-line&";
import { a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-navbar-mini"
  },
  __name: "up-navbar-mini",
  props: {
    safeAreaInsetTop: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: String,
      default: "arrow-left"
    },
    bgColor: {
      type: String,
      default: "#ffffff"
    },
    height: {
      type: [String, Number],
      default: "44px"
    },
    iconSize: {
      type: [String, Number],
      default: "20px"
    },
    iconColor: {
      type: String,
      default: "#303133"
    },
    autoBack: {
      type: Boolean,
      default: false
    },
    homeUrl: {
      type: String,
      default: ""
    },
    customClass: {
      type: String,
      default: ""
    }
  },
  emits: ["leftClick", "homeClick"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const contentStyle = computed(() => {
      return new UTSJSONObject({
        height: addUnit(props.height),
        backgroundColor: props.bgColor
      });
    });
    function leftClick() {
      emit("leftClick");
      if (props.autoBack) {
        uni.navigateBack();
      }
    }
    function homeClick() {
      emit("homeClick");
      if (props.homeUrl != "") {
        uni.reLaunch({ url: props.homeUrl });
      }
    }
    const __returned__ = { props, emit, contentStyle, leftClick, homeClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"u-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-navbar-mini__inner":{"":{"width":"180rpx","overflow":"hidden"}},"up-navbar-mini--fixed":{"":{"position":"fixed","left":20,"right":0,"top":10,"zIndex":11}},"up-navbar-mini__content":{"":{"display":"flex","flexDirection":"row","paddingTop":0,"paddingRight":15,"paddingBottom":0,"paddingLeft":15,"borderTopLeftRadius":20,"borderTopRightRadius":20,"borderBottomRightRadius":20,"borderBottomLeftRadius":20,"alignItems":"center","height":36,"backgroundColor":"#9acafc","position":"relative","justifyContent":"space-between"}},"up-navbar-mini__content__left":{"":{"display":"flex","flexDirection":"row","alignItems":"center"}},"up-navbar-mini__content__left--hover":{"":{"opacity":0.7}},"flex":{"":{"display":"flex"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, renderSlot: _renderSlot, createVNode: _createVNode, createElementVNode: _createElementVNode, normalizeStyle: _normalizeStyle, normalizeClass: _normalizeClass, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_status_bar = resolveEasycom(__resolveDynamicComponent("up-status-bar"), __easycom_0);
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0$1);
  const _component_up_line = resolveEasycom(__resolveDynamicComponent("up-line"), __easycom_0$2);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-navbar-mini", [$props.customClass]])
    },
    [
      _createElementVNode(
        "view",
        {
          class: _normalizeClass(["up-navbar-mini__inner", [$props.fixed ? "up-navbar-mini--fixed" : ""]])
        },
        [
          $props.safeAreaInsetTop ? (_openBlock(), _createBlock(_component_up_status_bar, { key: 0 })) : _createCommentVNode("v-if", true),
          _createElementVNode(
            "view",
            {
              class: "up-navbar-mini__content",
              style: _normalizeStyle($setup.contentStyle)
            },
            [
              _createElementVNode("view", {
                class: "up-navbar-mini__content__left",
                "hover-class": "up-navbar-mini__content__left--hover",
                "hover-start-time": "150",
                onClick: $setup.leftClick
              }, [
                _renderSlot(_ctx.$slots, "left", {}, () => [
                  _createVNode(_component_up_icon, {
                    name: $props.leftIcon,
                    size: $props.iconSize,
                    color: $props.iconColor
                  }, null, 8, ["name", "size", "color"])
                ])
              ]),
              _createElementVNode("view", { style: { "padding": "10px 10px" } }, [
                _createVNode(_component_up_line, {
                  direction: "col",
                  color: "#fff",
                  length: "16px"
                })
              ]),
              _createElementVNode("view", {
                class: "up-navbar-mini__content__center",
                onClick: $setup.homeClick
              }, [
                _renderSlot(_ctx.$slots, "center", {}, () => [
                  _createVNode(_component_up_icon, {
                    name: "home",
                    size: $props.iconSize,
                    color: $props.iconColor
                  }, null, 8, ["size", "color"])
                ])
              ])
            ],
            4
            /* STYLE */
          )
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-navbar-mini/up-navbar-mini.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-navbar-mini.js.map
