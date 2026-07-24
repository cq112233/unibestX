"use strict";
require("../../common/vendor.js");
const uni_modules_limeI18n_common_index = require("../../uni_modules/lime-i18n/common/index.js");
const src_i18n_locales_zh_CN = require("./locales/zh_CN.js");
const src_i18n_locales_en_US = require("./locales/en_US.js");
const i18n = uni_modules_limeI18n_common_index.createI18n(new UTSJSONObject({
  // 使用uni.getStorageSync('uVueI18nLocale') 能获取上次退出应用后保存的语言
  locale: "zh-CN",
  fallbackLocale: "en-US",
  messages: new UTSJSONObject({
    "zh-CN": src_i18n_locales_zh_CN.zhCN,
    "en-US": src_i18n_locales_en_US.enUS
  })
}));
exports.i18n = i18n;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/i18n/index.js.map
