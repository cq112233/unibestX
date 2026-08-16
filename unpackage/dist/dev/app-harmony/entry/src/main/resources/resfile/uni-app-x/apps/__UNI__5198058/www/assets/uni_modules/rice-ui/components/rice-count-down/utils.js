import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { p as padZero } from "../../libs/utils/basic.js";
const formatTime = (format, current) => {
  let days = current.days, hours = current.hours, minutes = current.minutes, seconds = current.seconds, milliseconds = current.milliseconds;
  if (format.includes("DD")) {
    format = format.replace("DD", padZero(days));
  } else {
    hours += days * 24;
  }
  if (format.includes("HH")) {
    format = format.replace("HH", padZero(hours));
  } else {
    minutes += hours * 60;
  }
  if (format.includes("mm")) {
    format = format.replace("mm", padZero(minutes));
  } else {
    seconds += minutes * 60;
  }
  if (format.includes("ss")) {
    format = format.replace("ss", padZero(seconds));
  } else {
    milliseconds += seconds * 1e3;
  }
  if (format.includes("S")) {
    const ms = padZero(milliseconds, 3);
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
export {
  formatTime as f
};
//# sourceMappingURL=utils.js.map
