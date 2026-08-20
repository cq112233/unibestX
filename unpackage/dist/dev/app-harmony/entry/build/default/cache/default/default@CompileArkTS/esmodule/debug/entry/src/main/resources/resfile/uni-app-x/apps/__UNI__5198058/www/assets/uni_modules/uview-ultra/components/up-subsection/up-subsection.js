import { b as addStyle, d as deepMerge, a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, watch, onMounted, nextTick, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-subsection"
  },
  __name: "up-subsection",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    current: {
      type: [String, Number],
      default: 0
    },
    activeColor: {
      type: String,
      default: "#3c9cff"
    },
    inactiveColor: {
      type: String,
      default: "#303133"
    },
    mode: {
      type: String,
      default: "button"
    },
    fontSize: {
      type: [String, Number],
      default: 12
    },
    bold: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: "#eeeeef"
    },
    keyName: {
      type: String,
      default: "name"
    },
    activeColorKeyName: {
      type: String,
      default: "activeColor"
    },
    inactiveColorKeyName: {
      type: String,
      default: "inactiveColor"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["change"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance();
    const innerCurrent = ref(parseInt(props.current.toString()));
    const componentWidth = ref(0);
    const firstTime = ref(true);
    watch(() => {
      return props.current;
    }, (n = null) => {
      const nn = parseInt(n.toString());
      if (nn != innerCurrent.value) {
        innerCurrent.value = nn;
      }
    });
    watch(() => {
      return props.list;
    }, () => {
      init();
    });
    const wrapperStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (props.mode == "button") {
        style["backgroundColor"] = props.bgColor;
      }
      return style;
    });
    const computedRootStyle = computed(() => {
      const custom = addStyle(props.customStyle);
      const wrapper = wrapperStyle.value;
      return deepMerge(wrapper, custom);
    });
    const barStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (componentWidth.value > 0) {
        const itemWidth = componentWidth.value / props.list.length;
        style["width"] = itemWidth.toString() + "px";
        style["transform"] = `translateX(${innerCurrent.value * itemWidth}px)`;
      } else {
        if (props.list.length > 0) {
          style["width"] = (100 / props.list.length).toString() + "%";
        }
        style["transform"] = `translateX(${innerCurrent.value * 100}%)`;
      }
      if (firstTime.value) {
        style["transitionDuration"] = "0ms";
      } else {
        style["transitionDuration"] = "300ms";
      }
      style["left"] = "0px";
      style["top"] = "0px";
      style["bottom"] = "0px";
      return style;
    });
    const innerBarStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (props.mode === "subsection") {
        if (props.activeColor != "#3c9cff") {
          style["backgroundColor"] = props.activeColor;
        }
      }
      return style;
    });
    function getWrapperRect() {
      return new Promise((resolve) => {
        uni.createSelectorQuery().in(instance === null || instance === void 0 ? null : instance.proxy).select(".up-subsection").boundingClientRect().exec((rect) => {
          if (rect != null && rect.length > 0) {
            resolve(rect[0]);
          } else {
            resolve(null);
          }
        });
      });
    }
    function resize() {
      getWrapperRect().then((rect = null) => {
        if (rect != null && rect.width != null && rect.width > 0) {
          componentWidth.value = rect.width;
          if (firstTime.value) {
            nextTick(() => {
              setTimeout(() => {
                firstTime.value = false;
              }, 50);
            });
          }
        }
      });
    }
    function init() {
      innerCurrent.value = parseInt(props.current.toString());
      nextTick(() => {
        resize();
      });
    }
    function itemStyle(index) {
      const style = new UTSJSONObject({});
      if (props.mode === "subsection") {
        if (props.activeColor != "#3c9cff") {
          style["borderColor"] = props.activeColor;
        }
        style["borderWidth"] = "1px";
        style["borderStyle"] = "solid";
      }
      return style;
    }
    function textStyle(index) {
      var _a2, _b;
      const style = new UTSJSONObject({});
      if (props.disabled) {
        style["fontWeight"] = "normal";
        style["fontSize"] = addUnit(props.fontSize);
        style["color"] = "#c8c9cc";
        return style;
      }
      style["fontWeight"] = props.bold && innerCurrent.value === index ? "bold" : "normal";
      style["fontSize"] = addUnit(props.fontSize);
      const item = props.list[index];
      const activeColorTemp = typeof item == "object" && item != null ? (_a2 = item[props.activeColorKeyName]) !== null && _a2 !== void 0 ? _a2 : "" : "";
      const inactiveColorTemp = typeof item === "object" && item != null ? (_b = item[props.inactiveColorKeyName]) !== null && _b !== void 0 ? _b : "" : "";
      if (props.mode === "subsection") {
        style["color"] = innerCurrent.value === index ? activeColorTemp != "" ? activeColorTemp : "#fff" : inactiveColorTemp != "" ? inactiveColorTemp : props.inactiveColor;
      } else {
        const c = activeColorTemp != "" ? activeColorTemp : props.activeColor;
        if (innerCurrent.value == index) {
          if (c != "#3c9cff") {
            style["color"] = c;
          }
        } else {
          style["color"] = inactiveColorTemp != "" ? inactiveColorTemp : props.inactiveColor;
        }
      }
      return style;
    }
    function getText(item = null) {
      if (typeof item === "string") {
        return item;
      } else if (typeof item === "object" && item != null) {
        let temp = UTS.JSON.parse(UTS.JSON.stringify(item));
        return temp.getString(props.keyName);
      } else {
        return "error";
      }
    }
    function clickHandler(index) {
      if (props.disabled)
        return null;
      innerCurrent.value = index;
      emit("change", index);
    }
    onMounted(() => {
      init();
    });
    const __returned__ = { props, emit, instance, innerCurrent, componentWidth, firstTime, wrapperStyle, computedRootStyle, barStyle, innerBarStyle, getWrapperRect, resize, init, itemStyle, textStyle, getText, clickHandler };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"u-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-subsection":{"":{"display":"flex","flexDirection":"row","position":"relative","overflow":"hidden","width":"100%","boxSizing":"border-box"}},"up-subsection--button":{"":{"height":32,"backgroundColor":"#eeeeef","paddingTop":3,"paddingRight":3,"paddingBottom":3,"paddingLeft":3,"borderTopLeftRadius":3,"borderTopRightRadius":3,"borderBottomRightRadius":3,"borderBottomLeftRadius":3,"alignItems":"stretch"}},"up-subsection--button__bar":{"":{"backgroundColor":"#ffffff","!borderTopLeftRadius":3,"!borderTopRightRadius":3,"!borderBottomRightRadius":3,"!borderBottomLeftRadius":3}},"up-subsection--subsection":{"":{"height":30}},"up-subsection__bar":{"":{"position":"absolute","transitionProperty":"transform,color","transitionDuration":"0.3s","transitionTimingFunction":"ease-in-out"}},"up-subsection__bar--first":{"":{"borderTopLeftRadius":3,"borderBottomLeftRadius":3}},"up-subsection__bar--center":{"":{"borderTopLeftRadius":0,"borderBottomLeftRadius":0}},"up-subsection__bar--last":{"":{"borderTopRightRadius":3,"borderBottomRightRadius":3}},"up-subsection__bar__inner":{"":{"height":"100%","backgroundColor":"var(--theme-color, #0957de)"}},"up-subsection__bar__inner--button":{"":{"!borderTopLeftRadius":3,"!borderTopRightRadius":3,"!borderBottomRightRadius":3,"!borderBottomLeftRadius":3,"backgroundColor":"#ffffff","boxShadow":"0 1px 3px rgba(0, 0, 0, 0.1)"}},"up-subsection__item":{"":{"display":"flex","flexDirection":"row","flexGrow":1,"flexShrink":1,"flexBasis":"0%","height":"100%","alignItems":"center","justifyContent":"center","position":"relative"}},"up-subsection__item--no-border-right":{"":{"!borderRightWidth":0}},"up-subsection__item--first":{"":{"borderTopLeftRadius":3,"borderBottomLeftRadius":3}},"up-subsection__item--last":{"":{"borderTopRightRadius":3,"borderBottomRightRadius":3}},"up-subsection__item__text":{"":{"fontSize":12,"lineHeight":"12px","transitionProperty":"color","transitionDuration":"0.3s"}},"up-subsection__item__text--active":{"":{"color":"var(--theme-color, #0957de)"}},"up-subsection__item__text--disabled":{"":{"color":"#c8c9cc"}},"@TRANSITION":{"up-subsection__bar":{"property":"transform,color","duration":"0.3s","timingFunction":"ease-in-out"},"up-subsection__item__text":{"property":"color","duration":"0.3s"}},"flex":{"":{"display":"flex"}},"relative":{"":{"position":"relative"}}};
const { normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, renderSlot: _renderSlot, toDisplayString: _toDisplayString } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-subsection", [`up-subsection--${$props.mode}`]]),
      ref: "upSubsectionRef",
      style: _normalizeStyle($setup.computedRootStyle)
    },
    [
      _createElementVNode(
        "view",
        {
          class: "up-subsection__bar cursor-pointer",
          style: _normalizeStyle($setup.barStyle)
        },
        [
          _createElementVNode(
            "view",
            {
              class: _normalizeClass(["up-subsection__bar__inner", {
                "up-subsection--button__bar": $props.mode == "button",
                "up-subsection__bar__inner--button": $props.mode == "button",
                "up-subsection__bar--first": $setup.innerCurrent == 0 && $props.mode == "subsection",
                "up-subsection__bar--center": $setup.innerCurrent > 0 && $setup.innerCurrent < $props.list.length - 1 && $props.mode == "subsection",
                "up-subsection__bar--last": $setup.innerCurrent == $props.list.length - 1 && $props.mode == "subsection"
              }]),
              style: _normalizeStyle($setup.innerBarStyle)
            },
            null,
            6
            /* CLASS, STYLE */
          )
        ],
        4
        /* STYLE */
      ),
      (_openBlock(true), _createElementBlock(
        _Fragment,
        null,
        _renderList($props.list, (item, index) => {
          return _openBlock(), _createElementBlock("view", {
            class: _normalizeClass(["up-subsection__item cursor-pointer", [
              `up-subsection__item--${index.toString()}`,
              index < $props.list.length - 1 ? "up-subsection__item--no-border-right" : "",
              index == 0 ? "up-subsection__item--first" : "",
              index == $props.list.length - 1 ? "up-subsection__item--last" : "",
              $props.disabled ? "up-subsection__item--disabled" : ""
            ]]),
            style: _normalizeStyle($setup.itemStyle(index)),
            onClick: ($event) => $setup.clickHandler(index),
            key: index
          }, [
            _renderSlot(_ctx.$slots, "item", {
              item,
              index
            }, () => [
              _createElementVNode(
                "text",
                {
                  class: _normalizeClass(["up-subsection__item__text", [
                    $props.disabled ? "up-subsection__item__text--disabled" : "",
                    $setup.innerCurrent == index && $props.mode == "button" && $props.activeColor == "#3c9cff" ? "up-subsection__item__text--active" : ""
                  ]]),
                  style: _normalizeStyle($setup.textStyle(index))
                },
                _toDisplayString($setup.getText(item)),
                7
                /* TEXT, CLASS, STYLE */
              )
            ])
          ], 14, ["onClick"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-subsection/up-subsection.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-subsection.js.map
