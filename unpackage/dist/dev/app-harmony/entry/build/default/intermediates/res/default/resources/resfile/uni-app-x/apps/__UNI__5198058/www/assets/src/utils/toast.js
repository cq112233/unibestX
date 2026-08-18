const toastStack = [];
function registerToast(toastInstance) {
  const index = toastStack.indexOf(toastInstance);
  if (index != -1) {
    toastStack.splice(index, 1);
  }
  toastStack.push(toastInstance);
}
function unregisterToast(toastInstance) {
  const index = toastStack.indexOf(toastInstance);
  if (index != -1) {
    toastStack.splice(index, 1);
  }
}
function showToast(options) {
  var _a;
  if (toastStack.length > 0) {
    try {
      const activeToast = toastStack[toastStack.length - 1];
      activeToast.$callMethod("show", options);
      return null;
    } catch (e) {
      uni.__f__("error", "at src/utils/toast.uts:37", "activeToast.$callMethod error:", e);
    }
  }
  const msg = (_a = options.message) !== null && _a !== void 0 ? _a : "";
  uni.showToast({
    title: msg,
    icon: "none"
  });
}
function toast(message, type = "default") {
  showToast(new UTSJSONObject({
    message,
    type
  }));
}
function toastSuccess(message) {
  toast(message, "success");
}
function toastError(message) {
  toast(message, "error");
}
function toastWarning(message) {
  toast(message, "warning");
}
export {
  toastSuccess as a,
  toastError as b,
  toastWarning as c,
  registerToast as r,
  toast as t,
  unregisterToast as u
};
//# sourceMappingURL=toast.js.map
