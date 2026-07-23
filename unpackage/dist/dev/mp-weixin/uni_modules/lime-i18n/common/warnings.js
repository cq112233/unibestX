"use strict";
const common_vendor = require("../../../common/vendor.js");
class warnMessagesTypes extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          FALLBACK_TO_ROOT: { type: Number, optional: false },
          NOT_FOUND_PARENT_SCOPE: { type: Number, optional: false },
          IGNORE_OBJ_FLATTEN: { type: Number, optional: false },
          DEPRECATE_TC: { type: Number, optional: false }
        };
      },
      name: "warnMessagesTypes"
    };
  }
  constructor(options, metadata = warnMessagesTypes.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.FALLBACK_TO_ROOT = this.__props__.FALLBACK_TO_ROOT;
    this.NOT_FOUND_PARENT_SCOPE = this.__props__.NOT_FOUND_PARENT_SCOPE;
    this.IGNORE_OBJ_FLATTEN = this.__props__.IGNORE_OBJ_FLATTEN;
    this.DEPRECATE_TC = this.__props__.DEPRECATE_TC;
    delete this.__props__;
  }
}
const I18nWarnCodes = new warnMessagesTypes({
  // 使用根语言环境回退到{type} '{key}'
  FALLBACK_TO_ROOT: 8,
  // 未找到父作用域，使用全局作用域
  NOT_FOUND_PARENT_SCOPE: 9,
  // 忽略对象扁平化：'{key}'键具有字符串值
  IGNORE_OBJ_FLATTEN: 10,
  // 'tc'和'$tc'已在v10中被弃用，请使用't'或'$t'代替。'tc'和'$tc'将在v11中移除
  DEPRECATE_TC: 11
});
/* @__PURE__ */ new Map([
  [I18nWarnCodes.FALLBACK_TO_ROOT, `使用根语言环境回退到{type} '{key}'。`],
  [I18nWarnCodes.NOT_FOUND_PARENT_SCOPE, `未找到父作用域，使用全局作用域。`],
  [I18nWarnCodes.IGNORE_OBJ_FLATTEN, `忽略对象扁平化：'{key}'键具有字符串值。`],
  [I18nWarnCodes.DEPRECATE_TC, `'tc'和'$tc'已在v10中被弃用，请使用't'或'$t'代替。'tc'和'$tc'将在v11中移除。`]
]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uni_modules/lime-i18n/common/warnings.js.map
