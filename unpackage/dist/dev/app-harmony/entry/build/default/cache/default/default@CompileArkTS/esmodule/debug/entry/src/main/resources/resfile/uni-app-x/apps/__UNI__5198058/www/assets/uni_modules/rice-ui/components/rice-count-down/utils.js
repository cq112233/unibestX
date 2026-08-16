import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import { p as padZero } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
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
