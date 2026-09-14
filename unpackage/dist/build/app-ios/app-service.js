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
            iconPath: { type: String, optional: true },
            selectedIconPath: { type: String, optional: true },
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
      this.iconPath = this.__props__.iconPath;
      this.selectedIconPath = this.__props__.selectedIconPath;
      this.badge = this.__props__.badge;
      this.isBulge = this.__props__.isBulge;
      delete this.__props__;
    }
  }
  class TabBarMidButtonIconfont extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            text: { type: String, optional: true },
            selectedText: { type: String, optional: true },
            fontSize: { type: String, optional: true },
            color: { type: String, optional: true },
            selectedColor: { type: String, optional: true }
          };
        }
      };
    }
    constructor(options, metadata = TabBarMidButtonIconfont.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.text = this.__props__.text;
      this.selectedText = this.__props__.selectedText;
      this.fontSize = this.__props__.fontSize;
      this.color = this.__props__.color;
      this.selectedColor = this.__props__.selectedColor;
      delete this.__props__;
    }
  }
  class TabBarMidButton extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            width: { type: String, optional: true },
            height: { type: String, optional: true },
            text: { type: String, optional: true },
            iconPath: { type: String, optional: true },
            iconWidth: { type: String, optional: true },
            backgroundImage: { type: String, optional: true },
            iconfont: { type: TabBarMidButtonIconfont, optional: true },
            pagePath: { type: String, optional: true },
            viewPath: { type: String, optional: true },
            iconType: { type: String, optional: true },
            icon: { type: String, optional: true },
            iconActive: { type: String, optional: true },
            selectedIconPath: { type: String, optional: true },
            badge: { type: "Unknown", optional: true },
            isBulge: { type: Boolean, optional: true }
          };
        }
      };
    }
    constructor(options, metadata = TabBarMidButton.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.width = this.__props__.width;
      this.height = this.__props__.height;
      this.text = this.__props__.text;
      this.iconPath = this.__props__.iconPath;
      this.iconWidth = this.__props__.iconWidth;
      this.backgroundImage = this.__props__.backgroundImage;
      this.iconfont = this.__props__.iconfont;
      this.pagePath = this.__props__.pagePath;
      this.viewPath = this.__props__.viewPath;
      this.iconType = this.__props__.iconType;
      this.icon = this.__props__.icon;
      this.iconActive = this.__props__.iconActive;
      this.selectedIconPath = this.__props__.selectedIconPath;
      this.badge = this.__props__.badge;
      this.isBulge = this.__props__.isBulge;
      delete this.__props__;
    }
  }
  class TabBarConfig extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            type: { type: String, optional: true },
            color: { type: String, optional: true },
            selectedColor: { type: String, optional: true },
            backgroundColor: { type: String, optional: true },
            borderStyle: { type: String, optional: true },
            borderColor: { type: String, optional: true },
            blurEffect: { type: String, optional: true },
            glassEffect: { type: Boolean, optional: true },
            position: { type: String, optional: true },
            fontSize: { type: String, optional: true },
            iconWidth: { type: String, optional: true },
            spacing: { type: String, optional: true },
            height: { type: String, optional: true },
            midButton: { type: TabBarMidButton, optional: true },
            midButton1: { type: TabBarMidButton, optional: true },
            iconfontSrc: { type: String, optional: true },
            backgroundImage: { type: String, optional: true },
            backgroundRepeat: { type: String, optional: true },
            redDotColor: { type: String, optional: true },
            list: { type: UTS.UTSType.withGenerics(Array, [CustomTabBarItem]), optional: false }
          };
        }
      };
    }
    constructor(options, metadata = TabBarConfig.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.type = this.__props__.type;
      this.color = this.__props__.color;
      this.selectedColor = this.__props__.selectedColor;
      this.backgroundColor = this.__props__.backgroundColor;
      this.borderStyle = this.__props__.borderStyle;
      this.borderColor = this.__props__.borderColor;
      this.blurEffect = this.__props__.blurEffect;
      this.glassEffect = this.__props__.glassEffect;
      this.position = this.__props__.position;
      this.fontSize = this.__props__.fontSize;
      this.iconWidth = this.__props__.iconWidth;
      this.spacing = this.__props__.spacing;
      this.height = this.__props__.height;
      this.midButton = this.__props__.midButton;
      this.midButton1 = this.__props__.midButton1;
      this.iconfontSrc = this.__props__.iconfontSrc;
      this.backgroundImage = this.__props__.backgroundImage;
      this.backgroundRepeat = this.__props__.backgroundRepeat;
      this.redDotColor = this.__props__.redDotColor;
      this.list = this.__props__.list;
      delete this.__props__;
    }
  }
  const customTabbarConfig = new TabBarConfig({
    borderColor: null,
    blurEffect: null,
    position: null,
    fontSize: null,
    iconWidth: null,
    spacing: null,
    height: null,
    midButton: null,
    midButton1: null,
    iconfontSrc: null,
    backgroundImage: null,
    backgroundRepeat: null,
    redDotColor: null,
    /**
     * 自定义 TabBar 呈现风格形态：
     * - 'capsule': 悬浮胶囊岛屿样式
     * - 'default': 标准贴底样式（支持中间凸起鼓包 midButton）
     */
    type: "capsule",
    color: "@tabBarColor",
    selectedColor: "@tabBarSelectedColor",
    backgroundColor: "@tabBarBackgroundColor",
    borderStyle: "@tabBarBorderStyle",
    glassEffect: true,
    /**
     * ⚠️ 中间鼓包按钮 (midButton)
     * 官方原生底层跨端兼容性提示：
     * - Web: 4.0+ (支持)
     * - 微信小程序: ❌ 不支持
     * - HarmonyOS 鸿蒙: ❌ 不支持
     * - iOS(Vapor): ❌ 不支持
     * - iOS(VDOM) / Android(VDOM): √ 支持
     *
     * 💡 建议：若业务必须使用鼓包立体悬浮效果且需全端（含小程序/鸿蒙）兼容，
     * 请在 .env 中配置 VITE_TABBAR_MODE=2（自定义 TabBar 模式），组件层支持 100% 全端一致渲染。
     * 💡 提示：若不需要 midButton，直接用行注释（//）或块注释把该属性包起来即可，插件已自动过滤注释，不会同步到 pages.json
     */
    // midButton: {
    //   width: '50px',
    //   height: '50px',
    //   text: 'tabbar.ai',
    //   pagePath: 'src/pages/ai/ai',
    //   iconType: 'icon',
    //   icon: 'chatboxes',
    //   iconActive: 'chatboxes-filled',
    //   iconPath: 'static/tabbar/AI.png',
    //   selectedIconPath: 'static/tabbar/AI_fill.png',
    //   iconWidth: '24px',
    //   badge: null,
    //   isBulge: true
    // },
    list: [
      new CustomTabBarItem({
        text: "tabbar.home",
        pagePath: "src/pages/index/index",
        iconType: "icon",
        icon: "home",
        iconActive: "home-filled",
        iconPath: "static/tabbar/home.png",
        selectedIconPath: "static/tabbar/home_fill.png",
        badge: null,
        isBulge: false
      }),
      new CustomTabBarItem({
        text: "tabbar.basic",
        pagePath: "src/pages/basic/basic",
        iconType: "icon",
        icon: "tune",
        iconActive: "tune-filled",
        iconPath: "static/tabbar/tune.png",
        selectedIconPath: "static/tabbar/tune_fill.png",
        badge: null,
        isBulge: false
      }),
      new CustomTabBarItem({
        text: "tabbar.function",
        pagePath: "src/pages/function/function",
        iconType: "icon",
        icon: "gear",
        iconActive: "gear-filled",
        iconPath: "static/tabbar/gear.png",
        selectedIconPath: "static/tabbar/gear_fill.png",
        badge: null,
        isBulge: false
      }),
      new CustomTabBarItem({
        text: "tabbar.me",
        pagePath: "src/pages/me/me",
        iconType: "icon",
        icon: "person",
        iconActive: "person-filled",
        iconPath: "static/tabbar/people.png",
        selectedIconPath: "static/tabbar/people_fill.png",
        badge: null,
        isBulge: false
      })
    ]
  });
  function getAppTitle() {
    var _a2;
    return "".concat((_a2 = "unibestX") !== null && _a2 !== void 0 ? _a2 : "unibestX");
  }
  function getAppVersion() {
    var _a2, _b;
    try {
      const sys = uni.getSystemInfoSync();
      if (((_a2 = sys.appVersion) !== null && _a2 !== void 0 ? _a2 : "") != "") {
        return "".concat(sys.appVersion);
      }
    } catch (_c) {
    }
    return "".concat((_b = "1.0.0") !== null && _b !== void 0 ? _b : "1.0.0");
  }
  function getApiBaseUrl() {
    var _a2;
    return "".concat((_a2 = "https://ukw0y1.laf.run") !== null && _a2 !== void 0 ? _a2 : "https://ukw0y1.laf.run");
  }
  function getApiSecondaryUrl() {
    var _a2;
    return "".concat((_a2 = "https://ukw0y1.laf.run") !== null && _a2 !== void 0 ? _a2 : "https://ukw0y1.laf.run");
  }
  function getDefaultLocale() {
    var _a2;
    const envLocale = "".concat((_a2 = "zh-CN") !== null && _a2 !== void 0 ? _a2 : "").trim();
    if (envLocale.length > 0) {
      return envLocale;
    }
    try {
      const sysInfo = uni.getSystemInfoSync();
      const appLang = sysInfo.appLanguage;
      if (appLang != null && appLang.toLowerCase().includes("zh")) {
        return "zh-CN";
      }
      if (appLang != null && appLang.toLowerCase().includes("en")) {
        return "en-US";
      }
    } catch (_b) {
    }
    return "zh-CN";
  }
  function getStreamUrl() {
    var _a2;
    const raw = "".concat((_a2 = "/stream/chat") !== null && _a2 !== void 0 ? _a2 : "").trim();
    if (raw == "") {
      return "";
    }
    if (raw.startsWith("http://") || raw.startsWith("https://")) {
      return raw;
    }
    return "".concat(getApiBaseUrl()).concat(raw);
  }
  function getOssBaseUrl() {
    var _a2;
    return "".concat((_a2 = "https://xxx.com") !== null && _a2 !== void 0 ? _a2 : "https://xxx.com");
  }
  function getOssUploadPath() {
    var _a2;
    return "".concat((_a2 = "/gateway/user/sys/oss/upload/xxx") !== null && _a2 !== void 0 ? _a2 : "/gateway/user/sys/oss/upload/xxx");
  }
  function getOssUploadUrl() {
    return "".concat(getOssBaseUrl()).concat(getOssUploadPath());
  }
  function getTabBarMode() {
    var _a2;
    return "".concat((_a2 = "4") !== null && _a2 !== void 0 ? _a2 : "1").trim();
  }
  function getTabbarStrategyNum() {
    const envMode = getTabBarMode();
    if (envMode == "0" || envMode == "NO_TABBAR") {
      return 0;
    }
    if (envMode == "2" || envMode == "CUSTOM_TABBAR" || envMode == "CUSTOM_TABBAR_WITH_NATIVE") {
      return 2;
    }
    if (envMode == "3" || envMode == "CUSTOM_TABBAR_WITHOUT_NATIVE") {
      return 3;
    }
    if (envMode == "4" || envMode == "SINGLE_PAGE_TABBAR") {
      return 4;
    }
    return 1;
  }
  function isVaporMode() {
    return true;
  }
  function getCurrentEnv() {
    var _a2;
    const buildEnvType = "".concat((_a2 = "test") !== null && _a2 !== void 0 ? _a2 : "");
    if (buildEnvType == "test") {
      return "test";
    }
    return "production";
  }
  function getCurrentEnvName() {
    var _a2;
    const envName = "".concat((_a2 = "测试环境") !== null && _a2 !== void 0 ? _a2 : "");
    if (envName != "") {
      return envName;
    }
    return "";
  }
  function getCompilePlatform() {
    return "iOS";
  }
  function getCompileMode() {
    const modeName = "Vapor 模式";
    const envText = getCurrentEnv() == "test" ? "测试" : "生产";
    return "".concat(modeName, " (").concat(envText, ")");
  }
  const NAVBAR_CONTENT_HEIGHT = 44;
  const TABBAR_BASE_HEIGHT = 50;
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
  class SystemSafeArea extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            top: { type: Number, optional: false },
            right: { type: Number, optional: false },
            bottom: { type: Number, optional: false },
            left: { type: Number, optional: false },
            width: { type: Number, optional: false },
            height: { type: Number, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = SystemSafeArea.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.top = this.__props__.top;
      this.right = this.__props__.right;
      this.bottom = this.__props__.bottom;
      this.left = this.__props__.left;
      this.width = this.__props__.width;
      this.height = this.__props__.height;
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
            availableHeight: { type: Number, optional: false },
            navBarHeight: { type: Number, optional: false },
            tabBarHeight: { type: Number, optional: false },
            pixelRatio: { type: Number, optional: false },
            brand: { type: String, optional: false },
            model: { type: String, optional: false },
            system: { type: String, optional: false },
            compilerVersion: { type: String, optional: false },
            uniCompileVersion: { type: String, optional: false },
            isVapor: { type: Boolean, optional: false },
            compileMode: { type: String, optional: false },
            platformName: { type: String, optional: false },
            appTitle: { type: String, optional: false },
            appVersion: { type: String, optional: false },
            apiBaseUrl: { type: String, optional: false },
            env: { type: String, optional: false },
            envName: { type: String, optional: false },
            safeAreaInsets: { type: SystemSafeAreaInsets, optional: true },
            safeArea: { type: SystemSafeArea, optional: true }
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
      this.availableHeight = this.__props__.availableHeight;
      this.navBarHeight = this.__props__.navBarHeight;
      this.tabBarHeight = this.__props__.tabBarHeight;
      this.pixelRatio = this.__props__.pixelRatio;
      this.brand = this.__props__.brand;
      this.model = this.__props__.model;
      this.system = this.__props__.system;
      this.compilerVersion = this.__props__.compilerVersion;
      this.uniCompileVersion = this.__props__.uniCompileVersion;
      this.isVapor = this.__props__.isVapor;
      this.compileMode = this.__props__.compileMode;
      this.platformName = this.__props__.platformName;
      this.appTitle = this.__props__.appTitle;
      this.appVersion = this.__props__.appVersion;
      this.apiBaseUrl = this.__props__.apiBaseUrl;
      this.env = this.__props__.env;
      this.envName = this.__props__.envName;
      this.safeAreaInsets = this.__props__.safeAreaInsets;
      this.safeArea = this.__props__.safeArea;
      delete this.__props__;
    }
  }
  const systemInfo = vue.ref(null);
  const safeAreaInsets = vue.ref(null);
  const windowWidth = vue.computed(() => {
    var _a2, _b;
    return (_b = (_a2 = systemInfo.value) === null || _a2 === void 0 ? null : _a2.windowWidth) !== null && _b !== void 0 ? _b : 0;
  });
  const windowHeight = vue.computed(() => {
    var _a2, _b;
    return (_b = (_a2 = systemInfo.value) === null || _a2 === void 0 ? null : _a2.windowHeight) !== null && _b !== void 0 ? _b : 0;
  });
  vue.computed(() => {
    var _a2, _b;
    return (_b = (_a2 = systemInfo.value) === null || _a2 === void 0 ? null : _a2.screenWidth) !== null && _b !== void 0 ? _b : 0;
  });
  vue.computed(() => {
    var _a2, _b;
    return (_b = (_a2 = systemInfo.value) === null || _a2 === void 0 ? null : _a2.screenHeight) !== null && _b !== void 0 ? _b : 0;
  });
  const statusBarHeight = vue.computed(() => {
    var _a2, _b;
    return (_b = (_a2 = systemInfo.value) === null || _a2 === void 0 ? null : _a2.statusBarHeight) !== null && _b !== void 0 ? _b : 0;
  });
  const availableHeight = vue.computed(() => {
    var _a2, _b, _c, _d, _e2;
    const baseAh = (_b = (_a2 = systemInfo.value) === null || _a2 === void 0 ? null : _a2.availableHeight) !== null && _b !== void 0 ? _b : 0;
    const strategy = getTabbarStrategyNum();
    if (strategy == 0 || strategy == 4) {
      return baseAh;
    }
    if (strategy == 2 || strategy == 3) {
      if (customTabbarConfig.type == "default") {
        return baseAh;
      } else {
        const topSafe = (_e2 = (_d = (_c = systemInfo.value) === null || _c === void 0 ? null : _c.safeAreaInsets) === null || _d === void 0 ? null : _d.top) !== null && _e2 !== void 0 ? _e2 : 0;
        return baseAh > 0 ? baseAh + TABBAR_BASE_HEIGHT + topSafe : 0;
      }
    }
    return baseAh;
  });
  const safeAreaBottom$1 = vue.computed(() => {
    var _a2, _b, _c;
    return (_c = (_b = (_a2 = systemInfo.value) === null || _a2 === void 0 ? null : _a2.safeAreaInsets) === null || _b === void 0 ? null : _b.bottom) !== null && _c !== void 0 ? _c : 0;
  });
  function updateSystemInfo() {
    var _a2, _b, _c, _d, _e2, _f, _g;
    const windowInfo = uni.getWindowInfo();
    let compileVer = "";
    if (compileVer == "") {
      try {
        const sysInfo = uni.getSystemInfoSync();
        const uniCompileVersion = "".concat((_a2 = sysInfo.uniCompileVersion) !== null && _a2 !== void 0 ? _a2 : "");
        compileVer = uniCompileVersion;
      } catch (_h) {
      }
    }
    if (compileVer == "") {
      try {
        const appBaseInfo = uni.getAppBaseInfo();
        compileVer = "".concat((_b = appBaseInfo.version) !== null && _b !== void 0 ? _b : "");
      } catch (_j) {
      }
    }
    if (compileVer == "") {
      compileVer = "1.0.0";
    }
    let brand = "";
    let model = "";
    let system = "";
    try {
      const dev = uni.getDeviceInfo();
      brand = "".concat((_c = dev.brand) !== null && _c !== void 0 ? _c : "");
      model = "".concat((_d = dev.model) !== null && _d !== void 0 ? _d : "");
    } catch (_k) {
    }
    try {
      const sys_1 = uni.getSystemInfoSync();
      system = "".concat((_e2 = sys_1.system) !== null && _e2 !== void 0 ? _e2 : "");
      if (brand == "") {
        brand = "".concat((_f = sys_1.brand) !== null && _f !== void 0 ? _f : "");
      }
      if (model == "") {
        model = "".concat((_g = sys_1.model) !== null && _g !== void 0 ? _g : "");
      }
    } catch (_l) {
    }
    systemInfo.value = new SystemInfoType({
      screenWidth: windowInfo.screenWidth,
      screenHeight: windowInfo.screenHeight,
      windowWidth: windowInfo.windowWidth,
      windowHeight: windowInfo.windowHeight,
      statusBarHeight: windowInfo.statusBarHeight,
      availableHeight: windowInfo.windowHeight - windowInfo.statusBarHeight,
      tabBarHeight: TABBAR_BASE_HEIGHT,
      navBarHeight: NAVBAR_CONTENT_HEIGHT,
      pixelRatio: windowInfo.pixelRatio,
      brand,
      model,
      system,
      compilerVersion: compileVer,
      uniCompileVersion: compileVer,
      isVapor: isVaporMode(),
      compileMode: getCompileMode(),
      platformName: getCompilePlatform(),
      appTitle: getAppTitle(),
      appVersion: getAppVersion(),
      apiBaseUrl: getApiBaseUrl(),
      env: getCurrentEnv(),
      envName: getCurrentEnvName(),
      safeAreaInsets: null,
      safeArea: null
    });
    const safeAreaInset = windowInfo.safeAreaInsets;
    if (safeAreaInset != null) {
      const insets = new SystemSafeAreaInsets({
        top: safeAreaInset.top,
        right: safeAreaInset.right,
        bottom: safeAreaInset.bottom,
        left: safeAreaInset.left
      });
      safeAreaInsets.value = insets;
      systemInfo.value.safeAreaInsets = insets;
    }
    const safeArea = windowInfo.safeArea;
    if (safeArea != null) {
      systemInfo.value.safeArea = new SystemSafeArea({
        top: safeArea.top,
        right: safeArea.right,
        bottom: safeArea.bottom,
        left: safeArea.left,
        width: safeArea.width,
        height: safeArea.height
      });
    }
  }
  class AppKuHeightProps extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            hideNavbar: { type: Boolean, optional: false },
            hideStatusBar: { type: Boolean, optional: false },
            pageStyle: { type: "Unknown", optional: true },
            layout: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = AppKuHeightProps.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.hideNavbar = this.__props__.hideNavbar;
      this.hideStatusBar = this.__props__.hideStatusBar;
      this.pageStyle = this.__props__.pageStyle;
      this.layout = this.__props__.layout;
      delete this.__props__;
    }
  }
  function updateAvailableHeight(kuProps, selectedTabbarStrategy2) {
    var _a2, _b, _c, _d, _e2, _f, _g;
    updateSystemInfo();
    const sys = systemInfo.value;
    if (sys == null) {
      return null;
    }
    const safeBottom = (_b = (_a2 = sys.safeAreaInsets) === null || _a2 === void 0 ? null : _a2.bottom) !== null && _b !== void 0 ? _b : 0;
    const safeTop = (_d = (_c = sys.safeAreaInsets) === null || _c === void 0 ? null : _c.top) !== null && _d !== void 0 ? _d : 0;
    const safeAreaBottom2 = (_f = (_e2 = sys.safeArea) === null || _e2 === void 0 ? null : _e2.bottom) !== null && _f !== void 0 ? _f : 0;
    const kuPageStyle = (_g = kuProps.pageStyle) !== null && _g !== void 0 ? _g : null;
    const navStyleText = kuPageStyle != null && kuPageStyle["navigationStyle"] != null ? "".concat(kuPageStyle["navigationStyle"]) : "";
    const isCustomNav = navStyleText == "custom";
    const isNoNavbarLayout = kuProps.layout != "navbar";
    let statusBarOffset = 0;
    if (isNoNavbarLayout) {
      statusBarOffset = isCustomNav ? 0 : kuProps.hideStatusBar ? 0 : safeTop;
    } else {
      statusBarOffset = kuProps.hideStatusBar ? 0 : safeTop;
    }
    let navBarOffset = 0;
    if (isNoNavbarLayout) {
      navBarOffset = isCustomNav ? 0 : sys.navBarHeight;
    } else {
      if (isCustomNav) {
        navBarOffset = kuProps.hideNavbar ? 0 : sys.navBarHeight;
      } else {
        navBarOffset = sys.navBarHeight;
      }
    }
    if (selectedTabbarStrategy2 == 0 || selectedTabbarStrategy2 == 4) {
      sys.availableHeight = safeAreaBottom2 - navBarOffset - statusBarOffset + safeBottom;
    } else {
      sys.availableHeight = safeAreaBottom2 - navBarOffset - statusBarOffset - sys.tabBarHeight;
    }
  }
  updateSystemInfo();
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const __className$X = "GenUniModulesUniIconsComponentsUniIconsUniIcons";
  const _sfc_main$Y = /* @__PURE__ */ vue.defineVaporSharedDataComponent(Object.assign({
    name: "uni-icons"
  }, { __dynamicSharedData: true, __className: __className$X, __filename: "uni_modules/uni-icons/components/uni-icons/uni-icons.uvue", __name: "uni-icons", props: {
    type: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#333333"
    },
    size: {
      type: [Number, String],
      default: 16
    },
    fontFamily: {
      type: String,
      default: ""
    }
  }, setup(__props) {
    const __sharedDataScope = vue.useSharedDataScope();
    const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenUniModulesUniIconsComponentsUniIconsUniIconsSharedData", sharedDataClassId: 0 })));
    const props = __props;
    function getFontSize(size) {
      return size + "px";
    }
    const unicode = vue.computed(() => {
      const codes = UTS.arrayFind(fontData, (item) => {
        return item.font_class == props.type;
      });
      if (codes != null) {
        return codes.unicode;
      }
      return "";
    });
    const iconSize = vue.computed(() => {
      const size = props.size;
      if (typeof size == "string") {
        const reg = /^[0-9]*$/g;
        return reg.test(size) ? "" + size + "px" : "" + size;
      }
      return getFontSize(size);
    });
    const styleObj = vue.computed(() => {
      if (props.fontFamily != "") {
        return new UTSJSONObject({ color: props.color, fontSize: iconSize.value, fontFamily: props.fontFamily });
      }
      return new UTSJSONObject({ color: props.color, fontSize: iconSize.value });
    });
    return () => {
      "raw js";
      vue.renderSharedDataEffect(() => {
        vue.setSharedDataStyle(__sharedData, 0, styleObj.value);
        vue.setSharedData(__sharedData, 1, vue.toDisplayString(unicode.value));
      });
      return __sharedData;
    };
  } }));
  const _style_0$Y = {};
  const _style_1$C = {"@FONT-FACE":[{"src":"url('/assets/uniicons.32e978a5.ttf')","fontFamily":"UniIconsFontFamily"}]};
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key2, val] of props) {
      target[key2] = val;
    }
    return target;
  };
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["styles", [_style_0$Y, _style_1$C]]]);
  const light = new UTSJSONObject({
    backgroundColor: "#f8fafc",
    backgroundColorBottom: "#f8fafc",
    backgroundColorContent: "#f8fafc",
    backgroundColorTop: "#f8fafc",
    backgroundTextStyle: "dark",
    navigationBarBackgroundColor: "#ffffff",
    navigationBarTextStyle: "black",
    tabBarBackgroundColor: "#ffffff",
    tabBarBorderStyle: "black",
    tabBarColor: "#515151",
    tabBarSelectedColor: "#0957de"
  });
  const dark = new UTSJSONObject({
    backgroundColor: "#0f172a",
    backgroundColorBottom: "#0f172a",
    backgroundColorContent: "#0f172a",
    backgroundColorTop: "#0f172a",
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#0f172a",
    navigationBarTextStyle: "white",
    tabBarBackgroundColor: "#0f172a",
    tabBarBorderStyle: "black",
    tabBarColor: "#515151",
    tabBarSelectedColor: "#0957de"
  });
  const themeJson = new UTSJSONObject({
    light,
    dark
  });
  const THEME_COLOR_PRESETS = [
    "#37c2bc",
    "#0957DE",
    "#10b981",
    "#f43f5e",
    "#f97316"
  ];
  class ThemeTokens extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            bgContent: { type: String, optional: false },
            navBg: { type: String, optional: false },
            navText: { type: String, optional: false },
            tabBg: { type: String, optional: false },
            tabBorder: { type: String, optional: false },
            tabColor: { type: String, optional: false },
            tabSelected: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = ThemeTokens.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.bgContent = this.__props__.bgContent;
      this.navBg = this.__props__.navBg;
      this.navText = this.__props__.navText;
      this.tabBg = this.__props__.tabBg;
      this.tabBorder = this.__props__.tabBorder;
      this.tabColor = this.__props__.tabColor;
      this.tabSelected = this.__props__.tabSelected;
      delete this.__props__;
    }
  }
  function getDefaultTheme() {
    var _a2;
    const envTheme = "".concat((_a2 = "") !== null && _a2 !== void 0 ? _a2 : "").trim();
    return envTheme.length > 0 ? envTheme : "#37c2bc";
  }
  function getSystemTheme() {
    var _a2;
    let theme2 = "light";
    try {
      theme2 = (_a2 = uni.getDeviceInfo().osTheme) !== null && _a2 !== void 0 ? _a2 : "light";
    } catch (_b) {
    }
    return theme2;
  }
  function isDarkMode(mode, systemTheme = getSystemTheme()) {
    if (mode == "light") {
      return false;
    }
    if (mode == "dark") {
      return true;
    }
    return systemTheme == "dark";
  }
  function mapNavTextStyle(value) {
    if (value == "black") {
      return "#000000";
    }
    if (value == "white") {
      return "#ffffff";
    }
    return value;
  }
  function mapTabBorderStyle(value, isDark) {
    if (value == "black") {
      return isDark ? "#334155" : "#e2e8f0";
    }
    if (value == "white") {
      return "#ffffff";
    }
    return value;
  }
  function getThemeTokens(isDark) {
    const themeData = themeJson;
    const scheme = isDark ? themeData.dark : themeData.light;
    return new ThemeTokens({
      bgContent: scheme.backgroundColorContent,
      navBg: scheme.navigationBarBackgroundColor,
      navText: mapNavTextStyle(scheme.navigationBarTextStyle),
      tabBg: scheme.tabBarBackgroundColor,
      tabBorder: mapTabBorderStyle(scheme.tabBarBorderStyle, isDark),
      tabColor: scheme.tabBarColor,
      tabSelected: scheme.tabBarSelectedColor
    });
  }
  function getRootThemeStyle(themeColor2, isDark) {
    return new UTSJSONObject({
      "--bg-color": getThemeTokens(isDark).bgContent,
      "--border-color": isDark ? "#334155" : "#e2e8f0",
      "--card-bg": isDark ? "#1e293b" : "#ffffff",
      "--text-color": isDark ? "#e2e8f0" : "#1e293b",
      "--text-secondary": isDark ? "#94a3b8" : "#64748b",
      "--theme-color": themeColor2
    });
  }
  function applyThemeColor(color) {
  }
  function applyThemeMode(mode, isDark) {
    try {
      uni.setAppTheme({ theme: mode });
    } catch (_a2) {
    }
  }
  function applyNavbarTheme(isDark) {
    getThemeTokens(isDark);
  }
  function removeLeadingSlash(path) {
    if (path.startsWith("/")) {
      return path.substring(1);
    }
    return path;
  }
  function cleanPath(path) {
    if (path.length == 0) {
      return "";
    }
    let p2 = path.trim();
    const queryIdx = p2.indexOf("?");
    if (queryIdx >= 0) {
      p2 = p2.substring(0, queryIdx);
    }
    return p2.startsWith("/") ? p2 : "/".concat(p2);
  }
  function isSamePath(path1, path2) {
    const p1 = cleanPath(path1);
    const p2 = cleanPath(path2);
    if (p1 == p2) {
      return true;
    }
    const raw1 = removeLeadingSlash(p1);
    const raw2 = removeLeadingSlash(p2);
    if (raw1 == raw2) {
      return true;
    }
    return raw1.endsWith(raw2) || raw2.endsWith(raw1);
  }
  function getCurrentRoute() {
    var _a2;
    try {
      const pages2 = getCurrentPages();
      if (pages2.length > 0) {
        const page = pages2[pages2.length - 1];
        return (_a2 = page.route) !== null && _a2 !== void 0 ? _a2 : "";
      }
    } catch (_b) {
    }
    return "";
  }
  function getCurrentPath() {
    const route = getCurrentRoute();
    if (route.length == 0) {
      return "";
    }
    return cleanPath(route);
  }
  function buildFullTabbarList(config) {
    var _a2, _b, _c, _d, _e2, _f, _g, _h, _j;
    const result = [];
    const list = config.list;
    const mid = config.midButton;
    if (mid != null) {
      const midItem = new CustomTabBarItem({
        text: (_a2 = mid.text) !== null && _a2 !== void 0 ? _a2 : "AI",
        pagePath: (_b = mid.pagePath) !== null && _b !== void 0 ? _b : "",
        iconType: (_c = mid.iconType) !== null && _c !== void 0 ? _c : "icon",
        icon: (_d = mid.icon) !== null && _d !== void 0 ? _d : "chatboxes",
        iconActive: (_e2 = mid.iconActive) !== null && _e2 !== void 0 ? _e2 : "chatboxes-filled",
        iconPath: (_f = mid.iconPath) !== null && _f !== void 0 ? _f : "",
        selectedIconPath: (_g = mid.selectedIconPath) !== null && _g !== void 0 ? _g : "",
        badge: (_h = mid.badge) !== null && _h !== void 0 ? _h : null,
        isBulge: (_j = mid.isBulge) !== null && _j !== void 0 ? _j : true
      });
      const half = Math.floor(list.length / 2);
      for (let i2 = 0; i2 < list.length; i2++) {
        if (i2 == half) {
          result.push(midItem);
        }
        result.push(list[i2]);
      }
      if (half >= list.length) {
        result.push(midItem);
      }
    } else {
      for (let i2 = 0; i2 < list.length; i2++) {
        result.push(list[i2]);
      }
    }
    return result;
  }
  const customTabbarList = buildFullTabbarList(customTabbarConfig);
  function normalizeList() {
    const result = [];
    for (let i2 = 0; i2 < customTabbarList.length; i2++) {
      const item = customTabbarList[i2];
      result.push(new CustomTabBarItem({
        iconPath: null,
        selectedIconPath: null,
        text: item.text,
        pagePath: item.pagePath.startsWith("/") ? item.pagePath : "/".concat(item.pagePath),
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
  const themeColor = vue.ref(getDefaultTheme());
  function setCurIdx(idx) {
    curIdx.value = idx;
    uni.setStorageSync("app-tabbar-index", idx);
  }
  function setCurIdxByPath(path) {
    const targetPath = cleanPath(path);
    for (let i2 = 0; i2 < tabbarList.length; i2++) {
      if (isSamePath(tabbarList[i2].pagePath, targetPath)) {
        setCurIdx(i2);
        break;
      }
    }
  }
  function syncCurIdxByCurrentPage() {
    const currentPath = getCurrentPath();
    if (currentPath.length == 0) {
      return null;
    }
    setCurIdxByPath(currentPath);
  }
  function isPageTabbar(path) {
    const targetPath = cleanPath(path);
    for (let i2 = 0; i2 < tabbarList.length; i2++) {
      if (isSamePath(tabbarList[i2].pagePath, targetPath)) {
        return true;
      }
    }
    return false;
  }
  /*!
   * pinia v3.0.4
   * (c) 2025 Eduardo San Martin Morote
   * @license MIT
   */
  let activePinia;
  const setActivePinia = (pinia2) => activePinia = pinia2;
  const piniaSymbol = (
    /* istanbul ignore next */
    Symbol()
  );
  function isPlainObject(o2) {
    return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia2 = vue.markRaw({
      install(app2) {
        setActivePinia(pinia2);
        pinia2._a = app2;
        app2.provide(piniaSymbol, pinia2);
        app2.config.globalProperties.$pinia = pinia2;
        toBeInstalled.forEach((plugin) => _p.push(plugin));
        toBeInstalled = [];
      },
      use(plugin) {
        if (!this._a) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    return pinia2;
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.add(callback);
    const removeSubscription = () => {
      const isDel = subscriptions.delete(callback);
      isDel && onCleanup();
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.forEach((callback) => {
      callback(...args);
    });
  }
  const fallbackRunWithContext = (fn2) => fn2();
  const ACTION_MARKER = Symbol();
  const ACTION_NAME = Symbol();
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key2) => target.set(key2, value));
    } else if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key2 in patchToApply) {
      if (!patchToApply.hasOwnProperty(key2))
        continue;
      const subPatch = patchToApply[key2];
      const targetValue = target[key2];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key2) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key2] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key2] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = (
    /* istanbul ignore next */
    Symbol()
  );
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !Object.prototype.hasOwnProperty.call(obj, skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o2) {
    return !!(vue.isRef(o2) && o2.effect);
  }
  function createOptionsStore(id, options, pinia2, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia2.state.value[id];
    let store2;
    function setup() {
      if (!initialState && true) {
        pinia2.state.value[id] = state ? state() : {};
      }
      const localState = vue.toRefs(pinia2.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        computedGetters[name] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia2);
          const store22 = pinia2._s.get(id);
          return getters[name].call(store22, store22);
        }));
        return computedGetters;
      }, {}));
    }
    store2 = createSetupStore(id, setup, options, pinia2, hot, true);
    return store2;
  }
  function createSetupStore($id, setup, options = {}, pinia2, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    const $subscribeOptions = { deep: true };
    let isListening;
    let isSyncListening;
    let subscriptions = /* @__PURE__ */ new Set();
    let actionSubscriptions = /* @__PURE__ */ new Set();
    let debuggerEvents;
    const initialState = pinia2.state.value[$id];
    if (!isOptionsStore && !initialState && true) {
      pinia2.state.value[$id] = {};
    }
    vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia2.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia2.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia2.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : (
      /* istanbul ignore next */
      noop
    );
    function $dispose() {
      scope.stop();
      subscriptions.clear();
      actionSubscriptions.clear();
      pinia2._s.delete($id);
    }
    const action = (fn2, name = "") => {
      if (ACTION_MARKER in fn2) {
        fn2[ACTION_NAME] = name;
        return fn2;
      }
      const wrappedAction = function() {
        setActivePinia(pinia2);
        const args = Array.from(arguments);
        const afterCallbackSet = /* @__PURE__ */ new Set();
        const onErrorCallbackSet = /* @__PURE__ */ new Set();
        function after(callback) {
          afterCallbackSet.add(callback);
        }
        function onError(callback) {
          onErrorCallbackSet.add(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name: wrappedAction[ACTION_NAME],
          store: store2,
          after,
          onError
        });
        let ret;
        try {
          ret = fn2.apply(this && this.$id === $id ? this : store2, args);
        } catch (error2) {
          triggerSubscriptions(onErrorCallbackSet, error2);
          throw error2;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackSet, value);
            return value;
          }).catch((error2) => {
            triggerSubscriptions(onErrorCallbackSet, error2);
            return Promise.reject(error2);
          });
        }
        triggerSubscriptions(afterCallbackSet, ret);
        return ret;
      };
      wrappedAction[ACTION_MARKER] = true;
      wrappedAction[ACTION_NAME] = name;
      return wrappedAction;
    };
    const partialStore = {
      _p: pinia2,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia2.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store2 = vue.reactive(partialStore);
    pinia2._s.set($id, store2);
    const runWithContext = pinia2._a && pinia2._a.runWithContext || fallbackRunWithContext;
    const setupStore = runWithContext(() => pinia2._e.run(() => (scope = vue.effectScope()).run(() => setup({ action }))));
    for (const key2 in setupStore) {
      const prop = setupStore[key2];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key2];
            } else {
              mergeReactiveObjects(prop, initialState[key2]);
            }
          }
          pinia2.state.value[$id][key2] = prop;
        }
      } else if (typeof prop === "function") {
        const actionValue = action(prop, key2);
        setupStore[key2] = actionValue;
        optionsForPlugin.actions[key2] = prop;
      } else
        ;
    }
    assign(store2, setupStore);
    assign(vue.toRaw(store2), setupStore);
    Object.defineProperty(store2, "$state", {
      get: () => pinia2.state.value[$id],
      set: (state) => {
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    pinia2._p.forEach((extender) => {
      {
        assign(store2, scope.run(() => extender({
          store: store2,
          app: pinia2._a,
          pinia: pinia2,
          options: optionsForPlugin
        })));
      }
    });
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store2.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store2;
  }
  /*! #__NO_SIDE_EFFECTS__ */
  // @__NO_SIDE_EFFECTS__
  function defineStore(id, setup, setupOptions) {
    let options;
    const isSetupStore = typeof setup === "function";
    options = isSetupStore ? setupOptions : setup;
    function useStore(pinia2, hot) {
      const hasContext = vue.hasInjectionContext();
      pinia2 = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia2 || (hasContext ? vue.inject(piniaSymbol, null) : null);
      if (pinia2)
        setActivePinia(pinia2);
      pinia2 = activePinia;
      if (!pinia2._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia2);
        } else {
          createOptionsStore(id, options, pinia2);
        }
      }
      const store2 = pinia2._s.get(id);
      return store2;
    }
    useStore.$id = id;
    return useStore;
  }
  function get$1(obj, path) {
    if (obj == null)
      return void 0;
    let value = obj;
    for (let i2 = 0; i2 < path.length; i2++) {
      if (value === void 0 || value[path[i2]] === void 0)
        return void 0;
      if (value === null || value[path[i2]] === null)
        return null;
      value = value[path[i2]];
    }
    return value;
  }
  function set(obj, value, path) {
    if (path.length === 0)
      return value;
    const idx = path[0];
    if (path.length > 1)
      value = set(typeof obj !== "object" || obj === null || !Object.prototype.hasOwnProperty.call(obj, idx) ? Number.isInteger(Number(path[1])) ? [] : {} : obj[idx], value, Array.prototype.slice.call(path, 1));
    if (Number.isInteger(Number(idx)) && Array.isArray(obj))
      return obj.slice()[idx];
    return Object.assign({}, obj, { [idx]: value });
  }
  function unset(obj, path) {
    if (obj == null || path.length === 0)
      return obj;
    if (path.length === 1) {
      if (obj == null)
        return obj;
      if (Number.isInteger(path[0]) && Array.isArray(obj))
        return Array.prototype.slice.call(obj, 0).splice(path[0], 1);
      const result = {};
      for (const p2 in obj)
        result[p2] = obj[p2];
      delete result[path[0]];
      return result;
    }
    if (obj[path[0]] == null) {
      if (Number.isInteger(path[0]) && Array.isArray(obj))
        return Array.prototype.concat.call([], obj);
      const result = {};
      for (const p2 in obj)
        result[p2] = obj[p2];
      return result;
    }
    return set(obj, unset(obj[path[0]], Array.prototype.slice.call(path, 1)), [path[0]]);
  }
  function deepPick(obj, paths) {
    return paths.map((p2) => p2.split(".")).map((p2) => [p2, get$1(obj, p2)]).filter((t2) => t2[1] !== void 0).reduce((acc, cur) => set(acc, cur[1], cur[0]), {});
  }
  function deepOmit(obj, paths) {
    return paths.map((p2) => p2.split(".")).reduce((acc, cur) => unset(acc, cur), obj);
  }
  function hydrateStore(store2, { storage, serializer, key: key2, debug, pick, omit, beforeHydrate, afterHydrate }, context, runHooks = true) {
    try {
      if (runHooks)
        beforeHydrate == null ? void 0 : beforeHydrate(context);
      const fromStorage = storage.getItem(key2);
      if (fromStorage) {
        const deserialized = serializer.deserialize(fromStorage);
        const picked = pick ? deepPick(deserialized, pick) : deserialized;
        const omitted = omit ? deepOmit(picked, omit) : picked;
        store2.$patch(omitted);
      }
      if (runHooks)
        afterHydrate == null ? void 0 : afterHydrate(context);
    } catch (error2) {
      if (debug)
        uni.__log__("error", "at node_modules/pinia-plugin-persistedstate/dist/index.js:58", "[pinia-plugin-persistedstate]", error2);
    }
  }
  function persistState(state, { storage, serializer, key: key2, debug, pick, omit }) {
    try {
      const picked = pick ? deepPick(state, pick) : state;
      const omitted = omit ? deepOmit(picked, omit) : picked;
      const toStorage = serializer.serialize(omitted);
      storage.setItem(key2, toStorage);
    } catch (error2) {
      if (debug)
        uni.__log__("error", "at node_modules/pinia-plugin-persistedstate/dist/index.js:68", "[pinia-plugin-persistedstate]", error2);
    }
  }
  function parsePersistKey(key2, storeId) {
    return typeof key2 === "function" ? key2(storeId) : typeof key2 === "string" ? key2 : storeId;
  }
  function createPersistence(context, optionsParser, auto) {
    const { pinia: pinia2, store: store2, options: { persist = auto } } = context;
    if (!persist)
      return;
    // v8 ignore if -- @preserve
    if (!(store2.$id in pinia2.state.value)) {
      const originalStore = pinia2._s.get(store2.$id.replace("__hot:", ""));
      if (originalStore)
        Promise.resolve().then(() => originalStore.$persist());
      return;
    }
    const persistences = (Array.isArray(persist) ? persist : persist === true ? [{}] : [persist]).map(optionsParser);
    store2.$hydrate = ({ runHooks = true } = {}) => {
      persistences.forEach((p2) => {
        hydrateStore(store2, p2, context, runHooks);
      });
    };
    store2.$persist = () => {
      persistences.forEach((p2) => {
        persistState(store2.$state, p2);
      });
    };
    persistences.forEach((p2) => {
      hydrateStore(store2, p2, context);
      store2.$subscribe((_mutation, state) => persistState(state, p2), { detached: true });
    });
  }
  function createPersistedState(options = {}) {
    return function(context) {
      var _a2;
      createPersistence(context, (p2) => {
        var _a3, _b, _c, _d, _e2, _f, _g, _h;
        const persistKey = parsePersistKey(p2.key, context.store.$id);
        return {
          key: (options.key ? options.key : (x) => x)(persistKey),
          debug: (_b = (_a3 = p2.debug) != null ? _a3 : options.debug) != null ? _b : false,
          serializer: (_d = (_c = p2.serializer) != null ? _c : options.serializer) != null ? _d : {
            serialize: (data2) => JSON.stringify(data2),
            deserialize: (data2) => JSON.parse(data2)
          },
          storage: (_f = (_e2 = p2.storage) != null ? _e2 : options.storage) != null ? _f : window.localStorage,
          beforeHydrate: (_g = p2.beforeHydrate) != null ? _g : options.beforeHydrate,
          afterHydrate: (_h = p2.afterHydrate) != null ? _h : options.afterHydrate,
          pick: p2.pick,
          omit: p2.omit
        };
      }, (_a2 = options.auto) != null ? _a2 : false);
    };
  }
  function __awaiter(thisArg, _arguments, P2, generator) {
    function adopt(value) {
      return value instanceof P2 ? value : new P2(function(resolve) {
        resolve(value);
      });
    }
    return new (P2 || (P2 = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e2) {
          reject(e2);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __values(o2) {
    var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i2 = 0;
    if (m2)
      return m2.call(o2);
    if (o2 && typeof o2.length === "number")
      return {
        next: function() {
          if (o2 && i2 >= o2.length)
            o2 = void 0;
          return { value: o2 && o2[i2++], done: !o2 };
        }
      };
    throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o2, n2) {
    var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
    if (!m2)
      return o2;
    var i2 = m2.call(o2), r2, ar = [], e2;
    try {
      while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
        ar.push(r2.value);
    } catch (error2) {
      e2 = { error: error2 };
    } finally {
      try {
        if (r2 && !r2.done && (m2 = i2["return"]))
          m2.call(i2);
      } finally {
        if (e2)
          throw e2.error;
      }
    }
    return ar;
  }
  typeof SuppressedError === "function" ? SuppressedError : function(error2, suppressed, message2) {
    var e2 = new Error(message2);
    return e2.name = "SuppressedError", e2.error = error2, e2.suppressed = suppressed, e2;
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
    [I18nErrorCodes.REQUIRED_VALUE, "值中必需，{0}"],
    [I18nErrorCodes.INVALID_VALUE, "值无效"],
    [I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN, "无法设置vue-devtools插件"],
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
    [I18nWarnCodes.FALLBACK_TO_ROOT, "使用根语言环境回退到{type} '{key}'。"],
    [I18nWarnCodes.NOT_FOUND_PARENT_SCOPE, "未找到父作用域，使用全局作用域。"],
    [I18nWarnCodes.IGNORE_OBJ_FLATTEN, "忽略对象扁平化：'{key}'键具有字符串值。"],
    [I18nWarnCodes.DEPRECATE_TC, "'tc'和'$tc'已在v10中被弃用，请使用't'或'$t'代替。'tc'和'$tc'将在v11中移除。"]
  ]);
  function getAllKeys(map2) {
    let keys = [];
    map2.forEach((_2, key2) => {
      keys.push(key2);
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
    let text2 = "";
    while (position < format.length) {
      let char = format.charAt(position++);
      if (char == "{") {
        if (text2.length > 0) {
          const token_1 = new Token({ type: "text", value: text2 });
          tokens.push(token_1);
        }
        text2 = "";
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
          text2 += char;
        }
      } else {
        text2 += char;
      }
    }
    if (text2.length > 0) {
      const token = new Token({ type: "text", value: text2 });
      tokens.push(token);
    }
    return tokens;
  }
  function compile(tokens, values = null) {
    var _a2;
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
            const value = (_a2 = values[token.value]) !== null && _a2 !== void 0 ? _a2 : "";
            compiled.push("".concat(value));
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
      return "".concat(str.charAt(0).toLocaleUpperCase()).concat(str.substring(1));
    }]
  ]);
  const DEFAULT_LOCALE = "en-US";
  const defaultFormatter = new BaseFormatter();
  const availabilities = new AvailabilitiesImpl();
  function setTabBarItems(tabbar2 = null) {
    if (tabbar2 == null)
      return null;
    const pages2 = getCurrentPages();
    const page = pages2.length > 0 ? pages2[pages2.length - 1] : null;
    const isTabBar = page != null;
    if (!isTabBar)
      return null;
    tabbar2.forEach((text2, index) => {
      uni.setTabBarItem({
        text: text2,
        index,
        // success() {},
        fail(err) {
          uni.__log__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:102", err.errMsg);
        }
      });
    });
  }
  function getLocaleMap(locale2, key2, options, root = null) {
    var _a2;
    const __messages = UTSJSONObject.assign(new UTSJSONObject({}), (_a2 = options.getJSON(key2)) !== null && _a2 !== void 0 ? _a2 : new UTSJSONObject({}));
    let map2 = /* @__PURE__ */ new Map();
    __messages.toMap().forEach((value = null, key22) => {
      if (UTS.isInstanceOf(value, UTSJSONObject)) {
        map2.set(key22, value);
      }
    });
    if (map2.size == 0 && root != null) {
      if (!map2.has(locale2)) {
        map2.set(locale2, new UTSJSONObject({}));
      }
    }
    return map2;
  }
  function getLocaleTabbarMap(locale2, key2, options) {
    var _a2;
    const __messages = (_a2 = options.getJSON(key2)) !== null && _a2 !== void 0 ? _a2 : new UTSJSONObject({});
    let map2 = /* @__PURE__ */ new Map();
    __messages.toMap().forEach((tabbar2 = null, key22) => {
      if (Array.isArray(tabbar2)) {
        map2.set(key22, tabbar2);
        if (key22 == locale2) {
          setTimeout(() => {
            setTabBarItems(tabbar2);
          }, 500);
        }
      }
    });
    return map2;
  }
  function getModifiers(options) {
    var _a2;
    const __modifiers = ((_a2 = options.getJSON("modifiers")) !== null && _a2 !== void 0 ? _a2 : new UTSJSONObject({})).toMap();
    const _modifiers = /* @__PURE__ */ new Map();
    __modifiers.forEach((value = null, key2) => {
      if (typeof value == "function") {
        try {
          _modifiers.set(key2, value);
        } catch (e2) {
          uni.__log__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:187", 35, "自定义修饰器函数必须是类型：(str: string) => string");
        }
      }
    });
    return _modifiers;
  }
  function getPluralizationRules(options) {
    var _a2;
    const __pluralizationRules = ((_a2 = options.getJSON("pluralizationRules")) !== null && _a2 !== void 0 ? _a2 : new UTSJSONObject({})).toMap();
    const _pluralizationRules = /* @__PURE__ */ new Map();
    __pluralizationRules.forEach((value = null, key2) => {
      if (typeof value == "function") {
        try {
          _pluralizationRules.set(key2, value);
        } catch (e2) {
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
      var _a2, _b;
      this._interpolate = null;
      this._link = null;
      this._warnDefault = null;
      this._formatter = getFormatter(options);
      this._modifiers = getModifiers(options);
      this._pluralizationRules = getPluralizationRules(options);
      const _inheritLocale = (_a2 = options.getBoolean("inheritLocale")) !== null && _a2 !== void 0 ? _a2 : true;
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
          var _a22;
          return (_a22 = _fallbackLocale.value) !== null && _a22 !== void 0 ? _a22 : false;
        }
      });
      this.availableLocales = getAllKeys(this.messages.value).sort();
      this.availabilities = availabilities;
      this._initMethods();
      composerID++;
      this.id = composerID;
      const interceptor = {
        complete: (_2) => {
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
        for (let i2 = 0; i2 < matches.length; i2++) {
          const link2 = matches[i2];
          const linkKeyPrefixMatches = link2.match(linkKeyPrefixMatcher);
          if (linkKeyPrefixMatches == null)
            continue;
          const _a2 = __read(linkKeyPrefixMatches, 2), linkPrefix = _a2[0], formatterName = _a2[1];
          const linkPlaceholder = link2.replace(linkPrefix, "").replace(bracketsMatcher, "");
          if (visitedLinkStack.includes(linkPlaceholder)) {
            uni.__log__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:396", '发现循环引用。"'.concat(link2, '"已经在link"已经在').concat(visitedLinkStack.reverse().join(" <- "), "链中访问过"));
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
          ret = translated == null ? ret : ret.replace(link2, translated);
        }
        return ret;
      };
      this._interpolate = (key2, locale2 = null, values = null, visitedLinkStack, interpolateMode) => {
        var _a2, _b, _c, _d, _e2;
        const ___locale = locale2 !== null && locale2 !== void 0 ? locale2 : this.locale.value;
        let ret = (_b = UTSJSONObject.assign(new UTSJSONObject({}), (_a2 = UTS.mapGet(this.messages.value, ___locale)) !== null && _a2 !== void 0 ? _a2 : new UTSJSONObject({}))) === null || _b === void 0 ? null : _b.getString(key2);
        if (this.fallbackLocale.value != false && ret == null) {
          if (typeof this.fallbackLocale.value == "string" && ___locale != this.fallbackLocale.value) {
            ret = (_d = (_c = UTS.mapGet(this.messages.value, this.fallbackLocale.value)) === null || _c === void 0 ? null : _c.getString(key2)) !== null && _d !== void 0 ? _d : ret;
          } else if (Array.isArray(this.fallbackLocale.value)) {
            const arr = this.fallbackLocale.value;
            for (let i2 = 0; i2 < arr.length; i2++) {
              const _ret = (_e2 = UTS.mapGet(this.messages.value, arr[i2])) === null || _e2 === void 0 ? null : _e2.getString(key2);
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
      this._warnDefault = (key2, message2 = null, values = null, interpolateMode) => {
        if (message2 == null) {
          uni.__log__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:483", "无法翻译键路径 '".concat(key2, "'. 使用键路径的值作为默认值."));
        }
        if (message2 == null)
          return null;
        if (key2 == message2)
          return key2;
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
      return interpolateMode == "string" ? "".concat(ret.join("")) : UTS.JSON.stringify(ret);
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
    t(key2, values = null, locale2 = null) {
      const parsedArgs = values !== null && values !== void 0 ? values : new UTSJSONObject({});
      const msg = this._warnDefault(key2, this._interpolate(key2, locale2, parsedArgs, [key2], "string"), parsedArgs, "string");
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
    tc(key2, choice = null, values = null, locale2 = null) {
      const _obj = new UTSJSONObject({ "count": choice, "n": choice });
      const predefined = values == null ? _obj : UTS.isInstanceOf(values, UTSJSONObject) ? UTSJSONObject.assign(_obj, values) : values;
      return this.fetchChoice(this.t(key2, predefined, locale2), choice, locale2);
    }
    /**
     * 日期格式化方法
     * @param date 日期
     * @param key 格式键
     * @param locale 语言
     * @param options 格式化选项
     * @returns 格式化后的日期字符串
     */
    d(date = null, key2 = null, locale2 = null, options = null) {
      if (!this.availabilities.dateTimeFormat) {
        uni.__log__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:604", "无法格式化日期值，因为不支持 Intl.DateTimeFormat. key: ".concat(key2, ", locale: ").concat(locale2, ", options: ").concat(options));
        return "".concat(date);
      }
      return "".concat(date);
    }
    /**
     * 数字格式化方法
     * @param number 数字
     * @param key 格式键
     * @param locale 语言
     * @param options 格式化选项
     * @returns 格式化后的数字字符串
     */
    n(number, key2 = null, locale2 = null, options = null) {
      if (!this.availabilities.numberFormat) {
        uni.__log__("warn", "at uni_modules/lime-i18n/common/composer-class.uts:649", "无法格式化数字值，因为不支持 Intl.NumberFormat. key: ".concat(key2, ", locale: ").concat(locale2, ", options: ").concat(options));
        return number.toString();
      }
      return number.toString();
    }
    /**
     * 设置语言消息
     * @param locale 语言
     * @param message 消息对象
     */
    setLocaleMessage(locale2, message2) {
      const map2 = /* @__PURE__ */ new Map();
      this.messages.value.forEach((value, key2) => {
        map2.set(key2, value);
      });
      map2.set(locale2, message2);
      this.messages.value = map2;
      this.availableLocales = getAllKeys(map2).sort();
    }
    /**
     * 获取语言消息
     * @param locale 语言
     * @returns 消息对象
     */
    getLocaleMessage(locale2) {
      var _a2;
      return (_a2 = UTS.mapGet(this.messages.value, locale2)) !== null && _a2 !== void 0 ? _a2 : new UTSJSONObject({});
    }
    /**
     * 合并语言消息
     * @param locale 语言
     * @param message 消息对象
     */
    mergeLocaleMessage(locale2, message2) {
      const map2 = /* @__PURE__ */ new Map();
      this.messages.value.forEach((value, key2) => {
        if (key2 == locale2) {
          map2.set(key2, UTSJSONObject.assign(new UTSJSONObject({}), value, message2));
        } else {
          map2.set(key2, value);
        }
      });
      this.messages.value = map2;
      this.availableLocales = getAllKeys(map2).sort();
    }
    /**
     * 设置日期时间格式
     * @param locale 语言
     * @param format 格式对象
     */
    setDateTimeFormat(locale2, format) {
      const map2 = /* @__PURE__ */ new Map();
      this._datetimeFormats.value.forEach((value, key2) => {
        map2.set(key2, value);
      });
      map2.set(locale2, format);
      this._datetimeFormats.value = map2;
    }
    /**
     * 获取日期时间格式
     * @param locale 语言
     * @returns 格式对象
     */
    getDateTimeFormat(locale2) {
      var _a2;
      return (_a2 = UTS.mapGet(this._datetimeFormats.value, locale2)) !== null && _a2 !== void 0 ? _a2 : new UTSJSONObject({});
    }
    /**
     * 合并日期时间格式
     * @param locale 语言
     * @param format 格式对象
     */
    mergeDateTimeFormat(locale2, format) {
      const map2 = /* @__PURE__ */ new Map();
      this._datetimeFormats.value.forEach((value, key2) => {
        if (key2 == locale2) {
          map2.set(key2, UTSJSONObject.assign(new UTSJSONObject({}), value, format));
        } else {
          map2.set(key2, value);
        }
      });
      this._datetimeFormats.value = map2;
    }
    /**
     * 设置数字格式
     * @param locale 语言
     * @param format 格式对象
     */
    setNumberFormat(locale2, format) {
      const map2 = /* @__PURE__ */ new Map();
      this._numberFormats.value.forEach((value, key2) => {
        map2.set(key2, value);
      });
      map2.set(locale2, format);
      this._numberFormats.value = map2;
    }
    /**
     * 获取数字格式
     * @param locale 语言
     * @returns 格式对象
     */
    getNumberFormat(locale2) {
      var _a2;
      return (_a2 = UTS.mapGet(this._numberFormats.value, locale2)) !== null && _a2 !== void 0 ? _a2 : new UTSJSONObject({});
    }
    /**
     * 合并数字格式
     * @param locale 语言
     * @param format 格式对象
     */
    mergeNumberFormat(locale2, format) {
      const map2 = /* @__PURE__ */ new Map();
      this._numberFormats.value.forEach((value, key2) => {
        if (key2 == locale2) {
          map2.set(key2, UTSJSONObject.assign(new UTSJSONObject({}), value, format));
        } else {
          map2.set(key2, value);
        }
      });
      this._numberFormats.value = map2;
    }
    /**
     * 设置TabBar
     * @param locale 语言
     * @param tabbar TabBar文本数组
     */
    setTabBar(locale2, tabbar2) {
      const map2 = /* @__PURE__ */ new Map();
      this._tabBars.value.forEach((value, key2) => {
        map2.set(key2, value);
      });
      map2.set(locale2, tabbar2);
      this._tabBars.value = map2;
    }
    /**
     * 获取TabBar
     * @param locale 语言
     * @returns TabBar文本数组
     */
    getTabBar(locale2) {
      var _a2;
      return (_a2 = UTS.mapGet(this._tabBars.value, locale2)) !== null && _a2 !== void 0 ? _a2 : [];
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
    $t(key2, values = null, locale2 = null) {
      const isLocale = typeof values == "string";
      const _values = isLocale ? null : values;
      const _locale = isLocale ? values : locale2;
      return this.global.t(key2, _values, _locale);
    }
    $tc(key2, choice = null, values = null, locale2 = null) {
      const isLocale = typeof values == "string";
      const _values = isLocale ? null : values;
      const _locale = isLocale ? values : locale2;
      return this.global.tc(key2, choice, _values, _locale);
    }
    $d(date = null, key2 = null, locale2 = null, options = null) {
      return this.global.d(date, key2, locale2, options);
    }
    $n(number, key2 = null, locale2 = null, options = null) {
      const _locale = typeof locale2 == "string" ? locale2 : null;
      const _options = typeof locale2 == "object" && locale2 != null ? locale2 : options;
      return this.global.n(number, key2, _locale, _options);
    }
    get install() {
      const _install = (app2 = null) => {
        app2.config.globalProperties.$i18n = lime_i18n;
        app2.config.globalProperties.$t = function(key2, values = null, locale2 = null) {
          const isLocale = typeof values == "string";
          const _values = isLocale ? null : values;
          const _locale = isLocale ? values : locale2;
          return lime_i18n.global.t(key2, _values, _locale);
        };
        app2.config.globalProperties.$tc = function(key2, choice = null, values = null, locale2 = null) {
          const isLocale = typeof values == "string";
          const _values = isLocale ? null : values;
          const _locale = isLocale ? values : locale2;
          return lime_i18n.global.tc(key2, choice, _values, _locale);
        };
        app2.config.globalProperties.$d = function(date = null, key2 = null, locale2 = null, options = null) {
          return lime_i18n.global.d(date, key2, locale2, options);
        };
        app2.config.globalProperties.$n = function(number, key2 = null, locale2 = null, options = null) {
          const _locale = typeof locale2 == "string" ? locale2 : null;
          const _options = typeof locale2 == "object" && locale2 != null ? locale2 : options;
          return lime_i18n.global.n(number, key2, _locale, _options);
        };
        app2.config.globalProperties.$locale = lime_i18n.global.locale;
      };
      return _install;
    }
  }
  function createI18n(options = new UTSJSONObject({})) {
    lime_i18n = new UvueI18n(options);
    return lime_i18n;
  }
  const message$1 = new UTSJSONObject({
    hello: "{msg}，世界！",
    welcome: "欢迎使用 unibestX！",
    switch_success: "已切换为简体中文"
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
    themeTitle: "主题设置",
    themePreview: "主题色效果预览",
    themeButton: "主题按钮",
    themeSuccess: "主题色切换成功",
    themeModeTitle: "外观模式",
    themeModeAuto: "跟随系统",
    themeModeLight: "浅色",
    themeModeDark: "深色",
    themeModeSuccess: "外观模式切换成功",
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
    switch_success: "Switched to English"
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
    themeTitle: "Theme Settings",
    themePreview: "Theme Color Preview",
    themeButton: "Theme Button",
    themeSuccess: "Theme color updated successfully",
    themeModeTitle: "Appearance",
    themeModeAuto: "Follow System",
    themeModeLight: "Light",
    themeModeDark: "Dark",
    themeModeSuccess: "Appearance updated",
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
    locale: getDefaultLocale(),
    fallbackLocale: "en-US",
    messages: new UTSJSONObject({
      "zh-CN": zhCN,
      "en-US": enUS
    })
  }));
  const useAppStore = /* @__PURE__ */ defineStore("app", () => {
    var _a2;
    const state = vue.reactive({
      theme: getDefaultTheme(),
      locale: getDefaultLocale(),
      themeMode: "auto",
      isDark: isDarkMode("auto"),
      mode: "vapor"
    });
    let _themeModeInited = false;
    themeColor.value = state.theme;
    applyThemeColor(state.theme);
    applyThemeMode(state.themeMode, state.isDark);
    if (((_a2 = i18n === null || i18n === void 0 ? void 0 : i18n.global) === null || _a2 === void 0 ? void 0 : _a2.locale) != null) {
      i18n.global.locale.value = state.locale;
    }
    function setTheme(theme) {
      state.theme = theme;
      themeColor.value = theme;
    }
    function refreshIsDark() {
      const mode = state.themeMode;
      if (mode == "light") {
        state.isDark = false;
      } else if (mode == "dark") {
        state.isDark = true;
      } else {
        state.isDark = getSystemTheme() == "dark";
      }
      applyThemeMode(mode, state.isDark);
    }
    function setThemeMode(mode) {
      state.themeMode = mode;
      uni.setAppTheme({ theme: mode });
      refreshIsDark();
    }
    function initThemeMode() {
      if (!_themeModeInited) {
        _themeModeInited = true;
        uni.onAppThemeChange((res) => {
          if (state.themeMode != "auto") {
            state.isDark = res.appTheme == "dark";
          }
        });
        uni.onOsThemeChange((res) => {
          if (state.themeMode == "auto") {
            state.isDark = res.osTheme == "dark";
          }
        });
      }
      uni.setAppTheme({ theme: state.themeMode });
      refreshIsDark();
    }
    function setLocale(locale2) {
      var _a3;
      state.locale = locale2;
      if (((_a3 = i18n === null || i18n === void 0 ? void 0 : i18n.global) === null || _a3 === void 0 ? void 0 : _a3.locale) != null) {
        i18n.global.locale.value = locale2;
      }
    }
    return {
      state,
      setTheme,
      initThemeMode,
      setThemeMode,
      refreshIsDark,
      setLocale
    };
  }, {
    persist: true
  });
  const useTokenStore = /* @__PURE__ */ defineStore("token", () => {
    const state = vue.reactive({
      token: "",
      expiresIn: 0,
      accessToken: "",
      accessExpiresIn: 0,
      refreshToken: "",
      refreshExpiresIn: 0,
      tokenExpireTime: 0
    });
    function setSingleToken(res) {
      state.token = res.token;
      state.expiresIn = res.expiresIn;
      const expireTime = Date.now() + res.expiresIn * 1e3;
      state.tokenExpireTime = expireTime;
      uni.setStorageSync("accessTokenExpireTime", expireTime);
    }
    function setDoubleToken(res) {
      state.accessToken = res.accessToken;
      state.accessExpiresIn = res.accessExpiresIn;
      state.refreshToken = res.refreshToken;
      state.refreshExpiresIn = res.refreshExpiresIn;
      const now = Date.now();
      const expireTime = now + res.accessExpiresIn * 1e3;
      state.tokenExpireTime = expireTime;
      uni.setStorageSync("accessTokenExpireTime", expireTime);
      uni.setStorageSync("refreshTokenExpireTime", now + res.refreshExpiresIn * 1e3);
    }
    function clearToken() {
      state.token = "";
      state.expiresIn = 0;
      state.accessToken = "";
      state.accessExpiresIn = 0;
      state.refreshToken = "";
      state.refreshExpiresIn = 0;
      state.tokenExpireTime = 0;
      uni.removeStorageSync("accessTokenExpireTime");
      uni.removeStorageSync("refreshTokenExpireTime");
    }
    function getToken() {
      if (state.accessToken != "") {
        return state.accessToken;
      }
      return state.token;
    }
    function isTokenValid() {
      if (state.tokenExpireTime <= 0) {
        const val = uni.getStorageSync("accessTokenExpireTime");
        if (val != null && val !== "") {
          const num = Number.parseFloat(val.toString());
          if (!isNaN(num)) {
            state.tokenExpireTime = num;
          }
        }
      }
      return state.tokenExpireTime > 0 && Date.now() < state.tokenExpireTime;
    }
    function isRefreshTokenValid() {
      const val = uni.getStorageSync("refreshTokenExpireTime");
      if (val == null || val === "") {
        return false;
      }
      const num = Number.parseFloat(val.toString());
      if (isNaN(num)) {
        return false;
      }
      return Date.now() < num;
    }
    function hasLoginInfo() {
      return state.accessToken != "" || state.token != "";
    }
    function hasValidLogin() {
      return hasLoginInfo() && isTokenValid();
    }
    return {
      state,
      setSingleToken,
      setDoubleToken,
      clearToken,
      getToken,
      isTokenValid,
      isRefreshTokenValid,
      hasLoginInfo,
      hasValidLogin
    };
  }, {
    persist: true
  });
  const DEFAULT_AVATAR = "/static/logo.png";
  const defaultUserInfo = {
    userId: -1,
    username: "",
    nickname: "",
    avatar: DEFAULT_AVATAR
  };
  const useUserStore = /* @__PURE__ */ defineStore("user", () => {
    const state = vue.reactive({
      userInfo: {
        userId: defaultUserInfo.userId,
        username: defaultUserInfo.username,
        nickname: defaultUserInfo.nickname,
        avatar: defaultUserInfo.avatar
      }
    });
    function setUserInfo(info) {
      state.userInfo = {
        userId: info.userId,
        username: info.username,
        nickname: info.nickname,
        avatar: info.avatar != "" ? info.avatar : DEFAULT_AVATAR
      };
    }
    function setAvatar(avatar) {
      state.userInfo.avatar = avatar;
    }
    function clearUserInfo() {
      state.userInfo = {
        userId: defaultUserInfo.userId,
        username: defaultUserInfo.username,
        nickname: defaultUserInfo.nickname,
        avatar: defaultUserInfo.avatar
      };
      uni.removeStorageSync("user");
    }
    return {
      state,
      setUserInfo,
      setAvatar,
      clearUserInfo
    };
  }, {
    persist: true
  });
  const pinia = createPinia();
  pinia.use(createPersistedState({
    key: (id) => {
      return "pinia:".concat(id);
    },
    storage: {
      getItem: (key2) => {
        const val = uni.getStorageSync(key2);
        return val != null && val !== "" ? "".concat(val) : null;
      },
      setItem: (key2, value) => {
        uni.setStorageSync(key2, value);
      }
    }
  }));
  setActivePinia(pinia);
  var _a;
  const TABBAR_HEIGHT = TABBAR_BASE_HEIGHT;
  const TABBAR_CONTAINER_HEIGHT = 80;
  class TabbarStrategyType extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            NO_TABBAR: { type: Number, optional: false },
            NATIVE_TABBAR: { type: Number, optional: false },
            CUSTOM_TABBAR_WITH_NATIVE: { type: Number, optional: false },
            CUSTOM_TABBAR_WITHOUT_NATIVE: { type: Number, optional: false },
            SINGLE_PAGE_TABBAR: { type: Number, optional: false },
            CUSTOM_TABBAR: { type: Number, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = TabbarStrategyType.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.NO_TABBAR = this.__props__.NO_TABBAR;
      this.NATIVE_TABBAR = this.__props__.NATIVE_TABBAR;
      this.CUSTOM_TABBAR_WITH_NATIVE = this.__props__.CUSTOM_TABBAR_WITH_NATIVE;
      this.CUSTOM_TABBAR_WITHOUT_NATIVE = this.__props__.CUSTOM_TABBAR_WITHOUT_NATIVE;
      this.SINGLE_PAGE_TABBAR = this.__props__.SINGLE_PAGE_TABBAR;
      this.CUSTOM_TABBAR = this.__props__.CUSTOM_TABBAR;
      delete this.__props__;
    }
  }
  const TABBAR_STRATEGY_MAP = new TabbarStrategyType({
    NO_TABBAR: 0,
    NATIVE_TABBAR: 1,
    CUSTOM_TABBAR_WITH_NATIVE: 2,
    CUSTOM_TABBAR_WITHOUT_NATIVE: 3,
    SINGLE_PAGE_TABBAR: 4,
    CUSTOM_TABBAR: 2
  });
  function parseTabbarStrategy() {
    var _a2;
    const envMode = "".concat((_a2 = "4") !== null && _a2 !== void 0 ? _a2 : "1").trim();
    if (envMode == "0" || envMode == "NO_TABBAR") {
      return TABBAR_STRATEGY_MAP.NO_TABBAR;
    }
    if (envMode == "2" || envMode == "CUSTOM_TABBAR" || envMode == "CUSTOM_TABBAR_WITH_NATIVE") {
      return TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITH_NATIVE;
    }
    if (envMode == "3" || envMode == "CUSTOM_TABBAR_WITHOUT_NATIVE") {
      return TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITHOUT_NATIVE;
    }
    if (envMode == "4" || envMode == "SINGLE_PAGE_TABBAR") {
      return TABBAR_STRATEGY_MAP.SINGLE_PAGE_TABBAR;
    }
    return TABBAR_STRATEGY_MAP.NATIVE_TABBAR;
  }
  const selectedTabbarStrategy = parseTabbarStrategy();
  selectedTabbarStrategy != TABBAR_STRATEGY_MAP.NO_TABBAR;
  const customTabbarEnable = selectedTabbarStrategy == TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITH_NATIVE || selectedTabbarStrategy == TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITHOUT_NATIVE;
  const isSinglePageTabbar = selectedTabbarStrategy == TABBAR_STRATEGY_MAP.SINGLE_PAGE_TABBAR;
  selectedTabbarStrategy == TABBAR_STRATEGY_MAP.NO_TABBAR;
  const tabbarType = (_a = customTabbarConfig.type) !== null && _a !== void 0 ? _a : "default";
  selectedTabbarStrategy == TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITH_NATIVE;
  const isNativeTabbar = selectedTabbarStrategy == TABBAR_STRATEGY_MAP.NATIVE_TABBAR;
  selectedTabbarStrategy == TABBAR_STRATEGY_MAP.NATIVE_TABBAR || selectedTabbarStrategy == TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITH_NATIVE;
  const themeTokens = vue.computed(() => {
    return getThemeTokens(useAppStore().state.isDark);
  });
  const safeAreaBottom = vue.computed(() => {
    const insets = safeAreaInsets.value;
    if (insets != null) {
      return insets.bottom;
    }
    return 0;
  });
  const isVersionGte525 = vue.computed(() => {
    return false;
  });
  const tabbarPlaceholderHeight = vue.computed(() => {
    return TABBAR_HEIGHT + safeAreaBottom.value;
  });
  function handleClickBulge(url = "/src/pages/ai/ai") {
    uni.navigateTo({
      url
    });
  }
  function switchTabbar(url) {
    setCurIdxByPath(url);
    if (isSinglePageTabbar) {
      try {
        const pages2 = getCurrentPages();
        if (pages2.length > 0) {
          const currentRoute = pages2[pages2.length - 1].route;
          const normalizedRoute = currentRoute.startsWith("/") ? currentRoute : "/".concat(currentRoute);
          if (normalizedRoute == "/pages/index/index" || normalizedRoute == "/src/pages/index/index") {
            return null;
          }
        }
      } catch (_a2) {
      }
      uni.redirectTo({
        url: "/src/pages/index/index",
        fail: (_err = null) => {
          uni.reLaunch({
            url: "/src/pages/index/index"
          });
        }
      });
      return null;
    }
    if (selectedTabbarStrategy == TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITHOUT_NATIVE || selectedTabbarStrategy == TABBAR_STRATEGY_MAP.NO_TABBAR) {
      uni.redirectTo({
        url,
        fail: (_err = null) => {
          uni.navigateTo({
            url,
            fail: () => {
              uni.showToast({
                title: "沙盒调试中：目标页面未编译",
                icon: "none"
              });
            }
          });
        }
      });
    } else {
      uni.switchTab({
        url,
        fail: (_err = null) => {
          uni.redirectTo({
            url,
            fail: () => {
              uni.showToast({
                title: "沙盒调试中：目标页面未编译",
                icon: "none"
              });
            }
          });
        }
      });
    }
  }
  let isSwitchingTab = false;
  function handleTabbarClick(index) {
    if (index == curIdx.value || isSwitchingTab) {
      return null;
    }
    const list = tabbarList;
    if (list.length <= index) {
      return null;
    }
    if (isSinglePageTabbar) {
      setCurIdx(index);
      return null;
    }
    if (list[index].isBulge) {
      handleClickBulge(list[index].pagePath.length > 0 ? list[index].pagePath : "/src/pages/ai/ai");
      return null;
    }
    isSwitchingTab = true;
    const url = list[index].pagePath;
    setCurIdx(index);
    switchTabbar(url);
    setTimeout(() => {
      isSwitchingTab = false;
    }, 250);
  }
  function safeHideNativeTabBar() {
    try {
      uni.hideTabBar(new UTSJSONObject({
        animation: false,
        fail: (err = null) => {
          uni.__log__("log", "at src/tabbar/helper/index.uts:250", "hideTabBar fail: ", err);
        }
      }));
    } catch (_a2) {
    }
  }
  function initNativeMidButtonTap() {
    if (!isNativeTabbar || customTabbarConfig.midButton == null) {
      return null;
    }
    try {
      const mid = customTabbarConfig.midButton;
      const targetUrl = mid != null && mid.pagePath != null && mid.pagePath.length > 0 ? mid.pagePath : "/src/pages/ai/ai";
      uni.onTabBarMidButtonTap(() => {
        handleClickBulge(targetUrl);
      });
    } catch (e2) {
      uni.__log__("warn", "at src/tabbar/helper/index.uts:277", "onTabBarMidButtonTap registration error", e2);
    }
  }
  function onTabShow(index, callback, immediate = false) {
    if (immediate && curIdx.value == index) {
      callback();
    }
    vue.watch(curIdx, (newVal, oldVal) => {
      if (newVal == index && oldVal != index) {
        callback();
      }
    });
  }
  function t$1(key2, named = null) {
    let res = "";
    if (named != null) {
      res = i18n.global.t(key2, named);
    } else {
      res = i18n.global.t(key2);
    }
    return res != null && res.length > 0 ? res : key2;
  }
  function $t$1(key2, named = null) {
    return t$1(key2, named);
  }
  function getI18nText(key2) {
    let cleanKey = key2;
    if (cleanKey.startsWith("%") && cleanKey.endsWith("%") && cleanKey.length > 2) {
      cleanKey = cleanKey.substring(1, cleanKey.length - 1);
    }
    const res = i18n.global.t(cleanKey);
    return res != null && res.length > 0 ? res : cleanKey;
  }
  function setTabbarItem() {
    for (let i2 = 0; i2 < tabbarList.length; i2++) {
      const item = tabbarList[i2];
      const text2 = getI18nText(item.text);
      uni.setTabBarItem({
        index: i2,
        text: text2
      });
    }
  }
  const __className$W = "GenSrcTabbarUiCapsuleIndex";
  const _sfc_main$X = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$W,
    __filename: "src/tabbar/ui/capsule/index.uvue",
    __name: "index",
    props: {
      /** 悬浮 TabBar 容器高度（默认 64px） */
      height: {
        type: Number,
        default: 64
      },
      /** 底部与屏幕边缘的间距（默认 12px） */
      bottomOffset: {
        type: Number,
        default: 12
      },
      /** 是否渲染底部占位块（默认 false） */
      showPlaceholder: {
        type: Boolean,
        default: false
      }
    },
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcTabbarUiCapsuleIndexSharedData", sharedDataClassId: 0 })));
      const appStore = useAppStore();
      const themeTokens2 = vue.computed(() => {
        return getThemeTokens(appStore.state.isDark);
      });
      const safeAreaBottom2 = vue.computed(() => {
        const insets = safeAreaInsets.value;
        return insets != null ? insets.bottom : 0;
      });
      const activeThemeColor = vue.computed(() => {
        return themeColor.value.length > 0 ? themeColor.value : appStore.state.theme;
      });
      const activeItemBgColor = vue.computed(() => {
        if (appStore.state.isDark) {
          return "rgba(255, 255, 255, 0.12)";
        }
        const color = activeThemeColor.value;
        return "".concat(color, "18");
      });
      const sliderWidthPercent = vue.computed(() => {
        if (tabbarList.length == 0) {
          return 25;
        }
        return 100 / tabbarList.length;
      });
      const sliderStyle = vue.computed(() => {
        const widthPct = sliderWidthPercent.value;
        const offsetPct = curIdx.value * 100;
        return new UTSJSONObject({
          width: "".concat(widthPct, "%"),
          transform: "translateX(".concat(offsetPct, "%)"),
          transitionProperty: "transform",
          transitionDuration: "240ms",
          transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)"
        });
      });
      vue.onMounted(() => {
        syncCurIdxByCurrentPage();
        safeHideNativeTabBar();
      });
      function onTabClick(index) {
        handleTabbarClick(index);
      }
      function getText(text2) {
        return $t$1(text2);
      }
      function getItemIcon(index) {
        if (tabbarList.length <= index) {
          return "";
        }
        const item = tabbarList[index];
        if (curIdx.value == index && item.iconActive.length > 0) {
          return item.iconActive;
        }
        return item.icon;
      }
      function getItemIconPath(index) {
        if (tabbarList.length <= index) {
          return "";
        }
        const item = tabbarList[index];
        if (curIdx.value == index && item.selectedIconPath != null && item.selectedIconPath.length > 0) {
          return item.selectedIconPath;
        }
        return item.iconPath != null ? item.iconPath : "";
      }
      function getItemIconColor(index) {
        return curIdx.value == index ? activeThemeColor.value : themeTokens2.value.tabColor;
      }
      function getItemTextColor(index) {
        return curIdx.value == index ? activeThemeColor.value : themeTokens2.value.tabColor;
      }
      function getItemFontWeight(index) {
        return curIdx.value == index ? "600" : "normal";
      }
      return () => {
        "raw js";
        const _component_uni_icons = __easycom_0$2;
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 0, vue.toSharedDataBoolean(__props.showPlaceholder));
        }, () => {
          vue.renderSharedDataEffect(() => {
            return vue.setSharedDataStyle(__sharedData, 1, { height: "".concat(__props.height + __props.bottomOffset * 2 + vue.unref(safeAreaBottom2), "px") });
          });
        });
        vue.renderSharedDataEffect(() => {
          const _themeTokens = vue.unref(themeTokens2);
          vue.setSharedDataStyle(__sharedData, 3, {
            bottom: "".concat(__props.bottomOffset + vue.unref(safeAreaBottom2), "px"),
            height: "".concat(__props.height, "px"),
            backgroundColor: _themeTokens.tabBg,
            borderColor: _themeTokens.tabBorder
          });
          vue.setSharedDataStyle(__sharedData, 4, vue.unref(sliderStyle));
          vue.setSharedDataStyle(__sharedData, 5, { backgroundColor: vue.unref(activeItemBgColor) });
        });
        vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 2, vue.createSharedDataVFor(__sharedDataScope, () => {
          return new UniDynamicSharedData(__sharedDataScope, { bundleKey: "".concat(__className$W, "SharedData"), sharedDataClassId: 1 });
        })), () => {
          return vue.unref(tabbarList);
        }, (__sharedData_VFor0, _for_item0, _for_key0) => {
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData_VFor0, 1, vue.toSharedDataBoolean(_for_item0.value.iconType == "icon"));
          }, () => {
            const n10 = vue.createSharedDataComponentWithFallback(_component_uni_icons, "163a5d01-" + _for_key0.value, {
              type: () => {
                return getItemIcon(_for_key0.value);
              },
              size: 20,
              color: () => {
                return getItemIconColor(_for_key0.value);
              }
            });
            vue.setSharedData(__sharedData_VFor0, 2, n10 == null ? void 0 : n10.sharedData);
          }, () => {
            vue.renderSharedDataEffect(() => {
              return vue.setSharedDataAttr(__sharedData_VFor0, 3, vue.toSharedDataString(getItemIconPath(_for_key0.value)));
            });
          }, 517);
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData_VFor0, 4, vue.toSharedDataBoolean(_for_item0.value.badge != null && "".concat(_for_item0.value.badge) == "dot"));
          }, () => {
          }, () => {
            return vue.createSharedDataIf(() => {
              return vue.setSharedData(__sharedData_VFor0, 5, vue.toSharedDataBoolean(_for_item0.value.badge != null && "".concat(_for_item0.value.badge) != "dot"));
            }, () => {
              vue.renderSharedDataEffect(() => {
                return vue.setSharedData(__sharedData_VFor0, 6, vue.toDisplayString(_for_item0.value.badge));
              });
            });
          }, 773);
          vue.setSharedDataEvent(__sharedData_VFor0, 7, () => {
            return onTabClick(_for_key0.value);
          });
          vue.renderSharedDataEffect(() => {
            const _index = _for_key0.value;
            vue.setSharedDataStyle(__sharedData_VFor0, 8, {
              color: getItemTextColor(_index),
              fontWeight: getItemFontWeight(_index)
            });
            vue.setSharedData(__sharedData_VFor0, 9, vue.toDisplayString(getText(_for_item0.value.text)));
          });
          return null;
        }, (__sharedData_VFor0, item, index) => {
          return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(index));
        });
        return __sharedData;
      };
    }
  });
  const _style_0$X = {};
  const _style_1$B = {};
  const CapsuleTabbar = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["styles", [_style_0$X, _style_1$B]]]);
  const __className$V = "GenSrcTabbarUiDefaultTabbarItem";
  const _sfc_main$W = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$V,
    __filename: "src/tabbar/ui/default/TabbarItem.uvue",
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
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcTabbarUiDefaultTabbarItemSharedData", sharedDataClassId: 0 })));
      const props = __props;
      const tabbarItem = vue.computed(() => {
        return props.item;
      });
      const appStore = useAppStore();
      const themeTokens2 = vue.computed(() => {
        return getThemeTokens(appStore.state.isDark);
      });
      const activeThemeColor = vue.computed(() => {
        return themeColor.value.length > 0 ? themeColor.value : appStore.state.theme;
      });
      function getIcon() {
        if (curIdx.value == props.index && tabbarItem.value.iconActive.length > 0) {
          return tabbarItem.value.iconActive;
        }
        return tabbarItem.value.icon;
      }
      function getIconPath() {
        var _a2;
        if (curIdx.value == props.index && tabbarItem.value.selectedIconPath != null && tabbarItem.value.selectedIconPath.length > 0) {
          return tabbarItem.value.selectedIconPath;
        }
        return (_a2 = tabbarItem.value.iconPath) !== null && _a2 !== void 0 ? _a2 : "";
      }
      const textColor = vue.computed(() => {
        return curIdx.value == props.index ? activeThemeColor.value : themeTokens2.value.tabColor;
      });
      const iconColor = vue.computed(() => {
        return curIdx.value == props.index ? activeThemeColor.value : themeTokens2.value.tabColor;
      });
      const badgeText = vue.computed(() => {
        const badge = tabbarItem.value.badge;
        if (typeof badge == "number") {
          return badge > 99 ? "99+" : "".concat(badge);
        }
        return "";
      });
      const isDotBadge = vue.computed(() => {
        return tabbarItem.value.badge == "dot";
      });
      const isNumberBadge = vue.computed(() => {
        return typeof tabbarItem.value.badge == "number";
      });
      function getText(text2) {
        return $t$1(text2);
      }
      return () => {
        "raw js";
        const _component_uni_icons = __easycom_0$2;
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 0, vue.toSharedDataBoolean(__props.isBulge));
        }, () => {
          vue.renderSharedDataEffect(() => {
            return vue.setSharedDataStyle(__sharedData, 7, { backgroundColor: vue.unref(activeThemeColor) });
          });
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 4, vue.toSharedDataBoolean(vue.unref(tabbarItem).iconType == "icon"));
          }, () => {
            const n4 = vue.createSharedDataComponentWithFallback(_component_uni_icons, "32d81811", {
              type: () => {
                return getIcon();
              },
              size: 28,
              color: "#ffffff"
            });
            vue.setSharedData(__sharedData, 5, n4 == null ? void 0 : n4.sharedData);
          }, () => {
            vue.renderSharedDataEffect(() => {
              return vue.setSharedDataAttr(__sharedData, 6, vue.toSharedDataString(getIconPath()));
            });
          }, 261);
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 1, vue.toSharedDataBoolean(vue.unref(tabbarItem).text.length > 0));
          }, () => {
            vue.renderSharedDataEffect(() => {
              vue.setSharedDataStyle(__sharedData, 2, { color: vue.unref(textColor) });
              vue.setSharedData(__sharedData, 3, vue.toDisplayString(getText(vue.unref(tabbarItem).text)));
            });
          });
        }, () => {
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 8, vue.toSharedDataBoolean(vue.unref(tabbarItem).iconType == "icon"));
          }, () => {
            const n15 = vue.createSharedDataComponentWithFallback(_component_uni_icons, "32d82eaf", {
              type: () => {
                return getIcon();
              },
              size: 22,
              color: () => {
                return vue.unref(iconColor);
              }
            });
            vue.setSharedData(__sharedData, 9, n15 == null ? void 0 : n15.sharedData);
          }, () => {
            vue.renderSharedDataEffect(() => {
              return vue.setSharedDataAttr(__sharedData, 10, vue.toSharedDataString(getIconPath()));
            });
          }, 1029);
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 11, vue.toSharedDataBoolean(vue.unref(isNumberBadge)));
          }, () => {
            vue.renderSharedDataEffect(() => {
              return vue.setSharedData(__sharedData, 12, vue.toDisplayString(vue.unref(badgeText)));
            });
          }, () => {
            return vue.createSharedDataIf(() => {
              return vue.setSharedData(__sharedData, 13, vue.toSharedDataBoolean(vue.unref(isDotBadge)));
            }, () => {
            });
          }, 1285);
          vue.renderSharedDataEffect(() => {
            vue.setSharedDataStyle(__sharedData, 14, { color: vue.unref(textColor), fontWeight: vue.unref(curIdx) == __props.index ? "600" : "normal" });
            vue.setSharedData(__sharedData, 15, vue.toDisplayString(getText(vue.unref(tabbarItem).text)));
          });
        }, 773);
        return __sharedData;
      };
    }
  });
  const _style_0$W = {};
  const _style_1$A = {};
  const TabbarItem = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["styles", [_style_0$W, _style_1$A]]]);
  const __className$U = "GenSrcTabbarUiDefaultIndex";
  const _sfc_main$V = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$U,
    __filename: "src/tabbar/ui/default/index.uvue",
    __name: "index",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcTabbarUiDefaultIndexSharedData", sharedDataClassId: 0 })));
      vue.onMounted(() => {
        syncCurIdxByCurrentPage();
        safeHideNativeTabBar();
      });
      function onTabClick(index) {
        handleTabbarClick(index);
      }
      return () => {
        "raw js";
        vue.renderSharedDataEffect(() => {
          const _safeAreaBottom = vue.unref(safeAreaBottom);
          const _themeTokens = vue.unref(themeTokens);
          vue.setSharedDataClass(__sharedData, 1, ["weapp-tw-border tabbar-placeholder", { "tabbar-placeholder-absolute": vue.unref(isVersionGte525) }]);
          vue.setSharedDataStyle(__sharedData, 2, { height: "".concat(vue.unref(tabbarPlaceholderHeight), "px") });
          vue.setSharedDataStyle(__sharedData, 3, { height: "".concat(vue.unref(TABBAR_CONTAINER_HEIGHT) + _safeAreaBottom, "px") });
          vue.setSharedDataStyle(__sharedData, 4, { height: "".concat(vue.unref(TABBAR_HEIGHT) + _safeAreaBottom, "px"), backgroundColor: _themeTokens.tabBg, borderTopColor: _themeTokens.tabBorder });
        });
        vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 0, vue.createSharedDataVFor(__sharedDataScope, () => {
          return new UniDynamicSharedData(__sharedDataScope, { bundleKey: "".concat(__className$U, "SharedData"), sharedDataClassId: 1 });
        })), () => {
          return vue.unref(tabbarList);
        }, (__sharedData_VFor0, _for_item0, _for_key0) => {
          vue.renderSharedDataEffect(() => {
            return vue.setSharedDataStyle(__sharedData_VFor0, 3, { height: "".concat(_for_item0.value.isBulge ? vue.unref(TABBAR_CONTAINER_HEIGHT) : vue.unref(TABBAR_HEIGHT), "px") });
          });
          const n3 = vue.createSharedDataComponent(TabbarItem, "4267c8ec-" + _for_key0.value, {
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
            return onTabClick(_for_key0.value);
          });
          return null;
        }, (__sharedData_VFor0, item, index) => {
          return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(index));
        }, 1);
        vue.renderSharedDataEffect(() => {
          return vue.setSharedDataStyle(__sharedData, 5, { height: "".concat(vue.unref(safeAreaBottom), "px"), backgroundColor: vue.unref(themeTokens).tabBg });
        });
        return __sharedData;
      };
    }
  });
  const _style_0$V = {};
  const _style_1$z = {};
  const DefaultTabbar = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["styles", [_style_0$V, _style_1$z]]]);
  const __className$T = "GenSrcTabbarTabbar";
  const _sfc_main$U = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$T,
    __filename: "src/tabbar/tabbar.uvue",
    __name: "tabbar",
    props: {
      /** 自定义 TabBar 风格形态（若不指定则默认读取 config.uts 中的 type） */
      type: {
        type: String,
        default: ""
      }
    },
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcTabbarTabbarSharedData", sharedDataClassId: 0 })));
      const props = __props;
      const activeType = vue.computed(() => {
        if (props.type != "") {
          return props.type;
        }
        return tabbarType;
      });
      return () => {
        "raw js";
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 0, vue.toSharedDataBoolean(activeType.value == "capsule"));
        }, () => {
          const n2 = vue.createSharedDataComponent(
            CapsuleTabbar,
            "bff9ca4c",
            null,
            null,
            1
            /* SINGLE_ROOT */
          );
          vue.setSharedData(__sharedData, 1, n2.sharedData);
        }, () => {
          return vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 2, vue.toSharedDataBoolean(activeType.value == "default"));
          }, () => {
            const n4 = vue.createSharedDataComponent(
              DefaultTabbar,
              "60603841",
              null,
              null,
              1
              /* SINGLE_ROOT */
            );
            vue.setSharedData(__sharedData, 3, n4.sharedData);
          }, () => {
            const n7 = vue.createSharedDataComponent(
              DefaultTabbar,
              "60603c03",
              null,
              null,
              1
              /* SINGLE_ROOT */
            );
            vue.setSharedData(__sharedData, 4, n7.sharedData);
          }, 517);
        }, 261);
        return __sharedData;
      };
    }
  });
  const _style_0$U = {};
  const Tabbar = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["styles", [_style_0$U]]]);
  const __className$S = "GenAppku";
  const _sfc_main$T = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$S,
    __filename: "App.ku.uvue",
    __name: "App.ku",
    props: {
      /** 是否显示左侧返回按钮（默认 true） */
      showBack: {
        type: Boolean,
        default: true
      },
      /** 是否隐藏导航栏（默认 false） */
      hideNavbar: {
        type: Boolean,
        default: false
      },
      /** 是否隐藏状态栏占位（默认 false，为 true 时不占用状态栏空间） */
      hideStatusBar: {
        type: Boolean,
        default: false
      },
      /** 页面布局模板标识（非 navbar 布局按无导航处理，参与可用高度计算时不扣状态栏/导航栏） */
      layout: {
        type: String,
        default: ""
      },
      /** 是否启用内容区域的自定义下拉刷新 */
      enablePullDownRefresh: {
        type: Boolean,
        default: false
      },
      /** 页面根容器自定义类名（页面 customPageClass） */
      customPageClass: {
        type: String,
        default: ""
      },
      /** 页面根容器自定义行内样式（页面 customPageStyle） */
      customPageStyle: {
        type: String,
        default: ""
      },
      /** 页面 style 完整配置对象（未拍平：navigationStyle / navigationBarTitleText / navigationBarBackgroundColor 等） */
      pageStyle: {
        type: Object,
        default: () => {
          return new UTSJSONObject({});
        }
      }
    },
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenAppkuSharedData", sharedDataClassId: 0 })));
      const props = __props;
      const appStore = useAppStore();
      vue.computed(() => {
        var _a2;
        return (_a2 = props.pageStyle) !== null && _a2 !== void 0 ? _a2 : new UTSJSONObject({});
      });
      const themeStyle = vue.computed(() => {
        return getRootThemeStyle(appStore.state.theme, appStore.state.isDark);
      });
      const isCurrentPageTabbar = vue.ref(false);
      vue.onMounted(() => {
        applyNavbarTheme(appStore.state.isDark);
        try {
          const pages2 = getCurrentPages();
          if (pages2.length > 0) {
            const route = pages2[pages2.length - 1].route;
            if (route != null && route.length > 0) {
              const path = route.startsWith("/") ? route : "/".concat(route);
              const isTabbar = isPageTabbar(path);
              isCurrentPageTabbar.value = isTabbar;
              if (isTabbar) {
                syncCurIdxByCurrentPage();
              }
            }
          }
        } catch (_a2) {
        }
      });
      vue.watch(() => {
        return appStore.state.isDark;
      }, (newVal) => {
        applyNavbarTheme(newVal);
      });
      let activeHideNavbar = props.hideNavbar;
      let activeHideStatusBar = props.hideStatusBar;
      function doUpdateHeight(overrideHideNavbar = null, overrideHideStatusBar = null) {
        var _a2;
        if (overrideHideNavbar != null) {
          activeHideNavbar = overrideHideNavbar;
        }
        if (overrideHideStatusBar != null) {
          activeHideStatusBar = overrideHideStatusBar;
        }
        updateAvailableHeight(new AppKuHeightProps({
          hideNavbar: activeHideNavbar,
          hideStatusBar: activeHideStatusBar,
          pageStyle: (_a2 = props.pageStyle) !== null && _a2 !== void 0 ? _a2 : new UTSJSONObject({}),
          layout: props.layout
        }), selectedTabbarStrategy);
      }
      vue.onShow(() => {
        setTimeout(() => {
          doUpdateHeight();
        }, 100);
      });
      vue.watch(() => {
        return props.hideStatusBar;
      }, (newVal) => {
        doUpdateHeight(null, newVal);
      });
      vue.watch(() => {
        return props.hideNavbar;
      }, (newVal) => {
        doUpdateHeight(newVal, null);
      });
      uni.$on("setHideStatusBar", (hide = null) => {
        if (typeof hide == "boolean") {
          doUpdateHeight(null, hide);
        }
      });
      uni.$on("setHideNavbar", (hide = null) => {
        if (typeof hide == "boolean") {
          doUpdateHeight(hide, null);
        }
      });
      return () => {
        "raw js";
        vue.renderSharedDataEffect(() => {
          vue.setSharedDataClass(__sharedData, 2, ["weapp-tw-border root-container flex flex-col flex-1", { dark: vue.unref(appStore).state.isDark }]);
          vue.setSharedDataStyle(__sharedData, 3, ["flex: 1; display: flex; flex-direction: column;", themeStyle.value]);
        });
        vue.createSharedDataSlot("default", null, null);
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 0, vue.toSharedDataBoolean(vue.unref(customTabbarEnable) && isCurrentPageTabbar.value));
        }, () => {
          const n4 = vue.createSharedDataComponent(Tabbar, "ca371270");
          vue.setSharedData(__sharedData, 1, n4.sharedData);
        });
        return __sharedData;
      };
    }
  });
  const _style_0$T = {};
  const _style_1$y = {};
  const AppKu = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["styles", [_style_0$T, _style_1$y]]]);
  const __className$R = "GenSrcComponentsNavBarNavBar";
  const _sfc_main$S = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$R,
    __filename: "src/components/NavBar/NavBar.uvue",
    __name: "NavBar",
    props: {
      title: {
        type: String,
        default: ""
      },
      titleColor: {
        type: String,
        default: ""
      },
      bgColor: {
        type: String,
        default: ""
      },
      fixed: {
        type: Boolean,
        default: true
      },
      placeholder: {
        type: Boolean,
        default: true
      },
      showBack: {
        type: Boolean,
        default: true
      },
      border: {
        type: Boolean,
        default: false
      },
      isNavbarVisible: {
        type: Boolean,
        default: true
      },
      /** 是否隐藏状态栏占位高度（默认 false，若为 true 则状态栏占位高度为 0，实现完全沉浸全屏） */
      hideStatusBar: {
        type: Boolean,
        default: false
      }
    },
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcComponentsNavBarNavBarSharedData", sharedDataClassId: 0 })));
      const props = __props;
      const themeTokens2 = vue.computed(() => {
        return getThemeTokens(useAppStore().state.isDark);
      });
      const effectiveBgColor = vue.computed(() => {
        return props.bgColor != "" ? props.bgColor : themeTokens2.value.navBg;
      });
      const effectiveTitleColor = vue.computed(() => {
        return props.titleColor != "" ? props.titleColor : themeTokens2.value.navText;
      });
      const statusBarHeight2 = vue.computed(() => {
        const insets = safeAreaInsets.value;
        if (insets != null && insets.top > 0) {
          return insets.top;
        }
        const info = systemInfo.value;
        if (info != null && info.statusBarHeight > 0) {
          return info.statusBarHeight;
        }
        return 0;
      });
      function handleBack() {
        if (!props.showBack) {
          return null;
        }
        const pages2 = getCurrentPages();
        if (pages2.length > 1) {
          uni.navigateBack(new UTSJSONObject({
            delta: 1
          }));
        } else {
          uni.reLaunch({
            url: "/src/pages/index/index"
          });
        }
      }
      return () => {
        "raw js";
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 0, vue.toSharedDataBoolean(__props.isNavbarVisible));
        }, () => {
          vue.renderSharedDataEffect(() => {
            const _border = __props.border;
            const _isNavbarVisible = __props.isNavbarVisible;
            vue.setSharedDataClass(__sharedData, 11, ["weapp-tw-border", __props.fixed ? "wtu-9trszf-0 wtu-1cq737d-1 wtu-viu6n2-2 wtu-xbjxp4-3 wtu-me26is-4 wtu-geck5y-5 wtu-x9l7kx-6 wtu-1e1uywo-7" : "wtu-9trszf-0 wtu-1cq737d-1 wtu-viu6n2-2"]);
            vue.setSharedDataStyle(__sharedData, 12, {
              backgroundColor: effectiveBgColor.value,
              borderBottomWidth: _border && _isNavbarVisible ? "1px" : "0px",
              borderBottomStyle: _border && _isNavbarVisible ? "solid" : "none",
              borderBottomColor: _border && _isNavbarVisible ? "#e2e8f0" : "transparent"
            });
          });
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 3, vue.toSharedDataBoolean(!__props.hideStatusBar));
          }, () => {
            vue.renderSharedDataEffect(() => {
              return vue.setSharedDataStyle(__sharedData, 4, { height: "".concat(statusBarHeight2.value, "px") });
            });
            vue.createSharedDataSlot("statusBar", null, null);
          });
          vue.renderSharedDataEffect(() => {
            return vue.setSharedDataStyle(__sharedData, 13, { height: "".concat(vue.unref(NAVBAR_CONTENT_HEIGHT), "px") });
          });
          vue.createSharedDataSlot("left", null, null, () => {
            vue.createSharedDataIf(() => {
              return vue.setSharedData(__sharedData, 5, vue.toSharedDataBoolean(__props.showBack));
            }, () => {
              vue.setSharedDataEvent(__sharedData, 6, handleBack);
              vue.renderSharedDataEffect(() => {
                const _effectiveTitleColor = effectiveTitleColor.value;
                vue.setSharedDataStyle(__sharedData, 7, { borderLeftColor: _effectiveTitleColor, borderBottomColor: _effectiveTitleColor, transform: "rotate(45deg)" });
              });
            });
          });
          vue.createSharedDataSlot("mid", null, null, () => {
            vue.createSharedDataSlot("default", null, null, () => {
              vue.createSharedDataIf(() => {
                return vue.setSharedData(__sharedData, 8, vue.toSharedDataBoolean(__props.title.length > 0));
              }, () => {
                vue.renderSharedDataEffect(() => {
                  vue.setSharedDataStyle(__sharedData, 9, { color: effectiveTitleColor.value });
                  vue.setSharedData(__sharedData, 10, vue.toDisplayString(__props.title));
                });
              });
            });
          });
          vue.createSharedDataSlot("right", null, null);
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 1, vue.toSharedDataBoolean(__props.fixed && __props.placeholder));
          }, () => {
            vue.renderSharedDataEffect(() => {
              return vue.setSharedDataStyle(__sharedData, 2, { height: "".concat((__props.hideStatusBar ? 0 : statusBarHeight2.value) + (__props.isNavbarVisible ? vue.unref(NAVBAR_CONTENT_HEIGHT) : 0), "px") });
            });
          });
        }, () => {
          return vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 14, vue.toSharedDataBoolean(!__props.hideStatusBar));
          }, () => {
            vue.renderSharedDataEffect(() => {
              return vue.setSharedDataStyle(__sharedData, 15, { height: "".concat(statusBarHeight2.value, "px") });
            });
          });
        }, 1285);
        return __sharedData;
      };
    }
  });
  const _style_0$S = {};
  const _style_1$x = {};
  const NavBar = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["styles", [_style_0$S, _style_1$x]]]);
  const isPageScrollDisabled = vue.ref(false);
  const isPageRefresherDisabled = vue.ref(false);
  function setPageScrollEnabled(enabled) {
    isPageScrollDisabled.value = !enabled;
  }
  class PageScrollDetail extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            scrollTop: { type: Number, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = PageScrollDetail.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.scrollTop = this.__props__.scrollTop;
      delete this.__props__;
    }
  }
  const EVENT_PULL_DOWN_REFRESH = "onPagePullDownRefresh";
  const EVENT_STOP_PULL_DOWN_REFRESH = "stopPagePullDownRefresh";
  function onNavbarPullDownRefresh(callback) {
    vue.onMounted(() => {
      uni.$on(EVENT_PULL_DOWN_REFRESH, callback);
    });
    vue.onUnmounted(() => {
      uni.$off(EVENT_PULL_DOWN_REFRESH, callback);
    });
  }
  function stopNavbarPullDownRefresh() {
    uni.$emit(EVENT_STOP_PULL_DOWN_REFRESH);
    uni.stopPullDownRefresh();
  }
  const EVENT_SET_NAVBAR_TITLE = "setNavbarTitle";
  function setNavbarTitle(title) {
    uni.$emit(EVENT_SET_NAVBAR_TITLE, title);
    uni.setNavigationBarTitle({
      title
    });
  }
  const EVENT_SET_HIDE_NAVBAR = "setHideNavbar";
  function setHideNavbar(hide) {
    uni.$emit(EVENT_SET_HIDE_NAVBAR, hide);
  }
  const EVENT_SET_HIDE_STATUS_BAR = "setHideStatusBar";
  function setHideStatusBar(hide) {
    uni.$emit(EVENT_SET_HIDE_STATUS_BAR, hide);
  }
  const __className$Q = "GenSrcLayoutsNavbar";
  const _sfc_main$R = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$Q,
    __filename: "src/layouts/navbar.uvue",
    __name: "navbar",
    props: {
      /** 页面顶层类型标识，如 'home' */
      type: {
        type: String,
        default: ""
      },
      /** 导航栏标题（读取自 page.title） */
      title: {
        type: String,
        default: ""
      },
      /** 是否显示左侧返回按钮（默认 true） */
      showBack: {
        type: Boolean,
        default: true
      },
      /** 是否启用内容区域的自定义下拉刷新 */
      enablePullDownRefresh: {
        type: Boolean,
        default: false
      },
      /** 导航栏备用背景色（读取自 page.bgColor） */
      bgColor: {
        type: String,
        default: ""
      },
      /** 导航栏备用文字颜色（读取自 page.titleColor） */
      titleColor: {
        type: String,
        default: ""
      },
      /** 导航栏底部是否显示 1px 细分割线 */
      border: {
        type: Boolean,
        default: false
      },
      /** 页面 style 完整配置对象（未拍平，包含 navigationBarTitleText, enablePullDownRefresh, navigationBarBackgroundColor 等） */
      pageStyle: {
        type: Object,
        default: () => {
          return new UTSJSONObject({});
        }
      },
      /** 是否隐藏状态栏占位高度（默认 false，为 true 时不占用状态栏空间） */
      hideStatusBar: {
        type: Boolean,
        default: false
      },
      /** 是否隐藏导航栏（默认 false） */
      hideNavbar: {
        type: Boolean,
        default: false
      },
      hideNavBar: {
        type: Boolean,
        default: false
      },
      /** 是否显示导航栏（默认 true） */
      showNavbar: {
        type: Boolean,
        default: true
      },
      showNavBar: {
        type: Boolean,
        default: true
      },
      /** 扁平兼容字段：导航栏标题 */
      navigationBarTitleText: {
        type: String,
        default: ""
      },
      /** 扁平兼容字段：导航栏背景色 */
      navigationBarBackgroundColor: {
        type: String,
        default: ""
      },
      /** 扁平兼容字段：导航栏文字颜色 */
      navigationBarTextStyle: {
        type: String,
        default: ""
      },
      /** 页面根容器自定义类名（通过 definePage 或 pages.config.json 中的 customPageClass 传入） */
      customPageClass: {
        type: String,
        default: ""
      },
      /** 兼容别名：自定义类名 */
      customClass: {
        type: String,
        default: ""
      },
      layoutClass: {
        type: String,
        default: ""
      },
      /** 页面根容器自定义行内样式（通过 definePage 或 pages.config.json 中的 customPageStyle 传入） */
      customPageStyle: {
        type: String,
        default: ""
      },
      /** 兼容别名：自定义行内样式 */
      customStyle: {
        type: String,
        default: ""
      },
      layoutStyle: {
        type: String,
        default: ""
      }
    },
    setup(__props, _a2) {
      var __expose = _a2.expose;
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcLayoutsNavbarSharedData", sharedDataClassId: 0 })));
      const props = __props;
      const pageStyleObj = vue.computed(() => {
        var _a3;
        return (_a3 = props.pageStyle) !== null && _a3 !== void 0 ? _a3 : new UTSJSONObject({});
      });
      const pageScrollDirection = vue.computed(() => {
        return isPageScrollDisabled.value ? "none" : "vertical";
      });
      const isRefresherEnabled = vue.computed(() => {
        return !isPageScrollDisabled.value && !isPageRefresherDisabled.value;
      });
      const rootClass = vue.computed(() => {
        let cls = "navbar-layout wtu-1wo1rmj-0 wtu-10hozx1-1 wtu-1ip1zya-2";
        if (props.customPageClass.length > 0) {
          cls += " ".concat(props.customPageClass);
        }
        if (props.customClass.length > 0) {
          cls += " ".concat(props.customClass);
        }
        if (props.layoutClass.length > 0) {
          cls += " ".concat(props.layoutClass);
        }
        return cls;
      });
      const rootStyle = vue.computed(() => {
        let s2 = "";
        if (props.customPageStyle.length > 0) {
          s2 += props.customPageStyle;
        }
        if (props.customStyle.length > 0) {
          s2 += (s2.length > 0 ? ";" : "") + props.customStyle;
        }
        if (props.layoutStyle.length > 0) {
          s2 += (s2.length > 0 ? ";" : "") + props.layoutStyle;
        }
        return s2;
      });
      const dynamicHideStatusBar = vue.ref(null);
      const isStatusBarVisible = vue.computed(() => {
        if (dynamicHideStatusBar.value != null) {
          return dynamicHideStatusBar.value == false;
        }
        if (props.hideStatusBar) {
          return false;
        }
        return true;
      });
      function onSetStatusBarVisible(visible = null) {
        if (typeof visible == "boolean") {
          dynamicHideStatusBar.value = !visible;
        }
      }
      function onSetHideStatusBar(hide = null) {
        if (typeof hide == "boolean") {
          dynamicHideStatusBar.value = hide;
        }
      }
      function onResetStatusBarVisible() {
        dynamicHideStatusBar.value = null;
      }
      const dynamicHideNavbar = vue.ref(null);
      const isNavbarVisible = vue.computed(() => {
        if (dynamicHideNavbar.value != null) {
          return dynamicHideNavbar.value == false;
        }
        if (props.hideNavbar || props.hideNavBar || !props.showNavbar || !props.showNavBar) {
          return false;
        }
        return true;
      });
      function onSetNavbarVisible(visible = null) {
        if (typeof visible == "boolean") {
          dynamicHideNavbar.value = !visible;
        }
      }
      function onSetHideNavbar(hide = null) {
        if (typeof hide == "boolean") {
          dynamicHideNavbar.value = hide;
        }
      }
      function onResetNavbarVisible() {
        dynamicHideNavbar.value = null;
      }
      const isTriggered = vue.ref(false);
      function handleRefresherRefresh() {
        isTriggered.value = true;
        uni.$emit("onPagePullDownRefresh");
      }
      function handleRefresherRestore() {
        isTriggered.value = false;
      }
      function onStopRefresh() {
        isTriggered.value = false;
      }
      const customTitle = vue.ref(null);
      function setNavbarTitle2(title) {
        customTitle.value = title;
      }
      function resetNavbarTitle() {
        customTitle.value = null;
      }
      function onSetNavbarTitle(title = null) {
        if (title != null) {
          if (typeof title == "string") {
            setNavbarTitle2(title);
          } else {
            const obj = title;
            const t2 = obj["title"] != null ? "".concat(obj["title"]) : null;
            if (t2 != null && t2.length > 0) {
              setNavbarTitle2(t2);
            }
          }
        }
      }
      function onResetNavbarTitle() {
        resetNavbarTitle();
      }
      uni.$on("stopPagePullDownRefresh", onStopRefresh);
      uni.$on("setNavbarTitle", onSetNavbarTitle);
      uni.$on("resetNavbarTitle", onResetNavbarTitle);
      uni.$on("setNavbarVisible", onSetNavbarVisible);
      uni.$on("setHideNavbar", onSetHideNavbar);
      uni.$on("resetNavbarVisible", onResetNavbarVisible);
      uni.$on("setStatusBarVisible", onSetStatusBarVisible);
      uni.$on("setHideStatusBar", onSetHideStatusBar);
      uni.$on("resetStatusBarVisible", onResetStatusBarVisible);
      vue.onUnmounted(() => {
        uni.$off("stopPagePullDownRefresh", onStopRefresh);
        uni.$off("setNavbarTitle", onSetNavbarTitle);
        uni.$off("resetNavbarTitle", onResetNavbarTitle);
        uni.$off("setNavbarVisible", onSetNavbarVisible);
        uni.$off("setHideNavbar", onSetHideNavbar);
        uni.$off("resetNavbarVisible", onResetNavbarVisible);
        uni.$off("setStatusBarVisible", onSetStatusBarVisible);
        uni.$off("setHideStatusBar", onSetHideStatusBar);
        uni.$off("resetStatusBarVisible", onResetStatusBarVisible);
      });
      function handleScroll(e2) {
        const scrollTop = e2.detail.scrollTop;
        uni.$emit("onNavbarPageScroll", new UTSJSONObject({
          scrollTop: Math.ceil(scrollTop)
        }));
      }
      function handleScrollToLower() {
        uni.$emit("onNavbarReachBottom");
      }
      const isNativePullDown = vue.computed(() => {
        const psVal = pageStyleObj.value.enablePullDownRefresh;
        if (psVal == true || psVal == "true") {
          return true;
        }
        return false;
      });
      const useCustomRefresher = vue.computed(() => {
        if (isNativePullDown.value) {
          return false;
        }
        return props.enablePullDownRefresh;
      });
      const displayTitle = vue.computed(() => {
        var _a3;
        if (customTitle.value != null) {
          return customTitle.value;
        }
        if (isSinglePageTabbar && props.type == "home") {
          if (curIdx.value >= 0 && curIdx.value < tabbarList.length) {
            return $t$1(tabbarList[curIdx.value].text);
          }
        }
        const titleFromStyle = (_a3 = pageStyleObj.value.navigationBarTitleText) !== null && _a3 !== void 0 ? _a3 : "";
        if (titleFromStyle.length > 0) {
          return titleFromStyle;
        }
        if (props.navigationBarTitleText.length > 0) {
          return props.navigationBarTitleText;
        }
        return props.title;
      });
      const navBgColor = vue.computed(() => {
        var _a3;
        const bgFromStyle = (_a3 = pageStyleObj.value.navigationBarBackgroundColor) !== null && _a3 !== void 0 ? _a3 : "";
        if (bgFromStyle.length > 0) {
          return bgFromStyle;
        }
        if (props.navigationBarBackgroundColor.length > 0) {
          return props.navigationBarBackgroundColor;
        }
        return props.bgColor;
      });
      const navTitleColor = vue.computed(() => {
        var _a3;
        const textStyleFromStyle = (_a3 = pageStyleObj.value.navigationBarTextStyle) !== null && _a3 !== void 0 ? _a3 : "";
        if (textStyleFromStyle.length > 0) {
          return textStyleFromStyle;
        }
        if (props.navigationBarTextStyle.length > 0) {
          return props.navigationBarTextStyle;
        }
        return props.titleColor;
      });
      const isCustomNav = vue.computed(() => {
        var _a3;
        const textStyleFromStyle = (_a3 = pageStyleObj.value.navigationStyle) !== null && _a3 !== void 0 ? _a3 : "";
        if (textStyleFromStyle.length > 0) {
          if (textStyleFromStyle == "custom") {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      });
      const themeTokens2 = vue.computed(() => {
        return getThemeTokens(useAppStore().state.isDark);
      });
      __expose({
        resetNavbarTitle,
        setNavbarTitle: setNavbarTitle2,
        setTitle: setNavbarTitle2
      });
      return () => {
        "raw js";
        vue.renderSharedDataEffect(() => {
          vue.setSharedDataClass(__sharedData, 14, ["weapp-tw-border", rootClass.value]);
          vue.setSharedDataStyle(__sharedData, 15, rootStyle.value);
        });
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 0, vue.toSharedDataBoolean(isCustomNav.value));
        }, () => {
          const n2 = vue.createSharedDataComponent(NavBar, "25004ef0", {
            "is-navbar-visible": () => {
              return isNavbarVisible.value;
            },
            "hide-status-bar": () => {
              return !isStatusBarVisible.value;
            },
            title: () => {
              return displayTitle.value;
            },
            "show-back": () => {
              return __props.showBack;
            },
            "title-color": () => {
              return navTitleColor.value;
            },
            "bg-color": () => {
              return navBgColor.value;
            },
            fixed: false,
            placeholder: false,
            border: () => {
              return __props.border;
            }
          });
          vue.setSharedData(__sharedData, 1, n2.sharedData);
        });
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 2, vue.toSharedDataBoolean(useCustomRefresher.value));
        }, () => {
          vue.renderSharedDataEffect(() => {
            vue.setSharedDataAttr(__sharedData, 7, vue.toSharedDataScrollViewDirection(pageScrollDirection.value));
            vue.setSharedDataAttr(__sharedData, 8, vue.toSharedDataAttrBoolean(isRefresherEnabled.value, false));
            vue.setSharedDataAttr(__sharedData, 9, vue.toSharedDataAttrBoolean(isTriggered.value, false));
            vue.setSharedDataAttr(__sharedData, 10, vue.toSharedDataColor(themeTokens2.value.bgContent));
          });
          vue.createSharedDataSlot("default", null, null);
          vue.setSharedDataEvent(__sharedData, 3, handleRefresherRefresh);
          vue.setSharedDataEvent(__sharedData, 4, handleRefresherRestore);
          vue.setSharedDataEvent(__sharedData, 5, handleScroll);
          vue.setSharedDataEvent(__sharedData, 6, handleScrollToLower);
        }, () => {
          vue.renderSharedDataEffect(() => {
            return vue.setSharedDataAttr(__sharedData, 13, vue.toSharedDataScrollViewDirection(pageScrollDirection.value));
          });
          vue.createSharedDataSlot("default", null, null);
          vue.setSharedDataEvent(__sharedData, 11, handleScroll);
          vue.setSharedDataEvent(__sharedData, 12, handleScrollToLower);
        }, 517);
        return __sharedData;
      };
    }
  });
  const _style_0$R = {};
  const _style_1$w = {};
  const LayoutComponent = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["styles", [_style_0$R, _style_1$w]]]);
  const __className$P = "GenSrcPagesIndexViewsIndexView";
  const _sfc_main$Q = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$P,
    __filename: "src/pages/index/views/IndexView.uvue",
    __name: "IndexView",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesIndexViewsIndexViewSharedData", sharedDataClassId: 0 })));
      const appStore = useAppStore();
      const isDark = vue.computed(() => {
        return appStore.state.isDark;
      });
      const systemInfo$1 = vue.computed(() => {
        return systemInfo.value;
      });
      return () => {
        "raw js";
        vue.renderSharedDataEffect(() => {
          var _a2, _b, _c, _d, _e2;
          const _systemInfo = systemInfo$1.value;
          const _isDark = isDark.value;
          const _systemInfo_env = _systemInfo.env;
          const _isDark_wtu_1d7393v_1c_wtu_6x1j95_r_wtu_lae5g1_1d_wtu_1l5ri5g_t = _isDark ? "wtu-1d7393v-1c wtu-6x1j95-r" : "wtu-lae5g1-1d wtu-1l5ri5g-t";
          const _isDark_wtu_1ctkvlm_1g_wtu_a14hpr_1h = _isDark ? "wtu-1ctkvlm-1g" : "wtu-a14hpr-1h";
          const _isDark_wtu_hnobi4_14_wtu_ik8kq1_15 = _isDark ? "wtu-hnobi4-14" : "wtu-ik8kq1-15";
          const _isDark_wtu_7kjn9h_16_wtu_qs4bg2_17 = _isDark ? "wtu-7kjn9h-16" : "wtu-qs4bg2-17";
          const _isDark_wtu_1sr6omg_f_wtu_jn4zq0_23 = _isDark ? "wtu-1sr6omg-f" : "wtu-jn4zq0-23";
          const _isDark_wtu_1sr6omg_f_wtu_4149yv_g = _isDark ? "wtu-1sr6omg-f" : "wtu-4149yv-g";
          vue.setSharedData(__sharedData, 0, vue.toDisplayString((_a2 = _systemInfo == null ? void 0 : _systemInfo.appTitle) != null ? _a2 : ""));
          vue.setSharedDataClass(__sharedData, 1, ["weapp-tw-border wtu-1sws0hl-b wtu-wkbh7q-c wtu-14qktwt-d wtu-12xcmr8-e", _isDark_wtu_1sr6omg_f_wtu_4149yv_g]);
          vue.setSharedDataClass(__sharedData, 2, ["weapp-tw-border wtu-2dpcdr-h wtu-1erg20d-i wtu-1t3zv2f-j wtu-1us2ilf-k wtu-15c6eo7-l wtu-xoen36-m wtu-1kjct3y-n wtu-mb7fx5-0 wtu-16wop14-o wtu-1gd6b90-p wtu-sy8cdn-q", _isDark ? "wtu-6x1j95-r wtu-arywf7-s" : "wtu-1l5ri5g-t wtu-6qw4dt-u"]);
          vue.setSharedData(__sharedData, 3, vue.toDisplayString((_b = _systemInfo == null ? void 0 : _systemInfo.platformName) != null ? _b : ""));
          vue.setSharedDataClass(__sharedData, 4, ["weapp-tw-border wtu-1l2degh-12 wtu-6e1sze-13", _isDark_wtu_hnobi4_14_wtu_ik8kq1_15]);
          vue.setSharedDataStyle(__sharedData, 5, { color: _systemInfo_env == "test" ? "#d97706" : _systemInfo_env == "production" ? "#dc2626" : _isDark ? "#34d399" : "#059669" });
          vue.setSharedData(__sharedData, 6, vue.toDisplayString((_c = _systemInfo == null ? void 0 : _systemInfo.envName) != null ? _c : ""));
          vue.setSharedDataClass(__sharedData, 7, ["weapp-tw-border wtu-1l2degh-12 wtu-6e1sze-13", _isDark_wtu_hnobi4_14_wtu_ik8kq1_15]);
          vue.setSharedDataClass(__sharedData, 8, ["weapp-tw-border wtu-x1w361-z wtu-m0lnwx-10", _isDark_wtu_7kjn9h_16_wtu_qs4bg2_17]);
          vue.setSharedData(__sharedData, 9, vue.toDisplayString((_systemInfo == null ? void 0 : _systemInfo.isVapor) == true ? "Vapor" : "VDOM"));
          vue.setSharedDataClass(__sharedData, 10, ["weapp-tw-border wtu-1l2degh-12 wtu-6e1sze-13", _isDark_wtu_hnobi4_14_wtu_ik8kq1_15]);
          vue.setSharedData(__sharedData, 11, vue.toDisplayString((_d = _systemInfo == null ? void 0 : _systemInfo.appVersion) != null ? _d : ""));
          vue.setSharedDataClass(__sharedData, 12, ["weapp-tw-border wtu-1l2degh-12 wtu-6e1sze-13", _isDark_wtu_hnobi4_14_wtu_ik8kq1_15]);
          vue.setSharedDataClass(__sharedData, 13, ["weapp-tw-border wtu-x1w361-z wtu-m0lnwx-10", _isDark ? "wtu-iq35pd-19" : "wtu-16whge0-1a"]);
          vue.setSharedData(__sharedData, 14, vue.toDisplayString((_e2 = _systemInfo == null ? void 0 : _systemInfo.compilerVersion) != null ? _e2 : ""));
          vue.setSharedDataClass(__sharedData, 15, ["weapp-tw-border wtu-1erg20d-i wtu-2dpcdr-h wtu-25x3h2-1b wtu-15c6eo7-l wtu-xoen36-m wtu-1kjct3y-n", _isDark_wtu_1d7393v_1c_wtu_6x1j95_r_wtu_lae5g1_1d_wtu_1l5ri5g_t]);
          vue.setSharedDataClass(__sharedData, 16, ["weapp-tw-border wtu-141ev18-1f wtu-m0lnwx-10", _isDark_wtu_1ctkvlm_1g_wtu_a14hpr_1h]);
          vue.setSharedDataClass(__sharedData, 17, ["weapp-tw-border wtu-fqzb3z-x wtu-14qktwt-d wtu-1t3zv2f-j wtu-k7errc-1i wtu-1jule9g-1j wtu-1sv9n96-1k", _isDark ? "wtu-1ywaeox-1l wtu-1xddh9r-1m" : "wtu-5n6smb-11 wtu-l5yfeo-1n"]);
          vue.setSharedDataClass(__sharedData, 18, ["weapp-tw-border wtu-fqzb3z-x wtu-14qktwt-d wtu-1t3zv2f-j wtu-k7errc-1i wtu-1jule9g-1j", _isDark ? "wtu-7kjn9h-16 wtu-shzbzk-1o" : "wtu-qs4bg2-17 wtu-8sfbyb-1p"]);
          vue.setSharedDataClass(__sharedData, 19, ["weapp-tw-border wtu-x1w361-z wtu-19uiem3-1q", _isDark_wtu_1sr6omg_f_wtu_4149yv_g]);
          vue.setSharedDataClass(__sharedData, 20, ["weapp-tw-border wtu-1546g6z-1s wtu-m0lnwx-10", _isDark_wtu_1ctkvlm_1g_wtu_a14hpr_1h]);
          vue.setSharedDataClass(__sharedData, 21, ["weapp-tw-border wtu-13laq5k-1v wtu-1jw4de4-1w wtu-mgc4uz-1r wtu-xv30up-1x wtu-xoen36-m wtu-1kjct3y-n", _isDark ? "wtu-8su5jz-1y wtu-hw30kf-1z" : "wtu-1lwtgzq-20 wtu-6nhx5x-21"]);
          vue.setSharedDataClass(__sharedData, 22, ["weapp-tw-border wtu-141ev18-1f wtu-m0lnwx-10", _isDark_wtu_7kjn9h_16_wtu_qs4bg2_17]);
          vue.setSharedDataClass(__sharedData, 23, ["weapp-tw-border wtu-oyewiy-1t wtu-12xcmr8-e wtu-1yx6vkm-22", _isDark_wtu_1sr6omg_f_wtu_jn4zq0_23]);
          vue.setSharedDataClass(__sharedData, 24, ["weapp-tw-border wtu-13laq5k-1v wtu-1jw4de4-1w wtu-mgc4uz-1r wtu-xv30up-1x wtu-xoen36-m wtu-1kjct3y-n", _isDark ? "wtu-145qsf4-24 wtu-a7k5yk-25" : "wtu-1sij3pd-26 wtu-15shnau-27"]);
          vue.setSharedDataClass(__sharedData, 25, ["weapp-tw-border wtu-141ev18-1f wtu-m0lnwx-10", _isDark ? "wtu-jszyac-28" : "wtu-swbkp8-29"]);
          vue.setSharedDataClass(__sharedData, 26, ["weapp-tw-border wtu-oyewiy-1t wtu-12xcmr8-e wtu-1yx6vkm-22", _isDark_wtu_1sr6omg_f_wtu_jn4zq0_23]);
          vue.setSharedDataClass(__sharedData, 27, ["weapp-tw-border wtu-13laq5k-1v wtu-1jw4de4-1w wtu-mgc4uz-1r wtu-xv30up-1x wtu-xoen36-m wtu-1kjct3y-n", _isDark ? "wtu-46rj2i-2a wtu-13eyj0e-2b" : "wtu-1841msn-2c wtu-1wdbbm0-2d"]);
          vue.setSharedDataClass(__sharedData, 28, ["weapp-tw-border wtu-141ev18-1f wtu-m0lnwx-10", _isDark ? "wtu-iao12g-2e" : "wtu-1jcjrrl-2f"]);
          vue.setSharedDataClass(__sharedData, 29, ["weapp-tw-border wtu-oyewiy-1t wtu-12xcmr8-e wtu-1yx6vkm-22", _isDark_wtu_1sr6omg_f_wtu_jn4zq0_23]);
          vue.setSharedDataClass(__sharedData, 30, ["weapp-tw-border wtu-13laq5k-1v wtu-1jw4de4-1w wtu-mgc4uz-1r wtu-xv30up-1x wtu-xoen36-m wtu-1kjct3y-n", _isDark ? "wtu-1kb3vtx-2g wtu-w8wr3d-2h" : "wtu-1vfqg4w-2i wtu-n7u5j-2j"]);
          vue.setSharedDataClass(__sharedData, 31, ["weapp-tw-border wtu-141ev18-1f wtu-m0lnwx-10", _isDark ? "wtu-1mvhr87-2k" : "wtu-1jl1tf2-2l"]);
          vue.setSharedDataClass(__sharedData, 32, ["weapp-tw-border wtu-oyewiy-1t wtu-12xcmr8-e wtu-1yx6vkm-22", _isDark_wtu_1sr6omg_f_wtu_jn4zq0_23]);
          vue.setSharedDataClass(__sharedData, 33, ["weapp-tw-border wtu-13laq5k-1v wtu-1jw4de4-1w wtu-mgc4uz-1r wtu-xv30up-1x wtu-xoen36-m wtu-1kjct3y-n", _isDark ? "wtu-th81z1-2m wtu-b6su5p-2n" : "wtu-14wpbh4-2o wtu-1ezcz6r-2p"]);
          vue.setSharedDataClass(__sharedData, 34, ["weapp-tw-border wtu-141ev18-1f wtu-m0lnwx-10", _isDark ? "wtu-6yyzh3-2q" : "wtu-1dk30q0-18"]);
          vue.setSharedDataClass(__sharedData, 35, ["weapp-tw-border wtu-oyewiy-1t wtu-12xcmr8-e wtu-1yx6vkm-22", _isDark_wtu_1sr6omg_f_wtu_jn4zq0_23]);
          vue.setSharedDataClass(__sharedData, 36, ["weapp-tw-border wtu-13laq5k-1v wtu-1jw4de4-1w wtu-mgc4uz-1r wtu-xv30up-1x wtu-xoen36-m wtu-1kjct3y-n", _isDark ? "wtu-12w2qlo-2r wtu-1yj5i1w-2s" : "wtu-1qytzw5-2t wtu-v2yxf2-2u"]);
          vue.setSharedDataClass(__sharedData, 37, ["weapp-tw-border wtu-141ev18-1f wtu-m0lnwx-10", _isDark ? "wtu-1ywaeox-1l" : "wtu-5n6smb-11"]);
          vue.setSharedDataClass(__sharedData, 38, ["weapp-tw-border wtu-oyewiy-1t wtu-12xcmr8-e wtu-1yx6vkm-22", _isDark_wtu_1sr6omg_f_wtu_jn4zq0_23]);
          vue.setSharedDataClass(__sharedData, 39, ["weapp-tw-border wtu-2dpcdr-h wtu-12xcmr8-e wtu-1wbka76-2v wtu-1latloy-2w wtu-1us2ilf-k wtu-xv30up-1x wtu-xoen36-m wtu-1kjct3y-n wtu-mb7fx5-0 wtu-16wop14-o wtu-1gd6b90-p", _isDark_wtu_1d7393v_1c_wtu_6x1j95_r_wtu_lae5g1_1d_wtu_1l5ri5g_t]);
          vue.setSharedDataClass(__sharedData, 40, ["weapp-tw-border wtu-oyewiy-1t wtu-omzwgk-2y wtu-59fluf-v", _isDark_wtu_1sr6omg_f_wtu_jn4zq0_23]);
        });
        return __sharedData;
      };
    }
  });
  const _style_0$Q = {};
  const _style_1$v = {};
  const HomeView = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["styles", [_style_0$Q, _style_1$v]]]);
  const __className$O = "GenSrcPagesBasicComponentsCard";
  const _sfc_main$P = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$O,
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
        vue.setSharedDataStyle(__sharedData, 2, { backgroundColor: "var(--theme-color, #3182ce)" });
        vue.createSharedDataSlot("title", null, null, () => {
          vue.setSharedDataStyle(__sharedData, 0, { color: "var(--text-color, #2d3748)" });
          vue.renderSharedDataEffect(() => {
            return vue.setSharedData(__sharedData, 1, vue.toDisplayString(__props.title));
          });
        });
        vue.createSharedDataSlot("default", null, null);
        vue.setSharedDataStyle(__sharedData, 3, {
          backgroundColor: "var(--card-bg, #ffffff)",
          borderColor: "var(--border-color, #edf2f7)"
        });
        return __sharedData;
      };
    }
  });
  const _style_0$P = {};
  const _style_1$u = {};
  const Card = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["styles", [_style_0$P, _style_1$u]]]);
  const __className$N = "GenSrcPagesBasicComponentsHttpDemoCard";
  const _sfc_main$O = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$N,
    __filename: "src/pages/basic/components/HttpDemoCard.uvue",
    __name: "HttpDemoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsHttpDemoCardSharedData", sharedDataClassId: 0 })));
      function navigateToDemo() {
        uni.navigateTo({
          url: "/src/sub/httpDemo/httpDemo",
          fail: (err) => {
            uni.__log__("error", "at src/pages/basic/components/HttpDemoCard.uvue:51", "navigateToDemo fail:", err);
          }
        });
      }
      return () => {
        "raw js";
        const n13 = vue.createSharedDataComponent(
          Card,
          "51bfa7fe",
          { title: "HTTP 请求 Demo" },
          {
            "default": () => {
              vue.setSharedDataStyle(__sharedData, 1, { color: "var(--text-secondary, #64748b)" });
              vue.setSharedDataEvent(__sharedData, 2, navigateToDemo);
              vue.setSharedDataStyle(__sharedData, 3, { backgroundColor: "var(--theme-color, #0f766e)" });
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
  const _style_0$O = {};
  const _style_1$t = {};
  const HttpDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["styles", [_style_0$O, _style_1$t]]]);
  function classNames(...args) {
    return classNamesArray(args);
  }
  function classNamesArray(args) {
    const result = [];
    for (let i2 = 0; i2 < args.length; i2++) {
      const arg = args[i2];
      if (arg == null) {
        continue;
      }
      if (typeof arg == "string") {
        const trimmed = arg.trim();
        if (trimmed != "") {
          result.push(trimmed);
        }
      } else if (typeof arg == "number") {
        if (isFinite(arg)) {
          result.push("".concat(arg));
        }
      } else if (Array.isArray(arg)) {
        if (arg.length > 0) {
          const className = classNamesArray(arg);
          if (className != "") {
            result.push(className);
          }
        }
      } else if (typeof arg == "object") {
        arg.toMap().forEach((value, key2) => {
          if (value == true) {
            result.push(key2);
          }
        });
      }
    }
    return result.join(" ");
  }
  function toKebabCase(str) {
    return str.replace(/^[A-Z]/, (m2, _a2, _b) => {
      return m2.toLowerCase();
    }).replace(/[A-Z]/g, (m2, _a2, _b) => {
      return "-" + m2.toLowerCase();
    });
  }
  function stringifyStyle(...args) {
    return stringifyStyleArray(args);
  }
  function isValidStyleValue(value) {
    if (value == null)
      return false;
    if (value == "")
      return false;
    if (typeof value == "number") {
      return isFinite(value);
    }
    if (typeof value == "boolean") {
      return false;
    }
    return true;
  }
  function stringifyStyleArray(args) {
    const result = [];
    for (let i2 = 0; i2 < args.length; i2++) {
      const arg = args[i2];
      if (!isValidStyleValue(arg))
        continue;
      if (typeof arg == "string") {
        result.push(arg);
      } else if (Array.isArray(arg)) {
        if (arg.length > 0) {
          const style = stringifyStyleArray(arg);
          if (style != "") {
            result.push(style);
          }
        }
      } else if (typeof arg == "object") {
        arg.toMap().forEach((value, key2) => {
          if (isValidStyleValue(value)) {
            result.push("".concat(toKebabCase(key2), ":").concat(value));
          }
        });
      }
    }
    return result.join(";");
  }
  function isNumber$1(value) {
    return ["Int8", "UInt8", "Int16", "UInt16", "Int32", "UInt32", "Int64", "UInt64", "Int", "UInt", "Float", "Float16", "Float32", "Float64", "Double", "number"].includes(typeof value);
  }
  function isString(str) {
    return typeof str == "string";
  }
  function isNumeric(value) {
    if (value == null) {
      return false;
    }
    if (isNumber$1(value)) {
      return true;
    } else if (isString(value)) {
      const regex = new RegExp("^(-)?\\d+(\\.\\d+)?$");
      return regex.test(value);
    }
    return false;
  }
  function isDef(value) {
    return value != null;
  }
  function addUnit(value) {
    if (!isDef(value)) {
      return null;
    }
    value = "".concat(value);
    return isNumeric(value) ? "".concat(value, "px") : value;
  }
  const abstract = "E003";
  const accessibility = "E005";
  const activity = "E007";
  const add = "E00D";
  const adjustment = "E011";
  const ai = "E039";
  const alarm = "E041";
  const alpha = "E045";
  const analytics = "E047";
  const anchor = "E048";
  const angry = "E04A";
  const animation = "E04E";
  const anticlockwise = "E050";
  const api = "E051";
  const app = "E053";
  const apple = "E055";
  const application = "E057";
  const archway = "E05D";
  const artboard = "E086";
  const article = "E088";
  const assignment = "E092";
  const attach = "E093";
  const attic = "E098";
  const audio = "E09A";
  const automation = "E09D";
  const awkward = "E09F";
  const backtop = "E0A2";
  const backup = "E0A4";
  const backward = "E0A6";
  const banana = "E0AC";
  const barbecue = "E0AE";
  const barcode = "E0B0";
  const battery = "E0B9";
  const bean = "E0BB";
  const beer = "E0BD";
  const beta = "E0BE";
  const bifurcate = "E0C0";
  const bill = "E0C2";
  const bluetooth = "E0C3";
  const bone = "E0C5";
  const book = "E0CB";
  const bookmark = "E0D5";
  const braces = "E0D6";
  const brackets = "E0D7";
  const bread = "E0D9";
  const bridge = "E0E4";
  const brightness = "E0E8";
  const broccoli = "E0EA";
  const browse = "E0F0";
  const brush = "E0F2";
  const bug = "E0F6";
  const building = "E102";
  const bulletpoint = "E103";
  const button = "E105";
  const cabbage = "E107";
  const cake = "E109";
  const calculation = "E10C";
  const calculator = "E10F";
  const calendar = "E11B";
  const call = "E127";
  const calm = "E12B";
  const camera = "E133";
  const candy = "E135";
  const card = "E137";
  const cardmembership = "E139";
  const cart = "E145";
  const cast = "E147";
  const castle = "E157";
  const cat = "E159";
  const catalog = "E15C";
  const cd = "E15E";
  const celsius = "E15F";
  const centimeter = "E162";
  const certificate = "E166";
  const chart = "E190";
  const chat = "E1B6";
  const check = "E1BC";
  const cheese = "E1BE";
  const cherry = "E1C0";
  const chicken = "E1E1";
  const chili = "E1E3";
  const chimney = "E1E9";
  const church = "E1EF";
  const circle = "E1F1";
  const city = "E217";
  const clear = "E21D";
  const close = "E224";
  const cloud = "E228";
  const code = "E235";
  const cola = "E237";
  const collage = "E239";
  const collection = "E23E";
  const combination = "E244";
  const command = "E245";
  const compass = "E249";
  const constraint = "E265";
  const contrast = "E269";
  const contribute = "E26B";
  const cooperate = "E26F";
  const copy = "E273";
  const copyright = "E275";
  const corn = "E277";
  const correct = "E279";
  const coupon = "E27B";
  const course = "E27D";
  const cpu = "E27F";
  const crack = "E281";
  const creditcard = "E287";
  const css3 = "E28F";
  const cucumber = "E290";
  const cursor = "E293";
  const curtain = "E295";
  const curve = "E296";
  const cut = "E298";
  const dam = "E2A8";
  const dashboard = "E2AE";
  const data = "E2B9";
  const delta = "E2C1";
  const depressed = "E2C3";
  const desktop = "E2C7";
  const despise = "E2C9";
  const device = "E2CB";
  const discount = "E2D1";
  const dissatisfaction = "E2D3";
  const divide = "E2D4";
  const dividers = "E2D6";
  const doge = "E2DE";
  const download = "E2E4";
  const downscale = "E2E5";
  const draft = "E2E7";
  const drink = "E2EB";
  const drumstick = "E2ED";
  const dv = "E2EF";
  const dvd = "E2F1";
  const earphone = "E2F3";
  const earth = "E2F5";
  const edit = "E2FD";
  const education = "E2FF";
  const eggplant = "E301";
  const ellipsis = "E302";
  const enter = "E307";
  const equal = "E308";
  const error = "E30D";
  const excited = "E311";
  const explore = "E31B";
  const exposure = "E31E";
  const extension = "E322";
  const ferocious = "E32B";
  const file = "E37D";
  const film = "E385";
  const filter$1 = "E393";
  const fingerprint = "E397";
  const fish = "E399";
  const flag = "E3A3";
  const flashlight = "E3A5";
  const flowchart = "E3B1";
  const focus = "E3B3";
  const fog = "E3B9";
  const folder = "E3DF";
  const forest = "E3E3";
  const fork = "E3E5";
  const form = "E3E7";
  const formula = "E3F0";
  const forum = "E3F2";
  const forward = "E3F4";
  const frame = "E3F8";
  const fries = "E3FA";
  const fullscreen = "E3FF";
  const functions = "E402";
  const gamepad = "E406";
  const gamma = "E407";
  const garlic = "E409";
  const gift = "E431";
  const giggle = "E433";
  const gps = "E445";
  const grape = "E447";
  const graphviz = "E449";
  const guitar = "E452";
  const hamburger = "E454";
  const happy = "E456";
  const hashtag = "E45B";
  const hd = "E45D";
  const heart = "E45F";
  const help = "E464";
  const highlight = "E469";
  const history = "E46D";
  const home = "E46F";
  const horizontal = "E471";
  const hospital = "E475";
  const hourglass = "E479";
  const houses = "E47F";
  const html5 = "E481";
  const https = "E483";
  const icon = "E487";
  const image = "E497";
  const indicator = "E49C";
  const ink = "E4A0";
  const install = "E4A6";
  const institution = "E4AA";
  const internet = "E4AC";
  const ipod = "E4AE";
  const joyful = "E4B2";
  const jump = "E4B5";
  const key = "E4B7";
  const keyboard = "E4B9";
  const laptop = "E4BD";
  const layers = "E4BF";
  const layout = "E4C1";
  const leaderboard = "E4C3";
  const lemon = "E4C7";
  const lightbulb = "E4E7";
  const lighthouse = "E4ED";
  const link = "E4F4";
  const liquor = "E4F6";
  const load = "E4FB";
  const loading = "E4FC";
  const location$1 = "E50A";
  const login = "E513";
  const logout = "E560";
  const loudspeaker = "E564";
  const mail = "E566";
  const map = "E5A2";
  const markup = "E5A6";
  const mathematics = "E5A8";
  const measurement = "E5AE";
  const member = "E5B4";
  const mentioned = "E5B6";
  const menu = "E5BB";
  const mermaid = "E5BF";
  const microphone = "E5C5";
  const milk = "E5C7";
  const minus = "E5CE";
  const mirror = "E5D0";
  const mobile = "E5DC";
  const module = "E5E8";
  const money = "E5EA";
  const monument = "E5EC";
  const moon = "E5F2";
  const more = "E5F3";
  const mosaic = "E5F5";
  const mosque = "E5F9";
  const mouse = "E5FB";
  const move = "E5FD";
  const multiply = "E600";
  const museum = "E606";
  const mushroom = "E60A";
  const music = "E612";
  const next = "E616";
  const noodle = "E61C";
  const notification = "E624";
  const nut = "E642";
  const opera = "E647";
  const order = "E64C";
  const outbox = "E64E";
  const palace = "E660";
  const palette = "E664";
  const pantone = "E66A";
  const parabola = "E66B";
  const parentheses = "E66C";
  const paste = "E66E";
  const patio = "E670";
  const pause = "E675";
  const pea = "E677";
  const peach = "E679";
  const pear = "E67B";
  const pen = "E689";
  const pending = "E68B";
  const percent = "E68C";
  const pi = "E693";
  const piano = "E695";
  const pin = "E697";
  const placeholder = "E699";
  const plantuml = "E69B";
  const play = "E6A8";
  const plus = "E6A9";
  const popsicle = "E6AB";
  const portrait = "E6AD";
  const pout = "E6AF";
  const poweroff = "E6B0";
  const previous = "E6B3";
  const print = "E6B5";
  const pumpkin = "E6B7";
  const pyramid = "E6BB";
  const qrcode = "E6BC";
  const quadratic = "E6BD";
  const questionnaire = "E6C1";
  const queue = "E6C3";
  const quote = "E6C5";
  const radar = "E6C6";
  const radish = "E6CC";
  const rainbow = "E6D1";
  const rectangle = "E6D3";
  const refresh = "E6D4";
  const relation = "E6D5";
  const relativity = "E6D7";
  const remove = "E6DA";
  const rename = "E6DC";
  const replay = "E6DE";
  const rice = "E6E2";
  const roast = "E6E4";
  const robot = "E6EA";
  const rocket = "E6EC";
  const rollback = "E6ED";
  const rollfront = "E6EE";
  const rotate = "E6F3";
  const rotation = "E6F4";
  const round = "E6F6";
  const rss = "E6F9";
  const ruler = "E6FB";
  const sandwich = "E6FF";
  const saturation = "E701";
  const sausage = "E703";
  const save = "E705";
  const scan$1 = "E708";
  const screencast = "E70E";
  const screenshot = "E70F";
  const seal = "E717";
  const search = "E71B";
  const secured = "E71D";
  const send = "E721";
  const sensors = "E725";
  const sequence = "E727";
  const serenity = "E729";
  const server = "E72B";
  const service = "E72D";
  const setting = "E731";
  const share = "E735";
  const sharpness = "E737";
  const shimen = "E73B";
  const shop = "E747";
  const shortcut = "E748";
  const shrimp = "E74A";
  const shutter = "E74E";
  const shutup = "E750";
  const sip = "E75A";
  const sitemap = "E75C";
  const slash = "E75E";
  const sleep = "E760";
  const slice = "E762";
  const slideshow = "E764";
  const smile = "E766";
  const sneer = "E768";
  const snowflake = "E769";
  const sonic = "E76A";
  const sound = "E778";
  const space = "E779";
  const speechless = "E77D";
  const star = "E77F";
  const stop = "E788";
  const store = "E78A";
  const subscript = "E78F";
  const subtitle = "E791";
  const sum = "E794";
  const summary = "E795";
  const sunny = "E79B";
  const superscript = "E79C";
  const support = "E79E";
  const surprised = "E7A2";
  const swap = "E7A5";
  const tab = "E7D1";
  const table = "E7DB";
  const tag = "E7DF";
  const tangerinr = "E7E1";
  const tape = "E7E3";
  const task = "E7FB";
  const tea = "E7FD";
  const teahouse = "E7FF";
  const template = "E801";
  const temple = "E803";
  const terminal = "E80A";
  const text = "E80E";
  const textbox = "E810";
  const theaters = "E81A";
  const thunder = "E827";
  const thunderstorm = "E82C";
  const ticket = "E82E";
  const time = "E830";
  const tips = "E834";
  const tomato = "E836";
  const tools = "E83A";
  const tornado = "E83B";
  const tower = "E845";
  const town = "E847";
  const traffic = "E84B";
  const transform = "E851";
  const translate = "E853";
  const tv = "E866";
  const typography = "E868";
  const uncomfortable = "E86E";
  const undertake = "E878";
  const unhappy = "E87E";
  const uninstall = "E880";
  const upload = "E882";
  const upscale = "E883";
  const usb = "E885";
  const user = "E8C5";
  const usercase = "E8C9";
  const usergroup = "E8D1";
  const vehicle = "E8D3";
  const verified = "E8D5";
  const verify = "E8D7";
  const vertical = "E8D9";
  const video = "E8EB";
  const wallet = "E8FD";
  const watch = "E8FF";
  const watermelon = "E901";
  const wealth = "E90B";
  const web = "E90D";
  const widget = "E90F";
  const wifi = "E917";
  const window$1 = "E91B";
  const windy = "E91D";
  const wink = "E91F";
  const work = "E925";
  const defalutIconList = new UTSJSONObject({
    "ability-open": "E001",
    "abstract-filled": "E002",
    abstract,
    "accessibility-filled": "E004",
    accessibility,
    "activity-filled": "E006",
    activity,
    "add-and-subtract": "E008",
    "add-circle-filled": "E009",
    "add-circle": "E00A",
    "add-rectangle-filled": "E00B",
    "add-rectangle": "E00C",
    add,
    "address-book-filled": "E00E",
    "address-book": "E00F",
    "adjustment-filled": "E010",
    adjustment,
    "ai-1-filled": "E012",
    "ai-1": "E013",
    "ai-article-filled": "E014",
    "ai-article": "E015",
    "ai-book-open-filled": "E016",
    "ai-book-open": "E017",
    "ai-chart-bar-filled": "E018",
    "ai-chart-bar": "E019",
    "ai-coordinate-system-filled": "E01A",
    "ai-coordinate-system": "E01B",
    "ai-cut": "E01C",
    "ai-edit-1-filled": "E01D",
    "ai-edit-1": "E01E",
    "ai-edit-filled": "E01F",
    "ai-edit": "E020",
    "ai-education-filled": "E021",
    "ai-education": "E022",
    "ai-git-branch-filled": "E023",
    "ai-git-branch": "E024",
    "ai-image-1-filled": "E025",
    "ai-image-1": "E026",
    "ai-image-filled": "E027",
    "ai-image": "E028",
    "ai-layout-filled": "E029",
    "ai-layout": "E02A",
    "ai-music-filled": "E02B",
    "ai-music": "E02C",
    "ai-screenshot": "E02D",
    "ai-search-filled": "E02E",
    "ai-search": "E02F",
    "ai-terminal-1-filled": "E030",
    "ai-terminal-1": "E031",
    "ai-terminal-filled": "E032",
    "ai-terminal": "E033",
    "ai-textformat-italic": "E034",
    "ai-tool-filled": "E035",
    "ai-tool": "E036",
    "ai-video-filled": "E037",
    "ai-video": "E038",
    ai,
    "airplay-wave-filled": "E03A",
    "airplay-wave": "E03B",
    "alarm-add-filled": "E03C",
    "alarm-add": "E03D",
    "alarm-filled": "E03E",
    "alarm-off-filled": "E03F",
    "alarm-off": "E040",
    alarm,
    "align-bottom": "E042",
    "align-top": "E043",
    "align-vertical": "E044",
    alpha,
    "analytics-filled": "E046",
    analytics,
    anchor,
    "angry-filled": "E049",
    angry,
    "animation-1-filled": "E04B",
    "animation-1": "E04C",
    "animation-filled": "E04D",
    animation,
    "anticlockwise-filled": "E04F",
    anticlockwise,
    api,
    "app-filled": "E052",
    app,
    "apple-filled": "E054",
    apple,
    "application-filled": "E056",
    application,
    "architecture-hui-style-filled": "E058",
    "architecture-hui-style": "E059",
    "archway-1-filled": "E05A",
    "archway-1": "E05B",
    "archway-filled": "E05C",
    archway,
    "arrow-down-circle-filled": "E05E",
    "arrow-down-circle": "E05F",
    "arrow-down-rectangle-filled": "E060",
    "arrow-down-rectangle": "E061",
    "arrow-down": "E062",
    "arrow-left-circle-filled": "E063",
    "arrow-left-circle": "E064",
    "arrow-left-down-circle-filled": "E065",
    "arrow-left-down-circle": "E066",
    "arrow-left-down": "E067",
    "arrow-left-right-1": "E068",
    "arrow-left-right-2": "E069",
    "arrow-left-right-3": "E06A",
    "arrow-left-right-circle-filled": "E06B",
    "arrow-left-right-circle": "E06C",
    "arrow-left-up-circle-filled": "E06D",
    "arrow-left-up-circle": "E06E",
    "arrow-left-up": "E06F",
    "arrow-left": "E070",
    "arrow-right-circle-filled": "E071",
    "arrow-right-circle": "E072",
    "arrow-right-down-circle-filled": "E073",
    "arrow-right-down-circle": "E074",
    "arrow-right-down": "E075",
    "arrow-right-up-circle-filled": "E076",
    "arrow-right-up-circle": "E077",
    "arrow-right-up": "E078",
    "arrow-right": "E079",
    "arrow-triangle-down-filled": "E07A",
    "arrow-triangle-down": "E07B",
    "arrow-triangle-up-filled": "E07C",
    "arrow-triangle-up": "E07D",
    "arrow-up-circle-filled": "E07E",
    "arrow-up-circle": "E07F",
    "arrow-up-down-1": "E080",
    "arrow-up-down-2": "E081",
    "arrow-up-down-3": "E082",
    "arrow-up-down-circle-filled": "E083",
    "arrow-up-down-circle": "E084",
    "arrow-up": "E085",
    artboard,
    "article-filled": "E087",
    article,
    "assignment-checked-filled": "E089",
    "assignment-checked": "E08A",
    "assignment-code-filled": "E08B",
    "assignment-code": "E08C",
    "assignment-error-filled": "E08D",
    "assignment-error": "E08E",
    "assignment-filled": "E08F",
    "assignment-user-filled": "E090",
    "assignment-user": "E091",
    assignment,
    attach,
    "attachment-list": "E094",
    "attic-1-filled": "E095",
    "attic-1": "E096",
    "attic-filled": "E097",
    attic,
    "audio-filled": "E099",
    audio,
    "automatic-numbering": "E09B",
    "automation-filled": "E09C",
    automation,
    "awkward-filled": "E09E",
    awkward,
    "backtop-rectangle-filled": "E0A0",
    "backtop-rectangle": "E0A1",
    backtop,
    "backup-filled": "E0A3",
    backup,
    "backward-filled": "E0A5",
    backward,
    "bad-laugh-filled": "E0A7",
    "bad-laugh": "E0A8",
    "bamboo-shoot-filled": "E0A9",
    "bamboo-shoot": "E0AA",
    "banana-filled": "E0AB",
    banana,
    "barbecue-filled": "E0AD",
    barbecue,
    "barcode-1": "E0AF",
    barcode,
    "base-station": "E0B1",
    "battery-add-filled": "E0B2",
    "battery-add": "E0B3",
    "battery-charging-filled": "E0B4",
    "battery-charging": "E0B5",
    "battery-filled": "E0B6",
    "battery-low-filled": "E0B7",
    "battery-low": "E0B8",
    battery,
    "bean-filled": "E0BA",
    bean,
    "beer-filled": "E0BC",
    beer,
    beta,
    "bifurcate-filled": "E0BF",
    bifurcate,
    "bill-filled": "E0C1",
    bill,
    bluetooth,
    "bone-filled": "E0C4",
    bone,
    "book-filled": "E0C6",
    "book-open-filled": "E0C7",
    "book-open": "E0C8",
    "book-unknown-filled": "E0C9",
    "book-unknown": "E0CA",
    book,
    "bookmark-add-filled": "E0CC",
    "bookmark-add": "E0CD",
    "bookmark-checked-filled": "E0CE",
    "bookmark-checked": "E0CF",
    "bookmark-double-filled": "E0D0",
    "bookmark-double": "E0D1",
    "bookmark-filled": "E0D2",
    "bookmark-minus-filled": "E0D3",
    "bookmark-minus": "E0D4",
    bookmark,
    braces,
    brackets,
    "bread-filled": "E0D8",
    bread,
    "bridge-1-filled": "E0DA",
    "bridge-1": "E0DB",
    "bridge-2-filled": "E0DC",
    "bridge-2": "E0DD",
    "bridge-3": "E0DE",
    "bridge-4": "E0DF",
    "bridge-5-filled": "E0E0",
    "bridge-5": "E0E1",
    "bridge-6-filled": "E0E2",
    "bridge-6": "E0E3",
    bridge,
    "brightness-1-filled": "E0E5",
    "brightness-1": "E0E6",
    "brightness-filled": "E0E7",
    brightness,
    "broccoli-filled": "E0E9",
    broccoli,
    "browse-filled": "E0EB",
    "browse-gallery-filled": "E0EC",
    "browse-gallery": "E0ED",
    "browse-off-filled": "E0EE",
    "browse-off": "E0EF",
    browse,
    "brush-filled": "E0F1",
    brush,
    "bug-filled": "E0F3",
    "bug-report-filled": "E0F4",
    "bug-report": "E0F5",
    bug,
    "building-1-filled": "E0F7",
    "building-1": "E0F8",
    "building-2-filled": "E0F9",
    "building-2": "E0FA",
    "building-3-filled": "E0FB",
    "building-3": "E0FC",
    "building-4-filled": "E0FD",
    "building-4": "E0FE",
    "building-5-filled": "E0FF",
    "building-5": "E100",
    "building-filled": "E101",
    building,
    bulletpoint,
    "button-filled": "E104",
    button,
    "cabbage-filled": "E106",
    cabbage,
    "cake-filled": "E108",
    cake,
    "calculation-1-filled": "E10A",
    "calculation-1": "E10B",
    calculation,
    "calculator-1": "E10D",
    "calculator-filled": "E10E",
    calculator,
    "calendar-1-filled": "E110",
    "calendar-1": "E111",
    "calendar-2-filled": "E112",
    "calendar-2": "E113",
    "calendar-3-filled": "E114",
    "calendar-3": "E115",
    "calendar-edit-filled": "E116",
    "calendar-edit": "E117",
    "calendar-event-filled": "E118",
    "calendar-event": "E119",
    "calendar-filled": "E11A",
    calendar,
    "call-1-filled": "E11C",
    "call-1": "E11D",
    "call-cancel-filled": "E11E",
    "call-cancel": "E11F",
    "call-filled": "E120",
    "call-forwarded-filled": "E121",
    "call-forwarded": "E122",
    "call-incoming-filled": "E123",
    "call-incoming": "E124",
    "call-off-filled": "E125",
    "call-off": "E126",
    call,
    "calm-1-filled": "E128",
    "calm-1": "E129",
    "calm-filled": "E12A",
    calm,
    "camera-1-filled": "E12C",
    "camera-1": "E12D",
    "camera-2-filled": "E12E",
    "camera-2": "E12F",
    "camera-filled": "E130",
    "camera-off-filled": "E131",
    "camera-off": "E132",
    camera,
    "candy-filled": "E134",
    candy,
    "card-filled": "E136",
    card,
    "cardmembership-filled": "E138",
    cardmembership,
    "caret-down-small": "E13A",
    "caret-down": "E13B",
    "caret-left-small": "E13C",
    "caret-left": "E13D",
    "caret-right-small": "E13E",
    "caret-right": "E13F",
    "caret-up-small": "E140",
    "caret-up": "E141",
    "cart-add-filled": "E142",
    "cart-add": "E143",
    "cart-filled": "E144",
    cart,
    "cast-filled": "E146",
    cast,
    "castle-1-filled": "E148",
    "castle-1": "E149",
    "castle-2-filled": "E14A",
    "castle-2": "E14B",
    "castle-3-filled": "E14C",
    "castle-3": "E14D",
    "castle-4-filled": "E14E",
    "castle-4": "E14F",
    "castle-5-filled": "E150",
    "castle-5": "E151",
    "castle-6-filled": "E152",
    "castle-6": "E153",
    "castle-7-filled": "E154",
    "castle-7": "E155",
    "castle-filled": "E156",
    castle,
    "cat-filled": "E158",
    cat,
    "catalog-1": "E15A",
    "catalog-filled": "E15B",
    catalog,
    "cd-filled": "E15D",
    cd,
    celsius,
    "center-focus-strong-filled": "E160",
    "center-focus-strong": "E161",
    centimeter,
    "certificate-1-filled": "E163",
    "certificate-1": "E164",
    "certificate-filled": "E165",
    certificate,
    "chart-3d-filled": "E167",
    "chart-3d": "E168",
    "chart-add-filled": "E169",
    "chart-add": "E16A",
    "chart-analytics": "E16B",
    "chart-area-filled": "E16C",
    "chart-area-multi-filled": "E16D",
    "chart-area-multi": "E16E",
    "chart-area": "E16F",
    "chart-bar-filled": "E170",
    "chart-bar": "E171",
    "chart-bubble-filled": "E172",
    "chart-bubble": "E173",
    "chart-column-filled": "E174",
    "chart-column": "E175",
    "chart-combo-filled": "E176",
    "chart-combo": "E177",
    "chart-draw-io-filled": "E178",
    "chart-draw-io": "E179",
    "chart-filled": "E17A",
    "chart-line-board-filled": "E17B",
    "chart-line-board": "E17C",
    "chart-line-data-1": "E17D",
    "chart-line-data": "E17E",
    "chart-line-multi": "E17F",
    "chart-line": "E180",
    "chart-maximum": "E181",
    "chart-median": "E182",
    "chart-minimum": "E183",
    "chart-pie-filled": "E184",
    "chart-pie": "E185",
    "chart-radar-filled": "E186",
    "chart-radar": "E187",
    "chart-radial": "E188",
    "chart-ring-1-filled": "E189",
    "chart-ring-1": "E18A",
    "chart-ring-filled": "E18B",
    "chart-ring": "E18C",
    "chart-scatter": "E18D",
    "chart-stacked-filled": "E18E",
    "chart-stacked": "E18F",
    chart,
    "chat-add-filled": "E191",
    "chat-add": "E192",
    "chat-bubble-1-filled": "E193",
    "chat-bubble-1": "E194",
    "chat-bubble-add-filled": "E195",
    "chat-bubble-add": "E196",
    "chat-bubble-error-filled": "E197",
    "chat-bubble-error": "E198",
    "chat-bubble-filled": "E199",
    "chat-bubble-help-filled": "E19A",
    "chat-bubble-help": "E19B",
    "chat-bubble-history-filled": "E19C",
    "chat-bubble-history": "E19D",
    "chat-bubble-locked-filled": "E19E",
    "chat-bubble-locked": "E19F",
    "chat-bubble-smile-filled": "E1A0",
    "chat-bubble-smile": "E1A1",
    "chat-bubble": "E1A2",
    "chat-checked-filled": "E1A3",
    "chat-checked": "E1A4",
    "chat-clear-filled": "E1A5",
    "chat-clear": "E1A6",
    "chat-double-filled": "E1A7",
    "chat-double": "E1A8",
    "chat-error-filled": "E1A9",
    "chat-error": "E1AA",
    "chat-filled": "E1AB",
    "chat-heart-filled": "E1AC",
    "chat-heart": "E1AD",
    "chat-message-filled": "E1AE",
    "chat-message": "E1AF",
    "chat-off-filled": "E1B0",
    "chat-off": "E1B1",
    "chat-poll-filled": "E1B2",
    "chat-poll": "E1B3",
    "chat-setting-filled": "E1B4",
    "chat-setting": "E1B5",
    chat,
    "check-circle-filled": "E1B7",
    "check-circle": "E1B8",
    "check-double": "E1B9",
    "check-rectangle-filled": "E1BA",
    "check-rectangle": "E1BB",
    check,
    "cheese-filled": "E1BD",
    cheese,
    "cherry-filled": "E1BF",
    cherry,
    "chevron-down-circle-filled": "E1C1",
    "chevron-down-circle": "E1C2",
    "chevron-down-double-s": "E1C3",
    "chevron-down-double": "E1C4",
    "chevron-down-rectangle-filled": "E1C5",
    "chevron-down-rectangle": "E1C6",
    "chevron-down-s": "E1C7",
    "chevron-down": "E1C8",
    "chevron-left-circle-filled": "E1C9",
    "chevron-left-circle": "E1CA",
    "chevron-left-double-s": "E1CB",
    "chevron-left-double": "E1CC",
    "chevron-left-rectangle-filled": "E1CD",
    "chevron-left-rectangle": "E1CE",
    "chevron-left-s": "E1CF",
    "chevron-left": "E1D0",
    "chevron-right-circle-filled": "E1D1",
    "chevron-right-circle": "E1D2",
    "chevron-right-double-s": "E1D3",
    "chevron-right-double": "E1D4",
    "chevron-right-rectangle-filled": "E1D5",
    "chevron-right-rectangle": "E1D6",
    "chevron-right-s": "E1D7",
    "chevron-right": "E1D8",
    "chevron-up-circle-filled": "E1D9",
    "chevron-up-circle": "E1DA",
    "chevron-up-double-s": "E1DB",
    "chevron-up-double": "E1DC",
    "chevron-up-rectangle-filled": "E1DD",
    "chevron-up-rectangle": "E1DE",
    "chevron-up-s": "E1DF",
    "chevron-up": "E1E0",
    chicken,
    "chili-filled": "E1E2",
    chili,
    "chimney-1-filled": "E1E4",
    "chimney-1": "E1E5",
    "chimney-2-filled": "E1E6",
    "chimney-2": "E1E7",
    "chimney-filled": "E1E8",
    chimney,
    "chinese-cabbage-filled": "E1EA",
    "chinese-cabbage": "E1EB",
    "chinese-rectangle-filled": "E1EC",
    "chinese-rectangle": "E1ED",
    "church-filled": "E1EE",
    church,
    "circle-filled": "E1F0",
    circle,
    "city-1-filled": "E1F2",
    "city-1": "E1F3",
    "city-10-filled": "E1F4",
    "city-10": "E1F5",
    "city-11-filled": "E1F6",
    "city-11": "E1F7",
    "city-12-filled": "E1F8",
    "city-12": "E1F9",
    "city-13-filled": "E1FA",
    "city-13": "E1FB",
    "city-14-filled": "E1FC",
    "city-14": "E1FD",
    "city-15-filled": "E1FE",
    "city-15": "E1FF",
    "city-2-filled": "E200",
    "city-2": "E201",
    "city-3-filled": "E202",
    "city-3": "E203",
    "city-4-filled": "E204",
    "city-4": "E205",
    "city-5-filled": "E206",
    "city-5": "E207",
    "city-6-filled": "E208",
    "city-6": "E209",
    "city-7-filled": "E20A",
    "city-7": "E20B",
    "city-8-filled": "E20C",
    "city-8": "E20D",
    "city-9-filled": "E20E",
    "city-9": "E20F",
    "city-ancient-1-filled": "E210",
    "city-ancient-1": "E211",
    "city-ancient-2-filled": "E212",
    "city-ancient-2": "E213",
    "city-ancient-filled": "E214",
    "city-ancient": "E215",
    "city-filled": "E216",
    city,
    "clear-filled": "E218",
    "clear-formatting-1-filled": "E219",
    "clear-formatting-1": "E21A",
    "clear-formatting-filled": "E21B",
    "clear-formatting": "E21C",
    clear,
    "close-circle-filled": "E21E",
    "close-circle": "E21F",
    "close-octagon-filled": "E220",
    "close-octagon": "E221",
    "close-rectangle-filled": "E222",
    "close-rectangle": "E223",
    close,
    "cloud-download": "E225",
    "cloud-filled": "E226",
    "cloud-upload": "E227",
    cloud,
    "cloudy-day-filled": "E229",
    "cloudy-day": "E22A",
    "cloudy-night-filled": "E22B",
    "cloudy-night-rain-filled": "E22C",
    "cloudy-night-rain": "E22D",
    "cloudy-night": "E22E",
    "cloudy-rain-filled": "E22F",
    "cloudy-rain": "E230",
    "cloudy-sunny-filled": "E231",
    "cloudy-sunny": "E232",
    "code-1": "E233",
    "code-off": "E234",
    code,
    "cola-filled": "E236",
    cola,
    "collage-filled": "E238",
    collage,
    "collapsible-block": "E23A",
    "collection-1-filled": "E23B",
    "collection-1": "E23C",
    "collection-filled": "E23D",
    collection,
    "color-invert-filled": "E23F",
    "color-invert": "E240",
    "column-layout-filled": "E241",
    "column-layout": "E242",
    "combination-filled": "E243",
    combination,
    command,
    "compass-1-filled": "E246",
    "compass-1": "E247",
    "compass-filled": "E248",
    compass,
    "component-breadcrumb-filled": "E24A",
    "component-breadcrumb": "E24B",
    "component-checkbox-filled": "E24C",
    "component-checkbox": "E24D",
    "component-divider-horizontal-filled": "E24E",
    "component-divider-horizontal": "E24F",
    "component-divider-vertical-filled": "E250",
    "component-divider-vertical": "E251",
    "component-dropdown-filled": "E252",
    "component-dropdown": "E253",
    "component-grid-filled": "E254",
    "component-grid": "E255",
    "component-input-filled": "E256",
    "component-input": "E257",
    "component-layout-filled": "E258",
    "component-layout": "E259",
    "component-radio": "E25A",
    "component-space-filled": "E25B",
    "component-space": "E25C",
    "component-steps-1-filled": "E25D",
    "component-steps-1": "E25E",
    "component-steps-filled": "E25F",
    "component-steps": "E260",
    "component-stickytool-filled": "E261",
    "component-stickytool": "E262",
    "component-switch-filled": "E263",
    "component-switch": "E264",
    constraint,
    "contrast-1-filled": "E266",
    "contrast-1": "E267",
    "contrast-filled": "E268",
    contrast,
    "contribute-filled": "E26A",
    contribute,
    "control-platform-filled": "E26C",
    "control-platform": "E26D",
    "cooperate-filled": "E26E",
    cooperate,
    "coordinate-system-filled": "E270",
    "coordinate-system": "E271",
    "copy-filled": "E272",
    copy,
    "copyright-filled": "E274",
    copyright,
    "corn-filled": "E276",
    corn,
    "correct-filled": "E278",
    correct,
    "coupon-filled": "E27A",
    coupon,
    "course-filled": "E27C",
    course,
    "cpu-filled": "E27E",
    cpu,
    "crack-filled": "E280",
    crack,
    "creditcard-add-filled": "E282",
    "creditcard-add": "E283",
    "creditcard-filled": "E284",
    "creditcard-off-filled": "E285",
    "creditcard-off": "E286",
    creditcard,
    "crooked-smile-filled": "E288",
    "crooked-smile": "E289",
    "cry-and-laugh-filled": "E28A",
    "cry-and-laugh": "E28B",
    "cry-loudly-filled": "E28C",
    "cry-loudly": "E28D",
    "css3-filled": "E28E",
    css3,
    cucumber,
    "currency-exchange": "E291",
    "cursor-filled": "E292",
    cursor,
    "curtain-filled": "E294",
    curtain,
    curve,
    "cut-1": "E297",
    cut,
    "dam-1-filled": "E299",
    "dam-1": "E29A",
    "dam-2-filled": "E29B",
    "dam-2": "E29C",
    "dam-3-filled": "E29D",
    "dam-3": "E29E",
    "dam-4-filled": "E29F",
    "dam-4": "E2A0",
    "dam-5-filled": "E2A1",
    "dam-5": "E2A2",
    "dam-6-filled": "E2A3",
    "dam-6": "E2A4",
    "dam-7-filled": "E2A5",
    "dam-7": "E2A6",
    "dam-filled": "E2A7",
    dam,
    "dart-board-filled": "E2A9",
    "dart-board": "E2AA",
    "dashboard-1-filled": "E2AB",
    "dashboard-1": "E2AC",
    "dashboard-filled": "E2AD",
    dashboard,
    "data-base-filled": "E2AF",
    "data-base": "E2B0",
    "data-checked-filled": "E2B1",
    "data-checked": "E2B2",
    "data-display": "E2B3",
    "data-error-filled": "E2B4",
    "data-error": "E2B5",
    "data-filled": "E2B6",
    "data-search-filled": "E2B7",
    "data-search": "E2B8",
    data,
    "delete-1-filled": "E2BA",
    "delete-1": "E2BB",
    "delete-filled": "E2BC",
    "delete-time-filled": "E2BD",
    "delete-time": "E2BE",
    "delete": "E2BF",
    "delta-filled": "E2C0",
    delta,
    "depressed-filled": "E2C2",
    depressed,
    "desktop-1-filled": "E2C4",
    "desktop-1": "E2C5",
    "desktop-filled": "E2C6",
    desktop,
    "despise-filled": "E2C8",
    despise,
    "device-filled": "E2CA",
    device,
    "dialog-history-filled": "E2CC",
    "dialog-history": "E2CD",
    "discount-filled": "E2CE",
    "discount-list-filled": "E2CF",
    "discount-list": "E2D0",
    discount,
    "dissatisfaction-filled": "E2D2",
    dissatisfaction,
    divide,
    "dividers-1": "E2D5",
    dividers,
    "document-location-filled": "E2D7",
    "document-location": "E2D8",
    "document-popular-filled": "E2D9",
    "document-popular": "E2DA",
    "document-update-filled": "E2DB",
    "document-update": "E2DC",
    "doge-filled": "E2DD",
    doge,
    "double-storey-filled": "E2DF",
    "double-storey": "E2E0",
    "download-1": "E2E1",
    "download-2-filled": "E2E2",
    "download-2": "E2E3",
    download,
    downscale,
    "draft-filled": "E2E6",
    draft,
    "drag-drop": "E2E8",
    "drag-move": "E2E9",
    "drink-filled": "E2EA",
    drink,
    "drumstick-filled": "E2EC",
    drumstick,
    "dv-filled": "E2EE",
    dv,
    "dvd-filled": "E2F0",
    dvd,
    "earphone-filled": "E2F2",
    earphone,
    "earth-filled": "E2F4",
    earth,
    "edit-1-filled": "E2F6",
    "edit-1": "E2F7",
    "edit-2-filled": "E2F8",
    "edit-2": "E2F9",
    "edit-filled": "E2FA",
    "edit-off-filled": "E2FB",
    "edit-off": "E2FC",
    edit,
    "education-filled": "E2FE",
    education,
    "eggplant-filled": "E300",
    eggplant,
    ellipsis,
    "emo-emotional-filled": "E303",
    "emo-emotional": "E304",
    "english-rectangle-filled": "E305",
    "english-rectangle": "E306",
    enter,
    equal,
    "error-circle-filled": "E309",
    "error-circle": "E30A",
    "error-triangle-filled": "E30B",
    "error-triangle": "E30C",
    error,
    "excited-1-filled": "E30E",
    "excited-1": "E30F",
    "excited-filled": "E310",
    excited,
    "expand-down-filled": "E312",
    "expand-down": "E313",
    "expand-horizontal": "E314",
    "expand-up-filled": "E315",
    "expand-up": "E316",
    "expand-vertical": "E317",
    "explore-filled": "E318",
    "explore-off-filled": "E319",
    "explore-off": "E31A",
    explore,
    "export": "E31C",
    "exposure-filled": "E31D",
    exposure,
    "extension-filled": "E31F",
    "extension-off-filled": "E320",
    "extension-off": "E321",
    extension,
    "face-retouching-filled": "E323",
    "face-retouching": "E324",
    "fact-check-filled": "E325",
    "fact-check": "E326",
    "fahrenheit-scale": "E327",
    "feel-at-ease-filled": "E328",
    "feel-at-ease": "E329",
    "ferocious-filled": "E32A",
    ferocious,
    "ferris-wheel-filled": "E32C",
    "ferris-wheel": "E32D",
    "file-1-filled": "E32E",
    "file-1": "E32F",
    "file-add-1-filled": "E330",
    "file-add-1": "E331",
    "file-add-filled": "E332",
    "file-add": "E333",
    "file-attachment-filled": "E334",
    "file-attachment": "E335",
    "file-blocked-filled": "E336",
    "file-blocked": "E337",
    "file-code-1-filled": "E338",
    "file-code-1": "E339",
    "file-code-filled": "E33A",
    "file-code": "E33B",
    "file-copy-filled": "E33C",
    "file-copy": "E33D",
    "file-csv-filled": "E33E",
    "file-csv": "E33F",
    "file-download-filled": "E340",
    "file-download": "E341",
    "file-edit-filled": "E342",
    "file-edit": "E343",
    "file-excel-filled": "E344",
    "file-excel": "E345",
    "file-export-filled": "E346",
    "file-export": "E347",
    "file-filled": "E348",
    "file-icon-filled": "E349",
    "file-icon": "E34A",
    "file-image-filled": "E34B",
    "file-image": "E34C",
    "file-import-filled": "E34D",
    "file-import": "E34E",
    "file-json-filled": "E34F",
    "file-json": "E350",
    "file-locked-filled": "E351",
    "file-locked": "E352",
    "file-markdown-filled": "E353",
    "file-markdown": "E354",
    "file-minus-filled": "E355",
    "file-minus": "E356",
    "file-music-filled": "E357",
    "file-music": "E358",
    "file-onenote-filled": "E359",
    "file-onenote": "E35A",
    "file-outlook-filled": "E35B",
    "file-outlook": "E35C",
    "file-paste-filled": "E35D",
    "file-paste": "E35E",
    "file-pdf-filled": "E35F",
    "file-pdf": "E360",
    "file-powerpoint-filled": "E361",
    "file-powerpoint": "E362",
    "file-restore-filled": "E363",
    "file-restore": "E364",
    "file-safety-filled": "E365",
    "file-safety": "E366",
    "file-search-filled": "E367",
    "file-search": "E368",
    "file-setting-filled": "E369",
    "file-setting": "E36A",
    "file-teams-filled": "E36B",
    "file-teams": "E36C",
    "file-transmit-double-filled": "E36D",
    "file-transmit-double": "E36E",
    "file-transmit-filled": "E36F",
    "file-transmit": "E370",
    "file-txt-filled": "E371",
    "file-txt": "E372",
    "file-unknown-filled": "E373",
    "file-unknown": "E374",
    "file-unlocked-filled": "E375",
    "file-unlocked": "E376",
    "file-word-filled": "E377",
    "file-word": "E378",
    "file-yaml-filled": "E379",
    "file-yaml": "E37A",
    "file-zip-filled": "E37B",
    "file-zip": "E37C",
    file,
    "fill-color-1-filled": "E37E",
    "fill-color-1": "E37F",
    "fill-color-filled": "E380",
    "fill-color": "E381",
    "film-1-filled": "E382",
    "film-1": "E383",
    "film-filled": "E384",
    film,
    "filter-1-filled": "E386",
    "filter-1": "E387",
    "filter-2-filled": "E388",
    "filter-2": "E389",
    "filter-3-filled": "E38A",
    "filter-3": "E38B",
    "filter-clear-filled": "E38C",
    "filter-clear": "E38D",
    "filter-filled": "E38E",
    "filter-off-filled": "E38F",
    "filter-off": "E390",
    "filter-sort-filled": "E391",
    "filter-sort": "E392",
    filter: filter$1,
    "fingerprint-1": "E394",
    "fingerprint-2": "E395",
    "fingerprint-3": "E396",
    fingerprint,
    "fish-filled": "E398",
    fish,
    "flag-1-filled": "E39A",
    "flag-1": "E39B",
    "flag-2-filled": "E39C",
    "flag-2": "E39D",
    "flag-3-filled": "E39E",
    "flag-3": "E39F",
    "flag-4-filled": "E3A0",
    "flag-4": "E3A1",
    "flag-filled": "E3A2",
    flag,
    "flashlight-filled": "E3A4",
    flashlight,
    "flight-landing-filled": "E3A6",
    "flight-landing": "E3A7",
    "flight-takeoff-filled": "E3A8",
    "flight-takeoff": "E3A9",
    "flip-smiling-face-filled": "E3AA",
    "flip-smiling-face": "E3AB",
    "flip-to-back-filled": "E3AC",
    "flip-to-back": "E3AD",
    "flip-to-front-filled": "E3AE",
    "flip-to-front": "E3AF",
    "flowchart-filled": "E3B0",
    flowchart,
    "focus-filled": "E3B2",
    focus,
    "fog-filled": "E3B4",
    "fog-night-filled": "E3B5",
    "fog-night": "E3B6",
    "fog-sunny-filled": "E3B7",
    "fog-sunny": "E3B8",
    fog,
    "folder-1-filled": "E3BA",
    "folder-1": "E3BB",
    "folder-add-1-filled": "E3BC",
    "folder-add-1": "E3BD",
    "folder-add-filled": "E3BE",
    "folder-add": "E3BF",
    "folder-blocked-filled": "E3C0",
    "folder-blocked": "E3C1",
    "folder-details-filled": "E3C2",
    "folder-details": "E3C3",
    "folder-export-filled": "E3C4",
    "folder-export": "E3C5",
    "folder-filled": "E3C6",
    "folder-import-filled": "E3C7",
    "folder-import": "E3C8",
    "folder-locked-filled": "E3C9",
    "folder-locked": "E3CA",
    "folder-minus-filled": "E3CB",
    "folder-minus": "E3CC",
    "folder-move-filled": "E3CD",
    "folder-move": "E3CE",
    "folder-off-filled": "E3CF",
    "folder-off": "E3D0",
    "folder-open-1-filled": "E3D1",
    "folder-open-1": "E3D2",
    "folder-open-filled": "E3D3",
    "folder-open": "E3D4",
    "folder-search-filled": "E3D5",
    "folder-search": "E3D6",
    "folder-setting-filled": "E3D7",
    "folder-setting": "E3D8",
    "folder-shared-filled": "E3D9",
    "folder-shared": "E3DA",
    "folder-unlocked-filled": "E3DB",
    "folder-unlocked": "E3DC",
    "folder-zip-filled": "E3DD",
    "folder-zip": "E3DE",
    folder,
    "font-background-filled": "E3E0",
    "font-background": "E3E1",
    "forest-filled": "E3E2",
    forest,
    "fork-filled": "E3E4",
    fork,
    "form-filled": "E3E6",
    form,
    "format-horizontal-align-bottom": "E3E8",
    "format-horizontal-align-center": "E3E9",
    "format-horizontal-align-top": "E3EA",
    "format-painter-filled": "E3EB",
    "format-painter": "E3EC",
    "format-vertical-align-center": "E3ED",
    "format-vertical-align-left": "E3EE",
    "format-vertical-align-right": "E3EF",
    formula,
    "forum-filled": "E3F1",
    forum,
    "forward-filled": "E3F3",
    forward,
    "frame-1-filled": "E3F5",
    "frame-1": "E3F6",
    "frame-filled": "E3F7",
    frame,
    "fries-filled": "E3F9",
    fries,
    "fullscreen-1": "E3FB",
    "fullscreen-2": "E3FC",
    "fullscreen-exit-1": "E3FD",
    "fullscreen-exit": "E3FE",
    fullscreen,
    "function-curve": "E400",
    "functions-1": "E401",
    functions,
    "gamepad-1-filled": "E403",
    "gamepad-1": "E404",
    "gamepad-filled": "E405",
    gamepad,
    gamma,
    "garlic-filled": "E408",
    garlic,
    "gender-female": "E40A",
    "gender-male": "E40B",
    "gesture-applause-filled": "E40C",
    "gesture-applause": "E40D",
    "gesture-click-filled": "E40E",
    "gesture-click": "E40F",
    "gesture-down-filled": "E410",
    "gesture-down": "E411",
    "gesture-expansion-filled": "E412",
    "gesture-expansion": "E413",
    "gesture-left-filled": "E414",
    "gesture-left-slip-filled": "E415",
    "gesture-left-slip": "E416",
    "gesture-left": "E417",
    "gesture-open-filled": "E418",
    "gesture-open": "E419",
    "gesture-pray-filled": "E41A",
    "gesture-pray": "E41B",
    "gesture-press-filled": "E41C",
    "gesture-press": "E41D",
    "gesture-ranslation-filled": "E41E",
    "gesture-ranslation": "E41F",
    "gesture-right-filled": "E420",
    "gesture-right-slip-filled": "E421",
    "gesture-right-slip": "E422",
    "gesture-right": "E423",
    "gesture-slide-left-and-right-filled": "E424",
    "gesture-slide-left-and-right": "E425",
    "gesture-slide-up-filled": "E426",
    "gesture-slide-up": "E427",
    "gesture-typing-filled": "E428",
    "gesture-typing": "E429",
    "gesture-up-and-down-filled": "E42A",
    "gesture-up-and-down": "E42B",
    "gesture-up-filled": "E42C",
    "gesture-up": "E42D",
    "gesture-wipe-down-filled": "E42E",
    "gesture-wipe-down": "E42F",
    "gift-filled": "E430",
    gift,
    "giggle-filled": "E432",
    giggle,
    "git-branch-filled": "E434",
    "git-branch": "E435",
    "git-commit-1-filled": "E436",
    "git-commit-1": "E437",
    "git-commit-filled": "E438",
    "git-commit": "E439",
    "git-merge-filled": "E43A",
    "git-merge": "E43B",
    "git-pull-request-filled": "E43C",
    "git-pull-request": "E43D",
    "git-repository-commits-filled": "E43E",
    "git-repository-commits": "E43F",
    "git-repository-filled": "E440",
    "git-repository-private-filled": "E441",
    "git-repository-private": "E442",
    "git-repository": "E443",
    "gps-filled": "E444",
    gps,
    "grape-filled": "E446",
    grape,
    "graphviz-filled": "E448",
    graphviz,
    "greater-than-or-equal": "E44A",
    "greater-than": "E44B",
    "green-onion": "E44C",
    "grid-add-filled": "E44D",
    "grid-add": "E44E",
    "grid-view-filled": "E44F",
    "grid-view": "E450",
    "guitar-filled": "E451",
    guitar,
    "hamburger-filled": "E453",
    hamburger,
    "happy-filled": "E455",
    happy,
    "hard-disk-storage-filled": "E457",
    "hard-disk-storage": "E458",
    "hard-drive-filled": "E459",
    "hard-drive": "E45A",
    hashtag,
    "hd-filled": "E45C",
    hd,
    "heart-filled": "E45E",
    heart,
    "help-circle-filled": "E460",
    "help-circle": "E461",
    "help-rectangle-filled": "E462",
    "help-rectangle": "E463",
    help,
    "high-level-filled": "E465",
    "high-level": "E466",
    "highlight-1-filled": "E467",
    "highlight-1": "E468",
    highlight,
    "highlighted-block-filled": "E46A",
    "highlighted-block": "E46B",
    "history-setting": "E46C",
    history,
    "home-filled": "E46E",
    home,
    "horizontal-filled": "E470",
    horizontal,
    "hospital-1-filled": "E472",
    "hospital-1": "E473",
    "hospital-filled": "E474",
    hospital,
    "hotspot-wave-filled": "E476",
    "hotspot-wave": "E477",
    "hourglass-filled": "E478",
    hourglass,
    "houses-1-filled": "E47A",
    "houses-1": "E47B",
    "houses-2-filled": "E47C",
    "houses-2": "E47D",
    "houses-filled": "E47E",
    houses,
    "html5-filled": "E480",
    html5,
    "https-filled": "E482",
    https,
    "ice-cream-filled": "E484",
    "ice-cream": "E485",
    "icon-filled": "E486",
    icon,
    "image-1-filled": "E488",
    "image-1": "E489",
    "image-add-filled": "E48A",
    "image-add": "E48B",
    "image-carousel-filled": "E48C",
    "image-carousel": "E48D",
    "image-edit-filled": "E48E",
    "image-edit": "E48F",
    "image-error-filled": "E490",
    "image-error": "E491",
    "image-filled": "E492",
    "image-off-filled": "E493",
    "image-off": "E494",
    "image-search-filled": "E495",
    "image-search": "E496",
    image,
    "import": "E498",
    "indent-left": "E499",
    "indent-right": "E49A",
    "indicator-filled": "E49B",
    indicator,
    "info-circle-filled": "E49D",
    "info-circle": "E49E",
    "ink-filled": "E49F",
    ink,
    "install-desktop-filled": "E4A1",
    "install-desktop": "E4A2",
    "install-filled": "E4A3",
    "install-mobile-filled": "E4A4",
    "install-mobile": "E4A5",
    install,
    "institution-checked-filled": "E4A7",
    "institution-checked": "E4A8",
    "institution-filled": "E4A9",
    institution,
    "internet-filled": "E4AB",
    internet,
    "ipod-filled": "E4AD",
    ipod,
    "japanese-rectangle-filled": "E4AF",
    "japanese-rectangle": "E4B0",
    "joyful-filled": "E4B1",
    joyful,
    "jump-double": "E4B3",
    "jump-off": "E4B4",
    jump,
    "key-filled": "E4B6",
    key,
    "keyboard-filled": "E4B8",
    keyboard,
    "korean-rectangle-filled": "E4BA",
    "korean-rectangle": "E4BB",
    "laptop-filled": "E4BC",
    laptop,
    "layers-filled": "E4BE",
    layers,
    "layout-filled": "E4C0",
    layout,
    "leaderboard-filled": "E4C2",
    leaderboard,
    "lemon-filled": "E4C4",
    "lemon-slice-filled": "E4C5",
    "lemon-slice": "E4C6",
    lemon,
    "less-than-or-equal": "E4C8",
    "less-than": "E4C9",
    "letters-a": "E4CA",
    "letters-b": "E4CB",
    "letters-c": "E4CC",
    "letters-d": "E4CD",
    "letters-e": "E4CE",
    "letters-f": "E4CF",
    "letters-g": "E4D0",
    "letters-h": "E4D1",
    "letters-i": "E4D2",
    "letters-j": "E4D3",
    "letters-k": "E4D4",
    "letters-l": "E4D5",
    "letters-m": "E4D6",
    "letters-n": "E4D7",
    "letters-o": "E4D8",
    "letters-p": "E4D9",
    "letters-q": "E4DA",
    "letters-r": "E4DB",
    "letters-s": "E4DC",
    "letters-t": "E4DD",
    "letters-u": "E4DE",
    "letters-v": "E4DF",
    "letters-w": "E4E0",
    "letters-x": "E4E1",
    "letters-y": "E4E2",
    "letters-z": "E4E3",
    "lightbulb-circle-filled": "E4E4",
    "lightbulb-circle": "E4E5",
    "lightbulb-filled": "E4E6",
    lightbulb,
    "lighthouse-1-filled": "E4E8",
    "lighthouse-1": "E4E9",
    "lighthouse-2-filled": "E4EA",
    "lighthouse-2": "E4EB",
    "lighthouse-filled": "E4EC",
    lighthouse,
    "lighting-circle-filled": "E4EE",
    "lighting-circle": "E4EF",
    "line-height": "E4F0",
    "link-1": "E4F1",
    "link-transform": "E4F2",
    "link-unlink": "E4F3",
    link,
    "liquor-filled": "E4F5",
    liquor,
    "list-bug-filled": "E4F7",
    "list-bug": "E4F8",
    "list-demand": "E4F9",
    "list-numbered": "E4FA",
    load,
    loading,
    "location-1-filled": "E4FD",
    "location-1": "E4FE",
    "location-enlargement-filled": "E4FF",
    "location-enlargement": "E500",
    "location-error-filled": "E501",
    "location-error": "E502",
    "location-filled": "E503",
    "location-parking-place-filled": "E504",
    "location-parking-place": "E505",
    "location-reduction-filled": "E506",
    "location-reduction": "E507",
    "location-setting-filled": "E508",
    "location-setting": "E509",
    location: location$1,
    "lock-checked-filled": "E50B",
    "lock-checked": "E50C",
    "lock-off-filled": "E50D",
    "lock-off": "E50E",
    "lock-on-filled": "E50F",
    "lock-on": "E510",
    "lock-time-filled": "E511",
    "lock-time": "E512",
    login,
    "logo-adobe-illustrate-filled": "E514",
    "logo-adobe-illustrate": "E515",
    "logo-adobe-lightroom-filled": "E516",
    "logo-adobe-lightroom": "E517",
    "logo-adobe-photoshop-filled": "E518",
    "logo-adobe-photoshop": "E519",
    "logo-alipay-filled": "E51A",
    "logo-alipay": "E51B",
    "logo-android-filled": "E51C",
    "logo-android": "E51D",
    "logo-apple-filled": "E51E",
    "logo-apple": "E51F",
    "logo-behance-filled": "E520",
    "logo-behance": "E521",
    "logo-chrome-filled": "E522",
    "logo-chrome": "E523",
    "logo-cinema4d-filled": "E524",
    "logo-cinema4d": "E525",
    "logo-cnb-filled": "E526",
    "logo-cnb": "E527",
    "logo-codepen": "E528",
    "logo-codesandbox": "E529",
    "logo-codesign": "E52A",
    "logo-dribbble-filled": "E52B",
    "logo-dribbble": "E52C",
    "logo-facebook-filled": "E52D",
    "logo-facebook": "E52E",
    "logo-figma-filled": "E52F",
    "logo-figma": "E530",
    "logo-framer-filled": "E531",
    "logo-framer": "E532",
    "logo-github-filled": "E533",
    "logo-github": "E534",
    "logo-gitlab-filled": "E535",
    "logo-gitlab": "E536",
    "logo-hiflow-filled": "E537",
    "logo-hiflow": "E538",
    "logo-ie-filled": "E539",
    "logo-ie": "E53A",
    "logo-instagram-filled": "E53B",
    "logo-instagram": "E53C",
    "logo-iwiki-filled": "E53D",
    "logo-iwiki": "E53E",
    "logo-markdown-filled": "E53F",
    "logo-markdown": "E540",
    "logo-miniprogram-filled": "E541",
    "logo-miniprogram": "E542",
    "logo-qq-filled": "E543",
    "logo-qq": "E544",
    "logo-stackblitz-filled": "E545",
    "logo-stackblitz": "E546",
    "logo-tapd-filled": "E547",
    "logo-tapd": "E548",
    "logo-tbeacon-filled": "E549",
    "logo-tbeacon": "E54A",
    "logo-tdesign-filled": "E54B",
    "logo-tdesign": "E54C",
    "logo-tencentcode": "E54D",
    "logo-tencentmeeting-filled": "E54E",
    "logo-tencentmeeting": "E54F",
    "logo-twitter-filled": "E550",
    "logo-twitter": "E551",
    "logo-wechat-stroke-filled": "E552",
    "logo-wechat-stroke": "E553",
    "logo-wechat-workdocs-filled": "E554",
    "logo-wechat-workdocs": "E555",
    "logo-wechatpay-filled": "E556",
    "logo-wechatpay": "E557",
    "logo-wecom-filled": "E558",
    "logo-wecom": "E559",
    "logo-windows-filled": "E55A",
    "logo-windows": "E55B",
    "logo-xiaomareport-filled": "E55C",
    "logo-xiaomareport": "E55D",
    "logo-youtube-filled": "E55E",
    "logo-youtube": "E55F",
    logout,
    "look-around-filled": "E561",
    "look-around": "E562",
    "loudspeaker-filled": "E563",
    loudspeaker,
    "mail-filled": "E565",
    mail,
    "map-3d-filled": "E567",
    "map-3d": "E568",
    "map-add-filled": "E569",
    "map-add": "E56A",
    "map-aiming-filled": "E56B",
    "map-aiming": "E56C",
    "map-blocked-filled": "E56D",
    "map-blocked": "E56E",
    "map-bubble-filled": "E56F",
    "map-bubble": "E570",
    "map-cancel-filled": "E571",
    "map-cancel": "E572",
    "map-chat-filled": "E573",
    "map-chat": "E574",
    "map-checked-filled": "E575",
    "map-checked": "E576",
    "map-collection-filled": "E577",
    "map-collection": "E578",
    "map-connection-filled": "E579",
    "map-connection": "E57A",
    "map-distance-filled": "E57B",
    "map-distance": "E57C",
    "map-double-filled": "E57D",
    "map-double": "E57E",
    "map-edit-filled": "E57F",
    "map-edit": "E580",
    "map-filled": "E581",
    "map-grid-filled": "E582",
    "map-grid": "E583",
    "map-information-1-filled": "E584",
    "map-information-1": "E585",
    "map-information-2-filled": "E586",
    "map-information-2": "E587",
    "map-information-filled": "E588",
    "map-information": "E589",
    "map-location-filled": "E58A",
    "map-location": "E58B",
    "map-locked-filled": "E58C",
    "map-locked": "E58D",
    "map-marked-filled": "E58E",
    "map-marked": "E58F",
    "map-navigation-filled": "E590",
    "map-navigation": "E591",
    "map-outline-filled": "E592",
    "map-outline": "E593",
    "map-route-planning-filled": "E594",
    "map-route-planning": "E595",
    "map-ruler-filled": "E596",
    "map-ruler": "E597",
    "map-safety-filled": "E598",
    "map-safety": "E599",
    "map-search-1-filled": "E59A",
    "map-search-1": "E59B",
    "map-search-filled": "E59C",
    "map-search": "E59D",
    "map-setting-filled": "E59E",
    "map-setting": "E59F",
    "map-unlocked-filled": "E5A0",
    "map-unlocked": "E5A1",
    map,
    "mark-as-unread-filled": "E5A3",
    "mark-as-unread": "E5A4",
    "markup-filled": "E5A5",
    markup,
    "mathematics-filled": "E5A7",
    mathematics,
    "measurement-1-filled": "E5A9",
    "measurement-1": "E5AA",
    "measurement-2-filled": "E5AB",
    "measurement-2": "E5AC",
    "measurement-filled": "E5AD",
    measurement,
    "meat-pepper-filled": "E5AF",
    "meat-pepper": "E5B0",
    "media-library-filled": "E5B1",
    "media-library": "E5B2",
    "member-filled": "E5B3",
    member,
    "mentioned-filled": "E5B5",
    mentioned,
    "menu-application": "E5B7",
    "menu-filled": "E5B8",
    "menu-fold": "E5B9",
    "menu-unfold": "E5BA",
    menu,
    "merge-cells-filled": "E5BC",
    "merge-cells": "E5BD",
    "mermaid-filled": "E5BE",
    mermaid,
    "microphone-1-filled": "E5C0",
    "microphone-1": "E5C1",
    "microphone-2-filled": "E5C2",
    "microphone-2": "E5C3",
    "microphone-filled": "E5C4",
    microphone,
    "milk-filled": "E5C6",
    milk,
    "mind-map-filled": "E5C8",
    "mind-map": "E5C9",
    "minus-circle-filled": "E5CA",
    "minus-circle": "E5CB",
    "minus-rectangle-filled": "E5CC",
    "minus-rectangle": "E5CD",
    minus,
    "mirror-filled": "E5CF",
    mirror,
    "mobile-blocked-filled": "E5D1",
    "mobile-blocked": "E5D2",
    "mobile-filled": "E5D3",
    "mobile-list-filled": "E5D4",
    "mobile-list": "E5D5",
    "mobile-navigation-filled": "E5D6",
    "mobile-navigation": "E5D7",
    "mobile-shortcut-filled": "E5D8",
    "mobile-shortcut": "E5D9",
    "mobile-vibrate-filled": "E5DA",
    "mobile-vibrate": "E5DB",
    mobile,
    "mode-dark-filled": "E5DD",
    "mode-dark": "E5DE",
    "mode-embedding-filled": "E5DF",
    "mode-embedding": "E5E0",
    "mode-light-filled": "E5E1",
    "mode-light": "E5E2",
    "mode-preview-filled": "E5E3",
    "mode-preview": "E5E4",
    "mode-text-filled": "E5E5",
    "mode-text": "E5E6",
    "module-filled": "E5E7",
    module,
    "money-filled": "E5E9",
    money,
    "monument-filled": "E5EB",
    monument,
    "moon-fall-filled": "E5ED",
    "moon-fall": "E5EE",
    "moon-filled": "E5EF",
    "moon-rising-filled": "E5F0",
    "moon-rising": "E5F1",
    moon,
    more,
    "mosaic-filled": "E5F4",
    mosaic,
    "mosque-1-filled": "E5F6",
    "mosque-1": "E5F7",
    "mosque-filled": "E5F8",
    mosque,
    "mouse-filled": "E5FA",
    mouse,
    "move-1": "E5FC",
    move,
    "movie-clapper-filled": "E5FE",
    "movie-clapper": "E5FF",
    multiply,
    "museum-1-filled": "E601",
    "museum-1": "E602",
    "museum-2-filled": "E603",
    "museum-2": "E604",
    "museum-filled": "E605",
    museum,
    "mushroom-1-filled": "E607",
    "mushroom-1": "E608",
    "mushroom-filled": "E609",
    mushroom,
    "music-1-filled": "E60B",
    "music-1": "E60C",
    "music-2-filled": "E60D",
    "music-2": "E60E",
    "music-filled": "E60F",
    "music-rectangle-add-filled": "E610",
    "music-rectangle-add": "E611",
    music,
    "navigation-arrow-filled": "E613",
    "navigation-arrow": "E614",
    "next-filled": "E615",
    next,
    "no-expression-filled": "E617",
    "no-expression": "E618",
    "no-result-filled": "E619",
    "no-result": "E61A",
    "noodle-filled": "E61B",
    noodle,
    "notification-add-filled": "E61D",
    "notification-add": "E61E",
    "notification-circle-filled": "E61F",
    "notification-circle": "E620",
    "notification-error-filled": "E621",
    "notification-error": "E622",
    "notification-filled": "E623",
    notification,
    "numbers-0-1": "E625",
    "numbers-0": "E626",
    "numbers-1-1": "E627",
    "numbers-1": "E628",
    "numbers-2-1": "E629",
    "numbers-2": "E62A",
    "numbers-3-1": "E62B",
    "numbers-3": "E62C",
    "numbers-4-1": "E62D",
    "numbers-4": "E62E",
    "numbers-5-1": "E62F",
    "numbers-5": "E630",
    "numbers-6-1": "E631",
    "numbers-6": "E632",
    "numbers-7-1": "E633",
    "numbers-7": "E634",
    "numbers-8-1": "E635",
    "numbers-8": "E636",
    "numbers-9-1": "E637",
    "numbers-9": "E638",
    "numbers-circle-1-filled": "E639",
    "numbers-circle-1": "E63A",
    "numbers-circle-2-filled": "E63B",
    "numbers-circle-2": "E63C",
    "numbers-circle-3-filled": "E63D",
    "numbers-circle-3": "E63E",
    "numbers-circle-4-filled": "E63F",
    "numbers-circle-4": "E640",
    "nut-filled": "E641",
    nut,
    "object-storage": "E643",
    "open-mouth-filled": "E644",
    "open-mouth": "E645",
    "opera-filled": "E646",
    opera,
    "order-adjustment-column": "E648",
    "order-ascending": "E649",
    "order-descending": "E64A",
    "order-list": "E64B",
    order,
    "outbox-filled": "E64D",
    outbox,
    "page-first": "E64F",
    "page-head-filled": "E650",
    "page-head": "E651",
    "page-included-filled": "E652",
    "page-included": "E653",
    "page-last": "E654",
    "page-tab-filled": "E655",
    "page-tab": "E656",
    "palace-1-filled": "E657",
    "palace-1": "E658",
    "palace-2-filled": "E659",
    "palace-2": "E65A",
    "palace-3-filled": "E65B",
    "palace-3": "E65C",
    "palace-4-filled": "E65D",
    "palace-4": "E65E",
    "palace-filled": "E65F",
    palace,
    "palette-1-filled": "E661",
    "palette-1": "E662",
    "palette-filled": "E663",
    palette,
    "panorama-horizontal-filled": "E665",
    "panorama-horizontal": "E666",
    "panorama-vertical-filled": "E667",
    "panorama-vertical": "E668",
    "pantone-filled": "E669",
    pantone,
    parabola,
    parentheses,
    "paste-filled": "E66D",
    paste,
    "patio-filled": "E66F",
    patio,
    "pause-circle-filled": "E671",
    "pause-circle-stroke-filled": "E672",
    "pause-circle-stroke": "E673",
    "pause-circle": "E674",
    pause,
    "pea-filled": "E676",
    pea,
    "peach-filled": "E678",
    peach,
    "pear-filled": "E67A",
    pear,
    "pearl-of-the-orient-filled": "E67C",
    "pearl-of-the-orient": "E67D",
    "pen-ball-filled": "E67E",
    "pen-ball": "E67F",
    "pen-brush-filled": "E680",
    "pen-brush": "E681",
    "pen-filled": "E682",
    "pen-fluorescence-filled": "E683",
    "pen-fluorescence": "E684",
    "pen-mark-filled": "E685",
    "pen-mark": "E686",
    "pen-quill-filled": "E687",
    "pen-quill": "E688",
    pen,
    "pending-filled": "E68A",
    pending,
    percent,
    "personal-information-filled": "E68D",
    "personal-information": "E68E",
    "phone-locked-filled": "E68F",
    "phone-locked": "E690",
    "phone-search-filled": "E691",
    "phone-search": "E692",
    pi,
    "piano-filled": "E694",
    piano,
    "pin-filled": "E696",
    pin,
    "placeholder-filled": "E698",
    placeholder,
    "plantuml-filled": "E69A",
    plantuml,
    "play-chart-filled": "E69C",
    "play-chart": "E69D",
    "play-circle-filled": "E69E",
    "play-circle-stroke-add-filled": "E69F",
    "play-circle-stroke-add": "E6A0",
    "play-circle-stroke-filled": "E6A1",
    "play-circle-stroke": "E6A2",
    "play-circle": "E6A3",
    "play-demo-filled": "E6A4",
    "play-demo": "E6A5",
    "play-rectangle-filled": "E6A6",
    "play-rectangle": "E6A7",
    play,
    plus,
    "popsicle-filled": "E6AA",
    popsicle,
    "portrait-filled": "E6AC",
    portrait,
    "pout-filled": "E6AE",
    pout,
    poweroff,
    "precise-monitor": "E6B1",
    "previous-filled": "E6B2",
    previous,
    "print-filled": "E6B4",
    print,
    "pumpkin-filled": "E6B6",
    pumpkin,
    "pyramid-filled": "E6B8",
    "pyramid-maya-filled": "E6B9",
    "pyramid-maya": "E6BA",
    pyramid,
    qrcode,
    quadratic,
    "questionnaire-double-filled": "E6BE",
    "questionnaire-double": "E6BF",
    "questionnaire-filled": "E6C0",
    questionnaire,
    "queue-filled": "E6C2",
    queue,
    "quote-filled": "E6C4",
    quote,
    radar,
    "radio-1-filled": "E6C7",
    "radio-1": "E6C8",
    "radio-2-filled": "E6C9",
    "radio-2": "E6CA",
    "radish-filled": "E6CB",
    radish,
    "rain-heavy": "E6CD",
    "rain-light-filled": "E6CE",
    "rain-light": "E6CF",
    "rain-medium": "E6D0",
    rainbow,
    "rectangle-filled": "E6D2",
    rectangle,
    refresh,
    relation,
    "relativity-filled": "E6D6",
    relativity,
    "remote-wave-filled": "E6D8",
    "remote-wave": "E6D9",
    remove,
    "rename-filled": "E6DB",
    rename,
    "replay-filled": "E6DD",
    replay,
    "rice-ball-filled": "E6DF",
    "rice-ball": "E6E0",
    "rice-filled": "E6E1",
    rice,
    "roast-filled": "E6E3",
    roast,
    "robot-1-filled": "E6E5",
    "robot-1": "E6E6",
    "robot-2-filled": "E6E7",
    "robot-2": "E6E8",
    "robot-filled": "E6E9",
    robot,
    "rocket-filled": "E6EB",
    rocket,
    rollback,
    rollfront,
    "root-list-filled": "E6EF",
    "root-list": "E6F0",
    "rotate-locked-filled": "E6F1",
    "rotate-locked": "E6F2",
    rotate,
    rotation,
    "round-filled": "E6F5",
    round,
    "router-wave-filled": "E6F7",
    "router-wave": "E6F8",
    rss,
    "ruler-filled": "E6FA",
    ruler,
    "sailing-hotel-filled": "E6FC",
    "sailing-hotel": "E6FD",
    "sandwich-filled": "E6FE",
    sandwich,
    "saturation-filled": "E700",
    saturation,
    "sausage-filled": "E702",
    sausage,
    "save-filled": "E704",
    save,
    "saving-pot-filled": "E706",
    "saving-pot": "E707",
    scan: scan$1,
    "screen-4k-filled": "E709",
    "screen-4k": "E70A",
    "screen-mirroring-filled": "E70B",
    "screen-mirroring": "E70C",
    "screencast-filled": "E70D",
    screencast,
    screenshot,
    "scroll-bar-filled": "E710",
    "scroll-bar": "E711",
    "sd-card-1-filled": "E712",
    "sd-card-1": "E713",
    "sd-card-filled": "E714",
    "sd-card": "E715",
    "seal-filled": "E716",
    seal,
    "search-error-filled": "E718",
    "search-error": "E719",
    "search-filled": "E71A",
    search,
    "secured-filled": "E71C",
    secured,
    "send-cancel-filled": "E71E",
    "send-cancel": "E71F",
    "send-filled": "E720",
    send,
    "sensors-1": "E722",
    "sensors-2": "E723",
    "sensors-off": "E724",
    sensors,
    "sequence-filled": "E726",
    sequence,
    "serenity-filled": "E728",
    serenity,
    "server-filled": "E72A",
    server,
    "service-filled": "E72C",
    service,
    "setting-1-filled": "E72E",
    "setting-1": "E72F",
    "setting-filled": "E730",
    setting,
    "share-1-filled": "E732",
    "share-1": "E733",
    "share-filled": "E734",
    share,
    "sharpness-filled": "E736",
    sharpness,
    "shield-error-filled": "E738",
    "shield-error": "E739",
    "shimen-filled": "E73A",
    shimen,
    "shop-1-filled": "E73C",
    "shop-1": "E73D",
    "shop-2-filled": "E73E",
    "shop-2": "E73F",
    "shop-3-filled": "E740",
    "shop-3": "E741",
    "shop-4-filled": "E742",
    "shop-4": "E743",
    "shop-5-filled": "E744",
    "shop-5": "E745",
    "shop-filled": "E746",
    shop,
    shortcut,
    "shrimp-filled": "E749",
    shrimp,
    "shrink-horizontal": "E74B",
    "shrink-vertical": "E74C",
    "shutter-filled": "E74D",
    shutter,
    "shutup-filled": "E74F",
    shutup,
    "sim-card-1-filled": "E751",
    "sim-card-1": "E752",
    "sim-card-2-filled": "E753",
    "sim-card-2": "E754",
    "sim-card-filled": "E755",
    "sim-card": "E756",
    "sinister-smile-filled": "E757",
    "sinister-smile": "E758",
    "sip-filled": "E759",
    sip,
    "sitemap-filled": "E75B",
    sitemap,
    "size-change": "E75D",
    slash,
    "sleep-filled": "E75F",
    sleep,
    "slice-filled": "E761",
    slice,
    "slideshow-filled": "E763",
    slideshow,
    "smile-filled": "E765",
    smile,
    "sneer-filled": "E767",
    sneer,
    snowflake,
    sonic,
    "sound-down-filled": "E76B",
    "sound-down": "E76C",
    "sound-filled": "E76D",
    "sound-high-filled": "E76E",
    "sound-high": "E76F",
    "sound-low-filled": "E770",
    "sound-low": "E771",
    "sound-mute-1-filled": "E772",
    "sound-mute-1": "E773",
    "sound-mute-filled": "E774",
    "sound-mute": "E775",
    "sound-up-filled": "E776",
    "sound-up": "E777",
    sound,
    space,
    "speechless-1-filled": "E77A",
    "speechless-1": "E77B",
    "speechless-filled": "E77C",
    speechless,
    "star-filled": "E77E",
    star,
    "statue-of-jesus-filled": "E780",
    "statue-of-jesus": "E781",
    "sticky-note-filled": "E782",
    "sticky-note": "E783",
    "stop-circle-filled": "E784",
    "stop-circle-stroke-filled": "E785",
    "stop-circle-stroke": "E786",
    "stop-circle": "E787",
    stop,
    "store-filled": "E789",
    store,
    "street-road-1-filled": "E78B",
    "street-road-1": "E78C",
    "street-road-filled": "E78D",
    "street-road": "E78E",
    subscript,
    "subtitle-filled": "E790",
    subtitle,
    "subway-line-filled": "E792",
    "subway-line": "E793",
    sum,
    summary,
    "sun-fall-filled": "E796",
    "sun-fall": "E797",
    "sun-rising-filled": "E798",
    "sun-rising": "E799",
    "sunny-filled": "E79A",
    sunny,
    superscript,
    "support-filled": "E79D",
    support,
    "surprised-1-filled": "E79F",
    "surprised-1": "E7A0",
    "surprised-filled": "E7A1",
    surprised,
    "swap-left": "E7A3",
    "swap-right": "E7A4",
    swap,
    "swear-1-filled": "E7A6",
    "swear-1": "E7A7",
    "swear-2-filled": "E7A8",
    "swear-2": "E7A9",
    "system-2": "E7AA",
    "system-3-filled": "E7AB",
    "system-3": "E7AC",
    "system-application-filled": "E7AD",
    "system-application": "E7AE",
    "system-blocked-filled": "E7AF",
    "system-blocked": "E7B0",
    "system-code-filled": "E7B1",
    "system-code": "E7B2",
    "system-components-filled": "E7B3",
    "system-components": "E7B4",
    "system-coordinate-filled": "E7B5",
    "system-coordinate": "E7B6",
    "system-device-filled": "E7B7",
    "system-device": "E7B8",
    "system-interface-filled": "E7B9",
    "system-interface": "E7BA",
    "system-location-filled": "E7BB",
    "system-location": "E7BC",
    "system-locked-filled": "E7BD",
    "system-locked": "E7BE",
    "system-log-filled": "E7BF",
    "system-log": "E7C0",
    "system-marked-filled": "E7C1",
    "system-marked": "E7C2",
    "system-messages-filled": "E7C3",
    "system-messages": "E7C4",
    "system-regulation-filled": "E7C5",
    "system-regulation": "E7C6",
    "system-search-filled": "E7C7",
    "system-search": "E7C8",
    "system-setting-filled": "E7C9",
    "system-setting": "E7CA",
    "system-storage-filled": "E7CB",
    "system-storage": "E7CC",
    "system-sum": "E7CD",
    "system-unlocked-filled": "E7CE",
    "system-unlocked": "E7CF",
    "tab-filled": "E7D0",
    tab,
    "table-1-filled": "E7D2",
    "table-1": "E7D3",
    "table-2-filled": "E7D4",
    "table-2": "E7D5",
    "table-add-filled": "E7D6",
    "table-add": "E7D7",
    "table-filled": "E7D8",
    "table-split-filled": "E7D9",
    "table-split": "E7DA",
    table,
    "tag-filled": "E7DC",
    "tag-state-filled": "E7DD",
    "tag-state": "E7DE",
    tag,
    "tangerinr-filled": "E7E0",
    tangerinr,
    "tape-filled": "E7E2",
    tape,
    "task-1-filled": "E7E4",
    "task-1": "E7E5",
    "task-add-1": "E7E6",
    "task-add-filled": "E7E7",
    "task-add": "E7E8",
    "task-checked-1": "E7E9",
    "task-checked-filled": "E7EA",
    "task-checked": "E7EB",
    "task-double-filled": "E7EC",
    "task-double": "E7ED",
    "task-error-filled": "E7EE",
    "task-error": "E7EF",
    "task-filled": "E7F0",
    "task-location-filled": "E7F1",
    "task-location": "E7F2",
    "task-marked-filled": "E7F3",
    "task-marked": "E7F4",
    "task-setting-filled": "E7F5",
    "task-setting": "E7F6",
    "task-time-filled": "E7F7",
    "task-time": "E7F8",
    "task-visible-filled": "E7F9",
    "task-visible": "E7FA",
    task,
    "tea-filled": "E7FC",
    tea,
    "teahouse-filled": "E7FE",
    teahouse,
    "template-filled": "E800",
    template,
    "temple-filled": "E802",
    temple,
    "terminal-rectangle-1-filled": "E804",
    "terminal-rectangle-1": "E805",
    "terminal-rectangle-filled": "E806",
    "terminal-rectangle": "E807",
    "terminal-window-filled": "E808",
    "terminal-window": "E809",
    terminal,
    "text-drawing-filled": "E80B",
    "text-drawing": "E80C",
    "text-style": "E80D",
    text,
    "textbox-filled": "E80F",
    textbox,
    "textformat-bold": "E811",
    "textformat-color": "E812",
    "textformat-italic": "E813",
    "textformat-longer": "E814",
    "textformat-shorter": "E815",
    "textformat-strikethrough": "E816",
    "textformat-underline": "E817",
    "textformat-wrap": "E818",
    "theaters-filled": "E819",
    theaters,
    "thumb-down-1-filled": "E81B",
    "thumb-down-1": "E81C",
    "thumb-down-2-filled": "E81D",
    "thumb-down-2": "E81E",
    "thumb-down-filled": "E81F",
    "thumb-down": "E820",
    "thumb-up-1-filled": "E821",
    "thumb-up-1": "E822",
    "thumb-up-2-filled": "E823",
    "thumb-up-2": "E824",
    "thumb-up-filled": "E825",
    "thumb-up": "E826",
    thunder,
    "thunderstorm-night-filled": "E828",
    "thunderstorm-night": "E829",
    "thunderstorm-sunny-filled": "E82A",
    "thunderstorm-sunny": "E82B",
    thunderstorm,
    "ticket-filled": "E82D",
    ticket,
    "time-filled": "E82F",
    time,
    "tips-double-filled": "E831",
    "tips-double": "E832",
    "tips-filled": "E833",
    tips,
    "tomato-filled": "E835",
    tomato,
    "tools-circle-filled": "E837",
    "tools-circle": "E838",
    "tools-filled": "E839",
    tools,
    tornado,
    "tower-1-filled": "E83C",
    "tower-1": "E83D",
    "tower-2-filled": "E83E",
    "tower-2": "E83F",
    "tower-3-filled": "E840",
    "tower-3": "E841",
    "tower-clock-filled": "E842",
    "tower-clock": "E843",
    "tower-filled": "E844",
    tower,
    "town-filled": "E846",
    town,
    "traffic-events-filled": "E848",
    "traffic-events": "E849",
    "traffic-filled": "E84A",
    traffic,
    "transform-1-filled": "E84C",
    "transform-1": "E84D",
    "transform-2": "E84E",
    "transform-3": "E84F",
    "transform-filled": "E850",
    transform,
    "translate-1": "E852",
    translate,
    "tree-catalog-filled": "E854",
    "tree-catalog": "E855",
    "tree-list": "E856",
    "tree-round-dot-filled": "E857",
    "tree-round-dot-vertical-filled": "E858",
    "tree-round-dot-vertical": "E859",
    "tree-round-dot": "E85A",
    "tree-square-dot-filled": "E85B",
    "tree-square-dot-vertical-filled": "E85C",
    "tree-square-dot-vertical": "E85D",
    "tree-square-dot": "E85E",
    "trending-down": "E85F",
    "trending-up": "E860",
    "tv-1-filled": "E861",
    "tv-1": "E862",
    "tv-2-filled": "E863",
    "tv-2": "E864",
    "tv-filled": "E865",
    tv,
    "typography-filled": "E867",
    typography,
    "uncomfortable-1-filled": "E869",
    "uncomfortable-1": "E86A",
    "uncomfortable-2-filled": "E86B",
    "uncomfortable-2": "E86C",
    "uncomfortable-filled": "E86D",
    uncomfortable,
    "undertake-delivery-filled": "E86F",
    "undertake-delivery": "E870",
    "undertake-environment-protection-filled": "E871",
    "undertake-environment-protection": "E872",
    "undertake-filled": "E873",
    "undertake-hold-up-filled": "E874",
    "undertake-hold-up": "E875",
    "undertake-transaction-filled": "E876",
    "undertake-transaction": "E877",
    undertake,
    "unfold-less": "E879",
    "unfold-more": "E87A",
    "unhappy-1-filled": "E87B",
    "unhappy-1": "E87C",
    "unhappy-filled": "E87D",
    unhappy,
    "uninstall-filled": "E87F",
    uninstall,
    "upload-1": "E881",
    upload,
    upscale,
    "usb-filled": "E884",
    usb,
    "user-1-filled": "E886",
    "user-1": "E887",
    "user-add-filled": "E888",
    "user-add": "E889",
    "user-arrow-down-filled": "E88A",
    "user-arrow-down": "E88B",
    "user-arrow-left-filled": "E88C",
    "user-arrow-left": "E88D",
    "user-arrow-right-filled": "E88E",
    "user-arrow-right": "E88F",
    "user-arrow-up-filled": "E890",
    "user-arrow-up": "E891",
    "user-avatar-filled": "E892",
    "user-avatar": "E893",
    "user-blocked-filled": "E894",
    "user-blocked": "E895",
    "user-business-filled": "E896",
    "user-business": "E897",
    "user-checked-1-filled": "E898",
    "user-checked-1": "E899",
    "user-checked-filled": "E89A",
    "user-checked": "E89B",
    "user-circle-filled": "E89C",
    "user-circle": "E89D",
    "user-clear-filled": "E89E",
    "user-clear": "E89F",
    "user-error-1-filled": "E8A0",
    "user-error-1": "E8A1",
    "user-filled": "E8A2",
    "user-invisible-filled": "E8A3",
    "user-invisible": "E8A4",
    "user-list-filled": "E8A5",
    "user-list": "E8A6",
    "user-locked-filled": "E8A7",
    "user-locked": "E8A8",
    "user-marked-filled": "E8A9",
    "user-marked": "E8AA",
    "user-password-filled": "E8AB",
    "user-password": "E8AC",
    "user-safety-filled": "E8AD",
    "user-safety": "E8AE",
    "user-search-filled": "E8AF",
    "user-search": "E8B0",
    "user-setting-filled": "E8B1",
    "user-setting": "E8B2",
    "user-talk-1-filled": "E8B3",
    "user-talk-1": "E8B4",
    "user-talk-filled": "E8B5",
    "user-talk-off-1-filled": "E8B6",
    "user-talk-off-1": "E8B7",
    "user-talk": "E8B8",
    "user-time-filled": "E8B9",
    "user-time": "E8BA",
    "user-transmit-filled": "E8BB",
    "user-transmit": "E8BC",
    "user-unknown-filled": "E8BD",
    "user-unknown": "E8BE",
    "user-unlocked-filled": "E8BF",
    "user-unlocked": "E8C0",
    "user-vip-filled": "E8C1",
    "user-vip": "E8C2",
    "user-visible-filled": "E8C3",
    "user-visible": "E8C4",
    user,
    "usercase-filled": "E8C6",
    "usercase-link-filled": "E8C7",
    "usercase-link": "E8C8",
    usercase,
    "usergroup-add-filled": "E8CA",
    "usergroup-add": "E8CB",
    "usergroup-circle-filled": "E8CC",
    "usergroup-circle": "E8CD",
    "usergroup-clear-filled": "E8CE",
    "usergroup-clear": "E8CF",
    "usergroup-filled": "E8D0",
    usergroup,
    "vehicle-filled": "E8D2",
    vehicle,
    "verified-filled": "E8D4",
    verified,
    "verify-filled": "E8D6",
    verify,
    "vertical-filled": "E8D8",
    vertical,
    "video-camera-1-filled": "E8DA",
    "video-camera-1": "E8DB",
    "video-camera-2-filled": "E8DC",
    "video-camera-2": "E8DD",
    "video-camera-dollar-filled": "E8DE",
    "video-camera-dollar": "E8DF",
    "video-camera-filled": "E8E0",
    "video-camera-minus-filled": "E8E1",
    "video-camera-minus": "E8E2",
    "video-camera-music-filled": "E8E3",
    "video-camera-music": "E8E4",
    "video-camera-off-filled": "E8E5",
    "video-camera-off": "E8E6",
    "video-camera": "E8E7",
    "video-filled": "E8E8",
    "video-library-filled": "E8E9",
    "video-library": "E8EA",
    video,
    "view-agenda-filled": "E8EC",
    "view-agenda": "E8ED",
    "view-column": "E8EE",
    "view-gantt-filled": "E8EF",
    "view-gantt": "E8F0",
    "view-image-filled": "E8F1",
    "view-image": "E8F2",
    "view-in-ar-filled": "E8F3",
    "view-in-ar": "E8F4",
    "view-list": "E8F5",
    "view-module-filled": "E8F6",
    "view-module": "E8F7",
    "view-organization-filled": "E8F8",
    "view-organization": "E8F9",
    "visual-recognition-filled": "E8FA",
    "visual-recognition": "E8FB",
    "wallet-filled": "E8FC",
    wallet,
    "watch-filled": "E8FE",
    watch,
    "watermelon-filled": "E900",
    watermelon,
    "wave-bye-filled": "E902",
    "wave-bye": "E903",
    "wave-left-filled": "E904",
    "wave-left": "E905",
    "wave-right-filled": "E906",
    "wave-right": "E907",
    "wealth-1-filled": "E908",
    "wealth-1": "E909",
    "wealth-filled": "E90A",
    wealth,
    "web-filled": "E90C",
    web,
    "widget-filled": "E90E",
    widget,
    "wifi-1-filled": "E910",
    "wifi-1": "E911",
    "wifi-no-filled": "E912",
    "wifi-no": "E913",
    "wifi-off-1-filled": "E914",
    "wifi-off-1": "E915",
    "wifi-off": "E916",
    wifi,
    "window-1-filled": "E918",
    "window-1": "E919",
    "window-filled": "E91A",
    window: window$1,
    "windy-rain": "E91C",
    windy,
    "wink-filled": "E91E",
    wink,
    "work-filled": "E920",
    "work-history-filled": "E921",
    "work-history": "E922",
    "work-off-filled": "E923",
    "work-off": "E924",
    work,
    "wry-smile-filled": "E926",
    "wry-smile": "E927",
    "zoom-in-filled": "E928",
    "zoom-in": "E929",
    "zoom-out-filled": "E92A",
    "zoom-out": "E92B"
  });
  const Object$1 = UTSJSONObject;
  const fontIconRegistry = /* @__PURE__ */ new Map();
  const iconifyRegistry = /* @__PURE__ */ new Map();
  const jsonCache = /* @__PURE__ */ new Map();
  const iconData = /* @__PURE__ */ new Map();
  const iconDataChangeCount = vue.ref(0);
  let DEFAULT_ICONIFY_API = "https://api.iconify.design";
  function isNullish(value) {
    return value == null || value == void 0;
  }
  function isUnicodeChar(str) {
    return /[^\x00-\x7F]/.test(str);
  }
  function isUnicodeEscape(str) {
    return /^\\u[0-9a-fA-F]{4}$/.test(str);
  }
  function parseUnicode(str) {
    if (isUnicodeEscape(str)) {
      return String.fromCharCode(parseInt(str.slice(2), 16));
    }
    return str;
  }
  function isNetworkUrl(url) {
    return url.startsWith("http://") || url.startsWith("https://");
  }
  function loadJsonData(jsonUrl) {
    return __awaiter(this, void 0, void 0, function* () {
      if (jsonCache.has(jsonUrl)) {
        return jsonCache.get(jsonUrl);
      }
      if (isNetworkUrl(jsonUrl)) {
        return new Promise((resolve, reject) => {
          uni.request({
            url: jsonUrl,
            dataType: "text",
            success: (res) => {
              if (res.statusCode == 200) {
                const data2 = res.data;
                jsonCache.set(jsonUrl, data2);
                resolve(data2);
              } else {
                reject(new Error("加载失败: ".concat(res.statusCode)));
              }
            },
            fail: (err) => {
              reject(err);
            }
          });
        });
      } else {
        return new Promise((resolve, reject) => {
          try {
            const fs2 = uni.getFileSystemManager();
            fs2.readFile({
              filePath: jsonUrl,
              encoding: "utf-8",
              success: (res) => {
                try {
                  const data2 = JSON.parse(res.data);
                  jsonCache.set(jsonUrl, data2);
                  resolve(data2);
                } catch (error2) {
                  reject(new Error("解析JSON失败"));
                }
              },
              fail: (err) => {
                reject(err);
              }
            });
          } catch (fsError) {
            reject(fsError);
          }
        });
      }
    });
  }
  const loadingFonts = vue.ref([]);
  function registerFontIcon(config) {
    var _a2;
    return __awaiter(this, void 0, void 0, function* () {
      const prefix = config.prefix, jsonUrl = config.jsonUrl;
      const icons = (_a2 = config.icons) !== null && _a2 !== void 0 ? _a2 : {};
      fontIconRegistry.set(prefix, config);
      if (!isNullish(config.fontUrl)) {
        loadingFonts.value.push(config);
        uni.loadFontFace({
          family: config.fontFamily,
          source: 'url("'.concat(config.fontUrl, '")'),
          success: () => {
            const existingIndex = loadingFonts.value.findIndex((item) => {
              return item.fontUrl == config.fontUrl;
            });
            if (existingIndex > -1) {
              loadingFonts.value.splice(existingIndex, 1);
            }
            uni.__log__("log", "at uni_modules/lime-icon/index.ts:317", "字体加载成功: ".concat(config.fontFamily, "; 正在加载字体数量: ").concat(loadingFonts.value.length));
          },
          fail: (err) => {
            uni.__log__("error", "at uni_modules/lime-icon/index.ts:319", "字体加载失败: ".concat(config.fontFamily), err);
          }
        });
      }
      if (UTSJSONObject.keys(icons).length > 0) {
        iconData.set(prefix, icons);
        iconDataChangeCount.value++;
        uni.__log__("log", "at uni_modules/lime-icon/index.ts:327", "已注册字体图标库: ".concat(prefix, " (内置").concat(UTSJSONObject.keys(icons).length, "个图标)"));
        if (!isNullish(jsonUrl)) {
          loadAndMergeJson(prefix, jsonUrl);
        }
      } else if (!isNullish(jsonUrl)) {
        try {
          const jsonIcons = yield loadJsonData(jsonUrl);
          iconData.set(prefix, jsonIcons);
          iconDataChangeCount.value++;
          uni.__log__("log", "at uni_modules/lime-icon/index.ts:340", "已注册字体图标库: ".concat(prefix, " (从JSON加载").concat(Object$1.keys(jsonIcons).length, "个图标)"));
        } catch (error2) {
          uni.__log__("log", "at uni_modules/lime-icon/index.ts:342", "jsonUrl", jsonUrl);
          uni.__log__("error", "at uni_modules/lime-icon/index.ts:343", "注册字体图标库失败: ".concat(prefix), error2);
          throw error2;
        }
      } else {
        uni.__log__("warn", "at uni_modules/lime-icon/index.ts:347", "注册字体图标库: ".concat(prefix, "，但未提供图标数据"));
      }
    });
  }
  function loadAndMergeJson(prefix, jsonUrl) {
    var _a2;
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const jsonIcons = yield loadJsonData(jsonUrl);
        const currentIcons = (_a2 = iconData.get(prefix)) !== null && _a2 !== void 0 ? _a2 : {};
        const mergedIcons = Object$1.assign(Object$1.assign({}, currentIcons), jsonIcons);
        iconData.set(prefix, mergedIcons);
        iconDataChangeCount.value++;
        uni.__log__("log", "at uni_modules/lime-icon/index.ts:374", "已合并图标库: ".concat(prefix, "，现有").concat(Object$1.keys(mergedIcons).length, "个图标"));
      } catch (error2) {
        uni.__log__("warn", "at uni_modules/lime-icon/index.ts:377", "加载图标JSON失败: ".concat(jsonUrl, "，使用现有图标"));
      }
    });
  }
  function parseIconName(name, prefix = "") {
    if (isUnicodeChar(name) || isUnicodeEscape(name)) {
      return {
        prefix,
        iconName: name,
        hasPrefix: false,
        isImage: false,
        isUnicode: true,
        isSvg: false
      };
    }
    const isImageUrl = name.startsWith("/") || name.startsWith("http") || name.startsWith("data:") || /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(name);
    const isSvgPath = /\.(svg)$/i.test(name) || name.startsWith("data:image/svg+xml;");
    if (isImageUrl) {
      return {
        prefix: "",
        iconName: name,
        hasPrefix: false,
        isImage: true,
        isUnicode: false,
        isSvg: isSvgPath
      };
    }
    if (name.includes(":")) {
      const _a2 = __read(name.split(":"), 2), prefix_1 = _a2[0], iconName = _a2[1];
      return {
        prefix: prefix_1,
        iconName,
        hasPrefix: true,
        isImage: false,
        isUnicode: false,
        isSvg: false
      };
    }
    return {
      prefix,
      iconName: name,
      hasPrefix: false,
      isImage: false,
      isUnicode: false,
      isSvg: false
    };
  }
  function useIcon(name, options = {}) {
    const parsed = vue.computed(() => {
      var _a2;
      return parseIconName("".concat(vue.unref(name)), (_a2 = options.prefix) !== null && _a2 !== void 0 ? _a2 : "l");
    });
    const type = vue.computed(() => {
      const _a2 = parsed.value, prefix = _a2.prefix, isImage = _a2.isImage, hasPrefix = _a2.hasPrefix, isUnicode = _a2.isUnicode;
      if (isUnicode)
        return "font";
      if (isImage)
        return "image";
      if (hasPrefix) {
        if (fontIconRegistry.has(prefix))
          return "font";
        if (iconifyRegistry.has(prefix))
          return "iconify";
        return "iconify";
      }
      if (!isNullish(options.prefix)) {
        if (fontIconRegistry.has(options.prefix))
          return "font";
        if (iconifyRegistry.has(options.prefix))
          return "iconify";
      }
      return "font";
    });
    const fontIcon = vue.computed(() => {
      var _a2, _b;
      iconDataChangeCount.value;
      if (type.value == "font") {
        const _c = parsed.value, prefix = _c.prefix, iconName = _c.iconName, hasPrefix = _c.hasPrefix, isUnicode = _c.isUnicode;
        if (isUnicode) {
          const char = parseUnicode(iconName);
          return {
            fontFamily: (_a2 = options.prefix) !== null && _a2 !== void 0 ? _a2 : "",
            unicode: iconName,
            char,
            className: ""
          };
        }
        let targetPrefix = "";
        if (hasPrefix) {
          targetPrefix = prefix;
        } else if (!isNullish(options.prefix)) {
          targetPrefix = options.prefix;
        } else
          ;
        if (!isNullish(targetPrefix) && fontIconRegistry.has(targetPrefix) && iconData.has(targetPrefix)) {
          const config = fontIconRegistry.get(targetPrefix);
          const icons = iconData.get(targetPrefix);
          const unicode = "".concat((_b = icons[iconName]) !== null && _b !== void 0 ? _b : "");
          return {
            fontFamily: config.fontFamily,
            unicode,
            char: unicode != "" ? String.fromCharCode(parseInt(unicode, 16)) : "",
            className: "".concat(config.prefix, "-").concat(iconName)
          };
        }
      }
      return null;
    });
    const iconifyInfo = vue.computed(() => {
      var _a2;
      iconDataChangeCount.value;
      if (type.value == "iconify") {
        const _b = parsed.value, prefix = _b.prefix, iconName = _b.iconName, hasPrefix = _b.hasPrefix;
        let targetPrefix = prefix;
        let targetIconName = iconName;
        if (!hasPrefix) {
          if (!isNullish(options.prefix)) {
            targetPrefix = options.prefix;
            targetIconName = iconName;
          } else {
            return null;
          }
        }
        const config = iconifyRegistry.get(targetPrefix);
        const icons = iconData.get(targetPrefix);
        const isLocal = !isNullish(icons) && UTSJSONObject.keys(icons).length > 0;
        let apiUrl = DEFAULT_ICONIFY_API;
        if (!isNullish(config) && !isNullish(config === null || config === void 0 ? void 0 : config.apiUrl)) {
          apiUrl = config.apiUrl;
        }
        return {
          prefix: targetPrefix,
          apiUrl,
          isLocal,
          svgContent: isLocal ? "".concat((_a2 = icons === null || icons === void 0 ? void 0 : icons[targetIconName]) !== null && _a2 !== void 0 ? _a2 : "") : "",
          iconName: targetIconName
        };
      }
      return null;
    });
    const iconifyUrl = vue.computed(() => {
      var _a2;
      const info = iconifyInfo.value;
      if (isNullish(info))
        return null;
      if (info.isLocal && info.svgContent != "") {
        return (_a2 = info === null || info === void 0 ? void 0 : info.svgContent) !== null && _a2 !== void 0 ? _a2 : "";
      }
      return "".concat(info.apiUrl, "/").concat(info.prefix, "/").concat(info.iconName, ".svg");
    });
    const imageUrl = vue.computed(() => {
      if (type.value == "image") {
        return parsed.value.iconName;
      }
      return "";
    });
    return {
      type,
      fontIcon,
      iconifyUrl,
      iconifyInfo,
      imageUrl,
      parsed: parsed.value
      // 解析后的图标基本信息
    };
  }
  registerFontIcon({
    prefix: "l",
    fontFamily: "l",
    icons: defalutIconList
  });
  const __className$M = "GenUniModulesLimeIconComponentsLIconLIcon";
  const _sfc_main$N = /* @__PURE__ */ vue.defineVaporSharedDataComponent(Object.assign({
    styleIsolation: "app-shared",
    inheritAttrs: true,
    externalClasses: ["l-class"],
    options: new UTSJSONObject({
      virtualHost: true
    })
  }, { __dynamicSharedData: true, __className: __className$M, __filename: "uni_modules/lime-icon/components/l-icon/l-icon.uvue", __name: "l-icon", props: {
    name: { default: "", type: String },
    color: { type: String },
    size: { type: [String, Number] },
    prefix: { default: "l", type: String },
    inherit: { type: Boolean, default: true },
    web: { type: Boolean, default: false },
    lClass: { type: null },
    lStyle: { type: null }
  }, emits: ["click"], setup(__props, _a2) {
    var __emit = _a2.emit;
    const __sharedDataScope = vue.useSharedDataScope();
    const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenUniModulesLimeIconComponentsLIconLIconSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const _b = useIcon(vue.computed(() => {
      return props.name;
    }), { prefix: props.prefix }), type = _b.type, fontIcon = _b.fontIcon, imageUrl = _b.imageUrl, iconifyUrl = _b.iconifyUrl, parsed = _b.parsed;
    const fontLoading = vue.computed(() => {
      var _a3;
      if (type.value == "font") {
        if (((_a3 = fontIcon.value) === null || _a3 === void 0 ? null : _a3.fontFamily) == "l")
          return false;
        return loadingFonts.value.some((item) => {
          var _a4;
          return item.fontFamily == ((_a4 = fontIcon.value) === null || _a4 === void 0 ? null : _a4.fontFamily);
        });
      }
      return false;
    });
    const classes = vue.computed(() => {
      var _a3;
      const prefix = (_a3 = props.prefix) !== null && _a3 !== void 0 ? _a3 : "l";
      return classNames(type.value == "font" ? prefix : null, props.lClass);
    });
    const styles = vue.computed(() => {
      var _a3;
      const fontSize = addUnit(props.size);
      const isFont = type.value == "font";
      return stringifyStyle(new UTSJSONObject({
        fontFamily: isFont ? (_a3 = fontIcon.value) === null || _a3 === void 0 ? null : _a3.fontFamily : false,
        fontSize: isFont ? fontSize : false,
        color: isFont ? props.color : false,
        width: !isFont ? fontSize : false,
        height: !isFont ? fontSize : false
      }), props.lStyle);
    });
    const handleClick = () => {
      emit("click");
    };
    return () => {
      "raw js";
      vue.createSharedDataIf(() => {
        return vue.setSharedData(__sharedData, 0, vue.toSharedDataBoolean(vue.unref(type) == "font" && !vue.unref(fontLoading)));
      }, () => {
        vue.setSharedDataEvent(__sharedData, 1, handleClick);
        vue.renderSharedDataEffect(() => {
          var _a3;
          vue.setSharedDataClass(__sharedData, 2, ["weapp-tw-border l-icon l-icon--font l-class", vue.unref(classes)]);
          vue.setSharedDataStyle(__sharedData, 3, vue.unref(styles));
          vue.setSharedData(__sharedData, 4, vue.toDisplayString((_a3 = vue.unref(fontIcon)) == null ? void 0 : _a3.char));
        });
      }, () => {
        return vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 5, vue.toSharedDataBoolean(vue.unref(type) == "image" && (!vue.unref(parsed).isSvg || __props.color == null)));
        }, () => {
          vue.setSharedDataEvent(__sharedData, 6, handleClick);
          vue.renderSharedDataEffect(() => {
            vue.setSharedDataClass(__sharedData, 7, ["l-icon l-icon--image l-class", vue.unref(classes)]);
            vue.setSharedDataStyle(__sharedData, 8, vue.unref(styles));
            vue.setSharedDataAttr(__sharedData, 9, vue.toSharedDataString(vue.unref(imageUrl)));
          });
        }, () => {
          return vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 10, vue.toSharedDataBoolean(vue.unref(iconifyUrl) != null || vue.unref(type) == "image" && vue.unref(parsed).isSvg && __props.color != null));
          }, () => {
            vue.setSharedDataEvent(__sharedData, 11, handleClick);
            vue.renderSharedDataEffect(() => {
              var _a3;
              vue.setSharedDataClass(__sharedData, 12, ["l-icon l-icon--image l-class", vue.unref(classes)]);
              vue.setSharedDataStyle(__sharedData, 13, vue.unref(styles));
              vue.setSharedDataAttr(__sharedData, 14, vue.toSharedDataString((_a3 = vue.unref(iconifyUrl)) != null ? _a3 : vue.unref(imageUrl)));
            });
          });
        }, 517);
      }, 261);
      return __sharedData;
    };
  } }));
  const _style_0$N = {};
  const _style_1$s = {"@FONT-FACE":[{"src":"url(\"/uni_modules/lime-icon/static/app/t4.ttf\")","fontFamily":"l"}]};
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["styles", [_style_0$N, _style_1$s]]]);
  const __className$L = "GenSrcPagesBasicComponentsIconDemoCard";
  const _sfc_main$M = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$L,
    __filename: "src/pages/basic/components/IconDemoCard.uvue",
    __name: "IconDemoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsIconDemoCardSharedData", sharedDataClassId: 0 })));
      const iconDemoTitle = vue.computed(() => {
        return $t$1("basic.iconDemoTitle");
      });
      const svgAuthWarning = vue.computed(() => {
        return $t$1("basic.svgAuthWarning");
      });
      return () => {
        "raw js";
        const _component_uni_icons = __easycom_0$2;
        const _component_l_icon = __easycom_1$1;
        const n19 = vue.createSharedDataComponent(
          Card,
          "ef38193e",
          { title: () => {
            return iconDemoTitle.value;
          } },
          {
            "default": vue.withSharedDataVaporCtx(() => {
              vue.setSharedDataStyle(__sharedData, 3, { color: "var(--text-color, #475569)" });
              const n3 = vue.createSharedDataComponentWithFallback(_component_uni_icons, "f7caf78a", {
                type: "contact",
                size: "26",
                style: "color: #3b82f6; margin-right: 8px;"
              });
              vue.setSharedData(__sharedData, 1, n3 == null ? void 0 : n3.sharedData);
              vue.setSharedDataStyle(__sharedData, 4, { color: "var(--text-secondary, #94a3b8)" });
              vue.setSharedDataStyle(__sharedData, 5, { backgroundColor: "var(--border-color, #f1f5f9)" });
              vue.setSharedDataStyle(__sharedData, 6, { color: "var(--text-color, #475569)" });
              vue.renderSharedDataEffect(() => {
                return vue.setSharedData(__sharedData, 9, vue.toDisplayString(svgAuthWarning.value));
              });
              const n14 = vue.createSharedDataComponentWithFallback(_component_l_icon, "019849e8", {
                name: "circle",
                size: "24",
                style: "color: #10b981; margin-right: 8px;"
              });
              vue.setSharedData(__sharedData, 2, n14 == null ? void 0 : n14.sharedData);
              vue.setSharedDataStyle(__sharedData, 7, { color: "var(--text-secondary, #94a3b8)" });
              vue.setSharedDataStyle(__sharedData, 8, { backgroundColor: "var(--border-color, #f1f5f9)" });
            })
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n19.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$M = {};
  const _style_1$r = {};
  const IconDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["styles", [_style_0$M, _style_1$r]]]);
  function toast(message2, _type = "default") {
    uni.showToast({
      title: message2,
      icon: "none"
    });
  }
  function toastSuccess(message2) {
    uni.showToast({
      title: message2,
      icon: "success"
    });
  }
  const __className$K = "GenSrcPagesBasicComponentsLangSwitchCard";
  class LanguageOption extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            label: { type: String, optional: false },
            value: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = LanguageOption.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.label = this.__props__.label;
      this.value = this.__props__.value;
      delete this.__props__;
    }
  }
  const _sfc_main$L = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$K,
    __filename: "src/pages/basic/components/LangSwitchCard.uvue",
    __name: "LangSwitchCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsLangSwitchCardSharedData", sharedDataClassId: 0 })));
      const appStore = useAppStore();
      const langTitle = vue.computed(() => {
        return $t$1("basic.langTitle");
      });
      const langPreview = vue.computed(() => {
        return $t$1("basic.langPreview");
      });
      const welcomeText = vue.computed(() => {
        return $t$1("message.welcome");
      });
      const helloText = vue.computed(() => {
        return $t$1("message.hello", new UTSJSONObject({ msg: "hi" }));
      });
      const currentLocale = vue.computed(() => {
        return appStore.state.locale;
      });
      const languageOptions = [
        new LanguageOption({ label: "简体中文", value: "zh-CN" }),
        new LanguageOption({ label: "English", value: "en-US" })
      ];
      function switchLanguage(lang) {
        appStore.setLocale(lang);
        setTabbarItem();
        toast($t$1("message.switch_success"));
      }
      return () => {
        "raw js";
        const _component_uni_icons = __easycom_0$2;
        const n17 = vue.createSharedDataComponent(
          Card,
          "2b814c75",
          { title: () => {
            return langTitle.value;
          } },
          {
            "default": vue.withSharedDataVaporCtx(() => {
              vue.setSharedDataStyle(__sharedData, 2, { color: "var(--text-secondary, #94a3b8)" });
              vue.setSharedDataStyle(__sharedData, 3, { color: "var(--text-color, #1e293b)" });
              vue.setSharedDataStyle(__sharedData, 4, { color: "var(--text-secondary, #475569)" });
              vue.setSharedDataStyle(__sharedData, 5, { borderColor: "var(--border-color, #e2e8f0)" });
              vue.renderSharedDataEffect(() => {
                vue.setSharedData(__sharedData, 6, vue.toDisplayString(langPreview.value));
                vue.setSharedData(__sharedData, 7, vue.toDisplayString(welcomeText.value));
                vue.setSharedData(__sharedData, 8, vue.toDisplayString(helloText.value));
              });
              vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 1, vue.createSharedDataVFor(__sharedDataScope, () => {
                return new UniDynamicSharedData(__sharedDataScope, { bundleKey: "".concat(__className$K, "SharedData"), sharedDataClassId: 1 });
              })), () => {
                return languageOptions;
              }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                vue.renderSharedDataEffect(() => {
                  const _item = _for_item0.value;
                  vue.setSharedDataStyle(__sharedData_VFor0, 6, { color: currentLocale.value == _item.value ? "var(--theme-color, #3b82f6)" : "var(--text-color, #334155)" });
                  vue.setSharedData(__sharedData_VFor0, 7, vue.toDisplayString(_item.label));
                });
                vue.createSharedDataIf(() => {
                  return vue.setSharedData(__sharedData_VFor0, 3, vue.toSharedDataBoolean(currentLocale.value == _for_item0.value.value));
                }, () => {
                  const n10 = vue.createSharedDataComponentWithFallback(_component_uni_icons, "88bf76b8-" + _for_key0.value, {
                    type: "checkmarkempty",
                    size: "20",
                    color: () => {
                      return vue.unref(appStore).state.theme;
                    }
                  });
                  vue.setSharedData(__sharedData_VFor0, 4, n10 == null ? void 0 : n10.sharedData);
                });
                vue.setSharedDataEvent(__sharedData_VFor0, 5, () => {
                  return switchLanguage(_for_item0.value.value);
                });
                vue.createSharedDataIf(() => {
                  return vue.setSharedData(__sharedData_VFor0, 1, vue.toSharedDataBoolean(_for_key0.value < languageOptions.length - 1));
                }, () => {
                  vue.setSharedDataStyle(__sharedData_VFor0, 2, { backgroundColor: "var(--border-color, #f1f5f9)" });
                });
                return null;
              }, (__sharedData_VFor0, item, index) => {
                return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(index));
              }, 32);
            })
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n17.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$L = {};
  const _style_1$q = {};
  const LangSwitchCard = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["styles", [_style_0$L, _style_1$q]]]);
  const __className$J = "GenSrcPagesBasicComponentsLayoutDemoCard";
  const _sfc_main$K = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$J,
    __filename: "src/pages/basic/components/LayoutDemoCard.uvue",
    __name: "LayoutDemoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsLayoutDemoCardSharedData", sharedDataClassId: 0 })));
      function navigateToDemo() {
        uni.navigateTo({
          url: "/src/sub/layoutDemo/layoutDemo",
          fail: (err) => {
            uni.__log__("error", "at src/pages/basic/components/LayoutDemoCard.uvue:158", "navigateToDemo fail:", err);
          }
        });
      }
      return () => {
        "raw js";
        const n40 = vue.createSharedDataComponent(
          Card,
          "1d828da0",
          { title: "页面布局与系统度量" },
          {
            "default": () => {
              vue.setSharedDataStyle(__sharedData, 1, { color: "var(--text-secondary, #64748b)" });
              vue.setSharedDataStyle(__sharedData, 2, { color: "var(--text-color, #1e293b)" });
              vue.setSharedDataStyle(__sharedData, 3, { color: "var(--text-secondary, #64748b)" });
              vue.setSharedDataStyle(__sharedData, 4, { color: "var(--text-secondary, #64748b)" });
              vue.setSharedDataStyle(__sharedData, 5, { color: "var(--text-color, #1e293b)" });
              vue.setSharedDataStyle(__sharedData, 6, {
                backgroundColor: "var(--card-bg, #ffffff)",
                borderColor: "var(--border-color, #e2e8f0)"
              });
              vue.setSharedDataStyle(__sharedData, 7, { color: "var(--text-secondary, #64748b)" });
              vue.setSharedDataStyle(__sharedData, 8, { color: "var(--text-color, #1e293b)" });
              vue.setSharedDataStyle(__sharedData, 9, {
                backgroundColor: "var(--card-bg, #ffffff)",
                borderColor: "var(--border-color, #e2e8f0)"
              });
              vue.setSharedDataStyle(__sharedData, 10, { color: "var(--text-secondary, #64748b)" });
              vue.setSharedDataStyle(__sharedData, 11, { color: "var(--text-color, #1e293b)" });
              vue.setSharedDataStyle(__sharedData, 12, {
                backgroundColor: "var(--card-bg, #ffffff)",
                borderColor: "var(--border-color, #e2e8f0)"
              });
              vue.setSharedDataStyle(__sharedData, 13, { color: "var(--text-secondary, #64748b)" });
              vue.setSharedDataStyle(__sharedData, 14, { color: "var(--text-color, #1e293b)" });
              vue.setSharedDataStyle(__sharedData, 15, {
                backgroundColor: "var(--card-bg, #ffffff)",
                borderColor: "var(--border-color, #e2e8f0)"
              });
              vue.setSharedDataStyle(__sharedData, 16, {
                backgroundColor: "var(--bg-color, #f8fafc)",
                borderColor: "var(--border-color, #e2e8f0)"
              });
              vue.setSharedDataEvent(__sharedData, 17, navigateToDemo);
              vue.setSharedDataStyle(__sharedData, 18, { backgroundColor: "var(--theme-color, #3b82f6)" });
              vue.renderSharedDataEffect(() => {
                vue.setSharedData(__sharedData, 19, vue.toDisplayString(vue.unref(windowWidth)));
                vue.setSharedData(__sharedData, 20, vue.toDisplayString(vue.unref(windowHeight)));
                vue.setSharedData(__sharedData, 21, vue.toDisplayString(vue.unref(statusBarHeight)));
                vue.setSharedData(__sharedData, 22, vue.toDisplayString(vue.unref(NAVBAR_CONTENT_HEIGHT)));
                vue.setSharedData(__sharedData, 23, vue.toDisplayString(vue.unref(safeAreaBottom$1)));
                vue.setSharedData(__sharedData, 24, vue.toDisplayString(vue.unref(availableHeight)));
              });
            }
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n40.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$K = {};
  const _style_1$p = {};
  const LayoutDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["styles", [_style_0$K, _style_1$p]]]);
  const __className$I = "GenSrcPagesBasicComponentsChildDemoBox";
  const _sfc_main$J = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$I,
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
    setup(__props, _a2) {
      var __emit = _a2.emit;
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
          toast("请输入消息内容");
          return null;
        }
        emit("send-msg", inputMsg.value);
        toastSuccess("消息已发送");
      }
      return () => {
        "raw js";
        const _component_input = vue.resolveComponent("input");
        vue.createSharedDataSlot("header", null, null, () => {
          vue.setSharedDataStyle(__sharedData, 0, { color: "var(--text-color, #334155)" });
          vue.renderSharedDataEffect(() => {
            return vue.setSharedData(__sharedData, 1, vue.toDisplayString(__props.title));
          });
        });
        vue.setSharedDataStyle(__sharedData, 5, { backgroundColor: "var(--border-color, #e2e8f0)" });
        vue.setSharedDataStyle(__sharedData, 6, { color: "var(--text-color, #475569)" });
        vue.setSharedDataStyle(__sharedData, 7, { color: "var(--text-secondary, #64748b)" });
        vue.setSharedDataStyle(__sharedData, 8, { backgroundColor: "var(--card-bg, #ffffff)", borderColor: "var(--border-color, #f1f5f9)" });
        vue.setSharedDataStyle(__sharedData, 9, { color: "var(--text-color, #475569)" });
        vue.renderSharedDataEffect(() => {
          return vue.setSharedData(__sharedData, 19, vue.toDisplayString(__props.count));
        });
        vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 2, vue.createSharedDataVFor(__sharedDataScope, () => {
          return new UniDynamicSharedData(__sharedDataScope, { bundleKey: "".concat(__className$I, "SharedData"), sharedDataClassId: 1 });
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
          }, (data2) => {
            return vue.setSharedData(__sharedData_VFor0, 1, data2);
          }, () => {
            vue.setSharedDataStyle(__sharedData_VFor0, 2, { color: "var(--text-secondary, #64748b)" });
            vue.setSharedDataStyle(__sharedData_VFor0, 3, { backgroundColor: "var(--bg-color, #f8fafc)" });
            vue.renderSharedDataEffect(() => {
              vue.setSharedData(__sharedData_VFor0, 4, vue.toDisplayString(_for_key0.value + 1));
              vue.setSharedData(__sharedData_VFor0, 5, vue.toDisplayString(_for_item0.value));
            });
          });
          return null;
        }, (__sharedData_VFor0, item, index) => {
          return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(index));
        });
        vue.setSharedDataStyle(__sharedData, 10, { backgroundColor: "var(--card-bg, #ffffff)", borderColor: "var(--border-color, #f1f5f9)" });
        vue.setSharedDataStyle(__sharedData, 11, { color: "var(--text-color, #475569)" });
        vue.setSharedDataEvent(__sharedData, 12, handleAdd);
        vue.setSharedDataEvent(__sharedData, 13, handleReset);
        const n25 = vue.createSharedDataComponentWithFallback(_component_input, "51e1baad", {
          value: () => {
            return inputMsg.value;
          },
          "onUpdate:value": () => {
            return (_value) => {
              return inputMsg.value = _value;
            };
          },
          placeholder: "输入要送回父组件的消息",
          class: "wtu-gn6exa-c wtu-uhnxe-n wtu-bw357p-w wtu-9asxfc-x wtu-13d4egz-j wtu-1p08b77-2 wtu-1iclnp7-3",
          style: { backgroundColor: "var(--card-bg, #ffffff)", color: "var(--text-color, #334155)", borderColor: "var(--border-color, #cbd5e1)" }
        });
        vue.setSharedData(__sharedData, 3, n25 == null ? void 0 : n25.sharedData);
        vue.setSharedDataEvent(__sharedData, 14, handleSendMsg);
        vue.setSharedDataStyle(__sharedData, 15, { backgroundColor: "var(--bg-color, #f8fafc)", borderColor: "var(--border-color, #e2e8f0)" });
        vue.setSharedDataStyle(__sharedData, 16, { backgroundColor: "var(--card-bg, #ffffff)", borderColor: "var(--border-color, #f1f5f9)" });
        vue.setSharedDataStyle(__sharedData, 17, { backgroundColor: "var(--border-color, #e2e8f0)" });
        vue.createSharedDataSlot("footer", null, null, () => {
          vue.setSharedDataStyle(__sharedData, 4, { color: "var(--text-secondary, #94a3b8)" });
        });
        vue.setSharedDataStyle(__sharedData, 18, { backgroundColor: "var(--bg-color, #f8fafc)", borderColor: "var(--border-color, #e2e8f0)" });
        return __sharedData;
      };
    }
  });
  const _style_0$J = {};
  const _style_1$o = {};
  const ChildDemoBox = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["styles", [_style_0$J, _style_1$o]]]);
  const __className$H = "GenSrcPagesBasicComponentsPropsDemoCard";
  const _sfc_main$I = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$H,
    __filename: "src/pages/basic/components/PropsDemoCard.uvue",
    __name: "PropsDemoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsPropsDemoCardSharedData", sharedDataClassId: 0 })));
      const parentCount = vue.ref(10);
      const childMessage = vue.ref("暂无子组件消息");
      const tagList = vue.ref(["响应式 Props 传递", "Emits 事件监听与回传", "具名 Header/Footer 插槽", "具名 Slot 作用域传参"]);
      function onChildAdd(delta2) {
        parentCount.value += delta2;
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
              vue.setSharedDataEvent(__sharedData, 4, addFiveFromParent);
              vue.setSharedDataEvent(__sharedData, 5, resetParent);
              vue.renderSharedDataEffect(() => {
                vue.setSharedData(__sharedData, 6, vue.toDisplayString(parentCount.value));
                vue.setSharedData(__sharedData, 7, vue.toDisplayString(childMessage.value));
              });
              const n26 = vue.createSharedDataComponent(ChildDemoBox, "2c5bebb2", {
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
                  vue.setSharedDataStyle(__sharedData, 2, { color: "var(--text-color, #1e293b)" });
                },
                "itemSlot": vue.createSharedDataScopedSlot(vue.createSharedDataVSlot(__sharedDataScope, () => {
                  return new UniDynamicSharedData(__sharedDataScope, { bundleKey: "".concat(__className$H, "SharedData"), sharedDataClassId: 1 });
                }), (_slotProps0, __sharedData_VSlot0) => {
                  vue.renderSharedDataEffect(() => {
                    const _item = _slotProps0.item;
                    vue.setSharedData(__sharedData_VSlot0, 0, vue.toDisplayString(_slotProps0.index + 1));
                    vue.setSharedData(__sharedData_VSlot0, 1, vue.toDisplayString(_item));
                    vue.setSharedData(__sharedData_VSlot0, 2, vue.toDisplayString(_item));
                  });
                }),
                "footer": () => {
                  vue.setSharedDataStyle(__sharedData, 3, { color: "var(--text-secondary, #64748b)" });
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
  const _style_0$I = {};
  const _style_1$n = {};
  const PropsDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["styles", [_style_0$I, _style_1$n]]]);
  const __className$G = "GenSrcPagesBasicComponentsRouterDemoCard";
  const _sfc_main$H = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$G,
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
        toastSuccess("已清除登录状态");
      }
      return () => {
        "raw js";
        const n10 = vue.createSharedDataComponent(
          Card,
          "65bc6202",
          { title: "路由拦截与传参测试" },
          {
            "default": () => {
              vue.setSharedDataStyle(__sharedData, 1, { color: "var(--text-secondary, #64748b)" });
              vue.setSharedDataStyle(__sharedData, 2, { color: "var(--text-secondary, #94a3b8)" });
              vue.setSharedDataStyle(__sharedData, 3, { borderColor: "var(--border-color, #e2e8f0)" });
              vue.setSharedDataEvent(__sharedData, 4, jumpToTest);
              vue.setSharedDataStyle(__sharedData, 5, { backgroundColor: "var(--theme-color, #3182ce)" });
              vue.setSharedDataEvent(__sharedData, 6, handleLogout);
              vue.renderSharedDataEffect(() => {
                const _hasLogin = hasLogin.value;
                vue.setSharedDataStyle(__sharedData, 7, { fontSize: "14px", fontWeight: "bold", color: _hasLogin ? "#10b981" : "#f43f5e" });
                vue.setSharedData(__sharedData, 8, vue.toDisplayString(_hasLogin ? "已登录" : "未登录"));
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
  const _style_0$H = {};
  const _style_1$m = {};
  const RouterDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["styles", [_style_0$H, _style_1$m]]]);
  const __className$F = "GenSrcPagesBasicComponentsRxjsDemoCard";
  const _sfc_main$G = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$F,
    __filename: "src/pages/basic/components/RxjsDemoCard.uvue",
    __name: "RxjsDemoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsRxjsDemoCardSharedData", sharedDataClassId: 0 })));
      function navigateToDemo() {
        uni.navigateTo({
          url: "/src/sub/rxjsDemo/rxjsDemo",
          fail: (err) => {
            uni.__log__("error", "at src/pages/basic/components/RxjsDemoCard.uvue:52", "navigateToDemo fail:", err);
          }
        });
      }
      return () => {
        "raw js";
        const n13 = vue.createSharedDataComponent(
          Card,
          "503344c5",
          { title: "rxjs 流式演示" },
          {
            "default": () => {
              vue.setSharedDataStyle(__sharedData, 1, { color: "var(--text-secondary, #64748b)" });
              vue.setSharedDataEvent(__sharedData, 2, navigateToDemo);
              vue.setSharedDataStyle(__sharedData, 3, { backgroundColor: "var(--theme-color, #7c3aed)" });
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
  const _style_0$G = {};
  const _style_1$l = {};
  const RxjsDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["styles", [_style_0$G, _style_1$l]]]);
  const __className$E = "GenSrcPagesBasicComponentsStoreDemoCard";
  const _sfc_main$F = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$E,
    __filename: "src/pages/basic/components/StoreDemoCard.uvue",
    __name: "StoreDemoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsStoreDemoCardSharedData", sharedDataClassId: 0 })));
      const appStore = useAppStore();
      const userStore = useUserStore();
      const tokenStore = useTokenStore();
      const storeImplementation = vue.computed(() => {
        return appStore.state.mode == "vapor" ? "Vapor 官方 Pinia" : "VDOM x-pinia-s";
      });
      const storeModeColor = vue.computed(() => {
        return appStore.state.mode == "vapor" ? "#10b981" : "#3b82f6";
      });
      const compileMode = vue.computed(() => {
        return getCompileMode();
      });
      const appSummary = vue.computed(() => {
        return "".concat(appStore.state.theme, " / ").concat(appStore.state.locale);
      });
      const userSummary = vue.computed(() => {
        const info = userStore.state.userInfo;
        if (info.userId < 0) {
          return "未写入";
        }
        const name = info.nickname != "" ? info.nickname : info.username;
        return "".concat(name, " (id: ").concat(info.userId, ")");
      });
      const hasLogin = vue.computed(() => {
        return tokenStore.hasValidLogin();
      });
      const tokenSummary = vue.computed(() => {
        return tokenStore.hasValidLogin() ? "已登录（token 有效）" : "未登录";
      });
      function mockLogin() {
        tokenStore.setSingleToken({
          token: "mock-token-UNIBESTX-0001",
          expiresIn: 7200
        });
        userStore.setUserInfo({
          userId: 1001,
          username: "UNIBESTX",
          nickname: "unibestX 演示用户",
          avatar: "/static/logo.png"
        });
        toastSuccess("已写入 userStore / tokenStore");
      }
      function mockLogout() {
        tokenStore.clearToken();
        userStore.clearUserInfo();
        toastSuccess("已重置 userStore / tokenStore");
      }
      return () => {
        "raw js";
        const n22 = vue.createSharedDataComponent(
          Card,
          "4f0cefc3",
          { title: "状态管理与 src/store 模式演示" },
          {
            "default": () => {
              vue.setSharedDataStyle(__sharedData, 1, { color: "var(--text-secondary, #64748b)" });
              vue.setSharedDataStyle(__sharedData, 2, { color: "var(--text-secondary, #64748b)" });
              vue.setSharedDataStyle(__sharedData, 3, { color: "var(--text-color, #2d3748)" });
              vue.setSharedDataStyle(__sharedData, 4, { color: "var(--text-secondary, #64748b)" });
              vue.setSharedDataStyle(__sharedData, 5, { color: "var(--text-color, #2d3748)" });
              vue.setSharedDataStyle(__sharedData, 6, { color: "var(--text-secondary, #64748b)" });
              vue.setSharedDataStyle(__sharedData, 7, { color: "var(--text-color, #2d3748)" });
              vue.setSharedDataStyle(__sharedData, 8, { color: "var(--text-secondary, #64748b)" });
              vue.setSharedDataStyle(__sharedData, 9, { color: "var(--text-secondary, #94a3b8)" });
              vue.setSharedDataStyle(__sharedData, 10, { borderColor: "var(--border-color, #e2e8f0)" });
              vue.setSharedDataEvent(__sharedData, 11, mockLogin);
              vue.setSharedDataStyle(__sharedData, 12, { backgroundColor: "var(--theme-color, #3182ce)" });
              vue.setSharedDataEvent(__sharedData, 13, mockLogout);
              vue.renderSharedDataEffect(() => {
                vue.setSharedDataStyle(__sharedData, 14, { color: storeModeColor.value });
                vue.setSharedData(__sharedData, 15, vue.toDisplayString(storeImplementation.value));
                vue.setSharedData(__sharedData, 16, vue.toDisplayString(compileMode.value));
                vue.setSharedData(__sharedData, 17, vue.toDisplayString(appSummary.value));
                vue.setSharedData(__sharedData, 18, vue.toDisplayString(userSummary.value));
                vue.setSharedDataStyle(__sharedData, 19, { color: hasLogin.value ? "#10b981" : "#f43f5e" });
                vue.setSharedData(__sharedData, 20, vue.toDisplayString(tokenSummary.value));
              });
            }
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n22.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$F = {};
  const _style_1$k = {};
  const StoreDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["styles", [_style_0$F, _style_1$k]]]);
  const __className$D = "GenSrcPagesBasicComponentsTailwindcssDemoCard";
  const _sfc_main$E = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$D,
    __filename: "src/pages/basic/components/TailwindcssDemoCard.uvue",
    __name: "TailwindcssDemoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsTailwindcssDemoCardSharedData", sharedDataClassId: 0 })));
      function copyWebsiteUrl() {
        uni.setClipboardData({
          data: "https://tw.icebreaker.top/zh-cn/",
          success: () => {
            toast("官网网址已复制到剪贴板");
          }
        });
      }
      function navigateToDemo() {
        uni.navigateTo({
          url: "/src/sub/tailwindcss/tailwindcss",
          fail: (err) => {
            uni.__log__("error", "at src/pages/basic/components/TailwindcssDemoCard.uvue:75", "navigateToDemo fail:", err);
          }
        });
      }
      return () => {
        "raw js";
        const n15 = vue.createSharedDataComponent(
          Card,
          "0e428ee6",
          { title: "weapp-tailwindcss Demo" },
          {
            "default": () => {
              vue.setSharedDataStyle(__sharedData, 1, { color: "var(--text-secondary, #64748b)" });
              vue.setSharedDataStyle(__sharedData, 2, { color: "var(--text-color, #475569)" });
              vue.setSharedDataStyle(__sharedData, 3, { color: "var(--text-secondary, #94a3b8)" });
              vue.setSharedDataEvent(__sharedData, 4, copyWebsiteUrl);
              vue.setSharedDataStyle(__sharedData, 5, { backgroundColor: "var(--card-bg, #f1f5f9)", borderColor: "var(--border-color, #e2e8f0)" });
              vue.setSharedDataEvent(__sharedData, 6, navigateToDemo);
              vue.setSharedDataStyle(__sharedData, 7, { backgroundColor: "var(--theme-color, #3b82f6)" });
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
  const _style_0$E = {};
  const _style_1$j = {};
  const TailwindcssDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["styles", [_style_0$E, _style_1$j]]]);
  const __className$C = "GenSrcPagesBasicComponentsThemeSwitchCard";
  class ThemeModeOption extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            label: { type: String, optional: false },
            value: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = ThemeModeOption.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.label = this.__props__.label;
      this.value = this.__props__.value;
      delete this.__props__;
    }
  }
  const _sfc_main$D = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$C,
    __filename: "src/pages/basic/components/ThemeSwitchCard.uvue",
    __name: "ThemeSwitchCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsThemeSwitchCardSharedData", sharedDataClassId: 0 })));
      const appStore = useAppStore();
      const themeTitle = vue.computed(() => {
        return $t$1("basic.themeTitle");
      });
      const themePreview = vue.computed(() => {
        return $t$1("basic.themePreview");
      });
      const themeButton = vue.computed(() => {
        return $t$1("basic.themeButton");
      });
      const themeModeLabel = vue.computed(() => {
        return $t$1("basic.themeModeTitle");
      });
      const currentTheme = vue.computed(() => {
        return appStore.state.theme;
      });
      const currentMode = vue.computed(() => {
        return appStore.state.themeMode;
      });
      const themeModeOptions = vue.computed(() => {
        return [
          new ThemeModeOption({ label: $t$1("basic.themeModeAuto"), value: "auto" }),
          new ThemeModeOption({ label: $t$1("basic.themeModeLight"), value: "light" }),
          new ThemeModeOption({ label: $t$1("basic.themeModeDark"), value: "dark" })
        ];
      });
      function changeTheme(color) {
        appStore.setTheme(color);
        toast($t$1("basic.themeSuccess"));
      }
      function changeThemeMode(value) {
        appStore.setThemeMode(value);
        toast($t$1("basic.themeModeSuccess"));
      }
      return () => {
        "raw js";
        const n18 = vue.createSharedDataComponent(
          Card,
          "a1511108",
          { title: () => {
            return themeTitle.value;
          } },
          {
            "default": () => {
              vue.setSharedDataStyle(__sharedData, 3, { color: "var(--text-secondary, #94a3b8)" });
              vue.setSharedDataStyle(__sharedData, 4, { borderColor: "var(--border-color, #e2e8f0)" });
              vue.renderSharedDataEffect(() => {
                vue.setSharedData(__sharedData, 7, vue.toDisplayString(themePreview.value));
                vue.setSharedDataStyle(__sharedData, 8, { backgroundColor: currentTheme.value });
                vue.setSharedData(__sharedData, 9, vue.toDisplayString(themeButton.value));
              });
              vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 1, vue.createSharedDataVFor(__sharedDataScope, () => {
                return new UniDynamicSharedData(__sharedDataScope, { bundleKey: "".concat(__className$C, "SharedData"), sharedDataClassId: 1 });
              })), () => {
                return vue.unref(THEME_COLOR_PRESETS);
              }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                vue.renderSharedDataEffect(() => {
                  const _item = _for_item0.value;
                  vue.setSharedDataStyle(__sharedData_VFor0, 3, {
                    backgroundColor: _item,
                    borderWidth: currentTheme.value == _item ? "3px" : "0px",
                    borderStyle: "solid",
                    borderColor: vue.unref(appStore).state.isDark ? "#ffffff" : "#1e293b"
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
              vue.setSharedDataStyle(__sharedData, 5, { color: "var(--text-color, #2d3748)" });
              vue.renderSharedDataEffect(() => {
                return vue.setSharedData(__sharedData, 10, vue.toDisplayString(themeModeLabel.value));
              });
              vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 2, vue.createSharedDataVFor(__sharedDataScope, () => {
                return new UniDynamicSharedData(__sharedDataScope, { bundleKey: "".concat(__className$C, "SharedData"), sharedDataClassId: 2 });
              })), () => {
                return themeModeOptions.value;
              }, (__sharedData_VFor1, _for_item1, _for_key1) => {
                vue.setSharedDataEvent(__sharedData_VFor1, 1, () => {
                  return changeThemeMode(_for_item1.value.value);
                });
                vue.renderSharedDataEffect(() => {
                  const _currentMode = currentMode.value;
                  const _item = _for_item1.value;
                  const _item_value = _item.value;
                  vue.setSharedDataStyle(__sharedData_VFor1, 2, {
                    backgroundColor: _currentMode == _item_value ? currentTheme.value : "transparent"
                  });
                  vue.setSharedDataStyle(__sharedData_VFor1, 3, {
                    color: _currentMode == _item_value ? "#ffffff" : "var(--text-secondary, #64748b)"
                  });
                  vue.setSharedData(__sharedData_VFor1, 4, vue.toDisplayString(_item.label));
                });
                return null;
              }, (__sharedData_VFor1, item, index) => {
                return vue.setSharedData(__sharedData_VFor1, 0, vue.toDisplayString(index));
              }, 1);
              vue.setSharedDataStyle(__sharedData, 6, {
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "var(--border-color, #e2e8f0)"
              });
            }
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n18.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$D = {};
  const _style_1$i = {};
  const ThemeSwitchCard = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["styles", [_style_0$D, _style_1$i]]]);
  const __className$B = "GenSrcPagesBasicViewsBasicView";
  const _sfc_main$C = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$B,
    __filename: "src/pages/basic/views/BasicView.uvue",
    __name: "BasicView",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicViewsBasicViewSharedData", sharedDataClassId: 0 })));
      return () => {
        "raw js";
        const n0 = vue.createSharedDataComponent(LayoutDemoCard, "4b07f016");
        vue.setSharedData(__sharedData, 0, n0.sharedData);
        const n1 = vue.createSharedDataComponent(TailwindcssDemoCard, "4b07ee6c");
        vue.setSharedData(__sharedData, 1, n1.sharedData);
        const n2 = vue.createSharedDataComponent(ThemeSwitchCard, "4b07e7e6");
        vue.setSharedData(__sharedData, 2, n2.sharedData);
        const n3 = vue.createSharedDataComponent(RouterDemoCard, "4b07e18e");
        vue.setSharedData(__sharedData, 3, n3.sharedData);
        const n4 = vue.createSharedDataComponent(StoreDemoCard, "4b07dfde");
        vue.setSharedData(__sharedData, 4, n4.sharedData);
        const n5 = vue.createSharedDataComponent(LangSwitchCard, "4b07d98c");
        vue.setSharedData(__sharedData, 5, n5.sharedData);
        const n6 = vue.createSharedDataComponent(IconDemoCard, "4b07d826");
        vue.setSharedData(__sharedData, 6, n6.sharedData);
        const n7 = vue.createSharedDataComponent(HttpDemoCard, "4b07d19c");
        vue.setSharedData(__sharedData, 7, n7.sharedData);
        const n8 = vue.createSharedDataComponent(RxjsDemoCard, "4b07d058");
        vue.setSharedData(__sharedData, 8, n8.sharedData);
        const n9 = vue.createSharedDataComponent(PropsDemoCard, "4b07c9d4");
        vue.setSharedData(__sharedData, 9, n9.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$C = {};
  const _style_1$h = {};
  const BasicView = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["styles", [_style_0$C, _style_1$h]]]);
  class WebviewEchart {
    constructor(canvasId, webviewCtx = null, element = null) {
      this.canvasId = "";
      this.webviewCtx = null;
      this.element = null;
      this.onEventMap = /* @__PURE__ */ new Map();
      this.onceEventMap = /* @__PURE__ */ new Map();
      this.canvasId = canvasId;
      this.webviewCtx = webviewCtx;
      this.element = element;
    }
    evalJS(code2) {
      if (this.element != null) {
        this.element.evalJS(code2);
        return null;
      }
      if (this.webviewCtx != null) {
        this.webviewCtx.evalJS(code2);
        return null;
      }
      if (this.canvasId != "") {
        const el = uni.getElementById(this.canvasId);
        if (el != null) {
          this.element = el;
          this.element.evalJS(code2);
          return null;
        }
        try {
          const ctx = uni.createWebviewContext(this.canvasId);
          if (ctx != null) {
            this.webviewCtx = ctx;
            this.webviewCtx.evalJS(code2);
            return null;
          }
        } catch (_e2) {
        }
      }
    }
    init(theme = null, opts = new UTSJSONObject({})) {
      this.evalJS("init(".concat(UTS.JSON.stringify(new UTSJSONObject({ theme, opts })), ")"));
    }
    onWebviewMsg(e2) {
      var e_1, _a2;
      uni.__log__("log", "at uni_modules/e-chart/components/e-chart/uts/WebviewEchart.uts:51", "onWebviewMsg", e2.detail.data);
      try {
        for (var _b = __values(e2.detail.data), _c = _b.next(); !_c.done; _c = _b.next()) {
          var msg = _c.value;
          const msgType = msg["type"];
          const data2 = msg["data"];
          const onEventMap = UTS.mapGet(this.onEventMap, msgType);
          if (onEventMap != null) {
            onEventMap(data2);
          }
          const onceEvent = UTS.mapGet(this.onceEventMap, msgType);
          if (onceEvent != null) {
            onceEvent(data2);
            this.onceEventMap.delete(msgType);
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return))
            _a2.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }
    setOption(option, notMerge = false, lazyUpdate = false) {
      this.evalJS("setOption(".concat(UTS.JSON.stringify(option), ", ").concat(notMerge, ", ").concat(lazyUpdate, ")"));
    }
    getOption(success) {
      this.onceEventMap.set("getOption", success);
      this.evalJS("getOption()");
    }
    getWidth(success) {
      this.onceEventMap.set("getWidth", success);
      this.evalJS("getWidth()");
    }
    getHeight(success) {
      this.onceEventMap.set("getHeight", success);
      this.evalJS("getHeight()");
    }
    resize(option = new UTSJSONObject({})) {
      this.evalJS("resize(".concat(UTS.JSON.stringify(option), ")"));
    }
    on(name, handler) {
      this.onEventMap.set(name, handler);
      this.evalJS("on(".concat(UTS.JSON.stringify(new UTSJSONObject({ name })), ")"));
    }
    on(name, query, handler) {
      this.onEventMap.set(name, handler);
      this.evalJS("on(".concat(UTS.JSON.stringify(new UTSJSONObject({ name, query })), ")"));
    }
    off(name) {
      this.evalJS("off(".concat(UTS.JSON.stringify(new UTSJSONObject({ name })), ")"));
    }
    dispatchAction(option) {
      this.evalJS("dispatchAction(".concat(UTS.JSON.stringify(option), ")"));
    }
    showLoading(option) {
      this.evalJS("showLoading(".concat(UTS.JSON.stringify(option), ")"));
    }
    hideLoading() {
      this.evalJS("hideLoading()");
    }
    appendData(option) {
      this.evalJS("appendData(".concat(UTS.JSON.stringify(option), ")"));
    }
    canvasToTempFilePath(option) {
      const success = option["success"];
      this.onceEventMap.set("canvasToTempFilePath", success);
      this.evalJS("canvasToTempFilePath()");
    }
    clear() {
      this.evalJS("clear()");
    }
    dispose() {
      this.evalJS("dispose()");
    }
  }
  function getRandomId() {
    return "chart_".concat(Math.random().toString(36).substring(2, 16));
  }
  function addUnitRpx(num) {
    return typeof num === "number" ? "".concat(num, "rpx") : num;
  }
  const __className$A = "GenUniModulesEChartComponentsEChartEChart";
  const _sfc_main$B = /* @__PURE__ */ vue.defineVaporSharedDataComponent(Object.assign({
    name: "e-chart"
  }, { __dynamicSharedData: true, __className: __className$A, __filename: "uni_modules/e-chart/components/e-chart/e-chart.uvue", __name: "e-chart", props: {
    width: {
      type: [Number, String],
      default: "100%"
    },
    height: {
      type: [Number, String],
      default: 600
    },
    disableScroll: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: ""
    }
  }, emits: ["ready"], setup(__props, _a2) {
    var __expose = _a2.expose, __emit = _a2.emit;
    const __sharedDataScope = vue.useSharedDataScope();
    const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenUniModulesEChartComponentsEChartEChartSharedData", sharedDataClassId: 0 })));
    const emit = __emit;
    const props = __props;
    vue.getCurrentInstance();
    const echartObj = vue.ref(null);
    const canvasId = getRandomId();
    const canvasStyle = vue.computed(() => {
      return "width:".concat(addUnitRpx(props.width), ";height:").concat(addUnitRpx(props.height));
    });
    function onCanvasReady() {
      emit("ready");
    }
    function initAPP(option) {
      var _a3;
      let elem = null;
      let ctx = null;
      try {
        const el = uni.getElementById(canvasId);
        if (el != null) {
          elem = el;
        }
      } catch (_e2) {
      }
      if (elem == null) {
        try {
          ctx = uni.createWebviewContext(canvasId);
        } catch (_e2) {
        }
      }
      echartObj.value = new WebviewEchart(canvasId, ctx, elem);
      echartObj.value.init(props.theme);
      (_a3 = echartObj.value) === null || _a3 === void 0 ? null : _a3.setOption(option);
      setTimeout(() => {
        var _a4, _b;
        (_a4 = echartObj.value) === null || _a4 === void 0 ? null : _a4.init(props.theme);
        (_b = echartObj.value) === null || _b === void 0 ? null : _b.setOption(option);
      }, 120);
      return new UTSJSONObject({ echartObj: echartObj.value });
    }
    function init(option) {
      return __awaiter(this, void 0, void 0, function* () {
        return initAPP(option);
      });
    }
    function getEchartObj() {
      return echartObj.value;
    }
    function setOption(option) {
      var _a3;
      (_a3 = echartObj.value) === null || _a3 === void 0 ? null : _a3.setOption(option);
    }
    function getOption() {
      return new Promise((resolve) => {
        echartObj.value.getOption(resolve);
      });
    }
    function getWidth() {
      return new Promise((resolve) => {
        echartObj.value.getWidth((e2) => {
          resolve(e2["width"]);
        });
      });
    }
    function getHeight() {
      return new Promise((resolve) => {
        echartObj.value.getHeight((e2) => {
          resolve(e2["height"]);
        });
      });
    }
    function resize() {
      var _a3;
      (_a3 = echartObj.value) === null || _a3 === void 0 ? null : _a3.resize();
    }
    function canvasToTempFilePath() {
      return new Promise((resolve, reject) => {
        var _a3;
        const fail = (e2) => {
          uni.showModal(new UTSJSONObject({ title: "保存失败", content: UTS.JSON.stringify(e2), showCancel: false }));
          reject(e2);
        };
        (_a3 = echartObj.value) === null || _a3 === void 0 ? null : _a3.canvasToTempFilePath(new UTSJSONObject({
          success: (e2) => {
            const base64 = e2["base64"];
            const fileSystemManager = uni.getFileSystemManager();
            const filePath = "".concat(uni.env.USER_DATA_PATH, "/").concat(Date.now(), ".png");
            fileSystemManager.writeFile({
              filePath,
              encoding: "base64",
              data: base64.replace("data:image/png;base64,", ""),
              success: (_res) => {
                resolve(filePath);
              },
              fail: (err) => {
                fail(err);
              }
            });
          },
          fail
        }));
      });
    }
    function showLoading(option) {
      var _a3;
      (_a3 = echartObj.value) === null || _a3 === void 0 ? null : _a3.showLoading(option);
    }
    function hideLoading() {
      var _a3;
      (_a3 = echartObj.value) === null || _a3 === void 0 ? null : _a3.hideLoading();
    }
    function onWebviewMsg(e2) {
      var _a3;
      (_a3 = echartObj.value) === null || _a3 === void 0 ? null : _a3.onWebviewMsg(e2);
    }
    function onWebviewError(e2) {
      uni.__log__("error", "at uni_modules/e-chart/components/e-chart/e-chart.uvue:439", "onWebviewError:", e2);
    }
    vue.watch(() => {
      return props.width;
    }, () => {
      resize();
    });
    vue.watch(() => {
      return props.height;
    }, () => {
      resize();
    });
    vue.onMounted(() => {
    });
    __expose({
      init,
      setOption,
      getOption,
      getWidth,
      getHeight,
      resize,
      getEchartObj,
      canvasToTempFilePath,
      showLoading,
      hideLoading,
      onCanvasReady
    });
    return () => {
      "raw js";
      const _component_web_view = vue.resolveComponent("web-view");
      const n0 = vue.createSharedDataComponentWithFallback(
        _component_web_view,
        "8080c770",
        {
          id: () => {
            return vue.unref(canvasId);
          },
          style: () => {
            return canvasStyle.value;
          },
          bounces: false,
          horizontalScrollBarAccess: false,
          verticalScrollBarAccess: false,
          "webview-styles": { progress: false },
          src: "/uni_modules/e-chart/static/app/webview.html",
          onLoad: () => {
            return onCanvasReady;
          },
          onError: () => {
            return onWebviewError;
          },
          onMessage: () => {
            return onWebviewMsg;
          }
        },
        null,
        1
        /* SINGLE_ROOT */
      );
      vue.setSharedData(__sharedData, 0, n0 == null ? void 0 : n0.sharedData);
      return __sharedData;
    };
  } }));
  const _style_0$B = {};
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["styles", [_style_0$B]]]);
  const __className$z = "GenSrcPagesFunctionComponentsEchartsDemoCard";
  const gridKey = "grid";
  const _sfc_main$A = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$z,
    __filename: "src/pages/function/components/EchartsDemoCard.uvue",
    __name: "EchartsDemoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionComponentsEchartsDemoCardSharedData", sharedDataClassId: 0 })));
      const echartTitle = vue.computed(() => {
        return $t$1("basic.echartTitle");
      });
      const echartLineText = vue.computed(() => {
        return $t$1("basic.echartLine");
      });
      const echartBarText = vue.computed(() => {
        return $t$1("basic.echartBar");
      });
      const echartPieText = vue.computed(() => {
        return $t$1("basic.echartPie");
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
        tooltip: new UTSJSONObject({
          show: true,
          trigger: "axis",
          axisPointer: new UTSJSONObject({
            type: "line"
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
          name: "访问量",
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
        tooltip: new UTSJSONObject({
          show: true,
          trigger: "axis",
          axisPointer: new UTSJSONObject({
            type: "shadow"
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
          name: "访问量",
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
        tooltip: new UTSJSONObject({
          show: true,
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
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
          const chart2 = echartRef.value;
          chart2.$callMethod("init", lineOption);
        }
      }
      function changeToLine() {
        currentType.value = "line";
        if (echartRef.value != null) {
          const chart2 = echartRef.value;
          chart2.$callMethod("setOption", lineOption);
        }
      }
      function changeToBar() {
        currentType.value = "bar";
        if (echartRef.value != null) {
          const chart2 = echartRef.value;
          chart2.$callMethod("setOption", barOption);
        }
      }
      function changeToPie() {
        currentType.value = "pie";
        if (echartRef.value != null) {
          const chart2 = echartRef.value;
          chart2.$callMethod("setOption", pieOption);
        }
      }
      const windowWidth2 = vue.computed(() => {
        var _a2, _b;
        return (_b = (_a2 = systemInfo.value) === null || _a2 === void 0 ? null : _a2.windowWidth) !== null && _b !== void 0 ? _b : 0;
      });
      vue.watch(windowWidth2, () => {
        setTimeout(() => {
          if (echartRef.value != null) {
            const chart2 = echartRef.value;
            chart2.$callMethod("resize");
          }
        }, 100);
      });
      return () => {
        "raw js";
        const _setTemplateRef = vue.createSharedDataTemplateRefSetter();
        const _component_e_chart = __easycom_0$1;
        const n12 = vue.createSharedDataComponent(
          Card,
          "207b4afe",
          { title: () => {
            return echartTitle.value;
          } },
          {
            "default": vue.withSharedDataVaporCtx(() => {
              const n0 = vue.createSharedDataComponentWithFallback(_component_e_chart, "2256fbc4", {
                height: "280px",
                class: "wtu-1eenqzx-0 wtu-gb6ewa-3",
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
                vue.setSharedDataClass(__sharedData, 5, ["weapp-tw-border wtu-1eenqzx-0 wtu-awtgxw-9 wtu-17udy5a-a wtu-17mrqkv-b wtu-jwuk9m-4 wtu-9mo7se-c wtu-j5z7s2-d", _currentType !== "line" ? "wtu-gr3qgn-e" : "wtu-1nddg0a-f"]);
                vue.setSharedDataClass(__sharedData, 6, ["weapp-tw-border wtu-1vlbs7-g wtu-1qxg3v7-h", _currentType !== "line" ? "wtu-uuxbj2-i" : "wtu-1luxfjz-j"]);
                vue.setSharedData(__sharedData, 7, vue.toDisplayString(echartLineText.value));
                vue.setSharedDataClass(__sharedData, 8, ["weapp-tw-border wtu-1eenqzx-0 wtu-awtgxw-9 wtu-17udy5a-a wtu-17mrqkv-b wtu-jwuk9m-4 wtu-9mo7se-c wtu-j5z7s2-d", _currentType !== "bar" ? "wtu-c87sgr-k" : "wtu-xmyrje-l"]);
                vue.setSharedDataClass(__sharedData, 9, ["weapp-tw-border wtu-1vlbs7-g wtu-1qxg3v7-h", _currentType !== "bar" ? "wtu-rrixi6-m" : "wtu-1luxfjz-j"]);
                vue.setSharedData(__sharedData, 10, vue.toDisplayString(echartBarText.value));
                vue.setSharedDataClass(__sharedData, 11, ["weapp-tw-border wtu-1eenqzx-0 wtu-awtgxw-9 wtu-17udy5a-a wtu-17mrqkv-b wtu-jwuk9m-4 wtu-9mo7se-c wtu-j5z7s2-d", _currentType !== "pie" ? "wtu-zys06v-n" : "wtu-16spet0-o"]);
                vue.setSharedDataClass(__sharedData, 12, ["weapp-tw-border wtu-1vlbs7-g wtu-1qxg3v7-h", _currentType !== "pie" ? "wtu-1lm0h8g-p" : "wtu-1luxfjz-j"]);
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
  const _style_0$A = {};
  const _style_1$g = {};
  const EchartsDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["styles", [_style_0$A, _style_1$g]]]);
  const __className$y = "GenSrcPagesFunctionComponentsUtilsNavCard";
  const _sfc_main$z = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$y,
    __filename: "src/pages/function/components/UtilsNavCard.uvue",
    __name: "UtilsNavCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionComponentsUtilsNavCardSharedData", sharedDataClassId: 0 })));
      function navigateToDevice() {
        uni.navigateTo({
          url: "/src/sub/device/device"
        });
      }
      function navigateToLodash() {
        uni.navigateTo({
          url: "/src/sub/lodash/lodash"
        });
      }
      function navigateToCrypto() {
        uni.navigateTo({
          url: "/src/sub/crypto/crypto"
        });
      }
      function navigateToTime() {
        uni.navigateTo({
          url: "/src/sub/time/time"
        });
      }
      return () => {
        "raw js";
        const n38 = vue.createSharedDataComponent(
          Card,
          "36efab7a",
          { title: "实用工具库与系统能力" },
          {
            "default": () => {
              vue.setSharedDataEvent(__sharedData, 1, navigateToDevice);
              vue.setSharedDataEvent(__sharedData, 2, navigateToLodash);
              vue.setSharedDataEvent(__sharedData, 3, navigateToCrypto);
              vue.setSharedDataEvent(__sharedData, 4, navigateToTime);
            }
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n38.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$z = {};
  const _style_1$f = {};
  const UtilsNavCard = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["styles", [_style_0$z, _style_1$f]]]);
  const __className$x = "GenSrcPagesFunctionComponentsZPagingDemoCard";
  class PreviewItem extends UTS.UTSType {
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
    constructor(options, metadata = PreviewItem.get$UTSMetadata$(), isJSONParse = false) {
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
  const _sfc_main$y = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$x,
    __filename: "src/pages/function/components/ZPagingDemoCard.uvue",
    __name: "ZPagingDemoCard",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionComponentsZPagingDemoCardSharedData", sharedDataClassId: 0 })));
      const previewItems = [
        new PreviewItem({
          id: 1,
          title: "深入解析 uni-app X 跨端高性能分页实践",
          summary: "基于 UTS 强类型系统与原生渲染管道构建的高性能架构。",
          tag: "z-paging-x",
          tagBgColor: "#0957de14",
          tagColor: "#0957de"
        }),
        new PreviewItem({
          id: 2,
          title: "嵌套滚动 nested-scroll 与触底加载设计规范",
          summary: "自研组件原生手势联通与平滑衔接，彻底消除双重滚动冲突。",
          tag: "NestedScroll",
          tagBgColor: "#6366f114",
          tagColor: "#4f46e5"
        })
      ];
      function navigateToZPaging() {
        uni.navigateTo({
          url: "/src/sub/zpaging/zpaging"
        });
      }
      function navigateToNestedScroll() {
        uni.navigateTo({
          url: "/src/sub/nested-scroll/nested-scroll"
        });
      }
      return () => {
        "raw js";
        const n35 = vue.createSharedDataComponent(
          Card,
          "4b4c5faa",
          { title: "数据分页列表 (z-paging-x & NestedScroll)" },
          {
            "default": () => {
              vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 1, vue.createSharedDataVFor(__sharedDataScope, () => {
                return new UniDynamicSharedData(__sharedDataScope, { bundleKey: "".concat(__className$x, "SharedData"), sharedDataClassId: 1 });
              })), () => {
                return previewItems;
              }, (__sharedData_VFor0, _for_item0) => {
                let _item;
                vue.renderSharedDataEffect(() => {
                  _item = _for_item0.value;
                  vue.setSharedDataStyle(__sharedData_VFor0, 1, { backgroundColor: _item.tagBgColor });
                  vue.setSharedDataStyle(__sharedData_VFor0, 2, { color: _item.tagColor });
                  vue.setSharedData(__sharedData_VFor0, 3, vue.toDisplayString(_item.tag));
                  vue.setSharedData(__sharedData_VFor0, 5, vue.toDisplayString(_item.title));
                  vue.setSharedData(__sharedData_VFor0, 6, vue.toDisplayString(_item.summary));
                });
                vue.setSharedData(__sharedData_VFor0, 4, vue.toDisplayString(_item.id));
                return null;
              }, (__sharedData_VFor0, item) => {
                return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(item.id));
              });
              vue.setSharedDataEvent(__sharedData, 2, navigateToZPaging);
              vue.setSharedDataEvent(__sharedData, 3, navigateToNestedScroll);
            }
          },
          1
          /* SINGLE_ROOT */
        );
        vue.setSharedData(__sharedData, 0, n35.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$y = {};
  const _style_1$e = {};
  const ZPagingDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["styles", [_style_0$y, _style_1$e]]]);
  const __className$w = "GenSrcPagesFunctionViewsFunctionView";
  const _sfc_main$x = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$w,
    __filename: "src/pages/function/views/FunctionView.uvue",
    __name: "FunctionView",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionViewsFunctionViewSharedData", sharedDataClassId: 0 })));
      const isCanvasReady = vue.ref(false);
      function refreshData() {
        uni.__log__("log", "at src/pages/function/views/FunctionView.uvue:46", "功能页面刷新中...");
        setTimeout(() => {
          uni.__log__("log", "at src/pages/function/views/FunctionView.uvue:48", "功能页面刷新成功");
          stopNavbarPullDownRefresh();
        }, 1e3);
      }
      onTabShow(2, () => {
        uni.__log__("log", "at src/pages/function/views/FunctionView.uvue:56", "切换到了功能 Tab");
        refreshData();
        if (!isCanvasReady.value) {
          setTimeout(() => {
            isCanvasReady.value = true;
          }, 100);
        }
      }, true);
      vue.onMounted(() => {
        if (curIdx.value < 0 || curIdx.value == 2) {
          setTimeout(() => {
            isCanvasReady.value = true;
          }, 200);
        }
      });
      onNavbarPullDownRefresh(() => {
        if (curIdx.value == 2) {
          refreshData();
        }
      });
      return () => {
        "raw js";
        const n3 = vue.createSharedDataComponent(ZPagingDemoCard, "799515d2");
        vue.setSharedData(__sharedData, 0, n3.sharedData);
        const n4 = vue.createSharedDataComponent(UtilsNavCard, "79951914");
        vue.setSharedData(__sharedData, 1, n4.sharedData);
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 2, vue.toSharedDataBoolean(isCanvasReady.value));
        }, () => {
          const n7 = vue.createSharedDataComponent(EchartsDemoCard, "799519af");
          vue.setSharedData(__sharedData, 3, n7.sharedData);
        });
        return __sharedData;
      };
    }
  });
  const _style_0$x = {};
  const _style_1$d = {};
  const FunctionView = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["styles", [_style_0$x, _style_1$d]]]);
  const LOGIN_STRATEGY_MAP = new UTSJSONObject({
    /** 黑名单策略：默认无需登录，只在特定页面拦截 */
    DEFAULT_NO_NEED_LOGIN: 0,
    /** 白名单策略：默认全部拦截，仅在特定免登录页面直接放行 */
    DEFAULT_NEED_LOGIN: 1
  });
  const LOGIN_STRATEGY = LOGIN_STRATEGY_MAP.DEFAULT_NO_NEED_LOGIN;
  const isNeedLoginMode = LOGIN_STRATEGY == LOGIN_STRATEGY_MAP.DEFAULT_NEED_LOGIN;
  const LOGIN_PAGE = "/src/sub/auth/login";
  const EXCLUDE_LOGIN_PATH_LIST = [
    "/src/sub/test/test"
    // 示例值
  ];
  const __className$v = "GenSrcPagesMeViewsMeView";
  const _sfc_main$w = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$v,
    __filename: "src/pages/me/views/MeView.uvue",
    __name: "MeView",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesMeViewsMeViewSharedData", sharedDataClassId: 0 })));
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
                switchTabbar("/src/pages/index/index");
              }, 0);
            }
          }
        }));
      }
      return () => {
        "raw js";
        vue.renderSharedDataEffect(() => {
          const _userStore = vue.unref(userStore);
          const _userStore_state = _userStore.state;
          vue.setSharedDataAttr(__sharedData, 5, vue.toSharedDataString(avatarUrl.value));
          vue.setSharedData(__sharedData, 6, vue.toDisplayString(_userStore_state.userInfo.username.length > 0 ? _userStore_state.userInfo.username : "未登录用户"));
        });
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 0, vue.toSharedDataBoolean(vue.unref(userStore).state.userInfo.username.length > 0));
        }, () => {
          vue.renderSharedDataEffect(() => {
            return vue.setSharedData(__sharedData, 1, vue.toDisplayString(vue.unref(userStore).state.userInfo.nickname));
          });
        });
        vue.renderSharedDataEffect(() => {
          const _tokenStore = vue.unref(tokenStore);
          vue.setSharedDataClass(__sharedData, 7, ["weapp-tw-border wtu-148q6bp-q wtu-1keauv8-r wtu-1avups1-s wtu-14ztp7o-t wtu-19a7g9d-u wtu-qfn3l3-v", _tokenStore.hasValidLogin() ? "wtu-giefxt-w wtu-miyra4-x" : "wtu-2511oa-y wtu-1wii8sc-n"]);
          vue.setSharedData(__sharedData, 8, vue.toDisplayString(_tokenStore.hasValidLogin() ? "已登录" : "未登录"));
          vue.setSharedData(__sharedData, 9, vue.toDisplayString(userInfoJson.value));
        });
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 2, vue.toSharedDataBoolean(vue.unref(tokenStore).hasValidLogin()));
        }, () => {
          vue.setSharedDataEvent(__sharedData, 3, handleLogout);
        }, () => {
          vue.setSharedDataEvent(__sharedData, 4, handleLogin);
        }, 517);
        return __sharedData;
      };
    }
  });
  const _style_0$w = {};
  const _style_1$c = {};
  const MeView = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["styles", [_style_0$w, _style_1$c]]]);
  const __className$u = "GenSrcTabbarComponentsTabContent";
  const _sfc_main$v = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$u,
    __filename: "src/tabbar/components/TabContent.uvue",
    __name: "TabContent",
    props: {
      /** 对应的 TabBar 索引（0, 1, 2, 3 等） */
      contentIndex: {
        type: Number,
        required: true
      },
      /** 可选的自定义导航栏标题（若未指定，默认读取当前 TabBar 对应项的多语言文本） */
      title: {
        type: String,
        default: ""
      },
      /** 当前 Tab 是否隐藏顶部导航栏（各 Tab 独立控制显隐，true 隐藏，false 显示） */
      hideNavbar: {
        type: Boolean,
        default: false
      },
      /** 当前 Tab 是否隐藏状态栏占位（默认 false，true 隐藏不占空间，完全沉浸式） */
      hideStatusBar: {
        type: Boolean,
        default: false
      }
    },
    setup(__props, _a2) {
      var __expose = _a2.expose;
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcTabbarComponentsTabContentSharedData", sharedDataClassId: 0 })));
      const props = __props;
      const hasRendered = vue.ref(false);
      const isActive = vue.computed(() => {
        return curIdx.value == props.contentIndex;
      });
      const contentTitle = vue.computed(() => {
        return props.title;
      });
      const shouldHideNavbar = vue.computed(() => {
        return props.hideNavbar;
      });
      const shouldHideStatusBar = vue.computed(() => {
        return props.hideStatusBar;
      });
      const rootStyle = vue.computed(() => {
        return new UTSJSONObject({
          left: isActive.value ? "0px" : "-9999px",
          visibility: isActive.value ? "visible" : "hidden",
          zIndex: isActive.value ? 1 : 0
        });
      });
      function updateNavbarTitle() {
        let targetTitle = "";
        if (props.title.length > 0) {
          targetTitle = props.title;
        } else if (props.contentIndex >= 0 && props.contentIndex < tabbarList.length) {
          const item = tabbarList[props.contentIndex];
          targetTitle = $t$1(item.text);
        }
        if (targetTitle.length > 0) {
          setNavbarTitle(targetTitle);
          uni.setNavigationBarTitle({
            title: targetTitle
          });
        }
      }
      function syncNavbarState() {
        updateNavbarTitle();
        setHideNavbar(props.hideNavbar);
        setHideStatusBar(props.hideStatusBar);
      }
      vue.onMounted(() => {
        if (curIdx.value == props.contentIndex) {
          hasRendered.value = true;
          syncNavbarState();
        }
      });
      vue.watch(isActive, (newVal) => {
        if (newVal) {
          if (!hasRendered.value) {
            hasRendered.value = true;
          }
          syncNavbarState();
        }
      });
      vue.watch(contentTitle, (newTitle) => {
        if (isActive.value && newTitle.length > 0) {
          setNavbarTitle(newTitle);
          uni.setNavigationBarTitle({
            title: newTitle
          });
        }
      });
      vue.watch(shouldHideNavbar, (newVal) => {
        if (isActive.value) {
          setHideNavbar(newVal);
        }
      });
      vue.watch(shouldHideStatusBar, (newVal) => {
        if (isActive.value) {
          setHideStatusBar(newVal);
        }
      });
      __expose({
        updateNavbarTitle,
        syncNavbarState
      });
      return () => {
        "raw js";
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 0, vue.toSharedDataBoolean(hasRendered.value));
        }, () => {
          vue.renderSharedDataEffect(() => {
            return vue.setSharedDataStyle(__sharedData, 1, rootStyle.value);
          });
          vue.createSharedDataSlot("default", null, null);
        });
        return __sharedData;
      };
    }
  });
  const _style_0$v = {};
  const _style_1$b = {};
  const TabContent = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["styles", [_style_0$v, _style_1$b]]]);
  const __className$t = "GenSrcTabbarComponentsTabViews";
  const _sfc_main$u = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$t,
    __filename: "src/tabbar/components/TabViews.uvue",
    __name: "TabViews",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcTabbarComponentsTabViewsSharedData", sharedDataClassId: 0 })));
      return () => {
        "raw js";
        const n1 = vue.createSharedDataComponent(TabContent, "68123430", { "content-index": 0 }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n0 = vue.createSharedDataComponent(HomeView, "681234aa");
            vue.setSharedData(__sharedData, 1, n0.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n1.sharedData);
        const n3 = vue.createSharedDataComponent(TabContent, "6812350d", { "content-index": 1 }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n2 = vue.createSharedDataComponent(BasicView, "68123812");
            vue.setSharedData(__sharedData, 3, n2.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 2, n3.sharedData);
        const n5 = vue.createSharedDataComponent(TabContent, "6812388a", { "content-index": 2 }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n4 = vue.createSharedDataComponent(FunctionView, "681238ef");
            vue.setSharedData(__sharedData, 5, n4.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 4, n5.sharedData);
        const n7 = vue.createSharedDataComponent(TabContent, "68123bf5", { "content-index": 3 }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n6 = vue.createSharedDataComponent(MeView, "68123c6f");
            vue.setSharedData(__sharedData, 7, n6.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 6, n7.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$u = {};
  const _style_1$a = {};
  const TabViews = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["styles", [_style_0$u, _style_1$a]]]);
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
    uni.exit();
    return false;
  }
  const __className$s = "GenSrcPagesIndexIndex";
  const _sfc_main$t = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$s,
    __filename: "src/pages/index/index.uvue",
    __name: "index",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesIndexIndexSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcPagesIndexIndexSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      onNavbarPullDownRefresh(() => {
        uni.__log__("log", "at src/pages/index/index.uvue:48", "刷新中");
        setTimeout(() => {
          uni.__log__("log", "at src/pages/index/index.uvue:50", "刷新成功");
          stopNavbarPullDownRefresh();
        }, 1e3);
      });
      vue.onBackPress((options) => {
        if (options.from == "backbutton") {
          return handleBackPressExit();
        }
        return false;
      });
      return () => {
        "raw js";
        const n8 = vue.createSharedDataComponent(AppKu, "05e1f953", {
          "custom-page-class": "init-page",
          "custom-page-style": "background-color: transparent;",
          layout: "navbar",
          "show-back": false,
          "hide-status-bar": false,
          "hide-navbar": false,
          "enable-pull-down-refresh": true,
          "page-style": { "navigationBarTitleText": "首页", "navigationStyle": "custom" }
        }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n7 = vue.createSharedDataComponent(LayoutComponent, "1548f3ea", {
              "custom-page-class": "init-page",
              "custom-page-style": "background-color: transparent;",
              "show-back": false,
              "hide-status-bar": false,
              "hide-navbar": false,
              "enable-pull-down-refresh": true,
              "page-style": { "navigationBarTitleText": "首页", "navigationStyle": "custom" }
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                vue.renderSharedDataEffect(() => {
                  const _isSinglePageTabbar = vue.unref(isSinglePageTabbar);
                  vue.setSharedDataClass(__sharedData, 6, ["weapp-tw-border wtu-1v4d3yt-0 wtu-xri2te-1 wtu-qnl89u-2", [{ "wtu-vrv923-3": _isSinglePageTabbar, "wtu-1vpt528-4": _isSinglePageTabbar }]]);
                });
                vue.createSharedDataIf(() => {
                  return vue.setSharedData(__sharedData, 2, vue.toSharedDataBoolean(vue.unref(isSinglePageTabbar)));
                }, () => {
                  const n2 = vue.createSharedDataComponent(TabViews, "15490a56");
                  vue.setSharedData(__sharedData, 3, n2.sharedData);
                  const n3 = vue.createSharedDataComponent(Tabbar, "15490d99");
                  vue.setSharedData(__sharedData, 4, n3.sharedData);
                }, () => {
                  const n5 = vue.createSharedDataComponent(HomeView, "d856197c");
                  vue.setSharedData(__sharedData, 5, n5.sharedData);
                }, 262);
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
  const _style_0$t = {};
  const _style_1$9 = {};
  const SrcPagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["styles", [_style_0$t, _style_1$9]]]);
  const __className$r = "GenSrcPagesAiViewsAiView";
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
  const _sfc_main$s = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$r,
    __filename: "src/pages/ai/views/AiView.uvue",
    __name: "AiView",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesAiViewsAiViewSharedData", sharedDataClassId: 0 })));
      const messages = vue.ref([]);
      const inputText = vue.ref("");
      const isTyping = vue.ref(false);
      const scrollTop = vue.ref(0);
      function isAiMessage(sender) {
        return sender == "ai";
      }
      const safeAreaBottom2 = vue.computed(() => {
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
        const hStr = hours < 10 ? "0".concat(hours) : "".concat(hours);
        const mStr = minutes < 10 ? "0".concat(minutes) : "".concat(minutes);
        return "".concat(hStr, ":").concat(mStr);
      }
      function scrollToBottom() {
        setTimeout(() => {
          scrollTop.value = scrollTop.value + 1e3;
        }, 100);
      }
      function sendMessage() {
        const text2 = inputText.value.trim();
        if (text2 == "")
          return null;
        const userMsgId = Date.now().toString();
        messages.value.push(new ChatMessage({
          id: userMsgId,
          sender: "user",
          content: text2,
          time: getCurrentTime()
        }));
        inputText.value = "";
        scrollToBottom();
        isTyping.value = true;
        setTimeout(() => {
          isTyping.value = false;
          let replyContent = "收到你的消息！目前这只是一个模拟的 AI 对话窗口，你可以在此基础上接入你自己的大语言模型（如 DeepSeek、OpenAI、Gemini等）。";
          if (text2.includes("你好") || text2.includes("hello")) {
            replyContent = "你好！我是你的 AI 助手，很高兴为你提供服务。有什么我可以帮你的吗？😊";
          } else if (text2.includes("模板") || text2.includes("unibest")) {
            replyContent = "unibestX 是基于 uni-app X 极速开发模板。它支持 TypeScript、UnoCSS、UTS 插件，并能完美编译为原生 Android/iOS App！";
          } else if (text2.includes("组件")) {
            replyContent = "当前模板内置了许多优秀的组件与工具，例如 NavBar 导航栏、分页加载、网络请求等，你都可以直接使用。";
          }
          messages.value.push(new ChatMessage({
            id: (Date.now() + 1).toString(),
            sender: "ai",
            content: replyContent,
            time: getCurrentTime()
          }));
          scrollToBottom();
        }, 1200);
      }
      vue.onMounted(() => {
        messages.value.push(new ChatMessage({
          id: "welcome",
          sender: "ai",
          content: "你好！我是 unibestX 体验助理，已就绪为您解答问题。",
          time: getCurrentTime()
        }));
      });
      return () => {
        "raw js";
        const _component_input = vue.resolveComponent("input");
        const _component_uni_icons = __easycom_0$2;
        vue.renderSharedDataEffect(() => {
          return vue.setSharedDataAttr(__sharedData, 5, vue.toSharedDataNumber(vue.unref(scrollTop)));
        });
        vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 0, vue.createSharedDataVFor(__sharedDataScope, () => {
          return new UniDynamicSharedData(__sharedDataScope, { bundleKey: "".concat(__className$r, "SharedData"), sharedDataClassId: 1 });
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
          return vue.setSharedData(__sharedData, 1, vue.toSharedDataBoolean(vue.unref(isTyping)));
        }, () => {
        });
        vue.renderSharedDataEffect(() => {
          const _safeAreaBottom = vue.unref(safeAreaBottom2);
          vue.setSharedDataStyle(__sharedData, 6, { height: "".concat(_safeAreaBottom + 70, "px") });
          vue.setSharedDataStyle(__sharedData, 7, { paddingBottom: "".concat(_safeAreaBottom + 10, "px") });
        });
        const n29 = vue.createSharedDataComponentWithFallback(_component_input, "01fc531c", {
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
        vue.setSharedData(__sharedData, 2, n29 == null ? void 0 : n29.sharedData);
        const n30 = vue.createSharedDataComponentWithFallback(_component_uni_icons, "01fc64e4", {
          type: "paperplane-filled",
          size: "18",
          color: "#ffffff"
        });
        vue.setSharedData(__sharedData, 3, n30 == null ? void 0 : n30.sharedData);
        vue.setSharedDataEvent(__sharedData, 4, sendMessage);
        return __sharedData;
      };
    }
  });
  const _style_0$s = {};
  const _style_1$8 = {};
  const AiView = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["styles", [_style_0$s, _style_1$8]]]);
  const __className$q = "GenSrcPagesAiAi";
  const _sfc_main$r = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$q,
    __filename: "src/pages/ai/ai.uvue",
    __name: "ai",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesAiAiSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcPagesAiAiSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      return () => {
        "raw js";
        const n2 = vue.createSharedDataComponent(AppKu, "9242dfba", {
          layout: "navbar",
          "show-back": true,
          "page-style": { "navigationBarTitleText": "AI 智能助手", "navigationStyle": "custom" }
        }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n1 = vue.createSharedDataComponent(LayoutComponent, "797b1228", {
              "show-back": true,
              "page-style": { "navigationBarTitleText": "AI 智能助手", "navigationStyle": "custom" }
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponent(AiView, "797b1624");
                vue.setSharedData(__sharedData, 2, n0.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n1.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n2.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$r = {};
  const SrcPagesAiAi = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["styles", [_style_0$r]]]);
  const __className$p = "GenSrcPagesBasicBasic";
  const _sfc_main$q = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$p,
    __filename: "src/pages/basic/basic.uvue",
    __name: "basic",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicBasicSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcPagesBasicBasicSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      onNavbarPullDownRefresh(() => {
        setTimeout(() => {
          stopNavbarPullDownRefresh();
        }, 1e3);
      });
      vue.onBackPress((options) => {
        if (options.from == "backbutton") {
          return handleBackPressExit();
        }
        return false;
      });
      return () => {
        "raw js";
        const n2 = vue.createSharedDataComponent(AppKu, "56ab5a5a", {
          layout: "navbar",
          "show-back": false,
          "enable-pull-down-refresh": true,
          "hide-status-bar": false,
          "hide-navbar": false,
          "page-style": { "navigationBarTitleText": "基础", "navigationStyle": "custom" }
        }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n1 = vue.createSharedDataComponent(LayoutComponent, "5360ec56", {
              "show-back": false,
              "enable-pull-down-refresh": true,
              "hide-status-bar": false,
              "hide-navbar": false,
              "page-style": { "navigationBarTitleText": "基础", "navigationStyle": "custom" }
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponent(BasicView, "5360f130");
                vue.setSharedData(__sharedData, 2, n0.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n1.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n2.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$q = {};
  const SrcPagesBasicBasic = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["styles", [_style_0$q]]]);
  const __className$o = "GenSrcPagesFunctionFunction";
  const _sfc_main$p = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$o,
    __filename: "src/pages/function/function.uvue",
    __name: "function",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionFunctionSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcPagesFunctionFunctionSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      onNavbarPullDownRefresh(() => {
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 1e3);
        }).then(() => {
          stopNavbarPullDownRefresh();
        });
      });
      vue.onBackPress((options) => {
        if (options.from == "backbutton") {
          return handleBackPressExit();
        }
        return false;
      });
      return () => {
        "raw js";
        const n2 = vue.createSharedDataComponent(AppKu, "13021a83", {
          layout: "navbar",
          "show-back": false,
          "enable-pull-down-refresh": true,
          "hide-status-bar": false,
          "hide-navbar": false,
          "page-style": { "navigationBarTitleText": "功能", "navigationStyle": "custom" }
        }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n1 = vue.createSharedDataComponent(LayoutComponent, "5ae58806", {
              "show-back": false,
              "enable-pull-down-refresh": true,
              "hide-status-bar": false,
              "hide-navbar": false,
              "page-style": { "navigationBarTitleText": "功能", "navigationStyle": "custom" }
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponent(FunctionView, "5ae58ce0");
                vue.setSharedData(__sharedData, 2, n0.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n1.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n2.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$p = {};
  const SrcPagesFunctionFunction = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["styles", [_style_0$p]]]);
  const __className$n = "GenSrcPagesMeMe";
  const _sfc_main$o = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$n,
    __filename: "src/pages/me/me.uvue",
    __name: "me",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcPagesMeMeSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcPagesMeMeSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      onNavbarPullDownRefresh(() => {
        setTimeout(() => {
          stopNavbarPullDownRefresh();
        }, 1e3);
      });
      vue.onBackPress((options) => {
        if (options.from == "backbutton") {
          return handleBackPressExit();
        }
        return false;
      });
      return () => {
        "raw js";
        const n2 = vue.createSharedDataComponent(AppKu, "69b481fa", {
          layout: "navbar",
          "show-back": false,
          "enable-pull-down-refresh": true,
          "hide-status-bar": false,
          "hide-navbar": false,
          "page-style": { "navigationBarTitleText": "我的", "navigationStyle": "custom" }
        }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n1 = vue.createSharedDataComponent(LayoutComponent, "ce9be6f4", {
              "show-back": false,
              "enable-pull-down-refresh": true,
              "hide-status-bar": false,
              "hide-navbar": false,
              "page-style": { "navigationBarTitleText": "我的", "navigationStyle": "custom" }
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponent(MeView, "ce9bdd40");
                vue.setSharedData(__sharedData, 2, n0.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n1.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n2.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$o = {};
  const SrcPagesMeMe = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["styles", [_style_0$o]]]);
  const __className$m = "GenSrcSubAuthLogin";
  const _sfc_main$n = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$m,
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
        var _a2;
        if (tokenStore.hasValidLogin()) {
          if (redirectUrl.value !== "") {
            const targetUrl = (_a2 = decodeURIComponent(redirectUrl.value)) !== null && _a2 !== void 0 ? _a2 : "";
            if (isPageTabbar(targetUrl)) {
              switchTabbar(targetUrl);
            } else {
              uni.redirectTo({ url: targetUrl });
            }
          } else {
            uni.navigateBack();
          }
          return null;
        }
        tokenStore.setSingleToken({
          token: "mock-token-UNIX-123456",
          expiresIn: 7200
        });
        userStore.setUserInfo({
          userId: 1001,
          username: "UNIX",
          nickname: "UNIX 开发者",
          avatar: "/static/logo.png"
        });
        uni.showToast({
          title: "登录成功",
          icon: "success"
        });
        setTimeout(() => {
          var _a3;
          if (redirectUrl.value !== "") {
            const targetUrl = (_a3 = decodeURIComponent(redirectUrl.value)) !== null && _a3 !== void 0 ? _a3 : "";
            if (isPageTabbar(targetUrl)) {
              switchTabbar(targetUrl);
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
        const n6 = vue.createSharedDataComponent(AppKu, "44259de4", {
          layout: "navbar",
          "show-back": true,
          "hide-navbar": false,
          "enable-pull-down-refresh": false,
          "page-style": { "navigationBarTitleText": "登录", "navigationStyle": "custom" }
        }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n5 = vue.createSharedDataComponent(LayoutComponent, "5d949778", {
              "show-back": true,
              "hide-navbar": false,
              "enable-pull-down-refresh": false,
              "page-style": { "navigationBarTitleText": "登录", "navigationStyle": "custom" }
            }, {
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
  const _style_0$n = {};
  const SrcSubAuthLogin = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["styles", [_style_0$n]]]);
  const __className$l = "GenSrcSubAuthRegister";
  const _sfc_main$m = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$l,
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
        const n6 = vue.createSharedDataComponent(AppKu, "505f345a", {
          layout: "navbar",
          "show-back": true,
          "hide-navbar": false,
          "enable-pull-down-refresh": false,
          "page-style": { "navigationBarTitleText": "注册", "navigationStyle": "custom" }
        }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n5 = vue.createSharedDataComponent(LayoutComponent, "9538f58c", {
              "show-back": true,
              "hide-navbar": false,
              "enable-pull-down-refresh": false,
              "page-style": { "navigationBarTitleText": "注册", "navigationStyle": "custom" }
            }, {
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
  const _style_0$m = {};
  const SrcSubAuthRegister = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["styles", [_style_0$m]]]);
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
    for (let i2 = 0; i2 < bytes.length; i2++) {
      const b = bytes[i2] | 0;
      result += (b < 16 ? "0" : "") + b.toString(16);
    }
    return result;
  }
  function hexToBytes$1(hex) {
    const len = hex.length / 2;
    const bytes = new Uint8Array(len);
    for (let i2 = 0; i2 < len; i2++) {
      bytes[i2] = parseInt(hex.substring(i2 * 2, i2 * 2 + 2), 16);
    }
    return bytes;
  }
  function textToBytes$1(text2) {
    return new TextEncoder().encode(text2);
  }
  function bytesToText$1(bytes) {
    return new TextDecoder().decode(bytes);
  }
  function subBytes$1(bytes, start, end) {
    const len = end - start;
    const out = new Uint8Array(len);
    for (let i2 = 0; i2 < len; i2++) {
      out[i2] = bytes[start + i2];
    }
    return out;
  }
  function stripPem(pem) {
    const lines = pem.split("\n");
    let body = "";
    for (let i2 = 0; i2 < lines.length; i2++) {
      if (lines[i2].indexOf("-----") >= 0) {
        continue;
      }
      body = body + lines[i2];
    }
    let result = "";
    for (let i2 = 0; i2 < body.length; i2++) {
      const c2 = body.charAt(i2);
      if (B64_CHARS.indexOf(c2) >= 0 || c2 == "=") {
        result += c2;
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
    const tag2 = bytes[start] | 0;
    const l0 = bytes[start + 1] | 0;
    let len = 0;
    let headerLen = 2;
    if (l0 < 128) {
      len = l0;
    } else {
      const numLen = l0 & 127;
      for (let i2 = 0; i2 < numLen; i2++) {
        len = len * 256 + (bytes[start + 2 + i2] | 0);
      }
      headerLen = 2 + numLen;
    }
    const contentStart = start + headerLen;
    return new DerElement({ tag: tag2, contentStart, contentLen: len, nextStart: contentStart + len });
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
    const n2 = derIntegerValue(pkcs1, nElem);
    const eElem = derReadElement(pkcs1, nElem.nextStart);
    const e2 = derIntegerValue(pkcs1, eElem);
    return new RsaPublicKey({ modulus: n2, exponent: e2 });
  }
  function parsePrivateKeyPkcs1(pkcs1) {
    const outer = derReadElement(pkcs1, 0);
    const content = subBytes$1(pkcs1, outer.contentStart, outer.contentStart + outer.contentLen);
    const ver = derReadElement(content, 0);
    const nElem = derReadElement(content, ver.nextStart);
    const n2 = derIntegerValue(content, nElem);
    const eElem = derReadElement(content, nElem.nextStart);
    const dElem = derReadElement(content, eElem.nextStart);
    const d2 = derIntegerValue(content, dElem);
    return new RsaPrivateKey({ modulus: n2, privateExponent: d2 });
  }
  function parsePrivateKey(pem) {
    const der = base64DecodeToBytes(pem);
    const outer = derReadElement(der, 0);
    const content = subBytes$1(der, outer.contentStart, outer.contentStart + outer.contentLen);
    const first = derReadElement(content, 0);
    if (first.tag == 2) {
      const second = derReadElement(content, first.nextStart);
      if (second.tag == 2) {
        const n2 = derIntegerValue(content, second);
        const eElem = derReadElement(content, second.nextStart);
        const dElem = derReadElement(content, eElem.nextStart);
        const d2 = derIntegerValue(content, dElem);
        return new RsaPrivateKey({ modulus: n2, privateExponent: d2 });
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
    for (let i2 = 0; i2 < bytes.length; i2++) {
      if (bytes[i2] != 0) {
        return false;
      }
    }
    return true;
  }
  function bigCmp(a2, b) {
    if (a2.length != b.length) {
      return a2.length > b.length ? 1 : -1;
    }
    for (let i2 = 0; i2 < a2.length; i2++) {
      const av = a2[i2] | 0;
      const bv = b[i2] | 0;
      if (av != bv) {
        return av > bv ? 1 : -1;
      }
    }
    return 0;
  }
  function bigShrBits(a2, bits) {
    const out = new Uint8Array(a2.length);
    let carry = 0;
    for (let i2 = a2.length - 1; i2 >= 0; i2--) {
      const v2 = a2[i2] | 0;
      out[i2] = v2 >> bits | carry;
      carry = (v2 & (1 << bits) - 1) << 8 - bits;
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
    for (let i2 = 0; i2 < bytes.length; i2++) {
      out[i2] = bytes[bytes.length - 1 - i2];
    }
    return trimLE(out);
  }
  function toBE(bytes) {
    const out = new Uint8Array(bytes.length);
    for (let i2 = 0; i2 < bytes.length; i2++) {
      out[i2] = bytes[bytes.length - 1 - i2];
    }
    return trimZero(out);
  }
  function bigShlBitsLE(a2, bits) {
    const out = new Uint8Array(a2.length + 1);
    let carry = 0;
    for (let i2 = 0; i2 < a2.length; i2++) {
      const v2 = a2[i2] | 0;
      out[i2] = (v2 << bits | carry) & 255;
      carry = v2 >> 8 - bits;
    }
    out[a2.length] = carry;
    return out;
  }
  function bigMul(a2, b) {
    if (isZero(a2) || isZero(b)) {
      return new Uint8Array(1);
    }
    const outLen = a2.length + b.length;
    const out = new Uint8Array(outLen);
    for (let i2 = 0; i2 < a2.length; i2++) {
      const ai2 = a2[a2.length - 1 - i2] | 0;
      let carry = 0;
      for (let j2 = 0; j2 < b.length; j2++) {
        const bj = b[b.length - 1 - j2] | 0;
        const k3 = outLen - 1 - (i2 + j2);
        const t2 = (out[k3] | 0) + ai2 * bj + carry;
        out[k3] = t2 & 255;
        carry = t2 >> 8;
      }
      const k2 = outLen - 1 - (i2 + b.length);
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
  function bigGetBit(a2, i2) {
    const byteIndex = Math.floor(i2 / 8);
    const bitInByte = 7 - i2 % 8;
    return (a2[byteIndex] | 0) >> bitInByte & 1;
  }
  function padToN(bytes, n2) {
    if (bytes.length >= n2) {
      return bytes;
    }
    const out = new Uint8Array(n2);
    const gap = n2 - bytes.length;
    for (let i2 = 0; i2 < bytes.length; i2++) {
      out[gap + i2] = bytes[i2];
    }
    return out;
  }
  function bigMod(a2, m2) {
    if (bigCmp(a2, m2) < 0) {
      return a2;
    }
    const n2 = m2.length;
    if (n2 == 1) {
      const mv = m2[0] | 0;
      let rem = 0;
      for (let i2 = 0; i2 < a2.length; i2++) {
        rem = (rem * 256 + (a2[i2] | 0)) % mv;
      }
      const out = new Uint8Array(1);
      out[0] = rem;
      return out;
    }
    const shift = leadingZeroBits(m2[0] | 0);
    const v2 = trimLE(bigShlBitsLE(toLE(m2), shift));
    const uArr = bigShlBitsLE(toLE(a2), shift);
    const uLen = uArr.length;
    const qLen = uLen - n2;
    for (let j2 = qLen - 1; j2 >= 0; j2--) {
      const uTop = (uArr[j2 + n2] | 0) * 256 + (uArr[j2 + n2 - 1] | 0);
      let qhat = Math.floor(uTop / (v2[n2 - 1] | 0));
      if (qhat >= 256) {
        qhat = 255;
      }
      let rhat = uTop - qhat * (v2[n2 - 1] | 0);
      while (qhat >= 256 || qhat * (v2[n2 - 2] | 0) > rhat * 256 + (uArr[j2 + n2 - 2] | 0)) {
        qhat = qhat - 1;
        rhat = rhat + (v2[n2 - 1] | 0);
        if (rhat >= 256) {
          break;
        }
      }
      let borrow = 0;
      for (let i2 = 0; i2 < n2; i2++) {
        const p2 = qhat * (v2[i2] | 0) + borrow;
        const t2 = (uArr[j2 + i2] | 0) - (p2 & 255);
        uArr[j2 + i2] = t2 & 255;
        borrow = (p2 >> 8) + (t2 < 0 ? 1 : 0);
      }
      let hi = (uArr[j2 + n2] | 0) - borrow;
      if (hi < 0) {
        let carry = 0;
        for (let i2 = 0; i2 < n2; i2++) {
          const s2 = (uArr[j2 + i2] | 0) + (v2[i2] | 0) + carry;
          uArr[j2 + i2] = s2 & 255;
          carry = s2 >> 8;
        }
        hi = hi + carry;
      }
      uArr[j2 + n2] = hi;
    }
    return bigShrBits(toBE(subBytes$1(uArr, 0, n2)), shift);
  }
  function bigModPow(base, exp, m2) {
    let result = new Uint8Array(1);
    result[0] = 1;
    let b = bigMod(base, m2);
    const expBits = exp.length * 8;
    for (let i2 = 0; i2 < expBits; i2++) {
      result = bigMod(bigMul(result, result), m2);
      if (bigGetBit(exp, i2) == 1) {
        result = bigMod(bigMul(result, b), m2);
      }
    }
    return result;
  }
  function i2osp(x, k2) {
    return padToN(x, k2);
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
    for (let i2 = 0; i2 < prefix.length; i2++) {
      out[i2] = prefix[i2];
    }
    for (let i2 = 0; i2 < digest.length; i2++) {
      out[prefix.length + i2] = digest[i2];
    }
    return out;
  }
  function rsaEncryptUts(text2, publicKey) {
    const key2 = parsePublicKey(publicKey);
    const k2 = key2.modulus.length;
    const m2 = textToBytes$1(text2);
    const mLen = m2.length;
    if (mLen > k2 - 11) {
      throw new Error("RSA 明文过长：最长 " + (k2 - 11) + " 字节，当前 " + mLen + " 字节");
    }
    const em = new Uint8Array(k2);
    em[0] = 0;
    em[1] = 2;
    const psLen = k2 - mLen - 3;
    for (let i2 = 0; i2 < psLen; i2++) {
      em[2 + i2] = Math.floor(Math.random() * 255) + 1;
    }
    em[k2 - mLen - 1] = 0;
    for (let i2 = 0; i2 < mLen; i2++) {
      em[k2 - mLen + i2] = m2[i2];
    }
    const c2 = bigModPow(em, key2.exponent, key2.modulus);
    return bytesToHex$1(i2osp(c2, k2));
  }
  function rsaDecryptUts(hex, privateKey) {
    const key2 = parsePrivateKey(privateKey);
    const k2 = key2.modulus.length;
    const c2 = hexToBytes$1(hex);
    if (c2.length != k2) {
      throw new Error("RSA 密文长度不正确：应为 " + k2 + " 字节，实际 " + c2.length + " 字节");
    }
    const m2 = bigModPow(c2, key2.privateExponent, key2.modulus);
    const em = i2osp(m2, k2);
    if (em[0] != 0 || em[1] != 2) {
      throw new Error("RSA 解密失败：填充头无效");
    }
    let sep = -1;
    for (let i2 = 2; i2 < k2; i2++) {
      if (em[i2] == 0) {
        sep = i2;
        break;
      }
    }
    if (sep < 10) {
      throw new Error("RSA 解密失败：填充无效");
    }
    return bytesToText$1(subBytes$1(em, sep + 1, k2));
  }
  function rsaSignUts(digestHex, hashType, privateKey) {
    const key2 = parsePrivateKey(privateKey);
    const k2 = key2.modulus.length;
    const t2 = buildDigestInfo(digestHex, hashType);
    const tLen = t2.length;
    if (tLen > k2 - 11) {
      throw new Error("RSA 签名摘要过长：密钥至少需要 " + (tLen + 11) + " 字节");
    }
    const em = new Uint8Array(k2);
    em[0] = 0;
    em[1] = 1;
    const psLen = k2 - tLen - 3;
    for (let i2 = 0; i2 < psLen; i2++) {
      em[2 + i2] = 255;
    }
    em[k2 - tLen - 1] = 0;
    for (let i2 = 0; i2 < tLen; i2++) {
      em[k2 - tLen + i2] = t2[i2];
    }
    const s2 = bigModPow(em, key2.privateExponent, key2.modulus);
    return bytesToHex$1(i2osp(s2, k2));
  }
  function rsaVerifyUts(digestHex, hashType, publicKey, sigHex) {
    const key2 = parsePublicKey(publicKey);
    const k2 = key2.modulus.length;
    const s2 = hexToBytes$1(sigHex);
    if (s2.length != k2) {
      return false;
    }
    const m2 = bigModPow(s2, key2.exponent, key2.modulus);
    const em = i2osp(m2, k2);
    if (em[0] != 0 || em[1] != 1) {
      return false;
    }
    let sep = -1;
    for (let i2 = 2; i2 < k2; i2++) {
      if (em[i2] == 0) {
        sep = i2;
        break;
      }
      if (em[i2] != 255) {
        return false;
      }
    }
    if (sep < 10) {
      return false;
    }
    const t2 = buildDigestInfo(digestHex, hashType);
    if (k2 - sep - 1 != t2.length) {
      return false;
    }
    for (let i2 = 0; i2 < t2.length; i2++) {
      if (em[sep + 1 + i2] != t2[i2]) {
        return false;
      }
    }
    return true;
  }
  function bigIntToDerInteger(n2 = null) {
    let hex = n2.toString(16);
    if (hex.length % 2 != 0) {
      hex = "0" + hex;
    }
    const firstByte = parseInt(hex.substring(0, 2), 16);
    if (firstByte >= 128) {
      hex = "00" + hex;
    }
    const bytes = hexToBytes$1(hex);
    const len = bytes.length;
    let header;
    if (len < 128) {
      header = new Uint8Array([2, len]);
    } else if (len < 256) {
      header = new Uint8Array([2, 129, len]);
    } else {
      header = new Uint8Array([2, 130, Math.floor(len / 256), len % 256]);
    }
    const out = new Uint8Array(header.length + bytes.length);
    for (let i2 = 0; i2 < header.length; i2++)
      out[i2] = header[i2];
    for (let i2 = 0; i2 < bytes.length; i2++)
      out[header.length + i2] = bytes[i2];
    return out;
  }
  function derSequence(items) {
    let totalLen = 0;
    for (let i2 = 0; i2 < items.length; i2++) {
      totalLen += items[i2].length;
    }
    let header;
    if (totalLen < 128) {
      header = new Uint8Array([48, totalLen]);
    } else if (totalLen < 256) {
      header = new Uint8Array([48, 129, totalLen]);
    } else {
      header = new Uint8Array([48, 130, Math.floor(totalLen / 256), totalLen % 256]);
    }
    const out = new Uint8Array(header.length + totalLen);
    for (let i2 = 0; i2 < header.length; i2++)
      out[i2] = header[i2];
    let offset = header.length;
    for (let i2 = 0; i2 < items.length; i2++) {
      for (let j2 = 0; j2 < items[i2].length; j2++) {
        out[offset + j2] = items[i2][j2];
      }
      offset += items[i2].length;
    }
    return out;
  }
  function getRandomBigInt(bits) {
    const bytes = Math.ceil(bits / 8);
    let hex = "";
    for (let i2 = 0; i2 < bytes; i2++) {
      const b = Math.floor(Math.random() * 256);
      hex += (b < 16 ? "0" : "") + b.toString(16);
    }
    const bigIntFunc = typeof BigInt !== "undefined" ? BigInt : null;
    if (bigIntFunc == null)
      return null;
    let n2 = bigIntFunc("0x" + hex);
    const one = bigIntFunc(1);
    const shiftVal = bigIntFunc(bits - 1);
    n2 = n2 | one << shiftVal;
    n2 = n2 | one;
    return n2;
  }
  function bigIntModPow(base = null, exp = null, mod = null) {
    const bigIntFunc = typeof BigInt !== "undefined" ? BigInt : null;
    const zero = bigIntFunc(0);
    const one = bigIntFunc(1);
    const two = bigIntFunc(2);
    let res = one;
    base = base % mod;
    while (exp > zero) {
      if (exp % two == one) {
        res = res * base % mod;
      }
      base = base * base % mod;
      exp = exp / two;
    }
    return res;
  }
  function isProbablePrime(n2 = null, k2 = 5) {
    const bigIntFunc = typeof BigInt !== "undefined" ? BigInt : null;
    const zero = bigIntFunc(0);
    const one = bigIntFunc(1);
    const two = bigIntFunc(2);
    const three = bigIntFunc(3);
    const four = bigIntFunc(4);
    if (n2 <= one || n2 == four)
      return false;
    if (n2 <= three)
      return true;
    let d2 = n2 - one;
    let s2 = zero;
    while (d2 % two == zero) {
      d2 = d2 / two;
      s2 = s2 + one;
    }
    const smallPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
    for (let i2 = 0; i2 < smallPrimes.length; i2++) {
      const p2 = bigIntFunc(smallPrimes[i2]);
      if (n2 % p2 == zero) {
        return n2 == p2;
      }
    }
    for (let i2 = 0; i2 < k2; i2++) {
      const a2 = two + bigIntFunc(Math.floor(Math.random() * 1e4)) % (n2 - four);
      let x = bigIntModPow(a2, d2, n2);
      if (x == one || x == n2 - one)
        continue;
      let composite = true;
      for (let r2 = one; r2 < s2; r2 = r2 + one) {
        x = bigIntModPow(x, two, n2);
        if (x == n2 - one) {
          composite = false;
          break;
        }
      }
      if (composite)
        return false;
    }
    return true;
  }
  function getPrime(bits) {
    while (true) {
      const p2 = getRandomBigInt(bits);
      if (p2 != null && isProbablePrime(p2))
        return p2;
    }
  }
  function bigIntModInverse(a2 = null, m2 = null) {
    const bigIntFunc = typeof BigInt !== "undefined" ? BigInt : null;
    const zero = bigIntFunc(0);
    const one = bigIntFunc(1);
    let m0 = m2;
    let y2 = zero;
    let x = one;
    if (m2 == one)
      return zero;
    while (a2 > one) {
      const q2 = a2 / m2;
      let t2 = m2;
      m2 = a2 % m2;
      a2 = t2;
      t2 = y2;
      y2 = x - q2 * y2;
      x = t2;
    }
    if (x < zero) {
      x = x + m0;
    }
    return x;
  }
  function rsaGenerateKeyPairJs(bits) {
    const bigIntFunc = typeof BigInt !== "undefined" ? BigInt : null;
    if (bigIntFunc == null) {
      return '{"publicKey":"","privateKey":""}';
    }
    const primeBits = Math.floor(bits / 2);
    const p2 = getPrime(primeBits);
    const q2 = getPrime(primeBits);
    const n2 = p2 * q2;
    const e2 = bigIntFunc(65537);
    const one = bigIntFunc(1);
    const phi = (p2 - one) * (q2 - one);
    const d2 = bigIntModInverse(e2, phi);
    const dp = d2 % (p2 - one);
    const dq = d2 % (q2 - one);
    const qInv = bigIntModInverse(q2, p2);
    const pkcs1Pub = derSequence([bigIntToDerInteger(n2), bigIntToDerInteger(e2)]);
    const algo = hexToBytes$1("300d06092a864886f70d0101010500");
    const bitStringContent = new Uint8Array(1 + pkcs1Pub.length);
    bitStringContent[0] = 0;
    for (let i2 = 0; i2 < pkcs1Pub.length; i2++)
      bitStringContent[1 + i2] = pkcs1Pub[i2];
    let bitHeader;
    const bitLen = bitStringContent.length;
    if (bitLen < 128)
      bitHeader = new Uint8Array([3, bitLen]);
    else if (bitLen < 256)
      bitHeader = new Uint8Array([3, 129, bitLen]);
    else
      bitHeader = new Uint8Array([3, 130, Math.floor(bitLen / 256), bitLen % 256]);
    const bitString = new Uint8Array(bitHeader.length + bitStringContent.length);
    for (let i2 = 0; i2 < bitHeader.length; i2++)
      bitString[i2] = bitHeader[i2];
    for (let i2 = 0; i2 < bitStringContent.length; i2++)
      bitString[bitHeader.length + i2] = bitStringContent[i2];
    const spkiDer = derSequence([algo, bitString]);
    const pubB64 = uni.arrayBufferToBase64(spkiDer.buffer);
    const version0 = hexToBytes$1("020100");
    const pkcs1Pri = derSequence([
      version0,
      bigIntToDerInteger(n2),
      bigIntToDerInteger(e2),
      bigIntToDerInteger(d2),
      bigIntToDerInteger(p2),
      bigIntToDerInteger(q2),
      bigIntToDerInteger(dp),
      bigIntToDerInteger(dq),
      bigIntToDerInteger(qInv)
    ]);
    const octLen = pkcs1Pri.length;
    let octHeader;
    if (octLen < 128)
      octHeader = new Uint8Array([4, octLen]);
    else if (octLen < 256)
      octHeader = new Uint8Array([4, 129, octLen]);
    else
      octHeader = new Uint8Array([4, 130, Math.floor(octLen / 256), octLen % 256]);
    const octString = new Uint8Array(octHeader.length + pkcs1Pri.length);
    for (let i2 = 0; i2 < octHeader.length; i2++)
      octString[i2] = octHeader[i2];
    for (let i2 = 0; i2 < pkcs1Pri.length; i2++)
      octString[octHeader.length + i2] = pkcs1Pri[i2];
    const pkcs8Der = derSequence([version0, algo, octString]);
    const priB64 = uni.arrayBufferToBase64(pkcs8Der.buffer);
    return '{"publicKey":"' + pubB64 + '","privateKey":"' + priB64 + '"}';
  }
  function rsaGenerateKeyPairUts(bits) {
    return rsaGenerateKeyPairJs(bits);
  }
  function textToBytes(text2) {
    return new TextEncoder().encode(text2);
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
    for (let i2 = 0; i2 < bytes.length; i2++) {
      const b = bytes[i2] | 0;
      result += (b < 16 ? "0" : "") + b.toString(16);
    }
    return result;
  }
  function hexToBytes(hex) {
    const len = hex.length / 2;
    const bytes = new Uint8Array(len);
    for (let i2 = 0; i2 < len; i2++) {
      bytes[i2] = parseInt(hex.substring(i2 * 2, i2 * 2 + 2), 16);
    }
    return bytes;
  }
  function copyBytes(src, dst, dstOff) {
    for (let i2 = 0; i2 < src.length; i2++) {
      dst[dstOff + i2] = src[i2];
    }
  }
  function subBytes(bytes, start, end) {
    const len = end - start;
    const out = new Uint8Array(len);
    for (let i2 = 0; i2 < len; i2++) {
      out[i2] = bytes[start + i2];
    }
    return out;
  }
  function readUint32BE(bytes, off) {
    return ((bytes[off] | 0) << 24 | (bytes[off + 1] | 0) << 16 | (bytes[off + 2] | 0) << 8 | (bytes[off + 3] | 0)) >>> 0;
  }
  function writeUint32BE(out, off, v2) {
    out[off] = v2 >>> 24 & 255;
    out[off + 1] = v2 >>> 16 & 255;
    out[off + 2] = v2 >>> 8 & 255;
    out[off + 3] = v2 & 255;
  }
  function readUint32LE(bytes, off) {
    return (bytes[off] | 0 | (bytes[off + 1] | 0) << 8 | (bytes[off + 2] | 0) << 16 | (bytes[off + 3] | 0) << 24) >>> 0;
  }
  function writeUint32LE(out, off, v2) {
    out[off] = v2 & 255;
    out[off + 1] = v2 >>> 8 & 255;
    out[off + 2] = v2 >>> 16 & 255;
    out[off + 3] = v2 >>> 24 & 255;
  }
  function rotl32(x, c2) {
    return (x << c2 | x >>> 32 - c2) >>> 0;
  }
  function rotr32(x, n2) {
    return (x >>> n2 | x << 32 - n2) >>> 0;
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
  function md5Bytes(data2) {
    const origLen = data2.length;
    const bitLen = origLen * 8;
    const padLen = origLen % 64 < 56 ? 56 - origLen % 64 : 120 - origLen % 64;
    const totalLen = origLen + padLen + 8;
    const msg = new Uint8Array(totalLen);
    copyBytes(data2, msg, 0);
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
      for (let j2 = 0; j2 < 16; j2++) {
        M2.push(readUint32LE(msg, off + j2 * 4));
      }
      let A2 = a0;
      let B2 = b0;
      let C2 = c0;
      let D2 = d0;
      for (let i2 = 0; i2 < 64; i2++) {
        let F2 = 0;
        let g2 = 0;
        if (i2 < 16) {
          F2 = B2 & C2 | ~B2 & D2;
          g2 = i2;
        } else if (i2 < 32) {
          F2 = D2 & B2 | ~D2 & C2;
          g2 = (5 * i2 + 1) % 16;
        } else if (i2 < 48) {
          F2 = B2 ^ C2 ^ D2;
          g2 = (3 * i2 + 5) % 16;
        } else {
          F2 = C2 ^ (B2 | ~D2);
          g2 = 7 * i2 % 16;
        }
        const dTemp = D2;
        D2 = C2;
        C2 = B2;
        const sum2 = A2 + F2 + MD5_K[i2] + M2[g2] >>> 0;
        B2 = B2 + rotl32(sum2, MD5_S[i2]) >>> 0;
        A2 = dTemp;
      }
      a0 = a0 + A2 >>> 0;
      b0 = b0 + B2 >>> 0;
      c0 = c0 + C2 >>> 0;
      d0 = d0 + D2 >>> 0;
    }
    const out = new Uint8Array(16);
    writeUint32LE(out, 0, a0);
    writeUint32LE(out, 4, b0);
    writeUint32LE(out, 8, c0);
    writeUint32LE(out, 12, d0);
    return bytesToHex(out);
  }
  function sha1Bytes(data2) {
    const origLen = data2.length;
    const bitLen = origLen * 8;
    const padLen = origLen % 64 < 56 ? 56 - origLen % 64 : 120 - origLen % 64;
    const totalLen = origLen + padLen + 8;
    const msg = new Uint8Array(totalLen);
    copyBytes(data2, msg, 0);
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
      const w2 = [];
      for (let i2 = 0; i2 < 16; i2++) {
        w2.push(readUint32BE(msg, off + i2 * 4));
      }
      for (let i2 = 16; i2 < 80; i2++) {
        w2.push(rotl32(w2[i2 - 3] ^ w2[i2 - 8] ^ w2[i2 - 14] ^ w2[i2 - 16], 1));
      }
      let a2 = h0;
      let b = h1;
      let c2 = h2;
      let d2 = h3;
      let e2 = h4;
      for (let i2 = 0; i2 < 80; i2++) {
        let f2 = 0;
        let k2 = 0;
        if (i2 < 20) {
          f2 = b & c2 | ~b & d2;
          k2 = 1518500249;
        } else if (i2 < 40) {
          f2 = b ^ c2 ^ d2;
          k2 = 1859775393;
        } else if (i2 < 60) {
          f2 = b & c2 | b & d2 | c2 & d2;
          k2 = 2400959708;
        } else {
          f2 = b ^ c2 ^ d2;
          k2 = 3395469782;
        }
        const temp = rotl32(a2, 5) + f2 + e2 + k2 + w2[i2] >>> 0;
        e2 = d2;
        d2 = c2;
        c2 = rotl32(b, 30);
        b = a2;
        a2 = temp;
      }
      h0 = h0 + a2 >>> 0;
      h1 = h1 + b >>> 0;
      h2 = h2 + c2 >>> 0;
      h3 = h3 + d2 >>> 0;
      h4 = h4 + e2 >>> 0;
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
  function sha256Bytes(data2) {
    const origLen = data2.length;
    const bitLen = origLen * 8;
    const padLen = origLen % 64 < 56 ? 56 - origLen % 64 : 120 - origLen % 64;
    const totalLen = origLen + padLen + 8;
    const msg = new Uint8Array(totalLen);
    copyBytes(data2, msg, 0);
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
      const w2 = [];
      for (let i2 = 0; i2 < 16; i2++) {
        w2.push(readUint32BE(msg, off + i2 * 4));
      }
      for (let i2 = 16; i2 < 64; i2++) {
        const s0 = rotr32(w2[i2 - 15], 7) ^ rotr32(w2[i2 - 15], 18) ^ w2[i2 - 15] >>> 3;
        const s1 = rotr32(w2[i2 - 2], 17) ^ rotr32(w2[i2 - 2], 19) ^ w2[i2 - 2] >>> 10;
        w2.push(w2[i2 - 16] + s0 + w2[i2 - 7] + s1 >>> 0);
      }
      let a2 = h0;
      let b = h1;
      let c2 = h2;
      let d2 = h3;
      let e2 = h4;
      let f2 = h5;
      let g2 = h6;
      let h_1 = h7;
      for (let i2 = 0; i2 < 64; i2++) {
        const S1 = rotr32(e2, 6) ^ rotr32(e2, 11) ^ rotr32(e2, 25);
        const ch = e2 & f2 ^ ~e2 & g2;
        const temp1 = h_1 + S1 + ch + SHA256_K[i2] + w2[i2] >>> 0;
        const S0 = rotr32(a2, 2) ^ rotr32(a2, 13) ^ rotr32(a2, 22);
        const maj = a2 & b ^ a2 & c2 ^ b & c2;
        const temp2 = S0 + maj >>> 0;
        h_1 = g2;
        g2 = f2;
        f2 = e2;
        e2 = d2 + temp1 >>> 0;
        d2 = c2;
        c2 = b;
        b = a2;
        a2 = temp1 + temp2 >>> 0;
      }
      h0 = h0 + a2 >>> 0;
      h1 = h1 + b >>> 0;
      h2 = h2 + c2 >>> 0;
      h3 = h3 + d2 >>> 0;
      h4 = h4 + e2 >>> 0;
      h5 = h5 + f2 >>> 0;
      h6 = h6 + g2 >>> 0;
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
  function hmacSha1Bytes(text2, key2) {
    const blockSize = 64;
    const msg = textToBytes(text2);
    let keyBytes = textToBytes(key2);
    if (keyBytes.length > blockSize)
      keyBytes = hexToBytes(sha1Bytes(keyBytes));
    const ipad = new Uint8Array(blockSize);
    const opad = new Uint8Array(blockSize);
    for (let i2 = 0; i2 < blockSize; i2++) {
      const kb = i2 < keyBytes.length ? keyBytes[i2] | 0 : 0;
      ipad[i2] = kb ^ 54;
      opad[i2] = kb ^ 92;
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
    const d2 = [];
    for (let i2 = 0; i2 < 256; i2++) {
      d2.push(i2 < 128 ? i2 << 1 : i2 << 1 ^ 283);
      AES_SBOX.push(0);
      AES_INV_SBOX.push(0);
      for (let j2 = 0; j2 < 4; j2++) {
        AES_SUB_MIX[j2].push(0);
        AES_INV_SUB_MIX[j2].push(0);
      }
    }
    let x = 0;
    let xi = 0;
    for (let i2 = 0; i2 < 256; i2++) {
      let sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
      sx = sx >>> 8 ^ sx & 255 ^ 99;
      AES_SBOX[x] = sx;
      AES_INV_SBOX[sx] = x;
      const x2 = d2[x];
      const x4 = d2[x2];
      const x8 = d2[x4];
      let t2 = d2[sx] * 257 ^ sx * 16843008;
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
        x = x2 ^ d2[d2[d2[x8 ^ x2]]];
        xi ^= d2[d2[xi]];
      }
    }
  }
  aesBuildTables();
  function aesExpandKeyWords(key2) {
    const keySchedule = [];
    for (let i2 = 0; i2 < 4; i2++) {
      keySchedule.push((key2[i2 * 4] | 0) << 24 | (key2[i2 * 4 + 1] | 0) << 16 | (key2[i2 * 4 + 2] | 0) << 8 | (key2[i2 * 4 + 3] | 0));
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
        const v2 = (AES_INV_SUB_MIX[0][AES_SBOX[t2 >>> 24]] ^ AES_INV_SUB_MIX[1][AES_SBOX[t2 >>> 16 & 255]] ^ AES_INV_SUB_MIX[2][AES_SBOX[t2 >>> 8 & 255]] ^ AES_INV_SUB_MIX[3][AES_SBOX[t2 & 255]]) >>> 0;
        invKeySchedule.push(v2);
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
    const w2 = [];
    for (let i2 = 0; i2 < 4; i2++) {
      w2.push((bytes[off + i2 * 4] | 0) << 24 | (bytes[off + i2 * 4 + 1] | 0) << 16 | (bytes[off + i2 * 4 + 2] | 0) << 8 | (bytes[off + i2 * 4 + 3] | 0));
    }
    return w2;
  }
  function aesWordsToBytes(words) {
    const out = new Uint8Array(16);
    for (let i2 = 0; i2 < 4; i2++) {
      out[i2 * 4] = words[i2] >>> 24 & 255;
      out[i2 * 4 + 1] = words[i2] >>> 16 & 255;
      out[i2 * 4 + 2] = words[i2] >>> 8 & 255;
      out[i2 * 4 + 3] = words[i2] & 255;
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
  function aesCipher(text2, key2, decrypt) {
    const pt2 = decrypt ? hexToBytes(text2) : textToBytes(text2);
    const paddedLen = decrypt ? pt2.length : Math.ceil((pt2.length + 1) / 16) * 16;
    const block = new Uint8Array(paddedLen);
    copyBytes(pt2, block, 0);
    if (!decrypt) {
      for (let i2 = pt2.length; i2 < paddedLen; i2++)
        block[i2] = paddedLen - pt2.length;
    }
    const keyBytes = textToBytes(key2);
    if (keyBytes.length != 16)
      throw new Error("AES 密钥必须为 16 字节（16 个 ASCII 字符）");
    const schedule = decrypt ? aesInvExpandKeyWords(aesExpandKeyWords(keyBytes)) : aesExpandKeyWords(keyBytes);
    const out = new Uint8Array(paddedLen);
    for (let off = 0; off < paddedLen; off += 16) {
      const res = decrypt ? aesDecryptBlock(block, off, schedule) : aesEncryptBlock(block, off, schedule);
      for (let j2 = 0; j2 < 16; j2++)
        out[off + j2] = res[j2];
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
    for (let i2 = 0; i2 < bytes.length; i2++) {
      const b = bytes[i2] | 0;
      for (let j2 = 7; j2 >= 0; j2--)
        bits.push(b >> j2 & 1);
    }
    return bits;
  }
  function desBitsToBytes(bits) {
    const out = new Uint8Array(bits.length / 8);
    for (let i2 = 0; i2 < out.length; i2++) {
      let v2 = 0;
      for (let j2 = 0; j2 < 8; j2++)
        v2 = v2 << 1 | bits[i2 * 8 + j2];
      out[i2] = v2;
    }
    return out;
  }
  function desPermute(bits, table2) {
    const out = [];
    for (let i2 = 0; i2 < table2.length; i2++)
      out.push(bits[table2[i2] - 1]);
    return out;
  }
  function desRotateLeft(bits, shift) {
    return bits.slice(shift).concat(bits.slice(0, shift));
  }
  function desBitsToNum(bits) {
    let v2 = 0;
    for (let i2 = 0; i2 < bits.length; i2++)
      v2 = (v2 << 1 | bits[i2]) >>> 0;
    return v2;
  }
  function desSubKeys(key2) {
    let cd2 = desPermute(desBytesToBits(key2), DES_PC1);
    const subkeys = [];
    for (let i2 = 0; i2 < 16; i2++) {
      const c2 = desRotateLeft(cd2.slice(0, 28), DES_SHIFTS[i2]);
      const d2 = desRotateLeft(cd2.slice(28), DES_SHIFTS[i2]);
      cd2 = c2.concat(d2);
      subkeys.push(desPermute(cd2, DES_PC2));
    }
    return subkeys;
  }
  function desFeistel(rBits, subkey) {
    const expanded = desPermute(rBits, DES_E);
    const xored = [];
    for (let i2 = 0; i2 < 48; i2++)
      xored.push(expanded[i2] ^ subkey[i2]);
    let sboxOut = [];
    for (let i2 = 0; i2 < 8; i2++) {
      const group = xored.slice(i2 * 6, i2 * 6 + 6);
      const row = group[0] << 1 | group[5];
      const col = desBitsToNum(group.slice(1, 5));
      const val = DES_SBOX[i2][row * 16 + col];
      sboxOut = sboxOut.concat([val >> 3 & 1, val >> 2 & 1, val >> 1 & 1, val & 1]);
    }
    return desPermute(sboxOut, DES_P);
  }
  function desProcessBlock(block, off, subkeys) {
    const blockBits = [];
    for (let i2 = 0; i2 < 8; i2++) {
      const b = block[off + i2] | 0;
      for (let j2 = 7; j2 >= 0; j2--)
        blockBits.push(b >> j2 & 1);
    }
    let bits = desPermute(blockBits, DES_IP);
    let l2 = bits.slice(0, 32);
    let r2 = bits.slice(32);
    for (let i2 = 0; i2 < 16; i2++) {
      const f2 = desFeistel(r2, subkeys[i2]);
      const nr = [];
      for (let j2 = 0; j2 < 32; j2++)
        nr.push(l2[j2] ^ f2[j2]);
      l2 = r2;
      r2 = nr;
    }
    return desBitsToBytes(desPermute(r2.concat(l2), DES_FP));
  }
  function desCipher(text2, key2, decrypt) {
    const pt2 = decrypt ? hexToBytes(text2) : textToBytes(text2);
    const paddedLen = decrypt ? pt2.length : Math.ceil((pt2.length + 1) / 8) * 8;
    const block = new Uint8Array(paddedLen);
    copyBytes(pt2, block, 0);
    if (!decrypt) {
      for (let i2 = pt2.length; i2 < paddedLen; i2++)
        block[i2] = paddedLen - pt2.length;
    }
    const keyBytes = textToBytes(key2);
    if (keyBytes.length != 8)
      throw new Error("DES 密钥必须为 8 字节（8 个 ASCII 字符）");
    const subkeys = desSubKeys(keyBytes);
    if (decrypt)
      subkeys.reverse();
    const out = new Uint8Array(paddedLen);
    for (let off = 0; off < paddedLen; off += 8) {
      const res = desProcessBlock(block, off, subkeys);
      for (let j2 = 0; j2 < 8; j2++)
        out[off + j2] = res[j2];
    }
    if (!decrypt)
      return bytesToHex(out);
    const pad = out[out.length - 1] | 0;
    if (pad < 1 || pad > 8)
      throw new Error("DES 解密填充无效");
    return bytesToText(subBytes(out, 0, out.length - pad));
  }
  function base64Encode(text2) {
    return new Promise((resolve, reject) => {
      try {
        resolve(bytesToBase64(textToBytes(text2)));
      } catch (e2) {
        reject(e2);
      }
    });
  }
  function base64Decode(base64) {
    return new Promise((resolve, reject) => {
      try {
        resolve(bytesToText(base64ToBytes(base64)));
      } catch (e2) {
        reject(e2);
      }
    });
  }
  function md5(text2) {
    return new Promise((resolve, reject) => {
      try {
        resolve(md5Bytes(textToBytes(text2)));
      } catch (e2) {
        reject(e2);
      }
    });
  }
  function sha256(text2) {
    return new Promise((resolve, reject) => {
      try {
        resolve(sha256Bytes(textToBytes(text2)));
      } catch (e2) {
        reject(e2);
      }
    });
  }
  function hmacSha1(text2, key2) {
    return new Promise((resolve, reject) => {
      try {
        resolve(hmacSha1Bytes(text2, key2));
      } catch (e2) {
        reject(e2);
      }
    });
  }
  function aesEncrypt(text2, key2) {
    return new Promise((resolve, reject) => {
      try {
        resolve(aesCipher(text2, key2, false));
      } catch (e2) {
        reject(e2);
      }
    });
  }
  function aesDecrypt(hex, key2) {
    return new Promise((resolve, reject) => {
      try {
        resolve(aesCipher(hex, key2, true));
      } catch (e2) {
        reject(e2);
      }
    });
  }
  function desEncrypt(text2, key2) {
    return new Promise((resolve, reject) => {
      try {
        resolve(desCipher(text2, key2, false));
      } catch (e2) {
        reject(e2);
      }
    });
  }
  function desDecrypt(hex, key2) {
    return new Promise((resolve, reject) => {
      try {
        resolve(desCipher(hex, key2, true));
      } catch (e2) {
        reject(e2);
      }
    });
  }
  function rsaGenerateKeyPair(bits) {
    return new Promise((resolve, reject) => {
      try {
        resolve(rsaGenerateKeyPairUts(bits));
      } catch (e2) {
        reject(e2);
      }
    });
  }
  function rsaEncrypt(text2, publicKey) {
    return new Promise((resolve, reject) => {
      try {
        resolve(rsaEncryptUts(text2, publicKey));
      } catch (e2) {
        reject(e2);
      }
    });
  }
  function rsaDecrypt(hex, privateKey) {
    return new Promise((resolve, reject) => {
      try {
        resolve(rsaDecryptUts(hex, privateKey));
      } catch (e2) {
        reject(e2);
      }
    });
  }
  function hashHex(data2, hashType) {
    if (hashType == "MD5") {
      return md5Bytes(data2);
    }
    if (hashType == "SHA-1" || hashType == "SHA1") {
      return sha1Bytes(data2);
    }
    return sha256Bytes(data2);
  }
  function rsaSign(text2, privateKey, hashType) {
    return new Promise((resolve, reject) => {
      try {
        resolve(rsaSignUts(hashHex(textToBytes(text2), hashType), hashType, privateKey));
      } catch (e2) {
        reject(e2);
      }
    });
  }
  function rsaVerify(text2, publicKey, sigHex, hashType) {
    return new Promise((resolve, reject) => {
      try {
        resolve(rsaVerifyUts(hashHex(textToBytes(text2), hashType), hashType, publicKey, sigHex));
      } catch (e2) {
        reject(e2);
      }
    });
  }
  function generateUUID() {
    const hexDigits = "0123456789abcdef";
    let s2 = "";
    for (let i2 = 0; i2 < 36; i2++) {
      if (i2 == 8 || i2 == 13 || i2 == 18 || i2 == 23) {
        s2 += "-";
      } else if (i2 == 14) {
        s2 += "4";
      } else {
        const r2 = Math.floor(Math.random() * 16);
        const val = i2 == 19 ? r2 & 3 | 8 : r2;
        s2 += hexDigits.charAt(val);
      }
    }
    return s2;
  }
  const __className$k = "GenSrcSubCryptoCrypto";
  const _sfc_main$l = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$k,
    __filename: "src/sub/crypto/crypto.uvue",
    __name: "crypto",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubCryptoCryptoSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubCryptoCryptoSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const appStore = useAppStore();
      const isDark = vue.computed(() => {
        return appStore.state.isDark;
      });
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
      function errorMessage(e2 = null) {
        if (UTS.isInstanceOf(e2, Error)) {
          return e2.message;
        }
        return UTS.JSON.stringify(e2);
      }
      function handleBase64Encode() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            base64EncodeResult.value = yield base64Encode(base64Input.value);
            base64DecodeResult.value = "";
          } catch (e2) {
            base64EncodeResult.value = errorMessage(e2);
          }
        });
      }
      function handleBase64Decode() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const target = base64EncodeResult.value.length > 0 ? base64EncodeResult.value : base64Input.value;
            base64DecodeResult.value = yield base64Decode(target);
          } catch (e2) {
            base64DecodeResult.value = errorMessage(e2);
          }
        });
      }
      function handleMd5() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            md5Result.value = yield md5(hashInput.value);
          } catch (e2) {
            md5Result.value = errorMessage(e2);
          }
        });
      }
      function handleSha256() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            sha256Result.value = yield sha256(hashInput.value);
          } catch (e2) {
            sha256Result.value = errorMessage(e2);
          }
        });
      }
      function handleHmac() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            hmacResult.value = yield hmacSha1(hmacText.value, hmacKey.value);
          } catch (e2) {
            hmacResult.value = errorMessage(e2);
          }
        });
      }
      function handleAesEncrypt() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            aesEncryptResult.value = yield aesEncrypt(aesText.value, aesKey.value);
            aesDecryptResult.value = "";
          } catch (e2) {
            aesEncryptResult.value = errorMessage(e2);
          }
        });
      }
      function handleAesDecrypt() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            aesDecryptResult.value = yield aesDecrypt(aesEncryptResult.value, aesKey.value);
          } catch (e2) {
            aesDecryptResult.value = errorMessage(e2);
          }
        });
      }
      function handleDesEncrypt() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            desEncryptResult.value = yield desEncrypt(desText.value, desKey.value);
            desDecryptResult.value = "";
          } catch (e2) {
            desEncryptResult.value = errorMessage(e2);
          }
        });
      }
      function handleDesDecrypt() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            desDecryptResult.value = yield desDecrypt(desEncryptResult.value, desKey.value);
          } catch (e2) {
            desDecryptResult.value = errorMessage(e2);
          }
        });
      }
      function handleRsaGenerateKeyPair() {
        var _a2, _b;
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const jsonStr = yield rsaGenerateKeyPair(1024);
            rsaKeyPairResult.value = jsonStr;
            try {
              const keyData = UTS.JSON.parse(jsonStr);
              const pub = (_a2 = keyData["publicKey"]) !== null && _a2 !== void 0 ? _a2 : "";
              if (pub.length > 0) {
                rsaPublicKey.value = pub;
              }
              const pri = (_b = keyData["privateKey"]) !== null && _b !== void 0 ? _b : "";
              if (pri.length > 0) {
                rsaPrivateKey.value = pri;
              }
            } catch (err) {
              uni.__log__("error", "at src/sub/crypto/crypto.uvue:356", "Failed to parse RSA keypair:", err);
            }
          } catch (e2) {
            rsaKeyPairResult.value = errorMessage(e2);
          }
        });
      }
      function handleRsaEncrypt() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            rsaEncryptResult.value = yield rsaEncrypt(rsaText.value, rsaPublicKey.value);
            rsaDecryptResult.value = "";
          } catch (e2) {
            rsaEncryptResult.value = errorMessage(e2);
          }
        });
      }
      function handleRsaDecrypt() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            rsaDecryptResult.value = yield rsaDecrypt(rsaEncryptResult.value, rsaPrivateKey.value);
          } catch (e2) {
            rsaDecryptResult.value = errorMessage(e2);
          }
        });
      }
      function handleRsaSign() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            rsaSignResult.value = yield rsaSign(rsaText.value, rsaPrivateKey.value, "SHA-256");
            rsaVerifyResult.value = "";
          } catch (e2) {
            rsaSignResult.value = errorMessage(e2);
          }
        });
      }
      function handleRsaVerify() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const ok = yield rsaVerify(rsaText.value, rsaPublicKey.value, rsaSignResult.value, "SHA-256");
            rsaVerifyResult.value = ok ? "通过 (true)" : "未通过 (false)";
          } catch (e2) {
            rsaVerifyResult.value = errorMessage(e2);
          }
        });
      }
      const uuidResult = vue.ref("");
      function handleGenerateUUID() {
        uuidResult.value = generateUUID();
      }
      onNavbarPullDownRefresh(() => {
        setTimeout(() => {
          stopNavbarPullDownRefresh();
        }, 800);
      });
      return () => {
        "raw js";
        const _component_input = vue.resolveComponent("input");
        const n100 = vue.createSharedDataComponent(AppKu, "c5d3b9de", {
          layout: "navbar",
          "show-back": true,
          "hide-navbar": false,
          "enable-pull-down-refresh": true,
          "page-style": { "navigationBarTitleText": "Crypto 加密解密", "navigationStyle": "custom" }
        }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n99 = vue.createSharedDataComponent(LayoutComponent, "9fccbb64", {
              "show-back": true,
              "hide-navbar": false,
              "enable-pull-down-refresh": true,
              "page-style": { "navigationBarTitleText": "Crypto 加密解密", "navigationStyle": "custom" }
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedDataClass(__sharedData, 44, ["weapp-tw-border flex flex-col p-_b16px_B", isDark.value ? "bg-_b_h0f172a_B" : "bg-_b_hf8fafc_B"]);
                });
                const n97 = vue.createSharedDataComponent(Card, "9fcca51a", { title: "加密解密工具 (crypto)" }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n1 = vue.createSharedDataComponentWithFallback(_component_input, "9fcc8e56", {
                      value: () => {
                        return base64Input.value;
                      },
                      "onUpdate:value": () => {
                        return (_value) => {
                          return base64Input.value = _value;
                        };
                      },
                      placeholder: "请输入要编码的文本",
                      class: "h-_b38px_B bg-white rounded-_b6px_B px-_b12px_B border-_b1px_B border-solid border-_b_hcbd5e1_B text-_b13px_B text-_b_h334155_B mb-_b12px_B"
                    });
                    vue.setSharedData(__sharedData, 3, n1 == null ? void 0 : n1.sharedData);
                    vue.setSharedDataEvent(__sharedData, 14, handleBase64Encode);
                    vue.setSharedDataEvent(__sharedData, 15, handleBase64Decode);
                    vue.renderSharedDataEffect(() => {
                      vue.setSharedData(__sharedData, 29, vue.toDisplayString(base64EncodeResult.value));
                      vue.setSharedData(__sharedData, 30, vue.toDisplayString(base64DecodeResult.value));
                    });
                    const n14 = vue.createSharedDataComponentWithFallback(_component_input, "531b0fe5", {
                      value: () => {
                        return hashInput.value;
                      },
                      "onUpdate:value": () => {
                        return (_value) => {
                          return hashInput.value = _value;
                        };
                      },
                      placeholder: "请输入要计算摘要的文本",
                      class: "h-_b38px_B bg-white rounded-_b6px_B px-_b12px_B border-_b1px_B border-solid border-_b_hcbd5e1_B text-_b13px_B text-_b_h334155_B mb-_b12px_B"
                    });
                    vue.setSharedData(__sharedData, 4, n14 == null ? void 0 : n14.sharedData);
                    vue.setSharedDataEvent(__sharedData, 16, handleMd5);
                    vue.setSharedDataEvent(__sharedData, 17, handleSha256);
                    vue.renderSharedDataEffect(() => {
                      vue.setSharedData(__sharedData, 31, vue.toDisplayString(md5Result.value));
                      vue.setSharedData(__sharedData, 32, vue.toDisplayString(sha256Result.value));
                    });
                    const n27 = vue.createSharedDataComponentWithFallback(_component_input, "531bea78", {
                      value: () => {
                        return hmacText.value;
                      },
                      "onUpdate:value": () => {
                        return (_value) => {
                          return hmacText.value = _value;
                        };
                      },
                      placeholder: "请输入要签名的文本",
                      class: "h-_b38px_B bg-white rounded-_b6px_B px-_b12px_B border-_b1px_B border-solid border-_b_hcbd5e1_B text-_b13px_B text-_b_h334155_B mb-_b8px_B"
                    });
                    vue.setSharedData(__sharedData, 5, n27 == null ? void 0 : n27.sharedData);
                    const n28 = vue.createSharedDataComponentWithFallback(_component_input, "531bf507", {
                      value: () => {
                        return hmacKey.value;
                      },
                      "onUpdate:value": () => {
                        return (_value) => {
                          return hmacKey.value = _value;
                        };
                      },
                      placeholder: "请输入密钥 key",
                      class: "h-_b38px_B bg-white rounded-_b6px_B px-_b12px_B border-_b1px_B border-solid border-_b_hcbd5e1_B text-_b13px_B text-_b_h334155_B mb-_b12px_B"
                    });
                    vue.setSharedData(__sharedData, 6, n28 == null ? void 0 : n28.sharedData);
                    vue.setSharedDataEvent(__sharedData, 18, handleHmac);
                    vue.renderSharedDataEffect(() => {
                      return vue.setSharedData(__sharedData, 33, vue.toDisplayString(hmacResult.value));
                    });
                    const n35 = vue.createSharedDataComponentWithFallback(_component_input, "531c667d", {
                      value: () => {
                        return aesText.value;
                      },
                      "onUpdate:value": () => {
                        return (_value) => {
                          return aesText.value = _value;
                        };
                      },
                      placeholder: "请输入要加密的文本",
                      class: "h-_b38px_B bg-white rounded-_b6px_B px-_b12px_B border-_b1px_B border-solid border-_b_hcbd5e1_B text-_b13px_B text-_b_h334155_B mb-_b8px_B"
                    });
                    vue.setSharedData(__sharedData, 7, n35 == null ? void 0 : n35.sharedData);
                    const n36 = vue.createSharedDataComponentWithFallback(_component_input, "531c7120", {
                      value: () => {
                        return aesKey.value;
                      },
                      "onUpdate:value": () => {
                        return (_value) => {
                          return aesKey.value = _value;
                        };
                      },
                      placeholder: "请输入 16 位密钥",
                      class: "h-_b38px_B bg-white rounded-_b6px_B px-_b12px_B border-_b1px_B border-solid border-_b_hcbd5e1_B text-_b13px_B text-_b_h334155_B mb-_b12px_B"
                    });
                    vue.setSharedData(__sharedData, 8, n36 == null ? void 0 : n36.sharedData);
                    vue.setSharedDataEvent(__sharedData, 19, handleAesEncrypt);
                    vue.setSharedDataEvent(__sharedData, 20, handleAesDecrypt);
                    vue.renderSharedDataEffect(() => {
                      vue.setSharedData(__sharedData, 34, vue.toDisplayString(aesEncryptResult.value));
                      vue.setSharedData(__sharedData, 35, vue.toDisplayString(aesDecryptResult.value));
                    });
                    const n49 = vue.createSharedDataComponentWithFallback(_component_input, "531d4e82", {
                      value: () => {
                        return desText.value;
                      },
                      "onUpdate:value": () => {
                        return (_value) => {
                          return desText.value = _value;
                        };
                      },
                      placeholder: "请输入要加密的文本",
                      class: "h-_b38px_B bg-white rounded-_b6px_B px-_b12px_B border-_b1px_B border-solid border-_b_hcbd5e1_B text-_b13px_B text-_b_h334155_B mb-_b8px_B"
                    });
                    vue.setSharedData(__sharedData, 9, n49 == null ? void 0 : n49.sharedData);
                    const n50 = vue.createSharedDataComponentWithFallback(_component_input, "531d569a", {
                      value: () => {
                        return desKey.value;
                      },
                      "onUpdate:value": () => {
                        return (_value) => {
                          return desKey.value = _value;
                        };
                      },
                      placeholder: "请输入 8 位密钥",
                      class: "h-_b38px_B bg-white rounded-_b6px_B px-_b12px_B border-_b1px_B border-solid border-_b_hcbd5e1_B text-_b13px_B text-_b_h334155_B mb-_b12px_B"
                    });
                    vue.setSharedData(__sharedData, 10, n50 == null ? void 0 : n50.sharedData);
                    vue.setSharedDataEvent(__sharedData, 21, handleDesEncrypt);
                    vue.setSharedDataEvent(__sharedData, 22, handleDesDecrypt);
                    vue.renderSharedDataEffect(() => {
                      vue.setSharedData(__sharedData, 36, vue.toDisplayString(desEncryptResult.value));
                      vue.setSharedData(__sharedData, 37, vue.toDisplayString(desDecryptResult.value));
                    });
                    const n63 = vue.createSharedDataComponentWithFallback(_component_input, "531e341b", {
                      value: () => {
                        return rsaText.value;
                      },
                      "onUpdate:value": () => {
                        return (_value) => {
                          return rsaText.value = _value;
                        };
                      },
                      placeholder: "请输入要加密 / 签名的文本",
                      class: "h-_b38px_B bg-white rounded-_b6px_B px-_b12px_B border-_b1px_B border-solid border-_b_hcbd5e1_B text-_b13px_B text-_b_h334155_B mb-_b8px_B"
                    });
                    vue.setSharedData(__sharedData, 11, n63 == null ? void 0 : n63.sharedData);
                    vue.setSharedDataEvent(__sharedData, 23, handleRsaGenerateKeyPair);
                    vue.setSharedDataEvent(__sharedData, 24, handleRsaEncrypt);
                    const n69 = vue.createSharedDataComponentWithFallback(_component_input, "10369449", {
                      value: () => {
                        return rsaPublicKey.value;
                      },
                      "onUpdate:value": () => {
                        return (_value) => {
                          return rsaPublicKey.value = _value;
                        };
                      },
                      placeholder: "RSA 公钥（PKCS#1 / SPKI，PEM 或 Base64）",
                      class: "h-_b38px_B bg-white rounded-_b6px_B px-_b12px_B border-_b1px_B border-solid border-_b_hcbd5e1_B text-_b13px_B text-_b_h334155_B mb-_b8px_B"
                    });
                    vue.setSharedData(__sharedData, 12, n69 == null ? void 0 : n69.sharedData);
                    const n70 = vue.createSharedDataComponentWithFallback(_component_input, "10369f34", {
                      value: () => {
                        return rsaPrivateKey.value;
                      },
                      "onUpdate:value": () => {
                        return (_value) => {
                          return rsaPrivateKey.value = _value;
                        };
                      },
                      placeholder: "RSA 私钥（PKCS#1 / PKCS#8，PEM 或 Base64）",
                      class: "h-_b38px_B bg-white rounded-_b6px_B px-_b12px_B border-_b1px_B border-solid border-_b_hcbd5e1_B text-_b13px_B text-_b_h334155_B mb-_b12px_B"
                    });
                    vue.setSharedData(__sharedData, 13, n70 == null ? void 0 : n70.sharedData);
                    vue.setSharedDataEvent(__sharedData, 25, handleRsaDecrypt);
                    vue.setSharedDataEvent(__sharedData, 26, handleRsaSign);
                    vue.setSharedDataEvent(__sharedData, 27, handleRsaVerify);
                    vue.setSharedDataEvent(__sharedData, 28, handleGenerateUUID);
                    vue.renderSharedDataEffect(() => {
                      vue.setSharedData(__sharedData, 38, vue.toDisplayString(rsaKeyPairResult.value));
                      vue.setSharedData(__sharedData, 39, vue.toDisplayString(rsaEncryptResult.value));
                      vue.setSharedData(__sharedData, 40, vue.toDisplayString(rsaDecryptResult.value));
                      vue.setSharedData(__sharedData, 41, vue.toDisplayString(rsaSignResult.value));
                      vue.setSharedData(__sharedData, 42, vue.toDisplayString(rsaVerifyResult.value));
                      vue.setSharedData(__sharedData, 43, vue.toDisplayString(uuidResult.value));
                    });
                  })
                });
                vue.setSharedData(__sharedData, 2, n97.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n99.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n100.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$l = {};
  const SrcSubCryptoCrypto = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["styles", [_style_0$l]]]);
  const __className$j = "GenSrcSubDeviceDevice";
  const _sfc_main$k = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$j,
    __filename: "src/sub/device/device.uvue",
    __name: "device",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubDeviceDeviceSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubDeviceDeviceSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const appStore = useAppStore();
      const isDark = vue.computed(() => {
        return appStore.state.isDark;
      });
      const phoneNumber = vue.ref("10086");
      const shareSummary = vue.ref("unibestX - 高性能跨端原生开发框架");
      const shareHref = vue.ref("https://github.com/cq112233/unibestX");
      function handleMakePhoneCall() {
        if (phoneNumber.value == "") {
          uni.showToast({ title: "请输入电话号码", icon: "none" });
          return null;
        }
        uni.makePhoneCall({
          phoneNumber: phoneNumber.value,
          success: () => {
            uni.__log__("log", "at src/sub/device/device.uvue:232", "拨号成功");
          },
          fail: () => {
            uni.showToast({ title: "已取消或拨号失败", icon: "none" });
          }
        });
      }
      function handleShareWithSystem() {
        uni.shareWithSystem(new UTSJSONObject({
          summary: shareSummary.value,
          href: shareHref.value,
          success: () => {
            uni.showToast({ title: "分享调用成功", icon: "success" });
          },
          fail: () => {
            uni.showToast({ title: "已取消或分享失败", icon: "none" });
          }
        }));
      }
      const selectedFileName = vue.ref("");
      const selectedFileSizeText = vue.ref("");
      const selectedFilePath = vue.ref("");
      function formatFileSize(bytes) {
        if (bytes <= 0) {
          return "0 B";
        }
        if (bytes < 1024) {
          return "".concat(bytes, " B");
        }
        if (bytes < 1024 * 1024) {
          const kb = (bytes / 1024).toFixed(1);
          return "".concat(kb, " KB");
        }
        const mb = (bytes / (1024 * 1024)).toFixed(1);
        return "".concat(mb, " MB");
      }
      function handleChooseFile() {
        try {
          uni.chooseFile(new UTSJSONObject({
            count: 1,
            type: "all",
            success: (res) => {
              const tempFiles = res.tempFiles;
              if (tempFiles.length > 0) {
                const fileObj = tempFiles[0];
                selectedFileName.value = fileObj.name;
                selectedFileSizeText.value = formatFileSize(fileObj.size);
                selectedFilePath.value = fileObj.path;
                uni.showToast({ title: "文件选择成功", icon: "success" });
              } else if (res.tempFilePaths.length > 0) {
                selectedFilePath.value = res.tempFilePaths[0];
                selectedFileName.value = "已选文件";
                uni.showToast({ title: "文件选择成功", icon: "success" });
              }
            },
            fail: () => {
              uni.showToast({ title: "已取消选择文件", icon: "none" });
            }
          }));
        } catch (_e2) {
          uni.__log__("error", "at src/sub/device/device.uvue:310", _e2);
          uni.showToast({ title: "当前环境不支持选文件", icon: "none" });
        }
      }
      function handleOpenSelectedDoc() {
        if (selectedFilePath.value == "") {
          uni.showToast({ title: "请先选择文档文件", icon: "none" });
          return null;
        }
        uni.openDocument({
          filePath: selectedFilePath.value,
          success: () => {
            uni.__log__("log", "at src/sub/device/device.uvue:324", "文档打开成功");
          },
          fail: () => {
            uni.showToast({ title: "文档预览失败，请检查文件格式", icon: "none" });
          }
        });
      }
      function handleDownloadAndOpenSampleDoc() {
        uni.showLoading(new UTSJSONObject({ title: "下载示例文档中..." }));
        uni.downloadFile({
          url: "https://raw.githubusercontent.com/mozilla/pdf.js/master/examples/learning/helloworld.pdf",
          success: (res) => {
            uni.hideLoading();
            if (res.statusCode == 200 && res.tempFilePath != "") {
              uni.openDocument({
                filePath: res.tempFilePath,
                fileType: "pdf",
                success: () => {
                  uni.showToast({ title: "文档已打开", icon: "success" });
                },
                fail: () => {
                  uni.showToast({ title: "系统暂无法打开该格式文档", icon: "none" });
                }
              });
            } else {
              uni.showToast({ title: "文档下载失败", icon: "none" });
            }
          },
          fail: () => {
            uni.hideLoading();
            uni.showToast({ title: "下载示例文档超时或失败", icon: "none" });
          }
        });
      }
      const keyboardInputText = vue.ref("");
      const keyboardHeight = vue.ref(0);
      let keyboardListenerId = -1;
      function handleKeyboardHeightChange(event) {
        keyboardHeight.value = Math.ceil(event.detail.height);
      }
      function handleHideKeyboard() {
        uni.hideKeyboard();
      }
      vue.onMounted(() => {
        keyboardListenerId = uni.onKeyboardHeightChange((res) => {
          keyboardHeight.value = Math.ceil(res.height);
        });
      });
      vue.onUnmounted(() => {
        if (keyboardListenerId != -1) {
          uni.offKeyboardHeightChange(keyboardListenerId);
          keyboardListenerId = -1;
        }
      });
      const copyText = vue.ref("Hello unibestX!");
      function triggerShortVibration() {
        uni.vibrateShort({
          type: "light",
          success: () => {
            uni.showToast({ title: "已触发短震动反馈", icon: "none" });
          },
          fail: () => {
            uni.showToast({ title: "短震动触发失败", icon: "none" });
          }
        });
      }
      function triggerLongVibration() {
        uni.vibrateLong(new UTSJSONObject({
          success: () => {
            uni.showToast({ title: "已触发长震动反馈", icon: "none" });
          },
          fail: () => {
            uni.showToast({ title: "长震动触发失败", icon: "none" });
          }
        }));
      }
      function handleCopy() {
        if (copyText.value == "")
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
            uni.__log__("error", "at src/sub/device/device.uvue:461", err);
          }
        }));
      }
      function scanCode() {
        uni.scanCode(new UTSJSONObject({
          success: (res) => {
            scanResult.value = res.result;
          },
          fail: (err) => {
            uni.__log__("error", "at src/sub/device/device.uvue:472", err);
          }
        }));
      }
      onNavbarPullDownRefresh(() => {
        setTimeout(() => {
          stopNavbarPullDownRefresh();
        }, 800);
      });
      return () => {
        "raw js";
        const _component_input = vue.resolveComponent("input");
        const n93 = vue.createSharedDataComponent(AppKu, "2fddf00a", {
          layout: "navbar",
          "show-back": true,
          "hide-navbar": false,
          "enable-pull-down-refresh": true,
          "page-style": { "navigationBarTitleText": "原生设备能力", "navigationStyle": "custom" }
        }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n92 = vue.createSharedDataComponent(LayoutComponent, "27eef4b3", {
              "show-back": true,
              "hide-navbar": false,
              "enable-pull-down-refresh": true,
              "page-style": { "navigationBarTitleText": "原生设备能力", "navigationStyle": "custom" }
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedDataClass(__sharedData, 32, ["weapp-tw-border flex flex-col p-_b16px_B", isDark.value ? "bg-_b_h0f172a_B" : "bg-_b_hf8fafc_B"]);
                });
                const n19 = vue.createSharedDataComponent(Card, "27ef033c", { title: "通信与系统分享" }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n3 = vue.createSharedDataComponentWithFallback(_component_input, "5420f812", {
                      value: () => {
                        return phoneNumber.value;
                      },
                      "onUpdate:value": () => {
                        return (_value) => {
                          return phoneNumber.value = _value;
                        };
                      },
                      type: "number",
                      placeholder: "请输入电话号码",
                      class: "h-_b38px_B bg-white rounded-_b6px_B px-_b12px_B border-_b1px_B border-solid border-_b_hcbd5e1_B text-_b14px_B text-_b_h334155_B mb-_b12px_B"
                    });
                    vue.setSharedData(__sharedData, 9, n3 == null ? void 0 : n3.sharedData);
                    vue.setSharedDataEvent(__sharedData, 12, handleMakePhoneCall);
                    const n11 = vue.createSharedDataComponentWithFallback(_component_input, "54200ed0", {
                      value: () => {
                        return shareSummary.value;
                      },
                      "onUpdate:value": () => {
                        return (_value) => {
                          return shareSummary.value = _value;
                        };
                      },
                      placeholder: "请输入分享摘要",
                      class: "h-_b38px_B bg-white rounded-_b6px_B px-_b12px_B border-_b1px_B border-solid border-_b_hcbd5e1_B text-_b14px_B text-_b_h334155_B mb-_b10px_B"
                    });
                    vue.setSharedData(__sharedData, 10, n11 == null ? void 0 : n11.sharedData);
                    const n13 = vue.createSharedDataComponentWithFallback(_component_input, "541ff1c0", {
                      value: () => {
                        return shareHref.value;
                      },
                      "onUpdate:value": () => {
                        return (_value) => {
                          return shareHref.value = _value;
                        };
                      },
                      placeholder: "请输入分享网址",
                      class: "h-_b38px_B bg-white rounded-_b6px_B px-_b12px_B border-_b1px_B border-solid border-_b_hcbd5e1_B text-_b14px_B text-_b_h334155_B mb-_b12px_B"
                    });
                    vue.setSharedData(__sharedData, 11, n13 == null ? void 0 : n13.sharedData);
                    vue.setSharedDataEvent(__sharedData, 13, handleShareWithSystem);
                  })
                });
                vue.setSharedData(__sharedData, 8, n19.sharedData);
                const n45 = vue.createSharedDataComponent(Card, "541f25d4", { title: "文件与文档预览" }, {
                  "default": () => {
                    vue.setSharedDataEvent(__sharedData, 15, handleChooseFile);
                    vue.setSharedDataEvent(__sharedData, 16, handleOpenSelectedDoc);
                    vue.setSharedDataEvent(__sharedData, 17, handleDownloadAndOpenSampleDoc);
                    vue.renderSharedDataEffect(() => {
                      const _selectedFileName = selectedFileName.value;
                      const _selectedFileSizeText = selectedFileSizeText.value;
                      const _selectedFilePath = selectedFilePath.value;
                      vue.setSharedData(__sharedData, 18, vue.toDisplayString(_selectedFileName != "" ? _selectedFileName : "未选择"));
                      vue.setSharedData(__sharedData, 19, vue.toDisplayString(_selectedFileSizeText != "" ? _selectedFileSizeText : "-"));
                      vue.setSharedData(__sharedData, 20, vue.toDisplayString(_selectedFilePath != "" ? _selectedFilePath : "-"));
                      vue.setSharedDataClass(__sharedData, 21, ["weapp-tw-border w-full h-_b38px_B rounded-_b8px_B flex flex-row items-center justify-center mb-_b10px_B", _selectedFilePath != "" ? "bg-_b_h10b981_B" : "bg-_b_hcbd5e1_B"]);
                    });
                  }
                });
                vue.setSharedData(__sharedData, 14, n45.sharedData);
                const n57 = vue.createSharedDataComponent(Card, "541c4d5e", { title: "键盘感知与避让" }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    vue.renderSharedDataEffect(() => {
                      const _keyboardHeight = keyboardHeight.value;
                      vue.setSharedDataStyle(__sharedData, 25, { paddingBottom: "".concat(_keyboardHeight > 0 ? _keyboardHeight + 8 : 16, "px") });
                      vue.setSharedData(__sharedData, 26, vue.toDisplayString(_keyboardHeight));
                    });
                    const n52 = vue.createSharedDataComponentWithFallback(_component_input, "541b6648", {
                      value: () => {
                        return keyboardInputText.value;
                      },
                      "onUpdate:value": () => {
                        return (_value) => {
                          return keyboardInputText.value = _value;
                        };
                      },
                      placeholder: "点击此输入框触发键盘弹起与避让",
                      "adjust-position": false,
                      class: "h-_b40px_B bg-white rounded-_b6px_B px-_b12px_B border-_b1px_B border-solid border-_b_hcbd5e1_B text-_b14px_B text-_b_h334155_B mb-_b12px_B",
                      onKeyboardheightchange: () => {
                        return handleKeyboardHeightChange;
                      }
                    });
                    vue.setSharedData(__sharedData, 23, n52 == null ? void 0 : n52.sharedData);
                    vue.setSharedDataEvent(__sharedData, 24, handleHideKeyboard);
                  })
                });
                vue.setSharedData(__sharedData, 22, n57.sharedData);
                const n75 = vue.createSharedDataComponent(Card, "541a9228", { title: "触感与工具" }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n60 = vue.createSharedDataComponentWithFallback(_component_input, "541a7c24", {
                      value: () => {
                        return copyText.value;
                      },
                      "onUpdate:value": () => {
                        return (_value) => {
                          return copyText.value = _value;
                        };
                      },
                      placeholder: "请输入要复制的文本",
                      class: "h-_b38px_B bg-white rounded-_b6px_B px-_b12px_B border-_b1px_B border-solid border-_b_hcbd5e1_B text-_b14px_B text-_b_h334155_B mb-_b12px_B"
                    });
                    vue.setSharedData(__sharedData, 28, n60 == null ? void 0 : n60.sharedData);
                    vue.setSharedDataEvent(__sharedData, 29, handleCopy);
                    vue.setSharedDataEvent(__sharedData, 30, triggerShortVibration);
                    vue.setSharedDataEvent(__sharedData, 31, triggerLongVibration);
                  })
                });
                vue.setSharedData(__sharedData, 27, n75.sharedData);
                const n90 = vue.createSharedDataComponent(Card, "2ffe1144", { title: "相机与多媒体" }, {
                  "default": () => {
                    vue.createSharedDataIf(() => {
                      return vue.setSharedData(__sharedData, 3, vue.toSharedDataBoolean(photoUrl.value == ""));
                    }, () => {
                    }, () => {
                      vue.renderSharedDataEffect(() => {
                        return vue.setSharedDataAttr(__sharedData, 4, vue.toSharedDataString(photoUrl.value));
                      });
                    }, 261);
                    vue.setSharedDataEvent(__sharedData, 5, chooseImage);
                    vue.setSharedDataEvent(__sharedData, 6, scanCode);
                    vue.renderSharedDataEffect(() => {
                      const _scanResult = scanResult.value;
                      vue.setSharedData(__sharedData, 7, vue.toDisplayString(_scanResult != "" ? _scanResult : "暂无数据"));
                    });
                  }
                });
                vue.setSharedData(__sharedData, 2, n90.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n92.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n93.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$k = {};
  const SrcSubDeviceDevice = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["styles", [_style_0$k]]]);
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
    static get$UTSMetadata$(T2) {
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
    static get$UTSMetadata$(T2) {
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
    static get$UTSMetadata$(T2, U2) {
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
              this.append("".concat(item[0]), "".concat(item[1]));
            }
          });
        } else if (typeof init == "object") {
          Object.entries(init).forEach((_a2) => {
            var _b = __read(_a2, 2), name = _b[0], value = _b[1];
            this.append(name, value);
          });
        }
      }
    }
    parseString(query) {
      if (query.startsWith("?"))
        query = query.slice(1);
      query.split("&").forEach((pair) => {
        const arr = pair.split("=").map((s2) => {
          return this.decode(s2);
        });
        if (arr[0] != null && arr[0].length > 0) {
          this.append(arr[0], arr.length > 1 ? arr[1] : "");
        }
      });
    }
    encode(str) {
      var _a2;
      return (_a2 = encodeURIComponent(str)) === null || _a2 === void 0 ? null : _a2.replace(/%20/g, "+").replace(/%21/g, "!").replace(/%27/g, "'").replace(/%28/g, "(").replace(/%29/g, ")").replace(/%2A/g, "*").replace(/%2D/g, "-").replace(/%5F/g, "_").replace(/%2E/g, ".").replace(/%7E/g, "~");
    }
    decode(str) {
      return decodeURIComponent(str.replace(/\+/g, " "));
    }
    append(key2, value) {
      this._params.push(["".concat(key2), "".concat(value)]);
    }
    delete(key2) {
      const k2 = "".concat(key2);
      this._params = this._params.filter((pair) => {
        return pair[0] != k2;
      });
    }
    get(key2) {
      const entry = UTS.arrayFind(this._params, (pair) => {
        return pair[0] == "".concat(key2);
      });
      return entry != null ? entry[1] : null;
    }
    getAll(key2) {
      return this._params.filter((pair) => {
        return pair[0] == "".concat(key2);
      }).map((pair) => {
        return pair[1];
      });
    }
    has(key2) {
      return this._params.some((pair) => {
        return pair[0] == "".concat(key2);
      });
    }
    set(key2, value) {
      this.delete(key2);
      this.append(key2, value);
    }
    _toString() {
      return this._params.map((pair) => {
        return "".concat(this.encode(pair[0]), "=").concat(this.encode(pair[1]));
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
    return configs.reduce((result, config) => {
      const _result = result;
      for (let key2 in config) {
        if (config[key2] != null) {
          _result[key2] = config[key2];
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
  function mergeSearchParams(search2, query) {
    const originalParams = new URLSearchParams(search2);
    const mergedParams = new URLSearchParams();
    originalParams.entries().forEach((_a2) => {
      var _b = __read(_a2, 2), key2 = _b[0], value = _b[1];
      mergedParams.append(key2, value);
    });
    query.entries().forEach((_a2) => {
      var _b = __read(_a2, 2), key2 = _b[0], value = _b[1];
      if (mergedParams.has(key2)) {
        mergedParams.set(key2, value);
      } else {
        mergedParams.append(key2, value);
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
        const search2 = mergedUrl.slice(index);
        mergedUrl = originPath + "?" + mergeSearchParams(search2, query);
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
    const resolve = (data2) => {
      return __awaiter(this, void 0, void 0, function* () {
        var e_1, _a2;
        let _data = data2;
        try {
          for (var handlers_1 = __values(handlers), handlers_1_1 = handlers_1.next(); !handlers_1_1.done; handlers_1_1 = handlers_1.next()) {
            var fulfilled = handlers_1_1.value.fulfilled;
            try {
              _data = yield fulfilled(data2);
            } catch (err) {
              const error2 = new LimeRequestFail({
                source: null,
                errCode: 0,
                errSubject: "lime-request",
                data: null,
                cause: err,
                errMsg: err.message
                //?? '未知错误',
              });
              return Promise.reject(error2);
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (handlers_1_1 && !handlers_1_1.done && (_a2 = handlers_1.return))
              _a2.call(handlers_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        return Promise.resolve(_data);
      });
    };
    const reject = (error2) => {
      return __awaiter(this, void 0, void 0, function* () {
        var e_2, _a2;
        try {
          for (var handlers_2 = __values(handlers), handlers_2_1 = handlers_2.next(); !handlers_2_1.done; handlers_2_1 = handlers_2.next()) {
            var rejected = handlers_2_1.value.rejected;
            try {
              if (rejected != null) {
                const data2 = yield rejected(error2);
                return Promise.resolve(data2);
              }
            } catch (newError) {
              error2 = new LimeRequestFail({
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
            if (handlers_2_1 && !handlers_2_1.done && (_a2 = handlers_2.return))
              _a2.call(handlers_2);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
        return Promise.reject(error2);
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
    } catch (e2) {
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
    constructor(data2 = null, statusCode, header = null, cookies, config, errMsg, tempFilePath, apFilePath, filePath, fileContent = null) {
      this.data = data2;
      this.statusCode = statusCode;
      this.header = header;
      this.cookies = cookies;
      this.config = config;
      this.errMsg = errMsg;
      this.tempFilePath = tempFilePath;
      this.apFilePath = apFilePath;
      this.filePath = filePath;
      this.fileContent = fileContent;
    }
  }
  class Request {
    constructor(config) {
      const defaultRequestConfig = new UTSJSONObject({
        baseURL: ""
      });
      this.defaultConfig = mergeConfig(defaultRequestConfig, config);
      this.interceptors = createInterceptors();
    }
    request(config) {
      return new Promise((resolve, reject) => {
        let interceptors = this.interceptors;
        const _config = mergeConfig(this.defaultConfig, config);
        interceptors.request.resolve(_config).then((config2 = null) => {
          var _a2, _b, _c;
          const _d = config2, baseURL = _d.baseURL, params = _d.params, getTask = _d.getTask, url = _d.url;
          const mergedUrl = mergeUrl(baseURL, url, params);
          let task2 = null;
          const errMsg = "lime-request ".concat(config2.method, " ok");
          switch (config2.method) {
            case "DOWNLOAD":
              task2 = uni.downloadFile({
                url: mergedUrl,
                header: config2.header,
                filePath: config2.filePath,
                timeout: (_a2 = config2.timeout) !== null && _a2 !== void 0 ? _a2 : 12e4,
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
                    config2,
                    errMsg,
                    tempFilePath,
                    apFilePath,
                    filePath,
                    fileContent
                  );
                  interceptors.response.resolve(res).then(resolve, reject);
                },
                fail(error2) {
                  const err = new LimeRequestFail({
                    source: null,
                    errCode: error2.errCode,
                    errSubject: "lime-request",
                    data: error2.data,
                    cause: error2.cause,
                    errMsg: error2.errMsg
                  });
                  interceptors.response.reject(err).then((res) => {
                    reject(res);
                  }, reject);
                }
              });
              break;
            case "UPLOAD":
              task2 = uni.uploadFile({
                url: mergedUrl,
                filePath: config2.filePath,
                name: config2.name,
                files: config2.files,
                header: config2.header,
                formData: config2.formData,
                // enableHttp2: config.enableHttp2,
                // enableProfile: config.enableProfile,
                // enableQuic: config.enableQuic,
                // useHighPerformanceMode: config.useHighPerformanceMode,
                timeout: (_b = config2.timeout) !== null && _b !== void 0 ? _b : 6e4,
                success(result) {
                  const data3 = result.data, statusCode = result.statusCode;
                  const tempFilePath = "";
                  const apFilePath = "";
                  const filePath = "";
                  const fileContent = "";
                  const res = new LimeResponseImpl(
                    data3,
                    statusCode,
                    "",
                    //header,
                    [],
                    // cookies,
                    config2,
                    errMsg,
                    tempFilePath,
                    apFilePath,
                    filePath,
                    fileContent
                  );
                  interceptors.response.resolve(res).then(resolve, reject);
                },
                fail(error2) {
                  const err = new LimeRequestFail({
                    source: null,
                    errCode: error2.errCode,
                    errSubject: "lime-request",
                    data: error2.data,
                    cause: error2.cause,
                    errMsg: error2.errMsg
                  });
                  interceptors.response.reject(err).then((res) => {
                    reject(res);
                  }, reject);
                }
              });
              break;
            default:
              let data2 = config2.data;
              if (vue.isRef(data2)) {
                data2 = vue.unref(data2);
              }
              if (vue.isReactive(data2)) {
                data2 = new UTSJSONObject(Object.assign({}, vue.toRaw(data2)));
              }
              task2 = uni.request({
                url: mergedUrl,
                data: data2,
                header: config2.header,
                method: config2.method,
                timeout: (_c = config2.timeout) !== null && _c !== void 0 ? _c : 6e4,
                withCredentials: config2.withCredentials,
                firstIpv4: config2.firstIpv4,
                enableChunked: config2.enableChunked,
                success(result) {
                  const _a3 = result, data3 = _a3.data, statusCode = _a3.statusCode, header = _a3.header, cookies = _a3.cookies;
                  const tempFilePath = "";
                  const apFilePath = "";
                  const filePath = "";
                  const fileContent = "";
                  let parsedData = data3;
                  if (typeof data3 == "string") {
                    try {
                      if (isJSON(data3)) {
                        parsedData = UTS.JSON.parse(data3);
                      }
                    } catch (error2) {
                    }
                  }
                  const res = new LimeResponseImpl(parsedData, statusCode, header, cookies, config2, errMsg, tempFilePath, apFilePath, filePath, fileContent);
                  interceptors.response.resolve(res).then(resolve, reject);
                },
                fail(error2) {
                  const source = new UTSJSONObject({
                    url: mergedUrl,
                    baseURL,
                    path: url,
                    method: config2.method
                  });
                  const err = new LimeRequestFail({
                    errCode: error2.errCode,
                    errSubject: "lime-request",
                    data: error2.data,
                    cause: error2.cause,
                    errMsg: error2.errMsg,
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
            getTask(task2);
          }
        }).catch(reject);
      });
    }
    get(url, config = null) {
      const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
      _config.url = url;
      _config.method = "GET";
      return this.request(_config);
    }
    head(url, config = null) {
      const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
      _config.url = url;
      _config.method = "HEAD";
      return this.request(_config);
    }
    connect(url, config = null) {
      const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
      _config.url = url;
      _config.method = "CONNECT";
      return this.request(_config);
    }
    trace(url, config = null) {
      const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
      _config.url = url;
      _config.method = "TRACE";
      return this.request(_config);
    }
    post(url, data2 = null, config = null) {
      const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
      _config.url = url;
      _config.data = data2;
      _config.method = "POST";
      return this.request(_config);
    }
    put(url, data2 = null, config = null) {
      const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
      _config.url = url;
      _config.data = data2;
      _config.method = "PUT";
      return this.request(_config);
    }
    delete(url, data2 = null, config = null) {
      const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
      _config.url = url;
      _config.data = data2;
      _config.method = "DELETE";
      return this.request(_config);
    }
    options(url, data2 = null, config = null) {
      const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
      _config.url = url;
      _config.data = data2;
      _config.method = "OPTIONS";
      return this.request(_config);
    }
    upload(url, config = null) {
      const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
      _config.url = url;
      _config.method = "UPLOAD";
      return this.request(_config);
    }
    download(url, config = null) {
      const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
      _config.url = url;
      _config.method = "DOWNLOAD";
      return this.request(_config);
    }
  }
  let lastRedirectTime = 0;
  function toLoginPage(options = null) {
    var _a2, _b;
    const now = Date.now();
    if (now - lastRedirectTime < 1e3) {
      return null;
    }
    lastRedirectTime = now;
    const opts = options !== null && options !== void 0 ? options : new UTSJSONObject({});
    const mode = (_a2 = opts.getString("mode")) !== null && _a2 !== void 0 ? _a2 : "navigateTo";
    const queryString = (_b = opts.getString("queryString")) !== null && _b !== void 0 ? _b : "";
    const url = "".concat(LOGIN_PAGE).concat(queryString);
    const currentPath = getCurrentPath();
    if (currentPath == LOGIN_PAGE || currentPath.endsWith(LOGIN_PAGE)) {
      return null;
    }
    if (mode == "navigateTo") {
      uni.navigateTo({ url });
    } else {
      uni.reLaunch({ url });
    }
  }
  const ResultEnum = new UTSJSONObject({
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
  });
  const ContentTypeEnum = new UTSJSONObject({
    AppJson: "application/json;charset=UTF-8",
    FormUrlEncoded: "application/x-www-form-urlencoded;charset=UTF-8",
    FormData: "multipart/form-data;charset=UTF-8"
  });
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
        message2 = "连接出错(".concat(status, ")!");
    }
    return "".concat(message2, "，请检查网络或联系管理员！");
  }
  const DEFAULT_API_URL = "https://ukw0y1.laf.run";
  const directBaseUrl = getApiBaseUrl();
  const directSecondaryUrl = getApiSecondaryUrl();
  const defaultUrl = directBaseUrl.startsWith("/") ? DEFAULT_API_URL : directBaseUrl;
  const secondaryUrl = directSecondaryUrl.startsWith("/") ? DEFAULT_API_URL : directSecondaryUrl;
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
  const API_DOMAINS = new ApiDomainConfig({
    DEFAULT: defaultUrl,
    SECONDARY: secondaryUrl
  });
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
  requestInstance.interceptors.request.use((config) => {
    if (config.header === null) {
      config.header = new UTSJSONObject({});
    }
    const header = config.header;
    if (config.method != "UPLOAD" && header["Content-Type"] == null) {
      header["Content-Type"] = ContentTypeEnum.AppJson;
    }
    if (header.Accept == null) {
      header.Accept = "application/json, text/plain, */*";
    }
    const extra = config.extra;
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
      header.token = token;
    }
    if (extra !== null) {
      const domain = extra.domain;
      if (domain != null) {
        config.baseURL = domain;
      }
    }
    return config;
  }, (error2) => {
    return Promise.reject(error2);
  });
  requestInstance.interceptors.response.use((response) => {
    const config = response.config;
    const extra = config.extra;
    const method = config.method;
    if (method === "UPLOAD" || method === "DOWNLOAD") {
      return response;
    }
    const statusCode = response.statusCode;
    if (statusCode != 200) {
      const errorMessage = ShowMessage(statusCode);
      uni.__log__("error", "at src/http/request.uts:119", "errorMessage===>", errorMessage);
      uni.showToast({ title: errorMessage, icon: "error" });
      if (statusCode == 401) {
        const tokenStore = useTokenStore();
        tokenStore.clearToken();
        toLoginPage(new UTSJSONObject({ mode: "reLaunch" }));
      }
      throw new Error("".concat(errorMessage, "：").concat(response.errMsg));
    }
    const rawData = response.data;
    if (rawData === null) {
      throw new Error("返回的响应数据为空");
    }
    const resultObj = UTS.JSON.parseObject(UTS.JSON.stringify(rawData));
    if (resultObj !== null) {
      const code2 = resultObj.getNumber("code");
      const msgByKey = resultObj.message;
      const msgByMsg = resultObj.msg;
      const message2 = msgByKey != null ? msgByKey : msgByMsg != null ? msgByMsg : "未知错误";
      if (code2 !== null) {
        const codeVal = code2;
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
          throw new Error("请求错误[".concat(codeVal, "]：").concat(message2));
        }
      }
    }
    return response;
  }, (error2) => {
    uni.__log__("error", "at src/http/request.uts:167", "request error ===>", error2);
    uni.showToast({ title: "网络错误，请稍后再试", icon: "none" });
    return Promise.reject(error2);
  });
  class HttpClient {
    request(config) {
      return requestInstance.request(config).then((res) => {
        const rawData = res.data;
        if (rawData === null) {
          throw new Error("响应数据为空");
        }
        const obj = UTS.JSON.parseObject(UTS.JSON.stringify(rawData));
        if (obj !== null) {
          const code2 = obj.getNumber("code");
          if (code2 !== null) {
            const innerData = obj.get("data");
            if (innerData !== null) {
              return innerData;
            }
            throw new Error("响应结构包含 code，但 data 字段为空");
          }
        }
        return rawData;
      });
    }
    get(url, config = null) {
      const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
      _config.url = url;
      _config.method = "GET";
      return this.request(_config);
    }
    post(url, data2 = null, config = null) {
      const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
      _config.url = url;
      _config.data = data2;
      _config.method = "POST";
      return this.request(_config);
    }
    put(url, data2 = null, config = null) {
      const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
      _config.url = url;
      _config.data = data2;
      _config.method = "PUT";
      return this.request(_config);
    }
    delete(url, data2 = null, config = null) {
      const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
      _config.url = url;
      _config.data = data2;
      _config.method = "DELETE";
      return this.request(_config);
    }
    /**
     * 上传文件（lime-request UPLOAD，自动携带 token，响应为原始 JSON 字符串）
     */
    upload(url, config = null) {
      return requestInstance.upload(url, config).then((res) => {
        const rawData = res.data;
        if (rawData === null) {
          throw new Error("上传响应为空");
        }
        return rawData;
      });
    }
  }
  const http = new HttpClient();
  class UploadFileOptions extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            url: { type: String, optional: true },
            filePath: { type: String, optional: false },
            name: { type: String, optional: true },
            header: { type: "Unknown", optional: true },
            formData: { type: "Unknown", optional: true },
            ignoreAuth: { type: Boolean, optional: true },
            onProgress: { type: "Unknown", optional: true }
          };
        }
      };
    }
    constructor(options, metadata = UploadFileOptions.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.url = this.__props__.url;
      this.filePath = this.__props__.filePath;
      this.name = this.__props__.name;
      this.header = this.__props__.header;
      this.formData = this.__props__.formData;
      this.ignoreAuth = this.__props__.ignoreAuth;
      this.onProgress = this.__props__.onProgress;
      delete this.__props__;
    }
  }
  const DEFAULT_OSS_BASE_URL = getOssBaseUrl();
  const DEFAULT_OSS_UPLOAD_PATH = getOssUploadPath();
  const DEFAULT_OSS_UPLOAD_URL = getOssUploadUrl();
  function uploadFile(options) {
    return new Promise((resolve, reject) => {
      var _a2, _b, _c, _d;
      let finalUrl = (_a2 = options.url) !== null && _a2 !== void 0 ? _a2 : DEFAULT_OSS_UPLOAD_URL;
      if (finalUrl.startsWith("/")) {
        finalUrl = "".concat(DEFAULT_OSS_BASE_URL).concat(finalUrl);
      }
      const header = (_b = options.header) !== null && _b !== void 0 ? _b : new UTSJSONObject({});
      if (options.ignoreAuth != true) {
        const tokenStore = useTokenStore();
        const token = tokenStore.getToken();
        if (token != "") {
          header.token = token;
        }
      }
      const uploadTask = uni.uploadFile({
        url: finalUrl,
        filePath: options.filePath,
        name: (_c = options.name) !== null && _c !== void 0 ? _c : "file",
        header,
        formData: (_d = options.formData) !== null && _d !== void 0 ? _d : new UTSJSONObject({}),
        success: (res) => {
          const statusCode = res.statusCode;
          if (statusCode != 200) {
            reject(new Error("上传请求失败，HTTP 状态码: ".concat(statusCode)));
            return null;
          }
          try {
            const url = parseUploadResult(res.data);
            resolve(url);
          } catch (e2) {
            reject(UTS.isInstanceOf(e2, Error) ? e2 : new Error("".concat(e2)));
          }
        },
        fail: (err) => {
          var _a3;
          uni.__log__("error", "at src/utils/upload.uts:85", "uni.uploadFile fail:", err);
          reject(new Error((_a3 = err.errMsg) !== null && _a3 !== void 0 ? _a3 : "文件上传失败"));
        }
      });
      if (options.onProgress != null) {
        uploadTask.onProgressUpdate((res) => {
          options.onProgress(res.progress);
        });
      }
    });
  }
  function parseUploadResult(raw) {
    var _a2, _b, _c, _d, _e2, _f, _g, _h, _j;
    const trimmed = raw.trim();
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
      return trimmed;
    }
    const obj = UTS.JSON.parseObject(trimmed);
    if (obj == null) {
      return trimmed;
    }
    const successVal = obj.getBoolean("success");
    if (successVal == false) {
      const msg = (_b = (_a2 = obj.getString("msg")) !== null && _a2 !== void 0 ? _a2 : obj.getString("message")) !== null && _b !== void 0 ? _b : "上传业务失败";
      const code2 = (_c = obj.getString("code")) !== null && _c !== void 0 ? _c : obj.getNumber("code") != null ? "".concat(obj.getNumber("code")) : "";
      throw new Error("上传失败".concat(code2 != "" ? "[".concat(code2, "]") : "", "：").concat(msg));
    }
    if (successVal != true) {
      const numCode = obj.getNumber("code");
      const strCode = obj.getString("code");
      let isFailed = false;
      let codeStr = "";
      if (numCode != null) {
        codeStr = "".concat(numCode);
        if (numCode != 200 && numCode != 0 && numCode != 1e4) {
          isFailed = true;
        }
      } else if (strCode != null) {
        codeStr = strCode;
        if (strCode != "200" && strCode != "0" && strCode != "10000" && strCode != "000000" && strCode != "SUCCESS" && strCode != "OK") {
          isFailed = true;
        }
      }
      if (isFailed) {
        const msg = (_e2 = (_d = obj.getString("msg")) !== null && _d !== void 0 ? _d : obj.getString("message")) !== null && _e2 !== void 0 ? _e2 : "上传失败";
        throw new Error("上传失败[".concat(codeStr, "]：").concat(msg));
      }
    }
    const topUrl = obj.getString("url");
    if (topUrl != null && topUrl != "") {
      return topUrl;
    }
    const data2 = obj.get("data");
    if (data2 != null) {
      if (typeof data2 == "string") {
        const dataStr = data2.trim();
        if (dataStr != "" && dataStr != "null") {
          return dataStr;
        }
      }
      const dataObj = data2;
      const dataUrl = (_j = (_h = (_g = (_f = dataObj.getString("url")) !== null && _f !== void 0 ? _f : dataObj.getString("fileUrl")) !== null && _g !== void 0 ? _g : dataObj.getString("ossUrl")) !== null && _h !== void 0 ? _h : dataObj.getString("path")) !== null && _j !== void 0 ? _j : dataObj.getString("link");
      if (dataUrl != null && dataUrl != "") {
        return dataUrl;
      }
    }
    if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
      throw new Error("上传成功但未能从响应中解析出文件 URL 地址");
    }
    return trimmed;
  }
  const FOO_UPLOAD_PATH = DEFAULT_OSS_UPLOAD_PATH;
  class IFoo extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            id: { type: "Any", optional: true },
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
  function getFooList(_params = null) {
    return Promise.resolve(MOCK_FOO_LIST);
  }
  function foo() {
    return http.get("/foo", new LimeRequestConfig({
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
    })).then((data2) => {
      var _a2, _b;
      return new IFoo({
        id: (_a2 = data2.get("id")) !== null && _a2 !== void 0 ? _a2 : "",
        name: (_b = data2.getString("name")) !== null && _b !== void 0 ? _b : ""
      });
    });
  }
  function uploadFooFile(filePath, ignoreAuth = false, uploadPathOrUrl = FOO_UPLOAD_PATH) {
    return uploadFile(new UploadFileOptions({
      name: null,
      header: null,
      onProgress: null,
      url: uploadPathOrUrl,
      filePath,
      formData: null,
      ignoreAuth
    }));
  }
  const pages = [
    new UTSJSONObject({
      path: "src/pages/index/index",
      customPageClass: "init-page",
      customPageStyle: "background-color: transparent;",
      layout: "navbar",
      showBack: false,
      hideStatusBar: false,
      hideNavbar: false,
      enablePullDownRefresh: true,
      style: new UTSJSONObject({
        navigationBarTitleText: "首页",
        navigationStyle: "custom"
      })
    }),
    new UTSJSONObject({
      path: "src/pages/ai/ai",
      layout: "navbar",
      showBack: true,
      style: new UTSJSONObject({
        navigationBarTitleText: "AI 智能助手",
        navigationStyle: "custom"
      })
    }),
    new UTSJSONObject({
      path: "src/pages/basic/basic",
      layout: "navbar",
      showBack: false,
      enablePullDownRefresh: true,
      hideStatusBar: false,
      hideNavbar: false,
      style: new UTSJSONObject({
        navigationBarTitleText: "基础",
        navigationStyle: "custom"
      })
    }),
    new UTSJSONObject({
      path: "src/pages/function/function",
      layout: "navbar",
      showBack: false,
      enablePullDownRefresh: true,
      hideStatusBar: false,
      hideNavbar: false,
      style: new UTSJSONObject({
        navigationBarTitleText: "功能",
        navigationStyle: "custom"
      })
    }),
    new UTSJSONObject({
      path: "src/pages/me/me",
      layout: "navbar",
      showBack: false,
      enablePullDownRefresh: true,
      hideStatusBar: false,
      hideNavbar: false,
      style: new UTSJSONObject({
        navigationBarTitleText: "我的",
        navigationStyle: "custom"
      })
    })
  ];
  const globalStyle = new UTSJSONObject({
    navigationBarTextStyle: "@navigationBarTextStyle",
    navigationBarTitleText: "uni-app x",
    navigationBarBackgroundColor: "@navigationBarBackgroundColor",
    backgroundColor: "@backgroundColor",
    backgroundColorContent: "@backgroundColorContent",
    backgroundColorTop: "@backgroundColorTop",
    backgroundColorBottom: "@backgroundColorBottom",
    backgroundTextStyle: "@backgroundTextStyle"
  });
  const easycom = new UTSJSONObject({
    autoscan: true,
    custom: new UTSJSONObject({
      "^e-chart$": "@/uni_modules/e-chart/components/e-chart/e-chart.uvue"
    })
  });
  const subPackages = [
    new UTSJSONObject({
      root: "src/sub",
      pages: [
        new UTSJSONObject({
          path: "auth/login",
          layout: "navbar",
          showBack: true,
          hideNavbar: false,
          enablePullDownRefresh: false,
          style: new UTSJSONObject({
            navigationBarTitleText: "登录",
            navigationStyle: "custom"
          })
        }),
        new UTSJSONObject({
          path: "auth/register",
          layout: "navbar",
          showBack: true,
          hideNavbar: false,
          enablePullDownRefresh: false,
          style: new UTSJSONObject({
            navigationBarTitleText: "注册",
            navigationStyle: "custom"
          })
        }),
        new UTSJSONObject({
          path: "crypto/crypto",
          layout: "navbar",
          showBack: true,
          hideNavbar: false,
          enablePullDownRefresh: true,
          style: new UTSJSONObject({
            navigationBarTitleText: "Crypto 加密解密",
            navigationStyle: "custom"
          })
        }),
        new UTSJSONObject({
          path: "device/device",
          layout: "navbar",
          showBack: true,
          hideNavbar: false,
          enablePullDownRefresh: true,
          style: new UTSJSONObject({
            navigationBarTitleText: "原生设备能力",
            navigationStyle: "custom"
          })
        }),
        new UTSJSONObject({
          path: "httpDemo/httpDemo",
          layout: "navbar",
          showBack: true,
          hideNavbar: false,
          enablePullDownRefresh: true,
          style: new UTSJSONObject({
            navigationBarTitleText: "HTTP 请求 Demo",
            navigationStyle: "custom"
          })
        }),
        new UTSJSONObject({
          path: "layoutDemo/layoutDemo",
          layout: "navbar",
          showBack: true,
          hideNavbar: false,
          enablePullDownRefresh: false,
          style: new UTSJSONObject({
            navigationBarTitleText: "布局页面示例",
            navigationStyle: "custom"
          })
        }),
        new UTSJSONObject({
          path: "lodash/lodash",
          layout: "navbar",
          showBack: true,
          hideNavbar: false,
          enablePullDownRefresh: true,
          style: new UTSJSONObject({
            navigationBarTitleText: "Lodash 工具库",
            navigationStyle: "custom"
          })
        }),
        new UTSJSONObject({
          path: "nested-scroll/nested-scroll",
          layout: "navbar",
          showBack: true,
          hideNavbar: false,
          enablePullDownRefresh: false,
          style: new UTSJSONObject({
            navigationBarTitleText: "NestedScroll 自研嵌套滚动",
            navigationStyle: "custom"
          })
        }),
        new UTSJSONObject({
          path: "rxjsDemo/rxjsDemo",
          layout: "navbar",
          showBack: true,
          hideNavbar: false,
          enablePullDownRefresh: true,
          style: new UTSJSONObject({
            navigationBarTitleText: "rxjs 流式演示",
            navigationStyle: "custom"
          })
        }),
        new UTSJSONObject({
          path: "tailwindcss/tailwindcss",
          layout: "navbar",
          showBack: true,
          hideNavbar: false,
          enablePullDownRefresh: false,
          style: new UTSJSONObject({
            navigationBarTitleText: "weapp-tailwindcss 示例",
            navigationStyle: "custom"
          })
        }),
        new UTSJSONObject({
          path: "test/test",
          layout: "navbar",
          showBack: true,
          hideNavbar: false,
          enablePullDownRefresh: true,
          style: new UTSJSONObject({
            navigationBarTitleText: "URL 参数测试",
            navigationStyle: "custom"
          })
        }),
        new UTSJSONObject({
          path: "time/time",
          layout: "navbar",
          showBack: true,
          hideNavbar: false,
          enablePullDownRefresh: true,
          style: new UTSJSONObject({
            navigationBarTitleText: "时间日期操作",
            navigationStyle: "custom"
          })
        }),
        new UTSJSONObject({
          path: "uiTest/uiTest",
          layout: "navbar",
          showBack: true,
          hideNavbar: false,
          enablePullDownRefresh: false,
          style: new UTSJSONObject({
            navigationBarTitleText: "UI 测试",
            navigationStyle: "custom"
          })
        }),
        new UTSJSONObject({
          path: "zpaging/zpaging",
          layout: "navbar",
          showBack: true,
          hideNavbar: false,
          enablePullDownRefresh: false,
          style: new UTSJSONObject({
            navigationBarTitleText: "z-paging-x 原生分页",
            navigationStyle: "custom"
          })
        })
      ]
    })
  ];
  const e = new UTSJSONObject({
    pages,
    globalStyle,
    easycom,
    subPackages
  });
  var define_process_env_UNI_SECURE_NETWORK_CONFIG_default = [];
  function t(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
  }
  function n(e2, t2, n2) {
    return e2(n2 = { path: t2, exports: {}, require: function(e3, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t3 && n2.path);
    } }, n2.exports), n2.exports;
  }
  var s = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = n2 || function(e3, t3) {
      var n3 = Object.create || /* @__PURE__ */ function() {
        function e4() {
        }
        return function(t4) {
          var n4;
          return e4.prototype = t4, n4 = new e4(), e4.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e4) {
        var t4 = n3(this);
        return e4 && t4.mixIn(e4), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e4 = this.extend();
        return e4.init.apply(e4, arguments), e4;
      }, init: function() {
      }, mixIn: function(e4) {
        for (var t4 in e4)
          e4.hasOwnProperty(t4) && (this[t4] = e4[t4]);
        e4.hasOwnProperty("toString") && (this.toString = e4.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, o2 = r2.WordArray = i2.extend({ init: function(e4, n4) {
        e4 = this.words = e4 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e4.length;
      }, toString: function(e4) {
        return (e4 || c2).stringify(this);
      }, concat: function(e4) {
        var t4 = this.words, n4 = e4.words, s3 = this.sigBytes, r3 = e4.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var i3 = 0; i3 < r3; i3++) {
            var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
            t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
          }
        else
          for (i3 = 0; i3 < r3; i3 += 4)
            t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e3.ceil(n4 / 4);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4.words = this.words.slice(0), e4;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e3.random() > 0.5 ? 1 : -1);
          };
        }, i3 = 0; i3 < t4; i3 += 4) {
          var a3 = r3(4294967296 * (n4 || e3.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new o2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e4.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new o2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(i3));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e4.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new o2.init(n4, t4);
      } }, l2 = a2.Utf8 = { stringify: function(e4) {
        try {
          return decodeURIComponent(escape(u2.stringify(e4)));
        } catch (e5) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e4) {
        return u2.parse(unescape(encodeURIComponent(e4)));
      } }, d2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
        this._data = new o2.init(), this._nDataBytes = 0;
      }, _append: function(e4) {
        "string" == typeof e4 && (e4 = l2.parse(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e3.ceil(a3) : e3.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e3.min(4 * c3, r3);
        if (c3) {
          for (var l3 = 0; l3 < c3; l3 += i3)
            this._doProcessBlock(s3, l3);
          var d3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new o2.init(d3, u3);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._data = this._data.clone(), e4;
      }, _minBufferSize: 0 });
      r2.Hasher = d2.extend({ cfg: i2.extend(), init: function(e4) {
        this.cfg = this.cfg.extend(e4), this.reset();
      }, reset: function() {
        d2.reset.call(this), this._doReset();
      }, update: function(e4) {
        return this._append(e4), this._process(), this;
      }, finalize: function(e4) {
        return e4 && this._append(e4), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e4) {
        return function(t4, n4) {
          return new e4.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e4) {
        return function(t4, n4) {
          return new h2.HMAC.init(e4, n4).finalize(t4);
        };
      } });
      var h2 = s2.algo = {};
      return s2;
    }(Math), n2);
  }), r = s, i = (n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e3.abs(e3.sin(t4 + 1)) | 0;
      }();
      var c2 = o2.MD5 = i2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e4[s3];
          e4[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var i3 = this._hash.words, o3 = e4[t4 + 0], c3 = e4[t4 + 1], p2 = e4[t4 + 2], f2 = e4[t4 + 3], g2 = e4[t4 + 4], m2 = e4[t4 + 5], y2 = e4[t4 + 6], _2 = e4[t4 + 7], w2 = e4[t4 + 8], v2 = e4[t4 + 9], I2 = e4[t4 + 10], S2 = e4[t4 + 11], k2 = e4[t4 + 12], A2 = e4[t4 + 13], C2 = e4[t4 + 14], T2 = e4[t4 + 15], b2 = i3[0], P2 = i3[1], x2 = i3[2], O2 = i3[3];
        b2 = u2(b2, P2, x2, O2, o3, 7, a2[0]), O2 = u2(O2, b2, P2, x2, c3, 12, a2[1]), x2 = u2(x2, O2, b2, P2, p2, 17, a2[2]), P2 = u2(P2, x2, O2, b2, f2, 22, a2[3]), b2 = u2(b2, P2, x2, O2, g2, 7, a2[4]), O2 = u2(O2, b2, P2, x2, m2, 12, a2[5]), x2 = u2(x2, O2, b2, P2, y2, 17, a2[6]), P2 = u2(P2, x2, O2, b2, _2, 22, a2[7]), b2 = u2(b2, P2, x2, O2, w2, 7, a2[8]), O2 = u2(O2, b2, P2, x2, v2, 12, a2[9]), x2 = u2(x2, O2, b2, P2, I2, 17, a2[10]), P2 = u2(P2, x2, O2, b2, S2, 22, a2[11]), b2 = u2(b2, P2, x2, O2, k2, 7, a2[12]), O2 = u2(O2, b2, P2, x2, A2, 12, a2[13]), x2 = u2(x2, O2, b2, P2, C2, 17, a2[14]), b2 = l2(b2, P2 = u2(P2, x2, O2, b2, T2, 22, a2[15]), x2, O2, c3, 5, a2[16]), O2 = l2(O2, b2, P2, x2, y2, 9, a2[17]), x2 = l2(x2, O2, b2, P2, S2, 14, a2[18]), P2 = l2(P2, x2, O2, b2, o3, 20, a2[19]), b2 = l2(b2, P2, x2, O2, m2, 5, a2[20]), O2 = l2(O2, b2, P2, x2, I2, 9, a2[21]), x2 = l2(x2, O2, b2, P2, T2, 14, a2[22]), P2 = l2(P2, x2, O2, b2, g2, 20, a2[23]), b2 = l2(b2, P2, x2, O2, v2, 5, a2[24]), O2 = l2(O2, b2, P2, x2, C2, 9, a2[25]), x2 = l2(x2, O2, b2, P2, f2, 14, a2[26]), P2 = l2(P2, x2, O2, b2, w2, 20, a2[27]), b2 = l2(b2, P2, x2, O2, A2, 5, a2[28]), O2 = l2(O2, b2, P2, x2, p2, 9, a2[29]), x2 = l2(x2, O2, b2, P2, _2, 14, a2[30]), b2 = d2(b2, P2 = l2(P2, x2, O2, b2, k2, 20, a2[31]), x2, O2, m2, 4, a2[32]), O2 = d2(O2, b2, P2, x2, w2, 11, a2[33]), x2 = d2(x2, O2, b2, P2, S2, 16, a2[34]), P2 = d2(P2, x2, O2, b2, C2, 23, a2[35]), b2 = d2(b2, P2, x2, O2, c3, 4, a2[36]), O2 = d2(O2, b2, P2, x2, g2, 11, a2[37]), x2 = d2(x2, O2, b2, P2, _2, 16, a2[38]), P2 = d2(P2, x2, O2, b2, I2, 23, a2[39]), b2 = d2(b2, P2, x2, O2, A2, 4, a2[40]), O2 = d2(O2, b2, P2, x2, o3, 11, a2[41]), x2 = d2(x2, O2, b2, P2, f2, 16, a2[42]), P2 = d2(P2, x2, O2, b2, y2, 23, a2[43]), b2 = d2(b2, P2, x2, O2, v2, 4, a2[44]), O2 = d2(O2, b2, P2, x2, k2, 11, a2[45]), x2 = d2(x2, O2, b2, P2, T2, 16, a2[46]), b2 = h2(b2, P2 = d2(P2, x2, O2, b2, p2, 23, a2[47]), x2, O2, o3, 6, a2[48]), O2 = h2(O2, b2, P2, x2, _2, 10, a2[49]), x2 = h2(x2, O2, b2, P2, C2, 15, a2[50]), P2 = h2(P2, x2, O2, b2, m2, 21, a2[51]), b2 = h2(b2, P2, x2, O2, k2, 6, a2[52]), O2 = h2(O2, b2, P2, x2, f2, 10, a2[53]), x2 = h2(x2, O2, b2, P2, I2, 15, a2[54]), P2 = h2(P2, x2, O2, b2, c3, 21, a2[55]), b2 = h2(b2, P2, x2, O2, w2, 6, a2[56]), O2 = h2(O2, b2, P2, x2, T2, 10, a2[57]), x2 = h2(x2, O2, b2, P2, y2, 15, a2[58]), P2 = h2(P2, x2, O2, b2, A2, 21, a2[59]), b2 = h2(b2, P2, x2, O2, g2, 6, a2[60]), O2 = h2(O2, b2, P2, x2, S2, 10, a2[61]), x2 = h2(x2, O2, b2, P2, p2, 15, a2[62]), P2 = h2(P2, x2, O2, b2, v2, 21, a2[63]), i3[0] = i3[0] + b2 | 0, i3[1] = i3[1] + P2 | 0, i3[2] = i3[2] + x2 | 0, i3[3] = i3[3] + O2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var i3 = e3.floor(s3 / 4294967296), o3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var l3 = c3[u3];
          c3[u3] = 16711935 & (l3 << 8 | l3 >>> 24) | 4278255360 & (l3 << 24 | l3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      function u2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & n3 | ~t4 & s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function l2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & s3 | n3 & ~s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function d2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 ^ n3 ^ s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function h2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (n3 ^ (t4 | ~s3)) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, void function() {
      var e3 = n2, t3 = e3.lib.Base, s2 = e3.enc.Utf8;
      e3.algo.HMAC = t3.extend({ init: function(e4, t4) {
        e4 = this._hasher = new e4.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
        var n3 = e4.blockSize, r2 = 4 * n3;
        t4.sigBytes > r2 && (t4 = e4.finalize(t4)), t4.clamp();
        for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
          a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
        i2.sigBytes = o2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e4 = this._hasher;
        e4.reset(), e4.update(this._iKey);
      }, update: function(e4) {
        return this._hasher.update(e4), this;
      }, finalize: function(e4) {
        var t4 = this._hasher, n3 = t4.finalize(e4);
        return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
      } });
    }());
  }), n(function(e2, t2) {
    e2.exports = r.HmacMD5;
  })), o = n(function(e2, t2) {
    e2.exports = r.enc.Utf8;
  }), a = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function() {
      var e3 = n2, t3 = e3.lib.WordArray;
      function s2(e4, n3, s3) {
        for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
          if (o2 % 4) {
            var a2 = s3[e4.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e4.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
          }
        return t3.create(r2, i2);
      }
      e3.enc.Base64 = { stringify: function(e4) {
        var t4 = e4.words, n3 = e4.sigBytes, s3 = this._map;
        e4.clamp();
        for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
          for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
            r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
        var c2 = s3.charAt(64);
        if (c2)
          for (; r2.length % 4; )
            r2.push(c2);
        return r2.join("");
      }, parse: function(e4) {
        var t4 = e4.length, n3 = this._map, r2 = this._reverseMap;
        if (!r2) {
          r2 = this._reverseMap = [];
          for (var i2 = 0; i2 < n3.length; i2++)
            r2[n3.charCodeAt(i2)] = i2;
        }
        var o2 = n3.charAt(64);
        if (o2) {
          var a2 = e4.indexOf(o2);
          -1 !== a2 && (t4 = a2);
        }
        return s2(e4, t4, r2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), n2.enc.Base64);
  }), c = a;
  const u = "FUNCTION", l = "OBJECT", d = "CLIENT_DB", h = "pending", p = "fulfilled", f = "rejected";
  function g(e2) {
    return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
  }
  function m(e2) {
    return "object" === g(e2);
  }
  function y(e2) {
    return "function" == typeof e2;
  }
  function _(e2) {
    return function() {
      try {
        return e2.apply(e2, arguments);
      } catch (e3) {
        console.error(e3);
      }
    };
  }
  const w = "REJECTED", v = "NOT_PENDING";
  class I {
    constructor({ createPromise: e2, retryRule: t2 = w } = {}) {
      this.createPromise = e2, this.status = null, this.promise = null, this.retryRule = t2;
    }
    get needRetry() {
      if (!this.status)
        return true;
      switch (this.retryRule) {
        case w:
          return this.status === f;
        case v:
          return this.status !== h;
      }
    }
    exec() {
      return this.needRetry ? (this.status = h, this.promise = this.createPromise().then((e2) => (this.status = p, Promise.resolve(e2)), (e2) => (this.status = f, Promise.reject(e2))), this.promise) : this.promise;
    }
  }
  function S$1(e2) {
    return e2 && "string" == typeof e2 ? JSON.parse(e2) : e2;
  }
  const k = false, A = "app", C = S$1(define_process_env_UNI_SECURE_NETWORK_CONFIG_default), T = A;
  S$1("");
  const P = S$1("[]") || [];
  let O = "";
  try {
    O = "__UNI__B120614";
  } catch (e2) {
  }
  let E, L = {};
  if (L = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {}, "mp-weixin" === T)
    ;
  function R(e2, t2 = {}) {
    var n2, s2;
    return n2 = L, s2 = e2, Object.prototype.hasOwnProperty.call(n2, s2) || (L[e2] = t2), L[e2];
  }
  function U() {
    return E || (E = function() {
      if ("undefined" != typeof globalThis)
        return globalThis;
      if ("undefined" != typeof self)
        return self;
      if ("undefined" != typeof window)
        return window;
      function e2() {
        return this;
      }
      return void 0 !== e2() ? e2() : new Function("return this")();
    }(), E);
  }
  const N = ["invoke", "success", "fail", "complete"], D$1 = R("_globalUniCloudInterceptor");
  function M$1(e2, t2) {
    D$1[e2] || (D$1[e2] = {}), m(t2) && Object.keys(t2).forEach((n2) => {
      N.indexOf(n2) > -1 && function(e3, t3, n3) {
        let s2 = D$1[e3][t3];
        s2 || (s2 = D$1[e3][t3] = []), -1 === s2.indexOf(n3) && y(n3) && s2.push(n3);
      }(e2, n2, t2[n2]);
    });
  }
  function F(e2, t2) {
    D$1[e2] || (D$1[e2] = {}), m(t2) ? Object.keys(t2).forEach((n2) => {
      N.indexOf(n2) > -1 && function(e3, t3, n3) {
        const s2 = D$1[e3][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e2, n2, t2[n2]);
    }) : delete D$1[e2];
  }
  function q(e2, t2) {
    return e2 && 0 !== e2.length ? e2.reduce((e3, n2) => e3.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function K(e2, t2) {
    return D$1[e2] && D$1[e2][t2] || [];
  }
  function j(e2) {
    M$1("callObject", e2);
  }
  const B = R("_globalUniCloudListener"), $ = "response", H$1 = "needLogin", W$1 = "refreshToken", J = "failover", z = "clientdb", V = "cloudfunction", G = "cloudobject";
  function Q$1(e2) {
    return B[e2] || (B[e2] = []), B[e2];
  }
  function Y$1(e2, t2) {
    const n2 = Q$1(e2);
    n2.includes(t2) || n2.push(t2);
  }
  function X(e2, t2) {
    const n2 = Q$1(e2), s2 = n2.indexOf(t2);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function Z(e2, t2) {
    const n2 = Q$1(e2);
    for (let e3 = 0; e3 < n2.length; e3++) {
      (0, n2[e3])(t2);
    }
  }
  let ee, te = false;
  function ne() {
    return ee || (ee = new Promise((e2) => {
      te && e2(), function t2() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (te = true, e2());
        }
        te || setTimeout(() => {
          t2();
        }, 30);
      }();
    }), ee);
  }
  function se(e2) {
    const t2 = {};
    for (const n2 in e2) {
      const s2 = e2[n2];
      y(s2) && (t2[n2] = _(s2));
    }
    return t2;
  }
  class re extends Error {
    constructor(e2) {
      const t2 = e2.message || e2.errMsg || "unknown system error";
      super(t2), this.errMsg = t2, this.code = this.errCode = e2.code || e2.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e2.subject || e2.errSubject, this.cause = e2.cause, this.requestId = e2.requestId;
    }
    toJson(e2 = 0) {
      if (!(e2 >= 10))
        return e2++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e2) : this.cause };
    }
  }
  var ie = { request: (e2) => uni.request(e2), uploadFile: (e2) => uni.uploadFile(e2), setStorageSync: (e2, t2) => uni.setStorageSync(e2, t2), getStorageSync: (e2) => uni.getStorageSync(e2), removeStorageSync: (e2) => uni.removeStorageSync(e2), clearStorageSync: () => uni.clearStorageSync(), connectSocket: (e2) => uni.connectSocket(e2) };
  function oe(e2) {
    return e2 && oe(e2.__v_raw) || e2;
  }
  function ae() {
    return { token: ie.getStorageSync("uni_id_token") || ie.getStorageSync("uniIdToken"), tokenExpired: ie.getStorageSync("uni_id_token_expired") };
  }
  function ce({ token: e2, tokenExpired: t2 } = {}) {
    e2 && ie.setStorageSync("uni_id_token", e2), t2 && ie.setStorageSync("uni_id_token_expired", t2);
  }
  let ue, le;
  function de() {
    return ue || (ue = uni.getSystemInfoSync()), ue;
  }
  function he() {
    let e2, t2;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e2 = s2, t2 = n2;
      }
    } catch (e3) {
    }
    return { channel: e2, scene: t2 };
  }
  let pe = {};
  function fe() {
    const e2 = uni.getLocale && uni.getLocale() || "en";
    if (le)
      return { ...pe, ...le, locale: e2, LOCALE: e2 };
    const t2 = de(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t2, o2 = ["appId", "appLanguage", "appName", "appVersion", "appVersionCode", "appWgtVersion", "browserName", "browserVersion", "deviceBrand", "deviceId", "deviceModel", "deviceType", "osName", "osVersion", "romName", "romVersion", "ua", "hostName", "hostVersion", "uniPlatform", "uniRuntimeVersion", "uniRuntimeVersionCode", "uniCompilerVersion", "uniCompilerVersionCode"];
    for (const e3 in t2)
      Object.hasOwnProperty.call(t2, e3) && -1 === o2.indexOf(e3) && delete t2[e3];
    return le = { PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2, ...he(), ...t2 }, { ...pe, ...le, locale: e2, LOCALE: e2 };
  }
  var ge = { sign: function(e2, t2) {
    let n2 = "";
    return Object.keys(e2).sort().forEach(function(t3) {
      e2[t3] && (n2 = n2 + "&" + t3 + "=" + e2[t3]);
    }), n2 = n2.slice(1), i(n2, t2).toString();
  }, wrappedRequest: function(e2, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e2, { complete(e3) {
        e3 || (e3 = {});
        const t3 = e3.data && e3.data.header && e3.data.header["x-serverless-request-id"] || e3.header && e3.header["request-id"];
        if (!e3.statusCode || e3.statusCode >= 400) {
          const n3 = e3.data && e3.data.error && e3.data.error.code || "SYS_ERR", r3 = e3.data && e3.data.error && e3.data.error.message || e3.errMsg || "request:fail";
          return s2(new re({ code: n3, message: r3, requestId: t3 }));
        }
        const r2 = e3.data;
        if (r2.error)
          return s2(new re({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e2) {
    return c.stringify(o.parse(e2));
  } };
  var me = class {
    constructor(e2) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error("".concat(t2, " required"));
      }), this.config = Object.assign({}, { endpoint: 0 === e2.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com" }, e2), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ie, this._getAccessTokenPromiseHub = new I({ createPromise: () => this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e3) => {
        if (!e3.result || !e3.result.accessToken)
          throw new re({ code: "AUTH_FAILED", message: "获取accessToken失败" });
        this.setAccessToken(e3.result.accessToken);
      }), retryRule: v });
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e2) {
      this.accessToken = e2;
    }
    requestWrapped(e2) {
      return ge.wrappedRequest(e2, this.adapter.request);
    }
    requestAuth(e2) {
      return this.requestWrapped(e2);
    }
    request(e2, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e2) : this.requestWrapped(e2).catch((t3) => new Promise((e3, n2) => {
        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e3();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e2);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e2);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e2) {
      const t2 = Object.assign({}, e2);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = ge.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = ge.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
    async authorize() {
      await this.getAccessToken();
    }
    callFunction(e2) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request({ ...this.setupRequest(t2), timeout: e2.timeout });
    }
    getOSSUploadOptionsFromPath(e2) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new re({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          a2(new re({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e2) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    async uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", cloudPathAsRealPath: s2 = false, onUploadProgress: r2, config: i2 }) {
      if ("string" !== g(t2))
        throw new re({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new re({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new re({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const o2 = i2 && i2.envType || this.config.envType;
      if (s2 && ("/" !== t2[0] && (t2 = "/" + t2), t2.indexOf("\\") > -1))
        throw new re({ code: "INVALID_PARAM", message: "使用cloudPath作为路径时，cloudPath不可包含“\\”" });
      const a2 = (await this.getOSSUploadOptionsFromPath({ env: o2, filename: s2 ? t2.split("/").pop() : t2, fileId: s2 ? t2 : void 0 })).result, c2 = "https://" + a2.cdnDomain + "/" + a2.ossPath, { securityToken: u2, accessKeyId: l2, signature: d2, host: h2, ossPath: p2, id: f2, policy: m2, ossCallbackUrl: y2 } = a2, _2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: l2, Signature: d2, host: h2, id: f2, key: p2, policy: m2, success_action_status: 200 };
      if (u2 && (_2["x-oss-security-token"] = u2), y2) {
        const e3 = JSON.stringify({ callbackUrl: y2, callbackBody: JSON.stringify({ fileId: f2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
        _2.callback = ge.toBase64(e3);
      }
      const w2 = { url: "https://" + a2.host, formData: _2, fileName: "file", name: "file", filePath: e2, fileType: n2 };
      if (await this.uploadFileToOSS(Object.assign({}, w2, { onUploadProgress: r2 })), y2)
        return { success: true, filePath: e2, fileID: c2 };
      if ((await this.reportOSSUpload({ id: f2 })).success)
        return { success: true, filePath: e2, fileID: c2 };
      throw new re({ code: "UPLOAD_FAILED", message: "文件上传失败" });
    }
    getTempFileURL({ fileList: e2 } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e2) && 0 !== e2.length || n2(new re({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), this.getFileInfo({ fileList: e2 }).then((n3) => {
          t2({ fileList: e2.map((e3, t3) => {
            const s2 = n3.fileList[t3];
            return { fileID: e3, tempFileURL: s2 && s2.url || e3 };
          }) });
        });
      });
    }
    async getFileInfo({ fileList: e2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new re({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const t2 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e2.map((e3) => e3.split("?")[0]).join(",") }) };
      return { fileList: (await this.request(this.setupRequest(t2))).result };
    }
  };
  var ye = { init(e2) {
    const t2 = new me(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const _e = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var we;
  !function(e2) {
    e2.local = "local", e2.none = "none", e2.session = "session";
  }(we || (we = {}));
  var ve = function() {
  }, Ie = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [], c2 = [];
      !function() {
        function t4(t5) {
          for (var n4 = e3.sqrt(t5), s4 = 2; s4 <= n4; s4++)
            if (!(t5 % s4))
              return false;
          return true;
        }
        function n3(e4) {
          return 4294967296 * (e4 - (0 | e4)) | 0;
        }
        for (var s3 = 2, r3 = 0; r3 < 64; )
          t4(s3) && (r3 < 8 && (a2[r3] = n3(e3.pow(s3, 0.5))), c2[r3] = n3(e3.pow(s3, 1 / 3)), r3++), s3++;
      }();
      var u2 = [], l2 = o2.SHA256 = i2.extend({ _doReset: function() {
        this._hash = new r2.init(a2.slice(0));
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = this._hash.words, s3 = n3[0], r3 = n3[1], i3 = n3[2], o3 = n3[3], a3 = n3[4], l3 = n3[5], d2 = n3[6], h2 = n3[7], p2 = 0; p2 < 64; p2++) {
          if (p2 < 16)
            u2[p2] = 0 | e4[t4 + p2];
          else {
            var f2 = u2[p2 - 15], g2 = (f2 << 25 | f2 >>> 7) ^ (f2 << 14 | f2 >>> 18) ^ f2 >>> 3, m2 = u2[p2 - 2], y2 = (m2 << 15 | m2 >>> 17) ^ (m2 << 13 | m2 >>> 19) ^ m2 >>> 10;
            u2[p2] = g2 + u2[p2 - 7] + y2 + u2[p2 - 16];
          }
          var _2 = s3 & r3 ^ s3 & i3 ^ r3 & i3, w2 = (s3 << 30 | s3 >>> 2) ^ (s3 << 19 | s3 >>> 13) ^ (s3 << 10 | s3 >>> 22), v2 = h2 + ((a3 << 26 | a3 >>> 6) ^ (a3 << 21 | a3 >>> 11) ^ (a3 << 7 | a3 >>> 25)) + (a3 & l3 ^ ~a3 & d2) + c2[p2] + u2[p2];
          h2 = d2, d2 = l3, l3 = a3, a3 = o3 + v2 | 0, o3 = i3, i3 = r3, r3 = s3, s3 = v2 + (w2 + _2) | 0;
        }
        n3[0] = n3[0] + s3 | 0, n3[1] = n3[1] + r3 | 0, n3[2] = n3[2] + i3 | 0, n3[3] = n3[3] + o3 | 0, n3[4] = n3[4] + a3 | 0, n3[5] = n3[5] + l3 | 0, n3[6] = n3[6] + d2 | 0, n3[7] = n3[7] + h2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        return n3[r3 >>> 5] |= 128 << 24 - r3 % 32, n3[14 + (r3 + 64 >>> 9 << 4)] = e3.floor(s3 / 4294967296), n3[15 + (r3 + 64 >>> 9 << 4)] = s3, t4.sigBytes = 4 * n3.length, this._process(), this._hash;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      t3.SHA256 = i2._createHelper(l2), t3.HmacSHA256 = i2._createHmacHelper(l2);
    }(Math), n2.SHA256);
  }), Se = Ie, ke = n(function(e2, t2) {
    e2.exports = r.HmacSHA256;
  });
  const Ae = () => {
    let e2;
    if (!Promise) {
      e2 = () => {
      }, e2.promise = {};
      const t3 = () => {
        throw new re({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e2.promise, "then", { get: t3 }), Object.defineProperty(e2.promise, "catch", { get: t3 }), e2;
    }
    const t2 = new Promise((t3, n2) => {
      e2 = (e3, s2) => e3 ? n2(e3) : t3(s2);
    });
    return e2.promise = t2, e2;
  };
  function Ce(e2) {
    return void 0 === e2;
  }
  function Te(e2) {
    return "[object Null]" === Object.prototype.toString.call(e2);
  }
  function be(e2 = "") {
    return e2.replace(/([\s\S]+)\s+(请前往云开发AI小助手查看问题：.*)/, "$1");
  }
  function Pe(e2 = 32) {
    const t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n2 = t2.length;
    let s2 = "";
    for (let r2 = 0; r2 < e2; r2++)
      s2 += t2.charAt(Math.floor(Math.random() * n2));
    return s2;
  }
  var xe;
  function Oe(e2) {
    const t2 = (n2 = e2, "[object Array]" === Object.prototype.toString.call(n2) ? e2 : [e2]);
    var n2;
    for (const e3 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e3;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e2) {
    e2.WEB = "web", e2.WX_MP = "wx_mp";
  }(xe || (xe = {}));
  const Ee = { adapter: null, runtime: void 0 }, Le = ["anonymousUuidKey"];
  class Re extends ve {
    constructor() {
      super(), Ee.adapter.root.tcbObject || (Ee.adapter.root.tcbObject = {});
    }
    setItem(e2, t2) {
      Ee.adapter.root.tcbObject[e2] = t2;
    }
    getItem(e2) {
      return Ee.adapter.root.tcbObject[e2];
    }
    removeItem(e2) {
      delete Ee.adapter.root.tcbObject[e2];
    }
    clear() {
      delete Ee.adapter.root.tcbObject;
    }
  }
  function Ue(e2, t2) {
    switch (e2) {
      case "local":
        return t2.localStorage || new Re();
      case "none":
        return new Re();
      default:
        return t2.sessionStorage || new Re();
    }
  }
  class Ne {
    constructor(e2) {
      if (!this._storage) {
        this._persistence = Ee.adapter.primaryStorage || e2.persistence, this._storage = Ue(this._persistence, Ee.adapter);
        const t2 = "access_token_".concat(e2.env), n2 = "access_token_expire_".concat(e2.env), s2 = "refresh_token_".concat(e2.env), r2 = "anonymous_uuid_".concat(e2.env), i2 = "login_type_".concat(e2.env), o2 = "device_id", a2 = "token_type_".concat(e2.env), c2 = "user_info_".concat(e2.env);
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: c2, deviceIdKey: o2, tokenTypeKey: a2 };
      }
    }
    updatePersistence(e2) {
      if (e2 === this._persistence)
        return;
      const t2 = "local" === this._persistence;
      this._persistence = e2;
      const n2 = Ue(e2, Ee.adapter);
      for (const e3 in this.keys) {
        const s2 = this.keys[e3];
        if (t2 && Le.includes(e3))
          continue;
        const r2 = this._storage.getItem(s2);
        Ce(r2) || Te(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e2, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e2, r2);
      } catch (e3) {
        throw e3;
      }
    }
    getStore(e2, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e3) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e2);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e2) {
      this._storage.removeItem(e2);
    }
  }
  const De = {}, Me = {};
  function Fe(e2) {
    return De[e2];
  }
  class qe {
    constructor(e2, t2) {
      this.data = t2 || null, this.name = e2;
    }
  }
  class Ke extends qe {
    constructor(e2, t2) {
      super("error", { error: e2, data: t2 }), this.error = e2;
    }
  }
  const je = new class {
    constructor() {
      this._listeners = {};
    }
    on(e2, t2) {
      return function(e3, t3, n2) {
        n2[e3] = n2[e3] || [], n2[e3].push(t3);
      }(e2, t2, this._listeners), this;
    }
    off(e2, t2) {
      return function(e3, t3, n2) {
        if (n2 && n2[e3]) {
          const s2 = n2[e3].indexOf(t3);
          -1 !== s2 && n2[e3].splice(s2, 1);
        }
      }(e2, t2, this._listeners), this;
    }
    fire(e2, t2) {
      if (e2 instanceof Ke)
        return console.error(e2.error), this;
      const n2 = "string" == typeof e2 ? new qe(e2, t2 || {}) : e2;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e3 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e3)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e2) {
      return this._listeners[e2] && this._listeners[e2].length > 0;
    }
  }();
  function Be(e2, t2) {
    je.on(e2, t2);
  }
  function $e(e2, t2 = {}) {
    je.fire(e2, t2);
  }
  function He(e2, t2) {
    je.off(e2, t2);
  }
  const We = "loginStateChanged", Je = "loginStateExpire", ze = "loginTypeChanged", Ve = "anonymousConverted", Ge = "refreshAccessToken";
  var Qe;
  !function(e2) {
    e2.ANONYMOUS = "ANONYMOUS", e2.WECHAT = "WECHAT", e2.WECHAT_PUBLIC = "WECHAT-PUBLIC", e2.WECHAT_OPEN = "WECHAT-OPEN", e2.CUSTOM = "CUSTOM", e2.EMAIL = "EMAIL", e2.USERNAME = "USERNAME", e2.NULL = "NULL";
  }(Qe || (Qe = {}));
  class Ye {
    constructor() {
      this._fnPromiseMap = /* @__PURE__ */ new Map();
    }
    async run(e2, t2) {
      let n2 = this._fnPromiseMap.get(e2);
      return n2 || (n2 = new Promise(async (n3, s2) => {
        try {
          await this._runIdlePromise();
          const s3 = t2();
          n3(await s3);
        } catch (e3) {
          s2(e3);
        } finally {
          this._fnPromiseMap.delete(e2);
        }
      }), this._fnPromiseMap.set(e2, n2)), n2;
    }
    _runIdlePromise() {
      return Promise.resolve();
    }
  }
  class Xe {
    constructor(e2) {
      this._singlePromise = new Ye(), this._cache = Fe(e2.env), this._baseURL = "https://".concat(e2.env, ".ap-shanghai.tcb-api.tencentcloudapi.com"), this._reqClass = new Ee.adapter.reqClass({ timeout: e2.timeout, timeoutMsg: "请求在".concat(e2.timeout / 1e3, "s内未完成，已中断"), restrictedMethods: ["post"] });
    }
    _getDeviceId() {
      if (this._deviceID)
        return this._deviceID;
      const { deviceIdKey: e2 } = this._cache.keys;
      let t2 = this._cache.getStore(e2);
      return "string" == typeof t2 && t2.length >= 16 && t2.length <= 48 || (t2 = Pe(), this._cache.setStore(e2, t2)), this._deviceID = t2, t2;
    }
    async _request(e2, t2, n2 = {}) {
      const s2 = { "x-request-id": Pe(), "x-device-id": this._getDeviceId() };
      if (n2.withAccessToken) {
        const { tokenTypeKey: e3 } = this._cache.keys, t3 = await this.getAccessToken(), n3 = this._cache.getStore(e3);
        s2.authorization = "".concat(n3, " ").concat(t3);
      }
      return this._reqClass["get" === n2.method ? "get" : "post"]({ url: "".concat(this._baseURL).concat(e2), data: t2, headers: s2 });
    }
    async _fetchAccessToken() {
      const { loginTypeKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2, tokenTypeKey: s2 } = this._cache.keys, r2 = this._cache.getStore(e2);
      if (r2 && r2 !== Qe.ANONYMOUS)
        throw new re({ code: "INVALID_OPERATION", message: "非匿名登录不支持刷新 access token" });
      const i2 = await this._singlePromise.run("fetchAccessToken", async () => (await this._request("/auth/v1/signin/anonymously", {}, { method: "post" })).data), { access_token: o2, expires_in: a2, token_type: c2 } = i2;
      return this._cache.setStore(s2, c2), this._cache.setStore(t2, o2), this._cache.setStore(n2, Date.now() + 1e3 * a2), o2;
    }
    isAccessTokenExpired(e2, t2) {
      let n2 = true;
      return e2 && t2 && (n2 = t2 < Date.now()), n2;
    }
    async getAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2), s2 = this._cache.getStore(t2);
      return this.isAccessTokenExpired(n2, s2) ? this._fetchAccessToken() : n2;
    }
    async refreshAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, loginTypeKey: n2 } = this._cache.keys;
      return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.setStore(n2, Qe.ANONYMOUS), this.getAccessToken();
    }
    async getUserInfo() {
      return this._singlePromise.run("getUserInfo", async () => (await this._request("/auth/v1/user/me", {}, { withAccessToken: true, method: "get" })).data);
    }
  }
  const Ze = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], et = { "X-SDK-Version": "1.3.5" };
  function tt(e2, t2, n2) {
    const s2 = e2[t2];
    e2[t2] = function(t3) {
      const r2 = {}, i2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: o3 } = n3.call(e2, t3);
        Object.assign(r2, s3), Object.assign(i2, o3);
      });
      const o2 = t3.data;
      return o2 && (() => {
        var e3;
        if (e3 = o2, "[object FormData]" !== Object.prototype.toString.call(e3))
          t3.data = { ...o2, ...r2 };
        else
          for (const e4 in r2)
            o2.append(e4, r2[e4]);
      })(), t3.headers = { ...t3.headers || {}, ...i2 }, s2.call(e2, t3);
    };
  }
  function nt() {
    const e2 = Math.random().toString(16).slice(2);
    return { data: { seqId: e2 }, headers: { ...et, "x-seqid": e2 } };
  }
  class st {
    constructor(e2 = {}) {
      var t2;
      this.config = e2, this._reqClass = new Ee.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: "请求在".concat(this.config.timeout / 1e3, "s内未完成，已中断"), restrictedMethods: ["post"] }), this._cache = Fe(this.config.env), this._localCache = (t2 = this.config.env, Me[t2]), this.oauth = new Xe(this.config), tt(this._reqClass, "post", [nt]), tt(this._reqClass, "upload", [nt]), tt(this._reqClass, "download", [nt]);
    }
    async post(e2) {
      return await this._reqClass.post(e2);
    }
    async upload(e2) {
      return await this._reqClass.upload(e2);
    }
    async download(e2) {
      return await this._reqClass.download(e2);
    }
    async refreshAccessToken() {
      let e2, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e2 = await this._refreshAccessTokenPromise;
      } catch (e3) {
        t2 = e3;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e2;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
      this._cache.removeStore(e2), this._cache.removeStore(t2);
      let i2 = this._cache.getStore(n2);
      if (!i2)
        throw new re({ message: "未登录CloudBase" });
      const o2 = { refresh_token: i2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", o2);
      if (a2.data.code) {
        const { code: e3 } = a2.data;
        if ("SIGN_PARAM_INVALID" === e3 || "REFRESH_TOKEN_EXPIRED" === e3 || "INVALID_REFRESH_TOKEN" === e3) {
          if (this._cache.getStore(s2) === Qe.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e3) {
            const e4 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e4, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          $e(Je), this._cache.removeStore(n2);
        }
        throw new re({ code: a2.data.code, message: "刷新access token失败：".concat(a2.data.code) });
      }
      if (a2.data.access_token)
        return $e(Ge), this._cache.setStore(e2, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new re({ message: "refresh token不存在，登录状态异常" });
      let s2 = this._cache.getStore(e2), r2 = this._cache.getStore(t2), i2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, r2) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
    }
    async request(e2, t2, n2) {
      const s2 = "x-tcb-trace_".concat(this.config.env);
      let r2 = "application/x-www-form-urlencoded";
      const i2 = { action: e2, env: this.config.env, dataVersion: "2019-08-16", ...t2 };
      let o2;
      if (-1 === Ze.indexOf(e2) && (this._cache.keys, i2.access_token = await this.oauth.getAccessToken()), "storage.uploadFile" === e2) {
        o2 = new FormData();
        for (let e3 in o2)
          o2.hasOwnProperty(e3) && void 0 !== o2[e3] && o2.append(e3, i2[e3]);
        r2 = "multipart/form-data";
      } else {
        r2 = "application/json", o2 = {};
        for (let e3 in i2)
          void 0 !== i2[e3] && (o2[e3] = i2[e3]);
      }
      let a2 = { headers: { "content-type": r2 } };
      n2 && n2.timeout && (a2.timeout = n2.timeout), n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: l2, search: d2 } = t2;
      let h2 = { env: this.config.env };
      u2 && (h2.parse = true), l2 && (h2 = { ...l2, ...h2 });
      let p2 = function(e3, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let r3 = "";
        for (let e4 in n3)
          "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += "".concat(e4, "=").concat(encodeURIComponent(n3[e4]));
        return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : "".concat(e3).concat(t3);
      }(_e, "//tcb-api.tencentcloudapi.com/web", h2);
      d2 && (p2 += d2);
      const f2 = await this.post({ url: p2, data: o2, ...a2 }), g2 = f2.header && f2.header["x-tcb-trace"];
      if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)
        throw new re({ code: "NETWORK_ERROR", message: "network request error" });
      return f2;
    }
    async send(e2, t2 = {}, n2 = {}) {
      const s2 = await this.request(e2, t2, { ...n2, onUploadProgress: t2.onUploadProgress });
      if (("ACCESS_TOKEN_DISABLED" === s2.data.code || "ACCESS_TOKEN_EXPIRED" === s2.data.code) && -1 === Ze.indexOf(e2)) {
        await this.oauth.refreshAccessToken();
        const s3 = await this.request(e2, t2, { ...n2, onUploadProgress: t2.onUploadProgress });
        if (s3.data.code)
          throw new re({ code: s3.data.code, message: be(s3.data.message) });
        return s3.data;
      }
      if (s2.data.code)
        throw new re({ code: s2.data.code, message: be(s2.data.message) });
      return s2.data;
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
  }
  const rt = {};
  function it(e2) {
    return rt[e2];
  }
  class ot {
    constructor(e2) {
      this.config = e2, this._cache = Fe(e2.env), this._request = it(e2.env);
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
    setAccessToken(e2, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e2), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e2 } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e2), e2;
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2);
    }
  }
  class at {
    constructor(e2) {
      if (!e2)
        throw new re({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e2, this._cache = Fe(this._envId), this._request = it(this._envId), this.setUserInfo();
    }
    linkWithTicket(e2) {
      if ("string" != typeof e2)
        throw new re({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e2 });
    }
    linkWithRedirect(e2) {
      e2.signInWithRedirect();
    }
    updatePassword(e2, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e2 });
    }
    updateEmail(e2) {
      return this._request.send("auth.updateEmail", { newEmail: e2 });
    }
    updateUsername(e2) {
      if ("string" != typeof e2)
        throw new re({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e2 });
    }
    async getLinkedUidList() {
      const { data: e2 } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e2;
      return n2.forEach((e3) => {
        e3.wxOpenId && e3.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e2) {
      return this._request.send("auth.setPrimaryUid", { uid: e2 });
    }
    unlink(e2) {
      return this._request.send("auth.unlink", { platform: e2 });
    }
    async update(e2) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e2, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const e2 = await this._request.oauth.getUserInfo();
      return this.setLocalUserInfo(e2), e2;
    }
    setUserInfo() {
      const { userInfoKey: e2 } = this._cache.keys, t2 = this._cache.getStore(e2);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e3) => {
        this[e3] = t2[e3];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2), this.setUserInfo();
    }
  }
  class ct {
    constructor(e2) {
      if (!e2)
        throw new re({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = Fe(e2);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new at(e2);
    }
    get isAnonymousAuth() {
      return this.loginType === Qe.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === Qe.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === Qe.WECHAT || this.loginType === Qe.WECHAT_OPEN || this.loginType === Qe.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class ut extends ot {
    async signIn() {
      this._cache.updatePersistence("local"), await this._request.oauth.getAccessToken(), $e(We), $e(ze, { env: this.config.env, loginType: Qe.ANONYMOUS, persistence: "local" });
      const e2 = new ct(this.config.env);
      return await e2.user.refresh(), e2;
    }
    async linkAndRetrieveDataWithTicket(e2) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e2 });
      if (i2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), await this._request.refreshAccessToken(), $e(Ve, { env: this.config.env }), $e(ze, { loginType: Qe.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
      throw new re({ message: "匿名转化失败" });
    }
    _setAnonymousUUID(e2) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e2), this._cache.setStore(n2, Qe.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class lt extends ot {
    async signIn(e2) {
      if ("string" != typeof e2)
        throw new re({ code: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e2, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), $e(We), $e(ze, { env: this.config.env, loginType: Qe.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new ct(this.config.env);
      throw new re({ message: "自定义登录失败" });
    }
  }
  class dt extends ot {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new re({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), $e(We), $e(ze, { env: this.config.env, loginType: Qe.EMAIL, persistence: this.config.persistence }), new ct(this.config.env);
      throw s2.code ? new re({ code: s2.code, message: "邮箱登录失败: ".concat(s2.message) }) : new re({ message: "邮箱登录失败" });
    }
    async activate(e2) {
      return this._request.send("auth.activateEndUserMail", { token: e2 });
    }
    async resetPasswordWithToken(e2, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e2, newPassword: t2 });
    }
  }
  class ht extends ot {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new re({ code: "PARAM_ERROR", message: "username must be a string" });
      "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: Qe.USERNAME, username: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), $e(We), $e(ze, { env: this.config.env, loginType: Qe.USERNAME, persistence: this.config.persistence }), new ct(this.config.env);
      throw s2.code ? new re({ code: s2.code, message: "用户名密码登录失败: ".concat(s2.message) }) : new re({ message: "用户名密码登录失败" });
    }
  }
  class pt {
    constructor(e2) {
      this.config = e2, this._cache = Fe(e2.env), this._request = it(e2.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Be(ze, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e2 = this.hasLoginState();
      return e2 && e2.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new ut(this.config);
    }
    customAuthProvider() {
      return new lt(this.config);
    }
    emailAuthProvider() {
      return new dt(this.config);
    }
    usernameAuthProvider() {
      return new ht(this.config);
    }
    async signInAnonymously() {
      return new ut(this.config).signIn();
    }
    async signInWithEmailAndPassword(e2, t2) {
      return new dt(this.config).signIn(e2, t2);
    }
    signInWithUsernameAndPassword(e2, t2) {
      return new ht(this.config).signIn(e2, t2);
    }
    async linkAndRetrieveDataWithTicket(e2) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new ut(this.config)), Be(Ve, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e2);
    }
    async signOut() {
      if (this.loginType === Qe.ANONYMOUS)
        throw new re({ message: "匿名用户不支持登出操作" });
      const { refreshTokenKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e2);
      if (!s2)
        return;
      const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.removeStore(n2), $e(We), $e(ze, { env: this.config.env, loginType: Qe.NULL, persistence: this.config.persistence }), r2;
    }
    async signUpWithEmailAndPassword(e2, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e2, password: t2 });
    }
    async sendPasswordResetEmail(e2) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e2 });
    }
    onLoginStateChanged(e2) {
      Be(We, () => {
        const t3 = this.hasLoginState();
        e2.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e2.call(this, t2);
    }
    onLoginStateExpired(e2) {
      Be(Je, e2.bind(this));
    }
    onAccessTokenRefreshed(e2) {
      Be(Ge, e2.bind(this));
    }
    onAnonymousConverted(e2) {
      Be(Ve, e2.bind(this));
    }
    onLoginTypeChanged(e2) {
      Be(ze, () => {
        const t2 = this.hasLoginState();
        e2.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2), s2 = this._cache.getStore(t2);
      return this._request.oauth.isAccessTokenExpired(n2, s2) ? null : new ct(this.config.env);
    }
    async isUsernameRegistered(e2) {
      if ("string" != typeof e2)
        throw new re({ code: "PARAM_ERROR", message: "username must be a string" });
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e2 });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e2) {
      return new lt(this.config).signIn(e2);
    }
    shouldRefreshAccessToken(e2) {
      this._request._shouldRefreshAccessTokenHook = e2.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e2) => e2.code ? e2 : { ...e2.data, requestId: e2.seqId });
    }
    getAuthHeader() {
      const { refreshTokenKey: e2, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e2) {
      const { env: t2 } = e2.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e2) {
      const { loginType: t2, persistence: n2, env: s2 } = e2.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const ft = function(e2, t2) {
    t2 = t2 || Ae();
    const n2 = it(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: l2, cosFileId: d2 }, requestId: h2 } = e3, p2 = { key: s2, signature: c2, "x-cos-meta-fileid": d2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: p2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e4) => {
        201 === e4.statusCode ? t2(null, { fileID: l2, requestId: h2 }) : t2(new re({ code: "STORAGE_REQUEST_FAIL", message: "STORAGE_REQUEST_FAIL: ".concat(e4.data) }));
      }).catch((e4) => {
        t2(e4);
      });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, gt = function(e2, t2) {
    t2 = t2 || Ae();
    const n2 = it(this.config.env), { cloudPath: s2 } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      t2(null, e3);
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, mt = function({ fileList: e2 }, t2) {
    if (t2 = t2 || Ae(), !e2 || !Array.isArray(e2))
      return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };
    for (let t3 of e2)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };
    const n2 = { fileid_list: e2 };
    return it(this.config.env).send("storage.batchDeleteFile", n2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.delete_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, yt = function({ fileList: e2 }, t2) {
    t2 = t2 || Ae(), e2 && Array.isArray(e2) || t2(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });
    let n2 = [];
    for (let s3 of e2)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });
    const s2 = { file_list: n2 };
    return it(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.download_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, _t = async function({ fileID: e2 }, t2) {
    const n2 = (await yt.call(this, { fileList: [{ fileID: e2, maxAge: 600 }] })).fileList[0];
    if ("SUCCESS" !== n2.code)
      return t2 ? t2(n2) : new Promise((e3) => {
        e3(n2);
      });
    const s2 = it(this.config.env);
    let r2 = n2.download_url;
    if (r2 = encodeURI(r2), !t2)
      return s2.download({ url: r2 });
    t2(await s2.download({ url: r2 }));
  }, wt = function({ name: e2, data: t2, query: n2, parse: s2, search: r2, timeout: i2 }, o2) {
    const a2 = o2 || Ae();
    let c2;
    try {
      c2 = t2 ? JSON.stringify(t2) : "";
    } catch (e3) {
      return Promise.reject(e3);
    }
    if (!e2)
      return Promise.reject(new re({ code: "PARAM_ERROR", message: "函数名不能为空" }));
    const u2 = { inQuery: n2, parse: s2, search: r2, function_name: e2, request_data: c2 };
    return it(this.config.env).send("functions.invokeFunction", u2, { timeout: i2 }).then((e3) => {
      if (e3.code)
        a2(null, e3);
      else {
        let t3 = e3.data.response_data;
        if (s2)
          a2(null, { result: t3, requestId: e3.requestId });
        else
          try {
            t3 = JSON.parse(e3.data.response_data), a2(null, { result: t3, requestId: e3.requestId });
          } catch (e4) {
            a2(new re({ message: "response data must be json" }));
          }
      }
      return a2.promise;
    }).catch((e3) => {
      a2(e3);
    }), a2.promise;
  }, vt = { timeout: 15e3, persistence: "session" }, It = {};
  class St {
    constructor(e2) {
      this.config = e2 || this.config, this.authObj = void 0;
    }
    init(e2) {
      switch (Ee.adapter || (this.requestClient = new Ee.adapter.reqClass({ timeout: e2.timeout || 5e3, timeoutMsg: "请求在".concat((e2.timeout || 5e3) / 1e3, "s内未完成，已中断") })), this.config = { ...vt, ...e2 }, true) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new St(this.config);
    }
    auth({ persistence: e2 } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e2 || Ee.adapter.primaryStorage || vt.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e3) {
        const { env: t3 } = e3;
        De[t3] = new Ne(e3), Me[t3] = new Ne({ ...e3, persistence: "local" });
      }(this.config), n2 = this.config, rt[n2.env] = new st(n2), this.authObj = new pt(this.config), this.authObj;
    }
    on(e2, t2) {
      return Be.apply(this, [e2, t2]);
    }
    off(e2, t2) {
      return He.apply(this, [e2, t2]);
    }
    callFunction(e2, t2) {
      return wt.apply(this, [e2, t2]);
    }
    deleteFile(e2, t2) {
      return mt.apply(this, [e2, t2]);
    }
    getTempFileURL(e2, t2) {
      return yt.apply(this, [e2, t2]);
    }
    downloadFile(e2, t2) {
      return _t.apply(this, [e2, t2]);
    }
    uploadFile(e2, t2) {
      return ft.apply(this, [e2, t2]);
    }
    getUploadMetadata(e2, t2) {
      return gt.apply(this, [e2, t2]);
    }
    registerExtension(e2) {
      It[e2.name] = e2;
    }
    async invokeExtension(e2, t2) {
      const n2 = It[e2];
      if (!n2)
        throw new re({ message: "扩展".concat(e2, " 必须先注册") });
      return await n2.invoke(t2, this);
    }
    useAdapters(e2) {
      const { adapter: t2, runtime: n2 } = Oe(e2) || {};
      t2 && (Ee.adapter = t2), n2 && (Ee.runtime = n2);
    }
  }
  var kt = new St();
  function At(e2, t2, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e2 + t2;
  }
  class Ct {
    get(e2) {
      const { url: t2, data: n2, headers: s2, timeout: r2 } = e2;
      return new Promise((e3, i2) => {
        ie.request({ url: At("https:", t2), data: n2, method: "GET", header: s2, timeout: r2, success(t3) {
          e3(t3);
        }, fail(e4) {
          i2(e4);
        } });
      });
    }
    post(e2) {
      const { url: t2, data: n2, headers: s2, timeout: r2 } = e2;
      return new Promise((e3, i2) => {
        ie.request({ url: At("https:", t2), data: n2, method: "POST", header: s2, timeout: r2, success(t3) {
          e3(t3);
        }, fail(e4) {
          i2(e4);
        } });
      });
    }
    upload(e2) {
      return new Promise((t2, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e2, c2 = ie.uploadFile({ url: At("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e3) {
          const n3 = { statusCode: e3.statusCode, data: e3.data || {} };
          200 === e3.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t2(n3);
        }, fail(e3) {
          n2(new Error(e3.errMsg || "uploadFile:fail"));
        } });
        "function" == typeof e2.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
          e2.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const Tt = { setItem(e2, t2) {
    ie.setStorageSync(e2, t2);
  }, getItem: (e2) => ie.getStorageSync(e2), removeItem(e2) {
    ie.removeStorageSync(e2);
  }, clear() {
    ie.clearStorageSync();
  } };
  var bt = { genAdapter: function() {
    return { root: {}, reqClass: Ct, localStorage: Tt, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  kt.useAdapters(bt);
  const Pt = kt, xt = Pt.init;
  Pt.init = function(e2) {
    e2.env = e2.spaceId;
    const t2 = xt.call(this, e2);
    t2.config.provider = "tencent", t2.config.spaceId = e2.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e3) {
      const t3 = n2.call(this, e3);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e4) => {
        var n3;
        t3[e4] = (n3 = t3[e4], function(e5) {
          e5 = e5 || {};
          const { success: t4, fail: s2, complete: r2 } = se(e5);
          if (!(t4 || s2 || r2))
            return n3.call(this, e5);
          n3.call(this, e5).then((e6) => {
            t4 && t4(e6), r2 && r2(e6);
          }, (e6) => {
            s2 && s2(e6), r2 && r2(e6);
          });
        }).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var Ot = Pt;
  async function Et(e2, t2) {
    const n2 = "http://".concat(e2, ":").concat(t2, "/system/ping");
    try {
      const e3 = await (s2 = { url: n2, timeout: 500 }, new Promise((e4, t3) => {
        ie.request({ ...s2, success(t4) {
          e4(t4);
        }, fail(e5) {
          t3(e5);
        } });
      }));
      return !(!e3.data || 0 !== e3.data.code);
    } catch (e3) {
      return false;
    }
    var s2;
  }
  async function Lt(e2, t2) {
    let n2;
    for (let s2 = 0; s2 < e2.length; s2++) {
      const r2 = e2[s2];
      if (await Et(r2, t2)) {
        n2 = r2;
        break;
      }
    }
    return { address: n2, port: t2 };
  }
  const Rt = { "serverless.file.resource.generateProximalSign": "storage/generate-proximal-sign", "serverless.file.resource.report": "storage/report", "serverless.file.resource.delete": "storage/delete", "serverless.file.resource.getTempFileURL": "storage/get-temp-file-url", "system/check-storage": "system/check-storage" };
  var Ut = class {
    constructor(e2) {
      if (["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error("".concat(t2, " required"));
      }), !e2.endpoint)
        throw new Error("集群空间未配置ApiEndpoint，配置后需要重新关联服务空间后生效");
      this.config = Object.assign({}, e2), this.config.provider = "dcloud", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.adapter = ie;
    }
    async request(e2, t2 = true) {
      return Promise.resolve().then(() => ge.wrappedRequest(this.setupRequest(e2), this.adapter.request));
    }
    async requestLocal(e2) {
      const t2 = await this.setupLocalRequest({ method: "system/check-storage", platform: T, provider: this.config.provider, spaceId: this.config.spaceId });
      return new Promise((e3) => {
        this.adapter.request(Object.assign({}, t2, { success: (t3) => {
          e3(t3);
        }, fail: () => {
          e3({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });
        } }));
      }).then(({ data: e3 } = {}) => {
        const { code: t3, message: n2 } = e3 || {};
        return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n2 || "SYS_ERR" };
      }).then(({ code: t3, message: n2 }) => 0 !== t3 ? (console.error(t3, n2), ge.wrappedRequest(this.setupRequest(e2), this.adapter.request)) : new Promise((t4, n3) => {
        this.setupLocalRequest(e2).then((e3) => {
          this.adapter.request(Object.assign(e3, { complete(e4) {
            if (e4 || (e4 = {}), !e4.statusCode || e4.statusCode >= 400) {
              const t5 = e4.data && e4.data.code || "SYS_ERR", s3 = e4.data && e4.data.message || "request:fail";
              return n3(new re({ code: t5, message: s3 }));
            }
            const s2 = e4.data;
            if (s2.error)
              return n3(new re({ code: s2.error.code, message: s2.error.message }));
            t4({ success: true, result: s2 });
          } }));
        });
      }));
    }
    setupRequest(e2) {
      const t2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), n2 = { "Content-Type": "application/json" };
      n2["x-serverless-sign"] = ge.sign(t2, this.config.clientSecret);
      const s2 = fe();
      n2["x-client-info"] = encodeURIComponent(JSON.stringify(s2));
      const { token: r2 } = ae();
      return n2["x-client-token"] = r2, { url: this.config.requestUrl, method: "POST", data: t2, dataType: "json", header: JSON.parse(JSON.stringify(n2)) };
    }
    async setupLocalRequest(e2) {
      const t2 = fe(), { token: n2 } = ae(), s2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now(), clientInfo: t2, token: n2 }), { address: r2, servePort: i2 } = this.__dev__ && this.__dev__.debugInfo || {}, { address: o2 } = await Lt(r2, i2);
      return { url: "http://".concat(o2, ":").concat(i2, "/").concat(Rt[e2.method]), method: "POST", data: s2, dataType: "json", header: JSON.parse(JSON.stringify({ "Content-Type": "application/json" })) };
    }
    callFunction(e2) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request(t2, false);
    }
    getUploadFileOptions(e2) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(t2);
    }
    reportUploadFile(e2) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(t2);
    }
    uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new re({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });
      let r2;
      return this.getUploadFileOptions({ cloudPath: t2 }).then((t3) => {
        const { url: i2, formData: o2, name: a2 } = t3.result;
        return r2 = t3.result.fileUrl, new Promise((t4, r3) => {
          const c2 = this.adapter.uploadFile({ url: i2, formData: o2, name: a2, filePath: e2, fileType: n2, success(e3) {
            e3 && e3.statusCode < 400 ? t4(e3) : r3(new re({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
          }, fail(e3) {
            r3(new re({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
          } });
          "function" == typeof s2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
            s2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
          });
        });
      }).then(() => this.reportUploadFile({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e2, fileID: r2 }) : s3(new re({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
      }));
    }
    deleteFile({ fileList: e2 }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e2 }) };
      return this.request(t2).then((e3) => {
        if (e3.success)
          return e3.result;
        throw new re({ code: "DELETE_FILE_FAILED", message: "删除文件失败" });
      });
    }
    getTempFileURL({ fileList: e2, maxAge: t2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new re({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const n2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e2, maxAge: t2 }) };
      return this.request(n2).then((e3) => {
        if (e3.success)
          return { fileList: e3.result.fileList.map((e4) => ({ fileID: e4.fileID, tempFileURL: e4.tempFileURL })) };
        throw new re({ code: "GET_TEMP_FILE_URL_FAILED", message: "获取临时文件链接失败" });
      });
    }
  };
  var Nt = { init(e2) {
    const t2 = new Ut(e2), n2 = { signInAnonymously: function() {
      return Promise.resolve();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } }, Dt = n(function(e2, t2) {
    e2.exports = r.enc.Hex;
  });
  function Mt() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e2) {
      var t2 = 16 * Math.random() | 0;
      return ("x" === e2 ? t2 : 3 & t2 | 8).toString(16);
    });
  }
  function Ft(e2) {
    return "".concat(e2, ".api-hz.cloudbasefunction.cn");
  }
  function qt(e2 = "", t2 = {}) {
    const { data: n2, functionName: s2, method: r2, headers: i2, signHeaderKeys: o2 = [], endpoint: a2, config: c2 } = t2, u2 = String(Date.now()), l2 = Mt(), d2 = Object.assign({}, i2, { "x-from-app-id": c2.spaceAppId, "x-from-env-id": c2.spaceId, "x-to-env-id": c2.spaceId, "x-from-instance-id": u2, "x-from-function-name": s2, "x-client-timestamp": u2, "x-alipay-source": "client", "x-request-id": l2, "x-alipay-callid": l2, "x-trace-id": l2 }), h2 = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o2), [p2 = "", f2 = ""] = e2.split("?") || [], g2 = function(e3) {
      const t3 = e3.signedHeaders.join(";"), n3 = e3.signedHeaders.map((t4) => "".concat(t4.toLowerCase(), ":").concat(e3.headers[t4], "\n")).join(""), s3 = Se(e3.body).toString(Dt), r3 = "".concat(e3.method.toUpperCase(), "\n").concat(e3.path, "\n").concat(e3.query, "\n").concat(n3, "\n").concat(t3, "\n").concat(s3, "\n"), i3 = Se(r3).toString(Dt), o3 = "HMAC-SHA256\n".concat(e3.timestamp, "\n").concat(i3, "\n"), a3 = ke(o3, e3.secretKey).toString(Dt);
      return "HMAC-SHA256 Credential=".concat(e3.secretId, ", SignedHeaders=").concat(t3, ", Signature=").concat(a3);
    }({ path: p2, query: f2, method: r2, headers: d2, timestamp: u2, body: JSON.stringify(n2), secretId: c2.accessKey, secretKey: c2.secretKey, signedHeaders: h2.sort() });
    return { url: "".concat(a2 || c2.endpoint).concat(e2), headers: Object.assign({}, d2, { Authorization: g2 }) };
  }
  function Kt({ url: e2, data: t2, method: n2 = "POST", headers: s2 = {}, timeout: r2 }) {
    return new Promise((i2, o2) => {
      ie.request({ url: e2, method: n2, data: "object" == typeof t2 ? JSON.stringify(t2) : t2, header: s2, dataType: "json", timeout: r2, complete: (e3 = {}) => {
        const t3 = s2["x-trace-id"] || "";
        if (!e3.statusCode || e3.statusCode >= 400) {
          const { message: n3, errMsg: s3, trace_id: r3 } = e3.data || {};
          return o2(new re({ code: "SYS_ERR", message: n3 || s3 || "request:fail", requestId: r3 || t3 }));
        }
        i2({ status: e3.statusCode, data: e3.data, headers: e3.header, requestId: t3 });
      } });
    });
  }
  function jt(e2, t2) {
    const { path: n2, data: s2, method: r2 = "GET" } = e2, { url: i2, headers: o2 } = qt(n2, { functionName: "", data: s2, method: r2, headers: { "x-alipay-cloud-mode": "oss", "x-data-api-type": "oss", "x-expire-timestamp": String(Date.now() + 6e4) }, signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"], config: t2, endpoint: "https://".concat(Ft(t2.spaceId)) });
    return Kt({ url: i2, data: s2, method: r2, headers: o2 }).then((e3) => {
      const t3 = e3.data || {};
      if (!t3.success)
        throw new re({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
      return t3.data || {};
    }).catch((e3) => {
      throw new re({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
    });
  }
  function Bt(e2 = "") {
    const t2 = e2.trim().replace(/^cloud:\/\//, ""), n2 = t2.indexOf("/");
    if (n2 <= 0)
      throw new re({ code: "INVALID_PARAM", message: "fileID不合法" });
    const s2 = t2.substring(0, n2), r2 = t2.substring(n2 + 1);
    return s2 !== this.config.spaceId && console.warn("file ".concat(e2, " does not belong to env ").concat(this.config.spaceId)), r2;
  }
  function $t(e2 = "") {
    return "cloud://".concat(this.config.spaceId, "/").concat(e2.replace(/^\/+/, ""));
  }
  class Ht {
    constructor(e2) {
      this.config = e2;
    }
    signedURL(e2, t2 = {}) {
      const n2 = "/ws/function/".concat(e2), s2 = this.config.wsEndpoint.replace(/^ws(s)?:\/\//, ""), r2 = Object.assign({}, t2, { accessKeyId: this.config.accessKey, signatureNonce: Mt(), timestamp: "" + Date.now() }), i2 = [n2, ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map(function(e3) {
        return r2[e3] ? "".concat(e3, "=").concat(r2[e3]) : null;
      }).filter(Boolean).join("&"), "host:".concat(s2)].join("\n"), o2 = ["HMAC-SHA256", Se(i2).toString(Dt)].join("\n"), a2 = ke(o2, this.config.secretKey).toString(Dt), c2 = Object.keys(r2).map((e3) => "".concat(e3, "=").concat(encodeURIComponent(r2[e3]))).join("&");
      return "".concat(this.config.wsEndpoint).concat(n2, "?").concat(c2, "&signature=").concat(a2);
    }
  }
  class Wt {
    constructor(e2) {
      this.config = e2;
    }
    signedURL(e2, t2 = {}) {
      const n2 = "/ws/sse/function/".concat(e2), s2 = this.config.endpoint.replace(/^http(s)?:\/\//, ""), r2 = Object.assign({}, t2, { accessKeyId: this.config.accessKey, signatureNonce: Mt(), timestamp: "" + Date.now() }), i2 = ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map(function(e3) {
        return r2[e3] ? "".concat(e3, "=").concat(r2[e3]) : null;
      }).filter(Boolean).join("&"), o2 = [n2.replace("/ws", ""), i2, "host:".concat(s2)].join("\n"), a2 = ["HMAC-SHA256", Se(o2).toString(Dt)].join("\n"), c2 = ke(a2, this.config.secretKey).toString(Dt), u2 = Object.keys(r2).map((e3) => "".concat(e3, "=").concat(encodeURIComponent(r2[e3]))).join("&");
      return "".concat(this.config.endpoint).concat(n2, "?").concat(u2, "&signature=").concat(c2);
    }
  }
  var Jt = class {
    constructor(e2) {
      if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error("".concat(t2, " required"));
      }), e2.endpoint) {
        if ("string" != typeof e2.endpoint)
          throw new Error("endpoint must be string");
        if (!/^https:\/\//.test(e2.endpoint))
          throw new Error("endpoint must start with https://");
        e2.endpoint = e2.endpoint.replace(/\/$/, "");
      }
      this.config = Object.assign({}, e2, { endpoint: e2.endpoint || "https://".concat(Ft(e2.spaceId)), wsEndpoint: e2.wsEndpoint || "wss://".concat(Ft(e2.spaceId)) }), this._websocket = new Ht(this.config), this._sse = new Wt(this.config);
    }
    callFunction(e2) {
      return function(e3, t2) {
        const { name: n2, data: s2, async: r2 = false, timeout: i2 } = e3, o2 = "POST", a2 = { "x-to-function-name": n2 };
        r2 && (a2["x-function-invoke-type"] = "async");
        const { url: c2, headers: u2 } = qt("/functions/invokeFunction", { functionName: n2, data: s2, method: o2, headers: a2, signHeaderKeys: ["x-to-function-name"], config: t2 });
        return Kt({ url: c2, data: s2, method: o2, headers: u2, timeout: i2 }).then((e4) => {
          let t3 = 0;
          if (r2) {
            const n3 = e4.data || {};
            t3 = "200" === n3.errCode ? 0 : n3.errCode, e4.data = n3.data || {}, e4.errMsg = n3.errMsg;
          }
          if (0 !== t3)
            throw new re({ code: t3, message: e4.errMsg, requestId: e4.requestId });
          return { errCode: t3, success: 0 === t3, requestId: e4.requestId, result: e4.data };
        }).catch((e4) => {
          throw new re({ code: e4.errCode, message: e4.errMsg, requestId: e4.requestId });
        });
      }(e2, this.config);
    }
    uploadFileToOSS({ url: e2, filePath: t2, fileType: n2, formData: s2, onUploadProgress: r2 }) {
      return new Promise((i2, o2) => {
        const a2 = ie.uploadFile({ url: e2, filePath: t2, fileType: n2, formData: s2, name: "file", success(e3) {
          e3 && e3.statusCode < 400 ? i2(e3) : o2(new re({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          o2(new re({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof r2 && a2 && "function" == typeof a2.onProgressUpdate && a2.onProgressUpdate((e3) => {
          r2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    async uploadFile({ filePath: e2, cloudPath: t2 = "", fileType: n2 = "image", onUploadProgress: s2 }) {
      if ("string" !== g(t2))
        throw new re({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new re({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new re({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const r2 = await jt({ path: "/".concat(t2.replace(/^\//, ""), "?post_url") }, this.config), { file_id: i2, upload_url: o2, form_data: a2 } = r2, c2 = a2 && a2.reduce((e3, t3) => (e3[t3.key] = t3.value, e3), {});
      return this.uploadFileToOSS({ url: o2, filePath: e2, fileType: n2, formData: c2, onUploadProgress: s2 }).then(() => ({ fileID: i2 }));
    }
    async getTempFileURL({ fileList: e2 }) {
      return new Promise((t2, n2) => {
        (!e2 || e2.length < 0) && t2({ code: "INVALID_PARAM", message: "fileList不能为空数组" }), e2.length > 50 && t2({ code: "INVALID_PARAM", message: "fileList数组长度不能超过50" });
        const s2 = [];
        for (const n3 of e2) {
          let e3;
          "string" !== g(n3) && t2({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
          try {
            e3 = Bt.call(this, n3);
          } catch (t3) {
            console.warn(t3.errCode, t3.errMsg), e3 = n3;
          }
          s2.push({ file_id: e3, expire: 600 });
        }
        jt({ path: "/?download_url", data: { file_list: s2 }, method: "POST" }, this.config).then((e3) => {
          const { file_list: n3 = [] } = e3;
          t2({ fileList: n3.map((e4) => ({ fileID: $t.call(this, e4.file_id), tempFileURL: e4.download_url })) });
        }).catch((e3) => n2(e3));
      });
    }
    async connectWebSocket(e2) {
      const { name: t2, query: n2 } = e2;
      return ie.connectSocket({ url: this._websocket.signedURL(t2, n2), complete: () => {
      } });
    }
    requestSSE(e2) {
      const { name: t2, data: n2 } = e2;
      return ie.request({ method: "POST", url: this._sse.signedURL(t2), data: n2, header: { "content-type": "application/json" }, dataType: "json" });
    }
  };
  var zt = { init: (e2) => {
    e2.provider = "alipay";
    const t2 = new Jt(e2);
    return t2.auth = function() {
      return { signInAnonymously: function() {
        return Promise.resolve();
      }, getLoginState: function() {
        return Promise.resolve(true);
      } };
    }, t2;
  } };
  function Vt({ data: e2 }) {
    let t2;
    t2 = fe();
    const n2 = JSON.parse(JSON.stringify(e2 || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e3 } = ae();
      e3 && (n2.uniIdToken = e3);
    }
    return n2;
  }
  const Gt = { enable: false, interval: 0, space: {} };
  let Qt = null, Yt = 0, Xt = false;
  function Zt() {
    return Array.isArray(P) && P.length ? P[0] : {};
  }
  function en$1(e2) {
    return "".concat(e2, "_").concat(Zt().spaceId || "default");
  }
  function tn() {
    if (Qt)
      return Qt;
    try {
      const e2 = ie.getStorageSync(en$1("UNICLOUD_FAILOVER_CONFIG"));
      if (m(e2))
        return Qt = e2, e2;
    } catch (e2) {
    }
    return null;
  }
  function nn(e2) {
    Yt = e2;
    try {
      ie.setStorageSync(en$1("UNICLOUD_FAILOVER_LAST_REQUEST"), e2);
    } catch (e3) {
    }
  }
  function sn(e2) {
    if (null === e2 || e2 < 0)
      return false;
    if (0 === e2)
      return true;
    const t2 = function() {
      if (Yt)
        return Yt;
      try {
        const e3 = ie.getStorageSync(en$1("UNICLOUD_FAILOVER_LAST_REQUEST"));
        if (e3 && "number" == typeof e3)
          return Yt = e3, e3;
      } catch (e3) {
      }
      return 0;
    }();
    if (!t2)
      return true;
    return Date.now() - t2 >= e2;
  }
  async function rn() {
    const e2 = Zt(), { failoverEndpoint: t2 } = e2;
    if (!t2)
      return null;
    if (Xt)
      return tn();
    Xt = true;
    try {
      const e3 = "".concat(t2, "/.unicloud/failover-cfg.json"), n2 = await ie.request({ url: e3, method: "GET", dataType: "json", timeout: 5e3 });
      if (nn(Date.now()), 200 !== n2.statusCode || !m(n2.data))
        return null;
      const s2 = { ...Gt, ...n2.data }, { enable: r2 = false, interval: i2 = 0, space: o2 = {} } = s2, a2 = tn(), c2 = a2 && a2.enable, u2 = function(e4, t3) {
        if (!e4)
          return t3.enable;
        if (e4.enable !== t3.enable)
          return true;
        if (e4.interval !== t3.interval)
          return true;
        if (t3._lastModifiedAt && e4._lastModifiedAt !== t3._lastModifiedAt)
          return true;
        if (JSON.stringify(e4.space) !== JSON.stringify(t3.space))
          return true;
        return false;
      }(a2, s2);
      return function(e4) {
        try {
          Qt = e4, e4 && e4.enable ? ie.setStorageSync(en$1("UNICLOUD_FAILOVER_CONFIG"), e4) : (ie.removeStorageSync(en$1("UNICLOUD_FAILOVER_CONFIG")), ie.removeStorageSync(en$1("UNICLOUD_FAILOVER_LAST_REQUEST")));
        } catch (e5) {
        }
      }({ enable: r2, interval: i2, space: o2, _lastModifiedAt: n2.data._lastModifiedAt || Date.now() }), u2 && Z(J, { isEnabled: r2, hasStatusChanged: c2 !== r2, failoverSpace: o2 }), s2;
    } catch (e3) {
      return tn();
    } finally {
      Xt = false;
    }
  }
  const an = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];
  var cn = /[\\^$.*+?()[\]{}|]/g, un = RegExp(cn.source);
  function ln(e2, t2, n2) {
    return e2.replace(new RegExp((s2 = t2) && un.test(s2) ? s2.replace(cn, "\\$&") : s2, "g"), n2);
    var s2;
  }
  const dn = "none", hn = "request", pn = "response", fn = "both", gn = { code: 2e4, message: "System error" }, mn = { code: 20101, message: "Invalid client" }, _n = { 10001: "Secure network is not supported on current playground or unimpsdk", 10003: "Config missing in current app. If the problem pesist, please contact DCloud.", 10009: "Encrypt payload failed", 10010: "Decrypt response failed" };
  function wn(e2) {
    return new re({ subject: e2.errSubject || "uni-secure-network", code: e2.errCode || e2.code || gn.code, message: e2.errMsg || e2.message || gn.message });
  }
  function vn(e2) {
    const { errSubject: t2, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e2 || {};
    return new re({ subject: t2 || n2 || "uni-secure-network", code: s2 || i2 || gn.code, message: r2 || o2, cause: a2 });
  }
  class In {
    constructor({ secretType: e2, uniCloudIns: t2 } = {}) {
      this.clientType = "", this.secretType = e2 || dn, this.uniCloudIns = t2;
      const { provider: n2, spaceId: s2 } = this.uniCloudIns.config;
      var r2;
      this.provider = n2, this.spaceId = s2, this.scopedGlobalCache = (r2 = this.uniCloudIns, R("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", r2.config.spaceId)));
    }
    getSystemInfo() {
      return this._systemInfo || (this._systemInfo = de()), this._systemInfo;
    }
    get appId() {
      return this.getSystemInfo().appId;
    }
    get deviceId() {
      return this.getSystemInfo().deviceId;
    }
    async encryptData(e2) {
      return this.secretType === dn ? e2 : this.platformEncryptData(e2);
    }
    async decryptResult(e2) {
      if (this.secretType === dn)
        return e2;
      const { errCode: t2, errMsg: n2, content: s2 } = e2 || {};
      if (t2 || !s2) {
        if (t2)
          throw wn({ errCode: t2, errMsg: n2 });
        if (!s2)
          throw wn();
        return e2;
      }
      return this.secretType === hn ? s2 : this.platformDecryptResult(e2);
    }
    wrapVerifyClientCallFunction(e2) {
      const t2 = this;
      return async function({ name: n2, data: s2 = {} } = {}) {
        await t2.prepare(), (s2 = JSON.parse(JSON.stringify(s2)))._uniCloudOptions = await t2.platformGetSignOption();
        let r2 = await e2({ name: n2, data: s2 });
        return t2.isClientKeyNotFound(r2) && (await t2.prepare({ forceUpdate: true }), s2._uniCloudOptions = await t2.platformGetSignOption(), r2 = await e2({ name: n2, data: s2 })), r2;
      };
    }
    wrapEncryptDataCallFunction(e2) {
      const t2 = this;
      return async function({ name: n2, data: s2 = {} } = {}) {
        await t2.prepare();
        const r2 = await t2.encryptData(s2);
        let i2 = await e2({ name: n2, data: r2 });
        if (t2.isClientKeyNotFound(i2)) {
          await t2.prepare({ forceUpdate: true });
          const r3 = await t2.encryptData(s2);
          i2 = await e2({ name: n2, data: r3 });
        }
        return i2.result = await t2.decryptResult(i2.result), i2;
      };
    }
  }
  n(function(e2, t2) {
    var n2, s2, i2, o2, a2, c2, u2, l2;
    e2.exports = (s2 = (n2 = l2 = r).lib, i2 = s2.WordArray, o2 = s2.Hasher, a2 = n2.algo, c2 = [], u2 = a2.SHA1 = o2.extend({ _doReset: function() {
      this._hash = new i2.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
    }, _doProcessBlock: function(e3, t3) {
      for (var n3 = this._hash.words, s3 = n3[0], r2 = n3[1], i3 = n3[2], o3 = n3[3], a3 = n3[4], u3 = 0; u3 < 80; u3++) {
        if (u3 < 16)
          c2[u3] = 0 | e3[t3 + u3];
        else {
          var l3 = c2[u3 - 3] ^ c2[u3 - 8] ^ c2[u3 - 14] ^ c2[u3 - 16];
          c2[u3] = l3 << 1 | l3 >>> 31;
        }
        var d2 = (s3 << 5 | s3 >>> 27) + a3 + c2[u3];
        d2 += u3 < 20 ? 1518500249 + (r2 & i3 | ~r2 & o3) : u3 < 40 ? 1859775393 + (r2 ^ i3 ^ o3) : u3 < 60 ? (r2 & i3 | r2 & o3 | i3 & o3) - 1894007588 : (r2 ^ i3 ^ o3) - 899497514, a3 = o3, o3 = i3, i3 = r2 << 30 | r2 >>> 2, r2 = s3, s3 = d2;
      }
      n3[0] = n3[0] + s3 | 0, n3[1] = n3[1] + r2 | 0, n3[2] = n3[2] + i3 | 0, n3[3] = n3[3] + o3 | 0, n3[4] = n3[4] + a3 | 0;
    }, _doFinalize: function() {
      var e3 = this._data, t3 = e3.words, n3 = 8 * this._nDataBytes, s3 = 8 * e3.sigBytes;
      return t3[s3 >>> 5] |= 128 << 24 - s3 % 32, t3[14 + (s3 + 64 >>> 9 << 4)] = Math.floor(n3 / 4294967296), t3[15 + (s3 + 64 >>> 9 << 4)] = n3, e3.sigBytes = 4 * t3.length, this._process(), this._hash;
    }, clone: function() {
      var e3 = o2.clone.call(this);
      return e3._hash = this._hash.clone(), e3;
    } }), n2.SHA1 = o2._createHelper(u2), n2.HmacSHA1 = o2._createHmacHelper(u2), l2.SHA1);
  }), n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function() {
      var e3 = n2, t3 = e3.lib, s2 = t3.Base, r2 = t3.WordArray, i2 = e3.algo, o2 = i2.MD5, a2 = i2.EvpKDF = s2.extend({ cfg: s2.extend({ keySize: 4, hasher: o2, iterations: 1 }), init: function(e4) {
        this.cfg = this.cfg.extend(e4);
      }, compute: function(e4, t4) {
        for (var n3 = this.cfg, s3 = n3.hasher.create(), i3 = r2.create(), o3 = i3.words, a3 = n3.keySize, c2 = n3.iterations; o3.length < a3; ) {
          u2 && s3.update(u2);
          var u2 = s3.update(e4).finalize(t4);
          s3.reset();
          for (var l2 = 1; l2 < c2; l2++)
            u2 = s3.finalize(u2), s3.reset();
          i3.concat(u2);
        }
        return i3.sigBytes = 4 * a3, i3;
      } });
      e3.EvpKDF = function(e4, t4, n3) {
        return a2.create(n3).compute(e4, t4);
      };
    }(), n2.EvpKDF);
  }), n(function(e2, t2) {
    var n2;
    e2.exports = void ((n2 = r).lib.Cipher || function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.Base, i2 = s2.WordArray, o2 = s2.BufferedBlockAlgorithm, a2 = t3.enc;
      a2.Utf8;
      var c2 = a2.Base64, u2 = t3.algo.EvpKDF, l2 = s2.Cipher = o2.extend({ cfg: r2.extend(), createEncryptor: function(e4, t4) {
        return this.create(this._ENC_XFORM_MODE, e4, t4);
      }, createDecryptor: function(e4, t4) {
        return this.create(this._DEC_XFORM_MODE, e4, t4);
      }, init: function(e4, t4, n3) {
        this.cfg = this.cfg.extend(n3), this._xformMode = e4, this._key = t4, this.reset();
      }, reset: function() {
        o2.reset.call(this), this._doReset();
      }, process: function(e4) {
        return this._append(e4), this._process();
      }, finalize: function(e4) {
        return e4 && this._append(e4), this._doFinalize();
      }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: /* @__PURE__ */ function() {
        function e4(e5) {
          return "string" == typeof e5 ? w2 : y2;
        }
        return function(t4) {
          return { encrypt: function(n3, s3, r3) {
            return e4(s3).encrypt(t4, n3, s3, r3);
          }, decrypt: function(n3, s3, r3) {
            return e4(s3).decrypt(t4, n3, s3, r3);
          } };
        };
      }() });
      s2.StreamCipher = l2.extend({ _doFinalize: function() {
        return this._process(true);
      }, blockSize: 1 });
      var d2 = t3.mode = {}, h2 = s2.BlockCipherMode = r2.extend({ createEncryptor: function(e4, t4) {
        return this.Encryptor.create(e4, t4);
      }, createDecryptor: function(e4, t4) {
        return this.Decryptor.create(e4, t4);
      }, init: function(e4, t4) {
        this._cipher = e4, this._iv = t4;
      } }), p2 = d2.CBC = function() {
        var t4 = h2.extend();
        function n3(t5, n4, s3) {
          var r3 = this._iv;
          if (r3) {
            var i3 = r3;
            this._iv = e3;
          } else
            i3 = this._prevBlock;
          for (var o3 = 0; o3 < s3; o3++)
            t5[n4 + o3] ^= i3[o3];
        }
        return t4.Encryptor = t4.extend({ processBlock: function(e4, t5) {
          var s3 = this._cipher, r3 = s3.blockSize;
          n3.call(this, e4, t5, r3), s3.encryptBlock(e4, t5), this._prevBlock = e4.slice(t5, t5 + r3);
        } }), t4.Decryptor = t4.extend({ processBlock: function(e4, t5) {
          var s3 = this._cipher, r3 = s3.blockSize, i3 = e4.slice(t5, t5 + r3);
          s3.decryptBlock(e4, t5), n3.call(this, e4, t5, r3), this._prevBlock = i3;
        } }), t4;
      }(), f2 = (t3.pad = {}).Pkcs7 = { pad: function(e4, t4) {
        for (var n3 = 4 * t4, s3 = n3 - e4.sigBytes % n3, r3 = s3 << 24 | s3 << 16 | s3 << 8 | s3, o3 = [], a3 = 0; a3 < s3; a3 += 4)
          o3.push(r3);
        var c3 = i2.create(o3, s3);
        e4.concat(c3);
      }, unpad: function(e4) {
        var t4 = 255 & e4.words[e4.sigBytes - 1 >>> 2];
        e4.sigBytes -= t4;
      } };
      s2.BlockCipher = l2.extend({ cfg: l2.cfg.extend({ mode: p2, padding: f2 }), reset: function() {
        l2.reset.call(this);
        var e4 = this.cfg, t4 = e4.iv, n3 = e4.mode;
        if (this._xformMode == this._ENC_XFORM_MODE)
          var s3 = n3.createEncryptor;
        else
          s3 = n3.createDecryptor, this._minBufferSize = 1;
        this._mode && this._mode.__creator == s3 ? this._mode.init(this, t4 && t4.words) : (this._mode = s3.call(n3, this, t4 && t4.words), this._mode.__creator = s3);
      }, _doProcessBlock: function(e4, t4) {
        this._mode.processBlock(e4, t4);
      }, _doFinalize: function() {
        var e4 = this.cfg.padding;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          e4.pad(this._data, this.blockSize);
          var t4 = this._process(true);
        } else
          t4 = this._process(true), e4.unpad(t4);
        return t4;
      }, blockSize: 4 });
      var g2 = s2.CipherParams = r2.extend({ init: function(e4) {
        this.mixIn(e4);
      }, toString: function(e4) {
        return (e4 || this.formatter).stringify(this);
      } }), m2 = (t3.format = {}).OpenSSL = { stringify: function(e4) {
        var t4 = e4.ciphertext, n3 = e4.salt;
        if (n3)
          var s3 = i2.create([1398893684, 1701076831]).concat(n3).concat(t4);
        else
          s3 = t4;
        return s3.toString(c2);
      }, parse: function(e4) {
        var t4 = c2.parse(e4), n3 = t4.words;
        if (1398893684 == n3[0] && 1701076831 == n3[1]) {
          var s3 = i2.create(n3.slice(2, 4));
          n3.splice(0, 4), t4.sigBytes -= 16;
        }
        return g2.create({ ciphertext: t4, salt: s3 });
      } }, y2 = s2.SerializableCipher = r2.extend({ cfg: r2.extend({ format: m2 }), encrypt: function(e4, t4, n3, s3) {
        s3 = this.cfg.extend(s3);
        var r3 = e4.createEncryptor(n3, s3), i3 = r3.finalize(t4), o3 = r3.cfg;
        return g2.create({ ciphertext: i3, key: n3, iv: o3.iv, algorithm: e4, mode: o3.mode, padding: o3.padding, blockSize: e4.blockSize, formatter: s3.format });
      }, decrypt: function(e4, t4, n3, s3) {
        return s3 = this.cfg.extend(s3), t4 = this._parse(t4, s3.format), e4.createDecryptor(n3, s3).finalize(t4.ciphertext);
      }, _parse: function(e4, t4) {
        return "string" == typeof e4 ? t4.parse(e4, this) : e4;
      } }), _2 = (t3.kdf = {}).OpenSSL = { execute: function(e4, t4, n3, s3) {
        s3 || (s3 = i2.random(8));
        var r3 = u2.create({ keySize: t4 + n3 }).compute(e4, s3), o3 = i2.create(r3.words.slice(t4), 4 * n3);
        return r3.sigBytes = 4 * t4, g2.create({ key: r3, iv: o3, salt: s3 });
      } }, w2 = s2.PasswordBasedCipher = y2.extend({ cfg: y2.cfg.extend({ kdf: _2 }), encrypt: function(e4, t4, n3, s3) {
        var r3 = (s3 = this.cfg.extend(s3)).kdf.execute(n3, e4.keySize, e4.ivSize);
        s3.iv = r3.iv;
        var i3 = y2.encrypt.call(this, e4, t4, r3.key, s3);
        return i3.mixIn(r3), i3;
      }, decrypt: function(e4, t4, n3, s3) {
        s3 = this.cfg.extend(s3), t4 = this._parse(t4, s3.format);
        var r3 = s3.kdf.execute(n3, e4.keySize, e4.ivSize, t4.salt);
        return s3.iv = r3.iv, y2.decrypt.call(this, e4, t4, r3.key, s3);
      } });
    }());
  });
  n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function() {
      var e3 = n2, t3 = e3.lib.BlockCipher, s2 = e3.algo, r2 = [], i2 = [], o2 = [], a2 = [], c2 = [], u2 = [], l2 = [], d2 = [], h2 = [], p2 = [];
      !function() {
        for (var e4 = [], t4 = 0; t4 < 256; t4++)
          e4[t4] = t4 < 128 ? t4 << 1 : t4 << 1 ^ 283;
        var n3 = 0, s3 = 0;
        for (t4 = 0; t4 < 256; t4++) {
          var f3 = s3 ^ s3 << 1 ^ s3 << 2 ^ s3 << 3 ^ s3 << 4;
          f3 = f3 >>> 8 ^ 255 & f3 ^ 99, r2[n3] = f3, i2[f3] = n3;
          var g3 = e4[n3], m2 = e4[g3], y2 = e4[m2], _2 = 257 * e4[f3] ^ 16843008 * f3;
          o2[n3] = _2 << 24 | _2 >>> 8, a2[n3] = _2 << 16 | _2 >>> 16, c2[n3] = _2 << 8 | _2 >>> 24, u2[n3] = _2, _2 = 16843009 * y2 ^ 65537 * m2 ^ 257 * g3 ^ 16843008 * n3, l2[f3] = _2 << 24 | _2 >>> 8, d2[f3] = _2 << 16 | _2 >>> 16, h2[f3] = _2 << 8 | _2 >>> 24, p2[f3] = _2, n3 ? (n3 = g3 ^ e4[e4[e4[y2 ^ g3]]], s3 ^= e4[e4[s3]]) : n3 = s3 = 1;
        }
      }();
      var f2 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], g2 = s2.AES = t3.extend({ _doReset: function() {
        if (!this._nRounds || this._keyPriorReset !== this._key) {
          for (var e4 = this._keyPriorReset = this._key, t4 = e4.words, n3 = e4.sigBytes / 4, s3 = 4 * ((this._nRounds = n3 + 6) + 1), i3 = this._keySchedule = [], o3 = 0; o3 < s3; o3++)
            if (o3 < n3)
              i3[o3] = t4[o3];
            else {
              var a3 = i3[o3 - 1];
              o3 % n3 ? n3 > 6 && o3 % n3 == 4 && (a3 = r2[a3 >>> 24] << 24 | r2[a3 >>> 16 & 255] << 16 | r2[a3 >>> 8 & 255] << 8 | r2[255 & a3]) : (a3 = r2[(a3 = a3 << 8 | a3 >>> 24) >>> 24] << 24 | r2[a3 >>> 16 & 255] << 16 | r2[a3 >>> 8 & 255] << 8 | r2[255 & a3], a3 ^= f2[o3 / n3 | 0] << 24), i3[o3] = i3[o3 - n3] ^ a3;
            }
          for (var c3 = this._invKeySchedule = [], u3 = 0; u3 < s3; u3++)
            o3 = s3 - u3, a3 = u3 % 4 ? i3[o3] : i3[o3 - 4], c3[u3] = u3 < 4 || o3 <= 4 ? a3 : l2[r2[a3 >>> 24]] ^ d2[r2[a3 >>> 16 & 255]] ^ h2[r2[a3 >>> 8 & 255]] ^ p2[r2[255 & a3]];
        }
      }, encryptBlock: function(e4, t4) {
        this._doCryptBlock(e4, t4, this._keySchedule, o2, a2, c2, u2, r2);
      }, decryptBlock: function(e4, t4) {
        var n3 = e4[t4 + 1];
        e4[t4 + 1] = e4[t4 + 3], e4[t4 + 3] = n3, this._doCryptBlock(e4, t4, this._invKeySchedule, l2, d2, h2, p2, i2), n3 = e4[t4 + 1], e4[t4 + 1] = e4[t4 + 3], e4[t4 + 3] = n3;
      }, _doCryptBlock: function(e4, t4, n3, s3, r3, i3, o3, a3) {
        for (var c3 = this._nRounds, u3 = e4[t4] ^ n3[0], l3 = e4[t4 + 1] ^ n3[1], d3 = e4[t4 + 2] ^ n3[2], h3 = e4[t4 + 3] ^ n3[3], p3 = 4, f3 = 1; f3 < c3; f3++) {
          var g3 = s3[u3 >>> 24] ^ r3[l3 >>> 16 & 255] ^ i3[d3 >>> 8 & 255] ^ o3[255 & h3] ^ n3[p3++], m2 = s3[l3 >>> 24] ^ r3[d3 >>> 16 & 255] ^ i3[h3 >>> 8 & 255] ^ o3[255 & u3] ^ n3[p3++], y2 = s3[d3 >>> 24] ^ r3[h3 >>> 16 & 255] ^ i3[u3 >>> 8 & 255] ^ o3[255 & l3] ^ n3[p3++], _2 = s3[h3 >>> 24] ^ r3[u3 >>> 16 & 255] ^ i3[l3 >>> 8 & 255] ^ o3[255 & d3] ^ n3[p3++];
          u3 = g3, l3 = m2, d3 = y2, h3 = _2;
        }
        g3 = (a3[u3 >>> 24] << 24 | a3[l3 >>> 16 & 255] << 16 | a3[d3 >>> 8 & 255] << 8 | a3[255 & h3]) ^ n3[p3++], m2 = (a3[l3 >>> 24] << 24 | a3[d3 >>> 16 & 255] << 16 | a3[h3 >>> 8 & 255] << 8 | a3[255 & u3]) ^ n3[p3++], y2 = (a3[d3 >>> 24] << 24 | a3[h3 >>> 16 & 255] << 16 | a3[u3 >>> 8 & 255] << 8 | a3[255 & l3]) ^ n3[p3++], _2 = (a3[h3 >>> 24] << 24 | a3[u3 >>> 16 & 255] << 16 | a3[l3 >>> 8 & 255] << 8 | a3[255 & d3]) ^ n3[p3++], e4[t4] = g3, e4[t4 + 1] = m2, e4[t4 + 2] = y2, e4[t4 + 3] = _2;
      }, keySize: 8 });
      e3.AES = t3._createHelper(g2);
    }(), n2.AES);
  });
  n(function(e2, t2) {
    var n2;
    e2.exports = ((n2 = r).pad.NoPadding = { pad: function() {
    }, unpad: function() {
    } }, n2.pad.NoPadding);
  });
  let xn, On;
  function Rn(e2) {
    const t2 = ["hasClientKey", "encryptGetClientKeyPayload", "setClientKey", "encrypt", "decrypt"], n2 = {};
    for (let s2 = 0; s2 < t2.length; s2++) {
      const r2 = t2[s2];
      n2[r2] = function(...t3) {
        return new Promise((n3, s3) => {
          "function" == typeof e2[r2] ? e2[r2]({ ...t3[0], success(e3) {
            n3(e3);
          }, fail(e3) {
            s3(vn({ errCode: e3.errCode, errMsg: _n[e3.errCode] || e3.errMsg || e3.message }));
          } }) : s3(vn({ message: "请检查manifest.json内是否开启安全网络模块，另外注意标准基座不支持安全网络模块" }));
        });
      };
    }
    return n2;
  }
  class Un extends In {
    constructor(e2) {
      super(e2), this.clientType = "app", this.appUtils = { ...Rn(uni.__getSecureNetworkManager()) }, this.systemInfo = xn || (xn = de());
    }
    async hasClientKey() {
      return this._hasClientKey = await this.appUtils.hasClientKey({ provider: this.provider, spaceId: this.spaceId }), this._hasClientKey;
    }
    async getAppClientKey() {
      const { data: e2, key: t2 } = await this.appUtils.encryptGetClientKeyPayload({ data: {} }), n2 = (await this.uniCloudIns.callFunction({ name: "DCloud-clientDB", data: { redirectTo: "encryption", action: "getAppClientKey", data: e2, key: t2 } })).result || {};
      if (0 !== n2.errCode)
        throw wn(n2);
      const { clientKey: s2, key: r2 } = n2;
      await this.appUtils.setClientKey({ provider: this.provider, spaceId: this.spaceId, clientKey: s2, key: r2 });
    }
    async ensureClientKey({ forceUpdate: e2 = false } = {}) {
      if (true !== await this.hasClientKey() || e2)
        return e2 && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus === h || !e2 && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus !== f || (this.scopedGlobalCache.initPromise = this.getAppClientKey(), this.scopedGlobalCache.initPromise.then((e3) => {
          this.scopedGlobalCache.initStatus = p;
        }).catch((e3) => {
          throw this.scopedGlobalCache.initStatus = f, e3;
        }), this.scopedGlobalCache.initStatus = h), this.scopedGlobalCache.initPromise;
    }
    async prepare({ forceUpdate: e2 = false } = {}) {
      await this.ensureClientKey({ forceUpdate: e2 });
    }
    async platformGetSignOption() {
      const { data: e2, key: t2 } = await this.appUtils.encrypt({ provider: this.provider, spaceId: this.spaceId, data: JSON.stringify({}) });
      return { verifyClientSign: e2, encryptKeyId: t2 };
    }
    async platformEncryptData(e2) {
      const { data: t2, key: n2 } = await this.appUtils.encrypt({ provider: this.provider, spaceId: this.spaceId, data: JSON.stringify(e2) }), s2 = { secretType: this.secretType, encryptKeyId: n2 };
      return this.secretType === pn ? { content: e2, _uniCloudOptions: s2 } : { content: t2, _uniCloudOptions: s2 };
    }
    async platformDecryptResult(e2) {
      const { content: t2, _uniCloudOptions: n2 = {} } = e2, s2 = n2.encryptKeyId, r2 = await this.appUtils.decrypt({ provider: this.provider, spaceId: this.spaceId, data: t2, key: s2 });
      return JSON.parse(r2.data);
    }
    isClientKeyNotFound(e2 = {}) {
      const t2 = e2.result || {};
      return 70009 === t2.errCode && "uni-secure-network" === t2.errSubject;
    }
  }
  function Nn({ secretType: e2 } = {}) {
    return e2 === hn || e2 === pn || e2 === fn;
  }
  function Dn({ name: e2, data: t2 = {} } = {}) {
    return "DCloud-clientDB" === e2 && "encryption" === t2.redirectTo && "getAppClientKey" === t2.action;
  }
  function Mn({ provider: e2, spaceId: t2, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = de();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e3, spaceId: t3 } = {}) {
      const n3 = C;
      if (!n3)
        return {};
      e3 = /* @__PURE__ */ function(e4) {
        return "tencent" === e4 ? "tcb" : e4;
      }(e3);
      const s3 = n3.find((n4) => n4.provider === e3 && n4.spaceId === t3);
      return s3 && s3.config;
    }({ provider: e2, spaceId: t2 });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable)
      return false;
    const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length)
      return true;
    const l2 = function(e3, t3) {
      let n3, s3, r3;
      for (let i3 = 0; i3 < e3.length; i3++) {
        const o3 = e3[i3];
        o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e4) => e4.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
      }
      return n3 || s3 || r3;
    }(u2, n2);
    if (!l2)
      return false;
    if ((c2[l2] || []).find((e3 = {}) => e3.appId === s2 && (e3.platform || "").toLowerCase() === o2.toLowerCase()))
      return true;
    throw console.error("此应用[appId: ".concat(s2, ", platform: ").concat(o2, "]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client")), vn(mn);
  }
  function Fn({ functionName: e2, result: t2, logPvd: n2 }) {
  }
  function qn(e2) {
    const t2 = e2.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = Vt.call(e2, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb", alipay: "alipay", dcloud: "dcloud" }[this.config.provider], i2 = Nn(n3), o2 = Dn(n3), a2 = i2 || o2;
      return t2.call(this, n3).then((e3) => (e3.errCode = 0, !a2 && Fn.call(this, { functionName: s2, result: e3, logPvd: r2 }), Promise.resolve(e3)), (e3) => (!a2 && Fn.call(this, { functionName: s2, result: e3, logPvd: r2 }), e3 && e3.message && (e3.message = function({ message: e4 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e4.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e5 = 1; e5 < a3.length; e5++)
            c2 = ln(c2, "{$".concat(e5, "}"), a3[e5]);
          for (const e5 in t3)
            c2 = ln(c2, "{".concat(e5, "}"), t3[e5]);
          return "replace" === o3 ? c2 : e4 + c2;
        }
        return e4;
      }({ message: "[".concat(n3.name, "]: ").concat(e3.message), formatter: an, extraInfo: { functionName: s2 } })), Promise.reject(e3)));
    };
    e2.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e2.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, o2 = n2, o2 = o2.bind(e2), Dn(t3))
        a2 = n2.call(e2, t3);
      else if (Nn(t3)) {
        a2 = new On({ secretType: t3.secretType, uniCloudIns: e2 }).wrapEncryptDataCallFunction(n2.bind(e2))(t3);
      } else if (Mn({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new On({ secretType: t3.secretType, uniCloudIns: e2 }).wrapVerifyClientCallFunction(n2.bind(e2))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2.then((e3) => (e3.result = UTS.JSON.parse(JSON.stringify(e3.result)), e3));
    };
  }
  On = Un;
  const Kn = Symbol("CLIENT_DB_INTERNAL");
  function jn(e2, t2) {
    return e2.then = "DoNotReturnProxyWithAFunctionNamedThen", e2._internalType = Kn, e2.inspect = null, e2.__v_raw = void 0, new Proxy(e2, { get(e3, n2, s2) {
      if ("_uniClient" === n2)
        return null;
      if ("symbol" == typeof n2)
        return e3[n2];
      if (n2 in e3 || "string" != typeof n2) {
        const t3 = e3[n2];
        return "function" == typeof t3 ? t3.bind(e3) : t3;
      }
      return t2.get(e3, n2, s2);
    } });
  }
  function Bn(e2) {
    return { on: (t2, n2) => {
      e2[t2] = e2[t2] || [], e2[t2].indexOf(n2) > -1 || e2[t2].push(n2);
    }, off: (t2, n2) => {
      e2[t2] = e2[t2] || [];
      const s2 = e2[t2].indexOf(n2);
      -1 !== s2 && e2[t2].splice(s2, 1);
    } };
  }
  const $n = ["db.Geo", "db.command", "command.aggregate"];
  function Hn(e2, t2) {
    return $n.indexOf("".concat(e2, ".").concat(t2)) > -1;
  }
  function Wn(e2) {
    switch (g(e2 = oe(e2))) {
      case "array":
        return e2.map((e3) => Wn(e3));
      case "object":
        return e2._internalType === Kn || Object.keys(e2).forEach((t2) => {
          e2[t2] = Wn(e2[t2]);
        }), e2;
      case "regexp":
        return { $regexp: { source: e2.source, flags: e2.flags } };
      case "date":
        return { $date: e2.toISOString() };
      default:
        return e2;
    }
  }
  function Jn(e2) {
    return e2 && e2.content && e2.content.$method;
  }
  class zn {
    constructor(e2, t2, n2) {
      this.content = e2, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e2 = this;
      const t2 = [e2.content];
      for (; e2.prevStage; )
        e2 = e2.prevStage, t2.push(e2.content);
      return { $db: t2.reverse().map((e3) => ({ $method: e3.$method, $param: Wn(e3.$param) })) };
    }
    toString() {
      return JSON.stringify(this.toJSON());
    }
    getAction() {
      const e2 = this.toJSON().$db.find((e3) => "action" === e3.$method);
      return e2 && e2.$param && e2.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e2) => "action" !== e2.$method) };
    }
    get isAggregate() {
      let e2 = this;
      for (; e2; ) {
        const t2 = Jn(e2), n2 = Jn(e2.prevStage);
        if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e2 = this;
      for (; e2; ) {
        if ("command" === Jn(e2))
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e2 = this;
      for (; e2; ) {
        const t2 = Jn(e2), n2 = Jn(e2.prevStage);
        if ("aggregate" === t2 && "command" === n2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    getNextStageFn(e2) {
      const t2 = this;
      return function() {
        return Vn({ $method: e2, $param: Wn(Array.from(arguments)) }, t2, t2._database);
      };
    }
    get count() {
      return this.isAggregate ? this.getNextStageFn("count") : function() {
        return this._send("count", Array.from(arguments));
      };
    }
    get remove() {
      return this.isCommand ? this.getNextStageFn("remove") : function() {
        return this._send("remove", Array.from(arguments));
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    get add() {
      return this.isCommand ? this.getNextStageFn("add") : function() {
        return this._send("add", Array.from(arguments));
      };
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      return this.isCommand ? this.getNextStageFn("set") : function() {
        throw new Error("JQL禁止使用set方法");
      };
    }
    _send(e2, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e2, $param: Wn(t2) }), k)
        ;
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function Vn(e2, t2, n2) {
    return jn(new zn(e2, t2, n2), { get(e3, t3) {
      let s2 = "db";
      return e3 && e3.content && (s2 = e3.content.$method), Hn(s2, t3) ? Vn({ $method: t3 }, e3, n2) : function() {
        return Vn({ $method: t3, $param: Wn(Array.from(arguments)) }, e3, n2);
      };
    } });
  }
  function Gn({ path: e2, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e2.map((e3) => ({ $method: e3 })), { $method: t2, $param: this.param }] };
      }
      toString() {
        return JSON.stringify(this.toJSON());
      }
    };
  }
  function Qn(e2, t2 = {}) {
    return jn(new e2(t2), { get: (e3, t3) => Hn("db", t3) ? Vn({ $method: t3 }, null, e3) : function() {
      return Vn({ $method: t3, $param: Wn(Array.from(arguments)) }, null, e3);
    } });
  }
  class Yn extends class {
    constructor({ uniClient: e2 = {}, isJQL: t2 = false } = {}) {
      this._uniClient = e2, this._authCallBacks = {}, this._dbCallBacks = {}, e2._isDefault && (this._dbCallBacks = R("_globalUniCloudDatabaseCallback")), t2 || (this.auth = Bn(this._authCallBacks)), this._isJQL = t2, Object.assign(this, Bn(this._dbCallBacks)), this.env = jn({}, { get: (e3, t3) => ({ $env: t3 }) }), this.Geo = jn({}, { get: (e3, t3) => Gn({ path: ["Geo"], method: t3 }) }), this.serverDate = Gn({ path: [], method: "serverDate" }), this.RegExp = Gn({ path: [], method: "RegExp" });
    }
    getCloudEnv(e2) {
      if ("string" != typeof e2 || !e2.trim())
        throw new Error("getCloudEnv参数错误");
      return { $env: e2.replace("$cloudEnv_", "") };
    }
    _callback(e2, t2) {
      const n2 = this._dbCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    _callbackAuth(e2, t2) {
      const n2 = this._authCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    multiSend() {
      const e2 = Array.from(arguments), t2 = e2.map((e3) => {
        const t3 = e3.getAction(), n2 = e3.getCommand();
        if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
          throw new Error("multiSend只支持子命令内使用getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e2 });
    }
    startTransaction() {
      throw new Error("JQL 事务仅支持在云端使用");
    }
    commit() {
      throw new Error("JQL 事务仅支持在云端使用");
    }
    rollback() {
      throw new Error("JQL 事务仅支持在云端使用");
    }
  } {
    _parseResult(e2) {
      return this._isJQL ? e2.result : e2;
    }
    _callCloudFunction({ action: e2, command: t2, multiCommand: n2, queryList: s2 }) {
      function r2(e3, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e3.result.dataList[n3]));
          }
      }
      const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
      function a2(e3) {
        return i2._callback("error", [e3]), q(K(o2, "fail"), e3).then(() => q(K(o2, "complete"), e3)).then(() => (r2(null, e3), Z($, { type: z, content: e3 }), Promise.reject(e3)));
      }
      const c2 = q(K(o2, "invoke")), u2 = this._uniClient;
      return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: d, data: { action: e2, command: t2, multiCommand: n2 } })).then((e3) => {
        const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e3.result;
        if (u3)
          for (let e4 = 0; e4 < u3.length; e4++) {
            const { level: t4, message: n4, detail: s4 } = u3[e4], r3 = console["warn" === t4 ? "error" : t4] || console.log;
            let i3 = "[System Info]" + n4;
            s4 && (i3 = "".concat(i3, "\n详细信息：").concat(s4)), r3(i3);
          }
        if (t3) {
          return a2(new re({ code: t3, message: n3, requestId: e3.requestId }));
        }
        e3.result.errCode = e3.result.errCode || e3.result.code, e3.result.errMsg = e3.result.errMsg || e3.result.message, s3 && c3 && (ce({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), Z(W$1, { token: s3, tokenExpired: c3 }));
        const l2 = [{ prop: "affectedDocs", tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代" }, { prop: "code", tips: "code不再推荐使用，请使用errCode替代" }, { prop: "message", tips: "message不再推荐使用，请使用errMsg替代" }];
        for (let t4 = 0; t4 < l2.length; t4++) {
          const { prop: n4, tips: s4 } = l2[t4];
          if (n4 in e3.result) {
            const t5 = e3.result[n4];
            Object.defineProperty(e3.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e4) {
          return q(K(o2, "success"), e4).then(() => q(K(o2, "complete"), e4)).then(() => {
            r2(e4, null);
            const t4 = i2._parseResult(e4);
            return Z($, { type: z, content: t4 }), Promise.resolve(t4);
          });
        }(e3);
      }, (e3) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e3.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a2(new re({ code: e3.code || "SYSTEM_ERROR", message: e3.message, requestId: e3.requestId }));
      });
    }
  }
  const Xn = "token无效，跳转登录页面", Zn = "token过期，跳转登录页面", es = { TOKEN_INVALID_TOKEN_EXPIRED: Zn, TOKEN_INVALID_INVALID_CLIENTID: Xn, TOKEN_INVALID: Xn, TOKEN_INVALID_WRONG_TOKEN: Xn, TOKEN_INVALID_ANONYMOUS_USER: Xn }, ts = { "uni-id-token-expired": Zn, "uni-id-check-token-failed": Xn, "uni-id-token-not-exist": Xn, "uni-id-check-device-feature-failed": Xn }, ns = { ...es, ...ts, default: "用户未登录或登录状态过期，自动跳转登录页面" };
  function ss(e2, t2) {
    let n2 = "";
    return n2 = e2 ? "".concat(e2, "/").concat(t2) : t2, n2.replace(/^\//, "");
  }
  function rs(e2 = [], t2 = "") {
    const n2 = [], s2 = [];
    return e2.forEach((e3) => {
      true === e3.needLogin ? n2.push(ss(t2, e3.path)) : false === e3.needLogin && s2.push(ss(t2, e3.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function is(e2) {
    return e2.split("?")[0].replace(/^\//, "");
  }
  function os() {
    return function(e2) {
      let t2 = e2 && e2.route;
      return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : "";
    }(function() {
      const e2 = getCurrentPages();
      return e2[e2.length - 1];
    }());
  }
  function as() {
    return is(os());
  }
  function cs(e2 = "", t2 = {}) {
    if (!e2)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = is(e2);
    return n2.some((e3) => e3.pagePath === s2);
  }
  const us = !!e.uniIdRouter;
  const { loginPage: ls, routerNeedLogin: ds, resToLogin: hs, needLoginPage: ps, notNeedLoginPage: fs, loginPageInTabBar: gs } = function({ pages: t2 = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = e) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = rs(t2), { needLoginPage: l2, notNeedLoginPage: d2 } = function(e2 = []) {
      const t3 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = rs(r3, s3);
        t3.push(...i3), n3.push(...o3);
      }), { needLoginPage: t3, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...l2], notNeedLoginPage: [...u2, ...d2], loginPageInTabBar: cs(i2, r2) };
  }();
  if (ps.indexOf(ls) > -1)
    throw new Error("Login page [".concat(ls, '] should not be "needLogin", please check your pages.json'));
  function ms(e2) {
    const t2 = as();
    if ("/" === e2.charAt(0))
      return e2;
    const [n2, s2] = e2.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t2.split("/");
    i2.pop();
    for (let e3 = 0; e3 < r2.length; e3++) {
      const t3 = r2[e3];
      ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
  }
  function ys(e2, t2) {
    return new RegExp(t2).test(e2);
  }
  function _s({ redirect: e2 }) {
    const t2 = is(e2), n2 = is(ls);
    return as() !== n2 && t2 !== n2;
  }
  function ws({ api: e2, redirect: t2 } = {}) {
    if (!t2 || !_s({ redirect: t2 }))
      return;
    const n2 = function(e3, t3) {
      return "/" !== e3.charAt(0) && (e3 = "/" + e3), t3 ? e3.indexOf("?") > -1 ? e3 + "&uniIdRedirectUrl=".concat(encodeURIComponent(t3)) : e3 + "?uniIdRedirectUrl=".concat(encodeURIComponent(t3)) : e3;
    }(ls, t2);
    gs ? "navigateTo" !== e2 && "redirectTo" !== e2 || (e2 = "switchTab") : "switchTab" === e2 && (e2 = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e2]({ url: n2 });
    }, 0);
  }
  function vs({ url: e2 } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e3, tokenExpired: t3 } = ae();
      let n3;
      if (e3) {
        if (t3 < Date.now()) {
          const e4 = "uni-id-token-expired";
          n3 = { errCode: e4, errMsg: ns[e4] };
        }
      } else {
        const e4 = "uni-id-check-token-failed";
        n3 = { errCode: e4, errMsg: ns[e4] };
      }
      return n3;
    }();
    if (function(e3) {
      const t3 = is(ms(e3));
      return !(fs.indexOf(t3) > -1) && (ps.indexOf(t3) > -1 || ds.some((n3) => ys(t3, n3) || ys(e3, n3)));
    }(e2) && n2) {
      n2.uniIdRedirectUrl = e2;
      if (Q$1(H$1).length > 0)
        return setTimeout(() => {
          Z(H$1, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function Is() {
    const e2 = os(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = vs({ url: e2 });
    t2 || n2 && ws({ api: "redirectTo", redirect: e2 });
  }
  function Ss() {
    Is();
    const e2 = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e2.length; t2++) {
      const n2 = e2[t2];
      uni.addInterceptor(n2, { invoke(e3) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = vs({ url: e3.url });
        return t3 ? e3 : s2 ? (ws({ api: n2, redirect: ms(e3.url) }), false) : e3;
      } });
    }
  }
  function ks() {
    this.onResponse((e2) => {
      const { type: t2, content: n2 } = e2;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in ns;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in es;
          }(n2);
      }
      s2 && function(e3 = {}) {
        const t3 = Q$1(H$1);
        ne().then(() => {
          const n3 = os();
          if (n3 && _s({ redirect: n3 }))
            return t3.length > 0 ? Z(H$1, Object.assign({ uniIdRedirectUrl: n3 }, e3)) : void (ls && ws({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function As(e2) {
    e2.onNeedLogin = function(e3) {
      Y$1(H$1, e3);
    }, e2.offNeedLogin = function(e3) {
      X(H$1, e3);
    }, us && (R("_globalUniCloudStatus").needLoginInit || (R("_globalUniCloudStatus").needLoginInit = true, ne().then(() => {
      Ss.call(e2);
    }), hs && ks.call(e2)));
  }
  function Cs(e2) {
    e2.onFailover = function(e3) {
      Y$1(J, e3);
    }, e2.offFailover = function(e3) {
      X(J, e3);
    }, e2.refreshFailoverConfig = function() {
      return e2.config, nn(0), rn();
    }, e2.clearFailoverConfig = function() {
      !function() {
        Qt = null, Yt = 0;
        try {
          ie.removeStorageSync(en$1("UNICLOUD_FAILOVER_CONFIG")), ie.removeStorageSync(en$1("UNICLOUD_FAILOVER_LAST_REQUEST"));
        } catch (e3) {
        }
      }();
    };
  }
  function Ts(e2) {
    !function(e3) {
      e3.onResponse = function(e4) {
        Y$1($, e4);
      }, e3.offResponse = function(e4) {
        X($, e4);
      };
    }(e2), As(e2), function(e3) {
      e3.onRefreshToken = function(e4) {
        Y$1(W$1, e4);
      }, e3.offRefreshToken = function(e4) {
        X(W$1, e4);
      };
    }(e2), Cs(e2);
  }
  const bs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Ps = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function xs(e2) {
    return decodeURIComponent(function(e3) {
      if (e3 = String(e3).replace(/[\t\n\f\r ]+/g, ""), !Ps.test(e3))
        throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
      var t2;
      e3 += "==".slice(2 - (3 & e3.length));
      for (var n2, s2, r2 = "", i2 = 0; i2 < e3.length; )
        t2 = bs.indexOf(e3.charAt(i2++)) << 18 | bs.indexOf(e3.charAt(i2++)) << 12 | (n2 = bs.indexOf(e3.charAt(i2++))) << 6 | (s2 = bs.indexOf(e3.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
      return r2;
    }(e2).split("").map(function(e3) {
      return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
  }
  function Os() {
    const e2 = ae().token || "", t2 = e2.split(".");
    if (!e2 || 3 !== t2.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse(xs(t2[1]));
    } catch (e3) {
      throw new Error("获取当前用户信息出错，详细错误信息为：" + e3.message);
    }
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  var Es = n(function(e2, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e3, t3) {
      return e3.tempFiles.forEach((e4, n3) => {
        e4.name || (e4.name = e4.path.substring(e4.path.lastIndexOf("/") + 1)), t3 && (e4.fileType = t3), e4.cloudPath = Date.now() + "_" + n3 + e4.name.substring(e4.name.lastIndexOf("."));
      }), e3.tempFilePaths || (e3.tempFilePaths = e3.tempFiles.map((e4) => e4.path)), e3;
    }
    function i2(e3, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e4) => {
        if (s3) {
          const t4 = s3(e4);
          if (void 0 !== t4)
            return Promise.resolve(t4).then((t5) => void 0 === t5 ? e4 : t5);
        }
        return e4;
      }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e4, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const i3 = t5.tempFiles, o2 = i3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= o2)
              return void (!i3.find((e5) => !e5.url && !e5.errMsg) && n3(t5));
            const u2 = i3[s5];
            e4.uploadFile({ provider: u2.provider, filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, cloudPathAsRealPath: u2.cloudPathAsRealPath, onUploadProgress(e5) {
              e5.index = s5, e5.tempFile = u2, e5.tempFilePath = u2.path, r4 && r4(e5);
            } }).then((e5) => {
              u2.url = e5.fileID, s5 < o2 && c2();
            }).catch((e5) => {
              u2.errMsg = e5.errMsg || e5.message, s5 < o2 && c2();
            });
          }
        });
      }(e3, t4, 5, r3));
    }
    t2.initChooseAndUploadFile = function(e3) {
      return function(t3 = { type: "all" }) {
        return "image" === t3.type ? i2(e3, function(e4) {
          const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e4;
          return new Promise((e5, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
              e5(r2(t5, "image"));
            }, fail(e6) {
              a2({ errMsg: e6.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : "video" === t3.type ? i2(e3, function(e4) {
          const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e4;
          return new Promise((e5, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
              e5(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e6) {
              c2({ errMsg: e6.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : i2(e3, function(e4) {
          const { count: t4, extension: n3 } = e4;
          return new Promise((e5, i3) => {
            let o2 = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
              return i3({ errMsg: s2 + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });
            o2({ type: "all", count: t4, extension: n3, success(t5) {
              e5(r2(t5));
            }, fail(e6) {
              i3({ errMsg: e6.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }), Ls = t(Es);
  const Rs = "manual";
  function Us(e2) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {}, mixinDatacomError: null }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e3 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e3.push(this[t2]);
        }), e3;
      }, (e3, t2) => {
        if (this.loadtime === Rs)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e3.length; r2++)
          e3[r2] !== t2[r2] && (s2.push(e3[r2]), n2 = true);
        e3[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e3, t2) {
    }, mixinDatacomEasyGet({ getone: e3 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const i2 = e3 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = i2, t2 && t2(i2);
      }).catch((e4) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e4, this.mixinDatacomError = e4, n2 && n2(e4);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2;
      t2 = t2 || {}, n2 = "undefined" != typeof __uniX && __uniX ? e2.databaseForJQL(this.spaceInfo) : e2.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t2.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const i2 = t2.where || this.where;
      i2 && Object.keys(i2).length && (n2 = n2.where(i2));
      const o2 = t2.field || this.field;
      o2 && (n2 = n2.field(o2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      true === (void 0 !== t2.distinct ? t2.distinct : this.distinct) && (n2 = n2.distinct());
      const l2 = t2.orderby || this.orderby;
      l2 && (n2 = n2.orderBy(l2));
      const d2 = void 0 !== t2.pageCurrent ? t2.pageCurrent : this.mixinDatacomPage.current, h2 = void 0 !== t2.pageSize ? t2.pageSize : this.mixinDatacomPage.size, p2 = void 0 !== t2.getcount ? t2.getcount : this.getcount, f2 = void 0 !== t2.gettree ? t2.gettree : this.gettree, g2 = void 0 !== t2.gettreepath ? t2.gettreepath : this.gettreepath, m2 = { getCount: p2 }, y2 = { limitLevel: void 0 !== t2.limitlevel ? t2.limitlevel : this.limitlevel, startWith: void 0 !== t2.startwith ? t2.startwith : this.startwith };
      return f2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(h2 * (d2 - 1)).limit(h2).get(m2), n2;
    } } };
  }
  function Ns(e2) {
    return function(t2, n2 = {}) {
      n2 = function(e3, t3 = {}) {
        return e3.customUI = t3.customUI || e3.customUI, e3.parseSystemError = t3.parseSystemError || e3.parseSystemError, Object.assign(e3.loadingOptions, t3.loadingOptions), Object.assign(e3.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e3.secretMethods = t3.secretMethods), e3;
      }({ customUI: false, loadingOptions: { title: "加载中...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get(s3, c2) {
        switch (c2) {
          case "toString":
            return "[object UniCloudObject]";
          case "toJSON":
            return {};
        }
        return function({ fn: e3, interceptorName: t3, getCallbackArgs: n3 } = {}) {
          return async function(...s4) {
            const r3 = n3 ? n3({ params: s4 }) : {};
            let i3, o3;
            try {
              return await q(K(t3, "invoke"), { ...r3 }), i3 = await e3(...s4), await q(K(t3, "success"), { ...r3, result: i3 }), i3;
            } catch (e4) {
              throw o3 = e4, await q(K(t3, "fail"), { ...r3, error: o3 }), o3;
            } finally {
              await q(K(t3, "complete"), o3 ? { ...r3, error: o3 } : { ...r3, result: i3 });
            }
          };
        }({ fn: async function s4(...u2) {
          let d2;
          a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
          const h2 = { name: t2, type: l, data: { method: c2, params: u2 } };
          "object" == typeof n2.secretMethods && function(e3, t3) {
            const n3 = t3.data.method, s5 = e3.secretMethods || {}, r3 = s5[n3] || s5["*"];
            r3 && (t3.secretType = r3);
          }(n2, h2);
          let p2 = false;
          try {
            d2 = await e2.callFunction(h2);
          } catch (e3) {
            p2 = true, d2 = { result: new re(e3) };
          }
          const { errSubject: f2, errCode: g2, errMsg: m2, newToken: y2 } = d2.result || {};
          if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (ce(y2), Z(W$1, { ...y2 })), g2) {
            let e3 = m2;
            if (p2 && o2) {
              e3 = (await o2({ objectName: t2, methodName: c2, params: u2, errSubject: f2, errCode: g2, errMsg: m2 })).errMsg || m2;
            }
            if (a2)
              if ("toast" === i2.type)
                uni.showToast({ title: e3, icon: "none" });
              else {
                if ("modal" !== i2.type)
                  throw new Error("Invalid errorOptions.type: ".concat(i2.type));
                {
                  const { confirm: t3 } = await async function({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                    return new Promise((i3, o3) => {
                      uni.showModal({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e5) {
                        i3(e5);
                      }, fail() {
                        i3({ confirm: false, cancel: true });
                      } });
                    });
                  }({ title: "提示", content: e3, showCancel: i2.retry, cancelText: "取消", confirmText: i2.retry ? "重试" : "确定" });
                  if (i2.retry && t3)
                    return s4(...u2);
                }
              }
            const n3 = new re({ subject: f2, code: g2, message: m2, requestId: d2.requestId });
            throw n3.detail = d2.result, Z($, { type: G, content: n3 }), n3;
          }
          return Z($, { type: G, content: d2.result }), d2.result;
        }, interceptorName: "callObject", getCallbackArgs: function({ params: e3 } = {}) {
          return { objectName: t2, methodName: c2, params: e3 };
        } });
      } });
    };
  }
  function Ds(e2) {
    return R("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e2.config.spaceId));
  }
  async function Ms({ openid: e2, callLoginByWeixin: t2 = false } = {}) {
    Ds(this);
    throw new Error("[SecureNetwork] API `initSecureNetworkByWeixin` is not supported on platform `".concat(T, "`"));
  }
  async function Fs(e2) {
    const t2 = Ds(this);
    return t2.initPromise || (t2.initPromise = Ms.call(this, e2).then((e3) => e3).catch((e3) => {
      throw delete t2.initPromise, e3;
    })), t2.initPromise;
  }
  function qs(e2) {
    return function({ openid: t2, callLoginByWeixin: n2 = false } = {}) {
      return Fs.call(e2, { openid: t2, callLoginByWeixin: n2 });
    };
  }
  function Ks(e2) {
    !function(e3) {
      pe = e3;
    }(e2);
  }
  function js(e2) {
    const n2 = { getAppBaseInfo: uni.getSystemInfo, getPushClientId: uni.getPushClientId };
    return function(s2) {
      return new Promise((r2, i2) => {
        n2[e2]({ ...s2, success(e3) {
          r2(e3);
        }, fail(e3) {
          i2(e3);
        } });
      });
    };
  }
  class Bs extends class {
    constructor() {
      this._callback = {};
    }
    addListener(e2, t2) {
      this._callback[e2] || (this._callback[e2] = []), this._callback[e2].push(t2);
    }
    on(e2, t2) {
      return this.addListener(e2, t2);
    }
    removeListener(e2, t2) {
      if (!t2)
        throw new Error('The "listener" argument must be of type function. Received undefined');
      const n2 = this._callback[e2];
      if (!n2)
        return;
      const s2 = function(e3, t3) {
        for (let n3 = e3.length - 1; n3 >= 0; n3--)
          if (e3[n3] === t3)
            return n3;
        return -1;
      }(n2, t2);
      n2.splice(s2, 1);
    }
    off(e2, t2) {
      return this.removeListener(e2, t2);
    }
    removeAllListener(e2) {
      delete this._callback[e2];
    }
    emit(e2, ...t2) {
      const n2 = this._callback[e2];
      if (n2)
        for (let e3 = 0; e3 < n2.length; e3++)
          n2[e3](...t2);
    }
  } {
    constructor() {
      super(), this._uniPushMessageCallback = this._receivePushMessage.bind(this), this._currentMessageId = -1, this._payloadQueue = [];
    }
    init() {
      return Promise.all([js("getAppBaseInfo")(), js("getPushClientId")()]).then(([{ appId: e2 } = {}, { cid: t2 } = {}] = []) => {
        if (!e2)
          throw new Error("Invalid appId, please check the manifest.json file");
        if (!t2)
          throw new Error("Invalid push client id");
        this._appId = e2, this._pushClientId = t2, this._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), this.emit("open"), this._initMessageListener();
      }, (e2) => {
        throw this.emit("error", e2), this.close(), e2;
      });
    }
    async open() {
      return this.init();
    }
    _isUniCloudSSE(e2) {
      if ("receive" !== e2.type)
        return false;
      const t2 = e2 && e2.data && e2.data.payload;
      return !(!t2 || "UNI_CLOUD_SSE" !== t2.channel || t2.seqId !== this._seqId);
    }
    _receivePushMessage(e2) {
      if (!this._isUniCloudSSE(e2))
        return;
      const t2 = e2 && e2.data && e2.data.payload, { action: n2, messageId: s2, message: r2 } = t2;
      this._payloadQueue.push({ action: n2, messageId: s2, message: r2 }), this._consumMessage();
    }
    _consumMessage() {
      for (; ; ) {
        const e2 = this._payloadQueue.find((e3) => e3.messageId === this._currentMessageId + 1);
        if (!e2)
          break;
        this._currentMessageId++, this._parseMessagePayload(e2);
      }
    }
    _parseMessagePayload(e2) {
      const { action: t2, messageId: n2, message: s2 } = e2;
      "end" === t2 ? this._end({ messageId: n2, message: s2 }) : "message" === t2 && this._appendMessage({ messageId: n2, message: s2 });
    }
    _appendMessage({ messageId: e2, message: t2 } = {}) {
      this.emit("message", t2);
    }
    _end({ messageId: e2, message: t2 } = {}) {
      this.emit("end", t2), this.close();
    }
    _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
    _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
    toJSON() {
      return { appId: this._appId, pushClientId: this._pushClientId, seqId: this._seqId };
    }
    close() {
      this._destroy(), this.emit("close");
    }
  }
  function Hs(e2) {
    e2._initPromiseHub || (e2._initPromiseHub = new I({ createPromise: function() {
      let t2 = Promise.resolve();
      var n2;
      n2 = 1, t2 = new Promise((e3) => {
        setTimeout(() => {
          e3();
        }, n2);
      });
      const s2 = e2.auth();
      return t2.then(() => s2.getLoginState()).then((e3) => e3 ? Promise.resolve() : s2.signInAnonymously());
    } }));
  }
  const Ws = { tcb: Ot, tencent: Ot, aliyun: ye, private: Nt, dcloud: Nt, alipay: zt };
  let Js = new class {
    init(e2) {
      let t2 = {};
      const n2 = Ws[e2.provider];
      if (!n2)
        throw new Error("未提供正确的provider参数");
      t2 = n2.init(e2), Hs(t2), qn(t2), function(e3) {
        const t3 = e3.uploadFile;
        e3.uploadFile = function(e4) {
          return t3.call(this, e4);
        };
      }(t2), function(e3) {
        e3.database = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).database();
          if (this._database)
            return this._database;
          const n3 = Qn(Yn, { uniClient: e3 });
          return this._database = n3, n3;
        }, e3.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = Qn(Yn, { uniClient: e3, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t2), function(e3) {
        e3.getCurrentUserInfo = Os, e3.chooseAndUploadFile = Ls.initChooseAndUploadFile(e3), Object.assign(e3, { get mixinDatacom() {
          return Us(e3);
        } }), e3.SSEChannel = Bs, e3.initSecureNetworkByWeixin = qs(e3), e3.setCustomClientInfo = Ks, e3.importObject = Ns(e3);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e3) => {
        if (!t2[e3])
          return;
        const n3 = t2[e3];
        t2[e3] = function() {
          return n3.apply(t2, Array.from(arguments));
        }, t2[e3] = (/* @__PURE__ */ function(e4, t3) {
          return function(n4) {
            let s2 = false;
            if ("callFunction" === t3) {
              const e5 = n4 && n4.type || u;
              s2 = e5 !== u;
            }
            const r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
            n4 = n4 || {};
            const { success: o2, fail: a2, complete: c2 } = se(n4), l2 = i2.then(() => s2 ? Promise.resolve() : q(K(t3, "invoke"), n4)).then(() => e4.call(this, n4)).then((e5) => s2 ? Promise.resolve(e5) : q(K(t3, "success"), e5).then(() => q(K(t3, "complete"), e5)).then(() => (r2 && Z($, { type: V, content: e5 }), Promise.resolve(e5))), (e5) => s2 ? Promise.reject(e5) : q(K(t3, "fail"), e5).then(() => q(K(t3, "complete"), e5)).then(() => (Z($, { type: V, content: e5 }), Promise.reject(e5))));
            if (!(o2 || a2 || c2))
              return l2;
            l2.then((e5) => {
              o2 && o2(e5), c2 && c2(e5), r2 && Z($, { type: V, content: e5 });
            }, (e5) => {
              a2 && a2(e5), c2 && c2(e5), r2 && Z($, { type: V, content: e5 });
            });
          };
        }(t2[e3], e3)).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e2 = Array.isArray(P) ? P.length : 0, t2 = function() {
      const e3 = Zt(), t3 = tn();
      return t3 && t3.enable && m(t3.space) ? t3.space : e3;
    }();
    if (1 === e2)
      Js = Js.init(t2), Js._isDefault = true;
    else {
      const t3 = ["database", "getCurrentUserInfo", "importObject"];
      let n2;
      n2 = e2 > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", [...["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile"], ...t3].forEach((e3) => {
        Js[e3] = function() {
          if (console.error(n2), -1 === t3.indexOf(e3))
            return Promise.reject(new re({ code: "SYS_ERR", message: n2 }));
          console.error(n2);
        };
      });
    }
    if (Object.assign(Js, { get mixinDatacom() {
      return Us(Js);
    } }), Ts(Js), Js.addInterceptor = M$1, Js.removeInterceptor = F, Js.interceptObject = j, uni.__uniCloud = Js, "app" === T) {
      const e3 = U();
      e3.uniCloud = Js, e3.UniCloudError = re;
    }
    !function() {
      const { failoverEndpoint: e3 } = Zt();
      if (!e3)
        return;
      rn().catch((e4) => {
        console.error("请求故障切换配置失败：", e4);
      });
      const t3 = { fail() {
        const e4 = tn();
        sn(e4 && e4.interval || 0) && rn().catch((e5) => {
          console.error("请求故障切换配置失败：", e5);
        });
      } };
      M$1("callFunction", t3), M$1("database", t3), M$1("uploadFile", t3);
    }();
  })();
  const __className$i = "GenSrcSubHttpDemoHttpDemo";
  const _sfc_main$j = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$i,
    __filename: "src/sub/httpDemo/httpDemo.uvue",
    __name: "httpDemo",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubHttpDemoHttpDemoSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubHttpDemoHttpDemoSharedData", sharedDataClassId: 0 })));
      const __sharedDataScope = vue.useSharedDataScope(__sharedData);
      const mockList = vue.ref([]);
      const loading2 = vue.ref(false);
      const requestStatus = vue.ref("idle");
      const responseData = vue.ref(null);
      const errorMsg = vue.ref("");
      const userInfo = vue.ref("");
      const cloudLoading = vue.ref(false);
      const cloudErrorMsg = vue.ref("");
      const uploadPath = vue.ref(FOO_UPLOAD_PATH);
      const uploadLoading = vue.ref(false);
      const uploadResult = vue.ref("");
      const uploadError = vue.ref("");
      const reachBottomCount = vue.ref(0);
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
      const statusTextClass = vue.computed(() => {
        switch (requestStatus.value) {
          case "loading":
            return "text-_b_hd97706_B";
          case "success":
            return "text-_b_h059669_B";
          case "error":
            return "text-_b_hdc2626_B";
          default:
            return "text-_b_h94a3b8_B";
        }
      });
      const statusBgClass = vue.computed(() => {
        switch (requestStatus.value) {
          case "loading":
            return "bg-_b_hfef9c3_B";
          case "success":
            return "bg-_b_hd1fae5_B";
          case "error":
            return "bg-_b_hfee2e2_B";
          default:
            return "bg-_b_hf1f5f9_B";
        }
      });
      const hasResponseData = vue.computed(() => {
        return responseData.value != null;
      });
      const hasErrorMsg = vue.computed(() => {
        return errorMsg.value.length > 0;
      });
      const responseText = vue.computed(() => {
        const data2 = responseData.value;
        if (data2 == null)
          return "";
        return "id: ".concat(data2.id, ", name: ").concat(data2.name);
      });
      const hasCloudError = vue.computed(() => {
        return cloudErrorMsg.value.length > 0;
      });
      const cloudStatusText = vue.computed(() => {
        if (cloudLoading.value)
          return "连接中";
        if (hasCloudError.value)
          return "连接失败";
        return "已连接";
      });
      const cloudStatusBgClass = vue.computed(() => {
        if (cloudLoading.value)
          return "bg-_b_hfef9c3_B";
        if (hasCloudError.value)
          return "bg-_b_hfee2e2_B";
        return "bg-_b_hccfbf1_B";
      });
      const cloudStatusDotClass = vue.computed(() => {
        if (cloudLoading.value)
          return "bg-_b_hd97706_B";
        if (hasCloudError.value)
          return "bg-_b_hdc2626_B";
        return "bg-_b_h0d9488_B";
      });
      const cloudStatusTextClass = vue.computed(() => {
        if (cloudLoading.value)
          return "text-_b_ha16207_B";
        if (hasCloudError.value)
          return "text-_b_hb91c1c_B";
        return "text-_b_h0f766e_B";
      });
      const hasUploadError = vue.computed(() => {
        return uploadError.value.length > 0;
      });
      const hasUploadResult = vue.computed(() => {
        return uploadResult.value.length > 0;
      });
      const uploadResultText = vue.computed(() => {
        return uploadResult.value;
      });
      function loadMockData() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const list = yield getFooList();
            mockList.value = list;
          } catch (err) {
            uni.__log__("error", "at src/sub/httpDemo/httpDemo.uvue:375", "loadMockData error:", err);
          }
        });
      }
      function fetchRealApi() {
        var _a2, _b;
        return __awaiter(this, void 0, void 0, function* () {
          loading2.value = true;
          requestStatus.value = "loading";
          responseData.value = null;
          errorMsg.value = "";
          try {
            const res = yield foo();
            responseData.value = res;
            requestStatus.value = "success";
          } catch (err) {
            uni.__log__("log", "at src/sub/httpDemo/httpDemo.uvue:395", err, "err");
            requestStatus.value = "error";
            let msg = "请求失败";
            if (UTS.isInstanceOf(err, Error)) {
              msg = err.message;
            } else if (UTS.isInstanceOf(err, UTSJSONObject)) {
              const errMsg = (_b = (_a2 = err.getString("message")) !== null && _a2 !== void 0 ? _a2 : err.getString("msg")) !== null && _b !== void 0 ? _b : err.getString("errMsg");
              if (errMsg != null) {
                msg = errMsg;
              } else {
                msg = UTS.JSON.stringify(err);
              }
            } else if (err != null) {
              msg = "".concat(err);
            }
            errorMsg.value = msg;
          }
          loading2.value = false;
        });
      }
      function getUserInfo() {
        var _a2;
        return __awaiter(this, void 0, void 0, function* () {
          cloudLoading.value = true;
          cloudErrorMsg.value = "";
          try {
            const res = yield Js.importObject("user").getUserInfo();
            userInfo.value = UTS.JSON.stringify((_a2 = res["data"]) !== null && _a2 !== void 0 ? _a2 : res);
            uni.__log__("log", "at src/sub/httpDemo/httpDemo.uvue:427", "res", res);
          } catch (err) {
            cloudErrorMsg.value = "云端数据获取失败，请检查 uniCloud 配置后重试";
            uni.__log__("error", "at src/sub/httpDemo/httpDemo.uvue:431", "getUserInfo error:", err);
          }
          cloudLoading.value = false;
        });
      }
      function uploadFileByPath(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
          if (DEFAULT_OSS_BASE_URL == "" || DEFAULT_OSS_BASE_URL.includes("xxx") || uploadPath.value == "" || uploadPath.value.includes("xxx")) {
            uploadError.value = "请在对应环境的 .env 文件中配置真实的 VITE_UPLOAD_BASEURL 与 VITE_UPLOAD_PATH";
            toast("请先在 .env 中配置真实上传地址");
            return Promise.resolve(null);
          }
          uploadLoading.value = true;
          uploadError.value = "";
          uploadResult.value = "";
          try {
            const ossUrl = yield uploadFooFile(filePath, true, uploadPath.value);
            uploadResult.value = ossUrl;
          } catch (err) {
            let msg = "上传失败";
            if (UTS.isInstanceOf(err, Error)) {
              msg = err.message;
            } else if (err != null) {
              msg = "".concat(err);
            }
            uploadError.value = msg;
          }
          uploadLoading.value = false;
        });
      }
      function chooseAndUpload() {
        if (uploadLoading.value) {
          return null;
        }
        uploadError.value = "";
        uni.chooseImage(new UTSJSONObject({
          count: 1,
          sourceType: ["album", "camera"],
          success: (res) => {
            const paths = res.tempFilePaths;
            if (paths.length <= 0) {
              uploadError.value = "未选择文件";
              return null;
            }
            uploadFileByPath(paths[0]);
          },
          fail: (err) => {
            uni.__log__("log", "at src/sub/httpDemo/httpDemo.uvue:488", "chooseImage fail:", err);
            let errMsg = "";
            if (err != null && err.errMsg != null) {
              errMsg = "".concat(err.errMsg);
            }
            if (errMsg.includes("cancel")) {
              return null;
            }
            uploadError.value = errMsg != "" ? "选择文件失败: ".concat(errMsg) : "选择文件失败";
          }
        }));
      }
      function copyUploadUrl() {
        const url = uploadResult.value;
        if (url == "") {
          return null;
        }
        uni.setClipboardData({
          data: url,
          showToast: false,
          success: () => {
            toastSuccess("链接已复制");
          }
        });
      }
      function previewUploadedImage() {
        const url = uploadResult.value;
        if (url == "") {
          return null;
        }
        uni.previewImage({
          urls: [url]
        });
      }
      function handleScroll(e2) {
        const top = Math.ceil(e2.detail.scrollTop);
        if (top < 0) {
          uni.__log__("log", "at src/sub/httpDemo/httpDemo.uvue:539", "scrollTop:", top);
        }
      }
      function handleScrollToLower() {
        reachBottomCount.value++;
      }
      onNavbarPullDownRefresh(() => {
        loadMockData();
        setTimeout(() => {
          stopNavbarPullDownRefresh();
        }, 600);
      });
      vue.onMounted(() => {
        loadMockData();
      });
      return () => {
        "raw js";
        const n120 = vue.createSharedDataComponent(AppKu, "5b7edf36", {
          layout: "navbar",
          "show-back": true,
          "hide-navbar": false,
          "enable-pull-down-refresh": true,
          "page-style": { "navigationBarTitleText": "HTTP 请求 Demo", "navigationStyle": "custom" }
        }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n119 = vue.createSharedDataComponent(LayoutComponent, "445e0aa3", {
              "show-back": true,
              "hide-navbar": false,
              "enable-pull-down-refresh": true,
              "page-style": { "navigationBarTitleText": "HTTP 请求 Demo", "navigationStyle": "custom" }
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                vue.setSharedDataStyle(__sharedData, 45, { maxWidth: "520px" });
                const n45 = vue.createSharedDataComponent(Card, "4763b9d4", { title: "uniCloud 云对象" }, {
                  "default": () => {
                    vue.setSharedDataStyle(__sharedData, 9, { color: "var(--text-color, #1e293b)" });
                    vue.renderSharedDataEffect(() => {
                      vue.setSharedDataClass(__sharedData, 10, ["weapp-tw-border flex-row items-center px-_b8px_B py-_b4px_B rounded-_b10px_B", cloudStatusBgClass.value]);
                      vue.setSharedDataClass(__sharedData, 11, ["weapp-tw-border w-_b6px_B h-_b6px_B rounded-_b3px_B mr-_b5px_B", cloudStatusDotClass.value]);
                      vue.setSharedDataClass(__sharedData, 12, ["weapp-tw-border text-_b11px_B", cloudStatusTextClass.value]);
                      vue.setSharedData(__sharedData, 13, vue.toDisplayString(cloudStatusText.value));
                    });
                    vue.createSharedDataIf(() => {
                      return vue.setSharedData(__sharedData, 3, vue.toSharedDataBoolean(cloudLoading.value));
                    }, () => {
                    }, () => {
                      return vue.createSharedDataIf(() => {
                        return vue.setSharedData(__sharedData, 4, vue.toSharedDataBoolean(hasCloudError.value));
                      }, () => {
                        vue.renderSharedDataEffect(() => {
                          return vue.setSharedData(__sharedData, 5, vue.toDisplayString(cloudErrorMsg.value));
                        });
                      }, () => {
                        vue.renderSharedDataEffect(() => {
                          return vue.setSharedData(__sharedData, 6, vue.toDisplayString(userInfo.value));
                        });
                      }, 517);
                    }, 261);
                    vue.createSharedDataIf(() => {
                      return vue.setSharedData(__sharedData, 7, vue.toSharedDataBoolean(hasCloudError.value));
                    }, () => {
                      vue.setSharedDataEvent(__sharedData, 8, getUserInfo);
                    });
                  }
                });
                vue.setSharedData(__sharedData, 2, n45.sharedData);
                const n53 = vue.createSharedDataComponent(Card, "47650f56", { title: "Mock 数据列表（ID 为任意类型）" }, {
                  "default": () => {
                    vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 15, vue.createSharedDataVFor(__sharedDataScope, () => {
                      return new UniDynamicSharedData(__sharedDataScope, { bundleKey: "".concat(__className$i, "SharedData"), sharedDataClassId: 1 });
                    })), () => {
                      return mockList.value;
                    }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                      vue.setSharedDataStyle(__sharedData_VFor0, 1, { color: "var(--text-color, #334155)" });
                      vue.renderSharedDataEffect(() => {
                        const _item = _for_item0.value;
                        vue.setSharedData(__sharedData_VFor0, 2, vue.toDisplayString(_item.id));
                        vue.setSharedData(__sharedData_VFor0, 3, vue.toDisplayString(_item.name));
                      });
                      return null;
                    }, (__sharedData_VFor0, item, index) => {
                      return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(index));
                    }, 32);
                  }
                });
                vue.setSharedData(__sharedData, 14, n53.sharedData);
                const n74 = vue.createSharedDataComponent(Card, "47657fd5", { title: "真实 API 请求（拦截器 + 错误处理）" }, {
                  "default": () => {
                    vue.renderSharedDataEffect(() => {
                      vue.setSharedDataClass(__sharedData, 25, ["weapp-tw-border px-_b8px_B py-_b2px_B rounded-_b10px_B", statusBgClass.value]);
                      vue.setSharedDataClass(__sharedData, 26, ["weapp-tw-border text-_b12px_B", statusTextClass.value]);
                      vue.setSharedData(__sharedData, 27, vue.toDisplayString(statusText.value));
                    });
                    vue.createSharedDataIf(() => {
                      return vue.setSharedData(__sharedData, 17, vue.toSharedDataBoolean(hasResponseData.value));
                    }, () => {
                      vue.setSharedDataStyle(__sharedData, 18, { color: "var(--text-secondary, #475569)" });
                      vue.setSharedDataStyle(__sharedData, 19, { backgroundColor: "var(--card-bg, #ffffff)", borderColor: "var(--border-color, #e2e8f0)" });
                      vue.renderSharedDataEffect(() => {
                        return vue.setSharedData(__sharedData, 20, vue.toDisplayString(responseText.value));
                      });
                    });
                    vue.createSharedDataIf(() => {
                      return vue.setSharedData(__sharedData, 21, vue.toSharedDataBoolean(hasErrorMsg.value));
                    }, () => {
                      vue.renderSharedDataEffect(() => {
                        return vue.setSharedData(__sharedData, 22, vue.toDisplayString(errorMsg.value));
                      });
                    });
                    vue.setSharedDataEvent(__sharedData, 23, loadMockData);
                    vue.setSharedDataEvent(__sharedData, 24, fetchRealApi);
                    vue.renderSharedDataEffect(() => {
                      return vue.setSharedData(__sharedData, 28, vue.toDisplayString(loading2.value ? "请求中..." : "真实 API 请求"));
                    });
                  }
                });
                vue.setSharedData(__sharedData, 16, n74.sharedData);
                const n113 = vue.createSharedDataComponent(Card, "476674a8", { title: "文件上传（uploadFooFile → uni.uploadFile）" }, {
                  "default": () => {
                    vue.renderSharedDataEffect(() => {
                      return vue.setSharedData(__sharedData, 43, vue.toDisplayString(uploadPath.value));
                    });
                    vue.createSharedDataIf(() => {
                      return vue.setSharedData(__sharedData, 30, vue.toSharedDataBoolean(uploadLoading.value));
                    }, () => {
                    }, () => {
                      return vue.createSharedDataIf(() => {
                        return vue.setSharedData(__sharedData, 31, vue.toSharedDataBoolean(hasUploadError.value));
                      }, () => {
                        vue.renderSharedDataEffect(() => {
                          return vue.setSharedData(__sharedData, 32, vue.toDisplayString(uploadError.value));
                        });
                      }, () => {
                        return vue.createSharedDataIf(() => {
                          return vue.setSharedData(__sharedData, 33, vue.toSharedDataBoolean(hasUploadResult.value));
                        }, () => {
                          vue.setSharedDataEvent(__sharedData, 34, previewUploadedImage);
                          vue.setSharedDataStyle(__sharedData, 35, { backgroundColor: "var(--card-bg, #ffffff)", borderColor: "var(--border-color, #e2e8f0)" });
                          vue.setSharedDataStyle(__sharedData, 36, { color: "var(--text-color, #475569)" });
                          vue.setSharedDataEvent(__sharedData, 37, copyUploadUrl);
                          vue.setSharedDataStyle(__sharedData, 38, { color: "var(--text-color, #334155)" });
                          vue.setSharedDataStyle(__sharedData, 39, { backgroundColor: "var(--bg-color, #f8fafc)", borderColor: "var(--border-color, #e2e8f0)" });
                          vue.renderSharedDataEffect(() => {
                            const _uploadResultText = uploadResultText.value;
                            vue.setSharedDataAttr(__sharedData, 40, vue.toSharedDataString(_uploadResultText));
                            vue.setSharedData(__sharedData, 41, vue.toDisplayString(_uploadResultText));
                          });
                        }, () => {
                        }, 2053);
                      }, 1797);
                    }, 1541);
                    vue.setSharedDataEvent(__sharedData, 42, chooseAndUpload);
                    vue.renderSharedDataEffect(() => {
                      return vue.setSharedData(__sharedData, 44, vue.toDisplayString(uploadLoading.value ? "上传中..." : "选择图片并上传"));
                    });
                  }
                });
                vue.setSharedData(__sharedData, 29, n113.sharedData);
                vue.setSharedDataEvent(__sharedData, 46, handleScroll);
                vue.setSharedDataEvent(__sharedData, 47, handleScrollToLower);
                vue.setSharedDataStyle(__sharedData, 48, { maxWidth: "520px" });
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedData(__sharedData, 49, vue.toDisplayString(reachBottomCount.value));
                });
              })
            });
            vue.setSharedData(__sharedData, 1, n119.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n120.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$j = {};
  const SrcSubHttpDemoHttpDemo = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["styles", [_style_0$j]]]);
  const __className$h = "GenSrcSubLayoutDemoLayoutDemo";
  const codeTemplate = '<view class="flex flex-col flex-1">\n  <!-- 顶部固定内容（可选） -->\n\n  <scroll-view direction="vertical" class="flex-1 flex flex-col"\n    @scroll="onScroll" @scrolltolower="onLower">\n    <!-- 滚动内容 -->\n  </scroll-view>\n</view>';
  class DemoItem extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            title: { type: String, optional: false },
            subtitle: { type: String, optional: false },
            desc: { type: String, optional: false },
            tag: { type: String, optional: false },
            avatar: { type: String, optional: false },
            color: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = DemoItem.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.title = this.__props__.title;
      this.subtitle = this.__props__.subtitle;
      this.desc = this.__props__.desc;
      this.tag = this.__props__.tag;
      this.avatar = this.__props__.avatar;
      this.color = this.__props__.color;
      delete this.__props__;
    }
  }
  const _sfc_main$i = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$h,
    __filename: "src/sub/layoutDemo/layoutDemo.uvue",
    __name: "layoutDemo",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubLayoutDemoLayoutDemoSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubLayoutDemoLayoutDemoSharedData", sharedDataClassId: 0 })));
      const __sharedDataScope = vue.useSharedDataScope(__sharedData);
      const computedAvailableHeight = vue.computed(() => {
        var _a2;
        return (_a2 = availableHeight.value) !== null && _a2 !== void 0 ? _a2 : 0;
      });
      const demoItems = [
        new DemoItem({ title: "首页", subtitle: "Home", desc: "根容器 flex-1 撑满开发高度，滚动区域在内部自写 scroll-view。", tag: "首页", avatar: "首", color: "#3b82f6" }),
        new DemoItem({ title: "向下滑动", subtitle: "Scroll me", desc: "此列表由内部 scroll-view 滚动，@scroll 会实时更新 scrollTop。", tag: "滚动", avatar: "滚", color: "#10b981" }),
        new DemoItem({ title: "第三项", subtitle: "Item 3", desc: "滚动超出后内部 scroll-view 接管、触底检测独立生效。", tag: "示例", avatar: "3", color: "#f59e0b" }),
        new DemoItem({ title: "第四项", subtitle: "Item 4", desc: "触底时触发 @scrolltolower，次数在上方指标卡累加。", tag: "触底", avatar: "4", color: "#ec4899" }),
        new DemoItem({ title: "第五项", subtitle: "Item 5", desc: "根容器必须为 view（非 scroll-view），避免与布局产生双重滚动冲突。", tag: "规范", avatar: "5", color: "#8b5cf6" }),
        new DemoItem({ title: "第六项", subtitle: "Item 6", desc: "可用高度 computedAvailableHeight 即你要写的高度，框架已算好。", tag: "高度", avatar: "6", color: "#06b6d4" }),
        new DemoItem({ title: "第七项", subtitle: "Item 7", desc: "VITE_TABBAR_MODE=1 时不包含底部 tabbar 区域，底部非编辑区。", tag: "模式", avatar: "7", color: "#6366f1" }),
        new DemoItem({ title: "第八项", subtitle: "Item 8", desc: "按 H5 正常开发即可，无需再手算状态栏/导航栏/tabbar 偏移。", tag: "H5", avatar: "8", color: "#0ea5e9" })
      ];
      const scrollTop = vue.ref(0);
      const reachBottomCount = vue.ref(0);
      function handleScroll(e2) {
        scrollTop.value = Math.ceil(e2.detail.scrollTop);
      }
      function handleScrollToLower() {
        reachBottomCount.value++;
      }
      return () => {
        "raw js";
        const n98 = vue.createSharedDataComponent(AppKu, "07f93669", {
          layout: "navbar",
          "show-back": true,
          "hide-navbar": false,
          "enable-pull-down-refresh": false,
          "page-style": { "navigationBarTitleText": "布局页面示例", "navigationStyle": "custom" }
        }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n97 = vue.createSharedDataComponent(LayoutComponent, "22f580bc", {
              "show-back": true,
              "hide-navbar": false,
              "enable-pull-down-refresh": false,
              "page-style": { "navigationBarTitleText": "布局页面示例", "navigationStyle": "custom" }
            }, {
              "default": () => {
                vue.setSharedDataStyle(__sharedData, 3, { maxWidth: "520px" });
                vue.setSharedData(__sharedData, 4, vue.toDisplayString(codeTemplate));
                vue.renderSharedDataEffect(() => {
                  vue.setSharedData(__sharedData, 8, vue.toDisplayString(computedAvailableHeight.value));
                  vue.setSharedData(__sharedData, 9, vue.toDisplayString(scrollTop.value));
                  vue.setSharedData(__sharedData, 10, vue.toDisplayString(reachBottomCount.value));
                });
                vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 2, vue.createSharedDataVFor(__sharedDataScope, () => {
                  return new UniDynamicSharedData(__sharedDataScope, { bundleKey: "".concat(__className$h, "SharedData"), sharedDataClassId: 1 });
                })), () => {
                  return demoItems;
                }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                  vue.renderSharedDataEffect(() => {
                    const _item = _for_item0.value;
                    const __backgroundColor_item_color = { backgroundColor: _item.color };
                    vue.setSharedDataStyle(__sharedData_VFor0, 1, __backgroundColor_item_color);
                    vue.setSharedData(__sharedData_VFor0, 2, vue.toDisplayString(_item.avatar));
                    vue.setSharedData(__sharedData_VFor0, 3, vue.toDisplayString(_item.title));
                    vue.setSharedData(__sharedData_VFor0, 4, vue.toDisplayString(_item.subtitle));
                    vue.setSharedDataStyle(__sharedData_VFor0, 5, __backgroundColor_item_color);
                    vue.setSharedData(__sharedData_VFor0, 6, vue.toDisplayString(_item.tag));
                    vue.setSharedData(__sharedData_VFor0, 7, vue.toDisplayString(_item.desc));
                  });
                  return null;
                }, (__sharedData_VFor0, item, index) => {
                  return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(index));
                });
                vue.setSharedDataEvent(__sharedData, 5, handleScroll);
                vue.setSharedDataEvent(__sharedData, 6, handleScrollToLower);
                vue.setSharedDataStyle(__sharedData, 7, { maxWidth: "520px" });
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedData(__sharedData, 11, vue.toDisplayString(reachBottomCount.value));
                });
              }
            });
            vue.setSharedData(__sharedData, 1, n97.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n98.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$i = {};
  const SrcSubLayoutDemoLayoutDemo = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["styles", [_style_0$i]]]);
  function uniq(array) {
    let index = -1;
    const length = array.length;
    const result = [];
    while (++index < length) {
      const value = array[index];
      if (result.indexOf(value) < 0) {
        result.push(value);
      }
    }
    return result;
  }
  function chunk(array, size) {
    const length = array ? array.length : 0;
    if (length == 0 || size < 1) {
      return [];
    }
    let index = 0;
    const step = size > 0 ? size : 1;
    const result = [];
    while (index < length) {
      const nextIndex = index + step;
      result.push(array.slice(index, nextIndex));
      index = nextIndex;
    }
    return result;
  }
  function shuffle(array) {
    const length = array ? array.length : 0;
    if (length == 0) {
      return [];
    }
    let index = -1;
    const lastIndex = length - 1;
    const result = array.slice();
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
      const key2 = pathKeys[index++];
      if (typeof curr == "object") {
        const jsonObj = curr;
        curr = jsonObj[key2];
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
      const copy2 = [];
      for (let i2 = 0; i2 < arr.length; i2++) {
        const item = cloneDeep(arr[i2]);
        if (item != null) {
          copy2.push(item);
        }
      }
      return copy2;
    }
    const obj = value;
    const res = new UTSJSONObject({});
    const keys = UTSJSONObject.keys(obj);
    for (let i2 = 0; i2 < keys.length; i2++) {
      const k2 = keys[i2];
      res[k2] = cloneDeep(obj[k2]);
    }
    return res;
  }
  function camelCase(string) {
    if (string == "")
      return "";
    const words = string.replace(/[-_]+/g, " ").trim().split(" ");
    let result = "";
    for (let i2 = 0; i2 < words.length; i2++) {
      const word = words[i2];
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
    for (let i2 = 0; i2 < words.length; i2++) {
      const w2 = words[i2];
      if (w2.length > 0) {
        result.push(w2.toLowerCase());
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
      const fn2 = func;
      fn2();
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
  const __className$g = "GenSrcSubLodashLodash";
  const _sfc_main$h = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$g,
    __filename: "src/sub/lodash/lodash.uvue",
    __name: "lodash",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubLodashLodashSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubLodashLodashSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const appStore = useAppStore();
      const isDark = vue.computed(() => {
        return appStore.state.isDark;
      });
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
      const rawObj = new UTSJSONObject({
        user: new UTSJSONObject({
          info: new UTSJSONObject({
            name: "UniAppX Developer",
            age: 25
          })
        })
      });
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
        const user2 = clonedObj.value["user"];
        const info = user2["info"];
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
      onNavbarPullDownRefresh(() => {
        setTimeout(() => {
          stopNavbarPullDownRefresh();
        }, 800);
      });
      return () => {
        "raw js";
        const _component_input = vue.resolveComponent("input");
        const n65 = vue.createSharedDataComponent(AppKu, "48c5cfb9", {
          layout: "navbar",
          "show-back": true,
          "hide-navbar": false,
          "enable-pull-down-refresh": true,
          "page-style": { "navigationBarTitleText": "Lodash 工具库", "navigationStyle": "custom" }
        }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n64 = vue.createSharedDataComponent(LayoutComponent, "2e90c4f5", {
              "show-back": true,
              "hide-navbar": false,
              "enable-pull-down-refresh": true,
              "page-style": { "navigationBarTitleText": "Lodash 工具库", "navigationStyle": "custom" }
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedDataClass(__sharedData, 20, ["weapp-tw-border flex flex-col p-_b16px_B", isDark.value ? "bg-_b_h0f172a_B" : "bg-_b_hf8fafc_B"]);
                });
                const n62 = vue.createSharedDataComponent(Card, "2e90d019", { title: "Lodash 工具库 (iRainna-lodash)" }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    vue.setSharedDataEvent(__sharedData, 4, handleShuffle);
                    vue.setSharedDataEvent(__sharedData, 5, mutateClonedObj);
                    vue.renderSharedDataEffect(() => {
                      vue.setSharedData(__sharedData, 8, vue.toDisplayString(JSON.stringify(rawArray.value)));
                      vue.setSharedData(__sharedData, 9, vue.toDisplayString(JSON.stringify(uniqArray.value)));
                      vue.setSharedData(__sharedData, 10, vue.toDisplayString(chunkedArray.value));
                      vue.setSharedData(__sharedData, 11, vue.toDisplayString(getNameResult.value));
                      vue.setSharedData(__sharedData, 12, vue.toDisplayString(getFallbackResult.value));
                      vue.setSharedData(__sharedData, 13, vue.toDisplayString(rawObjAge.value));
                      vue.setSharedData(__sharedData, 14, vue.toDisplayString(clonedObjAge.value));
                    });
                    const n34 = vue.createSharedDataComponentWithFallback(_component_input, "b8ed9194", {
                      value: () => {
                        return inputText.value;
                      },
                      "onUpdate:value": () => {
                        return (_value) => {
                          return inputText.value = _value;
                        };
                      },
                      class: "w-full h-_b36px_B px-_b12px_B rounded-_b6px_B border-_b1px_B border-solid border-_b_hcbd5e1_B text-_b13px_B text-_b_h1e293b_B",
                      placeholder: "请输入待转换文本"
                    });
                    vue.setSharedData(__sharedData, 3, n34 == null ? void 0 : n34.sharedData);
                    vue.setSharedDataEvent(__sharedData, 6, handleDebounceClick);
                    vue.setSharedDataEvent(__sharedData, 7, generateRandom);
                    vue.renderSharedDataEffect(() => {
                      vue.setSharedData(__sharedData, 15, vue.toDisplayString(camelCaseResult.value));
                      vue.setSharedData(__sharedData, 16, vue.toDisplayString(kebabCaseResult.value));
                      vue.setSharedData(__sharedData, 17, vue.toDisplayString(capitalizeResult.value));
                      vue.setSharedData(__sharedData, 18, vue.toDisplayString(debouncedCount.value));
                      vue.setSharedData(__sharedData, 19, vue.toDisplayString(randomValue.value));
                    });
                  })
                });
                vue.setSharedData(__sharedData, 2, n62.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n64.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n65.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$h = {};
  const SrcSubLodashLodash = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["styles", [_style_0$h]]]);
  const __className$f = "GenSrcComponentsNestedScrollNestedScroll";
  const _sfc_main$g = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$f,
    __filename: "src/components/NestedScroll/NestedScroll.uvue",
    __name: "NestedScroll",
    props: {
      /** 是否开启下拉刷新 */
      enablePullDown: {
        type: Boolean,
        default: true
      },
      /** 是否开启上拉触底加载 */
      enableLoadMore: {
        type: Boolean,
        default: true
      },
      /** 下拉刷新状态（支持 v-model:refreshing） */
      refreshing: {
        type: Boolean,
        default: false
      },
      /** 上拉加载状态（支持 v-model:loading） */
      loading: {
        type: Boolean,
        default: false
      },
      /** 是否已加载完所有数据（没有更多了） */
      finished: {
        type: Boolean,
        default: false
      },
      /** 是否加载失败（展示重试按钮） */
      error: {
        type: Boolean,
        default: false
      },
      /** 是否空数据状态 */
      empty: {
        type: Boolean,
        default: false
      },
      /** 空状态文案 */
      emptyText: {
        type: String,
        default: "暂无数据"
      },
      /** 上拉加载中文案 */
      loadingText: {
        type: String,
        default: "正在加载中..."
      },
      /** 没有更多数据文案 */
      finishedText: {
        type: String,
        default: "— 没有更多了 —"
      },
      /** 加载失败文案 */
      errorText: {
        type: String,
        default: "加载失败"
      },
      /** 是否显示滚动条 */
      showScrollbar: {
        type: Boolean,
        default: false
      },
      /** 是否开启回弹效果 */
      bounces: {
        type: Boolean,
        default: true
      },
      /** 下拉刷新阈值，单位 px */
      refresherThreshold: {
        type: Number,
        default: 60
      },
      /** 下拉刷新区域背景颜色 */
      refresherBackground: {
        type: String,
        default: "transparent"
      },
      /** 头部是否粘性吸顶（为 true 时 header 插槽将在顶部固定吸附，不随列表滚出） */
      affixHeader: {
        type: Boolean,
        default: false
      },
      /** 是否显示一键返回顶部按钮 */
      showBackToTop: {
        type: Boolean,
        default: true
      },
      /** 返回顶部按钮显示/隐藏的滚动距离阈值，单位 px */
      backToTopThreshold: {
        type: Number,
        default: 300
      },
      /** 返回顶部按钮距离底部的距离，单位 px（支持自定义高度，默认 100px 避免底部遮挡） */
      backToTopBottom: {
        type: Number,
        default: 100
      },
      /** 返回顶部按钮距离右侧的距离，单位 px */
      backToTopRight: {
        type: Number,
        default: 20
      },
      /** 返回顶部是否启用平滑动画滚动 */
      scrollWithAnimation: {
        type: Boolean,
        default: true
      }
    },
    emits: ["refresh", "loadMore", "load-more", "update:refreshing", "update:loading", "scroll", "backToTop", "back-to-top"],
    setup(__props, _a2) {
      var __expose = _a2.expose, __emit = _a2.emit;
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcComponentsNestedScrollNestedScrollSharedData", sharedDataClassId: 0 })));
      const props = __props;
      const emit = __emit;
      const slots = vue.useSlots();
      const hasHeaderSlot = vue.computed(() => {
        return slots["header"] != null;
      });
      const hasAffixSlot = vue.computed(() => {
        return slots["affix"] != null;
      });
      const hasRefresherSlot = vue.computed(() => {
        return slots["refresher"] != null;
      });
      const hasBackToTopSlot = vue.computed(() => {
        return slots["backToTop"] != null;
      });
      const hasEmptySlot = vue.computed(() => {
        return slots["empty"] != null;
      });
      const hasFooterSlot = vue.computed(() => {
        return slots["footer"] != null;
      });
      const hasLoadingSlot = vue.computed(() => {
        return slots["loading"] != null;
      });
      const hasErrorSlot = vue.computed(() => {
        return slots["error"] != null;
      });
      const hasFinishedSlot = vue.computed(() => {
        return slots["finished"] != null;
      });
      const refresherDefaultStyle = vue.computed(() => {
        return hasRefresherSlot.value ? "none" : "black";
      });
      const appStore = useAppStore();
      const isDark = vue.computed(() => {
        return appStore.state.isDark;
      });
      const innerRefreshing = vue.ref(props.refreshing);
      const scrollTop = vue.ref(0);
      const oldScrollTop = vue.ref(0);
      const showBackToTopBtn = vue.ref(false);
      const innerScrollWithAnimation = vue.ref(props.scrollWithAnimation);
      let refreshTimeoutId = null;
      let isMountedReady = false;
      vue.onMounted(() => {
        setTimeout(() => {
          isMountedReady = true;
        }, 400);
      });
      function endRefresh() {
        if (refreshTimeoutId != null) {
          clearTimeout(refreshTimeoutId);
          refreshTimeoutId = null;
        }
        innerRefreshing.value = false;
        emit("update:refreshing", false);
      }
      function endLoadMore() {
        emit("update:loading", false);
      }
      vue.watch(() => {
        return props.refreshing;
      }, (val) => {
        innerRefreshing.value = val;
        if (!val && refreshTimeoutId != null) {
          clearTimeout(refreshTimeoutId);
          refreshTimeoutId = null;
        }
      });
      function handleRefresherRefresh() {
        if (!isMountedReady) {
          endRefresh();
          return null;
        }
        innerRefreshing.value = true;
        emit("update:refreshing", true);
        emit("refresh");
        if (refreshTimeoutId != null) {
          clearTimeout(refreshTimeoutId);
        }
        refreshTimeoutId = setTimeout(() => {
          endRefresh();
        }, 6e3);
      }
      function handleRefresherRestore() {
        if (refreshTimeoutId != null) {
          clearTimeout(refreshTimeoutId);
          refreshTimeoutId = null;
        }
        innerRefreshing.value = false;
        emit("update:refreshing", false);
      }
      function handleScroll(e2) {
        const currentY = e2.detail.scrollTop;
        oldScrollTop.value = currentY;
        emit("scroll", e2);
        if (props.showBackToTop) {
          showBackToTopBtn.value = currentY > props.backToTopThreshold;
        }
      }
      function scrollToTop(animate = true) {
        innerScrollWithAnimation.value = animate;
        scrollTop.value = oldScrollTop.value;
        vue.nextTick(() => {
          scrollTop.value = 0;
        });
        emit("backToTop");
        emit("back-to-top");
      }
      function handleScrollToLower() {
        if (!props.enableLoadMore || props.loading || props.finished || props.error) {
          return null;
        }
        emit("update:loading", true);
        emit("loadMore");
        emit("load-more");
      }
      function handleRetry() {
        emit("update:loading", true);
        emit("loadMore");
        emit("load-more");
      }
      __expose({
        endRefresh,
        endLoadMore,
        scrollToTop
      });
      return () => {
        "raw js";
        const _component_uni_icons = __easycom_0$2;
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 0, vue.toSharedDataBoolean(hasAffixSlot.value || __props.affixHeader && hasHeaderSlot.value));
        }, () => {
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 1, vue.toSharedDataBoolean(hasAffixSlot.value));
          }, () => {
            vue.createSharedDataSlot("affix", null, null);
          }, () => {
            vue.createSharedDataSlot("header", null, null);
          }, 261);
        });
        vue.renderSharedDataEffect(() => {
          vue.setSharedDataAttr(__sharedData, 35, vue.toSharedDataNumber(scrollTop.value));
          vue.setSharedDataAttr(__sharedData, 36, vue.toSharedDataAttrBoolean(innerScrollWithAnimation.value, false));
          vue.setSharedDataAttr(__sharedData, 37, vue.toSharedDataAttrBoolean(__props.showScrollbar, true));
          vue.setSharedDataAttr(__sharedData, 38, vue.toSharedDataAttrBoolean(__props.enablePullDown, false));
          vue.setSharedDataAttr(__sharedData, 39, vue.toSharedDataAttrBoolean(innerRefreshing.value, false));
          vue.setSharedDataAttr(__sharedData, 40, vue.toSharedDataNumber(__props.refresherThreshold));
          vue.setSharedDataAttr(__sharedData, 41, vue.toSharedDataScrollViewRefresherDefaultStyle(refresherDefaultStyle.value));
          vue.setSharedDataAttr(__sharedData, 42, vue.toSharedDataColor(__props.refresherBackground));
        });
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 8, vue.toSharedDataBoolean(hasHeaderSlot.value && !__props.affixHeader));
        }, () => {
          vue.createSharedDataSlot("header", null, null);
        });
        vue.createSharedDataSlot("default", null, null);
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 9, vue.toSharedDataBoolean(__props.empty && !__props.loading && !innerRefreshing.value));
        }, () => {
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 10, vue.toSharedDataBoolean(hasEmptySlot.value));
          }, () => {
            vue.createSharedDataSlot("empty", null, null);
          }, () => {
            vue.renderSharedDataEffect(() => {
              vue.setSharedDataClass(__sharedData, 11, ["weapp-tw-border wtu-vrhq3o-c", isDark.value ? "wtu-178q7e8-d" : "wtu-1px7i9c-e"]);
              vue.setSharedData(__sharedData, 12, vue.toDisplayString(__props.emptyText));
            });
          }, 1029);
        });
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 13, vue.toSharedDataBoolean(hasFooterSlot.value));
        }, () => {
          vue.createSharedDataSlot("footer", {
            loading: () => {
              return __props.loading;
            },
            finished: () => {
              return __props.finished;
            },
            error: () => {
              return __props.error;
            }
          }, (data2) => {
            return vue.setSharedData(__sharedData, 14, data2);
          });
        }, () => {
          return vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 15, vue.toSharedDataBoolean(!__props.empty && __props.enableLoadMore && (__props.loading || __props.error || __props.finished)));
          }, () => {
            vue.createSharedDataIf(() => {
              return vue.setSharedData(__sharedData, 16, vue.toSharedDataBoolean(__props.loading));
            }, () => {
              vue.createSharedDataIf(() => {
                return vue.setSharedData(__sharedData, 17, vue.toSharedDataBoolean(hasLoadingSlot.value));
              }, () => {
                vue.createSharedDataSlot("loading", null, null);
              }, () => {
                vue.renderSharedDataEffect(() => {
                  vue.setSharedDataClass(__sharedData, 18, ["weapp-tw-border wtu-f6ymsx-h wtu-1wi8z8l-i", isDark.value ? "wtu-1px7i9c-e" : "wtu-178q7e8-d"]);
                  vue.setSharedData(__sharedData, 19, vue.toDisplayString(__props.loadingText));
                });
              }, 2053);
            }, () => {
              return vue.createSharedDataIf(() => {
                return vue.setSharedData(__sharedData, 20, vue.toSharedDataBoolean(__props.error));
              }, () => {
                vue.createSharedDataIf(() => {
                  return vue.setSharedData(__sharedData, 21, vue.toSharedDataBoolean(hasErrorSlot.value));
                }, () => {
                  vue.createSharedDataSlot("error", null, null);
                }, () => {
                  vue.setSharedDataEvent(__sharedData, 22, handleRetry);
                  vue.renderSharedDataEffect(() => {
                    return vue.setSharedData(__sharedData, 23, vue.toDisplayString(__props.errorText));
                  });
                }, 2821);
              }, () => {
                return vue.createSharedDataIf(() => {
                  return vue.setSharedData(__sharedData, 24, vue.toSharedDataBoolean(__props.finished));
                }, () => {
                  vue.createSharedDataIf(() => {
                    return vue.setSharedData(__sharedData, 25, vue.toSharedDataBoolean(hasFinishedSlot.value));
                  }, () => {
                    vue.createSharedDataSlot("finished", null, null);
                  }, () => {
                    vue.renderSharedDataEffect(() => {
                      vue.setSharedDataClass(__sharedData, 26, ["weapp-tw-border wtu-f6ymsx-h", isDark.value ? "wtu-odchv3-n" : "wtu-1pg0rk9-o"]);
                      vue.setSharedData(__sharedData, 27, vue.toDisplayString(__props.finishedText));
                    });
                  }, 3333);
                });
              }, 2565);
            }, 2309);
          });
        }, 1541);
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 28, vue.toSharedDataBoolean(hasRefresherSlot.value));
        }, () => {
          vue.createSharedDataSlot("refresher", { refreshing: () => {
            return innerRefreshing.value;
          } }, (data2) => {
            return vue.setSharedData(__sharedData, 29, data2);
          });
        });
        vue.setSharedDataEvent(__sharedData, 30, handleRefresherRefresh);
        vue.setSharedDataEvent(__sharedData, 31, handleRefresherRestore);
        vue.setSharedDataEvent(__sharedData, 32, handleRefresherRestore);
        vue.setSharedDataEvent(__sharedData, 33, handleScrollToLower);
        vue.setSharedDataEvent(__sharedData, 34, handleScroll);
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 2, vue.toSharedDataBoolean(__props.showBackToTop && showBackToTopBtn.value));
        }, () => {
          vue.renderSharedDataEffect(() => {
            return vue.setSharedDataStyle(__sharedData, 7, { bottom: "".concat(__props.backToTopBottom, "px"), right: "".concat(__props.backToTopRight, "px") });
          });
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 3, vue.toSharedDataBoolean(hasBackToTopSlot.value));
          }, () => {
            vue.createSharedDataSlot("backToTop", null, null);
          }, () => {
            vue.renderSharedDataEffect(() => {
              return vue.setSharedDataClass(__sharedData, 5, ["weapp-tw-border wtu-7sfj7s-p wtu-5bkvd3-q wtu-1h0cccv-r wtu-1r51oc-8 wtu-6uw29c-9 wtu-pcogrl-1 wtu-zbsbgg-g wtu-mhthbu-s wtu-1t3hec6-t", isDark.value ? "wtu-wfz5l7-u wtu-pot3a9-v" : "wtu-1ero0hd-w wtu-lrk62k-x"]);
            });
            const n62 = vue.createSharedDataComponentWithFallback(_component_uni_icons, "6a09d1dc", {
              type: "top",
              size: "20",
              color: () => {
                return isDark.value ? "#cbd5e1" : "#475569";
              }
            });
            vue.setSharedData(__sharedData, 4, n62 == null ? void 0 : n62.sharedData);
          }, 3845);
          vue.setSharedDataEvent(__sharedData, 6, () => {
            return scrollToTop(true);
          });
        });
        return __sharedData;
      };
    }
  });
  const _style_0$g = {};
  const _style_1$7 = {};
  const NestedScroll = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["styles", [_style_0$g, _style_1$7]]]);
  const __className$e = "GenSrcSubNestedScrollNestedScroll";
  let ArticleItem$1 = class ArticleItem2 extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            id: { type: Number, optional: false },
            title: { type: String, optional: false },
            summary: { type: String, optional: false },
            category: { type: String, optional: false },
            categoryBg: { type: String, optional: false },
            categoryColor: { type: String, optional: false },
            time: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = ArticleItem2.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.id = this.__props__.id;
      this.title = this.__props__.title;
      this.summary = this.__props__.summary;
      this.category = this.__props__.category;
      this.categoryBg = this.__props__.categoryBg;
      this.categoryColor = this.__props__.categoryColor;
      this.time = this.__props__.time;
      delete this.__props__;
    }
  };
  const _sfc_main$f = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$e,
    __filename: "src/sub/nested-scroll/nested-scroll.uvue",
    __name: "nested-scroll",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubNestedScrollNestedScrollSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubNestedScrollNestedScrollSharedData", sharedDataClassId: 0 })));
      const __sharedDataScope = vue.useSharedDataScope(__sharedData);
      const appStore = useAppStore();
      const isDark = vue.computed(() => {
        return appStore.state.isDark;
      });
      vue.onMounted(() => {
        setPageScrollEnabled(false);
      });
      vue.onUnmounted(() => {
        setPageScrollEnabled(true);
      });
      const articleScrollRef = vue.ref(null);
      const articleList = vue.ref([]);
      const articleRefreshing = vue.ref(false);
      const articleLoading = vue.ref(false);
      const articleFinished = vue.ref(false);
      const articleError = vue.ref(false);
      const simStep = vue.ref(1);
      const simStatusText = vue.ref("【第 1 步】首次加载 2 条数据（未超出底部），800ms后将自动掉接口补齐...");
      function generateArticlesData(start, count, stageName) {
        const list = [];
        const categories = ["原生渲染", "性能调优", "工程化", "UTS深度解析"];
        const bgs = ["#e0e7ff", "#fef3c7", "#dcfce7", "#f3e8ff"];
        const colors = ["#4338ca", "#d97706", "#16a34a", "#7e22ce"];
        for (let i2 = start; i2 < start + count; i2++) {
          const cIdx = i2 % 4;
          list.push(new ArticleItem$1({
            id: i2,
            title: "uni-app X 极速体验与架构实践 #".concat(i2, "（").concat(stageName, "）"),
            summary: "流式数据单元 #".concat(i2, "，手势平滑通透，支持超高刷流畅滑动，无缝嵌套联动。"),
            category: categories[cIdx],
            categoryBg: bgs[cIdx],
            categoryColor: colors[cIdx],
            time: "刚刚"
          }));
        }
        return list;
      }
      function autoLoadFillScreen() {
        simStep.value = 2;
        articleLoading.value = true;
        simStatusText.value = "【第 2 步】检测到数据未超出底部，正在自动调用接口追加数据...";
        setTimeout(() => {
          const nextData = generateArticlesData(3, 6, "自动补齐数据");
          const combined = [];
          for (let i2 = 0; i2 < articleList.value.length; i2++) {
            combined.push(articleList.value[i2]);
          }
          for (let i2 = 0; i2 < nextData.length; i2++) {
            combined.push(nextData[i2]);
          }
          articleList.value = combined;
          articleLoading.value = false;
          simStep.value = 3;
          simStatusText.value = "【第 2 步完成】数据已超出屏幕！请向上滑动触底，第3次加载将模拟报错(500)";
        }, 1e3);
      }
      function onArticleLoadMore() {
        if (articleFinished.value) {
          return null;
        }
        if (simStep.value == 3 && !articleError.value) {
          articleLoading.value = true;
          simStatusText.value = "【第 3 步进行中】正在发起第 3 次请求... 模拟网络 500 异常";
          setTimeout(() => {
            articleLoading.value = false;
            articleError.value = true;
            simStatusText.value = "【第 3 步报错】模拟 500 接口异常！请点击底部「点击重试」再次加载";
            uni.showToast({
              title: "模拟接口异常：500 Internal Error",
              icon: "none"
            });
          }, 700);
          return null;
        }
        if (articleError.value) {
          articleError.value = false;
          articleLoading.value = true;
          simStep.value = 4;
          simStatusText.value = "【第 4 步】已发起重试请求，正在重新拉取接口数据...";
          setTimeout(() => {
            const finalItems = generateArticlesData(9, 2, "终态数据");
            const combined = [];
            for (let i2 = 0; i2 < articleList.value.length; i2++) {
              combined.push(articleList.value[i2]);
            }
            for (let i2 = 0; i2 < finalItems.length; i2++) {
              combined.push(finalItems[i2]);
            }
            articleList.value = combined;
            articleLoading.value = false;
            articleFinished.value = true;
            simStep.value = 5;
            simStatusText.value = "【全部完成】🎉 重试成功！没有更多数据了（下拉列表可重新再来一遍）";
            uni.showToast({
              title: "重试成功！数据已全部加载",
              icon: "success"
            });
          }, 800);
          return null;
        }
        articleLoading.value = true;
        setTimeout(() => {
          articleLoading.value = false;
        }, 600);
      }
      function startFullSimulation() {
        articleError.value = false;
        articleFinished.value = false;
        articleRefreshing.value = false;
        articleLoading.value = false;
        articleList.value = generateArticlesData(1, 2, "首批数据");
        simStep.value = 1;
        simStatusText.value = "【第 1 步】首批返回 2 条数据（未超出底部），正在启动自动补齐...";
        setTimeout(() => {
          if (simStep.value == 1) {
            autoLoadFillScreen();
          }
        }, 400);
      }
      function onArticleRefresh() {
        articleRefreshing.value = true;
        articleError.value = false;
        articleFinished.value = false;
        articleLoading.value = false;
        simStep.value = 1;
        simStatusText.value = "【下拉刷新中】正在极速吞吐拉取首批数据...";
        setTimeout(() => {
          articleList.value = generateArticlesData(1, 2, "首批数据");
          articleRefreshing.value = false;
          simStatusText.value = "【第 1 步】首批仅返回 2 条数据（未超出底部），正在自动补齐...";
          uni.showToast({ title: "刷新成功，正在追加数据", icon: "none" });
          setTimeout(() => {
            if (simStep.value == 1) {
              autoLoadFillScreen();
            }
          }, 400);
        }, 700);
      }
      function triggerEmpty() {
        articleList.value = [];
        articleError.value = false;
        articleFinished.value = true;
        simStep.value = 5;
        simStatusText.value = "【已清空数据】触发空列表缺省兜底展示";
        uni.showToast({ title: "已清空数据，触发空态兜底", icon: "none" });
      }
      function triggerReset() {
        startFullSimulation();
        uni.showToast({ title: "已重新开始完整流程模拟", icon: "success" });
      }
      const customBottom = vue.ref(120);
      function toggleBottomPosition() {
        if (customBottom.value == 120) {
          customBottom.value = 160;
        } else {
          customBottom.value = 120;
        }
        uni.showToast({
          title: "回顶按钮底部边距设为 ".concat(customBottom.value, "px"),
          icon: "none"
        });
      }
      function triggerScrollToTop() {
        var _a2;
        (_a2 = articleScrollRef.value) === null || _a2 === void 0 ? null : _a2.$callMethod("scrollToTop", true);
      }
      function onBackToTop() {
        uni.showToast({ title: "已平滑滚动返回顶部", icon: "none" });
      }
      startFullSimulation();
      return () => {
        "raw js";
        const _setTemplateRef = vue.createSharedDataTemplateRefSetter();
        const _component_uni_icons = __easycom_0$2;
        const n62 = vue.createSharedDataComponent(AppKu, "bfa449d2", {
          layout: "navbar",
          "show-back": true,
          "hide-navbar": false,
          "enable-pull-down-refresh": false,
          "page-style": { "navigationBarTitleText": "NestedScroll 自研嵌套滚动", "navigationStyle": "custom" }
        }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n61 = vue.createSharedDataComponent(LayoutComponent, "4c2370f2", {
              "show-back": true,
              "hide-navbar": false,
              "enable-pull-down-refresh": false,
              "page-style": { "navigationBarTitleText": "NestedScroll 自研嵌套滚动", "navigationStyle": "custom" }
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedDataClass(__sharedData, 29, ["weapp-tw-border flex flex-col flex-1", isDark.value ? "bg-_b_h0f172a_B" : "bg-_b_hf8fafc_B"]);
                });
                const n58 = vue.createSharedDataComponent(NestedScroll, "4c237ff6", {
                  refreshing: () => {
                    return articleRefreshing.value;
                  },
                  "onUpdate:refreshing": () => {
                    return (_value) => {
                      return articleRefreshing.value = _value;
                    };
                  },
                  loading: () => {
                    return articleLoading.value;
                  },
                  "onUpdate:loading": () => {
                    return (_value) => {
                      return articleLoading.value = _value;
                    };
                  },
                  "affix-header": true,
                  finished: () => {
                    return articleFinished.value;
                  },
                  error: () => {
                    return articleError.value;
                  },
                  empty: () => {
                    return articleList.value.length === 0;
                  },
                  "show-back-to-top": true,
                  "back-to-top-threshold": 200,
                  "back-to-top-bottom": () => {
                    return customBottom.value;
                  },
                  "back-to-top-right": 20,
                  onRefresh: () => {
                    return onArticleRefresh;
                  },
                  onLoadMore: () => {
                    return onArticleLoadMore;
                  },
                  onBackToTop: () => {
                    return onBackToTop;
                  }
                }, {
                  "affix": () => {
                    vue.setSharedDataEvent(__sharedData, 3, triggerEmpty);
                    vue.setSharedDataEvent(__sharedData, 4, triggerReset);
                    vue.setSharedDataEvent(__sharedData, 5, triggerScrollToTop);
                    vue.setSharedDataEvent(__sharedData, 6, toggleBottomPosition);
                    vue.renderSharedDataEffect(() => {
                      const _isDark = isDark.value;
                      const _simStep = simStep.value;
                      vue.setSharedDataClass(__sharedData, 7, ["weapp-tw-border m-_b14px_B p-_b16px_B rounded-_b14px_B border-_b1px_B border-solid shadow-xs", _isDark ? "bg-_b_h1e293b_B border-_b_h334155_B" : "bg-_b_he0e7ff_B border-_b_hc7d2fe_B"]);
                      vue.setSharedDataClass(__sharedData, 8, ["weapp-tw-border text-_b15px_B font-bold", _isDark ? "text-_b_hf1f5f9_B" : "text-_b_h1e293b_B"]);
                      vue.setSharedDataClass(__sharedData, 9, ["weapp-tw-border p-_b8px_B rounded-_b8px_B my-_b8px_B flex flex-row items-center border-_b1px_B border-solid", _isDark ? "bg-_b_h0f172a_B_f60 border-_b_h334155_B" : "bg-white_f80 border-_b_hc7d2fe_B"]);
                      vue.setSharedData(__sharedData, 10, vue.toDisplayString(_simStep == 1 || _simStep == 2 ? "⏳" : _simStep == 3 ? articleError.value ? "🚨" : "⚡" : _simStep >= 4 ? "🎉" : "💡"));
                      vue.setSharedDataClass(__sharedData, 11, ["weapp-tw-border text-_b11px_B font-medium leading-_b16px_B flex-1", articleError.value ? "text-_b_hdc2626_B" : _simStep >= 4 ? "text-_b_h16a34a_B" : _isDark ? "text-_b_h38bdf8_B" : "text-_b_h4338ca_B"]);
                      vue.setSharedData(__sharedData, 12, vue.toDisplayString(simStatusText.value));
                      vue.setSharedDataClass(__sharedData, 13, ["weapp-tw-border flex flex-row items-center justify-between mt-_b8px_B pt-_b6px_B border-t-_b1px_B border-solid", _isDark ? "border-_b_h334155_B" : "border-_b_hc7d2fe_B"]);
                      vue.setSharedDataClass(__sharedData, 14, ["weapp-tw-border text-_b11px_B", _isDark ? "text-_b_h94a3b8_B" : "text-_b_h475569_B"]);
                      vue.setSharedData(__sharedData, 15, vue.toDisplayString(customBottom.value));
                    });
                  },
                  "refresher": () => {
                    vue.renderSharedDataEffect(() => {
                      const _articleRefreshing = articleRefreshing.value;
                      vue.setSharedData(__sharedData, 16, vue.toDisplayString(_articleRefreshing ? "🚀" : "⚓"));
                      vue.setSharedDataClass(__sharedData, 17, ["weapp-tw-border text-_b12px_B font-bold", isDark.value ? "text-_b_h38bdf8_B" : "text-_b_h0957de_B"]);
                      vue.setSharedData(__sharedData, 18, vue.toDisplayString(_articleRefreshing ? "自定义下拉中：数据正在极速吞吐..." : "松开手指立即触发自定义刷新"));
                    });
                  },
                  "backToTop": vue.withSharedDataVaporCtx(() => {
                    vue.renderSharedDataEffect(() => {
                      return vue.setSharedDataClass(__sharedData, 20, ["weapp-tw-border px-_b12px_B py-_b8px_B rounded-full flex flex-row items-center border-_b1px_B border-solid shadow-md active_copacity-75", isDark.value ? "bg-_b_h0284c7_B border-_b_h38bdf8_B" : "bg-_b_h0957de_B border-_b_h1d4ed8_B"]);
                    });
                    const n24 = vue.createSharedDataComponentWithFallback(_component_uni_icons, "384c779a", {
                      type: "top",
                      size: "14",
                      color: "#ffffff"
                    });
                    vue.setSharedData(__sharedData, 19, n24 == null ? void 0 : n24.sharedData);
                  }),
                  "loading": () => {
                    vue.renderSharedDataEffect(() => {
                      const _isDark = isDark.value;
                      vue.setSharedDataClass(__sharedData, 21, ["weapp-tw-border mx-_b14px_B my-_b10px_B p-_b14px_B rounded-_b12px_B border-_b1px_B border-dashed flex flex-row items-center justify-center shadow-xs", _isDark ? "bg-_b_h1e293b_B_f70 border-_b_h38bdf866_B" : "bg-_b_heff6ff_B border-_b_h93c5fd_B"]);
                      vue.setSharedDataClass(__sharedData, 22, ["weapp-tw-border text-_b12px_B font-semibold", _isDark ? "text-_b_h38bdf8_B" : "text-_b_h0957de_B"]);
                    });
                  },
                  "error": () => {
                    vue.setSharedDataEvent(__sharedData, 23, onArticleLoadMore);
                    vue.renderSharedDataEffect(() => {
                      return vue.setSharedDataClass(__sharedData, 24, ["weapp-tw-border mx-_b14px_B my-_b8px_B p-_b12px_B rounded-_b12px_B border-_b1px_B border-solid flex flex-row items-center justify-between shadow-xs", isDark.value ? "bg-_b_h450a0a_B_f50 border-_b_h7f1d1d_B" : "bg-_b_hfef2f2_B border-_b_hfecaca_B"]);
                    });
                  },
                  "finished": () => {
                    vue.renderSharedDataEffect(() => {
                      const _isDark = isDark.value;
                      const _isDark_bg_b_h334155_B_bg_b_hcbd5e1_B = _isDark ? "bg-_b_h334155_B" : "bg-_b_hcbd5e1_B";
                      vue.setSharedDataClass(__sharedData, 25, ["weapp-tw-border w-_b36px_B h-_b1px_B", _isDark_bg_b_h334155_B_bg_b_hcbd5e1_B]);
                      vue.setSharedDataClass(__sharedData, 26, ["weapp-tw-border text-_b12px_B font-medium", _isDark ? "text-_b_h64748b_B" : "text-_b_h94a3b8_B"]);
                      vue.setSharedDataClass(__sharedData, 27, ["weapp-tw-border w-_b36px_B h-_b1px_B", _isDark_bg_b_h334155_B_bg_b_hcbd5e1_B]);
                    });
                  },
                  "default": () => {
                    vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 28, vue.createSharedDataVFor(__sharedDataScope, () => {
                      return new UniDynamicSharedData(__sharedDataScope, { bundleKey: "".concat(__className$e, "SharedData"), sharedDataClassId: 1 });
                    })), () => {
                      return articleList.value;
                    }, (__sharedData_VFor0, _for_item0) => {
                      vue.renderSharedDataEffect(() => {
                        const _isDark = isDark.value;
                        const _item = _for_item0.value;
                        vue.setSharedDataClass(__sharedData_VFor0, 1, ["weapp-tw-border mx-_b14px_B my-_b6px_B p-_b14px_B rounded-_b12px_B border-_b1px_B border-solid flex flex-col", _isDark ? "bg-_b_h1e293b_B border-_b_h334155_B" : "bg-white border-_b_he2e8f0_B"]);
                        vue.setSharedDataStyle(__sharedData_VFor0, 2, { backgroundColor: _item.categoryBg });
                        vue.setSharedDataStyle(__sharedData_VFor0, 3, { color: _item.categoryColor });
                        vue.setSharedData(__sharedData_VFor0, 4, vue.toDisplayString(_item.category));
                        vue.setSharedData(__sharedData_VFor0, 5, vue.toDisplayString(_item.time));
                        vue.setSharedDataClass(__sharedData_VFor0, 6, ["weapp-tw-border text-_b14px_B font-bold mb-_b4px_B", _isDark ? "text-_b_hf1f5f9_B" : "text-_b_h1e293b_B"]);
                        vue.setSharedData(__sharedData_VFor0, 7, vue.toDisplayString(_item.title));
                        vue.setSharedDataClass(__sharedData_VFor0, 8, ["weapp-tw-border text-_b12px_B leading-_b17px_B", _isDark ? "text-_b_h94a3b8_B" : "text-_b_h64748b_B"]);
                        vue.setSharedData(__sharedData_VFor0, 9, vue.toDisplayString(_item.summary));
                      });
                      return null;
                    }, (__sharedData_VFor0, item) => {
                      return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(item.id));
                    }, 32);
                  }
                });
                vue.setSharedData(__sharedData, 2, n58.sharedData);
                _setTemplateRef(n58, articleScrollRef, null, "articleScrollRef");
              })
            });
            vue.setSharedData(__sharedData, 1, n61.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n62.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$f = {};
  const SrcSubNestedScrollNestedScroll = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["styles", [_style_0$f]]]);
  class Subscriber {
    constructor(nextFn = null, errorFn = null, completeFn = null) {
      this._nextFn = null;
      this._errorFn = null;
      this._completeFn = null;
      this._nextFn = nextFn;
      this._errorFn = errorFn;
      this._completeFn = completeFn;
    }
    /** 推送一个数据 */
    next(value) {
      const fn2 = this._nextFn;
      if (fn2 != null) {
        fn2(value);
      }
    }
    /** 推送一个错误 */
    error(error2 = null) {
      const fn2 = this._errorFn;
      if (fn2 != null) {
        fn2(error2);
      }
    }
    /** 通知流已正常结束 */
    complete() {
      const fn2 = this._completeFn;
      if (fn2 != null) {
        fn2();
      }
    }
  }
  class Subscription {
    constructor() {
      this._closed = false;
      this._teardowns = [];
    }
    /** 当前订阅是否已关闭 */
    isClosed() {
      return this._closed;
    }
    /** 追加一个清理回调；若订阅已关闭则立即执行该回调 */
    add(teardown = null) {
      if (teardown == null) {
        return null;
      }
      if (this._closed) {
        teardown();
        return null;
      }
      this._teardowns.push(teardown);
    }
    /** 取消订阅：执行全部清理回调（幂等，重复调用无副作用） */
    unsubscribe() {
      if (this._closed) {
        return null;
      }
      this._closed = true;
      const list = this._teardowns;
      this._teardowns = [];
      const len = list.length;
      for (let i2 = 0; i2 < len; i2++) {
        list[i2]();
      }
    }
  }
  class Observable {
    constructor(subscribeFn) {
      this._subscribeFn = subscribeFn;
    }
    /**
     * 订阅该流
     * @param nextFn 数据回调，不需要时传 null
     * @param errorFn 错误回调，不需要时传 null
     * @param completeFn 完成回调，不需要时传 null
     * @returns 订阅凭证，调用 unsubscribe() 取消订阅
     */
    subscribe(nextFn = null, errorFn = null, completeFn = null) {
      const subscription = new Subscription();
      const subscriber = new Subscriber(nextFn, (err = null) => {
        if (errorFn != null) {
          errorFn(err);
        }
        subscription.unsubscribe();
      }, () => {
        if (completeFn != null) {
          completeFn();
        }
        subscription.unsubscribe();
      });
      try {
        subscription.add(this._subscribeFn(subscriber));
      } catch (err) {
        subscriber.error(err);
      }
      return subscription;
    }
    /**
     * 串联一个操作符。
     * UTS 的重载与变参泛型支持有限，因此这里只接收单个操作符，
     * 多个操作符请链式调用：`stream.pipe(op1).pipe(op2)`。
     */
    pipe(operator) {
      return operator(this);
    }
  }
  class Subject {
    constructor() {
      this._observers = [];
      this._tokens = [];
      this._tokenSeed = 0;
      this._stopped = false;
    }
    /** 转换为可订阅的 Observable */
    asObservable() {
      return new Observable((subscriber) => {
        if (this._stopped) {
          subscriber.complete();
          return null;
        }
        this._tokenSeed = this._tokenSeed + 1;
        const token = this._tokenSeed;
        this._observers.push(subscriber);
        this._tokens.push(token);
        return () => {
          this._remove(token);
        };
      });
    }
    /** 按令牌移除订阅者 */
    _remove(token) {
      const idx = this._tokens.indexOf(token);
      if (idx >= 0) {
        this._tokens.splice(idx, 1);
        this._observers.splice(idx, 1);
      }
    }
    /** 向所有订阅者推送一个数据 */
    next(value) {
      if (this._stopped) {
        return null;
      }
      const snapshot = this._observers.slice();
      const len = snapshot.length;
      for (let i2 = 0; i2 < len; i2++) {
        snapshot[i2].next(value);
      }
    }
    /** 向所有订阅者推送错误，并终止该流 */
    error(err = null) {
      if (this._stopped) {
        return null;
      }
      this._stopped = true;
      const snapshot = this._observers.slice();
      this._observers = [];
      this._tokens = [];
      const len = snapshot.length;
      for (let i2 = 0; i2 < len; i2++) {
        snapshot[i2].error(err);
      }
    }
    /** 通知所有订阅者流已结束 */
    complete() {
      if (this._stopped) {
        return null;
      }
      this._stopped = true;
      const snapshot = this._observers.slice();
      this._observers = [];
      this._tokens = [];
      const len = snapshot.length;
      for (let i2 = 0; i2 < len; i2++) {
        snapshot[i2].complete();
      }
    }
    /** 当前订阅者数量 */
    observerCount() {
      return this._observers.length;
    }
  }
  function interval(period) {
    return new Observable((subscriber) => {
      let count = 0;
      const timerId = setInterval(() => {
        const current = count;
        count = count + 1;
        subscriber.next(current);
      }, period);
      return () => {
        clearInterval(timerId);
      };
    });
  }
  function scan(accumulator, seed) {
    return (source) => {
      return new Observable((subscriber) => {
        let acc = seed;
        const sub = source.subscribe((value) => {
          acc = accumulator(acc, value);
          subscriber.next(acc);
        }, (err = null) => {
          subscriber.error(err);
        }, () => {
          subscriber.complete();
        });
        return () => {
          sub.unsubscribe();
        };
      });
    };
  }
  function filter(predicate) {
    return (source) => {
      return new Observable((subscriber) => {
        const sub = source.subscribe((value) => {
          if (predicate(value)) {
            subscriber.next(value);
          }
        }, (err = null) => {
          subscriber.error(err);
        }, () => {
          subscriber.complete();
        });
        return () => {
          sub.unsubscribe();
        };
      });
    };
  }
  function distinctUntilChanged(comparator = null) {
    return (source) => {
      return new Observable((subscriber) => {
        let hasPrev = false;
        let prevValue = null;
        const sub = source.subscribe((value) => {
          let isSame = false;
          if (hasPrev) {
            if (comparator != null) {
              isSame = comparator(prevValue, value);
            } else {
              isSame = prevValue == value;
            }
          }
          if (!isSame) {
            hasPrev = true;
            prevValue = value;
            subscriber.next(value);
          }
        }, (err = null) => {
          subscriber.error(err);
        }, () => {
          subscriber.complete();
        });
        return () => {
          sub.unsubscribe();
        };
      });
    };
  }
  function debounceTime(due) {
    return (source) => {
      return new Observable((subscriber) => {
        let timerId = -1;
        let hasTimer = false;
        const sub = source.subscribe((value) => {
          if (hasTimer) {
            clearTimeout(timerId);
          }
          hasTimer = true;
          timerId = setTimeout(() => {
            hasTimer = false;
            subscriber.next(value);
          }, due);
        }, (err = null) => {
          subscriber.error(err);
        }, () => {
          subscriber.complete();
        });
        return () => {
          if (hasTimer) {
            clearTimeout(timerId);
            hasTimer = false;
          }
          sub.unsubscribe();
        };
      });
    };
  }
  function throttleTime(due) {
    return (source) => {
      return new Observable((subscriber) => {
        let lastEmitTime = 0;
        const sub = source.subscribe((value) => {
          const now = Date.now();
          if (lastEmitTime == 0 || now - lastEmitTime >= due) {
            lastEmitTime = now;
            subscriber.next(value);
          }
        }, (err = null) => {
          subscriber.error(err);
        }, () => {
          subscriber.complete();
        });
        return () => {
          sub.unsubscribe();
        };
      });
    };
  }
  function takeUntil(notifier) {
    return (source) => {
      return new Observable((subscriber) => {
        const state = new Subscription();
        let stopped = false;
        const notifierSub = notifier.subscribe((_value = null) => {
          stopped = true;
          subscriber.complete();
          state.unsubscribe();
        });
        const sourceSub = source.subscribe((value) => {
          if (!stopped) {
            subscriber.next(value);
          }
        }, (err = null) => {
          if (!stopped) {
            subscriber.error(err);
          }
        }, () => {
          if (!stopped) {
            subscriber.complete();
          }
        });
        state.add(() => {
          notifierSub.unsubscribe();
        });
        state.add(() => {
          sourceSub.unsubscribe();
        });
        return () => {
          stopped = true;
          state.unsubscribe();
        };
      });
    };
  }
  function tap(callback) {
    return (source) => {
      return new Observable((subscriber) => {
        const sub = source.subscribe((value) => {
          callback(value);
          subscriber.next(value);
        }, (err = null) => {
          subscriber.error(err);
        }, () => {
          subscriber.complete();
        });
        return () => {
          sub.unsubscribe();
        };
      });
    };
  }
  function catchError(handler) {
    return (source) => {
      return new Observable((subscriber) => {
        let fallbackSub = null;
        const sub = source.subscribe((value) => {
          subscriber.next(value);
        }, (err = null) => {
          const fallback = handler(err);
          fallbackSub = fallback.subscribe((value) => {
            subscriber.next(value);
          }, (innerErr = null) => {
            subscriber.error(innerErr);
          }, () => {
            subscriber.complete();
          });
        }, () => {
          subscriber.complete();
        });
        return () => {
          sub.unsubscribe();
          const fs2 = fallbackSub;
          if (fs2 != null) {
            fs2.unsubscribe();
          }
        };
      });
    };
  }
  function unsubscribeAll(subscriptions) {
    const len = subscriptions.length;
    for (let i2 = 0; i2 < len; i2++) {
      subscriptions[i2].unsubscribe();
    }
    subscriptions.splice(0, subscriptions.length);
  }
  class StreamChunk extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            text: { type: String, optional: false },
            receivedLength: { type: Number, optional: false },
            elapsedMs: { type: Number, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = StreamChunk.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.text = this.__props__.text;
      this.receivedLength = this.__props__.receivedLength;
      this.elapsedMs = this.__props__.elapsedMs;
      delete this.__props__;
    }
  }
  class Utf8StreamDecoder {
    constructor() {
      this._pending = [];
      this._decoder = new TextDecoder("utf-8");
    }
    /** 解码一个 chunk，返回本次可安全输出的文本（可能为空字符串） */
    decodeChunk(buffer) {
      const incoming = new Uint8Array(buffer);
      const merged = this._pending;
      const incomingLen = incoming.length;
      for (let i2 = 0; i2 < incomingLen; i2++) {
        merged.push(incoming[i2]);
      }
      const total = merged.length;
      const safeEnd = this._findSafeEnd(merged, total);
      if (safeEnd <= 0) {
        this._pending = merged;
        return "";
      }
      const safe = new Uint8Array(safeEnd);
      for (let i2 = 0; i2 < safeEnd; i2++) {
        safe[i2] = merged[i2];
      }
      const rest = [];
      for (let i2 = safeEnd; i2 < total; i2++) {
        rest.push(merged[i2]);
      }
      this._pending = rest;
      return this._decoder.decode(safe);
    }
    /** 清空缓冲（重新发起请求前调用） */
    reset() {
      this._pending = [];
    }
    /**
     * 从尾部向前寻找可安全解码的结束位置。
     * 末尾若存在被截断的多字节序列，则把该序列整体留给下一块。
     */
    _findSafeEnd(bytes, total) {
      if (total <= 0) {
        return 0;
      }
      let contCount = 0;
      let idx = total - 1;
      let scanned = 0;
      while (idx >= 0 && scanned < 4) {
        const b = bytes[idx];
        if ((b & 192) == 128) {
          contCount = contCount + 1;
          idx = idx - 1;
          scanned = scanned + 1;
          continue;
        }
        break;
      }
      if (idx < 0) {
        return 0;
      }
      const lead = bytes[idx];
      let expected = 1;
      if ((lead & 128) == 0) {
        expected = 1;
      } else if ((lead & 224) == 192) {
        expected = 2;
      } else if ((lead & 240) == 224) {
        expected = 3;
      } else if ((lead & 248) == 240) {
        expected = 4;
      } else {
        expected = 1;
      }
      if (contCount + 1 >= expected) {
        return total;
      }
      return idx;
    }
  }
  function requestStream(url, body, header = null, timeout = 6e4) {
    return new Observable((subscriber) => {
      const startTime = Date.now();
      const decoder = new Utf8StreamDecoder();
      let receivedText = "";
      let settled = false;
      const settle = (errMsg = null) => {
        if (settled) {
          return null;
        }
        settled = true;
        if (errMsg == null) {
          subscriber.complete();
        } else {
          subscriber.error(new Error(errMsg));
        }
      };
      const requestHeader = header != null ? header : new UTSJSONObject({
        "Content-Type": "application/json",
        "Accept": "text/event-stream, application/x-ndjson, application/json"
      });
      const task2 = uni.request({
        url,
        method: "POST",
        data: body,
        header: requestHeader,
        timeout,
        enableChunked: true,
        responseType: "arraybuffer",
        dataType: "text",
        success: (_res) => {
          settle(null);
        },
        fail: (err) => {
          let msg = "网络请求失败";
          if (err != null && err.errMsg != null) {
            msg = "".concat(err.errMsg);
          }
          settle(msg);
        }
      });
      task2.onChunkReceived((result) => {
        if (settled) {
          return null;
        }
        const text2 = decoder.decodeChunk(result.data);
        if (text2.length <= 0) {
          return null;
        }
        receivedText = receivedText + text2;
        subscriber.next(new StreamChunk({
          text: text2,
          receivedLength: receivedText.length,
          elapsedMs: Date.now() - startTime
        }));
      });
      return () => {
        settled = true;
        task2.abort();
      };
    });
  }
  function simulateStream(text2, chunkSize = 6, intervalMs = 90) {
    return new Observable((subscriber) => {
      const startTime = Date.now();
      const totalLen = text2.length;
      if (totalLen <= 0) {
        subscriber.complete();
        return null;
      }
      let cursor2 = 0;
      let receivedLength = 0;
      const timerId = setInterval(() => {
        const remain = totalLen - cursor2;
        const size = remain < chunkSize ? remain : chunkSize;
        const piece = text2.substring(cursor2, cursor2 + size);
        cursor2 = cursor2 + size;
        receivedLength = receivedLength + piece.length;
        subscriber.next(new StreamChunk({
          text: piece,
          receivedLength,
          elapsedMs: Date.now() - startTime
        }));
        if (cursor2 >= totalLen) {
          clearInterval(timerId);
          subscriber.complete();
        }
      }, intervalMs);
      return () => {
        clearInterval(timerId);
      };
    });
  }
  const __className$d = "GenSrcSubRxjsDemoRxjsDemo";
  const DEMO_TEXT = "基于 rxjs-lite 的流式渲染演示：数据被切成小块陆续到达，每到达一块就立即更新界面，这就是 AI 对话「打字机效果」的底层原理。uni-app X 的 App 端没有 JS 引擎，因此这里用 UTS 重新实现了 Observable、Subject 与常用操作符，Android / iOS / H5 / 小程序全端一致。";
  const _sfc_main$e = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$d,
    __filename: "src/sub/rxjsDemo/rxjsDemo.uvue",
    __name: "rxjsDemo",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubRxjsDemoRxjsDemoSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubRxjsDemoRxjsDemoSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const pageSubscriptions = [];
      const createdSubCount = vue.ref(0);
      const activeSubCount = vue.ref(0);
      function track(sub) {
        createdSubCount.value = createdSubCount.value + 1;
        pageSubscriptions.push(sub);
        return sub;
      }
      function refreshActiveCount() {
        let active = 0;
        const len = pageSubscriptions.length;
        for (let i2 = 0; i2 < len; i2++) {
          if (!pageSubscriptions[i2].isClosed()) {
            active = active + 1;
          }
        }
        activeSubCount.value = active;
      }
      const streamSource = vue.ref("local");
      const streamStatus = vue.ref("idle");
      const streamText = vue.ref("");
      const streamChunks = vue.ref(0);
      const streamChars = vue.ref(0);
      const streamElapsed = vue.ref(0);
      const streamErrorMessage = vue.ref("");
      const streamDegraded = vue.ref(false);
      const degradeReason = vue.ref("");
      const streamUrl = vue.ref(getStreamUrl());
      let streamSub = null;
      const streamRunning = vue.computed(() => {
        return streamStatus.value == "streaming";
      });
      const streamTextEmpty = vue.computed(() => {
        return streamText.value.length == 0;
      });
      const streamErrorVisible = vue.computed(() => {
        return streamErrorMessage.value.length > 0;
      });
      const degradeReasonVisible = vue.computed(() => {
        return degradeReason.value.length > 0;
      });
      const streamUrlDisplay = vue.computed(() => {
        const url = streamUrl.value;
        if (url == "") {
          return "未配置 VITE_STREAM_URL，使用本地模拟流";
        }
        return url;
      });
      const streamStatusText = vue.computed(() => {
        switch (streamStatus.value) {
          case "streaming":
            return "接收中";
          case "done":
            return "已完成";
          case "stopped":
            return "已停止";
          case "error":
            return "已失败";
          default:
            return "待命";
        }
      });
      const streamStatusBgClass = vue.computed(() => {
        switch (streamStatus.value) {
          case "streaming":
            return "bg-_b_hf5f3ff_B";
          case "done":
            return "bg-_b_hd1fae5_B";
          case "stopped":
            return "bg-_b_hf1f5f9_B";
          case "error":
            return "bg-_b_hfee2e2_B";
          default:
            return "bg-_b_hf1f5f9_B";
        }
      });
      const streamStatusDotClass = vue.computed(() => {
        switch (streamStatus.value) {
          case "streaming":
            return "bg-_b_h7c3aed_B";
          case "done":
            return "bg-_b_h059669_B";
          case "stopped":
            return "bg-_b_h94a3b8_B";
          case "error":
            return "bg-_b_hdc2626_B";
          default:
            return "bg-_b_h94a3b8_B";
        }
      });
      const streamStatusTextClass = vue.computed(() => {
        switch (streamStatus.value) {
          case "streaming":
            return "text-_b_h6d28d9_B";
          case "done":
            return "text-_b_h065f46_B";
          case "stopped":
            return "text-_b_h475569_B";
          case "error":
            return "text-_b_hb91c1c_B";
          default:
            return "text-_b_h475569_B";
        }
      });
      function resolveErrorMessage(err = null) {
        var _a2;
        if (err == null) {
          return "未知错误";
        }
        if (UTS.isInstanceOf(err, Error)) {
          return err.message;
        }
        try {
          const obj = err;
          const msg = (_a2 = obj.getString("message")) !== null && _a2 !== void 0 ? _a2 : obj.getString("msg");
          if (msg != null && msg != "") {
            return msg;
          }
        } catch (e2) {
          uni.__log__("log", "at src/sub/rxjsDemo/rxjsDemo.uvue:463", "resolveErrorMessage fallback:", e2);
        }
        return "".concat(err);
      }
      function switchSource(source) {
        if (streamRunning.value) {
          stopStream();
        }
        streamSource.value = source;
        streamStatus.value = "idle";
        streamErrorMessage.value = "";
        streamDegraded.value = false;
        degradeReason.value = "";
      }
      function buildRemoteStream() {
        const url = streamUrl.value;
        if (url == "") {
          streamDegraded.value = true;
          return simulateStream(DEMO_TEXT, 6, 90);
        }
        const body = UTS.JSON.stringify(new UTSJSONObject({
          prompt: "用一句话介绍 unibestX",
          stream: true
        }));
        return requestStream(url, body, null, 3e4).pipe(catchError((err = null) => {
          streamDegraded.value = true;
          degradeReason.value = resolveErrorMessage(err);
          return simulateStream(DEMO_TEXT, 6, 90);
        }));
      }
      function startStream() {
        stopStream();
        if (streamRunning.value) {
          return null;
        }
        streamStatus.value = "streaming";
        streamText.value = "";
        streamChunks.value = 0;
        streamChars.value = 0;
        streamElapsed.value = 0;
        streamErrorMessage.value = "";
        streamDegraded.value = false;
        degradeReason.value = "";
        const source = streamSource.value == "remote" ? buildRemoteStream() : simulateStream(DEMO_TEXT, 6, 90);
        streamSub = track(source.pipe(tap((chunk2) => {
          streamChunks.value = streamChunks.value + 1;
          streamElapsed.value = chunk2.elapsedMs;
        })).pipe(scan((acc, chunk2) => {
          return acc + chunk2.text;
        }, "")).pipe(tap((full) => {
          streamText.value = full;
          streamChars.value = full.length;
        })).subscribe(null, (err = null) => {
          streamStatus.value = "error";
          streamErrorMessage.value = resolveErrorMessage(err);
          streamSub = null;
        }, () => {
          streamStatus.value = "done";
          streamSub = null;
        }));
      }
      function stopStream() {
        const sub = streamSub;
        if (sub != null) {
          sub.unsubscribe();
          streamSub = null;
        }
        if (streamStatus.value == "streaming") {
          streamStatus.value = "stopped";
        }
      }
      const keywordInput = vue.ref("");
      const keywordRaw = vue.ref("");
      const keywordDebounced = vue.ref("");
      const keywordFireCount = vue.ref(0);
      const keyword$ = new Subject();
      vue.watch(keywordInput, (val) => {
        keywordRaw.value = val;
        keyword$.next(val);
      });
      const keywordSub = track(keyword$.asObservable().pipe(debounceTime(300)).pipe(distinctUntilChanged()).pipe(filter((keyword) => {
        return keyword.trim() != "";
      })).subscribe((keyword) => {
        keywordDebounced.value = keyword;
        keywordFireCount.value = keywordFireCount.value + 1;
      }));
      const tapRawCount = vue.ref(0);
      const tapThrottledCount = vue.ref(0);
      const tap$ = new Subject();
      function onThrottleTap() {
        const next2 = tapRawCount.value + 1;
        tapRawCount.value = next2;
        tap$.next(next2);
      }
      const tapSub = track(tap$.asObservable().pipe(throttleTime(500)).subscribe((count) => {
        tapThrottledCount.value = count;
      }));
      const tickLatest = vue.ref(-1);
      const tickObserverCount = vue.ref(0);
      const tickRunning = vue.ref(false);
      const tickStop$ = new Subject();
      let tickSub = null;
      const tickStateText = vue.computed(() => {
        if (tickRunning.value) {
          return "运行中";
        }
        if (tickLatest.value < 0) {
          return "未启动";
        }
        return "已停止";
      });
      function startTick() {
        if (tickRunning.value) {
          toast("定时流已在运行");
          return null;
        }
        tickRunning.value = true;
        tickSub = track(interval(200).pipe(takeUntil(tickStop$.asObservable())).subscribe((i2) => {
          tickLatest.value = i2;
          tickObserverCount.value = tickStop$.observerCount();
        }, null, () => {
          tickRunning.value = false;
          tickObserverCount.value = 0;
          tickSub = null;
        }));
        tickObserverCount.value = tickStop$.observerCount();
      }
      function stopTick() {
        if (!tickRunning.value) {
          toast("定时流未在运行");
          return null;
        }
        tickStop$.next(Date.now());
      }
      function releaseAll() {
        stopStream();
        releaseTick();
        unsubscribeAll(pageSubscriptions);
        keywordSub.unsubscribe();
        tapSub.unsubscribe();
        tickRunning.value = false;
        refreshActiveCount();
        toast("已释放全部订阅");
      }
      function releaseTick() {
        const sub = tickSub;
        if (sub != null) {
          sub.unsubscribe();
          tickSub = null;
        }
        tickRunning.value = false;
      }
      let statsSub = interval(1e3).subscribe((_i) => {
        refreshActiveCount();
      });
      const reachBottomCount = vue.ref(0);
      function handleScrollToLower() {
        reachBottomCount.value++;
      }
      onNavbarPullDownRefresh(() => {
        setTimeout(() => {
          stopNavbarPullDownRefresh();
        }, 600);
      });
      vue.onUnmounted(() => {
        stopStream();
        releaseTick();
        unsubscribeAll(pageSubscriptions);
        const stats = statsSub;
        if (stats != null) {
          stats.unsubscribe();
          statsSub = null;
        }
      });
      return () => {
        "raw js";
        const _component_input = vue.resolveComponent("input");
        const n156 = vue.createSharedDataComponent(AppKu, "6c5189f3", {
          layout: "navbar",
          "show-back": true,
          "hide-navbar": false,
          "enable-pull-down-refresh": true,
          "page-style": { "navigationBarTitleText": "rxjs 流式演示", "navigationStyle": "custom" }
        }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n155 = vue.createSharedDataComponent(LayoutComponent, "c3d24ea4", {
              "show-back": true,
              "hide-navbar": false,
              "enable-pull-down-refresh": true,
              "page-style": { "navigationBarTitleText": "rxjs 流式演示", "navigationStyle": "custom" }
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                vue.setSharedDataStyle(__sharedData, 48, { maxWidth: "520px" });
                const n36 = vue.createSharedDataComponent(Card, "24c4aa7d", { title: "为什么不用 npm 上的 rxjs？" }, {
                  "default": () => {
                  }
                });
                vue.setSharedData(__sharedData, 2, n36.sharedData);
                const n88 = vue.createSharedDataComponent(Card, "24c61246", { title: "流式接收（chunked / SSE）" }, {
                  "default": () => {
                    vue.setSharedDataEvent(__sharedData, 12, () => {
                      return switchSource("local");
                    });
                    vue.setSharedDataEvent(__sharedData, 13, () => {
                      return switchSource("remote");
                    });
                    vue.renderSharedDataEffect(() => {
                      const _streamSource = streamSource.value;
                      vue.setSharedDataClass(__sharedData, 16, ["weapp-tw-border flex-1 h-_b34px_B flex flex-row items-center justify-center rounded-_b6px_B", _streamSource == "local" ? "bg-_b_hffffff_B" : ""]);
                      vue.setSharedDataClass(__sharedData, 17, ["weapp-tw-border text-_b12px_B", _streamSource == "local" ? "text-_b_h6d28d9_B font-bold" : "text-_b_h64748b_B"]);
                      vue.setSharedDataClass(__sharedData, 18, ["weapp-tw-border flex-1 h-_b34px_B flex flex-row items-center justify-center rounded-_b6px_B", _streamSource == "remote" ? "bg-_b_hffffff_B" : ""]);
                      vue.setSharedDataClass(__sharedData, 19, ["weapp-tw-border text-_b12px_B", _streamSource == "remote" ? "text-_b_h6d28d9_B font-bold" : "text-_b_h64748b_B"]);
                      vue.setSharedDataClass(__sharedData, 20, ["weapp-tw-border flex-row items-center px-_b8px_B py-_b4px_B rounded-_b10px_B", streamStatusBgClass.value]);
                      vue.setSharedDataClass(__sharedData, 21, ["weapp-tw-border w-_b6px_B h-_b6px_B rounded-_b3px_B mr-_b5px_B", streamStatusDotClass.value]);
                      vue.setSharedDataClass(__sharedData, 22, ["weapp-tw-border text-_b11px_B", streamStatusTextClass.value]);
                      vue.setSharedData(__sharedData, 23, vue.toDisplayString(streamStatusText.value));
                      vue.setSharedData(__sharedData, 24, vue.toDisplayString(streamElapsed.value));
                      vue.setSharedData(__sharedData, 25, vue.toDisplayString(streamChunks.value));
                      vue.setSharedData(__sharedData, 26, vue.toDisplayString(streamChars.value));
                    });
                    vue.createSharedDataIf(() => {
                      return vue.setSharedData(__sharedData, 8, vue.toSharedDataBoolean(streamDegraded.value));
                    }, () => {
                    });
                    vue.renderSharedDataEffect(() => {
                      return vue.setSharedData(__sharedData, 27, vue.toDisplayString(streamUrlDisplay.value));
                    });
                    vue.createSharedDataIf(() => {
                      return vue.setSharedData(__sharedData, 6, vue.toSharedDataBoolean(degradeReasonVisible.value));
                    }, () => {
                      vue.renderSharedDataEffect(() => {
                        return vue.setSharedData(__sharedData, 7, vue.toDisplayString(degradeReason.value));
                      });
                    });
                    vue.createSharedDataIf(() => {
                      return vue.setSharedData(__sharedData, 9, vue.toSharedDataBoolean(streamTextEmpty.value && !streamRunning.value));
                    }, () => {
                    }, () => {
                      vue.renderSharedDataEffect(() => {
                        return vue.setSharedData(__sharedData, 11, vue.toDisplayString(streamText.value));
                      });
                      vue.createSharedDataIf(() => {
                        return vue.setSharedData(__sharedData, 10, vue.toSharedDataBoolean(streamRunning.value));
                      }, () => {
                      });
                    }, 773);
                    vue.createSharedDataIf(() => {
                      return vue.setSharedData(__sharedData, 4, vue.toSharedDataBoolean(streamErrorVisible.value));
                    }, () => {
                      vue.renderSharedDataEffect(() => {
                        return vue.setSharedData(__sharedData, 5, vue.toDisplayString(streamErrorMessage.value));
                      });
                    }, null, 129);
                    vue.setSharedDataEvent(__sharedData, 14, startStream);
                    vue.setSharedDataEvent(__sharedData, 15, stopStream);
                    vue.renderSharedDataEffect(() => {
                      const _streamRunning = streamRunning.value;
                      vue.setSharedDataStyle(__sharedData, 28, { backgroundColor: _streamRunning ? "#c4b5fd" : "#7c3aed" });
                      vue.setSharedData(__sharedData, 29, vue.toDisplayString(_streamRunning ? "接收中…" : "开始流式接收"));
                    });
                  }
                });
                vue.setSharedData(__sharedData, 3, n88.sharedData);
                const n138 = vue.createSharedDataComponent(Card, "73c04173", { title: "操作符实时演示" }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    const n93 = vue.createSharedDataComponentWithFallback(_component_input, "73c0a99a", {
                      value: () => {
                        return keywordInput.value;
                      },
                      "onUpdate:value": () => {
                        return (_value) => {
                          return keywordInput.value = _value;
                        };
                      },
                      placeholder: "试着快速输入几个字…",
                      "placeholder-style": "color: #94a3b8",
                      class: "h-_b38px_B bg-_b_hf8fafc_B rounded-_b6px_B px-_b12px_B border-_b1px_B border-solid border-_b_hcbd5e1_B text-_b13px_B text-_b_h334155_B"
                    });
                    vue.setSharedData(__sharedData, 31, n93 == null ? void 0 : n93.sharedData);
                    vue.setSharedDataEvent(__sharedData, 32, onThrottleTap);
                    vue.setSharedDataEvent(__sharedData, 33, startTick);
                    vue.setSharedDataEvent(__sharedData, 34, stopTick);
                    vue.renderSharedDataEffect(() => {
                      const _keywordRaw = keywordRaw.value;
                      const _keywordDebounced = keywordDebounced.value;
                      vue.setSharedData(__sharedData, 35, vue.toDisplayString(_keywordRaw != "" ? _keywordRaw : "—"));
                      vue.setSharedData(__sharedData, 36, vue.toDisplayString(_keywordDebounced != "" ? _keywordDebounced : "—"));
                      vue.setSharedData(__sharedData, 37, vue.toDisplayString(keywordFireCount.value));
                      vue.setSharedData(__sharedData, 38, vue.toDisplayString(tapRawCount.value));
                      vue.setSharedData(__sharedData, 39, vue.toDisplayString(tapThrottledCount.value));
                      vue.setSharedData(__sharedData, 40, vue.toDisplayString(tickLatest.value));
                      vue.setSharedData(__sharedData, 41, vue.toDisplayString(tickObserverCount.value));
                      vue.setSharedData(__sharedData, 42, vue.toDisplayString(tickStateText.value));
                    });
                  })
                });
                vue.setSharedData(__sharedData, 30, n138.sharedData);
                const n149 = vue.createSharedDataComponent(Card, "73c2fef4", { title: "订阅生命周期看板" }, {
                  "default": () => {
                    vue.setSharedDataEvent(__sharedData, 44, releaseAll);
                    vue.renderSharedDataEffect(() => {
                      const _activeSubCount = activeSubCount.value;
                      vue.setSharedData(__sharedData, 45, vue.toDisplayString(createdSubCount.value));
                      vue.setSharedDataClass(__sharedData, 46, ["weapp-tw-border text-_b16px_B font-bold mt-_b2px_B", _activeSubCount > 0 ? "text-_b_h059669_B" : "text-_b_h94a3b8_B"]);
                      vue.setSharedData(__sharedData, 47, vue.toDisplayString(_activeSubCount));
                    });
                  }
                });
                vue.setSharedData(__sharedData, 43, n149.sharedData);
                vue.setSharedDataEvent(__sharedData, 49, handleScrollToLower);
                vue.setSharedDataStyle(__sharedData, 50, { maxWidth: "520px" });
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedData(__sharedData, 51, vue.toDisplayString(reachBottomCount.value));
                });
              })
            });
            vue.setSharedData(__sharedData, 1, n155.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n156.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$e = {};
  const SrcSubRxjsDemoRxjsDemo = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["styles", [_style_0$e]]]);
  const __className$c = "GenSrcSubTailwindcssComponentsWeappTailwindcss";
  const _sfc_main$d = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$c,
    __filename: "src/sub/tailwindcss/components/WeappTailwindcss.uvue",
    __name: "WeappTailwindcss",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubTailwindcssComponentsWeappTailwindcssSharedData", sharedDataClassId: 0 })));
      return () => {
        "raw js";
        return __sharedData;
      };
    }
  });
  const _style_0$d = {};
  const _style_1$6 = {};
  const WeappTailwindcss = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["styles", [_style_0$d, _style_1$6]]]);
  const __className$b = "GenSrcSubTailwindcssComponentsBindClass";
  const _sfc_main$c = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$b,
    __filename: "src/sub/tailwindcss/components/BindClass.uvue",
    __name: "BindClass",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubTailwindcssComponentsBindClassSharedData", sharedDataClassId: 0 })));
      const condition = vue.ref(true);
      const extra = vue.ref("wtu-1pqhfzc-g wtu-lmmn8o-h");
      const flag2 = vue.ref(true);
      const toggled = vue.ref(true);
      return () => {
        "raw js";
        vue.renderSharedDataEffect(() => {
          vue.setSharedDataClass(__sharedData, 0, ["weapp-tw-border", vue.unref(flag2) ? "wtu-dlmo7j-a wtu-1p45b1v-b" : "wtu-wijbq5-c"]);
          vue.setSharedDataClass(__sharedData, 1, ["weapp-tw-border", [
            vue.unref(extra),
            { "wtu-1p7hcae-d": vue.unref(toggled) }
          ]]);
          vue.setSharedDataClass(__sharedData, 2, ["weapp-tw-border", vue.unref(condition) ? "wtu-1yfspzj-e wtu-trjrzl-f" : ""]);
        });
        return __sharedData;
      };
    }
  });
  const _style_0$c = {};
  const _style_1$5 = {};
  const BindClass = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["styles", [_style_0$c, _style_1$5]]]);
  const __className$a = "GenSrcSubTailwindcssComponentsTButton";
  const _sfc_main$b = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$a,
    __filename: "src/sub/tailwindcss/components/t-button.uvue",
    __name: "t-button",
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubTailwindcssComponentsTButtonSharedData", sharedDataClassId: 0 })));
      return () => {
        "raw js";
        vue.createSharedDataSlot("default", null, null);
        return __sharedData;
      };
    }
  });
  const _style_0$b = {};
  const TButton = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["styles", [_style_0$b]]]);
  const __className$9 = "GenSrcSubTailwindcssTailwindcss";
  const _sfc_main$a = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$9,
    __filename: "src/sub/tailwindcss/tailwindcss.uvue",
    __name: "tailwindcss",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubTailwindcssTailwindcssSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubTailwindcssTailwindcssSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const appStore = useAppStore();
      const isDark = vue.computed(() => {
        return appStore.state.isDark;
      });
      function toggleDark() {
        const nextMode = appStore.state.isDark ? "light" : "dark";
        appStore.setThemeMode(nextMode);
      }
      const buttonColors = [
        "bg-_b_h000_B",
        "bg-_b_h111_B",
        "bg-_b_h222_B",
        "bg-_b_h333_B",
        "bg-_b_h444_B",
        "bg-_b_h555_B",
        "bg-_b_h666_B",
        "bg-_b_h777_B",
        "bg-_b_h888_B",
        "bg-_b_h999_B",
        "bg-_b_haaa_B",
        "bg-_b_hbbb_B",
        "bg-_b_hccc_B",
        "bg-_b_hddd_B",
        "bg-_b_heee_B",
        "bg-_b_hfff_B"
      ];
      const globalNum = vue.ref(0);
      const buttonClass = vue.computed(() => {
        const index = globalNum.value % buttonColors.length;
        return buttonColors[index];
      });
      const templateCorpusDynamicClass = vue.computed(() => {
        return "template-corpus-dynamic bg-_b_h68c828_B text-slate-700 text-_b26px_B w-_b323px_B h-_b45px_B leading-_b45px_B px-3";
      });
      function setGlobalNum(num) {
        globalNum.value = num;
      }
      vue.onLoad(() => {
        uni.__log__("log", "at src/sub/tailwindcss/tailwindcss.uvue:67", "欢迎使用 weapp-tailwindcss 模板");
      });
      return () => {
        "raw js";
        const _component_button = vue.resolveComponent("button");
        const n42 = vue.createSharedDataComponent(AppKu, "6724c3a2", {
          layout: "navbar",
          "show-back": true,
          "hide-navbar": false,
          "enable-pull-down-refresh": false,
          "page-style": { "navigationBarTitleText": "weapp-tailwindcss 示例", "navigationStyle": "custom" }
        }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n41 = vue.createSharedDataComponent(LayoutComponent, "677ece0b", {
              "show-back": true,
              "hide-navbar": false,
              "enable-pull-down-refresh": false,
              "page-style": { "navigationBarTitleText": "weapp-tailwindcss 示例", "navigationStyle": "custom" }
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedDataClass(__sharedData, 9, ["weapp-tw-border content", { dark: vue.unref(isDark) }]);
                });
                const n0 = vue.createSharedDataComponent(WeappTailwindcss, "677ed930");
                vue.setSharedData(__sharedData, 2, n0.sharedData);
                const n1 = vue.createSharedDataComponent(BindClass, "677edc15");
                vue.setSharedData(__sharedData, 3, n1.sharedData);
                const n3 = vue.createSharedDataComponentWithFallback(_component_button, "677edc53", {
                  class: "mt-4 w-64 rounded-full px-4 py-2 text-white",
                  style: () => {
                    return { backgroundColor: vue.unref(isDark) ? "#3498db" : "#eccc68" };
                  },
                  onClick: () => {
                    return toggleDark;
                  }
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    vue.renderSharedDataEffect(() => {
                      return vue.setSharedData(__sharedData, 5, vue.toDisplayString(vue.unref(isDark) ? "切换到亮色模式" : "切换到暗色模式"));
                    });
                  }, "string")
                });
                vue.setSharedData(__sharedData, 4, n3 == null ? void 0 : n3.sharedData);
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedDataClass(__sharedData, 10, ["weapp-tw-border", vue.unref(templateCorpusDynamicClass)]);
                });
                const _on_click = () => {
                  return setGlobalNum(vue.unref(globalNum) + 1);
                };
                const n28 = vue.createSharedDataComponentWithFallback(_component_button, "ef48853c", {
                  class: () => {
                    return ["w-64 text-white", vue.unref(buttonClass)];
                  },
                  onClick: () => {
                    return _on_click;
                  }
                }, {
                  "default": vue.withSharedDataVaporCtx(() => {
                    vue.renderSharedDataEffect(() => {
                      return vue.setSharedData(__sharedData, 8, vue.toDisplayString(vue.unref(globalNum)));
                    });
                  }, "string")
                });
                vue.setSharedData(__sharedData, 7, n28 == null ? void 0 : n28.sharedData);
                vue.renderSharedDataEffect(() => {
                  const _isDark = vue.unref(isDark);
                  vue.setSharedDataClass(__sharedData, 11, ["weapp-tw-border theme-mode-demo mt-4 rounded px-4 py-3", _isDark ? "bg-zinc-900 text-zinc-50" : "bg-white text-slate-900"]);
                  vue.setSharedDataClass(__sharedData, 12, ["weapp-tw-border theme-dark mt-2 rounded px-3 py-2", _isDark ? "bg-zinc-950 text-zinc-50" : "bg-white text-slate-900"]);
                });
                const n37 = vue.createSharedDataComponent(TButton, "ef4847b6", {
                  "t-class": "bg-_b_h0977ee_B text-_b31rpx_B",
                  "t-class-content": "px-_b29rpx_B"
                }, {
                  "default": () => {
                  }
                });
                vue.setSharedData(__sharedData, 6, n37.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n41.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n42.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$a = {};
  const _style_1$4 = {};
  const SrcSubTailwindcssTailwindcss = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["styles", [_style_0$a, _style_1$4]]]);
  const __className$8 = "GenSrcSubTestTest";
  const _sfc_main$9 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$8,
    __filename: "src/sub/test/test.uvue",
    __name: "test",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubTestTestSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubTestTestSharedData", sharedDataClassId: 0 })));
      const __sharedDataScope = vue.useSharedDataScope(__sharedData);
      const optionKeys = vue.ref([]);
      const queryOptions = vue.ref(null);
      const countLabel = vue.computed(() => {
        return optionKeys.value.length > 0 ? "已解析" : "待解析";
      });
      vue.onLoad((options = null) => {
        uni.__log__("log", "at src/sub/test/test.uvue:97", "test page onLoad options:", options);
        if (options != null) {
          queryOptions.value = options;
          optionKeys.value = UTSJSONObject.keys(options);
        }
      });
      onNavbarPullDownRefresh(() => {
        setTimeout(() => {
          stopNavbarPullDownRefresh();
        }, 800);
      });
      function getOptionValue(key2) {
        const options = queryOptions.value;
        if (options != null) {
          const val = options[key2];
          if (val != null) {
            return "".concat(val);
          }
        }
        return "";
      }
      return () => {
        "raw js";
        const _component_uni_icons = __easycom_0$2;
        const n38 = vue.createSharedDataComponent(AppKu, "51fce8f3", {
          layout: "navbar",
          "show-back": true,
          "hide-navbar": false,
          "enable-pull-down-refresh": true,
          "page-style": { "navigationBarTitleText": "URL 参数测试", "navigationStyle": "custom" }
        }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n37 = vue.createSharedDataComponent(LayoutComponent, "733310a6", {
              "show-back": true,
              "hide-navbar": false,
              "enable-pull-down-refresh": true,
              "page-style": { "navigationBarTitleText": "URL 参数测试", "navigationStyle": "custom" }
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                const n0 = vue.createSharedDataComponentWithFallback(_component_uni_icons, "7332dbdc", {
                  type: "link",
                  size: "22",
                  color: "#3182ce"
                });
                vue.setSharedData(__sharedData, 2, n0 == null ? void 0 : n0.sharedData);
                vue.renderSharedDataEffect(() => {
                  vue.setSharedData(__sharedData, 6, vue.toDisplayString(optionKeys.value.length));
                  vue.setSharedData(__sharedData, 7, vue.toDisplayString(countLabel.value));
                });
                vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 3, vue.createSharedDataVFor(__sharedDataScope, () => {
                  return new UniDynamicSharedData(__sharedDataScope, { bundleKey: "".concat(__className$8, "SharedData"), sharedDataClassId: 1 });
                })), () => {
                  return optionKeys.value;
                }, (__sharedData_VFor0, _for_item0) => {
                  vue.renderSharedDataEffect(() => {
                    const _key = _for_item0.value;
                    vue.setSharedData(__sharedData_VFor0, 1, vue.toDisplayString(_key));
                    vue.setSharedData(__sharedData_VFor0, 2, vue.toDisplayString(getOptionValue(_key)));
                  });
                  return null;
                }, (__sharedData_VFor0, key2) => {
                  return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(key2));
                });
                vue.createSharedDataIf(() => {
                  return vue.setSharedData(__sharedData, 4, vue.toSharedDataBoolean(optionKeys.value.length == 0));
                }, () => {
                  const n26 = vue.createSharedDataComponentWithFallback(_component_uni_icons, "066957fe", {
                    type: "info",
                    size: "28",
                    color: "#cbd5e1"
                  });
                  vue.setSharedData(__sharedData, 5, n26 == null ? void 0 : n26.sharedData);
                });
              })
            });
            vue.setSharedData(__sharedData, 1, n37.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n38.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$9 = {};
  const SrcSubTestTest = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["styles", [_style_0$9]]]);
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
  const REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
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
    return "".concat(negMinutes <= 0 ? "+" : "-").concat(padStart(hourOffset.toString(), 2, "0"), ":").concat(padStart(minuteOffset.toString(), 2, "0"));
  }
  function isNumber(value) {
    return ["Int8", "UInt8", "Int16", "UInt16", "Int32", "UInt32", "Int64", "UInt64", "Int", "UInt", "Float", "Float16", "Float32", "Float64", "Double", "number"].includes(typeof value);
  }
  function prettyUnit(u2) {
    var _a2;
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
    return (_a2 = special.get(u2)) !== null && _a2 !== void 0 ? _a2 : "".concat(u2).toLowerCase().replace(/s$/, "");
  }
  function monthDiff(a2, b) {
    if (a2.date() < b.date())
      return -monthDiff(b, a2);
    const wholeMonthDiff = (b.year() - a2.year()) * 12 + (b.month() - a2.month());
    const anchor2 = a2.clone().add(wholeMonthDiff, M).valueOf();
    const c2 = b.valueOf() - anchor2 < 0;
    const anchor22 = a2.clone().add(wholeMonthDiff + (c2 ? -1 : 1), M).valueOf();
    const decimalMonthDiff = (b.valueOf() - anchor2) / (c2 ? anchor2 - anchor22 : anchor22 - anchor2);
    const result = wholeMonthDiff + decimalMonthDiff;
    const negatedResult = -result;
    const absResult = +negatedResult;
    const finalResult = !isNaN(absResult) ? absResult : 0;
    return finalResult;
  }
  function absFloor(n2) {
    return n2 < 0 ? Math.max(Math.ceil(n2), 0) : Math.floor(n2);
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
    ordinal: (n2, _2) => {
      const s2 = ["th", "st", "nd", "rd"];
      const v2 = n2 % 100;
      const i2 = (v2 - 20) % 10;
      const k2 = i2 < s2.length ? i2 : v2 < s2.length ? v2 : 0;
      return "[".concat(n2).concat(s2[k2], "]");
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
    ordinal: (number, period) => {
      if (period == "W") {
        return "".concat(number, "周");
      }
      return "".concat(number, "日");
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
    meridiem: (hour, minute, _2) => {
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
        localeState.locales.forEach(function(_2, key2) {
          list.push(key2);
        });
        uni.__log__("warn", "at uni_modules/lime-dayuts/common/use.ts:46", '未知语言: "'.concat(locale2, '". 请使用以下已知语言之一:').concat(list.join(", ")));
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
    let l2 = null;
    if (preset == null)
      return dayutsIntl.locale;
    if (typeof preset == "string") {
      const presetLower = preset.toLowerCase();
      if (dayutsIntl.has(presetLower)) {
        l2 = presetLower;
      }
      if (object != null) {
        dayutsIntl.set(presetLower, object);
        l2 = presetLower;
      }
      const presetSplit = preset.split("-");
      if (l2 == null && presetSplit.length > 1) {
        return parseLocale(presetSplit[0]);
      }
    } else if (preset instanceof DayutsLocale) {
      dayutsIntl.set(preset.name, preset);
      l2 = preset.name;
    }
    if (!isLocal && l2 != null) {
      dayutsIntl.locale = l2;
    }
    return l2 !== null && l2 !== void 0 ? l2 : dayutsIntl.locale;
  }
  function tryParseNumberAtIndex(digits, index) {
    if (index >= 0 && index < digits.length) {
      if (digits[index] == null)
        return null;
      const parsedNumber = isNumber(digits[index]) ? digits[index] : parseInt("".concat(digits[index]), 10);
      if (!isNaN(parsedNumber)) {
        return parsedNumber;
      }
    }
    return null;
  }
  function createDateFromArray(d2, offset = 0) {
    var _a2, _b, _c, _e2, _f, _g, _h;
    const year = (_a2 = tryParseNumberAtIndex(d2, 1 - offset)) !== null && _a2 !== void 0 ? _a2 : (/* @__PURE__ */ new Date()).getFullYear();
    const month = ((_b = tryParseNumberAtIndex(d2, 2 - offset)) !== null && _b !== void 0 ? _b : 1) - 1;
    const day = (_c = tryParseNumberAtIndex(d2, 3 - offset)) !== null && _c !== void 0 ? _c : 1;
    const hour = (_e2 = tryParseNumberAtIndex(d2, 4 - offset)) !== null && _e2 !== void 0 ? _e2 : 0;
    const minute = (_f = tryParseNumberAtIndex(d2, 5 - offset)) !== null && _f !== void 0 ? _f : 0;
    const second = (_g = tryParseNumberAtIndex(d2, 6 - offset)) !== null && _g !== void 0 ? _g : 0;
    const millisecond = ((_h = tryParseNumberAtIndex(d2, 7 - offset)) !== null && _h !== void 0 ? _h : 0).toString().substring(0, 3);
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
        const d2 = date.match(REGEX_PARSE);
        const isNull = d2 == null || Array.isArray(d2) && d2.length == 0;
        if (!isNull) {
          return createDateFromArray(d2);
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
      var _a2;
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
      this.$L = (_a2 = parseLocale(cfg.locale)) !== null && _a2 !== void 0 ? _a2 : dayutsIntl.locale;
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
    isBetween(input, input2, units = "millisecond", interval2 = "()") {
      const dA = dayuts(input);
      const dB = dayuts(input2);
      const dAi = interval2.startsWith("(");
      const dBi = interval2.endsWith(")");
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
      var _a2;
      const isStartOf = startOf;
      const unit = prettyUnit(units);
      const instanceFactory = (d2, m2) => {
        const ins = dayuts(new Date(this.$y, m2, d2));
        return isStartOf ? ins : ins.endOf(D);
      };
      const instanceFactorySet = (method, slice2) => {
        const argumentStart = [0, 0, 0, 0];
        const argumentEnd = [23, 59, 59, 999];
        const args = (isStartOf ? argumentStart : argumentEnd).slice(slice2);
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
      const utcPad = "set".concat(this.$u ? "UTC" : "");
      if (unit == Y) {
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);
      } else if (unit == M) {
        return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);
      } else if (unit == W) {
        const weekStart = (_a2 = this.$locale().weekStart) !== null && _a2 !== void 0 ? _a2 : 0;
        const gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
        return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
      } else if (unit == D || unit == DATE) {
        return instanceFactorySet("".concat(utcPad, "Hours"), 0);
      } else if (unit == H) {
        return instanceFactorySet("".concat(utcPad, "Minutes"), 1);
      } else if (unit == MIN) {
        return instanceFactorySet("".concat(utcPad, "Seconds"), 2);
      } else if (unit == S) {
        return instanceFactorySet("".concat(utcPad, "Milliseconds"), 3);
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
    add(number, units) {
      var _a2;
      const unit = prettyUnit(units);
      const instanceFactorySet = (n2) => {
        const d2 = dayuts(this);
        return d2.date(d2.date() + Math.round(n2 * number));
      };
      if (unit == M) {
        return this.set(M, this.$M + number);
      }
      if (unit == Y) {
        return this.set(Y, this.$y + number);
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
      const step = (_a2 = steps.get(unit)) !== null && _a2 !== void 0 ? _a2 : 1;
      const nextTimeStamp = this.$d.getTime() + number * step;
      return wrapper(nextTimeStamp, this);
    }
    /**
     * 从当前 Dayuts 实例中减去指定的时间。
     * @param {number} number - 要减去的时间。
     * @param {string} units - 要减去的时间单位（例如，“years”，“months”，“days”等）。
     * @returns {Dayuts} 更新的 Dayuts 实例。
     */
    subtract(number, units) {
      return this.add(number * -1, units);
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
      const _a2 = this, $H = _a2.$H, $m = _a2.$m, $M = _a2.$M;
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
      const meridiemFunc = meridiem !== null && meridiem !== void 0 ? meridiem : (hour, _2, isLowercase) => {
        const m2 = hour < 12 ? "AM" : "PM";
        return isLowercase ? m2.toLowerCase() : m2;
      };
      const matches = (match) => {
        if (match == "YY") {
          return this.$y.toString().slice(-2);
        } else if (match == "YYYY") {
          return padStart(this.$y.toString(), 4, "0");
        } else if (match == "M") {
          return ($M + 1).toString();
        } else if (match == "MM") {
          return padStart(($M + 1).toString(), 2, "0");
        } else if (match == "MMM") {
          return getShort(locale2.monthsShort, $M, months, 3);
        } else if (match == "MMMM") {
          return getShort(months, $M);
        } else if (match == "D") {
          return this.$D.toString();
        } else if (match == "DD") {
          return padStart(this.$D.toString(), 2, "0");
        } else if (match == "d") {
          return this.$W.toString();
        } else if (match == "dd") {
          return getShort(locale2.weekdaysMin, this.$W, weekdays, 2);
        } else if (match == "ddd") {
          return getShort(locale2.weekdaysShort, this.$W, weekdays, 3);
        } else if (match == "dddd") {
          return weekdays[this.$W];
        } else if (match == "H") {
          return $H.toString();
        } else if (match == "HH") {
          return padStart($H.toString(), 2, "0");
        } else if (match == "h") {
          return get$H(1);
        } else if (match == "hh") {
          return get$H(2);
        } else if (match == "a") {
          return meridiemFunc($H, $m, true);
        } else if (match == "A") {
          return meridiemFunc($H, $m, false);
        } else if (match == "m") {
          return $m.toString();
        } else if (match == "mm") {
          return padStart($m.toString(), 2, "0");
        } else if (match == "s") {
          return this.$s.toString();
        } else if (match == "ss") {
          return padStart(this.$s.toString(), 2, "0");
        } else if (match == "SSS") {
          return padStart(this.$ms.toString(), 3, "0");
        } else if (match == "Z") {
          return zoneStr;
        }
        return null;
      };
      return str.replace(REGEX_FORMAT, (match, $1, offset, string) => {
        var _a3;
        return (_a3 = $1 !== null && $1 !== void 0 ? $1 : matches(match)) !== null && _a3 !== void 0 ? _a3 : zoneStr.replace(":", "");
      });
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
    toUTCString() {
      return this.$d.toString();
    }
    dayOfYear(input = null) {
      const dayOfYear = Math.round((this.startOf("day").valueOf() - this.startOf("year").valueOf()) / 864e5) + 1;
      return input == null ? dayOfYear : this.add(input - dayOfYear, "day");
    }
    fromToBase(input, withoutSuffix, instance, isFrom) {
      var _a2, _b;
      const relObj = (_a2 = localeState.locales.get("en")) === null || _a2 === void 0 ? void 0 : _a2.relativeTime;
      const loc = (_b = instance.$locale().relativeTime) !== null && _b !== void 0 ? _b : relObj;
      if (loc == null)
        return "";
      const T2 = [
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
      const Tl = T2.length;
      let result = 0;
      let out = "";
      let isFuture = false;
      for (let i2 = 0; i2 < Tl; i2 += 1) {
        let t2 = T2[i2];
        if (t2.d != null) {
          result = isFrom ? dayuts(input).diff(instance, t2.d, true) : instance.diff(input, t2.d, true);
        }
        let abs = Math.round(Math.abs(result));
        isFuture = result > 0;
        if (t2.r == null || t2.r != null && abs <= t2.r) {
          if (abs <= 1 && i2 > 0)
            t2 = T2[i2 - 1];
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
  const __className$7 = "GenSrcSubTimeTime";
  const _sfc_main$8 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$7,
    __filename: "src/sub/time/time.uvue",
    __name: "time",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubTimeTimeSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubTimeTimeSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const appStore = useAppStore();
      const isDark = vue.computed(() => {
        return appStore.state.isDark;
      });
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
      onNavbarPullDownRefresh(() => {
        setTimeout(() => {
          stopNavbarPullDownRefresh();
        }, 800);
      });
      return () => {
        "raw js";
        const n43 = vue.createSharedDataComponent(AppKu, "1a7f8a69", {
          layout: "navbar",
          "show-back": true,
          "hide-navbar": false,
          "enable-pull-down-refresh": true,
          "page-style": { "navigationBarTitleText": "时间日期操作", "navigationStyle": "custom" }
        }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n42 = vue.createSharedDataComponent(LayoutComponent, "78c693a1", {
              "show-back": true,
              "hide-navbar": false,
              "enable-pull-down-refresh": true,
              "page-style": { "navigationBarTitleText": "时间日期操作", "navigationStyle": "custom" }
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedDataClass(__sharedData, 15, ["weapp-tw-border flex flex-col p-_b16px_B", isDark.value ? "bg-_b_h0f172a_B" : "bg-_b_hf8fafc_B"]);
                });
                const n40 = vue.createSharedDataComponent(Card, "78c69eac", { title: "时间日期操作 (lime-dayuts)" }, {
                  "default": () => {
                    vue.setSharedDataEvent(__sharedData, 3, () => {
                      return adjustOffset(-7);
                    });
                    vue.setSharedDataEvent(__sharedData, 4, () => {
                      return adjustOffset(-1);
                    });
                    vue.setSharedDataEvent(__sharedData, 5, () => {
                      return adjustOffset(1);
                    });
                    vue.setSharedDataEvent(__sharedData, 6, () => {
                      return adjustOffset(7);
                    });
                    vue.renderSharedDataEffect(() => {
                      const _offsetDays = offsetDays.value;
                      vue.setSharedData(__sharedData, 7, vue.toDisplayString(currentFullTime.value));
                      vue.setSharedData(__sharedData, 8, vue.toDisplayString(_offsetDays > 0 ? "+" : ""));
                      vue.setSharedData(__sharedData, 9, vue.toDisplayString(_offsetDays));
                      vue.setSharedData(__sharedData, 10, vue.toDisplayString(targetOffsetTime.value));
                      vue.setSharedData(__sharedData, 11, vue.toDisplayString(startOfMonth.value));
                      vue.setSharedData(__sharedData, 12, vue.toDisplayString(endOfMonth.value));
                      vue.setSharedData(__sharedData, 13, vue.toDisplayString(isLeapYear.value ? "366天 (闰年)" : "365天 (平年)"));
                      vue.setSharedData(__sharedData, 14, vue.toDisplayString(daysToYearEnd.value));
                    });
                  }
                });
                vue.setSharedData(__sharedData, 2, n40.sharedData);
              })
            });
            vue.setSharedData(__sharedData, 1, n42.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n43.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$8 = {};
  const SrcSubTimeTime = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["styles", [_style_0$8]]]);
  const logoImg = "/assets/logo.de257528.png";
  const __className$6 = "GenSrcSubUiTestUiTest";
  const _sfc_main$7 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$6,
    __filename: "src/sub/uiTest/uiTest.uvue",
    __name: "uiTest",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubUiTestUiTestSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubUiTestUiTestSharedData", sharedDataClassId: 0 })));
      vue.useSharedDataScope(__sharedData);
      const logoSrc = logoImg;
      return () => {
        "raw js";
        const n10 = vue.createSharedDataComponent(AppKu, "86c4cc4a", {
          layout: "navbar",
          "show-back": true,
          "hide-navbar": false,
          "enable-pull-down-refresh": false,
          "page-style": { "navigationBarTitleText": "UI 测试", "navigationStyle": "custom" }
        }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n9 = vue.createSharedDataComponent(LayoutComponent, "0b9e8e93", {
              "show-back": true,
              "hide-navbar": false,
              "enable-pull-down-refresh": false,
              "page-style": { "navigationBarTitleText": "UI 测试", "navigationStyle": "custom" }
            }, {
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
  const _style_0$7 = {};
  const SrcSubUiTestUiTest = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["styles", [_style_0$7]]]);
  const _base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  function _asciiToBase64(str) {
    var _a2, _b, _c;
    let result = "";
    let i2 = 0;
    while (i2 < str.length) {
      const c1 = (_a2 = str.charCodeAt(i2)) !== null && _a2 !== void 0 ? _a2 : 0;
      const c2 = i2 + 1 < str.length ? (_b = str.charCodeAt(i2 + 1)) !== null && _b !== void 0 ? _b : 0 : 0;
      const c3 = i2 + 2 < str.length ? (_c = str.charCodeAt(i2 + 2)) !== null && _c !== void 0 ? _c : 0 : 0;
      const n2 = c1 * 65536 + c2 * 256 + c3;
      result += _base64Chars.charAt(Math.floor(n2 / 262144) % 64);
      result += _base64Chars.charAt(Math.floor(n2 / 4096) % 64);
      result += i2 + 1 < str.length ? _base64Chars.charAt(Math.floor(n2 / 64) % 64) : "=";
      result += i2 + 2 < str.length ? _base64Chars.charAt(n2 % 64) : "=";
      i2 += 3;
    }
    return result;
  }
  function _svgToDataUrl(svg) {
    return "data:image/svg+xml;base64," + _asciiToBase64(svg);
  }
  function getArrowSvg(color) {
    return _svgToDataUrl('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 88V14M22 42L50 14L78 42" fill="none" stroke="'.concat(color, '" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/></svg>'));
  }
  function getSuccessSvg(color) {
    return _svgToDataUrl('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" fill="none" stroke="'.concat(color, '" stroke-width="8"/><path d="M30 52L45 66L72 38" fill="none" stroke="').concat(color, '" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></svg>'));
  }
  const _loadingOpacities = [0.56, 0.56, 0.65, 0.65, 0.75, 0.75, 0.86, 0.93, 0.93, 1, 0.47, 0.47];
  function getLoadingSvg(color) {
    let lines = "";
    for (let i2 = 0; i2 < 12; i2++) {
      lines += '<line x1="50" y1="4" x2="50" y2="20" opacity="'.concat(_loadingOpacities[i2], '" transform="rotate(').concat(i2 * 30, ' 50 50)"/>');
    }
    return _svgToDataUrl('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g stroke="'.concat(color, '" stroke-width="8" stroke-linecap="round">').concat(lines, "</g></svg>"));
  }
  const base64Empty = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAALeGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTAxLTEzVDE5OjA5OjQwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wMS0xM1QxOTowOTo0MCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZWQwMWYzNWQtOWRjOC00MDBiLWEyMmQtNjM5OGZiNzVhNGRiIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDhlMzQ3ZmEtMDY2My1jYTRiLTgzNTctNTk4YjBkNGIzOTU2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMwMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjMwMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNjg2NzJkLWY5NDMtOTU0Mi1iMDBiLTVlMDExNmE1NmIzZSIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxMDoyNjoxNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphYmJkZmUyZC0xY2Q2LTJiNDgtYjUyNS05YzlhZjdlNjA4NDMiIHN0RXZ0OndoZW49IjIwMjQtMDEtMTNUMTE6MjM6NDArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTQ5MjM5MDAtNDhiZC03YTQ1LWI4NGItYmVlZTVjOWUxYTM1IiBzdEV2dDp3aGVuPSIyMDI0LTAxLTEzVDExOjIzOjQwKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVkMDFmMzVkLTlkYzgtNDAwYi1hMjJkLTYzOThmYjc1YTRkYiIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxOTowOTo0MCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmFiYmRmZTJkLTFjZDYtMmI0OC1iNTI1LTljOWFmN2U2MDg0MyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM2ZGQ4NTQxLWQ0MWEtYmY0Yy1iZjA3LWNmNjZhNjZhMDg2MSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmQwODAyODAyLTM1MmEtODU0YS05MWI3LTZkZTZkNTJlYjNkMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm30U/gAAAAJcEhZcwAALiMAAC4jAXilP3YAAAA/UExURUdwTODg4O3t7e7u7unp6d7e3uTk5M/Pz8nJyePj4+jo6Pj4+MrKyszMzO7u7unp6fb29vLy8vr6+v7+/sHBweag3xAAAAAOdFJOUwAxia5pF0n+/vzX3KbULQ2DYQAACG1JREFUeNrtm4l2o7gShi20IWFrAd7/WUc7EosDWKZ976Hc7WTmdMKXv0qlqpLyeNx222233Xbbbbfddtv/mOHn8xexSNsiRH5PrbFtW4p+DetpsF4v8Gs+HA3WEwOAfwzriYxaLTVsP8X1QK0z+vqQCzewYogi60aL9SEX5oyxphYVCFTGjfSJCTmN1jBruN5KTGCUS8bhySQGHRaohmW4glwtldbOeYJYKlgvbyUuA8aFFEKc++aIM4hrRnyiMnIZKq1PrihcM3GNKboMF1Naa9X9+8T1KrxIlVbGjv3cAEHOYYMqqgUsVuJqqehV3+sjDwB+DTJp0lYtMCyZpxqjF4e+74+sRcQSFZO8UonUSEFzuUY+DKo59A2kZDatGCjzCauy/2AmhSyCq0WHEj0KTNJDmVeNhErMt1Q8W4xti4/FwMJ4jaxl05TKFiNtD3kBGrHnhiph9V0eXQc6DkyE2xX830AlKshFTErXeuCZXK/9m41wFsGSfZ4lcGeyZ98PrylJ7MWCojQZ3qSukL2QslgdngqJnTEPdTJhXvbNBoR/+7wabIxWduN/Ja5dWEivm4XSZ2uQckNzmRlHrn2lc6eiafvS4V2Hd12tesau8toZW0CtWoZYb9t+OqxdCYKYjVPF16pVbILIy/gR7MVaWMHYPCoa2VkzkX4Iry2rirXbumGyAjGC1h62YLw6ApsNKZph3fpIWHt08JovRWD62sejpXhTrhWrPpl6zZ6PW2oTG5ltlvgtF6weNYCWKeJJSfg4W6PNJlj3sVZgOXV4lc8n4RlkMTLEBDVoYc3nI09kpyzzfgWsjyzBZSNDKF2/wjh+sxYvn8Y1scxlfLF9T1RBO3wVHsnq8Fk4oGkEh/0KJPSa8T2CeWE5X9BPmgLsaRIGeNL2kshCsWoLBmdPJW5Wbz1ndAKUXjPwxXYAUpSV3fy5BJg1aa1tyVXHHMgVH31ewDVrleHr9XqC684SUF4mecR3+wW5SC2QNvxUizRv98mLDhPgYiMDb+v8g0OADxqxcnf9w01mZYJF0fUVP5LcdswbsMmy1DVs5PlE5NpNiTR8M8qAWZkOy6aN13VcoOF2/s3xn3Mes8Xza05tgR/BuNz69nlNzMR0fH45p+G4R9oxh2mKt9MF4J7K/lvWUojwF5nCgCpuRUptnZMQ3au0nSo2UsHgV3xpmeLYzGml3ZFBBzYGPCpOQRwXs1/GG1J74dlZc6JKUOtjBAz9XjVxucGWHbZVJDPJQGYDRl1Qmf1ovk2Sbghb6MQlnF7mBzM1bgOqJAPpoOQaVe+4Skcit3uqHMyG/Sh1rHNN0gAfM0nnPrmulfLVBSm20TSZSdWa0LJl2ukVyE4vTYCgP3uQkwv1TKtQWgxDzBSg80OQjCs4klKvuUzHLCfIbDKIE/S5VIGqD1iD2819pkAqTWdmeina+oZABi7X5B1MGoTJqJSchuk6JNHcgUPAcsVFk0+N0oDN68Vo7FQSmCXjx46OEtUk1lpY2ZFQGr/AcpqVato4wPUD+RhfAeyQI5sJ6l2sDwnKqNFSJvpiyJbFl3kTOjZ2ievwCR7hkUoWeV2vOLAXvB39AJoyqYa81A5cvaAidXYTFTycKDBcalVK5f3XS89kzLVl9txfL+K+p6NUnitz5KkKm7D3DrRPNq4bk7l20aFRppNilmuQI+uzTtj9wPBkTsVwM7HbJ5pwGgujyRyZDzQLNoiRFluRtQ+GzEguqRxUL+ZMFqulMzIfaP3ARj2k/txB8c+2HyjmDizCaVWtNoE5MvMlKs/4VQ7HUJZCrU6qCKcNJ2aSWUZhJZu4VI0LB4CHFdj77DRuGi28WKAxoRyZyzGVrmc0jmk1nP5QaxZo1puqq1YIAqgZb8e/rABZJWNCNxV7DSTpOO7Aail9J9nYHtua/4ouE/aS0X1qtXQzwGx+rnbi2vhF/TfZG52oc6DPo1WCi3RTDnRk7TEntoEp38gg+DjYs2opkR3JW5EpL9rU0XSK5/6LOTAVS+72x7pm60zSf5HMdldjhzJqw1FRcxXdS3ZNZp0s92FiyluUvBPoD9ynZNkBiu2NF11ofnlnQbZgKqvusj9R/f6DOzgVsahbNlXxlsxU8y7qrbTupitRyxFBKG6H3aEPUqj7YrzAymq41FXlZLlO4WLbvG2Kg4vYB+wPfWS2B5Rq8TW9ROpAZbiF6MmCTsx1NLLsx7NOoOiZup2CNbZ36xc96ErcxzuILGrmmFhimjtwKo/yTm7feTVwB61IzbnW4967Kt3cDDotGt8JKrTiUyO3Uy2PZZt9tapXEfXhWmTgcoB+JchFWsiCKvYnhmn/tKuJDbgly897FnFfkE1rQLKy810OU7xW3bEJHCD5gERtuTGuxoJqA6qI9TNMa6MbvZomsiubbPYx78YXDaaRqqsyqfSaLZdjYGHLu65rDgydXCWm1P5EvcQ828f9pcBapTILSMv1nZCAc0WzFIFsGfUi/kmAxc6cFqDSYuPSMIbs1OVrwITTQM9HVRFJ5JL56qcoFzzT1uVcd2v9jFw8BHlcWtmEI86hp5Dy/zOlK8cUp/rVseRUBqawz6kmAcPLM9l5m8h4V53Iz/2mFJaTCvF8JbsMvPjU/7crbUXart0v4WyE0LnDPcAX95Knj4VUE8HCdNdUP8BDcOXKdPl4uSWbh4LfOV0HDdfipOmu+eIRrDsNPkIT7np/8ZAzVdOd1u8wHIqeXt8VqtgiO50ePeNaGG+uO9rHiKdL71pnIun8jxEKXv2r2HYBzO/mz96vFKoMM5WLk7tQXS9U5kwCu5lk7n6++kdCFWRaTUzm0/5fClWGWTrM/AGhCrJO/ZBQhTPFLwmV7ebgcdttt91222233Xbbbf+H9h+2WEtdHVinLAAAAABJRU5ErkJggg==";
  const base64Error = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAALeGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTAxLTEzVDE5OjEwOjEwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wMS0xM1QxOToxMDoxMCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTQ3NTExNjAtZDY5MC00ZTkzLWFhNGUtNGMwYTViNGU1ZGFjIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRiNzlkYWMtZTJmYS1iNzQ0LWIxM2ItOWU1N2VjMDhhM2YwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMwMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjMwMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNjg2NzJkLWY5NDMtOTU0Mi1iMDBiLTVlMDExNmE1NmIzZSIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxMDoyNjoxNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZjk1NTE1OC04MjFiLTA4NDUtYWJmNS05YTE1NGM1ZTY4NjEiIHN0RXZ0OndoZW49IjIwMjQtMDEtMTNUMTE6MDQ6MDQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZGM1Y2IyNWItZDZlNC0yZjQ2LTgyODQtZmUwOTNlY2M2ZTkxIiBzdEV2dDp3aGVuPSIyMDI0LTAxLTEzVDExOjA0OjA0KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE0NzUxMTYwLWQ2OTAtNGU5My1hYTRlLTRjMGE1YjRlNWRhYyIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxOToxMDoxMCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmNmOTU1MTU4LTgyMWItMDg0NS1hYmY1LTlhMTU0YzVlNjg2MSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM2ZGQ4NTQxLWQ0MWEtYmY0Yy1iZjA3LWNmNjZhNjZhMDg2MSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmQwODAyODAyLTM1MmEtODU0YS05MWI3LTZkZTZkNTJlYjNkMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph2LDQsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA5UExURUdwTNra2s7Ozq2tre3t7dPT087OzuPj4+3t7dbW1u/v79bW1vz8/MrKytDQ0Nzc3MPDw/X19bi4uMZQDnEAAAAKdFJOUwBqEPywotz+wzqApqiTAAAHW0lEQVR42u1b25akIAwcbx2UFoj//7HLTQVBRcSZfTDnbM/uTl/KSlEkwf75eeONN95444033njjjTduR9/0/yOsbqoevObL7101tYX1HFs9QFtfZalRP+rpQVgdAFx990ZnT8L6eZItUl99jeGpf1DxdV/VP9fV1f/PFlF1bYHoVFSRC60IyVjrFRnuB8IoxpExSrstsErKHpJw1eqybNLbAQvAYkKjUrjoBgKRqAaeIjG5+qaps6hKcMWmcdSwqAJWBbAgCZZaIYbsqggqqlHNbFFa5yVR4jKvrKEErOEjNCqNSwHrfE8lpLsod/u+cOPPMPBJ+Gz5dM0cXNgclre+pSxhYI1WW5Tf9ENSMIdLCiWs6q9hwQprBVYKFqyPlx4WtoSvrT9lC/wkGt8qlkQooC3hi6sgW3Bb8gtdpSV/za/mn49pC0oYhONbfyd5hzDLFivKFpTS1gKM0we0tQCEncfgQn7Rt+DC/299i1MSRJcBC0r7VviG5KZvwV5WIUobxHyrJKy8VRjXVgFYsPu5kOtbxdhycCDuihziXVLoW7xwEiUmDgd544B46luWLW+nugMLB2BimmC3cxTNxCDg8xFtuUSNqoFsDKzY8psa+XtBNWXr74N6qxwsS5T6VL5robKl10+ZRu5S9qBvUYuJwVHzjwjrE3G33qKh+WXBgmkmCvHYquTvZ8oo7rLFA4PJgYW0MdePIRQIGUPNbSMw5lubJMKtJI6+Wk6cVFMmACO+VVryeL7ZgI8MhwS2fnNPPK0geHBRd11eJSiyL4KjrL2umm1XIpRii1MKB/mU/iCZwF+pt5z3UJ7UiF3nQqadAXC3T3xEW2IyuDBe3yDTe0+A64it2WTyYSGVHymUI/EduvSWKJ80Dtv2NbYSoQxbMkVC7yzNGIWFvDF7gRD79RYrWW/BDGti4wwLtgvO7gWKUZ8Mt94qX8vLJE70+xVNwzDm9ghNM+FX7p/jlZUId2HJD+Tf79hMe3WNrAK/30E+C8/6xOCqbqxE5JNMYrNbnaLUvJAewfCg8zF0Ba/tbviWLvPYfsGFA1PVD8ZdnjlVc/DS/o7LK4NHjOjKKbfCTSCo5XmwKbaZM4jlc9NGEYd9Ijd0QS5ZGaOR2O+DPlGyRb2nXZzgnI1GdFWF+0gh3ifyTRqvzpXI2eElk58FeHziCF5hY+hSMV9Ge/mohUTGuQ4vzHYe8bW5sNdFQ58St22Vcf5zzJbtcGT4iYQ7iz8dFuxoWRYMjAM7KCnypHOTLSqdUwYIFpndOD/6B2FBzNQxYmW/zxYE4j8yLHga1s2Rbm/O5PXtGcuNDIW1dTj5hpjGsO+7z2Kk9NP1JWDlnWKAM4H6zCUNM05KyVPHBclYzUbgjE3N3tP2JWHBmbqD4GLeCs2jhMT13lMVljwcEbetwZgtHUxVQ21ho3fE7inf2s8vzMWq0EWpfOBg5hcDSGwaF2+LaysRIzNFqRgBv2sMhi/Ix0WiW8rBKNBv4ExBI7eorx9ANazsPCb5FkSNH+Reacos+AYxaFzX76KMH65c8ytzZ40YvpFAqtgC/otn1eCmMI5K8yVRQVVwq3aVtU+jJktwjyP7x+BKv8vtoH098vXYSJcrWGJcAW11r8WVRxe5vgcuFbXqwnaEZejS6mrLwYKUg1ch2RJswTFYgMOwoau+AQsSp/FuDhVZi7J402ifgGla/GJIzGLYG5H4rnKMCUydL9wcsmZSuPikR2QmjQbWqaV2ob2RdMvaLEvFlRiXpYeTwqVOtMZF+qi0dS4uEjJKMvWuYK3S0jHZwaq7BylYp/O2uu3q04lNqudLWEJQd/3paTBz12IaLIPtzE5P1AUuW9TB8NVzaG9/TIfV+eXsWeezz6HWlptEbo4SIAeWur/Y/RZC/gmZTiLzUY2j5ct6fjKsFvxqgyQxE9sbmfYtnJMIciEKo6+FL0wziJmtkzspIcUl0PgWrL7VCKP7hl61U4WLeN+7Ieli2vZhmq0VgjDOgIyhJ62sSpDkWNZa1wiB8WoLlxzy29XpGVPgn1ut5VYcGyRLK7OCiJaDYMrAneJUkZWdw0yDgNm5nDowqLc0Kp581FO7QS4pC9S/YRW9xkVdNOj0ZHCp9anEZw3VEK/fopiDrkMObkcdJtT1g6+uzQ60bIdUPztdWZWy53m+v/zFYPOGHO4AZsalmtJNkyHrCAx1RXX7mt5g1L1pDezpkXv8wJwpVRSSaf2c26Y0rrXXxyWBptu/ovdak+VhkqjGBZUdvKygqANKA/MqZ/36kcGwFn90RnWp66ksKuHgitLFY8BU+F2ZvqpxpMY9qR3YwOUJ12fc0KUHVKdswcKXuwetErCnwvMKuXxfc/3RVJ2yFc+iosQd3X+WGSVz1UiuN2J156FyVyHbsOUp3krezaPUT/VxXqdfwvknb/Zgp+idTxTbrkLqYuKreRnhy65Gf4W0NsDoYiqf6uZsvr8V9eo6XWc5+3TVf/3N1TfeeOONN95444033njjjTfeSI1/IeOYOeO4fGAAAAAASUVORK5CYII=";
  const base64BackToTop = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAElBMVEVRUVH+/v5HcEyZmZlRUVFRUVGm1ByOAAAABnRSTlPMzADMTZAJBBGsAAAEnElEQVR42t2cS27jMAyGf7/2U+QCQeDsbeQCgZDujaC5/1UmkzaJn+JDFGcw3LdfflKibJkkDnxrL7dbg7sNt6+L4O8OYBM+B0ys+QrGkHZG+OEEQ8g6go8Bx1GIGMdpNOQyIG6XdMgnSPtKhLQDGEZFBgYMkhKFtGBb0EIEjDgFRowoBVaMGAWpMedEfxMiZtwpUsgZCqtlkCNUdpVAWigtCCCDFtLwIWeoreZCWiRYYEKGFEjDg+yRZCUH0iLRAgNyToXUNCRZyMqWhGnUN2IPm3wSlwJ7IUspyCBkIQUZhCykIIeQuRTkEDKXAuM9srrtYbrZN7Y98giZSoFd+t1OxmMITG0dcrSFXFchZ1tIvQZpYWxhBbK3hpQrkMEa0iwh5t4a+QvZvDXyF7J5a+Qv5PPW21/I5623v5DPW29/IaO3Xv5Clrw1y1/Ikrdm+Qs5svw83yNnSJ5BQb4F/F7EIEJSnThGBAXxkFQfLOviQUE8JAUPsosHBfGQfDAtHhREQ1JxIV00KIgmrnRI84S0yAd5BAXxxJUck0f6Qnwr9qmr6xF5xLMjcwn/iudIEAdWnyjkEXlQKZiRVzoqRyLbgeUKKR8Q4alY7cSnoxzSf2ggsqehKr6YVpcXpOd7H93f60cKhOd7Re2LteUF4eLqiVS1mr0ge4io6C2+soaFkJ7MuuuQs1yITEp9hwwKISIpzR2iESKSIoT0rLNwuVHQqoSIpAQJpGce60vIUSdEIuUqgPTsJ5QFZK8UIpBS8iG94GFrDjlrhfCl8CG96Llxmle4kEr6vKWBPIVo9kqDQSRk9/3cWoikcCFPAd33v4dIChPyEvLzBA6RlEYWke4JEUnhKXkLeUEKxRHJFfKCQHGucIW8IdZSRkLeEGMpYyEjiK2UsZARxFTKRMgYYillImQMMZQyFTKB2EmZCplAuFLIHT8TMoWwpQwiIVMIUwqpZP5bp5CCvCTiQKr5f5lCQN+tPCBn2ZvVDFJwIDUP0m1BYAfZYRNSsCB7BqTbhoARePIxtZ9tgwWkoJcwCalmv3MBAemtO4R6dah2HaKQqj8Zvp9sQDjvJ21+SPCBHPJDDk6QITekEV7gqCC19CpKAym9IMfckKv4olMBCeIrWwVEfvkshzQekO9r9P1/ALk+IG1eSPCDiCJfyG+FyU+A6ZCa/piZDinpz7LpkCv5gdkAEshP5emQhv7onw6pGeULyZCSUYiRDAmMkpJkCKs4JhFSq8p8hJBSVbAkhARV6ZUQoisik0FqXTmcDHLVFfbJIEFXoiiCNMpiSxGkVJaNiiBBWQArgTTaUl4JpNQWJUsgQVteXQg+AKkLxQWFGKW+5J2+eVp4S168X3CF1CltCKdTJ8lb84YK2bUBO+wZW0Pqv9nk4tKu49N45NJC5dMM5tLW5tOg59Jq6NM06dL+abFXwr/RkuvTXJwae1abtE/Dt0/ruksTvs84AZ/BCC4jHnyGVfiM3VBQFANEXEah+Ax18RlP4zNox2dkkM/wI58xTn8yDCXGYCDV3W5RGSajtXyGhG1jbpbjzpwGt/0MJft8jqC7iUbQ/QZaxdnKqcIftwAAAABJRU5ErkJggg==";
  const __className$5 = "GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmpty";
  const _sfc_main$6 = /* @__PURE__ */ vue.defineVaporSharedDataComponent(Object.assign({
    name: "z-paging-x-empty"
  }, { __dynamicSharedData: true, __className: __className$5, __filename: "uni_modules/z-paging-x/components/z-paging-x-empty/z-paging-x-empty.uvue", __name: "z-paging-x-empty", props: {
    // 空数据描述文字
    emptyText: {
      type: String,
      default: "没有数据哦~"
    },
    // 空数据图片
    emptyImg: {
      type: String,
      default: ""
    },
    // 是否显示空数据图重新加载按钮
    showEmptyReload: {
      type: Boolean,
      default: false
    },
    // 空数据点击重新加载文字
    emptyReloadText: {
      type: String,
      default: "重新加载"
    },
    // 是否是加载失败
    isLoadFailed: {
      type: Boolean,
      default: false
    },
    // 空数据图样式
    emptyStyle: {
      type: Object
    },
    // 空数据图img样式
    emptyImgStyle: {
      type: Object
    },
    // 空数据图描述文字样式
    emptyTitleStyle: {
      type: Object
    },
    // 空数据图重新加载按钮样式
    emptyReloadStyle: {
      type: Object
    }
  }, emits: ["reload", "viewClick"], setup(__props, _a2) {
    var __emit = _a2.emit;
    const __sharedDataScope = vue.useSharedDataScope();
    const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmptySharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const localEmptyImg = vue.computed(() => {
      return props.isLoadFailed ? base64Error : base64Empty;
    });
    const reloadClick = () => {
      emit("reload");
    };
    const emptyClick = () => {
      emit("viewClick");
    };
    return () => {
      "raw js";
      vue.renderSharedDataEffect(() => {
        return vue.setSharedDataStyle(__sharedData, 11, [__props.emptyStyle]);
      });
      vue.createSharedDataIf(() => {
        return vue.setSharedData(__sharedData, 0, vue.toSharedDataBoolean(__props.emptyImg.length > 0));
      }, () => {
        vue.renderSharedDataEffect(() => {
          vue.setSharedDataStyle(__sharedData, 1, [__props.emptyImgStyle]);
          vue.setSharedDataAttr(__sharedData, 2, vue.toSharedDataString(__props.emptyImg));
        });
      }, () => {
        vue.renderSharedDataEffect(() => {
          vue.setSharedDataStyle(__sharedData, 3, [__props.emptyImgStyle]);
          vue.setSharedDataAttr(__sharedData, 4, vue.toSharedDataString(localEmptyImg.value));
        });
      }, 261);
      vue.renderSharedDataEffect(() => {
        vue.setSharedDataStyle(__sharedData, 12, [__props.emptyTitleStyle]);
        vue.setSharedData(__sharedData, 13, vue.toDisplayString(__props.emptyText));
      });
      vue.createSharedDataIf(() => {
        return vue.setSharedData(__sharedData, 5, vue.toSharedDataBoolean(__props.showEmptyReload));
      }, () => {
        vue.setSharedDataEvent(__sharedData, 6, reloadClick);
        vue.renderSharedDataEffect(() => {
          vue.setSharedDataStyle(__sharedData, 7, [__props.emptyReloadStyle]);
          vue.setSharedData(__sharedData, 8, vue.toDisplayString(__props.emptyReloadText));
        });
      });
      vue.setSharedDataEvent(__sharedData, 9, emptyClick);
      vue.setSharedDataClass(__sharedData, 10, ["weapp-tw-border", { "zpx-container": true }]);
      return __sharedData;
    };
  } }));
  const _style_0$6 = {};
  const _style_1$3 = {};
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["styles", [_style_0$6, _style_1$3]]]);
  const __className$4 = "GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoading";
  const _sfc_main$5 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$4,
    __filename: "uni_modules/z-paging-x/components/z-paging-x/components/z-paging-loading.uvue",
    __name: "z-paging-loading",
    props: {
      // loading颜色
      color: {
        type: String,
        default: "#949494"
      },
      // 自定义loading图片，为空时使用内置loading
      src: {
        type: String,
        default: ""
      },
      // 是否展示旋转动画
      animated: {
        type: Boolean,
        default: true
      },
      // loading样式
      imgStyle: {
        type: Object,
        default: () => {
          return new UTSJSONObject({});
        }
      }
    },
    setup(__props) {
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadingSharedData", sharedDataClassId: 0 })));
      const props = __props;
      const finalSrc = vue.computed(() => {
        return props.src.length > 0 ? props.src : getLoadingSvg(props.color);
      });
      const rotateDeg = vue.ref(0);
      let rotateTimer = -1;
      vue.onMounted(() => {
        if (!props.animated)
          return null;
        rotateTimer = setInterval(() => {
          rotateDeg.value = (rotateDeg.value + 30) % 360;
        }, 1e3 / 12);
      });
      vue.onBeforeUnmount(() => {
        if (rotateTimer != -1) {
          clearInterval(rotateTimer);
          rotateTimer = -1;
        }
      });
      return () => {
        "raw js";
        vue.renderSharedDataEffect(() => {
          vue.setSharedDataStyle(__sharedData, 0, [{ transform: "rotate(" + rotateDeg.value + "deg)" }, __props.imgStyle]);
          vue.setSharedDataAttr(__sharedData, 1, vue.toSharedDataString(finalSrc.value));
        });
        return __sharedData;
      };
    }
  });
  const _style_0$5 = {};
  const _style_1$2 = {};
  const zPagingLoading = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["styles", [_style_0$5, _style_1$2]]]);
  class LoadingType extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            Refresher: { type: String, optional: false },
            LoadMore: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = LoadingType.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.Refresher = this.__props__.Refresher;
      this.LoadMore = this.__props__.LoadMore;
      delete this.__props__;
    }
  }
  class Refresher extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            Default: { type: String, optional: false },
            ReleaseToRefresh: { type: String, optional: false },
            Loading: { type: String, optional: false },
            Complete: { type: String, optional: false },
            GoF2: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = Refresher.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.Default = this.__props__.Default;
      this.ReleaseToRefresh = this.__props__.ReleaseToRefresh;
      this.Loading = this.__props__.Loading;
      this.Complete = this.__props__.Complete;
      this.GoF2 = this.__props__.GoF2;
      delete this.__props__;
    }
  }
  class More extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            Default: { type: String, optional: false },
            Loading: { type: String, optional: false },
            NoMore: { type: String, optional: false },
            Fail: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = More.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.Default = this.__props__.Default;
      this.Loading = this.__props__.Loading;
      this.NoMore = this.__props__.NoMore;
      this.Fail = this.__props__.Fail;
      delete this.__props__;
    }
  }
  class QueryFrom extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            Refresh: { type: String, optional: false },
            UserPullDown: { type: String, optional: false },
            LoadMore: { type: String, optional: false },
            Reload: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = QueryFrom.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.Refresh = this.__props__.Refresh;
      this.UserPullDown = this.__props__.UserPullDown;
      this.LoadMore = this.__props__.LoadMore;
      this.Reload = this.__props__.Reload;
      delete this.__props__;
    }
  }
  class CacheMode extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            Always: { type: String, optional: false },
            Default: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = CacheMode.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.Always = this.__props__.Always;
      this.Default = this.__props__.Default;
      delete this.__props__;
    }
  }
  class EnumType extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            LoadingType: { type: LoadingType, optional: false },
            More: { type: More, optional: false },
            Refresher: { type: Refresher, optional: false },
            QueryFrom: { type: QueryFrom, optional: false },
            CacheMode: { type: CacheMode, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = EnumType.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.LoadingType = this.__props__.LoadingType;
      this.More = this.__props__.More;
      this.Refresher = this.__props__.Refresher;
      this.QueryFrom = this.__props__.QueryFrom;
      this.CacheMode = this.__props__.CacheMode;
      delete this.__props__;
    }
  }
  const Enum = new EnumType({
    // 当前加载类型 refresher:下拉刷新 load-more:上拉加载更多
    LoadingType: new LoadingType({
      Refresher: "refresher",
      LoadMore: "load-more"
    }),
    // 下拉刷新状态 default:默认状态 release-to-refresh:松手立即刷新 loading:刷新中 complete:刷新结束 go-f2:松手进入二楼
    Refresher: new Refresher({
      Default: "default",
      ReleaseToRefresh: "release-to-refresh",
      Loading: "loading",
      Complete: "complete",
      GoF2: "go-f2"
    }),
    // 底部加载更多状态 default:默认状态 loading:加载中 no-more:没有更多数据 fail:加载失败
    More: new More({
      Default: "default",
      Loading: "loading",
      NoMore: "no-more",
      Fail: "fail"
    }),
    // @query触发来源 user-pull-down:用户主动下拉刷新 reload:通过reload触发 refresh:通过refresh触发 load-more:通过滚动到底部加载更多或点击底部加载更多触发
    QueryFrom: new QueryFrom({
      UserPullDown: "user-pull-down",
      Reload: "reload",
      Refresh: "refresh",
      LoadMore: "load-more"
    }),
    // 列表缓存模式
    CacheMode: new CacheMode({
      //默认模式，只会缓存一次
      Default: "default",
      //总是缓存，每次列表刷新(下拉刷新、调用reload等)都会更新缓存
      Always: "always"
    })
  });
  class RefresherTimeTextMapType extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            title: { type: String, optional: false },
            none: { type: String, optional: false },
            today: { type: String, optional: false },
            yesterday: { type: String, optional: false }
          };
        }
      };
    }
    constructor(options, metadata = RefresherTimeTextMapType.get$UTSMetadata$(), isJSONParse = false) {
      super();
      this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
      this.title = this.__props__.title;
      this.none = this.__props__.none;
      this.today = this.__props__.today;
      this.yesterday = this.__props__.yesterday;
      delete this.__props__;
    }
  }
  const refresherTimeStorageKey = "Z-PAGING-X-REFRESHER-TIME-STORAGE-KEY";
  const refresherTimeTextMap = new RefresherTimeTextMapType({
    title: "最后更新：",
    none: "无",
    today: "今天",
    yesterday: "昨天"
  });
  function updateRefesrherTime(key2) {
    var _a2;
    const datas = (_a2 = _getRefesrherTime()) !== null && _a2 !== void 0 ? _a2 : new UTSJSONObject({});
    datas[key2] = getTime();
    uni.setStorageSync(refresherTimeStorageKey, datas);
  }
  function getRefesrherFormatTimeByKey(key2) {
    const time2 = _getRefesrherTimeByKey(key2);
    const timeText = time2 != null ? _timeFormat(time2) : refresherTimeTextMap.none;
    return "".concat(refresherTimeTextMap.title).concat(timeText);
  }
  function getTime() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  function _getRefesrherTime() {
    const result = uni.getStorageSync(refresherTimeStorageKey);
    return result != null && UTS.isInstanceOf(result, UTSJSONObject) ? result : null;
  }
  function _getRefesrherTimeByKey(key2) {
    const datas = _getRefesrherTime();
    if (datas != null) {
      return datas.getNumber(key2);
    }
    return null;
  }
  function _timeFormat(time2) {
    const date = new Date(time2);
    const currentDate = /* @__PURE__ */ new Date();
    const dateDay = _onlyKeepDateDay(new Date(time2));
    const currentDateDay = _onlyKeepDateDay(/* @__PURE__ */ new Date());
    const disTime = dateDay.getTime() - currentDateDay.getTime();
    let dayStr;
    const timeStr = _dateTimeFormat(date);
    if (disTime == 0) {
      dayStr = refresherTimeTextMap.today;
    } else if (disTime == -864e5) {
      dayStr = refresherTimeTextMap.yesterday;
    } else {
      dayStr = _dateDayFormat(date, date.getFullYear() !== currentDate.getFullYear());
    }
    return "".concat(dayStr, " ").concat(timeStr);
  }
  function _onlyKeepDateDay(date) {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  }
  function _dateDayFormat(date, showYear = true) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return showYear ? "".concat(year, "-").concat(_fullZeroToTwo(month), "-").concat(_fullZeroToTwo(day)) : "".concat(_fullZeroToTwo(month), "-").concat(_fullZeroToTwo(day));
  }
  function _dateTimeFormat(date) {
    const hour = date.getHours();
    const minute = date.getMinutes();
    return "".concat(_fullZeroToTwo(hour), ":").concat(_fullZeroToTwo(minute));
  }
  function _fullZeroToTwo(value) {
    const str = value.toString();
    return str.length == 1 ? "0" + str : str;
  }
  const __className$3 = "GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher";
  const _sfc_main$4 = /* @__PURE__ */ vue.defineVaporSharedDataComponent(Object.assign({
    name: "z-paging-refresher"
  }, { __dynamicSharedData: true, __className: __className$3, __filename: "uni_modules/z-paging-x/components/z-paging-x/components/z-paging-refresher.uvue", __name: "z-paging-refresher", props: {
    // 下拉刷新状态
    status: {
      type: String,
      default: Enum.Refresher.Default
    },
    // 自定义下拉刷新默认状态下的文字，默认：继续下拉刷新
    defaultText: {
      type: String,
      default: "继续下拉刷新"
    },
    // 自定义下拉刷新松手立即刷新状态下的文字，默认：松开立即刷新
    pullingText: {
      type: String,
      default: "松开立即刷新"
    },
    // 自定义下拉刷新刷新中状态下的文字，默认：正在刷新...
    refreshingText: {
      type: String,
      default: "正在刷新..."
    },
    // 自定义下拉刷新刷新结束状态下的文字
    completeText: {
      type: String,
      default: "刷新完成"
    },
    // 自定义继续下拉进入二楼状态下的文字
    goF2Text: {
      type: String,
      default: "松手进入二楼"
    },
    // 是否显示最后更新时间，默认为否
    showUpdateTime: {
      type: Boolean,
      default: false
    },
    // 用户区分不同z-paging-x组件的最后更新时间
    updateTimeKey: {
      type: String,
      default: "default"
    },
    // 最后更新时间更新的时间戳
    timeTextTimestamp: {
      type: Number,
      default: 0
    },
    // 主题样式，支持black，white
    themeStyle: {
      type: String,
      default: "black"
    },
    // 自定义默认状态下的图片
    defaultImg: {
      type: String,
      default: ""
    },
    // 自定义松手立即刷新状态下的图片，默认与defaultImg一致
    pullingImg: {
      type: String,
      default: ""
    },
    // 自定义刷新中状态下的图片
    refreshingImg: {
      type: String,
      default: ""
    },
    // 自定义刷新结束状态下的图片
    completeImg: {
      type: String,
      default: ""
    },
    // 刷新中状态下是否展示旋转动画
    refreshingAnimated: {
      type: Boolean,
      default: true
    },
    // 左侧图标的样式
    imgStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    // 右侧状态描述文字的样式
    titleStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    // 右侧最后更新时间文字的样式
    updateTimeStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  }, setup(__props) {
    const __sharedDataScope = vue.useSharedDataScope();
    const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresherSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const isWhiteTheme = vue.computed(() => {
      return props.themeStyle === "white";
    });
    const iconColor = vue.computed(() => {
      return isWhiteTheme.value ? "#ffffff" : "#515151";
    });
    const indicatorColor = vue.computed(() => {
      return isWhiteTheme.value ? "#ffffff" : "#949494";
    });
    const titleColor = vue.computed(() => {
      return isWhiteTheme.value ? "#efefef" : "#555555";
    });
    const arrowSvg = vue.computed(() => {
      return getArrowSvg(iconColor.value);
    });
    const successSvg = vue.computed(() => {
      return getSuccessSvg(iconColor.value);
    });
    const isDefault = vue.computed(() => {
      return props.status === Enum.Refresher.Default;
    });
    const isReleaseToRefresh = vue.computed(() => {
      return props.status === Enum.Refresher.ReleaseToRefresh;
    });
    const isLoading = vue.computed(() => {
      return props.status === Enum.Refresher.Loading;
    });
    const isComplete = vue.computed(() => {
      return props.status === Enum.Refresher.Complete;
    });
    const isGoF2 = vue.computed(() => {
      return props.status === Enum.Refresher.GoF2;
    });
    const getLeftImageTransform = vue.computed(() => {
      if (isDefault.value) {
        return "rotate(180deg)";
      }
      return "rotate(0deg)";
    });
    const getLeftImageSrc = vue.computed(() => {
      if (isComplete.value) {
        return props.completeImg.length > 0 ? props.completeImg : successSvg.value;
      }
      if (isReleaseToRefresh.value && props.pullingImg.length > 0) {
        return props.pullingImg;
      }
      return props.defaultImg.length > 0 ? props.defaultImg : arrowSvg.value;
    });
    const statusText = vue.computed(() => {
      if (isDefault.value) {
        return props.defaultText;
      } else if (isReleaseToRefresh.value) {
        return props.pullingText;
      } else if (isLoading.value) {
        return props.refreshingText;
      } else if (isComplete.value) {
        return props.completeText;
      } else if (isGoF2.value) {
        return props.goF2Text;
      } else {
        return "";
      }
    });
    const refresherTimeText = vue.computed(() => {
      props.timeTextTimestamp;
      return getRefesrherFormatTimeByKey(props.updateTimeKey);
    });
    const showRefresherTimeText = vue.computed(() => {
      return props.showUpdateTime && refresherTimeText.value.length > 0;
    });
    return () => {
      "raw js";
      vue.renderSharedDataEffect(() => {
        return vue.setSharedDataStyle(__sharedData, 7, { height: __props.showUpdateTime ? "60px" : "40px" });
      });
      vue.createSharedDataIf(() => {
        return vue.setSharedData(__sharedData, 0, vue.toSharedDataBoolean(isLoading.value));
      }, () => {
        const n2 = vue.createSharedDataComponent(zPagingLoading, "1c58f10e", {
          color: () => {
            return indicatorColor.value;
          },
          src: () => {
            return __props.refreshingImg;
          },
          animated: () => {
            return __props.refreshingAnimated;
          },
          "img-style": () => {
            return __props.imgStyle;
          }
        });
        vue.setSharedData(__sharedData, 1, n2.sharedData);
      }, () => {
        vue.renderSharedDataEffect(() => {
          vue.setSharedDataStyle(__sharedData, 2, [{ transform: getLeftImageTransform.value }, __props.imgStyle]);
          vue.setSharedDataAttr(__sharedData, 3, vue.toSharedDataString(getLeftImageSrc.value));
        });
      }, 261);
      vue.renderSharedDataEffect(() => {
        vue.setSharedDataStyle(__sharedData, 8, { marginLeft: showRefresherTimeText.value ? "25rpx" : "10rpx" });
        vue.setSharedDataStyle(__sharedData, 9, [{ color: titleColor.value }, __props.titleStyle]);
        vue.setSharedData(__sharedData, 10, vue.toDisplayString(statusText.value));
      });
      vue.createSharedDataIf(() => {
        return vue.setSharedData(__sharedData, 4, vue.toSharedDataBoolean(showRefresherTimeText.value));
      }, () => {
        vue.renderSharedDataEffect(() => {
          vue.setSharedDataStyle(__sharedData, 5, [{ color: titleColor.value }, __props.updateTimeStyle]);
          vue.setSharedData(__sharedData, 6, vue.toDisplayString(refresherTimeText.value));
        });
      });
      return __sharedData;
    };
  } }));
  const _style_0$4 = {};
  const _style_1$1 = {};
  const zPagingRefresher = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["styles", [_style_0$4, _style_1$1]]]);
  const __className$2 = "GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMore";
  const _sfc_main$3 = /* @__PURE__ */ vue.defineVaporSharedDataComponent(Object.assign({
    name: "z-paging-load-more"
  }, { __dynamicSharedData: true, __className: __className$2, __filename: "uni_modules/z-paging-x/components/z-paging-x/components/z-paging-load-more.uvue", __name: "z-paging-load-more", props: {
    // 下拉刷新状态
    status: {
      type: String,
      default: Enum.More.Default
    },
    // 滑动到底部"默认"文字，默认：点击加载更多
    defaultText: {
      type: String,
      default: "点击加载更多"
    },
    // 滑动到底部"加载中"文字，默认：正在加载...
    loadingText: {
      type: String,
      default: "正在加载..."
    },
    // 滑动到底部"没有更多"文字，默认：没有更多了
    noMoreText: {
      type: String,
      default: "没有更多了"
    },
    // 滑动到底部"加载失败"文字，默认：加载失败，点击重新加载
    failText: {
      type: String,
      default: "加载失败，点击重新加载"
    },
    // 主题样式，支持black，white
    themeStyle: {
      type: String,
      default: "black"
    },
    // 是否是聊天记录模式，聊天记录模式下加载中仅展示loading不展示文字
    isChat: {
      type: Boolean,
      default: false
    }
  }, emits: ["clickMore"], setup(__props, _a2) {
    var __emit = _a2.emit;
    const __sharedDataScope = vue.useSharedDataScope();
    const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMoreSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const isWhiteTheme = vue.computed(() => {
      return props.themeStyle === "white";
    });
    const titleColor = vue.computed(() => {
      return isWhiteTheme.value ? "#efefef" : "#a4a4a4";
    });
    const lineColor = vue.computed(() => {
      return isWhiteTheme.value ? "#efefef" : "#eeeeee";
    });
    const indicatorColor = vue.computed(() => {
      return isWhiteTheme.value ? "#ffffff" : "#949494";
    });
    const isDefault = vue.computed(() => {
      return props.status === Enum.More.Default;
    });
    const isLoading = vue.computed(() => {
      return props.status === Enum.More.Loading;
    });
    const isNoMore = vue.computed(() => {
      return props.status === Enum.More.NoMore;
    });
    const isFail = vue.computed(() => {
      return props.status === Enum.More.Fail;
    });
    const statusText = vue.computed(() => {
      if (isDefault.value) {
        return props.defaultText;
      } else if (isLoading.value) {
        return props.loadingText;
      } else if (isNoMore.value) {
        return props.noMoreText;
      } else if (isFail.value) {
        return props.failText;
      } else {
        return "";
      }
    });
    const showText = vue.computed(() => {
      return !props.isChat || isDefault.value || isFail.value;
    });
    const onClickMore = () => {
      emit("clickMore");
    };
    return () => {
      "raw js";
      vue.createSharedDataIf(() => {
        return vue.setSharedData(__sharedData, 0, vue.toSharedDataBoolean(isNoMore.value));
      }, () => {
        vue.renderSharedDataEffect(() => {
          return vue.setSharedDataStyle(__sharedData, 1, { backgroundColor: lineColor.value });
        });
      });
      vue.createSharedDataIf(() => {
        return vue.setSharedData(__sharedData, 2, vue.toSharedDataBoolean(isLoading.value));
      }, () => {
        const n5 = vue.createSharedDataComponent(zPagingLoading, "e891caa2", { color: () => {
          return indicatorColor.value;
        } });
        vue.setSharedData(__sharedData, 3, n5.sharedData);
      });
      vue.createSharedDataIf(() => {
        return vue.setSharedData(__sharedData, 4, vue.toSharedDataBoolean(showText.value));
      }, () => {
        vue.renderSharedDataEffect(() => {
          vue.setSharedDataStyle(__sharedData, 5, { color: titleColor.value });
          vue.setSharedData(__sharedData, 6, vue.toDisplayString(statusText.value));
        });
      });
      vue.createSharedDataIf(() => {
        return vue.setSharedData(__sharedData, 7, vue.toSharedDataBoolean(isNoMore.value));
      }, () => {
        vue.renderSharedDataEffect(() => {
          return vue.setSharedDataStyle(__sharedData, 8, { backgroundColor: lineColor.value });
        });
      });
      vue.setSharedDataEvent(__sharedData, 9, onClickMore);
      return __sharedData;
    };
  } }));
  const _style_0$3 = {};
  const _style_1 = {};
  const zPagingLoadMore = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["styles", [_style_0$3, _style_1]]]);
  function _getConfig(key2, defaultValue) {
    return defaultValue;
  }
  function gc(key2, defaultValue) {
    return () => {
      return _getConfig(key2, defaultValue);
    };
  }
  const __className$1 = "GenUniModulesZPagingXComponentsZPagingXZPagingX";
  const _sfc_main$2 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className: __className$1,
    __filename: "uni_modules/z-paging-x/components/z-paging-x/z-paging-x.uvue",
    __name: "z-paging-x",
    props: {
      /**
       * @description 自定义初始的pageNo，默认为1
       * @default 1
       */
      defaultPageNo: {
        type: Number,
        default: gc("default-page-no", 1)
      },
      /**
       * @description 自定义初始的pageSize，默认为10
       * @default 10
       */
      defaultPageSize: {
        type: Number,
        default: gc("default-page-size", 10)
      },
      /**
       * @description 设置组件的style
       */
      pagingStyle: {
        type: Object,
        default: gc("paging-style", {})
      },
      /**
       * @description 是否开启自定义下拉刷新
       * @default true
       */
      refresherEnabled: {
        type: Boolean,
        default: gc("refresher-enabled", true)
      },
      /**
       * @description 设置自定义下拉刷新阈值，默认等于refresher高度，单位为px
       * @default 0
       */
      refresherThreshold: {
        type: Number,
        default: gc("refresher-threshold", 0)
      },
      /**
       * @description 自定义下拉刷新默认状态下的文字
       * @default 继续下拉刷新
       */
      refresherDefaultText: {
        type: String,
        default: gc("refresher-default-text", "继续下拉刷新")
      },
      /**
       * @description 自定义下拉刷新松手立即刷新状态下的文字
       * @default 松开立即刷新
       */
      refresherPullingText: {
        type: String,
        default: gc("refresher-pulling-text", "松开立即刷新")
      },
      /**
       * @description 自定义下拉刷新刷新中状态下的文字
       * @default 正在刷新...
       */
      refresherRefreshingText: {
        type: String,
        default: gc("refresher-refreshing-text", "正在刷新...")
      },
      /**
       * @description 自定义下拉刷新刷新结束状态下的文字
       * @default 刷新完成
       */
      refresherCompleteText: {
        type: String,
        default: gc("refresher-complete-text", "刷新完成")
      },
      /**
       * @description 自定义继续下拉进入二楼状态下的文字
       * @default 松手进入二楼
       */
      refresherGoF2Text: {
        type: String,
        default: gc("refresher-go-f2-text", "松手进入二楼")
      },
      /**
       * @description 是否开启下拉进入二楼功能
       * @default false
       */
      refresherF2Enabled: {
        type: Boolean,
        default: gc("refresher-f2-enabled", false)
      },
      /**
       * @description 下拉进入二楼阈值，单位为px
       * @default 100
       */
      refresherF2Threshold: {
        type: Number,
        default: gc("refresher-f2-threshold", 100)
      },
      /**
       * @description 下拉进入二楼动画时间，单位为毫秒
       * @default 200
       */
      refresherF2Duration: {
        type: Number,
        default: gc("refresher-f2-duration", 200)
      },
      /**
       * @description 下拉进入二楼状态松手后是否弹出二楼(slot=f2)，设置为false时仅触发@refresherF2Change事件，由使用者自行处理
       * @default true
       */
      showRefresherF2: {
        type: Boolean,
        default: gc("show-refresher-f2", true)
      },
      /**
       * @description 自定义下拉刷新结束以后延迟回弹的时间，单位为毫秒
       * @default 0
       */
      refresherCompleteDelay: {
        type: Number,
        default: gc("refresher-complete-delay", 0)
      },
      /**
       * @description 自定义下拉刷新结束回弹动画时间，单位为毫秒
       * @default 300
       */
      refresherCompleteDuration: {
        type: Number,
        default: gc("refresher-complete-duration", 300)
      },
      /**
       * @description 下拉刷新区域背景颜色
       * @default #FFF
       */
      refresherBackground: {
        type: String,
        default: gc("refresher-background", "#FFF")
      },
      /**
       * @description loading(下拉刷新、上拉加载更多)的主题样式，支持black，white
       * @default black
       */
      defaultThemeStyle: {
        type: String,
        default: gc("default-theme-style", "black")
      },
      /**
       * @description 下拉刷新的主题样式，支持black，white，未设置时使用default-theme-style
       * @default ''
       */
      refresherThemeStyle: {
        type: String,
        default: gc("refresher-theme-style", "")
      },
      /**
       * @description 自定义下拉刷新默认状态下的图片
       * @default ''
       */
      refresherDefaultImg: {
        type: String,
        default: gc("refresher-default-img", "")
      },
      /**
       * @description 自定义下拉刷新松手立即刷新状态下的图片，默认与refresher-default-img一致
       * @default ''
       */
      refresherPullingImg: {
        type: String,
        default: gc("refresher-pulling-img", "")
      },
      /**
       * @description 自定义下拉刷新刷新中状态下的图片
       * @default ''
       */
      refresherRefreshingImg: {
        type: String,
        default: gc("refresher-refreshing-img", "")
      },
      /**
       * @description 自定义下拉刷新刷新结束状态下的图片
       * @default ''
       */
      refresherCompleteImg: {
        type: String,
        default: gc("refresher-complete-img", "")
      },
      /**
       * @description 自定义下拉刷新刷新中状态下是否展示旋转动画
       * @default true
       */
      refresherRefreshingAnimated: {
        type: Boolean,
        default: gc("refresher-refreshing-animated", true)
      },
      /**
       * @description 自定义下拉刷新中左侧图标的样式
       */
      refresherImgStyle: {
        type: Object,
        default: gc("refresher-img-style", {})
      },
      /**
       * @description 自定义下拉刷新中右侧状态描述文字的样式
       */
      refresherTitleStyle: {
        type: Object,
        default: gc("refresher-title-style", {})
      },
      /**
       * @description 自定义下拉刷新中右侧最后更新时间文字的样式(show-refresher-update-time为true时有效)
       */
      refresherUpdateTimeStyle: {
        type: Object,
        default: gc("refresher-update-time-style", {})
      },
      /**
       * @description 底部加载更多的主题样式，支持black，white，未设置时使用default-theme-style
       * @default ''
       */
      loadingMoreThemeStyle: {
        type: String,
        default: gc("loading-more-theme-style", "")
      },
      /**
       * @description 是否使用自定义的下拉刷新，设置为false即代表使用uni-app x自带的下拉刷新
       * @default true
       */
      useCustomRefresher: {
        type: Boolean,
        default: gc("use-custom-refresher", true)
      },
      /**
       * @description 列表刷新时自动显示下拉刷新view
       * @default false
       */
      showRefresherWhenReload: {
        type: Boolean,
        default: gc("show-refresher-when-reload", false)
      },
      /**
       * @description 是否显示最后更新时间
       * @default false
       */
      showRefresherUpdateTime: {
        type: Boolean,
        default: gc("show-refresher-update-time", false)
      },
      /**
       * @description 如果需要区别不同页面的最后更新时间，请为不同页面的z-paging的`refresher-update-time-key`设置不同的字符串
       * @default default
       */
      refresherUpdateTimeKey: {
        type: String,
        default: gc("refresher-update-time-key", "default")
      },
      /**
       * @description 是否启用加载更多数据(含滑动到底部加载更多数据和点击加载更多数据)
       * @default true
       */
      loadMoreEnabled: {
        type: Boolean,
        default: gc("load-more-enabled", true)
      },
      /**
       * @description 滑动到底部"默认"文字
       * @default 点击加载更多
       */
      loadMoreDefaultText: {
        type: String,
        default: gc("load-more-default-text", "点击加载更多")
      },
      /**
       * @description 滑动到底部"加载中"文字
       * @default 正在加载...
       */
      loadMoreLoadingText: {
        type: String,
        default: gc("load-more-loading-text", "正在加载...")
      },
      /**
       * @description 滑动到底部"没有更多"文字
       * @default 没有更多了
       */
      loadMoreNoMoreText: {
        type: String,
        default: gc("load-more-no-more-text", "没有更多了")
      },
      /**
       * @description 滑动到底部"加载失败"文字
       * @default 加载失败，点击重新加载
       */
      loadMoreFailText: {
        type: String,
        default: gc("load-more-fail-text", "加载失败，点击重新加载")
      },
      /**
       * @description mounted后自动调用reload方法(mounted后自动调用接口)
       * @default true
       */
      auto: {
        type: Boolean,
        default: gc("auto", true)
      },
      /**
       * @description reload时自动滚动到顶部
       * @default true
       */
      scrollToTopWhenReload: {
        type: Boolean,
        default: gc("scrollToTopWhenReload", true)
      },
      /**
       * @description reload时立即自动清空原list，若立即自动清空，则在reload之后、请求回调之前页面是空白的
       * @default true
       */
      cleanListWhenReload: {
        type: Boolean,
        default: gc("cleanListWhenReload", true)
      },
      /**
       * @description 空数据描述文字
       * @default 没有数据哦~
       */
      emptyText: {
        type: String,
        default: gc("empty-text", "没有数据哦~")
      },
      /**
       * @description 空数据加载失败文字
       * @default 很抱歉，加载失败
       */
      emptyErrorText: {
        type: String,
        default: gc("empty-error-text", "很抱歉，加载失败")
      },
      /**
       * @description 空数据图片，默认使用z-paging内置的图片
       * @default ''
       */
      emptyImg: {
        type: String,
        default: gc("empty-img", "")
      },
      /**
       * @description 空数据加载失败图片，默认使用z-paging内置的图片
       * @default ''
       */
      emptyErrorImg: {
        type: String,
        default: gc("empty-error-img", "")
      },
      /**
       * @description 自动显示点击返回顶部按钮
       * @default false
       */
      showBackToTop: {
        type: Boolean,
        default: gc("show-back-to-top", false)
      },
      /**
       * @description 点击返回顶部按钮显示/隐藏的阈值(滚动距离)，单位为px
       * @default 300
       */
      backToTopThreshold: {
        type: Number,
        default: gc("back-to-top-threshold", 300)
      },
      /**
       * @description 点击返回顶部按钮的自定义图片地址，默认使用z-paging内置的图片
       * @default ''
       */
      backToTopImg: {
        type: String,
        default: gc("back-to-top-img", "")
      },
      /**
       * @description 点击返回顶部按钮的style
       * @default {}
       */
      backToTopStyle: {
        type: Object,
        default: gc("back-to-top-style", {})
      },
      /**
       * @description 在设置滚动条位置时使用动画过渡
       * @default false
       */
      scrollWithAnimation: {
        type: Boolean,
        default: gc("scroll-with-animation", false)
      },
      /**
       * @description list的类型：list-view或scroll-view
       * @default list-view
       */
      listIs: {
        type: String,
        default: gc("list-is", "scroll-view")
      },
      /**
        * @description list的id
        * @default ''
        */
      listId: {
        type: String,
        default: gc("list-id", "")
      },
      /**
        * @description 控制是否出现滚动条
        * @default true
        */
      showScrollbar: {
        type: Boolean,
        default: gc("show-scrollbar", true)
      },
      /**
        * @description 控制是否回弹效果
        * @default true
        */
      rebound: {
        type: Boolean,
        default: gc("rebound", true)
      },
      /**
        * @description (子元素中使用)子元素是否开启嵌套滚动，将滚动事件与父元素协商处理
        * @default true
        */
      customNestedScroll: {
        type: Boolean,
        default: gc("custom-nested-scroll", true)
      },
      /**
        * @description (子元素中使用，仅App)关联的滚动容器，设置为nested-scroll-view后与外层滚动容器开启嵌套模式。蒸汽模式(Vapor)不支持nested-scroll滚动协商，需使用此属性替代custom-nested-scroll
        * @default ''
        */
      associativeContainer: {
        type: String,
        default: gc("associative-container", "")
      },
      /**
        * @description (仅listIs = scroll-view有效，父元素中使用)是否与子元素开启滚动协商
        * @default true
        */
      startNestedScroll: {
        type: Boolean,
        default: gc("start-nested-scroll", true)
      },
      /**
       * @description (仅listIs = scroll-view有效)嵌套滚动子元素的id属性，不支持ref，scroll-view惯性滚动时会让对应id元素视图进行滚动，子元素滚动时会触发scroll-view的nestedprescroll事件，嵌套子元素需要设置custom-nested-scroll = true
       * @default ''
       */
      nestedScrollChild: {
        type: String,
        default: gc("nested-scroll-child", "")
      },
      /**
       * @description 是否只使用基础布局，设置为true后将关闭mounted自动请求数据、关闭下拉刷新和滚动到底部加载更多，强制隐藏空数据图
       * @default false
       */
      layoutOnly: {
        type: Boolean,
        default: gc("layout-only", false)
      },
      /**
       * @description 是否开启底部安全区域适配，开启后在列表(及slot=bottom)下方自动添加底部安全区域占位
       * @default false
       */
      safeAreaInsetBottom: {
        type: Boolean,
        default: gc("safe-area-inset-bottom", false)
      },
      /**
       * @description slot="bottom"容器(含底部安全区域及键盘占位)的背景色
       * @default ''
       */
      bottomBgColor: {
        type: String,
        default: gc("bottom-bg-color", "")
      },
      /**
       * @description 使用聊天记录模式。开启后列表倒置，数组第0项(最新消息)显示在底部，滚动到视觉顶部自动加载更多历史消息(通过@query，from为load-more)。complete传入的数据应为服务端返回的“新→旧”顺序。列表项需绑定@cellStyleChange回传的样式以倒置回正常方向
       * @default false
       */
      useChatRecordMode: {
        type: Boolean,
        default: gc("use-chat-record-mode", false)
      },
      /**
       * @description 使用聊天记录模式时是否自动隐藏键盘：在用户触摸列表时自动隐藏键盘
       * @default true
       */
      autoHideKeyboardWhenChat: {
        type: Boolean,
        default: gc("auto-hide-keyboard-when-chat", true)
      },
      /**
       * @description 使用聊天记录模式中键盘弹出时是否自动调整slot="bottom"高度(在其下方添加键盘高度的占位)，仅App
       * @default true
       */
      autoAdjustPositionWhenChat: {
        type: Boolean,
        default: gc("auto-adjust-position-when-chat", true)
      },
      /**
       * @description 使用聊天记录模式中键盘弹出时占位高度偏移距离，单位px
       * @default 0
       */
      chatAdjustPositionOffset: {
        type: Number,
        default: gc("chat-adjust-position-offset", 0)
      },
      /**
       * @description 使用聊天记录模式中键盘弹出时是否自动滚动到底部
       * @default false
       */
      autoToBottomWhenChat: {
        type: Boolean,
        default: gc("auto-to-bottom-when-chat", false)
      },
      /**
       * @description 使用聊天记录模式中reload时是否显示chatLoading
       * @default false
       */
      showChatLoadingWhenReload: {
        type: Boolean,
        default: gc("show-chat-loading-when-reload", false)
      },
      /**
       * @description 在聊天记录模式中滑动到顶部状态为默认状态时，以加载中的状态展示。若设置为false，则默认会显示【点击加载更多】，然后才会显示loading
       * @default true
       */
      chatLoadingMoreDefaultAsLoading: {
        type: Boolean,
        default: gc("chat-loading-more-default-as-loading", true)
      }
    },
    emits: ["update:modelValue", "refresherStatusChange", "loadMoreStatusChange", "query", "nestedprescroll", "refresherpulling", "refresherrefresh", "refresherrestore", "refresherabort", "onRefresh", "refresh", "scrolltolower", "scrolltoupper", "scroll", "backToTopClick", "keyboardHeightChange", "hidedKeyboard", "cellStyleChange", "refresherF2Change"],
    setup(__props, _a2) {
      var __expose = _a2.expose, __emit = _a2.emit, $slots = _a2.slots;
      const __sharedDataScope = vue.useSharedDataScope();
      const __sharedData = vue.withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, vue.useSharedDataComponentOptions({ bundleKey: "GenUniModulesZPagingXComponentsZPagingXZPagingXSharedData", sharedDataClassId: 0 })));
      const props = __props;
      const emit = __emit;
      const slots = vue.useSlots();
      const zPagingX = vue.ref(null);
      const zpxList = vue.ref(null);
      const zpxListRefresher = vue.ref(null);
      const refresherStatus = vue.ref(Enum.Refresher.Default);
      const refresherTriggered = vue.ref(false);
      const refresherNodeHeight = vue.ref(0);
      const refresherTimeTextTimestamp = vue.ref(0);
      const refresherCompleteDelayTimer = vue.ref(null);
      const refresherEndAnimateTimer = vue.ref(null);
      const loadMoreStatus = vue.ref(Enum.More.Default);
      const queryFrom = vue.ref("");
      const isLoadFailed = vue.ref(false);
      const customNoMore = vue.ref(-1);
      const forceHideLoadMore = vue.ref(false);
      const contentWidth = vue.ref(0);
      const listHeight = vue.ref(0);
      let listResizeObserver = null;
      const isLoading = vue.ref(true);
      const scrollTop = vue.ref(0);
      const oldScrollTop = vue.ref(0);
      const pageNo = vue.ref(1);
      const totalData = vue.ref([]);
      const base64BackToTopImg = vue.ref(base64BackToTop);
      const backToTopClass = vue.ref("zpx-back-to-top zpx-back-to-top-hide");
      const lastBackToTopShowTime = vue.ref(0);
      const showBackToTopClass = vue.ref(false);
      const privateScrollWithAnimation = vue.ref(-1);
      const isFirstPageAndNoMore = vue.ref(false);
      const keyboardHeight = vue.ref(0);
      const safeAreaBottom2 = vue.ref(0);
      const showF2 = vue.ref(false);
      const f2Transform = vue.ref("translateY(0px)");
      const contentHeight = vue.ref(0);
      let f2CloseTimer = -1;
      let keyboardListenerId = -1;
      const isFirstPage = vue.computed(() => {
        return pageNo.value === props.defaultPageNo;
      });
      const finalRefresherThreshold = vue.computed(() => {
        if (props.layoutOnly) {
          return 0;
        }
        return props.refresherThreshold > 0 ? props.refresherThreshold : refresherNodeHeight.value > 0 ? refresherNodeHeight.value : 40;
      });
      const finalRefresherMaxDragDistance = vue.computed(() => {
        const defaultDistance = finalRefresherThreshold.value * 2.5;
        if (!props.refresherF2Enabled) {
          return defaultDistance;
        }
        return Math.max(defaultDistance, props.refresherF2Threshold + 60);
      });
      const isRefresherGoF2 = vue.computed(() => {
        return refresherStatus.value === Enum.Refresher.GoF2;
      });
      const f2Style = vue.computed(() => {
        return new UTSJSONObject({
          transform: f2Transform.value,
          height: "".concat(contentHeight.value, "px"),
          transitionDuration: "".concat(props.refresherF2Duration, "ms")
        });
      });
      const showEmpty = vue.computed(() => {
        if (props.layoutOnly) {
          return false;
        }
        return totalData.value.length == 0 && !isLoading.value;
      });
      const showLoading = vue.computed(() => {
        if (props.layoutOnly) {
          return false;
        }
        return slots["loading"] != null && isLoading.value && totalData.value.length == 0;
      });
      const showLoadMore = vue.computed(() => {
        if (props.layoutOnly || props.useChatRecordMode) {
          return false;
        }
        return props.loadMoreEnabled && !forceHideLoadMore.value && (!isLoading.value || totalData.value.length > 0) && !showEmpty.value;
      });
      const showChatLoadMore = vue.computed(() => {
        if (!props.useChatRecordMode || props.layoutOnly || !props.loadMoreEnabled || isFirstPageAndNoMore.value) {
          return false;
        }
        const hasData = totalData.value.length > 0;
        const notNoMoreOrHasSlot = loadMoreStatus.value !== Enum.More.NoMore || slots["chatNoMore"] != null;
        return totalData.value.length >= props.defaultPageSize && notNoMoreOrHasSlot && (hasData || props.showChatLoadingWhenReload && showLoading.value);
      });
      const isChatNoMore = vue.computed(() => {
        return loadMoreStatus.value === Enum.More.NoMore;
      });
      const chatLoadMoreStatus = vue.computed(() => {
        if (loadMoreStatus.value === Enum.More.Default && props.chatLoadingMoreDefaultAsLoading) {
          return Enum.More.Loading;
        }
        return loadMoreStatus.value;
      });
      const isChatRecordModeAndInversion = vue.computed(() => {
        return props.useChatRecordMode && !isFirstPageAndNoMore.value;
      });
      const chatRecordRotateStyle = vue.computed(() => {
        return isChatRecordModeAndInversion.value ? new UTSJSONObject({ transform: "scale(1, -1)" }) : new UTSJSONObject({});
      });
      const bottomContainerStyle = vue.computed(() => {
        return props.bottomBgColor.length > 0 ? new UTSJSONObject({ backgroundColor: props.bottomBgColor }) : new UTSJSONObject({});
      });
      const chatKeyboardPlaceholderHeight = vue.computed(() => {
        return props.useChatRecordMode && props.autoAdjustPositionWhenChat ? keyboardHeight.value : 0;
      });
      const finalSafeAreaBottom = vue.computed(() => {
        if (!props.safeAreaInsetBottom) {
          return 0;
        }
        let keyboardShowing = keyboardHeight.value > 0;
        return keyboardShowing ? 0 : safeAreaBottom2.value;
      });
      const finalRefresherThemeStyle = vue.computed(() => {
        return props.refresherThemeStyle.length > 0 ? props.refresherThemeStyle : props.defaultThemeStyle;
      });
      const finalLoadingMoreThemeStyle = vue.computed(() => {
        return props.loadingMoreThemeStyle.length > 0 ? props.loadingMoreThemeStyle : props.defaultThemeStyle;
      });
      const finalScrollWithAnimation = vue.computed(() => {
        if (privateScrollWithAnimation.value != -1) {
          const scrollWithAnimation = privateScrollWithAnimation.value == 1;
          privateScrollWithAnimation.value = -1;
          return scrollWithAnimation;
        }
        return props.scrollWithAnimation;
      });
      vue.computed(() => {
        return props.listIs === "list-view" ? "list-item" : "view";
      });
      vue.computed(() => {
        return props.layoutOnly;
      });
      vue.watch(totalData, (newVal) => {
        emit("update:modelValue", newVal);
      });
      vue.watch(refresherStatus, (newVal) => {
        emit("refresherStatusChange", newVal);
      });
      vue.watch(loadMoreStatus, (newVal) => {
        emit("loadMoreStatusChange", newVal);
      });
      vue.watch(isChatRecordModeAndInversion, (_2) => {
        if (props.useChatRecordMode) {
          emit("cellStyleChange", chatRecordRotateStyle.value);
        }
      }, { immediate: true });
      const _checkShouldShowBackToTop = (scrollTopValue) => {
        if (!props.showBackToTop) {
          showBackToTopClass.value = false;
          return null;
        }
        if (scrollTopValue > props.backToTopThreshold) {
          if (!showBackToTopClass.value) {
            showBackToTopClass.value = true;
            lastBackToTopShowTime.value = (/* @__PURE__ */ new Date()).getTime();
            setTimeout(() => {
              backToTopClass.value = "zpx-back-to-top zpx-back-to-top-show";
            }, 300);
          }
        } else {
          if (showBackToTopClass.value) {
            backToTopClass.value = "zpx-back-to-top zpx-back-to-top-hide";
            setTimeout(() => {
              showBackToTopClass.value = false;
            }, (/* @__PURE__ */ new Date()).getTime() - lastBackToTopShowTime.value < 500 ? 0 : 300);
          }
        }
      };
      const scrollToY = (y2, animate) => {
        privateScrollWithAnimation.value = animate ? 1 : 0;
        scrollTop.value = oldScrollTop.value;
        vue.nextTick(() => {
          scrollTop.value = y2;
        });
      };
      const scrollToTop = (animate) => {
        if (isChatRecordModeAndInversion.value) {
          scrollToY(99999999, animate);
          return null;
        }
        scrollToY(0, animate);
        _checkShouldShowBackToTop(0);
      };
      const scrollToBottom = (animate) => {
        if (isChatRecordModeAndInversion.value) {
          scrollToY(0, animate);
          return null;
        }
        scrollToY(99999999, animate);
      };
      const _emitQuery = (pageNoValue, pageSizeValue) => {
        isLoading.value = true;
        emit("query", pageNoValue, pageSizeValue, queryFrom.value);
      };
      const _cleanRefresherCompleteDelayTimer = () => {
        if (refresherCompleteDelayTimer.value !== null) {
          clearTimeout(refresherCompleteDelayTimer.value);
          refresherCompleteDelayTimer.value = null;
        }
      };
      const _cleanRefresherEndAnimateTimer = () => {
        if (refresherEndAnimateTimer.value !== null) {
          clearTimeout(refresherEndAnimateTimer.value);
          refresherEndAnimateTimer.value = null;
        }
      };
      const reload = () => {
        _cleanRefresherCompleteDelayTimer();
        _cleanRefresherEndAnimateTimer();
        pageNo.value = props.defaultPageNo;
        customNoMore.value = -1;
        loadMoreStatus.value = Enum.More.Default;
        isLoadFailed.value = false;
        forceHideLoadMore.value = true;
        if (props.showRefresherWhenReload) {
          vue.nextTick(() => {
            refresherTriggered.value = true;
          });
          return null;
        }
        if (props.cleanListWhenReload) {
          totalData.value = [];
        }
        if (props.scrollToTopWhenReload && !props.useChatRecordMode) {
          scrollToTop(false);
        }
        queryFrom.value = Enum.QueryFrom.Reload;
        _emitQuery(pageNo.value, props.defaultPageSize);
      };
      const endRefresh = () => {
        _cleanRefresherCompleteDelayTimer();
        _cleanRefresherEndAnimateTimer();
        refresherTriggered.value = false;
        refresherStatus.value = Enum.Refresher.Default;
        isLoading.value = false;
      };
      const _chatScrollToBottomDelayed = () => {
        vue.nextTick(() => {
          scrollToBottom(false);
          setTimeout(() => {
            scrollToBottom(false);
            setTimeout(() => {
              scrollToBottom(false);
            }, 50);
          }, 50);
        });
      };
      const _chatComplete = (currentData) => {
        if (isFirstPage.value) {
          isFirstPageAndNoMore.value = loadMoreStatus.value === Enum.More.NoMore;
          totalData.value = isFirstPageAndNoMore.value ? [...currentData].reverse() : currentData;
          _chatScrollToBottomDelayed();
          return null;
        }
        totalData.value = totalData.value.concat(currentData);
      };
      function addChatRecordData(data2 = null, toBottom = true, toBottomWithAnimate = true) {
        if (!props.useChatRecordMode)
          return null;
        const list = Array.isArray(data2) ? data2 : [data2];
        if (isChatRecordModeAndInversion.value) {
          totalData.value = [...list].reverse().concat(totalData.value);
        } else {
          totalData.value = totalData.value.concat(list);
        }
        if (toBottom) {
          vue.nextTick(() => {
            scrollToBottom(toBottomWithAnimate);
          });
        }
      }
      const complete = (data2 = null) => {
        const finalData = data2 === null ? [] : data2;
        isLoadFailed.value = false;
        const needCompleteDelay = props.refresherCompleteDelay > 0 && (queryFrom.value === Enum.QueryFrom.UserPullDown || props.showRefresherWhenReload);
        if (needCompleteDelay) {
          refresherStatus.value = Enum.Refresher.Complete;
          _cleanRefresherCompleteDelayTimer();
          _cleanRefresherEndAnimateTimer();
          refresherCompleteDelayTimer.value = setTimeout(() => {
            refresherTriggered.value = false;
            refresherEndAnimateTimer.value = setTimeout(() => {
              refresherStatus.value = Enum.Refresher.Default;
              isLoading.value = false;
            }, props.refresherCompleteDuration);
          }, props.refresherCompleteDelay);
        } else {
          endRefresh();
        }
        const currentData = [...finalData];
        if (customNoMore.value != -1) {
          if (customNoMore.value == 1 || customNoMore.value != 0 && finalData.length == 0) {
            loadMoreStatus.value = Enum.More.NoMore;
          } else {
            loadMoreStatus.value = Enum.More.Default;
          }
        } else {
          if (finalData.length == 0 || finalData.length > 0 && finalData.length < props.defaultPageSize) {
            loadMoreStatus.value = Enum.More.NoMore;
          } else {
            loadMoreStatus.value = Enum.More.Default;
          }
        }
        if (props.useChatRecordMode) {
          _chatComplete(currentData);
        } else {
          if (isFirstPage.value) {
            totalData.value = currentData;
          } else {
            totalData.value = totalData.value.concat(currentData);
          }
        }
        if (isFirstPage.value && props.showRefresherUpdateTime) {
          updateRefesrherTime(props.refresherUpdateTimeKey);
          refresherTimeTextTimestamp.value = getTime();
        }
        vue.nextTick(() => {
          setTimeout(() => {
            forceHideLoadMore.value = false;
          }, 100);
        });
      };
      const _onListTouchstart = (_2) => {
        if (props.useChatRecordMode && props.autoHideKeyboardWhenChat && keyboardHeight.value > 0) {
          uni.hideKeyboard();
          emit("hidedKeyboard");
        }
      };
      const _handleKeyboardHeightChange = (height) => {
        emit("keyboardHeightChange", height);
        if (props.autoAdjustPositionWhenChat) {
          keyboardHeight.value = height > 0 ? height + props.chatAdjustPositionOffset : 0;
        }
        if (props.autoToBottomWhenChat && height > 0) {
          vue.nextTick(() => {
            scrollToBottom(false);
            setTimeout(() => {
              scrollToBottom(false);
            }, 50);
          });
        }
      };
      const completeByNoMore = (data2 = null, nomore) => {
        customNoMore.value = nomore == true ? 1 : 0;
        complete(data2);
      };
      const completeByTotal = (data2 = null, total) => {
        const finalData = data2 === null ? [] : data2;
        vue.nextTick(() => {
          let nomore = false;
          const realTotalDataCount = isFirstPage.value ? 0 : totalData.value.length;
          const dataLength = finalData.length;
          let exceedCount = realTotalDataCount + dataLength - total;
          if (exceedCount >= 0) {
            nomore = true;
            exceedCount = props.defaultPageSize - exceedCount;
            if (exceedCount > 0 && exceedCount < finalData.length) {
              data2 = finalData.splice(0, exceedCount);
            }
          }
          completeByNoMore(data2, nomore);
        });
      };
      const completeByError = () => {
        isLoadFailed.value = true;
        if (!isFirstPage.value) {
          loadMoreStatus.value = Enum.More.Fail;
        }
        forceHideLoadMore.value = false;
        endRefresh();
      };
      const refresh2 = () => {
        if (totalData.value.length == 0) {
          reload();
          return null;
        }
        const targetTotal = pageNo.value * props.defaultPageSize;
        isLoading.value = true;
        pageNo.value = props.defaultPageNo;
        queryFrom.value = Enum.QueryFrom.Refresh;
        customNoMore.value = -1;
        _emitQuery(props.defaultPageNo, targetTotal);
      };
      const _onStartNestedScroll = (_2) => {
        return true;
      };
      const _onNestedPreScroll = (event) => {
        if (zpxList.value != null) {
          emit("nestedprescroll", event, zpxList.value);
        }
      };
      const _onRefresherpulling = (e2) => {
        const dy = e2.detail.dy;
        emit("refresherpulling", dy);
        if (!isLoading.value) {
          if (dy < finalRefresherThreshold.value) {
            refresherStatus.value = Enum.Refresher.Default;
          } else if (props.refresherF2Enabled && dy >= props.refresherF2Threshold) {
            refresherStatus.value = Enum.Refresher.GoF2;
          } else {
            refresherStatus.value = Enum.Refresher.ReleaseToRefresh;
          }
        }
      };
      const _handleGoF2 = () => {
        if (showF2.value || !props.refresherF2Enabled)
          return null;
        emit("refresherF2Change", "go");
        if (!props.showRefresherF2)
          return null;
        if (f2CloseTimer != -1) {
          clearTimeout(f2CloseTimer);
          f2CloseTimer = -1;
        }
        const zPagingXEle = zPagingX.value;
        if (zPagingXEle === null)
          return null;
        zPagingXEle.getBoundingClientRectAsync().then((rect) => {
          contentHeight.value = rect.height;
          f2Transform.value = "translateY(-".concat(rect.height, "px)");
          showF2.value = true;
          setTimeout(() => {
            f2Transform.value = "translateY(0px)";
          }, 100);
        });
      };
      const _handleCloseF2 = () => {
        if (!showF2.value || !props.refresherF2Enabled)
          return null;
        emit("refresherF2Change", "close");
        if (!props.showRefresherF2)
          return null;
        f2Transform.value = "translateY(-".concat(contentHeight.value, "px)");
        f2CloseTimer = setTimeout(() => {
          showF2.value = false;
          f2CloseTimer = -1;
        }, props.refresherF2Duration);
      };
      const goF2 = () => {
        _handleGoF2();
      };
      const closeF2 = () => {
        _handleCloseF2();
      };
      const _handleRefresh = () => {
        _cleanRefresherCompleteDelayTimer();
        _cleanRefresherEndAnimateTimer();
        refresherStatus.value = Enum.Refresher.Loading;
        refresherTriggered.value = true;
        pageNo.value = props.defaultPageNo;
        queryFrom.value = Enum.QueryFrom.UserPullDown;
        customNoMore.value = -1;
        _emitQuery(pageNo.value, props.defaultPageSize);
      };
      const _onRefresherrefresh = (e2) => {
        if (refresherStatus.value === Enum.Refresher.GoF2) {
          _handleGoF2();
          refresherTriggered.value = true;
          vue.nextTick(() => {
            endRefresh();
          });
          return null;
        }
        emit("refresherrefresh", e2);
        emit("onRefresh");
        emit("refresh");
        _handleRefresh();
      };
      const _onRefresherrestore = (e2) => {
        emit("refresherrestore", e2);
        if (refresherStatus.value !== Enum.Refresher.Complete) {
          refresherStatus.value = Enum.Refresher.Default;
        }
      };
      const _onRefresherabort = (e2) => {
        emit("refresherabort", e2);
      };
      const _handleLoadMore = () => {
        if (!props.loadMoreEnabled || isLoading.value || loadMoreStatus.value === Enum.More.NoMore)
          return null;
        const isRetry = loadMoreStatus.value === Enum.More.Fail;
        loadMoreStatus.value = Enum.More.Loading;
        if (!isRetry) {
          pageNo.value++;
        }
        queryFrom.value = Enum.QueryFrom.LoadMore;
        _emitQuery(pageNo.value, props.defaultPageSize);
      };
      const doChatRecordLoadMore = () => {
        if (!props.useChatRecordMode)
          return null;
        _handleLoadMore();
      };
      const _onScrolltolower = (e2) => {
        _handleLoadMore();
        emit("scrolltolower", e2);
      };
      const _onScrolltoupper = (e2) => {
        emit("scrolltoupper", e2);
      };
      const _onScroll = (e2) => {
        emit("scroll", e2);
        oldScrollTop.value = e2.detail.scrollTop;
        _checkShouldShowBackToTop(oldScrollTop.value);
      };
      const _handleToTop = () => {
        scrollToTop(true);
      };
      const _onBackToTopClick = () => {
        let callbacked = false;
        emit("backToTopClick", (toTop) => {
          if (toTop != false) {
            _handleToTop();
          }
          callbacked = true;
        });
        vue.nextTick(() => {
          if (!callbacked) {
            _handleToTop();
          }
        });
      };
      vue.onMounted(() => {
        pageNo.value = props.defaultPageNo;
        if (!props.layoutOnly && props.auto) {
          reload();
        }
        if (props.layoutOnly) {
          endRefresh();
        }
        if (props.safeAreaInsetBottom) {
          safeAreaBottom2.value = uni.getWindowInfo().safeAreaInsets.bottom;
        }
        if (props.useChatRecordMode) {
          keyboardListenerId = uni.onKeyboardHeightChange((res) => {
            _handleKeyboardHeightChange(res.height);
          });
        }
        vue.nextTick(() => {
          if (props.refresherEnabled) {
            const refresherEle = zpxListRefresher.value;
            if (refresherEle !== null) {
              refresherEle.getBoundingClientRectAsync().then((rect) => {
                refresherNodeHeight.value = rect.height;
              });
            }
          }
          const zPagingXEle = zPagingX.value;
          if (zPagingXEle !== null) {
            zPagingXEle.getBoundingClientRectAsync().then((rect) => {
              contentWidth.value = rect.width;
            });
          }
          const listEle = zpxList.value;
          if (listEle !== null) {
            listEle.getBoundingClientRectAsync().then((rect) => {
              listHeight.value = rect.height;
            });
            listResizeObserver = new UniResizeObserver((entries) => {
              entries.forEach((entry) => {
                listHeight.value = entry.contentRect.height;
              });
            });
            listResizeObserver.observe(listEle);
          }
        });
      });
      vue.onBeforeUnmount(() => {
        if (listResizeObserver !== null) {
          listResizeObserver.disconnect();
          listResizeObserver = null;
        }
        if (keyboardListenerId != -1) {
          uni.offKeyboardHeightChange(keyboardListenerId);
          keyboardListenerId = -1;
        }
        if (f2CloseTimer != -1) {
          clearTimeout(f2CloseTimer);
          f2CloseTimer = -1;
        }
      });
      __expose({
        reload,
        refresh: refresh2,
        complete,
        completeByTotal,
        completeByNoMore,
        completeByError,
        endRefresh,
        scrollToTop,
        scrollToBottom,
        scrollToY,
        addChatRecordData,
        doChatRecordLoadMore,
        goF2,
        closeF2
      });
      return () => {
        "raw js";
        const _setTemplateRef = vue.createSharedDataTemplateRefSetter();
        const _component_z_paging_x_empty = __easycom_0;
        const _component_list_view = vue.resolveComponent("list-view");
        vue.renderSharedDataEffect(() => {
          return vue.setSharedDataStyle(__sharedData, 90, [__props.pagingStyle]);
        });
        vue.createSharedDataSlot("top", null, null);
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 0, vue.toSharedDataBoolean(__props.listIs === "list-view"));
        }, () => {
          const n47 = vue.createSharedDataComponentWithFallback(_component_list_view, "09802ed4", {
            class: "zpx-list-view zpx-flex1",
            style: () => {
              return [chatRecordRotateStyle.value];
            },
            "associative-container": () => {
              return __props.associativeContainer;
            },
            id: () => {
              return __props.listId;
            },
            "refresher-enabled": () => {
              return __props.refresherEnabled;
            },
            "refresher-threshold": () => {
              return finalRefresherThreshold.value;
            },
            "refresher-max-drag-distance": () => {
              return finalRefresherMaxDragDistance.value;
            },
            "refresher-triggered": () => {
              return refresherTriggered.value;
            },
            "refresher-default-style": () => {
              return __props.useCustomRefresher ? "none" : "black";
            },
            "custom-nested-scroll": () => {
              return __props.customNestedScroll;
            },
            "refresher-background": () => {
              return __props.refresherBackground;
            },
            bounces: () => {
              return __props.rebound;
            },
            "scroll-top": () => {
              return scrollTop.value;
            },
            "show-scrollbar": () => {
              return __props.showScrollbar;
            },
            "scroll-with-animation": () => {
              return finalScrollWithAnimation.value;
            },
            onRefresherpulling: () => {
              return _onRefresherpulling;
            },
            onRefresherrefresh: () => {
              return _onRefresherrefresh;
            },
            onRefresherrestore: () => {
              return _onRefresherrestore;
            },
            onRefresherabort: () => {
              return _onRefresherabort;
            },
            onScrolltolower: () => {
              return _onScrolltolower;
            },
            onScrolltoupper: () => {
              return _onScrolltoupper;
            },
            onScroll: () => {
              return _onScroll;
            },
            onStartnestedscroll: () => {
              return _onStartNestedScroll;
            },
            onNestedprescroll: () => {
              return _onNestedPreScroll;
            },
            onTouchstart: () => {
              return _onListTouchstart;
            }
          }, {
            "header": vue.withSharedDataVaporCtx(() => {
              vue.createSharedDataSlot("default", null, null);
              vue.createSharedDataIf(() => {
                return vue.setSharedData(__sharedData, 2, vue.toSharedDataBoolean(showChatLoadMore.value));
              }, () => {
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedDataStyle(__sharedData, 7, [chatRecordRotateStyle.value]);
                });
                vue.createSharedDataIf(() => {
                  return vue.setSharedData(__sharedData, 3, vue.toSharedDataBoolean(isChatNoMore.value));
                }, () => {
                  vue.createSharedDataSlot("chatNoMore", null, null);
                }, () => {
                  return vue.createSharedDataIf(() => {
                    return vue.setSharedData(__sharedData, 4, vue.toSharedDataBoolean($slots["chatLoading"]));
                  }, () => {
                    vue.createSharedDataSlot("chatLoading", { loadingMoreStatus: () => {
                      return loadMoreStatus.value;
                    } }, (data2) => {
                      return vue.setSharedData(__sharedData, 5, data2);
                    });
                  }, () => {
                    const n12 = vue.createSharedDataComponent(zPagingLoadMore, "6cbc4d45", {
                      status: () => {
                        return chatLoadMoreStatus.value;
                      },
                      "default-text": () => {
                        return __props.loadMoreDefaultText;
                      },
                      "loading-text": () => {
                        return __props.loadMoreLoadingText;
                      },
                      "no-more-text": () => {
                        return __props.loadMoreNoMoreText;
                      },
                      "fail-text": () => {
                        return __props.loadMoreFailText;
                      },
                      "theme-style": () => {
                        return finalLoadingMoreThemeStyle.value;
                      },
                      "is-chat": true,
                      onClickMore: () => {
                        return _handleLoadMore;
                      }
                    });
                    vue.setSharedData(__sharedData, 6, n12.sharedData);
                  }, 517);
                }, 261);
              }, null, 129);
              vue.createSharedDataIf(() => {
                return vue.setSharedData(__sharedData, 8, vue.toSharedDataBoolean(showLoadMore.value));
              }, () => {
                vue.createSharedDataIf(() => {
                  return vue.setSharedData(__sharedData, 9, vue.toSharedDataBoolean($slots["loadMore"]));
                }, () => {
                  vue.createSharedDataSlot("loadMore", { loadMoreStatus: () => {
                    return loadMoreStatus.value;
                  } }, (data2) => {
                    return vue.setSharedData(__sharedData, 10, data2);
                  });
                }, () => {
                  const n20 = vue.createSharedDataComponent(zPagingLoadMore, "6cbcaf34", {
                    status: () => {
                      return loadMoreStatus.value;
                    },
                    "default-text": () => {
                      return __props.loadMoreDefaultText;
                    },
                    "loading-text": () => {
                      return __props.loadMoreLoadingText;
                    },
                    "no-more-text": () => {
                      return __props.loadMoreNoMoreText;
                    },
                    "fail-text": () => {
                      return __props.loadMoreFailText;
                    },
                    "theme-style": () => {
                      return finalLoadingMoreThemeStyle.value;
                    },
                    onClickMore: () => {
                      return _handleLoadMore;
                    }
                  });
                  vue.setSharedData(__sharedData, 11, n20.sharedData);
                }, 1029);
              }, null, 129);
              vue.createSharedDataIf(() => {
                return vue.setSharedData(__sharedData, 12, vue.toSharedDataBoolean(showEmpty.value || showLoading.value));
              }, () => {
                vue.renderSharedDataEffect(() => {
                  vue.setSharedDataClass(__sharedData, 19, showEmpty.value ? "zpx-flex1" : "");
                  vue.setSharedDataStyle(__sharedData, 20, [chatRecordRotateStyle.value]);
                });
                vue.createSharedDataIf(() => {
                  return vue.setSharedData(__sharedData, 13, vue.toSharedDataBoolean(showEmpty.value));
                }, () => {
                  vue.renderSharedDataEffect(() => {
                    const _listHeight = listHeight.value;
                    vue.setSharedDataStyle(__sharedData, 17, { height: _listHeight > 0 ? _listHeight + "px" : "auto" });
                  });
                  vue.createSharedDataIf(() => {
                    return vue.setSharedData(__sharedData, 14, vue.toSharedDataBoolean($slots["empty"]));
                  }, () => {
                    vue.createSharedDataSlot("empty", { isLoadFailed: () => {
                      return isLoadFailed.value;
                    } }, (data2) => {
                      return vue.setSharedData(__sharedData, 15, data2);
                    });
                  }, () => {
                    const n30 = vue.createSharedDataComponentWithFallback(_component_z_paging_x_empty, "6cbd9add", {
                      "empty-text": () => {
                        return !isLoadFailed.value ? __props.emptyText : __props.emptyErrorText;
                      },
                      "empty-img": () => {
                        return !isLoadFailed.value ? __props.emptyImg : __props.emptyErrorImg;
                      },
                      "is-load-failed": () => {
                        return isLoadFailed.value;
                      },
                      "show-empty-reload": () => {
                        return isLoadFailed.value;
                      },
                      onReload: () => {
                        return reload;
                      }
                    });
                    vue.setSharedData(__sharedData, 16, n30 == null ? void 0 : n30.sharedData);
                  }, 1541);
                });
                vue.createSharedDataIf(() => {
                  return vue.setSharedData(__sharedData, 18, vue.toSharedDataBoolean(showLoading.value));
                }, () => {
                  vue.createSharedDataSlot("loading", null, null);
                });
              }, null, 129);
            }),
            "refresher": vue.withSharedDataVaporCtx(() => {
              vue.renderSharedDataEffect(() => {
                return vue.setSharedDataStyle(__sharedData, 26, { width: contentWidth.value + "px" });
              });
              vue.createSharedDataIf(() => {
                return vue.setSharedData(__sharedData, 21, vue.toSharedDataBoolean($slots["refresherF2"] && isRefresherGoF2.value));
              }, () => {
                vue.createSharedDataSlot("refresherF2", null, null);
              }, () => {
                return vue.createSharedDataIf(() => {
                  return vue.setSharedData(__sharedData, 22, vue.toSharedDataBoolean($slots["refresher"]));
                }, () => {
                  vue.createSharedDataSlot("refresher", { refresherStatus: () => {
                    return refresherStatus.value;
                  } }, (data2) => {
                    return vue.setSharedData(__sharedData, 23, data2);
                  });
                }, () => {
                  const n43 = vue.createSharedDataComponent(zPagingRefresher, "6cbccca7", {
                    "default-text": () => {
                      return __props.refresherDefaultText;
                    },
                    "pulling-text": () => {
                      return __props.refresherPullingText;
                    },
                    "refreshing-text": () => {
                      return __props.refresherRefreshingText;
                    },
                    "complete-text": () => {
                      return __props.refresherCompleteText;
                    },
                    "go-f2-text": () => {
                      return __props.refresherGoF2Text;
                    },
                    status: () => {
                      return refresherStatus.value;
                    },
                    "show-update-time": () => {
                      return __props.showRefresherUpdateTime;
                    },
                    "update-time-key": () => {
                      return __props.refresherUpdateTimeKey;
                    },
                    "time-text-timestamp": () => {
                      return refresherTimeTextTimestamp.value;
                    },
                    "theme-style": () => {
                      return finalRefresherThemeStyle.value;
                    },
                    "default-img": () => {
                      return __props.refresherDefaultImg;
                    },
                    "pulling-img": () => {
                      return __props.refresherPullingImg;
                    },
                    "refreshing-img": () => {
                      return __props.refresherRefreshingImg;
                    },
                    "complete-img": () => {
                      return __props.refresherCompleteImg;
                    },
                    "refreshing-animated": () => {
                      return __props.refresherRefreshingAnimated;
                    },
                    "img-style": () => {
                      return __props.refresherImgStyle;
                    },
                    "title-style": () => {
                      return __props.refresherTitleStyle;
                    },
                    "update-time-style": () => {
                      return __props.refresherUpdateTimeStyle;
                    }
                  });
                  vue.setSharedData(__sharedData, 24, n43.sharedData);
                  _setTemplateRef(n43, "commonRefresher");
                }, 2821);
              }, 2565);
              vue.setSharedDataTemplateRef(__sharedData, 25, (n44) => {
                _setTemplateRef(n44, zpxListRefresher, null, "zpxListRefresher");
              });
            })
          });
          vue.setSharedData(__sharedData, 1, n47 == null ? void 0 : n47.sharedData);
          vue.setSharedDataTemplateRef(__sharedData, 27, (n472) => {
            _setTemplateRef(n472, zpxList, null, "zpxList");
          });
        }, () => {
          vue.renderSharedDataEffect(() => {
            vue.setSharedDataStyle(__sharedData, 60, [chatRecordRotateStyle.value]);
            vue.setSharedDataAttr(__sharedData, 61, vue.toSharedDataScrollViewAssociativeContainer(__props.associativeContainer));
            vue.setSharedDataAttr(__sharedData, 62, vue.toSharedDataString(__props.listId));
            vue.setSharedDataAttr(__sharedData, 63, vue.toSharedDataAttrBoolean(__props.refresherEnabled, false));
            vue.setSharedDataAttr(__sharedData, 64, vue.toSharedDataNumber(finalRefresherThreshold.value));
            vue.setSharedDataAttr(__sharedData, 65, vue.toSharedDataNumber(finalRefresherMaxDragDistance.value));
            vue.setSharedDataAttr(__sharedData, 66, vue.toSharedDataAttrBoolean(refresherTriggered.value, false));
            vue.setSharedDataAttr(__sharedData, 67, vue.toSharedDataScrollViewRefresherDefaultStyle(__props.useCustomRefresher ? "none" : "black"));
            vue.setSharedDataAttr(__sharedData, 68, vue.toSharedDataColor(__props.refresherBackground));
            vue.setSharedDataAttr(__sharedData, 69, vue.toSharedDataAttrBoolean(__props.rebound, true));
            vue.setSharedDataAttr(__sharedData, 70, vue.toSharedDataNumber(scrollTop.value));
            vue.setSharedDataAttr(__sharedData, 71, vue.toSharedDataAttrBoolean(__props.showScrollbar, true));
            vue.setSharedDataAttr(__sharedData, 72, vue.toSharedDataAttrBoolean(finalScrollWithAnimation.value, false));
          });
          vue.createSharedDataSlot("default", null, null);
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 28, vue.toSharedDataBoolean(showChatLoadMore.value));
          }, () => {
            vue.renderSharedDataEffect(() => {
              return vue.setSharedDataStyle(__sharedData, 33, [chatRecordRotateStyle.value]);
            });
            vue.createSharedDataIf(() => {
              return vue.setSharedData(__sharedData, 29, vue.toSharedDataBoolean(isChatNoMore.value));
            }, () => {
              vue.createSharedDataSlot("chatNoMore", null, null);
            }, () => {
              return vue.createSharedDataIf(() => {
                return vue.setSharedData(__sharedData, 30, vue.toSharedDataBoolean($slots["chatLoading"]));
              }, () => {
                vue.createSharedDataSlot("chatLoading", { loadingMoreStatus: () => {
                  return loadMoreStatus.value;
                } }, (data2) => {
                  return vue.setSharedData(__sharedData, 31, data2);
                });
              }, () => {
                const n58 = vue.createSharedDataComponent(zPagingLoadMore, "6cbe261e", {
                  status: () => {
                    return chatLoadMoreStatus.value;
                  },
                  "default-text": () => {
                    return __props.loadMoreDefaultText;
                  },
                  "loading-text": () => {
                    return __props.loadMoreLoadingText;
                  },
                  "no-more-text": () => {
                    return __props.loadMoreNoMoreText;
                  },
                  "fail-text": () => {
                    return __props.loadMoreFailText;
                  },
                  "theme-style": () => {
                    return finalLoadingMoreThemeStyle.value;
                  },
                  "is-chat": true,
                  onClickMore: () => {
                    return _handleLoadMore;
                  }
                });
                vue.setSharedData(__sharedData, 32, n58.sharedData);
              }, 3589);
            }, 3333);
          });
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 34, vue.toSharedDataBoolean(showLoadMore.value));
          }, () => {
            vue.createSharedDataIf(() => {
              return vue.setSharedData(__sharedData, 35, vue.toSharedDataBoolean($slots["loadMore"]));
            }, () => {
              vue.createSharedDataSlot("loadMore", { loadMoreStatus: () => {
                return loadMoreStatus.value;
              } }, (data2) => {
                return vue.setSharedData(__sharedData, 36, data2);
              });
            }, () => {
              const n66 = vue.createSharedDataComponent(zPagingLoadMore, "6cbe871f", {
                status: () => {
                  return loadMoreStatus.value;
                },
                "default-text": () => {
                  return __props.loadMoreDefaultText;
                },
                "loading-text": () => {
                  return __props.loadMoreLoadingText;
                },
                "no-more-text": () => {
                  return __props.loadMoreNoMoreText;
                },
                "fail-text": () => {
                  return __props.loadMoreFailText;
                },
                "theme-style": () => {
                  return finalLoadingMoreThemeStyle.value;
                },
                onClickMore: () => {
                  return _handleLoadMore;
                }
              });
              vue.setSharedData(__sharedData, 37, n66.sharedData);
            }, 4101);
          });
          vue.renderSharedDataEffect(() => {
            return vue.setSharedDataStyle(__sharedData, 73, { width: contentWidth.value + "px" });
          });
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 38, vue.toSharedDataBoolean($slots["refresherF2"] && isRefresherGoF2.value));
          }, () => {
            vue.createSharedDataSlot("refresherF2", null, null);
          }, () => {
            return vue.createSharedDataIf(() => {
              return vue.setSharedData(__sharedData, 39, vue.toSharedDataBoolean($slots["refresher"]));
            }, () => {
              vue.createSharedDataSlot("refresher", { refresherStatus: () => {
                return refresherStatus.value;
              } }, (data2) => {
                return vue.setSharedData(__sharedData, 40, data2);
              });
            }, () => {
              const n75 = vue.createSharedDataComponent(zPagingRefresher, "6cbef0f6", {
                "default-text": () => {
                  return __props.refresherDefaultText;
                },
                "pulling-text": () => {
                  return __props.refresherPullingText;
                },
                "refreshing-text": () => {
                  return __props.refresherRefreshingText;
                },
                "complete-text": () => {
                  return __props.refresherCompleteText;
                },
                "go-f2-text": () => {
                  return __props.refresherGoF2Text;
                },
                status: () => {
                  return refresherStatus.value;
                },
                "show-update-time": () => {
                  return __props.showRefresherUpdateTime;
                },
                "update-time-key": () => {
                  return __props.refresherUpdateTimeKey;
                },
                "time-text-timestamp": () => {
                  return refresherTimeTextTimestamp.value;
                },
                "theme-style": () => {
                  return finalRefresherThemeStyle.value;
                },
                "default-img": () => {
                  return __props.refresherDefaultImg;
                },
                "pulling-img": () => {
                  return __props.refresherPullingImg;
                },
                "refreshing-img": () => {
                  return __props.refresherRefreshingImg;
                },
                "complete-img": () => {
                  return __props.refresherCompleteImg;
                },
                "refreshing-animated": () => {
                  return __props.refresherRefreshingAnimated;
                },
                "img-style": () => {
                  return __props.refresherImgStyle;
                },
                "title-style": () => {
                  return __props.refresherTitleStyle;
                },
                "update-time-style": () => {
                  return __props.refresherUpdateTimeStyle;
                }
              });
              vue.setSharedData(__sharedData, 41, n75.sharedData);
              _setTemplateRef(n75, "commonRefresher");
            }, 4869);
          }, 4613);
          vue.setSharedDataTemplateRef(__sharedData, 48, (n76) => {
            _setTemplateRef(n76, zpxListRefresher, null, "zpxListRefresher");
          });
          vue.renderSharedDataEffect(() => {
            vue.setSharedDataClass(__sharedData, 74, showEmpty.value ? "zpx-flex1" : "");
            vue.setSharedDataStyle(__sharedData, 75, [chatRecordRotateStyle.value]);
          });
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 42, vue.toSharedDataBoolean(showEmpty.value));
          }, () => {
            vue.renderSharedDataEffect(() => {
              const _listHeight = listHeight.value;
              vue.setSharedDataStyle(__sharedData, 46, { height: _listHeight > 0 ? _listHeight + "px" : "auto" });
            });
            vue.createSharedDataIf(() => {
              return vue.setSharedData(__sharedData, 43, vue.toSharedDataBoolean($slots["empty"]));
            }, () => {
              vue.createSharedDataSlot("empty", { isLoadFailed: () => {
                return isLoadFailed.value;
              } }, (data2) => {
                return vue.setSharedData(__sharedData, 44, data2);
              });
            }, () => {
              const n83 = vue.createSharedDataComponentWithFallback(_component_z_paging_x_empty, "6cbf6933", {
                "empty-text": () => {
                  return !isLoadFailed.value ? __props.emptyText : __props.emptyErrorText;
                },
                "empty-img": () => {
                  return !isLoadFailed.value ? __props.emptyImg : __props.emptyErrorImg;
                },
                "is-load-failed": () => {
                  return isLoadFailed.value;
                },
                "show-empty-reload": () => {
                  return isLoadFailed.value;
                },
                onReload: () => {
                  return reload;
                }
              });
              vue.setSharedData(__sharedData, 45, n83 == null ? void 0 : n83.sharedData);
            }, 5125);
          });
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 47, vue.toSharedDataBoolean(showLoading.value));
          }, () => {
            vue.createSharedDataSlot("loading", null, null);
          });
          vue.setSharedDataEvent(__sharedData, 49, _onRefresherpulling);
          vue.setSharedDataEvent(__sharedData, 50, _onRefresherrefresh);
          vue.setSharedDataEvent(__sharedData, 51, _onRefresherrestore);
          vue.setSharedDataEvent(__sharedData, 52, _onRefresherabort);
          vue.setSharedDataEvent(__sharedData, 53, _onScrolltolower);
          vue.setSharedDataEvent(__sharedData, 54, _onScrolltoupper);
          vue.setSharedDataEvent(__sharedData, 55, _onScroll);
          vue.setSharedDataEvent(__sharedData, 56, _onStartNestedScroll);
          vue.setSharedDataEvent(__sharedData, 57, _onNestedPreScroll);
          vue.setSharedDataEvent(__sharedData, 58, _onListTouchstart);
          vue.setSharedDataTemplateRef(__sharedData, 59, (n89) => {
            _setTemplateRef(n89, zpxList, null, "zpxList");
          });
        }, 3077);
        vue.renderSharedDataEffect(() => {
          return vue.setSharedDataStyle(__sharedData, 91, [bottomContainerStyle.value]);
        });
        vue.createSharedDataSlot("bottom", null, null);
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 84, vue.toSharedDataBoolean(finalSafeAreaBottom.value > 0));
        }, () => {
          vue.renderSharedDataEffect(() => {
            return vue.setSharedDataStyle(__sharedData, 85, { height: finalSafeAreaBottom.value + "px" });
          });
        });
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 86, vue.toSharedDataBoolean(chatKeyboardPlaceholderHeight.value > 0));
        }, () => {
          vue.renderSharedDataEffect(() => {
            return vue.setSharedDataStyle(__sharedData, 87, { height: chatKeyboardPlaceholderHeight.value + "px" });
          });
        });
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 76, vue.toSharedDataBoolean(showBackToTopClass.value));
        }, () => {
          vue.renderSharedDataEffect(() => {
            vue.setSharedDataClass(__sharedData, 80, backToTopClass.value);
            vue.setSharedDataStyle(__sharedData, 81, [__props.backToTopStyle]);
          });
          vue.createSharedDataIf(() => {
            return vue.setSharedData(__sharedData, 77, vue.toSharedDataBoolean($slots["backToTop"]));
          }, () => {
            vue.createSharedDataSlot("backToTop", null, null);
          }, () => {
            vue.renderSharedDataEffect(() => {
              const _backToTopImg = __props.backToTopImg;
              vue.setSharedDataAttr(__sharedData, 78, vue.toSharedDataString(_backToTopImg.length > 0 ? _backToTopImg : base64BackToTopImg.value));
            });
          }, 6405);
          vue.setSharedDataEvent(__sharedData, 79, _onBackToTopClick);
        });
        vue.createSharedDataIf(() => {
          return vue.setSharedData(__sharedData, 82, vue.toSharedDataBoolean(showF2.value && __props.showRefresherF2));
        }, () => {
          vue.renderSharedDataEffect(() => {
            return vue.setSharedDataStyle(__sharedData, 83, [f2Style.value]);
          });
          vue.createSharedDataSlot("f2", null, null);
        });
        vue.setSharedDataClass(__sharedData, 88, { "zpx-content": true });
        vue.setSharedDataTemplateRef(__sharedData, 89, (n110) => {
          _setTemplateRef(n110, zPagingX, null, "zPagingX");
        });
        return __sharedData;
      };
    }
  });
  const _style_0$2 = {};
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["styles", [_style_0$2]]]);
  const __className = "GenSrcSubZpagingZpaging";
  class ArticleItem extends UTS.UTSType {
    static get$UTSMetadata$() {
      return {
        kind: 2,
        get fields() {
          return {
            id: { type: Number, optional: false },
            title: { type: String, optional: false },
            summary: { type: String, optional: false },
            category: { type: String, optional: false },
            categoryBg: { type: String, optional: false },
            categoryColor: { type: String, optional: false },
            time: { type: String, optional: false }
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
      this.category = this.__props__.category;
      this.categoryBg = this.__props__.categoryBg;
      this.categoryColor = this.__props__.categoryColor;
      this.time = this.__props__.time;
      delete this.__props__;
    }
  }
  const _sfc_main$1 = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __dynamicSharedData: true,
    __className,
    __filename: "src/sub/zpaging/zpaging.uvue",
    __name: "zpaging",
    setup(__props) {
      const __sharedDataRenderer = vue.useSharedDataRenderer();
      const __sharedData = __sharedDataRenderer == "component" ? vue.withSharedDataComponent(new UniDynamicSharedDataComponent(vue.useSharedDataScope(), vue.useSharedDataComponentOptions({ bundleKey: "GenSrcSubZpagingZpagingSharedData", sharedDataClassId: 0 }))) : vue.withSharedDataPage(new UniDynamicSharedDataPage(vue.useSharedDataPageId(), vue.useSharedDataPageOptions({ bundleKey: "GenSrcSubZpagingZpagingSharedData", sharedDataClassId: 0 })));
      const __sharedDataScope = vue.useSharedDataScope(__sharedData);
      const appStore = useAppStore();
      const isDark = vue.computed(() => {
        return appStore.state.isDark;
      });
      vue.onMounted(() => {
        setPageScrollEnabled(false);
      });
      vue.onUnmounted(() => {
        setPageScrollEnabled(true);
      });
      const pagingRef = vue.ref(null);
      const articleList = vue.ref([]);
      const isSimEmpty = vue.ref(false);
      const customBottom = vue.ref(120);
      const backToTopStyle = vue.computed(() => {
        return new UTSJSONObject({
          width: "auto",
          height: "auto",
          bottom: "".concat(customBottom.value, "px"),
          right: "20px"
        });
      });
      const simStep = vue.ref(1);
      const simStatusText = vue.ref("【第 1 步】首次加载 2 条数据（未超出底部），800ms后将自动调接口补齐...");
      const isLoadMoreLoading = vue.ref(false);
      const isLoadMoreError = vue.ref(false);
      const isLoadMoreFinished = vue.ref(false);
      const isHideBottomState = vue.ref(false);
      const refresherStatus = vue.ref("default");
      const refresherIcon = vue.computed(() => {
        if (refresherStatus.value == "release-to-refresh") {
          return "🚀";
        }
        if (refresherStatus.value == "loading") {
          return "⏳";
        }
        if (refresherStatus.value == "complete") {
          return "✅";
        }
        return "⚓";
      });
      const refresherStatusText = vue.computed(() => {
        if (refresherStatus.value == "release-to-refresh") {
          return "松开手指立即开始极速刷新...";
        }
        if (refresherStatus.value == "loading") {
          return "自定义下拉中：数据正在极速吞吐...";
        }
        if (refresherStatus.value == "complete") {
          return "刷新成功，数据已更新！";
        }
        return "松开手指立即触发自定义刷新";
      });
      function onRefresherStatusChange(status) {
        refresherStatus.value = status;
        if (status == "loading" && isSimEmpty.value) {
          isSimEmpty.value = false;
        }
      }
      function onUpdateList(val) {
        articleList.value = val;
      }
      function generateArticlesData(start, count, stageName) {
        const list = [];
        const categories = ["原生渲染", "性能调优", "工程化", "UTS深度解析"];
        const bgs = ["#e0e7ff", "#fef3c7", "#dcfce7", "#f3e8ff"];
        const colors = ["#4338ca", "#d97706", "#16a34a", "#7e22ce"];
        for (let i2 = start; i2 < start + count; i2++) {
          const cIdx = i2 % 4;
          list.push(new ArticleItem({
            id: i2,
            title: "uni-app X 极速体验与架构实践 #".concat(i2, "（").concat(stageName, "）"),
            summary: "流式数据单元 #".concat(i2, "，手势平滑通透，支持超高刷流畅滑动，无缝流式分页。"),
            category: categories[cIdx],
            categoryBg: bgs[cIdx],
            categoryColor: colors[cIdx],
            time: "刚刚"
          }));
        }
        return list;
      }
      function autoLoadFillScreen() {
        simStep.value = 2;
        isLoadMoreLoading.value = true;
        simStatusText.value = "【第 2 步】检测到数据未超出底部，正在自动调用接口追加数据...";
        setTimeout(() => {
          var _a2;
          const nextData = generateArticlesData(3, 6, "自动补齐数据");
          isLoadMoreLoading.value = false;
          simStep.value = 3;
          simStatusText.value = "【第 2 步完成】数据已超出屏幕！请向上滑动触底，第3次加载将模拟报错(500)";
          (_a2 = pagingRef.value) === null || _a2 === void 0 ? null : _a2.$callMethod("completeByNoMore", nextData, false);
        }, 1e3);
      }
      function startFullSimulation() {
        var _a2;
        isSimEmpty.value = false;
        isLoadMoreError.value = false;
        isLoadMoreFinished.value = false;
        isLoadMoreLoading.value = false;
        simStep.value = 1;
        simStatusText.value = "【第 1 步】首批返回 2 条数据（未超出底部），正在启动自动补齐...";
        const initialData = generateArticlesData(1, 2, "首批数据");
        (_a2 = pagingRef.value) === null || _a2 === void 0 ? null : _a2.$callMethod("completeByNoMore", initialData, false);
        setTimeout(() => {
          if (simStep.value == 1) {
            autoLoadFillScreen();
          }
        }, 400);
      }
      function onRetryLoad() {
        if (isLoadMoreLoading.value) {
          return null;
        }
        isLoadMoreError.value = false;
        isLoadMoreLoading.value = true;
        simStep.value = 4;
        simStatusText.value = "【第 4 步】已发起重试请求，正在重新拉取接口数据...";
        setTimeout(() => {
          var _a2;
          const finalItems = generateArticlesData(9, 2, "终态数据");
          isLoadMoreLoading.value = false;
          isLoadMoreFinished.value = true;
          simStep.value = 5;
          simStatusText.value = "【全部完成】🎉 重试成功！没有更多数据了（下拉列表可重新再来一遍）";
          (_a2 = pagingRef.value) === null || _a2 === void 0 ? null : _a2.$callMethod("completeByNoMore", finalItems, true);
          uni.showToast({
            title: "重试成功！数据已全部加载",
            icon: "success"
          });
        }, 800);
      }
      function onQuery(pageNo, _pageSize) {
        var _a2, _b, _c;
        if (isSimEmpty.value) {
          (_a2 = pagingRef.value) === null || _a2 === void 0 ? null : _a2.$callMethod("complete", []);
          return null;
        }
        if (pageNo == 1) {
          startFullSimulation();
          return null;
        }
        if (isLoadMoreError.value) {
          (_b = pagingRef.value) === null || _b === void 0 ? null : _b.$callMethod("completeByError");
          return null;
        }
        if (isLoadMoreLoading.value || isLoadMoreFinished.value || simStep.value == 4) {
          return null;
        }
        if (simStep.value == 3) {
          isLoadMoreLoading.value = true;
          simStatusText.value = "【第 3 步进行中】正在发起第 3 次请求... 模拟网络 500 异常";
          setTimeout(() => {
            var _a3;
            isLoadMoreLoading.value = false;
            isLoadMoreError.value = true;
            simStatusText.value = "【第 3 步报错】模拟 500 接口异常！请点击底部「立即重试」再次加载";
            (_a3 = pagingRef.value) === null || _a3 === void 0 ? null : _a3.$callMethod("completeByError");
            uni.showToast({
              title: "模拟接口异常：500 Internal Error",
              icon: "none"
            });
          }, 700);
          return null;
        }
        (_c = pagingRef.value) === null || _c === void 0 ? null : _c.$callMethod("completeByNoMore", [], true);
      }
      function triggerEmpty() {
        var _a2;
        isSimEmpty.value = true;
        articleList.value = [];
        isLoadMoreError.value = false;
        isLoadMoreFinished.value = true;
        isLoadMoreLoading.value = false;
        simStep.value = 5;
        simStatusText.value = "【已清空数据】触发空列表缺省兜底展示";
        (_a2 = pagingRef.value) === null || _a2 === void 0 ? null : _a2.$callMethod("reload");
        uni.showToast({ title: "已清空数据，触发空态兜底", icon: "none" });
      }
      function triggerReset() {
        var _a2;
        isSimEmpty.value = false;
        (_a2 = pagingRef.value) === null || _a2 === void 0 ? null : _a2.$callMethod("reload");
        uni.showToast({ title: "已重新开始完整流程模拟", icon: "success" });
      }
      function triggerScrollToTop() {
        var _a2;
        (_a2 = pagingRef.value) === null || _a2 === void 0 ? null : _a2.$callMethod("scrollToTop", true);
        uni.showToast({ title: "已平滑滚动返回顶部", icon: "none" });
      }
      function toggleBottomPosition() {
        if (customBottom.value == 120) {
          customBottom.value = 160;
        } else {
          customBottom.value = 120;
        }
        uni.showToast({
          title: "回顶按钮底部边距设为 ".concat(customBottom.value, "px"),
          icon: "none"
        });
      }
      function toggleHideBottomState() {
        isHideBottomState.value = !isHideBottomState.value;
        uni.showToast({
          title: isHideBottomState.value ? "已开启「底态隐藏(没了)」模式" : "已恢复显示底部状态",
          icon: "none"
        });
      }
      return () => {
        "raw js";
        const _setTemplateRef = vue.createSharedDataTemplateRefSetter();
        const _component_uni_icons = __easycom_0$2;
        const _component_z_paging_x = __easycom_1;
        const n81 = vue.createSharedDataComponent(AppKu, "64a7224f", {
          layout: "navbar",
          "show-back": true,
          "hide-navbar": false,
          "enable-pull-down-refresh": false,
          "page-style": { "navigationBarTitleText": "z-paging-x 原生分页", "navigationStyle": "custom" }
        }, {
          "default": vue.withSharedDataVaporCtx(() => {
            const n80 = vue.createSharedDataComponent(LayoutComponent, "51306bb4", {
              "show-back": true,
              "hide-navbar": false,
              "enable-pull-down-refresh": false,
              "page-style": { "navigationBarTitleText": "z-paging-x 原生分页", "navigationStyle": "custom" }
            }, {
              "default": vue.withSharedDataVaporCtx(() => {
                vue.renderSharedDataEffect(() => {
                  return vue.setSharedDataClass(__sharedData, 40, ["weapp-tw-border flex flex-col flex-1", isDark.value ? "bg-_b_h0f172a_B" : "bg-_b_hf8fafc_B"]);
                });
                const n77 = vue.createSharedDataComponentWithFallback(_component_z_paging_x, "51304e26", {
                  "model-value": () => {
                    return articleList.value;
                  },
                  "default-page-size": 10,
                  "show-back-to-top": true,
                  "back-to-top-threshold": 200,
                  "back-to-top-style": () => {
                    return backToTopStyle.value;
                  },
                  "refresher-threshold": 70,
                  "refresher-complete-delay": 300,
                  "refresher-background": () => {
                    return isDark.value ? "#0f172a" : "#f8fafc";
                  },
                  "paging-style": () => {
                    return { flex: 1, position: "relative", backgroundColor: isDark.value ? "#0f172a" : "#f8fafc" };
                  },
                  "onUpdate:modelValue": () => {
                    return onUpdateList;
                  },
                  onRefresherStatusChange: () => {
                    return onRefresherStatusChange;
                  },
                  onQuery: () => {
                    return onQuery;
                  }
                }, {
                  "top": () => {
                    vue.setSharedDataEvent(__sharedData, 3, triggerEmpty);
                    vue.setSharedDataEvent(__sharedData, 4, triggerReset);
                    vue.setSharedDataEvent(__sharedData, 5, triggerScrollToTop);
                    vue.setSharedDataEvent(__sharedData, 6, toggleHideBottomState);
                    vue.setSharedDataEvent(__sharedData, 7, toggleBottomPosition);
                    vue.renderSharedDataEffect(() => {
                      const _isDark = isDark.value;
                      const _simStep = simStep.value;
                      const _isHideBottomState = isHideBottomState.value;
                      vue.setSharedDataClass(__sharedData, 8, ["weapp-tw-border m-_b14px_B p-_b16px_B rounded-_b14px_B border-_b1px_B border-solid shadow-xs", _isDark ? "bg-_b_h1e293b_B border-_b_h334155_B" : "bg-_b_he0e7ff_B border-_b_hc7d2fe_B"]);
                      vue.setSharedDataClass(__sharedData, 9, ["weapp-tw-border text-_b15px_B font-bold", _isDark ? "text-_b_hf1f5f9_B" : "text-_b_h1e293b_B"]);
                      vue.setSharedDataClass(__sharedData, 10, ["weapp-tw-border p-_b8px_B rounded-_b8px_B my-_b8px_B flex flex-row items-center border-_b1px_B border-solid", _isDark ? "bg-_b_h0f172a_B_f60 border-_b_h334155_B" : "bg-white_f80 border-_b_hc7d2fe_B"]);
                      vue.setSharedData(__sharedData, 11, vue.toDisplayString(_simStep == 1 || _simStep == 2 ? "⏳" : _simStep == 3 ? isLoadMoreError.value ? "🚨" : "⚡" : _simStep >= 4 ? "🎉" : "💡"));
                      vue.setSharedDataClass(__sharedData, 12, ["weapp-tw-border text-_b11px_B font-medium leading-_b16px_B flex-1", isLoadMoreError.value ? "text-_b_hdc2626_B" : _simStep >= 4 ? "text-_b_h16a34a_B" : _isDark ? "text-_b_h38bdf8_B" : "text-_b_h4338ca_B"]);
                      vue.setSharedData(__sharedData, 13, vue.toDisplayString(simStatusText.value));
                      vue.setSharedDataClass(__sharedData, 14, ["weapp-tw-border flex-1 py-_b7px_B rounded-_b6px_B items-center justify-center active_copacity-75", _isHideBottomState ? "bg-_b_hf1f5f9_B" : "bg-_b_hfce7f3_B"]);
                      vue.setSharedDataClass(__sharedData, 15, ["weapp-tw-border text-_b10px_B font-bold", _isHideBottomState ? "text-_b_h64748b_B" : "text-_b_hdb2777_B"]);
                      vue.setSharedData(__sharedData, 16, vue.toDisplayString(_isHideBottomState ? "🙈 隐藏中(没了)" : "显示底部状态"));
                      vue.setSharedDataClass(__sharedData, 17, ["weapp-tw-border flex flex-row items-center justify-between mt-_b8px_B pt-_b6px_B border-t-_b1px_B border-solid", _isDark ? "border-_b_h334155_B" : "border-_b_hc7d2fe_B"]);
                      vue.setSharedDataClass(__sharedData, 18, ["weapp-tw-border text-_b11px_B", _isDark ? "text-_b_h94a3b8_B" : "text-_b_h475569_B"]);
                      vue.setSharedData(__sharedData, 19, vue.toDisplayString(customBottom.value));
                    });
                  },
                  "refresher": () => {
                    vue.renderSharedDataEffect(() => {
                      vue.setSharedData(__sharedData, 20, vue.toDisplayString(refresherIcon.value));
                      vue.setSharedDataClass(__sharedData, 21, ["weapp-tw-border text-_b12px_B font-bold", isDark.value ? "text-_b_h38bdf8_B" : "text-_b_h0957de_B"]);
                      vue.setSharedData(__sharedData, 22, vue.toDisplayString(refresherStatusText.value));
                    });
                  },
                  "backToTop": vue.withSharedDataVaporCtx(() => {
                    vue.renderSharedDataEffect(() => {
                      return vue.setSharedDataClass(__sharedData, 24, ["weapp-tw-border px-_b12px_B py-_b8px_B rounded-full flex flex-row items-center border-_b1px_B border-solid shadow-md active_copacity-75", isDark.value ? "bg-_b_h0284c7_B border-_b_h38bdf8_B" : "bg-_b_h0957de_B border-_b_h1d4ed8_B"]);
                    });
                    const n26 = vue.createSharedDataComponentWithFallback(_component_uni_icons, "1593aae0", {
                      type: "top",
                      size: "14",
                      color: "#ffffff"
                    });
                    vue.setSharedData(__sharedData, 23, n26 == null ? void 0 : n26.sharedData);
                  }),
                  "empty": () => {
                    vue.setSharedDataEvent(__sharedData, 25, triggerReset);
                    vue.renderSharedDataEffect(() => {
                      return vue.setSharedDataClass(__sharedData, 26, ["weapp-tw-border text-_b13px_B font-bold mb-_b14px_B", isDark.value ? "text-_b_h64748b_B" : "text-_b_h94a3b8_B"]);
                    });
                  },
                  "loadMore": () => {
                    vue.createSharedDataIf(() => {
                      return vue.setSharedData(__sharedData, 27, vue.toSharedDataBoolean(!isHideBottomState.value));
                    }, () => {
                      vue.createSharedDataIf(() => {
                        return vue.setSharedData(__sharedData, 28, vue.toSharedDataBoolean(isLoadMoreLoading.value));
                      }, () => {
                        vue.renderSharedDataEffect(() => {
                          const _isDark = isDark.value;
                          vue.setSharedDataClass(__sharedData, 29, ["weapp-tw-border mx-_b14px_B my-_b10px_B p-_b14px_B rounded-_b12px_B border-_b1px_B border-dashed flex flex-row items-center justify-center shadow-xs", _isDark ? "bg-_b_h1e293b_B_f70 border-_b_h38bdf866_B" : "bg-_b_heff6ff_B border-_b_h93c5fd_B"]);
                          vue.setSharedDataClass(__sharedData, 30, ["weapp-tw-border text-_b12px_B font-semibold", _isDark ? "text-_b_h38bdf8_B" : "text-_b_h0957de_B"]);
                        });
                      }, () => {
                        return vue.createSharedDataIf(() => {
                          return vue.setSharedData(__sharedData, 31, vue.toSharedDataBoolean(isLoadMoreError.value));
                        }, () => {
                          vue.setSharedDataEvent(__sharedData, 32, onRetryLoad);
                          vue.renderSharedDataEffect(() => {
                            return vue.setSharedDataClass(__sharedData, 33, ["weapp-tw-border mx-_b14px_B my-_b8px_B p-_b12px_B rounded-_b12px_B border-_b1px_B border-solid flex flex-row items-center justify-between shadow-xs", isDark.value ? "bg-_b_h450a0a_B_f50 border-_b_h7f1d1d_B" : "bg-_b_hfef2f2_B border-_b_hfecaca_B"]);
                          });
                        }, () => {
                          return vue.createSharedDataIf(() => {
                            return vue.setSharedData(__sharedData, 34, vue.toSharedDataBoolean(isLoadMoreFinished.value));
                          }, () => {
                            vue.renderSharedDataEffect(() => {
                              const _isDark = isDark.value;
                              const _isDark_bg_b_h334155_B_bg_b_hcbd5e1_B = _isDark ? "bg-_b_h334155_B" : "bg-_b_hcbd5e1_B";
                              vue.setSharedDataClass(__sharedData, 35, ["weapp-tw-border w-_b36px_B h-_b1px_B", _isDark_bg_b_h334155_B_bg_b_hcbd5e1_B]);
                              vue.setSharedDataClass(__sharedData, 36, ["weapp-tw-border text-_b12px_B font-medium", _isDark ? "text-_b_h64748b_B" : "text-_b_h94a3b8_B"]);
                              vue.setSharedDataClass(__sharedData, 37, ["weapp-tw-border w-_b36px_B h-_b1px_B", _isDark_bg_b_h334155_B_bg_b_hcbd5e1_B]);
                            });
                          }, null, 129);
                        }, 901);
                      }, 645);
                    }, null, 129);
                  },
                  "default": () => {
                    vue.createSharedDataIf(() => {
                      return vue.setSharedData(__sharedData, 38, vue.toSharedDataBoolean(!isSimEmpty.value));
                    }, () => {
                      vue.createSharedDataFor(vue.setSharedDataScoped(__sharedData, 39, vue.createSharedDataVFor(__sharedDataScope, () => {
                        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: "".concat(__className, "SharedData"), sharedDataClassId: 1 });
                      })), () => {
                        return articleList.value;
                      }, (__sharedData_VFor0, _for_item0) => {
                        let _isDark, _item;
                        vue.renderSharedDataEffect(() => {
                          _isDark = isDark.value;
                          _item = _for_item0.value;
                          vue.setSharedDataClass(__sharedData_VFor0, 1, ["weapp-tw-border mx-_b14px_B my-_b6px_B p-_b14px_B rounded-_b12px_B border-_b1px_B border-solid flex flex-col", _isDark ? "bg-_b_h1e293b_B border-_b_h334155_B" : "bg-white border-_b_he2e8f0_B"]);
                          vue.setSharedDataStyle(__sharedData_VFor0, 2, { backgroundColor: _item.categoryBg });
                          vue.setSharedDataStyle(__sharedData_VFor0, 3, { color: _item.categoryColor });
                          vue.setSharedData(__sharedData_VFor0, 4, vue.toDisplayString(_item.category));
                          vue.setSharedData(__sharedData_VFor0, 5, vue.toDisplayString(_item.time));
                          vue.setSharedDataClass(__sharedData_VFor0, 6, ["weapp-tw-border text-_b14px_B font-bold mb-_b4px_B leading-_b20px_B", _isDark ? "text-_b_hf1f5f9_B" : "text-_b_h1e293b_B"]);
                          vue.setSharedData(__sharedData_VFor0, 7, vue.toDisplayString(_item.title));
                          vue.setSharedData(__sharedData_VFor0, 8, vue.toDisplayString(_item.summary));
                        });
                        vue.setSharedData(__sharedData_VFor0, 9, vue.toDisplayString(_item.id));
                        return null;
                      }, (__sharedData_VFor0, item) => {
                        return vue.setSharedData(__sharedData_VFor0, 0, vue.toDisplayString(item.id));
                      }, 32);
                    }, null, 129);
                  }
                });
                vue.setSharedData(__sharedData, 2, n77 == null ? void 0 : n77.sharedData);
                _setTemplateRef(n77, pagingRef, null, "pagingRef");
              })
            });
            vue.setSharedData(__sharedData, 1, n80.sharedData);
          })
        });
        vue.setSharedData(__sharedData, 0, n81.sharedData);
        return __sharedData;
      };
    }
  });
  const _style_0$1 = {};
  const SrcSubZpagingZpaging = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["styles", [_style_0$1]]]);
  __definePage("src/pages/index/index", SrcPagesIndexIndex);
  __definePage("src/pages/ai/ai", SrcPagesAiAi);
  __definePage("src/pages/basic/basic", SrcPagesBasicBasic);
  __definePage("src/pages/function/function", SrcPagesFunctionFunction);
  __definePage("src/pages/me/me", SrcPagesMeMe);
  __definePage("src/sub/auth/login", SrcSubAuthLogin);
  __definePage("src/sub/auth/register", SrcSubAuthRegister);
  __definePage("src/sub/crypto/crypto", SrcSubCryptoCrypto);
  __definePage("src/sub/device/device", SrcSubDeviceDevice);
  __definePage("src/sub/httpDemo/httpDemo", SrcSubHttpDemoHttpDemo);
  __definePage("src/sub/layoutDemo/layoutDemo", SrcSubLayoutDemoLayoutDemo);
  __definePage("src/sub/lodash/lodash", SrcSubLodashLodash);
  __definePage("src/sub/nested-scroll/nested-scroll", SrcSubNestedScrollNestedScroll);
  __definePage("src/sub/rxjsDemo/rxjsDemo", SrcSubRxjsDemoRxjsDemo);
  __definePage("src/sub/tailwindcss/tailwindcss", SrcSubTailwindcssTailwindcss);
  __definePage("src/sub/test/test", SrcSubTestTest);
  __definePage("src/sub/time/time", SrcSubTimeTime);
  __definePage("src/sub/uiTest/uiTest", SrcSubUiTestUiTest);
  __definePage("src/sub/zpaging/zpaging", SrcSubZpagingZpaging);
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
    var _a2;
    const parts = url.split("?");
    const path = parts[0];
    const query = /* @__PURE__ */ new Map();
    if (parts.length > 1) {
      const queryStr = parts[1];
      const pairs = queryStr.split("&");
      for (let i2 = 0; i2 < pairs.length; i2++) {
        const pair = pairs[i2].split("=");
        if (pair.length > 1) {
          const key2 = pair[0];
          let value = pair[1];
          if (value.includes("%")) {
            value = (_a2 = decodeURIComponent(value)) !== null && _a2 !== void 0 ? _a2 : "";
          }
          query.set(key2, value);
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
      normalizedPath = "/".concat(normalizedPath);
    }
    return EXCLUDE_LOGIN_PATH_LIST.includes(normalizedPath);
  }
  function doIntercept(url) {
    uni.__log__("log", "at src/router/interceptor.uts:70", "doIntercept url:", url);
    if (url == null || url == "") {
      return true;
    }
    const urlObj = parseUrlToObj(url);
    let path = urlObj.path;
    const query = urlObj.query;
    if (path.startsWith("src/")) {
      path = "/".concat(path);
    }
    if (!path.startsWith("/") && !path.startsWith("plugin://") && !path.startsWith("http://") && !path.startsWith("https://")) {
      const pages2 = getCurrentPages();
      let currentPath = "";
      if (pages2.length > 0) {
        currentPath = pages2[pages2.length - 1].route;
      }
      let normalizedCurrentPath = currentPath;
      if (normalizedCurrentPath.startsWith("src/")) {
        normalizedCurrentPath = "/".concat(normalizedCurrentPath);
      }
      if (!normalizedCurrentPath.startsWith("/")) {
        normalizedCurrentPath = "/".concat(normalizedCurrentPath);
      }
      const lastSlashIdx = normalizedCurrentPath.lastIndexOf("/");
      let baseDir = "";
      if (lastSlashIdx >= 0) {
        baseDir = normalizedCurrentPath.substring(0, lastSlashIdx);
      }
      path = "".concat(baseDir, "/").concat(path);
    }
    if (path.startsWith("src/")) {
      path = "/".concat(path);
    }
    uni.__log__("log", "at src/router/interceptor.uts:111", "doIntercept normalized path:", path);
    const tokenStore = useTokenStore();
    const hasLogin = tokenStore.hasValidLogin();
    uni.__log__("log", "at src/router/interceptor.uts:116", "doIntercept login status - hasLogin:", hasLogin);
    if (hasLogin) {
      if (path !== LOGIN_PAGE) {
        return true;
      } else {
        const redirect = UTS.mapGet(query, "redirect");
        const redirectUrl_1 = redirect != null && redirect != "" ? redirect : "/src/pages/index/index";
        if (isPageTabbar(redirectUrl_1)) {
          switchTabbar(redirectUrl_1);
        } else {
          uni.navigateTo({ url: redirectUrl_1 });
        }
        return false;
      }
    }
    let fullPath = path;
    if (query.size > 0) {
      const paramsList = [];
      query.forEach((val, key2) => {
        paramsList.push("".concat(key2, "=").concat(val));
      });
      fullPath += "?".concat(paramsList.join("&"));
    }
    const redirectUrl = "".concat(LOGIN_PAGE, "?redirect=").concat(encodeURIComponent(fullPath));
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
    invoke(options = null) {
      let url = "";
      if (options != null) {
        const opt = options;
        url = opt.url;
      }
      return doIntercept(url);
    }
  });
  const redirectToInterceptor = new UTSJSONObject({
    invoke(options = null) {
      let url = "";
      if (options != null) {
        const opt = options;
        url = opt.url;
      }
      return doIntercept(url);
    }
  });
  const reLaunchInterceptor = new UTSJSONObject({
    invoke(options = null) {
      let url = "";
      if (options != null) {
        const opt = options;
        url = opt.url;
      }
      return doIntercept(url);
    }
  });
  const switchTabInterceptor = new UTSJSONObject({
    invoke(options = null) {
      let url = "";
      if (options != null) {
        const opt = options;
        url = opt.url;
      }
      return doIntercept(url);
    }
  });
  const chooseLocationInterceptor = new UTSJSONObject({
    invoke(options = null) {
      return true;
    }
  });
  function installRouteInterceptor() {
    uni.addInterceptor("navigateTo", navigateToInterceptor);
    uni.addInterceptor("reLaunch", reLaunchInterceptor);
    uni.addInterceptor("redirectTo", redirectToInterceptor);
    uni.addInterceptor("switchTab", switchTabInterceptor);
    uni.addInterceptor("chooseLocation", chooseLocationInterceptor);
  }
  const _sfc_main = /* @__PURE__ */ vue.defineVaporSharedDataComponent({
    __name: "App",
    setup(__props) {
      vue.onLaunch(() => {
        useAppStore().initThemeMode();
        initNativeMidButtonTap();
      });
      vue.onShow((options = null) => {
      });
    }
  });
  const _style_0 = {};
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
  const __global__ = typeof globalThis === "undefined" ? Function("return this")() : globalThis;
  __global__.__uniX = true;
  function createApp() {
    installRouteInterceptor();
    const app2 = vue.createSSRApp(App);
    app2.use(pinia);
    app2.config.globalProperties.$pinia = pinia;
    app2.use(i18n);
    return {
      app: app2
    };
  }
  createApp().app.mount("#app");
})(Vue);
