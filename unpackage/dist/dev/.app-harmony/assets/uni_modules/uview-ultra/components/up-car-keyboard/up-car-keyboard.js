import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import "../../libs/composable/useUltraUI.js";
import { h as randomArray, s as sleep } from "../../libs/function/index.js";
import { d as defProps } from "./carKeyboard.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataEvent: _setSharedDataEvent, setSharedDataClass: _setSharedDataClass, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataIf: _createSharedDataIf, createSharedDataFor: _createSharedDataFor, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCarKeyboardUpCarKeyboard";
const { computed, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-car-keyboard"
  },
  __dynamicSharedData: true,
  __hash: "098e85a4",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-car-keyboard/up-car-keyboard.uvue",
  __name: "up-car-keyboard",
  props: {
    // 是否打乱键盘的顺序
    random: {
      type: Boolean,
      default: defProps.getBoolean("carKeyboard.random")
    },
    // 是否自动切换到英文
    autoChange: {
      type: Boolean,
      default: defProps.getBoolean("carKeyboard.autoChange")
    }
  },
  emits: ["change", "backspace"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCarKeyboardUpCarKeyboardSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const abc = ref(false);
    const timer = ref(null);
    const areaList = computed(() => {
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
        data = randomArray(data);
      tmp.push(data.slice(0, 10));
      tmp.push(data.slice(10, 20));
      tmp.push(data.slice(20, 30));
      tmp.push(data.slice(30, 36));
      return tmp;
    });
    const engKeyBoardList = computed(() => {
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
        data = randomArray(data);
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
        sleep(200).then(() => {
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
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0;
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 0, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return abc.value ? engKeyBoardList.value : areaList.value;
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData_VFor0, 1, _toSharedDataBoolean(_for_key0.value == 3));
        }, () => {
          _setSharedDataEvent(__sharedData_VFor0, 2, changeCarInputMode);
          _renderSharedDataEffect(() => {
            const _abc = abc.value;
            _setSharedDataClass(__sharedData_VFor0, 3, ["up-keyboard__button__inner-wrapper__left__lang", [!_abc ? "up-keyboard__button__inner-wrapper__left__lang--active" : ""]]);
            _setSharedDataClass(__sharedData_VFor0, 4, ["up-keyboard__button__inner-wrapper__left__lang", [_abc ? "up-keyboard__button__inner-wrapper__left__lang--active" : ""]]);
          });
        });
        _createSharedDataFor(_setSharedDataScoped(__sharedData_VFor0, 5, _createSharedDataVFor(__sharedDataScope, () => {
          return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
        })), () => {
          return _for_item0.value;
        }, (__sharedData_VFor1, _for_item1, _for_key1) => {
          _setSharedDataEvent(__sharedData_VFor1, 1, () => {
            return carInputClick(_for_key0.value, _for_key1.value);
          });
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData_VFor1, 2, _toDisplayString(_for_item1.value));
          });
          return null;
        }, (__sharedData_VFor1, item, j) => {
          return _setSharedData(__sharedData_VFor1, 0, _toDisplayString(j));
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData_VFor0, 6, _toSharedDataBoolean(_for_key0.value == 3));
        }, () => {
          const n16 = _createSharedDataComponentWithFallback(_component_up_icon, "bd3121bc-" + _for_key0.value, {
            size: "28",
            name: "backspace",
            color: "#303133"
          });
          _setSharedData(__sharedData_VFor0, 7, n16?.sharedData);
          _setSharedDataEvent(__sharedData_VFor0, 8, backspaceClick);
          _setSharedDataEvent(__sharedData_VFor0, 9, clearTimer);
        });
        _setSharedDataClass(__sharedData_VFor0, 10, ["up-keyboard__button", [_for_key0.value + 1 == 4 ? "up-keyboard__button--center" : ""]]);
        return null;
      }, (__sharedData_VFor0, group, i) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(i));
      }, 1);
      _setSharedDataEvent(__sharedData, 1, noop);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-car-keyboard.js.map
