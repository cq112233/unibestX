import "./assets/pages-json-uts.js";
import { A as App } from "./assets/App.js";
const { createSSRApp } = globalThis.Vue
import { p as pinia } from "./assets/src/store/index.js";
import { i as i18n } from "./assets/src/i18n/index.js";
import { u as ultraUI } from "./assets/uni_modules/uview-ultra/index.js";
import { i as installRouteInterceptor } from "./assets/src/router/interceptor.js";
import "./assets/plugin-vue-export-helper.js";
import "./assets/uni_modules/x-pinia-s/instans/types.js";
import "./assets/uni_modules/x-pinia-s/instans/subscriptions.js";
import "./assets/uni_modules/x-pinia-s/instans/createPinia.js";
import "./assets/uni_modules/x-pinia-s/instans/rootState.js";
import "./assets/uni_modules/x-pinia-s/instans/persist.js";
import "./assets/src/store/token.js";
import "./assets/uni_modules/x-pinia-s/instans/storeBase.js";
import "./assets/uni_modules/x-pinia-s/instans/defineStore.js";
import "./assets/src/store/user.js";
import "./assets/src/store/app.js";
import "./assets/src/tabbar/store.js";
import "./assets/src/tabbar/types.js";
import "./assets/src/tabbar/config.js";
import "./assets/uni_modules/uview-ultra/libs/i18n/index.js";
import "./assets/uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "./assets/uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "./assets/uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "./assets/uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "./assets/uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "./assets/uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "./assets/uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "./assets/uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "./assets/uni_modules/uview-ultra/libs/i18n/locales/ru.js";
import "./assets/uni_modules/lime-i18n/common/index.js";
import "./assets/uni_modules/lime-i18n/common/composer-class.js";
import "./assets/uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "./assets/uni_modules/lime-i18n/common/format.js";
import "./assets/uni_modules/lime-i18n/common/util.js";
import "./assets/uni_modules/lime-i18n/common/errors.js";
import "./assets/uni_modules/lime-i18n/common/warnings.js";
import "./assets/uni_modules/lime-i18n/common/types.js";
import "./assets/src/i18n/locales/zh_CN.js";
import "./assets/src/i18n/locales/en_US.js";
import "./assets/uni_modules/uview-ultra/libs/mixin/mixin.js";
import "./assets/uni_modules/uview-ultra/libs/function/test.js";
import "./assets/uni_modules/uview-ultra/libs/function/index.js";
import "./assets/uni_modules/uview-ultra/libs/function/digit.js";
import "./assets/uni_modules/uview-ultra/libs/config/config.js";
import "./assets/uni_modules/uview-ultra/libs/config/color.js";
import "./assets/src/router/config.js";
function currentPageCaptureScreenshot(fullPage, callback) {
  var _a;
  const pages = getCurrentPages();
  const currentPage = pages[pages.length - 1];
  (_a = currentPage.vm) === null || _a === void 0 ? void 0 : _a.$viewToTempFilePath({
    wholeContent: fullPage,
    overwrite: true,
    success: (res) => {
      const fileManager = uni.getFileSystemManager();
      fileManager.readFile({
        encoding: "base64",
        filePath: res.tempFilePath,
        success(readFileRes) {
          callback(readFileRes.data, "");
        },
        fail(err) {
          callback("", `captureScreenshot fail: ${JSON.stringify(err)}`);
        }
      });
    },
    fail: (err) => {
      callback("", `captureScreenshot fail: ${JSON.stringify(err)}`);
    }
  });
}
function initRuntimeSocket(hosts, port, id) {
  if (hosts == "" || port == "" || id == "")
    return Promise.resolve(null);
  return hosts.split(",").reduce((promise, host) => {
    return promise.then((socket) => {
      if (socket != null)
        return Promise.resolve(socket);
      return tryConnectSocket(host, port, id);
    });
  }, Promise.resolve(null));
}
const SOCKET_TIMEOUT = 500;
function tryConnectSocket(host, port, id) {
  return new Promise((resolve, reject) => {
    const socket = uni.connectSocket({
      url: `ws://${host}:${port}/${id}`,
      multiple: true,
      // 支付宝小程序 是否开启多实例
      fail() {
        resolve(null);
      }
    });
    const timer = setTimeout(() => {
      socket.close({
        code: 1006,
        reason: "connect timeout"
      });
      resolve(null);
    }, SOCKET_TIMEOUT);
    socket.onOpen((e) => {
      clearTimeout(timer);
      resolve(socket);
    });
    socket.onClose((e) => {
      clearTimeout(timer);
      resolve(null);
    });
    socket.onError((e) => {
      clearTimeout(timer);
      resolve(null);
    });
    socket.onMessage((result) => {
      const message = JSON.parse(result.data);
      if (message["type"] == "screencap") {
        const id2 = message["id"];
        currentPageCaptureScreenshot(message.fullPage, (base64, error) => {
          socket.send({
            data: JSON.stringify({
              id: id2,
              base64,
              error
            })
          });
        });
      }
      resolve(null);
    });
  });
}
const CONSOLE_TYPES = ["log", "warn", "error", "info", "debug"];
const originalConsole = /* @__PURE__ */ CONSOLE_TYPES.reduce((methods, type) => {
  methods[type] = console[type].bind(console);
  return methods;
}, {});
let sendError = null;
const errorQueue = /* @__PURE__ */ new Set();
const errorExtra = {};
function sendErrorMessages(errors) {
  if (sendError == null) {
    errors.forEach((error) => {
      errorQueue.add(error);
    });
    return;
  }
  const data = errors.map((err) => {
    if (typeof err === "string") {
      return err;
    }
    const isPromiseRejection = err && "promise" in err && "reason" in err;
    const prefix = isPromiseRejection ? "UnhandledPromiseRejection: " : "";
    if (isPromiseRejection) {
      err = err.reason;
    }
    if (err instanceof Error && err.stack) {
      if (err.message && !err.stack.includes(err.message)) {
        return `${prefix}${err.message}
${err.stack}`;
      }
      return `${prefix}${err.stack}`;
    }
    if (typeof err === "object" && err !== null) {
      try {
        return prefix + JSON.stringify(err);
      } catch (err2) {
        return prefix + String(err2);
      }
    }
    return prefix + String(err);
  }).filter(Boolean);
  if (data.length > 0) {
    sendError(JSON.stringify(Object.assign({
      type: "error",
      data
    }, errorExtra)));
  }
}
function setSendError(value, extra = {}) {
  sendError = value;
  Object.assign(errorExtra, extra);
  if (value != null && errorQueue.size > 0) {
    const errors = Array.from(errorQueue);
    errorQueue.clear();
    sendErrorMessages(errors);
  }
}
function initOnError() {
  function onError(error) {
    try {
      if (typeof PromiseRejectionEvent !== "undefined" && error instanceof PromiseRejectionEvent && error.reason instanceof Error && error.reason.message && error.reason.message.includes(`Cannot create property 'errMsg' on string 'taskId`)) {
        return;
      }
      if (false)
        ;
      sendErrorMessages([error]);
    } catch (err) {
      originalConsole.error(err);
    }
  }
  if (typeof uni !== "undefined") {
    if (typeof uni.onError === "function") {
      uni.onError(onError);
    }
    if (typeof uni.onUnhandledRejection === "function") {
      uni.onUnhandledRejection(onError);
    }
  }
  return function offError() {
    if (typeof uni !== "undefined") {
      if (typeof uni.offError === "function") {
        uni.offError(onError);
      }
      if (typeof uni.offUnhandledRejection === "function") {
        uni.offUnhandledRejection(onError);
      }
    }
  };
}
function formatMessage(type, args) {
  try {
    return {
      type,
      args: formatArgs(args)
    };
  } catch (e) {
  }
  return {
    type,
    args: []
  };
}
function formatArgs(args) {
  return args.map((arg) => formatArg(arg));
}
function formatArg(arg, depth = 0) {
  if (depth >= 7) {
    return {
      type: "object",
      value: "[Maximum depth reached]"
    };
  }
  const type = typeof arg;
  switch (type) {
    case "string":
      return formatString(arg);
    case "number":
      return formatNumber(arg);
    case "boolean":
      return formatBoolean(arg);
    case "object":
      try {
        return formatObject(arg, depth);
      } catch (e) {
        return {
          type: "object",
          value: {
            properties: []
          }
        };
      }
    case "undefined":
      return formatUndefined();
    case "function":
      return formatFunction(arg);
    case "symbol": {
      return formatSymbol(arg);
    }
    case "bigint":
      return formatBigInt(arg);
  }
}
function formatFunction(value) {
  return {
    type: "function",
    value: `function ${value.name}() {}`
  };
}
function formatUndefined() {
  return {
    type: "undefined"
  };
}
function formatBoolean(value) {
  return {
    type: "boolean",
    value: String(value)
  };
}
function formatNumber(value) {
  return {
    type: "number",
    value: String(value)
  };
}
function formatBigInt(value) {
  return {
    type: "bigint",
    value: String(value)
  };
}
function formatString(value) {
  return {
    type: "string",
    value
  };
}
function formatSymbol(value) {
  return {
    type: "symbol",
    value: value.description
  };
}
function formatObject(value, depth) {
  if (value === null) {
    return {
      type: "null"
    };
  }
  {
    if (isComponentPublicInstance(value)) {
      return formatComponentPublicInstance(value, depth);
    }
    if (isComponentInternalInstance(value)) {
      return formatComponentInternalInstance(value, depth);
    }
    if (isUniElement(value)) {
      return formatUniElement(value, depth);
    }
    if (isCSSStyleDeclaration(value)) {
      return formatCSSStyleDeclaration(value, depth);
    }
  }
  if (Array.isArray(value)) {
    return {
      type: "object",
      subType: "array",
      value: {
        properties: value.map((v, i) => formatArrayElement(v, i, depth + 1))
      }
    };
  }
  if (value instanceof Set) {
    return {
      type: "object",
      subType: "set",
      className: "Set",
      description: `Set(${value.size})`,
      value: {
        entries: Array.from(value).map((v) => formatSetEntry(v, depth + 1))
      }
    };
  }
  if (value instanceof Map) {
    return {
      type: "object",
      subType: "map",
      className: "Map",
      description: `Map(${value.size})`,
      value: {
        entries: Array.from(value.entries()).map((v) => formatMapEntry(v, depth + 1))
      }
    };
  }
  if (value instanceof Promise) {
    return {
      type: "object",
      subType: "promise",
      value: {
        properties: []
      }
    };
  }
  if (value instanceof RegExp) {
    return {
      type: "object",
      subType: "regexp",
      value: String(value),
      className: "Regexp"
    };
  }
  if (value instanceof Date) {
    return {
      type: "object",
      subType: "date",
      value: String(value),
      className: "Date"
    };
  }
  if (value instanceof Error) {
    return {
      type: "object",
      subType: "error",
      value: value.message || String(value),
      className: value.name || "Error"
    };
  }
  let className = void 0;
  {
    const constructor = value.constructor;
    if (constructor) {
      if (constructor.get$UTSMetadata$) {
        className = constructor.get$UTSMetadata$().name;
      }
    }
  }
  let entries = Object.entries(value);
  if (isHarmonyBuilderParams(value)) {
    entries = entries.filter(([key]) => key !== "modifier" && key !== "nodeContent");
  }
  return {
    type: "object",
    className,
    value: {
      properties: entries.map((entry) => formatObjectProperty(entry[0], entry[1], depth + 1))
    }
  };
}
function isHarmonyBuilderParams(value) {
  return value.modifier && value.modifier._attribute && value.nodeContent;
}
function isComponentPublicInstance(value) {
  return value.$ && isComponentInternalInstance(value.$);
}
function isComponentInternalInstance(value) {
  return value.type && value.uid != null && value.appContext;
}
function formatComponentPublicInstance(value, depth) {
  return {
    type: "object",
    className: "ComponentPublicInstance",
    value: {
      properties: Object.entries(value.$.type).map(([name, value2]) => formatObjectProperty(name, value2, depth + 1))
    }
  };
}
function formatComponentInternalInstance(value, depth) {
  return {
    type: "object",
    className: "ComponentInternalInstance",
    value: {
      properties: Object.entries(value.type).map(([name, value2]) => formatObjectProperty(name, value2, depth + 1))
    }
  };
}
function isUniElement(value) {
  return value.style && value.tagName != null && value.nodeName != null;
}
function formatUniElement(value, depth) {
  return {
    type: "object",
    // 非 x 没有 UniElement 的概念
    // className: 'UniElement',
    value: {
      properties: Object.entries(value).filter(([name]) => [
        "id",
        "tagName",
        "nodeName",
        "dataset",
        "offsetTop",
        "offsetLeft",
        "style"
      ].includes(name)).map(([name, value2]) => formatObjectProperty(name, value2, depth + 1))
    }
  };
}
function isCSSStyleDeclaration(value) {
  return typeof value.getPropertyValue === "function" && typeof value.setProperty === "function" && value.$styles;
}
function formatCSSStyleDeclaration(style, depth) {
  return {
    type: "object",
    value: {
      properties: Object.entries(style.$styles).map(([name, value]) => formatObjectProperty(name, value, depth + 1))
    }
  };
}
function formatObjectProperty(name, value, depth) {
  const result = formatArg(value, depth);
  result.name = name;
  return result;
}
function formatArrayElement(value, index, depth) {
  const result = formatArg(value, depth);
  result.name = `${index}`;
  return result;
}
function formatSetEntry(value, depth) {
  return {
    value: formatArg(value, depth)
  };
}
function formatMapEntry(value, depth) {
  return {
    key: formatArg(value[0], depth),
    value: formatArg(value[1], depth)
  };
}
let sendConsole = null;
const messageQueue = [];
const messageExtra = {};
const EXCEPTION_BEGIN_MARK = "---BEGIN:EXCEPTION---";
const EXCEPTION_END_MARK = "---END:EXCEPTION---";
function sendConsoleMessages(messages) {
  if (sendConsole == null) {
    messageQueue.push(...messages);
    return;
  }
  sendConsole(JSON.stringify(Object.assign({
    type: "console",
    data: messages
  }, messageExtra)));
}
function setSendConsole(value, extra = {}) {
  sendConsole = value;
  Object.assign(messageExtra, extra);
  if (value != null && messageQueue.length > 0) {
    const messages = messageQueue.slice();
    messageQueue.length = 0;
    sendConsoleMessages(messages);
  }
}
function rewriteConsole() {
  function wrapConsole(type) {
    return function(...args) {
      if (type === "error" && args.length === 1) {
        const arg = args[0];
        if (typeof arg === "string" && arg.startsWith(EXCEPTION_BEGIN_MARK)) {
          const startIndex = EXCEPTION_BEGIN_MARK.length;
          const endIndex = arg.length - EXCEPTION_END_MARK.length;
          sendErrorMessages([arg.slice(startIndex, endIndex)]);
          return;
        } else if (arg instanceof Error) {
          sendErrorMessages([arg]);
          return;
        }
      }
      sendConsoleMessages([formatMessage(type, args)]);
    };
  }
  if (isConsoleWritable()) {
    CONSOLE_TYPES.forEach((type) => {
      console[type] = wrapConsole(type);
    });
    return function restoreConsole() {
      CONSOLE_TYPES.forEach((type) => {
        console[type] = originalConsole[type];
      });
    };
  } else {
    {
      if (typeof uni !== "undefined" && uni.__f__) {
        const oldLog = uni.__f__;
        if (oldLog) {
          uni.__f__ = function(...args) {
            const [type, filename, ...rest] = args;
            oldLog(type, "", ...rest);
            sendConsoleMessages([formatMessage(type, [...rest, filename])]);
          };
          return function restoreConsole() {
            uni.__f__ = oldLog;
          };
        }
      }
    }
  }
  return function restoreConsole() {
  };
}
function isConsoleWritable() {
  const value = console.log;
  const sym = Symbol();
  try {
    console.log = sym;
  } catch (ex) {
    return false;
  }
  const isWritable = console.log === sym;
  console.log = value;
  return isWritable;
}
function initRuntimeSocketService() {
  const hosts = "127.0.0.1,192.168.100.62,198.18.0.1,10.8.0.8";
  const port = "8090";
  const id = "app-harmony_0OA_2c";
  const lazy = typeof swan !== "undefined";
  let restoreError = lazy ? () => {
  } : initOnError();
  let restoreConsole = lazy ? () => {
  } : rewriteConsole();
  return Promise.resolve().then(() => {
    if (lazy) {
      restoreError = initOnError();
      restoreConsole = rewriteConsole();
    }
    return initRuntimeSocket(hosts, port, id).then((socket) => {
      if (!socket) {
        restoreError();
        restoreConsole();
        originalConsole.error(wrapError("开发模式下日志通道建立 socket 连接失败。"));
        originalConsole.error(wrapError("如果是运行到真机，请确认手机与电脑处于同一网络。"));
        return false;
      }
      socket.onClose(() => {
        {
          originalConsole.error(wrapError("手机端日志通道 socket 连接已断开，请重启基座应用或重新运行。"));
        }
        restoreError();
        restoreConsole();
      });
      setSendConsole((data) => {
        socket.send({
          data
        });
      });
      setSendError((data) => {
        socket.send({
          data
        });
      });
      return true;
    });
  });
}
const ERROR_CHAR = "‌";
function wrapError(error) {
  return `${ERROR_CHAR}${error}${ERROR_CHAR}`;
}
initRuntimeSocketService();
const __global__ = typeof globalThis === "undefined" ? Function("return this")() : globalThis;
__global__.__uniX = true;
function createApp() {
  installRouteInterceptor();
  const app = createSSRApp(App);
  app.use(pinia);
  app.config.globalProperties.$pinia = pinia;
  app.use(i18n);
  app.use(ultraUI, () => {
    return new UTSJSONObject({
      options: new UTSJSONObject({
        config: new UTSJSONObject({
          // 开启只加载一次字体图标的优化，避免重复加载
          loadFontOnce: true
        })
      })
    });
  });
  return {
    app
  };
}
__global__.__mount__ = () => {
  createApp().app.mount("#app");
};
//# sourceMappingURL=app-service.js.map
