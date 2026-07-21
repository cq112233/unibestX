import { _ as __easycom_36 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-text/up-text&";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, normalizeStyle, normalizeClass, renderSlot, createVNode, createCommentVNode } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_35 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { p as propsReadMore } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-read-more/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { i as guid, a as addUnit, g as getPx, s as sleep } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-read-more",
  mixins: [mpMixin, mixin, propsReadMore],
  data() {
    return {
      isLongContent: true,
      status: "close",
      elId: guid(),
      contentHeight: 0,
      initRetryCount: 0
      // 高度测量重试次数
    };
  },
  computed: {
    // 展开后无需阴影，收起时才需要阴影样式
    innerShadowStyle() {
      var _a, _b;
      if (this.status === "open")
        return new UTSJSONObject(
          {}
          // APP 端 linear-gradient 不渲染，替换为半透明白色背景
        );
      const appStyle = new UTSJSONObject({});
      appStyle["backgroundColor"] = "rgba(255, 255, 255, 0.85)";
      appStyle["paddingTop"] = (_a = this.shadowStyle["paddingTop"]) !== null && _a !== void 0 ? _a : "100px";
      appStyle["marginTop"] = (_b = this.shadowStyle["marginTop"]) !== null && _b !== void 0 ? _b : "-100px";
      return appStyle;
    }
  },
  mounted() {
    this.init();
  },
  emits: ["open", "close"],
  methods: {
    addUnit(e = null) {
      return addUnit(e);
    },
    getPx(e = null) {
      return getPx(e);
    },
    async init() {
      await sleep(150);
      this.getContentHeight().then((size) => {
        var _a;
        this.contentHeight = (_a = size.height) !== null && _a !== void 0 ? _a : 0;
        if (this.contentHeight <= 0) {
          this.initRetryCount = this.initRetryCount + 1;
          if (this.initRetryCount <= 3) {
            setTimeout(() => {
              this.init();
            }, 200);
          }
          return null;
        }
        if (this.contentHeight <= parseFloat(getPx(this.showHeight))) {
          this.isLongContent = false;
          this.status = "close";
        }
      });
    },
    // 获取内容的高度
    async getContentHeight() {
      return new Promise((resolve) => {
        this.upGetRect("." + this.elId).then((res) => {
          resolve(res);
        });
      });
    },
    // 展开或者收起
    toggleReadMore() {
      this.status = this.status === "close" ? "open" : "close";
      if (this.toggle == false)
        this.isLongContent = false;
      this.$emit(this.status, this.name);
    }
  }
});
const _style_0 = { "up-read-more__content": { "": { "overflow": "hidden" } }, "up-read-more__toggle": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "position": "relative" } }, "up-read-more__toggle__text": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "marginTop": 5 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_text = resolveEasycom(resolveDynamicComponent("up-text"), __easycom_36);
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_35);
  return openBlock(), createElementBlock("view", { class: "up-read-more" }, [
    createElementVNode(
      "view",
      {
        class: "up-read-more__content",
        style: normalizeStyle({
          height: $data.isLongContent && $data.status === "close" ? $options.addUnit(_ctx.showHeight) : "auto"
        })
      },
      [
        createElementVNode(
          "view",
          {
            class: normalizeClass(["up-read-more__content__inner", [$data.elId]]),
            ref: "up-read-more__content__inner"
          },
          [
            renderSlot(_ctx.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ],
      4
      /* STYLE */
    ),
    $data.isLongContent ? (openBlock(), createElementBlock(
      "view",
      {
        key: 0,
        class: "up-read-more__toggle",
        style: normalizeStyle([$options.innerShadowStyle])
      },
      [
        renderSlot(_ctx.$slots, "toggle", {}, () => [
          createElementVNode("view", {
            class: "up-read-more__toggle__text",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleReadMore && $options.toggleReadMore(...args))
          }, [
            createVNode(_component_up_text, {
              text: $data.status === "close" ? _ctx.closeText : _ctx.openText,
              color: _ctx.color,
              size: _ctx.fontSize,
              lineHeight: _ctx.fontSize,
              margin: "0 5px 0 0"
            }, null, 8, ["text", "color", "size", "lineHeight"]),
            createElementVNode("view", { class: "up-read-more__toggle__icon" }, [
              createVNode(_component_up_icon, {
                color: _ctx.color,
                size: parseInt($options.getPx(_ctx.fontSize)) + 2,
                name: $data.status === "close" ? "arrow-down" : "arrow-up"
              }, null, 8, ["color", "size", "name"])
            ])
          ])
        ])
      ],
      4
      /* STYLE */
    )) : createCommentVNode("v-if", true)
  ]);
}
const __easycom_20 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-read-more/up-read-more.uvue"]]);
export {
  __easycom_20 as _
};
//# sourceMappingURL=up-read-more.js.map
