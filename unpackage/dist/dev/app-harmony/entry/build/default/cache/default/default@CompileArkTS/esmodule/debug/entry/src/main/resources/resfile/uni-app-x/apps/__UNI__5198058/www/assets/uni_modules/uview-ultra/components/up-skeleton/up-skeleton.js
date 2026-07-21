const { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createCommentVNode, createElementVNode, Fragment, renderList, renderSlot } = globalThis.Vue
import { p as propsSkeleton } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-skeleton/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { a as addUnit, s as sleep } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
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
      for (let i = 0; i < parseInt(this.rows.toString()); i++) {
        let item = new UTSJSONObject(
          {}
          // 需要预防超出数组边界的情况
        );
        let rowWidth = "";
        if (UTS.isInstanceOf(this.rowsWidth, Array)) {
          if (i === parseInt(this.rows.toString()) - 1) {
            rowWidth = "70%";
          } else {
            rowWidth = this.rowsWidth[i] != null ? (_a = this.rowsWidth[i]) !== null && _a !== void 0 ? _a : "0px" : i === this.rowsWidth.length ? "70%" : "100%";
          }
        } else {
          if (i === parseInt(this.rows.toString()) - 1) {
            rowWidth = "70%";
          } else {
            rowWidth = this.rowsWidth.toString();
          }
        }
        let rowHeight = "";
        if (UTS.isInstanceOf(this.rowsHeight, Array)) {
          rowHeight = this.rowsHeight[i] != null ? (_b = this.rowsHeight[i]) !== null && _b !== void 0 ? _b : "0px" : "18px";
        } else {
          rowHeight = this.rowsHeight.toString();
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", { class: "up-skeleton" }, [
    _ctx.loading ? (openBlock(), createElementBlock(
      "view",
      {
        key: 0,
        class: "up-skeleton__wrapper",
        ref: "up-skeleton__wrapper",
        style: { "display": "flex", "flex-direction": "row" }
      },
      [
        _ctx.avatar ? (openBlock(), createElementBlock(
          "view",
          {
            key: 0,
            class: normalizeClass(["up-skeleton__wrapper__avatar", [`up-skeleton__wrapper__avatar--${_ctx.avatarShape}`, _ctx.animate ? "animate" : ""]]),
            style: normalizeStyle({
              height: $options.addUnit(_ctx.avatarSize),
              width: $options.addUnit(_ctx.avatarSize)
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )) : createCommentVNode("v-if", true),
        createElementVNode(
          "view",
          {
            class: "up-skeleton__wrapper__content",
            ref: "up-skeleton__wrapper__content",
            style: { "flex": "1" }
          },
          [
            _ctx.title ? (openBlock(), createElementBlock(
              "view",
              {
                key: 0,
                class: normalizeClass(["up-skeleton__wrapper__content__title", [_ctx.animate ? "animate" : ""]]),
                style: normalizeStyle({
                  width: $options.uTitleWidth,
                  height: $options.addUnit(_ctx.titleHeight)
                })
              },
              null,
              6
              /* CLASS, STYLE */
            )) : createCommentVNode("v-if", true),
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($options.rowsArray, (item, index) => {
                return openBlock(), createElementBlock(
                  "view",
                  {
                    class: normalizeClass(["up-skeleton__wrapper__content__rows", [_ctx.animate ? "animate" : ""]]),
                    key: index,
                    style: normalizeStyle({
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
    )) : renderSlot(_ctx.$slots, "default", { key: 1 })
  ]);
}
const __easycom_51 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-skeleton/up-skeleton.uvue"]]);
export {
  __easycom_51 as _
};
//# sourceMappingURL=up-skeleton.js.map
