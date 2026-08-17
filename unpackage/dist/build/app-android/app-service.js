(function(vue) {
  "use strict";
  class CustomTabBarItem extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            text: { type: String, optional: false },
            pagePath: { type: String, optional: false },
            iconType: { type: String, optional: false },
            icon: { type: String, optional: false },
            iconActive: { type: String, optional: false },
            badge: { type: "Unknown", optional: true },
            isBulge: { type: Boolean, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = CustomTabBarItem.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.text = this.__props__.text;
      this.pagePath = this.__props__.pagePath;
      this.iconType = this.__props__.iconType;
      this.icon = this.__props__.icon;
      this.iconActive = this.__props__.iconActive;
      this.badge = this.__props__.badge;
      this.isBulge = this.__props__.isBulge;
      delete this.__props__;
    }
  }
  const customTabbarList = [
    new CustomTabBarItem({
      text: "tabbar.home",
      pagePath: "src/pages/index/index",
      iconType: "icon",
      icon: "home",
      iconActive: "home-filled",
      badge: null,
      isBulge: false
    }),
    new CustomTabBarItem({
      text: "tabbar.basic",
      pagePath: "src/pages/basic/basic",
      iconType: "icon",
      icon: "tune",
      iconActive: "tune-filled",
      badge: null,
      isBulge: false
    }),
    new CustomTabBarItem({
      text: "tabbar.ai",
      pagePath: "",
      iconType: "icon",
      icon: "chatboxes",
      iconActive: "chatboxes-filled",
      badge: null,
      isBulge: true
    }),
    new CustomTabBarItem({
      text: "tabbar.function",
      pagePath: "src/pages/function/function",
      iconType: "icon",
      icon: "gear",
      iconActive: "gear-filled",
      badge: null,
      isBulge: false
    }),
    new CustomTabBarItem({
      text: "tabbar.me",
      pagePath: "src/pages/me/me",
      iconType: "icon",
      icon: "person",
      iconActive: "person-filled",
      badge: null,
      isBulge: false
    })
  ];
  function normalizeList() {
    const result = [];
    for (let i = 0; i < customTabbarList.length; i++) {
      const item = customTabbarList[i];
      result.push(new CustomTabBarItem({
        text: item.text,
        pagePath: item.pagePath.startsWith("/") ? item.pagePath : `/${item.pagePath}`,
        iconType: item.iconType,
        icon: item.icon,
        iconActive: item.iconActive,
        badge: item.badge,
        isBulge: item.isBulge
      }));
    }
    return result;
  }
  const tabbarList = vue.reactive(normalizeList());
  const curIdx = vue.ref(0);
  const themeColor = vue.ref("#37c2bc");
  function setCurIdx(idx) {
    curIdx.value = idx;
    uni.setStorageSync("app-tabbar-index", idx);
  }
  function setCurIdxByPath(path) {
    let cleanPath = path.startsWith("/") ? path : `/${path}`;
    const parts = cleanPath.split("?");
    cleanPath = parts[0];
    for (let i = 0; i < tabbarList.length; i++) {
      const tabPath = tabbarList[i].pagePath.startsWith("/") ? tabbarList[i].pagePath : `/${tabbarList[i].pagePath}`;
      if (tabPath === cleanPath || tabPath.endsWith(cleanPath)) {
        setCurIdx(i);
        break;
      }
    }
  }
  function syncCurIdxByCurrentPage() {
    const pages = getCurrentPages();
    if (pages.length == 0)
      return null;
    const currentPage = pages[pages.length - 1];
    const route = currentPage.route;
    if (route == null || route.length == 0)
      return null;
    setCurIdxByPath(route);
  }
  function isPageTabbar(path) {
    let cleanPath = path.startsWith("/") ? path : `/${path}`;
    const parts = cleanPath.split("?");
    cleanPath = parts[0];
    for (let i = 0; i < tabbarList.length; i++) {
      const tabPath = tabbarList[i].pagePath.startsWith("/") ? tabbarList[i].pagePath : `/${tabbarList[i].pagePath}`;
      if (tabPath === cleanPath || tabPath.endsWith(cleanPath)) {
        return true;
      }
    }
    return false;
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
      return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function() {
          if (o && i >= o.length)
            o = void 0;
          return { value: o && o[i++], done: !o };
        }
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  }
  typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message2) {
    var e = new Error(message2);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };
  class I18nErrorCodesTypes extends UTS.UTSType {
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
        }
      };
    }
    constructor(options, metadata = I18nErrorCodesTypes.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
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
  class warnMessagesTypes extends UTS.UTSType {
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
        }
      };
    }
    constructor(options, metadata = warnMessagesTypes.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
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
  function getAllKeys(map) {
    let keys = [];
    map.forEach((_, key) => {
      keys.push(key);
    });
    return keys;
  }
  function isObject(obj = null) {
    return obj != null && typeof obj == "object";
  }
  class Token extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            type: { type: "Unknown", optional: false },
            value: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = Token.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
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
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
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
          }
          break;
        case "named":
          if (mode == "named") {
            const value = (_a = values[token.value]) !== null && _a !== void 0 ? _a : "";
            compiled.push(`${value}`);
          }
          break;
        case "unknown":
          if (token.value.startsWith("'") && token.value.endsWith("'")) {
            compiled.push(token.value.slice(1, -1));
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
    interpolate(message2, values = null) {
      if (values == null) {
        return [message2];
      }
      let tokens = UTS.mapGet(this._caches, message2);
      if (tokens == null) {
        tokens = parse(message2);
        this._caches.set(message2, tokens);
      }
      return compile(tokens, values);
    }
  }
  class Composer extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            id: { type: Number, optional: false },
            locale: { type: "Unknown", optional: false },
            fallbackLocale: { type: "Unknown", optional: false },
            messages: { type: "Unknown", optional: false },
            t: { type: "Unknown", optional: false },
            tc: { type: "Unknown", optional: false },
            d: { type: "Unknown", optional: false },
            n: { type: "Unknown", optional: false },
            setLocaleMessage: { type: "Unknown", optional: false },
            getLocaleMessage: { type: "Unknown", optional: false },
            mergeLocaleMessage: { type: "Unknown", optional: false },
            setDateTimeFormat: { type: "Unknown", optional: false },
            getDateTimeFormat: { type: "Unknown", optional: false },
            mergeDateTimeFormat: { type: "Unknown", optional: false },
            setNumberFormat: { type: "Unknown", optional: false },
            getNumberFormat: { type: "Unknown", optional: false },
            mergeNumberFormat: { type: "Unknown", optional: false },
            setTabBar: { type: "Unknown", optional: false },
            getTabBar: { type: "Unknown", optional: false },
            availableLocales: { type: UTS.UTSType.withGenerics(Array, [String]), optional: false },
            availabilities: { type: "Unknown", optional: false }
          };
        }
      };
    }
    constructor(options, metadata = Composer.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.id = this.__props__.id;
      this.locale = this.__props__.locale;
      this.fallbackLocale = this.__props__.fallbackLocale;
      this.messages = this.__props__.messages;
      this.t = this.__props__.t;
      this.tc = this.__props__.tc;
      this.d = this.__props__.d;
      this.n = this.__props__.n;
      this.setLocaleMessage = this.__props__.setLocaleMessage;
      this.getLocaleMessage = this.__props__.getLocaleMessage;
      this.mergeLocaleMessage = this.__props__.mergeLocaleMessage;
      this.setDateTimeFormat = this.__props__.setDateTimeFormat;
      this.getDateTimeFormat = this.__props__.getDateTimeFormat;
      this.mergeDateTimeFormat = this.__props__.mergeDateTimeFormat;
      this.setNumberFormat = this.__props__.setNumberFormat;
      this.getNumberFormat = this.__props__.getNumberFormat;
      this.mergeNumberFormat = this.__props__.mergeNumberFormat;
      this.setTabBar = this.__props__.setTabBar;
      this.getTabBar = this.__props__.getTabBar;
      this.availableLocales = this.__props__.availableLocales;
      this.availabilities = this.__props__.availabilities;
      delete this.__props__;
    }
  }
  class AvailabilitiesImpl {
    /**
     * 构造函数
     * 检查Intl API的可用性
     */
    constructor() {
      this.dateTimeFormat = false;
      this.numberFormat = false;
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
  const defaultFormatter = new BaseFormatter();
  const availabilities = new AvailabilitiesImpl();
  function setTabBarItems(tabbar2 = null) {
    if (tabbar2 == null)
      return null;
    const pages = getCurrentPages();
    const page = pages.length > 0 ? pages[pages.length - 1] : null;
    const isTabBar = page != null;
    if (!isTabBar)
      return null;
    tabbar2.forEach((text, index) => {
      uni.setTabBarItem({
        text,
        index,
        // success() {},
        fail(err) {
          uni.__log__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:102", err.errMsg);
        }
      });
    });
  }
  function getLocaleMap(locale2, key, options, root = null) {
    var _a;
    const __messages = UTSJSONObject.assign(new UTSJSONObject({}), (_a = options.getJSON(key)) !== null && _a !== void 0 ? _a : new UTSJSONObject({}));
    let map = /* @__PURE__ */ new Map();
    __messages.toMap().forEach((value = null, key2) => {
      if (UTS.isInstanceOf(value, UTSJSONObject)) {
        map.set(key2, value);
      }
    });
    if (map.size == 0 && root != null) {
      if (!map.has(locale2)) {
        map.set(locale2, new UTSJSONObject({}));
      }
    }
    return map;
  }
  function getLocaleTabbarMap(locale2, key, options) {
    var _a;
    const __messages = (_a = options.getJSON(key)) !== null && _a !== void 0 ? _a : new UTSJSONObject({});
    let map = /* @__PURE__ */ new Map();
    __messages.toMap().forEach((tabbar2 = null, key2) => {
      if (Array.isArray(tabbar2)) {
        map.set(key2, tabbar2);
        if (key2 == locale2) {
          setTimeout(() => {
            setTabBarItems(tabbar2);
          }, 500);
        }
      }
    });
    return map;
  }
  function getModifiers(options) {
    var _a;
    const __modifiers = ((_a = options.getJSON("modifiers")) !== null && _a !== void 0 ? _a : new UTSJSONObject({})).toMap();
    const _modifiers = /* @__PURE__ */ new Map();
    __modifiers.forEach((value = null, key) => {
      if (typeof value == "function") {
        try {
          _modifiers.set(key, value);
        } catch (e) {
          uni.__log__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:187", 35, "自定义修饰器函数必须是类型：(str: string) => string");
        }
      }
    });
    return _modifiers;
  }
  function getPluralizationRules(options) {
    var _a;
    const __pluralizationRules = ((_a = options.getJSON("pluralizationRules")) !== null && _a !== void 0 ? _a : new UTSJSONObject({})).toMap();
    const _pluralizationRules = /* @__PURE__ */ new Map();
    __pluralizationRules.forEach((value = null, key) => {
      if (typeof value == "function") {
        try {
          _pluralizationRules.set(key, value);
        } catch (e) {
        }
      }
    });
    return _pluralizationRules;
  }
  function getFormatter(options) {
    const __formatter = options.get("formatter");
    return __formatter != null && UTS.isInstanceOf(__formatter, BaseFormatter) ? __formatter : defaultFormatter;
  }
  let composerID = 0;
  class ComposerClass {
    /**
     * 构造函数
     * @param options 配置选项
     * @param __root 根Composer实例
     */
    constructor(options = new UTSJSONObject({}), __root = null) {
      var _a, _b;
      this._interpolate = null;
      this._link = null;
      this._warnDefault = null;
      this._formatter = getFormatter(options);
      this._modifiers = getModifiers(options);
      this._pluralizationRules = getPluralizationRules(options);
      const _inheritLocale = (_a = options.getBoolean("inheritLocale")) !== null && _a !== void 0 ? _a : true;
      const useRoot = __root != null && _inheritLocale;
      const __locale = vue.ref(useRoot ? __root.locale.value : (_b = options.getString("locale")) !== null && _b !== void 0 ? _b : DEFAULT_LOCALE);
      const _fallbackLocale = vue.ref(useRoot ? __root.fallbackLocale.value : options.get("fallbackLocale"));
      this.messages = vue.ref(getLocaleMap(__locale.value, "messages", options, __root));
      this._numberFormats = vue.ref(getLocaleMap(__locale.value, "numberFormats", options, __root));
      this._datetimeFormats = vue.ref(getLocaleMap(__locale.value, "datetimeFormats", options, __root));
      this._tabBars = vue.ref(getLocaleTabbarMap(__locale.value, "tabBars", options));
      this.locale = vue.computed({
        set: (val) => {
          __locale.value = val;
          if (__root == null) {
            uni.setStorageSync("uVueI18nLocale", val);
          }
          setTabBarItems(UTS.mapGet(this._tabBars.value, val));
        },
        get: () => {
          return __locale.value;
        }
      });
      this.fallbackLocale = vue.computed({
        set: (val = null) => {
          _fallbackLocale.value = val;
        },
        get: () => {
          var _a2;
          return (_a2 = _fallbackLocale.value) !== null && _a2 !== void 0 ? _a2 : false;
        }
      });
      this.availableLocales = getAllKeys(this.messages.value).sort();
      this.availabilities = availabilities;
      this._initMethods();
      composerID++;
      this.id = composerID;
      const interceptor = {
        complete: (_) => {
          setTimeout(() => {
            setTabBarItems(UTS.mapGet(this._tabBars.value, this.locale.value));
          }, 50);
        }
      };
      if (__root == null) {
        uni.addInterceptor("switchTab", interceptor);
      }
    }
    /**
     * 初始化内部方法
     */
    _initMethods() {
      this._link = (str, locale2 = null, values = null, visitedLinkStack, interpolateMode) => {
        const matches = str.match(linkKeyMatcher);
        let ret = str;
        if (matches == null)
          return str;
        for (let i = 0; i < matches.length; i++) {
          const link = matches[i];
          const linkKeyPrefixMatches = link.match(linkKeyPrefixMatcher);
          if (linkKeyPrefixMatches == null)
            continue;
          const _a = __read(linkKeyPrefixMatches, 2), linkPrefix = _a[0], formatterName = _a[1];
          const linkPlaceholder = link.replace(linkPrefix, "").replace(bracketsMatcher, "");
          if (visitedLinkStack.includes(linkPlaceholder)) {
            uni.__log__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:396", `发现循环引用。"${link}"已经在link"已经在${visitedLinkStack.reverse().join(" <- ")}链中访问过`);
            return ret;
          }
          if (this._interpolate == null || this._warnDefault == null) {
            return ret;
          }
          visitedLinkStack.push(linkPlaceholder);
          let translated = this._interpolate(linkPlaceholder, locale2, values, visitedLinkStack, interpolateMode);
          translated = this._warnDefault(linkPlaceholder, translated, values, interpolateMode);
          if (this._modifiers.size > 0 && formatterName != null && this._modifiers.has(formatterName))
            ;
          else if (translated != null && formatterName != null && defaultModifiers.has(formatterName)) {
            const modifier = UTS.mapGet(defaultModifiers, formatterName);
            translated = modifier(translated);
          }
          UTS.arrayPop(visitedLinkStack);
          ret = translated == null ? ret : ret.replace(link, translated);
        }
        return ret;
      };
      this._interpolate = (key, locale2 = null, values = null, visitedLinkStack, interpolateMode) => {
        var _a, _b, _c, _d, _e;
        const ___locale = locale2 !== null && locale2 !== void 0 ? locale2 : this.locale.value;
        let ret = (_b = UTSJSONObject.assign(new UTSJSONObject({}), (_a = UTS.mapGet(this.messages.value, ___locale)) !== null && _a !== void 0 ? _a : new UTSJSONObject({}))) === null || _b === void 0 ? null : _b.getString(key);
        if (this.fallbackLocale.value != false && ret == null) {
          if (typeof this.fallbackLocale.value == "string" && ___locale != this.fallbackLocale.value) {
            ret = (_d = (_c = UTS.mapGet(this.messages.value, this.fallbackLocale.value)) === null || _c === void 0 ? null : _c.getString(key)) !== null && _d !== void 0 ? _d : ret;
          } else if (Array.isArray(this.fallbackLocale.value)) {
            const arr = this.fallbackLocale.value;
            for (let i = 0; i < arr.length; i++) {
              const _ret = (_e = UTS.mapGet(this.messages.value, arr[i])) === null || _e === void 0 ? null : _e.getString(key);
              if (_ret != null) {
                ret = _ret;
                break;
              }
            }
          }
        }
        if (typeof ret == "string" && (ret.indexOf("@:") >= 0 || ret.indexOf("@.") >= 0)) {
          ret = this._link(ret, locale2, values, visitedLinkStack, interpolateMode);
        }
        return ret;
      };
      this._warnDefault = (key, message2 = null, values = null, interpolateMode) => {
        if (message2 == null) {
          uni.__log__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:483", `无法翻译键路径 '${key}'. 使用键路径的值作为默认值.`);
        }
        if (message2 == null)
          return null;
        if (key == message2)
          return key;
        return this._render(message2, values, interpolateMode);
      };
    }
    /**
     * 渲染消息
     * @param message 消息模板
     * @param values 插值值
     * @param interpolateMode 插值模式
     * @returns 渲染后的字符串
     */
    _render(message2, values = null, interpolateMode) {
      const ret = this._formatter.interpolate(message2, values);
      return interpolateMode == "string" ? `${ret.join("")}` : UTS.JSON.stringify(ret);
    }
    /**
     * 获取复数形式
     * @param message 消息模板
     * @param choice 选择值
     * @param locale 语言
     * @returns 复数形式的消息
     */
    fetchChoice(message2, choice = null, locale2 = null) {
      if (message2 == "")
        return message2;
      const choices = message2.split("|");
      const defaultImpl = (_choice = null, _choicesLength) => {
        _choice = Math.abs(_choice !== null && _choice !== void 0 ? _choice : 1);
        if (_choicesLength == 2) {
          return _choice != 0 ? _choice > 1 ? 1 : 0 : 1;
        }
        return _choice != 0 ? Math.min(_choice, 2) : 0;
      };
      let index;
      if (this._pluralizationRules.has(locale2 !== null && locale2 !== void 0 ? locale2 : this.locale.value)) {
        index = UTS.mapGet(this._pluralizationRules, locale2 !== null && locale2 !== void 0 ? locale2 : this.locale.value)(choice !== null && choice !== void 0 ? choice : 1, choices.length);
      } else {
        index = defaultImpl(choice, choices.length);
      }
      if (choices[index] == "")
        return message2;
      return choices[index].trim();
    }
    /**
     * 翻译方法
     * @param key 翻译键
     * @param values 插值值
     * @param locale 语言
     * @returns 翻译后的字符串
     */
    t(key, values = null, locale2 = null) {
      const parsedArgs = values !== null && values !== void 0 ? values : new UTSJSONObject({});
      const msg = this._warnDefault(key, this._interpolate(key, locale2, parsedArgs, [key], "string"), parsedArgs, "string");
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
    tc(key, choice = null, values = null, locale2 = null) {
      const _obj = new UTSJSONObject({ "count": choice, "n": choice });
      const predefined = values == null ? _obj : UTS.isInstanceOf(values, UTSJSONObject) ? UTSJSONObject.assign(_obj, values) : values;
      return this.fetchChoice(this.t(key, predefined, locale2), choice, locale2);
    }
    /**
     * 日期格式化方法
     * @param date 日期
     * @param key 格式键
     * @param locale 语言
     * @param options 格式化选项
     * @returns 格式化后的日期字符串
     */
    d(date = null, key = null, locale2 = null, options = null) {
      if (!this.availabilities.dateTimeFormat) {
        uni.__log__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:604", `无法格式化日期值，因为不支持 Intl.DateTimeFormat. key: ${key}, locale: ${locale2}, options: ${options}`);
        return `${date}`;
      }
      return `${date}`;
    }
    /**
     * 数字格式化方法
     * @param number 数字
     * @param key 格式键
     * @param locale 语言
     * @param options 格式化选项
     * @returns 格式化后的数字字符串
     */
    n(number2, key = null, locale2 = null, options = null) {
      if (!this.availabilities.numberFormat) {
        uni.__log__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:649", `无法格式化数字值，因为不支持 Intl.NumberFormat. key: ${key}, locale: ${locale2}, options: ${options}`);
        return number2.toString();
      }
      return number2.toString();
    }
    /**
     * 设置语言消息
     * @param locale 语言
     * @param message 消息对象
     */
    setLocaleMessage(locale2, message2) {
      const map = /* @__PURE__ */ new Map();
      this.messages.value.forEach((value, key) => {
        map.set(key, value);
      });
      map.set(locale2, message2);
      this.messages.value = map;
      this.availableLocales = getAllKeys(map).sort();
    }
    /**
     * 获取语言消息
     * @param locale 语言
     * @returns 消息对象
     */
    getLocaleMessage(locale2) {
      var _a;
      return (_a = UTS.mapGet(this.messages.value, locale2)) !== null && _a !== void 0 ? _a : new UTSJSONObject({});
    }
    /**
     * 合并语言消息
     * @param locale 语言
     * @param message 消息对象
     */
    mergeLocaleMessage(locale2, message2) {
      const map = /* @__PURE__ */ new Map();
      this.messages.value.forEach((value, key) => {
        if (key == locale2) {
          map.set(key, UTSJSONObject.assign(new UTSJSONObject({}), value, message2));
        } else {
          map.set(key, value);
        }
      });
      this.messages.value = map;
      this.availableLocales = getAllKeys(map).sort();
    }
    /**
     * 设置日期时间格式
     * @param locale 语言
     * @param format 格式对象
     */
    setDateTimeFormat(locale2, format) {
      const map = /* @__PURE__ */ new Map();
      this._datetimeFormats.value.forEach((value, key) => {
        map.set(key, value);
      });
      map.set(locale2, format);
      this._datetimeFormats.value = map;
    }
    /**
     * 获取日期时间格式
     * @param locale 语言
     * @returns 格式对象
     */
    getDateTimeFormat(locale2) {
      var _a;
      return (_a = UTS.mapGet(this._datetimeFormats.value, locale2)) !== null && _a !== void 0 ? _a : new UTSJSONObject({});
    }
    /**
     * 合并日期时间格式
     * @param locale 语言
     * @param format 格式对象
     */
    mergeDateTimeFormat(locale2, format) {
      const map = /* @__PURE__ */ new Map();
      this._datetimeFormats.value.forEach((value, key) => {
        if (key == locale2) {
          map.set(key, UTSJSONObject.assign(new UTSJSONObject({}), value, format));
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
    setNumberFormat(locale2, format) {
      const map = /* @__PURE__ */ new Map();
      this._numberFormats.value.forEach((value, key) => {
        map.set(key, value);
      });
      map.set(locale2, format);
      this._numberFormats.value = map;
    }
    /**
     * 获取数字格式
     * @param locale 语言
     * @returns 格式对象
     */
    getNumberFormat(locale2) {
      var _a;
      return (_a = UTS.mapGet(this._numberFormats.value, locale2)) !== null && _a !== void 0 ? _a : new UTSJSONObject({});
    }
    /**
     * 合并数字格式
     * @param locale 语言
     * @param format 格式对象
     */
    mergeNumberFormat(locale2, format) {
      const map = /* @__PURE__ */ new Map();
      this._numberFormats.value.forEach((value, key) => {
        if (key == locale2) {
          map.set(key, UTSJSONObject.assign(new UTSJSONObject({}), value, format));
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
    setTabBar(locale2, tabbar2) {
      const map = /* @__PURE__ */ new Map();
      this._tabBars.value.forEach((value, key) => {
        map.set(key, value);
      });
      map.set(locale2, tabbar2);
      this._tabBars.value = map;
    }
    /**
     * 获取TabBar
     * @param locale 语言
     * @returns TabBar文本数组
     */
    getTabBar(locale2) {
      var _a;
      return (_a = UTS.mapGet(this._tabBars.value, locale2)) !== null && _a !== void 0 ? _a : [];
    }
  }
  function createComposer(options = new UTSJSONObject({}), __root = null) {
    return new ComposerClass(options, __root);
  }
  let lime_i18n = null;
  class UvueI18n {
    constructor(options = new UTSJSONObject({}), root = null) {
      this.__scope = vue.effectScope();
      this.__global = this.__scope.run(() => {
        return createComposer(UTSJSONObject.assign(new UTSJSONObject({}), options), root);
      });
    }
    get mode() {
      return "composition";
    }
    get global() {
      return this.__global;
    }
    get availableLocales() {
      return getAllKeys(this.global.messages.value).sort();
    }
    dispose() {
      this.__scope.stop();
    }
    $t(key, values = null, locale2 = null) {
      const isLocale = typeof values == "string";
      const _values = isLocale ? null : values;
      const _locale = isLocale ? values : locale2;
      return this.global.t(key, _values, _locale);
    }
    $tc(key, choice = null, values = null, locale2 = null) {
      const isLocale = typeof values == "string";
      const _values = isLocale ? null : values;
      const _locale = isLocale ? values : locale2;
      return this.global.tc(key, choice, _values, _locale);
    }
    $d(date = null, key = null, locale2 = null, options = null) {
      return this.global.d(date, key, locale2, options);
    }
    $n(number2, key = null, locale2 = null, options = null) {
      const _locale = typeof locale2 == "string" ? locale2 : null;
      const _options = typeof locale2 == "object" && locale2 != null ? locale2 : options;
      return this.global.n(number2, key, _locale, _options);
    }
    get install() {
      const _install = (app = null) => {
        app.config.globalProperties.$i18n = lime_i18n;
        app.config.globalProperties.$t = function(key, values = null, locale2 = null) {
          const isLocale = typeof values == "string";
          const _values = isLocale ? null : values;
          const _locale = isLocale ? values : locale2;
          return lime_i18n.global.t(key, _values, _locale);
        };
        app.config.globalProperties.$tc = function(key, choice = null, values = null, locale2 = null) {
          const isLocale = typeof values == "string";
          const _values = isLocale ? null : values;
          const _locale = isLocale ? values : locale2;
          return lime_i18n.global.tc(key, choice, _values, _locale);
        };
        app.config.globalProperties.$d = function(date = null, key = null, locale2 = null, options = null) {
          return lime_i18n.global.d(date, key, locale2, options);
        };
        app.config.globalProperties.$n = function(number2, key = null, locale2 = null, options = null) {
          const _locale = typeof locale2 == "string" ? locale2 : null;
          const _options = typeof locale2 == "object" && locale2 != null ? locale2 : options;
          return lime_i18n.global.n(number2, key, _locale, _options);
        };
        app.config.globalProperties.$locale = lime_i18n.global.locale;
      };
      return new UTSJSONObject({
        install: _install
      });
    }
  }
  function createI18n(options = new UTSJSONObject({})) {
    lime_i18n = new UvueI18n(options);
    return lime_i18n;
  }
  const message$1 = new UTSJSONObject({
    hello: "{msg}，世界！",
    welcome: "欢迎使用 unibestX！",
    switch_success: "应用与组件库已切换为简体中文"
  });
  const tabbar$1 = new UTSJSONObject({
    home: "首页",
    basic: "基础",
    ai: "AI",
    "function": "功能",
    me: "我的"
  });
  const basic$1 = new UTSJSONObject({
    iconDemoTitle: "字体图标示例",
    svgAuthWarning: "SVG模式需授权收费",
    langTitle: "语言设置",
    langPreview: "多语言文本预览",
    uviewPreview: "组件库 (uView-Ultra) 文本预览",
    themeTitle: "主题设置",
    themePreview: "主题色效果预览",
    themeButton: "主题按钮",
    themeSuccess: "应用与组件库主题色切换成功",
    echartTitle: "ECharts 图表示例",
    echartLine: "折线图",
    echartBar: "柱状图",
    echartPie: "饼图"
  });
  const zhCN = new UTSJSONObject({
    message: message$1,
    tabbar: tabbar$1,
    basic: basic$1,
    "function": new UTSJSONObject({
      sysInfoTitle: "设备系统信息",
      brand: "手机品牌",
      model: "手机型号",
      system: "操作系统",
      platform: "运行平台",
      getSysInfoBtn: "获取系统信息",
      hapticsTitle: "触感与工具",
      vibrateBtn: "短震动反馈",
      vibrateSuccess: "已触发短震动",
      copyBtn: "复制测试文本",
      copySuccess: "复制成功",
      mediaTitle: "相机与多媒体",
      choosePhotoBtn: "拍摄/选择照片",
      scanCodeBtn: "扫码测试",
      scanResult: "扫码结果",
      noData: "暂无数据"
    })
  });
  const message = new UTSJSONObject({
    hello: "The world says {msg}!",
    welcome: "Welcome to use unibestX!",
    switch_success: "App & Component Library switched to English"
  });
  const tabbar = new UTSJSONObject({
    home: "Home",
    basic: "Basic",
    ai: "AI",
    "function": "Function",
    me: "Me"
  });
  const basic = new UTSJSONObject({
    iconDemoTitle: "Font Icon Demo",
    svgAuthWarning: "SVG mode requires authorization & fee",
    langTitle: "Language Settings",
    langPreview: "Multi-language Preview",
    uviewPreview: "UI Library (uView-Ultra) Preview",
    themeTitle: "Theme Settings",
    themePreview: "Theme Color Preview",
    themeButton: "Theme Button",
    themeSuccess: "App & Component Library theme color updated successfully",
    echartTitle: "ECharts Chart Demo",
    echartLine: "Line Chart",
    echartBar: "Bar Chart",
    echartPie: "Pie Chart"
  });
  const enUS = new UTSJSONObject({
    message,
    tabbar,
    basic,
    "function": new UTSJSONObject({
      sysInfoTitle: "Device System Info",
      brand: "Brand",
      model: "Model",
      system: "OS",
      platform: "Platform",
      getSysInfoBtn: "Get System Info",
      hapticsTitle: "Short Vibration Feedback",
      vibrateBtn: "Short Vibration Feedback",
      vibrateSuccess: "Vibration triggered",
      copyBtn: "Copy Test Text",
      copySuccess: "Copied successfully",
      mediaTitle: "Camera & Media",
      choosePhotoBtn: "Take Photo/Choose Image",
      scanCodeBtn: "Scan Code Test",
      scanResult: "Scan Result",
      noData: "No data"
    })
  });
  const i18n = createI18n(new UTSJSONObject({
    // 使用uni.getStorageSync('uVueI18nLocale') 能获取上次退出应用后保存的语言
    locale: "zh-CN",
    fallbackLocale: "en-US",
    messages: new UTSJSONObject({
      "zh-CN": zhCN,
      "en-US": enUS
    })
  }));
  function t$1(key, named = null) {
    if (named != null) {
      return i18n.global.t(key, named);
    }
    return i18n.global.t(key);
  }
  function $t(key, named = null) {
    return t$1(key, named);
  }
  function getI18nText(key) {
    let cleanKey = key;
    if (cleanKey.startsWith("%") && cleanKey.endsWith("%") && cleanKey.length > 2) {
      cleanKey = cleanKey.substring(1, cleanKey.length - 1);
    }
    return i18n.global.t(cleanKey);
  }
  function setTabbarItem() {
    for (let i = 0; i < tabbarList.length; i++) {
      const item = tabbarList[i];
      const text = getI18nText(item.text);
      uni.setTabBarItem({
        index: i,
        text
      });
    }
  }
  const __className$1H = "GenSrcTabbarTabbarItem";
  const inactiveColor = "#999999";
  const _sfc_main$1I = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1H,
    __filename: "src/tabbar/TabbarItem.uvue",
    __name: "TabbarItem",
    props: {
      item: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      },
      isBulge: {
        type: Boolean,
        default: false
      }
    },
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcTabbarTabbarItemSharedData", sharedDataClassId: 0 })));
      const props = __props;
      const tabbarItem = vue.computed(() => {
        return props.item;
      });
      function getIcon() {
        if (curIdx.value == props.index && tabbarItem.value.iconActive.length > 0) {
          return tabbarItem.value.iconActive;
        }
        return tabbarItem.value.icon;
      }
      function getActiveColor() {
        return curIdx.value == props.index ? themeColor.value : inactiveColor;
      }
      function isDotBadge() {
        return tabbarItem.value.badge != null && tabbarItem.value.badge == "dot";
      }
      function isNumberBadge() {
        return tabbarItem.value.badge != null && tabbarItem.value.badge != "dot";
      }
      function getBadgeText() {
        const badge = tabbarItem.value.badge;
        if (badge == null || badge == "dot")
          return "";
        if (typeof badge == "number") {
          const num = badge;
          if (num > 99)
            return "99+";
          return `${num}`;
        }
        return `${badge}`;
      }
      function getText() {
        return $t(tabbarItem.value.text);
      }
      return () => {
        "raw js";
        const _component_uni_icons = vue.resolveComponent("uni-icons");
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 0, vue.toSharedDataBoolean(props.isBulge));
        }, () => {
        }, () => {
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 1, vue.toSharedDataBoolean(vue.unref(tabbarItem).iconType === "image"));
          }, () => {
            vue.renderSharedDataEffect(() => {
              return vue.setSharedDataAttr(__sharedData, 2, vue.toSharedDataString(getIcon()));
            });
          });
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 3, vue.toSharedDataBoolean(vue.unref(tabbarItem).iconType === "icon"));
          }, () => {
            const n11 = vue.createSharedDataComponentWithFallback(_component_uni_icons, "dc968c9c", {
              type: () => {
                return getIcon();
              },
              size: 24,
              color: () => {
                return getActiveColor();
              }
            });
            vue.setSharedData(__sharedData, 4, n11 == null ? void 0 : n11.sharedData);
          });
          vue.renderSharedDataEffect(() => {
            vue.setSharedDataStyle(__sharedData, 8, { color: getActiveColor() });
            vue.setSharedData(__sharedData, 9, vue.toDisplayString(getText()));
          });
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 5, vue.toSharedDataBoolean(isDotBadge()));
          }, () => {
          });
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 6, vue.toSharedDataBoolean(isNumberBadge()));
          }, () => {
            vue.renderSharedDataEffect(() => {
              return vue.setSharedData(__sharedData, 7, vue.toDisplayString(getBadgeText()));
            });
          });
        }, 261);
        return __sharedData;
      };
    }
  });
  const _style_0$1J = {};
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const TabbarItem = /* @__PURE__ */ _export_sfc(_sfc_main$1I, [["styles", [_style_0$1J]]]);
  class SystemSafeAreaInsets extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            top: { type: Number, optional: false },
            right: { type: Number, optional: false },
            bottom: { type: Number, optional: false },
            left: { type: Number, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = SystemSafeAreaInsets.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.top = this.__props__.top;
      this.right = this.__props__.right;
      this.bottom = this.__props__.bottom;
      this.left = this.__props__.left;
      delete this.__props__;
    }
  }
  class SystemInfoType extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            screenWidth: { type: Number, optional: false },
            screenHeight: { type: Number, optional: false },
            windowWidth: { type: Number, optional: false },
            windowHeight: { type: Number, optional: false },
            statusBarHeight: { type: Number, optional: false },
            pixelRatio: { type: Number, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = SystemInfoType.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.screenWidth = this.__props__.screenWidth;
      this.screenHeight = this.__props__.screenHeight;
      this.windowWidth = this.__props__.windowWidth;
      this.windowHeight = this.__props__.windowHeight;
      this.statusBarHeight = this.__props__.statusBarHeight;
      this.pixelRatio = this.__props__.pixelRatio;
      delete this.__props__;
    }
  }
  const systemInfo = vue.ref(null);
  const safeAreaInsets = vue.ref(null);
  function updateSystemInfo() {
    const sysInfo = uni.getSystemInfoSync();
    systemInfo.value = new SystemInfoType({
      screenWidth: sysInfo.screenWidth,
      screenHeight: sysInfo.screenHeight,
      windowWidth: sysInfo.windowWidth,
      windowHeight: sysInfo.windowHeight,
      statusBarHeight: sysInfo.statusBarHeight,
      pixelRatio: sysInfo.pixelRatio
    });
    const safeArea = sysInfo.safeAreaInsets;
    if (safeArea != null) {
      safeAreaInsets.value = new SystemSafeAreaInsets({
        top: safeArea.top,
        right: safeArea.right,
        bottom: safeArea.bottom,
        left: safeArea.left
      });
    }
  }
  updateSystemInfo();
  const __className$1G = "GenSrcTabbarIndex";
  const TABBAR_HEIGHT = 50;
  const TABBAR_CONTAINER_HEIGHT = 80;
  const _sfc_main$1H = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1G,
    __filename: "src/tabbar/index.uvue",
    __name: "index",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcTabbarIndexSharedData", sharedDataClassId: 0 })));
      const safeAreaBottom = vue.computed(() => {
        const insets = safeAreaInsets.value;
        if (insets != null) {
          return insets.bottom;
        }
        return 0;
      });
      function handleClickBulge() {
        uni.navigateTo({
          url: "/src/pages/ai/ai"
        });
      }
      function handleClick(index) {
        if (index == curIdx.value)
          return null;
        const list = tabbarList;
        if (list.length <= index)
          return null;
        if (list[index].isBulge) {
          handleClickBulge();
          return null;
        }
        const url = list[index].pagePath;
        setCurIdx(index);
        uni.switchTab({ url });
      }
      vue.onMounted(() => {
        syncCurIdxByCurrentPage();
        uni.hideTabBar(new UTSJSONObject({
          fail: (err = null) => {
            uni.__log__("log", "at src/tabbar/index.uvue:51", "hideTabBar fail: ", err);
          }
        }));
      });
      return () => {
        "raw js";
        vue.renderSharedDataEffect(() => {
          const _safeAreaBottom = vue.unref(safeAreaBottom);
          const __height_TABBAR_HEIGHT_safeAreaBottom_px = { height: `${TABBAR_HEIGHT + _safeAreaBottom}px` };
          vue.setSharedDataStyle(__sharedData, 1, __height_TABBAR_HEIGHT_safeAreaBottom_px);
          vue.setSharedDataStyle(__sharedData, 2, { height: `${TABBAR_CONTAINER_HEIGHT + _safeAreaBottom}px` });
          vue.setSharedDataStyle(__sharedData, 3, __height_TABBAR_HEIGHT_safeAreaBottom_px);
        });
        vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 0, vue.createSharedDataVFor(__sharedDataScope, () => {
          return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$1G}SharedData`, sharedDataClassId: 1 });
        })), () => {
          return vue.unref(tabbarList);
        }, (__sharedData_VFor0, _for_item0, _for_key0) => {
          vue.renderSharedDataEffect(() => {
            return vue.setSharedDataClass(__sharedData_VFor0, 3, ["tabbar-item", { "tabbar-item-bulge": _for_item0.value.isBulge }]);
          });
          const n3 = vue.createSharedDataComponent(TabbarItem, "10d18caa-" + _for_key0.value, {
            item: () => {
              return _for_item0.value;
            },
            index: () => {
              return _for_key0.value;
            },
            "is-bulge": () => {
              return _for_item0.value.isBulge;
            }
          });
          vue.setSharedData(__sharedData_VFor0, 1, n3.sharedData);
          vue.setSharedDataEvent(__sharedData_VFor0, 2, () => {
            return handleClick(_for_key0.value);
          });
          return null;
        }, (__sharedData_VFor0, item, index) => {
          return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(index));
        }, 1);
        vue.renderSharedDataEffect(() => {
          return vue.setSharedDataStyle(__sharedData, 4, { height: `${vue.unref(safeAreaBottom)}px` });
        });
        return __sharedData;
      };
    }
  });
  const _style_0$1I = {};
  const Tabbar = /* @__PURE__ */ _export_sfc(_sfc_main$1H, [["styles", [_style_0$1I]]]);
  class SubscriptionMutation extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            type: { type: "Unknown", optional: false },
            storeId: { type: String, optional: false },
            payload: { type: "Unknown", optional: true },
            timestamp: { type: Number, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = SubscriptionMutation.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.type = this.__props__.type;
      this.storeId = this.__props__.storeId;
      this.payload = this.__props__.payload;
      this.timestamp = this.__props__.timestamp;
      delete this.__props__;
    }
  }
  class ActionContext extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            name: { type: String, optional: false },
            storeId: { type: String, optional: false },
            args: { type: "Unknown", optional: false }
          };
        }
      };
    }
    constructor(options, metadata = ActionContext.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.name = this.__props__.name;
      this.storeId = this.__props__.storeId;
      this.args = this.__props__.args;
      delete this.__props__;
    }
  }
  class PiniaPluginContext extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            pinia: { type: "Unknown", optional: false },
            storeId: { type: String, optional: false },
            store: { type: "Any", optional: false },
            state: { type: "Any", optional: false }
          };
        }
      };
    }
    constructor(options, metadata = PiniaPluginContext.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.pinia = this.__props__.pinia;
      this.storeId = this.__props__.storeId;
      this.store = this.__props__.store;
      this.state = this.__props__.state;
      delete this.__props__;
    }
  }
  class PersistSerializer extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            serialize: { type: "Unknown", optional: false },
            deserialize: { type: "Unknown", optional: false }
          };
        }
      };
    }
    constructor(options, metadata = PersistSerializer.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.serialize = this.__props__.serialize;
      this.deserialize = this.__props__.deserialize;
      delete this.__props__;
    }
  }
  class PersistOptions extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            keyPrefix: { type: String, optional: false },
            includeStores: { type: "Unknown", optional: true },
            excludeStores: { type: "Unknown", optional: false },
            serializer: { type: PersistSerializer, optional: true }
          };
        }
      };
    }
    constructor(options, metadata = PersistOptions.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.keyPrefix = this.__props__.keyPrefix;
      this.includeStores = this.__props__.includeStores;
      this.excludeStores = this.__props__.excludeStores;
      this.serializer = this.__props__.serializer;
      delete this.__props__;
    }
  }
  class StateSubscriptionList {
    constructor() {
      this._list = [];
    }
    /**
     * 添加订阅，返回取消订阅函数
     */
    add(cb) {
      this._list.push(cb);
      return () => {
        this.remove(cb);
      };
    }
    /** 移除某个订阅 */
    remove(cb) {
      const idx = this._list.indexOf(cb);
      if (idx >= 0) {
        this._list.splice(idx, 1);
      }
    }
    /** 触发所有订阅 */
    trigger(mutation, state) {
      const snapshot = [];
      for (let i = 0; i < this._list.length; i++) {
        snapshot.push(this._list[i]);
      }
      for (let i = 0; i < snapshot.length; i++) {
        try {
          snapshot[i](mutation, state);
        } catch (e) {
          uni.__log__("warn", "at uni_modules/x-pinia-s/instans/subscriptions.uts:54", "[x-pinia-s] state subscription error:", e);
        }
      }
    }
    /** 清空全部订阅 */
    clear() {
      this._list = [];
    }
    /** 当前订阅数量 */
    size() {
      return this._list.length;
    }
  }
  class ActionSubscriptionList {
    constructor() {
      this._list = [];
    }
    /**
     * 添加 action 订阅，返回取消订阅函数
     */
    add(cb) {
      this._list.push(cb);
      return () => {
        this.remove(cb);
      };
    }
    /** 移除某个订阅 */
    remove(cb) {
      const idx = this._list.indexOf(cb);
      if (idx >= 0) {
        this._list.splice(idx, 1);
      }
    }
    /**
     * 触发 action 订阅。
     * 调用方负责调用真实 action 并通过 afterCallbacks/errorCallbacks 反馈结果。
     *
     * @returns 收集到的 after / onError 回调数组（由调用方在 action 完成后逐一调用）
     */
    trigger(ctx) {
      const afterList = [];
      const errorList = [];
      const after = (cb) => {
        afterList.push(cb);
      };
      const onError = (cb) => {
        errorList.push(cb);
      };
      const snapshot = [];
      for (let i = 0; i < this._list.length; i++) {
        snapshot.push(this._list[i]);
      }
      for (let i = 0; i < snapshot.length; i++) {
        try {
          snapshot[i](ctx, after, onError);
        } catch (e) {
          uni.__log__("warn", "at uni_modules/x-pinia-s/instans/subscriptions.uts:118", "[x-pinia-s] action subscription error:", e);
        }
      }
      return new ActionTriggerResult({
        afterList,
        errorList
      });
    }
    /** 清空 */
    clear() {
      this._list = [];
    }
    /** 当前订阅数量 */
    size() {
      return this._list.length;
    }
  }
  class ActionTriggerResult extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            afterList: { type: "Unknown", optional: false },
            errorList: { type: "Unknown", optional: false }
          };
        }
      };
    }
    constructor(options, metadata = ActionTriggerResult.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.afterList = this.__props__.afterList;
      this.errorList = this.__props__.errorList;
      delete this.__props__;
    }
  }
  class PiniaStoreBase {
    constructor() {
      this.$id = "";
      this._state = null;
      this._stateSubs = new StateSubscriptionList();
      this._actionSubs = new ActionSubscriptionList();
      this._watchStopper = null;
      this._pinia = null;
      this._bound = false;
      this._scope = null;
    }
    /** 当前 state 引用（与子类的 state 字段是同一对象；可能为 null，子类未调用 bindState 时） */
    get $state() {
      return this._state;
    }
    // ============ 子类必调工具 ============
    /**
     * 绑定状态。子类必须在 constructor 中调用一次：
     * ```uts
     * constructor() {
     *   super()
     *   this.bindState(this.state)   // this.state 是子类自己声明的 reactive 对象
     * }
     * ```
     *
     * 入参类型为 any —— UTS 名义类型系统下，用户的 state 类型 (reactive<T>) 与
     * 任何系统类型都不兼容；用 any 让调用方无需 cast，且内部不再尝试转 UTSJSONObject
     * （以前的 `state as any as UTSJSONObject` 会在运行时抛 ClassCastException）。
     */
    bindState(state = null) {
      if (this._bound) {
        uni.__log__("warn", "at uni_modules/x-pinia-s/instans/storeBase.uts:106", "[x-pinia-s][" + this.$id + "] bindState 只能调用一次");
        return null;
      }
      this._bound = true;
      this._state = state;
    }
    // ============ 可重写的 Template Method（按需重写） ============
    /**
     * 子类重写：定义 `$reset()` 时如何把 state 设回初始值。
     * 默认空实现 —— 不重写则 `$reset()` 是 no-op（仅触发订阅器）。
     */
    _doReset() {
    }
    /**
     * 子类重写：把外部 UTSJSONObject 数据装载到 state。
     * - `$patch(partial)` 调用本方法
     * - 持久化插件启动恢复时调用本方法
     *
     * 实现时建议判断字段是否存在，再赋值，以兼容 partial：
     * ```uts
     * if (data['count'] != null) this.state.count = data['count'] as number
     * ```
     *
     * 默认空实现 —— 不重写则 `$patch()` 和持久化恢复都是 no-op。
     */
    _hydrate(_data) {
    }
    /**
     * 子类重写：把 state 序列化为 UTSJSONObject。
     * - 状态变更订阅（$subscribe）回调用本方法生成 state 视图
     * - 持久化插件保存时调用本方法
     *
     * 默认返回空对象 —— 不重写则订阅器收到的 state 永远是 `{}`，持久化也无意义。
     */
    _serialize() {
      return new UTSJSONObject({});
    }
    // ============ Action 包装（可选） ============
    /**
     * 让某个 action 触发 $onAction 订阅器。普通 action 直接写 method 即可，
     * 仅在主动想被 $onAction 追踪时才包装。
     */
    callAction(name, fn) {
      return this._invokeAction(name, fn, []);
    }
    /**
     * 同 callAction，但额外把参数列表上报给订阅器。
     */
    callActionWithArgs(name, fn, args) {
      return this._invokeAction(name, fn, args);
    }
    /** 内部 action 执行器 */
    _invokeAction(name, fn, args) {
      const actionCtx = new ActionContext({
        name,
        storeId: this.$id,
        args
      });
      const triggerResult = this._actionSubs.trigger(actionCtx);
      let result = null;
      try {
        result = fn();
      } catch (e) {
        for (let i = 0; i < triggerResult.errorList.length; i++) {
          try {
            triggerResult.errorList[i](e);
          } catch (e2) {
            uni.__log__("warn", "at uni_modules/x-pinia-s/instans/storeBase.uts:179", "[x-pinia-s][" + this.$id + "] onError callback error:", e2);
          }
        }
        throw e;
      }
      for (let i = 0; i < triggerResult.afterList.length; i++) {
        try {
          triggerResult.afterList[i](result);
        } catch (e3) {
          uni.__log__("warn", "at uni_modules/x-pinia-s/instans/storeBase.uts:188", "[x-pinia-s][" + this.$id + "] after callback error:", e3);
        }
      }
      return result;
    }
    // ============ 公共方法 ============
    /** 浅合并 partial 到 state（依赖子类的 _hydrate 实现） */
    $patch(partial) {
      this._hydrate(partial);
      const m = new SubscriptionMutation({
        type: "patch object",
        storeId: this.$id,
        payload: partial,
        timestamp: Date.now()
      });
      const snapshot = this._serialize();
      this._stateSubs.trigger(m, snapshot);
      if (this._pinia != null) {
        this._pinia.state[this.$id] = snapshot;
      }
    }
    /** 重置 state 到初始值（依赖子类的 _doReset 实现） */
    $reset() {
      this._doReset();
      const m = new SubscriptionMutation({
        type: "reset",
        storeId: this.$id,
        payload: null,
        timestamp: Date.now()
      });
      const snapshot = this._serialize();
      this._stateSubs.trigger(m, snapshot);
      if (this._pinia != null) {
        this._pinia.state[this.$id] = snapshot;
      }
    }
    /** 订阅状态变更，返回取消订阅函数 */
    $subscribe(cb) {
      return this._stateSubs.add(cb);
    }
    /** 订阅 action 调用，返回取消订阅函数 */
    $onAction(cb) {
      return this._actionSubs.add(cb);
    }
    /** 销毁 store：停止 watch、清空订阅、停止 effect 作用域、从 Pinia 注册表移除 */
    $dispose() {
      if (this._watchStopper != null) {
        try {
          this._watchStopper();
        } catch (e) {
          uni.__log__("warn", "at uni_modules/x-pinia-s/instans/storeBase.uts:244", "[x-pinia-s][" + this.$id + "] watch stop error:", e);
        }
        this._watchStopper = null;
      }
      this._stateSubs.clear();
      this._actionSubs.clear();
      if (this._scope != null) {
        try {
          this._scope.stop();
        } catch (e) {
          uni.__log__("warn", "at uni_modules/x-pinia-s/instans/storeBase.uts:255", "[x-pinia-s][" + this.$id + "] scope stop error:", e);
        }
        this._scope = null;
      }
      if (this._pinia != null) {
        this._pinia._stores.delete(this.$id);
      }
    }
    // ============ 内部初始化（由 defineStore 调用） ============
    /**
     * 由 defineStore 调用，注入 id、pinia、启动 watch。
     * @internal 用户代码不要调用本方法。
     */
    _setupBy(id, pinia2) {
      this.$id = id;
      this._pinia = pinia2;
      if (this._state != null) {
        const stateRef = this._state;
        const sl = this._stateSubs;
        const sid = id;
        const piniaRef = pinia2;
        const selfRef = this;
        this._watchStopper = vue.watch(() => {
          return stateRef;
        }, () => {
          const m = new SubscriptionMutation({
            type: "direct",
            storeId: sid,
            payload: null,
            timestamp: Date.now()
          });
          const snapshot = selfRef._serialize();
          sl.trigger(m, snapshot);
          piniaRef.state[sid] = snapshot;
        }, { deep: true });
      }
      pinia2.state[id] = this._serialize();
    }
  }
  let _activePinia = null;
  function setActivePinia(pinia2 = null) {
    _activePinia = pinia2;
  }
  function getActivePinia() {
    return _activePinia;
  }
  class Pinia {
    constructor() {
      this.state = new UTSJSONObject({});
      this._stores = /* @__PURE__ */ new Map();
      this._plugins = [];
      this._e = vue.effectScope();
      this._installed = false;
    }
    /**
     * Vue app.use(pinia) 时被调用
     */
    install(app = null) {
      if (this._installed) {
        uni.__log__("warn", "at uni_modules/x-pinia-s/instans/createPinia.uts:39", "[x-pinia-s] pinia already installed on a Vue app");
        return null;
      }
      this._installed = true;
      setActivePinia(this);
    }
    /**
     * 注册插件
     */
    use(plugin) {
      this._plugins.push(plugin);
      const piniaRef = this;
      this._stores.forEach((store = null, _id) => {
        applyPluginToStore(piniaRef, store, plugin);
      });
      return this;
    }
  }
  function applyPluginToStore(pinia2, store = null, plugin) {
    const storeBase = store;
    const ctx = new PiniaPluginContext({
      pinia: pinia2,
      storeId: storeBase.$id,
      store,
      state: storeBase.$state
    });
    try {
      plugin(ctx);
    } catch (e) {
      uni.__log__("warn", "at uni_modules/x-pinia-s/instans/createPinia.uts:88", "[x-pinia-s] plugin error on store " + ctx.storeId + ":", e);
    }
  }
  function createPinia() {
    const pinia2 = new Pinia();
    setActivePinia(pinia2);
    return pinia2;
  }
  function defineStore(id, factory) {
    return () => {
      const pinia2 = getActivePinia();
      if (pinia2 == null) {
        throw new Error("[x-pinia-s] no active Pinia. 请先在 main.uts 中调用 createPinia() 并 app.use(pinia)");
      }
      const activePinia = pinia2;
      const cached = UTS.mapGet(activePinia._stores, id);
      if (cached != null) {
        uni.__log__("log", "at uni_modules/x-pinia-s/instans/defineStore.uts:57", "[x-pinia-s] reuse cached store:", id);
        return cached;
      }
      uni.__log__("log", "at uni_modules/x-pinia-s/instans/defineStore.uts:60", "[x-pinia-s] create new store:", id);
      const holder = [];
      activePinia._e.run(() => {
        const childScope = vue.effectScope();
        childScope.run(() => {
          const created = factory();
          const base = created;
          base._scope = childScope;
          base._setupBy(id, activePinia);
          holder.push(created);
        });
      });
      const finalInstance = holder[0];
      activePinia._stores.set(id, finalInstance);
      for (let i = 0; i < activePinia._plugins.length; i++) {
        applyPluginToStore(activePinia, finalInstance, activePinia._plugins[i]);
      }
      return finalInstance;
    };
  }
  const defaultSerializer = new PersistSerializer(
    {
      serialize: (state) => {
        const s = UTS.JSON.stringify(state);
        return s == null ? "{}" : s;
      },
      deserialize: (raw) => {
        if (raw == "")
          return new UTSJSONObject({});
        const parsed = UTS.JSON.parseObject(raw);
        if (parsed == null)
          return new UTSJSONObject({});
        return parsed;
      }
    }
    /** 默认配置 */
  );
  function mergePersistOptions(opts = null) {
    const defaults = new PersistOptions({
      keyPrefix: "pinia:",
      includeStores: null,
      excludeStores: [],
      serializer: null
    });
    if (opts == null)
      return defaults;
    const o = opts;
    return new PersistOptions({
      keyPrefix: o.keyPrefix,
      includeStores: o.includeStores,
      excludeStores: o.excludeStores,
      serializer: o.serializer
    });
  }
  function shouldPersist(storeId, opts) {
    for (let i = 0; i < opts.excludeStores.length; i++) {
      if (opts.excludeStores[i] == storeId)
        return false;
    }
    if (opts.includeStores == null)
      return true;
    const list = opts.includeStores;
    for (let i = 0; i < list.length; i++) {
      if (list[i] == storeId)
        return true;
    }
    return false;
  }
  function createPersistPlugin(opts = null) {
    const config2 = mergePersistOptions(opts);
    const serializer = config2.serializer == null ? defaultSerializer : config2.serializer;
    const plugin = (ctx) => {
      const id = ctx.storeId;
      if (!shouldPersist(id, config2))
        return null;
      const storageKey = config2.keyPrefix + id;
      const storeBase = ctx.store;
      try {
        const raw = uni.getStorageSync(storageKey);
        if (raw != null && typeof raw == "string" && raw != "") {
          const restored = serializer.deserialize(raw);
          storeBase._hydrate(restored);
        }
      } catch (e) {
        uni.__log__("warn", "at uni_modules/x-pinia-s/instans/persist.uts:99", "[x-pinia-s][persist] restore failed for " + id + ":", e);
      }
      storeBase.$subscribe((_mutation, state) => {
        try {
          const str = serializer.serialize(state);
          uni.setStorageSync(storageKey, str);
        } catch (e) {
          uni.__log__("warn", "at uni_modules/x-pinia-s/instans/persist.uts:109", "[x-pinia-s][persist] save failed for " + id + ":", e);
        }
      });
    };
    return plugin;
  }
  class ILoginForm extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            username: { type: String, optional: false },
            password: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = ILoginForm.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.username = this.__props__.username;
      this.password = this.__props__.password;
      delete this.__props__;
    }
  }
  class ISingleTokenRes extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            token: { type: String, optional: false },
            expiresIn: { type: Number, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = ISingleTokenRes.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.token = this.__props__.token;
      this.expiresIn = this.__props__.expiresIn;
      delete this.__props__;
    }
  }
  class IDoubleTokenRes extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            accessToken: { type: String, optional: false },
            accessExpiresIn: { type: Number, optional: false },
            refreshToken: { type: String, optional: false },
            refreshExpiresIn: { type: Number, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = IDoubleTokenRes.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.accessToken = this.__props__.accessToken;
      this.accessExpiresIn = this.__props__.accessExpiresIn;
      this.refreshToken = this.__props__.refreshToken;
      this.refreshExpiresIn = this.__props__.refreshExpiresIn;
      delete this.__props__;
    }
  }
  class ITokenState extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            token: { type: String, optional: false },
            expiresIn: { type: Number, optional: false },
            accessToken: { type: String, optional: false },
            accessExpiresIn: { type: Number, optional: false },
            refreshToken: { type: String, optional: false },
            refreshExpiresIn: { type: Number, optional: false },
            tokenExpireTime: { type: Number, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = ITokenState.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.token = this.__props__.token;
      this.expiresIn = this.__props__.expiresIn;
      this.accessToken = this.__props__.accessToken;
      this.accessExpiresIn = this.__props__.accessExpiresIn;
      this.refreshToken = this.__props__.refreshToken;
      this.refreshExpiresIn = this.__props__.refreshExpiresIn;
      this.tokenExpireTime = this.__props__.tokenExpireTime;
      delete this.__props__;
    }
  }
  class TokenStore extends PiniaStoreBase {
    // 2. constructor
    constructor() {
      super();
      this.state = vue.reactive(new ITokenState({
        token: "",
        expiresIn: 0,
        accessToken: "",
        accessExpiresIn: 0,
        refreshToken: "",
        refreshExpiresIn: 0,
        tokenExpireTime: 0
      }));
      this.bindState(this.state);
    }
    // ==========================================
    // 持久化钩子
    // ==========================================
    _doReset() {
      this.state.token = "";
      this.state.expiresIn = 0;
      this.state.accessToken = "";
      this.state.accessExpiresIn = 0;
      this.state.refreshToken = "";
      this.state.refreshExpiresIn = 0;
      this.state.tokenExpireTime = 0;
    }
    _hydrate(_data) {
      if (_data["token"] != null)
        this.state.token = _data["token"];
      if (_data["expiresIn"] != null)
        this.state.expiresIn = _data["expiresIn"];
      if (_data["accessToken"] != null)
        this.state.accessToken = _data["accessToken"];
      if (_data["accessExpiresIn"] != null)
        this.state.accessExpiresIn = _data["accessExpiresIn"];
      if (_data["refreshToken"] != null)
        this.state.refreshToken = _data["refreshToken"];
      if (_data["refreshExpiresIn"] != null)
        this.state.refreshExpiresIn = _data["refreshExpiresIn"];
      if (_data["tokenExpireTime"] != null)
        this.state.tokenExpireTime = _data["tokenExpireTime"];
    }
    _serialize() {
      return new UTSJSONObject({
        token: this.state.token,
        expiresIn: this.state.expiresIn,
        accessToken: this.state.accessToken,
        accessExpiresIn: this.state.accessExpiresIn,
        refreshToken: this.state.refreshToken,
        refreshExpiresIn: this.state.refreshExpiresIn,
        tokenExpireTime: this.state.tokenExpireTime
      });
    }
    // ==========================================
    // Actions
    // ==========================================
    /**
     * 设置单 token 信息，并记录过期时间
     */
    setSingleToken(res) {
      this.state.token = res.token;
      this.state.expiresIn = res.expiresIn;
      const expireTime = Date.now() + res.expiresIn * 1e3;
      this.state.tokenExpireTime = expireTime;
      uni.setStorageSync("accessTokenExpireTime", expireTime);
    }
    /**
     * 设置双 token 信息，并记录过期时间
     */
    setDoubleToken(res) {
      this.state.accessToken = res.accessToken;
      this.state.accessExpiresIn = res.accessExpiresIn;
      this.state.refreshToken = res.refreshToken;
      this.state.refreshExpiresIn = res.refreshExpiresIn;
      const now = Date.now();
      const expireTime = now + res.accessExpiresIn * 1e3;
      this.state.tokenExpireTime = expireTime;
      uni.setStorageSync("accessTokenExpireTime", expireTime);
      uni.setStorageSync("refreshTokenExpireTime", now + res.refreshExpiresIn * 1e3);
    }
    /**
     * 清除所有 token 信息
     */
    clearToken() {
      this._doReset();
      uni.removeStorageSync("accessTokenExpireTime");
      uni.removeStorageSync("refreshTokenExpireTime");
    }
    /**
     * 获取当前有效的 token 字符串（不校验过期，仅返回内存中的值）
     * 建议配合 isTokenValid 使用
     */
    getToken() {
      if (this.state.accessToken != "") {
        return this.state.accessToken;
      }
      return this.state.token;
    }
    /**
     * 检查 accessToken 是否有效（未过期）
     */
    isTokenValid() {
      if (this.state.tokenExpireTime <= 0) {
        const val = uni.getStorageSync("accessTokenExpireTime");
        if (val != null && val !== "") {
          const num = parseFloat(val.toString());
          if (!isNaN(num)) {
            this.state.tokenExpireTime = num;
          }
        }
      }
      return this.state.tokenExpireTime > 0 && Date.now() < this.state.tokenExpireTime;
    }
    /**
     * 检查 refreshToken 是否有效（未过期）
     */
    isRefreshTokenValid() {
      const val = uni.getStorageSync("refreshTokenExpireTime");
      if (val == null || val === "")
        return false;
      const num = parseFloat(val.toString());
      if (isNaN(num))
        return false;
      return Date.now() < num;
    }
    /**
     * 是否已有登录 token 信息（不论是否过期）
     */
    hasLoginInfo() {
      return this.state.accessToken != "" || this.state.token != "";
    }
    /**
     * 是否已登录且 token 有效
     */
    hasValidLogin() {
      return this.hasLoginInfo() && this.isTokenValid();
    }
  }
  const useTokenStore = defineStore("token", () => {
    return new TokenStore();
  });
  class IUserInfo extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            userId: { type: Number, optional: false },
            username: { type: String, optional: false },
            nickname: { type: String, optional: false },
            avatar: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = IUserInfo.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.userId = this.__props__.userId;
      this.username = this.__props__.username;
      this.nickname = this.__props__.nickname;
      this.avatar = this.__props__.avatar;
      delete this.__props__;
    }
  }
  class IUserState extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            userInfo: { type: IUserInfo, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = IUserState.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.userInfo = this.__props__.userInfo;
      delete this.__props__;
    }
  }
  const DEFAULT_AVATAR = "/static/logo.png";
  const defaultUserInfo = new IUserInfo({
    userId: -1,
    username: "",
    nickname: "",
    avatar: DEFAULT_AVATAR
  });
  new IUserState(
    {
      userInfo: defaultUserInfo
    }
    // ==========================================
    // Store 实现
    // ==========================================
  );
  class UserStore extends PiniaStoreBase {
    // 2. constructor
    constructor() {
      super();
      this.state = vue.reactive(new IUserState({
        userInfo: new IUserInfo({
          userId: -1,
          username: "",
          nickname: "",
          avatar: DEFAULT_AVATAR
        })
      }));
      this.bindState(this.state);
    }
    // ==========================================
    // 持久化钩子
    // ==========================================
    _doReset() {
      this.state.userInfo.userId = defaultUserInfo.userId;
      this.state.userInfo.username = defaultUserInfo.username;
      this.state.userInfo.nickname = defaultUserInfo.nickname;
      this.state.userInfo.avatar = defaultUserInfo.avatar;
    }
    _hydrate(_data) {
      if (_data["userId"] != null)
        this.state.userInfo.userId = _data["userId"];
      if (_data["username"] != null)
        this.state.userInfo.username = _data["username"];
      if (_data["nickname"] != null)
        this.state.userInfo.nickname = _data["nickname"];
      if (_data["avatar"] != null)
        this.state.userInfo.avatar = _data["avatar"];
      if (_data["userInfo"] != null) {
        const infoObj = _data["userInfo"];
        if (infoObj["userId"] != null)
          this.state.userInfo.userId = infoObj["userId"];
        if (infoObj["username"] != null)
          this.state.userInfo.username = infoObj["username"];
        if (infoObj["nickname"] != null)
          this.state.userInfo.nickname = infoObj["nickname"];
        if (infoObj["avatar"] != null)
          this.state.userInfo.avatar = infoObj["avatar"];
      }
    }
    _serialize() {
      const infoObj = new UTSJSONObject({
        userId: this.state.userInfo.userId,
        username: this.state.userInfo.username,
        nickname: this.state.userInfo.nickname,
        avatar: this.state.userInfo.avatar
      });
      return new UTSJSONObject({
        userInfo: infoObj
      });
    }
    // ==========================================
    // Actions
    // ==========================================
    /**
     * 设置用户信息，头像为空时使用默认头像
     */
    setUserInfo(info) {
      this.state.userInfo = new IUserInfo({
        userId: info.userId,
        username: info.username,
        nickname: info.nickname,
        avatar: info.avatar != "" ? info.avatar : DEFAULT_AVATAR
      });
    }
    /**
     * 更新头像
     */
    setAvatar(avatar) {
      this.state.userInfo.avatar = avatar;
    }
    /**
     * 清除用户信息（退出登录时调用）
     */
    clearUserInfo() {
      this._doReset();
      uni.removeStorageSync("user");
    }
  }
  const useUserStore = defineStore("user", () => {
    return new UserStore();
  });
  const zhHans = new UTSJSONObject({
    "up_common_cancel": "取消",
    "up_common_confirm": "确定",
    "up_common_start": "开始",
    "up_common_end": "结束",
    "up_common_stop": "停止",
    "up_common_copy": "复制",
    "up_common_none": "暂无",
    "up_common_tip": "提示",
    "up_common_success": "成功",
    "up_common_fail": "失败",
    "up_common_close": "关闭",
    "up_common_preview": "预览",
    "up_common_re-select": "重选",
    "up_common_rotate": "旋转",
    "up_common_pleaseChoose": "请选择",
    "up_common_loading": "加载中",
    "up_common_loading2": "正在加载",
    "up_common_inOperation": "操作中",
    "up_common_settings": "设置",
    "up_common_retry": "重试",
    "up_common_search": "搜索",
    "up_common_more": "更多",
    "up_common_video": "视频",
    "up_common_file": "文件",
    "up_week_one": "一",
    "up_week_two": "二",
    "up_week_three": "三",
    "up_week_four": "四",
    "up_week_five": "五",
    "up_week_six": "六",
    "up_week_seven": "日",
    "up_barcode_error": "生成条码失败",
    "up_calendar_chooseDates": "日期选择",
    "up_calendar_disabled": "该日期已禁用",
    "up_calendar_daysExceed": "选择天数不能超过{days}天",
    "up_calendar_today": "今天",
    "up_cityLocate_locateCity": "定位城市",
    "up_cityLocate_fail": "定位失败，请点击重试。",
    "up_cityLocate_locating": "定位中",
    "up_code_send": "获取验证码",
    "up_code_resendAfter": "X秒重新获取",
    "up_code_resend": "重新获取",
    "up_cropper_emptyWidhtOrHeight": "裁剪框的宽或高没有设置",
    "up_empty_car": "购物车为空",
    "up_empty_page": "页面不存在",
    "up_empty_search": "没有搜索结果",
    "up_empty_address": "没有收货地址",
    "up_empty_wifi": "没有WiFi",
    "up_empty_order": "订单为空",
    "up_empty_coupon": "没有优惠券",
    "up_empty_favor": "暂无收藏",
    "up_empty_permission": "无权限",
    "up_empty_history": "无历史记录",
    "up_empty_news": "无新闻列表",
    "up_empty_message": "消息列表为空",
    "up_empty_list": "列表为空",
    "up_empty_data": "数据为空",
    "up_empty_comment": "暂无评论",
    "up_link_copyed": "链接已复制，请在浏览器打开",
    "up_loadmoe_loadmore": "加载更多",
    "up_loadmoe_nomore": "没有更多了",
    "up_noNetwork_text": "哎呀，网络信号丢失",
    "up_noNetwork_pleaseCheck": "请检查网络，或前往",
    "up_noNetwork_connect": "网络已连接",
    "up_noNetwork_disconnect": "无网络连接",
    "up_pagination_previous": "上一页",
    "up_pagination_next": "下一页",
    "up_pullRefresh_pull": "下拉刷新",
    "up_pullRefresh_release": "释放刷新",
    "up_pullRefresh_refreshing": "正在刷新",
    "up_readMore_expand": "展开阅读全文",
    "up_readMore_fold": "收起",
    "up_search_placeholder": "请输入关键字",
    "up_signature_penSize": "笔画大小",
    "up_signature_penColor": "笔画颜色",
    "up_upload_sizeExceed": "超过大小限制",
    "up_upload_uploading": "上传中",
    "up_upload_previewImageFail": "预览图片失败",
    "up_upload_previewVideoFail": "预览视频失败",
    "up_goodsSku_stock": "库存",
    "up_goodsSku_price": "价格",
    "up_goodsSku_amount": "件",
    "up_goodsSku_choosed": "已选",
    "up_goodsSku_buyAmount": "购买数量"
  });
  const zhHant = new UTSJSONObject({
    "up_common_cancel": "取消",
    "up_common_confirm": "確定",
    "up_common_start": "開始",
    "up_common_end": "結束",
    "up_common_stop": "停止",
    "up_common_copy": "複製",
    "up_common_none": "暫無",
    "up_common_tip": "提示",
    "up_common_success": "成功",
    "up_common_fail": "失敗",
    "up_common_close": "關閉",
    "up_common_preview": "預覽",
    "up_common_re-select": "重選",
    "up_common_rotate": "旋轉",
    "up_common_pleaseChoose": "請選擇",
    "up_common_loading": "載入中",
    "up_common_loading2": "正在載入",
    "up_common_inOperation": "操作中",
    "up_common_settings": "設置",
    "up_common_retry": "重試",
    "up_common_search": "搜尋",
    "up_common_more": "更多",
    "up_common_video": "影片",
    "up_common_file": "檔案",
    "up_week_one": "一",
    "up_week_two": "二",
    "up_week_three": "三",
    "up_week_four": "四",
    "up_week_five": "五",
    "up_week_six": "六",
    "up_week_seven": "日",
    "up_barcode_error": "生成條碼失敗",
    "up_calendar_chooseDates": "日期選擇",
    "up_calendar_disabled": "該日期已禁用",
    "up_calendar_daysExceed": "選擇天數不能超過{days}天",
    "up_calendar_today": "今天",
    "up_cityLocate_locateCity": "定位城市",
    "up_cityLocate_fail": "定位失敗，請點擊重試。",
    "up_cityLocate_locating": "定位中",
    "up_code_send": "獲取驗證碼",
    "up_code_resendAfter": "X秒重新獲取",
    "up_code_resend": "重新獲取",
    "up_cropper_emptyWidhtOrHeight": "裁剪框的寬或高沒有設置",
    "up_empty_car": "購物車為空",
    "up_empty_page": "頁面不存在",
    "up_empty_search": "沒有搜尋結果",
    "up_empty_address": "沒有收貨地址",
    "up_empty_wifi": "沒有WiFi",
    "up_empty_order": "訂單為空",
    "up_empty_coupon": "沒有優惠券",
    "up_empty_favor": "暫無收藏",
    "up_empty_permission": "無權限",
    "up_empty_history": "無歷史記錄",
    "up_empty_news": "無新聞列表",
    "up_empty_message": "消息列表為空",
    "up_empty_list": "列表為空",
    "up_empty_data": "數據為空",
    "up_empty_comment": "暫無評論",
    "up_link_copyed": "鏈接已復制，請在瀏覽器打開",
    "up_loadmoe_loadmore": "加載更多",
    "up_loadmoe_nomore": "沒有更多了",
    "up_noNetwork_text": "哎呀，網絡信號丟失",
    "up_noNetwork_pleaseCheck": "請檢查網絡，或前往",
    "up_noNetwork_connect": "網絡已連接",
    "up_noNetwork_disconnect": "無網絡連接",
    "up_pagination_previous": "上一頁",
    "up_pagination_next": "下一頁",
    "up_pullRefresh_pull": "下拉刷新",
    "up_pullRefresh_release": "釋放刷新",
    "up_pullRefresh_refreshing": "正在刷新",
    "up_readMore_expand": "展開閱讀全文",
    "up_readMore_fold": "收起",
    "up_search_placeholder": "請輸入關鍵字",
    "up_signature_penSize": "筆畫大小",
    "up_signature_penColor": "筆畫顏色",
    "up_upload_sizeExceed": "超過大小限制",
    "up_upload_uploading": "上傳中",
    "up_upload_previewImageFail": "預覽圖片失敗",
    "up_upload_previewVideoFail": "預覽視頻失敗",
    "up_goodsSku_stock": "庫存",
    "up_goodsSku_price": "價格",
    "up_goodsSku_amount": "件",
    "up_goodsSku_choosed": "已選",
    "up_goodsSku_buyAmount": "購買數量"
  });
  const en$1 = new UTSJSONObject({
    "up_common_cancel": "Cancel",
    "up_common_confirm": "Confirm",
    "up_common_start": "Start",
    "up_common_end": "End",
    "up_common_stop": "Stop",
    "up_common_copy": "Copy",
    "up_common_none": "None",
    "up_common_tip": "Tip",
    "up_common_success": "Success",
    "up_common_fail": "Fail",
    "up_common_close": "Close",
    "up_common_preview": "Preview",
    "up_common_re-select": "Re-select",
    "up_common_rotate": "Rotate",
    "up_common_pleaseChoose": "Please choose",
    "up_common_loading": "Loading",
    "up_common_loading2": "Loading",
    "up_common_inOperation": "In operation",
    "up_common_settings": "Settings",
    "up_common_retry": "Retry",
    "up_common_search": "Search",
    "up_common_more": "More",
    "up_common_video": "Video",
    "up_common_file": "File",
    "up_week_one": "Mon",
    "up_week_two": "Tue",
    "up_week_three": "Wed",
    "up_week_four": "Thu",
    "up_week_five": "Fri",
    "up_week_six": "Sat",
    "up_week_seven": "Sun",
    "up_barcode_error": "Failed to generate barcode",
    "up_calendar_chooseDates": "Date selection",
    "up_calendar_disabled": "This date is disabled",
    "up_calendar_daysExceed": "The number of selected days cannot exceed {days} days",
    "up_calendar_today": "Today",
    "up_cityLocate_locateCity": "Locate city",
    "up_cityLocate_fail": "Location failed, please click to retry.",
    "up_cityLocate_locating": "Locating",
    "up_code_send": "Get verification code",
    "up_code_resendAfter": "Resend after X seconds",
    "up_code_resend": "Resend",
    "up_cropper_emptyWidhtOrHeight": "The width or height of the cropping box is not set",
    "up_empty_car": "Shopping cart is empty",
    "up_empty_page": "Page not found",
    "up_empty_search": "No search results",
    "up_empty_address": "No shipping address",
    "up_empty_wifi": "No WiFi",
    "up_empty_order": "Order is empty",
    "up_empty_coupon": "No coupons",
    "up_empty_favor": "No favorites",
    "up_empty_permission": "No permission",
    "up_empty_history": "No history",
    "up_empty_news": "No news list",
    "up_empty_message": "Message list is empty",
    "up_empty_list": "List is empty",
    "up_empty_data": "Data is empty",
    "up_empty_comment": "No comments",
    "up_link_copyed": "Link copied, please open in browser",
    "up_loadmoe_loadmore": "Load more",
    "up_loadmoe_nomore": "No more",
    "up_noNetwork_text": "Oops, network signal lost",
    "up_noNetwork_pleaseCheck": "Please check the network, or go to",
    "up_noNetwork_connect": "Network connected",
    "up_noNetwork_disconnect": "No network connection",
    "up_pagination_previous": "Previous",
    "up_pagination_next": "Next",
    "up_pullRefresh_pull": "Pull to refresh",
    "up_pullRefresh_release": "Release to refresh",
    "up_pullRefresh_refreshing": "Refreshing",
    "up_readMore_expand": "Expand to read more",
    "up_readMore_fold": "Collapse",
    "up_search_placeholder": "Please enter keywords",
    "up_signature_penSize": "Stroke size",
    "up_signature_penColor": "Stroke color",
    "up_upload_sizeExceed": "Size limit exceeded",
    "up_upload_uploading": "Uploading",
    "up_upload_previewImageFail": "Failed to preview image",
    "up_upload_previewVideoFail": "Failed to preview video",
    "up_goodsSku_stock": "Stock",
    "up_goodsSku_price": "Price",
    "up_goodsSku_amount": "Items",
    "up_goodsSku_choosed": "Selected",
    "up_goodsSku_buyAmount": "Quantity"
  });
  const es = new UTSJSONObject({
    "up_common_cancel": "Cancelar",
    "up_common_confirm": "Confirmar",
    "up_common_start": "Empezar",
    "up_common_end": "Finalizar",
    "up_common_stop": "Detener",
    "up_common_copy": "Copiar",
    "up_common_none": "Ninguno",
    "up_common_tip": "Consejo",
    "up_common_success": "Éxito",
    "up_common_fail": "Fallido",
    "up_common_close": "Cerrar",
    "up_common_preview": "Vista previa",
    "up_common_re-select": "Volver a seleccionar",
    "up_common_rotate": "Rotar",
    "up_common_pleaseChoose": "Por favor seleccione",
    "up_common_loading": "Cargando",
    "up_common_loading2": "Cargando",
    "up_common_inOperation": "En operación",
    "up_common_settings": "Configuración",
    "up_common_retry": "Reintentar",
    "up_common_search": "Buscar",
    "up_common_more": "Más",
    "up_common_video": "Vídeo",
    "up_common_file": "Archivo",
    "up_week_one": "Lun",
    "up_week_two": "Mar",
    "up_week_three": "Mié",
    "up_week_four": "Jue",
    "up_week_five": "Vie",
    "up_week_six": "Sáb",
    "up_week_seven": "Dom",
    "up_barcode_error": "Error al generar el código de barras",
    "up_calendar_chooseDates": "Selección de fecha",
    "up_calendar_disabled": "Esta fecha está deshabilitada",
    "up_calendar_daysExceed": "El número de días seleccionados no puede exceder {days} días",
    "up_calendar_today": "Hoy",
    "up_cityLocate_locateCity": "Ubicar ciudad",
    "up_cityLocate_fail": "Error de ubicación, haga clic para reintentar.",
    "up_cityLocate_locating": "Ubicando",
    "up_code_send": "Obtener código de verificación",
    "up_code_resendAfter": "Reenviar después de X segundos",
    "up_code_resend": "Reenviar",
    "up_cropper_emptyWidhtOrHeight": "No se ha establecido el ancho o alto del recorte",
    "up_empty_car": "Carrito vacío",
    "up_empty_page": "Página no encontrada",
    "up_empty_search": "Sin resultados de búsqueda",
    "up_empty_address": "Sin dirección de envío",
    "up_empty_wifi": "Sin WiFi",
    "up_empty_order": "Pedido vacío",
    "up_empty_coupon": "Sin cupones",
    "up_empty_favor": "Sin favoritos",
    "up_empty_permission": "Sin permiso",
    "up_empty_history": "Sin historial",
    "up_empty_news": "Sin lista de noticias",
    "up_empty_message": "Lista de mensajes vacía",
    "up_empty_list": "Lista vacía",
    "up_empty_data": "Datos vacíos",
    "up_empty_comment": "Sin comentarios",
    "up_link_copyed": "Enlace copiado, por favor abra en el navegador",
    "up_loadmoe_loadmore": "Cargar más",
    "up_loadmoe_nomore": "No hay más",
    "up_noNetwork_text": "¡Ups! Se perdió la señal de red",
    "up_noNetwork_pleaseCheck": "Por favor revise la red, o vaya a",
    "up_noNetwork_connect": "Red conectada",
    "up_noNetwork_disconnect": "Sin conexión de red",
    "up_pagination_previous": "Anterior",
    "up_pagination_next": "Siguiente",
    "up_pullRefresh_pull": "Tire para actualizar",
    "up_pullRefresh_release": "Suelte para actualizar",
    "up_pullRefresh_refreshing": "Actualizando",
    "up_readMore_expand": "Expandir para leer más",
    "up_readMore_fold": "Colapsar",
    "up_search_placeholder": "Ingrese palabras clave",
    "up_signature_penSize": "Tamaño del trazo",
    "up_signature_penColor": "Color del trazo",
    "up_upload_sizeExceed": "Límite de tamaño excedido",
    "up_upload_uploading": "Subiendo",
    "up_upload_previewImageFail": "Error al previsualizar imagen",
    "up_upload_previewVideoFail": "Error al previsualizar video",
    "up_goodsSku_stock": "Inventario",
    "up_goodsSku_price": "Precio",
    "up_goodsSku_amount": "Artículos",
    "up_goodsSku_choosed": "Seleccionado",
    "up_goodsSku_buyAmount": "Cantidad"
  });
  const fr = new UTSJSONObject({
    "up_common_cancel": "Annuler",
    "up_common_confirm": "Confirmer",
    "up_common_start": "Démarrer",
    "up_common_end": "Terminer",
    "up_common_stop": "Arrêter",
    "up_common_copy": "Copier",
    "up_common_none": "Aucun",
    "up_common_tip": "Conseil",
    "up_common_success": "Succès",
    "up_common_fail": "Échec",
    "up_common_close": "Fermer",
    "up_common_preview": "Aperçu",
    "up_common_re-select": "Resélectionner",
    "up_common_rotate": "Rotation",
    "up_common_pleaseChoose": "Veuillez choisir",
    "up_common_loading": "Chargement",
    "up_common_loading2": "Chargement en cours",
    "up_common_inOperation": "En cours d'opération",
    "up_common_settings": "Paramètres",
    "up_common_retry": "Réessayer",
    "up_common_search": "Rechercher",
    "up_common_more": "Plus",
    "up_common_video": "Vidéo",
    "up_common_file": "Fichier",
    "up_week_one": "Lun",
    "up_week_two": "Mar",
    "up_week_three": "Mer",
    "up_week_four": "Jeu",
    "up_week_five": "Ven",
    "up_week_six": "Sam",
    "up_week_seven": "Dim",
    "up_barcode_error": "Échec de génération du code-barres",
    "up_calendar_chooseDates": "Sélection de dates",
    "up_calendar_disabled": "Cette date est désactivée",
    "up_calendar_daysExceed": "Le nombre de jours sélectionnés ne peut pas dépasser {days} jours",
    "up_calendar_today": "Aujourd'hui",
    "up_cityLocate_locateCity": "Localiser la ville",
    "up_cityLocate_fail": "Échec de localisation, veuillez cliquer pour réessayer.",
    "up_cityLocate_locating": "Localisation en cours",
    "up_code_send": "Obtenir le code de vérification",
    "up_code_resendAfter": "Renvoyer dans X secondes",
    "up_code_resend": "Renvoyer",
    "up_cropper_emptyWidhtOrHeight": "La largeur ou la hauteur de recadrage n'est pas définie",
    "up_empty_car": "Panier vide",
    "up_empty_page": "Page introuvable",
    "up_empty_search": "Aucun résultat de recherche",
    "up_empty_address": "Aucune adresse de livraison",
    "up_empty_wifi": "Aucun Wi-Fi",
    "up_empty_order": "Commande vide",
    "up_empty_coupon": "Aucun coupon",
    "up_empty_favor": "Aucun favori",
    "up_empty_permission": "Aucune autorisation",
    "up_empty_history": "Aucun historique",
    "up_empty_news": "Aucune actualité",
    "up_empty_message": "Liste de messages vide",
    "up_empty_list": "Liste vide",
    "up_empty_data": "Données vides",
    "up_empty_comment": "Aucun commentaire",
    "up_link_copyed": "Lien copié, veuillez ouvrir dans le navigateur",
    "up_loadmoe_loadmore": "Charger plus",
    "up_loadmoe_nomore": "Plus de contenu",
    "up_noNetwork_text": "Oups, le signal réseau est perdu",
    "up_noNetwork_pleaseCheck": "Veuillez vérifier le réseau, ou aller à",
    "up_noNetwork_connect": "Réseau connecté",
    "up_noNetwork_disconnect": "Aucune connexion réseau",
    "up_pagination_previous": "Page précédente",
    "up_pagination_next": "Page suivante",
    "up_pullRefresh_pull": "Tirer pour actualiser",
    "up_pullRefresh_release": "Relâcher pour actualiser",
    "up_pullRefresh_refreshing": "Actualisation en cours",
    "up_readMore_expand": "Développer pour lire la suite",
    "up_readMore_fold": "Réduire",
    "up_search_placeholder": "Veuillez saisir un mot-clé",
    "up_signature_penSize": "Taille du trait",
    "up_signature_penColor": "Couleur du trait",
    "up_upload_sizeExceed": "Dépassement de la limite de taille",
    "up_upload_uploading": "Téléchargement en cours",
    "up_upload_previewImageFail": "Échec de l'aperçu de l'image",
    "up_upload_previewVideoFail": "Échec de l'aperçu de la vidéo",
    "up_goodsSku_stock": "Stock",
    "up_goodsSku_price": "Prix",
    "up_goodsSku_amount": "Pièces",
    "up_goodsSku_choosed": "Sélectionné",
    "up_goodsSku_buyAmount": "Quantité"
  });
  const de = new UTSJSONObject({
    "up_common_cancel": "Abbrechen",
    "up_common_confirm": "Bestätigen",
    "up_common_start": "Start",
    "up_common_end": "Ende",
    "up_common_stop": "Stopp",
    "up_common_copy": "Kopieren",
    "up_common_none": "Keine",
    "up_common_tip": "Tipp",
    "up_common_success": "Erfolg",
    "up_common_fail": "Fehlgeschlagen",
    "up_common_close": "Schließen",
    "up_common_preview": "Vorschau",
    "up_common_re-select": "Erneut auswählen",
    "up_common_rotate": "Drehen",
    "up_common_pleaseChoose": "Bitte wählen",
    "up_common_loading": "Wird geladen",
    "up_common_loading2": "Laden",
    "up_common_inOperation": "In Bearbeitung",
    "up_common_settings": "Einstellungen",
    "up_common_retry": "Wiederholen",
    "up_common_search": "Suchen",
    "up_common_more": "Mehr",
    "up_common_video": "Video",
    "up_common_file": "Datei",
    "up_week_one": "Mo",
    "up_week_two": "Di",
    "up_week_three": "Mi",
    "up_week_four": "Do",
    "up_week_five": "Fr",
    "up_week_six": "Sa",
    "up_week_seven": "So",
    "up_barcode_error": "Barcode konnte nicht generiert werden",
    "up_calendar_chooseDates": "Datum auswählen",
    "up_calendar_disabled": "Dieses Datum ist deaktiviert",
    "up_calendar_daysExceed": "Die Anzahl der ausgewählten Tage darf {days} Tage nicht überschreiten",
    "up_calendar_today": "Heute",
    "up_cityLocate_locateCity": "Stadt lokalisieren",
    "up_cityLocate_fail": "Lokalisierung fehlgeschlagen, bitte klicken Sie, um es erneut zu versuchen.",
    "up_cityLocate_locating": "Lokalisierung läuft",
    "up_code_send": "Bestätigungscode erhalten",
    "up_code_resendAfter": "Nach X Sekunden erneut senden",
    "up_code_resend": "Erneut senden",
    "up_cropper_emptyWidhtOrHeight": "Breite oder Höhe des Zuschneidebereichs ist nicht festgelegt",
    "up_empty_car": "Warenkorb ist leer",
    "up_empty_page": "Seite nicht gefunden",
    "up_empty_search": "Keine Suchergebnisse",
    "up_empty_address": "Keine Lieferadresse",
    "up_empty_wifi": "Kein WLAN",
    "up_empty_order": "Bestellung ist leer",
    "up_empty_coupon": "Keine Coupons",
    "up_empty_favor": "Keine Favoriten",
    "up_empty_permission": "Keine Berechtigung",
    "up_empty_history": "Kein Verlauf",
    "up_empty_news": "Keine Nachrichtenliste",
    "up_empty_message": "Nachrichtenliste ist leer",
    "up_empty_list": "Liste ist leer",
    "up_empty_data": "Daten sind leer",
    "up_empty_comment": "Keine Kommentare",
    "up_link_copyed": "Link kopiert, bitte im Browser öffnen",
    "up_loadmoe_loadmore": "Mehr laden",
    "up_loadmoe_nomore": "Keine weiteren Daten",
    "up_noNetwork_text": "Ups, Netzwerksignal verloren",
    "up_noNetwork_pleaseCheck": "Bitte überprüfen Sie das Netzwerk oder gehen Sie zu",
    "up_noNetwork_connect": "Netzwerk verbunden",
    "up_noNetwork_disconnect": "Keine Netzwerkverbindung",
    "up_pagination_previous": "Zurück",
    "up_pagination_next": "Weiter",
    "up_pullRefresh_pull": "Zum Aktualisieren ziehen",
    "up_pullRefresh_release": "Loslassen zum Aktualisieren",
    "up_pullRefresh_refreshing": "Aktualisierung läuft",
    "up_readMore_expand": "Erweitern, um mehr zu lesen",
    "up_readMore_fold": "Einklappen",
    "up_search_placeholder": "Bitte Schlüsselwort eingeben",
    "up_signature_penSize": "Strichgröße",
    "up_signature_penColor": "Strichfarbe",
    "up_upload_sizeExceed": "Größenbegrenzung überschritten",
    "up_upload_uploading": "Upload läuft",
    "up_upload_previewImageFail": "Bildvorschau fehlgeschlagen",
    "up_upload_previewVideoFail": "Videovorschau fehlgeschlagen",
    "up_goodsSku_stock": "Lagerbestand",
    "up_goodsSku_price": "Preis",
    "up_goodsSku_amount": "Artikel",
    "up_goodsSku_choosed": "Ausgewählt",
    "up_goodsSku_buyAmount": "Anzahl"
  });
  const ko = new UTSJSONObject({
    "up_common_cancel": "취소",
    "up_common_confirm": "확인",
    "up_common_start": "시작",
    "up_common_end": "종료",
    "up_common_stop": "중지",
    "up_common_copy": "복사",
    "up_common_none": "없음",
    "up_common_tip": "팁",
    "up_common_success": "성공",
    "up_common_fail": "실패",
    "up_common_close": "닫기",
    "up_common_preview": "미리보기",
    "up_common_re-select": "재선택",
    "up_common_rotate": "회전",
    "up_common_pleaseChoose": "선택해주세요",
    "up_common_loading": "로딩 중",
    "up_common_loading2": "로딩 중",
    "up_common_inOperation": "작업 중",
    "up_common_settings": "설정",
    "up_common_retry": "재시도",
    "up_common_search": "검색",
    "up_common_more": "더보기",
    "up_common_video": "비디오",
    "up_common_file": "파일",
    "up_week_one": "월",
    "up_week_two": "화",
    "up_week_three": "수",
    "up_week_four": "목",
    "up_week_five": "금",
    "up_week_six": "토",
    "up_week_seven": "일",
    "up_barcode_error": "바코드 생성 실패",
    "up_calendar_chooseDates": "날짜 선택",
    "up_calendar_disabled": "이 날짜는 비활성화되었습니다",
    "up_calendar_daysExceed": "선택한 일 수는 {days}일을 초과할 수 없습니다",
    "up_calendar_today": "오늘",
    "up_cityLocate_locateCity": "도시 위치 찾기",
    "up_cityLocate_fail": "위치 찾기 실패, 클릭하여 재시도하세요.",
    "up_cityLocate_locating": "위치 찾는 중",
    "up_code_send": "인증번호 받기",
    "up_code_resendAfter": "X초 후 재전송",
    "up_code_resend": "재전송",
    "up_cropper_emptyWidhtOrHeight": "자르기 상자의 너비나 높이가 설정되지 않았습니다",
    "up_empty_car": "장바구니가 비어 있습니다",
    "up_empty_page": "페이지를 찾을 수 없습니다",
    "up_empty_search": "검색 결과가 없습니다",
    "up_empty_address": "배송 주소가 없습니다",
    "up_empty_wifi": "Wi-Fi 없음",
    "up_empty_order": "주문이 비어 있습니다",
    "up_empty_coupon": "쿠폰이 없습니다",
    "up_empty_favor": "찜한 항목이 없습니다",
    "up_empty_permission": "권한이 없습니다",
    "up_empty_history": "기록이 없습니다",
    "up_empty_news": "뉴스 목록이 없습니다",
    "up_empty_message": "메시지 목록이 비어 있습니다",
    "up_empty_list": "목록이 비어 있습니다",
    "up_empty_data": "데이터가 없습니다",
    "up_empty_comment": "댓글이 없습니다",
    "up_link_copyed": "링크가 복사되었습니다. 브라우저에서 열어주세요",
    "up_loadmoe_loadmore": "더 불러오기",
    "up_loadmoe_nomore": "더 이상 없습니다",
    "up_noNetwork_text": "앗, 네트워크 신호가 사라졌어요",
    "up_noNetwork_pleaseCheck": "네트워크를 확인하거나 다음으로 이동하세요",
    "up_noNetwork_connect": "네트워크 연결됨",
    "up_noNetwork_disconnect": "네트워크 연결 없음",
    "up_pagination_previous": "이전",
    "up_pagination_next": "다음",
    "up_pullRefresh_pull": "당겨서 새로고침",
    "up_pullRefresh_release": "놓아서 새로고침",
    "up_pullRefresh_refreshing": "새로고침 중",
    "up_readMore_expand": "펼쳐서 더 읽기",
    "up_readMore_fold": "접기",
    "up_search_placeholder": "키워드를 입력하세요",
    "up_signature_penSize": "선 굵기",
    "up_signature_penColor": "선 색상",
    "up_upload_sizeExceed": "크기 제한 초과",
    "up_upload_uploading": "업로드 중",
    "up_upload_previewImageFail": "이미지 미리보기 실패",
    "up_upload_previewVideoFail": "비디오 미리보기 실패",
    "up_goodsSku_stock": "재고",
    "up_goodsSku_price": "가격",
    "up_goodsSku_amount": "개",
    "up_goodsSku_choosed": "선택됨",
    "up_goodsSku_buyAmount": "구매 수량"
  });
  const ja = new UTSJSONObject({
    "up_common_cancel": "キャンセル",
    "up_common_confirm": "確認",
    "up_common_start": "開始",
    "up_common_end": "終了",
    "up_common_stop": "停止",
    "up_common_copy": "コピー",
    "up_common_none": "なし",
    "up_common_tip": "ヒント",
    "up_common_success": "成功",
    "up_common_fail": "失敗",
    "up_common_close": "閉じる",
    "up_common_preview": "プレビュー",
    "up_common_re-select": "再選択",
    "up_common_rotate": "回転",
    "up_common_pleaseChoose": "選択してください",
    "up_common_loading": "読み込み中",
    "up_common_loading2": "読み込み中",
    "up_common_inOperation": "操作中",
    "up_common_settings": "設定",
    "up_common_retry": "再試行",
    "up_common_search": "検索",
    "up_common_more": "もっと",
    "up_common_video": "ビデオ",
    "up_common_file": "ファイル",
    "up_week_one": "月",
    "up_week_two": "火",
    "up_week_three": "水",
    "up_week_four": "木",
    "up_week_five": "金",
    "up_week_six": "土",
    "up_week_seven": "日",
    "up_barcode_error": "バーコードの生成に失敗しました",
    "up_calendar_chooseDates": "日付選択",
    "up_calendar_disabled": "この日付は無効です",
    "up_calendar_daysExceed": "選択日数は{days}日を超えることはできません",
    "up_calendar_today": "今日",
    "up_cityLocate_locateCity": "都市を特定",
    "up_cityLocate_fail": "位置情報の取得に失敗しました。クリックして再試行してください。",
    "up_cityLocate_locating": "位置情報を取得中",
    "up_code_send": "認証コードを取得",
    "up_code_resendAfter": "X秒後に再送信",
    "up_code_resend": "再送信",
    "up_cropper_emptyWidhtOrHeight": "切り抜きボックスの幅または高さが設定されていません",
    "up_empty_car": "ショッピングカートは空です",
    "up_empty_page": "ページが見つかりません",
    "up_empty_search": "検索結果がありません",
    "up_empty_address": "配送先住所がありません",
    "up_empty_wifi": "Wi-Fiがありません",
    "up_empty_order": "注文はありません",
    "up_empty_coupon": "クーポンがありません",
    "up_empty_favor": "お気に入りがありません",
    "up_empty_permission": "権限がありません",
    "up_empty_history": "履歴がありません",
    "up_empty_news": "ニュースリストがありません",
    "up_empty_message": "メッセージリストが空です",
    "up_empty_list": "リストが空です",
    "up_empty_data": "データが空です",
    "up_empty_comment": "コメントがありません",
    "up_link_copyed": "リンクをコピーしました。ブラウザで開いてください",
    "up_loadmoe_loadmore": "さらに読み込む",
    "up_loadmoe_nomore": "これ以上ありません",
    "up_noNetwork_text": "おっと、ネットワーク信号が失われました",
    "up_noNetwork_pleaseCheck": "ネットワークを確認するか、",
    "up_noNetwork_connect": "ネットワーク接続済み",
    "up_noNetwork_disconnect": "ネットワーク接続なし",
    "up_pagination_previous": "前へ",
    "up_pagination_next": "次へ",
    "up_pullRefresh_pull": "引き下げて更新",
    "up_pullRefresh_release": "指を離して更新",
    "up_pullRefresh_refreshing": "更新中",
    "up_readMore_expand": "続きを読む",
    "up_readMore_fold": "折りたたむ",
    "up_search_placeholder": "キーワードを入力してください",
    "up_signature_penSize": "線の太さ",
    "up_signature_penColor": "線の色",
    "up_upload_sizeExceed": "サイズ制限を超えています",
    "up_upload_uploading": "アップロード中",
    "up_upload_previewImageFail": "画像のプレビューに失敗しました",
    "up_upload_previewVideoFail": "動画のプレビューに失敗しました",
    "up_goodsSku_stock": "在庫",
    "up_goodsSku_price": "価格",
    "up_goodsSku_amount": "アイテム",
    "up_goodsSku_choosed": "選択済み",
    "up_goodsSku_buyAmount": "購入数量"
  });
  const ru = new UTSJSONObject({
    "up_common_cancel": "Отмена",
    "up_common_confirm": "Подтвердить",
    "up_common_start": "Начать",
    "up_common_end": "Завершить",
    "up_common_stop": "Остановить",
    "up_common_copy": "Копировать",
    "up_common_none": "Нет",
    "up_common_tip": "Совет",
    "up_common_success": "Успех",
    "up_common_fail": "Ошибка",
    "up_common_close": "Закрыть",
    "up_common_preview": "Предпросмотр",
    "up_common_re-select": "Выбрать снова",
    "up_common_rotate": "Поворот",
    "up_common_pleaseChoose": "Пожалуйста, выберите",
    "up_common_loading": "Загрузка",
    "up_common_loading2": "Загрузка",
    "up_common_inOperation": "В процессе",
    "up_common_settings": "Настройки",
    "up_common_retry": "Повторить",
    "up_common_search": "Поиск",
    "up_common_more": "Еще",
    "up_common_video": "Видео",
    "up_common_file": "Файл",
    "up_week_one": "Пн",
    "up_week_two": "Вт",
    "up_week_three": "Ср",
    "up_week_four": "Чт",
    "up_week_five": "Пт",
    "up_week_six": "Сб",
    "up_week_seven": "Вс",
    "up_barcode_error": "Не удалось сгенерировать штрих-код",
    "up_calendar_chooseDates": "Выбор даты",
    "up_calendar_disabled": "Эта дата отключена",
    "up_calendar_daysExceed": "Количество выбранных дней не может превышать {days} дней",
    "up_calendar_today": "Сегодня",
    "up_cityLocate_locateCity": "Определить город",
    "up_cityLocate_fail": "Ошибка определения местоположения, нажмите, чтобы повторить попытку.",
    "up_cityLocate_locating": "Определение местоположения",
    "up_code_send": "Получить код подтверждения",
    "up_code_resendAfter": "Повторная отправка через X секунд",
    "up_code_resend": "Повторная отправка",
    "up_cropper_emptyWidhtOrHeight": "Ширина или высота области обрезки не задана",
    "up_empty_car": "Корзина пуста",
    "up_empty_page": "Страница не найдена",
    "up_empty_search": "Нет результатов поиска",
    "up_empty_address": "Нет адреса доставки",
    "up_empty_wifi": "Нет Wi-Fi",
    "up_empty_order": "Заказ пуст",
    "up_empty_coupon": "Нет купонов",
    "up_empty_favor": "Нет избранного",
    "up_empty_permission": "Нет разрешения",
    "up_empty_history": "Нет истории",
    "up_empty_news": "Нет новостей",
    "up_empty_message": "Список сообщений пуст",
    "up_empty_list": "Список пуст",
    "up_empty_data": "Нет данных",
    "up_empty_comment": "Нет комментариев",
    "up_link_copyed": "Ссылка скопирована, откройте в браузере",
    "up_loadmoe_loadmore": "Загрузить еще",
    "up_loadmoe_nomore": "Больше нет",
    "up_noNetwork_text": "Упс, потеряно сетевое соединение",
    "up_noNetwork_pleaseCheck": "Проверьте сеть или перейдите в",
    "up_noNetwork_connect": "Сеть подключена",
    "up_noNetwork_disconnect": "Нет сетевого подключения",
    "up_pagination_previous": "Предыдущая",
    "up_pagination_next": "Следующая",
    "up_pullRefresh_pull": "Потяните для обновления",
    "up_pullRefresh_release": "Отпустите для обновления",
    "up_pullRefresh_refreshing": "Обновление",
    "up_readMore_expand": "Развернуть, чтобы прочитать больше",
    "up_readMore_fold": "Свернуть",
    "up_search_placeholder": "Введите ключевые слова",
    "up_signature_penSize": "Размер линии",
    "up_signature_penColor": "Цвет линии",
    "up_upload_sizeExceed": "Превышен лимит размера",
    "up_upload_uploading": "Загрузка",
    "up_upload_previewImageFail": "Не удалось просмотреть изображение",
    "up_upload_previewVideoFail": "Не удалось просмотреть видео",
    "up_goodsSku_stock": "Запас",
    "up_goodsSku_price": "Цена",
    "up_goodsSku_amount": "Штуки",
    "up_goodsSku_choosed": "Выбрано",
    "up_goodsSku_buyAmount": "Количество"
  });
  function normalizeLocale(locale2) {
    if (locale2 == "" || locale2 == null)
      return "zh-Hans";
    let l = locale2.toLowerCase();
    if (l.includes("zh-tw") || l.includes("zh-hk") || l.includes("zh-hant")) {
      return "zh-Hant";
    }
    if (l.includes("zh")) {
      return "zh-Hans";
    }
    if (l.includes("en")) {
      return "en";
    }
    if (l.includes("es"))
      return "es";
    if (l.includes("fr"))
      return "fr";
    if (l.includes("de"))
      return "de";
    if (l.includes("ko"))
      return "ko";
    if (l.includes("ja"))
      return "ja";
    if (l.includes("ru"))
      return "ru";
    return "zh-Hans";
  }
  let settings = vue.reactive({
    lang: "zh-Hans",
    locales: {
      en: en$1,
      es,
      fr,
      de,
      ko,
      ja,
      ru,
      "zh-Hant": zhHant,
      "zh-Hans": zhHans
    }
  });
  function setLocale(locale2) {
    settings["lang"] = normalizeLocale(locale2);
  }
  function getLocale() {
    return settings["lang"];
  }
  function t(value, params = new UTSJSONObject({})) {
    var _a, _b, _c, _d;
    if (value != "") {
      let key = value.replaceAll(".", "_");
      let lang = normalizeLocale(settings["lang"]);
      let locales = settings["locales"];
      let currentDict = locales[lang];
      if (currentDict == null) {
        currentDict = locales["zh-Hans"];
      }
      let result = "";
      if (currentDict != null && currentDict[key] != null) {
        result = (_b = (_a = currentDict[key]) === null || _a === void 0 ? null : _a.toString()) !== null && _b !== void 0 ? _b : "";
      } else if (currentDict != null && currentDict[value] != null) {
        result = (_d = (_c = currentDict[value]) === null || _c === void 0 ? null : _c.toString()) !== null && _d !== void 0 ? _d : "";
      } else {
        result = value;
      }
      let resultStr = result.toString();
      if (params != null) {
        const keys = UTSJSONObject.keys(params);
        for (let i = 0; i < keys.length; i++) {
          const k = keys[i];
          const val = params[k];
          if (val != null) {
            resultStr = resultStr.replaceAll(`{${k}}`, val.toString());
          }
        }
      }
      return resultStr;
    } else {
      return value;
    }
  }
  function formatMonthTitle(year = null, month = null) {
    const y = year != null ? year.toString() : "";
    const m = month != null ? parseInt(month.toString()) : 0;
    const lang = normalizeLocale(getLocale());
    if (lang.startsWith("zh") || lang == "ja") {
      return `${y}年${m}月`;
    } else if (lang == "ko") {
      return `${y}년 ${m}월`;
    } else {
      const enMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const monthName = m >= 1 && m <= 12 ? enMonths[m - 1] : m.toString();
      return `${monthName} ${y}`;
    }
  }
  new UTSJSONObject({
    settings,
    setLocale,
    getLocale,
    formatMonthTitle,
    t
  });
  class IAppState extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            theme: { type: String, optional: false },
            locale: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = IAppState.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.theme = this.__props__.theme;
      this.locale = this.__props__.locale;
      delete this.__props__;
    }
  }
  function getSystemLocale() {
    try {
      const sysInfo = uni.getSystemInfoSync();
      const appLang = sysInfo.appLanguage;
      if (appLang != null && appLang.toLowerCase().includes("zh")) {
        return "zh-CN";
      }
      if (appLang != null && appLang.toLowerCase().includes("en")) {
        return "en-US";
      }
    } catch (e) {
    }
    return "zh-CN";
  }
  const defaultAppState = new IAppState(
    {
      theme: "#37c2bc",
      locale: getSystemLocale()
    }
    // ==========================================
    // Store 实现
    // ==========================================
  );
  class AppStore extends PiniaStoreBase {
    // 2. constructor
    constructor() {
      super();
      this.state = vue.reactive(new IAppState({
        theme: "#37c2bc",
        locale: getSystemLocale()
      }));
      this.bindState(this.state);
      themeColor.value = this.state.theme;
      i18n.global.locale.value = this.state.locale;
      setLocale(this.state.locale);
    }
    // ==========================================
    // 持久化钩子
    // ==========================================
    _doReset() {
      this.state.theme = defaultAppState.theme;
      this.state.locale = defaultAppState.locale;
      themeColor.value = defaultAppState.theme;
      i18n.global.locale.value = defaultAppState.locale;
      setLocale(defaultAppState.locale);
    }
    _hydrate(_data) {
      if (_data["theme"] != null) {
        const colorVal = _data["theme"];
        this.state.theme = colorVal;
        themeColor.value = colorVal;
      }
      if (_data["locale"] != null) {
        const localeVal = _data["locale"];
        this.state.locale = localeVal;
        i18n.global.locale.value = localeVal;
        setLocale(localeVal);
      }
    }
    _serialize() {
      return new UTSJSONObject({
        theme: this.state.theme,
        locale: this.state.locale
      });
    }
    // ==========================================
    // Actions
    // ==========================================
    /**
     * 设置主题色
     */
    setTheme(theme) {
      this.state.theme = theme;
      themeColor.value = theme;
    }
    /**
     * 设置语言
     */
    setLocale(locale2) {
      this.state.locale = locale2;
      i18n.global.locale.value = locale2;
      setLocale(locale2);
    }
  }
  const useAppStore = defineStore("app", () => {
    return new AppStore();
  });
  const pinia = createPinia();
  pinia.use(createPersistPlugin(new PersistOptions({
    keyPrefix: "pinia:",
    includeStores: ["token", "user", "app"],
    excludeStores: [],
    serializer: null
  })));
  setActivePinia(pinia);
  function registerToast(toastInstance) {
  }
  function unregisterToast(toastInstance) {
  }
  const __className$1F = "GenAppku";
  const _sfc_main$1G = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1F,
    __filename: "App.ku.uvue",
    __name: "App.ku",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenAppkuSharedData", sharedDataClassId: 0 })));
      const appStore = useAppStore();
      const isCurrentPageTabbar = vue.ref(false);
      const uToastRef = vue.ref(null);
      vue.onBeforeMount(() => {
        const pages = getCurrentPages();
        if (pages.length > 0) {
          const route = pages[pages.length - 1].route;
          if (route != null && route.length > 0) {
            const path = route.startsWith("/") ? route : `/${route}`;
            const isTabbar = isPageTabbar(path);
            isCurrentPageTabbar.value = isTabbar;
            if (isTabbar) {
              syncCurIdxByCurrentPage();
            }
          }
        }
        if (uToastRef.value != null) {
          registerToast(uToastRef.value);
        }
      });
      vue.onMounted(() => {
        if (uToastRef.value != null) {
          registerToast(uToastRef.value);
        }
      });
      vue.onUnmounted(() => {
        if (uToastRef.value != null) {
          unregisterToast(uToastRef.value);
        }
      });
      return () => {
        "raw js";
        const _setTemplateRef = vue.createSharedDataTemplateRefSetter();
        const _component_up_toast = vue.resolveComponent("up-toast");
        vue.renderSharedDataEffect(() => {
          return vue.setSharedDataStyle(__sharedData, 3, ["flex: 1;", { "--theme-color": vue.unref(appStore).state.theme }]);
        });
        vue.createSharedDataSlot("default", null, null);
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 0, vue.toSharedDataBoolean(isCurrentPageTabbar.value));
        }, () => {
          const n4 = vue.createSharedDataComponent(Tabbar, "ca371aa4");
          vue.setSharedData(__sharedData, 1, n4.sharedData);
        });
        const n5 = vue.createSharedDataComponentWithFallback(_component_up_toast, "ca3713a4");
        vue.setSharedData(__sharedData, 2, n5 == null ? void 0 : n5.sharedData);
        _setTemplateRef(n5, uToastRef, null, "uToastRef");
        return __sharedData;
      };
    }
  });
  const _style_0$1H = {};
  const AppKu = /* @__PURE__ */ _export_sfc(_sfc_main$1G, [["styles", [_style_0$1H]]]);
  const __className$1E = "GenSrcLayoutsDefault";
  const _sfc_main$1F = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1E,
    __filename: "src/layouts/default.uvue",
    __name: "default",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcLayoutsDefaultSharedData", sharedDataClassId: 0 })));
      return () => {
        "raw js";
        vue.createSharedDataSlot("default", null, null);
        return __sharedData;
      };
    }
  });
  const _style_0$1G = {};
  const _style_1$1d = {};
  const LayoutComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1F, [["styles", [_style_0$1G, _style_1$1d]]]);
  let firstBackTime = 0;
  function handleBackPressExit() {
    const now = Date.now();
    if (firstBackTime == 0 || now - firstBackTime > 2e3) {
      firstBackTime = now;
      uni.showToast({
        title: "再按一次退出应用",
        position: "bottom"
      });
      setTimeout(() => {
        if (firstBackTime == now) {
          firstBackTime = 0;
        }
      }, 2e3);
      return true;
    }
    try {
      const activity = UTSAndroid.getUniActivity();
      if (activity != null) {
        activity.finishAffinity();
      }
      setTimeout(() => {
        java.lang.System.exit(0);
      }, 500);
    } catch (_e) {
      uni.exit();
    }
    return false;
  }
  const __className$1D = "GenSrcPagesIndexIndex";
  const _sfc_main$1E = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1D,
    __filename: "src/pages/index/index.uvue",
    __name: "index",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesIndexIndexSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcPagesIndexIndexSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      vue.onBackPress((options) => {
        if (options.from == "backbutton") {
          return handleBackPressExit();
        }
        return false;
      });
      vue.ref(true);
      vue.ref(false);
      vue.ref(["apple"]);
      vue.ref("male");
      vue.ref(30);
      vue.ref(3);
      vue.ref(true);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const n25 = vue.createSharedDataComponent(AppKu, "05e1f953", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n24 = vue.createSharedDataComponent(LayoutComponent, "93459dfa", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "首页"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "1548ef1a", {
                  title: "首页",
                  "show-back": false
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n24.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n25.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1F = {};
  const SrcPagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1E, [["styles", [_style_0$1F]]]);
  const LOGIN_STRATEGY_MAP = new UTSJSONObject(
    {
      /** 黑名单策略：默认无需登录，只在特定页面拦截 */
      DEFAULT_NO_NEED_LOGIN: 0,
      /** 白名单策略：默认全部拦截，仅在特定免登录页面直接放行 */
      DEFAULT_NEED_LOGIN: 1
    }
    /**
     * 选中的全局登录策略（此处默认采用黑名单策略）
     */
  );
  const LOGIN_STRATEGY = LOGIN_STRATEGY_MAP.DEFAULT_NO_NEED_LOGIN;
  const isNeedLoginMode = LOGIN_STRATEGY == LOGIN_STRATEGY_MAP.DEFAULT_NEED_LOGIN;
  const LOGIN_PAGE = "/src/sub/auth/login";
  const EXCLUDE_LOGIN_PATH_LIST = [
    "/src/sub/test/test"
    // 示例值
  ];
  const __className$1C = "GenSrcPagesMeMe";
  const _sfc_main$1D = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1C,
    __filename: "src/pages/me/me.uvue",
    __name: "me",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesMeMeSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcPagesMeMeSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      vue.onBackPress((options) => {
        if (options.from == "backbutton") {
          return handleBackPressExit();
        }
        return false;
      });
      const userStore = useUserStore();
      const tokenStore = useTokenStore();
      const avatarUrl = vue.computed(() => {
        if (userStore.state.userInfo.avatar.length > 0) {
          return userStore.state.userInfo.avatar;
        }
        return "/static/logo.png";
      });
      const userInfoJson = vue.computed(() => {
        const info = new UTSJSONObject({
          userId: userStore.state.userInfo.userId,
          username: userStore.state.userInfo.username,
          nickname: userStore.state.userInfo.nickname,
          avatar: userStore.state.userInfo.avatar
        });
        return UTS.JSON.stringify(info, null, 2);
      });
      vue.onShow(() => {
        uni.__log__("log", "at src/pages/me/me.uvue:89", "All storage keys:", uni.getStorageInfoSync().keys);
        uni.__log__("log", "at src/pages/me/me.uvue:90", "pinia:token:", uni.getStorageSync("pinia:token"));
        uni.__log__("log", "at src/pages/me/me.uvue:91", "pinia:user:", uni.getStorageSync("pinia:user"));
      });
      function handleLogin() {
        uni.navigateTo({
          url: LOGIN_PAGE
        });
      }
      function handleLogout() {
        uni.showModal(new UTSJSONObject({
          title: "提示",
          content: "确定要退出登录吗？",
          success: (res) => {
            if (res.confirm) {
              tokenStore.clearToken();
              userStore.clearUserInfo();
              uni.showToast({
                title: "退出登录成功",
                icon: "success"
              });
              setTimeout(() => {
                const targetUrl = "/src/pages/index/index";
                setCurIdxByPath(targetUrl);
                uni.switchTab({ url: targetUrl });
              }, 0);
            }
          }
        }));
      }
      return () => {
        "raw js";
        const n23 = vue.createSharedDataComponent(AppKu, "69b481fa", null, {
          "default": () => {
            vue.renderSharedDataEffect(() => {
              const _userStore = vue.unref(userStore);
              const _userStore_state = _userStore.state;
              vue.setSharedDataAttr(__sharedData, 6, vue.toSharedDataString(vue.unref(avatarUrl)));
              vue.setSharedData(__sharedData, 7, vue.toDisplayString(_userStore_state.userInfo.username.length > 0 ? _userStore_state.userInfo.username : "未登录用户"));
            });
            vue.createSharedDataIf(() => {
              return vue.setSharedData(__sharedData, 1, vue.toSharedDataBoolean(vue.unref(userStore).state.userInfo.username.length > 0));
            }, () => {
              vue.renderSharedDataEffect(() => {
                return vue.setSharedData(__sharedData, 2, vue.toDisplayString(vue.unref(userStore).state.userInfo.nickname));
              });
            });
            vue.renderSharedDataEffect(() => {
              const _tokenStore = vue.unref(tokenStore);
              vue.setSharedDataClass(__sharedData, 8, ["text-12px px-12px py-4px rounded-20px font-medium overflow-hidden", _tokenStore.hasValidLogin() ? "bg-__d1fae5_ text-__065f46_" : "bg-__f1f5f9_ text-__64748b_"]);
              vue.setSharedData(__sharedData, 9, vue.toDisplayString(_tokenStore.hasValidLogin() ? "已登录" : "未登录"));
              vue.setSharedData(__sharedData, 10, vue.toDisplayString(vue.unref(userInfoJson)));
            });
            vue.createSharedDataIf(() => {
              return vue.setSharedData(__sharedData, 3, vue.toSharedDataBoolean(vue.unref(tokenStore).hasValidLogin()));
            }, () => {
              vue.setSharedDataEvent(__sharedData, 4, handleLogout);
            }, () => {
              vue.setSharedDataEvent(__sharedData, 5, handleLogin);
            }, 517);
          }
        });
        vue.setSharedData(__sharedData, 0, n23.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1E = {};
  const SrcPagesMeMe = /* @__PURE__ */ _export_sfc(_sfc_main$1D, [["styles", [_style_0$1E]]]);
  const __className$1B = "GenSrcPagesBasicComponentsCard";
  const _sfc_main$1C = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1B,
    __filename: "src/pages/basic/components/Card.uvue",
    __name: "Card",
    props: {
      title: {
        type: String,
        default: "默认标题"
      }
    },
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsCardSharedData", sharedDataClassId: 0 })));
      return () => {
        "raw js";
        vue.createSharedDataSlot("title", null, null, () => {
          vue.renderSharedDataEffect(() => {
            return vue.setSharedData(__sharedData, 0, vue.toDisplayString(__props.title));
          });
        });
        vue.createSharedDataSlot("default", null, null);
        return __sharedData;
      };
    }
  });
  const _style_0$1D = {};
  const Card = /* @__PURE__ */ _export_sfc(_sfc_main$1C, [["styles", [_style_0$1D]]]);
  const __className$1A = "GenSrcPagesBasicComponentsChildDemoBox";
  const _sfc_main$1B = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1A,
    __filename: "src/pages/basic/components/ChildDemoBox.uvue",
    __name: "ChildDemoBox",
    props: {
      title: {
        type: String,
        default: "通信子组件"
      },
      count: {
        type: Number,
        default: 0
      },
      tags: {
        type: Array,
        default: () => {
          return ["Vue3", "uni-app X", "UTS"];
        }
      }
    },
    emits: ["add", "reset", "send-msg"],
    setup(__props, _a) {
      var __emit = _a.emit;
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsChildDemoBoxSharedData", sharedDataClassId: 0 })));
      const emit = __emit;
      const inputMsg = vue.ref("Hello Parent from Child!");
      function handleAdd() {
        emit("add", 1);
      }
      function handleReset() {
        emit("reset");
      }
      function handleSendMsg() {
        if (inputMsg.value.trim() == "") {
          uni.showToast({
            title: "请输入消息内容",
            icon: "none"
          });
          return null;
        }
        emit("send-msg", inputMsg.value);
        uni.showToast({
          title: "消息已发送",
          icon: "success"
        });
      }
      return () => {
        "raw js";
        const _component_input = vue.resolveComponent("input");
        vue.createSharedDataSlot("header", null, null, () => {
          vue.renderSharedDataEffect(() => {
            return vue.setSharedData(__sharedData, 0, vue.toDisplayString(__props.title));
          });
        });
        vue.renderSharedDataEffect(() => {
          return vue.setSharedData(__sharedData, 6, vue.toDisplayString(__props.count));
        });
        vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 1, vue.createSharedDataVFor(__sharedDataScope, () => {
          return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$1A}SharedData`, sharedDataClassId: 1 });
        })), () => {
          return __props.tags;
        }, (__sharedData_VFor0, _for_item0, _for_key0) => {
          vue.createSharedDataSlot("itemSlot", {
            item: () => {
              return _for_item0.value;
            },
            index: () => {
              return _for_key0.value;
            }
          }, (data) => {
            return vue.setSharedData(__sharedData_VFor0, 1, data);
          }, () => {
            vue.renderSharedDataEffect(() => {
              vue.setSharedData(__sharedData_VFor0, 2, vue.toDisplayString(_for_key0.value + 1));
              vue.setSharedData(__sharedData_VFor0, 3, vue.toDisplayString(_for_item0.value));
            });
          });
          return null;
        }, (__sharedData_VFor0, item, index) => {
          return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(index));
        });
        vue.setSharedDataEvent(__sharedData, 3, handleAdd);
        vue.setSharedDataEvent(__sharedData, 4, handleReset);
        const n24 = vue.createSharedDataComponentWithFallback(_component_input, "51e12f6b", {
          value: () => {
            return inputMsg.value;
          },
          "onUpdate:value": () => {
            return (_value) => {
              return inputMsg.value = _value;
            };
          },
          placeholder: "输入要送回父组件的消息",
          class: "text-12px flex-1 h-30px px-8px bg-white rounded-4px border-width-1px border-style-solid border-color-__cbd5e1_"
        });
        vue.setSharedData(__sharedData, 2, n24 == null ? void 0 : n24.sharedData);
        vue.setSharedDataEvent(__sharedData, 5, handleSendMsg);
        vue.createSharedDataSlot("footer", null, null, () => {
        });
        return __sharedData;
      };
    }
  });
  const _style_0$1C = {};
  const ChildDemoBox = /* @__PURE__ */ _export_sfc(_sfc_main$1B, [["styles", [_style_0$1C]]]);
  const __className$1z = "GenSrcPagesBasicComponentsPropsDemoCard";
  const _sfc_main$1A = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1z,
    __filename: "src/pages/basic/components/PropsDemoCard.uvue",
    __name: "PropsDemoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsPropsDemoCardSharedData", sharedDataClassId: 0 })));
      const parentCount = vue.ref(10);
      const childMessage = vue.ref("暂无子组件消息");
      const tagList = vue.ref(["响应式 Props 传递", "Emits 事件监听与回传", "具名 Header/Footer 插槽", "具名 Slot 作用域传参"]);
      function onChildAdd(delta) {
        parentCount.value += delta;
      }
      function onChildReset() {
        parentCount.value = 0;
        childMessage.value = "已被子组件重置为 0";
      }
      function onChildSendMsg(msg) {
        childMessage.value = msg;
      }
      function addFiveFromParent() {
        parentCount.value += 5;
      }
      function resetParent() {
        parentCount.value = 10;
        childMessage.value = "已重置为初始状态";
      }
      return () => {
        "raw js";
        const n27 = vue.createSharedDataComponent(
          Card,
          "da44ccdc",
          { title: "父子组件传参 & 具名插槽演示" },
          {
            "default": vue.withSharedDataVaporCtx(() => {
              vue.setSharedDataEvent(__sharedData, 2, addFiveFromParent);
              vue.setSharedDataEvent(__sharedData, 3, resetParent);
              vue.renderSharedDataEffect(() => {
                vue.setSharedData(__sharedData, 4, vue.toDisplayString(parentCount.value));
                vue.setSharedData(__sharedData, 5, vue.toDisplayString(childMessage.value));
              });
              const n26 = vue.createSharedDataComponent(ChildDemoBox, "2c5c02b2", {
                title: "组件通信演示子节点",
                count: () => {
                  return parentCount.value;
                },
                tags: () => {
                  return tagList.value;
                },
                onAdd: () => {
                  return onChildAdd;
                },
                onReset: () => {
                  return onChildReset;
                },
                onSendMsg: () => {
                  return onChildSendMsg;
                }
              }, {
                "header": () => {
                },
                "itemSlot": vue.createSharedDataScopedSlot(vue.createSharedDataVSlot(__sharedDataScope, () => {
                  return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$1z}SharedData`, sharedDataClassId: 1 });
                }), (_slotProps0, __sharedData_VSlot0) => {
                  vue.renderSharedDataEffect(() => {
                    const _item = _slotProps0.item;
                    vue.setSharedData(__sharedData_VSlot0, 0, vue.toDisplayString(_slotProps0.index + 1));
                    vue.setSharedData(__sharedData_VSlot0, 1, vue.toDisplayString(_item));
                    vue.setSharedData(__sharedData_VSlot0, 2, vue.toDisplayString(_item));
                  });
                }),
                "footer": () => {
                }
              });
              vue.setSharedData(__sharedData, 1, n26.sharedData);
            })
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n27.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1B = {};
  const PropsDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$1A, [["styles", [_style_0$1B]]]);
  const __className$1y = "GenSrcPagesBasicComponentsIconDemoCard";
  const _sfc_main$1z = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1y,
    __filename: "src/pages/basic/components/IconDemoCard.uvue",
    __name: "IconDemoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsIconDemoCardSharedData", sharedDataClassId: 0 })));
      const iconDemoTitle = vue.computed(() => {
        return $t("basic.iconDemoTitle");
      });
      const svgAuthWarning = vue.computed(() => {
        return $t("basic.svgAuthWarning");
      });
      return () => {
        "raw js";
        const _component_uni_icons = vue.resolveComponent("uni-icons");
        const _component_l_icon = vue.resolveComponent("l-icon");
        const _component_up_icon = vue.resolveComponent("up-icon");
        const n24 = vue.createSharedDataComponent(
          Card,
          "ef38193e",
          { title: () => {
            return iconDemoTitle.value;
          } },
          {
            "default": vue.withSharedDataVaporCtx(() => {
              const n3 = vue.createSharedDataComponentWithFallback(_component_uni_icons, "f7cb04ac", {
                type: "contact",
                size: "26",
                style: "color: #3b82f6; margin-right: 8px;"
              });
              vue.setSharedData(__sharedData, 1, n3 == null ? void 0 : n3.sharedData);
              vue.renderSharedDataEffect(() => {
                return vue.setSharedData(__sharedData, 4, vue.toDisplayString(svgAuthWarning.value));
              });
              const n13 = vue.createSharedDataComponentWithFallback(_component_l_icon, "0198763c", {
                name: "circle",
                size: "24",
                style: "color: #10b981; margin-right: 8px;"
              });
              vue.setSharedData(__sharedData, 2, n13 == null ? void 0 : n13.sharedData);
              const n20 = vue.createSharedDataComponentWithFallback(_component_up_icon, "019848fc", {
                name: "setting",
                size: "24",
                style: "color: #a855f7; margin-right: 8px;"
              });
              vue.setSharedData(__sharedData, 3, n20 == null ? void 0 : n20.sharedData);
            })
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n24.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1A = {};
  const IconDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$1z, [["styles", [_style_0$1A]]]);
  const __className$1x = "GenSrcPagesBasicComponentsLangSwitchCard";
  const _sfc_main$1y = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1x,
    __filename: "src/pages/basic/components/LangSwitchCard.uvue",
    __name: "LangSwitchCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsLangSwitchCardSharedData", sharedDataClassId: 0 })));
      const appStore = useAppStore();
      const langTitle = vue.computed(() => {
        return $t("basic.langTitle");
      });
      const langPreview = vue.computed(() => {
        return $t("basic.langPreview");
      });
      const welcomeText = vue.computed(() => {
        return $t("message.welcome");
      });
      const helloText = vue.computed(() => {
        return $t("message.hello", new UTSJSONObject({ msg: "hi" }));
      });
      const uviewPreview = vue.computed(() => {
        return $t("basic.uviewPreview");
      });
      const currentLocale = vue.computed(() => {
        return appStore.state.locale;
      });
      const isZhCN = vue.computed(() => {
        return currentLocale.value == "zh-CN";
      });
      const isEnUS = vue.computed(() => {
        return currentLocale.value == "en-US";
      });
      const uViewChooseDates = vue.computed(() => {
        currentLocale.value;
        return t("up.calendar.chooseDates", new UTSJSONObject({}));
      });
      const uViewConfirm = vue.computed(() => {
        currentLocale.value;
        return t("up.common.confirm", new UTSJSONObject({}));
      });
      const uViewStart = vue.computed(() => {
        currentLocale.value;
        return t("up.common.start", new UTSJSONObject({}));
      });
      const uViewEnd = vue.computed(() => {
        currentLocale.value;
        return t("up.common.end", new UTSJSONObject({}));
      });
      function switchLanguage(lang) {
        appStore.setLocale(lang);
        setTabbarItem();
        uni.showToast({
          title: $t("message.switch_success"),
          icon: "none",
          duration: 1500
        });
      }
      return () => {
        "raw js";
        const _component_uni_icons = vue.resolveComponent("uni-icons");
        const n24 = vue.createSharedDataComponent(
          Card,
          "2b814c75",
          { title: () => {
            return langTitle.value;
          } },
          {
            "default": vue.withSharedDataVaporCtx(() => {
              vue.renderSharedDataEffect(() => {
                vue.setSharedData(__sharedData, 7, vue.toDisplayString(langPreview.value));
                vue.setSharedData(__sharedData, 8, vue.toDisplayString(welcomeText.value));
                vue.setSharedData(__sharedData, 9, vue.toDisplayString(helloText.value));
                vue.setSharedData(__sharedData, 10, vue.toDisplayString(uviewPreview.value));
                vue.setSharedData(__sharedData, 11, vue.toDisplayString(uViewChooseDates.value));
                vue.setSharedData(__sharedData, 12, vue.toDisplayString(uViewConfirm.value));
                vue.setSharedData(__sharedData, 13, vue.toDisplayString(uViewStart.value));
                vue.setSharedData(__sharedData, 14, vue.toDisplayString(uViewEnd.value));
              });
              vue.createSharedDataIf(() => {
                return vue.setSharedData(__sharedData, 1, vue.toSharedDataBoolean(isZhCN.value));
              }, () => {
                const n14 = vue.createSharedDataComponentWithFallback(_component_uni_icons, "88bf6f74", {
                  type: "checkmarkempty",
                  size: "20",
                  style: "color: #3b82f6;"
                });
                vue.setSharedData(__sharedData, 2, n14 == null ? void 0 : n14.sharedData);
              });
              vue.setSharedDataEvent(__sharedData, 5, () => {
                return switchLanguage("zh-CN");
              });
              vue.createSharedDataIf(() => {
                return vue.setSharedData(__sharedData, 3, vue.toSharedDataBoolean(isEnUS.value));
              }, () => {
                const n21 = vue.createSharedDataComponentWithFallback(_component_uni_icons, "88bf5100", {
                  type: "checkmarkempty",
                  size: "20",
                  style: "color: #3b82f6;"
                });
                vue.setSharedData(__sharedData, 4, n21 == null ? void 0 : n21.sharedData);
              });
              vue.setSharedDataEvent(__sharedData, 6, () => {
                return switchLanguage("en-US");
              });
            })
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n24.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1z = {};
  const LangSwitchCard = /* @__PURE__ */ _export_sfc(_sfc_main$1y, [["styles", [_style_0$1z]]]);
  const __className$1w = "GenSrcPagesBasicComponentsThemeSwitchCard";
  const _sfc_main$1x = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1w,
    __filename: "src/pages/basic/components/ThemeSwitchCard.uvue",
    __name: "ThemeSwitchCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsThemeSwitchCardSharedData", sharedDataClassId: 0 })));
      const appStore = useAppStore();
      const themeTitle = vue.computed(() => {
        return $t("basic.themeTitle");
      });
      const themePreview = vue.computed(() => {
        return $t("basic.themePreview");
      });
      const themeButton = vue.computed(() => {
        return $t("basic.themeButton");
      });
      const currentTheme = vue.computed(() => {
        return appStore.state.theme;
      });
      const colorOptions = [
        "#37c2bc",
        "#0957DE",
        "#10b981",
        "#f43f5e",
        "#f97316"
      ];
      function changeTheme(color) {
        appStore.setTheme(color);
        uni.showToast({
          title: $t("basic.themeSuccess"),
          icon: "none",
          duration: 1500
        });
      }
      return () => {
        "raw js";
        const n11 = vue.createSharedDataComponent(
          Card,
          "a1511108",
          { title: () => {
            return themeTitle.value;
          } },
          {
            "default": () => {
              vue.renderSharedDataEffect(() => {
                vue.setSharedData(__sharedData, 2, vue.toDisplayString(themePreview.value));
                vue.setSharedDataStyle(__sharedData, 3, { backgroundColor: currentTheme.value });
                vue.setSharedData(__sharedData, 4, vue.toDisplayString(themeButton.value));
              });
              vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 1, vue.createSharedDataVFor(__sharedDataScope, () => {
                return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$1w}SharedData`, sharedDataClassId: 1 });
              })), () => {
                return colorOptions;
              }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                vue.renderSharedDataEffect(() => {
                  const _item = _for_item0.value;
                  vue.setSharedDataStyle(__sharedData_VFor0, 3, {
                    backgroundColor: _item,
                    borderWidth: currentTheme.value == _item ? "3px" : "0px",
                    borderStyle: "solid",
                    borderColor: "#1e293b"
                  });
                });
                vue.createSharedDataIf(() => {
                  return vue.setSharedData(__sharedData_VFor0, 1, vue.toSharedDataBoolean(currentTheme.value == _for_item0.value));
                }, () => {
                });
                vue.setSharedDataEvent(__sharedData_VFor0, 2, () => {
                  return changeTheme(_for_item0.value);
                });
                return null;
              }, (__sharedData_VFor0, item, index) => {
                return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(index));
              }, 1);
            }
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n11.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1y = {};
  const ThemeSwitchCard = /* @__PURE__ */ _export_sfc(_sfc_main$1x, [["styles", [_style_0$1y]]]);
  class DayutsConfig extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            date: { type: "Any", optional: true },
            format: { type: String, optional: true },
            locale: { type: String, optional: true }
          };
        }
      };
    }
    constructor(options, metadata = DayutsConfig.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.date = this.__props__.date;
      this.format = this.__props__.format;
      this.locale = this.__props__.locale;
      delete this.__props__;
    }
  }
  class DayutsFormats extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            LT: { type: String, optional: false },
            LTS: { type: String, optional: false },
            L: { type: String, optional: false },
            LL: { type: String, optional: false },
            LLL: { type: String, optional: false },
            LLLL: { type: String, optional: false },
            l: { type: String, optional: false },
            ll: { type: String, optional: false },
            lll: { type: String, optional: false },
            llll: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = DayutsFormats.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.LT = this.__props__.LT;
      this.LTS = this.__props__.LTS;
      this.L = this.__props__.L;
      this.LL = this.__props__.LL;
      this.LLL = this.__props__.LLL;
      this.LLLL = this.__props__.LLLL;
      this.l = this.__props__.l;
      this.ll = this.__props__.ll;
      this.lll = this.__props__.lll;
      this.llll = this.__props__.llll;
      delete this.__props__;
    }
  }
  class DayutsRelativeTime extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            future: { type: String, optional: false },
            past: { type: String, optional: false },
            s: { type: String, optional: false },
            m: { type: String, optional: false },
            mm: { type: String, optional: false },
            h: { type: String, optional: false },
            hh: { type: String, optional: false },
            d: { type: String, optional: false },
            dd: { type: String, optional: false },
            M: { type: String, optional: false },
            MM: { type: String, optional: false },
            y: { type: String, optional: false },
            yy: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = DayutsRelativeTime.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.future = this.__props__.future;
      this.past = this.__props__.past;
      this.s = this.__props__.s;
      this.m = this.__props__.m;
      this.mm = this.__props__.mm;
      this.h = this.__props__.h;
      this.hh = this.__props__.hh;
      this.d = this.__props__.d;
      this.dd = this.__props__.dd;
      this.M = this.__props__.M;
      this.MM = this.__props__.MM;
      this.y = this.__props__.y;
      this.yy = this.__props__.yy;
      delete this.__props__;
    }
  }
  let DayutsLocale$1 = class DayutsLocale2 extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            name: { type: String, optional: false },
            weekdays: { type: UTS.UTSType.withGenerics(Array, [String]), optional: false },
            weekdaysShort: { type: UTS.UTSType.withGenerics(Array, [String]), optional: true },
            weekdaysMin: { type: UTS.UTSType.withGenerics(Array, [String]), optional: true },
            months: { type: UTS.UTSType.withGenerics(Array, [String]), optional: false },
            monthsShort: { type: UTS.UTSType.withGenerics(Array, [String]), optional: true },
            ordinal: { type: "Unknown", optional: false },
            weekStart: { type: Number, optional: true },
            yearStart: { type: Number, optional: true },
            formats: { type: DayutsFormats, optional: true },
            relativeTime: { type: DayutsRelativeTime, optional: true },
            meridiem: { type: "Unknown", optional: true }
          };
        }
      };
    }
    constructor(options, metadata = DayutsLocale2.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.name = this.__props__.name;
      this.weekdays = this.__props__.weekdays;
      this.weekdaysShort = this.__props__.weekdaysShort;
      this.weekdaysMin = this.__props__.weekdaysMin;
      this.months = this.__props__.months;
      this.monthsShort = this.__props__.monthsShort;
      this.ordinal = this.__props__.ordinal;
      this.weekStart = this.__props__.weekStart;
      this.yearStart = this.__props__.yearStart;
      this.formats = this.__props__.formats;
      this.relativeTime = this.__props__.relativeTime;
      this.meridiem = this.__props__.meridiem;
      delete this.__props__;
    }
  };
  class DayutsObject extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            years: { type: Number, optional: false },
            months: { type: Number, optional: false },
            date: { type: Number, optional: false },
            hours: { type: Number, optional: false },
            minutes: { type: Number, optional: false },
            seconds: { type: Number, optional: false },
            milliseconds: { type: Number, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = DayutsObject.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.years = this.__props__.years;
      this.months = this.__props__.months;
      this.date = this.__props__.date;
      this.hours = this.__props__.hours;
      this.minutes = this.__props__.minutes;
      this.seconds = this.__props__.seconds;
      this.milliseconds = this.__props__.milliseconds;
      delete this.__props__;
    }
  }
  const SECONDS_A_MINUTE = 60;
  const SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
  const SECONDS_A_DAY = SECONDS_A_HOUR * 24;
  const SECONDS_A_WEEK = SECONDS_A_DAY * 7;
  const MILLISECONDS_A_SECOND = 1e3;
  const MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
  const MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
  const MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
  const MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND;
  const MS = "millisecond";
  const S = "second";
  const MIN = "minute";
  const H = "hour";
  const D = "day";
  const W = "week";
  const M = "month";
  const Q = "quarter";
  const Y = "year";
  const DATE = "date";
  const FORMAT_DEFAULT = "YYYY-MM-DDTHH:mm:ssZ";
  const INVALID_DATE_STRING = "Invalid Date";
  const REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
  function padStart(string, length, pad) {
    const str = string;
    if (str.length >= length)
      return str;
    return str.padStart(length, pad);
  }
  function padZoneStr(instance) {
    const negMinutes = -instance.utcOffset();
    const minutes = Math.abs(negMinutes);
    const hourOffset = Math.floor(minutes / 60);
    const minuteOffset = minutes % 60;
    return `${negMinutes <= 0 ? "+" : "-"}${padStart(hourOffset.toString(), 2, "0")}:${padStart(minuteOffset.toString(), 2, "0")}`;
  }
  function isNumber(value) {
    return ["Byte", "UByte", "Short", "UShort", "Int", "UInt", "Long", "ULong", "Float", "Double", "number"].includes(typeof value);
  }
  function prettyUnit(u) {
    var _a;
    const special = /* @__PURE__ */ new Map([
      ["M", M],
      ["y", Y],
      ["w", W],
      ["d", D],
      ["D", DATE],
      ["h", H],
      ["m", MIN],
      ["s", S],
      ["ms", MS],
      ["Q", Q]
    ]);
    return (_a = special.get(u)) !== null && _a !== void 0 ? _a : `${u}`.toLowerCase().replace(/s$/, "");
  }
  function monthDiff(a, b) {
    if (a.date() < b.date())
      return -monthDiff(b, a);
    const wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
    const anchor = a.clone().add(wholeMonthDiff, M).valueOf();
    const c = b.valueOf() - anchor < 0;
    const anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), M).valueOf();
    const decimalMonthDiff = (b.valueOf() - anchor) / (c ? anchor - anchor2 : anchor2 - anchor);
    const result = wholeMonthDiff + decimalMonthDiff;
    const negatedResult = -result;
    const absResult = +negatedResult;
    const finalResult = !isNaN(absResult) ? absResult : 0;
    return finalResult;
  }
  function absFloor(n) {
    return n < 0 ? Math.max(Math.ceil(n), 0) : Math.floor(n);
  }
  const en = {
    name: "en",
    /**
     * 星期名称数组。
     */
    weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    /**
     * 月份名称数组。
     */
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    /**
     * 序数函数，用于将数字转换为带有序数后缀的字符串。
     *
     * @param {number} n - 要转换的数字。
     * @returns {string} 带有序数后缀的字符串。
     */
    ordinal: (n, _) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      const i = (v - 20) % 10;
      const k = i < s.length ? i : v < s.length ? v : 0;
      return `[${n}${s[k]}]`;
    }
  };
  const locale = {
    name: "zh-cn",
    weekdays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    weekdaysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    weekdaysMin: ["日", "一", "二", "三", "四", "五", "六"],
    months: [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月"
    ],
    monthsShort: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月"
    ],
    ordinal: (number2, period) => {
      if (period == "W") {
        return `${number2}周`;
      }
      return `${number2}日`;
    },
    weekStart: 1,
    yearStart: 4,
    formats: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY/MM/DD",
      LL: "YYYY年M月D日",
      LLL: "YYYY年M月D日Ah点mm分",
      LLLL: "YYYY年M月D日ddddAh点mm分",
      l: "YYYY/M/D",
      ll: "YYYY年M月D日",
      lll: "YYYY年M月D日 HH:mm",
      llll: "YYYY年M月D日dddd HH:mm"
    },
    relativeTime: {
      future: "%s内",
      past: "%s前",
      s: "几秒",
      m: "1 分钟",
      mm: "%d 分钟",
      h: "1 小时",
      hh: "%d 小时",
      d: "1 天",
      dd: "%d 天",
      M: "1 个月",
      MM: "%d 个月",
      y: "1 年",
      yy: "%d 年"
    },
    meridiem: (hour, minute, _) => {
      const hm = hour * 100 + minute;
      if (hm < 600) {
        return "凌晨";
      } else if (hm < 900) {
        return "早上";
      } else if (hm < 1100) {
        return "上午";
      } else if (hm < 1300) {
        return "中午";
      } else if (hm < 1800) {
        return "下午";
      }
      return "晚上";
    }
  };
  const localesMap = /* @__PURE__ */ new Map();
  let localeState = vue.reactive({
    lang: "en",
    locales: localesMap
  });
  localeState.locales.set("en", en);
  localeState.locales.set("zh-cn", locale);
  class DayutsIntl {
    constructor() {
    }
    use(locale2) {
      localeState.locales.set(locale2.name, locale2);
      return this;
    }
    set locale(locale2) {
      if (localeState.locales.has(locale2)) {
        localeState.lang = locale2;
      } else {
        let list = [];
        localeState.locales.forEach(function(_, key) {
          list.push(key);
        });
        uni.__log__("warn", "at uni_modules/lime-dayuts/common/use.ts:46", `未知语言: "${locale2}". 请使用以下已知语言之一:${list.join(", ")}`);
      }
    }
    get locale() {
      return localeState.lang;
    }
    set(name, locale2) {
      localeState.locales.set(name, locale2);
    }
    has(name) {
      return localeState.locales.has(name);
    }
  }
  const dayutsIntl = new DayutsIntl();
  function parseLocale(preset, object = null, isLocal = false) {
    let l = null;
    if (preset == null)
      return dayutsIntl.locale;
    if (typeof preset == "string") {
      const presetLower = preset.toLowerCase();
      if (dayutsIntl.has(presetLower)) {
        l = presetLower;
      }
      if (object != null) {
        dayutsIntl.set(presetLower, object);
        l = presetLower;
      }
      const presetSplit = preset.split("-");
      if (l == null && presetSplit.length > 1) {
        return parseLocale(presetSplit[0]);
      }
    } else if (preset instanceof DayutsLocale) {
      dayutsIntl.set(preset.name, preset);
      l = preset.name;
    }
    if (!isLocal && l != null) {
      dayutsIntl.locale = l;
    }
    return l !== null && l !== void 0 ? l : dayutsIntl.locale;
  }
  function tryParseNumberAtIndex(digits, index) {
    if (index >= 0 && index < digits.length) {
      if (digits[index] == null)
        return null;
      const parsedNumber = isNumber(digits[index]) ? digits[index] : parseInt(`${digits[index]}`, 10);
      if (!isNaN(parsedNumber)) {
        return parsedNumber;
      }
    }
    return null;
  }
  function createDateFromArray(d, offset = 0) {
    var _a, _b, _c, _e, _f, _g, _h;
    const year = (_a = tryParseNumberAtIndex(d, 1 - offset)) !== null && _a !== void 0 ? _a : (/* @__PURE__ */ new Date()).getFullYear();
    const month = ((_b = tryParseNumberAtIndex(d, 2 - offset)) !== null && _b !== void 0 ? _b : 1) - 1;
    const day = (_c = tryParseNumberAtIndex(d, 3 - offset)) !== null && _c !== void 0 ? _c : 1;
    const hour = (_e = tryParseNumberAtIndex(d, 4 - offset)) !== null && _e !== void 0 ? _e : 0;
    const minute = (_f = tryParseNumberAtIndex(d, 5 - offset)) !== null && _f !== void 0 ? _f : 0;
    const second = (_g = tryParseNumberAtIndex(d, 6 - offset)) !== null && _g !== void 0 ? _g : 0;
    const millisecond = ((_h = tryParseNumberAtIndex(d, 7 - offset)) !== null && _h !== void 0 ? _h : 0).toString().substring(0, 3);
    return new Date(year, month, day, hour, minute, second, parseInt(millisecond));
  }
  function parseDate(cfg) {
    const date = cfg.date;
    if (date == null)
      return /* @__PURE__ */ new Date();
    if (date instanceof Date)
      return date;
    try {
      if (typeof date == "string" && !/Z$/i.test(date)) {
        const d = date.match(REGEX_PARSE);
        const isNull = d == null || Array.isArray(d) && d.length == 0;
        if (!isNull) {
          return createDateFromArray(d);
        }
      }
      if (typeof date == "string")
        return new Date(date);
      if (Array.isArray(date)) {
        return createDateFromArray(date, 1);
      }
      if (isNumber(date))
        return new Date(date);
      return null;
    } catch (err) {
      return null;
    }
  }
  function wrapper(date, instance) {
    return dayuts(date, instance.$L);
  }
  class Dayuts {
    constructor(cfg) {
      var _a;
      this.valid = true;
      this.$d = /* @__PURE__ */ new Date();
      this.$y = 0;
      this.$M = 0;
      this.$D = 0;
      this.$W = 0;
      this.$H = 0;
      this.$m = 0;
      this.$s = 0;
      this.$ms = 0;
      this.$u = false;
      this.$L = (_a = parseLocale(cfg.locale)) !== null && _a !== void 0 ? _a : dayutsIntl.locale;
      this.parse(cfg);
    }
    parse(cfg) {
      const _d = parseDate(cfg);
      if (_d != null) {
        this.$d = parseDate(cfg);
        this.init();
      } else {
        this.valid = false;
      }
    }
    init() {
      const $d = this.$d;
      this.$y = $d.getFullYear();
      this.$M = $d.getMonth();
      this.$D = $d.getDate();
      this.$W = $d.getDay();
      this.$H = $d.getHours();
      this.$m = $d.getMinutes();
      this.$s = $d.getSeconds();
      this.$ms = $d.getMilliseconds();
    }
    /**
     * 检查日期对象是否有效。
     *
     * @returns {boolean} 如果日期对象有效，则返回true；否则返回false。
     */
    isValid() {
      return this.valid;
    }
    isSame(input, units = "millisecond") {
      const other = input instanceof Dayuts ? input : dayuts(input);
      const date1 = this.startOf(units).valueOf();
      const date2 = other.valueOf();
      const date3 = this.endOf(units).valueOf();
      return date1 <= date2 && date2 <= date3;
    }
    isAfter(input, units = "millisecond") {
      const other = input instanceof Dayuts ? input : dayuts(input);
      const date1 = other.valueOf();
      const date2 = this.startOf(units).valueOf();
      return date1 < date2;
    }
    isBefore(input, units = "millisecond") {
      const other = input instanceof Dayuts ? input : dayuts(input);
      const date1 = other.valueOf();
      const date2 = this.endOf(units).valueOf();
      return date2 < date1;
    }
    isSameOrBefore(input, units = "millisecond") {
      return this.isSame(input, units) || this.isBefore(input, units);
    }
    isSameOrAfter(input, units = "millisecond") {
      return this.isSame(input, units) || this.isAfter(input, units);
    }
    /**
     * 判断当前Dayuts对象是否在给定的两个时间之间
     * @param {any} input - 第一个时间输入
     * @param {any} input2 - 第二个时间输入
     * @param {DayutsUnit} units - 指定的时间单位
     * @param {string} interval - 区间符号，表示区间的开闭性，默认为'()'，表示开区间
     * @returns {boolean} - 如果当前Dayuts对象在给定的两个时间之间，则返回true，否则返回false
     */
    isBetween(input, input2, units = "millisecond", interval = "()") {
      const dA = dayuts(input);
      const dB = dayuts(input2);
      const dAi = interval.startsWith("(");
      const dBi = interval.endsWith(")");
      return (dAi ? this.isAfter(dA, units) : !this.isBefore(dA, units)) && (dBi ? this.isBefore(dB, units) : !this.isAfter(dB, units)) || (dAi ? this.isBefore(dA, units) : !this.isAfter(dA, units)) && (dBi ? this.isAfter(dB, units) : !this.isBefore(dB, units));
    }
    /**
     * 判断当前Dayuts对象所在的年份是否为闰年
     * @returns {boolean} - 如果当前Dayuts对象所在的年份是闰年，则返回true，否则返回false
     */
    isLeapYear() {
      return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
    }
    isToday() {
      const comparisonTemplate = "YYYY-MM-DD";
      const now = dayuts();
      return this.format(comparisonTemplate) == now.format(comparisonTemplate);
    }
    /**
     * 获取当前 `dayuts` 对象的 Unix 时间戳（以秒为单位）。
     *
     * @returns {number} 返回当前 `dayuts` 对象的 Unix 时间戳（以秒为单位）。
     */
    unix() {
      return Math.floor(this.valueOf() / 1e3);
    }
    /**
     * 将当前日期设置为指定时间单位的开始或结束。
     *
     * @param {string} units - 时间单位，例如'year'、'month'、'day'等。
     * @param {boolean} startOf - 如果为true，则设置为开始；如果为false，则设置为结束。
     * @returns {Dayuts} 返回一个新的Dayuts对象，表示调整后的日期。
     */
    startOf(units, startOf = true) {
      var _a;
      const isStartOf = startOf;
      const unit = prettyUnit(units);
      const instanceFactory = (d, m) => {
        const ins = dayuts(new Date(this.$y, m, d));
        return isStartOf ? ins : ins.endOf(D);
      };
      const instanceFactorySet = (method, slice) => {
        const argumentStart = [0, 0, 0, 0];
        const argumentEnd = [23, 59, 59, 999];
        const args = (isStartOf ? argumentStart : argumentEnd).slice(slice);
        const date = this.toDate();
        if (method == "setHours") {
          date.setHours(args[0]);
          date.setMinutes(args[1]);
          date.setSeconds(args[2]);
          date.setMilliseconds(args[3]);
        } else if (method == "setMinutes") {
          date.setMinutes(args[0]);
          date.setSeconds(args[1]);
          date.setMilliseconds(args[2]);
        } else if (method == "setSeconds") {
          date.setSeconds(args[0]);
          date.setMilliseconds(args[1]);
        } else if (method == "setMilliseconds") {
          date.setMilliseconds(args[0]);
        }
        return dayuts(date);
      };
      const _b = this, $W = _b.$W, $M = _b.$M, $D = _b.$D;
      const utcPad = `set${this.$u ? "UTC" : ""}`;
      if (unit == Y) {
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);
      } else if (unit == M) {
        return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);
      } else if (unit == W) {
        const weekStart = (_a = this.$locale().weekStart) !== null && _a !== void 0 ? _a : 0;
        const gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
        return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
      } else if (unit == D || unit == DATE) {
        return instanceFactorySet(`${utcPad}Hours`, 0);
      } else if (unit == H) {
        return instanceFactorySet(`${utcPad}Minutes`, 1);
      } else if (unit == MIN) {
        return instanceFactorySet(`${utcPad}Seconds`, 2);
      } else if (unit == S) {
        return instanceFactorySet(`${utcPad}Milliseconds`, 3);
      } else {
        return this.clone();
      }
    }
    /**
     * 将当前日期设置为指定时间单位的结束。
     *
     * @param {string} arg - 时间单位，例如'year'、'month'、'day'等。
     * @returns {Dayuts} 返回一个新的Dayuts对象，表示调整后的日期。
     */
    endOf(units) {
      return this.startOf(units, false);
    }
    /**
     * 设置指定的时间单位的值。
     *
     * @param {string} units - 要设置的时间单位（如 "year"、"month"、"day" 等）。
     * @param {number} int - 要设置的值。
     * @returns {Dayuts} 返回当前对象。
     */
    $set(units, int) {
      const unit = prettyUnit(units);
      const arg = unit == D ? this.$D + (int - this.$W) : int;
      const setDateUnit = (date, unit2, arg2) => {
        if (unit2 == D || unit2 == DATE) {
          date.$d.setDate(arg2);
        } else if (unit2 == M) {
          date.$d.setMonth(arg2);
        } else if (unit2 == Y) {
          date.$d.setFullYear(arg2);
        } else if (unit2 == H) {
          date.$d.setHours(arg2);
        } else if (unit2 == MIN) {
          date.$d.setMinutes(arg2);
        } else if (unit2 == S) {
          date.$d.setSeconds(arg2);
        } else if (unit2 == MS) {
          date.$d.setMilliseconds(arg2);
        }
      };
      if (unit == M || unit == Y) {
        const date = this.clone().set(DATE, 1);
        setDateUnit(date, unit, arg);
        date.init();
        this.$d = date.set(DATE, Math.min(this.$D, date.daysInMonth())).$d;
      } else {
        setDateUnit(this, unit, arg);
      }
      this.init();
      return this;
    }
    /**
     * 创建一个当前对象的副本，并设置指定的时间单位的值。
     *
     * @param {string} string - 要设置的时间单位（如 "year"、"month"、"day" 等）。
     * @param {number} int - 要设置的值。
     * @returns {Dayuts} 返回一个新的 `dayuts` 对象，其值为当前对象的副本，并设置了指定的时间单位的值。
     */
    set(string, int) {
      return this.clone().$set(string, int);
    }
    /**
     * 获取当前 `dayuts` 对象的指定时间单位的值。
     *
     * @param {string} units - 要获取的时间单位（如 "year"、"month"、"day" 等）。
     * @returns {number} 返回当前 `dayuts` 对象的指定时间单位的值。
     */
    get(units) {
      const unit = prettyUnit(units);
      if (unit == D) {
        return this.day();
      } else if (unit == DATE) {
        return this.date();
      } else if (unit == M) {
        return this.month();
      } else if (unit == Y) {
        return this.year();
      } else if (unit == H) {
        return this.hour();
      } else if (unit == MIN) {
        return this.minute();
      } else if (unit == S) {
        return this.second();
      } else if (unit == MS) {
        return this.millisecond();
      }
      return 0;
    }
    year(input = null) {
      if (input == null)
        return this.$y;
      return this.set(Y, input);
    }
    month(input = null) {
      if (input == null)
        return this.$M;
      return this.set(M, input);
    }
    day(input = null) {
      if (input == null)
        return this.$W;
      return this.set(D, input);
    }
    date(input = null) {
      if (input == null)
        return this.$D;
      return this.set(DATE, input);
    }
    hour(input = null) {
      if (input == null)
        return this.$H;
      return this.set(H, input);
    }
    minute(input = null) {
      if (input == null)
        return this.$m;
      return this.set(MIN, input);
    }
    second(input = null) {
      if (input == null)
        return this.$s;
      return this.set(S, input);
    }
    millisecond(input = null) {
      if (input == null)
        return this.$ms;
      return this.set(MS, input);
    }
    /**
     * 在当前 Dayuts 实例上添加指定的时间长度。
     * @param {number} number - 要添加的时间长度。
     * @param {string} units - 要添加的时间单位（例如，“years”，“months”，“days”等）。
     * @returns {Dayuts} 更新的 Dayuts 实例。
     */
    add(number2, units) {
      var _a;
      const unit = prettyUnit(units);
      const instanceFactorySet = (n) => {
        const d = dayuts(this);
        return d.date(d.date() + Math.round(n * number2));
      };
      if (unit == M) {
        return this.set(M, this.$M + number2);
      }
      if (unit == Y) {
        return this.set(Y, this.$y + number2);
      }
      if (unit == D) {
        return instanceFactorySet(1);
      }
      if (unit == W) {
        return instanceFactorySet(7);
      }
      const steps = /* @__PURE__ */ new Map([
        [MIN, MILLISECONDS_A_MINUTE],
        [H, MILLISECONDS_A_HOUR],
        [S, MILLISECONDS_A_SECOND]
      ]);
      const step = (_a = steps.get(unit)) !== null && _a !== void 0 ? _a : 1;
      const nextTimeStamp = this.$d.getTime() + number2 * step;
      return wrapper(nextTimeStamp, this);
    }
    /**
     * 从当前 Dayuts 实例中减去指定的时间。
     * @param {number} number - 要减去的时间。
     * @param {string} units - 要减去的时间单位（例如，“years”，“months”，“days”等）。
     * @returns {Dayuts} 更新的 Dayuts 实例。
     */
    subtract(number2, units) {
      return this.add(number2 * -1, units);
    }
    /**
     * 日期格式化
     * @param {string} formatStr - 格式化字符串，包含各种格式化占位符（例如，“YYYY-MM-DD”，“HH:mm:ss”等）。
     * @returns {string} 格式化后的日期字符串。
     */
    format(formatStr = null) {
      const locale2 = this.$locale();
      if (!this.isValid())
        return INVALID_DATE_STRING;
      const str = formatStr !== null && formatStr !== void 0 ? formatStr : FORMAT_DEFAULT;
      const zoneStr = padZoneStr(this);
      const _a = this, $H = _a.$H, $m = _a.$m, $M = _a.$M;
      const weekdays = locale2.weekdays, months = locale2.months, meridiem = locale2.meridiem;
      function getShort(arr, index, full = [], length = 0) {
        if (arr != null && arr.length >= index) {
          return arr[index];
        } else if (full.length >= index) {
          return full[index].slice(0, length);
        }
        return "";
      }
      const get$H = (num) => {
        return padStart(($H % 12 == 0 ? 12 : $H % 12).toString(), num, "0");
      };
      const meridiemFunc = meridiem !== null && meridiem !== void 0 ? meridiem : (hour, _, isLowercase) => {
        const m = hour < 12 ? "AM" : "PM";
        return isLowercase ? m.toLowerCase() : m;
      };
      return str.replace("YYYY", padStart(this.$y.toString(), 4, "0")).replace("YY", this.$y.toString().slice(-2)).replace("MMMM", getShort(months, $M)).replace("MM", padStart(($M + 1).toString(), 2, "0")).replace("M", ($M + 1).toString()).replace("DD", padStart(this.$D.toString(), 2, "0")).replace("D", this.$D.toString()).replace("dddd", weekdays[this.$W]).replace("ddd", getShort(locale2.weekdaysShort, this.$W, weekdays, 3)).replace("dd", getShort(locale2.weekdaysMin, this.$W, weekdays, 2)).replace("d", this.$W.toString()).replace("HH", padStart($H.toString(), 2, "0")).replace("H", $H.toString()).replace("hh", get$H(2)).replace("h", get$H(1)).replace("mm", padStart($m.toString(), 2, "0")).replace("m", $m.toString()).replace("ss", padStart(this.$s.toString(), 2, "0")).replace("s", this.$s.toString()).replace("SSS", padStart(this.$ms.toString(), 3, "0")).replace("A", meridiemFunc($H, $m, false)).replace("a", meridiemFunc($H, $m, true)).replace("Z", zoneStr);
    }
    /**
     * 获取 Dayuts 实例的 UTC 偏移量（以分钟为单位）。
     * @returns {number} UTC 偏移量（以分钟为单位）。
     */
    utcOffset() {
      return 0;
    }
    diff(input, units = "millisecond", float = false) {
      const unit = prettyUnit(units);
      const that = dayuts(input);
      const zoneDelta = (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE;
      const diff = this.valueOf() - that.valueOf();
      const getMonth = () => {
        return monthDiff(this, that);
      };
      let result;
      switch (unit) {
        case Y:
          result = getMonth() / 12;
          break;
        case M:
          result = getMonth();
          break;
        case Q:
          result = getMonth() / 3;
          break;
        case W:
          result = (diff - zoneDelta) / MILLISECONDS_A_WEEK;
          break;
        case D:
          result = (diff - zoneDelta) / MILLISECONDS_A_DAY;
          break;
        case H:
          result = diff / MILLISECONDS_A_HOUR;
          break;
        case MIN:
          result = diff / MILLISECONDS_A_MINUTE;
          break;
        case S:
          result = diff / MILLISECONDS_A_SECOND;
          break;
        default:
          result = diff;
          break;
      }
      return float ? result : absFloor(result);
    }
    /**
     * 将当前 Dayuts 对象转换为原生 Date 对象。
     *
     * @returns {Date} 返回一个表示当前日期的原生 Date 对象。
     */
    toDate() {
      return new Date(this.valueOf());
    }
    /**
     * 将 Moment 对象转换为 JSON 字符串
     * @returns {string | null} 如果 Moment 对象有效，则返回 ISO 8601 格式的字符串，否则返回 null
     */
    toJSON() {
      return this.isValid() ? this.toISOString() : null;
    }
    /**
     * 将 Moment 对象转换为 ISO 8601 格式的字符串
     * @returns {string} 返回 ISO 8601 格式的字符串
     */
    toISOString() {
      return this.$d.toString();
    }
    toObject() {
      return {
        years: this.$y,
        months: this.$M,
        date: this.$D,
        hours: this.$H,
        minutes: this.$m,
        seconds: this.$s,
        milliseconds: this.$ms
      };
    }
    toArray() {
      return [
        this.$y,
        this.$M,
        this.$D,
        this.$H,
        this.$m,
        this.$s,
        this.$ms
      ];
    }
    /**
     * 获取当前日期的毫秒数。
     *
     * @returns {number} 返回一个表示当前日期的毫秒数。
     */
    valueOf() {
      return this.$d.getTime();
    }
    /**
     * 获取当前 `dayuts` 对象所在月份的天数。
     *
     * @returns {number} 返回当前 `dayuts` 对象所在月份的天数。
     */
    daysInMonth() {
      return this.endOf(M).$D;
    }
    /**
     * 获取当前日期的区域设置对象。
     *
     * @returns {Object} 区域设置对象。
     */
    $locale() {
      return localeState.locales.get(this.$L);
    }
    locale(preset, object = null) {
      const that = this.clone();
      const nextLocaleName = parseLocale(preset, object, true);
      if (nextLocaleName != null)
        that.$L = nextLocaleName;
      return that;
    }
    clone() {
      return wrapper(this.$d.getTime(), this);
    }
    /**
     * 返回当前 dayuts 对象的 UTC 字符串表示。
     *
     * @returns {string} 当前 dayuts 对象的 UTC 字符串表示。
     */
    toString() {
      return this.$d.toString();
    }
    dayOfYear(input = null) {
      const dayOfYear = Math.round((this.startOf("day").valueOf() - this.startOf("year").valueOf()) / 864e5) + 1;
      return input == null ? dayOfYear : this.add(input - dayOfYear, "day");
    }
    fromToBase(input, withoutSuffix, instance, isFrom) {
      var _a, _b;
      const relObj = (_a = localeState.locales.get("en")) === null || _a === void 0 ? void 0 : _a.relativeTime;
      const loc = (_b = instance.$locale().relativeTime) !== null && _b !== void 0 ? _b : relObj;
      if (loc == null)
        return "";
      const T = [
        { l: "s", r: 44, d: S },
        { l: "m", r: 89 },
        { l: "mm", r: 44, d: MIN },
        { l: "h", r: 89 },
        { l: "hh", r: 21, d: H },
        { l: "d", r: 35 },
        { l: "dd", r: 25, d: D },
        { l: "M", r: 45 },
        { l: "MM", r: 10, d: M },
        { l: "y", r: 17 },
        { l: "yy", d: Y }
      ];
      const Tl = T.length;
      let result = 0;
      let out = "";
      let isFuture = false;
      for (let i = 0; i < Tl; i += 1) {
        let t2 = T[i];
        if (t2.d != null) {
          result = isFrom ? dayuts(input).diff(instance, t2.d, true) : instance.diff(input, t2.d, true);
        }
        let abs = Math.round(Math.abs(result));
        isFuture = result > 0;
        if (t2.r == null || t2.r != null && abs <= t2.r) {
          if (abs <= 1 && i > 0)
            t2 = T[i - 1];
          const format = loc[t2.l];
          if (typeof format == "string") {
            out = format.replace("%d", abs.toString());
          }
          break;
        }
      }
      if (withoutSuffix)
        return out;
      const pastOrFuture = isFuture ? loc.future : loc.past;
      return pastOrFuture.replace("%s", out);
    }
    to(input, withoutSuffix = false) {
      return this.fromToBase(input, withoutSuffix, this, true);
    }
    from(input, withoutSuffix = false) {
      return this.fromToBase(input, withoutSuffix, this, false);
    }
    toNow(withoutSuffix = false) {
      return this.to(dayuts(), withoutSuffix);
    }
    fromNow(withoutSuffix = false) {
      return this.from(dayuts(), withoutSuffix);
    }
  }
  function dayuts(date = null, format = null, locale2 = null) {
    if (date != null && date instanceof Dayuts)
      return date.clone();
    return new Dayuts({
      date,
      format,
      locale: locale2
    });
  }
  const __className$1v = "GenSrcPagesBasicComponentsTimeDemoCard";
  const _sfc_main$1w = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1v,
    __filename: "src/pages/basic/components/TimeDemoCard.uvue",
    __name: "TimeDemoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsTimeDemoCardSharedData", sharedDataClassId: 0 })));
      const currentFullTime = vue.ref("");
      let timerId = 0;
      const offsetDays = vue.ref(0);
      function updateClock() {
        currentFullTime.value = dayuts().format("YYYY-MM-DD HH:mm:ss.SSS dddd");
      }
      function adjustOffset(days) {
        offsetDays.value += days;
      }
      const targetOffsetTime = vue.computed(() => {
        return dayuts().add(offsetDays.value, "day").format("YYYY-MM-DD HH:mm:ss");
      });
      const startOfMonth = vue.computed(() => {
        return dayuts().startOf("month").format("YYYY-MM-DD");
      });
      const endOfMonth = vue.computed(() => {
        return dayuts().endOf("month").format("YYYY-MM-DD");
      });
      const isLeapYear = vue.computed(() => {
        return dayuts().isLeapYear();
      });
      const daysToYearEnd = vue.computed(() => {
        const endOfYear = dayuts().endOf("year");
        const diffVal = endOfYear.diff(dayuts(), "day");
        return Math.ceil(diffVal);
      });
      vue.onMounted(() => {
        updateClock();
        timerId = setInterval(() => {
          updateClock();
        }, 100);
      });
      vue.onUnmounted(() => {
        if (timerId != 0) {
          clearInterval(timerId);
        }
      });
      return () => {
        "raw js";
        const n39 = vue.createSharedDataComponent(
          Card,
          "0cd4a003",
          { title: "时间日期操作 (lime-dayuts)" },
          {
            "default": () => {
              vue.setSharedDataEvent(__sharedData, 1, () => {
                return adjustOffset(-7);
              });
              vue.setSharedDataEvent(__sharedData, 2, () => {
                return adjustOffset(-1);
              });
              vue.setSharedDataEvent(__sharedData, 3, () => {
                return adjustOffset(1);
              });
              vue.setSharedDataEvent(__sharedData, 4, () => {
                return adjustOffset(7);
              });
              vue.renderSharedDataEffect(() => {
                const _offsetDays = offsetDays.value;
                vue.setSharedData(__sharedData, 5, vue.toDisplayString(currentFullTime.value));
                vue.setSharedData(__sharedData, 6, vue.toDisplayString(_offsetDays > 0 ? "+" : ""));
                vue.setSharedData(__sharedData, 7, vue.toDisplayString(_offsetDays));
                vue.setSharedData(__sharedData, 8, vue.toDisplayString(targetOffsetTime.value));
                vue.setSharedData(__sharedData, 9, vue.toDisplayString(startOfMonth.value));
                vue.setSharedData(__sharedData, 10, vue.toDisplayString(endOfMonth.value));
                vue.setSharedData(__sharedData, 11, vue.toDisplayString(isLeapYear.value ? "366天 (闰年)" : "365天 (平年)"));
                vue.setSharedData(__sharedData, 12, vue.toDisplayString(daysToYearEnd.value));
              });
            }
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n39.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1x = {};
  const TimeDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$1w, [["styles", [_style_0$1x]]]);
  const __className$1u = "GenSrcPagesBasicComponentsRouterDemoCard";
  const _sfc_main$1v = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1u,
    __filename: "src/pages/basic/components/RouterDemoCard.uvue",
    __name: "RouterDemoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsRouterDemoCardSharedData", sharedDataClassId: 0 })));
      const tokenStore = useTokenStore();
      const userStore = useUserStore();
      const hasLogin = vue.computed(() => {
        return tokenStore.hasValidLogin();
      });
      function jumpToTest() {
        uni.navigateTo({
          url: "/src/sub/test/test?id=999&name=UNIX"
        });
      }
      function handleLogout() {
        tokenStore.clearToken();
        userStore.clearUserInfo();
        uni.showToast({
          title: "已清除登录状态",
          icon: "success"
        });
      }
      return () => {
        "raw js";
        const n10 = vue.createSharedDataComponent(
          Card,
          "65bc6202",
          { title: "路由拦截与传参测试" },
          {
            "default": () => {
              vue.setSharedDataEvent(__sharedData, 1, jumpToTest);
              vue.setSharedDataEvent(__sharedData, 2, handleLogout);
              vue.renderSharedDataEffect(() => {
                const _hasLogin = hasLogin.value;
                vue.setSharedDataStyle(__sharedData, 3, { fontSize: "14px", fontWeight: "bold", color: _hasLogin ? "#10b981" : "#f43f5e" });
                vue.setSharedData(__sharedData, 4, vue.toDisplayString(_hasLogin ? "已登录" : "未登录"));
              });
            }
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n10.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1w = {};
  const RouterDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$1v, [["styles", [_style_0$1w]]]);
  class LimeRequestSource extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            url: { type: String, optional: true },
            baseURL: { type: String, optional: true },
            path: { type: String, optional: true },
            method: { type: String, optional: true },
            timestamp: { type: Number, optional: true }
          };
        }
      };
    }
    constructor(options, metadata = LimeRequestSource.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.url = this.__props__.url;
      this.baseURL = this.__props__.baseURL;
      this.path = this.__props__.path;
      this.method = this.__props__.method;
      this.timestamp = this.__props__.timestamp;
      delete this.__props__;
    }
  }
  class LimeRequestFail extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            errCode: { type: Number, optional: false },
            errSubject: { type: String, optional: false },
            data: { type: "Any", optional: true },
            cause: { type: "Unknown", optional: true },
            errMsg: { type: String, optional: false },
            source: { type: LimeRequestSource, optional: true }
          };
        }
      };
    }
    constructor(options, metadata = LimeRequestFail.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.errCode = this.__props__.errCode;
      this.errSubject = this.__props__.errSubject;
      this.data = this.__props__.data;
      this.cause = this.__props__.cause;
      this.errMsg = this.__props__.errMsg;
      this.source = this.__props__.source;
      delete this.__props__;
    }
  }
  class LimeRequestHandler extends UTS.UTSType {
    static get$UTSMetadata$(T) {
      return {
        kind: 2,
        get fields() {
          return {
            fulfilled: { type: "Unknown", optional: false },
            rejected: { type: "Unknown", optional: true }
          };
        }
      };
    }
    constructor(options, metadata = LimeRequestHandler.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.fulfilled = this.__props__.fulfilled;
      this.rejected = this.__props__.rejected;
      delete this.__props__;
    }
  }
  class LimeReducerFactoryResult extends UTS.UTSType {
    static get$UTSMetadata$(T) {
      return {
        kind: 2,
        get fields() {
          return {
            use: { type: "Unknown", optional: false },
            resolve: { type: "Unknown", optional: false },
            reject: { type: "Unknown", optional: false }
          };
        }
      };
    }
    constructor(options, metadata = LimeReducerFactoryResult.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.use = this.__props__.use;
      this.resolve = this.__props__.resolve;
      this.reject = this.__props__.reject;
      delete this.__props__;
    }
  }
  class LimeInterceptors extends UTS.UTSType {
    static get$UTSMetadata$(T, U) {
      return {
        kind: 2,
        get fields() {
          return {
            request: { type: UTS.UTSType.withGenerics(LimeReducerFactoryResult, ["Unknown"]), optional: false },
            response: { type: UTS.UTSType.withGenerics(LimeReducerFactoryResult, ["Unknown"]), optional: false }
          };
        }
      };
    }
    constructor(options, metadata = LimeInterceptors.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.request = this.__props__.request;
      this.response = this.__props__.response;
      delete this.__props__;
    }
  }
  class LimeRequestConfig extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            baseURL: { type: String, optional: true },
            params: { type: "Unknown", optional: true },
            getTask: { type: "Unknown", optional: true },
            data: { type: "Any", optional: true },
            extra: { type: "Unknown", optional: true },
            url: { type: String, optional: true },
            header: { type: "Unknown", optional: true },
            method: { type: "Unknown", optional: true },
            timeout: { type: Number, optional: true },
            dataType: { type: String, optional: true },
            responseType: { type: String, optional: true },
            sslVerify: { type: Boolean, optional: true },
            withCredentials: { type: Boolean, optional: true },
            firstIpv4: { type: Boolean, optional: true },
            enableHttp2: { type: Boolean, optional: true },
            enableQuic: { type: Boolean, optional: true },
            enableCache: { type: Boolean, optional: true },
            enableHttpDNS: { type: Boolean, optional: true },
            httpDNSServiceId: { type: Boolean, optional: true },
            enableChunked: { type: Boolean, optional: true },
            forceCellularNetwork: { type: Boolean, optional: true },
            enableCookie: { type: Boolean, optional: true },
            cloudCache: { type: "Unknown", optional: true },
            defer: { type: Boolean, optional: true },
            files: { type: UTS.UTSType.withGenerics(Array, ["Unknown"]), optional: true },
            fileType: { type: "Unknown", optional: true },
            filePath: { type: String, optional: true },
            name: { type: String, optional: true },
            formData: { type: "Unknown", optional: true }
          };
        }
      };
    }
    constructor(options, metadata = LimeRequestConfig.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.baseURL = this.__props__.baseURL;
      this.params = this.__props__.params;
      this.getTask = this.__props__.getTask;
      this.data = this.__props__.data;
      this.extra = this.__props__.extra;
      this.url = this.__props__.url;
      this.header = this.__props__.header;
      this.method = this.__props__.method;
      this.timeout = this.__props__.timeout;
      this.dataType = this.__props__.dataType;
      this.responseType = this.__props__.responseType;
      this.sslVerify = this.__props__.sslVerify;
      this.withCredentials = this.__props__.withCredentials;
      this.firstIpv4 = this.__props__.firstIpv4;
      this.enableHttp2 = this.__props__.enableHttp2;
      this.enableQuic = this.__props__.enableQuic;
      this.enableCache = this.__props__.enableCache;
      this.enableHttpDNS = this.__props__.enableHttpDNS;
      this.httpDNSServiceId = this.__props__.httpDNSServiceId;
      this.enableChunked = this.__props__.enableChunked;
      this.forceCellularNetwork = this.__props__.forceCellularNetwork;
      this.enableCookie = this.__props__.enableCookie;
      this.cloudCache = this.__props__.cloudCache;
      this.defer = this.__props__.defer;
      this.files = this.__props__.files;
      this.fileType = this.__props__.fileType;
      this.filePath = this.__props__.filePath;
      this.name = this.__props__.name;
      this.formData = this.__props__.formData;
      delete this.__props__;
    }
  }
  class URLSearchParams {
    [Symbol.iterator]() {
      let index = 0;
      const entries = this._params;
      let obj = {
        next: () => {
          return index < entries.length ? { value: entries[index++], done: false } : { value: null, done: true };
        }
      };
      return obj;
    }
    constructor(init = null) {
      this._params = [];
      if (init != null) {
        if (typeof init == "string") {
          this.parseString(init);
        } else if (Array.isArray(init)) {
          init.forEach((item = null) => {
            if (Array.isArray(item) && item.length > 1) {
              this.append(`${item[0]}`, `${item[1]}`);
            }
          });
        } else if (typeof init == "object") {
          init.toMap().forEach((value = null, name) => {
            this.append(name, `${value !== null && value !== void 0 ? value : ""}`);
          });
        }
      }
    }
    parseString(query) {
      if (query.startsWith("?"))
        query = query.slice(1);
      query.split("&").forEach((pair) => {
        const arr = pair.split("=").map((s) => {
          return this.decode(s);
        });
        if (arr[0] != null && arr[0].length > 0) {
          this.append(arr[0], arr.length > 1 ? arr[1] : "");
        }
      });
    }
    encode(str) {
      var _a;
      return (_a = encodeURIComponent(str)) === null || _a === void 0 ? null : _a.replace(/%20/g, "+").replace(/%21/g, "!").replace(/%27/g, "'").replace(/%28/g, "(").replace(/%29/g, ")").replace(/%2A/g, "*").replace(/%2D/g, "-").replace(/%5F/g, "_").replace(/%2E/g, ".").replace(/%7E/g, "~");
    }
    decode(str) {
      return decodeURIComponent(str.replace(/\+/g, " "));
    }
    append(key, value) {
      this._params.push([`${key}`, `${value}`]);
    }
    delete(key) {
      const k = `${key}`;
      this._params = this._params.filter((pair) => {
        return pair[0] != k;
      });
    }
    get(key) {
      const entry = UTS.arrayFind(this._params, (pair) => {
        return pair[0] == `${key}`;
      });
      return entry != null ? entry[1] : null;
    }
    getAll(key) {
      return this._params.filter((pair) => {
        return pair[0] == `${key}`;
      }).map((pair) => {
        return pair[1];
      });
    }
    has(key) {
      return this._params.some((pair) => {
        return pair[0] == `${key}`;
      });
    }
    set(key, value) {
      this.delete(key);
      this.append(key, value);
    }
    _toString() {
      return this._params.map((pair) => {
        return `${this.encode(pair[0])}=${this.encode(pair[1])}`;
      }).join("&");
    }
    toString() {
      return this._toString();
    }
    get size() {
      return this._params.length;
    }
    forEach(callback, thisArg = null) {
      this._params.forEach((pair) => {
        callback(pair[1], pair[0], this);
      });
    }
    entries() {
      return this._params;
    }
    sort() {
      this._params.sort();
    }
    values() {
      return this._params.map((pair) => {
        return pair[1];
      });
    }
    keys() {
      return this._params.map((pair) => {
        return pair[0];
      });
    }
  }
  function mergeConfig(...configs) {
    return configs.reduce((result, config2) => {
      const _result = result;
      for (let key in config2) {
        if (config2[key] != null) {
          _result[key] = config2[key];
        }
      }
      return _result;
    }, new LimeRequestConfig({
      baseURL: null,
      params: null,
      getTask: null,
      data: null,
      extra: null,
      url: null,
      header: null,
      method: null,
      timeout: null,
      dataType: null,
      responseType: null,
      sslVerify: null,
      withCredentials: null,
      firstIpv4: null,
      enableHttp2: null,
      enableQuic: null,
      enableCache: null,
      enableHttpDNS: null,
      httpDNSServiceId: null,
      enableChunked: null,
      forceCellularNetwork: null,
      enableCookie: null,
      cloudCache: null,
      defer: null,
      files: null,
      fileType: null,
      filePath: null,
      name: null,
      formData: null
    }));
  }
  function mergeSearchParams(search, query) {
    const originalParams = new URLSearchParams(search);
    const mergedParams = new URLSearchParams();
    originalParams.entries().forEach((_a) => {
      var _b = __read(_a, 2), key = _b[0], value = _b[1];
      mergedParams.append(key, value);
    });
    query.entries().forEach((_a) => {
      var _b = __read(_a, 2), key = _b[0], value = _b[1];
      if (mergedParams.has(key)) {
        mergedParams.set(key, value);
      } else {
        mergedParams.append(key, value);
      }
    });
    return mergedParams.toString();
  }
  function mergeUrl(baseURL = null, url = null, params = null) {
    let _baseURL = baseURL !== null && baseURL !== void 0 ? baseURL : "";
    let _url = url !== null && url !== void 0 ? url : "";
    let mergedUrl = "";
    if (/^(https?:)?\/\//.test(_url)) {
      mergedUrl = url !== null && url !== void 0 ? url : "";
    } else if (_baseURL != "" && _url != "") {
      mergedUrl = _baseURL.replace(/\/*$/, "") + _url;
    } else if (_baseURL != "") {
      mergedUrl = _baseURL;
    } else if (_url != "") {
      mergedUrl = _url;
    }
    if (params != null) {
      const query = new URLSearchParams(params);
      const index = mergedUrl.indexOf("?");
      if (index != -1) {
        const originPath = mergedUrl.slice(0, index);
        const search = mergedUrl.slice(index);
        mergedUrl = originPath + "?" + mergeSearchParams(search, query);
      } else {
        mergedUrl += "?" + query.toString();
      }
    }
    return mergedUrl;
  }
  function reducerFactory() {
    const handlers = [];
    const use = (onFulfilled, onRejected = null) => {
      handlers.push(new LimeRequestHandler({
        fulfilled: onFulfilled,
        rejected: onRejected
      }));
    };
    const resolve = (data) => {
      return __awaiter(this, void 0, void 0, function* () {
        var e_1, _a;
        let _data = data;
        try {
          for (var handlers_1 = __values(handlers), handlers_1_1 = handlers_1.next(); !handlers_1_1.done; handlers_1_1 = handlers_1.next()) {
            var fulfilled = handlers_1_1.value.fulfilled;
            try {
              _data = yield fulfilled(data);
            } catch (err) {
              const error = new LimeRequestFail({
                source: null,
                errCode: 0,
                errSubject: "lime-request",
                data: null,
                cause: err,
                errMsg: err.message
                //?? '未知错误',
              });
              return Promise.reject(error);
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (handlers_1_1 && !handlers_1_1.done && (_a = handlers_1.return))
              _a.call(handlers_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        return Promise.resolve(_data);
      });
    };
    const reject = (error) => {
      return __awaiter(this, void 0, void 0, function* () {
        var e_2, _a;
        try {
          for (var handlers_2 = __values(handlers), handlers_2_1 = handlers_2.next(); !handlers_2_1.done; handlers_2_1 = handlers_2.next()) {
            var rejected = handlers_2_1.value.rejected;
            try {
              if (rejected != null) {
                const data = yield rejected(error);
                return Promise.resolve(data);
              }
            } catch (newError) {
              error = new LimeRequestFail({
                source: null,
                errCode: 0,
                errSubject: "lime-request",
                data: null,
                cause: newError,
                errMsg: newError.message
              });
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (handlers_2_1 && !handlers_2_1.done && (_a = handlers_2.return))
              _a.call(handlers_2);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
        return Promise.reject(error);
      });
    };
    return new LimeReducerFactoryResult({
      use,
      resolve,
      reject
    });
  }
  function createInterceptors() {
    return new LimeInterceptors({
      request: reducerFactory(),
      response: reducerFactory()
    });
  }
  function isJSON(str) {
    const trimmed = str.trim();
    if (!(trimmed.startsWith("{") || trimmed.startsWith("["))) {
      return false;
    }
    if (!/^[\{\[\}\],:"]/.test(trimmed)) {
      return false;
    }
    try {
      UTS.JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  }
  class LimeResponseImpl {
    /**
     * 需要基础库： `2.10.4`
     *
     * 网络请求过程中一些调试信息，[查看详细说明](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/network.html)
     */
    // profile ?: UniApp.RequestProfile
    constructor(data = null, statusCode, header = null, cookies, config2, errMsg, tempFilePath, apFilePath, filePath, fileContent = null) {
      this.data = data;
      this.statusCode = statusCode;
      this.header = header;
      this.cookies = cookies;
      this.config = config2;
      this.errMsg = errMsg;
      this.tempFilePath = tempFilePath;
      this.apFilePath = apFilePath;
      this.filePath = filePath;
      this.fileContent = fileContent;
    }
  }
  class Request {
    constructor(config2) {
      const defaultRequestConfig = new UTSJSONObject({
        baseURL: ""
      });
      this.defaultConfig = mergeConfig(defaultRequestConfig, config2);
      this.interceptors = createInterceptors();
    }
    request(config2) {
      return new Promise((resolve, reject) => {
        let interceptors = this.interceptors;
        const _config = mergeConfig(this.defaultConfig, config2);
        interceptors.request.resolve(_config).then((config3 = null) => {
          var _a, _b, _c;
          const _d = config3, baseURL = _d.baseURL, params = _d.params, getTask = _d.getTask, url = _d.url;
          const mergedUrl = mergeUrl(baseURL, url, params);
          let task = null;
          const errMsg = `lime-request ${config3.method} ok`;
          switch (config3.method) {
            case "DOWNLOAD":
              task = uni.downloadFile({
                url: mergedUrl,
                header: config3.header,
                filePath: config3.filePath,
                timeout: (_a = config3.timeout) !== null && _a !== void 0 ? _a : 12e4,
                // enableHttp2: config.enableHttp2,
                // enableProfile: config.enableProfile,
                // enableQuic: config.enableQuic,
                // useHighPerformanceMode: config.useHighPerformanceMode,
                success(result) {
                  const tempFilePath = result.tempFilePath, statusCode = result.statusCode;
                  const apFilePath = "";
                  const filePath = "";
                  const fileContent = "";
                  const res = new LimeResponseImpl(
                    "",
                    statusCode,
                    "",
                    //header,
                    [],
                    // cookies,
                    config3,
                    errMsg,
                    tempFilePath,
                    apFilePath,
                    filePath,
                    fileContent
                  );
                  interceptors.response.resolve(res).then(resolve, reject);
                },
                fail(error) {
                  const err = new LimeRequestFail({
                    source: null,
                    errCode: error.errCode,
                    errSubject: "lime-request",
                    data: error.data,
                    cause: error.cause,
                    errMsg: error.errMsg
                  });
                  interceptors.response.reject(err).then((res) => {
                    reject(res);
                  }, reject);
                }
              });
              break;
            case "UPLOAD":
              task = uni.uploadFile({
                url: mergedUrl,
                filePath: config3.filePath,
                name: config3.name,
                files: config3.files,
                header: config3.header,
                formData: config3.formData,
                // enableHttp2: config.enableHttp2,
                // enableProfile: config.enableProfile,
                // enableQuic: config.enableQuic,
                // useHighPerformanceMode: config.useHighPerformanceMode,
                timeout: (_b = config3.timeout) !== null && _b !== void 0 ? _b : 6e4,
                success(result) {
                  const data2 = result.data, statusCode = result.statusCode;
                  const tempFilePath = "";
                  const apFilePath = "";
                  const filePath = "";
                  const fileContent = "";
                  const res = new LimeResponseImpl(
                    data2,
                    statusCode,
                    "",
                    //header,
                    [],
                    // cookies,
                    config3,
                    errMsg,
                    tempFilePath,
                    apFilePath,
                    filePath,
                    fileContent
                  );
                  interceptors.response.resolve(res).then(resolve, reject);
                },
                fail(error) {
                  const err = new LimeRequestFail({
                    source: null,
                    errCode: error.errCode,
                    errSubject: "lime-request",
                    data: error.data,
                    cause: error.cause,
                    errMsg: error.errMsg
                  });
                  interceptors.response.reject(err).then((res) => {
                    reject(res);
                  }, reject);
                }
              });
              break;
            default:
              let data = config3.data;
              if (vue.isRef(data)) {
                data = vue.unref(data);
              }
              if (vue.isReactive(data)) {
                data = new UTSJSONObject(Object.assign({}, vue.toRaw(data)));
              }
              task = uni.request({
                url: mergedUrl,
                data,
                header: config3.header,
                method: config3.method,
                timeout: (_c = config3.timeout) !== null && _c !== void 0 ? _c : 6e4,
                withCredentials: config3.withCredentials,
                firstIpv4: config3.firstIpv4,
                enableChunked: config3.enableChunked,
                success(result) {
                  const _a2 = result, data2 = _a2.data, statusCode = _a2.statusCode, header = _a2.header, cookies = _a2.cookies;
                  const tempFilePath = "";
                  const apFilePath = "";
                  const filePath = "";
                  const fileContent = "";
                  let parsedData = data2;
                  if (typeof data2 == "string") {
                    try {
                      if (isJSON(data2)) {
                        parsedData = UTS.JSON.parse(data2);
                      }
                    } catch (error) {
                    }
                  }
                  const res = new LimeResponseImpl(parsedData, statusCode, header, cookies, config3, errMsg, tempFilePath, apFilePath, filePath, fileContent);
                  interceptors.response.resolve(res).then(resolve, reject);
                },
                fail(error) {
                  const source = new UTSJSONObject({
                    url: mergedUrl,
                    baseURL,
                    path: url,
                    method: config3.method
                  });
                  const err = new LimeRequestFail({
                    errCode: error.errCode,
                    errSubject: "lime-request",
                    data: error.data,
                    cause: error.cause,
                    errMsg: error.errMsg,
                    source
                  });
                  interceptors.response.reject(err).then((res) => {
                    reject(res);
                  }, reject);
                  reject(err);
                }
              });
              break;
          }
          if (getTask != null) {
            getTask(task);
          }
        }).catch(reject);
      });
    }
    get(url, config2 = null) {
      const _config = config2 !== null && config2 !== void 0 ? config2 : new UTSJSONObject({});
      _config.url = url;
      _config.method = "GET";
      return this.request(_config);
    }
    head(url, config2 = null) {
      const _config = config2 !== null && config2 !== void 0 ? config2 : new UTSJSONObject({});
      _config.url = url;
      _config.method = "HEAD";
      return this.request(_config);
    }
    connect(url, config2 = null) {
      const _config = config2 !== null && config2 !== void 0 ? config2 : new UTSJSONObject({});
      _config.url = url;
      _config.method = "CONNECT";
      return this.request(_config);
    }
    trace(url, config2 = null) {
      const _config = config2 !== null && config2 !== void 0 ? config2 : new UTSJSONObject({});
      _config.url = url;
      _config.method = "TRACE";
      return this.request(_config);
    }
    post(url, data = null, config2 = null) {
      const _config = config2 !== null && config2 !== void 0 ? config2 : new UTSJSONObject({});
      _config.url = url;
      _config.data = data;
      _config.method = "POST";
      return this.request(_config);
    }
    put(url, data = null, config2 = null) {
      const _config = config2 !== null && config2 !== void 0 ? config2 : new UTSJSONObject({});
      _config.url = url;
      _config.data = data;
      _config.method = "PUT";
      return this.request(_config);
    }
    delete(url, data = null, config2 = null) {
      const _config = config2 !== null && config2 !== void 0 ? config2 : new UTSJSONObject({});
      _config.url = url;
      _config.data = data;
      _config.method = "DELETE";
      return this.request(_config);
    }
    options(url, data = null, config2 = null) {
      const _config = config2 !== null && config2 !== void 0 ? config2 : new UTSJSONObject({});
      _config.url = url;
      _config.data = data;
      _config.method = "OPTIONS";
      return this.request(_config);
    }
    upload(url, config2 = null) {
      const _config = config2 !== null && config2 !== void 0 ? config2 : new UTSJSONObject({});
      _config.url = url;
      _config.method = "UPLOAD";
      return this.request(_config);
    }
    download(url, config2 = null) {
      const _config = config2 !== null && config2 !== void 0 ? config2 : new UTSJSONObject({});
      _config.url = url;
      _config.method = "DOWNLOAD";
      return this.request(_config);
    }
  }
  let lastRedirectTime = 0;
  function toLoginPage(options = null) {
    var _a, _b;
    const now = Date.now();
    if (now - lastRedirectTime < 1e3) {
      return null;
    }
    lastRedirectTime = now;
    const opts = options !== null && options !== void 0 ? options : new UTSJSONObject({});
    const mode = (_a = opts["mode"]) !== null && _a !== void 0 ? _a : "navigateTo";
    const queryString = (_b = opts["queryString"]) !== null && _b !== void 0 ? _b : "";
    const LOGIN_PAGE2 = "/src/pages/auth/login";
    const url = `${LOGIN_PAGE2}${queryString}`;
    const pages = getCurrentPages();
    if (pages.length > 0) {
      const currentRoute = pages[pages.length - 1].route;
      const currentPath = currentRoute.startsWith("/") ? currentRoute : `/${currentRoute}`;
      if (currentPath === LOGIN_PAGE2) {
        return null;
      }
    }
    if (mode === "navigateTo") {
      uni.navigateTo({ url });
    } else {
      uni.reLaunch({ url });
    }
  }
  const ResultEnum = new UTSJSONObject(
    {
      Success0: 0,
      Success200: 200,
      RequestError: 400,
      Unauthorized: 401,
      Forbidden: 403,
      NotFound: 404,
      MethodNotAllowed: 405,
      RequestTimeout: 408,
      InternalServerError: 500,
      NotImplemented: 501,
      BadGateway: 502,
      ServiceUnavailable: 503,
      GatewayTimeout: 504,
      HttpVersionNotSupported: 505
    }
    /**
     * Content-Type 类型枚举
     * 注意：UTS 中 JSON 是内置全局对象，不能作为对象属性 key，故重命名为 AppJson。
     */
  );
  const ContentTypeEnum = new UTSJSONObject(
    {
      AppJson: "application/json;charset=UTF-8",
      FormUrlEncoded: "application/x-www-form-urlencoded;charset=UTF-8",
      FormData: "multipart/form-data;charset=UTF-8"
    }
    /**
     * 根据状态码，生成对应的错误信息
     * @param status 状态码
     * @returns 错误信息
     */
  );
  function ShowMessage(status) {
    let message2;
    switch (status) {
      case 400:
        message2 = "请求错误(400)";
        break;
      case 401:
        message2 = "未授权，请重新登录(401)";
        break;
      case 403:
        message2 = "拒绝访问(403)";
        break;
      case 404:
        message2 = "请求出错(404)";
        break;
      case 408:
        message2 = "请求超时(408)";
        break;
      case 500:
        message2 = "服务器错误(500)";
        break;
      case 501:
        message2 = "服务未实现(501)";
        break;
      case 502:
        message2 = "网络错误(502)";
        break;
      case 503:
        message2 = "服务不可用(503)";
        break;
      case 504:
        message2 = "网络超时(504)";
        break;
      case 505:
        message2 = "HTTP版本不受支持(505)";
        break;
      default:
        message2 = `连接出错(${status})!`;
    }
    return `${message2}，请检查网络或联系管理员！`;
  }
  const defaultUrl = "https://ukw0y1.laf.run";
  const secondaryUrl = "https://ukw0y1.laf.run";
  class ApiDomainConfig extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            DEFAULT: { type: String, optional: false },
            SECONDARY: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = ApiDomainConfig.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.DEFAULT = this.__props__.DEFAULT;
      this.SECONDARY = this.__props__.SECONDARY;
      delete this.__props__;
    }
  }
  const API_DOMAINS = new ApiDomainConfig(
    {
      DEFAULT: defaultUrl,
      SECONDARY: secondaryUrl
    }
    // ==========================================
    // 创建底层 lime-request 实例
    // ==========================================
  );
  const requestInstance = new Request(new LimeRequestConfig({
    params: null,
    getTask: null,
    data: null,
    extra: null,
    url: null,
    method: null,
    dataType: null,
    responseType: null,
    sslVerify: null,
    withCredentials: null,
    firstIpv4: null,
    enableHttp2: null,
    enableQuic: null,
    enableCache: null,
    enableHttpDNS: null,
    httpDNSServiceId: null,
    enableChunked: null,
    forceCellularNetwork: null,
    enableCookie: null,
    cloudCache: null,
    defer: null,
    files: null,
    fileType: null,
    filePath: null,
    name: null,
    formData: null,
    baseURL: API_DOMAINS.DEFAULT,
    timeout: 5e3,
    header: new UTSJSONObject({
      "Content-Type": ContentTypeEnum.AppJson,
      "Accept": "application/json, text/plain, */*"
    })
  }));
  requestInstance.interceptors.request.use((config2) => {
    if (config2.header === null) {
      config2.header = new UTSJSONObject({});
    }
    const header = config2.header;
    if (header["Content-Type"] == null) {
      header["Content-Type"] = ContentTypeEnum.AppJson;
    }
    if (header["Accept"] == null) {
      header["Accept"] = "application/json, text/plain, */*";
    }
    const extra = config2.extra;
    let ignoreAuth = false;
    if (extra !== null) {
      const authVal = extra.getBoolean("ignoreAuth");
      if (authVal == true) {
        ignoreAuth = true;
      }
    }
    if (!ignoreAuth) {
      const tokenStore = useTokenStore();
      const token = tokenStore.getToken();
      if (token === "") {
        throw new Error("[请求错误]：未登录");
      }
      header["token"] = token;
    }
    if (extra !== null) {
      const domain = extra["domain"];
      if (domain != null) {
        config2.baseURL = domain;
      }
    }
    return config2;
  }, (error) => {
    return Promise.reject(error);
  });
  requestInstance.interceptors.response.use((response) => {
    const config2 = response.config;
    const extra = config2.extra;
    const method = config2.method;
    if (method === "UPLOAD" || method === "DOWNLOAD") {
      return response;
    }
    const statusCode = response.statusCode;
    if (statusCode != 200) {
      const errorMessage = ShowMessage(statusCode);
      uni.__log__("error", "at src/http/request.uts:108", "errorMessage===>", errorMessage);
      uni.showToast({ title: errorMessage, icon: "error" });
      if (statusCode == 401) {
        const tokenStore = useTokenStore();
        tokenStore.clearToken();
        toLoginPage(new UTSJSONObject({ mode: "reLaunch" }));
      }
      throw new Error(`${errorMessage}：${response.errMsg}`);
    }
    const rawData = response.data;
    if (rawData === null) {
      throw new Error("返回的响应数据为空");
    }
    const resultObj = UTS.JSON.parseObject(UTS.JSON.stringify(rawData));
    if (resultObj !== null) {
      const code = resultObj.getNumber("code");
      const msgByKey = resultObj["message"];
      const msgByMsg = resultObj["msg"];
      const message2 = msgByKey != null ? msgByKey : msgByMsg != null ? msgByMsg : "未知错误";
      if (code !== null) {
        const codeVal = code;
        if (codeVal !== ResultEnum.Success0 && codeVal !== ResultEnum.Success200) {
          let toastEnabled = true;
          if (extra !== null) {
            const toastVal = extra.getBoolean("toast");
            if (toastVal == false) {
              toastEnabled = false;
            }
          }
          if (toastEnabled) {
            uni.showToast({ title: message2, icon: "none" });
          }
          if (codeVal === ResultEnum.Unauthorized) {
            const tokenStore = useTokenStore();
            tokenStore.clearToken();
            toLoginPage(new UTSJSONObject({ mode: "reLaunch" }));
          }
          throw new Error(`请求错误[${codeVal}]：${message2}`);
        }
      }
    }
    return response;
  }, (error) => {
    uni.__log__("error", "at src/http/request.uts:156", "request error ===>", error);
    uni.showToast({ title: "网络错误，请稍后再试", icon: "none" });
    return Promise.reject(error);
  });
  class HttpClient {
    request(config2) {
      return requestInstance.request(config2).then((res) => {
        const rawData = res.data;
        if (rawData === null) {
          throw new Error("响应数据为空");
        }
        const obj = UTS.JSON.parseObject(UTS.JSON.stringify(rawData));
        if (obj !== null) {
          const code = obj.getNumber("code");
          if (code !== null) {
            const innerData = obj.get("data");
            if (innerData !== null) {
              const innerStr = UTS.JSON.stringify(innerData);
              const parsedData = UTS.JSON.parse(innerStr);
              if (parsedData !== null) {
                return parsedData;
              } else {
                throw new Error("响应 data 字段无法解析为指定的类型，请检查数据结构是否匹配。数据：" + innerStr);
              }
            }
            throw new Error("响应结构包含 code，但 data 字段为空");
          }
        }
        const rawStr = UTS.JSON.stringify(rawData);
        const parsedRaw = UTS.JSON.parse(rawStr);
        if (parsedRaw !== null) {
          return parsedRaw;
        }
        throw new Error("原始响应数据无法解析为指定类型。原始数据：" + rawStr);
      });
    }
    get(url, config2 = null) {
      const _config = config2 !== null && config2 !== void 0 ? config2 : new UTSJSONObject({});
      _config.url = url;
      _config.method = "GET";
      return this.request(_config);
    }
    post(url, data = null, config2 = null) {
      const _config = config2 !== null && config2 !== void 0 ? config2 : new UTSJSONObject({});
      _config.url = url;
      _config.data = data;
      _config.method = "POST";
      return this.request(_config);
    }
    put(url, data = null, config2 = null) {
      const _config = config2 !== null && config2 !== void 0 ? config2 : new UTSJSONObject({});
      _config.url = url;
      _config.data = data;
      _config.method = "PUT";
      return this.request(_config);
    }
    delete(url, data = null, config2 = null) {
      const _config = config2 !== null && config2 !== void 0 ? config2 : new UTSJSONObject({});
      _config.url = url;
      _config.data = data;
      _config.method = "DELETE";
      return this.request(_config);
    }
  }
  const http = new HttpClient();
  class IFoo extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            id: { type: "Any", optional: false },
            name: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = IFoo.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.id = this.__props__.id;
      this.name = this.__props__.name;
      delete this.__props__;
    }
  }
  class IFooList extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            list: { type: UTS.UTSType.withGenerics(Array, [IFoo]), optional: false },
            total: { type: Number, optional: false },
            page: { type: Number, optional: false },
            pageSize: { type: Number, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = IFooList.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.list = this.__props__.list;
      this.total = this.__props__.total;
      this.page = this.__props__.page;
      this.pageSize = this.__props__.pageSize;
      delete this.__props__;
    }
  }
  const MOCK_FOO_LIST = [
    new IFoo({ id: 1, name: "unix" }),
    new IFoo({ id: 2, name: "UnibestX" }),
    new IFoo({ id: 3, name: "lime-request" })
  ];
  function getFooList(params = null) {
    return Promise.resolve(MOCK_FOO_LIST);
  }
  function foo() {
    const res = http.get("/foo", new LimeRequestConfig({
      getTask: null,
      data: null,
      url: null,
      header: null,
      method: null,
      timeout: null,
      dataType: null,
      responseType: null,
      sslVerify: null,
      withCredentials: null,
      firstIpv4: null,
      enableHttp2: null,
      enableQuic: null,
      enableCache: null,
      enableHttpDNS: null,
      httpDNSServiceId: null,
      enableChunked: null,
      forceCellularNetwork: null,
      enableCookie: null,
      cloudCache: null,
      defer: null,
      files: null,
      fileType: null,
      filePath: null,
      name: null,
      formData: null,
      params: new UTSJSONObject({
        name: "unix",
        page: 1,
        pageSize: 10
      }),
      baseURL: API_DOMAINS.SECONDARY,
      extra: new UTSJSONObject({
        ignoreAuth: true
        // 此接口不需要鉴权
      })
    }));
    uni.__log__("log", "at src/api/foo.uts:66", res, "res112233");
    return res;
  }
  const __className$1t = "GenSrcPagesBasicComponentsHttpDemoCard";
  const _sfc_main$1u = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1t,
    __filename: "src/pages/basic/components/HttpDemoCard.uvue",
    __name: "HttpDemoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsHttpDemoCardSharedData", sharedDataClassId: 0 })));
      const mockList = vue.ref([]);
      const loading = vue.ref(false);
      const requestStatus = vue.ref("idle");
      const responseData = vue.ref(null);
      const errorMsg = vue.ref("");
      const statusText = vue.computed(() => {
        switch (requestStatus.value) {
          case "loading":
            return "请求中";
          case "success":
            return "请求成功";
          case "error":
            return "请求失败";
          default:
            return "待请求";
        }
      });
      const statusColor = vue.computed(() => {
        switch (requestStatus.value) {
          case "loading":
            return "#d97706";
          case "success":
            return "#059669";
          case "error":
            return "#dc2626";
          default:
            return "#94a3b8";
        }
      });
      const statusBgColor = vue.computed(() => {
        switch (requestStatus.value) {
          case "loading":
            return "#fef9c3";
          case "success":
            return "#d1fae5";
          case "error":
            return "#fee2e2";
          default:
            return "#f1f5f9";
        }
      });
      const hasResponseData = vue.computed(() => {
        return responseData.value != null;
      });
      const hasErrorMsg = vue.computed(() => {
        return errorMsg.value.length > 0;
      });
      const responseText = vue.computed(() => {
        const data = responseData.value;
        if (data == null)
          return "";
        return `id: ${data.id}, name: ${data.name}`;
      });
      function loadMockData() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const list = yield getFooList();
            mockList.value = list;
          } catch (err) {
            uni.__log__("error", "at src/pages/basic/components/HttpDemoCard.uvue:135", "loadMockData error:", err);
          }
        });
      }
      function fetchRealApi() {
        return __awaiter(this, void 0, void 0, function* () {
          loading.value = true;
          requestStatus.value = "loading";
          responseData.value = null;
          errorMsg.value = "";
          try {
            const res = yield foo();
            responseData.value = res;
            requestStatus.value = "success";
          } catch (err) {
            uni.__log__("log", "at src/pages/basic/components/HttpDemoCard.uvue:155", err, "err");
            requestStatus.value = "error";
            let errStr = "";
            if (err !== null) {
              errStr = UTS.JSON.stringify(err);
            }
            errorMsg.value = errStr.length > 0 ? errStr : "请求失败";
          }
          loading.value = false;
        });
      }
      vue.onMounted(() => {
        loadMockData();
      });
      return () => {
        "raw js";
        const n30 = vue.createSharedDataComponent(
          Card,
          "51bfa7fe",
          { title: "HTTP 请求 Demo" },
          {
            "default": () => {
              vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 1, vue.createSharedDataVFor(__sharedDataScope, () => {
                return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$1t}SharedData`, sharedDataClassId: 1 });
              })), () => {
                return mockList.value;
              }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                vue.renderSharedDataEffect(() => {
                  const _item = _for_item0.value;
                  vue.setSharedData(__sharedData_VFor0, 1, vue.toDisplayString(_item.id));
                  vue.setSharedData(__sharedData_VFor0, 2, vue.toDisplayString(_item.name));
                });
                return null;
              }, (__sharedData_VFor0, item, index) => {
                return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(index));
              });
              vue.renderSharedDataEffect(() => {
                vue.setSharedDataStyle(__sharedData, 8, { paddingLeft: "8px", paddingRight: "8px", paddingTop: "2px", paddingBottom: "2px", borderRadius: 10, backgroundColor: statusBgColor.value });
                vue.setSharedDataStyle(__sharedData, 9, { fontSize: 12, color: statusColor.value });
                vue.setSharedData(__sharedData, 10, vue.toDisplayString(statusText.value));
              });
              vue.createSharedDataIf(() => {
                return vue.setSharedData(__sharedData, 2, vue.toSharedDataBoolean(hasResponseData.value));
              }, () => {
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedData(__sharedData, 3, vue.toDisplayString(responseText.value));
                });
              });
              vue.createSharedDataIf(() => {
                return vue.setSharedData(__sharedData, 4, vue.toSharedDataBoolean(hasErrorMsg.value));
              }, () => {
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedData(__sharedData, 5, vue.toDisplayString(errorMsg.value));
                });
              });
              vue.setSharedDataEvent(__sharedData, 6, loadMockData);
              vue.setSharedDataEvent(__sharedData, 7, fetchRealApi);
              vue.renderSharedDataEffect(() => {
                return vue.setSharedData(__sharedData, 11, vue.toDisplayString(loading.value ? "请求中..." : "真实 API 请求"));
              });
            }
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n30.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1v = {};
  const HttpDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$1u, [["styles", [_style_0$1v]]]);
  const __className$1s = "GenSrcPagesBasicComponentsEchartsDemoCard";
  const gridKey = "grid";
  const _sfc_main$1t = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1s,
    __filename: "src/pages/basic/components/EchartsDemoCard.uvue",
    __name: "EchartsDemoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsEchartsDemoCardSharedData", sharedDataClassId: 0 })));
      const echartTitle = vue.computed(() => {
        return $t("basic.echartTitle");
      });
      const echartLineText = vue.computed(() => {
        return $t("basic.echartLine");
      });
      const echartBarText = vue.computed(() => {
        return $t("basic.echartBar");
      });
      const echartPieText = vue.computed(() => {
        return $t("basic.echartPie");
      });
      const echartRef = vue.ref(null);
      const currentType = vue.ref("line");
      const lineOption = new UTSJSONObject({
        title: new UTSJSONObject({
          text: "访问趋势 (折线图)",
          textStyle: new UTSJSONObject({
            fontSize: 12,
            color: "#64748b"
          })
        }),
        xAxis: new UTSJSONObject({
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLine: new UTSJSONObject({
            lineStyle: new UTSJSONObject({
              color: "#cbd5e1"
            })
          }),
          axisLabel: new UTSJSONObject({
            color: "#64748b"
          })
        }),
        yAxis: new UTSJSONObject({
          type: "value",
          axisLine: new UTSJSONObject({
            show: false
          }),
          splitLine: new UTSJSONObject({
            lineStyle: new UTSJSONObject({
              color: "#f1f5f9"
            })
          }),
          axisLabel: new UTSJSONObject({
            color: "#64748b"
          })
        }),
        [gridKey]: new UTSJSONObject({
          left: "12%",
          right: "5%",
          top: "18%",
          bottom: "12%"
        }),
        series: [new UTSJSONObject({
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "line",
          smooth: true,
          color: "#3b82f6",
          areaStyle: new UTSJSONObject({
            color: new UTSJSONObject({
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                new UTSJSONObject({ offset: 0, color: "rgba(59, 130, 246, 0.4)" }),
                new UTSJSONObject({ offset: 1, color: "rgba(59, 130, 246, 0)" })
              ]
            })
          })
        })]
      });
      const barOption = new UTSJSONObject({
        title: new UTSJSONObject({
          text: "访问分布 (柱状图)",
          textStyle: new UTSJSONObject({
            fontSize: 12,
            color: "#64748b"
          })
        }),
        xAxis: new UTSJSONObject({
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLine: new UTSJSONObject({
            lineStyle: new UTSJSONObject({
              color: "#cbd5e1"
            })
          }),
          axisLabel: new UTSJSONObject({
            color: "#64748b"
          })
        }),
        yAxis: new UTSJSONObject({
          type: "value",
          axisLine: new UTSJSONObject({
            show: false
          }),
          splitLine: new UTSJSONObject({
            lineStyle: new UTSJSONObject({
              color: "#f1f5f9"
            })
          }),
          axisLabel: new UTSJSONObject({
            color: "#64748b"
          })
        }),
        [gridKey]: new UTSJSONObject({
          left: "12%",
          right: "5%",
          top: "18%",
          bottom: "12%"
        }),
        series: [new UTSJSONObject({
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
          color: "#10b981"
        })]
      });
      const pieOption = new UTSJSONObject({
        title: new UTSJSONObject({
          text: "访问来源 (饼图)",
          textStyle: new UTSJSONObject({
            fontSize: 12,
            color: "#64748b"
          })
        }),
        series: [new UTSJSONObject({
          name: "访问来源",
          type: "pie",
          radius: "52%",
          center: ["50%", "52%"],
          label: new UTSJSONObject({
            fontSize: 11,
            color: "#64748b"
          }),
          data: [
            new UTSJSONObject({ value: 1048, name: "搜索引擎", itemStyle: new UTSJSONObject({ color: "#3b82f6" }) }),
            new UTSJSONObject({ value: 735, name: "直接访问", itemStyle: new UTSJSONObject({ color: "#10b981" }) }),
            new UTSJSONObject({ value: 580, name: "邮件营销", itemStyle: new UTSJSONObject({ color: "#f59e0b" }) }),
            new UTSJSONObject({ value: 484, name: "联盟广告", itemStyle: new UTSJSONObject({ color: "#8b5cf6" }) })
          ]
        })]
      });
      function initEchart() {
        if (echartRef.value != null) {
          const chart = echartRef.value;
          chart.$callMethod("init", lineOption);
        }
      }
      function changeToLine() {
        currentType.value = "line";
        if (echartRef.value != null) {
          const chart = echartRef.value;
          chart.$callMethod("setOption", lineOption);
        }
      }
      function changeToBar() {
        currentType.value = "bar";
        if (echartRef.value != null) {
          const chart = echartRef.value;
          chart.$callMethod("setOption", barOption);
        }
      }
      function changeToPie() {
        currentType.value = "pie";
        if (echartRef.value != null) {
          const chart = echartRef.value;
          chart.$callMethod("setOption", pieOption);
        }
      }
      const windowWidth = vue.computed(() => {
        var _a, _b;
        return (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.windowWidth) !== null && _b !== void 0 ? _b : 0;
      });
      vue.watch(windowWidth, () => {
        setTimeout(() => {
          if (echartRef.value != null) {
            const chart = echartRef.value;
            chart.$callMethod("resize");
          }
        }, 100);
      });
      return () => {
        "raw js";
        const _setTemplateRef = vue.createSharedDataTemplateRefSetter();
        const _component_e_chart = vue.resolveComponent("e-chart");
        const n12 = vue.createSharedDataComponent(
          Card,
          "4e294b1c",
          { title: () => {
            return echartTitle.value;
          } },
          {
            "default": vue.withSharedDataVaporCtx(() => {
              const n0 = vue.createSharedDataComponentWithFallback(_component_e_chart, "77001919", {
                height: "280px",
                class: "w-full h-full",
                onReady: () => {
                  return initEchart;
                }
              });
              vue.setSharedData(__sharedData, 1, n0 == null ? void 0 : n0.sharedData);
              _setTemplateRef(n0, echartRef, null, "echartRef");
              vue.setSharedDataEvent(__sharedData, 2, changeToLine);
              vue.setSharedDataEvent(__sharedData, 3, changeToBar);
              vue.setSharedDataEvent(__sharedData, 4, changeToPie);
              vue.renderSharedDataEffect(() => {
                const _currentType = currentType.value;
                vue.setSharedDataClass(__sharedData, 5, ["w-full h-36px rounded-8px flex flex-row items-center justify-center", _currentType !== "line" ? "bg-__e0edff_" : "bg-__3b82f6_"]);
                vue.setSharedDataClass(__sharedData, 6, ["text-12px font-bold", _currentType !== "line" ? "text-__3b82f6_" : "text-__ffffff_"]);
                vue.setSharedData(__sharedData, 7, vue.toDisplayString(echartLineText.value));
                vue.setSharedDataClass(__sharedData, 8, ["w-full h-36px rounded-8px flex flex-row items-center justify-center", _currentType !== "bar" ? "bg-__d1fae5_" : "bg-__10b981_"]);
                vue.setSharedDataClass(__sharedData, 9, ["text-12px font-bold", _currentType !== "bar" ? "text-__10b981_" : "text-__ffffff_"]);
                vue.setSharedData(__sharedData, 10, vue.toDisplayString(echartBarText.value));
                vue.setSharedDataClass(__sharedData, 11, ["w-full h-36px rounded-8px flex flex-row items-center justify-center", _currentType !== "pie" ? "bg-__fef3c7_" : "bg-__f59e0b_"]);
                vue.setSharedDataClass(__sharedData, 12, ["text-12px font-bold", _currentType !== "pie" ? "text-__f59e0b_" : "text-__ffffff_"]);
                vue.setSharedData(__sharedData, 13, vue.toDisplayString(echartPieText.value));
              });
            })
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n12.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1u = {};
  const EchartsDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$1t, [["styles", [_style_0$1u]]]);
  class LimeSignatureToFileSuccess extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            tempFilePath: { type: String, optional: false },
            isEmpty: { type: Boolean, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = LimeSignatureToFileSuccess.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.tempFilePath = this.__props__.tempFilePath;
      this.isEmpty = this.__props__.isEmpty;
      delete this.__props__;
    }
  }
  class LimeSignatureToTempFilePathOptions extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            success: { type: "Unknown", optional: true },
            fail: { type: "Unknown", optional: true },
            complete: { type: "Unknown", optional: true },
            format: { type: String, optional: true }
          };
        }
      };
    }
    constructor(options, metadata = LimeSignatureToTempFilePathOptions.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.success = this.__props__.success;
      this.fail = this.__props__.fail;
      this.complete = this.__props__.complete;
      this.format = this.__props__.format;
      delete this.__props__;
    }
  }
  class LimeSignatureOptions extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            penColor: { type: String, optional: false },
            openSmooth: { type: Boolean, optional: false },
            disableScroll: { type: Boolean, optional: false },
            disabled: { type: Boolean, optional: false },
            penSize: { type: Number, optional: false },
            minLineWidth: { type: Number, optional: false },
            maxLineWidth: { type: Number, optional: false },
            minSpeed: { type: Number, optional: false },
            maxWidthDiffRate: { type: Number, optional: false },
            maxHistoryLength: { type: Number, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = LimeSignatureOptions.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.penColor = this.__props__.penColor;
      this.openSmooth = this.__props__.openSmooth;
      this.disableScroll = this.__props__.disableScroll;
      this.disabled = this.__props__.disabled;
      this.penSize = this.__props__.penSize;
      this.minLineWidth = this.__props__.minLineWidth;
      this.maxLineWidth = this.__props__.maxLineWidth;
      this.minSpeed = this.__props__.minSpeed;
      this.maxWidthDiffRate = this.__props__.maxWidthDiffRate;
      this.maxHistoryLength = this.__props__.maxHistoryLength;
      delete this.__props__;
    }
  }
  class LimeSignaturePoint extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            x: { type: Number, optional: false },
            y: { type: Number, optional: false },
            c: { type: String, optional: true },
            w: { type: Number, optional: true }
          };
        }
      };
    }
    constructor(options, metadata = LimeSignaturePoint.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.x = this.__props__.x;
      this.y = this.__props__.y;
      this.c = this.__props__.c;
      this.w = this.__props__.w;
      delete this.__props__;
    }
  }
  const __className$1r = "GenSrcPagesBasicComponentsSignatureCard";
  const _sfc_main$1s = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1r,
    __filename: "src/pages/basic/components/SignatureCard.uvue",
    __name: "SignatureCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsSignatureCardSharedData", sharedDataClassId: 0 })));
      let sigInstance = null;
      function onSigRef(el = null) {
        sigInstance = el;
      }
      const penColor = vue.ref("red");
      const penSize = vue.ref(4);
      const openSmooth = vue.ref(true);
      const signUrl = vue.ref("");
      const colorList = ["#ef4444", "#000000", "#3b82f6", "#10b981", "#f59e0b"];
      const penSizeOptions = [1, 3, 5, 8, 12];
      function onAction(type) {
        const el = sigInstance;
        if (el == null) {
          uni.showToast({ title: "签名组件未就绪", icon: "none" });
          return null;
        }
        if (type === "clear") {
          el.clear();
          signUrl.value = "";
        } else if (type === "undo") {
          el.undo();
        } else if (type === "redo") {
          el.redo();
        } else if (type === "save") {
          el.canvasToTempFilePath(new LimeSignatureToTempFilePathOptions({
            complete: null,
            format: null,
            success: (res) => {
              if (res.isEmpty) {
                uni.showToast({ title: "请先签名", icon: "none" });
                return null;
              }
              signUrl.value = res.tempFilePath;
              uni.showToast({ title: "签名保存成功", icon: "success" });
            },
            fail: (_err = null) => {
              uni.showToast({ title: "保存失败", icon: "error" });
            }
          }));
        }
      }
      return () => {
        "raw js";
        const _setTemplateRef = vue.createSharedDataTemplateRefSetter();
        const _component_l_signature = vue.resolveComponent("l-signature");
        const n34 = vue.createSharedDataComponent(
          Card,
          "86f131d2",
          { title: "签名板 lime-signature" },
          {
            "default": vue.withSharedDataVaporCtx(() => {
              const n0 = vue.createSharedDataComponentWithFallback(_component_l_signature, "8f6c008e", {
                "pen-color": () => {
                  return penColor.value;
                },
                "pen-size": () => {
                  return penSize.value;
                },
                "open-smooth": () => {
                  return openSmooth.value;
                },
                "disable-scroll": "",
                "background-color": "#ffffff"
              });
              vue.setSharedData(__sharedData, 3, n0 == null ? void 0 : n0.sharedData);
              vue.setSharedDataEvent(__sharedData, 6, () => {
                return onAction("save");
              });
              vue.setSharedDataEvent(__sharedData, 7, () => {
                return onAction("undo");
              });
              vue.setSharedDataEvent(__sharedData, 8, () => {
                return onAction("redo");
              });
              vue.setSharedDataEvent(__sharedData, 9, () => {
                return onAction("clear");
              });
              vue.renderSharedDataEffect(() => {
                return _setTemplateRef(n0, onSigRef);
              });
              vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 4, vue.createSharedDataVFor(__sharedDataScope, () => {
                return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$1r}SharedData`, sharedDataClassId: 1 });
              })), () => {
                return colorList;
              }, (__sharedData_VFor0, _for_item0) => {
                vue.setSharedDataEvent(__sharedData_VFor0, 1, () => {
                  return penColor.value = _for_item0.value;
                });
                vue.renderSharedDataEffect(() => {
                  const _clr = _for_item0.value;
                  vue.setSharedDataStyle(__sharedData_VFor0, 2, {
                    backgroundColor: _clr,
                    borderColor: penColor.value === _clr ? "#1e293b" : "transparent"
                  });
                });
                return null;
              }, (__sharedData_VFor0, clr) => {
                return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(clr));
              }, 1);
              vue.renderSharedDataEffect(() => {
                return vue.setSharedData(__sharedData, 10, vue.toDisplayString(penSize.value));
              });
              const _selector23_0 = vue.createSharedDataSelector(() => {
                return penSize.value;
              });
              const _selector23_1 = vue.createSharedDataSelector(() => {
                return penSize.value;
              });
              const n23 = vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 5, vue.createSharedDataVFor(__sharedDataScope, () => {
                return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$1r}SharedData`, sharedDataClassId: 2 });
              })), () => {
                return penSizeOptions;
              }, (__sharedData_VFor1, _for_item1, _for_key1) => {
                vue.setSharedDataEvent(__sharedData_VFor1, 1, () => {
                  return penSize.value = _for_item1.value;
                });
                vue.renderSharedDataEffect(() => {
                  vue.setSharedDataClass(__sharedData_VFor1, 2, ["flex-1 h-32px rounded-6px flex flex-row items-center justify-center", _for_key1.value < penSizeOptions.length - 1 ? "mr-6px" : ""]);
                  vue.setSharedData(__sharedData_VFor1, 5, vue.toDisplayString(_for_item1.value));
                });
                _selector23_0(_for_item1.value, () => {
                  vue.setSharedDataStyle(__sharedData_VFor1, 3, { backgroundColor: penSize.value === _for_item1.value ? "#3b82f6" : "#e2e8f0" });
                });
                _selector23_1(_for_item1.value, () => {
                  vue.setSharedDataStyle(__sharedData_VFor1, 4, { color: penSize.value === _for_item1.value ? "#ffffff" : "#475569" });
                });
                return null;
              }, (__sharedData_VFor1, sz, _j) => {
                return vue.setSharedData(__sharedData_VFor1, 0, vue.toDisplayString(sz));
              }, 1);
              n23.onReset(_selector23_0.reset);
              n23.onReset(_selector23_1.reset);
              vue.createSharedDataIf(() => {
                return vue.setSharedData(__sharedData, 1, vue.toSharedDataBoolean(signUrl.value !== ""));
              }, () => {
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedDataAttr(__sharedData, 2, vue.toSharedDataString(signUrl.value));
                });
              }, null, 129);
            })
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n34.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1t = {};
  const SignatureCard = /* @__PURE__ */ _export_sfc(_sfc_main$1s, [["styles", [_style_0$1t]]]);
  function uniq(array2) {
    let index = -1;
    const length = array2.length;
    const result = [];
    while (++index < length) {
      const value = array2[index];
      if (result.indexOf(value) < 0) {
        result.push(value);
      }
    }
    return result;
  }
  function chunk(array2, size) {
    const length = array2 ? array2.length : 0;
    if (length == 0 || size < 1) {
      return [];
    }
    let index = 0;
    const step = size > 0 ? size : 1;
    const result = [];
    while (index < length) {
      const nextIndex = index + step;
      result.push(array2.slice(index, nextIndex));
      index = nextIndex;
    }
    return result;
  }
  function shuffle(array2) {
    const length = array2 ? array2.length : 0;
    if (length == 0) {
      return [];
    }
    let index = -1;
    const lastIndex = length - 1;
    const result = array2.slice();
    while (++index < length) {
      const rand = Math.floor(index + Math.random() * (lastIndex - index + 1));
      const value = result[rand];
      result[rand] = result[index];
      result[index] = value;
    }
    return result;
  }
  function get(object = null, path, defaultValue = null) {
    if (object == null) {
      return defaultValue;
    }
    const pathKeys = path.split(".");
    let index = 0;
    const length = pathKeys.length;
    let curr = object;
    while (curr != null && index < length) {
      const key = pathKeys[index++];
      if (typeof curr == "object") {
        const jsonObj = curr;
        curr = jsonObj[key];
      } else {
        curr = null;
      }
    }
    return index == length && curr != null ? curr : defaultValue;
  }
  function cloneDeep(value = null) {
    if (value == null || typeof value != "object") {
      return value;
    }
    if (Array.isArray(value)) {
      const arr = value;
      const copy = [];
      for (let i = 0; i < arr.length; i++) {
        const item = cloneDeep(arr[i]);
        if (item != null) {
          copy.push(item);
        }
      }
      return copy;
    }
    const obj = value;
    const res = new UTSJSONObject({});
    const keys = UTSJSONObject.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      res[k] = cloneDeep(obj[k]);
    }
    return res;
  }
  function camelCase(string) {
    if (string == "")
      return "";
    const words = string.replace(/[-_]+/g, " ").trim().split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.length > 0) {
        if (result.length == 0) {
          result += word.toLowerCase();
        } else {
          result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      }
    }
    return result;
  }
  function kebabCase(string) {
    if (string == "")
      return "";
    const words = string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/[-_\s]+/g, "-").split("-");
    const result = [];
    for (let i = 0; i < words.length; i++) {
      const w = words[i];
      if (w.length > 0) {
        result.push(w.toLowerCase());
      }
    }
    return result.join("-");
  }
  function capitalize(string) {
    if (string == "")
      return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  function debounce(func = null, wait) {
    let timerId = 0;
    function timerExpired() {
      timerId = 0;
      const fn = func;
      fn();
    }
    return function() {
      if (timerId != 0) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        timerExpired();
      }, wait);
    };
  }
  function random(lower = 0, upper = 1) {
    const min = Math.min(lower, upper);
    const max = Math.max(lower, upper);
    return Math.floor(min + Math.random() * (max - min + 1));
  }
  const __className$1q = "GenSrcPagesBasicComponentsLodashDemoCard";
  const _sfc_main$1r = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1q,
    __filename: "src/pages/basic/components/LodashDemoCard.uvue",
    __name: "LodashDemoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsLodashDemoCardSharedData", sharedDataClassId: 0 })));
      const rawArray = vue.ref([1, 2, 2, 3, 4, 4, 5, 6, 7, 8]);
      const uniqArray = vue.computed(() => {
        return uniq(rawArray.value);
      });
      const chunkedArray = vue.computed(() => {
        const result = chunk(uniqArray.value, 3);
        return UTS.JSON.stringify(result);
      });
      function handleShuffle() {
        rawArray.value = shuffle(rawArray.value);
      }
      const rawObj = new UTSJSONObject(
        {
          user: new UTSJSONObject({
            info: new UTSJSONObject({
              name: "UniAppX Developer",
              age: 25
            })
          })
        }
        // 使用 get 链式安全取值 (避免空指针/未定义路径崩溃)
      );
      const getNameResult = vue.computed(() => {
        return get(rawObj, "user.info.name", "未找到");
      });
      const getFallbackResult = vue.computed(() => {
        return get(rawObj, "user.invalid.path", "兜底结果: 未查找到路径");
      });
      const clonedObj = vue.ref(cloneDeep(rawObj));
      const rawObjAge = vue.ref(get(rawObj, "user.info.age", 0));
      const clonedObjAge = vue.computed(() => {
        return get(clonedObj.value, "user.info.age", 0);
      });
      function mutateClonedObj() {
        const user = clonedObj.value["user"];
        const info = user["info"];
        const currentAge = info["age"] + 1;
        info["age"] = currentAge;
      }
      const inputText = vue.ref("hello_world lodash-demo-test");
      const camelCaseResult = vue.computed(() => {
        return camelCase(inputText.value);
      });
      const kebabCaseResult = vue.computed(() => {
        return kebabCase(inputText.value);
      });
      const capitalizeResult = vue.computed(() => {
        return capitalize(inputText.value);
      });
      const debouncedCount = vue.ref(0);
      const randomValue = vue.ref(random(1, 100));
      function incrementCount() {
        debouncedCount.value += 1;
      }
      const debouncedIncrement = debounce(incrementCount, 400);
      function handleDebounceClick() {
        debouncedIncrement();
      }
      function generateRandom() {
        randomValue.value = random(1, 100);
      }
      return () => {
        "raw js";
        const _component_input = vue.resolveComponent("input");
        const n60 = vue.createSharedDataComponent(
          Card,
          "6b0acc4b",
          { title: "Lodash 工具库 (iRainna-lodash)" },
          {
            "default": vue.withSharedDataVaporCtx(() => {
              vue.setSharedDataEvent(__sharedData, 2, handleShuffle);
              vue.setSharedDataEvent(__sharedData, 3, mutateClonedObj);
              vue.renderSharedDataEffect(() => {
                vue.setSharedData(__sharedData, 6, vue.toDisplayString(JSON.stringify(rawArray.value)));
                vue.setSharedData(__sharedData, 7, vue.toDisplayString(JSON.stringify(uniqArray.value)));
                vue.setSharedData(__sharedData, 8, vue.toDisplayString(chunkedArray.value));
                vue.setSharedData(__sharedData, 9, vue.toDisplayString(getNameResult.value));
                vue.setSharedData(__sharedData, 10, vue.toDisplayString(getFallbackResult.value));
                vue.setSharedData(__sharedData, 11, vue.toDisplayString(rawObjAge.value));
                vue.setSharedData(__sharedData, 12, vue.toDisplayString(clonedObjAge.value));
              });
              const n33 = vue.createSharedDataComponentWithFallback(_component_input, "c4d6d3fa", {
                value: () => {
                  return inputText.value;
                },
                "onUpdate:value": () => {
                  return (_value) => {
                    return inputText.value = _value;
                  };
                },
                class: "w-full h-36px px-12px rounded-6px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__1e293b_",
                placeholder: "请输入待转换文本"
              });
              vue.setSharedData(__sharedData, 1, n33 == null ? void 0 : n33.sharedData);
              vue.setSharedDataEvent(__sharedData, 4, handleDebounceClick);
              vue.setSharedDataEvent(__sharedData, 5, generateRandom);
              vue.renderSharedDataEffect(() => {
                vue.setSharedData(__sharedData, 13, vue.toDisplayString(camelCaseResult.value));
                vue.setSharedData(__sharedData, 14, vue.toDisplayString(kebabCaseResult.value));
                vue.setSharedData(__sharedData, 15, vue.toDisplayString(capitalizeResult.value));
                vue.setSharedData(__sharedData, 16, vue.toDisplayString(debouncedCount.value));
                vue.setSharedData(__sharedData, 17, vue.toDisplayString(randomValue.value));
              });
            })
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n60.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1s = {};
  const LodashDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$1r, [["styles", [_style_0$1s]]]);
  class RsaPublicKey extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            modulus: { type: "Unknown", optional: false },
            exponent: { type: "Unknown", optional: false }
          };
        }
      };
    }
    constructor(options, metadata = RsaPublicKey.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.modulus = this.__props__.modulus;
      this.exponent = this.__props__.exponent;
      delete this.__props__;
    }
  }
  class RsaPrivateKey extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            modulus: { type: "Unknown", optional: false },
            privateExponent: { type: "Unknown", optional: false }
          };
        }
      };
    }
    constructor(options, metadata = RsaPrivateKey.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.modulus = this.__props__.modulus;
      this.privateExponent = this.__props__.privateExponent;
      delete this.__props__;
    }
  }
  class DerElement extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            tag: { type: Number, optional: false },
            contentStart: { type: Number, optional: false },
            contentLen: { type: Number, optional: false },
            nextStart: { type: Number, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = DerElement.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.tag = this.__props__.tag;
      this.contentStart = this.__props__.contentStart;
      this.contentLen = this.__props__.contentLen;
      this.nextStart = this.__props__.nextStart;
      delete this.__props__;
    }
  }
  const B64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  function bytesToHex$1(bytes) {
    let result = "";
    for (let i = 0; i < bytes.length; i++) {
      const b = bytes[i] | 0;
      result += (b < 16 ? "0" : "") + b.toString(16);
    }
    return result;
  }
  function hexToBytes$1(hex) {
    const len = hex.length / 2;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
    }
    return bytes;
  }
  function textToBytes$1(text) {
    return new TextEncoder().encode(text);
  }
  function bytesToText$1(bytes) {
    return new TextDecoder().decode(bytes);
  }
  function subBytes$1(bytes, start, end) {
    const len = end - start;
    const out = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      out[i] = bytes[start + i];
    }
    return out;
  }
  function stripPem(pem) {
    const lines = pem.split("\n");
    let body = "";
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].indexOf("-----") >= 0) {
        continue;
      }
      body = body + lines[i];
    }
    let result = "";
    for (let i = 0; i < body.length; i++) {
      const c = body.charAt(i);
      if (B64_CHARS.indexOf(c) >= 0 || c == "=") {
        result += c;
      }
    }
    return result;
  }
  function base64DecodeToBytes(b64) {
    let clean = stripPem(b64);
    while (clean.length % 4 != 0) {
      clean = clean + "=";
    }
    return new Uint8Array(uni.base64ToArrayBuffer(clean));
  }
  function derReadElement(bytes, start) {
    const tag = bytes[start] | 0;
    const l0 = bytes[start + 1] | 0;
    let len = 0;
    let headerLen = 2;
    if (l0 < 128) {
      len = l0;
    } else {
      const numLen = l0 & 127;
      for (let i = 0; i < numLen; i++) {
        len = len * 256 + (bytes[start + 2 + i] | 0);
      }
      headerLen = 2 + numLen;
    }
    const contentStart = start + headerLen;
    return new DerElement({ tag, contentStart, contentLen: len, nextStart: contentStart + len });
  }
  function derIntegerValue(bytes, elem) {
    return trimZero(subBytes$1(bytes, elem.contentStart, elem.contentStart + elem.contentLen));
  }
  function parsePublicKey(pem) {
    const der = base64DecodeToBytes(pem);
    const outer = derReadElement(der, 0);
    const content = subBytes$1(der, outer.contentStart, outer.contentStart + outer.contentLen);
    const first = derReadElement(content, 0);
    if (first.tag == 2) {
      const n_1 = derIntegerValue(content, first);
      const eElem_1 = derReadElement(content, first.nextStart);
      const e_1 = derIntegerValue(content, eElem_1);
      return new RsaPublicKey({ modulus: n_1, exponent: e_1 });
    }
    const algo = derReadElement(content, 0);
    const bit = derReadElement(content, algo.nextStart);
    const pkcs1 = subBytes$1(content, bit.contentStart + 1, bit.contentStart + bit.contentLen);
    const pk1 = derReadElement(pkcs1, 0);
    const nElem = derReadElement(pkcs1, pk1.contentStart);
    const n = derIntegerValue(pkcs1, nElem);
    const eElem = derReadElement(pkcs1, nElem.nextStart);
    const e = derIntegerValue(pkcs1, eElem);
    return new RsaPublicKey({ modulus: n, exponent: e });
  }
  function parsePrivateKeyPkcs1(pkcs1) {
    const outer = derReadElement(pkcs1, 0);
    const content = subBytes$1(pkcs1, outer.contentStart, outer.contentStart + outer.contentLen);
    const ver = derReadElement(content, 0);
    const nElem = derReadElement(content, ver.nextStart);
    const n = derIntegerValue(content, nElem);
    const eElem = derReadElement(content, nElem.nextStart);
    const dElem = derReadElement(content, eElem.nextStart);
    const d = derIntegerValue(content, dElem);
    return new RsaPrivateKey({ modulus: n, privateExponent: d });
  }
  function parsePrivateKey(pem) {
    const der = base64DecodeToBytes(pem);
    const outer = derReadElement(der, 0);
    const content = subBytes$1(der, outer.contentStart, outer.contentStart + outer.contentLen);
    const first = derReadElement(content, 0);
    if (first.tag == 2) {
      const second = derReadElement(content, first.nextStart);
      if (second.tag == 2) {
        const n = derIntegerValue(content, second);
        const eElem = derReadElement(content, second.nextStart);
        const dElem = derReadElement(content, eElem.nextStart);
        const d = derIntegerValue(content, dElem);
        return new RsaPrivateKey({ modulus: n, privateExponent: d });
      }
      const algo = second;
      const octet = derReadElement(content, algo.nextStart);
      const pkcs1 = subBytes$1(content, octet.contentStart, octet.contentStart + octet.contentLen);
      return parsePrivateKeyPkcs1(pkcs1);
    }
    throw new Error("无法识别的私钥格式，请使用 PKCS#1 或 PKCS#8 密钥");
  }
  function trimZero(bytes) {
    let start = 0;
    while (start < bytes.length - 1 && bytes[start] == 0) {
      start++;
    }
    return subBytes$1(bytes, start, bytes.length);
  }
  function isZero(bytes) {
    for (let i = 0; i < bytes.length; i++) {
      if (bytes[i] != 0) {
        return false;
      }
    }
    return true;
  }
  function bigCmp(a, b) {
    if (a.length != b.length) {
      return a.length > b.length ? 1 : -1;
    }
    for (let i = 0; i < a.length; i++) {
      const av = a[i] | 0;
      const bv = b[i] | 0;
      if (av != bv) {
        return av > bv ? 1 : -1;
      }
    }
    return 0;
  }
  function bigShrBits(a, bits) {
    const out = new Uint8Array(a.length);
    let carry = 0;
    for (let i = a.length - 1; i >= 0; i--) {
      const v = a[i] | 0;
      out[i] = v >> bits | carry;
      carry = (v & (1 << bits) - 1) << 8 - bits;
    }
    return trimZero(out);
  }
  function trimLE(bytes) {
    let end = bytes.length;
    while (end > 1 && bytes[end - 1] == 0) {
      end = end - 1;
    }
    return subBytes$1(bytes, 0, end);
  }
  function toLE(bytes) {
    const out = new Uint8Array(bytes.length);
    for (let i = 0; i < bytes.length; i++) {
      out[i] = bytes[bytes.length - 1 - i];
    }
    return trimLE(out);
  }
  function toBE(bytes) {
    const out = new Uint8Array(bytes.length);
    for (let i = 0; i < bytes.length; i++) {
      out[i] = bytes[bytes.length - 1 - i];
    }
    return trimZero(out);
  }
  function bigShlBitsLE(a, bits) {
    const out = new Uint8Array(a.length + 1);
    let carry = 0;
    for (let i = 0; i < a.length; i++) {
      const v = a[i] | 0;
      out[i] = (v << bits | carry) & 255;
      carry = v >> 8 - bits;
    }
    out[a.length] = carry;
    return out;
  }
  function bigMul(a, b) {
    if (isZero(a) || isZero(b)) {
      return new Uint8Array(1);
    }
    const outLen = a.length + b.length;
    const out = new Uint8Array(outLen);
    for (let i = 0; i < a.length; i++) {
      const ai = a[a.length - 1 - i] | 0;
      let carry = 0;
      for (let j = 0; j < b.length; j++) {
        const bj = b[b.length - 1 - j] | 0;
        const k = outLen - 1 - (i + j);
        const t2 = (out[k] | 0) + ai * bj + carry;
        out[k] = t2 & 255;
        carry = t2 >> 8;
      }
      const k2 = outLen - 1 - (i + b.length);
      out[k2] = (out[k2] | 0) + carry;
    }
    return trimZero(out);
  }
  function leadingZeroBits(b) {
    let bits = 0;
    let mask = 128;
    while ((b & mask) == 0) {
      bits = bits + 1;
      mask = mask >> 1;
    }
    return bits;
  }
  function bigGetBit(a, i) {
    const byteIndex = Math.floor(i / 8);
    const bitInByte = 7 - i % 8;
    return (a[byteIndex] | 0) >> bitInByte & 1;
  }
  function padToN(bytes, n) {
    if (bytes.length >= n) {
      return bytes;
    }
    const out = new Uint8Array(n);
    const gap = n - bytes.length;
    for (let i = 0; i < bytes.length; i++) {
      out[gap + i] = bytes[i];
    }
    return out;
  }
  function bigMod(a, m) {
    if (bigCmp(a, m) < 0) {
      return a;
    }
    const n = m.length;
    if (n == 1) {
      const mv = m[0] | 0;
      let rem = 0;
      for (let i = 0; i < a.length; i++) {
        rem = (rem * 256 + (a[i] | 0)) % mv;
      }
      const out = new Uint8Array(1);
      out[0] = rem;
      return out;
    }
    const shift = leadingZeroBits(m[0] | 0);
    const v = trimLE(bigShlBitsLE(toLE(m), shift));
    const uArr = bigShlBitsLE(toLE(a), shift);
    const uLen = uArr.length;
    const qLen = uLen - n;
    for (let j = qLen - 1; j >= 0; j--) {
      const uTop = (uArr[j + n] | 0) * 256 + (uArr[j + n - 1] | 0);
      let qhat = Math.floor(uTop / (v[n - 1] | 0));
      if (qhat >= 256) {
        qhat = 255;
      }
      let rhat = uTop - qhat * (v[n - 1] | 0);
      while (qhat >= 256 || qhat * (v[n - 2] | 0) > rhat * 256 + (uArr[j + n - 2] | 0)) {
        qhat = qhat - 1;
        rhat = rhat + (v[n - 1] | 0);
        if (rhat >= 256) {
          break;
        }
      }
      let borrow = 0;
      for (let i = 0; i < n; i++) {
        const p = qhat * (v[i] | 0) + borrow;
        const t2 = (uArr[j + i] | 0) - (p & 255);
        uArr[j + i] = t2 & 255;
        borrow = (p >> 8) + (t2 < 0 ? 1 : 0);
      }
      let hi = (uArr[j + n] | 0) - borrow;
      if (hi < 0) {
        let carry = 0;
        for (let i = 0; i < n; i++) {
          const s = (uArr[j + i] | 0) + (v[i] | 0) + carry;
          uArr[j + i] = s & 255;
          carry = s >> 8;
        }
        hi = hi + carry;
      }
      uArr[j + n] = hi;
    }
    return bigShrBits(toBE(subBytes$1(uArr, 0, n)), shift);
  }
  function bigModPow(base, exp, m) {
    let result = new Uint8Array(1);
    result[0] = 1;
    let b = bigMod(base, m);
    const expBits = exp.length * 8;
    for (let i = 0; i < expBits; i++) {
      result = bigMod(bigMul(result, result), m);
      if (bigGetBit(exp, i) == 1) {
        result = bigMod(bigMul(result, b), m);
      }
    }
    return result;
  }
  function i2osp(x, k) {
    return padToN(x, k);
  }
  function buildDigestInfo(digestHex, hashType) {
    const digest = hexToBytes$1(digestHex);
    let prefixHex = "3031300d060960864801650304020105000420";
    if (hashType == "MD5") {
      prefixHex = "3020300c06082a864886f70d020505000410";
    } else if (hashType == "SHA-1" || hashType == "SHA1") {
      prefixHex = "3021300906052b0e03021a05000414";
    }
    const prefix = hexToBytes$1(prefixHex);
    const out = new Uint8Array(prefix.length + digest.length);
    for (let i = 0; i < prefix.length; i++) {
      out[i] = prefix[i];
    }
    for (let i = 0; i < digest.length; i++) {
      out[prefix.length + i] = digest[i];
    }
    return out;
  }
  function rsaEncryptUts(text, publicKey) {
    const key = parsePublicKey(publicKey);
    const k = key.modulus.length;
    const m = textToBytes$1(text);
    const mLen = m.length;
    if (mLen > k - 11) {
      throw new Error("RSA 明文过长：最长 " + (k - 11) + " 字节，当前 " + mLen + " 字节");
    }
    const em = new Uint8Array(k);
    em[0] = 0;
    em[1] = 2;
    const psLen = k - mLen - 3;
    for (let i = 0; i < psLen; i++) {
      em[2 + i] = Math.floor(Math.random() * 255) + 1;
    }
    em[k - mLen - 1] = 0;
    for (let i = 0; i < mLen; i++) {
      em[k - mLen + i] = m[i];
    }
    const c = bigModPow(em, key.exponent, key.modulus);
    return bytesToHex$1(i2osp(c, k));
  }
  function rsaDecryptUts(hex, privateKey) {
    const key = parsePrivateKey(privateKey);
    const k = key.modulus.length;
    const c = hexToBytes$1(hex);
    if (c.length != k) {
      throw new Error("RSA 密文长度不正确：应为 " + k + " 字节，实际 " + c.length + " 字节");
    }
    const m = bigModPow(c, key.privateExponent, key.modulus);
    const em = i2osp(m, k);
    if (em[0] != 0 || em[1] != 2) {
      throw new Error("RSA 解密失败：填充头无效");
    }
    let sep = -1;
    for (let i = 2; i < k; i++) {
      if (em[i] == 0) {
        sep = i;
        break;
      }
    }
    if (sep < 10) {
      throw new Error("RSA 解密失败：填充无效");
    }
    return bytesToText$1(subBytes$1(em, sep + 1, k));
  }
  function rsaSignUts(digestHex, hashType, privateKey) {
    const key = parsePrivateKey(privateKey);
    const k = key.modulus.length;
    const t2 = buildDigestInfo(digestHex, hashType);
    const tLen = t2.length;
    if (tLen > k - 11) {
      throw new Error("RSA 签名摘要过长：密钥至少需要 " + (tLen + 11) + " 字节");
    }
    const em = new Uint8Array(k);
    em[0] = 0;
    em[1] = 1;
    const psLen = k - tLen - 3;
    for (let i = 0; i < psLen; i++) {
      em[2 + i] = 255;
    }
    em[k - tLen - 1] = 0;
    for (let i = 0; i < tLen; i++) {
      em[k - tLen + i] = t2[i];
    }
    const s = bigModPow(em, key.privateExponent, key.modulus);
    return bytesToHex$1(i2osp(s, k));
  }
  function rsaVerifyUts(digestHex, hashType, publicKey, sigHex) {
    const key = parsePublicKey(publicKey);
    const k = key.modulus.length;
    const s = hexToBytes$1(sigHex);
    if (s.length != k) {
      return false;
    }
    const m = bigModPow(s, key.exponent, key.modulus);
    const em = i2osp(m, k);
    if (em[0] != 0 || em[1] != 1) {
      return false;
    }
    let sep = -1;
    for (let i = 2; i < k; i++) {
      if (em[i] == 0) {
        sep = i;
        break;
      }
      if (em[i] != 255) {
        return false;
      }
    }
    if (sep < 10) {
      return false;
    }
    const t2 = buildDigestInfo(digestHex, hashType);
    if (k - sep - 1 != t2.length) {
      return false;
    }
    for (let i = 0; i < t2.length; i++) {
      if (em[sep + 1 + i] != t2[i]) {
        return false;
      }
    }
    return true;
  }
  function rsaGenerateKeyPairAndroid(bits) {
    try {
      const kpg = java.security.KeyPairGenerator.getInstance("RSA");
      kpg.initialize(bits.toInt());
      const kp = kpg.generateKeyPair();
      const pubBytes = kp.getPublic().getEncoded();
      const priBytes = kp.getPrivate().getEncoded();
      const pubB64 = android.util.Base64.encodeToString(pubBytes, android.util.Base64.NO_WRAP);
      const priB64 = android.util.Base64.encodeToString(priBytes, android.util.Base64.NO_WRAP);
      return '{"publicKey":"' + pubB64 + '","privateKey":"' + priB64 + '"}';
    } catch (_e) {
      return '{"publicKey":"","privateKey":""}';
    }
  }
  function rsaGenerateKeyPairUts(bits) {
    return rsaGenerateKeyPairAndroid(bits);
  }
  function textToBytes(text) {
    return new TextEncoder().encode(text);
  }
  function bytesToText(bytes) {
    return new TextDecoder().decode(bytes);
  }
  function bytesToBase64(bytes) {
    return uni.arrayBufferToBase64(bytes.buffer);
  }
  function base64ToBytes(b64) {
    return new Uint8Array(uni.base64ToArrayBuffer(b64));
  }
  function bytesToHex(bytes) {
    let result = "";
    for (let i = 0; i < bytes.length; i++) {
      const b = bytes[i] | 0;
      result += (b < 16 ? "0" : "") + b.toString(16);
    }
    return result;
  }
  function hexToBytes(hex) {
    const len = hex.length / 2;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
    }
    return bytes;
  }
  function copyBytes(src, dst, dstOff) {
    for (let i = 0; i < src.length; i++) {
      dst[dstOff + i] = src[i];
    }
  }
  function subBytes(bytes, start, end) {
    const len = end - start;
    const out = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      out[i] = bytes[start + i];
    }
    return out;
  }
  function readUint32BE(bytes, off) {
    return ((bytes[off] | 0) << 24 | (bytes[off + 1] | 0) << 16 | (bytes[off + 2] | 0) << 8 | (bytes[off + 3] | 0)) >>> 0;
  }
  function writeUint32BE(out, off, v) {
    out[off] = v >>> 24 & 255;
    out[off + 1] = v >>> 16 & 255;
    out[off + 2] = v >>> 8 & 255;
    out[off + 3] = v & 255;
  }
  function readUint32LE(bytes, off) {
    return (bytes[off] | 0 | (bytes[off + 1] | 0) << 8 | (bytes[off + 2] | 0) << 16 | (bytes[off + 3] | 0) << 24) >>> 0;
  }
  function writeUint32LE(out, off, v) {
    out[off] = v & 255;
    out[off + 1] = v >>> 8 & 255;
    out[off + 2] = v >>> 16 & 255;
    out[off + 3] = v >>> 24 & 255;
  }
  function rotl32(x, c) {
    return (x << c | x >>> 32 - c) >>> 0;
  }
  function rotr32(x, n) {
    return (x >>> n | x << 32 - n) >>> 0;
  }
  const MD5_K = [
    3614090360,
    3905402710,
    606105819,
    3250441966,
    4118548399,
    1200080426,
    2821735955,
    4249261313,
    1770035416,
    2336552879,
    4294925233,
    2304563134,
    1804603682,
    4254626195,
    2792965006,
    1236535329,
    4129170786,
    3225465664,
    643717713,
    3921069994,
    3593408605,
    38016083,
    3634488961,
    3889429448,
    568446438,
    3275163606,
    4107603335,
    1163531501,
    2850285829,
    4243563512,
    1735328473,
    2368359562,
    4294588738,
    2272392833,
    1839030562,
    4259657740,
    2763975236,
    1272893353,
    4139469664,
    3200236656,
    681279174,
    3936430074,
    3572445317,
    76029189,
    3654602809,
    3873151461,
    530742520,
    3299628645,
    4096336452,
    1126891415,
    2878612391,
    4237533241,
    1700485571,
    2399980690,
    4293915773,
    2240044497,
    1873313359,
    4264355552,
    2734768916,
    1309151649,
    4149444226,
    3174756917,
    718787259,
    3951481745
  ];
  const MD5_S = [
    7,
    12,
    17,
    22,
    7,
    12,
    17,
    22,
    7,
    12,
    17,
    22,
    7,
    12,
    17,
    22,
    5,
    9,
    14,
    20,
    5,
    9,
    14,
    20,
    5,
    9,
    14,
    20,
    5,
    9,
    14,
    20,
    4,
    11,
    16,
    23,
    4,
    11,
    16,
    23,
    4,
    11,
    16,
    23,
    4,
    11,
    16,
    23,
    6,
    10,
    15,
    21,
    6,
    10,
    15,
    21,
    6,
    10,
    15,
    21,
    6,
    10,
    15,
    21
  ];
  function md5Bytes(data) {
    const origLen = data.length;
    const bitLen = origLen * 8;
    const padLen = origLen % 64 < 56 ? 56 - origLen % 64 : 120 - origLen % 64;
    const totalLen = origLen + padLen + 8;
    const msg = new Uint8Array(totalLen);
    copyBytes(data, msg, 0);
    msg[origLen] = 128;
    const lowBits = bitLen >>> 0;
    const highBits = Math.floor(bitLen / 4294967296);
    writeUint32LE(msg, totalLen - 8, lowBits);
    writeUint32LE(msg, totalLen - 4, highBits);
    let a0 = 1732584193;
    let b0 = 4023233417;
    let c0 = 2562383102;
    let d0 = 271733878;
    for (let off = 0; off < totalLen; off += 64) {
      const M2 = [];
      for (let j = 0; j < 16; j++) {
        M2.push(readUint32LE(msg, off + j * 4));
      }
      let A = a0;
      let B = b0;
      let C = c0;
      let D2 = d0;
      for (let i = 0; i < 64; i++) {
        let F = 0;
        let g = 0;
        if (i < 16) {
          F = B & C | ~B & D2;
          g = i;
        } else if (i < 32) {
          F = D2 & B | ~D2 & C;
          g = (5 * i + 1) % 16;
        } else if (i < 48) {
          F = B ^ C ^ D2;
          g = (3 * i + 5) % 16;
        } else {
          F = C ^ (B | ~D2);
          g = 7 * i % 16;
        }
        const dTemp = D2;
        D2 = C;
        C = B;
        const sum = A + F + MD5_K[i] + M2[g] >>> 0;
        B = B + rotl32(sum, MD5_S[i]) >>> 0;
        A = dTemp;
      }
      a0 = a0 + A >>> 0;
      b0 = b0 + B >>> 0;
      c0 = c0 + C >>> 0;
      d0 = d0 + D2 >>> 0;
    }
    const out = new Uint8Array(16);
    writeUint32LE(out, 0, a0);
    writeUint32LE(out, 4, b0);
    writeUint32LE(out, 8, c0);
    writeUint32LE(out, 12, d0);
    return bytesToHex(out);
  }
  function sha1Bytes(data) {
    const origLen = data.length;
    const bitLen = origLen * 8;
    const padLen = origLen % 64 < 56 ? 56 - origLen % 64 : 120 - origLen % 64;
    const totalLen = origLen + padLen + 8;
    const msg = new Uint8Array(totalLen);
    copyBytes(data, msg, 0);
    msg[origLen] = 128;
    const highBits = Math.floor(bitLen / 4294967296);
    const lowBits = bitLen >>> 0;
    writeUint32BE(msg, totalLen - 8, highBits);
    writeUint32BE(msg, totalLen - 4, lowBits);
    let h0 = 1732584193;
    let h1 = 4023233417;
    let h2 = 2562383102;
    let h3 = 271733878;
    let h4 = 3285377520;
    for (let off = 0; off < totalLen; off += 64) {
      const w = [];
      for (let i = 0; i < 16; i++) {
        w.push(readUint32BE(msg, off + i * 4));
      }
      for (let i = 16; i < 80; i++) {
        w.push(rotl32(w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16], 1));
      }
      let a = h0;
      let b = h1;
      let c = h2;
      let d = h3;
      let e = h4;
      for (let i = 0; i < 80; i++) {
        let f = 0;
        let k = 0;
        if (i < 20) {
          f = b & c | ~b & d;
          k = 1518500249;
        } else if (i < 40) {
          f = b ^ c ^ d;
          k = 1859775393;
        } else if (i < 60) {
          f = b & c | b & d | c & d;
          k = 2400959708;
        } else {
          f = b ^ c ^ d;
          k = 3395469782;
        }
        const temp = rotl32(a, 5) + f + e + k + w[i] >>> 0;
        e = d;
        d = c;
        c = rotl32(b, 30);
        b = a;
        a = temp;
      }
      h0 = h0 + a >>> 0;
      h1 = h1 + b >>> 0;
      h2 = h2 + c >>> 0;
      h3 = h3 + d >>> 0;
      h4 = h4 + e >>> 0;
    }
    const out = new Uint8Array(20);
    writeUint32BE(out, 0, h0);
    writeUint32BE(out, 4, h1);
    writeUint32BE(out, 8, h2);
    writeUint32BE(out, 12, h3);
    writeUint32BE(out, 16, h4);
    return bytesToHex(out);
  }
  const SHA256_K = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ];
  function sha256Bytes(data) {
    const origLen = data.length;
    const bitLen = origLen * 8;
    const padLen = origLen % 64 < 56 ? 56 - origLen % 64 : 120 - origLen % 64;
    const totalLen = origLen + padLen + 8;
    const msg = new Uint8Array(totalLen);
    copyBytes(data, msg, 0);
    msg[origLen] = 128;
    const highBits = Math.floor(bitLen / 4294967296);
    const lowBits = bitLen >>> 0;
    writeUint32BE(msg, totalLen - 8, highBits);
    writeUint32BE(msg, totalLen - 4, lowBits);
    let h0 = 1779033703;
    let h1 = 3144134277;
    let h2 = 1013904242;
    let h3 = 2773480762;
    let h4 = 1359893119;
    let h5 = 2600822924;
    let h6 = 528734635;
    let h7 = 1541459225;
    for (let off = 0; off < totalLen; off += 64) {
      const w = [];
      for (let i = 0; i < 16; i++) {
        w.push(readUint32BE(msg, off + i * 4));
      }
      for (let i = 16; i < 64; i++) {
        const s0 = rotr32(w[i - 15], 7) ^ rotr32(w[i - 15], 18) ^ w[i - 15] >>> 3;
        const s1 = rotr32(w[i - 2], 17) ^ rotr32(w[i - 2], 19) ^ w[i - 2] >>> 10;
        w.push(w[i - 16] + s0 + w[i - 7] + s1 >>> 0);
      }
      let a = h0;
      let b = h1;
      let c = h2;
      let d = h3;
      let e = h4;
      let f = h5;
      let g = h6;
      let h_1 = h7;
      for (let i = 0; i < 64; i++) {
        const S1 = rotr32(e, 6) ^ rotr32(e, 11) ^ rotr32(e, 25);
        const ch = e & f ^ ~e & g;
        const temp1 = h_1 + S1 + ch + SHA256_K[i] + w[i] >>> 0;
        const S0 = rotr32(a, 2) ^ rotr32(a, 13) ^ rotr32(a, 22);
        const maj = a & b ^ a & c ^ b & c;
        const temp2 = S0 + maj >>> 0;
        h_1 = g;
        g = f;
        f = e;
        e = d + temp1 >>> 0;
        d = c;
        c = b;
        b = a;
        a = temp1 + temp2 >>> 0;
      }
      h0 = h0 + a >>> 0;
      h1 = h1 + b >>> 0;
      h2 = h2 + c >>> 0;
      h3 = h3 + d >>> 0;
      h4 = h4 + e >>> 0;
      h5 = h5 + f >>> 0;
      h6 = h6 + g >>> 0;
      h7 = h7 + h_1 >>> 0;
    }
    const out = new Uint8Array(32);
    writeUint32BE(out, 0, h0);
    writeUint32BE(out, 4, h1);
    writeUint32BE(out, 8, h2);
    writeUint32BE(out, 12, h3);
    writeUint32BE(out, 16, h4);
    writeUint32BE(out, 20, h5);
    writeUint32BE(out, 24, h6);
    writeUint32BE(out, 28, h7);
    return bytesToHex(out);
  }
  function hmacSha1Bytes(text, key) {
    const blockSize = 64;
    const msg = textToBytes(text);
    let keyBytes = textToBytes(key);
    if (keyBytes.length > blockSize)
      keyBytes = hexToBytes(sha1Bytes(keyBytes));
    const ipad = new Uint8Array(blockSize);
    const opad = new Uint8Array(blockSize);
    for (let i = 0; i < blockSize; i++) {
      const kb = i < keyBytes.length ? keyBytes[i] | 0 : 0;
      ipad[i] = kb ^ 54;
      opad[i] = kb ^ 92;
    }
    const inner = new Uint8Array(blockSize + msg.length);
    copyBytes(ipad, inner, 0);
    copyBytes(msg, inner, blockSize);
    const innerHash = hexToBytes(sha1Bytes(inner));
    const outer = new Uint8Array(blockSize + 20);
    copyBytes(opad, outer, 0);
    copyBytes(innerHash, outer, blockSize);
    return sha1Bytes(outer);
  }
  const AES_SBOX = [];
  const AES_INV_SBOX = [];
  const AES_SUB_MIX = [[], [], [], []];
  const AES_INV_SUB_MIX = [[], [], [], []];
  const AES_RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
  function aesBuildTables() {
    const d = [];
    for (let i = 0; i < 256; i++) {
      d.push(i < 128 ? i << 1 : i << 1 ^ 283);
      AES_SBOX.push(0);
      AES_INV_SBOX.push(0);
      for (let j = 0; j < 4; j++) {
        AES_SUB_MIX[j].push(0);
        AES_INV_SUB_MIX[j].push(0);
      }
    }
    let x = 0;
    let xi = 0;
    for (let i = 0; i < 256; i++) {
      let sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
      sx = sx >>> 8 ^ sx & 255 ^ 99;
      AES_SBOX[x] = sx;
      AES_INV_SBOX[sx] = x;
      const x2 = d[x];
      const x4 = d[x2];
      const x8 = d[x4];
      let t2 = d[sx] * 257 ^ sx * 16843008;
      AES_SUB_MIX[0][x] = t2 << 24 | t2 >>> 8;
      AES_SUB_MIX[1][x] = t2 << 16 | t2 >>> 16;
      AES_SUB_MIX[2][x] = t2 << 8 | t2 >>> 24;
      AES_SUB_MIX[3][x] = t2;
      t2 = x8 * 16843009 ^ x4 * 65537 ^ x2 * 257 ^ x * 16843008;
      AES_INV_SUB_MIX[0][sx] = t2 << 24 | t2 >>> 8;
      AES_INV_SUB_MIX[1][sx] = t2 << 16 | t2 >>> 16;
      AES_INV_SUB_MIX[2][sx] = t2 << 8 | t2 >>> 24;
      AES_INV_SUB_MIX[3][sx] = t2;
      if (x == 0) {
        x = 1;
        xi = 1;
      } else {
        x = x2 ^ d[d[d[x8 ^ x2]]];
        xi ^= d[d[xi]];
      }
    }
  }
  aesBuildTables();
  function aesExpandKeyWords(key) {
    const keySchedule = [];
    for (let i = 0; i < 4; i++) {
      keySchedule.push((key[i * 4] | 0) << 24 | (key[i * 4 + 1] | 0) << 16 | (key[i * 4 + 2] | 0) << 8 | (key[i * 4 + 3] | 0));
    }
    for (let ksRow = 4; ksRow < 44; ksRow++) {
      let t2 = keySchedule[ksRow - 1];
      if (ksRow % 4 == 0) {
        t2 = t2 << 8 | t2 >>> 24;
        t2 = AES_SBOX[t2 >>> 24] << 24 | AES_SBOX[t2 >>> 16 & 255] << 16 | AES_SBOX[t2 >>> 8 & 255] << 8 | AES_SBOX[t2 & 255];
        t2 ^= AES_RCON[Math.floor(ksRow / 4)] << 24;
      }
      keySchedule.push(keySchedule[ksRow - 4] ^ t2);
    }
    return keySchedule;
  }
  function aesInvExpandKeyWords(keySchedule) {
    const invKeySchedule = [];
    const ksRows = 44;
    for (let invKsRow = 0; invKsRow < ksRows; invKsRow++) {
      const ksRow = ksRows - invKsRow;
      const t2 = invKsRow % 4 != 0 ? keySchedule[ksRow] : keySchedule[ksRow - 4];
      if (invKsRow < 4 || ksRow <= 4) {
        invKeySchedule.push(t2);
      } else {
        const v = (AES_INV_SUB_MIX[0][AES_SBOX[t2 >>> 24]] ^ AES_INV_SUB_MIX[1][AES_SBOX[t2 >>> 16 & 255]] ^ AES_INV_SUB_MIX[2][AES_SBOX[t2 >>> 8 & 255]] ^ AES_INV_SUB_MIX[3][AES_SBOX[t2 & 255]]) >>> 0;
        invKeySchedule.push(v);
      }
    }
    return invKeySchedule;
  }
  function aesDoCryptBlock(M2, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
    let s0 = M2[offset] ^ keySchedule[0];
    let s1 = M2[offset + 1] ^ keySchedule[1];
    let s2 = M2[offset + 2] ^ keySchedule[2];
    let s3 = M2[offset + 3] ^ keySchedule[3];
    let ksRows = 4;
    for (let round2 = 1; round2 < 10; round2++) {
      const t0 = (SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 255] ^ SUB_MIX_2[s2 >>> 8 & 255] ^ SUB_MIX_3[s3 & 255] ^ keySchedule[ksRows++]) >>> 0;
      const t1 = (SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 255] ^ SUB_MIX_2[s3 >>> 8 & 255] ^ SUB_MIX_3[s0 & 255] ^ keySchedule[ksRows++]) >>> 0;
      const t2 = (SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 255] ^ SUB_MIX_2[s0 >>> 8 & 255] ^ SUB_MIX_3[s1 & 255] ^ keySchedule[ksRows++]) >>> 0;
      const t3 = (SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 255] ^ SUB_MIX_2[s1 >>> 8 & 255] ^ SUB_MIX_3[s2 & 255] ^ keySchedule[ksRows++]) >>> 0;
      s0 = t0;
      s1 = t1;
      s2 = t2;
      s3 = t3;
    }
    const u0 = ((SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 255] << 16 | SBOX[s2 >>> 8 & 255] << 8 | SBOX[s3 & 255]) ^ keySchedule[ksRows++]) >>> 0;
    const u1 = ((SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 255] << 16 | SBOX[s3 >>> 8 & 255] << 8 | SBOX[s0 & 255]) ^ keySchedule[ksRows++]) >>> 0;
    const u2 = ((SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 255] << 16 | SBOX[s0 >>> 8 & 255] << 8 | SBOX[s1 & 255]) ^ keySchedule[ksRows++]) >>> 0;
    const u3 = ((SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 255] << 16 | SBOX[s1 >>> 8 & 255] << 8 | SBOX[s2 & 255]) ^ keySchedule[ksRows++]) >>> 0;
    M2[offset] = u0;
    M2[offset + 1] = u1;
    M2[offset + 2] = u2;
    M2[offset + 3] = u3;
  }
  function aesBytesToWords(bytes, off) {
    const w = [];
    for (let i = 0; i < 4; i++) {
      w.push((bytes[off + i * 4] | 0) << 24 | (bytes[off + i * 4 + 1] | 0) << 16 | (bytes[off + i * 4 + 2] | 0) << 8 | (bytes[off + i * 4 + 3] | 0));
    }
    return w;
  }
  function aesWordsToBytes(words) {
    const out = new Uint8Array(16);
    for (let i = 0; i < 4; i++) {
      out[i * 4] = words[i] >>> 24 & 255;
      out[i * 4 + 1] = words[i] >>> 16 & 255;
      out[i * 4 + 2] = words[i] >>> 8 & 255;
      out[i * 4 + 3] = words[i] & 255;
    }
    return out;
  }
  function aesEncryptBlock(block, off, keySchedule) {
    const words = aesBytesToWords(block, off);
    aesDoCryptBlock(words, 0, keySchedule, AES_SUB_MIX[0], AES_SUB_MIX[1], AES_SUB_MIX[2], AES_SUB_MIX[3], AES_SBOX);
    return aesWordsToBytes(words);
  }
  function aesDecryptBlock(block, off, invKeySchedule) {
    const words = aesBytesToWords(block, off);
    let t2 = words[1];
    words[1] = words[3];
    words[3] = t2;
    aesDoCryptBlock(words, 0, invKeySchedule, AES_INV_SUB_MIX[0], AES_INV_SUB_MIX[1], AES_INV_SUB_MIX[2], AES_INV_SUB_MIX[3], AES_INV_SBOX);
    t2 = words[1];
    words[1] = words[3];
    words[3] = t2;
    return aesWordsToBytes(words);
  }
  function aesCipher(text, key, decrypt) {
    const pt = decrypt ? hexToBytes(text) : textToBytes(text);
    const paddedLen = decrypt ? pt.length : Math.ceil((pt.length + 1) / 16) * 16;
    const block = new Uint8Array(paddedLen);
    copyBytes(pt, block, 0);
    if (!decrypt) {
      for (let i = pt.length; i < paddedLen; i++)
        block[i] = paddedLen - pt.length;
    }
    const keyBytes = textToBytes(key);
    if (keyBytes.length != 16)
      throw new Error("AES 密钥必须为 16 字节（16 个 ASCII 字符）");
    const schedule = decrypt ? aesInvExpandKeyWords(aesExpandKeyWords(keyBytes)) : aesExpandKeyWords(keyBytes);
    const out = new Uint8Array(paddedLen);
    for (let off = 0; off < paddedLen; off += 16) {
      const res = decrypt ? aesDecryptBlock(block, off, schedule) : aesEncryptBlock(block, off, schedule);
      for (let j = 0; j < 16; j++)
        out[off + j] = res[j];
    }
    if (!decrypt)
      return bytesToHex(out);
    const pad = out[out.length - 1] | 0;
    if (pad < 1 || pad > 16)
      throw new Error("AES 解密填充无效");
    return bytesToText(subBytes(out, 0, out.length - pad));
  }
  const DES_IP = [58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 28, 20, 12, 4, 62, 54, 46, 38, 30, 22, 14, 6, 64, 56, 48, 40, 32, 24, 16, 8, 57, 49, 41, 33, 25, 17, 9, 1, 59, 51, 43, 35, 27, 19, 11, 3, 61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47, 39, 31, 23, 15, 7];
  const DES_FP = [40, 8, 48, 16, 56, 24, 64, 32, 39, 7, 47, 15, 55, 23, 63, 31, 38, 6, 46, 14, 54, 22, 62, 30, 37, 5, 45, 13, 53, 21, 61, 29, 36, 4, 44, 12, 52, 20, 60, 28, 35, 3, 43, 11, 51, 19, 59, 27, 34, 2, 42, 10, 50, 18, 58, 26, 33, 1, 41, 9, 49, 17, 57, 25];
  const DES_E = [32, 1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 8, 9, 10, 11, 12, 13, 12, 13, 14, 15, 16, 17, 16, 17, 18, 19, 20, 21, 20, 21, 22, 23, 24, 25, 24, 25, 26, 27, 28, 29, 28, 29, 30, 31, 32, 1];
  const DES_P = [16, 7, 20, 21, 29, 12, 28, 17, 1, 15, 23, 26, 5, 18, 31, 10, 2, 8, 24, 14, 32, 27, 3, 9, 19, 13, 30, 6, 22, 11, 4, 25];
  const DES_PC1 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
  const DES_PC2 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
  const DES_SHIFTS = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
  const DES_SBOX = [
    [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7, 0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8, 4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0, 15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13],
    [15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10, 3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5, 0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15, 13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9],
    [10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8, 13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1, 13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7, 1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12],
    [7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15, 13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9, 10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4, 3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14],
    [2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9, 14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6, 4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14, 11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3],
    [12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11, 10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8, 9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6, 4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13],
    [4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1, 13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6, 1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2, 6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12],
    [13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7, 1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2, 7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8, 2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11]
  ];
  function desBytesToBits(bytes) {
    const bits = [];
    for (let i = 0; i < bytes.length; i++) {
      const b = bytes[i] | 0;
      for (let j = 7; j >= 0; j--)
        bits.push(b >> j & 1);
    }
    return bits;
  }
  function desBitsToBytes(bits) {
    const out = new Uint8Array(bits.length / 8);
    for (let i = 0; i < out.length; i++) {
      let v = 0;
      for (let j = 0; j < 8; j++)
        v = v << 1 | bits[i * 8 + j];
      out[i] = v;
    }
    return out;
  }
  function desPermute(bits, table) {
    const out = [];
    for (let i = 0; i < table.length; i++)
      out.push(bits[table[i] - 1]);
    return out;
  }
  function desRotateLeft(bits, shift) {
    return bits.slice(shift).concat(bits.slice(0, shift));
  }
  function desBitsToNum(bits) {
    let v = 0;
    for (let i = 0; i < bits.length; i++)
      v = (v << 1 | bits[i]) >>> 0;
    return v;
  }
  function desSubKeys(key) {
    let cd = desPermute(desBytesToBits(key), DES_PC1);
    const subkeys = [];
    for (let i = 0; i < 16; i++) {
      const c = desRotateLeft(cd.slice(0, 28), DES_SHIFTS[i]);
      const d = desRotateLeft(cd.slice(28), DES_SHIFTS[i]);
      cd = c.concat(d);
      subkeys.push(desPermute(cd, DES_PC2));
    }
    return subkeys;
  }
  function desFeistel(rBits, subkey) {
    const expanded = desPermute(rBits, DES_E);
    const xored = [];
    for (let i = 0; i < 48; i++)
      xored.push(expanded[i] ^ subkey[i]);
    let sboxOut = [];
    for (let i = 0; i < 8; i++) {
      const group = xored.slice(i * 6, i * 6 + 6);
      const row = group[0] << 1 | group[5];
      const col = desBitsToNum(group.slice(1, 5));
      const val = DES_SBOX[i][row * 16 + col];
      sboxOut = sboxOut.concat([val >> 3 & 1, val >> 2 & 1, val >> 1 & 1, val & 1]);
    }
    return desPermute(sboxOut, DES_P);
  }
  function desProcessBlock(block, off, subkeys) {
    const blockBits = [];
    for (let i = 0; i < 8; i++) {
      const b = block[off + i] | 0;
      for (let j = 7; j >= 0; j--)
        blockBits.push(b >> j & 1);
    }
    let bits = desPermute(blockBits, DES_IP);
    let l = bits.slice(0, 32);
    let r = bits.slice(32);
    for (let i = 0; i < 16; i++) {
      const f = desFeistel(r, subkeys[i]);
      const nr = [];
      for (let j = 0; j < 32; j++)
        nr.push(l[j] ^ f[j]);
      l = r;
      r = nr;
    }
    return desBitsToBytes(desPermute(r.concat(l), DES_FP));
  }
  function desCipher(text, key, decrypt) {
    const pt = decrypt ? hexToBytes(text) : textToBytes(text);
    const paddedLen = decrypt ? pt.length : Math.ceil((pt.length + 1) / 8) * 8;
    const block = new Uint8Array(paddedLen);
    copyBytes(pt, block, 0);
    if (!decrypt) {
      for (let i = pt.length; i < paddedLen; i++)
        block[i] = paddedLen - pt.length;
    }
    const keyBytes = textToBytes(key);
    if (keyBytes.length != 8)
      throw new Error("DES 密钥必须为 8 字节（8 个 ASCII 字符）");
    const subkeys = desSubKeys(keyBytes);
    if (decrypt)
      subkeys.reverse();
    const out = new Uint8Array(paddedLen);
    for (let off = 0; off < paddedLen; off += 8) {
      const res = desProcessBlock(block, off, subkeys);
      for (let j = 0; j < 8; j++)
        out[off + j] = res[j];
    }
    if (!decrypt)
      return bytesToHex(out);
    const pad = out[out.length - 1] | 0;
    if (pad < 1 || pad > 8)
      throw new Error("DES 解密填充无效");
    return bytesToText(subBytes(out, 0, out.length - pad));
  }
  function base64Encode(text) {
    return new Promise((resolve, reject) => {
      try {
        resolve(bytesToBase64(textToBytes(text)));
      } catch (e) {
        reject(e);
      }
    });
  }
  function base64Decode(base64) {
    return new Promise((resolve, reject) => {
      try {
        resolve(bytesToText(base64ToBytes(base64)));
      } catch (e) {
        reject(e);
      }
    });
  }
  function md5(text) {
    return new Promise((resolve, reject) => {
      try {
        resolve(md5Bytes(textToBytes(text)));
      } catch (e) {
        reject(e);
      }
    });
  }
  function sha256(text) {
    return new Promise((resolve, reject) => {
      try {
        resolve(sha256Bytes(textToBytes(text)));
      } catch (e) {
        reject(e);
      }
    });
  }
  function hmacSha1(text, key) {
    return new Promise((resolve, reject) => {
      try {
        resolve(hmacSha1Bytes(text, key));
      } catch (e) {
        reject(e);
      }
    });
  }
  function aesEncrypt(text, key) {
    return new Promise((resolve, reject) => {
      try {
        resolve(aesCipher(text, key, false));
      } catch (e) {
        reject(e);
      }
    });
  }
  function aesDecrypt(hex, key) {
    return new Promise((resolve, reject) => {
      try {
        resolve(aesCipher(hex, key, true));
      } catch (e) {
        reject(e);
      }
    });
  }
  function desEncrypt(text, key) {
    return new Promise((resolve, reject) => {
      try {
        resolve(desCipher(text, key, false));
      } catch (e) {
        reject(e);
      }
    });
  }
  function desDecrypt(hex, key) {
    return new Promise((resolve, reject) => {
      try {
        resolve(desCipher(hex, key, true));
      } catch (e) {
        reject(e);
      }
    });
  }
  function rsaGenerateKeyPair(bits) {
    return new Promise((resolve, reject) => {
      try {
        resolve(rsaGenerateKeyPairUts(bits));
      } catch (e) {
        reject(e);
      }
    });
  }
  function rsaEncrypt(text, publicKey) {
    return new Promise((resolve, reject) => {
      try {
        resolve(rsaEncryptUts(text, publicKey));
      } catch (e) {
        reject(e);
      }
    });
  }
  function rsaDecrypt(hex, privateKey) {
    return new Promise((resolve, reject) => {
      try {
        resolve(rsaDecryptUts(hex, privateKey));
      } catch (e) {
        reject(e);
      }
    });
  }
  function hashHex(data, hashType) {
    if (hashType == "MD5") {
      return md5Bytes(data);
    }
    if (hashType == "SHA-1" || hashType == "SHA1") {
      return sha1Bytes(data);
    }
    return sha256Bytes(data);
  }
  function rsaSign(text, privateKey, hashType) {
    return new Promise((resolve, reject) => {
      try {
        resolve(rsaSignUts(hashHex(textToBytes(text), hashType), hashType, privateKey));
      } catch (e) {
        reject(e);
      }
    });
  }
  function rsaVerify(text, publicKey, sigHex, hashType) {
    return new Promise((resolve, reject) => {
      try {
        resolve(rsaVerifyUts(hashHex(textToBytes(text), hashType), hashType, publicKey, sigHex));
      } catch (e) {
        reject(e);
      }
    });
  }
  function generateUUID() {
    try {
      return java.util.UUID.randomUUID().toString();
    } catch (_e) {
    }
    const hexDigits = "0123456789abcdef";
    let s = "";
    for (let i = 0; i < 36; i++) {
      if (i == 8 || i == 13 || i == 18 || i == 23) {
        s += "-";
      } else if (i == 14) {
        s += "4";
      } else {
        const r = Math.floor(Math.random() * 16);
        const val = i == 19 ? r & 3 | 8 : r;
        s += hexDigits.charAt(val);
      }
    }
    return s;
  }
  const __className$1p = "GenSrcPagesBasicComponentsCryptoDemoCard";
  const _sfc_main$1q = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1p,
    __filename: "src/pages/basic/components/CryptoDemoCard.uvue",
    __name: "CryptoDemoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsCryptoDemoCardSharedData", sharedDataClassId: 0 })));
      const base64Input = vue.ref("hello uni-app x");
      const base64EncodeResult = vue.ref("");
      const base64DecodeResult = vue.ref("");
      const hashInput = vue.ref("hello uni-app x");
      const md5Result = vue.ref("");
      const sha256Result = vue.ref("");
      const hmacText = vue.ref("hello uni-app x");
      const hmacKey = vue.ref("secret-key");
      const hmacResult = vue.ref("");
      const aesText = vue.ref("hello uni-app x");
      const aesKey = vue.ref("1234567890abcdef");
      const aesEncryptResult = vue.ref("");
      const aesDecryptResult = vue.ref("");
      const desText = vue.ref("hello uni-app x");
      const desKey = vue.ref("12345678");
      const desEncryptResult = vue.ref("");
      const desDecryptResult = vue.ref("");
      const rsaText = vue.ref("hello uni-app x");
      const rsaPublicKey = vue.ref("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDLJXnLrDV0RxJWMHlsNc2glZlGd9GsJh6XV9LRsgLSlPYz2xEm751nqG1MLtkX+m/ov7YMNwyhwhw13PFCPfcpm0klWkcKPteEPOXUx3H6mVL2YMNUREtsMxub1zrvo0GNm688Py/8WhXzzxXT/nDe0owpCMmaQWaGP/diX7T7uQIDAQAB");
      const rsaPrivateKey = vue.ref("MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAMslecusNXRHElYweWw1zaCVmUZ30awmHpdX0tGyAtKU9jPbESbvnWeobUwu2Rf6b+i/tgw3DKHCHDXc8UI99ymbSSVaRwo+14Q85dTHcfqZUvZgw1RES2wzG5vXOu+jQY2brzw/L/xaFfPPFdP+cN7SjCkIyZpBZoY/92JftPu5AgMBAAECgYEAqjidxPdo1yUSjVwS8oRm6A9SnwSZkZljesdhZMq3qMKfRrZiufCAQbKU2whKatgz26CAp92c3RIs10lqc2o+5oKBOPNnAJXCmnjwNG9tlbKs0SpZjAgKgYv/uHlr2YX10xBQi1C7M2ySdbshj0inyyxzb6ibVJTmpHCFSkW1920CQQD/w6OYh87KOUYjan950HaSnc1g20HtI0rzRALRogGeQpo1qSeShfFGYOM219ee+9zawZLpw0X1W7BnH2vkNOXzAkEAy1VrNa4m0uC6NO+ytTEM6G+/WE8CuInIDvUzypLN8pNhev5/cPVzdZOcVlQLFZiPGe0vdu+hXmFvYYqWiymmowJANGdtea85241opZEIlXj1Eo1qq1HBbEky7i0dNr6u/jI/TodeKFNxYC4x3+bRsy1/zwKii2sLRn6G4lo5zQRZqQJAe8cA34mnOqHw2H6+BAza9bfo/EIEvv+o2Got3/gkBLHxGmVIgSP56C42clrw8HGRU1AOn9FaI1Ee83rhD9AIDwJAFs5T4UMe07NfVUIlN1jxyHvRwyXWjgex+6JbYXmhV9wjQ+taO74aO4cRwKhe0Yi5smGSR7+mzgJhJNdxn+5ntQ==");
      const rsaKeyPairResult = vue.ref("");
      const rsaEncryptResult = vue.ref("");
      const rsaDecryptResult = vue.ref("");
      const rsaSignResult = vue.ref("");
      const rsaVerifyResult = vue.ref("");
      function errorMessage(e = null) {
        if (UTS.isInstanceOf(e, Error)) {
          return e.message;
        }
        return UTS.JSON.stringify(e);
      }
      function handleBase64Encode() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            base64EncodeResult.value = yield base64Encode(base64Input.value);
            base64DecodeResult.value = "";
          } catch (e) {
            base64EncodeResult.value = errorMessage(e);
          }
        });
      }
      function handleBase64Decode() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const target = base64EncodeResult.value.length > 0 ? base64EncodeResult.value : base64Input.value;
            base64DecodeResult.value = yield base64Decode(target);
          } catch (e) {
            base64DecodeResult.value = errorMessage(e);
          }
        });
      }
      function handleMd5() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            md5Result.value = yield md5(hashInput.value);
          } catch (e) {
            md5Result.value = errorMessage(e);
          }
        });
      }
      function handleSha256() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            sha256Result.value = yield sha256(hashInput.value);
          } catch (e) {
            sha256Result.value = errorMessage(e);
          }
        });
      }
      function handleHmac() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            hmacResult.value = yield hmacSha1(hmacText.value, hmacKey.value);
          } catch (e) {
            hmacResult.value = errorMessage(e);
          }
        });
      }
      function handleAesEncrypt() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            aesEncryptResult.value = yield aesEncrypt(aesText.value, aesKey.value);
            aesDecryptResult.value = "";
          } catch (e) {
            aesEncryptResult.value = errorMessage(e);
          }
        });
      }
      function handleAesDecrypt() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            aesDecryptResult.value = yield aesDecrypt(aesEncryptResult.value, aesKey.value);
          } catch (e) {
            aesDecryptResult.value = errorMessage(e);
          }
        });
      }
      function handleDesEncrypt() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            desEncryptResult.value = yield desEncrypt(desText.value, desKey.value);
            desDecryptResult.value = "";
          } catch (e) {
            desEncryptResult.value = errorMessage(e);
          }
        });
      }
      function handleDesDecrypt() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            desDecryptResult.value = yield desDecrypt(desEncryptResult.value, desKey.value);
          } catch (e) {
            desDecryptResult.value = errorMessage(e);
          }
        });
      }
      function handleRsaGenerateKeyPair() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const jsonStr = yield rsaGenerateKeyPair(1024);
            rsaKeyPairResult.value = jsonStr;
            try {
              const keyData = UTS.JSON.parse(jsonStr);
              const pub = (_a = keyData["publicKey"]) !== null && _a !== void 0 ? _a : "";
              if (pub.length > 0) {
                rsaPublicKey.value = pub;
              }
              const pri = (_b = keyData["privateKey"]) !== null && _b !== void 0 ? _b : "";
              if (pri.length > 0) {
                rsaPrivateKey.value = pri;
              }
            } catch (err) {
              uni.__log__("error", "at src/pages/basic/components/CryptoDemoCard.uvue:374", "Failed to parse RSA keypair:", err);
            }
          } catch (e) {
            rsaKeyPairResult.value = errorMessage(e);
          }
        });
      }
      function handleRsaEncrypt() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            rsaEncryptResult.value = yield rsaEncrypt(rsaText.value, rsaPublicKey.value);
            rsaDecryptResult.value = "";
          } catch (e) {
            rsaEncryptResult.value = errorMessage(e);
          }
        });
      }
      function handleRsaDecrypt() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            rsaDecryptResult.value = yield rsaDecrypt(rsaEncryptResult.value, rsaPrivateKey.value);
          } catch (e) {
            rsaDecryptResult.value = errorMessage(e);
          }
        });
      }
      function handleRsaSign() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            rsaSignResult.value = yield rsaSign(rsaText.value, rsaPrivateKey.value, "SHA-256");
            rsaVerifyResult.value = "";
          } catch (e) {
            rsaSignResult.value = errorMessage(e);
          }
        });
      }
      function handleRsaVerify() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const ok = yield rsaVerify(rsaText.value, rsaPublicKey.value, rsaSignResult.value, "SHA-256");
            rsaVerifyResult.value = ok ? "通过 (true)" : "未通过 (false)";
          } catch (e) {
            rsaVerifyResult.value = errorMessage(e);
          }
        });
      }
      const uuidResult = vue.ref("");
      function handleGenerateUUID() {
        uuidResult.value = generateUUID();
      }
      return () => {
        "raw js";
        const _component_input = vue.resolveComponent("input");
        const n97 = vue.createSharedDataComponent(
          Card,
          "254db277",
          { title: "加密解密工具 (crypto)" },
          {
            "default": vue.withSharedDataVaporCtx(() => {
              const n1 = vue.createSharedDataComponentWithFallback(_component_input, "08aaf3b1", {
                value: () => {
                  return base64Input.value;
                },
                "onUpdate:value": () => {
                  return (_value) => {
                    return base64Input.value = _value;
                  };
                },
                placeholder: "请输入要编码的文本",
                class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-12px"
              });
              vue.setSharedData(__sharedData, 1, n1 == null ? void 0 : n1.sharedData);
              vue.setSharedDataEvent(__sharedData, 12, handleBase64Encode);
              vue.setSharedDataEvent(__sharedData, 13, handleBase64Decode);
              vue.renderSharedDataEffect(() => {
                vue.setSharedData(__sharedData, 27, vue.toDisplayString(base64EncodeResult.value));
                vue.setSharedData(__sharedData, 28, vue.toDisplayString(base64DecodeResult.value));
              });
              const n14 = vue.createSharedDataComponentWithFallback(_component_input, "0cb30ea4", {
                value: () => {
                  return hashInput.value;
                },
                "onUpdate:value": () => {
                  return (_value) => {
                    return hashInput.value = _value;
                  };
                },
                placeholder: "请输入要计算摘要的文本",
                class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-12px"
              });
              vue.setSharedData(__sharedData, 2, n14 == null ? void 0 : n14.sharedData);
              vue.setSharedDataEvent(__sharedData, 14, handleMd5);
              vue.setSharedDataEvent(__sharedData, 15, handleSha256);
              vue.renderSharedDataEffect(() => {
                vue.setSharedData(__sharedData, 29, vue.toDisplayString(md5Result.value));
                vue.setSharedData(__sharedData, 30, vue.toDisplayString(sha256Result.value));
              });
              const n27 = vue.createSharedDataComponentWithFallback(_component_input, "0cb38edb", {
                value: () => {
                  return hmacText.value;
                },
                "onUpdate:value": () => {
                  return (_value) => {
                    return hmacText.value = _value;
                  };
                },
                placeholder: "请输入要签名的文本",
                class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-8px"
              });
              vue.setSharedData(__sharedData, 3, n27 == null ? void 0 : n27.sharedData);
              const n28 = vue.createSharedDataComponentWithFallback(_component_input, "0cb3e7ff", {
                value: () => {
                  return hmacKey.value;
                },
                "onUpdate:value": () => {
                  return (_value) => {
                    return hmacKey.value = _value;
                  };
                },
                placeholder: "请输入密钥 key",
                class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-12px"
              });
              vue.setSharedData(__sharedData, 4, n28 == null ? void 0 : n28.sharedData);
              vue.setSharedDataEvent(__sharedData, 16, handleHmac);
              vue.renderSharedDataEffect(() => {
                return vue.setSharedData(__sharedData, 31, vue.toDisplayString(hmacResult.value));
              });
              const n35 = vue.createSharedDataComponentWithFallback(_component_input, "0cb454fb", {
                value: () => {
                  return aesText.value;
                },
                "onUpdate:value": () => {
                  return (_value) => {
                    return aesText.value = _value;
                  };
                },
                placeholder: "请输入要加密的文本",
                class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-8px"
              });
              vue.setSharedData(__sharedData, 5, n35 == null ? void 0 : n35.sharedData);
              const n36 = vue.createSharedDataComponentWithFallback(_component_input, "0cb45cbe", {
                value: () => {
                  return aesKey.value;
                },
                "onUpdate:value": () => {
                  return (_value) => {
                    return aesKey.value = _value;
                  };
                },
                placeholder: "请输入 16 位密钥",
                class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-12px"
              });
              vue.setSharedData(__sharedData, 6, n36 == null ? void 0 : n36.sharedData);
              vue.setSharedDataEvent(__sharedData, 17, handleAesEncrypt);
              vue.setSharedDataEvent(__sharedData, 18, handleAesDecrypt);
              vue.renderSharedDataEffect(() => {
                vue.setSharedData(__sharedData, 32, vue.toDisplayString(aesEncryptResult.value));
                vue.setSharedData(__sharedData, 33, vue.toDisplayString(aesDecryptResult.value));
              });
              const n49 = vue.createSharedDataComponentWithFallback(_component_input, "0cb4dfbc", {
                value: () => {
                  return desText.value;
                },
                "onUpdate:value": () => {
                  return (_value) => {
                    return desText.value = _value;
                  };
                },
                placeholder: "请输入要加密的文本",
                class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-8px"
              });
              vue.setSharedData(__sharedData, 7, n49 == null ? void 0 : n49.sharedData);
              const n50 = vue.createSharedDataComponentWithFallback(_component_input, "0cb4e77f", {
                value: () => {
                  return desKey.value;
                },
                "onUpdate:value": () => {
                  return (_value) => {
                    return desKey.value = _value;
                  };
                },
                placeholder: "请输入 8 位密钥",
                class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-12px"
              });
              vue.setSharedData(__sharedData, 8, n50 == null ? void 0 : n50.sharedData);
              vue.setSharedDataEvent(__sharedData, 19, handleDesEncrypt);
              vue.setSharedDataEvent(__sharedData, 20, handleDesDecrypt);
              vue.renderSharedDataEffect(() => {
                vue.setSharedData(__sharedData, 34, vue.toDisplayString(desEncryptResult.value));
                vue.setSharedData(__sharedData, 35, vue.toDisplayString(desDecryptResult.value));
              });
              const n63 = vue.createSharedDataComponentWithFallback(_component_input, "0cb5b979", {
                value: () => {
                  return rsaText.value;
                },
                "onUpdate:value": () => {
                  return (_value) => {
                    return rsaText.value = _value;
                  };
                },
                placeholder: "请输入要加密 / 签名的文本",
                class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-8px"
              });
              vue.setSharedData(__sharedData, 9, n63 == null ? void 0 : n63.sharedData);
              vue.setSharedDataEvent(__sharedData, 21, handleRsaGenerateKeyPair);
              vue.setSharedDataEvent(__sharedData, 22, handleRsaEncrypt);
              const n69 = vue.createSharedDataComponentWithFallback(_component_input, "0cb5d43e", {
                value: () => {
                  return rsaPublicKey.value;
                },
                "onUpdate:value": () => {
                  return (_value) => {
                    return rsaPublicKey.value = _value;
                  };
                },
                placeholder: "RSA 公钥（PKCS#1 / SPKI，PEM 或 Base64）",
                class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-8px"
              });
              vue.setSharedData(__sharedData, 10, n69 == null ? void 0 : n69.sharedData);
              const n70 = vue.createSharedDataComponentWithFallback(_component_input, "0cb62dbe", {
                value: () => {
                  return rsaPrivateKey.value;
                },
                "onUpdate:value": () => {
                  return (_value) => {
                    return rsaPrivateKey.value = _value;
                  };
                },
                placeholder: "RSA 私钥（PKCS#1 / PKCS#8，PEM 或 Base64）",
                class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-13px text-__334155_ mb-12px"
              });
              vue.setSharedData(__sharedData, 11, n70 == null ? void 0 : n70.sharedData);
              vue.setSharedDataEvent(__sharedData, 23, handleRsaDecrypt);
              vue.setSharedDataEvent(__sharedData, 24, handleRsaSign);
              vue.setSharedDataEvent(__sharedData, 25, handleRsaVerify);
              vue.setSharedDataEvent(__sharedData, 26, handleGenerateUUID);
              vue.renderSharedDataEffect(() => {
                vue.setSharedData(__sharedData, 36, vue.toDisplayString(rsaKeyPairResult.value));
                vue.setSharedData(__sharedData, 37, vue.toDisplayString(rsaEncryptResult.value));
                vue.setSharedData(__sharedData, 38, vue.toDisplayString(rsaDecryptResult.value));
                vue.setSharedData(__sharedData, 39, vue.toDisplayString(rsaSignResult.value));
                vue.setSharedData(__sharedData, 40, vue.toDisplayString(rsaVerifyResult.value));
                vue.setSharedData(__sharedData, 41, vue.toDisplayString(uuidResult.value));
              });
            })
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n97.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1r = {};
  const CryptoDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$1q, [["styles", [_style_0$1r]]]);
  const __className$1o = "GenSrcPagesBasicComponentsSystemInfoDemoCard";
  const _sfc_main$1p = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1o,
    __filename: "src/pages/basic/components/SystemInfoDemoCard.uvue",
    __name: "SystemInfoDemoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsSystemInfoDemoCardSharedData", sharedDataClassId: 0 })));
      const screenWidth = vue.computed(() => {
        var _a, _b;
        return (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.screenWidth) !== null && _b !== void 0 ? _b : 0;
      });
      const screenHeight = vue.computed(() => {
        var _a, _b;
        return (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.screenHeight) !== null && _b !== void 0 ? _b : 0;
      });
      const windowWidth = vue.computed(() => {
        var _a, _b;
        return (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.windowWidth) !== null && _b !== void 0 ? _b : 0;
      });
      const windowHeight = vue.computed(() => {
        var _a, _b;
        return (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.windowHeight) !== null && _b !== void 0 ? _b : 0;
      });
      const statusBarHeight = vue.computed(() => {
        var _a, _b;
        return (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.statusBarHeight) !== null && _b !== void 0 ? _b : 0;
      });
      const pixelRatio = vue.computed(() => {
        var _a, _b;
        return (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.pixelRatio) !== null && _b !== void 0 ? _b : 1;
      });
      const safeAreaTop = vue.computed(() => {
        return safeAreaInsets.value != null ? `${safeAreaInsets.value.top}px` : "N/A";
      });
      const safeAreaBottom = vue.computed(() => {
        return safeAreaInsets.value != null ? `${safeAreaInsets.value.bottom}px` : "N/A";
      });
      const safeAreaLeft = vue.computed(() => {
        return safeAreaInsets.value != null ? `${safeAreaInsets.value.left}px` : "N/A";
      });
      const safeAreaRight = vue.computed(() => {
        return safeAreaInsets.value != null ? `${safeAreaInsets.value.right}px` : "N/A";
      });
      return () => {
        "raw js";
        const n34 = vue.createSharedDataComponent(
          Card,
          "e90ea59a",
          { title: "系统与安全区域信息" },
          {
            "default": () => {
              vue.renderSharedDataEffect(() => {
                vue.setSharedData(__sharedData, 1, vue.toDisplayString(safeAreaTop.value));
                vue.setSharedData(__sharedData, 2, vue.toDisplayString(safeAreaBottom.value));
                vue.setSharedData(__sharedData, 3, vue.toDisplayString(safeAreaLeft.value));
                vue.setSharedData(__sharedData, 4, vue.toDisplayString(safeAreaRight.value));
                vue.setSharedData(__sharedData, 5, vue.toDisplayString(screenWidth.value));
                vue.setSharedData(__sharedData, 6, vue.toDisplayString(screenHeight.value));
                vue.setSharedData(__sharedData, 7, vue.toDisplayString(windowWidth.value));
                vue.setSharedData(__sharedData, 8, vue.toDisplayString(windowHeight.value));
                vue.setSharedData(__sharedData, 9, vue.toDisplayString(statusBarHeight.value));
                vue.setSharedData(__sharedData, 10, vue.toDisplayString(pixelRatio.value));
              });
            }
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n34.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1q = {};
  const SystemInfoDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$1p, [["styles", [_style_0$1q]]]);
  const __className$1n = "GenSrcPagesBasicComponentsZPagingDemoCard";
  class CompactArticleItem extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            id: { type: Number, optional: false },
            title: { type: String, optional: false },
            summary: { type: String, optional: false },
            tag: { type: String, optional: false },
            tagBgColor: { type: String, optional: false },
            tagColor: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = CompactArticleItem.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.id = this.__props__.id;
      this.title = this.__props__.title;
      this.summary = this.__props__.summary;
      this.tag = this.__props__.tag;
      this.tagBgColor = this.__props__.tagBgColor;
      this.tagColor = this.__props__.tagColor;
      delete this.__props__;
    }
  }
  const _sfc_main$1o = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1n,
    __filename: "src/pages/basic/components/ZPagingDemoCard.uvue",
    __name: "ZPagingDemoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsZPagingDemoCardSharedData", sharedDataClassId: 0 })));
      const shouldFail = vue.ref(false);
      const tabList = ["全部", "技术", "设计"];
      const tabIndex = vue.ref(0);
      const pagingX = vue.ref(null);
      const dataList = vue.ref([]);
      function onUpdateModelValue(val) {
        dataList.value = val;
      }
      function tabChange(index) {
        tabIndex.value = index;
        if (pagingX.value != null) {
          pagingX.value.$callMethod("reload");
        }
      }
      function triggerError() {
        shouldFail.value = true;
        if (pagingX.value != null) {
          pagingX.value.$callMethod("reload");
        }
      }
      function triggerClear() {
        dataList.value = [];
        if (pagingX.value != null) {
          pagingX.value.$callMethod("complete", []);
        }
      }
      function getMockArticles(category, pageNo, pageSize) {
        const list = [];
        const start = (pageNo - 1) * pageSize;
        for (let i = 0; i < pageSize; i++) {
          const itemId = start + i + 1;
          if (itemId > 12) {
            break;
          }
          let tag = category;
          if (category == "全部") {
            tag = itemId % 2 == 0 ? "技术" : "设计";
          }
          let tagBgColor = "#e0f2fe";
          let tagColor = "#0284c7";
          if (tag == "设计") {
            tagBgColor = "#f3e8ff";
            tagColor = "#7c3aed";
          }
          list.push(new CompactArticleItem({
            id: itemId,
            title: `${tag}动态 · 原生探索第 ${itemId} 篇`,
            summary: `卡片演示中的 ${tag} 文章，支持局部滚动加载数据。`,
            tag,
            tagBgColor,
            tagColor
          }));
        }
        return list;
      }
      function onQuery(pageNo, pageSize) {
        const currentCategory = tabList[tabIndex.value];
        setTimeout(() => {
          if (shouldFail.value) {
            shouldFail.value = false;
            if (pagingX.value != null) {
              pagingX.value.$callMethod("completeByError");
            }
            return null;
          }
          const data = getMockArticles(currentCategory, pageNo, pageSize);
          if (pagingX.value != null) {
            pagingX.value.$callMethod("complete", data);
          }
        }, 600);
      }
      return () => {
        "raw js";
        const _setTemplateRef = vue.createSharedDataTemplateRefSetter();
        const _component_z_paging_x = vue.resolveComponent("z-paging-x");
        const n26 = vue.createSharedDataComponent(
          Card,
          "78fa5fc8",
          { title: "数据分页列表 (z-paging-x)" },
          {
            "default": vue.withSharedDataVaporCtx(() => {
              vue.setSharedDataEvent(__sharedData, 4, triggerError);
              vue.setSharedDataEvent(__sharedData, 5, triggerClear);
              const _selector9_0 = vue.createSharedDataSelector(() => {
                return tabIndex.value;
              });
              const _selector9_1 = vue.createSharedDataSelector(() => {
                return tabIndex.value;
              });
              const n9 = vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 3, vue.createSharedDataVFor(__sharedDataScope, () => {
                return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$1n}SharedData`, sharedDataClassId: 1 });
              })), () => {
                return tabList;
              }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                vue.setSharedDataEvent(__sharedData_VFor0, 1, () => {
                  return tabChange(_for_key0.value);
                });
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedData(__sharedData_VFor0, 4, vue.toDisplayString(_for_item0.value));
                });
                _selector9_0(_for_key0.value, () => {
                  vue.setSharedDataStyle(__sharedData_VFor0, 2, { backgroundColor: tabIndex.value === _for_key0.value ? "#ffffff" : "transparent" });
                });
                _selector9_1(_for_key0.value, () => {
                  vue.setSharedDataStyle(__sharedData_VFor0, 3, { color: tabIndex.value === _for_key0.value ? "var(--theme-color, #37c2bc)" : "#64748b" });
                });
                return null;
              }, (__sharedData_VFor0, tab, index) => {
                return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(index));
              }, 1);
              n9.onReset(_selector9_0.reset);
              n9.onReset(_selector9_1.reset);
              const n25 = vue.createSharedDataComponentWithFallback(_component_z_paging_x, "5850176f", {
                "list-is": "scroll-view",
                "model-value": () => {
                  return dataList.value;
                },
                "default-page-size": 10,
                "paging-style": { height: "200px", border: "1px solid #edf2f7", borderTopWidth: "0px", borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px", backgroundColor: "#f8fafc" },
                "onUpdate:modelValue": () => {
                  return onUpdateModelValue;
                },
                onQuery: () => {
                  return onQuery;
                }
              }, {
                "default": () => {
                  vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 2, vue.createSharedDataVFor(__sharedDataScope, () => {
                    return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$1n}SharedData`, sharedDataClassId: 2 });
                  })), () => {
                    return dataList.value;
                  }, (__sharedData_VFor1, _for_item1) => {
                    let _item;
                    vue.renderSharedDataEffect(() => {
                      _item = _for_item1.value;
                      vue.setSharedDataStyle(__sharedData_VFor1, 1, { backgroundColor: _item.tagBgColor, padding: "1px 6px", borderRadius: "4px" });
                      vue.setSharedDataStyle(__sharedData_VFor1, 2, { color: _item.tagColor, fontSize: "9px", fontWeight: "bold" });
                      vue.setSharedData(__sharedData_VFor1, 3, vue.toDisplayString(_item.tag));
                      vue.setSharedData(__sharedData_VFor1, 5, vue.toDisplayString(_item.title));
                      vue.setSharedData(__sharedData_VFor1, 6, vue.toDisplayString(_item.summary));
                    });
                    vue.setSharedData(__sharedData_VFor1, 4, vue.toDisplayString(_item.id));
                    return null;
                  }, (__sharedData_VFor1, item) => {
                    return vue.setSharedData(__sharedData_VFor1, 0, vue.toDisplayString(item.id));
                  }, 32);
                }
              });
              vue.setSharedData(__sharedData, 1, n25 == null ? void 0 : n25.sharedData);
              _setTemplateRef(n25, pagingX, null, "pagingX");
            })
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n26.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1p = {};
  const ZPagingDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$1o, [["styles", [_style_0$1p]]]);
  const __className$1m = "GenSrcPagesBasicComponentsUViewUltraDemoCard";
  const _sfc_main$1n = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1m,
    __filename: "src/pages/basic/components/UViewUltraDemoCard.uvue",
    __name: "UViewUltraDemoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsUViewUltraDemoCardSharedData", sharedDataClassId: 0 })));
      function copyWebsiteUrl() {
        uni.setClipboardData({
          data: "https://uview-ultra.lingyun.net/",
          success: () => {
            uni.showToast({
              title: "官网网址已复制到剪贴板",
              icon: "none"
            });
          }
        });
      }
      function navigateToShowcase() {
        uni.navigateTo({
          url: "/src/sub/uview-ultra/uview-ultra",
          fail: (err) => {
            uni.__log__("error", "at src/pages/basic/components/UViewUltraDemoCard.uvue:58", "navigateToShowcase fail:", err);
          }
        });
      }
      return () => {
        "raw js";
        const n15 = vue.createSharedDataComponent(
          Card,
          "169f0af0",
          { title: "uview-ultra 组件库" },
          {
            "default": () => {
              vue.setSharedDataEvent(__sharedData, 1, copyWebsiteUrl);
              vue.setSharedDataEvent(__sharedData, 2, navigateToShowcase);
            }
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n15.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1o = {};
  const UViewUltraDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$1n, [["styles", [_style_0$1o]]]);
  const __className$1l = "GenSrcPagesBasicBasic";
  const _sfc_main$1m = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1l,
    __filename: "src/pages/basic/basic.uvue",
    __name: "basic",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicBasicSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcPagesBasicBasicSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      vue.onBackPress((options) => {
        if (options.from == "backbutton") {
          return handleBackPressExit();
        }
        return false;
      });
      vue.onResize(() => {
        updateSystemInfo();
      });
      return () => {
        "raw js";
        const n16 = vue.createSharedDataComponent(AppKu, "56ab5a5a", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n0 = vue.createSharedDataComponent(UViewUltraDemoCard, "5360e8b4");
            vue.setSharedData(__sharedData, 1, n0.sharedData);
            const n1 = vue.createSharedDataComponent(LodashDemoCard, "5360e9aa");
            vue.setSharedData(__sharedData, 2, n1.sharedData);
            const n2 = vue.createSharedDataComponent(CryptoDemoCard, "5360ecf1");
            vue.setSharedData(__sharedData, 3, n2.sharedData);
            const n3 = vue.createSharedDataComponent(PropsDemoCard, "5360f035");
            vue.setSharedData(__sharedData, 4, n3.sharedData);
            const n4 = vue.createSharedDataComponent(ZPagingDemoCard, "5360f0f3");
            vue.setSharedData(__sharedData, 5, n4.sharedData);
            const n5 = vue.createSharedDataComponent(SystemInfoDemoCard, "5360f432");
            vue.setSharedData(__sharedData, 6, n5.sharedData);
            const n6 = vue.createSharedDataComponent(IconDemoCard, "5360f4d4");
            vue.setSharedData(__sharedData, 7, n6.sharedData);
            const n7 = vue.createSharedDataComponent(LangSwitchCard, "5360f811");
            vue.setSharedData(__sharedData, 8, n7.sharedData);
            const n8 = vue.createSharedDataComponent(ThemeSwitchCard, "5360f8af");
            vue.setSharedData(__sharedData, 9, n8.sharedData);
            const n9 = vue.createSharedDataComponent(TimeDemoCard, "5360fc11");
            vue.setSharedData(__sharedData, 10, n9.sharedData);
            const n10 = vue.createSharedDataComponent(RouterDemoCard, "5360ff3a");
            vue.setSharedData(__sharedData, 11, n10.sharedData);
            const n11 = vue.createSharedDataComponent(HttpDemoCard, "5360fff1");
            vue.setSharedData(__sharedData, 12, n11.sharedData);
            const n12 = vue.createSharedDataComponent(EchartsDemoCard, "5361031b");
            vue.setSharedData(__sharedData, 13, n12.sharedData);
            const n13 = vue.createSharedDataComponent(SignatureCard, "536103f0");
            vue.setSharedData(__sharedData, 14, n13.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n16.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1n = {};
  const SrcPagesBasicBasic = /* @__PURE__ */ _export_sfc(_sfc_main$1m, [["styles", [_style_0$1n]]]);
  class EnvConfig extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            name: { type: String, optional: false },
            baseURL: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = EnvConfig.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.name = this.__props__.name;
      this.baseURL = this.__props__.baseURL;
      delete this.__props__;
    }
  }
  const devConfig = new EnvConfig({
    name: "开发环境",
    baseURL: "http://localhost:3000"
  });
  const testConfig = new EnvConfig({
    name: "测试环境",
    baseURL: "https://test-api.example.com"
  });
  const prodConfig = new EnvConfig(
    {
      name: "生产环境",
      baseURL: "https://api.example.com"
    }
    // ----- 编译期自动识别 -----
    // uni-app X 中：HBuilderX「运行」→ 'development'，「发行」→ 'production'
  );
  const systemEnv = "production";
  let overrideEnv = null;
  function getSystemEnv() {
    return systemEnv;
  }
  function getCurrentEnv() {
    const env = overrideEnv;
    if (env != null) {
      return env;
    }
    return systemEnv;
  }
  function setCurrentEnv(env) {
    overrideEnv = env;
  }
  function resetEnv() {
    overrideEnv = null;
  }
  function getEnvConfigFor(env) {
    if (env === "test") {
      return testConfig;
    }
    if (env === "production") {
      return prodConfig;
    }
    return devConfig;
  }
  function getEnvLabel(type) {
    if (type === "development") {
      return "开发";
    }
    if (type === "test") {
      return "测试";
    }
    if (type === "production") {
      return "生产";
    }
    return "未知";
  }
  const __className$1k = "GenSrcPagesFunctionComponentsEnvCard";
  const COLOR_DEV = "#10b981";
  const COLOR_TEST = "#f59e0b";
  const COLOR_PROD = "#ef4444";
  const COLOR_BG = "#e2e8f0";
  const COLOR_WHITE = "#ffffff";
  const COLOR_DARK = "#475569";
  const _sfc_main$1l = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1k,
    __filename: "src/pages/function/components/EnvCard.uvue",
    __name: "EnvCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionComponentsEnvCardSharedData", sharedDataClassId: 0 })));
      const systemEnv2 = getSystemEnv();
      const systemEnvLabel = vue.computed(() => {
        return "生产";
      });
      const currentEnv = vue.ref(getCurrentEnv());
      const isOverridden = vue.computed(() => {
        return currentEnv.value !== systemEnv2;
      });
      const currentEnvLabel = vue.computed(() => {
        return getEnvLabel(currentEnv.value);
      });
      const envColor = vue.computed(() => {
        if (currentEnv.value === "development") {
          return COLOR_DEV;
        }
        if (currentEnv.value === "test") {
          return COLOR_TEST;
        }
        return COLOR_PROD;
      });
      const envConfig = vue.computed(() => {
        return getEnvConfigFor(currentEnv.value);
      });
      const devBtnBg = vue.computed(() => {
        return currentEnv.value === "development" ? COLOR_DEV : COLOR_BG;
      });
      const devBtnText = vue.computed(() => {
        return currentEnv.value === "development" ? COLOR_WHITE : COLOR_DARK;
      });
      const testBtnBg = vue.computed(() => {
        return currentEnv.value === "test" ? COLOR_TEST : COLOR_BG;
      });
      const testBtnText = vue.computed(() => {
        return currentEnv.value === "test" ? COLOR_WHITE : COLOR_DARK;
      });
      const prodBtnBg = vue.computed(() => {
        return currentEnv.value === "production" ? COLOR_PROD : COLOR_BG;
      });
      const prodBtnText = vue.computed(() => {
        return currentEnv.value === "production" ? COLOR_WHITE : COLOR_DARK;
      });
      function switchEnv(type) {
        const env = type;
        setCurrentEnv(env);
        currentEnv.value = env;
        const label = getEnvLabel(env);
        uni.showToast({
          title: `已切换至${label}环境`,
          icon: "none",
          duration: 1500
        });
      }
      function handleReset() {
        resetEnv();
        currentEnv.value = systemEnv2;
        uni.showToast({
          title: "已重置为系统默认环境",
          icon: "none",
          duration: 1500
        });
      }
      return () => {
        "raw js";
        const n24 = vue.createSharedDataComponent(
          Card,
          "5df1cdee",
          { title: "环境变量" },
          {
            "default": () => {
              vue.setSharedDataEvent(__sharedData, 1, () => {
                return switchEnv("development");
              });
              vue.setSharedDataEvent(__sharedData, 2, () => {
                return switchEnv("test");
              });
              vue.setSharedDataEvent(__sharedData, 3, () => {
                return switchEnv("production");
              });
              vue.setSharedDataEvent(__sharedData, 4, handleReset);
              vue.renderSharedDataEffect(() => {
                vue.setSharedData(__sharedData, 5, vue.toDisplayString(systemEnvLabel.value));
                vue.setSharedDataStyle(__sharedData, 6, { color: envColor.value });
                vue.setSharedData(__sharedData, 7, vue.toDisplayString(currentEnvLabel.value));
                vue.setSharedData(__sharedData, 8, vue.toDisplayString(envConfig.value.baseURL));
                vue.setSharedData(__sharedData, 9, vue.toDisplayString(isOverridden.value ? "是" : "否"));
                vue.setSharedDataStyle(__sharedData, 10, { backgroundColor: devBtnBg.value });
                vue.setSharedDataStyle(__sharedData, 11, { color: devBtnText.value });
                vue.setSharedDataStyle(__sharedData, 12, { backgroundColor: testBtnBg.value });
                vue.setSharedDataStyle(__sharedData, 13, { color: testBtnText.value });
                vue.setSharedDataStyle(__sharedData, 14, { backgroundColor: prodBtnBg.value });
                vue.setSharedDataStyle(__sharedData, 15, { color: prodBtnText.value });
              });
            }
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n24.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1m = {};
  const EnvCard = /* @__PURE__ */ _export_sfc(_sfc_main$1l, [["styles", [_style_0$1m]]]);
  const __className$1j = "GenSrcPagesFunctionComponentsSystemInfoCard";
  const _sfc_main$1k = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1j,
    __filename: "src/pages/function/components/SystemInfoCard.uvue",
    __name: "SystemInfoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionComponentsSystemInfoCardSharedData", sharedDataClassId: 0 })));
      const sysBrand = vue.ref("");
      const sysModel = vue.ref("");
      const sysSystem = vue.ref("");
      const sysPlatform = vue.ref("");
      function fetchSystemInfo() {
        var _a, _b, _c, _d;
        try {
          const info = uni.getSystemInfoSync();
          sysBrand.value = (_a = info.brand) !== null && _a !== void 0 ? _a : "";
          sysModel.value = (_b = info.model) !== null && _b !== void 0 ? _b : "";
          sysSystem.value = (_c = info.system) !== null && _c !== void 0 ? _c : "";
          sysPlatform.value = (_d = info.uniPlatform) !== null && _d !== void 0 ? _d : "";
        } catch (err) {
          uni.__log__("error", "at src/pages/function/components/SystemInfoCard.uvue:45", err);
        }
      }
      vue.onMounted(() => {
        fetchSystemInfo();
      });
      return () => {
        "raw js";
        const n15 = vue.createSharedDataComponent(
          Card,
          "031f20ce",
          { title: "设备系统信息" },
          {
            "default": () => {
              vue.setSharedDataEvent(__sharedData, 1, fetchSystemInfo);
              vue.renderSharedDataEffect(() => {
                const _sysBrand = sysBrand.value;
                const _sysModel = sysModel.value;
                const _sysSystem = sysSystem.value;
                const _sysPlatform = sysPlatform.value;
                vue.setSharedData(__sharedData, 2, vue.toDisplayString(_sysBrand !== "" ? _sysBrand : "暂无数据"));
                vue.setSharedData(__sharedData, 3, vue.toDisplayString(_sysModel !== "" ? _sysModel : "暂无数据"));
                vue.setSharedData(__sharedData, 4, vue.toDisplayString(_sysSystem !== "" ? _sysSystem : "暂无数据"));
                vue.setSharedData(__sharedData, 5, vue.toDisplayString(_sysPlatform !== "" ? _sysPlatform : "暂无数据"));
              });
            }
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n15.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1l = {};
  const SystemInfoCard = /* @__PURE__ */ _export_sfc(_sfc_main$1k, [["styles", [_style_0$1l]]]);
  const __className$1i = "GenSrcPagesFunctionComponentsHapticsCard";
  const _sfc_main$1j = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1i,
    __filename: "src/pages/function/components/HapticsCard.uvue",
    __name: "HapticsCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionComponentsHapticsCardSharedData", sharedDataClassId: 0 })));
      const copyText = vue.ref("Hello unibestX!");
      function triggerVibration() {
        uni.vibrateShort({
          type: "light",
          success: () => {
            uni.showToast({ title: "已触发短震动", icon: "none" });
          },
          fail: () => {
            uni.showToast({ title: "震动触发失败", icon: "none" });
          }
        });
      }
      function handleCopy() {
        if (copyText.value === "")
          return null;
        uni.setClipboardData({
          data: copyText.value,
          success: () => {
            uni.showToast({
              title: "复制成功",
              icon: "success"
            });
          }
        });
      }
      return () => {
        "raw js";
        const _component_input = vue.resolveComponent("input");
        const n8 = vue.createSharedDataComponent(
          Card,
          "91c87b06",
          { title: "触感与工具" },
          {
            "default": vue.withSharedDataVaporCtx(() => {
              const n1 = vue.createSharedDataComponentWithFallback(_component_input, "5f35197f", {
                value: () => {
                  return copyText.value;
                },
                "onUpdate:value": () => {
                  return (_value) => {
                    return copyText.value = _value;
                  };
                },
                placeholder: "请输入要复制的文本",
                class: "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-14px text-__334155_ mb-12px"
              });
              vue.setSharedData(__sharedData, 1, n1 == null ? void 0 : n1.sharedData);
              vue.setSharedDataEvent(__sharedData, 2, handleCopy);
              vue.setSharedDataEvent(__sharedData, 3, triggerVibration);
            })
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n8.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1k = {};
  const HapticsCard = /* @__PURE__ */ _export_sfc(_sfc_main$1j, [["styles", [_style_0$1k]]]);
  const __className$1h = "GenSrcPagesFunctionComponentsMediaCard";
  const _sfc_main$1i = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1h,
    __filename: "src/pages/function/components/MediaCard.uvue",
    __name: "MediaCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionComponentsMediaCardSharedData", sharedDataClassId: 0 })));
      const photoUrl = vue.ref("");
      const scanResult = vue.ref("");
      function chooseImage() {
        uni.chooseImage(new UTSJSONObject({
          count: 1,
          success: (res) => {
            const paths = res.tempFilePaths;
            if (paths.length > 0) {
              photoUrl.value = paths[0];
            }
          },
          fail: (err) => {
            uni.__log__("error", "at src/pages/function/components/MediaCard.uvue:39", err);
          }
        }));
      }
      function scanCode() {
        uni.scanCode(new UTSJSONObject({
          success: (res) => {
            scanResult.value = res.result;
          },
          fail: (err) => {
            uni.__log__("error", "at src/pages/function/components/MediaCard.uvue:50", err);
          }
        }));
      }
      return () => {
        "raw js";
        const n13 = vue.createSharedDataComponent(
          Card,
          "679fa9a5",
          { title: "相机与多媒体" },
          {
            "default": () => {
              vue.createSharedDataIf(() => {
                return vue.setSharedData(__sharedData, 1, vue.toSharedDataBoolean(photoUrl.value === ""));
              }, () => {
              }, () => {
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedDataAttr(__sharedData, 2, vue.toSharedDataString(photoUrl.value));
                });
              }, 261);
              vue.setSharedDataEvent(__sharedData, 3, chooseImage);
              vue.setSharedDataEvent(__sharedData, 4, scanCode);
              vue.renderSharedDataEffect(() => {
                const _scanResult = scanResult.value;
                vue.setSharedData(__sharedData, 5, vue.toDisplayString(_scanResult !== "" ? _scanResult : "暂无数据"));
              });
            }
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n13.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1j = {};
  const MediaCard = /* @__PURE__ */ _export_sfc(_sfc_main$1i, [["styles", [_style_0$1j]]]);
  const __className$1g = "GenSrcPagesFunctionFunction";
  const _sfc_main$1h = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1g,
    __filename: "src/pages/function/function.uvue",
    __name: "function",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionFunctionSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcPagesFunctionFunctionSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      vue.onBackPress((options) => {
        if (options.from == "backbutton") {
          return handleBackPressExit();
        }
        return false;
      });
      return () => {
        "raw js";
        const n8 = vue.createSharedDataComponent(AppKu, "13021a83", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n3 = vue.createSharedDataComponent(EnvCard, "5ae58bc7");
            vue.setSharedData(__sharedData, 1, n3.sharedData);
            const n4 = vue.createSharedDataComponent(SystemInfoCard, "5ae58c40");
            vue.setSharedData(__sharedData, 2, n4.sharedData);
            const n5 = vue.createSharedDataComponent(HapticsCard, "5ae58cc1");
            vue.setSharedData(__sharedData, 3, n5.sharedData);
            const n6 = vue.createSharedDataComponent(MediaCard, "5ae58fcb");
            vue.setSharedData(__sharedData, 4, n6.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n8.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1i = {};
  const SrcPagesFunctionFunction = /* @__PURE__ */ _export_sfc(_sfc_main$1h, [["styles", [_style_0$1i]]]);
  const _style_0$1h = {};
  const _style_1$1c = {};
  const __className$1f = "GenSrcPagesAiAi";
  class ChatMessage extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            id: { type: String, optional: false },
            sender: { type: String, optional: false },
            content: { type: String, optional: false },
            time: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = ChatMessage.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.id = this.__props__.id;
      this.sender = this.__props__.sender;
      this.content = this.__props__.content;
      this.time = this.__props__.time;
      delete this.__props__;
    }
  }
  const _sfc_main$1g = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1f,
    __filename: "src/pages/ai/ai.uvue",
    __name: "ai",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesAiAiSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcPagesAiAiSharedData", sharedDataClassId: 0 })));
      const __sharedDataScope = vue.useSharedDataScope(__sharedData);
      const messages = vue.ref([]);
      const inputText = vue.ref("");
      const isTyping = vue.ref(false);
      const scrollTop = vue.ref(0);
      function isAiMessage(sender) {
        return sender == "ai";
      }
      const safeAreaBottom = vue.computed(() => {
        const insets = safeAreaInsets.value;
        if (insets != null) {
          return insets.bottom;
        }
        return 0;
      });
      function getCurrentTime() {
        const date = /* @__PURE__ */ new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const hStr = hours < 10 ? `0${hours}` : `${hours}`;
        const mStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
        return `${hStr}:${mStr}`;
      }
      function scrollToBottom() {
        setTimeout(() => {
          scrollTop.value = scrollTop.value + 1e3;
        }, 100);
      }
      function sendMessage() {
        const text = inputText.value.trim();
        if (text == "")
          return null;
        const userMsgId = Date.now().toString();
        messages.value.push(new ChatMessage({
          id: userMsgId,
          sender: "user",
          content: text,
          time: getCurrentTime()
        }));
        inputText.value = "";
        scrollToBottom();
        isTyping.value = true;
        setTimeout(() => {
          isTyping.value = false;
          let replyContent = "收到你的消息！目前这只是一个模拟的 AI 对话窗口，你可以在此基础上接入你自己的大语言模型（如 DeepSeek、OpenAI、Gemini等）。";
          if (text.includes("你好") || text.includes("hello")) {
            replyContent = "你好！我是你的 AI 助手，很高兴为你提供服务。有什么我可以帮你的吗？😊";
          } else if (text.includes("模板") || text.includes("unibest")) {
            replyContent = "unibestX 是基于 uni-app X 极速开发模板。它支持 TypeScript、UnoCSS、UTS 插件，并能完美编译为原生 Android/iOS App！";
          } else if (text.includes("组件")) {
            replyContent = "当前模板内置了许多优秀的组件，例如 NavBar 导航栏、uview UI 库组件等，你都可以直接使用。";
          }
          messages.value.push(new ChatMessage({
            id: Date.now().toString(),
            sender: "ai",
            content: replyContent,
            time: getCurrentTime()
          }));
          scrollToBottom();
        }, 800);
      }
      vue.onMounted(() => {
        messages.value.push(new ChatMessage({
          id: "welcome",
          sender: "ai",
          content: "你好！我是你的 AI 智能助手。你可以询问我任何关于本应用的问题，或者只是和我随便聊聊！✨",
          time: getCurrentTime()
        }));
      });
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_input = vue.resolveComponent("input");
        const _component_uni_icons = vue.resolveComponent("uni-icons");
        const n36 = vue.createSharedDataComponent(AppKu, "9242dfba", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "24f374cd", {
              title: "AI 智能助手",
              "show-back": true
            });
            vue.setSharedData(__sharedData, 1, n0 == null ? void 0 : n0.sharedData);
            vue.renderSharedDataEffect(() => {
              return vue.setSharedDataAttr(__sharedData, 7, vue.toSharedDataNumber(vue.unref(scrollTop)));
            });
            vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 2, vue.createSharedDataVFor(__sharedDataScope, () => {
              return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$1f}SharedData`, sharedDataClassId: 1 });
            })), () => {
              return vue.unref(messages);
            }, (__sharedData_VFor0, _for_item0) => {
              vue.createSharedDataIf(() => {
                return vue.setSharedData(__sharedData_VFor0, 1, vue.toSharedDataBoolean(isAiMessage(_for_item0.value.sender)));
              }, () => {
                vue.renderSharedDataEffect(() => {
                  const _msg = _for_item0.value;
                  vue.setSharedData(__sharedData_VFor0, 2, vue.toDisplayString(_msg.content));
                  vue.setSharedData(__sharedData_VFor0, 3, vue.toDisplayString(_msg.time));
                });
              }, () => {
                vue.renderSharedDataEffect(() => {
                  const _msg = _for_item0.value;
                  vue.setSharedData(__sharedData_VFor0, 4, vue.toDisplayString(_msg.content));
                  vue.setSharedData(__sharedData_VFor0, 5, vue.toDisplayString(_msg.time));
                });
              }, 261);
              return null;
            }, (__sharedData_VFor0, msg) => {
              return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(msg.id));
            });
            vue.createSharedDataIf(() => {
              return vue.setSharedData(__sharedData, 3, vue.toSharedDataBoolean(vue.unref(isTyping)));
            }, () => {
            });
            vue.renderSharedDataEffect(() => {
              const _safeAreaBottom = vue.unref(safeAreaBottom);
              vue.setSharedDataStyle(__sharedData, 8, { height: `${_safeAreaBottom + 70}px` });
              vue.setSharedDataStyle(__sharedData, 9, { paddingBottom: `${_safeAreaBottom + 10}px` });
            });
            const n30 = vue.createSharedDataComponentWithFallback(_component_input, "94309c5c", {
              value: () => {
                return vue.unref(inputText);
              },
              "onUpdate:value": () => {
                return (_value) => {
                  return vue.isRef(inputText) ? inputText.value = _value : null;
                };
              },
              type: "text",
              placeholder: "和 AI 助手聊点什么吧...",
              "placeholder-style": "color: #94a3b8",
              class: "chat-input",
              "confirm-type": "send",
              onConfirm: () => {
                return sendMessage;
              }
            });
            vue.setSharedData(__sharedData, 4, n30 == null ? void 0 : n30.sharedData);
            const n31 = vue.createSharedDataComponentWithFallback(_component_uni_icons, "94308418", {
              type: "paperplane-filled",
              size: "18",
              color: "#ffffff"
            });
            vue.setSharedData(__sharedData, 5, n31 == null ? void 0 : n31.sharedData);
            vue.setSharedDataEvent(__sharedData, 6, sendMessage);
          })
        });
        vue.setSharedData(__sharedData, 0, n36.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1g = {};
  const _style_1$1b = {};
  const SrcPagesAiAi = /* @__PURE__ */ _export_sfc(_sfc_main$1g, [["styles", [_style_0$1g, _style_1$1b]]]);
  const __className$1e = "GenSrcSubAuthLogin";
  const _sfc_main$1f = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1e,
    __filename: "src/sub/auth/login.uvue",
    __name: "login",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubAuthLoginSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubAuthLoginSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const tokenStore = useTokenStore();
      const userStore = useUserStore();
      const redirectUrl = vue.ref("");
      vue.onLoad((options = null) => {
        if (options != null) {
          const redirect = options["redirect"];
          if (redirect != null) {
            redirectUrl.value = redirect;
          }
        }
      });
      function doLogin() {
        var _a;
        if (tokenStore.hasValidLogin()) {
          if (redirectUrl.value !== "") {
            const targetUrl = (_a = decodeURIComponent(redirectUrl.value)) !== null && _a !== void 0 ? _a : "";
            if (isPageTabbar(targetUrl)) {
              setCurIdxByPath(targetUrl);
              uni.switchTab({ url: targetUrl });
            } else {
              uni.redirectTo({ url: targetUrl });
            }
          } else {
            uni.navigateBack();
          }
          return null;
        }
        tokenStore.setSingleToken(new ISingleTokenRes({
          token: "mock-token-UNIX-123456",
          expiresIn: 7200
        }));
        userStore.setUserInfo(new IUserInfo({
          userId: 1001,
          username: "UNIX",
          nickname: "UNIX 开发者",
          avatar: "/static/logo.png"
        }));
        uni.showToast({
          title: "登录成功",
          icon: "success"
        });
        setTimeout(() => {
          var _a2;
          if (redirectUrl.value !== "") {
            const targetUrl = (_a2 = decodeURIComponent(redirectUrl.value)) !== null && _a2 !== void 0 ? _a2 : "";
            if (isPageTabbar(targetUrl)) {
              setCurIdxByPath(targetUrl);
              uni.switchTab({ url: targetUrl });
            } else {
              uni.redirectTo({ url: targetUrl });
            }
          } else {
            uni.navigateBack();
          }
        }, 1e3);
      }
      return () => {
        "raw js";
        const n6 = vue.createSharedDataComponent(AppKu, "44259de4", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n5 = vue.createSharedDataComponent(LayoutComponent, "408e1e92", { "navigation-bar-title-text": "登录" }, {
              "default": () => {
                vue.setSharedDataEvent(__sharedData, 2, doLogin);
              }
            });
            vue.setSharedData(__sharedData, 1, n5.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n6.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1f = {};
  const SrcSubAuthLogin = /* @__PURE__ */ _export_sfc(_sfc_main$1f, [["styles", [_style_0$1f]]]);
  const __className$1d = "GenSrcSubAuthRegister";
  const _sfc_main$1e = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1d,
    __filename: "src/sub/auth/register.uvue",
    __name: "register",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubAuthRegisterSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubAuthRegisterSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      function doRegister() {
        uni.showToast({
          title: "注册成功",
          icon: "success"
        });
        setTimeout(() => {
          uni.navigateTo({
            url: LOGIN_PAGE
          });
        }, 1e3);
      }
      return () => {
        "raw js";
        const n6 = vue.createSharedDataComponent(AppKu, "505f345a", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n5 = vue.createSharedDataComponent(LayoutComponent, "88f15248", { "navigation-bar-title-text": "注册" }, {
              "default": () => {
                vue.setSharedDataEvent(__sharedData, 2, doRegister);
              }
            });
            vue.setSharedData(__sharedData, 1, n5.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n6.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1e = {};
  const SrcSubAuthRegister = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["styles", [_style_0$1e]]]);
  const __className$1c = "GenSrcSubTestTest";
  const _sfc_main$1d = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1c,
    __filename: "src/sub/test/test.uvue",
    __name: "test",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubTestTestSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubTestTestSharedData", sharedDataClassId: 0 })));
      const __sharedDataScope = vue.useSharedDataScope(__sharedData);
      const optionKeys = vue.ref([]);
      const queryOptions = vue.ref(null);
      vue.onLoad((options = null) => {
        uni.__log__("log", "at src/sub/test/test.uvue:32", "test page onLoad options:", options);
        if (options != null) {
          queryOptions.value = options;
          optionKeys.value = UTSJSONObject.keys(options);
        }
      });
      function getOptionValue(key) {
        const options = queryOptions.value;
        if (options != null) {
          const val = options[key];
          if (val != null) {
            return `${val}`;
          }
        }
        return "";
      }
      return () => {
        "raw js";
        const n17 = vue.createSharedDataComponent(AppKu, "51fce8f3", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n16 = vue.createSharedDataComponent(LayoutComponent, "24bf953a", { "navigation-bar-title-text": "测试" }, {
              "default": () => {
                vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 2, vue.createSharedDataVFor(__sharedDataScope, () => {
                  return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$1c}SharedData`, sharedDataClassId: 1 });
                })), () => {
                  return optionKeys.value;
                }, (__sharedData_VFor0, _for_item0) => {
                  vue.renderSharedDataEffect(() => {
                    const _key = _for_item0.value;
                    vue.setSharedData(__sharedData_VFor0, 1, vue.toDisplayString(_key));
                    vue.setSharedData(__sharedData_VFor0, 2, vue.toDisplayString(getOptionValue(_key)));
                  });
                  return null;
                }, (__sharedData_VFor0, key) => {
                  return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(key));
                });
                vue.createSharedDataIf(() => {
                  return vue.setSharedData(__sharedData, 3, vue.toSharedDataBoolean(optionKeys.value.length == 0));
                }, () => {
                });
              }
            });
            vue.setSharedData(__sharedData, 1, n16.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n17.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1d = {};
  const SrcSubTestTest = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["styles", [_style_0$1d]]]);
  const __className$1b = "GenSrcSubPagingPaging";
  class ArticleItem extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            id: { type: Number, optional: false },
            title: { type: String, optional: false },
            summary: { type: String, optional: false },
            author: { type: String, optional: false },
            createTime: { type: String, optional: false },
            tag: { type: String, optional: false },
            tagBgColor: { type: String, optional: false },
            tagColor: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = ArticleItem.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.id = this.__props__.id;
      this.title = this.__props__.title;
      this.summary = this.__props__.summary;
      this.author = this.__props__.author;
      this.createTime = this.__props__.createTime;
      this.tag = this.__props__.tag;
      this.tagBgColor = this.__props__.tagBgColor;
      this.tagColor = this.__props__.tagColor;
      delete this.__props__;
    }
  }
  const _sfc_main$1c = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1b,
    __filename: "src/sub/paging/paging.uvue",
    __name: "paging",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubPagingPagingSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubPagingPagingSharedData", sharedDataClassId: 0 })));
      const __sharedDataScope = vue.useSharedDataScope(__sharedData);
      const tabList = ["全部", "技术", "设计", "生活"];
      const tabIndex = vue.ref(0);
      const pagingX = vue.ref(null);
      const dataList = vue.ref([]);
      function onUpdateModelValue(val) {
        dataList.value = val;
      }
      function getMockArticles(category, pageNo, pageSize) {
        const list = [];
        const start = (pageNo - 1) * pageSize;
        for (let i = 0; i < pageSize; i++) {
          const itemId = start + i + 1;
          if (itemId > 35) {
            break;
          }
          let tag = category;
          if (category == "全部") {
            const idx = itemId % 3;
            if (idx == 0)
              tag = "技术";
            else if (idx == 1)
              tag = "设计";
            else
              tag = "生活";
          }
          let tagBgColor = "#e0f2fe";
          let tagColor = "#0284c7";
          if (tag == "设计") {
            tagBgColor = "#f3e8ff";
            tagColor = "#7c3aed";
          } else if (tag == "生活") {
            tagBgColor = "#dcfce7";
            tagColor = "#16a34a";
          }
          list.push(new ArticleItem({
            id: itemId,
            title: `${tag}专栏 · 探索移动端开发的未来第 ${itemId} 篇`,
            summary: `这是关于 ${tag} 领域的精选分享文章。通过全新的跨端原生开发理念，帮助开发者在性能与效率之间找到完美的平衡点。`,
            author: "技术专家 · unix",
            createTime: `06-04 15:${30 - i}`,
            tag,
            tagBgColor,
            tagColor
          }));
        }
        return list;
      }
      function onQuery(pageNo, pageSize) {
        const currentCategory = tabList[tabIndex.value];
        setTimeout(() => {
          try {
            const data = getMockArticles(currentCategory, pageNo, pageSize);
            if (pagingX.value != null) {
              pagingX.value.$callMethod("complete", data);
            }
          } catch (e) {
            if (pagingX.value != null) {
              pagingX.value.$callMethod("completeByError");
            }
          }
        }, 800);
      }
      function tabChange(index) {
        tabIndex.value = index;
        if (pagingX.value != null) {
          pagingX.value.$callMethod("reload");
        }
      }
      return () => {
        "raw js";
        const _setTemplateRef = vue.createSharedDataTemplateRefSetter();
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_z_paging_x = vue.resolveComponent("z-paging-x");
        const n23 = vue.createSharedDataComponent(AppKu, "2bd82232", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n22 = vue.createSharedDataComponent(LayoutComponent, "5869edef", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "分页加载"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "96585ef6", {
                  title: "分页加载 (z-paging-x)",
                  "show-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const _selector1_0 = vue.createSharedDataSelector(() => {
                  return tabIndex.value;
                });
                const _selector1_1 = vue.createSharedDataSelector(() => {
                  return tabIndex.value;
                });
                const n1 = vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 5, vue.createSharedDataVFor(__sharedDataScope, () => {
                  return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$1b}SharedData`, sharedDataClassId: 1 });
                })), () => {
                  return tabList;
                }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                  vue.setSharedDataEvent(__sharedData_VFor0, 1, () => {
                    return tabChange(_for_key0.value);
                  });
                  vue.renderSharedDataEffect(() => {
                    return vue.setSharedData(__sharedData_VFor0, 4, vue.toDisplayString(_for_item0.value));
                  });
                  _selector1_0(_for_key0.value, () => {
                    vue.setSharedDataStyle(__sharedData_VFor0, 2, { backgroundColor: tabIndex.value === _for_key0.value ? "#ffffff" : "transparent" });
                  });
                  _selector1_1(_for_key0.value, () => {
                    vue.setSharedDataStyle(__sharedData_VFor0, 3, { color: tabIndex.value === _for_key0.value ? "var(--theme-color, #37c2bc)" : "#64748b" });
                  });
                  return null;
                }, (__sharedData_VFor0, tab, index) => {
                  return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(index));
                }, 1);
                n1.onReset(_selector1_0.reset);
                n1.onReset(_selector1_1.reset);
                const n20 = vue.createSharedDataComponentWithFallback(_component_z_paging_x, "34b3b566", {
                  "model-value": () => {
                    return dataList.value;
                  },
                  "default-page-size": 10,
                  class: "flex-1",
                  "onUpdate:modelValue": () => {
                    return onUpdateModelValue;
                  },
                  onQuery: () => {
                    return onQuery;
                  }
                }, {
                  "default": () => {
                    vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 4, vue.createSharedDataVFor(__sharedDataScope, () => {
                      return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$1b}SharedData`, sharedDataClassId: 2 });
                    })), () => {
                      return dataList.value;
                    }, (__sharedData_VFor1, _for_item1) => {
                      let _item;
                      vue.renderSharedDataEffect(() => {
                        _item = _for_item1.value;
                        vue.setSharedDataStyle(__sharedData_VFor1, 1, { backgroundColor: _item.tagBgColor, padding: "2px 8px", borderRadius: "6px" });
                        vue.setSharedDataStyle(__sharedData_VFor1, 2, { color: _item.tagColor, fontSize: "10px", fontWeight: "bold" });
                        vue.setSharedData(__sharedData_VFor1, 3, vue.toDisplayString(_item.tag));
                        vue.setSharedData(__sharedData_VFor1, 5, vue.toDisplayString(_item.title));
                        vue.setSharedData(__sharedData_VFor1, 6, vue.toDisplayString(_item.summary));
                        vue.setSharedData(__sharedData_VFor1, 7, vue.toDisplayString(_item.author));
                        vue.setSharedData(__sharedData_VFor1, 8, vue.toDisplayString(_item.createTime));
                      });
                      vue.setSharedData(__sharedData_VFor1, 4, vue.toDisplayString(_item.id));
                      return null;
                    }, (__sharedData_VFor1, item) => {
                      return vue.setSharedData(__sharedData_VFor1, 0, vue.toDisplayString(item.id));
                    }, 32);
                  }
                });
                vue.setSharedData(__sharedData, 3, n20 == null ? void 0 : n20.sharedData);
                _setTemplateRef(n20, pagingX, null, "pagingX");
              })
            });
            vue.setSharedData(__sharedData, 1, n22.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n23.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1c = {};
  const SrcSubPagingPaging = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["styles", [_style_0$1c]]]);
  const __className$1a = "GenSrcSubUviewUltraUviewUltra";
  const _sfc_main$1b = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1a,
    __filename: "src/sub/uview-ultra/uview-ultra.uvue",
    __name: "uview-ultra",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraUviewUltraSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraUviewUltraSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const appStore = useAppStore();
      const themeColor2 = vue.computed(() => {
        return appStore.state.theme;
      });
      function goToDemo(page) {
        uni.navigateTo({
          url: `/src/sub/uview-ultra/demos/${page}/${page}`
        });
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_icon = vue.resolveComponent("up-icon");
        const _component_up_cell = vue.resolveComponent("up-cell");
        const _component_up_cell_group = vue.resolveComponent("up-cell-group");
        const n233 = vue.createSharedDataComponent(AppKu, "078c97b3", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n232 = vue.createSharedDataComponent(LayoutComponent, "2bf342ba", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "uview-ultra 示例"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "56c57630", {
                  title: "uview-ultra 组件演示",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n91 = vue.createSharedDataComponentWithFallback(_component_up_cell_group, "56c59018", { border: false }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const _on_click = () => {
                      return goToDemo("button");
                    };
                    const n9 = vue.createSharedDataComponentWithFallback(_component_up_cell, "56c59094", {
                      title: "Button 按钮",
                      "is-link": "",
                      onClick: () => {
                        return _on_click;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n7 = vue.createSharedDataComponentWithFallback(_component_up_icon, "56c59458", {
                          name: "plus-circle",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 5, n7 == null ? void 0 : n7.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 4, n9 == null ? void 0 : n9.sharedData);
                    const _on_click1 = () => {
                      return goToDemo("icon");
                    };
                    const n12 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc2d86ae", {
                      title: "Icon 图标",
                      "is-link": "",
                      onClick: () => {
                        return _on_click1;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n10 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2d7f2e", {
                          name: "photo",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 7, n10 == null ? void 0 : n10.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 6, n12 == null ? void 0 : n12.sharedData);
                    const _on_click2 = () => {
                      return goToDemo("text");
                    };
                    const n15 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc2d76f8", {
                      title: "Text 文本",
                      "is-link": "",
                      onClick: () => {
                        return _on_click2;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n13 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2d6f78", {
                          name: "file-text",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 9, n13 == null ? void 0 : n13.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 8, n15 == null ? void 0 : n15.sharedData);
                    const _on_click3 = () => {
                      return goToDemo("link");
                    };
                    const n18 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc2d673a", {
                      title: "Link 超链接",
                      "is-link": "",
                      onClick: () => {
                        return _on_click3;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n16 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2d5fb8", {
                          name: "attach",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 11, n16 == null ? void 0 : n16.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 10, n18 == null ? void 0 : n18.sharedData);
                    const _on_click4 = () => {
                      return goToDemo("empty");
                    };
                    const n21 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc2d5780", {
                      title: "Empty 空白页",
                      "is-link": "",
                      onClick: () => {
                        return _on_click4;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n19 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2d4ffa", {
                          name: "info-circle",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 13, n19 == null ? void 0 : n19.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 12, n21 == null ? void 0 : n21.sharedData);
                    const _on_click5 = () => {
                      return goToDemo("divider");
                    };
                    const n24 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc2ca4f8", {
                      title: "Divider 分割线",
                      "is-link": "",
                      onClick: () => {
                        return _on_click5;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n22 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2c9d40", {
                          name: "minus",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 15, n22 == null ? void 0 : n22.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 14, n24 == null ? void 0 : n24.sharedData);
                    const _on_click6 = () => {
                      return goToDemo("loading-icon");
                    };
                    const n27 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc2c950a", {
                      title: "LoadingIcon 加载图标",
                      "is-link": "",
                      onClick: () => {
                        return _on_click6;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n25 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2c8d3e", {
                          name: "reload",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 17, n25 == null ? void 0 : n25.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 16, n27 == null ? void 0 : n27.sharedData);
                    const _on_click7 = () => {
                      return goToDemo("skeleton");
                    };
                    const n30 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc2c7ff0", {
                      title: "Skeleton 骨架屏",
                      "is-link": "",
                      onClick: () => {
                        return _on_click7;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n28 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2c7834", {
                          name: "list-dot",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 19, n28 == null ? void 0 : n28.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 18, n30 == null ? void 0 : n30.sharedData);
                    const _on_click8 = () => {
                      return goToDemo("tag");
                    };
                    const n33 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc2c6ff8", {
                      title: "Tag 标签",
                      "is-link": "",
                      onClick: () => {
                        return _on_click8;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n31 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2c687c", {
                          name: "tags",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 21, n31 == null ? void 0 : n31.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 20, n33 == null ? void 0 : n33.sharedData);
                    const _on_click9 = () => {
                      return goToDemo("badge");
                    };
                    const n36 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc2c6072", {
                      title: "Badge 徽标",
                      "is-link": "",
                      onClick: () => {
                        return _on_click9;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n34 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2bbb44", {
                          name: "info-circle",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 23, n34 == null ? void 0 : n34.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 22, n36 == null ? void 0 : n36.sharedData);
                    const _on_click10 = () => {
                      return goToDemo("avatar");
                    };
                    const n39 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc2badc2", {
                      title: "Avatar 头像",
                      "is-link": "",
                      onClick: () => {
                        return _on_click10;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n37 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2ba63a", {
                          name: "account",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 25, n37 == null ? void 0 : n37.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 24, n39 == null ? void 0 : n39.sharedData);
                    const _on_click11 = () => {
                      return goToDemo("card");
                    };
                    const n42 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc2b9e00", {
                      title: "Card 卡片",
                      "is-link": "",
                      onClick: () => {
                        return _on_click11;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n40 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2b9680", {
                          name: "map",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 27, n40 == null ? void 0 : n40.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 26, n42 == null ? void 0 : n42.sharedData);
                    const _on_click12 = () => {
                      return goToDemo("list");
                    };
                    const n45 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc2b8e78", {
                      title: "List 列表",
                      "is-link": "",
                      onClick: () => {
                        return _on_click12;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n43 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2b86f8", {
                          name: "list-dot",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 29, n43 == null ? void 0 : n43.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 28, n45 == null ? void 0 : n45.sharedData);
                    const _on_click13 = () => {
                      return goToDemo("swiper");
                    };
                    const n48 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc2b7ebc", {
                      title: "Swiper 轮播图",
                      "is-link": "",
                      onClick: () => {
                        return _on_click13;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n46 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2b7732", {
                          name: "photo",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 31, n46 == null ? void 0 : n46.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 30, n48 == null ? void 0 : n48.sharedData);
                    const _on_click14 = () => {
                      return goToDemo("image");
                    };
                    const n51 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc2acc3c", {
                      title: "Image 图片组件",
                      "is-link": "",
                      onClick: () => {
                        return _on_click14;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n49 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2ac4b4", {
                          name: "photo",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 33, n49 == null ? void 0 : n49.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 32, n51 == null ? void 0 : n51.sharedData);
                    const _on_click15 = () => {
                      return goToDemo("transition");
                    };
                    const n54 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc2abc7e", {
                      title: "Transition 动画过渡",
                      "is-link": "",
                      onClick: () => {
                        return _on_click15;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n52 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2ab4b8", {
                          name: "play-circle",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 35, n52 == null ? void 0 : n52.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 34, n54 == null ? void 0 : n54.sharedData);
                    const _on_click16 = () => {
                      return goToDemo("steps");
                    };
                    const n57 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc2aac4c", {
                      title: "Steps 步骤条",
                      "is-link": "",
                      onClick: () => {
                        return _on_click16;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n55 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2aa4c6", {
                          name: "order",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 37, n55 == null ? void 0 : n55.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 36, n57 == null ? void 0 : n57.sharedData);
                    const _on_click17 = () => {
                      return goToDemo("grid");
                    };
                    const n60 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc2a9778", {
                      title: "Grid 宫格",
                      "is-link": "",
                      onClick: () => {
                        return _on_click17;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n58 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2a8fee", {
                          name: () => {
                            return "grid";
                          },
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 39, n58 == null ? void 0 : n58.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 38, n60 == null ? void 0 : n60.sharedData);
                    const _on_click18 = () => {
                      return goToDemo("line");
                    };
                    const n63 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc29e9d6", {
                      title: "Line 线条",
                      "is-link": "",
                      onClick: () => {
                        return _on_click18;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n61 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc29e280", {
                          name: "minus",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 41, n61 == null ? void 0 : n61.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 40, n63 == null ? void 0 : n63.sharedData);
                    const _on_click19 = () => {
                      return goToDemo("album");
                    };
                    const n66 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc29da4a", {
                      title: "Album 相册",
                      "is-link": "",
                      onClick: () => {
                        return _on_click19;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n64 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc29d2c6", {
                          name: "photo",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 43, n64 == null ? void 0 : n64.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 42, n66 == null ? void 0 : n66.sharedData);
                    const _on_click20 = () => {
                      return goToDemo("gap");
                    };
                    const n69 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc29c57a", {
                      title: "Gap 间隔槽",
                      "is-link": "",
                      onClick: () => {
                        return _on_click20;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n67 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc29bdfc", {
                          name: "minus",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 45, n67 == null ? void 0 : n67.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 44, n69 == null ? void 0 : n69.sharedData);
                    const _on_click21 = () => {
                      return goToDemo("sticky");
                    };
                    const n72 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc29b5f0", {
                      title: "Sticky 吸顶",
                      "is-link": "",
                      onClick: () => {
                        return _on_click21;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n70 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc29ae34", {
                          name: "arrow-up",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 47, n70 == null ? void 0 : n70.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 46, n72 == null ? void 0 : n72.sharedData);
                    const _on_click22 = () => {
                      return goToDemo("table");
                    };
                    const n75 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc29a5f8", {
                      title: "Table 表格",
                      "is-link": "",
                      onClick: () => {
                        return _on_click22;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n73 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc290096", {
                          name: () => {
                            return "grid";
                          },
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 49, n73 == null ? void 0 : n73.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 48, n75 == null ? void 0 : n75.sharedData);
                    const _on_click23 = () => {
                      return goToDemo("lazy-load");
                    };
                    const n78 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc28f33c", {
                      title: "LazyLoad 懒加载",
                      "is-link": "",
                      onClick: () => {
                        return _on_click23;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n76 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc28eb7e", {
                          name: "photo",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 51, n76 == null ? void 0 : n76.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 50, n78 == null ? void 0 : n78.sharedData);
                    const _on_click24 = () => {
                      return goToDemo("loadmore");
                    };
                    const n81 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc28e348", {
                      title: "Loadmore 加载更多",
                      "is-link": "",
                      onClick: () => {
                        return _on_click24;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n79 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc28db8a", {
                          name: "more-dot-fill",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 53, n79 == null ? void 0 : n79.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 52, n81 == null ? void 0 : n81.sharedData);
                    const _on_click25 = () => {
                      return goToDemo("parse");
                    };
                    const n84 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc28d344", {
                      title: "Parse 富文本解析",
                      "is-link": "",
                      onClick: () => {
                        return _on_click25;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n82 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc28c67a", {
                          name: "file-text",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 55, n82 == null ? void 0 : n82.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 54, n84 == null ? void 0 : n84.sharedData);
                    const _on_click26 = () => {
                      return goToDemo("qrcode");
                    };
                    const n87 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc28be3c", {
                      title: "Qrcode 二维码",
                      "is-link": "",
                      onClick: () => {
                        return _on_click26;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n85 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc281908", {
                          name: "scan",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 57, n85 == null ? void 0 : n85.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 56, n87 == null ? void 0 : n87.sharedData);
                    const _on_click27 = () => {
                      return goToDemo("waterfall");
                    };
                    const n90 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc2810d4", {
                      title: "Waterfall 瀑布流",
                      "is-link": "",
                      onClick: () => {
                        return _on_click27;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n88 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc280914", {
                          name: () => {
                            return "grid";
                          },
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 59, n88 == null ? void 0 : n88.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 58, n90 == null ? void 0 : n90.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 3, n91 == null ? void 0 : n91.sharedData);
                const n145 = vue.createSharedDataComponentWithFallback(_component_up_cell_group, "fc27f306", { border: false }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const _on_click28 = () => {
                      return goToDemo("input");
                    };
                    const n96 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc27f20e", {
                      title: "Input 输入框",
                      "is-link": "",
                      onClick: () => {
                        return _on_click28;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n94 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc27ea88", {
                          name: "edit-pen",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 62, n94 == null ? void 0 : n94.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 61, n96 == null ? void 0 : n96.sharedData);
                    const _on_click29 = () => {
                      return goToDemo("checkbox");
                    };
                    const n99 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc27dd36", {
                      title: "Checkbox 复选框",
                      "is-link": "",
                      onClick: () => {
                        return _on_click29;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n97 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc27d57a", {
                          name: "checkbox-mark",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 64, n97 == null ? void 0 : n97.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 63, n99 == null ? void 0 : n99.sharedData);
                    const _on_click30 = () => {
                      return goToDemo("radio");
                    };
                    const n102 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc272f8a", {
                      title: "Radio 单选框",
                      "is-link": "",
                      onClick: () => {
                        return _on_click30;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n100 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2727da", {
                          name: "checkmark-circle",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 66, n100 == null ? void 0 : n100.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 65, n102 == null ? void 0 : n102.sharedData);
                    const _on_click31 = () => {
                      return goToDemo("switch");
                    };
                    const n105 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc271a78", {
                      title: "Switch 开关",
                      "is-link": "",
                      onClick: () => {
                        return _on_click31;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n103 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2712c6", {
                          name: "more-circle",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 68, n103 == null ? void 0 : n103.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 67, n105 == null ? void 0 : n105.sharedData);
                    const _on_click32 = () => {
                      return goToDemo("rate");
                    };
                    const n108 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc270a84", {
                      title: "Rate 评分",
                      "is-link": "",
                      onClick: () => {
                        return _on_click32;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n106 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc270304", {
                          name: "star",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 70, n106 == null ? void 0 : n106.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 69, n108 == null ? void 0 : n108.sharedData);
                    const _on_click33 = () => {
                      return goToDemo("number-box");
                    };
                    const n111 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc26fad0", {
                      title: "NumberBox 步进器",
                      "is-link": "",
                      onClick: () => {
                        return _on_click33;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n109 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc26f30e", {
                          name: "plus",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 72, n109 == null ? void 0 : n109.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 71, n111 == null ? void 0 : n111.sharedData);
                    const _on_click34 = () => {
                      return goToDemo("slider");
                    };
                    const n114 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc264844", {
                      title: "Slider 滑块",
                      "is-link": "",
                      onClick: () => {
                        return _on_click34;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n112 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc264092", {
                          name: "minus",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 74, n112 == null ? void 0 : n112.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 73, n114 == null ? void 0 : n114.sharedData);
                    const _on_click35 = () => {
                      return goToDemo("textarea");
                    };
                    const n117 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc263886", {
                      title: "Textarea 多行文本",
                      "is-link": "",
                      onClick: () => {
                        return _on_click35;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n115 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2630c8", {
                          name: "file-text",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 76, n115 == null ? void 0 : n115.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 75, n117 == null ? void 0 : n117.sharedData);
                    const _on_click36 = () => {
                      return goToDemo("upload");
                    };
                    const n120 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc26288a", {
                      title: "Upload 上传",
                      "is-link": "",
                      onClick: () => {
                        return _on_click36;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n118 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc2620d8", {
                          name: "arrow-up",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 78, n118 == null ? void 0 : n118.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 77, n120 == null ? void 0 : n120.sharedData);
                    const _on_click37 = () => {
                      return goToDemo("search");
                    };
                    const n123 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc261386", {
                      title: "Search 搜索",
                      "is-link": "",
                      onClick: () => {
                        return _on_click37;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n121 = vue.createSharedDataComponentWithFallback(_component_up_icon, "fc260bfe", {
                          name: "search",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 80, n121 == null ? void 0 : n121.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 79, n123 == null ? void 0 : n123.sharedData);
                    const _on_click38 = () => {
                      return goToDemo("form");
                    };
                    const n126 = vue.createSharedDataComponentWithFallback(_component_up_cell, "fc2603c6", {
                      title: "完整 Form 表单示例",
                      "is-link": "",
                      onClick: () => {
                        return _on_click38;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n124 = vue.createSharedDataComponentWithFallback(_component_up_icon, "8984389c", {
                          name: "edit-pen",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 82, n124 == null ? void 0 : n124.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 81, n126 == null ? void 0 : n126.sharedData);
                    const _on_click39 = () => {
                      return goToDemo("pagination");
                    };
                    const n129 = vue.createSharedDataComponentWithFallback(_component_up_cell, "89843060", {
                      title: "Pagination 分页器",
                      "is-link": "",
                      onClick: () => {
                        return _on_click39;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n127 = vue.createSharedDataComponentWithFallback(_component_up_icon, "8984289c", {
                          name: "more-circle",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 84, n127 == null ? void 0 : n127.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 83, n129 == null ? void 0 : n129.sharedData);
                    const _on_click40 = () => {
                      return goToDemo("keyboard");
                    };
                    const n132 = vue.createSharedDataComponentWithFallback(_component_up_cell, "89841b18", {
                      title: "Keyboard 键盘",
                      "is-link": "",
                      onClick: () => {
                        return _on_click40;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n130 = vue.createSharedDataComponentWithFallback(_component_up_icon, "89841388", {
                          name: "grid-fill",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 86, n130 == null ? void 0 : n130.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 85, n132 == null ? void 0 : n132.sharedData);
                    const _on_click41 = () => {
                      return goToDemo("dropdown");
                    };
                    const n135 = vue.createSharedDataComponentWithFallback(_component_up_cell, "89840b4a", {
                      title: "Dropdown 下拉菜单",
                      "is-link": "",
                      onClick: () => {
                        return _on_click41;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n133 = vue.createSharedDataComponentWithFallback(_component_up_icon, "8984038c", {
                          name: "arrow-down-fill",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 88, n133 == null ? void 0 : n133.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 87, n135 == null ? void 0 : n135.sharedData);
                    const _on_click42 = () => {
                      return goToDemo("swipe-action");
                    };
                    const n138 = vue.createSharedDataComponentWithFallback(_component_up_cell, "8983f602", {
                      title: "SwipeAction 滑动操作",
                      "is-link": "",
                      onClick: () => {
                        return _on_click42;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n136 = vue.createSharedDataComponentWithFallback(_component_up_icon, "89835062", {
                          name: "list",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 90, n136 == null ? void 0 : n136.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 89, n138 == null ? void 0 : n138.sharedData);
                    const _on_click43 = () => {
                      return goToDemo("code-input");
                    };
                    const n141 = vue.createSharedDataComponentWithFallback(_component_up_cell, "89834858", {
                      title: "CodeInput 验证码输入",
                      "is-link": "",
                      onClick: () => {
                        return _on_click43;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n139 = vue.createSharedDataComponentWithFallback(_component_up_icon, "89834068", {
                          name: "lock",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 92, n139 == null ? void 0 : n139.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 91, n141 == null ? void 0 : n141.sharedData);
                    const _on_click44 = () => {
                      return goToDemo("code");
                    };
                    const n144 = vue.createSharedDataComponentWithFallback(_component_up_cell, "8983385e", {
                      title: "Code 验证码倒计时",
                      "is-link": "",
                      onClick: () => {
                        return _on_click44;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n142 = vue.createSharedDataComponentWithFallback(_component_up_icon, "898330d6", {
                          name: "clock",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 94, n142 == null ? void 0 : n142.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 93, n144 == null ? void 0 : n144.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 60, n145 == null ? void 0 : n145.sharedData);
                const n202 = vue.createSharedDataComponentWithFallback(_component_up_cell_group, "89831ad6", { border: false }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const _on_click45 = () => {
                      return goToDemo("alert");
                    };
                    const n150 = vue.createSharedDataComponentWithFallback(_component_up_cell, "898314c8", {
                      title: "Alert 警告提示",
                      "is-link": "",
                      onClick: () => {
                        return _on_click45;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n148 = vue.createSharedDataComponentWithFallback(_component_up_icon, "89830d40", {
                          name: "info-circle",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 97, n148 == null ? void 0 : n148.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 96, n150 == null ? void 0 : n150.sharedData);
                    const _on_click46 = () => {
                      return goToDemo("calendar");
                    };
                    const n153 = vue.createSharedDataComponentWithFallback(_component_up_cell, "8982672a", {
                      title: "Calendar 日历",
                      "is-link": "",
                      onClick: () => {
                        return _on_click46;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n151 = vue.createSharedDataComponentWithFallback(_component_up_icon, "89825f9a", {
                          name: "calendar",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 99, n151 == null ? void 0 : n151.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 98, n153 == null ? void 0 : n153.sharedData);
                    const _on_click47 = () => {
                      return goToDemo("picker");
                    };
                    const n156 = vue.createSharedDataComponentWithFallback(_component_up_cell, "8982575e", {
                      title: "Picker 选择器",
                      "is-link": "",
                      onClick: () => {
                        return _on_click47;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n154 = vue.createSharedDataComponentWithFallback(_component_up_icon, "89824faa", {
                          name: "list",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 101, n154 == null ? void 0 : n154.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 100, n156 == null ? void 0 : n156.sharedData);
                    const _on_click48 = () => {
                      return goToDemo("datetime-picker");
                    };
                    const n159 = vue.createSharedDataComponentWithFallback(_component_up_cell, "8982428a", {
                      title: "DatetimePicker 时间选择",
                      "is-link": "",
                      onClick: () => {
                        return _on_click48;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n157 = vue.createSharedDataComponentWithFallback(_component_up_icon, "89823a88", {
                          name: "clock",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 103, n157 == null ? void 0 : n157.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 102, n159 == null ? void 0 : n159.sharedData);
                    const _on_click49 = () => {
                      return goToDemo("action-sheet");
                    };
                    const n162 = vue.createSharedDataComponentWithFallback(_component_up_cell, "89823252", {
                      title: "ActionSheet 动作面板",
                      "is-link": "",
                      onClick: () => {
                        return _on_click49;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n160 = vue.createSharedDataComponentWithFallback(_component_up_icon, "89822a5c", {
                          name: "server-man",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 105, n160 == null ? void 0 : n160.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 104, n162 == null ? void 0 : n162.sharedData);
                    const _on_click50 = () => {
                      return goToDemo("notice-bar");
                    };
                    const n165 = vue.createSharedDataComponentWithFallback(_component_up_cell, "89817f5c", {
                      title: "NoticeBar 滚动通知",
                      "is-link": "",
                      onClick: () => {
                        return _on_click50;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n163 = vue.createSharedDataComponentWithFallback(_component_up_icon, "89817798", {
                          name: "volume",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 107, n163 == null ? void 0 : n163.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 106, n165 == null ? void 0 : n165.sharedData);
                    const _on_click51 = () => {
                      return goToDemo("collapse");
                    };
                    const n168 = vue.createSharedDataComponentWithFallback(_component_up_cell, "89816f60", {
                      title: "Collapse 折叠面板",
                      "is-link": "",
                      onClick: () => {
                        return _on_click51;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n166 = vue.createSharedDataComponentWithFallback(_component_up_icon, "898167a2", {
                          name: "arrow-down",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 109, n166 == null ? void 0 : n166.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 108, n168 == null ? void 0 : n168.sharedData);
                    const _on_click52 = () => {
                      return goToDemo("toast");
                    };
                    const n171 = vue.createSharedDataComponentWithFallback(_component_up_cell, "89815f62", {
                      title: "Toast 消息提示",
                      "is-link": "",
                      onClick: () => {
                        return _on_click52;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n169 = vue.createSharedDataComponentWithFallback(_component_up_icon, "898157da", {
                          name: "chat",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 111, n169 == null ? void 0 : n169.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 110, n171 == null ? void 0 : n171.sharedData);
                    const _on_click53 = () => {
                      return goToDemo("notify");
                    };
                    const n174 = vue.createSharedDataComponentWithFallback(_component_up_cell, "89814a90", {
                      title: "Notify 消息通知",
                      "is-link": "",
                      onClick: () => {
                        return _on_click53;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n172 = vue.createSharedDataComponentWithFallback(_component_up_icon, "89814304", {
                          name: "bell",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 113, n172 == null ? void 0 : n172.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 112, n174 == null ? void 0 : n174.sharedData);
                    const _on_click54 = () => {
                      return goToDemo("loading-page");
                    };
                    const n177 = vue.createSharedDataComponentWithFallback(_component_up_cell, "89813ad0", {
                      title: "LoadingPage 加载页",
                      "is-link": "",
                      onClick: () => {
                        return _on_click54;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n175 = vue.createSharedDataComponentWithFallback(_component_up_icon, "89809532", {
                          name: "more-dot-fill",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 115, n175 == null ? void 0 : n175.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 114, n177 == null ? void 0 : n177.sharedData);
                    const _on_click55 = () => {
                      return goToDemo("overlay");
                    };
                    const n180 = vue.createSharedDataComponentWithFallback(_component_up_cell, "89808cec", {
                      title: "Overlay 遮罩层",
                      "is-link": "",
                      onClick: () => {
                        return _on_click55;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n178 = vue.createSharedDataComponentWithFallback(_component_up_icon, "8980801e", {
                          name: "scan",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 117, n178 == null ? void 0 : n178.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 116, n180 == null ? void 0 : n180.sharedData);
                    const _on_click56 = () => {
                      return goToDemo("modal");
                    };
                    const n183 = vue.createSharedDataComponentWithFallback(_component_up_cell, "89807814", {
                      title: "Modal 模态框",
                      "is-link": "",
                      onClick: () => {
                        return _on_click56;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n181 = vue.createSharedDataComponentWithFallback(_component_up_icon, "8980708e", {
                          name: "email",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 119, n181 == null ? void 0 : n181.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 118, n183 == null ? void 0 : n183.sharedData);
                    const _on_click57 = () => {
                      return goToDemo("popup");
                    };
                    const n186 = vue.createSharedDataComponentWithFallback(_component_up_cell, "89806858", {
                      title: "Popup 弹出层",
                      "is-link": "",
                      onClick: () => {
                        return _on_click57;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n184 = vue.createSharedDataComponentWithFallback(_component_up_icon, "898060d2", {
                          name: "server-man",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 121, n184 == null ? void 0 : n184.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 120, n186 == null ? void 0 : n186.sharedData);
                    const _on_click58 = () => {
                      return goToDemo("no-network");
                    };
                    const n189 = vue.createSharedDataComponentWithFallback(_component_up_cell, "89805868", {
                      title: "NoNetwork 无网络提示",
                      "is-link": "",
                      onClick: () => {
                        return _on_click58;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n187 = vue.createSharedDataComponentWithFallback(_component_up_icon, "897fade2", {
                          name: "wifi-off",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 123, n187 == null ? void 0 : n187.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 122, n189 == null ? void 0 : n189.sharedData);
                    const _on_click59 = () => {
                      return goToDemo("line-progress");
                    };
                    const n192 = vue.createSharedDataComponentWithFallback(_component_up_cell, "897fa5a4", {
                      title: "LineProgress 线型进度",
                      "is-link": "",
                      onClick: () => {
                        return _on_click59;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n190 = vue.createSharedDataComponentWithFallback(_component_up_icon, "897f9daa", {
                          name: "minus",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 125, n190 == null ? void 0 : n190.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 124, n192 == null ? void 0 : n192.sharedData);
                    const _on_click60 = () => {
                      return goToDemo("count-down");
                    };
                    const n195 = vue.createSharedDataComponentWithFallback(_component_up_cell, "897f959e", {
                      title: "CountDown 倒计时",
                      "is-link": "",
                      onClick: () => {
                        return _on_click60;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n193 = vue.createSharedDataComponentWithFallback(_component_up_icon, "897f8db2", {
                          name: "clock",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 127, n193 == null ? void 0 : n193.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 126, n195 == null ? void 0 : n195.sharedData);
                    const _on_click61 = () => {
                      return goToDemo("count-to");
                    };
                    const n198 = vue.createSharedDataComponentWithFallback(_component_up_cell, "897f8090", {
                      title: "CountTo 数字滚动",
                      "is-link": "",
                      onClick: () => {
                        return _on_click61;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n196 = vue.createSharedDataComponentWithFallback(_component_up_icon, "897f78d4", {
                          name: "play-right-fill",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 129, n196 == null ? void 0 : n196.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 128, n198 == null ? void 0 : n198.sharedData);
                    const _on_click62 = () => {
                      return goToDemo("copy");
                    };
                    const n201 = vue.createSharedDataComponentWithFallback(_component_up_cell, "897f7060", {
                      title: "Copy 文本复制",
                      "is-link": "",
                      onClick: () => {
                        return _on_click62;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n199 = vue.createSharedDataComponentWithFallback(_component_up_icon, "897f68dc", {
                          name: "file-text",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 131, n199 == null ? void 0 : n199.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 130, n201 == null ? void 0 : n201.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 95, n202 == null ? void 0 : n202.sharedData);
                const n229 = vue.createSharedDataComponentWithFallback(_component_up_cell_group, "897eb560", { border: false }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const _on_click63 = () => {
                      return goToDemo("navbar");
                    };
                    const n207 = vue.createSharedDataComponentWithFallback(_component_up_cell, "897eb468", {
                      title: "Navbar 导航栏",
                      "is-link": "",
                      onClick: () => {
                        return _on_click63;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n205 = vue.createSharedDataComponentWithFallback(_component_up_icon, "897eacb4", {
                          name: "arrow-left",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 134, n205 == null ? void 0 : n205.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 133, n207 == null ? void 0 : n207.sharedData);
                    const _on_click64 = () => {
                      return goToDemo("navbar-mini");
                    };
                    const n210 = vue.createSharedDataComponentWithFallback(_component_up_cell, "897e9f5e", {
                      title: "NavbarMini 迷你导航",
                      "is-link": "",
                      onClick: () => {
                        return _on_click64;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n208 = vue.createSharedDataComponentWithFallback(_component_up_icon, "897e9796", {
                          name: "arrow-left",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 136, n208 == null ? void 0 : n208.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 135, n210 == null ? void 0 : n210.sharedData);
                    const _on_click65 = () => {
                      return goToDemo("back-top");
                    };
                    const n213 = vue.createSharedDataComponentWithFallback(_component_up_cell, "897e8f56", {
                      title: "BackTop 返回顶部",
                      "is-link": "",
                      onClick: () => {
                        return _on_click65;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n211 = vue.createSharedDataComponentWithFallback(_component_up_icon, "897e879a", {
                          name: "arrow-upward",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 138, n211 == null ? void 0 : n211.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 137, n213 == null ? void 0 : n213.sharedData);
                    const _on_click66 = () => {
                      return goToDemo("tabbar");
                    };
                    const n216 = vue.createSharedDataComponentWithFallback(_component_up_cell, "897ddc6c", {
                      title: "Tabbar 底部导航",
                      "is-link": "",
                      onClick: () => {
                        return _on_click66;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n214 = vue.createSharedDataComponentWithFallback(_component_up_icon, "897dd4e0", {
                          name: "list",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 140, n214 == null ? void 0 : n214.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 139, n216 == null ? void 0 : n216.sharedData);
                    const _on_click67 = () => {
                      return goToDemo("tabs");
                    };
                    const n219 = vue.createSharedDataComponentWithFallback(_component_up_cell, "897dccac", {
                      title: "Tabs 标签页",
                      "is-link": "",
                      onClick: () => {
                        return _on_click67;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n217 = vue.createSharedDataComponentWithFallback(_component_up_icon, "897dc52a", {
                          name: "list",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 142, n217 == null ? void 0 : n217.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 141, n219 == null ? void 0 : n219.sharedData);
                    const _on_click68 = () => {
                      return goToDemo("subsection");
                    };
                    const n222 = vue.createSharedDataComponentWithFallback(_component_up_cell, "897dbd20", {
                      title: "Subsection 分段器",
                      "is-link": "",
                      onClick: () => {
                        return _on_click68;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n220 = vue.createSharedDataComponentWithFallback(_component_up_icon, "897db55c", {
                          name: "list",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 144, n220 == null ? void 0 : n220.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 143, n222 == null ? void 0 : n222.sharedData);
                    const _on_click69 = () => {
                      return goToDemo("index-list");
                    };
                    const n225 = vue.createSharedDataComponentWithFallback(_component_up_cell, "897dad28", {
                      title: "IndexList 索引列表",
                      "is-link": "",
                      onClick: () => {
                        return _on_click69;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n223 = vue.createSharedDataComponentWithFallback(_component_up_icon, "897da04e", {
                          name: "list",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 146, n223 == null ? void 0 : n223.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 145, n225 == null ? void 0 : n225.sharedData);
                    const _on_click70 = () => {
                      return goToDemo("mp-html");
                    };
                    const n228 = vue.createSharedDataComponentWithFallback(_component_up_cell, "897d981a", {
                      title: "MpHtml 富文本组件",
                      "is-link": "",
                      onClick: () => {
                        return _on_click70;
                      }
                    }, {
                      "icon": vue.withSharedDataVaporCtx(() => {
                        const n226 = vue.createSharedDataComponentWithFallback(_component_up_icon, "897cf2b6", {
                          name: "file-text",
                          color: () => {
                            return themeColor2.value;
                          },
                          size: "20",
                          class: "mr-8px"
                        });
                        vue.setSharedData(__sharedData, 148, n226 == null ? void 0 : n226.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 147, n228 == null ? void 0 : n228.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 132, n229 == null ? void 0 : n229.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n232.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n233.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1b = {};
  const _style_1$1a = {};
  const SrcSubUviewUltraUviewUltra = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["styles", [_style_0$1b, _style_1$1a]]]);
  const logoImg$1 = "/assets/logo.de257528.png";
  const __className$19 = "GenSrcSubUiTestUiTest";
  const _sfc_main$1a = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$19,
    __filename: "src/sub/uiTest/uiTest.uvue",
    __name: "uiTest",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUiTestUiTestSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUiTestUiTestSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const logoSrc = logoImg$1;
      return () => {
        "raw js";
        const n10 = vue.createSharedDataComponent(AppKu, "86c4cc4a", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n9 = vue.createSharedDataComponent(LayoutComponent, "51d4bd0a", { "navigation-bar-title-text": "UI 测试" }, {
              "default": () => {
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedDataAttr(__sharedData, 2, vue.toSharedDataString(vue.unref(logoSrc)));
                });
              }
            });
            vue.setSharedData(__sharedData, 1, n9.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n10.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1a = {};
  const SrcSubUiTestUiTest = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["styles", [_style_0$1a]]]);
  const __className$18 = "GenSrcSubUviewUltraDemosIconIcon";
  const _sfc_main$19 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$18,
    __filename: "src/sub/uview-ultra/demos/icon/icon.uvue",
    __name: "icon",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosIconIconSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosIconIconSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_icon = vue.resolveComponent("up-icon");
        const n16 = vue.createSharedDataComponent(AppKu, "dacdd0da", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n15 = vue.createSharedDataComponent(LayoutComponent, "7eec4a7a", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-icon 图标"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "50b17e2e", {
                  title: "Icon 图标",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_icon, "50b185b0", {
                  name: "photo",
                  size: "28",
                  class: "mr-15px mb-15px"
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n3 = vue.createSharedDataComponentWithFallback(_component_up_icon, "50b18930", {
                  name: "lock",
                  size: "28",
                  class: "mr-15px mb-15px"
                });
                vue.setSharedData(__sharedData, 4, n3 == null ? void 0 : n3.sharedData);
                const n4 = vue.createSharedDataComponentWithFallback(_component_up_icon, "50b18c9a", {
                  name: "star",
                  size: "28",
                  class: "mr-15px mb-15px"
                });
                vue.setSharedData(__sharedData, 5, n4 == null ? void 0 : n4.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_icon, "50b19475", {
                  name: "heart-fill",
                  color: "#fa3534",
                  size: "28",
                  class: "mr-15px mb-15px"
                });
                vue.setSharedData(__sharedData, 6, n8 == null ? void 0 : n8.sharedData);
                const n9 = vue.createSharedDataComponentWithFallback(_component_up_icon, "50b19834", {
                  name: "github-circle-fill",
                  color: "#19be6b",
                  size: "28",
                  class: "mr-15px mb-15px"
                });
                vue.setSharedData(__sharedData, 7, n9 == null ? void 0 : n9.sharedData);
                const n10 = vue.createSharedDataComponentWithFallback(_component_up_icon, "50b19bfb", {
                  name: "google-circle-fill",
                  color: "#2979ff",
                  size: "28",
                  class: "mr-15px mb-15px"
                });
                vue.setSharedData(__sharedData, 8, n10 == null ? void 0 : n10.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n15.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n16.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$19 = {};
  const _style_1$19 = {};
  const SrcSubUviewUltraDemosIconIcon = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["styles", [_style_0$19, _style_1$19]]]);
  const __className$17 = "GenSrcSubUviewUltraDemosTextText";
  const _sfc_main$18 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$17,
    __filename: "src/sub/uview-ultra/demos/text/text.uvue",
    __name: "text",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosTextTextSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosTextTextSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_text = vue.resolveComponent("up-text");
        const n16 = vue.createSharedDataComponent(AppKu, "317f74fb", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n15 = vue.createSharedDataComponent(LayoutComponent, "0321ab4a", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-text 文本"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "6113bcd4", {
                  title: "Text 文本",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_text, "6113aed0", {
                  text: "主色文本",
                  type: "primary",
                  class: "mb-10px"
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n3 = vue.createSharedDataComponentWithFallback(_component_up_text, "6113a806", {
                  text: "成功文本",
                  type: "success",
                  class: "mb-10px"
                });
                vue.setSharedData(__sharedData, 4, n3 == null ? void 0 : n3.sharedData);
                const n4 = vue.createSharedDataComponentWithFallback(_component_up_text, "6113a652", {
                  text: "警告文本",
                  type: "warning",
                  class: "mb-10px"
                });
                vue.setSharedData(__sharedData, 5, n4 == null ? void 0 : n4.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_text, "61139f88", {
                  text: "错误文本",
                  type: "error",
                  class: "mb-10px"
                });
                vue.setSharedData(__sharedData, 6, n5 == null ? void 0 : n5.sharedData);
                const n6 = vue.createSharedDataComponentWithFallback(_component_up_text, "611398c2", {
                  text: "常规文本",
                  type: "info"
                });
                vue.setSharedData(__sharedData, 7, n6 == null ? void 0 : n6.sharedData);
                const n9 = vue.createSharedDataComponentWithFallback(_component_up_text, "61139040", {
                  text: "13888888888",
                  mode: "phone",
                  format: "encrypt",
                  class: "mb-10px"
                });
                vue.setSharedData(__sharedData, 8, n9 == null ? void 0 : n9.sharedData);
                const n10 = vue.createSharedDataComponentWithFallback(_component_up_text, "611388f6", {
                  text: "张三疯",
                  mode: "name",
                  format: "encrypt",
                  class: "mb-10px"
                });
                vue.setSharedData(__sharedData, 9, n10 == null ? void 0 : n10.sharedData);
                const n11 = vue.createSharedDataComponentWithFallback(_component_up_text, "611381be", {
                  text: "110105199001011234",
                  mode: "idcard",
                  format: "encrypt"
                });
                vue.setSharedData(__sharedData, 10, n11 == null ? void 0 : n11.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n15.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n16.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$18 = {};
  const _style_1$18 = {};
  const SrcSubUviewUltraDemosTextText = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["styles", [_style_0$18, _style_1$18]]]);
  const __className$16 = "GenSrcSubUviewUltraDemosLinkLink";
  const _sfc_main$17 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$16,
    __filename: "src/sub/uview-ultra/demos/link/link.uvue",
    __name: "link",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosLinkLinkSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosLinkLinkSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_link = vue.resolveComponent("up-link");
        const n13 = vue.createSharedDataComponent(AppKu, "302284d6", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n12 = vue.createSharedDataComponent(LayoutComponent, "15e8f501", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-link 超链接"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "b194a89e", {
                  title: "Link 超链接",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_link, "b1949a98", {
                  href: "https://uniapp.dcloud.io/",
                  text: "打开 uni-app 官网"
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_link, "b1948c44", {
                  href: "https://uview-plus.jiangruyi.com/",
                  text: "带下划线的超链接",
                  "under-line": true
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_link, "b1947d40", {
                  href: "https://github.com",
                  text: "自定义绿色 16px",
                  color: "#19be6b",
                  "font-size": "16"
                });
                vue.setSharedData(__sharedData, 5, n8 == null ? void 0 : n8.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n12.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n13.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$17 = {};
  const _style_1$17 = {};
  const SrcSubUviewUltraDemosLinkLink = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["styles", [_style_0$17, _style_1$17]]]);
  const __className$15 = "GenSrcSubUviewUltraDemosEmptyEmpty";
  const _sfc_main$16 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$15,
    __filename: "src/sub/uview-ultra/demos/empty/empty.uvue",
    __name: "empty",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosEmptyEmptySharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosEmptyEmptySharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_empty = vue.resolveComponent("up-empty");
        const n11 = vue.createSharedDataComponent(AppKu, "966d5cfe", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n10 = vue.createSharedDataComponent(LayoutComponent, "373e42d6", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-empty 空白页"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "b08a16c4", {
                  title: "Empty 空白页",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_empty, "b08a08bc", {
                  mode: "data",
                  class: "my-20px"
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_empty, "b08a0004", {
                  mode: "car",
                  class: "my-20px"
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
                const n6 = vue.createSharedDataComponentWithFallback(_component_up_empty, "b089f980", {
                  mode: "list",
                  class: "my-20px"
                });
                vue.setSharedData(__sharedData, 5, n6 == null ? void 0 : n6.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n10.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n11.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$16 = {};
  const _style_1$16 = {};
  const SrcSubUviewUltraDemosEmptyEmpty = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["styles", [_style_0$16, _style_1$16]]]);
  const __className$14 = "GenSrcSubUviewUltraDemosDividerDivider";
  const _sfc_main$15 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$14,
    __filename: "src/sub/uview-ultra/demos/divider/divider.uvue",
    __name: "divider",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosDividerDividerSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosDividerDividerSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_divider = vue.resolveComponent("up-divider");
        const n13 = vue.createSharedDataComponent(AppKu, "2c6a817e", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n12 = vue.createSharedDataComponent(LayoutComponent, "4f8d28d5", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-divider 分割线"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "bbd01b40", {
                  title: "Divider 分割线",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_divider, "bbd00d34", { text: "分割线" });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_divider, "bbd004c0", {
                  text: "虚线分割",
                  dashed: ""
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_divider, "bbcff6fa", {
                  text: "半截",
                  "half-width": ""
                });
                vue.setSharedData(__sharedData, 5, n8 == null ? void 0 : n8.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n12.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n13.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$15 = {};
  const _style_1$15 = {};
  const SrcSubUviewUltraDemosDividerDivider = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["styles", [_style_0$15, _style_1$15]]]);
  const __className$13 = "GenSrcSubUviewUltraDemosLoadingIconLoadingIcon";
  const _sfc_main$14 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$13,
    __filename: "src/sub/uview-ultra/demos/loading-icon/loading-icon.uvue",
    __name: "loading-icon",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosLoadingIconLoadingIconSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosLoadingIconLoadingIconSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_loading_icon = vue.resolveComponent("up-loading-icon");
        const n11 = vue.createSharedDataComponent(AppKu, "282c037e", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n10 = vue.createSharedDataComponent(LayoutComponent, "dd546c56", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-loading-icon 加载图标"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "cd391d0a", {
                  title: "LoadingIcon 加载图标",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_loading_icon, "cd390ef4", { class: "my-10px" });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_loading_icon, "cd3900f8", {
                  mode: "circle",
                  class: "my-10px"
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
                const n6 = vue.createSharedDataComponentWithFallback(_component_up_loading_icon, "cd38ff3e", {
                  mode: "semicircle",
                  class: "my-10px"
                });
                vue.setSharedData(__sharedData, 5, n6 == null ? void 0 : n6.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n10.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n11.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$14 = {};
  const _style_1$14 = {};
  const SrcSubUviewUltraDemosLoadingIconLoadingIcon = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["styles", [_style_0$14, _style_1$14]]]);
  const __className$12 = "GenSrcSubUviewUltraDemosSkeletonSkeleton";
  const _sfc_main$13 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$12,
    __filename: "src/sub/uview-ultra/demos/skeleton/skeleton.uvue",
    __name: "skeleton",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosSkeletonSkeletonSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosSkeletonSkeletonSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_skeleton = vue.resolveComponent("up-skeleton");
        const n10 = vue.createSharedDataComponent(AppKu, "9110568a", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n9 = vue.createSharedDataComponent(LayoutComponent, "3782c29b", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-skeleton 骨架屏"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "8e54dd4a", {
                  title: "Skeleton 骨架屏",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_skeleton, "8e54cf12", {
                  loading: true,
                  animate: true,
                  rows: 3,
                  title: ""
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_skeleton, "8e54c0be", {
                  loading: true,
                  animate: true,
                  rows: 2,
                  title: "",
                  avatar: ""
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n9.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n10.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$13 = {};
  const _style_1$13 = {};
  const SrcSubUviewUltraDemosSkeletonSkeleton = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["styles", [_style_0$13, _style_1$13]]]);
  const __className$11 = "GenSrcSubUviewUltraDemosCardCard";
  const logoImg = "/static/logo.png";
  const _sfc_main$12 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$11,
    __filename: "src/sub/uview-ultra/demos/card/card.uvue",
    __name: "card",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosCardCardSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosCardCardSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_card = vue.resolveComponent("up-card");
        const _component_up_button = vue.resolveComponent("up-button");
        const n32 = vue.createSharedDataComponent(AppKu, "66b6847e", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n31 = vue.createSharedDataComponent(LayoutComponent, "701a0b56", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-card 卡片"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "366c50dc", {
                  title: "up-card 卡片",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n4 = vue.createSharedDataComponentWithFallback(_component_up_card, "366c5880", {
                  title: "基础卡片",
                  "sub-title": "副标题",
                  margin: "0",
                  "show-foot": false
                }, {
                  "body": () => {
                  }
                });
                vue.setSharedData(__sharedData, 3, n4 == null ? void 0 : n4.sharedData);
                const n12 = vue.createSharedDataComponentWithFallback(_component_up_card, "366c637f", {
                  title: "带缩略图",
                  thumb: () => {
                    return logoImg;
                  },
                  "thumb-circle": true,
                  "thumb-width": "36px",
                  margin: "0"
                }, {
                  "body": () => {
                  },
                  "foot": () => {
                  }
                });
                vue.setSharedData(__sharedData, 4, n12 == null ? void 0 : n12.sharedData);
                const n22 = vue.createSharedDataComponentWithFallback(_component_up_card, "d1c48ee2", {
                  title: "订单信息",
                  "sub-title": "已完成",
                  thumb: () => {
                    return logoImg;
                  },
                  margin: "0"
                }, {
                  "body": () => {
                  },
                  "foot": vue.withSharedDataVaporCtx(() => {
                    const n18 = vue.createSharedDataComponentWithFallback(_component_up_button, "d1c47248", {
                      text: "评价",
                      type: "primary",
                      size: "mini",
                      plain: true,
                      class: "mr-10px"
                    });
                    vue.setSharedData(__sharedData, 6, n18 == null ? void 0 : n18.sharedData);
                    const n19 = vue.createSharedDataComponentWithFallback(_component_up_button, "d1c46a92", {
                      text: "再次购买",
                      type: "primary",
                      size: "mini"
                    });
                    vue.setSharedData(__sharedData, 7, n19 == null ? void 0 : n19.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 5, n22 == null ? void 0 : n22.sharedData);
                const n27 = vue.createSharedDataComponentWithFallback(_component_up_card, "d1c45aca", {
                  title: "带明显阴影",
                  "sub-title": "自定义",
                  margin: "0",
                  "box-shadow": "0 4px 12px rgba(0,0,0,0.1)",
                  border: false
                }, {
                  "body": () => {
                  }
                });
                vue.setSharedData(__sharedData, 8, n27 == null ? void 0 : n27.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n31.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n32.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$12 = {};
  const _style_1$12 = {};
  const SrcSubUviewUltraDemosCardCard = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["styles", [_style_0$12, _style_1$12]]]);
  const __className$10 = "GenSrcSubUviewUltraDemosListList";
  const _sfc_main$11 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$10,
    __filename: "src/sub/uview-ultra/demos/list/list.uvue",
    __name: "list",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosListListSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosListListSharedData", sharedDataClassId: 0 })));
      const __sharedDataScope = vue.useSharedDataScope(__sharedData);
      const listItems = vue.ref([
        new UTSJSONObject({ title: "列表 1 - 项目 01", desc: "支持下拉刷新与触底加载" }),
        new UTSJSONObject({ title: "列表 1 - 项目 02", desc: "基于 scroll-view 封装" }),
        new UTSJSONObject({ title: "列表 1 - 项目 03", desc: "支持单指内部滚动" }),
        new UTSJSONObject({ title: "列表 1 - 项目 04", desc: "支持单指内部滚动" }),
        new UTSJSONObject({ title: "列表 1 - 项目 05", desc: "支持单指内部滚动" }),
        new UTSJSONObject({ title: "列表 1 - 项目 06", desc: "支持单指内部滚动" }),
        new UTSJSONObject({ title: "列表 1 - 项目 07", desc: "支持单指内部滚动" }),
        new UTSJSONObject({ title: "列表 1 - 项目 08", desc: "支持单指内部滚动" }),
        new UTSJSONObject({ title: "列表 1 - 项目 09", desc: "支持单指内部滚动" }),
        new UTSJSONObject({ title: "列表 1 - 项目 10", desc: "支持单指内部滚动" }),
        new UTSJSONObject({ title: "列表 1 - 项目 11", desc: "支持单指内部滚动" }),
        new UTSJSONObject({ title: "列表 1 - 项目 12", desc: "支持单指内部滚动" }),
        new UTSJSONObject({ title: "列表 1 - 项目 13", desc: "支持单指内部滚动" }),
        new UTSJSONObject({ title: "列表 1 - 项目 14", desc: "支持单指内部滚动" }),
        new UTSJSONObject({ title: "列表 1 - 项目 15", desc: "支持单指内部滚动" })
      ]);
      const staticListItems = vue.ref([
        new UTSJSONObject({ title: "列表 2 - 项目 01", desc: "静态列表第 1 项内容" }),
        new UTSJSONObject({ title: "列表 2 - 项目 02", desc: "静态列表第 2 项内容" }),
        new UTSJSONObject({ title: "列表 2 - 项目 03", desc: "静态列表第 3 项内容" }),
        new UTSJSONObject({ title: "列表 2 - 项目 04", desc: "静态列表第 4 项内容" }),
        new UTSJSONObject({ title: "列表 2 - 项目 05", desc: "静态列表第 5 项内容" }),
        new UTSJSONObject({ title: "列表 2 - 项目 06", desc: "静态列表第 6 项内容" }),
        new UTSJSONObject({ title: "列表 2 - 项目 07", desc: "静态列表第 7 项内容" }),
        new UTSJSONObject({ title: "列表 2 - 项目 08", desc: "静态列表第 8 项内容" }),
        new UTSJSONObject({ title: "列表 2 - 项目 09", desc: "静态列表第 9 项内容" }),
        new UTSJSONObject({ title: "列表 2 - 项目 10", desc: "静态列表第 10 项内容" }),
        new UTSJSONObject({ title: "列表 2 - 项目 11", desc: "静态列表第 11 项内容" }),
        new UTSJSONObject({ title: "列表 2 - 项目 12", desc: "静态列表第 12 项内容" }),
        new UTSJSONObject({ title: "列表 2 - 项目 13", desc: "静态列表第 13 项内容" }),
        new UTSJSONObject({ title: "列表 2 - 项目 14", desc: "静态列表第 14 项内容" }),
        new UTSJSONObject({ title: "列表 2 - 项目 15", desc: "静态列表第 15 项内容" })
      ]);
      const listLoading = vue.ref(false);
      const listRefreshing = vue.ref(false);
      let listLoadCount = 1;
      function onListLoadMore() {
        if (listLoading.value)
          return null;
        listLoading.value = true;
        setTimeout(() => {
          listLoadCount += 1;
          const newItems = [];
          for (let i = 1; i <= 3; i++) {
            newItems.push(new UTSJSONObject({
              title: `加载项 ${listLoadCount}-${i}`,
              desc: `这是第 ${listLoadCount} 批加载的第 ${i} 条数据`
            }));
          }
          listItems.value = listItems.value.concat(newItems);
          listLoading.value = false;
          uni.showToast({ title: `加载了 ${newItems.length} 条`, icon: "none", duration: 1500 });
        }, 1e3);
      }
      function onListRefresh() {
        listRefreshing.value = true;
        setTimeout(() => {
          listRefreshing.value = false;
          uni.showToast({ title: "刷新完成", icon: "none", duration: 1500 });
        }, 1500);
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_icon = vue.resolveComponent("up-icon");
        const _component_up_loading_icon = vue.resolveComponent("up-loading-icon");
        const _component_up_list = vue.resolveComponent("up-list");
        const n30 = vue.createSharedDataComponent(AppKu, "6921ca46", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n29 = vue.createSharedDataComponent(LayoutComponent, "bb177e8e", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-list 列表",
              "disable-scroll": true
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "a7d84c40", {
                  title: "up-list 双列表嵌套",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n15 = vue.createSharedDataComponentWithFallback(_component_up_list, "a7d82d84", {
                  height: 580,
                  "lower-threshold": 20,
                  "refresher-enabled": true,
                  "refresher-triggered": () => {
                    return listRefreshing.value;
                  },
                  class: "bg-white rounded-8px shadow-xs",
                  onScrolltolower: () => {
                    return onListLoadMore;
                  },
                  onRefresherrefresh: () => {
                    return onListRefresh;
                  }
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 4, vue.createSharedDataVFor(__sharedDataScope, () => {
                      return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$10}SharedData`, sharedDataClassId: 1 });
                    })), () => {
                      return listItems.value;
                    }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                      const n4 = vue.createSharedDataComponentWithFallback(_component_up_icon, "533222e0-" + _for_key0.value, {
                        name: "account",
                        size: "20",
                        color: "#ffffff"
                      });
                      vue.setSharedData(__sharedData_VFor0, 1, n4 == null ? void 0 : n4.sharedData);
                      vue.renderSharedDataEffect(() => {
                        const _item = _for_item0.value;
                        vue.setSharedData(__sharedData_VFor0, 2, vue.toDisplayString(_item.title));
                        vue.setSharedData(__sharedData_VFor0, 3, vue.toDisplayString(_item.desc));
                      });
                      return null;
                    }, (__sharedData_VFor0, item, idx) => {
                      return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(idx));
                    }, 32);
                    vue.createSharedDataIf(() => {
                      return vue.setSharedData(__sharedData, 5, vue.toSharedDataBoolean(listLoading.value));
                    }, () => {
                      const n12 = vue.createSharedDataComponentWithFallback(_component_up_loading_icon, "5331fec4", {
                        mode: "circle",
                        size: "20"
                      });
                      vue.setSharedData(__sharedData, 6, n12 == null ? void 0 : n12.sharedData);
                    }, null, 129);
                  })
                });
                vue.setSharedData(__sharedData, 3, n15 == null ? void 0 : n15.sharedData);
                const n25 = vue.createSharedDataComponentWithFallback(_component_up_list, "5331df88", {
                  height: 280,
                  class: "bg-white rounded-8px shadow-xs"
                }, {
                  "default": () => {
                    vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 8, vue.createSharedDataVFor(__sharedDataScope, () => {
                      return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$10}SharedData`, sharedDataClassId: 2 });
                    })), () => {
                      return staticListItems.value;
                    }, (__sharedData_VFor1, _for_item1, _for_key1) => {
                      vue.renderSharedDataEffect(() => {
                        const _item = _for_item1.value;
                        vue.setSharedData(__sharedData_VFor1, 1, vue.toDisplayString(_item.title));
                        vue.setSharedData(__sharedData_VFor1, 2, vue.toDisplayString(_item.desc));
                      });
                      return null;
                    }, (__sharedData_VFor1, item, idx) => {
                      return vue.setSharedData(__sharedData_VFor1, 0, vue.toDisplayString(idx));
                    }, 32);
                  }
                });
                vue.setSharedData(__sharedData, 7, n25 == null ? void 0 : n25.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n29.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n30.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$11 = {};
  const _style_1$11 = {};
  const SrcSubUviewUltraDemosListList = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["styles", [_style_0$11, _style_1$11]]]);
  const __className$$ = "GenSrcSubUviewUltraDemosSwiperSwiper";
  const _sfc_main$10 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$$,
    __filename: "src/sub/uview-ultra/demos/swiper/swiper.uvue",
    __name: "swiper",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosSwiperSwiperSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosSwiperSwiperSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const swiperList = vue.ref([
        new UTSJSONObject({ image: "/static/logo.png", title: "uview-ultra 组件演示" }),
        new UTSJSONObject({ image: "/static/logo.png", title: "高品质 UI 组件库" }),
        new UTSJSONObject({ image: "/static/logo.png", title: "多端适配 · 开箱即用" })
      ]);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_swiper = vue.resolveComponent("up-swiper");
        const n10 = vue.createSharedDataComponent(AppKu, "d3d7f2de", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n9 = vue.createSharedDataComponent(LayoutComponent, "2c6ccb85", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-swiper 轮播图"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "612ca5af", {
                  title: "Swiper 轮播图",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_swiper, "612cad69", {
                  list: () => {
                    return swiperList.value;
                  },
                  "key-name": "image",
                  indicator: true,
                  "indicator-mode": "dot",
                  circular: true,
                  autoplay: true,
                  interval: 3e3,
                  height: "180",
                  "show-title": true
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_swiper, "612cbc4d", {
                  list: () => {
                    return swiperList.value;
                  },
                  "key-name": "image",
                  indicator: true,
                  "indicator-mode": "line",
                  "indicator-active-color": "#2979ff",
                  "indicator-inactive-color": "rgba(0, 0, 0, 0.15)",
                  circular: true,
                  "previous-margin": 30,
                  "next-margin": 30,
                  height: "160"
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n9.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n10.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$10 = {};
  const _style_1$10 = {};
  const SrcSubUviewUltraDemosSwiperSwiper = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["styles", [_style_0$10, _style_1$10]]]);
  const __className$_ = "GenSrcSubUviewUltraDemosImageImage";
  const _sfc_main$$ = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$_,
    __filename: "src/sub/uview-ultra/demos/image/image.uvue",
    __name: "image",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosImageImageSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosImageImageSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_image = vue.resolveComponent("up-image");
        const n16 = vue.createSharedDataComponent(AppKu, "9e1f0b7e", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n15 = vue.createSharedDataComponent(LayoutComponent, "6d1ecdd5", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-image 图片"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "36baed5d", {
                  title: "Image 图片",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_image, "36baf822", {
                  src: "/static/logo.png",
                  width: "60px",
                  height: "60px"
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n4 = vue.createSharedDataComponentWithFallback(_component_up_image, "36bafc22", {
                  src: "/static/logo.png",
                  width: "60px",
                  height: "60px",
                  shape: "circle"
                });
                vue.setSharedData(__sharedData, 4, n4 == null ? void 0 : n4.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_image, "36bb06e8", {
                  src: "/static/logo.png",
                  width: "80px",
                  height: "60px",
                  mode: "aspectFit"
                });
                vue.setSharedData(__sharedData, 5, n8 == null ? void 0 : n8.sharedData);
                const n10 = vue.createSharedDataComponentWithFallback(_component_up_image, "36bb0b23", {
                  src: "/static/logo.png",
                  width: "80px",
                  height: "60px",
                  mode: "scaleToFill"
                });
                vue.setSharedData(__sharedData, 6, n10 == null ? void 0 : n10.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n15.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n16.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$$ = {};
  const _style_1$$ = {};
  const SrcSubUviewUltraDemosImageImage = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["styles", [_style_0$$, _style_1$$]]]);
  const __className$Z = "GenSrcSubUviewUltraDemosTransitionTransition";
  const _sfc_main$_ = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$Z,
    __filename: "src/sub/uview-ultra/demos/transition/transition.uvue",
    __name: "transition",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosTransitionTransitionSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosTransitionTransitionSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const transitionShow = vue.ref(true);
      const slideMode = vue.ref("slide-up");
      const slideShow = vue.ref(false);
      function triggerSlide(mode) {
        slideMode.value = mode;
        slideShow.value = true;
        setTimeout(() => {
          slideShow.value = false;
        }, 1500);
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_transition = vue.resolveComponent("up-transition");
        const _component_up_button = vue.resolveComponent("up-button");
        const n29 = vue.createSharedDataComponent(AppKu, "5d80d4ea", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n28 = vue.createSharedDataComponent(LayoutComponent, "56b31bcb", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-transition 动画"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "7fb05e41", {
                  title: "Transition 动画",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n4 = vue.createSharedDataComponentWithFallback(_component_up_transition, "7fb0690f", {
                  show: () => {
                    return transitionShow.value;
                  },
                  mode: "fade"
                }, {
                  "default": () => {
                  }
                });
                vue.setSharedData(__sharedData, 3, n4 == null ? void 0 : n4.sharedData);
                const _on_click = () => {
                  return transitionShow.value = !transitionShow.value;
                };
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_button, "7fb0742f", {
                  type: "primary",
                  text: () => {
                    return transitionShow.value ? "隐藏动画" : "显示动画";
                  },
                  size: "mini",
                  onClick: () => {
                    return _on_click;
                  }
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
                const n12 = vue.createSharedDataComponentWithFallback(_component_up_transition, "765b4ca9", {
                  show: () => {
                    return transitionShow.value;
                  },
                  mode: "zoom"
                }, {
                  "default": () => {
                  }
                });
                vue.setSharedData(__sharedData, 5, n12 == null ? void 0 : n12.sharedData);
                const n18 = vue.createSharedDataComponentWithFallback(_component_up_transition, "765b5bc5", {
                  show: () => {
                    return slideShow.value;
                  },
                  mode: () => {
                    return slideMode.value;
                  }
                }, {
                  "default": () => {
                  }
                });
                vue.setSharedData(__sharedData, 6, n18 == null ? void 0 : n18.sharedData);
                const _on_click1 = () => {
                  return triggerSlide("slide-up");
                };
                const n20 = vue.createSharedDataComponentWithFallback(_component_up_button, "765b674d", {
                  type: "primary",
                  text: "上滑",
                  size: "mini",
                  "custom-style": "margin: 0 4px;",
                  onClick: () => {
                    return _on_click1;
                  }
                });
                vue.setSharedData(__sharedData, 7, n20 == null ? void 0 : n20.sharedData);
                const _on_click2 = () => {
                  return triggerSlide("slide-down");
                };
                const n21 = vue.createSharedDataComponentWithFallback(_component_up_button, "765b6e10", {
                  type: "success",
                  text: "下滑",
                  size: "mini",
                  "custom-style": "margin: 0 4px;",
                  onClick: () => {
                    return _on_click2;
                  }
                });
                vue.setSharedData(__sharedData, 8, n21 == null ? void 0 : n21.sharedData);
                const _on_click3 = () => {
                  return triggerSlide("slide-left");
                };
                const n22 = vue.createSharedDataComponentWithFallback(_component_up_button, "765bc10a", {
                  type: "warning",
                  text: "左滑",
                  size: "mini",
                  "custom-style": "margin: 0 4px;",
                  onClick: () => {
                    return _on_click3;
                  }
                });
                vue.setSharedData(__sharedData, 9, n22 == null ? void 0 : n22.sharedData);
                const _on_click4 = () => {
                  return triggerSlide("slide-right");
                };
                const n23 = vue.createSharedDataComponentWithFallback(_component_up_button, "765bc544", {
                  type: "error",
                  text: "右滑",
                  size: "mini",
                  "custom-style": "margin: 0 4px;",
                  onClick: () => {
                    return _on_click4;
                  }
                });
                vue.setSharedData(__sharedData, 10, n23 == null ? void 0 : n23.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n28.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n29.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$_ = {};
  const _style_1$_ = {};
  const SrcSubUviewUltraDemosTransitionTransition = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["styles", [_style_0$_, _style_1$_]]]);
  const __className$Y = "GenSrcSubUviewUltraDemosStepsSteps";
  const _sfc_main$Z = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$Y,
    __filename: "src/sub/uview-ultra/demos/steps/steps.uvue",
    __name: "steps",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosStepsStepsSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosStepsStepsSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const currentStep = vue.ref(1);
      function nextStep() {
        currentStep.value = (currentStep.value + 1) % 4;
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_steps_item = vue.resolveComponent("up-steps-item");
        const _component_up_steps = vue.resolveComponent("up-steps");
        const _component_up_button = vue.resolveComponent("up-button");
        const n33 = vue.createSharedDataComponent(AppKu, "39a64c7e", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n32 = vue.createSharedDataComponent(LayoutComponent, "fb234356", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-steps 步骤条"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "69452644", {
                  title: "Steps 步骤条",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n6 = vue.createSharedDataComponentWithFallback(_component_up_steps, "694516fc", { current: () => {
                  return currentStep.value;
                } }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n2 = vue.createSharedDataComponentWithFallback(_component_up_steps_item, "694510bc", {
                      title: "已下单",
                      desc: "10:30"
                    });
                    vue.setSharedData(__sharedData, 4, n2 == null ? void 0 : n2.sharedData);
                    const n3 = vue.createSharedDataComponentWithFallback(_component_up_steps_item, "694509fa", {
                      title: "已出库",
                      desc: "10:35"
                    });
                    vue.setSharedData(__sharedData, 5, n3 == null ? void 0 : n3.sharedData);
                    const n4 = vue.createSharedDataComponentWithFallback(_component_up_steps_item, "69450878", {
                      title: "运输中",
                      desc: "11:40"
                    });
                    vue.setSharedData(__sharedData, 6, n4 == null ? void 0 : n4.sharedData);
                    const n5 = vue.createSharedDataComponentWithFallback(_component_up_steps_item, "694501b6", {
                      title: "已签收",
                      desc: "14:20"
                    });
                    vue.setSharedData(__sharedData, 7, n5 == null ? void 0 : n5.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 3, n6 == null ? void 0 : n6.sharedData);
                const n7 = vue.createSharedDataComponentWithFallback(_component_up_button, "6944f938", {
                  size: "small",
                  type: "primary",
                  text: "下一步",
                  onClick: () => {
                    return nextStep;
                  }
                });
                vue.setSharedData(__sharedData, 8, n7 == null ? void 0 : n7.sharedData);
                const n15 = vue.createSharedDataComponentWithFallback(_component_up_steps, "6944e9f4", {
                  current: 1,
                  dot: true
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n12 = vue.createSharedDataComponentWithFallback(_component_up_steps_item, "bf5fd71e", {
                      title: "已下单",
                      desc: "10:30"
                    });
                    vue.setSharedData(__sharedData, 10, n12 == null ? void 0 : n12.sharedData);
                    const n13 = vue.createSharedDataComponentWithFallback(_component_up_steps_item, "bf5fd05c", {
                      title: "已出库",
                      desc: "10:35"
                    });
                    vue.setSharedData(__sharedData, 11, n13 == null ? void 0 : n13.sharedData);
                    const n14 = vue.createSharedDataComponentWithFallback(_component_up_steps_item, "bf5fceda", {
                      title: "运输中",
                      desc: "11:40"
                    });
                    vue.setSharedData(__sharedData, 12, n14 == null ? void 0 : n14.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 9, n15 == null ? void 0 : n15.sharedData);
                const n21 = vue.createSharedDataComponentWithFallback(_component_up_steps, "bf5fc012", {
                  current: 1,
                  "active-color": "#19be6b"
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n18 = vue.createSharedDataComponentWithFallback(_component_up_steps_item, "bf5fb98e", {
                      title: "已下单",
                      desc: "10:30"
                    });
                    vue.setSharedData(__sharedData, 14, n18 == null ? void 0 : n18.sharedData);
                    const n19 = vue.createSharedDataComponentWithFallback(_component_up_steps_item, "bf5fb7e2", {
                      title: "出库异常",
                      desc: "10:35",
                      error: true
                    });
                    vue.setSharedData(__sharedData, 15, n19 == null ? void 0 : n19.sharedData);
                    const n20 = vue.createSharedDataComponentWithFallback(_component_up_steps_item, "bf5fb0d8", {
                      title: "运输中",
                      desc: "11:40"
                    });
                    vue.setSharedData(__sharedData, 16, n20 == null ? void 0 : n20.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 13, n21 == null ? void 0 : n21.sharedData);
                const n28 = vue.createSharedDataComponentWithFallback(_component_up_steps, "bf5fa246", {
                  current: 1,
                  direction: "column"
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n24 = vue.createSharedDataComponentWithFallback(_component_up_steps_item, "bf5f9bca", {
                      title: "已下单",
                      desc: "买家已提交订单 10:30"
                    });
                    vue.setSharedData(__sharedData, 18, n24 == null ? void 0 : n24.sharedData);
                    const n25 = vue.createSharedDataComponentWithFallback(_component_up_steps_item, "bf5f9a0e", {
                      title: "已出库",
                      desc: "包裹已出库并在分拣 10:35"
                    });
                    vue.setSharedData(__sharedData, 19, n25 == null ? void 0 : n25.sharedData);
                    const n26 = vue.createSharedDataComponentWithFallback(_component_up_steps_item, "bf5f930e", {
                      title: "运输中",
                      desc: "快件正在运往目的地 11:40"
                    });
                    vue.setSharedData(__sharedData, 20, n26 == null ? void 0 : n26.sharedData);
                    const n27 = vue.createSharedDataComponentWithFallback(_component_up_steps_item, "bf5eee64", {
                      title: "已签收",
                      desc: "快件已安全送达 14:20"
                    });
                    vue.setSharedData(__sharedData, 21, n27 == null ? void 0 : n27.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 17, n28 == null ? void 0 : n28.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n32.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n33.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$Z = {};
  const _style_1$Z = {};
  const SrcSubUviewUltraDemosStepsSteps = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["styles", [_style_0$Z, _style_1$Z]]]);
  const __className$X = "GenSrcSubUviewUltraDemosTableTable";
  const _sfc_main$Y = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$X,
    __filename: "src/sub/uview-ultra/demos/table/table.uvue",
    __name: "table",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosTableTableSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosTableTableSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_th = vue.resolveComponent("up-th");
        const _component_up_tr = vue.resolveComponent("up-tr");
        const _component_up_td = vue.resolveComponent("up-td");
        const _component_up_table = vue.resolveComponent("up-table");
        const n31 = vue.createSharedDataComponent(AppKu, "15f49221", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n30 = vue.createSharedDataComponent(LayoutComponent, "aec49c16", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-table 表格"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "6b188d3d", {
                  title: "Table 表格",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n14 = vue.createSharedDataComponentWithFallback(_component_up_table, "6b1894df", null, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n5 = vue.createSharedDataComponentWithFallback(_component_up_tr, "6b1897a9", null, {
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n2 = vue.createSharedDataComponentWithFallback(_component_up_th, "6b1897e7", { text: "学校" });
                        vue.setSharedData(__sharedData, 5, n2 == null ? void 0 : n2.sharedData);
                        const n3 = vue.createSharedDataComponentWithFallback(_component_up_th, "6b189861", { text: "班级" });
                        vue.setSharedData(__sharedData, 6, n3 == null ? void 0 : n3.sharedData);
                        const n4 = vue.createSharedDataComponentWithFallback(_component_up_th, "6b189b66", { text: "年龄" });
                        vue.setSharedData(__sharedData, 7, n4 == null ? void 0 : n4.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
                    const n9 = vue.createSharedDataComponentWithFallback(_component_up_tr, "6b189c06", null, {
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n6 = vue.createSharedDataComponentWithFallback(_component_up_td, "6b189c44", { text: "浙江大学" });
                        vue.setSharedData(__sharedData, 9, n6 == null ? void 0 : n6.sharedData);
                        const n7 = vue.createSharedDataComponentWithFallback(_component_up_td, "6b189f4b", { text: "二年级" });
                        vue.setSharedData(__sharedData, 10, n7 == null ? void 0 : n7.sharedData);
                        const n8 = vue.createSharedDataComponentWithFallback(_component_up_td, "6b189fc6", { text: "22" });
                        vue.setSharedData(__sharedData, 11, n8 == null ? void 0 : n8.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 8, n9 == null ? void 0 : n9.sharedData);
                    const n13 = vue.createSharedDataComponentWithFallback(_component_up_tr, "6b18a306", null, {
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n10 = vue.createSharedDataComponentWithFallback(_component_up_td, "6b18a344", { text: "清华大学" });
                        vue.setSharedData(__sharedData, 13, n10 == null ? void 0 : n10.sharedData);
                        const n11 = vue.createSharedDataComponentWithFallback(_component_up_td, "6b18a3c0", { text: "05班" });
                        vue.setSharedData(__sharedData, 14, n11 == null ? void 0 : n11.sharedData);
                        const n12 = vue.createSharedDataComponentWithFallback(_component_up_td, "6b18a6c6", { text: "24" });
                        vue.setSharedData(__sharedData, 15, n12 == null ? void 0 : n12.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 12, n13 == null ? void 0 : n13.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 3, n14 == null ? void 0 : n14.sharedData);
                const n26 = vue.createSharedDataComponentWithFallback(_component_up_table, "6b18ab61", { border: false }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n19 = vue.createSharedDataComponentWithFallback(_component_up_tr, "100e004e", null, {
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n17 = vue.createSharedDataComponentWithFallback(_component_up_th, "100dffd2", { text: "名称" });
                        vue.setSharedData(__sharedData, 18, n17 == null ? void 0 : n17.sharedData);
                        const n18 = vue.createSharedDataComponentWithFallback(_component_up_th, "100dfede", { text: "类型" });
                        vue.setSharedData(__sharedData, 19, n18 == null ? void 0 : n18.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 17, n19 == null ? void 0 : n19.sharedData);
                    const n22 = vue.createSharedDataComponentWithFallback(_component_up_tr, "100df85e", null, {
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n20 = vue.createSharedDataComponentWithFallback(_component_up_td, "100df7e2", { text: "uview-ultra" });
                        vue.setSharedData(__sharedData, 21, n20 == null ? void 0 : n20.sharedData);
                        const n21 = vue.createSharedDataComponentWithFallback(_component_up_td, "100df6dc", { text: "UI库" });
                        vue.setSharedData(__sharedData, 22, n21 == null ? void 0 : n21.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 20, n22 == null ? void 0 : n22.sharedData);
                    const n25 = vue.createSharedDataComponentWithFallback(_component_up_tr, "100df05a", null, {
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n23 = vue.createSharedDataComponentWithFallback(_component_up_td, "100defde", { text: "uni-app X" });
                        vue.setSharedData(__sharedData, 24, n23 == null ? void 0 : n23.sharedData);
                        const n24 = vue.createSharedDataComponentWithFallback(_component_up_td, "100de99c", { text: "框架" });
                        vue.setSharedData(__sharedData, 25, n24 == null ? void 0 : n24.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 23, n25 == null ? void 0 : n25.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 16, n26 == null ? void 0 : n26.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n30.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n31.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$Y = {};
  const _style_1$Y = {};
  const SrcSubUviewUltraDemosTableTable = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["styles", [_style_0$Y, _style_1$Y]]]);
  const __className$W = "GenSrcSubUviewUltraDemosFormForm";
  const _sfc_main$X = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$W,
    __filename: "src/sub/uview-ultra/demos/form/form.uvue",
    __name: "form",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosFormFormSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosFormFormSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const formModel = vue.reactive(new UTSJSONObject({
        name: "",
        gender: "",
        birthday: "",
        country: "",
        stayTime: "",
        fruit: "apple",
        hobbies: ["reading"],
        notification: true,
        rate: 4,
        count: 1,
        satisfaction: 80,
        intro: "",
        photos: []
      }));
      const formModel2 = vue.reactive(new UTSJSONObject({
        name: "",
        detail: ""
      }));
      const formRules = new UTSJSONObject({
        name: [
          new UTSJSONObject({
            required: true,
            message: "请填写姓名",
            trigger: ["blur", "change"]
          }),
          new UTSJSONObject({
            min: 2,
            max: 10,
            message: "姓名长度在2到10个字符",
            trigger: ["blur", "change"]
          })
        ],
        gender: [
          new UTSJSONObject({
            required: true,
            message: "请选择性别",
            trigger: ["change"]
          })
        ],
        birthday: [
          new UTSJSONObject({
            required: true,
            message: "请选择出生日期",
            trigger: ["change"]
          })
        ],
        intro: [
          new UTSJSONObject({
            required: true,
            message: "请填写个人简介",
            trigger: ["blur", "change"]
          })
        ]
      });
      const uForm = vue.ref(null);
      const uploadList = vue.ref([]);
      function submitForm() {
        const form = uForm.value;
        if (form != null) {
          form.$callMethod("validate").then((res = null) => {
            uni.showToast({
              title: "验证通过，提交成功！",
              icon: "success"
            });
            uni.__log__("log", "at src/sub/uview-ultra/demos/form/form.uvue:262", "提交的数据：", formModel);
          }).catch((err = null) => {
            uni.__log__("log", "at src/sub/uview-ultra/demos/form/form.uvue:264", "验证失败:", err);
            uni.showToast({
              title: "请检查必填项",
              icon: "error"
            });
          });
        }
      }
      function resetForm() {
        const form = uForm.value;
        if (form != null) {
          form.$callMethod("resetFields");
          formModel.gender = "";
          formModel.birthday = "";
          formModel.country = "";
          formModel.stayTime = "";
          formModel.hobbies = ["reading"];
          uploadList.value = [];
          uni.showToast({
            title: "已重置表单",
            icon: "none"
          });
        }
      }
      const genderActionShow = vue.ref(false);
      const genderActions = vue.ref([
        new UTSJSONObject({ name: "男" }),
        new UTSJSONObject({ name: "女" }),
        new UTSJSONObject({ name: "保密" })
      ]);
      function onGenderSelect(item) {
        var _a;
        formModel.gender = (_a = item.getString("name")) !== null && _a !== void 0 ? _a : "";
        genderActionShow.value = false;
        const form = uForm.value;
        if (form != null) {
          form.$callMethod("validateField", "gender");
        }
      }
      const calendarShow = vue.ref(false);
      function onCalendarConfirm(dates) {
        if (dates.length > 0) {
          if (dates.length > 1) {
            formModel.stayTime = `${dates[0]} 至 ${dates[dates.length - 1]}`;
          } else {
            formModel.stayTime = dates[0];
          }
        }
        calendarShow.value = false;
      }
      const pickerShow = vue.ref(false);
      const pickerColumns = vue.ref([
        ["中国", "美国", "日本", "英国", "法国", "德国", "澳大利亚"]
      ]);
      function onPickerConfirm(e) {
        const indexs = e["indexs"];
        if (indexs.length > 0) {
          formModel.country = pickerColumns.value[0][indexs[0]];
        }
        pickerShow.value = false;
      }
      const datetimePickerShow = vue.ref(false);
      const datetimePickerValue = vue.ref((/* @__PURE__ */ new Date()).getTime());
      function onDatetimePickerConfirm(e) {
        const value = e["value"];
        if (value != null) {
          datetimePickerValue.value = value;
          let timestamp = 0;
          if (typeof value === "number") {
            timestamp = value;
          } else {
            timestamp = Number.parseInt(value.toString());
          }
          const d = new Date(timestamp);
          const year = d.getFullYear();
          const month = d.getMonth() + 1;
          const date = d.getDate();
          const monthStr = month < 10 ? `0${month}` : `${month}`;
          const dateStr = date < 10 ? `0${date}` : `${date}`;
          formModel.birthday = `${year}-${monthStr}-${dateStr}`;
          const form = uForm.value;
          if (form != null) {
            form.$callMethod("validateField", "birthday");
          }
        }
        datetimePickerShow.value = false;
      }
      function onUploadAfterRead(e) {
        const file = e["file"];
        file.forEach((item) => {
          uploadList.value.push(UTSJSONObject.assign(new UTSJSONObject({}), item));
        });
        formModel.photos = uploadList.value;
      }
      function onUploadDelete(e) {
        const index = e["index"];
        if (index >= 0 && index < uploadList.value.length) {
          uploadList.value.splice(index, 1);
        }
        formModel.photos = uploadList.value;
      }
      return () => {
        "raw js";
        const _setTemplateRef = vue.createSharedDataTemplateRefSetter();
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_input = vue.resolveComponent("up-input");
        const _component_up_form_item = vue.resolveComponent("up-form-item");
        const _component_up_icon = vue.resolveComponent("up-icon");
        const _component_up_radio = vue.resolveComponent("up-radio");
        const _component_up_radio_group = vue.resolveComponent("up-radio-group");
        const _component_up_checkbox = vue.resolveComponent("up-checkbox");
        const _component_up_checkbox_group = vue.resolveComponent("up-checkbox-group");
        const _component_up_switch = vue.resolveComponent("up-switch");
        const _component_up_rate = vue.resolveComponent("up-rate");
        const _component_up_number_box = vue.resolveComponent("up-number-box");
        const _component_up_slider = vue.resolveComponent("up-slider");
        const _component_up_textarea = vue.resolveComponent("up-textarea");
        const _component_up_upload = vue.resolveComponent("up-upload");
        const _component_up_form = vue.resolveComponent("up-form");
        const _component_up_button = vue.resolveComponent("up-button");
        const _component_up_calendar = vue.resolveComponent("up-calendar");
        const _component_up_picker = vue.resolveComponent("up-picker");
        const _component_up_datetime_picker = vue.resolveComponent("up-datetime-picker");
        const _component_up_action_sheet = vue.resolveComponent("up-action-sheet");
        const n67 = vue.createSharedDataComponent(AppKu, "b189a5ae", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n66 = vue.createSharedDataComponent(LayoutComponent, "402a77ed", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-form 表单"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "75b6f378", {
                  title: "Form 表单",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n46 = vue.createSharedDataComponentWithFallback(_component_up_form, "75b6e430", {
                  model: () => {
                    return formModel;
                  },
                  rules: () => {
                    return formRules;
                  },
                  "label-width": "90px",
                  "error-type": "toast"
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n3 = vue.createSharedDataComponentWithFallback(_component_up_form_item, "75b6d5ec", {
                      label: "姓名",
                      prop: "name",
                      "border-bottom": true,
                      required: ""
                    }, {
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n2 = vue.createSharedDataComponentWithFallback(_component_up_input, "75b6cee4", {
                          modelValue: () => {
                            return formModel.name;
                          },
                          "onUpdate:modelValue": () => {
                            return (_value) => {
                              return formModel.name = _value;
                            };
                          },
                          placeholder: "请输入姓名",
                          border: "none",
                          clearable: ""
                        });
                        vue.setSharedData(__sharedData, 9, n2 == null ? void 0 : n2.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 8, n3 == null ? void 0 : n3.sharedData);
                    const _on_click = () => {
                      return genderActionShow.value = true;
                    };
                    const n7 = vue.createSharedDataComponentWithFallback(_component_up_form_item, "75b6c6ac", {
                      label: "性别",
                      prop: "gender",
                      "border-bottom": true,
                      required: "",
                      onClick: () => {
                        return _on_click;
                      }
                    }, {
                      "right": vue.withSharedDataVaporCtx(() => {
                        const n5 = vue.createSharedDataComponentWithFallback(_component_up_icon, "4127a8aa", {
                          name: "arrow-right",
                          color: "#c0c4cc",
                          size: "16"
                        });
                        vue.setSharedData(__sharedData, 11, n5 == null ? void 0 : n5.sharedData);
                      }),
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n4 = vue.createSharedDataComponentWithFallback(_component_up_input, "75b6bee0", {
                          modelValue: () => {
                            return formModel.gender;
                          },
                          "onUpdate:modelValue": () => {
                            return (_value) => {
                              return formModel.gender = _value;
                            };
                          },
                          disabled: "",
                          "disabled-color": "#ffffff",
                          placeholder: "请选择性别",
                          border: "none"
                        });
                        vue.setSharedData(__sharedData, 12, n4 == null ? void 0 : n4.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 10, n7 == null ? void 0 : n7.sharedData);
                    const _on_click1 = () => {
                      return datetimePickerShow.value = true;
                    };
                    const n11 = vue.createSharedDataComponentWithFallback(_component_up_form_item, "4127a0a0", {
                      label: "出生日期",
                      prop: "birthday",
                      "border-bottom": true,
                      required: "",
                      onClick: () => {
                        return _on_click1;
                      }
                    }, {
                      "right": vue.withSharedDataVaporCtx(() => {
                        const n9 = vue.createSharedDataComponentWithFallback(_component_up_icon, "41278352", {
                          name: "arrow-right",
                          color: "#c0c4cc",
                          size: "16"
                        });
                        vue.setSharedData(__sharedData, 14, n9 == null ? void 0 : n9.sharedData);
                      }),
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n8 = vue.createSharedDataComponentWithFallback(_component_up_input, "41279874", {
                          modelValue: () => {
                            return formModel.birthday;
                          },
                          "onUpdate:modelValue": () => {
                            return (_value) => {
                              return formModel.birthday = _value;
                            };
                          },
                          disabled: "",
                          "disabled-color": "#ffffff",
                          placeholder: "请选择出生日期",
                          border: "none"
                        });
                        vue.setSharedData(__sharedData, 15, n8 == null ? void 0 : n8.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 13, n11 == null ? void 0 : n11.sharedData);
                    const _on_click2 = () => {
                      return pickerShow.value = true;
                    };
                    const n15 = vue.createSharedDataComponentWithFallback(_component_up_form_item, "41277b1e", {
                      label: "国籍",
                      prop: "country",
                      "border-bottom": true,
                      onClick: () => {
                        return _on_click2;
                      }
                    }, {
                      "right": vue.withSharedDataVaporCtx(() => {
                        const n13 = vue.createSharedDataComponentWithFallback(_component_up_icon, "4126c5be", {
                          name: "arrow-right",
                          color: "#c0c4cc",
                          size: "16"
                        });
                        vue.setSharedData(__sharedData, 17, n13 == null ? void 0 : n13.sharedData);
                      }),
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n12 = vue.createSharedDataComponentWithFallback(_component_up_input, "41277398", {
                          modelValue: () => {
                            return formModel.country;
                          },
                          "onUpdate:modelValue": () => {
                            return (_value) => {
                              return formModel.country = _value;
                            };
                          },
                          disabled: "",
                          "disabled-color": "#ffffff",
                          placeholder: "请选择国籍",
                          border: "none"
                        });
                        vue.setSharedData(__sharedData, 18, n12 == null ? void 0 : n12.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 16, n15 == null ? void 0 : n15.sharedData);
                    const _on_click3 = () => {
                      return calendarShow.value = true;
                    };
                    const n19 = vue.createSharedDataComponentWithFallback(_component_up_form_item, "4126b89e", {
                      label: "行程时间",
                      prop: "stayTime",
                      "border-bottom": true,
                      onClick: () => {
                        return _on_click3;
                      }
                    }, {
                      "right": vue.withSharedDataVaporCtx(() => {
                        const n17 = vue.createSharedDataComponentWithFallback(_component_up_icon, "4126a0ae", {
                          name: "arrow-right",
                          color: "#c0c4cc",
                          size: "16"
                        });
                        vue.setSharedData(__sharedData, 20, n17 == null ? void 0 : n17.sharedData);
                      }),
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n16 = vue.createSharedDataComponentWithFallback(_component_up_input, "4126b0e4", {
                          modelValue: () => {
                            return formModel.stayTime;
                          },
                          "onUpdate:modelValue": () => {
                            return (_value) => {
                              return formModel.stayTime = _value;
                            };
                          },
                          disabled: "",
                          "disabled-color": "#ffffff",
                          placeholder: "请选择日期范围",
                          border: "none"
                        });
                        vue.setSharedData(__sharedData, 21, n16 == null ? void 0 : n16.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 19, n19 == null ? void 0 : n19.sharedData);
                    const n26 = vue.createSharedDataComponentWithFallback(_component_up_form_item, "412698a4", {
                      label: "水果最爱",
                      prop: "fruit",
                      "border-bottom": true
                    }, {
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n25 = vue.createSharedDataComponentWithFallback(_component_up_radio_group, "412691a8", {
                          modelValue: () => {
                            return formModel.fruit;
                          },
                          "onUpdate:modelValue": () => {
                            return (_value) => {
                              return formModel.fruit = _value;
                            };
                          },
                          placement: "row"
                        }, {
                          "default": vue.withSharedDataVaporCtx(() => {
                            const n20 = vue.createSharedDataComponentWithFallback(_component_up_radio, "41268ada", {
                              name: "apple",
                              label: "苹果"
                            });
                            vue.setSharedData(__sharedData, 24, n20 == null ? void 0 : n20.sharedData);
                            const n22 = vue.createSharedDataComponentWithFallback(_component_up_radio, "41268328", {
                              name: "banana",
                              label: "香蕉"
                            });
                            vue.setSharedData(__sharedData, 25, n22 == null ? void 0 : n22.sharedData);
                            const n24 = vue.createSharedDataComponentWithFallback(_component_up_radio, "4125ddf4", {
                              name: "orange",
                              label: "橘子"
                            });
                            vue.setSharedData(__sharedData, 26, n24 == null ? void 0 : n24.sharedData);
                          })
                        });
                        vue.setSharedData(__sharedData, 23, n25 == null ? void 0 : n25.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 22, n26 == null ? void 0 : n26.sharedData);
                    const n33 = vue.createSharedDataComponentWithFallback(_component_up_form_item, "4125d62c", {
                      label: "兴趣爱好",
                      prop: "hobbies",
                      "border-bottom": true
                    }, {
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n32 = vue.createSharedDataComponentWithFallback(_component_up_checkbox_group, "4125cf2c", {
                          modelValue: () => {
                            return formModel.hobbies;
                          },
                          "onUpdate:modelValue": () => {
                            return (_value) => {
                              return formModel.hobbies = _value;
                            };
                          },
                          placement: "row"
                        }, {
                          "default": vue.withSharedDataVaporCtx(() => {
                            const n27 = vue.createSharedDataComponentWithFallback(_component_up_checkbox, "4125c82a", {
                              name: "reading",
                              label: "阅读"
                            });
                            vue.setSharedData(__sharedData, 29, n27 == null ? void 0 : n27.sharedData);
                            const n29 = vue.createSharedDataComponentWithFallback(_component_up_checkbox, "4125c068", {
                              name: "sports",
                              label: "运动"
                            });
                            vue.setSharedData(__sharedData, 30, n29 == null ? void 0 : n29.sharedData);
                            const n31 = vue.createSharedDataComponentWithFallback(_component_up_checkbox, "4125b8a8", {
                              name: "music",
                              label: "音乐"
                            });
                            vue.setSharedData(__sharedData, 31, n31 == null ? void 0 : n31.sharedData);
                          })
                        });
                        vue.setSharedData(__sharedData, 28, n32 == null ? void 0 : n32.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 27, n33 == null ? void 0 : n33.sharedData);
                    const n35 = vue.createSharedDataComponentWithFallback(_component_up_form_item, "4125b0a6", {
                      label: "通知开关",
                      prop: "notification",
                      "border-bottom": true
                    }, {
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n34 = vue.createSharedDataComponentWithFallback(_component_up_switch, "4125a99c", {
                          modelValue: () => {
                            return formModel.notification;
                          },
                          "onUpdate:modelValue": () => {
                            return (_value) => {
                              return formModel.notification = _value;
                            };
                          },
                          "active-color": "#2979ff"
                        });
                        vue.setSharedData(__sharedData, 33, n34 == null ? void 0 : n34.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 32, n35 == null ? void 0 : n35.sharedData);
                    const n37 = vue.createSharedDataComponentWithFallback(_component_up_form_item, "4125a1a4", {
                      label: "服务评分",
                      prop: "rate",
                      "border-bottom": true
                    }, {
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n36 = vue.createSharedDataComponentWithFallback(_component_up_rate, "41259ad4", {
                          modelValue: () => {
                            return formModel.rate;
                          },
                          "onUpdate:modelValue": () => {
                            return (_value) => {
                              return formModel.rate = _value;
                            };
                          },
                          count: 5
                        });
                        vue.setSharedData(__sharedData, 35, n36 == null ? void 0 : n36.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 34, n37 == null ? void 0 : n37.sharedData);
                    const n39 = vue.createSharedDataComponentWithFallback(_component_up_form_item, "4124f5b6", {
                      label: "购买数量",
                      prop: "count",
                      "border-bottom": true
                    }, {
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n38 = vue.createSharedDataComponentWithFallback(_component_up_number_box, "4124eee4", {
                          modelValue: () => {
                            return formModel.count;
                          },
                          "onUpdate:modelValue": () => {
                            return (_value) => {
                              return formModel.count = _value;
                            };
                          },
                          min: 1,
                          max: 100
                        });
                        vue.setSharedData(__sharedData, 37, n38 == null ? void 0 : n38.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 36, n39 == null ? void 0 : n39.sharedData);
                    const n41 = vue.createSharedDataComponentWithFallback(_component_up_form_item, "4124e6f0", {
                      label: "满意度",
                      prop: "satisfaction",
                      "border-bottom": true
                    }, {
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n40 = vue.createSharedDataComponentWithFallback(_component_up_slider, "4124dfe8", {
                          modelValue: () => {
                            return formModel.satisfaction;
                          },
                          "onUpdate:modelValue": () => {
                            return (_value) => {
                              return formModel.satisfaction = _value;
                            };
                          },
                          min: 0,
                          max: 100,
                          "show-value": true,
                          style: "width: 100%;"
                        });
                        vue.setSharedData(__sharedData, 39, n40 == null ? void 0 : n40.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 38, n41 == null ? void 0 : n41.sharedData);
                    const n43 = vue.createSharedDataComponentWithFallback(_component_up_form_item, "4124d728", {
                      label: "个人简介",
                      prop: "intro",
                      "border-bottom": true,
                      "label-position": "top"
                    }, {
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n42 = vue.createSharedDataComponentWithFallback(_component_up_textarea, "4124cfae", {
                          modelValue: () => {
                            return formModel.intro;
                          },
                          "onUpdate:modelValue": () => {
                            return (_value) => {
                              return formModel.intro = _value;
                            };
                          },
                          placeholder: "请输入个人简介",
                          count: "",
                          maxlength: 100
                        });
                        vue.setSharedData(__sharedData, 41, n42 == null ? void 0 : n42.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 40, n43 == null ? void 0 : n43.sharedData);
                    const n45 = vue.createSharedDataComponentWithFallback(_component_up_form_item, "4124c766", {
                      label: "相关照片",
                      prop: "photos",
                      "border-bottom": true,
                      "label-position": "top"
                    }, {
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n44 = vue.createSharedDataComponentWithFallback(_component_up_upload, "4124bfea", {
                          "file-list": () => {
                            return uploadList.value;
                          },
                          multiple: true,
                          "max-count": 3,
                          width: "80px",
                          height: "80px",
                          onAfterRead: () => {
                            return onUploadAfterRead;
                          },
                          onDelete: () => {
                            return onUploadDelete;
                          }
                        });
                        vue.setSharedData(__sharedData, 43, n44 == null ? void 0 : n44.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 42, n45 == null ? void 0 : n45.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 7, n46 == null ? void 0 : n46.sharedData);
                _setTemplateRef(n46, uForm, null, "uForm");
                const n53 = vue.createSharedDataComponentWithFallback(_component_up_form, "4123fea2", {
                  model: () => {
                    return formModel2;
                  },
                  "label-position": "top",
                  "label-width": "100px"
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n50 = vue.createSharedDataComponentWithFallback(_component_up_form_item, "4123fcb0", {
                      label: "活动名称",
                      prop: "name",
                      "border-bottom": true
                    }, {
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n49 = vue.createSharedDataComponentWithFallback(_component_up_input, "4123f5b6", {
                          modelValue: () => {
                            return formModel2.name;
                          },
                          "onUpdate:modelValue": () => {
                            return (_value) => {
                              return formModel2.name = _value;
                            };
                          },
                          placeholder: "请输入活动名称",
                          border: "none"
                        });
                        vue.setSharedData(__sharedData, 46, n49 == null ? void 0 : n49.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 45, n50 == null ? void 0 : n50.sharedData);
                    const n52 = vue.createSharedDataComponentWithFallback(_component_up_form_item, "4123edb8", {
                      label: "活动详情",
                      prop: "detail",
                      "border-bottom": true
                    }, {
                      "default": vue.withSharedDataVaporCtx(() => {
                        const n51 = vue.createSharedDataComponentWithFallback(_component_up_textarea, "4123e6e4", {
                          modelValue: () => {
                            return formModel2.detail;
                          },
                          "onUpdate:modelValue": () => {
                            return (_value) => {
                              return formModel2.detail = _value;
                            };
                          },
                          placeholder: "请输入活动详情",
                          border: "none"
                        });
                        vue.setSharedData(__sharedData, 48, n51 == null ? void 0 : n51.sharedData);
                      })
                    });
                    vue.setSharedData(__sharedData, 47, n52 == null ? void 0 : n52.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 44, n53 == null ? void 0 : n53.sharedData);
                const n55 = vue.createSharedDataComponentWithFallback(_component_up_button, "4123d162", {
                  type: "primary",
                  text: "提交表单",
                  onClick: () => {
                    return submitForm;
                  }
                });
                vue.setSharedData(__sharedData, 49, n55 == null ? void 0 : n55.sharedData);
                const n57 = vue.createSharedDataComponentWithFallback(_component_up_button, "4123c91c", {
                  type: "info",
                  text: "重置表单",
                  onClick: () => {
                    return resetForm;
                  }
                });
                vue.setSharedData(__sharedData, 50, n57 == null ? void 0 : n57.sharedData);
                const _on_close = () => {
                  return calendarShow.value = false;
                };
                const n61 = vue.createSharedDataComponentWithFallback(_component_up_calendar, "41231d68", {
                  show: () => {
                    return calendarShow.value;
                  },
                  mode: "range",
                  onConfirm: () => {
                    return onCalendarConfirm;
                  },
                  onClose: () => {
                    return _on_close;
                  }
                });
                vue.setSharedData(__sharedData, 3, n61 == null ? void 0 : n61.sharedData);
                const _on_cancel = () => {
                  return pickerShow.value = false;
                };
                const _on_close1 = () => {
                  return pickerShow.value = false;
                };
                const n62 = vue.createSharedDataComponentWithFallback(_component_up_picker, "412313f6", {
                  show: () => {
                    return pickerShow.value;
                  },
                  columns: () => {
                    return pickerColumns.value;
                  },
                  onConfirm: () => {
                    return onPickerConfirm;
                  },
                  onCancel: () => {
                    return _on_cancel;
                  },
                  onClose: () => {
                    return _on_close1;
                  }
                });
                vue.setSharedData(__sharedData, 4, n62 == null ? void 0 : n62.sharedData);
                const _on_cancel1 = () => {
                  return datetimePickerShow.value = false;
                };
                const _on_close2 = () => {
                  return datetimePickerShow.value = false;
                };
                const n63 = vue.createSharedDataComponentWithFallback(_component_up_datetime_picker, "4122ff2c", {
                  modelValue: () => {
                    return datetimePickerValue.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return datetimePickerValue.value = _value;
                    };
                  },
                  show: () => {
                    return datetimePickerShow.value;
                  },
                  mode: "date",
                  "min-date": 0,
                  onConfirm: () => {
                    return onDatetimePickerConfirm;
                  },
                  onCancel: () => {
                    return _on_cancel1;
                  },
                  onClose: () => {
                    return _on_close2;
                  }
                });
                vue.setSharedData(__sharedData, 5, n63 == null ? void 0 : n63.sharedData);
                const _on_close3 = () => {
                  return genderActionShow.value = false;
                };
                const n64 = vue.createSharedDataComponentWithFallback(_component_up_action_sheet, "4122e85e", {
                  show: () => {
                    return genderActionShow.value;
                  },
                  actions: () => {
                    return genderActions.value;
                  },
                  title: "请选择性别",
                  onSelect: () => {
                    return onGenderSelect;
                  },
                  onClose: () => {
                    return _on_close3;
                  }
                });
                vue.setSharedData(__sharedData, 6, n64 == null ? void 0 : n64.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n66.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n67.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$X = {};
  const _style_1$X = {};
  const SrcSubUviewUltraDemosFormForm = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["styles", [_style_0$X, _style_1$X]]]);
  const __className$V = "GenSrcSubUviewUltraDemosPaginationPagination";
  const _sfc_main$W = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$V,
    __filename: "src/sub/uview-ultra/demos/pagination/pagination.uvue",
    __name: "pagination",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosPaginationPaginationSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosPaginationPaginationSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const paginationCurrentPage = vue.ref(1);
      const paginationPageSize = vue.ref(10);
      const paginationTotal = vue.ref(100);
      function onPaginationCurrentChange(page) {
        paginationCurrentPage.value = page;
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_pagination = vue.resolveComponent("up-pagination");
        const n7 = vue.createSharedDataComponent(AppKu, "12236d55", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n6 = vue.createSharedDataComponent(LayoutComponent, "324a3d41", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-pagination 分页器"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "16fd6b8c", {
                  title: "Pagination 分页器",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_pagination, "16fd75dd", {
                  "current-page": () => {
                    return paginationCurrentPage.value;
                  },
                  "page-size": () => {
                    return paginationPageSize.value;
                  },
                  total: () => {
                    return paginationTotal.value;
                  },
                  layout: "prev, pager, next, total",
                  onCurrentChange: () => {
                    return onPaginationCurrentChange;
                  }
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n6.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n7.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$W = {};
  const _style_1$W = {};
  const SrcSubUviewUltraDemosPaginationPagination = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["styles", [_style_0$W, _style_1$W]]]);
  const __className$U = "GenSrcSubUviewUltraDemosCodeInputCodeInput";
  const _sfc_main$V = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$U,
    __filename: "src/sub/uview-ultra/demos/code-input/code-input.uvue",
    __name: "code-input",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosCodeInputCodeInputSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosCodeInputCodeInputSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const codeInputValue1 = vue.ref("");
      const codeInputValue2 = vue.ref("");
      const codeInputValue3 = vue.ref("");
      function onCodeInputFinish(val) {
        uni.showToast({ title: `输入的验证码为: ${val}`, icon: "none" });
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_code_input = vue.resolveComponent("up-code-input");
        const n13 = vue.createSharedDataComponent(AppKu, "497d0bfe", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n12 = vue.createSharedDataComponent(LayoutComponent, "e62473d6", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-code-input 验证码"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "10cafd38", {
                  title: "CodeInput 验证码",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_code_input, "10cb0788", {
                  modelValue: () => {
                    return codeInputValue1.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return codeInputValue1.value = _value;
                    };
                  },
                  maxlength: 6,
                  mode: "box",
                  onFinish: () => {
                    return onCodeInputFinish;
                  }
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_code_input, "10cb0f47", {
                  modelValue: () => {
                    return codeInputValue2.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return codeInputValue2.value = _value;
                    };
                  },
                  maxlength: 4,
                  mode: "line"
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_code_input, "10cb16c5", {
                  modelValue: () => {
                    return codeInputValue3.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return codeInputValue3.value = _value;
                    };
                  },
                  maxlength: 4,
                  mode: "box",
                  space: "10",
                  color: "#2979ff",
                  "border-color": "#2979ff"
                });
                vue.setSharedData(__sharedData, 5, n8 == null ? void 0 : n8.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n12.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n13.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$V = {};
  const _style_1$V = {};
  const SrcSubUviewUltraDemosCodeInputCodeInput = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["styles", [_style_0$V, _style_1$V]]]);
  const __className$T = "GenSrcSubUviewUltraDemosButtonButton";
  const _sfc_main$U = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$T,
    __filename: "src/sub/uview-ultra/demos/button/button.uvue",
    __name: "button",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosButtonButtonSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosButtonButtonSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_button = vue.resolveComponent("up-button");
        const n30 = vue.createSharedDataComponent(AppKu, "5e96e385", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n29 = vue.createSharedDataComponent(LayoutComponent, "74458d11", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-button 按钮"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "146c15a2", {
                  title: "up-button 按钮",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_button, "146c2048", {
                  type: "primary",
                  text: "主要按钮"
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n4 = vue.createSharedDataComponentWithFallback(_component_up_button, "146c2426", {
                  type: "success",
                  text: "成功按钮"
                });
                vue.setSharedData(__sharedData, 4, n4 == null ? void 0 : n4.sharedData);
                const n6 = vue.createSharedDataComponentWithFallback(_component_up_button, "146c2804", {
                  type: "info",
                  text: "信息按钮"
                });
                vue.setSharedData(__sharedData, 5, n6 == null ? void 0 : n6.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_button, "146c2bca", {
                  type: "warning",
                  text: "警告按钮"
                });
                vue.setSharedData(__sharedData, 6, n8 == null ? void 0 : n8.sharedData);
                const n10 = vue.createSharedDataComponentWithFallback(_component_up_button, "146c2fa8", {
                  type: "error",
                  text: "危险按钮"
                });
                vue.setSharedData(__sharedData, 7, n10 == null ? void 0 : n10.sharedData);
                const n14 = vue.createSharedDataComponentWithFallback(_component_up_button, "79168469", {
                  type: "primary",
                  text: "主要按钮",
                  plain: true
                });
                vue.setSharedData(__sharedData, 8, n14 == null ? void 0 : n14.sharedData);
                const n18 = vue.createSharedDataComponentWithFallback(_component_up_button, "79168c4e", {
                  type: "primary",
                  text: "大尺寸",
                  size: "large"
                });
                vue.setSharedData(__sharedData, 9, n18 == null ? void 0 : n18.sharedData);
                const n20 = vue.createSharedDataComponentWithFallback(_component_up_button, "79169318", {
                  type: "primary",
                  text: "普通尺寸",
                  size: "normal"
                });
                vue.setSharedData(__sharedData, 10, n20 == null ? void 0 : n20.sharedData);
                const n22 = vue.createSharedDataComponentWithFallback(_component_up_button, "7916976e", {
                  type: "primary",
                  text: "小尺寸",
                  size: "small"
                });
                vue.setSharedData(__sharedData, 11, n22 == null ? void 0 : n22.sharedData);
                const n24 = vue.createSharedDataComponentWithFallback(_component_up_button, "79169e38", {
                  type: "primary",
                  text: "迷你尺寸",
                  size: "mini"
                });
                vue.setSharedData(__sharedData, 12, n24 == null ? void 0 : n24.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n29.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n30.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$U = {};
  const _style_1$U = {};
  const SrcSubUviewUltraDemosButtonButton = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["styles", [_style_0$U, _style_1$U]]]);
  const __className$S = "GenSrcSubUviewUltraDemosInputInput";
  const _sfc_main$T = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$S,
    __filename: "src/sub/uview-ultra/demos/input/input.uvue",
    __name: "input",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosInputInputSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosInputInputSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const inputValue = vue.ref("");
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_input = vue.resolveComponent("up-input");
        const n10 = vue.createSharedDataComponent(AppKu, "6abd60be", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n9 = vue.createSharedDataComponent(LayoutComponent, "eceeb716", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-input 输入框"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "b0e82a84", {
                  title: "up-input 输入框",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_input, "b0e81b0e", {
                  modelValue: () => {
                    return inputValue.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return inputValue.value = _value;
                    };
                  },
                  placeholder: "请输入内容",
                  border: "surround",
                  clearable: ""
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_input, "b0e80c0a", {
                  placeholder: "请输入搜索内容",
                  "prefix-icon": "search",
                  "suffix-icon": "scan"
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n9.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n10.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$T = {};
  const _style_1$T = {};
  const SrcSubUviewUltraDemosInputInput = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["styles", [_style_0$T, _style_1$T]]]);
  const __className$R = "GenSrcSubUviewUltraDemosCheckboxCheckbox";
  const _sfc_main$S = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$R,
    __filename: "src/sub/uview-ultra/demos/checkbox/checkbox.uvue",
    __name: "checkbox",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosCheckboxCheckboxSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosCheckboxCheckboxSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const checkboxValue1 = vue.ref(["apple"]);
      const checkboxValue2 = vue.ref(["apple"]);
      const checkboxValue3 = vue.ref(["circle"]);
      const checkboxValue4 = vue.ref([]);
      function checkboxChange(n) {
        uni.__log__("log", "at src/sub/uview-ultra/demos/checkbox/checkbox.uvue:48", "checkbox change", n);
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_checkbox = vue.resolveComponent("up-checkbox");
        const _component_up_checkbox_group = vue.resolveComponent("up-checkbox-group");
        const n23 = vue.createSharedDataComponent(AppKu, "53588ab2", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n22 = vue.createSharedDataComponent(LayoutComponent, "17b8cba2", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-checkbox 复选框"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "df60a772", {
                  title: "up-checkbox 复选框",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n4 = vue.createSharedDataComponentWithFallback(_component_up_checkbox_group, "df6097f6", {
                  modelValue: () => {
                    return checkboxValue1.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return checkboxValue1.value = _value;
                    };
                  },
                  onChange: () => {
                    return checkboxChange;
                  }
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n2 = vue.createSharedDataComponentWithFallback(_component_up_checkbox, "df6090f0", {
                      name: "apple",
                      label: "苹果",
                      class: "mb-10px mr-20px"
                    });
                    vue.setSharedData(__sharedData, 4, n2 == null ? void 0 : n2.sharedData);
                    const n3 = vue.createSharedDataComponentWithFallback(_component_up_checkbox, "df6089b4", {
                      name: "banana",
                      label: "香蕉",
                      class: "mb-10px mr-20px"
                    });
                    vue.setSharedData(__sharedData, 5, n3 == null ? void 0 : n3.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 3, n4 == null ? void 0 : n4.sharedData);
                const n9 = vue.createSharedDataComponentWithFallback(_component_up_checkbox_group, "df607a6a", {
                  modelValue: () => {
                    return checkboxValue2.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return checkboxValue2.value = _value;
                    };
                  }
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n7 = vue.createSharedDataComponentWithFallback(_component_up_checkbox, "df6073ea", {
                      name: "apple",
                      label: "苹果(禁用)",
                      disabled: true,
                      class: "mb-10px mr-20px"
                    });
                    vue.setSharedData(__sharedData, 7, n7 == null ? void 0 : n7.sharedData);
                    const n8 = vue.createSharedDataComponentWithFallback(_component_up_checkbox, "df606c5a", {
                      name: "banana",
                      label: "香蕉(未禁用)",
                      class: "mb-10px mr-20px"
                    });
                    vue.setSharedData(__sharedData, 8, n8 == null ? void 0 : n8.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 6, n9 == null ? void 0 : n9.sharedData);
                const n14 = vue.createSharedDataComponentWithFallback(_component_up_checkbox_group, "79a5c5e8", {
                  modelValue: () => {
                    return checkboxValue3.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return checkboxValue3.value = _value;
                    };
                  }
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n12 = vue.createSharedDataComponentWithFallback(_component_up_checkbox, "79a5c913", {
                      name: "circle",
                      label: "圆形",
                      shape: "circle",
                      "active-color": "#fa3534",
                      class: "mb-10px mr-20px"
                    });
                    vue.setSharedData(__sharedData, 10, n12 == null ? void 0 : n12.sharedData);
                    const n13 = vue.createSharedDataComponentWithFallback(_component_up_checkbox, "79a5cd2c", {
                      name: "square",
                      label: "方形",
                      shape: "square",
                      "active-color": "#ff9900",
                      class: "mb-10px mr-20px"
                    });
                    vue.setSharedData(__sharedData, 11, n13 == null ? void 0 : n13.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 9, n14 == null ? void 0 : n14.sharedData);
                const n18 = vue.createSharedDataComponentWithFallback(_component_up_checkbox_group, "79a5d54f", {
                  modelValue: () => {
                    return checkboxValue4.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return checkboxValue4.value = _value;
                    };
                  }
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n17 = vue.createSharedDataComponentWithFallback(_component_up_checkbox, "79a5d88f", {
                      name: "label",
                      label: "只能点框框",
                      "label-disabled": true,
                      class: "mb-10px mr-20px"
                    });
                    vue.setSharedData(__sharedData, 13, n17 == null ? void 0 : n17.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 12, n18 == null ? void 0 : n18.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n22.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n23.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$S = {};
  const _style_1$S = {};
  const SrcSubUviewUltraDemosCheckboxCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["styles", [_style_0$S, _style_1$S]]]);
  const __className$Q = "GenSrcSubUviewUltraDemosTagTag";
  const _sfc_main$R = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$Q,
    __filename: "src/sub/uview-ultra/demos/tag/tag.uvue",
    __name: "tag",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosTagTagSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosTagTagSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const showTag = vue.ref(true);
      function closeTag() {
        showTag.value = false;
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_tag = vue.resolveComponent("up-tag");
        const n33 = vue.createSharedDataComponent(AppKu, "584b9f21", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n32 = vue.createSharedDataComponent(LayoutComponent, "9daf7616", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-tag 标签"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "73e05a3b", {
                  title: "up-tag 标签",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_tag, "73e06520", {
                  text: "标签",
                  type: "primary",
                  size: "normal",
                  class: "mr-10px mb-10px"
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n3 = vue.createSharedDataComponentWithFallback(_component_up_tag, "73e068c3", {
                  text: "成功",
                  type: "success",
                  size: "normal",
                  class: "mr-10px mb-10px"
                });
                vue.setSharedData(__sharedData, 4, n3 == null ? void 0 : n3.sharedData);
                const n4 = vue.createSharedDataComponentWithFallback(_component_up_tag, "73e06c66", {
                  text: "警告",
                  type: "warning",
                  size: "normal",
                  class: "mr-10px mb-10px"
                });
                vue.setSharedData(__sharedData, 5, n4 == null ? void 0 : n4.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_tag, "73e07009", {
                  text: "危险",
                  type: "error",
                  size: "normal",
                  class: "mr-10px mb-10px"
                });
                vue.setSharedData(__sharedData, 6, n5 == null ? void 0 : n5.sharedData);
                const n9 = vue.createSharedDataComponentWithFallback(_component_up_tag, "73e07845", {
                  text: "镂空",
                  type: "primary",
                  plain: true,
                  size: "normal",
                  class: "mr-10px"
                });
                vue.setSharedData(__sharedData, 7, n9 == null ? void 0 : n9.sharedData);
                const n10 = vue.createSharedDataComponentWithFallback(_component_up_tag, "082ad38c", {
                  text: "镂空",
                  type: "success",
                  plain: true,
                  size: "normal",
                  class: "mr-10px"
                });
                vue.setSharedData(__sharedData, 8, n10 == null ? void 0 : n10.sharedData);
                const n14 = vue.createSharedDataComponentWithFallback(_component_up_tag, "082ade70", {
                  text: "大尺寸",
                  size: "large",
                  type: "primary",
                  class: "mr-10px"
                });
                vue.setSharedData(__sharedData, 9, n14 == null ? void 0 : n14.sharedData);
                const n15 = vue.createSharedDataComponentWithFallback(_component_up_tag, "082ae1f6", {
                  text: "普通",
                  size: "normal",
                  type: "success",
                  class: "mr-10px"
                });
                vue.setSharedData(__sharedData, 10, n15 == null ? void 0 : n15.sharedData);
                const n16 = vue.createSharedDataComponentWithFallback(_component_up_tag, "082ae57c", {
                  text: "迷你",
                  size: "mini",
                  type: "warning",
                  class: "mr-10px"
                });
                vue.setSharedData(__sharedData, 11, n16 == null ? void 0 : n16.sharedData);
                const n20 = vue.createSharedDataComponentWithFallback(_component_up_tag, "082aed9b", {
                  text: "半圆角",
                  shape: "circle",
                  type: "primary",
                  class: "mr-10px"
                });
                vue.setSharedData(__sharedData, 12, n20 == null ? void 0 : n20.sharedData);
                const n21 = vue.createSharedDataComponentWithFallback(_component_up_tag, "082af138", {
                  text: "直角",
                  shape: "square",
                  type: "primary",
                  class: "mr-10px"
                });
                vue.setSharedData(__sharedData, 13, n21 == null ? void 0 : n21.sharedData);
                vue.createSharedDataIf(() => {
                  return vue.setSharedData(__sharedData, 14, vue.toSharedDataBoolean(showTag.value));
                }, () => {
                  const n27 = vue.createSharedDataComponentWithFallback(_component_up_tag, "082b4830", {
                    text: "点击关闭",
                    type: "primary",
                    closable: "",
                    class: "mr-10px",
                    onClose: () => {
                      return closeTag;
                    }
                  });
                  vue.setSharedData(__sharedData, 15, n27 == null ? void 0 : n27.sharedData);
                });
              })
            });
            vue.setSharedData(__sharedData, 1, n32.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n33.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$R = {};
  const _style_1$R = {};
  const SrcSubUviewUltraDemosTagTag = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["styles", [_style_0$R, _style_1$R]]]);
  const __className$P = "GenSrcSubUviewUltraDemosRadioRadio";
  const _sfc_main$Q = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$P,
    __filename: "src/sub/uview-ultra/demos/radio/radio.uvue",
    __name: "radio",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosRadioRadioSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosRadioRadioSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const radioValue = vue.ref("apple");
      const radioValue2 = vue.ref("apple");
      const radioValue3 = vue.ref("square");
      const radioValue4 = vue.ref("1");
      function radioChange(n) {
        uni.__log__("log", "at src/sub/uview-ultra/demos/radio/radio.uvue:49", "radio change", n);
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_radio = vue.resolveComponent("up-radio");
        const _component_up_radio_group = vue.resolveComponent("up-radio-group");
        const n24 = vue.createSharedDataComponent(AppKu, "511dc37e", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n23 = vue.createSharedDataComponent(LayoutComponent, "16b2a9d5", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-radio 单选框"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "80badd44", {
                  title: "up-radio 单选框",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n4 = vue.createSharedDataComponentWithFallback(_component_up_radio_group, "80bacdce", {
                  modelValue: () => {
                    return radioValue.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return radioValue.value = _value;
                    };
                  },
                  onChange: () => {
                    return radioChange;
                  }
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n2 = vue.createSharedDataComponentWithFallback(_component_up_radio, "80bac706", {
                      name: "apple",
                      label: "苹果",
                      class: "mb-10px mr-20px"
                    });
                    vue.setSharedData(__sharedData, 4, n2 == null ? void 0 : n2.sharedData);
                    const n3 = vue.createSharedDataComponentWithFallback(_component_up_radio, "80bac000", {
                      name: "banana",
                      label: "香蕉",
                      class: "mb-10px mr-20px"
                    });
                    vue.setSharedData(__sharedData, 5, n3 == null ? void 0 : n3.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 3, n4 == null ? void 0 : n4.sharedData);
                const n9 = vue.createSharedDataComponentWithFallback(_component_up_radio_group, "80bab0f2", {
                  modelValue: () => {
                    return radioValue2.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return radioValue2.value = _value;
                    };
                  }
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n7 = vue.createSharedDataComponentWithFallback(_component_up_radio, "80baafbe", {
                      name: "apple",
                      label: "苹果(禁用)",
                      disabled: true,
                      class: "mb-10px mr-20px"
                    });
                    vue.setSharedData(__sharedData, 7, n7 == null ? void 0 : n7.sharedData);
                    const n8 = vue.createSharedDataComponentWithFallback(_component_up_radio, "80baa83a", {
                      name: "banana",
                      label: "香蕉(未禁用)",
                      class: "mb-10px mr-20px"
                    });
                    vue.setSharedData(__sharedData, 8, n8 == null ? void 0 : n8.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 6, n9 == null ? void 0 : n9.sharedData);
                const n14 = vue.createSharedDataComponentWithFallback(_component_up_radio_group, "34af8371", {
                  modelValue: () => {
                    return radioValue3.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return radioValue3.value = _value;
                    };
                  }
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n12 = vue.createSharedDataComponentWithFallback(_component_up_radio, "34af83f6", {
                      name: "square",
                      label: "方形",
                      shape: "square",
                      "active-color": "#fa3534",
                      class: "mb-10px mr-20px"
                    });
                    vue.setSharedData(__sharedData, 10, n12 == null ? void 0 : n12.sharedData);
                    const n13 = vue.createSharedDataComponentWithFallback(_component_up_radio, "34af87f4", {
                      name: "circle",
                      label: "圆形",
                      shape: "circle",
                      "active-color": "#ff9900",
                      class: "mb-10px mr-20px"
                    });
                    vue.setSharedData(__sharedData, 11, n13 == null ? void 0 : n13.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 9, n14 == null ? void 0 : n14.sharedData);
                const n19 = vue.createSharedDataComponentWithFallback(_component_up_radio_group, "34af9299", {
                  modelValue: () => {
                    return radioValue4.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return radioValue4.value = _value;
                    };
                  }
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n17 = vue.createSharedDataComponentWithFallback(_component_up_radio, "34af9333", {
                      name: "1",
                      label: "选项1(只能点圈圈)",
                      "label-disabled": true,
                      class: "mb-10px mr-20px"
                    });
                    vue.setSharedData(__sharedData, 13, n17 == null ? void 0 : n17.sharedData);
                    const n18 = vue.createSharedDataComponentWithFallback(_component_up_radio, "34af9710", {
                      name: "2",
                      label: "选项2(只能点圈圈)",
                      "label-disabled": true,
                      class: "mb-10px mr-20px"
                    });
                    vue.setSharedData(__sharedData, 14, n18 == null ? void 0 : n18.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 12, n19 == null ? void 0 : n19.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n23.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n24.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$Q = {};
  const _style_1$Q = {};
  const SrcSubUviewUltraDemosRadioRadio = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["styles", [_style_0$Q, _style_1$Q]]]);
  const __className$O = "GenSrcSubUviewUltraDemosSwitchSwitch";
  const _sfc_main$P = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$O,
    __filename: "src/sub/uview-ultra/demos/switch/switch.uvue",
    __name: "switch",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosSwitchSwitchSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosSwitchSwitchSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const switchValue1 = vue.ref(true);
      const switchValue2 = vue.ref(true);
      const switchValue3 = vue.ref(true);
      const switchValue4 = vue.ref(true);
      const switchValue5 = vue.ref(true);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_switch = vue.resolveComponent("up-switch");
        const n26 = vue.createSharedDataComponent(AppKu, "369ee909", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n25 = vue.createSharedDataComponent(LayoutComponent, "c5838fe6", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-switch 开关"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "0a88ca26", {
                  title: "up-switch 开关",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_switch, "0a88d4ef", {
                  modelValue: () => {
                    return switchValue1.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return switchValue1.value = _value;
                    };
                  }
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedData(__sharedData, 9, vue.toDisplayString(switchValue1.value ? "已开启" : "已关闭"));
                });
                const n7 = vue.createSharedDataComponentWithFallback(_component_up_switch, "0a88e049", {
                  modelValue: () => {
                    return switchValue2.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return switchValue2.value = _value;
                    };
                  },
                  disabled: true
                });
                vue.setSharedData(__sharedData, 4, n7 == null ? void 0 : n7.sharedData);
                const n11 = vue.createSharedDataComponentWithFallback(_component_up_switch, "0a88e82d", {
                  modelValue: () => {
                    return switchValue3.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return switchValue3.value = _value;
                    };
                  },
                  loading: ""
                });
                vue.setSharedData(__sharedData, 5, n11 == null ? void 0 : n11.sharedData);
                const n15 = vue.createSharedDataComponentWithFallback(_component_up_switch, "4690674d", {
                  modelValue: () => {
                    return switchValue4.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return switchValue4.value = _value;
                    };
                  },
                  "active-color": "#fa3534",
                  "inactive-color": "#f56c6c"
                });
                vue.setSharedData(__sharedData, 6, n15 == null ? void 0 : n15.sharedData);
                const n19 = vue.createSharedDataComponentWithFallback(_component_up_switch, "46906f8f", {
                  modelValue: () => {
                    return switchValue5.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return switchValue5.value = _value;
                    };
                  },
                  size: "20",
                  class: "mr-10px"
                });
                vue.setSharedData(__sharedData, 7, n19 == null ? void 0 : n19.sharedData);
                const n20 = vue.createSharedDataComponentWithFallback(_component_up_switch, "4690732a", {
                  modelValue: () => {
                    return switchValue5.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return switchValue5.value = _value;
                    };
                  },
                  size: "28"
                });
                vue.setSharedData(__sharedData, 8, n20 == null ? void 0 : n20.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n25.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n26.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$P = {};
  const _style_1$P = {};
  const SrcSubUviewUltraDemosSwitchSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["styles", [_style_0$P, _style_1$P]]]);
  const __className$N = "GenSrcSubUviewUltraDemosRateRate";
  const _sfc_main$O = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$N,
    __filename: "src/sub/uview-ultra/demos/rate/rate.uvue",
    __name: "rate",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosRateRateSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosRateRateSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const rateValue1 = vue.ref(3);
      const rateValue2 = vue.ref(4);
      const rateValue3 = vue.ref(3.5);
      const rateValue4 = vue.ref(4);
      const rateValue5 = vue.ref(2);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_rate = vue.resolveComponent("up-rate");
        const n19 = vue.createSharedDataComponent(AppKu, "3b349161", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n18 = vue.createSharedDataComponent(LayoutComponent, "2b5d9ab5", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-rate 评分"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "4055bc7c", {
                  title: "up-rate 评分",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_rate, "4055c420", {
                  modelValue: () => {
                    return rateValue1.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return rateValue1.value = _value;
                    };
                  },
                  count: 5
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_rate, "4055cb3f", {
                  modelValue: () => {
                    return rateValue2.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return rateValue2.value = _value;
                    };
                  },
                  count: 5,
                  "active-icon": "heart-fill",
                  "inactive-icon": "heart",
                  "active-color": "#fa3534"
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_rate, "4055d31e", {
                  modelValue: () => {
                    return rateValue3.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return rateValue3.value = _value;
                    };
                  },
                  count: 5,
                  "allow-half": true
                });
                vue.setSharedData(__sharedData, 5, n8 == null ? void 0 : n8.sharedData);
                const n11 = vue.createSharedDataComponentWithFallback(_component_up_rate, "4055da61", {
                  modelValue: () => {
                    return rateValue4.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return rateValue4.value = _value;
                    };
                  },
                  count: 5,
                  readonly: true
                });
                vue.setSharedData(__sharedData, 6, n11 == null ? void 0 : n11.sharedData);
                const n14 = vue.createSharedDataComponentWithFallback(_component_up_rate, "6b3c86d4", {
                  modelValue: () => {
                    return rateValue5.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return rateValue5.value = _value;
                    };
                  },
                  count: 5,
                  disabled: true
                });
                vue.setSharedData(__sharedData, 7, n14 == null ? void 0 : n14.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n18.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n19.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$O = {};
  const _style_1$O = {};
  const SrcSubUviewUltraDemosRateRate = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["styles", [_style_0$O, _style_1$O]]]);
  const __className$M = "GenSrcSubUviewUltraDemosNumberBoxNumberBox";
  const _sfc_main$N = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$M,
    __filename: "src/sub/uview-ultra/demos/number-box/number-box.uvue",
    __name: "number-box",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosNumberBoxNumberBoxSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosNumberBoxNumberBoxSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const numberValue1 = vue.ref(1);
      const numberValue2 = vue.ref(1);
      const numberValue3 = vue.ref(5);
      const numberValue4 = vue.ref(1);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_number_box = vue.resolveComponent("up-number-box");
        const n16 = vue.createSharedDataComponent(AppKu, "ed49b8be", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n15 = vue.createSharedDataComponent(LayoutComponent, "bbed5f16", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-number-box 步进器"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "c1be8250", {
                  title: "up-number-box 步进器",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_number_box, "c1be6dba", {
                  modelValue: () => {
                    return numberValue1.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return numberValue1.value = _value;
                    };
                  }
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_number_box, "c1be64be", {
                  modelValue: () => {
                    return numberValue2.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return numberValue2.value = _value;
                    };
                  },
                  step: 2
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_number_box, "c1be563c", {
                  modelValue: () => {
                    return numberValue3.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return numberValue3.value = _value;
                    };
                  },
                  min: 5,
                  max: 10
                });
                vue.setSharedData(__sharedData, 5, n8 == null ? void 0 : n8.sharedData);
                const n11 = vue.createSharedDataComponentWithFallback(_component_up_number_box, "c1be47b0", {
                  modelValue: () => {
                    return numberValue4.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return numberValue4.value = _value;
                    };
                  },
                  disabled: true
                });
                vue.setSharedData(__sharedData, 6, n11 == null ? void 0 : n11.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n15.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n16.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$N = {};
  const _style_1$N = {};
  const SrcSubUviewUltraDemosNumberBoxNumberBox = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["styles", [_style_0$N, _style_1$N]]]);
  const __className$L = "GenSrcSubUviewUltraDemosSliderSlider";
  const _sfc_main$M = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$L,
    __filename: "src/sub/uview-ultra/demos/slider/slider.uvue",
    __name: "slider",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosSliderSliderSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosSliderSliderSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const sliderValue1 = vue.ref(30);
      const sliderValue2 = vue.ref(50);
      const sliderValue3 = vue.ref(40);
      const sliderValue4 = vue.ref(60);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_slider = vue.resolveComponent("up-slider");
        const n16 = vue.createSharedDataComponent(AppKu, "152cb823", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n15 = vue.createSharedDataComponent(LayoutComponent, "df2b679a", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-slider 滑块"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "7cdf3ac0", {
                  title: "up-slider 滑块",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_slider, "7cdf427b", {
                  modelValue: () => {
                    return sliderValue1.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return sliderValue1.value = _value;
                    };
                  },
                  min: 0,
                  max: 100
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_slider, "7cdf49a5", {
                  modelValue: () => {
                    return sliderValue2.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return sliderValue2.value = _value;
                    };
                  },
                  step: 10
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_slider, "7cdf50c7", {
                  modelValue: () => {
                    return sliderValue3.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return sliderValue3.value = _value;
                    };
                  },
                  "active-color": "#fa3534",
                  "inactive-color": "#f56c6c"
                });
                vue.setSharedData(__sharedData, 5, n8 == null ? void 0 : n8.sharedData);
                const n11 = vue.createSharedDataComponentWithFallback(_component_up_slider, "7cdf584c", {
                  modelValue: () => {
                    return sliderValue4.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return sliderValue4.value = _value;
                    };
                  },
                  disabled: true
                });
                vue.setSharedData(__sharedData, 6, n11 == null ? void 0 : n11.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n15.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n16.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$M = {};
  const _style_1$M = {};
  const SrcSubUviewUltraDemosSliderSlider = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["styles", [_style_0$M, _style_1$M]]]);
  const __className$K = "GenSrcSubUviewUltraDemosTextareaTextarea";
  const _sfc_main$L = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$K,
    __filename: "src/sub/uview-ultra/demos/textarea/textarea.uvue",
    __name: "textarea",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosTextareaTextareaSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosTextareaTextareaSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const textValue1 = vue.ref("");
      const textValue2 = vue.ref("");
      const textValue3 = vue.ref("");
      const textValue4 = vue.ref("");
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_textarea = vue.resolveComponent("up-textarea");
        const n16 = vue.createSharedDataComponent(AppKu, "975571d6", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n15 = vue.createSharedDataComponent(LayoutComponent, "5358c8fe", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-textarea 多行文本"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "17c0556a", {
                  title: "up-textarea 多行文本",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_textarea, "17c04616", {
                  modelValue: () => {
                    return textValue1.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return textValue1.value = _value;
                    };
                  },
                  placeholder: "请输入内容",
                  count: "",
                  maxlength: 100
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_textarea, "17c03712", {
                  modelValue: () => {
                    return textValue2.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return textValue2.value = _value;
                    };
                  },
                  placeholder: "输入文字会自动撑开高度",
                  "auto-height": ""
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_textarea, "17c02816", {
                  modelValue: () => {
                    return textValue3.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return textValue3.value = _value;
                    };
                  },
                  placeholder: "下划线输入",
                  border: "bottom"
                });
                vue.setSharedData(__sharedData, 5, n8 == null ? void 0 : n8.sharedData);
                const n11 = vue.createSharedDataComponentWithFallback(_component_up_textarea, "17c0194a", {
                  modelValue: () => {
                    return textValue4.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return textValue4.value = _value;
                    };
                  },
                  placeholder: "禁止输入内容",
                  disabled: true
                });
                vue.setSharedData(__sharedData, 6, n11 == null ? void 0 : n11.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n15.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n16.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$L = {};
  const _style_1$L = {};
  const SrcSubUviewUltraDemosTextareaTextarea = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["styles", [_style_0$L, _style_1$L]]]);
  const __className$J = "GenSrcSubUviewUltraDemosUploadUpload";
  const _sfc_main$K = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$J,
    __filename: "src/sub/uview-ultra/demos/upload/upload.uvue",
    __name: "upload",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosUploadUploadSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosUploadUploadSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const fileList1 = vue.ref([]);
      const fileList2 = vue.ref([]);
      function uploadFilePromise(url) {
        return __awaiter(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(url);
            }, 1e3);
          });
        });
      }
      function afterRead(event) {
        return __awaiter(this, void 0, void 0, function* () {
          const fileData = event.get("file");
          const lists = Array.isArray(fileData) ? fileData : [fileData];
          let fileListLen = fileList1.value.length;
          lists.forEach((item) => {
            fileList1.value.push(new UTSJSONObject(Object.assign(Object.assign({}, item), { status: "uploading", message: "上传中" })));
          });
          for (let i = 0; i < lists.length; i++) {
            const url = lists[i].getString("url");
            const result = yield uploadFilePromise(url);
            const item = fileList1.value[fileListLen];
            fileList1.value.splice(fileListLen, 1, Object.assign(item, new UTSJSONObject({
              status: "success",
              message: "",
              url: result
            })));
            fileListLen++;
          }
        });
      }
      function deletePic(event) {
        fileList1.value.splice(event.getNumber("index"), 1);
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_upload = vue.resolveComponent("up-upload");
        const _component_up_button = vue.resolveComponent("up-button");
        const n11 = vue.createSharedDataComponent(AppKu, "67e80b3a", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n10 = vue.createSharedDataComponent(LayoutComponent, "95195c1a", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-upload 上传"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "0e122600", {
                  title: "up-upload 上传",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_upload, "0e12168a", {
                  "file-list": () => {
                    return fileList1.value;
                  },
                  name: "1",
                  multiple: "",
                  "max-count": 3,
                  onAfterRead: () => {
                    return afterRead;
                  },
                  onDelete: () => {
                    return deletePic;
                  }
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n6 = vue.createSharedDataComponentWithFallback(_component_up_upload, "0e11fffe", {
                  "file-list": () => {
                    return fileList2.value;
                  },
                  name: "2",
                  multiple: "",
                  "max-count": 3
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n5 = vue.createSharedDataComponentWithFallback(_component_up_button, "0e11f2b2", {
                      type: "success",
                      text: "选择文件",
                      icon: "plus",
                      size: "mini"
                    });
                    vue.setSharedData(__sharedData, 5, n5 == null ? void 0 : n5.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 4, n6 == null ? void 0 : n6.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n10.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n11.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$K = {};
  const _style_1$K = {};
  const SrcSubUviewUltraDemosUploadUpload = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["styles", [_style_0$K, _style_1$K]]]);
  const __className$I = "GenSrcSubUviewUltraDemosCalendarCalendar";
  const _sfc_main$J = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$I,
    __filename: "src/sub/uview-ultra/demos/calendar/calendar.uvue",
    __name: "calendar",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosCalendarCalendarSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosCalendarCalendarSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const calendarShow1 = vue.ref(false);
      const calendarShow2 = vue.ref(false);
      const calendarShow3 = vue.ref(false);
      const calendarShow4 = vue.ref(false);
      function showCalendar1() {
        calendarShow1.value = true;
      }
      function showCalendar2() {
        calendarShow2.value = true;
      }
      function showCalendar3() {
        calendarShow3.value = true;
      }
      function showCalendar4() {
        calendarShow4.value = true;
      }
      function onConfirm1(e) {
        uni.__log__("log", "at src/sub/uview-ultra/demos/calendar/calendar.uvue:62", "single", e);
        calendarShow1.value = false;
      }
      function onConfirm2(e) {
        uni.__log__("log", "at src/sub/uview-ultra/demos/calendar/calendar.uvue:66", "multiple", e);
        calendarShow2.value = false;
      }
      function onConfirm3(e) {
        uni.__log__("log", "at src/sub/uview-ultra/demos/calendar/calendar.uvue:70", "range", e);
        calendarShow3.value = false;
      }
      function onConfirm4(e) {
        uni.__log__("log", "at src/sub/uview-ultra/demos/calendar/calendar.uvue:74", "custom color", e);
        calendarShow4.value = false;
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_button = vue.resolveComponent("up-button");
        const _component_up_calendar = vue.resolveComponent("up-calendar");
        const n24 = vue.createSharedDataComponent(AppKu, "5238a91d", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n23 = vue.createSharedDataComponent(LayoutComponent, "16470b0e", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-calendar 日历"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "b29a5588", {
                  title: "up-calendar 日历",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_button, "b29a3fc8", {
                  type: "primary",
                  text: "单选模式",
                  size: "mini",
                  onClick: () => {
                    return showCalendar1;
                  }
                });
                vue.setSharedData(__sharedData, 7, n2 == null ? void 0 : n2.sharedData);
                const n6 = vue.createSharedDataComponentWithFallback(_component_up_button, "b29a2f80", {
                  type: "success",
                  text: "多选日期",
                  size: "mini",
                  onClick: () => {
                    return showCalendar2;
                  }
                });
                vue.setSharedData(__sharedData, 8, n6 == null ? void 0 : n6.sharedData);
                const n10 = vue.createSharedDataComponentWithFallback(_component_up_button, "b29a19f8", {
                  type: "warning",
                  text: "范围选择",
                  size: "mini",
                  onClick: () => {
                    return showCalendar3;
                  }
                });
                vue.setSharedData(__sharedData, 9, n10 == null ? void 0 : n10.sharedData);
                const n14 = vue.createSharedDataComponentWithFallback(_component_up_button, "2fa7bedc", {
                  type: "error",
                  text: "自定义颜色",
                  size: "mini",
                  onClick: () => {
                    return showCalendar4;
                  }
                });
                vue.setSharedData(__sharedData, 10, n14 == null ? void 0 : n14.sharedData);
                const _on_close = () => {
                  return calendarShow1.value = false;
                };
                const n18 = vue.createSharedDataComponentWithFallback(_component_up_calendar, "2fa7c2fb", {
                  show: () => {
                    return calendarShow1.value;
                  },
                  mode: "single",
                  onConfirm: () => {
                    return onConfirm1;
                  },
                  onClose: () => {
                    return _on_close;
                  }
                });
                vue.setSharedData(__sharedData, 3, n18 == null ? void 0 : n18.sharedData);
                const _on_close1 = () => {
                  return calendarShow2.value = false;
                };
                const n19 = vue.createSharedDataComponentWithFallback(_component_up_calendar, "2fa7c6fb", {
                  show: () => {
                    return calendarShow2.value;
                  },
                  mode: "multiple",
                  onConfirm: () => {
                    return onConfirm2;
                  },
                  onClose: () => {
                    return _on_close1;
                  }
                });
                vue.setSharedData(__sharedData, 4, n19 == null ? void 0 : n19.sharedData);
                const _on_close2 = () => {
                  return calendarShow3.value = false;
                };
                const n20 = vue.createSharedDataComponentWithFallback(_component_up_calendar, "2fa7cb12", {
                  show: () => {
                    return calendarShow3.value;
                  },
                  mode: "range",
                  onConfirm: () => {
                    return onConfirm3;
                  },
                  onClose: () => {
                    return _on_close2;
                  }
                });
                vue.setSharedData(__sharedData, 5, n20 == null ? void 0 : n20.sharedData);
                const _on_close3 = () => {
                  return calendarShow4.value = false;
                };
                const n21 = vue.createSharedDataComponentWithFallback(_component_up_calendar, "2fa7d19c", {
                  show: () => {
                    return calendarShow4.value;
                  },
                  mode: "single",
                  color: "#fa3534",
                  onConfirm: () => {
                    return onConfirm4;
                  },
                  onClose: () => {
                    return _on_close3;
                  }
                });
                vue.setSharedData(__sharedData, 6, n21 == null ? void 0 : n21.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n23.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n24.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$J = {};
  const _style_1$J = {};
  const SrcSubUviewUltraDemosCalendarCalendar = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["styles", [_style_0$J, _style_1$J]]]);
  const __className$H = "GenSrcSubUviewUltraDemosPickerPicker";
  const _sfc_main$I = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$H,
    __filename: "src/sub/uview-ultra/demos/picker/picker.uvue",
    __name: "picker",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosPickerPickerSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosPickerPickerSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const pickerShow1 = vue.ref(false);
      const pickerShow2 = vue.ref(false);
      const pickerShow3 = vue.ref(false);
      const columns1 = vue.ref([
        ["中国", "美国", "日本", "英国"]
      ]);
      const columns2 = vue.ref([
        ["亚洲", "欧洲"],
        ["中国", "英国"]
      ]);
      function showPicker1() {
        pickerShow1.value = true;
      }
      function showPicker2() {
        pickerShow2.value = true;
      }
      function showPicker3() {
        pickerShow3.value = true;
      }
      function onConfirm1(e) {
        uni.__log__("log", "at src/sub/uview-ultra/demos/picker/picker.uvue:59", "picker 1 confirm", e);
        pickerShow1.value = false;
      }
      function onConfirm2(e) {
        uni.__log__("log", "at src/sub/uview-ultra/demos/picker/picker.uvue:63", "picker 2 confirm", e);
        pickerShow2.value = false;
      }
      function onConfirm3(e) {
        uni.__log__("log", "at src/sub/uview-ultra/demos/picker/picker.uvue:67", "picker 3 confirm", e);
        pickerShow3.value = false;
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_button = vue.resolveComponent("up-button");
        const _component_up_picker = vue.resolveComponent("up-picker");
        const n19 = vue.createSharedDataComponent(AppKu, "b01eb986", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n18 = vue.createSharedDataComponent(LayoutComponent, "5623c459", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-picker 选择器"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "6e54c75b", {
                  title: "up-picker 选择器",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_button, "6e54d23a", {
                  type: "primary",
                  text: "单列选择",
                  size: "mini",
                  onClick: () => {
                    return showPicker1;
                  }
                });
                vue.setSharedData(__sharedData, 6, n2 == null ? void 0 : n2.sharedData);
                const n6 = vue.createSharedDataComponentWithFallback(_component_up_button, "6e54da5c", {
                  type: "success",
                  text: "多列选择",
                  size: "mini",
                  onClick: () => {
                    return showPicker2;
                  }
                });
                vue.setSharedData(__sharedData, 7, n6 == null ? void 0 : n6.sharedData);
                const n10 = vue.createSharedDataComponentWithFallback(_component_up_button, "6e54e51e", {
                  type: "warning",
                  text: "加载中选择",
                  size: "mini",
                  onClick: () => {
                    return showPicker3;
                  }
                });
                vue.setSharedData(__sharedData, 8, n10 == null ? void 0 : n10.sharedData);
                const _on_cancel = () => {
                  return pickerShow1.value = false;
                };
                const n14 = vue.createSharedDataComponentWithFallback(_component_up_picker, "5c440a0f", {
                  show: () => {
                    return pickerShow1.value;
                  },
                  columns: () => {
                    return columns1.value;
                  },
                  onConfirm: () => {
                    return onConfirm1;
                  },
                  onCancel: () => {
                    return _on_cancel;
                  }
                });
                vue.setSharedData(__sharedData, 3, n14 == null ? void 0 : n14.sharedData);
                const _on_cancel1 = () => {
                  return pickerShow2.value = false;
                };
                const n15 = vue.createSharedDataComponentWithFallback(_component_up_picker, "5c441099", {
                  show: () => {
                    return pickerShow2.value;
                  },
                  columns: () => {
                    return columns2.value;
                  },
                  onConfirm: () => {
                    return onConfirm2;
                  },
                  onCancel: () => {
                    return _on_cancel1;
                  }
                });
                vue.setSharedData(__sharedData, 4, n15 == null ? void 0 : n15.sharedData);
                const _on_cancel2 = () => {
                  return pickerShow3.value = false;
                };
                const n16 = vue.createSharedDataComponentWithFallback(_component_up_picker, "5c441498", {
                  show: () => {
                    return pickerShow3.value;
                  },
                  columns: () => {
                    return columns1.value;
                  },
                  loading: true,
                  onConfirm: () => {
                    return onConfirm3;
                  },
                  onCancel: () => {
                    return _on_cancel2;
                  }
                });
                vue.setSharedData(__sharedData, 5, n16 == null ? void 0 : n16.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n18.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n19.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$I = {};
  const _style_1$I = {};
  const SrcSubUviewUltraDemosPickerPicker = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["styles", [_style_0$I, _style_1$I]]]);
  const __className$G = "GenSrcSubUviewUltraDemosDatetimePickerDatetimePicker";
  const _sfc_main$H = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$G,
    __filename: "src/sub/uview-ultra/demos/datetime-picker/datetime-picker.uvue",
    __name: "datetime-picker",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosDatetimePickerDatetimePickerSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosDatetimePickerDatetimePickerSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const dtShow1 = vue.ref(false);
      const dtShow2 = vue.ref(false);
      const dtShow3 = vue.ref(false);
      const dtShow4 = vue.ref(false);
      function showDt1() {
        dtShow1.value = true;
      }
      function showDt2() {
        dtShow2.value = true;
      }
      function showDt3() {
        dtShow3.value = true;
      }
      function showDt4() {
        dtShow4.value = true;
      }
      function onConfirm1(e) {
        uni.__log__("log", "at src/sub/uview-ultra/demos/datetime-picker/datetime-picker.uvue:63", "datetime", e);
        dtShow1.value = false;
      }
      function onConfirm2(e) {
        uni.__log__("log", "at src/sub/uview-ultra/demos/datetime-picker/datetime-picker.uvue:67", "date", e);
        dtShow2.value = false;
      }
      function onConfirm3(e) {
        uni.__log__("log", "at src/sub/uview-ultra/demos/datetime-picker/datetime-picker.uvue:71", "year-month", e);
        dtShow3.value = false;
      }
      function onConfirm4(e) {
        uni.__log__("log", "at src/sub/uview-ultra/demos/datetime-picker/datetime-picker.uvue:75", "time", e);
        dtShow4.value = false;
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_button = vue.resolveComponent("up-button");
        const _component_up_datetime_picker = vue.resolveComponent("up-datetime-picker");
        const n24 = vue.createSharedDataComponent(AppKu, "014fc333", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n23 = vue.createSharedDataComponent(LayoutComponent, "28a8a323", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-datetime-picker 时间选择"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "27287c20", {
                  title: "up-datetime-picker 时间选择",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_button, "27286624", {
                  type: "primary",
                  text: "年月日时分",
                  size: "mini",
                  onClick: () => {
                    return showDt1;
                  }
                });
                vue.setSharedData(__sharedData, 7, n2 == null ? void 0 : n2.sharedData);
                const n6 = vue.createSharedDataComponentWithFallback(_component_up_button, "272850d0", {
                  type: "success",
                  text: "年月日",
                  size: "mini",
                  onClick: () => {
                    return showDt2;
                  }
                });
                vue.setSharedData(__sharedData, 8, n6 == null ? void 0 : n6.sharedData);
                const n10 = vue.createSharedDataComponentWithFallback(_component_up_button, "27284096", {
                  type: "warning",
                  text: "年月",
                  size: "mini",
                  onClick: () => {
                    return showDt3;
                  }
                });
                vue.setSharedData(__sharedData, 9, n10 == null ? void 0 : n10.sharedData);
                const n14 = vue.createSharedDataComponentWithFallback(_component_up_button, "bde735fe", {
                  type: "error",
                  text: "时分",
                  size: "mini",
                  onClick: () => {
                    return showDt4;
                  }
                });
                vue.setSharedData(__sharedData, 10, n14 == null ? void 0 : n14.sharedData);
                const _on_cancel = () => {
                  return dtShow1.value = false;
                };
                const n18 = vue.createSharedDataComponentWithFallback(_component_up_datetime_picker, "bde72dfa", {
                  show: () => {
                    return dtShow1.value;
                  },
                  mode: "datetime",
                  onConfirm: () => {
                    return onConfirm1;
                  },
                  onCancel: () => {
                    return _on_cancel;
                  }
                });
                vue.setSharedData(__sharedData, 3, n18 == null ? void 0 : n18.sharedData);
                const _on_cancel1 = () => {
                  return dtShow2.value = false;
                };
                const n19 = vue.createSharedDataComponentWithFallback(_component_up_datetime_picker, "bde725c6", {
                  show: () => {
                    return dtShow2.value;
                  },
                  mode: "date",
                  onConfirm: () => {
                    return onConfirm2;
                  },
                  onCancel: () => {
                    return _on_cancel1;
                  }
                });
                vue.setSharedData(__sharedData, 4, n19 == null ? void 0 : n19.sharedData);
                const _on_cancel2 = () => {
                  return dtShow3.value = false;
                };
                const n20 = vue.createSharedDataComponentWithFallback(_component_up_datetime_picker, "bde71dc4", {
                  show: () => {
                    return dtShow3.value;
                  },
                  mode: "year-month",
                  onConfirm: () => {
                    return onConfirm3;
                  },
                  onCancel: () => {
                    return _on_cancel2;
                  }
                });
                vue.setSharedData(__sharedData, 5, n20 == null ? void 0 : n20.sharedData);
                const _on_cancel3 = () => {
                  return dtShow4.value = false;
                };
                const n21 = vue.createSharedDataComponentWithFallback(_component_up_datetime_picker, "bde71076", {
                  show: () => {
                    return dtShow4.value;
                  },
                  mode: "time",
                  onConfirm: () => {
                    return onConfirm4;
                  },
                  onCancel: () => {
                    return _on_cancel3;
                  }
                });
                vue.setSharedData(__sharedData, 6, n21 == null ? void 0 : n21.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n23.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n24.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$H = {};
  const _style_1$H = {};
  const SrcSubUviewUltraDemosDatetimePickerDatetimePicker = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["styles", [_style_0$H, _style_1$H]]]);
  const __className$F = "GenSrcSubUviewUltraDemosActionSheetActionSheet";
  const _sfc_main$G = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$F,
    __filename: "src/sub/uview-ultra/demos/action-sheet/action-sheet.uvue",
    __name: "action-sheet",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosActionSheetActionSheetSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosActionSheetActionSheetSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const actionSheetShow = vue.ref(false);
      const actionSheetShow2 = vue.ref(false);
      const actionSheetShow3 = vue.ref(false);
      const actionList = vue.ref([
        new UTSJSONObject({ name: "拍照" }),
        new UTSJSONObject({ name: "从相册选择" })
      ]);
      const actionListComplex = vue.ref([
        new UTSJSONObject({ name: "着色选项", color: "#ffaa33" }),
        new UTSJSONObject({ name: "禁用选项", disabled: true }),
        new UTSJSONObject({ name: "带副标题选项", subname: "我是副标题" })
      ]);
      function onActionSelect(e) {
        uni.__log__("log", "at src/sub/uview-ultra/demos/action-sheet/action-sheet.uvue:68", "action select", e);
        actionSheetShow.value = false;
        actionSheetShow2.value = false;
        actionSheetShow3.value = false;
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_button = vue.resolveComponent("up-button");
        const _component_up_action_sheet = vue.resolveComponent("up-action-sheet");
        const n19 = vue.createSharedDataComponent(AppKu, "038b847e", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n18 = vue.createSharedDataComponent(LayoutComponent, "6de50b56", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-action-sheet 动作面板"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "58a1d0fb", {
                  title: "up-action-sheet 动作面板",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const _on_click = () => {
                  return actionSheetShow.value = true;
                };
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_button, "58a1dbe1", {
                  type: "primary",
                  text: "弹出面板",
                  size: "mini",
                  onClick: () => {
                    return _on_click;
                  }
                });
                vue.setSharedData(__sharedData, 6, n2 == null ? void 0 : n2.sharedData);
                const _on_click1 = () => {
                  return actionSheetShow2.value = true;
                };
                const n6 = vue.createSharedDataComponentWithFallback(_component_up_button, "58a1e6c4", {
                  type: "success",
                  text: "带取消按钮",
                  size: "mini",
                  onClick: () => {
                    return _on_click1;
                  }
                });
                vue.setSharedData(__sharedData, 7, n6 == null ? void 0 : n6.sharedData);
                const _on_click2 = () => {
                  return actionSheetShow3.value = true;
                };
                const n10 = vue.createSharedDataComponentWithFallback(_component_up_button, "58a1ef21", {
                  type: "warning",
                  text: "复杂面板",
                  size: "mini",
                  onClick: () => {
                    return _on_click2;
                  }
                });
                vue.setSharedData(__sharedData, 8, n10 == null ? void 0 : n10.sharedData);
                const _on_close = () => {
                  return actionSheetShow.value = false;
                };
                const n14 = vue.createSharedDataComponentWithFallback(_component_up_action_sheet, "88cf9798", {
                  show: () => {
                    return actionSheetShow.value;
                  },
                  actions: () => {
                    return actionList.value;
                  },
                  title: "请选择操作",
                  onClose: () => {
                    return _on_close;
                  },
                  onSelect: () => {
                    return onActionSelect;
                  }
                });
                vue.setSharedData(__sharedData, 3, n14 == null ? void 0 : n14.sharedData);
                const _on_close1 = () => {
                  return actionSheetShow2.value = false;
                };
                const n15 = vue.createSharedDataComponentWithFallback(_component_up_action_sheet, "88cf88cc", {
                  show: () => {
                    return actionSheetShow2.value;
                  },
                  actions: () => {
                    return actionList.value;
                  },
                  title: "请选择操作",
                  "cancel-text": "取消",
                  onClose: () => {
                    return _on_close1;
                  },
                  onSelect: () => {
                    return onActionSelect;
                  }
                });
                vue.setSharedData(__sharedData, 4, n15 == null ? void 0 : n15.sharedData);
                const _on_close2 = () => {
                  return actionSheetShow3.value = false;
                };
                const n16 = vue.createSharedDataComponentWithFallback(_component_up_action_sheet, "88cf7950", {
                  show: () => {
                    return actionSheetShow3.value;
                  },
                  actions: () => {
                    return actionListComplex.value;
                  },
                  title: "请选择操作",
                  description: "这是一段描述信息",
                  "cancel-text": "取消",
                  onClose: () => {
                    return _on_close2;
                  },
                  onSelect: () => {
                    return onActionSelect;
                  }
                });
                vue.setSharedData(__sharedData, 5, n16 == null ? void 0 : n16.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n18.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n19.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$G = {};
  const _style_1$G = {};
  const SrcSubUviewUltraDemosActionSheetActionSheet = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["styles", [_style_0$G, _style_1$G]]]);
  const __className$E = "GenSrcSubUviewUltraDemosBadgeBadge";
  const _sfc_main$F = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$E,
    __filename: "src/sub/uview-ultra/demos/badge/badge.uvue",
    __name: "badge",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosBadgeBadgeSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosBadgeBadgeSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_badge = vue.resolveComponent("up-badge");
        const n25 = vue.createSharedDataComponent(AppKu, "52c5317e", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n24 = vue.createSharedDataComponent(LayoutComponent, "05e0fe56", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-badge 徽标"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "b63ecb46", {
                  title: "up-badge 徽标",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_badge, "b63eb5b6", {
                  type: "error",
                  value: 9,
                  class: "mr-20px"
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n3 = vue.createSharedDataComponentWithFallback(_component_up_badge, "b63eaeea", {
                  type: "warning",
                  value: 99,
                  class: "mr-20px"
                });
                vue.setSharedData(__sharedData, 4, n3 == null ? void 0 : n3.sharedData);
                const n4 = vue.createSharedDataComponentWithFallback(_component_up_badge, "b63ead04", {
                  type: "success",
                  value: 100,
                  max: "99"
                });
                vue.setSharedData(__sharedData, 5, n4 == null ? void 0 : n4.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_badge, "b63e9832", {
                  type: "error",
                  "is-dot": true
                });
                vue.setSharedData(__sharedData, 6, n8 == null ? void 0 : n8.sharedData);
                const n12 = vue.createSharedDataComponentWithFallback(_component_up_badge, "119ad21c", {
                  value: "新",
                  "bg-color": "#8a2be2",
                  color: "#ffffff",
                  class: "mr-20px"
                });
                vue.setSharedData(__sharedData, 7, n12 == null ? void 0 : n12.sharedData);
                const n13 = vue.createSharedDataComponentWithFallback(_component_up_badge, "119acad2", {
                  value: "热",
                  "bg-color": "#ff9900",
                  color: "#ffffff",
                  class: "mr-20px"
                });
                vue.setSharedData(__sharedData, 8, n13 == null ? void 0 : n13.sharedData);
                const n14 = vue.createSharedDataComponentWithFallback(_component_up_badge, "119ac35e", {
                  "is-dot": true,
                  "bg-color": "#000000",
                  class: "mr-20px"
                });
                vue.setSharedData(__sharedData, 9, n14 == null ? void 0 : n14.sharedData);
                const n18 = vue.createSharedDataComponentWithFallback(_component_up_badge, "119aac8a", {
                  type: "error",
                  value: 5,
                  absolute: "",
                  offset: () => {
                    return [-10, -10];
                  }
                });
                vue.setSharedData(__sharedData, 10, n18 == null ? void 0 : n18.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n24.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n25.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$F = {};
  const _style_1$F = {};
  const SrcSubUviewUltraDemosBadgeBadge = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["styles", [_style_0$F, _style_1$F]]]);
  const __className$D = "GenSrcSubUviewUltraDemosAvatarAvatar";
  const _sfc_main$E = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$D,
    __filename: "src/sub/uview-ultra/demos/avatar/avatar.uvue",
    __name: "avatar",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosAvatarAvatarSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosAvatarAvatarSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_avatar = vue.resolveComponent("up-avatar");
        const n26 = vue.createSharedDataComponent(AppKu, "7aad1313", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n25 = vue.createSharedDataComponent(LayoutComponent, "4a15617a", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-avatar 头像"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "f896cca0", {
                  title: "up-avatar 头像",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_avatar, "f896b70e", {
                  src: "/static/logo.png",
                  size: "40",
                  class: "mr-10px"
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n3 = vue.createSharedDataComponentWithFallback(_component_up_avatar, "f896afd8", {
                  text: "U",
                  size: "40",
                  "bg-color": "#2979ff",
                  class: "mr-10px"
                });
                vue.setSharedData(__sharedData, 4, n3 == null ? void 0 : n3.sharedData);
                const n7 = vue.createSharedDataComponentWithFallback(_component_up_avatar, "f8969fa0", {
                  src: "/static/logo.png",
                  shape: "circle",
                  size: "40",
                  class: "mr-10px"
                });
                vue.setSharedData(__sharedData, 5, n7 == null ? void 0 : n7.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_avatar, "f896984c", {
                  src: "/static/logo.png",
                  shape: "square",
                  size: "40"
                });
                vue.setSharedData(__sharedData, 6, n8 == null ? void 0 : n8.sharedData);
                const n12 = vue.createSharedDataComponentWithFallback(_component_up_avatar, "1a42f540", {
                  src: "/static/logo.png",
                  size: "50",
                  class: "mr-10px"
                });
                vue.setSharedData(__sharedData, 7, n12 == null ? void 0 : n12.sharedData);
                const n13 = vue.createSharedDataComponentWithFallback(_component_up_avatar, "1a42f34a", {
                  src: "/static/logo.png",
                  size: "40",
                  class: "mr-10px"
                });
                vue.setSharedData(__sharedData, 8, n13 == null ? void 0 : n13.sharedData);
                const n14 = vue.createSharedDataComponentWithFallback(_component_up_avatar, "1a42ec3e", {
                  src: "/static/logo.png",
                  size: "30",
                  class: "mr-10px"
                });
                vue.setSharedData(__sharedData, 9, n14 == null ? void 0 : n14.sharedData);
                const n18 = vue.createSharedDataComponentWithFallback(_component_up_avatar, "1a42d6f0", {
                  icon: "level",
                  size: "40",
                  "bg-color": "#fa3534",
                  class: "mr-10px"
                });
                vue.setSharedData(__sharedData, 10, n18 == null ? void 0 : n18.sharedData);
                const n19 = vue.createSharedDataComponentWithFallback(_component_up_avatar, "1a42cfa8", {
                  icon: "photo",
                  size: "40",
                  "bg-color": "#ff9900",
                  class: "mr-10px"
                });
                vue.setSharedData(__sharedData, 11, n19 == null ? void 0 : n19.sharedData);
                const n20 = vue.createSharedDataComponentWithFallback(_component_up_avatar, "1a42c836", {
                  text: "张",
                  size: "40",
                  "bg-color": "#19be6b"
                });
                vue.setSharedData(__sharedData, 12, n20 == null ? void 0 : n20.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n25.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n26.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$E = {};
  const _style_1$E = {};
  const SrcSubUviewUltraDemosAvatarAvatar = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["styles", [_style_0$E, _style_1$E]]]);
  const __className$C = "GenSrcSubUviewUltraDemosSearchSearch";
  const _sfc_main$D = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$C,
    __filename: "src/sub/uview-ultra/demos/search/search.uvue",
    __name: "search",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosSearchSearchSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosSearchSearchSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const searchValue1 = vue.ref("");
      const searchValue2 = vue.ref("");
      const searchValue3 = vue.ref("");
      const searchValue4 = vue.ref("");
      const searchValue5 = vue.ref("");
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_search = vue.resolveComponent("up-search");
        const n19 = vue.createSharedDataComponent(AppKu, "441ec4f1", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n18 = vue.createSharedDataComponent(LayoutComponent, "3fb9d925", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-search 搜索"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "90fd67e4", {
                  title: "up-search 搜索",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_search, "90fd586e", {
                  modelValue: () => {
                    return searchValue1.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return searchValue1.value = _value;
                    };
                  },
                  placeholder: "请输入搜索关键字"
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_search, "90fd49e6", {
                  modelValue: () => {
                    return searchValue2.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return searchValue2.value = _value;
                    };
                  },
                  placeholder: "隐藏操作按钮",
                  "show-action": false
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_search, "90fd3adc", {
                  modelValue: () => {
                    return searchValue3.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return searchValue3.value = _value;
                    };
                  },
                  shape: "square",
                  "search-icon-color": "#fa3534",
                  placeholder: "方形搜索框"
                });
                vue.setSharedData(__sharedData, 5, n8 == null ? void 0 : n8.sharedData);
                const n11 = vue.createSharedDataComponentWithFallback(_component_up_search, "90fd2b5a", {
                  modelValue: () => {
                    return searchValue4.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return searchValue4.value = _value;
                    };
                  },
                  "action-text": "搜一下"
                });
                vue.setSharedData(__sharedData, 6, n11 == null ? void 0 : n11.sharedData);
                const n14 = vue.createSharedDataComponentWithFallback(_component_up_search, "38a81f64", {
                  modelValue: () => {
                    return searchValue5.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return searchValue5.value = _value;
                    };
                  },
                  disabled: true,
                  placeholder: "禁用输入"
                });
                vue.setSharedData(__sharedData, 7, n14 == null ? void 0 : n14.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n18.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n19.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$D = {};
  const _style_1$D = {};
  const SrcSubUviewUltraDemosSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["styles", [_style_0$D, _style_1$D]]]);
  const __className$B = "GenSrcSubUviewUltraDemosAlertAlert";
  const _sfc_main$C = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$B,
    __filename: "src/sub/uview-ultra/demos/alert/alert.uvue",
    __name: "alert",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosAlertAlertSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosAlertAlertSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_alert = vue.resolveComponent("up-alert");
        const n25 = vue.createSharedDataComponent(AppKu, "7c1daae1", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n24 = vue.createSharedDataComponent(LayoutComponent, "0797b135", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-alert 警告提示"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "29431402", {
                  title: "up-alert 警告提示",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_alert, "2943048a", {
                  title: "成功提示",
                  type: "success",
                  "show-icon": true
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n4 = vue.createSharedDataComponentWithFallback(_component_up_alert, "2942f7ae", {
                  title: "警告提示",
                  type: "warning",
                  "show-icon": true
                });
                vue.setSharedData(__sharedData, 4, n4 == null ? void 0 : n4.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_alert, "2942ee46", {
                  title: "主要提示",
                  type: "primary"
                });
                vue.setSharedData(__sharedData, 5, n8 == null ? void 0 : n8.sharedData);
                const n10 = vue.createSharedDataComponentWithFallback(_component_up_alert, "2942e6f8", {
                  title: "错误提示",
                  type: "error"
                });
                vue.setSharedData(__sharedData, 6, n10 == null ? void 0 : n10.sharedData);
                const n12 = vue.createSharedDataComponentWithFallback(_component_up_alert, "2942dfae", {
                  title: "信息提示",
                  type: "info"
                });
                vue.setSharedData(__sharedData, 7, n12 == null ? void 0 : n12.sharedData);
                const n17 = vue.createSharedDataComponentWithFallback(_component_up_alert, "ff1fa192", {
                  title: "成功",
                  type: "success",
                  description: "这是一段成功的描述信息",
                  "show-icon": true
                });
                vue.setSharedData(__sharedData, 8, n17 == null ? void 0 : n17.sharedData);
                const n20 = vue.createSharedDataComponentWithFallback(_component_up_alert, "ff1f928e", {
                  title: "带关闭按钮的提示",
                  type: "warning",
                  closable: true,
                  "show-icon": true
                });
                vue.setSharedData(__sharedData, 9, n20 == null ? void 0 : n20.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n24.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n25.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$C = {};
  const _style_1$C = {};
  const SrcSubUviewUltraDemosAlertAlert = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["styles", [_style_0$C, _style_1$C]]]);
  const __className$A = "GenSrcSubUviewUltraDemosNoticeBarNoticeBar";
  const _sfc_main$B = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$A,
    __filename: "src/sub/uview-ultra/demos/notice-bar/notice-bar.uvue",
    __name: "notice-bar",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosNoticeBarNoticeBarSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosNoticeBarNoticeBarSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_notice_bar = vue.resolveComponent("up-notice-bar");
        const n19 = vue.createSharedDataComponent(AppKu, "6aaf6fc1", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n18 = vue.createSharedDataComponent(LayoutComponent, "2982ef56", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-notice-bar 通知"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "7c9282f7", {
                  title: "up-notice-bar 滚动通知",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_notice_bar, "7c928d43", {
                  text: "uview-ultra 是一款专为 uni-app X 设计的高品质 UI 组件库",
                  mode: "link"
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_notice_bar, "7c9294c5", {
                  text: "通知：系统将于今晚 24:00 进行维护更新。",
                  type: "warning"
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
                const n7 = vue.createSharedDataComponentWithFallback(_component_up_notice_bar, "7c9298c7", {
                  text: "成功：数据已经成功备份到云端。",
                  type: "success"
                });
                vue.setSharedData(__sharedData, 5, n7 == null ? void 0 : n7.sharedData);
                const n9 = vue.createSharedDataComponentWithFallback(_component_up_notice_bar, "7c929cac", {
                  text: "错误：网络连接失败，请检查设置。",
                  type: "error"
                });
                vue.setSharedData(__sharedData, 6, n9 == null ? void 0 : n9.sharedData);
                const n14 = vue.createSharedDataComponentWithFallback(_component_up_notice_bar, "15bdbe37", {
                  text: ["第一条重要通知", "第二条重要通知", "第三条重要通知"],
                  direction: "column"
                });
                vue.setSharedData(__sharedData, 7, n14 == null ? void 0 : n14.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n18.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n19.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$B = {};
  const _style_1$B = {};
  const SrcSubUviewUltraDemosNoticeBarNoticeBar = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["styles", [_style_0$B, _style_1$B]]]);
  const __className$z = "GenSrcSubUviewUltraDemosCollapseCollapse";
  const _sfc_main$A = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$z,
    __filename: "src/sub/uview-ultra/demos/collapse/collapse.uvue",
    __name: "collapse",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosCollapseCollapseSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosCollapseCollapseSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const collapseValue = vue.ref("1");
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_collapse_item = vue.resolveComponent("up-collapse-item");
        const _component_up_collapse = vue.resolveComponent("up-collapse");
        const n16 = vue.createSharedDataComponent(AppKu, "59d01b7b", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n15 = vue.createSharedDataComponent(LayoutComponent, "3f99584a", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-collapse 折叠面板"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "26372831", {
                  title: "up-collapse 折叠面板",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n6 = vue.createSharedDataComponentWithFallback(_component_up_collapse, "26372fdb", {
                  value: () => {
                    return collapseValue.value;
                  },
                  accordion: true
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n3 = vue.createSharedDataComponentWithFallback(_component_up_collapse_item, "2637333a", {
                      title: "第一项",
                      name: "1"
                    }, {
                      "default": () => {
                      }
                    });
                    vue.setSharedData(__sharedData, 4, n3 == null ? void 0 : n3.sharedData);
                    const n5 = vue.createSharedDataComponentWithFallback(_component_up_collapse_item, "26373a60", {
                      title: "第二项",
                      name: "2"
                    }, {
                      "default": () => {
                      }
                    });
                    vue.setSharedData(__sharedData, 5, n5 == null ? void 0 : n5.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 3, n6 == null ? void 0 : n6.sharedData);
                const n11 = vue.createSharedDataComponentWithFallback(_component_up_collapse, "26374549", { value: ["1"] }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n10 = vue.createSharedDataComponentWithFallback(_component_up_collapse_item, "263745c4", {
                      title: "第一项",
                      name: "1",
                      icon: "star"
                    }, {
                      "default": () => {
                      }
                    });
                    vue.setSharedData(__sharedData, 7, n10 == null ? void 0 : n10.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 6, n11 == null ? void 0 : n11.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n15.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n16.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$A = {};
  const _style_1$A = {};
  const SrcSubUviewUltraDemosCollapseCollapse = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["styles", [_style_0$A, _style_1$A]]]);
  const __className$y = "GenSrcSubUviewUltraDemosToastToast";
  const _sfc_main$z = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$y,
    __filename: "src/sub/uview-ultra/demos/toast/toast.uvue",
    __name: "toast",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosToastToastSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosToastToastSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const uToast = vue.ref(null);
      function showToast(type) {
        const toast2 = uToast.value;
        if (toast2 != null) {
          const configs = new UTSJSONObject({
            success: new UTSJSONObject({ message: "操作成功！", type: "success" }),
            error: new UTSJSONObject({ message: "操作失败！", type: "error" }),
            warning: new UTSJSONObject({ message: "请注意风险！", type: "warning" }),
            default: new UTSJSONObject({ message: "这是一条提示", type: "default" })
          });
          const config2 = configs[type];
          toast2.$callMethod("show", new UTSJSONObject({
            message: config2.message,
            type: config2.type
          }));
        }
      }
      return () => {
        "raw js";
        const _setTemplateRef = vue.createSharedDataTemplateRefSetter();
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_button = vue.resolveComponent("up-button");
        const _component_up_toast = vue.resolveComponent("up-toast");
        const n17 = vue.createSharedDataComponent(AppKu, "fbd28c7e", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n16 = vue.createSharedDataComponent(LayoutComponent, "7e7f0356", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-toast 消息提示"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "574f4cdf", {
                  title: "up-toast 消息提示",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const _on_click = () => {
                  return showToast("success");
                };
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_button, "574f57be", {
                  type: "primary",
                  text: "成功提示",
                  size: "mini",
                  onClick: () => {
                    return _on_click;
                  }
                });
                vue.setSharedData(__sharedData, 4, n2 == null ? void 0 : n2.sharedData);
                const _on_click1 = () => {
                  return showToast("error");
                };
                const n4 = vue.createSharedDataComponentWithFallback(_component_up_button, "574f5bfd", {
                  type: "error",
                  text: "错误提示",
                  size: "mini",
                  onClick: () => {
                    return _on_click1;
                  }
                });
                vue.setSharedData(__sharedData, 5, n4 == null ? void 0 : n4.sharedData);
                const _on_click2 = () => {
                  return showToast("warning");
                };
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_button, "574f66c3", {
                  type: "warning",
                  text: "警告提示",
                  size: "mini",
                  onClick: () => {
                    return _on_click2;
                  }
                });
                vue.setSharedData(__sharedData, 6, n8 == null ? void 0 : n8.sharedData);
                const _on_click3 = () => {
                  return showToast("default");
                };
                const n10 = vue.createSharedDataComponentWithFallback(_component_up_button, "574f6b02", {
                  type: "default",
                  text: "默认提示",
                  size: "mini",
                  onClick: () => {
                    return _on_click3;
                  }
                });
                vue.setSharedData(__sharedData, 7, n10 == null ? void 0 : n10.sharedData);
                const n14 = vue.createSharedDataComponentWithFallback(_component_up_toast, "dacb8fdc");
                vue.setSharedData(__sharedData, 3, n14 == null ? void 0 : n14.sharedData);
                _setTemplateRef(n14, uToast, null, "uToast");
              })
            });
            vue.setSharedData(__sharedData, 1, n16.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n17.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$z = {};
  const _style_1$z = {};
  const SrcSubUviewUltraDemosToastToast = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["styles", [_style_0$z, _style_1$z]]]);
  const __className$x = "GenSrcSubUviewUltraDemosNotifyNotify";
  const _sfc_main$y = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$x,
    __filename: "src/sub/uview-ultra/demos/notify/notify.uvue",
    __name: "notify",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosNotifyNotifySharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosNotifyNotifySharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const uNotify = vue.ref(null);
      function showNotify(type) {
        const notify = uNotify.value;
        if (notify != null) {
          const msgs = new UTSJSONObject({
            primary: "主要通知消息",
            success: "操作成功通知",
            warning: "请注意安全通知",
            error: "发生错误通知"
          });
          notify.$callMethod("show", new UTSJSONObject({
            message: msgs[type],
            type
          }));
        }
      }
      return () => {
        "raw js";
        const _setTemplateRef = vue.createSharedDataTemplateRefSetter();
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_button = vue.resolveComponent("up-button");
        const _component_up_notify = vue.resolveComponent("up-notify");
        const n17 = vue.createSharedDataComponent(AppKu, "60fc12f3", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n16 = vue.createSharedDataComponent(LayoutComponent, "82f3693a", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-notify 消息通知"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "12432192", {
                  title: "up-notify 消息通知",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const _on_click = () => {
                  return showNotify("primary");
                };
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_button, "12432c72", {
                  type: "primary",
                  text: "主要通知",
                  size: "mini",
                  onClick: () => {
                    return _on_click;
                  }
                });
                vue.setSharedData(__sharedData, 4, n2 == null ? void 0 : n2.sharedData);
                const _on_click1 = () => {
                  return showNotify("success");
                };
                const n4 = vue.createSharedDataComponentWithFallback(_component_up_button, "124330b2", {
                  type: "success",
                  text: "成功通知",
                  size: "mini",
                  onClick: () => {
                    return _on_click1;
                  }
                });
                vue.setSharedData(__sharedData, 5, n4 == null ? void 0 : n4.sharedData);
                const _on_click2 = () => {
                  return showNotify("warning");
                };
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_button, "12433b7d", {
                  type: "warning",
                  text: "警告通知",
                  size: "mini",
                  onClick: () => {
                    return _on_click2;
                  }
                });
                vue.setSharedData(__sharedData, 6, n8 == null ? void 0 : n8.sharedData);
                const _on_click3 = () => {
                  return showNotify("error");
                };
                const n10 = vue.createSharedDataComponentWithFallback(_component_up_button, "12433fd2", {
                  type: "error",
                  text: "错误通知",
                  size: "mini",
                  onClick: () => {
                    return _on_click3;
                  }
                });
                vue.setSharedData(__sharedData, 7, n10 == null ? void 0 : n10.sharedData);
                const n14 = vue.createSharedDataComponentWithFallback(_component_up_notify, "3620f9a6");
                vue.setSharedData(__sharedData, 3, n14 == null ? void 0 : n14.sharedData);
                _setTemplateRef(n14, uNotify, null, "uNotify");
              })
            });
            vue.setSharedData(__sharedData, 1, n16.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n17.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$y = {};
  const _style_1$y = {};
  const SrcSubUviewUltraDemosNotifyNotify = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["styles", [_style_0$y, _style_1$y]]]);
  const __className$w = "GenSrcSubUviewUltraDemosLoadingPageLoadingPage";
  const _sfc_main$x = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$w,
    __filename: "src/sub/uview-ultra/demos/loading-page/loading-page.uvue",
    __name: "loading-page",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosLoadingPageLoadingPageSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosLoadingPageLoadingPageSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const loadingPageShow = vue.ref(false);
      function triggerLoadingPage() {
        loadingPageShow.value = true;
        setTimeout(() => {
          loadingPageShow.value = false;
        }, 2e3);
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_button = vue.resolveComponent("up-button");
        const _component_up_loading_page = vue.resolveComponent("up-loading-page");
        const n9 = vue.createSharedDataComponent(AppKu, "acd436fe", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n8 = vue.createSharedDataComponent(LayoutComponent, "edb2a8d6", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-loading-page 加载页"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "c8a2708c", {
                  title: "up-loading-page 加载页",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_button, "c8a25ac2", {
                  type: "primary",
                  text: "触发全屏加载",
                  size: "mini",
                  onClick: () => {
                    return triggerLoadingPage;
                  }
                });
                vue.setSharedData(__sharedData, 4, n2 == null ? void 0 : n2.sharedData);
                const n6 = vue.createSharedDataComponentWithFallback(_component_up_loading_page, "c8a2524a", {
                  loading: () => {
                    return loadingPageShow.value;
                  },
                  "loading-text": "页面正在加载中...",
                  "loading-mode": "circle"
                });
                vue.setSharedData(__sharedData, 3, n6 == null ? void 0 : n6.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n8.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n9.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$x = {};
  const _style_1$x = {};
  const SrcSubUviewUltraDemosLoadingPageLoadingPage = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["styles", [_style_0$x, _style_1$x]]]);
  const __className$v = "GenSrcSubUviewUltraDemosOverlayOverlay";
  const _sfc_main$w = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$v,
    __filename: "src/sub/uview-ultra/demos/overlay/overlay.uvue",
    __name: "overlay",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosOverlayOverlaySharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosOverlayOverlaySharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const overlayShow = vue.ref(false);
      const overlayOpacity = vue.ref(0.5);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_button = vue.resolveComponent("up-button");
        const _component_up_loading_icon = vue.resolveComponent("up-loading-icon");
        const _component_up_overlay = vue.resolveComponent("up-overlay");
        const n15 = vue.createSharedDataComponent(AppKu, "57f1bb61", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n14 = vue.createSharedDataComponent(LayoutComponent, "b3749e96", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-overlay 遮罩层"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "22706680", {
                  title: "up-overlay 遮罩层",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const _on_click = () => {
                  return overlayShow.value = true;
                };
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_button, "22707160", {
                  type: "primary",
                  text: "显示遮罩",
                  size: "mini",
                  onClick: () => {
                    return _on_click;
                  }
                });
                vue.setSharedData(__sharedData, 6, n2 == null ? void 0 : n2.sharedData);
                const _on_click1 = () => {
                  overlayOpacity.value = 0.3;
                  overlayShow.value = true;
                };
                const n4 = vue.createSharedDataComponentWithFallback(_component_up_button, "2270759d", {
                  type: "warning",
                  text: "半透明遮罩",
                  size: "mini",
                  onClick: () => {
                    return _on_click1;
                  }
                });
                vue.setSharedData(__sharedData, 7, n4 == null ? void 0 : n4.sharedData);
                const _on_click2 = () => {
                  return overlayShow.value = false;
                };
                const n12 = vue.createSharedDataComponentWithFallback(_component_up_overlay, "22707ca3", {
                  show: () => {
                    return overlayShow.value;
                  },
                  opacity: () => {
                    return overlayOpacity.value;
                  },
                  onClick: () => {
                    return _on_click2;
                  }
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n8 = vue.createSharedDataComponentWithFallback(_component_up_loading_icon, "22708485", { mode: "circle" });
                    vue.setSharedData(__sharedData, 4, n8 == null ? void 0 : n8.sharedData);
                    vue.setSharedDataEvent(__sharedData, 5, () => {
                    });
                  })
                });
                vue.setSharedData(__sharedData, 3, n12 == null ? void 0 : n12.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n14.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n15.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$w = {};
  const _style_1$w = {};
  const SrcSubUviewUltraDemosOverlayOverlay = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["styles", [_style_0$w, _style_1$w]]]);
  const __className$u = "GenSrcSubUviewUltraDemosModalModal";
  const _sfc_main$v = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$u,
    __filename: "src/sub/uview-ultra/demos/modal/modal.uvue",
    __name: "modal",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosModalModalSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosModalModalSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const modalShow = vue.ref(false);
      const modalTitle = vue.ref("");
      const modalContent = vue.ref("");
      const modalShowCancel = vue.ref(false);
      function showModal() {
        modalTitle.value = "提示";
        modalContent.value = "这是一个模态弹窗，用于提示重要信息。";
        modalShowCancel.value = false;
        modalShow.value = true;
      }
      function showConfirmModal() {
        modalTitle.value = "确认操作";
        modalContent.value = "确定要执行此操作吗？此操作不可撤销。";
        modalShowCancel.value = true;
        modalShow.value = true;
      }
      function showNoTitleModal() {
        modalTitle.value = "";
        modalContent.value = "这是一个没有标题的弹窗，显得更加简洁。";
        modalShowCancel.value = false;
        modalShow.value = true;
      }
      function showLongModal() {
        modalTitle.value = "用户协议";
        modalContent.value = "1. 这是一个很长很长很长很长很长很长很长很长的内容\n2. 这是一个很长很长很长很长很长很长很长很长的内容";
        modalShowCancel.value = false;
        modalShow.value = true;
      }
      function onModalConfirm() {
        modalShow.value = false;
        uni.showToast({ title: "操作成功", icon: "success" });
      }
      function onModalClose() {
        modalShow.value = false;
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_button = vue.resolveComponent("up-button");
        const _component_up_modal = vue.resolveComponent("up-modal");
        const n19 = vue.createSharedDataComponent(AppKu, "0b14ad81", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n18 = vue.createSharedDataComponent(LayoutComponent, "57810295", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-modal 模态框"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "cec15ec4", {
                  title: "up-modal 模态框",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_button, "cec14932", {
                  type: "primary",
                  text: "弹窗提示",
                  size: "mini",
                  onClick: () => {
                    return showModal;
                  }
                });
                vue.setSharedData(__sharedData, 4, n2 == null ? void 0 : n2.sharedData);
                const n4 = vue.createSharedDataComponentWithFallback(_component_up_button, "cec140f4", {
                  type: "warning",
                  text: "确认弹窗",
                  size: "mini",
                  onClick: () => {
                    return showConfirmModal;
                  }
                });
                vue.setSharedData(__sharedData, 5, n4 == null ? void 0 : n4.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_button, "cec12b66", {
                  type: "success",
                  text: "无标题",
                  size: "mini",
                  onClick: () => {
                    return showNoTitleModal;
                  }
                });
                vue.setSharedData(__sharedData, 6, n8 == null ? void 0 : n8.sharedData);
                const n12 = vue.createSharedDataComponentWithFallback(_component_up_button, "7b4aa951", {
                  type: "error",
                  text: "长内容",
                  size: "mini",
                  onClick: () => {
                    return showLongModal;
                  }
                });
                vue.setSharedData(__sharedData, 7, n12 == null ? void 0 : n12.sharedData);
                const n16 = vue.createSharedDataComponentWithFallback(_component_up_modal, "7b4aaff9", {
                  show: () => {
                    return modalShow.value;
                  },
                  title: () => {
                    return modalTitle.value;
                  },
                  content: () => {
                    return modalContent.value;
                  },
                  "show-confirm-button": true,
                  "show-cancel-button": () => {
                    return modalShowCancel.value;
                  },
                  onConfirm: () => {
                    return onModalConfirm;
                  },
                  onClose: () => {
                    return onModalClose;
                  }
                });
                vue.setSharedData(__sharedData, 3, n16 == null ? void 0 : n16.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n18.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n19.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$v = {};
  const _style_1$v = {};
  const SrcSubUviewUltraDemosModalModal = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["styles", [_style_0$v, _style_1$v]]]);
  const __className$t = "GenSrcSubUviewUltraDemosPopupPopup";
  const _sfc_main$u = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$t,
    __filename: "src/sub/uview-ultra/demos/popup/popup.uvue",
    __name: "popup",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosPopupPopupSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosPopupPopupSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const popupShow = vue.ref(false);
      const popupMode = vue.ref("bottom");
      function openPopup(mode) {
        popupMode.value = mode;
        popupShow.value = true;
      }
      function onPopupClose() {
        popupShow.value = false;
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_button = vue.resolveComponent("up-button");
        const _component_up_popup = vue.resolveComponent("up-popup");
        const n22 = vue.createSharedDataComponent(AppKu, "69dd3ce1", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n21 = vue.createSharedDataComponent(LayoutComponent, "5c6b4196", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-popup 弹出层"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "678187fe", {
                  title: "up-popup 弹出层",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const _on_click = () => {
                  return openPopup("top");
                };
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_button, "678192c7", {
                  type: "primary",
                  text: "顶部弹出",
                  size: "mini",
                  onClick: () => {
                    return _on_click;
                  }
                });
                vue.setSharedData(__sharedData, 5, n2 == null ? void 0 : n2.sharedData);
                const _on_click1 = () => {
                  return openPopup("bottom");
                };
                const n4 = vue.createSharedDataComponentWithFallback(_component_up_button, "67819702", {
                  type: "primary",
                  text: "底部弹出",
                  size: "mini",
                  onClick: () => {
                    return _on_click1;
                  }
                });
                vue.setSharedData(__sharedData, 6, n4 == null ? void 0 : n4.sharedData);
                const _on_click2 = () => {
                  return openPopup("left");
                };
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_button, "6781a1e2", {
                  type: "success",
                  text: "左侧弹出",
                  size: "mini",
                  onClick: () => {
                    return _on_click2;
                  }
                });
                vue.setSharedData(__sharedData, 7, n8 == null ? void 0 : n8.sharedData);
                const _on_click3 = () => {
                  return openPopup("right");
                };
                const n10 = vue.createSharedDataComponentWithFallback(_component_up_button, "6781a609", {
                  type: "success",
                  text: "右侧弹出",
                  size: "mini",
                  onClick: () => {
                    return _on_click3;
                  }
                });
                vue.setSharedData(__sharedData, 8, n10 == null ? void 0 : n10.sharedData);
                const _on_click4 = () => {
                  return openPopup("center");
                };
                const n12 = vue.createSharedDataComponentWithFallback(_component_up_button, "eea13e4c", {
                  type: "success",
                  text: "居中弹出",
                  size: "mini",
                  onClick: () => {
                    return _on_click4;
                  }
                });
                vue.setSharedData(__sharedData, 9, n12 == null ? void 0 : n12.sharedData);
                const n19 = vue.createSharedDataComponentWithFallback(_component_up_popup, "eea135d6", {
                  show: () => {
                    return popupShow.value;
                  },
                  mode: () => {
                    return popupMode.value;
                  },
                  closeable: true,
                  round: 10,
                  onClose: () => {
                    return onPopupClose;
                  }
                }, {
                  "default": () => {
                    vue.renderSharedDataEffect(() => {
                      return vue.setSharedData(__sharedData, 4, vue.toDisplayString(popupMode.value));
                    });
                  }
                });
                vue.setSharedData(__sharedData, 3, n19 == null ? void 0 : n19.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n21.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n22.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$u = {};
  const _style_1$u = {};
  const SrcSubUviewUltraDemosPopupPopup = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["styles", [_style_0$u, _style_1$u]]]);
  const __className$s = "GenSrcSubUviewUltraDemosTooltipTooltip";
  const _sfc_main$t = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$s,
    __filename: "src/sub/uview-ultra/demos/tooltip/tooltip.uvue",
    __name: "tooltip",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosTooltipTooltipSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosTooltipTooltipSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const tooltipButtons = vue.ref(["编辑", "删除"]);
      const multiButtons = vue.ref(["转发", "收藏", "删除"]);
      function handleBtnClick(index) {
        uni.showToast({
          title: `点击了第 ${index} 个按钮`,
          icon: "none"
        });
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_tooltip = vue.resolveComponent("up-tooltip");
        const _component_up_button = vue.resolveComponent("up-button");
        const n35 = vue.createSharedDataComponent(AppKu, "2c37d7fe", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n34 = vue.createSharedDataComponent(LayoutComponent, "529e6c15", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-tooltip 长按提示"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "012f1721", {
                  title: "up-tooltip 长按提示",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_tooltip, "012f2582", {
                  text: "长按此处复制文本",
                  direction: "top"
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n4 = vue.createSharedDataComponentWithFallback(_component_up_tooltip, "012f2981", {
                  text: "长按显示操作",
                  direction: "top",
                  "show-copy": false,
                  buttons: () => {
                    return tooltipButtons.value;
                  },
                  onClick: () => {
                    return handleBtnClick;
                  }
                });
                vue.setSharedData(__sharedData, 4, n4 == null ? void 0 : n4.sharedData);
                const n9 = vue.createSharedDataComponentWithFallback(_component_up_tooltip, "24b3b230", {
                  text: "长按文本，上方提示",
                  direction: "top"
                });
                vue.setSharedData(__sharedData, 5, n9 == null ? void 0 : n9.sharedData);
                const n11 = vue.createSharedDataComponentWithFallback(_component_up_tooltip, "24b3b630", {
                  text: "长按文本，下方提示",
                  direction: "bottom"
                });
                vue.setSharedData(__sharedData, 6, n11 == null ? void 0 : n11.sharedData);
                const n16 = vue.createSharedDataComponentWithFallback(_component_up_tooltip, "24b3c13b", {
                  text: "长按文本，显示背景色",
                  "bg-color": "#d1fae5",
                  direction: "top"
                });
                vue.setSharedData(__sharedData, 7, n16 == null ? void 0 : n16.sharedData);
                const n20 = vue.createSharedDataComponentWithFallback(_component_up_tooltip, "24b3cc3b", {
                  text: "显示多个扩展按钮",
                  "show-copy": true,
                  buttons: () => {
                    return multiButtons.value;
                  },
                  onClick: () => {
                    return handleBtnClick;
                  }
                });
                vue.setSharedData(__sharedData, 8, n20 == null ? void 0 : n20.sharedData);
                const n25 = vue.createSharedDataComponentWithFallback(_component_up_tooltip, "24b4270a", {
                  "show-copy": false,
                  buttons: ["设置", "赞"],
                  direction: "top",
                  onClick: () => {
                    return handleBtnClick;
                  }
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n24 = vue.createSharedDataComponentWithFallback(_component_up_button, "24b42ae9", {
                      type: "primary",
                      size: "small",
                      text: "点击/长按触发"
                    });
                    vue.setSharedData(__sharedData, 10, n24 == null ? void 0 : n24.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 9, n25 == null ? void 0 : n25.sharedData);
                const n28 = vue.createSharedDataComponentWithFallback(_component_up_tooltip, "24b431b1", {
                  "show-copy": true,
                  buttons: ["自定义操作"],
                  direction: "bottom",
                  onClick: () => {
                    return handleBtnClick;
                  }
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n27 = vue.createSharedDataComponentWithFallback(_component_up_button, "24b4357b", {
                      type: "warning",
                      size: "small",
                      text: "下方弹出"
                    });
                    vue.setSharedData(__sharedData, 12, n27 == null ? void 0 : n27.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 11, n28 == null ? void 0 : n28.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n34.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n35.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$t = {};
  const _style_1$t = {};
  const SrcSubUviewUltraDemosTooltipTooltip = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["styles", [_style_0$t, _style_1$t]]]);
  const __className$r = "GenSrcSubUviewUltraDemosNoNetworkNoNetwork";
  const _sfc_main$s = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$r,
    __filename: "src/sub/uview-ultra/demos/no-network/no-network.uvue",
    __name: "no-network",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosNoNetworkNoNetworkSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosNoNetworkNoNetworkSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_no_network = vue.resolveComponent("up-no-network");
        const n8 = vue.createSharedDataComponent(AppKu, "c3b097fe", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n7 = vue.createSharedDataComponent(LayoutComponent, "26cecc15", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-no-network 无网络"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "99ea9190", {
                  title: "up-no-network 无网络提示",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_no_network, "99ea756a");
                vue.setSharedData(__sharedData, 3, n5 == null ? void 0 : n5.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n7.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n8.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$s = {};
  const _style_1$s = {};
  const SrcSubUviewUltraDemosNoNetworkNoNetwork = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["styles", [_style_0$s, _style_1$s]]]);
  const __className$q = "GenSrcSubUviewUltraDemosCopyCopy";
  const _sfc_main$r = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$q,
    __filename: "src/sub/uview-ultra/demos/copy/copy.uvue",
    __name: "copy",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosCopyCopySharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosCopyCopySharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      function onCopySuccess() {
        uni.showToast({ title: "复制成功！", icon: "success" });
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_button = vue.resolveComponent("up-button");
        const _component_up_copy = vue.resolveComponent("up-copy");
        const n8 = vue.createSharedDataComponent(AppKu, "7048018b", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n7 = vue.createSharedDataComponent(LayoutComponent, "ce8fa06a", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-copy 文本复制"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "7e4dca28", {
                  title: "Copy 复制",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n3 = vue.createSharedDataComponentWithFallback(_component_up_copy, "7e4dd1cc", {
                  content: "uview-ultra is great !",
                  onSuccess: () => {
                    return onCopySuccess;
                  }
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n2 = vue.createSharedDataComponentWithFallback(_component_up_button, "7e4dd54d", {
                      type: "primary",
                      text: "点击复制文本",
                      size: "mini"
                    });
                    vue.setSharedData(__sharedData, 4, n2 == null ? void 0 : n2.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 3, n3 == null ? void 0 : n3.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n7.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n8.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$r = {};
  const _style_1$r = {};
  const SrcSubUviewUltraDemosCopyCopy = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["styles", [_style_0$r, _style_1$r]]]);
  const __className$p = "GenSrcSubUviewUltraDemosGridGrid";
  const _sfc_main$q = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$p,
    __filename: "src/sub/uview-ultra/demos/grid/grid.uvue",
    __name: "grid",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosGridGridSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosGridGridSharedData", sharedDataClassId: 0 })));
      const __sharedDataScope = vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_icon = vue.resolveComponent("up-icon");
        const _component_up_grid_item = vue.resolveComponent("up-grid-item");
        const _component_up_grid = vue.resolveComponent("up-grid");
        const n12 = vue.createSharedDataComponent(AppKu, "51abafa6", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n11 = vue.createSharedDataComponent(LayoutComponent, "0e1add69", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-grid 宫格"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "957e5f70", {
                  title: "Grid 宫格",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n7 = vue.createSharedDataComponentWithFallback(_component_up_grid, "957e516c", { border: true }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 4, vue.createSharedDataVFor(__sharedDataScope, () => {
                      return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$p}SharedData`, sharedDataClassId: 1 });
                    })), () => {
                      return 4;
                    }, (__sharedData_VFor0, _for_item0) => {
                      const n6 = vue.createSharedDataComponentWithFallback(_component_up_grid_item, "957e50a8-" + _for_item0.value, null, {
                        "default": vue.withSharedDataVaporCtx(() => {
                          const n4 = vue.createSharedDataComponentWithFallback(_component_up_icon, "957e4a5a-" + _for_item0.value, {
                            name: "photo",
                            size: 30
                          });
                          vue.setSharedData(__sharedData_VFor0, 2, n4 == null ? void 0 : n4.sharedData);
                        })
                      });
                      vue.setSharedData(__sharedData_VFor0, 1, n6 == null ? void 0 : n6.sharedData);
                      return n6;
                    }, (__sharedData_VFor0, i) => {
                      return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(i));
                    }, 6);
                  })
                });
                vue.setSharedData(__sharedData, 3, n7 == null ? void 0 : n7.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n11.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n12.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$q = {};
  const _style_1$q = {};
  const SrcSubUviewUltraDemosGridGrid = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["styles", [_style_0$q, _style_1$q]]]);
  const __className$o = "GenSrcSubUviewUltraDemosLineLine";
  const _sfc_main$p = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$o,
    __filename: "src/sub/uview-ultra/demos/line/line.uvue",
    __name: "line",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosLineLineSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosLineLineSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_line = vue.resolveComponent("up-line");
        const n21 = vue.createSharedDataComponent(AppKu, "aaed78ee", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n20 = vue.createSharedDataComponent(LayoutComponent, "b2c1a4e6", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-line 线条"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "2d4684a4", {
                  title: "Line 线条",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_line, "2d468ba6", {
                  color: "#2979ff",
                  length: "100%"
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_line, "2d469007", {
                  color: "#2979ff",
                  length: "100%",
                  dashed: ""
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_line, "2d469727", {
                  color: "#fa3534",
                  length: "50%"
                });
                vue.setSharedData(__sharedData, 5, n8 == null ? void 0 : n8.sharedData);
                const n10 = vue.createSharedDataComponentWithFallback(_component_up_line, "2d469acd", {
                  color: "#19be6b",
                  length: "80%"
                });
                vue.setSharedData(__sharedData, 6, n10 == null ? void 0 : n10.sharedData);
                const n14 = vue.createSharedDataComponentWithFallback(_component_up_line, "2d46a2c7", {
                  color: "#909399",
                  direction: "col",
                  length: "20px",
                  margin: "0 10px"
                });
                vue.setSharedData(__sharedData, 7, n14 == null ? void 0 : n14.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n20.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n21.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$p = {};
  const _style_1$p = {};
  const SrcSubUviewUltraDemosLineLine = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["styles", [_style_0$p, _style_1$p]]]);
  const __className$n = "GenSrcSubUviewUltraDemosAlbumAlbum";
  const _sfc_main$o = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$n,
    __filename: "src/sub/uview-ultra/demos/album/album.uvue",
    __name: "album",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosAlbumAlbumSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosAlbumAlbumSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const albumUrls = vue.ref([
        "https://cdn.uviewui.com/uview/album/1.jpg",
        "https://cdn.uviewui.com/uview/album/2.jpg",
        "https://cdn.uviewui.com/uview/album/3.jpg",
        "https://cdn.uviewui.com/uview/album/4.jpg",
        "https://cdn.uviewui.com/uview/album/5.jpg"
      ]);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_album = vue.resolveComponent("up-album");
        const n16 = vue.createSharedDataComponent(AppKu, "f685327e", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n15 = vue.createSharedDataComponent(LayoutComponent, "12ef7155", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-album 相册"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "4afeb9dd", {
                  title: "Album 相册",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_album, "4afec0e0", { urls: ["https://cdn.uviewui.com/uview/album/1.jpg", "https://cdn.uviewui.com/uview/album/2.jpg"] });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_album, "4afec8bd", { urls: ["https://cdn.uviewui.com/uview/album/1.jpg"] });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_album, "4afed009", {
                  urls: () => {
                    return albumUrls.value;
                  },
                  "max-count": "8",
                  "row-count": 4
                });
                vue.setSharedData(__sharedData, 5, n8 == null ? void 0 : n8.sharedData);
                const n11 = vue.createSharedDataComponentWithFallback(_component_up_album, "4afed74d", {
                  urls: () => {
                    return albumUrls.value;
                  },
                  radius: "8",
                  space: "10"
                });
                vue.setSharedData(__sharedData, 6, n11 == null ? void 0 : n11.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n15.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n16.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$o = {};
  const _style_1$o = {};
  const SrcSubUviewUltraDemosAlbumAlbum = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["styles", [_style_0$o, _style_1$o]]]);
  const __className$m = "GenSrcSubUviewUltraDemosGapGap";
  const _sfc_main$n = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$m,
    __filename: "src/sub/uview-ultra/demos/gap/gap.uvue",
    __name: "gap",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosGapGapSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosGapGapSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_gap = vue.resolveComponent("up-gap");
        const n19 = vue.createSharedDataComponent(AppKu, "2080e5a1", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n18 = vue.createSharedDataComponent(LayoutComponent, "20c86316", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-gap 间隔槽"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "03de00bc", {
                  title: "Gap 间隔槽",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_gap, "03de07be", {
                  height: "30",
                  "bg-color": "#f3f4f6"
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_gap, "03de0c21", {
                  height: "50",
                  "bg-color": "#f3f4f6"
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_gap, "03de1325", {
                  height: "30",
                  "bg-color": "#fa3534"
                });
                vue.setSharedData(__sharedData, 5, n8 == null ? void 0 : n8.sharedData);
                const n12 = vue.createSharedDataComponentWithFallback(_component_up_gap, "03de1ae2", {
                  height: "20",
                  "bg-color": "#f3f4f6",
                  "margin-top": "10",
                  "margin-bottom": "10"
                });
                vue.setSharedData(__sharedData, 6, n12 == null ? void 0 : n12.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n18.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n19.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$n = {};
  const _style_1$n = {};
  const SrcSubUviewUltraDemosGapGap = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["styles", [_style_0$n, _style_1$n]]]);
  const __className$l = "GenSrcSubUviewUltraDemosStickySticky";
  const _sfc_main$m = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$l,
    __filename: "src/sub/uview-ultra/demos/sticky/sticky.uvue",
    __name: "sticky",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosStickyStickySharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosStickyStickySharedData", sharedDataClassId: 0 })));
      const __sharedDataScope = vue.useSharedDataScope(__sharedData);
      const scrollTop = vue.ref(0);
      const windowHeight = vue.ref(uni.getWindowInfo().windowHeight);
      const navHeight = vue.computed(() => {
        var _a, _b, _c, _d;
        const top = (_d = (_b = (_a = safeAreaInsets.value) === null || _a === void 0 ? null : _a.top) !== null && _b !== void 0 ? _b : (_c = systemInfo.value) === null || _c === void 0 ? null : _c.statusBarHeight) !== null && _d !== void 0 ? _d : 0;
        return top + 44;
      });
      function handleScroll(e) {
        scrollTop.value = e.detail.scrollTop;
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_button = vue.resolveComponent("up-button");
        const _component_up_sticky = vue.resolveComponent("up-sticky");
        const n18 = vue.createSharedDataComponent(AppKu, "631e8033", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n17 = vue.createSharedDataComponent(LayoutComponent, "00b18623", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-sticky 吸顶"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedDataStyle(__sharedData, 7, { height: `${windowHeight.value}px` });
                });
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "157f3f0e", {
                  title: "Sticky 吸顶",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n9 = vue.createSharedDataComponentWithFallback(_component_up_sticky, "157f58d9", {
                  "offset-top": 0,
                  "custom-nav-height": () => {
                    return navHeight.value;
                  },
                  "scroll-top": () => {
                    return scrollTop.value;
                  }
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n7 = vue.createSharedDataComponentWithFallback(_component_up_button, "cb2ef700", {
                      size: "small",
                      type: "warning",
                      text: "立即体验",
                      class: "w-90px"
                    });
                    vue.setSharedData(__sharedData, 4, n7 == null ? void 0 : n7.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 3, n9 == null ? void 0 : n9.sharedData);
                vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 5, vue.createSharedDataVFor(__sharedDataScope, () => {
                  return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$l}SharedData`, sharedDataClassId: 1 });
                })), () => {
                  return 25;
                }, (__sharedData_VFor0, _for_item0) => {
                  vue.renderSharedDataEffect(() => {
                    return vue.setSharedData(__sharedData_VFor0, 1, vue.toDisplayString(_for_item0.value));
                  });
                  return null;
                }, (__sharedData_VFor0, i) => {
                  return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(i));
                }, 4);
                vue.setSharedDataEvent(__sharedData, 6, handleScroll);
              })
            });
            vue.setSharedData(__sharedData, 1, n17.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n18.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$m = {};
  const _style_1$m = {};
  const SrcSubUviewUltraDemosStickySticky = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["styles", [_style_0$m, _style_1$m]]]);
  const __className$k = "GenSrcSubUviewUltraDemosKeyboardKeyboard";
  const _sfc_main$l = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$k,
    __filename: "src/sub/uview-ultra/demos/keyboard/keyboard.uvue",
    __name: "keyboard",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosKeyboardKeyboardSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosKeyboardKeyboardSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const showNumber = vue.ref(false);
      const valNumber = vue.ref("");
      function onNumberChange(val) {
        valNumber.value += val;
      }
      function onNumberBackspace() {
        if (valNumber.value.length > 0) {
          valNumber.value = valNumber.value.substring(0, valNumber.value.length - 1);
        }
      }
      const showCard = vue.ref(false);
      const valCard = vue.ref("");
      function onCardChange(val) {
        valCard.value += val;
      }
      function onCardBackspace() {
        if (valCard.value.length > 0) {
          valCard.value = valCard.value.substring(0, valCard.value.length - 1);
        }
      }
      const showCar = vue.ref(false);
      const valCar = vue.ref("");
      function onCarChange(val) {
        valCar.value += val;
      }
      function onCarBackspace() {
        if (valCar.value.length > 0) {
          valCar.value = valCar.value.substring(0, valCar.value.length - 1);
        }
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_keyboard = vue.resolveComponent("up-keyboard");
        const n19 = vue.createSharedDataComponent(AppKu, "319014ef", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n18 = vue.createSharedDataComponent(LayoutComponent, "007288e7", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-keyboard 键盘"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "0dde948e", {
                  title: "Keyboard 键盘",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                vue.setSharedDataEvent(__sharedData, 6, () => {
                  return showNumber.value = true;
                });
                vue.renderSharedDataEffect(() => {
                  const _valNumber = valNumber.value;
                  vue.setSharedDataClass(__sharedData, 9, _valNumber ? "mock-input-text" : "mock-input-placeholder");
                  vue.setSharedData(__sharedData, 10, vue.toDisplayString(_valNumber || "请点击输入数字"));
                });
                const _on_close = () => {
                  return showNumber.value = false;
                };
                const _on_cancel = () => {
                  return showNumber.value = false;
                };
                const _on_confirm = () => {
                  return showNumber.value = false;
                };
                const n4 = vue.createSharedDataComponentWithFallback(_component_up_keyboard, "0ddea3c8", {
                  mode: "number",
                  show: () => {
                    return showNumber.value;
                  },
                  onChange: () => {
                    return onNumberChange;
                  },
                  onBackspace: () => {
                    return onNumberBackspace;
                  },
                  onClose: () => {
                    return _on_close;
                  },
                  onCancel: () => {
                    return _on_cancel;
                  },
                  onConfirm: () => {
                    return _on_confirm;
                  }
                });
                vue.setSharedData(__sharedData, 3, n4 == null ? void 0 : n4.sharedData);
                vue.setSharedDataEvent(__sharedData, 7, () => {
                  return showCard.value = true;
                });
                vue.renderSharedDataEffect(() => {
                  const _valCard = valCard.value;
                  vue.setSharedDataClass(__sharedData, 11, _valCard ? "mock-input-text" : "mock-input-placeholder");
                  vue.setSharedData(__sharedData, 12, vue.toDisplayString(_valCard || "请点击输入身份证"));
                });
                const _on_close1 = () => {
                  return showCard.value = false;
                };
                const _on_cancel1 = () => {
                  return showCard.value = false;
                };
                const _on_confirm1 = () => {
                  return showCard.value = false;
                };
                const n9 = vue.createSharedDataComponentWithFallback(_component_up_keyboard, "a4183238", {
                  mode: "card",
                  show: () => {
                    return showCard.value;
                  },
                  onChange: () => {
                    return onCardChange;
                  },
                  onBackspace: () => {
                    return onCardBackspace;
                  },
                  onClose: () => {
                    return _on_close1;
                  },
                  onCancel: () => {
                    return _on_cancel1;
                  },
                  onConfirm: () => {
                    return _on_confirm1;
                  }
                });
                vue.setSharedData(__sharedData, 4, n9 == null ? void 0 : n9.sharedData);
                vue.setSharedDataEvent(__sharedData, 8, () => {
                  return showCar.value = true;
                });
                vue.renderSharedDataEffect(() => {
                  const _valCar = valCar.value;
                  vue.setSharedDataClass(__sharedData, 13, _valCar ? "mock-input-text" : "mock-input-placeholder");
                  vue.setSharedData(__sharedData, 14, vue.toDisplayString(_valCar || "请点击输入车牌号"));
                });
                const _on_close2 = () => {
                  return showCar.value = false;
                };
                const _on_cancel2 = () => {
                  return showCar.value = false;
                };
                const _on_confirm2 = () => {
                  return showCar.value = false;
                };
                const n14 = vue.createSharedDataComponentWithFallback(_component_up_keyboard, "a41805a6", {
                  mode: "car",
                  show: () => {
                    return showCar.value;
                  },
                  onChange: () => {
                    return onCarChange;
                  },
                  onBackspace: () => {
                    return onCarBackspace;
                  },
                  onClose: () => {
                    return _on_close2;
                  },
                  onCancel: () => {
                    return _on_cancel2;
                  },
                  onConfirm: () => {
                    return _on_confirm2;
                  }
                });
                vue.setSharedData(__sharedData, 5, n14 == null ? void 0 : n14.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n18.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n19.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$l = {};
  const _style_1$l = {};
  const SrcSubUviewUltraDemosKeyboardKeyboard = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["styles", [_style_0$l, _style_1$l]]]);
  const __className$j = "GenSrcSubUviewUltraDemosDropdownDropdown";
  const _sfc_main$k = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$j,
    __filename: "src/sub/uview-ultra/demos/dropdown/dropdown.uvue",
    __name: "dropdown",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosDropdownDropdownSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosDropdownDropdownSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const value1 = vue.ref(1);
      const value2 = vue.ref(2);
      const value3 = vue.ref(1);
      const value4 = vue.ref(2);
      const options1 = vue.ref([
        new UTSJSONObject({ label: "默认", value: 1 }),
        new UTSJSONObject({ label: "最新", value: 2 }),
        new UTSJSONObject({ label: "最热", value: 3 })
      ]);
      const options2 = vue.ref([
        new UTSJSONObject({ label: "默认排序", value: 1 }),
        new UTSJSONObject({ label: "距离优先", value: 2 }),
        new UTSJSONObject({ label: "价格优先", value: 3 })
      ]);
      const options3 = vue.ref([
        new UTSJSONObject({ label: "全部", value: 1 }),
        new UTSJSONObject({ label: "中餐", value: 2 }),
        new UTSJSONObject({ label: "西餐", value: 3 })
      ]);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_dropdown_item = vue.resolveComponent("up-dropdown-item");
        const _component_up_dropdown = vue.resolveComponent("up-dropdown");
        const n14 = vue.createSharedDataComponent(AppKu, "2060b37a", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n13 = vue.createSharedDataComponent(LayoutComponent, "0a252213", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-dropdown 下拉菜单"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "3a7f20f9", {
                  title: "Dropdown 下拉菜单",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n4 = vue.createSharedDataComponentWithFallback(_component_up_dropdown, "3a7f2801", null, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n2 = vue.createSharedDataComponentWithFallback(_component_up_dropdown_item, "3a7f2843", {
                      modelValue: () => {
                        return value1.value;
                      },
                      "onUpdate:modelValue": () => {
                        return (_value) => {
                          return value1.value = _value;
                        };
                      },
                      title: "属性",
                      options: () => {
                        return options1.value;
                      }
                    });
                    vue.setSharedData(__sharedData, 4, n2 == null ? void 0 : n2.sharedData);
                    const n3 = vue.createSharedDataComponentWithFallback(_component_up_dropdown_item, "3a7f2c00", {
                      modelValue: () => {
                        return value2.value;
                      },
                      "onUpdate:modelValue": () => {
                        return (_value) => {
                          return value2.value = _value;
                        };
                      },
                      title: "排序",
                      options: () => {
                        return options2.value;
                      }
                    });
                    vue.setSharedData(__sharedData, 5, n3 == null ? void 0 : n3.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 3, n4 == null ? void 0 : n4.sharedData);
                const n9 = vue.createSharedDataComponentWithFallback(_component_up_dropdown, "3a7f33bf", { "active-color": "#fa3534" }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n7 = vue.createSharedDataComponentWithFallback(_component_up_dropdown_item, "3a7f36cd", {
                      modelValue: () => {
                        return value3.value;
                      },
                      "onUpdate:modelValue": () => {
                        return (_value) => {
                          return value3.value = _value;
                        };
                      },
                      title: "排序",
                      options: () => {
                        return options2.value;
                      }
                    });
                    vue.setSharedData(__sharedData, 7, n7 == null ? void 0 : n7.sharedData);
                    const n8 = vue.createSharedDataComponentWithFallback(_component_up_dropdown_item, "3a7f3a8a", {
                      modelValue: () => {
                        return value4.value;
                      },
                      "onUpdate:modelValue": () => {
                        return (_value) => {
                          return value4.value = _value;
                        };
                      },
                      title: "筛选",
                      options: () => {
                        return options3.value;
                      }
                    });
                    vue.setSharedData(__sharedData, 8, n8 == null ? void 0 : n8.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 6, n9 == null ? void 0 : n9.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n13.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n14.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$k = {};
  const _style_1$k = {};
  const SrcSubUviewUltraDemosDropdownDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["styles", [_style_0$k, _style_1$k]]]);
  const __className$i = "GenSrcSubUviewUltraDemosSwipeActionSwipeAction";
  const _sfc_main$j = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$i,
    __filename: "src/sub/uview-ultra/demos/swipe-action/swipe-action.uvue",
    __name: "swipe-action",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosSwipeActionSwipeActionSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosSwipeActionSwipeActionSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const options1 = vue.ref([
        new UTSJSONObject({
          text: "删除",
          style: new UTSJSONObject({
            backgroundColor: "#f56c6c"
          })
        })
      ]);
      const options2 = vue.ref([
        new UTSJSONObject({
          text: "置顶",
          style: new UTSJSONObject({
            backgroundColor: "#2979ff"
          })
        }),
        new UTSJSONObject({
          text: "删除",
          style: new UTSJSONObject({
            backgroundColor: "#f56c6c"
          })
        })
      ]);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_swipe_action_item = vue.resolveComponent("up-swipe-action-item");
        const _component_up_swipe_action = vue.resolveComponent("up-swipe-action");
        const n14 = vue.createSharedDataComponent(AppKu, "a989d93e", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n13 = vue.createSharedDataComponent(LayoutComponent, "87b14e96", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-swipe-action 滑动操作"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "6e7882ca", {
                  title: "SwipeAction 滑动操作",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n4 = vue.createSharedDataComponentWithFallback(_component_up_swipe_action, "6e7874b4", null, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n3 = vue.createSharedDataComponentWithFallback(_component_up_swipe_action_item, "6e7873fe", { options: () => {
                      return options1.value;
                    } }, {
                      "default": () => {
                      }
                    });
                    vue.setSharedData(__sharedData, 4, n3 == null ? void 0 : n3.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 3, n4 == null ? void 0 : n4.sharedData);
                const n9 = vue.createSharedDataComponentWithFallback(_component_up_swipe_action, "6e785d00", null, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n8 = vue.createSharedDataComponentWithFallback(_component_up_swipe_action_item, "6e785734", { options: () => {
                      return options2.value;
                    } }, {
                      "default": () => {
                      }
                    });
                    vue.setSharedData(__sharedData, 6, n8 == null ? void 0 : n8.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 5, n9 == null ? void 0 : n9.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n13.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n14.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$j = {};
  const _style_1$j = {};
  const SrcSubUviewUltraDemosSwipeActionSwipeAction = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["styles", [_style_0$j, _style_1$j]]]);
  const __className$h = "GenSrcSubUviewUltraDemosLineProgressLineProgress";
  const _sfc_main$i = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$h,
    __filename: "src/sub/uview-ultra/demos/line-progress/line-progress.uvue",
    __name: "line-progress",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosLineProgressLineProgressSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosLineProgressLineProgressSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_line_progress = vue.resolveComponent("up-line-progress");
        const n7 = vue.createSharedDataComponent(AppKu, "014b5a23", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n6 = vue.createSharedDataComponent(LayoutComponent, "281fea33", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-line-progress 线型进度条"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "48454642", {
                  title: "LineProgress 线型进度条",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_line_progress, "484537fe", {
                  percentage: 50,
                  "active-color": "#2979ff"
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n6.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n7.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$i = {};
  const _style_1$i = {};
  const SrcSubUviewUltraDemosLineProgressLineProgress = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["styles", [_style_0$i, _style_1$i]]]);
  const __className$g = "GenSrcSubUviewUltraDemosCountDownCountDown";
  const _sfc_main$h = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$g,
    __filename: "src/sub/uview-ultra/demos/count-down/count-down.uvue",
    __name: "count-down",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosCountDownCountDownSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosCountDownCountDownSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_count_down = vue.resolveComponent("up-count-down");
        const n10 = vue.createSharedDataComponent(AppKu, "685ac6fe", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n9 = vue.createSharedDataComponent(LayoutComponent, "a2fe18d6", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-count-down 倒计时"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "219d7fb8", {
                  title: "CountDown 倒计时",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_count_down, "219d86c0", {
                  time: () => {
                    return 30 * 60 * 60 * 1e3;
                  },
                  format: "HH:mm:ss"
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_count_down, "219d8e0a", {
                  time: () => {
                    return 30 * 60 * 60 * 1e3;
                  },
                  format: "DD天HH时mm分ss秒"
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n9.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n10.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$h = {};
  const _style_1$h = {};
  const SrcSubUviewUltraDemosCountDownCountDown = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["styles", [_style_0$h, _style_1$h]]]);
  const __className$f = "GenSrcSubUviewUltraDemosCountToCountTo";
  const _sfc_main$g = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$f,
    __filename: "src/sub/uview-ultra/demos/count-to/count-to.uvue",
    __name: "count-to",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosCountToCountToSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosCountToCountToSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_count_to = vue.resolveComponent("up-count-to");
        const n10 = vue.createSharedDataComponent(AppKu, "549b2a21", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n9 = vue.createSharedDataComponent(LayoutComponent, "3eca19f5", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-count-to 数字滚动"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "cb0db552", {
                  title: "CountTo 数字滚动",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_count_to, "cb0da744", {
                  "end-val": 1e3,
                  color: "#2979ff",
                  "font-size": 30
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_count_to, "cb0d98ac", {
                  "end-val": 1234.56,
                  decimals: 2,
                  separator: ",",
                  color: "#fa3534",
                  "font-size": 24
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n9.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n10.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$g = {};
  const _style_1$g = {};
  const SrcSubUviewUltraDemosCountToCountTo = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["styles", [_style_0$g, _style_1$g]]]);
  const __className$e = "GenSrcSubUviewUltraDemosNavbarNavbar";
  const _sfc_main$f = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$e,
    __filename: "src/sub/uview-ultra/demos/navbar/navbar.uvue",
    __name: "navbar",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosNavbarNavbarSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosNavbarNavbarSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_navbar = vue.resolveComponent("up-navbar");
        const _component_up_icon = vue.resolveComponent("up-icon");
        const n15 = vue.createSharedDataComponent(AppKu, "c3d9607e", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n14 = vue.createSharedDataComponent(LayoutComponent, "2456a855", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-navbar 导航栏"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "667e62df", {
                  title: "Navbar 导航栏",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_navbar, "667e6da7", {
                  title: "自定义标题",
                  "safe-area-inset-top": false,
                  fixed: false,
                  "left-text": "返回",
                  "bg-color": "#f8fafc"
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n9 = vue.createSharedDataComponentWithFallback(_component_up_navbar, "667e797d", {
                  "safe-area-inset-top": false,
                  fixed: false,
                  "left-text": "返回",
                  "right-text": "设置",
                  "bg-color": "#f8fafc"
                }, {
                  "center": vue.withSharedDataVaporCtx(() => {
                    const n6 = vue.createSharedDataComponentWithFallback(_component_up_icon, "694de212", {
                      name: "search",
                      size: "14",
                      color: "#909399"
                    });
                    vue.setSharedData(__sharedData, 5, n6 == null ? void 0 : n6.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 4, n9 == null ? void 0 : n9.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n14.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n15.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$f = {};
  const _style_1$f = {};
  const SrcSubUviewUltraDemosNavbarNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["styles", [_style_0$f, _style_1$f]]]);
  const __className$d = "GenSrcSubUviewUltraDemosTabbarTabbar";
  const _sfc_main$e = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$d,
    __filename: "src/sub/uview-ultra/demos/tabbar/tabbar.uvue",
    __name: "tabbar",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosTabbarTabbarSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosTabbarTabbarSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const value1 = vue.ref(0);
      const value2 = vue.ref(0);
      const value3 = vue.ref(0);
      function change1(index = null) {
        value1.value = parseInt(index.toString());
      }
      function change2(index = null) {
        value2.value = parseInt(index.toString());
      }
      function change3(index = null) {
        value3.value = parseInt(index.toString());
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_tabbar_item = vue.resolveComponent("up-tabbar-item");
        const _component_up_tabbar = vue.resolveComponent("up-tabbar");
        const n23 = vue.createSharedDataComponent(AppKu, "c6e98246", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n22 = vue.createSharedDataComponent(LayoutComponent, "1646c68e", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-tabbar 底部导航"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "b2920a08", {
                  title: "Tabbar 底部导航",
                  "auto-back": true,
                  "safe-area-inset-top": true,
                  "bg-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n6 = vue.createSharedDataComponentWithFallback(_component_up_tabbar, "b291facc", {
                  value: () => {
                    return value1.value;
                  },
                  fixed: false,
                  "safe-area-inset-bottom": false,
                  onChange: () => {
                    return change1;
                  }
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n2 = vue.createSharedDataComponentWithFallback(_component_up_tabbar_item, "b291f344", {
                      text: "首页",
                      icon: "home"
                    });
                    vue.setSharedData(__sharedData, 4, n2 == null ? void 0 : n2.sharedData);
                    const n3 = vue.createSharedDataComponentWithFallback(_component_up_tabbar_item, "b291ec84", {
                      text: "放映厅",
                      icon: "photo"
                    });
                    vue.setSharedData(__sharedData, 5, n3 == null ? void 0 : n3.sharedData);
                    const n4 = vue.createSharedDataComponentWithFallback(_component_up_tabbar_item, "b291e5c0", {
                      text: "直播",
                      icon: "play-right"
                    });
                    vue.setSharedData(__sharedData, 6, n4 == null ? void 0 : n4.sharedData);
                    const n5 = vue.createSharedDataComponentWithFallback(_component_up_tabbar_item, "b291e40a", {
                      text: "我的",
                      icon: "account"
                    });
                    vue.setSharedData(__sharedData, 7, n5 == null ? void 0 : n5.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 3, n6 == null ? void 0 : n6.sharedData);
                const n12 = vue.createSharedDataComponentWithFallback(_component_up_tabbar, "b291d540", {
                  value: () => {
                    return value2.value;
                  },
                  fixed: false,
                  "safe-area-inset-bottom": false,
                  onChange: () => {
                    return change2;
                  }
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n9 = vue.createSharedDataComponentWithFallback(_component_up_tabbar_item, "b291cdb8", {
                      text: "首页",
                      icon: "home",
                      badge: "5"
                    });
                    vue.setSharedData(__sharedData, 9, n9 == null ? void 0 : n9.sharedData);
                    const n10 = vue.createSharedDataComponentWithFallback(_component_up_tabbar_item, "30284a34", {
                      text: "消息",
                      icon: "chat",
                      dot: true
                    });
                    vue.setSharedData(__sharedData, 10, n10 == null ? void 0 : n10.sharedData);
                    const n11 = vue.createSharedDataComponentWithFallback(_component_up_tabbar_item, "30284db5", {
                      text: "我的",
                      icon: "account"
                    });
                    vue.setSharedData(__sharedData, 11, n11 == null ? void 0 : n11.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 8, n12 == null ? void 0 : n12.sharedData);
                const n18 = vue.createSharedDataComponentWithFallback(_component_up_tabbar, "30285517", {
                  value: () => {
                    return value3.value;
                  },
                  fixed: false,
                  "safe-area-inset-bottom": false,
                  "active-color": "#fa3534",
                  "inactive-color": "#909399",
                  onChange: () => {
                    return change3;
                  }
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n15 = vue.createSharedDataComponentWithFallback(_component_up_tabbar_item, "30285974", {
                      text: "发现",
                      icon: "search"
                    });
                    vue.setSharedData(__sharedData, 13, n15 == null ? void 0 : n15.sharedData);
                    const n16 = vue.createSharedDataComponentWithFallback(_component_up_tabbar_item, "30285cd6", {
                      text: "购物车",
                      icon: "shopping-cart"
                    });
                    vue.setSharedData(__sharedData, 14, n16 == null ? void 0 : n16.sharedData);
                    const n17 = vue.createSharedDataComponentWithFallback(_component_up_tabbar_item, "30286040", {
                      text: "我的",
                      icon: "account"
                    });
                    vue.setSharedData(__sharedData, 15, n17 == null ? void 0 : n17.sharedData);
                  })
                });
                vue.setSharedData(__sharedData, 12, n18 == null ? void 0 : n18.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n22.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n23.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$e = {};
  const _style_1$e = {};
  const SrcSubUviewUltraDemosTabbarTabbar = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["styles", [_style_0$e, _style_1$e]]]);
  const __className$c = "GenSrcSubUviewUltraDemosTabsTabs";
  const _sfc_main$d = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$c,
    __filename: "src/sub/uview-ultra/demos/tabs/tabs.uvue",
    __name: "tabs",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosTabsTabsSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosTabsTabsSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_tabs = vue.resolveComponent("up-tabs");
        const n10 = vue.createSharedDataComponent(AppKu, "84297ec6", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n9 = vue.createSharedDataComponent(LayoutComponent, "01065a0e", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-tabs 标签页"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "1fc4e68e", {
                  title: "Tabs 标签页",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_tabs, "1fc4d888", { list: [{ name: "关注" }, { name: "推荐" }, { name: "科技" }] });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_tabs, "1fc4c9f8", {
                  list: [{ name: "关注" }, { name: "推荐" }, { name: "科技" }],
                  "line-color": "#fa3534",
                  "active-style": () => {
                    return { color: "#fa3534" };
                  }
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n9.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n10.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$d = {};
  const _style_1$d = {};
  const SrcSubUviewUltraDemosTabsTabs = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["styles", [_style_0$d, _style_1$d]]]);
  const __className$b = "GenSrcSubUviewUltraDemosSubsectionSubsection";
  const _sfc_main$c = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$b,
    __filename: "src/sub/uview-ultra/demos/subsection/subsection.uvue",
    __name: "subsection",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosSubsectionSubsectionSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosSubsectionSubsectionSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_subsection = vue.resolveComponent("up-subsection");
        const n7 = vue.createSharedDataComponent(AppKu, "5d6b202b", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n6 = vue.createSharedDataComponent(LayoutComponent, "4ff8e52b", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-subsection 分段器"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "a1b87e3c", {
                  title: "Subsection 分段器",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_subsection, "a1b8702a", {
                  list: ["待付款", "待发货", "待收货"],
                  current: 1
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n6.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n7.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$c = {};
  const _style_1$c = {};
  const SrcSubUviewUltraDemosSubsectionSubsection = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["styles", [_style_0$c, _style_1$c]]]);
  const __className$a = "GenSrcSubUviewUltraDemosIndexListIndexList";
  const _sfc_main$b = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$a,
    __filename: "src/sub/uview-ultra/demos/index-list/index-list.uvue",
    __name: "index-list",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosIndexListIndexListSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosIndexListIndexListSharedData", sharedDataClassId: 0 })));
      const __sharedDataScope = vue.useSharedDataScope(__sharedData);
      const indexList = vue.ref(["A", "B", "C", "D", "F", "G", "H", "J", "L", "M", "N", "Q", "R", "S", "T", "W", "X", "Y", "Z"]);
      const itemArr = vue.ref([
        ["阿卡丽", "阿木木", "阿里"],
        ["白起", "百里守约", "百里玄策", "扁鹊"],
        ["曹操", "成吉思汗", "程咬金"],
        ["妲己", "大乔", "狄仁杰", "貂蝉", "达摩"],
        ["范海辛", "飞天"],
        ["高渐离", "公孙离", "关羽", "宫本武藏", "干将莫邪"],
        ["韩信", "后羿", "花木兰", "黄忠"],
        ["姜子牙", "橘右京"],
        ["兰陵王", "老夫子", "李白", "李元芳", "刘邦", "刘备", "刘禅", "吕布", "露娜", "鲁班七号"],
        ["马可波罗", "梦奇", "明世隐", "墨子", "芈月"],
        ["哪吒", "娜可露露", "牛魔", "女娲"],
        ["奇迹暖暖", "青雉"],
        ["任逍遥", "瑞文"],
        ["孙膑", "孙尚香", "孙悟空", "苏烈", "沈梦溪"],
        ["太乙真人", "提莫"],
        ["王昭君", "武则天", "项羽"],
        ["夏侯惇", "项羽", "小乔"],
        ["雅典娜", "亚瑟", "杨戬", "杨玉环", "瑶", "虞姬", "嬴政", "元歌"],
        ["张飞", "张良", "赵云", "甄姬", "钟馗", "钟无艳", "周瑜", "庄周", "诸葛亮", "猪八戒"]
      ]);
      const windowHeight = vue.ref(uni.getWindowInfo().windowHeight);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_index_anchor = vue.resolveComponent("up-index-anchor");
        const _component_up_index_item = vue.resolveComponent("up-index-item");
        const _component_up_index_list = vue.resolveComponent("up-index-list");
        const n13 = vue.createSharedDataComponent(AppKu, "1e43093e", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n12 = vue.createSharedDataComponent(LayoutComponent, "2af0f0b5", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-index-list 索引列表"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedDataStyle(__sharedData, 5, { height: `${windowHeight.value}px` });
                });
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "332d2962", {
                  title: "IndexList 索引列表",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n9 = vue.createSharedDataComponentWithFallback(_component_up_index_list, "332d2d42", {
                  style: "flex: 1",
                  "index-list": () => {
                    return indexList.value;
                  }
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 4, vue.createSharedDataVFor(__sharedDataScope, () => {
                      return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$a}SharedData`, sharedDataClassId: 1 });
                    })), () => {
                      return itemArr.value;
                    }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                      const n8 = vue.createSharedDataComponentWithFallback(_component_up_index_item, "332d3161-" + _for_key0.value, null, {
                        "default": vue.withSharedDataVaporCtx(() => {
                          const n3 = vue.createSharedDataComponentWithFallback(_component_up_index_anchor, "332d31bc-" + _for_key0.value, { text: () => {
                            return indexList.value[_for_key0.value];
                          } });
                          vue.setSharedData(__sharedData_VFor0, 2, n3 == null ? void 0 : n3.sharedData);
                          vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData_VFor0, 3, vue.createSharedDataVFor(__sharedDataScope, () => {
                            return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$a}SharedData`, sharedDataClassId: 2 });
                          })), () => {
                            return _for_item0.value;
                          }, (__sharedData_VFor1, _for_item1, _for_key1) => {
                            vue.renderSharedDataEffect(() => {
                              return vue.setSharedData(__sharedData_VFor1, 1, vue.toDisplayString(_for_item1.value));
                            });
                            return null;
                          }, (__sharedData_VFor1, cell, cellIndex) => {
                            return vue.setSharedData(__sharedData_VFor1, 0, vue.toDisplayString(cellIndex));
                          }, 32);
                        })
                      });
                      vue.setSharedData(__sharedData_VFor0, 1, n8 == null ? void 0 : n8.sharedData);
                      return n8;
                    }, (__sharedData_VFor0, item, index) => {
                      return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(index));
                    }, 34);
                  })
                });
                vue.setSharedData(__sharedData, 3, n9 == null ? void 0 : n9.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n12.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n13.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$b = {};
  const _style_1$b = {};
  const SrcSubUviewUltraDemosIndexListIndexList = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["styles", [_style_0$b, _style_1$b]]]);
  const __className$9 = "GenSrcSubUviewUltraDemosNavbarMiniNavbarMini";
  const _sfc_main$a = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$9,
    __filename: "src/sub/uview-ultra/demos/navbar-mini/navbar-mini.uvue",
    __name: "navbar-mini",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosNavbarMiniNavbarMiniSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosNavbarMiniNavbarMiniSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_navbar_mini = vue.resolveComponent("up-navbar-mini");
        const n16 = vue.createSharedDataComponent(AppKu, "c5065722", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n15 = vue.createSharedDataComponent(LayoutComponent, "121db967", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-navbar-mini 迷你导航栏"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "31997429", {
                  title: "Navbar Mini 迷你导航栏",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_navbar_mini, "31997e73", {
                  "safe-area-inset-top": false,
                  fixed: false,
                  "bg-color": "#3c9cff",
                  "icon-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n6 = vue.createSharedDataComponentWithFallback(_component_up_navbar_mini, "31998711", {
                  "safe-area-inset-top": false,
                  fixed: false,
                  "left-icon": "arrow-left",
                  "bg-color": "#e2e8f0",
                  "icon-color": "#334155",
                  "home-url": "/pages/index/index"
                });
                vue.setSharedData(__sharedData, 4, n6 == null ? void 0 : n6.sharedData);
                const n10 = vue.createSharedDataComponentWithFallback(_component_up_navbar_mini, "0194f325", {
                  "safe-area-inset-top": false,
                  fixed: false,
                  "bg-color": "#fa3534",
                  "icon-color": "#ffffff"
                });
                vue.setSharedData(__sharedData, 5, n10 == null ? void 0 : n10.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n15.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n16.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$a = {};
  const _style_1$a = {};
  const SrcSubUviewUltraDemosNavbarMiniNavbarMini = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["styles", [_style_0$a, _style_1$a]]]);
  const __className$8 = "GenSrcSubUviewUltraDemosQrcodeQrcode";
  const _sfc_main$9 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$8,
    __filename: "src/sub/uview-ultra/demos/qrcode/qrcode.uvue",
    __name: "qrcode",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosQrcodeQrcodeSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosQrcodeQrcodeSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_qrcode = vue.resolveComponent("up-qrcode");
        const n13 = vue.createSharedDataComponent(AppKu, "086a593d", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n12 = vue.createSharedDataComponent(LayoutComponent, "04e0ce59", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-qrcode 二维码"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "d18e054a", {
                  title: "Qrcode 二维码",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_qrcode, "d18df682", {
                  size: "200",
                  val: "https://uview-ultra.lingyun.net"
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_qrcode, "d18de710", {
                  size: "200",
                  background: "#f3f4f6",
                  foreground: "#2979ff",
                  val: "https://uview-ultra.lingyun.net"
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_qrcode, "d18dd1b4", {
                  size: "200",
                  icon: "https://uview-ultra.lingyun.net/common/logo.png",
                  "icon-size": "40",
                  val: "https://uview-ultra.lingyun.net"
                });
                vue.setSharedData(__sharedData, 5, n8 == null ? void 0 : n8.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n12.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n13.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$9 = {};
  const _style_1$9 = {};
  const SrcSubUviewUltraDemosQrcodeQrcode = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["styles", [_style_0$9, _style_1$9]]]);
  const __className$7 = "GenSrcSubUviewUltraDemosLazyLoadLazyLoad";
  const _sfc_main$8 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$7,
    __filename: "src/sub/uview-ultra/demos/lazy-load/lazy-load.uvue",
    __name: "lazy-load",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosLazyLoadLazyLoadSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosLazyLoadLazyLoadSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_lazy_load = vue.resolveComponent("up-lazy-load");
        const n20 = vue.createSharedDataComponent(AppKu, "40ca44d6", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n19 = vue.createSharedDataComponent(LayoutComponent, "13c0d501", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-lazy-load 懒加载"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "6459cbcb", {
                  title: "Lazy Load 懒加载",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_lazy_load, "6459d371", { image: "https://cdn.uviewui.com/uview/swiper/1.jpg" });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n6 = vue.createSharedDataComponentWithFallback(_component_up_lazy_load, "6459de58", {
                  image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
                  "is-effect": true,
                  duration: "300"
                });
                vue.setSharedData(__sharedData, 4, n6 == null ? void 0 : n6.sharedData);
                const n10 = vue.createSharedDataComponentWithFallback(_component_up_lazy_load, "6459e9fb", {
                  image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
                  "border-radius": "20",
                  height: "150",
                  width: "200"
                });
                vue.setSharedData(__sharedData, 5, n10 == null ? void 0 : n10.sharedData);
                const n14 = vue.createSharedDataComponentWithFallback(_component_up_lazy_load, "26df9b03", {
                  image: "https://error.url/not-found.jpg",
                  "error-img": "https://cdn.uviewui.com/uview/empty/error.png"
                });
                vue.setSharedData(__sharedData, 6, n14 == null ? void 0 : n14.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n19.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n20.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$8 = {};
  const _style_1$8 = {};
  const SrcSubUviewUltraDemosLazyLoadLazyLoad = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["styles", [_style_0$8, _style_1$8]]]);
  const __className$6 = "GenSrcSubUviewUltraDemosLoadmoreLoadmore";
  const _sfc_main$7 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$6,
    __filename: "src/sub/uview-ultra/demos/loadmore/loadmore.uvue",
    __name: "loadmore",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosLoadmoreLoadmoreSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosLoadmoreLoadmoreSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_loadmore = vue.resolveComponent("up-loadmore");
        const n19 = vue.createSharedDataComponent(AppKu, "1fb86cd2", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n18 = vue.createSharedDataComponent(LayoutComponent, "1455693f", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-loadmore 加载更多"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "7657bf4d", {
                  title: "Loadmore 加载更多",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_loadmore, "7657c655", { status: "loadmore" });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_loadmore, "7657cab3", {
                  status: "loading",
                  "loading-text": "正在奋力加载中..."
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_loadmore, "7657d1f6", {
                  status: "nomore",
                  "nomore-text": "我是有底线的"
                });
                vue.setSharedData(__sharedData, 5, n8 == null ? void 0 : n8.sharedData);
                const n11 = vue.createSharedDataComponentWithFallback(_component_up_loadmore, "7657d91d", {
                  status: "nomore",
                  line: true
                });
                vue.setSharedData(__sharedData, 6, n11 == null ? void 0 : n11.sharedData);
                const n14 = vue.createSharedDataComponentWithFallback(_component_up_loadmore, "54a00c9d", {
                  status: "loading",
                  "loading-icon": "spinner",
                  color: "#fa3534",
                  "icon-color": "#fa3534"
                });
                vue.setSharedData(__sharedData, 7, n14 == null ? void 0 : n14.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n18.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n19.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$7 = {};
  const _style_1$7 = {};
  const SrcSubUviewUltraDemosLoadmoreLoadmore = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["styles", [_style_0$7, _style_1$7]]]);
  const __className$5 = "GenSrcSubUviewUltraDemosWaterfallWaterfall";
  const _sfc_main$6 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$5,
    __filename: "src/sub/uview-ultra/demos/waterfall/waterfall.uvue",
    __name: "waterfall",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosWaterfallWaterfallSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosWaterfallWaterfallSharedData", sharedDataClassId: 0 })));
      const __sharedDataScope = vue.useSharedDataScope(__sharedData);
      const list = vue.ref([
        new UTSJSONObject({ title: "uview-ultra 核心UI组件", desc: "轻量级UI框架", price: 129, imgHeight: "80px" }),
        new UTSJSONObject({ title: "高性能 UniAppX 跨端套件", desc: "支持原生Android/iOS", price: 299, imgHeight: "160px" }),
        new UTSJSONObject({ title: "智能瀑布流弹性排版", desc: "自动适配列高", price: 89, imgHeight: "110px" }),
        new UTSJSONObject({ title: "极速渲染流畅体验", desc: "零延迟丝滑滚动", price: 199, imgHeight: "200px" }),
        new UTSJSONObject({ title: "炫彩主题切换系统", desc: "一键换肤体验", price: 49, imgHeight: "90px" }),
        new UTSJSONObject({ title: "全套内置工程级图标库", desc: "上百款高清矢量图标", price: 159, imgHeight: "140px" }),
        new UTSJSONObject({ title: "响应式页面布局容器", desc: "完美适配屏幕", price: 79, imgHeight: "180px" }),
        new UTSJSONObject({ title: "开箱即用多端示例", desc: "快速构建产品原型", price: 99, imgHeight: "120px" })
      ]);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_waterfall = vue.resolveComponent("up-waterfall");
        const n16 = vue.createSharedDataComponent(AppKu, "678edda1", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n15 = vue.createSharedDataComponent(LayoutComponent, "eb665316", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-waterfall 瀑布流"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "81640e52", {
                  title: "Waterfall 瀑布流",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n11 = vue.createSharedDataComponentWithFallback(_component_up_waterfall, "81640036", {
                  modelValue: () => {
                    return list.value;
                  },
                  "onUpdate:modelValue": () => {
                    return (_value) => {
                      return list.value = _value;
                    };
                  },
                  columns: 2
                }, {
                  "column": vue.createSharedDataScopedSlot(vue.createSharedDataVSlot(__sharedDataScope, () => {
                    return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$5}SharedData`, sharedDataClassId: 2 });
                  }), (_slotProps0, __sharedData_VSlot0) => {
                    vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData_VSlot0, 0, vue.createSharedDataVFor(__sharedDataScope, () => {
                      return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$5}SharedData`, sharedDataClassId: 1 });
                    })), () => {
                      return _slotProps0.colList;
                    }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                      vue.renderSharedDataEffect(() => {
                        vue.setSharedDataStyle(__sharedData_VFor0, 1, { width: "100%", height: _for_item0.value.getString("imgHeight") ?? "100px", borderRadius: "6px", backgroundColor: "#ffffff" });
                        vue.setSharedData(__sharedData_VFor0, 2, vue.toDisplayString(_for_item0.value.getString("title")));
                        vue.setSharedData(__sharedData_VFor0, 3, vue.toDisplayString(_for_item0.value.getString("desc")));
                        vue.setSharedData(__sharedData_VFor0, 4, vue.toDisplayString(_for_item0.value.getNumber("price")));
                      });
                      return null;
                    }, (__sharedData_VFor0, item, idx) => {
                      return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(idx));
                    }, 32);
                  })
                });
                vue.setSharedData(__sharedData, 3, n11 == null ? void 0 : n11.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n15.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n16.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$6 = {};
  const _style_1$6 = {};
  const SrcSubUviewUltraDemosWaterfallWaterfall = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["styles", [_style_0$6, _style_1$6]]]);
  const __className$4 = "GenSrcSubUviewUltraDemosCodeCode";
  const _sfc_main$5 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$4,
    __filename: "src/sub/uview-ultra/demos/code/code.uvue",
    __name: "code",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosCodeCodeSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosCodeCodeSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const uCodeRef = vue.ref(null);
      const tips = vue.ref("获取验证码");
      function codeChange(text) {
        tips.value = text;
      }
      function getCode() {
        if (uCodeRef.value != null) {
          const codeObj = uCodeRef.value;
          const canGet = codeObj.$callMethod("canGetCode");
          if (canGet == true) {
            uni.showLoading(new UTSJSONObject({ title: "正在获取验证码" }));
            setTimeout(() => {
              uni.hideLoading();
              uni.showToast({ title: "验证码已发送", icon: "success" });
              codeObj.$callMethod("start");
            }, 1e3);
          } else {
            uni.showToast({ title: "倒计时中，请稍后再试", icon: "none" });
          }
        }
      }
      return () => {
        "raw js";
        const _setTemplateRef = vue.createSharedDataTemplateRefSetter();
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_code = vue.resolveComponent("up-code");
        const _component_up_button = vue.resolveComponent("up-button");
        const n9 = vue.createSharedDataComponent(AppKu, "6fb7867b", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n8 = vue.createSharedDataComponent(LayoutComponent, "f18d6e4a", {
              "navigation-style": "custom",
              "navigation-bar-title-text": "up-code 验证码倒计时"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "5fefd31a", {
                  title: "Code 验证码倒计时",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_code, "5fefdd85", {
                  seconds: "60",
                  onChange: () => {
                    return codeChange;
                  }
                });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                _setTemplateRef(n2, uCodeRef, null, "uCodeRef");
                const n3 = vue.createSharedDataComponentWithFallback(_component_up_button, "5fefde7c", {
                  text: () => {
                    return tips.value;
                  },
                  type: "primary",
                  size: "small",
                  onClick: () => {
                    return getCode;
                  }
                });
                vue.setSharedData(__sharedData, 4, n3 == null ? void 0 : n3.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n8.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n9.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$5 = {};
  const _style_1$5 = {};
  const SrcSubUviewUltraDemosCodeCode = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["styles", [_style_0$5, _style_1$5]]]);
  const __className$3 = "GenSrcSubUviewUltraDemosParseParse";
  const _sfc_main$4 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$3,
    __filename: "src/sub/uview-ultra/demos/parse/parse.uvue",
    __name: "parse",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosParseParseSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosParseParseSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const content1 = vue.ref(`<p>欢迎使用 uview-ultra 富文本解析组件，这里是一段很长的描述文字，用来测试换行和基础排版能力。</p><img src='https://cdn.uviewui.com/uview/swiper/2.jpg' />`);
      const content2 = vue.ref(`<p>这段文本可以长按被选中和复制，因为开启了 selectable 属性。您可以尝试长按我试试。</p>`);
      const content3 = vue.ref(`<h3>这是一级标题</h3><p>这段文字使用了 tagStyle 设置特定的样式，比如颜色和字号，还有加粗效果。</p>`);
      const tagStyle = vue.ref(new UTSJSONObject({
        p: "color: #606266; font-size: 14px; line-height: 1.8;",
        h3: "color: #2979ff; font-weight: bold; margin-bottom: 10px;"
      }));
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_parse = vue.resolveComponent("up-parse");
        const n13 = vue.createSharedDataComponent(AppKu, "76efd141", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n12 = vue.createSharedDataComponent(LayoutComponent, "670a56d5", {
              "navigation-bar-title-text": "Parse 富文本解析",
              "navigation-style": "custom"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "7a40845d", {
                  title: "Parse 富文本解析",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_parse, "7a408b63", { content: () => {
                  return content1.value;
                } });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_parse, "7a408fe1", {
                  content: () => {
                    return content2.value;
                  },
                  selectable: true
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
                const n8 = vue.createSharedDataComponentWithFallback(_component_up_parse, "7a409725", {
                  content: () => {
                    return content3.value;
                  },
                  "tag-style": () => {
                    return tagStyle.value;
                  }
                });
                vue.setSharedData(__sharedData, 5, n8 == null ? void 0 : n8.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n12.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n13.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$4 = {};
  const _style_1$4 = {};
  const SrcSubUviewUltraDemosParseParse = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["styles", [_style_0$4, _style_1$4]]]);
  const __className$2 = "GenSrcSubUviewUltraDemosBackTopBackTop";
  const _sfc_main$3 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$2,
    __filename: "src/sub/uview-ultra/demos/back-top/back-top.uvue",
    __name: "back-top",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosBackTopBackTopSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosBackTopBackTopSharedData", sharedDataClassId: 0 })));
      const __sharedDataScope = vue.useSharedDataScope(__sharedData);
      const currentScrollTop = vue.ref(0);
      const scrollTop = vue.ref(0);
      const windowHeight = vue.ref(uni.getWindowInfo().windowHeight);
      function handleScroll(e) {
        currentScrollTop.value = e.detail.scrollTop;
        scrollTop.value = e.detail.scrollTop;
      }
      function scrollToTop() {
        scrollTop.value = 0;
        currentScrollTop.value = 0;
      }
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_back_top = vue.resolveComponent("up-back-top");
        const n16 = vue.createSharedDataComponent(AppKu, "e6fcc4be", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n15 = vue.createSharedDataComponent(LayoutComponent, "03b21675", {
              "navigation-bar-title-text": "Back Top 返回顶部",
              "navigation-style": "custom"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedDataStyle(__sharedData, 6, { height: `${windowHeight.value}px` });
                });
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "7290bbc0", {
                  title: "Back Top 返回顶部",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                vue.renderSharedDataEffect(() => {
                  vue.setSharedDataAttr(__sharedData, 7, vue.toSharedDataNumber(scrollTop.value));
                  vue.setSharedData(__sharedData, 8, vue.toDisplayString(currentScrollTop.value));
                });
                vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 4, vue.createSharedDataVFor(__sharedDataScope, () => {
                  return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className$2}SharedData`, sharedDataClassId: 1 });
                })), () => {
                  return 20;
                }, (__sharedData_VFor0, _for_item0) => {
                  vue.renderSharedDataEffect(() => {
                    return vue.setSharedData(__sharedData_VFor0, 1, vue.toDisplayString(_for_item0.value));
                  });
                  return null;
                }, (__sharedData_VFor0, i) => {
                  return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(i));
                }, 4);
                vue.setSharedDataEvent(__sharedData, 5, handleScroll);
                const n13 = vue.createSharedDataComponentWithFallback(_component_up_back_top, "40f360d2", {
                  "scroll-top": () => {
                    return currentScrollTop.value;
                  },
                  top: 100,
                  bottom: 80,
                  right: 20,
                  onClick: () => {
                    return scrollToTop;
                  }
                });
                vue.setSharedData(__sharedData, 3, n13 == null ? void 0 : n13.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n15.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n16.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$3 = {};
  const _style_1$3 = {};
  const SrcSubUviewUltraDemosBackTopBackTop = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["styles", [_style_0$3, _style_1$3]]]);
  const __className$1 = "GenSrcSubUviewUltraDemosMpHtmlMpHtml";
  const _sfc_main$2 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1,
    __filename: "src/sub/uview-ultra/demos/mp-html/mp-html.uvue",
    __name: "mp-html",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosMpHtmlMpHtmlSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosMpHtmlMpHtmlSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const content1 = vue.ref(`
  <h2>mp-html 跨端富文本组件</h2>
  <p>这是一个专门为 <b>uni-app X</b> 打造的高性能原生 HTML 解析器组件，支持多种 HTML 5 常见标签与样式。</p>
  <hr />
  <p>支持 <i>斜体</i>、<b>加粗</b>、<u>下划线</u> 以及 <span style="color: #e11d48; font-weight: bold;">自定义颜色文本</span>。</p>
`);
      const contentTable = vue.ref(`
  <table border="1">
    <tr>
      <th>组件名称</th>
      <th>类型</th>
      <th>平台支持</th>
    </tr>
    <tr>
      <td>mp-html</td>
      <td>富文本</td>
      <td>全端 (Android / iOS / H5)</td>
    </tr>
    <tr>
      <td>up-waterfall</td>
      <td>瀑布流</td>
      <td>全端支持</td>
    </tr>
  </table>
`);
      const contentList = vue.ref(`
  <p><b>框架核心优势：</b></p>
  <ul>
    <li>原生 Kotlin / Swift 高效渲染</li>
    <li>无缝嵌入 UniAppX 架构</li>
    <li>自动适配屏幕尺寸</li>
  </ul>
  <p><b>部署步骤：</b></p>
  <ol>
    <li>导入 mp-html 插件</li>
    <li>配置 uni_modules 节点</li>
    <li>直接使用 &lt;mp-html :content="html" /&gt;</li>
  </ol>
`);
      const contentCode = vue.ref(`
  <p>示例代码：</p>
  <pre><code>const html = '&lt;h1&gt;Hello UniAppX&lt;/h1&gt;'
const node = parse(html)</code></pre>
`);
      const contentMedia = vue.ref(`
  <p>访问官方链接：<a href="https://uniapp.dcloud.net.cn/">DCloud 官方文档</a></p>
  <p>示例图片展示：</p>
  <img src="/static/logo.png" style="width: 120px; height: 120px;" />
`);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_mp_html = vue.resolveComponent("mp-html");
        const n24 = vue.createSharedDataComponent(AppKu, "2a02d9fd", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n23 = vue.createSharedDataComponent(LayoutComponent, "16586599", {
              "navigation-bar-title-text": "mp-html 富文本组件",
              "navigation-style": "custom"
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "969763ca", {
                  title: "mp-html 富文本组件",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_mp_html, "96974efa", { content: () => {
                  return content1.value;
                } });
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n6 = vue.createSharedDataComponentWithFallback(_component_mp_html, "96973f3e", { content: () => {
                  return contentTable.value;
                } });
                vue.setSharedData(__sharedData, 4, n6 == null ? void 0 : n6.sharedData);
                const n10 = vue.createSharedDataComponentWithFallback(_component_mp_html, "96972f80", { content: () => {
                  return contentList.value;
                } });
                vue.setSharedData(__sharedData, 5, n10 == null ? void 0 : n10.sharedData);
                const n14 = vue.createSharedDataComponentWithFallback(_component_mp_html, "3c554928", { content: () => {
                  return contentCode.value;
                } });
                vue.setSharedData(__sharedData, 6, n14 == null ? void 0 : n14.sharedData);
                const n18 = vue.createSharedDataComponentWithFallback(_component_mp_html, "3c55348a", { content: () => {
                  return contentMedia.value;
                } });
                vue.setSharedData(__sharedData, 7, n18 == null ? void 0 : n18.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n23.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n24.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$2 = {};
  const _style_1$2 = {};
  const SrcSubUviewUltraDemosMpHtmlMpHtml = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["styles", [_style_0$2, _style_1$2]]]);
  const __className = "GenSrcSubUviewUltraDemosCircleProgressCircleProgress";
  const _sfc_main$1 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className,
    __filename: "src/sub/uview-ultra/demos/circle-progress/circle-progress.uvue",
    __name: "circle-progress",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosCircleProgressCircleProgressSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosCircleProgressCircleProgressSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const _component_NavBar = vue.resolveComponent("NavBar");
        const _component_up_circle_progress = vue.resolveComponent("up-circle-progress");
        const n16 = vue.createSharedDataComponent(AppKu, "27c596ca", null, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n15 = vue.createSharedDataComponent(LayoutComponent, "d0ed428a", null, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_NavBar, "59a2785c", {
                  title: "CircleProgress 圆形进度条",
                  "auto-back": true
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                const n2 = vue.createSharedDataComponentWithFallback(_component_up_circle_progress, "59a27cf5");
                vue.setSharedData(__sharedData, 3, n2 == null ? void 0 : n2.sharedData);
                const n5 = vue.createSharedDataComponentWithFallback(_component_up_circle_progress, "59a2845f", {
                  percentage: "30",
                  "active-color": "#19be6b"
                });
                vue.setSharedData(__sharedData, 4, n5 == null ? void 0 : n5.sharedData);
                const n7 = vue.createSharedDataComponentWithFallback(_component_up_circle_progress, "59a2887d", {
                  percentage: "60",
                  "active-color": "#ffaa33",
                  "inactive-color": "#f3f4f6"
                });
                vue.setSharedData(__sharedData, 5, n7 == null ? void 0 : n7.sharedData);
                const n11 = vue.createSharedDataComponentWithFallback(_component_up_circle_progress, "59a292ff", {
                  percentage: "80",
                  "active-color": "#2979ff",
                  width: "100"
                });
                vue.setSharedData(__sharedData, 6, n11 == null ? void 0 : n11.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n15.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n16.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1 = {};
  const _style_1$1 = {};
  const SrcSubUviewUltraDemosCircleProgressCircleProgress = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["styles", [_style_0$1, _style_1$1]]]);
  __definePage("src/pages/index/index", SrcPagesIndexIndex);
  __definePage("src/pages/me/me", SrcPagesMeMe);
  __definePage("src/pages/basic/basic", SrcPagesBasicBasic);
  __definePage("src/pages/function/function", SrcPagesFunctionFunction);
  __definePage("src/pages/ai/ai", SrcPagesAiAi);
  __definePage("src/sub/auth/login", SrcSubAuthLogin);
  __definePage("src/sub/auth/register", SrcSubAuthRegister);
  __definePage("src/sub/test/test", SrcSubTestTest);
  __definePage("src/sub/paging/paging", SrcSubPagingPaging);
  __definePage("src/sub/uview-ultra/uview-ultra", SrcSubUviewUltraUviewUltra);
  __definePage("src/sub/uiTest/uiTest", SrcSubUiTestUiTest);
  __definePage("src/sub/uview-ultra/demos/icon/icon", SrcSubUviewUltraDemosIconIcon);
  __definePage("src/sub/uview-ultra/demos/text/text", SrcSubUviewUltraDemosTextText);
  __definePage("src/sub/uview-ultra/demos/link/link", SrcSubUviewUltraDemosLinkLink);
  __definePage("src/sub/uview-ultra/demos/empty/empty", SrcSubUviewUltraDemosEmptyEmpty);
  __definePage("src/sub/uview-ultra/demos/divider/divider", SrcSubUviewUltraDemosDividerDivider);
  __definePage("src/sub/uview-ultra/demos/loading-icon/loading-icon", SrcSubUviewUltraDemosLoadingIconLoadingIcon);
  __definePage("src/sub/uview-ultra/demos/skeleton/skeleton", SrcSubUviewUltraDemosSkeletonSkeleton);
  __definePage("src/sub/uview-ultra/demos/card/card", SrcSubUviewUltraDemosCardCard);
  __definePage("src/sub/uview-ultra/demos/list/list", SrcSubUviewUltraDemosListList);
  __definePage("src/sub/uview-ultra/demos/swiper/swiper", SrcSubUviewUltraDemosSwiperSwiper);
  __definePage("src/sub/uview-ultra/demos/image/image", SrcSubUviewUltraDemosImageImage);
  __definePage("src/sub/uview-ultra/demos/transition/transition", SrcSubUviewUltraDemosTransitionTransition);
  __definePage("src/sub/uview-ultra/demos/steps/steps", SrcSubUviewUltraDemosStepsSteps);
  __definePage("src/sub/uview-ultra/demos/table/table", SrcSubUviewUltraDemosTableTable);
  __definePage("src/sub/uview-ultra/demos/form/form", SrcSubUviewUltraDemosFormForm);
  __definePage("src/sub/uview-ultra/demos/pagination/pagination", SrcSubUviewUltraDemosPaginationPagination);
  __definePage("src/sub/uview-ultra/demos/code-input/code-input", SrcSubUviewUltraDemosCodeInputCodeInput);
  __definePage("src/sub/uview-ultra/demos/button/button", SrcSubUviewUltraDemosButtonButton);
  __definePage("src/sub/uview-ultra/demos/input/input", SrcSubUviewUltraDemosInputInput);
  __definePage("src/sub/uview-ultra/demos/checkbox/checkbox", SrcSubUviewUltraDemosCheckboxCheckbox);
  __definePage("src/sub/uview-ultra/demos/tag/tag", SrcSubUviewUltraDemosTagTag);
  __definePage("src/sub/uview-ultra/demos/radio/radio", SrcSubUviewUltraDemosRadioRadio);
  __definePage("src/sub/uview-ultra/demos/switch/switch", SrcSubUviewUltraDemosSwitchSwitch);
  __definePage("src/sub/uview-ultra/demos/rate/rate", SrcSubUviewUltraDemosRateRate);
  __definePage("src/sub/uview-ultra/demos/number-box/number-box", SrcSubUviewUltraDemosNumberBoxNumberBox);
  __definePage("src/sub/uview-ultra/demos/slider/slider", SrcSubUviewUltraDemosSliderSlider);
  __definePage("src/sub/uview-ultra/demos/textarea/textarea", SrcSubUviewUltraDemosTextareaTextarea);
  __definePage("src/sub/uview-ultra/demos/upload/upload", SrcSubUviewUltraDemosUploadUpload);
  __definePage("src/sub/uview-ultra/demos/calendar/calendar", SrcSubUviewUltraDemosCalendarCalendar);
  __definePage("src/sub/uview-ultra/demos/picker/picker", SrcSubUviewUltraDemosPickerPicker);
  __definePage("src/sub/uview-ultra/demos/datetime-picker/datetime-picker", SrcSubUviewUltraDemosDatetimePickerDatetimePicker);
  __definePage("src/sub/uview-ultra/demos/action-sheet/action-sheet", SrcSubUviewUltraDemosActionSheetActionSheet);
  __definePage("src/sub/uview-ultra/demos/badge/badge", SrcSubUviewUltraDemosBadgeBadge);
  __definePage("src/sub/uview-ultra/demos/avatar/avatar", SrcSubUviewUltraDemosAvatarAvatar);
  __definePage("src/sub/uview-ultra/demos/search/search", SrcSubUviewUltraDemosSearchSearch);
  __definePage("src/sub/uview-ultra/demos/alert/alert", SrcSubUviewUltraDemosAlertAlert);
  __definePage("src/sub/uview-ultra/demos/notice-bar/notice-bar", SrcSubUviewUltraDemosNoticeBarNoticeBar);
  __definePage("src/sub/uview-ultra/demos/collapse/collapse", SrcSubUviewUltraDemosCollapseCollapse);
  __definePage("src/sub/uview-ultra/demos/toast/toast", SrcSubUviewUltraDemosToastToast);
  __definePage("src/sub/uview-ultra/demos/notify/notify", SrcSubUviewUltraDemosNotifyNotify);
  __definePage("src/sub/uview-ultra/demos/loading-page/loading-page", SrcSubUviewUltraDemosLoadingPageLoadingPage);
  __definePage("src/sub/uview-ultra/demos/overlay/overlay", SrcSubUviewUltraDemosOverlayOverlay);
  __definePage("src/sub/uview-ultra/demos/modal/modal", SrcSubUviewUltraDemosModalModal);
  __definePage("src/sub/uview-ultra/demos/popup/popup", SrcSubUviewUltraDemosPopupPopup);
  __definePage("src/sub/uview-ultra/demos/tooltip/tooltip", SrcSubUviewUltraDemosTooltipTooltip);
  __definePage("src/sub/uview-ultra/demos/no-network/no-network", SrcSubUviewUltraDemosNoNetworkNoNetwork);
  __definePage("src/sub/uview-ultra/demos/copy/copy", SrcSubUviewUltraDemosCopyCopy);
  __definePage("src/sub/uview-ultra/demos/grid/grid", SrcSubUviewUltraDemosGridGrid);
  __definePage("src/sub/uview-ultra/demos/line/line", SrcSubUviewUltraDemosLineLine);
  __definePage("src/sub/uview-ultra/demos/album/album", SrcSubUviewUltraDemosAlbumAlbum);
  __definePage("src/sub/uview-ultra/demos/gap/gap", SrcSubUviewUltraDemosGapGap);
  __definePage("src/sub/uview-ultra/demos/sticky/sticky", SrcSubUviewUltraDemosStickySticky);
  __definePage("src/sub/uview-ultra/demos/keyboard/keyboard", SrcSubUviewUltraDemosKeyboardKeyboard);
  __definePage("src/sub/uview-ultra/demos/dropdown/dropdown", SrcSubUviewUltraDemosDropdownDropdown);
  __definePage("src/sub/uview-ultra/demos/swipe-action/swipe-action", SrcSubUviewUltraDemosSwipeActionSwipeAction);
  __definePage("src/sub/uview-ultra/demos/line-progress/line-progress", SrcSubUviewUltraDemosLineProgressLineProgress);
  __definePage("src/sub/uview-ultra/demos/count-down/count-down", SrcSubUviewUltraDemosCountDownCountDown);
  __definePage("src/sub/uview-ultra/demos/count-to/count-to", SrcSubUviewUltraDemosCountToCountTo);
  __definePage("src/sub/uview-ultra/demos/navbar/navbar", SrcSubUviewUltraDemosNavbarNavbar);
  __definePage("src/sub/uview-ultra/demos/tabbar/tabbar", SrcSubUviewUltraDemosTabbarTabbar);
  __definePage("src/sub/uview-ultra/demos/tabs/tabs", SrcSubUviewUltraDemosTabsTabs);
  __definePage("src/sub/uview-ultra/demos/subsection/subsection", SrcSubUviewUltraDemosSubsectionSubsection);
  __definePage("src/sub/uview-ultra/demos/index-list/index-list", SrcSubUviewUltraDemosIndexListIndexList);
  __definePage("src/sub/uview-ultra/demos/navbar-mini/navbar-mini", SrcSubUviewUltraDemosNavbarMiniNavbarMini);
  __definePage("src/sub/uview-ultra/demos/qrcode/qrcode", SrcSubUviewUltraDemosQrcodeQrcode);
  __definePage("src/sub/uview-ultra/demos/lazy-load/lazy-load", SrcSubUviewUltraDemosLazyLoadLazyLoad);
  __definePage("src/sub/uview-ultra/demos/loadmore/loadmore", SrcSubUviewUltraDemosLoadmoreLoadmore);
  __definePage("src/sub/uview-ultra/demos/waterfall/waterfall", SrcSubUviewUltraDemosWaterfallWaterfall);
  __definePage("src/sub/uview-ultra/demos/code/code", SrcSubUviewUltraDemosCodeCode);
  __definePage("src/sub/uview-ultra/demos/parse/parse", SrcSubUviewUltraDemosParseParse);
  __definePage("src/sub/uview-ultra/demos/back-top/back-top", SrcSubUviewUltraDemosBackTopBackTop);
  __definePage("src/sub/uview-ultra/demos/mp-html/mp-html", SrcSubUviewUltraDemosMpHtmlMpHtml);
  __definePage("src/sub/uview-ultra/demos/circle-progress/circle-progress", SrcSubUviewUltraDemosCircleProgressCircleProgress);
  class UrlObj extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            path: { type: String, optional: false },
            query: { type: "Unknown", optional: false }
          };
        }
      };
    }
    constructor(options, metadata = UrlObj.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.path = this.__props__.path;
      this.query = this.__props__.query;
      delete this.__props__;
    }
  }
  function parseUrlToObj(url) {
    var _a;
    const parts = url.split("?");
    const path = parts[0];
    const query = /* @__PURE__ */ new Map();
    if (parts.length > 1) {
      const queryStr = parts[1];
      const pairs = queryStr.split("&");
      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split("=");
        if (pair.length > 1) {
          const key = pair[0];
          let value = pair[1];
          if (value.indexOf("%") >= 0) {
            value = (_a = decodeURIComponent(value)) !== null && _a !== void 0 ? _a : "";
          }
          query.set(key, value);
        } else if (pair.length > 0) {
          query.set(pair[0], "");
        }
      }
    }
    return new UrlObj({ path, query });
  }
  function judgeIsExcludePath(path) {
    let normalizedPath = path;
    if (normalizedPath.startsWith("src/")) {
      normalizedPath = "/" + normalizedPath;
    }
    return EXCLUDE_LOGIN_PATH_LIST.indexOf(normalizedPath) >= 0;
  }
  function doIntercept(url) {
    uni.__log__("log", "at src/router/interceptor.uts:72", "doIntercept url:", url);
    if (url == null || url == "") {
      return true;
    }
    const urlObj = parseUrlToObj(url);
    let path = urlObj.path;
    const query = urlObj.query;
    if (path.startsWith("src/")) {
      path = "/" + path;
    }
    if (!path.startsWith("/") && !path.startsWith("plugin://") && !path.startsWith("http://") && !path.startsWith("https://")) {
      const pages = getCurrentPages();
      let currentPath = "";
      if (pages.length > 0) {
        currentPath = pages[pages.length - 1].route;
      }
      let normalizedCurrentPath = currentPath;
      if (normalizedCurrentPath.startsWith("src/")) {
        normalizedCurrentPath = "/" + normalizedCurrentPath;
      }
      if (!normalizedCurrentPath.startsWith("/")) {
        normalizedCurrentPath = "/" + normalizedCurrentPath;
      }
      const lastSlashIdx = normalizedCurrentPath.lastIndexOf("/");
      let baseDir = "";
      if (lastSlashIdx >= 0) {
        baseDir = normalizedCurrentPath.substring(0, lastSlashIdx);
      }
      path = `${baseDir}/${path}`;
    }
    if (path.startsWith("src/")) {
      path = "/" + path;
    }
    uni.__log__("log", "at src/router/interceptor.uts:113", "doIntercept normalized path:", path);
    const tokenStore = useTokenStore();
    const hasLogin = tokenStore.hasValidLogin();
    uni.__log__("log", "at src/router/interceptor.uts:118", "doIntercept login status - hasLogin:", hasLogin);
    if (hasLogin) {
      if (path !== LOGIN_PAGE) {
        return true;
      } else {
        const redirect = UTS.mapGet(query, "redirect");
        const redirectUrl_1 = redirect != null && redirect != "" ? redirect : "/src/pages/index/index";
        if (isPageTabbar(redirectUrl_1)) {
          setCurIdxByPath(redirectUrl_1);
          uni.switchTab({ url: redirectUrl_1 });
        } else {
          uni.navigateTo({ url: redirectUrl_1 });
        }
        return false;
      }
    }
    let fullPath = path;
    if (query.size > 0) {
      const paramsList = [];
      query.forEach((val, key) => {
        paramsList.push(`${key}=${val}`);
      });
      fullPath += `?${paramsList.join("&")}`;
    }
    const redirectUrl = `${LOGIN_PAGE}?redirect=${encodeURIComponent(fullPath)}`;
    if (isNeedLoginMode) {
      if (judgeIsExcludePath(path)) {
        return true;
      } else {
        if (path === LOGIN_PAGE) {
          return true;
        }
        uni.__log__("log", "at src/router/interceptor.uts:158", "doIntercept: redirecting to login page", redirectUrl);
        uni.navigateTo({ url: redirectUrl });
        return false;
      }
    } else {
      if (judgeIsExcludePath(path)) {
        uni.__log__("log", "at src/router/interceptor.uts:166", "doIntercept: blacklisted path, redirecting to login page", redirectUrl);
        uni.navigateTo({ url: redirectUrl });
        return false;
      }
      return true;
    }
  }
  const navigateToInterceptor = new UTSJSONObject({
    invoke: function(options = null) {
      let url = "";
      if (options != null) {
        const opt = options;
        url = opt.url;
      }
      return doIntercept(url);
    }
  });
  const redirectToInterceptor = new UTSJSONObject({
    invoke: function(options = null) {
      let url = "";
      if (options != null) {
        const opt = options;
        url = opt.url;
      }
      return doIntercept(url);
    }
  });
  const reLaunchInterceptor = new UTSJSONObject({
    invoke: function(options = null) {
      let url = "";
      if (options != null) {
        const opt = options;
        url = opt.url;
      }
      return doIntercept(url);
    }
  });
  const switchTabInterceptor = new UTSJSONObject(
    {
      invoke: function(options = null) {
        let url = "";
        if (options != null) {
          const opt = options;
          url = opt.url;
        }
        return doIntercept(url);
      }
    }
    /**
     * 地图选点调用拦截器（默认直接放行）
     */
  );
  const chooseLocationInterceptor = new UTSJSONObject(
    {
      invoke: function(options = null) {
        return true;
      }
    }
    /**
     * 全局路由拦截安装器
     */
  );
  const installRouteInterceptor = () => {
    uni.addInterceptor("navigateTo", navigateToInterceptor);
    uni.addInterceptor("reLaunch", reLaunchInterceptor);
    uni.addInterceptor("redirectTo", redirectToInterceptor);
    uni.addInterceptor("switchTab", switchTabInterceptor);
    uni.addInterceptor("chooseLocation", chooseLocationInterceptor);
  };
  function number(value = null) {
    let str = value.toString();
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(str);
  }
  function empty(value = null) {
    switch (typeof value) {
      case "undefined":
        return true;
      case "string":
        return value == "";
      case "boolean":
        return value == false;
      case "number":
        return value == 0;
      case "object":
        if (Array.isArray(value) && value.length == 0) {
          return true;
        }
        return false;
    }
    return false;
  }
  function array(value = null) {
    if (value == null) {
      return false;
    }
    if ("object" == typeof value) {
      return UTS.isInstanceOf(value, Array);
    } else {
      return false;
    }
  }
  new UTSJSONObject({
    // email: email,
    // mobile: mobile,
    // url: url,
    // date: date,
    // dateISO: dateISO,
    // number: number,
    // digits,
    // idCard,
    // carNo,
    // amount,
    // chinese,
    // letter,
    // enOrNum,
    // contains,
    // // range,
    // // rangeLength,
    // empty,
    // isEmpty: empty,
    // // jsonString,
    // landline,
    // object,
    // array: array
    // code,
    // func,
    // promise,
    // video,
    // image,
    // // regExp,
    // string
  });
  let _boundaryCheckingState = true;
  function strip(num = null, precision = 15) {
    return +parseFloat(num.toPrecision(precision));
  }
  function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    let tmp = eSplit[0].split(".")[1];
    if (tmp != "") {
      tmp = "";
    }
    let tmp2 = eSplit[1];
    let tmp2Number = 0;
    if (tmp2 != "") {
      tmp2Number = parseInt(tmp2);
    }
    const len = tmp.length - +tmp2Number;
    return len > 0 ? len : 0;
  }
  function float2Fixed(num) {
    if (num.toString().indexOf("e") == -1) {
      return parseInt(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(num * Math.pow(10, dLen)) : num;
  }
  function checkBoundary(num) {
    if (_boundaryCheckingState) {
      if (num > Number.MAX_VALUE || num < Number.MIN_VALUE) {
        uni.__log__("warn", "at uni_modules/uview-ultra/libs/function/digit.uts:55", `${num} 超出了精度限制，结果可能不正确`);
      }
    }
  }
  function iteratorOperation(arr, operation) {
    const _a = __read(arr), num1 = _a[0], num2 = _a[1], others = _a.slice(2);
    let res = operation(num1, num2);
    others.forEach((num) => {
      res = operation(res, num);
    });
    return res;
  }
  function times(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, times);
    }
    const _a = __read(nums, 2), num1 = _a[0], num2 = _a[1];
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
  }
  function plus(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, plus);
    }
    const _a = __read(nums, 2), num1 = _a[0], num2 = _a[1];
    const baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
    return (times(num1, baseNum) + times(num2, baseNum)) / baseNum;
  }
  function minus(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, minus);
    }
    const _a = __read(nums, 2), num1 = _a[0], num2 = _a[1];
    const baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
    return (times(num1, baseNum) - times(num2, baseNum)) / baseNum;
  }
  function divide(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, divide);
    }
    const _a = __read(nums, 2), num1 = _a[0], num2 = _a[1];
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
  }
  function round(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result != 0) {
      result = times(result, -1);
    }
    return result;
  }
  function enableBoundaryChecking(flag = true) {
    _boundaryCheckingState = flag;
  }
  new UTSJSONObject({
    times,
    plus,
    minus,
    divide,
    round,
    enableBoundaryChecking
  });
  const config = new UTSJSONObject({
    v: "4",
    version: "4",
    // 主题名称
    type: [
      "primary",
      "success",
      "info",
      "error",
      "warning"
    ],
    // 颜色部分，本来可以通过scss的:export导出供js使用，但是奈何nvue不支持
    color: new UTSJSONObject({
      "up-primary": "#2979ff",
      "up-warning": "#ff9900",
      "up-success": "#19be6b",
      "up-error": "#fa3534",
      "up-info": "#909399",
      "up-main-color": "#303133",
      "up-content-color": "#606266",
      "up-tips-color": "#909399",
      "up-light-color": "#c0c4cc"
    }),
    // 默认单位，可以通过配置为rpx，那么在用于传入组件大小参数为数值时，就默认为rpx
    unit: "px"
  });
  function upGetRect(selector, all = false, comp = null) {
    return new Promise((resolve) => {
      try {
        const query = uni.createSelectorQuery();
        const queryIn = comp != null ? query.in(comp) : query;
        if (all == true) {
          queryIn.selectAll(selector).boundingClientRect((res = null) => {
            if (res != null && Array.isArray(res)) {
              const arr = res;
              resolve(arr.length > 0 ? arr[0] : {});
            } else if (res != null) {
              resolve(res);
            } else {
              resolve({});
            }
          }).exec();
        } else {
          queryIn.select(selector).boundingClientRect((res = null) => {
            if (res != null && Array.isArray(res)) {
              const arr = res;
              resolve(arr.length > 0 ? arr[0] : {});
            } else if (res != null) {
              resolve(res);
            } else {
              resolve({});
            }
          }).exec();
        }
      } catch (_e) {
        resolve({});
      }
    });
  }
  function bem(name, fixed, change) {
    const prefix = `up-${name}--`;
    const classes = new UTSJSONObject({});
    if (fixed.length > 0) {
      fixed.map((item) => {
        classes[prefix + item] = true;
      });
    }
    if (change.length > 0) {
      change.map((item) => {
        if (item[1]) {
          classes[prefix + item[0]] = item[1];
        }
      });
    }
    return UTSJSONObject.keys(classes).join(" ");
  }
  function getPx(valueOri = null, unit = false) {
    if (valueOri == null) {
      return unit ? "0px" : "0";
    }
    let value = valueOri.toString();
    if (number(value)) {
      return unit ? `${value}px` : value;
    }
    return unit ? `${value}px` : value;
  }
  function addStyle(customStyle = null, target = "object") {
    if (empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      let customStyleStr = UTS.JSON.stringify(customStyle);
      customStyleStr = customStyleStr.trim();
      const styleArray = customStyleStr.split(";");
      const style = new UTSJSONObject(
        {}
        // 历遍数组，拼接成对象
      );
      for (let i = 0; i < styleArray.length; i++) {
        if (styleArray[i] != "") {
          const item = styleArray[i].split(":");
          if (item.length > 1) {
            style[item[0].trim()] = item[1].trim();
          }
        }
      }
      return style;
    }
    let string = "";
    UTSJSONObject.keys(customStyle).forEach((key) => {
      key = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      let val = customStyle[key];
      string += `${key}: ${val};`;
    });
    return string.trim();
  }
  function addUnit(pvalue = null, punit = "") {
    let value = pvalue;
    if (value == null) {
      value = "";
    } else if (typeof value == "string" && value == "") {
      value = "";
    }
    let unit = punit;
    if (unit == "" || unit == null) {
      unit = config["unit"];
    }
    let valueStr = value.toString();
    return number(valueStr) ? `${valueStr}${unit}` : valueStr;
  }
  function timeFormat(dateTime = 0, formatStr = "yyyy-mm-dd") {
    let date = null;
    if (dateTime == 0 || dateTime == null) {
      date = /* @__PURE__ */ new Date();
    } else if (/^\d{10}$/.test(dateTime.toString().trim())) {
      date = new Date(parseInt(dateTime.toString()) * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.toString().trim())) {
      date = new Date(parseInt(dateTime.toString()));
    } else {
      date = new Date(typeof dateTime === "string" ? dateTime.toString().replace(/-/g, "/") : dateTime.toString());
    }
    const timeSource = new UTSJSONObject({
      // 'y': date.getFullYear().toString(), // 年
      // 'm': (date.getMonth() as number + 1).toString().padStart(2, '0'), // 月
      // 'd': date.getDate().toString().padStart(2, '0'), // 日
      // 'h': date.getHours().toString().padStart(2, '0'), // 时
      // 's': date.getSeconds().toString().padStart(2, '0') // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    });
    timeSource["y"] = date.getFullYear().toString();
    timeSource["m"] = (date.getMonth() + 1).toString().padStart(2, "0").toString();
    timeSource["d"] = date.getDate().toString().padStart(2, "0").toString();
    timeSource["M"] = date.getMinutes().toString().padStart(2, "0").toString();
    timeSource["h"] = date.getHours().toString().padStart(2, "0").toString();
    timeSource["s"] = date.getSeconds().toString().padStart(2, "0").toString();
    let timeSourceReturn = formatStr;
    for (const key in timeSource) {
      const ret = new RegExp(`${key}+`).exec(formatStr);
      if (ret != null && ret[0] != null) {
        const beginIndex = key === "y" && ret.length == 2 ? 2 : 0;
        if (timeSource[key] != null && key != "") {
          let replaceVal = "";
          let timeSourceKey = timeSource.getString(key);
          if (timeSourceKey != null) {
            replaceVal = timeSourceKey.slice(beginIndex);
          }
          timeSourceReturn = timeSourceReturn.replace(ret[0].toString(), replaceVal);
        }
      }
    }
    return timeSourceReturn;
  }
  function toast(title = null, duration = 2e3) {
    if (null == title)
      return null;
    uni.showToast({
      title,
      icon: "none",
      duration
    });
  }
  const mixin = {
    // 定义每个组件都可能需要用到的外部样式以及类名
    props: {
      // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
      customStyle: {
        type: [Object, String],
        default: new UTSJSONObject({})
      },
      customClass: {
        type: String,
        default: ""
      },
      // 跳转的页面路径
      url: {
        type: String,
        default: ""
      },
      // 页面跳转的类型
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {
        parent: null,
        parentData: new UTSJSONObject({}),
        children: [],
        childrenRefs: []
      };
    },
    onLoad() {
    },
    created() {
    },
    computed: {},
    methods: {
      $upAddUnit(val = null, unit = "") {
        return addUnit(val, unit);
      },
      $upAddStyle(customStyle = null, target = "object") {
        return addStyle(customStyle, target);
      },
      $upGetPx(val = null, unit = false) {
        return getPx(val, unit);
      },
      /**
      * 生成bem规则类名
      * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
      * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
      * @param {String} name 组件名称
      * @param {Array} fixed 一直会存在的类名
      * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
      * @returns {Array|string}
      */
      bem: function(name, fixed, change) {
        return bem(name, fixed, change);
      },
      // 跳转某一个页面
      openPage: function(urlKey = "url") {
      },
      $uGetRect(selector, all = false) {
        return upGetRect(selector, all, this);
      },
      // 查询节点信息
      // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
      // 解决办法为在组件根部再套一个没有任何作用的view元素
      upGetRect(selector, all = false) {
        return upGetRect(selector, all, this);
      },
      getChildIndex(ins) {
        let index = -1;
        if (this.parent != null) {
          this.parent.$data["children"].forEach((child, idx) => {
            if (child == ins) {
              index = idx;
            }
          });
        }
        return index;
      },
      getParent(name) {
        let parent = this.$parent;
        while (parent != null) {
          if (
            // parent.$options != null &&
            parent.$options["name"] != name
          ) {
            parent = parent.$parent;
          } else {
            break;
          }
        }
        return parent;
      },
      addChild(ins) {
        let exist = false;
        let childs = this.children;
        childs.map((child) => {
          if (ins == child) {
            exist = true;
          }
        });
        if (exist == false) {
          this.children.push(ins);
        }
      },
      addChildRef(str) {
        let index = this.childrenRefs.indexOf("str");
        if (index <= -1) {
          this.childrenRefs.push(str);
        }
      },
      /**
       * 获取父组件数据
       * @author jry ijry@qq.com
       * @param parentName 父组件名称如up-row
       * @returns
       */
      getParentData: function(parentName, refMode = false) {
        var _a;
        let parent = this.getParent(parentName);
        this.parent = parent;
        if (parent != null) {
          if ((parent === null || parent === void 0 ? null : parent.$data) != null && ((_a = parent === null || parent === void 0 ? null : parent.$data) === null || _a === void 0 ? null : _a["children"]) != null) {
            if (refMode) {
              parent === null || parent === void 0 ? null : parent.$callMethod("addChildRef", this.$data["refstr"]);
            } else {
              parent === null || parent === void 0 ? null : parent.$callMethod("addChild", this);
            }
          }
          UTSJSONObject.keys(this.parentData).map((key) => {
            var _a2, _b, _c, _d, _e, _f;
            if ((parent === null || parent === void 0 ? null : parent.$props) != null && ((_a2 = parent === null || parent === void 0 ? null : parent.$props) === null || _a2 === void 0 ? null : _a2[key]) != null) {
              if (((_b = this.parentData) === null || _b === void 0 ? null : _b[key]) != null) {
                this.parentData[key] = (_c = parent === null || parent === void 0 ? null : parent.$props) === null || _c === void 0 ? null : _c[key];
              }
            }
            if ((parent === null || parent === void 0 ? null : parent.$data) != null && ((_d = parent === null || parent === void 0 ? null : parent.$data) === null || _d === void 0 ? null : _d[key]) != null) {
              if (((_e = this.parentData) === null || _e === void 0 ? null : _e[key]) != null) {
                this.parentData[key] = (_f = parent === null || parent === void 0 ? null : parent.$data) === null || _f === void 0 ? null : _f[key];
              }
            }
          });
        }
        return new UTSJSONObject({});
      },
      // 阻止事件冒泡
      preventEvent(e) {
        e.stopPropagation();
      },
      // 空操作
      noop(e) {
        this.preventEvent(e);
      }
    },
    onReachBottom() {
    },
    beforeDestroy() {
      if (this.$parent && array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index) => {
          if (child === this) {
            childrenList.splice(index, 1);
          }
        });
      }
    }
  };
  new UTSJSONObject({
    primary: "#3c9cff",
    info: "#909399",
    default: "#909399",
    warning: "#f9ae3d",
    error: "#f56c6c",
    success: "#5ac725",
    mainColor: "#303133",
    contentColor: "#606266",
    tipsColor: "#909399",
    lightColor: "#c0c4cc",
    borderColor: "#e4e7ed"
  });
  function loadFont() {
    uni.loadFontFace({
      global: true,
      family: "iconfont",
      source: "url('/static/iconfont/iconfont.ttf')",
      success() {
        uni.__log__("log", "at uni_modules/uview-ultra/index.uts:32", "global loadFontFace uni.ttf success");
      },
      fail(error) {
        uni.__log__("warn", "at uni_modules/uview-ultra/index.uts:35", "global loadFontFace uni.ttf fail", error.errMsg);
      }
    });
  }
  class UPUtils {
    addUnit(val = null, unit = "") {
      return addUnit(val, unit);
    }
    addStyle(customStyle = null, target = "object") {
      return addStyle(customStyle, target);
    }
    getPx(val = null, unit = false) {
      return getPx(val, unit);
    }
    timeFormat(dateTime = 0, formatStr = "yyyy-mm-dd") {
      return timeFormat(dateTime, formatStr);
    }
    toast(title, duration = 2e3) {
      toast(title, duration);
    }
  }
  const uputils = new UPUtils();
  const install = (app = null) => {
    app.config.globalProperties.$u = uputils;
    app.config.globalProperties.$up = uputils;
    app.mixin(mixin);
  };
  const ultraUI = new UTSJSONObject({
    install
  });
  const _sfc_main = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __name: "App",
    setup(__props) {
      vue.onLaunch(() => {
        loadFont();
      });
    }
  });
  const _style_0 = {};
  const _style_1 = {};
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
  const __global__ = typeof globalThis === "undefined" ? Function("return this")() : globalThis;
  __global__.__uniX = true;
  function createApp() {
    installRouteInterceptor();
    const app = vue.createSSRApp(App);
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
  createApp().app.mount("#app");
})(Vue);
