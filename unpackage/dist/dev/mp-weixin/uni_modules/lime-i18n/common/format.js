"use strict";
const common_vendor = require("../../../common/vendor.js");
const uni_modules_limeI18n_common_util = require("./util.js");
class Token extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          type: { type: "Unknown", optional: false },
          value: { type: String, optional: false }
        };
      },
      name: "Token"
    };
  }
  constructor(options, metadata = Token.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.type = this.__props__.type;
    this.value = this.__props__.value;
    delete this.__props__;
  }
}
const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format) {
  const tokens = [];
  let position = 0;
  let text = "";
  while (position < format.length) {
    let char = format.charAt(position++);
    if (char == "{") {
      if (text.length > 0) {
        const token_1 = new Token({ type: "text", value: text });
        tokens.push(token_1);
      }
      text = "";
      let sub = "";
      char = format.charAt(position++);
      while (char != "}") {
        sub += char;
        char = format.charAt(position++);
      }
      const isClosed = char == "}";
      const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
      const token = new Token({ type, value: sub });
      tokens.push(token);
    } else if (char == "%") {
      if (format.charAt(position) != "{") {
        text += char;
      }
    } else {
      text += char;
    }
  }
  if (text.length > 0) {
    const token = new Token({ type: "text", value: text });
    tokens.push(token);
  }
  return tokens;
}
function compile(tokens, values = null) {
  var _a;
  const compiled = [];
  let index = 0;
  const mode = Array.isArray(values) ? "list" : uni_modules_limeI18n_common_util.isObject(values) ? "named" : "unknown";
  if (mode == "unknown") {
    return compiled;
  }
  while (index < tokens.length) {
    const token = tokens[index];
    switch (token.type) {
      case "text":
        compiled.push(token.value);
        break;
      case "list":
        const index_1 = parseInt(token.value, 10);
        if (mode == "list") {
          const value = values[index_1];
          compiled.push(value);
        } else {
          {
            warn("list did not receive a valid values array");
          }
        }
        break;
      case "named":
        if (mode == "named") {
          const value = (_a = values[token.value]) !== null && _a !== void 0 ? _a : "";
          compiled.push(`${value}`);
        } else {
          {
            warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
          }
        }
        break;
      case "unknown":
        if (token.value.startsWith("'") && token.value.endsWith("'")) {
          compiled.push(token.value.slice(1, -1));
        } else {
          warn(`Detect 'unknown' type of token!`);
        }
        break;
    }
    index++;
  }
  return compiled;
}
class BaseFormatter {
  constructor() {
    this._caches = /* @__PURE__ */ new Map();
  }
  interpolate(message, values = null) {
    if (values == null) {
      return [message];
    }
    let tokens = common_vendor.UTS.mapGet(this._caches, message);
    if (tokens == null) {
      tokens = parse(message);
      this._caches.set(message, tokens);
    }
    return compile(tokens, values);
  }
}
exports.BaseFormatter = BaseFormatter;
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uni_modules/lime-i18n/common/format.js.map
