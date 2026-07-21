import { _ as __easycom_35 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot, createVNode, toDisplayString, createBlock, Fragment, createCommentVNode } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_36 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-text/up-text&";
import { p as propsStepsItem } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-steps-item/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { f as error } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { c as color } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/config/color&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-steps-item",
  mixins: [mpMixin, mixin, propsStepsItem],
  data() {
    return {
      index: 0,
      childLength: 0,
      showLine: false,
      parentData: new UTSJSONObject({
        direction: "row",
        current: 0,
        activeColor: "",
        inactiveColor: "",
        activeIcon: "",
        inactiveIcon: "",
        dot: false
      })
    };
  },
  watch: {
    parentData() {
    }
  },
  created() {
    this.init();
  },
  computed: {
    itemWidthStyle() {
      const style = new UTSJSONObject(
        {}
        // @ts-ignore
      );
      if (this.parentData["direction"].toString() === "row" && this.childLength > 0) {
        style["width"] = (100 / this.childLength).toString() + "%";
      }
      return style;
    },
    lineStyle2() {
      const style = new UTSJSONObject(
        {}
        // @ts-ignore
      );
      if (this.parentData["direction"].toString() === "row") {
        if (this.index == 0) {
          style["display"] = "none";
        } else {
          style["left"] = "0px";
          style["right"] = "50%";
          style["width"] = "auto";
        }
      } else {
        if (this.index == 0) {
          style["display"] = "none";
        } else {
          style["top"] = "0px";
          style["bottom"] = "50%";
          style["left"] = "10px";
          style["height"] = "auto";
          style["width"] = "1px";
        }
      }
      if (this.error) {
        style["backgroundColor"] = color["error"];
      } else if (this.index - 1 < parseInt(this.parentData["current"].toString())) {
        if (this.parentData["activeColor"] != "#3c9cff") {
          style["backgroundColor"] = this.parentData["activeColor"];
        }
      } else {
        style["backgroundColor"] = this.parentData["inactiveColor"];
      }
      return style;
    },
    lineStyle() {
      const style = new UTSJSONObject(
        {}
        // @ts-ignore
      );
      if (this.parentData["direction"].toString() === "row") {
        if (this.index == this.childLength - 1) {
          style["display"] = "none";
        } else {
          style["left"] = "50%";
          style["right"] = "0px";
          style["width"] = "auto";
        }
      } else {
        if (this.index == this.childLength - 1) {
          style["display"] = "none";
        } else {
          style["top"] = "50%";
          style["bottom"] = "0px";
          style["left"] = "10px";
          style["height"] = "auto";
          style["width"] = "1px";
        }
      }
      if (this.parent != null && this.parent.$data["children"] != null && this.index + 1 < this.parent.$data["children"].length) {
        const nextChild = this.parent.$data["children"][this.index + 1];
        if (nextChild != null && nextChild.$props["error"]) {
          style["backgroundColor"] = color["error"];
        } else if (this.index < parseInt(this.parentData["current"].toString())) {
          if (this.parentData["activeColor"] != "#3c9cff") {
            style["backgroundColor"] = this.parentData["activeColor"];
          }
        } else {
          style["backgroundColor"] = this.parentData["inactiveColor"];
        }
      }
      return style;
    },
    dotStyle() {
      const style = new UTSJSONObject({});
      const activeColor = this.parentData["activeColor"];
      if (this.statusClass === "finish" || this.statusClass === "process") {
        if (activeColor != "#3c9cff") {
          style["backgroundColor"] = activeColor;
        }
      } else {
        style["backgroundColor"] = this.parentData["inactiveColor"];
      }
      return style;
    },
    circleStyle() {
      const style = new UTSJSONObject({});
      const activeColor = this.parentData["activeColor"];
      const inactiveColor = this.parentData["inactiveColor"];
      if (activeColor != "#3c9cff" || inactiveColor != "#969799") {
        if (this.statusClass === "process") {
          style["backgroundColor"] = activeColor;
          style["borderColor"] = activeColor;
        } else if (this.statusClass === "finish") {
          style["backgroundColor"] = "rgba(0, 0, 0, 0)";
          style["borderColor"] = activeColor;
        } else if (this.statusClass === "wait") {
          style["backgroundColor"] = "rgba(0, 0, 0, 0)";
          style["borderColor"] = inactiveColor;
        } else if (this.statusClass === "error") {
          style["backgroundColor"] = "rgba(0, 0, 0, 0)";
          style["borderColor"] = color["error"];
        }
      }
      return style;
    },
    circleTextStyle() {
      const style = new UTSJSONObject({});
      const activeColor = this.parentData["activeColor"];
      const inactiveColor = this.parentData["inactiveColor"];
      if (activeColor != "#3c9cff" || inactiveColor != "#969799") {
        if (this.statusClass === "process") {
          style["color"] = "#ffffff";
        } else {
          style["color"] = inactiveColor;
        }
      }
      return style;
    },
    itemStyleInner() {
      return new UTSJSONObject({
        // @ts-ignore
        ...this.itemStyle
      });
    },
    statusClass() {
      let index = this.index;
      let error2 = this.error;
      let current = parseInt(this.parentData["current"].toString());
      if (current == index) {
        return error2 == true ? "error" : "process";
      } else if (error2) {
        return "error";
      } else if (current > index) {
        return "finish";
      } else {
        return "wait";
      }
    },
    statusColor() {
      let colorTmp = "#f1f1f1";
      switch (this.statusClass) {
        case "finish":
          colorTmp = this.parentData["activeColor"];
          break;
        case "error":
          colorTmp = color["error"];
          break;
        case "process":
          colorTmp = this.parentData["dot"] ? this.parentData["activeColor"] : "transparent";
          break;
        default:
          colorTmp = this.parentData["inactiveColor"];
          break;
      }
      return colorTmp;
    },
    contentStyle() {
      const style = new UTSJSONObject(
        {}
        // @ts-ignore
      );
      if (this.parentData["direction"].toString() === "column") {
        style["marginLeft"] = this.parentData["dot"].toString() == "true" ? "2px" : "6px";
        style["marginTop"] = this.parentData["dot"].toString() == "true" ? "0px" : "6px";
      } else {
        style["marginTop"] = this.parentData["dot"].toString() == "true" ? "2px" : "6px";
        style["marginLeft"] = this.parentData["dot"].toString() == "true" ? "2px" : "6px";
      }
      return style;
    }
  },
  mounted() {
    var _a;
    if (this.parent != null) {
      (_a = this.parent) === null || _a === void 0 ? null : _a.$callMethod("updateFromChild");
    }
  },
  methods: {
    init() {
      this.updateParentData();
      if (this.parent == null) {
        return error("up-steps-item必须要搭配up-steps组件使用");
      }
      this.parent.$data["children"].forEach((child, index) => {
        if (child == this) {
          this.index = index;
        }
      });
      this.childLength = this.parent.$data["children"].length;
    },
    updateParentData() {
      this.getParentData("up-steps");
    },
    // 父组件数据发生变化
    updateFromParent() {
      this.init();
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-steps-item": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "display": "flex", "flexDirection": "row" } }, "up-steps-item--row": { "": { "flexDirection": "column", "alignItems": "center", "position": "relative" } }, "up-steps-item--column": { "": { "position": "relative", "flexDirection": "row", "justifyContent": "flex-start", "paddingBottom": 5 } }, "up-steps-item__wrapper": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "position": "relative", "backgroundColor": "#ffffff", "borderTopLeftRadius": 50, "borderTopRightRadius": 50, "borderBottomRightRadius": 50, "borderBottomLeftRadius": 50 } }, "up-steps-item__wrapper--column": { "": { "width": 20, "height": 20 } }, "up-steps-item__wrapper--column--dot": { "": { "height": 20, "width": 20 } }, "up-steps-item__wrapper--row": { "": { "width": 20, "height": 20 } }, "up-steps-item__wrapper--row--dot": { "": { "width": 20, "height": 20 } }, "up-steps-item__wrapper__circle": { "": { "width": 20, "height": 20, "boxSizing": "border-box", "flexShrink": 0, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "up-steps-item__wrapper__circle--wait": { "": { "borderTopColor": "#909193", "borderRightColor": "#909193", "borderBottomColor": "#909193", "borderLeftColor": "#909193", "backgroundColor": "rgba(0,0,0,0)" } }, "up-steps-item__wrapper__circle--active": { "": { "backgroundColor": "var(--theme-color, #0957de)", "borderTopColor": "var(--theme-color, #0957de)", "borderRightColor": "var(--theme-color, #0957de)", "borderBottomColor": "var(--theme-color, #0957de)", "borderLeftColor": "var(--theme-color, #0957de)" } }, "up-steps-item__wrapper__circle--finish": { "": { "borderTopColor": "var(--theme-color, #0957de)", "borderRightColor": "var(--theme-color, #0957de)", "borderBottomColor": "var(--theme-color, #0957de)", "borderLeftColor": "var(--theme-color, #0957de)", "backgroundColor": "rgba(0,0,0,0)" } }, "up-steps-item__wrapper__circle--error": { "": { "borderTopColor": "#f56c6c", "borderRightColor": "#f56c6c", "borderBottomColor": "#f56c6c", "borderLeftColor": "#f56c6c", "backgroundColor": "rgba(0,0,0,0)" } }, "up-steps-item__wrapper__circle__text": { "": { "color": "#909193", "fontSize": 11, "textAlign": "center" } }, "up-steps-item__wrapper__circle__text--active": { "": { "color": "#ffffff" } }, "up-steps-item__wrapper__dot": { "": { "width": 10, "height": 10, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "backgroundColor": "#606266" } }, "up-steps-item__wrapper__dot--active": { "": { "backgroundColor": "var(--theme-color, #0957de)" } }, "up-steps-item__content": { "": { "display": "flex", "flexDirection": "row", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-steps-item__content--row": { "": { "flexDirection": "column", "alignItems": "center" } }, "up-steps-item__content--column": { "": { "flexDirection": "column", "marginLeft": 6 } }, "up-steps-item__line": { "": { "position": "absolute", "backgroundColor": "#909193" } }, "up-steps-item__line--active": { "": { "backgroundColor": "var(--theme-color, #0957de)" } }, "up-steps-item__line--row": { "": { "top": 10, "height": 1 } }, "up-steps-item__line--column": { "": { "width": 1, "left": 10 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_35);
  const _component_up_text = resolveEasycom(resolveDynamicComponent("up-text"), __easycom_36);
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["up-steps-item", [`up-steps-item--${$data.parentData["direction"]}`]]),
      ref: "up-steps-item",
      style: normalizeStyle($options.itemWidthStyle)
    },
    [
      createElementVNode(
        "view",
        {
          class: normalizeClass(["up-steps-item__line", [
            `up-steps-item__line--${$data.parentData["direction"]}`,
            $data.index < parseInt($data.parentData["current"].toString()) && $data.parentData["activeColor"] == "#3c9cff" ? "up-steps-item__line--active" : ""
          ]]),
          style: normalizeStyle($options.lineStyle)
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      createElementVNode(
        "view",
        {
          class: normalizeClass(["up-steps-item__line", [
            `up-steps-item__line--${$data.parentData["direction"]}`,
            $data.index - 1 < parseInt($data.parentData["current"].toString()) && $data.parentData["activeColor"] == "#3c9cff" ? "up-steps-item__line--active" : ""
          ]]),
          style: normalizeStyle($options.lineStyle2)
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      createElementVNode(
        "view",
        {
          class: normalizeClass(["up-steps-item__wrapper", [
            `up-steps-item__wrapper--${$data.parentData["direction"]}`,
            $data.parentData["dot"] != null && $data.parentData["dot"] ? `up-steps-item__wrapper--${$data.parentData["direction"]}--dot` : ""
          ]]),
          style: normalizeStyle($options.itemStyleInner)
        },
        [
          renderSlot(_ctx.$slots, "icon", {}, () => [
            $data.parentData["dot"] != null && $data.parentData["dot"] ? (openBlock(), createElementBlock(
              "view",
              {
                key: 0,
                class: normalizeClass(["up-steps-item__wrapper__dot", [
                  $options.statusClass === "finish" || $options.statusClass === "process" ? "up-steps-item__wrapper__dot--active" : ""
                ]]),
                style: normalizeStyle($options.dotStyle)
              },
              null,
              6
              /* CLASS, STYLE */
            )) : $data.parentData["activeIcon"] != "" || $data.parentData["inactiveIcon"] != "" ? (openBlock(), createElementBlock("view", {
              key: 1,
              class: "up-steps-item__wrapper__icon"
            }, [
              createVNode(_component_up_icon, {
                name: $data.index <= parseInt($data.parentData["current"].toString()) ? $data.parentData["activeIcon"] : $data.parentData["inactiveIcon"],
                size: _ctx.iconSize,
                color: $data.index <= parseInt($data.parentData["current"].toString()) ? $data.parentData["activeColor"] == "#3c9cff" ? "primary" : $data.parentData["activeColor"] : $data.parentData["inactiveColor"]
              }, null, 8, ["name", "size", "color"])
            ])) : (openBlock(), createElementBlock(
              "view",
              {
                key: 2,
                class: normalizeClass([[
                  $options.statusClass === "process" ? "up-steps-item__wrapper__circle--active" : "",
                  $options.statusClass === "finish" ? "up-steps-item__wrapper__circle--finish" : "",
                  $options.statusClass === "wait" ? "up-steps-item__wrapper__circle--wait" : "",
                  $options.statusClass === "error" ? "up-steps-item__wrapper__circle--error" : ""
                ], "up-steps-item__wrapper__circle"]),
                style: normalizeStyle($options.circleStyle)
              },
              [
                $options.statusClass === "process" || $options.statusClass === "wait" ? (openBlock(), createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: normalizeClass(["up-steps-item__wrapper__circle__text", [
                      $options.statusClass === "process" ? "up-steps-item__wrapper__circle__text--active" : ""
                    ]]),
                    style: normalizeStyle($options.circleTextStyle)
                  },
                  toDisplayString($data.index + 1),
                  7
                  /* TEXT, CLASS, STYLE */
                )) : (openBlock(), createBlock(_component_up_icon, {
                  key: 1,
                  color: $options.statusClass === "error" ? "error" : $data.parentData["activeColor"] == "#3c9cff" ? "primary" : $data.parentData["activeColor"],
                  size: "12",
                  name: $options.statusClass === "error" ? "close" : "checkmark"
                }, null, 8, ["color", "name"]))
              ],
              6
              /* CLASS, STYLE */
            ))
          ])
        ],
        6
        /* CLASS, STYLE */
      ),
      createElementVNode(
        "view",
        {
          class: normalizeClass(["up-steps-item__content", [
            `up-steps-item__content--${$data.parentData["direction"]}`,
            parseInt($data.parentData["current"].toString()) == $data.index ? "up-steps-item__content--current" : ""
          ]]),
          style: normalizeStyle($options.contentStyle)
        },
        [
          renderSlot(_ctx.$slots, "content", { index: $data.index }),
          _ctx.$slots["content"] == null ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              createElementVNode("view", { class: "up-steps-item__content__title" }, [
                renderSlot(_ctx.$slots, "title"),
                _ctx.$slots["title"] == null ? (openBlock(), createBlock(_component_up_text, {
                  key: 0,
                  text: _ctx.title,
                  lineHeight: "20px",
                  color: parseInt($data.parentData["current"].toString()) == $data.index ? $data.parentData["activeColor"] == "#3c9cff" ? "" : $data.parentData["activeColor"] : $data.parentData["inactiveColor"],
                  type: parseInt($data.parentData["current"].toString()) == $data.index && $data.parentData["activeColor"] == "#3c9cff" ? "primary" : "default",
                  size: parseInt($data.parentData["current"].toString()) == $data.index ? 14 : 13
                }, null, 8, ["text", "color", "type", "size"])) : createCommentVNode("v-if", true)
              ]),
              createElementVNode("view", { class: "up-steps-item__content__desc" }, [
                renderSlot(_ctx.$slots, "desc"),
                _ctx.$slots["desc"] == null ? (openBlock(), createBlock(_component_up_text, {
                  key: 0,
                  text: _ctx.desc,
                  type: "tips",
                  size: "12"
                }, null, 8, ["text"])) : createCommentVNode("v-if", true)
              ])
            ],
            64
            /* STABLE_FRAGMENT */
          )) : createCommentVNode("v-if", true)
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_14 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue"]]);
export {
  __easycom_14 as _
};
//# sourceMappingURL=up-steps-item.js.map
