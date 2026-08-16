import { a as addUnit, s as sleep } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-skeleton"
  },
  __name: "up-skeleton",
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    animate: {
      type: Boolean,
      default: true
    },
    rows: {
      type: [String, Number],
      default: 0
    },
    rowsWidth: {
      type: [String, Number, Array],
      default: "100%"
    },
    rowsHeight: {
      type: [String, Number, Array],
      default: 18
    },
    title: {
      type: Boolean,
      default: true
    },
    titleWidth: {
      type: [String, Number],
      default: "50%"
    },
    titleHeight: {
      type: [String, Number],
      default: 18
    },
    avatar: {
      type: Boolean,
      default: false
    },
    avatarSize: {
      type: [String, Number],
      default: 32
    },
    avatarShape: {
      type: String,
      default: "circle"
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const props = __props;
    const rowsArray = computed(() => {
      var _a2, _b;
      const rows = [];
      const rowCount = parseInt(props.rows.toString());
      const rWidth = props.rowsWidth;
      const rHeight = props.rowsHeight;
      for (let i = 0; i < rowCount; i++) {
        let item = new UTSJSONObject({});
        let rowWidth = "";
        if (UTS.isInstanceOf(rWidth, Array)) {
          const rWidthArr = rWidth;
          if (i == rowCount - 1) {
            rowWidth = "70%";
          } else {
            rowWidth = rWidthArr[i] != null ? (_a2 = rWidthArr[i]) !== null && _a2 !== void 0 ? _a2 : "0px" : i == rWidthArr.length ? "70%" : "100%";
          }
        } else {
          if (i == rowCount - 1) {
            rowWidth = "70%";
          } else {
            rowWidth = rWidth != null ? rWidth.toString() : "";
          }
        }
        let rowHeight = "";
        if (UTS.isInstanceOf(rHeight, Array)) {
          const rHeightArr = rHeight;
          rowHeight = rHeightArr[i] != null ? (_b = rHeightArr[i]) !== null && _b !== void 0 ? _b : "0px" : "18px";
        } else {
          rowHeight = rHeight != null ? rHeight.toString() : "";
        }
        if (!props.title && i == 0) {
          item["marginTop"] = "0px";
        } else if (props.title && i == 0) {
          item["marginTop"] = "20px";
        } else {
          item["marginTop"] = "12px";
        }
        item["width"] = addUnit(rowWidth);
        item["height"] = addUnit(rowHeight);
        rows.push(item);
      }
      return rows;
    });
    const uTitleWidth = computed(() => {
      let tWidth = "0px";
      tWidth = addUnit(props.titleWidth);
      return addUnit(tWidth);
    });
    async function getComponentWidth() {
      await sleep(20);
    }
    onMounted(() => {
      getComponentWidth();
    });
    const __returned__ = { props, rowsArray, uTitleWidth, getComponentWidth, get addUnit() {
      return addUnit;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "up-skeleton": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-skeleton__wrapper": { "": { "display": "flex", "flexDirection": "row" } }, "up-skeleton__wrapper__avatar": { "": { "backgroundColor": "#F1F2F4", "marginRight": 15 } }, "up-skeleton__wrapper__avatar--circle": { "": { "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100 } }, "up-skeleton__wrapper__avatar--square": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "up-skeleton__wrapper__content": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-skeleton__wrapper__content__rows": { "": { "backgroundColor": "#F1F2F4", "borderTopLeftRadius": 3, "borderTopRightRadius": 3, "borderBottomRightRadius": 3, "borderBottomLeftRadius": 3 } }, "up-skeleton__wrapper__content__title": { "": { "backgroundColor": "#F1F2F4", "borderTopLeftRadius": 3, "borderTopRightRadius": 3, "borderBottomRightRadius": 3, "borderBottomLeftRadius": 3 } } };
const { normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, renderList: _renderList, Fragment: _Fragment, createElementVNode: _createElementVNode, renderSlot: _renderSlot } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("view", { class: "up-skeleton" }, [
    $props.loading ? (_openBlock(), _createElementBlock(
      "view",
      {
        key: 0,
        class: "up-skeleton__wrapper",
        ref: "up-skeleton__wrapper",
        style: { "display": "flex", "flex-direction": "row" }
      },
      [
        $props.avatar ? (_openBlock(), _createElementBlock(
          "view",
          {
            key: 0,
            class: _normalizeClass(["up-skeleton__wrapper__avatar", [`up-skeleton__wrapper__avatar--${$props.avatarShape}`, $props.animate ? "animate" : ""]]),
            style: _normalizeStyle({
              height: $setup.addUnit($props.avatarSize),
              width: $setup.addUnit($props.avatarSize)
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )) : _createCommentVNode("v-if", true),
        _createElementVNode(
          "view",
          {
            class: "up-skeleton__wrapper__content",
            ref: "up-skeleton__wrapper__content",
            style: { "flex": "1" }
          },
          [
            $props.title ? (_openBlock(), _createElementBlock(
              "view",
              {
                key: 0,
                class: _normalizeClass(["up-skeleton__wrapper__content__title", [$props.animate ? "animate" : ""]]),
                style: _normalizeStyle({
                  width: $setup.uTitleWidth,
                  height: $setup.addUnit($props.titleHeight)
                })
              },
              null,
              6
              /* CLASS, STYLE */
            )) : _createCommentVNode("v-if", true),
            (_openBlock(true), _createElementBlock(
              _Fragment,
              null,
              _renderList($setup.rowsArray, (item, index) => {
                return _openBlock(), _createElementBlock(
                  "view",
                  {
                    class: _normalizeClass(["up-skeleton__wrapper__content__rows", [$props.animate ? "animate" : ""]]),
                    key: index,
                    style: _normalizeStyle({
                      width: item["width"],
                      height: item["height"],
                      marginTop: item["marginTop"]
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          512
          /* NEED_PATCH */
        )
      ],
      512
      /* NEED_PATCH */
    )) : _renderSlot(_ctx.$slots, "default", { key: 1 })
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-skeleton/up-skeleton.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-skeleton.js.map
