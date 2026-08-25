import { reactive } from 'vue'
import zhHans from './locales/zh-Hans.js'
import zhHant from './locales/zh-Hant.js'
import en from './locales/en.js'
import es from './locales/es.js'
import fr from './locales/fr.js'
import de from './locales/de.js'
import ko from './locales/ko.js'
import ja from './locales/ja.js'
import ru from './locales/ru.js'

export function normalizeLocale(locale) {
    if (!locale) return 'zh-Hans'
    let l = String(locale).toLowerCase()
    if (l.includes('zh-tw') || l.includes('zh-hk') || l.includes('zh-hant')) {
        return 'zh-Hant'
    }
    if (l.includes('zh')) {
        return 'zh-Hans'
    }
    if (l.includes('en')) {
        return 'en'
    }
    if (l.includes('es')) return 'es'
    if (l.includes('fr')) return 'fr'
    if (l.includes('de')) return 'de'
    if (l.includes('ko')) return 'ko'
    if (l.includes('ja')) return 'ja'
    if (l.includes('ru')) return 'ru'
    return 'zh-Hans'
}

let settings = reactive({
    lang: 'zh-Hans',
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
});

export function setLocale(locale) {
    settings.lang = normalizeLocale(locale)
}

export function getLocale() {
    return settings.lang
}

/**
 * 多语言方法
 */
export function t(value, params = {}) {
    if (value != '' && value != null) {
        let key = String(value).replaceAll('.', '_')
        let lang = normalizeLocale(settings.lang)
        let currentDict = settings.locales[lang] || settings.locales['zh-Hans']
        let result = (currentDict && currentDict[key]) ? currentDict[key] : (currentDict[value] || value);

        if (params && typeof params === 'object') {
            Object.keys(params).forEach(k => {
                const reg = new RegExp(`{${k}}`, 'g');
                result = String(result).replace(reg, params[k]);
            });
        }
        return result;
    } else {
        return value;
    }
}

export function formatMonthTitle(year, month) {
    const y = year != null ? String(year) : ''
    const m = month != null ? parseInt(month) : 0
    const lang = normalizeLocale(getLocale())
    if (lang.startsWith('zh') || lang === 'ja') {
        return `${y}年${m}月`
    } else if (lang === 'ko') {
        return `${y}년 ${m}월`
    } else {
        const enMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const monthName = (m >= 1 && m <= 12) ? enMonths[m - 1] : String(m)
        return `${monthName} ${y}`
    }
}

export default {
    settings: settings,
    setLocale: setLocale,
    getLocale: getLocale,
    formatMonthTitle: formatMonthTitle,
    t: t
}
