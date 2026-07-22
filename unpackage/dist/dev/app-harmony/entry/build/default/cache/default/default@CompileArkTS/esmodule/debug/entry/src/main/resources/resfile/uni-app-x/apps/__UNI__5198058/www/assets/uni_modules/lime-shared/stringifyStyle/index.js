function toKebabCase(str) {
  return str.replace(/^[A-Z]/, (m, _a, _b) => {
    return m.toLowerCase();
  }).replace(/[A-Z]/g, (m, _a, _b) => {
    return "-" + m.toLowerCase();
  });
}
function stringifyStyle(...args) {
  return stringifyStyleArray(args);
}
function isValidStyleValue(value) {
  if (value == null)
    return false;
  if (value == "")
    return false;
  if (typeof value == "number") {
    return isFinite(value);
  }
  if (typeof value == "boolean") {
    return false;
  }
  return true;
}
function stringifyStyleArray(args) {
  const result = [];
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (!isValidStyleValue(arg))
      continue;
    if (typeof arg == "string") {
      result.push(arg);
    } else if (Array.isArray(arg)) {
      if (arg.length > 0) {
        const style = stringifyStyleArray(arg);
        if (style != "") {
          result.push(style);
        }
      }
    } else if (typeof arg == "object") {
      for (const key in arg) {
        const value = arg[key];
        if (isValidStyleValue(value)) {
          result.push(`${toKebabCase(key)}:${value}`);
        }
      }
    }
  }
  return result.join(";");
}
export {
  stringifyStyle as s
};
//# sourceMappingURL=index.js.map
