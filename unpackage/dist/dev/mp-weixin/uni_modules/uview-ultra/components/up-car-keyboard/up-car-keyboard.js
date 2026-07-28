"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/composable/useUltraUI.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_components_upCarKeyboard_carKeyboard = require("./carKeyboard.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon_1();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-car-keyboard"
}, { __name: "up-car-keyboard", props: {
  // 是否打乱键盘的顺序
  random: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCarKeyboard_carKeyboard.defProps.getBoolean("carKeyboard.random")
  },
  // 是否自动切换到英文
  autoChange: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCarKeyboard_carKeyboard.defProps.getBoolean("carKeyboard.autoChange")
  }
}, emits: ["change", "backspace"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const abc = common_vendor.ref(false);
  const timer = common_vendor.ref(null);
  const areaList = common_vendor.computed(() => {
    let data = [
      "京",
      "沪",
      "粤",
      "津",
      "冀",
      "豫",
      "云",
      "辽",
      "黑",
      "湘",
      "皖",
      "鲁",
      "苏",
      "浙",
      "赣",
      "鄂",
      "桂",
      "甘",
      "晋",
      "陕",
      "蒙",
      "吉",
      "闽",
      "贵",
      "渝",
      "川",
      "青",
      "琼",
      "宁",
      "挂",
      "藏",
      "港",
      "澳",
      "新",
      "使",
      "学"
    ];
    let tmp = [];
    if (props.random)
      data = uni_modules_uviewUltra_libs_function_index.randomArray(data);
    tmp.push(data.slice(0, 10));
    tmp.push(data.slice(10, 20));
    tmp.push(data.slice(20, 30));
    tmp.push(data.slice(30, 36));
    return tmp;
  });
  const engKeyBoardList = common_vendor.computed(() => {
    let data = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      0,
      "Q",
      "W",
      "E",
      "R",
      "T",
      "Y",
      "U",
      "I",
      "O",
      "P",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      "Z",
      "X",
      "C",
      "V",
      "B",
      "N",
      "M"
    ];
    let tmp = [];
    if (props.random)
      data = uni_modules_uviewUltra_libs_function_index.randomArray(data);
    tmp.push(data.slice(0, 10));
    tmp.push(data.slice(10, 20));
    tmp.push(data.slice(20, 30));
    tmp.push(data.slice(30, 36));
    return tmp;
  });
  const carInputClick = (i, j) => {
    let value = "";
    if (abc.value) {
      value = engKeyBoardList.value[i][j];
    } else {
      value = areaList.value[i][j];
    }
    if (!abc.value && props.autoChange) {
      uni_modules_uviewUltra_libs_function_index.sleep(200).then(() => {
        abc.value = true;
      });
    }
    emit("change", value);
  };
  const changeCarInputMode = () => {
    abc.value = !abc.value;
  };
  const backspaceClick = () => {
    var _a2;
    emit("backspace");
    clearInterval((_a2 = timer.value) !== null && _a2 !== void 0 ? _a2 : 0);
    timer.value = null;
    timer.value = setInterval(() => {
      emit("backspace");
    }, 250);
  };
  const clearTimer = () => {
    var _a2;
    clearInterval((_a2 = timer.value) !== null && _a2 !== void 0 ? _a2 : 0);
    timer.value = null;
  };
  const noop = () => {
  };
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.f(abc.value ? engKeyBoardList.value : areaList.value, (group, i, i0) => {
        return common_vendor.e({
          a: i == 3
        }, i == 3 ? {
          b: common_vendor.n(!abc.value ? "up-keyboard__button__inner-wrapper__left__lang--active" : ""),
          c: common_vendor.n(abc.value ? "up-keyboard__button__inner-wrapper__left__lang--active" : ""),
          d: common_vendor.o(changeCarInputMode, i)
        } : {}, {
          e: common_vendor.f(group, (item, j, i1) => {
            return {
              a: common_vendor.t(item),
              b: common_vendor.o(($event) => {
                return carInputClick(i, j);
              }, j),
              c: j
            };
          }),
          f: i == 3
        }, i == 3 ? {
          g: "045afa5f-0-" + i0,
          h: common_vendor.p({
            size: "28",
            name: "backspace",
            color: "#303133",
            class: "data-v-045afa5f"
          }),
          i: common_vendor.o(backspaceClick, i),
          j: common_vendor.o(clearTimer, i)
        } : {}, {
          k: i,
          l: i,
          m: common_vendor.n(i + 1 == 4 ? "up-keyboard__button--center" : "")
        });
      }),
      b: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      c: common_vendor.o(noop, "ab"),
      d: `${_ctx.u_s_b_h}px`,
      e: `${_ctx.u_s_a_i_b}px`,
      f: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-045afa5f"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-car-keyboard/up-car-keyboard.js.map
