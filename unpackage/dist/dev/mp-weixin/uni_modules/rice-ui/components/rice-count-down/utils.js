"use strict";
require("../../libs/use/useCountDown/index.js");
require("../../../../common/vendor.js");
require("../../libs/store/useConfig.js");
require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const formatTime = (format, current) => {
  let days = current.days, hours = current.hours, minutes = current.minutes, seconds = current.seconds, milliseconds = current.milliseconds;
  if (format.includes("DD")) {
    format = format.replace("DD", uni_modules_riceUi_libs_utils_basic.padZero(days));
  } else {
    hours += days * 24;
  }
  if (format.includes("HH")) {
    format = format.replace("HH", uni_modules_riceUi_libs_utils_basic.padZero(hours));
  } else {
    minutes += hours * 60;
  }
  if (format.includes("mm")) {
    format = format.replace("mm", uni_modules_riceUi_libs_utils_basic.padZero(minutes));
  } else {
    seconds += minutes * 60;
  }
  if (format.includes("ss")) {
    format = format.replace("ss", uni_modules_riceUi_libs_utils_basic.padZero(seconds));
  } else {
    milliseconds += seconds * 1e3;
  }
  if (format.includes("S")) {
    const ms = uni_modules_riceUi_libs_utils_basic.padZero(milliseconds, 3);
    if (format.includes("SSS")) {
      format = format.replace("SSS", ms);
    } else if (format.includes("SS")) {
      format = format.replace("SS", ms.slice(0, 2));
    } else {
      format = format.replace("S", ms.charAt(0));
    }
  }
  return format;
};
exports.formatTime = formatTime;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-count-down/utils.js.map
