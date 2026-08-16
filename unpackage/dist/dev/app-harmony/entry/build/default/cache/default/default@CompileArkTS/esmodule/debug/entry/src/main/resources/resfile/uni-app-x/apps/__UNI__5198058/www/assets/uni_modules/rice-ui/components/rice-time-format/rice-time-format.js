import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-time-format/type&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/plugin/coloruts/constant&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/plugin/coloruts/type&";
import { d as dateuts } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/plugin/dateuts/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceTimeFormatRiceTimeFormat";
const { ref, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-time-format",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "37f5d6bf",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-time-format/rice-time-format.uvue",
  __name: "rice-time-format",
  props: {
    timestamp: { type: Number },
    format: { default: "YYYY-MM-DD HH:mm", type: String },
    futureRelative: { type: Boolean, default: true }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceTimeFormatRiceTimeFormatSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("time-format");
    const props = __props;
    const timeValue = ref("");
    const isValidDate = (date) => {
      return !isNaN(date.getTime());
    };
    const getRelativeTime = (date) => {
      const currentTimestamp = Date.now();
      const targetTimestamp = date.valueOf();
      const todayStart = dateuts(currentTimestamp).startOf("day").valueOf();
      const tomorrowStart = todayStart + 24 * 60 * 60 * 1e3;
      const yesterdayStart = todayStart - 24 * 60 * 60 * 1e3;
      if (targetTimestamp > currentTimestamp) {
        if (props.futureRelative != true) {
          return date.format("YYYY-MM-DD HH:mm");
        }
        if (targetTimestamp < tomorrowStart) {
          const diffMs = targetTimestamp - currentTimestamp;
          if (diffMs < 60 * 1e3) {
            return "稍后";
          }
          const diffMinutes = Math.floor(diffMs / (60 * 1e3));
          if (diffMinutes < 60) {
            return `${diffMinutes}分钟后`;
          }
          const diffHours = Math.floor(diffMs / (60 * 60 * 1e3));
          return `${diffHours}小时后`;
        }
        if (targetTimestamp < tomorrowStart + 24 * 60 * 60 * 1e3) {
          return `明天 ${date.format("HH:mm")}`;
        }
        return date.format("YYYY-MM-DD HH:mm");
      }
      if (targetTimestamp >= todayStart) {
        const diffMs = currentTimestamp - targetTimestamp;
        if (diffMs < 60 * 1e3) {
          return "刚刚";
        }
        const diffMinutes = Math.floor(diffMs / (60 * 1e3));
        if (diffMinutes < 60) {
          return `${diffMinutes}分钟前`;
        }
        const diffHours = Math.floor(diffMs / (60 * 60 * 1e3));
        return `${diffHours}小时前`;
      }
      if (targetTimestamp >= yesterdayStart) {
        return `昨天 ${date.format("HH:mm")}`;
      }
      return date.format("YYYY-MM-DD HH:mm");
    };
    const normalizeTimestamp = (timestamp) => {
      const absTimestamp = Math.abs(timestamp);
      if (absTimestamp > 0 && absTimestamp < 1e11) {
        return timestamp * 1e3;
      }
      return timestamp;
    };
    const initFormatTime = () => {
      const time = normalizeTimestamp(props.timestamp);
      const targetDate = new Date(time);
      if (!isValidDate(targetDate)) {
        timeValue.value = "";
        return null;
      }
      const date = dateuts(targetDate);
      if (props.format == "relative") {
        timeValue.value = getRelativeTime(date);
        return null;
      }
      timeValue.value = date.format(props.format);
    };
    initFormatTime();
    watch(() => {
      return props.format;
    }, () => {
      initFormatTime();
    });
    watch(() => {
      return props.timestamp;
    }, () => {
      initFormatTime();
    });
    watch(() => {
      return props.futureRelative;
    }, () => {
      initFormatTime();
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 0, ["rice-time-format", _unref(ns).theme()]);
        _setSharedData(__sharedData, 1, _toDisplayString(_unref(timeValue)));
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=rice-time-format.js.map
