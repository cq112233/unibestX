"use strict";
const common_vendor = require("../../../common/vendor.js");
const uni_modules_limeI18n_common_format = require("./format.js");
const uni_modules_limeI18n_common_util = require("./util.js");
require("./types.js");
class AvailabilitiesImpl {
  /**
   * 构造函数
   * 检查Intl API的可用性
   */
  constructor() {
    this.dateTimeFormat = false;
    this.numberFormat = false;
    const intlDefined = typeof Intl !== "undefined";
    this.dateTimeFormat = intlDefined && typeof Intl.DateTimeFormat !== "undefined";
    this.numberFormat = intlDefined && typeof Intl.NumberFormat !== "undefined";
  }
}
const linkKeyMatcher = /(?:@(?:\.[a-zA-Z0-9_-]+)?:)(?:[\w\-_|:./]+|\([\w\-_|:./]+\)|(?:\{[^}]+?\}))/g;
const linkKeyPrefixMatcher = /^@(?:\.([a-zA-Z]+))?:/;
const bracketsMatcher = /[()\{\}\']/g;
const defaultModifiers = /* @__PURE__ */ new Map([
  // 转大写
  ["upper", (str) => {
    return str.toLocaleUpperCase();
  }],
  // 转小写
  ["lower", (str) => {
    return str.toLocaleLowerCase();
  }],
  // 首字母大写
  ["capitalize", (str) => {
    return `${str.charAt(0).toLocaleUpperCase()}${str.substring(1)}`;
  }]
]);
const DEFAULT_LOCALE = "en-US";
const defaultFormatter = new uni_modules_limeI18n_common_format.BaseFormatter();
const availabilities = new AvailabilitiesImpl();
function setTabBarItems(tabbar = null) {
  if (tabbar == null)
    return null;
  const pages = getCurrentPages();
  const page = pages.length > 0 ? pages[pages.length - 1] : null;
  const isTabBar = page != null;
  if (!isTabBar)
    return null;
  tabbar.forEach((text, index) => {
    common_vendor.index.setTabBarItem({
      text,
      index,
      // success() {},
      fail(err) {
        common_vendor.index.__f__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:102", err.errMsg);
      }
    });
  });
}
function getLocaleMap(locale, key, options, root = null) {
  var _a;
  const __messages = common_vendor.UTSJSONObject.assign(new common_vendor.UTSJSONObject({}), (_a = options.getJSON(key)) !== null && _a !== void 0 ? _a : new common_vendor.UTSJSONObject({}));
  let map = __messages.toMap();
  if (map.size == 0 && root != null) {
    if (!map.has(locale)) {
      map.set(locale, new common_vendor.UTSJSONObject({}));
    }
  }
  return map;
}
function getLocaleTabbarMap(locale, key, options) {
  var _a;
  const __messages = (_a = options.getJSON(key)) !== null && _a !== void 0 ? _a : new common_vendor.UTSJSONObject({});
  let map = /* @__PURE__ */ new Map();
  __messages.toMap().forEach((tabbar = null, key2) => {
    if (Array.isArray(tabbar)) {
      map.set(key2, tabbar);
      if (key2 == locale) {
        setTimeout(() => {
          setTabBarItems(tabbar);
        }, 500);
      }
    }
  });
  return map;
}
function getModifiers(options) {
  var _a;
  const __modifiers = ((_a = options.getJSON("modifiers")) !== null && _a !== void 0 ? _a : new common_vendor.UTSJSONObject({})).toMap();
  const _modifiers = /* @__PURE__ */ new Map();
  __modifiers.forEach((value = null, key) => {
    if (typeof value == "function") {
      try {
        _modifiers.set(key, value);
      } catch (e) {
        common_vendor.index.__f__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:187", 35, "自定义修饰器函数必须是类型：(str: string) => string");
      }
    }
  });
  return _modifiers;
}
function getPluralizationRules(options) {
  var _a;
  const __pluralizationRules = ((_a = options.getJSON("pluralizationRules")) !== null && _a !== void 0 ? _a : new common_vendor.UTSJSONObject({})).toMap();
  const _pluralizationRules = /* @__PURE__ */ new Map();
  __pluralizationRules.forEach((value = null, key) => {
    if (typeof value == "function") {
      try {
        _pluralizationRules.set(key, value);
      } catch (e) {
        {
          common_vendor.index.__f__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:210", 35, "自定义复数化规则函数必须是类型: ( choice: number, choicesLength: number) => number");
        }
      }
    }
  });
  return _pluralizationRules;
}
function getFormatter(options) {
  const __formatter = options.get("formatter");
  return __formatter != null && common_vendor.UTS.isInstanceOf(__formatter, uni_modules_limeI18n_common_format.BaseFormatter) ? __formatter : defaultFormatter;
}
let composerID = 0;
class ComposerClass {
  /**
   * 构造函数
   * @param options 配置选项
   * @param __root 根Composer实例
   */
  constructor(options = new common_vendor.UTSJSONObject({}), __root = null) {
    var _a, _b;
    this._interpolate = null;
    this._link = null;
    this._warnDefault = null;
    this._formatter = getFormatter(options);
    this._modifiers = getModifiers(options);
    this._pluralizationRules = getPluralizationRules(options);
    const _inheritLocale = (_a = options.getBoolean("inheritLocale")) !== null && _a !== void 0 ? _a : true;
    const useRoot = __root != null && _inheritLocale;
    const __locale = common_vendor.ref(useRoot ? __root.locale.value : (_b = options.getString("locale")) !== null && _b !== void 0 ? _b : DEFAULT_LOCALE);
    const _fallbackLocale = common_vendor.ref(useRoot ? __root.fallbackLocale.value : options.get("fallbackLocale"));
    this.messages = common_vendor.ref(getLocaleMap(__locale.value, "messages", options, __root));
    this._numberFormats = common_vendor.ref(getLocaleMap(__locale.value, "numberFormats", options, __root));
    this._datetimeFormats = common_vendor.ref(getLocaleMap(__locale.value, "datetimeFormats", options, __root));
    this._tabBars = common_vendor.ref(getLocaleTabbarMap(__locale.value, "tabBars", options));
    this.locale = common_vendor.computed({
      set: (val) => {
        __locale.value = val;
        if (__root == null) {
          common_vendor.index.setStorageSync("uVueI18nLocale", val);
        }
        setTabBarItems(common_vendor.UTS.mapGet(this._tabBars.value, val));
      },
      get: () => {
        return __locale.value;
      }
    });
    this.fallbackLocale = common_vendor.computed({
      set: (val = null) => {
        _fallbackLocale.value = val;
      },
      get: () => {
        var _a2;
        return (_a2 = _fallbackLocale.value) !== null && _a2 !== void 0 ? _a2 : false;
      }
    });
    this.availableLocales = uni_modules_limeI18n_common_util.getAllKeys(this.messages.value).sort();
    this.availabilities = availabilities;
    this._initMethods();
    composerID++;
    this.id = composerID;
    const interceptor = {
      complete: (_) => {
        setTimeout(() => {
          setTabBarItems(common_vendor.UTS.mapGet(this._tabBars.value, this.locale.value));
        }, 50);
      }
    };
    if (__root == null) {
      common_vendor.index.addInterceptor("switchTab", interceptor);
    }
  }
  /**
   * 初始化内部方法
   */
  _initMethods() {
    this._link = (str, locale = null, values = null, visitedLinkStack, interpolateMode) => {
      const matches = str.match(linkKeyMatcher);
      let ret = str;
      if (matches == null)
        return str;
      for (let i = 0; i < matches.length; i++) {
        const link = matches[i];
        const linkKeyPrefixMatches = link.match(linkKeyPrefixMatcher);
        if (linkKeyPrefixMatches == null)
          continue;
        const _a = common_vendor.__read(linkKeyPrefixMatches, 2), linkPrefix = _a[0], formatterName = _a[1];
        const linkPlaceholder = link.replace(linkPrefix, "").replace(bracketsMatcher, "");
        if (visitedLinkStack.includes(linkPlaceholder)) {
          common_vendor.index.__f__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:396", `发现循环引用。"${link}"已经在link"已经在${visitedLinkStack.reverse().join(" <- ")}链中访问过`);
          return ret;
        }
        if (this._interpolate == null || this._warnDefault == null) {
          return ret;
        }
        visitedLinkStack.push(linkPlaceholder);
        let translated = this._interpolate(linkPlaceholder, locale, values, visitedLinkStack, interpolateMode);
        translated = this._warnDefault(linkPlaceholder, translated, values, interpolateMode);
        if (this._modifiers.size > 0 && formatterName != null && this._modifiers.has(formatterName))
          ;
        else if (translated != null && formatterName != null && defaultModifiers.has(formatterName)) {
          const modifier = common_vendor.UTS.mapGet(defaultModifiers, formatterName);
          translated = modifier(translated);
        }
        common_vendor.UTS.arrayPop(visitedLinkStack);
        ret = translated == null ? ret : ret.replace(link, translated);
      }
      return ret;
    };
    this._interpolate = (key, locale = null, values = null, visitedLinkStack, interpolateMode) => {
      var _a, _b, _c, _d, _e;
      const ___locale = locale !== null && locale !== void 0 ? locale : this.locale.value;
      let ret = (_b = common_vendor.UTSJSONObject.assign(new common_vendor.UTSJSONObject({}), (_a = common_vendor.UTS.mapGet(this.messages.value, ___locale)) !== null && _a !== void 0 ? _a : new common_vendor.UTSJSONObject({}))) === null || _b === void 0 ? null : _b.getString(key);
      if (this.fallbackLocale.value != false && ret == null) {
        if (typeof this.fallbackLocale.value == "string" && ___locale != this.fallbackLocale.value) {
          ret = (_d = (_c = common_vendor.UTS.mapGet(this.messages.value, this.fallbackLocale.value)) === null || _c === void 0 ? null : _c.getString(key)) !== null && _d !== void 0 ? _d : ret;
        } else if (Array.isArray(this.fallbackLocale.value)) {
          const arr = this.fallbackLocale.value;
          for (let i = 0; i < arr.length; i++) {
            const _ret = (_e = common_vendor.UTS.mapGet(this.messages.value, arr[i])) === null || _e === void 0 ? null : _e.getString(key);
            if (_ret != null) {
              ret = _ret;
              break;
            }
          }
        }
      }
      if (typeof ret == "string" && (ret.indexOf("@:") >= 0 || ret.indexOf("@.") >= 0)) {
        ret = this._link(ret, locale, values, visitedLinkStack, interpolateMode);
      }
      return ret;
    };
    this._warnDefault = (key, message = null, values = null, interpolateMode) => {
      if (message == null) {
        common_vendor.index.__f__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:483", `无法翻译键路径 '${key}'. 使用键路径的值作为默认值.`);
      }
      if (message == null)
        return null;
      if (key == message)
        return key;
      return this._render(message, values, interpolateMode);
    };
  }
  /**
   * 渲染消息
   * @param message 消息模板
   * @param values 插值值
   * @param interpolateMode 插值模式
   * @returns 渲染后的字符串
   */
  _render(message, values = null, interpolateMode) {
    const ret = this._formatter.interpolate(message, values);
    return interpolateMode == "string" ? `${ret.join("")}` : common_vendor.UTS.JSON.stringify(ret);
  }
  /**
   * 获取复数形式
   * @param message 消息模板
   * @param choice 选择值
   * @param locale 语言
   * @returns 复数形式的消息
   */
  fetchChoice(message, choice = null, locale = null) {
    if (message == "")
      return message;
    const choices = message.split("|");
    const defaultImpl = (_choice = null, _choicesLength) => {
      _choice = Math.abs(_choice !== null && _choice !== void 0 ? _choice : 1);
      if (_choicesLength == 2) {
        return _choice != 0 ? _choice > 1 ? 1 : 0 : 1;
      }
      return _choice != 0 ? Math.min(_choice, 2) : 0;
    };
    let index;
    if (this._pluralizationRules.has(locale !== null && locale !== void 0 ? locale : this.locale.value)) {
      index = common_vendor.UTS.mapGet(this._pluralizationRules, locale !== null && locale !== void 0 ? locale : this.locale.value)(choice !== null && choice !== void 0 ? choice : 1, choices.length);
    } else {
      index = defaultImpl(choice, choices.length);
    }
    if (choices[index] == "")
      return message;
    return choices[index].trim();
  }
  /**
   * 翻译方法
   * @param key 翻译键
   * @param values 插值值
   * @param locale 语言
   * @returns 翻译后的字符串
   */
  t(key, values = null, locale = null) {
    const parsedArgs = values !== null && values !== void 0 ? values : new common_vendor.UTSJSONObject({});
    if (this._warnDefault == null || this._interpolate == null)
      return "";
    const msg = this._warnDefault(key, this._interpolate(key, locale, parsedArgs, [key], "string"), parsedArgs, "string");
    return msg !== null && msg !== void 0 ? msg : "";
  }
  /**
   * 带复数的翻译方法
   * @param key 翻译键
   * @param choice 选择值
   * @param values 插值值
   * @param locale 语言
   * @returns 翻译后的字符串
   */
  tc(key, choice = null, values = null, locale = null) {
    const _obj = new common_vendor.UTSJSONObject({ "count": choice, "n": choice });
    const predefined = values == null ? _obj : common_vendor.UTS.isInstanceOf(values, common_vendor.UTSJSONObject) ? common_vendor.UTSJSONObject.assign(_obj, values) : values;
    return this.fetchChoice(this.t(key, predefined, locale), choice, locale);
  }
  /**
   * 日期格式化方法
   * @param date 日期
   * @param key 格式键
   * @param locale 语言
   * @param options 格式化选项
   * @returns 格式化后的日期字符串
   */
  d(date = null, key = null, locale = null, options = null) {
    var _a;
    if (!this.availabilities.dateTimeFormat) {
      common_vendor.index.__f__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:604", `无法格式化日期值，因为不支持 Intl.DateTimeFormat. key: ${key}, locale: ${locale}, options: ${options}`);
      return `${date}`;
    }
    const __locale = locale !== null && locale !== void 0 ? locale : this.locale.value;
    if (key == null) {
      const dtf = options == null ? new Intl.DateTimeFormat(__locale) : new Intl.DateTimeFormat(__locale, options);
      return dtf.format(date);
    }
    const formats = common_vendor.UTS.mapGet(this._datetimeFormats.value, __locale);
    let formatter = null;
    if (formats == null || formats.getJSON(key) == null) {
      common_vendor.index.__f__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:620", `回退到根号下的日期时间本地化：key '${key}'。`);
      return `${date}`;
    }
    const format = (_a = formats.getJSON(key)) !== null && _a !== void 0 ? _a : new common_vendor.UTSJSONObject({});
    if (options != null) {
      formatter = new Intl.DateTimeFormat(__locale, Object.assign(new common_vendor.UTSJSONObject({}), format, options));
    } else {
      formatter = new Intl.DateTimeFormat(__locale, format);
    }
    return formatter.format(date);
  }
  /**
   * 数字格式化方法
   * @param number 数字
   * @param key 格式键
   * @param locale 语言
   * @param options 格式化选项
   * @returns 格式化后的数字字符串
   */
  n(number, key = null, locale = null, options = null) {
    if (!this.availabilities.numberFormat) {
      common_vendor.index.__f__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:649", `无法格式化数字值，因为不支持 Intl.NumberFormat. key: ${key}, locale: ${locale}, options: ${options}`);
      return number.toString();
    }
    const __locale = locale !== null && locale !== void 0 ? locale : this.locale.value;
    if (key == null) {
      const nf = options == null ? new Intl.NumberFormat(__locale) : new Intl.NumberFormat(locale, options);
      return nf.format(number);
    }
    const formats = common_vendor.UTS.mapGet(this._numberFormats.value, __locale);
    let formatter = null;
    if (formats == null || formats.getJSON(key) == null) {
      common_vendor.index.__f__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:665", `回退到根号下的数字本地化：key '${key}'`);
      return number.toString();
    }
    const format = formats.getJSON(key);
    if (options != null) {
      formatter = new Intl.NumberFormat(__locale, Object.assign(new common_vendor.UTSJSONObject({}), format, options));
    } else {
      formatter = new Intl.NumberFormat(__locale, format);
    }
    if (formatter) {
      return formatter.format(number);
    }
    return number.toString();
  }
  /**
   * 设置语言消息
   * @param locale 语言
   * @param message 消息对象
   */
  setLocaleMessage(locale, message) {
    const map = /* @__PURE__ */ new Map();
    this.messages.value.forEach((value, key) => {
      map.set(key, value);
    });
    map.set(locale, message);
    this.messages.value = map;
    this.availableLocales = uni_modules_limeI18n_common_util.getAllKeys(map).sort();
  }
  /**
   * 获取语言消息
   * @param locale 语言
   * @returns 消息对象
   */
  getLocaleMessage(locale) {
    var _a;
    return (_a = common_vendor.UTS.mapGet(this.messages.value, locale)) !== null && _a !== void 0 ? _a : new common_vendor.UTSJSONObject({});
  }
  /**
   * 合并语言消息
   * @param locale 语言
   * @param message 消息对象
   */
  mergeLocaleMessage(locale, message) {
    const map = /* @__PURE__ */ new Map();
    this.messages.value.forEach((value, key) => {
      if (key == locale) {
        map.set(key, common_vendor.UTSJSONObject.assign(new common_vendor.UTSJSONObject({}), value, message));
      } else {
        map.set(key, value);
      }
    });
    this.messages.value = map;
    this.availableLocales = uni_modules_limeI18n_common_util.getAllKeys(map).sort();
  }
  /**
   * 设置日期时间格式
   * @param locale 语言
   * @param format 格式对象
   */
  setDateTimeFormat(locale, format) {
    const map = /* @__PURE__ */ new Map();
    this._datetimeFormats.value.forEach((value, key) => {
      map.set(key, value);
    });
    map.set(locale, format);
    this._datetimeFormats.value = map;
  }
  /**
   * 获取日期时间格式
   * @param locale 语言
   * @returns 格式对象
   */
  getDateTimeFormat(locale) {
    var _a;
    return (_a = common_vendor.UTS.mapGet(this._datetimeFormats.value, locale)) !== null && _a !== void 0 ? _a : new common_vendor.UTSJSONObject({});
  }
  /**
   * 合并日期时间格式
   * @param locale 语言
   * @param format 格式对象
   */
  mergeDateTimeFormat(locale, format) {
    const map = /* @__PURE__ */ new Map();
    this._datetimeFormats.value.forEach((value, key) => {
      if (key == locale) {
        map.set(key, common_vendor.UTSJSONObject.assign(new common_vendor.UTSJSONObject({}), value, format));
      } else {
        map.set(key, value);
      }
    });
    this._datetimeFormats.value = map;
  }
  /**
   * 设置数字格式
   * @param locale 语言
   * @param format 格式对象
   */
  setNumberFormat(locale, format) {
    const map = /* @__PURE__ */ new Map();
    this._numberFormats.value.forEach((value, key) => {
      map.set(key, value);
    });
    map.set(locale, format);
    this._numberFormats.value = map;
  }
  /**
   * 获取数字格式
   * @param locale 语言
   * @returns 格式对象
   */
  getNumberFormat(locale) {
    var _a;
    return (_a = common_vendor.UTS.mapGet(this._numberFormats.value, locale)) !== null && _a !== void 0 ? _a : new common_vendor.UTSJSONObject({});
  }
  /**
   * 合并数字格式
   * @param locale 语言
   * @param format 格式对象
   */
  mergeNumberFormat(locale, format) {
    const map = /* @__PURE__ */ new Map();
    this._numberFormats.value.forEach((value, key) => {
      if (key == locale) {
        map.set(key, common_vendor.UTSJSONObject.assign(new common_vendor.UTSJSONObject({}), value, format));
      } else {
        map.set(key, value);
      }
    });
    this._numberFormats.value = map;
  }
  /**
   * 设置TabBar
   * @param locale 语言
   * @param tabbar TabBar文本数组
   */
  setTabBar(locale, tabbar) {
    const map = /* @__PURE__ */ new Map();
    this._tabBars.value.forEach((value, key) => {
      map.set(key, value);
    });
    map.set(locale, tabbar);
    this._tabBars.value = map;
  }
  /**
   * 获取TabBar
   * @param locale 语言
   * @returns TabBar文本数组
   */
  getTabBar(locale) {
    var _a;
    return (_a = common_vendor.UTS.mapGet(this._tabBars.value, locale)) !== null && _a !== void 0 ? _a : [];
  }
}
function createComposer(options = new common_vendor.UTSJSONObject({}), __root = null) {
  return new ComposerClass(options, __root);
}
exports.createComposer = createComposer;
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uni_modules/lime-i18n/common/composer-class.js.map
