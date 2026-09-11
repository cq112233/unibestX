import { c as customTabbarConfig } from "../tabbar/config.js";
const { computed, ref } = globalThis.Vue;
const NAVBAR_CONTENT_HEIGHT = 44;
const TABBAR_BASE_HEIGHT = 50;
let systemId = 0;
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
const systemInfo = ref(null);
const safeAreaInsets = ref(null);
computed(() => {
  var _a, _b;
  return (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.windowWidth) !== null && _b !== void 0 ? _b : 0;
});
computed(() => {
  var _a, _b;
  return (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.windowHeight) !== null && _b !== void 0 ? _b : 0;
});
computed(() => {
  var _a, _b;
  return (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.screenWidth) !== null && _b !== void 0 ? _b : 0;
});
computed(() => {
  var _a, _b;
  return (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.screenHeight) !== null && _b !== void 0 ? _b : 0;
});
computed(() => {
  var _a, _b;
  return (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.statusBarHeight) !== null && _b !== void 0 ? _b : 0;
});
const availableHeight = computed(() => {
  var _a, _b, _c, _d;
  if (customTabbarConfig.type == "default") {
    return (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.availableHeight) !== null && _b !== void 0 ? _b : 0;
  } else {
    const ah = (_d = (_c = systemInfo.value) === null || _c === void 0 ? null : _c.availableHeight) !== null && _d !== void 0 ? _d : 0;
    return ah ? ah + TABBAR_BASE_HEIGHT : 0;
  }
});
computed(() => {
  var _a, _b, _c;
  return (_c = (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.safeAreaInsets) === null || _b === void 0 ? null : _b.bottom) !== null && _c !== void 0 ? _c : 0;
});
function getAppTitle() {
  var _a;
  return `${(_a = "unibestX") !== null && _a !== void 0 ? _a : "unibestX"}`;
}
function getApiBaseUrl() {
  var _a;
  return `${(_a = "https://ukw0y1.laf.run") !== null && _a !== void 0 ? _a : "https://ukw0y1.laf.run"}`;
}
function isVaporMode() {
  return true;
}
function getCurrentEnv() {
  var _a;
  const buildEnvType = `${(_a = "test") !== null && _a !== void 0 ? _a : ""}`;
  if (buildEnvType == "test") {
    return "test";
  }
  return "production";
}
function getCurrentEnvName() {
  var _a;
  const envName = `${(_a = "测试环境") !== null && _a !== void 0 ? _a : ""}`;
  if (envName != "") {
    return envName;
  }
  return "";
}
function getAppVersion() {
  var _a, _b;
  try {
    const sys = uni.getSystemInfoSync();
    if (((_a = sys.appVersion) !== null && _a !== void 0 ? _a : "") != "") {
      return `${sys.appVersion}`;
    }
  } catch {
  }
  return `${(_b = "1.0.0") !== null && _b !== void 0 ? _b : "1.0.0"}`;
}
function getCompileMode() {
  const modeName = "Vapor 模式";
  const envText = getCurrentEnv() == "test" ? "测试" : "生产";
  return `${modeName} (${envText})`;
}
function getCompilePlatform() {
  return "HarmonyOS";
}
function updateSystemInfo() {
  var _a, _b, _c, _d, _e, _f, _g;
  const windowInfo = uni.getWindowInfo();
  let compileVer = "";
  if (compileVer == "") {
    try {
      const sysInfo = uni.getSystemInfoSync();
      const uniCompileVersion = `${(_a = sysInfo.uniCompileVersion) !== null && _a !== void 0 ? _a : ""}`;
      compileVer = uniCompileVersion;
    } catch {
    }
  }
  if (compileVer == "") {
    try {
      const appBaseInfo = uni.getAppBaseInfo();
      compileVer = `${(_b = appBaseInfo.version) !== null && _b !== void 0 ? _b : ""}`;
    } catch {
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
    brand = `${(_c = dev.brand) !== null && _c !== void 0 ? _c : ""}`;
    model = `${(_d = dev.model) !== null && _d !== void 0 ? _d : ""}`;
  } catch {
  }
  try {
    const sys = uni.getSystemInfoSync();
    system = `${(_e = sys.system) !== null && _e !== void 0 ? _e : ""}`;
    if (brand == "") {
      brand = `${(_f = sys.brand) !== null && _f !== void 0 ? _f : ""}`;
    }
    if (model == "") {
      model = `${(_g = sys.model) !== null && _g !== void 0 ? _g : ""}`;
    }
  } catch {
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
    this.pageStyle = this.__props__.pageStyle;
    this.layout = this.__props__.layout;
    delete this.__props__;
  }
}
function updateAvailableHeight(kuProps, selectedTabbarStrategy) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  updateSystemInfo();
  const sys = systemInfo.value;
  if (sys == null) {
    return null;
  }
  const safeBottom = (_b = (_a = sys.safeAreaInsets) === null || _a === void 0 ? null : _a.bottom) !== null && _b !== void 0 ? _b : 0;
  const safeTop = (_d = (_c = sys.safeAreaInsets) === null || _c === void 0 ? null : _c.top) !== null && _d !== void 0 ? _d : 0;
  const safeAreaBottom2 = (_f = (_e = sys.safeArea) === null || _e === void 0 ? null : _e.bottom) !== null && _f !== void 0 ? _f : 0;
  const kuPageStyle = (_g = kuProps.pageStyle) !== null && _g !== void 0 ? _g : null;
  const navStyleText = kuPageStyle != null ? (_h = kuPageStyle.navigationStyle) !== null && _h !== void 0 ? _h : "" : "";
  const isCustomNav = navStyleText == "custom";
  const isNoNavbarLayout = kuProps.layout != "navbar";
  let statusBarOffset = 0;
  if (isNoNavbarLayout) {
    statusBarOffset = isCustomNav ? 0 : safeTop;
  } else {
    statusBarOffset = kuProps.hideNavbar ? safeTop : safeTop;
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
  if (selectedTabbarStrategy == 2 || selectedTabbarStrategy == 3 || selectedTabbarStrategy == 1) {
    if (isNoNavbarLayout) {
      if (isCustomNav) {
        {
          uni.__f__("log", "at src/utils/systemInfo.uts:606", `第${systemId}次`);
          uni.__f__("log", "at src/utils/systemInfo.uts:607", "蒸汽-鸿蒙😂");
          uni.__f__("log", "at src/utils/systemInfo.uts:608", `窗口screenHeight:${sys.screenHeight}`, 816);
          uni.__f__("log", "at src/utils/systemInfo.uts:609", `窗口windowHeight:${sys.windowHeight}`, 730);
          uni.__f__("log", "at src/utils/systemInfo.uts:610", `状态栏statusBarHeight:${sys.statusBarHeight}`, 42);
          uni.__f__("log", "at src/utils/systemInfo.uts:611", `导航栏navBarHeight:${sys.navBarHeight}`, 44);
          uni.__f__("log", "at src/utils/systemInfo.uts:612", `tabBarHeight:${sys.tabBarHeight}`, 50);
          uni.__f__("log", "at src/utils/systemInfo.uts:613", `safeBottom:${safeBottom}`, 28);
          uni.__f__("log", "at src/utils/systemInfo.uts:614", `safeAreaBottom:${safeAreaBottom2}`, 788);
          uni.__f__("log", "at src/utils/systemInfo.uts:615", `safeTop:${safeTop}`, 42);
          uni.__f__("log", "at src/utils/systemInfo.uts:616", "----", sys.screenHeight - sys.statusBarHeight - sys.navBarHeight - sys.tabBarHeight - safeBottom);
          sys.availableHeight = safeAreaBottom2 - navBarOffset - statusBarOffset - sys.tabBarHeight;
          uni.__f__("log", "at src/utils/systemInfo.uts:618", sys.availableHeight, "sys.availableHeight");
          systemId++;
        }
      } else {
        {
          uni.__f__("log", "at src/utils/systemInfo.uts:755", `第${systemId}次`);
          uni.__f__("log", "at src/utils/systemInfo.uts:756", "蒸汽-鸿蒙😂");
          uni.__f__("log", "at src/utils/systemInfo.uts:757", `窗口screenHeight:${sys.screenHeight}`, 816);
          uni.__f__("log", "at src/utils/systemInfo.uts:758", `窗口windowHeight:${sys.windowHeight}`, 730);
          uni.__f__("log", "at src/utils/systemInfo.uts:759", `状态栏statusBarHeight:${sys.statusBarHeight}`, 42);
          uni.__f__("log", "at src/utils/systemInfo.uts:760", `导航栏navBarHeight:${sys.navBarHeight}`, 44);
          uni.__f__("log", "at src/utils/systemInfo.uts:761", `tabBarHeight:${sys.tabBarHeight}`, 50);
          uni.__f__("log", "at src/utils/systemInfo.uts:762", `safeBottom:${safeBottom}`, 28);
          uni.__f__("log", "at src/utils/systemInfo.uts:763", `safeAreaBottom:${safeAreaBottom2}`, 788);
          uni.__f__("log", "at src/utils/systemInfo.uts:764", `safeTop:${safeTop}`, 42);
          uni.__f__("log", "at src/utils/systemInfo.uts:765", "----", sys.screenHeight - sys.statusBarHeight - sys.navBarHeight - sys.tabBarHeight - safeBottom);
          sys.availableHeight = safeAreaBottom2 - navBarOffset - statusBarOffset - sys.tabBarHeight;
          uni.__f__("log", "at src/utils/systemInfo.uts:767", sys.availableHeight, "sys.availableHeight");
          systemId++;
        }
      }
    } else {
      if (isCustomNav) {
        {
          uni.__f__("log", "at src/utils/systemInfo.uts:902", `第${systemId}次`);
          uni.__f__("log", "at src/utils/systemInfo.uts:903", "蒸汽-鸿蒙😂");
          uni.__f__("log", "at src/utils/systemInfo.uts:904", `窗口screenHeight:${sys.screenHeight}`, 816);
          uni.__f__("log", "at src/utils/systemInfo.uts:905", `窗口windowHeight:${sys.windowHeight}`, 730);
          uni.__f__("log", "at src/utils/systemInfo.uts:906", `状态栏statusBarHeight:${sys.statusBarHeight}`, 42);
          uni.__f__("log", "at src/utils/systemInfo.uts:907", `导航栏navBarHeight:${sys.navBarHeight}`, 44);
          uni.__f__("log", "at src/utils/systemInfo.uts:908", `tabBarHeight:${sys.tabBarHeight}`, 50);
          uni.__f__("log", "at src/utils/systemInfo.uts:909", `safeBottom:${safeBottom}`, 28);
          uni.__f__("log", "at src/utils/systemInfo.uts:910", `safeAreaBottom:${safeAreaBottom2}`, 788);
          uni.__f__("log", "at src/utils/systemInfo.uts:911", `safeTop:${safeTop}`, 42);
          uni.__f__("log", "at src/utils/systemInfo.uts:912", "----", sys.screenHeight - sys.statusBarHeight - sys.navBarHeight - sys.tabBarHeight - safeBottom);
          sys.availableHeight = safeAreaBottom2 - navBarOffset - statusBarOffset - sys.tabBarHeight;
          uni.__f__("log", "at src/utils/systemInfo.uts:914", sys.availableHeight, "sys.availableHeight");
          systemId++;
        }
      } else {
        {
          uni.__f__("log", "at src/utils/systemInfo.uts:1048", `第${systemId}次`);
          uni.__f__("log", "at src/utils/systemInfo.uts:1049", "蒸汽-鸿蒙😂");
          uni.__f__("log", "at src/utils/systemInfo.uts:1050", `窗口screenHeight:${sys.screenHeight}`, 816);
          uni.__f__("log", "at src/utils/systemInfo.uts:1051", `窗口windowHeight:${sys.windowHeight}`, 730);
          uni.__f__("log", "at src/utils/systemInfo.uts:1052", `状态栏statusBarHeight:${sys.statusBarHeight}`, 42);
          uni.__f__("log", "at src/utils/systemInfo.uts:1053", `导航栏navBarHeight:${sys.navBarHeight}`, 44);
          uni.__f__("log", "at src/utils/systemInfo.uts:1054", `tabBarHeight:${sys.tabBarHeight}`, 50);
          uni.__f__("log", "at src/utils/systemInfo.uts:1055", `safeBottom:${safeBottom}`, 28);
          uni.__f__("log", "at src/utils/systemInfo.uts:1056", `safeAreaBottom:${safeAreaBottom2}`, 788);
          uni.__f__("log", "at src/utils/systemInfo.uts:1057", `safeTop:${safeTop}`, 42);
          uni.__f__("log", "at src/utils/systemInfo.uts:1058", "----", sys.screenHeight - sys.statusBarHeight - sys.navBarHeight - sys.tabBarHeight - safeBottom);
          sys.availableHeight = safeAreaBottom2 - navBarOffset - statusBarOffset - sys.tabBarHeight;
          uni.__f__("log", "at src/utils/systemInfo.uts:1060", sys.availableHeight, "sys.availableHeight");
          systemId++;
        }
      }
    }
  }
  if (selectedTabbarStrategy == 0) {
    if (isNoNavbarLayout) {
      if (isCustomNav) {
        {
          uni.__f__("log", "at src/utils/systemInfo.uts:1193", `第${systemId}次`);
          uni.__f__("log", "at src/utils/systemInfo.uts:1194", "蒸汽-鸿蒙😂");
          uni.__f__("log", "at src/utils/systemInfo.uts:1195", `窗口screenHeight:${sys.screenHeight}`, 816);
          uni.__f__("log", "at src/utils/systemInfo.uts:1196", `窗口windowHeight:${sys.windowHeight}`, 730);
          uni.__f__("log", "at src/utils/systemInfo.uts:1197", `状态栏statusBarHeight:${sys.statusBarHeight}`, 42);
          uni.__f__("log", "at src/utils/systemInfo.uts:1198", `导航栏navBarHeight:${sys.navBarHeight}`, 44);
          uni.__f__("log", "at src/utils/systemInfo.uts:1199", `tabBarHeight:${sys.tabBarHeight}`, 50);
          uni.__f__("log", "at src/utils/systemInfo.uts:1200", `safeBottom:${safeBottom}`, 28);
          uni.__f__("log", "at src/utils/systemInfo.uts:1201", `safeAreaBottom:${safeAreaBottom2}`, 788);
          uni.__f__("log", "at src/utils/systemInfo.uts:1202", `safeTop:${safeTop}`, 42);
          uni.__f__("log", "at src/utils/systemInfo.uts:1203", "----", sys.screenHeight - sys.statusBarHeight - sys.navBarHeight - sys.tabBarHeight - safeBottom);
          sys.availableHeight = safeAreaBottom2 - navBarOffset - statusBarOffset + safeBottom;
          uni.__f__("log", "at src/utils/systemInfo.uts:1205", sys.availableHeight, "sys.availableHeight");
          systemId++;
        }
      } else {
        {
          uni.__f__("log", "at src/utils/systemInfo.uts:1342", `第${systemId}次`);
          uni.__f__("log", "at src/utils/systemInfo.uts:1343", "蒸汽-鸿蒙😂");
          uni.__f__("log", "at src/utils/systemInfo.uts:1344", `窗口screenHeight:${sys.screenHeight}`, 816);
          uni.__f__("log", "at src/utils/systemInfo.uts:1345", `窗口windowHeight:${sys.windowHeight}`, 730);
          uni.__f__("log", "at src/utils/systemInfo.uts:1346", `状态栏statusBarHeight:${sys.statusBarHeight}`, 42);
          uni.__f__("log", "at src/utils/systemInfo.uts:1347", `导航栏navBarHeight:${sys.navBarHeight}`, 44);
          uni.__f__("log", "at src/utils/systemInfo.uts:1348", `tabBarHeight:${sys.tabBarHeight}`, 50);
          uni.__f__("log", "at src/utils/systemInfo.uts:1349", `safeBottom:${safeBottom}`, 28);
          uni.__f__("log", "at src/utils/systemInfo.uts:1350", `safeAreaBottom:${safeAreaBottom2}`, 788);
          uni.__f__("log", "at src/utils/systemInfo.uts:1351", `safeTop:${safeTop}`, 42);
          uni.__f__("log", "at src/utils/systemInfo.uts:1352", "----", sys.screenHeight - sys.statusBarHeight - sys.navBarHeight - sys.tabBarHeight - safeBottom);
          sys.availableHeight = safeAreaBottom2 - navBarOffset - statusBarOffset + safeBottom;
          uni.__f__("log", "at src/utils/systemInfo.uts:1354", sys.availableHeight, "sys.availableHeight");
          systemId++;
        }
      }
    } else {
      if (isCustomNav) {
        {
          uni.__f__("log", "at src/utils/systemInfo.uts:1489", `第${systemId}次`);
          uni.__f__("log", "at src/utils/systemInfo.uts:1490", "蒸汽-鸿蒙😂");
          uni.__f__("log", "at src/utils/systemInfo.uts:1491", `窗口screenHeight:${sys.screenHeight}`, 816);
          uni.__f__("log", "at src/utils/systemInfo.uts:1492", `窗口windowHeight:${sys.windowHeight}`, 730);
          uni.__f__("log", "at src/utils/systemInfo.uts:1493", `状态栏statusBarHeight:${sys.statusBarHeight}`, 42);
          uni.__f__("log", "at src/utils/systemInfo.uts:1494", `导航栏navBarHeight:${sys.navBarHeight}`, 44);
          uni.__f__("log", "at src/utils/systemInfo.uts:1495", `tabBarHeight:${sys.tabBarHeight}`, 50);
          uni.__f__("log", "at src/utils/systemInfo.uts:1496", `safeBottom:${safeBottom}`, 28);
          uni.__f__("log", "at src/utils/systemInfo.uts:1497", `safeAreaBottom:${safeAreaBottom2}`, 788);
          uni.__f__("log", "at src/utils/systemInfo.uts:1498", `safeTop:${safeTop}`, 42);
          uni.__f__("log", "at src/utils/systemInfo.uts:1499", "----", sys.screenHeight - sys.statusBarHeight - sys.navBarHeight - sys.tabBarHeight - safeBottom);
          sys.availableHeight = safeAreaBottom2 - navBarOffset - statusBarOffset + safeBottom;
          uni.__f__("log", "at src/utils/systemInfo.uts:1501", sys.availableHeight, "sys.availableHeight");
          systemId++;
        }
      } else {
        {
          uni.__f__("log", "at src/utils/systemInfo.uts:1635", `第${systemId}次`);
          uni.__f__("log", "at src/utils/systemInfo.uts:1636", "蒸汽-鸿蒙😂");
          uni.__f__("log", "at src/utils/systemInfo.uts:1637", `窗口screenHeight:${sys.screenHeight}`, 816);
          uni.__f__("log", "at src/utils/systemInfo.uts:1638", `窗口windowHeight:${sys.windowHeight}`, 730);
          uni.__f__("log", "at src/utils/systemInfo.uts:1639", `状态栏statusBarHeight:${sys.statusBarHeight}`, 42);
          uni.__f__("log", "at src/utils/systemInfo.uts:1640", `导航栏navBarHeight:${sys.navBarHeight}`, 44);
          uni.__f__("log", "at src/utils/systemInfo.uts:1641", `tabBarHeight:${sys.tabBarHeight}`, 50);
          uni.__f__("log", "at src/utils/systemInfo.uts:1642", `safeBottom:${safeBottom}`, 28);
          uni.__f__("log", "at src/utils/systemInfo.uts:1643", `safeAreaBottom:${safeAreaBottom2}`, 788);
          uni.__f__("log", "at src/utils/systemInfo.uts:1644", `safeTop:${safeTop}`, 42);
          uni.__f__("log", "at src/utils/systemInfo.uts:1645", "----", sys.screenHeight - sys.statusBarHeight - sys.navBarHeight - sys.tabBarHeight - safeBottom);
          sys.availableHeight = safeAreaBottom2 - navBarOffset - statusBarOffset + safeBottom;
          uni.__f__("log", "at src/utils/systemInfo.uts:1647", sys.availableHeight, "sys.availableHeight");
          systemId++;
        }
      }
    }
  }
  uni.__f__("log", "at src/utils/systemInfo.uts:1688", "AppKu:", sys.availableHeight, selectedTabbarStrategy, isCustomNav, "selectedTabbarStrategy");
}
updateSystemInfo();
export {
  AppKuHeightProps as A,
  NAVBAR_CONTENT_HEIGHT as N,
  TABBAR_BASE_HEIGHT as T,
  systemInfo as a,
  availableHeight as b,
  safeAreaInsets as s,
  updateAvailableHeight as u
};
