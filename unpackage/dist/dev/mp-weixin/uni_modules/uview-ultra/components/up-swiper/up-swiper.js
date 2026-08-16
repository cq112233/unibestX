"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("./swiper.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_function_test = require("../../libs/function/test.js");
if (!Array) {
  const _easycom_up_loading_icon_1 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_swiper_indicator_1 = common_vendor.resolveComponent("up-swiper-indicator");
  (_easycom_up_loading_icon_1 + _easycom_up_swiper_indicator_1)();
}
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
const _easycom_up_swiper_indicator = () => "../up-swiper-indicator/up-swiper-indicator.js";
if (!Math) {
  (_easycom_up_loading_icon + _easycom_up_swiper_indicator)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-swiper"
}, { __name: "up-swiper", props: {
  list: {
    type: Array,
    default: () => {
      return [];
    }
  },
  indicator: {
    type: Boolean,
    default: false
  },
  indicatorActiveColor: {
    type: String,
    default: "#FFFFFF"
  },
  indicatorInactiveColor: {
    type: String,
    default: "rgba(255, 255, 255, 0.35)"
  },
  indicatorStyle: {
    type: [String, Object],
    default: ""
  },
  indicatorMode: {
    type: String,
    default: "line"
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  current: {
    type: [String, Number],
    default: 0
  },
  currentItemId: {
    type: String,
    default: ""
  },
  interval: {
    type: [String, Number],
    default: 3e3
  },
  duration: {
    type: [String, Number],
    default: 300
  },
  circular: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  },
  previousMargin: {
    type: [String, Number],
    default: 0
  },
  nextMargin: {
    type: [String, Number],
    default: 0
  },
  acceleration: {
    type: Boolean,
    default: false
  },
  displayMultipleItems: {
    type: Number,
    default: 1
  },
  easingFunction: {
    type: String,
    default: "default"
  },
  keyName: {
    type: String,
    default: "url"
  },
  imgMode: {
    type: String,
    default: "aspectFill"
  },
  height: {
    type: [String, Number],
    default: 130
  },
  bgColor: {
    type: String,
    default: "#f3f4f6"
  },
  radius: {
    type: [String, Number],
    default: 4
  },
  loading: {
    type: Boolean,
    default: false
  },
  showTitle: {
    type: Boolean,
    default: false
  }
}, emits: ["click", "change", "update:current"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const currentIndex = common_vendor.ref(0);
  common_vendor.watch(() => {
    return props.current;
  }, (val = null, preVal = null) => {
    if (val == preVal)
      return null;
    currentIndex.value = parseInt(val.toString());
  });
  function itemStyle(index) {
    const style = new common_vendor.UTSJSONObject({});
    if (props.nextMargin.toString() != "" && props.previousMargin.toString() != "") {
      style["borderRadius"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.radius);
      if (index !== currentIndex.value) {
        style["transform"] = "scale(0.92)";
      }
    }
    return style;
  }
  function getItemType(item = null) {
    if (item == null)
      return "";
    if (typeof item === "string")
      return uni_modules_uviewUltra_libs_function_test.video(getSource(item)) ? "video" : "image";
    if (typeof item === "object" && props.keyName != "") {
      const obj = item;
      if (obj["type"] == null)
        return uni_modules_uviewUltra_libs_function_test.video(getSource(item)) ? "video" : "image";
      if (obj["type"] === "image")
        return "image";
      if (obj["type"] === "video")
        return "video";
      return "image";
    }
    return "image";
  }
  function getSource(item = null) {
    var _a2, _b;
    let src = "";
    if (typeof item === "string") {
      src = item;
    } else if (typeof item === "object" && props.keyName != "") {
      const obj = item;
      src = (_b = (_a2 = obj[props.keyName]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
    } else {
      uni_modules_uviewUltra_libs_function_index.error("请按格式传递列表参数");
      return "";
    }
    return src;
  }
  function getItemTitle(item = null) {
    var _a2, _b;
    if (typeof item === "string")
      return item;
    if (typeof item === "object") {
      const obj = item;
      return (_b = (_a2 = obj["title"]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
    } else {
      uni_modules_uviewUltra_libs_function_index.error("请按格式传递列表参数");
    }
    return "";
  }
  function pauseVideo(index) {
    const lastItem = getSource(props.list[index]);
    if (uni_modules_uviewUltra_libs_function_test.video(lastItem)) {
      const video = common_vendor.index.createVideoContext(`video-${index}`);
      video === null || video === void 0 ? null : video.pause();
    }
  }
  function change(e) {
    const current = e.detail.current;
    pauseVideo(currentIndex.value);
    currentIndex.value = current;
    emit("update:current", currentIndex.value);
    emit("change", e.detail);
  }
  function getPoster(item = null) {
    var _a2, _b;
    if (typeof item === "object") {
      const obj = item;
      return (_b = (_a2 = obj["poster"]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
    }
    return "";
  }
  function clickHandler(index) {
    emit("click", index);
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.loading
    }, __props.loading ? {
      b: common_vendor.p({
        mode: "circle",
        class: "data-v-619ca3d4"
      })
    } : {
      c: common_vendor.f(__props.list, (item, index, i0) => {
        return common_vendor.e({
          a: getItemType(item) === "image"
        }, getItemType(item) === "image" ? {
          b: getSource(item),
          c: __props.imgMode,
          d: common_vendor.o(($event) => {
            return clickHandler(index);
          }, index),
          e: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.height),
          f: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.radius)
        } : {}, {
          g: getItemType(item) === "video"
        }, getItemType(item) === "video" ? {
          h: common_vendor.sei(`video-${index}`, "video"),
          i: getSource(item),
          j: getPoster(item),
          k: __props.showTitle && common_vendor.unref(uni_modules_uviewUltra_libs_function_test.object)(item) && getItemTitle(item) != "" ? getItemTitle(item) : "",
          l: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.height),
          m: common_vendor.o(($event) => {
            return clickHandler(index);
          }, index)
        } : {}, {
          n: __props.showTitle && getItemTitle(item) != "" && common_vendor.unref(uni_modules_uviewUltra_libs_function_test.image)(getSource(item))
        }, __props.showTitle && getItemTitle(item) != "" && common_vendor.unref(uni_modules_uviewUltra_libs_function_test.image)(getSource(item)) ? {
          o: common_vendor.t(getItemTitle(item))
        } : {}, {
          p: common_vendor.s(itemStyle(index)),
          q: "d-" + i0,
          r: common_vendor.r("d", {
            item,
            index
          }, i0),
          s: index
        });
      }),
      d: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.height),
      e: common_vendor.o(change, "ba"),
      f: __props.circular,
      g: __props.interval,
      h: __props.duration,
      i: __props.autoplay,
      j: __props.current,
      k: __props.vertical
    }, {
      l: !__props.loading && __props.indicator && !__props.showTitle
    }, !__props.loading && __props.indicator && !__props.showTitle ? {
      m: common_vendor.p({
        indicatorActiveColor: __props.indicatorActiveColor,
        indicatorInactiveColor: __props.indicatorInactiveColor,
        length: __props.list.length,
        current: currentIndex.value,
        indicatorMode: __props.indicatorMode,
        class: "data-v-619ca3d4"
      })
    } : {}, {
      n: common_vendor.s(common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addStyle)(__props.indicatorStyle)),
      o: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      p: common_vendor.s({
        backgroundColor: __props.bgColor,
        height: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.height),
        borderRadius: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.radius)
      }),
      q: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-619ca3d4"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-swiper/up-swiper.js.map
