"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upSwiper_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_function_test = require("../../libs/function/test.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-swiper",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upSwiper_props.propsSwiper],
  data() {
    return {
      currentIndex: 0
    };
  },
  watch: {
    current(val, preVal) {
      if (val === preVal)
        return null;
      this.currentIndex = val;
    }
  },
  emits: ["click", "change", "update:current"],
  computed: {},
  methods: {
    addStyle(val = null) {
      return uni_modules_uviewUltra_libs_function_index.addStyle(val);
    },
    addUnit(val = null) {
      return uni_modules_uviewUltra_libs_function_index.addUnit(val);
    },
    itemStyle(index) {
      const style = new UTSJSONObject(
        {}
        // 左右流出空间的写法不支持nvue和头条
        // 只有配置了此二值，才加上对应的圆角，以及缩放
      );
      if (this.nextMargin != "" && this.previousMargin != "") {
        style["borderRadius"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.radius);
        if (index !== this.currentIndex)
          style["transform"] = "scale(0.92)";
      }
      return style;
    },
    testObject(e = null) {
      return uni_modules_uviewUltra_libs_function_test.object(e);
    },
    testImage(e) {
      return uni_modules_uviewUltra_libs_function_test.image(e);
    },
    getItemType(item = null) {
      if (item == null)
        return "";
      if (typeof item === "string")
        return uni_modules_uviewUltra_libs_function_test.video(this.getSource(item)) ? "video" : "image";
      if (typeof item === "object" && this.keyName != "") {
        item = item;
        if (item["type"] == null)
          return uni_modules_uviewUltra_libs_function_test.video(this.getSource(item)) ? "video" : "image";
        if (item["type"] === "image")
          return "image";
        if (item["type"] === "video")
          return "video";
        return "image";
      }
      return "image";
    },
    // 获取目标路径，可能数组中为字符串，对象的形式，额外可指定对象的目标属性名keyName
    getSource(item = null) {
      let src = "";
      if (typeof item === "string")
        src = item;
      else if (typeof item === "object" && this.keyName != "") {
        item = item;
        src = item[this.keyName].toString();
      } else {
        uni_modules_uviewUltra_libs_function_index.error("请按格式传递列表参数");
        return "";
      }
      return src;
    },
    getItemTitle(item = null) {
      if (typeof item === "string")
        return item;
      if (typeof item === "object") {
        item = item;
        return item["title"].toString();
      } else
        uni_modules_uviewUltra_libs_function_index.error("请按格式传递列表参数");
      return "";
    },
    // 轮播切换事件
    change(e) {
      const current = e.detail.current;
      this.pauseVideo(this.currentIndex);
      this.currentIndex = current;
      this.$emit("update:current", this.currentIndex);
      this.$emit("change", e.detail);
    },
    // 切换轮播时，暂停视频播放
    pauseVideo(index) {
      const lastItem = this.getSource(this.list[index]);
      if (uni_modules_uviewUltra_libs_function_test.video(lastItem)) {
        const video = common_vendor.index.createVideoContext(`video-${index}`, this);
        video.pause();
      }
    },
    // 当一个轮播item为视频时，获取它的视频海报
    getPoster(item = null) {
      if (typeof item === "object") {
        item = item;
        return item["poster"].toString() != "" ? item["poster"].toString() : "";
      }
      return "";
    },
    // 点击某个item
    clickHandler(index) {
      this.$emit("click", index);
    }
  }
});
if (!Array) {
  const _easycom_up_loading_icon2 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_swiper_indicator2 = common_vendor.resolveComponent("up-swiper-indicator");
  (_easycom_up_loading_icon2 + _easycom_up_swiper_indicator2)();
}
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
const _easycom_up_swiper_indicator = () => "../up-swiper-indicator/up-swiper-indicator.js";
if (!Math) {
  (_easycom_up_loading_icon + _easycom_up_swiper_indicator)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: _ctx.loading
  }, _ctx.loading ? {
    b: common_vendor.p({
      mode: "circle",
      class: "data-v-619ca3d4"
    })
  } : {
    c: common_vendor.f(_ctx.list, (item, index, i0) => {
      return common_vendor.e({
        a: $options.getItemType(item) === "image"
      }, $options.getItemType(item) === "image" ? {
        b: $options.getSource(item),
        c: _ctx.imgMode,
        d: common_vendor.o(($event) => $options.clickHandler(index), index),
        e: $options.addUnit(_ctx.height),
        f: $options.addUnit(_ctx.radius)
      } : {}, {
        g: $options.getItemType(item) === "video"
      }, $options.getItemType(item) === "video" ? {
        h: common_vendor.sei(`video-${index}`, "video"),
        i: $options.getSource(item),
        j: $options.getPoster(item),
        k: _ctx.showTitle && $options.testObject(item) && $options.getItemTitle(item) != "" ? $options.getItemTitle(item) : "",
        l: $options.addUnit(_ctx.height),
        m: common_vendor.o(($event) => $options.clickHandler(index), index)
      } : {}, {
        n: _ctx.showTitle && $options.getItemTitle(item) != "" && $options.testImage($options.getSource(item))
      }, _ctx.showTitle && $options.getItemTitle(item) != "" && $options.testImage($options.getSource(item)) ? {
        o: common_vendor.t($options.getItemTitle(item))
      } : {}, {
        p: common_vendor.s($options.itemStyle(index)),
        q: "d-" + i0,
        r: common_vendor.r("d", {
          item,
          index
        }, i0),
        s: index
      });
    }),
    d: $options.addUnit(_ctx.height),
    e: common_vendor.o((...args) => $options.change && $options.change(...args), "ff"),
    f: _ctx.circular,
    g: _ctx.interval,
    h: _ctx.duration,
    i: _ctx.autoplay,
    j: _ctx.current,
    k: _ctx.vertical
  }, {
    l: !_ctx.loading && _ctx.indicator && !_ctx.showTitle
  }, !_ctx.loading && _ctx.indicator && !_ctx.showTitle ? {
    m: common_vendor.p({
      indicatorActiveColor: _ctx.indicatorActiveColor,
      indicatorInactiveColor: _ctx.indicatorInactiveColor,
      length: _ctx.list.length,
      current: $data.currentIndex,
      indicatorMode: _ctx.indicatorMode,
      class: "data-v-619ca3d4"
    })
  } : {}, {
    n: common_vendor.s($options.addStyle(_ctx.indicatorStyle)),
    o: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    p: common_vendor.s({
      backgroundColor: _ctx.bgColor,
      height: $options.addUnit(_ctx.height),
      borderRadius: $options.addUnit(_ctx.radius)
    }),
    q: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-619ca3d4"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-swiper/up-swiper.js.map
