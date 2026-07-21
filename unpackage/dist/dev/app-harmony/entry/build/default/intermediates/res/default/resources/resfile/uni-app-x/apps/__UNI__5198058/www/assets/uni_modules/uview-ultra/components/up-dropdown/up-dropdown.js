import { _ as __easycom_35 } from "../up-icon/up-icon.js";
const { defineComponent, getCurrentInstance, ref, watch, computed, onMounted, resolveDynamicComponent, openBlock, createElementBlock, normalizeStyle, createElementVNode, normalizeClass, Fragment, renderList, withModifiers, toDisplayString, createVNode, renderSlot } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { a as addUnit, u as upGetRect, e as getWindowInfo } from "../../libs/function/index.js";
import { d as defProps } from "./dropdown.js";
import "./types.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-dropdown"
  },
  __name: "up-dropdown",
  props: {
    // 菜单标题和选项的激活态颜色
    activeColor: {
      type: String,
      default: defProps.getString("dropdown.activeColor")
    },
    // 菜单标题和选项的未激活态颜色
    inactiveColor: {
      type: String,
      default: defProps.getString("dropdown.inactiveColor")
    },
    // 点击遮罩是否关闭菜单
    closeOnClickMask: {
      type: Boolean,
      default: defProps.getBoolean("dropdown.closeOnClickMask")
    },
    // 点击当前激活项标题是否关闭菜单
    closeOnClickSelf: {
      type: Boolean,
      default: defProps.getBoolean("dropdown.closeOnClickSelf")
    },
    // 过渡时间
    duration: {
      type: [Number, String],
      default: defProps.getNumber("dropdown.duration")
    },
    // 标题菜单的高度
    height: {
      type: [Number, String],
      default: defProps.getNumber("dropdown.height")
    },
    // 是否显示下边框
    borderBottom: {
      type: Boolean,
      default: defProps.getBoolean("dropdown.borderBottom")
    },
    // 标题的字体大小
    titleSize: {
      type: [Number, String],
      default: defProps.getNumber("dropdown.titleSize")
    },
    // 下拉出来的内容部分的圆角值
    borderRadius: {
      type: [Number, String],
      default: defProps.getNumber("dropdown.borderRadius")
    },
    // 菜单右侧的icon图标
    menuIcon: {
      type: String,
      default: defProps.getString("dropdown.menuIcon")
    },
    // 菜单右侧图标的大小
    menuIconSize: {
      type: [Number, String],
      default: defProps.getNumber("dropdown.menuIconSize")
    }
  },
  emits: ["open", "close"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const _b = useUltraUI(), children = _b.children, getChildren = _b.getChildren, addChild = _b.addChild;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const emit = __emit;
    const showDropdown = ref(true);
    const menuList = ref([]);
    const active = ref(false);
    const current = ref(99999);
    const contentStyle = ref(new UTSJSONObject({
      zIndex: -1,
      opacity: 0
    }));
    const highlightIndexList = ref([]);
    const contentHeight = ref(0);
    watch(contentHeight, (newVal) => {
      if (active.value) {
        contentStyle.value["height"] = newVal + "px";
      }
    });
    const popupStyle = computed(() => {
      let style = new UTSJSONObject(
        {}
        // 进行Y轴位移，展开状态时，恢复原位。收齐状态时，往上位移100%，进行隐藏
      );
      style["transform"] = `translateY(${active.value ? "0%" : "-100%"})`;
      style["transition-duration"] = parseInt(props.duration.toString()) / 1e3 + "s";
      style["borderRadius"] = `0 0 ${addUnit(props.borderRadius)} ${addUnit(props.borderRadius)}`;
      return style;
    });
    function getWindowInfoWrapper() {
      return getWindowInfo();
    }
    function init() {
      var _a2;
      menuList.value = [];
      if (children.value != null) {
        (_a2 = children.value) === null || _a2 === void 0 ? null : _a2.map((child) => {
          child.$callMethod("init");
        });
      }
    }
    function getContentHeight() {
      let windowHeight = getWindowInfoWrapper().windowHeight;
      upGetRect(".up-dropdown__menu", false, instance).then((res) => {
        if (res.bottom != null) {
          contentHeight.value = windowHeight - res.bottom;
        } else {
          contentHeight.value = windowHeight;
        }
      });
    }
    function open(index) {
      getContentHeight();
      contentStyle.value = new UTSJSONObject({
        zIndex: 11,
        height: contentHeight.value + "px",
        opacity: 1
      });
      active.value = true;
      current.value = index;
      if (children.value != null) {
        children.value.map((val, idx) => {
          if (index == idx) {
            val.$callMethod("setActive", true);
          } else {
            val.$callMethod("setActive", false);
          }
        });
      }
      emit("open", current.value);
    }
    function close() {
      emit("close", current.value);
      active.value = false;
      current.value = 99999;
      contentStyle.value["zIndex"] = -1;
      contentStyle.value["opacity"] = 0;
      setTimeout(() => {
        contentStyle.value["height"] = 0;
      }, parseInt(props.duration.toString()));
    }
    function menuClick(index) {
      if (menuList.value[index].disabled)
        return null;
      if (index == current.value && props.closeOnClickSelf) {
        close();
        setTimeout(() => {
          if (children.value != null && children.value[index] != null) {
            children.value[index].$callMethod("setActive", false);
          }
        }, parseInt(props.duration.toString()));
        return null;
      }
      open(index);
    }
    function maskClick() {
      if (!props.closeOnClickMask)
        return null;
      close();
    }
    function highlight(indexParams = null) {
      if (Array.isArray(indexParams) && indexParams !== null) {
        highlightIndexList.value = indexParams;
        return null;
      }
      highlightIndexList.value = [];
      if (indexParams != null) {
        highlightIndexList.value.push(parseInt(indexParams.toString()));
      }
    }
    const addMenuListItem = (op) => {
      menuList.value.push(op);
    };
    onMounted(() => {
      getContentHeight();
    });
    const getProps = function() {
      return new UTSJSONObject({
        activeColor: props.activeColor,
        inactiveColor: props.inactiveColor,
        closeOnClickMask: props.closeOnClickMask,
        closeOnClickSelf: props.closeOnClickSelf,
        duration: props.duration,
        height: props.height,
        borderBottom: props.borderBottom,
        titleSize: props.titleSize,
        borderRadius: props.borderRadius,
        menuIcon: props.menuIcon,
        menuIconSize: props.menuIconSize
      });
    };
    function getContentTextStyle(item, index) {
      const style = new UTSJSONObject({});
      style["fontSize"] = addUnit(props.titleSize);
      const isActive = index == current.value || highlightIndexList.value.includes(index);
      if (item.disabled) {
        style["color"] = "#c0c4cc";
      } else if (isActive) {
        if (props.activeColor != "#2979ff") {
          style["color"] = props.activeColor;
        }
      } else {
        style["color"] = props.inactiveColor;
      }
      return style;
    }
    __expose({
      init,
      close,
      highlight,
      getChildren,
      addChild,
      children,
      addMenuListItem,
      getProps
    });
    const __returned__ = { children, getChildren, addChild, instance, props, emit, showDropdown, menuList, active, current, contentStyle, highlightIndexList, contentHeight, popupStyle, getWindowInfoWrapper, init, getContentHeight, open, close, menuClick, maskClick, highlight, addMenuListItem, getProps, getContentTextStyle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "up-dropdown": { "": { "flexGrow": 0, "flexShrink": 0, "flexBasis": "auto", "width": "100%", "position": "relative" } }, "up-dropdown__menu": { "": { "display": "flex", "flexDirection": "row", "position": "relative", "zIndex": 11, "height": "80rpx" } }, "up-dropdown__menu__item": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "up-flex-row": { ".up-dropdown__menu__item ": { "flexDirection": "row" } }, "up-dropdown__menu__item__text": { "": { "fontSize": "28rpx", "color": "#606266" } }, "up-dropdown__menu__item__text--active": { "": { "color": "var(--theme-color, #0957de)" } }, "up-dropdown__menu__item__arrow": { "": { "marginLeft": "6rpx", "transitionProperty": "transform", "transitionDuration": "0.3s", "alignItems": "center", "display": "flex", "flexDirection": "row" } }, "up-dropdown__menu__item__arrow--rotate": { "": { "transform": "rotate(180deg)" } }, "up-dropdown__content": { "": { "borderTopWidth": 0, "borderRightWidth": 0, "borderBottomWidth": 0, "borderLeftWidth": 0, "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "borderTopColor": "#0000FF", "borderRightColor": "#0000FF", "borderBottomColor": "#0000FF", "borderLeftColor": "#0000FF", "position": "absolute", "zIndex": 8, "width": "100%", "left": 0, "bottom": 0, "top": "80rpx", "overflow": "hidden" } }, "up-dropdown__content__mask": { "": { "position": "absolute", "zIndex": 9, "backgroundImage": "none", "backgroundColor": "rgba(0,0,0,0.3)", "width": "100%", "left": 0, "top": 0, "bottom": 0 } }, "up-dropdown__content__popup": { "": { "position": "relative", "zIndex": 10, "transitionProperty": "transform", "transitionDuration": "0.3s", "transform": "translate3D(0, -100%, 0)", "overflow": "hidden" } }, "@TRANSITION": { "up-dropdown__menu__item__arrow": { "property": "transform", "duration": "0.3s" }, "up-dropdown__content__popup": { "property": "transform", "duration": "0.3s" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_35);
  return openBlock(), createElementBlock(
    "view",
    {
      class: "up-dropdown",
      style: normalizeStyle({
        height: $setup.active ? _ctx.$up.addUnit($setup.contentHeight + parseInt($setup.props.height.toString())) : _ctx.$up.addUnit($setup.props.height)
      })
    },
    [
      createElementVNode(
        "view",
        {
          class: normalizeClass(["up-dropdown__menu", {
            "u-border-bottom": $setup.props.borderBottom
          }]),
          style: normalizeStyle({
            height: _ctx.$up.addUnit($setup.props.height)
          })
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($setup.menuList, (item, index) => {
              return openBlock(), createElementBlock("view", {
                class: "up-dropdown__menu__item",
                key: index,
                onClick: withModifiers(($event) => $setup.menuClick(index), ["stop"])
              }, [
                createElementVNode("view", { class: "up-flex up-flex-row" }, [
                  createElementVNode(
                    "text",
                    {
                      class: normalizeClass(["up-dropdown__menu__item__text", {
                        "up-dropdown__menu__item__text--active": (index == $setup.current || $setup.highlightIndexList.includes(index)) && $setup.props.activeColor == "#2979ff"
                      }]),
                      style: normalizeStyle([$setup.getContentTextStyle(item, index)])
                    },
                    toDisplayString(item["title"]),
                    7
                    /* TEXT, CLASS, STYLE */
                  ),
                  createElementVNode(
                    "view",
                    {
                      class: normalizeClass(["up-dropdown__menu__item__arrow", {
                        "up-dropdown__menu__item__arrow--rotate": index == $setup.current
                      }])
                    },
                    [
                      createVNode(_component_up_icon, {
                        "custom-style": { display: "flex" },
                        name: $setup.props.menuIcon,
                        size: _ctx.$up.addUnit($setup.props.menuIconSize),
                        color: index == $setup.current || $setup.highlightIndexList.includes(index) ? $setup.props.activeColor == "#2979ff" ? "primary" : $setup.props.activeColor : "#c0c4cc"
                      }, null, 8, ["name", "size", "color"])
                    ],
                    2
                    /* CLASS */
                  )
                ])
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        6
        /* CLASS, STYLE */
      ),
      createElementVNode(
        "view",
        {
          class: "up-dropdown__content",
          style: normalizeStyle([$setup.contentStyle, {
            top: _ctx.$up.addUnit($setup.props.height),
            transition: `opacity ${parseInt($setup.props.duration.toString()) / 1e3}s, z-index ${parseInt($setup.props.duration.toString()) / 1e3}s linear`
          }]),
          onClick: $setup.maskClick,
          onTouchmove: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["stop", "prevent"]))
        },
        [
          createElementVNode(
            "view",
            {
              onClick: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["stop", "prevent"])),
              class: "up-dropdown__content__popup",
              style: normalizeStyle([$setup.popupStyle, {}])
            },
            [
              renderSlot(_ctx.$slots, "default")
            ],
            4
            /* STYLE */
          ),
          createElementVNode("view", { class: "up-dropdown__content__mask" })
        ],
        36
        /* STYLE, NEED_HYDRATION */
      )
    ],
    4
    /* STYLE */
  );
}
const __easycom_32 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-dropdown/up-dropdown.uvue"]]);
export {
  __easycom_32 as _
};
//# sourceMappingURL=up-dropdown.js.map
