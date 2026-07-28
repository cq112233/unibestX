import { c as createI18n } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-i18n/common/index&";
import { z as zhCN } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/i18n/locales/zh_CN&";
import { e as enUS } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/i18n/locales/en_US&";
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
