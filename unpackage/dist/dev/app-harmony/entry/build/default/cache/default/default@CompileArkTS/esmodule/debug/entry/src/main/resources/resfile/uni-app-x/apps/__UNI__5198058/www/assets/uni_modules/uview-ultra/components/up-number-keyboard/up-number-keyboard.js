import { _ as __easycom_0$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, withModifiers, Fragment, renderList, createElementVNode, normalizeStyle, toDisplayString, createVNode } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { p as propsNumberKeyboard } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-number-keyboard/props&";
import { i as randomArray } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-number-keyboard",
  mixins: [mpMixin, mixin, propsNumberKeyboard],
  emits: ["change", "backspace"],
  data() {
    return {
      backspace: "backspace",
      dot: ".",
      timer: null,
      cardX: "X"
      // 身份证的X符号
    };
  },
  computed: {
    // 键盘需要显示的内容
    numList() {
      let tmp = [];
      if (this.dotDisabled && this.mode == "number") {
        if (!this.random) {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        } else {
          return randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
        }
      } else if (!this.dotDisabled && this.mode == "number") {
        if (!this.random) {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, this.dot, 0];
        } else {
          return randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, this.dot, 0]);
        }
      } else if (this.mode == "card") {
        if (!this.random) {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, this.cardX, 0];
        } else {
          return randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, this.cardX, 0]);
        }
      }
      return tmp;
    }
  },
  created() {
  },
  methods: {
    // 是否让按键显示灰色，只在非乱序&&数字键盘&&且允许点按键的时候
    btnBgGray(index) {
      if (!this.random && index == 9 && (this.mode != "number" || this.mode == "number" && !this.dotDisabled)) {
        return true;
      } else {
        return false;
      }
    },
    // 按键的样式，在非乱序&&数字键盘&&不显示点按钮时，index为9时，按键占位两个空间
    itemStyle(index) {
      let style = new UTSJSONObject({});
      if (this.mode == "number" && this.dotDisabled && index == 9) {
        style["width"] = "464rpx";
      }
      return style;
    },
    // 点击退格键
    backspaceClick() {
      var _a;
      this.$emit("backspace");
      clearInterval((_a = this.timer) !== null && _a !== void 0 ? _a : 0);
      this.timer = null;
      this.timer = setInterval(() => {
        this.$emit("backspace");
      }, 250);
    },
    clearTimer() {
      var _a;
      clearInterval((_a = this.timer) !== null && _a !== void 0 ? _a : 0);
      this.timer = null;
    },
    // 获取键盘显示的内容
    keyboardClick(val = null) {
      if (!this.dotDisabled && val != this.dot && val != this.cardX) {
        val = parseInt(val.toString());
      }
      this.$emit("change", val);
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-keyboard": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "space-around", "backgroundColor": "#e0e4e6", "flexWrap": "wrap", "paddingTop": 8, "paddingRight": "10rpx", "paddingBottom": 8, "paddingLeft": "10rpx" } }, "up-keyboard__button-wrapper": { "": { "boxShadow": "0 2px 0px #BBBCBE", "marginTop": 4, "marginRight": "6rpx", "marginBottom": 4, "marginLeft": "6rpx", "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomLeftRadius": 4, "borderBottomRightRadius": 4 } }, "up-keyboard__button-wrapper__button": { "": { "width": "222rpx", "height": "90rpx", "backgroundColor": "#FFFFFF", "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomLeftRadius": 4, "borderBottomRightRadius": 4 } }, "up-keyboard__button-wrapper__button__text": { "": { "fontSize": 20, "fontWeight": 400, "color": "#303133" } }, "up-keyboard__button-wrapper__button--gray": { "": { "backgroundColor": "#c8cad2" } }, "up-hover-class": { "": { "backgroundColor": "#BBBCC6" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0$1);
  return openBlock(), createElementBlock(
    "view",
    {
      class: "up-keyboard",
      onTouchmove: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.noop && _ctx.noop(...args), ["stop", "prevent"]))
    },
    [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($options.numList, (item, index) => {
          return openBlock(), createElementBlock("view", {
            class: "up-keyboard__button-wrapper",
            key: index
          }, [
            createElementVNode("view", {
              class: "up-keyboard__button-wrapper__button",
              style: normalizeStyle([$options.itemStyle(index)]),
              onClick: ($event) => $options.keyboardClick(item),
              "hover-class": "up-hover-class",
              "hover-stay-time": 200
            }, [
              createElementVNode(
                "text",
                { class: "up-keyboard__button-wrapper__button__text" },
                toDisplayString(item),
                1
                /* TEXT */
              )
            ], 12, ["onClick"])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      createElementVNode("view", { class: "up-keyboard__button-wrapper" }, [
        createElementVNode(
          "view",
          {
            class: "up-keyboard__button-wrapper__button up-keyboard__button-wrapper__button--gray",
            "hover-class": "up-hover-class",
            "hover-stay-time": 200,
            onTouchstart: _cache[0] || (_cache[0] = withModifiers((...args) => $options.backspaceClick && $options.backspaceClick(...args), ["stop"])),
            onTouchend: _cache[1] || (_cache[1] = (...args) => $options.clearTimer && $options.clearTimer(...args))
          },
          [
            createVNode(_component_up_icon, {
              name: "backspace",
              color: "#303133",
              size: "28"
            })
          ],
          32
          /* NEED_HYDRATION */
        )
      ])
    ],
    32
    /* NEED_HYDRATION */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-number-keyboard/up-number-keyboard.uvue"]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=up-number-keyboard.js.map
