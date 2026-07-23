"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upStepsItem_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_config_color = require("../../libs/config/color.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-steps-item",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upStepsItem_props.propsStepsItem],
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
        style["backgroundColor"] = uni_modules_uviewUltra_libs_config_color.color["error"];
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
          style["backgroundColor"] = uni_modules_uviewUltra_libs_config_color.color["error"];
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
          style["borderColor"] = uni_modules_uviewUltra_libs_config_color.color["error"];
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
      return new UTSJSONObject(Object.assign({}, this.itemStyle));
    },
    statusClass() {
      let index = this.index;
      let error = this.error;
      let current = parseInt(this.parentData["current"].toString());
      if (current == index) {
        return error == true ? "error" : "process";
      } else if (error) {
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
          colorTmp = uni_modules_uviewUltra_libs_config_color.color["error"];
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
        return uni_modules_uviewUltra_libs_function_index.error("up-steps-item必须要搭配up-steps组件使用");
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
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_text2 = common_vendor.resolveComponent("up-text");
  (_easycom_up_icon2 + _easycom_up_text2)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_text = () => "../up-text/up-text.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_text)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: common_vendor.n(`up-steps-item__line--${$data.parentData["direction"]}`),
    b: common_vendor.n($data.index < parseInt($data.parentData["current"].toString()) && $data.parentData["activeColor"] == "#3c9cff" ? "up-steps-item__line--active" : ""),
    c: common_vendor.s($options.lineStyle),
    d: common_vendor.n(`up-steps-item__line--${$data.parentData["direction"]}`),
    e: common_vendor.n($data.index - 1 < parseInt($data.parentData["current"].toString()) && $data.parentData["activeColor"] == "#3c9cff" ? "up-steps-item__line--active" : ""),
    f: common_vendor.s($options.lineStyle2),
    g: $data.parentData["dot"] != null && $data.parentData["dot"]
  }, $data.parentData["dot"] != null && $data.parentData["dot"] ? {
    h: common_vendor.n($options.statusClass === "finish" || $options.statusClass === "process" ? "up-steps-item__wrapper__dot--active" : ""),
    i: common_vendor.s($options.dotStyle)
  } : $data.parentData["activeIcon"] != "" || $data.parentData["inactiveIcon"] != "" ? {
    k: common_vendor.p({
      name: $data.index <= parseInt($data.parentData["current"].toString()) ? $data.parentData["activeIcon"] : $data.parentData["inactiveIcon"],
      size: _ctx.iconSize,
      color: $data.index <= parseInt($data.parentData["current"].toString()) ? $data.parentData["activeColor"] == "#3c9cff" ? "primary" : $data.parentData["activeColor"] : $data.parentData["inactiveColor"],
      class: "data-v-be09750b"
    })
  } : common_vendor.e({
    l: $options.statusClass === "process" || $options.statusClass === "wait"
  }, $options.statusClass === "process" || $options.statusClass === "wait" ? {
    m: common_vendor.t($data.index + 1),
    n: common_vendor.n($options.statusClass === "process" ? "up-steps-item__wrapper__circle__text--active" : ""),
    o: common_vendor.s($options.circleTextStyle)
  } : {
    p: common_vendor.p({
      color: $options.statusClass === "error" ? "error" : $data.parentData["activeColor"] == "#3c9cff" ? "primary" : $data.parentData["activeColor"],
      size: "12",
      name: $options.statusClass === "error" ? "close" : "checkmark",
      class: "data-v-be09750b"
    })
  }, {
    q: common_vendor.n($options.statusClass === "process" ? "up-steps-item__wrapper__circle--active" : ""),
    r: common_vendor.n($options.statusClass === "finish" ? "up-steps-item__wrapper__circle--finish" : ""),
    s: common_vendor.n($options.statusClass === "wait" ? "up-steps-item__wrapper__circle--wait" : ""),
    t: common_vendor.n($options.statusClass === "error" ? "up-steps-item__wrapper__circle--error" : ""),
    v: common_vendor.s($options.circleStyle)
  }), {
    j: $data.parentData["activeIcon"] != "" || $data.parentData["inactiveIcon"] != "",
    w: common_vendor.n(`up-steps-item__wrapper--${$data.parentData["direction"]}`),
    x: common_vendor.n($data.parentData["dot"] != null && $data.parentData["dot"] ? `up-steps-item__wrapper--${$data.parentData["direction"]}--dot` : ""),
    y: common_vendor.s($options.itemStyleInner),
    z: common_vendor.r("content", {
      index: $data.index
    }),
    A: _ctx.$slots["content"] == null
  }, _ctx.$slots["content"] == null ? common_vendor.e({
    B: _ctx.$slots["title"] == null
  }, _ctx.$slots["title"] == null ? {
    C: common_vendor.p({
      text: _ctx.title,
      lineHeight: "20px",
      color: parseInt($data.parentData["current"].toString()) == $data.index ? $data.parentData["activeColor"] == "#3c9cff" ? "" : $data.parentData["activeColor"] : $data.parentData["inactiveColor"],
      type: parseInt($data.parentData["current"].toString()) == $data.index && $data.parentData["activeColor"] == "#3c9cff" ? "primary" : "default",
      size: parseInt($data.parentData["current"].toString()) == $data.index ? 14 : 13,
      class: "data-v-be09750b"
    })
  } : {}, {
    D: _ctx.$slots["desc"] == null
  }, _ctx.$slots["desc"] == null ? {
    E: common_vendor.p({
      text: _ctx.desc,
      type: "tips",
      size: "12",
      class: "data-v-be09750b"
    })
  } : {}) : {}, {
    F: common_vendor.n(`up-steps-item__content--${$data.parentData["direction"]}`),
    G: common_vendor.n(parseInt($data.parentData["current"].toString()) == $data.index ? "up-steps-item__content--current" : ""),
    H: common_vendor.s($options.contentStyle),
    I: common_vendor.sei(common_vendor.gei(_ctx, "", "r0-be09750b"), "view", "up-steps-item"),
    J: common_vendor.n(`up-steps-item--${$data.parentData["direction"]}`),
    K: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
    L: common_vendor.s($options.itemWidthStyle),
    M: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-be09750b"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-steps-item/up-steps-item.js.map
