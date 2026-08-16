import { p as propsSkeleton } from "./props.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { a as addUnit, s as sleep } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent } = globalThis.Vue;
const _sfc_main = defineComponent({
  name: "up-skeleton",
  mixins: [mpMixin, mixin, propsSkeleton],
  data() {
    return {
      width: 0
    };
  },
  watch: {
    loading: {
      handler: function() {
        this.getComponentWidth();
      }
    }
  },
  computed: {
    rowsArray() {
      var _a, _b;
      const rows = [];
      const rowCount = parseInt(this.rows.toString());
      const rWidth = this.rowsWidth;
      const rHeight = this.rowsHeight;
      for (let i = 0; i < rowCount; i++) {
        let item = new UTSJSONObject(
          {}
          // 需要预防超出数组边界的情况
        );
        let rowWidth = "";
        if (UTS.isInstanceOf(rWidth, Array)) {
          const rWidthArr = rWidth;
          if (i == rowCount - 1) {
            rowWidth = "70%";
          } else {
            rowWidth = rWidthArr[i] != null ? (_a = rWidthArr[i]) !== null && _a !== void 0 ? _a : "0px" : i == rWidthArr.length ? "70%" : "100%";
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
        if (!this.title && i == 0) {
          item["marginTop"] = "0px";
        } else if (this.title && i == 0) {
          item["marginTop"] = "20px";
        } else {
          item["marginTop"] = "12px";
        }
        item["width"] = addUnit(rowWidth);
        item["height"] = addUnit(rowHeight);
        rows.push(item);
      }
      return rows;
    },
    uTitleWidth() {
      let tWidth = "0px";
      tWidth = addUnit(this.titleWidth);
      return addUnit(tWidth);
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    addUnit(e = null) {
      return addUnit(e);
    },
    init() {
      this.getComponentWidth();
    },
    // 获取组件的宽度
    async getComponentWidth() {
      await sleep(20);
    }
  }
});
const _style_0 = { "up-skeleton": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-skeleton__wrapper": { "": { "display": "flex", "flexDirection": "row" } }, "up-skeleton__wrapper__avatar": { "": { "backgroundColor": "#F1F2F4", "marginRight": 15 } }, "up-skeleton__wrapper__avatar--circle": { "": { "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100 } }, "up-skeleton__wrapper__avatar--square": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "up-skeleton__wrapper__content": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-skeleton__wrapper__content__rows": { "": { "backgroundColor": "#F1F2F4", "borderTopLeftRadius": 3, "borderTopRightRadius": 3, "borderBottomRightRadius": 3, "borderBottomLeftRadius": 3 } }, "up-skeleton__wrapper__content__title": { "": { "backgroundColor": "#F1F2F4", "borderTopLeftRadius": 3, "borderTopRightRadius": 3, "borderBottomRightRadius": 3, "borderBottomLeftRadius": 3 } } };
const { normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, renderList: _renderList, Fragment: _Fragment, createElementVNode: _createElementVNode, renderSlot: _renderSlot } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("view", { class: "up-skeleton" }, [
    _ctx.loading ? (_openBlock(), _createElementBlock(
      "view",
      {
        key: 0,
        class: "up-skeleton__wrapper",
        ref: "up-skeleton__wrapper",
        style: { "display": "flex", "flex-direction": "row" }
      },
      [
        _ctx.avatar ? (_openBlock(), _createElementBlock(
          "view",
          {
            key: 0,
            class: _normalizeClass(["up-skeleton__wrapper__avatar", [`up-skeleton__wrapper__avatar--${_ctx.avatarShape}`, _ctx.animate ? "animate" : ""]]),
            style: _normalizeStyle({
              height: $options.addUnit(_ctx.avatarSize),
              width: $options.addUnit(_ctx.avatarSize)
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
            _ctx.title ? (_openBlock(), _createElementBlock(
              "view",
              {
                key: 0,
                class: _normalizeClass(["up-skeleton__wrapper__content__title", [_ctx.animate ? "animate" : ""]]),
                style: _normalizeStyle({
                  width: $options.uTitleWidth,
                  height: $options.addUnit(_ctx.titleHeight)
                })
              },
              null,
              6
              /* CLASS, STYLE */
            )) : _createCommentVNode("v-if", true),
            (_openBlock(true), _createElementBlock(
              _Fragment,
              null,
              _renderList($options.rowsArray, (item, index) => {
                return _openBlock(), _createElementBlock(
                  "view",
                  {
                    class: _normalizeClass(["up-skeleton__wrapper__content__rows", [_ctx.animate ? "animate" : ""]]),
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
