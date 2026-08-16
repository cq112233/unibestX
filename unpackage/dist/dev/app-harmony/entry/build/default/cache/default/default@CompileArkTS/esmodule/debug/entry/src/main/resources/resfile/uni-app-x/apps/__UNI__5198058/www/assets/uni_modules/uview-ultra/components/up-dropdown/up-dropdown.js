import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { a as addUnit, e as getWindowInfo, u as upGetRect } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-dropdown/types&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, watch, onMounted, getCurrentInstance, provide } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-dropdown"
  },
  __name: "up-dropdown",
  props: {
    // 菜单标题和选项的激活态颜色
    activeColor: {
      type: String,
      default: "#2979ff"
    },
    // 菜单标题和选项的未激活态颜色
    inactiveColor: {
      type: String,
      default: "#606266"
    },
    // 点击遮罩是否关闭菜单
    closeOnClickMask: {
      type: Boolean,
      default: true
    },
    // 点击当前激活项标题是否关闭菜单
    closeOnClickSelf: {
      type: Boolean,
      default: true
    },
    // 过渡时间
    duration: {
      type: [Number, String],
      default: 300
    },
    // 标题菜单的高度
    height: {
      type: [Number, String],
      default: 40
    },
    // 是否显示下边框
    borderBottom: {
      type: Boolean,
      default: false
    },
    // 标题的字体大小
    titleSize: {
      type: [Number, String],
      default: 14
    },
    // 下拉出来的内容部分的圆角值
    borderRadius: {
      type: [Number, String],
      default: 0
    },
    // 菜单右侧的icon图标
    menuIcon: {
      type: String,
      default: "arrow-down"
    },
    // 菜单右侧图标的大小
    menuIconSize: {
      type: [Number, String],
      default: 14
    }
  },
  emits: ["open", "close"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const emit = __emit;
    const menuList = ref([]);
    const active = ref(false);
    const current = ref(-1);
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
      let style = new UTSJSONObject({});
      style["transform"] = `translateY(${active.value ? "0%" : "-100%"})`;
      style["transition-duration"] = parseInt(props.duration.toString()) / 1e3 + "s";
      style["borderRadius"] = `0 0 ${addUnit(props.borderRadius)} ${addUnit(props.borderRadius)}`;
      return style;
    });
    function getContentHeight() {
      let windowHeight = getWindowInfo().windowHeight;
      upGetRect(".up-dropdown__menu", false, instance).then((res) => {
        if (res.bottom != null && res.bottom > 0) {
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
      emit("open", current.value);
    }
    function close() {
      emit("close", current.value);
      active.value = false;
      current.value = -1;
      contentStyle.value["zIndex"] = -1;
      contentStyle.value["opacity"] = 0;
      setTimeout(() => {
        contentStyle.value["height"] = 0;
      }, parseInt(props.duration.toString()));
    }
    function menuClick(index) {
      if (index < 0 || index >= menuList.value.length)
        return null;
      if (menuList.value[index].disabled)
        return null;
      if (index == current.value && props.closeOnClickSelf) {
        close();
        return null;
      }
      open(index);
    }
    function maskClick() {
      if (!props.closeOnClickMask)
        return null;
      close();
    }
    function highlight(index = null) {
      if (index != null) {
        let indexOf = highlightIndexList.value.indexOf(index);
        if (indexOf === -1) {
          highlightIndexList.value.push(index);
        }
      } else {
        highlightIndexList.value = [];
      }
    }
    function getContentTextStyle(item, index) {
      let style = new UTSJSONObject({});
      if (index == current.value || highlightIndexList.value.includes(index)) {
        if (props.activeColor != "#2979ff") {
          style["color"] = props.activeColor;
        }
      } else {
        if (props.inactiveColor != "#606266") {
          style["color"] = props.inactiveColor;
        }
      }
      if (props.titleSize != 14) {
        style["fontSize"] = addUnit(props.titleSize);
      }
      return style;
    }
    function registerItem(item) {
      const idx = menuList.value.length;
      menuList.value.push(item);
      return idx;
    }
    function updateItemTitle(idx, title) {
      if (idx >= 0 && idx < menuList.value.length) {
        menuList.value[idx].title = title;
      }
    }
    provide("upDropdown", new UTSJSONObject({
      props,
      current,
      active,
      registerItem,
      updateItemTitle,
      close
    }));
    onMounted(() => {
      getContentHeight();
    });
    __expose({
      highlight,
      close,
      open,
      getContentHeight
    });
    const __returned__ = { instance, props, emit, menuList, active, current, contentStyle, highlightIndexList, contentHeight, popupStyle, getContentHeight, open, close, menuClick, maskClick, highlight, getContentTextStyle, registerItem, updateItemTitle, get addUnit() {
      return addUnit;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "up-dropdown": { "": { "flexGrow": 0, "flexShrink": 0, "flexBasis": "auto", "width": "100%", "position": "relative" } }, "up-dropdown__menu": { "": { "display": "flex", "flexDirection": "row", "position": "relative", "zIndex": 11, "height": "80rpx" } }, "up-dropdown__menu__item": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "up-dropdown__menu__item__text": { "": { "fontSize": "28rpx", "color": "#606266" } }, "up-dropdown__menu__item__text--active": { "": { "color": "var(--theme-color, #0957de)" } }, "up-dropdown__menu__item__arrow": { "": { "marginLeft": "6rpx", "transitionProperty": "transform", "transitionDuration": "0.3s", "alignItems": "center", "display": "flex", "flexDirection": "row" } }, "up-dropdown__menu__item__arrow--rotate": { "": { "transform": "rotate(180deg)" } }, "up-dropdown__content": { "": { "borderTopWidth": 0, "borderRightWidth": 0, "borderBottomWidth": 0, "borderLeftWidth": 0, "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "borderTopColor": "#0000FF", "borderRightColor": "#0000FF", "borderBottomColor": "#0000FF", "borderLeftColor": "#0000FF", "position": "absolute", "zIndex": 8, "width": "100%", "left": 0, "bottom": 0, "top": "80rpx", "overflow": "hidden" } }, "up-dropdown__content__mask": { "": { "position": "absolute", "zIndex": 9, "backgroundImage": "none", "backgroundColor": "rgba(0,0,0,0.3)", "width": "100%", "left": 0, "top": 0, "bottom": 0 } }, "up-dropdown__content__popup": { "": { "position": "relative", "zIndex": 10, "transitionProperty": "transform", "transitionDuration": "0.3s", "transform": "translate3d(0, -100%, 0)", "overflow": "hidden" } }, "up-flex-row": { "": { "display": "flex", "flexDirection": "row" } }, "@TRANSITION": { "up-dropdown__menu__item__arrow": { "property": "transform", "duration": "0.3s" }, "up-dropdown__content__popup": { "property": "transform", "duration": "0.3s" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, withModifiers: _withModifiers, renderSlot: _renderSlot } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: "up-dropdown",
      style: _normalizeStyle({
        height: $setup.active ? $setup.addUnit($setup.contentHeight + parseInt($setup.props.height.toString())) : $setup.addUnit($setup.props.height)
      })
    },
    [
      _createElementVNode(
        "view",
        {
          class: _normalizeClass(["up-dropdown__menu", {
            "u-border-bottom": $setup.props.borderBottom
          }]),
          style: _normalizeStyle({
            height: $setup.addUnit($setup.props.height)
          })
        },
        [
          (_openBlock(true), _createElementBlock(
            _Fragment,
            null,
            _renderList($setup.menuList, (item, index) => {
              return _openBlock(), _createElementBlock("view", {
                class: "up-dropdown__menu__item",
                key: index,
                onClick: _withModifiers(($event) => $setup.menuClick(index), ["stop"])
              }, [
                _createElementVNode("view", { class: "up-flex up-flex-row" }, [
                  _createElementVNode(
                    "text",
                    {
                      class: _normalizeClass(["up-dropdown__menu__item__text", {
                        "up-dropdown__menu__item__text--active": (index == $setup.current || $setup.highlightIndexList.includes(index)) && $setup.props.activeColor == "#2979ff"
                      }]),
                      style: _normalizeStyle([$setup.getContentTextStyle(item, index)])
                    },
                    _toDisplayString(item["title"]),
                    7
                    /* TEXT, CLASS, STYLE */
                  ),
                  _createElementVNode(
                    "view",
                    {
                      class: _normalizeClass(["up-dropdown__menu__item__arrow", {
                        "up-dropdown__menu__item__arrow--rotate": index == $setup.current
                      }])
                    },
                    [
                      _createVNode(_component_up_icon, {
                        "custom-style": { display: "flex" },
                        name: $setup.props.menuIcon,
                        size: $setup.addUnit($setup.props.menuIconSize),
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
      _createElementVNode(
        "view",
        {
          class: "up-dropdown__content",
          style: _normalizeStyle([$setup.contentStyle, {
            top: $setup.addUnit($setup.props.height),
            transition: `opacity ${parseInt($setup.props.duration.toString()) / 1e3}s, z-index ${parseInt($setup.props.duration.toString()) / 1e3}s linear`
          }]),
          onClick: $setup.maskClick,
          onTouchmove: _cache[1] || (_cache[1] = _withModifiers(() => {
          }, ["stop", "prevent"]))
        },
        [
          _createElementVNode(
            "view",
            {
              onClick: _cache[0] || (_cache[0] = _withModifiers(() => {
              }, ["stop", "prevent"])),
              class: "up-dropdown__content__popup",
              style: _normalizeStyle([$setup.popupStyle])
            },
            [
              _renderSlot(_ctx.$slots, "default")
            ],
            4
            /* STYLE */
          ),
          _createElementVNode("view", { class: "up-dropdown__content__mask" })
        ],
        36
        /* STYLE, NEED_HYDRATION */
      )
    ],
    4
    /* STYLE */
  );
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-dropdown/up-dropdown.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-dropdown.js.map
