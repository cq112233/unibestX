import { c as createI18n } from "../../uni_modules/lime-i18n/common/index.js";
import { z as zhCN } from "./locales/zh_CN.js";
import { e as enUS } from "./locales/en_US.js";
const i18n = createI18n(new UTSJSONObject({
  // 使用uni.getStorageSync('uVueI18nLocale') 能获取上次退出应用后保存的语言
  locale: "zh-CN",
  fallbackLocale: "en-US",
  messages: new UTSJSONObject({
    "zh-CN": zhCN,
    "en-US": enUS
  })
}));
export {
  i18n as i
};
//# sourceMappingURL=index.js.map
