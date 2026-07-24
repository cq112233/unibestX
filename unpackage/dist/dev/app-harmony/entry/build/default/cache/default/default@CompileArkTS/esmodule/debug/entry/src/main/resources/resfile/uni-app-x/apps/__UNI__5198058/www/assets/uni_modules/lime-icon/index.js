import { _ as __read } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/e-chart/components/e-chart/uts/WebviewEchart&";
const { ref, computed, unref } = globalThis.Vue
const Object$1 = UTSJSONObject;
const fontIconRegistry = /* @__PURE__ */ new Map();
const iconifyRegistry = /* @__PURE__ */ new Map();
const jsonCache = /* @__PURE__ */ new Map();
const iconData = /* @__PURE__ */ new Map();
const iconDataChangeCount = ref(0);
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
async function loadJsonData(jsonUrl) {
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
            const data = res.data;
            jsonCache.set(jsonUrl, data);
            resolve(data);
          } else {
            reject(new Error(`加载失败: ${res.statusCode}`));
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
        const fs = uni.getFileSystemManager();
        fs.readFile({
          filePath: jsonUrl,
          encoding: "utf-8",
          success: (res) => {
            try {
              const data = JSON.parse(res.data);
              jsonCache.set(jsonUrl, data);
              resolve(data);
            } catch (error) {
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
}
const loadingFonts = ref([]);
async function registerFontIcon(config) {
  const prefix = config.prefix, jsonUrl = config.jsonUrl;
  const icons = config.icons ?? {};
  fontIconRegistry.set(prefix, config);
  if (!isNullish(config.fontUrl)) {
    loadingFonts.value.push(config);
    uni.loadFontFace({
      family: config.fontFamily,
      source: `url("${config.fontUrl}")`,
      success: () => {
        const existingIndex = loadingFonts.value.findIndex((item) => {
          return item.fontUrl == config.fontUrl;
        });
        if (existingIndex > -1) {
          loadingFonts.value.splice(existingIndex, 1);
        }
        uni.__f__("log", "at uni_modules/lime-icon/index.ts:317", `字体加载成功: ${config.fontFamily}; 正在加载字体数量: ${loadingFonts.value.length}`);
      },
      fail: (err) => {
        uni.__f__("error", "at uni_modules/lime-icon/index.ts:319", `字体加载失败: ${config.fontFamily}`, err);
      }
    });
  }
  if (Object$1.keys(icons).length > 0) {
    iconData.set(prefix, icons);
    iconDataChangeCount.value++;
    uni.__f__("log", "at uni_modules/lime-icon/index.ts:327", `已注册字体图标库: ${prefix} (内置${Object$1.keys(icons).length}个图标)`);
    if (!isNullish(jsonUrl)) {
      loadAndMergeJson(prefix, jsonUrl);
    }
  } else if (!isNullish(jsonUrl)) {
    try {
      const jsonIcons = await loadJsonData(jsonUrl);
      iconData.set(prefix, jsonIcons);
      iconDataChangeCount.value++;
      uni.__f__("log", "at uni_modules/lime-icon/index.ts:340", `已注册字体图标库: ${prefix} (从JSON加载${Object$1.keys(jsonIcons).length}个图标)`);
    } catch (error) {
      uni.__f__("log", "at uni_modules/lime-icon/index.ts:342", "jsonUrl", jsonUrl);
      uni.__f__("error", "at uni_modules/lime-icon/index.ts:343", `注册字体图标库失败: ${prefix}`, error);
      throw error;
    }
  } else {
    uni.__f__("warn", "at uni_modules/lime-icon/index.ts:347", `注册字体图标库: ${prefix}，但未提供图标数据`);
  }
}
async function loadAndMergeJson(prefix, jsonUrl) {
  try {
    const jsonIcons = await loadJsonData(jsonUrl);
    const currentIcons = iconData.get(prefix) ?? {};
    const mergedIcons = { ...currentIcons, ...jsonIcons };
    iconData.set(prefix, mergedIcons);
    iconDataChangeCount.value++;
    uni.__f__("log", "at uni_modules/lime-icon/index.ts:374", `已合并图标库: ${prefix}，现有${Object$1.keys(mergedIcons).length}个图标`);
  } catch (error) {
    uni.__f__("warn", "at uni_modules/lime-icon/index.ts:377", `加载图标JSON失败: ${jsonUrl}，使用现有图标`);
  }
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
    const _a = __read(name.split(":"), 2), prefix_1 = _a[0], iconName = _a[1];
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
  const parsed = computed(() => {
    return parseIconName(`${unref(name)}`, options.prefix ?? "l");
  });
  const type = computed(() => {
    const _a = parsed.value, prefix = _a.prefix, isImage = _a.isImage, hasPrefix = _a.hasPrefix, isUnicode = _a.isUnicode;
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
  const fontIcon = computed(() => {
    iconDataChangeCount.value;
    if (type.value == "font") {
      const _a = parsed.value, prefix = _a.prefix, iconName = _a.iconName, hasPrefix = _a.hasPrefix, isUnicode = _a.isUnicode;
      if (isUnicode) {
        const char = parseUnicode(iconName);
        return {
          fontFamily: options.prefix ?? "",
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
        const unicode = `${icons[iconName] ?? ""}`;
        return {
          fontFamily: config.fontFamily,
          unicode,
          char: unicode != "" ? String.fromCharCode(parseInt(unicode, 16)) : "",
          className: `${config.prefix}-${iconName}`
        };
      }
    }
    return null;
  });
  const iconifyInfo = computed(() => {
    iconDataChangeCount.value;
    if (type.value == "iconify") {
      const _a = parsed.value, prefix = _a.prefix, iconName = _a.iconName, hasPrefix = _a.hasPrefix;
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
      const isLocal = !isNullish(icons) && Object$1.keys(icons).length > 0;
      let apiUrl = DEFAULT_ICONIFY_API;
      if (!isNullish(config) && !isNullish(config?.apiUrl)) {
        apiUrl = config.apiUrl;
      }
      return {
        prefix: targetPrefix,
        apiUrl,
        isLocal,
        svgContent: isLocal ? `${icons?.[targetIconName] ?? ""}` : "",
        iconName: targetIconName
      };
    }
    return null;
  });
  const iconifyUrl = computed(() => {
    const info = iconifyInfo.value;
    if (isNullish(info))
      return null;
    if (info.isLocal && info.svgContent != "") {
      return info?.svgContent ?? "";
    }
    return `${info.apiUrl}/${info.prefix}/${info.iconName}.svg`;
  });
  const imageUrl = computed(() => {
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
  jsonUrl: "/uni_modules/lime-icon/static/icons.json"
});
export {
  loadingFonts as l,
  useIcon as u
};
//# sourceMappingURL=index.js.map
