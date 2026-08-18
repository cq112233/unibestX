"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-skeleton"
}, { __name: "up-skeleton", props: {
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
}, setup(__props) {
  const props = __props;
  const rowsArray = common_vendor.computed(() => {
    var _a, _b;
    const rows = [];
    const rowCount = parseInt(props.rows.toString());
    const rWidth = props.rowsWidth;
    const rHeight = props.rowsHeight;
    for (let i = 0; i < rowCount; i++) {
      let item = new common_vendor.UTSJSONObject({});
      let rowWidth = "";
      if (common_vendor.UTS.isInstanceOf(rWidth, Array)) {
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
      if (common_vendor.UTS.isInstanceOf(rHeight, Array)) {
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
      item["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(rowWidth);
      item["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(rowHeight);
      rows.push(item);
    }
    return rows;
  });
  const uTitleWidth = common_vendor.computed(() => {
    let tWidth = "0px";
    tWidth = uni_modules_uviewUltra_libs_function_index.addUnit(props.titleWidth);
    return uni_modules_uviewUltra_libs_function_index.addUnit(tWidth);
  });
  const avatarStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      height: uni_modules_uviewUltra_libs_function_index.addUnit(props.avatarSize),
      width: uni_modules_uviewUltra_libs_function_index.addUnit(props.avatarSize)
    });
  });
  const titleStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      width: uTitleWidth.value,
      height: uni_modules_uviewUltra_libs_function_index.addUnit(props.titleHeight)
    });
  });
  function getRowStyle(item) {
    return new common_vendor.UTSJSONObject({
      width: item["width"],
      height: item["height"],
      marginTop: item["marginTop"]
    });
  }
  function getComponentWidth() {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      yield uni_modules_uviewUltra_libs_function_index.sleep(20);
    });
  }
  common_vendor.onMounted(() => {
    getComponentWidth();
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.loading
    }, __props.loading ? common_vendor.e({
      b: __props.avatar
    }, __props.avatar ? {
      c: common_vendor.n(`up-skeleton__wrapper__avatar--${__props.avatarShape}`),
      d: common_vendor.n(__props.animate ? "animate" : ""),
      e: common_vendor.s(avatarStyle.value)
    } : {}, {
      f: __props.title
    }, __props.title ? {
      g: common_vendor.s(titleStyle.value),
      h: common_vendor.n(__props.animate ? "animate" : "")
    } : {}, {
      i: common_vendor.f(rowsArray.value, (item, index, i0) => {
        return {
          a: index,
          b: common_vendor.s(getRowStyle(item))
        };
      }),
      j: common_vendor.n(__props.animate ? "animate" : ""),
      k: common_vendor.sei("r0-74533145", "view", "up-skeleton__wrapper__content"),
      l: common_vendor.sei("r1-74533145", "view", "up-skeleton__wrapper")
    }) : {}, {
      m: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      n: `${_ctx.u_s_b_h}px`,
      o: `${_ctx.u_s_a_i_b}px`,
      p: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-74533145"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-skeleton/up-skeleton.js.map
