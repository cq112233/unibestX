import { _ as __easycom_0 } from "../up-icon/up-icon.js";
const { defineComponent, ref, computed, resolveDynamicComponent, openBlock, createElementBlock, withModifiers, Fragment, renderList, normalizeClass, createElementVNode, createCommentVNode, toDisplayString, createVNode } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import "../../libs/composable/useUltraUI.js";
import { i as randomArray, s as sleep } from "../../libs/function/index.js";
import { d as defProps } from "./carKeyboard.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-car-keyboard"
  },
  __name: "up-car-keyboard",
  props: {
    // 是否打乱键盘的顺序
    random: {
      type: Boolean,
      default: defProps.getBoolean("carKeyboard.random")
    },
    // 是否自动切换到英文
    autoChange: {
      type: Boolean,
      default: defProps.getBoolean("carKeyboard.autoChange")
    }
  },
  emits: ["change", "backspace"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const abc = ref(false);
    const timer = ref(null);
    const areaList = computed(() => {
      let data = [
        "京",
        "沪",
        "粤",
        "津",
        "冀",
        "豫",
        "云",
        "辽",
        "黑",
        "湘",
        "皖",
        "鲁",
        "苏",
        "浙",
        "赣",
        "鄂",
        "桂",
        "甘",
        "晋",
        "陕",
        "蒙",
        "吉",
        "闽",
        "贵",
        "渝",
        "川",
        "青",
        "琼",
        "宁",
        "挂",
        "藏",
        "港",
        "澳",
        "新",
        "使",
        "学"
      ];
      let tmp = [];
      if (props.random)
        data = randomArray(data);
      tmp.push(data.slice(0, 10));
      tmp.push(data.slice(10, 20));
      tmp.push(data.slice(20, 30));
      tmp.push(data.slice(30, 36));
      return tmp;
    });
    const engKeyBoardList = computed(() => {
      let data = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        0,
        "Q",
        "W",
        "E",
        "R",
        "T",
        "Y",
        "U",
        "I",
        "O",
        "P",
        "A",
        "S",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "Z",
        "X",
        "C",
        "V",
        "B",
        "N",
        "M"
      ];
      let tmp = [];
      if (props.random)
        data = randomArray(data);
      tmp.push(data.slice(0, 10));
      tmp.push(data.slice(10, 20));
      tmp.push(data.slice(20, 30));
      tmp.push(data.slice(30, 36));
      return tmp;
    });
    const carInputClick = (i, j) => {
      let value = "";
      if (abc.value) {
        value = engKeyBoardList.value[i][j];
      } else {
        value = areaList.value[i][j];
      }
      if (!abc.value && props.autoChange) {
        sleep(200).then(() => {
          abc.value = true;
        });
      }
      emit("change", value);
    };
    const changeCarInputMode = () => {
      abc.value = !abc.value;
    };
    const backspaceClick = () => {
      var _a2;
      emit("backspace");
      clearInterval((_a2 = timer.value) !== null && _a2 !== void 0 ? _a2 : 0);
      timer.value = null;
      timer.value = setInterval(() => {
        emit("backspace");
      }, 250);
    };
    const clearTimer = () => {
      var _a2;
      clearInterval((_a2 = timer.value) !== null && _a2 !== void 0 ? _a2 : 0);
      timer.value = null;
    };
    const noop = () => {
    };
    const __returned__ = { props, emit, abc, timer, areaList, engKeyBoardList, carInputClick, changeCarInputMode, backspaceClick, clearTimer, noop };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-keyboard": { "": { "display": "flex", "flexDirection": "column", "justifyContent": "space-around", "backgroundColor": "#e0e4e6", "alignItems": "stretch", "paddingTop": 6, "paddingRight": 0, "paddingBottom": 6, "paddingLeft": 0 } }, "up-keyboard__button": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-keyboard__button__inner-wrapper": { "": { "boxShadow": "0 1px 0px #999992", "marginTop": "8rpx", "marginRight": "5rpx", "marginBottom": "8rpx", "marginLeft": "5rpx", "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "up-keyboard__button__inner-wrapper__inner": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "width": "64rpx", "backgroundColor": "#FFFFFF", "height": "80rpx", "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "up-keyboard__button__inner-wrapper__inner__text": { "": { "fontSize": 16, "color": "#303133" } }, "up-keyboard__button__inner-wrapper__left": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4, "width": "134rpx", "height": "80rpx", "backgroundColor": "#BBBCC6", "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "boxShadow": "0 1px 0px #999992" } }, "up-keyboard__button__inner-wrapper__right": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4, "width": "134rpx", "height": "80rpx", "backgroundColor": "#BBBCC6", "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "boxShadow": "0 1px 0px #999992" } }, "up-keyboard__button__inner-wrapper__left__line": { "": { "fontSize": 15, "color": "#303133", "marginTop": 0, "marginRight": 1, "marginBottom": 0, "marginLeft": 1 } }, "up-keyboard__button__inner-wrapper__left__lang": { "": { "fontSize": 16, "color": "#303133" } }, "up-keyboard__button__inner-wrapper__left__lang--active": { "": { "color": "var(--theme-color, #0957de)" } }, "up-hover-class": { "": { "backgroundColor": "#BBBCC6" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  return openBlock(), createElementBlock(
    "view",
    {
      class: "up-keyboard",
      onTouchmove: withModifiers($setup.noop, ["stop", "prevent"])
    },
    [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($setup.abc ? $setup.engKeyBoardList : $setup.areaList, (group, i) => {
          return openBlock(), createElementBlock("view", {
            key: i,
            class: normalizeClass(["up-keyboard__button", [i + 1 == 4 ? "up-keyboard__button--center" : ""]]),
            index: i
          }, [
            i == 3 ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: "up-keyboard__button__inner-wrapper"
            }, [
              createElementVNode("view", {
                class: "up-keyboard__button__inner-wrapper__left",
                "hover-class": "up-hover-class",
                "hover-stay-time": 200,
                onClick: $setup.changeCarInputMode
              }, [
                createElementVNode(
                  "text",
                  {
                    class: normalizeClass(["up-keyboard__button__inner-wrapper__left__lang", [!$setup.abc ? "up-keyboard__button__inner-wrapper__left__lang--active" : ""]])
                  },
                  "中",
                  2
                  /* CLASS */
                ),
                createElementVNode("text", { class: "up-keyboard__button__inner-wrapper__left__line" }, "/"),
                createElementVNode(
                  "text",
                  {
                    class: normalizeClass(["up-keyboard__button__inner-wrapper__left__lang", [$setup.abc ? "up-keyboard__button__inner-wrapper__left__lang--active" : ""]])
                  },
                  "英",
                  2
                  /* CLASS */
                )
              ])
            ])) : createCommentVNode("v-if", true),
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(group, (item, j) => {
                return openBlock(), createElementBlock("view", {
                  class: "up-keyboard__button__inner-wrapper",
                  key: j
                }, [
                  createElementVNode("view", {
                    class: "up-keyboard__button__inner-wrapper__inner",
                    "hover-stay-time": 200,
                    onClick: ($event) => $setup.carInputClick(i, j),
                    "hover-class": "up-hover-class"
                  }, [
                    createElementVNode(
                      "text",
                      { class: "up-keyboard__button__inner-wrapper__inner__text" },
                      toDisplayString(item),
                      1
                      /* TEXT */
                    )
                  ], 8, ["onClick"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            i == 3 ? (openBlock(), createElementBlock(
              "view",
              {
                key: 1,
                onTouchstart: $setup.backspaceClick,
                onTouchend: $setup.clearTimer,
                class: "up-keyboard__button__inner-wrapper"
              },
              [
                createElementVNode("view", {
                  class: "up-keyboard__button__inner-wrapper__right",
                  "hover-class": "up-hover-class",
                  "hover-stay-time": 200
                }, [
                  createVNode(_component_up_icon, {
                    size: "28",
                    name: "backspace",
                    color: "#303133"
                  })
                ])
              ],
              32
              /* NEED_HYDRATION */
            )) : createCommentVNode("v-if", true)
          ], 10, ["index"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    32
    /* NEED_HYDRATION */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-car-keyboard/up-car-keyboard.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-car-keyboard.js.map
