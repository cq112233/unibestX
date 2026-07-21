import { _ as __easycom_0 } from "../up-icon/up-icon.js";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, normalizeStyle, createElementVNode, withModifiers, Fragment, renderList, normalizeClass, createVNode, createCommentVNode } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { p as propsRate } from "./props.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { i as guid, b as addStyle, a as addUnit, s as sleep, o as os, d as range } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = defineComponent({
  name: "up-rate",
  mixins: [mpMixin, mixin, propsRate],
  data() {
    return {
      // 生成一个唯一id，否则一个页面多个评分组件，会造成冲突
      elId: guid(),
      elClass: guid(),
      rateBoxLeft: 0,
      activeIndex: 0,
      rateWidth: 0,
      // 标识是否正在滑动，由于iOS事件上touch比click先触发，导致快速滑动结束后，接着触发click，导致事件混乱而出错
      moving: false
    };
  },
  mounted() {
    const modelVal = this.modelValue == null ? 0 : parseFloat(this.modelValue.toString());
    const minCount = this.minCount == null ? 0 : parseFloat(this.minCount.toString());
    const defaultActive = isNaN(minCount) ? 0 : minCount;
    this.activeIndex = isNaN(modelVal) ? defaultActive : modelVal == 0 ? defaultActive : modelVal;
  },
  watch: {
    modelValue(val) {
      this.activeIndex = this.normalizeActiveIndex(val);
    }
    // activeIndex: 'emitEvent'
  },
  emits: ["update:modelValue", "change"],
  methods: {
    addStyle(e = null) {
      return addStyle(e);
    },
    addUnit(e = null) {
      return addUnit(e);
    },
    toNumber(value = null, fallback = 0) {
      if (value == null)
        return fallback;
      const num = parseFloat(value.toString());
      return isNaN(num) ? fallback : num;
    },
    getMinCountValue() {
      return this.toNumber(this.minCount, 0);
    },
    getCountValue() {
      return this.toNumber(this.count, 0);
    },
    normalizeActiveIndex(value = null) {
      let normalized = this.toNumber(value, this.getMinCountValue());
      const minCount = this.getMinCountValue();
      const count = this.getCountValue();
      if (normalized < minCount)
        normalized = minCount;
      if (count > 0 && normalized > count)
        normalized = count;
      return normalized;
    },
    getFallbackRateWidth() {
      const size = this.toNumber(this.size, 18);
      const gutter = this.toNumber(this.gutter, 0);
      const width = size + gutter;
      return width > 0 ? width : 18;
    },
    ensureRateMetrics() {
      if (isNaN(this.rateBoxLeft)) {
        this.rateBoxLeft = 0;
      }
      if (isNaN(this.rateWidth) || this.rateWidth <= 0) {
        this.rateWidth = this.getFallbackRateWidth();
        this.getRateIconWrapRect();
      }
      return !isNaN(this.rateWidth) && this.rateWidth > 0;
    },
    init() {
      this.activeIndex = this.normalizeActiveIndex(this.modelValue);
      sleep().then(() => {
        this.getRateItemRect();
        this.getRateIconWrapRect();
      });
    },
    // 获取评分组件盒子的布局信息
    async getRateItemRect() {
      await sleep();
      this.upGetRect("#" + this.elId).then((res) => {
        var _a;
        const left = (_a = res.left) !== null && _a !== void 0 ? _a : NaN;
        if (!isNaN(left)) {
          this.rateBoxLeft = left;
        }
      });
    },
    // 获取单个星星的尺寸
    getRateIconWrapRect() {
      this.$uGetRect("." + this.elClass).then((res) => {
        var _a;
        const width = (_a = res.width) !== null && _a !== void 0 ? _a : NaN;
        if (!isNaN(width) && width > 0) {
          this.rateWidth = width;
        }
      });
    },
    // 手指滑动
    touchMove(e) {
      if (!this.touchable) {
        return null;
      }
      this.preventEvent(e);
      this.ensureRateMetrics();
      const x = e.changedTouches[0].pageX;
      this.getActiveIndex(x);
    },
    // 停止滑动
    touchEnd(e) {
      if (!this.touchable) {
        return null;
      }
      this.preventEvent(e);
      this.ensureRateMetrics();
      const x = e.changedTouches[0].pageX;
      this.getActiveIndex(x);
    },
    // 通过点击，直接选中
    clickHandler(e = null, index) {
      let ee = e;
      if (os() === "ios" && this.moving) {
        return null;
      }
      this.preventEvent(ee);
      this.ensureRateMetrics();
      let x = 0;
      x = ee.pageX;
      this.getActiveIndex(x, true);
    },
    // 发出事件
    emitEvent() {
      const normalizedValue = this.normalizeActiveIndex(this.activeIndex != null ? this.activeIndex : 0);
      if (this.activeIndex == null || normalizedValue != this.activeIndex) {
        this.activeIndex = normalizedValue;
        return null;
      }
      this.$emit("change", normalizedValue);
      this.$emit("update:modelValue", normalizedValue);
    },
    // 获取当前激活的评分图标
    getActiveIndex(x, isClick = false) {
      if (this.disabled || this.readonly) {
        return null;
      }
      if (!this.ensureRateMetrics()) {
        return null;
      }
      const count = this.getCountValue();
      if (count <= 0 || isNaN(x)) {
        return null;
      }
      const allRateWidth = this.rateWidth * count + this.rateBoxLeft;
      x = range(this.rateBoxLeft, allRateWidth, x) - this.rateBoxLeft;
      const distance = x;
      let index = 0;
      if (this.allowHalf) {
        index = Math.floor(distance / this.rateWidth);
        const decimal = distance % this.rateWidth;
        if (decimal <= this.rateWidth / 2 && decimal > 0) {
          index += 0.5;
        } else if (decimal > this.rateWidth / 2) {
          index++;
        }
      } else {
        index = Math.floor(distance / this.rateWidth);
        const decimal = distance % this.rateWidth;
        if (isClick) {
          if (decimal > 0)
            index++;
        } else {
          if (decimal > this.rateWidth / 2)
            index++;
        }
      }
      this.activeIndex = this.normalizeActiveIndex(Math.min(index, count));
      if (this.activeIndex < this.getMinCountValue()) {
        this.activeIndex = this.getMinCountValue();
      }
      setTimeout(() => {
        this.moving = true;
      }, 10);
      setTimeout(() => {
        this.moving = false;
      }, 10);
    }
  },
  mounted() {
    this.init();
  }
});
const _style_0 = { "up-rate": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } }, "up-rate__content": { "": { "display": "flex", "flexDirection": "row" } }, "up-rate__content__item": { "": { "position": "relative" } }, "up-rate__content__item__icon-wrap--half": { "": { "position": "absolute", "overflow": "hidden", "top": 0, "left": 0 } }, "up-icon": { "": { "boxSizing": "border-box" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  return openBlock(), createElementBlock("view", {
    class: "up-rate",
    id: $data.elId,
    ref: "up-rate",
    style: normalizeStyle([$options.addStyle(_ctx.customStyle)])
  }, [
    createElementVNode(
      "view",
      {
        class: "up-rate__content",
        onTouchmove: _cache[0] || (_cache[0] = withModifiers((...args) => $options.touchMove && $options.touchMove(...args), ["stop"])),
        onTouchend: _cache[1] || (_cache[1] = withModifiers((...args) => $options.touchEnd && $options.touchEnd(...args), ["stop"]))
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(parseInt(_ctx.count.toString()), (item, index) => {
            return openBlock(), createElementBlock(
              "view",
              {
                class: normalizeClass(["up-rate__content__item cursor-pointer", [$data.elClass]]),
                key: index
              },
              [
                createElementVNode("view", {
                  class: "up-rate__content__item__icon-wrap",
                  ref_for: true,
                  ref: "up-rate__content__item__icon-wrap",
                  onClick: withModifiers(($event) => $options.clickHandler($event, index + 1), ["stop"])
                }, [
                  createVNode(_component_up_icon, {
                    name: Math.floor(parseFloat($data.activeIndex.toString())) > index ? _ctx.activeIcon : _ctx.inactiveIcon,
                    color: _ctx.disabled ? "#c8c9cc" : Math.floor(parseFloat($data.activeIndex.toString())) > index ? _ctx.activeColor === "#FA3534" ? "primary" : _ctx.activeColor : _ctx.inactiveColor,
                    "custom-style": {
                      padding: `0 ${$options.addUnit(parseInt(_ctx.gutter.toString()) / 2)}`
                    },
                    size: _ctx.size
                  }, null, 8, ["name", "color", "custom-style", "size"])
                ], 8, ["onClick"]),
                _ctx.allowHalf ? (openBlock(), createElementBlock("view", {
                  key: 0,
                  onClick: withModifiers(($event) => $options.clickHandler($event, index + 1), ["stop"]),
                  class: "up-rate__content__item__icon-wrap up-rate__content__item__icon-wrap--half",
                  style: normalizeStyle([{
                    width: $options.addUnit($data.rateWidth / 2)
                  }]),
                  ref_for: true,
                  ref: "up-rate__content__item__icon-wrap"
                }, [
                  createVNode(_component_up_icon, {
                    name: Math.floor(parseFloat($data.activeIndex.toString())) > index ? _ctx.activeIcon : _ctx.inactiveIcon,
                    color: _ctx.disabled ? "#c8c9cc" : Math.ceil(parseFloat($data.activeIndex.toString())) > index ? _ctx.activeColor === "#FA3534" ? "primary" : _ctx.activeColor : _ctx.inactiveColor,
                    "custom-style": {
                      padding: `0 ${$options.addUnit(parseInt(_ctx.gutter.toString()) / 2)}`
                    },
                    size: _ctx.size
                  }, null, 8, ["name", "color", "custom-style", "size"])
                ], 12, ["onClick"])) : createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      32
      /* NEED_HYDRATION */
    )
  ], 12, ["id"]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-rate/up-rate.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-rate.js.map
