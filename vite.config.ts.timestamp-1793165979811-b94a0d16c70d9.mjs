// ../../../../../../Users/chenqi/Desktop/unibestX/vite.config.ts
import fs10 from "node:fs";
import { dirname as dirname2, resolve as resolve2 } from "node:path";
import process9 from "node:process";
import { fileURLToPath as fileURLToPath2 } from "node:url";
import { defineConfig, loadEnv as loadEnv2 } from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/vite@5.2.8_@types+node@26.6.5_sass@1.105.1_terser@5.51.2/node_modules/vite/dist/node/index.js";
import { uniEasycomPlugin } from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/@dcloudio+uni-cli-shared@3.0.0-alpha-5030320261021002_@vueuse+core@12.8.2_typescript@5.8.3__postcss@8.5.30_rollup@4.64.7/node_modules/@dcloudio/uni-cli-shared/dist/vite/plugins/easycom.js";
import { UNI_EASYCOM_EXCLUDE } from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/@dcloudio+uni-cli-shared@3.0.0-alpha-5030320261021002_@vueuse+core@12.8.2_typescript@5.8.3__postcss@8.5.30_rollup@4.64.7/node_modules/@dcloudio/uni-cli-shared/dist/index.js";
import uniModule from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/@dcloudio+vite-plugin-uni@3.0.0-alpha-5030320261021002_@vueuse+core@12.8.2_typescript@5_96765eb1a0bcac8ee44d0b55e965b740/node_modules/@dcloudio/vite-plugin-uni/dist/index.js";
import UniManifest from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/@uni-helper+vite-plugin-uni-manifest@0.6.0_typescript@5.8.3_vite@5.2.8_@types+node@26.6.5_sass@1.105.1_terser@5.51.2_/node_modules/@uni-helper/vite-plugin-uni-manifest/dist/index.mjs";
import { uniAppX } from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/weapp-tailwindcss@5.5.12_@oxc-project+types@0.153.0_jiti@2.7.0_tailwindcss@4.3.3_vite@5_c3b9088aae0ae5b85fcda468aa0985b0/node_modules/weapp-tailwindcss/dist/presets.js";
import { WeappTailwindcss } from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/weapp-tailwindcss@5.5.12_@oxc-project+types@0.153.0_jiti@2.7.0_tailwindcss@4.3.3_vite@5_c3b9088aae0ae5b85fcda468aa0985b0/node_modules/weapp-tailwindcss/dist/vite.js";
import { visualizer } from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/rollup-plugin-visualizer@5.14.0_rollup@4.64.7/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";

// ../../../../../../Users/chenqi/Desktop/unibestX/plugins/root-plugin.ts
import fs2 from "node:fs";
import path from "node:path";
import process3 from "node:process";

// ../../../../../../Users/chenqi/Desktop/unibestX/plugins/pages-json-util.ts
import fs from "node:fs";
import process2 from "node:process";
import { parse as cjParse } from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/comment-json@5.0.0/node_modules/comment-json/src/index.js";
import JSON5 from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/index.js";
function matchesPlatform(conditionStr, targetPlatform) {
  let normTarget = (targetPlatform || "").trim().toUpperCase();
  if (!normTarget) {
    normTarget = (process2.env.UNI_PLATFORM || "H5").trim().toUpperCase();
  }
  if (normTarget === "APP" || normTarget === "APP-PLUS") {
    normTarget = process2.env.UNI_APP_PLATFORM ? `APP-${process2.env.UNI_APP_PLATFORM.toUpperCase()}` : "APP-ANDROID";
  }
  const platforms = conditionStr.split("||").map((p) => p.trim().toUpperCase()).filter(Boolean);
  const isMatchSingle = (p) => {
    if (p === normTarget) {
      return true;
    }
    if (p === "MP" && normTarget.startsWith("MP-")) {
      return true;
    }
    if ((p === "H5" || p === "WEB") && (normTarget === "H5" || normTarget === "WEB")) {
      return true;
    }
    if ((p === "APP" || p === "APP-PLUS") && (normTarget.startsWith("APP") || normTarget === "APP-PLUS")) {
      return true;
    }
    return false;
  };
  return platforms.some(isMatchSingle);
}
function preprocessJsonComments(content, targetPlatform) {
  const platform = targetPlatform || process2.env.UNI_PLATFORM || "h5";
  const lines = content.split(/\r?\n/);
  const stack = [true];
  const outLines = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (trimmed.startsWith("//") || trimmed.startsWith("/*")) {
      const stripped = trimmed.replace(/^\/\/\s*|^\/\*\s*|\s*\*\/$/g, "");
      const isIfdef = stripped.startsWith("#ifdef ");
      const isIfndef = stripped.startsWith("#ifndef ");
      if (isIfdef || isIfndef) {
        const type = isIfdef ? "ifdef" : "ifndef";
        const cond = stripped.slice(type.length + 1).trim();
        const match = matchesPlatform(cond, platform);
        const parentActive = stack[stack.length - 1];
        const isActive = parentActive && (type === "ifdef" ? match : !match);
        stack.push(isActive);
        continue;
      }
      if (stripped === "#endif") {
        if (stack.length > 1) {
          stack.pop();
        }
        continue;
      }
    }
    if (stack[stack.length - 1]) {
      outLines.push(line);
    }
  }
  return outLines.join("\n");
}
function parsePlatformPagesJson(rawContent, targetPlatform) {
  const preprocessed = preprocessJsonComments(rawContent, targetPlatform);
  return JSON5.parse(preprocessed);
}
function loadPlatformPagesJson(pagesJsonPath, targetPlatform) {
  if (!fs.existsSync(pagesJsonPath)) {
    return { pages: [], subPackages: [] };
  }
  try {
    const rawContent = fs.readFileSync(pagesJsonPath, "utf-8");
    return parsePlatformPagesJson(rawContent, targetPlatform);
  } catch (e) {
    console.error(`[loadPlatformPagesJson] \u89E3\u6790 pages.json \u5931\u8D25:`, e);
    return { pages: [], subPackages: [] };
  }
}
function loadAllPlatformPageVariants(pagesJsonPath) {
  const result = /* @__PURE__ */ new Map();
  if (!fs.existsSync(pagesJsonPath)) {
    return result;
  }
  try {
    const rawContent = fs.readFileSync(pagesJsonPath, "utf-8");
    const parsed = cjParse(rawContent);
    if (parsed && Array.isArray(parsed.pages)) {
      for (let i = 0; i < parsed.pages.length; i++) {
        const item = parsed.pages[i];
        if (!item || typeof item.path !== "string")
          continue;
        const normPath = item.path.replace(/\\/g, "/").replace(/^\//, "");
        const before = parsed.pages[Symbol.for(`before:${i}`)];
        let condition = null;
        if (before) {
          for (const c of before) {
            if (c && typeof c.value === "string") {
              const match = c.value.match(/#ifdef\s+([^\r\n*/]+)/);
              if (match) {
                condition = match[1].trim();
              }
            }
          }
        }
        let list = result.get(normPath);
        if (!list) {
          list = [];
          result.set(normPath, list);
        }
        list.push({ condition, page: item });
      }
    }
    if (parsed && Array.isArray(parsed.subPackages)) {
      for (const spkg of parsed.subPackages) {
        if (!spkg || !Array.isArray(spkg.pages))
          continue;
        const root = (spkg.root || "").replace(/\\/g, "/").replace(/^\//, "").replace(/\/$/, "");
        for (let i = 0; i < spkg.pages.length; i++) {
          const item = spkg.pages[i];
          if (!item || typeof item.path !== "string")
            continue;
          const relPath = item.path.replace(/\\/g, "/").replace(/^\//, "");
          const fullPath = root ? `${root}/${relPath}` : relPath;
          const before = spkg.pages[Symbol.for(`before:${i}`)];
          let condition = null;
          if (before) {
            for (const c of before) {
              if (c && typeof c.value === "string") {
                const match = c.value.match(/#ifdef\s+([^\r\n*/]+)/);
                if (match) {
                  condition = match[1].trim();
                }
              }
            }
          }
          let list = result.get(fullPath);
          if (!list) {
            list = [];
            result.set(fullPath, list);
          }
          list.push({ condition, page: item });
        }
      }
    }
  } catch (e) {
    console.error(`[loadAllPlatformPageVariants] \u89E3\u6790 pages.json \u5931\u8D25:`, e);
  }
  return result;
}

// ../../../../../../Users/chenqi/Desktop/unibestX/plugins/root-plugin.ts
function getTabbarMode(projectRoot3) {
  if (process3.env.VITE_TABBAR_MODE != null && process3.env.VITE_TABBAR_MODE !== "") {
    return process3.env.VITE_TABBAR_MODE.trim();
  }
  try {
    const envPath = path.resolve(projectRoot3, ".env");
    if (fs2.existsSync(envPath)) {
      const content = fs2.readFileSync(envPath, "utf-8");
      const match = content.match(/^VITE_TABBAR_MODE\s*=\s*['"]?([^'"\r\n]+)['"]?/m);
      if (match != null && match[1] != null) {
        return match[1].trim();
      }
    }
  } catch {
  }
  return "1";
}
function kebabCase(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function toPascalCase(str) {
  return str.replace(/[.-](\w)/g, (_, c) => c.toUpperCase()).replace(/^[a-z]/, (c) => c.toUpperCase());
}
var ROOT_PROP_KEYS = [
  "layout",
  "showBack",
  "hideNavbar",
  "hideStatusBar",
  "enablePullDownRefresh",
  "customPageClass",
  "customPageStyle",
  "style",
  "isTabbar"
];
function buildPageAttrs(params) {
  let attrs = "";
  Object.keys(params).forEach((key) => {
    const val = params[key];
    if (typeof val === "string") {
      if (key === "class" || key === "customClass") {
        attrs += ` :custom-page-class="'${val.replace(/'/g, "\\'")}'"`;
      }
      if (key === "customStyle") {
        attrs += ` :custom-page-style="'${val.replace(/'/g, "\\'")}'"`;
      }
      attrs += ` :${kebabCase(key)}="'${val.replace(/'/g, "\\'")}'"`;
    } else if (typeof val === "number" || typeof val === "boolean") {
      attrs += ` :${kebabCase(key)}="${val}"`;
    } else if (typeof val === "object" && val !== null) {
      const propName = key === "style" ? "page-style" : kebabCase(key);
      attrs += ` :${propName}="${JSON.stringify(val).replace(/"/g, "'")}"`;
    }
  });
  return attrs;
}
function uniRootX(options = {}) {
  const {
    enabledGlobalRef = false,
    rootFileName = "src/AppRoot",
    excludePages
  } = options;
  const rawRootFileName = rootFileName.replace(/\.(uvue|vue)$/, "");
  const componentName = toPascalCase(path.basename(rawRootFileName));
  const excludeList = excludePages ? Array.isArray(excludePages) ? excludePages : [excludePages] : [];
  let projectRoot3 = process3.cwd();
  let pagesJsonPath = path.resolve(projectRoot3, "pages.json");
  let cachedPagesParams = null;
  let lastPagesJsonMTime = 0;
  let cachedEmbeddedTabPages = null;
  let lastTabViewsMTime = 0;
  let tabbarMode = "1";
  function loadPagesParams() {
    const paramsByPath = /* @__PURE__ */ new Map();
    if (!fs2.existsSync(pagesJsonPath)) {
      return paramsByPath;
    }
    try {
      const data = loadPlatformPagesJson(pagesJsonPath);
      const tabList = data.tabBar && Array.isArray(data.tabBar.list) ? data.tabBar.list : [];
      const tabPaths = new Set(tabList.map((item) => (item.pagePath || "").replace(/\\/g, "/").replace(/^\//, "")));
      const collect = (page) => {
        if (page == null || typeof page.path !== "string") {
          return;
        }
        const normPath = page.path.replace(/\\/g, "/").replace(/^\//, "");
        const params = {};
        Object.keys(page).forEach((key) => {
          if (key !== "path") {
            params[key] = page[key];
          }
        });
        if (tabPaths.has(normPath)) {
          params.isTabbar = true;
        }
        paramsByPath.set(normPath, params);
      };
      if (Array.isArray(data.pages)) {
        data.pages.forEach(collect);
      }
      if (Array.isArray(data.subPackages)) {
        data.subPackages.forEach((subPkg) => {
          if (subPkg == null || typeof subPkg.root !== "string" || !Array.isArray(subPkg.pages)) {
            return;
          }
          subPkg.pages.forEach((page) => {
            if (page == null || typeof page.path !== "string") {
              return;
            }
            collect({
              ...page,
              path: path.join(subPkg.root, page.path).replace(/\\/g, "/")
            });
          });
        });
      }
    } catch (e) {
      console.error("[uniRootX] Failed to parse pages.json:", e);
    }
    return paramsByPath;
  }
  function getPagesParams() {
    if (!fs2.existsSync(pagesJsonPath)) {
      return /* @__PURE__ */ new Map();
    }
    const stat = fs2.statSync(pagesJsonPath);
    if (!cachedPagesParams || stat.mtimeMs !== lastPagesJsonMTime) {
      cachedPagesParams = loadPagesParams();
      lastPagesJsonMTime = stat.mtimeMs;
    }
    return cachedPagesParams;
  }
  function getEmbeddedTabPages() {
    const tabViewsPath = path.resolve(projectRoot3, "src/tabbar/components/TabViews.uvue");
    if (!fs2.existsSync(tabViewsPath)) {
      return /* @__PURE__ */ new Set();
    }
    try {
      const stat = fs2.statSync(tabViewsPath);
      if (cachedEmbeddedTabPages != null && stat.mtimeMs == lastTabViewsMTime) {
        return cachedEmbeddedTabPages;
      }
      const content = fs2.readFileSync(tabViewsPath, "utf-8");
      const pages = /* @__PURE__ */ new Set();
      const importRegex = /import\s+\w+\s+from\s+['"]@\/(src\/[^'"]+\.(?:uvue|vue))['"]/g;
      let match = importRegex.exec(content);
      while (match != null) {
        pages.add(match[1].replace(/\.(uvue|vue)$/, ""));
        match = importRegex.exec(content);
      }
      cachedEmbeddedTabPages = pages;
      lastTabViewsMTime = stat.mtimeMs;
      return pages;
    } catch {
      return /* @__PURE__ */ new Set();
    }
  }
  return {
    name: "uniRootX",
    configResolved(config) {
      projectRoot3 = config.root || process3.cwd();
      pagesJsonPath = path.resolve(projectRoot3, "pages.json");
      tabbarMode = getTabbarMode(projectRoot3);
    },
    transform(code, id) {
      const normalizedId = id.replace(/\\/g, "/");
      if (normalizedId.includes("?")) {
        return null;
      }
      if (!normalizedId.endsWith(".uvue") && !normalizedId.endsWith(".vue")) {
        return null;
      }
      const isPage = normalizedId.includes("src/pages/") || normalizedId.includes("src/sub/");
      if (!isPage || normalizedId.includes("/components/") || normalizedId.includes("/views/") || normalizedId.includes(`${rawRootFileName}.uvue`) || normalizedId.includes(`${rawRootFileName}.vue`) || normalizedId.includes("App.ku.uvue") || normalizedId.includes("AppRoot.uvue") || normalizedId.includes("/src/layouts/")) {
        return null;
      }
      let targetFileExt = ".uvue";
      const baseName = path.basename(rawRootFileName);
      const srcUvuePath = path.join(projectRoot3, "src", `${baseName}.uvue`);
      const srcVuePath = path.join(projectRoot3, "src", `${baseName}.vue`);
      const rootUvuePath = path.join(projectRoot3, `${rawRootFileName}.uvue`);
      const rootVuePath = path.join(projectRoot3, `${rawRootFileName}.vue`);
      let importRelPath = `src/${baseName}`;
      if (fs2.existsSync(srcUvuePath)) {
        targetFileExt = ".uvue";
        importRelPath = `src/${baseName}`;
      } else if (fs2.existsSync(srcVuePath)) {
        targetFileExt = ".vue";
        importRelPath = `src/${baseName}`;
      } else if (fs2.existsSync(rootUvuePath)) {
        targetFileExt = ".uvue";
        importRelPath = rawRootFileName;
      } else if (fs2.existsSync(rootVuePath)) {
        targetFileExt = ".vue";
        importRelPath = rawRootFileName;
      } else {
        targetFileExt = ".uvue";
        importRelPath = `src/${baseName}`;
        console.warn(`[uniRootX] \u672A\u627E\u5230\u6839\u5305\u88F9\u7EC4\u4EF6 ${srcUvuePath}\uFF0C\u8BF7\u786E\u4FDD\u8BE5\u7EC4\u4EF6\u5B58\u5728`);
      }
      const relativeId = path.relative(projectRoot3, normalizedId).replace(/\\/g, "/");
      const cleanRelativeId = relativeId.replace(/\.(uvue|vue)(\?.*)?$/, "");
      if (tabbarMode == "4" && getEmbeddedTabPages().has(cleanRelativeId)) {
        return null;
      }
      if (excludeList.length > 0) {
        const isExcluded = excludeList.some((pattern) => {
          if (pattern.includes("*")) {
            const regex = new RegExp(`^${pattern.replace(/\*/g, ".*")}$`);
            return regex.test(cleanRelativeId) || regex.test(relativeId);
          }
          return cleanRelativeId.includes(pattern) || relativeId.includes(pattern);
        });
        if (isExcluded) {
          return null;
        }
      }
      const pageParams = getPagesParams().get(cleanRelativeId);
      const filteredParams = {};
      if (pageParams) {
        Object.keys(pageParams).forEach((key) => {
          if (!ROOT_PROP_KEYS.includes(key)) {
            console.warn(`[uniRootX] \u9875\u9762 ${cleanRelativeId} \u7684\u53C2\u6570 "${key}" \u672A\u5728 ${rawRootFileName} \u4E2D\u58F0\u660E props\uFF0C\u5DF2\u8DF3\u8FC7\u6CE8\u5165\uFF08\u9700\u540C\u6B65\u6269\u5C55 ROOT_PROP_KEYS \u4E0E defineProps\uFF09`);
            return;
          }
          filteredParams[key] = pageParams[key];
        });
      }
      const rootAttrs = buildPageAttrs(filteredParams);
      if (typeof this.addWatchFile === "function") {
        this.addWatchFile(pagesJsonPath);
      }
      let newCode = code;
      const startTemplateIdx = code.indexOf("<template");
      const endTemplateIdx = code.lastIndexOf("</template>");
      if (startTemplateIdx !== -1 && endTemplateIdx !== -1 && startTemplateIdx < endTemplateIdx) {
        const startTagEndIdx = code.indexOf(">", startTemplateIdx);
        if (startTagEndIdx !== -1 && startTagEndIdx < endTemplateIdx) {
          const templateAttrs = code.slice(startTemplateIdx + 9, startTagEndIdx);
          const content = code.slice(startTagEndIdx + 1, endTemplateIdx);
          const before = code.slice(0, startTemplateIdx);
          const after = code.slice(endTemplateIdx + 11);
          let rootRefStr = "";
          const rootMatch = templateAttrs.match(/\broot=(["'])(.*?)\1/);
          if (rootMatch && rootMatch[2]) {
            rootRefStr = ` ref="${rootMatch[2]}"`;
          } else if (enabledGlobalRef) {
            rootRefStr = ' ref="uniKuRoot"';
          }
          const cleanTemplateAttrs = templateAttrs.replace(/\s*\broot=(["']).*?\1/, "");
          newCode = `${before}<template${cleanTemplateAttrs}>
  <${componentName}${rootRefStr}${rootAttrs}>
${content}
  </${componentName}>
</template>${after}`;
        }
      } else {
        return null;
      }
      const importStatement = `import ${componentName} from '@/${importRelPath}${targetFileExt}'`;
      const scriptSetupRegex = /<script\s[^>]*\bsetup\b[^>]*>/;
      if (scriptSetupRegex.test(newCode)) {
        newCode = newCode.replace(scriptSetupRegex, (match) => {
          return `${match}
${importStatement}`;
        });
      } else {
        newCode = `${newCode}
<script setup lang="uts">
${importStatement}
</script>
`;
      }
      return {
        code: newCode,
        map: null
      };
    },
    generateBundle(_, bundle) {
      if (rawRootFileName.includes(".")) {
        const miniProgramExts = [".wxml", ".axml", ".ttml", ".swan", ".qml"];
        for (const ext of miniProgramExts) {
          const srcFile = `App${ext}`;
          const destFile = `${rawRootFileName}${ext}`;
          if (bundle[srcFile] && !bundle[destFile]) {
            this.emitFile({
              type: "asset",
              fileName: destFile,
              source: bundle[srcFile].source
            });
          }
        }
      }
    },
    writeBundle(options2) {
      if (rawRootFileName.includes(".")) {
        const outDir = options2.dir;
        if (!outDir) {
          return;
        }
        const miniProgramExts = [".wxml", ".axml", ".ttml", ".swan", ".qml"];
        for (const ext of miniProgramExts) {
          const srcFile = path.join(outDir, `App${ext}`);
          const destFile = path.join(outDir, `${rawRootFileName}${ext}`);
          if (fs2.existsSync(srcFile)) {
            try {
              fs2.copyFileSync(srcFile, destFile);
            } catch {
            }
          }
        }
      }
    }
  };
}
var root_plugin_default = uniRootX;

// ../../../../../../Users/chenqi/Desktop/unibestX/plugins/vite-plugin-clean-logger.ts
import { createLogger } from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/vite@5.2.8_@types+node@26.6.5_sass@1.105.1_terser@5.51.2/node_modules/vite/dist/node/index.js";
var DEFAULT_IGNORED_PATTERNS = [
  "--allowArbitraryExtensions",
  "allowArbitraryExtensions",
  "rice-ui",
  "useChildren.uts",
  "No overload matches this call",
  "neither type sufficiently overlaps",
  "Conversion of type",
  "utf8"
];
var isConsolePatched = false;
var globalSilenceAll = true;
var globalIgnoredPatterns = DEFAULT_IGNORED_PATTERNS;
function checkShouldIgnore(text) {
  if (globalSilenceAll) {
    return true;
  }
  return globalIgnoredPatterns.some((pattern) => {
    if (typeof pattern === "string") {
      return text.includes(pattern);
    }
    return pattern.test(text);
  });
}
function cleanLoggerPlugin(options = {}) {
  const {
    silenceAll = true,
    ignoredPatterns = []
  } = options;
  globalSilenceAll = silenceAll;
  globalIgnoredPatterns = [...DEFAULT_IGNORED_PATTERNS, ...ignoredPatterns];
  function shouldIgnore(text) {
    return checkShouldIgnore(text);
  }
  if (!isConsolePatched) {
    isConsolePatched = true;
    let suppressCodeFrameCount = 0;
    const originalConsoleWarn = console.warn;
    console.warn = (...args) => {
      const str = args.map((a) => typeof a === "string" ? a : a?.message ?? a?.toString?.() ?? "").join(" ");
      if (shouldIgnore(str)) {
        suppressCodeFrameCount = 3;
        return;
      }
      if (suppressCodeFrameCount > 0 && (str.startsWith("at ") || str.includes(" at "))) {
        return;
      }
      suppressCodeFrameCount = 0;
      originalConsoleWarn.apply(console, args);
    };
    const originalConsoleLog = console.log;
    console.log = (...args) => {
      const str = args.map((a) => typeof a === "string" ? a : a?.message ?? a?.toString?.() ?? "").join(" ");
      if (str.includes("\u2060") || str.includes("error:") || str.includes("Error:") || str.includes("failed") || str.includes("\u5931\u8D25")) {
        suppressCodeFrameCount = 0;
        originalConsoleLog.apply(console, args);
        return;
      }
      if (str.includes("\uFEFF")) {
        suppressCodeFrameCount = 3;
        return;
      }
      if (suppressCodeFrameCount > 0 && (str.startsWith("at ") || str.includes(" at "))) {
        return;
      }
      const isCodeFrame = /(?:^|\n)\s*(?:>\s*)?\d+\s*\|/.test(str) || /(?:^|\n)\s*\|\s*\^+/.test(str);
      if (isCodeFrame && (suppressCodeFrameCount > 0 || globalSilenceAll)) {
        suppressCodeFrameCount = Math.max(0, suppressCodeFrameCount - 1);
        return;
      }
      if (suppressCodeFrameCount > 0 && str.trim() === "") {
        return;
      }
      suppressCodeFrameCount = 0;
      originalConsoleLog.apply(console, args);
    };
  }
  return {
    name: "vite-plugin-clean-logger",
    enforce: "pre",
    config(config) {
      const customLogger = createLogger(config.logLevel, {
        allowClearScreen: config.clearScreen
      });
      const originalWarn = customLogger.warn;
      const originalWarnOnce = customLogger.warnOnce;
      customLogger.warn = (msg, opts) => {
        if (shouldIgnore(msg)) {
          return;
        }
        originalWarn(msg, opts);
      };
      customLogger.warnOnce = (msg, opts) => {
        if (shouldIgnore(msg)) {
          return;
        }
        originalWarnOnce(msg, opts);
      };
      config.customLogger = customLogger;
      if (!config.build) {
        config.build = {};
      }
      if (!config.build.rollupOptions) {
        config.build.rollupOptions = {};
      }
      const prevOnwarn = config.build.rollupOptions.onwarn;
      config.build.rollupOptions.onwarn = (warning, defaultHandler) => {
        const msg = warning.message || "";
        if (shouldIgnore(msg)) {
          return;
        }
        if (prevOnwarn) {
          prevOnwarn(warning, defaultHandler);
        } else {
          defaultHandler(warning);
        }
      };
    },
    configResolved(config) {
      if (config.customLogger) {
        const originalWarn = config.customLogger.warn;
        config.customLogger.warn = (msg, opts) => {
          if (shouldIgnore(msg)) {
            return;
          }
          originalWarn(msg, opts);
        };
        const originalWarnOnce = config.customLogger.warnOnce;
        config.customLogger.warnOnce = (msg, opts) => {
          if (shouldIgnore(msg)) {
            return;
          }
          originalWarnOnce(msg, opts);
        };
      }
      if (config.build?.rollupOptions) {
        const prevOnwarn = config.build.rollupOptions.onwarn;
        config.build.rollupOptions.onwarn = (warning, defaultHandler) => {
          const msg = warning.message || "";
          if (shouldIgnore(msg)) {
            return;
          }
          if (prevOnwarn) {
            prevOnwarn(warning, defaultHandler);
          } else {
            defaultHandler(warning);
          }
        };
      }
    }
  };
}

// ../../../../../../Users/chenqi/Desktop/unibestX/plugins/vite-plugin-editor-version.ts
import { execFileSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
var __vite_injected_original_import_meta_url = "file:///Users/chenqi/Desktop/unibestX/plugins/vite-plugin-editor-version.ts";
var projectRoot = resolve(dirname(fileURLToPath(__vite_injected_original_import_meta_url)), "..");
var syncScript = resolve(projectRoot, "scripts/sync-hbuilderx.mjs");
function editorVersionPlugin() {
  return {
    name: "unibestx:editor-version",
    enforce: "pre",
    // config 是最早的钩子，尽量在编译真正开始前就把提示打出来
    config() {
      try {
        execFileSync(process.execPath, [syncScript, "--preflight"], {
          cwd: projectRoot,
          stdio: ["ignore", "inherit", "inherit"],
          // 探测要起 ps / mdfind 等子进程，给宽裕些
          timeout: 3e4
        });
      } catch {
      }
    }
  };
}

// ../../../../../../Users/chenqi/Desktop/unibestX/plugins/vite-plugin-h5-optimize-deps.ts
var CORE_INCLUDES = [
  "pinia",
  "pinia-plugin-persistedstate",
  "crypto-js",
  "tslib"
];
function h5OptimizeDepsPlugin(options = {}) {
  const {
    enabled = true,
    extraIncludes = [],
    debug = false
  } = options;
  const isH5 = process.env.UNI_PLATFORM === "web" || process.env.UNI_PLATFORM === "h5" || !process.env.UNI_PLATFORM;
  const isBuild2 = process.env.NODE_ENV === "production" || process.argv.includes("build");
  if (!enabled || !isH5 || isBuild2) {
    return { name: "vite-plugin-h5-optimize-deps" };
  }
  return {
    name: "vite-plugin-h5-optimize-deps",
    // enforce: 'post' 确保在 uni:uvue 插件的 config 钩子之后执行
    enforce: "post",
    configResolved(resolvedConfig) {
      const optimizeDeps = resolvedConfig.optimizeDeps;
      if (debug) {
        console.log("[h5-optimize-deps] \u8986\u76D6\u524D:", JSON.stringify({
          noDiscovery: optimizeDeps.noDiscovery,
          include: optimizeDeps.include,
          exclude: optimizeDeps.exclude
        }, null, 2));
      }
      const allIncludes = [...CORE_INCLUDES, ...extraIncludes];
      const existingIncludes = optimizeDeps.include || [];
      const mergedIncludes = [.../* @__PURE__ */ new Set([...existingIncludes, ...allIncludes])];
      optimizeDeps.include = mergedIncludes;
      if (optimizeDeps.exclude && optimizeDeps.exclude.length > 0) {
        const includeSet = new Set(mergedIncludes);
        optimizeDeps.exclude = optimizeDeps.exclude.filter(
          (dep) => !includeSet.has(dep)
        );
      }
      if (debug) {
        console.log("[h5-optimize-deps] \u8986\u76D6\u540E:", JSON.stringify({
          noDiscovery: optimizeDeps.noDiscovery,
          include: optimizeDeps.include,
          exclude: optimizeDeps.exclude
        }, null, 2));
      } else {
        console.log(
          `[h5-optimize-deps] \u2714 \u5DF2\u542F\u7528\u4F9D\u8D56\u9884\u6784\u5EFA\u4F18\u5316 (noDiscovery=${optimizeDeps.noDiscovery})\uFF0Cinclude ${mergedIncludes.length} \u4E2A\u4F9D\u8D56\uFF0Cexclude ${optimizeDeps.exclude?.length ?? 0} \u4E2A\u4F9D\u8D56`
        );
      }
    }
  };
}

// ../../../../../../Users/chenqi/Desktop/unibestX/plugins/uni-layouts-plugin.ts
import fs3 from "node:fs";
import path2 from "node:path";
import process4 from "node:process";
import JSON52 from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/index.js";
function getTabbarMode2(projectRoot3) {
  if (process4.env.VITE_TABBAR_MODE != null && process4.env.VITE_TABBAR_MODE !== "") {
    return process4.env.VITE_TABBAR_MODE.trim();
  }
  try {
    const envPath = path2.resolve(projectRoot3, ".env");
    if (fs3.existsSync(envPath)) {
      const content = fs3.readFileSync(envPath, "utf-8");
      const match = content.match(/^VITE_TABBAR_MODE\s*=\s*['"]?([^'"\r\n]+)['"]?/m);
      if (match != null && match[1] != null) {
        return match[1].trim();
      }
    }
  } catch {
  }
  return "1";
}
function kebabCase2(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function parseDefinePage(content) {
  const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
  const source = scriptMatch != null && scriptMatch[1] != null ? scriptMatch[1] : content;
  const startRegex = /definePage\s*\(\s*\{/;
  const match = source.match(startRegex);
  if (match == null || match.index == null) {
    return null;
  }
  const openParen = source.indexOf("(", match.index);
  if (openParen === -1) {
    return null;
  }
  let depth = 0;
  let inString = false;
  let stringChar = "";
  let i = openParen + 1;
  for (; i < source.length; i++) {
    const ch = source[i];
    const prev = i > 0 ? source[i - 1] : "";
    if (inString) {
      if (ch === stringChar && prev !== "\\") {
        inString = false;
      }
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      inString = true;
      stringChar = ch;
      continue;
    }
    if (ch === "/" && i + 1 < source.length) {
      if (source[i + 1] === "/") {
        const newline = source.indexOf("\n", i);
        if (newline === -1) {
          break;
        }
        i = newline;
        continue;
      }
      if (source[i + 1] === "*") {
        const end = source.indexOf("*/", i + 2);
        if (end === -1) {
          break;
        }
        i = end + 1;
        continue;
      }
    }
    if (ch === "{" || ch === "(") {
      depth++;
    }
    if (ch === "}" || ch === ")") {
      depth--;
      if (depth < 0) {
        const arg = source.slice(openParen + 1, i).trim();
        if (arg.startsWith("{")) {
          try {
            return JSON52.parse(arg);
          } catch {
            return null;
          }
        }
        return null;
      }
    }
  }
  return null;
}
function uniLayoutsPlugin(options = {}) {
  let projectRoot3 = options.cwd || process4.cwd();
  const layoutDirName = options.layoutDir || "src/layouts";
  const defaultLayoutName = options.layout || "default";
  let layoutDir = path2.resolve(projectRoot3, layoutDirName);
  let pagesJsonPath = path2.resolve(projectRoot3, "pages.json");
  let cachedPagesData = null;
  let lastPagesJsonMTime = 0;
  let cachedEmbeddedTabPages = null;
  let lastTabViewsMTime = 0;
  let tabbarMode = "1";
  function loadPagesJson() {
    const pageLayouts = /* @__PURE__ */ new Map();
    const pagePaths = /* @__PURE__ */ new Set();
    if (!fs3.existsSync(pagesJsonPath)) {
      return { pageLayouts, pagePaths };
    }
    try {
      const data = loadPlatformPagesJson(pagesJsonPath);
      const rawData = data;
      const tabList = rawData.tabBar && Array.isArray(rawData.tabBar.list) ? rawData.tabBar.list : [];
      const tabPaths = new Set(tabList.map((item) => (item.pagePath || "").replace(/\\/g, "/").replace(/^\//, "")));
      if (Array.isArray(data.pages)) {
        data.pages.forEach((page) => {
          if (!page.path)
            return;
          const normPath = page.path.replace(/\\/g, "/").replace(/^\//, "");
          pagePaths.add(normPath);
          let layout;
          if (page.layout !== void 0) {
            layout = page.layout;
          } else if (page.style && page.style.layout !== void 0) {
            layout = page.style.layout;
          }
          const params = {};
          Object.keys(page).forEach((key) => {
            if (key !== "path" && key !== "layout") {
              params[key] = page[key];
            }
          });
          if (tabPaths.has(normPath)) {
            params.isTabbar = true;
          }
          pageLayouts.set(normPath, { layout, params });
        });
      }
      if (Array.isArray(data.subPackages)) {
        data.subPackages.forEach((subPkg) => {
          if (!subPkg.root || !Array.isArray(subPkg.pages))
            return;
          subPkg.pages.forEach((page) => {
            if (!page.path)
              return;
            const combined = path2.join(subPkg.root, page.path).replace(/\\/g, "/").replace(/^\//, "");
            pagePaths.add(combined);
            let layout;
            if (page.layout !== void 0) {
              layout = page.layout;
            } else if (page.style && page.style.layout !== void 0) {
              layout = page.style.layout;
            }
            const params = {};
            Object.keys(page).forEach((key) => {
              if (key !== "path" && key !== "layout") {
                params[key] = page[key];
              }
            });
            pageLayouts.set(combined, { layout, params });
          });
        });
      }
    } catch (e) {
      console.error("[Layout Plugin] Failed to parse pages.json:", e);
    }
    return { pageLayouts, pagePaths };
  }
  function getPagesData() {
    if (!fs3.existsSync(pagesJsonPath)) {
      return { pageLayouts: /* @__PURE__ */ new Map(), pagePaths: /* @__PURE__ */ new Set() };
    }
    const stat = fs3.statSync(pagesJsonPath);
    if (!cachedPagesData || stat.mtimeMs !== lastPagesJsonMTime) {
      cachedPagesData = loadPagesJson();
      lastPagesJsonMTime = stat.mtimeMs;
    }
    return cachedPagesData;
  }
  function getEmbeddedTabPages() {
    const tabViewsPath = path2.resolve(projectRoot3, "src/tabbar/components/TabViews.uvue");
    if (!fs3.existsSync(tabViewsPath)) {
      return /* @__PURE__ */ new Set();
    }
    try {
      const stat = fs3.statSync(tabViewsPath);
      if (cachedEmbeddedTabPages != null && stat.mtimeMs == lastTabViewsMTime) {
        return cachedEmbeddedTabPages;
      }
      const content = fs3.readFileSync(tabViewsPath, "utf-8");
      const pages = /* @__PURE__ */ new Set();
      const importRegex = /import\s+\w+\s+from\s+['"]@\/(src\/[^'"]+\.(?:uvue|vue))['"]/g;
      let match = importRegex.exec(content);
      while (match != null) {
        pages.add(match[1].replace(/\.(uvue|vue)$/, ""));
        match = importRegex.exec(content);
      }
      cachedEmbeddedTabPages = pages;
      lastTabViewsMTime = stat.mtimeMs;
      return pages;
    } catch {
      return /* @__PURE__ */ new Set();
    }
  }
  function resolveLayoutFile(layoutName) {
    const extensions = [".uvue", ".vue"];
    const candidates = Array.from(/* @__PURE__ */ new Set([
      layoutName,
      layoutName.toLowerCase(),
      kebabCase2(layoutName),
      layoutName.charAt(0).toUpperCase() + layoutName.slice(1)
    ]));
    for (const name of candidates) {
      for (const ext of extensions) {
        const subDirPath = path2.join(layoutDir, name, `${name}${ext}`);
        if (fs3.existsSync(subDirPath)) {
          return {
            fileName: `${name}/${name}${ext}`,
            importPath: `@/src/layouts/${name}/${name}${ext}`
          };
        }
        const subDirIndexPath = path2.join(layoutDir, name, `index${ext}`);
        if (fs3.existsSync(subDirIndexPath)) {
          return {
            fileName: `${name}/index${ext}`,
            importPath: `@/src/layouts/${name}/index${ext}`
          };
        }
        const filePath = path2.join(layoutDir, `${name}${ext}`);
        if (fs3.existsSync(filePath)) {
          return {
            fileName: `${name}${ext}`,
            importPath: `@/src/layouts/${name}${ext}`
          };
        }
      }
    }
    return null;
  }
  return {
    name: "uni-layouts-plugin",
    configResolved(config) {
      projectRoot3 = config.root || process4.cwd();
      layoutDir = path2.resolve(projectRoot3, layoutDirName);
      pagesJsonPath = path2.resolve(projectRoot3, "pages.json");
      tabbarMode = getTabbarMode2(projectRoot3);
    },
    buildStart() {
    },
    transform(code, id) {
      const normalizedId = id.replace(/\\/g, "/");
      if (normalizedId.includes("?")) {
        return null;
      }
      if (!normalizedId.endsWith(".uvue") && !normalizedId.endsWith(".vue")) {
        return null;
      }
      if (normalizedId.includes("/src/layouts/") || normalizedId.includes("/src/components/_layouts/") || normalizedId.includes("App.uvue") || normalizedId.includes("App.ku.uvue") || normalizedId.includes("AppRoot.uvue") || normalizedId.includes("/components/") || normalizedId.includes("/views/")) {
        return null;
      }
      const relativeId = path2.relative(projectRoot3, normalizedId).replace(/\\/g, "/");
      const cleanRelativeId = relativeId.replace(/\.(uvue|vue)(\?.*)?$/, "");
      const { pageLayouts, pagePaths } = getPagesData();
      if (!pagePaths.has(cleanRelativeId)) {
        return null;
      }
      if (typeof this.addWatchFile === "function") {
        this.addWatchFile(pagesJsonPath);
      }
      const routeRegex = /<route[^>]*>([\s\S]*?)<\/route>/;
      const routeMatch = code.match(routeRegex);
      let layoutName;
      const routeParams = {};
      if (routeMatch != null) {
        try {
          const routeStr = routeMatch[1].trim();
          const cleanRouteStr = routeStr.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "$1");
          const routeObj = JSON52.parse(cleanRouteStr);
          if (routeObj.layout !== void 0) {
            layoutName = routeObj.layout;
          }
          Object.keys(routeObj).forEach((key) => {
            if (key !== "layout") {
              routeParams[key] = routeObj[key];
            }
          });
        } catch (e) {
          console.error(`[Layout Plugin] Failed to parse <route> block in ${id}:`, e);
        }
      } else {
        const definePageMeta = parseDefinePage(code);
        if (definePageMeta != null) {
          if (definePageMeta.layout !== void 0) {
            layoutName = definePageMeta.layout;
          }
          Object.keys(definePageMeta).forEach((key) => {
            if (key !== "layout") {
              routeParams[key] = definePageMeta[key];
            }
          });
        }
      }
      let cleanCode = code.replace(routeRegex, "");
      if (tabbarMode == "4" && getEmbeddedTabPages().has(cleanRelativeId)) {
        return {
          code: cleanCode,
          map: null
        };
      }
      const pageConfig = pageLayouts.get(cleanRelativeId);
      if (layoutName === void 0) {
        if (pageConfig && pageConfig.layout !== void 0) {
          layoutName = pageConfig.layout;
        }
      }
      const mergedParams = {
        ...pageConfig ? pageConfig.params : {},
        ...routeParams
      };
      if (layoutName === void 0) {
        layoutName = defaultLayoutName;
      }
      if (layoutName === false || layoutName === "false") {
        return {
          code: cleanCode,
          map: null
        };
      }
      let layoutInfo = resolveLayoutFile(layoutName);
      if (!layoutInfo && layoutName === "default") {
        layoutInfo = resolveLayoutFile("layout");
      }
      if (!layoutInfo) {
        if (layoutName !== defaultLayoutName && layoutName !== "layout") {
          console.warn(`[Layout Plugin] Layout "${layoutName}" not found in "${layoutDir}". Skipping wrap for "${id}".`);
        }
        return {
          code: cleanCode,
          map: null
        };
      }
      let attrs = "";
      Object.keys(mergedParams).forEach((key) => {
        if (key === "layout")
          return;
        const val = mergedParams[key];
        if (typeof val === "string") {
          if (key === "class" || key === "customClass") {
            attrs += ` :custom-page-class="'${val.replace(/'/g, "\\'")}'"`;
          }
          if (key === "customStyle") {
            attrs += ` :custom-page-style="'${val.replace(/'/g, "\\'")}'"`;
          }
          attrs += ` :${kebabCase2(key)}="'${val.replace(/'/g, "\\'")}'"`;
        } else if (typeof val === "number" || typeof val === "boolean") {
          attrs += ` :${kebabCase2(key)}="${val}"`;
        } else if (typeof val === "object" && val !== null) {
          const propName = key === "style" ? "page-style" : kebabCase2(key);
          attrs += ` :${propName}="${JSON.stringify(val).replace(/"/g, "'")}"`;
        }
      });
      let hasTemplate = false;
      const startTemplateIdx = cleanCode.indexOf("<template");
      const endTemplateIdx = cleanCode.lastIndexOf("</template>");
      if (startTemplateIdx !== -1 && endTemplateIdx !== -1 && startTemplateIdx < endTemplateIdx) {
        const startTagEndIdx = cleanCode.indexOf(">", startTemplateIdx);
        if (startTagEndIdx !== -1 && startTagEndIdx < endTemplateIdx) {
          hasTemplate = true;
          const templateAttrs = cleanCode.slice(startTemplateIdx + 9, startTagEndIdx);
          const content = cleanCode.slice(startTagEndIdx + 1, endTemplateIdx);
          const before = cleanCode.slice(0, startTemplateIdx);
          const after = cleanCode.slice(endTemplateIdx + 11);
          cleanCode = `${before}<template${templateAttrs}>
  <LayoutComponent${attrs}>
${content}
  </LayoutComponent>
</template>${after}`;
        }
      }
      if (!hasTemplate) {
        return {
          code: cleanCode,
          map: null
        };
      }
      const scriptSetupRegex = /<script\s[^>]*\bsetup\b[^>]*>/;
      const importStatement = `
import LayoutComponent from '${layoutInfo.importPath}'`;
      if (scriptSetupRegex.test(cleanCode)) {
        cleanCode = cleanCode.replace(scriptSetupRegex, (match) => match + importStatement);
      } else {
        cleanCode = `${cleanCode}
<script setup lang="uts">${importStatement}
</script>
`;
      }
      return {
        code: cleanCode,
        map: null
      };
    },
    configureServer(server) {
      if (fs3.existsSync(layoutDir)) {
        server.watcher.add(layoutDir);
      }
      if (fs3.existsSync(pagesJsonPath)) {
        server.watcher.add(pagesJsonPath);
      }
      server.watcher.on("change", (filePath) => {
        const normalized = filePath.replace(/\\/g, "/");
        if (normalized.includes("pages.json")) {
          cachedPagesData = null;
          server.ws.send({
            type: "full-reload",
            path: "*"
          });
        }
      });
    },
    handleHotUpdate(ctx) {
      const normalized = ctx.file.replace(/\\/g, "/");
      if (normalized.includes(`/${layoutDirName}/`)) {
        const targetMods = /* @__PURE__ */ new Set();
        for (const mod of ctx.modules) {
          targetMods.add(mod);
          ctx.server.moduleGraph.invalidateModule(mod);
          if (mod.importers) {
            for (const imp of mod.importers) {
              ctx.server.moduleGraph.invalidateModule(imp);
              targetMods.add(imp);
            }
          }
        }
        ctx.server.ws.send({
          type: "full-reload",
          path: "*"
        });
        return Array.from(targetMods);
      }
      if (normalized.includes("pages.json")) {
        cachedPagesData = null;
        return ctx.modules;
      }
    }
  };
}
var uni_layouts_plugin_default = uniLayoutsPlugin;

// ../../../../../../Users/chenqi/Desktop/unibestX/plugins/vite-plugin-tabbar-views.ts
import fs5 from "node:fs";
import path4 from "node:path";
import process5 from "node:process";

// ../../../../../../Users/chenqi/Desktop/unibestX/plugins/pages-meta-cache.ts
import fs4 from "node:fs";
import path3 from "node:path";
var CACHE_RELATIVE_PATH = "unpackage/cache/unibestx-pages-meta.json";
var pagesMetaGlobal = globalThis;
function normalizeRoot(projectRoot3) {
  return path3.resolve(projectRoot3);
}
function getCachePath(projectRoot3) {
  return path3.resolve(projectRoot3, CACHE_RELATIVE_PATH);
}
function isSnapshot(value) {
  return value != null && Array.isArray(value.pages) && Array.isArray(value.subPackages);
}
function setPagesMetaSnapshot(value, projectRoot3 = process.cwd()) {
  const root = normalizeRoot(projectRoot3);
  pagesMetaGlobal.__UNIBESTX_PAGES_META_STATE__ = { root, value };
  try {
    const cachePath = getCachePath(root);
    fs4.mkdirSync(path3.dirname(cachePath), { recursive: true });
    const tempPath = `${cachePath}.${process.pid}.tmp`;
    fs4.writeFileSync(tempPath, JSON.stringify(value), "utf-8");
    fs4.renameSync(tempPath, cachePath);
  } catch {
  }
}
function getPagesMetaSnapshot(projectRoot3 = process.cwd()) {
  const root = normalizeRoot(projectRoot3);
  const state = pagesMetaGlobal.__UNIBESTX_PAGES_META_STATE__ ?? null;
  if (state != null && state.root == root) {
    return state.value;
  }
  try {
    const cachePath = getCachePath(root);
    if (!fs4.existsSync(cachePath)) {
      return null;
    }
    const parsed = JSON.parse(fs4.readFileSync(cachePath, "utf-8"));
    if (!isSnapshot(parsed)) {
      return null;
    }
    pagesMetaGlobal.__UNIBESTX_PAGES_META_STATE__ = { root, value: parsed };
    return parsed;
  } catch {
    return null;
  }
}

// ../../../../../../Users/chenqi/Desktop/unibestX/plugins/vite-plugin-tabbar-views.ts
function getTabbarMode3(projectRoot3) {
  if (process5.env.VITE_TABBAR_MODE != null && process5.env.VITE_TABBAR_MODE !== "") {
    return process5.env.VITE_TABBAR_MODE.trim();
  }
  try {
    const envPath = path4.resolve(projectRoot3, ".env");
    if (fs5.existsSync(envPath)) {
      const content = fs5.readFileSync(envPath, "utf-8");
      const match = content.match(/^VITE_TABBAR_MODE\s*=\s*['"]?([^'"\r\n]+)['"]?/m);
      if (match != null && match[1] != null) {
        return match[1].trim();
      }
    }
  } catch {
  }
  return "1";
}
var watchedTabPages = /* @__PURE__ */ new Set();
function normalizeTabPagePath(pagePath) {
  return pagePath.replace(/\\/g, "/").replace(/^\//, "").replace(/\.(uvue|vue)$/, "");
}
function stripConfigComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "");
}
function readTabbarPageEntry(block) {
  const pagePathMatch = block.match(/pagePath\s*:\s*['"`](.*?)['"`]/);
  if (pagePathMatch == null || pagePathMatch[1].trim() == "") {
    return null;
  }
  const tabTypeMatch = block.match(/tabType\s*:\s*['"`](.*?)['"`]/);
  const textMatch = block.match(/text\s*:\s*['"`](.*?)['"`]/);
  return {
    pagePath: normalizeTabPagePath(pagePathMatch[1].trim()),
    tabType: tabTypeMatch != null ? tabTypeMatch[1].trim() : "",
    text: textMatch != null ? textMatch[1].trim() : ""
  };
}
function readTabbarPageEntries(projectRoot3, configFile) {
  const configPath = path4.resolve(projectRoot3, configFile);
  if (!fs5.existsSync(configPath)) {
    return [];
  }
  const content = stripConfigComments(fs5.readFileSync(configPath, "utf-8"));
  const listMatch = content.match(/list\s*:\s*\[([\s\S]*?)\]/);
  const list = [];
  if (listMatch != null) {
    const itemRegex = /\{([\s\S]*?)\}/g;
    let match = itemRegex.exec(listMatch[1]);
    while (match != null) {
      const entry = readTabbarPageEntry(match[1]);
      if (entry != null) {
        list.push(entry);
      }
      match = itemRegex.exec(listMatch[1]);
    }
  }
  const midButtonMatch = content.match(/midButton\s*:\s*\{([\s\S]*?)\}/);
  const midButton = midButtonMatch != null ? readTabbarPageEntry(midButtonMatch[1]) : null;
  const fullList = [];
  if (midButton != null) {
    const half = Math.floor(list.length / 2);
    for (let i = 0; i < list.length; i++) {
      if (i === half) {
        fullList.push(midButton);
      }
      fullList.push(list[i]);
    }
    if (half >= list.length) {
      fullList.push(midButton);
    }
  } else {
    fullList.push(...list);
  }
  return fullList.map((entry, index) => ({
    ...entry,
    tabType: entry.tabType != "" ? entry.tabType : `tab-${index}`
  }));
}
function toPascalCase2(value) {
  const parts = value.split(/[^a-z0-9]+/i).filter((part) => part != "");
  const result = parts.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join("");
  const safe = result != "" ? result : "Tab";
  return /^\d/.test(safe) ? `Tab${safe}` : safe;
}
function toSingleQuoted(value) {
  return `'${value.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
}
function renderTabPageScaffold(entry) {
  const pageName = path4.basename(entry.pagePath);
  const safePageName = pageName != "" ? pageName : entry.tabType;
  const pascalName = toPascalCase2(safePageName);
  const camelName = pascalName.charAt(0).toLowerCase() + pascalName.slice(1);
  const title = entry.text != "" ? entry.text : safePageName;
  const routeVar = `${camelName}Route`;
  return `<template>
  <view class="flex flex-col">
    <text>${pascalName}View</text>
  </view>
</template>

<script setup lang="uts">
import { useTabPage, useTabPageShell } from '@/src/tabbar/index.uts';
import { useRouter } from '@/uni_modules/route-bestX/index.uts';

definePage(() => {
  return {
    customPageClass: 'init-page', // \u9875\u9762\u6839\u5BB9\u5668\u81EA\u5B9A\u4E49\u7C7B\u540D\uFF08\u914D\u5408 layout \u5E03\u5C40\u4F7F\u7528\uFF0C\u652F\u6301\u914D\u7F6E\u5168\u5C40\u6837\u5F0F\u7C7B\uFF09
    customPageStyle: 'background-color: transparent;', // \u9875\u9762\u6839\u5BB9\u5668\u81EA\u5B9A\u4E49\u884C\u5185\u6837\u5F0F\uFF08\u7A7F\u900F\u4EFB\u4F55\u6837\u5F0F\u9694\u79BB\uFF0C\u5168\u7AEF\u7EDD\u5BF9\u751F\u6548\uFF09
    name: ${toSingleQuoted(safePageName)}, // \u8DEF\u7531\u540D\uFF1AuseRoute().name \u4F18\u5148\u8BFB\u53D6\u6B64\u503C\uFF0C\u672A\u663E\u5F0F\u58F0\u660E\u65F6\u9ED8\u8BA4\u8BFB\u53D6\u8DEF\u5F84\u6700\u540E\u4E00\u4E2A\u5355\u8BCD\uFF08\u5982 index\uFF09
    debug: false, // \u662F\u5426\u5F00\u542F\u5F53\u524D\u9875\u9762\u6C99\u76D2\u72EC\u7ACB\u8C03\u8BD5\uFF08\u8BBE\u4E3A true \u53EF\u5355\u72EC\u8C03\u8BD5\u6B64\u9875\uFF1B\u26A0\uFE0F \u8C03\u8BD5\u5B8C\u6210\u540E\u6539\u56DE false\uFF09
    debugHome: false, // \u6C99\u76D2\u8C03\u8BD5\u6A21\u5F0F\u4E0B\u662F\u5426\u5C06\u5F53\u524D\u9875\u9762\u6307\u5B9A\u4E3A\u542F\u52A8\u9996\u9875\uFF08\u5168\u5C40\u4EC5\u5141\u8BB8 1 \u4E2A\u9875\u9762\u8BBE\u4E3A true\uFF0C\u6392\u5728 pages[0]\uFF09
    layout: 'navbar', // \u9875\u9762\u901A\u7528\u5E03\u5C40\u6A21\u677F\uFF08\u91C7\u7528 navbar \u5E03\u5C40\u63A5\u7BA1\u9876\u90E8\u5BFC\u822A\u4E0E\u4E0B\u62C9\u6EDA\u52A8\u5BB9\u5668\uFF09
    showBack: false, // \u5BFC\u822A\u680F\u5DE6\u4FA7\u662F\u5426\u663E\u793A\u8FD4\u56DE\u7BAD\u5934\uFF08TabBar \u9996\u9875\u65E0\u9700\u8FD4\u56DE\u6309\u94AE\uFF09
    hideStatusBar: false, // \u662F\u5426\u9690\u85CF\u72B6\u6001\u680F\uFF08true \u4E3A\u9690\u85CF\uFF09
    hideNavbar: false, // \u662F\u5426\u9690\u85CF\u9876\u90E8\u5BFC\u822A\u680F\uFF08false \u4E3A\u6B63\u5E38\u663E\u793A\uFF09
    style: {
      navigationBarTitleText: ${toSingleQuoted(title)},
      navigationStyle: 'custom'
    }
  };
});

// \u9875\u9762\u6587\u4EF6\u540C\u65F6\u53EF\u4F5C\u4E3A\u6A21\u5F0F 4 \u7684 Tab \u5B50\u9875\u4F7F\u7528\uFF1A\u5D4C\u5957\u65F6\u7531 useTabPage() \u63A5\u7BA1\u9875\u9762\u751F\u547D\u5468\u671F
useTabPageShell(${toSingleQuoted(entry.tabType)});

const {
  route: ${routeVar},
  onLoad: on${pascalName}Load,
  onShow: on${pascalName}Show,
  onHide: on${pascalName}Hide
} = useTabPage();

// vue-router \u4F7F\u7528
const _router = useRouter();

// \u4E0E\u666E\u901A\u9875\u9762\u4E00\u81F4\u7684\u9996\u6B21\u8FDB\u5165 / \u663E\u793A / \u9690\u85CF\u751F\u547D\u5468\u671F
on${pascalName}Load(() => {
  // \u{1F4A1} \u6A21\u5F0F4\u7684\u6620\u5C04\u5173\u7CFB\u4E2D\uFF0C/${safePageName}.uvue \u6620\u5C04\u5230\u7684\u5B9E\u9645\u9875\u9762\u8DEF\u7531\u662F/tab/index\uFF0C\u8FD9\u662F\u56E0\u4E3Atabbar/index.uts\u4E2D\u5B9A\u4E49\u4E86\u6620\u5C04\u5173\u7CFB
  // \u{1F4A1} \u6A21\u5F0F4 useRoute \u83B7\u53D6\u7684\u8FD8\u662Findex\u7684
  // \u{1F514} \u6A21\u5F0F4\uFF0Ctabbar\u5207\u6362\u65F6\uFF0C\u4E0D\u4F1A\u8D70beforeEach\uFF0C\u56E0\u4E3A\u662Findex\uFF0C\u662F\u6839\u5BB9\u5668, \u5982\u9700\u62E6\u622A\u8BF7\u81EA\u884C\u5904\u7406src/tabbar/adapters/tab-navigation.uts\uFF0C\u4E00\u822C\u4E1A\u52A1\u7528\u4E0D\u52A8\uFF0C\u65E0\u9700\u4FEE\u6539
  console.log(${toSingleQuoted(`${safePageName}\u9875\u9762\u8DEF\u5F84`)}, ${routeVar}.value.fullPath);
  console.log(${toSingleQuoted(`on${pascalName}Load`)}, ${toSingleQuoted(`${safePageName} Tab \u6302\u8F7D\u4E86\u{1F44B}`)});
});

// \u663E\u793A\u89E6\u53D1
on${pascalName}Show(() => {
  console.log(${toSingleQuoted(`on${pascalName}Show`)}, ${toSingleQuoted(`${safePageName} Tab \u663E\u793A\u4E86\u{1F440}`)});
});

// \u9690\u85CF\u89E6\u53D1
on${pascalName}Hide(() => {
  console.log(${toSingleQuoted(`on${pascalName}Hide`)}, ${toSingleQuoted(`${safePageName} Tab \u9690\u85CF\u4E86\u{1F449}`)});
});
</script>

<style scoped></style>
`;
}
function scaffoldMissingTabPages(projectRoot3, options = {}) {
  if (options.autoCreatePage === false) {
    return [];
  }
  const configFile = options.configFile ?? "src/tabbar/config.uts";
  const entries = readTabbarPageEntries(projectRoot3, configFile);
  const created = [];
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    if (entry.pagePath == "") {
      continue;
    }
    const uvueFile = path4.resolve(projectRoot3, `${entry.pagePath}.uvue`);
    const vueFile = path4.resolve(projectRoot3, `${entry.pagePath}.vue`);
    if (fs5.existsSync(uvueFile) || fs5.existsSync(vueFile)) {
      continue;
    }
    fs5.mkdirSync(path4.dirname(uvueFile), { recursive: true });
    fs5.writeFileSync(uvueFile, renderTabPageScaffold(entry), "utf-8");
    const relativePath = `${entry.pagePath}.uvue`;
    created.push(relativePath);
    console.log(`[tabbar-views] \u5DF2\u8865\u5EFA\u7F3A\u5931 Tab \u9875\u9762: ${relativePath}`);
  }
  return created;
}
function resolveSourceTitle(pageCode) {
  const navTitleField = pageCode.match(/navigationBarTitleText\s*:/i);
  if (navTitleField != null) {
    const tail = pageCode.slice((navTitleField.index ?? 0) + navTitleField[0].length);
    const literal = tail.match(/^\s*(['"`])([\s\S]*?)\1/);
    return literal != null ? literal[2].trim() : "";
  }
  const titleField = pageCode.match(/\btitle\s*:\s*(['"`])([\s\S]*?)\1/i);
  return titleField != null ? titleField[2].trim() : "";
}
function readCachedPageEntries(projectRoot3) {
  const result = /* @__PURE__ */ new Map();
  const snapshot = getPagesMetaSnapshot(projectRoot3);
  if (snapshot == null) {
    return result;
  }
  const addPage = (page, root = "") => {
    if (typeof page.path !== "string" || page.path === "") {
      return;
    }
    const fullPath = normalizeTabPagePath(root === "" ? page.path : `${root}/${page.path}`);
    const variants = Array.isArray(page._variants) ? page._variants.filter((variant) => variant != null && typeof variant.platform === "string").map((variant) => ({
      condition: variant.platform,
      page: variant.page ?? null
    })) : [];
    result.set(fullPath, {
      variants: variants.length > 0 ? variants : [{ condition: null, page }]
    });
  };
  snapshot.pages.forEach((page) => addPage(page));
  snapshot.subPackages.forEach((pkg) => {
    pkg.pages.forEach((page) => addPage(page, pkg.root));
  });
  return result;
}
function mergeEquivalentViewVariants(variants) {
  const groups = /* @__PURE__ */ new Map();
  variants.forEach((variant) => {
    const { condition: _condition, ...fields } = variant;
    const key = JSON.stringify(fields);
    const list = groups.get(key);
    if (list == null) {
      groups.set(key, [variant]);
    } else {
      list.push(variant);
    }
  });
  const result = [];
  groups.forEach((list) => {
    const first = list[0];
    const conditions = [];
    let unconditional = false;
    list.forEach((variant) => {
      if (variant.condition == null || variant.condition == "") {
        unconditional = true;
        return;
      }
      if (!conditions.includes(variant.condition)) {
        conditions.push(variant.condition);
      }
    });
    result.push({
      ...first,
      condition: unconditional ? null : conditions.join(" || ")
    });
  });
  return result;
}
function generateTabViews(projectRoot3, options = {}) {
  const configFile = options.configFile ?? "src/tabbar/config.uts";
  const hostPage = (options.hostPage ?? "src/pages/index/index").replace(/\\/g, "/").replace(/^\//, "").replace(/\.(uvue|vue)$/, "");
  const configPath = path4.resolve(projectRoot3, configFile);
  if (!fs5.existsSync(configPath)) {
    return;
  }
  scaffoldMissingTabPages(projectRoot3, options);
  const rawContent = fs5.readFileSync(configPath, "utf-8");
  const content = rawContent.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "");
  const listMatch = content.match(/list\s*:\s*\[([\s\S]*?)\]/);
  if (!listMatch) {
    return;
  }
  const listBlock = listMatch[1];
  const itemRegex = /\{([\s\S]*?)\}/g;
  let m = itemRegex.exec(listBlock);
  const tabPages = [];
  while (m !== null) {
    const itemBlock = m[1];
    const pagePathMatch = itemBlock.match(/pagePath\s*:\s*['"`](.*?)['"`]/);
    if (pagePathMatch) {
      const pagePath = pagePathMatch[1].trim().replace(/^\//, "");
      tabPages.push(pagePath);
    }
    m = itemRegex.exec(listBlock);
  }
  const midButtonMatch = content.match(/midButton\s*:\s*\{([\s\S]*?)\}/);
  let midButtonPagePath = null;
  if (midButtonMatch) {
    const block = midButtonMatch[1];
    const pagePathMatch = block.match(/pagePath\s*:\s*['"`](.*?)['"`]/);
    if (pagePathMatch && pagePathMatch[1].trim()) {
      midButtonPagePath = pagePathMatch[1].trim().replace(/^\//, "");
    }
  }
  const fullTabPages = [];
  if (midButtonPagePath) {
    const half = Math.floor(tabPages.length / 2);
    for (let i = 0; i < tabPages.length; i++) {
      if (i === half) {
        fullTabPages.push(midButtonPagePath);
      }
      fullTabPages.push(tabPages[i]);
    }
    if (half >= tabPages.length) {
      fullTabPages.push(midButtonPagePath);
    }
  } else {
    for (let i = 0; i < tabPages.length; i++) {
      fullTabPages.push(tabPages[i]);
    }
  }
  if (fullTabPages.length === 0) {
    return;
  }
  watchedTabPages.clear();
  const pagesJsonMap = /* @__PURE__ */ new Map();
  const pagesJsonPath = path4.resolve(projectRoot3, "pages.json");
  if (fs5.existsSync(pagesJsonPath)) {
    try {
      const data = loadPlatformPagesJson(pagesJsonPath);
      if (Array.isArray(data.pages)) {
        data.pages.forEach((p) => {
          if (p && typeof p.path === "string") {
            const normPath = p.path.replace(/\\/g, "/").replace(/^\//, "");
            pagesJsonMap.set(normPath, p);
          }
        });
      }
    } catch {
    }
  }
  const allVariantsMap = loadAllPlatformPageVariants(pagesJsonPath);
  const cachedPageEntries = readCachedPageEntries(projectRoot3);
  const viewsEntries = [];
  const usedNames = /* @__PURE__ */ new Set();
  for (let idx = 0; idx < fullTabPages.length; idx++) {
    const rawPath = fullTabPages[idx];
    const pageRelPath = rawPath.replace(/^src\//, "").replace(/\.(uvue|vue)$/, "");
    const pageBaseName = path4.basename(pageRelPath);
    const pascalPageName = pageBaseName.charAt(0).toUpperCase() + pageBaseName.slice(1);
    const isHostPage = pageRelPath == hostPage.replace(/^src\//, "");
    const actualCompName = `${pascalPageName}Page`;
    const actualRelPath = `src/${pageRelPath}.uvue`;
    const normTarget = rawPath.replace(/\\/g, "/").replace(/^\//, "").replace(/\.(uvue|vue)$/, "");
    const cachedEntry = cachedPageEntries.get(normTarget);
    let sourceVariants = [];
    if (cachedEntry != null) {
      sourceVariants = cachedEntry.variants;
    } else {
      const variants = allVariantsMap.get(normTarget) || allVariantsMap.get(`src/${normTarget}`) || allVariantsMap.get(normTarget.replace(/^src\//, "")) || [];
      const pageConfig = pagesJsonMap.get(normTarget) || pagesJsonMap.get(`src/${normTarget}`) || pagesJsonMap.get(normTarget.replace(/^src\//, "")) || null;
      sourceVariants = variants.length > 0 ? variants : [{ condition: null, page: pageConfig }];
    }
    const entryVariants = mergeEquivalentViewVariants(sourceVariants.map((v) => {
      const p = v.page;
      return {
        condition: v.condition,
        hideNavbar: p?.hideNavbar === true,
        hideStatusBar: p?.hideStatusBar === true,
        showBack: p?.showBack !== false,
        enablePullDownRefresh: typeof p?.enablePullDownRefresh === "boolean" ? p.enablePullDownRefresh : true,
        title: typeof p?.style?.navigationBarTitleText === "string" ? p.style.navigationBarTitleText : typeof p?.title === "string" ? p.title : "",
        customPageClass: typeof p?.customPageClass === "string" ? p.customPageClass : typeof p?.class === "string" ? p.class : "",
        customPageStyle: typeof p?.customPageStyle === "string" ? p.customPageStyle : typeof p?.customStyle === "string" ? p.customStyle : ""
      };
    }));
    const absPageFile = path4.resolve(projectRoot3, rawPath.endsWith(".uvue") ? rawPath : `${rawPath}.uvue`);
    watchedTabPages.add(absPageFile);
    if (options.syncNavbarConfig !== false && fs5.existsSync(absPageFile) && entryVariants.length === 1 && !entryVariants[0].condition) {
      try {
        const pageCode = fs5.readFileSync(absPageFile, "utf-8");
        const v = entryVariants[0];
        const mHide = pageCode.match(/hideNavbar\s*:\s*(true|false)/i);
        if (mHide)
          v.hideNavbar = mHide[1].toLowerCase() === "true";
        const mStatus = pageCode.match(/hideStatusBar\s*:\s*(true|false)/i);
        if (mStatus)
          v.hideStatusBar = mStatus[1].toLowerCase() === "true";
        const mShowBack = pageCode.match(/showBack\s*:\s*(true|false)/i);
        if (mShowBack)
          v.showBack = mShowBack[1].toLowerCase() === "true";
        const mRefresh = pageCode.match(/enablePullDownRefresh\s*:\s*(true|false)/i);
        if (mRefresh)
          v.enablePullDownRefresh = mRefresh[1].toLowerCase() === "true";
        const sourceTitle = resolveSourceTitle(pageCode);
        if (sourceTitle !== "")
          v.title = sourceTitle;
        const mClass = pageCode.match(/customPageClass\s*:\s*['"`](.*?)['"`]/i);
        if (mClass)
          v.customPageClass = mClass[1].trim();
        const mStyle = pageCode.match(/customPageStyle\s*:\s*['"`](.*?)['"`]/i);
        if (mStyle)
          v.customPageStyle = mStyle[1].trim();
      } catch {
      }
    }
    let finalCompName = actualCompName;
    if (usedNames.has(finalCompName)) {
      finalCompName = `${pascalPageName}${actualCompName}`;
    }
    usedNames.add(finalCompName);
    viewsEntries.push({
      // 宿主页不能 import 自身（index.uvue -> TabViews -> index.uvue），改由页面传入 slot。
      importName: isHostPage ? null : finalCompName,
      importPath: `@/${actualRelPath.replace(/\\/g, "/")}`,
      variants: entryVariants
    });
  }
  const targetFile = options.targetFile ?? "src/tabbar/components/TabViews.uvue";
  const tabViewsFilePath = path4.resolve(projectRoot3, targetFile);
  const sortedImports = viewsEntries.filter((item) => item.importName != null).sort((a, b) => (a.importName ?? "").localeCompare(b.importName ?? ""));
  const importLines = sortedImports.map((item) => `import ${item.importName} from '${item.importPath}';`).join("\n");
  function renderTabContentTag(index, importName, v) {
    let attrs = ` :content-index="${index}"`;
    if (v.title) {
      attrs += ` title="${v.title.replace(/"/g, "&quot;")}"`;
    }
    if (v.enablePullDownRefresh !== void 0) {
      attrs += ` :enable-pull-down-refresh="${v.enablePullDownRefresh}"`;
    }
    if (v.hideNavbar) {
      attrs += ` :hide-navbar="true"`;
    }
    if (v.hideStatusBar) {
      attrs += ` :hide-status-bar="true"`;
    }
    attrs += ` :show-back="${v.showBack}"`;
    if (v.customPageClass) {
      attrs += ` custom-page-class="${v.customPageClass.replace(/"/g, "&quot;")}"`;
    }
    if (v.customPageStyle) {
      attrs += ` custom-page-style="${v.customPageStyle.replace(/"/g, "&quot;")}"`;
    }
    const content2 = importName == null ? '      <slot name="tabHost" />' : `      <${importName} />`;
    return `    <TabContent v-if="isTabRendered(${index})"${attrs}>
${content2}
    </TabContent>`;
  }
  const contentBlocks = viewsEntries.map((item, index) => {
    const renderedTags = item.variants.map((v) => ({
      condition: v.condition,
      tag: renderTabContentTag(index, item.importName, v)
    }));
    const uniqueTags = new Set(renderedTags.map((r) => r.tag));
    if (uniqueTags.size <= 1) {
      return renderedTags[0].tag;
    }
    return renderedTags.map(({ condition, tag }) => {
      if (condition) {
        return `    <!-- #ifdef ${condition} -->
${tag}
    <!-- #endif -->`;
      }
      return tag;
    }).join("\n");
  }).join("\n");
  const tabViewsContent = `<template>
  <view class="tab-views-container" style="position: relative; display: flex; flex-direction: column; flex: 1; height: 100%;">
${contentBlocks}
  </view>
</template>

<script setup lang="uts">
${importLines}
import TabContent from './TabContent.uvue';
import { reactive, watch } from 'vue';
import { useTabbar } from '@/src/tabbar/index.uts';

const { curIdx } = useTabbar();
const renderedTabs: Array<boolean> = reactive([${viewsEntries.map(() => "false").join(", ")}]);

if (curIdx.value >= 0 && curIdx.value < renderedTabs.length) {
  renderedTabs[curIdx.value] = true;
}

watch(curIdx, (nextIdx: number): void => {
  if (nextIdx >= 0 && nextIdx < renderedTabs.length) {
    renderedTabs[nextIdx] = true;
  }
});

/** \u9996\u6B21\u6FC0\u6D3B\u540E\u5E38\u9A7B\u4FDD\u6D3B\uFF1B\u672A\u8BBF\u95EE\u8FC7\u7684 Tab \u4E0D\u521B\u5EFA\u9875\u9762\u7EC4\u4EF6 */
function isTabRendered(index: number): boolean {
  return renderedTabs[index] == true;
}
</script>

<style lang="scss" scoped>
.tab-views-container {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
}
</style>
`;
  let existingContent = "";
  if (fs5.existsSync(tabViewsFilePath)) {
    existingContent = fs5.readFileSync(tabViewsFilePath, "utf-8");
  }
  if (existingContent !== tabViewsContent) {
    const parentDir = path4.dirname(tabViewsFilePath);
    if (!fs5.existsSync(parentDir)) {
      fs5.mkdirSync(parentDir, { recursive: true });
    }
    fs5.writeFileSync(tabViewsFilePath, tabViewsContent, "utf-8");
    console.log("[tabbar-views] \u81EA\u52A8\u540C\u6B65\u66F4\u65B0 TabViews.uvue \u8C03\u5EA6\u7EC4\u4EF6");
  }
}
function tabbarViewsPlugin(options = {}) {
  let projectRoot3 = "";
  let debounceTimer = null;
  function debouncedGenerate() {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      const mode2 = getTabbarMode3(projectRoot3);
      if (mode2 !== "0" && mode2 !== "NO_TABBAR") {
        try {
          generateTabViews(projectRoot3, options);
        } catch (e) {
          console.error("[tabbar-views] \u91CD\u65B0\u751F\u6210 TabViews \u5931\u8D25:", e);
        }
      }
    }, 100);
  }
  return {
    name: "vite-plugin-tabbar-views",
    enforce: "pre",
    configResolved(config) {
      projectRoot3 = config.root;
      if (options.enabled === false || options.autoCreatePage === false) {
        return;
      }
      const mode2 = getTabbarMode3(projectRoot3);
      if (mode2 !== "0" && mode2 !== "NO_TABBAR") {
        try {
          scaffoldMissingTabPages(projectRoot3, options);
        } catch (e) {
          console.error("[tabbar-views] \u81EA\u52A8\u8865\u5EFA Tab \u9875\u9762\u5931\u8D25:", e);
        }
      }
    },
    buildStart() {
      if (options.enabled === false) {
        return;
      }
      const mode2 = getTabbarMode3(projectRoot3);
      if (mode2 !== "0" && mode2 !== "NO_TABBAR") {
        try {
          generateTabViews(projectRoot3, options);
        } catch (e) {
          console.error("[tabbar-views] \u751F\u6210 TabViews \u811A\u624B\u67B6\u5931\u8D25:", e);
        }
      }
    },
    configureServer(server) {
      if (options.enabled === false) {
        return;
      }
      const configFile = options.configFile ?? "src/tabbar/config.uts";
      const configAbsPath = path4.resolve(projectRoot3, configFile);
      server.watcher.on("change", (file) => {
        const norm = path4.resolve(file);
        if (norm === configAbsPath) {
          try {
            scaffoldMissingTabPages(projectRoot3, options);
          } catch (e) {
            console.error("[tabbar-views] \u81EA\u52A8\u8865\u5EFA Tab \u9875\u9762\u5931\u8D25:", e);
          }
          debouncedGenerate();
          return;
        }
        if (watchedTabPages.has(norm)) {
          debouncedGenerate();
          return;
        }
        const pagesJsonPath = path4.resolve(projectRoot3, "pages.json");
        if (norm === pagesJsonPath) {
          debouncedGenerate();
        }
      });
      server.watcher.on("unlink", (file) => {
        const norm = path4.resolve(file);
        if (!watchedTabPages.has(norm)) {
          return;
        }
        try {
          scaffoldMissingTabPages(projectRoot3, options);
        } catch (e) {
          console.error("[tabbar-views] \u81EA\u52A8\u8865\u5EFA Tab \u9875\u9762\u5931\u8D25:", e);
        }
        debouncedGenerate();
      });
    }
  };
}

// ../../../../../../Users/chenqi/Desktop/unibestX/plugins/vite-plugin-uni-pages.ts
import fs6 from "node:fs";
import path5 from "node:path";
import process6 from "node:process";
import vm from "node:vm";
import { createRequire } from "node:module";
import JSON53 from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/index.js";
import {
  parse as cjParse2,
  stringify as cjStringify,
  CommentArray
} from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/comment-json@5.0.0/node_modules/comment-json/src/index.js";
import * as ts from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/typescript.js";
import { loadEnv } from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/vite@5.2.8_@types+node@26.6.5_sass@1.105.1_terser@5.51.2/node_modules/vite/dist/node/index.js";
var UNI_PAGES_STAGE_PROP = "uniPagesStage";
var KNOWN_PAGES_STAGES = [
  "uni-pages:sandbox",
  "uni-pages:tabbar",
  "uni-pages:route-table"
];
var DEFAULT_DIR = "src/pages";
var DEFAULT_OUT_FILE = "pages.json";
var DEFAULT_CONFIG_FILE = "pages.config.json";
var DEBOUNCE_MS = 80;
var HIDE_NATIVE_TABBAR_STYLE = '<style id="uni-tabbar-hide-zero-flash">uni-tabbar, uni-tabbar *, .uni-tabbar, .uni-tabbar *, .uni-tabbar-bottom, .uni-tabbar-bottom *, .uni-tabbar__icon, .uni-tabbar__label, .uni-async-loading, .uni-loading { display: none !important; visibility: hidden !important; height: 0 !important; min-height: 0 !important; max-height: 0 !important; opacity: 0 !important; pointer-events: none !important; position: absolute !important; bottom: -9999px !important; } :root { --window-bottom: 0px !important; } uni-page-wrapper { height: 100% !important; } uni-page-body { padding-bottom: 0px !important; }</style>';
var DEFAULT_EXCLUDES = ["**/components/**/*.*", "**/views/**/*.*"];
function resolveOptions(userOptions = {}) {
  return {
    enabled: userOptions.enabled ?? true,
    dir: userOptions.dir ?? DEFAULT_DIR,
    subPackages: userOptions.subPackages ?? [],
    subPackageMode: userOptions.subPackageMode ?? "subdirs",
    exclude: userOptions.exclude ?? [],
    outFile: userOptions.outFile ?? DEFAULT_OUT_FILE,
    configFile: userOptions.configFile ?? DEFAULT_CONFIG_FILE,
    homePage: userOptions.homePage ?? "",
    context: userOptions.context
  };
}
function matchGlob(filePath, pattern) {
  if (pattern === "**/components/**/*.*" || pattern.includes("components")) {
    return filePath.includes("/components/") || filePath.startsWith("components/");
  }
  if (pattern === "**/views/**/*.*" || pattern.includes("views")) {
    return filePath.includes("/views/") || filePath.startsWith("views/");
  }
  const regexStr = pattern.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*\*\/\*/g, ".*").replace(/\*\*/g, ".*").replace(/\*/g, "[^/]*").replace(/\?/g, ".");
  return new RegExp(`^${regexStr}$`).test(filePath);
}
function scanUvueFiles(dir, excludes = [], projectRoot3 = "") {
  const results = [];
  if (!fs6.existsSync(dir)) {
    return results;
  }
  const allExcludes = [...DEFAULT_EXCLUDES, ...excludes];
  const entries = fs6.readdirSync(dir, { withFileTypes: true });
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const fullPath = path5.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "components" || entry.name === "views") {
        continue;
      }
      results.push(...scanUvueFiles(fullPath, excludes, projectRoot3));
    } else if (entry.name.endsWith(".uvue")) {
      const relPath = projectRoot3 ? path5.relative(projectRoot3, fullPath).replace(/\\/g, "/") : fullPath.replace(/\\/g, "/");
      let excluded = false;
      for (let e = 0; e < allExcludes.length; e++) {
        if (matchGlob(relPath, allExcludes[e])) {
          excluded = true;
          break;
        }
      }
      if (!excluded) {
        results.push(fullPath);
      }
    }
  }
  return results;
}
function fileToPagePath(filePath, pagesDir, projectRoot3) {
  const absPages = path5.resolve(projectRoot3, pagesDir);
  const rel = path5.relative(absPages, filePath).replace(/\\/g, "/");
  const withoutExt = rel.replace(/\.uvue$/, "");
  return path5.posix.join(pagesDir, withoutExt);
}
var GENERATION_MARKER_PREFIX = "GENERATED BY UNI-PAGES, PLATFORM:";
var DefineConditional = class {
  base;
  branches = [];
  constructor(base) {
    this.base = base || {};
  }
  ifdef(platform, partial) {
    this.branches.push({
      condition: "ifdef",
      platforms: Array.isArray(platform) ? platform : [platform],
      partial
    });
    return this;
  }
  ifndef(platform, partial) {
    this.branches.push({
      condition: "ifndef",
      platforms: Array.isArray(platform) ? platform : [platform],
      partial
    });
    return this;
  }
  resolve(platform) {
    let result = { ...this.base };
    const cur = platform.toLowerCase();
    const h5Aliases = ["h5", "web"];
    const matches = (list) => {
      const lower = list.map((p) => p.toLowerCase());
      if (lower.includes(cur))
        return true;
      if (h5Aliases.includes(cur) && lower.some((p) => h5Aliases.includes(p)))
        return true;
      return false;
    };
    for (const branch of this.branches) {
      const matched = branch.condition === "ifdef" ? matches(branch.platforms) : !matches(branch.platforms);
      if (matched) {
        result = deepMerge(result, branch.partial);
      }
    }
    return result;
  }
};
function isPlainObject(val) {
  return typeof val === "object" && val !== null && !Array.isArray(val);
}
function deepMerge(base, partial) {
  const result = { ...base };
  for (const key of Object.keys(partial)) {
    const baseVal = result[key];
    const partialVal = partial[key];
    result[key] = isPlainObject(baseVal) && isPlainObject(partialVal) ? deepMerge(baseVal, partialVal) : partialVal;
  }
  return result;
}
var ALL_APP_PLATFORMS = [
  "APP-ANDROID",
  "APP-IOS",
  "APP-HARMONY"
];
var ALL_MP_PLATFORMS = [
  "MP-WEIXIN",
  "MP-ALIPAY",
  "MP-BAIDU",
  "MP-TOUTIAO",
  "MP-QQ",
  "MP-KUAISHOU",
  "MP-LARK",
  "MP-JD",
  "MP-XHS",
  "MP-360",
  "MP-HARMONY"
];
var AUTO_EVAL_PLATFORMS = [
  "h5",
  "app-android",
  "app-ios",
  "app-harmony",
  "mp-weixin",
  "mp-alipay",
  "mp-baidu",
  "mp-toutiao",
  "mp-qq",
  "mp-kuaishou",
  "mp-lark",
  "mp-jd",
  "mp-xhs",
  "mp-360",
  "mp-harmony"
];
function getPlatformEnv(platformInput) {
  const platform = (platformInput || process6.env.UNI_PLATFORM || "h5").toLowerCase();
  let appPlatform = process6.env.UNI_APP_PLATFORM?.toLowerCase();
  if (platform === "app-android") {
    appPlatform = "android";
  } else if (platform === "app-ios") {
    appPlatform = "ios";
  } else if (platform === "app-harmony") {
    appPlatform = "harmony";
  } else if (platform !== "app" && platform !== "app-plus") {
    appPlatform = void 0;
  }
  const isH5 = platform === "h5" || platform === "web";
  const isWeb2 = isH5;
  const isMp = /^mp-/i.test(platform);
  const isMpWeixin = platform === "mp-weixin";
  const isMpAlipay = platform === "mp-alipay";
  const isMpBaidu = platform === "mp-baidu";
  const isMpToutiao = platform === "mp-toutiao";
  const isMpQQ = platform === "mp-qq";
  const isMpKuaishou = platform === "mp-kuaishou";
  const isMpLark = platform === "mp-lark";
  const isMpJD = platform === "mp-jd";
  const isMpXHS = platform === "mp-xhs";
  const isMp360 = platform === "mp-360";
  const isMpHarmony = platform === "mp-harmony";
  const isApp = platform === "app" || platform === "app-plus" || platform.startsWith("app-");
  const isAppAndroid = isApp && (platform === "app-android" || appPlatform === "android");
  const isAppIOS = isApp && (platform === "app-ios" || appPlatform === "ios");
  const isAppHarmony = isApp && (platform === "app-harmony" || appPlatform === "harmony");
  return {
    platform,
    isH5,
    isWeb: isWeb2,
    isMp,
    isMpWeixin,
    isMpAlipay,
    isMpBaidu,
    isMpToutiao,
    isMpQQ,
    isMpKuaishou,
    isMpLark,
    isMpJD,
    isMpXHS,
    isMp360,
    isMpHarmony,
    isApp,
    isAppAndroid,
    isAppIOS,
    isAppHarmony
  };
}
var cachedLoadedEnv = null;
var cachedEnvRoot = "";
function getLoadedEnv(projectRoot3 = process6.cwd(), mode2) {
  const currentMode = mode2 || process6.env.NODE_ENV || "development";
  if (cachedLoadedEnv != null && cachedEnvRoot === projectRoot3) {
    return cachedLoadedEnv;
  }
  try {
    const loaded = loadEnv(currentMode, projectRoot3, "");
    cachedLoadedEnv = { ...process6.env, ...loaded };
    cachedEnvRoot = projectRoot3;
    return cachedLoadedEnv;
  } catch {
    return { ...process6.env };
  }
}
function clearLoadedEnvCache() {
  cachedLoadedEnv = null;
  cachedEnvRoot = "";
}
function scanDefinePageCall(code) {
  const startRegex = /definePage\s*\(/;
  const match = code.match(startRegex);
  if (match == null || match.index == null) {
    return null;
  }
  const openParen = code.indexOf("(", match.index);
  if (openParen === -1) {
    return null;
  }
  let depth = 0;
  let inString = false;
  let stringChar = "";
  for (let i = openParen; i < code.length; i++) {
    const ch = code[i];
    const prev = i > 0 ? code[i - 1] : "";
    if (inString) {
      if (ch === stringChar && prev !== "\\") {
        inString = false;
      }
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      inString = true;
      stringChar = ch;
      continue;
    }
    if (ch === "/" && i + 1 < code.length) {
      if (code[i + 1] === "/") {
        const newline = code.indexOf("\n", i);
        if (newline === -1) {
          break;
        }
        i = newline;
        continue;
      }
      if (code[i + 1] === "*") {
        const end = code.indexOf("*/", i + 2);
        if (end === -1) {
          break;
        }
        i = end + 1;
        continue;
      }
    }
    if (ch === "(") {
      depth++;
    } else if (ch === ")") {
      depth--;
      if (depth === 0) {
        return { start: match.index, openParen, closeParen: i };
      }
    }
  }
  return null;
}
function parseRouteBlock(content) {
  const regex = /<route[^>]*>([\s\S]*?)<\/route>/;
  const match = content.match(regex);
  if (match == null) {
    return null;
  }
  try {
    return JSON53.parse(match[1].trim());
  } catch (e) {
    console.warn("[uni-pages] Failed to parse <route> block:", e);
    return null;
  }
}
async function parseDefinePage2(content, filename = "page.uvue", currentPlatform = "", projectRoot3 = process6.cwd(), extraContext) {
  let targetContent = content;
  const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
  if (scriptMatch != null && scriptMatch[1] != null) {
    targetContent = scriptMatch[1];
  }
  const site = scanDefinePageCall(targetContent);
  if (site == null) {
    return null;
  }
  const arg = targetContent.slice(site.openParen + 1, site.closeParen).trim();
  if (!arg) {
    return null;
  }
  if (arg === "null") {
    return { _skipPage: true };
  }
  const isFunctionForm = arg.includes("=>") || arg.includes("function") || arg.includes("isH5") || arg.includes("isWeb") || arg.includes("isApp") || arg.includes("isMp") || arg.includes("platform") || arg.includes("define(");
  if (arg.startsWith("{") && !isFunctionForm) {
    try {
      const parsed = JSON53.parse(arg);
      if (parsed != null && typeof parsed === "object") {
        parsed._isStaticMacro = true;
        return parsed;
      }
    } catch {
    }
  }
  const imports = [];
  const importMatches = targetContent.matchAll(/(?:^|\n)\s*(import\s+[\s\S]+?\s+from\s+['"][^'"]+['"]\s*;?)/g);
  for (const m of importMatches) {
    if (!m[1].startsWith("import type")) {
      imports.push(m[1]);
    }
  }
  try {
    const platformEnv = getPlatformEnv(currentPlatform);
    const dir = path5.dirname(filename);
    const macroCode = arg;
    const buildCode = (codeStr) => `${imports.join("\n")}
export default (${codeStr});`;
    const jsCode = ts.transpileModule(buildCode(macroCode), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
        esModuleInterop: true,
        allowJs: true,
        skipLibCheck: true
      }
    }).outputText;
    const defineHelper = (base) => new DefineConditional(base);
    const envVars = getLoadedEnv(projectRoot3);
    const platformObj = {
      ...platformEnv,
      name: platformEnv.platform,
      toString: () => platformEnv.platform,
      valueOf: () => platformEnv.platform
    };
    const baseCtx = {
      ...platformEnv,
      platform: platformObj,
      env: envVars,
      define: defineHelper
    };
    const userCtx = typeof extraContext === "function" ? extraContext(baseCtx) : extraContext ?? {};
    const macroCtx = {
      ...baseCtx,
      ...userCtx
    };
    const vmContext = {
      module: {},
      exports: {},
      __filename: filename,
      __dirname: dir,
      require: createRequire(path5.join(dir, "define-page.mjs")),
      console,
      URL,
      URLSearchParams,
      setTimeout,
      clearTimeout,
      setInterval,
      clearInterval,
      setImmediate,
      clearImmediate,
      fetch: globalThis.fetch,
      process: process6,
      Promise,
      global: globalThis,
      globalThis,
      ...macroCtx
    };
    const script = new vm.Script(jsCode, { filename });
    script.runInNewContext(vmContext, { timeout: 15e3 });
    const exportsObj = vmContext.exports;
    const parsed = "default" in exportsObj ? exportsObj.default : exportsObj;
    let result = null;
    let variants = null;
    if (typeof parsed === "function") {
      result = await parsed(macroCtx);
      try {
        const quietConsole = {
          ...console,
          log: () => {
          },
          info: () => {
          },
          debug: () => {
          },
          warn: () => {
          },
          error: () => {
          }
        };
        vmContext.console = quietConsole;
        const sampledPromises = AUTO_EVAL_PLATFORMS.map(async (p) => {
          const pEnv = getPlatformEnv(p);
          const pPlatformObj = {
            ...pEnv,
            name: pEnv.platform,
            toString: () => pEnv.platform,
            valueOf: () => pEnv.platform
          };
          const pBaseCtx = {
            ...pEnv,
            platform: pPlatformObj,
            env: envVars,
            define: defineHelper
          };
          const pUserCtx = typeof extraContext === "function" ? extraContext(pBaseCtx) : extraContext ?? {};
          const pCtx = {
            ...pBaseCtx,
            ...pUserCtx
          };
          let pRes = parsed(pCtx);
          if (pRes != null && typeof pRes.then === "function") {
            pRes = await pRes;
          }
          if (pRes instanceof DefineConditional) {
            pRes = pRes.resolve(pEnv.platform);
          }
          if (pRes != null && typeof pRes === "object" && !Array.isArray(pRes)) {
            if (p.toUpperCase() === "MP-ALIPAY" || p.toUpperCase() === "MP") {
              normalizeCustomNavForAlipay(pRes);
            }
            return {
              platform: p.toUpperCase(),
              page: pRes
            };
          }
          return null;
        });
        const sampledResults = await Promise.all(sampledPromises);
        const validSampled = sampledResults.filter(Boolean);
        if (validSampled.length > 0) {
          variants = validSampled;
        }
      } catch {
      } finally {
        vmContext.console = console;
      }
    } else {
      result = parsed;
    }
    if (result != null && typeof result.then === "function") {
      result = await result;
    }
    if (result instanceof DefineConditional) {
      result = result.resolve(platformEnv.platform);
    }
    if (result === null) {
      return { _skipPage: true };
    }
    if (result != null && typeof result === "object" && !Array.isArray(result)) {
      if (typeof parsed === "function") {
        result._keepType = true;
        if (variants && variants.length > 0) {
          result._variants = variants;
        }
      }
      return result;
    }
  } catch (e) {
    console.warn(`[uni-pages] Failed to evaluate definePage in ${filename}:`, e.message);
  }
  return null;
}
async function parsePageMeta(content, filename = "page.uvue", currentPlatform = "", projectRoot3 = process6.cwd(), extraContext) {
  const route = parseRouteBlock(content);
  if (route != null) {
    return route;
  }
  return await parseDefinePage2(content, filename, currentPlatform, projectRoot3, extraContext);
}
function findScriptBlocks(code) {
  const blocks = [];
  const openRegex = /<script\b[^>]*>/g;
  let match = openRegex.exec(code);
  while (match != null) {
    const start = match.index + match[0].length;
    const close = code.indexOf("</script>", start);
    if (close === -1) {
      break;
    }
    blocks.push({ start, end: close });
    openRegex.lastIndex = close;
    match = openRegex.exec(code);
  }
  return blocks;
}
function stripDefinePageMacro(code, from = 0, to = code.length) {
  const site = scanDefinePageCall(code.slice(from, to));
  if (site == null) {
    return null;
  }
  let start = from + site.start;
  let endIdx = from + site.closeParen + 1;
  if (start > 0 && code[start - 1] === "\n") {
    start--;
    if (start > 0 && code[start - 1] === "\r") {
      start--;
    }
  }
  while (endIdx < code.length && (code[endIdx] === "\n" || code[endIdx] === "\r")) {
    endIdx++;
  }
  return code.slice(0, start) + code.slice(endIdx);
}
function getTabbarMode4(projectRoot3) {
  if (process6.env.VITE_TABBAR_MODE != null && process6.env.VITE_TABBAR_MODE !== "") {
    return process6.env.VITE_TABBAR_MODE.trim();
  }
  try {
    const envPath = path5.resolve(projectRoot3, ".env");
    if (fs6.existsSync(envPath)) {
      const content = fs6.readFileSync(envPath, "utf-8");
      const match = content.match(/^VITE_TABBAR_MODE\s*=\s*['"]?([^'"\r\n]+)['"]?/m);
      if (match != null && match[1] != null) {
        return match[1].trim();
      }
    }
  } catch {
  }
  return "1";
}
function isPageFile(filePath, dir, subPackages, exclude, projectRoot3) {
  const n = filePath.replace(/\\/g, "/");
  if (!n.endsWith(".uvue") || n.includes("?")) {
    return false;
  }
  const allExcludes = [...DEFAULT_EXCLUDES, ...exclude];
  const relPath = projectRoot3 ? path5.relative(projectRoot3, filePath).replace(/\\/g, "/") : n;
  for (let e = 0; e < allExcludes.length; e++) {
    if (matchGlob(relPath, allExcludes[e])) {
      return false;
    }
  }
  if (n.includes(`${dir.replace(/\\/g, "/")}/`)) {
    return true;
  }
  for (let i = 0; i < subPackages.length; i++) {
    if (n.includes(`${subPackages[i].replace(/\\/g, "/")}/`)) {
      return true;
    }
  }
  return false;
}
function normalizeCustomNavForAlipay(p) {
  const topMpAlipay = p["mp-alipay"];
  if (topMpAlipay != null) {
    p.style = p.style ?? {};
    p.style["mp-alipay"] = { ...p.style["mp-alipay"] ?? {}, ...topMpAlipay };
    delete p["mp-alipay"];
  }
  if (p.style?.navigationStyle === "custom") {
    p.style["mp-alipay"] = {
      transparentTitle: "always",
      titlePenetrate: "YES",
      defaultTitle: "",
      ...p.style["mp-alipay"] ?? {}
    };
  }
}
function cleanTempProps(page, cleanMeta = false) {
  if (cleanMeta) {
    delete page._hasMeta;
    delete page._variants;
  }
  delete page._skipPage;
  if (page._keepType !== true && page.type === "home" && page._isStaticMacro === true) {
    delete page.type;
  }
  delete page._isStaticMacro;
  delete page._keepType;
  delete page.debug;
  delete page.debugHome;
  delete page.only;
  delete page.isDev;
}
function lineComment(value) {
  return {
    type: "LineComment",
    value,
    inline: false,
    loc: {
      start: { line: 0, column: 0 },
      end: { line: 0, column: 0 }
    }
  };
}
function isGenerationMarker(token) {
  return token && token.type !== "BlankLine" && typeof token.value === "string" && token.value.trim().startsWith(GENERATION_MARKER_PREFIX);
}
function simplifyPlatformList(platforms) {
  const set = new Set(platforms);
  if (ALL_APP_PLATFORMS.every((p) => set.has(p))) {
    for (const p of ALL_APP_PLATFORMS) {
      set.delete(p);
    }
    set.add("APP");
  }
  if (ALL_MP_PLATFORMS.every((p) => set.has(p))) {
    for (const p of ALL_MP_PLATFORMS) {
      set.delete(p);
    }
    set.add("MP");
  }
  if (set.has("WEB") && set.has("H5")) {
    set.delete("WEB");
  }
  return [...set].sort();
}
function expandPlatformTokens(tokens) {
  const result = [];
  for (const token of tokens) {
    if (token === "APP") {
      result.push(...ALL_APP_PLATFORMS);
    } else if (token === "MP") {
      result.push(...ALL_MP_PLATFORMS);
    } else {
      result.push(token);
    }
  }
  return [...new Set(result)];
}
function platformsExcluding(platformList, currentPlatform) {
  const rawTokens = platformList.split("||").map((p) => p.trim()).filter(Boolean);
  const expanded = expandPlatformTokens(rawTokens);
  const toExclude = /* @__PURE__ */ new Set();
  toExclude.add(currentPlatform);
  if (currentPlatform === "MP") {
    ALL_MP_PLATFORMS.forEach((p) => toExclude.add(p));
  }
  if (currentPlatform === "APP") {
    ALL_APP_PLATFORMS.forEach((p) => toExclude.add(p));
  }
  const remaining = expanded.filter((p) => !toExclude.has(p));
  return simplifyPlatformList(remaining);
}
function extractLastPlatforms(src, currentPlatform) {
  let lastPlatforms = [];
  const before0 = src ? src[Symbol.for("before:0")] : void 0;
  if (Array.isArray(before0)) {
    for (const comment of before0) {
      if (comment && comment.type !== "BlankLine" && typeof comment.value === "string") {
        const trimmed = comment.value.trim();
        if (trimmed.startsWith(GENERATION_MARKER_PREFIX)) {
          lastPlatforms = platformsExcluding(trimmed.slice(GENERATION_MARKER_PREFIX.length), currentPlatform);
        }
      }
    }
  }
  return lastPlatforms;
}
function stringifyForCompare(val) {
  if (val != null && typeof val === "object") {
    const { type: _type, _variants: _var, ...rest } = val;
    return JSON.stringify(rest);
  }
  return JSON.stringify(val);
}
function homeStatusCompatible(a, b) {
  const typeA = a?.type;
  const typeB = b?.type;
  return typeA === void 0 || typeB === void 0 || typeA === typeB;
}
function upsertCurrentVariant(variants, payload, valueStr, currentPlatform, compatible) {
  const isSame = (variant) => variant.valueStr === valueStr && (compatible ? compatible(variant.payload, payload) : true);
  if (variants.some((variant) => variant.platforms === null && isSame(variant))) {
    return;
  }
  const equal = variants.find(
    (variant) => variant.platforms !== null && isSame(variant)
  );
  if (equal) {
    if (!equal.platforms.includes(currentPlatform)) {
      equal.platforms.push(currentPlatform);
      equal.platforms = simplifyPlatformList(equal.platforms);
      equal.platformStr = equal.platforms.join(" || ");
    }
    return;
  }
  const platforms = simplifyPlatformList([currentPlatform]);
  variants.push({
    payload,
    valueStr,
    platforms,
    platformStr: platforms.join(" || ")
  });
}
function sortVariants(variants) {
  variants.sort((a, b) => a.platformStr < b.platformStr ? -1 : a.platformStr > b.platformStr ? 1 : 0);
}
function collectVariantPlatforms(mergedMap) {
  const platforms = /* @__PURE__ */ new Set();
  for (const variants of mergedMap.values()) {
    for (const { platforms: variantPlatforms } of variants) {
      if (variantPlatforms) {
        for (const platform of variantPlatforms) {
          platforms.add(platform);
        }
      }
    }
  }
  return platforms;
}
function resolvePlatformUnion(mergedMap, currentPlatform, lastPlatforms, extraPlatforms = []) {
  const union = /* @__PURE__ */ new Set([
    currentPlatform,
    ...lastPlatforms,
    ...extraPlatforms,
    ...collectVariantPlatforms(mergedMap)
  ]);
  return simplifyPlatformList([...union]);
}
function ensureAllPlatformsCovered(mergedMap, platformUnion) {
  for (const list of mergedMap.values()) {
    if (list.length <= 1) {
      continue;
    }
    const covered = /* @__PURE__ */ new Set();
    for (const item of list) {
      if (item.platforms) {
        for (const p of item.platforms) {
          covered.add(p);
          if (p === "APP") {
            for (const app of ALL_APP_PLATFORMS) {
              covered.add(app);
            }
          }
          if (p === "MP") {
            for (const mp of ALL_MP_PLATFORMS) {
              covered.add(mp);
            }
          }
        }
      }
    }
    const missing = platformUnion.filter((p) => {
      if (covered.has(p))
        return false;
      if (p === "APP" && ALL_APP_PLATFORMS.some((app) => covered.has(app)))
        return false;
      if (p === "MP" && ALL_MP_PLATFORMS.some((mp) => covered.has(mp)))
        return false;
      return true;
    });
    if (missing.length === 0) {
      continue;
    }
    let targetVariant = list.find((v) => v.platforms && !v.platforms.includes("H5") && !v.platforms.includes("WEB"));
    if (!targetVariant) {
      targetVariant = list[list.length - 1];
    }
    if (targetVariant && targetVariant.platforms) {
      for (const m of missing) {
        if (!targetVariant.platforms.includes(m)) {
          targetVariant.platforms.push(m);
        }
      }
      targetVariant.platforms = simplifyPlatformList(targetVariant.platforms);
      targetVariant.platformStr = targetVariant.platforms.join(" || ");
    }
  }
}
function isPagePhysicalFileExisted(pagePath, rootDir = "", projectRoot3 = process6.cwd()) {
  if (!pagePath || typeof pagePath !== "string") {
    return false;
  }
  const normalized = pagePath.replace(/\\/g, "/").replace(/^\//, "");
  const candidates = [];
  if (rootDir) {
    const normRoot = rootDir.replace(/\\/g, "/").replace(/^\//, "");
    candidates.push(
      path5.resolve(projectRoot3, normRoot, `${normalized}.uvue`),
      path5.resolve(projectRoot3, normRoot, `${normalized}.vue`),
      path5.resolve(projectRoot3, normRoot, `${normalized}/index.uvue`),
      path5.resolve(projectRoot3, normRoot, `${normalized}/index.vue`)
    );
  }
  candidates.push(
    path5.resolve(projectRoot3, `${normalized}.uvue`),
    path5.resolve(projectRoot3, `${normalized}.vue`),
    path5.resolve(projectRoot3, `${normalized}/index.uvue`),
    path5.resolve(projectRoot3, `${normalized}/index.vue`)
  );
  return candidates.some((filePath) => fs6.existsSync(filePath));
}
function mergePlatformItems(source, currentPlatform, items, uniqueKeyName, sandboxActive = false, extraPlatforms = [], rootDir = "", projectRoot3 = process6.cwd(), strictKeys = false) {
  const src = source || new CommentArray();
  currentPlatform = currentPlatform.toUpperCase();
  const lastPlatforms = extractLastPlatforms(src, currentPlatform);
  const itemsKeySet = new Set(items.map((item) => item[uniqueKeyName]));
  const allowedKeys = sandboxActive || strictKeys ? itemsKeySet : null;
  const fullMacroKeys = new Set(
    items.filter((item) => Array.isArray(item._variants) && item._variants.length > 0 || item._hasMeta === true).map((item) => item[uniqueKeyName])
  );
  const mergedMap = /* @__PURE__ */ new Map();
  const variantsOf = (uniqueKey) => {
    let list = mergedMap.get(uniqueKey);
    if (!list) {
      list = [];
      mergedMap.set(uniqueKey, list);
    }
    return list;
  };
  for (let i = 0; i < src.length; i++) {
    const item = src[i];
    const uniqueKey = item?.[uniqueKeyName];
    if (!uniqueKey)
      continue;
    if (allowedKeys && !allowedKeys.has(uniqueKey))
      continue;
    if (fullMacroKeys.has(uniqueKey))
      continue;
    if (!itemsKeySet.has(uniqueKey) && !isPagePhysicalFileExisted(uniqueKey, rootDir, projectRoot3)) {
      continue;
    }
    const beforeComments = src[Symbol.for(`before:${i}`)];
    const conditionalComment = beforeComments?.find(
      (c) => c && c.type !== "BlankLine" && typeof c.value === "string" && /^#(?:ifdef|ifndef)/.test(c.value.trim())
    );
    if (conditionalComment?.value.trim().startsWith("#ifndef")) {
      variantsOf(uniqueKey).push({
        payload: item,
        valueStr: stringifyForCompare(item),
        platforms: null,
        platformStr: "",
        passthrough: {
          before: [...beforeComments || []].filter((c) => !isGenerationMarker(c)),
          after: [lineComment(" #endif")]
        }
      });
      continue;
    }
    let platforms = [...lastPlatforms];
    if (conditionalComment) {
      const match = conditionalComment.value.match(/#ifdef\s+(.+)/);
      if (match) {
        platforms = platformsExcluding(match[1], currentPlatform);
      }
    }
    if (platforms.length === 0) {
      continue;
    }
    variantsOf(uniqueKey).push({
      payload: item,
      valueStr: stringifyForCompare(item),
      platforms,
      platformStr: platforms.join(" || ")
    });
  }
  for (const item of items) {
    const uniqueKey = item[uniqueKeyName];
    if (!uniqueKey)
      continue;
    const variantsList = item._variants;
    if (Array.isArray(variantsList) && variantsList.length > 0) {
      for (const v of variantsList) {
        const vPayload = { ...item, ...v.page };
        delete vPayload._variants;
        if (v.platform.includes("MP-ALIPAY") || v.platform === "MP") {
          normalizeCustomNavForAlipay(vPayload);
        }
        cleanTempProps(vPayload, true);
        upsertCurrentVariant(
          variantsOf(uniqueKey),
          vPayload,
          stringifyForCompare(vPayload),
          v.platform,
          homeStatusCompatible
        );
      }
    } else {
      const cleanItem = { ...item };
      delete cleanItem._variants;
      if (currentPlatform.toUpperCase().includes("MP-ALIPAY") || currentPlatform.toUpperCase() === "MP") {
        normalizeCustomNavForAlipay(cleanItem);
      }
      cleanTempProps(cleanItem, true);
      upsertCurrentVariant(variantsOf(uniqueKey), cleanItem, stringifyForCompare(cleanItem), currentPlatform, homeStatusCompatible);
    }
  }
  const platformUnion = resolvePlatformUnion(mergedMap, currentPlatform, lastPlatforms, extraPlatforms);
  ensureAllPlatformsCovered(mergedMap, platformUnion);
  const result = new CommentArray();
  const resArray = result;
  for (const variants of mergedMap.values()) {
    sortVariants(variants);
  }
  const platformUnionStr = platformUnion.join(" || ");
  const owningPlatforms = collectVariantPlatforms(mergedMap);
  resArray[Symbol.for("before:0")] = [lineComment(` ${GENERATION_MARKER_PREFIX} ${platformUnionStr}`)];
  for (const [_, list] of mergedMap) {
    for (const { payload: item, platformStr, passthrough } of list) {
      result.push(item);
      const currIdx = result.length - 1;
      if (passthrough) {
        resArray[Symbol.for(`before:${currIdx}`)] = [
          ...resArray[Symbol.for(`before:${currIdx}`)] || [],
          ...passthrough.before
        ];
        if (passthrough.after.length > 0) {
          resArray[Symbol.for(`after:${currIdx}`)] = passthrough.after;
        }
        continue;
      }
      if (list.length > 1) {
        resArray[Symbol.for(`before:${currIdx}`)] = [
          ...resArray[Symbol.for(`before:${currIdx}`)] || [],
          lineComment(` #ifdef ${platformStr}`)
        ];
        resArray[Symbol.for(`after:${currIdx}`)] = [lineComment(" #endif")];
      }
    }
  }
  return { items: result, platformUnion, owningPlatforms: [...owningPlatforms].sort() };
}
function ensureHomePageFirst(pagesArray, homePath) {
  if (!pagesArray || pagesArray.length === 0)
    return;
  const isHome = pagesArray.map((page) => page?.type === "home");
  if (homePath && !pagesArray.some((page) => page?.path === homePath && page?.type === "home")) {
    pagesArray.forEach((page, index) => {
      if (page?.path === homePath) {
        isHome[index] = true;
      }
    });
  }
  const homeCount = isHome.filter(Boolean).length;
  if (homeCount === 0)
    return;
  if (isHome.slice(0, homeCount).every(Boolean))
    return;
  const commentArray = pagesArray;
  const length = pagesArray.length;
  const beforeTokens = [];
  const afterTokens = [];
  for (let i = 0; i < length; i++) {
    beforeTokens.push(commentArray[Symbol.for(`before:${i}`)] || []);
    afterTokens.push(commentArray[Symbol.for(`after:${i}`)] || []);
    Reflect.deleteProperty(commentArray, Symbol.for(`before:${i}`));
    Reflect.deleteProperty(commentArray, Symbol.for(`after:${i}`));
  }
  const markerTokens = beforeTokens[0]?.filter(isGenerationMarker) || [];
  if (beforeTokens[0]) {
    beforeTokens[0] = beforeTokens[0].filter((token) => !isGenerationMarker(token));
  }
  const order = [];
  for (let i = 0; i < length; i++) {
    if (isHome[i])
      order.push(i);
  }
  for (let i = 0; i < length; i++) {
    if (!isHome[i])
      order.push(i);
  }
  pagesArray.splice(0, length, ...order.map((i) => pagesArray[i]));
  for (let i = 0; i < length; i++) {
    const sourceIndex = order[i];
    const before = i === 0 ? [...markerTokens, ...beforeTokens[sourceIndex]] : beforeTokens[sourceIndex];
    if (before && before.length > 0) {
      commentArray[Symbol.for(`before:${i}`)] = before;
    }
    if (afterTokens[sourceIndex] && afterTokens[sourceIndex].length > 0) {
      commentArray[Symbol.for(`after:${i}`)] = afterTokens[sourceIndex];
    }
  }
}
function mergePagesJson(existingContent, output, currentPlatform, sandboxActive = false, extraPlatforms = [], projectRoot3 = process6.cwd(), strictMainPages = false) {
  let oldConfig = {};
  if (existingContent && existingContent.trim() !== "") {
    try {
      oldConfig = cjParse2(existingContent);
    } catch (e) {
      console.warn("[uni-pages] Failed to parse existing pages.json with comment-json:", e);
      oldConfig = {};
    }
  }
  const oldPages = Array.isArray(oldConfig.pages) ? oldConfig.pages : void 0;
  const mergedPagesRes = mergePlatformItems(oldPages, currentPlatform, output.pages, "path", sandboxActive, extraPlatforms, "", projectRoot3, strictMainPages);
  const mergedPages = mergedPagesRes.items;
  ensureHomePageFirst(mergedPages);
  const finalJson = {};
  finalJson[Symbol.for("before:pages")] = [
    lineComment(" =============================================================================="),
    lineComment(" \u26A0\uFE0F \u63D0\u793A\uFF1A\u672C\u6587\u4EF6\u7531 vite-plugin-uni-pages \u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u624B\u52A8\u4FEE\u6539\uFF08\u624B\u52A8\u4FEE\u6539\u4F1A\u88AB\u8986\u76D6\uFF09\uFF01"),
    lineComment(" \u{1F4CC} \u5982\u9700\u914D\u7F6E\u9875\u9762\u8DEF\u7531\u4E0E\u6837\u5F0F\uFF0C\u8BF7\u524D\u5F80 pages.config.json \u6216\u9875\u9762 .uvue \u7684 definePage \u4E2D\u914D\u7F6E\u3002"),
    lineComment(" ==============================================================================")
  ];
  finalJson.pages = mergedPages;
  const keys = Object.keys(output);
  for (const k of keys) {
    if (k !== "pages" && k !== "subPackages") {
      finalJson[k] = output[k];
    }
  }
  if (output.subPackages && output.subPackages.length > 0) {
    const oldSubPackages = Array.isArray(oldConfig.subPackages) ? oldConfig.subPackages : new CommentArray();
    const newSubMap = /* @__PURE__ */ new Map();
    for (const sp of output.subPackages) {
      newSubMap.set(sp.root, sp);
    }
    const mergedSubs = new CommentArray();
    for (const existingSub of oldSubPackages) {
      const sub = newSubMap.get(existingSub.root);
      if (sub) {
        const root = existingSub.root;
        const subMerged = mergePlatformItems(existingSub.pages, currentPlatform, sub.pages, "path", sandboxActive, extraPlatforms, root, projectRoot3).items;
        existingSub.pages = subMerged;
        mergedSubs.push(existingSub);
        newSubMap.delete(existingSub.root);
      } else if (!sandboxActive) {
        const isObsoleteParent = output.subPackages.some((sp) => sp.root.startsWith(`${existingSub.root}/`));
        const isManagedChild = output.subPackages.some((sp) => {
          const slashIdx = sp.root.lastIndexOf("/");
          const parentDir = slashIdx > 0 ? sp.root.slice(0, slashIdx) : "";
          return parentDir !== "" && existingSub.root.startsWith(`${parentDir}/`);
        });
        if (!isObsoleteParent && !isManagedChild) {
          const absSubDir = path5.resolve(projectRoot3, existingSub.root);
          if (fs6.existsSync(absSubDir)) {
            mergedSubs.push(existingSub);
          }
        }
      }
    }
    for (const remaining of newSubMap.values()) {
      const subMerged = mergePlatformItems(void 0, currentPlatform, remaining.pages, "path", sandboxActive, extraPlatforms, remaining.root, projectRoot3).items;
      mergedSubs.push({
        ...remaining,
        pages: subMerged
      });
    }
    finalJson.subPackages = mergedSubs;
  } else if (oldConfig.subPackages && !sandboxActive) {
    finalJson.subPackages = oldConfig.subPackages;
  }
  const outputStr = cjStringify(finalJson, null, 2);
  return `${outputStr}
`;
}
function writePagesJson(output, outputPath, currentPlatformStr = "", sandboxActive = false, strictMainPages = false) {
  let existing = "";
  if (fs6.existsSync(outputPath)) {
    existing = fs6.readFileSync(outputPath, "utf-8");
  }
  const projectRoot3 = path5.dirname(path5.resolve(outputPath));
  const currentPlatform = (currentPlatformStr || process6.env.UNI_PLATFORM || "h5").toUpperCase();
  const extraPlatforms = ["APP"];
  const mergedContent = mergePagesJson(existing, output, currentPlatform, sandboxActive, extraPlatforms, projectRoot3, strictMainPages);
  if (mergedContent !== existing) {
    fs6.writeFileSync(outputPath, mergedContent, "utf-8");
    return true;
  }
  return false;
}
function extractHeaderComments(raw) {
  let index = 0;
  const len = raw.length;
  while (index < len) {
    while (index < len && (raw[index] === " " || raw[index] === "	" || raw[index] === "\r" || raw[index] === "\n")) {
      index++;
    }
    if (index >= len) {
      break;
    }
    if (raw[index] === "/" && raw[index + 1] === "/") {
      const nextLine = raw.indexOf("\n", index);
      index = nextLine === -1 ? len : nextLine + 1;
    } else if (raw[index] === "/" && raw[index + 1] === "*") {
      const endBlock = raw.indexOf("*/", index + 2);
      index = endBlock === -1 ? len : endBlock + 2;
    } else {
      break;
    }
  }
  return raw.slice(0, index);
}
function writeBackConfig(configPath, finalPages, scannedSubPkgs, outputPath, options) {
  if (!fs6.existsSync(configPath)) {
    return false;
  }
  let configUpdated = false;
  const currentConfigRaw = fs6.readFileSync(configPath, "utf-8");
  const headerComments = extractHeaderComments(currentConfigRaw);
  let currentConfig = {};
  try {
    currentConfig = cjParse2(currentConfigRaw);
  } catch {
    try {
      currentConfig = JSON53.parse(currentConfigRaw);
    } catch {
    }
  }
  const multiPlatformPages = /* @__PURE__ */ new Set();
  if (outputPath && fs6.existsSync(outputPath)) {
    try {
      const variantsMap = loadAllPlatformPageVariants(outputPath);
      for (const [pathKey, variants] of variantsMap.entries()) {
        if (variants.length > 1 || variants.some((v) => v.condition != null)) {
          const normKey = pathKey.replace(/\\/g, "/").replace(/^\//, "");
          multiPlatformPages.add(normKey);
          multiPlatformPages.add(normKey.replace(/^src\//, ""));
        }
      }
    } catch {
    }
  }
  const newMainPages = [];
  for (let i = 0; i < finalPages.length; i++) {
    const p = finalPages[i];
    const norm = p.path.replace(/\\/g, "/").replace(/^\//, "");
    const hasVariants = Array.isArray(p._variants) && p._variants.length > 1;
    const isMultiPlatform = hasVariants || multiPlatformPages.has(norm) || multiPlatformPages.has(`src/${norm}`);
    const existingInConfig = currentConfig.pages?.find((cp) => {
      const cpNorm = cp.path.replace(/\\/g, "/").replace(/^\//, "");
      return cpNorm === norm || cpNorm === `src/${norm}` || `src/${cpNorm}` === norm;
    });
    if (existingInConfig && isMultiPlatform) {
      const cleanExisting = { ...existingInConfig };
      cleanTempProps(cleanExisting, true);
      newMainPages.push(cleanExisting);
    } else {
      const cleanP = { ...p };
      cleanTempProps(cleanP, true);
      newMainPages.push(cleanP);
    }
  }
  if (currentConfig.pages == null || JSON.stringify(currentConfig.pages) !== JSON.stringify(newMainPages)) {
    currentConfig.pages = newMainPages;
    configUpdated = true;
  }
  currentConfig.subPackages ??= [];
  const managedSubPrefixes = (options?.subPackages ?? []).map((p) => `${p.replace(/\\/g, "/").replace(/\/+$/, "")}/`);
  currentConfig.subPackages = currentConfig.subPackages.filter((cp) => {
    const cpNorm = cp.root.replace(/\\/g, "/");
    const isObsoleteParent = scannedSubPkgs.some((sp) => sp.root.startsWith(`${cp.root}/`));
    if (isObsoleteParent) {
      configUpdated = true;
      return false;
    }
    const isManaged = (options?.subPackages ?? []).includes(cpNorm) || managedSubPrefixes.some((prefix) => cpNorm.startsWith(prefix));
    if (isManaged && !scannedSubPkgs.some((sp) => sp.root === cp.root)) {
      configUpdated = true;
      return false;
    }
    return true;
  });
  for (let s = 0; s < scannedSubPkgs.length; s++) {
    const spkg = scannedSubPkgs[s];
    const targetSub = currentConfig.subPackages.find((cp) => cp.root === spkg.root);
    if (targetSub == null) {
      currentConfig.subPackages.push({ root: spkg.root, pages: spkg.pages });
      configUpdated = true;
    } else {
      const newSubPages = [];
      for (let pIdx = 0; pIdx < spkg.pages.length; pIdx++) {
        const p = spkg.pages[pIdx];
        const fullRel = `${spkg.root}/${p.path}`.replace(/\\/g, "/").replace(/^\//, "");
        const hasVariants = Array.isArray(p._variants) && p._variants.length > 1;
        const isMultiPlatform = hasVariants || multiPlatformPages.has(fullRel) || multiPlatformPages.has(`src/${fullRel}`);
        const existingInSub = targetSub.pages?.find((cp) => {
          const cpNorm = cp.path.replace(/\\/g, "/").replace(/^\//, "");
          return cpNorm === p.path.replace(/\\/g, "/").replace(/^\//, "");
        });
        if (existingInSub && isMultiPlatform) {
          const cleanExisting = { ...existingInSub };
          cleanTempProps(cleanExisting, true);
          newSubPages.push(cleanExisting);
        } else {
          const cleanP = { ...p };
          cleanTempProps(cleanP, true);
          newSubPages.push(cleanP);
        }
      }
      if (JSON.stringify(targetSub.pages) !== JSON.stringify(newSubPages)) {
        targetSub.pages = newSubPages;
        configUpdated = true;
      }
    }
  }
  currentConfig.subPackages.sort((a, b) => a.root.localeCompare(b.root));
  if (configUpdated) {
    let newConfigJson = "";
    try {
      newConfigJson = `${cjStringify(currentConfig, null, 2)}
`;
    } catch {
      newConfigJson = `${JSON.stringify(currentConfig, null, 2)}
`;
    }
    if (headerComments && !newConfigJson.startsWith("//") && !newConfigJson.startsWith("/*")) {
      newConfigJson = headerComments + newConfigJson.replace(/^\s*/, "");
    }
    if (newConfigJson !== currentConfigRaw) {
      fs6.writeFileSync(configPath, newConfigJson, "utf-8");
      return true;
    }
  }
  return false;
}
var lastGoodBaseConfig = null;
function collectStagesFromPlugins(plugins) {
  const stages = [];
  for (let i = 0; i < plugins.length; i++) {
    const stage3 = plugins[i]?.[UNI_PAGES_STAGE_PROP];
    if (stage3 != null) {
      stages.push(stage3);
    }
  }
  return stages.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
}
async function buildPages(userOptions, ctx, stages = []) {
  const options = resolveOptions(userOptions);
  const root = ctx.root;
  const isProduction2 = ctx.isProduction;
  clearLoadedEnvCache();
  let baseConfig = {};
  let configParseFailed = false;
  const configPath = path5.resolve(root, options.configFile);
  if (fs6.existsSync(configPath)) {
    try {
      const raw = fs6.readFileSync(configPath, "utf-8");
      baseConfig = JSON53.parse(raw);
      lastGoodBaseConfig = baseConfig;
    } catch (e) {
      configParseFailed = true;
      if (lastGoodBaseConfig != null) {
        baseConfig = lastGoodBaseConfig;
      }
      console.warn(`[uni-pages] ${options.configFile} has syntax errors, using last good cache and skipping write-back:`, e.message);
    }
  }
  if (configParseFailed && lastGoodBaseConfig == null) {
    console.error(`[uni-pages] Aborted: ${options.configFile} has syntax errors and no cached config is available. Fix the file first.`);
    return null;
  }
  const outputPath = path5.resolve(root, options.outFile);
  const existingPagesMap = /* @__PURE__ */ new Map();
  if (fs6.existsSync(outputPath)) {
    try {
      const existingData = JSON.parse(fs6.readFileSync(outputPath, "utf-8"));
      if (Array.isArray(existingData.pages)) {
        existingData.pages.forEach((p) => {
          if (p.path) {
            existingPagesMap.set(p.path, p);
          }
        });
      }
      if (Array.isArray(existingData.subPackages)) {
        existingData.subPackages.forEach((pkg) => {
          if (Array.isArray(pkg.pages)) {
            pkg.pages.forEach((p) => {
              if (p.path) {
                const full = `${pkg.root}/${p.path}`.replace(/\\/g, "/").replace(/^\//, "");
                existingPagesMap.set(full, p);
              }
            });
          }
        });
      }
    } catch {
    }
  }
  const pagesDir = path5.resolve(root, options.dir);
  const files = scanUvueFiles(pagesDir, options.exclude, root);
  files.sort();
  const scannedResults = await Promise.all(
    files.map(async (file) => {
      const raw = fs6.readFileSync(file, "utf-8");
      const meta = await parsePageMeta(raw, file, process6.env.UNI_PLATFORM, root, options.context);
      return { file, raw, meta };
    })
  );
  const scanned = [];
  const debugAnnotatedPages = [];
  const debugHomeAnnotatedPages = [];
  for (const { file, raw, meta } of scannedResults) {
    if (meta?._skipPage === true) {
      continue;
    }
    const pagePath = fileToPagePath(file, options.dir, root);
    const page = { path: pagePath };
    if (meta != null) {
      Object.assign(page, meta);
      page._hasMeta = true;
      if (meta.debug !== false) {
        const isDebugHome = meta.debugHome === true || meta.debug === "home";
        const isDebug = isDebugHome || meta.debug === true || meta.only === true || meta.isDev === true;
        if (isDebugHome) {
          debugHomeAnnotatedPages.push(pagePath);
        } else if (isDebug) {
          debugAnnotatedPages.push(pagePath);
        }
      }
    } else if (raw.includes("definePage(") || raw.includes("<route")) {
      const old = existingPagesMap.get(pagePath);
      if (old != null) {
        Object.assign(page, old);
        page._hasMeta = true;
      }
    }
    scanned.push(page);
  }
  const configSubPkgs = baseConfig.subPackages ?? [];
  const scannedSubPkgs = [];
  const baseConfigFullPathMap = /* @__PURE__ */ new Map();
  for (const pkg of configSubPkgs) {
    if (Array.isArray(pkg.pages)) {
      for (const p of pkg.pages) {
        if (p.path) {
          const fullPath = `${pkg.root}/${p.path}`.replace(/\\/g, "/").replace(/^\//, "");
          baseConfigFullPathMap.set(fullPath, p);
        }
      }
    }
  }
  const subEntries = [];
  for (let s = 0; s < options.subPackages.length; s++) {
    const subDir = options.subPackages[s];
    const absSubDir = path5.resolve(root, subDir);
    if (!fs6.existsSync(absSubDir)) {
      continue;
    }
    if (options.subPackageMode === "root") {
      subEntries.push({ rootDir: subDir, absDir: absSubDir });
    } else {
      const items = fs6.readdirSync(absSubDir, { withFileTypes: true });
      let hasDirectPages = false;
      items.sort((a, b) => a.name.localeCompare(b.name));
      for (const item of items) {
        if (item.isDirectory()) {
          if (["components", "views", "common", "modules", "assets", "static", "font", "fonts", "img", "imgs", "image", "images"].includes(item.name)) {
            continue;
          }
          const childAbs = path5.join(absSubDir, item.name);
          subEntries.push({
            rootDir: `${subDir}/${item.name}`.replace(/\\/g, "/"),
            absDir: childAbs
          });
        } else if (item.isFile() && item.name.endsWith(".uvue")) {
          hasDirectPages = true;
        }
      }
      if (hasDirectPages || subEntries.length === 0) {
        subEntries.push({ rootDir: subDir, absDir: absSubDir });
      }
    }
  }
  for (let e = 0; e < subEntries.length; e++) {
    const entry = subEntries[e];
    const subFiles = scanUvueFiles(entry.absDir, options.exclude, root);
    if (subFiles.length === 0) {
      continue;
    }
    subFiles.sort();
    const subResults = await Promise.all(
      subFiles.map(async (subFile) => {
        const raw = fs6.readFileSync(subFile, "utf-8");
        const meta = await parsePageMeta(raw, subFile, process6.env.UNI_PLATFORM, root, options.context);
        return { subFile, raw, meta };
      })
    );
    const subPages = [];
    for (const { subFile, raw, meta } of subResults) {
      if (meta?._skipPage === true) {
        continue;
      }
      const relPath = path5.relative(entry.absDir, subFile).replace(/\\/g, "/").replace(/\.uvue$/, "");
      const fullSubPath = `${entry.rootDir}/${relPath}`.replace(/\\/g, "/").replace(/^\//, "");
      const page = { path: relPath };
      if (meta != null) {
        Object.assign(page, meta);
        page._hasMeta = true;
        if (meta.debug !== false) {
          const isDebugHome = meta.debugHome === true || meta.debug === "home";
          const isDebug = isDebugHome || meta.debug === true || meta.only === true || meta.isDev === true;
          if (isDebugHome) {
            debugHomeAnnotatedPages.push(fullSubPath);
          } else if (isDebug) {
            debugAnnotatedPages.push(fullSubPath);
          }
        }
      } else if (raw.includes("definePage(") || raw.includes("<route")) {
        const old = existingPagesMap.get(fullSubPath);
        if (old != null) {
          Object.assign(page, old);
          page._hasMeta = true;
        }
      }
      subPages.push(page);
    }
    if (subPages.length === 0) {
      continue;
    }
    const mergedPages = [];
    for (let k = 0; k < subPages.length; k++) {
      const sp = subPages[k];
      const fullSubPath = `${entry.rootDir}/${sp.path}`.replace(/\\/g, "/").replace(/^\//, "");
      const manual = baseConfigFullPathMap.get(fullSubPath);
      if (sp._hasMeta) {
        mergedPages.push(sp);
      } else if (manual != null) {
        mergedPages.push({
          ...manual,
          path: sp.path
        });
      } else {
        mergedPages.push(sp);
      }
    }
    scannedSubPkgs.push({ root: entry.rootDir, pages: mergedPages });
  }
  const managedSubPrefixes = options.subPackages.map((p) => `${p.replace(/\\/g, "/").replace(/\/+$/, "")}/`);
  for (let i = 0; i < configSubPkgs.length; i++) {
    const cp = configSubPkgs[i];
    const cpNorm = cp.root.replace(/\\/g, "/");
    const isParentOfScanned = scannedSubPkgs.some((sp) => sp.root.startsWith(`${cp.root}/`));
    const isManaged = options.subPackages.includes(cpNorm) || managedSubPrefixes.some((prefix) => cpNorm.startsWith(prefix));
    if (!isParentOfScanned && !isManaged && !scannedSubPkgs.some((sp) => sp.root === cp.root)) {
      scannedSubPkgs.push(cp);
    }
  }
  const manualPages = baseConfig.pages ?? [];
  const manualPagesMap = /* @__PURE__ */ new Map();
  for (let k = 0; k < manualPages.length; k++) {
    manualPagesMap.set(manualPages[k].path, manualPages[k]);
  }
  const finalPages = [];
  for (let k = 0; k < scanned.length; k++) {
    const sp = scanned[k];
    const manual = manualPagesMap.get(sp.path);
    if (sp._hasMeta) {
      finalPages.push(sp);
    } else if (manual != null) {
      finalPages.push({
        ...manual,
        path: sp.path
      });
    } else {
      finalPages.push(sp);
    }
  }
  for (let k = 0; k < manualPages.length; k++) {
    const mp = manualPages[k];
    if (finalPages.some((p) => p.path === mp.path)) {
      continue;
    }
    if (fs6.existsSync(path5.resolve(root, `${mp.path}.uvue`))) {
      finalPages.push(mp);
    }
  }
  let home = "";
  const homeItem = scanned.find((p) => p.type === "home" || p.isHome === true);
  if (homeItem != null) {
    home = homeItem.path;
  } else if (options.homePage !== "") {
    home = options.homePage;
  } else if (baseConfig.homePage != null && baseConfig.homePage !== "") {
    home = baseConfig.homePage;
  }
  if (home !== "" && finalPages.length > 0) {
    const idx = finalPages.findIndex((p) => p.path === home);
    if (idx > 0) {
      const [item] = finalPages.splice(idx, 1);
      finalPages.unshift(item);
    }
  }
  finalPages.forEach(normalizeCustomNavForAlipay);
  scannedSubPkgs.forEach((pkg) => {
    pkg.pages.forEach(normalizeCustomNavForAlipay);
  });
  if (baseConfig.globalStyle?.navigationStyle === "custom") {
    baseConfig.globalStyle["mp-alipay"] = {
      transparentTitle: "always",
      titlePenetrate: "YES",
      ...baseConfig.globalStyle["mp-alipay"] ?? {}
    };
  }
  finalPages.forEach((p) => cleanTempProps(p, false));
  scannedSubPkgs.forEach((pkg) => {
    pkg.pages.forEach((p) => cleanTempProps(p, false));
  });
  const output = { pages: finalPages };
  const keys = Object.keys(baseConfig);
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    if (k !== "pages" && k !== "homePage" && k !== "subPackages") {
      output[k] = baseConfig[k];
    }
  }
  const state = {
    root,
    isProduction: isProduction2,
    options,
    baseConfig,
    baseConfigParseOk: !configParseFailed,
    configPath,
    outputPath,
    existingPagesMap,
    finalPages,
    scannedSubPkgs,
    debugAnnotatedPages,
    debugHomeAnnotatedPages,
    output,
    virtualPages: [],
    flags: {
      sandboxActive: false,
      strictMainPages: false,
      skipConfigWriteback: false
    },
    stats: {
      pageCount: finalPages.length,
      subPackageCount: scannedSubPkgs.length
    }
  };
  for (let i = 0; i < stages.length; i++) {
    stages[i].run(state, ctx);
  }
  if (state.scannedSubPkgs.length > 0) {
    output.subPackages = state.scannedSubPkgs;
  } else {
    delete output.subPackages;
  }
  return state;
}
function resolveCurrentPlatform(platformInput) {
  const p = (platformInput || process6.env.UNI_PLATFORM || "h5").toUpperCase();
  if (p === "WEB")
    return "H5";
  if (p === "APP" || p === "APP-PLUS") {
    const sub = (process6.env.UNI_APP_PLATFORM || "").toUpperCase();
    if (sub === "ANDROID")
      return "APP-ANDROID";
    if (sub === "IOS")
      return "APP-IOS";
    if (sub === "HARMONY")
      return "APP-HARMONY";
    return "APP";
  }
  return p;
}
function commitPages(state, server = null) {
  const currentPlatform = resolveCurrentPlatform(process6.env.UNI_PLATFORM);
  const changed = writePagesJson(
    state.output,
    state.outputPath,
    currentPlatform,
    state.flags.sandboxActive,
    state.flags.strictMainPages
  );
  if (changed) {
    if (state.flags.sandboxActive) {
      const allPaths = [
        ...state.output.pages.map((p) => p.path),
        ...state.scannedSubPkgs.flatMap((s) => s.pages.map((p) => `${s.root}/${p.path}`))
      ];
      console.log(`\x1B[33m\u26A1 [uni-pages] \u6C99\u76D2\u72EC\u7ACB\u8C03\u8BD5\u6A21\u5F0F\u5DF2\u751F\u6548: \u5171 ${allPaths.length} \u4E2A\u9875\u9762 (\u9996\u9875: ${state.output.pages[0].path})\x1B[0m`);
      console.log(`\x1B[33m   \u5305\u542B\u9875\u9762: ${allPaths.join(" | ")}\x1B[0m`);
    } else {
      console.log(`[uni-pages] Generated ${state.options.outFile} (${state.stats.pageCount} pages, ${state.stats.subPackageCount} subpackages)`);
    }
    if (server != null) {
      try {
        const mod = server.moduleGraph.getModuleById(state.outputPath);
        if (mod != null) {
          server.moduleGraph.invalidateModule(mod);
        }
        server.ws.send({
          type: "full-reload",
          path: "*"
        });
      } catch {
      }
    }
  }
  if (!state.flags.skipConfigWriteback && state.baseConfigParseOk) {
    if (writeBackConfig(state.configPath, state.finalPages, state.scannedSubPkgs, state.outputPath, state.options)) {
      console.log(`[uni-pages] Automatically synced changes into ${state.options.configFile}`);
    }
  }
}
function uniPagesPlugin(userOptions = {}) {
  const options = resolveOptions(userOptions);
  let projectRoot3 = process6.cwd();
  let server = null;
  let isProduction2 = false;
  let timeoutId = null;
  let generation = Promise.resolve();
  let stages = [];
  let stageChecked = false;
  let hasGeneratedInConfigResolved = false;
  async function runGenerate() {
    if (!options.enabled) {
      return;
    }
    const ctx = { root: projectRoot3, isProduction: isProduction2 };
    if (!isProduction2 && !stageChecked) {
      stageChecked = true;
      const present = new Set(stages.map((s) => s.name));
      for (let i = 0; i < KNOWN_PAGES_STAGES.length; i++) {
        const known = KNOWN_PAGES_STAGES[i];
        if (!present.has(known)) {
          console.warn(`\x1B[33m[uni-pages] \u9636\u6BB5 ${known} \u672A\u6CE8\u518C\uFF0C\u5BF9\u5E94\u529F\u80FD\uFF08sandbox / tabBar / route-table\uFF09\u5C06\u4E0D\u751F\u6548\x1B[0m`);
        }
      }
    }
    const state = await buildPages(userOptions, ctx, stages);
    if (state == null) {
      return;
    }
    setPagesMetaSnapshot({
      platform: resolveCurrentPlatform(process6.env.UNI_PLATFORM),
      pages: state.finalPages,
      subPackages: state.scannedSubPkgs
    }, state.root);
    commitPages(state, server);
  }
  function enqueueGenerate() {
    generation = generation.then(runGenerate, runGenerate);
    return generation;
  }
  function debouncedGenerate() {
    if (timeoutId != null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      timeoutId = null;
      void enqueueGenerate();
    }, DEBOUNCE_MS);
  }
  let hasWatchedChanges = false;
  let hasRelevantRouteChanges = false;
  const matchesPage = (filePath) => isPageFile(filePath, options.dir, options.subPackages, options.exclude, projectRoot3);
  const isConfigFile = (filePath) => {
    const normalized = filePath.replace(/\\/g, "/");
    const configPath = path5.resolve(projectRoot3, options.configFile).replace(/\\/g, "/");
    const tabbarConfigPath = path5.resolve(projectRoot3, "src/tabbar/config.uts").replace(/\\/g, "/");
    const envPath = path5.resolve(projectRoot3, ".env").replace(/\\/g, "/");
    return normalized === configPath || normalized === tabbarConfigPath || normalized === envPath || normalized.includes("pages.config") || normalized.includes("tabbar/config") || normalized.endsWith(".env");
  };
  return {
    name: "uni-pages",
    enforce: "pre",
    async configResolved(config) {
      projectRoot3 = config.root ?? process6.cwd();
      stages = collectStagesFromPlugins(config.plugins ?? []);
      const mode2 = config.mode ?? process6.env.NODE_ENV ?? "development";
      const isExplicitProd = mode2 === "production" || process6.env.NODE_ENV === "production";
      const isWatch = Boolean(config.build?.watch || process6.env.UNI_WATCH || process6.env.UNI_APP_WATCH);
      isProduction2 = isExplicitProd && !isWatch;
      if (options.enabled) {
        await enqueueGenerate();
        hasGeneratedInConfigResolved = true;
      }
    },
    watchChange(id) {
      if (!options.enabled) {
        return;
      }
      hasWatchedChanges = true;
      const normalized = id.replace(/\\/g, "/");
      if (isConfigFile(normalized) || matchesPage(normalized)) {
        hasRelevantRouteChanges = true;
      }
    },
    async buildStart() {
      if (!options.enabled) {
        return;
      }
      if (hasGeneratedInConfigResolved) {
        hasGeneratedInConfigResolved = false;
        return;
      }
      if (hasWatchedChanges && !hasRelevantRouteChanges) {
        hasWatchedChanges = false;
        return;
      }
      hasWatchedChanges = false;
      hasRelevantRouteChanges = false;
      await enqueueGenerate();
    },
    /**
     * 移除 definePage(...) 宏调用，避免运行时报错。
     *
     * definePage 是脚本级宏，所以整份 SFC 源码里只在 <script> 块内搜索：模板中作为文档
     * 展示的 `definePage({...})` 文本必须原样保留。已被拆出的纯脚本子模块没有 <script>
     * 标签，此时退回整段搜索，保持原行为。
     */
    transform(code, id) {
      if (!code.includes("definePage(")) {
        return null;
      }
      const rawId = id.split("?")[0].replace(/\\/g, "/");
      if (!rawId.endsWith(".uvue") && !rawId.endsWith(".vue")) {
        return null;
      }
      const scriptBlocks = findScriptBlocks(code);
      if (scriptBlocks.length === 0) {
        const newCode = stripDefinePageMacro(code);
        if (newCode == null) {
          return null;
        }
        return { code: newCode, map: null };
      }
      for (let i = 0; i < scriptBlocks.length; i++) {
        const newCode = stripDefinePageMacro(code, scriptBlocks[i].start, scriptBlocks[i].end);
        if (newCode != null) {
          return { code: newCode, map: null };
        }
      }
      return null;
    },
    configureServer(s) {
      if (!options.enabled) {
        return;
      }
      server = s;
      const pagesDir = path5.resolve(projectRoot3, options.dir);
      const configPath = path5.resolve(projectRoot3, options.configFile);
      const tabbarConfigPath = path5.resolve(projectRoot3, "src/tabbar/config.uts");
      const envPath = path5.resolve(projectRoot3, ".env");
      if (fs6.existsSync(pagesDir)) {
        server.watcher.add(pagesDir);
      }
      for (let i = 0; i < options.subPackages.length; i++) {
        const subDir = path5.resolve(projectRoot3, options.subPackages[i]);
        if (fs6.existsSync(subDir)) {
          server.watcher.add(subDir);
        }
      }
      if (fs6.existsSync(configPath)) {
        server.watcher.add(configPath);
      }
      if (fs6.existsSync(tabbarConfigPath)) {
        server.watcher.add(tabbarConfigPath);
      }
      if (fs6.existsSync(envPath)) {
        server.watcher.add(envPath);
      }
      server.watcher.on("add", (filePath) => {
        if (matchesPage(filePath)) {
          debouncedGenerate();
        }
      });
      server.watcher.on("unlink", (filePath) => {
        if (matchesPage(filePath)) {
          debouncedGenerate();
        }
      });
      server.watcher.on("change", (filePath) => {
        if (isConfigFile(filePath) || matchesPage(filePath)) {
          debouncedGenerate();
        }
      });
    },
    transformIndexHtml(html) {
      const mode2 = getTabbarMode4(projectRoot3);
      if (mode2 === "2" || mode2 === "CUSTOM_TABBAR_WITH_NATIVE" || mode2 === "CUSTOM_TABBAR") {
        let preloadScripts = "";
        try {
          const pagesJsonData = loadPlatformPagesJson(path5.resolve(projectRoot3, "pages.json"));
          const tabList = pagesJsonData.tabBar && Array.isArray(pagesJsonData.tabBar.list) ? pagesJsonData.tabBar.list : [];
          const tabImports = tabList.map((item) => item.pagePath || "").filter((p) => p.length > 0 && !p.includes("pages/index/index")).map((p) => {
            const norm = p.startsWith("/") ? p : `/${p}`;
            return `import('${norm}.uvue').catch(() => {});`;
          });
          if (tabImports.length > 0) {
            preloadScripts = `<script type="module">
// \u52A8\u6001\u9884\u52A0\u8F7D\u6240\u6709 TabBar \u9875\u9762\u7EC4\u4EF6\uFF0C\u6D88\u9664\u9996\u6B21\u5207\u6362 Tab \u65F6\u7684\u5F02\u6B65\u6A21\u5757\u52A0\u8F7D\u7A7A\u767D
setTimeout(() => {
  ${tabImports.join("\n  ")}
}, 50);
</script>`;
          }
        } catch {
        }
        return html.replace("</head>", `${HIDE_NATIVE_TABBAR_STYLE}
${preloadScripts}
</head>`);
      }
      return html;
    }
  };
}

// ../../../../../../Users/chenqi/Desktop/unibestX/plugins/vite-plugin-uni-pages-sandbox.ts
import fs7 from "node:fs";
import path6 from "node:path";
import process7 from "node:process";
import JSON54 from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/index.js";
function getSandboxConfig(projectRoot3) {
  let enabledStr = process7.env.VITE_DEV_SANDBOX ?? process7.env.VITE_DEV_SINGLE_PAGE ?? "";
  let pathStr = process7.env.VITE_DEV_SANDBOX_PAGES ?? process7.env.VITE_DEV_SINGLE_PATH ?? "";
  if (!enabledStr || !pathStr) {
    try {
      const envPath = path6.resolve(projectRoot3, ".env");
      if (fs7.existsSync(envPath)) {
        const content = fs7.readFileSync(envPath, "utf-8");
        if (!enabledStr) {
          const mEnabled = content.match(/^(?:VITE_DEV_SANDBOX|VITE_DEV_SINGLE_PAGE)\s*=\s*['"]?([^'"\r\n]+)['"]?/m);
          if (mEnabled != null && mEnabled[1] != null) {
            enabledStr = mEnabled[1].trim();
          }
        }
        if (!pathStr) {
          const mPath = content.match(/^(?:VITE_DEV_SANDBOX_PAGES|VITE_DEV_SINGLE_PATH)\s*=\s*['"]?([^'"\r\n]+)['"]?/m);
          if (mPath != null && mPath[1] != null) {
            pathStr = mPath[1].trim();
          }
        }
      }
    } catch {
    }
  }
  const enabled = enabledStr.toLowerCase() === "true" || enabledStr === "1";
  const pagePaths = pathStr.split(/[,;\n\r]+/).map((s) => s.trim()).filter(Boolean);
  return { enabled, pagePaths };
}
function normalizePagePath(p) {
  return p.trim().replace(/\\/g, "/").replace(/^\.\//, "").replace(/^\//, "").replace(/\.(uvue|vue|uts|ts|js)$/, "");
}
function scanDefinePageCall2(code) {
  const startRegex = /definePage\s*\(\s*\{/;
  const match = code.match(startRegex);
  if (match == null || match.index == null) {
    return null;
  }
  const openParen = code.indexOf("(", match.index);
  if (openParen === -1) {
    return null;
  }
  let depth = 0;
  let inString = false;
  let stringChar = "";
  for (let i = openParen + 1; i < code.length; i++) {
    const ch = code[i];
    const prev = i > 0 ? code[i - 1] : "";
    if (inString) {
      if (ch === stringChar && prev !== "\\") {
        inString = false;
      }
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      inString = true;
      stringChar = ch;
      continue;
    }
    if (ch === "/" && i + 1 < code.length) {
      if (code[i + 1] === "/") {
        const newline = code.indexOf("\n", i);
        if (newline === -1) {
          break;
        }
        i = newline;
        continue;
      }
      if (code[i + 1] === "*") {
        const end = code.indexOf("*/", i + 2);
        if (end === -1) {
          break;
        }
        i = end + 1;
        continue;
      }
    }
    if (ch === "{" || ch === "(") {
      depth++;
    }
    if (ch === "}" || ch === ")") {
      depth--;
      if (depth < 0) {
        return { start: match.index, openParen, closeParen: i };
      }
    }
  }
  return null;
}
function parsePageMeta2(content) {
  const routeRegex = /<route[^>]*>([\s\S]*?)<\/route>/;
  const routeMatch = content.match(routeRegex);
  if (routeMatch != null) {
    try {
      return JSON54.parse(routeMatch[1].trim());
    } catch {
      return null;
    }
  }
  let targetContent = content;
  const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
  if (scriptMatch != null && scriptMatch[1] != null) {
    targetContent = scriptMatch[1];
  }
  const site = scanDefinePageCall2(targetContent);
  if (site == null) {
    return null;
  }
  const arg = targetContent.slice(site.openParen + 1, site.closeParen).trim();
  if (arg.startsWith("{")) {
    try {
      return JSON54.parse(arg);
    } catch {
      return null;
    }
  }
  return null;
}
function runSandbox(state) {
  const sandboxConfig = getSandboxConfig(state.root);
  const hasEnvTargets = sandboxConfig.enabled && sandboxConfig.pagePaths.length > 0;
  if (state.debugHomeAnnotatedPages.length > 1) {
    console.warn(`\x1B[33m\u26A0\uFE0F [uni-pages] \u68C0\u6D4B\u5230\u591A\u4E2A\u9875\u9762\u540C\u65F6\u914D\u7F6E\u4E86 debugHome: true (${state.debugHomeAnnotatedPages.join(", ")})\uFF0C\u5168\u5C40\u4EC5\u5141\u8BB8 1 \u4E2A\u542F\u52A8\u9996\u9875\uFF0C\u5DF2\u91C7\u7528\u7B2C\u4E00\u4E2A: ${state.debugHomeAnnotatedPages[0]}\x1B[0m`);
  }
  const combinedCodeDebug = [...state.debugHomeAnnotatedPages, ...state.debugAnnotatedPages];
  const hasCodeDebug = combinedCodeDebug.length > 0;
  const isSandboxMode = !state.isProduction && (hasEnvTargets || hasCodeDebug);
  if (!isSandboxMode) {
    return;
  }
  const finalPages = state.finalPages;
  const scannedSubPkgs = state.scannedSubPkgs;
  const targets = hasEnvTargets ? sandboxConfig.pagePaths : combinedCodeDebug;
  const matchTarget = (fullPath, relSubPath, target) => {
    const targetNorm = normalizePagePath(target);
    const targetNormWithoutSrc = targetNorm.replace(/^src\//, "");
    const fullNorm = normalizePagePath(fullPath);
    const fullNormWithoutSrc = fullNorm.replace(/^src\//, "");
    const relNorm = normalizePagePath(relSubPath);
    if (target.includes("*") || !target.includes(".")) {
      const cleanPrefix = targetNormWithoutSrc.replace(/\/\*$/, "").replace(/\*$/, "");
      if (cleanPrefix) {
        if (fullNormWithoutSrc.startsWith(cleanPrefix) || relNorm.startsWith(cleanPrefix)) {
          return true;
        }
      }
    }
    return fullNorm === targetNorm || fullNormWithoutSrc === targetNormWithoutSrc || relNorm === targetNormWithoutSrc || fullNormWithoutSrc.endsWith(`/${targetNormWithoutSrc}`);
  };
  const sandboxMainPages = [];
  const sandboxSubPkgs = [];
  const matchedPagePaths = /* @__PURE__ */ new Set();
  for (let t = 0; t < targets.length; t++) {
    const target = targets[t];
    for (let i = 0; i < finalPages.length; i++) {
      const p = finalPages[i];
      if (matchedPagePaths.has(p.path)) {
        continue;
      }
      if (matchTarget(p.path, p.path, target)) {
        matchedPagePaths.add(p.path);
        sandboxMainPages.push({ ...p });
      }
    }
    for (let s = 0; s < scannedSubPkgs.length; s++) {
      const spkg = scannedSubPkgs[s];
      for (let j = 0; j < spkg.pages.length; j++) {
        const sp = spkg.pages[j];
        const fullSubPath = `${spkg.root}/${sp.path}`;
        if (matchedPagePaths.has(fullSubPath)) {
          continue;
        }
        if (matchTarget(fullSubPath, sp.path, target)) {
          matchedPagePaths.add(fullSubPath);
          if (sandboxMainPages.length === 0) {
            sandboxMainPages.push({ ...sp, path: fullSubPath });
          } else {
            let targetSubPkg = sandboxSubPkgs.find((pkg) => pkg.root === spkg.root);
            if (targetSubPkg == null) {
              targetSubPkg = { root: spkg.root, pages: [] };
              sandboxSubPkgs.push(targetSubPkg);
            }
            targetSubPkg.pages.push({ ...sp });
          }
        }
      }
    }
    if (!target.includes("*")) {
      let resolvedPath = normalizePagePath(target);
      if (!resolvedPath.startsWith("src/")) {
        resolvedPath = `src/${resolvedPath}`;
      }
      if (!matchedPagePaths.has(resolvedPath)) {
        const absFilePath = path6.resolve(state.root, `${resolvedPath}.uvue`);
        if (fs7.existsSync(absFilePath)) {
          const raw = fs7.readFileSync(absFilePath, "utf-8");
          const meta = parsePageMeta2(raw);
          matchedPagePaths.add(resolvedPath);
          sandboxMainPages.push({
            path: resolvedPath,
            ...meta ?? {}
          });
        }
      }
    }
  }
  if (sandboxMainPages.length === 0) {
    console.warn(`\x1B[31m[uni-pages] \u6C99\u76D2\u8C03\u8BD5\u6A21\u5F0F\u672A\u627E\u5230\u4EFB\u4F55\u5339\u914D\u9875\u9762: ${targets.join(", ")}\x1B[0m`);
  }
  if (sandboxMainPages.length > 0) {
    state.output.pages = sandboxMainPages;
    state.scannedSubPkgs = sandboxSubPkgs;
    state.flags.sandboxActive = true;
    state.flags.skipConfigWriteback = true;
  }
}
var stage = {
  name: "uni-pages:sandbox",
  order: 100,
  run(state) {
    runSandbox(state);
  }
};
function uniPagesSandboxPlugin() {
  return {
    name: "uni-pages:sandbox",
    uniPagesStage: stage
  };
}

// ../../../../../../Users/chenqi/Desktop/unibestX/plugins/vite-plugin-uni-pages-tabbar.ts
import fs8 from "node:fs";
import path7 from "node:path";
import process8 from "node:process";
function getTabbarMode5(projectRoot3) {
  if (process8.env.VITE_TABBAR_MODE != null && process8.env.VITE_TABBAR_MODE !== "") {
    return process8.env.VITE_TABBAR_MODE.trim();
  }
  try {
    const envPath = path7.resolve(projectRoot3, ".env");
    if (fs8.existsSync(envPath)) {
      const content = fs8.readFileSync(envPath, "utf-8");
      const match = content.match(/^VITE_TABBAR_MODE\s*=\s*['"]?([^'"\r\n]+)['"]?/m);
      if (match != null && match[1] != null) {
        return match[1].trim();
      }
    }
  } catch {
  }
  return "1";
}
function normalizePagePath2(p) {
  return p.trim().replace(/\\/g, "/").replace(/^\.\//, "").replace(/^\//, "").replace(/\.(uvue|vue|uts|ts|js)$/, "");
}
function parseCustomTabbarConfig(projectRoot3) {
  const configPath = path7.resolve(projectRoot3, "src/tabbar/config.uts");
  if (!fs8.existsSync(configPath)) {
    return { list: [] };
  }
  const rawContent = fs8.readFileSync(configPath, "utf-8");
  const content = rawContent.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "");
  let zhDict = {};
  const zhPath = path7.resolve(projectRoot3, "src/i18n/locales/zh-CN.json");
  if (fs8.existsSync(zhPath)) {
    try {
      zhDict = JSON.parse(fs8.readFileSync(zhPath, "utf-8"));
    } catch {
    }
  }
  const colorMatch = content.match(/color\s*:\s*['"`](.*?)['"`]/);
  const selectedColorMatch = content.match(/selectedColor\s*:\s*['"`](.*?)['"`]/);
  const backgroundColorMatch = content.match(/backgroundColor\s*:\s*['"`](.*?)['"`]/);
  const borderStyleMatch = content.match(/borderStyle\s*:\s*['"`](.*?)['"`]/);
  const borderColorMatch = content.match(/borderColor\s*:\s*['"`](.*?)['"`]/);
  const fontSizeMatch = content.match(/fontSize\s*:\s*['"`](.*?)['"`]/);
  const iconWidthMatch = content.match(/iconWidth\s*:\s*['"`](.*?)['"`]/);
  const spacingMatch = content.match(/spacing\s*:\s*['"`](.*?)['"`]/);
  const heightMatch = content.match(/height\s*:\s*['"`](.*?)['"`]/);
  const glassEffectMatch = content.match(/glassEffect\s*:\s*(true|false)/);
  const midButtonMatch = content.match(/midButton\s*:\s*\{([\s\S]*?)\}/);
  let midButton;
  if (midButtonMatch) {
    const block = midButtonMatch[1];
    const width = block.match(/width\s*:\s*['"`](.*?)['"`]/);
    const height = block.match(/height\s*:\s*['"`](.*?)['"`]/);
    const text = block.match(/text\s*:\s*['"`](.*?)['"`]/);
    const iconPath = block.match(/iconPath\s*:\s*['"`](.*?)['"`]/);
    const iconWidth = block.match(/iconWidth\s*:\s*['"`](.*?)['"`]/);
    const backgroundImage = block.match(/backgroundImage\s*:\s*['"`](.*?)['"`]/);
    const mb = {};
    if (width && width[1].trim())
      mb.width = width[1].trim();
    if (height && height[1].trim())
      mb.height = height[1].trim();
    if (text && text[1].trim()) {
      const textKey = text[1].trim();
      let translatedText = textKey;
      if (textKey.startsWith("tabbar.")) {
        const subKey = textKey.replace("tabbar.", "");
        translatedText = zhDict.tabbar?.[subKey] ?? textKey;
      }
      mb.text = translatedText;
    }
    if (iconPath && iconPath[1].trim())
      mb.iconPath = iconPath[1].trim();
    if (iconWidth && iconWidth[1].trim())
      mb.iconWidth = iconWidth[1].trim();
    if (backgroundImage && backgroundImage[1].trim())
      mb.backgroundImage = backgroundImage[1].trim();
    const iconfontMatch = block.match(/iconfont\s*:\s*\{([\s\S]*?)\}/);
    if (iconfontMatch) {
      const ifBlock = iconfontMatch[1];
      const ifText = ifBlock.match(/text\s*:\s*['"`](.*?)['"`]/);
      const ifSelectedText = ifBlock.match(/selectedText\s*:\s*['"`](.*?)['"`]/);
      const ifFontSize = ifBlock.match(/fontSize\s*:\s*['"`](.*?)['"`]/);
      const ifColor = ifBlock.match(/color\s*:\s*['"`](.*?)['"`]/);
      const ifSelectedColor = ifBlock.match(/selectedColor\s*:\s*['"`](.*?)['"`]/);
      const iconfontObj = {};
      if (ifText && ifText[1].trim())
        iconfontObj.text = ifText[1].trim();
      if (ifSelectedText && ifSelectedText[1].trim())
        iconfontObj.selectedText = ifSelectedText[1].trim();
      if (ifFontSize && ifFontSize[1].trim())
        iconfontObj.fontSize = ifFontSize[1].trim();
      if (ifColor && ifColor[1].trim())
        iconfontObj.color = ifColor[1].trim();
      if (ifSelectedColor && ifSelectedColor[1].trim())
        iconfontObj.selectedColor = ifSelectedColor[1].trim();
      mb.iconfont = iconfontObj;
    }
    midButton = mb;
  }
  const listMatch = content.match(/list\s*:\s*\[([\s\S]*?)\]/);
  const listResult = [];
  if (listMatch) {
    const listBlock = listMatch[1];
    const itemRegex = /\{([\s\S]*?)\}/g;
    let m = itemRegex.exec(listBlock);
    while (m !== null) {
      const itemBlock = m[1];
      const itemType = itemBlock.match(/tabType\s*:\s*['"`](.*?)['"`]/);
      const pagePath = itemBlock.match(/pagePath\s*:\s*['"`](.*?)['"`]/);
      const text = itemBlock.match(/text\s*:\s*['"`](.*?)['"`]/);
      const iconPath = itemBlock.match(/iconPath\s*:\s*['"`](.*?)['"`]/);
      const selectedIconPath = itemBlock.match(/selectedIconPath\s*:\s*['"`](.*?)['"`]/);
      if (pagePath && text) {
        const textKey = text[1].trim();
        let translatedText = textKey;
        if (textKey.startsWith("tabbar.")) {
          const subKey = textKey.replace("tabbar.", "");
          translatedText = zhDict.tabbar?.[subKey] ?? textKey;
        }
        const itemObj = {
          pagePath: pagePath[1].trim().replace(/^\//, ""),
          text: translatedText,
          iconPath: iconPath ? iconPath[1].trim() : "",
          selectedIconPath: selectedIconPath ? selectedIconPath[1].trim() : ""
        };
        if (itemType && itemType[1].trim())
          itemObj.tabType = itemType[1].trim();
        const iconfontMatch = itemBlock.match(/iconfont\s*:\s*\{([\s\S]*?)\}/);
        if (iconfontMatch) {
          const ifBlock = iconfontMatch[1];
          const ifText = ifBlock.match(/text\s*:\s*['"`](.*?)['"`]/);
          const ifSelectedText = ifBlock.match(/selectedText\s*:\s*['"`](.*?)['"`]/);
          const ifFontSize = ifBlock.match(/fontSize\s*:\s*['"`](.*?)['"`]/);
          const ifColor = ifBlock.match(/color\s*:\s*['"`](.*?)['"`]/);
          const ifSelectedColor = ifBlock.match(/selectedColor\s*:\s*['"`](.*?)['"`]/);
          const iconfontObj = {};
          if (ifText && ifText[1].trim())
            iconfontObj.text = ifText[1].trim();
          if (ifSelectedText && ifSelectedText[1].trim())
            iconfontObj.selectedText = ifSelectedText[1].trim();
          if (ifFontSize && ifFontSize[1].trim())
            iconfontObj.fontSize = ifFontSize[1].trim();
          if (ifColor && ifColor[1].trim())
            iconfontObj.color = ifColor[1].trim();
          if (ifSelectedColor && ifSelectedColor[1].trim())
            iconfontObj.selectedColor = ifSelectedColor[1].trim();
          itemObj.iconfont = iconfontObj;
        }
        listResult.push(itemObj);
      }
      m = itemRegex.exec(listBlock);
    }
  }
  return {
    color: colorMatch ? colorMatch[1].trim() : "@tabBarColor",
    selectedColor: selectedColorMatch ? selectedColorMatch[1].trim() : "@tabBarSelectedColor",
    backgroundColor: backgroundColorMatch ? backgroundColorMatch[1].trim() : "@tabBarBackgroundColor",
    borderStyle: borderStyleMatch ? borderStyleMatch[1].trim() : "@tabBarBorderStyle",
    borderColor: borderColorMatch ? borderColorMatch[1].trim() : void 0,
    fontSize: fontSizeMatch ? fontSizeMatch[1].trim() : void 0,
    iconWidth: iconWidthMatch ? iconWidthMatch[1].trim() : void 0,
    spacing: spacingMatch ? spacingMatch[1].trim() : void 0,
    height: heightMatch ? heightMatch[1].trim() : void 0,
    glassEffect: glassEffectMatch ? glassEffectMatch[1] === "true" : void 0,
    midButton,
    list: listResult
  };
}
function appendOptionalTabBarFields(tabBar, parsedConfig) {
  if (parsedConfig.borderColor)
    tabBar.borderColor = parsedConfig.borderColor;
  if (parsedConfig.fontSize)
    tabBar.fontSize = parsedConfig.fontSize;
  if (parsedConfig.iconWidth)
    tabBar.iconWidth = parsedConfig.iconWidth;
  if (parsedConfig.spacing)
    tabBar.spacing = parsedConfig.spacing;
  if (parsedConfig.height)
    tabBar.height = parsedConfig.height;
  if (parsedConfig.midButton)
    tabBar.midButton = parsedConfig.midButton;
  if (parsedConfig.glassEffect !== void 0)
    tabBar.glassEffect = parsedConfig.glassEffect;
}
function runTabBar(state) {
  const output = state.output;
  const projectRoot3 = state.root;
  if (state.flags.sandboxActive) {
    const sandboxMainPages = output.pages;
    const parsedConfig = parseCustomTabbarConfig(projectRoot3);
    const validSandboxTabList = parsedConfig.list.filter(
      (item) => sandboxMainPages.some(
        (p) => p.path === item.pagePath || p.path === `src/${item.pagePath}` || `src/${p.path}` === item.pagePath || normalizePagePath2(p.path) === normalizePagePath2(item.pagePath)
      )
    );
    if (validSandboxTabList.length >= 2) {
      const tabbarMode2 = getTabbarMode5(projectRoot3);
      const isCustom = tabbarMode2 !== "1" && tabbarMode2 !== "NATIVE_TABBAR";
      output.tabBar = {
        ...isCustom ? { custom: true, customize: true } : {},
        color: parsedConfig.color,
        selectedColor: parsedConfig.selectedColor,
        backgroundColor: parsedConfig.backgroundColor,
        borderStyle: parsedConfig.borderStyle,
        list: validSandboxTabList
      };
      appendOptionalTabBarFields(output.tabBar, parsedConfig);
    } else {
      delete output.tabBar;
    }
    return;
  }
  const tabbarMode = getTabbarMode5(projectRoot3);
  if (tabbarMode === "0" || tabbarMode === "NO_TABBAR") {
    delete output.tabBar;
  } else if (tabbarMode === "1" || tabbarMode === "NATIVE_TABBAR") {
    const parsedConfig = parseCustomTabbarConfig(projectRoot3);
    if (output.tabBar == null) {
      output.tabBar = {
        color: parsedConfig.color,
        selectedColor: parsedConfig.selectedColor,
        backgroundColor: parsedConfig.backgroundColor,
        borderStyle: parsedConfig.borderStyle,
        list: parsedConfig.list
      };
      appendOptionalTabBarFields(output.tabBar, parsedConfig);
    } else {
      delete output.tabBar.custom;
      delete output.tabBar.customize;
      if (parsedConfig.list.length > 0 && (output.tabBar.list == null || output.tabBar.list.length === 0)) {
        output.tabBar.list = parsedConfig.list;
      }
      if (parsedConfig.midButton)
        output.tabBar.midButton = parsedConfig.midButton;
      if (parsedConfig.glassEffect !== void 0)
        output.tabBar.glassEffect = parsedConfig.glassEffect;
    }
  } else if (tabbarMode === "2" || tabbarMode === "CUSTOM_TABBAR_WITH_NATIVE" || tabbarMode === "CUSTOM_TABBAR") {
    const parsedConfig = parseCustomTabbarConfig(projectRoot3);
    if (output.tabBar == null) {
      output.tabBar = {
        custom: true,
        customize: true,
        color: parsedConfig.color,
        selectedColor: parsedConfig.selectedColor,
        backgroundColor: parsedConfig.backgroundColor,
        borderStyle: parsedConfig.borderStyle,
        list: parsedConfig.list
      };
      appendOptionalTabBarFields(output.tabBar, parsedConfig);
    } else {
      output.tabBar.custom = true;
      output.tabBar.customize = true;
      if (parsedConfig.list.length > 0 && (output.tabBar.list == null || output.tabBar.list.length === 0)) {
        output.tabBar.list = parsedConfig.list;
      }
      if (parsedConfig.midButton)
        output.tabBar.midButton = parsedConfig.midButton;
      if (parsedConfig.glassEffect !== void 0)
        output.tabBar.glassEffect = parsedConfig.glassEffect;
    }
  } else if (tabbarMode === "3" || tabbarMode === "CUSTOM_TABBAR_WITHOUT_NATIVE" || tabbarMode === "4" || tabbarMode === "SINGLE_PAGE_TABBAR") {
    delete output.tabBar;
    if (tabbarMode === "4" || tabbarMode === "SINGLE_PAGE_TABBAR") {
      const parsedConfig = parseCustomTabbarConfig(projectRoot3);
      const tabPagePaths = /* @__PURE__ */ new Set();
      parsedConfig.list.forEach((item) => {
        tabPagePaths.add(normalizePagePath2(item.pagePath));
      });
      if (parsedConfig.midButton?.pagePath && typeof parsedConfig.midButton.pagePath === "string") {
        tabPagePaths.add(normalizePagePath2(parsedConfig.midButton.pagePath));
      }
      const homePage = output.pages.find((page) => page.type === "home" || page.isHome === true);
      const hostPath = normalizePagePath2(homePage?.path ?? output.pages[0]?.path ?? "");
      if (hostPath !== "") {
        const virtualPages = [];
        output.pages = output.pages.filter((page) => {
          const pagePath = normalizePagePath2(page.path);
          if (pagePath !== hostPath && tabPagePaths.has(pagePath)) {
            virtualPages.push(page);
            return false;
          }
          return true;
        });
        state.virtualPages = virtualPages;
        state.flags.strictMainPages = true;
      }
    }
  }
}
var stage2 = {
  name: "uni-pages:tabbar",
  order: 200,
  run(state) {
    runTabBar(state);
  }
};
function uniPagesTabbarPlugin() {
  return {
    name: "uni-pages:tabbar",
    uniPagesStage: stage2
  };
}

// ../../../../../../Users/chenqi/Desktop/unibestX/plugins/vite-plugin-uni-pages-route-table.ts
import path8 from "node:path";
var PAGES_ROUTE_TABLE_MODULE_ID = "virtual:uni-pages-route-table";
var RESOLVED_PAGES_ROUTE_TABLE_MODULE_ID = `\0${PAGES_ROUTE_TABLE_MODULE_ID}`;
function toRuntimeRoutePath(pagePath) {
  return `/${pagePath}`.replace(/\/+/g, "/");
}
function buildPageRoutesTable(output) {
  const table = {};
  const collect = (page, prefix) => {
    if (page == null || typeof page.path !== "string" || page.path === "") {
      return;
    }
    const routePath = toRuntimeRoutePath(prefix === "" ? page.path : `${prefix}/${page.path}`);
    const copy = { ...page, path: routePath };
    for (const key of Object.keys(copy)) {
      if (key.startsWith("_")) {
        delete copy[key];
      }
    }
    if (typeof copy.name !== "string" || copy.name.trim() === "") {
      const segments = routePath.split("?")[0].split("/").filter(Boolean);
      if (segments.length > 0) {
        copy.name = segments[segments.length - 1];
      }
    }
    table[routePath] = copy;
  };
  const mainPages = output.pages;
  if (Array.isArray(mainPages)) {
    mainPages.forEach((p) => collect(p, ""));
  }
  const subPackages = output.subPackages;
  if (Array.isArray(subPackages)) {
    subPackages.forEach((pkg) => {
      if (pkg == null || !Array.isArray(pkg.pages)) {
        return;
      }
      const root = typeof pkg.root === "string" ? pkg.root : "";
      pkg.pages.forEach((p) => collect(p, root));
    });
  }
  return table;
}
function toJsStringLiteral(value) {
  return `'${value.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
}
function renderPageRoutesValues(table) {
  const jsonText = JSON.stringify(table);
  const listJsonText = JSON.stringify(Object.values(table));
  return {
    PAGES_ROUTE_TABLE_JSON: toJsStringLiteral(jsonText),
    PAGES_ROUTE_TABLE: jsonText,
    PAGES_ROUTE_TABLE_LIST_JSON: toJsStringLiteral(listJsonText),
    PAGES_ROUTE_TABLE_LIST: listJsonText
  };
}
function renderPageRoutesSource(table) {
  const values = renderPageRoutesValues(table);
  return [
    "/**",
    " * \u26A0\uFE0F \u672C\u6A21\u5757\u7531 plugins/vite-plugin-uni-pages-route-table.ts \u63D0\u4F9B\u7684 Vite \u865A\u62DF\u6A21\u5757\u81EA\u52A8\u751F\u6210\u3002",
    " *",
    ` * \u6A21\u5757 ID\uFF1A${PAGES_ROUTE_TABLE_MODULE_ID}`,
    " * \u5185\u5BB9\uFF1A\u5F53\u524D\u6784\u5EFA\u5E73\u53F0\u7684 pages.json \u9875\u9762\u914D\u7F6E\u8868\uFF0C\u4F9B `useRoute()` \u8BFB\u53D6\u9875\u9762\u914D\u7F6E\u4E0E\u8DEF\u7531\u540D\u3002",
    " * \u751F\u6210\u65F6\u673A\uFF1A\u6BCF\u6B21\u751F\u6210 / \u66F4\u65B0 pages.json \u65F6\u540C\u6B65\u5237\u65B0\u3002",
    " */",
    // 虚拟模块没有 .uts 后缀，Vite 会按 JS 解析；这里不写类型标注，UTS 与 JS 都能直接消费。
    "/** \u8DEF\u5F84 \u2192 \u9875\u9762\u914D\u7F6E\u7684 JSON \u5B57\u7B26\u4E32 */",
    `export const PAGES_ROUTE_TABLE_JSON = ${values.PAGES_ROUTE_TABLE_JSON};`,
    "",
    "/** \u8DEF\u5F84 \u2192 \u9875\u9762\u914D\u7F6E\u7684\u5BF9\u8C61\u5F62\u5F0F */",
    `export const PAGES_ROUTE_TABLE = ${values.PAGES_ROUTE_TABLE};`,
    "",
    "/** \u9875\u9762\u914D\u7F6E\u6570\u7EC4\u7684 JSON \u5B57\u7B26\u4E32 */",
    `export const PAGES_ROUTE_TABLE_LIST_JSON = ${values.PAGES_ROUTE_TABLE_LIST_JSON};`,
    "",
    "/** \u9875\u9762\u914D\u7F6E\u6570\u7EC4\u5F62\u5F0F\uFF0C\u4FBF\u4E8E\u76F4\u63A5\u904D\u5386 */",
    `export const PAGES_ROUTE_TABLE_LIST = ${values.PAGES_ROUTE_TABLE_LIST};`,
    ""
  ].join("\n");
}
function inlinePageRoutesImport(code, table) {
  if (!code.includes(PAGES_ROUTE_TABLE_MODULE_ID)) {
    return code;
  }
  const values = renderPageRoutesValues(table);
  const importPattern = /import\s*\{([^}]*)\}\s*from\s*['"]virtual:uni-pages-route-table['"]\s*;?/g;
  return code.replace(importPattern, (statement, importClause) => {
    const declarations = [];
    importClause.split(",").forEach((specifier) => {
      const parts = specifier.trim().split(/\s+as\s+/);
      const exportedName = parts[0].trim();
      if (!Object.hasOwn(values, exportedName)) {
        return;
      }
      const localName = (parts.length > 1 ? parts[1] : parts[0]).trim();
      if (localName == "") {
        return;
      }
      declarations.push(`const ${localName} = ${values[exportedName]};`);
    });
    return declarations.length > 0 ? declarations.join("\n") : statement;
  });
}
function uniPagesRouteTablePlugin() {
  let projectRoot3 = process.cwd();
  let moduleSource = "";
  let routeTable = null;
  let server = null;
  const ensureRouteTable = () => {
    if (routeTable != null) {
      return routeTable;
    }
    const parsed = loadPlatformPagesJson(path8.resolve(projectRoot3, "pages.json"));
    routeTable = buildPageRoutesTable(parsed);
    return routeTable;
  };
  const invalidateVirtualModule = () => {
    if (server == null) {
      return;
    }
    try {
      const mod = server.moduleGraph.getModuleById(RESOLVED_PAGES_ROUTE_TABLE_MODULE_ID);
      if (mod != null) {
        server.moduleGraph.invalidateModule(mod);
      }
    } catch {
    }
  };
  const stage3 = {
    name: "uni-pages:route-table",
    order: 300,
    run(state) {
      const routePages = [...state.output.pages];
      const routePagePaths = new Set(routePages.map((page) => page.path));
      const virtualPages = state.virtualPages ?? [];
      virtualPages.forEach((page) => {
        if (!routePagePaths.has(page.path)) {
          routePages.push(page);
          routePagePaths.add(page.path);
        }
      });
      const nextTable = buildPageRoutesTable({
        pages: routePages,
        subPackages: state.scannedSubPkgs
      });
      routeTable = nextTable;
      const nextSource = renderPageRoutesSource(nextTable);
      if (nextSource === moduleSource) {
        return;
      }
      moduleSource = nextSource;
      invalidateVirtualModule();
    }
  };
  return {
    name: "uni-pages:route-table",
    enforce: "pre",
    uniPagesStage: stage3,
    configResolved(config) {
      projectRoot3 = config.root ?? projectRoot3;
    },
    configureServer(devServer) {
      server = devServer;
    },
    resolveId(id) {
      if (id === PAGES_ROUTE_TABLE_MODULE_ID) {
        return RESOLVED_PAGES_ROUTE_TABLE_MODULE_ID;
      }
      return null;
    },
    load(id) {
      if (id !== RESOLVED_PAGES_ROUTE_TABLE_MODULE_ID) {
        return null;
      }
      if (moduleSource === "") {
        routeTable = buildPageRoutesTable(
          loadPlatformPagesJson(path8.resolve(projectRoot3, "pages.json"))
        );
        moduleSource = renderPageRoutesSource(routeTable);
      }
      return moduleSource;
    },
    transform(code, id) {
      if (!code.includes(PAGES_ROUTE_TABLE_MODULE_ID)) {
        return null;
      }
      const filename = id.split("?")[0].replace(/\\/g, "/");
      if (!filename.endsWith(".uts") && !filename.endsWith(".uvue") && !filename.endsWith(".vue")) {
        return null;
      }
      const nextCode = inlinePageRoutesImport(code, ensureRouteTable());
      if (nextCode === code) {
        return null;
      }
      return {
        code: nextCode,
        map: null
      };
    }
  };
}

// ../../../../../../Users/chenqi/Desktop/unibestX/plugins/vite-plugin-alipay-tabbar.ts
import fs9 from "node:fs";
import path9 from "node:path";
function isCustomTabbarMode(projectRoot3) {
  let mode2 = process.env.VITE_TABBAR_MODE;
  if (mode2 == null || mode2 === "") {
    try {
      const envPath = path9.resolve(projectRoot3, ".env");
      if (fs9.existsSync(envPath)) {
        const content = fs9.readFileSync(envPath, "utf-8");
        const match = content.match(/^VITE_TABBAR_MODE\s*=\s*['"]?([^'"\r\n]+)['"]?/m);
        if (match != null && match[1] != null) {
          mode2 = match[1].trim();
        }
      }
    } catch {
    }
  }
  const modeStr = (mode2 ?? "1").trim();
  return modeStr === "2" || modeStr === "CUSTOM_TABBAR" || modeStr === "CUSTOM_TABBAR_WITH_NATIVE";
}
function alipayCustomTabbarPlugin() {
  let projectRoot3 = "";
  let watcherInitialized = false;
  function patchAlipayDir(outputDir) {
    const isCustom = isCustomTabbarMode(projectRoot3);
    const appJsonPath = path9.join(outputDir, "app.json");
    const customTabBarDir = path9.join(outputDir, "customize-tab-bar");
    if (isCustom) {
      if (fs9.existsSync(appJsonPath)) {
        try {
          const raw = fs9.readFileSync(appJsonPath, "utf-8");
          const json = JSON.parse(raw);
          if (json.tabBar && json.tabBar.customize !== true) {
            json.tabBar.customize = true;
            fs9.writeFileSync(appJsonPath, JSON.stringify(json, null, 2), "utf-8");
          }
        } catch {
        }
      }
      if (!fs9.existsSync(customTabBarDir)) {
        try {
          fs9.mkdirSync(customTabBarDir, { recursive: true });
          fs9.writeFileSync(path9.join(customTabBarDir, "index.json"), '{\n  "component": true\n}\n', "utf-8");
          fs9.writeFileSync(path9.join(customTabBarDir, "index.axml"), '<view style="display:none;"></view>\n', "utf-8");
          fs9.writeFileSync(path9.join(customTabBarDir, "index.js"), "Component({\n  data: {},\n  methods: {}\n});\n", "utf-8");
          fs9.writeFileSync(path9.join(customTabBarDir, "index.acss"), "/* empty */\n", "utf-8");
        } catch {
        }
      }
    } else {
      if (fs9.existsSync(appJsonPath)) {
        try {
          const raw = fs9.readFileSync(appJsonPath, "utf-8");
          const json = JSON.parse(raw);
          if (json.tabBar && json.tabBar.customize !== void 0) {
            delete json.tabBar.customize;
            fs9.writeFileSync(appJsonPath, JSON.stringify(json, null, 2), "utf-8");
          }
        } catch {
        }
      }
      if (fs9.existsSync(customTabBarDir)) {
        try {
          fs9.rmSync(customTabBarDir, { recursive: true, force: true });
        } catch {
        }
      }
    }
  }
  function patchAllAlipayOutputs(root) {
    const candidateDirs = [
      path9.join(root, "unpackage", "dist", "dev", "mp-alipay"),
      path9.join(root, "dist", "dev", "mp-alipay"),
      path9.join(root, "unpackage", "dist", "build", "mp-alipay"),
      path9.join(root, "dist", "build", "mp-alipay")
    ];
    for (const dir of candidateDirs) {
      if (fs9.existsSync(dir)) {
        patchAlipayDir(dir);
      }
    }
  }
  function initWatcher(root) {
    if (watcherInitialized) {
      return;
    }
    watcherInitialized = true;
    const targetAppJson = path9.join(root, "unpackage", "dist", "dev", "mp-alipay", "app.json");
    const targetDir = path9.dirname(targetAppJson);
    if (fs9.existsSync(targetDir)) {
      try {
        fs9.watch(targetDir, (_eventType, filename) => {
          if (filename === "app.json") {
            patchAllAlipayOutputs(root);
          }
        });
      } catch {
      }
    }
  }
  return {
    name: "unibestx:alipay-custom-tabbar",
    configResolved(config) {
      projectRoot3 = config.root;
      patchAllAlipayOutputs(projectRoot3);
      initWatcher(projectRoot3);
    },
    buildStart() {
      if (projectRoot3) {
        patchAllAlipayOutputs(projectRoot3);
      }
    },
    writeBundle() {
      if (projectRoot3) {
        patchAllAlipayOutputs(projectRoot3);
      }
    },
    closeBundle() {
      if (projectRoot3) {
        patchAllAlipayOutputs(projectRoot3);
      }
    }
  };
}

// ../../../../../../Users/chenqi/Desktop/unibestX/plugins/vite-plugin-html-to-uni.ts
var DEFAULT_TAG_CONFIGS = {
  div: { tag: "view" },
  p: { tag: "view" },
  section: { tag: "view" },
  article: { tag: "view" },
  header: { tag: "view" },
  footer: { tag: "view" },
  aside: { tag: "view" },
  main: { tag: "view" },
  nav: { tag: "view" },
  ul: { tag: "view" },
  ol: { tag: "view" },
  li: { tag: "view" },
  b: { tag: "text", defaultStyle: "font-weight: bold;" },
  strong: { tag: "text", defaultStyle: "font-weight: bold;" },
  span: { tag: "text" },
  i: { tag: "text", defaultStyle: "font-style: italic;" },
  em: { tag: "text", defaultStyle: "font-style: italic;" },
  s: { tag: "text", defaultStyle: "text-decoration-line: line-through;" },
  del: { tag: "text", defaultStyle: "text-decoration-line: line-through;" },
  u: { tag: "text", defaultStyle: "text-decoration-line: underline;" },
  img: { tag: "image" }
};
function hasExplicitStyleIntent(rawTagName, rawAttrs) {
  const tag = rawTagName.toLowerCase();
  if (tag === "b" || tag === "strong") {
    if (/\bfont-weight\b/.test(rawAttrs)) {
      return true;
    }
  } else if (tag === "i" || tag === "em") {
    if (/\bfont-style\b/.test(rawAttrs)) {
      return true;
    }
  } else if (tag === "s" || tag === "del" || tag === "u") {
    if (/\btext-decoration\b/.test(rawAttrs)) {
      return true;
    }
  }
  const classAttrRegex = /(?<![:@v-])\bclass=(["'])([\s\S]*?)\1/;
  const match = classAttrRegex.exec(rawAttrs);
  if (!match) {
    return false;
  }
  const classList = match[2].trim().split(/\s+/).filter(Boolean);
  if (tag === "b" || tag === "strong") {
    return classList.some(
      (cls) => /^font-(?:normal|thin|extralight|light|medium|semibold|bold|extrabold|black)$/.test(cls) || /^font-\[.+\]$/.test(cls)
    );
  }
  if (tag === "i" || tag === "em") {
    return classList.some(
      (cls) => cls === "not-italic" || cls === "italic" || cls === "iconfont" || /^icon[-_]/.test(cls) || /^i-[a-z0-9]/.test(cls)
    );
  }
  if (tag === "s" || tag === "del" || tag === "u") {
    return classList.includes("no-underline") || classList.includes("line-through") || classList.includes("underline");
  }
  return false;
}
function extractTemplate(code) {
  const startMatch = /<template\b[^>]*>/i.exec(code);
  if (!startMatch) {
    return null;
  }
  const startIndex = startMatch.index + startMatch[0].length;
  let depth = 1;
  const tagRegex = /<\/?template\b[^>]*>/gi;
  tagRegex.lastIndex = startIndex;
  let match = tagRegex.exec(code);
  while (match !== null) {
    if (match[0].startsWith("</")) {
      depth--;
      if (depth === 0) {
        return {
          start: startIndex,
          end: match.index,
          content: code.slice(startIndex, match.index)
        };
      }
    } else if (!match[0].endsWith("/>")) {
      depth++;
    }
    match = tagRegex.exec(code);
  }
  return null;
}
function htmlToUniPlugin(options = {}) {
  const enabled = options.enabled ?? true;
  const injectDefaultStyle = options.injectDefaultStyle ?? true;
  const extensions = options.includeExt ?? [".uvue", ".vue"];
  const resolvedConfigs = {};
  Object.keys(DEFAULT_TAG_CONFIGS).forEach((k) => {
    resolvedConfigs[k] = { ...DEFAULT_TAG_CONFIGS[k] };
  });
  if (options.tagMap != null) {
    Object.keys(options.tagMap).forEach((k) => {
      const val = options.tagMap[k];
      if (typeof val === "string") {
        resolvedConfigs[k.toLowerCase()] = { tag: val };
      } else if (val != null) {
        resolvedConfigs[k.toLowerCase()] = { ...val };
      }
    });
  }
  const tags = Object.keys(resolvedConfigs);
  const openTagRegex = new RegExp(`<(${tags.join("|")})\\b((?:[^>"']|"[^"]*"|'[^']*')*)>`, "gi");
  const closeTagRegex = new RegExp(`</(${tags.join("|")})>`, "gi");
  return {
    name: "unibestx:html-to-uni",
    enforce: "pre",
    transform(code, id) {
      if (!enabled) {
        return null;
      }
      if (!extensions.some((ext) => id.endsWith(ext)) || id.includes("node_modules")) {
        return null;
      }
      const hasTargetTag = tags.some((tag) => code.includes(`<${tag}`) || code.includes(`</${tag}>`));
      if (!hasTargetTag) {
        return null;
      }
      const tpl = extractTemplate(code);
      if (!tpl) {
        return null;
      }
      let converted = tpl.content.replace(openTagRegex, (_match, rawTagName, rawAttrs) => {
        const config = resolvedConfigs[rawTagName.toLowerCase()];
        if (!config) {
          return _match;
        }
        const targetTag = config.tag;
        let finalAttrs = rawAttrs;
        if (injectDefaultStyle && config.defaultStyle && !hasExplicitStyleIntent(rawTagName, rawAttrs)) {
          const defaultStyle = config.defaultStyle;
          const styleAttrRegex = /(?<![:@v-])\bstyle=(["'])([\s\S]*?)\1/;
          const styleMatch = styleAttrRegex.exec(finalAttrs);
          if (styleMatch) {
            const quote = styleMatch[1];
            let existingStyle = styleMatch[2].trim();
            if (existingStyle && !existingStyle.endsWith(";")) {
              existingStyle += ";";
            }
            const mergedStyle = existingStyle ? `${defaultStyle} ${existingStyle}` : defaultStyle;
            finalAttrs = finalAttrs.replace(styleAttrRegex, `style=${quote}${mergedStyle}${quote}`);
          } else {
            finalAttrs = ` style="${defaultStyle}"${finalAttrs}`;
          }
        }
        return `<${targetTag}${finalAttrs}>`;
      });
      converted = converted.replace(closeTagRegex, (_m, rawTagName) => {
        const config = resolvedConfigs[rawTagName.toLowerCase()];
        const targetTag = config ? config.tag : rawTagName;
        return `</${targetTag}>`;
      });
      if (converted === tpl.content) {
        return null;
      }
      const newCode = code.slice(0, tpl.start) + converted + code.slice(tpl.end);
      return {
        code: newCode,
        map: null
      };
    }
  };
}

// ../../../../../../Users/chenqi/Desktop/unibestX/vite.config.ts
import { execSync } from "node:child_process";
import { viteMockServe } from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/vite-plugin-mock@3.0.2_esbuild@0.21.5_mockjs@1.1.0_vite@5.2.8_@types+node@26.6.5_sass@1.105.1_terser@5.51.2_/node_modules/vite-plugin-mock/dist/index.mjs";
import { viteVConsole } from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/vite-plugin-vconsole@2.1.1/node_modules/vite-plugin-vconsole/dist/main.mjs";
import vitePluginAppinfo from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/vite-plugin-build-info@0.1.2/node_modules/vite-plugin-build-info/dist/index.js";
import { ViteImageOptimizer } from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/vite-plugin-image-optimizer@2.0.3_sharp@0.35.5_@types+node@26.6.5__svgo@4.1.0_vite@5.2._5262b94962d9be3daf339db5fbe5a880/node_modules/vite-plugin-image-optimizer/dist/index.js";
var __vite_injected_original_import_meta_url2 = "file:///Users/chenqi/Desktop/unibestX/vite.config.ts";
var uni = uniModule.default ?? uniModule;
var projectRoot2 = dirname2(fileURLToPath2(__vite_injected_original_import_meta_url2));
var manifestPluginOptions = {
  cwd: projectRoot2,
  outDir: projectRoot2,
  indent: "	",
  eol: "\n",
  insertFinalNewline: true
};
var pkgVersion = "1.0.0";
try {
  const pkgRaw = fs10.readFileSync(resolve2(projectRoot2, "package.json"), "utf-8");
  const pkg = JSON.parse(pkgRaw);
  pkgVersion = pkg.version ?? "1.0.0";
} catch {
  pkgVersion = "1.0.0";
}
process9.env.VITE_PKG_VERSION = pkgVersion;
process9.env.VITE_TEMPLATE_VERSION = pkgVersion;
try {
  process9.env.VITE_GIT_COMMIT_HASH = execSync("git rev-parse --short HEAD", { stdio: ["pipe", "pipe", "ignore"] }).toString().trim();
  process9.env.VITE_GIT_BRANCH = execSync("git rev-parse --abbrev-ref HEAD", { stdio: ["pipe", "pipe", "ignore"] }).toString().trim();
} catch {
  process9.env.VITE_GIT_COMMIT_HASH = "unknown";
  process9.env.VITE_GIT_BRANCH = "unknown";
}
process9.env.VITE_BUILD_TIME = (/* @__PURE__ */ new Date()).toISOString();
var isBuild = process9.env.NODE_ENV === "production" || process9.argv.includes("build");
var defaultMode = isBuild ? "production" : "development";
var mode = process9.env.NODE_ENV || defaultMode;
process9.env.NODE_ENV = mode;
var loadedEnv = loadEnv2(mode, projectRoot2, "");
var env = { ...loadedEnv, ...process9.env };
var isVisualizer = env.VISUALIZER === "true" || process9.argv.includes("--visualizer");
function checkMockActive() {
  if (env.VITE_USE_MOCK === "true" || process9.argv.includes("--mock")) {
    return true;
  }
  try {
    const activeFile = resolve2(projectRoot2, "node_modules/.cache/mock-active.json");
    if (fs10.existsSync(activeFile)) {
      const raw = fs10.readFileSync(activeFile, "utf-8");
      const data = JSON.parse(raw);
      if (data && typeof data.pid === "number") {
        try {
          process9.kill(data.pid, 0);
          return true;
        } catch {
          fs10.unlinkSync(activeFile);
        }
      }
    }
  } catch {
  }
  return false;
}
var isMock = checkMockActive();
if (isMock) {
  env.VITE_USE_MOCK = "true";
  process9.env.VITE_USE_MOCK = "true";
}
var isProxy = isMock || env.VITE_H5_USE_PROXY === "true";
if (isProxy) {
  env.VITE_H5_USE_PROXY = "true";
  process9.env.VITE_H5_USE_PROXY = "true";
}
Object.assign(process9.env, env);
var isWeb = env.UNI_PLATFORM === "web" || env.UNI_PLATFORM === "h5";
var isProduction = env.VITE_ENV_TYPE === "production" || isBuild && env.VITE_ENV_TYPE !== "test";
var isVConsole = !isProduction && isWeb && (env.VITE_SHOW_VCONSOLE === "true" || process9.argv.includes("--vconsole"));
var weappTailwindcssPlugins = WeappTailwindcss(
  uniAppX({
    base: projectRoot2,
    cssEntries: [resolve2(projectRoot2, "main.css")],
    rem2rpx: true,
    customAttributes: {
      "*": [/^t-class(?:-.+)?$/]
    },
    componentLocalStyles: {
      enabled: true,
      onlyWhenStyleIsolationVersion2: true,
      componentMatcher: (id) => /(?:^|[/\\])src[/\\](?:pages|sub|components)[/\\].*?\.(?:uvue|nvue)$/.test(id)
    },
    uvueUnsupported: "warn",
    cssSourceTrace: !isBuild
  })
) ?? [];
var vite_config_default = defineConfig({
  base: "./",
  resolve: {
    alias: process9.env.UNI_PLATFORM === "web" || process9.env.UNI_PLATFORM === "h5" ? [
      { find: /^vue$/, replacement: "@dcloudio/uni-h5-vue" }
    ] : []
  },
  define: {
    "__X_STYLE_ISOLATION__": false,
    "__X_STYLE_ISOLATION_UP_ARROW__": false,
    "import.meta.env.VITE_TEMPLATE_VERSION": JSON.stringify(pkgVersion),
    "import.meta.env.VITE_PKG_VERSION": JSON.stringify(pkgVersion),
    ...isMock ? { "import.meta.env.VITE_USE_MOCK": JSON.stringify("true") } : {},
    ...isProxy ? { "import.meta.env.VITE_H5_USE_PROXY": JSON.stringify("true") } : {}
  },
  server: {
    host: "0.0.0.0",
    port: 9527,
    // H5 走代理模式时生效（.env 里 VITE_H5_USE_PROXY=true）；直连模式（false）请求不经过此代理
    proxy: {
      "/api": {
        target: env.VITE_SERVER_BASEURL || "http://localhost:3000",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, "")
      },
      "/api-secondary": {
        target: env.VITE_SERVER_BASEURL_SECONDARY || env.VITE_GATEWAY_BASEURL || env.VITE_SERVER_BASEURL || "http://localhost:8080",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api-secondary/, "")
      }
    },
    hmr: true,
    watch: {
      ignored: [
        "**/node_modules/**",
        "**/.git/**",
        "**/dist/**",
        "**/unpackage/**"
      ]
    }
  },
  build: {
    sourcemap: false
    // 关闭 sourcemap，警告直接消失
  },
  plugins: [
    // 编辑器版本对齐提示：HBuilderX / HBuilderV 升级后，package.json pin 的 @dcloudio/*
    // 可能还是旧版。只提示不阻断 —— 版本不一致未必立刻报错，但报错时往往是 API 行为差异、
    // 类型不匹配这类看不出根因的问题，所以每次都提醒一下。
    // 没装编辑器、或 package.json 没有这几个 pin 的环境会静默跳过。
    // 自动同步在 npm 脚本层（pnpm dev / build:* 前面挂了 --ensure）。
    editorVersionPlugin(),
    // 控制台警告与代码片段净化插件：拦截 Vite/Rollup/DCloud 编译告警输出
    cleanLoggerPlugin({ silenceAll: true }),
    // H5 冷启动性能优化：覆盖 DCloud 对依赖预构建的禁用，将核心大体积依赖纳入 esbuild 预构建
    // extraIncludes 透传 isVConsole 时的 vconsole：vite-plugin-vconsole 在 transform 钩子里动态注入
    // `import VConsole from 'vconsole'` 到 main.uts，scanner 看不到，需显式 include 让 scanner 预构建。
    h5OptimizeDepsPlugin({ debug: false, extraIncludes: isVConsole ? ["vconsole"] : [] }),
    // Tab 页面补建与 TabViews 生成插件。
    // 必须排在 uni-pages 之前：configResolved 阶段先补齐缺失的 Tab 页面，核心插件随后扫描时才能
    // 在同一轮把新页面写入 pages.json。删除 Tab 配置不会触发任何页面删除。
    tabbarViewsPlugin({
      enabled: true,
      configFile: "src/tabbar/config.uts"
    }),
    // 自动扫描与路由生成插件（基于 pages.config.json + 页面内 <route>/definePage 声明）
    uniPagesPlugin({
      // 【总控开关】：是否启用插件自动扫描与 pages.json 生成（设为 false 则完全失效，不扫描、不写入 pages.json、不监听文件变化）
      enabled: true,
      // 【主包扫描目录】：主包页面根目录（相对于项目根目录），默认 'src/pages'
      dir: "src/pages",
      // 【分包扫描目录】：分包根目录数组，不能是主包目录的子目录，默认 []
      subPackages: ["src/sub"],
      // 【分包切分模式】：'subdirs'（默认推荐，将 subPackages 下每一个一级子目录自动作为独立分包，彻底避免小程序单包 2MB 限制）| 'root'（将整个目录作为单一分包）
      subPackageMode: "subdirs",
      // 【排除扫描规则】：Glob 匹配规则数组，匹配到的文件/目录不会被当作页面路由扫描
      exclude: [
        "**/components/**/*.*",
        "**/views/**/*.*",
        "**/common/**/*.*",
        "**/modules/**/*.*",
        "**/font/**/*.*",
        "**/fonts/**/*.*",
        "**/img/**/*.*",
        "**/imgs/**/*.*",
        "**/image/**/*.*",
        "**/images/**/*.*",
        "**/assets/**/*.*"
      ],
      // 【输出文件路径】：生成并同步的 pages.json 相对路径，默认 'pages.json'
      outFile: "pages.json",
      // 【基础配置文件】：用于继承 globalStyle、tabBar、easycom 等静态配置的基准文件，默认 'pages.config.json'
      configFile: "pages.config.json",
      // 【强制指定首页】：若指定则优先以该路由为主包第一个首页；留空时默认取 pages.config.json 首项或扫描的第一项
      homePage: "",
      // 【自定义上下文扩展注入】：向 definePage((options) => ...) 的 options 注入业务自定义属性
      // 支持静态对象或函数 (_baseCtx => ({ ... }))，可在页面中解构 options.xxx 读取
      context: (_baseCtx) => ({
        // 可自由注入业务常量、环境变量、构建参数或辅助方法
        appName: env.VITE_APP_TITLE || "unibestX",
        isProduction,
        buildVersion: env.VITE_APP_VERSION || process9.env.VITE_APP_VERSION || "1.0.0",
        templateVersion: pkgVersion
      })
    }),
    // uni-pages 的三个独立卫星插件：各自一个文件、各自独立注册，核心插件通过 configResolved
    // 从插件数组里发现它们携带的 uniPagesStage 属性，在同一次生成 pass 内按 order 依次运行。
    // 注意：必须无条件并列注册，禁止写成 `...(cond ? [x()] : [])`，否则对应功能会静默失效。
    uniPagesSandboxPlugin(),
    // 沙盒独立调试模式（VITE_DEV_SANDBOX / definePage({ debug })）
    uniPagesTabbarPlugin(),
    // TabBar 策略（VITE_TABBAR_MODE 0–4）
    uniPagesRouteTablePlugin(),
    // 提供 virtual:uni-pages-route-table 虚拟模块（页面路由表数据源）
    alipayCustomTabbarPlugin(),
    // 支付宝小程序自定义 TabBar 补丁（消除原生底座闪烁）
    // 手动补充 easycom 插件（限制非小程序端生效，含 App 与 Web）
    // 该插件内部名为 uni:app-easycom，负责在 App 蒸汽模式与 Web 端把模板里的 easycom 标签转成静态 import；
    // 小程序端（mp-*）由官方编译器基于 usingComponents 原生处理，挂载该插件会导致组件被转为未知动态组件并报错 resolveDynamicComponent。
    ...!process9.env.UNI_PLATFORM?.startsWith("mp-") ? [uniEasycomPlugin({ exclude: UNI_EASYCOM_EXCLUDE })] : [],
    htmlToUniPlugin(),
    uni_layouts_plugin_default({
      layoutDir: "src/layouts",
      layout: "default"
    }),
    root_plugin_default({
      enabledGlobalRef: false,
      rootFileName: "src/AppRoot"
    }),
    // manifest.json 由 manifest.config.ts 生成（必须在 uni() 之前注册）。
    // ⚠️ 注意时序：uni-app 在编译进程启动时（vite 之前）就读走 manifest.json 并缓存成进程级 once，
    // 本插件写盘发生在 configResolved，永远晚一步 —— 改了 manifest.config.ts 后，本次编译用的
    // 仍是磁盘上的旧 manifest.json，要再跑一次才生效。所以 manifest.json 必须跟着配置一起提交
    // （尤其发版前：它决定产物里的 appid / versionCode）。
    UniManifest(manifestPluginOptions),
    uni(),
    ...weappTailwindcssPlugins,
    ...isVisualizer ? [
      visualizer({
        filename: resolve2(projectRoot2, "stats.html"),
        title: "unibestX \u4EA7\u7269\u4F53\u79EF\u5206\u6790\u62A5\u544A",
        open: process9.env.VISUALIZER_OPEN ? process9.env.VISUALIZER_OPEN === "true" : true,
        gzipSize: true,
        brotliSize: true
      })
    ] : [],
    // 构建元信息自动注入插件：向 HTML 注入 meta[name="app-info"]、全局变量 __APP_INFO__ 与控制台徽标
    vitePluginAppinfo({
      enableLog: true,
      enableMeta: true,
      enableGlobal: true
    }),
    // 静态资源自动化压缩插件：在构建阶段压缩打包图片资源
    ...isBuild ? [
      ViteImageOptimizer({
        png: { quality: 80, compressionLevel: 9 },
        jpeg: { quality: 80 },
        jpg: { quality: 80 },
        webp: { quality: 80 },
        logStats: true
      })
    ] : [],
    // 本地 Mock 中间件插件：支持纯前端离线联调（VITE_USE_MOCK=true / pnpm dev:mock）
    ...isMock ? [
      viteMockServe({
        mockPath: resolve2(projectRoot2, "mock"),
        enable: true,
        watchFiles: true,
        logger: true
      })
    ] : [],
    // 本地 Mock / 代理模式终端状态提示插件（通过 configResolved 钩子确保在 HBuilderX 编译输出中稳定打印）
    {
      name: "unibestx:mock-tip",
      configResolved() {
        if (!isBuild) {
          if (isMock) {
            console.log("\u2714 [mock] \u672C\u5730 Mock \u670D\u52A1\u5DF2\u5F00\u542F (vite-plugin-mock)\uFF0C\u5DF2\u81EA\u52A8\u5207\u6362\u4E3A H5 \u4EE3\u7406\u6A21\u5F0F (VITE_H5_USE_PROXY=true)");
          } else {
            console.log(isProxy ? "\u2139 [mock] \u672C\u5730 Mock \u670D\u52A1\u5DF2\u5173\u95ED\uFF08H5 \u4EE3\u7406\u6A21\u5F0F\u751F\u6548\u4E2D\uFF09" : "\u2139 [mock] \u672C\u5730 Mock \u670D\u52A1\u5DF2\u5173\u95ED\uFF08\u76F4\u8FDE\u6A21\u5F0F\uFF09");
          }
        }
      }
    },
    // 移动端真机调试工具 vConsole（仅在 Web/H5 且开启时注入，如 pnpm dev:vconsole）
    ...isVConsole ? [
      viteVConsole({
        entry: [
          resolve2(projectRoot2, "main.uts"),
          resolve2(projectRoot2, "main")
        ],
        enabled: isVConsole,
        config: {
          maxLogNumber: 1e3,
          theme: "dark"
        },
        customHide: 'location.href.includes("vconsole=false")'
      })
    ] : []
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvdml0ZS5jb25maWcudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy9yb290LXBsdWdpbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3BhZ2VzLWpzb24tdXRpbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3ZpdGUtcGx1Z2luLWNsZWFuLWxvZ2dlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3ZpdGUtcGx1Z2luLWVkaXRvci12ZXJzaW9uLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnMvdml0ZS1wbHVnaW4taDUtb3B0aW1pemUtZGVwcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3VuaS1sYXlvdXRzLXBsdWdpbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3ZpdGUtcGx1Z2luLXRhYmJhci12aWV3cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3BhZ2VzLW1ldGEtY2FjaGUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy92aXRlLXBsdWdpbi11bmktcGFnZXMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy92aXRlLXBsdWdpbi11bmktcGFnZXMtc2FuZGJveC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3ZpdGUtcGx1Z2luLXVuaS1wYWdlcy10YWJiYXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy92aXRlLXBsdWdpbi11bmktcGFnZXMtcm91dGUtdGFibGUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy92aXRlLXBsdWdpbi1hbGlwYXktdGFiYmFyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnMvdml0ZS1wbHVnaW4taHRtbC10by11bmkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFhcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgZnMgZnJvbSAnbm9kZTpmcyc7XG5pbXBvcnQgeyBkaXJuYW1lLCByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnO1xuaW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgdW5pRWFzeWNvbVBsdWdpbiB9IGZyb20gJ0BkY2xvdWRpby91bmktY2xpLXNoYXJlZC9kaXN0L3ZpdGUvcGx1Z2lucy9lYXN5Y29tLmpzJztcbmltcG9ydCB7IFVOSV9FQVNZQ09NX0VYQ0xVREUgfSBmcm9tICdAZGNsb3VkaW8vdW5pLWNsaS1zaGFyZWQnO1xuaW1wb3J0IHVuaU1vZHVsZSBmcm9tICdAZGNsb3VkaW8vdml0ZS1wbHVnaW4tdW5pJztcbmltcG9ydCBVbmlNYW5pZmVzdCBmcm9tICdAdW5pLWhlbHBlci92aXRlLXBsdWdpbi11bmktbWFuaWZlc3QnO1xuaW1wb3J0IHsgdW5pQXBwWCB9IGZyb20gJ3dlYXBwLXRhaWx3aW5kY3NzL3ByZXNldHMnO1xuaW1wb3J0IHsgV2VhcHBUYWlsd2luZGNzcyB9IGZyb20gJ3dlYXBwLXRhaWx3aW5kY3NzL3ZpdGUnO1xuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tdmlzdWFsaXplcic7XG5pbXBvcnQgdW5pUm9vdFggZnJvbSAnLi9wbHVnaW5zL3Jvb3QtcGx1Z2luJztcbmltcG9ydCBjbGVhbkxvZ2dlclBsdWdpbiBmcm9tICcuL3BsdWdpbnMvdml0ZS1wbHVnaW4tY2xlYW4tbG9nZ2VyJztcbmltcG9ydCBlZGl0b3JWZXJzaW9uUGx1Z2luIGZyb20gJy4vcGx1Z2lucy92aXRlLXBsdWdpbi1lZGl0b3ItdmVyc2lvbic7XG5pbXBvcnQgaDVPcHRpbWl6ZURlcHNQbHVnaW4gZnJvbSAnLi9wbHVnaW5zL3ZpdGUtcGx1Z2luLWg1LW9wdGltaXplLWRlcHMnO1xuaW1wb3J0IHVuaUxheW91dHNQbHVnaW4gZnJvbSAnLi9wbHVnaW5zL3VuaS1sYXlvdXRzLXBsdWdpbic7XG5pbXBvcnQgdGFiYmFyVmlld3NQbHVnaW4gZnJvbSAnLi9wbHVnaW5zL3ZpdGUtcGx1Z2luLXRhYmJhci12aWV3cyc7XG5pbXBvcnQgdW5pUGFnZXNQbHVnaW4gZnJvbSAnLi9wbHVnaW5zL3ZpdGUtcGx1Z2luLXVuaS1wYWdlcyc7XG5pbXBvcnQgdW5pUGFnZXNTYW5kYm94UGx1Z2luIGZyb20gJy4vcGx1Z2lucy92aXRlLXBsdWdpbi11bmktcGFnZXMtc2FuZGJveCc7XG5pbXBvcnQgdW5pUGFnZXNUYWJiYXJQbHVnaW4gZnJvbSAnLi9wbHVnaW5zL3ZpdGUtcGx1Z2luLXVuaS1wYWdlcy10YWJiYXInO1xuaW1wb3J0IHVuaVBhZ2VzUm91dGVUYWJsZVBsdWdpbiBmcm9tICcuL3BsdWdpbnMvdml0ZS1wbHVnaW4tdW5pLXBhZ2VzLXJvdXRlLXRhYmxlJztcbmltcG9ydCBhbGlwYXlDdXN0b21UYWJiYXJQbHVnaW4gZnJvbSAnLi9wbHVnaW5zL3ZpdGUtcGx1Z2luLWFsaXBheS10YWJiYXInO1xuaW1wb3J0IGh0bWxUb1VuaVBsdWdpbiBmcm9tICcuL3BsdWdpbnMvdml0ZS1wbHVnaW4taHRtbC10by11bmknO1xuaW1wb3J0IHsgZXhlY1N5bmMgfSBmcm9tICdub2RlOmNoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHsgdml0ZU1vY2tTZXJ2ZSB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snO1xuaW1wb3J0IHsgdml0ZVZDb25zb2xlIH0gZnJvbSAndml0ZS1wbHVnaW4tdmNvbnNvbGUnO1xuaW1wb3J0IHZpdGVQbHVnaW5BcHBpbmZvIGZyb20gJ3ZpdGUtcGx1Z2luLWJ1aWxkLWluZm8nO1xuaW1wb3J0IHsgVml0ZUltYWdlT3B0aW1pemVyIH0gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2Utb3B0aW1pemVyJztcblxuY29uc3QgdW5pID0gKHVuaU1vZHVsZSBhcyB0eXBlb2YgdW5pTW9kdWxlICYgeyBkZWZhdWx0PzogdHlwZW9mIHVuaU1vZHVsZSB9KS5kZWZhdWx0ID8/IHVuaU1vZHVsZTtcbmNvbnN0IHByb2plY3RSb290ID0gZGlybmFtZShmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCkpO1xuXG4vKipcbiAqIG1hbmlmZXN0LmNvbmZpZy50cyBcdTIxOTIgbWFuaWZlc3QuanNvbiBcdTc2ODRcdTc1MUZcdTYyMTBcdTkwMDlcdTk4NzlcdTMwMDJcbiAqXG4gKiBvdXREaXIgXHU2NjNFXHU1RjBGXHU5NDg5XHU1NzI4XHU5ODc5XHU3NkVFXHU2ODM5XHVGRjFBXHU2NjZFXHU5MDFBIHVuaS1hcHAgXHU1REU1XHU3QTBCXHU3Njg0XHU4RjkzXHU1MTY1XHU3NkVFXHU1RjU1XHU2NjJGIGBzcmMvYFx1RkYwQ1x1NEY0NiB1bmliZXN0WCBcdTY2MkYgSEJ1aWxkZXJYIFx1NURFNVx1N0EwQlx1RkYwQ1xuICogXHU5ODc5XHU3NkVFXHU2ODM5XHU1QzMxXHU2NjJGXHU4RjkzXHU1MTY1XHU3NkVFXHU1RjU1XHVGRjA4bWFuaWZlc3QuanNvbiAvIHBhZ2VzLmpzb24gLyBBcHAudXZ1ZSBcdTkwRkRcdTU3MjhcdTY4MzlcdTRFMEFcdUZGMDlcdUZGMENcdTRGOURcdThENTYgVU5JX0lOUFVUX0RJUiBcdThGREZcdTY1RTlcdThFMjlcdTdBN0FcdTMwMDJcbiAqIFRhYiBcdTdGMjlcdThGREIgKyBcdTg4NjVcdTlGNTBcdTY3MkJcdTVDM0VcdTYzNjJcdTg4NENcdTY2MkZcdTRFM0FcdTRFODZcdThEMzRcdTU0MDggSEJ1aWxkZXJYIFx1ODFFQVx1NURGMVx1NTE5OVx1NTFGQVx1NzY4NFx1NjgzQ1x1NUYwRlx1RkYxQVx1N0YxNlx1OEY5MVx1NTY2OFx1NzU0Q1x1OTc2Mlx1NTRFQVx1NTkyOVx1NTZERVx1NTE5OVx1NEU4NiBtYW5pZmVzdC5qc29uXHVGRjBDXG4gKiBcdTRFNUZcdTRFMERcdTRGMUFcdTU2RTBcdTRFM0FcdTY4M0NcdTVGMEZcdTVERUVcdTVGMDJcdTRFQTdcdTc1MUZcdTZFRTFcdTVDNEZcdTU2NkFcdTk3RjMgZGlmZlx1MzAwMlxuICpcbiAqIFx1NjgwN1x1NkNFOFx1N0M3Qlx1NTc4Qlx1NjYyRlx1NUZDNVx1ODk4MVx1NzY4NFx1RkYxQVx1NEUwRFx1NjgwN1x1NkNFOFx1NjVGNiBgZW9sYCBcdTRGMUFcdTg4QUJcdTYzQThcdTYyMTBcdTVCQkRcdTZDREJcdTc2ODQgc3RyaW5nXHVGRjBDXHU0RjIwXHU3RUQ5IFVuaU1hbmlmZXN0KCkgXHU2MkE1IFRTMjM0NVxuICogXHVGRjA4XHU4OTgxXHU2QzQyICdcXG4nIHwgJ1xcclxcbicgXHU1QjU3XHU5NzYyXHU5MUNGXHVGRjA5XHUzMDAyXG4gKi9cbmNvbnN0IG1hbmlmZXN0UGx1Z2luT3B0aW9uczogaW1wb3J0KCdAdW5pLWhlbHBlci92aXRlLXBsdWdpbi11bmktbWFuaWZlc3QnKS5Vc2VyT3B0aW9ucyA9IHtcbiAgY3dkOiBwcm9qZWN0Um9vdCxcbiAgb3V0RGlyOiBwcm9qZWN0Um9vdCxcbiAgaW5kZW50OiAnXFx0JyxcbiAgZW9sOiAnXFxuJyxcbiAgaW5zZXJ0RmluYWxOZXdsaW5lOiB0cnVlXG59O1xuXG4vLyBcdThCRkJcdTUzRDYgcGFja2FnZS5qc29uIFx1NkEyMVx1Njc3Rlx1NzI0OFx1NjcyQ1x1NEUwRSBHaXQgXHU1MTQzXHU0RkUxXHU2MDZGXHVGRjBDXHU3RjE2XHU4QkQxXHU5NjM2XHU2QkI1XHU2Q0U4XHU1MTY1XHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXHU0RjlCIGltcG9ydC5tZXRhLmVudiBcdTUxNjhcdTdBRUZcdTVCODlcdTUxNjhcdThCQkZcdTk1RUVcbmxldCBwa2dWZXJzaW9uID0gJzEuMC4wJztcbnRyeSB7XG4gIGNvbnN0IHBrZ1JhdyA9IGZzLnJlYWRGaWxlU3luYyhyZXNvbHZlKHByb2plY3RSb290LCAncGFja2FnZS5qc29uJyksICd1dGYtOCcpO1xuICBjb25zdCBwa2cgPSBKU09OLnBhcnNlKHBrZ1Jhdyk7XG4gIHBrZ1ZlcnNpb24gPSBwa2cudmVyc2lvbiA/PyAnMS4wLjAnO1xufVxuY2F0Y2gge1xuICBwa2dWZXJzaW9uID0gJzEuMC4wJztcbn1cbnByb2Nlc3MuZW52LlZJVEVfUEtHX1ZFUlNJT04gPSBwa2dWZXJzaW9uO1xucHJvY2Vzcy5lbnYuVklURV9URU1QTEFURV9WRVJTSU9OID0gcGtnVmVyc2lvbjtcblxudHJ5IHtcbiAgcHJvY2Vzcy5lbnYuVklURV9HSVRfQ09NTUlUX0hBU0ggPSBleGVjU3luYygnZ2l0IHJldi1wYXJzZSAtLXNob3J0IEhFQUQnLCB7IHN0ZGlvOiBbJ3BpcGUnLCAncGlwZScsICdpZ25vcmUnXSB9KS50b1N0cmluZygpLnRyaW0oKTtcbiAgcHJvY2Vzcy5lbnYuVklURV9HSVRfQlJBTkNIID0gZXhlY1N5bmMoJ2dpdCByZXYtcGFyc2UgLS1hYmJyZXYtcmVmIEhFQUQnLCB7IHN0ZGlvOiBbJ3BpcGUnLCAncGlwZScsICdpZ25vcmUnXSB9KS50b1N0cmluZygpLnRyaW0oKTtcbn1cbmNhdGNoIHtcbiAgcHJvY2Vzcy5lbnYuVklURV9HSVRfQ09NTUlUX0hBU0ggPSAndW5rbm93bic7XG4gIHByb2Nlc3MuZW52LlZJVEVfR0lUX0JSQU5DSCA9ICd1bmtub3duJztcbn1cbnByb2Nlc3MuZW52LlZJVEVfQlVJTERfVElNRSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcblxuY29uc3QgaXNCdWlsZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgfHwgcHJvY2Vzcy5hcmd2LmluY2x1ZGVzKCdidWlsZCcpO1xuY29uc3QgZGVmYXVsdE1vZGUgPSBpc0J1aWxkID8gJ3Byb2R1Y3Rpb24nIDogJ2RldmVsb3BtZW50JztcbmNvbnN0IG1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBkZWZhdWx0TW9kZTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WID0gbW9kZTtcblxuY29uc3QgbG9hZGVkRW52ID0gbG9hZEVudihtb2RlLCBwcm9qZWN0Um9vdCwgJycpO1xuLy8gQ0xJIFx1NjYzRVx1NUYwRlx1NEYyMFx1NTE2NVx1NzY4NFx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlx1RkYwOFx1NTk4MiBWSVRFX1VTRV9NT0NLPXRydWUgLyBWSVRFX0g1X1VTRV9QUk9YWT10cnVlXHVGRjA5XHU0RjE4XHU1MTQ4XHU0RThFIC5lbnYgXHU5NzU5XHU2MDAxXHU2NTg3XHU0RUY2XHVGRjBDXHU5MDdGXHU1MTREXHU4OEFCXHU5RUQ4XHU4QkE0XHU1MDNDXHU1MUIyXHU2Mzg5XG5jb25zdCBlbnYgPSB7IC4uLmxvYWRlZEVudiwgLi4ucHJvY2Vzcy5lbnYgfTtcblxuY29uc3QgaXNWaXN1YWxpemVyID0gZW52LlZJU1VBTElaRVIgPT09ICd0cnVlJyB8fCBwcm9jZXNzLmFyZ3YuaW5jbHVkZXMoJy0tdmlzdWFsaXplcicpO1xuXG5mdW5jdGlvbiBjaGVja01vY2tBY3RpdmUoKTogYm9vbGVhbiB7XG4gIGlmIChlbnYuVklURV9VU0VfTU9DSyA9PT0gJ3RydWUnIHx8IHByb2Nlc3MuYXJndi5pbmNsdWRlcygnLS1tb2NrJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGFjdGl2ZUZpbGUgPSByZXNvbHZlKHByb2plY3RSb290LCAnbm9kZV9tb2R1bGVzLy5jYWNoZS9tb2NrLWFjdGl2ZS5qc29uJyk7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoYWN0aXZlRmlsZSkpIHtcbiAgICAgIGNvbnN0IHJhdyA9IGZzLnJlYWRGaWxlU3luYyhhY3RpdmVGaWxlLCAndXRmLTgnKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJhdyk7XG4gICAgICBpZiAoZGF0YSAmJiB0eXBlb2YgZGF0YS5waWQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcHJvY2Vzcy5raWxsKGRhdGEucGlkLCAwKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgZnMudW5saW5rU3luYyhhY3RpdmVGaWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjYXRjaCB7fVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmNvbnN0IGlzTW9jayA9IGNoZWNrTW9ja0FjdGl2ZSgpO1xuaWYgKGlzTW9jaykge1xuICBlbnYuVklURV9VU0VfTU9DSyA9ICd0cnVlJztcbiAgcHJvY2Vzcy5lbnYuVklURV9VU0VfTU9DSyA9ICd0cnVlJztcbn1cblxuLy8gXHVEODNEXHVERTgwIFx1NjcyQ1x1NTczMCBNb2NrIFx1NkEyMVx1NUYwRlx1NjIxNlx1NjYzRVx1NUYwRlx1OTE0RFx1N0Y2RVx1NEVFM1x1NzQwNlx1NjVGNlx1RkYwQ1x1ODFFQVx1NTJBOFx1NTIwN1x1NjM2Mlx1NEUzQSBINSBcdTUzQ0RcdTU0MTFcdTRFRTNcdTc0MDZcdTZBMjFcdTVGMEZcdUZGMDhcdThENzAgL2FwaSBcdTUyNERcdTdGMDBcdUZGMENcdTk2RjZcdTVGQzNcdTY2N0FcdThEMUZcdTYyQzVcdUZGMDlcbmNvbnN0IGlzUHJveHkgPSBpc01vY2sgfHwgZW52LlZJVEVfSDVfVVNFX1BST1hZID09PSAndHJ1ZSc7XG5pZiAoaXNQcm94eSkge1xuICBlbnYuVklURV9INV9VU0VfUFJPWFkgPSAndHJ1ZSc7XG4gIHByb2Nlc3MuZW52LlZJVEVfSDVfVVNFX1BST1hZID0gJ3RydWUnO1xufVxuXG4vLyBcdTU0MENcdTZCNjVcdTZDRThcdTUxNjUgcHJvY2Vzcy5lbnZcdUZGMENcdTc4NkVcdTRGRERcdTY3ODRcdTVFRkFcdTY3MUZcdTU0MDRcdTYzRDJcdTRFRjZcdUZGMDhcdTUzMDVcdTYyRUMgVW5pTWFuaWZlc3QgXHU4OUUzXHU2NzkwIG1hbmlmZXN0LmNvbmZpZy50c1x1RkYwOVx1NjVFMFx1OEJCQVx1NEVDRVx1NEY1NVx1NTkwNFx1NTQyRlx1NTJBOFx1OTBGRFx1ODBGRFx1OEJGQlx1NTNENlx1NTE2OFx1OTFDRlx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlxuT2JqZWN0LmFzc2lnbihwcm9jZXNzLmVudiwgZW52KTtcblxuY29uc3QgaXNXZWIgPSBlbnYuVU5JX1BMQVRGT1JNID09PSAnd2ViJyB8fCBlbnYuVU5JX1BMQVRGT1JNID09PSAnaDUnO1xuXG4vLyBcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTdFRERcdTVCRjlcdTRFMjVcdTc5ODFcdTUzMDVcdTU0MkIgdkNvbnNvbGVcdUZGMDhcdTUzNzNcdTRGN0ZcdTY2M0VcdTVGMEZcdTkxNERcdTdGNkVcdTRFODZcdTVGMDBcdTUxNzNcdTYyMTZcdTUzQzJcdTY1NzBcdTRFNUZcdTVGM0FcdTUyMzZcdTVDNEZcdTg1M0RcdUZGMENcdTk2MzJcdTZCNjJcdTdFQkZcdTRFMEFcdTZDQzRcdTZGMEZcdUZGMDlcbmNvbnN0IGlzUHJvZHVjdGlvbiA9IGVudi5WSVRFX0VOVl9UWVBFID09PSAncHJvZHVjdGlvbidcbiAgfHwgKGlzQnVpbGQgJiYgZW52LlZJVEVfRU5WX1RZUEUgIT09ICd0ZXN0Jyk7XG5cbmNvbnN0IGlzVkNvbnNvbGUgPSAhaXNQcm9kdWN0aW9uICYmIGlzV2ViICYmIChcbiAgZW52LlZJVEVfU0hPV19WQ09OU09MRSA9PT0gJ3RydWUnIHx8IHByb2Nlc3MuYXJndi5pbmNsdWRlcygnLS12Y29uc29sZScpXG4pO1xuXG5jb25zdCB3ZWFwcFRhaWx3aW5kY3NzUGx1Z2luczogUGx1Z2luT3B0aW9uW10gPSAoV2VhcHBUYWlsd2luZGNzcyhcbiAgdW5pQXBwWCh7XG4gICAgYmFzZTogcHJvamVjdFJvb3QsXG4gICAgY3NzRW50cmllczogW3Jlc29sdmUocHJvamVjdFJvb3QsICdtYWluLmNzcycpXSxcbiAgICByZW0ycnB4OiB0cnVlLFxuICAgIGN1c3RvbUF0dHJpYnV0ZXM6IHtcbiAgICAgICcqJzogWy9edC1jbGFzcyg/Oi0uKyk/JC9dXG4gICAgfSxcbiAgICBjb21wb25lbnRMb2NhbFN0eWxlczoge1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIG9ubHlXaGVuU3R5bGVJc29sYXRpb25WZXJzaW9uMjogdHJ1ZSxcbiAgICAgIGNvbXBvbmVudE1hdGNoZXI6IChpZDogc3RyaW5nKSA9PiAvKD86XnxbL1xcXFxdKXNyY1svXFxcXF0oPzpwYWdlc3xzdWJ8Y29tcG9uZW50cylbL1xcXFxdLio/XFwuKD86dXZ1ZXxudnVlKSQvLnRlc3QoaWQpXG4gICAgfSxcbiAgICB1dnVlVW5zdXBwb3J0ZWQ6ICd3YXJuJyxcbiAgICBjc3NTb3VyY2VUcmFjZTogIWlzQnVpbGRcbiAgfSBhcyBhbnkpXG4pID8/IFtdKSBhcyBQbHVnaW5PcHRpb25bXTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYmFzZTogJy4vJyxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiAocHJvY2Vzcy5lbnYuVU5JX1BMQVRGT1JNID09PSAnd2ViJyB8fCBwcm9jZXNzLmVudi5VTklfUExBVEZPUk0gPT09ICdoNScpXG4gICAgICA/IFtcbiAgICAgICAgICB7IGZpbmQ6IC9ednVlJC8sIHJlcGxhY2VtZW50OiAnQGRjbG91ZGlvL3VuaS1oNS12dWUnIH1cbiAgICAgICAgXVxuICAgICAgOiBbXVxuICB9LFxuICBkZWZpbmU6IHtcbiAgICAnX19YX1NUWUxFX0lTT0xBVElPTl9fJzogZmFsc2UsXG4gICAgJ19fWF9TVFlMRV9JU09MQVRJT05fVVBfQVJST1dfXyc6IGZhbHNlLFxuICAgICdpbXBvcnQubWV0YS5lbnYuVklURV9URU1QTEFURV9WRVJTSU9OJzogSlNPTi5zdHJpbmdpZnkocGtnVmVyc2lvbiksXG4gICAgJ2ltcG9ydC5tZXRhLmVudi5WSVRFX1BLR19WRVJTSU9OJzogSlNPTi5zdHJpbmdpZnkocGtnVmVyc2lvbiksXG4gICAgLi4uKGlzTW9jayA/IHsgJ2ltcG9ydC5tZXRhLmVudi5WSVRFX1VTRV9NT0NLJzogSlNPTi5zdHJpbmdpZnkoJ3RydWUnKSB9IDoge30pLFxuICAgIC4uLihpc1Byb3h5ID8geyAnaW1wb3J0Lm1ldGEuZW52LlZJVEVfSDVfVVNFX1BST1hZJzogSlNPTi5zdHJpbmdpZnkoJ3RydWUnKSB9IDoge30pXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6ICcwLjAuMC4wJyxcbiAgICBwb3J0OiA5NTI3LFxuICAgIC8vIEg1IFx1OEQ3MFx1NEVFM1x1NzQwNlx1NkEyMVx1NUYwRlx1NjVGNlx1NzUxRlx1NjU0OFx1RkYwOC5lbnYgXHU5MUNDIFZJVEVfSDVfVVNFX1BST1hZPXRydWVcdUZGMDlcdUZGMUJcdTc2RjRcdThGREVcdTZBMjFcdTVGMEZcdUZGMDhmYWxzZVx1RkYwOVx1OEJGN1x1NkM0Mlx1NEUwRFx1N0VDRlx1OEZDN1x1NkI2NFx1NEVFM1x1NzQwNlxuICAgIHByb3h5OiB7XG4gICAgICAnL2FwaSc6IHtcbiAgICAgICAgdGFyZ2V0OiBlbnYuVklURV9TRVJWRVJfQkFTRVVSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICByZXdyaXRlOiBwID0+IHAucmVwbGFjZSgvXlxcL2FwaS8sICcnKVxuICAgICAgfSxcbiAgICAgICcvYXBpLXNlY29uZGFyeSc6IHtcbiAgICAgICAgdGFyZ2V0OiBlbnYuVklURV9TRVJWRVJfQkFTRVVSTF9TRUNPTkRBUlkgfHwgZW52LlZJVEVfR0FURVdBWV9CQVNFVVJMIHx8IGVudi5WSVRFX1NFUlZFUl9CQVNFVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjgwODAnLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IHAgPT4gcC5yZXBsYWNlKC9eXFwvYXBpLXNlY29uZGFyeS8sICcnKVxuICAgICAgfVxuICAgIH0sXG4gICAgaG1yOiB0cnVlLFxuICAgIHdhdGNoOiB7XG4gICAgICBpZ25vcmVkOiBbXG4gICAgICAgICcqKi9ub2RlX21vZHVsZXMvKionLFxuICAgICAgICAnKiovLmdpdC8qKicsXG4gICAgICAgICcqKi9kaXN0LyoqJyxcbiAgICAgICAgJyoqL3VucGFja2FnZS8qKidcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgc291cmNlbWFwOiBmYWxzZSAvLyBcdTUxNzNcdTk1RUQgc291cmNlbWFwXHVGRjBDXHU4QjY2XHU1NDRBXHU3NkY0XHU2M0E1XHU2RDg4XHU1OTMxXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICAvLyBcdTdGMTZcdThGOTFcdTU2NjhcdTcyNDhcdTY3MkNcdTVCRjlcdTlGNTBcdTYzRDBcdTc5M0FcdUZGMUFIQnVpbGRlclggLyBIQnVpbGRlclYgXHU1MzQ3XHU3RUE3XHU1NDBFXHVGRjBDcGFja2FnZS5qc29uIHBpbiBcdTc2ODQgQGRjbG91ZGlvLypcbiAgICAvLyBcdTUzRUZcdTgwRkRcdThGRDhcdTY2MkZcdTY1RTdcdTcyNDhcdTMwMDJcdTUzRUFcdTYzRDBcdTc5M0FcdTRFMERcdTk2M0JcdTY1QUQgXHUyMDE0XHUyMDE0IFx1NzI0OFx1NjcyQ1x1NEUwRFx1NEUwMFx1ODFGNFx1NjcyQVx1NUZDNVx1N0FDQlx1NTIzQlx1NjJBNVx1OTUxOVx1RkYwQ1x1NEY0Nlx1NjJBNVx1OTUxOVx1NjVGNlx1NUY4MFx1NUY4MFx1NjYyRiBBUEkgXHU4ODRDXHU0RTNBXHU1REVFXHU1RjAyXHUzMDAxXG4gICAgLy8gXHU3QzdCXHU1NzhCXHU0RTBEXHU1MzM5XHU5MTREXHU4RkQ5XHU3QzdCXHU3NzBCXHU0RTBEXHU1MUZBXHU2ODM5XHU1NkUwXHU3Njg0XHU5NUVFXHU5ODk4XHVGRjBDXHU2MjQwXHU0RUU1XHU2QkNGXHU2QjIxXHU5MEZEXHU2M0QwXHU5MTkyXHU0RTAwXHU0RTBCXHUzMDAyXG4gICAgLy8gXHU2Q0ExXHU4OEM1XHU3RjE2XHU4RjkxXHU1NjY4XHUzMDAxXHU2MjE2IHBhY2thZ2UuanNvbiBcdTZDQTFcdTY3MDlcdThGRDlcdTUxRTBcdTRFMkEgcGluIFx1NzY4NFx1NzNBRlx1NTg4M1x1NEYxQVx1OTc1OVx1OUVEOFx1OERGM1x1OEZDN1x1MzAwMlxuICAgIC8vIFx1ODFFQVx1NTJBOFx1NTQwQ1x1NkI2NVx1NTcyOCBucG0gXHU4MTFBXHU2NzJDXHU1QzQyXHVGRjA4cG5wbSBkZXYgLyBidWlsZDoqIFx1NTI0RFx1OTc2Mlx1NjMwMlx1NEU4NiAtLWVuc3VyZVx1RkYwOVx1MzAwMlxuICAgIGVkaXRvclZlcnNpb25QbHVnaW4oKSxcbiAgICAvLyBcdTYzQTdcdTUyMzZcdTUzRjBcdThCNjZcdTU0NEFcdTRFMEVcdTRFRTNcdTc4MDFcdTcyNDdcdTZCQjVcdTUxQzBcdTUzMTZcdTYzRDJcdTRFRjZcdUZGMUFcdTYyRTZcdTYyMkEgVml0ZS9Sb2xsdXAvRENsb3VkIFx1N0YxNlx1OEJEMVx1NTQ0QVx1OEI2Nlx1OEY5M1x1NTFGQVxuICAgIGNsZWFuTG9nZ2VyUGx1Z2luKHsgc2lsZW5jZUFsbDogdHJ1ZSB9KSxcbiAgICAvLyBINSBcdTUxQjdcdTU0MkZcdTUyQThcdTYwMjdcdTgwRkRcdTRGMThcdTUzMTZcdUZGMUFcdTg5ODZcdTc2RDYgRENsb3VkIFx1NUJGOVx1NEY5RFx1OEQ1Nlx1OTg4NFx1Njc4NFx1NUVGQVx1NzY4NFx1Nzk4MVx1NzUyOFx1RkYwQ1x1NUMwNlx1NjgzOFx1NUZDM1x1NTkyN1x1NEY1M1x1NzlFRlx1NEY5RFx1OEQ1Nlx1N0VCM1x1NTE2NSBlc2J1aWxkIFx1OTg4NFx1Njc4NFx1NUVGQVxuICAgIC8vIGV4dHJhSW5jbHVkZXMgXHU5MDBGXHU0RjIwIGlzVkNvbnNvbGUgXHU2NUY2XHU3Njg0IHZjb25zb2xlXHVGRjFBdml0ZS1wbHVnaW4tdmNvbnNvbGUgXHU1NzI4IHRyYW5zZm9ybSBcdTk0QTlcdTVCNTBcdTkxQ0NcdTUyQThcdTYwMDFcdTZDRThcdTUxNjVcbiAgICAvLyBgaW1wb3J0IFZDb25zb2xlIGZyb20gJ3Zjb25zb2xlJ2AgXHU1MjMwIG1haW4udXRzXHVGRjBDc2Nhbm5lciBcdTc3MEJcdTRFMERcdTUyMzBcdUZGMENcdTk3MDBcdTY2M0VcdTVGMEYgaW5jbHVkZSBcdThCQTkgc2Nhbm5lciBcdTk4ODRcdTY3ODRcdTVFRkFcdTMwMDJcbiAgICBoNU9wdGltaXplRGVwc1BsdWdpbih7IGRlYnVnOiBmYWxzZSwgZXh0cmFJbmNsdWRlczogaXNWQ29uc29sZSA/IFsndmNvbnNvbGUnXSA6IFtdIH0pLFxuICAgIC8vIFRhYiBcdTk4NzVcdTk3NjJcdTg4NjVcdTVFRkFcdTRFMEUgVGFiVmlld3MgXHU3NTFGXHU2MjEwXHU2M0QyXHU0RUY2XHUzMDAyXG4gICAgLy8gXHU1RkM1XHU5ODdCXHU2MzkyXHU1NzI4IHVuaS1wYWdlcyBcdTRFNEJcdTUyNERcdUZGMUFjb25maWdSZXNvbHZlZCBcdTk2MzZcdTZCQjVcdTUxNDhcdTg4NjVcdTlGNTBcdTdGM0FcdTU5MzFcdTc2ODQgVGFiIFx1OTg3NVx1OTc2Mlx1RkYwQ1x1NjgzOFx1NUZDM1x1NjNEMlx1NEVGNlx1OTY4Rlx1NTQwRVx1NjI2Qlx1NjNDRlx1NjVGNlx1NjI0RFx1ODBGRFxuICAgIC8vIFx1NTcyOFx1NTQwQ1x1NEUwMFx1OEY2RVx1NjI4QVx1NjVCMFx1OTg3NVx1OTc2Mlx1NTE5OVx1NTE2NSBwYWdlcy5qc29uXHUzMDAyXHU1MjIwXHU5NjY0IFRhYiBcdTkxNERcdTdGNkVcdTRFMERcdTRGMUFcdTg5RTZcdTUzRDFcdTRFRkJcdTRGNTVcdTk4NzVcdTk3NjJcdTUyMjBcdTk2NjRcdTMwMDJcbiAgICB0YWJiYXJWaWV3c1BsdWdpbih7XG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgY29uZmlnRmlsZTogJ3NyYy90YWJiYXIvY29uZmlnLnV0cydcbiAgICB9KSxcbiAgICAvLyBcdTgxRUFcdTUyQThcdTYyNkJcdTYzQ0ZcdTRFMEVcdThERUZcdTc1MzFcdTc1MUZcdTYyMTBcdTYzRDJcdTRFRjZcdUZGMDhcdTU3RkFcdTRFOEUgcGFnZXMuY29uZmlnLmpzb24gKyBcdTk4NzVcdTk3NjJcdTUxODUgPHJvdXRlPi9kZWZpbmVQYWdlIFx1NThGMFx1NjYwRVx1RkYwOVxuICAgIHVuaVBhZ2VzUGx1Z2luKHtcbiAgICAgIC8vIFx1MzAxMFx1NjAzQlx1NjNBN1x1NUYwMFx1NTE3M1x1MzAxMVx1RkYxQVx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1NjNEMlx1NEVGNlx1ODFFQVx1NTJBOFx1NjI2Qlx1NjNDRlx1NEUwRSBwYWdlcy5qc29uIFx1NzUxRlx1NjIxMFx1RkYwOFx1OEJCRVx1NEUzQSBmYWxzZSBcdTUyMTlcdTVCOENcdTUxNjhcdTU5MzFcdTY1NDhcdUZGMENcdTRFMERcdTYyNkJcdTYzQ0ZcdTMwMDFcdTRFMERcdTUxOTlcdTUxNjUgcGFnZXMuanNvblx1MzAwMVx1NEUwRFx1NzZEMVx1NTQyQ1x1NjU4N1x1NEVGNlx1NTNEOFx1NTMxNlx1RkYwOVxuICAgICAgZW5hYmxlZDogdHJ1ZSxcblxuICAgICAgLy8gXHUzMDEwXHU0RTNCXHU1MzA1XHU2MjZCXHU2M0NGXHU3NkVFXHU1RjU1XHUzMDExXHVGRjFBXHU0RTNCXHU1MzA1XHU5ODc1XHU5NzYyXHU2ODM5XHU3NkVFXHU1RjU1XHVGRjA4XHU3NkY4XHU1QkY5XHU0RThFXHU5ODc5XHU3NkVFXHU2ODM5XHU3NkVFXHU1RjU1XHVGRjA5XHVGRjBDXHU5RUQ4XHU4QkE0ICdzcmMvcGFnZXMnXG4gICAgICBkaXI6ICdzcmMvcGFnZXMnLFxuXG4gICAgICAvLyBcdTMwMTBcdTUyMDZcdTUzMDVcdTYyNkJcdTYzQ0ZcdTc2RUVcdTVGNTVcdTMwMTFcdUZGMUFcdTUyMDZcdTUzMDVcdTY4MzlcdTc2RUVcdTVGNTVcdTY1NzBcdTdFQzRcdUZGMENcdTRFMERcdTgwRkRcdTY2MkZcdTRFM0JcdTUzMDVcdTc2RUVcdTVGNTVcdTc2ODRcdTVCNTBcdTc2RUVcdTVGNTVcdUZGMENcdTlFRDhcdThCQTQgW11cbiAgICAgIHN1YlBhY2thZ2VzOiBbJ3NyYy9zdWInXSxcblxuICAgICAgLy8gXHUzMDEwXHU1MjA2XHU1MzA1XHU1MjA3XHU1MjA2XHU2QTIxXHU1RjBGXHUzMDExXHVGRjFBJ3N1YmRpcnMnXHVGRjA4XHU5RUQ4XHU4QkE0XHU2M0E4XHU4MzUwXHVGRjBDXHU1QzA2IHN1YlBhY2thZ2VzIFx1NEUwQlx1NkJDRlx1NEUwMFx1NEUyQVx1NEUwMFx1N0VBN1x1NUI1MFx1NzZFRVx1NUY1NVx1ODFFQVx1NTJBOFx1NEY1Q1x1NEUzQVx1NzJFQ1x1N0FDQlx1NTIwNlx1NTMwNVx1RkYwQ1x1NUY3Qlx1NUU5NVx1OTA3Rlx1NTE0RFx1NUMwRlx1N0EwQlx1NUU4Rlx1NTM1NVx1NTMwNSAyTUIgXHU5NjUwXHU1MjM2XHVGRjA5fCAncm9vdCdcdUZGMDhcdTVDMDZcdTY1NzRcdTRFMkFcdTc2RUVcdTVGNTVcdTRGNUNcdTRFM0FcdTUzNTVcdTRFMDBcdTUyMDZcdTUzMDVcdUZGMDlcbiAgICAgIHN1YlBhY2thZ2VNb2RlOiAnc3ViZGlycycsXG5cbiAgICAgIC8vIFx1MzAxMFx1NjM5Mlx1OTY2NFx1NjI2Qlx1NjNDRlx1ODlDNFx1NTIxOVx1MzAxMVx1RkYxQUdsb2IgXHU1MzM5XHU5MTREXHU4OUM0XHU1MjE5XHU2NTcwXHU3RUM0XHVGRjBDXHU1MzM5XHU5MTREXHU1MjMwXHU3Njg0XHU2NTg3XHU0RUY2L1x1NzZFRVx1NUY1NVx1NEUwRFx1NEYxQVx1ODhBQlx1NUY1M1x1NEY1Q1x1OTg3NVx1OTc2Mlx1OERFRlx1NzUzMVx1NjI2Qlx1NjNDRlxuICAgICAgZXhjbHVkZTogW1xuICAgICAgICAnKiovY29tcG9uZW50cy8qKi8qLionLFxuICAgICAgICAnKiovdmlld3MvKiovKi4qJyxcbiAgICAgICAgJyoqL2NvbW1vbi8qKi8qLionLFxuICAgICAgICAnKiovbW9kdWxlcy8qKi8qLionLFxuICAgICAgICAnKiovZm9udC8qKi8qLionLFxuICAgICAgICAnKiovZm9udHMvKiovKi4qJyxcbiAgICAgICAgJyoqL2ltZy8qKi8qLionLFxuICAgICAgICAnKiovaW1ncy8qKi8qLionLFxuICAgICAgICAnKiovaW1hZ2UvKiovKi4qJyxcbiAgICAgICAgJyoqL2ltYWdlcy8qKi8qLionLFxuICAgICAgICAnKiovYXNzZXRzLyoqLyouKidcbiAgICAgIF0sXG5cbiAgICAgIC8vIFx1MzAxMFx1OEY5M1x1NTFGQVx1NjU4N1x1NEVGNlx1OERFRlx1NUY4NFx1MzAxMVx1RkYxQVx1NzUxRlx1NjIxMFx1NUU3Nlx1NTQwQ1x1NkI2NVx1NzY4NCBwYWdlcy5qc29uIFx1NzZGOFx1NUJGOVx1OERFRlx1NUY4NFx1RkYwQ1x1OUVEOFx1OEJBNCAncGFnZXMuanNvbidcbiAgICAgIG91dEZpbGU6ICdwYWdlcy5qc29uJyxcblxuICAgICAgLy8gXHUzMDEwXHU1N0ZBXHU3ODQwXHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2XHUzMDExXHVGRjFBXHU3NTI4XHU0RThFXHU3RUU3XHU2MjdGIGdsb2JhbFN0eWxlXHUzMDAxdGFiQmFyXHUzMDAxZWFzeWNvbSBcdTdCNDlcdTk3NTlcdTYwMDFcdTkxNERcdTdGNkVcdTc2ODRcdTU3RkFcdTUxQzZcdTY1ODdcdTRFRjZcdUZGMENcdTlFRDhcdThCQTQgJ3BhZ2VzLmNvbmZpZy5qc29uJ1xuICAgICAgY29uZmlnRmlsZTogJ3BhZ2VzLmNvbmZpZy5qc29uJyxcblxuICAgICAgLy8gXHUzMDEwXHU1RjNBXHU1MjM2XHU2MzA3XHU1QjlBXHU5OTk2XHU5ODc1XHUzMDExXHVGRjFBXHU4MkU1XHU2MzA3XHU1QjlBXHU1MjE5XHU0RjE4XHU1MTQ4XHU0RUU1XHU4QkU1XHU4REVGXHU3NTMxXHU0RTNBXHU0RTNCXHU1MzA1XHU3QjJDXHU0RTAwXHU0RTJBXHU5OTk2XHU5ODc1XHVGRjFCXHU3NTU5XHU3QTdBXHU2NUY2XHU5RUQ4XHU4QkE0XHU1M0Q2IHBhZ2VzLmNvbmZpZy5qc29uIFx1OTk5Nlx1OTg3OVx1NjIxNlx1NjI2Qlx1NjNDRlx1NzY4NFx1N0IyQ1x1NEUwMFx1OTg3OVxuICAgICAgaG9tZVBhZ2U6ICcnLFxuXG4gICAgICAvLyBcdTMwMTBcdTgxRUFcdTVCOUFcdTRFNDlcdTRFMEFcdTRFMEJcdTY1ODdcdTYyNjlcdTVDNTVcdTZDRThcdTUxNjVcdTMwMTFcdUZGMUFcdTU0MTEgZGVmaW5lUGFnZSgob3B0aW9ucykgPT4gLi4uKSBcdTc2ODQgb3B0aW9ucyBcdTZDRThcdTUxNjVcdTRFMUFcdTUyQTFcdTgxRUFcdTVCOUFcdTRFNDlcdTVDNUVcdTYwMjdcbiAgICAgIC8vIFx1NjUyRlx1NjMwMVx1OTc1OVx1NjAwMVx1NUJGOVx1OEM2MVx1NjIxNlx1NTFGRFx1NjU3MCAoX2Jhc2VDdHggPT4gKHsgLi4uIH0pKVx1RkYwQ1x1NTNFRlx1NTcyOFx1OTg3NVx1OTc2Mlx1NEUyRFx1ODlFM1x1Njc4NCBvcHRpb25zLnh4eCBcdThCRkJcdTUzRDZcbiAgICAgIGNvbnRleHQ6IF9iYXNlQ3R4ID0+ICh7XG4gICAgICAgIC8vIFx1NTNFRlx1ODFFQVx1NzUzMVx1NkNFOFx1NTE2NVx1NEUxQVx1NTJBMVx1NUUzOFx1OTFDRlx1MzAwMVx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlx1MzAwMVx1Njc4NFx1NUVGQVx1NTNDMlx1NjU3MFx1NjIxNlx1OEY4NVx1NTJBOVx1NjVCOVx1NkNENVxuICAgICAgICBhcHBOYW1lOiBlbnYuVklURV9BUFBfVElUTEUgfHwgJ3VuaWJlc3RYJyxcbiAgICAgICAgaXNQcm9kdWN0aW9uLFxuICAgICAgICBidWlsZFZlcnNpb246IGVudi5WSVRFX0FQUF9WRVJTSU9OIHx8IHByb2Nlc3MuZW52LlZJVEVfQVBQX1ZFUlNJT04gfHwgJzEuMC4wJyxcbiAgICAgICAgdGVtcGxhdGVWZXJzaW9uOiBwa2dWZXJzaW9uXG4gICAgICB9KVxuICAgIH0pLFxuICAgIC8vIHVuaS1wYWdlcyBcdTc2ODRcdTRFMDlcdTRFMkFcdTcyRUNcdTdBQ0JcdTUzNkJcdTY2MUZcdTYzRDJcdTRFRjZcdUZGMUFcdTU0MDRcdTgxRUFcdTRFMDBcdTRFMkFcdTY1ODdcdTRFRjZcdTMwMDFcdTU0MDRcdTgxRUFcdTcyRUNcdTdBQ0JcdTZDRThcdTUxOENcdUZGMENcdTY4MzhcdTVGQzNcdTYzRDJcdTRFRjZcdTkwMUFcdThGQzcgY29uZmlnUmVzb2x2ZWRcbiAgICAvLyBcdTRFQ0VcdTYzRDJcdTRFRjZcdTY1NzBcdTdFQzRcdTkxQ0NcdTUzRDFcdTczQjBcdTVCODNcdTRFRUNcdTY0M0FcdTVFMjZcdTc2ODQgdW5pUGFnZXNTdGFnZSBcdTVDNUVcdTYwMjdcdUZGMENcdTU3MjhcdTU0MENcdTRFMDBcdTZCMjFcdTc1MUZcdTYyMTAgcGFzcyBcdTUxODVcdTYzMDkgb3JkZXIgXHU0RjlEXHU2QjIxXHU4RkQwXHU4ODRDXHUzMDAyXG4gICAgLy8gXHU2Q0U4XHU2MTBGXHVGRjFBXHU1RkM1XHU5ODdCXHU2NUUwXHU2NzYxXHU0RUY2XHU1RTc2XHU1MjE3XHU2Q0U4XHU1MThDXHVGRjBDXHU3OTgxXHU2QjYyXHU1MTk5XHU2MjEwIGAuLi4oY29uZCA/IFt4KCldIDogW10pYFx1RkYwQ1x1NTQyNlx1NTIxOVx1NUJGOVx1NUU5NFx1NTI5Rlx1ODBGRFx1NEYxQVx1OTc1OVx1OUVEOFx1NTkzMVx1NjU0OFx1MzAwMlxuICAgIHVuaVBhZ2VzU2FuZGJveFBsdWdpbigpLCAvLyBcdTZDOTlcdTc2RDJcdTcyRUNcdTdBQ0JcdThDMDNcdThCRDVcdTZBMjFcdTVGMEZcdUZGMDhWSVRFX0RFVl9TQU5EQk9YIC8gZGVmaW5lUGFnZSh7IGRlYnVnIH0pXHVGRjA5XG4gICAgdW5pUGFnZXNUYWJiYXJQbHVnaW4oKSwgLy8gVGFiQmFyIFx1N0I1Nlx1NzU2NVx1RkYwOFZJVEVfVEFCQkFSX01PREUgMFx1MjAxMzRcdUZGMDlcbiAgICB1bmlQYWdlc1JvdXRlVGFibGVQbHVnaW4oKSwgLy8gXHU2M0QwXHU0RjlCIHZpcnR1YWw6dW5pLXBhZ2VzLXJvdXRlLXRhYmxlIFx1ODY1QVx1NjJERlx1NkEyMVx1NTc1N1x1RkYwOFx1OTg3NVx1OTc2Mlx1OERFRlx1NzUzMVx1ODg2OFx1NjU3MFx1NjM2RVx1NkU5MFx1RkYwOVxuICAgIGFsaXBheUN1c3RvbVRhYmJhclBsdWdpbigpLCAvLyBcdTY1MkZcdTRFRDhcdTVCOURcdTVDMEZcdTdBMEJcdTVFOEZcdTgxRUFcdTVCOUFcdTRFNDkgVGFiQmFyIFx1ODg2NVx1NEUwMVx1RkYwOFx1NkQ4OFx1OTY2NFx1NTM5Rlx1NzUxRlx1NUU5NVx1NUVBN1x1OTVFQVx1NzBDMVx1RkYwOVxuICAgIC8vIFx1NjI0Qlx1NTJBOFx1ODg2NVx1NTE0NSBlYXN5Y29tIFx1NjNEMlx1NEVGNlx1RkYwOFx1OTY1MFx1NTIzNlx1OTc1RVx1NUMwRlx1N0EwQlx1NUU4Rlx1N0FFRlx1NzUxRlx1NjU0OFx1RkYwQ1x1NTQyQiBBcHAgXHU0RTBFIFdlYlx1RkYwOVxuICAgIC8vIFx1OEJFNVx1NjNEMlx1NEVGNlx1NTE4NVx1OTBFOFx1NTQwRFx1NEUzQSB1bmk6YXBwLWVhc3ljb21cdUZGMENcdThEMUZcdThEMjNcdTU3MjggQXBwIFx1ODRCOFx1NkM3RFx1NkEyMVx1NUYwRlx1NEUwRSBXZWIgXHU3QUVGXHU2MjhBXHU2QTIxXHU2NzdGXHU5MUNDXHU3Njg0IGVhc3ljb20gXHU2ODA3XHU3QjdFXHU4RjZDXHU2MjEwXHU5NzU5XHU2MDAxIGltcG9ydFx1RkYxQlxuICAgIC8vIFx1NUMwRlx1N0EwQlx1NUU4Rlx1N0FFRlx1RkYwOG1wLSpcdUZGMDlcdTc1MzFcdTVCOThcdTY1QjlcdTdGMTZcdThCRDFcdTU2NjhcdTU3RkFcdTRFOEUgdXNpbmdDb21wb25lbnRzIFx1NTM5Rlx1NzUxRlx1NTkwNFx1NzQwNlx1RkYwQ1x1NjMwMlx1OEY3RFx1OEJFNVx1NjNEMlx1NEVGNlx1NEYxQVx1NUJGQ1x1ODFGNFx1N0VDNFx1NEVGNlx1ODhBQlx1OEY2Q1x1NEUzQVx1NjcyQVx1NzdFNVx1NTJBOFx1NjAwMVx1N0VDNFx1NEVGNlx1NUU3Nlx1NjJBNVx1OTUxOSByZXNvbHZlRHluYW1pY0NvbXBvbmVudFx1MzAwMlxuICAgIC4uLighcHJvY2Vzcy5lbnYuVU5JX1BMQVRGT1JNPy5zdGFydHNXaXRoKCdtcC0nKVxuICAgICAgPyBbdW5pRWFzeWNvbVBsdWdpbih7IGV4Y2x1ZGU6IFVOSV9FQVNZQ09NX0VYQ0xVREUgfSldXG4gICAgICA6IFtdKSxcbiAgICBodG1sVG9VbmlQbHVnaW4oKSxcbiAgICB1bmlMYXlvdXRzUGx1Z2luKHtcbiAgICAgIGxheW91dERpcjogJ3NyYy9sYXlvdXRzJyxcbiAgICAgIGxheW91dDogJ2RlZmF1bHQnXG4gICAgfSksXG4gICAgdW5pUm9vdFgoe1xuICAgICAgZW5hYmxlZEdsb2JhbFJlZjogZmFsc2UsXG4gICAgICByb290RmlsZU5hbWU6ICdzcmMvQXBwUm9vdCdcbiAgICB9KSxcbiAgICAvLyBtYW5pZmVzdC5qc29uIFx1NzUzMSBtYW5pZmVzdC5jb25maWcudHMgXHU3NTFGXHU2MjEwXHVGRjA4XHU1RkM1XHU5ODdCXHU1NzI4IHVuaSgpIFx1NEU0Qlx1NTI0RFx1NkNFOFx1NTE4Q1x1RkYwOVx1MzAwMlxuICAgIC8vIFx1MjZBMFx1RkUwRiBcdTZDRThcdTYxMEZcdTY1RjZcdTVFOEZcdUZGMUF1bmktYXBwIFx1NTcyOFx1N0YxNlx1OEJEMVx1OEZEQlx1N0EwQlx1NTQyRlx1NTJBOFx1NjVGNlx1RkYwOHZpdGUgXHU0RTRCXHU1MjREXHVGRjA5XHU1QzMxXHU4QkZCXHU4RDcwIG1hbmlmZXN0Lmpzb24gXHU1RTc2XHU3RjEzXHU1QjU4XHU2MjEwXHU4RkRCXHU3QTBCXHU3RUE3IG9uY2VcdUZGMENcbiAgICAvLyBcdTY3MkNcdTYzRDJcdTRFRjZcdTUxOTlcdTc2RDhcdTUzRDFcdTc1MUZcdTU3MjggY29uZmlnUmVzb2x2ZWRcdUZGMENcdTZDMzhcdThGRENcdTY2NUFcdTRFMDBcdTZCNjUgXHUyMDE0XHUyMDE0IFx1NjUzOVx1NEU4NiBtYW5pZmVzdC5jb25maWcudHMgXHU1NDBFXHVGRjBDXHU2NzJDXHU2QjIxXHU3RjE2XHU4QkQxXHU3NTI4XHU3Njg0XG4gICAgLy8gXHU0RUNEXHU2NjJGXHU3OEMxXHU3NkQ4XHU0RTBBXHU3Njg0XHU2NUU3IG1hbmlmZXN0Lmpzb25cdUZGMENcdTg5ODFcdTUxOERcdThERDFcdTRFMDBcdTZCMjFcdTYyNERcdTc1MUZcdTY1NDhcdTMwMDJcdTYyNDBcdTRFRTUgbWFuaWZlc3QuanNvbiBcdTVGQzVcdTk4N0JcdThEREZcdTc3NDBcdTkxNERcdTdGNkVcdTRFMDBcdThENzdcdTYzRDBcdTRFQTRcbiAgICAvLyBcdUZGMDhcdTVDMjRcdTUxNzZcdTUzRDFcdTcyNDhcdTUyNERcdUZGMUFcdTVCODNcdTUxQjNcdTVCOUFcdTRFQTdcdTcyNjlcdTkxQ0NcdTc2ODQgYXBwaWQgLyB2ZXJzaW9uQ29kZVx1RkYwOVx1MzAwMlxuICAgIFVuaU1hbmlmZXN0KG1hbmlmZXN0UGx1Z2luT3B0aW9ucyksXG4gICAgdW5pKCksXG4gICAgLi4ud2VhcHBUYWlsd2luZGNzc1BsdWdpbnMsXG4gICAgLi4uKGlzVmlzdWFsaXplclxuICAgICAgPyBbXG4gICAgICAgICAgdmlzdWFsaXplcih7XG4gICAgICAgICAgICBmaWxlbmFtZTogcmVzb2x2ZShwcm9qZWN0Um9vdCwgJ3N0YXRzLmh0bWwnKSxcbiAgICAgICAgICAgIHRpdGxlOiAndW5pYmVzdFggXHU0RUE3XHU3MjY5XHU0RjUzXHU3OUVGXHU1MjA2XHU2NzkwXHU2MkE1XHU1NDRBJyxcbiAgICAgICAgICAgIG9wZW46IHByb2Nlc3MuZW52LlZJU1VBTElaRVJfT1BFTiA/IHByb2Nlc3MuZW52LlZJU1VBTElaRVJfT1BFTiA9PT0gJ3RydWUnIDogdHJ1ZSxcbiAgICAgICAgICAgIGd6aXBTaXplOiB0cnVlLFxuICAgICAgICAgICAgYnJvdGxpU2l6ZTogdHJ1ZVxuICAgICAgICAgIH0pIGFzIFBsdWdpbk9wdGlvblxuICAgICAgICBdXG4gICAgICA6IFtdKSxcbiAgICAvLyBcdTY3ODRcdTVFRkFcdTUxNDNcdTRGRTFcdTYwNkZcdTgxRUFcdTUyQThcdTZDRThcdTUxNjVcdTYzRDJcdTRFRjZcdUZGMUFcdTU0MTEgSFRNTCBcdTZDRThcdTUxNjUgbWV0YVtuYW1lPVwiYXBwLWluZm9cIl1cdTMwMDFcdTUxNjhcdTVDNDBcdTUzRDhcdTkxQ0YgX19BUFBfSU5GT19fIFx1NEUwRVx1NjNBN1x1NTIzNlx1NTNGMFx1NUZCRFx1NjgwN1xuICAgIHZpdGVQbHVnaW5BcHBpbmZvKHtcbiAgICAgIGVuYWJsZUxvZzogdHJ1ZSxcbiAgICAgIGVuYWJsZU1ldGE6IHRydWUsXG4gICAgICBlbmFibGVHbG9iYWw6IHRydWVcbiAgICB9KSxcbiAgICAvLyBcdTk3NTlcdTYwMDFcdThENDRcdTZFOTBcdTgxRUFcdTUyQThcdTUzMTZcdTUzOEJcdTdGMjlcdTYzRDJcdTRFRjZcdUZGMUFcdTU3MjhcdTY3ODRcdTVFRkFcdTk2MzZcdTZCQjVcdTUzOEJcdTdGMjlcdTYyNTNcdTUzMDVcdTU2RkVcdTcyNDdcdThENDRcdTZFOTBcbiAgICAuLi4oaXNCdWlsZFxuICAgICAgPyBbXG4gICAgICAgICAgVml0ZUltYWdlT3B0aW1pemVyKHtcbiAgICAgICAgICAgIHBuZzogeyBxdWFsaXR5OiA4MCwgY29tcHJlc3Npb25MZXZlbDogOSB9LFxuICAgICAgICAgICAganBlZzogeyBxdWFsaXR5OiA4MCB9LFxuICAgICAgICAgICAganBnOiB7IHF1YWxpdHk6IDgwIH0sXG4gICAgICAgICAgICB3ZWJwOiB7IHF1YWxpdHk6IDgwIH0sXG4gICAgICAgICAgICBsb2dTdGF0czogdHJ1ZVxuICAgICAgICAgIH0pIGFzIFBsdWdpbk9wdGlvblxuICAgICAgICBdXG4gICAgICA6IFtdKSxcbiAgICAvLyBcdTY3MkNcdTU3MzAgTW9jayBcdTRFMkRcdTk1RjRcdTRFRjZcdTYzRDJcdTRFRjZcdUZGMUFcdTY1MkZcdTYzMDFcdTdFQUZcdTUyNERcdTdBRUZcdTc5QkJcdTdFQkZcdTgwNTRcdThDMDNcdUZGMDhWSVRFX1VTRV9NT0NLPXRydWUgLyBwbnBtIGRldjptb2NrXHVGRjA5XG4gICAgLi4uKGlzTW9ja1xuICAgICAgPyBbXG4gICAgICAgICAgdml0ZU1vY2tTZXJ2ZSh7XG4gICAgICAgICAgICBtb2NrUGF0aDogcmVzb2x2ZShwcm9qZWN0Um9vdCwgJ21vY2snKSxcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdhdGNoRmlsZXM6IHRydWUsXG4gICAgICAgICAgICBsb2dnZXI6IHRydWVcbiAgICAgICAgICB9KSBhcyBQbHVnaW5PcHRpb25cbiAgICAgICAgXVxuICAgICAgOiBbXSksXG4gICAgLy8gXHU2NzJDXHU1NzMwIE1vY2sgLyBcdTRFRTNcdTc0MDZcdTZBMjFcdTVGMEZcdTdFQzhcdTdBRUZcdTcyQjZcdTYwMDFcdTYzRDBcdTc5M0FcdTYzRDJcdTRFRjZcdUZGMDhcdTkwMUFcdThGQzcgY29uZmlnUmVzb2x2ZWQgXHU5NEE5XHU1QjUwXHU3ODZFXHU0RkREXHU1NzI4IEhCdWlsZGVyWCBcdTdGMTZcdThCRDFcdThGOTNcdTUxRkFcdTRFMkRcdTdBMzNcdTVCOUFcdTYyNTNcdTUzNzBcdUZGMDlcbiAgICB7XG4gICAgICBuYW1lOiAndW5pYmVzdHg6bW9jay10aXAnLFxuICAgICAgY29uZmlnUmVzb2x2ZWQoKSB7XG4gICAgICAgIGlmICghaXNCdWlsZCkge1xuICAgICAgICAgIGlmIChpc01vY2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcdTI3MTQgW21vY2tdIFx1NjcyQ1x1NTczMCBNb2NrIFx1NjcwRFx1NTJBMVx1NURGMlx1NUYwMFx1NTQyRiAodml0ZS1wbHVnaW4tbW9jaylcdUZGMENcdTVERjJcdTgxRUFcdTUyQThcdTUyMDdcdTYzNjJcdTRFM0EgSDUgXHU0RUUzXHU3NDA2XHU2QTIxXHU1RjBGIChWSVRFX0g1X1VTRV9QUk9YWT10cnVlKScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlzUHJveHlcbiAgICAgICAgICAgICAgPyAnXHUyMTM5IFttb2NrXSBcdTY3MkNcdTU3MzAgTW9jayBcdTY3MERcdTUyQTFcdTVERjJcdTUxNzNcdTk1RURcdUZGMDhINSBcdTRFRTNcdTc0MDZcdTZBMjFcdTVGMEZcdTc1MUZcdTY1NDhcdTRFMkRcdUZGMDknXG4gICAgICAgICAgICAgIDogJ1x1MjEzOSBbbW9ja10gXHU2NzJDXHU1NzMwIE1vY2sgXHU2NzBEXHU1MkExXHU1REYyXHU1MTczXHU5NUVEXHVGRjA4XHU3NkY0XHU4RkRFXHU2QTIxXHU1RjBGXHVGRjA5Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBcdTc5RkJcdTUyQThcdTdBRUZcdTc3MUZcdTY3M0FcdThDMDNcdThCRDVcdTVERTVcdTUxNzcgdkNvbnNvbGVcdUZGMDhcdTRFQzVcdTU3MjggV2ViL0g1IFx1NEUxNFx1NUYwMFx1NTQyRlx1NjVGNlx1NkNFOFx1NTE2NVx1RkYwQ1x1NTk4MiBwbnBtIGRldjp2Y29uc29sZVx1RkYwOVxuICAgIC4uLihpc1ZDb25zb2xlXG4gICAgICA/IFtcbiAgICAgICAgICB2aXRlVkNvbnNvbGUoe1xuICAgICAgICAgICAgZW50cnk6IFtcbiAgICAgICAgICAgICAgcmVzb2x2ZShwcm9qZWN0Um9vdCwgJ21haW4udXRzJyksXG4gICAgICAgICAgICAgIHJlc29sdmUocHJvamVjdFJvb3QsICdtYWluJylcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBlbmFibGVkOiBpc1ZDb25zb2xlLFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgIG1heExvZ051bWJlcjogMTAwMCxcbiAgICAgICAgICAgICAgdGhlbWU6ICdkYXJrJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1c3RvbUhpZGU6ICdsb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwidmNvbnNvbGU9ZmFsc2VcIiknXG4gICAgICAgICAgfSkgYXMgUGx1Z2luT3B0aW9uXG4gICAgICAgIF1cbiAgICAgIDogW10pXG4gIF1cbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnMvcm9vdC1wbHVnaW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnMvcm9vdC1wbHVnaW4udHNcIjtpbXBvcnQgZnMgZnJvbSAnbm9kZTpmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJztcbmltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBsb2FkUGxhdGZvcm1QYWdlc0pzb24gfSBmcm9tICcuL3BhZ2VzLWpzb24tdXRpbCc7XG5cbi8qKiBcdThCRkJcdTUzRDYgVklURV9UQUJCQVJfTU9ERVx1RkYxQlx1NEYxOFx1NTE0OFx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlx1RkYwQ1x1NTE3Nlx1NkIyMVx1OTg3OVx1NzZFRVx1NjgzOVx1NzZFRVx1NUY1NSAuZW52ICovXG5mdW5jdGlvbiBnZXRUYWJiYXJNb2RlKHByb2plY3RSb290OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuVklURV9UQUJCQVJfTU9ERSAhPSBudWxsICYmIHByb2Nlc3MuZW52LlZJVEVfVEFCQkFSX01PREUgIT09ICcnKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52LlZJVEVfVEFCQkFSX01PREUudHJpbSgpO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZW52UGF0aCA9IHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgJy5lbnYnKTtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhlbnZQYXRoKSkge1xuICAgICAgY29uc3QgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhlbnZQYXRoLCAndXRmLTgnKTtcbiAgICAgIGNvbnN0IG1hdGNoID0gY29udGVudC5tYXRjaCgvXlZJVEVfVEFCQkFSX01PREVcXHMqPVxccypbJ1wiXT8oW14nXCJcXHJcXG5dKylbJ1wiXT8vbSk7XG4gICAgICBpZiAobWF0Y2ggIT0gbnVsbCAmJiBtYXRjaFsxXSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBtYXRjaFsxXS50cmltKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNhdGNoIHt9XG4gIHJldHVybiAnMSc7XG59XG5cbi8qKlxuICogXHU5QTdDXHU1Q0YwXHU4RjZDXHU4RkRFXHU1QjU3XHU3QjI2IGhlbHBlclx1RkYwOFx1NEUwRSB1bmktbGF5b3V0cy1wbHVnaW4gXHU0RTJEXHU0RkREXHU2MzAxXHU0RTAwXHU4MUY0XHVGRjA5XG4gKi9cbmZ1bmN0aW9uIGtlYmFiQ2FzZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFthLXowLTldKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBcdTVCNTdcdTdCMjZcdTRFMzJcdThGNkMgUGFzY2FsQ2FzZSBcdTdFQzRcdTRFRjZcdTU0MERcdUZGMDhcdTU5ODIgQXBwLmt1IC0+IEFwcEt1XHVGRjBDQXBwUm9vdCAtPiBBcHBSb290XHVGRjBDZ2xvYmFsLXJvb3QgLT4gR2xvYmFsUm9vdFx1RkYwOVxuICovXG5mdW5jdGlvbiB0b1Bhc2NhbENhc2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3RyXG4gICAgLnJlcGxhY2UoL1suLV0oXFx3KS9nLCAoXywgYzogc3RyaW5nKSA9PiBjLnRvVXBwZXJDYXNlKCkpXG4gICAgLnJlcGxhY2UoL15bYS16XS8sIChjOiBzdHJpbmcpID0+IGMudG9VcHBlckNhc2UoKSk7XG59XG5cbi8qKlxuICogQXBwUm9vdC51dnVlIC8gQXBwLmt1LnV2dWUgXHU1REYyXHU1OEYwXHU2NjBFXHU3Njg0XHU5ODc1XHU5NzYyXHU1M0MyXHU2NTcwXHU3NjdEXHU1NDBEXHU1MzU1XHVGRjA4XHU0RTBFXHU2ODM5XHU3RUM0XHU0RUY2XHU0RTJEIGRlZmluZVByb3BzIFx1NzY4NFx1OTUyRVx1NEUwMFx1NEUwMFx1NUJGOVx1NUU5NFx1RkYwOVx1MzAwMlxuICogXHU2Q0U4XHU1MTY1XHU5NTJFXHU2QzM4XHU4RkRDIFx1MjI4NiBcdTU4RjBcdTY2MEVcdTk1MkVcdUZGMUFcdTkwN0ZcdTUxNERcdTk4NzVcdTk3NjJcdTY1QjBcdTUzQzJcdTY1NzBcdTY3MkFcdTU4RjBcdTY2MEVcdTY1RjZcdTg4QUJcdTZDRThcdTUxNjVcdTUyMzBcdTY4MzlcdTdFQzRcdTRFRjZcdTVCRkNcdTgxRjRcdTdGMTZcdThCRDFcdTYyQTVcdTk1MTlcdUZGMUJcbiAqIFx1NjcyQVx1Njc2NVx1NjVCMFx1NTg5RVx1OTg3NVx1OTc2Mlx1NTNDMlx1NjU3MFx1OTUyRVx1OTcwMFx1NEUwOVx1NTkwNFx1NTQwQ1x1NkI2NVx1RkYxQWRlZmluZVBhZ2UgLyBwYWdlcy5jb25maWcuanNvbiBcdTIxOTIgXHU2NzJDXHU3NjdEXHU1NDBEXHU1MzU1IFx1MjE5MiBcdTY4MzlcdTdFQzRcdTRFRjYgZGVmaW5lUHJvcHNcdTMwMDJcbiAqL1xuY29uc3QgUk9PVF9QUk9QX0tFWVM6IHN0cmluZ1tdID0gW1xuICAnbGF5b3V0JyxcbiAgJ3Nob3dCYWNrJyxcbiAgJ2hpZGVOYXZiYXInLFxuICAnaGlkZVN0YXR1c0JhcicsXG4gICdlbmFibGVQdWxsRG93blJlZnJlc2gnLFxuICAnY3VzdG9tUGFnZUNsYXNzJyxcbiAgJ2N1c3RvbVBhZ2VTdHlsZScsXG4gICdzdHlsZScsXG4gICdpc1RhYmJhcidcbl07XG5cbi8qKlxuICogXHU2ODM5XHU2MzZFXHU5ODc1XHU5NzYyXHU1M0MyXHU2NTcwXHU3NTFGXHU2MjEwXHU0RjIwXHU3RUQ5XHU1MzA1XHU4OEY5XHU3RUM0XHU0RUY2XHU3Njg0IHByb3BzIFx1NUM1RVx1NjAyN1x1NUI1N1x1N0IyNlx1NEUzMlx1MzAwMlxuICogXHU3NTFGXHU2MjEwXHU4OUM0XHU1MjE5XHU1RkM1XHU5ODdCXHU0RTBFIHVuaS1sYXlvdXRzLXBsdWdpbi50c1x1RkYwODM4NH40MDYgXHU4ODRDIGF0dHJzIFx1NzUxRlx1NjIxMFx1RkYwOVx1NEZERFx1NjMwMVx1NUI4Q1x1NTE2OFx1NEUwMFx1ODFGNFx1RkYwQ1xuICogXHU0RkREXHU4QkMxIFx1NjgzOVx1N0VDNFx1NEVGNiBcdTRFMEUgTGF5b3V0Q29tcG9uZW50IFx1NjUzNlx1NTIzMFx1NTQwQ1x1NEUwMFx1NTk1N1x1OTg3NVx1OTc2Mlx1NTNDMlx1NjU3MFx1MzAwMlxuICovXG5mdW5jdGlvbiBidWlsZFBhZ2VBdHRycyhwYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT4pOiBzdHJpbmcge1xuICBsZXQgYXR0cnMgPSAnJztcbiAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCB2YWwgPSBwYXJhbXNba2V5XTtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChrZXkgPT09ICdjbGFzcycgfHwga2V5ID09PSAnY3VzdG9tQ2xhc3MnKSB7XG4gICAgICAgIGF0dHJzICs9IGAgOmN1c3RvbS1wYWdlLWNsYXNzPVwiJyR7dmFsLnJlcGxhY2UoLycvZywgJ1xcXFxcXCcnKX0nXCJgO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ2N1c3RvbVN0eWxlJykge1xuICAgICAgICBhdHRycyArPSBgIDpjdXN0b20tcGFnZS1zdHlsZT1cIicke3ZhbC5yZXBsYWNlKC8nL2csICdcXFxcXFwnJyl9J1wiYDtcbiAgICAgIH1cbiAgICAgIGF0dHJzICs9IGAgOiR7a2ViYWJDYXNlKGtleSl9PVwiJyR7dmFsLnJlcGxhY2UoLycvZywgJ1xcXFxcXCcnKX0nXCJgO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGF0dHJzICs9IGAgOiR7a2ViYWJDYXNlKGtleSl9PVwiJHt2YWx9XCJgO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgIC8vIFx1NEUzQVx1NEU4Nlx1OTA3Rlx1NTE0RFx1NEUwRSBWdWUgXHU1MzlGXHU3NTFGIGNsYXNzL3N0eWxlIFx1NUM1RVx1NjAyN1x1NTFCMlx1N0E4MVx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NjYyRiBzdHlsZSBcdTk1MkVcdTY2MjBcdTVDMDRcdTRFM0EgcGFnZS1zdHlsZVxuICAgICAgY29uc3QgcHJvcE5hbWUgPSBrZXkgPT09ICdzdHlsZScgPyAncGFnZS1zdHlsZScgOiBrZWJhYkNhc2Uoa2V5KTtcbiAgICAgIGF0dHJzICs9IGAgOiR7cHJvcE5hbWV9PVwiJHtKU09OLnN0cmluZ2lmeSh2YWwpLnJlcGxhY2UoL1wiL2csICdcXCcnKX1cImA7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGF0dHJzO1xufVxuXG5leHBvcnQgdHlwZSBVbmlSb290WE9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBcdTY2MkZcdTU0MjZcdTU0MkZcdTc1MjhcdTg2NUFcdTYyREZcdTgyODJcdTcwQjlcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGVuYWJsZWRWaXJ0dWFsSG9zdD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBcdTY2MkZcdTU0MjZcdTU0MkZcdTc1MjhcdTUxNjhcdTVDNDAgcmVmXHVGRjA4XHU1RjUzXHU0RTNBIHRydWUgXHU2NUY2XHU0RTNBXHU2ODM5XHU3RUM0XHU0RUY2XHU2REZCXHU1MkEwIHJlZj1cInVuaUt1Um9vdFwiXHVGRjBDXHU2MjE2XHU4MDA1XHU0RjdGXHU3NTI4IHRlbXBsYXRlIFx1NEUwQVx1NjMwN1x1NUI5QVx1NzY4NCByb290IFx1NUM1RVx1NjAyN1x1RkYwOVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZW5hYmxlZEdsb2JhbFJlZj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBcdTY4MzlcdTY1ODdcdTRFRjZcdTU0MERcdUZGMENcdTY1RTBcdTk3MDBcdTY0M0FcdTVFMjZcdTYyNjlcdTVDNTVcdTU0MERcdUZGMENcdTU5ODIgJ0FwcFJvb3QnIFx1NjIxNiAnQXBwLmt1J1xuICAgKiBAZGVmYXVsdCAnQXBwUm9vdCdcbiAgICovXG4gIHJvb3RGaWxlTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFx1OTcwMFx1ODk4MVx1NjM5Mlx1OTY2NFx1NjgzOVx1N0VDNFx1NEVGNlx1NzY4NFx1OTg3NVx1OTc2Mlx1RkYwQ1x1NjUyRlx1NjMwMSBnbG9iIFx1NjIxNlx1OERFRlx1NUY4NFx1NUI1MFx1NEUzMlx1NTMzOVx1OTE0RFxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBcbiAgICogWydwYWdlcy9zb21lJywgJ3BhZ2VzL2V4Y2x1ZGUvKiddXG4gICAqIGBgYFxuICAgKi9cbiAgZXhjbHVkZVBhZ2VzPzogc3RyaW5nIHwgc3RyaW5nW107XG59O1xuXG4vLyBcdTgxRUFcdTUyQThcdTdFRDlcdTYyNDBcdTY3MDlcdTk4NzVcdTk3NjJcdTU5NTdcdTRFMEFcdTY4MzlcdTUzMDVcdTg4RjlcdTdFQzRcdTRFRjZcdUZGMDhcdTU5ODIgQXBwUm9vdC51dnVlIC8gQXBwLmt1LnV2dWVcdUZGMDlcdUZGMENcdTVFNzZcdTYyOEFcdTVGNTNcdTUyNERcdTk4NzVcdTk3NjJcdTc2ODRcdTUzQzJcdTY1NzBcdTkwMUFcdThGQzcgcHJvcHMgXHU2Q0U4XHU1MTY1XG5leHBvcnQgZnVuY3Rpb24gdW5pUm9vdFgob3B0aW9uczogVW5pUm9vdFhPcHRpb25zID0ge30pOiBQbHVnaW4ge1xuICBjb25zdCB7XG4gICAgZW5hYmxlZEdsb2JhbFJlZiA9IGZhbHNlLFxuICAgIHJvb3RGaWxlTmFtZSA9ICdzcmMvQXBwUm9vdCcsXG4gICAgZXhjbHVkZVBhZ2VzXG4gIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHJhd1Jvb3RGaWxlTmFtZSA9IHJvb3RGaWxlTmFtZS5yZXBsYWNlKC9cXC4odXZ1ZXx2dWUpJC8sICcnKTtcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IHRvUGFzY2FsQ2FzZShwYXRoLmJhc2VuYW1lKHJhd1Jvb3RGaWxlTmFtZSkpO1xuXG4gIGNvbnN0IGV4Y2x1ZGVMaXN0ID0gZXhjbHVkZVBhZ2VzXG4gICAgPyAoQXJyYXkuaXNBcnJheShleGNsdWRlUGFnZXMpID8gZXhjbHVkZVBhZ2VzIDogW2V4Y2x1ZGVQYWdlc10pXG4gICAgOiBbXTtcblxuICBsZXQgcHJvamVjdFJvb3QgPSBwcm9jZXNzLmN3ZCgpO1xuICBsZXQgcGFnZXNKc29uUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgJ3BhZ2VzLmpzb24nKTtcblxuICAvLyBwYWdlcy5qc29uIFx1OTg3NVx1OTc2Mlx1NTNDMlx1NjU3MFx1N0YxM1x1NUI1OFx1RkYwOGtleTogXHU3NkY4XHU1QkY5XHU5ODc5XHU3NkVFXHU2ODM5XHU3NkVFXHU1RjU1XHU3Njg0XHU2NUUwXHU2MjY5XHU1QzU1XHU1NDBEXHU5ODc1XHU5NzYyXHU4REVGXHU1Rjg0XHVGRjBDXHU1OTgyIFwic3JjL3BhZ2VzL2luZGV4L2luZGV4XCJcdUZGMDlcbiAgbGV0IGNhY2hlZFBhZ2VzUGFyYW1zOiBNYXA8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBhbnk+PiB8IG51bGwgPSBudWxsO1xuICBsZXQgbGFzdFBhZ2VzSnNvbk1UaW1lID0gMDtcblxuICAvKiogXHU2QTIxXHU1RjBGIDQgXHU0RTBCXHU3NTMxIFRhYlZpZXdzIFx1NzZGNFx1NjNBNSBpbXBvcnQgXHU3Njg0XHU5ODc1XHU5NzYyXHVGRjA4XHU4RkQ5XHU0RTlCXHU5ODc1XHU5NzYyXHU1M0VBXHU0RjVDXHU0RTNBXHU1QkJGXHU0RTNCXHU1MTg1XHU3RUM0XHU0RUY2XHU2RTMyXHU2N0QzXHVGRjBDXHU0RTBEXHU1MThEXHU1OTU3XHU1MTY4XHU1QzQwXHU2ODM5XHU5QUE4XHU2N0I2XHVGRjA5ICovXG4gIGxldCBjYWNoZWRFbWJlZGRlZFRhYlBhZ2VzOiBTZXQ8c3RyaW5nPiB8IG51bGwgPSBudWxsO1xuICBsZXQgbGFzdFRhYlZpZXdzTVRpbWUgPSAwO1xuICBsZXQgdGFiYmFyTW9kZSA9ICcxJztcblxuICAvLyBcdTg5RTNcdTY3OTAgcGFnZXMuanNvblx1RkYxQVx1NEUzQlx1NTMwNSArIFx1NTIwNlx1NTMwNVx1OTg3NVx1OTc2Mlx1RkYwQ1x1NjNEMFx1NTNENlx1OTY2NCBwYXRoL2xheW91dCBcdTU5MTZcdTc2ODRcdTUxNjhcdTkwRThcdTgxRUFcdTVCOUFcdTRFNDlcdTUzQzJcdTY1NzBcbiAgZnVuY3Rpb24gbG9hZFBhZ2VzUGFyYW1zKCkge1xuICAgIGNvbnN0IHBhcmFtc0J5UGF0aCA9IG5ldyBNYXA8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBhbnk+PigpO1xuICAgIGlmICghZnMuZXhpc3RzU3luYyhwYWdlc0pzb25QYXRoKSkge1xuICAgICAgcmV0dXJuIHBhcmFtc0J5UGF0aDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBsb2FkUGxhdGZvcm1QYWdlc0pzb24ocGFnZXNKc29uUGF0aCk7XG4gICAgICBjb25zdCB0YWJMaXN0ID0gKGRhdGEudGFiQmFyICYmIEFycmF5LmlzQXJyYXkoZGF0YS50YWJCYXIubGlzdCkpID8gZGF0YS50YWJCYXIubGlzdCA6IFtdO1xuICAgICAgY29uc3QgdGFiUGF0aHMgPSBuZXcgU2V0KHRhYkxpc3QubWFwKChpdGVtOiBhbnkpID0+IChpdGVtLnBhZ2VQYXRoIHx8ICcnKS5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvXlxcLy8sICcnKSkpO1xuXG4gICAgICBjb25zdCBjb2xsZWN0ID0gKHBhZ2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAocGFnZSA9PSBudWxsIHx8IHR5cGVvZiBwYWdlLnBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5vcm1QYXRoID0gcGFnZS5wYXRoLnJlcGxhY2UoL1xcXFwvZywgJy8nKS5yZXBsYWNlKC9eXFwvLywgJycpO1xuICAgICAgICBjb25zdCBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMocGFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgaWYgKGtleSAhPT0gJ3BhdGgnKSB7XG4gICAgICAgICAgICBwYXJhbXNba2V5XSA9IHBhZ2Vba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGFiUGF0aHMuaGFzKG5vcm1QYXRoKSkge1xuICAgICAgICAgIHBhcmFtcy5pc1RhYmJhciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcGFyYW1zQnlQYXRoLnNldChub3JtUGF0aCwgcGFyYW1zKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIDEuIFx1NEUzQlx1NTMwNVx1OTg3NVx1OTc2MlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5wYWdlcykpIHtcbiAgICAgICAgZGF0YS5wYWdlcy5mb3JFYWNoKGNvbGxlY3QpO1xuICAgICAgfVxuICAgICAgLy8gMi4gXHU1MjA2XHU1MzA1XHU5ODc1XHU5NzYyXHVGRjA4cGF0aCBcdTk3MDBcdTRFMEUgcm9vdCBcdTYyRkNcdTYzQTVcdTYyMTBcdTVCOENcdTY1NzRcdThERUZcdTVGODRcdUZGMDlcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuc3ViUGFja2FnZXMpKSB7XG4gICAgICAgIGRhdGEuc3ViUGFja2FnZXMuZm9yRWFjaCgoc3ViUGtnKSA9PiB7XG4gICAgICAgICAgaWYgKHN1YlBrZyA9PSBudWxsIHx8IHR5cGVvZiBzdWJQa2cucm9vdCAhPT0gJ3N0cmluZycgfHwgIUFycmF5LmlzQXJyYXkoc3ViUGtnLnBhZ2VzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdWJQa2cucGFnZXMuZm9yRWFjaCgocGFnZTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAocGFnZSA9PSBudWxsIHx8IHR5cGVvZiBwYWdlLnBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbGxlY3Qoe1xuICAgICAgICAgICAgICAuLi5wYWdlLFxuICAgICAgICAgICAgICBwYXRoOiBwYXRoLmpvaW4oc3ViUGtnLnJvb3QsIHBhZ2UucGF0aCkucmVwbGFjZSgvXFxcXC9nLCAnLycpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbdW5pUm9vdFhdIEZhaWxlZCB0byBwYXJzZSBwYWdlcy5qc29uOicsIGUpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zQnlQYXRoO1xuICB9XG5cbiAgLy8gXHU4M0I3XHU1M0Q2XHU2NzAwXHU2NUIwXHU3Njg0XHU5ODc1XHU5NzYyXHU1M0MyXHU2NTcwXHVGRjA4XHU1RTI2IG10aW1lIFx1N0YxM1x1NUI1OFx1NjgyMVx1OUE4Q1x1RkYwOVxuICBmdW5jdGlvbiBnZXRQYWdlc1BhcmFtcygpIHtcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMocGFnZXNKc29uUGF0aCkpIHtcbiAgICAgIHJldHVybiBuZXcgTWFwPHN0cmluZywgUmVjb3JkPHN0cmluZywgYW55Pj4oKTtcbiAgICB9XG4gICAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKHBhZ2VzSnNvblBhdGgpO1xuICAgIGlmICghY2FjaGVkUGFnZXNQYXJhbXMgfHwgc3RhdC5tdGltZU1zICE9PSBsYXN0UGFnZXNKc29uTVRpbWUpIHtcbiAgICAgIGNhY2hlZFBhZ2VzUGFyYW1zID0gbG9hZFBhZ2VzUGFyYW1zKCk7XG4gICAgICBsYXN0UGFnZXNKc29uTVRpbWUgPSBzdGF0Lm10aW1lTXM7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRQYWdlc1BhcmFtcztcbiAgfVxuXG4gIC8qKiBcdTg5RTNcdTY3OTBcdTc1MUZcdTYyMTBcdTc2ODQgVGFiVmlld3MudXZ1ZVx1RkYwQ1x1OEZENFx1NTZERVx1NTE3Nlx1NEUyRFx1NzZGNFx1NjNBNVx1NUJGQ1x1NTE2NVx1NzY4NFx1OTg3NVx1OTc2Mlx1OERFRlx1NUY4NFx1OTZDNlx1NTQwOCAqL1xuICBmdW5jdGlvbiBnZXRFbWJlZGRlZFRhYlBhZ2VzKCk6IFNldDxzdHJpbmc+IHtcbiAgICBjb25zdCB0YWJWaWV3c1BhdGggPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsICdzcmMvdGFiYmFyL2NvbXBvbmVudHMvVGFiVmlld3MudXZ1ZScpO1xuICAgIGlmICghZnMuZXhpc3RzU3luYyh0YWJWaWV3c1BhdGgpKSB7XG4gICAgICByZXR1cm4gbmV3IFNldCgpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKHRhYlZpZXdzUGF0aCk7XG4gICAgICBpZiAoY2FjaGVkRW1iZWRkZWRUYWJQYWdlcyAhPSBudWxsICYmIHN0YXQubXRpbWVNcyA9PSBsYXN0VGFiVmlld3NNVGltZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkRW1iZWRkZWRUYWJQYWdlcztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmModGFiVmlld3NQYXRoLCAndXRmLTgnKTtcbiAgICAgIGNvbnN0IHBhZ2VzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICBjb25zdCBpbXBvcnRSZWdleCA9IC9pbXBvcnRcXHMrXFx3K1xccytmcm9tXFxzK1snXCJdQFxcLyhzcmNcXC9bXidcIl0rXFwuKD86dXZ1ZXx2dWUpKVsnXCJdL2c7XG4gICAgICBsZXQgbWF0Y2ggPSBpbXBvcnRSZWdleC5leGVjKGNvbnRlbnQpO1xuICAgICAgd2hpbGUgKG1hdGNoICE9IG51bGwpIHtcbiAgICAgICAgcGFnZXMuYWRkKG1hdGNoWzFdLnJlcGxhY2UoL1xcLih1dnVlfHZ1ZSkkLywgJycpKTtcbiAgICAgICAgbWF0Y2ggPSBpbXBvcnRSZWdleC5leGVjKGNvbnRlbnQpO1xuICAgICAgfVxuICAgICAgY2FjaGVkRW1iZWRkZWRUYWJQYWdlcyA9IHBhZ2VzO1xuICAgICAgbGFzdFRhYlZpZXdzTVRpbWUgPSBzdGF0Lm10aW1lTXM7XG4gICAgICByZXR1cm4gcGFnZXM7XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgIHJldHVybiBuZXcgU2V0KCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAndW5pUm9vdFgnLFxuICAgIGNvbmZpZ1Jlc29sdmVkKGNvbmZpZzogYW55KSB7XG4gICAgICBwcm9qZWN0Um9vdCA9IGNvbmZpZy5yb290IHx8IHByb2Nlc3MuY3dkKCk7XG4gICAgICBwYWdlc0pzb25QYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCAncGFnZXMuanNvbicpO1xuICAgICAgdGFiYmFyTW9kZSA9IGdldFRhYmJhck1vZGUocHJvamVjdFJvb3QpO1xuICAgIH0sXG4gICAgdHJhbnNmb3JtKGNvZGU6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZElkID0gaWQucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xuICAgICAgLy8gXHU1RkM1XHU5ODdCXHU2NjJGXHU5ODc2XHU3RUE3IFNGQyBcdTY1ODdcdTRFRjZcdUZGMENcdTVGRkRcdTc1NjVcdTYyNDBcdTY3MDlcdTVFMjYgPyBcdTc2ODRcdTVCNTBcdThCRjdcdTZDNDJcdUZGMDhcdTU5ODIgP3Z1ZSZ0eXBlPXNjcmlwdCBcdTdCNDlcdUZGMDlcbiAgICAgIGlmIChub3JtYWxpemVkSWQuaW5jbHVkZXMoJz8nKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICghbm9ybWFsaXplZElkLmVuZHNXaXRoKCcudXZ1ZScpICYmICFub3JtYWxpemVkSWQuZW5kc1dpdGgoJy52dWUnKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8vIFx1NTNFQVx1NTkwNFx1NzQwNiBzcmMvcGFnZXMgXHU1NDhDIHNyYy9zdWIgXHU0RTBCXHU3Njg0XHU5NzVFXHU3RUM0XHU0RUY2IHV2dWUgXHU5ODc1XHU5NzYyXHVGRjBDXHU2MzkyXHU5NjY0IEFwcC51dnVlXHUzMDAxXHU2ODM5XHU3RUM0XHU0RUY2XHU2NTg3XHU0RUY2XHU0RUU1XHU1M0NBXHU3RUM0XHU0RUY2L1x1ODlDNlx1NTZGRVx1NUI1MFx1NzZFRVx1NUY1NVxuICAgICAgY29uc3QgaXNQYWdlID0gbm9ybWFsaXplZElkLmluY2x1ZGVzKCdzcmMvcGFnZXMvJykgfHwgbm9ybWFsaXplZElkLmluY2x1ZGVzKCdzcmMvc3ViLycpO1xuICAgICAgaWYgKFxuICAgICAgICAhaXNQYWdlXG4gICAgICAgIHx8IG5vcm1hbGl6ZWRJZC5pbmNsdWRlcygnL2NvbXBvbmVudHMvJylcbiAgICAgICAgfHwgbm9ybWFsaXplZElkLmluY2x1ZGVzKCcvdmlld3MvJylcbiAgICAgICAgfHwgbm9ybWFsaXplZElkLmluY2x1ZGVzKGAke3Jhd1Jvb3RGaWxlTmFtZX0udXZ1ZWApXG4gICAgICAgIHx8IG5vcm1hbGl6ZWRJZC5pbmNsdWRlcyhgJHtyYXdSb290RmlsZU5hbWV9LnZ1ZWApXG4gICAgICAgIHx8IG5vcm1hbGl6ZWRJZC5pbmNsdWRlcygnQXBwLmt1LnV2dWUnKVxuICAgICAgICB8fCBub3JtYWxpemVkSWQuaW5jbHVkZXMoJ0FwcFJvb3QudXZ1ZScpXG4gICAgICAgIHx8IG5vcm1hbGl6ZWRJZC5pbmNsdWRlcygnL3NyYy9sYXlvdXRzLycpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NjhDMFx1NkQ0Qlx1NjgzOVx1N0VDNFx1NEVGNlx1NjU4N1x1NEVGNlx1NEY0RFx1N0Y2RVx1RkYwOFx1NEYxOFx1NTE0OFx1NjNBMlx1NkQ0QiBzcmMvIFx1NzZFRVx1NUY1NVx1RkYwQ1x1NEZERFx1OEJDMVx1NUMwRlx1N0EwQlx1NUU4Rlx1N0FFRlx1NTcyOCBzcmMvIFx1NTE4NVx1OTBFOFx1NTQwOFx1NkNENVx1NUJGQlx1NTc0MFx1RkYwOVxuICAgICAgbGV0IHRhcmdldEZpbGVFeHQgPSAnLnV2dWUnO1xuICAgICAgY29uc3QgYmFzZU5hbWUgPSBwYXRoLmJhc2VuYW1lKHJhd1Jvb3RGaWxlTmFtZSk7XG4gICAgICBjb25zdCBzcmNVdnVlUGF0aCA9IHBhdGguam9pbihwcm9qZWN0Um9vdCwgJ3NyYycsIGAke2Jhc2VOYW1lfS51dnVlYCk7XG4gICAgICBjb25zdCBzcmNWdWVQYXRoID0gcGF0aC5qb2luKHByb2plY3RSb290LCAnc3JjJywgYCR7YmFzZU5hbWV9LnZ1ZWApO1xuICAgICAgY29uc3Qgcm9vdFV2dWVQYXRoID0gcGF0aC5qb2luKHByb2plY3RSb290LCBgJHtyYXdSb290RmlsZU5hbWV9LnV2dWVgKTtcbiAgICAgIGNvbnN0IHJvb3RWdWVQYXRoID0gcGF0aC5qb2luKHByb2plY3RSb290LCBgJHtyYXdSb290RmlsZU5hbWV9LnZ1ZWApO1xuXG4gICAgICBsZXQgaW1wb3J0UmVsUGF0aCA9IGBzcmMvJHtiYXNlTmFtZX1gO1xuXG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhzcmNVdnVlUGF0aCkpIHtcbiAgICAgICAgdGFyZ2V0RmlsZUV4dCA9ICcudXZ1ZSc7XG4gICAgICAgIGltcG9ydFJlbFBhdGggPSBgc3JjLyR7YmFzZU5hbWV9YDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGZzLmV4aXN0c1N5bmMoc3JjVnVlUGF0aCkpIHtcbiAgICAgICAgdGFyZ2V0RmlsZUV4dCA9ICcudnVlJztcbiAgICAgICAgaW1wb3J0UmVsUGF0aCA9IGBzcmMvJHtiYXNlTmFtZX1gO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZnMuZXhpc3RzU3luYyhyb290VXZ1ZVBhdGgpKSB7XG4gICAgICAgIHRhcmdldEZpbGVFeHQgPSAnLnV2dWUnO1xuICAgICAgICBpbXBvcnRSZWxQYXRoID0gcmF3Um9vdEZpbGVOYW1lO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZnMuZXhpc3RzU3luYyhyb290VnVlUGF0aCkpIHtcbiAgICAgICAgdGFyZ2V0RmlsZUV4dCA9ICcudnVlJztcbiAgICAgICAgaW1wb3J0UmVsUGF0aCA9IHJhd1Jvb3RGaWxlTmFtZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0YXJnZXRGaWxlRXh0ID0gJy51dnVlJztcbiAgICAgICAgaW1wb3J0UmVsUGF0aCA9IGBzcmMvJHtiYXNlTmFtZX1gO1xuICAgICAgICBjb25zb2xlLndhcm4oYFt1bmlSb290WF0gXHU2NzJBXHU2MjdFXHU1MjMwXHU2ODM5XHU1MzA1XHU4OEY5XHU3RUM0XHU0RUY2ICR7c3JjVXZ1ZVBhdGh9XHVGRjBDXHU4QkY3XHU3ODZFXHU0RkREXHU4QkU1XHU3RUM0XHU0RUY2XHU1QjU4XHU1NzI4YCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFx1NEY5RFx1NjM2RSBwYWdlcy5qc29uIFx1NjdFNVx1NjI3RVx1NUY1M1x1NTI0RFx1OTg3NVx1OTc2Mlx1NzY4NFx1ODFFQVx1NUI5QVx1NEU0OVx1NTNDMlx1NjU3MFx1RkYwOFx1NEUwRSB1bmktbGF5b3V0cy1wbHVnaW4gXHU1NDBDXHU2RTkwXHVGRjA5XHVGRjBDXHU3NTFGXHU2MjEwXHU2Q0U4XHU1MTY1XHU1MjMwXHU2ODM5XHU3RUM0XHU0RUY2XHU3Njg0IHByb3BzXG4gICAgICBjb25zdCByZWxhdGl2ZUlkID0gcGF0aC5yZWxhdGl2ZShwcm9qZWN0Um9vdCwgbm9ybWFsaXplZElkKS5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG4gICAgICBjb25zdCBjbGVhblJlbGF0aXZlSWQgPSByZWxhdGl2ZUlkLnJlcGxhY2UoL1xcLih1dnVlfHZ1ZSkoXFw/LiopPyQvLCAnJyk7XG5cbiAgICAgIC8vIFx1NkEyMVx1NUYwRiA0XHVGRjFBVGFiVmlld3MgXHU3NkY0XHU2M0E1XHU1OTBEXHU3NTI4XHU3Njg0XHU5ODc1XHU5NzYyXHU1M0VBXHU0RjVDXHU0RTNBXHU1QkJGXHU0RTNCXHU1MTg1XHU3RUM0XHU0RUY2XHU2RTMyXHU2N0QzXHVGRjBDXHU0RTBEXHU4MEZEXHU1MThEXHU2QjIxXHU1OTU3IEFwcFJvb3RcdTMwMDJcbiAgICAgIC8vIFx1NTQyNlx1NTIxOVx1NTE3NiBBcHBSb290Lm9uTW91bnRlZCBcdTRGMUFcdTYzMDlcdTdDRkJcdTdFREZcdTk4NzVcdTY4MDhcdTk4NzZcdUZGMDhcdTU5Q0JcdTdFQzhcdTY2MkZcdTVCQkZcdTRFM0JcdTk5OTZcdTk4NzVcdUZGMDlcdTYyOEEgY3VySWR4IFx1OTFDRFx1N0Y2RVx1NTZERVx1OTk5Nlx1OTg3NVx1RkYwQ1xuICAgICAgLy8gXHU4ODY4XHU3M0IwXHU0RTNBXHU5OTk2XHU2QjIxXHU2MjUzXHU1RjAwXHU2N0QwXHU0RTJBXHU1QzFBXHU2NzJBXHU2RTMyXHU2N0QzXHU4RkM3XHU3Njg0IFRhYiBcdTY1RjZcdTUzQzhcdThERjNcdTU2REVcdTk5OTZcdTk4NzVcdTMwMDJcbiAgICAgIGlmICh0YWJiYXJNb2RlID09ICc0JyAmJiBnZXRFbWJlZGRlZFRhYlBhZ2VzKCkuaGFzKGNsZWFuUmVsYXRpdmVJZCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIFx1NjM5Mlx1OTY2NFx1NjM5Mlx1OTY2NFx1NTIxN1x1ODg2OFx1NEUyRFx1NzY4NFx1OTg3NVx1OTc2MlxuICAgICAgaWYgKGV4Y2x1ZGVMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgaXNFeGNsdWRlZCA9IGV4Y2x1ZGVMaXN0LnNvbWUoKHBhdHRlcm4pID0+IHtcbiAgICAgICAgICBpZiAocGF0dGVybi5pbmNsdWRlcygnKicpKSB7XG4gICAgICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYF4ke3BhdHRlcm4ucmVwbGFjZSgvXFwqL2csICcuKicpfSRgKTtcbiAgICAgICAgICAgIHJldHVybiByZWdleC50ZXN0KGNsZWFuUmVsYXRpdmVJZCkgfHwgcmVnZXgudGVzdChyZWxhdGl2ZUlkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNsZWFuUmVsYXRpdmVJZC5pbmNsdWRlcyhwYXR0ZXJuKSB8fCByZWxhdGl2ZUlkLmluY2x1ZGVzKHBhdHRlcm4pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzRXhjbHVkZWQpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYWdlUGFyYW1zID0gZ2V0UGFnZXNQYXJhbXMoKS5nZXQoY2xlYW5SZWxhdGl2ZUlkKTtcbiAgICAgIC8vIFx1NzY3RFx1NTQwRFx1NTM1NVx1OEZDN1x1NkVFNFx1RkYxQVx1NkNFOFx1NTE2NVx1OTUyRVx1NUZDNVx1OTg3QiBcdTIyODYgXHU2ODM5XHU3RUM0XHU0RUY2XHU1OEYwXHU2NjBFXHU5NTJFXHVGRjBDXHU2NzJBXHU1OEYwXHU2NjBFXHU3Njg0XHU2NUIwXHU1ODlFXHU1M0MyXHU2NTcwXHU1M0VBIHdhcm4gXHU4REYzXHU4RkM3XHVGRjBDXHU5MDdGXHU1MTREXHU3RjE2XHU4QkQxXHU2MkE1XHU5NTE5XG4gICAgICBjb25zdCBmaWx0ZXJlZFBhcmFtczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuICAgICAgaWYgKHBhZ2VQYXJhbXMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMocGFnZVBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgaWYgKCFST09UX1BST1BfS0VZUy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFt1bmlSb290WF0gXHU5ODc1XHU5NzYyICR7Y2xlYW5SZWxhdGl2ZUlkfSBcdTc2ODRcdTUzQzJcdTY1NzAgXCIke2tleX1cIiBcdTY3MkFcdTU3MjggJHtyYXdSb290RmlsZU5hbWV9IFx1NEUyRFx1NThGMFx1NjYwRSBwcm9wc1x1RkYwQ1x1NURGMlx1OERGM1x1OEZDN1x1NkNFOFx1NTE2NVx1RkYwOFx1OTcwMFx1NTQwQ1x1NkI2NVx1NjI2OVx1NUM1NSBST09UX1BST1BfS0VZUyBcdTRFMEUgZGVmaW5lUHJvcHNcdUZGMDlgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmlsdGVyZWRQYXJhbXNba2V5XSA9IHBhZ2VQYXJhbXNba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjb25zdCByb290QXR0cnMgPSBidWlsZFBhZ2VBdHRycyhmaWx0ZXJlZFBhcmFtcyk7XG4gICAgICBpZiAodHlwZW9mICh0aGlzIGFzIGFueSkuYWRkV2F0Y2hGaWxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICh0aGlzIGFzIGFueSkuYWRkV2F0Y2hGaWxlKHBhZ2VzSnNvblBhdGgpO1xuICAgICAgfVxuXG4gICAgICBsZXQgbmV3Q29kZSA9IGNvZGU7XG5cbiAgICAgIC8vIDEuIFx1NUMwNiB0ZW1wbGF0ZSBcdTUxODVcdTc2ODRcdTUxODVcdTVCQjlcdTc1MjggPENvbXBvbmVudE5hbWU+IFx1NTMwNVx1ODhGOVx1RkYwOFx1NUUyNlx1NEUwQVx1NUY1M1x1NTI0RFx1OTg3NVx1OTc2Mlx1NzY4NFx1NTNDMlx1NjU3MCBwcm9wcyBcdTRFMEUgXHU1M0VGXHU5MDA5IHJlZlx1RkYwOVxuICAgICAgY29uc3Qgc3RhcnRUZW1wbGF0ZUlkeCA9IGNvZGUuaW5kZXhPZignPHRlbXBsYXRlJyk7XG4gICAgICBjb25zdCBlbmRUZW1wbGF0ZUlkeCA9IGNvZGUubGFzdEluZGV4T2YoJzwvdGVtcGxhdGU+Jyk7XG4gICAgICBpZiAoc3RhcnRUZW1wbGF0ZUlkeCAhPT0gLTEgJiYgZW5kVGVtcGxhdGVJZHggIT09IC0xICYmIHN0YXJ0VGVtcGxhdGVJZHggPCBlbmRUZW1wbGF0ZUlkeCkge1xuICAgICAgICBjb25zdCBzdGFydFRhZ0VuZElkeCA9IGNvZGUuaW5kZXhPZignPicsIHN0YXJ0VGVtcGxhdGVJZHgpO1xuICAgICAgICBpZiAoc3RhcnRUYWdFbmRJZHggIT09IC0xICYmIHN0YXJ0VGFnRW5kSWR4IDwgZW5kVGVtcGxhdGVJZHgpIHtcbiAgICAgICAgICBjb25zdCB0ZW1wbGF0ZUF0dHJzID0gY29kZS5zbGljZShzdGFydFRlbXBsYXRlSWR4ICsgOSwgc3RhcnRUYWdFbmRJZHgpO1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb2RlLnNsaWNlKHN0YXJ0VGFnRW5kSWR4ICsgMSwgZW5kVGVtcGxhdGVJZHgpO1xuICAgICAgICAgIGNvbnN0IGJlZm9yZSA9IGNvZGUuc2xpY2UoMCwgc3RhcnRUZW1wbGF0ZUlkeCk7XG4gICAgICAgICAgY29uc3QgYWZ0ZXIgPSBjb2RlLnNsaWNlKGVuZFRlbXBsYXRlSWR4ICsgMTEpO1xuXG4gICAgICAgICAgLy8gXHU2M0QwXHU1M0Q2IHRlbXBsYXRlIFx1NEUwQVx1NzY4NCByb290IFx1NUM1RVx1NjAyN1x1RkYwOFx1NEY4Qlx1NTk4MiA8dGVtcGxhdGUgcm9vdD1cIm15Um9vdFwiPlx1RkYwOVxuICAgICAgICAgIGxldCByb290UmVmU3RyID0gJyc7XG4gICAgICAgICAgY29uc3Qgcm9vdE1hdGNoID0gdGVtcGxhdGVBdHRycy5tYXRjaCgvXFxicm9vdD0oW1wiJ10pKC4qPylcXDEvKTtcbiAgICAgICAgICBpZiAocm9vdE1hdGNoICYmIHJvb3RNYXRjaFsyXSkge1xuICAgICAgICAgICAgcm9vdFJlZlN0ciA9IGAgcmVmPVwiJHtyb290TWF0Y2hbMl19XCJgO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChlbmFibGVkR2xvYmFsUmVmKSB7XG4gICAgICAgICAgICByb290UmVmU3RyID0gJyByZWY9XCJ1bmlLdVJvb3RcIic7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gXHU2RTA1XHU3NDA2IHRlbXBsYXRlIFx1NEUwQVx1NzY4NCByb290IFx1NUM1RVx1NjAyN1xuICAgICAgICAgIGNvbnN0IGNsZWFuVGVtcGxhdGVBdHRycyA9IHRlbXBsYXRlQXR0cnMucmVwbGFjZSgvXFxzKlxcYnJvb3Q9KFtcIiddKS4qP1xcMS8sICcnKTtcblxuICAgICAgICAgIG5ld0NvZGUgPSBgJHtiZWZvcmV9PHRlbXBsYXRlJHtjbGVhblRlbXBsYXRlQXR0cnN9PlxcbiAgPCR7Y29tcG9uZW50TmFtZX0ke3Jvb3RSZWZTdHJ9JHtyb290QXR0cnN9PlxcbiR7Y29udGVudH1cXG4gIDwvJHtjb21wb25lbnROYW1lfT5cXG48L3RlbXBsYXRlPiR7YWZ0ZXJ9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIFx1NkNBMVx1NjcwOSB0ZW1wbGF0ZVx1RkYwQ1x1NEUwRFx1NTkwNFx1NzQwNlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gMi4gXHU1NzI4IHNjcmlwdCBzZXR1cCBcdTUxODVcdTVGMTVcdTUxNjVcdTY4MzlcdTdFQzRcdTRFRjZcbiAgICAgIGNvbnN0IGltcG9ydFN0YXRlbWVudCA9IGBpbXBvcnQgJHtjb21wb25lbnROYW1lfSBmcm9tICdALyR7aW1wb3J0UmVsUGF0aH0ke3RhcmdldEZpbGVFeHR9J2A7XG4gICAgICBjb25zdCBzY3JpcHRTZXR1cFJlZ2V4ID0gLzxzY3JpcHRcXHNbXj5dKlxcYnNldHVwXFxiW14+XSo+LztcbiAgICAgIGlmIChzY3JpcHRTZXR1cFJlZ2V4LnRlc3QobmV3Q29kZSkpIHtcbiAgICAgICAgbmV3Q29kZSA9IG5ld0NvZGUucmVwbGFjZShzY3JpcHRTZXR1cFJlZ2V4LCAobWF0Y2gpID0+IHtcbiAgICAgICAgICByZXR1cm4gYCR7bWF0Y2h9XFxuJHtpbXBvcnRTdGF0ZW1lbnR9YDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3Q29kZSA9IGAke25ld0NvZGV9XFxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidXRzXCI+XFxuJHtpbXBvcnRTdGF0ZW1lbnR9XFxuPC9zY3JpcHQ+XFxuYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogbmV3Q29kZSxcbiAgICAgICAgbWFwOiBudWxsXG4gICAgICB9O1xuICAgIH0sXG4gICAgZ2VuZXJhdGVCdW5kbGUodGhpczogYW55LCBfOiBhbnksIGJ1bmRsZTogYW55KSB7XG4gICAgICAvLyBcdTUxN0NcdTVCQjkgdW5pLWFwcCBcdTVDMEZcdTdBMEJcdTVFOEZcdTdBRUZcdTVCRjlcdTY4MzlcdTc2RUVcdTVGNTVcdTU0MkJcdTcwQjlcdTY1ODdcdTRFRjZcdTU0MERcdTdFQzRcdTRFRjZcdUZGMDhcdTU5ODIgQXBwLmt1LnV2dWVcdUZGMDlcdTZBMjFcdTY3N0ZcdTdGMTZcdThCRDFcdTY1RjZcdTVDMDZcdTUyNERcdTdGMDBcdTYyMkFcdTY1QURcdTRFM0EgQXBwLnd4bWwgXHU3Njg0XHU3RjNBXHU5Njc3XG4gICAgICBpZiAocmF3Um9vdEZpbGVOYW1lLmluY2x1ZGVzKCcuJykpIHtcbiAgICAgICAgY29uc3QgbWluaVByb2dyYW1FeHRzID0gWycud3htbCcsICcuYXhtbCcsICcudHRtbCcsICcuc3dhbicsICcucW1sJ107XG4gICAgICAgIGZvciAoY29uc3QgZXh0IG9mIG1pbmlQcm9ncmFtRXh0cykge1xuICAgICAgICAgIGNvbnN0IHNyY0ZpbGUgPSBgQXBwJHtleHR9YDtcbiAgICAgICAgICBjb25zdCBkZXN0RmlsZSA9IGAke3Jhd1Jvb3RGaWxlTmFtZX0ke2V4dH1gO1xuICAgICAgICAgIGlmIChidW5kbGVbc3JjRmlsZV0gJiYgIWJ1bmRsZVtkZXN0RmlsZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdEZpbGUoe1xuICAgICAgICAgICAgICB0eXBlOiAnYXNzZXQnLFxuICAgICAgICAgICAgICBmaWxlTmFtZTogZGVzdEZpbGUsXG4gICAgICAgICAgICAgIHNvdXJjZTogKGJ1bmRsZVtzcmNGaWxlXSBhcyBhbnkpLnNvdXJjZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB3cml0ZUJ1bmRsZShvcHRpb25zOiBhbnkpIHtcbiAgICAgIC8vIFx1NEVBN1x1NzI2OVx1ODQzRFx1NzZEOFx1NTQwRVx1NzY4NFx1NTNDQ1x1OTFDRFx1NTE1Q1x1NUU5NVx1RkYwQ1x1Nzg2RVx1NEZERFx1NzhDMVx1NzZEOFx1NzZFRVx1NUY1NVx1NEUyRFx1NTQwQ1x1NkI2NVx1NUI1OFx1NTcyOFx1NUI4Q1x1NjU3NFx1NzY4NFx1N0VDNFx1NEVGNlx1NkEyMVx1Njc3Rlx1NjU4N1x1NEVGNlxuICAgICAgaWYgKHJhd1Jvb3RGaWxlTmFtZS5pbmNsdWRlcygnLicpKSB7XG4gICAgICAgIGNvbnN0IG91dERpciA9IG9wdGlvbnMuZGlyO1xuICAgICAgICBpZiAoIW91dERpcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtaW5pUHJvZ3JhbUV4dHMgPSBbJy53eG1sJywgJy5heG1sJywgJy50dG1sJywgJy5zd2FuJywgJy5xbWwnXTtcbiAgICAgICAgZm9yIChjb25zdCBleHQgb2YgbWluaVByb2dyYW1FeHRzKSB7XG4gICAgICAgICAgY29uc3Qgc3JjRmlsZSA9IHBhdGguam9pbihvdXREaXIsIGBBcHAke2V4dH1gKTtcbiAgICAgICAgICBjb25zdCBkZXN0RmlsZSA9IHBhdGguam9pbihvdXREaXIsIGAke3Jhd1Jvb3RGaWxlTmFtZX0ke2V4dH1gKTtcbiAgICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhzcmNGaWxlKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZnMuY29weUZpbGVTeW5jKHNyY0ZpbGUsIGRlc3RGaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgeyB1bmlSb290WCBhcyBhdXRvUm9vdFBsdWdpbiB9O1xuZXhwb3J0IGRlZmF1bHQgdW5pUm9vdFg7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy9wYWdlcy1qc29uLXV0aWwudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnMvcGFnZXMtanNvbi11dGlsLnRzXCI7aW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJztcbmltcG9ydCB7IHBhcnNlIGFzIGNqUGFyc2UgfSBmcm9tICdjb21tZW50LWpzb24nO1xuaW1wb3J0IEpTT041IGZyb20gJ2pzb241JztcblxuLyoqXG4gKiBcdTY4MjFcdTlBOENcdTY3NjFcdTRFRjZcdTdGMTZcdThCRDFcdTVFNzNcdTUzRjBcdTY4MDdcdThCQzZcdTY2MkZcdTU0MjZcdTUzMzlcdTkxNERcdTVGNTNcdTUyNERcdTc2RUVcdTY4MDdcdTVFNzNcdTUzRjBcbiAqXG4gKiBcdTg5QzRcdTUyMTlcdTVCRjlcdTlGNTAgdW5pLWFwcCAvIHVuaS1hcHAgWCBcdTY3NjFcdTRFRjZcdTdGMTZcdThCRDFcdTg5QzRcdTgzMDNcdUZGMUFcbiAqIC0gSDUgLyBXRUIgXHU0RTkyXHU0RTNBXHU1MjJCXHU1NDBEXG4gKiAtIE1QIFx1NTMzOVx1OTE0RFx1NjI0MFx1NjcwOVx1NUMwRlx1N0EwQlx1NUU4Rlx1RkYwOE1QLVdFSVhJTlx1MzAwMU1QLUFMSVBBWVx1MzAwMU1QLUJBSURVIFx1N0I0OVx1RkYwOVxuICogLSBBUFAgLyBBUFAtUExVUyBcdTUzMzlcdTkxNERcdTYyNDBcdTY3MDkgQXBwXHVGRjA4QVBQLUFORFJPSURcdTMwMDFBUFAtSU9TXHUzMDAxQVBQLUhBUk1PTlkgXHU3QjQ5XHVGRjA5XG4gKiAtIFx1NjUyRlx1NjMwMSBgfHxgIFx1NTkxQVx1NUU3M1x1NTNGMFx1OTAzQlx1OEY5MVx1NjIxNlx1RkYwOFx1NTk4MiBgQVBQIHx8IE1QLVdFSVhJTmBcdUZGMDlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoZXNQbGF0Zm9ybShjb25kaXRpb25TdHI6IHN0cmluZywgdGFyZ2V0UGxhdGZvcm06IHN0cmluZyk6IGJvb2xlYW4ge1xuICBsZXQgbm9ybVRhcmdldCA9ICh0YXJnZXRQbGF0Zm9ybSB8fCAnJykudHJpbSgpLnRvVXBwZXJDYXNlKCk7XG4gIGlmICghbm9ybVRhcmdldCkge1xuICAgIG5vcm1UYXJnZXQgPSAocHJvY2Vzcy5lbnYuVU5JX1BMQVRGT1JNIHx8ICdINScpLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xuICB9XG4gIGlmIChub3JtVGFyZ2V0ID09PSAnQVBQJyB8fCBub3JtVGFyZ2V0ID09PSAnQVBQLVBMVVMnKSB7XG4gICAgbm9ybVRhcmdldCA9IHByb2Nlc3MuZW52LlVOSV9BUFBfUExBVEZPUk0gPyBgQVBQLSR7cHJvY2Vzcy5lbnYuVU5JX0FQUF9QTEFURk9STS50b1VwcGVyQ2FzZSgpfWAgOiAnQVBQLUFORFJPSUQnO1xuICB9XG4gIGNvbnN0IHBsYXRmb3JtcyA9IGNvbmRpdGlvblN0ci5zcGxpdCgnfHwnKS5tYXAocCA9PiBwLnRyaW0oKS50b1VwcGVyQ2FzZSgpKS5maWx0ZXIoQm9vbGVhbik7XG5cbiAgY29uc3QgaXNNYXRjaFNpbmdsZSA9IChwOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICBpZiAocCA9PT0gbm9ybVRhcmdldCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIE1QIFx1OTAxQVx1OTE0RFx1NjI0MFx1NjcwOVx1NUMwRlx1N0EwQlx1NUU4RiAoTVAtV0VJWElOLCBNUC1BTElQQVksIE1QLUJBSURVLCBNUC1UT1VUSUFPLCBNUC1RUSwgTVAtS1VBSVNIT1UsIE1QLUxBUkssIE1QLUpELCBNUC1YSFMsIE1QLTM2MCwgTVAtSEFSTU9OWSBcdTdCNDkpXG4gICAgaWYgKHAgPT09ICdNUCcgJiYgbm9ybVRhcmdldC5zdGFydHNXaXRoKCdNUC0nKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIEg1IFx1NEUwRSBXRUIgXHU0RTkyXHU0RTNBXHU1MjJCXHU1NDBEXG4gICAgaWYgKChwID09PSAnSDUnIHx8IHAgPT09ICdXRUInKSAmJiAobm9ybVRhcmdldCA9PT0gJ0g1JyB8fCBub3JtVGFyZ2V0ID09PSAnV0VCJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBBUFAgLyBBUFAtUExVUyBcdTkwMUFcdTkxNERcdTYyNDBcdTY3MDkgQXBwIChBUFAtQU5EUk9JRCwgQVBQLUlPUywgQVBQLUhBUk1PTlkpXG4gICAgaWYgKChwID09PSAnQVBQJyB8fCBwID09PSAnQVBQLVBMVVMnKSAmJiAobm9ybVRhcmdldC5zdGFydHNXaXRoKCdBUFAnKSB8fCBub3JtVGFyZ2V0ID09PSAnQVBQLVBMVVMnKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4gcGxhdGZvcm1zLnNvbWUoaXNNYXRjaFNpbmdsZSk7XG59XG5cbi8qKlxuICogXHU2MzA5XHU1RjUzXHU1MjREXHU1RTczXHU1M0YwXHU4RkM3XHU2RUU0XHU2NTg3XHU2NzJDXHU0RTJEXHU3Njg0IGAjaWZkZWZgIC8gYCNpZm5kZWZgIC8gYCNlbmRpZmAgXHU2NzYxXHU0RUY2XHU3RjE2XHU4QkQxXHU2Q0U4XHU5MUNBXHU1NzU3XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVwcm9jZXNzSnNvbkNvbW1lbnRzKGNvbnRlbnQ6IHN0cmluZywgdGFyZ2V0UGxhdGZvcm0/OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBwbGF0Zm9ybSA9IHRhcmdldFBsYXRmb3JtIHx8IHByb2Nlc3MuZW52LlVOSV9QTEFURk9STSB8fCAnaDUnO1xuICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoL1xccj9cXG4vKTtcbiAgY29uc3Qgc3RhY2s6IGJvb2xlYW5bXSA9IFt0cnVlXTtcbiAgY29uc3Qgb3V0TGluZXM6IHN0cmluZ1tdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICBjb25zdCB0cmltbWVkID0gbGluZS50cmltKCk7XG5cbiAgICAvLyBcdTUzMzlcdTkxNEQgLy8gI2lmZGVmIFBMQVRGT1JNIFx1NjIxNiAvKiAjaWZkZWYgUExBVEZPUk0gKi9cbiAgICBpZiAodHJpbW1lZC5zdGFydHNXaXRoKCcvLycpIHx8IHRyaW1tZWQuc3RhcnRzV2l0aCgnLyonKSkge1xuICAgICAgY29uc3Qgc3RyaXBwZWQgPSB0cmltbWVkLnJlcGxhY2UoL15cXC9cXC9cXHMqfF5cXC9cXCpcXHMqfFxccypcXCpcXC8kL2csICcnKTtcbiAgICAgIGNvbnN0IGlzSWZkZWYgPSBzdHJpcHBlZC5zdGFydHNXaXRoKCcjaWZkZWYgJyk7XG4gICAgICBjb25zdCBpc0lmbmRlZiA9IHN0cmlwcGVkLnN0YXJ0c1dpdGgoJyNpZm5kZWYgJyk7XG4gICAgICBpZiAoaXNJZmRlZiB8fCBpc0lmbmRlZikge1xuICAgICAgICBjb25zdCB0eXBlID0gaXNJZmRlZiA/ICdpZmRlZicgOiAnaWZuZGVmJztcbiAgICAgICAgY29uc3QgY29uZCA9IHN0cmlwcGVkLnNsaWNlKHR5cGUubGVuZ3RoICsgMSkudHJpbSgpO1xuICAgICAgICBjb25zdCBtYXRjaCA9IG1hdGNoZXNQbGF0Zm9ybShjb25kLCBwbGF0Zm9ybSk7XG4gICAgICAgIGNvbnN0IHBhcmVudEFjdGl2ZSA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IHBhcmVudEFjdGl2ZSAmJiAodHlwZSA9PT0gJ2lmZGVmJyA/IG1hdGNoIDogIW1hdGNoKTtcbiAgICAgICAgc3RhY2sucHVzaChpc0FjdGl2ZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBcdTUzMzlcdTkxNEQgI2VuZGlmXG4gICAgICBpZiAoc3RyaXBwZWQgPT09ICcjZW5kaWYnKSB7XG4gICAgICAgIGlmIChzdGFjay5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdKSB7XG4gICAgICBvdXRMaW5lcy5wdXNoKGxpbmUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXRMaW5lcy5qb2luKCdcXG4nKTtcbn1cblxuZXhwb3J0IHR5cGUgUGFyc2VkUGFnZXNKc29uID0ge1xuICBwYWdlcz86IEFycmF5PFJlY29yZDxzdHJpbmcsIGFueT4+O1xuICBzdWJQYWNrYWdlcz86IEFycmF5PHsgcm9vdDogc3RyaW5nOyBwYWdlczogQXJyYXk8UmVjb3JkPHN0cmluZywgYW55Pj4gfT47XG4gIGdsb2JhbFN0eWxlPzogUmVjb3JkPHN0cmluZywgYW55PjtcbiAgdGFiQmFyPzogUmVjb3JkPHN0cmluZywgYW55PjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufTtcblxuLyoqXG4gKiBcdTVCODlcdTUxNjhcdTg5RTNcdTY3OTAgcGFnZXMuanNvblx1RkYxQVx1NTE0OFx1NjMwOSB0YXJnZXRQbGF0Zm9ybSBcdTUwNUFcdThERThcdTdBRUZcdTY3NjFcdTRFRjZcdTdGMTZcdThCRDFcdTg4QzFcdTUyNkFcdUZGMENcdTUxOERcdTc1MjggSlNPTjUgXHU1QkI5XHU5NTE5XHU4OUUzXHU2NzkwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBsYXRmb3JtUGFnZXNKc29uKHJhd0NvbnRlbnQ6IHN0cmluZywgdGFyZ2V0UGxhdGZvcm0/OiBzdHJpbmcpOiBQYXJzZWRQYWdlc0pzb24ge1xuICBjb25zdCBwcmVwcm9jZXNzZWQgPSBwcmVwcm9jZXNzSnNvbkNvbW1lbnRzKHJhd0NvbnRlbnQsIHRhcmdldFBsYXRmb3JtKTtcbiAgcmV0dXJuIEpTT041LnBhcnNlKHByZXByb2Nlc3NlZCkgYXMgUGFyc2VkUGFnZXNKc29uO1xufVxuXG4vKipcbiAqIFx1NEVDRVx1NjU4N1x1NEVGNlx1OERFRlx1NUY4NFx1OEJGQlx1NTNENlx1NUU3Nlx1NjMwOVx1NUY1M1x1NTI0RFx1NUU3M1x1NTNGMFx1ODlFM1x1Njc5MCBwYWdlcy5qc29uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkUGxhdGZvcm1QYWdlc0pzb24ocGFnZXNKc29uUGF0aDogc3RyaW5nLCB0YXJnZXRQbGF0Zm9ybT86IHN0cmluZyk6IFBhcnNlZFBhZ2VzSnNvbiB7XG4gIGlmICghZnMuZXhpc3RzU3luYyhwYWdlc0pzb25QYXRoKSkge1xuICAgIHJldHVybiB7IHBhZ2VzOiBbXSwgc3ViUGFja2FnZXM6IFtdIH07XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCByYXdDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKHBhZ2VzSnNvblBhdGgsICd1dGYtOCcpO1xuICAgIHJldHVybiBwYXJzZVBsYXRmb3JtUGFnZXNKc29uKHJhd0NvbnRlbnQsIHRhcmdldFBsYXRmb3JtKTtcbiAgfVxuICBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFtsb2FkUGxhdGZvcm1QYWdlc0pzb25dIFx1ODlFM1x1Njc5MCBwYWdlcy5qc29uIFx1NTkzMVx1OEQyNTpgLCBlKTtcbiAgICByZXR1cm4geyBwYWdlczogW10sIHN1YlBhY2thZ2VzOiBbXSB9O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFBsYXRmb3JtUGFnZVZhcmlhbnQgPSB7XG4gIGNvbmRpdGlvbjogc3RyaW5nIHwgbnVsbDtcbiAgcGFnZTogUmVjb3JkPHN0cmluZywgYW55Pjtcbn07XG5cbi8qKlxuICogXHU2M0QwXHU1M0Q2IHBhZ2VzLmpzb24gXHU0RTJEXHU2MjQwXHU2NzA5XHU1MUZBXHU3M0IwXHU3Njg0IGRpc3RpbmN0ICNpZmRlZiBcdTVFNzNcdTUzRjBcdTY3NjFcdTRFRjZcdTg4NjhcdThGQkVcdTVGMEZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3REaXN0aW5jdFBsYXRmb3JtQ29uZGl0aW9ucyhwYWdlc0pzb25QYXRoOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIGlmICghZnMuZXhpc3RzU3luYyhwYWdlc0pzb25QYXRoKSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHJhd0NvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMocGFnZXNKc29uUGF0aCwgJ3V0Zi04Jyk7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHJhd0NvbnRlbnQubWF0Y2hBbGwoLyNpZmRlZlxccysoW15cXHJcXG4qL10rKS9nKTtcbiAgICBjb25zdCBjb25kaXRpb25zID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCBtYXRjaCBvZiBtYXRjaGVzKSB7XG4gICAgICBpZiAobWF0Y2hbMV0pIHtcbiAgICAgICAgY29uZGl0aW9ucy5hZGQobWF0Y2hbMV0udHJpbSgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oY29uZGl0aW9ucyk7XG4gIH1cbiAgY2F0Y2gge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG4vKipcbiAqIFx1OEJGQlx1NTNENiBwYWdlcy5qc29uIFx1NEUyRFx1NjI0MFx1NjcwOVx1OTg3NVx1OTc2Mlx1NzY4NFx1NTE2OFx1NUU3M1x1NTNGMFx1NTNEOFx1NEY1M1x1NTIxN1x1ODg2OFxuICogXHU5NTJFXHU0RTNBXHU4OUM0XHU4MzAzXHU1MzE2XHU4REVGXHU1Rjg0XHVGRjA4XHU1OTgyIHNyYy9wYWdlcy9pbmRleC9pbmRleFx1RkYwOVx1RkYwQ1x1NTAzQ1x1NEUzQVx1OEJFNVx1OTg3NVx1OTc2Mlx1NTcyOFx1NTQwNCAjaWZkZWYgXHU1NzU3XHU0RTBCXHU3Njg0XHU5MTREXHU3RjZFXHU5ODc5XHU1MjE3XHU4ODY4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQWxsUGxhdGZvcm1QYWdlVmFyaWFudHMocGFnZXNKc29uUGF0aDogc3RyaW5nKTogTWFwPHN0cmluZywgUGxhdGZvcm1QYWdlVmFyaWFudFtdPiB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXA8c3RyaW5nLCBQbGF0Zm9ybVBhZ2VWYXJpYW50W10+KCk7XG4gIGlmICghZnMuZXhpc3RzU3luYyhwYWdlc0pzb25QYXRoKSkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCByYXdDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKHBhZ2VzSnNvblBhdGgsICd1dGYtOCcpO1xuICAgIGNvbnN0IHBhcnNlZCA9IGNqUGFyc2UocmF3Q29udGVudCkgYXMgYW55O1xuICAgIGlmIChwYXJzZWQgJiYgQXJyYXkuaXNBcnJheShwYXJzZWQucGFnZXMpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnNlZC5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpdGVtID0gcGFyc2VkLnBhZ2VzW2ldO1xuICAgICAgICBpZiAoIWl0ZW0gfHwgdHlwZW9mIGl0ZW0ucGF0aCAhPT0gJ3N0cmluZycpXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIGNvbnN0IG5vcm1QYXRoID0gaXRlbS5wYXRoLnJlcGxhY2UoL1xcXFwvZywgJy8nKS5yZXBsYWNlKC9eXFwvLywgJycpO1xuICAgICAgICBjb25zdCBiZWZvcmUgPSBwYXJzZWQucGFnZXNbU3ltYm9sLmZvcihgYmVmb3JlOiR7aX1gKV0gYXMgYW55W10gfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBjb25kaXRpb246IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgICBpZiAoYmVmb3JlKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBjIG9mIGJlZm9yZSkge1xuICAgICAgICAgICAgaWYgKGMgJiYgdHlwZW9mIGMudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gYy52YWx1ZS5tYXRjaCgvI2lmZGVmXFxzKyhbXlxcclxcbiovXSspLyk7XG4gICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIGNvbmRpdGlvbiA9IG1hdGNoWzFdLnRyaW0oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgbGlzdCA9IHJlc3VsdC5nZXQobm9ybVBhdGgpO1xuICAgICAgICBpZiAoIWxpc3QpIHtcbiAgICAgICAgICBsaXN0ID0gW107XG4gICAgICAgICAgcmVzdWx0LnNldChub3JtUGF0aCwgbGlzdCk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdC5wdXNoKHsgY29uZGl0aW9uLCBwYWdlOiBpdGVtIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyc2VkICYmIEFycmF5LmlzQXJyYXkocGFyc2VkLnN1YlBhY2thZ2VzKSkge1xuICAgICAgZm9yIChjb25zdCBzcGtnIG9mIHBhcnNlZC5zdWJQYWNrYWdlcykge1xuICAgICAgICBpZiAoIXNwa2cgfHwgIUFycmF5LmlzQXJyYXkoc3BrZy5wYWdlcykpXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIGNvbnN0IHJvb3QgPSAoc3BrZy5yb290IHx8ICcnKS5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvXlxcLy8sICcnKS5yZXBsYWNlKC9cXC8kLywgJycpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwa2cucGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gc3BrZy5wYWdlc1tpXTtcbiAgICAgICAgICBpZiAoIWl0ZW0gfHwgdHlwZW9mIGl0ZW0ucGF0aCAhPT0gJ3N0cmluZycpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICBjb25zdCByZWxQYXRoID0gaXRlbS5wYXRoLnJlcGxhY2UoL1xcXFwvZywgJy8nKS5yZXBsYWNlKC9eXFwvLywgJycpO1xuICAgICAgICAgIGNvbnN0IGZ1bGxQYXRoID0gcm9vdCA/IGAke3Jvb3R9LyR7cmVsUGF0aH1gIDogcmVsUGF0aDtcbiAgICAgICAgICBjb25zdCBiZWZvcmUgPSBzcGtnLnBhZ2VzW1N5bWJvbC5mb3IoYGJlZm9yZToke2l9YCldIGFzIGFueVtdIHwgdW5kZWZpbmVkO1xuICAgICAgICAgIGxldCBjb25kaXRpb246IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgICAgIGlmIChiZWZvcmUpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBiZWZvcmUpIHtcbiAgICAgICAgICAgICAgaWYgKGMgJiYgdHlwZW9mIGMudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBjLnZhbHVlLm1hdGNoKC8jaWZkZWZcXHMrKFteXFxyXFxuKi9dKykvKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbiA9IG1hdGNoWzFdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGxpc3QgPSByZXN1bHQuZ2V0KGZ1bGxQYXRoKTtcbiAgICAgICAgICBpZiAoIWxpc3QpIHtcbiAgICAgICAgICAgIGxpc3QgPSBbXTtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoZnVsbFBhdGgsIGxpc3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaXN0LnB1c2goeyBjb25kaXRpb24sIHBhZ2U6IGl0ZW0gfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbbG9hZEFsbFBsYXRmb3JtUGFnZVZhcmlhbnRzXSBcdTg5RTNcdTY3OTAgcGFnZXMuanNvbiBcdTU5MzFcdThEMjU6YCwgZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3ZpdGUtcGx1Z2luLWNsZWFuLWxvZ2dlci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy92aXRlLXBsdWdpbi1jbGVhbi1sb2dnZXIudHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbiB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgY3JlYXRlTG9nZ2VyIH0gZnJvbSAndml0ZSc7XG5cbmV4cG9ydCB0eXBlIENsZWFuTG9nZ2VyT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFx1NjYyRlx1NTQyNlx1NUI4Q1x1NTE2OFx1OEZDN1x1NkVFNFx1NjNBN1x1NTIzNlx1NTNGMFx1NjI0MFx1NjcwOSB3YXJuaW5nIFx1N0VBN1x1NTIyQlx1OEY5M1x1NTFGQVx1RkYwQ1x1OUVEOFx1OEJBNCB0cnVlXG4gICAqL1xuICBzaWxlbmNlQWxsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFx1OTcwMFx1OEZDN1x1NkVFNFx1NzY4NFx1NTE3M1x1OTUyRVx1OEJDRFx1NTMzOVx1OTE0RFx1NTIxN1x1ODg2OFx1RkYwOFx1NjUyRlx1NjMwMVx1NUI1N1x1N0IyNlx1NEUzMlx1NjIxNlx1NkI2M1x1NTIxOVx1RkYwOVxuICAgKi9cbiAgaWdub3JlZFBhdHRlcm5zPzogKHN0cmluZyB8IFJlZ0V4cClbXTtcbn07XG5cbmNvbnN0IERFRkFVTFRfSUdOT1JFRF9QQVRURVJOUzogKHN0cmluZyB8IFJlZ0V4cClbXSA9IFtcbiAgJy0tYWxsb3dBcmJpdHJhcnlFeHRlbnNpb25zJyxcbiAgJ2FsbG93QXJiaXRyYXJ5RXh0ZW5zaW9ucycsXG4gICdyaWNlLXVpJyxcbiAgJ3VzZUNoaWxkcmVuLnV0cycsXG4gICdObyBvdmVybG9hZCBtYXRjaGVzIHRoaXMgY2FsbCcsXG4gICduZWl0aGVyIHR5cGUgc3VmZmljaWVudGx5IG92ZXJsYXBzJyxcbiAgJ0NvbnZlcnNpb24gb2YgdHlwZScsXG4gICd1dGY4J1xuXTtcblxubGV0IGlzQ29uc29sZVBhdGNoZWQgPSBmYWxzZTtcbmxldCBnbG9iYWxTaWxlbmNlQWxsID0gdHJ1ZTtcbmxldCBnbG9iYWxJZ25vcmVkUGF0dGVybnM6IChzdHJpbmcgfCBSZWdFeHApW10gPSBERUZBVUxUX0lHTk9SRURfUEFUVEVSTlM7XG5cbmZ1bmN0aW9uIGNoZWNrU2hvdWxkSWdub3JlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAoZ2xvYmFsU2lsZW5jZUFsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBnbG9iYWxJZ25vcmVkUGF0dGVybnMuc29tZSgocGF0dGVybikgPT4ge1xuICAgIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0ZXh0LmluY2x1ZGVzKHBhdHRlcm4pO1xuICAgIH1cbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KHRleHQpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBcdTYzQTdcdTUyMzZcdTUzRjBcdThCNjZcdTU0NEFcdTRFMEVcdTRFRTNcdTc4MDFcdTcyNDdcdTZCQjVcdTUxQzBcdTUzMTYgVml0ZSBcdTYzRDJcdTRFRjZcbiAqXG4gKiBcdTUyOUZcdTgwRkRcdUZGMUFcbiAqIDEuIFx1OEZDN1x1NkVFNCBWaXRlIFx1NUYwMFx1NTNEMVx1NjcwRFx1NTJBMVx1NTY2OFx1NTNDQVx1Njc4NFx1NUVGQVx1OTYzNlx1NkJCNVx1NzY4NCB3YXJuaW5nIFx1NjVFNVx1NUZEN1x1OEY5M1x1NTFGQVx1RkYwOFx1NEZERFx1NzU1OSBlcnJvciBcdTRFMEUgaW5mb1x1RkYwOVxuICogMi4gXHU2MkU2XHU2MjJBXHU3QjJDXHU0RTA5XHU2NUI5XHU1RTkzXHU1M0NBXHU2M0QyXHU0RUY2XHU3NkY0XHU2M0E1XHU4QzAzXHU3NTI4XHU3Njg0IGNvbnNvbGUud2FybiBcdTRFRTVcdTUzQ0FcdTdEMjdcdTk2OEZcdTUxNzZcdTU0MEVcdTc2ODRcdTVCOUFcdTRGNERcdTg4NENcdTRFMEVcdTRFRTNcdTc4MDFcdTcyNDdcdTZCQjVcbiAqIDMuIFx1NjJFNlx1NjIyQSBEQ2xvdWQgXHU3RjE2XHU4QkQxXHU2NzFGXHU5MDFBXHU4RkM3IGNvbnNvbGUubG9nIFx1NjI1M1x1NTM3MFx1NzY4NCBXQVJOX0JMT0NLXHVGRjA4XFx1RkVGRlx1RkYwOVx1NEUwRVx1NEVFM1x1NzgwMVx1NzI0N1x1NkJCNVx1RkYwOENvZGUgRnJhbWVcdUZGMDlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xlYW5Mb2dnZXJQbHVnaW4ob3B0aW9uczogQ2xlYW5Mb2dnZXJPcHRpb25zID0ge30pOiBQbHVnaW4ge1xuICBjb25zdCB7XG4gICAgc2lsZW5jZUFsbCA9IHRydWUsXG4gICAgaWdub3JlZFBhdHRlcm5zID0gW11cbiAgfSA9IG9wdGlvbnM7XG5cbiAgZ2xvYmFsU2lsZW5jZUFsbCA9IHNpbGVuY2VBbGw7XG4gIGdsb2JhbElnbm9yZWRQYXR0ZXJucyA9IFsuLi5ERUZBVUxUX0lHTk9SRURfUEFUVEVSTlMsIC4uLmlnbm9yZWRQYXR0ZXJuc107XG5cbiAgZnVuY3Rpb24gc2hvdWxkSWdub3JlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjaGVja1Nob3VsZElnbm9yZSh0ZXh0KTtcbiAgfVxuXG4gIC8vIFx1ODg2NVx1NEUwMVx1NjJFNlx1NjIyQVx1NTE2OFx1NUM0MCBjb25zb2xlLndhcm4gXHU0RTBFIGNvbnNvbGUubG9nXHVGRjA4XHU5NjMyXHU2QjYyIERDbG91ZCAvIHVuaS11dHMtdjEgXHU2MjUzXHU1MzcwXHU1NDRBXHU4QjY2XHU0RUUzXHU3ODAxXHU3MjQ3XHU2QkI1XHVGRjA5XG4gIGlmICghaXNDb25zb2xlUGF0Y2hlZCkge1xuICAgIGlzQ29uc29sZVBhdGNoZWQgPSB0cnVlO1xuXG4gICAgbGV0IHN1cHByZXNzQ29kZUZyYW1lQ291bnQgPSAwO1xuXG4gICAgY29uc3Qgb3JpZ2luYWxDb25zb2xlV2FybiA9IGNvbnNvbGUud2FybjtcbiAgICBjb25zb2xlLndhcm4gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIGNvbnN0IHN0ciA9IGFyZ3MubWFwKGEgPT4gKHR5cGVvZiBhID09PSAnc3RyaW5nJyA/IGEgOiAoYT8ubWVzc2FnZSA/PyBhPy50b1N0cmluZz8uKCkgPz8gJycpKSkuam9pbignICcpO1xuXG4gICAgICAvLyBcdTU5ODJcdTY3OUNcdTk3MDBcdTg5ODFcdTVGRkRcdTc1NjVcdTZCNjQgd2FybmluZ1xuICAgICAgaWYgKHNob3VsZElnbm9yZShzdHIpKSB7XG4gICAgICAgIHN1cHByZXNzQ29kZUZyYW1lQ291bnQgPSAzO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFx1NTk4Mlx1Njc5Q1x1NUY1M1x1NTI0RFx1NkI2M1x1NTkwNFx1NEU4RVx1ODhBQlx1NUZGRFx1NzU2NVx1NTQ0QVx1OEI2Nlx1NzY4NFx1NTQwRVx1N0VFRFx1NUI5QVx1NEY0RFx1ODg0Q1x1RkYwOFx1NTk4MiBcImF0IHNyYy9zdG9yZS92YXBvci9hcHAudXRzOjEwOjdcIlx1RkYwOVxuICAgICAgaWYgKHN1cHByZXNzQ29kZUZyYW1lQ291bnQgPiAwICYmIChzdHIuc3RhcnRzV2l0aCgnYXQgJykgfHwgc3RyLmluY2x1ZGVzKCcgYXQgJykpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3VwcHJlc3NDb2RlRnJhbWVDb3VudCA9IDA7XG4gICAgICBvcmlnaW5hbENvbnNvbGVXYXJuLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBjb25zdCBvcmlnaW5hbENvbnNvbGVMb2cgPSBjb25zb2xlLmxvZztcblxuICAgIGNvbnNvbGUubG9nID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICBjb25zdCBzdHIgPSBhcmdzLm1hcChhID0+ICh0eXBlb2YgYSA9PT0gJ3N0cmluZycgPyBhIDogKGE/Lm1lc3NhZ2UgPz8gYT8udG9TdHJpbmc/LigpID8/ICcnKSkpLmpvaW4oJyAnKTtcblxuICAgICAgLy8gXHU3RUREXHU1QkY5XHU0RTBEXHU2MkU2XHU2MjJBXHU5NTE5XHU4QkVGXHU0RkUxXHU2MDZGXHVGRjA4XFx1MjA2MCBcdTRFM0EgRENsb3VkIEVSUk9SX0JMT0NLXHVGRjA5XG4gICAgICBpZiAoc3RyLmluY2x1ZGVzKCdcXHUyMDYwJykgfHwgc3RyLmluY2x1ZGVzKCdlcnJvcjonKSB8fCBzdHIuaW5jbHVkZXMoJ0Vycm9yOicpIHx8IHN0ci5pbmNsdWRlcygnZmFpbGVkJykgfHwgc3RyLmluY2x1ZGVzKCdcdTU5MzFcdThEMjUnKSkge1xuICAgICAgICBzdXBwcmVzc0NvZGVGcmFtZUNvdW50ID0gMDtcbiAgICAgICAgb3JpZ2luYWxDb25zb2xlTG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIDEuIERDbG91ZCBcdTdGMTZcdThCRDFcdTU0NEFcdThCNjZcdTY4MDdcdThCQzZcdTdCMjYgKFxcdUZFRkYgXHU0RTNBIFNQRUNJQUxfQ0hBUlMuV0FSTl9CTE9DSylcbiAgICAgIGlmIChzdHIuaW5jbHVkZXMoJ1xcdUZFRkYnKSkge1xuICAgICAgICBzdXBwcmVzc0NvZGVGcmFtZUNvdW50ID0gMztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyAyLiBcdTdEMjdcdThEREZcdTU3MjhcdTU0NEFcdThCNjZcdTU0MEVcdTk3NjJcdTc2ODRcdTVCOUFcdTRGNERcdTg4NEMgKGF0IHJlbGF0aXZlRmlsZU5hbWU6bGluZTpjb2x1bW4pXG4gICAgICBpZiAoc3VwcHJlc3NDb2RlRnJhbWVDb3VudCA+IDAgJiYgKHN0ci5zdGFydHNXaXRoKCdhdCAnKSB8fCBzdHIuaW5jbHVkZXMoJyBhdCAnKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyAzLiBcdTRFRTNcdTc4MDFcdTcyNDdcdTZCQjUgQ29kZSBGcmFtZSBcdTY4M0NcdTVGMEZcdUZGMDhcdTRGOEJcdTU5ODIgXCIgIDggfCAuLi5cIlx1MzAwMVwiPiAxMCB8IC4uLlwiIFx1NjIxNiBcIiAgICAgfCAgIF5eXl5cIlx1RkYwOVxuICAgICAgY29uc3QgaXNDb2RlRnJhbWUgPSAvKD86XnxcXG4pXFxzKig/Oj5cXHMqKT9cXGQrXFxzKlxcfC8udGVzdChzdHIpIHx8IC8oPzpefFxcbilcXHMqXFx8XFxzKlxcXisvLnRlc3Qoc3RyKTtcbiAgICAgIGlmIChpc0NvZGVGcmFtZSAmJiAoc3VwcHJlc3NDb2RlRnJhbWVDb3VudCA+IDAgfHwgZ2xvYmFsU2lsZW5jZUFsbCkpIHtcbiAgICAgICAgc3VwcHJlc3NDb2RlRnJhbWVDb3VudCA9IE1hdGgubWF4KDAsIHN1cHByZXNzQ29kZUZyYW1lQ291bnQgLSAxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyA0LiBcdTdBN0FcdTg4NENcdThEREZcdTk2OEZcdTU3MjhcdTRFRTNcdTc4MDFcdTcyNDdcdTZCQjVcdTU0MEVcdTY1RjZcdUZGMENcdTU5ODJcdTY3OUNcdTUyMUFcdTYyNERcdTYyOTFcdTUyMzZcdTRFODZcdTU0NEFcdThCNjZcdUZGMENcdTRFNUZcdTU0MDNcdTYzODlcdTkwN0ZcdTUxNERcdTU5MUFcdTRGNTlcdTdBN0FcdTg4NENcbiAgICAgIGlmIChzdXBwcmVzc0NvZGVGcmFtZUNvdW50ID4gMCAmJiBzdHIudHJpbSgpID09PSAnJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN1cHByZXNzQ29kZUZyYW1lQ291bnQgPSAwO1xuICAgICAgb3JpZ2luYWxDb25zb2xlTG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICd2aXRlLXBsdWdpbi1jbGVhbi1sb2dnZXInLFxuICAgIGVuZm9yY2U6ICdwcmUnLFxuICAgIGNvbmZpZyhjb25maWcpIHtcbiAgICAgIC8vIDEuIFx1NkNFOFx1NTE2NVx1ODFFQVx1NUI5QVx1NEU0OSBWaXRlIExvZ2dlclxuICAgICAgY29uc3QgY3VzdG9tTG9nZ2VyID0gY3JlYXRlTG9nZ2VyKGNvbmZpZy5sb2dMZXZlbCwge1xuICAgICAgICBhbGxvd0NsZWFyU2NyZWVuOiBjb25maWcuY2xlYXJTY3JlZW5cbiAgICAgIH0pO1xuICAgICAgY29uc3Qgb3JpZ2luYWxXYXJuID0gY3VzdG9tTG9nZ2VyLndhcm47XG4gICAgICBjb25zdCBvcmlnaW5hbFdhcm5PbmNlID0gY3VzdG9tTG9nZ2VyLndhcm5PbmNlO1xuXG4gICAgICBjdXN0b21Mb2dnZXIud2FybiA9IChtc2csIG9wdHMpID0+IHtcbiAgICAgICAgaWYgKHNob3VsZElnbm9yZShtc2cpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG9yaWdpbmFsV2Fybihtc2csIG9wdHMpO1xuICAgICAgfTtcblxuICAgICAgY3VzdG9tTG9nZ2VyLndhcm5PbmNlID0gKG1zZywgb3B0cykgPT4ge1xuICAgICAgICBpZiAoc2hvdWxkSWdub3JlKG1zZykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgb3JpZ2luYWxXYXJuT25jZShtc2csIG9wdHMpO1xuICAgICAgfTtcblxuICAgICAgY29uZmlnLmN1c3RvbUxvZ2dlciA9IGN1c3RvbUxvZ2dlcjtcblxuICAgICAgLy8gMi4gXHU2Q0U4XHU1MTY1IFJvbGx1cCBcdTY3ODRcdTVFRkFcdTk2MzZcdTZCQjVcdTc2ODQgb253YXJuIFx1NjJFNlx1NjIyQVxuICAgICAgaWYgKCFjb25maWcuYnVpbGQpIHtcbiAgICAgICAgY29uZmlnLmJ1aWxkID0ge307XG4gICAgICB9XG4gICAgICBpZiAoIWNvbmZpZy5idWlsZC5yb2xsdXBPcHRpb25zKSB7XG4gICAgICAgIGNvbmZpZy5idWlsZC5yb2xsdXBPcHRpb25zID0ge307XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByZXZPbndhcm4gPSBjb25maWcuYnVpbGQucm9sbHVwT3B0aW9ucy5vbndhcm47XG4gICAgICBjb25maWcuYnVpbGQucm9sbHVwT3B0aW9ucy5vbndhcm4gPSAod2FybmluZywgZGVmYXVsdEhhbmRsZXIpID0+IHtcbiAgICAgICAgY29uc3QgbXNnID0gd2FybmluZy5tZXNzYWdlIHx8ICcnO1xuICAgICAgICBpZiAoc2hvdWxkSWdub3JlKG1zZykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXZPbndhcm4pIHtcbiAgICAgICAgICBwcmV2T253YXJuKHdhcm5pbmcsIGRlZmF1bHRIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWZhdWx0SGFuZGxlcih3YXJuaW5nKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29uZmlnUmVzb2x2ZWQoY29uZmlnKSB7XG4gICAgICAvLyBcdTc4NkVcdTRGRERcdTU3MjhcdTUxNzZcdTRFRDZcdTYzRDJcdTRFRjZcdUZGMDhcdTU5ODIgQGRjbG91ZGlvL3ZpdGUtcGx1Z2luLXVuaVx1RkYwOVx1NTQwOFx1NUU3Nlx1NTQwRVx1RkYwQ1x1NEVDRFx1NzEzNlx1NEZERFx1NjMwMVx1NjJFNlx1NjIyQVx1NzUxRlx1NjU0OFxuICAgICAgaWYgKGNvbmZpZy5jdXN0b21Mb2dnZXIpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxXYXJuID0gY29uZmlnLmN1c3RvbUxvZ2dlci53YXJuO1xuICAgICAgICBjb25maWcuY3VzdG9tTG9nZ2VyLndhcm4gPSAobXNnLCBvcHRzKSA9PiB7XG4gICAgICAgICAgaWYgKHNob3VsZElnbm9yZShtc2cpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIG9yaWdpbmFsV2Fybihtc2csIG9wdHMpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcmlnaW5hbFdhcm5PbmNlID0gY29uZmlnLmN1c3RvbUxvZ2dlci53YXJuT25jZTtcbiAgICAgICAgY29uZmlnLmN1c3RvbUxvZ2dlci53YXJuT25jZSA9IChtc2csIG9wdHMpID0+IHtcbiAgICAgICAgICBpZiAoc2hvdWxkSWdub3JlKG1zZykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3JpZ2luYWxXYXJuT25jZShtc2csIG9wdHMpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLmJ1aWxkPy5yb2xsdXBPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHByZXZPbndhcm4gPSBjb25maWcuYnVpbGQucm9sbHVwT3B0aW9ucy5vbndhcm47XG4gICAgICAgIGNvbmZpZy5idWlsZC5yb2xsdXBPcHRpb25zLm9ud2FybiA9ICh3YXJuaW5nLCBkZWZhdWx0SGFuZGxlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IG1zZyA9IHdhcm5pbmcubWVzc2FnZSB8fCAnJztcbiAgICAgICAgICBpZiAoc2hvdWxkSWdub3JlKG1zZykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHByZXZPbndhcm4pIHtcbiAgICAgICAgICAgIHByZXZPbndhcm4od2FybmluZywgZGVmYXVsdEhhbmRsZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlZmF1bHRIYW5kbGVyKHdhcm5pbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy92aXRlLXBsdWdpbi1lZGl0b3ItdmVyc2lvbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy92aXRlLXBsdWdpbi1lZGl0b3ItdmVyc2lvbi50c1wiO2ltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBleGVjRmlsZVN5bmMgfSBmcm9tICdub2RlOmNoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHsgZGlybmFtZSwgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnO1xuXG5jb25zdCBwcm9qZWN0Um9vdCA9IHJlc29sdmUoZGlybmFtZShmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCkpLCAnLi4nKTtcbmNvbnN0IHN5bmNTY3JpcHQgPSByZXNvbHZlKHByb2plY3RSb290LCAnc2NyaXB0cy9zeW5jLWhidWlsZGVyeC5tanMnKTtcblxuLyoqXG4gKiBcdTdGMTZcdThGOTFcdTU2NjhcdTcyNDhcdTY3MkNcdTVCRjlcdTlGNTBcdTYzRDBcdTc5M0FcdTMwMDJcbiAqXG4gKiBcdTRFM0FcdTRFQzBcdTRFNDhcdTk3MDBcdTg5ODFcdTVCODNcdUZGMUFcdTk4NzlcdTc2RUUgcGluIFx1NEU4NiA0IFx1NEUyQSBAZGNsb3VkaW8vKiBcdTRGOURcdThENTZcdUZGMENcdTVFOTRcdTVGNTNcdTRFMEVcdTY3MkNcdTY3M0EgSEJ1aWxkZXJYIC8gSEJ1aWxkZXJWIFx1NzY4NFx1N0YxNlx1OEJEMVx1NTY2OFxuICogXHU3MjQ4XHU2NzJDXHU1QkY5XHU5RjUwXHVGRjA4XHU4QkU2XHU4OUMxIHNjcmlwdHMvc3luYy1oYnVpbGRlcngubWpzIFx1NTkzNFx1OTBFOFx1RkYwOVx1MzAwMlx1ODAwQyB2aXRlLmNvbmZpZy50cyBcdTY2MkYqKlx1NjI0MFx1NjcwOSoqXHU1MTY1XHU1M0UzXHU3Njg0XHU1NTJGXHU0RTAwXG4gKiBcdTVGQzVcdTdFQ0ZcdTRFNEJcdThERUZcdUZGMUFcbiAqICAgLSBwbnBtIGRldiAvIGRldjp3ZWIgLyBkZXY6bW9jayAvIGRldjp2Y29uc29sZVxuICogICAtIHBucG0gZGV2Om1wLSpcdTMwMDFkZXY6YXBwLSpcdUZGMDhcdThGRDlcdTRFOUJcdTc2RjRcdThGREUgdW5pLWxhdW5jaFx1RkYwQ1x1NEUwRFx1N0VDRlx1OEZDN1x1NEVGQlx1NEY1NVx1NTMwNVx1ODhDNVx1ODExQVx1NjcyQ1x1RkYwOVxuICogICAtIHBucG0gYnVpbGQ6aDUgLyBidWlsZDp0ZXN0IC8gYnVpbGQ6cHJvZFxuICogICAtIFx1NEVFNVx1NTNDQVx1NTcyOFx1N0YxNlx1OEY5MVx1NTY2OFx1OTFDQ1x1NzBCOVx1MzAwQ1x1OEZEMFx1ODg0Q1x1MzAwRFx1MzAwQ1x1NTNEMVx1ODg0Q1x1MzAwRFx1NjMwOVx1OTRBRSBcdTIwMTRcdTIwMTQgXHU5MEEzXHU2NzYxXHU4REVGXHU2NjJGXHU3RjE2XHU4RjkxXHU1NjY4XHU4MUVBXHU1REYxXHU4RDc3IHVuaS5qcyBcdTVFNzZcdTUyQTBcdThGN0RcdTY3MkNcdTY1ODdcdTRFRjZcdTc2ODRcbiAqXG4gKiAqKlx1NTNFQVx1NjNEMFx1NzkzQVx1MzAwMVx1NEUwRFx1OTYzQlx1NjVBRCoqXHVGRjFBXHU3MjQ4XHU2NzJDXHU0RTBEXHU0RTAwXHU4MUY0XHU2NzJBXHU1RkM1XHU3QUNCXHU1MjNCXHU1MUZBXHU5NTE5XHVGRjBDXHU0RjQ2XHU0RTAwXHU2NUU2XHU1MUZBXHU5NTE5XHVGRjBDXHU3NUM3XHU3MkI2XHU5MDFBXHU1RTM4XHU2NjJGIEFQSSBcdTg4NENcdTRFM0FcdTVERUVcdTVGMDJcdTYyMTZcdTdDN0JcdTU3OEJcbiAqIFx1NEUwRFx1NTMzOVx1OTE0RFx1OEZEOVx1NzlDRFx1NzcwQlx1NEUwRFx1NTFGQVx1NjgzOVx1NTZFMFx1NzY4NFx1OTVFRVx1OTg5OFx1RkYwQ1x1NjI0MFx1NEVFNVx1NkJDRlx1NkIyMVx1OTBGRFx1NjNEMFx1OTE5Mlx1NEUwMFx1NEUwQlx1RkYwQ1x1NzUzMVx1NUYwMFx1NTNEMVx1ODAwNVx1ODFFQVx1NURGMVx1NTIyNFx1NjVBRFx1ODk4MVx1NEUwRFx1ODk4MVx1NTE0OFx1NTQwQ1x1NkI2NVx1MzAwMlxuICpcbiAqIFx1NjNEMFx1NzkzQVx1NjU4N1x1Njg0OFx1NzUzMSBzY3JpcHRzL3N5bmMtaGJ1aWxkZXJ4Lm1qcyBcdTc2ODQgLS1wcmVmbGlnaHQgXHU3NkY0XHU2M0E1XHU1MTk5XHU1MjMwIHN0ZGVyciBcdTIwMTRcdTIwMTQgXHU4RkQ5XHU5MUNDXHU0RTBEXHU4MEZEXHU3NTI4XG4gKiBjb25zb2xlLndhcm5cdUZGMENcdTU2RTBcdTRFM0FcdTY3MkNcdTk4NzlcdTc2RUVcdTc2ODQgY2xlYW5Mb2dnZXJQbHVnaW4oeyBzaWxlbmNlQWxsOiB0cnVlIH0pIFx1ODg2NVx1NEUwMVx1NEU4Nlx1NTE2OFx1NUM0MCBjb25zb2xlXHVGRjBDXG4gKiBcdTRGMUFcdTYyOEFcdThCNjZcdTU0NEFcdTU0MUVcdTYzODlcdTMwMDJcdTU0MENcdTc0MDZcdUZGMENcdTVCNTBcdThGREJcdTdBMEJcdTc1Mjggc3RkaW86ICdpbmhlcml0JyBcdTc2RjRcdTkwMUFcdTdFQzhcdTdBRUZcdUZGMENcdTRFMERcdTUzRDdcdTg4NjVcdTRFMDFcdTVGNzFcdTU0Q0RcdTMwMDJcbiAqXG4gKiBcdTk3NTlcdTlFRDhcdTRFMERcdTYyNTNcdTYyNzBcdTc2ODRcdTYwQzVcdTUxQjVcdUZGMUFcdTY3MkNcdTY3M0FcdTZDQTFcdTg4QzVcdTdGMTZcdThGOTFcdTU2NjhcdUZGMDhDSVx1MzAwMVx1NEUwRFx1NzUyOCBIQnVpbGRlclggXHU3Njg0XHU1NDBDXHU0RThCXHVGRjA5XHUzMDAxcGFja2FnZS5qc29uIFx1OTFDQ1x1NkNBMVx1NjcwOVx1OEZEOVx1NTFFMFx1NEUyQVxuICogcGluXHUzMDAxXHU0RUU1XHU1M0NBXHU4MTFBXHU2NzJDXHU4MUVBXHU4RUFCXHU1RjAyXHU1RTM4XHVGRjA4XHU2QkQ0XHU1OTgyIE5vZGUgXHU3MjQ4XHU2NzJDXHU0RTBEXHU3QjI2XHVGRjA5XHUyMDE0XHUyMDE0IFx1OEZEOVx1NEU5Qlx1OTBGRFx1NEUwRFx1OEJFNVx1NTcyOFx1Njc4NFx1NUVGQVx1NjVGNlx1NTIzN1x1NUM0Rlx1MzAwMlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlZGl0b3JWZXJzaW9uUGx1Z2luKCk6IFBsdWdpbiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3VuaWJlc3R4OmVkaXRvci12ZXJzaW9uJyxcbiAgICBlbmZvcmNlOiAncHJlJyxcbiAgICAvLyBjb25maWcgXHU2NjJGXHU2NzAwXHU2NUU5XHU3Njg0XHU5NEE5XHU1QjUwXHVGRjBDXHU1QzNEXHU5MUNGXHU1NzI4XHU3RjE2XHU4QkQxXHU3NzFGXHU2QjYzXHU1RjAwXHU1OUNCXHU1MjREXHU1QzMxXHU2MjhBXHU2M0QwXHU3OTNBXHU2MjUzXHU1MUZBXHU2NzY1XG4gICAgY29uZmlnKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZXhlY0ZpbGVTeW5jKHByb2Nlc3MuZXhlY1BhdGgsIFtzeW5jU2NyaXB0LCAnLS1wcmVmbGlnaHQnXSwge1xuICAgICAgICAgIGN3ZDogcHJvamVjdFJvb3QsXG4gICAgICAgICAgc3RkaW86IFsnaWdub3JlJywgJ2luaGVyaXQnLCAnaW5oZXJpdCddLFxuICAgICAgICAgIC8vIFx1NjNBMlx1NkQ0Qlx1ODk4MVx1OEQ3NyBwcyAvIG1kZmluZCBcdTdCNDlcdTVCNTBcdThGREJcdTdBMEJcdUZGMENcdTdFRDlcdTVCQkRcdTg4RDVcdTRFOUJcbiAgICAgICAgICB0aW1lb3V0OiAzMF8wMDBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjYXRjaCB7XG4gICAgICAgIC8vIFx1NEUwRFx1NEUwMFx1ODFGNFx1NjVGNiAtLXByZWZsaWdodCBcdTRFRTUgMyBcdTkwMDBcdTUxRkFcdUZGMENcdTYzRDBcdTc5M0FcdTVERjJcdTc1MzFcdTVCNTBcdThGREJcdTdBMEJcdTc2RjRcdTYzQTVcdTUxOTlcdTUyMzBcdTdFQzhcdTdBRUZcdTMwMDJcbiAgICAgICAgLy8gXHU4RkQ5XHU5MUNDXHU0RTAwXHU1RjhCXHU1NDFFXHU2Mzg5XHVGRjFBXHU1M0VBXHU2M0QwXHU3OTNBXHUzMDAxXHU0RTBEXHU5NjNCXHU2NUFEXHVGRjBDXHU4MTFBXHU2NzJDXHU4MUVBXHU4RUFCXHU1MUZBXHU5NUVFXHU5ODk4XHU0RTVGXHU0RTBEXHU4QkU1XHU1RjcxXHU1NENEXHU2Nzg0XHU1RUZBXHUzMDAyXG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnMvdml0ZS1wbHVnaW4taDUtb3B0aW1pemUtZGVwcy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy92aXRlLXBsdWdpbi1oNS1vcHRpbWl6ZS1kZXBzLnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW4sIFJlc29sdmVkQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5cbi8qKlxuICogSDUgXHU0RjlEXHU4RDU2XHU5ODg0XHU2Nzg0XHU1RUZBXHU0RjE4XHU1MzE2XHU2M0QyXHU0RUY2XG4gKlxuICogXHU5NUVFXHU5ODk4XHU4MENDXHU2NjZGXHVGRjFBXG4gKiBEQ2xvdWQgXHU3Njg0IHVuaTp1dnVlIFx1NjNEMlx1NEVGNlx1OEJCRVx1N0Y2RVx1NEU4NiBgb3B0aW1pemVEZXBzOiB7IG5vRGlzY292ZXJ5OiB0cnVlLCBpbmNsdWRlOiBbXSB9YFx1RkYwQ1xuICogXHU1QjhDXHU1MTY4XHU3OTgxXHU3NTI4XHU0RTg2IFZpdGUgXHU3Njg0IGVzYnVpbGQgXHU5ODg0XHU2Nzg0XHU1RUZBXHVGRjFCXHU1NDBDXHU2NUY2IERDbG91ZCBcdTc2ODQgY3JlYXRlT3B0aW1pemVEZXBzIFx1NjI4QSB2dWVcdTMwMDFwaW5pYSBcdTdCNDlcbiAqIFx1NjgzOFx1NUZDM1x1NTMwNVx1NTJBMFx1NTE2NVx1NEU4NiBleGNsdWRlIFx1NTIxN1x1ODg2OFx1MzAwMlx1OEZEOVx1NUJGQ1x1ODFGNFx1NjI0MFx1NjcwOVx1N0IyQ1x1NEUwOVx1NjVCOVx1NEY5RFx1OEQ1Nlx1NTcyOFx1NTFCN1x1NTQyRlx1NTJBOFx1NjVGNlx1OTBGRFx1ODk4MVx1N0VDRlx1OEZDNyBWaXRlIFx1NzY4NFx1NUI5RVx1NjVGNlx1OTAxMFx1NkEyMVx1NTc1N1xuICogXHU4RjZDXHU2MzYyXHU3QkExXHU3RUJGXHVGRjBDXHU5OTk2XHU1QzRGXHU1MkEwXHU4RjdEXHU2NzgxXHU2MTYyXHUzMDAyXG4gKlxuICogXHU4OUUzXHU1MUIzXHU1MzlGXHU3NDA2XHVGRjFBXG4gKiBcdTRGRERcdTYzMDEgbm9EaXNjb3Zlcnk6IHRydWVcdUZGMDhcdTkwN0ZcdTUxNEQgc2Nhbm5lciBcdTgxRUFcdTUyQThcdTUzRDFcdTczQjBcdTg5RTZcdTUzRDFcdTkxQ0RcdTY1QjBcdTRGMThcdTUzMTZcdUZGMDlcdUZGMENcbiAqIFx1NEY0Nlx1NUMwNlx1NjgzOFx1NUZDM1x1NTkyN1x1NEY1M1x1NzlFRlx1NEY5RFx1OEQ1Nlx1NjYzRVx1NUYwRlx1NTJBMFx1NTE2NSBpbmNsdWRlIFx1NTIxN1x1ODg2OFx1RkYwQ1x1NTQwQ1x1NjVGNlx1NEVDRSBleGNsdWRlIFx1NTIxN1x1ODg2OFx1NEUyRFx1NzlGQlx1OTY2NFx1NUI4M1x1NEVFQ1x1RkYwQ1xuICogXHU4QkE5IFZpdGUgXHU1NzI4IGRldiBzZXJ2ZXIgXHU1NDJGXHU1MkE4XHU2NUY2XHU0RTAwXHU2QjIxXHU2MDI3XHU5ODg0XHU2Nzg0XHU1RUZBXHU4RkQ5XHU0RTlCXHU2MzA3XHU1QjlBXHU0RjlEXHU4RDU2XHUzMDAyXG4gKlxuICogXHUyNkEwXHVGRTBGIFx1NEUwRFx1ODBGRFx1OEJCRVx1N0Y2RSBub0Rpc2NvdmVyeTogZmFsc2VcdUZGMDFcbiAqIFx1NUYwMFx1NTQyRlx1NTQwRSBzY2FubmVyIFx1NTcyOFx1NjI2Qlx1NjNDRlx1OEZDN1x1N0EwQlx1NEUyRFx1NEYxQVx1NEUwRFx1NjVBRFx1NTNEMVx1NzNCMFx1NjVCMFx1NEY5RFx1OEQ1Nlx1RkYwQ1x1ODlFNlx1NTNEMVx1OTFDRFx1NjVCMFx1NEYxOFx1NTMxNlx1RkYwQ1xuICogXHU5MUNEXHU2NUIwXHU0RjE4XHU1MzE2XHU2NzFGXHU5NUY0XHU2MjQwXHU2NzA5XHU2QjYzXHU1NzI4XHU4QkY3XHU2QzQyXHU3Njg0XHU2QTIxXHU1NzU3XHU0RjFBXHU4RkQ0XHU1NkRFIDUwNCAoT3V0ZGF0ZWQgT3B0aW1pemUgRGVwKVx1MzAwMlxuICpcbiAqIFx1MjZBMFx1RkUwRiBub0Rpc2NvdmVyeTogdHJ1ZSBcdTVFNzZcdTRFMERcdTgwRkRcdTVCOENcdTUxNjhcdTZEODhcdTk2NjQgNTA0XHVGRjFBXG4gKiBWaXRlIFx1OEZEOFx1NjcwOSBjcmF3bGVyIFx1OERFRlx1NUY4NFx1MjAxNFx1MjAxNFx1NkQ0Rlx1ODlDOFx1NTY2OFx1NUI5RVx1OTY0NVx1OEJGN1x1NkM0Mlx1NkEyMVx1NTc1N1x1NjVGNlx1RkYwQ2xvYWQgXHU5NEE5XHU1QjUwXHU0RjFBIHJlZ2lzdGVyTWlzc2luZ0ltcG9ydFxuICogXHU1M0QxXHU3M0IwIHNjYW5uZXIgXHU2Q0ExXHU2MjZCXHU1MjMwXHU3Njg0XHU0RjlEXHU4RDU2XHVGRjBDY3Jhd2xlciBcdTUzRDFcdTczQjBcdTY1QjBcdTRGOURcdThENTZcdTU0MEVcdTU0MENcdTY4MzdcdTRGMUFcdThDMDNcdTVFQTYgcmVydW5cdUZGMENyZXJ1biBcdTY3MUZcdTk1RjRcdTY1RTdcbiAqIGJyb3dzZXJIYXNoIFx1NzY4NFx1OEJGN1x1NkM0Mlx1NTE2OFx1OTBFOCA1MDRcdTMwMDJcbiAqXG4gKiA1MDQgXHU2NzAwXHU1RTM4XHU4OUMxXHU3Njg0XHU4OUU2XHU1M0QxXHU1NzNBXHU2NjZGXHVGRjFBc2VydmVyLndhcm11cCBcdTc2RjRcdTYzQTVcdTk4ODRcdTcwRUQgSDUgXHU4RkQwXHU4ODRDXHU2NUY2XHU1OTI3XHU2NTg3XHU0RUY2XHVGRjA4dW5pLWg1LmVzLmpzXHVGRjA5XHUzMDAyXG4gKiB1bmktaDUuZXMuanMgXHU5NzU5XHU2MDAxIGltcG9ydCBcdTRFODYgQGRjbG91ZGlvL3VuaS1zaGFyZWQgLyB2dWUtcm91dGVyIC8gQGRjbG91ZGlvL3VuaS1pMThuIC8gdnVlKFx1MjE5MnVuaS1oNS12dWUpXHVGRjBDXG4gKiBcdThGRDlcdTRFOUJcdTUxNjhcdTU3MjggRENsb3VkIFx1NzY4NCBleGNsdWRlIFx1NTIxN1x1ODg2OFx1OTFDQ1x1MzAwMXNjYW5uZXIgXHU2Q0ExXHU5ODg0XHU2Nzg0XHU1RUZBXHUzMDAyd2FybXVwIFx1NEUwMFx1OEJGN1x1NkM0Mlx1RkYwQ2NyYXdsZXIgXHU1QzMxXHU2Q0JGIGltcG9ydCBcdTk0RkVcbiAqIFx1NTNEMVx1NzNCMFx1OEZEOVx1NEU5QiBtaXNzaW5nIGRlcCBcdTIxOTIgXHU4QzAzXHU1RUE2IHJlcnVuXHVGRjBDcmVydW4gXHU3QTk3XHU1M0UzXHU0RTBFXHU5OTk2XHU1QzRGXHU4QkJGXHU5NUVFXHU5MUNEXHU1M0UwXHU2NUY2XHU2RDRGXHU4OUM4XHU1NjY4XHU2NTM2XHU1MjMwIDUwNFx1MzAwMlxuICogXHU4OUUzXHU2Q0Q1XHVGRjFBXHU0RTBEXHU4OTgxXHU2MjhBIHVuaVJ1bnRpbWVGaWxlcyBcdTUyQTBcdTUxNjUgc2VydmVyLndhcm11cC5jbGllbnRGaWxlc1x1RkYwQ1x1OEJBOSByZXJ1biBcdTc1MzFcdTk5OTZcdTVDNEZcdTgxRUFcdTcxMzZcdThCRjdcdTZDNDJcdTYzMDlcdTk3MDBcdTg5RTZcdTUzRDFcdTMwMDJcbiAqXG4gKiBcdTUzRTZcdTRFMDBcdTdDN0JcdTU3M0FcdTY2NkZcdUZGMUF0cmFuc2Zvcm0gXHU5NEE5XHU1QjUwXHU1MkE4XHU2MDAxXHU2Q0U4XHU1MTY1IGltcG9ydFx1RkYwOFx1NTk4MiB2aXRlLXBsdWdpbi12Y29uc29sZSBcdTYyOEEgYGltcG9ydCBWQ29uc29sZSBmcm9tICd2Y29uc29sZSdgXG4gKiBcdTZDRThcdTUxNjUgbWFpbi51dHNcdUZGMDlcdUZGMENzY2FubmVyIFx1NzcwQlx1NEUwRFx1NTIzMFx1RkYwQ1x1OTcwMFx1OTAxQVx1OEZDNyBleHRyYUluY2x1ZGVzIFx1NjYzRVx1NUYwRlx1NEYyMFx1NTE2NVx1OEJBOSBzY2FubmVyIFx1OTg4NFx1Njc4NFx1NUVGQVx1MzAwMlxuICogXHU4QkU2XHU4OUMxIG9uQ3Jhd2xFbmQgXHU3Njg0IHNjYW5uZXJNaXNzZWREZXBzIFx1NTIwNlx1NjUyRlx1NEUwRSByZWdpc3Rlck1pc3NpbmdJbXBvcnQgXHU3Njg0IGRlYm91bmNlZFByb2Nlc3NpbmdcdTMwMDJcbiAqL1xuXG50eXBlIEg1T3B0aW1pemVEZXBzT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1OTg4NFx1Njc4NFx1NUVGQVx1NEYxOFx1NTMxNlx1RkYwOFx1NEVDNVx1NTcyOCBINS9XZWIgXHU1RTczXHU1M0YwXHU0RTE0IGRldiBcdTZBMjFcdTVGMEZcdTRFMEJcdTc1MUZcdTY1NDhcdUZGMDlcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgZW5hYmxlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBcdTk4OURcdTU5MTZcdTk3MDBcdTg5ODFcdTUyQTBcdTUxNjVcdTk4ODRcdTY3ODRcdTVFRkFcdTc2ODRcdTRGOURcdThENTZcdTUzMDVcdTU0MERcbiAgICovXG4gIGV4dHJhSW5jbHVkZXM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIFx1NjYyRlx1NTQyNlx1NTcyOFx1NjNBN1x1NTIzNlx1NTNGMFx1OEY5M1x1NTFGQVx1OEMwM1x1OEJENVx1NEZFMVx1NjA2RlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZGVidWc/OiBib29sZWFuO1xufTtcblxuLy8gXHU5NzAwXHU4OTgxXHU1RjNBXHU1MjM2XHU5ODg0XHU2Nzg0XHU1RUZBXHU3Njg0XHU2ODM4XHU1RkMzXHU1OTI3XHU0RjUzXHU3OUVGXHU0RjlEXHU4RDU2XG4vLyBcdThGRDlcdTRFOUJcdTUzMDVcdTg4QUIgRENsb3VkIFx1NzY4NCBjcmVhdGVPcHRpbWl6ZURlcHMgXHU2NTNFXHU1MTY1XHU0RTg2IGV4Y2x1ZGUgXHU1MjE3XHU4ODY4XHVGRjBDXHU5NzAwXHU4OTgxXHU3OUZCXHU1MUZBXHU1RTc2XHU1MkEwXHU1MTY1IGluY2x1ZGVcbmNvbnN0IENPUkVfSU5DTFVERVMgPSBbXG4gICdwaW5pYScsXG4gICdwaW5pYS1wbHVnaW4tcGVyc2lzdGVkc3RhdGUnLFxuICAnY3J5cHRvLWpzJyxcbiAgJ3RzbGliJ1xuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaDVPcHRpbWl6ZURlcHNQbHVnaW4ob3B0aW9uczogSDVPcHRpbWl6ZURlcHNPcHRpb25zID0ge30pOiBQbHVnaW4ge1xuICBjb25zdCB7XG4gICAgZW5hYmxlZCA9IHRydWUsXG4gICAgZXh0cmFJbmNsdWRlcyA9IFtdLFxuICAgIGRlYnVnID0gZmFsc2VcbiAgfSA9IG9wdGlvbnM7XG5cbiAgY29uc3QgaXNINSA9IHByb2Nlc3MuZW52LlVOSV9QTEFURk9STSA9PT0gJ3dlYidcbiAgICB8fCBwcm9jZXNzLmVudi5VTklfUExBVEZPUk0gPT09ICdoNSdcbiAgICB8fCAhcHJvY2Vzcy5lbnYuVU5JX1BMQVRGT1JNO1xuXG4gIGNvbnN0IGlzQnVpbGQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nIHx8IHByb2Nlc3MuYXJndi5pbmNsdWRlcygnYnVpbGQnKTtcblxuICAvLyBcdTRFQzVcdTU3MjggSDUgZGV2IFx1NkEyMVx1NUYwRlx1NEUwQlx1NzUxRlx1NjU0OFxuICBpZiAoIWVuYWJsZWQgfHwgIWlzSDUgfHwgaXNCdWlsZCkge1xuICAgIHJldHVybiB7IG5hbWU6ICd2aXRlLXBsdWdpbi1oNS1vcHRpbWl6ZS1kZXBzJyB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAndml0ZS1wbHVnaW4taDUtb3B0aW1pemUtZGVwcycsXG4gICAgLy8gZW5mb3JjZTogJ3Bvc3QnIFx1Nzg2RVx1NEZERFx1NTcyOCB1bmk6dXZ1ZSBcdTYzRDJcdTRFRjZcdTc2ODQgY29uZmlnIFx1OTRBOVx1NUI1MFx1NEU0Qlx1NTQwRVx1NjI2N1x1ODg0Q1xuICAgIGVuZm9yY2U6ICdwb3N0JyxcblxuICAgIGNvbmZpZ1Jlc29sdmVkKHJlc29sdmVkQ29uZmlnOiBSZXNvbHZlZENvbmZpZykge1xuICAgICAgY29uc3Qgb3B0aW1pemVEZXBzID0gcmVzb2x2ZWRDb25maWcub3B0aW1pemVEZXBzO1xuXG4gICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1toNS1vcHRpbWl6ZS1kZXBzXSBcdTg5ODZcdTc2RDZcdTUyNEQ6JywgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIG5vRGlzY292ZXJ5OiBvcHRpbWl6ZURlcHMubm9EaXNjb3ZlcnksXG4gICAgICAgICAgaW5jbHVkZTogb3B0aW1pemVEZXBzLmluY2x1ZGUsXG4gICAgICAgICAgZXhjbHVkZTogb3B0aW1pemVEZXBzLmV4Y2x1ZGVcbiAgICAgICAgfSwgbnVsbCwgMikpO1xuICAgICAgfVxuXG4gICAgICAvLyAxLiBcdTRGRERcdTYzMDEgbm9EaXNjb3Zlcnk6IHRydWVcdUZGMDhEQ2xvdWQgXHU5RUQ4XHU4QkE0XHU1MDNDXHVGRjA5XHVGRjBDXHU5MDdGXHU1MTREXHU1MkE4XHU2MDAxXHU1M0QxXHU3M0IwXHU4OUU2XHU1M0QxIDUwNCBcdTkxQ0RcdTY1QjBcdTRGMThcdTUzMTZcdTVGQUFcdTczQUZcbiAgICAgIC8vICAgIFx1NEUwRFx1ODk4MVx1OEJCRVx1N0Y2RSBub0Rpc2NvdmVyeSA9IGZhbHNlXHVGRjAxXG5cbiAgICAgIC8vIDIuIFx1Njc4NFx1NUVGQVx1NUI4Q1x1NjU3NFx1NzY4NCBpbmNsdWRlIFx1NTIxN1x1ODg2OFxuICAgICAgY29uc3QgYWxsSW5jbHVkZXMgPSBbLi4uQ09SRV9JTkNMVURFUywgLi4uZXh0cmFJbmNsdWRlc107XG5cbiAgICAgIC8vIDMuIFx1NTQwOFx1NUU3Nlx1NTIzMFx1NzNCMFx1NjcwOSBpbmNsdWRlXG4gICAgICBjb25zdCBleGlzdGluZ0luY2x1ZGVzID0gb3B0aW1pemVEZXBzLmluY2x1ZGUgfHwgW107XG4gICAgICBjb25zdCBtZXJnZWRJbmNsdWRlcyA9IFsuLi5uZXcgU2V0KFsuLi5leGlzdGluZ0luY2x1ZGVzLCAuLi5hbGxJbmNsdWRlc10pXTtcbiAgICAgIChvcHRpbWl6ZURlcHMgYXMgYW55KS5pbmNsdWRlID0gbWVyZ2VkSW5jbHVkZXM7XG5cbiAgICAgIC8vIDQuIFx1NEVDRSBleGNsdWRlIFx1NEUyRFx1NzlGQlx1OTY2NFx1NURGMlx1NTJBMFx1NTE2NSBpbmNsdWRlIFx1NzY4NFx1NEY5RFx1OEQ1Nlx1RkYwOFZpdGUgXHU0RTBEXHU1MTQxXHU4QkI4XHU1NDBDXHU2NUY2XHU1MUZBXHU3M0IwXHU1NzI4XHU0RTI0XHU0RTJBXHU1MjE3XHU4ODY4XHU0RTJEXHVGRjA5XG4gICAgICBpZiAob3B0aW1pemVEZXBzLmV4Y2x1ZGUgJiYgb3B0aW1pemVEZXBzLmV4Y2x1ZGUubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBpbmNsdWRlU2V0ID0gbmV3IFNldChtZXJnZWRJbmNsdWRlcyk7XG4gICAgICAgIChvcHRpbWl6ZURlcHMgYXMgYW55KS5leGNsdWRlID0gb3B0aW1pemVEZXBzLmV4Y2x1ZGUuZmlsdGVyKFxuICAgICAgICAgIChkZXA6IHN0cmluZykgPT4gIWluY2x1ZGVTZXQuaGFzKGRlcClcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbaDUtb3B0aW1pemUtZGVwc10gXHU4OTg2XHU3NkQ2XHU1NDBFOicsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBub0Rpc2NvdmVyeTogb3B0aW1pemVEZXBzLm5vRGlzY292ZXJ5LFxuICAgICAgICAgIGluY2x1ZGU6IG9wdGltaXplRGVwcy5pbmNsdWRlLFxuICAgICAgICAgIGV4Y2x1ZGU6IG9wdGltaXplRGVwcy5leGNsdWRlXG4gICAgICAgIH0sIG51bGwsIDIpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBgW2g1LW9wdGltaXplLWRlcHNdIFx1MjcxNCBcdTVERjJcdTU0MkZcdTc1MjhcdTRGOURcdThENTZcdTk4ODRcdTY3ODRcdTVFRkFcdTRGMThcdTUzMTYgKG5vRGlzY292ZXJ5PSR7b3B0aW1pemVEZXBzLm5vRGlzY292ZXJ5fSlcdUZGMENpbmNsdWRlICR7bWVyZ2VkSW5jbHVkZXMubGVuZ3RofSBcdTRFMkFcdTRGOURcdThENTZcdUZGMENleGNsdWRlICR7b3B0aW1pemVEZXBzLmV4Y2x1ZGU/Lmxlbmd0aCA/PyAwfSBcdTRFMkFcdTRGOURcdThENTZgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnMvdW5pLWxheW91dHMtcGx1Z2luLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3VuaS1sYXlvdXRzLXBsdWdpbi50c1wiO2ltcG9ydCBmcyBmcm9tICdub2RlOmZzJztcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnO1xuaW1wb3J0IEpTT041IGZyb20gJ2pzb241JztcbmltcG9ydCB7IGxvYWRQbGF0Zm9ybVBhZ2VzSnNvbiB9IGZyb20gJy4vcGFnZXMtanNvbi11dGlsJztcblxuLyoqIFx1OEJGQlx1NTNENiBWSVRFX1RBQkJBUl9NT0RFXHVGRjFCXHU0RjE4XHU1MTQ4XHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXHVGRjBDXHU1MTc2XHU2QjIxXHU5ODc5XHU3NkVFXHU2ODM5XHU3NkVFXHU1RjU1IC5lbnYgKi9cbmZ1bmN0aW9uIGdldFRhYmJhck1vZGUocHJvamVjdFJvb3Q6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5WSVRFX1RBQkJBUl9NT0RFICE9IG51bGwgJiYgcHJvY2Vzcy5lbnYuVklURV9UQUJCQVJfTU9ERSAhPT0gJycpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuVklURV9UQUJCQVJfTU9ERS50cmltKCk7XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBlbnZQYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCAnLmVudicpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKGVudlBhdGgpKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGVudlBhdGgsICd1dGYtOCcpO1xuICAgICAgY29uc3QgbWF0Y2ggPSBjb250ZW50Lm1hdGNoKC9eVklURV9UQUJCQVJfTU9ERVxccyo9XFxzKlsnXCJdPyhbXidcIlxcclxcbl0rKVsnXCJdPy9tKTtcbiAgICAgIGlmIChtYXRjaCAhPSBudWxsICYmIG1hdGNoWzFdICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoWzFdLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2F0Y2gge31cbiAgcmV0dXJuICcxJztcbn1cblxuLyoqXG4gKiBcdTlBN0NcdTVDRjBcdThGNkNcdThGREVcdTVCNTdcdTdCMjYgaGVscGVyXG4gKi9cbmZ1bmN0aW9uIGtlYmFiQ2FzZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFthLXowLTldKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqIFx1NEVDRVx1NkU5MFx1NzgwMVx1NEUyRFx1NjNEMFx1NTNENiBkZWZpbmVQYWdlKHsuLi59KSBcdTc2ODRcdTkxNERcdTdGNkVcdTVCRjlcdThDNjEgKi9cbmZ1bmN0aW9uIHBhcnNlRGVmaW5lUGFnZShjb250ZW50OiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgbnVsbCB7XG4gIC8vIGRlZmluZVBhZ2UgXHU2NjJGXHU4MTFBXHU2NzJDXHU3RUE3XHU1QjhGXHVGRjFBXHU1M0VBXHU1NzI4IDxzY3JpcHQ+IFx1NTc1N1x1NTE4NVx1NjQxQ1x1N0QyMlx1RkYwQ1x1NTQyNlx1NTIxOVx1NkEyMVx1Njc3Rlx1OTFDQ1x1NEY1Q1x1NEUzQVx1NjU4N1x1Njg2M1x1NUM1NVx1NzkzQVx1NzY4NFxuICAvLyBkZWZpbmVQYWdlKHsuLi59KSBcdTc5M0FcdTRGOEJcdTY1ODdcdTY3MkNcdTRGMUFcdTg4QUJcdTVGNTNcdTYyMTBcdTVCOEZcdThDMDNcdTc1MjhcdTg5RTNcdTY3OTBcdTUxRkFcdTk1MTlcdThCRUZcdTc2ODQgbGF5b3V0IC8gXHU4REVGXHU3NTMxXHU1M0MyXHU2NTcwXG4gIGNvbnN0IHNjcmlwdE1hdGNoID0gY29udGVudC5tYXRjaCgvPHNjcmlwdFtePl0qPihbXFxzXFxTXSo/KTxcXC9zY3JpcHQ+Lyk7XG4gIGNvbnN0IHNvdXJjZSA9IHNjcmlwdE1hdGNoICE9IG51bGwgJiYgc2NyaXB0TWF0Y2hbMV0gIT0gbnVsbCA/IHNjcmlwdE1hdGNoWzFdIDogY29udGVudDtcblxuICBjb25zdCBzdGFydFJlZ2V4ID0gL2RlZmluZVBhZ2VcXHMqXFwoXFxzKlxcey87XG4gIGNvbnN0IG1hdGNoID0gc291cmNlLm1hdGNoKHN0YXJ0UmVnZXgpO1xuICBpZiAobWF0Y2ggPT0gbnVsbCB8fCBtYXRjaC5pbmRleCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBvcGVuUGFyZW4gPSBzb3VyY2UuaW5kZXhPZignKCcsIG1hdGNoLmluZGV4KTtcbiAgaWYgKG9wZW5QYXJlbiA9PT0gLTEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxldCBkZXB0aCA9IDA7XG4gIGxldCBpblN0cmluZyA9IGZhbHNlO1xuICBsZXQgc3RyaW5nQ2hhciA9ICcnO1xuICBsZXQgaSA9IG9wZW5QYXJlbiArIDE7XG5cbiAgZm9yICg7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjaCA9IHNvdXJjZVtpXTtcbiAgICBjb25zdCBwcmV2ID0gaSA+IDAgPyBzb3VyY2VbaSAtIDFdIDogJyc7XG5cbiAgICBpZiAoaW5TdHJpbmcpIHtcbiAgICAgIGlmIChjaCA9PT0gc3RyaW5nQ2hhciAmJiBwcmV2ICE9PSAnXFxcXCcpIHtcbiAgICAgICAgaW5TdHJpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycgfHwgY2ggPT09ICdgJykge1xuICAgICAgaW5TdHJpbmcgPSB0cnVlO1xuICAgICAgc3RyaW5nQ2hhciA9IGNoO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGNoID09PSAnLycgJiYgaSArIDEgPCBzb3VyY2UubGVuZ3RoKSB7XG4gICAgICBpZiAoc291cmNlW2kgKyAxXSA9PT0gJy8nKSB7XG4gICAgICAgIGNvbnN0IG5ld2xpbmUgPSBzb3VyY2UuaW5kZXhPZignXFxuJywgaSk7XG4gICAgICAgIGlmIChuZXdsaW5lID09PSAtMSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGkgPSBuZXdsaW5lO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChzb3VyY2VbaSArIDFdID09PSAnKicpIHtcbiAgICAgICAgY29uc3QgZW5kID0gc291cmNlLmluZGV4T2YoJyovJywgaSArIDIpO1xuICAgICAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGkgPSBlbmQgKyAxO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2ggPT09ICd7JyB8fCBjaCA9PT0gJygnKSB7XG4gICAgICBkZXB0aCsrO1xuICAgIH1cbiAgICBpZiAoY2ggPT09ICd9JyB8fCBjaCA9PT0gJyknKSB7XG4gICAgICBkZXB0aC0tO1xuICAgICAgaWYgKGRlcHRoIDwgMCkge1xuICAgICAgICBjb25zdCBhcmcgPSBzb3VyY2Uuc2xpY2Uob3BlblBhcmVuICsgMSwgaSkudHJpbSgpO1xuICAgICAgICBpZiAoYXJnLnN0YXJ0c1dpdGgoJ3snKSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTjUucGFyc2UoYXJnKSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgdHlwZSBVbmlMYXlvdXRzT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFx1NUUwM1x1NUM0MFx1NzZFRVx1NUY1NVx1OERFRlx1NUY4NFx1RkYwOFx1NzZGOFx1NUJGOVx1OTg3OVx1NzZFRVx1NjgzOVx1NzZFRVx1NUY1NVx1RkYwOVxuICAgKiBAZGVmYXVsdCAnc3JjL2xheW91dHMnXG4gICAqL1xuICBsYXlvdXREaXI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBcdTlFRDhcdThCQTRcdTRGN0ZcdTc1MjhcdTc2ODRcdTUxNjhcdTVDNDBcdTVFMDNcdTVDNDBcdTU0MERcdTc5RjBcbiAgICogQGRlZmF1bHQgJ2RlZmF1bHQnXG4gICAqL1xuICBsYXlvdXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBcdTVERTVcdTRGNUNcdTc2RUVcdTVGNTVcbiAgICogQGRlZmF1bHQgcHJvY2Vzcy5jd2QoKVxuICAgKi9cbiAgY3dkPzogc3RyaW5nO1xufTtcblxudHlwZSBQYWdlQ29uZmlnID0ge1xuICBwYXRoOiBzdHJpbmc7XG4gIGxheW91dD86IHN0cmluZyB8IGJvb2xlYW47XG4gIHN0eWxlPzoge1xuICAgIGxheW91dD86IHN0cmluZyB8IGJvb2xlYW47XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9O1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59O1xuXG50eXBlIFN1YlBhY2thZ2VDb25maWcgPSB7XG4gIHJvb3Q6IHN0cmluZztcbiAgcGFnZXM6IFBhZ2VDb25maWdbXTtcbn07XG5cbnR5cGUgUGFnZXNKc29uID0ge1xuICBwYWdlczogUGFnZUNvbmZpZ1tdO1xuICBzdWJQYWNrYWdlcz86IFN1YlBhY2thZ2VDb25maWdbXTtcbn07XG5cbi8qKlxuICogXHU0RUZGXHU3MTY3IHZpdGUtcGx1Z2luLXVuaS1sYXlvdXRzIFx1NzY4NFx1OERFOFx1N0FFRiBMYXlvdXQgXHU1RTAzXHU1QzQwXHU1MzA1XHU4OEM1XHU2M0QyXHU0RUY2XHVGRjBDXHU5MDAyXHU5MTREIHVuaS1hcHAgWCArIFVUU1xuICovXG5leHBvcnQgZnVuY3Rpb24gdW5pTGF5b3V0c1BsdWdpbihvcHRpb25zOiBVbmlMYXlvdXRzT3B0aW9ucyA9IHt9KSB7XG4gIGxldCBwcm9qZWN0Um9vdCA9IG9wdGlvbnMuY3dkIHx8IHByb2Nlc3MuY3dkKCk7XG4gIGNvbnN0IGxheW91dERpck5hbWUgPSBvcHRpb25zLmxheW91dERpciB8fCAnc3JjL2xheW91dHMnO1xuICBjb25zdCBkZWZhdWx0TGF5b3V0TmFtZSA9IG9wdGlvbnMubGF5b3V0IHx8ICdkZWZhdWx0JztcblxuICBsZXQgbGF5b3V0RGlyID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCBsYXlvdXREaXJOYW1lKTtcbiAgbGV0IHBhZ2VzSnNvblBhdGggPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsICdwYWdlcy5qc29uJyk7XG5cbiAgbGV0IGNhY2hlZFBhZ2VzRGF0YToge1xuICAgIHBhZ2VMYXlvdXRzOiBNYXA8c3RyaW5nLCB7IGxheW91dD86IHN0cmluZyB8IGJvb2xlYW47IHBhcmFtczogUmVjb3JkPHN0cmluZywgYW55PiB9PjtcbiAgICBwYWdlUGF0aHM6IFNldDxzdHJpbmc+O1xuICB9IHwgbnVsbCA9IG51bGw7XG4gIGxldCBsYXN0UGFnZXNKc29uTVRpbWUgPSAwO1xuXG4gIC8qKiBcdTZBMjFcdTVGMEYgNCBcdTRFMEJcdTc1MzEgVGFiVmlld3MgXHU3NkY0XHU2M0E1IGltcG9ydCBcdTc2ODRcdTk4NzVcdTk3NjJcdUZGMDhcdThGRDlcdTRFOUJcdTk4NzVcdTk3NjJcdTVERjJcdTg4QUJcdTVCQkZcdTRFM0JcdTVFMDNcdTVDNDBcdTUzMDVcdTg4RjlcdUZGMENcdTRFMERcdTgwRkRcdTUxOERcdTU5NTcgbmF2YmFyXHVGRjA5ICovXG4gIGxldCBjYWNoZWRFbWJlZGRlZFRhYlBhZ2VzOiBTZXQ8c3RyaW5nPiB8IG51bGwgPSBudWxsO1xuICBsZXQgbGFzdFRhYlZpZXdzTVRpbWUgPSAwO1xuICBsZXQgdGFiYmFyTW9kZSA9ICcxJztcblxuICAvLyBcdThGODVcdTUyQTlcdTUxRkRcdTY1NzBcdUZGMUFcdTUzQkJcdTk2NjQgSlNPTiBcdTZDRThcdTkxQ0FcdTVFNzZcdTg5RTNcdTY3OTBcbiAgZnVuY3Rpb24gbG9hZFBhZ2VzSnNvbigpIHtcbiAgICBjb25zdCBwYWdlTGF5b3V0cyA9IG5ldyBNYXA8c3RyaW5nLCB7IGxheW91dD86IHN0cmluZyB8IGJvb2xlYW47IHBhcmFtczogUmVjb3JkPHN0cmluZywgYW55PiB9PigpO1xuICAgIGNvbnN0IHBhZ2VQYXRocyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKHBhZ2VzSnNvblBhdGgpKSB7XG4gICAgICByZXR1cm4geyBwYWdlTGF5b3V0cywgcGFnZVBhdGhzIH07XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBsb2FkUGxhdGZvcm1QYWdlc0pzb24ocGFnZXNKc29uUGF0aCkgYXMgUGFnZXNKc29uO1xuICAgICAgY29uc3QgcmF3RGF0YSA9IGRhdGEgYXMgYW55O1xuICAgICAgY29uc3QgdGFiTGlzdCA9IChyYXdEYXRhLnRhYkJhciAmJiBBcnJheS5pc0FycmF5KHJhd0RhdGEudGFiQmFyLmxpc3QpKSA/IHJhd0RhdGEudGFiQmFyLmxpc3QgOiBbXTtcbiAgICAgIGNvbnN0IHRhYlBhdGhzID0gbmV3IFNldCh0YWJMaXN0Lm1hcCgoaXRlbTogYW55KSA9PiAoaXRlbS5wYWdlUGF0aCB8fCAnJykucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoL15cXC8vLCAnJykpKTtcblxuICAgICAgLy8gMS4gXHU4OUUzXHU2NzkwXHU0RTNCXHU1MzA1XHU5ODc1XHU5NzYyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLnBhZ2VzKSkge1xuICAgICAgICBkYXRhLnBhZ2VzLmZvckVhY2goKHBhZ2UpID0+IHtcbiAgICAgICAgICBpZiAoIXBhZ2UucGF0aClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICBjb25zdCBub3JtUGF0aCA9IHBhZ2UucGF0aC5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgICAgICAgICBwYWdlUGF0aHMuYWRkKG5vcm1QYXRoKTtcblxuICAgICAgICAgIGxldCBsYXlvdXQ6IHN0cmluZyB8IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgICAgICAgaWYgKHBhZ2UubGF5b3V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxheW91dCA9IHBhZ2UubGF5b3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChwYWdlLnN0eWxlICYmIHBhZ2Uuc3R5bGUubGF5b3V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxheW91dCA9IHBhZ2Uuc3R5bGUubGF5b3V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHBhcmFtczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuICAgICAgICAgIE9iamVjdC5rZXlzKHBhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3BhdGgnICYmIGtleSAhPT0gJ2xheW91dCcpIHtcbiAgICAgICAgICAgICAgcGFyYW1zW2tleV0gPSBwYWdlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAodGFiUGF0aHMuaGFzKG5vcm1QYXRoKSkge1xuICAgICAgICAgICAgcGFyYW1zLmlzVGFiYmFyID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYWdlTGF5b3V0cy5zZXQobm9ybVBhdGgsIHsgbGF5b3V0LCBwYXJhbXMgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyAyLiBcdTg5RTNcdTY3OTBcdTUyMDZcdTUzMDVcdTk4NzVcdTk3NjJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuc3ViUGFja2FnZXMpKSB7XG4gICAgICAgIGRhdGEuc3ViUGFja2FnZXMuZm9yRWFjaCgoc3ViUGtnKSA9PiB7XG4gICAgICAgICAgaWYgKCFzdWJQa2cucm9vdCB8fCAhQXJyYXkuaXNBcnJheShzdWJQa2cucGFnZXMpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIHN1YlBrZy5wYWdlcy5mb3JFYWNoKChwYWdlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXBhZ2UucGF0aClcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgY29tYmluZWQgPSBwYXRoLmpvaW4oc3ViUGtnLnJvb3QsIHBhZ2UucGF0aCkucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoL15cXC8vLCAnJyk7XG4gICAgICAgICAgICBwYWdlUGF0aHMuYWRkKGNvbWJpbmVkKTtcblxuICAgICAgICAgICAgbGV0IGxheW91dDogc3RyaW5nIHwgYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChwYWdlLmxheW91dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGxheW91dCA9IHBhZ2UubGF5b3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGFnZS5zdHlsZSAmJiBwYWdlLnN0eWxlLmxheW91dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGxheW91dCA9IHBhZ2Uuc3R5bGUubGF5b3V0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAncGF0aCcgJiYga2V5ICE9PSAnbGF5b3V0Jykge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXldID0gcGFnZVtrZXldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcGFnZUxheW91dHMuc2V0KGNvbWJpbmVkLCB7IGxheW91dCwgcGFyYW1zIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tMYXlvdXQgUGx1Z2luXSBGYWlsZWQgdG8gcGFyc2UgcGFnZXMuanNvbjonLCBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwYWdlTGF5b3V0cywgcGFnZVBhdGhzIH07XG4gIH1cblxuICAvLyBcdTgzQjdcdTUzRDZcdTY3MDBcdTY1QjBcdTc2ODRcdTk4NzVcdTk3NjJcdTkxNERcdTdGNkVcdUZGMDhcdTVFMjZcdTdGMTNcdTVCNThcdTY4MjFcdTlBOENcdUZGMDlcbiAgZnVuY3Rpb24gZ2V0UGFnZXNEYXRhKCkge1xuICAgIGlmICghZnMuZXhpc3RzU3luYyhwYWdlc0pzb25QYXRoKSkge1xuICAgICAgcmV0dXJuIHsgcGFnZUxheW91dHM6IG5ldyBNYXAoKSwgcGFnZVBhdGhzOiBuZXcgU2V0KCkgfTtcbiAgICB9XG4gICAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKHBhZ2VzSnNvblBhdGgpO1xuICAgIGlmICghY2FjaGVkUGFnZXNEYXRhIHx8IHN0YXQubXRpbWVNcyAhPT0gbGFzdFBhZ2VzSnNvbk1UaW1lKSB7XG4gICAgICBjYWNoZWRQYWdlc0RhdGEgPSBsb2FkUGFnZXNKc29uKCk7XG4gICAgICBsYXN0UGFnZXNKc29uTVRpbWUgPSBzdGF0Lm10aW1lTXM7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRQYWdlc0RhdGE7XG4gIH1cblxuICAvKiogXHU4OUUzXHU2NzkwXHU3NTFGXHU2MjEwXHU3Njg0IFRhYlZpZXdzLnV2dWVcdUZGMENcdThGRDRcdTU2REVcdTUxNzZcdTRFMkRcdTc2RjRcdTYzQTVcdTVCRkNcdTUxNjVcdTc2ODRcdTk4NzVcdTk3NjJcdThERUZcdTVGODRcdTk2QzZcdTU0MDggKi9cbiAgZnVuY3Rpb24gZ2V0RW1iZWRkZWRUYWJQYWdlcygpOiBTZXQ8c3RyaW5nPiB7XG4gICAgY29uc3QgdGFiVmlld3NQYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCAnc3JjL3RhYmJhci9jb21wb25lbnRzL1RhYlZpZXdzLnV2dWUnKTtcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmModGFiVmlld3NQYXRoKSkge1xuICAgICAgcmV0dXJuIG5ldyBTZXQoKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyh0YWJWaWV3c1BhdGgpO1xuICAgICAgaWYgKGNhY2hlZEVtYmVkZGVkVGFiUGFnZXMgIT0gbnVsbCAmJiBzdGF0Lm10aW1lTXMgPT0gbGFzdFRhYlZpZXdzTVRpbWUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZEVtYmVkZGVkVGFiUGFnZXM7XG4gICAgICB9XG4gICAgICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKHRhYlZpZXdzUGF0aCwgJ3V0Zi04Jyk7XG4gICAgICBjb25zdCBwYWdlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgICAgY29uc3QgaW1wb3J0UmVnZXggPSAvaW1wb3J0XFxzK1xcdytcXHMrZnJvbVxccytbJ1wiXUBcXC8oc3JjXFwvW14nXCJdK1xcLig/OnV2dWV8dnVlKSlbJ1wiXS9nO1xuICAgICAgbGV0IG1hdGNoID0gaW1wb3J0UmVnZXguZXhlYyhjb250ZW50KTtcbiAgICAgIHdoaWxlIChtYXRjaCAhPSBudWxsKSB7XG4gICAgICAgIHBhZ2VzLmFkZChtYXRjaFsxXS5yZXBsYWNlKC9cXC4odXZ1ZXx2dWUpJC8sICcnKSk7XG4gICAgICAgIG1hdGNoID0gaW1wb3J0UmVnZXguZXhlYyhjb250ZW50KTtcbiAgICAgIH1cbiAgICAgIGNhY2hlZEVtYmVkZGVkVGFiUGFnZXMgPSBwYWdlcztcbiAgICAgIGxhc3RUYWJWaWV3c01UaW1lID0gc3RhdC5tdGltZU1zO1xuICAgICAgcmV0dXJuIHBhZ2VzO1xuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICByZXR1cm4gbmV3IFNldCgpO1xuICAgIH1cbiAgfVxuXG4gIHR5cGUgUmVzb2x2ZWRMYXlvdXQgPSB7XG4gICAgZmlsZU5hbWU6IHN0cmluZztcbiAgICBpbXBvcnRQYXRoOiBzdHJpbmc7XG4gIH07XG5cbiAgLy8gXHU1QkZCXHU2MjdFXHU1RTAzXHU1QzQwXHU2NTg3XHU0RUY2XHVGRjBDXHU2NTJGXHU2MzAxIC51dnVlIFx1NTQ4QyAudnVlIFx1NjI2OVx1NUM1NVx1NTQwRFx1NTNDQVx1NTkyN1x1NUMwRlx1NTE5OVx1NTE3Q1x1NUJCOVxuICBmdW5jdGlvbiByZXNvbHZlTGF5b3V0RmlsZShsYXlvdXROYW1lOiBzdHJpbmcpOiBSZXNvbHZlZExheW91dCB8IG51bGwge1xuICAgIGNvbnN0IGV4dGVuc2lvbnMgPSBbJy51dnVlJywgJy52dWUnXTtcbiAgICBjb25zdCBjYW5kaWRhdGVzID0gQXJyYXkuZnJvbShuZXcgU2V0KFtcbiAgICAgIGxheW91dE5hbWUsXG4gICAgICBsYXlvdXROYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICBrZWJhYkNhc2UobGF5b3V0TmFtZSksXG4gICAgICBsYXlvdXROYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbGF5b3V0TmFtZS5zbGljZSgxKVxuICAgIF0pKTtcblxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBjYW5kaWRhdGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGV4dCBvZiBleHRlbnNpb25zKSB7XG4gICAgICAgIC8vIDEuIFx1NEYxOFx1NTE0OFx1NjNBMlx1NkQ0Qlx1NUI1MFx1NzZFRVx1NUY1NVx1NTQwQ1x1NTQwRFx1NjU4N1x1NEVGNlx1RkYwOFx1NTk4MiBzcmMvbGF5b3V0cy9kZWZhdWx0L2RlZmF1bHQudXZ1ZVx1RkYwOVxuICAgICAgICBjb25zdCBzdWJEaXJQYXRoID0gcGF0aC5qb2luKGxheW91dERpciwgbmFtZSwgYCR7bmFtZX0ke2V4dH1gKTtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoc3ViRGlyUGF0aCkpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlsZU5hbWU6IGAke25hbWV9LyR7bmFtZX0ke2V4dH1gLFxuICAgICAgICAgICAgaW1wb3J0UGF0aDogYEAvc3JjL2xheW91dHMvJHtuYW1lfS8ke25hbWV9JHtleHR9YFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gMi4gXHU2M0EyXHU2RDRCXHU1QjUwXHU3NkVFXHU1RjU1IGluZGV4IFx1NjU4N1x1NEVGNlx1RkYwOFx1NTk4MiBzcmMvbGF5b3V0cy9kZWZhdWx0L2luZGV4LnV2dWVcdUZGMDlcbiAgICAgICAgY29uc3Qgc3ViRGlySW5kZXhQYXRoID0gcGF0aC5qb2luKGxheW91dERpciwgbmFtZSwgYGluZGV4JHtleHR9YCk7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHN1YkRpckluZGV4UGF0aCkpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlsZU5hbWU6IGAke25hbWV9L2luZGV4JHtleHR9YCxcbiAgICAgICAgICAgIGltcG9ydFBhdGg6IGBAL3NyYy9sYXlvdXRzLyR7bmFtZX0vaW5kZXgke2V4dH1gXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLiBcdTUxN0NcdTVCQjlcdTRFMDBcdTdFQTdcdTc2RUVcdTVGNTVcdTVFNzNcdTk0RkFcdTY1ODdcdTRFRjZcdUZGMDhcdTU5ODIgc3JjL2xheW91dHMvZGVmYXVsdC51dnVlXHVGRjA5XG4gICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKGxheW91dERpciwgYCR7bmFtZX0ke2V4dH1gKTtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBgJHtuYW1lfSR7ZXh0fWAsXG4gICAgICAgICAgICBpbXBvcnRQYXRoOiBgQC9zcmMvbGF5b3V0cy8ke25hbWV9JHtleHR9YFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICd1bmktbGF5b3V0cy1wbHVnaW4nLFxuICAgIGNvbmZpZ1Jlc29sdmVkKGNvbmZpZzogYW55KSB7XG4gICAgICBwcm9qZWN0Um9vdCA9IGNvbmZpZy5yb290IHx8IHByb2Nlc3MuY3dkKCk7XG4gICAgICBsYXlvdXREaXIgPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsIGxheW91dERpck5hbWUpO1xuICAgICAgcGFnZXNKc29uUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgJ3BhZ2VzLmpzb24nKTtcbiAgICAgIHRhYmJhck1vZGUgPSBnZXRUYWJiYXJNb2RlKHByb2plY3RSb290KTtcbiAgICB9LFxuICAgIGJ1aWxkU3RhcnQoKSB7XG4gICAgfSxcbiAgICB0cmFuc2Zvcm0odGhpczogYW55LCBjb2RlOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRJZCA9IGlkLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcbiAgICAgIGlmIChub3JtYWxpemVkSWQuaW5jbHVkZXMoJz8nKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gMS4gXHU1M0VBXHU4RkM3XHU2RUU0XHU1OTA0XHU3NDA2XHU5ODc1XHU5NzYyXHU3NkY4XHU1MTczXHU2NTg3XHU0RUY2XHVGRjBDXHU2MzkyXHU5NjY0IEFwcC51dnVlIC8gQXBwLmt1LnV2dWUgLyBsYXlvdXRzIFx1NEVFNVx1NTNDQSBjb21wb25lbnRzXG4gICAgICBpZiAoIW5vcm1hbGl6ZWRJZC5lbmRzV2l0aCgnLnV2dWUnKSAmJiAhbm9ybWFsaXplZElkLmVuZHNXaXRoKCcudnVlJykpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5vcm1hbGl6ZWRJZC5pbmNsdWRlcygnL3NyYy9sYXlvdXRzLycpXG4gICAgICAgIHx8IG5vcm1hbGl6ZWRJZC5pbmNsdWRlcygnL3NyYy9jb21wb25lbnRzL19sYXlvdXRzLycpXG4gICAgICAgIHx8IG5vcm1hbGl6ZWRJZC5pbmNsdWRlcygnQXBwLnV2dWUnKVxuICAgICAgICB8fCBub3JtYWxpemVkSWQuaW5jbHVkZXMoJ0FwcC5rdS51dnVlJylcbiAgICAgICAgfHwgbm9ybWFsaXplZElkLmluY2x1ZGVzKCdBcHBSb290LnV2dWUnKVxuICAgICAgICB8fCBub3JtYWxpemVkSWQuaW5jbHVkZXMoJy9jb21wb25lbnRzLycpXG4gICAgICAgIHx8IG5vcm1hbGl6ZWRJZC5pbmNsdWRlcygnL3ZpZXdzLycpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIFx1ODNCN1x1NTNENlx1ODlDNFx1ODMwM1x1NzY4NFx1NzZGOFx1NUJGOVx1OERFRlx1NUY4NFx1RkYwOFx1NjVFMFx1NjI2OVx1NUM1NVx1NTQwRFx1RkYwOVx1NzUyOFx1NEU4RVx1NTMzOVx1OTE0RCBwYWdlcy5qc29uIFx1NEUyRFx1NzY4NFx1OERFRlx1NUY4NFxuICAgICAgY29uc3QgcmVsYXRpdmVJZCA9IHBhdGgucmVsYXRpdmUocHJvamVjdFJvb3QsIG5vcm1hbGl6ZWRJZCkucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xuICAgICAgY29uc3QgY2xlYW5SZWxhdGl2ZUlkID0gcmVsYXRpdmVJZC5yZXBsYWNlKC9cXC4odXZ1ZXx2dWUpKFxcPy4qKT8kLywgJycpO1xuICAgICAgY29uc3QgeyBwYWdlTGF5b3V0cywgcGFnZVBhdGhzIH0gPSBnZXRQYWdlc0RhdGEoKTtcblxuICAgICAgLy8gXHU1OTgyXHU2NzlDXHU4RkQ5XHU0RTJBXHU2NTg3XHU0RUY2XHU0RTBEXHU1QzVFXHU0RThFIHBhZ2VzLmpzb24gXHU0RTJEXHU3Njg0XHU0RUZCXHU0RjU1XHU2Q0U4XHU1MThDXHU5ODc1XHU5NzYyXHVGRjBDXHU3NkY0XHU2M0E1XHU4REYzXHU4RkM3XHVGRjA4XHU5MDdGXHU1MTREXHU2QzYxXHU2N0QzXHU5MDFBXHU3NTI4XHU3RUM0XHU0RUY2XHVGRjA5XG4gICAgICBpZiAoIXBhZ2VQYXRocy5oYXMoY2xlYW5SZWxhdGl2ZUlkKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmFkZFdhdGNoRmlsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLmFkZFdhdGNoRmlsZShwYWdlc0pzb25QYXRoKTtcbiAgICAgIH1cblxuICAgICAgLy8gMi4gXHU1MzM5XHU5MTREXHU5ODc1XHU5NzYyXHU0RTJEXHU3Njg0IDxyb3V0ZT4gXHU1NzU3XHU2MjE2IGRlZmluZVBhZ2VcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSAvPHJvdXRlW14+XSo+KFtcXHNcXFNdKj8pPFxcL3JvdXRlPi87XG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gY29kZS5tYXRjaChyb3V0ZVJlZ2V4KTtcbiAgICAgIGxldCBsYXlvdXROYW1lOiBzdHJpbmcgfCBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgICAgY29uc3Qgcm91dGVQYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcblxuICAgICAgaWYgKHJvdXRlTWF0Y2ggIT0gbnVsbCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJvdXRlU3RyID0gcm91dGVNYXRjaFsxXS50cmltKCk7XG4gICAgICAgICAgY29uc3QgY2xlYW5Sb3V0ZVN0ciA9IHJvdXRlU3RyLnJlcGxhY2UoL1xcL1xcKltcXHNcXFNdKj9cXCpcXC98KFteXFxcXDpdfF4pXFwvXFwvLiokL2dtLCAnJDEnKTtcbiAgICAgICAgICBjb25zdCByb3V0ZU9iaiA9IEpTT041LnBhcnNlKGNsZWFuUm91dGVTdHIpIGFzIFJlY29yZDxzdHJpbmcsIGFueT47XG4gICAgICAgICAgaWYgKHJvdXRlT2JqLmxheW91dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsYXlvdXROYW1lID0gcm91dGVPYmoubGF5b3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBcdTYzRDBcdTUzRDZcdTgxRUFcdTVCOUFcdTRFNDlcdTc2ODRcdTVDNUVcdTYwMjdcdTUzQzJcdTY1NzBcbiAgICAgICAgICBPYmplY3Qua2V5cyhyb3V0ZU9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ICE9PSAnbGF5b3V0Jykge1xuICAgICAgICAgICAgICByb3V0ZVBhcmFtc1trZXldID0gcm91dGVPYmpba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtMYXlvdXQgUGx1Z2luXSBGYWlsZWQgdG8gcGFyc2UgPHJvdXRlPiBibG9jayBpbiAke2lkfTpgLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIFx1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOSA8cm91dGU+IFx1NjgwN1x1N0I3RVx1RkYwQ1x1ODlFM1x1Njc5MCBkZWZpbmVQYWdlXG4gICAgICAgIGNvbnN0IGRlZmluZVBhZ2VNZXRhID0gcGFyc2VEZWZpbmVQYWdlKGNvZGUpO1xuICAgICAgICBpZiAoZGVmaW5lUGFnZU1ldGEgIT0gbnVsbCkge1xuICAgICAgICAgIGlmIChkZWZpbmVQYWdlTWV0YS5sYXlvdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGF5b3V0TmFtZSA9IGRlZmluZVBhZ2VNZXRhLmxheW91dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgT2JqZWN0LmtleXMoZGVmaW5lUGFnZU1ldGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2xheW91dCcpIHtcbiAgICAgICAgICAgICAgcm91dGVQYXJhbXNba2V5XSA9IGRlZmluZVBhZ2VNZXRhW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gMy4gXHU3OUZCXHU1M0JCXHU0RUUzXHU3ODAxXHU0RTJEXHU3Njg0IDxyb3V0ZT4gXHU2ODA3XHU3QjdFXHU1NzU3XG4gICAgICBsZXQgY2xlYW5Db2RlID0gY29kZS5yZXBsYWNlKHJvdXRlUmVnZXgsICcnKTtcblxuICAgICAgLy8gXHU2QTIxXHU1RjBGIDRcdUZGMUFUYWJWaWV3cyBcdTc2RjRcdTYzQTVcdTU5MERcdTc1MjhcdTc2ODRcdTk4NzVcdTk3NjJcdTUzRUFcdTRGNUNcdTRFM0FcdTdFQzRcdTRFRjZcdTZFMzJcdTY3RDNcdUZGMENcdTVFMDNcdTVDNDBcdTVERjJcdTc1MzFcdTVCQkZcdTRFM0JcdTk4NzVcdTYzRDBcdTRGOUJcdTMwMDJcbiAgICAgIC8vIFx1ODJFNVx1N0VFN1x1N0VFRFx1NjMwOSBwYWdlcy5qc29uIFx1NkNFOFx1NTE4Q1x1OTg3NVx1NTkwNFx1NzQwNlx1RkYwQ1x1NEYxQVx1NTE4RFx1NTMwNVx1NEUwMFx1NUM0MiBuYXZiYXJcdUZGMENcdTUxRkFcdTczQjBcdTUzQ0NcdTVCRkNcdTgyMkFcdTY4MEZcdTMwMDJcbiAgICAgIGlmICh0YWJiYXJNb2RlID09ICc0JyAmJiBnZXRFbWJlZGRlZFRhYlBhZ2VzKCkuaGFzKGNsZWFuUmVsYXRpdmVJZCkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2RlOiBjbGVhbkNvZGUsXG4gICAgICAgICAgbWFwOiBudWxsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIDQuIFx1NEVDRSBwYWdlcy5qc29uIFx1NEUyRFx1ODNCN1x1NTNENiBsYXlvdXRcdUZGMENcdTU5ODJcdTY3OUMgcm91dGUgXHU1NzU3XHU1NDhDIGRlZmluZVBhZ2UgXHU0RTJEXHU2NzJBXHU2MzA3XHU1QjlBXHU3Njg0XHU4QkREXG4gICAgICBjb25zdCBwYWdlQ29uZmlnID0gcGFnZUxheW91dHMuZ2V0KGNsZWFuUmVsYXRpdmVJZCk7XG4gICAgICBpZiAobGF5b3V0TmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwYWdlQ29uZmlnICYmIHBhZ2VDb25maWcubGF5b3V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBsYXlvdXROYW1lID0gcGFnZUNvbmZpZy5sYXlvdXQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gXHU1NDA4XHU1RTc2IHJvdXRlIFx1NUM1RVx1NjAyN1x1NEUwRSBwYWdlcy5qc29uIFx1OTFDQ1x1NzY4NFx1NUM1RVx1NjAyN1x1NEY1Q1x1NEUzQSBwcm9wcyBcdTRGMjBcdTkwMTJcbiAgICAgIGNvbnN0IG1lcmdlZFBhcmFtczogUmVjb3JkPHN0cmluZywgYW55PiA9IHtcbiAgICAgICAgLi4uKHBhZ2VDb25maWcgPyBwYWdlQ29uZmlnLnBhcmFtcyA6IHt9KSxcbiAgICAgICAgLi4ucm91dGVQYXJhbXNcbiAgICAgIH07XG5cbiAgICAgIC8vIFx1OUVEOFx1OEJBNFx1NUUwM1x1NUM0MCBmYWxsYmFja1xuICAgICAgaWYgKGxheW91dE5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsYXlvdXROYW1lID0gZGVmYXVsdExheW91dE5hbWU7XG4gICAgICB9XG5cbiAgICAgIC8vIDUuIFx1NjgyMVx1OUE4QyBsYXlvdXQgXHU3OTgxXHU3NTI4XHU5MDNCXHU4RjkxXG4gICAgICBpZiAobGF5b3V0TmFtZSA9PT0gZmFsc2UgfHwgbGF5b3V0TmFtZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvZGU6IGNsZWFuQ29kZSxcbiAgICAgICAgICBtYXA6IG51bGxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gNi4gXHU2ODIxXHU5QThDXHU1RTAzXHU1QzQwXHU3RUM0XHU0RUY2XHU2NTg3XHU0RUY2XHU2NjJGXHU1NDI2XHU1QjU4XHU1NzI4XHVGRjBDXHU0RTBEXHU1QjU4XHU1NzI4XHU1MjE5XHU0RTBEXHU1MzA1XHU4OEY5XG4gICAgICBsZXQgbGF5b3V0SW5mbyA9IHJlc29sdmVMYXlvdXRGaWxlKGxheW91dE5hbWUgYXMgc3RyaW5nKTtcblxuICAgICAgLy8gXHU1OTgyXHU2NzlDXHU5RUQ4XHU4QkE0XHU1RTAzXHU1QzQwXHU2NjJGIGRlZmF1bHQgXHU0RTE0XHU2MjdFXHU0RTBEXHU1MjMwXHVGRjBDXHU1QzFEXHU4QkQ1XHU1NkRFXHU5MDAwXHU1MjMwIGxheW91dFxuICAgICAgaWYgKCFsYXlvdXRJbmZvICYmIGxheW91dE5hbWUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICBsYXlvdXRJbmZvID0gcmVzb2x2ZUxheW91dEZpbGUoJ2xheW91dCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWxheW91dEluZm8pIHtcbiAgICAgICAgaWYgKGxheW91dE5hbWUgIT09IGRlZmF1bHRMYXlvdXROYW1lICYmIGxheW91dE5hbWUgIT09ICdsYXlvdXQnKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBbTGF5b3V0IFBsdWdpbl0gTGF5b3V0IFwiJHtsYXlvdXROYW1lfVwiIG5vdCBmb3VuZCBpbiBcIiR7bGF5b3V0RGlyfVwiLiBTa2lwcGluZyB3cmFwIGZvciBcIiR7aWR9XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2RlOiBjbGVhbkNvZGUsXG4gICAgICAgICAgbWFwOiBudWxsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIDcuIFx1NzUxRlx1NjIxMFx1NEYyMFx1N0VEOSBMYXlvdXQgXHU3Njg0XHU1QzVFXHU2MDI3XHU1QjU3XHU3QjI2XHU0RTMyXHVGRjA4XHU2ODA3XHU5MUNGXHU0RTBFXHU1RDRDXHU1OTU3XHU1QkY5XHU4QzYxXHU1QjhDXHU2NTc0XHU0RjIwXHU5MDEyXHVGRjBDXHU0RTBEXHU2MkNEXHU1RTczXHVGRjA5XG4gICAgICBsZXQgYXR0cnMgPSAnJztcbiAgICAgIE9iamVjdC5rZXlzKG1lcmdlZFBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT09ICdsYXlvdXQnKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgdmFsID0gbWVyZ2VkUGFyYW1zW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmIChrZXkgPT09ICdjbGFzcycgfHwga2V5ID09PSAnY3VzdG9tQ2xhc3MnKSB7XG4gICAgICAgICAgICBhdHRycyArPSBgIDpjdXN0b20tcGFnZS1jbGFzcz1cIicke3ZhbC5yZXBsYWNlKC8nL2csICdcXFxcXFwnJyl9J1wiYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ2N1c3RvbVN0eWxlJykge1xuICAgICAgICAgICAgYXR0cnMgKz0gYCA6Y3VzdG9tLXBhZ2Utc3R5bGU9XCInJHt2YWwucmVwbGFjZSgvJy9nLCAnXFxcXFxcJycpfSdcImA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGF0dHJzICs9IGAgOiR7a2ViYWJDYXNlKGtleSl9PVwiJyR7dmFsLnJlcGxhY2UoLycvZywgJ1xcXFxcXCcnKX0nXCJgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWwgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIGF0dHJzICs9IGAgOiR7a2ViYWJDYXNlKGtleSl9PVwiJHt2YWx9XCJgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgIC8vIFx1NEUzQVx1NEU4Nlx1OTA3Rlx1NTE0RFx1NEUwRSBWdWUgXHU1MzlGXHU3NTFGIGNsYXNzL3N0eWxlIFx1NUM1RVx1NjAyN1x1NTFCMlx1N0E4MVx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NjYyRiBzdHlsZSBcdTk1MkVcdTY2MjBcdTVDMDRcdTRFM0EgcGFnZS1zdHlsZVxuICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0ga2V5ID09PSAnc3R5bGUnID8gJ3BhZ2Utc3R5bGUnIDoga2ViYWJDYXNlKGtleSk7XG4gICAgICAgICAgYXR0cnMgKz0gYCA6JHtwcm9wTmFtZX09XCIke0pTT04uc3RyaW5naWZ5KHZhbCkucmVwbGFjZSgvXCIvZywgJ1xcJycpfVwiYDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIDguIFx1NTMwNVx1ODhDNVx1OTg3NVx1OTc2Mlx1NzY4NCA8dGVtcGxhdGU+XG4gICAgICBsZXQgaGFzVGVtcGxhdGUgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHN0YXJ0VGVtcGxhdGVJZHggPSBjbGVhbkNvZGUuaW5kZXhPZignPHRlbXBsYXRlJyk7XG4gICAgICBjb25zdCBlbmRUZW1wbGF0ZUlkeCA9IGNsZWFuQ29kZS5sYXN0SW5kZXhPZignPC90ZW1wbGF0ZT4nKTtcbiAgICAgIGlmIChzdGFydFRlbXBsYXRlSWR4ICE9PSAtMSAmJiBlbmRUZW1wbGF0ZUlkeCAhPT0gLTEgJiYgc3RhcnRUZW1wbGF0ZUlkeCA8IGVuZFRlbXBsYXRlSWR4KSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0VGFnRW5kSWR4ID0gY2xlYW5Db2RlLmluZGV4T2YoJz4nLCBzdGFydFRlbXBsYXRlSWR4KTtcbiAgICAgICAgaWYgKHN0YXJ0VGFnRW5kSWR4ICE9PSAtMSAmJiBzdGFydFRhZ0VuZElkeCA8IGVuZFRlbXBsYXRlSWR4KSB7XG4gICAgICAgICAgaGFzVGVtcGxhdGUgPSB0cnVlO1xuICAgICAgICAgIGNvbnN0IHRlbXBsYXRlQXR0cnMgPSBjbGVhbkNvZGUuc2xpY2Uoc3RhcnRUZW1wbGF0ZUlkeCArIDksIHN0YXJ0VGFnRW5kSWR4KTtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gY2xlYW5Db2RlLnNsaWNlKHN0YXJ0VGFnRW5kSWR4ICsgMSwgZW5kVGVtcGxhdGVJZHgpO1xuICAgICAgICAgIGNvbnN0IGJlZm9yZSA9IGNsZWFuQ29kZS5zbGljZSgwLCBzdGFydFRlbXBsYXRlSWR4KTtcbiAgICAgICAgICBjb25zdCBhZnRlciA9IGNsZWFuQ29kZS5zbGljZShlbmRUZW1wbGF0ZUlkeCArIDExKTtcbiAgICAgICAgICBjbGVhbkNvZGUgPSBgJHtiZWZvcmV9PHRlbXBsYXRlJHt0ZW1wbGF0ZUF0dHJzfT5cXG4gIDxMYXlvdXRDb21wb25lbnQke2F0dHJzfT5cXG4ke2NvbnRlbnR9XFxuICA8L0xheW91dENvbXBvbmVudD5cXG48L3RlbXBsYXRlPiR7YWZ0ZXJ9YDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWhhc1RlbXBsYXRlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29kZTogY2xlYW5Db2RlLFxuICAgICAgICAgIG1hcDogbnVsbFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyA5LiBcdTgxRUFcdTUyQThcdTVGMTVcdTUxNjUgTGF5b3V0IFx1N0VDNFx1NEVGNlx1NTIzMCBzZXR1cCBzY3JpcHRcbiAgICAgIGNvbnN0IHNjcmlwdFNldHVwUmVnZXggPSAvPHNjcmlwdFxcc1tePl0qXFxic2V0dXBcXGJbXj5dKj4vO1xuICAgICAgY29uc3QgaW1wb3J0U3RhdGVtZW50ID0gYFxcbmltcG9ydCBMYXlvdXRDb21wb25lbnQgZnJvbSAnJHtsYXlvdXRJbmZvLmltcG9ydFBhdGh9J2A7XG5cbiAgICAgIGlmIChzY3JpcHRTZXR1cFJlZ2V4LnRlc3QoY2xlYW5Db2RlKSkge1xuICAgICAgICBjbGVhbkNvZGUgPSBjbGVhbkNvZGUucmVwbGFjZShzY3JpcHRTZXR1cFJlZ2V4LCBtYXRjaCA9PiBtYXRjaCArIGltcG9ydFN0YXRlbWVudCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2xlYW5Db2RlID0gYCR7Y2xlYW5Db2RlfVxcbjxzY3JpcHQgc2V0dXAgbGFuZz1cInV0c1wiPiR7aW1wb3J0U3RhdGVtZW50fVxcbjwvc2NyaXB0PlxcbmA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IGNsZWFuQ29kZSxcbiAgICAgICAgbWFwOiBudWxsXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBjb25maWd1cmVTZXJ2ZXIoc2VydmVyOiBhbnkpIHtcbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKGxheW91dERpcikpIHtcbiAgICAgICAgc2VydmVyLndhdGNoZXIuYWRkKGxheW91dERpcik7XG4gICAgICB9XG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYWdlc0pzb25QYXRoKSkge1xuICAgICAgICBzZXJ2ZXIud2F0Y2hlci5hZGQocGFnZXNKc29uUGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHNlcnZlci53YXRjaGVyLm9uKCdjaGFuZ2UnLCAoZmlsZVBhdGg6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkID0gZmlsZVBhdGgucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xuICAgICAgICBpZiAobm9ybWFsaXplZC5pbmNsdWRlcygncGFnZXMuanNvbicpKSB7XG4gICAgICAgICAgY2FjaGVkUGFnZXNEYXRhID0gbnVsbDtcbiAgICAgICAgICBzZXJ2ZXIud3Muc2VuZCh7XG4gICAgICAgICAgICB0eXBlOiAnZnVsbC1yZWxvYWQnLFxuICAgICAgICAgICAgcGF0aDogJyonXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBoYW5kbGVIb3RVcGRhdGUoY3R4OiBhbnkpIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBjdHguZmlsZS5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG4gICAgICBpZiAobm9ybWFsaXplZC5pbmNsdWRlcyhgLyR7bGF5b3V0RGlyTmFtZX0vYCkpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0TW9kcyA9IG5ldyBTZXQ8YW55PigpO1xuICAgICAgICBmb3IgKGNvbnN0IG1vZCBvZiBjdHgubW9kdWxlcykge1xuICAgICAgICAgIHRhcmdldE1vZHMuYWRkKG1vZCk7XG4gICAgICAgICAgY3R4LnNlcnZlci5tb2R1bGVHcmFwaC5pbnZhbGlkYXRlTW9kdWxlKG1vZCk7XG4gICAgICAgICAgaWYgKG1vZC5pbXBvcnRlcnMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW1wIG9mIG1vZC5pbXBvcnRlcnMpIHtcbiAgICAgICAgICAgICAgY3R4LnNlcnZlci5tb2R1bGVHcmFwaC5pbnZhbGlkYXRlTW9kdWxlKGltcCk7XG4gICAgICAgICAgICAgIHRhcmdldE1vZHMuYWRkKGltcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGN0eC5zZXJ2ZXIud3Muc2VuZCh7XG4gICAgICAgICAgdHlwZTogJ2Z1bGwtcmVsb2FkJyxcbiAgICAgICAgICBwYXRoOiAnKidcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRhcmdldE1vZHMpO1xuICAgICAgfVxuICAgICAgaWYgKG5vcm1hbGl6ZWQuaW5jbHVkZXMoJ3BhZ2VzLmpzb24nKSkge1xuICAgICAgICBjYWNoZWRQYWdlc0RhdGEgPSBudWxsO1xuICAgICAgICByZXR1cm4gY3R4Lm1vZHVsZXM7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgeyB1bmlMYXlvdXRzUGx1Z2luIGFzIHVuaUxheW91dHNYIH07XG5leHBvcnQgZGVmYXVsdCB1bmlMYXlvdXRzUGx1Z2luO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnMvdml0ZS1wbHVnaW4tdGFiYmFyLXZpZXdzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3ZpdGUtcGx1Z2luLXRhYmJhci12aWV3cy50c1wiO2ltcG9ydCBmcyBmcm9tICdub2RlOmZzJztcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnO1xuaW1wb3J0IHR5cGUgeyBQbHVnaW4gfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IGxvYWRBbGxQbGF0Zm9ybVBhZ2VWYXJpYW50cywgbG9hZFBsYXRmb3JtUGFnZXNKc29uIH0gZnJvbSAnLi9wYWdlcy1qc29uLXV0aWwnO1xuaW1wb3J0IHsgZ2V0UGFnZXNNZXRhU25hcHNob3QgfSBmcm9tICcuL3BhZ2VzLW1ldGEtY2FjaGUnO1xuXG5leHBvcnQgdHlwZSBUYWJiYXJWaWV3c09wdGlvbnMgPSB7XG4gIC8qKiBcdTY2MkZcdTU0MjZcdTU0MkZcdTc1MjhcdTY3MkNcdTYzRDJcdTRFRjZcdUZGMENcdTlFRDhcdThCQTQgdHJ1ZSAqL1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgLyoqIFx1N0YzQVx1NTkzMSBUYWIgXHU5ODc1XHU5NzYyXHU2NUY2XHU2NjJGXHU1NDI2XHU4MUVBXHU1MkE4XHU4ODY1XHU1RUZBXHU2QTIxXHU2NzdGXHVGRjBDXHU5RUQ4XHU4QkE0IHRydWVcdUZGMUJcdTUzRUFcdTRGMUFcdTY1QjBcdTU4OUVcdUZGMENcdTRFMERcdTRGMUFcdTg5ODZcdTc2RDZcdTYyMTZcdTUyMjBcdTk2NjRcdTVERjJcdTY3MDlcdTk4NzVcdTk3NjIgKi9cbiAgYXV0b0NyZWF0ZVBhZ2U/OiBib29sZWFuO1xuICAvKiogVGFiQmFyIFx1OTE0RFx1N0Y2RVx1NjU4N1x1NEVGNlx1OERFRlx1NUY4NFx1RkYwQ1x1OUVEOFx1OEJBNCAnc3JjL3RhYmJhci9jb25maWcudXRzJyAqL1xuICBjb25maWdGaWxlPzogc3RyaW5nO1xuICAvKiogXHU3NTFGXHU2MjEwXHU3Njg0IFRhYlZpZXdzIFx1OEMwM1x1NUVBNlx1N0VDNFx1NEVGNlx1OERFRlx1NUY4NFx1RkYwQ1x1OUVEOFx1OEJBNCAnc3JjL3RhYmJhci9jb21wb25lbnRzL1RhYlZpZXdzLnV2dWUnICovXG4gIHRhcmdldEZpbGU/OiBzdHJpbmc7XG4gIC8qKiBcdTZBMjFcdTVGMEYgNCBcdTc2ODRcdTVCQkZcdTRFM0JcdTk4NzVcdTk3NjJcdThERUZcdTVGODRcdUZGMENcdTlFRDhcdThCQTQgJ3NyYy9wYWdlcy9pbmRleC9pbmRleCdcdUZGMDhcdThCRTVcdTk4NzVcdTk3NjJcdTkwMUFcdThGQzcgc2xvdCBcdTYzRDBcdTRGOUJcdTgxRUFcdThFQUJcdTUxODVcdTVCQjlcdUZGMDkgKi9cbiAgaG9zdFBhZ2U/OiBzdHJpbmc7XG4gIC8qKiBcdTY2MkZcdTU0MjZcdTgxRUFcdTUyQThcdTRFQ0VcdTU0MDQgVGFiIFx1OTg3NVx1OTc2Mlx1NzY4NCBkZWZpbmVQYWdlIFx1NEUyRFx1NTQwQ1x1NkI2NSBoaWRlTmF2YmFyIFx1OTE0RFx1N0Y2RVx1RkYwQ1x1OUVEOFx1OEJBNCB0cnVlICovXG4gIHN5bmNOYXZiYXJDb25maWc/OiBib29sZWFuO1xufTtcblxudHlwZSBWaWV3RW50cnlWYXJpYW50ID0ge1xuICBjb25kaXRpb246IHN0cmluZyB8IG51bGw7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGhpZGVOYXZiYXI6IGJvb2xlYW47XG4gIGhpZGVTdGF0dXNCYXI6IGJvb2xlYW47XG4gIHNob3dCYWNrOiBib29sZWFuO1xuICBlbmFibGVQdWxsRG93blJlZnJlc2g6IGJvb2xlYW47XG4gIGN1c3RvbVBhZ2VDbGFzczogc3RyaW5nO1xuICBjdXN0b21QYWdlU3R5bGU6IHN0cmluZztcbn07XG5cbnR5cGUgQ2FjaGVkUGFnZVZhcmlhbnQgPSB7XG4gIGNvbmRpdGlvbjogc3RyaW5nIHwgbnVsbDtcbiAgcGFnZTogUmVjb3JkPHN0cmluZywgYW55PiB8IG51bGw7XG59O1xuXG50eXBlIENhY2hlZFBhZ2VFbnRyeSA9IHtcbiAgdmFyaWFudHM6IENhY2hlZFBhZ2VWYXJpYW50W107XG59O1xuXG50eXBlIFRhYmJhclBhZ2VFbnRyeSA9IHtcbiAgcGFnZVBhdGg6IHN0cmluZztcbiAgdGFiVHlwZTogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG59O1xuXG4vKiogXHU4QkZCXHU1M0Q2IFRhYkJhciBcdTZBMjFcdTVGMEZcdTkxNERcdTdGNkVcdUZGMDgwPVx1NjVFMFRhYkJhciwgMT1cdTUzOUZcdTc1MUZUYWJCYXIsIDI9XHU4MUVBXHU1QjlBXHU0RTQ5VGFiQmFyLCA0PVx1NTM1NVx1OTg3NVRhYkJhclx1RkYwOSAqL1xuZnVuY3Rpb24gZ2V0VGFiYmFyTW9kZShwcm9qZWN0Um9vdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52LlZJVEVfVEFCQkFSX01PREUgIT0gbnVsbCAmJiBwcm9jZXNzLmVudi5WSVRFX1RBQkJBUl9NT0RFICE9PSAnJykge1xuICAgIHJldHVybiBwcm9jZXNzLmVudi5WSVRFX1RBQkJBUl9NT0RFLnRyaW0oKTtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGVudlBhdGggPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsICcuZW52Jyk7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoZW52UGF0aCkpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZW52UGF0aCwgJ3V0Zi04Jyk7XG4gICAgICBjb25zdCBtYXRjaCA9IGNvbnRlbnQubWF0Y2goL15WSVRFX1RBQkJBUl9NT0RFXFxzKj1cXHMqWydcIl0/KFteJ1wiXFxyXFxuXSspWydcIl0/L20pO1xuICAgICAgaWYgKG1hdGNoICE9IG51bGwgJiYgbWF0Y2hbMV0gIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbWF0Y2hbMV0udHJpbSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjYXRjaCB7fVxuICByZXR1cm4gJzEnO1xufVxuXG4vKiogXHU3RjEzXHU1QjU4XHU1RjUzXHU1MjREXHU2MjQwXHU2NzA5IFRhYiBcdTVCRjlcdTVFOTRcdTc2ODRcdTk4NzVcdTk3NjJcdTY1ODdcdTRFRjZcdTdFRERcdTVCRjlcdThERUZcdTVGODRcdUZGMENcdTRGOUIgd2F0Y2hlciBcdTlBRDhcdTYwMjdcdTgwRkRcdTUzMzlcdTkxNEQgKi9cbmV4cG9ydCBjb25zdCB3YXRjaGVkVGFiUGFnZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuLyoqIFx1NUY1Mlx1NEUwMFx1NTMxNlx1OTg3NVx1OTc2Mlx1OERFRlx1NUY4NFx1RkYwQ1x1NTE3Q1x1NUJCOVx1NjcwOVx1NjVFMFx1NTI0RFx1NUJGQyBgL2BcdTMwMDFcdTY3MDlcdTY1RTBcdTYyNjlcdTVDNTVcdTU0MEQgKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVRhYlBhZ2VQYXRoKHBhZ2VQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGFnZVBhdGgucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoL15cXC8vLCAnJykucmVwbGFjZSgvXFwuKHV2dWV8dnVlKSQvLCAnJyk7XG59XG5cbi8qKiBcdThGQzdcdTZFRTRcdTkxNERcdTdGNkVcdTZFOTBcdTc4MDFcdTRFMkRcdTc2ODRcdTZDRThcdTkxQ0FcdUZGMENcdTkwN0ZcdTUxNERcdTYyOEFcdTZDRThcdTkxQ0FcdTYzODlcdTc2ODQgVGFiIFx1OTg3OVx1NUY1M1x1NjIxMFx1NjcwOVx1NjU0OFx1OTE0RFx1N0Y2RSAqL1xuZnVuY3Rpb24gc3RyaXBDb25maWdDb21tZW50cyhzb3VyY2U6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzb3VyY2VcbiAgICAucmVwbGFjZSgvXFwvXFwqW1xcc1xcU10qP1xcKlxcLy9nLCAnJylcbiAgICAucmVwbGFjZSgvXFwvXFwvLiokL2dtLCAnJyk7XG59XG5cbi8qKiBcdTRFQ0VcdTUzNTVcdTRFMkEgVGFiIFx1OTE0RFx1N0Y2RVx1NTc1N1x1NEUyRFx1NjNEMFx1NTNENlx1ODg2NVx1NUVGQVx1OTg3NVx1OTc2Mlx1NjI0MFx1OTcwMFx1NUI1N1x1NkJCNSAqL1xuZnVuY3Rpb24gcmVhZFRhYmJhclBhZ2VFbnRyeShibG9jazogc3RyaW5nKTogVGFiYmFyUGFnZUVudHJ5IHwgbnVsbCB7XG4gIGNvbnN0IHBhZ2VQYXRoTWF0Y2ggPSBibG9jay5tYXRjaCgvcGFnZVBhdGhcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICBpZiAocGFnZVBhdGhNYXRjaCA9PSBudWxsIHx8IHBhZ2VQYXRoTWF0Y2hbMV0udHJpbSgpID09ICcnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgdGFiVHlwZU1hdGNoID0gYmxvY2subWF0Y2goL3RhYlR5cGVcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICBjb25zdCB0ZXh0TWF0Y2ggPSBibG9jay5tYXRjaCgvdGV4dFxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gIHJldHVybiB7XG4gICAgcGFnZVBhdGg6IG5vcm1hbGl6ZVRhYlBhZ2VQYXRoKHBhZ2VQYXRoTWF0Y2hbMV0udHJpbSgpKSxcbiAgICB0YWJUeXBlOiB0YWJUeXBlTWF0Y2ggIT0gbnVsbCA/IHRhYlR5cGVNYXRjaFsxXS50cmltKCkgOiAnJyxcbiAgICB0ZXh0OiB0ZXh0TWF0Y2ggIT0gbnVsbCA/IHRleHRNYXRjaFsxXS50cmltKCkgOiAnJ1xuICB9O1xufVxuXG4vKiogXHU4QkZCXHU1M0Q2IGNvbmZpZy51dHMgXHU0RTJEIGxpc3QgXHU0RTBFIG1pZEJ1dHRvbiBcdTc2ODRcdTk4NzVcdTk3NjJcdTk4NzkgKi9cbmZ1bmN0aW9uIHJlYWRUYWJiYXJQYWdlRW50cmllcyhwcm9qZWN0Um9vdDogc3RyaW5nLCBjb25maWdGaWxlOiBzdHJpbmcpOiBUYWJiYXJQYWdlRW50cnlbXSB7XG4gIGNvbnN0IGNvbmZpZ1BhdGggPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsIGNvbmZpZ0ZpbGUpO1xuICBpZiAoIWZzLmV4aXN0c1N5bmMoY29uZmlnUGF0aCkpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgY29udGVudCA9IHN0cmlwQ29uZmlnQ29tbWVudHMoZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpKTtcbiAgY29uc3QgbGlzdE1hdGNoID0gY29udGVudC5tYXRjaCgvbGlzdFxccyo6XFxzKlxcWyhbXFxzXFxTXSo/KVxcXS8pO1xuICBjb25zdCBsaXN0OiBUYWJiYXJQYWdlRW50cnlbXSA9IFtdO1xuICBpZiAobGlzdE1hdGNoICE9IG51bGwpIHtcbiAgICBjb25zdCBpdGVtUmVnZXggPSAvXFx7KFtcXHNcXFNdKj8pXFx9L2c7XG4gICAgbGV0IG1hdGNoID0gaXRlbVJlZ2V4LmV4ZWMobGlzdE1hdGNoWzFdKTtcbiAgICB3aGlsZSAobWF0Y2ggIT0gbnVsbCkge1xuICAgICAgY29uc3QgZW50cnkgPSByZWFkVGFiYmFyUGFnZUVudHJ5KG1hdGNoWzFdKTtcbiAgICAgIGlmIChlbnRyeSAhPSBudWxsKSB7XG4gICAgICAgIGxpc3QucHVzaChlbnRyeSk7XG4gICAgICB9XG4gICAgICBtYXRjaCA9IGl0ZW1SZWdleC5leGVjKGxpc3RNYXRjaFsxXSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWlkQnV0dG9uTWF0Y2ggPSBjb250ZW50Lm1hdGNoKC9taWRCdXR0b25cXHMqOlxccypcXHsoW1xcc1xcU10qPylcXH0vKTtcbiAgY29uc3QgbWlkQnV0dG9uID0gbWlkQnV0dG9uTWF0Y2ggIT0gbnVsbCA/IHJlYWRUYWJiYXJQYWdlRW50cnkobWlkQnV0dG9uTWF0Y2hbMV0pIDogbnVsbDtcblxuICBjb25zdCBmdWxsTGlzdDogVGFiYmFyUGFnZUVudHJ5W10gPSBbXTtcbiAgaWYgKG1pZEJ1dHRvbiAhPSBudWxsKSB7XG4gICAgY29uc3QgaGFsZiA9IE1hdGguZmxvb3IobGlzdC5sZW5ndGggLyAyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSBoYWxmKSB7XG4gICAgICAgIGZ1bGxMaXN0LnB1c2gobWlkQnV0dG9uKTtcbiAgICAgIH1cbiAgICAgIGZ1bGxMaXN0LnB1c2gobGlzdFtpXSk7XG4gICAgfVxuICAgIGlmIChoYWxmID49IGxpc3QubGVuZ3RoKSB7XG4gICAgICBmdWxsTGlzdC5wdXNoKG1pZEJ1dHRvbik7XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIGZ1bGxMaXN0LnB1c2goLi4ubGlzdCk7XG4gIH1cblxuICByZXR1cm4gZnVsbExpc3QubWFwKChlbnRyeSwgaW5kZXgpID0+ICh7XG4gICAgLi4uZW50cnksXG4gICAgdGFiVHlwZTogZW50cnkudGFiVHlwZSAhPSAnJyA/IGVudHJ5LnRhYlR5cGUgOiBgdGFiLSR7aW5kZXh9YFxuICB9KSk7XG59XG5cbi8qKiBcdThGNkNcdTYzNjJcdTRFM0FcdTUzRUZcdTRGNUNcdTRFM0FcdTY4MDdcdThCQzZcdTdCMjZcdTRGN0ZcdTc1MjhcdTc2ODQgUGFzY2FsQ2FzZSAqL1xuZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KC9bXmEtejAtOV0rL2kpLmZpbHRlcihwYXJ0ID0+IHBhcnQgIT0gJycpO1xuICBjb25zdCByZXN1bHQgPSBwYXJ0cy5tYXAocGFydCA9PiBwYXJ0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcGFydC5zbGljZSgxKSkuam9pbignJyk7XG4gIGNvbnN0IHNhZmUgPSByZXN1bHQgIT0gJycgPyByZXN1bHQgOiAnVGFiJztcbiAgcmV0dXJuIC9eXFxkLy50ZXN0KHNhZmUpID8gYFRhYiR7c2FmZX1gIDogc2FmZTtcbn1cblxuLyoqIFx1NzUxRlx1NjIxMCBVVFMgXHU1MzU1XHU1RjE1XHU1M0Y3XHU1QjU3XHU3QjI2XHU0RTMyXHU1QjU3XHU5NzYyXHU5MUNGICovXG5mdW5jdGlvbiB0b1NpbmdsZVF1b3RlZCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAnJHt2YWx1ZS5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpLnJlcGxhY2UoLycvZywgJ1xcXFxcXCcnKX0nYDtcbn1cblxuLyoqIFx1NkUzMlx1NjdEM1x1N0YzQVx1NTkzMSBUYWIgXHU5ODc1XHU5NzYyXHU3Njg0XHU2NzAwXHU1QzBGXHU1M0VGXHU4RkQwXHU4ODRDXHU2QTIxXHU2NzdGICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFiUGFnZVNjYWZmb2xkKGVudHJ5OiBUYWJiYXJQYWdlRW50cnkpOiBzdHJpbmcge1xuICBjb25zdCBwYWdlTmFtZSA9IHBhdGguYmFzZW5hbWUoZW50cnkucGFnZVBhdGgpO1xuICBjb25zdCBzYWZlUGFnZU5hbWUgPSBwYWdlTmFtZSAhPSAnJyA/IHBhZ2VOYW1lIDogZW50cnkudGFiVHlwZTtcbiAgY29uc3QgcGFzY2FsTmFtZSA9IHRvUGFzY2FsQ2FzZShzYWZlUGFnZU5hbWUpO1xuICBjb25zdCBjYW1lbE5hbWUgPSBwYXNjYWxOYW1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcGFzY2FsTmFtZS5zbGljZSgxKTtcbiAgY29uc3QgdGl0bGUgPSBlbnRyeS50ZXh0ICE9ICcnID8gZW50cnkudGV4dCA6IHNhZmVQYWdlTmFtZTtcbiAgY29uc3Qgcm91dGVWYXIgPSBgJHtjYW1lbE5hbWV9Um91dGVgO1xuXG4gIHJldHVybiBgPHRlbXBsYXRlPlxuICA8dmlldyBjbGFzcz1cImZsZXggZmxleC1jb2xcIj5cbiAgICA8dGV4dD4ke3Bhc2NhbE5hbWV9VmlldzwvdGV4dD5cbiAgPC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidXRzXCI+XG5pbXBvcnQgeyB1c2VUYWJQYWdlLCB1c2VUYWJQYWdlU2hlbGwgfSBmcm9tICdAL3NyYy90YWJiYXIvaW5kZXgudXRzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ0AvdW5pX21vZHVsZXMvcm91dGUtYmVzdFgvaW5kZXgudXRzJztcblxuZGVmaW5lUGFnZSgoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY3VzdG9tUGFnZUNsYXNzOiAnaW5pdC1wYWdlJywgLy8gXHU5ODc1XHU5NzYyXHU2ODM5XHU1QkI5XHU1NjY4XHU4MUVBXHU1QjlBXHU0RTQ5XHU3QzdCXHU1NDBEXHVGRjA4XHU5MTREXHU1NDA4IGxheW91dCBcdTVFMDNcdTVDNDBcdTRGN0ZcdTc1MjhcdUZGMENcdTY1MkZcdTYzMDFcdTkxNERcdTdGNkVcdTUxNjhcdTVDNDBcdTY4MzdcdTVGMEZcdTdDN0JcdUZGMDlcbiAgICBjdXN0b21QYWdlU3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsnLCAvLyBcdTk4NzVcdTk3NjJcdTY4MzlcdTVCQjlcdTU2NjhcdTgxRUFcdTVCOUFcdTRFNDlcdTg4NENcdTUxODVcdTY4MzdcdTVGMEZcdUZGMDhcdTdBN0ZcdTkwMEZcdTRFRkJcdTRGNTVcdTY4MzdcdTVGMEZcdTk2OTRcdTc5QkJcdUZGMENcdTUxNjhcdTdBRUZcdTdFRERcdTVCRjlcdTc1MUZcdTY1NDhcdUZGMDlcbiAgICBuYW1lOiAke3RvU2luZ2xlUXVvdGVkKHNhZmVQYWdlTmFtZSl9LCAvLyBcdThERUZcdTc1MzFcdTU0MERcdUZGMUF1c2VSb3V0ZSgpLm5hbWUgXHU0RjE4XHU1MTQ4XHU4QkZCXHU1M0Q2XHU2QjY0XHU1MDNDXHVGRjBDXHU2NzJBXHU2NjNFXHU1RjBGXHU1OEYwXHU2NjBFXHU2NUY2XHU5RUQ4XHU4QkE0XHU4QkZCXHU1M0Q2XHU4REVGXHU1Rjg0XHU2NzAwXHU1NDBFXHU0RTAwXHU0RTJBXHU1MzU1XHU4QkNEXHVGRjA4XHU1OTgyIGluZGV4XHVGRjA5XG4gICAgZGVidWc6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTVGMDBcdTU0MkZcdTVGNTNcdTUyNERcdTk4NzVcdTk3NjJcdTZDOTlcdTc2RDJcdTcyRUNcdTdBQ0JcdThDMDNcdThCRDVcdUZGMDhcdThCQkVcdTRFM0EgdHJ1ZSBcdTUzRUZcdTUzNTVcdTcyRUNcdThDMDNcdThCRDVcdTZCNjRcdTk4NzVcdUZGMUJcdTI2QTBcdUZFMEYgXHU4QzAzXHU4QkQ1XHU1QjhDXHU2MjEwXHU1NDBFXHU2NTM5XHU1NkRFIGZhbHNlXHVGRjA5XG4gICAgZGVidWdIb21lOiBmYWxzZSwgLy8gXHU2Qzk5XHU3NkQyXHU4QzAzXHU4QkQ1XHU2QTIxXHU1RjBGXHU0RTBCXHU2NjJGXHU1NDI2XHU1QzA2XHU1RjUzXHU1MjREXHU5ODc1XHU5NzYyXHU2MzA3XHU1QjlBXHU0RTNBXHU1NDJGXHU1MkE4XHU5OTk2XHU5ODc1XHVGRjA4XHU1MTY4XHU1QzQwXHU0RUM1XHU1MTQxXHU4QkI4IDEgXHU0RTJBXHU5ODc1XHU5NzYyXHU4QkJFXHU0RTNBIHRydWVcdUZGMENcdTYzOTJcdTU3MjggcGFnZXNbMF1cdUZGMDlcbiAgICBsYXlvdXQ6ICduYXZiYXInLCAvLyBcdTk4NzVcdTk3NjJcdTkwMUFcdTc1MjhcdTVFMDNcdTVDNDBcdTZBMjFcdTY3N0ZcdUZGMDhcdTkxQzdcdTc1MjggbmF2YmFyIFx1NUUwM1x1NUM0MFx1NjNBNVx1N0JBMVx1OTg3Nlx1OTBFOFx1NUJGQ1x1ODIyQVx1NEUwRVx1NEUwQlx1NjJDOVx1NkVEQVx1NTJBOFx1NUJCOVx1NTY2OFx1RkYwOVxuICAgIHNob3dCYWNrOiBmYWxzZSwgLy8gXHU1QkZDXHU4MjJBXHU2ODBGXHU1REU2XHU0RkE3XHU2NjJGXHU1NDI2XHU2NjNFXHU3OTNBXHU4RkQ0XHU1NkRFXHU3QkFEXHU1OTM0XHVGRjA4VGFiQmFyIFx1OTk5Nlx1OTg3NVx1NjVFMFx1OTcwMFx1OEZENFx1NTZERVx1NjMwOVx1OTRBRVx1RkYwOVxuICAgIGhpZGVTdGF0dXNCYXI6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTk2OTBcdTg1Q0ZcdTcyQjZcdTYwMDFcdTY4MEZcdUZGMDh0cnVlIFx1NEUzQVx1OTY5MFx1ODVDRlx1RkYwOVxuICAgIGhpZGVOYXZiYXI6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTk2OTBcdTg1Q0ZcdTk4NzZcdTkwRThcdTVCRkNcdTgyMkFcdTY4MEZcdUZGMDhmYWxzZSBcdTRFM0FcdTZCNjNcdTVFMzhcdTY2M0VcdTc5M0FcdUZGMDlcbiAgICBzdHlsZToge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJHt0b1NpbmdsZVF1b3RlZCh0aXRsZSl9LFxuICAgICAgbmF2aWdhdGlvblN0eWxlOiAnY3VzdG9tJ1xuICAgIH1cbiAgfTtcbn0pO1xuXG4vLyBcdTk4NzVcdTk3NjJcdTY1ODdcdTRFRjZcdTU0MENcdTY1RjZcdTUzRUZcdTRGNUNcdTRFM0FcdTZBMjFcdTVGMEYgNCBcdTc2ODQgVGFiIFx1NUI1MFx1OTg3NVx1NEY3Rlx1NzUyOFx1RkYxQVx1NUQ0Q1x1NTk1N1x1NjVGNlx1NzUzMSB1c2VUYWJQYWdlKCkgXHU2M0E1XHU3QkExXHU5ODc1XHU5NzYyXHU3NTFGXHU1NDdEXHU1NDY4XHU2NzFGXG51c2VUYWJQYWdlU2hlbGwoJHt0b1NpbmdsZVF1b3RlZChlbnRyeS50YWJUeXBlKX0pO1xuXG5jb25zdCB7XG4gIHJvdXRlOiAke3JvdXRlVmFyfSxcbiAgb25Mb2FkOiBvbiR7cGFzY2FsTmFtZX1Mb2FkLFxuICBvblNob3c6IG9uJHtwYXNjYWxOYW1lfVNob3csXG4gIG9uSGlkZTogb24ke3Bhc2NhbE5hbWV9SGlkZVxufSA9IHVzZVRhYlBhZ2UoKTtcblxuLy8gdnVlLXJvdXRlciBcdTRGN0ZcdTc1MjhcbmNvbnN0IF9yb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuLy8gXHU0RTBFXHU2NjZFXHU5MDFBXHU5ODc1XHU5NzYyXHU0RTAwXHU4MUY0XHU3Njg0XHU5OTk2XHU2QjIxXHU4RkRCXHU1MTY1IC8gXHU2NjNFXHU3OTNBIC8gXHU5NjkwXHU4NUNGXHU3NTFGXHU1NDdEXHU1NDY4XHU2NzFGXG5vbiR7cGFzY2FsTmFtZX1Mb2FkKCgpID0+IHtcbiAgLy8gXHVEODNEXHVEQ0ExIFx1NkEyMVx1NUYwRjRcdTc2ODRcdTY2MjBcdTVDMDRcdTUxNzNcdTdDRkJcdTRFMkRcdUZGMEMvJHtzYWZlUGFnZU5hbWV9LnV2dWUgXHU2NjIwXHU1QzA0XHU1MjMwXHU3Njg0XHU1QjlFXHU5NjQ1XHU5ODc1XHU5NzYyXHU4REVGXHU3NTMxXHU2NjJGL3RhYi9pbmRleFx1RkYwQ1x1OEZEOVx1NjYyRlx1NTZFMFx1NEUzQXRhYmJhci9pbmRleC51dHNcdTRFMkRcdTVCOUFcdTRFNDlcdTRFODZcdTY2MjBcdTVDMDRcdTUxNzNcdTdDRkJcbiAgLy8gXHVEODNEXHVEQ0ExIFx1NkEyMVx1NUYwRjQgdXNlUm91dGUgXHU4M0I3XHU1M0Q2XHU3Njg0XHU4RkQ4XHU2NjJGaW5kZXhcdTc2ODRcbiAgLy8gXHVEODNEXHVERDE0IFx1NkEyMVx1NUYwRjRcdUZGMEN0YWJiYXJcdTUyMDdcdTYzNjJcdTY1RjZcdUZGMENcdTRFMERcdTRGMUFcdThENzBiZWZvcmVFYWNoXHVGRjBDXHU1NkUwXHU0RTNBXHU2NjJGaW5kZXhcdUZGMENcdTY2MkZcdTY4MzlcdTVCQjlcdTU2NjgsIFx1NTk4Mlx1OTcwMFx1NjJFNlx1NjIyQVx1OEJGN1x1ODFFQVx1ODg0Q1x1NTkwNFx1NzQwNnNyYy90YWJiYXIvYWRhcHRlcnMvdGFiLW5hdmlnYXRpb24udXRzXHVGRjBDXHU0RTAwXHU4MjJDXHU0RTFBXHU1MkExXHU3NTI4XHU0RTBEXHU1MkE4XHVGRjBDXHU2NUUwXHU5NzAwXHU0RkVFXHU2NTM5XG4gIGNvbnNvbGUubG9nKCR7dG9TaW5nbGVRdW90ZWQoYCR7c2FmZVBhZ2VOYW1lfVx1OTg3NVx1OTc2Mlx1OERFRlx1NUY4NGApfSwgJHtyb3V0ZVZhcn0udmFsdWUuZnVsbFBhdGgpO1xuICBjb25zb2xlLmxvZygke3RvU2luZ2xlUXVvdGVkKGBvbiR7cGFzY2FsTmFtZX1Mb2FkYCl9LCAke3RvU2luZ2xlUXVvdGVkKGAke3NhZmVQYWdlTmFtZX0gVGFiIFx1NjMwMlx1OEY3RFx1NEU4Nlx1RDgzRFx1REM0QmApfSk7XG59KTtcblxuLy8gXHU2NjNFXHU3OTNBXHU4OUU2XHU1M0QxXG5vbiR7cGFzY2FsTmFtZX1TaG93KCgpID0+IHtcbiAgY29uc29sZS5sb2coJHt0b1NpbmdsZVF1b3RlZChgb24ke3Bhc2NhbE5hbWV9U2hvd2ApfSwgJHt0b1NpbmdsZVF1b3RlZChgJHtzYWZlUGFnZU5hbWV9IFRhYiBcdTY2M0VcdTc5M0FcdTRFODZcdUQ4M0RcdURDNDBgKX0pO1xufSk7XG5cbi8vIFx1OTY5MFx1ODVDRlx1ODlFNlx1NTNEMVxub24ke3Bhc2NhbE5hbWV9SGlkZSgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCR7dG9TaW5nbGVRdW90ZWQoYG9uJHtwYXNjYWxOYW1lfUhpZGVgKX0sICR7dG9TaW5nbGVRdW90ZWQoYCR7c2FmZVBhZ2VOYW1lfSBUYWIgXHU5NjkwXHU4NUNGXHU0RTg2XHVEODNEXHVEQzQ5YCl9KTtcbn0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+PC9zdHlsZT5cbmA7XG59XG5cbi8qKlxuICogXHU0RTNBIGNvbmZpZy51dHMgXHU0RTJEXHU1QzFBXHU0RTBEXHU1QjU4XHU1NzI4XHU5ODc1XHU5NzYyXHU2NTg3XHU0RUY2XHU3Njg0IFRhYiBcdTg4NjVcdTVFRkFcdTZBMjFcdTY3N0ZcdTMwMDJcbiAqXG4gKiBcdTUzRUFcdTY1QjBcdTU4OUVcdTMwMDFcdTRFMERcdTg5ODZcdTc2RDZcdTMwMDFcdTRFMERcdTUyMjBcdTk2NjRcdUZGMUFcdTVERjJcdTY3MDlcdTk4NzVcdTk3NjJcdTRGRERcdTYzMDFcdTRFMERcdTUzRDhcdUZGMUJcdTRFQ0UgVGFiIFx1OTE0RFx1N0Y2RVx1NEUyRFx1NTIyMFx1OTY2NFx1NjdEMFx1OTg3OVx1NTQwRVx1RkYwQ1x1NTE3Nlx1OTg3NVx1OTc2Mlx1NjU4N1x1NEVGNlx1NEU1Rlx1NEUwRFx1NEYxQVx1ODhBQlx1NkUwNVx1NzQwNlx1MzAwMlxuICogQHJldHVybnMgXHU2NzJDXHU2QjIxXHU2NUIwXHU3NTFGXHU2MjEwXHU3Njg0XHU5ODc1XHU5NzYyXHU3NkY4XHU1QkY5XHU4REVGXHU1Rjg0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FmZm9sZE1pc3NpbmdUYWJQYWdlcyhwcm9qZWN0Um9vdDogc3RyaW5nLCBvcHRpb25zOiBUYWJiYXJWaWV3c09wdGlvbnMgPSB7fSk6IHN0cmluZ1tdIHtcbiAgaWYgKG9wdGlvbnMuYXV0b0NyZWF0ZVBhZ2UgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGNvbnN0IGNvbmZpZ0ZpbGUgPSBvcHRpb25zLmNvbmZpZ0ZpbGUgPz8gJ3NyYy90YWJiYXIvY29uZmlnLnV0cyc7XG4gIGNvbnN0IGVudHJpZXMgPSByZWFkVGFiYmFyUGFnZUVudHJpZXMocHJvamVjdFJvb3QsIGNvbmZpZ0ZpbGUpO1xuICBjb25zdCBjcmVhdGVkOiBzdHJpbmdbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBlbnRyeSA9IGVudHJpZXNbaV07XG4gICAgaWYgKGVudHJ5LnBhZ2VQYXRoID09ICcnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgdXZ1ZUZpbGUgPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsIGAke2VudHJ5LnBhZ2VQYXRofS51dnVlYCk7XG4gICAgY29uc3QgdnVlRmlsZSA9IHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgYCR7ZW50cnkucGFnZVBhdGh9LnZ1ZWApO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHV2dWVGaWxlKSB8fCBmcy5leGlzdHNTeW5jKHZ1ZUZpbGUpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZnMubWtkaXJTeW5jKHBhdGguZGlybmFtZSh1dnVlRmlsZSksIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgIGZzLndyaXRlRmlsZVN5bmModXZ1ZUZpbGUsIHJlbmRlclRhYlBhZ2VTY2FmZm9sZChlbnRyeSksICd1dGYtOCcpO1xuICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IGAke2VudHJ5LnBhZ2VQYXRofS51dnVlYDtcbiAgICBjcmVhdGVkLnB1c2gocmVsYXRpdmVQYXRoKTtcbiAgICBjb25zb2xlLmxvZyhgW3RhYmJhci12aWV3c10gXHU1REYyXHU4ODY1XHU1RUZBXHU3RjNBXHU1OTMxIFRhYiBcdTk4NzVcdTk3NjI6ICR7cmVsYXRpdmVQYXRofWApO1xuICB9XG4gIHJldHVybiBjcmVhdGVkO1xufVxuXG4vKipcbiAqIFx1NEVDRVx1OTg3NVx1OTc2Mlx1NkU5MFx1NzgwMVx1NTE1Q1x1NUU5NVx1NjNEMFx1NTNENlx1OTc1OVx1NjAwMVx1NjgwN1x1OTg5OFx1MzAwMlxuICpcbiAqIGBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0YCBcdTY2MkZcdTY3NjFcdTRFRjZcdTg4NjhcdThGQkVcdTVGMEZcdTY1RjZcdTY1RTBcdTZDRDVcdTU3MjhcdThGRDlcdTkxQ0NcdTVGOTdcdTUyMzBcdTUzNTVcdTRFMDBcdTY4MDdcdTk4OThcdUZGMENcdTZCNjRcdTY1RjZcdTVGQzVcdTk4N0JcdTY1M0VcdTVGMDNcdTY4MDdcdTk4OThcdUZGMENcbiAqIFx1NEUwRFx1ODBGRFx1N0VFN1x1N0VFRFx1NTMzOVx1OTE0RFx1OTg3NVx1OTc2Mlx1NEUxQVx1NTJBMVx1NjU3MFx1NjM2RVx1OTFDQ1x1NzY4NCBgdGl0bGVgIFx1NUI1N1x1NkJCNVx1RkYwOFx1NEY4Qlx1NTk4MiBkZW1vTGlzdCBcdTc2ODRcdTUzNjFcdTcyNDdcdTY4MDdcdTk4OThcdUZGMDlcdTMwMDJcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZVNvdXJjZVRpdGxlKHBhZ2VDb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBuYXZUaXRsZUZpZWxkID0gcGFnZUNvZGUubWF0Y2goL25hdmlnYXRpb25CYXJUaXRsZVRleHRcXHMqOi9pKTtcbiAgaWYgKG5hdlRpdGxlRmllbGQgIT0gbnVsbCkge1xuICAgIGNvbnN0IHRhaWwgPSBwYWdlQ29kZS5zbGljZSgobmF2VGl0bGVGaWVsZC5pbmRleCA/PyAwKSArIG5hdlRpdGxlRmllbGRbMF0ubGVuZ3RoKTtcbiAgICBjb25zdCBsaXRlcmFsID0gdGFpbC5tYXRjaCgvXlxccyooWydcImBdKShbXFxzXFxTXSo/KVxcMS8pO1xuICAgIHJldHVybiBsaXRlcmFsICE9IG51bGwgPyBsaXRlcmFsWzJdLnRyaW0oKSA6ICcnO1xuICB9XG4gIGNvbnN0IHRpdGxlRmllbGQgPSBwYWdlQ29kZS5tYXRjaCgvXFxidGl0bGVcXHMqOlxccyooWydcImBdKShbXFxzXFxTXSo/KVxcMS9pKTtcbiAgcmV0dXJuIHRpdGxlRmllbGQgIT0gbnVsbCA/IHRpdGxlRmllbGRbMl0udHJpbSgpIDogJyc7XG59XG5cbi8qKiBcdTYyOEFcdTY4MzhcdTVGQzNcdTYzRDJcdTRFRjZcdTc1NTlcdTRFMEJcdTc2ODRcdTVCOENcdTY1NzRcdTk4NzVcdTk3NjJcdTVGRUJcdTcxNjdcdThGNkNcdTYyMTAgVGFiVmlld3MgXHU1M0VGXHU3NkY0XHU2M0E1XHU2RDg4XHU4RDM5XHU3Njg0XHU5MTREXHU3RjZFIC8gXHU1OTFBXHU1RTczXHU1M0YwXHU1M0Q4XHU0RjUzICovXG5mdW5jdGlvbiByZWFkQ2FjaGVkUGFnZUVudHJpZXMocHJvamVjdFJvb3Q6IHN0cmluZyk6IE1hcDxzdHJpbmcsIENhY2hlZFBhZ2VFbnRyeT4ge1xuICBjb25zdCByZXN1bHQgPSBuZXcgTWFwPHN0cmluZywgQ2FjaGVkUGFnZUVudHJ5PigpO1xuICBjb25zdCBzbmFwc2hvdCA9IGdldFBhZ2VzTWV0YVNuYXBzaG90KHByb2plY3RSb290KTtcbiAgaWYgKHNuYXBzaG90ID09IG51bGwpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29uc3QgYWRkUGFnZSA9IChwYWdlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCByb290OiBzdHJpbmcgPSAnJyk6IHZvaWQgPT4ge1xuICAgIGlmICh0eXBlb2YgcGFnZS5wYXRoICE9PSAnc3RyaW5nJyB8fCBwYWdlLnBhdGggPT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZ1bGxQYXRoID0gbm9ybWFsaXplVGFiUGFnZVBhdGgocm9vdCA9PT0gJycgPyBwYWdlLnBhdGggOiBgJHtyb290fS8ke3BhZ2UucGF0aH1gKTtcbiAgICBjb25zdCB2YXJpYW50cyA9IEFycmF5LmlzQXJyYXkocGFnZS5fdmFyaWFudHMpXG4gICAgICA/IHBhZ2UuX3ZhcmlhbnRzXG4gICAgICAgICAgLmZpbHRlcigodmFyaWFudDogYW55KSA9PiB2YXJpYW50ICE9IG51bGwgJiYgdHlwZW9mIHZhcmlhbnQucGxhdGZvcm0gPT09ICdzdHJpbmcnKVxuICAgICAgICAgIC5tYXAoKHZhcmlhbnQ6IGFueSk6IENhY2hlZFBhZ2VWYXJpYW50ID0+ICh7XG4gICAgICAgICAgICBjb25kaXRpb246IHZhcmlhbnQucGxhdGZvcm0sXG4gICAgICAgICAgICBwYWdlOiB2YXJpYW50LnBhZ2UgPz8gbnVsbFxuICAgICAgICAgIH0pKVxuICAgICAgOiBbXTtcbiAgICByZXN1bHQuc2V0KGZ1bGxQYXRoLCB7XG4gICAgICB2YXJpYW50czogdmFyaWFudHMubGVuZ3RoID4gMCA/IHZhcmlhbnRzIDogW3sgY29uZGl0aW9uOiBudWxsLCBwYWdlIH1dXG4gICAgfSk7XG4gIH07XG5cbiAgc25hcHNob3QucGFnZXMuZm9yRWFjaChwYWdlID0+IGFkZFBhZ2UocGFnZSkpO1xuICBzbmFwc2hvdC5zdWJQYWNrYWdlcy5mb3JFYWNoKChwa2cpID0+IHtcbiAgICBwa2cucGFnZXMuZm9yRWFjaChwYWdlID0+IGFkZFBhZ2UocGFnZSwgcGtnLnJvb3QpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBcdTU0MDhcdTVFNzZcdTVCNTdcdTZCQjVcdTVCOENcdTUxNjhcdTc2RjhcdTU0MENcdTc2ODRcdTVFNzNcdTUzRjBcdTUzRDhcdTRGNTNcdUZGMENcdTkwN0ZcdTUxNEQgVGFiVmlld3MgXHU3NTFGXHU2MjEwXHU1OTI3XHU5MUNGXHU5MUNEXHU1OTBEXHU3Njg0XHU2NzYxXHU0RUY2XHU3RjE2XHU4QkQxXHU1NzU3ICovXG5mdW5jdGlvbiBtZXJnZUVxdWl2YWxlbnRWaWV3VmFyaWFudHModmFyaWFudHM6IFZpZXdFbnRyeVZhcmlhbnRbXSk6IFZpZXdFbnRyeVZhcmlhbnRbXSB7XG4gIGNvbnN0IGdyb3VwcyA9IG5ldyBNYXA8c3RyaW5nLCBWaWV3RW50cnlWYXJpYW50W10+KCk7XG4gIHZhcmlhbnRzLmZvckVhY2goKHZhcmlhbnQpID0+IHtcbiAgICBjb25zdCB7IGNvbmRpdGlvbjogX2NvbmRpdGlvbiwgLi4uZmllbGRzIH0gPSB2YXJpYW50O1xuICAgIGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KGZpZWxkcyk7XG4gICAgY29uc3QgbGlzdCA9IGdyb3Vwcy5nZXQoa2V5KTtcbiAgICBpZiAobGlzdCA9PSBudWxsKSB7XG4gICAgICBncm91cHMuc2V0KGtleSwgW3ZhcmlhbnRdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsaXN0LnB1c2godmFyaWFudCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCByZXN1bHQ6IFZpZXdFbnRyeVZhcmlhbnRbXSA9IFtdO1xuICBncm91cHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0ID0gbGlzdFswXTtcbiAgICBjb25zdCBjb25kaXRpb25zOiBzdHJpbmdbXSA9IFtdO1xuICAgIGxldCB1bmNvbmRpdGlvbmFsID0gZmFsc2U7XG4gICAgbGlzdC5mb3JFYWNoKCh2YXJpYW50KSA9PiB7XG4gICAgICBpZiAodmFyaWFudC5jb25kaXRpb24gPT0gbnVsbCB8fCB2YXJpYW50LmNvbmRpdGlvbiA9PSAnJykge1xuICAgICAgICB1bmNvbmRpdGlvbmFsID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFjb25kaXRpb25zLmluY2x1ZGVzKHZhcmlhbnQuY29uZGl0aW9uKSkge1xuICAgICAgICBjb25kaXRpb25zLnB1c2godmFyaWFudC5jb25kaXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgIC4uLmZpcnN0LFxuICAgICAgY29uZGl0aW9uOiB1bmNvbmRpdGlvbmFsID8gbnVsbCA6IGNvbmRpdGlvbnMuam9pbignIHx8ICcpXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFx1NzUxRlx1NjIxMFx1NTM1NVx1OTg3NSBUYWJCYXIgXHU4QzAzXHU1RUE2XHU1QkI5XHU1NjY4IFRhYlZpZXdzLnV2dWVcdTMwMDJcbiAqXG4gKiBcdTY2NkVcdTkwMUEgVGFiIFx1NzZGNFx1NjNBNVx1NTkwRFx1NzUyOFx1OTg3NVx1OTc2MiAudXZ1ZVx1RkYxQlx1NUJCRlx1NEUzQlx1OTg3NVx1OTAxQVx1OEZDNyB0YWJIb3N0IHNsb3QgXHU2Q0U4XHU1MTY1XHVGRjBDXHU5MDdGXHU1MTREXHU5ODc1XHU5NzYyXHU4MUVBXHU1RjE1XHU3NTI4XHUzMDAyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRhYlZpZXdzKHByb2plY3RSb290OiBzdHJpbmcsIG9wdGlvbnM6IFRhYmJhclZpZXdzT3B0aW9ucyA9IHt9KTogdm9pZCB7XG4gIGNvbnN0IGNvbmZpZ0ZpbGUgPSBvcHRpb25zLmNvbmZpZ0ZpbGUgPz8gJ3NyYy90YWJiYXIvY29uZmlnLnV0cyc7XG4gIGNvbnN0IGhvc3RQYWdlID0gKG9wdGlvbnMuaG9zdFBhZ2UgPz8gJ3NyYy9wYWdlcy9pbmRleC9pbmRleCcpLnJlcGxhY2UoL1xcXFwvZywgJy8nKS5yZXBsYWNlKC9eXFwvLywgJycpLnJlcGxhY2UoL1xcLih1dnVlfHZ1ZSkkLywgJycpO1xuICBjb25zdCBjb25maWdQYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCBjb25maWdGaWxlKTtcbiAgaWYgKCFmcy5leGlzdHNTeW5jKGNvbmZpZ1BhdGgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gXHU3NkY0XHU2M0E1XHU4QzAzXHU3NTI4XHU2NzJDXHU3NTFGXHU2MjEwXHU1NjY4XHVGRjA4XHU1MzU1XHU2RDRCIC8gXHU3MkVDXHU3QUNCXHU4MTFBXHU2NzJDXHVGRjA5XHU2NUY2XHU0RTVGXHU4ODY1XHU5RjUwXHU3RjNBXHU1OTMxXHU5ODc1XHU5NzYyXHVGRjFCXHU3NTFGXHU0RUE3XHU2Nzg0XHU1RUZBXHU3NTMxIGNvbmZpZ1Jlc29sdmVkIFx1NjZGNFx1NjVFOVx1NjI2N1x1ODg0Q1x1MzAwMlxuICBzY2FmZm9sZE1pc3NpbmdUYWJQYWdlcyhwcm9qZWN0Um9vdCwgb3B0aW9ucyk7XG5cbiAgY29uc3QgcmF3Q29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgLy8gXHU4RkM3XHU2RUU0XHU1OTFBXHU4ODRDXHU2Q0U4XHU5MUNBXHU0RTBFXHU1MzU1XHU4ODRDXHU2Q0U4XHU5MUNBXHVGRjBDXHU5MDdGXHU1MTREXHU2Q0U4XHU5MUNBXHU5ODc5XHU4OEFCXHU4OUUzXHU2NzkwXG4gIGNvbnN0IGNvbnRlbnQgPSByYXdDb250ZW50XG4gICAgLnJlcGxhY2UoL1xcL1xcKltcXHNcXFNdKj9cXCpcXC8vZywgJycpXG4gICAgLnJlcGxhY2UoL1xcL1xcLy4qJC9nbSwgJycpO1xuXG4gIGNvbnN0IGxpc3RNYXRjaCA9IGNvbnRlbnQubWF0Y2goL2xpc3RcXHMqOlxccypcXFsoW1xcc1xcU10qPylcXF0vKTtcbiAgaWYgKCFsaXN0TWF0Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBsaXN0QmxvY2sgPSBsaXN0TWF0Y2hbMV07XG4gIGNvbnN0IGl0ZW1SZWdleCA9IC9cXHsoW1xcc1xcU10qPylcXH0vZztcbiAgbGV0IG0gPSBpdGVtUmVnZXguZXhlYyhsaXN0QmxvY2spO1xuICBjb25zdCB0YWJQYWdlczogc3RyaW5nW10gPSBbXTtcbiAgd2hpbGUgKG0gIT09IG51bGwpIHtcbiAgICBjb25zdCBpdGVtQmxvY2sgPSBtWzFdO1xuICAgIGNvbnN0IHBhZ2VQYXRoTWF0Y2ggPSBpdGVtQmxvY2subWF0Y2goL3BhZ2VQYXRoXFxzKjpcXHMqWydcImBdKC4qPylbJ1wiYF0vKTtcbiAgICBpZiAocGFnZVBhdGhNYXRjaCkge1xuICAgICAgY29uc3QgcGFnZVBhdGggPSBwYWdlUGF0aE1hdGNoWzFdLnRyaW0oKS5yZXBsYWNlKC9eXFwvLywgJycpO1xuICAgICAgdGFiUGFnZXMucHVzaChwYWdlUGF0aCk7XG4gICAgfVxuICAgIG0gPSBpdGVtUmVnZXguZXhlYyhsaXN0QmxvY2spO1xuICB9XG5cbiAgLy8gXHU4OUUzXHU2NzkwIG1pZEJ1dHRvblx1RkYwOFx1OUYxM1x1NTMwNVx1NEU1Rlx1NjYyRlx1NUM1RVx1NEU4RSB0YWJiYXIgXHU3Njg0XHU0RTAwXHU5MEU4XHU1MjA2XHVGRjA5XG4gIGNvbnN0IG1pZEJ1dHRvbk1hdGNoID0gY29udGVudC5tYXRjaCgvbWlkQnV0dG9uXFxzKjpcXHMqXFx7KFtcXHNcXFNdKj8pXFx9Lyk7XG4gIGxldCBtaWRCdXR0b25QYWdlUGF0aDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIGlmIChtaWRCdXR0b25NYXRjaCkge1xuICAgIGNvbnN0IGJsb2NrID0gbWlkQnV0dG9uTWF0Y2hbMV07XG4gICAgY29uc3QgcGFnZVBhdGhNYXRjaCA9IGJsb2NrLm1hdGNoKC9wYWdlUGF0aFxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gICAgaWYgKHBhZ2VQYXRoTWF0Y2ggJiYgcGFnZVBhdGhNYXRjaFsxXS50cmltKCkpIHtcbiAgICAgIG1pZEJ1dHRvblBhZ2VQYXRoID0gcGFnZVBhdGhNYXRjaFsxXS50cmltKCkucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgICB9XG4gIH1cblxuICAvLyBcdTRFMEUgdGFiYmFyIFx1NUU5NVx1NUM0MiBidWlsZEZ1bGxUYWJiYXJMaXN0IFx1NEZERFx1NjMwMVx1NEUyNVx1NjgzQ1x1NEUwMFx1ODFGNFx1NzY4NFx1NjM5Mlx1NUU4Rlx1ODlDNFx1NTIxOVx1RkYwOG1pZEJ1dHRvbiBcdTVDNDVcdTRFMkRcdTYzRDJcdTUxNjVcdUZGMDlcbiAgY29uc3QgZnVsbFRhYlBhZ2VzOiBzdHJpbmdbXSA9IFtdO1xuICBpZiAobWlkQnV0dG9uUGFnZVBhdGgpIHtcbiAgICBjb25zdCBoYWxmID0gTWF0aC5mbG9vcih0YWJQYWdlcy5sZW5ndGggLyAyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYlBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gaGFsZikge1xuICAgICAgICBmdWxsVGFiUGFnZXMucHVzaChtaWRCdXR0b25QYWdlUGF0aCk7XG4gICAgICB9XG4gICAgICBmdWxsVGFiUGFnZXMucHVzaCh0YWJQYWdlc1tpXSk7XG4gICAgfVxuICAgIGlmIChoYWxmID49IHRhYlBhZ2VzLmxlbmd0aCkge1xuICAgICAgZnVsbFRhYlBhZ2VzLnB1c2gobWlkQnV0dG9uUGFnZVBhdGgpO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYlBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmdWxsVGFiUGFnZXMucHVzaCh0YWJQYWdlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZ1bGxUYWJQYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB3YXRjaGVkVGFiUGFnZXMuY2xlYXIoKTtcblxuICAvLyBcdThCRkJcdTUzRDYgcGFnZXMuanNvbiBcdTgzQjdcdTUzRDZcdTU0MDRcdTk4NzVcdTk3NjJcdTVCOENcdTY1NzRcdTkxNERcdTdGNkVcbiAgY29uc3QgcGFnZXNKc29uTWFwID0gbmV3IE1hcDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIGFueT4+KCk7XG4gIGNvbnN0IHBhZ2VzSnNvblBhdGggPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsICdwYWdlcy5qc29uJyk7XG4gIGlmIChmcy5leGlzdHNTeW5jKHBhZ2VzSnNvblBhdGgpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBsb2FkUGxhdGZvcm1QYWdlc0pzb24ocGFnZXNKc29uUGF0aCk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLnBhZ2VzKSkge1xuICAgICAgICBkYXRhLnBhZ2VzLmZvckVhY2goKHA6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChwICYmIHR5cGVvZiBwLnBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBub3JtUGF0aCA9IHAucGF0aC5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgICAgICAgICAgIHBhZ2VzSnNvbk1hcC5zZXQobm9ybVBhdGgsIHApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoIHt9XG4gIH1cblxuICBjb25zdCBhbGxWYXJpYW50c01hcCA9IGxvYWRBbGxQbGF0Zm9ybVBhZ2VWYXJpYW50cyhwYWdlc0pzb25QYXRoKTtcbiAgY29uc3QgY2FjaGVkUGFnZUVudHJpZXMgPSByZWFkQ2FjaGVkUGFnZUVudHJpZXMocHJvamVjdFJvb3QpO1xuXG4gIGNvbnN0IHZpZXdzRW50cmllczogQXJyYXk8e1xuICAgIGltcG9ydE5hbWU6IHN0cmluZyB8IG51bGw7XG4gICAgaW1wb3J0UGF0aDogc3RyaW5nO1xuICAgIHZhcmlhbnRzOiBWaWV3RW50cnlWYXJpYW50W107XG4gIH0+ID0gW107XG4gIGNvbnN0IHVzZWROYW1lcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGZ1bGxUYWJQYWdlcy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgY29uc3QgcmF3UGF0aCA9IGZ1bGxUYWJQYWdlc1tpZHhdO1xuICAgIGNvbnN0IHBhZ2VSZWxQYXRoID0gcmF3UGF0aC5yZXBsYWNlKC9ec3JjXFwvLywgJycpLnJlcGxhY2UoL1xcLih1dnVlfHZ1ZSkkLywgJycpO1xuICAgIGNvbnN0IHBhZ2VCYXNlTmFtZSA9IHBhdGguYmFzZW5hbWUocGFnZVJlbFBhdGgpO1xuICAgIGNvbnN0IHBhc2NhbFBhZ2VOYW1lID0gcGFnZUJhc2VOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcGFnZUJhc2VOYW1lLnNsaWNlKDEpO1xuICAgIC8vIFx1NkEyMVx1NUYwRiA0IFx1NzZGNFx1NjNBNVx1NTkwRFx1NzUyOFx1NzcxRlx1NUI5RVx1OTg3NVx1OTc2Mlx1N0VDNFx1NEVGNlx1RkYxQVx1NjY2RVx1OTAxQSBUYWIgXHU3NTMxIFRhYkNvbnRlbnQgXHU2Q0U4XHU1MTY1IHRhYlBhZ2VJbmRleFx1RkYxQlxuICAgIC8vIFx1NUJCRlx1NEUzQlx1OTg3NVx1NjUzOVx1OEQ3MCBzbG90XHVGRjBDXHU5MDdGXHU1MTREIGluZGV4LnV2dWUgXHU4OEFCIFRhYlZpZXdzIFx1NTNDRFx1NTQxMSBpbXBvcnRcdTMwMDJcdThGRDlcdTY4MzdcdTRFMUFcdTUyQTFcdTUzRUFcdTk3MDBcdTg5ODFcdTdFRjRcdTYyQTRcdTRFMDBcdTRFMkEgLnV2dWVcdTMwMDJcbiAgICBjb25zdCBpc0hvc3RQYWdlID0gcGFnZVJlbFBhdGggPT0gaG9zdFBhZ2UucmVwbGFjZSgvXnNyY1xcLy8sICcnKTtcbiAgICBjb25zdCBhY3R1YWxDb21wTmFtZSA9IGAke3Bhc2NhbFBhZ2VOYW1lfVBhZ2VgO1xuICAgIGNvbnN0IGFjdHVhbFJlbFBhdGggPSBgc3JjLyR7cGFnZVJlbFBhdGh9LnV2dWVgO1xuXG4gICAgY29uc3Qgbm9ybVRhcmdldCA9IHJhd1BhdGgucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoL15cXC8vLCAnJykucmVwbGFjZSgvXFwuKHV2dWV8dnVlKSQvLCAnJyk7XG4gICAgY29uc3QgY2FjaGVkRW50cnkgPSBjYWNoZWRQYWdlRW50cmllcy5nZXQobm9ybVRhcmdldCk7XG4gICAgbGV0IHNvdXJjZVZhcmlhbnRzOiBDYWNoZWRQYWdlVmFyaWFudFtdID0gW107XG4gICAgaWYgKGNhY2hlZEVudHJ5ICE9IG51bGwpIHtcbiAgICAgIC8vIFx1NkEyMVx1NUYwRiA0IFx1NEUwQlx1OEZEOVx1NEU5Qlx1OTg3NVx1OTc2Mlx1NURGMlx1ODhBQlx1NzlGQlx1NTFGQSBwYWdlcy5qc29uXHVGRjBDXHU0RjQ2XHU2ODM4XHU1RkMzXHU2M0QyXHU0RUY2XHU3NTU5XHU0RTBCXHU0RTg2XHU1MzA1XHU1NDJCIF92YXJpYW50cyBcdTc2ODRcdTVCOENcdTY1NzRcdTVGRUJcdTcxNjdcdTMwMDJcbiAgICAgIHNvdXJjZVZhcmlhbnRzID0gY2FjaGVkRW50cnkudmFyaWFudHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gXHU3MkVDXHU3QUNCXHU4RkQwXHU4ODRDXHU2NzJDXHU2M0QyXHU0RUY2XHU2MjE2XHU4REYzXHU4RkM3XHU2ODM4XHU1RkMzXHU2M0QyXHU0RUY2XHU2NUY2XHVGRjBDXHU5MDAwXHU1NkRFXHU4QkZCXHU1M0Q2IHBhZ2VzLmpzb25cdTMwMDJcbiAgICAgIGNvbnN0IHZhcmlhbnRzID0gYWxsVmFyaWFudHNNYXAuZ2V0KG5vcm1UYXJnZXQpXG4gICAgICAgIHx8IGFsbFZhcmlhbnRzTWFwLmdldChgc3JjLyR7bm9ybVRhcmdldH1gKVxuICAgICAgICB8fCBhbGxWYXJpYW50c01hcC5nZXQobm9ybVRhcmdldC5yZXBsYWNlKC9ec3JjXFwvLywgJycpKVxuICAgICAgICB8fCBbXTtcbiAgICAgIGNvbnN0IHBhZ2VDb25maWcgPSBwYWdlc0pzb25NYXAuZ2V0KG5vcm1UYXJnZXQpXG4gICAgICAgIHx8IHBhZ2VzSnNvbk1hcC5nZXQoYHNyYy8ke25vcm1UYXJnZXR9YClcbiAgICAgICAgfHwgcGFnZXNKc29uTWFwLmdldChub3JtVGFyZ2V0LnJlcGxhY2UoL15zcmNcXC8vLCAnJykpXG4gICAgICAgIHx8IG51bGw7XG4gICAgICBzb3VyY2VWYXJpYW50cyA9IHZhcmlhbnRzLmxlbmd0aCA+IDBcbiAgICAgICAgPyB2YXJpYW50c1xuICAgICAgICA6IFt7IGNvbmRpdGlvbjogbnVsbCwgcGFnZTogcGFnZUNvbmZpZyB9XTtcbiAgICB9XG5cbiAgICBjb25zdCBlbnRyeVZhcmlhbnRzOiBWaWV3RW50cnlWYXJpYW50W10gPSBtZXJnZUVxdWl2YWxlbnRWaWV3VmFyaWFudHMoc291cmNlVmFyaWFudHMubWFwKCh2KSA9PiB7XG4gICAgICBjb25zdCBwID0gdi5wYWdlO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29uZGl0aW9uOiB2LmNvbmRpdGlvbixcbiAgICAgICAgaGlkZU5hdmJhcjogcD8uaGlkZU5hdmJhciA9PT0gdHJ1ZSxcbiAgICAgICAgaGlkZVN0YXR1c0JhcjogcD8uaGlkZVN0YXR1c0JhciA9PT0gdHJ1ZSxcbiAgICAgICAgc2hvd0JhY2s6IHA/LnNob3dCYWNrICE9PSBmYWxzZSxcbiAgICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0eXBlb2YgcD8uZW5hYmxlUHVsbERvd25SZWZyZXNoID09PSAnYm9vbGVhbicgPyBwLmVuYWJsZVB1bGxEb3duUmVmcmVzaCA6IHRydWUsXG4gICAgICAgIHRpdGxlOiB0eXBlb2YgcD8uc3R5bGU/Lm5hdmlnYXRpb25CYXJUaXRsZVRleHQgPT09ICdzdHJpbmcnXG4gICAgICAgICAgPyBwLnN0eWxlLm5hdmlnYXRpb25CYXJUaXRsZVRleHRcbiAgICAgICAgICA6ICh0eXBlb2YgcD8udGl0bGUgPT09ICdzdHJpbmcnID8gcC50aXRsZSA6ICcnKSxcbiAgICAgICAgY3VzdG9tUGFnZUNsYXNzOiB0eXBlb2YgcD8uY3VzdG9tUGFnZUNsYXNzID09PSAnc3RyaW5nJ1xuICAgICAgICAgID8gcC5jdXN0b21QYWdlQ2xhc3NcbiAgICAgICAgICA6ICh0eXBlb2YgcD8uY2xhc3MgPT09ICdzdHJpbmcnID8gcC5jbGFzcyA6ICcnKSxcbiAgICAgICAgY3VzdG9tUGFnZVN0eWxlOiB0eXBlb2YgcD8uY3VzdG9tUGFnZVN0eWxlID09PSAnc3RyaW5nJ1xuICAgICAgICAgID8gcC5jdXN0b21QYWdlU3R5bGVcbiAgICAgICAgICA6ICh0eXBlb2YgcD8uY3VzdG9tU3R5bGUgPT09ICdzdHJpbmcnID8gcC5jdXN0b21TdHlsZSA6ICcnKVxuICAgICAgfTtcbiAgICB9KSk7XG5cbiAgICBjb25zdCBhYnNQYWdlRmlsZSA9IHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgcmF3UGF0aC5lbmRzV2l0aCgnLnV2dWUnKSA/IHJhd1BhdGggOiBgJHtyYXdQYXRofS51dnVlYCk7XG4gICAgd2F0Y2hlZFRhYlBhZ2VzLmFkZChhYnNQYWdlRmlsZSk7XG5cbiAgICAvLyBcdTUxNUNcdTVFOTVcdTc2RjRcdTYzQTVcdTg5RTNcdTY3OTBcdTVCRjlcdTVFOTRcdTRFM0JcdTk4NzVcdTk3NjJcdTZFOTBcdTc4MDFcdUZGMDhcdTRFQzVcdTU3MjhcdTY1RTBcdTU5MUFcdTVFNzNcdTUzRjBcdTUzRDhcdTRGNTNcdTRFMTRcdTRFM0FcdTUzNTVcdTlFRDhcdThCQTRcdTUzRDhcdTRGNTNcdTY1RjZcdTRGNUNcdTRFM0FcdTZFOTBcdTc4MDFcdTUzNzNcdTY1RjZcdTdGMTZcdThGOTFcdTc2ODRcdTUxNUNcdTVFOTVcdUZGMDlcbiAgICBpZiAob3B0aW9ucy5zeW5jTmF2YmFyQ29uZmlnICE9PSBmYWxzZSAmJiBmcy5leGlzdHNTeW5jKGFic1BhZ2VGaWxlKSAmJiBlbnRyeVZhcmlhbnRzLmxlbmd0aCA9PT0gMSAmJiAhZW50cnlWYXJpYW50c1swXS5jb25kaXRpb24pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBhZ2VDb2RlID0gZnMucmVhZEZpbGVTeW5jKGFic1BhZ2VGaWxlLCAndXRmLTgnKTtcbiAgICAgICAgY29uc3QgdiA9IGVudHJ5VmFyaWFudHNbMF07XG4gICAgICAgIGNvbnN0IG1IaWRlID0gcGFnZUNvZGUubWF0Y2goL2hpZGVOYXZiYXJcXHMqOlxccyoodHJ1ZXxmYWxzZSkvaSk7XG4gICAgICAgIGlmIChtSGlkZSlcbiAgICAgICAgICB2LmhpZGVOYXZiYXIgPSBtSGlkZVsxXS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSc7XG4gICAgICAgIGNvbnN0IG1TdGF0dXMgPSBwYWdlQ29kZS5tYXRjaCgvaGlkZVN0YXR1c0Jhclxccyo6XFxzKih0cnVlfGZhbHNlKS9pKTtcbiAgICAgICAgaWYgKG1TdGF0dXMpXG4gICAgICAgICAgdi5oaWRlU3RhdHVzQmFyID0gbVN0YXR1c1sxXS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSc7XG4gICAgICAgIGNvbnN0IG1TaG93QmFjayA9IHBhZ2VDb2RlLm1hdGNoKC9zaG93QmFja1xccyo6XFxzKih0cnVlfGZhbHNlKS9pKTtcbiAgICAgICAgaWYgKG1TaG93QmFjaylcbiAgICAgICAgICB2LnNob3dCYWNrID0gbVNob3dCYWNrWzFdLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJztcbiAgICAgICAgY29uc3QgbVJlZnJlc2ggPSBwYWdlQ29kZS5tYXRjaCgvZW5hYmxlUHVsbERvd25SZWZyZXNoXFxzKjpcXHMqKHRydWV8ZmFsc2UpL2kpO1xuICAgICAgICBpZiAobVJlZnJlc2gpXG4gICAgICAgICAgdi5lbmFibGVQdWxsRG93blJlZnJlc2ggPSBtUmVmcmVzaFsxXS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSc7XG4gICAgICAgIGNvbnN0IHNvdXJjZVRpdGxlID0gcmVzb2x2ZVNvdXJjZVRpdGxlKHBhZ2VDb2RlKTtcbiAgICAgICAgaWYgKHNvdXJjZVRpdGxlICE9PSAnJylcbiAgICAgICAgICB2LnRpdGxlID0gc291cmNlVGl0bGU7XG4gICAgICAgIGNvbnN0IG1DbGFzcyA9IHBhZ2VDb2RlLm1hdGNoKC9jdXN0b21QYWdlQ2xhc3NcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS9pKTtcbiAgICAgICAgaWYgKG1DbGFzcylcbiAgICAgICAgICB2LmN1c3RvbVBhZ2VDbGFzcyA9IG1DbGFzc1sxXS50cmltKCk7XG4gICAgICAgIGNvbnN0IG1TdHlsZSA9IHBhZ2VDb2RlLm1hdGNoKC9jdXN0b21QYWdlU3R5bGVcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS9pKTtcbiAgICAgICAgaWYgKG1TdHlsZSlcbiAgICAgICAgICB2LmN1c3RvbVBhZ2VTdHlsZSA9IG1TdHlsZVsxXS50cmltKCk7XG4gICAgICB9XG4gICAgICBjYXRjaCB7fVxuICAgIH1cblxuICAgIC8vIFx1OTYzMlx1NkI2Mlx1NzZGOFx1NTQwQ1x1NTQwRFx1NzlGMFx1NTFCMlx1N0E4MVxuICAgIGxldCBmaW5hbENvbXBOYW1lID0gYWN0dWFsQ29tcE5hbWU7XG4gICAgaWYgKHVzZWROYW1lcy5oYXMoZmluYWxDb21wTmFtZSkpIHtcbiAgICAgIGZpbmFsQ29tcE5hbWUgPSBgJHtwYXNjYWxQYWdlTmFtZX0ke2FjdHVhbENvbXBOYW1lfWA7XG4gICAgfVxuICAgIHVzZWROYW1lcy5hZGQoZmluYWxDb21wTmFtZSk7XG5cbiAgICB2aWV3c0VudHJpZXMucHVzaCh7XG4gICAgICAvLyBcdTVCQkZcdTRFM0JcdTk4NzVcdTRFMERcdTgwRkQgaW1wb3J0IFx1ODFFQVx1OEVBQlx1RkYwOGluZGV4LnV2dWUgLT4gVGFiVmlld3MgLT4gaW5kZXgudXZ1ZVx1RkYwOVx1RkYwQ1x1NjUzOVx1NzUzMVx1OTg3NVx1OTc2Mlx1NEYyMFx1NTE2NSBzbG90XHUzMDAyXG4gICAgICBpbXBvcnROYW1lOiBpc0hvc3RQYWdlID8gbnVsbCA6IGZpbmFsQ29tcE5hbWUsXG4gICAgICBpbXBvcnRQYXRoOiBgQC8ke2FjdHVhbFJlbFBhdGgucmVwbGFjZSgvXFxcXC9nLCAnLycpfWAsXG4gICAgICB2YXJpYW50czogZW50cnlWYXJpYW50c1xuICAgIH0pO1xuICB9XG5cbiAgLy8gXHU3NTFGXHU2MjEwIFRhYlZpZXdzLnV2dWUgXHU1MTg1XHU1QkI5XG4gIGNvbnN0IHRhcmdldEZpbGUgPSBvcHRpb25zLnRhcmdldEZpbGUgPz8gJ3NyYy90YWJiYXIvY29tcG9uZW50cy9UYWJWaWV3cy51dnVlJztcbiAgY29uc3QgdGFiVmlld3NGaWxlUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgdGFyZ2V0RmlsZSk7XG5cbiAgLy8gXHU2MzkyXHU1RThGXHU0RkREXHU2MzAxXHU3QTMzXHU1QjlBXHU2MDI3XG4gIGNvbnN0IHNvcnRlZEltcG9ydHMgPSB2aWV3c0VudHJpZXNcbiAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pbXBvcnROYW1lICE9IG51bGwpXG4gICAgLnNvcnQoKGEsIGIpID0+IChhLmltcG9ydE5hbWUgPz8gJycpLmxvY2FsZUNvbXBhcmUoYi5pbXBvcnROYW1lID8/ICcnKSk7XG4gIGNvbnN0IGltcG9ydExpbmVzID0gc29ydGVkSW1wb3J0c1xuICAgIC5tYXAoaXRlbSA9PiBgaW1wb3J0ICR7aXRlbS5pbXBvcnROYW1lfSBmcm9tICcke2l0ZW0uaW1wb3J0UGF0aH0nO2ApXG4gICAgLmpvaW4oJ1xcbicpO1xuXG4gIGZ1bmN0aW9uIHJlbmRlclRhYkNvbnRlbnRUYWcoaW5kZXg6IG51bWJlciwgaW1wb3J0TmFtZTogc3RyaW5nIHwgbnVsbCwgdjogVmlld0VudHJ5VmFyaWFudCk6IHN0cmluZyB7XG4gICAgbGV0IGF0dHJzID0gYCA6Y29udGVudC1pbmRleD1cIiR7aW5kZXh9XCJgO1xuICAgIGlmICh2LnRpdGxlKSB7XG4gICAgICBhdHRycyArPSBgIHRpdGxlPVwiJHt2LnRpdGxlLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKX1cImA7XG4gICAgfVxuICAgIGlmICh2LmVuYWJsZVB1bGxEb3duUmVmcmVzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhdHRycyArPSBgIDplbmFibGUtcHVsbC1kb3duLXJlZnJlc2g9XCIke3YuZW5hYmxlUHVsbERvd25SZWZyZXNofVwiYDtcbiAgICB9XG4gICAgaWYgKHYuaGlkZU5hdmJhcikge1xuICAgICAgYXR0cnMgKz0gYCA6aGlkZS1uYXZiYXI9XCJ0cnVlXCJgO1xuICAgIH1cbiAgICBpZiAodi5oaWRlU3RhdHVzQmFyKSB7XG4gICAgICBhdHRycyArPSBgIDpoaWRlLXN0YXR1cy1iYXI9XCJ0cnVlXCJgO1xuICAgIH1cbiAgICBhdHRycyArPSBgIDpzaG93LWJhY2s9XCIke3Yuc2hvd0JhY2t9XCJgO1xuICAgIGlmICh2LmN1c3RvbVBhZ2VDbGFzcykge1xuICAgICAgYXR0cnMgKz0gYCBjdXN0b20tcGFnZS1jbGFzcz1cIiR7di5jdXN0b21QYWdlQ2xhc3MucmVwbGFjZSgvXCIvZywgJyZxdW90OycpfVwiYDtcbiAgICB9XG4gICAgaWYgKHYuY3VzdG9tUGFnZVN0eWxlKSB7XG4gICAgICBhdHRycyArPSBgIGN1c3RvbS1wYWdlLXN0eWxlPVwiJHt2LmN1c3RvbVBhZ2VTdHlsZS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyl9XCJgO1xuICAgIH1cbiAgICBjb25zdCBjb250ZW50ID0gaW1wb3J0TmFtZSA9PSBudWxsXG4gICAgICA/ICcgICAgICA8c2xvdCBuYW1lPVwidGFiSG9zdFwiIC8+J1xuICAgICAgOiBgICAgICAgPCR7aW1wb3J0TmFtZX0gLz5gO1xuICAgIC8vIHYtaWYgXHU1RkM1XHU5ODdCXHU2NTNFXHU1NzI4IFRhYkNvbnRlbnQgXHU1OTE2XHU1QzQyXHVGRjFBXHU1RkFFXHU0RkUxXHU1QzBGXHU3QTBCXHU1RThGXHU3Njg0IHNsb3QgXHU1QjUwXHU3RUM0XHU0RUY2XHU0RjFBXHU1NzI4XHU3MjM2XHU2QTIxXHU2NzdGXHU5NjM2XHU2QkI1XHU2M0QwXHU1MjREXHU1QjlFXHU0RjhCXHU1MzE2XHVGRjBDXG4gICAgLy8gXHU0RUM1XHU5NzYwIFRhYkNvbnRlbnQgXHU1MTg1XHU5MEU4XHU3Njg0IHYtaWYgXHU2NUUwXHU2Q0Q1XHU5NjNCXHU2QjYyXHU2NzJBXHU2RkMwXHU2RDNCXHU5ODc1XHU5NzYyXHU3Njg0IHNldHVwIC8gb25Nb3VudGVkIFx1NjI2N1x1ODg0Q1x1MzAwMlxuICAgIHJldHVybiBgICAgIDxUYWJDb250ZW50IHYtaWY9XCJpc1RhYlJlbmRlcmVkKCR7aW5kZXh9KVwiJHthdHRyc30+XFxuJHtjb250ZW50fVxcbiAgICA8L1RhYkNvbnRlbnQ+YDtcbiAgfVxuXG4gIGNvbnN0IGNvbnRlbnRCbG9ja3MgPSB2aWV3c0VudHJpZXNcbiAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmVuZGVyZWRUYWdzID0gaXRlbS52YXJpYW50cy5tYXAodiA9PiAoe1xuICAgICAgICBjb25kaXRpb246IHYuY29uZGl0aW9uLFxuICAgICAgICB0YWc6IHJlbmRlclRhYkNvbnRlbnRUYWcoaW5kZXgsIGl0ZW0uaW1wb3J0TmFtZSwgdilcbiAgICAgIH0pKTtcblxuICAgICAgLy8gXHU1MjI0XHU2NUFEXHU2MjQwXHU2NzA5XHU1M0Q4XHU0RjUzXHU3Njg0IHRhZyBcdTY2MkZcdTU0MjZcdTVCOENcdTUxNjhcdTc2RjhcdTU0MENcbiAgICAgIGNvbnN0IHVuaXF1ZVRhZ3MgPSBuZXcgU2V0KHJlbmRlcmVkVGFncy5tYXAociA9PiByLnRhZykpO1xuICAgICAgaWYgKHVuaXF1ZVRhZ3Muc2l6ZSA8PSAxKSB7XG4gICAgICAgIHJldHVybiByZW5kZXJlZFRhZ3NbMF0udGFnO1xuICAgICAgfVxuXG4gICAgICAvLyBcdTVCNThcdTU3MjhcdTU5MUFcdTVFNzNcdTUzRjBcdTVERUVcdTVGMDJcdUZGMENcdTYzMDlcdTY3NjFcdTRFRjZcdThGOTNcdTUxRkEgPCEtLSAjaWZkZWYgLS0+XG4gICAgICByZXR1cm4gcmVuZGVyZWRUYWdzXG4gICAgICAgIC5tYXAoKHsgY29uZGl0aW9uLCB0YWcgfSkgPT4ge1xuICAgICAgICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBgICAgIDwhLS0gI2lmZGVmICR7Y29uZGl0aW9ufSAtLT5cXG4ke3RhZ31cXG4gICAgPCEtLSAjZW5kaWYgLS0+YDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRhZztcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJ1xcbicpO1xuICAgIH0pXG4gICAgLmpvaW4oJ1xcbicpO1xuXG4gIGNvbnN0IHRhYlZpZXdzQ29udGVudCA9IGA8dGVtcGxhdGU+XG4gIDx2aWV3IGNsYXNzPVwidGFiLXZpZXdzLWNvbnRhaW5lclwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBmbGV4OiAxOyBoZWlnaHQ6IDEwMCU7XCI+XG4ke2NvbnRlbnRCbG9ja3N9XG4gIDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInV0c1wiPlxuJHtpbXBvcnRMaW5lc31cbmltcG9ydCBUYWJDb250ZW50IGZyb20gJy4vVGFiQ29udGVudC51dnVlJztcbmltcG9ydCB7IHJlYWN0aXZlLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VUYWJiYXIgfSBmcm9tICdAL3NyYy90YWJiYXIvaW5kZXgudXRzJztcblxuY29uc3QgeyBjdXJJZHggfSA9IHVzZVRhYmJhcigpO1xuY29uc3QgcmVuZGVyZWRUYWJzOiBBcnJheTxib29sZWFuPiA9IHJlYWN0aXZlKFske3ZpZXdzRW50cmllcy5tYXAoKCkgPT4gJ2ZhbHNlJykuam9pbignLCAnKX1dKTtcblxuaWYgKGN1cklkeC52YWx1ZSA+PSAwICYmIGN1cklkeC52YWx1ZSA8IHJlbmRlcmVkVGFicy5sZW5ndGgpIHtcbiAgcmVuZGVyZWRUYWJzW2N1cklkeC52YWx1ZV0gPSB0cnVlO1xufVxuXG53YXRjaChjdXJJZHgsIChuZXh0SWR4OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgaWYgKG5leHRJZHggPj0gMCAmJiBuZXh0SWR4IDwgcmVuZGVyZWRUYWJzLmxlbmd0aCkge1xuICAgIHJlbmRlcmVkVGFic1tuZXh0SWR4XSA9IHRydWU7XG4gIH1cbn0pO1xuXG4vKiogXHU5OTk2XHU2QjIxXHU2RkMwXHU2RDNCXHU1NDBFXHU1RTM4XHU5QTdCXHU0RkREXHU2RDNCXHVGRjFCXHU2NzJBXHU4QkJGXHU5NUVFXHU4RkM3XHU3Njg0IFRhYiBcdTRFMERcdTUyMUJcdTVFRkFcdTk4NzVcdTk3NjJcdTdFQzRcdTRFRjYgKi9cbmZ1bmN0aW9uIGlzVGFiUmVuZGVyZWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gcmVuZGVyZWRUYWJzW2luZGV4XSA9PSB0cnVlO1xufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi50YWItdmlld3MtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG59XG48L3N0eWxlPlxuYDtcblxuICBsZXQgZXhpc3RpbmdDb250ZW50ID0gJyc7XG4gIGlmIChmcy5leGlzdHNTeW5jKHRhYlZpZXdzRmlsZVBhdGgpKSB7XG4gICAgZXhpc3RpbmdDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKHRhYlZpZXdzRmlsZVBhdGgsICd1dGYtOCcpO1xuICB9XG5cbiAgLy8gXHU0RUM1XHU1NzI4XHU2NTg3XHU0RUY2XHU0RTBEXHU1QjU4XHU1NzI4XHU2MjE2XHU1MTg1XHU1QkI5XHU1M0Q4XHU1MzE2XHU2NUY2XHU1MTk5XHU1MTY1XHVGRjBDXHU5MDdGXHU1MTREXHU2NUUwXHU4QzEzXHU4OUU2XHU1M0QxXHU3MEVEXHU5MUNEXHU4RjdEXG4gIGlmIChleGlzdGluZ0NvbnRlbnQgIT09IHRhYlZpZXdzQ29udGVudCkge1xuICAgIGNvbnN0IHBhcmVudERpciA9IHBhdGguZGlybmFtZSh0YWJWaWV3c0ZpbGVQYXRoKTtcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMocGFyZW50RGlyKSkge1xuICAgICAgZnMubWtkaXJTeW5jKHBhcmVudERpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgfVxuICAgIGZzLndyaXRlRmlsZVN5bmModGFiVmlld3NGaWxlUGF0aCwgdGFiVmlld3NDb250ZW50LCAndXRmLTgnKTtcbiAgICBjb25zb2xlLmxvZygnW3RhYmJhci12aWV3c10gXHU4MUVBXHU1MkE4XHU1NDBDXHU2QjY1XHU2NkY0XHU2NUIwIFRhYlZpZXdzLnV2dWUgXHU4QzAzXHU1RUE2XHU3RUM0XHU0RUY2Jyk7XG4gIH1cbn1cblxuLyoqXG4gKiBcdTY4MzlcdTYzNkUgY29uZmlnLnV0cyBcdTgxRUFcdTUyQThcdTU0MENcdTZCNjUgVGFiVmlld3MudXZ1ZSBcdThDMDNcdTVFQTZcdTdFQzRcdTRFRjZcdTc2ODRcdTYzRDJcdTRFRjZcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFiYmFyVmlld3NQbHVnaW4ob3B0aW9uczogVGFiYmFyVmlld3NPcHRpb25zID0ge30pOiBQbHVnaW4ge1xuICBsZXQgcHJvamVjdFJvb3QgPSAnJztcbiAgbGV0IGRlYm91bmNlVGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgbnVsbCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkR2VuZXJhdGUoKSB7XG4gICAgaWYgKGRlYm91bmNlVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dChkZWJvdW5jZVRpbWVyKTtcbiAgICB9XG4gICAgZGVib3VuY2VUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgbW9kZSA9IGdldFRhYmJhck1vZGUocHJvamVjdFJvb3QpO1xuICAgICAgaWYgKG1vZGUgIT09ICcwJyAmJiBtb2RlICE9PSAnTk9fVEFCQkFSJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGdlbmVyYXRlVGFiVmlld3MocHJvamVjdFJvb3QsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignW3RhYmJhci12aWV3c10gXHU5MUNEXHU2NUIwXHU3NTFGXHU2MjEwIFRhYlZpZXdzIFx1NTkzMVx1OEQyNTonLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICd2aXRlLXBsdWdpbi10YWJiYXItdmlld3MnLFxuICAgIGVuZm9yY2U6ICdwcmUnLFxuICAgIGNvbmZpZ1Jlc29sdmVkKGNvbmZpZykge1xuICAgICAgcHJvamVjdFJvb3QgPSBjb25maWcucm9vdDtcbiAgICAgIGlmIChvcHRpb25zLmVuYWJsZWQgPT09IGZhbHNlIHx8IG9wdGlvbnMuYXV0b0NyZWF0ZVBhZ2UgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1vZGUgPSBnZXRUYWJiYXJNb2RlKHByb2plY3RSb290KTtcbiAgICAgIGlmIChtb2RlICE9PSAnMCcgJiYgbW9kZSAhPT0gJ05PX1RBQkJBUicpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBcdTVGQzVcdTk4N0JcdTY1RTlcdTRFOEUgdW5pLXBhZ2VzIFx1NzY4NCBjb25maWdSZXNvbHZlZCBcdTYyNkJcdTYzQ0ZcdTYyNjdcdTg4NENcdUZGMENcdTYyNERcdTgwRkRcdThCQTlcdTY1QjBcdTk4NzVcdTk3NjJcdThGREJcdTUxNjVcdTU0MENcdTRFMDBcdThGNkUgcGFnZXMuanNvblx1MzAwMlxuICAgICAgICAgIHNjYWZmb2xkTWlzc2luZ1RhYlBhZ2VzKHByb2plY3RSb290LCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1t0YWJiYXItdmlld3NdIFx1ODFFQVx1NTJBOFx1ODg2NVx1NUVGQSBUYWIgXHU5ODc1XHU5NzYyXHU1OTMxXHU4RDI1OicsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBidWlsZFN0YXJ0KCkge1xuICAgICAgaWYgKG9wdGlvbnMuZW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbW9kZSA9IGdldFRhYmJhck1vZGUocHJvamVjdFJvb3QpO1xuICAgICAgaWYgKG1vZGUgIT09ICcwJyAmJiBtb2RlICE9PSAnTk9fVEFCQkFSJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGdlbmVyYXRlVGFiVmlld3MocHJvamVjdFJvb3QsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignW3RhYmJhci12aWV3c10gXHU3NTFGXHU2MjEwIFRhYlZpZXdzIFx1ODExQVx1NjI0Qlx1NjdCNlx1NTkzMVx1OEQyNTonLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY29uZmlndXJlU2VydmVyKHNlcnZlcikge1xuICAgICAgaWYgKG9wdGlvbnMuZW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY29uZmlnRmlsZSA9IG9wdGlvbnMuY29uZmlnRmlsZSA/PyAnc3JjL3RhYmJhci9jb25maWcudXRzJztcbiAgICAgIGNvbnN0IGNvbmZpZ0Fic1BhdGggPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsIGNvbmZpZ0ZpbGUpO1xuXG4gICAgICBzZXJ2ZXIud2F0Y2hlci5vbignY2hhbmdlJywgKGZpbGUpID0+IHtcbiAgICAgICAgY29uc3Qgbm9ybSA9IHBhdGgucmVzb2x2ZShmaWxlKTtcbiAgICAgICAgLy8gMS4gY29uZmlnLnV0cyBcdTY1MzlcdTUyQThcdTg5RTZcdTUzRDFcbiAgICAgICAgaWYgKG5vcm0gPT09IGNvbmZpZ0Fic1BhdGgpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2NhZmZvbGRNaXNzaW5nVGFiUGFnZXMocHJvamVjdFJvb3QsIG9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignW3RhYmJhci12aWV3c10gXHU4MUVBXHU1MkE4XHU4ODY1XHU1RUZBIFRhYiBcdTk4NzVcdTk3NjJcdTU5MzFcdThEMjU6JywgZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlYm91bmNlZEdlbmVyYXRlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIDIuIFRhYkJhciBcdTVCRjlcdTVFOTRcdTc2ODRcdTRFM0JcdTk4NzVcdTk3NjJcdTY1ODdcdTRFRjZcdUZGMDhcdTU5ODIgaW5kZXgudXZ1ZSwgYmFzaWMudXZ1ZSBcdTdCNDlcdUZGMDlcdTY1MzlcdTUyQThcdTg5RTZcdTUzRDFcbiAgICAgICAgaWYgKHdhdGNoZWRUYWJQYWdlcy5oYXMobm9ybSkpIHtcbiAgICAgICAgICBkZWJvdW5jZWRHZW5lcmF0ZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLiBwYWdlcy5qc29uIFx1NjUzOVx1NTJBOFx1ODlFNlx1NTNEMVxuICAgICAgICBjb25zdCBwYWdlc0pzb25QYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCAncGFnZXMuanNvbicpO1xuICAgICAgICBpZiAobm9ybSA9PT0gcGFnZXNKc29uUGF0aCkge1xuICAgICAgICAgIGRlYm91bmNlZEdlbmVyYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzZXJ2ZXIud2F0Y2hlci5vbigndW5saW5rJywgKGZpbGUpID0+IHtcbiAgICAgICAgY29uc3Qgbm9ybSA9IHBhdGgucmVzb2x2ZShmaWxlKTtcbiAgICAgICAgaWYgKCF3YXRjaGVkVGFiUGFnZXMuaGFzKG5vcm0pKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgc2NhZmZvbGRNaXNzaW5nVGFiUGFnZXMocHJvamVjdFJvb3QsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignW3RhYmJhci12aWV3c10gXHU4MUVBXHU1MkE4XHU4ODY1XHU1RUZBIFRhYiBcdTk4NzVcdTk3NjJcdTU5MzFcdThEMjU6JywgZSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVib3VuY2VkR2VuZXJhdGUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3BhZ2VzLW1ldGEtY2FjaGUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnMvcGFnZXMtbWV0YS1jYWNoZS50c1wiO2ltcG9ydCBmcyBmcm9tICdub2RlOmZzJztcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5cbi8qKlxuICogXHU5ODc1XHU5NzYyXHU3NTFGXHU2MjEwXHU3RUQzXHU2NzlDXHU3Njg0XHU2Nzg0XHU1RUZBXHU2NzFGXHU1RkVCXHU3MTY3XHUzMDAyXG4gKlxuICogXHU2QTIxXHU1RjBGIDQgXHU0RjFBXHU2MjhBIFRhYiBcdTk4NzVcdTRFQ0UgcGFnZXMuanNvbiBcdTRFMkRcdTc5RkJcdTk2NjRcdUZGMENcdTRGNDZcdThGRDlcdTRFOUJcdTk4NzVcdTk3NjJcdTc2ODQgZGVmaW5lUGFnZSBcdTU5MUFcdTVFNzNcdTUzRjBcdTkxNERcdTdGNkVcdTRFQ0RcdTk3MDBcdTRGOUJcbiAqIFRhYlZpZXdzIFx1NzUxRlx1NjIxMFx1NTY2OFx1OEJGQlx1NTNENiBuYXZiYXIgXHU2ODA3XHU5ODk4XHU3QjQ5XHU1MTQzXHU2NTcwXHU2MzZFXHUzMDAyXHU1OTFBXHU0RTJBXHU3QUVGXHU1M0VGXHU4MEZEXHU1NDBDXHU2NUY2XHU4RkQwXHU4ODRDXHU3MkVDXHU3QUNCIGRldiBcdThGREJcdTdBMEJcdUZGMENcdTU2RTBcdTZCNjRcdTVGRUJcdTcxNjdcbiAqIFx1NTQwQ1x1NjVGNlx1NTE5OVx1NTE2NVx1OEZEQlx1N0EwQlx1N0VBN1x1NTE2OFx1NUM0MFx1NjlGRFx1NTQ4Q1x1OTg3OVx1NzZFRVx1N0YxM1x1NUI1OFx1NjU4N1x1NEVGNlx1RkYxQlx1NEVGQlx1NEUwMFx1OEZEQlx1N0EwQlx1OTFDRFx1NjVCMFx1NzUxRlx1NjIxMCBUYWJWaWV3cyBcdTY1RjZcdTkwRkRcdTgwRkRcdTVGOTdcdTUyMzBcdTVCOENcdTY1NzRcdTUzRDhcdTRGNTNcdTMwMDJcbiAqL1xuXG5leHBvcnQgdHlwZSBQYWdlc01ldGFQYWdlID0gUmVjb3JkPHN0cmluZywgYW55PjtcblxuZXhwb3J0IHR5cGUgUGFnZXNNZXRhU25hcHNob3QgPSB7XG4gIHBsYXRmb3JtOiBzdHJpbmc7XG4gIHBhZ2VzOiBQYWdlc01ldGFQYWdlW107XG4gIHN1YlBhY2thZ2VzOiBBcnJheTx7IHJvb3Q6IHN0cmluZzsgcGFnZXM6IFBhZ2VzTWV0YVBhZ2VbXSB9Pjtcbn07XG5cbnR5cGUgUGFnZXNNZXRhR2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgJiB7XG4gIF9fVU5JQkVTVFhfUEFHRVNfTUVUQV9TVEFURV9fPzoge1xuICAgIHJvb3Q6IHN0cmluZztcbiAgICB2YWx1ZTogUGFnZXNNZXRhU25hcHNob3Q7XG4gIH0gfCBudWxsO1xufTtcblxuY29uc3QgQ0FDSEVfUkVMQVRJVkVfUEFUSCA9ICd1bnBhY2thZ2UvY2FjaGUvdW5pYmVzdHgtcGFnZXMtbWV0YS5qc29uJztcblxuLy8gVml0ZSBcdTkxNERcdTdGNkVcdTRFMEVcdTRFMERcdTU0MENcdTY3ODRcdTVFRkFcdTk2MzZcdTZCQjVcdTUzRUZcdTgwRkRcdTYyRkZcdTUyMzBcdTRFMERcdTU0MENcdTc2ODRcdTZBMjFcdTU3NTdcdTVCOUVcdTRGOEJcdUZGMUJcdThGREJcdTdBMEJcdTUxODVcdTdFREZcdTRFMDBcdTkwMUFcdThGQzdcdTUxNjhcdTVDNDBcdTY5RkRcdTUxNzFcdTRFQUJcdTMwMDJcbmNvbnN0IHBhZ2VzTWV0YUdsb2JhbCA9IGdsb2JhbFRoaXMgYXMgUGFnZXNNZXRhR2xvYmFsO1xuXG5mdW5jdGlvbiBub3JtYWxpemVSb290KHByb2plY3RSb290OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXNvbHZlKHByb2plY3RSb290KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2FjaGVQYXRoKHByb2plY3RSb290OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCBDQUNIRV9SRUxBVElWRV9QQVRIKTtcbn1cblxuZnVuY3Rpb24gaXNTbmFwc2hvdCh2YWx1ZTogYW55KTogdmFsdWUgaXMgUGFnZXNNZXRhU25hcHNob3Qge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbFxuICAgICYmIEFycmF5LmlzQXJyYXkodmFsdWUucGFnZXMpXG4gICAgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZS5zdWJQYWNrYWdlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQYWdlc01ldGFTbmFwc2hvdCh2YWx1ZTogUGFnZXNNZXRhU25hcHNob3QsIHByb2plY3RSb290OiBzdHJpbmcgPSBwcm9jZXNzLmN3ZCgpKTogdm9pZCB7XG4gIGNvbnN0IHJvb3QgPSBub3JtYWxpemVSb290KHByb2plY3RSb290KTtcbiAgcGFnZXNNZXRhR2xvYmFsLl9fVU5JQkVTVFhfUEFHRVNfTUVUQV9TVEFURV9fID0geyByb290LCB2YWx1ZSB9O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgY2FjaGVQYXRoID0gZ2V0Q2FjaGVQYXRoKHJvb3QpO1xuICAgIGZzLm1rZGlyU3luYyhwYXRoLmRpcm5hbWUoY2FjaGVQYXRoKSwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgY29uc3QgdGVtcFBhdGggPSBgJHtjYWNoZVBhdGh9LiR7cHJvY2Vzcy5waWR9LnRtcGA7XG4gICAgZnMud3JpdGVGaWxlU3luYyh0ZW1wUGF0aCwgSlNPTi5zdHJpbmdpZnkodmFsdWUpLCAndXRmLTgnKTtcbiAgICBmcy5yZW5hbWVTeW5jKHRlbXBQYXRoLCBjYWNoZVBhdGgpO1xuICB9XG4gIGNhdGNoIHt9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYWdlc01ldGFTbmFwc2hvdChwcm9qZWN0Um9vdDogc3RyaW5nID0gcHJvY2Vzcy5jd2QoKSk6IFBhZ2VzTWV0YVNuYXBzaG90IHwgbnVsbCB7XG4gIGNvbnN0IHJvb3QgPSBub3JtYWxpemVSb290KHByb2plY3RSb290KTtcbiAgY29uc3Qgc3RhdGUgPSBwYWdlc01ldGFHbG9iYWwuX19VTklCRVNUWF9QQUdFU19NRVRBX1NUQVRFX18gPz8gbnVsbDtcbiAgaWYgKHN0YXRlICE9IG51bGwgJiYgc3RhdGUucm9vdCA9PSByb290KSB7XG4gICAgcmV0dXJuIHN0YXRlLnZhbHVlO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjYWNoZVBhdGggPSBnZXRDYWNoZVBhdGgocm9vdCk7XG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKGNhY2hlUGF0aCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhjYWNoZVBhdGgsICd1dGYtOCcpKTtcbiAgICBpZiAoIWlzU25hcHNob3QocGFyc2VkKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHBhZ2VzTWV0YUdsb2JhbC5fX1VOSUJFU1RYX1BBR0VTX01FVEFfU1RBVEVfXyA9IHsgcm9vdCwgdmFsdWU6IHBhcnNlZCB9O1xuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cbiAgY2F0Y2gge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy92aXRlLXBsdWdpbi11bmktcGFnZXMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnMvdml0ZS1wbHVnaW4tdW5pLXBhZ2VzLnRzXCI7aW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5pbXBvcnQgdm0gZnJvbSAnbm9kZTp2bSc7XG5pbXBvcnQgeyBjcmVhdGVSZXF1aXJlIH0gZnJvbSAnbm9kZTptb2R1bGUnO1xuaW1wb3J0IEpTT041IGZyb20gJ2pzb241JztcbmltcG9ydCB7XG4gIHBhcnNlIGFzIGNqUGFyc2UsXG4gIHN0cmluZ2lmeSBhcyBjalN0cmluZ2lmeSxcbiAgQ29tbWVudEFycmF5XG59IGZyb20gJ2NvbW1lbnQtanNvbic7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcbmltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBsb2FkRW52IH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBsb2FkQWxsUGxhdGZvcm1QYWdlVmFyaWFudHMsIGxvYWRQbGF0Zm9ybVBhZ2VzSnNvbiB9IGZyb20gJy4vcGFnZXMtanNvbi11dGlsJztcbmltcG9ydCB7IHNldFBhZ2VzTWV0YVNuYXBzaG90IH0gZnJvbSAnLi9wYWdlcy1tZXRhLWNhY2hlJztcblxuLyoqXG4gKiB1bmktcGFnZXMgXHU2ODM4XHU1RkMzXHU2M0QyXHU0RUY2XHVGRjFBXHU2MjZCXHU2M0NGIHNyYy9wYWdlcyBcdTRFMEUgc3JjL3N1YiBcdTRFMEJcdTc2ODQgLnV2dWVcdUZGMENcdTg5RTNcdTY3OTBcdTk4NzVcdTk3NjJcdTUxODVcdTc2ODRcbiAqIGA8cm91dGU+YCAvIGBkZWZpbmVQYWdlKHsuLi59KWAgXHU1OEYwXHU2NjBFXHVGRjBDXHU0RTBFIHBhZ2VzLmNvbmZpZy5qc29uIFx1NTQwOFx1NUU3Nlx1RkYwQ1x1NzUxRlx1NjIxMCBwYWdlcy5qc29uXHUzMDAyXG4gKlxuICogXHU2NzJDXHU2NTg3XHU0RUY2KipcdTgxRUFcdTUzMDVcdTU0MkIqKlx1RkYxQVx1OTg3NVx1OTc2Mlx1NjI2Qlx1NjNDRlx1MzAwMVx1NUI4Rlx1ODlFM1x1Njc5MFx1MzAwMS5lbnYgXHU4QkZCXHU1M0Q2XHUzMDAxXHU4NDNEXHU3NkQ4XHU5MEZEXHU1NzI4XHU4RkQ5XHU5MUNDXHVGRjFCXHU0RUM1XHU1OTBEXHU3NTI4XHU2NUUwXHU1MjZGXHU0RjVDXHU3NTI4XHU3Njg0XHU4OUUzXHU2NzkwXHU1REU1XHU1MTc3XHU0RTBFXHU1MTQzXHU2NTcwXHU2MzZFXHU1RkVCXHU3MTY3XHU3RjEzXHU1QjU4XHUzMDAyXG4gKlxuICogIyMgXHU0RTBFXHU0RTA5XHU0RTJBXHU1MzZCXHU2NjFGXHU2M0QyXHU0RUY2XHVGRjA4c2FuZGJveCAvIHRhYmJhciAvIHJvdXRlLXRhYmxlXHVGRjA5XHU3Njg0XHU1MTczXHU3Q0ZCXG4gKlxuICogXHU1QjgzXHU0RUVDXHU2NjJGXHU1NDA0XHU4MUVBXHU3MkVDXHU3QUNCXHU3Njg0IFZpdGUgXHU2M0QyXHU0RUY2XHVGRjA4XHU1NDA0XHU4MUVBXHU0RTAwXHU0RTJBXHU2NTg3XHU0RUY2XHUzMDAxXHU1NDA0XHU4MUVBXHU1NzI4IHZpdGUuY29uZmlnLnRzIFx1NkNFOFx1NTE4Q1x1RkYwOVx1RkYwQ1x1NEY0NioqXHU0RTBEXHU2NjJGKiogVml0ZSBcdTc1MUZcdTU0N0RcdTU0NjhcdTY3MUZcbiAqIFx1NzJFQ1x1N0FDQlx1NzY4NFx1RkYxQVx1NUI4M1x1NEVFQ1x1NUZDNVx1OTg3Qlx1NTcyOCoqXHU1NDBDXHU0RTAwXHU2QjIxXHU3NTFGXHU2MjEwIHBhc3MqKiBcdTUxODVcdTMwMDFcdTYzMDlcdTU2RkFcdTVCOUFcdTk4N0FcdTVFOEZcdTMwMDFcdTVCRjlcdTU0MENcdTRFMDBcdTRFRkRcdTUzRUZcdTUzRDhcdTY3ODRcdTVFRkFcdTcyQjZcdTYwMDFcdTUwNUFcdTUzRDhcdTYzNjJcdTMwMDJcdTU2RTBcdTZCNjRcdTY3MkNcdTYzRDJcdTRFRjZcdTU3MjhcbiAqIGBjb25maWdSZXNvbHZlZGAgXHU2NUY2XHU0RUNFIGBjb25maWcucGx1Z2luc2AgXHU5MUNDXHU1M0QxXHU3M0IwXHU2MjQwXHU2NzA5XHU2NDNBXHU1RTI2IGB1bmlQYWdlc1N0YWdlYCBcdTVDNUVcdTYwMjdcdTc2ODRcdTYzRDJcdTRFRjZcdUZGMENcdTYzMDkgYG9yZGVyYCBcdTUzNDdcdTVFOEZcdTY1MzZcdTk2QzZcdUZGMENcbiAqIFx1NUU3Nlx1NTcyOFx1NkJDRlx1NkIyMVx1NzUxRlx1NjIxMFx1OTFDQ1x1NEY5RFx1NkIyMVx1OEZEMFx1ODg0QyBcdTIwMTRcdTIwMTQgXHU0RThFXHU2NjJGXHUzMDBDXHU2MDcwXHU1OTdEXHU2MjY3XHU4ODRDXHU0RTAwXHU2QjIxXHUzMDAxXHU5ODdBXHU1RThGXHU1NkZBXHU1QjlBXHUzMDAxcm91dGUtdGFibGUgXHU0RTAwXHU1QjlBXHU3NzBCXHU1MjMwXHU2NzAwXHU3RUM4XHU3RUQzXHU2NzlDXHUzMDBEXHU3RUQzXHU2Nzg0XHU2MDI3XHU2MjEwXHU3QUNCXHVGRjBDXG4gKiBcdTRFMERcdTRGOURcdThENTZcdTRFRkJcdTRGNTUgVml0ZSBcdTY1RjZcdTVFOEZcdTUwNDdcdThCQkVcdTMwMDJcdTUzNkJcdTY2MUZcdTUzRUFcdTk3MDBcdTU3MjhcdTgxRUFcdTVERjFcdTc2ODRcdTYzRDJcdTRFRjZcdTVCRjlcdThDNjFcdTRFMEFcdTYzMDJcdTRFMDBcdTRFMkEgYHVuaVBhZ2VzU3RhZ2VgIFx1NUI1N1x1NkJCNVx1NTM3M1x1NTNFRlx1ODhBQlx1NTNEMVx1NzNCMFx1MzAwMlxuICovXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gXHU3QzdCXHU1NzhCXHVGRjA4XHU4MUVBXHU1MzA1XHU1NDJCXHVGRjFCXHU1MzZCXHU2NjFGXHU1NDA0XHU4MUVBXHU1QjlBXHU0RTQ5XHU3RUQzXHU2Nzg0XHU3QjQ5XHU0RUY3XHU3Njg0XHU3QzdCXHU1NzhCXHVGRjBDXHU2NUUwXHU5NzAwIGltcG9ydFx1RkYwOVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIFBhZ2VDb25maWcgPSB7XG4gIHBhdGg6IHN0cmluZztcbiAgc3R5bGU/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59O1xuXG5leHBvcnQgdHlwZSBTdWJQYWNrYWdlQ29uZmlnID0ge1xuICByb290OiBzdHJpbmc7XG4gIHBhZ2VzOiBQYWdlQ29uZmlnW107XG59O1xuXG5leHBvcnQgdHlwZSBQbGF0Zm9ybVZhcmlhbnQ8UD4gPSB7XG4gIHBheWxvYWQ6IFA7XG4gIHZhbHVlU3RyOiBzdHJpbmc7XG4gIHBsYXRmb3Jtczogc3RyaW5nW10gfCBudWxsO1xuICBwbGF0Zm9ybVN0cjogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgTXVsdGlQbGF0Zm9ybUl0ZW08VCBleHRlbmRzIG9iamVjdD4gPSBQbGF0Zm9ybVZhcmlhbnQ8VD4gJiB7XG4gIHBhc3N0aHJvdWdoPzogeyBiZWZvcmU6IGFueVtdOyBhZnRlcjogYW55W10gfTtcbn07XG5cbmV4cG9ydCB0eXBlIE1lcmdlZFBsYXRmb3JtSXRlbXMgPSB7XG4gIGl0ZW1zOiBhbnk7XG4gIHBsYXRmb3JtVW5pb246IHN0cmluZ1tdO1xuICBvd25pbmdQbGF0Zm9ybXM6IHN0cmluZ1tdO1xufTtcblxuZXhwb3J0IHR5cGUgQmFzZUNvbmZpZyA9IHtcbiAgaG9tZVBhZ2U/OiBzdHJpbmc7XG4gIHBhZ2VzPzogUGFnZUNvbmZpZ1tdO1xuICBzdWJQYWNrYWdlcz86IFN1YlBhY2thZ2VDb25maWdbXTtcbiAgZ2xvYmFsU3R5bGU/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICB0YWJCYXI/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICBlYXN5Y29tPzogUmVjb3JkPHN0cmluZywgYW55PjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufTtcblxuZXhwb3J0IHR5cGUgUGFnZXNKc29uT3V0cHV0ID0ge1xuICBwYWdlczogUGFnZUNvbmZpZ1tdO1xuICBzdWJQYWNrYWdlcz86IFN1YlBhY2thZ2VDb25maWdbXTtcbiAgdGFiQmFyPzogUmVjb3JkPHN0cmluZywgYW55PjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufTtcblxuZXhwb3J0IHR5cGUgVW5pUGFnZXNDb250ZXh0Rm4gPSAoYmFzZUNvbnRleHQ6IFJlY29yZDxzdHJpbmcsIGFueT4pID0+IFJlY29yZDxzdHJpbmcsIGFueT47XG5leHBvcnQgdHlwZSBVbmlQYWdlc1VzZXJDb250ZXh0ID0gUmVjb3JkPHN0cmluZywgYW55PiB8IFVuaVBhZ2VzQ29udGV4dEZuO1xuXG5leHBvcnQgdHlwZSBVbmlQYWdlc09wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBcdTY2MkZcdTU0MjZcdTU0MkZcdTc1MjhcdTYzRDJcdTRFRjZcdTYyNkJcdTYzQ0ZcdTRFMEUgcGFnZXMuanNvbiBcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBcdTYwM0JcdTVGMDBcdTUxNzNcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAZGVzY3JpcHRpb24gXHU4QkJFXHU0RTNBIGZhbHNlIFx1NjVGNlx1NUI4Q1x1NTE2OFx1Nzk4MVx1NzUyOFx1ODFFQVx1NTJBOFx1NjI2Qlx1NjNDRlx1MzAwMVx1OTg3NVx1OTc2Mlx1OERFRlx1NzUzMVx1NzUxRlx1NjIxMFx1NEUwRSB3YXRjaGVyIFx1NzZEMVx1NTQyQ1x1RkYwQ1x1NEZERFx1NzU1OVx1NUYwMFx1NTNEMVx1ODAwNVx1NUI4Q1x1NTE2OFx1NjI0Qlx1NTJBOFx1N0VGNFx1NjJBNCBwYWdlcy5qc29uIFx1NzY4NFx1ODBGRFx1NTI5QlxuICAgKi9cbiAgZW5hYmxlZD86IGJvb2xlYW47XG4gIC8qKiBcdTRFM0JcdTUzMDVcdTk4NzVcdTk3NjJcdTYyNkJcdTYzQ0ZcdTc2RUVcdTVGNTVcdUZGMENcdTlFRDhcdThCQTQgJ3NyYy9wYWdlcycgKi9cbiAgZGlyPzogc3RyaW5nO1xuICAvKiogXHU1MjA2XHU1MzA1XHU2MjZCXHU2M0NGXHU3NkVFXHU1RjU1XHU1MjE3XHU4ODY4XHVGRjBDXHU1OTgyIFsnc3JjL3N1YiddXHVGRjBDXHU0RTBEXHU4MEZEXHU2NjJGXHU0RTNCXHU1MzA1IGRpciBcdTc2ODRcdTVCNTBcdTc2RUVcdTVGNTUgKi9cbiAgc3ViUGFja2FnZXM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIFx1NTIwNlx1NTMwNVx1NzUxRlx1NjIxMFx1N0I1Nlx1NzU2NVx1NkEyMVx1NUYwRlx1RkYxQVxuICAgKiAtICdzdWJkaXJzJ1x1RkYwOFx1OUVEOFx1OEJBNFx1NjNBOFx1ODM1MFx1RkYwOVx1RkYxQVx1NUMwNiBzdWJQYWNrYWdlcyBcdTkxQ0NcdTc2ODRcdTZCQ0ZcdTRFMkFcdTc2RUVcdTVGNTVcdTRFMEJcdTc2ODRcdTZCQ0ZcdTRFMDBcdTRFMkFcdTRFMDBcdTdFQTdcdTVCNTBcdTc2RUVcdTVGNTVcdTgxRUFcdTUyQThcdTRGNUNcdTRFM0FcdTcyRUNcdTdBQ0JcdTUyMDZcdTUzMDVcdUZGMDhcdTRGOEJcdTU5ODIgcm9vdDogXCJzcmMvc3ViL2F1dGhcIlx1RkYwOVx1RkYwQ1x1NUY3Qlx1NUU5NVx1OTA3Rlx1NTE0RFx1NUZBRVx1NEZFMVx1N0I0OVx1NUMwRlx1N0EwQlx1NUU4Rlx1NTM1NVx1NEUyQVx1NTIwNlx1NTMwNVx1OEQ4NSAyTUIgXHU5NjUwXHU1MjM2XG4gICAqIC0gJ3Jvb3QnXHVGRjFBXHU2MjhBIHN1YlBhY2thZ2VzIFx1OTFDQ1x1NzY4NFx1NkJDRlx1NEUyQVx1NzZFRVx1NUY1NVx1NjU3NFx1NEY1M1x1NEY1Q1x1NEUzQVx1NEUwMFx1NEUyQVx1NTM1NVx1NEUwMFx1NTkyN1x1NTIwNlx1NTMwNVx1RkYwOFx1NEY4Qlx1NTk4MiByb290OiBcInNyYy9zdWJcIlx1RkYwOVxuICAgKiBAZGVmYXVsdCAnc3ViZGlycydcbiAgICovXG4gIHN1YlBhY2thZ2VNb2RlPzogJ3Jvb3QnIHwgJ3N1YmRpcnMnO1xuICAvKiogXHU2MzkyXHU5NjY0XHU3Njg0IGdsb2IgXHU2QTIxXHU1RjBGXHVGRjBDXHU5RUQ4XHU4QkE0XHU0RjFBXHU2MzkyXHU5NjY0IGNvbXBvbmVudHMgXHU0RTBFIHZpZXdzIFx1NzZFRVx1NUY1NSAqL1xuICBleGNsdWRlPzogc3RyaW5nW107XG4gIC8qKiBcdThGOTNcdTUxRkFcdTc2ODQgcGFnZXMuanNvbiBcdThERUZcdTVGODRcdUZGMENcdTlFRDhcdThCQTRcdTk4NzlcdTc2RUVcdTY4MzlcdTc2RUVcdTVGNTUgKi9cbiAgb3V0RmlsZT86IHN0cmluZztcbiAgLyoqIFx1NTdGQVx1Nzg0MFx1OTE0RFx1N0Y2RVx1NjU4N1x1NEVGNlx1OERFRlx1NUY4NFx1RkYwQ1x1OUVEOFx1OEJBNCAncGFnZXMuY29uZmlnLmpzb24nICovXG4gIGNvbmZpZ0ZpbGU/OiBzdHJpbmc7XG4gIC8qKiBcdTk5OTZcdTk4NzVcdThERUZcdTVGODQgKi9cbiAgaG9tZVBhZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBcdTgxRUFcdTVCOUFcdTRFNDlcdTYyNjlcdTVDNTVcdTZDRThcdTUxNjVcdTUyMzAgZGVmaW5lUGFnZSgob3B0aW9ucykgPT4gLi4uKSBcdTVCOEZcdTZDOTlcdTdCQjFcdTczQUZcdTU4ODNcdTRFMkRcdTc2ODRcdTRFMEFcdTRFMEJcdTY1ODdcdTVCRjlcdThDNjFcdTYyMTZcdTc1MUZcdTYyMTBcdTUxRkRcdTY1NzBcbiAgICogXHU2NTJGXHU2MzAxXHU5NzU5XHU2MDAxXHU1QkY5XHU4QzYxXHVGRjBDXHU2MjE2XHU2M0E1XHU2NTM2XHU1N0ZBXHU3ODQwXHU0RTBBXHU0RTBCXHU2NTg3ICh7IHBsYXRmb3JtLCBlbnYsIGRlZmluZSwgLi4uIH0pIFx1OEZENFx1NTZERVx1NjI2OVx1NUM1NVx1NUJGOVx1OEM2MVx1NzY4NFx1NTFGRFx1NjU3MFxuICAgKi9cbiAgY29udGV4dD86IFVuaVBhZ2VzVXNlckNvbnRleHQ7XG59O1xuXG5leHBvcnQgdHlwZSBSZXNvbHZlZFVuaVBhZ2VzT3B0aW9ucyA9IHtcbiAgZW5hYmxlZDogYm9vbGVhbjtcbiAgZGlyOiBzdHJpbmc7XG4gIHN1YlBhY2thZ2VzOiBzdHJpbmdbXTtcbiAgc3ViUGFja2FnZU1vZGU6ICdyb290JyB8ICdzdWJkaXJzJztcbiAgZXhjbHVkZTogc3RyaW5nW107XG4gIG91dEZpbGU6IHN0cmluZztcbiAgY29uZmlnRmlsZTogc3RyaW5nO1xuICBob21lUGFnZTogc3RyaW5nO1xuICBjb250ZXh0PzogVW5pUGFnZXNVc2VyQ29udGV4dDtcbn07XG5cbmV4cG9ydCB0eXBlIFBhZ2VzQnVpbGRGbGFncyA9IHtcbiAgLyoqIFx1NkM5OVx1NzZEMlx1ODhDMVx1NTI2QVx1NURGMlx1NzUxRlx1NjU0OFx1RkYwOFx1NTM5Rlx1NUI5RVx1NzNCMFx1OTFDQ1x1NzY4NCBgaXNTYW5kYm94TW9kZSAmJiBzYW5kYm94TWFpblBhZ2VzLmxlbmd0aCA+IDBgXHVGRjA5ICovXG4gIHNhbmRib3hBY3RpdmU6IGJvb2xlYW47XG4gIC8qKiBcdTRFM0JcdTUzMDVcdTk4NzVcdTk3NjJcdTY2MkZcdTU0MjZcdTRFMjVcdTY4M0NcdTRFRTVcdTY3MkNcdTk2MzZcdTZCQjUgb3V0cHV0IFx1NEUzQVx1NTFDNlx1RkYwOFx1NkEyMVx1NUYwRiA0IFx1NzUyOFx1NUI4M1x1NzlGQlx1OTY2NFx1NEUwRFx1NTNDMlx1NEUwRVx1OERFRlx1NzUzMVx1NzY4NCBUYWIgXHU5ODc1XHU5NzYyXHVGRjA5ICovXG4gIHN0cmljdE1haW5QYWdlczogYm9vbGVhbjtcbiAgLyoqIFx1NjcyQ1x1NkIyMSBwYXNzIFx1N0VEM1x1Njc1Rlx1NTQwRVx1NjYyRlx1NTQyNlx1Nzk4MVx1NkI2Mlx1NTZERVx1NTE5OSBwYWdlcy5jb25maWcuanNvblx1RkYwOFx1NkM5OVx1NzZEMlx1NzUxRlx1NjU0OFx1NjVGNlx1Nzk4MVx1NkI2Mlx1RkYwOSAqL1xuICBza2lwQ29uZmlnV3JpdGViYWNrOiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgUGFnZXNCdWlsZFN0YXRzID0ge1xuICAvKiogXHU0RTNCXHU1MzA1XHU5ODc1XHU5NzYyXHU2NTcwXHVGRjA4c2FuZGJveCBcdTRFNEJcdTUyNERcdTc2ODRcdTUxNjhcdTkxQ0ZcdTUzRTNcdTVGODRcdUZGMENcdTRFMEVcdTY1RTdcdTY1RTVcdTVGRDdcdTRFMDBcdTgxRjRcdUZGMDkgKi9cbiAgcGFnZUNvdW50OiBudW1iZXI7XG4gIC8qKiBcdTUyMDZcdTUzMDVcdTY1NzAgKi9cbiAgc3ViUGFja2FnZUNvdW50OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBQYWdlc0J1aWxkU3RhdGUgPSB7XG4gIHJvb3Q6IHN0cmluZztcbiAgaXNQcm9kdWN0aW9uOiBib29sZWFuO1xuICBvcHRpb25zOiBSZXNvbHZlZFVuaVBhZ2VzT3B0aW9ucztcblxuICBiYXNlQ29uZmlnOiBCYXNlQ29uZmlnO1xuICBiYXNlQ29uZmlnUGFyc2VPazogYm9vbGVhbjtcbiAgY29uZmlnUGF0aDogc3RyaW5nO1xuICBvdXRwdXRQYXRoOiBzdHJpbmc7XG5cbiAgLyoqIFx1NURGMlx1NjcwOSBwYWdlcy5qc29uXHVGRjA4XHU3RjE2XHU4RjkxXHU0RTJEXHU5MDE0XHU4QkVEXHU2Q0Q1XHU5NTE5XHU2NUY2XHU3Njg0XHU1MTVDXHU1RTk1XHVGRjA5XHVGRjBDcGF0aCBcdTIxOTIgcGFnZSAqL1xuICBleGlzdGluZ1BhZ2VzTWFwOiBNYXA8c3RyaW5nLCBQYWdlQ29uZmlnPjtcblxuICAvKiogXHU0RTNCXHU1MzA1XHVGRjFBXHU1REYyXHU1NDA4XHU1RTc2ICsgXHU5OTk2XHU5ODc1XHU3RjZFXHU5ODc2ICsgYWxpcGF5IFx1NUY1Mlx1NEUwMCAqL1xuICBmaW5hbFBhZ2VzOiBQYWdlQ29uZmlnW107XG4gIC8qKiBcdTUyMDZcdTUzMDVcdUZGMUFcdTVERjJcdTU0MDhcdTVFNzYgKyBhbGlwYXkgXHU1RjUyXHU0RTAwICovXG4gIHNjYW5uZWRTdWJQa2dzOiBTdWJQYWNrYWdlQ29uZmlnW107XG5cbiAgLyoqIFx1OTg3NVx1OTc2Mlx1NTE4NVx1NThGMFx1NjYwRVx1NEU4NiBkZWJ1Zy9kZWJ1Z0hvbWUvb25seS9pc0RldiBcdTc2ODRcdThERUZcdTVGODRcdUZGMDhcdTZDOTlcdTc2RDJcdTc1MjhcdUZGMDkgKi9cbiAgZGVidWdBbm5vdGF0ZWRQYWdlczogc3RyaW5nW107XG4gIC8qKiBcdTk4NzVcdTk3NjJcdTUxODVcdTU4RjBcdTY2MEVcdTRFODYgZGVidWdIb21lIFx1NzY4NFx1OERFRlx1NUY4NFx1RkYwOFx1NkM5OVx1NzZEMlx1NzUyOFx1RkYwOSAqL1xuICBkZWJ1Z0hvbWVBbm5vdGF0ZWRQYWdlczogc3RyaW5nW107XG5cbiAgLyoqIFx1MjYwNSBcdTUzNzNcdTVDMDZcdTg0M0RcdTc2RDhcdTc2ODRcdTVCRjlcdThDNjFcdUZGMUJzdGFnZXMgXHU3NkY0XHU2M0E1XHU2NTM5XHU1QjgzICovXG4gIG91dHB1dDogUGFnZXNKc29uT3V0cHV0O1xuICAvKiogXHU0RUM1XHU0RjlCXHU4REVGXHU3NTMxXHU4ODY4XHU0RjdGXHU3NTI4XHU3Njg0XHU4NjVBXHU2MkRGXHU5ODc1XHU5NzYyXHVGRjFBXHU2QTIxXHU1RjBGIDQgXHU3Njg0IFRhYiBcdTk4NzVcdTRFMERcdTUxOTlcdTUxNjUgcGFnZXMuanNvblx1RkYwQ1x1NEY0Nlx1NEVDRFx1OTcwMFx1NEZERFx1NzU1OSByb3V0ZS5tZXRhIC8gbmFtZSAqL1xuICB2aXJ0dWFsUGFnZXM6IFBhZ2VDb25maWdbXTtcblxuICBmbGFnczogUGFnZXNCdWlsZEZsYWdzO1xuICBzdGF0czogUGFnZXNCdWlsZFN0YXRzO1xufTtcblxuZXhwb3J0IHR5cGUgUGFnZXNTdGFnZUNvbnRleHQgPSB7XG4gIHJvb3Q6IHN0cmluZztcbiAgaXNQcm9kdWN0aW9uOiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBcdTUzNkJcdTY2MUZcdTYzRDJcdTRFRjZcdTU3MjhcdTgxRUFcdThFQUJcdTYzRDJcdTRFRjZcdTVCRjlcdThDNjFcdTRFMEFcdTYzMDJcdThGN0RcdTc2ODRcdTk2MzZcdTZCQjVcdTYzQ0ZcdThGRjBcdTMwMDJcbiAqXG4gKiBcdTdFQTZcdTVCOUFcdUZGMUFgb3JkZXJgIFx1NTM0N1x1NUU4Rlx1NjI2N1x1ODg0Q1x1MzAwMnNhbmRib3g9MTAwIC8gdGFiYmFyPTIwMCAvIHJvdXRlLXRhYmxlPTMwMFx1MzAwMlxuICovXG5leHBvcnQgdHlwZSBQYWdlc1N0YWdlID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIG9yZGVyOiBudW1iZXI7XG4gIHJ1bjogKHN0YXRlOiBQYWdlc0J1aWxkU3RhdGUsIGN0eDogUGFnZXNTdGFnZUNvbnRleHQpID0+IHZvaWQ7XG59O1xuXG4vKiogXHU1MzZCXHU2NjFGXHU3NTI4XHU0RThFXHU4OEFCXHU2ODM4XHU1RkMzXHU1M0QxXHU3M0IwXHU3Njg0XHU1QzVFXHU2MDI3XHU1NDBEICovXG5leHBvcnQgY29uc3QgVU5JX1BBR0VTX1NUQUdFX1BST1AgPSAndW5pUGFnZXNTdGFnZSc7XG5cbi8qKiBcdTk4NzlcdTc2RUVcdTUxODVcdTVCOThcdTY1QjlcdTk2MzZcdTZCQjVcdTU0MERcdUZGMDhcdTc1MjhcdTRFOEVcdTY4MzhcdTVGQzNcdTUwNUFcdTMwMENcdTkwNTdcdTZGMEZcdTZDRThcdTUxOENcdTMwMERcdTgxRUFcdTY4QzBcdUZGMDkgKi9cbmNvbnN0IEtOT1dOX1BBR0VTX1NUQUdFUzogc3RyaW5nW10gPSBbXG4gICd1bmktcGFnZXM6c2FuZGJveCcsXG4gICd1bmktcGFnZXM6dGFiYmFyJyxcbiAgJ3VuaS1wYWdlczpyb3V0ZS10YWJsZSdcbl07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gXHU5MDA5XHU5ODc5XHU0RTBFXHU1RTM4XHU5MUNGXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgREVGQVVMVF9ESVIgPSAnc3JjL3BhZ2VzJztcbmNvbnN0IERFRkFVTFRfT1VUX0ZJTEUgPSAncGFnZXMuanNvbic7XG5jb25zdCBERUZBVUxUX0NPTkZJR19GSUxFID0gJ3BhZ2VzLmNvbmZpZy5qc29uJztcblxuLyoqIFx1NjU4N1x1NEVGNlx1NTNEOFx1NjZGNFx1NTQwRVx1N0I0OVx1NUY4NVx1NTkxQVx1NEU0NVx1NTE4RFx1OTFDRFx1NjVCMFx1NzUxRlx1NjIxMFx1RkYwOFx1NTQwOFx1NUU3Nlx1NEUwMFx1NkIyMVx1NEZERFx1NUI1OFx1NUYxNVx1NTNEMVx1NzY4NFx1NTkxQVx1NkIyMVx1NEU4Qlx1NEVGNlx1RkYwOSAqL1xuY29uc3QgREVCT1VOQ0VfTVMgPSA4MDtcblxuLyoqIFx1NkEyMVx1NUYwRiAyIFx1NEUwQlx1NTM5Rlx1NzUxRiB0YWJCYXIgXHU0RjFBXHU4OEFCXHU4MUVBXHU1QjlBXHU0RTQ5XHU3RUM0XHU0RUY2XHU2M0E1XHU3QkExXHVGRjBDXHU5NzU5XHU2MDAxXHU2RDg4XHU5NjY0XHU1QkJGXHU0RTNCIHRhYmJhciBcdTUzQ0EgNTBweCBcdTdBOTdcdTUzRTNcdTVFOTVcdThGQjlcdThERERcdTRFMEVcdThGQzdcdTZFMjFcdTUyQTBcdThGN0RcdTgzQ0FcdTgyQjFcdUZGMENcdTVCOUVcdTczQjBcdTUxNjhcdTk0RkVcdThERUZcdTk2RjZcdTk1RUFcdTcwQzEgKi9cbmNvbnN0IEhJREVfTkFUSVZFX1RBQkJBUl9TVFlMRSA9ICc8c3R5bGUgaWQ9XCJ1bmktdGFiYmFyLWhpZGUtemVyby1mbGFzaFwiPnVuaS10YWJiYXIsIHVuaS10YWJiYXIgKiwgLnVuaS10YWJiYXIsIC51bmktdGFiYmFyICosIC51bmktdGFiYmFyLWJvdHRvbSwgLnVuaS10YWJiYXItYm90dG9tICosIC51bmktdGFiYmFyX19pY29uLCAudW5pLXRhYmJhcl9fbGFiZWwsIC51bmktYXN5bmMtbG9hZGluZywgLnVuaS1sb2FkaW5nIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDsgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7IG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDsgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50OyBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7IHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7IHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50OyBib3R0b206IC05OTk5cHggIWltcG9ydGFudDsgfSA6cm9vdCB7IC0td2luZG93LWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7IH0gdW5pLXBhZ2Utd3JhcHBlciB7IGhlaWdodDogMTAwJSAhaW1wb3J0YW50OyB9IHVuaS1wYWdlLWJvZHkgeyBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7IH08L3N0eWxlPic7XG5cbi8qKiBcdTlFRDhcdThCQTRcdTYzOTJcdTk2NjRcdTc2RUVcdTVGNTVcdUZGMDhjb21wb25lbnRzIC8gdmlld3MgXHU0RTBEXHU1RjUzXHU5ODc1XHU5NzYyXHU2MjZCXHU2M0NGXHVGRjA5ICovXG5jb25zdCBERUZBVUxUX0VYQ0xVREVTOiBzdHJpbmdbXSA9IFsnKiovY29tcG9uZW50cy8qKi8qLionLCAnKiovdmlld3MvKiovKi4qJ107XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlT3B0aW9ucyh1c2VyT3B0aW9uczogVW5pUGFnZXNPcHRpb25zID0ge30pOiBSZXNvbHZlZFVuaVBhZ2VzT3B0aW9ucyB7XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogdXNlck9wdGlvbnMuZW5hYmxlZCA/PyB0cnVlLFxuICAgIGRpcjogdXNlck9wdGlvbnMuZGlyID8/IERFRkFVTFRfRElSLFxuICAgIHN1YlBhY2thZ2VzOiB1c2VyT3B0aW9ucy5zdWJQYWNrYWdlcyA/PyBbXSxcbiAgICBzdWJQYWNrYWdlTW9kZTogdXNlck9wdGlvbnMuc3ViUGFja2FnZU1vZGUgPz8gJ3N1YmRpcnMnLFxuICAgIGV4Y2x1ZGU6IHVzZXJPcHRpb25zLmV4Y2x1ZGUgPz8gW10sXG4gICAgb3V0RmlsZTogdXNlck9wdGlvbnMub3V0RmlsZSA/PyBERUZBVUxUX09VVF9GSUxFLFxuICAgIGNvbmZpZ0ZpbGU6IHVzZXJPcHRpb25zLmNvbmZpZ0ZpbGUgPz8gREVGQVVMVF9DT05GSUdfRklMRSxcbiAgICBob21lUGFnZTogdXNlck9wdGlvbnMuaG9tZVBhZ2UgPz8gJycsXG4gICAgY29udGV4dDogdXNlck9wdGlvbnMuY29udGV4dFxuICB9O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFx1NUU5NVx1NUM0Mlx1NURFNVx1NTE3N1x1RkYxQWdsb2IgLyBcdTYyNkJcdTYzQ0YgLyBcdTVCOEZcdTg5RTNcdTY3OTAgLyBlbnYgLyBcdTUxOTlcdTc2RDhcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKiogXHU4RjdCXHU5MUNGXHU3RUE3XHU1MzM5XHU5MTREIGdsb2IgXHU2QTIxXHU1RjBGXHVGRjBDXHU5MDdGXHU1MTREXHU1OTE2XHU5MEU4XHU2QTIxXHU1NzU3XHU1QkZDXHU1MUZBXHU1MTdDXHU1QkI5XHU2MDI3XHU5NUVFXHU5ODk4ICovXG5mdW5jdGlvbiBtYXRjaEdsb2IoZmlsZVBhdGg6IHN0cmluZywgcGF0dGVybjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmIChwYXR0ZXJuID09PSAnKiovY29tcG9uZW50cy8qKi8qLionIHx8IHBhdHRlcm4uaW5jbHVkZXMoJ2NvbXBvbmVudHMnKSkge1xuICAgIHJldHVybiBmaWxlUGF0aC5pbmNsdWRlcygnL2NvbXBvbmVudHMvJykgfHwgZmlsZVBhdGguc3RhcnRzV2l0aCgnY29tcG9uZW50cy8nKTtcbiAgfVxuICBpZiAocGF0dGVybiA9PT0gJyoqL3ZpZXdzLyoqLyouKicgfHwgcGF0dGVybi5pbmNsdWRlcygndmlld3MnKSkge1xuICAgIHJldHVybiBmaWxlUGF0aC5pbmNsdWRlcygnL3ZpZXdzLycpIHx8IGZpbGVQYXRoLnN0YXJ0c1dpdGgoJ3ZpZXdzLycpO1xuICB9XG4gIGNvbnN0IHJlZ2V4U3RyID0gcGF0dGVyblxuICAgIC5yZXBsYWNlKC9bLiteJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKVxuICAgIC5yZXBsYWNlKC9cXCpcXCpcXC9cXCovZywgJy4qJylcbiAgICAucmVwbGFjZSgvXFwqXFwqL2csICcuKicpXG4gICAgLnJlcGxhY2UoL1xcKi9nLCAnW14vXSonKVxuICAgIC5yZXBsYWNlKC9cXD8vZywgJy4nKTtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke3JlZ2V4U3RyfSRgKS50ZXN0KGZpbGVQYXRoKTtcbn1cblxuLyoqIFx1OTAxMlx1NUY1Mlx1NjI2Qlx1NjNDRiAudXZ1ZSBcdTY1ODdcdTRFRjZcdUZGMENcdTY1MkZcdTYzMDEgZXhjbHVkZSBcdTZBMjFcdTVGMEYgKi9cbmZ1bmN0aW9uIHNjYW5VdnVlRmlsZXMoZGlyOiBzdHJpbmcsIGV4Y2x1ZGVzOiBzdHJpbmdbXSA9IFtdLCBwcm9qZWN0Um9vdDogc3RyaW5nID0gJycpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gW107XG4gIGlmICghZnMuZXhpc3RzU3luYyhkaXIpKSB7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBjb25zdCBhbGxFeGNsdWRlcyA9IFsuLi5ERUZBVUxUX0VYQ0xVREVTLCAuLi5leGNsdWRlc107XG5cbiAgY29uc3QgZW50cmllcyA9IGZzLnJlYWRkaXJTeW5jKGRpciwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBlbnRyeSA9IGVudHJpZXNbaV07XG4gICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oZGlyLCBlbnRyeS5uYW1lKTtcblxuICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAvLyBcdThERjNcdThGQzdcdTlFRDhcdThCQTRcdTc2ODQgY29tcG9uZW50cyBcdTU0OEMgdmlld3MgXHU3NkVFXHU1RjU1XG4gICAgICBpZiAoZW50cnkubmFtZSA9PT0gJ2NvbXBvbmVudHMnIHx8IGVudHJ5Lm5hbWUgPT09ICd2aWV3cycpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHRzLnB1c2goLi4uc2NhblV2dWVGaWxlcyhmdWxsUGF0aCwgZXhjbHVkZXMsIHByb2plY3RSb290KSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy51dnVlJykpIHtcbiAgICAgIGNvbnN0IHJlbFBhdGggPSBwcm9qZWN0Um9vdCA/IHBhdGgucmVsYXRpdmUocHJvamVjdFJvb3QsIGZ1bGxQYXRoKS5yZXBsYWNlKC9cXFxcL2csICcvJykgOiBmdWxsUGF0aC5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG4gICAgICBsZXQgZXhjbHVkZWQgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGUgPSAwOyBlIDwgYWxsRXhjbHVkZXMubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgaWYgKG1hdGNoR2xvYihyZWxQYXRoLCBhbGxFeGNsdWRlc1tlXSkpIHtcbiAgICAgICAgICBleGNsdWRlZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghZXhjbHVkZWQpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGZ1bGxQYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbi8qKiBcdTY1ODdcdTRFRjZcdThERUZcdTVGODQgXHUyMTkyIFx1OTg3NVx1OTc2Mlx1OERFRlx1NzUzMSBwYXRoICovXG5mdW5jdGlvbiBmaWxlVG9QYWdlUGF0aChmaWxlUGF0aDogc3RyaW5nLCBwYWdlc0Rpcjogc3RyaW5nLCBwcm9qZWN0Um9vdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgYWJzUGFnZXMgPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsIHBhZ2VzRGlyKTtcbiAgY29uc3QgcmVsID0gcGF0aC5yZWxhdGl2ZShhYnNQYWdlcywgZmlsZVBhdGgpLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcbiAgY29uc3Qgd2l0aG91dEV4dCA9IHJlbC5yZXBsYWNlKC9cXC51dnVlJC8sICcnKTtcbiAgcmV0dXJuIHBhdGgucG9zaXguam9pbihwYWdlc0Rpciwgd2l0aG91dEV4dCk7XG59XG5cbi8qKiBcdTRFMDBcdTZCMjEgZGVmaW5lUGFnZSBcdTVCOEZcdThDMDNcdTc1MjhcdTU3MjhcdTZFOTBcdTc4MDFcdTRFMkRcdTc2ODRcdTRGNERcdTdGNkUgKi9cbnR5cGUgRGVmaW5lUGFnZUNhbGxTaXRlID0ge1xuICBzdGFydDogbnVtYmVyO1xuICBvcGVuUGFyZW46IG51bWJlcjtcbiAgY2xvc2VQYXJlbjogbnVtYmVyO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBcdThERThcdTVFNzNcdTUzRjBcdTY3NjFcdTRFRjZcdTdGMTZcdThCRDEgRFNMIFx1NEUwRVx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjb25zdCBHRU5FUkFUSU9OX01BUktFUl9QUkVGSVggPSAnR0VORVJBVEVEIEJZIFVOSS1QQUdFUywgUExBVEZPUk06JztcblxuZXhwb3J0IGNsYXNzIERlZmluZUNvbmRpdGlvbmFsIHtcbiAgcHJpdmF0ZSByZWFkb25seSBiYXNlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICBwcml2YXRlIHJlYWRvbmx5IGJyYW5jaGVzOiBBcnJheTx7XG4gICAgY29uZGl0aW9uOiAnaWZkZWYnIHwgJ2lmbmRlZic7XG4gICAgcGxhdGZvcm1zOiBzdHJpbmdbXTtcbiAgICBwYXJ0aWFsOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICB9PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGJhc2U6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICB0aGlzLmJhc2UgPSBiYXNlIHx8IHt9O1xuICB9XG5cbiAgaWZkZWYocGxhdGZvcm06IHN0cmluZyB8IHN0cmluZ1tdLCBwYXJ0aWFsOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogdGhpcyB7XG4gICAgdGhpcy5icmFuY2hlcy5wdXNoKHtcbiAgICAgIGNvbmRpdGlvbjogJ2lmZGVmJyxcbiAgICAgIHBsYXRmb3JtczogQXJyYXkuaXNBcnJheShwbGF0Zm9ybSkgPyBwbGF0Zm9ybSA6IFtwbGF0Zm9ybV0sXG4gICAgICBwYXJ0aWFsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpZm5kZWYocGxhdGZvcm06IHN0cmluZyB8IHN0cmluZ1tdLCBwYXJ0aWFsOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogdGhpcyB7XG4gICAgdGhpcy5icmFuY2hlcy5wdXNoKHtcbiAgICAgIGNvbmRpdGlvbjogJ2lmbmRlZicsXG4gICAgICBwbGF0Zm9ybXM6IEFycmF5LmlzQXJyYXkocGxhdGZvcm0pID8gcGxhdGZvcm0gOiBbcGxhdGZvcm1dLFxuICAgICAgcGFydGlhbFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVzb2x2ZShwbGF0Zm9ybTogc3RyaW5nKTogUmVjb3JkPHN0cmluZywgYW55PiB7XG4gICAgbGV0IHJlc3VsdCA9IHsgLi4udGhpcy5iYXNlIH07XG4gICAgY29uc3QgY3VyID0gcGxhdGZvcm0udG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBoNUFsaWFzZXMgPSBbJ2g1JywgJ3dlYiddO1xuICAgIGNvbnN0IG1hdGNoZXMgPSAobGlzdDogc3RyaW5nW10pID0+IHtcbiAgICAgIGNvbnN0IGxvd2VyID0gbGlzdC5tYXAocCA9PiBwLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxvd2VyLmluY2x1ZGVzKGN1cikpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgaWYgKGg1QWxpYXNlcy5pbmNsdWRlcyhjdXIpICYmIGxvd2VyLnNvbWUocCA9PiBoNUFsaWFzZXMuaW5jbHVkZXMocCkpKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBicmFuY2ggb2YgdGhpcy5icmFuY2hlcykge1xuICAgICAgY29uc3QgbWF0Y2hlZCA9IGJyYW5jaC5jb25kaXRpb24gPT09ICdpZmRlZidcbiAgICAgICAgPyBtYXRjaGVzKGJyYW5jaC5wbGF0Zm9ybXMpXG4gICAgICAgIDogIW1hdGNoZXMoYnJhbmNoLnBsYXRmb3Jtcyk7XG4gICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICByZXN1bHQgPSBkZWVwTWVyZ2UocmVzdWx0LCBicmFuY2gucGFydGlhbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWw6IHVua25vd24pOiB2YWwgaXMgUmVjb3JkPHN0cmluZywgYW55PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWwgIT09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkodmFsKTtcbn1cblxuZnVuY3Rpb24gZGVlcE1lcmdlKGJhc2U6IFJlY29yZDxzdHJpbmcsIGFueT4sIHBhcnRpYWw6IFJlY29yZDxzdHJpbmcsIGFueT4pOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHtcbiAgY29uc3QgcmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0geyAuLi5iYXNlIH07XG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHBhcnRpYWwpKSB7XG4gICAgY29uc3QgYmFzZVZhbCA9IHJlc3VsdFtrZXldO1xuICAgIGNvbnN0IHBhcnRpYWxWYWwgPSBwYXJ0aWFsW2tleV07XG4gICAgcmVzdWx0W2tleV0gPSBpc1BsYWluT2JqZWN0KGJhc2VWYWwpICYmIGlzUGxhaW5PYmplY3QocGFydGlhbFZhbClcbiAgICAgID8gZGVlcE1lcmdlKGJhc2VWYWwsIHBhcnRpYWxWYWwpXG4gICAgICA6IHBhcnRpYWxWYWw7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGNvbnN0IEFMTF9BUFBfUExBVEZPUk1TID0gW1xuICAnQVBQLUFORFJPSUQnLFxuICAnQVBQLUlPUycsXG4gICdBUFAtSEFSTU9OWSdcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBBTExfTVBfUExBVEZPUk1TID0gW1xuICAnTVAtV0VJWElOJyxcbiAgJ01QLUFMSVBBWScsXG4gICdNUC1CQUlEVScsXG4gICdNUC1UT1VUSUFPJyxcbiAgJ01QLVFRJyxcbiAgJ01QLUtVQUlTSE9VJyxcbiAgJ01QLUxBUksnLFxuICAnTVAtSkQnLFxuICAnTVAtWEhTJyxcbiAgJ01QLTM2MCcsXG4gICdNUC1IQVJNT05ZJ1xuXSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IEFVVE9fRVZBTF9QTEFURk9STVMgPSBbXG4gICdoNScsXG4gICdhcHAtYW5kcm9pZCcsXG4gICdhcHAtaW9zJyxcbiAgJ2FwcC1oYXJtb255JyxcbiAgJ21wLXdlaXhpbicsXG4gICdtcC1hbGlwYXknLFxuICAnbXAtYmFpZHUnLFxuICAnbXAtdG91dGlhbycsXG4gICdtcC1xcScsXG4gICdtcC1rdWFpc2hvdScsXG4gICdtcC1sYXJrJyxcbiAgJ21wLWpkJyxcbiAgJ21wLXhocycsXG4gICdtcC0zNjAnLFxuICAnbXAtaGFybW9ueSdcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGF0Zm9ybUVudihwbGF0Zm9ybUlucHV0Pzogc3RyaW5nKSB7XG4gIGNvbnN0IHBsYXRmb3JtID0gKHBsYXRmb3JtSW5wdXQgfHwgcHJvY2Vzcy5lbnYuVU5JX1BMQVRGT1JNIHx8ICdoNScpLnRvTG93ZXJDYXNlKCk7XG4gIGxldCBhcHBQbGF0Zm9ybSA9IHByb2Nlc3MuZW52LlVOSV9BUFBfUExBVEZPUk0/LnRvTG93ZXJDYXNlKCk7XG5cbiAgLy8gXHU4MkU1XHU2NjNFXHU1RjBGXHU0RjIwXHU1MTY1XHU1MTc3XHU0RjUzIEFwcCBcdTVCNTBcdTVFNzNcdTUzRjBcdUZGMDhcdTU5ODIgYXBwLWFuZHJvaWQsIGFwcC1pb3MsIGFwcC1oYXJtb255XHVGRjA5XHVGRjBDXHU3Q0JFXHU3ODZFXHU2MkM2XHU4OUUzXHU1QjUwXHU1RTczXHU1M0YwXHU2ODA3XHU4QkM2XHVGRjFCXG4gIC8vIFx1ODJFNVx1NEYyMFx1NTE2NVx1OTc1RSBBcHAgXHU1RTczXHU1M0YwXHVGRjA4XHU1OTgyIGg1LCBtcC13ZWl4aW4sIG1wLWFsaXBheVx1RkYwOVx1RkYwQ1x1NUZDNVx1OTg3Qlx1NkUwNVx1N0E3QSBhcHBQbGF0Zm9ybVx1RkYwQ1x1Njc1Q1x1N0VERFx1NTkxNlx1OTBFOFx1NzNBRlx1NTg4M1x1NkM2MVx1NjdEM1xuICBpZiAocGxhdGZvcm0gPT09ICdhcHAtYW5kcm9pZCcpIHtcbiAgICBhcHBQbGF0Zm9ybSA9ICdhbmRyb2lkJztcbiAgfVxuICBlbHNlIGlmIChwbGF0Zm9ybSA9PT0gJ2FwcC1pb3MnKSB7XG4gICAgYXBwUGxhdGZvcm0gPSAnaW9zJztcbiAgfVxuICBlbHNlIGlmIChwbGF0Zm9ybSA9PT0gJ2FwcC1oYXJtb255Jykge1xuICAgIGFwcFBsYXRmb3JtID0gJ2hhcm1vbnknO1xuICB9XG4gIGVsc2UgaWYgKHBsYXRmb3JtICE9PSAnYXBwJyAmJiBwbGF0Zm9ybSAhPT0gJ2FwcC1wbHVzJykge1xuICAgIGFwcFBsYXRmb3JtID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3QgaXNINSA9IHBsYXRmb3JtID09PSAnaDUnIHx8IHBsYXRmb3JtID09PSAnd2ViJztcbiAgY29uc3QgaXNXZWIgPSBpc0g1O1xuICBjb25zdCBpc01wID0gL15tcC0vaS50ZXN0KHBsYXRmb3JtKTtcbiAgY29uc3QgaXNNcFdlaXhpbiA9IHBsYXRmb3JtID09PSAnbXAtd2VpeGluJztcbiAgY29uc3QgaXNNcEFsaXBheSA9IHBsYXRmb3JtID09PSAnbXAtYWxpcGF5JztcbiAgY29uc3QgaXNNcEJhaWR1ID0gcGxhdGZvcm0gPT09ICdtcC1iYWlkdSc7XG4gIGNvbnN0IGlzTXBUb3V0aWFvID0gcGxhdGZvcm0gPT09ICdtcC10b3V0aWFvJztcbiAgY29uc3QgaXNNcFFRID0gcGxhdGZvcm0gPT09ICdtcC1xcSc7XG4gIGNvbnN0IGlzTXBLdWFpc2hvdSA9IHBsYXRmb3JtID09PSAnbXAta3VhaXNob3UnO1xuICBjb25zdCBpc01wTGFyayA9IHBsYXRmb3JtID09PSAnbXAtbGFyayc7XG4gIGNvbnN0IGlzTXBKRCA9IHBsYXRmb3JtID09PSAnbXAtamQnO1xuICBjb25zdCBpc01wWEhTID0gcGxhdGZvcm0gPT09ICdtcC14aHMnO1xuICBjb25zdCBpc01wMzYwID0gcGxhdGZvcm0gPT09ICdtcC0zNjAnO1xuICBjb25zdCBpc01wSGFybW9ueSA9IHBsYXRmb3JtID09PSAnbXAtaGFybW9ueSc7XG4gIGNvbnN0IGlzQXBwID0gcGxhdGZvcm0gPT09ICdhcHAnIHx8IHBsYXRmb3JtID09PSAnYXBwLXBsdXMnIHx8IHBsYXRmb3JtLnN0YXJ0c1dpdGgoJ2FwcC0nKTtcbiAgY29uc3QgaXNBcHBBbmRyb2lkID0gaXNBcHAgJiYgKHBsYXRmb3JtID09PSAnYXBwLWFuZHJvaWQnIHx8IGFwcFBsYXRmb3JtID09PSAnYW5kcm9pZCcpO1xuICBjb25zdCBpc0FwcElPUyA9IGlzQXBwICYmIChwbGF0Zm9ybSA9PT0gJ2FwcC1pb3MnIHx8IGFwcFBsYXRmb3JtID09PSAnaW9zJyk7XG4gIGNvbnN0IGlzQXBwSGFybW9ueSA9IGlzQXBwICYmIChwbGF0Zm9ybSA9PT0gJ2FwcC1oYXJtb255JyB8fCBhcHBQbGF0Zm9ybSA9PT0gJ2hhcm1vbnknKTtcblxuICByZXR1cm4ge1xuICAgIHBsYXRmb3JtLFxuICAgIGlzSDUsXG4gICAgaXNXZWIsXG4gICAgaXNNcCxcbiAgICBpc01wV2VpeGluLFxuICAgIGlzTXBBbGlwYXksXG4gICAgaXNNcEJhaWR1LFxuICAgIGlzTXBUb3V0aWFvLFxuICAgIGlzTXBRUSxcbiAgICBpc01wS3VhaXNob3UsXG4gICAgaXNNcExhcmssXG4gICAgaXNNcEpELFxuICAgIGlzTXBYSFMsXG4gICAgaXNNcDM2MCxcbiAgICBpc01wSGFybW9ueSxcbiAgICBpc0FwcCxcbiAgICBpc0FwcEFuZHJvaWQsXG4gICAgaXNBcHBJT1MsXG4gICAgaXNBcHBIYXJtb255XG4gIH07XG59XG5cbi8qKiBcdTdGMTNcdTVCNThcdThCRkJcdTUzRDZcdTVGNTNcdTUyNERcdTk4NzlcdTc2RUVcdTc2ODRcdTczQUZcdTU4ODNcdTUzRDhcdTkxQ0YgKi9cbmxldCBjYWNoZWRMb2FkZWRFbnY6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfCBudWxsID0gbnVsbDtcbmxldCBjYWNoZWRFbnZSb290OiBzdHJpbmcgPSAnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvYWRlZEVudihwcm9qZWN0Um9vdDogc3RyaW5nID0gcHJvY2Vzcy5jd2QoKSwgbW9kZT86IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICBjb25zdCBjdXJyZW50TW9kZSA9IG1vZGUgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcbiAgaWYgKGNhY2hlZExvYWRlZEVudiAhPSBudWxsICYmIGNhY2hlZEVudlJvb3QgPT09IHByb2plY3RSb290KSB7XG4gICAgcmV0dXJuIGNhY2hlZExvYWRlZEVudjtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGxvYWRlZCA9IGxvYWRFbnYoY3VycmVudE1vZGUsIHByb2plY3RSb290LCAnJyk7XG4gICAgY2FjaGVkTG9hZGVkRW52ID0geyAuLi5wcm9jZXNzLmVudiwgLi4ubG9hZGVkIH0gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgICBjYWNoZWRFbnZSb290ID0gcHJvamVjdFJvb3Q7XG4gICAgcmV0dXJuIGNhY2hlZExvYWRlZEVudjtcbiAgfVxuICBjYXRjaCB7XG4gICAgcmV0dXJuIHsgLi4ucHJvY2Vzcy5lbnYgfSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICB9XG59XG5cbi8qKiBcdTZFMDVcdTc0MDZcdTczQUZcdTU4ODNcdTUzRDhcdTkxQ0ZcdTdGMTNcdTVCNTggKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckxvYWRlZEVudkNhY2hlKCk6IHZvaWQge1xuICBjYWNoZWRMb2FkZWRFbnYgPSBudWxsO1xuICBjYWNoZWRFbnZSb290ID0gJyc7XG59XG5cbi8qKlxuICogXHU1QjlBXHU0RjREXHU2RTkwXHU3ODAxXHU0RTJEXHU3QjJDXHU0RTAwXHU2QjIxIGBkZWZpbmVQYWdlKC4uLilgIFx1OEMwM1x1NzUyOFx1NzY4NFx1NjJFQ1x1NTNGN1x1NEY0RFx1N0Y2RVx1MzAwMlxuICogXHU2MkVDXHU1M0Y3XHU4QkExXHU2NTcwXHU0RjFBXHU4REYzXHU4RkM3XHU1QjU3XHU3QjI2XHU0RTMyXHU0RTBFXHU2Q0U4XHU5MUNBXHVGRjBDXHU1MUM2XHU3ODZFXHU2MzU1XHU4M0I3XHU1QkY5XHU4QzYxXHU1QjU3XHU5NzYyXHU5MUNGXHUzMDAxXHU2NjZFXHU5MDFBXHU1MUZEXHU2NTcwXHUzMDAxXHU3QkFEXHU1OTM0XHU1MUZEXHU2NTcwXHU0RTBFIGFzeW5jIFx1NTFGRFx1NjU3MFx1N0I0OVx1NTQwNFx1NzlDRFx1NUI4Rlx1NTNDMlx1NjU3MFx1OEZCOVx1NzU0Q1x1MzAwMlxuICovXG5mdW5jdGlvbiBzY2FuRGVmaW5lUGFnZUNhbGwoY29kZTogc3RyaW5nKTogRGVmaW5lUGFnZUNhbGxTaXRlIHwgbnVsbCB7XG4gIGNvbnN0IHN0YXJ0UmVnZXggPSAvZGVmaW5lUGFnZVxccypcXCgvO1xuICBjb25zdCBtYXRjaCA9IGNvZGUubWF0Y2goc3RhcnRSZWdleCk7XG4gIGlmIChtYXRjaCA9PSBudWxsIHx8IG1hdGNoLmluZGV4ID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG9wZW5QYXJlbiA9IGNvZGUuaW5kZXhPZignKCcsIG1hdGNoLmluZGV4KTtcbiAgaWYgKG9wZW5QYXJlbiA9PT0gLTEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxldCBkZXB0aCA9IDA7XG4gIGxldCBpblN0cmluZyA9IGZhbHNlO1xuICBsZXQgc3RyaW5nQ2hhciA9ICcnO1xuICBmb3IgKGxldCBpID0gb3BlblBhcmVuOyBpIDwgY29kZS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNoID0gY29kZVtpXTtcbiAgICBjb25zdCBwcmV2ID0gaSA+IDAgPyBjb2RlW2kgLSAxXSA6ICcnO1xuXG4gICAgaWYgKGluU3RyaW5nKSB7XG4gICAgICBpZiAoY2ggPT09IHN0cmluZ0NoYXIgJiYgcHJldiAhPT0gJ1xcXFwnKSB7XG4gICAgICAgIGluU3RyaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnIHx8IGNoID09PSAnYCcpIHtcbiAgICAgIGluU3RyaW5nID0gdHJ1ZTtcbiAgICAgIHN0cmluZ0NoYXIgPSBjaDtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIFx1OERGM1x1OEZDN1x1NkNFOFx1OTFDQVxuICAgIGlmIChjaCA9PT0gJy8nICYmIGkgKyAxIDwgY29kZS5sZW5ndGgpIHtcbiAgICAgIGlmIChjb2RlW2kgKyAxXSA9PT0gJy8nKSB7XG4gICAgICAgIGNvbnN0IG5ld2xpbmUgPSBjb2RlLmluZGV4T2YoJ1xcbicsIGkpO1xuICAgICAgICBpZiAobmV3bGluZSA9PT0gLTEpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpID0gbmV3bGluZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoY29kZVtpICsgMV0gPT09ICcqJykge1xuICAgICAgICBjb25zdCBlbmQgPSBjb2RlLmluZGV4T2YoJyovJywgaSArIDIpO1xuICAgICAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGkgPSBlbmQgKyAxO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2ggPT09ICcoJykge1xuICAgICAgZGVwdGgrKztcbiAgICB9XG4gICAgZWxzZSBpZiAoY2ggPT09ICcpJykge1xuICAgICAgZGVwdGgtLTtcbiAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4geyBzdGFydDogbWF0Y2guaW5kZXgsIG9wZW5QYXJlbiwgY2xvc2VQYXJlbjogaSB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqIFx1ODlFM1x1Njc5MCA8cm91dGU+IFx1NTc1N1x1RkYwOEpTT041IFx1NjgzQ1x1NUYwRlx1RkYwOSAqL1xuZnVuY3Rpb24gcGFyc2VSb3V0ZUJsb2NrKGNvbnRlbnQ6IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIGFueT4gfCBudWxsIHtcbiAgY29uc3QgcmVnZXggPSAvPHJvdXRlW14+XSo+KFtcXHNcXFNdKj8pPFxcL3JvdXRlPi87XG4gIGNvbnN0IG1hdGNoID0gY29udGVudC5tYXRjaChyZWdleCk7XG4gIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTjUucGFyc2UobWF0Y2hbMV0udHJpbSgpKSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICB9XG4gIGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKCdbdW5pLXBhZ2VzXSBGYWlsZWQgdG8gcGFyc2UgPHJvdXRlPiBibG9jazonLCBlKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFx1NEVDRVx1NkU5MFx1NzgwMVx1NEUyRFx1NjNEMFx1NTNENiBkZWZpbmVQYWdlKC4uLikgXHU3Njg0XHU5MTREXHU3RjZFXHUzMDAyXG4gKiBcdTY1MkZcdTYzMDFcdTVCRjlcdThDNjFcdTVCNTdcdTk3NjJcdTkxQ0ZcdTMwMDFcdTY2NkVcdTkwMUFcdTUxRkRcdTY1NzBcdTMwMDFcdTdCQURcdTU5MzRcdTUxRkRcdTY1NzBcdTMwMDFhc3luYyBcdTVGMDJcdTZCNjVcdTUxRkRcdTY1NzBcdTRFRTVcdTUzQ0EgbnVsbFx1RkYwQ1x1NUU3Nlx1NTQxMVx1NUI4Rlx1NkM5OVx1N0JCMVx1NkNFOFx1NTE2NSBwbGF0Zm9ybVx1MzAwMWlzSDUgXHU3QjQ5XHU1MTY4XHU1OTU3XHU4REU4XHU3QUVGXHU3M0FGXHU1ODgzXHUzMDAyXG4gKiBcdTgyRTVcdTVCOEZcdTUxRkRcdTY1NzBcdTRFM0EgYXN5bmMgXHU2MjE2XHU4RkQ0XHU1NkRFIFByb21pc2VcdUZGMENcdTRGMUFcdTUxNDhcdTYyNjdcdTg4NENcdTVGMDJcdTZCNjVcdTY0Q0RcdTRGNUNcdTVFNzYgYXdhaXQgXHU1MTc2XHU3RUQzXHU2NzlDXHUzMDAyXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHBhcnNlRGVmaW5lUGFnZShcbiAgY29udGVudDogc3RyaW5nLFxuICBmaWxlbmFtZTogc3RyaW5nID0gJ3BhZ2UudXZ1ZScsXG4gIGN1cnJlbnRQbGF0Zm9ybTogc3RyaW5nID0gJycsXG4gIHByb2plY3RSb290OiBzdHJpbmcgPSBwcm9jZXNzLmN3ZCgpLFxuICBleHRyYUNvbnRleHQ/OiBVbmlQYWdlc1VzZXJDb250ZXh0XG4pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIGFueT4gfCBudWxsPiB7XG4gIGxldCB0YXJnZXRDb250ZW50ID0gY29udGVudDtcbiAgY29uc3Qgc2NyaXB0TWF0Y2ggPSBjb250ZW50Lm1hdGNoKC88c2NyaXB0W14+XSo+KFtcXHNcXFNdKj8pPFxcL3NjcmlwdD4vKTtcbiAgaWYgKHNjcmlwdE1hdGNoICE9IG51bGwgJiYgc2NyaXB0TWF0Y2hbMV0gIT0gbnVsbCkge1xuICAgIHRhcmdldENvbnRlbnQgPSBzY3JpcHRNYXRjaFsxXTtcbiAgfVxuXG4gIGNvbnN0IHNpdGUgPSBzY2FuRGVmaW5lUGFnZUNhbGwodGFyZ2V0Q29udGVudCk7XG4gIGlmIChzaXRlID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGFyZyA9IHRhcmdldENvbnRlbnQuc2xpY2Uoc2l0ZS5vcGVuUGFyZW4gKyAxLCBzaXRlLmNsb3NlUGFyZW4pLnRyaW0oKTtcbiAgaWYgKCFhcmcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIFx1NjYzRVx1NUYwRiBkZWZpbmVQYWdlKG51bGwpIFx1ODg2OFx1NzkzQVx1NTcyOFx1NUY1M1x1NTI0RFx1NUU3M1x1NTNGMFx1NjM5Mlx1OTY2NFx1OEJFNVx1OTg3NVx1OTc2MlxuICBpZiAoYXJnID09PSAnbnVsbCcpIHtcbiAgICByZXR1cm4geyBfc2tpcFBhZ2U6IHRydWUgfTtcbiAgfVxuXG4gIC8vIDEuIFx1OTQ4OFx1NUJGOVx1N0I4MFx1NTM1NVx1OTc1OVx1NjAwMVx1N0VBRlx1NUJGOVx1OEM2MVx1NUI1N1x1OTc2Mlx1OTFDRlx1RkYwOFx1NjVFMFx1NTFGRFx1NjU3MFx1MzAwMVx1NjVFMFx1NTJBOFx1NjAwMVx1ODg2OFx1OEZCRVx1NUYwRlx1RkYwOVx1NTA1QVx1NUZFQlx1OTAxRlx1ODlFM1x1Njc5MFx1NEYxOFx1NTMxNlxuICBjb25zdCBpc0Z1bmN0aW9uRm9ybVxuICAgID0gYXJnLmluY2x1ZGVzKCc9PicpXG4gICAgICB8fCBhcmcuaW5jbHVkZXMoJ2Z1bmN0aW9uJylcbiAgICAgIHx8IGFyZy5pbmNsdWRlcygnaXNINScpXG4gICAgICB8fCBhcmcuaW5jbHVkZXMoJ2lzV2ViJylcbiAgICAgIHx8IGFyZy5pbmNsdWRlcygnaXNBcHAnKVxuICAgICAgfHwgYXJnLmluY2x1ZGVzKCdpc01wJylcbiAgICAgIHx8IGFyZy5pbmNsdWRlcygncGxhdGZvcm0nKVxuICAgICAgfHwgYXJnLmluY2x1ZGVzKCdkZWZpbmUoJyk7XG5cbiAgaWYgKGFyZy5zdGFydHNXaXRoKCd7JykgJiYgIWlzRnVuY3Rpb25Gb3JtKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT041LnBhcnNlKGFyZykgYXMgUmVjb3JkPHN0cmluZywgYW55PjtcbiAgICAgIGlmIChwYXJzZWQgIT0gbnVsbCAmJiB0eXBlb2YgcGFyc2VkID09PSAnb2JqZWN0Jykge1xuICAgICAgICBwYXJzZWQuX2lzU3RhdGljTWFjcm8gPSB0cnVlO1xuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCB7fVxuICB9XG5cbiAgLy8gMi4gXHU2M0QwXHU1M0Q2IDxzY3JpcHQ+IFx1NjgwN1x1N0I3RVx1NTE4NVx1NzY4NCBpbXBvcnQgXHU1OEYwXHU2NjBFXG4gIGNvbnN0IGltcG9ydHM6IHN0cmluZ1tdID0gW107XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvbm8tc3VwZXItbGluZWFyLWJhY2t0cmFja2luZ1xuICBjb25zdCBpbXBvcnRNYXRjaGVzID0gdGFyZ2V0Q29udGVudC5tYXRjaEFsbCgvKD86XnxcXG4pXFxzKihpbXBvcnRcXHMrW1xcc1xcU10rP1xccytmcm9tXFxzK1snXCJdW14nXCJdK1snXCJdXFxzKjs/KS9nKTtcbiAgZm9yIChjb25zdCBtIG9mIGltcG9ydE1hdGNoZXMpIHtcbiAgICBpZiAoIW1bMV0uc3RhcnRzV2l0aCgnaW1wb3J0IHR5cGUnKSkge1xuICAgICAgaW1wb3J0cy5wdXNoKG1bMV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIDMuIFx1Njc4NFx1NUVGQVx1NUI4Rlx1NkM5OVx1N0JCMVx1NjI2N1x1ODg0Q1x1NzNBRlx1NTg4M1xuICB0cnkge1xuICAgIGNvbnN0IHBsYXRmb3JtRW52ID0gZ2V0UGxhdGZvcm1FbnYoY3VycmVudFBsYXRmb3JtKTtcbiAgICBjb25zdCBkaXIgPSBwYXRoLmRpcm5hbWUoZmlsZW5hbWUpO1xuXG4gICAgY29uc3QgbWFjcm9Db2RlID0gYXJnO1xuICAgIGNvbnN0IGJ1aWxkQ29kZSA9IChjb2RlU3RyOiBzdHJpbmcpID0+IGAke2ltcG9ydHMuam9pbignXFxuJyl9XFxuZXhwb3J0IGRlZmF1bHQgKCR7Y29kZVN0cn0pO2A7XG5cbiAgICBjb25zdCBqc0NvZGUgPSB0cy50cmFuc3BpbGVNb2R1bGUoYnVpbGRDb2RlKG1hY3JvQ29kZSksIHtcbiAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICBtb2R1bGU6IHRzLk1vZHVsZUtpbmQuQ29tbW9uSlMsXG4gICAgICAgIHRhcmdldDogdHMuU2NyaXB0VGFyZ2V0LkVTMjAyMixcbiAgICAgICAgZXNNb2R1bGVJbnRlcm9wOiB0cnVlLFxuICAgICAgICBhbGxvd0pzOiB0cnVlLFxuICAgICAgICBza2lwTGliQ2hlY2s6IHRydWVcbiAgICAgIH1cbiAgICB9KS5vdXRwdXRUZXh0O1xuXG4gICAgY29uc3QgZGVmaW5lSGVscGVyID0gKGJhc2U6IFJlY29yZDxzdHJpbmcsIGFueT4pID0+IG5ldyBEZWZpbmVDb25kaXRpb25hbChiYXNlKTtcbiAgICBjb25zdCBlbnZWYXJzID0gZ2V0TG9hZGVkRW52KHByb2plY3RSb290KTtcbiAgICBjb25zdCBwbGF0Zm9ybU9iaiA9IHtcbiAgICAgIC4uLnBsYXRmb3JtRW52LFxuICAgICAgbmFtZTogcGxhdGZvcm1FbnYucGxhdGZvcm0sXG4gICAgICB0b1N0cmluZzogKCkgPT4gcGxhdGZvcm1FbnYucGxhdGZvcm0sXG4gICAgICB2YWx1ZU9mOiAoKSA9PiBwbGF0Zm9ybUVudi5wbGF0Zm9ybVxuICAgIH07XG5cbiAgICBjb25zdCBiYXNlQ3R4ID0ge1xuICAgICAgLi4ucGxhdGZvcm1FbnYsXG4gICAgICBwbGF0Zm9ybTogcGxhdGZvcm1PYmosXG4gICAgICBlbnY6IGVudlZhcnMsXG4gICAgICBkZWZpbmU6IGRlZmluZUhlbHBlclxuICAgIH07XG4gICAgY29uc3QgdXNlckN0eCA9IHR5cGVvZiBleHRyYUNvbnRleHQgPT09ICdmdW5jdGlvbicgPyBleHRyYUNvbnRleHQoYmFzZUN0eCkgOiAoZXh0cmFDb250ZXh0ID8/IHt9KTtcbiAgICBjb25zdCBtYWNyb0N0eCA9IHtcbiAgICAgIC4uLmJhc2VDdHgsXG4gICAgICAuLi51c2VyQ3R4XG4gICAgfTtcblxuICAgIGNvbnN0IHZtQ29udGV4dCA9IHtcbiAgICAgIG1vZHVsZToge30sXG4gICAgICBleHBvcnRzOiB7fSxcbiAgICAgIF9fZmlsZW5hbWU6IGZpbGVuYW1lLFxuICAgICAgX19kaXJuYW1lOiBkaXIsXG4gICAgICByZXF1aXJlOiBjcmVhdGVSZXF1aXJlKHBhdGguam9pbihkaXIsICdkZWZpbmUtcGFnZS5tanMnKSksXG4gICAgICBjb25zb2xlLFxuICAgICAgVVJMLFxuICAgICAgVVJMU2VhcmNoUGFyYW1zLFxuICAgICAgc2V0VGltZW91dCxcbiAgICAgIGNsZWFyVGltZW91dCxcbiAgICAgIHNldEludGVydmFsLFxuICAgICAgY2xlYXJJbnRlcnZhbCxcbiAgICAgIHNldEltbWVkaWF0ZSxcbiAgICAgIGNsZWFySW1tZWRpYXRlLFxuICAgICAgZmV0Y2g6IChnbG9iYWxUaGlzIGFzIGFueSkuZmV0Y2gsXG4gICAgICBwcm9jZXNzLFxuICAgICAgUHJvbWlzZSxcbiAgICAgIGdsb2JhbDogZ2xvYmFsVGhpcyxcbiAgICAgIGdsb2JhbFRoaXMsXG4gICAgICAuLi5tYWNyb0N0eFxuICAgIH07XG5cbiAgICBjb25zdCBzY3JpcHQgPSBuZXcgdm0uU2NyaXB0KGpzQ29kZSwgeyBmaWxlbmFtZSB9KTtcbiAgICBzY3JpcHQucnVuSW5OZXdDb250ZXh0KHZtQ29udGV4dCwgeyB0aW1lb3V0OiAxNTAwMCB9KTtcblxuICAgIGNvbnN0IGV4cG9ydHNPYmogPSB2bUNvbnRleHQuZXhwb3J0cyBhcyBhbnk7XG4gICAgY29uc3QgcGFyc2VkID0gJ2RlZmF1bHQnIGluIGV4cG9ydHNPYmogPyBleHBvcnRzT2JqLmRlZmF1bHQgOiBleHBvcnRzT2JqO1xuXG4gICAgbGV0IHJlc3VsdDogYW55ID0gbnVsbDtcbiAgICBsZXQgdmFyaWFudHM6IEFycmF5PHsgcGxhdGZvcm06IHN0cmluZzsgcGFnZTogYW55IH0+IHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKHR5cGVvZiBwYXJzZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIDEuIFx1NTE0OFx1NjI2N1x1ODg0Q1x1NUY1M1x1NTI0RFx1NUU3M1x1NTNGMFx1NzY4NFx1NkM0Mlx1NTAzQ1x1RkYwOFx1NjUyRlx1NjMwMSBhc3luYyBcdTUxRkRcdTY1NzBcdTUzQ0EgUHJvbWlzZSBcdThGRDRcdTU2REVcdUZGMDlcbiAgICAgIHJlc3VsdCA9IGF3YWl0IHBhcnNlZChtYWNyb0N0eCk7XG5cbiAgICAgIC8vIFx1OTQ4OFx1NUJGOVx1NTFGRFx1NjU3MFx1NUYwRlx1NUI4Rlx1RkYwQ1x1NEUzQlx1NTJBOFx1NjMwOVx1NTE2OFx1N0FFRlx1OERFOFx1N0FFRlx1NzdFOVx1OTYzNVx1OEZEQlx1ODg0Q1x1OTc1OVx1NjAwMVx1OTFDN1x1NjgzN1x1NkM0Mlx1NTAzQ1x1RkYwOEFwcDogQW5kcm9pZC9pT1MvXHU5RTNGXHU4NDk5LCBXZWIvSDUsIFx1NUMwRlx1N0EwQlx1NUU4RjogXHU1RkFFXHU0RkUxL1x1NjUyRlx1NEVEOFx1NUI5RC9cdTc2N0VcdTVFQTYvXHU2Mjk2XHU5N0YzL1FRL1x1NUZFQlx1NjI0Qi9cdTk4REVcdTRFNjYvXHU0RUFDXHU0RTFDL1x1NUMwRlx1N0VBMlx1NEU2Ni8zNjAvXHU5RTNGXHU4NDk5XHU3QjQ5XHVGRjA5XHVGRjBDXG4gICAgICAvLyBcdTRFMDBcdTZCNjVcdTUyMzBcdTRGNERcdTYyQkRcdTUzRDZcdTUxRkFcdTU0MDRcdTdBRUZcdTc2ODRcdTVERUVcdTVGMDJcdTUzMTZcdTkxNERcdTdGNkVcdUZGMENcdTVGN0JcdTVFOTVcdTY3NUNcdTdFRERcdTRFMERcdTU0MENcdTVFNzNcdTUzRjBcdTdBREVcdTRFODlcdTU0MENcdTRFMDBcdTY4MDdcdTdCN0VcdTVCRkNcdTgxRjRcdTc2ODRcdTY3NjVcdTU2REVcdTg5ODZcdTUxOTlcdTdGRkJcdThGNkNcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFx1NTcyOFx1OERFOFx1N0FFRlx1NzdFOVx1OTYzNVx1OTFDN1x1NjgzN1x1OTYzNlx1NkJCNVx1OTc1OVx1OUVEOCBjb25zb2xlXHVGRjBDXHU5MDdGXHU1MTREXHU1QzA2XHU5ODc1XHU5NzYyXHU1MTg1XHU5MEU4XHU3Njg0IGNvbnNvbGUubG9nIFx1NjI1M1x1NTM3MCAxNSBcdTZCMjFcbiAgICAgICAgY29uc3QgcXVpZXRDb25zb2xlID0ge1xuICAgICAgICAgIC4uLmNvbnNvbGUsXG4gICAgICAgICAgbG9nOiAoKSA9PiB7fSxcbiAgICAgICAgICBpbmZvOiAoKSA9PiB7fSxcbiAgICAgICAgICBkZWJ1ZzogKCkgPT4ge30sXG4gICAgICAgICAgd2FybjogKCkgPT4ge30sXG4gICAgICAgICAgZXJyb3I6ICgpID0+IHt9XG4gICAgICAgIH07XG4gICAgICAgICh2bUNvbnRleHQgYXMgYW55KS5jb25zb2xlID0gcXVpZXRDb25zb2xlO1xuXG4gICAgICAgIGNvbnN0IHNhbXBsZWRQcm9taXNlcyA9IEFVVE9fRVZBTF9QTEFURk9STVMubWFwKGFzeW5jIChwKSA9PiB7XG4gICAgICAgICAgY29uc3QgcEVudiA9IGdldFBsYXRmb3JtRW52KHApO1xuICAgICAgICAgIGNvbnN0IHBQbGF0Zm9ybU9iaiA9IHtcbiAgICAgICAgICAgIC4uLnBFbnYsXG4gICAgICAgICAgICBuYW1lOiBwRW52LnBsYXRmb3JtLFxuICAgICAgICAgICAgdG9TdHJpbmc6ICgpID0+IHBFbnYucGxhdGZvcm0sXG4gICAgICAgICAgICB2YWx1ZU9mOiAoKSA9PiBwRW52LnBsYXRmb3JtXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBwQmFzZUN0eCA9IHtcbiAgICAgICAgICAgIC4uLnBFbnYsXG4gICAgICAgICAgICBwbGF0Zm9ybTogcFBsYXRmb3JtT2JqLFxuICAgICAgICAgICAgZW52OiBlbnZWYXJzLFxuICAgICAgICAgICAgZGVmaW5lOiBkZWZpbmVIZWxwZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IHBVc2VyQ3R4ID0gdHlwZW9mIGV4dHJhQ29udGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IGV4dHJhQ29udGV4dChwQmFzZUN0eCkgOiAoZXh0cmFDb250ZXh0ID8/IHt9KTtcbiAgICAgICAgICBjb25zdCBwQ3R4ID0ge1xuICAgICAgICAgICAgLi4ucEJhc2VDdHgsXG4gICAgICAgICAgICAuLi5wVXNlckN0eFxuICAgICAgICAgIH07XG4gICAgICAgICAgbGV0IHBSZXMgPSBwYXJzZWQocEN0eCk7XG4gICAgICAgICAgaWYgKHBSZXMgIT0gbnVsbCAmJiB0eXBlb2YgcFJlcy50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBwUmVzID0gYXdhaXQgcFJlcztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBSZXMgaW5zdGFuY2VvZiBEZWZpbmVDb25kaXRpb25hbCkge1xuICAgICAgICAgICAgcFJlcyA9IHBSZXMucmVzb2x2ZShwRW52LnBsYXRmb3JtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBSZXMgIT0gbnVsbCAmJiB0eXBlb2YgcFJlcyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocFJlcykpIHtcbiAgICAgICAgICAgIGlmIChwLnRvVXBwZXJDYXNlKCkgPT09ICdNUC1BTElQQVknIHx8IHAudG9VcHBlckNhc2UoKSA9PT0gJ01QJykge1xuICAgICAgICAgICAgICBub3JtYWxpemVDdXN0b21OYXZGb3JBbGlwYXkocFJlcyBhcyBhbnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgcGxhdGZvcm06IHAudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgICAgcGFnZTogcFJlc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzYW1wbGVkUmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHNhbXBsZWRQcm9taXNlcyk7XG4gICAgICAgIGNvbnN0IHZhbGlkU2FtcGxlZCA9IHNhbXBsZWRSZXN1bHRzLmZpbHRlcihCb29sZWFuKSBhcyBBcnJheTx7IHBsYXRmb3JtOiBzdHJpbmc7IHBhZ2U6IGFueSB9PjtcbiAgICAgICAgaWYgKHZhbGlkU2FtcGxlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmFyaWFudHMgPSB2YWxpZFNhbXBsZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhdGNoIHt9XG4gICAgICBmaW5hbGx5IHtcbiAgICAgICAgKHZtQ29udGV4dCBhcyBhbnkpLmNvbnNvbGUgPSBjb25zb2xlO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHBhcnNlZDtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ICE9IG51bGwgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCByZXN1bHQ7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIERlZmluZUNvbmRpdGlvbmFsKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQucmVzb2x2ZShwbGF0Zm9ybUVudi5wbGF0Zm9ybSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHsgX3NraXBQYWdlOiB0cnVlIH07XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCAhPSBudWxsICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgIGlmICh0eXBlb2YgcGFyc2VkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlc3VsdC5fa2VlcFR5cGUgPSB0cnVlO1xuICAgICAgICBpZiAodmFyaWFudHMgJiYgdmFyaWFudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJlc3VsdC5fdmFyaWFudHMgPSB2YXJpYW50cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oYFt1bmktcGFnZXNdIEZhaWxlZCB0byBldmFsdWF0ZSBkZWZpbmVQYWdlIGluICR7ZmlsZW5hbWV9OmAsIChlIGFzIEVycm9yKS5tZXNzYWdlKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKiogXHU4OUUzXHU2NzkwXHU5ODc1XHU5NzYyIG1ldGFcdUZGMUFcdTRGMThcdTUxNDggPHJvdXRlPiBcdTU3NTdcdUZGMENcdTUxNzZcdTZCMjEgZGVmaW5lUGFnZSAqL1xuYXN5bmMgZnVuY3Rpb24gcGFyc2VQYWdlTWV0YShcbiAgY29udGVudDogc3RyaW5nLFxuICBmaWxlbmFtZTogc3RyaW5nID0gJ3BhZ2UudXZ1ZScsXG4gIGN1cnJlbnRQbGF0Zm9ybTogc3RyaW5nID0gJycsXG4gIHByb2plY3RSb290OiBzdHJpbmcgPSBwcm9jZXNzLmN3ZCgpLFxuICBleHRyYUNvbnRleHQ/OiBVbmlQYWdlc1VzZXJDb250ZXh0XG4pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIGFueT4gfCBudWxsPiB7XG4gIGNvbnN0IHJvdXRlID0gcGFyc2VSb3V0ZUJsb2NrKGNvbnRlbnQpO1xuICBpZiAocm91dGUgIT0gbnVsbCkge1xuICAgIHJldHVybiByb3V0ZTtcbiAgfVxuICByZXR1cm4gYXdhaXQgcGFyc2VEZWZpbmVQYWdlKGNvbnRlbnQsIGZpbGVuYW1lLCBjdXJyZW50UGxhdGZvcm0sIHByb2plY3RSb290LCBleHRyYUNvbnRleHQpO1xufVxuXG4vKiogXHU1QjlBXHU0RjREIDxzY3JpcHQ+IFx1NTc1N1x1NTE4NVx1NUJCOVx1NTcyOFx1NjU3NFx1NEVGRFx1NkU5MFx1NzgwMVx1NEUyRFx1NzY4NFx1NTMzQVx1OTVGNFx1RkYwOGRlZmluZVBhZ2UgXHU2NjJGXHU4MTFBXHU2NzJDXHU3RUE3XHU1QjhGXHVGRjBDXHU2QTIxXHU2NzdGXHU5MUNDXHU3Njg0XHU1NDBDXHU1NDBEXHU2NTg3XHU2NzJDXHU0RTBEXHU2NjJGXHU1QjhGXHU4QzAzXHU3NTI4XHVGRjA5ICovXG5mdW5jdGlvbiBmaW5kU2NyaXB0QmxvY2tzKGNvZGU6IHN0cmluZyk6IEFycmF5PHsgc3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXIgfT4ge1xuICBjb25zdCBibG9ja3M6IEFycmF5PHsgc3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXIgfT4gPSBbXTtcbiAgY29uc3Qgb3BlblJlZ2V4ID0gLzxzY3JpcHRcXGJbXj5dKj4vZztcbiAgbGV0IG1hdGNoID0gb3BlblJlZ2V4LmV4ZWMoY29kZSk7XG4gIHdoaWxlIChtYXRjaCAhPSBudWxsKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aDtcbiAgICBjb25zdCBjbG9zZSA9IGNvZGUuaW5kZXhPZignPC9zY3JpcHQ+Jywgc3RhcnQpO1xuICAgIGlmIChjbG9zZSA9PT0gLTEpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBibG9ja3MucHVzaCh7IHN0YXJ0LCBlbmQ6IGNsb3NlIH0pO1xuICAgIG9wZW5SZWdleC5sYXN0SW5kZXggPSBjbG9zZTtcbiAgICBtYXRjaCA9IG9wZW5SZWdleC5leGVjKGNvZGUpO1xuICB9XG4gIHJldHVybiBibG9ja3M7XG59XG5cbi8qKlxuICogXHU3OUZCXHU5NjY0IGRlZmluZVBhZ2UoLi4uKSBcdTVCOEZcdThDMDNcdTc1MjhcdUZGMENcdTkwN0ZcdTUxNERcdThGRDBcdTg4NENcdTY1RjZcdTYyQTVcdTk1MTlcdUZGMUJcdTY3MkFcdTU0N0RcdTRFMkRcdTY1RjZcdThGRDRcdTU2REUgbnVsbFx1MzAwMlxuICpcbiAqIFx1NjQxQ1x1N0QyMlx1ODMwM1x1NTZGNFx1OTY1MFx1NUI5QVx1NTcyOCBbZnJvbSwgdG8pXHVGRjFBXHU4QzAzXHU3NTI4XHU2NUI5XHU0RjIwXHU1MTY1IDxzY3JpcHQ+IFx1NTc1N1x1NTMzQVx1OTVGNFx1NTQwRVx1RkYwQ1x1NkEyMVx1Njc3Rlx1NEUyRFx1NEY1Q1x1NEUzQVx1NjU4N1x1Njg2M1x1NUM1NVx1NzkzQVx1NzY4NFxuICogYGRlZmluZVBhZ2Uoey4uLn0pYCBcdTY1ODdcdTY3MkNcdTRFMERcdTRGMUFcdTg4QUJcdThCRUZcdTUyMjBcdUZGMDhcdTY2RkVcdTYyOEEgYEluZGV4Vmlldy51dnVlYCBcdThCRjRcdTY2MEVcdTUzNjFcdTcyNDdcdTkxQ0NcdTc2ODRcdTc5M0FcdTRGOEJcdTY1NzRcdTZCQjVcdTUyMjBcdTYzODlcdUZGMENcbiAqIFx1NzU1OVx1NEUwQlx1NEUwMFx1NEUyQVx1NTE4NVx1NUJCOVx1NEUzQVx1N0E3QVx1NzY4NCA8dGV4dD5cdUZGMDlcdTMwMDJcbiAqL1xuZnVuY3Rpb24gc3RyaXBEZWZpbmVQYWdlTWFjcm8oY29kZTogc3RyaW5nLCBmcm9tOiBudW1iZXIgPSAwLCB0bzogbnVtYmVyID0gY29kZS5sZW5ndGgpOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3Qgc2l0ZSA9IHNjYW5EZWZpbmVQYWdlQ2FsbChjb2RlLnNsaWNlKGZyb20sIHRvKSk7XG4gIGlmIChzaXRlID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxldCBzdGFydCA9IGZyb20gKyBzaXRlLnN0YXJ0O1xuICBsZXQgZW5kSWR4ID0gZnJvbSArIHNpdGUuY2xvc2VQYXJlbiArIDE7XG5cbiAgLy8gXHU1RjgwXHU1MjREXHU2RTA1XHU5NjY0XHU1OTFBXHU0RjU5XHU2MzYyXHU4ODRDXG4gIGlmIChzdGFydCA+IDAgJiYgY29kZVtzdGFydCAtIDFdID09PSAnXFxuJykge1xuICAgIHN0YXJ0LS07XG4gICAgaWYgKHN0YXJ0ID4gMCAmJiBjb2RlW3N0YXJ0IC0gMV0gPT09ICdcXHInKSB7XG4gICAgICBzdGFydC0tO1xuICAgIH1cbiAgfVxuICB3aGlsZSAoZW5kSWR4IDwgY29kZS5sZW5ndGggJiYgKGNvZGVbZW5kSWR4XSA9PT0gJ1xcbicgfHwgY29kZVtlbmRJZHhdID09PSAnXFxyJykpIHtcbiAgICBlbmRJZHgrKztcbiAgfVxuXG4gIHJldHVybiBjb2RlLnNsaWNlKDAsIHN0YXJ0KSArIGNvZGUuc2xpY2UoZW5kSWR4KTtcbn1cblxuLyoqIFx1OEJGQlx1NTNENiBUYWJiYXIgXHU3QjU2XHU3NTY1XHU2QTIxXHU1RjBGXHU5MTREXHU3RjZFXHVGRjA4MD1cdTY1RTBUYWJiYXIsIDE9XHU1MzlGXHU3NTFGVGFiYmFyLCAyPVx1ODFFQVx1NUI5QVx1NEU0OVRhYmJhclx1RkYwOSAqL1xuZnVuY3Rpb24gZ2V0VGFiYmFyTW9kZShwcm9qZWN0Um9vdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52LlZJVEVfVEFCQkFSX01PREUgIT0gbnVsbCAmJiBwcm9jZXNzLmVudi5WSVRFX1RBQkJBUl9NT0RFICE9PSAnJykge1xuICAgIHJldHVybiBwcm9jZXNzLmVudi5WSVRFX1RBQkJBUl9NT0RFLnRyaW0oKTtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGVudlBhdGggPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsICcuZW52Jyk7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoZW52UGF0aCkpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZW52UGF0aCwgJ3V0Zi04Jyk7XG4gICAgICBjb25zdCBtYXRjaCA9IGNvbnRlbnQubWF0Y2goL15WSVRFX1RBQkJBUl9NT0RFXFxzKj1cXHMqWydcIl0/KFteJ1wiXFxyXFxuXSspWydcIl0/L20pO1xuICAgICAgaWYgKG1hdGNoICE9IG51bGwgJiYgbWF0Y2hbMV0gIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbWF0Y2hbMV0udHJpbSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjYXRjaCB7XG4gICAgLy8gXHU1RkZEXHU3NTY1XHU1RjAyXHU1RTM4XG4gIH1cbiAgcmV0dXJuICcxJztcbn1cblxuLyoqIFx1NTIyNFx1NjVBRFx1NEUwMFx1NEUyQVx1N0VERFx1NUJGOVx1OERFRlx1NUY4NFx1NjYyRlx1NTQyNlx1NjYyRlx1OTcwMFx1ODk4MVx1ODlFNlx1NTNEMVx1OTFDRFx1NjVCMFx1NzUxRlx1NjIxMFx1NzY4NFx1OTg3NVx1OTc2Mlx1NjU4N1x1NEVGNlx1RkYwOFx1NEY5QiB3YXRjaGVyIFx1NzUyOFx1RkYwOSAqL1xuZnVuY3Rpb24gaXNQYWdlRmlsZShcbiAgZmlsZVBhdGg6IHN0cmluZyxcbiAgZGlyOiBzdHJpbmcsXG4gIHN1YlBhY2thZ2VzOiBzdHJpbmdbXSxcbiAgZXhjbHVkZTogc3RyaW5nW10sXG4gIHByb2plY3RSb290OiBzdHJpbmdcbik6IGJvb2xlYW4ge1xuICBjb25zdCBuID0gZmlsZVBhdGgucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xuICBpZiAoIW4uZW5kc1dpdGgoJy51dnVlJykgfHwgbi5pbmNsdWRlcygnPycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGFsbEV4Y2x1ZGVzID0gWy4uLkRFRkFVTFRfRVhDTFVERVMsIC4uLmV4Y2x1ZGVdO1xuICBjb25zdCByZWxQYXRoID0gcHJvamVjdFJvb3QgPyBwYXRoLnJlbGF0aXZlKHByb2plY3RSb290LCBmaWxlUGF0aCkucmVwbGFjZSgvXFxcXC9nLCAnLycpIDogbjtcbiAgZm9yIChsZXQgZSA9IDA7IGUgPCBhbGxFeGNsdWRlcy5sZW5ndGg7IGUrKykge1xuICAgIGlmIChtYXRjaEdsb2IocmVsUGF0aCwgYWxsRXhjbHVkZXNbZV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIFx1NUUyNiAvIFx1OEZCOVx1NzU0Q1x1NTMzOVx1OTE0RFx1RkYwQ1x1OTA3Rlx1NTE0RCBzcmMvcGFnZXMgXHU4QkVGXHU1MzM5XHU5MTREIHNyYy9wYWdlcy14eHhcbiAgaWYgKG4uaW5jbHVkZXMoYCR7ZGlyLnJlcGxhY2UoL1xcXFwvZywgJy8nKX0vYCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YlBhY2thZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG4uaW5jbHVkZXMoYCR7c3ViUGFja2FnZXNbaV0ucmVwbGFjZSgvXFxcXC9nLCAnLycpfS9gKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqIFx1ODFFQVx1NTJBOFx1NEUzQVx1NjUyRlx1NEVEOFx1NUI5RFx1NUMwRlx1N0EwQlx1NUU4Rlx1OTAwMlx1OTE0RFx1ODFFQVx1NUI5QVx1NEU0OVx1NUJGQ1x1ODIyQVx1NjgwRlx1RkYwOHRyYW5zcGFyZW50VGl0bGUgKyB0aXRsZVBlbmV0cmF0ZSArIGRlZmF1bHRUaXRsZVx1RkYwOSAqL1xuZnVuY3Rpb24gbm9ybWFsaXplQ3VzdG9tTmF2Rm9yQWxpcGF5KHA6IFBhZ2VDb25maWcpOiB2b2lkIHtcbiAgY29uc3QgdG9wTXBBbGlwYXkgPSAocCBhcyBhbnkpWydtcC1hbGlwYXknXTtcbiAgaWYgKHRvcE1wQWxpcGF5ICE9IG51bGwpIHtcbiAgICBwLnN0eWxlID0gcC5zdHlsZSA/PyB7fTtcbiAgICBwLnN0eWxlWydtcC1hbGlwYXknXSA9IHsgLi4uKHAuc3R5bGVbJ21wLWFsaXBheSddID8/IHt9KSwgLi4udG9wTXBBbGlwYXkgfTtcbiAgICBkZWxldGUgKHAgYXMgYW55KVsnbXAtYWxpcGF5J107XG4gIH1cbiAgaWYgKHAuc3R5bGU/Lm5hdmlnYXRpb25TdHlsZSA9PT0gJ2N1c3RvbScpIHtcbiAgICBwLnN0eWxlWydtcC1hbGlwYXknXSA9IHtcbiAgICAgIHRyYW5zcGFyZW50VGl0bGU6ICdhbHdheXMnLFxuICAgICAgdGl0bGVQZW5ldHJhdGU6ICdZRVMnLFxuICAgICAgZGVmYXVsdFRpdGxlOiAnJyxcbiAgICAgIC4uLihwLnN0eWxlWydtcC1hbGlwYXknXSA/PyB7fSlcbiAgICB9O1xuICB9XG59XG5cbi8qKiBcdTUyNjVcdTc5QkJcdTUxOTlcdTc2RDhcdTUyNERcdTc2ODRcdTUxODVcdTkwRThcdTRFMzRcdTY1RjZcdTY4MDdcdThCQjBcdTVDNUVcdTYwMjcgKi9cbmZ1bmN0aW9uIGNsZWFuVGVtcFByb3BzKHBhZ2U6IFBhZ2VDb25maWcsIGNsZWFuTWV0YTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gIGlmIChjbGVhbk1ldGEpIHtcbiAgICBkZWxldGUgKHBhZ2UgYXMgYW55KS5faGFzTWV0YTtcbiAgICBkZWxldGUgKHBhZ2UgYXMgYW55KS5fdmFyaWFudHM7XG4gIH1cbiAgZGVsZXRlIChwYWdlIGFzIGFueSkuX3NraXBQYWdlO1xuICBpZiAoKHBhZ2UgYXMgYW55KS5fa2VlcFR5cGUgIT09IHRydWUgJiYgKHBhZ2UgYXMgYW55KS50eXBlID09PSAnaG9tZScgJiYgKHBhZ2UgYXMgYW55KS5faXNTdGF0aWNNYWNybyA9PT0gdHJ1ZSkge1xuICAgIGRlbGV0ZSAocGFnZSBhcyBhbnkpLnR5cGU7XG4gIH1cbiAgZGVsZXRlIChwYWdlIGFzIGFueSkuX2lzU3RhdGljTWFjcm87XG4gIGRlbGV0ZSAocGFnZSBhcyBhbnkpLl9rZWVwVHlwZTtcbiAgZGVsZXRlIChwYWdlIGFzIGFueSkuZGVidWc7XG4gIGRlbGV0ZSAocGFnZSBhcyBhbnkpLmRlYnVnSG9tZTtcbiAgZGVsZXRlIChwYWdlIGFzIGFueSkub25seTtcbiAgZGVsZXRlIChwYWdlIGFzIGFueSkuaXNEZXY7XG59XG5cbmZ1bmN0aW9uIGxpbmVDb21tZW50KHZhbHVlOiBzdHJpbmcpOiBhbnkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdMaW5lQ29tbWVudCcsXG4gICAgdmFsdWUsXG4gICAgaW5saW5lOiBmYWxzZSxcbiAgICBsb2M6IHtcbiAgICAgIHN0YXJ0OiB7IGxpbmU6IDAsIGNvbHVtbjogMCB9LFxuICAgICAgZW5kOiB7IGxpbmU6IDAsIGNvbHVtbjogMCB9XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpc0dlbmVyYXRpb25NYXJrZXIodG9rZW46IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIHRva2VuXG4gICAgJiYgdG9rZW4udHlwZSAhPT0gJ0JsYW5rTGluZSdcbiAgICAmJiB0eXBlb2YgdG9rZW4udmFsdWUgPT09ICdzdHJpbmcnXG4gICAgJiYgdG9rZW4udmFsdWUudHJpbSgpLnN0YXJ0c1dpdGgoR0VORVJBVElPTl9NQVJLRVJfUFJFRklYKVxuICApO1xufVxuXG5mdW5jdGlvbiBzaW1wbGlmeVBsYXRmb3JtTGlzdChwbGF0Zm9ybXM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICBjb25zdCBzZXQgPSBuZXcgU2V0KHBsYXRmb3Jtcyk7XG5cbiAgLy8gMS4gXHU1OTgyXHU2NzlDXHU1MzA1XHU1NDJCXHU0RTg2XHU2MjQwXHU2NzA5XHU3Njg0IEFQUCBcdTVCNTBcdTVFNzNcdTUzRjBcdUZGMENcdTYyOThcdTUzRTBcdTU0MDhcdTVFNzZcdTRFM0FcdTkwMUFcdTc1MjhcdTc2ODQgQVBQXG4gIGlmIChBTExfQVBQX1BMQVRGT1JNUy5ldmVyeShwID0+IHNldC5oYXMocCkpKSB7XG4gICAgZm9yIChjb25zdCBwIG9mIEFMTF9BUFBfUExBVEZPUk1TKSB7XG4gICAgICBzZXQuZGVsZXRlKHApO1xuICAgIH1cbiAgICBzZXQuYWRkKCdBUFAnKTtcbiAgfVxuXG4gIC8vIDIuIFx1NTk4Mlx1Njc5Q1x1NTMwNVx1NTQyQlx1NEU4Nlx1NjI0MFx1NjcwOVx1NzY4NCBNUCBcdTVDMEZcdTdBMEJcdTVFOEZcdTVCNTBcdTVFNzNcdTUzRjBcdUZGMENcdTYyOThcdTUzRTBcdTU0MDhcdTVFNzZcdTRFM0FcdTkwMUFcdTc1MjhcdTc2ODQgTVBcbiAgaWYgKEFMTF9NUF9QTEFURk9STVMuZXZlcnkocCA9PiBzZXQuaGFzKHApKSkge1xuICAgIGZvciAoY29uc3QgcCBvZiBBTExfTVBfUExBVEZPUk1TKSB7XG4gICAgICBzZXQuZGVsZXRlKHApO1xuICAgIH1cbiAgICBzZXQuYWRkKCdNUCcpO1xuICB9XG5cbiAgLy8gMy4gXHU4OUM0XHU4MzAzXHU1MzE2IFdFQiAtPiBINVxuICBpZiAoc2V0LmhhcygnV0VCJykgJiYgc2V0LmhhcygnSDUnKSkge1xuICAgIHNldC5kZWxldGUoJ1dFQicpO1xuICB9XG5cbiAgcmV0dXJuIFsuLi5zZXRdLnNvcnQoKTtcbn1cblxuZnVuY3Rpb24gZXhwYW5kUGxhdGZvcm1Ub2tlbnModG9rZW5zOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICBmb3IgKGNvbnN0IHRva2VuIG9mIHRva2Vucykge1xuICAgIGlmICh0b2tlbiA9PT0gJ0FQUCcpIHtcbiAgICAgIHJlc3VsdC5wdXNoKC4uLkFMTF9BUFBfUExBVEZPUk1TKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodG9rZW4gPT09ICdNUCcpIHtcbiAgICAgIHJlc3VsdC5wdXNoKC4uLkFMTF9NUF9QTEFURk9STVMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKHRva2VuKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFsuLi5uZXcgU2V0KHJlc3VsdCldO1xufVxuXG5mdW5jdGlvbiBwbGF0Zm9ybXNFeGNsdWRpbmcocGxhdGZvcm1MaXN0OiBzdHJpbmcsIGN1cnJlbnRQbGF0Zm9ybTogc3RyaW5nKTogc3RyaW5nW10ge1xuICBjb25zdCByYXdUb2tlbnMgPSBwbGF0Zm9ybUxpc3RcbiAgICAuc3BsaXQoJ3x8JylcbiAgICAubWFwKHAgPT4gcC50cmltKCkpXG4gICAgLmZpbHRlcihCb29sZWFuKTtcbiAgY29uc3QgZXhwYW5kZWQgPSBleHBhbmRQbGF0Zm9ybVRva2VucyhyYXdUb2tlbnMpO1xuXG4gIGNvbnN0IHRvRXhjbHVkZSA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICB0b0V4Y2x1ZGUuYWRkKGN1cnJlbnRQbGF0Zm9ybSk7XG4gIGlmIChjdXJyZW50UGxhdGZvcm0gPT09ICdNUCcpIHtcbiAgICBBTExfTVBfUExBVEZPUk1TLmZvckVhY2gocCA9PiB0b0V4Y2x1ZGUuYWRkKHApKTtcbiAgfVxuICBpZiAoY3VycmVudFBsYXRmb3JtID09PSAnQVBQJykge1xuICAgIEFMTF9BUFBfUExBVEZPUk1TLmZvckVhY2gocCA9PiB0b0V4Y2x1ZGUuYWRkKHApKTtcbiAgfVxuXG4gIGNvbnN0IHJlbWFpbmluZyA9IGV4cGFuZGVkLmZpbHRlcihwID0+ICF0b0V4Y2x1ZGUuaGFzKHApKTtcbiAgcmV0dXJuIHNpbXBsaWZ5UGxhdGZvcm1MaXN0KHJlbWFpbmluZyk7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RMYXN0UGxhdGZvcm1zKHNyYzogYW55LCBjdXJyZW50UGxhdGZvcm06IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgbGV0IGxhc3RQbGF0Zm9ybXM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IGJlZm9yZTAgPSBzcmMgPyBzcmNbU3ltYm9sLmZvcignYmVmb3JlOjAnKV0gOiB1bmRlZmluZWQ7XG4gIGlmIChBcnJheS5pc0FycmF5KGJlZm9yZTApKSB7XG4gICAgZm9yIChjb25zdCBjb21tZW50IG9mIGJlZm9yZTApIHtcbiAgICAgIGlmIChjb21tZW50ICYmIGNvbW1lbnQudHlwZSAhPT0gJ0JsYW5rTGluZScgJiYgdHlwZW9mIGNvbW1lbnQudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IHRyaW1tZWQgPSBjb21tZW50LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgaWYgKHRyaW1tZWQuc3RhcnRzV2l0aChHRU5FUkFUSU9OX01BUktFUl9QUkVGSVgpKSB7XG4gICAgICAgICAgbGFzdFBsYXRmb3JtcyA9IHBsYXRmb3Jtc0V4Y2x1ZGluZyh0cmltbWVkLnNsaWNlKEdFTkVSQVRJT05fTUFSS0VSX1BSRUZJWC5sZW5ndGgpLCBjdXJyZW50UGxhdGZvcm0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBsYXN0UGxhdGZvcm1zO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlGb3JDb21wYXJlPFQgZXh0ZW5kcyBvYmplY3Q+KHZhbDogVCk6IHN0cmluZyB7XG4gIGlmICh2YWwgIT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IHsgdHlwZTogX3R5cGUsIF92YXJpYW50czogX3ZhciwgLi4ucmVzdCB9ID0gdmFsIGFzIGFueTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzdCk7XG4gIH1cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbCk7XG59XG5cbmZ1bmN0aW9uIGhvbWVTdGF0dXNDb21wYXRpYmxlKGE6IGFueSwgYjogYW55KTogYm9vbGVhbiB7XG4gIGNvbnN0IHR5cGVBID0gYT8udHlwZTtcbiAgY29uc3QgdHlwZUIgPSBiPy50eXBlO1xuICByZXR1cm4gdHlwZUEgPT09IHVuZGVmaW5lZCB8fCB0eXBlQiA9PT0gdW5kZWZpbmVkIHx8IHR5cGVBID09PSB0eXBlQjtcbn1cblxuZnVuY3Rpb24gdXBzZXJ0Q3VycmVudFZhcmlhbnQ8UD4oXG4gIHZhcmlhbnRzOiBQbGF0Zm9ybVZhcmlhbnQ8UD5bXSxcbiAgcGF5bG9hZDogUCxcbiAgdmFsdWVTdHI6IHN0cmluZyxcbiAgY3VycmVudFBsYXRmb3JtOiBzdHJpbmcsXG4gIGNvbXBhdGlibGU/OiAoYTogUCwgYjogUCkgPT4gYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IGlzU2FtZSA9ICh2YXJpYW50OiBQbGF0Zm9ybVZhcmlhbnQ8UD4pOiBib29sZWFuID0+XG4gICAgdmFyaWFudC52YWx1ZVN0ciA9PT0gdmFsdWVTdHIgJiYgKGNvbXBhdGlibGUgPyBjb21wYXRpYmxlKHZhcmlhbnQucGF5bG9hZCwgcGF5bG9hZCkgOiB0cnVlKTtcblxuICBpZiAodmFyaWFudHMuc29tZSh2YXJpYW50ID0+IHZhcmlhbnQucGxhdGZvcm1zID09PSBudWxsICYmIGlzU2FtZSh2YXJpYW50KSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBlcXVhbCA9IHZhcmlhbnRzLmZpbmQoKHZhcmlhbnQpOiB2YXJpYW50IGlzIFBsYXRmb3JtVmFyaWFudDxQPiAmIHsgcGxhdGZvcm1zOiBzdHJpbmdbXSB9ID0+XG4gICAgdmFyaWFudC5wbGF0Zm9ybXMgIT09IG51bGwgJiYgaXNTYW1lKHZhcmlhbnQpXG4gICk7XG4gIGlmIChlcXVhbCkge1xuICAgIGlmICghZXF1YWwucGxhdGZvcm1zLmluY2x1ZGVzKGN1cnJlbnRQbGF0Zm9ybSkpIHtcbiAgICAgIGVxdWFsLnBsYXRmb3Jtcy5wdXNoKGN1cnJlbnRQbGF0Zm9ybSk7XG4gICAgICBlcXVhbC5wbGF0Zm9ybXMgPSBzaW1wbGlmeVBsYXRmb3JtTGlzdChlcXVhbC5wbGF0Zm9ybXMpO1xuICAgICAgZXF1YWwucGxhdGZvcm1TdHIgPSBlcXVhbC5wbGF0Zm9ybXMuam9pbignIHx8ICcpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBwbGF0Zm9ybXMgPSBzaW1wbGlmeVBsYXRmb3JtTGlzdChbY3VycmVudFBsYXRmb3JtXSk7XG4gIHZhcmlhbnRzLnB1c2goe1xuICAgIHBheWxvYWQsXG4gICAgdmFsdWVTdHIsXG4gICAgcGxhdGZvcm1zLFxuICAgIHBsYXRmb3JtU3RyOiBwbGF0Zm9ybXMuam9pbignIHx8ICcpXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzb3J0VmFyaWFudHM8UD4odmFyaWFudHM6IFBsYXRmb3JtVmFyaWFudDxQPltdKTogdm9pZCB7XG4gIHZhcmlhbnRzLnNvcnQoKGEsIGIpID0+IChhLnBsYXRmb3JtU3RyIDwgYi5wbGF0Zm9ybVN0ciA/IC0xIDogYS5wbGF0Zm9ybVN0ciA+IGIucGxhdGZvcm1TdHIgPyAxIDogMCkpO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0VmFyaWFudFBsYXRmb3JtczxQPihtZXJnZWRNYXA6IE1hcDxzdHJpbmcsIFBsYXRmb3JtVmFyaWFudDxQPltdPik6IFNldDxzdHJpbmc+IHtcbiAgY29uc3QgcGxhdGZvcm1zID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGZvciAoY29uc3QgdmFyaWFudHMgb2YgbWVyZ2VkTWFwLnZhbHVlcygpKSB7XG4gICAgZm9yIChjb25zdCB7IHBsYXRmb3JtczogdmFyaWFudFBsYXRmb3JtcyB9IG9mIHZhcmlhbnRzKSB7XG4gICAgICBpZiAodmFyaWFudFBsYXRmb3Jtcykge1xuICAgICAgICBmb3IgKGNvbnN0IHBsYXRmb3JtIG9mIHZhcmlhbnRQbGF0Zm9ybXMpIHtcbiAgICAgICAgICBwbGF0Zm9ybXMuYWRkKHBsYXRmb3JtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcGxhdGZvcm1zO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlUGxhdGZvcm1VbmlvbjxQPihcbiAgbWVyZ2VkTWFwOiBNYXA8c3RyaW5nLCBQbGF0Zm9ybVZhcmlhbnQ8UD5bXT4sXG4gIGN1cnJlbnRQbGF0Zm9ybTogc3RyaW5nLFxuICBsYXN0UGxhdGZvcm1zOiBzdHJpbmdbXSxcbiAgZXh0cmFQbGF0Zm9ybXM6IHN0cmluZ1tdID0gW11cbik6IHN0cmluZ1tdIHtcbiAgY29uc3QgdW5pb24gPSBuZXcgU2V0PHN0cmluZz4oW1xuICAgIGN1cnJlbnRQbGF0Zm9ybSxcbiAgICAuLi5sYXN0UGxhdGZvcm1zLFxuICAgIC4uLmV4dHJhUGxhdGZvcm1zLFxuICAgIC4uLmNvbGxlY3RWYXJpYW50UGxhdGZvcm1zKG1lcmdlZE1hcClcbiAgXSk7XG4gIHJldHVybiBzaW1wbGlmeVBsYXRmb3JtTGlzdChbLi4udW5pb25dKTtcbn1cblxuLyoqXG4gKiBcdTc4NkVcdTRGRERcdTU0MDRcdTk4NzVcdTk3NjJcdTc2ODRcdTU5MUFcdTdBRUZcdTUzRDhcdTRGNTNcdTgwRkRcdTVCOENcdTUxNjhcdTg5ODZcdTc2RDZcdTc2RUVcdTY4MDdcdTVFNzNcdTUzRjBcdTUxNjhcdTk2QzZcdUZGMDhcdTVDMjRcdTUxNzZcdTY2MkYgQVBQXHVGRjA5XHUzMDAyXG4gKiBcdTU5ODJcdTY3OUNcdTY3RDBcdTRFMkFcdTUzRDhcdTRGNTNcdTY2MkZcdTc1MzFcdTk3NUUgV2ViIFx1NUU3M1x1NTNGMFx1RkYwOFx1NTk4MiBNUC1XRUlYSU5cdUZGMDlcdTc1MUZcdTYyMTBcdTc2ODRcdTkwMUFcdTc1MjhcdTk4NzlcdUZGMENcdTgwMEMgQVBQIFx1NUMxQVx1NjcyQVx1NzJFQ1x1N0FDQlx1OEZEMFx1ODg0Q1x1OEZDN1x1RkYwQ1xuICogXHU1RkM1XHU5ODdCXHU1QzA2IEFQUCBcdTUxNUNcdTVFOTVcdTU0MDhcdTVFNzZcdTgxRjNcdThCRTVcdTkwMUFcdTc1MjhcdTUzRDhcdTRGNTNcdTRFMkRcdUZGMDhcdTU5ODIgQVBQIHx8IE1QLVdFSVhJTlx1RkYwOVx1RkYwQ1xuICogXHU1RjdCXHU1RTk1XHU5NjMyXHU2QjYyIEFwcC1BbmRyb2lkL2lPUyBcdTUzOUZcdTc1MUZcdTdGMTZcdThCRDFcdTU2NjhcdTU3MjhcdTUyQTBcdThGN0QgcGFnZXMuanNvbiBcdTY1RjZcdTU2RTBcdTdGM0FcdTU5MzEgQXBwIFx1NUJGOVx1NUU5NFx1OTg3NVx1OTc2Mlx1ODAwQ1x1NjJBNVx1OTUxOVx1MzAwMlxuICovXG5mdW5jdGlvbiBlbnN1cmVBbGxQbGF0Zm9ybXNDb3ZlcmVkPFQgZXh0ZW5kcyBvYmplY3Q+KFxuICBtZXJnZWRNYXA6IE1hcDxzdHJpbmcsIE11bHRpUGxhdGZvcm1JdGVtPFQ+W10+LFxuICBwbGF0Zm9ybVVuaW9uOiBzdHJpbmdbXVxuKTogdm9pZCB7XG4gIGZvciAoY29uc3QgbGlzdCBvZiBtZXJnZWRNYXAudmFsdWVzKCkpIHtcbiAgICBpZiAobGlzdC5sZW5ndGggPD0gMSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IGNvdmVyZWQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaWYgKGl0ZW0ucGxhdGZvcm1zKSB7XG4gICAgICAgIGZvciAoY29uc3QgcCBvZiBpdGVtLnBsYXRmb3Jtcykge1xuICAgICAgICAgIGNvdmVyZWQuYWRkKHApO1xuICAgICAgICAgIGlmIChwID09PSAnQVBQJykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBhcHAgb2YgQUxMX0FQUF9QTEFURk9STVMpIHtcbiAgICAgICAgICAgICAgY292ZXJlZC5hZGQoYXBwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHAgPT09ICdNUCcpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXAgb2YgQUxMX01QX1BMQVRGT1JNUykge1xuICAgICAgICAgICAgICBjb3ZlcmVkLmFkZChtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWlzc2luZyA9IHBsYXRmb3JtVW5pb24uZmlsdGVyKChwKSA9PiB7XG4gICAgICBpZiAoY292ZXJlZC5oYXMocCkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIGlmIChwID09PSAnQVBQJyAmJiBBTExfQVBQX1BMQVRGT1JNUy5zb21lKGFwcCA9PiBjb3ZlcmVkLmhhcyhhcHApKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKHAgPT09ICdNUCcgJiYgQUxMX01QX1BMQVRGT1JNUy5zb21lKG1wID0+IGNvdmVyZWQuaGFzKG1wKSkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIGlmIChtaXNzaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gXHU0RjE4XHU1MTQ4XHU1QzA2XHU3RjNBXHU1OTMxXHU1RTczXHU1M0YwXHVGRjA4XHU1OTgyIEFQUFx1RkYwOVx1NjMwMlx1OEY3RFx1ODFGM1x1OTc1RSBINS9XRUIgXHU3Njg0XHU5MDFBXHU3NTI4XHU1M0Q4XHU0RjUzXHU0RTJEXG4gICAgbGV0IHRhcmdldFZhcmlhbnQgPSBsaXN0LmZpbmQodiA9PiB2LnBsYXRmb3JtcyAmJiAhdi5wbGF0Zm9ybXMuaW5jbHVkZXMoJ0g1JykgJiYgIXYucGxhdGZvcm1zLmluY2x1ZGVzKCdXRUInKSk7XG4gICAgaWYgKCF0YXJnZXRWYXJpYW50KSB7XG4gICAgICB0YXJnZXRWYXJpYW50ID0gbGlzdFtsaXN0Lmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRWYXJpYW50ICYmIHRhcmdldFZhcmlhbnQucGxhdGZvcm1zKSB7XG4gICAgICBmb3IgKGNvbnN0IG0gb2YgbWlzc2luZykge1xuICAgICAgICBpZiAoIXRhcmdldFZhcmlhbnQucGxhdGZvcm1zLmluY2x1ZGVzKG0pKSB7XG4gICAgICAgICAgdGFyZ2V0VmFyaWFudC5wbGF0Zm9ybXMucHVzaChtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGFyZ2V0VmFyaWFudC5wbGF0Zm9ybXMgPSBzaW1wbGlmeVBsYXRmb3JtTGlzdCh0YXJnZXRWYXJpYW50LnBsYXRmb3Jtcyk7XG4gICAgICB0YXJnZXRWYXJpYW50LnBsYXRmb3JtU3RyID0gdGFyZ2V0VmFyaWFudC5wbGF0Zm9ybXMuam9pbignIHx8ICcpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFx1NjgyMVx1OUE4Q1x1OTg3NVx1OTc2Mlx1NUJGOVx1NUU5NFx1NzY4NFx1NzI2OVx1NzQwNlx1NjU4N1x1NEVGNlx1NjYyRlx1NTQyNlx1NUI1OFx1NTcyOFx1NEU4RVx1NzhDMVx1NzZEOFx1NEUwQVx1MzAwMlxuICogXHU2NTJGXHU2MzAxXHU0RTNCXHU1MzA1XHU0RTBFXHU1MjA2XHU1MzA1XHU4REVGXHU1Rjg0XHU2ODNDXHU1RjBGXHVGRjBDXHU1MTdDXHU1QkI5IC51dnVlXHUzMDAxLnZ1ZSBcdTUzQ0EgL2luZGV4IFx1NzZFRVx1NUY1NVx1N0VBNlx1NUI5QVx1MzAwMlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQYWdlUGh5c2ljYWxGaWxlRXhpc3RlZChcbiAgcGFnZVBhdGg6IHN0cmluZyxcbiAgcm9vdERpcjogc3RyaW5nID0gJycsXG4gIHByb2plY3RSb290OiBzdHJpbmcgPSBwcm9jZXNzLmN3ZCgpXG4pOiBib29sZWFuIHtcbiAgaWYgKCFwYWdlUGF0aCB8fCB0eXBlb2YgcGFnZVBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBwYWdlUGF0aC5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgY29uc3QgY2FuZGlkYXRlczogc3RyaW5nW10gPSBbXTtcblxuICBpZiAocm9vdERpcikge1xuICAgIGNvbnN0IG5vcm1Sb290ID0gcm9vdERpci5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgICBjYW5kaWRhdGVzLnB1c2goXG4gICAgICBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsIG5vcm1Sb290LCBgJHtub3JtYWxpemVkfS51dnVlYCksXG4gICAgICBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsIG5vcm1Sb290LCBgJHtub3JtYWxpemVkfS52dWVgKSxcbiAgICAgIHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgbm9ybVJvb3QsIGAke25vcm1hbGl6ZWR9L2luZGV4LnV2dWVgKSxcbiAgICAgIHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgbm9ybVJvb3QsIGAke25vcm1hbGl6ZWR9L2luZGV4LnZ1ZWApXG4gICAgKTtcbiAgfVxuXG4gIGNhbmRpZGF0ZXMucHVzaChcbiAgICBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsIGAke25vcm1hbGl6ZWR9LnV2dWVgKSxcbiAgICBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsIGAke25vcm1hbGl6ZWR9LnZ1ZWApLFxuICAgIHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgYCR7bm9ybWFsaXplZH0vaW5kZXgudXZ1ZWApLFxuICAgIHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgYCR7bm9ybWFsaXplZH0vaW5kZXgudnVlYClcbiAgKTtcblxuICByZXR1cm4gY2FuZGlkYXRlcy5zb21lKGZpbGVQYXRoID0+IGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlUGxhdGZvcm1JdGVtczxUIGV4dGVuZHMgb2JqZWN0PihcbiAgc291cmNlOiBhbnksXG4gIGN1cnJlbnRQbGF0Zm9ybTogc3RyaW5nLFxuICBpdGVtczogVFtdLFxuICB1bmlxdWVLZXlOYW1lOiBzdHJpbmcsXG4gIHNhbmRib3hBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZSxcbiAgZXh0cmFQbGF0Zm9ybXM6IHN0cmluZ1tdID0gW10sXG4gIHJvb3REaXI6IHN0cmluZyA9ICcnLFxuICBwcm9qZWN0Um9vdDogc3RyaW5nID0gcHJvY2Vzcy5jd2QoKSxcbiAgc3RyaWN0S2V5czogYm9vbGVhbiA9IGZhbHNlXG4pOiBNZXJnZWRQbGF0Zm9ybUl0ZW1zIHtcbiAgY29uc3Qgc3JjID0gc291cmNlIHx8IG5ldyBDb21tZW50QXJyYXkoKTtcbiAgY3VycmVudFBsYXRmb3JtID0gY3VycmVudFBsYXRmb3JtLnRvVXBwZXJDYXNlKCk7XG5cbiAgY29uc3QgbGFzdFBsYXRmb3JtcyA9IGV4dHJhY3RMYXN0UGxhdGZvcm1zKHNyYywgY3VycmVudFBsYXRmb3JtKTtcbiAgY29uc3QgaXRlbXNLZXlTZXQgPSBuZXcgU2V0KGl0ZW1zLm1hcChpdGVtID0+IChpdGVtIGFzIGFueSlbdW5pcXVlS2V5TmFtZV0pKTtcbiAgY29uc3QgYWxsb3dlZEtleXMgPSBzYW5kYm94QWN0aXZlIHx8IHN0cmljdEtleXMgPyBpdGVtc0tleVNldCA6IG51bGw7XG4gIGNvbnN0IGZ1bGxNYWNyb0tleXMgPSBuZXcgU2V0KFxuICAgIGl0ZW1zXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gKEFycmF5LmlzQXJyYXkoKGl0ZW0gYXMgYW55KS5fdmFyaWFudHMpICYmIChpdGVtIGFzIGFueSkuX3ZhcmlhbnRzLmxlbmd0aCA+IDApIHx8IChpdGVtIGFzIGFueSkuX2hhc01ldGEgPT09IHRydWUpXG4gICAgICAubWFwKGl0ZW0gPT4gKGl0ZW0gYXMgYW55KVt1bmlxdWVLZXlOYW1lXSlcbiAgKTtcblxuICBjb25zdCBtZXJnZWRNYXAgPSBuZXcgTWFwPHN0cmluZywgTXVsdGlQbGF0Zm9ybUl0ZW08VD5bXT4oKTtcbiAgY29uc3QgdmFyaWFudHNPZiA9ICh1bmlxdWVLZXk6IHN0cmluZyk6IE11bHRpUGxhdGZvcm1JdGVtPFQ+W10gPT4ge1xuICAgIGxldCBsaXN0ID0gbWVyZ2VkTWFwLmdldCh1bmlxdWVLZXkpO1xuICAgIGlmICghbGlzdCkge1xuICAgICAgbGlzdCA9IFtdO1xuICAgICAgbWVyZ2VkTWFwLnNldCh1bmlxdWVLZXksIGxpc3QpO1xuICAgIH1cbiAgICByZXR1cm4gbGlzdDtcbiAgfTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBzcmNbaV0gYXMgYW55O1xuICAgIGNvbnN0IHVuaXF1ZUtleSA9IGl0ZW0/Llt1bmlxdWVLZXlOYW1lXTtcbiAgICBpZiAoIXVuaXF1ZUtleSlcbiAgICAgIGNvbnRpbnVlO1xuICAgIGlmIChhbGxvd2VkS2V5cyAmJiAhYWxsb3dlZEtleXMuaGFzKHVuaXF1ZUtleSkpXG4gICAgICBjb250aW51ZTtcbiAgICBpZiAoZnVsbE1hY3JvS2V5cy5oYXModW5pcXVlS2V5KSlcbiAgICAgIGNvbnRpbnVlO1xuXG4gICAgLy8gXHU1OTgyXHU2NzlDXHU4QkU1XHU5ODc5XHU0RTBEXHU1NzI4XHU1RjUzXHU1MjREXHU2Nzg0XHU1RUZBXHU2NUIwXHU3NTFGXHU2MjEwXHU3Njg0IGl0ZW1zIFx1NEUyRFx1RkYwQ1x1NEUxNFx1NzhDMVx1NzZEOFx1NEUwQVx1NzI2OVx1NzQwNlx1NjU4N1x1NEVGNlx1NURGMlx1NEUwRFx1NUI1OFx1NTcyOFx1RkYwQ1x1NTIxOVx1ODlDNlx1NEUzQVx1NURGMlx1NTIyMFx1OTY2NFx1OTg3NVx1OTc2Mlx1RkYwQ1x1NEUwRFx1NEZERFx1NzU1OVx1NUU3RFx1NzA3NVx1NTNEOFx1NEY1M1xuICAgIGlmICghaXRlbXNLZXlTZXQuaGFzKHVuaXF1ZUtleSkgJiYgIWlzUGFnZVBoeXNpY2FsRmlsZUV4aXN0ZWQodW5pcXVlS2V5LCByb290RGlyLCBwcm9qZWN0Um9vdCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGJlZm9yZUNvbW1lbnRzID0gc3JjW1N5bWJvbC5mb3IoYGJlZm9yZToke2l9YCldIGFzIGFueVtdIHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0IGNvbmRpdGlvbmFsQ29tbWVudCA9IGJlZm9yZUNvbW1lbnRzPy5maW5kKFxuICAgICAgYyA9PiBjICYmIGMudHlwZSAhPT0gJ0JsYW5rTGluZScgJiYgdHlwZW9mIGMudmFsdWUgPT09ICdzdHJpbmcnICYmIC9eIyg/OmlmZGVmfGlmbmRlZikvLnRlc3QoYy52YWx1ZS50cmltKCkpXG4gICAgKTtcblxuICAgIGlmIChjb25kaXRpb25hbENvbW1lbnQ/LnZhbHVlLnRyaW0oKS5zdGFydHNXaXRoKCcjaWZuZGVmJykpIHtcbiAgICAgIHZhcmlhbnRzT2YodW5pcXVlS2V5KS5wdXNoKHtcbiAgICAgICAgcGF5bG9hZDogaXRlbSxcbiAgICAgICAgdmFsdWVTdHI6IHN0cmluZ2lmeUZvckNvbXBhcmUoaXRlbSksXG4gICAgICAgIHBsYXRmb3JtczogbnVsbCxcbiAgICAgICAgcGxhdGZvcm1TdHI6ICcnLFxuICAgICAgICBwYXNzdGhyb3VnaDoge1xuICAgICAgICAgIGJlZm9yZTogWy4uLihiZWZvcmVDb21tZW50cyB8fCBbXSldLmZpbHRlcihjID0+ICFpc0dlbmVyYXRpb25NYXJrZXIoYykpLFxuICAgICAgICAgIGFmdGVyOiBbbGluZUNvbW1lbnQoJyAjZW5kaWYnKV1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBsZXQgcGxhdGZvcm1zOiBzdHJpbmdbXSA9IFsuLi5sYXN0UGxhdGZvcm1zXTtcbiAgICBpZiAoY29uZGl0aW9uYWxDb21tZW50KSB7XG4gICAgICBjb25zdCBtYXRjaCA9IGNvbmRpdGlvbmFsQ29tbWVudC52YWx1ZS5tYXRjaCgvI2lmZGVmXFxzKyguKykvKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBwbGF0Zm9ybXMgPSBwbGF0Zm9ybXNFeGNsdWRpbmcobWF0Y2hbMV0sIGN1cnJlbnRQbGF0Zm9ybSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBsYXRmb3Jtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhcmlhbnRzT2YodW5pcXVlS2V5KS5wdXNoKHtcbiAgICAgIHBheWxvYWQ6IGl0ZW0sXG4gICAgICB2YWx1ZVN0cjogc3RyaW5naWZ5Rm9yQ29tcGFyZShpdGVtKSxcbiAgICAgIHBsYXRmb3JtcyxcbiAgICAgIHBsYXRmb3JtU3RyOiBwbGF0Zm9ybXMuam9pbignIHx8ICcpXG4gICAgfSk7XG4gIH1cblxuICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICBjb25zdCB1bmlxdWVLZXkgPSAoaXRlbSBhcyBhbnkpW3VuaXF1ZUtleU5hbWVdO1xuICAgIGlmICghdW5pcXVlS2V5KVxuICAgICAgY29udGludWU7XG4gICAgY29uc3QgdmFyaWFudHNMaXN0ID0gKGl0ZW0gYXMgYW55KS5fdmFyaWFudHM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFyaWFudHNMaXN0KSAmJiB2YXJpYW50c0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChjb25zdCB2IG9mIHZhcmlhbnRzTGlzdCkge1xuICAgICAgICBjb25zdCB2UGF5bG9hZCA9IHsgLi4uaXRlbSwgLi4udi5wYWdlIH07XG4gICAgICAgIGRlbGV0ZSAodlBheWxvYWQgYXMgYW55KS5fdmFyaWFudHM7XG4gICAgICAgIGlmICh2LnBsYXRmb3JtLmluY2x1ZGVzKCdNUC1BTElQQVknKSB8fCB2LnBsYXRmb3JtID09PSAnTVAnKSB7XG4gICAgICAgICAgbm9ybWFsaXplQ3VzdG9tTmF2Rm9yQWxpcGF5KHZQYXlsb2FkIGFzIGFueSk7XG4gICAgICAgIH1cbiAgICAgICAgY2xlYW5UZW1wUHJvcHModlBheWxvYWQgYXMgYW55LCB0cnVlKTtcbiAgICAgICAgdXBzZXJ0Q3VycmVudFZhcmlhbnQoXG4gICAgICAgICAgdmFyaWFudHNPZih1bmlxdWVLZXkpLFxuICAgICAgICAgIHZQYXlsb2FkLFxuICAgICAgICAgIHN0cmluZ2lmeUZvckNvbXBhcmUodlBheWxvYWQpLFxuICAgICAgICAgIHYucGxhdGZvcm0sXG4gICAgICAgICAgaG9tZVN0YXR1c0NvbXBhdGlibGVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBjbGVhbkl0ZW0gPSB7IC4uLml0ZW0gfTtcbiAgICAgIGRlbGV0ZSAoY2xlYW5JdGVtIGFzIGFueSkuX3ZhcmlhbnRzO1xuICAgICAgaWYgKGN1cnJlbnRQbGF0Zm9ybS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKCdNUC1BTElQQVknKSB8fCBjdXJyZW50UGxhdGZvcm0udG9VcHBlckNhc2UoKSA9PT0gJ01QJykge1xuICAgICAgICBub3JtYWxpemVDdXN0b21OYXZGb3JBbGlwYXkoY2xlYW5JdGVtIGFzIGFueSk7XG4gICAgICB9XG4gICAgICBjbGVhblRlbXBQcm9wcyhjbGVhbkl0ZW0gYXMgYW55LCB0cnVlKTtcbiAgICAgIHVwc2VydEN1cnJlbnRWYXJpYW50KHZhcmlhbnRzT2YodW5pcXVlS2V5KSwgY2xlYW5JdGVtLCBzdHJpbmdpZnlGb3JDb21wYXJlKGNsZWFuSXRlbSksIGN1cnJlbnRQbGF0Zm9ybSwgaG9tZVN0YXR1c0NvbXBhdGlibGUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBsYXRmb3JtVW5pb24gPSByZXNvbHZlUGxhdGZvcm1VbmlvbihtZXJnZWRNYXAsIGN1cnJlbnRQbGF0Zm9ybSwgbGFzdFBsYXRmb3JtcywgZXh0cmFQbGF0Zm9ybXMpO1xuICBlbnN1cmVBbGxQbGF0Zm9ybXNDb3ZlcmVkKG1lcmdlZE1hcCwgcGxhdGZvcm1Vbmlvbik7XG5cbiAgY29uc3QgcmVzdWx0ID0gbmV3IENvbW1lbnRBcnJheSgpO1xuICBjb25zdCByZXNBcnJheTogYW55ID0gcmVzdWx0O1xuICBmb3IgKGNvbnN0IHZhcmlhbnRzIG9mIG1lcmdlZE1hcC52YWx1ZXMoKSkge1xuICAgIHNvcnRWYXJpYW50cyh2YXJpYW50cyk7XG4gIH1cblxuICBjb25zdCBwbGF0Zm9ybVVuaW9uU3RyID0gcGxhdGZvcm1Vbmlvbi5qb2luKCcgfHwgJyk7XG4gIGNvbnN0IG93bmluZ1BsYXRmb3JtcyA9IGNvbGxlY3RWYXJpYW50UGxhdGZvcm1zKG1lcmdlZE1hcCk7XG5cbiAgcmVzQXJyYXlbU3ltYm9sLmZvcignYmVmb3JlOjAnKV0gPSBbbGluZUNvbW1lbnQoYCAke0dFTkVSQVRJT05fTUFSS0VSX1BSRUZJWH0gJHtwbGF0Zm9ybVVuaW9uU3RyfWApXTtcblxuICBmb3IgKGNvbnN0IFtfLCBsaXN0XSBvZiBtZXJnZWRNYXApIHtcbiAgICBmb3IgKGNvbnN0IHsgcGF5bG9hZDogaXRlbSwgcGxhdGZvcm1TdHIsIHBhc3N0aHJvdWdoIH0gb2YgbGlzdCkge1xuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgICBjb25zdCBjdXJySWR4ID0gcmVzdWx0Lmxlbmd0aCAtIDE7XG5cbiAgICAgIGlmIChwYXNzdGhyb3VnaCkge1xuICAgICAgICByZXNBcnJheVtTeW1ib2wuZm9yKGBiZWZvcmU6JHtjdXJySWR4fWApXSA9IFtcbiAgICAgICAgICAuLi4ocmVzQXJyYXlbU3ltYm9sLmZvcihgYmVmb3JlOiR7Y3VycklkeH1gKV0gfHwgW10pLFxuICAgICAgICAgIC4uLnBhc3N0aHJvdWdoLmJlZm9yZVxuICAgICAgICBdO1xuICAgICAgICBpZiAocGFzc3Rocm91Z2guYWZ0ZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJlc0FycmF5W1N5bWJvbC5mb3IoYGFmdGVyOiR7Y3VycklkeH1gKV0gPSBwYXNzdGhyb3VnaC5hZnRlcjtcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxpc3QubGVuZ3RoID4gMSkge1xuICAgICAgICByZXNBcnJheVtTeW1ib2wuZm9yKGBiZWZvcmU6JHtjdXJySWR4fWApXSA9IFtcbiAgICAgICAgICAuLi4ocmVzQXJyYXlbU3ltYm9sLmZvcihgYmVmb3JlOiR7Y3VycklkeH1gKV0gfHwgW10pLFxuICAgICAgICAgIGxpbmVDb21tZW50KGAgI2lmZGVmICR7cGxhdGZvcm1TdHJ9YClcbiAgICAgICAgXTtcbiAgICAgICAgcmVzQXJyYXlbU3ltYm9sLmZvcihgYWZ0ZXI6JHtjdXJySWR4fWApXSA9IFtsaW5lQ29tbWVudCgnICNlbmRpZicpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBpdGVtczogcmVzdWx0LCBwbGF0Zm9ybVVuaW9uLCBvd25pbmdQbGF0Zm9ybXM6IFsuLi5vd25pbmdQbGF0Zm9ybXNdLnNvcnQoKSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlSG9tZVBhZ2VGaXJzdChwYWdlc0FycmF5OiBhbnlbXSwgaG9tZVBhdGg/OiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFwYWdlc0FycmF5IHx8IHBhZ2VzQXJyYXkubGVuZ3RoID09PSAwKVxuICAgIHJldHVybjtcblxuICBjb25zdCBpc0hvbWUgPSBwYWdlc0FycmF5Lm1hcCgocGFnZTogYW55KSA9PiBwYWdlPy50eXBlID09PSAnaG9tZScpO1xuICBpZiAoaG9tZVBhdGggJiYgIXBhZ2VzQXJyYXkuc29tZSgocGFnZTogYW55KSA9PiBwYWdlPy5wYXRoID09PSBob21lUGF0aCAmJiBwYWdlPy50eXBlID09PSAnaG9tZScpKSB7XG4gICAgcGFnZXNBcnJheS5mb3JFYWNoKChwYWdlOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChwYWdlPy5wYXRoID09PSBob21lUGF0aCkge1xuICAgICAgICBpc0hvbWVbaW5kZXhdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGhvbWVDb3VudCA9IGlzSG9tZS5maWx0ZXIoQm9vbGVhbikubGVuZ3RoO1xuICBpZiAoaG9tZUNvdW50ID09PSAwKVxuICAgIHJldHVybjtcbiAgaWYgKGlzSG9tZS5zbGljZSgwLCBob21lQ291bnQpLmV2ZXJ5KEJvb2xlYW4pKVxuICAgIHJldHVybjtcblxuICBjb25zdCBjb21tZW50QXJyYXkgPSBwYWdlc0FycmF5IGFzIGFueTtcbiAgY29uc3QgbGVuZ3RoID0gcGFnZXNBcnJheS5sZW5ndGg7XG4gIGNvbnN0IGJlZm9yZVRva2VuczogYW55W11bXSA9IFtdO1xuICBjb25zdCBhZnRlclRva2VuczogYW55W11bXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBiZWZvcmVUb2tlbnMucHVzaChjb21tZW50QXJyYXlbU3ltYm9sLmZvcihgYmVmb3JlOiR7aX1gKV0gfHwgW10pO1xuICAgIGFmdGVyVG9rZW5zLnB1c2goY29tbWVudEFycmF5W1N5bWJvbC5mb3IoYGFmdGVyOiR7aX1gKV0gfHwgW10pO1xuICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoY29tbWVudEFycmF5LCBTeW1ib2wuZm9yKGBiZWZvcmU6JHtpfWApKTtcbiAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGNvbW1lbnRBcnJheSwgU3ltYm9sLmZvcihgYWZ0ZXI6JHtpfWApKTtcbiAgfVxuXG4gIGNvbnN0IG1hcmtlclRva2VucyA9IGJlZm9yZVRva2Vuc1swXT8uZmlsdGVyKGlzR2VuZXJhdGlvbk1hcmtlcikgfHwgW107XG4gIGlmIChiZWZvcmVUb2tlbnNbMF0pIHtcbiAgICBiZWZvcmVUb2tlbnNbMF0gPSBiZWZvcmVUb2tlbnNbMF0uZmlsdGVyKCh0b2tlbjogYW55KSA9PiAhaXNHZW5lcmF0aW9uTWFya2VyKHRva2VuKSk7XG4gIH1cblxuICBjb25zdCBvcmRlcjogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChpc0hvbWVbaV0pXG4gICAgICBvcmRlci5wdXNoKGkpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWlzSG9tZVtpXSlcbiAgICAgIG9yZGVyLnB1c2goaSk7XG4gIH1cblxuICBwYWdlc0FycmF5LnNwbGljZSgwLCBsZW5ndGgsIC4uLm9yZGVyLm1hcChpID0+IHBhZ2VzQXJyYXlbaV0pKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc291cmNlSW5kZXggPSBvcmRlcltpXTtcbiAgICBjb25zdCBiZWZvcmUgPSBpID09PSAwID8gWy4uLm1hcmtlclRva2VucywgLi4uYmVmb3JlVG9rZW5zW3NvdXJjZUluZGV4XV0gOiBiZWZvcmVUb2tlbnNbc291cmNlSW5kZXhdO1xuICAgIGlmIChiZWZvcmUgJiYgYmVmb3JlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbW1lbnRBcnJheVtTeW1ib2wuZm9yKGBiZWZvcmU6JHtpfWApXSA9IGJlZm9yZTtcbiAgICB9XG4gICAgaWYgKGFmdGVyVG9rZW5zW3NvdXJjZUluZGV4XSAmJiBhZnRlclRva2Vuc1tzb3VyY2VJbmRleF0ubGVuZ3RoID4gMCkge1xuICAgICAgY29tbWVudEFycmF5W1N5bWJvbC5mb3IoYGFmdGVyOiR7aX1gKV0gPSBhZnRlclRva2Vuc1tzb3VyY2VJbmRleF07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVBhZ2VzSnNvbihcbiAgZXhpc3RpbmdDb250ZW50OiBzdHJpbmcsXG4gIG91dHB1dDogUGFnZXNKc29uT3V0cHV0LFxuICBjdXJyZW50UGxhdGZvcm06IHN0cmluZyxcbiAgc2FuZGJveEFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlLFxuICBleHRyYVBsYXRmb3Jtczogc3RyaW5nW10gPSBbXSxcbiAgcHJvamVjdFJvb3Q6IHN0cmluZyA9IHByb2Nlc3MuY3dkKCksXG4gIHN0cmljdE1haW5QYWdlczogYm9vbGVhbiA9IGZhbHNlXG4pOiBzdHJpbmcge1xuICBsZXQgb2xkQ29uZmlnOiBhbnkgPSB7fTtcbiAgaWYgKGV4aXN0aW5nQ29udGVudCAmJiBleGlzdGluZ0NvbnRlbnQudHJpbSgpICE9PSAnJykge1xuICAgIHRyeSB7XG4gICAgICBvbGRDb25maWcgPSBjalBhcnNlKGV4aXN0aW5nQ29udGVudCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1t1bmktcGFnZXNdIEZhaWxlZCB0byBwYXJzZSBleGlzdGluZyBwYWdlcy5qc29uIHdpdGggY29tbWVudC1qc29uOicsIGUpO1xuICAgICAgb2xkQ29uZmlnID0ge307XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb2xkUGFnZXMgPSBBcnJheS5pc0FycmF5KG9sZENvbmZpZy5wYWdlcykgPyBvbGRDb25maWcucGFnZXMgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IG1lcmdlZFBhZ2VzUmVzID0gbWVyZ2VQbGF0Zm9ybUl0ZW1zKG9sZFBhZ2VzLCBjdXJyZW50UGxhdGZvcm0sIG91dHB1dC5wYWdlcywgJ3BhdGgnLCBzYW5kYm94QWN0aXZlLCBleHRyYVBsYXRmb3JtcywgJycsIHByb2plY3RSb290LCBzdHJpY3RNYWluUGFnZXMpO1xuICBjb25zdCBtZXJnZWRQYWdlcyA9IG1lcmdlZFBhZ2VzUmVzLml0ZW1zO1xuXG4gIC8vIFx1OTk5Nlx1OTg3NVx1N0Y2RVx1OTg3NlxuICBlbnN1cmVIb21lUGFnZUZpcnN0KG1lcmdlZFBhZ2VzIGFzIGFueVtdKTtcblxuICAvLyBcdTY3ODRcdTkwMjBcdTY3MDBcdTdFQzhcdTVCRjlcdThDNjFcbiAgY29uc3QgZmluYWxKc29uOiBhbnkgPSB7fTtcbiAgZmluYWxKc29uW1N5bWJvbC5mb3IoJ2JlZm9yZTpwYWdlcycpXSA9IFtcbiAgICBsaW5lQ29tbWVudCgnID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpLFxuICAgIGxpbmVDb21tZW50KCcgXHUyNkEwXHVGRTBGIFx1NjNEMFx1NzkzQVx1RkYxQVx1NjcyQ1x1NjU4N1x1NEVGNlx1NzUzMSB2aXRlLXBsdWdpbi11bmktcGFnZXMgXHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwXHVGRjBDXHU4QkY3XHU1MkZGXHU2MjRCXHU1MkE4XHU0RkVFXHU2NTM5XHVGRjA4XHU2MjRCXHU1MkE4XHU0RkVFXHU2NTM5XHU0RjFBXHU4OEFCXHU4OTg2XHU3NkQ2XHVGRjA5XHVGRjAxJyksXG4gICAgbGluZUNvbW1lbnQoJyBcdUQ4M0RcdURDQ0MgXHU1OTgyXHU5NzAwXHU5MTREXHU3RjZFXHU5ODc1XHU5NzYyXHU4REVGXHU3NTMxXHU0RTBFXHU2ODM3XHU1RjBGXHVGRjBDXHU4QkY3XHU1MjREXHU1RjgwIHBhZ2VzLmNvbmZpZy5qc29uIFx1NjIxNlx1OTg3NVx1OTc2MiAudXZ1ZSBcdTc2ODQgZGVmaW5lUGFnZSBcdTRFMkRcdTkxNERcdTdGNkVcdTMwMDInKSxcbiAgICBsaW5lQ29tbWVudCgnID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpXG4gIF07XG4gIGZpbmFsSnNvbi5wYWdlcyA9IG1lcmdlZFBhZ2VzO1xuXG4gIC8vIFx1NTkwRFx1NTIzNiBiYXNlQ29uZmlnIFx1NjIxNiBvdXRwdXQgXHU0RTBBXHU3Njg0XHU1MTc2XHU0RUQ2XHU5ODc2XHU1QzQyXHU1QjU3XHU2QkI1XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvdXRwdXQpO1xuICBmb3IgKGNvbnN0IGsgb2Yga2V5cykge1xuICAgIGlmIChrICE9PSAncGFnZXMnICYmIGsgIT09ICdzdWJQYWNrYWdlcycpIHtcbiAgICAgIGZpbmFsSnNvbltrXSA9IG91dHB1dFtrXTtcbiAgICB9XG4gIH1cblxuICAvLyBcdTU0MDhcdTVFNzZcdTUyMDZcdTUzMDUgc3ViUGFja2FnZXNcbiAgaWYgKG91dHB1dC5zdWJQYWNrYWdlcyAmJiBvdXRwdXQuc3ViUGFja2FnZXMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IG9sZFN1YlBhY2thZ2VzID0gQXJyYXkuaXNBcnJheShvbGRDb25maWcuc3ViUGFja2FnZXMpID8gb2xkQ29uZmlnLnN1YlBhY2thZ2VzIDogbmV3IENvbW1lbnRBcnJheSgpO1xuICAgIGNvbnN0IG5ld1N1Yk1hcCA9IG5ldyBNYXA8c3RyaW5nLCBTdWJQYWNrYWdlQ29uZmlnPigpO1xuICAgIGZvciAoY29uc3Qgc3Agb2Ygb3V0cHV0LnN1YlBhY2thZ2VzKSB7XG4gICAgICBuZXdTdWJNYXAuc2V0KHNwLnJvb3QsIHNwKTtcbiAgICB9XG5cbiAgICBjb25zdCBtZXJnZWRTdWJzID0gbmV3IENvbW1lbnRBcnJheSgpO1xuICAgIGZvciAoY29uc3QgZXhpc3RpbmdTdWIgb2Ygb2xkU3ViUGFja2FnZXMpIHtcbiAgICAgIGNvbnN0IHN1YiA9IG5ld1N1Yk1hcC5nZXQoZXhpc3RpbmdTdWIucm9vdCk7XG4gICAgICBpZiAoc3ViKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBleGlzdGluZ1N1Yi5yb290O1xuICAgICAgICBjb25zdCBzdWJNZXJnZWQgPSBtZXJnZVBsYXRmb3JtSXRlbXMoZXhpc3RpbmdTdWIucGFnZXMsIGN1cnJlbnRQbGF0Zm9ybSwgc3ViLnBhZ2VzLCAncGF0aCcsIHNhbmRib3hBY3RpdmUsIGV4dHJhUGxhdGZvcm1zLCByb290LCBwcm9qZWN0Um9vdCkuaXRlbXM7XG4gICAgICAgIGV4aXN0aW5nU3ViLnBhZ2VzID0gc3ViTWVyZ2VkO1xuICAgICAgICBtZXJnZWRTdWJzLnB1c2goZXhpc3RpbmdTdWIpO1xuICAgICAgICBuZXdTdWJNYXAuZGVsZXRlKGV4aXN0aW5nU3ViLnJvb3QpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIXNhbmRib3hBY3RpdmUpIHtcbiAgICAgICAgY29uc3QgaXNPYnNvbGV0ZVBhcmVudCA9IG91dHB1dC5zdWJQYWNrYWdlcy5zb21lKHNwID0+IHNwLnJvb3Quc3RhcnRzV2l0aChgJHtleGlzdGluZ1N1Yi5yb290fS9gKSk7XG4gICAgICAgIC8vIFx1NTk4Mlx1Njc5Q1x1OEJFNVx1NjVFN1x1NTIwNlx1NTMwNVx1NUM1RVx1NEU4RVx1NTNEN1x1N0JBMVx1NTIwNlx1NTMwNVx1NzZFRVx1NUY1NVx1RkYwOFx1NTk4Mlx1NEVFNSAnc3JjL3N1Yi8nIFx1NEUzQVx1NTI0RFx1N0YwMFx1RkYwOVx1RkYwQ1x1NEUxNFx1NjcyQ1x1NkIyMVx1NjI2Qlx1NjNDRlx1NURGMlx1NjVFMFx1NjcwOVx1NjU0OFx1OTg3NVx1OTc2Mlx1RkYwQ1x1NTIxOVx1N0VERFx1NEUwRFx1NEY1Q1x1NEUzQVx1NTkxNlx1OTBFOFx1NjI0Qlx1NTE5OVx1NTIwNlx1NTMwNVx1NEZERFx1NzU1OVxuICAgICAgICBjb25zdCBpc01hbmFnZWRDaGlsZCA9IG91dHB1dC5zdWJQYWNrYWdlcy5zb21lKChzcCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNsYXNoSWR4ID0gc3Aucm9vdC5sYXN0SW5kZXhPZignLycpO1xuICAgICAgICAgIGNvbnN0IHBhcmVudERpciA9IHNsYXNoSWR4ID4gMCA/IHNwLnJvb3Quc2xpY2UoMCwgc2xhc2hJZHgpIDogJyc7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudERpciAhPT0gJycgJiYgZXhpc3RpbmdTdWIucm9vdC5zdGFydHNXaXRoKGAke3BhcmVudERpcn0vYCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWlzT2Jzb2xldGVQYXJlbnQgJiYgIWlzTWFuYWdlZENoaWxkKSB7XG4gICAgICAgICAgY29uc3QgYWJzU3ViRGlyID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCBleGlzdGluZ1N1Yi5yb290KTtcbiAgICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhhYnNTdWJEaXIpKSB7XG4gICAgICAgICAgICBtZXJnZWRTdWJzLnB1c2goZXhpc3RpbmdTdWIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IHJlbWFpbmluZyBvZiBuZXdTdWJNYXAudmFsdWVzKCkpIHtcbiAgICAgIGNvbnN0IHN1Yk1lcmdlZCA9IG1lcmdlUGxhdGZvcm1JdGVtcyh1bmRlZmluZWQsIGN1cnJlbnRQbGF0Zm9ybSwgcmVtYWluaW5nLnBhZ2VzLCAncGF0aCcsIHNhbmRib3hBY3RpdmUsIGV4dHJhUGxhdGZvcm1zLCByZW1haW5pbmcucm9vdCwgcHJvamVjdFJvb3QpLml0ZW1zO1xuICAgICAgbWVyZ2VkU3Vicy5wdXNoKHtcbiAgICAgICAgLi4ucmVtYWluaW5nLFxuICAgICAgICBwYWdlczogc3ViTWVyZ2VkXG4gICAgICB9KTtcbiAgICB9XG4gICAgZmluYWxKc29uLnN1YlBhY2thZ2VzID0gbWVyZ2VkU3VicztcbiAgfVxuICBlbHNlIGlmIChvbGRDb25maWcuc3ViUGFja2FnZXMgJiYgIXNhbmRib3hBY3RpdmUpIHtcbiAgICBmaW5hbEpzb24uc3ViUGFja2FnZXMgPSBvbGRDb25maWcuc3ViUGFja2FnZXM7XG4gIH1cblxuICBjb25zdCBvdXRwdXRTdHIgPSBjalN0cmluZ2lmeShmaW5hbEpzb24sIG51bGwsIDIpO1xuICByZXR1cm4gYCR7b3V0cHV0U3RyfVxcbmA7XG59XG5cbi8qKiBcdTVFOEZcdTUyMTdcdTUzMTZcdTVFNzZcdTUxOTlcdTUxNjUgcGFnZXMuanNvblx1RkYxQlx1NTE4NVx1NUJCOVx1NjcyQVx1NTNEOFx1NTMxNlx1NjVGNlx1NEUwRFx1NTE5OVx1MzAwMlx1OEZENFx1NTZERVx1NjYyRlx1NTQyNlx1NTNEMVx1NzUxRlx1NEU4Nlx1NTE5OVx1NTE2NSAqL1xuZnVuY3Rpb24gd3JpdGVQYWdlc0pzb24oXG4gIG91dHB1dDogUGFnZXNKc29uT3V0cHV0LFxuICBvdXRwdXRQYXRoOiBzdHJpbmcsXG4gIGN1cnJlbnRQbGF0Zm9ybVN0cjogc3RyaW5nID0gJycsXG4gIHNhbmRib3hBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZSxcbiAgc3RyaWN0TWFpblBhZ2VzOiBib29sZWFuID0gZmFsc2Vcbik6IGJvb2xlYW4ge1xuICBsZXQgZXhpc3RpbmcgPSAnJztcbiAgaWYgKGZzLmV4aXN0c1N5bmMob3V0cHV0UGF0aCkpIHtcbiAgICBleGlzdGluZyA9IGZzLnJlYWRGaWxlU3luYyhvdXRwdXRQYXRoLCAndXRmLTgnKTtcbiAgfVxuXG4gIGNvbnN0IHByb2plY3RSb290ID0gcGF0aC5kaXJuYW1lKHBhdGgucmVzb2x2ZShvdXRwdXRQYXRoKSk7XG4gIGNvbnN0IGN1cnJlbnRQbGF0Zm9ybSA9IChjdXJyZW50UGxhdGZvcm1TdHIgfHwgcHJvY2Vzcy5lbnYuVU5JX1BMQVRGT1JNIHx8ICdoNScpLnRvVXBwZXJDYXNlKCk7XG4gIC8vIHVuaWJlc3RYIFx1NEY1Q1x1NEUzQSB1bmktYXBwIFggXHU5ODc5XHU3NkVFXHVGRjBDQVBQXHVGRjA4QW5kcm9pZC9pT1MvSGFybW9ueVx1RkYwOVx1NjYyRlx1NjgzOFx1NUZDM1x1N0YxNlx1OEJEMVx1NUU5NVx1NUVBN1x1MzAwMlxuICAvLyBcdTVGQzVcdTk4N0JcdTVDMDYgQVBQIFx1N0VCM1x1NTE2NVx1NTdGQVx1N0VCRlx1ODk4Nlx1NzZENlx1OTZDNlx1RkYwQ1x1Nzg2RVx1NEZERFx1NjVFMFx1OEJCQVx1NUY1M1x1NTI0RFx1NTM1NVx1N0FFRlx1OEREMVx1NzY4NFx1NjYyRiBINSBcdThGRDhcdTY2MkZcdTVDMEZcdTdBMEJcdTVFOEZcdUZGMENcdTc1MUZcdTYyMTBcdTc2ODQgcGFnZXMuanNvbiBcdTU5Q0JcdTdFQzhcdTRGRERcdThCQzEgQXBwLUFuZHJvaWQvaU9TIFx1NjcwOVx1OTg3NVx1NTNFRlx1NzUyOFx1RkYwQ1x1Njc1Q1x1N0VERFx1NTM5Rlx1NzUxRlx1NjJFNlx1NjIyQVx1NjJBNVx1OTUxOVxuICBjb25zdCBleHRyYVBsYXRmb3JtcyA9IFsnQVBQJ107XG4gIGNvbnN0IG1lcmdlZENvbnRlbnQgPSBtZXJnZVBhZ2VzSnNvbihleGlzdGluZywgb3V0cHV0LCBjdXJyZW50UGxhdGZvcm0sIHNhbmRib3hBY3RpdmUsIGV4dHJhUGxhdGZvcm1zLCBwcm9qZWN0Um9vdCwgc3RyaWN0TWFpblBhZ2VzKTtcblxuICBpZiAobWVyZ2VkQ29udGVudCAhPT0gZXhpc3RpbmcpIHtcbiAgICBmcy53cml0ZUZpbGVTeW5jKG91dHB1dFBhdGgsIG1lcmdlZENvbnRlbnQsICd1dGYtOCcpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqIFx1NUI4OVx1NTE2OFx1NjNEMFx1NTNENiBKU09OQyAvIFx1NUUyNlx1NkNFOFx1OTFDQVx1NjU4N1x1NEVGNlx1NzY4NFx1NTkzNFx1OTBFOFx1NkNFOFx1OTFDQVx1NTc1N1x1RkYwQ1x1OTA3Rlx1NTE0RFx1NkI2M1x1NTIxOVx1ODg2OFx1OEZCRVx1NUYwRlx1NzA3RVx1OTZCRVx1NjAyN1x1NTZERVx1NkVBRiAqL1xuZnVuY3Rpb24gZXh0cmFjdEhlYWRlckNvbW1lbnRzKHJhdzogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGluZGV4ID0gMDtcbiAgY29uc3QgbGVuID0gcmF3Lmxlbmd0aDtcbiAgd2hpbGUgKGluZGV4IDwgbGVuKSB7XG4gICAgd2hpbGUgKGluZGV4IDwgbGVuICYmIChyYXdbaW5kZXhdID09PSAnICcgfHwgcmF3W2luZGV4XSA9PT0gJ1xcdCcgfHwgcmF3W2luZGV4XSA9PT0gJ1xccicgfHwgcmF3W2luZGV4XSA9PT0gJ1xcbicpKSB7XG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPj0gbGVuKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHJhd1tpbmRleF0gPT09ICcvJyAmJiByYXdbaW5kZXggKyAxXSA9PT0gJy8nKSB7XG4gICAgICBjb25zdCBuZXh0TGluZSA9IHJhdy5pbmRleE9mKCdcXG4nLCBpbmRleCk7XG4gICAgICBpbmRleCA9IG5leHRMaW5lID09PSAtMSA/IGxlbiA6IG5leHRMaW5lICsgMTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmF3W2luZGV4XSA9PT0gJy8nICYmIHJhd1tpbmRleCArIDFdID09PSAnKicpIHtcbiAgICAgIGNvbnN0IGVuZEJsb2NrID0gcmF3LmluZGV4T2YoJyovJywgaW5kZXggKyAyKTtcbiAgICAgIGluZGV4ID0gZW5kQmxvY2sgPT09IC0xID8gbGVuIDogZW5kQmxvY2sgKyAyO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmF3LnNsaWNlKDAsIGluZGV4KTtcbn1cblxuLyoqIFx1NjI4QVx1MzAwQ1x1NjcyQ1x1NkIyMVx1NjI2Qlx1NjNDRiArIFx1NTQwOFx1NUU3Nlx1MzAwRFx1NzY4NFx1N0VEM1x1Njc5Q1x1NTQwQ1x1NkI2NVx1NTZERSBwYWdlcy5jb25maWcuanNvblx1RkYwQ1x1NEZERFx1OEJDMVx1NjI0Qlx1NTE5OVx1OTE0RFx1N0Y2RVx1NEUwRVx1NzhDMVx1NzZEOFx1OTg3NVx1OTc2Mlx1NTNDQ1x1NTQxMVx1NEUwMFx1ODFGNCAqL1xuZnVuY3Rpb24gd3JpdGVCYWNrQ29uZmlnKFxuICBjb25maWdQYXRoOiBzdHJpbmcsXG4gIGZpbmFsUGFnZXM6IFBhZ2VDb25maWdbXSxcbiAgc2Nhbm5lZFN1YlBrZ3M6IFN1YlBhY2thZ2VDb25maWdbXSxcbiAgb3V0cHV0UGF0aD86IHN0cmluZyxcbiAgb3B0aW9ucz86IFJlc29sdmVkVW5pUGFnZXNPcHRpb25zXG4pOiBib29sZWFuIHtcbiAgaWYgKCFmcy5leGlzdHNTeW5jKGNvbmZpZ1BhdGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IGNvbmZpZ1VwZGF0ZWQgPSBmYWxzZTtcbiAgY29uc3QgY3VycmVudENvbmZpZ1JhdyA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgY29uc3QgaGVhZGVyQ29tbWVudHMgPSBleHRyYWN0SGVhZGVyQ29tbWVudHMoY3VycmVudENvbmZpZ1Jhdyk7XG5cbiAgbGV0IGN1cnJlbnRDb25maWc6IEJhc2VDb25maWcgPSB7fTtcbiAgdHJ5IHtcbiAgICBjdXJyZW50Q29uZmlnID0gY2pQYXJzZShjdXJyZW50Q29uZmlnUmF3KSBhcyBCYXNlQ29uZmlnO1xuICB9XG4gIGNhdGNoIHtcbiAgICB0cnkge1xuICAgICAgY3VycmVudENvbmZpZyA9IEpTT041LnBhcnNlKGN1cnJlbnRDb25maWdSYXcpIGFzIEJhc2VDb25maWc7XG4gICAgfVxuICAgIGNhdGNoIHt9XG4gIH1cblxuICAvLyBcdTY4QzBcdTY3RTUgcGFnZXMuanNvbiBcdTRFMkRcdTY2MkZcdTU0MjZcdTVCNThcdTU3MjhcdTU5MUFcdTVFNzNcdTUzRjBcdTUzRDhcdTRGNTNcbiAgY29uc3QgbXVsdGlQbGF0Zm9ybVBhZ2VzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGlmIChvdXRwdXRQYXRoICYmIGZzLmV4aXN0c1N5bmMob3V0cHV0UGF0aCkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFyaWFudHNNYXAgPSBsb2FkQWxsUGxhdGZvcm1QYWdlVmFyaWFudHMob3V0cHV0UGF0aCk7XG4gICAgICBmb3IgKGNvbnN0IFtwYXRoS2V5LCB2YXJpYW50c10gb2YgdmFyaWFudHNNYXAuZW50cmllcygpKSB7XG4gICAgICAgIGlmICh2YXJpYW50cy5sZW5ndGggPiAxIHx8IHZhcmlhbnRzLnNvbWUodiA9PiB2LmNvbmRpdGlvbiAhPSBudWxsKSkge1xuICAgICAgICAgIGNvbnN0IG5vcm1LZXkgPSBwYXRoS2V5LnJlcGxhY2UoL1xcXFwvZywgJy8nKS5yZXBsYWNlKC9eXFwvLywgJycpO1xuICAgICAgICAgIG11bHRpUGxhdGZvcm1QYWdlcy5hZGQobm9ybUtleSk7XG4gICAgICAgICAgbXVsdGlQbGF0Zm9ybVBhZ2VzLmFkZChub3JtS2V5LnJlcGxhY2UoL15zcmNcXC8vLCAnJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoIHt9XG4gIH1cblxuICAvLyAxKSBcdTU0MENcdTZCNjVcdTRFM0JcdTUzMDVcdUZGMDhcdTY1QjBcdTU4OUVcdTMwMDFcdTRGRUVcdTY1MzlcdTMwMDFcdTUyNTRcdTk2NjRcdTVERjJcdTUyMjBcdTk2NjRcdUZGMDlcbiAgY29uc3QgbmV3TWFpblBhZ2VzOiBQYWdlQ29uZmlnW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaW5hbFBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcCA9IGZpbmFsUGFnZXNbaV07XG4gICAgY29uc3Qgbm9ybSA9IHAucGF0aC5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgICBjb25zdCBoYXNWYXJpYW50cyA9IEFycmF5LmlzQXJyYXkoKHAgYXMgYW55KS5fdmFyaWFudHMpICYmIChwIGFzIGFueSkuX3ZhcmlhbnRzLmxlbmd0aCA+IDE7XG4gICAgY29uc3QgaXNNdWx0aVBsYXRmb3JtID0gaGFzVmFyaWFudHMgfHwgbXVsdGlQbGF0Zm9ybVBhZ2VzLmhhcyhub3JtKSB8fCBtdWx0aVBsYXRmb3JtUGFnZXMuaGFzKGBzcmMvJHtub3JtfWApO1xuICAgIGNvbnN0IGV4aXN0aW5nSW5Db25maWcgPSBjdXJyZW50Q29uZmlnLnBhZ2VzPy5maW5kKChjcCkgPT4ge1xuICAgICAgY29uc3QgY3BOb3JtID0gY3AucGF0aC5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgICAgIHJldHVybiBjcE5vcm0gPT09IG5vcm0gfHwgY3BOb3JtID09PSBgc3JjLyR7bm9ybX1gIHx8IGBzcmMvJHtjcE5vcm19YCA9PT0gbm9ybTtcbiAgICB9KTtcblxuICAgIGlmIChleGlzdGluZ0luQ29uZmlnICYmIGlzTXVsdGlQbGF0Zm9ybSkge1xuICAgICAgLy8gXHU0RkREXHU2MzAxIHBhZ2VzLmNvbmZpZy5qc29uIFx1NEUyRFx1NzY4NFx1NTM5Rlx1OTE0RFx1N0Y2RVx1NEUwRFx1NTNEOFx1RkYwQ1x1OTA3Rlx1NTE0RFx1NTM1NVx1N0FFRlx1OEZEMFx1ODg0Q1x1ODk4Nlx1NzZENlx1NTkxQVx1N0FFRlx1OTE0RFx1N0Y2RVx1ODlFNlx1NTNEMSB3YXRjaGVyIFx1NjA3Nlx1NjAyN1x1NUZBQVx1NzNBRlxuICAgICAgY29uc3QgY2xlYW5FeGlzdGluZyA9IHsgLi4uZXhpc3RpbmdJbkNvbmZpZyB9O1xuICAgICAgY2xlYW5UZW1wUHJvcHMoY2xlYW5FeGlzdGluZywgdHJ1ZSk7XG4gICAgICBuZXdNYWluUGFnZXMucHVzaChjbGVhbkV4aXN0aW5nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBjbGVhblAgPSB7IC4uLnAgfTtcbiAgICAgIGNsZWFuVGVtcFByb3BzKGNsZWFuUCwgdHJ1ZSk7XG4gICAgICBuZXdNYWluUGFnZXMucHVzaChjbGVhblApO1xuICAgIH1cbiAgfVxuICBpZiAoY3VycmVudENvbmZpZy5wYWdlcyA9PSBudWxsIHx8IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRDb25maWcucGFnZXMpICE9PSBKU09OLnN0cmluZ2lmeShuZXdNYWluUGFnZXMpKSB7XG4gICAgY3VycmVudENvbmZpZy5wYWdlcyA9IG5ld01haW5QYWdlcztcbiAgICBjb25maWdVcGRhdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIDIpIFx1NTQwQ1x1NkI2NVx1NTIwNlx1NTMwNVx1RkYwOFx1NjVCMFx1NTg5RVx1MzAwMVx1NEZFRVx1NjUzOVx1MzAwMVx1NTI1NFx1OTY2NFx1NURGMlx1NTIyMFx1OTY2NFx1RkYwOVxuICBjdXJyZW50Q29uZmlnLnN1YlBhY2thZ2VzID8/PSBbXTtcblxuICBjb25zdCBtYW5hZ2VkU3ViUHJlZml4ZXMgPSAob3B0aW9ucz8uc3ViUGFja2FnZXMgPz8gW10pLm1hcChwID0+IGAke3AucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoL1xcLyskLywgJycpfS9gKTtcblxuICAvLyBcdTUyNTRcdTk2NjRcdTVERjJcdTg4QUJcdTYyQzZcdTUyMDZcdTRFM0FcdTVCNTBcdTUyMDZcdTUzMDVcdTc2ODRcdTY1RTdcdTcyMzZcdTdFQTdcdTUyMDZcdTUzMDVcdUZGMDhcdTU5ODJcdTY1RTdcdTc2ODQgcm9vdDogXCJzcmMvc3ViXCJcdUZGMDlcdTRFRTVcdTUzQ0FcdTUzRDdcdTdCQTFcdTc2RUVcdTVGNTVcdTRFMEJcdTU3MjhcdTc4QzFcdTc2RDhcdTRFMEFcdTVERjJcdTUyMjBcdTk2NjRcdTc2ODRcdTUyMDZcdTUzMDVcbiAgY3VycmVudENvbmZpZy5zdWJQYWNrYWdlcyA9IGN1cnJlbnRDb25maWcuc3ViUGFja2FnZXMuZmlsdGVyKChjcCkgPT4ge1xuICAgIGNvbnN0IGNwTm9ybSA9IGNwLnJvb3QucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xuICAgIGNvbnN0IGlzT2Jzb2xldGVQYXJlbnQgPSBzY2FubmVkU3ViUGtncy5zb21lKHNwID0+IHNwLnJvb3Quc3RhcnRzV2l0aChgJHtjcC5yb290fS9gKSk7XG4gICAgaWYgKGlzT2Jzb2xldGVQYXJlbnQpIHtcbiAgICAgIGNvbmZpZ1VwZGF0ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBpc01hbmFnZWQgPSAob3B0aW9ucz8uc3ViUGFja2FnZXMgPz8gW10pLmluY2x1ZGVzKGNwTm9ybSkgfHwgbWFuYWdlZFN1YlByZWZpeGVzLnNvbWUocHJlZml4ID0+IGNwTm9ybS5zdGFydHNXaXRoKHByZWZpeCkpO1xuICAgIGlmIChpc01hbmFnZWQgJiYgIXNjYW5uZWRTdWJQa2dzLnNvbWUoc3AgPT4gc3Aucm9vdCA9PT0gY3Aucm9vdCkpIHtcbiAgICAgIC8vIFx1NTNEN1x1N0JBMVx1NzZFRVx1NUY1NVx1NEUwQlx1NzY4NFx1NTIwNlx1NTMwNVx1NTcyOFx1NzhDMVx1NzZEOFx1NEUwQVx1NURGMlx1NjVFMFx1NEVGQlx1NEY1NVx1OTg3NVx1OTc2Mlx1NjIxNlx1NURGMlx1ODhBQlx1NTIyMFx1OTY2NFxuICAgICAgY29uZmlnVXBkYXRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcblxuICBmb3IgKGxldCBzID0gMDsgcyA8IHNjYW5uZWRTdWJQa2dzLmxlbmd0aDsgcysrKSB7XG4gICAgY29uc3Qgc3BrZyA9IHNjYW5uZWRTdWJQa2dzW3NdO1xuICAgIGNvbnN0IHRhcmdldFN1YiA9IGN1cnJlbnRDb25maWcuc3ViUGFja2FnZXMuZmluZChjcCA9PiBjcC5yb290ID09PSBzcGtnLnJvb3QpO1xuICAgIGlmICh0YXJnZXRTdWIgPT0gbnVsbCkge1xuICAgICAgY3VycmVudENvbmZpZy5zdWJQYWNrYWdlcy5wdXNoKHsgcm9vdDogc3BrZy5yb290LCBwYWdlczogc3BrZy5wYWdlcyB9KTtcbiAgICAgIGNvbmZpZ1VwZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld1N1YlBhZ2VzOiBQYWdlQ29uZmlnW10gPSBbXTtcbiAgICAgIGZvciAobGV0IHBJZHggPSAwOyBwSWR4IDwgc3BrZy5wYWdlcy5sZW5ndGg7IHBJZHgrKykge1xuICAgICAgICBjb25zdCBwID0gc3BrZy5wYWdlc1twSWR4XTtcbiAgICAgICAgY29uc3QgZnVsbFJlbCA9IGAke3Nwa2cucm9vdH0vJHtwLnBhdGh9YC5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgICAgICAgY29uc3QgaGFzVmFyaWFudHMgPSBBcnJheS5pc0FycmF5KChwIGFzIGFueSkuX3ZhcmlhbnRzKSAmJiAocCBhcyBhbnkpLl92YXJpYW50cy5sZW5ndGggPiAxO1xuICAgICAgICBjb25zdCBpc011bHRpUGxhdGZvcm0gPSBoYXNWYXJpYW50cyB8fCBtdWx0aVBsYXRmb3JtUGFnZXMuaGFzKGZ1bGxSZWwpIHx8IG11bHRpUGxhdGZvcm1QYWdlcy5oYXMoYHNyYy8ke2Z1bGxSZWx9YCk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nSW5TdWIgPSB0YXJnZXRTdWIucGFnZXM/LmZpbmQoKGNwKSA9PiB7XG4gICAgICAgICAgY29uc3QgY3BOb3JtID0gY3AucGF0aC5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgICAgICAgICByZXR1cm4gY3BOb3JtID09PSBwLnBhdGgucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoL15cXC8vLCAnJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChleGlzdGluZ0luU3ViICYmIGlzTXVsdGlQbGF0Zm9ybSkge1xuICAgICAgICAgIGNvbnN0IGNsZWFuRXhpc3RpbmcgPSB7IC4uLmV4aXN0aW5nSW5TdWIgfTtcbiAgICAgICAgICBjbGVhblRlbXBQcm9wcyhjbGVhbkV4aXN0aW5nLCB0cnVlKTtcbiAgICAgICAgICBuZXdTdWJQYWdlcy5wdXNoKGNsZWFuRXhpc3RpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNsZWFuUCA9IHsgLi4ucCB9O1xuICAgICAgICAgIGNsZWFuVGVtcFByb3BzKGNsZWFuUCwgdHJ1ZSk7XG4gICAgICAgICAgbmV3U3ViUGFnZXMucHVzaChjbGVhblApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh0YXJnZXRTdWIucGFnZXMpICE9PSBKU09OLnN0cmluZ2lmeShuZXdTdWJQYWdlcykpIHtcbiAgICAgICAgdGFyZ2V0U3ViLnBhZ2VzID0gbmV3U3ViUGFnZXM7XG4gICAgICAgIGNvbmZpZ1VwZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFx1NEZERFx1NjMwMVx1NTIwNlx1NTMwNVx1NjMwOSByb290IFx1NjM5Mlx1NUU4Rlx1N0EzM1x1NUI5QVxuICBjdXJyZW50Q29uZmlnLnN1YlBhY2thZ2VzLnNvcnQoKGEsIGIpID0+IGEucm9vdC5sb2NhbGVDb21wYXJlKGIucm9vdCkpO1xuXG4gIGlmIChjb25maWdVcGRhdGVkKSB7XG4gICAgbGV0IG5ld0NvbmZpZ0pzb24gPSAnJztcbiAgICB0cnkge1xuICAgICAgbmV3Q29uZmlnSnNvbiA9IGAke2NqU3RyaW5naWZ5KGN1cnJlbnRDb25maWcsIG51bGwsIDIpfVxcbmA7XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgIG5ld0NvbmZpZ0pzb24gPSBgJHtKU09OLnN0cmluZ2lmeShjdXJyZW50Q29uZmlnLCBudWxsLCAyKX1cXG5gO1xuICAgIH1cbiAgICBpZiAoaGVhZGVyQ29tbWVudHMgJiYgIW5ld0NvbmZpZ0pzb24uc3RhcnRzV2l0aCgnLy8nKSAmJiAhbmV3Q29uZmlnSnNvbi5zdGFydHNXaXRoKCcvKicpKSB7XG4gICAgICBuZXdDb25maWdKc29uID0gaGVhZGVyQ29tbWVudHMgKyBuZXdDb25maWdKc29uLnJlcGxhY2UoL15cXHMqLywgJycpO1xuICAgIH1cbiAgICBpZiAobmV3Q29uZmlnSnNvbiAhPT0gY3VycmVudENvbmZpZ1Jhdykge1xuICAgICAgZnMud3JpdGVGaWxlU3luYyhjb25maWdQYXRoLCBuZXdDb25maWdKc29uLCAndXRmLTgnKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKiBcdTY3MDBcdThGRDFcdTRFMDBcdTZCMjFcdTYyMTBcdTUyOUZcdTg5RTNcdTY3OTBcdTc2ODQgcGFnZXMuY29uZmlnLmpzb25cdUZGMENcdTc1MjhcdTRFOEVcdThCRURcdTZDRDVcdTk1MTlcdThCRUZcdTY1RjZcdTc2ODRcdTk2MzJcdTVEMjlcdTdGMTNcdTVCNThcdTUxNUNcdTVFOTVcdUZGMDhcdTk3MDBcdThERThcdTU5MUFcdTZCMjFcdTc1MUZcdTYyMTBcdTVCNThcdTZEM0JcdUZGMDkgKi9cbmxldCBsYXN0R29vZEJhc2VDb25maWc6IEJhc2VDb25maWcgfCBudWxsID0gbnVsbDtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBcdTRFQ0VcdTYzRDJcdTRFRjZcdTY1NzBcdTdFQzRcdTRFMkRcdTUzRDFcdTczQjBcdTUzNkJcdTY2MUZcdTk2MzZcdTZCQjVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKiogXHU0RUNFXHVGRjA4XHU1REYyXHU4OUUzXHU2NzkwXHU3Njg0XHVGRjA5XHU2M0QyXHU0RUY2XHU2NTcwXHU3RUM0XHU5MUNDXHU2NTM2XHU5NkM2XHU2MjQwXHU2NzA5XHU2NDNBXHU1RTI2IGB1bmlQYWdlc1N0YWdlYCBcdTc2ODRcdTUzNkJcdTY2MUZcdTk2MzZcdTZCQjVcdUZGMENcdTYzMDkgb3JkZXIgXHU1MzQ3XHU1RThGICovXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdFN0YWdlc0Zyb21QbHVnaW5zKHBsdWdpbnM6IHJlYWRvbmx5IGFueVtdKTogUGFnZXNTdGFnZVtdIHtcbiAgY29uc3Qgc3RhZ2VzOiBQYWdlc1N0YWdlW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbHVnaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3RhZ2UgPSBwbHVnaW5zW2ldPy5bVU5JX1BBR0VTX1NUQUdFX1BST1BdO1xuICAgIGlmIChzdGFnZSAhPSBudWxsKSB7XG4gICAgICBzdGFnZXMucHVzaChzdGFnZSBhcyBQYWdlc1N0YWdlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YWdlcy5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlciB8fCBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBcdTY4MzhcdTVGQzNcdUZGMUFcdTY3ODRcdTVFRkFcdTcyQjZcdTYwMDFcdUZGMDhcdTRFMERcdTg0M0RcdTc2RDhcdUZGMDlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIFx1NjI2Qlx1NjNDRiBcdTIxOTIgXHU1NDA4XHU1RTc2IFx1MjE5MiBcdTg4QzVcdTkxNEQgXHUyMTkyIFx1NjMwOVx1NUU4Rlx1OEREMSBzdGFnZXNcdUZGMENcdTRFQTdcdTUxRkEqKlx1NTM3M1x1NUMwNlx1ODQzRFx1NzZEOCoqXHU3Njg0XHU2Nzg0XHU1RUZBXHU3MkI2XHU2MDAxXHUzMDAyXG4gKlxuICogXHU1MjNCXHU2MTBGXHU0RTBEXHU4OUU2XHU3OEIwXHU3OEMxXHU3NkQ4XHU0RUE3XHU3MjY5XHVGRjA4XHU0RTBEXHU1MTk5IHBhZ2VzLmpzb25cdTMwMDFcdTRFMERcdTU2REVcdTUxOTkgcGFnZXMuY29uZmlnLmpzb25cdUZGMDlcdUZGMENcdTU2RTBcdTZCNjRcdTY1RTJcdTg4QUIgZGV2L2J1aWxkIFx1NzUxRlx1NTQ3RFx1NTQ2OFx1NjcxRlx1OEMwM1x1NzUyOFx1RkYwQ1xuICogXHU0RTVGXHU4OEFCXHU5MDEwXHU1QjU3XHU4MjgyXHU1NkRFXHU1RjUyXHU1MzU1XHU2RDRCXHU3NkY0XHU2M0E1XHU5QTcxXHU1MkE4XHUzMDAyXG4gKlxuICogQHJldHVybnMgXHU2QjYzXHU1RTM4XHU2NUY2XHU4RkQ0XHU1NkRFXHU3MkI2XHU2MDAxXHVGRjFCcGFnZXMuY29uZmlnLmpzb24gXHU4QkVEXHU2Q0Q1XHU5NTE5XHU4QkVGXHU0RTE0XHU2NUUwXHU3RjEzXHU1QjU4XHU1M0VGXHU1MTVDXHU1RTk1XHU2NUY2XHU4RkQ0XHU1NkRFIG51bGxcdTMwMDJcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJ1aWxkUGFnZXMoXG4gIHVzZXJPcHRpb25zOiBVbmlQYWdlc09wdGlvbnMsXG4gIGN0eDogUGFnZXNTdGFnZUNvbnRleHQsXG4gIHN0YWdlczogUGFnZXNTdGFnZVtdID0gW11cbik6IFByb21pc2U8UGFnZXNCdWlsZFN0YXRlIHwgbnVsbD4ge1xuICBjb25zdCBvcHRpb25zID0gcmVzb2x2ZU9wdGlvbnModXNlck9wdGlvbnMpO1xuICBjb25zdCByb290ID0gY3R4LnJvb3Q7XG4gIGNvbnN0IGlzUHJvZHVjdGlvbiA9IGN0eC5pc1Byb2R1Y3Rpb247XG4gIGNsZWFyTG9hZGVkRW52Q2FjaGUoKTtcblxuICAvLyAxLiBcdThCRkJcdTUzRDZcdTU3RkFcdTc4NDBcdTkxNERcdTdGNkVcbiAgbGV0IGJhc2VDb25maWc6IEJhc2VDb25maWcgPSB7fTtcbiAgbGV0IGNvbmZpZ1BhcnNlRmFpbGVkID0gZmFsc2U7XG4gIGNvbnN0IGNvbmZpZ1BhdGggPSBwYXRoLnJlc29sdmUocm9vdCwgb3B0aW9ucy5jb25maWdGaWxlKTtcbiAgaWYgKGZzLmV4aXN0c1N5bmMoY29uZmlnUGF0aCkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmF3ID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICAgICAgYmFzZUNvbmZpZyA9IEpTT041LnBhcnNlKHJhdykgYXMgQmFzZUNvbmZpZztcbiAgICAgIGxhc3RHb29kQmFzZUNvbmZpZyA9IGJhc2VDb25maWc7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAvLyBcdTkxNERcdTdGNkVcdTVCNThcdTU3MjhcdThCRURcdTZDRDVcdTk1MTlcdThCRUZcdUZGMDhcdTkwMUFcdTVFMzhcdTRFM0FcdTc1MjhcdTYyMzdcdTZCNjNcdTU3MjhcdTdGMTZcdThGOTFcdTRFMkRcdTkwMTRcdUZGMDlcdUZGMUFcdTc1MjhcdTRFMEFcdTZCMjFcdTYyMTBcdTUyOUZcdTc2ODRcdTkxNERcdTdGNkVcdTUxNUNcdTVFOTVcdUZGMENcdTY3MkNcdTZCMjFcdTc1MUZcdTYyMTBcdTdFRERcdTRFMERcdTU0MENcdTZCNjVcdTU2REVcdTUxOTlcbiAgICAgIGNvbmZpZ1BhcnNlRmFpbGVkID0gdHJ1ZTtcbiAgICAgIGlmIChsYXN0R29vZEJhc2VDb25maWcgIT0gbnVsbCkge1xuICAgICAgICBiYXNlQ29uZmlnID0gbGFzdEdvb2RCYXNlQ29uZmlnO1xuICAgICAgfVxuICAgICAgY29uc29sZS53YXJuKGBbdW5pLXBhZ2VzXSAke29wdGlvbnMuY29uZmlnRmlsZX0gaGFzIHN5bnRheCBlcnJvcnMsIHVzaW5nIGxhc3QgZ29vZCBjYWNoZSBhbmQgc2tpcHBpbmcgd3JpdGUtYmFjazpgLCAoZSBhcyBFcnJvcikubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gXHU2NUUwXHU3RjEzXHU1QjU4XHU1M0VGXHU3NTI4XHU2NUY2XHU3NkY0XHU2M0E1XHU0RTJEXHU2QjYyXHVGRjBDXHU0RkREXHU2MzAxIHBhZ2VzLmNvbmZpZy5qc29uIFx1NEUwRSBwYWdlcy5qc29uIFx1NTM5Rlx1NjgzN1x1RkYwQ1x1N0I0OVx1NUY4NVx1NzUyOFx1NjIzN1x1NEZFRVx1NTkwRFx1OEJFRFx1NkNENVxuICBpZiAoY29uZmlnUGFyc2VGYWlsZWQgJiYgbGFzdEdvb2RCYXNlQ29uZmlnID09IG51bGwpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbdW5pLXBhZ2VzXSBBYm9ydGVkOiAke29wdGlvbnMuY29uZmlnRmlsZX0gaGFzIHN5bnRheCBlcnJvcnMgYW5kIG5vIGNhY2hlZCBjb25maWcgaXMgYXZhaWxhYmxlLiBGaXggdGhlIGZpbGUgZmlyc3QuYCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBcdThCRkJcdTUzRDZcdTVERjJcdTY3MDlcdTc2ODQgcGFnZXMuanNvbiBcdTRGNUNcdTRFM0FcdTU2REVcdTkwMDBcdTUxNUNcdTVFOTVcbiAgY29uc3Qgb3V0cHV0UGF0aCA9IHBhdGgucmVzb2x2ZShyb290LCBvcHRpb25zLm91dEZpbGUpO1xuICBjb25zdCBleGlzdGluZ1BhZ2VzTWFwID0gbmV3IE1hcDxzdHJpbmcsIFBhZ2VDb25maWc+KCk7XG4gIGlmIChmcy5leGlzdHNTeW5jKG91dHB1dFBhdGgpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nRGF0YSA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKG91dHB1dFBhdGgsICd1dGYtOCcpKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGV4aXN0aW5nRGF0YS5wYWdlcykpIHtcbiAgICAgICAgZXhpc3RpbmdEYXRhLnBhZ2VzLmZvckVhY2goKHA6IFBhZ2VDb25maWcpID0+IHtcbiAgICAgICAgICBpZiAocC5wYXRoKSB7XG4gICAgICAgICAgICBleGlzdGluZ1BhZ2VzTWFwLnNldChwLnBhdGgsIHApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShleGlzdGluZ0RhdGEuc3ViUGFja2FnZXMpKSB7XG4gICAgICAgIGV4aXN0aW5nRGF0YS5zdWJQYWNrYWdlcy5mb3JFYWNoKChwa2c6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBrZy5wYWdlcykpIHtcbiAgICAgICAgICAgIHBrZy5wYWdlcy5mb3JFYWNoKChwOiBQYWdlQ29uZmlnKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChwLnBhdGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmdWxsID0gYCR7cGtnLnJvb3R9LyR7cC5wYXRofWAucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoL15cXC8vLCAnJyk7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdQYWdlc01hcC5zZXQoZnVsbCwgcCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoIHt9XG4gIH1cblxuICAvLyAyLiBcdTYyNkJcdTYzQ0ZcdTRFM0JcdTUzMDUgLnV2dWUgXHU2NTg3XHU0RUY2XHVGRjA4XHU1RTc2XHU1M0QxXHU4OUUzXHU2NzkwXHU1OTFBXHU0RTJBXHU5ODc1XHU5NzYyXHU3Njg0IGRlZmluZVBhZ2UgXHU1QjhGXHVGRjA5XG4gIGNvbnN0IHBhZ2VzRGlyID0gcGF0aC5yZXNvbHZlKHJvb3QsIG9wdGlvbnMuZGlyKTtcbiAgY29uc3QgZmlsZXMgPSBzY2FuVXZ1ZUZpbGVzKHBhZ2VzRGlyLCBvcHRpb25zLmV4Y2x1ZGUsIHJvb3QpO1xuICBmaWxlcy5zb3J0KCk7XG5cbiAgY29uc3Qgc2Nhbm5lZFJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBmaWxlcy5tYXAoYXN5bmMgKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IHJhdyA9IGZzLnJlYWRGaWxlU3luYyhmaWxlLCAndXRmLTgnKTtcbiAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCBwYXJzZVBhZ2VNZXRhKHJhdywgZmlsZSwgcHJvY2Vzcy5lbnYuVU5JX1BMQVRGT1JNLCByb290LCBvcHRpb25zLmNvbnRleHQpO1xuICAgICAgcmV0dXJuIHsgZmlsZSwgcmF3LCBtZXRhIH07XG4gICAgfSlcbiAgKTtcblxuICBjb25zdCBzY2FubmVkOiAoUGFnZUNvbmZpZyAmIHsgX2hhc01ldGE/OiBib29sZWFuIH0pW10gPSBbXTtcbiAgY29uc3QgZGVidWdBbm5vdGF0ZWRQYWdlczogc3RyaW5nW10gPSBbXTtcbiAgY29uc3QgZGVidWdIb21lQW5ub3RhdGVkUGFnZXM6IHN0cmluZ1tdID0gW107XG5cbiAgZm9yIChjb25zdCB7IGZpbGUsIHJhdywgbWV0YSB9IG9mIHNjYW5uZWRSZXN1bHRzKSB7XG4gICAgaWYgKChtZXRhIGFzIGFueSk/Ll9za2lwUGFnZSA9PT0gdHJ1ZSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IHBhZ2VQYXRoID0gZmlsZVRvUGFnZVBhdGgoZmlsZSwgb3B0aW9ucy5kaXIsIHJvb3QpO1xuXG4gICAgY29uc3QgcGFnZTogUGFnZUNvbmZpZyAmIHsgX2hhc01ldGE/OiBib29sZWFuIH0gPSB7IHBhdGg6IHBhZ2VQYXRoIH07XG4gICAgaWYgKG1ldGEgIT0gbnVsbCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYWdlLCBtZXRhKTtcbiAgICAgIHBhZ2UuX2hhc01ldGEgPSB0cnVlO1xuXG4gICAgICAvLyBcdTg5QzRcdTUyMTlcdUZGMUFkZWJ1ZzogZmFsc2UgXHU1MTc3XHU2NzA5XHU2NzAwXHU5QUQ4XHU1NDI2XHU1MUIzXHU2NzQzXHVGRjFCXHU2NjNFXHU1RjBGXHU5MTREXHU3RjZFIGRlYnVnOiBmYWxzZSBcdTY1RjZcdTc2RjRcdTYzQTVcdTVGN0JcdTVFOTVcdTYzOTJcdTk2NjRcdTZDOTlcdTc2RDJcdThDMDNcdThCRDVcbiAgICAgIGlmIChtZXRhLmRlYnVnICE9PSBmYWxzZSkge1xuICAgICAgICBjb25zdCBpc0RlYnVnSG9tZSA9IG1ldGEuZGVidWdIb21lID09PSB0cnVlIHx8IG1ldGEuZGVidWcgPT09ICdob21lJztcbiAgICAgICAgY29uc3QgaXNEZWJ1ZyA9IGlzRGVidWdIb21lIHx8IG1ldGEuZGVidWcgPT09IHRydWUgfHwgbWV0YS5vbmx5ID09PSB0cnVlIHx8IG1ldGEuaXNEZXYgPT09IHRydWU7XG4gICAgICAgIGlmIChpc0RlYnVnSG9tZSkge1xuICAgICAgICAgIGRlYnVnSG9tZUFubm90YXRlZFBhZ2VzLnB1c2gocGFnZVBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzRGVidWcpIHtcbiAgICAgICAgICBkZWJ1Z0Fubm90YXRlZFBhZ2VzLnB1c2gocGFnZVBhdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHJhdy5pbmNsdWRlcygnZGVmaW5lUGFnZSgnKSB8fCByYXcuaW5jbHVkZXMoJzxyb3V0ZScpKSB7XG4gICAgICBjb25zdCBvbGQgPSBleGlzdGluZ1BhZ2VzTWFwLmdldChwYWdlUGF0aCk7XG4gICAgICBpZiAob2xkICE9IG51bGwpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihwYWdlLCBvbGQpO1xuICAgICAgICBwYWdlLl9oYXNNZXRhID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2Nhbm5lZC5wdXNoKHBhZ2UpO1xuICB9XG5cbiAgLy8gMy4gXHU2MjZCXHU2M0NGXHU1MjA2XHU1MzA1XHVGRjA4XHU1RTc2XHU1M0QxXHU4OUUzXHU2NzkwXHU2QkNGXHU0RTJBXHU1MjA2XHU1MzA1XHU0RTBCXHU3Njg0XHU2MjQwXHU2NzA5XHU5ODc1XHU5NzYyXHVGRjA5XG4gIGNvbnN0IGNvbmZpZ1N1YlBrZ3MgPSBiYXNlQ29uZmlnLnN1YlBhY2thZ2VzID8/IFtdO1xuICBjb25zdCBzY2FubmVkU3ViUGtnczogU3ViUGFja2FnZUNvbmZpZ1tdID0gW107XG5cbiAgLy8gXHU1RUZBXHU3QUNCIGJhc2VDb25maWcgXHU1MTY4XHU4REVGXHU1Rjg0XHU2NjIwXHU1QzA0XHVGRjBDXHU2NUI5XHU0RkJGXHU2NUUwXHU4QkJBXHU2NUU3XHU3MjQ4XHU1OTI3XHU1MjA2XHU1MzA1XHU4RkQ4XHU2NjJGXHU2NUIwXHU3MjQ4XHU1QjUwXHU3NkVFXHU1RjU1XHU1MjA2XHU1MzA1XHVGRjBDXHU5MEZEXHU4MEZEXHU3Q0JFXHU1MUM2XHU1MzM5XHU5MTREXHU3RUU3XHU2MjdGIG1hbnVhbCBcdTVDNUVcdTYwMjdcbiAgY29uc3QgYmFzZUNvbmZpZ0Z1bGxQYXRoTWFwID0gbmV3IE1hcDxzdHJpbmcsIFBhZ2VDb25maWc+KCk7XG4gIGZvciAoY29uc3QgcGtnIG9mIGNvbmZpZ1N1YlBrZ3MpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwa2cucGFnZXMpKSB7XG4gICAgICBmb3IgKGNvbnN0IHAgb2YgcGtnLnBhZ2VzKSB7XG4gICAgICAgIGlmIChwLnBhdGgpIHtcbiAgICAgICAgICBjb25zdCBmdWxsUGF0aCA9IGAke3BrZy5yb290fS8ke3AucGF0aH1gLnJlcGxhY2UoL1xcXFwvZywgJy8nKS5yZXBsYWNlKC9eXFwvLywgJycpO1xuICAgICAgICAgIGJhc2VDb25maWdGdWxsUGF0aE1hcC5zZXQoZnVsbFBhdGgsIHApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdHlwZSBTdWJQYWNrYWdlRW50cnkgPSB7XG4gICAgcm9vdERpcjogc3RyaW5nO1xuICAgIGFic0Rpcjogc3RyaW5nO1xuICB9O1xuXG4gIGNvbnN0IHN1YkVudHJpZXM6IFN1YlBhY2thZ2VFbnRyeVtdID0gW107XG5cbiAgZm9yIChsZXQgcyA9IDA7IHMgPCBvcHRpb25zLnN1YlBhY2thZ2VzLmxlbmd0aDsgcysrKSB7XG4gICAgY29uc3Qgc3ViRGlyID0gb3B0aW9ucy5zdWJQYWNrYWdlc1tzXTtcbiAgICBjb25zdCBhYnNTdWJEaXIgPSBwYXRoLnJlc29sdmUocm9vdCwgc3ViRGlyKTtcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoYWJzU3ViRGlyKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc3ViUGFja2FnZU1vZGUgPT09ICdyb290Jykge1xuICAgICAgc3ViRW50cmllcy5wdXNoKHsgcm9vdERpcjogc3ViRGlyLCBhYnNEaXI6IGFic1N1YkRpciB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBzdWJkaXJzIFx1NkEyMVx1NUYwRlx1RkYxQVx1NjI2Qlx1NjNDRiBhYnNTdWJEaXIgXHU0RTBCXHU3Njg0XHU0RTAwXHU3RUE3XHU1QjUwXHU3NkVFXHU1RjU1XG4gICAgICBjb25zdCBpdGVtcyA9IGZzLnJlYWRkaXJTeW5jKGFic1N1YkRpciwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pO1xuICAgICAgbGV0IGhhc0RpcmVjdFBhZ2VzID0gZmFsc2U7XG5cbiAgICAgIC8vIFx1NjM5Mlx1NUU4Rlx1NEVFNVx1NEZERFx1OEJDMVx1NzUxRlx1NjIxMFx1N0EzM1x1NUI5QVxuICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBpZiAoaXRlbS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgLy8gXHU2MzkyXHU5NjY0XHU1RTM4XHU4OUMxXHU3Njg0XHU5NzVFXHU5ODc1XHU5NzYyXHU3RUM0XHU0RUY2L1x1OEQ0NFx1NkU5MFx1NzZFRVx1NUY1NVxuICAgICAgICAgIGlmIChbJ2NvbXBvbmVudHMnLCAndmlld3MnLCAnY29tbW9uJywgJ21vZHVsZXMnLCAnYXNzZXRzJywgJ3N0YXRpYycsICdmb250JywgJ2ZvbnRzJywgJ2ltZycsICdpbWdzJywgJ2ltYWdlJywgJ2ltYWdlcyddLmluY2x1ZGVzKGl0ZW0ubmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBjaGlsZEFicyA9IHBhdGguam9pbihhYnNTdWJEaXIsIGl0ZW0ubmFtZSk7XG4gICAgICAgICAgc3ViRW50cmllcy5wdXNoKHtcbiAgICAgICAgICAgIHJvb3REaXI6IGAke3N1YkRpcn0vJHtpdGVtLm5hbWV9YC5yZXBsYWNlKC9cXFxcL2csICcvJyksXG4gICAgICAgICAgICBhYnNEaXI6IGNoaWxkQWJzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXRlbS5pc0ZpbGUoKSAmJiBpdGVtLm5hbWUuZW5kc1dpdGgoJy51dnVlJykpIHtcbiAgICAgICAgICBoYXNEaXJlY3RQYWdlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gXHU1OTgyXHU2NzlDIHN1YkRpciBcdTY4MzlcdTc2RUVcdTVGNTVcdTRFMEJcdTc2RjRcdTYzQTVcdTY3MDkgLnV2dWUgXHU5ODc1XHU5NzYyXHVGRjBDXHU0RTVGXHU0RkREXHU3NTU5IHN1YkRpciBcdTgxRUFcdThFQUJcdTRGNUNcdTRFM0FcdTcyRUNcdTdBQ0JcdTUyMDZcdTUzMDVcbiAgICAgIGlmIChoYXNEaXJlY3RQYWdlcyB8fCBzdWJFbnRyaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBzdWJFbnRyaWVzLnB1c2goeyByb290RGlyOiBzdWJEaXIsIGFic0RpcjogYWJzU3ViRGlyIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGUgPSAwOyBlIDwgc3ViRW50cmllcy5sZW5ndGg7IGUrKykge1xuICAgIGNvbnN0IGVudHJ5ID0gc3ViRW50cmllc1tlXTtcbiAgICBjb25zdCBzdWJGaWxlcyA9IHNjYW5VdnVlRmlsZXMoZW50cnkuYWJzRGlyLCBvcHRpb25zLmV4Y2x1ZGUsIHJvb3QpO1xuICAgIGlmIChzdWJGaWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBzdWJGaWxlcy5zb3J0KCk7XG5cbiAgICBjb25zdCBzdWJSZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBzdWJGaWxlcy5tYXAoYXN5bmMgKHN1YkZpbGUpID0+IHtcbiAgICAgICAgY29uc3QgcmF3ID0gZnMucmVhZEZpbGVTeW5jKHN1YkZpbGUsICd1dGYtOCcpO1xuICAgICAgICBjb25zdCBtZXRhID0gYXdhaXQgcGFyc2VQYWdlTWV0YShyYXcsIHN1YkZpbGUsIHByb2Nlc3MuZW52LlVOSV9QTEFURk9STSwgcm9vdCwgb3B0aW9ucy5jb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHsgc3ViRmlsZSwgcmF3LCBtZXRhIH07XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdCBzdWJQYWdlczogKFBhZ2VDb25maWcgJiB7IF9oYXNNZXRhPzogYm9vbGVhbiB9KVtdID0gW107XG4gICAgZm9yIChjb25zdCB7IHN1YkZpbGUsIHJhdywgbWV0YSB9IG9mIHN1YlJlc3VsdHMpIHtcbiAgICAgIGlmICgobWV0YSBhcyBhbnkpPy5fc2tpcFBhZ2UgPT09IHRydWUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCByZWxQYXRoID0gcGF0aC5yZWxhdGl2ZShlbnRyeS5hYnNEaXIsIHN1YkZpbGUpLnJlcGxhY2UoL1xcXFwvZywgJy8nKS5yZXBsYWNlKC9cXC51dnVlJC8sICcnKTtcbiAgICAgIGNvbnN0IGZ1bGxTdWJQYXRoID0gYCR7ZW50cnkucm9vdERpcn0vJHtyZWxQYXRofWAucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoL15cXC8vLCAnJyk7XG5cbiAgICAgIGNvbnN0IHBhZ2U6IFBhZ2VDb25maWcgJiB7IF9oYXNNZXRhPzogYm9vbGVhbiB9ID0geyBwYXRoOiByZWxQYXRoIH07XG4gICAgICBpZiAobWV0YSAhPSBudWxsKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFnZSwgbWV0YSk7XG4gICAgICAgIHBhZ2UuX2hhc01ldGEgPSB0cnVlO1xuXG4gICAgICAgIGlmIChtZXRhLmRlYnVnICE9PSBmYWxzZSkge1xuICAgICAgICAgIGNvbnN0IGlzRGVidWdIb21lID0gbWV0YS5kZWJ1Z0hvbWUgPT09IHRydWUgfHwgbWV0YS5kZWJ1ZyA9PT0gJ2hvbWUnO1xuICAgICAgICAgIGNvbnN0IGlzRGVidWcgPSBpc0RlYnVnSG9tZSB8fCBtZXRhLmRlYnVnID09PSB0cnVlIHx8IG1ldGEub25seSA9PT0gdHJ1ZSB8fCBtZXRhLmlzRGV2ID09PSB0cnVlO1xuICAgICAgICAgIGlmIChpc0RlYnVnSG9tZSkge1xuICAgICAgICAgICAgZGVidWdIb21lQW5ub3RhdGVkUGFnZXMucHVzaChmdWxsU3ViUGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGlzRGVidWcpIHtcbiAgICAgICAgICAgIGRlYnVnQW5ub3RhdGVkUGFnZXMucHVzaChmdWxsU3ViUGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChyYXcuaW5jbHVkZXMoJ2RlZmluZVBhZ2UoJykgfHwgcmF3LmluY2x1ZGVzKCc8cm91dGUnKSkge1xuICAgICAgICBjb25zdCBvbGQgPSBleGlzdGluZ1BhZ2VzTWFwLmdldChmdWxsU3ViUGF0aCk7XG4gICAgICAgIGlmIChvbGQgIT0gbnVsbCkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocGFnZSwgb2xkKTtcbiAgICAgICAgICBwYWdlLl9oYXNNZXRhID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3ViUGFnZXMucHVzaChwYWdlKTtcbiAgICB9XG5cbiAgICBpZiAoc3ViUGFnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb25zdCBtZXJnZWRQYWdlczogUGFnZUNvbmZpZ1tdID0gW107XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBzdWJQYWdlcy5sZW5ndGg7IGsrKykge1xuICAgICAgY29uc3Qgc3AgPSBzdWJQYWdlc1trXTtcbiAgICAgIGNvbnN0IGZ1bGxTdWJQYXRoID0gYCR7ZW50cnkucm9vdERpcn0vJHtzcC5wYXRofWAucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoL15cXC8vLCAnJyk7XG4gICAgICBjb25zdCBtYW51YWwgPSBiYXNlQ29uZmlnRnVsbFBhdGhNYXAuZ2V0KGZ1bGxTdWJQYXRoKTtcbiAgICAgIGlmIChzcC5faGFzTWV0YSkge1xuICAgICAgICBtZXJnZWRQYWdlcy5wdXNoKHNwKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG1hbnVhbCAhPSBudWxsKSB7XG4gICAgICAgIG1lcmdlZFBhZ2VzLnB1c2goe1xuICAgICAgICAgIC4uLm1hbnVhbCxcbiAgICAgICAgICBwYXRoOiBzcC5wYXRoXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG1lcmdlZFBhZ2VzLnB1c2goc3ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNjYW5uZWRTdWJQa2dzLnB1c2goeyByb290OiBlbnRyeS5yb290RGlyLCBwYWdlczogbWVyZ2VkUGFnZXMgfSk7XG4gIH1cblxuICAvLyBcdTVDMDYgYmFzZUNvbmZpZyBcdTRFMkRcdTY3MkFcdTYyNkJcdTYzQ0ZcdTRFMTRcdTRFMERcdTVDNUVcdTRFOEVcdTUzRDdcdTdCQTFcdTc2RUVcdTVGNTVcdTc2ODRcdTU5MTZcdTkwRThcdTYyNEJcdTUxOTlcdTUyMDZcdTUzMDVcdUZGMDhcdTU5ODIgdW5pX21vZHVsZXMgXHU3QjJDXHU0RTA5XHU2NUI5XHU1MjA2XHU1MzA1XHVGRjA5XHU1MzlGXHU2ODM3XHU0RkREXHU3NTU5XG4gIGNvbnN0IG1hbmFnZWRTdWJQcmVmaXhlcyA9IG9wdGlvbnMuc3ViUGFja2FnZXMubWFwKHAgPT4gYCR7cC5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvXFwvKyQvLCAnJyl9L2ApO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmZpZ1N1YlBrZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjcCA9IGNvbmZpZ1N1YlBrZ3NbaV07XG4gICAgY29uc3QgY3BOb3JtID0gY3Aucm9vdC5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG4gICAgY29uc3QgaXNQYXJlbnRPZlNjYW5uZWQgPSBzY2FubmVkU3ViUGtncy5zb21lKHNwID0+IHNwLnJvb3Quc3RhcnRzV2l0aChgJHtjcC5yb290fS9gKSk7XG4gICAgY29uc3QgaXNNYW5hZ2VkID0gb3B0aW9ucy5zdWJQYWNrYWdlcy5pbmNsdWRlcyhjcE5vcm0pIHx8IG1hbmFnZWRTdWJQcmVmaXhlcy5zb21lKHByZWZpeCA9PiBjcE5vcm0uc3RhcnRzV2l0aChwcmVmaXgpKTtcbiAgICBpZiAoIWlzUGFyZW50T2ZTY2FubmVkICYmICFpc01hbmFnZWQgJiYgIXNjYW5uZWRTdWJQa2dzLnNvbWUoc3AgPT4gc3Aucm9vdCA9PT0gY3Aucm9vdCkpIHtcbiAgICAgIHNjYW5uZWRTdWJQa2dzLnB1c2goY3ApO1xuICAgIH1cbiAgfVxuXG4gIC8vIDQuIFx1NTQwOFx1NUU3Nlx1NEUzQlx1NTMwNSBwYWdlc1x1RkYwOFx1NEVFNVx1NzhDMVx1NzZEOFx1NUI5RVx1OTY0NVx1NUI1OFx1NTcyOFx1NzY4NFx1NjU4N1x1NEVGNlx1NEUzQVx1NTFDNlx1RkYwQ1x1ODFFQVx1NTJBOFx1NTI1NFx1OTY2NFx1NURGMlx1NTIyMFx1OTY2NFx1NzY4NFx1OTg3NVx1OTc2Mlx1RkYwOVxuICBjb25zdCBtYW51YWxQYWdlcyA9IGJhc2VDb25maWcucGFnZXMgPz8gW107XG4gIGNvbnN0IG1hbnVhbFBhZ2VzTWFwID0gbmV3IE1hcDxzdHJpbmcsIFBhZ2VDb25maWc+KCk7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgbWFudWFsUGFnZXMubGVuZ3RoOyBrKyspIHtcbiAgICBtYW51YWxQYWdlc01hcC5zZXQobWFudWFsUGFnZXNba10ucGF0aCwgbWFudWFsUGFnZXNba10pO1xuICB9XG5cbiAgY29uc3QgZmluYWxQYWdlczogUGFnZUNvbmZpZ1tdID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgc2Nhbm5lZC5sZW5ndGg7IGsrKykge1xuICAgIGNvbnN0IHNwID0gc2Nhbm5lZFtrXTtcbiAgICBjb25zdCBtYW51YWwgPSBtYW51YWxQYWdlc01hcC5nZXQoc3AucGF0aCk7XG4gICAgaWYgKHNwLl9oYXNNZXRhKSB7XG4gICAgICBmaW5hbFBhZ2VzLnB1c2goc3ApO1xuICAgIH1cbiAgICBlbHNlIGlmIChtYW51YWwgIT0gbnVsbCkge1xuICAgICAgZmluYWxQYWdlcy5wdXNoKHtcbiAgICAgICAgLi4ubWFudWFsLFxuICAgICAgICBwYXRoOiBzcC5wYXRoXG4gICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmaW5hbFBhZ2VzLnB1c2goc3ApO1xuICAgIH1cbiAgfVxuXG4gIC8vIFx1NEZERFx1NzU1OVx1NjI0Qlx1NTJBOFx1OTE0RFx1N0Y2RVx1NEUyRFx1MzAwMVx1NzhDMVx1NzZEOFx1NEUwQVx1NzcxRlx1NUI5RVx1NUI1OFx1NTcyOFx1NEY0Nlx1NEUwRFx1NTcyOFx1NjI2Qlx1NjNDRlx1NzZFRVx1NUY1NVx1NTE4NVx1NzY4NFx1OTg3NVx1OTc2Mlx1RkYwOFx1NTk4MiB1bmlfbW9kdWxlcyBcdTUxODVcdTdGNkVcdTk4NzVcdTk3NjJcdUZGMDlcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBtYW51YWxQYWdlcy5sZW5ndGg7IGsrKykge1xuICAgIGNvbnN0IG1wID0gbWFudWFsUGFnZXNba107XG4gICAgaWYgKGZpbmFsUGFnZXMuc29tZShwID0+IHAucGF0aCA9PT0gbXAucGF0aCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLnJlc29sdmUocm9vdCwgYCR7bXAucGF0aH0udXZ1ZWApKSkge1xuICAgICAgZmluYWxQYWdlcy5wdXNoKG1wKTtcbiAgICB9XG4gIH1cblxuICAvLyA1LiBcdTk5OTZcdTk4NzVcdTYzOTJcdTY3MDBcdTUyNERcdUZGMDhwYWdlcy5qc29uIFx1NzY4NFx1N0IyQ1x1NEUwMFx1OTg3OSBwYWdlc1swXSBcdTUzNzNcdTRFM0FcdTVFOTRcdTc1MjhcdTlFRDhcdThCQTRcdTU0MkZcdTUyQThcdTk5OTZcdTk4NzVcdUZGMDlcbiAgLy8gXHU0RjE4XHU1MTQ4XHU3RUE3XHVGRjFBZGVmaW5lUGFnZSB0eXBlOiAnaG9tZScgLyBpc0hvbWU6IHRydWVcdUZGMDhcdTk4NzVcdTk3NjJcdTUxODVcdTY2M0VcdTVGMEZcdTU4RjBcdTY2MEVcdTY3MDBcdTlBRDhcdUZGMDk+IG9wdHMuaG9tZVBhZ2VcdUZGMDhcdTYzRDJcdTRFRjZcdTkwMDlcdTk4NzlcdUZGMDk+IGJhc2VDb25maWcuaG9tZVBhZ2VcdUZGMDhcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjZcdUZGMDlcbiAgbGV0IGhvbWUgPSAnJztcbiAgY29uc3QgaG9tZUl0ZW0gPSBzY2FubmVkLmZpbmQocCA9PiAocCBhcyBhbnkpLnR5cGUgPT09ICdob21lJyB8fCAocCBhcyBhbnkpLmlzSG9tZSA9PT0gdHJ1ZSk7XG4gIGlmIChob21lSXRlbSAhPSBudWxsKSB7XG4gICAgaG9tZSA9IGhvbWVJdGVtLnBhdGg7XG4gIH1cbiAgZWxzZSBpZiAob3B0aW9ucy5ob21lUGFnZSAhPT0gJycpIHtcbiAgICBob21lID0gb3B0aW9ucy5ob21lUGFnZTtcbiAgfVxuICBlbHNlIGlmIChiYXNlQ29uZmlnLmhvbWVQYWdlICE9IG51bGwgJiYgYmFzZUNvbmZpZy5ob21lUGFnZSAhPT0gJycpIHtcbiAgICBob21lID0gYmFzZUNvbmZpZy5ob21lUGFnZTtcbiAgfVxuXG4gIGlmIChob21lICE9PSAnJyAmJiBmaW5hbFBhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBpZHggPSBmaW5hbFBhZ2VzLmZpbmRJbmRleChwID0+IHAucGF0aCA9PT0gaG9tZSk7XG4gICAgaWYgKGlkeCA+IDApIHtcbiAgICAgIGNvbnN0IFtpdGVtXSA9IGZpbmFsUGFnZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICBmaW5hbFBhZ2VzLnVuc2hpZnQoaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgLy8gNi4gXHU2NTJGXHU0RUQ4XHU1QjlEXHU4MUVBXHU1QjlBXHU0RTQ5XHU1QkZDXHU4MjJBXHU2ODBGXHU1RjUyXHU0RTAwICsgXHU1MjY1XHU3OUJCXHU0RTM0XHU2NUY2XHU2ODA3XHU4QkIwXG4gIGZpbmFsUGFnZXMuZm9yRWFjaChub3JtYWxpemVDdXN0b21OYXZGb3JBbGlwYXkpO1xuICBzY2FubmVkU3ViUGtncy5mb3JFYWNoKChwa2cpID0+IHtcbiAgICBwa2cucGFnZXMuZm9yRWFjaChub3JtYWxpemVDdXN0b21OYXZGb3JBbGlwYXkpO1xuICB9KTtcbiAgaWYgKGJhc2VDb25maWcuZ2xvYmFsU3R5bGU/Lm5hdmlnYXRpb25TdHlsZSA9PT0gJ2N1c3RvbScpIHtcbiAgICBiYXNlQ29uZmlnLmdsb2JhbFN0eWxlWydtcC1hbGlwYXknXSA9IHtcbiAgICAgIHRyYW5zcGFyZW50VGl0bGU6ICdhbHdheXMnLFxuICAgICAgdGl0bGVQZW5ldHJhdGU6ICdZRVMnLFxuICAgICAgLi4uKGJhc2VDb25maWcuZ2xvYmFsU3R5bGVbJ21wLWFsaXBheSddID8/IHt9KVxuICAgIH07XG4gIH1cblxuICBmaW5hbFBhZ2VzLmZvckVhY2gocCA9PiBjbGVhblRlbXBQcm9wcyhwLCBmYWxzZSkpO1xuICBzY2FubmVkU3ViUGtncy5mb3JFYWNoKChwa2cpID0+IHtcbiAgICBwa2cucGFnZXMuZm9yRWFjaChwID0+IGNsZWFuVGVtcFByb3BzKHAsIGZhbHNlKSk7XG4gIH0pO1xuXG4gIC8vIDcuIFx1ODhDNVx1OTE0RFx1NUY4NVx1ODQzRFx1NzZEOFx1NUJGOVx1OEM2MVx1RkYwOHN1YlBhY2thZ2VzIFx1NzUzMSBzdGFnZXMgXHU0RTRCXHU1NDBFXHU3Njg0IGZpbmFsaXplIFx1N0VERlx1NEUwMFx1ODg2NVx1RkYwQ1x1NEZERFx1OEJDMVx1OTUyRVx1NUU4Rlx1RkYwOVxuICBjb25zdCBvdXRwdXQgPSB7IHBhZ2VzOiBmaW5hbFBhZ2VzIH0gYXMgUGFnZXNKc29uT3V0cHV0O1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYmFzZUNvbmZpZyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGsgPSBrZXlzW2ldO1xuICAgIGlmIChrICE9PSAncGFnZXMnICYmIGsgIT09ICdob21lUGFnZScgJiYgayAhPT0gJ3N1YlBhY2thZ2VzJykge1xuICAgICAgb3V0cHV0W2tdID0gYmFzZUNvbmZpZ1trXTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdGF0ZTogUGFnZXNCdWlsZFN0YXRlID0ge1xuICAgIHJvb3QsXG4gICAgaXNQcm9kdWN0aW9uLFxuICAgIG9wdGlvbnMsXG4gICAgYmFzZUNvbmZpZyxcbiAgICBiYXNlQ29uZmlnUGFyc2VPazogIWNvbmZpZ1BhcnNlRmFpbGVkLFxuICAgIGNvbmZpZ1BhdGgsXG4gICAgb3V0cHV0UGF0aCxcbiAgICBleGlzdGluZ1BhZ2VzTWFwLFxuICAgIGZpbmFsUGFnZXMsXG4gICAgc2Nhbm5lZFN1YlBrZ3MsXG4gICAgZGVidWdBbm5vdGF0ZWRQYWdlcyxcbiAgICBkZWJ1Z0hvbWVBbm5vdGF0ZWRQYWdlcyxcbiAgICBvdXRwdXQsXG4gICAgdmlydHVhbFBhZ2VzOiBbXSxcbiAgICBmbGFnczoge1xuICAgICAgc2FuZGJveEFjdGl2ZTogZmFsc2UsXG4gICAgICBzdHJpY3RNYWluUGFnZXM6IGZhbHNlLFxuICAgICAgc2tpcENvbmZpZ1dyaXRlYmFjazogZmFsc2VcbiAgICB9LFxuICAgIHN0YXRzOiB7XG4gICAgICBwYWdlQ291bnQ6IGZpbmFsUGFnZXMubGVuZ3RoLFxuICAgICAgc3ViUGFja2FnZUNvdW50OiBzY2FubmVkU3ViUGtncy5sZW5ndGhcbiAgICB9XG4gIH07XG5cbiAgLy8gOC4gXHU2MzA5XHU1RThGXHU4REQxIHN0YWdlc1x1RkYwOHNhbmRib3ggXHUyMTkyIHRhYmJhciBcdTIxOTIgcm91dGUtdGFibGVcdUZGMDlcdUZGMUFcdTU1MkZcdTRFMDBcdThDMDNcdTc1MjhcdTcwQjlcdUZGMENcdTk4N0FcdTVFOEZcdTdFRDNcdTY3ODRcdTYwMjdcdTU2RkFcdTVCOUFcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICBzdGFnZXNbaV0ucnVuKHN0YXRlLCBjdHgpO1xuICB9XG5cbiAgLy8gOS4gZmluYWxpemVcdUZGMUFzdWJQYWNrYWdlcyBcdTY3MDBcdTU0MEVcdThENEJcdTUwM0NcdUZGMENcdTRGRERcdThCQzFcdTk1MkVcdTVFOEZcdTRFM0EgcGFnZXMgXHUyMTkyIFx1NTdGQVx1NUVBN1x1OTUyRSBcdTIxOTIgc3ViUGFja2FnZXNcbiAgaWYgKHN0YXRlLnNjYW5uZWRTdWJQa2dzLmxlbmd0aCA+IDApIHtcbiAgICBvdXRwdXQuc3ViUGFja2FnZXMgPSBzdGF0ZS5zY2FubmVkU3ViUGtncztcbiAgfVxuICBlbHNlIHtcbiAgICBkZWxldGUgb3V0cHV0LnN1YlBhY2thZ2VzO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFx1NjgzOFx1NUZDM1x1RkYxQVx1ODQzRFx1NzZEOFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQ3VycmVudFBsYXRmb3JtKHBsYXRmb3JtSW5wdXQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBwID0gKHBsYXRmb3JtSW5wdXQgfHwgcHJvY2Vzcy5lbnYuVU5JX1BMQVRGT1JNIHx8ICdoNScpLnRvVXBwZXJDYXNlKCk7XG4gIGlmIChwID09PSAnV0VCJylcbiAgICByZXR1cm4gJ0g1JztcbiAgaWYgKHAgPT09ICdBUFAnIHx8IHAgPT09ICdBUFAtUExVUycpIHtcbiAgICBjb25zdCBzdWIgPSAocHJvY2Vzcy5lbnYuVU5JX0FQUF9QTEFURk9STSB8fCAnJykudG9VcHBlckNhc2UoKTtcbiAgICBpZiAoc3ViID09PSAnQU5EUk9JRCcpXG4gICAgICByZXR1cm4gJ0FQUC1BTkRST0lEJztcbiAgICBpZiAoc3ViID09PSAnSU9TJylcbiAgICAgIHJldHVybiAnQVBQLUlPUyc7XG4gICAgaWYgKHN1YiA9PT0gJ0hBUk1PTlknKVxuICAgICAgcmV0dXJuICdBUFAtSEFSTU9OWSc7XG4gICAgcmV0dXJuICdBUFAnO1xuICB9XG4gIHJldHVybiBwO1xufVxuXG4vKiogXHU2MjhBXHU2Nzg0XHU1RUZBXHU3RUQzXHU2NzlDXHU4NDNEXHU3NkQ4XHVGRjFBXHU1MTk5IHBhZ2VzLmpzb25cdUZGMDhcdTUxODVcdTVCQjlcdTRFMERcdTUzRDhcdTUyMTlcdThERjNcdThGQzdcdUZGMDkrIHdzIFx1NTE2OFx1OTFDRlx1NTIzN1x1NjVCMCArIFx1NTZERVx1NTE5OSBwYWdlcy5jb25maWcuanNvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1pdFBhZ2VzKHN0YXRlOiBQYWdlc0J1aWxkU3RhdGUsIHNlcnZlcjogYW55ID0gbnVsbCk6IHZvaWQge1xuICBjb25zdCBjdXJyZW50UGxhdGZvcm0gPSByZXNvbHZlQ3VycmVudFBsYXRmb3JtKHByb2Nlc3MuZW52LlVOSV9QTEFURk9STSk7XG4gIGNvbnN0IGNoYW5nZWQgPSB3cml0ZVBhZ2VzSnNvbihcbiAgICBzdGF0ZS5vdXRwdXQsXG4gICAgc3RhdGUub3V0cHV0UGF0aCxcbiAgICBjdXJyZW50UGxhdGZvcm0sXG4gICAgc3RhdGUuZmxhZ3Muc2FuZGJveEFjdGl2ZSxcbiAgICBzdGF0ZS5mbGFncy5zdHJpY3RNYWluUGFnZXNcbiAgKTtcblxuICBpZiAoY2hhbmdlZCkge1xuICAgIGlmIChzdGF0ZS5mbGFncy5zYW5kYm94QWN0aXZlKSB7XG4gICAgICBjb25zdCBhbGxQYXRocyA9IFtcbiAgICAgICAgLi4uc3RhdGUub3V0cHV0LnBhZ2VzLm1hcCgocDogUGFnZUNvbmZpZykgPT4gcC5wYXRoKSxcbiAgICAgICAgLi4uc3RhdGUuc2Nhbm5lZFN1YlBrZ3MuZmxhdE1hcChzID0+IHMucGFnZXMubWFwKHAgPT4gYCR7cy5yb290fS8ke3AucGF0aH1gKSlcbiAgICAgIF07XG4gICAgICBjb25zb2xlLmxvZyhgXFx4MUJbMzNtXHUyNkExIFt1bmktcGFnZXNdIFx1NkM5OVx1NzZEMlx1NzJFQ1x1N0FDQlx1OEMwM1x1OEJENVx1NkEyMVx1NUYwRlx1NURGMlx1NzUxRlx1NjU0ODogXHU1MTcxICR7YWxsUGF0aHMubGVuZ3RofSBcdTRFMkFcdTk4NzVcdTk3NjIgKFx1OTk5Nlx1OTg3NTogJHtzdGF0ZS5vdXRwdXQucGFnZXNbMF0ucGF0aH0pXFx4MUJbMG1gKTtcbiAgICAgIGNvbnNvbGUubG9nKGBcXHgxQlszM20gICBcdTUzMDVcdTU0MkJcdTk4NzVcdTk3NjI6ICR7YWxsUGF0aHMuam9pbignIHwgJyl9XFx4MUJbMG1gKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgW3VuaS1wYWdlc10gR2VuZXJhdGVkICR7c3RhdGUub3B0aW9ucy5vdXRGaWxlfSAoJHtzdGF0ZS5zdGF0cy5wYWdlQ291bnR9IHBhZ2VzLCAke3N0YXRlLnN0YXRzLnN1YlBhY2thZ2VDb3VudH0gc3VicGFja2FnZXMpYCk7XG4gICAgfVxuXG4gICAgLy8gXHU4OUU2XHU1M0QxIFZpdGUgXHU1RjAwXHU1M0QxXHU2NzBEXHU1MkExXHU1NjY4XHU1MTY4XHU5MUNGXHU3MEVEXHU5MUNEXHU4RjdEXHVGRjBDXHU5MDFBXHU3N0U1IEg1IC8gQXBwIFx1NUYwMFx1NTNEMVx1NUJBMlx1NjIzN1x1N0FFRlx1N0FDQlx1NTM3M1x1NTIzN1x1NjVCMFx1OERFRlx1NzUzMVxuICAgIGlmIChzZXJ2ZXIgIT0gbnVsbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbW9kID0gc2VydmVyLm1vZHVsZUdyYXBoLmdldE1vZHVsZUJ5SWQoc3RhdGUub3V0cHV0UGF0aCk7XG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkge1xuICAgICAgICAgIHNlcnZlci5tb2R1bGVHcmFwaC5pbnZhbGlkYXRlTW9kdWxlKG1vZCk7XG4gICAgICAgIH1cbiAgICAgICAgc2VydmVyLndzLnNlbmQoe1xuICAgICAgICAgIHR5cGU6ICdmdWxsLXJlbG9hZCcsXG4gICAgICAgICAgcGF0aDogJyonXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY2F0Y2gge31cbiAgICB9XG4gIH1cblxuICAvLyBcdTU2REVcdTUxOTkgcGFnZXMuY29uZmlnLmpzb25cdUZGMUFcdTZDOTlcdTc2RDJcdTc1MUZcdTY1NDhcdTYyMTZcdTU3RkFcdTVFQTdcdThCRURcdTZDRDVcdTk1MTlcdThCRUZcdTY1RjZcdTdFRERcdTRFMERcdTU2REVcdTUxOTlcbiAgaWYgKCFzdGF0ZS5mbGFncy5za2lwQ29uZmlnV3JpdGViYWNrICYmIHN0YXRlLmJhc2VDb25maWdQYXJzZU9rKSB7XG4gICAgaWYgKHdyaXRlQmFja0NvbmZpZyhzdGF0ZS5jb25maWdQYXRoLCBzdGF0ZS5maW5hbFBhZ2VzLCBzdGF0ZS5zY2FubmVkU3ViUGtncywgc3RhdGUub3V0cHV0UGF0aCwgc3RhdGUub3B0aW9ucykpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBbdW5pLXBhZ2VzXSBBdXRvbWF0aWNhbGx5IHN5bmNlZCBjaGFuZ2VzIGludG8gJHtzdGF0ZS5vcHRpb25zLmNvbmZpZ0ZpbGV9YCk7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVml0ZSBcdTYzRDJcdTRFRjZcdTVCRkNcdTUxRkFcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlQYWdlc1BsdWdpbih1c2VyT3B0aW9uczogVW5pUGFnZXNPcHRpb25zID0ge30pOiBQbHVnaW4ge1xuICBjb25zdCBvcHRpb25zID0gcmVzb2x2ZU9wdGlvbnModXNlck9wdGlvbnMpO1xuXG4gIGxldCBwcm9qZWN0Um9vdCA9IHByb2Nlc3MuY3dkKCk7XG4gIGxldCBzZXJ2ZXI6IGFueSA9IG51bGw7XG4gIGxldCBpc1Byb2R1Y3Rpb24gPSBmYWxzZTtcbiAgbGV0IHRpbWVvdXRJZDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCBudWxsID0gbnVsbDtcbiAgbGV0IGdlbmVyYXRpb246IFByb21pc2U8dm9pZD4gPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgbGV0IHN0YWdlczogUGFnZXNTdGFnZVtdID0gW107XG4gIGxldCBzdGFnZUNoZWNrZWQgPSBmYWxzZTtcbiAgbGV0IGhhc0dlbmVyYXRlZEluQ29uZmlnUmVzb2x2ZWQgPSBmYWxzZTtcblxuICBhc3luYyBmdW5jdGlvbiBydW5HZW5lcmF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIW9wdGlvbnMuZW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjdHg6IFBhZ2VzU3RhZ2VDb250ZXh0ID0geyByb290OiBwcm9qZWN0Um9vdCwgaXNQcm9kdWN0aW9uIH07XG5cbiAgICAvLyBcdTgwRkRcdTUyOUJcdTgxRUFcdTY4QzBcdUZGMDhcdTRFQzVcdTVGMDBcdTUzRDFcdTY3MUZcdTRFMDBcdTZCMjFcdUZGMDlcdUZGMUFcdTUzNkJcdTY2MUZcdTY2MkZcdTcyRUNcdTdBQ0JcdTUzRUZcdTkwMDlcdTYzRDJcdTRFRjZcdUZGMENcdTdGM0FcdTU5MzFcdTUzRUFcdTU0NEFcdThCNjZcdTRFMERcdTk2M0JcdTY1QURcbiAgICBpZiAoIWlzUHJvZHVjdGlvbiAmJiAhc3RhZ2VDaGVja2VkKSB7XG4gICAgICBzdGFnZUNoZWNrZWQgPSB0cnVlO1xuICAgICAgY29uc3QgcHJlc2VudCA9IG5ldyBTZXQoc3RhZ2VzLm1hcChzID0+IHMubmFtZSkpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBLTk9XTl9QQUdFU19TVEFHRVMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga25vd24gPSBLTk9XTl9QQUdFU19TVEFHRVNbaV07XG4gICAgICAgIGlmICghcHJlc2VudC5oYXMoa25vd24pKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBcXHgxQlszM21bdW5pLXBhZ2VzXSBcdTk2MzZcdTZCQjUgJHtrbm93bn0gXHU2NzJBXHU2Q0U4XHU1MThDXHVGRjBDXHU1QkY5XHU1RTk0XHU1MjlGXHU4MEZEXHVGRjA4c2FuZGJveCAvIHRhYkJhciAvIHJvdXRlLXRhYmxlXHVGRjA5XHU1QzA2XHU0RTBEXHU3NTFGXHU2NTQ4XFx4MUJbMG1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlID0gYXdhaXQgYnVpbGRQYWdlcyh1c2VyT3B0aW9ucywgY3R4LCBzdGFnZXMpO1xuICAgIGlmIChzdGF0ZSA9PSBudWxsKSB7XG4gICAgICAvLyBwYWdlcy5jb25maWcuanNvbiBcdThCRURcdTZDRDVcdTk1MTlcdThCRUZcdTRFMTRcdTY1RTBcdTdGMTNcdTVCNThcdUZGMUFcdTRGRERcdTYzMDFcdTczQjBcdTcyQjZcdUZGMENcdTdCNDlcdTc1MjhcdTYyMzdcdTRGRUVcdTU5N0RcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gXHU1NzI4XHU1MTk5XHU3NkQ4XHU1MjREXHU0RkREXHU1QjU4XHU1QjhDXHU2NTc0XHU5ODc1XHU5NzYyXHU1MTQzXHU2NTcwXHU2MzZFXHVGRjFBXHU2QTIxXHU1RjBGIDQgXHU0RjFBXHU2MjhBXHU5NzVFXHU1QkJGXHU0RTNCIFRhYiBcdTk4NzVcdTRFQ0UgcGFnZXMuanNvbiBcdTc5RkJcdTk2NjRcdUZGMENcbiAgICAvLyBUYWJWaWV3cyBcdTc1MUZcdTYyMTBcdTU2NjhcdTRFQ0RcdTk3MDBcdTg5ODFcdThGRDlcdTRFOUJcdTk4NzVcdTk3NjJcdTc2ODRcdTU5MUFcdTVFNzNcdTUzRjAgZGVmaW5lUGFnZSBcdTkxNERcdTdGNkVcdTY3NjVcdTU0MENcdTZCNjUgbmF2YmFyIFx1NjgwN1x1OTg5OFx1N0I0OVx1NUI1N1x1NkJCNVx1MzAwMlxuICAgIHNldFBhZ2VzTWV0YVNuYXBzaG90KHtcbiAgICAgIHBsYXRmb3JtOiByZXNvbHZlQ3VycmVudFBsYXRmb3JtKHByb2Nlc3MuZW52LlVOSV9QTEFURk9STSksXG4gICAgICBwYWdlczogc3RhdGUuZmluYWxQYWdlcyxcbiAgICAgIHN1YlBhY2thZ2VzOiBzdGF0ZS5zY2FubmVkU3ViUGtnc1xuICAgIH0sIHN0YXRlLnJvb3QpO1xuICAgIGNvbW1pdFBhZ2VzKHN0YXRlLCBzZXJ2ZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5xdWV1ZUdlbmVyYXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGdlbmVyYXRpb24gPSBnZW5lcmF0aW9uLnRoZW4ocnVuR2VuZXJhdGUsIHJ1bkdlbmVyYXRlKTtcbiAgICByZXR1cm4gZ2VuZXJhdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZEdlbmVyYXRlKCk6IHZvaWQge1xuICAgIGlmICh0aW1lb3V0SWQgIT0gbnVsbCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGltZW91dElkID0gbnVsbDtcbiAgICAgIHZvaWQgZW5xdWV1ZUdlbmVyYXRlKCk7XG4gICAgfSwgREVCT1VOQ0VfTVMpO1xuICB9XG5cbiAgbGV0IGhhc1dhdGNoZWRDaGFuZ2VzID0gZmFsc2U7XG4gIGxldCBoYXNSZWxldmFudFJvdXRlQ2hhbmdlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG1hdGNoZXNQYWdlID0gKGZpbGVQYXRoOiBzdHJpbmcpOiBib29sZWFuID0+XG4gICAgaXNQYWdlRmlsZShmaWxlUGF0aCwgb3B0aW9ucy5kaXIsIG9wdGlvbnMuc3ViUGFja2FnZXMsIG9wdGlvbnMuZXhjbHVkZSwgcHJvamVjdFJvb3QpO1xuXG4gIGNvbnN0IGlzQ29uZmlnRmlsZSA9IChmaWxlUGF0aDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IGZpbGVQYXRoLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcbiAgICBjb25zdCBjb25maWdQYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCBvcHRpb25zLmNvbmZpZ0ZpbGUpLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcbiAgICBjb25zdCB0YWJiYXJDb25maWdQYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCAnc3JjL3RhYmJhci9jb25maWcudXRzJykucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xuICAgIGNvbnN0IGVudlBhdGggPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsICcuZW52JykucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xuICAgIHJldHVybiAoXG4gICAgICBub3JtYWxpemVkID09PSBjb25maWdQYXRoXG4gICAgICB8fCBub3JtYWxpemVkID09PSB0YWJiYXJDb25maWdQYXRoXG4gICAgICB8fCBub3JtYWxpemVkID09PSBlbnZQYXRoXG4gICAgICB8fCBub3JtYWxpemVkLmluY2x1ZGVzKCdwYWdlcy5jb25maWcnKVxuICAgICAgfHwgbm9ybWFsaXplZC5pbmNsdWRlcygndGFiYmFyL2NvbmZpZycpXG4gICAgICB8fCBub3JtYWxpemVkLmVuZHNXaXRoKCcuZW52JylcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3VuaS1wYWdlcycsXG4gICAgZW5mb3JjZTogJ3ByZScgYXMgY29uc3QsXG5cbiAgICBhc3luYyBjb25maWdSZXNvbHZlZChjb25maWc6IGFueSkge1xuICAgICAgcHJvamVjdFJvb3QgPSBjb25maWcucm9vdCA/PyBwcm9jZXNzLmN3ZCgpO1xuICAgICAgLy8gXHU1M0QxXHU3M0IwXHU2MjQwXHU2NzA5XHU3MkVDXHU3QUNCXHU2Q0U4XHU1MThDXHU3Njg0XHU1MzZCXHU2NjFGXHU2M0QyXHU0RUY2XG4gICAgICBzdGFnZXMgPSBjb2xsZWN0U3RhZ2VzRnJvbVBsdWdpbnMoY29uZmlnLnBsdWdpbnMgPz8gW10pO1xuICAgICAgLy8gXHU1M0VBXHU2NzA5XHU1NzI4XHU2NjBFXHU3ODZFXHU3Njg0XHU3NTFGXHU0RUE3XHU1M0QxXHU3MjQ4XHU2MjUzXHU1MzA1XHU2Nzg0XHU1RUZBXHVGRjA4XHU5NzVFIHdhdGNoIFx1NUYwMFx1NTNEMVx1NkEyMVx1NUYwRlx1RkYwOVx1NjVGNlx1NjI0RFx1NTIyNFx1NUI5QVx1NEUzQVx1NzUxRlx1NEVBN1x1NkEyMVx1NUYwRlxuICAgICAgLy8gXHU2NzJDXHU1NzMwXHU1RjAwXHU1M0QxXHU4QzAzXHU4QkQ1XHVGRjA4SDUgZGV2IHNlcnZlIFx1NEUwRSBpT1MgLyBBbmRyb2lkIC8gSGFybW9ueU9TIFx1NjcyQ1x1NTczMFx1NTM5Rlx1NzUxRlx1NTdGQVx1NUVBN1x1N0YxNlx1OEJEMVx1RkYwOVx1NTc0N1x1NTE0MVx1OEJCOFx1NkM5OVx1NzZEMlx1NkEyMVx1NUYwRlx1NzUxRlx1NjU0OFxuICAgICAgY29uc3QgbW9kZSA9IGNvbmZpZy5tb2RlID8/IHByb2Nlc3MuZW52Lk5PREVfRU5WID8/ICdkZXZlbG9wbWVudCc7XG4gICAgICBjb25zdCBpc0V4cGxpY2l0UHJvZCA9IG1vZGUgPT09ICdwcm9kdWN0aW9uJyB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuICAgICAgY29uc3QgaXNXYXRjaCA9IEJvb2xlYW4oY29uZmlnLmJ1aWxkPy53YXRjaCB8fCBwcm9jZXNzLmVudi5VTklfV0FUQ0ggfHwgcHJvY2Vzcy5lbnYuVU5JX0FQUF9XQVRDSCk7XG4gICAgICBpc1Byb2R1Y3Rpb24gPSBpc0V4cGxpY2l0UHJvZCAmJiAhaXNXYXRjaDtcblxuICAgICAgaWYgKG9wdGlvbnMuZW5hYmxlZCkge1xuICAgICAgICBhd2FpdCBlbnF1ZXVlR2VuZXJhdGUoKTtcbiAgICAgICAgaGFzR2VuZXJhdGVkSW5Db25maWdSZXNvbHZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHdhdGNoQ2hhbmdlKGlkOiBzdHJpbmcpIHtcbiAgICAgIGlmICghb3B0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGhhc1dhdGNoZWRDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBpZC5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG4gICAgICBpZiAoaXNDb25maWdGaWxlKG5vcm1hbGl6ZWQpIHx8IG1hdGNoZXNQYWdlKG5vcm1hbGl6ZWQpKSB7XG4gICAgICAgIGhhc1JlbGV2YW50Um91dGVDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgYnVpbGRTdGFydCgpIHtcbiAgICAgIGlmICghb3B0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChoYXNHZW5lcmF0ZWRJbkNvbmZpZ1Jlc29sdmVkKSB7XG4gICAgICAgIC8vIFx1OTk5Nlx1NkIyMVx1Njc4NFx1NUVGQVx1NURGMlx1NTcyOCBjb25maWdSZXNvbHZlZCBcdTk2MzZcdTZCQjVcdTVCOENcdTYyMTBcdTc1MUZcdTYyMTBcdUZGMENcdThERjNcdThGQzcgYnVpbGRTdGFydCBcdTc2ODRcdTkxQ0RcdTU5MERcdTUyMURcdTU5Q0JcdTYyNjdcdTg4NENcdUZGMUJcbiAgICAgICAgaGFzR2VuZXJhdGVkSW5Db25maWdSZXNvbHZlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBcdTU3Mjggd2F0Y2ggXHU5MUNEXHU2NUIwXHU2Nzg0XHU1RUZBXHU5NjM2XHU2QkI1XHVGRjBDXHU1OTgyXHU2NzlDXHU2NjBFXHU3ODZFXHU2MzU1XHU4M0I3XHU1MjMwXHU0RTg2XHU2NTg3XHU0RUY2XHU1M0Q4XHU1MkE4XHU0RTE0XHU1M0Q4XHU1MkE4XHU3Njg0XHU2NTg3XHU0RUY2XHU1MTY4XHU5MEU4XHU0RTBFXHU5ODc1XHU5NzYyL1x1OERFRlx1NzUzMVx1NjVFMFx1NTE3M1x1RkYwOFx1NTk4MiB2aWV3cy8qKlx1MzAwMWNvbXBvbmVudHMvKipcdUZGMDlcdUZGMENcbiAgICAgIC8vIFx1NTIxOVx1NTc1QVx1NTFCM1x1OERGM1x1OEZDN1x1NjcyQ1x1NkIyMVx1OERFRlx1NzUzMVx1OTFDRFx1NjVCMFx1NzUxRlx1NjIxMFx1NEUwRVx1NTE5OVx1NzZEOFx1RkYwQ1x1OTA3Rlx1NTE0RFx1NEZFRVx1NjUzOVx1NjY2RVx1OTAxQVx1N0VDNFx1NEVGNlx1NUYxNVx1NTNEMVx1NjVFMFx1OEMxM1x1NzY4NFx1NTE2OFx1OTFDRlx1OERFRlx1NzUzMVx1OTFDRFx1NTE5OVx1NEUwRVx1NTkxQVx1N0FFRlx1NEU5Mlx1OEUyOVxuICAgICAgaWYgKGhhc1dhdGNoZWRDaGFuZ2VzICYmICFoYXNSZWxldmFudFJvdXRlQ2hhbmdlcykge1xuICAgICAgICBoYXNXYXRjaGVkQ2hhbmdlcyA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBoYXNXYXRjaGVkQ2hhbmdlcyA9IGZhbHNlO1xuICAgICAgaGFzUmVsZXZhbnRSb3V0ZUNoYW5nZXMgPSBmYWxzZTtcbiAgICAgIGF3YWl0IGVucXVldWVHZW5lcmF0ZSgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBcdTc5RkJcdTk2NjQgZGVmaW5lUGFnZSguLi4pIFx1NUI4Rlx1OEMwM1x1NzUyOFx1RkYwQ1x1OTA3Rlx1NTE0RFx1OEZEMFx1ODg0Q1x1NjVGNlx1NjJBNVx1OTUxOVx1MzAwMlxuICAgICAqXG4gICAgICogZGVmaW5lUGFnZSBcdTY2MkZcdTgxMUFcdTY3MkNcdTdFQTdcdTVCOEZcdUZGMENcdTYyNDBcdTRFRTVcdTY1NzRcdTRFRkQgU0ZDIFx1NkU5MFx1NzgwMVx1OTFDQ1x1NTNFQVx1NTcyOCA8c2NyaXB0PiBcdTU3NTdcdTUxODVcdTY0MUNcdTdEMjJcdUZGMUFcdTZBMjFcdTY3N0ZcdTRFMkRcdTRGNUNcdTRFM0FcdTY1ODdcdTY4NjNcbiAgICAgKiBcdTVDNTVcdTc5M0FcdTc2ODQgYGRlZmluZVBhZ2Uoey4uLn0pYCBcdTY1ODdcdTY3MkNcdTVGQzVcdTk4N0JcdTUzOUZcdTY4MzdcdTRGRERcdTc1NTlcdTMwMDJcdTVERjJcdTg4QUJcdTYyQzZcdTUxRkFcdTc2ODRcdTdFQUZcdTgxMUFcdTY3MkNcdTVCNTBcdTZBMjFcdTU3NTdcdTZDQTFcdTY3MDkgPHNjcmlwdD5cbiAgICAgKiBcdTY4MDdcdTdCN0VcdUZGMENcdTZCNjRcdTY1RjZcdTkwMDBcdTU2REVcdTY1NzRcdTZCQjVcdTY0MUNcdTdEMjJcdUZGMENcdTRGRERcdTYzMDFcdTUzOUZcdTg4NENcdTRFM0FcdTMwMDJcbiAgICAgKi9cbiAgICB0cmFuc2Zvcm0oY29kZTogc3RyaW5nLCBpZDogc3RyaW5nKSB7XG4gICAgICBpZiAoIWNvZGUuaW5jbHVkZXMoJ2RlZmluZVBhZ2UoJykpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBjb25zdCByYXdJZCA9IGlkLnNwbGl0KCc/JylbMF0ucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xuICAgICAgaWYgKCFyYXdJZC5lbmRzV2l0aCgnLnV2dWUnKSAmJiAhcmF3SWQuZW5kc1dpdGgoJy52dWUnKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2NyaXB0QmxvY2tzID0gZmluZFNjcmlwdEJsb2Nrcyhjb2RlKTtcbiAgICAgIGlmIChzY3JpcHRCbG9ja3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IG5ld0NvZGUgPSBzdHJpcERlZmluZVBhZ2VNYWNybyhjb2RlKTtcbiAgICAgICAgaWYgKG5ld0NvZGUgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNvZGU6IG5ld0NvZGUsIG1hcDogbnVsbCB9O1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcmlwdEJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBuZXdDb2RlID0gc3RyaXBEZWZpbmVQYWdlTWFjcm8oY29kZSwgc2NyaXB0QmxvY2tzW2ldLnN0YXJ0LCBzY3JpcHRCbG9ja3NbaV0uZW5kKTtcbiAgICAgICAgaWYgKG5ld0NvZGUgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB7IGNvZGU6IG5ld0NvZGUsIG1hcDogbnVsbCB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgY29uZmlndXJlU2VydmVyKHM6IGFueSkge1xuICAgICAgaWYgKCFvcHRpb25zLmVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2VydmVyID0gcztcbiAgICAgIGNvbnN0IHBhZ2VzRGlyID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCBvcHRpb25zLmRpcik7XG4gICAgICBjb25zdCBjb25maWdQYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCBvcHRpb25zLmNvbmZpZ0ZpbGUpO1xuICAgICAgY29uc3QgdGFiYmFyQ29uZmlnUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgJ3NyYy90YWJiYXIvY29uZmlnLnV0cycpO1xuICAgICAgY29uc3QgZW52UGF0aCA9IHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgJy5lbnYnKTtcblxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGFnZXNEaXIpKSB7XG4gICAgICAgIHNlcnZlci53YXRjaGVyLmFkZChwYWdlc0Rpcik7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMuc3ViUGFja2FnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc3ViRGlyID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCBvcHRpb25zLnN1YlBhY2thZ2VzW2ldKTtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoc3ViRGlyKSkge1xuICAgICAgICAgIHNlcnZlci53YXRjaGVyLmFkZChzdWJEaXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhjb25maWdQYXRoKSkge1xuICAgICAgICBzZXJ2ZXIud2F0Y2hlci5hZGQoY29uZmlnUGF0aCk7XG4gICAgICB9XG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyh0YWJiYXJDb25maWdQYXRoKSkge1xuICAgICAgICBzZXJ2ZXIud2F0Y2hlci5hZGQodGFiYmFyQ29uZmlnUGF0aCk7XG4gICAgICB9XG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhlbnZQYXRoKSkge1xuICAgICAgICBzZXJ2ZXIud2F0Y2hlci5hZGQoZW52UGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHNlcnZlci53YXRjaGVyLm9uKCdhZGQnLCAoZmlsZVBhdGg6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAobWF0Y2hlc1BhZ2UoZmlsZVBhdGgpKSB7XG4gICAgICAgICAgZGVib3VuY2VkR2VuZXJhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZXJ2ZXIud2F0Y2hlci5vbigndW5saW5rJywgKGZpbGVQYXRoOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKG1hdGNoZXNQYWdlKGZpbGVQYXRoKSkge1xuICAgICAgICAgIGRlYm91bmNlZEdlbmVyYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2VydmVyLndhdGNoZXIub24oJ2NoYW5nZScsIChmaWxlUGF0aDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChpc0NvbmZpZ0ZpbGUoZmlsZVBhdGgpIHx8IG1hdGNoZXNQYWdlKGZpbGVQYXRoKSkge1xuICAgICAgICAgIGRlYm91bmNlZEdlbmVyYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICB0cmFuc2Zvcm1JbmRleEh0bWwoaHRtbDogc3RyaW5nKSB7XG4gICAgICBjb25zdCBtb2RlID0gZ2V0VGFiYmFyTW9kZShwcm9qZWN0Um9vdCk7XG4gICAgICBpZiAobW9kZSA9PT0gJzInIHx8IG1vZGUgPT09ICdDVVNUT01fVEFCQkFSX1dJVEhfTkFUSVZFJyB8fCBtb2RlID09PSAnQ1VTVE9NX1RBQkJBUicpIHtcbiAgICAgICAgbGV0IHByZWxvYWRTY3JpcHRzID0gJyc7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcGFnZXNKc29uRGF0YSA9IGxvYWRQbGF0Zm9ybVBhZ2VzSnNvbihwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsICdwYWdlcy5qc29uJykpO1xuICAgICAgICAgIGNvbnN0IHRhYkxpc3QgPSAocGFnZXNKc29uRGF0YS50YWJCYXIgJiYgQXJyYXkuaXNBcnJheShwYWdlc0pzb25EYXRhLnRhYkJhci5saXN0KSkgPyBwYWdlc0pzb25EYXRhLnRhYkJhci5saXN0IDogW107XG4gICAgICAgICAgY29uc3QgdGFiSW1wb3J0cyA9IHRhYkxpc3RcbiAgICAgICAgICAgIC5tYXAoKGl0ZW06IGFueSkgPT4gaXRlbS5wYWdlUGF0aCB8fCAnJylcbiAgICAgICAgICAgIC5maWx0ZXIoKHA6IHN0cmluZykgPT4gcC5sZW5ndGggPiAwICYmICFwLmluY2x1ZGVzKCdwYWdlcy9pbmRleC9pbmRleCcpKVxuICAgICAgICAgICAgLm1hcCgocDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG5vcm0gPSBwLnN0YXJ0c1dpdGgoJy8nKSA/IHAgOiBgLyR7cH1gO1xuICAgICAgICAgICAgICByZXR1cm4gYGltcG9ydCgnJHtub3JtfS51dnVlJykuY2F0Y2goKCkgPT4ge30pO2A7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAodGFiSW1wb3J0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwcmVsb2FkU2NyaXB0cyA9IGA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIj5cXG4vLyBcdTUyQThcdTYwMDFcdTk4ODRcdTUyQTBcdThGN0RcdTYyNDBcdTY3MDkgVGFiQmFyIFx1OTg3NVx1OTc2Mlx1N0VDNFx1NEVGNlx1RkYwQ1x1NkQ4OFx1OTY2NFx1OTk5Nlx1NkIyMVx1NTIwN1x1NjM2MiBUYWIgXHU2NUY2XHU3Njg0XHU1RjAyXHU2QjY1XHU2QTIxXHU1NzU3XHU1MkEwXHU4RjdEXHU3QTdBXHU3NjdEXFxuc2V0VGltZW91dCgoKSA9PiB7XFxuICAke3RhYkltcG9ydHMuam9pbignXFxuICAnKX1cXG59LCA1MCk7XFxuPC9zY3JpcHQ+YDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2gge31cbiAgICAgICAgcmV0dXJuIGh0bWwucmVwbGFjZSgnPC9oZWFkPicsIGAke0hJREVfTkFUSVZFX1RBQkJBUl9TVFlMRX1cXG4ke3ByZWxvYWRTY3JpcHRzfVxcbjwvaGVhZD5gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgfTtcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3ZpdGUtcGx1Z2luLXVuaS1wYWdlcy1zYW5kYm94LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3ZpdGUtcGx1Z2luLXVuaS1wYWdlcy1zYW5kYm94LnRzXCI7aW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5pbXBvcnQgSlNPTjUgZnJvbSAnanNvbjUnO1xuXG4vKipcbiAqIHVuaS1wYWdlcyBcdTZDOTlcdTc2RDJcdTcyRUNcdTdBQ0JcdThDMDNcdThCRDVcdTZBMjFcdTVGMEZcdTYzRDJcdTRFRjZcdUZGMDhcdTUzNkJcdTY2MUZcdUZGMDlcdTMwMDJcbiAqXG4gKiBcdTgxRUFcdTUzMDVcdTU0MkJcdUZGMUFcdTY3MkNcdTY1ODdcdTRFRjZcdTRFMEQgaW1wb3J0IFx1NjgzOFx1NUZDM1x1NjNEMlx1NEVGNlx1NjIxNlx1NEVGQlx1NEY1NSBwbHVnaW5zLyBcdTRFMEJcdTc2ODRcdTUxNzFcdTRFQUJcdTZBMjFcdTU3NTdcdTMwMDJcdTVCODNcdTkwMUFcdThGQzdcdTU3MjhcdTgxRUFcdTVERjFcdTVCRkNcdTUxRkFcdTc2ODRcdTYzRDJcdTRFRjZcdTVCRjlcdThDNjFcdTRFMEFcdTYzMDJcbiAqIGB1bmlQYWdlc1N0YWdlYCBcdTVCNTdcdTZCQjVcdTg4QUJcdTY4MzhcdTVGQzNcdTYzRDJcdTRFRjZcdTUzRDFcdTczQjBcdUZGMDhcdTY4MzhcdTVGQzNcdTU3MjggY29uZmlnUmVzb2x2ZWQgXHU2NUY2XHU0RUNFIGNvbmZpZy5wbHVnaW5zIFx1OTFDQ1x1NjMwOVx1OEJFNVx1NUI1N1x1NkJCNVx1NjUzNlx1OTZDNlx1RkYwQ1xuICogXHU2MzA5IG9yZGVyIFx1NTM0N1x1NUU4Rlx1NTcyOFx1NTQwQ1x1NEUwMFx1NkIyMVx1NzUxRlx1NjIxMCBwYXNzIFx1NTE4NVx1OEZEMFx1ODg0Q1x1RkYwOVx1MzAwMlxuICpcbiAqIFx1ODA0Q1x1OEQyM1x1RkYxQVx1NUY1M1x1NUYwMFx1NTQyRlx1NkM5OVx1NzZEMlx1OEMwM1x1OEJENVx1RkYwOGAuZW52YCBcdTc2ODQgVklURV9ERVZfU0FOREJPWFx1RkYwQ1x1NjIxNlx1OTg3NVx1OTc2Mlx1NTE4NSBgZGVmaW5lUGFnZSh7IGRlYnVnOiB0cnVlIH0pYCAvXG4gKiBgeyBkZWJ1Z0hvbWU6IHRydWUgfWBcdUZGMDlcdTY1RjZcdUZGMENcdTYyOEEgcGFnZXMuanNvbiBcdTg4QzFcdTUyNkFcdTYyMTBcdTMwMENcdTUzRUFcdTUzMDVcdTU0MkJcdTg4QUJcdThDMDNcdThCRDVcdTc2ODRcdTk4NzVcdTk3NjJcdTMwMERcdUZGMENcdTk5OTZcdTRFMkFcdTUzMzlcdTkxNERcdTk4NzlcdTRGNUNcdTRFM0FcdTU0MkZcdTUyQThcdTk5OTZcdTk4NzVcdUZGMENcbiAqIFx1NUU3Nlx1N0Y2RVx1NEY0RCBmbGFncyBcdThCQTlcdTY4MzhcdTVGQzNcdThERjNcdThGQzcgcGFnZXMuY29uZmlnLmpzb24gXHU1NkRFXHU1MTk5XHUzMDAyXHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU1RjNBXHU1MjM2XHU3MTk0XHU2NUFEXHUzMDAyXG4gKi9cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBcdTRFMEVcdTY4MzhcdTVGQzNcdTdFRDNcdTY3ODRcdTdCNDlcdTRFRjdcdTc2ODRcdTY3MDBcdTVDMEZcdTdDN0JcdTU3OEJcdUZGMDhcdTY1RTBcdTk3MDAgaW1wb3J0XHVGRjBDXHU5MDdGXHU1MTREXHU1MTcxXHU0RUFCXHU2QTIxXHU1NzU3XHVGRjA5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBQYWdlQ29uZmlnID0ge1xuICBwYXRoOiBzdHJpbmc7XG4gIHN0eWxlPzogUmVjb3JkPHN0cmluZywgYW55PjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufTtcblxudHlwZSBTdWJQYWNrYWdlQ29uZmlnID0ge1xuICByb290OiBzdHJpbmc7XG4gIHBhZ2VzOiBQYWdlQ29uZmlnW107XG59O1xuXG50eXBlIFBhZ2VzQnVpbGRTdGF0ZSA9IHtcbiAgcm9vdDogc3RyaW5nO1xuICBpc1Byb2R1Y3Rpb246IGJvb2xlYW47XG4gIG91dHB1dDogeyBwYWdlczogUGFnZUNvbmZpZ1tdOyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgc2Nhbm5lZFN1YlBrZ3M6IFN1YlBhY2thZ2VDb25maWdbXTtcbiAgZmluYWxQYWdlczogUGFnZUNvbmZpZ1tdO1xuICBkZWJ1Z0Fubm90YXRlZFBhZ2VzOiBzdHJpbmdbXTtcbiAgZGVidWdIb21lQW5ub3RhdGVkUGFnZXM6IHN0cmluZ1tdO1xuICBmbGFnczogeyBzYW5kYm94QWN0aXZlOiBib29sZWFuOyBza2lwQ29uZmlnV3JpdGViYWNrOiBib29sZWFuIH07XG59O1xuXG50eXBlIFBhZ2VzU3RhZ2VDb250ZXh0ID0ge1xuICByb290OiBzdHJpbmc7XG4gIGlzUHJvZHVjdGlvbjogYm9vbGVhbjtcbn07XG5cbnR5cGUgUGFnZXNTdGFnZSA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBvcmRlcjogbnVtYmVyO1xuICBydW46IChzdGF0ZTogUGFnZXNCdWlsZFN0YXRlLCBjdHg6IFBhZ2VzU3RhZ2VDb250ZXh0KSA9PiB2b2lkO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBcdTUxODVcdTkwRThcdTVERTVcdTUxNzdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKiogXHU4QkZCXHU1M0Q2XHU2Qzk5XHU3NkQyXHU3MkVDXHU3QUNCXHU4QzAzXHU4QkQ1XHU2QTIxXHU1RjBGXHU5MTREXHU3RjZFXHVGRjA4XHU0RjE4XHU1MTQ4IHByb2Nlc3MuZW52XHVGRjBDXHU1MTc2XHU2QjIxXHU1QjlFXHU2NUY2XHU4QkZCXHU1M0Q2IC5lbnYgXHU2NTg3XHU0RUY2XHVGRjA5ICovXG5mdW5jdGlvbiBnZXRTYW5kYm94Q29uZmlnKHByb2plY3RSb290OiBzdHJpbmcpOiB7IGVuYWJsZWQ6IGJvb2xlYW47IHBhZ2VQYXRoczogc3RyaW5nW10gfSB7XG4gIGxldCBlbmFibGVkU3RyID0gcHJvY2Vzcy5lbnYuVklURV9ERVZfU0FOREJPWCA/PyBwcm9jZXNzLmVudi5WSVRFX0RFVl9TSU5HTEVfUEFHRSA/PyAnJztcbiAgbGV0IHBhdGhTdHIgPSBwcm9jZXNzLmVudi5WSVRFX0RFVl9TQU5EQk9YX1BBR0VTID8/IHByb2Nlc3MuZW52LlZJVEVfREVWX1NJTkdMRV9QQVRIID8/ICcnO1xuXG4gIGlmICghZW5hYmxlZFN0ciB8fCAhcGF0aFN0cikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBlbnZQYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCAnLmVudicpO1xuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZW52UGF0aCkpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhlbnZQYXRoLCAndXRmLTgnKTtcbiAgICAgICAgaWYgKCFlbmFibGVkU3RyKSB7XG4gICAgICAgICAgY29uc3QgbUVuYWJsZWQgPSBjb250ZW50Lm1hdGNoKC9eKD86VklURV9ERVZfU0FOREJPWHxWSVRFX0RFVl9TSU5HTEVfUEFHRSlcXHMqPVxccypbJ1wiXT8oW14nXCJcXHJcXG5dKylbJ1wiXT8vbSk7XG4gICAgICAgICAgaWYgKG1FbmFibGVkICE9IG51bGwgJiYgbUVuYWJsZWRbMV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZW5hYmxlZFN0ciA9IG1FbmFibGVkWzFdLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXRoU3RyKSB7XG4gICAgICAgICAgY29uc3QgbVBhdGggPSBjb250ZW50Lm1hdGNoKC9eKD86VklURV9ERVZfU0FOREJPWF9QQUdFU3xWSVRFX0RFVl9TSU5HTEVfUEFUSClcXHMqPVxccypbJ1wiXT8oW14nXCJcXHJcXG5dKylbJ1wiXT8vbSk7XG4gICAgICAgICAgaWYgKG1QYXRoICE9IG51bGwgJiYgbVBhdGhbMV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgcGF0aFN0ciA9IG1QYXRoWzFdLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgLy8gXHU1RkZEXHU3NTY1XHU1RjAyXHU1RTM4XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZW5hYmxlZCA9IGVuYWJsZWRTdHIudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnIHx8IGVuYWJsZWRTdHIgPT09ICcxJztcbiAgY29uc3QgcGFnZVBhdGhzID0gcGF0aFN0clxuICAgIC5zcGxpdCgvWyw7XFxuXFxyXSsvKVxuICAgIC5tYXAocyA9PiBzLnRyaW0oKSlcbiAgICAuZmlsdGVyKEJvb2xlYW4pO1xuXG4gIHJldHVybiB7IGVuYWJsZWQsIHBhZ2VQYXRocyB9O1xufVxuXG4vKiogXHU4OUM0XHU4MzAzXHU1MzE2XHU5ODc1XHU5NzYyXHU4REVGXHU1Rjg0XHU3NTI4XHU0RThFXHU2QkQ0XHU1QkY5ICovXG5mdW5jdGlvbiBub3JtYWxpemVQYWdlUGF0aChwOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcFxuICAgIC50cmltKClcbiAgICAucmVwbGFjZSgvXFxcXC9nLCAnLycpXG4gICAgLnJlcGxhY2UoL15cXC5cXC8vLCAnJylcbiAgICAucmVwbGFjZSgvXlxcLy8sICcnKVxuICAgIC5yZXBsYWNlKC9cXC4odXZ1ZXx2dWV8dXRzfHRzfGpzKSQvLCAnJyk7XG59XG5cbi8qKiBcdTVCOUFcdTRGNERcdTZFOTBcdTc4MDFcdTRFMkRcdTdCMkNcdTRFMDBcdTZCMjEgZGVmaW5lUGFnZSh7Li4ufSkgXHU4QzAzXHU3NTI4XHU3Njg0XHU2MkVDXHU1M0Y3XHU0RjREXHU3RjZFXHVGRjA4XHU2Qzk5XHU3NkQyXHU3OEMxXHU3NkQ4XHU1MTVDXHU1RTk1XHU2NUY2XHU5NzAwXHU4OTgxXHU4QkZCXHU1M0Q2XHU5ODc1XHU5NzYyIG1ldGFcdUZGMDkgKi9cbmZ1bmN0aW9uIHNjYW5EZWZpbmVQYWdlQ2FsbChjb2RlOiBzdHJpbmcpOiB7IHN0YXJ0OiBudW1iZXI7IG9wZW5QYXJlbjogbnVtYmVyOyBjbG9zZVBhcmVuOiBudW1iZXIgfSB8IG51bGwge1xuICBjb25zdCBzdGFydFJlZ2V4ID0gL2RlZmluZVBhZ2VcXHMqXFwoXFxzKlxcey87XG4gIGNvbnN0IG1hdGNoID0gY29kZS5tYXRjaChzdGFydFJlZ2V4KTtcbiAgaWYgKG1hdGNoID09IG51bGwgfHwgbWF0Y2guaW5kZXggPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IG9wZW5QYXJlbiA9IGNvZGUuaW5kZXhPZignKCcsIG1hdGNoLmluZGV4KTtcbiAgaWYgKG9wZW5QYXJlbiA9PT0gLTEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBsZXQgZGVwdGggPSAwO1xuICBsZXQgaW5TdHJpbmcgPSBmYWxzZTtcbiAgbGV0IHN0cmluZ0NoYXIgPSAnJztcbiAgZm9yIChsZXQgaSA9IG9wZW5QYXJlbiArIDE7IGkgPCBjb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2ggPSBjb2RlW2ldO1xuICAgIGNvbnN0IHByZXYgPSBpID4gMCA/IGNvZGVbaSAtIDFdIDogJyc7XG4gICAgaWYgKGluU3RyaW5nKSB7XG4gICAgICBpZiAoY2ggPT09IHN0cmluZ0NoYXIgJiYgcHJldiAhPT0gJ1xcXFwnKSB7XG4gICAgICAgIGluU3RyaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJyB8fCBjaCA9PT0gJ2AnKSB7XG4gICAgICBpblN0cmluZyA9IHRydWU7XG4gICAgICBzdHJpbmdDaGFyID0gY2g7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGNoID09PSAnLycgJiYgaSArIDEgPCBjb2RlLmxlbmd0aCkge1xuICAgICAgaWYgKGNvZGVbaSArIDFdID09PSAnLycpIHtcbiAgICAgICAgY29uc3QgbmV3bGluZSA9IGNvZGUuaW5kZXhPZignXFxuJywgaSk7XG4gICAgICAgIGlmIChuZXdsaW5lID09PSAtMSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGkgPSBuZXdsaW5lO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2RlW2kgKyAxXSA9PT0gJyonKSB7XG4gICAgICAgIGNvbnN0IGVuZCA9IGNvZGUuaW5kZXhPZignKi8nLCBpICsgMik7XG4gICAgICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaSA9IGVuZCArIDE7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2ggPT09ICd7JyB8fCBjaCA9PT0gJygnKSB7XG4gICAgICBkZXB0aCsrO1xuICAgIH1cbiAgICBpZiAoY2ggPT09ICd9JyB8fCBjaCA9PT0gJyknKSB7XG4gICAgICBkZXB0aC0tO1xuICAgICAgaWYgKGRlcHRoIDwgMCkge1xuICAgICAgICByZXR1cm4geyBzdGFydDogbWF0Y2guaW5kZXgsIG9wZW5QYXJlbiwgY2xvc2VQYXJlbjogaSB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqIFx1ODlFM1x1Njc5MFx1OTg3NVx1OTc2MiBtZXRhXHVGRjFBXHU0RjE4XHU1MTQ4IDxyb3V0ZT4gXHU1NzU3XHVGRjBDXHU1MTc2XHU2QjIxIGRlZmluZVBhZ2UgKi9cbmZ1bmN0aW9uIHBhcnNlUGFnZU1ldGEoY29udGVudDogc3RyaW5nKTogUmVjb3JkPHN0cmluZywgYW55PiB8IG51bGwge1xuICBjb25zdCByb3V0ZVJlZ2V4ID0gLzxyb3V0ZVtePl0qPihbXFxzXFxTXSo/KTxcXC9yb3V0ZT4vO1xuICBjb25zdCByb3V0ZU1hdGNoID0gY29udGVudC5tYXRjaChyb3V0ZVJlZ2V4KTtcbiAgaWYgKHJvdXRlTWF0Y2ggIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTjUucGFyc2Uocm91dGVNYXRjaFsxXS50cmltKCkpIGFzIFJlY29yZDxzdHJpbmcsIGFueT47XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGxldCB0YXJnZXRDb250ZW50ID0gY29udGVudDtcbiAgY29uc3Qgc2NyaXB0TWF0Y2ggPSBjb250ZW50Lm1hdGNoKC88c2NyaXB0W14+XSo+KFtcXHNcXFNdKj8pPFxcL3NjcmlwdD4vKTtcbiAgaWYgKHNjcmlwdE1hdGNoICE9IG51bGwgJiYgc2NyaXB0TWF0Y2hbMV0gIT0gbnVsbCkge1xuICAgIHRhcmdldENvbnRlbnQgPSBzY3JpcHRNYXRjaFsxXTtcbiAgfVxuICBjb25zdCBzaXRlID0gc2NhbkRlZmluZVBhZ2VDYWxsKHRhcmdldENvbnRlbnQpO1xuICBpZiAoc2l0ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgYXJnID0gdGFyZ2V0Q29udGVudC5zbGljZShzaXRlLm9wZW5QYXJlbiArIDEsIHNpdGUuY2xvc2VQYXJlbikudHJpbSgpO1xuICBpZiAoYXJnLnN0YXJ0c1dpdGgoJ3snKSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTjUucGFyc2UoYXJnKSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gXHU5NjM2XHU2QkI1XHU1QjlFXHU3M0IwXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gcnVuU2FuZGJveChzdGF0ZTogUGFnZXNCdWlsZFN0YXRlKTogdm9pZCB7XG4gIGNvbnN0IHNhbmRib3hDb25maWcgPSBnZXRTYW5kYm94Q29uZmlnKHN0YXRlLnJvb3QpO1xuICBjb25zdCBoYXNFbnZUYXJnZXRzID0gc2FuZGJveENvbmZpZy5lbmFibGVkICYmIHNhbmRib3hDb25maWcucGFnZVBhdGhzLmxlbmd0aCA+IDA7XG5cbiAgaWYgKHN0YXRlLmRlYnVnSG9tZUFubm90YXRlZFBhZ2VzLmxlbmd0aCA+IDEpIHtcbiAgICBjb25zb2xlLndhcm4oYFxceDFCWzMzbVx1MjZBMFx1RkUwRiBbdW5pLXBhZ2VzXSBcdTY4QzBcdTZENEJcdTUyMzBcdTU5MUFcdTRFMkFcdTk4NzVcdTk3NjJcdTU0MENcdTY1RjZcdTkxNERcdTdGNkVcdTRFODYgZGVidWdIb21lOiB0cnVlICgke3N0YXRlLmRlYnVnSG9tZUFubm90YXRlZFBhZ2VzLmpvaW4oJywgJyl9KVx1RkYwQ1x1NTE2OFx1NUM0MFx1NEVDNVx1NTE0MVx1OEJCOCAxIFx1NEUyQVx1NTQyRlx1NTJBOFx1OTk5Nlx1OTg3NVx1RkYwQ1x1NURGMlx1OTFDN1x1NzUyOFx1N0IyQ1x1NEUwMFx1NEUyQTogJHtzdGF0ZS5kZWJ1Z0hvbWVBbm5vdGF0ZWRQYWdlc1swXX1cXHgxQlswbWApO1xuICB9XG4gIGNvbnN0IGNvbWJpbmVkQ29kZURlYnVnID0gWy4uLnN0YXRlLmRlYnVnSG9tZUFubm90YXRlZFBhZ2VzLCAuLi5zdGF0ZS5kZWJ1Z0Fubm90YXRlZFBhZ2VzXTtcbiAgY29uc3QgaGFzQ29kZURlYnVnID0gY29tYmluZWRDb2RlRGVidWcubGVuZ3RoID4gMDtcbiAgY29uc3QgaXNTYW5kYm94TW9kZSA9ICFzdGF0ZS5pc1Byb2R1Y3Rpb24gJiYgKGhhc0VudlRhcmdldHMgfHwgaGFzQ29kZURlYnVnKTtcblxuICBpZiAoIWlzU2FuZGJveE1vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBmaW5hbFBhZ2VzID0gc3RhdGUuZmluYWxQYWdlcztcbiAgY29uc3Qgc2Nhbm5lZFN1YlBrZ3MgPSBzdGF0ZS5zY2FubmVkU3ViUGtncztcblxuICAvLyBcdTRGMThcdTUxNDhcdTdFQTdcdUZGMUEuZW52IFx1NjYzRVx1NUYwRlx1OTE0RFx1N0Y2RSA+IGRlZmluZVBhZ2UoeyBkZWJ1ZzogdHJ1ZSB9KSBcdTRFRTNcdTc4MDFcdTUxODVcdTY4MDdcdThCQjBcbiAgY29uc3QgdGFyZ2V0cyA9IGhhc0VudlRhcmdldHMgPyBzYW5kYm94Q29uZmlnLnBhZ2VQYXRocyA6IGNvbWJpbmVkQ29kZURlYnVnO1xuXG4gIGNvbnN0IG1hdGNoVGFyZ2V0ID0gKGZ1bGxQYXRoOiBzdHJpbmcsIHJlbFN1YlBhdGg6IHN0cmluZywgdGFyZ2V0OiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCB0YXJnZXROb3JtID0gbm9ybWFsaXplUGFnZVBhdGgodGFyZ2V0KTtcbiAgICBjb25zdCB0YXJnZXROb3JtV2l0aG91dFNyYyA9IHRhcmdldE5vcm0ucmVwbGFjZSgvXnNyY1xcLy8sICcnKTtcbiAgICBjb25zdCBmdWxsTm9ybSA9IG5vcm1hbGl6ZVBhZ2VQYXRoKGZ1bGxQYXRoKTtcbiAgICBjb25zdCBmdWxsTm9ybVdpdGhvdXRTcmMgPSBmdWxsTm9ybS5yZXBsYWNlKC9ec3JjXFwvLywgJycpO1xuICAgIGNvbnN0IHJlbE5vcm0gPSBub3JtYWxpemVQYWdlUGF0aChyZWxTdWJQYXRoKTtcblxuICAgIC8vIFx1OTAxQVx1OTE0RFx1N0IyNlx1NTMzOVx1OTE0RCAvIFx1NzZFRVx1NUY1NVx1NTI0RFx1N0YwMFx1NTMzOVx1OTE0RFx1RkYwOFx1NTk4MiBzcmMvc3ViL2F1dGgvKiBcdTYyMTYgc3ViL2F1dGhcdUZGMDlcbiAgICBpZiAodGFyZ2V0LmluY2x1ZGVzKCcqJykgfHwgIXRhcmdldC5pbmNsdWRlcygnLicpKSB7XG4gICAgICBjb25zdCBjbGVhblByZWZpeCA9IHRhcmdldE5vcm1XaXRob3V0U3JjLnJlcGxhY2UoL1xcL1xcKiQvLCAnJykucmVwbGFjZSgvXFwqJC8sICcnKTtcbiAgICAgIGlmIChjbGVhblByZWZpeCkge1xuICAgICAgICBpZiAoZnVsbE5vcm1XaXRob3V0U3JjLnN0YXJ0c1dpdGgoY2xlYW5QcmVmaXgpIHx8IHJlbE5vcm0uc3RhcnRzV2l0aChjbGVhblByZWZpeCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBmdWxsTm9ybSA9PT0gdGFyZ2V0Tm9ybVxuICAgICAgfHwgZnVsbE5vcm1XaXRob3V0U3JjID09PSB0YXJnZXROb3JtV2l0aG91dFNyY1xuICAgICAgfHwgcmVsTm9ybSA9PT0gdGFyZ2V0Tm9ybVdpdGhvdXRTcmNcbiAgICAgIHx8IGZ1bGxOb3JtV2l0aG91dFNyYy5lbmRzV2l0aChgLyR7dGFyZ2V0Tm9ybVdpdGhvdXRTcmN9YClcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHNhbmRib3hNYWluUGFnZXM6IFBhZ2VDb25maWdbXSA9IFtdO1xuICBjb25zdCBzYW5kYm94U3ViUGtnczogU3ViUGFja2FnZUNvbmZpZ1tdID0gW107XG4gIGNvbnN0IG1hdGNoZWRQYWdlUGF0aHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAvLyBcdTYzMDkgdGFyZ2V0cyBcdTk4N0FcdTVFOEZcdTkwMTBcdTRFMDBcdTY3RTVcdTYyN0VcdUZGMENcdTc4NkVcdTRGRERcdTc1MjhcdTYyMzdcdTUxOTlcdTU3MjhcdTdCMkNcdTRFMDBcdTk4NzlcdTc2ODRcdTk4NzVcdTk3NjJcdTRGNUNcdTRFM0FcdTk5OTZcdTk4NzVcbiAgZm9yIChsZXQgdCA9IDA7IHQgPCB0YXJnZXRzLmxlbmd0aDsgdCsrKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGFyZ2V0c1t0XTtcblxuICAgIC8vIDEpIFx1NTcyOFx1NEUzQlx1NTMwNVx1NEUyRFx1NTMzOVx1OTE0RFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmluYWxQYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcCA9IGZpbmFsUGFnZXNbaV07XG4gICAgICBpZiAobWF0Y2hlZFBhZ2VQYXRocy5oYXMocC5wYXRoKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXRjaFRhcmdldChwLnBhdGgsIHAucGF0aCwgdGFyZ2V0KSkge1xuICAgICAgICBtYXRjaGVkUGFnZVBhdGhzLmFkZChwLnBhdGgpO1xuICAgICAgICBzYW5kYm94TWFpblBhZ2VzLnB1c2goeyAuLi5wIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIpIFx1NTcyOFx1NTIwNlx1NTMwNVx1NEUyRFx1NTMzOVx1OTE0RFxuICAgIGZvciAobGV0IHMgPSAwOyBzIDwgc2Nhbm5lZFN1YlBrZ3MubGVuZ3RoOyBzKyspIHtcbiAgICAgIGNvbnN0IHNwa2cgPSBzY2FubmVkU3ViUGtnc1tzXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3BrZy5wYWdlcy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBzcCA9IHNwa2cucGFnZXNbal07XG4gICAgICAgIGNvbnN0IGZ1bGxTdWJQYXRoID0gYCR7c3BrZy5yb290fS8ke3NwLnBhdGh9YDtcbiAgICAgICAgaWYgKG1hdGNoZWRQYWdlUGF0aHMuaGFzKGZ1bGxTdWJQYXRoKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFRhcmdldChmdWxsU3ViUGF0aCwgc3AucGF0aCwgdGFyZ2V0KSkge1xuICAgICAgICAgIG1hdGNoZWRQYWdlUGF0aHMuYWRkKGZ1bGxTdWJQYXRoKTtcblxuICAgICAgICAgIC8vIFx1ODJFNVx1NzZFRVx1NTI0RFx1NEUzQlx1NTMwNVx1NkNBMVx1NjcwOVx1NEVGQlx1NEY1NVx1OTg3NVx1OTc2Mlx1RkYwQ1x1NUMwNlx1OEZEOVx1N0IyQ1x1NEUwMFx1NEUyQVx1NTMzOVx1OTE0RFx1NTIzMFx1NzY4NFx1NTIwNlx1NTMwNVx1OTg3NVx1OTc2Mlx1NjNEMFx1NTM0N1x1NEUzQVx1NEUzQlx1NTMwNSBwYWdlc1swXVx1RkYwOFx1NEY1Q1x1NEUzQVx1NUU5NFx1NzUyOFx1NTQyRlx1NTJBOFx1OTk5Nlx1OTg3NVx1RkYwOVxuICAgICAgICAgIGlmIChzYW5kYm94TWFpblBhZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc2FuZGJveE1haW5QYWdlcy5wdXNoKHsgLi4uc3AsIHBhdGg6IGZ1bGxTdWJQYXRoIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRTdWJQa2cgPSBzYW5kYm94U3ViUGtncy5maW5kKHBrZyA9PiBwa2cucm9vdCA9PT0gc3BrZy5yb290KTtcbiAgICAgICAgICAgIGlmICh0YXJnZXRTdWJQa2cgPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0YXJnZXRTdWJQa2cgPSB7IHJvb3Q6IHNwa2cucm9vdCwgcGFnZXM6IFtdIH07XG4gICAgICAgICAgICAgIHNhbmRib3hTdWJQa2dzLnB1c2godGFyZ2V0U3ViUGtnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldFN1YlBrZy5wYWdlcy5wdXNoKHsgLi4uc3AgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMykgXHU1MTVDXHU1RTk1XHVGRjFBXHU0RUNFXHU3OEMxXHU3NkQ4XHU2NTg3XHU0RUY2XHU3NkY0XHU2M0E1XHU1MzM5XHU5MTREXHVGRjA4XHU4MkU1XHU2NzA5XHU2NUIwXHU1MjFCXHU1RUZBXHU4RkQ4XHU2NzJBXHU1NzI4XHU2ODA3XHU1MUM2XHU1MjE3XHU4ODY4XHU5MUNDXHU3Njg0XHU5ODc1XHU5NzYyXHVGRjA5XG4gICAgaWYgKCF0YXJnZXQuaW5jbHVkZXMoJyonKSkge1xuICAgICAgbGV0IHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZVBhZ2VQYXRoKHRhcmdldCk7XG4gICAgICBpZiAoIXJlc29sdmVkUGF0aC5zdGFydHNXaXRoKCdzcmMvJykpIHtcbiAgICAgICAgcmVzb2x2ZWRQYXRoID0gYHNyYy8ke3Jlc29sdmVkUGF0aH1gO1xuICAgICAgfVxuICAgICAgaWYgKCFtYXRjaGVkUGFnZVBhdGhzLmhhcyhyZXNvbHZlZFBhdGgpKSB7XG4gICAgICAgIGNvbnN0IGFic0ZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKHN0YXRlLnJvb3QsIGAke3Jlc29sdmVkUGF0aH0udXZ1ZWApO1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhhYnNGaWxlUGF0aCkpIHtcbiAgICAgICAgICBjb25zdCByYXcgPSBmcy5yZWFkRmlsZVN5bmMoYWJzRmlsZVBhdGgsICd1dGYtOCcpO1xuICAgICAgICAgIGNvbnN0IG1ldGEgPSBwYXJzZVBhZ2VNZXRhKHJhdyk7XG4gICAgICAgICAgbWF0Y2hlZFBhZ2VQYXRocy5hZGQocmVzb2x2ZWRQYXRoKTtcbiAgICAgICAgICBzYW5kYm94TWFpblBhZ2VzLnB1c2goe1xuICAgICAgICAgICAgcGF0aDogcmVzb2x2ZWRQYXRoLFxuICAgICAgICAgICAgLi4uKG1ldGEgPz8ge30pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc2FuZGJveE1haW5QYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICBjb25zb2xlLndhcm4oYFxceDFCWzMxbVt1bmktcGFnZXNdIFx1NkM5OVx1NzZEMlx1OEMwM1x1OEJENVx1NkEyMVx1NUYwRlx1NjcyQVx1NjI3RVx1NTIzMFx1NEVGQlx1NEY1NVx1NTMzOVx1OTE0RFx1OTg3NVx1OTc2MjogJHt0YXJnZXRzLmpvaW4oJywgJyl9XFx4MUJbMG1gKTtcbiAgfVxuXG4gIC8vIFx1NzUxRlx1NjU0OFx1RkYxQVx1NTNFQVx1NjcwOVx1NUY1M1x1Nzg2RVx1NUI5RVx1ODhDMVx1NTI2QVx1NTFGQVx1OTg3NVx1OTc2Mlx1NjVGNlx1NjI0RFx1NjZGRlx1NjM2Mlx1OEY5M1x1NTFGQVx1RkYwOFx1NEUwRVx1NTM5Rlx1NUI5RVx1NzNCMCBgaXNTYW5kYm94TW9kZSAmJiBzYW5kYm94TWFpblBhZ2VzLmxlbmd0aCA+IDBgIFx1NEUwMFx1ODFGNFx1RkYwOVxuICBpZiAoc2FuZGJveE1haW5QYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgc3RhdGUub3V0cHV0LnBhZ2VzID0gc2FuZGJveE1haW5QYWdlcztcbiAgICBzdGF0ZS5zY2FubmVkU3ViUGtncyA9IHNhbmRib3hTdWJQa2dzO1xuICAgIHN0YXRlLmZsYWdzLnNhbmRib3hBY3RpdmUgPSB0cnVlO1xuICAgIHN0YXRlLmZsYWdzLnNraXBDb25maWdXcml0ZWJhY2sgPSB0cnVlO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gXHU2M0QyXHU0RUY2XHU1QkZDXHU1MUZBXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3Qgc3RhZ2U6IFBhZ2VzU3RhZ2UgPSB7XG4gIG5hbWU6ICd1bmktcGFnZXM6c2FuZGJveCcsXG4gIG9yZGVyOiAxMDAsXG4gIHJ1bihzdGF0ZSkge1xuICAgIHJ1blNhbmRib3goc3RhdGUpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlQYWdlc1NhbmRib3hQbHVnaW4oKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3VuaS1wYWdlczpzYW5kYm94JyxcbiAgICB1bmlQYWdlc1N0YWdlOiBzdGFnZVxuICB9O1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnMvdml0ZS1wbHVnaW4tdW5pLXBhZ2VzLXRhYmJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy92aXRlLXBsdWdpbi11bmktcGFnZXMtdGFiYmFyLnRzXCI7aW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5cbi8qKlxuICogdW5pLXBhZ2VzIFRhYkJhciBcdTdCNTZcdTc1NjVcdTYzRDJcdTRFRjZcdUZGMDhcdTUzNkJcdTY2MUZcdUZGMDlcdTMwMDJcbiAqXG4gKiBcdTgxRUFcdTUzMDVcdTU0MkJcdUZGMUFcdTY3MkNcdTY1ODdcdTRFRjZcdTRFMEQgaW1wb3J0IFx1NjgzOFx1NUZDM1x1NjNEMlx1NEVGNlx1NjIxNlx1NEVGQlx1NEY1NSBwbHVnaW5zLyBcdTRFMEJcdTc2ODRcdTUxNzFcdTRFQUJcdTZBMjFcdTU3NTdcdTMwMDJcdTVCODNcdTkwMUFcdThGQzdcdTU3MjhcdTgxRUFcdTVERjFcdTVCRkNcdTUxRkFcdTc2ODRcdTYzRDJcdTRFRjZcdTVCRjlcdThDNjFcdTRFMEFcdTYzMDJcbiAqIGB1bmlQYWdlc1N0YWdlYCBcdTVCNTdcdTZCQjVcdTg4QUJcdTY4MzhcdTVGQzNcdTYzRDJcdTRFRjZcdTUzRDFcdTczQjBcdUZGMDhcdTY4MzhcdTVGQzNcdTU3MjggY29uZmlnUmVzb2x2ZWQgXHU2NUY2XHU2MzA5XHU4QkU1XHU1QjU3XHU2QkI1XHU2NTM2XHU5NkM2XHUzMDAxXHU2MzA5IG9yZGVyIFx1NTM0N1x1NUU4Rlx1NTcyOFx1NTQwQ1x1NEUwMFx1NkIyMVxuICogXHU3NTFGXHU2MjEwIHBhc3MgXHU1MTg1XHU4RkQwXHU4ODRDXHVGRjA5XHUzMDAyXG4gKlxuICogXHU4MDRDXHU4RDIzXHVGRjFBXHU2ODM5XHU2MzZFIGAuZW52YCBcdTc2ODQgVklURV9UQUJCQVJfTU9ERVx1RkYwODA9XHU2NUUwIC8gMT1cdTUzOUZcdTc1MUYgLyAyPVx1ODFFQVx1NUI5QVx1NEU0OVx1NUUyNlx1NTM5Rlx1NzUxRlx1ODI4Mlx1NzBCOSAvIDNcdTMwMDE0PVx1N0VBRlx1ODFFQVx1NUI5QVx1NEU0OVx1NjIxNlx1NTM1NVx1OTg3NVx1NUJCOVx1NTY2OFx1RkYwOVxuICogXHU1MUIzXHU1QjlBIHBhZ2VzLmpzb24gXHU5MUNDXHU3Njg0IHRhYkJhciBcdTgyODJcdTcwQjlcdUZGMUJcdTkxNERcdTdGNkVcdTY3NjVcdTZFOTBcdTY2MkZcdTZCNjNcdTUyMTlcdTg5RTNcdTY3OTAgYHNyYy90YWJiYXIvY29uZmlnLnV0c2BcdUZGMENcdTY1ODdcdTY4NDhcdThENzBcbiAqIGBzcmMvaTE4bi9sb2NhbGVzL3poLUNOLmpzb25gIFx1NzY4NCB0YWJiYXIuKiBcdTdGRkJcdThCRDFcdTMwMDJcdTZDOTlcdTc2RDJcdTc1MUZcdTY1NDhcdTY1RjZcdTUzRUFcdTRGRERcdTc1NTlcdTg4QUJcdThDMDNcdThCRDVcdTc2ODQgdGFiIFx1OTg3OVx1MzAwMlxuICovXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gXHU0RTBFXHU2ODM4XHU1RkMzXHU3RUQzXHU2Nzg0XHU3QjQ5XHU0RUY3XHU3Njg0XHU2NzAwXHU1QzBGXHU3QzdCXHU1NzhCXHVGRjA4XHU2NUUwXHU5NzAwIGltcG9ydFx1RkYwQ1x1OTA3Rlx1NTE0RFx1NTE3MVx1NEVBQlx1NkEyMVx1NTc1N1x1RkYwOVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnR5cGUgUGFnZUNvbmZpZyA9IHtcbiAgcGF0aDogc3RyaW5nO1xuICBzdHlsZT86IFJlY29yZDxzdHJpbmcsIGFueT47XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn07XG5cbnR5cGUgVGFiQmFySXRlbSA9IHtcbiAgdGFiVHlwZT86IHN0cmluZztcbiAgcGFnZVBhdGg6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICBpY29uUGF0aDogc3RyaW5nO1xuICBzZWxlY3RlZEljb25QYXRoOiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn07XG5cbnR5cGUgUGFyc2VkVGFiQmFyQ29uZmlnID0ge1xuICBjb2xvcj86IHN0cmluZztcbiAgc2VsZWN0ZWRDb2xvcj86IHN0cmluZztcbiAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuICBib3JkZXJTdHlsZT86IHN0cmluZztcbiAgYm9yZGVyQ29sb3I/OiBzdHJpbmc7XG4gIGZvbnRTaXplPzogc3RyaW5nO1xuICBpY29uV2lkdGg/OiBzdHJpbmc7XG4gIHNwYWNpbmc/OiBzdHJpbmc7XG4gIGhlaWdodD86IHN0cmluZztcbiAgbWlkQnV0dG9uPzogYW55O1xuICBnbGFzc0VmZmVjdD86IGJvb2xlYW47XG4gIGxpc3Q6IFRhYkJhckl0ZW1bXTtcbn07XG5cbnR5cGUgUGFnZXNCdWlsZFN0YXRlID0ge1xuICByb290OiBzdHJpbmc7XG4gIGlzUHJvZHVjdGlvbjogYm9vbGVhbjtcbiAgb3V0cHV0OiB7IHBhZ2VzOiBQYWdlQ29uZmlnW107IHRhYkJhcj86IFJlY29yZDxzdHJpbmcsIGFueT47IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICB2aXJ0dWFsUGFnZXM6IFBhZ2VDb25maWdbXTtcbiAgZmxhZ3M6IHsgc2FuZGJveEFjdGl2ZTogYm9vbGVhbjsgc3RyaWN0TWFpblBhZ2VzOiBib29sZWFuOyBza2lwQ29uZmlnV3JpdGViYWNrOiBib29sZWFuIH07XG59O1xuXG50eXBlIFBhZ2VzU3RhZ2VDb250ZXh0ID0ge1xuICByb290OiBzdHJpbmc7XG4gIGlzUHJvZHVjdGlvbjogYm9vbGVhbjtcbn07XG5cbnR5cGUgUGFnZXNTdGFnZSA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBvcmRlcjogbnVtYmVyO1xuICBydW46IChzdGF0ZTogUGFnZXNCdWlsZFN0YXRlLCBjdHg6IFBhZ2VzU3RhZ2VDb250ZXh0KSA9PiB2b2lkO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBcdTUxODVcdTkwRThcdTVERTVcdTUxNzdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKiogXHU4QkZCXHU1M0Q2IFRhYmJhciBcdTdCNTZcdTc1NjVcdTZBMjFcdTVGMEZcdTkxNERcdTdGNkVcdUZGMDgwPVx1NjVFMFRhYmJhciwgMT1cdTUzOUZcdTc1MUZUYWJiYXIsIDI9XHU4MUVBXHU1QjlBXHU0RTQ5VGFiYmFyXHVGRjA5ICovXG5mdW5jdGlvbiBnZXRUYWJiYXJNb2RlKHByb2plY3RSb290OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuVklURV9UQUJCQVJfTU9ERSAhPSBudWxsICYmIHByb2Nlc3MuZW52LlZJVEVfVEFCQkFSX01PREUgIT09ICcnKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52LlZJVEVfVEFCQkFSX01PREUudHJpbSgpO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZW52UGF0aCA9IHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgJy5lbnYnKTtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhlbnZQYXRoKSkge1xuICAgICAgY29uc3QgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhlbnZQYXRoLCAndXRmLTgnKTtcbiAgICAgIGNvbnN0IG1hdGNoID0gY29udGVudC5tYXRjaCgvXlZJVEVfVEFCQkFSX01PREVcXHMqPVxccypbJ1wiXT8oW14nXCJcXHJcXG5dKylbJ1wiXT8vbSk7XG4gICAgICBpZiAobWF0Y2ggIT0gbnVsbCAmJiBtYXRjaFsxXSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBtYXRjaFsxXS50cmltKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNhdGNoIHtcbiAgICAvLyBcdTVGRkRcdTc1NjVcdTVGMDJcdTVFMzhcbiAgfVxuICByZXR1cm4gJzEnO1xufVxuXG4vKiogXHU4OUM0XHU4MzAzXHU1MzE2XHU5ODc1XHU5NzYyXHU4REVGXHU1Rjg0XHU3NTI4XHU0RThFXHU2QkQ0XHU1QkY5ICovXG5mdW5jdGlvbiBub3JtYWxpemVQYWdlUGF0aChwOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcFxuICAgIC50cmltKClcbiAgICAucmVwbGFjZSgvXFxcXC9nLCAnLycpXG4gICAgLnJlcGxhY2UoL15cXC5cXC8vLCAnJylcbiAgICAucmVwbGFjZSgvXlxcLy8sICcnKVxuICAgIC5yZXBsYWNlKC9cXC4odXZ1ZXx2dWV8dXRzfHRzfGpzKSQvLCAnJyk7XG59XG5cbi8qKiBcdTZCNjNcdTUyMTlcdTg5RTNcdTY3OTAgc3JjL3RhYmJhci9jb25maWcudXRzXHVGRjBDXHU2M0QwXHU1M0Q2IHRhYkJhciBcdTgyODJcdTcwQjlcdTYyNDBcdTk3MDBcdTc2ODRcdTUxNjhcdTkwRThcdTVCNTdcdTZCQjUgKi9cbmZ1bmN0aW9uIHBhcnNlQ3VzdG9tVGFiYmFyQ29uZmlnKHByb2plY3RSb290OiBzdHJpbmcpOiBQYXJzZWRUYWJCYXJDb25maWcge1xuICBjb25zdCBjb25maWdQYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCAnc3JjL3RhYmJhci9jb25maWcudXRzJyk7XG4gIGlmICghZnMuZXhpc3RzU3luYyhjb25maWdQYXRoKSkge1xuICAgIHJldHVybiB7IGxpc3Q6IFtdIH07XG4gIH1cbiAgY29uc3QgcmF3Q29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgLy8gXHU4RkM3XHU2RUU0XHU1OTFBXHU4ODRDXHU2Q0U4XHU5MUNBXHU0RTBFXHU1MzU1XHU4ODRDXHU2Q0U4XHU5MUNBXHVGRjBDXHU5MDdGXHU1MTREXHU2Q0U4XHU5MUNBXHU2Mzg5XHU3Njg0XHU1QzVFXHU2MDI3XHVGRjA4XHU1OTgyIG1pZEJ1dHRvbiBcdTdCNDlcdUZGMDlcdTg4QUJcdThCRUZcdTg5RTNcdTY3OTBcbiAgY29uc3QgY29udGVudCA9IHJhd0NvbnRlbnRcbiAgICAucmVwbGFjZSgvXFwvXFwqW1xcc1xcU10qP1xcKlxcLy9nLCAnJylcbiAgICAucmVwbGFjZSgvXFwvXFwvLiokL2dtLCAnJyk7XG5cbiAgLy8gXHU4QkZCXHU1M0Q2XHU0RTJEXHU2NTg3XHU3RkZCXHU4QkQxXHU1QjU3XHU1MTc4XG4gIGxldCB6aERpY3Q6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcbiAgY29uc3QgemhQYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCAnc3JjL2kxOG4vbG9jYWxlcy96aC1DTi5qc29uJyk7XG4gIGlmIChmcy5leGlzdHNTeW5jKHpoUGF0aCkpIHtcbiAgICB0cnkge1xuICAgICAgemhEaWN0ID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoemhQYXRoLCAndXRmLTgnKSk7XG4gICAgfVxuICAgIGNhdGNoIHt9XG4gIH1cblxuICBjb25zdCBjb2xvck1hdGNoID0gY29udGVudC5tYXRjaCgvY29sb3JcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICBjb25zdCBzZWxlY3RlZENvbG9yTWF0Y2ggPSBjb250ZW50Lm1hdGNoKC9zZWxlY3RlZENvbG9yXFxzKjpcXHMqWydcImBdKC4qPylbJ1wiYF0vKTtcbiAgY29uc3QgYmFja2dyb3VuZENvbG9yTWF0Y2ggPSBjb250ZW50Lm1hdGNoKC9iYWNrZ3JvdW5kQ29sb3JcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICBjb25zdCBib3JkZXJTdHlsZU1hdGNoID0gY29udGVudC5tYXRjaCgvYm9yZGVyU3R5bGVcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICBjb25zdCBib3JkZXJDb2xvck1hdGNoID0gY29udGVudC5tYXRjaCgvYm9yZGVyQ29sb3JcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICBjb25zdCBmb250U2l6ZU1hdGNoID0gY29udGVudC5tYXRjaCgvZm9udFNpemVcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICBjb25zdCBpY29uV2lkdGhNYXRjaCA9IGNvbnRlbnQubWF0Y2goL2ljb25XaWR0aFxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gIGNvbnN0IHNwYWNpbmdNYXRjaCA9IGNvbnRlbnQubWF0Y2goL3NwYWNpbmdcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICBjb25zdCBoZWlnaHRNYXRjaCA9IGNvbnRlbnQubWF0Y2goL2hlaWdodFxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gIGNvbnN0IGdsYXNzRWZmZWN0TWF0Y2ggPSBjb250ZW50Lm1hdGNoKC9nbGFzc0VmZmVjdFxccyo6XFxzKih0cnVlfGZhbHNlKS8pO1xuXG4gIGNvbnN0IG1pZEJ1dHRvbk1hdGNoID0gY29udGVudC5tYXRjaCgvbWlkQnV0dG9uXFxzKjpcXHMqXFx7KFtcXHNcXFNdKj8pXFx9Lyk7XG4gIGxldCBtaWRCdXR0b246IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQ7XG4gIGlmIChtaWRCdXR0b25NYXRjaCkge1xuICAgIGNvbnN0IGJsb2NrID0gbWlkQnV0dG9uTWF0Y2hbMV07XG4gICAgY29uc3Qgd2lkdGggPSBibG9jay5tYXRjaCgvd2lkdGhcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgIGNvbnN0IGhlaWdodCA9IGJsb2NrLm1hdGNoKC9oZWlnaHRcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgIGNvbnN0IHRleHQgPSBibG9jay5tYXRjaCgvdGV4dFxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gICAgY29uc3QgaWNvblBhdGggPSBibG9jay5tYXRjaCgvaWNvblBhdGhcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgIGNvbnN0IGljb25XaWR0aCA9IGJsb2NrLm1hdGNoKC9pY29uV2lkdGhcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZSA9IGJsb2NrLm1hdGNoKC9iYWNrZ3JvdW5kSW1hZ2VcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgIGNvbnN0IG1iOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gICAgaWYgKHdpZHRoICYmIHdpZHRoWzFdLnRyaW0oKSlcbiAgICAgIG1iLndpZHRoID0gd2lkdGhbMV0udHJpbSgpO1xuICAgIGlmIChoZWlnaHQgJiYgaGVpZ2h0WzFdLnRyaW0oKSlcbiAgICAgIG1iLmhlaWdodCA9IGhlaWdodFsxXS50cmltKCk7XG4gICAgaWYgKHRleHQgJiYgdGV4dFsxXS50cmltKCkpIHtcbiAgICAgIGNvbnN0IHRleHRLZXkgPSB0ZXh0WzFdLnRyaW0oKTtcbiAgICAgIGxldCB0cmFuc2xhdGVkVGV4dCA9IHRleHRLZXk7XG4gICAgICBpZiAodGV4dEtleS5zdGFydHNXaXRoKCd0YWJiYXIuJykpIHtcbiAgICAgICAgY29uc3Qgc3ViS2V5ID0gdGV4dEtleS5yZXBsYWNlKCd0YWJiYXIuJywgJycpO1xuICAgICAgICB0cmFuc2xhdGVkVGV4dCA9IHpoRGljdC50YWJiYXI/LltzdWJLZXldID8/IHRleHRLZXk7XG4gICAgICB9XG4gICAgICBtYi50ZXh0ID0gdHJhbnNsYXRlZFRleHQ7XG4gICAgfVxuICAgIGlmIChpY29uUGF0aCAmJiBpY29uUGF0aFsxXS50cmltKCkpXG4gICAgICBtYi5pY29uUGF0aCA9IGljb25QYXRoWzFdLnRyaW0oKTtcbiAgICBpZiAoaWNvbldpZHRoICYmIGljb25XaWR0aFsxXS50cmltKCkpXG4gICAgICBtYi5pY29uV2lkdGggPSBpY29uV2lkdGhbMV0udHJpbSgpO1xuICAgIGlmIChiYWNrZ3JvdW5kSW1hZ2UgJiYgYmFja2dyb3VuZEltYWdlWzFdLnRyaW0oKSlcbiAgICAgIG1iLmJhY2tncm91bmRJbWFnZSA9IGJhY2tncm91bmRJbWFnZVsxXS50cmltKCk7XG5cbiAgICBjb25zdCBpY29uZm9udE1hdGNoID0gYmxvY2subWF0Y2goL2ljb25mb250XFxzKjpcXHMqXFx7KFtcXHNcXFNdKj8pXFx9Lyk7XG4gICAgaWYgKGljb25mb250TWF0Y2gpIHtcbiAgICAgIGNvbnN0IGlmQmxvY2sgPSBpY29uZm9udE1hdGNoWzFdO1xuICAgICAgY29uc3QgaWZUZXh0ID0gaWZCbG9jay5tYXRjaCgvdGV4dFxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gICAgICBjb25zdCBpZlNlbGVjdGVkVGV4dCA9IGlmQmxvY2subWF0Y2goL3NlbGVjdGVkVGV4dFxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gICAgICBjb25zdCBpZkZvbnRTaXplID0gaWZCbG9jay5tYXRjaCgvZm9udFNpemVcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgICAgY29uc3QgaWZDb2xvciA9IGlmQmxvY2subWF0Y2goL2NvbG9yXFxzKjpcXHMqWydcImBdKC4qPylbJ1wiYF0vKTtcbiAgICAgIGNvbnN0IGlmU2VsZWN0ZWRDb2xvciA9IGlmQmxvY2subWF0Y2goL3NlbGVjdGVkQ29sb3JcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgICAgY29uc3QgaWNvbmZvbnRPYmo6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgICAgIGlmIChpZlRleHQgJiYgaWZUZXh0WzFdLnRyaW0oKSlcbiAgICAgICAgaWNvbmZvbnRPYmoudGV4dCA9IGlmVGV4dFsxXS50cmltKCk7XG4gICAgICBpZiAoaWZTZWxlY3RlZFRleHQgJiYgaWZTZWxlY3RlZFRleHRbMV0udHJpbSgpKVxuICAgICAgICBpY29uZm9udE9iai5zZWxlY3RlZFRleHQgPSBpZlNlbGVjdGVkVGV4dFsxXS50cmltKCk7XG4gICAgICBpZiAoaWZGb250U2l6ZSAmJiBpZkZvbnRTaXplWzFdLnRyaW0oKSlcbiAgICAgICAgaWNvbmZvbnRPYmouZm9udFNpemUgPSBpZkZvbnRTaXplWzFdLnRyaW0oKTtcbiAgICAgIGlmIChpZkNvbG9yICYmIGlmQ29sb3JbMV0udHJpbSgpKVxuICAgICAgICBpY29uZm9udE9iai5jb2xvciA9IGlmQ29sb3JbMV0udHJpbSgpO1xuICAgICAgaWYgKGlmU2VsZWN0ZWRDb2xvciAmJiBpZlNlbGVjdGVkQ29sb3JbMV0udHJpbSgpKVxuICAgICAgICBpY29uZm9udE9iai5zZWxlY3RlZENvbG9yID0gaWZTZWxlY3RlZENvbG9yWzFdLnRyaW0oKTtcbiAgICAgIChtYiBhcyBhbnkpLmljb25mb250ID0gaWNvbmZvbnRPYmo7XG4gICAgfVxuICAgIG1pZEJ1dHRvbiA9IG1iO1xuICB9XG5cbiAgY29uc3QgbGlzdE1hdGNoID0gY29udGVudC5tYXRjaCgvbGlzdFxccyo6XFxzKlxcWyhbXFxzXFxTXSo/KVxcXS8pO1xuICBjb25zdCBsaXN0UmVzdWx0OiBUYWJCYXJJdGVtW10gPSBbXTtcbiAgaWYgKGxpc3RNYXRjaCkge1xuICAgIGNvbnN0IGxpc3RCbG9jayA9IGxpc3RNYXRjaFsxXTtcbiAgICBjb25zdCBpdGVtUmVnZXggPSAvXFx7KFtcXHNcXFNdKj8pXFx9L2c7XG4gICAgbGV0IG0gPSBpdGVtUmVnZXguZXhlYyhsaXN0QmxvY2spO1xuICAgIHdoaWxlIChtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpdGVtQmxvY2sgPSBtWzFdO1xuICAgICAgY29uc3QgaXRlbVR5cGUgPSBpdGVtQmxvY2subWF0Y2goL3RhYlR5cGVcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgICAgY29uc3QgcGFnZVBhdGggPSBpdGVtQmxvY2subWF0Y2goL3BhZ2VQYXRoXFxzKjpcXHMqWydcImBdKC4qPylbJ1wiYF0vKTtcbiAgICAgIGNvbnN0IHRleHQgPSBpdGVtQmxvY2subWF0Y2goL3RleHRcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgICAgY29uc3QgaWNvblBhdGggPSBpdGVtQmxvY2subWF0Y2goL2ljb25QYXRoXFxzKjpcXHMqWydcImBdKC4qPylbJ1wiYF0vKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkSWNvblBhdGggPSBpdGVtQmxvY2subWF0Y2goL3NlbGVjdGVkSWNvblBhdGhcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgICAgaWYgKHBhZ2VQYXRoICYmIHRleHQpIHtcbiAgICAgICAgY29uc3QgdGV4dEtleSA9IHRleHRbMV0udHJpbSgpO1xuICAgICAgICBsZXQgdHJhbnNsYXRlZFRleHQgPSB0ZXh0S2V5O1xuICAgICAgICBpZiAodGV4dEtleS5zdGFydHNXaXRoKCd0YWJiYXIuJykpIHtcbiAgICAgICAgICBjb25zdCBzdWJLZXkgPSB0ZXh0S2V5LnJlcGxhY2UoJ3RhYmJhci4nLCAnJyk7XG4gICAgICAgICAgdHJhbnNsYXRlZFRleHQgPSB6aERpY3QudGFiYmFyPy5bc3ViS2V5XSA/PyB0ZXh0S2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXRlbU9iajogUmVjb3JkPHN0cmluZywgYW55PiA9IHtcbiAgICAgICAgICBwYWdlUGF0aDogcGFnZVBhdGhbMV0udHJpbSgpLnJlcGxhY2UoL15cXC8vLCAnJyksXG4gICAgICAgICAgdGV4dDogdHJhbnNsYXRlZFRleHQsXG4gICAgICAgICAgaWNvblBhdGg6IGljb25QYXRoID8gaWNvblBhdGhbMV0udHJpbSgpIDogJycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogc2VsZWN0ZWRJY29uUGF0aCA/IHNlbGVjdGVkSWNvblBhdGhbMV0udHJpbSgpIDogJydcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBcdTRFMUFcdTUyQTFcdTY4MDdcdThCQzZcdUZGMDh0eXBlXHVGRjA5XHVGRjFBXHU0RUM1XHU1NkRFXHU1MTk5XHU0RTNBXHU5ODc1XHU5NzYyXHU3RUE3XHU1NTJGXHU0RTAwXHU5NTJFXHVGRjBDXHU0RjlCXHU1MzlGXHU3NTFGIHRhYkJhciBcdTk4NzVcdTk3NjJcdTRFOTJcdThERjNcdTUzQkJcdTkxQ0RcbiAgICAgICAgaWYgKGl0ZW1UeXBlICYmIGl0ZW1UeXBlWzFdLnRyaW0oKSlcbiAgICAgICAgICBpdGVtT2JqLnRhYlR5cGUgPSBpdGVtVHlwZVsxXS50cmltKCk7XG5cbiAgICAgICAgY29uc3QgaWNvbmZvbnRNYXRjaCA9IGl0ZW1CbG9jay5tYXRjaCgvaWNvbmZvbnRcXHMqOlxccypcXHsoW1xcc1xcU10qPylcXH0vKTtcbiAgICAgICAgaWYgKGljb25mb250TWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBpZkJsb2NrID0gaWNvbmZvbnRNYXRjaFsxXTtcbiAgICAgICAgICBjb25zdCBpZlRleHQgPSBpZkJsb2NrLm1hdGNoKC90ZXh0XFxzKjpcXHMqWydcImBdKC4qPylbJ1wiYF0vKTtcbiAgICAgICAgICBjb25zdCBpZlNlbGVjdGVkVGV4dCA9IGlmQmxvY2subWF0Y2goL3NlbGVjdGVkVGV4dFxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gICAgICAgICAgY29uc3QgaWZGb250U2l6ZSA9IGlmQmxvY2subWF0Y2goL2ZvbnRTaXplXFxzKjpcXHMqWydcImBdKC4qPylbJ1wiYF0vKTtcbiAgICAgICAgICBjb25zdCBpZkNvbG9yID0gaWZCbG9jay5tYXRjaCgvY29sb3JcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgICAgICAgIGNvbnN0IGlmU2VsZWN0ZWRDb2xvciA9IGlmQmxvY2subWF0Y2goL3NlbGVjdGVkQ29sb3JcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgICAgICAgIGNvbnN0IGljb25mb250T2JqOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gICAgICAgICAgaWYgKGlmVGV4dCAmJiBpZlRleHRbMV0udHJpbSgpKVxuICAgICAgICAgICAgaWNvbmZvbnRPYmoudGV4dCA9IGlmVGV4dFsxXS50cmltKCk7XG4gICAgICAgICAgaWYgKGlmU2VsZWN0ZWRUZXh0ICYmIGlmU2VsZWN0ZWRUZXh0WzFdLnRyaW0oKSlcbiAgICAgICAgICAgIGljb25mb250T2JqLnNlbGVjdGVkVGV4dCA9IGlmU2VsZWN0ZWRUZXh0WzFdLnRyaW0oKTtcbiAgICAgICAgICBpZiAoaWZGb250U2l6ZSAmJiBpZkZvbnRTaXplWzFdLnRyaW0oKSlcbiAgICAgICAgICAgIGljb25mb250T2JqLmZvbnRTaXplID0gaWZGb250U2l6ZVsxXS50cmltKCk7XG4gICAgICAgICAgaWYgKGlmQ29sb3IgJiYgaWZDb2xvclsxXS50cmltKCkpXG4gICAgICAgICAgICBpY29uZm9udE9iai5jb2xvciA9IGlmQ29sb3JbMV0udHJpbSgpO1xuICAgICAgICAgIGlmIChpZlNlbGVjdGVkQ29sb3IgJiYgaWZTZWxlY3RlZENvbG9yWzFdLnRyaW0oKSlcbiAgICAgICAgICAgIGljb25mb250T2JqLnNlbGVjdGVkQ29sb3IgPSBpZlNlbGVjdGVkQ29sb3JbMV0udHJpbSgpO1xuICAgICAgICAgIGl0ZW1PYmouaWNvbmZvbnQgPSBpY29uZm9udE9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3RSZXN1bHQucHVzaChpdGVtT2JqIGFzIGFueSk7XG4gICAgICB9XG4gICAgICBtID0gaXRlbVJlZ2V4LmV4ZWMobGlzdEJsb2NrKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbG9yOiBjb2xvck1hdGNoID8gY29sb3JNYXRjaFsxXS50cmltKCkgOiAnQHRhYkJhckNvbG9yJyxcbiAgICBzZWxlY3RlZENvbG9yOiBzZWxlY3RlZENvbG9yTWF0Y2ggPyBzZWxlY3RlZENvbG9yTWF0Y2hbMV0udHJpbSgpIDogJ0B0YWJCYXJTZWxlY3RlZENvbG9yJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvck1hdGNoID8gYmFja2dyb3VuZENvbG9yTWF0Y2hbMV0udHJpbSgpIDogJ0B0YWJCYXJCYWNrZ3JvdW5kQ29sb3InLFxuICAgIGJvcmRlclN0eWxlOiBib3JkZXJTdHlsZU1hdGNoID8gYm9yZGVyU3R5bGVNYXRjaFsxXS50cmltKCkgOiAnQHRhYkJhckJvcmRlclN0eWxlJyxcbiAgICBib3JkZXJDb2xvcjogYm9yZGVyQ29sb3JNYXRjaCA/IGJvcmRlckNvbG9yTWF0Y2hbMV0udHJpbSgpIDogdW5kZWZpbmVkLFxuICAgIGZvbnRTaXplOiBmb250U2l6ZU1hdGNoID8gZm9udFNpemVNYXRjaFsxXS50cmltKCkgOiB1bmRlZmluZWQsXG4gICAgaWNvbldpZHRoOiBpY29uV2lkdGhNYXRjaCA/IGljb25XaWR0aE1hdGNoWzFdLnRyaW0oKSA6IHVuZGVmaW5lZCxcbiAgICBzcGFjaW5nOiBzcGFjaW5nTWF0Y2ggPyBzcGFjaW5nTWF0Y2hbMV0udHJpbSgpIDogdW5kZWZpbmVkLFxuICAgIGhlaWdodDogaGVpZ2h0TWF0Y2ggPyBoZWlnaHRNYXRjaFsxXS50cmltKCkgOiB1bmRlZmluZWQsXG4gICAgZ2xhc3NFZmZlY3Q6IGdsYXNzRWZmZWN0TWF0Y2ggPyBnbGFzc0VmZmVjdE1hdGNoWzFdID09PSAndHJ1ZScgOiB1bmRlZmluZWQsXG4gICAgbWlkQnV0dG9uLFxuICAgIGxpc3Q6IGxpc3RSZXN1bHRcbiAgfTtcbn1cblxuLyoqIFx1NjI4QVx1ODlFM1x1Njc5MFx1N0VEM1x1Njc5Q1x1NzY4NFx1NTNFRlx1OTAwOVx1NUI1N1x1NkJCNVx1ODg2NVx1OUY1MFx1NTIzMCB0YWJCYXIgXHU4MjgyXHU3MEI5XHU0RTBBXHVGRjA4XHU2Qzk5XHU3NkQyXHU0RTBFXHU2QTIxXHU1RjBGIDEvMiBcdTc2ODRcdTk5OTZcdTZCMjFcdTY3ODRcdTVFRkFcdTUxNzFcdTc1MjhcdUZGMDkgKi9cbmZ1bmN0aW9uIGFwcGVuZE9wdGlvbmFsVGFiQmFyRmllbGRzKHRhYkJhcjogUmVjb3JkPHN0cmluZywgYW55PiwgcGFyc2VkQ29uZmlnOiBQYXJzZWRUYWJCYXJDb25maWcpOiB2b2lkIHtcbiAgaWYgKHBhcnNlZENvbmZpZy5ib3JkZXJDb2xvcilcbiAgICB0YWJCYXIuYm9yZGVyQ29sb3IgPSBwYXJzZWRDb25maWcuYm9yZGVyQ29sb3I7XG4gIGlmIChwYXJzZWRDb25maWcuZm9udFNpemUpXG4gICAgdGFiQmFyLmZvbnRTaXplID0gcGFyc2VkQ29uZmlnLmZvbnRTaXplO1xuICBpZiAocGFyc2VkQ29uZmlnLmljb25XaWR0aClcbiAgICB0YWJCYXIuaWNvbldpZHRoID0gcGFyc2VkQ29uZmlnLmljb25XaWR0aDtcbiAgaWYgKHBhcnNlZENvbmZpZy5zcGFjaW5nKVxuICAgIHRhYkJhci5zcGFjaW5nID0gcGFyc2VkQ29uZmlnLnNwYWNpbmc7XG4gIGlmIChwYXJzZWRDb25maWcuaGVpZ2h0KVxuICAgIHRhYkJhci5oZWlnaHQgPSBwYXJzZWRDb25maWcuaGVpZ2h0O1xuICBpZiAocGFyc2VkQ29uZmlnLm1pZEJ1dHRvbilcbiAgICB0YWJCYXIubWlkQnV0dG9uID0gcGFyc2VkQ29uZmlnLm1pZEJ1dHRvbjtcbiAgaWYgKHBhcnNlZENvbmZpZy5nbGFzc0VmZmVjdCAhPT0gdW5kZWZpbmVkKVxuICAgIHRhYkJhci5nbGFzc0VmZmVjdCA9IHBhcnNlZENvbmZpZy5nbGFzc0VmZmVjdDtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBcdTk2MzZcdTZCQjVcdTVCOUVcdTczQjBcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBydW5UYWJCYXIoc3RhdGU6IFBhZ2VzQnVpbGRTdGF0ZSk6IHZvaWQge1xuICBjb25zdCBvdXRwdXQgPSBzdGF0ZS5vdXRwdXQ7XG4gIGNvbnN0IHByb2plY3RSb290ID0gc3RhdGUucm9vdDtcblxuICBpZiAoc3RhdGUuZmxhZ3Muc2FuZGJveEFjdGl2ZSkge1xuICAgIC8vIFx1NkM5OVx1NzZEMlx1NkEyMVx1NUYwRlx1RkYxQVx1NTNFQVx1NEZERFx1NzU1OVx1NUY1M1x1NTI0RFx1NkM5OVx1NzZEMlx1N0YxNlx1OEJEMVx1NEUyRFx1NzcxRlx1NUI5RVx1NUI1OFx1NTcyOFx1NzY4NCBUYWJCYXIgXHU5ODc1XHU5NzYyXHU5ODc5XG4gICAgY29uc3Qgc2FuZGJveE1haW5QYWdlcyA9IG91dHB1dC5wYWdlcztcbiAgICBjb25zdCBwYXJzZWRDb25maWcgPSBwYXJzZUN1c3RvbVRhYmJhckNvbmZpZyhwcm9qZWN0Um9vdCk7XG4gICAgY29uc3QgdmFsaWRTYW5kYm94VGFiTGlzdCA9IHBhcnNlZENvbmZpZy5saXN0LmZpbHRlcihpdGVtID0+XG4gICAgICBzYW5kYm94TWFpblBhZ2VzLnNvbWUocCA9PlxuICAgICAgICBwLnBhdGggPT09IGl0ZW0ucGFnZVBhdGhcbiAgICAgICAgfHwgcC5wYXRoID09PSBgc3JjLyR7aXRlbS5wYWdlUGF0aH1gXG4gICAgICAgIHx8IGBzcmMvJHtwLnBhdGh9YCA9PT0gaXRlbS5wYWdlUGF0aFxuICAgICAgICB8fCBub3JtYWxpemVQYWdlUGF0aChwLnBhdGgpID09PSBub3JtYWxpemVQYWdlUGF0aChpdGVtLnBhZ2VQYXRoKVxuICAgICAgKVxuICAgICk7XG5cbiAgICAvLyB1bmktYXBwIFx1NTNDQVx1NUZBRVx1NEZFMVx1NUMwRlx1N0EwQlx1NUU4Rlx1NUU5NVx1NUM0Mlx1ODlDNFx1ODMwM1x1RkYxQXRhYkJhci5saXN0IFx1NjU3MFx1OTFDRlx1NUZDNVx1OTg3Qlx1NTcyOCAyIH4gNSBcdTk4NzlcdTRFNEJcdTk1RjRcbiAgICAvLyBcdTgyRTVcdTZDOTlcdTc2RDJcdTRFMkRcdTU0MENcdTY1RjZcdThDMDNcdThCRDVcdTRFODYgPj0gMiBcdTRFMkEgVGFiIFx1OTg3NVx1OTc2Mlx1RkYwQ1x1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1NTQwOFx1NkNENVx1NzY4NCB0YWJCYXIgXHU4MjgyXHU3MEI5XHU0RjlCXHU1MzlGXHU3NTFGXHU1MjA3XHU2MzYyXG4gICAgLy8gXHU4MkU1XHU0RUM1XHU4QzAzXHU4QkQ1IDEgXHU0RTJBIFRhYiBcdTk4NzVcdTk3NjJcdUZGMENcdTc5RkJcdTk2NjRcdTdDRkJcdTdFREZcdTdFQTcgdGFiQmFyIFx1ODI4Mlx1NzBCOVx1OTA3Rlx1NTE0RFx1NjJBNVx1OERFRlx1NzUzMVx1N0YzQVx1NTkzMVx1OTUxOVx1OEJFRlxuICAgIGlmICh2YWxpZFNhbmRib3hUYWJMaXN0Lmxlbmd0aCA+PSAyKSB7XG4gICAgICBjb25zdCB0YWJiYXJNb2RlID0gZ2V0VGFiYmFyTW9kZShwcm9qZWN0Um9vdCk7XG4gICAgICBjb25zdCBpc0N1c3RvbSA9IHRhYmJhck1vZGUgIT09ICcxJyAmJiB0YWJiYXJNb2RlICE9PSAnTkFUSVZFX1RBQkJBUic7XG4gICAgICBvdXRwdXQudGFiQmFyID0ge1xuICAgICAgICAuLi4oaXNDdXN0b20gPyB7IGN1c3RvbTogdHJ1ZSwgY3VzdG9taXplOiB0cnVlIH0gOiB7fSksXG4gICAgICAgIGNvbG9yOiBwYXJzZWRDb25maWcuY29sb3IsXG4gICAgICAgIHNlbGVjdGVkQ29sb3I6IHBhcnNlZENvbmZpZy5zZWxlY3RlZENvbG9yLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhcnNlZENvbmZpZy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIGJvcmRlclN0eWxlOiBwYXJzZWRDb25maWcuYm9yZGVyU3R5bGUsXG4gICAgICAgIGxpc3Q6IHZhbGlkU2FuZGJveFRhYkxpc3RcbiAgICAgIH07XG4gICAgICBhcHBlbmRPcHRpb25hbFRhYkJhckZpZWxkcyhvdXRwdXQudGFiQmFyLCBwYXJzZWRDb25maWcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRlbGV0ZSBvdXRwdXQudGFiQmFyO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB0YWJiYXJNb2RlID0gZ2V0VGFiYmFyTW9kZShwcm9qZWN0Um9vdCk7XG4gIGlmICh0YWJiYXJNb2RlID09PSAnMCcgfHwgdGFiYmFyTW9kZSA9PT0gJ05PX1RBQkJBUicpIHtcbiAgICBkZWxldGUgb3V0cHV0LnRhYkJhcjtcbiAgfVxuICBlbHNlIGlmICh0YWJiYXJNb2RlID09PSAnMScgfHwgdGFiYmFyTW9kZSA9PT0gJ05BVElWRV9UQUJCQVInKSB7XG4gICAgLy8gXHU2QTIxXHU1RjBGMVx1RkYwOFx1NTM5Rlx1NzUxRlx1NkEyMVx1NUYwRlx1RkYwOVx1RkYxQVx1NEVDRSBzcmMvdGFiYmFyL2NvbmZpZy51dHMgXHU3Njg0IGN1c3RvbVRhYmJhckNvbmZpZyBcdTUyQThcdTYwMDFcdTYzRDBcdTUzRDZcdTc1MUZcdTYyMTBcdTUzOUZcdTc1MUYgdGFiQmFyIFx1OTE0RFx1N0Y2RVxuICAgIGNvbnN0IHBhcnNlZENvbmZpZyA9IHBhcnNlQ3VzdG9tVGFiYmFyQ29uZmlnKHByb2plY3RSb290KTtcbiAgICBpZiAob3V0cHV0LnRhYkJhciA9PSBudWxsKSB7XG4gICAgICBvdXRwdXQudGFiQmFyID0ge1xuICAgICAgICBjb2xvcjogcGFyc2VkQ29uZmlnLmNvbG9yLFxuICAgICAgICBzZWxlY3RlZENvbG9yOiBwYXJzZWRDb25maWcuc2VsZWN0ZWRDb2xvcixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwYXJzZWRDb25maWcuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICBib3JkZXJTdHlsZTogcGFyc2VkQ29uZmlnLmJvcmRlclN0eWxlLFxuICAgICAgICBsaXN0OiBwYXJzZWRDb25maWcubGlzdFxuICAgICAgfTtcbiAgICAgIGFwcGVuZE9wdGlvbmFsVGFiQmFyRmllbGRzKG91dHB1dC50YWJCYXIsIHBhcnNlZENvbmZpZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZGVsZXRlIG91dHB1dC50YWJCYXIuY3VzdG9tO1xuICAgICAgZGVsZXRlIG91dHB1dC50YWJCYXIuY3VzdG9taXplO1xuICAgICAgaWYgKHBhcnNlZENvbmZpZy5saXN0Lmxlbmd0aCA+IDAgJiYgKG91dHB1dC50YWJCYXIubGlzdCA9PSBudWxsIHx8IG91dHB1dC50YWJCYXIubGlzdC5sZW5ndGggPT09IDApKSB7XG4gICAgICAgIG91dHB1dC50YWJCYXIubGlzdCA9IHBhcnNlZENvbmZpZy5saXN0O1xuICAgICAgfVxuICAgICAgaWYgKHBhcnNlZENvbmZpZy5taWRCdXR0b24pXG4gICAgICAgIG91dHB1dC50YWJCYXIubWlkQnV0dG9uID0gcGFyc2VkQ29uZmlnLm1pZEJ1dHRvbjtcbiAgICAgIGlmIChwYXJzZWRDb25maWcuZ2xhc3NFZmZlY3QgIT09IHVuZGVmaW5lZClcbiAgICAgICAgb3V0cHV0LnRhYkJhci5nbGFzc0VmZmVjdCA9IHBhcnNlZENvbmZpZy5nbGFzc0VmZmVjdDtcbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAodGFiYmFyTW9kZSA9PT0gJzInIHx8IHRhYmJhck1vZGUgPT09ICdDVVNUT01fVEFCQkFSX1dJVEhfTkFUSVZFJyB8fCB0YWJiYXJNb2RlID09PSAnQ1VTVE9NX1RBQkJBUicpIHtcbiAgICAvLyBcdTZBMjFcdTVGMEYyXHVGRjA4XHU1RTI2XHU1MzlGXHU3NTFGXHU5MTREXHU3RjZFXHU3Njg0XHU4MUVBXHU1QjlBXHU0RTQ5IFRhYkJhclx1RkYwOVx1RkYxQVx1NzUxRlx1NjIxMFx1NTMwNVx1NTQyQiBjdXN0b206IHRydWUgXHU0RTBFIGN1c3RvbWl6ZTogdHJ1ZSBcdTc2ODQgcGFnZXMuanNvbiB0YWJCYXIgXHU5MTREXHU3RjZFXHVGRjBDXHU5MDFBXHU4RkM3IHN3aXRjaFRhYiBcdThERjNcdThGNkNcbiAgICBjb25zdCBwYXJzZWRDb25maWcgPSBwYXJzZUN1c3RvbVRhYmJhckNvbmZpZyhwcm9qZWN0Um9vdCk7XG4gICAgaWYgKG91dHB1dC50YWJCYXIgPT0gbnVsbCkge1xuICAgICAgb3V0cHV0LnRhYkJhciA9IHtcbiAgICAgICAgY3VzdG9tOiB0cnVlLFxuICAgICAgICBjdXN0b21pemU6IHRydWUsXG4gICAgICAgIGNvbG9yOiBwYXJzZWRDb25maWcuY29sb3IsXG4gICAgICAgIHNlbGVjdGVkQ29sb3I6IHBhcnNlZENvbmZpZy5zZWxlY3RlZENvbG9yLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhcnNlZENvbmZpZy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIGJvcmRlclN0eWxlOiBwYXJzZWRDb25maWcuYm9yZGVyU3R5bGUsXG4gICAgICAgIGxpc3Q6IHBhcnNlZENvbmZpZy5saXN0XG4gICAgICB9O1xuICAgICAgYXBwZW5kT3B0aW9uYWxUYWJCYXJGaWVsZHMob3V0cHV0LnRhYkJhciwgcGFyc2VkQ29uZmlnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvdXRwdXQudGFiQmFyLmN1c3RvbSA9IHRydWU7XG4gICAgICBvdXRwdXQudGFiQmFyLmN1c3RvbWl6ZSA9IHRydWU7XG4gICAgICBpZiAocGFyc2VkQ29uZmlnLmxpc3QubGVuZ3RoID4gMCAmJiAob3V0cHV0LnRhYkJhci5saXN0ID09IG51bGwgfHwgb3V0cHV0LnRhYkJhci5saXN0Lmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgb3V0cHV0LnRhYkJhci5saXN0ID0gcGFyc2VkQ29uZmlnLmxpc3Q7XG4gICAgICB9XG4gICAgICBpZiAocGFyc2VkQ29uZmlnLm1pZEJ1dHRvbilcbiAgICAgICAgb3V0cHV0LnRhYkJhci5taWRCdXR0b24gPSBwYXJzZWRDb25maWcubWlkQnV0dG9uO1xuICAgICAgaWYgKHBhcnNlZENvbmZpZy5nbGFzc0VmZmVjdCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICBvdXRwdXQudGFiQmFyLmdsYXNzRWZmZWN0ID0gcGFyc2VkQ29uZmlnLmdsYXNzRWZmZWN0O1xuICAgIH1cbiAgfVxuICBlbHNlIGlmICh0YWJiYXJNb2RlID09PSAnMycgfHwgdGFiYmFyTW9kZSA9PT0gJ0NVU1RPTV9UQUJCQVJfV0lUSE9VVF9OQVRJVkUnIHx8IHRhYmJhck1vZGUgPT09ICc0JyB8fCB0YWJiYXJNb2RlID09PSAnU0lOR0xFX1BBR0VfVEFCQkFSJykge1xuICAgIC8vIFx1NkEyMVx1NUYwRjNcdUZGMDhcdTdFQUZcdTgxRUFcdTVCOUFcdTRFNDkgVGFiQmFyXHVGRjBDXHU2NUUwXHU1MzlGXHU3NTFGXHU5MTREXHU3RjZFXHVGRjA5XHU0RTBFIFx1NkEyMVx1NUYwRjRcdUZGMDhcdTUzNTVcdTk4NzVcdTk3NjIgVGFiQmFyIFx1NUJCOVx1NTY2OFx1NkEyMVx1NUYwRlx1RkYwOVx1RkYxQVx1NUI4Q1x1NTE2OFx1NTIyMFx1OTY2NCBwYWdlcy5qc29uIFx1NEUyRFx1NzY4NCB0YWJCYXJcbiAgICBkZWxldGUgb3V0cHV0LnRhYkJhcjtcblxuICAgIC8vIFx1NkEyMVx1NUYwRiA0IFx1NTNFQVx1NjcwOVx1NUJCRlx1NEUzQlx1OTg3NVx1NjYyRlx1NzcxRlx1NUI5RVx1OERFRlx1NzUzMVx1MzAwMlx1NTE3Nlx1NEY1OSBUYWIgXHU5ODc1XHU1RkM1XHU5ODdCXHU0RUNFIHBhZ2VzLmpzb24gXHU3OUZCXHU5NjY0XHVGRjBDXHU1NDI2XHU1MjE5XHU1QzBGXHU3QTBCXHU1RThGXHU3RjE2XHU4QkQxXHU1NjY4XHU0RjFBXG4gICAgLy8gXHU0RTNBXHU1NDBDXHU0RTAwXHU0RTJBIC51dnVlIFx1NTQwQ1x1NjVGNlx1NzUxRlx1NjIxMCBjcmVhdGVQYWdlIFx1NTMwNVx1ODhDNVx1NEUwRVx1N0VDNFx1NEVGNlx1NUI5RVx1NEY4Qlx1RkYxQlx1NjUyRlx1NEVEOFx1NUI5RFx1NEYxQVx1NEYxOFx1NTE0OFx1NTJBMFx1OEY3RFx1NTI0RFx1ODAwNVx1NUU3Nlx1NzZGNFx1NjNBNVx1NjJBNVxuICAgIC8vIFx1MzAwQ1x1NjVFMCBDb21wb25lbnQoKSBcdTY3ODRcdTkwMjBcdTU2NjhcdThDMDNcdTc1MjhcdUZGMENcdTRGNDYgUGFnZSgpIFx1OTg3NVx1OTc2Mlx1Njc4NFx1OTAyMFx1NTY2OFx1ODhBQlx1OTUxOVx1OEJFRlx1OEMwM1x1NzUyOFx1MzAwRFx1MzAwMlxuICAgIGlmICh0YWJiYXJNb2RlID09PSAnNCcgfHwgdGFiYmFyTW9kZSA9PT0gJ1NJTkdMRV9QQUdFX1RBQkJBUicpIHtcbiAgICAgIGNvbnN0IHBhcnNlZENvbmZpZyA9IHBhcnNlQ3VzdG9tVGFiYmFyQ29uZmlnKHByb2plY3RSb290KTtcbiAgICAgIGNvbnN0IHRhYlBhZ2VQYXRocyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgICAgcGFyc2VkQ29uZmlnLmxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICB0YWJQYWdlUGF0aHMuYWRkKG5vcm1hbGl6ZVBhZ2VQYXRoKGl0ZW0ucGFnZVBhdGgpKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHBhcnNlZENvbmZpZy5taWRCdXR0b24/LnBhZ2VQYXRoICYmIHR5cGVvZiBwYXJzZWRDb25maWcubWlkQnV0dG9uLnBhZ2VQYXRoID09PSAnc3RyaW5nJykge1xuICAgICAgICB0YWJQYWdlUGF0aHMuYWRkKG5vcm1hbGl6ZVBhZ2VQYXRoKHBhcnNlZENvbmZpZy5taWRCdXR0b24ucGFnZVBhdGgpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaG9tZVBhZ2UgPSBvdXRwdXQucGFnZXMuZmluZChwYWdlID0+IHBhZ2UudHlwZSA9PT0gJ2hvbWUnIHx8IHBhZ2UuaXNIb21lID09PSB0cnVlKTtcbiAgICAgIGNvbnN0IGhvc3RQYXRoID0gbm9ybWFsaXplUGFnZVBhdGgoaG9tZVBhZ2U/LnBhdGggPz8gb3V0cHV0LnBhZ2VzWzBdPy5wYXRoID8/ICcnKTtcbiAgICAgIGlmIChob3N0UGF0aCAhPT0gJycpIHtcbiAgICAgICAgY29uc3QgdmlydHVhbFBhZ2VzOiBQYWdlQ29uZmlnW10gPSBbXTtcbiAgICAgICAgb3V0cHV0LnBhZ2VzID0gb3V0cHV0LnBhZ2VzLmZpbHRlcigocGFnZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhZ2VQYXRoID0gbm9ybWFsaXplUGFnZVBhdGgocGFnZS5wYXRoKTtcbiAgICAgICAgICBpZiAocGFnZVBhdGggIT09IGhvc3RQYXRoICYmIHRhYlBhZ2VQYXRocy5oYXMocGFnZVBhdGgpKSB7XG4gICAgICAgICAgICB2aXJ0dWFsUGFnZXMucHVzaChwYWdlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBzdGF0ZS52aXJ0dWFsUGFnZXMgPSB2aXJ0dWFsUGFnZXM7XG4gICAgICAgIHN0YXRlLmZsYWdzLnN0cmljdE1haW5QYWdlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gXHU2M0QyXHU0RUY2XHU1QkZDXHU1MUZBXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3Qgc3RhZ2U6IFBhZ2VzU3RhZ2UgPSB7XG4gIG5hbWU6ICd1bmktcGFnZXM6dGFiYmFyJyxcbiAgb3JkZXI6IDIwMCxcbiAgcnVuKHN0YXRlKSB7XG4gICAgcnVuVGFiQmFyKHN0YXRlKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5pUGFnZXNUYWJiYXJQbHVnaW4oKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3VuaS1wYWdlczp0YWJiYXInLFxuICAgIHVuaVBhZ2VzU3RhZ2U6IHN0YWdlXG4gIH07XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy92aXRlLXBsdWdpbi11bmktcGFnZXMtcm91dGUtdGFibGUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnMvdml0ZS1wbHVnaW4tdW5pLXBhZ2VzLXJvdXRlLXRhYmxlLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBsb2FkUGxhdGZvcm1QYWdlc0pzb24gfSBmcm9tICcuL3BhZ2VzLWpzb24tdXRpbCc7XG5cbi8qKlxuICogdW5pLXBhZ2VzIFx1OTg3NVx1OTc2Mlx1OERFRlx1NzUzMVx1ODg2OFx1ODY1QVx1NjJERlx1NkEyMVx1NTc1N1x1RkYwOFx1NTM2Qlx1NjYxRlx1RkYwOVx1MzAwMlxuICpcbiAqIFx1NTM2Qlx1NjYxRlx1NzJFQ1x1N0FDQlx1RkYxQVx1NjcyQ1x1NjU4N1x1NEVGNlx1NEUwRCBpbXBvcnQgXHU2ODM4XHU1RkMzXHU2M0QyXHU0RUY2XHU2MjE2XHU1MTc2XHU0RUQ2XHU1MzZCXHU2NjFGXHU2M0QyXHU0RUY2XHUzMDAyXHU1QjgzXHU5MDFBXHU4RkM3XHU1NzI4XHU4MUVBXHU1REYxXHU1QkZDXHU1MUZBXHU3Njg0XHU2M0QyXHU0RUY2XHU1QkY5XHU4QzYxXHU0RTBBXHU2MzAyXG4gKiBgdW5pUGFnZXNTdGFnZWAgXHU1QjU3XHU2QkI1XHU4OEFCXHU2ODM4XHU1RkMzXHU2M0QyXHU0RUY2XHU1M0QxXHU3M0IwXHVGRjA4XHU2ODM4XHU1RkMzXHU1NzI4IGNvbmZpZ1Jlc29sdmVkIFx1NjVGNlx1NjMwOVx1OEJFNVx1NUI1N1x1NkJCNVx1NjUzNlx1OTZDNlx1MzAwMVx1NjMwOSBvcmRlciBcdTUzNDdcdTVFOEZcdTU3MjhcdTU0MENcdTRFMDBcdTZCMjFcbiAqIFx1NzUxRlx1NjIxMCBwYXNzIFx1NTE4NVx1OEZEMFx1ODg0Q1x1RkYwOVx1MzAwMlxuICpcbiAqICMjIFx1NEUzQVx1NEVDMFx1NEU0OFx1NEY3Rlx1NzUyOFx1ODY1QVx1NjJERlx1NkEyMVx1NTc1N1xuICpcbiAqIGB1c2VSb3V0ZSgpYCBcdTc2ODRcdTk4NzVcdTk3NjJcdTkxNERcdTdGNkUgLyBgLm5hbWVgIFx1NjU3MFx1NjM2RVx1NkU5MFx1NjYyRlx1MzAwQ3BhZ2VzLmpzb24gXHU5MUNDXHU4QkU1XHU5ODc1XHU5NzYyXHU3Njg0XHU5MTREXHU3RjZFXHU5ODc5XHUzMDBEXHVGRjFBXHU5ODc1XHU5NzYyIGBkZWZpbmVQYWdlKClgIFx1OTFDQ1x1NThGMFx1NjYwRVx1NzY4NFxuICogXHU1QjU3XHU2QkI1XHVGRjA4bGF5b3V0IC8gc2hvd0JhY2sgLyBoaWRlTmF2YmFyIC8gZW5hYmxlUHVsbERvd25SZWZyZXNoIC8gc3R5bGVcdUZGMENcdTRFRTVcdTUzQ0EgbmFtZVx1MzAwMXJlcXVpcmVBdXRoIFx1OEZEOVx1N0M3Qlx1ODFFQVx1NUI5QVx1NEU0OVxuICogXHU1QjU3XHU2QkI1XHVGRjA5XHU5MEZEXHU0RjFBXHU4OEFCXHU2ODM4XHU1RkMzXHU2M0QyXHU0RUY2XHU1MzlGXHU2ODM3XHU1MTk5XHU4RkRCIHBhZ2VzLmpzb25cdTMwMDJcbiAqXG4gKiBcdTRGNDZcdThGRDBcdTg4NENcdTY1RjZcdTZDQTFcdTY3MDlcdTRFRkJcdTRGNTUgQVBJIFx1ODBGRFx1NjU3NFx1Njc2MVx1OEJGQlx1NTFGQVx1OTg3NVx1OTc2Mlx1OTE0RFx1N0Y2RSBcdTIwMTRcdTIwMTQgXHU1Qjk4XHU2NUI5XHU3Njg0IGAkZ2V0UGFnZVN0eWxlKClgIFx1NTNFQVx1OEZENFx1NTZERSBzdHlsZSBcdTgyODJcdTcwQjlcdUZGMUJwYWdlcy5qc29uXG4gKiBcdTY3MkNcdThFQUJcdTRFNUZcdTRFMERcdTk2OEZcdTRFQTdcdTcyNjlcdTUyMDZcdTUzRDFcdUZGMDhcdTVDMEZcdTdBMEJcdTVFOEZcdTRGQTdcdTg4QUJcdTdGMTZcdThCRDFcdTYyMTAgYXBwLmpzb25cdUZGMENcdTRFMTRcdTgxRUFcdTVCOUFcdTRFNDlcdTVCNTdcdTZCQjVcdTUxNjhcdTg4QUJcdTRFMjJcdTYzODlcdUZGMDlcdTMwMDJcdTU2RTBcdTZCNjRcdThGRDlcdTkxQ0NcdTU3MjhcdTY3ODRcdTVFRkFcdTY3MUZcdTYyOEFcdTVGNTNcdTUyNERcbiAqIFx1NUU3M1x1NTNGMFx1NzY4NFx1OTg3NVx1OTc2Mlx1OTE0RFx1N0Y2RVx1ODg2OFx1NkUzMlx1NjdEM1x1NjIxMCBgdmlydHVhbDp1bmktcGFnZXMtcm91dGUtdGFibGVgIFx1NkEyMVx1NTc1N1x1RkYwQ1x1NzUzMSBgc3JjL3JvdXRlci9pbmRleC51dHNgIFx1NzZGNFx1NjNBNVx1NUJGQ1x1NTE2NVx1RkYwQ1xuICogXHU0RTBEXHU1MThEXHU3NTFGXHU2MjEwXHU0RUZCXHU0RjU1XHU3MjY5XHU3NDA2XHU2NTg3XHU0RUY2XHUzMDAyXG4gKlxuICogXHU2NzJDXHU5NjM2XHU2QkI1XHU1NzI4XHU2ODM4XHU1RkMzXHU1MTk5XHU1QjhDIHBhZ2VzLmpzb24gXHU0RTRCXHU1MjREXHU4RkQwXHU4ODRDXHVGRjBDXHU3NkY0XHU2M0E1XHU1OTBEXHU3NTI4XHU1MzczXHU1QzA2XHU4OEFCXHU1RThGXHU1MjE3XHU1MzE2XHU3Njg0IHN0YXRlXHVGRjFCXHU4NjVBXHU2MkRGXHU2QTIxXHU1NzU3XHU1MTg1XHU1QkI5XHU2MzA5XHU1RjUzXHU1MjREXHU2Nzg0XHU1RUZBXHU1RTczXHU1M0YwXG4gKiBcdTc1MUZcdTYyMTBcdUZGMENcdTU2RTBcdTZCNjRcdTRFMERcdTRGOURcdThENTYgVVRTIFx1Njc2MVx1NEVGNlx1N0YxNlx1OEJEMVx1NUI4Rlx1MzAwMlxuICovXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gXHU0RTBFXHU2ODM4XHU1RkMzXHU3RUQzXHU2Nzg0XHU3QjQ5XHU0RUY3XHU3Njg0XHU2NzAwXHU1QzBGXHU3QzdCXHU1NzhCXHVGRjA4XHU2NUUwXHU5NzAwIGltcG9ydFx1RkYwQ1x1OTA3Rlx1NTE0RFx1NTE3MVx1NEVBQlx1NkEyMVx1NTc1N1x1RkYwOVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnR5cGUgUGFnZUNvbmZpZyA9IHtcbiAgcGF0aDogc3RyaW5nO1xuICBzdHlsZT86IFJlY29yZDxzdHJpbmcsIGFueT47XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn07XG5cbnR5cGUgUGFnZXNCdWlsZFN0YXRlID0ge1xuICByb290OiBzdHJpbmc7XG4gIG91dHB1dDogeyBwYWdlczogUGFnZUNvbmZpZ1tdOyBzdWJQYWNrYWdlcz86IEFycmF5PHsgcm9vdDogc3RyaW5nOyBwYWdlczogUGFnZUNvbmZpZ1tdIH0+OyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgLyoqIFx1NkEyMVx1NUYwRiA0IFx1NzY4NCBUYWIgXHU5ODc1XHU0RTBEXHU2Q0U4XHU1MThDXHU3NzFGXHU1QjlFXHU4REVGXHU3NTMxXHVGRjBDXHU0RjQ2XHU0RUNEXHU0RkREXHU3NTU5XHU1NzI4XHU4REVGXHU3NTMxXHU4ODY4XHU0RTJEXHU0RjlCIHVzZVRhYlBhZ2UoKSBcdThCRkJcdTUzRDYgbWV0YSAvIG5hbWUgKi9cbiAgdmlydHVhbFBhZ2VzPzogUGFnZUNvbmZpZ1tdO1xuICAvKiogXHU3NTFGXHU2NTQ4XHU3Njg0XHU1MjA2XHU1MzA1XHU5NkM2XHU1NDA4XHVGRjFBXHU2ODM4XHU1RkMzXHU1NzI4IGZpbmFsaXplIFx1OTYzNlx1NkJCNVx1NjI0RFx1NjI4QVx1NUI4M1x1NjMwMlx1NTIzMCBvdXRwdXQuc3ViUGFja2FnZXNcdUZGMENcdTY1NDVcdTY3MkNcdTk2MzZcdTZCQjVcdTc2RjRcdTYzQTVcdTRFQ0VcdThGRDlcdTkxQ0NcdTUzRDYgKi9cbiAgc2Nhbm5lZFN1YlBrZ3M6IEFycmF5PHsgcm9vdDogc3RyaW5nOyBwYWdlczogUGFnZUNvbmZpZ1tdIH0+O1xuICBmbGFnczogeyBzYW5kYm94QWN0aXZlOiBib29sZWFuOyBzdHJpY3RNYWluUGFnZXM6IGJvb2xlYW47IHNraXBDb25maWdXcml0ZWJhY2s6IGJvb2xlYW4gfTtcbn07XG5cbnR5cGUgUGFnZXNTdGFnZUNvbnRleHQgPSB7XG4gIHJvb3Q6IHN0cmluZztcbiAgaXNQcm9kdWN0aW9uOiBib29sZWFuO1xufTtcblxudHlwZSBQYWdlc1N0YWdlID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIG9yZGVyOiBudW1iZXI7XG4gIHJ1bjogKHN0YXRlOiBQYWdlc0J1aWxkU3RhdGUsIGN0eDogUGFnZXNTdGFnZUNvbnRleHQpID0+IHZvaWQ7XG59O1xuXG50eXBlIFBhZ2VSb3V0ZXNWYWx1ZU5hbWVcbiAgPSB8ICdQQUdFU19ST1VURV9UQUJMRV9KU09OJ1xuICAgIHwgJ1BBR0VTX1JPVVRFX1RBQkxFJ1xuICAgIHwgJ1BBR0VTX1JPVVRFX1RBQkxFX0xJU1RfSlNPTidcbiAgICB8ICdQQUdFU19ST1VURV9UQUJMRV9MSVNUJztcblxuLyoqIFx1NEUxQVx1NTJBMVx1NEVFM1x1NzgwMVx1NUJGQ1x1NTE2NVx1NzY4NFx1NTE2Q1x1NTE3MVx1ODY1QVx1NjJERlx1NkEyMVx1NTc1NyBJRCAqL1xuZXhwb3J0IGNvbnN0IFBBR0VTX1JPVVRFX1RBQkxFX01PRFVMRV9JRCA9ICd2aXJ0dWFsOnVuaS1wYWdlcy1yb3V0ZS10YWJsZSc7XG5cbi8qKiBWaXRlIC8gUm9sbHVwIFx1NTE4NVx1OTBFOFx1NEY3Rlx1NzUyOFx1NzY4NFx1NURGMlx1ODlFM1x1Njc5MFx1NkEyMVx1NTc1NyBJRCAqL1xuZXhwb3J0IGNvbnN0IFJFU09MVkVEX1BBR0VTX1JPVVRFX1RBQkxFX01PRFVMRV9JRCA9IGBcXDAke1BBR0VTX1JPVVRFX1RBQkxFX01PRFVMRV9JRH1gO1xuXG4vKiogXHU5ODc1XHU5NzYyXHU4REVGXHU1Rjg0IFx1MjE5MiBcdThGRDBcdTg4NENcdTY1RjZcdTUzRTNcdTVGODRcdUZGMDhcdTg4NjVcdTUyNERcdTVCRkMgYC9gXHUzMDAxXHU2Mjk4XHU1M0UwXHU5MUNEXHU1OTBEXHU2NTlDXHU2NzYwXHVGRjA5XHVGRjBDXHU1OTgyIGBzcmMvc3ViL2EvYWAgXHUyMTkyIGAvc3JjL3N1Yi9hL2FgICovXG5mdW5jdGlvbiB0b1J1bnRpbWVSb3V0ZVBhdGgocGFnZVBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgLyR7cGFnZVBhdGh9YC5yZXBsYWNlKC9cXC8rL2csICcvJyk7XG59XG5cbi8qKiBcdTc1MzFcdTVGNTNcdTUyNERcdTVFNzNcdTUzRjBcdTUzNzNcdTVDMDZcdTUxOTlcdTUxNjUgcGFnZXMuanNvbiBcdTc2ODRcdTkxNERcdTdGNkVcdTVCRjlcdThDNjFcdTY3ODRcdTkwMjBcdTMwMENcdThERUZcdTc1MzFcdThERUZcdTVGODQgXHUyMTkyIFx1OTg3NVx1OTc2Mlx1OTE0RFx1N0Y2RVx1MzAwRFx1ODg2OCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUGFnZVJvdXRlc1RhYmxlKG91dHB1dDogUmVjb3JkPHN0cmluZywgYW55Pik6IFJlY29yZDxzdHJpbmcsIFBhZ2VDb25maWc+IHtcbiAgY29uc3QgdGFibGU6IFJlY29yZDxzdHJpbmcsIFBhZ2VDb25maWc+ID0ge307XG5cbiAgY29uc3QgY29sbGVjdCA9IChwYWdlOiBhbnksIHByZWZpeDogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgaWYgKHBhZ2UgPT0gbnVsbCB8fCB0eXBlb2YgcGFnZS5wYXRoICE9PSAnc3RyaW5nJyB8fCBwYWdlLnBhdGggPT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlUGF0aCA9IHRvUnVudGltZVJvdXRlUGF0aChwcmVmaXggPT09ICcnID8gcGFnZS5wYXRoIDogYCR7cHJlZml4fS8ke3BhZ2UucGF0aH1gKTtcbiAgICAvLyBcdTZERjFcdTYyRjdcdThEMURcdTRFMDBcdTRFRkRcdTVFNzZcdTYyOEEgcGF0aCBcdTg5QzRcdTgzMDNcdTYyMTBcdThGRDBcdTg4NENcdTY1RjZcdTUzRTNcdTVGODRcdUZGMENcdTkwN0ZcdTUxNERcdTRFMEUgcGFnZXMuanNvbiBcdTc2ODRcdTc2RjhcdTVCRjkgcGF0aCBcdTZERjdcdTZEQzZcbiAgICBjb25zdCBjb3B5ID0geyAuLi5wYWdlLCBwYXRoOiByb3V0ZVBhdGggfTtcbiAgICAvLyBcdTUyNjVcdTc5QkJcdTY3ODRcdTVFRkFcdTY3MUZcdTUxODVcdTkwRThcdTVCNTdcdTZCQjVcdUZGMDhcdTRFRTVcdTRFMEJcdTUyMTJcdTdFQkZcdTVGMDBcdTU5MzRcdUZGMDlcdUZGMENcdTg2NUFcdTYyREZcdTZBMjFcdTU3NTdcdTUzRUFcdTY2QjRcdTk3MzIgcGFnZXMuanNvbiBcdTc2ODRcdTk4NzVcdTk3NjJcdTkxNERcdTdGNkVcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhjb3B5KSkge1xuICAgICAgaWYgKGtleS5zdGFydHNXaXRoKCdfJykpIHtcbiAgICAgICAgZGVsZXRlIGNvcHlba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gXHU4REVGXHU3NTMxXHU1NDBEXHVGRjFBXHU0RjE4XHU1MTQ4XHU1M0Q2IGRlZmluZVBhZ2UgXHU1OEYwXHU2NjBFXHU3Njg0IG5hbWVcdUZGMENcdTY3MkFcdTU4RjBcdTY2MEVcdTUyMTlcdTlFRDhcdThCQTRcdThCRkJcdTUzRDZcdThERUZcdTVGODRcdTY3MDBcdTU0MEVcdTRFMDBcdTRFMkFcdTUzNTVcdThCQ0RcdUZGMDhcdTU5ODIgbW9kYWxCYXNpY0RlbW9cdUZGMDlcbiAgICBpZiAodHlwZW9mIGNvcHkubmFtZSAhPT0gJ3N0cmluZycgfHwgY29weS5uYW1lLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIGNvbnN0IHNlZ21lbnRzID0gcm91dGVQYXRoLnNwbGl0KCc/JylbMF0uc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb3B5Lm5hbWUgPSBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGFibGVbcm91dGVQYXRoXSA9IGNvcHk7XG4gIH07XG5cbiAgY29uc3QgbWFpblBhZ2VzID0gb3V0cHV0LnBhZ2VzO1xuICBpZiAoQXJyYXkuaXNBcnJheShtYWluUGFnZXMpKSB7XG4gICAgbWFpblBhZ2VzLmZvckVhY2goKHA6IGFueSkgPT4gY29sbGVjdChwLCAnJykpO1xuICB9XG4gIGNvbnN0IHN1YlBhY2thZ2VzID0gb3V0cHV0LnN1YlBhY2thZ2VzO1xuICBpZiAoQXJyYXkuaXNBcnJheShzdWJQYWNrYWdlcykpIHtcbiAgICBzdWJQYWNrYWdlcy5mb3JFYWNoKChwa2c6IGFueSkgPT4ge1xuICAgICAgaWYgKHBrZyA9PSBudWxsIHx8ICFBcnJheS5pc0FycmF5KHBrZy5wYWdlcykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgcm9vdCA9IHR5cGVvZiBwa2cucm9vdCA9PT0gJ3N0cmluZycgPyBwa2cucm9vdCA6ICcnO1xuICAgICAgcGtnLnBhZ2VzLmZvckVhY2goKHA6IGFueSkgPT4gY29sbGVjdChwLCByb290KSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFibGU7XG59XG5cbi8qKiBcdThGNkNcdTRFNDlcdTYyMTAgVVRTIFx1NTNFRlx1NkQ4OFx1OEQzOVx1NzY4NCBKUyBcdTUzNTVcdTVGMTVcdTUzRjdcdTVCNTdcdTdCMjZcdTRFMzJcdTVCNTdcdTk3NjJcdTkxQ0YgKi9cbmZ1bmN0aW9uIHRvSnNTdHJpbmdMaXRlcmFsKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYCcke3ZhbHVlLnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJykucmVwbGFjZSgvJy9nLCAnXFxcXFxcJycpfSdgO1xufVxuXG4vKiogXHU4QkExXHU3Qjk3XHU4NjVBXHU2MkRGXHU2QTIxXHU1NzU3XHU1NkRCXHU0RTJBXHU1QkZDXHU1MUZBXHU1MDNDXHVGRjFCQXBwIFx1OTg4NFx1N0YxNlx1OEJEMVx1NEUwRSBINSBcdTg2NUFcdTYyREZcdTZBMjFcdTU3NTdcdTUxNzFcdTc1MjhcdTU0MENcdTRFMDBcdTRFRkRcdTc1MUZcdTYyMTBcdTUzRTNcdTVGODQgKi9cbmZ1bmN0aW9uIHJlbmRlclBhZ2VSb3V0ZXNWYWx1ZXModGFibGU6IFJlY29yZDxzdHJpbmcsIFBhZ2VDb25maWc+KTogUmVjb3JkPFBhZ2VSb3V0ZXNWYWx1ZU5hbWUsIHN0cmluZz4ge1xuICBjb25zdCBqc29uVGV4dCA9IEpTT04uc3RyaW5naWZ5KHRhYmxlKTtcbiAgY29uc3QgbGlzdEpzb25UZXh0ID0gSlNPTi5zdHJpbmdpZnkoT2JqZWN0LnZhbHVlcyh0YWJsZSkpO1xuICByZXR1cm4ge1xuICAgIFBBR0VTX1JPVVRFX1RBQkxFX0pTT046IHRvSnNTdHJpbmdMaXRlcmFsKGpzb25UZXh0KSxcbiAgICBQQUdFU19ST1VURV9UQUJMRToganNvblRleHQsXG4gICAgUEFHRVNfUk9VVEVfVEFCTEVfTElTVF9KU09OOiB0b0pzU3RyaW5nTGl0ZXJhbChsaXN0SnNvblRleHQpLFxuICAgIFBBR0VTX1JPVVRFX1RBQkxFX0xJU1Q6IGxpc3RKc29uVGV4dFxuICB9O1xufVxuXG4vKiogXHU2MjhBXHU4REVGXHU3NTMxXHU5MTREXHU3RjZFXHU4ODY4XHU2RTMyXHU2N0QzXHU0RTNBXHU4NjVBXHU2MkRGXHU2QTIxXHU1NzU3XHU2RTkwXHU3ODAxXHVGRjA4XHU1MzU1XHU1RjE1XHU1M0Y3XHU1QjU3XHU3QjI2XHU0RTMyXHU1QjU3XHU5NzYyXHU5MUNGXHVGRjBDXHU1MTdDXHU1QkI5IFVUUyBcdTVCRkNcdTUxNjVcdUZGMDkgKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQYWdlUm91dGVzU291cmNlKHRhYmxlOiBSZWNvcmQ8c3RyaW5nLCBQYWdlQ29uZmlnPik6IHN0cmluZyB7XG4gIGNvbnN0IHZhbHVlcyA9IHJlbmRlclBhZ2VSb3V0ZXNWYWx1ZXModGFibGUpO1xuXG4gIHJldHVybiBbXG4gICAgJy8qKicsXG4gICAgJyAqIFx1MjZBMFx1RkUwRiBcdTY3MkNcdTZBMjFcdTU3NTdcdTc1MzEgcGx1Z2lucy92aXRlLXBsdWdpbi11bmktcGFnZXMtcm91dGUtdGFibGUudHMgXHU2M0QwXHU0RjlCXHU3Njg0IFZpdGUgXHU4NjVBXHU2MkRGXHU2QTIxXHU1NzU3XHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwXHUzMDAyJyxcbiAgICAnIConLFxuICAgIGAgKiBcdTZBMjFcdTU3NTcgSURcdUZGMUEke1BBR0VTX1JPVVRFX1RBQkxFX01PRFVMRV9JRH1gLFxuICAgICcgKiBcdTUxODVcdTVCQjlcdUZGMUFcdTVGNTNcdTUyNERcdTY3ODRcdTVFRkFcdTVFNzNcdTUzRjBcdTc2ODQgcGFnZXMuanNvbiBcdTk4NzVcdTk3NjJcdTkxNERcdTdGNkVcdTg4NjhcdUZGMENcdTRGOUIgYHVzZVJvdXRlKClgIFx1OEJGQlx1NTNENlx1OTg3NVx1OTc2Mlx1OTE0RFx1N0Y2RVx1NEUwRVx1OERFRlx1NzUzMVx1NTQwRFx1MzAwMicsXG4gICAgJyAqIFx1NzUxRlx1NjIxMFx1NjVGNlx1NjczQVx1RkYxQVx1NkJDRlx1NkIyMVx1NzUxRlx1NjIxMCAvIFx1NjZGNFx1NjVCMCBwYWdlcy5qc29uIFx1NjVGNlx1NTQwQ1x1NkI2NVx1NTIzN1x1NjVCMFx1MzAwMicsXG4gICAgJyAqLycsXG4gICAgLy8gXHU4NjVBXHU2MkRGXHU2QTIxXHU1NzU3XHU2Q0ExXHU2NzA5IC51dHMgXHU1NDBFXHU3RjAwXHVGRjBDVml0ZSBcdTRGMUFcdTYzMDkgSlMgXHU4OUUzXHU2NzkwXHVGRjFCXHU4RkQ5XHU5MUNDXHU0RTBEXHU1MTk5XHU3QzdCXHU1NzhCXHU2ODA3XHU2Q0U4XHVGRjBDVVRTIFx1NEUwRSBKUyBcdTkwRkRcdTgwRkRcdTc2RjRcdTYzQTVcdTZEODhcdThEMzlcdTMwMDJcbiAgICAnLyoqIFx1OERFRlx1NUY4NCBcdTIxOTIgXHU5ODc1XHU5NzYyXHU5MTREXHU3RjZFXHU3Njg0IEpTT04gXHU1QjU3XHU3QjI2XHU0RTMyICovJyxcbiAgICBgZXhwb3J0IGNvbnN0IFBBR0VTX1JPVVRFX1RBQkxFX0pTT04gPSAke3ZhbHVlcy5QQUdFU19ST1VURV9UQUJMRV9KU09OfTtgLFxuICAgICcnLFxuICAgICcvKiogXHU4REVGXHU1Rjg0IFx1MjE5MiBcdTk4NzVcdTk3NjJcdTkxNERcdTdGNkVcdTc2ODRcdTVCRjlcdThDNjFcdTVGNjJcdTVGMEYgKi8nLFxuICAgIGBleHBvcnQgY29uc3QgUEFHRVNfUk9VVEVfVEFCTEUgPSAke3ZhbHVlcy5QQUdFU19ST1VURV9UQUJMRX07YCxcbiAgICAnJyxcbiAgICAnLyoqIFx1OTg3NVx1OTc2Mlx1OTE0RFx1N0Y2RVx1NjU3MFx1N0VDNFx1NzY4NCBKU09OIFx1NUI1N1x1N0IyNlx1NEUzMiAqLycsXG4gICAgYGV4cG9ydCBjb25zdCBQQUdFU19ST1VURV9UQUJMRV9MSVNUX0pTT04gPSAke3ZhbHVlcy5QQUdFU19ST1VURV9UQUJMRV9MSVNUX0pTT059O2AsXG4gICAgJycsXG4gICAgJy8qKiBcdTk4NzVcdTk3NjJcdTkxNERcdTdGNkVcdTY1NzBcdTdFQzRcdTVGNjJcdTVGMEZcdUZGMENcdTRGQkZcdTRFOEVcdTc2RjRcdTYzQTVcdTkwNERcdTUzODYgKi8nLFxuICAgIGBleHBvcnQgY29uc3QgUEFHRVNfUk9VVEVfVEFCTEVfTElTVCA9ICR7dmFsdWVzLlBBR0VTX1JPVVRFX1RBQkxFX0xJU1R9O2AsXG4gICAgJydcbiAgXS5qb2luKCdcXG4nKTtcbn1cblxuLyoqXG4gKiBcdTYyOEFcdTUxNzdcdTU0MERcdTVCRkNcdTUxNjVcdTUxODVcdTgwNTRcdTRFM0FcdTY3MkNcdTU3MzBcdTVFMzhcdTkxQ0ZcdTMwMDJcbiAqXG4gKiBEQ2xvdWQgXHU3Njg0IGB1bmk6YXBwLXV0c2AgXHU0RjFBXHU2MjhBIGAudXRzYCBcdTZFOTBcdTc4MDFcdTU5MERcdTUyMzZcdTUyMzAgYC51dnVlYCBcdTU0MEVcdTUzNTVcdTcyRUNcdTRFQTRcdTdFRDkgS290bGluIFx1N0YxNlx1OEJEMVx1NTY2OFx1RkYwQ1xuICogXHU4RkQ5XHU2NzYxXHU5NEZFXHU4REVGXHU1M0VBXHU2MjY3XHU4ODRDIFJvbGx1cCBgdHJhbnNmb3JtYFx1RkYwQ1x1NEUwRFx1NEYxQVx1NEUzQSBBcHAgXHU3QUVGXHU4OUUzXHU2NzkwIFZpdGUgXHU4NjVBXHU2MkRGXHU2QTIxXHU1NzU3XHUzMDAyXHU1RkM1XHU5ODdCXHU1NzI4XG4gKiBgdW5pOmFwcC11dHNgIFx1NEU0Qlx1NTI0RFx1NjI4QSBpbXBvcnQgXHU2NkZGXHU2MzYyXHU2Mzg5XHVGRjBDXHU1NDI2XHU1MjE5IGB2aXJ0dWFsOmAgXHU0RjFBXHU1MzlGXHU2ODM3XHU4RkRCXHU1MTY1IFVUUy9Lb3RsaW5cdTMwMDJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlubGluZVBhZ2VSb3V0ZXNJbXBvcnQoY29kZTogc3RyaW5nLCB0YWJsZTogUmVjb3JkPHN0cmluZywgUGFnZUNvbmZpZz4pOiBzdHJpbmcge1xuICBpZiAoIWNvZGUuaW5jbHVkZXMoUEFHRVNfUk9VVEVfVEFCTEVfTU9EVUxFX0lEKSkge1xuICAgIHJldHVybiBjb2RlO1xuICB9XG4gIGNvbnN0IHZhbHVlcyA9IHJlbmRlclBhZ2VSb3V0ZXNWYWx1ZXModGFibGUpO1xuICBjb25zdCBpbXBvcnRQYXR0ZXJuID0gL2ltcG9ydFxccypcXHsoW159XSopXFx9XFxzKmZyb21cXHMqWydcIl12aXJ0dWFsOnVuaS1wYWdlcy1yb3V0ZS10YWJsZVsnXCJdXFxzKjs/L2c7XG4gIHJldHVybiBjb2RlLnJlcGxhY2UoaW1wb3J0UGF0dGVybiwgKHN0YXRlbWVudDogc3RyaW5nLCBpbXBvcnRDbGF1c2U6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zOiBzdHJpbmdbXSA9IFtdO1xuICAgIGltcG9ydENsYXVzZS5zcGxpdCgnLCcpLmZvckVhY2goKHNwZWNpZmllcjogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHNwZWNpZmllci50cmltKCkuc3BsaXQoL1xccythc1xccysvKTtcbiAgICAgIGNvbnN0IGV4cG9ydGVkTmFtZSA9IHBhcnRzWzBdLnRyaW0oKTtcbiAgICAgIGlmICghT2JqZWN0Lmhhc093bih2YWx1ZXMsIGV4cG9ydGVkTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbG9jYWxOYW1lID0gKHBhcnRzLmxlbmd0aCA+IDEgPyBwYXJ0c1sxXSA6IHBhcnRzWzBdKS50cmltKCk7XG4gICAgICBpZiAobG9jYWxOYW1lID09ICcnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRlY2xhcmF0aW9ucy5wdXNoKGBjb25zdCAke2xvY2FsTmFtZX0gPSAke3ZhbHVlc1tleHBvcnRlZE5hbWUgYXMgUGFnZVJvdXRlc1ZhbHVlTmFtZV19O2ApO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWNsYXJhdGlvbnMubGVuZ3RoID4gMCA/IGRlY2xhcmF0aW9ucy5qb2luKCdcXG4nKSA6IHN0YXRlbWVudDtcbiAgfSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gXHU2M0QyXHU0RUY2XHU1QkZDXHU1MUZBXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5pUGFnZXNSb3V0ZVRhYmxlUGx1Z2luKCk6IFBsdWdpbiAmIHsgdW5pUGFnZXNTdGFnZTogUGFnZXNTdGFnZSB9IHtcbiAgbGV0IHByb2plY3RSb290ID0gcHJvY2Vzcy5jd2QoKTtcbiAgbGV0IG1vZHVsZVNvdXJjZSA9ICcnO1xuICBsZXQgcm91dGVUYWJsZTogUmVjb3JkPHN0cmluZywgUGFnZUNvbmZpZz4gfCBudWxsID0gbnVsbDtcbiAgbGV0IHNlcnZlcjogYW55ID0gbnVsbDtcblxuICBjb25zdCBlbnN1cmVSb3V0ZVRhYmxlID0gKCk6IFJlY29yZDxzdHJpbmcsIFBhZ2VDb25maWc+ID0+IHtcbiAgICBpZiAocm91dGVUYWJsZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gcm91dGVUYWJsZTtcbiAgICB9XG4gICAgY29uc3QgcGFyc2VkID0gbG9hZFBsYXRmb3JtUGFnZXNKc29uKHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgJ3BhZ2VzLmpzb24nKSk7XG4gICAgcm91dGVUYWJsZSA9IGJ1aWxkUGFnZVJvdXRlc1RhYmxlKHBhcnNlZCBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+KTtcbiAgICByZXR1cm4gcm91dGVUYWJsZTtcbiAgfTtcblxuICBjb25zdCBpbnZhbGlkYXRlVmlydHVhbE1vZHVsZSA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAoc2VydmVyID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG1vZCA9IHNlcnZlci5tb2R1bGVHcmFwaC5nZXRNb2R1bGVCeUlkKFJFU09MVkVEX1BBR0VTX1JPVVRFX1RBQkxFX01PRFVMRV9JRCk7XG4gICAgICBpZiAobW9kICE9IG51bGwpIHtcbiAgICAgICAgc2VydmVyLm1vZHVsZUdyYXBoLmludmFsaWRhdGVNb2R1bGUobW9kKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2gge31cbiAgfTtcblxuICBjb25zdCBzdGFnZTogUGFnZXNTdGFnZSA9IHtcbiAgICBuYW1lOiAndW5pLXBhZ2VzOnJvdXRlLXRhYmxlJyxcbiAgICBvcmRlcjogMzAwLFxuICAgIHJ1bihzdGF0ZSkge1xuICAgICAgLy8gXHU2NzJDXHU5NjM2XHU2QkI1XHU1NzI4XHU2ODM4XHU1RkMzIGZpbmFsaXplXHVGRjA4XHU2MjhBIHNjYW5uZWRTdWJQa2dzIFx1NjMwMlx1NTIzMCBvdXRwdXQuc3ViUGFja2FnZXNcdUZGMDlcdTRFNEJcdTUyNERcdThGRDBcdTg4NENcdUZGMENcbiAgICAgIC8vIFx1NjU0NVx1ODFFQVx1ODg0Q1x1NjI4QVx1NTIwNlx1NTMwNVx1ODg2NVx1NTE2OFx1NjIxMCBvdXRwdXQgXHU1RjYyXHU3MkI2XHU1MThEXHU0RUE0XHU3RUQ5XHU3NTFGXHU2MjEwXHU1NjY4IFx1MjAxNFx1MjAxNCBcdTRFMEUgcGFnZXMuanNvbiBcdTc2ODRcdTY3MDBcdTdFQzhcdTUzRTNcdTVGODRcdTRGRERcdTYzMDFcdTRFMDBcdTgxRjRcdTMwMDJcbiAgICAgIGNvbnN0IHJvdXRlUGFnZXMgPSBbLi4uc3RhdGUub3V0cHV0LnBhZ2VzXTtcbiAgICAgIGNvbnN0IHJvdXRlUGFnZVBhdGhzID0gbmV3IFNldChyb3V0ZVBhZ2VzLm1hcChwYWdlID0+IHBhZ2UucGF0aCkpO1xuICAgICAgY29uc3QgdmlydHVhbFBhZ2VzID0gc3RhdGUudmlydHVhbFBhZ2VzID8/IFtdO1xuICAgICAgdmlydHVhbFBhZ2VzLmZvckVhY2goKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKCFyb3V0ZVBhZ2VQYXRocy5oYXMocGFnZS5wYXRoKSkge1xuICAgICAgICAgIHJvdXRlUGFnZXMucHVzaChwYWdlKTtcbiAgICAgICAgICByb3V0ZVBhZ2VQYXRocy5hZGQocGFnZS5wYXRoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBuZXh0VGFibGUgPSBidWlsZFBhZ2VSb3V0ZXNUYWJsZSh7XG4gICAgICAgIHBhZ2VzOiByb3V0ZVBhZ2VzLFxuICAgICAgICBzdWJQYWNrYWdlczogc3RhdGUuc2Nhbm5lZFN1YlBrZ3NcbiAgICAgIH0pO1xuICAgICAgcm91dGVUYWJsZSA9IG5leHRUYWJsZTtcbiAgICAgIGNvbnN0IG5leHRTb3VyY2UgPSByZW5kZXJQYWdlUm91dGVzU291cmNlKG5leHRUYWJsZSk7XG4gICAgICBpZiAobmV4dFNvdXJjZSA9PT0gbW9kdWxlU291cmNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG1vZHVsZVNvdXJjZSA9IG5leHRTb3VyY2U7XG4gICAgICBpbnZhbGlkYXRlVmlydHVhbE1vZHVsZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICd1bmktcGFnZXM6cm91dGUtdGFibGUnLFxuICAgIGVuZm9yY2U6ICdwcmUnLFxuICAgIHVuaVBhZ2VzU3RhZ2U6IHN0YWdlLFxuXG4gICAgY29uZmlnUmVzb2x2ZWQoY29uZmlnOiBhbnkpIHtcbiAgICAgIHByb2plY3RSb290ID0gY29uZmlnLnJvb3QgPz8gcHJvamVjdFJvb3Q7XG4gICAgfSxcblxuICAgIGNvbmZpZ3VyZVNlcnZlcihkZXZTZXJ2ZXI6IGFueSkge1xuICAgICAgc2VydmVyID0gZGV2U2VydmVyO1xuICAgIH0sXG5cbiAgICByZXNvbHZlSWQoaWQ6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgICAgaWYgKGlkID09PSBQQUdFU19ST1VURV9UQUJMRV9NT0RVTEVfSUQpIHtcbiAgICAgICAgcmV0dXJuIFJFU09MVkVEX1BBR0VTX1JPVVRFX1RBQkxFX01PRFVMRV9JRDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICBsb2FkKGlkOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgIGlmIChpZCAhPT0gUkVTT0xWRURfUEFHRVNfUk9VVEVfVEFCTEVfTU9EVUxFX0lEKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKG1vZHVsZVNvdXJjZSA9PT0gJycpIHtcbiAgICAgICAgcm91dGVUYWJsZSA9IGJ1aWxkUGFnZVJvdXRlc1RhYmxlKFxuICAgICAgICAgIGxvYWRQbGF0Zm9ybVBhZ2VzSnNvbihwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsICdwYWdlcy5qc29uJykpIGFzIFJlY29yZDxzdHJpbmcsIGFueT5cbiAgICAgICAgKTtcbiAgICAgICAgbW9kdWxlU291cmNlID0gcmVuZGVyUGFnZVJvdXRlc1NvdXJjZShyb3V0ZVRhYmxlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtb2R1bGVTb3VyY2U7XG4gICAgfSxcblxuICAgIHRyYW5zZm9ybShjb2RlOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcbiAgICAgIGlmICghY29kZS5pbmNsdWRlcyhQQUdFU19ST1VURV9UQUJMRV9NT0RVTEVfSUQpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgY29uc3QgZmlsZW5hbWUgPSBpZC5zcGxpdCgnPycpWzBdLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcbiAgICAgIGlmIChcbiAgICAgICAgIWZpbGVuYW1lLmVuZHNXaXRoKCcudXRzJylcbiAgICAgICAgJiYgIWZpbGVuYW1lLmVuZHNXaXRoKCcudXZ1ZScpXG4gICAgICAgICYmICFmaWxlbmFtZS5lbmRzV2l0aCgnLnZ1ZScpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXh0Q29kZSA9IGlubGluZVBhZ2VSb3V0ZXNJbXBvcnQoY29kZSwgZW5zdXJlUm91dGVUYWJsZSgpKTtcbiAgICAgIGlmIChuZXh0Q29kZSA9PT0gY29kZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IG5leHRDb2RlLFxuICAgICAgICBtYXA6IG51bGxcbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnMvdml0ZS1wbHVnaW4tYWxpcGF5LXRhYmJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy92aXRlLXBsdWdpbi1hbGlwYXktdGFiYmFyLnRzXCI7aW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSAndml0ZSc7XG5cbi8qKlxuICogXHU2NTJGXHU0RUQ4XHU1QjlEXHU1QzBGXHU3QTBCXHU1RThGXHU4MUVBXHU1QjlBXHU0RTQ5IFRhYkJhciBcdTg4NjVcdTRFMDFcdTYzRDJcdTRFRjZcbiAqXG4gKiBcdTc1REJcdTcwQjlcdTg5RTNcdTUxQjNcdUZGMUFcbiAqIDEuIFx1NTcyOFx1NkEyMVx1NUYwRiAyXHVGRjA4XHU1RTI2XHU1MzlGXHU3NTFGXHU1RTk1XHU2NzdGXHU3Njg0XHU4MUVBXHU1QjlBXHU0RTQ5XHU2QTIxXHU1RjBGXHVGRjA5XHU0RTBCXHVGRjBDXHU1RkFFXHU0RkUxXHU1QzBGXHU3QTBCXHU1RThGXHU5MTREXHU3RjZFIGN1c3RvbTogdHJ1ZSBcdTY1RjZcdTVFOTVcdTVDNDJcdTVCOENcdTUxNjhcdTRFMERcdTZFMzJcdTY3RDNcdTUzOUZcdTc1MUYgVGFiQmFyXHVGRjFCXG4gKiAgICBcdTRGNDZcdTY1MkZcdTRFRDhcdTVCOURcdTVDMEZcdTdBMEJcdTVFOEZcdTUzOUZcdTc1MUZcdTUxODVcdTY4MzhcdTY1RTBcdTZDRDVcdTRFQzVcdTkwMUFcdThGQzcgY3VzdG9tOiB0cnVlIFx1NTE3M1x1OTVFRFx1NTM5Rlx1NzUxRlx1NUU5NVx1Njc3Rlx1RkYwQ1x1NUZDNVx1OTg3Qlx1NTcyOCBhcHAuanNvbiBcdTc2ODQgdGFiQmFyIFx1NEUyRFx1OTE0RFx1N0Y2RSBjdXN0b21pemU6IHRydWVcdUZGMENcbiAqICAgIFx1NTQyNlx1NTIxOVx1NjUyRlx1NEVEOFx1NUI5RFx1NTM5Rlx1NzUxRlx1NUJCOVx1NTY2OFx1NTcyOFx1OTk5Nlx1NUUyN1x1NTQ4Q1x1NkJDRlx1NkIyMVx1NTIwN1x1OTg3NVx1RkYwOHN3aXRjaFRhYlx1RkYwOVx1NjVGNlx1OTBGRFx1NEYxQVx1NUYzQVx1ODg0Q1x1NkUzMlx1NjdEM1x1NTM5Rlx1NzUxRlx1NUU5NVx1NUVBN1x1RkYwQ1x1OTAyMFx1NjIxMFx1NEUyNVx1OTFDRFx1ODlDNlx1ODlDOVx1OTVFQVx1NzBDMVx1MzAwMlxuICogMi4gXHU2NzJDXHU2M0QyXHU0RUY2XHU1NzI4XHU2Nzg0XHU1RUZBXHU0RTBFXHU3MEVEXHU5MUNEXHU4RjdEXHU2NUY2XHVGRjBDXHU4MUVBXHU1MkE4XHU1NDExIG1wLWFsaXBheSBcdTRFQTdcdTcyNjlcdTc2RUVcdTVGNTVcdTRFMEJcdTc2ODQgYXBwLmpzb24gXHU2Q0U4XHU1MTY1IHRhYkJhci5jdXN0b21pemU6IHRydWVcdUZGMENcbiAqICAgIFx1NUU3Nlx1NzUxRlx1NjIxMCAwIFx1OUFEOFx1NUVBNlx1OTY5MFx1ODVDRlx1NzY4NFx1NTM5Rlx1NzUxRiBjdXN0b21pemUtdGFiLWJhciBcdTUzNjBcdTRGNERcdTdFQzRcdTRFRjZcdUZGMENcdTRGN0ZcdTY1MkZcdTRFRDhcdTVCOURcdTUxODVcdTY4MzhcdTVGN0JcdTVFOTVcdTUxNzNcdTk1RURcdTUzOUZcdTc1MUZcdTVFOTVcdTVFQTdcdTZFMzJcdTY3RDNcdUZGMENcdTVCOUVcdTczQjBcdTk2RjZcdTk1RUFcdTcwQzFcdTMwMDJcbiAqL1xuZnVuY3Rpb24gaXNDdXN0b21UYWJiYXJNb2RlKHByb2plY3RSb290OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgbGV0IG1vZGUgPSBwcm9jZXNzLmVudi5WSVRFX1RBQkJBUl9NT0RFO1xuICBpZiAobW9kZSA9PSBudWxsIHx8IG1vZGUgPT09ICcnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVudlBhdGggPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsICcuZW52Jyk7XG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhlbnZQYXRoKSkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGVudlBhdGgsICd1dGYtOCcpO1xuICAgICAgICBjb25zdCBtYXRjaCA9IGNvbnRlbnQubWF0Y2goL15WSVRFX1RBQkJBUl9NT0RFXFxzKj1cXHMqWydcIl0/KFteJ1wiXFxyXFxuXSspWydcIl0/L20pO1xuICAgICAgICBpZiAobWF0Y2ggIT0gbnVsbCAmJiBtYXRjaFsxXSAhPSBudWxsKSB7XG4gICAgICAgICAgbW9kZSA9IG1hdGNoWzFdLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCB7fVxuICB9XG4gIGNvbnN0IG1vZGVTdHIgPSAobW9kZSA/PyAnMScpLnRyaW0oKTtcbiAgcmV0dXJuIG1vZGVTdHIgPT09ICcyJyB8fCBtb2RlU3RyID09PSAnQ1VTVE9NX1RBQkJBUicgfHwgbW9kZVN0ciA9PT0gJ0NVU1RPTV9UQUJCQVJfV0lUSF9OQVRJVkUnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbGlwYXlDdXN0b21UYWJiYXJQbHVnaW4oKTogUGx1Z2luIHtcbiAgbGV0IHByb2plY3RSb290ID0gJyc7XG4gIGxldCB3YXRjaGVySW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBwYXRjaEFsaXBheURpcihvdXRwdXREaXI6IHN0cmluZykge1xuICAgIGNvbnN0IGlzQ3VzdG9tID0gaXNDdXN0b21UYWJiYXJNb2RlKHByb2plY3RSb290KTtcbiAgICBjb25zdCBhcHBKc29uUGF0aCA9IHBhdGguam9pbihvdXRwdXREaXIsICdhcHAuanNvbicpO1xuICAgIGNvbnN0IGN1c3RvbVRhYkJhckRpciA9IHBhdGguam9pbihvdXRwdXREaXIsICdjdXN0b21pemUtdGFiLWJhcicpO1xuXG4gICAgaWYgKGlzQ3VzdG9tKSB7XG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhhcHBKc29uUGF0aCkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByYXcgPSBmcy5yZWFkRmlsZVN5bmMoYXBwSnNvblBhdGgsICd1dGYtOCcpO1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJhdyk7XG4gICAgICAgICAgaWYgKGpzb24udGFiQmFyICYmIGpzb24udGFiQmFyLmN1c3RvbWl6ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAganNvbi50YWJCYXIuY3VzdG9taXplID0gdHJ1ZTtcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoYXBwSnNvblBhdGgsIEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIDIpLCAndXRmLTgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2gge31cbiAgICAgIH1cblxuICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKGN1c3RvbVRhYkJhckRpcikpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmcy5ta2RpclN5bmMoY3VzdG9tVGFiQmFyRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihjdXN0b21UYWJCYXJEaXIsICdpbmRleC5qc29uJyksICd7XFxuICBcImNvbXBvbmVudFwiOiB0cnVlXFxufVxcbicsICd1dGYtOCcpO1xuICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKGN1c3RvbVRhYkJhckRpciwgJ2luZGV4LmF4bWwnKSwgJzx2aWV3IHN0eWxlPVwiZGlzcGxheTpub25lO1wiPjwvdmlldz5cXG4nLCAndXRmLTgnKTtcbiAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihjdXN0b21UYWJCYXJEaXIsICdpbmRleC5qcycpLCAnQ29tcG9uZW50KHtcXG4gIGRhdGE6IHt9LFxcbiAgbWV0aG9kczoge31cXG59KTtcXG4nLCAndXRmLTgnKTtcbiAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihjdXN0b21UYWJCYXJEaXIsICdpbmRleC5hY3NzJyksICcvKiBlbXB0eSAqL1xcbicsICd1dGYtOCcpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gXHU2QTIxXHU1RjBGIDFcdUZGMDhcdTUzOUZcdTc1MUZcdTZBMjFcdTVGMEZcdUZGMDlcdTdCNDlcdTk3NUVcdTZBMjFcdTVGMEYgMiBcdTU3M0FcdTY2NkZcdUZGMUFcdTVGQzVcdTk4N0JcdTZFMDVcdTc0MDYgY3VzdG9taXplIFx1NjgwN1x1OEJCMFx1NEUwRSBjdXN0b21pemUtdGFiLWJhciBcdTc2RUVcdTVGNTVcdUZGMENcdTRGN0ZcdTUzOUZcdTc1MUYgVGFiQmFyIFx1NkI2M1x1NUUzOFx1NUM1NVx1NzNCMFxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoYXBwSnNvblBhdGgpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmF3ID0gZnMucmVhZEZpbGVTeW5jKGFwcEpzb25QYXRoLCAndXRmLTgnKTtcbiAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyYXcpO1xuICAgICAgICAgIGlmIChqc29uLnRhYkJhciAmJiBqc29uLnRhYkJhci5jdXN0b21pemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGVsZXRlIGpzb24udGFiQmFyLmN1c3RvbWl6ZTtcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoYXBwSnNvblBhdGgsIEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIDIpLCAndXRmLTgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2gge31cbiAgICAgIH1cblxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoY3VzdG9tVGFiQmFyRGlyKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZzLnJtU3luYyhjdXN0b21UYWJCYXJEaXIsIHsgcmVjdXJzaXZlOiB0cnVlLCBmb3JjZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdGNoQWxsQWxpcGF5T3V0cHV0cyhyb290OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjYW5kaWRhdGVEaXJzID0gW1xuICAgICAgcGF0aC5qb2luKHJvb3QsICd1bnBhY2thZ2UnLCAnZGlzdCcsICdkZXYnLCAnbXAtYWxpcGF5JyksXG4gICAgICBwYXRoLmpvaW4ocm9vdCwgJ2Rpc3QnLCAnZGV2JywgJ21wLWFsaXBheScpLFxuICAgICAgcGF0aC5qb2luKHJvb3QsICd1bnBhY2thZ2UnLCAnZGlzdCcsICdidWlsZCcsICdtcC1hbGlwYXknKSxcbiAgICAgIHBhdGguam9pbihyb290LCAnZGlzdCcsICdidWlsZCcsICdtcC1hbGlwYXknKVxuICAgIF07XG4gICAgZm9yIChjb25zdCBkaXIgb2YgY2FuZGlkYXRlRGlycykge1xuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZGlyKSkge1xuICAgICAgICBwYXRjaEFsaXBheURpcihkaXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRXYXRjaGVyKHJvb3Q6IHN0cmluZykge1xuICAgIGlmICh3YXRjaGVySW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2F0Y2hlckluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBjb25zdCB0YXJnZXRBcHBKc29uID0gcGF0aC5qb2luKHJvb3QsICd1bnBhY2thZ2UnLCAnZGlzdCcsICdkZXYnLCAnbXAtYWxpcGF5JywgJ2FwcC5qc29uJyk7XG4gICAgY29uc3QgdGFyZ2V0RGlyID0gcGF0aC5kaXJuYW1lKHRhcmdldEFwcEpzb24pO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHRhcmdldERpcikpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZzLndhdGNoKHRhcmdldERpciwgKF9ldmVudFR5cGUsIGZpbGVuYW1lKSA9PiB7XG4gICAgICAgICAgaWYgKGZpbGVuYW1lID09PSAnYXBwLmpzb24nKSB7XG4gICAgICAgICAgICBwYXRjaEFsbEFsaXBheU91dHB1dHMocm9vdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIHt9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAndW5pYmVzdHg6YWxpcGF5LWN1c3RvbS10YWJiYXInLFxuICAgIGNvbmZpZ1Jlc29sdmVkKGNvbmZpZykge1xuICAgICAgcHJvamVjdFJvb3QgPSBjb25maWcucm9vdDtcbiAgICAgIHBhdGNoQWxsQWxpcGF5T3V0cHV0cyhwcm9qZWN0Um9vdCk7XG4gICAgICBpbml0V2F0Y2hlcihwcm9qZWN0Um9vdCk7XG4gICAgfSxcbiAgICBidWlsZFN0YXJ0KCkge1xuICAgICAgaWYgKHByb2plY3RSb290KSB7XG4gICAgICAgIHBhdGNoQWxsQWxpcGF5T3V0cHV0cyhwcm9qZWN0Um9vdCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB3cml0ZUJ1bmRsZSgpIHtcbiAgICAgIGlmIChwcm9qZWN0Um9vdCkge1xuICAgICAgICBwYXRjaEFsbEFsaXBheU91dHB1dHMocHJvamVjdFJvb3QpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2xvc2VCdW5kbGUoKSB7XG4gICAgICBpZiAocHJvamVjdFJvb3QpIHtcbiAgICAgICAgcGF0Y2hBbGxBbGlwYXlPdXRwdXRzKHByb2plY3RSb290KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy92aXRlLXBsdWdpbi1odG1sLXRvLXVuaS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy92aXRlLXBsdWdpbi1odG1sLXRvLXVuaS50c1wiO2ltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSAndml0ZSc7XG5cbmV4cG9ydCB0eXBlIFRhZ1RyYW5zZm9ybUNvbmZpZyA9IHtcbiAgLyoqIFx1OEY2Q1x1NjM2Mlx1NzY4NFx1NzZFRVx1NjgwNyB1bmktYXBwIFx1NTM5Rlx1NzUxRlx1N0VDNFx1NEVGNlx1NTQwRFx1RkYwQ1x1NTk4MiAndmlldycgfCAndGV4dCcgfCAnaW1hZ2UnICovXG4gIHRhZzogc3RyaW5nO1xuICAvKiogXHU5RUQ4XHU4QkE0XHU1MzlGXHU3NTFGXHU2ODM3XHU1RjBGXHVGRjA4XHU5NTdGXHU1QzVFXHU2MDI3XHU1Qjg5XHU1MTY4XHU4OUM0XHU4MzAzXHVGRjBDXHU4REU4XHU3QUVGXHU1MzlGXHU3NTFGXHU2RTMyXHU2N0QzIDEwMCUgXHU3NTFGXHU2NTQ4XHVGRjA5ICovXG4gIGRlZmF1bHRTdHlsZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIEh0bWxUb1VuaU9wdGlvbnMgPSB7XG4gIC8qKiBcdTY2MkZcdTU0MjZcdTU0MkZcdTc1MjhcdTYzRDJcdTRFRjZcdUZGMENcdTlFRDhcdThCQTQgdHJ1ZSAqL1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgLyoqIFx1ODFFQVx1NUI5QVx1NEU0OVx1NjIxNlx1ODk4Nlx1NzZENlx1NzY4NFx1NjgwN1x1N0I3RVx1NjYyMFx1NUMwNFx1ODg2OFx1RkYwQ1x1NjUyRlx1NjMwMVx1N0I4MFx1NTE5OVx1NUI1N1x1N0IyNlx1NEUzMlx1NTk4MiB7IGRpdjogJ3ZpZXcnIH0gKi9cbiAgdGFnTWFwPzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgVGFnVHJhbnNmb3JtQ29uZmlnPjtcbiAgLyoqIFx1OTcwMFx1ODk4MVx1NTkwNFx1NzQwNlx1NzY4NFx1NjU4N1x1NEVGNlx1NTQwRVx1N0YwMFx1NTIxN1x1ODg2OFx1RkYwQ1x1OUVEOFx1OEJBNCBbJy51dnVlJywgJy52dWUnXSAqL1xuICBpbmNsdWRlRXh0Pzogc3RyaW5nW107XG4gIC8qKiBcdTY2MkZcdTU0MjZcdTgxRUFcdTUyQThcdTRFM0EgYi9zdHJvbmcvaS9lbSBcdTdCNDlcdThCRURcdTRFNDlcdTY4MDdcdTdCN0VcdTYzRDBcdTRGOUJcdTlFRDhcdThCQTRcdTYzOTJcdTcyNDhcdTY1NDhcdTY3OUNcdUZGMENcdTlFRDhcdThCQTQgdHJ1ZSAqL1xuICBpbmplY3REZWZhdWx0U3R5bGU/OiBib29sZWFuO1xufTtcblxuY29uc3QgREVGQVVMVF9UQUdfQ09ORklHUzogUmVjb3JkPHN0cmluZywgVGFnVHJhbnNmb3JtQ29uZmlnPiA9IHtcbiAgZGl2OiB7IHRhZzogJ3ZpZXcnIH0sXG4gIHA6IHsgdGFnOiAndmlldycgfSxcbiAgc2VjdGlvbjogeyB0YWc6ICd2aWV3JyB9LFxuICBhcnRpY2xlOiB7IHRhZzogJ3ZpZXcnIH0sXG4gIGhlYWRlcjogeyB0YWc6ICd2aWV3JyB9LFxuICBmb290ZXI6IHsgdGFnOiAndmlldycgfSxcbiAgYXNpZGU6IHsgdGFnOiAndmlldycgfSxcbiAgbWFpbjogeyB0YWc6ICd2aWV3JyB9LFxuICBuYXY6IHsgdGFnOiAndmlldycgfSxcbiAgdWw6IHsgdGFnOiAndmlldycgfSxcbiAgb2w6IHsgdGFnOiAndmlldycgfSxcbiAgbGk6IHsgdGFnOiAndmlldycgfSxcbiAgYjogeyB0YWc6ICd0ZXh0JywgZGVmYXVsdFN0eWxlOiAnZm9udC13ZWlnaHQ6IGJvbGQ7JyB9LFxuICBzdHJvbmc6IHsgdGFnOiAndGV4dCcsIGRlZmF1bHRTdHlsZTogJ2ZvbnQtd2VpZ2h0OiBib2xkOycgfSxcbiAgc3BhbjogeyB0YWc6ICd0ZXh0JyB9LFxuICBpOiB7IHRhZzogJ3RleHQnLCBkZWZhdWx0U3R5bGU6ICdmb250LXN0eWxlOiBpdGFsaWM7JyB9LFxuICBlbTogeyB0YWc6ICd0ZXh0JywgZGVmYXVsdFN0eWxlOiAnZm9udC1zdHlsZTogaXRhbGljOycgfSxcbiAgczogeyB0YWc6ICd0ZXh0JywgZGVmYXVsdFN0eWxlOiAndGV4dC1kZWNvcmF0aW9uLWxpbmU6IGxpbmUtdGhyb3VnaDsnIH0sXG4gIGRlbDogeyB0YWc6ICd0ZXh0JywgZGVmYXVsdFN0eWxlOiAndGV4dC1kZWNvcmF0aW9uLWxpbmU6IGxpbmUtdGhyb3VnaDsnIH0sXG4gIHU6IHsgdGFnOiAndGV4dCcsIGRlZmF1bHRTdHlsZTogJ3RleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7JyB9LFxuICBpbWc6IHsgdGFnOiAnaW1hZ2UnIH1cbn07XG5cbi8qKlxuICogXHU1MjI0XHU2NUFEXHU1RjAwXHU1M0QxXHU4MDA1XHU2NjJGXHU1NDI2XHU1NzI4IGNsYXNzXHUzMDAxc3R5bGUgXHU2MjE2XHU1QzVFXHU2MDI3XHU0RTJEXHU2NjNFXHU1RjBGXHU4ODY4XHU4RkJFXHU0RTg2XHU1NDBDXHU3RUY0XHU1RUE2XHU3Njg0XHU2MzkyXHU3MjQ4XHU2MTBGXHU1NkZFXHVGRjA4XHU1OTgyIGZvbnQtWzQwMF0gLyBmb250LW5vcm1hbCAvIG5vdC1pdGFsaWMgLyBpY29uZm9udCBcdTdCNDlcdUZGMDlcbiAqIFx1ODJFNVx1NUYwMFx1NTNEMVx1ODAwNVx1NURGMlx1NjYzRVx1NUYwRlx1NThGMFx1NjYwRVx1RkYwQ1x1NjNEMlx1NEVGNlx1NjY3QVx1ODBGRFx1OTAwMFx1OEJBOVx1RkYwQ1x1N0VERFx1NEUwRFx1NkNFOFx1NTE2NVx1OUVEOFx1OEJBNFx1NjgzN1x1NUYwRlx1RkYwQ1x1NjI4QVx1NjgzN1x1NUYwRlx1NjNBN1x1NTIzNlx1Njc0MyAxMDAlIFx1NzU1OVx1N0VEOVx1NUYwMFx1NTNEMVx1ODAwNVxuICovXG5mdW5jdGlvbiBoYXNFeHBsaWNpdFN0eWxlSW50ZW50KHJhd1RhZ05hbWU6IHN0cmluZywgcmF3QXR0cnM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB0YWcgPSByYXdUYWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgLy8gMS4gXHU2OEMwXHU2N0U1XHU1MTg1XHU4MDU0IHN0eWxlIFx1NjIxNlx1NTJBOFx1NjAwMVx1N0VEMVx1NUI5QVx1NEUyRFx1NjYyRlx1NTQyNlx1NURGMlx1NTMwNVx1NTQyQlx1NTQwQ1x1NTQwRCBDU1MgXHU1QzVFXHU2MDI3XG4gIGlmICh0YWcgPT09ICdiJyB8fCB0YWcgPT09ICdzdHJvbmcnKSB7XG4gICAgaWYgKC9cXGJmb250LXdlaWdodFxcYi8udGVzdChyYXdBdHRycykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICBlbHNlIGlmICh0YWcgPT09ICdpJyB8fCB0YWcgPT09ICdlbScpIHtcbiAgICBpZiAoL1xcYmZvbnQtc3R5bGVcXGIvLnRlc3QocmF3QXR0cnMpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAodGFnID09PSAncycgfHwgdGFnID09PSAnZGVsJyB8fCB0YWcgPT09ICd1Jykge1xuICAgIGlmICgvXFxidGV4dC1kZWNvcmF0aW9uXFxiLy50ZXN0KHJhd0F0dHJzKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgLy8gMi4gXHU2OEMwXHU2N0U1XHU5NzU5XHU2MDAxIGNsYXNzXG4gIGNvbnN0IGNsYXNzQXR0clJlZ2V4ID0gLyg/PCFbOkB2LV0pXFxiY2xhc3M9KFtcIiddKShbXFxzXFxTXSo/KVxcMS87XG4gIGNvbnN0IG1hdGNoID0gY2xhc3NBdHRyUmVnZXguZXhlYyhyYXdBdHRycyk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBjbGFzc0xpc3QgPSBtYXRjaFsyXS50cmltKCkuc3BsaXQoL1xccysvKS5maWx0ZXIoQm9vbGVhbik7XG5cbiAgaWYgKHRhZyA9PT0gJ2InIHx8IHRhZyA9PT0gJ3N0cm9uZycpIHtcbiAgICAvLyBcdTUzMDVcdTU0MkJcdTVCNTdcdTkxQ0RcdTg5ODZcdTc2RDZcdTdDN0JcdTU0MERcdUZGMDhcdTU5ODIgZm9udC1ub3JtYWwsIGZvbnQtbGlnaHQsIGZvbnQtWzQwMF0gXHU3QjQ5XHVGRjA5XG4gICAgcmV0dXJuIGNsYXNzTGlzdC5zb21lKGNscyA9PlxuICAgICAgL15mb250LSg/Om5vcm1hbHx0aGlufGV4dHJhbGlnaHR8bGlnaHR8bWVkaXVtfHNlbWlib2xkfGJvbGR8ZXh0cmFib2xkfGJsYWNrKSQvLnRlc3QoY2xzKVxuICAgICAgfHwgL15mb250LVxcWy4rXFxdJC8udGVzdChjbHMpXG4gICAgKTtcbiAgfVxuXG4gIGlmICh0YWcgPT09ICdpJyB8fCB0YWcgPT09ICdlbScpIHtcbiAgICAvLyBcdTUzMDVcdTU0MkIgbm90LWl0YWxpYyBcdTYyMTZcdTRGNUNcdTRFM0FcdTU2RkVcdTY4MDdcdTRGN0ZcdTc1MjhcdTc2ODRcdTVFMzhcdTg5QzFcdTdDN0JcdTU0MERcdUZGMDhcdTU5ODIgaWNvbmZvbnQsIGljb24tLCBpLSBcdTdCNDlcdUZGMDlcbiAgICByZXR1cm4gY2xhc3NMaXN0LnNvbWUoY2xzID0+XG4gICAgICBjbHMgPT09ICdub3QtaXRhbGljJ1xuICAgICAgfHwgY2xzID09PSAnaXRhbGljJ1xuICAgICAgfHwgY2xzID09PSAnaWNvbmZvbnQnXG4gICAgICB8fCAvXmljb25bLV9dLy50ZXN0KGNscylcbiAgICAgIHx8IC9eaS1bYS16MC05XS8udGVzdChjbHMpXG4gICAgKTtcbiAgfVxuXG4gIGlmICh0YWcgPT09ICdzJyB8fCB0YWcgPT09ICdkZWwnIHx8IHRhZyA9PT0gJ3UnKSB7XG4gICAgcmV0dXJuIGNsYXNzTGlzdC5pbmNsdWRlcygnbm8tdW5kZXJsaW5lJykgfHwgY2xhc3NMaXN0LmluY2x1ZGVzKCdsaW5lLXRocm91Z2gnKSB8fCBjbGFzc0xpc3QuaW5jbHVkZXMoJ3VuZGVybGluZScpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFx1N0NCRVx1Nzg2RVx1NjNEMFx1NTNENlx1NjcwMFx1NTkxNlx1NUM0MiA8dGVtcGxhdGU+IC4uLiA8L3RlbXBsYXRlPiBcdTgzMDNcdTU2RjRcdTRFMEVcdTUxODVcdTVCQjlcbiAqIFx1NTE4NVx1OTBFOFx1OTAxQVx1OEZDN1x1NkRGMVx1NUVBNlx1OEJBMVx1NjU3MFx1NkI2M1x1Nzg2RVx1NTkwNFx1NzQwNlx1NUQ0Q1x1NTk1N1x1NzY4NCA8dGVtcGxhdGUgdi1pZj4gLyA8dGVtcGxhdGUgI3Nsb3Q+IFx1N0I0OVx1NjgwN1x1N0I3RVxuICovXG5mdW5jdGlvbiBleHRyYWN0VGVtcGxhdGUoY29kZTogc3RyaW5nKTogeyBzdGFydDogbnVtYmVyOyBlbmQ6IG51bWJlcjsgY29udGVudDogc3RyaW5nIH0gfCBudWxsIHtcbiAgY29uc3Qgc3RhcnRNYXRjaCA9IC88dGVtcGxhdGVcXGJbXj5dKj4vaS5leGVjKGNvZGUpO1xuICBpZiAoIXN0YXJ0TWF0Y2gpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBzdGFydEluZGV4ID0gc3RhcnRNYXRjaC5pbmRleCArIHN0YXJ0TWF0Y2hbMF0ubGVuZ3RoO1xuICBsZXQgZGVwdGggPSAxO1xuICBjb25zdCB0YWdSZWdleCA9IC88XFwvP3RlbXBsYXRlXFxiW14+XSo+L2dpO1xuICB0YWdSZWdleC5sYXN0SW5kZXggPSBzdGFydEluZGV4O1xuXG4gIGxldCBtYXRjaCA9IHRhZ1JlZ2V4LmV4ZWMoY29kZSk7XG4gIHdoaWxlIChtYXRjaCAhPT0gbnVsbCkge1xuICAgIGlmIChtYXRjaFswXS5zdGFydHNXaXRoKCc8LycpKSB7XG4gICAgICBkZXB0aC0tO1xuICAgICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RhcnQ6IHN0YXJ0SW5kZXgsXG4gICAgICAgICAgZW5kOiBtYXRjaC5pbmRleCxcbiAgICAgICAgICBjb250ZW50OiBjb2RlLnNsaWNlKHN0YXJ0SW5kZXgsIG1hdGNoLmluZGV4KVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICghbWF0Y2hbMF0uZW5kc1dpdGgoJy8+JykpIHtcbiAgICAgIGRlcHRoKys7XG4gICAgfVxuICAgIG1hdGNoID0gdGFnUmVnZXguZXhlYyhjb2RlKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFx1NUMwNiBIVE1MIFx1NjgwN1x1N0I3RVx1RkYwOGRpdiAvIGIgLyBzcGFuIC8gcCAvIGltZyBcdTdCNDlcdUZGMDlcdTVCODlcdTUxNjhcdTdGMTZcdThCRDFcdTRFM0EgdW5pLWFwcCBYIFx1NTM5Rlx1NzUxRlx1N0VDNFx1NEVGNlx1RkYwOHZpZXcgLyB0ZXh0IC8gaW1hZ2UgXHU3QjQ5XHVGRjA5XG4gKiBcdTUxN0NcdTUxNzdcdTIwMUNcdTVGMDBcdTdCQjFcdTUzNzNcdTc1MjhcdTlFRDhcdThCQTRcdTYzOTJcdTcyNDhcdTY1NDhcdTY3OUNcdTIwMURcdTRFMEVcdTIwMUNcdTY2M0VcdTVGMEZcdTg5ODZcdTc2RDZcdTY1RjZcdTk2RjZcdTVFNzJcdTYyNzBcdTY2N0FcdTgwRkRcdTkwMDBcdThCQTlcdTIwMURcdTc2ODRcdTVERTVcdTRFMUFcdTdFQTdcdTRGNTNcdTlBOENcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaHRtbFRvVW5pUGx1Z2luKG9wdGlvbnM6IEh0bWxUb1VuaU9wdGlvbnMgPSB7fSk6IFBsdWdpbiB7XG4gIGNvbnN0IGVuYWJsZWQgPSBvcHRpb25zLmVuYWJsZWQgPz8gdHJ1ZTtcbiAgY29uc3QgaW5qZWN0RGVmYXVsdFN0eWxlID0gb3B0aW9ucy5pbmplY3REZWZhdWx0U3R5bGUgPz8gdHJ1ZTtcbiAgY29uc3QgZXh0ZW5zaW9ucyA9IG9wdGlvbnMuaW5jbHVkZUV4dCA/PyBbJy51dnVlJywgJy52dWUnXTtcblxuICAvLyBcdTY4MDdcdTUxQzZcdTUzMTZcdTkxNERcdTdGNkVcdTg4NjhcbiAgY29uc3QgcmVzb2x2ZWRDb25maWdzOiBSZWNvcmQ8c3RyaW5nLCBUYWdUcmFuc2Zvcm1Db25maWc+ID0ge307XG4gIE9iamVjdC5rZXlzKERFRkFVTFRfVEFHX0NPTkZJR1MpLmZvckVhY2goKGspID0+IHtcbiAgICByZXNvbHZlZENvbmZpZ3Nba10gPSB7IC4uLkRFRkFVTFRfVEFHX0NPTkZJR1Nba10gfTtcbiAgfSk7XG5cbiAgaWYgKG9wdGlvbnMudGFnTWFwICE9IG51bGwpIHtcbiAgICBPYmplY3Qua2V5cyhvcHRpb25zLnRhZ01hcCkuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgY29uc3QgdmFsID0gb3B0aW9ucy50YWdNYXAhW2tdO1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJlc29sdmVkQ29uZmlnc1trLnRvTG93ZXJDYXNlKCldID0geyB0YWc6IHZhbCB9O1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodmFsICE9IG51bGwpIHtcbiAgICAgICAgcmVzb2x2ZWRDb25maWdzW2sudG9Mb3dlckNhc2UoKV0gPSB7IC4uLnZhbCB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgdGFncyA9IE9iamVjdC5rZXlzKHJlc29sdmVkQ29uZmlncyk7XG5cbiAgLy8gXHU1MzM5XHU5MTREXHU4RDc3XHU1OUNCXHU2ODA3XHU3QjdFXHU2MjE2XHU4MUVBXHU5NUVEXHU1NDA4XHU2ODA3XHU3QjdFXHVGRjBDXHU0RjhCXHU1OTgyIDxiPlx1MzAwMTxiIGNsYXNzPVwiZm9vXCI+XHUzMDAxPGltZyBzcmM9XCIuLi5cIiAvPlxuICBjb25zdCBvcGVuVGFnUmVnZXggPSBuZXcgUmVnRXhwKGA8KCR7dGFncy5qb2luKCd8Jyl9KVxcXFxiKCg/OltePlwiJ118XCJbXlwiXSpcInwnW14nXSonKSopPmAsICdnaScpO1xuICAvLyBcdTUzMzlcdTkxNERcdTk1RURcdTU0MDhcdTY4MDdcdTdCN0VcdUZGMENcdTRGOEJcdTU5ODIgPC9iPlx1MzAwMTwvZGl2PlxuICBjb25zdCBjbG9zZVRhZ1JlZ2V4ID0gbmV3IFJlZ0V4cChgPC8oJHt0YWdzLmpvaW4oJ3wnKX0pPmAsICdnaScpO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3VuaWJlc3R4Omh0bWwtdG8tdW5pJyxcbiAgICBlbmZvcmNlOiAncHJlJyxcblxuICAgIHRyYW5zZm9ybShjb2RlOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcbiAgICAgIGlmICghZW5hYmxlZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gXHU0RUM1XHU2MkU2XHU2MjJBXHU2RTkwXHU3ODAxXHU3NkVFXHU1RjU1XHU0RTJEXHU3Njg0IC51dnVlIFx1NTQ4QyAudnVlIFx1NjU4N1x1NEVGNlx1RkYwQ1x1OERGM1x1OEZDNyBub2RlX21vZHVsZXNcbiAgICAgIGlmICghZXh0ZW5zaW9ucy5zb21lKGV4dCA9PiBpZC5lbmRzV2l0aChleHQpKSB8fCBpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIFx1NUZFQlx1OTAxRlx1NTIyNFx1NjVBRFx1NjYyRlx1NTQyNlx1NTMwNVx1NTQyQlx1OTcwMFx1NjZGRlx1NjM2Mlx1NzY4NFx1NzZFRVx1NjgwN1x1NjgwN1x1N0I3RVx1RkYwQ1x1NEUwRFx1NTMwNVx1NTQyQlx1NTIxOVx1NzZGNFx1NjNBNVx1NjUzRVx1ODg0Q1x1RkYwQ1x1Njc4MVx1ODFGNFx1NEYxOFx1NTMxNlx1NzBFRFx1OTFDRFx1OEY3RFx1NjAyN1x1ODBGRFxuICAgICAgY29uc3QgaGFzVGFyZ2V0VGFnID0gdGFncy5zb21lKHRhZyA9PiBjb2RlLmluY2x1ZGVzKGA8JHt0YWd9YCkgfHwgY29kZS5pbmNsdWRlcyhgPC8ke3RhZ30+YCkpO1xuICAgICAgaWYgKCFoYXNUYXJnZXRUYWcpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRwbCA9IGV4dHJhY3RUZW1wbGF0ZShjb2RlKTtcbiAgICAgIGlmICghdHBsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBsZXQgY29udmVydGVkID0gdHBsLmNvbnRlbnQucmVwbGFjZShvcGVuVGFnUmVnZXgsIChfbWF0Y2gsIHJhd1RhZ05hbWU6IHN0cmluZywgcmF3QXR0cnM6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBjb25maWcgPSByZXNvbHZlZENvbmZpZ3NbcmF3VGFnTmFtZS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgaWYgKCFjb25maWcpIHtcbiAgICAgICAgICByZXR1cm4gX21hdGNoO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0VGFnID0gY29uZmlnLnRhZztcbiAgICAgICAgbGV0IGZpbmFsQXR0cnMgPSByYXdBdHRycztcblxuICAgICAgICAvLyBcdTRFQzVcdTU3MjhcdTVGMDBcdTU0MkZcdTY4MzdcdTVGMEZcdTZDRThcdTUxNjVcdTMwMDFcdTkxNERcdTdGNkVcdTRFODYgZGVmYXVsdFN0eWxlXHVGRjBDXHU0RTE0XHU1RjAwXHU1M0QxXHU4MDA1XHU2NzJBXHU2NjNFXHU1RjBGXHU4ODY4XHU4RkJFXHU4OTg2XHU3NkQ2XHU2MTBGXHU1NkZFXHU2NUY2XHU2Q0U4XHU1MTY1XHU2ODA3XHU1MUM2XHU2ODM3XHU1RjBGXG4gICAgICAgIGlmIChpbmplY3REZWZhdWx0U3R5bGUgJiYgY29uZmlnLmRlZmF1bHRTdHlsZSAmJiAhaGFzRXhwbGljaXRTdHlsZUludGVudChyYXdUYWdOYW1lLCByYXdBdHRycykpIHtcbiAgICAgICAgICBjb25zdCBkZWZhdWx0U3R5bGUgPSBjb25maWcuZGVmYXVsdFN0eWxlO1xuICAgICAgICAgIGNvbnN0IHN0eWxlQXR0clJlZ2V4ID0gLyg/PCFbOkB2LV0pXFxic3R5bGU9KFtcIiddKShbXFxzXFxTXSo/KVxcMS87XG4gICAgICAgICAgY29uc3Qgc3R5bGVNYXRjaCA9IHN0eWxlQXR0clJlZ2V4LmV4ZWMoZmluYWxBdHRycyk7XG5cbiAgICAgICAgICBpZiAoc3R5bGVNYXRjaCkge1xuICAgICAgICAgICAgY29uc3QgcXVvdGUgPSBzdHlsZU1hdGNoWzFdO1xuICAgICAgICAgICAgbGV0IGV4aXN0aW5nU3R5bGUgPSBzdHlsZU1hdGNoWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ1N0eWxlICYmICFleGlzdGluZ1N0eWxlLmVuZHNXaXRoKCc7JykpIHtcbiAgICAgICAgICAgICAgZXhpc3RpbmdTdHlsZSArPSAnOyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtZXJnZWRTdHlsZSA9IGV4aXN0aW5nU3R5bGUgPyBgJHtkZWZhdWx0U3R5bGV9ICR7ZXhpc3RpbmdTdHlsZX1gIDogZGVmYXVsdFN0eWxlO1xuICAgICAgICAgICAgZmluYWxBdHRycyA9IGZpbmFsQXR0cnMucmVwbGFjZShzdHlsZUF0dHJSZWdleCwgYHN0eWxlPSR7cXVvdGV9JHttZXJnZWRTdHlsZX0ke3F1b3RlfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpbmFsQXR0cnMgPSBgIHN0eWxlPVwiJHtkZWZhdWx0U3R5bGV9XCIke2ZpbmFsQXR0cnN9YDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYDwke3RhcmdldFRhZ30ke2ZpbmFsQXR0cnN9PmA7XG4gICAgICB9KTtcblxuICAgICAgY29udmVydGVkID0gY29udmVydGVkLnJlcGxhY2UoY2xvc2VUYWdSZWdleCwgKF9tLCByYXdUYWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gcmVzb2x2ZWRDb25maWdzW3Jhd1RhZ05hbWUudG9Mb3dlckNhc2UoKV07XG4gICAgICAgIGNvbnN0IHRhcmdldFRhZyA9IGNvbmZpZyA/IGNvbmZpZy50YWcgOiByYXdUYWdOYW1lO1xuICAgICAgICByZXR1cm4gYDwvJHt0YXJnZXRUYWd9PmA7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGNvbnZlcnRlZCA9PT0gdHBsLmNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld0NvZGUgPSBjb2RlLnNsaWNlKDAsIHRwbC5zdGFydCkgKyBjb252ZXJ0ZWQgKyBjb2RlLnNsaWNlKHRwbC5lbmQpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2RlOiBuZXdDb2RlLFxuICAgICAgICBtYXA6IG51bGxcbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0USxPQUFPQSxVQUFRO0FBQzNSLFNBQVMsV0FBQUMsVUFBUyxXQUFBQyxnQkFBZTtBQUNqQyxPQUFPQyxjQUFhO0FBQ3BCLFNBQVMsaUJBQUFDLHNCQUFxQjtBQUU5QixTQUFTLGNBQWMsV0FBQUMsZ0JBQWU7QUFDdEMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywyQkFBMkI7QUFDcEMsT0FBTyxlQUFlO0FBQ3RCLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVMsZUFBZTtBQUN4QixTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLGtCQUFrQjs7O0FDWnlRLE9BQU9DLFNBQVE7QUFDblQsT0FBTyxVQUFVO0FBQ2pCLE9BQU9DLGNBQWE7OztBQ0Z3UixPQUFPLFFBQVE7QUFDM1QsT0FBT0MsY0FBYTtBQUNwQixTQUFTLFNBQVMsZUFBZTtBQUNqQyxPQUFPLFdBQVc7QUFXWCxTQUFTLGdCQUFnQixjQUFzQixnQkFBaUM7QUFDckYsTUFBSSxjQUFjLGtCQUFrQixJQUFJLEtBQUssRUFBRSxZQUFZO0FBQzNELE1BQUksQ0FBQyxZQUFZO0FBQ2Ysa0JBQWNDLFNBQVEsSUFBSSxnQkFBZ0IsTUFBTSxLQUFLLEVBQUUsWUFBWTtBQUFBLEVBQ3JFO0FBQ0EsTUFBSSxlQUFlLFNBQVMsZUFBZSxZQUFZO0FBQ3JELGlCQUFh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QUc7QUFBQSxRQUNuQixNQUFNLEVBQUUsU0FBUyxHQUFHO0FBQUEsUUFDcEIsVUFBVTtBQUFBLE1BQ1osQ0FBQztBQUFBLElBQ0gsSUFDQSxDQUFDO0FBQUE7QUFBQSxJQUVMLEdBQUksU0FDQTtBQUFBLE1BQ0UsY0FBYztBQUFBLFFBQ1osVUFBVUQsU0FBUUosY0FBYSxNQUFNO0FBQUEsUUFDckMsUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osUUFBUTtBQUFBLE1BQ1YsQ0FBQztBQUFBLElBQ0gsSUFDQSxDQUFDO0FBQUE7QUFBQSxJQUVMO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixpQkFBaUI7QUFDZixZQUFJLENBQUMsU0FBUztBQUNaLGNBQUksUUFBUTtBQUNWLG9CQUFRLElBQUksa0xBQW1GO0FBQUEsVUFDakcsT0FDSztBQUNILG9CQUFRLElBQUksVUFDUiw0SEFDQSxvR0FBOEI7QUFBQSxVQUNwQztBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFFQSxHQUFJLGFBQ0E7QUFBQSxNQUNFLGFBQWE7QUFBQSxRQUNYLE9BQU87QUFBQSxVQUNMSSxTQUFRSixjQUFhLFVBQVU7QUFBQSxVQUMvQkksU0FBUUosY0FBYSxNQUFNO0FBQUEsUUFDN0I7QUFBQSxRQUNBLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxVQUNOLGNBQWM7QUFBQSxVQUNkLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQSxZQUFZO0FBQUEsTUFDZCxDQUFDO0FBQUEsSUFDSCxJQUNBLENBQUM7QUFBQSxFQUNQO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiZnMiLCAiZGlybmFtZSIsICJyZXNvbHZlIiwgInByb2Nlc3MiLCAiZmlsZVVSTFRvUGF0aCIsICJsb2FkRW52IiwgImZzIiwgInByb2Nlc3MiLCAicHJvY2VzcyIsICJwcm9jZXNzIiwgInByb2plY3RSb290IiwgInByb2Nlc3MiLCAiZnMiLCAib3B0aW9ucyIsICJpc0J1aWxkIiwgImZzIiwgInBhdGgiLCAicHJvY2VzcyIsICJKU09ONSIsICJnZXRUYWJiYXJNb2RlIiwgInByb2plY3RSb290IiwgInByb2Nlc3MiLCAicGF0aCIsICJmcyIsICJrZWJhYkNhc2UiLCAiSlNPTjUiLCAiZnMiLCAicGF0aCIsICJwcm9jZXNzIiwgImZzIiwgInBhdGgiLCAicHJvamVjdFJvb3QiLCAicGF0aCIsICJmcyIsICJnZXRUYWJiYXJNb2RlIiwgInByb2plY3RSb290IiwgInByb2Nlc3MiLCAicGF0aCIsICJmcyIsICJ0b1Bhc2NhbENhc2UiLCAiY29udGVudCIsICJtb2RlIiwgImZzIiwgInBhdGgiLCAicHJvY2VzcyIsICJKU09ONSIsICJjalBhcnNlIiwgInByb2plY3RSb290IiwgImZzIiwgInBhdGgiLCAicHJvY2VzcyIsICJpc1dlYiIsICJtb2RlIiwgIkpTT041IiwgInBhcnNlRGVmaW5lUGFnZSIsICJnZXRUYWJiYXJNb2RlIiwgImNqUGFyc2UiLCAic3RhZ2UiLCAiaXNQcm9kdWN0aW9uIiwgImZzIiwgInBhdGgiLCAicHJvY2VzcyIsICJKU09ONSIsICJwcm9qZWN0Um9vdCIsICJwcm9jZXNzIiwgInBhdGgiLCAiZnMiLCAic2NhbkRlZmluZVBhZ2VDYWxsIiwgInBhcnNlUGFnZU1ldGEiLCAiSlNPTjUiLCAiZnMiLCAicGF0aCIsICJwcm9jZXNzIiwgImdldFRhYmJhck1vZGUiLCAicHJvamVjdFJvb3QiLCAicHJvY2VzcyIsICJwYXRoIiwgImZzIiwgIm5vcm1hbGl6ZVBhZ2VQYXRoIiwgInRhYmJhck1vZGUiLCAic3RhZ2UiLCAicGF0aCIsICJwcm9qZWN0Um9vdCIsICJwYXRoIiwgInN0YWdlIiwgImZzIiwgInBhdGgiLCAicHJvamVjdFJvb3QiLCAibW9kZSIsICJwYXRoIiwgImZzIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwiLCAicHJvamVjdFJvb3QiLCAiZGlybmFtZSIsICJmaWxlVVJMVG9QYXRoIiwgImZzIiwgInJlc29sdmUiLCAicHJvY2VzcyIsICJsb2FkRW52Il0KfQo=
