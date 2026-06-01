import zhHans from './locales/zh-Hans.js'
import zhHant from './locales/zh-Hant.js'
import en from './locales/en.js'
import es from './locales/es.js'
import fr from './locales/fr.js'
import de from './locales/de.js'
import ko from './locales/ko.js'
import ja from './locales/ja.js'
import ru from './locales/ru.js'

let settings = {
    lang: uni.getLocale(),
    locales: {
        en,
        es,
        fr,
        de,
        ko,
        ja,
        ru,
        'zh-Hant': zhHant,
        'zh-Hans': zhHans
    }
};

uni.onLocaleChange((locale) => {
    settings.lang = locale;
})

/**
 * 多语言方法
 */
export function t(value, params = {}) {
    // console.log(settings.locales[settings.lang])
    if (value != '' && value != null) {
		value = value.replaceAll('.', '_')
        let lang = settings.lang
        if (!settings.locales[settings.lang]) {
            lang = 'zh-Hans'
        }
        let result = settings.locales[lang][value] || value;
        // 替换{xxx}格式的变量
        Object.keys(params).forEach(key => {
            const reg = new RegExp(`{${key}}`, 'g');
            result = result.replace(reg, params[key]);
        });
        return result;
    } else {
        return value;
    }
}

export default {
    settings: settings
}
