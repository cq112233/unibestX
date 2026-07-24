"use strict";
function classNames(...args) {
  return classNamesArray(args);
}
function classNamesArray(args) {
  const result = [];
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg == null) {
      continue;
    }
    if (typeof arg == "string") {
      const trimmed = arg.trim();
      if (trimmed != "") {
        result.push(trimmed);
      }
    } else if (typeof arg == "number") {
      if (isFinite(arg)) {
        result.push(`${arg}`);
      }
    } else if (Array.isArray(arg)) {
      if (arg.length > 0) {
        const className = classNamesArray(arg);
        if (className != "") {
          result.push(className);
        }
      }
    } else if (typeof arg == "object") {
      for (const key in arg) {
        const value = arg[key];
        if (value == true) {
          result.push(key);
        }
      }
    }
  }
  return result.join(" ");
}
exports.classNames = classNames;
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uni_modules/lime-shared/classNames/index.js.map
