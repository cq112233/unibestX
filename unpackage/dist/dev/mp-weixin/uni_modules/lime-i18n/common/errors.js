"use strict";
const common_vendor = require("../../../common/vendor.js");
class I18nErrorCodesTypes extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          UNEXPECTED_RETURN_TYPE: { type: Number, optional: false },
          INVALID_ARGUMENT: { type: Number, optional: false },
          MUST_BE_CALL_SETUP_TOP: { type: Number, optional: false },
          NOT_INSTALLED: { type: Number, optional: false },
          REQUIRED_VALUE: { type: Number, optional: false },
          INVALID_VALUE: { type: Number, optional: false },
          CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: { type: Number, optional: false },
          NOT_INSTALLED_WITH_PROVIDE: { type: Number, optional: false },
          UNEXPECTED_ERROR: { type: Number, optional: false },
          NOT_COMPATIBLE_LEGACY_VUE_I18N: { type: Number, optional: false },
          NOT_AVAILABLE_COMPOSITION_IN_LEGACY: { type: Number, optional: false },
          TYPE_MISMATCH: { type: Number, optional: false }
        };
      },
      name: "I18nErrorCodesTypes"
    };
  }
  constructor(options, metadata = I18nErrorCodesTypes.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.UNEXPECTED_RETURN_TYPE = this.__props__.UNEXPECTED_RETURN_TYPE;
    this.INVALID_ARGUMENT = this.__props__.INVALID_ARGUMENT;
    this.MUST_BE_CALL_SETUP_TOP = this.__props__.MUST_BE_CALL_SETUP_TOP;
    this.NOT_INSTALLED = this.__props__.NOT_INSTALLED;
    this.REQUIRED_VALUE = this.__props__.REQUIRED_VALUE;
    this.INVALID_VALUE = this.__props__.INVALID_VALUE;
    this.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN = this.__props__.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN;
    this.NOT_INSTALLED_WITH_PROVIDE = this.__props__.NOT_INSTALLED_WITH_PROVIDE;
    this.UNEXPECTED_ERROR = this.__props__.UNEXPECTED_ERROR;
    this.NOT_COMPATIBLE_LEGACY_VUE_I18N = this.__props__.NOT_COMPATIBLE_LEGACY_VUE_I18N;
    this.NOT_AVAILABLE_COMPOSITION_IN_LEGACY = this.__props__.NOT_AVAILABLE_COMPOSITION_IN_LEGACY;
    this.TYPE_MISMATCH = this.__props__.TYPE_MISMATCH;
    delete this.__props__;
  }
}
const I18nErrorCodes = new I18nErrorCodesTypes({
  // composer模块错误
  UNEXPECTED_RETURN_TYPE: 24,
  // legacy模块错误
  INVALID_ARGUMENT: 25,
  // i18n模块错误
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  // directive模块错误
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  // vue-devtools错误
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // 意外错误
  UNEXPECTED_ERROR: 32,
  // 不兼容的旧版vue-i18n构造函数
  NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
  // 在旧版API模式下，Compostion API不可用。请确保旧版API模式正常工作
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34,
  // 类型不匹配
  TYPE_MISMATCH: 35
});
/* @__PURE__ */ new Map([
  [I18nErrorCodes.UNEXPECTED_RETURN_TYPE, "composer中返回类型异常"],
  [I18nErrorCodes.INVALID_ARGUMENT, "参数无效"],
  [I18nErrorCodes.MUST_BE_CALL_SETUP_TOP, "必须在`setup`函数的顶部调用"],
  [I18nErrorCodes.NOT_INSTALLED, "需要用`app.use`函数安装"],
  [I18nErrorCodes.UNEXPECTED_ERROR, "意外错误"],
  [I18nErrorCodes.REQUIRED_VALUE, `值中必需，{0}`],
  [I18nErrorCodes.INVALID_VALUE, `值无效`],
  [I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN, `无法设置vue-devtools插件`],
  [I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE, "需要用`provide`函数安装"],
  [I18nErrorCodes.NOT_COMPATIBLE_LEGACY_VUE_I18N, "不兼容的旧版VueI18n。"],
  [I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY, "在旧版API模式下，Compostion API不可用。请确保旧版API模式正常工作"],
  [I18nErrorCodes.TYPE_MISMATCH, "类型不匹配"]
]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uni_modules/lime-i18n/common/errors.js.map
