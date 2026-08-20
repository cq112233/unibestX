import { t } from "../../libs/i18n/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataIf: _createSharedDataIf, setSharedDataEvent: _setSharedDataEvent, setSharedDataClass: _setSharedDataClass } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCalendarHeader";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-calendar-header"
  },
  __dynamicSharedData: true,
  __hash: "f1ec25ee",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-calendar/header.uvue",
  __name: "header",
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showSubtitle: {
      type: Boolean,
      default: true
    },
    showSwitch: {
      type: Boolean,
      default: false
    },
    prevDisabled: {
      type: Boolean,
      default: false
    },
    nextDisabled: {
      type: Boolean,
      default: false
    },
    prevYearDisabled: {
      type: Boolean,
      default: false
    },
    nextYearDisabled: {
      type: Boolean,
      default: false
    },
    showToday: {
      type: Boolean,
      default: true
    },
    todayText: {
      type: String,
      default: "今天"
    },
    todayDisabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["prev", "next", "prevYear", "nextYear", "today"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCalendarHeaderSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    function t$1(key) {
      return t(key, new UTSJSONObject({}));
    }
    function prev() {
      if (!props.prevDisabled) {
        emit("prev");
      }
    }
    function next() {
      if (!props.nextDisabled) {
        emit("next");
      }
    }
    function prevYear() {
      if (!props.prevYearDisabled) {
        emit("prevYear");
      }
    }
    function nextYear() {
      if (!props.nextYearDisabled) {
        emit("nextYear");
      }
    }
    function today() {
      if (!props.todayDisabled) {
        emit("today");
      }
    }
    return () => {
      "raw js";
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.showTitle));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedData(__sharedData, 1, _toDisplayString(__props.title));
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 2, _toSharedDataBoolean(__props.showSubtitle));
      }, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 3, _toSharedDataBoolean(__props.showSwitch));
        }, () => {
          _setSharedDataEvent(__sharedData, 4, prevYear);
          _renderSharedDataEffect(() => {
            return _setSharedDataClass(__sharedData, 5, ["up-calendar-header__switch", { "up-calendar-header__switch--disabled": __props.prevYearDisabled }]);
          });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 6, _toSharedDataBoolean(__props.showSwitch));
        }, () => {
          _setSharedDataEvent(__sharedData, 7, prev);
          _renderSharedDataEffect(() => {
            return _setSharedDataClass(__sharedData, 8, ["up-calendar-header__switch", { "up-calendar-header__switch--disabled": __props.prevDisabled }]);
          });
        });
        _renderSharedDataEffect(() => {
          return _setSharedData(__sharedData, 19, _toDisplayString(__props.subtitle));
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 9, _toSharedDataBoolean(__props.showSwitch));
        }, () => {
          _setSharedDataEvent(__sharedData, 10, next);
          _renderSharedDataEffect(() => {
            return _setSharedDataClass(__sharedData, 11, ["up-calendar-header__switch", { "up-calendar-header__switch--disabled": __props.nextDisabled }]);
          });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 12, _toSharedDataBoolean(__props.showSwitch));
        }, () => {
          _setSharedDataEvent(__sharedData, 13, nextYear);
          _renderSharedDataEffect(() => {
            return _setSharedDataClass(__sharedData, 14, ["up-calendar-header__switch", { "up-calendar-header__switch--disabled": __props.nextYearDisabled }]);
          });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 15, _toSharedDataBoolean(__props.showToday));
        }, () => {
          _setSharedDataEvent(__sharedData, 16, today);
          _renderSharedDataEffect(() => {
            _setSharedDataClass(__sharedData, 17, ["up-calendar-header__today", { "up-calendar-header__today--disabled": __props.todayDisabled }]);
            _setSharedData(__sharedData, 18, _toDisplayString(__props.todayText));
          });
        });
      });
      _renderSharedDataEffect(() => {
        const _t = t$1;
        _setSharedData(__sharedData, 20, _toDisplayString(_t("up_week_one")));
        _setSharedData(__sharedData, 21, _toDisplayString(_t("up_week_two")));
        _setSharedData(__sharedData, 22, _toDisplayString(_t("up_week_three")));
        _setSharedData(__sharedData, 23, _toDisplayString(_t("up_week_four")));
        _setSharedData(__sharedData, 24, _toDisplayString(_t("up_week_five")));
        _setSharedData(__sharedData, 25, _toDisplayString(_t("up_week_six")));
        _setSharedData(__sharedData, 26, _toDisplayString(_t("up_week_seven")));
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const uHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  uHeader as u
};
//# sourceMappingURL=header.js.map
