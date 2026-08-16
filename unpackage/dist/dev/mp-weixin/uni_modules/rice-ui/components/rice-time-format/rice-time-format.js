"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("./type.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
require("../../libs/plugin/coloruts/constant.js");
require("../../libs/plugin/coloruts/type.js");
const uni_modules_riceUi_libs_plugin_dateuts_index = require("../../libs/plugin/dateuts/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-time-format",
  styleIsolation: "app-and-page"
}, { __name: "rice-time-format", props: {
  timestamp: {},
  format: { default: "YYYY-MM-DD HH:mm" },
  futureRelative: { type: Boolean, default: true }
}, setup(__props) {
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("time-format");
  const props = __props;
  const timeValue = common_vendor.ref("");
  const isValidDate = (date) => {
    return !isNaN(date.getTime());
  };
  const getRelativeTime = (date) => {
    const currentTimestamp = Date.now();
    const targetTimestamp = date.valueOf();
    const todayStart = uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(currentTimestamp).startOf("day").valueOf();
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
    const date = uni_modules_riceUi_libs_plugin_dateuts_index.dateuts(targetDate);
    if (props.format == "relative") {
      timeValue.value = getRelativeTime(date);
      return null;
    }
    timeValue.value = date.format(props.format);
  };
  initFormatTime();
  common_vendor.watch(() => {
    return props.format;
  }, () => {
    initFormatTime();
  });
  common_vendor.watch(() => {
    return props.timestamp;
  }, () => {
    initFormatTime();
  });
  common_vendor.watch(() => {
    return props.futureRelative;
  }, () => {
    initFormatTime();
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.t(common_vendor.unref(timeValue)),
      b: common_vendor.sei(common_vendor.gei(_ctx, ""), "text"),
      c: common_vendor.n(common_vendor.unref(ns).theme()),
      d: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      e: `${_ctx.u_s_b_h}px`,
      f: `${_ctx.u_s_a_i_b}px`
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d5aacbe0"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-time-format/rice-time-format.js.map
