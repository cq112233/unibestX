// ../../../../../../Users/chenqi/Desktop/unibestX/vite.config.ts
import fs6 from "node:fs";
import { dirname as dirname2, resolve as resolve2 } from "node:path";
import process6 from "node:process";
import { fileURLToPath as fileURLToPath2 } from "node:url";
import { defineConfig, loadEnv } from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/vite@5.2.8_@types+node@26.6.5_sass@1.105.1_terser@5.51.2/node_modules/vite/dist/node/index.js";
import { uniEasycomPlugin } from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/@dcloudio+uni-cli-shared@3.0.0-alpha-5030120260930001_@vueuse+core@12.8.2_typescript@5.8.3__postcss@8.5.29_rollup@4.64.5/node_modules/@dcloudio/uni-cli-shared/dist/vite/plugins/easycom.js";
import { UNI_EASYCOM_EXCLUDE } from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/@dcloudio+uni-cli-shared@3.0.0-alpha-5030120260930001_@vueuse+core@12.8.2_typescript@5.8.3__postcss@8.5.29_rollup@4.64.5/node_modules/@dcloudio/uni-cli-shared/dist/index.js";
import uniModule from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/@dcloudio+vite-plugin-uni@3.0.0-alpha-5030120260930001_@vueuse+core@12.8.2_typescript@5_74bcfe608a26ec886eb450853ed9ae74/node_modules/@dcloudio/vite-plugin-uni/dist/index.js";
import UniManifest from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/@uni-helper+vite-plugin-uni-manifest@0.6.0_typescript@5.8.3_vite@5.2.8_@types+node@26.6.5_sass@1.105.1_terser@5.51.2_/node_modules/@uni-helper/vite-plugin-uni-manifest/dist/index.mjs";
import { uniAppX } from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/weapp-tailwindcss@5.5.12_@oxc-project+types@0.153.0_jiti@2.7.0_tailwindcss@4.3.3_vite@5_c3b9088aae0ae5b85fcda468aa0985b0/node_modules/weapp-tailwindcss/dist/presets.js";
import { WeappTailwindcss } from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/weapp-tailwindcss@5.5.12_@oxc-project+types@0.153.0_jiti@2.7.0_tailwindcss@4.3.3_vite@5_c3b9088aae0ae5b85fcda468aa0985b0/node_modules/weapp-tailwindcss/dist/vite.js";
import { visualizer } from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/rollup-plugin-visualizer@5.14.0_rollup@4.64.5/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";

// ../../../../../../Users/chenqi/Desktop/unibestX/plugins/root-plugin.ts
import fs from "node:fs";
import path from "node:path";
import process2 from "node:process";
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
  "style"
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
    rootFileName = "App.ku",
    excludePages
  } = options;
  const rawRootFileName = rootFileName.replace(/\.(uvue|vue)$/, "");
  const componentName = toPascalCase(rawRootFileName);
  const excludeList = excludePages ? Array.isArray(excludePages) ? excludePages : [excludePages] : [];
  let projectRoot3 = process2.cwd();
  let pagesJsonPath = path.resolve(projectRoot3, "pages.json");
  let cachedPagesParams = null;
  let lastPagesJsonMTime = 0;
  function loadPagesParams() {
    const paramsByPath = /* @__PURE__ */ new Map();
    if (!fs.existsSync(pagesJsonPath)) {
      return paramsByPath;
    }
    try {
      const rawContent = fs.readFileSync(pagesJsonPath, "utf-8");
      const cleanJson = rawContent.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "$1");
      const data = JSON.parse(cleanJson);
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
    if (!fs.existsSync(pagesJsonPath)) {
      return /* @__PURE__ */ new Map();
    }
    const stat = fs.statSync(pagesJsonPath);
    if (!cachedPagesParams || stat.mtimeMs !== lastPagesJsonMTime) {
      cachedPagesParams = loadPagesParams();
      lastPagesJsonMTime = stat.mtimeMs;
    }
    return cachedPagesParams;
  }
  return {
    name: "uniRootX",
    configResolved(config) {
      projectRoot3 = config.root || process2.cwd();
      pagesJsonPath = path.resolve(projectRoot3, "pages.json");
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
      const uvuePath = path.join(projectRoot3, `${rawRootFileName}.uvue`);
      const vuePath = path.join(projectRoot3, `${rawRootFileName}.vue`);
      if (fs.existsSync(vuePath) && !fs.existsSync(uvuePath)) {
        targetFileExt = ".vue";
      }
      const targetFilePath = path.join(projectRoot3, `${rawRootFileName}${targetFileExt}`);
      if (!fs.existsSync(targetFilePath)) {
        const legacyPath = path.join(projectRoot3, "App.ku.uvue");
        if (fs.existsSync(legacyPath)) {
          try {
            fs.copyFileSync(legacyPath, targetFilePath);
            console.log(`[uniRootX] \u5DF2\u57FA\u4E8E App.ku.uvue \u81EA\u52A8\u751F\u6210 ${rawRootFileName}${targetFileExt} \u6587\u4EF6`);
          } catch (e) {
            console.error(`[uniRootX] \u590D\u5236\u751F\u6210 ${rawRootFileName}${targetFileExt} \u5931\u8D25:`, e);
          }
        } else {
          const defaultContent = `<template>
	<view class="root-container" style="flex: 1;">
		<slot></slot>
	</view>
</template>

<script setup lang="uts">
const props = defineProps({
	layout: { type: String, default: '' },
	showBack: { type: Boolean, default: true },
	hideNavbar: { type: Boolean, default: false },
	hideStatusBar: { type: Boolean, default: false },
	enablePullDownRefresh: { type: Boolean, default: false },
	customPageClass: { type: String, default: '' },
	customPageStyle: { type: String, default: '' },
	pageStyle: { type: Object, default: () => ({}) }
});
</script>

<style lang="scss" scoped>
.root-container {
	flex: 1;
}
</style>
`;
          try {
            fs.writeFileSync(targetFilePath, defaultContent, "utf-8");
            console.log(`[uniRootX] \u81EA\u52A8\u751F\u6210\u4E86\u7F3A\u5C11\u7684 ${rawRootFileName}${targetFileExt} \u6587\u4EF6`);
          } catch (e) {
            console.error(`[uniRootX] \u81EA\u52A8\u751F\u6210 ${rawRootFileName}${targetFileExt} \u5931\u8D25:`, e);
          }
        }
      }
      const relativeId = path.relative(projectRoot3, normalizedId).replace(/\\/g, "/");
      const cleanRelativeId = relativeId.replace(/\.(uvue|vue)(\?.*)?$/, "");
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
      const importStatement = `import ${componentName} from '@/${rawRootFileName}${targetFileExt}'`;
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
          if (fs.existsSync(srcFile)) {
            try {
              fs.copyFileSync(srcFile, destFile);
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
  "crypto-js"
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
import fs2 from "node:fs";
import path2 from "node:path";
import process3 from "node:process";
import JSON5 from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/index.js";
function kebabCase2(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function parseDefinePage(content) {
  const startRegex = /definePage\s*\(\s*\{/;
  const match = content.match(startRegex);
  if (match == null || match.index == null) {
    return null;
  }
  const openParen = content.indexOf("(", match.index);
  if (openParen === -1) {
    return null;
  }
  let depth = 0;
  let inString = false;
  let stringChar = "";
  let i = openParen + 1;
  for (; i < content.length; i++) {
    const ch = content[i];
    const prev = i > 0 ? content[i - 1] : "";
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
    if (ch === "/" && i + 1 < content.length) {
      if (content[i + 1] === "/") {
        const newline = content.indexOf("\n", i);
        if (newline === -1) {
          break;
        }
        i = newline;
        continue;
      }
      if (content[i + 1] === "*") {
        const end = content.indexOf("*/", i + 2);
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
        const arg = content.slice(openParen + 1, i).trim();
        if (arg.startsWith("{")) {
          try {
            return JSON5.parse(arg);
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
  let projectRoot3 = options.cwd || process3.cwd();
  const layoutDirName = options.layoutDir || "src/layouts";
  const defaultLayoutName = options.layout || "default";
  let layoutDir = path2.resolve(projectRoot3, layoutDirName);
  let pagesJsonPath = path2.resolve(projectRoot3, "pages.json");
  let cachedPagesData = null;
  let lastPagesJsonMTime = 0;
  function loadPagesJson() {
    const pageLayouts = /* @__PURE__ */ new Map();
    const pagePaths = /* @__PURE__ */ new Set();
    if (!fs2.existsSync(pagesJsonPath)) {
      return { pageLayouts, pagePaths };
    }
    try {
      const rawContent = fs2.readFileSync(pagesJsonPath, "utf-8");
      const cleanJson = rawContent.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "$1");
      const data = JSON.parse(cleanJson);
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
    if (!fs2.existsSync(pagesJsonPath)) {
      return { pageLayouts: /* @__PURE__ */ new Map(), pagePaths: /* @__PURE__ */ new Set() };
    }
    const stat = fs2.statSync(pagesJsonPath);
    if (!cachedPagesData || stat.mtimeMs !== lastPagesJsonMTime) {
      cachedPagesData = loadPagesJson();
      lastPagesJsonMTime = stat.mtimeMs;
    }
    return cachedPagesData;
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
        if (fs2.existsSync(subDirPath)) {
          return {
            fileName: `${name}/${name}${ext}`,
            importPath: `@/src/layouts/${name}/${name}${ext}`
          };
        }
        const subDirIndexPath = path2.join(layoutDir, name, `index${ext}`);
        if (fs2.existsSync(subDirIndexPath)) {
          return {
            fileName: `${name}/index${ext}`,
            importPath: `@/src/layouts/${name}/index${ext}`
          };
        }
        const filePath = path2.join(layoutDir, `${name}${ext}`);
        if (fs2.existsSync(filePath)) {
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
      projectRoot3 = config.root || process3.cwd();
      layoutDir = path2.resolve(projectRoot3, layoutDirName);
      pagesJsonPath = path2.resolve(projectRoot3, "pages.json");
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
          const routeObj = JSON5.parse(cleanRouteStr);
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
      if (fs2.existsSync(layoutDir)) {
        server.watcher.add(layoutDir);
      }
      if (fs2.existsSync(pagesJsonPath)) {
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
import fs3 from "node:fs";
import path3 from "node:path";
import process4 from "node:process";
function getTabbarMode(projectRoot3) {
  if (process4.env.VITE_TABBAR_MODE != null && process4.env.VITE_TABBAR_MODE !== "") {
    return process4.env.VITE_TABBAR_MODE.trim();
  }
  try {
    const envPath = path3.resolve(projectRoot3, ".env");
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
var watchedTabPages = /* @__PURE__ */ new Set();
function generateTabViews(projectRoot3, options = {}) {
  const configFile = options.configFile ?? "src/tabbar/config.uts";
  const configPath = path3.resolve(projectRoot3, configFile);
  if (!fs3.existsSync(configPath)) {
    return;
  }
  const rawContent = fs3.readFileSync(configPath, "utf-8");
  const content = rawContent.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "");
  const listMatch = content.match(/list\s*:\s*\[([\s\S]*?)\]/);
  if (!listMatch) {
    return;
  }
  const listBlock = listMatch[1];
  const itemRegex = /\{([\s\S]*?)\}/g;
  let m = itemRegex.exec(listBlock);
  const tabPages = [];
  const tabPageKeys = /* @__PURE__ */ new Map();
  while (m !== null) {
    const itemBlock = m[1];
    const pagePathMatch = itemBlock.match(/pagePath\s*:\s*['"`](.*?)['"`]/);
    if (pagePathMatch) {
      const pagePath = pagePathMatch[1].trim().replace(/^\//, "");
      tabPages.push(pagePath);
      const typeMatch = itemBlock.match(/tabType\s*:\s*['"`](.*?)['"`]/);
      if (typeMatch && typeMatch[1].trim())
        tabPageKeys.set(pagePath, typeMatch[1].trim());
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
  const pagesJsonPath = path3.resolve(projectRoot3, "pages.json");
  if (fs3.existsSync(pagesJsonPath)) {
    try {
      const rawJson = fs3.readFileSync(pagesJsonPath, "utf-8");
      const cleanJson = rawJson.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "$1");
      const data = JSON.parse(cleanJson);
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
  const viewsEntries = [];
  const usedNames = /* @__PURE__ */ new Set();
  for (let idx = 0; idx < fullTabPages.length; idx++) {
    const rawPath = fullTabPages[idx];
    const cleanPath = rawPath.replace(/^src\//, "");
    const pagePathKey = rawPath.replace(/^\//, "");
    const tabKey = tabPageKeys.get(pagePathKey);
    const pageDirRel = path3.dirname(cleanPath);
    const absPageDir = path3.resolve(projectRoot3, "src", pageDirRel);
    const dirName = path3.basename(absPageDir);
    const pascalDirName = dirName.charAt(0).toUpperCase() + dirName.slice(1);
    const expectedCompName = `${pascalDirName}View`;
    const viewsDir = path3.resolve(absPageDir, "views");
    const expectedViewFile = path3.resolve(viewsDir, `${expectedCompName}.uvue`);
    let actualCompName = expectedCompName;
    let actualRelPath = `src/${pageDirRel}/views/${expectedCompName}.uvue`;
    if (fs3.existsSync(absPageDir)) {
      if (!fs3.existsSync(viewsDir)) {
        if (options.autoCreateViews !== false) {
          fs3.mkdirSync(viewsDir, { recursive: true });
        }
      }
      let existingViews = [];
      if (fs3.existsSync(viewsDir)) {
        try {
          existingViews = fs3.readdirSync(viewsDir).filter((f) => f.endsWith(".uvue"));
        } catch {
        }
      }
      if (existingViews.length > 0) {
        const matchedView = dirName === "index" && existingViews.includes("HomeView.uvue") ? "HomeView.uvue" : existingViews.find((f) => f === `${expectedCompName}.uvue`) ?? existingViews[0];
        const baseName = matchedView.replace(/\.uvue$/, "");
        actualCompName = baseName;
        actualRelPath = `src/${pageDirRel}/views/${matchedView}`;
      } else if (options.autoCreateViews !== false) {
        const viewTemplate = `<script lang="uts" setup>
defineOptions({
  name: '${expectedCompName}',
  styleIsolation: 'isolated'
});

import { onNavbarPullDownRefresh, stopNavbarPullDownRefresh } from '@/src/layouts/navbar/utils/index.uts';
import { curIdx, onTabShow } from '@/src/tabbar';

// \u9875\u9762\u6570\u636E\u52A0\u8F7D/\u5237\u65B0\u65B9\u6CD5
function refreshData(): void {
  console.log('${expectedCompName} \u5237\u65B0\u4E2D...');
  setTimeout(() => {
    console.log('${expectedCompName} \u5237\u65B0\u6210\u529F');
    // \u6570\u636E\u52A0\u8F7D\u5B8C\u6BD5\u540E\uFF0C\u624B\u52A8\u505C\u6B62\u4E0B\u62C9\u5237\u65B0\u52A8\u753B\u72B6\u6001
    stopNavbarPullDownRefresh();
  }, 1000);
}

// \u76D1\u542C Tab \u5207\u6362\uFF08${tabKey ? `tabType: '${tabKey}'` : `\u7D22\u5F15 ${idx}`}\uFF09\u65F6\u89E6\u53D1\u5237\u65B0
onTabShow(${tabKey ? `'${tabKey}'` : idx}, () => {
  console.log('\u5207\u6362\u5230\u4E86 ${expectedCompName} Tab');
  refreshData();
});

// \u76D1\u542C navbar \u81EA\u5B9A\u4E49\u4E0B\u62C9\u5237\u65B0\u4E8B\u4EF6\uFF08\u5728\u5904\u4E8E\u5F53\u524D Tab \u65F6\u751F\u6548\uFF09
onNavbarPullDownRefresh(() => {
  if (curIdx.value == ${idx}) {
    refreshData();
  }
});
</script>

<template>
  <view class="flex flex-col flex-1 p-[16px]">
    <text class="text-[18px] font-bold text-[#1e293b]">${expectedCompName}</text>
    <text class="text-[13px] text-[#64748b] mt-[6px]">\u5F53\u524D\u4E3A\u5355\u9875\u9762 TabBar \u89C6\u56FE\u7EC4\u4EF6</text>
  </view>
</template>

<style lang="scss" scoped></style>
`;
        fs3.writeFileSync(expectedViewFile, viewTemplate, "utf-8");
        console.log(`[tabbar-views] \u81EA\u52A8\u4E3A TabBar \u5355\u9875\u751F\u6210\u57FA\u7840\u89C6\u56FE\u7EC4\u4EF6: ${path3.relative(projectRoot3, expectedViewFile)}`);
      }
    }
    const normTarget = rawPath.replace(/\\/g, "/").replace(/^\//, "").replace(/\.(uvue|vue)$/, "");
    const pageConfig = pagesJsonMap.get(normTarget) || pagesJsonMap.get(`src/${normTarget}`) || pagesJsonMap.get(normTarget.replace(/^src\//, "")) || null;
    let hideNavbar = pageConfig?.hideNavbar === true;
    let hideStatusBar = pageConfig?.hideStatusBar === true;
    let enablePullDownRefresh = typeof pageConfig?.enablePullDownRefresh === "boolean" ? pageConfig.enablePullDownRefresh : true;
    let title = typeof pageConfig?.style?.navigationBarTitleText === "string" ? pageConfig.style.navigationBarTitleText : typeof pageConfig?.title === "string" ? pageConfig.title : "";
    let customPageClass = typeof pageConfig?.customPageClass === "string" ? pageConfig.customPageClass : typeof pageConfig?.class === "string" ? pageConfig.class : "";
    let customPageStyle = typeof pageConfig?.customPageStyle === "string" ? pageConfig.customPageStyle : typeof pageConfig?.customStyle === "string" ? pageConfig.customStyle : "";
    const absPageFile = path3.resolve(projectRoot3, rawPath.endsWith(".uvue") ? rawPath : `${rawPath}.uvue`);
    watchedTabPages.add(absPageFile);
    if (options.syncNavbarConfig !== false && fs3.existsSync(absPageFile)) {
      try {
        const pageCode = fs3.readFileSync(absPageFile, "utf-8");
        const mHide = pageCode.match(/hideNavbar\s*:\s*(true|false)/i);
        if (mHide) {
          hideNavbar = mHide[1].toLowerCase() === "true";
        }
        const mStatus = pageCode.match(/hideStatusBar\s*:\s*(true|false)/i);
        if (mStatus) {
          hideStatusBar = mStatus[1].toLowerCase() === "true";
        }
        const mRefresh = pageCode.match(/enablePullDownRefresh\s*:\s*(true|false)/i);
        if (mRefresh) {
          enablePullDownRefresh = mRefresh[1].toLowerCase() === "true";
        }
        const mTitle = pageCode.match(/navigationBarTitleText\s*:\s*['"`](.*?)['"`]/i) || pageCode.match(/\btitle\s*:\s*['"`](.*?)['"`]/i);
        if (mTitle) {
          title = mTitle[1].trim();
        }
        const mClass = pageCode.match(/customPageClass\s*:\s*['"`](.*?)['"`]/i);
        if (mClass) {
          customPageClass = mClass[1].trim();
        }
        const mStyle = pageCode.match(/customPageStyle\s*:\s*['"`](.*?)['"`]/i);
        if (mStyle) {
          customPageStyle = mStyle[1].trim();
        }
      } catch {
      }
    }
    let finalCompName = actualCompName;
    if (usedNames.has(finalCompName)) {
      finalCompName = `${pascalDirName}${actualCompName}`;
    }
    usedNames.add(finalCompName);
    viewsEntries.push({
      importName: finalCompName,
      importPath: `@/${actualRelPath.replace(/\\/g, "/")}`,
      title,
      hideNavbar,
      hideStatusBar,
      enablePullDownRefresh,
      customPageClass,
      customPageStyle
    });
  }
  const targetFile = options.targetFile ?? "src/tabbar/components/TabViews.uvue";
  const tabViewsFilePath = path3.resolve(projectRoot3, targetFile);
  const sortedImports = [...viewsEntries].sort((a, b) => a.importName.localeCompare(b.importName));
  const importLines = sortedImports.map((item) => `import ${item.importName} from '${item.importPath}';`).join("\n");
  const contentBlocks = viewsEntries.map((item, index) => {
    let attrs = ` :content-index="${index}"`;
    if (item.title) {
      attrs += ` title="${item.title.replace(/"/g, "&quot;")}"`;
    }
    if (item.enablePullDownRefresh !== void 0) {
      attrs += ` :enable-pull-down-refresh="${item.enablePullDownRefresh}"`;
    }
    if (item.hideNavbar) {
      attrs += ` :hide-navbar="true"`;
    }
    if (item.hideStatusBar) {
      attrs += ` :hide-status-bar="true"`;
    }
    if (item.customPageClass) {
      attrs += ` custom-page-class="${item.customPageClass.replace(/"/g, "&quot;")}"`;
    }
    if (item.customPageStyle) {
      attrs += ` custom-page-style="${item.customPageStyle.replace(/"/g, "&quot;")}"`;
    }
    return `    <TabContent${attrs}>
      <${item.importName} />
    </TabContent>`;
  }).join("\n");
  const tabViewsContent = `<template>
  <view class="tab-views-container" style="position: relative;flex: 1;">
${contentBlocks}
  </view>
</template>

<script setup lang="uts">
${importLines}
import TabContent from './TabContent.uvue';
</script>

<style lang="scss" scoped>
.tab-views-container {
  position: relative;
  flex: 1;
}
</style>
`;
  let existingContent = "";
  if (fs3.existsSync(tabViewsFilePath)) {
    existingContent = fs3.readFileSync(tabViewsFilePath, "utf-8");
  }
  if (existingContent !== tabViewsContent) {
    const parentDir = path3.dirname(tabViewsFilePath);
    if (!fs3.existsSync(parentDir)) {
      fs3.mkdirSync(parentDir, { recursive: true });
    }
    fs3.writeFileSync(tabViewsFilePath, tabViewsContent, "utf-8");
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
      const mode = getTabbarMode(projectRoot3);
      if (mode !== "0" && mode !== "NO_TABBAR") {
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
    },
    buildStart() {
      if (options.enabled === false) {
        return;
      }
      const mode = getTabbarMode(projectRoot3);
      if (mode !== "0" && mode !== "NO_TABBAR") {
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
      const configAbsPath = path3.resolve(projectRoot3, configFile);
      server.watcher.on("change", (file) => {
        const norm = path3.resolve(file);
        if (norm === configAbsPath) {
          debouncedGenerate();
          return;
        }
        if (watchedTabPages.has(norm)) {
          debouncedGenerate();
          return;
        }
        const pagesJsonPath = path3.resolve(projectRoot3, "pages.json");
        if (norm === pagesJsonPath) {
          debouncedGenerate();
        }
      });
    }
  };
}

// ../../../../../../Users/chenqi/Desktop/unibestX/plugins/vite-plugin-uni-pages.ts
import fs5 from "node:fs";
import path5 from "node:path";
import process5 from "node:process";
import JSON52 from "file:///Users/chenqi/Desktop/unibestX/node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/index.js";

// ../../../../../../Users/chenqi/Desktop/unibestX/plugins/uni-pages-route-meta.ts
import fs4 from "node:fs";
import path4 from "node:path";
var ROUTE_META_FILE = "src/router/generated/page-meta.uts";
function toRuntimeRoutePath(pagePath) {
  return `/${pagePath}`.replace(/\/+/g, "/");
}
function writeRouteMetaFile(output, projectRoot3) {
  const table = {};
  const collect = (page, prefix) => {
    if (page == null || typeof page.path !== "string" || page.path === "") {
      return;
    }
    const routePath = toRuntimeRoutePath(prefix === "" ? page.path : `${prefix}/${page.path}`);
    table[routePath] = { ...page, path: routePath };
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
  const jsonText = JSON.stringify(table);
  const stringLiteral = `'${jsonText.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
  const content = [
    "/**",
    " * \u26A0\uFE0F \u672C\u6587\u4EF6\u7531 plugins/uni-pages-route-meta.ts \u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u624B\u52A8\u4FEE\u6539\u3002",
    " *",
    " * \u5185\u5BB9\uFF1Apages.json \u91CC\u6BCF\u4E2A\u9875\u9762\u7684**\u5B8C\u6574\u914D\u7F6E\u9879**\uFF08\u9875\u9762 definePage \u58F0\u660E\u4EC0\u4E48\uFF0C\u8FD9\u91CC\u5C31\u662F\u4EC0\u4E48\uFF09\uFF0C",
    " *      \u4F9B `useRoute().meta / .name` \u8BFB\u53D6\uFF0C\u89C1 src/router/hooks/route-state.uts\u3002",
    " * \u751F\u6210\u65F6\u673A\uFF1A\u6BCF\u6B21\u751F\u6210 / \u66F4\u65B0 pages.json \u65F6\u540C\u6B65\u91CD\u5199\u3002",
    " */",
    `export const PAGE_META_JSON: string = ${stringLiteral};`,
    ""
  ].join("\n");
  const targetPath = path4.resolve(projectRoot3, ROUTE_META_FILE);
  const targetDir = path4.dirname(targetPath);
  if (!fs4.existsSync(targetDir)) {
    fs4.mkdirSync(targetDir, { recursive: true });
  }
  const oldContent = fs4.existsSync(targetPath) ? fs4.readFileSync(targetPath, "utf-8") : "";
  if (content !== oldContent) {
    fs4.writeFileSync(targetPath, content, "utf-8");
    console.log(`[uni-pages] Generated ${ROUTE_META_FILE} (${Object.keys(table).length} routes)`);
  }
}

// ../../../../../../Users/chenqi/Desktop/unibestX/plugins/vite-plugin-uni-pages.ts
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
function getTabbarMode2(projectRoot3) {
  if (process5.env.VITE_TABBAR_MODE != null && process5.env.VITE_TABBAR_MODE !== "") {
    return process5.env.VITE_TABBAR_MODE.trim();
  }
  try {
    const envPath = path5.resolve(projectRoot3, ".env");
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
function getSandboxConfig(projectRoot3) {
  let enabledStr = process5.env.VITE_DEV_SANDBOX ?? process5.env.VITE_DEV_SINGLE_PAGE ?? "";
  let pathStr = process5.env.VITE_DEV_SANDBOX_PAGES ?? process5.env.VITE_DEV_SINGLE_PATH ?? "";
  if (!enabledStr || !pathStr) {
    try {
      const envPath = path5.resolve(projectRoot3, ".env");
      if (fs5.existsSync(envPath)) {
        const content = fs5.readFileSync(envPath, "utf-8");
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
  return {
    enabled,
    pagePaths
  };
}
function normalizePagePath(p) {
  return p.trim().replace(/\\/g, "/").replace(/^\.\//, "").replace(/^\//, "").replace(/\.(uvue|vue|uts|ts|js)$/, "");
}
function parseRouteBlock(content) {
  const regex = /<route[^>]*>([\s\S]*?)<\/route>/;
  const match = content.match(regex);
  if (match == null) {
    return null;
  }
  try {
    return JSON52.parse(match[1].trim());
  } catch (e) {
    console.warn("[uni-pages] Failed to parse <route> block:", e);
    return null;
  }
}
function parseDefinePage2(content) {
  let targetContent = content;
  const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
  if (scriptMatch != null && scriptMatch[1] != null) {
    targetContent = scriptMatch[1];
  }
  const startRegex = /definePage\s*\(\s*\{/;
  const match = targetContent.match(startRegex);
  if (match == null || match.index == null) {
    return null;
  }
  const openParen = targetContent.indexOf("(", match.index);
  if (openParen === -1) {
    return null;
  }
  let depth = 0;
  let inString = false;
  let stringChar = "";
  let i = openParen + 1;
  for (; i < targetContent.length; i++) {
    const ch = targetContent[i];
    const prev = i > 0 ? targetContent[i - 1] : "";
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
    if (ch === "/" && i + 1 < targetContent.length) {
      if (targetContent[i + 1] === "/") {
        const newline = targetContent.indexOf("\n", i);
        if (newline === -1) {
          break;
        }
        i = newline;
        continue;
      }
      if (targetContent[i + 1] === "*") {
        const end = targetContent.indexOf("*/", i + 2);
        if (end === -1) {
          break;
        }
        i = end + 1;
        continue;
      }
    }
    if (ch === "{") {
      depth++;
    }
    if (ch === "}") {
      depth--;
    }
    if (ch === "(") {
      depth++;
    }
    if (ch === ")") {
      depth--;
      if (depth < 0) {
        const arg = targetContent.slice(openParen + 1, i).trim();
        if (arg.startsWith("{")) {
          try {
            return JSON52.parse(arg);
          } catch (e) {
            console.warn("[uni-pages] Failed to parse definePage argument:", e);
            return null;
          }
        }
        return null;
      }
    }
  }
  return null;
}
function parsePageMeta(content) {
  const route = parseRouteBlock(content);
  if (route != null) {
    return route;
  }
  return parseDefinePage2(content);
}
function scanUvueFiles(dir, excludes = [], projectRoot3 = "") {
  const results = [];
  if (!fs5.existsSync(dir)) {
    return results;
  }
  const defaultExcludes = ["**/components/**/*.*", "**/views/**/*.*"];
  const allExcludes = [...defaultExcludes, ...excludes];
  const entries = fs5.readdirSync(dir, { withFileTypes: true });
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
var lastGoodBaseConfig = null;
function generatePagesJson(opts, projectRoot3, isProduction2 = false, server) {
  let baseConfig = {};
  let configParseFailed = false;
  const configPath = path5.resolve(projectRoot3, opts.configFile);
  if (fs5.existsSync(configPath)) {
    try {
      const raw = fs5.readFileSync(configPath, "utf-8");
      baseConfig = JSON52.parse(raw);
      lastGoodBaseConfig = baseConfig;
    } catch (e) {
      configParseFailed = true;
      if (lastGoodBaseConfig != null) {
        baseConfig = lastGoodBaseConfig;
      }
      console.warn(`[uni-pages] ${opts.configFile} has syntax errors, using last good cache and skipping write-back:`, e.message);
    }
  }
  if (configParseFailed && lastGoodBaseConfig == null) {
    console.error(`[uni-pages] Aborted: ${opts.configFile} has syntax errors and no cached config is available. Fix the file first.`);
    return;
  }
  const outPath = path5.resolve(projectRoot3, opts.outFile);
  const existingPagesMap = /* @__PURE__ */ new Map();
  if (fs5.existsSync(outPath)) {
    try {
      const existingData = JSON.parse(fs5.readFileSync(outPath, "utf-8"));
      if (Array.isArray(existingData.pages)) {
        existingData.pages.forEach((p) => {
          if (p.path) {
            existingPagesMap.set(p.path, p);
          }
        });
      }
    } catch {
    }
  }
  const pagesDir = path5.resolve(projectRoot3, opts.dir);
  const files = scanUvueFiles(pagesDir, opts.exclude, projectRoot3);
  files.sort();
  const scanned = [];
  const debugAnnotatedPages = [];
  const debugHomeAnnotatedPages = [];
  for (let i = 0; i < files.length; i++) {
    const raw = fs5.readFileSync(files[i], "utf-8");
    const meta = parsePageMeta(raw);
    const pagePath = fileToPagePath(files[i], opts.dir, projectRoot3);
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
  for (let s = 0; s < opts.subPackages.length; s++) {
    const subDir = opts.subPackages[s];
    const absSubDir = path5.resolve(projectRoot3, subDir);
    if (!fs5.existsSync(absSubDir)) {
      continue;
    }
    const subFiles = scanUvueFiles(absSubDir, opts.exclude, projectRoot3);
    subFiles.sort();
    const subPages = [];
    for (let j = 0; j < subFiles.length; j++) {
      const raw = fs5.readFileSync(subFiles[j], "utf-8");
      const meta = parsePageMeta(raw);
      const relPath = path5.relative(absSubDir, subFiles[j]).replace(/\\/g, "/").replace(/\.uvue$/, "");
      const fullSubPath = `${subDir}/${relPath}`;
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
        const fullRel = `${subDir}/${relPath}`;
        const old = existingPagesMap.get(fullRel);
        if (old != null) {
          Object.assign(page, old);
          page._hasMeta = true;
        }
      }
      subPages.push(page);
    }
    const existing2 = configSubPkgs.find((p) => p.root === subDir);
    const existingMap = /* @__PURE__ */ new Map();
    if (existing2 != null && Array.isArray(existing2.pages)) {
      for (let k = 0; k < existing2.pages.length; k++) {
        existingMap.set(existing2.pages[k].path, existing2.pages[k]);
      }
    }
    const mergedPages = [];
    for (let k = 0; k < subPages.length; k++) {
      const sp = subPages[k];
      const manual = existingMap.get(sp.path);
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
    scannedSubPkgs.push({ root: subDir, pages: mergedPages });
  }
  for (let i = 0; i < configSubPkgs.length; i++) {
    const cp = configSubPkgs[i];
    if (!scannedSubPkgs.some((sp) => sp.root === cp.root)) {
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
    if (fs5.existsSync(path5.resolve(projectRoot3, `${mp.path}.uvue`))) {
      finalPages.push(mp);
    }
  }
  let home = "";
  const homeItem = scanned.find((p) => p.type === "home" || p.isHome === true);
  if (homeItem != null) {
    home = homeItem.path;
  } else if (opts.homePage !== "") {
    home = opts.homePage;
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
  const normalizeCustomNavForAlipay = (p) => {
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
  };
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
  finalPages.forEach((p) => {
    delete p._hasMeta;
    if (p.type === "home") {
      delete p.type;
    }
    delete p.debug;
    delete p.debugHome;
    delete p.only;
    delete p.isDev;
  });
  scannedSubPkgs.forEach((pkg) => {
    pkg.pages.forEach((p) => {
      delete p._hasMeta;
      delete p.debug;
      delete p.debugHome;
      delete p.only;
      delete p.isDev;
    });
  });
  const sandboxConfig = getSandboxConfig(projectRoot3);
  const hasEnvTargets = sandboxConfig.enabled && sandboxConfig.pagePaths.length > 0;
  if (debugHomeAnnotatedPages.length > 1) {
    console.warn(`\x1B[33m\u26A0\uFE0F [uni-pages] \u68C0\u6D4B\u5230\u591A\u4E2A\u9875\u9762\u540C\u65F6\u914D\u7F6E\u4E86 debugHome: true (${debugHomeAnnotatedPages.join(", ")})\uFF0C\u5168\u5C40\u4EC5\u5141\u8BB8 1 \u4E2A\u542F\u52A8\u9996\u9875\uFF0C\u5DF2\u91C7\u7528\u7B2C\u4E00\u4E2A: ${debugHomeAnnotatedPages[0]}\x1B[0m`);
  }
  const combinedCodeDebug = [...debugHomeAnnotatedPages, ...debugAnnotatedPages];
  const hasCodeDebug = combinedCodeDebug.length > 0;
  const isSandboxMode = !isProduction2 && (hasEnvTargets || hasCodeDebug);
  const sandboxMainPages = [];
  const sandboxSubPkgs = [];
  if (isSandboxMode) {
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
    const matchedPagePaths = /* @__PURE__ */ new Set();
    for (let t = 0; t < targets.length; t++) {
      const target = targets[t];
      for (let i = 0; i < finalPages.length; i++) {
        const p = finalPages[i];
        if (matchedPagePaths.has(p.path))
          continue;
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
          if (matchedPagePaths.has(fullSubPath))
            continue;
          if (matchTarget(fullSubPath, sp.path, target)) {
            matchedPagePaths.add(fullSubPath);
            if (sandboxMainPages.length === 0) {
              sandboxMainPages.push({
                ...sp,
                path: fullSubPath
              });
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
          const absFilePath = path5.resolve(projectRoot3, `${resolvedPath}.uvue`);
          if (fs5.existsSync(absFilePath)) {
            const raw = fs5.readFileSync(absFilePath, "utf-8");
            const meta = parsePageMeta(raw);
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
  }
  const output = {};
  if (isSandboxMode && sandboxMainPages.length > 0) {
    output.pages = sandboxMainPages;
  } else {
    output.pages = finalPages;
  }
  const keys = Object.keys(baseConfig);
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    if (k !== "pages" && k !== "homePage" && k !== "subPackages") {
      output[k] = baseConfig[k];
    }
  }
  function parseCustomTabbarConfig(projectRoot4) {
    const configPath2 = path5.resolve(projectRoot4, "src/tabbar/config.uts");
    if (!fs5.existsSync(configPath2)) {
      return { list: [] };
    }
    const rawContent = fs5.readFileSync(configPath2, "utf-8");
    const content = rawContent.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "");
    let zhDict = {};
    const zhPath = path5.resolve(projectRoot4, "src/i18n/locales/zh-CN.json");
    if (fs5.existsSync(zhPath)) {
      try {
        zhDict = JSON.parse(fs5.readFileSync(zhPath, "utf-8"));
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
      midButton,
      list: listResult
    };
  }
  if (isSandboxMode && sandboxMainPages.length > 0) {
    const parsedConfig = parseCustomTabbarConfig(projectRoot3);
    const validSandboxTabList = parsedConfig.list.filter(
      (item) => sandboxMainPages.some(
        (p) => p.path === item.pagePath || p.path === `src/${item.pagePath}` || `src/${p.path}` === item.pagePath || normalizePagePath(p.path) === normalizePagePath(item.pagePath)
      )
    );
    if (validSandboxTabList.length >= 2) {
      const tabbarMode = getTabbarMode2(projectRoot3);
      const isCustom = tabbarMode !== "1" && tabbarMode !== "NATIVE_TABBAR";
      output.tabBar = {
        ...isCustom ? { custom: true } : {},
        color: parsedConfig.color,
        selectedColor: parsedConfig.selectedColor,
        backgroundColor: parsedConfig.backgroundColor,
        borderStyle: parsedConfig.borderStyle,
        list: validSandboxTabList
      };
      if (parsedConfig.borderColor)
        output.tabBar.borderColor = parsedConfig.borderColor;
      if (parsedConfig.fontSize)
        output.tabBar.fontSize = parsedConfig.fontSize;
      if (parsedConfig.iconWidth)
        output.tabBar.iconWidth = parsedConfig.iconWidth;
      if (parsedConfig.spacing)
        output.tabBar.spacing = parsedConfig.spacing;
      if (parsedConfig.height)
        output.tabBar.height = parsedConfig.height;
      if (parsedConfig.midButton)
        output.tabBar.midButton = parsedConfig.midButton;
    } else {
      delete output.tabBar;
    }
  } else {
    const tabbarMode = getTabbarMode2(projectRoot3);
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
        if (parsedConfig.borderColor)
          output.tabBar.borderColor = parsedConfig.borderColor;
        if (parsedConfig.fontSize)
          output.tabBar.fontSize = parsedConfig.fontSize;
        if (parsedConfig.iconWidth)
          output.tabBar.iconWidth = parsedConfig.iconWidth;
        if (parsedConfig.spacing)
          output.tabBar.spacing = parsedConfig.spacing;
        if (parsedConfig.height)
          output.tabBar.height = parsedConfig.height;
        if (parsedConfig.midButton)
          output.tabBar.midButton = parsedConfig.midButton;
      } else {
        delete output.tabBar.custom;
        if (parsedConfig.list.length > 0 && (output.tabBar.list == null || output.tabBar.list.length === 0)) {
          output.tabBar.list = parsedConfig.list;
        }
        if (parsedConfig.midButton)
          output.tabBar.midButton = parsedConfig.midButton;
      }
    } else if (tabbarMode === "2" || tabbarMode === "CUSTOM_TABBAR_WITH_NATIVE" || tabbarMode === "CUSTOM_TABBAR") {
      const parsedConfig = parseCustomTabbarConfig(projectRoot3);
      if (output.tabBar == null) {
        output.tabBar = {
          custom: true,
          color: parsedConfig.color,
          selectedColor: parsedConfig.selectedColor,
          backgroundColor: parsedConfig.backgroundColor,
          borderStyle: parsedConfig.borderStyle,
          list: parsedConfig.list
        };
        if (parsedConfig.borderColor)
          output.tabBar.borderColor = parsedConfig.borderColor;
        if (parsedConfig.fontSize)
          output.tabBar.fontSize = parsedConfig.fontSize;
        if (parsedConfig.iconWidth)
          output.tabBar.iconWidth = parsedConfig.iconWidth;
        if (parsedConfig.spacing)
          output.tabBar.spacing = parsedConfig.spacing;
        if (parsedConfig.height)
          output.tabBar.height = parsedConfig.height;
        if (parsedConfig.midButton)
          output.tabBar.midButton = parsedConfig.midButton;
      } else {
        output.tabBar.custom = true;
        if (parsedConfig.list.length > 0 && (output.tabBar.list == null || output.tabBar.list.length === 0)) {
          output.tabBar.list = parsedConfig.list;
        }
        if (parsedConfig.midButton)
          output.tabBar.midButton = parsedConfig.midButton;
      }
    } else if (tabbarMode === "3" || tabbarMode === "CUSTOM_TABBAR_WITHOUT_NATIVE" || tabbarMode === "4" || tabbarMode === "SINGLE_PAGE_TABBAR") {
      delete output.tabBar;
    }
  }
  if (isSandboxMode && sandboxMainPages.length > 0) {
    if (sandboxSubPkgs.length > 0) {
      output.subPackages = sandboxSubPkgs;
    } else {
      delete output.subPackages;
    }
  } else if (scannedSubPkgs.length > 0) {
    output.subPackages = scannedSubPkgs;
  }
  const jsonStr = `${JSON.stringify(output, null, 2)}
`;
  writeRouteMetaFile(output, projectRoot3);
  let existing = "";
  if (fs5.existsSync(outPath)) {
    existing = fs5.readFileSync(outPath, "utf-8");
  }
  if (jsonStr !== existing) {
    fs5.writeFileSync(outPath, jsonStr, "utf-8");
    if (isSandboxMode && sandboxMainPages.length > 0) {
      const allPaths = [
        ...sandboxMainPages.map((p) => p.path),
        ...sandboxSubPkgs.flatMap((s) => s.pages.map((p) => `${s.root}/${p.path}`))
      ];
      console.log(`\x1B[33m\u26A1 [uni-pages] \u6C99\u76D2\u72EC\u7ACB\u8C03\u8BD5\u6A21\u5F0F\u5DF2\u751F\u6548: \u5171 ${allPaths.length} \u4E2A\u9875\u9762 (\u9996\u9875: ${sandboxMainPages[0].path})\x1B[0m`);
      console.log(`\x1B[33m   \u5305\u542B\u9875\u9762: ${allPaths.join(" | ")}\x1B[0m`);
    } else {
      console.log(`[uni-pages] Generated ${opts.outFile} (${finalPages.length} pages, ${scannedSubPkgs.length} subpackages)`);
    }
    if (server != null) {
      try {
        const mod = server.moduleGraph.getModuleById(outPath);
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
  if (isSandboxMode && sandboxMainPages.length > 0) {
    return;
  }
  if (fs5.existsSync(configPath) && !configParseFailed) {
    let configUpdated = false;
    const currentConfigRaw = fs5.readFileSync(configPath, "utf-8");
    let currentConfig = {};
    try {
      currentConfig = JSON52.parse(currentConfigRaw);
    } catch {
    }
    const newMainPages = [];
    for (let i = 0; i < finalPages.length; i++) {
      newMainPages.push(finalPages[i]);
    }
    if (currentConfig.pages == null || JSON.stringify(currentConfig.pages) !== JSON.stringify(newMainPages)) {
      currentConfig.pages = newMainPages;
      configUpdated = true;
    }
    currentConfig.subPackages ??= [];
    for (let s = 0; s < scannedSubPkgs.length; s++) {
      const spkg = scannedSubPkgs[s];
      const targetSub = currentConfig.subPackages.find((cp) => cp.root === spkg.root);
      if (targetSub == null) {
        currentConfig.subPackages.push({ root: spkg.root, pages: spkg.pages });
        configUpdated = true;
      } else {
        if (JSON.stringify(targetSub.pages) !== JSON.stringify(spkg.pages)) {
          targetSub.pages = spkg.pages;
          configUpdated = true;
        }
      }
    }
    if (configUpdated) {
      const newConfigJson = `${JSON.stringify(currentConfig, null, 2)}
`;
      if (newConfigJson !== currentConfigRaw) {
        fs5.writeFileSync(configPath, newConfigJson, "utf-8");
        console.log(`[uni-pages] Automatically synced changes into ${opts.configFile}`);
      }
    }
  }
}
function uniPagesPlugin(options = {}) {
  const opts = {
    enabled: options.enabled ?? true,
    dir: options.dir ?? "src/pages",
    subPackages: options.subPackages ?? [],
    exclude: options.exclude ?? [],
    outFile: options.outFile ?? "pages.json",
    configFile: options.configFile ?? "pages.config.json",
    homePage: options.homePage ?? ""
  };
  let projectRoot3 = process5.cwd();
  let server = null;
  let isProduction2 = false;
  let timeoutId = null;
  function debouncedGenerate() {
    if (timeoutId != null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      generatePagesJson(opts, projectRoot3, isProduction2, server);
    }, 80);
  }
  return {
    name: "uni-pages",
    configResolved(config) {
      projectRoot3 = config.root ?? process5.cwd();
      const mode = config.mode ?? process5.env.NODE_ENV ?? "development";
      const isExplicitProd = mode === "production" || process5.env.NODE_ENV === "production";
      const isWatch = Boolean(config.build?.watch || process5.env.UNI_WATCH || process5.env.UNI_APP_WATCH);
      isProduction2 = isExplicitProd && !isWatch;
    },
    buildStart() {
      if (!opts.enabled) {
        return;
      }
      generatePagesJson(opts, projectRoot3, isProduction2, server);
    },
    /** 移除 definePage(...) 宏调用，避免运行时报错 */
    transform(code, id) {
      if (!code.includes("definePage(")) {
        return null;
      }
      const rawId = id.split("?")[0].replace(/\\/g, "/");
      if (!rawId.endsWith(".uvue") && !rawId.endsWith(".vue")) {
        return null;
      }
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
      let endIdx = -1;
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
            const nl = code.indexOf("\n", i);
            if (nl === -1) {
              break;
            }
            i = nl;
            continue;
          }
          if (code[i + 1] === "*") {
            const e = code.indexOf("*/", i + 2);
            if (e === -1) {
              break;
            }
            i = e + 1;
            continue;
          }
        }
        if (ch === "{" || ch === "(") {
          depth++;
        }
        if (ch === "}" || ch === ")") {
          depth--;
          if (depth < 0) {
            endIdx = i + 1;
            break;
          }
        }
      }
      if (endIdx === -1) {
        return null;
      }
      let start = match.index;
      if (start > 0 && code[start - 1] === "\n") {
        start--;
        if (start > 0 && code[start - 1] === "\r") {
          start--;
        }
      }
      while (endIdx < code.length && (code[endIdx] === "\n" || code[endIdx] === "\r")) {
        endIdx++;
      }
      const newCode = code.slice(0, start) + code.slice(endIdx);
      return { code: newCode, map: null };
    },
    configureServer(s) {
      if (!opts.enabled) {
        return;
      }
      server = s;
      const pagesDir = path5.resolve(projectRoot3, opts.dir);
      const configPath = path5.resolve(projectRoot3, opts.configFile);
      const tabbarConfigPath = path5.resolve(projectRoot3, "src/tabbar/config.uts");
      const envPath = path5.resolve(projectRoot3, ".env");
      if (fs5.existsSync(pagesDir)) {
        server.watcher.add(pagesDir);
      }
      for (let i = 0; i < opts.subPackages.length; i++) {
        const subDir = path5.resolve(projectRoot3, opts.subPackages[i]);
        if (fs5.existsSync(subDir)) {
          server.watcher.add(subDir);
        }
      }
      if (fs5.existsSync(configPath)) {
        server.watcher.add(configPath);
      }
      if (fs5.existsSync(tabbarConfigPath)) {
        server.watcher.add(tabbarConfigPath);
      }
      if (fs5.existsSync(envPath)) {
        server.watcher.add(envPath);
      }
      const isPageFile = (fp) => {
        const n = fp.replace(/\\/g, "/");
        if (!n.endsWith(".uvue") || n.includes("?")) {
          return false;
        }
        const allExcludes = ["**/components/**/*.*", "**/views/**/*.*", ...opts.exclude];
        const relPath = projectRoot3 ? path5.relative(projectRoot3, fp).replace(/\\/g, "/") : n;
        for (let e = 0; e < allExcludes.length; e++) {
          if (matchGlob(relPath, allExcludes[e])) {
            return false;
          }
        }
        if (n.includes(`${opts.dir.replace(/\\/g, "/")}/`)) {
          return true;
        }
        for (let i = 0; i < opts.subPackages.length; i++) {
          if (n.includes(`${opts.subPackages[i].replace(/\\/g, "/")}/`)) {
            return true;
          }
        }
        return false;
      };
      server.watcher.on("add", (filePath) => {
        if (isPageFile(filePath)) {
          debouncedGenerate();
        }
      });
      server.watcher.on("unlink", (filePath) => {
        if (isPageFile(filePath)) {
          debouncedGenerate();
        }
      });
      server.watcher.on("change", (filePath) => {
        const normalized = filePath.replace(/\\/g, "/");
        if (normalized === configPath.replace(/\\/g, "/") || normalized.includes("pages.config") || normalized.includes("tabbar/config") || normalized.endsWith(".env")) {
          debouncedGenerate();
        }
        if (isPageFile(filePath)) {
          debouncedGenerate();
        }
      });
    },
    transformIndexHtml(html) {
      const mode = getTabbarMode2(projectRoot3);
      if (mode === "2" || mode === "CUSTOM_TABBAR_WITH_NATIVE" || mode === "CUSTOM_TABBAR") {
        const hideStyle = '<style id="uni-tabbar-hide-zero-flash">uni-tabbar, uni-tabbar *, .uni-tabbar, .uni-tabbar *, .uni-tabbar-bottom, .uni-tabbar-bottom *, .uni-tabbar__icon, .uni-tabbar__label { display: none !important; visibility: hidden !important; height: 0 !important; min-height: 0 !important; max-height: 0 !important; opacity: 0 !important; pointer-events: none !important; position: absolute !important; bottom: -9999px !important; }</style>';
        return html.replace("</head>", `${hideStyle}
</head>`);
      }
      return html;
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
function resolveUniRuntimePath(subPath) {
  const candidates = [
    process6.env.HBUILDERX_PLUGINS_PATH,
    // macOS
    "/Applications/HBuilderX.app/Contents/HBuilderX/plugins",
    // Linux
    "/opt/hbuilderx/HBuilderX/plugins",
    "/opt/HBuilderX/plugins",
    "/usr/local/hbuilderx/HBuilderX/plugins",
    // Windows
    "C:\\Program Files\\HBuilderX\\plugins",
    "C:\\HBuilderX\\plugins"
  ].filter((p) => !!p);
  for (const base of candidates) {
    const full = resolve2(base, "uniapp-cli-vite/node_modules/@dcloudio", subPath);
    if (fs6.existsSync(full)) {
      return full;
    }
  }
  return null;
}
var _uniRuntimeFiles = [
  resolveUniRuntimePath("uni-h5/dist-x/uni-h5.es.js"),
  resolveUniRuntimePath("uni-h5-vue/dist-x/vue.runtime.esm.js")
].filter((p) => !!p);
try {
  const pkgRaw = fs6.readFileSync(resolve2(projectRoot2, "package.json"), "utf-8");
  const pkg = JSON.parse(pkgRaw);
  process6.env.VITE_APP_VERSION = pkg.version ?? "1.0.0";
} catch {
  process6.env.VITE_APP_VERSION = "1.0.0";
}
try {
  process6.env.VITE_GIT_COMMIT_HASH = execSync("git rev-parse --short HEAD", { stdio: ["pipe", "pipe", "ignore"] }).toString().trim();
  process6.env.VITE_GIT_BRANCH = execSync("git rev-parse --abbrev-ref HEAD", { stdio: ["pipe", "pipe", "ignore"] }).toString().trim();
} catch {
  process6.env.VITE_GIT_COMMIT_HASH = "unknown";
  process6.env.VITE_GIT_BRANCH = "unknown";
}
process6.env.VITE_BUILD_TIME = (/* @__PURE__ */ new Date()).toISOString();
var isBuild = process6.env.NODE_ENV === "production" || process6.argv.includes("build");
var env = loadEnv(process6.env.NODE_ENV || "production", projectRoot2, "");
var isVisualizer = process6.env.VISUALIZER === "true" || env.VISUALIZER === "true" || env.VITE_VISUALIZER === "true" || process6.env.ANALYZE === "true" || env.ANALYZE === "true" || process6.env.VITE_BUNDLE_ANALYZE === "true" || env.VITE_BUNDLE_ANALYZE === "true" || process6.argv.includes("--visualizer") || process6.argv.includes("--analyze");
var isMock = process6.env.VITE_USE_MOCK === "true" || env.VITE_USE_MOCK === "true" || process6.env.MOCK === "true" || env.MOCK === "true" || process6.argv.includes("--mock");
var isWeb = process6.env.UNI_PLATFORM === "web" || process6.env.UNI_PLATFORM === "h5" || !process6.env.UNI_PLATFORM;
var isProduction = env.VITE_ENV_TYPE === "production" || process6.env.VITE_ENV_TYPE === "production" || isBuild && env.VITE_ENV_TYPE !== "test";
var isVConsole = !isProduction && isWeb && (process6.env.VITE_SHOW_VCONSOLE === "true" || env.VITE_SHOW_VCONSOLE === "true" || process6.env.VCONSOLE === "true" || env.VCONSOLE === "true" || process6.argv.includes("--vconsole"));
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
    alias: process6.env.UNI_PLATFORM === "web" || process6.env.UNI_PLATFORM === "h5" ? [
      { find: /^vue$/, replacement: "@dcloudio/uni-h5-vue" }
    ] : []
  },
  define: {
    __X_STYLE_ISOLATION__: false,
    __X_STYLE_ISOLATION_UP_ARROW__: false
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
    // 启用快速文件系统状态缓存，减少启动与热重载时重复 stat 系统调用
    fs: {
      cachedChecks: true
    },
    // Vite 5+ 服务端预热核心入口与首页模块，避免首屏访问时串行等待 Transform
    // ⚠️ 不要把 uniRuntimeFiles 加入 warmup：
    // uni-h5.es.js 静态 import 了 @dcloudio/uni-shared / vue-router / @dcloudio/uni-i18n / vue(→uni-h5-vue)，
    // 这些全在 DCloud 的 optimizeDeps.exclude 列表里、scanner 没预构建。
    // warmup 一请求 uni-h5.es.js，crawler 就沿 import 链发现这些 missing dep → 调度 rerun，
    // rerun 窗口期间浏览器的旧 browserHash 请求会命中 504 (Outdated Optimize Dep)。
    // 业务页面 warmup 保留：main.uts → App.uvue → IndexView 不直接依赖被 exclude 的运行时，
    // 不会主动激活 crawler，rerun 由首屏自然请求按需触发，窗口与用户访问不重叠。
    warmup: {
      clientFiles: [
        "./main.uts",
        "./App.uvue",
        "./src/pages/index/index.uvue",
        "./src/pages/index/views/IndexView.uvue"
        // 预热首屏会拉到的业务模块，命中裸路径即触发整页编译，
        // 浏览器后续的 ?import / ?vue&type=script / ?vue&type=style 变体直接命中 moduleGraph 缓存
        // （实测单模块 623ms → 30ms）。
        // 用 glob 而非写死文件名：页面/接口增删改名都不会让这里失效（mapFiles 匹配不到会静默跳过）。
        // 注意：加 './index.html' 无效——warmup 对 html 走 transformIndexHtml('/index.html')，
        // 与浏览器请求的 '/' 不是同一路径，且 '/' 每次重新生成（含可变 buildTime）。
        // 这些都是业务模块，不激活被 exclude 的运行时 + crawler rerun 的 504 窗口。
        // './src/pages/**/*.uvue',
        // './src/sub/**/*.uvue',
        // './src/http/**/*.uts',
        // './src/router/**/*.uts',
        // './src/api/**/*.uts'
      ]
    },
    // H5 走代理模式时生效（.env 里 VITE_H5_USE_PROXY=true）；直连模式（false）请求不经过此代理
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        // 改成你的后端地址
        changeOrigin: true
        // 如果后端接口路径本身不带 /api 前缀，放开下面这行去掉前缀
        // rewrite: (p) => p.replace(/^\/api/, ''),
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
    // 修复 H5 模式下外部或 AI 修改 .uvue/.uts 时 Tailwind CSS v4 样式热更新丢失的联动补丁插件
    // tailwindHmrPlugin(),
    // 自动扫描与路由生成插件（基于 pages.config.json + 页面内 <route>/definePage 声明）
    uniPagesPlugin({
      // 【总控开关】：是否启用插件自动扫描与 pages.json 生成（设为 false 则完全失效，不扫描、不写入 pages.json、不监听文件变化）
      enabled: true,
      // 【主包扫描目录】：主包页面根目录（相对于项目根目录），默认 'src/pages'
      dir: "src/pages",
      // 【分包扫描目录】：分包根目录数组，不能是主包目录的子目录，默认 []
      subPackages: ["src/sub"],
      // 【排除扫描规则】：Glob 匹配规则数组，匹配到的文件/目录不会被当作页面路由扫描
      exclude: ["**/components/**/*.*", "**/views/**/*.*"],
      // 【输出文件路径】：生成并同步的 pages.json 相对路径，默认 'pages.json'
      outFile: "pages.json",
      // 【基础配置文件】：用于继承 globalStyle、tabBar、easycom 等静态配置的基准文件，默认 'pages.config.json'
      configFile: "pages.config.json",
      // 【强制指定首页】：若指定则优先以该路由为主包第一个首页；留空时默认取 pages.config.json 首项或扫描的第一项
      homePage: ""
    }),
    // 单页 TabBar 基础脚手架与视图组件辅助生成插件（按需根据 src/tabbar/config.uts 辅助创建基础 TabViews）
    tabbarViewsPlugin({
      enabled: true,
      autoCreateViews: !isBuild,
      configFile: "src/tabbar/config.uts"
    }),
    // 手动补充 easycom 插件（限制非小程序端生效，含 App 与 Web）
    // 该插件内部名为 uni:app-easycom，负责在 App 蒸汽模式与 Web 端把模板里的 easycom 标签转成静态 import；
    // 小程序端（mp-*）由官方编译器基于 usingComponents 原生处理，挂载该插件会导致组件被转为未知动态组件并报错 resolveDynamicComponent。
    ...!process6.env.UNI_PLATFORM?.startsWith("mp-") ? [uniEasycomPlugin({ exclude: UNI_EASYCOM_EXCLUDE })] : [],
    uni_layouts_plugin_default({
      layoutDir: "src/layouts",
      layout: "default"
    }),
    root_plugin_default({
      enabledGlobalRef: false,
      rootFileName: "App.ku"
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
        open: process6.env.VISUALIZER_OPEN ? process6.env.VISUALIZER_OPEN === "true" : true,
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
        mockPath: "mock",
        enable: true,
        watchFiles: true,
        logger: true
      })
    ] : [],
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvdml0ZS5jb25maWcudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy9yb290LXBsdWdpbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3ZpdGUtcGx1Z2luLWNsZWFuLWxvZ2dlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3ZpdGUtcGx1Z2luLWVkaXRvci12ZXJzaW9uLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnMvdml0ZS1wbHVnaW4taDUtb3B0aW1pemUtZGVwcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3VuaS1sYXlvdXRzLXBsdWdpbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3ZpdGUtcGx1Z2luLXRhYmJhci12aWV3cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3ZpdGUtcGx1Z2luLXVuaS1wYWdlcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3VuaS1wYWdlcy1yb3V0ZS1tZXRhLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0IHsgZGlybmFtZSwgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJztcbmltcG9ydCB0eXBlIHsgUGx1Z2luT3B0aW9uIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHVuaUVhc3ljb21QbHVnaW4gfSBmcm9tICdAZGNsb3VkaW8vdW5pLWNsaS1zaGFyZWQvZGlzdC92aXRlL3BsdWdpbnMvZWFzeWNvbS5qcyc7XG5pbXBvcnQgeyBVTklfRUFTWUNPTV9FWENMVURFIH0gZnJvbSAnQGRjbG91ZGlvL3VuaS1jbGktc2hhcmVkJztcbmltcG9ydCB1bmlNb2R1bGUgZnJvbSAnQGRjbG91ZGlvL3ZpdGUtcGx1Z2luLXVuaSc7XG5pbXBvcnQgVW5pTWFuaWZlc3QgZnJvbSAnQHVuaS1oZWxwZXIvdml0ZS1wbHVnaW4tdW5pLW1hbmlmZXN0JztcbmltcG9ydCB7IHVuaUFwcFggfSBmcm9tICd3ZWFwcC10YWlsd2luZGNzcy9wcmVzZXRzJztcbmltcG9ydCB7IFdlYXBwVGFpbHdpbmRjc3MgfSBmcm9tICd3ZWFwcC10YWlsd2luZGNzcy92aXRlJztcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInO1xuaW1wb3J0IHVuaVJvb3RYIGZyb20gJy4vcGx1Z2lucy9yb290LXBsdWdpbic7XG5pbXBvcnQgY2xlYW5Mb2dnZXJQbHVnaW4gZnJvbSAnLi9wbHVnaW5zL3ZpdGUtcGx1Z2luLWNsZWFuLWxvZ2dlcic7XG5pbXBvcnQgZWRpdG9yVmVyc2lvblBsdWdpbiBmcm9tICcuL3BsdWdpbnMvdml0ZS1wbHVnaW4tZWRpdG9yLXZlcnNpb24nO1xuaW1wb3J0IGg1T3B0aW1pemVEZXBzUGx1Z2luIGZyb20gJy4vcGx1Z2lucy92aXRlLXBsdWdpbi1oNS1vcHRpbWl6ZS1kZXBzJztcbmltcG9ydCB1bmlMYXlvdXRzUGx1Z2luIGZyb20gJy4vcGx1Z2lucy91bmktbGF5b3V0cy1wbHVnaW4nO1xuaW1wb3J0IHRhYmJhclZpZXdzUGx1Z2luIGZyb20gJy4vcGx1Z2lucy92aXRlLXBsdWdpbi10YWJiYXItdmlld3MnO1xuaW1wb3J0IHVuaVBhZ2VzUGx1Z2luIGZyb20gJy4vcGx1Z2lucy92aXRlLXBsdWdpbi11bmktcGFnZXMnO1xuaW1wb3J0IHsgZXhlY1N5bmMgfSBmcm9tICdub2RlOmNoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHsgdml0ZU1vY2tTZXJ2ZSB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snO1xuaW1wb3J0IHsgdml0ZVZDb25zb2xlIH0gZnJvbSAndml0ZS1wbHVnaW4tdmNvbnNvbGUnO1xuaW1wb3J0IHZpdGVQbHVnaW5BcHBpbmZvIGZyb20gJ3ZpdGUtcGx1Z2luLWJ1aWxkLWluZm8nO1xuaW1wb3J0IHsgVml0ZUltYWdlT3B0aW1pemVyIH0gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2Utb3B0aW1pemVyJztcblxuY29uc3QgdW5pID0gKHVuaU1vZHVsZSBhcyB0eXBlb2YgdW5pTW9kdWxlICYgeyBkZWZhdWx0PzogdHlwZW9mIHVuaU1vZHVsZSB9KS5kZWZhdWx0ID8/IHVuaU1vZHVsZTtcbmNvbnN0IHByb2plY3RSb290ID0gZGlybmFtZShmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCkpO1xuXG4vKipcbiAqIG1hbmlmZXN0LmNvbmZpZy50cyBcdTIxOTIgbWFuaWZlc3QuanNvbiBcdTc2ODRcdTc1MUZcdTYyMTBcdTkwMDlcdTk4NzlcdTMwMDJcbiAqXG4gKiBvdXREaXIgXHU2NjNFXHU1RjBGXHU5NDg5XHU1NzI4XHU5ODc5XHU3NkVFXHU2ODM5XHVGRjFBXHU2NjZFXHU5MDFBIHVuaS1hcHAgXHU1REU1XHU3QTBCXHU3Njg0XHU4RjkzXHU1MTY1XHU3NkVFXHU1RjU1XHU2NjJGIGBzcmMvYFx1RkYwQ1x1NEY0NiB1bmliZXN0WCBcdTY2MkYgSEJ1aWxkZXJYIFx1NURFNVx1N0EwQlx1RkYwQ1xuICogXHU5ODc5XHU3NkVFXHU2ODM5XHU1QzMxXHU2NjJGXHU4RjkzXHU1MTY1XHU3NkVFXHU1RjU1XHVGRjA4bWFuaWZlc3QuanNvbiAvIHBhZ2VzLmpzb24gLyBBcHAudXZ1ZSBcdTkwRkRcdTU3MjhcdTY4MzlcdTRFMEFcdUZGMDlcdUZGMENcdTRGOURcdThENTYgVU5JX0lOUFVUX0RJUiBcdThGREZcdTY1RTlcdThFMjlcdTdBN0FcdTMwMDJcbiAqIFRhYiBcdTdGMjlcdThGREIgKyBcdTg4NjVcdTlGNTBcdTY3MkJcdTVDM0VcdTYzNjJcdTg4NENcdTY2MkZcdTRFM0FcdTRFODZcdThEMzRcdTU0MDggSEJ1aWxkZXJYIFx1ODFFQVx1NURGMVx1NTE5OVx1NTFGQVx1NzY4NFx1NjgzQ1x1NUYwRlx1RkYxQVx1N0YxNlx1OEY5MVx1NTY2OFx1NzU0Q1x1OTc2Mlx1NTRFQVx1NTkyOVx1NTZERVx1NTE5OVx1NEU4NiBtYW5pZmVzdC5qc29uXHVGRjBDXG4gKiBcdTRFNUZcdTRFMERcdTRGMUFcdTU2RTBcdTRFM0FcdTY4M0NcdTVGMEZcdTVERUVcdTVGMDJcdTRFQTdcdTc1MUZcdTZFRTFcdTVDNEZcdTU2NkFcdTk3RjMgZGlmZlx1MzAwMlxuICpcbiAqIFx1NjgwN1x1NkNFOFx1N0M3Qlx1NTc4Qlx1NjYyRlx1NUZDNVx1ODk4MVx1NzY4NFx1RkYxQVx1NEUwRFx1NjgwN1x1NkNFOFx1NjVGNiBgZW9sYCBcdTRGMUFcdTg4QUJcdTYzQThcdTYyMTBcdTVCQkRcdTZDREJcdTc2ODQgc3RyaW5nXHVGRjBDXHU0RjIwXHU3RUQ5IFVuaU1hbmlmZXN0KCkgXHU2MkE1IFRTMjM0NVxuICogXHVGRjA4XHU4OTgxXHU2QzQyICdcXG4nIHwgJ1xcclxcbicgXHU1QjU3XHU5NzYyXHU5MUNGXHVGRjA5XHUzMDAyXG4gKi9cbmNvbnN0IG1hbmlmZXN0UGx1Z2luT3B0aW9uczogaW1wb3J0KCdAdW5pLWhlbHBlci92aXRlLXBsdWdpbi11bmktbWFuaWZlc3QnKS5Vc2VyT3B0aW9ucyA9IHtcbiAgY3dkOiBwcm9qZWN0Um9vdCxcbiAgb3V0RGlyOiBwcm9qZWN0Um9vdCxcbiAgaW5kZW50OiAnXFx0JyxcbiAgZW9sOiAnXFxuJyxcbiAgaW5zZXJ0RmluYWxOZXdsaW5lOiB0cnVlXG59O1xuXG4vKipcbiAqIFx1ODlFM1x1Njc5MCBINSBcdThGRDBcdTg4NENcdTY1RjZcdUZGMDh1bmktaDUgLyB1bmktaDUtdnVlXHVGRjA5XHU3Njg0XHU3NzFGXHU1QjlFXHU3OEMxXHU3NkQ4XHU4REVGXHU1Rjg0XHUzMDAyXG4gKlxuICogXHU0RTNBXHU0RUMwXHU0RTQ4XHU0RTBEXHU4MEZEXHU3NkY0XHU2M0E1XHU3NTI4XHU5ODc5XHU3NkVFIG5vZGVfbW9kdWxlcyBcdTkxQ0NcdTc2ODRcdTUyNkZcdTY3MkNcdUZGMUFcbiAqIGBwbnBtIGRldmAgXHU4RDcwXHU3Njg0XHU2NjJGIGB1bmktbGF1bmNoYCBcdTIxOTIgSEJ1aWxkZXJYIENMSVx1RkYwQ1x1N0YxNlx1OEJEMVx1NTY2OFx1NEUwRVx1OEZEMFx1ODg0Q1x1NjVGNlx1NTlDQlx1N0VDOFx1NzUzMSBIQnVpbGRlclggXHU1Qjg5XHU4OEM1XHU3NkVFXHU1RjU1XHU2M0QwXHU0RjlCXHVGRjBDXG4gKiBcdTk4NzlcdTc2RUUgbm9kZV9tb2R1bGVzIFx1NEUwQlx1NzY4NCBAZGNsb3VkaW8vKiBcdTVFNzZcdTRFMERcdTUzQzJcdTRFMEUgZGV2IFx1N0YxNlx1OEJEMVx1RkYwOFx1NEUyNFx1OEZCOVx1NzI0OFx1NjcyQ1x1NTNFRlx1ODBGRFx1NEUwRFx1NEUwMFx1ODFGNFx1RkYwQ1x1NUI5RVx1NkQ0Qlx1NEU1Rlx1NEUwRFx1NTQwQ1x1RkYwOVx1MzAwMlxuICogXHU2RDRGXHU4OUM4XHU1NjY4XHU3NzFGXHU2QjYzXHU4QkY3XHU2QzQyXHU3Njg0XHU2NjJGIC9AZnMvPEhCdWlsZGVyWCBcdThERUZcdTVGODQ+Ly4uLlx1RkYwQ1x1NTZFMFx1NkI2NFx1OTg4NFx1NzBFRFx1NUZDNVx1OTg3Qlx1NjMwN1x1NTQxMSBIQnVpbGRlclggXHU1MTg1XHU3Njg0XHU2NTg3XHU0RUY2XHVGRjFCXG4gKiBcdTgyRTVcdThCRUZcdTYzMDdcdTU0MTFcdTk4NzlcdTc2RUUgbm9kZV9tb2R1bGVzIFx1OTFDQ1x1NzY4NFx1NTI2Rlx1NjcyQ1x1RkYwQ1x1NUI5RVx1OTY0NVx1OTg4NFx1NzBFRFx1NzY4NFx1NjYyRlx1NkMzOFx1OEZEQ1x1NEUwRFx1NEYxQVx1ODhBQlx1OEJGN1x1NkM0Mlx1NzY4NFx1NTNFNlx1NEUwMFx1NEUyQVx1NzI0OFx1NjcyQ1x1RkYwQ1x1N0I0OVx1NEU4RVx1NjVFMFx1NjU0OFx1MzAwMlxuICpcbiAqIEBwYXJhbSBzdWJQYXRoIGRpc3QteCBcdTc2RUVcdTVGNTVcdTRFMEJcdTc2ODRcdTc2RjhcdTVCRjlcdTUxNjVcdTUzRTNcdTY1ODdcdTRFRjZcbiAqIEByZXR1cm5zIFx1N0VERFx1NUJGOVx1OERFRlx1NUY4NFx1RkYxQlx1NjcyQVx1NjI3RVx1NTIzMCBIQnVpbGRlclggXHU2NUY2XHU4RkQ0XHU1NkRFIG51bGxcdUZGMDhcdThDMDNcdTc1MjhcdTY1QjlcdTk3MDBcdTgxRUFcdTg4NENcdThERjNcdThGQzdcdUZGMDlcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZVVuaVJ1bnRpbWVQYXRoKHN1YlBhdGg6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBjYW5kaWRhdGVzID0gW1xuICAgIHByb2Nlc3MuZW52LkhCVUlMREVSWF9QTFVHSU5TX1BBVEgsXG4gICAgLy8gbWFjT1NcbiAgICAnL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zJyxcbiAgICAvLyBMaW51eFxuICAgICcvb3B0L2hidWlsZGVyeC9IQnVpbGRlclgvcGx1Z2lucycsXG4gICAgJy9vcHQvSEJ1aWxkZXJYL3BsdWdpbnMnLFxuICAgICcvdXNyL2xvY2FsL2hidWlsZGVyeC9IQnVpbGRlclgvcGx1Z2lucycsXG4gICAgLy8gV2luZG93c1xuICAgICdDOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zJyxcbiAgICAnQzpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnMnXG4gIF0uZmlsdGVyKChwKTogcCBpcyBzdHJpbmcgPT4gISFwKTtcblxuICBmb3IgKGNvbnN0IGJhc2Ugb2YgY2FuZGlkYXRlcykge1xuICAgIGNvbnN0IGZ1bGwgPSByZXNvbHZlKGJhc2UsICd1bmlhcHAtY2xpLXZpdGUvbm9kZV9tb2R1bGVzL0BkY2xvdWRpbycsIHN1YlBhdGgpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKGZ1bGwpKSB7XG4gICAgICByZXR1cm4gZnVsbDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEg1IFx1OEZEMFx1ODg0Q1x1NjVGNlx1NEY1M1x1NzlFRlx1NURFOFx1NTkyN1x1RkYwOHVuaS1oNS5lcy5qcyBcdTdFQTYgMU1CIFx1NkU5MFx1NzgwMSAvIFx1OEY2Q1x1NjM2Mlx1NTQwRSAzLjNNQlx1RkYwOVx1RkYwQ1x1NEUxNFx1ODhBQiBEQ2xvdWQgXHU1RjNBXHU1MjM2XHU2MzkyXHU5NjY0XHU1NzI4XG4vLyBlc2J1aWxkIFx1OTg4NFx1NjI1M1x1NTMwNVx1NEU0Qlx1NTkxNlx1RkYwQ1x1NTFCN1x1NTQyRlx1NTJBOFx1NUZDNVx1OTg3Qlx1OTAxMFx1NEUyQVx1NkEyMVx1NTc1N1x1OEY2Q1x1NjM2Mlx1MzAwMlx1OEZEOVx1OTFDQ1x1ODlFM1x1Njc5MFx1NEUwMFx1NkIyMVx1NEY5QiB3YXJtdXAgXHU0RjdGXHU3NTI4XHUzMDAyXG5jb25zdCBfdW5pUnVudGltZUZpbGVzID0gW1xuICByZXNvbHZlVW5pUnVudGltZVBhdGgoJ3VuaS1oNS9kaXN0LXgvdW5pLWg1LmVzLmpzJyksXG4gIHJlc29sdmVVbmlSdW50aW1lUGF0aCgndW5pLWg1LXZ1ZS9kaXN0LXgvdnVlLnJ1bnRpbWUuZXNtLmpzJylcbl0uZmlsdGVyKChwKTogcCBpcyBzdHJpbmcgPT4gISFwKTtcblxuLy8gXHU4QkZCXHU1M0Q2IHBhY2thZ2UuanNvbiBcdTRFMEUgR2l0IFx1NTE0M1x1NEZFMVx1NjA2Rlx1RkYwQ1x1N0YxNlx1OEJEMVx1OTYzNlx1NkJCNVx1NkNFOFx1NTE2NVx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlx1NEY5QiBpbXBvcnQubWV0YS5lbnYgXHU1MTY4XHU3QUVGXHU1Qjg5XHU1MTY4XHU4QkJGXHU5NUVFXG50cnkge1xuICBjb25zdCBwa2dSYXcgPSBmcy5yZWFkRmlsZVN5bmMocmVzb2x2ZShwcm9qZWN0Um9vdCwgJ3BhY2thZ2UuanNvbicpLCAndXRmLTgnKTtcbiAgY29uc3QgcGtnID0gSlNPTi5wYXJzZShwa2dSYXcpO1xuICBwcm9jZXNzLmVudi5WSVRFX0FQUF9WRVJTSU9OID0gcGtnLnZlcnNpb24gPz8gJzEuMC4wJztcbn1cbmNhdGNoIHtcbiAgcHJvY2Vzcy5lbnYuVklURV9BUFBfVkVSU0lPTiA9ICcxLjAuMCc7XG59XG5cbnRyeSB7XG4gIHByb2Nlc3MuZW52LlZJVEVfR0lUX0NPTU1JVF9IQVNIID0gZXhlY1N5bmMoJ2dpdCByZXYtcGFyc2UgLS1zaG9ydCBIRUFEJywgeyBzdGRpbzogWydwaXBlJywgJ3BpcGUnLCAnaWdub3JlJ10gfSkudG9TdHJpbmcoKS50cmltKCk7XG4gIHByb2Nlc3MuZW52LlZJVEVfR0lUX0JSQU5DSCA9IGV4ZWNTeW5jKCdnaXQgcmV2LXBhcnNlIC0tYWJicmV2LXJlZiBIRUFEJywgeyBzdGRpbzogWydwaXBlJywgJ3BpcGUnLCAnaWdub3JlJ10gfSkudG9TdHJpbmcoKS50cmltKCk7XG59XG5jYXRjaCB7XG4gIHByb2Nlc3MuZW52LlZJVEVfR0lUX0NPTU1JVF9IQVNIID0gJ3Vua25vd24nO1xuICBwcm9jZXNzLmVudi5WSVRFX0dJVF9CUkFOQ0ggPSAndW5rbm93bic7XG59XG5wcm9jZXNzLmVudi5WSVRFX0JVSUxEX1RJTUUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG5cbmNvbnN0IGlzQnVpbGQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nIHx8IHByb2Nlc3MuYXJndi5pbmNsdWRlcygnYnVpbGQnKTtcbmNvbnN0IGVudiA9IGxvYWRFbnYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ3Byb2R1Y3Rpb24nLCBwcm9qZWN0Um9vdCwgJycpO1xuY29uc3QgaXNWaXN1YWxpemVyID0gcHJvY2Vzcy5lbnYuVklTVUFMSVpFUiA9PT0gJ3RydWUnXG4gIHx8IGVudi5WSVNVQUxJWkVSID09PSAndHJ1ZSdcbiAgfHwgZW52LlZJVEVfVklTVUFMSVpFUiA9PT0gJ3RydWUnXG4gIHx8IHByb2Nlc3MuZW52LkFOQUxZWkUgPT09ICd0cnVlJ1xuICB8fCBlbnYuQU5BTFlaRSA9PT0gJ3RydWUnXG4gIHx8IHByb2Nlc3MuZW52LlZJVEVfQlVORExFX0FOQUxZWkUgPT09ICd0cnVlJ1xuICB8fCBlbnYuVklURV9CVU5ETEVfQU5BTFlaRSA9PT0gJ3RydWUnXG4gIHx8IHByb2Nlc3MuYXJndi5pbmNsdWRlcygnLS12aXN1YWxpemVyJylcbiAgfHwgcHJvY2Vzcy5hcmd2LmluY2x1ZGVzKCctLWFuYWx5emUnKTtcblxuY29uc3QgaXNNb2NrID0gcHJvY2Vzcy5lbnYuVklURV9VU0VfTU9DSyA9PT0gJ3RydWUnXG4gIHx8IGVudi5WSVRFX1VTRV9NT0NLID09PSAndHJ1ZSdcbiAgfHwgcHJvY2Vzcy5lbnYuTU9DSyA9PT0gJ3RydWUnXG4gIHx8IGVudi5NT0NLID09PSAndHJ1ZSdcbiAgfHwgcHJvY2Vzcy5hcmd2LmluY2x1ZGVzKCctLW1vY2snKTtcblxuY29uc3QgaXNXZWIgPSBwcm9jZXNzLmVudi5VTklfUExBVEZPUk0gPT09ICd3ZWInXG4gIHx8IHByb2Nlc3MuZW52LlVOSV9QTEFURk9STSA9PT0gJ2g1J1xuICB8fCAhcHJvY2Vzcy5lbnYuVU5JX1BMQVRGT1JNO1xuXG4vLyBcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTdFRERcdTVCRjlcdTRFMjVcdTc5ODFcdTUzMDVcdTU0MkIgdkNvbnNvbGVcdUZGMDhcdTUzNzNcdTRGN0ZcdTY2M0VcdTVGMEZcdTkxNERcdTdGNkVcdTRFODZcdTVGMDBcdTUxNzNcdTYyMTZcdTUzQzJcdTY1NzBcdTRFNUZcdTVGM0FcdTUyMzZcdTVDNEZcdTg1M0RcdUZGMENcdTk2MzJcdTZCNjJcdTdFQkZcdTRFMEFcdTZDQzRcdTZGMEZcdUZGMDlcbmNvbnN0IGlzUHJvZHVjdGlvbiA9IGVudi5WSVRFX0VOVl9UWVBFID09PSAncHJvZHVjdGlvbidcbiAgfHwgcHJvY2Vzcy5lbnYuVklURV9FTlZfVFlQRSA9PT0gJ3Byb2R1Y3Rpb24nXG4gIHx8IChpc0J1aWxkICYmIGVudi5WSVRFX0VOVl9UWVBFICE9PSAndGVzdCcpO1xuXG5jb25zdCBpc1ZDb25zb2xlID0gIWlzUHJvZHVjdGlvbiAmJiBpc1dlYiAmJiAoXG4gIHByb2Nlc3MuZW52LlZJVEVfU0hPV19WQ09OU09MRSA9PT0gJ3RydWUnXG4gIHx8IGVudi5WSVRFX1NIT1dfVkNPTlNPTEUgPT09ICd0cnVlJ1xuICB8fCBwcm9jZXNzLmVudi5WQ09OU09MRSA9PT0gJ3RydWUnXG4gIHx8IGVudi5WQ09OU09MRSA9PT0gJ3RydWUnXG4gIHx8IHByb2Nlc3MuYXJndi5pbmNsdWRlcygnLS12Y29uc29sZScpXG4pO1xuXG5jb25zdCB3ZWFwcFRhaWx3aW5kY3NzUGx1Z2luczogUGx1Z2luT3B0aW9uW10gPSAoV2VhcHBUYWlsd2luZGNzcyhcbiAgdW5pQXBwWCh7XG4gICAgYmFzZTogcHJvamVjdFJvb3QsXG4gICAgY3NzRW50cmllczogW3Jlc29sdmUocHJvamVjdFJvb3QsICdtYWluLmNzcycpXSxcbiAgICByZW0ycnB4OiB0cnVlLFxuICAgIGN1c3RvbUF0dHJpYnV0ZXM6IHtcbiAgICAgICcqJzogWy9edC1jbGFzcyg/Oi0uKyk/JC9dXG4gICAgfSxcbiAgICBjb21wb25lbnRMb2NhbFN0eWxlczoge1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIG9ubHlXaGVuU3R5bGVJc29sYXRpb25WZXJzaW9uMjogdHJ1ZSxcbiAgICAgIGNvbXBvbmVudE1hdGNoZXI6IChpZDogc3RyaW5nKSA9PiAvKD86XnxbL1xcXFxdKXNyY1svXFxcXF0oPzpwYWdlc3xzdWJ8Y29tcG9uZW50cylbL1xcXFxdLio/XFwuKD86dXZ1ZXxudnVlKSQvLnRlc3QoaWQpXG4gICAgfSxcbiAgICB1dnVlVW5zdXBwb3J0ZWQ6ICd3YXJuJyxcbiAgICBjc3NTb3VyY2VUcmFjZTogIWlzQnVpbGRcbiAgfSBhcyBhbnkpXG4pID8/IFtdKSBhcyBQbHVnaW5PcHRpb25bXTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYmFzZTogJy4vJyxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiAocHJvY2Vzcy5lbnYuVU5JX1BMQVRGT1JNID09PSAnd2ViJyB8fCBwcm9jZXNzLmVudi5VTklfUExBVEZPUk0gPT09ICdoNScpXG4gICAgICA/IFtcbiAgICAgICAgICB7IGZpbmQ6IC9ednVlJC8sIHJlcGxhY2VtZW50OiAnQGRjbG91ZGlvL3VuaS1oNS12dWUnIH1cbiAgICAgICAgXVxuICAgICAgOiBbXVxuICB9LFxuICBkZWZpbmU6IHtcbiAgICBfX1hfU1RZTEVfSVNPTEFUSU9OX186IGZhbHNlLFxuICAgIF9fWF9TVFlMRV9JU09MQVRJT05fVVBfQVJST1dfXzogZmFsc2VcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogJzAuMC4wLjAnLFxuICAgIHBvcnQ6IDgwODAsXG4gICAgLy8gXHU1NDJGXHU3NTI4XHU1RkVCXHU5MDFGXHU2NTg3XHU0RUY2XHU3Q0ZCXHU3RURGXHU3MkI2XHU2MDAxXHU3RjEzXHU1QjU4XHVGRjBDXHU1MUNGXHU1QzExXHU1NDJGXHU1MkE4XHU0RTBFXHU3MEVEXHU5MUNEXHU4RjdEXHU2NUY2XHU5MUNEXHU1OTBEIHN0YXQgXHU3Q0ZCXHU3RURGXHU4QzAzXHU3NTI4XG4gICAgZnM6IHtcbiAgICAgIGNhY2hlZENoZWNrczogdHJ1ZVxuICAgIH0sXG4gICAgLy8gVml0ZSA1KyBcdTY3MERcdTUyQTFcdTdBRUZcdTk4ODRcdTcwRURcdTY4MzhcdTVGQzNcdTUxNjVcdTUzRTNcdTRFMEVcdTk5OTZcdTk4NzVcdTZBMjFcdTU3NTdcdUZGMENcdTkwN0ZcdTUxNERcdTk5OTZcdTVDNEZcdThCQkZcdTk1RUVcdTY1RjZcdTRFMzJcdTg4NENcdTdCNDlcdTVGODUgVHJhbnNmb3JtXG4gICAgLy8gXHUyNkEwXHVGRTBGIFx1NEUwRFx1ODk4MVx1NjI4QSB1bmlSdW50aW1lRmlsZXMgXHU1MkEwXHU1MTY1IHdhcm11cFx1RkYxQVxuICAgIC8vIHVuaS1oNS5lcy5qcyBcdTk3NTlcdTYwMDEgaW1wb3J0IFx1NEU4NiBAZGNsb3VkaW8vdW5pLXNoYXJlZCAvIHZ1ZS1yb3V0ZXIgLyBAZGNsb3VkaW8vdW5pLWkxOG4gLyB2dWUoXHUyMTkydW5pLWg1LXZ1ZSlcdUZGMENcbiAgICAvLyBcdThGRDlcdTRFOUJcdTUxNjhcdTU3MjggRENsb3VkIFx1NzY4NCBvcHRpbWl6ZURlcHMuZXhjbHVkZSBcdTUyMTdcdTg4NjhcdTkxQ0NcdTMwMDFzY2FubmVyIFx1NkNBMVx1OTg4NFx1Njc4NFx1NUVGQVx1MzAwMlxuICAgIC8vIHdhcm11cCBcdTRFMDBcdThCRjdcdTZDNDIgdW5pLWg1LmVzLmpzXHVGRjBDY3Jhd2xlciBcdTVDMzFcdTZDQkYgaW1wb3J0IFx1OTRGRVx1NTNEMVx1NzNCMFx1OEZEOVx1NEU5QiBtaXNzaW5nIGRlcCBcdTIxOTIgXHU4QzAzXHU1RUE2IHJlcnVuXHVGRjBDXG4gICAgLy8gcmVydW4gXHU3QTk3XHU1M0UzXHU2NzFGXHU5NUY0XHU2RDRGXHU4OUM4XHU1NjY4XHU3Njg0XHU2NUU3IGJyb3dzZXJIYXNoIFx1OEJGN1x1NkM0Mlx1NEYxQVx1NTQ3RFx1NEUyRCA1MDQgKE91dGRhdGVkIE9wdGltaXplIERlcClcdTMwMDJcbiAgICAvLyBcdTRFMUFcdTUyQTFcdTk4NzVcdTk3NjIgd2FybXVwIFx1NEZERFx1NzU1OVx1RkYxQW1haW4udXRzIFx1MjE5MiBBcHAudXZ1ZSBcdTIxOTIgSW5kZXhWaWV3IFx1NEUwRFx1NzZGNFx1NjNBNVx1NEY5RFx1OEQ1Nlx1ODhBQiBleGNsdWRlIFx1NzY4NFx1OEZEMFx1ODg0Q1x1NjVGNlx1RkYwQ1xuICAgIC8vIFx1NEUwRFx1NEYxQVx1NEUzQlx1NTJBOFx1NkZDMFx1NkQzQiBjcmF3bGVyXHVGRjBDcmVydW4gXHU3NTMxXHU5OTk2XHU1QzRGXHU4MUVBXHU3MTM2XHU4QkY3XHU2QzQyXHU2MzA5XHU5NzAwXHU4OUU2XHU1M0QxXHVGRjBDXHU3QTk3XHU1M0UzXHU0RTBFXHU3NTI4XHU2MjM3XHU4QkJGXHU5NUVFXHU0RTBEXHU5MUNEXHU1M0UwXHUzMDAyXG4gICAgd2FybXVwOiB7XG4gICAgICBjbGllbnRGaWxlczogW1xuICAgICAgICAnLi9tYWluLnV0cycsXG4gICAgICAgICcuL0FwcC51dnVlJyxcbiAgICAgICAgJy4vc3JjL3BhZ2VzL2luZGV4L2luZGV4LnV2dWUnLFxuICAgICAgICAnLi9zcmMvcGFnZXMvaW5kZXgvdmlld3MvSW5kZXhWaWV3LnV2dWUnXG4gICAgICAgIC8vIFx1OTg4NFx1NzBFRFx1OTk5Nlx1NUM0Rlx1NEYxQVx1NjJDOVx1NTIzMFx1NzY4NFx1NEUxQVx1NTJBMVx1NkEyMVx1NTc1N1x1RkYwQ1x1NTQ3RFx1NEUyRFx1ODhGOFx1OERFRlx1NUY4NFx1NTM3M1x1ODlFNlx1NTNEMVx1NjU3NFx1OTg3NVx1N0YxNlx1OEJEMVx1RkYwQ1xuICAgICAgICAvLyBcdTZENEZcdTg5QzhcdTU2NjhcdTU0MEVcdTdFRURcdTc2ODQgP2ltcG9ydCAvID92dWUmdHlwZT1zY3JpcHQgLyA/dnVlJnR5cGU9c3R5bGUgXHU1M0Q4XHU0RjUzXHU3NkY0XHU2M0E1XHU1NDdEXHU0RTJEIG1vZHVsZUdyYXBoIFx1N0YxM1x1NUI1OFxuICAgICAgICAvLyBcdUZGMDhcdTVCOUVcdTZENEJcdTUzNTVcdTZBMjFcdTU3NTcgNjIzbXMgXHUyMTkyIDMwbXNcdUZGMDlcdTMwMDJcbiAgICAgICAgLy8gXHU3NTI4IGdsb2IgXHU4MDBDXHU5NzVFXHU1MTk5XHU2QjdCXHU2NTg3XHU0RUY2XHU1NDBEXHVGRjFBXHU5ODc1XHU5NzYyL1x1NjNBNVx1NTNFM1x1NTg5RVx1NTIyMFx1NjUzOVx1NTQwRFx1OTBGRFx1NEUwRFx1NEYxQVx1OEJBOVx1OEZEOVx1OTFDQ1x1NTkzMVx1NjU0OFx1RkYwOG1hcEZpbGVzIFx1NTMzOVx1OTE0RFx1NEUwRFx1NTIzMFx1NEYxQVx1OTc1OVx1OUVEOFx1OERGM1x1OEZDN1x1RkYwOVx1MzAwMlxuICAgICAgICAvLyBcdTZDRThcdTYxMEZcdUZGMUFcdTUyQTAgJy4vaW5kZXguaHRtbCcgXHU2NUUwXHU2NTQ4XHUyMDE0XHUyMDE0d2FybXVwIFx1NUJGOSBodG1sIFx1OEQ3MCB0cmFuc2Zvcm1JbmRleEh0bWwoJy9pbmRleC5odG1sJylcdUZGMENcbiAgICAgICAgLy8gXHU0RTBFXHU2RDRGXHU4OUM4XHU1NjY4XHU4QkY3XHU2QzQyXHU3Njg0ICcvJyBcdTRFMERcdTY2MkZcdTU0MENcdTRFMDBcdThERUZcdTVGODRcdUZGMENcdTRFMTQgJy8nIFx1NkJDRlx1NkIyMVx1OTFDRFx1NjVCMFx1NzUxRlx1NjIxMFx1RkYwOFx1NTQyQlx1NTNFRlx1NTNEOCBidWlsZFRpbWVcdUZGMDlcdTMwMDJcbiAgICAgICAgLy8gXHU4RkQ5XHU0RTlCXHU5MEZEXHU2NjJGXHU0RTFBXHU1MkExXHU2QTIxXHU1NzU3XHVGRjBDXHU0RTBEXHU2RkMwXHU2RDNCXHU4OEFCIGV4Y2x1ZGUgXHU3Njg0XHU4RkQwXHU4ODRDXHU2NUY2ICsgY3Jhd2xlciByZXJ1biBcdTc2ODQgNTA0IFx1N0E5N1x1NTNFM1x1MzAwMlxuICAgICAgICAvLyAnLi9zcmMvcGFnZXMvKiovKi51dnVlJyxcbiAgICAgICAgLy8gJy4vc3JjL3N1Yi8qKi8qLnV2dWUnLFxuICAgICAgICAvLyAnLi9zcmMvaHR0cC8qKi8qLnV0cycsXG4gICAgICAgIC8vICcuL3NyYy9yb3V0ZXIvKiovKi51dHMnLFxuICAgICAgICAvLyAnLi9zcmMvYXBpLyoqLyoudXRzJ1xuICAgICAgXVxuICAgIH0sXG4gICAgLy8gSDUgXHU4RDcwXHU0RUUzXHU3NDA2XHU2QTIxXHU1RjBGXHU2NUY2XHU3NTFGXHU2NTQ4XHVGRjA4LmVudiBcdTkxQ0MgVklURV9INV9VU0VfUFJPWFk9dHJ1ZVx1RkYwOVx1RkYxQlx1NzZGNFx1OEZERVx1NkEyMVx1NUYwRlx1RkYwOGZhbHNlXHVGRjA5XHU4QkY3XHU2QzQyXHU0RTBEXHU3RUNGXHU4RkM3XHU2QjY0XHU0RUUzXHU3NDA2XG4gICAgcHJveHk6IHtcbiAgICAgICcvYXBpJzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLCAvLyBcdTY1MzlcdTYyMTBcdTRGNjBcdTc2ODRcdTU0MEVcdTdBRUZcdTU3MzBcdTU3NDBcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlXG4gICAgICAgIC8vIFx1NTk4Mlx1Njc5Q1x1NTQwRVx1N0FFRlx1NjNBNVx1NTNFM1x1OERFRlx1NUY4NFx1NjcyQ1x1OEVBQlx1NEUwRFx1NUUyNiAvYXBpIFx1NTI0RFx1N0YwMFx1RkYwQ1x1NjUzRVx1NUYwMFx1NEUwQlx1OTc2Mlx1OEZEOVx1ODg0Q1x1NTNCQlx1NjM4OVx1NTI0RFx1N0YwMFxuICAgICAgICAvLyByZXdyaXRlOiAocCkgPT4gcC5yZXBsYWNlKC9eXFwvYXBpLywgJycpLFxuICAgICAgfVxuICAgIH0sXG4gICAgaG1yOiB0cnVlLFxuICAgIHdhdGNoOiB7XG4gICAgICBpZ25vcmVkOiBbXG4gICAgICAgICcqKi9ub2RlX21vZHVsZXMvKionLFxuICAgICAgICAnKiovLmdpdC8qKicsXG4gICAgICAgICcqKi9kaXN0LyoqJyxcbiAgICAgICAgJyoqL3VucGFja2FnZS8qKidcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgc291cmNlbWFwOiBmYWxzZSAvLyBcdTUxNzNcdTk1RUQgc291cmNlbWFwXHVGRjBDXHU4QjY2XHU1NDRBXHU3NkY0XHU2M0E1XHU2RDg4XHU1OTMxXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICAvLyBcdTdGMTZcdThGOTFcdTU2NjhcdTcyNDhcdTY3MkNcdTVCRjlcdTlGNTBcdTYzRDBcdTc5M0FcdUZGMUFIQnVpbGRlclggLyBIQnVpbGRlclYgXHU1MzQ3XHU3RUE3XHU1NDBFXHVGRjBDcGFja2FnZS5qc29uIHBpbiBcdTc2ODQgQGRjbG91ZGlvLypcbiAgICAvLyBcdTUzRUZcdTgwRkRcdThGRDhcdTY2MkZcdTY1RTdcdTcyNDhcdTMwMDJcdTUzRUFcdTYzRDBcdTc5M0FcdTRFMERcdTk2M0JcdTY1QUQgXHUyMDE0XHUyMDE0IFx1NzI0OFx1NjcyQ1x1NEUwRFx1NEUwMFx1ODFGNFx1NjcyQVx1NUZDNVx1N0FDQlx1NTIzQlx1NjJBNVx1OTUxOVx1RkYwQ1x1NEY0Nlx1NjJBNVx1OTUxOVx1NjVGNlx1NUY4MFx1NUY4MFx1NjYyRiBBUEkgXHU4ODRDXHU0RTNBXHU1REVFXHU1RjAyXHUzMDAxXG4gICAgLy8gXHU3QzdCXHU1NzhCXHU0RTBEXHU1MzM5XHU5MTREXHU4RkQ5XHU3QzdCXHU3NzBCXHU0RTBEXHU1MUZBXHU2ODM5XHU1NkUwXHU3Njg0XHU5NUVFXHU5ODk4XHVGRjBDXHU2MjQwXHU0RUU1XHU2QkNGXHU2QjIxXHU5MEZEXHU2M0QwXHU5MTkyXHU0RTAwXHU0RTBCXHUzMDAyXG4gICAgLy8gXHU2Q0ExXHU4OEM1XHU3RjE2XHU4RjkxXHU1NjY4XHUzMDAxXHU2MjE2IHBhY2thZ2UuanNvbiBcdTZDQTFcdTY3MDlcdThGRDlcdTUxRTBcdTRFMkEgcGluIFx1NzY4NFx1NzNBRlx1NTg4M1x1NEYxQVx1OTc1OVx1OUVEOFx1OERGM1x1OEZDN1x1MzAwMlxuICAgIC8vIFx1ODFFQVx1NTJBOFx1NTQwQ1x1NkI2NVx1NTcyOCBucG0gXHU4MTFBXHU2NzJDXHU1QzQyXHVGRjA4cG5wbSBkZXYgLyBidWlsZDoqIFx1NTI0RFx1OTc2Mlx1NjMwMlx1NEU4NiAtLWVuc3VyZVx1RkYwOVx1MzAwMlxuICAgIGVkaXRvclZlcnNpb25QbHVnaW4oKSxcbiAgICAvLyBcdTYzQTdcdTUyMzZcdTUzRjBcdThCNjZcdTU0NEFcdTRFMEVcdTRFRTNcdTc4MDFcdTcyNDdcdTZCQjVcdTUxQzBcdTUzMTZcdTYzRDJcdTRFRjZcdUZGMUFcdTYyRTZcdTYyMkEgVml0ZS9Sb2xsdXAvRENsb3VkIFx1N0YxNlx1OEJEMVx1NTQ0QVx1OEI2Nlx1OEY5M1x1NTFGQVxuICAgIGNsZWFuTG9nZ2VyUGx1Z2luKHsgc2lsZW5jZUFsbDogdHJ1ZSB9KSxcbiAgICAvLyBINSBcdTUxQjdcdTU0MkZcdTUyQThcdTYwMjdcdTgwRkRcdTRGMThcdTUzMTZcdUZGMUFcdTg5ODZcdTc2RDYgRENsb3VkIFx1NUJGOVx1NEY5RFx1OEQ1Nlx1OTg4NFx1Njc4NFx1NUVGQVx1NzY4NFx1Nzk4MVx1NzUyOFx1RkYwQ1x1NUMwNlx1NjgzOFx1NUZDM1x1NTkyN1x1NEY1M1x1NzlFRlx1NEY5RFx1OEQ1Nlx1N0VCM1x1NTE2NSBlc2J1aWxkIFx1OTg4NFx1Njc4NFx1NUVGQVxuICAgIC8vIGV4dHJhSW5jbHVkZXMgXHU5MDBGXHU0RjIwIGlzVkNvbnNvbGUgXHU2NUY2XHU3Njg0IHZjb25zb2xlXHVGRjFBdml0ZS1wbHVnaW4tdmNvbnNvbGUgXHU1NzI4IHRyYW5zZm9ybSBcdTk0QTlcdTVCNTBcdTkxQ0NcdTUyQThcdTYwMDFcdTZDRThcdTUxNjVcbiAgICAvLyBgaW1wb3J0IFZDb25zb2xlIGZyb20gJ3Zjb25zb2xlJ2AgXHU1MjMwIG1haW4udXRzXHVGRjBDc2Nhbm5lciBcdTc3MEJcdTRFMERcdTUyMzBcdUZGMENcdTk3MDBcdTY2M0VcdTVGMEYgaW5jbHVkZSBcdThCQTkgc2Nhbm5lciBcdTk4ODRcdTY3ODRcdTVFRkFcdTMwMDJcbiAgICBoNU9wdGltaXplRGVwc1BsdWdpbih7IGRlYnVnOiBmYWxzZSwgZXh0cmFJbmNsdWRlczogaXNWQ29uc29sZSA/IFsndmNvbnNvbGUnXSA6IFtdIH0pLFxuICAgIC8vIFx1NEZFRVx1NTkwRCBINSBcdTZBMjFcdTVGMEZcdTRFMEJcdTU5MTZcdTkwRThcdTYyMTYgQUkgXHU0RkVFXHU2NTM5IC51dnVlLy51dHMgXHU2NUY2IFRhaWx3aW5kIENTUyB2NCBcdTY4MzdcdTVGMEZcdTcwRURcdTY2RjRcdTY1QjBcdTRFMjJcdTU5MzFcdTc2ODRcdTgwNTRcdTUyQThcdTg4NjVcdTRFMDFcdTYzRDJcdTRFRjZcbiAgICAvLyB0YWlsd2luZEhtclBsdWdpbigpLFxuICAgIC8vIFx1ODFFQVx1NTJBOFx1NjI2Qlx1NjNDRlx1NEUwRVx1OERFRlx1NzUzMVx1NzUxRlx1NjIxMFx1NjNEMlx1NEVGNlx1RkYwOFx1NTdGQVx1NEU4RSBwYWdlcy5jb25maWcuanNvbiArIFx1OTg3NVx1OTc2Mlx1NTE4NSA8cm91dGU+L2RlZmluZVBhZ2UgXHU1OEYwXHU2NjBFXHVGRjA5XG4gICAgdW5pUGFnZXNQbHVnaW4oe1xuICAgICAgLy8gXHUzMDEwXHU2MDNCXHU2M0E3XHU1RjAwXHU1MTczXHUzMDExXHVGRjFBXHU2NjJGXHU1NDI2XHU1NDJGXHU3NTI4XHU2M0QyXHU0RUY2XHU4MUVBXHU1MkE4XHU2MjZCXHU2M0NGXHU0RTBFIHBhZ2VzLmpzb24gXHU3NTFGXHU2MjEwXHVGRjA4XHU4QkJFXHU0RTNBIGZhbHNlIFx1NTIxOVx1NUI4Q1x1NTE2OFx1NTkzMVx1NjU0OFx1RkYwQ1x1NEUwRFx1NjI2Qlx1NjNDRlx1MzAwMVx1NEUwRFx1NTE5OVx1NTE2NSBwYWdlcy5qc29uXHUzMDAxXHU0RTBEXHU3NkQxXHU1NDJDXHU2NTg3XHU0RUY2XHU1M0Q4XHU1MzE2XHVGRjA5XG4gICAgICBlbmFibGVkOiB0cnVlLFxuXG4gICAgICAvLyBcdTMwMTBcdTRFM0JcdTUzMDVcdTYyNkJcdTYzQ0ZcdTc2RUVcdTVGNTVcdTMwMTFcdUZGMUFcdTRFM0JcdTUzMDVcdTk4NzVcdTk3NjJcdTY4MzlcdTc2RUVcdTVGNTVcdUZGMDhcdTc2RjhcdTVCRjlcdTRFOEVcdTk4NzlcdTc2RUVcdTY4MzlcdTc2RUVcdTVGNTVcdUZGMDlcdUZGMENcdTlFRDhcdThCQTQgJ3NyYy9wYWdlcydcbiAgICAgIGRpcjogJ3NyYy9wYWdlcycsXG5cbiAgICAgIC8vIFx1MzAxMFx1NTIwNlx1NTMwNVx1NjI2Qlx1NjNDRlx1NzZFRVx1NUY1NVx1MzAxMVx1RkYxQVx1NTIwNlx1NTMwNVx1NjgzOVx1NzZFRVx1NUY1NVx1NjU3MFx1N0VDNFx1RkYwQ1x1NEUwRFx1ODBGRFx1NjYyRlx1NEUzQlx1NTMwNVx1NzZFRVx1NUY1NVx1NzY4NFx1NUI1MFx1NzZFRVx1NUY1NVx1RkYwQ1x1OUVEOFx1OEJBNCBbXVxuICAgICAgc3ViUGFja2FnZXM6IFsnc3JjL3N1YiddLFxuXG4gICAgICAvLyBcdTMwMTBcdTYzOTJcdTk2NjRcdTYyNkJcdTYzQ0ZcdTg5QzRcdTUyMTlcdTMwMTFcdUZGMUFHbG9iIFx1NTMzOVx1OTE0RFx1ODlDNFx1NTIxOVx1NjU3MFx1N0VDNFx1RkYwQ1x1NTMzOVx1OTE0RFx1NTIzMFx1NzY4NFx1NjU4N1x1NEVGNi9cdTc2RUVcdTVGNTVcdTRFMERcdTRGMUFcdTg4QUJcdTVGNTNcdTRGNUNcdTk4NzVcdTk3NjJcdThERUZcdTc1MzFcdTYyNkJcdTYzQ0ZcbiAgICAgIGV4Y2x1ZGU6IFsnKiovY29tcG9uZW50cy8qKi8qLionLCAnKiovdmlld3MvKiovKi4qJ10sXG5cbiAgICAgIC8vIFx1MzAxMFx1OEY5M1x1NTFGQVx1NjU4N1x1NEVGNlx1OERFRlx1NUY4NFx1MzAxMVx1RkYxQVx1NzUxRlx1NjIxMFx1NUU3Nlx1NTQwQ1x1NkI2NVx1NzY4NCBwYWdlcy5qc29uIFx1NzZGOFx1NUJGOVx1OERFRlx1NUY4NFx1RkYwQ1x1OUVEOFx1OEJBNCAncGFnZXMuanNvbidcbiAgICAgIG91dEZpbGU6ICdwYWdlcy5qc29uJyxcblxuICAgICAgLy8gXHUzMDEwXHU1N0ZBXHU3ODQwXHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2XHUzMDExXHVGRjFBXHU3NTI4XHU0RThFXHU3RUU3XHU2MjdGIGdsb2JhbFN0eWxlXHUzMDAxdGFiQmFyXHUzMDAxZWFzeWNvbSBcdTdCNDlcdTk3NTlcdTYwMDFcdTkxNERcdTdGNkVcdTc2ODRcdTU3RkFcdTUxQzZcdTY1ODdcdTRFRjZcdUZGMENcdTlFRDhcdThCQTQgJ3BhZ2VzLmNvbmZpZy5qc29uJ1xuICAgICAgY29uZmlnRmlsZTogJ3BhZ2VzLmNvbmZpZy5qc29uJyxcblxuICAgICAgLy8gXHUzMDEwXHU1RjNBXHU1MjM2XHU2MzA3XHU1QjlBXHU5OTk2XHU5ODc1XHUzMDExXHVGRjFBXHU4MkU1XHU2MzA3XHU1QjlBXHU1MjE5XHU0RjE4XHU1MTQ4XHU0RUU1XHU4QkU1XHU4REVGXHU3NTMxXHU0RTNBXHU0RTNCXHU1MzA1XHU3QjJDXHU0RTAwXHU0RTJBXHU5OTk2XHU5ODc1XHVGRjFCXHU3NTU5XHU3QTdBXHU2NUY2XHU5RUQ4XHU4QkE0XHU1M0Q2IHBhZ2VzLmNvbmZpZy5qc29uIFx1OTk5Nlx1OTg3OVx1NjIxNlx1NjI2Qlx1NjNDRlx1NzY4NFx1N0IyQ1x1NEUwMFx1OTg3OVxuICAgICAgaG9tZVBhZ2U6ICcnXG4gICAgfSksXG4gICAgLy8gXHU1MzU1XHU5ODc1IFRhYkJhciBcdTU3RkFcdTc4NDBcdTgxMUFcdTYyNEJcdTY3QjZcdTRFMEVcdTg5QzZcdTU2RkVcdTdFQzRcdTRFRjZcdThGODVcdTUyQTlcdTc1MUZcdTYyMTBcdTYzRDJcdTRFRjZcdUZGMDhcdTYzMDlcdTk3MDBcdTY4MzlcdTYzNkUgc3JjL3RhYmJhci9jb25maWcudXRzIFx1OEY4NVx1NTJBOVx1NTIxQlx1NUVGQVx1NTdGQVx1Nzg0MCBUYWJWaWV3c1x1RkYwOVxuICAgIHRhYmJhclZpZXdzUGx1Z2luKHtcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBhdXRvQ3JlYXRlVmlld3M6ICFpc0J1aWxkLFxuICAgICAgY29uZmlnRmlsZTogJ3NyYy90YWJiYXIvY29uZmlnLnV0cydcbiAgICB9KSxcbiAgICAvLyBcdTYyNEJcdTUyQThcdTg4NjVcdTUxNDUgZWFzeWNvbSBcdTYzRDJcdTRFRjZcdUZGMDhcdTk2NTBcdTUyMzZcdTk3NUVcdTVDMEZcdTdBMEJcdTVFOEZcdTdBRUZcdTc1MUZcdTY1NDhcdUZGMENcdTU0MkIgQXBwIFx1NEUwRSBXZWJcdUZGMDlcbiAgICAvLyBcdThCRTVcdTYzRDJcdTRFRjZcdTUxODVcdTkwRThcdTU0MERcdTRFM0EgdW5pOmFwcC1lYXN5Y29tXHVGRjBDXHU4RDFGXHU4RDIzXHU1NzI4IEFwcCBcdTg0QjhcdTZDN0RcdTZBMjFcdTVGMEZcdTRFMEUgV2ViIFx1N0FFRlx1NjI4QVx1NkEyMVx1Njc3Rlx1OTFDQ1x1NzY4NCBlYXN5Y29tIFx1NjgwN1x1N0I3RVx1OEY2Q1x1NjIxMFx1OTc1OVx1NjAwMSBpbXBvcnRcdUZGMUJcbiAgICAvLyBcdTVDMEZcdTdBMEJcdTVFOEZcdTdBRUZcdUZGMDhtcC0qXHVGRjA5XHU3NTMxXHU1Qjk4XHU2NUI5XHU3RjE2XHU4QkQxXHU1NjY4XHU1N0ZBXHU0RThFIHVzaW5nQ29tcG9uZW50cyBcdTUzOUZcdTc1MUZcdTU5MDRcdTc0MDZcdUZGMENcdTYzMDJcdThGN0RcdThCRTVcdTYzRDJcdTRFRjZcdTRGMUFcdTVCRkNcdTgxRjRcdTdFQzRcdTRFRjZcdTg4QUJcdThGNkNcdTRFM0FcdTY3MkFcdTc3RTVcdTUyQThcdTYwMDFcdTdFQzRcdTRFRjZcdTVFNzZcdTYyQTVcdTk1MTkgcmVzb2x2ZUR5bmFtaWNDb21wb25lbnRcdTMwMDJcbiAgICAuLi4oIXByb2Nlc3MuZW52LlVOSV9QTEFURk9STT8uc3RhcnRzV2l0aCgnbXAtJylcbiAgICAgID8gW3VuaUVhc3ljb21QbHVnaW4oeyBleGNsdWRlOiBVTklfRUFTWUNPTV9FWENMVURFIH0pXVxuICAgICAgOiBbXSksXG4gICAgdW5pTGF5b3V0c1BsdWdpbih7XG4gICAgICBsYXlvdXREaXI6ICdzcmMvbGF5b3V0cycsXG4gICAgICBsYXlvdXQ6ICdkZWZhdWx0J1xuICAgIH0pLFxuICAgIHVuaVJvb3RYKHtcbiAgICAgIGVuYWJsZWRHbG9iYWxSZWY6IGZhbHNlLFxuICAgICAgcm9vdEZpbGVOYW1lOiAnQXBwLmt1J1xuICAgIH0pLFxuICAgIC8vIG1hbmlmZXN0Lmpzb24gXHU3NTMxIG1hbmlmZXN0LmNvbmZpZy50cyBcdTc1MUZcdTYyMTBcdUZGMDhcdTVGQzVcdTk4N0JcdTU3MjggdW5pKCkgXHU0RTRCXHU1MjREXHU2Q0U4XHU1MThDXHVGRjA5XHUzMDAyXG4gICAgLy8gXHUyNkEwXHVGRTBGIFx1NkNFOFx1NjEwRlx1NjVGNlx1NUU4Rlx1RkYxQXVuaS1hcHAgXHU1NzI4XHU3RjE2XHU4QkQxXHU4RkRCXHU3QTBCXHU1NDJGXHU1MkE4XHU2NUY2XHVGRjA4dml0ZSBcdTRFNEJcdTUyNERcdUZGMDlcdTVDMzFcdThCRkJcdThENzAgbWFuaWZlc3QuanNvbiBcdTVFNzZcdTdGMTNcdTVCNThcdTYyMTBcdThGREJcdTdBMEJcdTdFQTcgb25jZVx1RkYwQ1xuICAgIC8vIFx1NjcyQ1x1NjNEMlx1NEVGNlx1NTE5OVx1NzZEOFx1NTNEMVx1NzUxRlx1NTcyOCBjb25maWdSZXNvbHZlZFx1RkYwQ1x1NkMzOFx1OEZEQ1x1NjY1QVx1NEUwMFx1NkI2NSBcdTIwMTRcdTIwMTQgXHU2NTM5XHU0RTg2IG1hbmlmZXN0LmNvbmZpZy50cyBcdTU0MEVcdUZGMENcdTY3MkNcdTZCMjFcdTdGMTZcdThCRDFcdTc1MjhcdTc2ODRcbiAgICAvLyBcdTRFQ0RcdTY2MkZcdTc4QzFcdTc2RDhcdTRFMEFcdTc2ODRcdTY1RTcgbWFuaWZlc3QuanNvblx1RkYwQ1x1ODk4MVx1NTE4RFx1OEREMVx1NEUwMFx1NkIyMVx1NjI0RFx1NzUxRlx1NjU0OFx1MzAwMlx1NjI0MFx1NEVFNSBtYW5pZmVzdC5qc29uIFx1NUZDNVx1OTg3Qlx1OERERlx1Nzc0MFx1OTE0RFx1N0Y2RVx1NEUwMFx1OEQ3N1x1NjNEMFx1NEVBNFxuICAgIC8vIFx1RkYwOFx1NUMyNFx1NTE3Nlx1NTNEMVx1NzI0OFx1NTI0RFx1RkYxQVx1NUI4M1x1NTFCM1x1NUI5QVx1NEVBN1x1NzI2OVx1OTFDQ1x1NzY4NCBhcHBpZCAvIHZlcnNpb25Db2RlXHVGRjA5XHUzMDAyXG4gICAgVW5pTWFuaWZlc3QobWFuaWZlc3RQbHVnaW5PcHRpb25zKSxcbiAgICB1bmkoKSxcbiAgICAuLi53ZWFwcFRhaWx3aW5kY3NzUGx1Z2lucyxcbiAgICAuLi4oaXNWaXN1YWxpemVyXG4gICAgICA/IFtcbiAgICAgICAgICB2aXN1YWxpemVyKHtcbiAgICAgICAgICAgIGZpbGVuYW1lOiByZXNvbHZlKHByb2plY3RSb290LCAnc3RhdHMuaHRtbCcpLFxuICAgICAgICAgICAgdGl0bGU6ICd1bmliZXN0WCBcdTRFQTdcdTcyNjlcdTRGNTNcdTc5RUZcdTUyMDZcdTY3OTBcdTYyQTVcdTU0NEEnLFxuICAgICAgICAgICAgb3BlbjogcHJvY2Vzcy5lbnYuVklTVUFMSVpFUl9PUEVOID8gcHJvY2Vzcy5lbnYuVklTVUFMSVpFUl9PUEVOID09PSAndHJ1ZScgOiB0cnVlLFxuICAgICAgICAgICAgZ3ppcFNpemU6IHRydWUsXG4gICAgICAgICAgICBicm90bGlTaXplOiB0cnVlXG4gICAgICAgICAgfSkgYXMgUGx1Z2luT3B0aW9uXG4gICAgICAgIF1cbiAgICAgIDogW10pLFxuICAgIC8vIFx1Njc4NFx1NUVGQVx1NTE0M1x1NEZFMVx1NjA2Rlx1ODFFQVx1NTJBOFx1NkNFOFx1NTE2NVx1NjNEMlx1NEVGNlx1RkYxQVx1NTQxMSBIVE1MIFx1NkNFOFx1NTE2NSBtZXRhW25hbWU9XCJhcHAtaW5mb1wiXVx1MzAwMVx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRiBfX0FQUF9JTkZPX18gXHU0RTBFXHU2M0E3XHU1MjM2XHU1M0YwXHU1RkJEXHU2ODA3XG4gICAgdml0ZVBsdWdpbkFwcGluZm8oe1xuICAgICAgZW5hYmxlTG9nOiB0cnVlLFxuICAgICAgZW5hYmxlTWV0YTogdHJ1ZSxcbiAgICAgIGVuYWJsZUdsb2JhbDogdHJ1ZVxuICAgIH0pLFxuICAgIC8vIFx1OTc1OVx1NjAwMVx1OEQ0NFx1NkU5MFx1ODFFQVx1NTJBOFx1NTMxNlx1NTM4Qlx1N0YyOVx1NjNEMlx1NEVGNlx1RkYxQVx1NTcyOFx1Njc4NFx1NUVGQVx1OTYzNlx1NkJCNVx1NTM4Qlx1N0YyOVx1NjI1M1x1NTMwNVx1NTZGRVx1NzI0N1x1OEQ0NFx1NkU5MFxuICAgIC4uLihpc0J1aWxkXG4gICAgICA/IFtcbiAgICAgICAgICBWaXRlSW1hZ2VPcHRpbWl6ZXIoe1xuICAgICAgICAgICAgcG5nOiB7IHF1YWxpdHk6IDgwLCBjb21wcmVzc2lvbkxldmVsOiA5IH0sXG4gICAgICAgICAgICBqcGVnOiB7IHF1YWxpdHk6IDgwIH0sXG4gICAgICAgICAgICBqcGc6IHsgcXVhbGl0eTogODAgfSxcbiAgICAgICAgICAgIHdlYnA6IHsgcXVhbGl0eTogODAgfSxcbiAgICAgICAgICAgIGxvZ1N0YXRzOiB0cnVlXG4gICAgICAgICAgfSkgYXMgUGx1Z2luT3B0aW9uXG4gICAgICAgIF1cbiAgICAgIDogW10pLFxuICAgIC8vIFx1NjcyQ1x1NTczMCBNb2NrIFx1NEUyRFx1OTVGNFx1NEVGNlx1NjNEMlx1NEVGNlx1RkYxQVx1NjUyRlx1NjMwMVx1N0VBRlx1NTI0RFx1N0FFRlx1NzlCQlx1N0VCRlx1ODA1NFx1OEMwM1x1RkYwOFZJVEVfVVNFX01PQ0s9dHJ1ZSAvIHBucG0gZGV2Om1vY2tcdUZGMDlcbiAgICAuLi4oaXNNb2NrXG4gICAgICA/IFtcbiAgICAgICAgICB2aXRlTW9ja1NlcnZlKHtcbiAgICAgICAgICAgIG1vY2tQYXRoOiAnbW9jaycsXG4gICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICB3YXRjaEZpbGVzOiB0cnVlLFxuICAgICAgICAgICAgbG9nZ2VyOiB0cnVlXG4gICAgICAgICAgfSkgYXMgUGx1Z2luT3B0aW9uXG4gICAgICAgIF1cbiAgICAgIDogW10pLFxuICAgIC8vIFx1NzlGQlx1NTJBOFx1N0FFRlx1NzcxRlx1NjczQVx1OEMwM1x1OEJENVx1NURFNVx1NTE3NyB2Q29uc29sZVx1RkYwOFx1NEVDNVx1NTcyOCBXZWIvSDUgXHU0RTE0XHU1RjAwXHU1NDJGXHU2NUY2XHU2Q0U4XHU1MTY1XHVGRjBDXHU1OTgyIHBucG0gZGV2OnZjb25zb2xlXHVGRjA5XG4gICAgLi4uKGlzVkNvbnNvbGVcbiAgICAgID8gW1xuICAgICAgICAgIHZpdGVWQ29uc29sZSh7XG4gICAgICAgICAgICBlbnRyeTogW1xuICAgICAgICAgICAgICByZXNvbHZlKHByb2plY3RSb290LCAnbWFpbi51dHMnKSxcbiAgICAgICAgICAgICAgcmVzb2x2ZShwcm9qZWN0Um9vdCwgJ21haW4nKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGVuYWJsZWQ6IGlzVkNvbnNvbGUsXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgbWF4TG9nTnVtYmVyOiAxMDAwLFxuICAgICAgICAgICAgICB0aGVtZTogJ2RhcmsnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3VzdG9tSGlkZTogJ2xvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCJ2Y29uc29sZT1mYWxzZVwiKSdcbiAgICAgICAgICB9KSBhcyBQbHVnaW5PcHRpb25cbiAgICAgICAgXVxuICAgICAgOiBbXSlcbiAgXVxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy9yb290LXBsdWdpbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy9yb290LXBsdWdpbi50c1wiO2ltcG9ydCBmcyBmcm9tICdub2RlOmZzJztcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnO1xuaW1wb3J0IHR5cGUgeyBQbHVnaW4gfSBmcm9tICd2aXRlJztcblxuLyoqXG4gKiBcdTlBN0NcdTVDRjBcdThGNkNcdThGREVcdTVCNTdcdTdCMjYgaGVscGVyXHVGRjA4XHU0RTBFIHVuaS1sYXlvdXRzLXBsdWdpbiBcdTRFMkRcdTRGRERcdTYzMDFcdTRFMDBcdTgxRjRcdUZGMDlcbiAqL1xuZnVuY3Rpb24ga2ViYWJDYXNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW2EtejAtOV0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFx1NUI1N1x1N0IyNlx1NEUzMlx1OEY2QyBQYXNjYWxDYXNlIFx1N0VDNFx1NEVGNlx1NTQwRFx1RkYwOFx1NTk4MiBBcHAua3UgLT4gQXBwS3VcdUZGMENBcHBSb290IC0+IEFwcFJvb3RcdUZGMENnbG9iYWwtcm9vdCAtPiBHbG9iYWxSb290XHVGRjA5XG4gKi9cbmZ1bmN0aW9uIHRvUGFzY2FsQ2FzZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzdHJcbiAgICAucmVwbGFjZSgvWy4tXShcXHcpL2csIChfLCBjOiBzdHJpbmcpID0+IGMudG9VcHBlckNhc2UoKSlcbiAgICAucmVwbGFjZSgvXlthLXpdLywgKGM6IHN0cmluZykgPT4gYy50b1VwcGVyQ2FzZSgpKTtcbn1cblxuLyoqXG4gKiBBcHBSb290LnV2dWUgLyBBcHAua3UudXZ1ZSBcdTVERjJcdTU4RjBcdTY2MEVcdTc2ODRcdTk4NzVcdTk3NjJcdTUzQzJcdTY1NzBcdTc2N0RcdTU0MERcdTUzNTVcdUZGMDhcdTRFMEVcdTY4MzlcdTdFQzRcdTRFRjZcdTRFMkQgZGVmaW5lUHJvcHMgXHU3Njg0XHU5NTJFXHU0RTAwXHU0RTAwXHU1QkY5XHU1RTk0XHVGRjA5XHUzMDAyXG4gKiBcdTZDRThcdTUxNjVcdTk1MkVcdTZDMzhcdThGREMgXHUyMjg2IFx1NThGMFx1NjYwRVx1OTUyRVx1RkYxQVx1OTA3Rlx1NTE0RFx1OTg3NVx1OTc2Mlx1NjVCMFx1NTNDMlx1NjU3MFx1NjcyQVx1NThGMFx1NjYwRVx1NjVGNlx1ODhBQlx1NkNFOFx1NTE2NVx1NTIzMFx1NjgzOVx1N0VDNFx1NEVGNlx1NUJGQ1x1ODFGNFx1N0YxNlx1OEJEMVx1NjJBNVx1OTUxOVx1RkYxQlxuICogXHU2NzJBXHU2NzY1XHU2NUIwXHU1ODlFXHU5ODc1XHU5NzYyXHU1M0MyXHU2NTcwXHU5NTJFXHU5NzAwXHU0RTA5XHU1OTA0XHU1NDBDXHU2QjY1XHVGRjFBZGVmaW5lUGFnZSAvIHBhZ2VzLmNvbmZpZy5qc29uIFx1MjE5MiBcdTY3MkNcdTc2N0RcdTU0MERcdTUzNTUgXHUyMTkyIFx1NjgzOVx1N0VDNFx1NEVGNiBkZWZpbmVQcm9wc1x1MzAwMlxuICovXG5jb25zdCBST09UX1BST1BfS0VZUzogc3RyaW5nW10gPSBbXG4gICdsYXlvdXQnLFxuICAnc2hvd0JhY2snLFxuICAnaGlkZU5hdmJhcicsXG4gICdoaWRlU3RhdHVzQmFyJyxcbiAgJ2VuYWJsZVB1bGxEb3duUmVmcmVzaCcsXG4gICdjdXN0b21QYWdlQ2xhc3MnLFxuICAnY3VzdG9tUGFnZVN0eWxlJyxcbiAgJ3N0eWxlJ1xuXTtcblxuLyoqXG4gKiBcdTY4MzlcdTYzNkVcdTk4NzVcdTk3NjJcdTUzQzJcdTY1NzBcdTc1MUZcdTYyMTBcdTRGMjBcdTdFRDlcdTUzMDVcdTg4RjlcdTdFQzRcdTRFRjZcdTc2ODQgcHJvcHMgXHU1QzVFXHU2MDI3XHU1QjU3XHU3QjI2XHU0RTMyXHUzMDAyXG4gKiBcdTc1MUZcdTYyMTBcdTg5QzRcdTUyMTlcdTVGQzVcdTk4N0JcdTRFMEUgdW5pLWxheW91dHMtcGx1Z2luLnRzXHVGRjA4Mzg0fjQwNiBcdTg4NEMgYXR0cnMgXHU3NTFGXHU2MjEwXHVGRjA5XHU0RkREXHU2MzAxXHU1QjhDXHU1MTY4XHU0RTAwXHU4MUY0XHVGRjBDXG4gKiBcdTRGRERcdThCQzEgXHU2ODM5XHU3RUM0XHU0RUY2IFx1NEUwRSBMYXlvdXRDb21wb25lbnQgXHU2NTM2XHU1MjMwXHU1NDBDXHU0RTAwXHU1OTU3XHU5ODc1XHU5NzYyXHU1M0MyXHU2NTcwXHUzMDAyXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkUGFnZUF0dHJzKHBhcmFtczogUmVjb3JkPHN0cmluZywgYW55Pik6IHN0cmluZyB7XG4gIGxldCBhdHRycyA9ICcnO1xuICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IHZhbCA9IHBhcmFtc1trZXldO1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGtleSA9PT0gJ2NsYXNzJyB8fCBrZXkgPT09ICdjdXN0b21DbGFzcycpIHtcbiAgICAgICAgYXR0cnMgKz0gYCA6Y3VzdG9tLXBhZ2UtY2xhc3M9XCInJHt2YWwucmVwbGFjZSgvJy9nLCAnXFxcXFxcJycpfSdcImA7XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnY3VzdG9tU3R5bGUnKSB7XG4gICAgICAgIGF0dHJzICs9IGAgOmN1c3RvbS1wYWdlLXN0eWxlPVwiJyR7dmFsLnJlcGxhY2UoLycvZywgJ1xcXFxcXCcnKX0nXCJgO1xuICAgICAgfVxuICAgICAgYXR0cnMgKz0gYCA6JHtrZWJhYkNhc2Uoa2V5KX09XCInJHt2YWwucmVwbGFjZSgvJy9nLCAnXFxcXFxcJycpfSdcImA7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWwgPT09ICdib29sZWFuJykge1xuICAgICAgYXR0cnMgKz0gYCA6JHtrZWJhYkNhc2Uoa2V5KX09XCIke3ZhbH1cImA7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgLy8gXHU0RTNBXHU0RTg2XHU5MDdGXHU1MTREXHU0RTBFIFZ1ZSBcdTUzOUZcdTc1MUYgY2xhc3Mvc3R5bGUgXHU1QzVFXHU2MDI3XHU1MUIyXHU3QTgxXHVGRjBDXHU1OTgyXHU2NzlDXHU2NjJGIHN0eWxlIFx1OTUyRVx1NjYyMFx1NUMwNFx1NEUzQSBwYWdlLXN0eWxlXG4gICAgICBjb25zdCBwcm9wTmFtZSA9IGtleSA9PT0gJ3N0eWxlJyA/ICdwYWdlLXN0eWxlJyA6IGtlYmFiQ2FzZShrZXkpO1xuICAgICAgYXR0cnMgKz0gYCA6JHtwcm9wTmFtZX09XCIke0pTT04uc3RyaW5naWZ5KHZhbCkucmVwbGFjZSgvXCIvZywgJ1xcJycpfVwiYDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYXR0cnM7XG59XG5cbmV4cG9ydCB0eXBlIFVuaVJvb3RYT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1ODY1QVx1NjJERlx1ODI4Mlx1NzBCOVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZW5hYmxlZFZpcnR1YWxIb3N0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1NTE2OFx1NUM0MCByZWZcdUZGMDhcdTVGNTNcdTRFM0EgdHJ1ZSBcdTY1RjZcdTRFM0FcdTY4MzlcdTdFQzRcdTRFRjZcdTZERkJcdTUyQTAgcmVmPVwidW5pS3VSb290XCJcdUZGMENcdTYyMTZcdTgwMDVcdTRGN0ZcdTc1MjggdGVtcGxhdGUgXHU0RTBBXHU2MzA3XHU1QjlBXHU3Njg0IHJvb3QgXHU1QzVFXHU2MDI3XHVGRjA5XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBlbmFibGVkR2xvYmFsUmVmPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFx1NjgzOVx1NjU4N1x1NEVGNlx1NTQwRFx1RkYwQ1x1NjVFMFx1OTcwMFx1NjQzQVx1NUUyNlx1NjI2OVx1NUM1NVx1NTQwRFx1RkYwQ1x1NTk4MiAnQXBwUm9vdCcgXHU2MjE2ICdBcHAua3UnXG4gICAqIEBkZWZhdWx0ICdBcHAua3UnXG4gICAqL1xuICByb290RmlsZU5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBcdTk3MDBcdTg5ODFcdTYzOTJcdTk2NjRcdTY4MzlcdTdFQzRcdTRFRjZcdTc2ODRcdTk4NzVcdTk3NjJcdUZGMENcdTY1MkZcdTYzMDEgZ2xvYiBcdTYyMTZcdThERUZcdTVGODRcdTVCNTBcdTRFMzJcdTUzMzlcdTkxNERcbiAgICogQGV4YW1wbGVcbiAgICogYGBgXG4gICAqIFsncGFnZXMvc29tZScsICdwYWdlcy9leGNsdWRlLyonXVxuICAgKiBgYGBcbiAgICovXG4gIGV4Y2x1ZGVQYWdlcz86IHN0cmluZyB8IHN0cmluZ1tdO1xufTtcblxuLy8gXHU4MUVBXHU1MkE4XHU3RUQ5XHU2MjQwXHU2NzA5XHU5ODc1XHU5NzYyXHU1OTU3XHU0RTBBXHU2ODM5XHU1MzA1XHU4OEY5XHU3RUM0XHU0RUY2XHVGRjA4XHU1OTgyIEFwcFJvb3QudXZ1ZSAvIEFwcC5rdS51dnVlXHVGRjA5XHVGRjBDXHU1RTc2XHU2MjhBXHU1RjUzXHU1MjREXHU5ODc1XHU5NzYyXHU3Njg0XHU1M0MyXHU2NTcwXHU5MDFBXHU4RkM3IHByb3BzIFx1NkNFOFx1NTE2NVxuZXhwb3J0IGZ1bmN0aW9uIHVuaVJvb3RYKG9wdGlvbnM6IFVuaVJvb3RYT3B0aW9ucyA9IHt9KTogUGx1Z2luIHtcbiAgY29uc3Qge1xuICAgIGVuYWJsZWRHbG9iYWxSZWYgPSBmYWxzZSxcbiAgICByb290RmlsZU5hbWUgPSAnQXBwLmt1JyxcbiAgICBleGNsdWRlUGFnZXNcbiAgfSA9IG9wdGlvbnM7XG5cbiAgY29uc3QgcmF3Um9vdEZpbGVOYW1lID0gcm9vdEZpbGVOYW1lLnJlcGxhY2UoL1xcLih1dnVlfHZ1ZSkkLywgJycpO1xuICBjb25zdCBjb21wb25lbnROYW1lID0gdG9QYXNjYWxDYXNlKHJhd1Jvb3RGaWxlTmFtZSk7XG5cbiAgY29uc3QgZXhjbHVkZUxpc3QgPSBleGNsdWRlUGFnZXNcbiAgICA/IChBcnJheS5pc0FycmF5KGV4Y2x1ZGVQYWdlcykgPyBleGNsdWRlUGFnZXMgOiBbZXhjbHVkZVBhZ2VzXSlcbiAgICA6IFtdO1xuXG4gIGxldCBwcm9qZWN0Um9vdCA9IHByb2Nlc3MuY3dkKCk7XG4gIGxldCBwYWdlc0pzb25QYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCAncGFnZXMuanNvbicpO1xuXG4gIC8vIHBhZ2VzLmpzb24gXHU5ODc1XHU5NzYyXHU1M0MyXHU2NTcwXHU3RjEzXHU1QjU4XHVGRjA4a2V5OiBcdTc2RjhcdTVCRjlcdTk4NzlcdTc2RUVcdTY4MzlcdTc2RUVcdTVGNTVcdTc2ODRcdTY1RTBcdTYyNjlcdTVDNTVcdTU0MERcdTk4NzVcdTk3NjJcdThERUZcdTVGODRcdUZGMENcdTU5ODIgXCJzcmMvcGFnZXMvaW5kZXgvaW5kZXhcIlx1RkYwOVxuICBsZXQgY2FjaGVkUGFnZXNQYXJhbXM6IE1hcDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIGFueT4+IHwgbnVsbCA9IG51bGw7XG4gIGxldCBsYXN0UGFnZXNKc29uTVRpbWUgPSAwO1xuXG4gIC8vIFx1ODlFM1x1Njc5MCBwYWdlcy5qc29uXHVGRjFBXHU0RTNCXHU1MzA1ICsgXHU1MjA2XHU1MzA1XHU5ODc1XHU5NzYyXHVGRjBDXHU2M0QwXHU1M0Q2XHU5NjY0IHBhdGgvbGF5b3V0IFx1NTkxNlx1NzY4NFx1NTE2OFx1OTBFOFx1ODFFQVx1NUI5QVx1NEU0OVx1NTNDMlx1NjU3MFxuICBmdW5jdGlvbiBsb2FkUGFnZXNQYXJhbXMoKSB7XG4gICAgY29uc3QgcGFyYW1zQnlQYXRoID0gbmV3IE1hcDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIGFueT4+KCk7XG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKHBhZ2VzSnNvblBhdGgpKSB7XG4gICAgICByZXR1cm4gcGFyYW1zQnlQYXRoO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmF3Q29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhwYWdlc0pzb25QYXRoLCAndXRmLTgnKTtcbiAgICAgIGNvbnN0IGNsZWFuSnNvbiA9IHJhd0NvbnRlbnQucmVwbGFjZSgvXFwvXFwqW1xcc1xcU10qP1xcKlxcL3woW15cXFxcOl18XilcXC9cXC8uKiQvZ20sICckMScpO1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoY2xlYW5Kc29uKSBhcyB7IHBhZ2VzPzogYW55W107IHN1YlBhY2thZ2VzPzogYW55W10gfTtcblxuICAgICAgY29uc3QgY29sbGVjdCA9IChwYWdlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHBhZ2UgPT0gbnVsbCB8fCB0eXBlb2YgcGFnZS5wYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBub3JtUGF0aCA9IHBhZ2UucGF0aC5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgICAgICAgY29uc3QgcGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHBhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGlmIChrZXkgIT09ICdwYXRoJykge1xuICAgICAgICAgICAgcGFyYW1zW2tleV0gPSBwYWdlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcGFyYW1zQnlQYXRoLnNldChub3JtUGF0aCwgcGFyYW1zKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIDEuIFx1NEUzQlx1NTMwNVx1OTg3NVx1OTc2MlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5wYWdlcykpIHtcbiAgICAgICAgZGF0YS5wYWdlcy5mb3JFYWNoKGNvbGxlY3QpO1xuICAgICAgfVxuICAgICAgLy8gMi4gXHU1MjA2XHU1MzA1XHU5ODc1XHU5NzYyXHVGRjA4cGF0aCBcdTk3MDBcdTRFMEUgcm9vdCBcdTYyRkNcdTYzQTVcdTYyMTBcdTVCOENcdTY1NzRcdThERUZcdTVGODRcdUZGMDlcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuc3ViUGFja2FnZXMpKSB7XG4gICAgICAgIGRhdGEuc3ViUGFja2FnZXMuZm9yRWFjaCgoc3ViUGtnKSA9PiB7XG4gICAgICAgICAgaWYgKHN1YlBrZyA9PSBudWxsIHx8IHR5cGVvZiBzdWJQa2cucm9vdCAhPT0gJ3N0cmluZycgfHwgIUFycmF5LmlzQXJyYXkoc3ViUGtnLnBhZ2VzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdWJQa2cucGFnZXMuZm9yRWFjaCgocGFnZTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAocGFnZSA9PSBudWxsIHx8IHR5cGVvZiBwYWdlLnBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbGxlY3Qoe1xuICAgICAgICAgICAgICAuLi5wYWdlLFxuICAgICAgICAgICAgICBwYXRoOiBwYXRoLmpvaW4oc3ViUGtnLnJvb3QsIHBhZ2UucGF0aCkucmVwbGFjZSgvXFxcXC9nLCAnLycpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbdW5pUm9vdFhdIEZhaWxlZCB0byBwYXJzZSBwYWdlcy5qc29uOicsIGUpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zQnlQYXRoO1xuICB9XG5cbiAgLy8gXHU4M0I3XHU1M0Q2XHU2NzAwXHU2NUIwXHU3Njg0XHU5ODc1XHU5NzYyXHU1M0MyXHU2NTcwXHVGRjA4XHU1RTI2IG10aW1lIFx1N0YxM1x1NUI1OFx1NjgyMVx1OUE4Q1x1RkYwOVxuICBmdW5jdGlvbiBnZXRQYWdlc1BhcmFtcygpIHtcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMocGFnZXNKc29uUGF0aCkpIHtcbiAgICAgIHJldHVybiBuZXcgTWFwPHN0cmluZywgUmVjb3JkPHN0cmluZywgYW55Pj4oKTtcbiAgICB9XG4gICAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKHBhZ2VzSnNvblBhdGgpO1xuICAgIGlmICghY2FjaGVkUGFnZXNQYXJhbXMgfHwgc3RhdC5tdGltZU1zICE9PSBsYXN0UGFnZXNKc29uTVRpbWUpIHtcbiAgICAgIGNhY2hlZFBhZ2VzUGFyYW1zID0gbG9hZFBhZ2VzUGFyYW1zKCk7XG4gICAgICBsYXN0UGFnZXNKc29uTVRpbWUgPSBzdGF0Lm10aW1lTXM7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRQYWdlc1BhcmFtcztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3VuaVJvb3RYJyxcbiAgICBjb25maWdSZXNvbHZlZChjb25maWc6IGFueSkge1xuICAgICAgcHJvamVjdFJvb3QgPSBjb25maWcucm9vdCB8fCBwcm9jZXNzLmN3ZCgpO1xuICAgICAgcGFnZXNKc29uUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgJ3BhZ2VzLmpzb24nKTtcbiAgICB9LFxuICAgIHRyYW5zZm9ybShjb2RlOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRJZCA9IGlkLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcbiAgICAgIC8vIFx1NUZDNVx1OTg3Qlx1NjYyRlx1OTg3Nlx1N0VBNyBTRkMgXHU2NTg3XHU0RUY2XHVGRjBDXHU1RkZEXHU3NTY1XHU2MjQwXHU2NzA5XHU1RTI2ID8gXHU3Njg0XHU1QjUwXHU4QkY3XHU2QzQyXHVGRjA4XHU1OTgyID92dWUmdHlwZT1zY3JpcHQgXHU3QjQ5XHVGRjA5XG4gICAgICBpZiAobm9ybWFsaXplZElkLmluY2x1ZGVzKCc/JykpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAoIW5vcm1hbGl6ZWRJZC5lbmRzV2l0aCgnLnV2dWUnKSAmJiAhbm9ybWFsaXplZElkLmVuZHNXaXRoKCcudnVlJykpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICAvLyBcdTUzRUFcdTU5MDRcdTc0MDYgc3JjL3BhZ2VzIFx1NTQ4QyBzcmMvc3ViIFx1NEUwQlx1NzY4NFx1OTc1RVx1N0VDNFx1NEVGNiB1dnVlIFx1OTg3NVx1OTc2Mlx1RkYwQ1x1NjM5Mlx1OTY2NCBBcHAudXZ1ZVx1MzAwMVx1NjgzOVx1N0VDNFx1NEVGNlx1NjU4N1x1NEVGNlx1NEVFNVx1NTNDQVx1N0VDNFx1NEVGNi9cdTg5QzZcdTU2RkVcdTVCNTBcdTc2RUVcdTVGNTVcbiAgICAgIGNvbnN0IGlzUGFnZSA9IG5vcm1hbGl6ZWRJZC5pbmNsdWRlcygnc3JjL3BhZ2VzLycpIHx8IG5vcm1hbGl6ZWRJZC5pbmNsdWRlcygnc3JjL3N1Yi8nKTtcbiAgICAgIGlmIChcbiAgICAgICAgIWlzUGFnZVxuICAgICAgICB8fCBub3JtYWxpemVkSWQuaW5jbHVkZXMoJy9jb21wb25lbnRzLycpXG4gICAgICAgIHx8IG5vcm1hbGl6ZWRJZC5pbmNsdWRlcygnL3ZpZXdzLycpXG4gICAgICAgIHx8IG5vcm1hbGl6ZWRJZC5pbmNsdWRlcyhgJHtyYXdSb290RmlsZU5hbWV9LnV2dWVgKVxuICAgICAgICB8fCBub3JtYWxpemVkSWQuaW5jbHVkZXMoYCR7cmF3Um9vdEZpbGVOYW1lfS52dWVgKVxuICAgICAgICB8fCBub3JtYWxpemVkSWQuaW5jbHVkZXMoJ0FwcC5rdS51dnVlJylcbiAgICAgICAgfHwgbm9ybWFsaXplZElkLmluY2x1ZGVzKCdBcHBSb290LnV2dWUnKVxuICAgICAgICB8fCBub3JtYWxpemVkSWQuaW5jbHVkZXMoJy9zcmMvbGF5b3V0cy8nKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBcdTgxRUFcdTUyQThcdTY4QzBcdTZENEJcdTVFNzZcdTc1MUZcdTYyMTBcdTY4MzlcdTdFQzRcdTRFRjZcdTY1ODdcdTRFRjZcdTRFOEVcdTk4NzlcdTc2RUVcdTY4MzlcdTc2RUVcdTVGNTVcbiAgICAgIGxldCB0YXJnZXRGaWxlRXh0ID0gJy51dnVlJztcbiAgICAgIGNvbnN0IHV2dWVQYXRoID0gcGF0aC5qb2luKHByb2plY3RSb290LCBgJHtyYXdSb290RmlsZU5hbWV9LnV2dWVgKTtcbiAgICAgIGNvbnN0IHZ1ZVBhdGggPSBwYXRoLmpvaW4ocHJvamVjdFJvb3QsIGAke3Jhd1Jvb3RGaWxlTmFtZX0udnVlYCk7XG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyh2dWVQYXRoKSAmJiAhZnMuZXhpc3RzU3luYyh1dnVlUGF0aCkpIHtcbiAgICAgICAgdGFyZ2V0RmlsZUV4dCA9ICcudnVlJztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRhcmdldEZpbGVQYXRoID0gcGF0aC5qb2luKHByb2plY3RSb290LCBgJHtyYXdSb290RmlsZU5hbWV9JHt0YXJnZXRGaWxlRXh0fWApO1xuXG4gICAgICBpZiAoIWZzLmV4aXN0c1N5bmModGFyZ2V0RmlsZVBhdGgpKSB7XG4gICAgICAgIC8vIFx1ODJFNVx1NUI1OFx1NTcyOFx1NzNCMFx1NjcwOVx1NzY4NCBBcHAua3UudXZ1ZVx1RkYwQ1x1NEYxOFx1NTE0OFx1NTkwRFx1NTIzNlx1NEY1Q1x1NEUzQVx1NTdGQVx1Nzg0MFx1NEVFNVx1NEZERFx1NzU1OVx1NURGMlx1NjcwOVx1NzY4NFx1NUUwM1x1NUM0MFx1NTQ4Q1x1NEUzQlx1OTg5OFx1ODBGRFx1NTI5QlxuICAgICAgICBjb25zdCBsZWdhY3lQYXRoID0gcGF0aC5qb2luKHByb2plY3RSb290LCAnQXBwLmt1LnV2dWUnKTtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMobGVnYWN5UGF0aCkpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZnMuY29weUZpbGVTeW5jKGxlZ2FjeVBhdGgsIHRhcmdldEZpbGVQYXRoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbdW5pUm9vdFhdIFx1NURGMlx1NTdGQVx1NEU4RSBBcHAua3UudXZ1ZSBcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTAgJHtyYXdSb290RmlsZU5hbWV9JHt0YXJnZXRGaWxlRXh0fSBcdTY1ODdcdTRFRjZgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFt1bmlSb290WF0gXHU1OTBEXHU1MjM2XHU3NTFGXHU2MjEwICR7cmF3Um9vdEZpbGVOYW1lfSR7dGFyZ2V0RmlsZUV4dH0gXHU1OTMxXHU4RDI1OmAsIGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkZWZhdWx0Q29udGVudCA9IGA8dGVtcGxhdGU+XFxuXFx0PHZpZXcgY2xhc3M9XCJyb290LWNvbnRhaW5lclwiIHN0eWxlPVwiZmxleDogMTtcIj5cXG5cXHRcXHQ8c2xvdD48L3Nsb3Q+XFxuXFx0PC92aWV3PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidXRzXCI+XFxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XFxuXFx0bGF5b3V0OiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJycgfSxcXG5cXHRzaG93QmFjazogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH0sXFxuXFx0aGlkZU5hdmJhcjogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxcblxcdGhpZGVTdGF0dXNCYXI6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcXG5cXHRlbmFibGVQdWxsRG93blJlZnJlc2g6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcXG5cXHRjdXN0b21QYWdlQ2xhc3M6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnJyB9LFxcblxcdGN1c3RvbVBhZ2VTdHlsZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcnIH0sXFxuXFx0cGFnZVN0eWxlOiB7IHR5cGU6IE9iamVjdCwgZGVmYXVsdDogKCkgPT4gKHt9KSB9XFxufSk7XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxcbi5yb290LWNvbnRhaW5lciB7XFxuXFx0ZmxleDogMTtcXG59XFxuPC9zdHlsZT5cXG5gO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHRhcmdldEZpbGVQYXRoLCBkZWZhdWx0Q29udGVudCwgJ3V0Zi04Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgW3VuaVJvb3RYXSBcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBcdTRFODZcdTdGM0FcdTVDMTFcdTc2ODQgJHtyYXdSb290RmlsZU5hbWV9JHt0YXJnZXRGaWxlRXh0fSBcdTY1ODdcdTRFRjZgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFt1bmlSb290WF0gXHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwICR7cmF3Um9vdEZpbGVOYW1lfSR7dGFyZ2V0RmlsZUV4dH0gXHU1OTMxXHU4RDI1OmAsIGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBcdTRGOURcdTYzNkUgcGFnZXMuanNvbiBcdTY3RTVcdTYyN0VcdTVGNTNcdTUyNERcdTk4NzVcdTk3NjJcdTc2ODRcdTgxRUFcdTVCOUFcdTRFNDlcdTUzQzJcdTY1NzBcdUZGMDhcdTRFMEUgdW5pLWxheW91dHMtcGx1Z2luIFx1NTQwQ1x1NkU5MFx1RkYwOVx1RkYwQ1x1NzUxRlx1NjIxMFx1NkNFOFx1NTE2NVx1NTIzMFx1NjgzOVx1N0VDNFx1NEVGNlx1NzY4NCBwcm9wc1xuICAgICAgY29uc3QgcmVsYXRpdmVJZCA9IHBhdGgucmVsYXRpdmUocHJvamVjdFJvb3QsIG5vcm1hbGl6ZWRJZCkucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xuICAgICAgY29uc3QgY2xlYW5SZWxhdGl2ZUlkID0gcmVsYXRpdmVJZC5yZXBsYWNlKC9cXC4odXZ1ZXx2dWUpKFxcPy4qKT8kLywgJycpO1xuXG4gICAgICAvLyBcdTYzOTJcdTk2NjRcdTYzOTJcdTk2NjRcdTUyMTdcdTg4NjhcdTRFMkRcdTc2ODRcdTk4NzVcdTk3NjJcbiAgICAgIGlmIChleGNsdWRlTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGlzRXhjbHVkZWQgPSBleGNsdWRlTGlzdC5zb21lKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgaWYgKHBhdHRlcm4uaW5jbHVkZXMoJyonKSkge1xuICAgICAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGBeJHtwYXR0ZXJuLnJlcGxhY2UoL1xcKi9nLCAnLionKX0kYCk7XG4gICAgICAgICAgICByZXR1cm4gcmVnZXgudGVzdChjbGVhblJlbGF0aXZlSWQpIHx8IHJlZ2V4LnRlc3QocmVsYXRpdmVJZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjbGVhblJlbGF0aXZlSWQuaW5jbHVkZXMocGF0dGVybikgfHwgcmVsYXRpdmVJZC5pbmNsdWRlcyhwYXR0ZXJuKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc0V4Y2x1ZGVkKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFnZVBhcmFtcyA9IGdldFBhZ2VzUGFyYW1zKCkuZ2V0KGNsZWFuUmVsYXRpdmVJZCk7XG4gICAgICAvLyBcdTc2N0RcdTU0MERcdTUzNTVcdThGQzdcdTZFRTRcdUZGMUFcdTZDRThcdTUxNjVcdTk1MkVcdTVGQzVcdTk4N0IgXHUyMjg2IFx1NjgzOVx1N0VDNFx1NEVGNlx1NThGMFx1NjYwRVx1OTUyRVx1RkYwQ1x1NjcyQVx1NThGMFx1NjYwRVx1NzY4NFx1NjVCMFx1NTg5RVx1NTNDMlx1NjU3MFx1NTNFQSB3YXJuIFx1OERGM1x1OEZDN1x1RkYwQ1x1OTA3Rlx1NTE0RFx1N0YxNlx1OEJEMVx1NjJBNVx1OTUxOVxuICAgICAgY29uc3QgZmlsdGVyZWRQYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcbiAgICAgIGlmIChwYWdlUGFyYW1zKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHBhZ2VQYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGlmICghUk9PVF9QUk9QX0tFWVMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbdW5pUm9vdFhdIFx1OTg3NVx1OTc2MiAke2NsZWFuUmVsYXRpdmVJZH0gXHU3Njg0XHU1M0MyXHU2NTcwIFwiJHtrZXl9XCIgXHU2NzJBXHU1NzI4ICR7cmF3Um9vdEZpbGVOYW1lfSBcdTRFMkRcdTU4RjBcdTY2MEUgcHJvcHNcdUZGMENcdTVERjJcdThERjNcdThGQzdcdTZDRThcdTUxNjVcdUZGMDhcdTk3MDBcdTU0MENcdTZCNjVcdTYyNjlcdTVDNTUgUk9PVF9QUk9QX0tFWVMgXHU0RTBFIGRlZmluZVByb3BzXHVGRjA5YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGZpbHRlcmVkUGFyYW1zW2tleV0gPSBwYWdlUGFyYW1zW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY29uc3Qgcm9vdEF0dHJzID0gYnVpbGRQYWdlQXR0cnMoZmlsdGVyZWRQYXJhbXMpO1xuICAgICAgaWYgKHR5cGVvZiAodGhpcyBhcyBhbnkpLmFkZFdhdGNoRmlsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAodGhpcyBhcyBhbnkpLmFkZFdhdGNoRmlsZShwYWdlc0pzb25QYXRoKTtcbiAgICAgIH1cblxuICAgICAgbGV0IG5ld0NvZGUgPSBjb2RlO1xuXG4gICAgICAvLyAxLiBcdTVDMDYgdGVtcGxhdGUgXHU1MTg1XHU3Njg0XHU1MTg1XHU1QkI5XHU3NTI4IDxDb21wb25lbnROYW1lPiBcdTUzMDVcdTg4RjlcdUZGMDhcdTVFMjZcdTRFMEFcdTVGNTNcdTUyNERcdTk4NzVcdTk3NjJcdTc2ODRcdTUzQzJcdTY1NzAgcHJvcHMgXHU0RTBFIFx1NTNFRlx1OTAwOSByZWZcdUZGMDlcbiAgICAgIGNvbnN0IHN0YXJ0VGVtcGxhdGVJZHggPSBjb2RlLmluZGV4T2YoJzx0ZW1wbGF0ZScpO1xuICAgICAgY29uc3QgZW5kVGVtcGxhdGVJZHggPSBjb2RlLmxhc3RJbmRleE9mKCc8L3RlbXBsYXRlPicpO1xuICAgICAgaWYgKHN0YXJ0VGVtcGxhdGVJZHggIT09IC0xICYmIGVuZFRlbXBsYXRlSWR4ICE9PSAtMSAmJiBzdGFydFRlbXBsYXRlSWR4IDwgZW5kVGVtcGxhdGVJZHgpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRUYWdFbmRJZHggPSBjb2RlLmluZGV4T2YoJz4nLCBzdGFydFRlbXBsYXRlSWR4KTtcbiAgICAgICAgaWYgKHN0YXJ0VGFnRW5kSWR4ICE9PSAtMSAmJiBzdGFydFRhZ0VuZElkeCA8IGVuZFRlbXBsYXRlSWR4KSB7XG4gICAgICAgICAgY29uc3QgdGVtcGxhdGVBdHRycyA9IGNvZGUuc2xpY2Uoc3RhcnRUZW1wbGF0ZUlkeCArIDksIHN0YXJ0VGFnRW5kSWR4KTtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gY29kZS5zbGljZShzdGFydFRhZ0VuZElkeCArIDEsIGVuZFRlbXBsYXRlSWR4KTtcbiAgICAgICAgICBjb25zdCBiZWZvcmUgPSBjb2RlLnNsaWNlKDAsIHN0YXJ0VGVtcGxhdGVJZHgpO1xuICAgICAgICAgIGNvbnN0IGFmdGVyID0gY29kZS5zbGljZShlbmRUZW1wbGF0ZUlkeCArIDExKTtcblxuICAgICAgICAgIC8vIFx1NjNEMFx1NTNENiB0ZW1wbGF0ZSBcdTRFMEFcdTc2ODQgcm9vdCBcdTVDNUVcdTYwMjdcdUZGMDhcdTRGOEJcdTU5ODIgPHRlbXBsYXRlIHJvb3Q9XCJteVJvb3RcIj5cdUZGMDlcbiAgICAgICAgICBsZXQgcm9vdFJlZlN0ciA9ICcnO1xuICAgICAgICAgIGNvbnN0IHJvb3RNYXRjaCA9IHRlbXBsYXRlQXR0cnMubWF0Y2goL1xcYnJvb3Q9KFtcIiddKSguKj8pXFwxLyk7XG4gICAgICAgICAgaWYgKHJvb3RNYXRjaCAmJiByb290TWF0Y2hbMl0pIHtcbiAgICAgICAgICAgIHJvb3RSZWZTdHIgPSBgIHJlZj1cIiR7cm9vdE1hdGNoWzJdfVwiYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoZW5hYmxlZEdsb2JhbFJlZikge1xuICAgICAgICAgICAgcm9vdFJlZlN0ciA9ICcgcmVmPVwidW5pS3VSb290XCInO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFx1NkUwNVx1NzQwNiB0ZW1wbGF0ZSBcdTRFMEFcdTc2ODQgcm9vdCBcdTVDNUVcdTYwMjdcbiAgICAgICAgICBjb25zdCBjbGVhblRlbXBsYXRlQXR0cnMgPSB0ZW1wbGF0ZUF0dHJzLnJlcGxhY2UoL1xccypcXGJyb290PShbXCInXSkuKj9cXDEvLCAnJyk7XG5cbiAgICAgICAgICBuZXdDb2RlID0gYCR7YmVmb3JlfTx0ZW1wbGF0ZSR7Y2xlYW5UZW1wbGF0ZUF0dHJzfT5cXG4gIDwke2NvbXBvbmVudE5hbWV9JHtyb290UmVmU3RyfSR7cm9vdEF0dHJzfT5cXG4ke2NvbnRlbnR9XFxuICA8LyR7Y29tcG9uZW50TmFtZX0+XFxuPC90ZW1wbGF0ZT4ke2FmdGVyfWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBcdTZDQTFcdTY3MDkgdGVtcGxhdGVcdUZGMENcdTRFMERcdTU5MDRcdTc0MDZcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIDIuIFx1NTcyOCBzY3JpcHQgc2V0dXAgXHU1MTg1XHU1RjE1XHU1MTY1XHU2ODM5XHU3RUM0XHU0RUY2XG4gICAgICBjb25zdCBpbXBvcnRTdGF0ZW1lbnQgPSBgaW1wb3J0ICR7Y29tcG9uZW50TmFtZX0gZnJvbSAnQC8ke3Jhd1Jvb3RGaWxlTmFtZX0ke3RhcmdldEZpbGVFeHR9J2A7XG4gICAgICBjb25zdCBzY3JpcHRTZXR1cFJlZ2V4ID0gLzxzY3JpcHRcXHNbXj5dKlxcYnNldHVwXFxiW14+XSo+LztcbiAgICAgIGlmIChzY3JpcHRTZXR1cFJlZ2V4LnRlc3QobmV3Q29kZSkpIHtcbiAgICAgICAgbmV3Q29kZSA9IG5ld0NvZGUucmVwbGFjZShzY3JpcHRTZXR1cFJlZ2V4LCAobWF0Y2gpID0+IHtcbiAgICAgICAgICByZXR1cm4gYCR7bWF0Y2h9XFxuJHtpbXBvcnRTdGF0ZW1lbnR9YDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3Q29kZSA9IGAke25ld0NvZGV9XFxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidXRzXCI+XFxuJHtpbXBvcnRTdGF0ZW1lbnR9XFxuPC9zY3JpcHQ+XFxuYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogbmV3Q29kZSxcbiAgICAgICAgbWFwOiBudWxsXG4gICAgICB9O1xuICAgIH0sXG4gICAgZ2VuZXJhdGVCdW5kbGUodGhpczogYW55LCBfOiBhbnksIGJ1bmRsZTogYW55KSB7XG4gICAgICAvLyBcdTUxN0NcdTVCQjkgdW5pLWFwcCBcdTVDMEZcdTdBMEJcdTVFOEZcdTdBRUZcdTVCRjlcdTY4MzlcdTc2RUVcdTVGNTVcdTU0MkJcdTcwQjlcdTY1ODdcdTRFRjZcdTU0MERcdTdFQzRcdTRFRjZcdUZGMDhcdTU5ODIgQXBwLmt1LnV2dWVcdUZGMDlcdTZBMjFcdTY3N0ZcdTdGMTZcdThCRDFcdTY1RjZcdTVDMDZcdTUyNERcdTdGMDBcdTYyMkFcdTY1QURcdTRFM0EgQXBwLnd4bWwgXHU3Njg0XHU3RjNBXHU5Njc3XG4gICAgICBpZiAocmF3Um9vdEZpbGVOYW1lLmluY2x1ZGVzKCcuJykpIHtcbiAgICAgICAgY29uc3QgbWluaVByb2dyYW1FeHRzID0gWycud3htbCcsICcuYXhtbCcsICcudHRtbCcsICcuc3dhbicsICcucW1sJ107XG4gICAgICAgIGZvciAoY29uc3QgZXh0IG9mIG1pbmlQcm9ncmFtRXh0cykge1xuICAgICAgICAgIGNvbnN0IHNyY0ZpbGUgPSBgQXBwJHtleHR9YDtcbiAgICAgICAgICBjb25zdCBkZXN0RmlsZSA9IGAke3Jhd1Jvb3RGaWxlTmFtZX0ke2V4dH1gO1xuICAgICAgICAgIGlmIChidW5kbGVbc3JjRmlsZV0gJiYgIWJ1bmRsZVtkZXN0RmlsZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdEZpbGUoe1xuICAgICAgICAgICAgICB0eXBlOiAnYXNzZXQnLFxuICAgICAgICAgICAgICBmaWxlTmFtZTogZGVzdEZpbGUsXG4gICAgICAgICAgICAgIHNvdXJjZTogKGJ1bmRsZVtzcmNGaWxlXSBhcyBhbnkpLnNvdXJjZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB3cml0ZUJ1bmRsZShvcHRpb25zOiBhbnkpIHtcbiAgICAgIC8vIFx1NEVBN1x1NzI2OVx1ODQzRFx1NzZEOFx1NTQwRVx1NzY4NFx1NTNDQ1x1OTFDRFx1NTE1Q1x1NUU5NVx1RkYwQ1x1Nzg2RVx1NEZERFx1NzhDMVx1NzZEOFx1NzZFRVx1NUY1NVx1NEUyRFx1NTQwQ1x1NkI2NVx1NUI1OFx1NTcyOFx1NUI4Q1x1NjU3NFx1NzY4NFx1N0VDNFx1NEVGNlx1NkEyMVx1Njc3Rlx1NjU4N1x1NEVGNlxuICAgICAgaWYgKHJhd1Jvb3RGaWxlTmFtZS5pbmNsdWRlcygnLicpKSB7XG4gICAgICAgIGNvbnN0IG91dERpciA9IG9wdGlvbnMuZGlyO1xuICAgICAgICBpZiAoIW91dERpcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtaW5pUHJvZ3JhbUV4dHMgPSBbJy53eG1sJywgJy5heG1sJywgJy50dG1sJywgJy5zd2FuJywgJy5xbWwnXTtcbiAgICAgICAgZm9yIChjb25zdCBleHQgb2YgbWluaVByb2dyYW1FeHRzKSB7XG4gICAgICAgICAgY29uc3Qgc3JjRmlsZSA9IHBhdGguam9pbihvdXREaXIsIGBBcHAke2V4dH1gKTtcbiAgICAgICAgICBjb25zdCBkZXN0RmlsZSA9IHBhdGguam9pbihvdXREaXIsIGAke3Jhd1Jvb3RGaWxlTmFtZX0ke2V4dH1gKTtcbiAgICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhzcmNGaWxlKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZnMuY29weUZpbGVTeW5jKHNyY0ZpbGUsIGRlc3RGaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgeyB1bmlSb290WCBhcyBhdXRvUm9vdFBsdWdpbiB9O1xuZXhwb3J0IGRlZmF1bHQgdW5pUm9vdFg7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy92aXRlLXBsdWdpbi1jbGVhbi1sb2dnZXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnMvdml0ZS1wbHVnaW4tY2xlYW4tbG9nZ2VyLnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW4gfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciB9IGZyb20gJ3ZpdGUnO1xuXG5leHBvcnQgdHlwZSBDbGVhbkxvZ2dlck9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBcdTY2MkZcdTU0MjZcdTVCOENcdTUxNjhcdThGQzdcdTZFRTRcdTYzQTdcdTUyMzZcdTUzRjBcdTYyNDBcdTY3MDkgd2FybmluZyBcdTdFQTdcdTUyMkJcdThGOTNcdTUxRkFcdUZGMENcdTlFRDhcdThCQTQgdHJ1ZVxuICAgKi9cbiAgc2lsZW5jZUFsbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBcdTk3MDBcdThGQzdcdTZFRTRcdTc2ODRcdTUxNzNcdTk1MkVcdThCQ0RcdTUzMzlcdTkxNERcdTUyMTdcdTg4NjhcdUZGMDhcdTY1MkZcdTYzMDFcdTVCNTdcdTdCMjZcdTRFMzJcdTYyMTZcdTZCNjNcdTUyMTlcdUZGMDlcbiAgICovXG4gIGlnbm9yZWRQYXR0ZXJucz86IChzdHJpbmcgfCBSZWdFeHApW107XG59O1xuXG5jb25zdCBERUZBVUxUX0lHTk9SRURfUEFUVEVSTlM6IChzdHJpbmcgfCBSZWdFeHApW10gPSBbXG4gICctLWFsbG93QXJiaXRyYXJ5RXh0ZW5zaW9ucycsXG4gICdhbGxvd0FyYml0cmFyeUV4dGVuc2lvbnMnLFxuICAncmljZS11aScsXG4gICd1c2VDaGlsZHJlbi51dHMnLFxuICAnTm8gb3ZlcmxvYWQgbWF0Y2hlcyB0aGlzIGNhbGwnLFxuICAnbmVpdGhlciB0eXBlIHN1ZmZpY2llbnRseSBvdmVybGFwcycsXG4gICdDb252ZXJzaW9uIG9mIHR5cGUnLFxuICAndXRmOCdcbl07XG5cbmxldCBpc0NvbnNvbGVQYXRjaGVkID0gZmFsc2U7XG5sZXQgZ2xvYmFsU2lsZW5jZUFsbCA9IHRydWU7XG5sZXQgZ2xvYmFsSWdub3JlZFBhdHRlcm5zOiAoc3RyaW5nIHwgUmVnRXhwKVtdID0gREVGQVVMVF9JR05PUkVEX1BBVFRFUk5TO1xuXG5mdW5jdGlvbiBjaGVja1Nob3VsZElnbm9yZSh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKGdsb2JhbFNpbGVuY2VBbGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZ2xvYmFsSWdub3JlZFBhdHRlcm5zLnNvbWUoKHBhdHRlcm4pID0+IHtcbiAgICBpZiAodHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGV4dC5pbmNsdWRlcyhwYXR0ZXJuKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdCh0ZXh0KTtcbiAgfSk7XG59XG5cbi8qKlxuICogXHU2M0E3XHU1MjM2XHU1M0YwXHU4QjY2XHU1NDRBXHU0RTBFXHU0RUUzXHU3ODAxXHU3MjQ3XHU2QkI1XHU1MUMwXHU1MzE2IFZpdGUgXHU2M0QyXHU0RUY2XG4gKlxuICogXHU1MjlGXHU4MEZEXHVGRjFBXG4gKiAxLiBcdThGQzdcdTZFRTQgVml0ZSBcdTVGMDBcdTUzRDFcdTY3MERcdTUyQTFcdTU2NjhcdTUzQ0FcdTY3ODRcdTVFRkFcdTk2MzZcdTZCQjVcdTc2ODQgd2FybmluZyBcdTY1RTVcdTVGRDdcdThGOTNcdTUxRkFcdUZGMDhcdTRGRERcdTc1NTkgZXJyb3IgXHU0RTBFIGluZm9cdUZGMDlcbiAqIDIuIFx1NjJFNlx1NjIyQVx1N0IyQ1x1NEUwOVx1NjVCOVx1NUU5M1x1NTNDQVx1NjNEMlx1NEVGNlx1NzZGNFx1NjNBNVx1OEMwM1x1NzUyOFx1NzY4NCBjb25zb2xlLndhcm4gXHU0RUU1XHU1M0NBXHU3RDI3XHU5NjhGXHU1MTc2XHU1NDBFXHU3Njg0XHU1QjlBXHU0RjREXHU4ODRDXHU0RTBFXHU0RUUzXHU3ODAxXHU3MjQ3XHU2QkI1XG4gKiAzLiBcdTYyRTZcdTYyMkEgRENsb3VkIFx1N0YxNlx1OEJEMVx1NjcxRlx1OTAxQVx1OEZDNyBjb25zb2xlLmxvZyBcdTYyNTNcdTUzNzBcdTc2ODQgV0FSTl9CTE9DS1x1RkYwOFxcdUZFRkZcdUZGMDlcdTRFMEVcdTRFRTNcdTc4MDFcdTcyNDdcdTZCQjVcdUZGMDhDb2RlIEZyYW1lXHVGRjA5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsZWFuTG9nZ2VyUGx1Z2luKG9wdGlvbnM6IENsZWFuTG9nZ2VyT3B0aW9ucyA9IHt9KTogUGx1Z2luIHtcbiAgY29uc3Qge1xuICAgIHNpbGVuY2VBbGwgPSB0cnVlLFxuICAgIGlnbm9yZWRQYXR0ZXJucyA9IFtdXG4gIH0gPSBvcHRpb25zO1xuXG4gIGdsb2JhbFNpbGVuY2VBbGwgPSBzaWxlbmNlQWxsO1xuICBnbG9iYWxJZ25vcmVkUGF0dGVybnMgPSBbLi4uREVGQVVMVF9JR05PUkVEX1BBVFRFUk5TLCAuLi5pZ25vcmVkUGF0dGVybnNdO1xuXG4gIGZ1bmN0aW9uIHNob3VsZElnbm9yZSh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY2hlY2tTaG91bGRJZ25vcmUodGV4dCk7XG4gIH1cblxuICAvLyBcdTg4NjVcdTRFMDFcdTYyRTZcdTYyMkFcdTUxNjhcdTVDNDAgY29uc29sZS53YXJuIFx1NEUwRSBjb25zb2xlLmxvZ1x1RkYwOFx1OTYzMlx1NkI2MiBEQ2xvdWQgLyB1bmktdXRzLXYxIFx1NjI1M1x1NTM3MFx1NTQ0QVx1OEI2Nlx1NEVFM1x1NzgwMVx1NzI0N1x1NkJCNVx1RkYwOVxuICBpZiAoIWlzQ29uc29sZVBhdGNoZWQpIHtcbiAgICBpc0NvbnNvbGVQYXRjaGVkID0gdHJ1ZTtcblxuICAgIGxldCBzdXBwcmVzc0NvZGVGcmFtZUNvdW50ID0gMDtcblxuICAgIGNvbnN0IG9yaWdpbmFsQ29uc29sZVdhcm4gPSBjb25zb2xlLndhcm47XG4gICAgY29uc29sZS53YXJuID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICBjb25zdCBzdHIgPSBhcmdzLm1hcChhID0+ICh0eXBlb2YgYSA9PT0gJ3N0cmluZycgPyBhIDogKGE/Lm1lc3NhZ2UgPz8gYT8udG9TdHJpbmc/LigpID8/ICcnKSkpLmpvaW4oJyAnKTtcblxuICAgICAgLy8gXHU1OTgyXHU2NzlDXHU5NzAwXHU4OTgxXHU1RkZEXHU3NTY1XHU2QjY0IHdhcm5pbmdcbiAgICAgIGlmIChzaG91bGRJZ25vcmUoc3RyKSkge1xuICAgICAgICBzdXBwcmVzc0NvZGVGcmFtZUNvdW50ID0gMztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBcdTU5ODJcdTY3OUNcdTVGNTNcdTUyNERcdTZCNjNcdTU5MDRcdTRFOEVcdTg4QUJcdTVGRkRcdTc1NjVcdTU0NEFcdThCNjZcdTc2ODRcdTU0MEVcdTdFRURcdTVCOUFcdTRGNERcdTg4NENcdUZGMDhcdTU5ODIgXCJhdCBzcmMvc3RvcmUvdmFwb3IvYXBwLnV0czoxMDo3XCJcdUZGMDlcbiAgICAgIGlmIChzdXBwcmVzc0NvZGVGcmFtZUNvdW50ID4gMCAmJiAoc3RyLnN0YXJ0c1dpdGgoJ2F0ICcpIHx8IHN0ci5pbmNsdWRlcygnIGF0ICcpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN1cHByZXNzQ29kZUZyYW1lQ291bnQgPSAwO1xuICAgICAgb3JpZ2luYWxDb25zb2xlV2Fybi5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3JpZ2luYWxDb25zb2xlTG9nID0gY29uc29sZS5sb2c7XG5cbiAgICBjb25zb2xlLmxvZyA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgY29uc3Qgc3RyID0gYXJncy5tYXAoYSA9PiAodHlwZW9mIGEgPT09ICdzdHJpbmcnID8gYSA6IChhPy5tZXNzYWdlID8/IGE/LnRvU3RyaW5nPy4oKSA/PyAnJykpKS5qb2luKCcgJyk7XG5cbiAgICAgIC8vIFx1N0VERFx1NUJGOVx1NEUwRFx1NjJFNlx1NjIyQVx1OTUxOVx1OEJFRlx1NEZFMVx1NjA2Rlx1RkYwOFxcdTIwNjAgXHU0RTNBIERDbG91ZCBFUlJPUl9CTE9DS1x1RkYwOVxuICAgICAgaWYgKHN0ci5pbmNsdWRlcygnXFx1MjA2MCcpIHx8IHN0ci5pbmNsdWRlcygnZXJyb3I6JykgfHwgc3RyLmluY2x1ZGVzKCdFcnJvcjonKSB8fCBzdHIuaW5jbHVkZXMoJ2ZhaWxlZCcpIHx8IHN0ci5pbmNsdWRlcygnXHU1OTMxXHU4RDI1JykpIHtcbiAgICAgICAgc3VwcHJlc3NDb2RlRnJhbWVDb3VudCA9IDA7XG4gICAgICAgIG9yaWdpbmFsQ29uc29sZUxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyAxLiBEQ2xvdWQgXHU3RjE2XHU4QkQxXHU1NDRBXHU4QjY2XHU2ODA3XHU4QkM2XHU3QjI2IChcXHVGRUZGIFx1NEUzQSBTUEVDSUFMX0NIQVJTLldBUk5fQkxPQ0spXG4gICAgICBpZiAoc3RyLmluY2x1ZGVzKCdcXHVGRUZGJykpIHtcbiAgICAgICAgc3VwcHJlc3NDb2RlRnJhbWVDb3VudCA9IDM7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gMi4gXHU3RDI3XHU4RERGXHU1NzI4XHU1NDRBXHU4QjY2XHU1NDBFXHU5NzYyXHU3Njg0XHU1QjlBXHU0RjREXHU4ODRDIChhdCByZWxhdGl2ZUZpbGVOYW1lOmxpbmU6Y29sdW1uKVxuICAgICAgaWYgKHN1cHByZXNzQ29kZUZyYW1lQ291bnQgPiAwICYmIChzdHIuc3RhcnRzV2l0aCgnYXQgJykgfHwgc3RyLmluY2x1ZGVzKCcgYXQgJykpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gMy4gXHU0RUUzXHU3ODAxXHU3MjQ3XHU2QkI1IENvZGUgRnJhbWUgXHU2ODNDXHU1RjBGXHVGRjA4XHU0RjhCXHU1OTgyIFwiICA4IHwgLi4uXCJcdTMwMDFcIj4gMTAgfCAuLi5cIiBcdTYyMTYgXCIgICAgIHwgICBeXl5eXCJcdUZGMDlcbiAgICAgIGNvbnN0IGlzQ29kZUZyYW1lID0gLyg/Ol58XFxuKVxccyooPzo+XFxzKik/XFxkK1xccypcXHwvLnRlc3Qoc3RyKSB8fCAvKD86XnxcXG4pXFxzKlxcfFxccypcXF4rLy50ZXN0KHN0cik7XG4gICAgICBpZiAoaXNDb2RlRnJhbWUgJiYgKHN1cHByZXNzQ29kZUZyYW1lQ291bnQgPiAwIHx8IGdsb2JhbFNpbGVuY2VBbGwpKSB7XG4gICAgICAgIHN1cHByZXNzQ29kZUZyYW1lQ291bnQgPSBNYXRoLm1heCgwLCBzdXBwcmVzc0NvZGVGcmFtZUNvdW50IC0gMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gNC4gXHU3QTdBXHU4ODRDXHU4RERGXHU5NjhGXHU1NzI4XHU0RUUzXHU3ODAxXHU3MjQ3XHU2QkI1XHU1NDBFXHU2NUY2XHVGRjBDXHU1OTgyXHU2NzlDXHU1MjFBXHU2MjREXHU2MjkxXHU1MjM2XHU0RTg2XHU1NDRBXHU4QjY2XHVGRjBDXHU0RTVGXHU1NDAzXHU2Mzg5XHU5MDdGXHU1MTREXHU1OTFBXHU0RjU5XHU3QTdBXHU4ODRDXG4gICAgICBpZiAoc3VwcHJlc3NDb2RlRnJhbWVDb3VudCA+IDAgJiYgc3RyLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzdXBwcmVzc0NvZGVGcmFtZUNvdW50ID0gMDtcbiAgICAgIG9yaWdpbmFsQ29uc29sZUxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAndml0ZS1wbHVnaW4tY2xlYW4tbG9nZ2VyJyxcbiAgICBlbmZvcmNlOiAncHJlJyxcbiAgICBjb25maWcoY29uZmlnKSB7XG4gICAgICAvLyAxLiBcdTZDRThcdTUxNjVcdTgxRUFcdTVCOUFcdTRFNDkgVml0ZSBMb2dnZXJcbiAgICAgIGNvbnN0IGN1c3RvbUxvZ2dlciA9IGNyZWF0ZUxvZ2dlcihjb25maWcubG9nTGV2ZWwsIHtcbiAgICAgICAgYWxsb3dDbGVhclNjcmVlbjogY29uZmlnLmNsZWFyU2NyZWVuXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG9yaWdpbmFsV2FybiA9IGN1c3RvbUxvZ2dlci53YXJuO1xuICAgICAgY29uc3Qgb3JpZ2luYWxXYXJuT25jZSA9IGN1c3RvbUxvZ2dlci53YXJuT25jZTtcblxuICAgICAgY3VzdG9tTG9nZ2VyLndhcm4gPSAobXNnLCBvcHRzKSA9PiB7XG4gICAgICAgIGlmIChzaG91bGRJZ25vcmUobXNnKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBvcmlnaW5hbFdhcm4obXNnLCBvcHRzKTtcbiAgICAgIH07XG5cbiAgICAgIGN1c3RvbUxvZ2dlci53YXJuT25jZSA9IChtc2csIG9wdHMpID0+IHtcbiAgICAgICAgaWYgKHNob3VsZElnbm9yZShtc2cpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG9yaWdpbmFsV2Fybk9uY2UobXNnLCBvcHRzKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbmZpZy5jdXN0b21Mb2dnZXIgPSBjdXN0b21Mb2dnZXI7XG5cbiAgICAgIC8vIDIuIFx1NkNFOFx1NTE2NSBSb2xsdXAgXHU2Nzg0XHU1RUZBXHU5NjM2XHU2QkI1XHU3Njg0IG9ud2FybiBcdTYyRTZcdTYyMkFcbiAgICAgIGlmICghY29uZmlnLmJ1aWxkKSB7XG4gICAgICAgIGNvbmZpZy5idWlsZCA9IHt9O1xuICAgICAgfVxuICAgICAgaWYgKCFjb25maWcuYnVpbGQucm9sbHVwT3B0aW9ucykge1xuICAgICAgICBjb25maWcuYnVpbGQucm9sbHVwT3B0aW9ucyA9IHt9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcmV2T253YXJuID0gY29uZmlnLmJ1aWxkLnJvbGx1cE9wdGlvbnMub253YXJuO1xuICAgICAgY29uZmlnLmJ1aWxkLnJvbGx1cE9wdGlvbnMub253YXJuID0gKHdhcm5pbmcsIGRlZmF1bHRIYW5kbGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IG1zZyA9IHdhcm5pbmcubWVzc2FnZSB8fCAnJztcbiAgICAgICAgaWYgKHNob3VsZElnbm9yZShtc2cpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmV2T253YXJuKSB7XG4gICAgICAgICAgcHJldk9ud2Fybih3YXJuaW5nLCBkZWZhdWx0SGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVmYXVsdEhhbmRsZXIod2FybmluZyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbmZpZ1Jlc29sdmVkKGNvbmZpZykge1xuICAgICAgLy8gXHU3ODZFXHU0RkREXHU1NzI4XHU1MTc2XHU0RUQ2XHU2M0QyXHU0RUY2XHVGRjA4XHU1OTgyIEBkY2xvdWRpby92aXRlLXBsdWdpbi11bmlcdUZGMDlcdTU0MDhcdTVFNzZcdTU0MEVcdUZGMENcdTRFQ0RcdTcxMzZcdTRGRERcdTYzMDFcdTYyRTZcdTYyMkFcdTc1MUZcdTY1NDhcbiAgICAgIGlmIChjb25maWcuY3VzdG9tTG9nZ2VyKSB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsV2FybiA9IGNvbmZpZy5jdXN0b21Mb2dnZXIud2FybjtcbiAgICAgICAgY29uZmlnLmN1c3RvbUxvZ2dlci53YXJuID0gKG1zZywgb3B0cykgPT4ge1xuICAgICAgICAgIGlmIChzaG91bGRJZ25vcmUobXNnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcmlnaW5hbFdhcm4obXNnLCBvcHRzKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxXYXJuT25jZSA9IGNvbmZpZy5jdXN0b21Mb2dnZXIud2Fybk9uY2U7XG4gICAgICAgIGNvbmZpZy5jdXN0b21Mb2dnZXIud2Fybk9uY2UgPSAobXNnLCBvcHRzKSA9PiB7XG4gICAgICAgICAgaWYgKHNob3VsZElnbm9yZShtc2cpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIG9yaWdpbmFsV2Fybk9uY2UobXNnLCBvcHRzKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5idWlsZD8ucm9sbHVwT3B0aW9ucykge1xuICAgICAgICBjb25zdCBwcmV2T253YXJuID0gY29uZmlnLmJ1aWxkLnJvbGx1cE9wdGlvbnMub253YXJuO1xuICAgICAgICBjb25maWcuYnVpbGQucm9sbHVwT3B0aW9ucy5vbndhcm4gPSAod2FybmluZywgZGVmYXVsdEhhbmRsZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBtc2cgPSB3YXJuaW5nLm1lc3NhZ2UgfHwgJyc7XG4gICAgICAgICAgaWYgKHNob3VsZElnbm9yZShtc2cpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwcmV2T253YXJuKSB7XG4gICAgICAgICAgICBwcmV2T253YXJuKHdhcm5pbmcsIGRlZmF1bHRIYW5kbGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWZhdWx0SGFuZGxlcih3YXJuaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnMvdml0ZS1wbHVnaW4tZWRpdG9yLXZlcnNpb24udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnMvdml0ZS1wbHVnaW4tZWRpdG9yLXZlcnNpb24udHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbiB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgZXhlY0ZpbGVTeW5jIH0gZnJvbSAnbm9kZTpjaGlsZF9wcm9jZXNzJztcbmltcG9ydCB7IGRpcm5hbWUsIHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJztcblxuY29uc3QgcHJvamVjdFJvb3QgPSByZXNvbHZlKGRpcm5hbWUoZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpKSwgJy4uJyk7XG5jb25zdCBzeW5jU2NyaXB0ID0gcmVzb2x2ZShwcm9qZWN0Um9vdCwgJ3NjcmlwdHMvc3luYy1oYnVpbGRlcngubWpzJyk7XG5cbi8qKlxuICogXHU3RjE2XHU4RjkxXHU1NjY4XHU3MjQ4XHU2NzJDXHU1QkY5XHU5RjUwXHU2M0QwXHU3OTNBXHUzMDAyXG4gKlxuICogXHU0RTNBXHU0RUMwXHU0RTQ4XHU5NzAwXHU4OTgxXHU1QjgzXHVGRjFBXHU5ODc5XHU3NkVFIHBpbiBcdTRFODYgNCBcdTRFMkEgQGRjbG91ZGlvLyogXHU0RjlEXHU4RDU2XHVGRjBDXHU1RTk0XHU1RjUzXHU0RTBFXHU2NzJDXHU2NzNBIEhCdWlsZGVyWCAvIEhCdWlsZGVyViBcdTc2ODRcdTdGMTZcdThCRDFcdTU2NjhcbiAqIFx1NzI0OFx1NjcyQ1x1NUJGOVx1OUY1MFx1RkYwOFx1OEJFNlx1ODlDMSBzY3JpcHRzL3N5bmMtaGJ1aWxkZXJ4Lm1qcyBcdTU5MzRcdTkwRThcdUZGMDlcdTMwMDJcdTgwMEMgdml0ZS5jb25maWcudHMgXHU2NjJGKipcdTYyNDBcdTY3MDkqKlx1NTE2NVx1NTNFM1x1NzY4NFx1NTUyRlx1NEUwMFxuICogXHU1RkM1XHU3RUNGXHU0RTRCXHU4REVGXHVGRjFBXG4gKiAgIC0gcG5wbSBkZXYgLyBkZXY6d2ViIC8gZGV2Om1vY2sgLyBkZXY6dmNvbnNvbGVcbiAqICAgLSBwbnBtIGRldjptcC0qXHUzMDAxZGV2OmFwcC0qXHVGRjA4XHU4RkQ5XHU0RTlCXHU3NkY0XHU4RkRFIHVuaS1sYXVuY2hcdUZGMENcdTRFMERcdTdFQ0ZcdThGQzdcdTRFRkJcdTRGNTVcdTUzMDVcdTg4QzVcdTgxMUFcdTY3MkNcdUZGMDlcbiAqICAgLSBwbnBtIGJ1aWxkOmg1IC8gYnVpbGQ6dGVzdCAvIGJ1aWxkOnByb2RcbiAqICAgLSBcdTRFRTVcdTUzQ0FcdTU3MjhcdTdGMTZcdThGOTFcdTU2NjhcdTkxQ0NcdTcwQjlcdTMwMENcdThGRDBcdTg4NENcdTMwMERcdTMwMENcdTUzRDFcdTg4NENcdTMwMERcdTYzMDlcdTk0QUUgXHUyMDE0XHUyMDE0IFx1OTBBM1x1Njc2MVx1OERFRlx1NjYyRlx1N0YxNlx1OEY5MVx1NTY2OFx1ODFFQVx1NURGMVx1OEQ3NyB1bmkuanMgXHU1RTc2XHU1MkEwXHU4RjdEXHU2NzJDXHU2NTg3XHU0RUY2XHU3Njg0XG4gKlxuICogKipcdTUzRUFcdTYzRDBcdTc5M0FcdTMwMDFcdTRFMERcdTk2M0JcdTY1QUQqKlx1RkYxQVx1NzI0OFx1NjcyQ1x1NEUwRFx1NEUwMFx1ODFGNFx1NjcyQVx1NUZDNVx1N0FDQlx1NTIzQlx1NTFGQVx1OTUxOVx1RkYwQ1x1NEY0Nlx1NEUwMFx1NjVFNlx1NTFGQVx1OTUxOVx1RkYwQ1x1NzVDN1x1NzJCNlx1OTAxQVx1NUUzOFx1NjYyRiBBUEkgXHU4ODRDXHU0RTNBXHU1REVFXHU1RjAyXHU2MjE2XHU3QzdCXHU1NzhCXG4gKiBcdTRFMERcdTUzMzlcdTkxNERcdThGRDlcdTc5Q0RcdTc3MEJcdTRFMERcdTUxRkFcdTY4MzlcdTU2RTBcdTc2ODRcdTk1RUVcdTk4OThcdUZGMENcdTYyNDBcdTRFRTVcdTZCQ0ZcdTZCMjFcdTkwRkRcdTYzRDBcdTkxOTJcdTRFMDBcdTRFMEJcdUZGMENcdTc1MzFcdTVGMDBcdTUzRDFcdTgwMDVcdTgxRUFcdTVERjFcdTUyMjRcdTY1QURcdTg5ODFcdTRFMERcdTg5ODFcdTUxNDhcdTU0MENcdTZCNjVcdTMwMDJcbiAqXG4gKiBcdTYzRDBcdTc5M0FcdTY1ODdcdTY4NDhcdTc1MzEgc2NyaXB0cy9zeW5jLWhidWlsZGVyeC5tanMgXHU3Njg0IC0tcHJlZmxpZ2h0IFx1NzZGNFx1NjNBNVx1NTE5OVx1NTIzMCBzdGRlcnIgXHUyMDE0XHUyMDE0IFx1OEZEOVx1OTFDQ1x1NEUwRFx1ODBGRFx1NzUyOFxuICogY29uc29sZS53YXJuXHVGRjBDXHU1NkUwXHU0RTNBXHU2NzJDXHU5ODc5XHU3NkVFXHU3Njg0IGNsZWFuTG9nZ2VyUGx1Z2luKHsgc2lsZW5jZUFsbDogdHJ1ZSB9KSBcdTg4NjVcdTRFMDFcdTRFODZcdTUxNjhcdTVDNDAgY29uc29sZVx1RkYwQ1xuICogXHU0RjFBXHU2MjhBXHU4QjY2XHU1NDRBXHU1NDFFXHU2Mzg5XHUzMDAyXHU1NDBDXHU3NDA2XHVGRjBDXHU1QjUwXHU4RkRCXHU3QTBCXHU3NTI4IHN0ZGlvOiAnaW5oZXJpdCcgXHU3NkY0XHU5MDFBXHU3RUM4XHU3QUVGXHVGRjBDXHU0RTBEXHU1M0Q3XHU4ODY1XHU0RTAxXHU1RjcxXHU1NENEXHUzMDAyXG4gKlxuICogXHU5NzU5XHU5RUQ4XHU0RTBEXHU2MjUzXHU2MjcwXHU3Njg0XHU2MEM1XHU1MUI1XHVGRjFBXHU2NzJDXHU2NzNBXHU2Q0ExXHU4OEM1XHU3RjE2XHU4RjkxXHU1NjY4XHVGRjA4Q0lcdTMwMDFcdTRFMERcdTc1MjggSEJ1aWxkZXJYIFx1NzY4NFx1NTQwQ1x1NEU4Qlx1RkYwOVx1MzAwMXBhY2thZ2UuanNvbiBcdTkxQ0NcdTZDQTFcdTY3MDlcdThGRDlcdTUxRTBcdTRFMkFcbiAqIHBpblx1MzAwMVx1NEVFNVx1NTNDQVx1ODExQVx1NjcyQ1x1ODFFQVx1OEVBQlx1NUYwMlx1NUUzOFx1RkYwOFx1NkJENFx1NTk4MiBOb2RlIFx1NzI0OFx1NjcyQ1x1NEUwRFx1N0IyNlx1RkYwOVx1MjAxNFx1MjAxNCBcdThGRDlcdTRFOUJcdTkwRkRcdTRFMERcdThCRTVcdTU3MjhcdTY3ODRcdTVFRkFcdTY1RjZcdTUyMzdcdTVDNEZcdTMwMDJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWRpdG9yVmVyc2lvblBsdWdpbigpOiBQbHVnaW4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICd1bmliZXN0eDplZGl0b3ItdmVyc2lvbicsXG4gICAgZW5mb3JjZTogJ3ByZScsXG4gICAgLy8gY29uZmlnIFx1NjYyRlx1NjcwMFx1NjVFOVx1NzY4NFx1OTRBOVx1NUI1MFx1RkYwQ1x1NUMzRFx1OTFDRlx1NTcyOFx1N0YxNlx1OEJEMVx1NzcxRlx1NkI2M1x1NUYwMFx1NTlDQlx1NTI0RFx1NUMzMVx1NjI4QVx1NjNEMFx1NzkzQVx1NjI1M1x1NTFGQVx1Njc2NVxuICAgIGNvbmZpZygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGV4ZWNGaWxlU3luYyhwcm9jZXNzLmV4ZWNQYXRoLCBbc3luY1NjcmlwdCwgJy0tcHJlZmxpZ2h0J10sIHtcbiAgICAgICAgICBjd2Q6IHByb2plY3RSb290LFxuICAgICAgICAgIHN0ZGlvOiBbJ2lnbm9yZScsICdpbmhlcml0JywgJ2luaGVyaXQnXSxcbiAgICAgICAgICAvLyBcdTYzQTJcdTZENEJcdTg5ODFcdThENzcgcHMgLyBtZGZpbmQgXHU3QjQ5XHU1QjUwXHU4RkRCXHU3QTBCXHVGRjBDXHU3RUQ5XHU1QkJEXHU4OEQ1XHU0RTlCXG4gICAgICAgICAgdGltZW91dDogMzBfMDAwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY2F0Y2gge1xuICAgICAgICAvLyBcdTRFMERcdTRFMDBcdTgxRjRcdTY1RjYgLS1wcmVmbGlnaHQgXHU0RUU1IDMgXHU5MDAwXHU1MUZBXHVGRjBDXHU2M0QwXHU3OTNBXHU1REYyXHU3NTMxXHU1QjUwXHU4RkRCXHU3QTBCXHU3NkY0XHU2M0E1XHU1MTk5XHU1MjMwXHU3RUM4XHU3QUVGXHUzMDAyXG4gICAgICAgIC8vIFx1OEZEOVx1OTFDQ1x1NEUwMFx1NUY4Qlx1NTQxRVx1NjM4OVx1RkYxQVx1NTNFQVx1NjNEMFx1NzkzQVx1MzAwMVx1NEUwRFx1OTYzQlx1NjVBRFx1RkYwQ1x1ODExQVx1NjcyQ1x1ODFFQVx1OEVBQlx1NTFGQVx1OTVFRVx1OTg5OFx1NEU1Rlx1NEUwRFx1OEJFNVx1NUY3MVx1NTRDRFx1Njc4NFx1NUVGQVx1MzAwMlxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3ZpdGUtcGx1Z2luLWg1LW9wdGltaXplLWRlcHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnMvdml0ZS1wbHVnaW4taDUtb3B0aW1pemUtZGVwcy50c1wiO2ltcG9ydCB0eXBlIHsgUGx1Z2luLCBSZXNvbHZlZENvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuXG4vKipcbiAqIEg1IFx1NEY5RFx1OEQ1Nlx1OTg4NFx1Njc4NFx1NUVGQVx1NEYxOFx1NTMxNlx1NjNEMlx1NEVGNlxuICpcbiAqIFx1OTVFRVx1OTg5OFx1ODBDQ1x1NjY2Rlx1RkYxQVxuICogRENsb3VkIFx1NzY4NCB1bmk6dXZ1ZSBcdTYzRDJcdTRFRjZcdThCQkVcdTdGNkVcdTRFODYgYG9wdGltaXplRGVwczogeyBub0Rpc2NvdmVyeTogdHJ1ZSwgaW5jbHVkZTogW10gfWBcdUZGMENcbiAqIFx1NUI4Q1x1NTE2OFx1Nzk4MVx1NzUyOFx1NEU4NiBWaXRlIFx1NzY4NCBlc2J1aWxkIFx1OTg4NFx1Njc4NFx1NUVGQVx1RkYxQlx1NTQwQ1x1NjVGNiBEQ2xvdWQgXHU3Njg0IGNyZWF0ZU9wdGltaXplRGVwcyBcdTYyOEEgdnVlXHUzMDAxcGluaWEgXHU3QjQ5XG4gKiBcdTY4MzhcdTVGQzNcdTUzMDVcdTUyQTBcdTUxNjVcdTRFODYgZXhjbHVkZSBcdTUyMTdcdTg4NjhcdTMwMDJcdThGRDlcdTVCRkNcdTgxRjRcdTYyNDBcdTY3MDlcdTdCMkNcdTRFMDlcdTY1QjlcdTRGOURcdThENTZcdTU3MjhcdTUxQjdcdTU0MkZcdTUyQThcdTY1RjZcdTkwRkRcdTg5ODFcdTdFQ0ZcdThGQzcgVml0ZSBcdTc2ODRcdTVCOUVcdTY1RjZcdTkwMTBcdTZBMjFcdTU3NTdcbiAqIFx1OEY2Q1x1NjM2Mlx1N0JBMVx1N0VCRlx1RkYwQ1x1OTk5Nlx1NUM0Rlx1NTJBMFx1OEY3RFx1Njc4MVx1NjE2Mlx1MzAwMlxuICpcbiAqIFx1ODlFM1x1NTFCM1x1NTM5Rlx1NzQwNlx1RkYxQVxuICogXHU0RkREXHU2MzAxIG5vRGlzY292ZXJ5OiB0cnVlXHVGRjA4XHU5MDdGXHU1MTREIHNjYW5uZXIgXHU4MUVBXHU1MkE4XHU1M0QxXHU3M0IwXHU4OUU2XHU1M0QxXHU5MUNEXHU2NUIwXHU0RjE4XHU1MzE2XHVGRjA5XHVGRjBDXG4gKiBcdTRGNDZcdTVDMDZcdTY4MzhcdTVGQzNcdTU5MjdcdTRGNTNcdTc5RUZcdTRGOURcdThENTZcdTY2M0VcdTVGMEZcdTUyQTBcdTUxNjUgaW5jbHVkZSBcdTUyMTdcdTg4NjhcdUZGMENcdTU0MENcdTY1RjZcdTRFQ0UgZXhjbHVkZSBcdTUyMTdcdTg4NjhcdTRFMkRcdTc5RkJcdTk2NjRcdTVCODNcdTRFRUNcdUZGMENcbiAqIFx1OEJBOSBWaXRlIFx1NTcyOCBkZXYgc2VydmVyIFx1NTQyRlx1NTJBOFx1NjVGNlx1NEUwMFx1NkIyMVx1NjAyN1x1OTg4NFx1Njc4NFx1NUVGQVx1OEZEOVx1NEU5Qlx1NjMwN1x1NUI5QVx1NEY5RFx1OEQ1Nlx1MzAwMlxuICpcbiAqIFx1MjZBMFx1RkUwRiBcdTRFMERcdTgwRkRcdThCQkVcdTdGNkUgbm9EaXNjb3Zlcnk6IGZhbHNlXHVGRjAxXG4gKiBcdTVGMDBcdTU0MkZcdTU0MEUgc2Nhbm5lciBcdTU3MjhcdTYyNkJcdTYzQ0ZcdThGQzdcdTdBMEJcdTRFMkRcdTRGMUFcdTRFMERcdTY1QURcdTUzRDFcdTczQjBcdTY1QjBcdTRGOURcdThENTZcdUZGMENcdTg5RTZcdTUzRDFcdTkxQ0RcdTY1QjBcdTRGMThcdTUzMTZcdUZGMENcbiAqIFx1OTFDRFx1NjVCMFx1NEYxOFx1NTMxNlx1NjcxRlx1OTVGNFx1NjI0MFx1NjcwOVx1NkI2M1x1NTcyOFx1OEJGN1x1NkM0Mlx1NzY4NFx1NkEyMVx1NTc1N1x1NEYxQVx1OEZENFx1NTZERSA1MDQgKE91dGRhdGVkIE9wdGltaXplIERlcClcdTMwMDJcbiAqXG4gKiBcdTI2QTBcdUZFMEYgbm9EaXNjb3Zlcnk6IHRydWUgXHU1RTc2XHU0RTBEXHU4MEZEXHU1QjhDXHU1MTY4XHU2RDg4XHU5NjY0IDUwNFx1RkYxQVxuICogVml0ZSBcdThGRDhcdTY3MDkgY3Jhd2xlciBcdThERUZcdTVGODRcdTIwMTRcdTIwMTRcdTZENEZcdTg5QzhcdTU2NjhcdTVCOUVcdTk2NDVcdThCRjdcdTZDNDJcdTZBMjFcdTU3NTdcdTY1RjZcdUZGMENsb2FkIFx1OTRBOVx1NUI1MFx1NEYxQSByZWdpc3Rlck1pc3NpbmdJbXBvcnRcbiAqIFx1NTNEMVx1NzNCMCBzY2FubmVyIFx1NkNBMVx1NjI2Qlx1NTIzMFx1NzY4NFx1NEY5RFx1OEQ1Nlx1RkYwQ2NyYXdsZXIgXHU1M0QxXHU3M0IwXHU2NUIwXHU0RjlEXHU4RDU2XHU1NDBFXHU1NDBDXHU2ODM3XHU0RjFBXHU4QzAzXHU1RUE2IHJlcnVuXHVGRjBDcmVydW4gXHU2NzFGXHU5NUY0XHU2NUU3XG4gKiBicm93c2VySGFzaCBcdTc2ODRcdThCRjdcdTZDNDJcdTUxNjhcdTkwRTggNTA0XHUzMDAyXG4gKlxuICogNTA0IFx1NjcwMFx1NUUzOFx1ODlDMVx1NzY4NFx1ODlFNlx1NTNEMVx1NTczQVx1NjY2Rlx1RkYxQXNlcnZlci53YXJtdXAgXHU3NkY0XHU2M0E1XHU5ODg0XHU3MEVEIEg1IFx1OEZEMFx1ODg0Q1x1NjVGNlx1NTkyN1x1NjU4N1x1NEVGNlx1RkYwOHVuaS1oNS5lcy5qc1x1RkYwOVx1MzAwMlxuICogdW5pLWg1LmVzLmpzIFx1OTc1OVx1NjAwMSBpbXBvcnQgXHU0RTg2IEBkY2xvdWRpby91bmktc2hhcmVkIC8gdnVlLXJvdXRlciAvIEBkY2xvdWRpby91bmktaTE4biAvIHZ1ZShcdTIxOTJ1bmktaDUtdnVlKVx1RkYwQ1xuICogXHU4RkQ5XHU0RTlCXHU1MTY4XHU1NzI4IERDbG91ZCBcdTc2ODQgZXhjbHVkZSBcdTUyMTdcdTg4NjhcdTkxQ0NcdTMwMDFzY2FubmVyIFx1NkNBMVx1OTg4NFx1Njc4NFx1NUVGQVx1MzAwMndhcm11cCBcdTRFMDBcdThCRjdcdTZDNDJcdUZGMENjcmF3bGVyIFx1NUMzMVx1NkNCRiBpbXBvcnQgXHU5NEZFXG4gKiBcdTUzRDFcdTczQjBcdThGRDlcdTRFOUIgbWlzc2luZyBkZXAgXHUyMTkyIFx1OEMwM1x1NUVBNiByZXJ1blx1RkYwQ3JlcnVuIFx1N0E5N1x1NTNFM1x1NEUwRVx1OTk5Nlx1NUM0Rlx1OEJCRlx1OTVFRVx1OTFDRFx1NTNFMFx1NjVGNlx1NkQ0Rlx1ODlDOFx1NTY2OFx1NjUzNlx1NTIzMCA1MDRcdTMwMDJcbiAqIFx1ODlFM1x1NkNENVx1RkYxQVx1NEUwRFx1ODk4MVx1NjI4QSB1bmlSdW50aW1lRmlsZXMgXHU1MkEwXHU1MTY1IHNlcnZlci53YXJtdXAuY2xpZW50RmlsZXNcdUZGMENcdThCQTkgcmVydW4gXHU3NTMxXHU5OTk2XHU1QzRGXHU4MUVBXHU3MTM2XHU4QkY3XHU2QzQyXHU2MzA5XHU5NzAwXHU4OUU2XHU1M0QxXHUzMDAyXG4gKlxuICogXHU1M0U2XHU0RTAwXHU3QzdCXHU1NzNBXHU2NjZGXHVGRjFBdHJhbnNmb3JtIFx1OTRBOVx1NUI1MFx1NTJBOFx1NjAwMVx1NkNFOFx1NTE2NSBpbXBvcnRcdUZGMDhcdTU5ODIgdml0ZS1wbHVnaW4tdmNvbnNvbGUgXHU2MjhBIGBpbXBvcnQgVkNvbnNvbGUgZnJvbSAndmNvbnNvbGUnYFxuICogXHU2Q0U4XHU1MTY1IG1haW4udXRzXHVGRjA5XHVGRjBDc2Nhbm5lciBcdTc3MEJcdTRFMERcdTUyMzBcdUZGMENcdTk3MDBcdTkwMUFcdThGQzcgZXh0cmFJbmNsdWRlcyBcdTY2M0VcdTVGMEZcdTRGMjBcdTUxNjVcdThCQTkgc2Nhbm5lciBcdTk4ODRcdTY3ODRcdTVFRkFcdTMwMDJcbiAqIFx1OEJFNlx1ODlDMSBvbkNyYXdsRW5kIFx1NzY4NCBzY2FubmVyTWlzc2VkRGVwcyBcdTUyMDZcdTY1MkZcdTRFMEUgcmVnaXN0ZXJNaXNzaW5nSW1wb3J0IFx1NzY4NCBkZWJvdW5jZWRQcm9jZXNzaW5nXHUzMDAyXG4gKi9cblxudHlwZSBINU9wdGltaXplRGVwc09wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBcdTY2MkZcdTU0MjZcdTU0MkZcdTc1MjhcdTk4ODRcdTY3ODRcdTVFRkFcdTRGMThcdTUzMTZcdUZGMDhcdTRFQzVcdTU3MjggSDUvV2ViIFx1NUU3M1x1NTNGMFx1NEUxNCBkZXYgXHU2QTIxXHU1RjBGXHU0RTBCXHU3NTFGXHU2NTQ4XHVGRjA5XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGVuYWJsZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogXHU5ODlEXHU1OTE2XHU5NzAwXHU4OTgxXHU1MkEwXHU1MTY1XHU5ODg0XHU2Nzg0XHU1RUZBXHU3Njg0XHU0RjlEXHU4RDU2XHU1MzA1XHU1NDBEXG4gICAqL1xuICBleHRyYUluY2x1ZGVzPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiBcdTY2MkZcdTU0MjZcdTU3MjhcdTYzQTdcdTUyMzZcdTUzRjBcdThGOTNcdTUxRkFcdThDMDNcdThCRDVcdTRGRTFcdTYwNkZcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGRlYnVnPzogYm9vbGVhbjtcbn07XG5cbi8vIFx1OTcwMFx1ODk4MVx1NUYzQVx1NTIzNlx1OTg4NFx1Njc4NFx1NUVGQVx1NzY4NFx1NjgzOFx1NUZDM1x1NTkyN1x1NEY1M1x1NzlFRlx1NEY5RFx1OEQ1NlxuLy8gXHU4RkQ5XHU0RTlCXHU1MzA1XHU4OEFCIERDbG91ZCBcdTc2ODQgY3JlYXRlT3B0aW1pemVEZXBzIFx1NjUzRVx1NTE2NVx1NEU4NiBleGNsdWRlIFx1NTIxN1x1ODg2OFx1RkYwQ1x1OTcwMFx1ODk4MVx1NzlGQlx1NTFGQVx1NUU3Nlx1NTJBMFx1NTE2NSBpbmNsdWRlXG5jb25zdCBDT1JFX0lOQ0xVREVTID0gW1xuICAncGluaWEnLFxuICAncGluaWEtcGx1Z2luLXBlcnNpc3RlZHN0YXRlJyxcbiAgJ2NyeXB0by1qcydcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGg1T3B0aW1pemVEZXBzUGx1Z2luKG9wdGlvbnM6IEg1T3B0aW1pemVEZXBzT3B0aW9ucyA9IHt9KTogUGx1Z2luIHtcbiAgY29uc3Qge1xuICAgIGVuYWJsZWQgPSB0cnVlLFxuICAgIGV4dHJhSW5jbHVkZXMgPSBbXSxcbiAgICBkZWJ1ZyA9IGZhbHNlXG4gIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IGlzSDUgPSBwcm9jZXNzLmVudi5VTklfUExBVEZPUk0gPT09ICd3ZWInXG4gICAgfHwgcHJvY2Vzcy5lbnYuVU5JX1BMQVRGT1JNID09PSAnaDUnXG4gICAgfHwgIXByb2Nlc3MuZW52LlVOSV9QTEFURk9STTtcblxuICBjb25zdCBpc0J1aWxkID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyB8fCBwcm9jZXNzLmFyZ3YuaW5jbHVkZXMoJ2J1aWxkJyk7XG5cbiAgLy8gXHU0RUM1XHU1NzI4IEg1IGRldiBcdTZBMjFcdTVGMEZcdTRFMEJcdTc1MUZcdTY1NDhcbiAgaWYgKCFlbmFibGVkIHx8ICFpc0g1IHx8IGlzQnVpbGQpIHtcbiAgICByZXR1cm4geyBuYW1lOiAndml0ZS1wbHVnaW4taDUtb3B0aW1pemUtZGVwcycgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3ZpdGUtcGx1Z2luLWg1LW9wdGltaXplLWRlcHMnLFxuICAgIC8vIGVuZm9yY2U6ICdwb3N0JyBcdTc4NkVcdTRGRERcdTU3MjggdW5pOnV2dWUgXHU2M0QyXHU0RUY2XHU3Njg0IGNvbmZpZyBcdTk0QTlcdTVCNTBcdTRFNEJcdTU0MEVcdTYyNjdcdTg4NENcbiAgICBlbmZvcmNlOiAncG9zdCcsXG5cbiAgICBjb25maWdSZXNvbHZlZChyZXNvbHZlZENvbmZpZzogUmVzb2x2ZWRDb25maWcpIHtcbiAgICAgIGNvbnN0IG9wdGltaXplRGVwcyA9IHJlc29sdmVkQ29uZmlnLm9wdGltaXplRGVwcztcblxuICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbaDUtb3B0aW1pemUtZGVwc10gXHU4OTg2XHU3NkQ2XHU1MjREOicsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBub0Rpc2NvdmVyeTogb3B0aW1pemVEZXBzLm5vRGlzY292ZXJ5LFxuICAgICAgICAgIGluY2x1ZGU6IG9wdGltaXplRGVwcy5pbmNsdWRlLFxuICAgICAgICAgIGV4Y2x1ZGU6IG9wdGltaXplRGVwcy5leGNsdWRlXG4gICAgICAgIH0sIG51bGwsIDIpKTtcbiAgICAgIH1cblxuICAgICAgLy8gMS4gXHU0RkREXHU2MzAxIG5vRGlzY292ZXJ5OiB0cnVlXHVGRjA4RENsb3VkIFx1OUVEOFx1OEJBNFx1NTAzQ1x1RkYwOVx1RkYwQ1x1OTA3Rlx1NTE0RFx1NTJBOFx1NjAwMVx1NTNEMVx1NzNCMFx1ODlFNlx1NTNEMSA1MDQgXHU5MUNEXHU2NUIwXHU0RjE4XHU1MzE2XHU1RkFBXHU3M0FGXG4gICAgICAvLyAgICBcdTRFMERcdTg5ODFcdThCQkVcdTdGNkUgbm9EaXNjb3ZlcnkgPSBmYWxzZVx1RkYwMVxuXG4gICAgICAvLyAyLiBcdTY3ODRcdTVFRkFcdTVCOENcdTY1NzRcdTc2ODQgaW5jbHVkZSBcdTUyMTdcdTg4NjhcbiAgICAgIGNvbnN0IGFsbEluY2x1ZGVzID0gWy4uLkNPUkVfSU5DTFVERVMsIC4uLmV4dHJhSW5jbHVkZXNdO1xuXG4gICAgICAvLyAzLiBcdTU0MDhcdTVFNzZcdTUyMzBcdTczQjBcdTY3MDkgaW5jbHVkZVxuICAgICAgY29uc3QgZXhpc3RpbmdJbmNsdWRlcyA9IG9wdGltaXplRGVwcy5pbmNsdWRlIHx8IFtdO1xuICAgICAgY29uc3QgbWVyZ2VkSW5jbHVkZXMgPSBbLi4ubmV3IFNldChbLi4uZXhpc3RpbmdJbmNsdWRlcywgLi4uYWxsSW5jbHVkZXNdKV07XG4gICAgICAob3B0aW1pemVEZXBzIGFzIGFueSkuaW5jbHVkZSA9IG1lcmdlZEluY2x1ZGVzO1xuXG4gICAgICAvLyA0LiBcdTRFQ0UgZXhjbHVkZSBcdTRFMkRcdTc5RkJcdTk2NjRcdTVERjJcdTUyQTBcdTUxNjUgaW5jbHVkZSBcdTc2ODRcdTRGOURcdThENTZcdUZGMDhWaXRlIFx1NEUwRFx1NTE0MVx1OEJCOFx1NTQwQ1x1NjVGNlx1NTFGQVx1NzNCMFx1NTcyOFx1NEUyNFx1NEUyQVx1NTIxN1x1ODg2OFx1NEUyRFx1RkYwOVxuICAgICAgaWYgKG9wdGltaXplRGVwcy5leGNsdWRlICYmIG9wdGltaXplRGVwcy5leGNsdWRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgaW5jbHVkZVNldCA9IG5ldyBTZXQobWVyZ2VkSW5jbHVkZXMpO1xuICAgICAgICAob3B0aW1pemVEZXBzIGFzIGFueSkuZXhjbHVkZSA9IG9wdGltaXplRGVwcy5leGNsdWRlLmZpbHRlcihcbiAgICAgICAgICAoZGVwOiBzdHJpbmcpID0+ICFpbmNsdWRlU2V0LmhhcyhkZXApXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICBjb25zb2xlLmxvZygnW2g1LW9wdGltaXplLWRlcHNdIFx1ODk4Nlx1NzZENlx1NTQwRTonLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgbm9EaXNjb3Zlcnk6IG9wdGltaXplRGVwcy5ub0Rpc2NvdmVyeSxcbiAgICAgICAgICBpbmNsdWRlOiBvcHRpbWl6ZURlcHMuaW5jbHVkZSxcbiAgICAgICAgICBleGNsdWRlOiBvcHRpbWl6ZURlcHMuZXhjbHVkZVxuICAgICAgICB9LCBudWxsLCAyKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgYFtoNS1vcHRpbWl6ZS1kZXBzXSBcdTI3MTQgXHU1REYyXHU1NDJGXHU3NTI4XHU0RjlEXHU4RDU2XHU5ODg0XHU2Nzg0XHU1RUZBXHU0RjE4XHU1MzE2IChub0Rpc2NvdmVyeT0ke29wdGltaXplRGVwcy5ub0Rpc2NvdmVyeX0pXHVGRjBDaW5jbHVkZSAke21lcmdlZEluY2x1ZGVzLmxlbmd0aH0gXHU0RTJBXHU0RjlEXHU4RDU2XHVGRjBDZXhjbHVkZSAke29wdGltaXplRGVwcy5leGNsdWRlPy5sZW5ndGggPz8gMH0gXHU0RTJBXHU0RjlEXHU4RDU2YFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3VuaS1sYXlvdXRzLXBsdWdpbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy91bmktbGF5b3V0cy1wbHVnaW4udHNcIjtpbXBvcnQgZnMgZnJvbSAnbm9kZTpmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJztcbmltcG9ydCBKU09ONSBmcm9tICdqc29uNSc7XG5cbi8qKlxuICogXHU5QTdDXHU1Q0YwXHU4RjZDXHU4RkRFXHU1QjU3XHU3QjI2IGhlbHBlclxuICovXG5mdW5jdGlvbiBrZWJhYkNhc2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKiBcdTRFQ0VcdTZFOTBcdTc4MDFcdTRFMkRcdTYzRDBcdTUzRDYgZGVmaW5lUGFnZSh7Li4ufSkgXHU3Njg0XHU5MTREXHU3RjZFXHU1QkY5XHU4QzYxICovXG5mdW5jdGlvbiBwYXJzZURlZmluZVBhZ2UoY29udGVudDogc3RyaW5nKTogUmVjb3JkPHN0cmluZywgYW55PiB8IG51bGwge1xuICBjb25zdCBzdGFydFJlZ2V4ID0gL2RlZmluZVBhZ2VcXHMqXFwoXFxzKlxcey87XG4gIGNvbnN0IG1hdGNoID0gY29udGVudC5tYXRjaChzdGFydFJlZ2V4KTtcbiAgaWYgKG1hdGNoID09IG51bGwgfHwgbWF0Y2guaW5kZXggPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qgb3BlblBhcmVuID0gY29udGVudC5pbmRleE9mKCcoJywgbWF0Y2guaW5kZXgpO1xuICBpZiAob3BlblBhcmVuID09PSAtMSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGV0IGRlcHRoID0gMDtcbiAgbGV0IGluU3RyaW5nID0gZmFsc2U7XG4gIGxldCBzdHJpbmdDaGFyID0gJyc7XG4gIGxldCBpID0gb3BlblBhcmVuICsgMTtcblxuICBmb3IgKDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjaCA9IGNvbnRlbnRbaV07XG4gICAgY29uc3QgcHJldiA9IGkgPiAwID8gY29udGVudFtpIC0gMV0gOiAnJztcblxuICAgIGlmIChpblN0cmluZykge1xuICAgICAgaWYgKGNoID09PSBzdHJpbmdDaGFyICYmIHByZXYgIT09ICdcXFxcJykge1xuICAgICAgICBpblN0cmluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJyB8fCBjaCA9PT0gJ2AnKSB7XG4gICAgICBpblN0cmluZyA9IHRydWU7XG4gICAgICBzdHJpbmdDaGFyID0gY2g7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoY2ggPT09ICcvJyAmJiBpICsgMSA8IGNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICBpZiAoY29udGVudFtpICsgMV0gPT09ICcvJykge1xuICAgICAgICBjb25zdCBuZXdsaW5lID0gY29udGVudC5pbmRleE9mKCdcXG4nLCBpKTtcbiAgICAgICAgaWYgKG5ld2xpbmUgPT09IC0xKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaSA9IG5ld2xpbmU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGNvbnRlbnRbaSArIDFdID09PSAnKicpIHtcbiAgICAgICAgY29uc3QgZW5kID0gY29udGVudC5pbmRleE9mKCcqLycsIGkgKyAyKTtcbiAgICAgICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpID0gZW5kICsgMTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNoID09PSAneycgfHwgY2ggPT09ICcoJykge1xuICAgICAgZGVwdGgrKztcbiAgICB9XG4gICAgaWYgKGNoID09PSAnfScgfHwgY2ggPT09ICcpJykge1xuICAgICAgZGVwdGgtLTtcbiAgICAgIGlmIChkZXB0aCA8IDApIHtcbiAgICAgICAgY29uc3QgYXJnID0gY29udGVudC5zbGljZShvcGVuUGFyZW4gKyAxLCBpKS50cmltKCk7XG4gICAgICAgIGlmIChhcmcuc3RhcnRzV2l0aCgneycpKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBKU09ONS5wYXJzZShhcmcpIGFzIFJlY29yZDxzdHJpbmcsIGFueT47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCB0eXBlIFVuaUxheW91dHNPcHRpb25zID0ge1xuICAvKipcbiAgICogXHU1RTAzXHU1QzQwXHU3NkVFXHU1RjU1XHU4REVGXHU1Rjg0XHVGRjA4XHU3NkY4XHU1QkY5XHU5ODc5XHU3NkVFXHU2ODM5XHU3NkVFXHU1RjU1XHVGRjA5XG4gICAqIEBkZWZhdWx0ICdzcmMvbGF5b3V0cydcbiAgICovXG4gIGxheW91dERpcj86IHN0cmluZztcbiAgLyoqXG4gICAqIFx1OUVEOFx1OEJBNFx1NEY3Rlx1NzUyOFx1NzY4NFx1NTE2OFx1NUM0MFx1NUUwM1x1NUM0MFx1NTQwRFx1NzlGMFxuICAgKiBAZGVmYXVsdCAnZGVmYXVsdCdcbiAgICovXG4gIGxheW91dD86IHN0cmluZztcbiAgLyoqXG4gICAqIFx1NURFNVx1NEY1Q1x1NzZFRVx1NUY1NVxuICAgKiBAZGVmYXVsdCBwcm9jZXNzLmN3ZCgpXG4gICAqL1xuICBjd2Q/OiBzdHJpbmc7XG59O1xuXG50eXBlIFBhZ2VDb25maWcgPSB7XG4gIHBhdGg6IHN0cmluZztcbiAgbGF5b3V0Pzogc3RyaW5nIHwgYm9vbGVhbjtcbiAgc3R5bGU/OiB7XG4gICAgbGF5b3V0Pzogc3RyaW5nIHwgYm9vbGVhbjtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH07XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn07XG5cbnR5cGUgU3ViUGFja2FnZUNvbmZpZyA9IHtcbiAgcm9vdDogc3RyaW5nO1xuICBwYWdlczogUGFnZUNvbmZpZ1tdO1xufTtcblxudHlwZSBQYWdlc0pzb24gPSB7XG4gIHBhZ2VzOiBQYWdlQ29uZmlnW107XG4gIHN1YlBhY2thZ2VzPzogU3ViUGFja2FnZUNvbmZpZ1tdO1xufTtcblxuLyoqXG4gKiBcdTRFRkZcdTcxNjcgdml0ZS1wbHVnaW4tdW5pLWxheW91dHMgXHU3Njg0XHU4REU4XHU3QUVGIExheW91dCBcdTVFMDNcdTVDNDBcdTUzMDVcdTg4QzVcdTYzRDJcdTRFRjZcdUZGMENcdTkwMDJcdTkxNEQgdW5pLWFwcCBYICsgVVRTXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmlMYXlvdXRzUGx1Z2luKG9wdGlvbnM6IFVuaUxheW91dHNPcHRpb25zID0ge30pIHtcbiAgbGV0IHByb2plY3RSb290ID0gb3B0aW9ucy5jd2QgfHwgcHJvY2Vzcy5jd2QoKTtcbiAgY29uc3QgbGF5b3V0RGlyTmFtZSA9IG9wdGlvbnMubGF5b3V0RGlyIHx8ICdzcmMvbGF5b3V0cyc7XG4gIGNvbnN0IGRlZmF1bHRMYXlvdXROYW1lID0gb3B0aW9ucy5sYXlvdXQgfHwgJ2RlZmF1bHQnO1xuXG4gIGxldCBsYXlvdXREaXIgPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsIGxheW91dERpck5hbWUpO1xuICBsZXQgcGFnZXNKc29uUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgJ3BhZ2VzLmpzb24nKTtcblxuICBsZXQgY2FjaGVkUGFnZXNEYXRhOiB7XG4gICAgcGFnZUxheW91dHM6IE1hcDxzdHJpbmcsIHsgbGF5b3V0Pzogc3RyaW5nIHwgYm9vbGVhbjsgcGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IH0+O1xuICAgIHBhZ2VQYXRoczogU2V0PHN0cmluZz47XG4gIH0gfCBudWxsID0gbnVsbDtcbiAgbGV0IGxhc3RQYWdlc0pzb25NVGltZSA9IDA7XG5cbiAgLy8gXHU4Rjg1XHU1MkE5XHU1MUZEXHU2NTcwXHVGRjFBXHU1M0JCXHU5NjY0IEpTT04gXHU2Q0U4XHU5MUNBXHU1RTc2XHU4OUUzXHU2NzkwXG4gIGZ1bmN0aW9uIGxvYWRQYWdlc0pzb24oKSB7XG4gICAgY29uc3QgcGFnZUxheW91dHMgPSBuZXcgTWFwPHN0cmluZywgeyBsYXlvdXQ/OiBzdHJpbmcgfCBib29sZWFuOyBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT4gfT4oKTtcbiAgICBjb25zdCBwYWdlUGF0aHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIGlmICghZnMuZXhpc3RzU3luYyhwYWdlc0pzb25QYXRoKSkge1xuICAgICAgcmV0dXJuIHsgcGFnZUxheW91dHMsIHBhZ2VQYXRocyB9O1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByYXdDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKHBhZ2VzSnNvblBhdGgsICd1dGYtOCcpO1xuICAgICAgY29uc3QgY2xlYW5Kc29uID0gcmF3Q29udGVudC5yZXBsYWNlKC9cXC9cXCpbXFxzXFxTXSo/XFwqXFwvfChbXlxcXFw6XXxeKVxcL1xcLy4qJC9nbSwgJyQxJyk7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShjbGVhbkpzb24pIGFzIFBhZ2VzSnNvbjtcblxuICAgICAgLy8gMS4gXHU4OUUzXHU2NzkwXHU0RTNCXHU1MzA1XHU5ODc1XHU5NzYyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLnBhZ2VzKSkge1xuICAgICAgICBkYXRhLnBhZ2VzLmZvckVhY2goKHBhZ2UpID0+IHtcbiAgICAgICAgICBpZiAoIXBhZ2UucGF0aClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICBjb25zdCBub3JtUGF0aCA9IHBhZ2UucGF0aC5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgICAgICAgICBwYWdlUGF0aHMuYWRkKG5vcm1QYXRoKTtcblxuICAgICAgICAgIGxldCBsYXlvdXQ6IHN0cmluZyB8IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgICAgICAgaWYgKHBhZ2UubGF5b3V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxheW91dCA9IHBhZ2UubGF5b3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChwYWdlLnN0eWxlICYmIHBhZ2Uuc3R5bGUubGF5b3V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxheW91dCA9IHBhZ2Uuc3R5bGUubGF5b3V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHBhcmFtczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuICAgICAgICAgIE9iamVjdC5rZXlzKHBhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3BhdGgnICYmIGtleSAhPT0gJ2xheW91dCcpIHtcbiAgICAgICAgICAgICAgcGFyYW1zW2tleV0gPSBwYWdlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBwYWdlTGF5b3V0cy5zZXQobm9ybVBhdGgsIHsgbGF5b3V0LCBwYXJhbXMgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyAyLiBcdTg5RTNcdTY3OTBcdTUyMDZcdTUzMDVcdTk4NzVcdTk3NjJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuc3ViUGFja2FnZXMpKSB7XG4gICAgICAgIGRhdGEuc3ViUGFja2FnZXMuZm9yRWFjaCgoc3ViUGtnKSA9PiB7XG4gICAgICAgICAgaWYgKCFzdWJQa2cucm9vdCB8fCAhQXJyYXkuaXNBcnJheShzdWJQa2cucGFnZXMpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIHN1YlBrZy5wYWdlcy5mb3JFYWNoKChwYWdlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXBhZ2UucGF0aClcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgY29tYmluZWQgPSBwYXRoLmpvaW4oc3ViUGtnLnJvb3QsIHBhZ2UucGF0aCkucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoL15cXC8vLCAnJyk7XG4gICAgICAgICAgICBwYWdlUGF0aHMuYWRkKGNvbWJpbmVkKTtcblxuICAgICAgICAgICAgbGV0IGxheW91dDogc3RyaW5nIHwgYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChwYWdlLmxheW91dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGxheW91dCA9IHBhZ2UubGF5b3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGFnZS5zdHlsZSAmJiBwYWdlLnN0eWxlLmxheW91dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGxheW91dCA9IHBhZ2Uuc3R5bGUubGF5b3V0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAncGF0aCcgJiYga2V5ICE9PSAnbGF5b3V0Jykge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXldID0gcGFnZVtrZXldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcGFnZUxheW91dHMuc2V0KGNvbWJpbmVkLCB7IGxheW91dCwgcGFyYW1zIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tMYXlvdXQgUGx1Z2luXSBGYWlsZWQgdG8gcGFyc2UgcGFnZXMuanNvbjonLCBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwYWdlTGF5b3V0cywgcGFnZVBhdGhzIH07XG4gIH1cblxuICAvLyBcdTgzQjdcdTUzRDZcdTY3MDBcdTY1QjBcdTc2ODRcdTk4NzVcdTk3NjJcdTkxNERcdTdGNkVcdUZGMDhcdTVFMjZcdTdGMTNcdTVCNThcdTY4MjFcdTlBOENcdUZGMDlcbiAgZnVuY3Rpb24gZ2V0UGFnZXNEYXRhKCkge1xuICAgIGlmICghZnMuZXhpc3RzU3luYyhwYWdlc0pzb25QYXRoKSkge1xuICAgICAgcmV0dXJuIHsgcGFnZUxheW91dHM6IG5ldyBNYXAoKSwgcGFnZVBhdGhzOiBuZXcgU2V0KCkgfTtcbiAgICB9XG4gICAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKHBhZ2VzSnNvblBhdGgpO1xuICAgIGlmICghY2FjaGVkUGFnZXNEYXRhIHx8IHN0YXQubXRpbWVNcyAhPT0gbGFzdFBhZ2VzSnNvbk1UaW1lKSB7XG4gICAgICBjYWNoZWRQYWdlc0RhdGEgPSBsb2FkUGFnZXNKc29uKCk7XG4gICAgICBsYXN0UGFnZXNKc29uTVRpbWUgPSBzdGF0Lm10aW1lTXM7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRQYWdlc0RhdGE7XG4gIH1cblxuICB0eXBlIFJlc29sdmVkTGF5b3V0ID0ge1xuICAgIGZpbGVOYW1lOiBzdHJpbmc7XG4gICAgaW1wb3J0UGF0aDogc3RyaW5nO1xuICB9O1xuXG4gIC8vIFx1NUJGQlx1NjI3RVx1NUUwM1x1NUM0MFx1NjU4N1x1NEVGNlx1RkYwQ1x1NjUyRlx1NjMwMSAudXZ1ZSBcdTU0OEMgLnZ1ZSBcdTYyNjlcdTVDNTVcdTU0MERcdTUzQ0FcdTU5MjdcdTVDMEZcdTUxOTlcdTUxN0NcdTVCQjlcbiAgZnVuY3Rpb24gcmVzb2x2ZUxheW91dEZpbGUobGF5b3V0TmFtZTogc3RyaW5nKTogUmVzb2x2ZWRMYXlvdXQgfCBudWxsIHtcbiAgICBjb25zdCBleHRlbnNpb25zID0gWycudXZ1ZScsICcudnVlJ107XG4gICAgY29uc3QgY2FuZGlkYXRlcyA9IEFycmF5LmZyb20obmV3IFNldChbXG4gICAgICBsYXlvdXROYW1lLFxuICAgICAgbGF5b3V0TmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAga2ViYWJDYXNlKGxheW91dE5hbWUpLFxuICAgICAgbGF5b3V0TmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGxheW91dE5hbWUuc2xpY2UoMSlcbiAgICBdKSk7XG5cbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgY2FuZGlkYXRlcykge1xuICAgICAgZm9yIChjb25zdCBleHQgb2YgZXh0ZW5zaW9ucykge1xuICAgICAgICAvLyAxLiBcdTRGMThcdTUxNDhcdTYzQTJcdTZENEJcdTVCNTBcdTc2RUVcdTVGNTVcdTU0MENcdTU0MERcdTY1ODdcdTRFRjZcdUZGMDhcdTU5ODIgc3JjL2xheW91dHMvZGVmYXVsdC9kZWZhdWx0LnV2dWVcdUZGMDlcbiAgICAgICAgY29uc3Qgc3ViRGlyUGF0aCA9IHBhdGguam9pbihsYXlvdXREaXIsIG5hbWUsIGAke25hbWV9JHtleHR9YCk7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHN1YkRpclBhdGgpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBgJHtuYW1lfS8ke25hbWV9JHtleHR9YCxcbiAgICAgICAgICAgIGltcG9ydFBhdGg6IGBAL3NyYy9sYXlvdXRzLyR7bmFtZX0vJHtuYW1lfSR7ZXh0fWBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIDIuIFx1NjNBMlx1NkQ0Qlx1NUI1MFx1NzZFRVx1NUY1NSBpbmRleCBcdTY1ODdcdTRFRjZcdUZGMDhcdTU5ODIgc3JjL2xheW91dHMvZGVmYXVsdC9pbmRleC51dnVlXHVGRjA5XG4gICAgICAgIGNvbnN0IHN1YkRpckluZGV4UGF0aCA9IHBhdGguam9pbihsYXlvdXREaXIsIG5hbWUsIGBpbmRleCR7ZXh0fWApO1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhzdWJEaXJJbmRleFBhdGgpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBgJHtuYW1lfS9pbmRleCR7ZXh0fWAsXG4gICAgICAgICAgICBpbXBvcnRQYXRoOiBgQC9zcmMvbGF5b3V0cy8ke25hbWV9L2luZGV4JHtleHR9YFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4gXHU1MTdDXHU1QkI5XHU0RTAwXHU3RUE3XHU3NkVFXHU1RjU1XHU1RTczXHU5NEZBXHU2NTg3XHU0RUY2XHVGRjA4XHU1OTgyIHNyYy9sYXlvdXRzL2RlZmF1bHQudXZ1ZVx1RkYwOVxuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihsYXlvdXREaXIsIGAke25hbWV9JHtleHR9YCk7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogYCR7bmFtZX0ke2V4dH1gLFxuICAgICAgICAgICAgaW1wb3J0UGF0aDogYEAvc3JjL2xheW91dHMvJHtuYW1lfSR7ZXh0fWBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAndW5pLWxheW91dHMtcGx1Z2luJyxcbiAgICBjb25maWdSZXNvbHZlZChjb25maWc6IGFueSkge1xuICAgICAgcHJvamVjdFJvb3QgPSBjb25maWcucm9vdCB8fCBwcm9jZXNzLmN3ZCgpO1xuICAgICAgbGF5b3V0RGlyID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCBsYXlvdXREaXJOYW1lKTtcbiAgICAgIHBhZ2VzSnNvblBhdGggPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsICdwYWdlcy5qc29uJyk7XG4gICAgfSxcbiAgICBidWlsZFN0YXJ0KCkge1xuICAgIH0sXG4gICAgdHJhbnNmb3JtKHRoaXM6IGFueSwgY29kZTogc3RyaW5nLCBpZDogc3RyaW5nKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkSWQgPSBpZC5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG4gICAgICBpZiAobm9ybWFsaXplZElkLmluY2x1ZGVzKCc/JykpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIDEuIFx1NTNFQVx1OEZDN1x1NkVFNFx1NTkwNFx1NzQwNlx1OTg3NVx1OTc2Mlx1NzZGOFx1NTE3M1x1NjU4N1x1NEVGNlx1RkYwQ1x1NjM5Mlx1OTY2NCBBcHAudXZ1ZSAvIEFwcC5rdS51dnVlIC8gbGF5b3V0cyBcdTRFRTVcdTUzQ0EgY29tcG9uZW50c1xuICAgICAgaWYgKCFub3JtYWxpemVkSWQuZW5kc1dpdGgoJy51dnVlJykgJiYgIW5vcm1hbGl6ZWRJZC5lbmRzV2l0aCgnLnZ1ZScpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBub3JtYWxpemVkSWQuaW5jbHVkZXMoJy9zcmMvbGF5b3V0cy8nKVxuICAgICAgICB8fCBub3JtYWxpemVkSWQuaW5jbHVkZXMoJy9zcmMvY29tcG9uZW50cy9fbGF5b3V0cy8nKVxuICAgICAgICB8fCBub3JtYWxpemVkSWQuaW5jbHVkZXMoJ0FwcC51dnVlJylcbiAgICAgICAgfHwgbm9ybWFsaXplZElkLmluY2x1ZGVzKCdBcHAua3UudXZ1ZScpXG4gICAgICAgIHx8IG5vcm1hbGl6ZWRJZC5pbmNsdWRlcygnQXBwUm9vdC51dnVlJylcbiAgICAgICAgfHwgbm9ybWFsaXplZElkLmluY2x1ZGVzKCcvY29tcG9uZW50cy8nKVxuICAgICAgICB8fCBub3JtYWxpemVkSWQuaW5jbHVkZXMoJy92aWV3cy8nKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBcdTgzQjdcdTUzRDZcdTg5QzRcdTgzMDNcdTc2ODRcdTc2RjhcdTVCRjlcdThERUZcdTVGODRcdUZGMDhcdTY1RTBcdTYyNjlcdTVDNTVcdTU0MERcdUZGMDlcdTc1MjhcdTRFOEVcdTUzMzlcdTkxNEQgcGFnZXMuanNvbiBcdTRFMkRcdTc2ODRcdThERUZcdTVGODRcbiAgICAgIGNvbnN0IHJlbGF0aXZlSWQgPSBwYXRoLnJlbGF0aXZlKHByb2plY3RSb290LCBub3JtYWxpemVkSWQpLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcbiAgICAgIGNvbnN0IGNsZWFuUmVsYXRpdmVJZCA9IHJlbGF0aXZlSWQucmVwbGFjZSgvXFwuKHV2dWV8dnVlKShcXD8uKik/JC8sICcnKTtcbiAgICAgIGNvbnN0IHsgcGFnZUxheW91dHMsIHBhZ2VQYXRocyB9ID0gZ2V0UGFnZXNEYXRhKCk7XG5cbiAgICAgIC8vIFx1NTk4Mlx1Njc5Q1x1OEZEOVx1NEUyQVx1NjU4N1x1NEVGNlx1NEUwRFx1NUM1RVx1NEU4RSBwYWdlcy5qc29uIFx1NEUyRFx1NzY4NFx1NEVGQlx1NEY1NVx1NkNFOFx1NTE4Q1x1OTg3NVx1OTc2Mlx1RkYwQ1x1NzZGNFx1NjNBNVx1OERGM1x1OEZDN1x1RkYwOFx1OTA3Rlx1NTE0RFx1NkM2MVx1NjdEM1x1OTAxQVx1NzUyOFx1N0VDNFx1NEVGNlx1RkYwOVxuICAgICAgaWYgKCFwYWdlUGF0aHMuaGFzKGNsZWFuUmVsYXRpdmVJZCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5hZGRXYXRjaEZpbGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5hZGRXYXRjaEZpbGUocGFnZXNKc29uUGF0aCk7XG4gICAgICB9XG5cbiAgICAgIC8vIDIuIFx1NTMzOVx1OTE0RFx1OTg3NVx1OTc2Mlx1NEUyRFx1NzY4NCA8cm91dGU+IFx1NTc1N1x1NjIxNiBkZWZpbmVQYWdlXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gLzxyb3V0ZVtePl0qPihbXFxzXFxTXSo/KTxcXC9yb3V0ZT4vO1xuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGNvZGUubWF0Y2gocm91dGVSZWdleCk7XG4gICAgICBsZXQgbGF5b3V0TmFtZTogc3RyaW5nIHwgYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAgIGNvbnN0IHJvdXRlUGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG5cbiAgICAgIGlmIChyb3V0ZU1hdGNoICE9IG51bGwpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByb3V0ZVN0ciA9IHJvdXRlTWF0Y2hbMV0udHJpbSgpO1xuICAgICAgICAgIGNvbnN0IGNsZWFuUm91dGVTdHIgPSByb3V0ZVN0ci5yZXBsYWNlKC9cXC9cXCpbXFxzXFxTXSo/XFwqXFwvfChbXlxcXFw6XXxeKVxcL1xcLy4qJC9nbSwgJyQxJyk7XG4gICAgICAgICAgY29uc3Qgcm91dGVPYmogPSBKU09ONS5wYXJzZShjbGVhblJvdXRlU3RyKSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICAgICAgICAgIGlmIChyb3V0ZU9iai5sYXlvdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGF5b3V0TmFtZSA9IHJvdXRlT2JqLmxheW91dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gXHU2M0QwXHU1M0Q2XHU4MUVBXHU1QjlBXHU0RTQ5XHU3Njg0XHU1QzVFXHU2MDI3XHU1M0MyXHU2NTcwXG4gICAgICAgICAgT2JqZWN0LmtleXMocm91dGVPYmopLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2xheW91dCcpIHtcbiAgICAgICAgICAgICAgcm91dGVQYXJhbXNba2V5XSA9IHJvdXRlT2JqW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBbTGF5b3V0IFBsdWdpbl0gRmFpbGVkIHRvIHBhcnNlIDxyb3V0ZT4gYmxvY2sgaW4gJHtpZH06YCwgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBcdTU5ODJcdTY3OUNcdTZDQTFcdTY3MDkgPHJvdXRlPiBcdTY4MDdcdTdCN0VcdUZGMENcdTg5RTNcdTY3OTAgZGVmaW5lUGFnZVxuICAgICAgICBjb25zdCBkZWZpbmVQYWdlTWV0YSA9IHBhcnNlRGVmaW5lUGFnZShjb2RlKTtcbiAgICAgICAgaWYgKGRlZmluZVBhZ2VNZXRhICE9IG51bGwpIHtcbiAgICAgICAgICBpZiAoZGVmaW5lUGFnZU1ldGEubGF5b3V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxheW91dE5hbWUgPSBkZWZpbmVQYWdlTWV0YS5sYXlvdXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIE9iamVjdC5rZXlzKGRlZmluZVBhZ2VNZXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgIT09ICdsYXlvdXQnKSB7XG4gICAgICAgICAgICAgIHJvdXRlUGFyYW1zW2tleV0gPSBkZWZpbmVQYWdlTWV0YVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIDMuIFx1NzlGQlx1NTNCQlx1NEVFM1x1NzgwMVx1NEUyRFx1NzY4NCA8cm91dGU+IFx1NjgwN1x1N0I3RVx1NTc1N1xuICAgICAgbGV0IGNsZWFuQ29kZSA9IGNvZGUucmVwbGFjZShyb3V0ZVJlZ2V4LCAnJyk7XG5cbiAgICAgIC8vIDQuIFx1NEVDRSBwYWdlcy5qc29uIFx1NEUyRFx1ODNCN1x1NTNENiBsYXlvdXRcdUZGMENcdTU5ODJcdTY3OUMgcm91dGUgXHU1NzU3XHU1NDhDIGRlZmluZVBhZ2UgXHU0RTJEXHU2NzJBXHU2MzA3XHU1QjlBXHU3Njg0XHU4QkREXG4gICAgICBjb25zdCBwYWdlQ29uZmlnID0gcGFnZUxheW91dHMuZ2V0KGNsZWFuUmVsYXRpdmVJZCk7XG4gICAgICBpZiAobGF5b3V0TmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwYWdlQ29uZmlnICYmIHBhZ2VDb25maWcubGF5b3V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBsYXlvdXROYW1lID0gcGFnZUNvbmZpZy5sYXlvdXQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gXHU1NDA4XHU1RTc2IHJvdXRlIFx1NUM1RVx1NjAyN1x1NEUwRSBwYWdlcy5qc29uIFx1OTFDQ1x1NzY4NFx1NUM1RVx1NjAyN1x1NEY1Q1x1NEUzQSBwcm9wcyBcdTRGMjBcdTkwMTJcbiAgICAgIGNvbnN0IG1lcmdlZFBhcmFtczogUmVjb3JkPHN0cmluZywgYW55PiA9IHtcbiAgICAgICAgLi4uKHBhZ2VDb25maWcgPyBwYWdlQ29uZmlnLnBhcmFtcyA6IHt9KSxcbiAgICAgICAgLi4ucm91dGVQYXJhbXNcbiAgICAgIH07XG5cbiAgICAgIC8vIFx1OUVEOFx1OEJBNFx1NUUwM1x1NUM0MCBmYWxsYmFja1xuICAgICAgaWYgKGxheW91dE5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsYXlvdXROYW1lID0gZGVmYXVsdExheW91dE5hbWU7XG4gICAgICB9XG5cbiAgICAgIC8vIDUuIFx1NjgyMVx1OUE4QyBsYXlvdXQgXHU3OTgxXHU3NTI4XHU5MDNCXHU4RjkxXG4gICAgICBpZiAobGF5b3V0TmFtZSA9PT0gZmFsc2UgfHwgbGF5b3V0TmFtZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvZGU6IGNsZWFuQ29kZSxcbiAgICAgICAgICBtYXA6IG51bGxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gNi4gXHU2ODIxXHU5QThDXHU1RTAzXHU1QzQwXHU3RUM0XHU0RUY2XHU2NTg3XHU0RUY2XHU2NjJGXHU1NDI2XHU1QjU4XHU1NzI4XHVGRjBDXHU0RTBEXHU1QjU4XHU1NzI4XHU1MjE5XHU0RTBEXHU1MzA1XHU4OEY5XG4gICAgICBsZXQgbGF5b3V0SW5mbyA9IHJlc29sdmVMYXlvdXRGaWxlKGxheW91dE5hbWUgYXMgc3RyaW5nKTtcblxuICAgICAgLy8gXHU1OTgyXHU2NzlDXHU5RUQ4XHU4QkE0XHU1RTAzXHU1QzQwXHU2NjJGIGRlZmF1bHQgXHU0RTE0XHU2MjdFXHU0RTBEXHU1MjMwXHVGRjBDXHU1QzFEXHU4QkQ1XHU1NkRFXHU5MDAwXHU1MjMwIGxheW91dFxuICAgICAgaWYgKCFsYXlvdXRJbmZvICYmIGxheW91dE5hbWUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICBsYXlvdXRJbmZvID0gcmVzb2x2ZUxheW91dEZpbGUoJ2xheW91dCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWxheW91dEluZm8pIHtcbiAgICAgICAgaWYgKGxheW91dE5hbWUgIT09IGRlZmF1bHRMYXlvdXROYW1lICYmIGxheW91dE5hbWUgIT09ICdsYXlvdXQnKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBbTGF5b3V0IFBsdWdpbl0gTGF5b3V0IFwiJHtsYXlvdXROYW1lfVwiIG5vdCBmb3VuZCBpbiBcIiR7bGF5b3V0RGlyfVwiLiBTa2lwcGluZyB3cmFwIGZvciBcIiR7aWR9XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2RlOiBjbGVhbkNvZGUsXG4gICAgICAgICAgbWFwOiBudWxsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIDcuIFx1NzUxRlx1NjIxMFx1NEYyMFx1N0VEOSBMYXlvdXQgXHU3Njg0XHU1QzVFXHU2MDI3XHU1QjU3XHU3QjI2XHU0RTMyXHVGRjA4XHU2ODA3XHU5MUNGXHU0RTBFXHU1RDRDXHU1OTU3XHU1QkY5XHU4QzYxXHU1QjhDXHU2NTc0XHU0RjIwXHU5MDEyXHVGRjBDXHU0RTBEXHU2MkNEXHU1RTczXHVGRjA5XG4gICAgICBsZXQgYXR0cnMgPSAnJztcbiAgICAgIE9iamVjdC5rZXlzKG1lcmdlZFBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT09ICdsYXlvdXQnKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgdmFsID0gbWVyZ2VkUGFyYW1zW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmIChrZXkgPT09ICdjbGFzcycgfHwga2V5ID09PSAnY3VzdG9tQ2xhc3MnKSB7XG4gICAgICAgICAgICBhdHRycyArPSBgIDpjdXN0b20tcGFnZS1jbGFzcz1cIicke3ZhbC5yZXBsYWNlKC8nL2csICdcXFxcXFwnJyl9J1wiYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ2N1c3RvbVN0eWxlJykge1xuICAgICAgICAgICAgYXR0cnMgKz0gYCA6Y3VzdG9tLXBhZ2Utc3R5bGU9XCInJHt2YWwucmVwbGFjZSgvJy9nLCAnXFxcXFxcJycpfSdcImA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGF0dHJzICs9IGAgOiR7a2ViYWJDYXNlKGtleSl9PVwiJyR7dmFsLnJlcGxhY2UoLycvZywgJ1xcXFxcXCcnKX0nXCJgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWwgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIGF0dHJzICs9IGAgOiR7a2ViYWJDYXNlKGtleSl9PVwiJHt2YWx9XCJgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgIC8vIFx1NEUzQVx1NEU4Nlx1OTA3Rlx1NTE0RFx1NEUwRSBWdWUgXHU1MzlGXHU3NTFGIGNsYXNzL3N0eWxlIFx1NUM1RVx1NjAyN1x1NTFCMlx1N0E4MVx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NjYyRiBzdHlsZSBcdTk1MkVcdTY2MjBcdTVDMDRcdTRFM0EgcGFnZS1zdHlsZVxuICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0ga2V5ID09PSAnc3R5bGUnID8gJ3BhZ2Utc3R5bGUnIDoga2ViYWJDYXNlKGtleSk7XG4gICAgICAgICAgYXR0cnMgKz0gYCA6JHtwcm9wTmFtZX09XCIke0pTT04uc3RyaW5naWZ5KHZhbCkucmVwbGFjZSgvXCIvZywgJ1xcJycpfVwiYDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIDguIFx1NTMwNVx1ODhDNVx1OTg3NVx1OTc2Mlx1NzY4NCA8dGVtcGxhdGU+XG4gICAgICBsZXQgaGFzVGVtcGxhdGUgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHN0YXJ0VGVtcGxhdGVJZHggPSBjbGVhbkNvZGUuaW5kZXhPZignPHRlbXBsYXRlJyk7XG4gICAgICBjb25zdCBlbmRUZW1wbGF0ZUlkeCA9IGNsZWFuQ29kZS5sYXN0SW5kZXhPZignPC90ZW1wbGF0ZT4nKTtcbiAgICAgIGlmIChzdGFydFRlbXBsYXRlSWR4ICE9PSAtMSAmJiBlbmRUZW1wbGF0ZUlkeCAhPT0gLTEgJiYgc3RhcnRUZW1wbGF0ZUlkeCA8IGVuZFRlbXBsYXRlSWR4KSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0VGFnRW5kSWR4ID0gY2xlYW5Db2RlLmluZGV4T2YoJz4nLCBzdGFydFRlbXBsYXRlSWR4KTtcbiAgICAgICAgaWYgKHN0YXJ0VGFnRW5kSWR4ICE9PSAtMSAmJiBzdGFydFRhZ0VuZElkeCA8IGVuZFRlbXBsYXRlSWR4KSB7XG4gICAgICAgICAgaGFzVGVtcGxhdGUgPSB0cnVlO1xuICAgICAgICAgIGNvbnN0IHRlbXBsYXRlQXR0cnMgPSBjbGVhbkNvZGUuc2xpY2Uoc3RhcnRUZW1wbGF0ZUlkeCArIDksIHN0YXJ0VGFnRW5kSWR4KTtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gY2xlYW5Db2RlLnNsaWNlKHN0YXJ0VGFnRW5kSWR4ICsgMSwgZW5kVGVtcGxhdGVJZHgpO1xuICAgICAgICAgIGNvbnN0IGJlZm9yZSA9IGNsZWFuQ29kZS5zbGljZSgwLCBzdGFydFRlbXBsYXRlSWR4KTtcbiAgICAgICAgICBjb25zdCBhZnRlciA9IGNsZWFuQ29kZS5zbGljZShlbmRUZW1wbGF0ZUlkeCArIDExKTtcbiAgICAgICAgICBjbGVhbkNvZGUgPSBgJHtiZWZvcmV9PHRlbXBsYXRlJHt0ZW1wbGF0ZUF0dHJzfT5cXG4gIDxMYXlvdXRDb21wb25lbnQke2F0dHJzfT5cXG4ke2NvbnRlbnR9XFxuICA8L0xheW91dENvbXBvbmVudD5cXG48L3RlbXBsYXRlPiR7YWZ0ZXJ9YDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWhhc1RlbXBsYXRlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29kZTogY2xlYW5Db2RlLFxuICAgICAgICAgIG1hcDogbnVsbFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyA5LiBcdTgxRUFcdTUyQThcdTVGMTVcdTUxNjUgTGF5b3V0IFx1N0VDNFx1NEVGNlx1NTIzMCBzZXR1cCBzY3JpcHRcbiAgICAgIGNvbnN0IHNjcmlwdFNldHVwUmVnZXggPSAvPHNjcmlwdFxcc1tePl0qXFxic2V0dXBcXGJbXj5dKj4vO1xuICAgICAgY29uc3QgaW1wb3J0U3RhdGVtZW50ID0gYFxcbmltcG9ydCBMYXlvdXRDb21wb25lbnQgZnJvbSAnJHtsYXlvdXRJbmZvLmltcG9ydFBhdGh9J2A7XG5cbiAgICAgIGlmIChzY3JpcHRTZXR1cFJlZ2V4LnRlc3QoY2xlYW5Db2RlKSkge1xuICAgICAgICBjbGVhbkNvZGUgPSBjbGVhbkNvZGUucmVwbGFjZShzY3JpcHRTZXR1cFJlZ2V4LCBtYXRjaCA9PiBtYXRjaCArIGltcG9ydFN0YXRlbWVudCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2xlYW5Db2RlID0gYCR7Y2xlYW5Db2RlfVxcbjxzY3JpcHQgc2V0dXAgbGFuZz1cInV0c1wiPiR7aW1wb3J0U3RhdGVtZW50fVxcbjwvc2NyaXB0PlxcbmA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IGNsZWFuQ29kZSxcbiAgICAgICAgbWFwOiBudWxsXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBjb25maWd1cmVTZXJ2ZXIoc2VydmVyOiBhbnkpIHtcbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKGxheW91dERpcikpIHtcbiAgICAgICAgc2VydmVyLndhdGNoZXIuYWRkKGxheW91dERpcik7XG4gICAgICB9XG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYWdlc0pzb25QYXRoKSkge1xuICAgICAgICBzZXJ2ZXIud2F0Y2hlci5hZGQocGFnZXNKc29uUGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHNlcnZlci53YXRjaGVyLm9uKCdjaGFuZ2UnLCAoZmlsZVBhdGg6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkID0gZmlsZVBhdGgucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xuICAgICAgICBpZiAobm9ybWFsaXplZC5pbmNsdWRlcygncGFnZXMuanNvbicpKSB7XG4gICAgICAgICAgY2FjaGVkUGFnZXNEYXRhID0gbnVsbDtcbiAgICAgICAgICBzZXJ2ZXIud3Muc2VuZCh7XG4gICAgICAgICAgICB0eXBlOiAnZnVsbC1yZWxvYWQnLFxuICAgICAgICAgICAgcGF0aDogJyonXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBoYW5kbGVIb3RVcGRhdGUoY3R4OiBhbnkpIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBjdHguZmlsZS5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG4gICAgICBpZiAobm9ybWFsaXplZC5pbmNsdWRlcyhgLyR7bGF5b3V0RGlyTmFtZX0vYCkpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0TW9kcyA9IG5ldyBTZXQ8YW55PigpO1xuICAgICAgICBmb3IgKGNvbnN0IG1vZCBvZiBjdHgubW9kdWxlcykge1xuICAgICAgICAgIHRhcmdldE1vZHMuYWRkKG1vZCk7XG4gICAgICAgICAgY3R4LnNlcnZlci5tb2R1bGVHcmFwaC5pbnZhbGlkYXRlTW9kdWxlKG1vZCk7XG4gICAgICAgICAgaWYgKG1vZC5pbXBvcnRlcnMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW1wIG9mIG1vZC5pbXBvcnRlcnMpIHtcbiAgICAgICAgICAgICAgY3R4LnNlcnZlci5tb2R1bGVHcmFwaC5pbnZhbGlkYXRlTW9kdWxlKGltcCk7XG4gICAgICAgICAgICAgIHRhcmdldE1vZHMuYWRkKGltcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGN0eC5zZXJ2ZXIud3Muc2VuZCh7XG4gICAgICAgICAgdHlwZTogJ2Z1bGwtcmVsb2FkJyxcbiAgICAgICAgICBwYXRoOiAnKidcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRhcmdldE1vZHMpO1xuICAgICAgfVxuICAgICAgaWYgKG5vcm1hbGl6ZWQuaW5jbHVkZXMoJ3BhZ2VzLmpzb24nKSkge1xuICAgICAgICBjYWNoZWRQYWdlc0RhdGEgPSBudWxsO1xuICAgICAgICByZXR1cm4gY3R4Lm1vZHVsZXM7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgeyB1bmlMYXlvdXRzUGx1Z2luIGFzIHVuaUxheW91dHNYIH07XG5leHBvcnQgZGVmYXVsdCB1bmlMYXlvdXRzUGx1Z2luO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnMvdml0ZS1wbHVnaW4tdGFiYmFyLXZpZXdzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zL3ZpdGUtcGx1Z2luLXRhYmJhci12aWV3cy50c1wiO2ltcG9ydCBmcyBmcm9tICdub2RlOmZzJztcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnO1xuaW1wb3J0IHR5cGUgeyBQbHVnaW4gfSBmcm9tICd2aXRlJztcblxuZXhwb3J0IHR5cGUgVGFiYmFyVmlld3NPcHRpb25zID0ge1xuICAvKiogXHU2NjJGXHU1NDI2XHU1NDJGXHU3NTI4XHU2NzJDXHU2M0QyXHU0RUY2XHVGRjBDXHU5RUQ4XHU4QkE0IHRydWUgKi9cbiAgZW5hYmxlZD86IGJvb2xlYW47XG4gIC8qKiBUYWJCYXIgXHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2XHU4REVGXHU1Rjg0XHVGRjBDXHU5RUQ4XHU4QkE0ICdzcmMvdGFiYmFyL2NvbmZpZy51dHMnICovXG4gIGNvbmZpZ0ZpbGU/OiBzdHJpbmc7XG4gIC8qKiBcdTc1MUZcdTYyMTBcdTc2ODQgVGFiVmlld3MgXHU4QzAzXHU1RUE2XHU3RUM0XHU0RUY2XHU4REVGXHU1Rjg0XHVGRjBDXHU5RUQ4XHU4QkE0ICdzcmMvdGFiYmFyL2NvbXBvbmVudHMvVGFiVmlld3MudXZ1ZScgKi9cbiAgdGFyZ2V0RmlsZT86IHN0cmluZztcbiAgLyoqIFx1N0YzQVx1NTkzMVx1NUJGOVx1NUU5NCB2aWV3cyBcdTc2RUVcdTVGNTVcdTYyMTZcdTg5QzZcdTU2RkVcdTdFQzRcdTRFRjZcdTY1RjZcdTY2MkZcdTU0MjZcdTgxRUFcdTUyQThcdTUyMUJcdTVFRkFcdTU3RkFcdTc4NDBcdTgxMUFcdTYyNEJcdTY3QjZcdUZGMENcdTlFRDhcdThCQTQgdHJ1ZSAqL1xuICBhdXRvQ3JlYXRlVmlld3M/OiBib29sZWFuO1xuICAvKiogXHU2NjJGXHU1NDI2XHU4MUVBXHU1MkE4XHU0RUNFXHU1NDA0IFRhYiBcdTk4NzVcdTk3NjJcdTc2ODQgZGVmaW5lUGFnZSBcdTRFMkRcdTU0MENcdTZCNjUgaGlkZU5hdmJhciBcdTkxNERcdTdGNkVcdUZGMENcdTlFRDhcdThCQTQgdHJ1ZSAqL1xuICBzeW5jTmF2YmFyQ29uZmlnPzogYm9vbGVhbjtcbn07XG5cbi8qKiBcdThCRkJcdTUzRDYgVGFiQmFyIFx1NkEyMVx1NUYwRlx1OTE0RFx1N0Y2RVx1RkYwODA9XHU2NUUwVGFiQmFyLCAxPVx1NTM5Rlx1NzUxRlRhYkJhciwgMj1cdTgxRUFcdTVCOUFcdTRFNDlUYWJCYXIsIDQ9XHU1MzU1XHU5ODc1VGFiQmFyXHVGRjA5ICovXG5mdW5jdGlvbiBnZXRUYWJiYXJNb2RlKHByb2plY3RSb290OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuVklURV9UQUJCQVJfTU9ERSAhPSBudWxsICYmIHByb2Nlc3MuZW52LlZJVEVfVEFCQkFSX01PREUgIT09ICcnKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52LlZJVEVfVEFCQkFSX01PREUudHJpbSgpO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZW52UGF0aCA9IHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgJy5lbnYnKTtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhlbnZQYXRoKSkge1xuICAgICAgY29uc3QgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhlbnZQYXRoLCAndXRmLTgnKTtcbiAgICAgIGNvbnN0IG1hdGNoID0gY29udGVudC5tYXRjaCgvXlZJVEVfVEFCQkFSX01PREVcXHMqPVxccypbJ1wiXT8oW14nXCJcXHJcXG5dKylbJ1wiXT8vbSk7XG4gICAgICBpZiAobWF0Y2ggIT0gbnVsbCAmJiBtYXRjaFsxXSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBtYXRjaFsxXS50cmltKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNhdGNoIHt9XG4gIHJldHVybiAnMSc7XG59XG5cbi8qKiBcdTdGMTNcdTVCNThcdTVGNTNcdTUyNERcdTYyNDBcdTY3MDkgVGFiIFx1NUJGOVx1NUU5NFx1NzY4NFx1OTg3NVx1OTc2Mlx1NjU4N1x1NEVGNlx1N0VERFx1NUJGOVx1OERFRlx1NUY4NFx1RkYwQ1x1NEY5QiB3YXRjaGVyIFx1OUFEOFx1NjAyN1x1ODBGRFx1NTMzOVx1OTE0RCAqL1xuZXhwb3J0IGNvbnN0IHdhdGNoZWRUYWJQYWdlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4vKipcbiAqIFx1OEY4NVx1NTJBOVx1NzUxRlx1NjIxMFx1NTM1NVx1OTg3NSBUYWJCYXIgXHU4QzAzXHU1RUE2XHU1QkI5XHU1NjY4IFRhYlZpZXdzLnV2dWUgXHU0RUU1XHU1M0NBXHU4ODY1XHU1MTY4XHU3RjNBXHU1OTMxXHU3Njg0IHZpZXdzIFx1ODlDNlx1NTZGRVx1N0VDNFx1NEVGNlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUYWJWaWV3cyhwcm9qZWN0Um9vdDogc3RyaW5nLCBvcHRpb25zOiBUYWJiYXJWaWV3c09wdGlvbnMgPSB7fSk6IHZvaWQge1xuICBjb25zdCBjb25maWdGaWxlID0gb3B0aW9ucy5jb25maWdGaWxlID8/ICdzcmMvdGFiYmFyL2NvbmZpZy51dHMnO1xuICBjb25zdCBjb25maWdQYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCBjb25maWdGaWxlKTtcbiAgaWYgKCFmcy5leGlzdHNTeW5jKGNvbmZpZ1BhdGgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcmF3Q29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhjb25maWdQYXRoLCAndXRmLTgnKTtcbiAgLy8gXHU4RkM3XHU2RUU0XHU1OTFBXHU4ODRDXHU2Q0U4XHU5MUNBXHU0RTBFXHU1MzU1XHU4ODRDXHU2Q0U4XHU5MUNBXHVGRjBDXHU5MDdGXHU1MTREXHU2Q0U4XHU5MUNBXHU5ODc5XHU4OEFCXHU4OUUzXHU2NzkwXG4gIGNvbnN0IGNvbnRlbnQgPSByYXdDb250ZW50XG4gICAgLnJlcGxhY2UoL1xcL1xcKltcXHNcXFNdKj9cXCpcXC8vZywgJycpXG4gICAgLnJlcGxhY2UoL1xcL1xcLy4qJC9nbSwgJycpO1xuXG4gIGNvbnN0IGxpc3RNYXRjaCA9IGNvbnRlbnQubWF0Y2goL2xpc3RcXHMqOlxccypcXFsoW1xcc1xcU10qPylcXF0vKTtcbiAgaWYgKCFsaXN0TWF0Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBsaXN0QmxvY2sgPSBsaXN0TWF0Y2hbMV07XG4gIGNvbnN0IGl0ZW1SZWdleCA9IC9cXHsoW1xcc1xcU10qPylcXH0vZztcbiAgbGV0IG0gPSBpdGVtUmVnZXguZXhlYyhsaXN0QmxvY2spO1xuICBjb25zdCB0YWJQYWdlczogc3RyaW5nW10gPSBbXTtcbiAgLyoqIHBhZ2VQYXRoIFx1MjE5MiBcdTRFMUFcdTUyQTFcdTY4MDdcdThCQzZcdUZGMDhDdXN0b21UYWJCYXJJdGVtLnRhYlR5cGVcdUZGMDlcdUZGMENcdTc1MjhcdTRFOEVcdTc1MUZcdTYyMTBcdTg5QzZcdTU2RkVcdTdFQzRcdTRFRjZcdTY1RjZcdTYzMDlcdTY4MDdcdThCQzZcdThCQTJcdTk2MDUgKi9cbiAgY29uc3QgdGFiUGFnZUtleXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG4gIHdoaWxlIChtICE9PSBudWxsKSB7XG4gICAgY29uc3QgaXRlbUJsb2NrID0gbVsxXTtcbiAgICBjb25zdCBwYWdlUGF0aE1hdGNoID0gaXRlbUJsb2NrLm1hdGNoKC9wYWdlUGF0aFxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gICAgaWYgKHBhZ2VQYXRoTWF0Y2gpIHtcbiAgICAgIGNvbnN0IHBhZ2VQYXRoID0gcGFnZVBhdGhNYXRjaFsxXS50cmltKCkucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgICAgIHRhYlBhZ2VzLnB1c2gocGFnZVBhdGgpO1xuICAgICAgY29uc3QgdHlwZU1hdGNoID0gaXRlbUJsb2NrLm1hdGNoKC90YWJUeXBlXFxzKjpcXHMqWydcImBdKC4qPylbJ1wiYF0vKTtcbiAgICAgIGlmICh0eXBlTWF0Y2ggJiYgdHlwZU1hdGNoWzFdLnRyaW0oKSlcbiAgICAgICAgdGFiUGFnZUtleXMuc2V0KHBhZ2VQYXRoLCB0eXBlTWF0Y2hbMV0udHJpbSgpKTtcbiAgICB9XG4gICAgbSA9IGl0ZW1SZWdleC5leGVjKGxpc3RCbG9jayk7XG4gIH1cblxuICAvLyBcdTg5RTNcdTY3OTAgbWlkQnV0dG9uXHVGRjA4XHU5RjEzXHU1MzA1XHU0RTVGXHU2NjJGXHU1QzVFXHU0RThFIHRhYmJhciBcdTc2ODRcdTRFMDBcdTkwRThcdTUyMDZcdUZGMDlcbiAgY29uc3QgbWlkQnV0dG9uTWF0Y2ggPSBjb250ZW50Lm1hdGNoKC9taWRCdXR0b25cXHMqOlxccypcXHsoW1xcc1xcU10qPylcXH0vKTtcbiAgbGV0IG1pZEJ1dHRvblBhZ2VQYXRoOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgaWYgKG1pZEJ1dHRvbk1hdGNoKSB7XG4gICAgY29uc3QgYmxvY2sgPSBtaWRCdXR0b25NYXRjaFsxXTtcbiAgICBjb25zdCBwYWdlUGF0aE1hdGNoID0gYmxvY2subWF0Y2goL3BhZ2VQYXRoXFxzKjpcXHMqWydcImBdKC4qPylbJ1wiYF0vKTtcbiAgICBpZiAocGFnZVBhdGhNYXRjaCAmJiBwYWdlUGF0aE1hdGNoWzFdLnRyaW0oKSkge1xuICAgICAgbWlkQnV0dG9uUGFnZVBhdGggPSBwYWdlUGF0aE1hdGNoWzFdLnRyaW0oKS5yZXBsYWNlKC9eXFwvLywgJycpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFx1NEUwRSB0YWJiYXIgXHU1RTk1XHU1QzQyIGJ1aWxkRnVsbFRhYmJhckxpc3QgXHU0RkREXHU2MzAxXHU0RTI1XHU2ODNDXHU0RTAwXHU4MUY0XHU3Njg0XHU2MzkyXHU1RThGXHU4OUM0XHU1MjE5XHVGRjA4bWlkQnV0dG9uIFx1NUM0NVx1NEUyRFx1NjNEMlx1NTE2NVx1RkYwOVxuICBjb25zdCBmdWxsVGFiUGFnZXM6IHN0cmluZ1tdID0gW107XG4gIGlmIChtaWRCdXR0b25QYWdlUGF0aCkge1xuICAgIGNvbnN0IGhhbGYgPSBNYXRoLmZsb29yKHRhYlBhZ2VzLmxlbmd0aCAvIDIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFiUGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSBoYWxmKSB7XG4gICAgICAgIGZ1bGxUYWJQYWdlcy5wdXNoKG1pZEJ1dHRvblBhZ2VQYXRoKTtcbiAgICAgIH1cbiAgICAgIGZ1bGxUYWJQYWdlcy5wdXNoKHRhYlBhZ2VzW2ldKTtcbiAgICB9XG4gICAgaWYgKGhhbGYgPj0gdGFiUGFnZXMubGVuZ3RoKSB7XG4gICAgICBmdWxsVGFiUGFnZXMucHVzaChtaWRCdXR0b25QYWdlUGF0aCk7XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFiUGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZ1bGxUYWJQYWdlcy5wdXNoKHRhYlBhZ2VzW2ldKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZnVsbFRhYlBhZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHdhdGNoZWRUYWJQYWdlcy5jbGVhcigpO1xuXG4gIC8vIFx1OEJGQlx1NTNENiBwYWdlcy5qc29uIFx1ODNCN1x1NTNENlx1NTQwNFx1OTg3NVx1OTc2Mlx1NUI4Q1x1NjU3NFx1OTE0RFx1N0Y2RVxuICBjb25zdCBwYWdlc0pzb25NYXAgPSBuZXcgTWFwPHN0cmluZywgUmVjb3JkPHN0cmluZywgYW55Pj4oKTtcbiAgY29uc3QgcGFnZXNKc29uUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgJ3BhZ2VzLmpzb24nKTtcbiAgaWYgKGZzLmV4aXN0c1N5bmMocGFnZXNKc29uUGF0aCkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmF3SnNvbiA9IGZzLnJlYWRGaWxlU3luYyhwYWdlc0pzb25QYXRoLCAndXRmLTgnKTtcbiAgICAgIGNvbnN0IGNsZWFuSnNvbiA9IHJhd0pzb24ucmVwbGFjZSgvXFwvXFwqW1xcc1xcU10qP1xcKlxcL3woW15cXFxcOl18XilcXC9cXC8uKiQvZ20sICckMScpO1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoY2xlYW5Kc29uKSBhcyB7IHBhZ2VzPzogYW55W107IHN1YlBhY2thZ2VzPzogYW55W10gfTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEucGFnZXMpKSB7XG4gICAgICAgIGRhdGEucGFnZXMuZm9yRWFjaCgocDogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHAgJiYgdHlwZW9mIHAucGF0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1QYXRoID0gcC5wYXRoLnJlcGxhY2UoL1xcXFwvZywgJy8nKS5yZXBsYWNlKC9eXFwvLywgJycpO1xuICAgICAgICAgICAgcGFnZXNKc29uTWFwLnNldChub3JtUGF0aCwgcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2gge31cbiAgfVxuXG4gIGNvbnN0IHZpZXdzRW50cmllczogQXJyYXk8e1xuICAgIGltcG9ydE5hbWU6IHN0cmluZztcbiAgICBpbXBvcnRQYXRoOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBoaWRlTmF2YmFyOiBib29sZWFuO1xuICAgIGhpZGVTdGF0dXNCYXI6IGJvb2xlYW47XG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiBib29sZWFuO1xuICAgIGN1c3RvbVBhZ2VDbGFzczogc3RyaW5nO1xuICAgIGN1c3RvbVBhZ2VTdHlsZTogc3RyaW5nO1xuICB9PiA9IFtdO1xuICBjb25zdCB1c2VkTmFtZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBmdWxsVGFiUGFnZXMubGVuZ3RoOyBpZHgrKykge1xuICAgIGNvbnN0IHJhd1BhdGggPSBmdWxsVGFiUGFnZXNbaWR4XTtcbiAgICBjb25zdCBjbGVhblBhdGggPSByYXdQYXRoLnJlcGxhY2UoL15zcmNcXC8vLCAnJyk7XG4gICAgLy8gXHU0RTFBXHU1MkExXHU2ODA3XHU4QkM2XHU2MzA5XHUzMDBDXHU1RTI2XHU1MjREXHU1QkZDIHNyYy8gXHU3Njg0XHU1MzlGXHU1OUNCIHBhZ2VQYXRoXHUzMDBEXHU2N0U1XHU4ODY4XHVGRjA4Y2xlYW5QYXRoIFx1NURGMlx1NTI2NVx1NjM4OSBzcmMvXHVGRjBDXHU0RTBEXHU4MEZEXHU3NkY0XHU2M0E1XHU1RjUzIGtleVx1RkYwOVxuICAgIGNvbnN0IHBhZ2VQYXRoS2V5ID0gcmF3UGF0aC5yZXBsYWNlKC9eXFwvLywgJycpO1xuICAgIGNvbnN0IHRhYktleSA9IHRhYlBhZ2VLZXlzLmdldChwYWdlUGF0aEtleSk7XG4gICAgY29uc3QgcGFnZURpclJlbCA9IHBhdGguZGlybmFtZShjbGVhblBhdGgpO1xuICAgIGNvbnN0IGFic1BhZ2VEaXIgPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsICdzcmMnLCBwYWdlRGlyUmVsKTtcbiAgICBjb25zdCBkaXJOYW1lID0gcGF0aC5iYXNlbmFtZShhYnNQYWdlRGlyKTtcbiAgICBjb25zdCBwYXNjYWxEaXJOYW1lID0gZGlyTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGRpck5hbWUuc2xpY2UoMSk7XG4gICAgY29uc3QgZXhwZWN0ZWRDb21wTmFtZSA9IGAke3Bhc2NhbERpck5hbWV9Vmlld2A7XG5cbiAgICBjb25zdCB2aWV3c0RpciA9IHBhdGgucmVzb2x2ZShhYnNQYWdlRGlyLCAndmlld3MnKTtcbiAgICBjb25zdCBleHBlY3RlZFZpZXdGaWxlID0gcGF0aC5yZXNvbHZlKHZpZXdzRGlyLCBgJHtleHBlY3RlZENvbXBOYW1lfS51dnVlYCk7XG5cbiAgICBsZXQgYWN0dWFsQ29tcE5hbWUgPSBleHBlY3RlZENvbXBOYW1lO1xuICAgIGxldCBhY3R1YWxSZWxQYXRoID0gYHNyYy8ke3BhZ2VEaXJSZWx9L3ZpZXdzLyR7ZXhwZWN0ZWRDb21wTmFtZX0udXZ1ZWA7XG5cbiAgICBpZiAoZnMuZXhpc3RzU3luYyhhYnNQYWdlRGlyKSkge1xuICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKHZpZXdzRGlyKSkge1xuICAgICAgICBpZiAob3B0aW9ucy5hdXRvQ3JlYXRlVmlld3MgIT09IGZhbHNlKSB7XG4gICAgICAgICAgZnMubWtkaXJTeW5jKHZpZXdzRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBcdTY4QzBcdTY3RTUgdmlld3MgXHU3NkVFXHU1RjU1XHU0RTBCXHU2NjJGXHU1NDI2XHU1REYyXHU3RUNGXHU1QjU4XHU1NzI4XHU4OUM2XHU1NkZFXHU3RUM0XHU0RUY2XG4gICAgICBsZXQgZXhpc3RpbmdWaWV3czogc3RyaW5nW10gPSBbXTtcbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHZpZXdzRGlyKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGV4aXN0aW5nVmlld3MgPSBmcy5yZWFkZGlyU3luYyh2aWV3c0RpcikuZmlsdGVyKChmOiBzdHJpbmcpID0+IGYuZW5kc1dpdGgoJy51dnVlJykpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIHt9XG4gICAgICB9XG5cbiAgICAgIGlmIChleGlzdGluZ1ZpZXdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gXHU1REYyXHU2NzA5XHU4OUM2XHU1NkZFXHU3RUM0XHU0RUY2XHVGRjFBXHU0RjE4XHU1MTQ4XHU1MzM5XHU5MTREIEhvbWVWaWV3XHVGRjA4XHU5NDg4XHU1QkY5IGluZGV4IFx1NzZFRVx1NUY1NVx1RkYwOVx1RkYwQ1x1NTE3Nlx1NkIyMVx1NTMzOVx1OTE0RCBleHBlY3RlZENvbXBOYW1lXHVGRjBDXHU2NzAwXHU1NDBFXHU1M0Q2XHU3QjJDXHU0RTAwXHU0RTJBXHU1REYyXHU2NzA5XHU3RUM0XHU0RUY2XG4gICAgICAgIGNvbnN0IG1hdGNoZWRWaWV3ID0gKGRpck5hbWUgPT09ICdpbmRleCcgJiYgZXhpc3RpbmdWaWV3cy5pbmNsdWRlcygnSG9tZVZpZXcudXZ1ZScpKVxuICAgICAgICAgID8gJ0hvbWVWaWV3LnV2dWUnXG4gICAgICAgICAgOiAoZXhpc3RpbmdWaWV3cy5maW5kKChmOiBzdHJpbmcpID0+IGYgPT09IGAke2V4cGVjdGVkQ29tcE5hbWV9LnV2dWVgKSA/PyBleGlzdGluZ1ZpZXdzWzBdKTtcblxuICAgICAgICBjb25zdCBiYXNlTmFtZSA9IG1hdGNoZWRWaWV3LnJlcGxhY2UoL1xcLnV2dWUkLywgJycpO1xuICAgICAgICBhY3R1YWxDb21wTmFtZSA9IGJhc2VOYW1lO1xuICAgICAgICBhY3R1YWxSZWxQYXRoID0gYHNyYy8ke3BhZ2VEaXJSZWx9L3ZpZXdzLyR7bWF0Y2hlZFZpZXd9YDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9wdGlvbnMuYXV0b0NyZWF0ZVZpZXdzICE9PSBmYWxzZSkge1xuICAgICAgICAvLyBcdTZDQTFcdTY3MDlcdTRFRkJcdTRGNTVcdTg5QzZcdTU2RkVcdTdFQzRcdTRFRjZcdTY1RjZcdUZGMENcdTYyNERcdTgxRUFcdTUyQThcdTUyMUJcdTVFRkFcdTg5QzRcdTgzMDNcdTc2ODQgVmlldy51dnVlXG4gICAgICAgIGNvbnN0IHZpZXdUZW1wbGF0ZSA9IGA8c2NyaXB0IGxhbmc9XCJ1dHNcIiBzZXR1cD5cbmRlZmluZU9wdGlvbnMoe1xuICBuYW1lOiAnJHtleHBlY3RlZENvbXBOYW1lfScsXG4gIHN0eWxlSXNvbGF0aW9uOiAnaXNvbGF0ZWQnXG59KTtcblxuaW1wb3J0IHsgb25OYXZiYXJQdWxsRG93blJlZnJlc2gsIHN0b3BOYXZiYXJQdWxsRG93blJlZnJlc2ggfSBmcm9tICdAL3NyYy9sYXlvdXRzL25hdmJhci91dGlscy9pbmRleC51dHMnO1xuaW1wb3J0IHsgY3VySWR4LCBvblRhYlNob3cgfSBmcm9tICdAL3NyYy90YWJiYXInO1xuXG4vLyBcdTk4NzVcdTk3NjJcdTY1NzBcdTYzNkVcdTUyQTBcdThGN0QvXHU1MjM3XHU2NUIwXHU2NUI5XHU2Q0Q1XG5mdW5jdGlvbiByZWZyZXNoRGF0YSgpOiB2b2lkIHtcbiAgY29uc29sZS5sb2coJyR7ZXhwZWN0ZWRDb21wTmFtZX0gXHU1MjM3XHU2NUIwXHU0RTJELi4uJyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCcke2V4cGVjdGVkQ29tcE5hbWV9IFx1NTIzN1x1NjVCMFx1NjIxMFx1NTI5RicpO1xuICAgIC8vIFx1NjU3MFx1NjM2RVx1NTJBMFx1OEY3RFx1NUI4Q1x1NkJENVx1NTQwRVx1RkYwQ1x1NjI0Qlx1NTJBOFx1NTA1Q1x1NkI2Mlx1NEUwQlx1NjJDOVx1NTIzN1x1NjVCMFx1NTJBOFx1NzUzQlx1NzJCNlx1NjAwMVxuICAgIHN0b3BOYXZiYXJQdWxsRG93blJlZnJlc2goKTtcbiAgfSwgMTAwMCk7XG59XG5cbi8vIFx1NzZEMVx1NTQyQyBUYWIgXHU1MjA3XHU2MzYyXHVGRjA4JHt0YWJLZXkgPyBgdGFiVHlwZTogJyR7dGFiS2V5fSdgIDogYFx1N0QyMlx1NUYxNSAke2lkeH1gfVx1RkYwOVx1NjVGNlx1ODlFNlx1NTNEMVx1NTIzN1x1NjVCMFxub25UYWJTaG93KCR7dGFiS2V5ID8gYCcke3RhYktleX0nYCA6IGlkeH0sICgpID0+IHtcbiAgY29uc29sZS5sb2coJ1x1NTIwN1x1NjM2Mlx1NTIzMFx1NEU4NiAke2V4cGVjdGVkQ29tcE5hbWV9IFRhYicpO1xuICByZWZyZXNoRGF0YSgpO1xufSk7XG5cbi8vIFx1NzZEMVx1NTQyQyBuYXZiYXIgXHU4MUVBXHU1QjlBXHU0RTQ5XHU0RTBCXHU2MkM5XHU1MjM3XHU2NUIwXHU0RThCXHU0RUY2XHVGRjA4XHU1NzI4XHU1OTA0XHU0RThFXHU1RjUzXHU1MjREIFRhYiBcdTY1RjZcdTc1MUZcdTY1NDhcdUZGMDlcbm9uTmF2YmFyUHVsbERvd25SZWZyZXNoKCgpID0+IHtcbiAgaWYgKGN1cklkeC52YWx1ZSA9PSAke2lkeH0pIHtcbiAgICByZWZyZXNoRGF0YSgpO1xuICB9XG59KTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDx2aWV3IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBmbGV4LTEgcC1bMTZweF1cIj5cbiAgICA8dGV4dCBjbGFzcz1cInRleHQtWzE4cHhdIGZvbnQtYm9sZCB0ZXh0LVsjMWUyOTNiXVwiPiR7ZXhwZWN0ZWRDb21wTmFtZX08L3RleHQ+XG4gICAgPHRleHQgY2xhc3M9XCJ0ZXh0LVsxM3B4XSB0ZXh0LVsjNjQ3NDhiXSBtdC1bNnB4XVwiPlx1NUY1M1x1NTI0RFx1NEUzQVx1NTM1NVx1OTg3NVx1OTc2MiBUYWJCYXIgXHU4OUM2XHU1NkZFXHU3RUM0XHU0RUY2PC90ZXh0PlxuICA8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+PC9zdHlsZT5cbmA7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZXhwZWN0ZWRWaWV3RmlsZSwgdmlld1RlbXBsYXRlLCAndXRmLTgnKTtcbiAgICAgICAgY29uc29sZS5sb2coYFt0YWJiYXItdmlld3NdIFx1ODFFQVx1NTJBOFx1NEUzQSBUYWJCYXIgXHU1MzU1XHU5ODc1XHU3NTFGXHU2MjEwXHU1N0ZBXHU3ODQwXHU4OUM2XHU1NkZFXHU3RUM0XHU0RUY2OiAke3BhdGgucmVsYXRpdmUocHJvamVjdFJvb3QsIGV4cGVjdGVkVmlld0ZpbGUpfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFx1NEYxOFx1NTE0OFx1NEVDRSBwYWdlcy5qc29uIFx1OEJGQlx1NTNENlx1NUJGOVx1NUU5NFx1OTg3NVx1OTc2Mlx1NTcyOCBkZWZpbmVQYWdlIFx1NEUyRFx1NzY4NFx1NUI4Q1x1NjU3NFx1NTNDMlx1NjU3MFx1OTE0RFx1N0Y2RVxuICAgIGNvbnN0IG5vcm1UYXJnZXQgPSByYXdQYXRoLnJlcGxhY2UoL1xcXFwvZywgJy8nKS5yZXBsYWNlKC9eXFwvLywgJycpLnJlcGxhY2UoL1xcLih1dnVlfHZ1ZSkkLywgJycpO1xuICAgIGNvbnN0IHBhZ2VDb25maWcgPSBwYWdlc0pzb25NYXAuZ2V0KG5vcm1UYXJnZXQpXG4gICAgICB8fCBwYWdlc0pzb25NYXAuZ2V0KGBzcmMvJHtub3JtVGFyZ2V0fWApXG4gICAgICB8fCBwYWdlc0pzb25NYXAuZ2V0KG5vcm1UYXJnZXQucmVwbGFjZSgvXnNyY1xcLy8sICcnKSlcbiAgICAgIHx8IG51bGw7XG5cbiAgICBsZXQgaGlkZU5hdmJhciA9IHBhZ2VDb25maWc/LmhpZGVOYXZiYXIgPT09IHRydWU7XG4gICAgbGV0IGhpZGVTdGF0dXNCYXIgPSBwYWdlQ29uZmlnPy5oaWRlU3RhdHVzQmFyID09PSB0cnVlO1xuICAgIGxldCBlbmFibGVQdWxsRG93blJlZnJlc2ggPSB0eXBlb2YgcGFnZUNvbmZpZz8uZW5hYmxlUHVsbERvd25SZWZyZXNoID09PSAnYm9vbGVhbicgPyBwYWdlQ29uZmlnLmVuYWJsZVB1bGxEb3duUmVmcmVzaCA6IHRydWU7XG4gICAgbGV0IHRpdGxlID0gdHlwZW9mIHBhZ2VDb25maWc/LnN0eWxlPy5uYXZpZ2F0aW9uQmFyVGl0bGVUZXh0ID09PSAnc3RyaW5nJ1xuICAgICAgPyBwYWdlQ29uZmlnLnN0eWxlLm5hdmlnYXRpb25CYXJUaXRsZVRleHRcbiAgICAgIDogKHR5cGVvZiBwYWdlQ29uZmlnPy50aXRsZSA9PT0gJ3N0cmluZycgPyBwYWdlQ29uZmlnLnRpdGxlIDogJycpO1xuICAgIGxldCBjdXN0b21QYWdlQ2xhc3MgPSB0eXBlb2YgcGFnZUNvbmZpZz8uY3VzdG9tUGFnZUNsYXNzID09PSAnc3RyaW5nJ1xuICAgICAgPyBwYWdlQ29uZmlnLmN1c3RvbVBhZ2VDbGFzc1xuICAgICAgOiAodHlwZW9mIHBhZ2VDb25maWc/LmNsYXNzID09PSAnc3RyaW5nJyA/IHBhZ2VDb25maWcuY2xhc3MgOiAnJyk7XG4gICAgbGV0IGN1c3RvbVBhZ2VTdHlsZSA9IHR5cGVvZiBwYWdlQ29uZmlnPy5jdXN0b21QYWdlU3R5bGUgPT09ICdzdHJpbmcnXG4gICAgICA/IHBhZ2VDb25maWcuY3VzdG9tUGFnZVN0eWxlXG4gICAgICA6ICh0eXBlb2YgcGFnZUNvbmZpZz8uY3VzdG9tU3R5bGUgPT09ICdzdHJpbmcnID8gcGFnZUNvbmZpZy5jdXN0b21TdHlsZSA6ICcnKTtcblxuICAgIGNvbnN0IGFic1BhZ2VGaWxlID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCByYXdQYXRoLmVuZHNXaXRoKCcudXZ1ZScpID8gcmF3UGF0aCA6IGAke3Jhd1BhdGh9LnV2dWVgKTtcbiAgICB3YXRjaGVkVGFiUGFnZXMuYWRkKGFic1BhZ2VGaWxlKTtcblxuICAgIC8vIFx1NTE1Q1x1NUU5NVx1NzZGNFx1NjNBNVx1ODlFM1x1Njc5MFx1NUJGOVx1NUU5NFx1NEUzQlx1OTg3NVx1OTc2Mlx1NkU5MFx1NzgwMVx1RkYwOFx1OTQ4OFx1NUJGOVx1NUYwMFx1NTNEMVx1OEZDN1x1N0EwQlx1NEUyRFx1NTM3M1x1NjVGNlx1N0YxNlx1OEY5MSBkZWZpbmVQYWdlIFx1NzY4NFx1NTczQVx1NjY2Rlx1RkYwOVxuICAgIGlmIChvcHRpb25zLnN5bmNOYXZiYXJDb25maWcgIT09IGZhbHNlICYmIGZzLmV4aXN0c1N5bmMoYWJzUGFnZUZpbGUpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwYWdlQ29kZSA9IGZzLnJlYWRGaWxlU3luYyhhYnNQYWdlRmlsZSwgJ3V0Zi04Jyk7XG4gICAgICAgIC8vIDEuIGhpZGVOYXZiYXJcbiAgICAgICAgY29uc3QgbUhpZGUgPSBwYWdlQ29kZS5tYXRjaCgvaGlkZU5hdmJhclxccyo6XFxzKih0cnVlfGZhbHNlKS9pKTtcbiAgICAgICAgaWYgKG1IaWRlKSB7XG4gICAgICAgICAgaGlkZU5hdmJhciA9IG1IaWRlWzFdLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJztcbiAgICAgICAgfVxuICAgICAgICAvLyAyLiBoaWRlU3RhdHVzQmFyXG4gICAgICAgIGNvbnN0IG1TdGF0dXMgPSBwYWdlQ29kZS5tYXRjaCgvaGlkZVN0YXR1c0Jhclxccyo6XFxzKih0cnVlfGZhbHNlKS9pKTtcbiAgICAgICAgaWYgKG1TdGF0dXMpIHtcbiAgICAgICAgICBoaWRlU3RhdHVzQmFyID0gbVN0YXR1c1sxXS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4gZW5hYmxlUHVsbERvd25SZWZyZXNoXG4gICAgICAgIGNvbnN0IG1SZWZyZXNoID0gcGFnZUNvZGUubWF0Y2goL2VuYWJsZVB1bGxEb3duUmVmcmVzaFxccyo6XFxzKih0cnVlfGZhbHNlKS9pKTtcbiAgICAgICAgaWYgKG1SZWZyZXNoKSB7XG4gICAgICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoID0gbVJlZnJlc2hbMV0udG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIDQuIG5hdmlnYXRpb25CYXJUaXRsZVRleHQgLyB0aXRsZVxuICAgICAgICBjb25zdCBtVGl0bGUgPSBwYWdlQ29kZS5tYXRjaCgvbmF2aWdhdGlvbkJhclRpdGxlVGV4dFxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdL2kpXG4gICAgICAgICAgfHwgcGFnZUNvZGUubWF0Y2goL1xcYnRpdGxlXFxzKjpcXHMqWydcImBdKC4qPylbJ1wiYF0vaSk7XG4gICAgICAgIGlmIChtVGl0bGUpIHtcbiAgICAgICAgICB0aXRsZSA9IG1UaXRsZVsxXS50cmltKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNS4gY3VzdG9tUGFnZUNsYXNzXG4gICAgICAgIGNvbnN0IG1DbGFzcyA9IHBhZ2VDb2RlLm1hdGNoKC9jdXN0b21QYWdlQ2xhc3NcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS9pKTtcbiAgICAgICAgaWYgKG1DbGFzcykge1xuICAgICAgICAgIGN1c3RvbVBhZ2VDbGFzcyA9IG1DbGFzc1sxXS50cmltKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNi4gY3VzdG9tUGFnZVN0eWxlXG4gICAgICAgIGNvbnN0IG1TdHlsZSA9IHBhZ2VDb2RlLm1hdGNoKC9jdXN0b21QYWdlU3R5bGVcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS9pKTtcbiAgICAgICAgaWYgKG1TdHlsZSkge1xuICAgICAgICAgIGN1c3RvbVBhZ2VTdHlsZSA9IG1TdHlsZVsxXS50cmltKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhdGNoIHt9XG4gICAgfVxuXG4gICAgLy8gXHU5NjMyXHU2QjYyXHU3NkY4XHU1NDBDXHU1NDBEXHU3OUYwXHU1MUIyXHU3QTgxXG4gICAgbGV0IGZpbmFsQ29tcE5hbWUgPSBhY3R1YWxDb21wTmFtZTtcbiAgICBpZiAodXNlZE5hbWVzLmhhcyhmaW5hbENvbXBOYW1lKSkge1xuICAgICAgZmluYWxDb21wTmFtZSA9IGAke3Bhc2NhbERpck5hbWV9JHthY3R1YWxDb21wTmFtZX1gO1xuICAgIH1cbiAgICB1c2VkTmFtZXMuYWRkKGZpbmFsQ29tcE5hbWUpO1xuXG4gICAgdmlld3NFbnRyaWVzLnB1c2goe1xuICAgICAgaW1wb3J0TmFtZTogZmluYWxDb21wTmFtZSxcbiAgICAgIGltcG9ydFBhdGg6IGBALyR7YWN0dWFsUmVsUGF0aC5yZXBsYWNlKC9cXFxcL2csICcvJyl9YCxcbiAgICAgIHRpdGxlLFxuICAgICAgaGlkZU5hdmJhcixcbiAgICAgIGhpZGVTdGF0dXNCYXIsXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2gsXG4gICAgICBjdXN0b21QYWdlQ2xhc3MsXG4gICAgICBjdXN0b21QYWdlU3R5bGVcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFx1NzUxRlx1NjIxMCBUYWJWaWV3cy51dnVlIFx1NTE4NVx1NUJCOVxuICBjb25zdCB0YXJnZXRGaWxlID0gb3B0aW9ucy50YXJnZXRGaWxlID8/ICdzcmMvdGFiYmFyL2NvbXBvbmVudHMvVGFiVmlld3MudXZ1ZSc7XG4gIGNvbnN0IHRhYlZpZXdzRmlsZVBhdGggPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsIHRhcmdldEZpbGUpO1xuXG4gIC8vIFx1NjM5Mlx1NUU4Rlx1NEZERFx1NjMwMVx1N0EzM1x1NUI5QVx1NjAyN1xuICBjb25zdCBzb3J0ZWRJbXBvcnRzID0gWy4uLnZpZXdzRW50cmllc10uc29ydCgoYSwgYikgPT4gYS5pbXBvcnROYW1lLmxvY2FsZUNvbXBhcmUoYi5pbXBvcnROYW1lKSk7XG4gIGNvbnN0IGltcG9ydExpbmVzID0gc29ydGVkSW1wb3J0c1xuICAgIC5tYXAoaXRlbSA9PiBgaW1wb3J0ICR7aXRlbS5pbXBvcnROYW1lfSBmcm9tICcke2l0ZW0uaW1wb3J0UGF0aH0nO2ApXG4gICAgLmpvaW4oJ1xcbicpO1xuXG4gIGNvbnN0IGNvbnRlbnRCbG9ja3MgPSB2aWV3c0VudHJpZXNcbiAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGF0dHJzID0gYCA6Y29udGVudC1pbmRleD1cIiR7aW5kZXh9XCJgO1xuICAgICAgaWYgKGl0ZW0udGl0bGUpIHtcbiAgICAgICAgYXR0cnMgKz0gYCB0aXRsZT1cIiR7aXRlbS50aXRsZS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyl9XCJgO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0uZW5hYmxlUHVsbERvd25SZWZyZXNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYXR0cnMgKz0gYCA6ZW5hYmxlLXB1bGwtZG93bi1yZWZyZXNoPVwiJHtpdGVtLmVuYWJsZVB1bGxEb3duUmVmcmVzaH1cImA7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5oaWRlTmF2YmFyKSB7XG4gICAgICAgIGF0dHJzICs9IGAgOmhpZGUtbmF2YmFyPVwidHJ1ZVwiYDtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLmhpZGVTdGF0dXNCYXIpIHtcbiAgICAgICAgYXR0cnMgKz0gYCA6aGlkZS1zdGF0dXMtYmFyPVwidHJ1ZVwiYDtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLmN1c3RvbVBhZ2VDbGFzcykge1xuICAgICAgICBhdHRycyArPSBgIGN1c3RvbS1wYWdlLWNsYXNzPVwiJHtpdGVtLmN1c3RvbVBhZ2VDbGFzcy5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyl9XCJgO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0uY3VzdG9tUGFnZVN0eWxlKSB7XG4gICAgICAgIGF0dHJzICs9IGAgY3VzdG9tLXBhZ2Utc3R5bGU9XCIke2l0ZW0uY3VzdG9tUGFnZVN0eWxlLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKX1cImA7XG4gICAgICB9XG4gICAgICByZXR1cm4gYCAgICA8VGFiQ29udGVudCR7YXR0cnN9PlxcbiAgICAgIDwke2l0ZW0uaW1wb3J0TmFtZX0gLz5cXG4gICAgPC9UYWJDb250ZW50PmA7XG4gICAgfSlcbiAgICAuam9pbignXFxuJyk7XG5cbiAgY29uc3QgdGFiVmlld3NDb250ZW50ID0gYDx0ZW1wbGF0ZT5cbiAgPHZpZXcgY2xhc3M9XCJ0YWItdmlld3MtY29udGFpbmVyXCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7ZmxleDogMTtcIj5cbiR7Y29udGVudEJsb2Nrc31cbiAgPC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidXRzXCI+XG4ke2ltcG9ydExpbmVzfVxuaW1wb3J0IFRhYkNvbnRlbnQgZnJvbSAnLi9UYWJDb250ZW50LnV2dWUnO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi50YWItdmlld3MtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xufVxuPC9zdHlsZT5cbmA7XG5cbiAgbGV0IGV4aXN0aW5nQ29udGVudCA9ICcnO1xuICBpZiAoZnMuZXhpc3RzU3luYyh0YWJWaWV3c0ZpbGVQYXRoKSkge1xuICAgIGV4aXN0aW5nQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyh0YWJWaWV3c0ZpbGVQYXRoLCAndXRmLTgnKTtcbiAgfVxuXG4gIC8vIFx1NEVDNVx1NTcyOFx1NjU4N1x1NEVGNlx1NEUwRFx1NUI1OFx1NTcyOFx1NjIxNlx1NTE4NVx1NUJCOVx1NTNEOFx1NTMxNlx1NjVGNlx1NTE5OVx1NTE2NVx1RkYwQ1x1OTA3Rlx1NTE0RFx1NjVFMFx1OEMxM1x1ODlFNlx1NTNEMVx1NzBFRFx1OTFDRFx1OEY3RFxuICBpZiAoZXhpc3RpbmdDb250ZW50ICE9PSB0YWJWaWV3c0NvbnRlbnQpIHtcbiAgICBjb25zdCBwYXJlbnREaXIgPSBwYXRoLmRpcm5hbWUodGFiVmlld3NGaWxlUGF0aCk7XG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKHBhcmVudERpcikpIHtcbiAgICAgIGZzLm1rZGlyU3luYyhwYXJlbnREaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgIH1cbiAgICBmcy53cml0ZUZpbGVTeW5jKHRhYlZpZXdzRmlsZVBhdGgsIHRhYlZpZXdzQ29udGVudCwgJ3V0Zi04Jyk7XG4gICAgY29uc29sZS5sb2coJ1t0YWJiYXItdmlld3NdIFx1ODFFQVx1NTJBOFx1NTQwQ1x1NkI2NVx1NjZGNFx1NjVCMCBUYWJWaWV3cy51dnVlIFx1OEMwM1x1NUVBNlx1N0VDNFx1NEVGNicpO1xuICB9XG59XG5cbi8qKlxuICogXHU4Rjg1XHU1MkE5XHU3NTFGXHU2MjEwXHU2NzAwXHU1N0ZBXHU3ODQwXHU3Njg0IFRhYlZpZXdzLnV2dWUgXHU4MTFBXHU2MjRCXHU2N0I2XHU0RTBFXHU4OUM2XHU1NkZFXHU3RUM0XHU0RUY2XHU2M0QyXHU0RUY2XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhYmJhclZpZXdzUGx1Z2luKG9wdGlvbnM6IFRhYmJhclZpZXdzT3B0aW9ucyA9IHt9KTogUGx1Z2luIHtcbiAgbGV0IHByb2plY3RSb290ID0gJyc7XG4gIGxldCBkZWJvdW5jZVRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IG51bGwgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZEdlbmVyYXRlKCkge1xuICAgIGlmIChkZWJvdW5jZVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZGVib3VuY2VUaW1lcik7XG4gICAgfVxuICAgIGRlYm91bmNlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IG1vZGUgPSBnZXRUYWJiYXJNb2RlKHByb2plY3RSb290KTtcbiAgICAgIGlmIChtb2RlICE9PSAnMCcgJiYgbW9kZSAhPT0gJ05PX1RBQkJBUicpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBnZW5lcmF0ZVRhYlZpZXdzKHByb2plY3RSb290LCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1t0YWJiYXItdmlld3NdIFx1OTFDRFx1NjVCMFx1NzUxRlx1NjIxMCBUYWJWaWV3cyBcdTU5MzFcdThEMjU6JywgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAndml0ZS1wbHVnaW4tdGFiYmFyLXZpZXdzJyxcbiAgICBlbmZvcmNlOiAncHJlJyxcbiAgICBjb25maWdSZXNvbHZlZChjb25maWcpIHtcbiAgICAgIHByb2plY3RSb290ID0gY29uZmlnLnJvb3Q7XG4gICAgfSxcbiAgICBidWlsZFN0YXJ0KCkge1xuICAgICAgaWYgKG9wdGlvbnMuZW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbW9kZSA9IGdldFRhYmJhck1vZGUocHJvamVjdFJvb3QpO1xuICAgICAgaWYgKG1vZGUgIT09ICcwJyAmJiBtb2RlICE9PSAnTk9fVEFCQkFSJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGdlbmVyYXRlVGFiVmlld3MocHJvamVjdFJvb3QsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignW3RhYmJhci12aWV3c10gXHU3NTFGXHU2MjEwIFRhYlZpZXdzIFx1ODExQVx1NjI0Qlx1NjdCNlx1NTkzMVx1OEQyNTonLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY29uZmlndXJlU2VydmVyKHNlcnZlcikge1xuICAgICAgaWYgKG9wdGlvbnMuZW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY29uZmlnRmlsZSA9IG9wdGlvbnMuY29uZmlnRmlsZSA/PyAnc3JjL3RhYmJhci9jb25maWcudXRzJztcbiAgICAgIGNvbnN0IGNvbmZpZ0Fic1BhdGggPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsIGNvbmZpZ0ZpbGUpO1xuXG4gICAgICBzZXJ2ZXIud2F0Y2hlci5vbignY2hhbmdlJywgKGZpbGUpID0+IHtcbiAgICAgICAgY29uc3Qgbm9ybSA9IHBhdGgucmVzb2x2ZShmaWxlKTtcbiAgICAgICAgLy8gMS4gY29uZmlnLnV0cyBcdTY1MzlcdTUyQThcdTg5RTZcdTUzRDFcbiAgICAgICAgaWYgKG5vcm0gPT09IGNvbmZpZ0Fic1BhdGgpIHtcbiAgICAgICAgICBkZWJvdW5jZWRHZW5lcmF0ZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyAyLiBUYWJCYXIgXHU1QkY5XHU1RTk0XHU3Njg0XHU0RTNCXHU5ODc1XHU5NzYyXHU2NTg3XHU0RUY2XHVGRjA4XHU1OTgyIGluZGV4LnV2dWUsIGJhc2ljLnV2dWUgXHU3QjQ5XHVGRjA5XHU2NTM5XHU1MkE4XHU4OUU2XHU1M0QxXG4gICAgICAgIGlmICh3YXRjaGVkVGFiUGFnZXMuaGFzKG5vcm0pKSB7XG4gICAgICAgICAgZGVib3VuY2VkR2VuZXJhdGUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4gcGFnZXMuanNvbiBcdTY1MzlcdTUyQThcdTg5RTZcdTUzRDFcbiAgICAgICAgY29uc3QgcGFnZXNKc29uUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgJ3BhZ2VzLmpzb24nKTtcbiAgICAgICAgaWYgKG5vcm0gPT09IHBhZ2VzSnNvblBhdGgpIHtcbiAgICAgICAgICBkZWJvdW5jZWRHZW5lcmF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy92aXRlLXBsdWdpbi11bmktcGFnZXMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2NoZW5xaS9EZXNrdG9wL3VuaWJlc3RYL3BsdWdpbnMvdml0ZS1wbHVnaW4tdW5pLXBhZ2VzLnRzXCI7aW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5pbXBvcnQgSlNPTjUgZnJvbSAnanNvbjUnO1xuaW1wb3J0IHsgd3JpdGVSb3V0ZU1ldGFGaWxlIH0gZnJvbSAnLi91bmktcGFnZXMtcm91dGUtbWV0YSc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gXHU3QzdCXHU1NzhCXHU1QjlBXHU0RTQ5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBQYWdlQ29uZmlnID0ge1xuICBwYXRoOiBzdHJpbmc7XG4gIHN0eWxlPzogUmVjb3JkPHN0cmluZywgYW55PjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufTtcblxudHlwZSBTdWJQYWNrYWdlQ29uZmlnID0ge1xuICByb290OiBzdHJpbmc7XG4gIHBhZ2VzOiBQYWdlQ29uZmlnW107XG59O1xuXG50eXBlIEJhc2VDb25maWcgPSB7XG4gIGhvbWVQYWdlPzogc3RyaW5nO1xuICBwYWdlcz86IFBhZ2VDb25maWdbXTtcbiAgc3ViUGFja2FnZXM/OiBTdWJQYWNrYWdlQ29uZmlnW107XG4gIGdsb2JhbFN0eWxlPzogUmVjb3JkPHN0cmluZywgYW55PjtcbiAgdGFiQmFyPzogUmVjb3JkPHN0cmluZywgYW55PjtcbiAgZWFzeWNvbT86IFJlY29yZDxzdHJpbmcsIGFueT47XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn07XG5cbmV4cG9ydCB0eXBlIFVuaVBhZ2VzT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1NjNEMlx1NEVGNlx1NjI2Qlx1NjNDRlx1NEUwRSBwYWdlcy5qc29uIFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1NjAzQlx1NUYwMFx1NTE3M1xuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqIEBkZXNjcmlwdGlvbiBcdThCQkVcdTRFM0EgZmFsc2UgXHU2NUY2XHU1QjhDXHU1MTY4XHU3OTgxXHU3NTI4XHU4MUVBXHU1MkE4XHU2MjZCXHU2M0NGXHUzMDAxXHU5ODc1XHU5NzYyXHU4REVGXHU3NTMxXHU3NTFGXHU2MjEwXHU0RTBFIHdhdGNoZXIgXHU3NkQxXHU1NDJDXHVGRjBDXHU0RkREXHU3NTU5XHU1RjAwXHU1M0QxXHU4MDA1XHU1QjhDXHU1MTY4XHU2MjRCXHU1MkE4XHU3RUY0XHU2MkE0IHBhZ2VzLmpzb24gXHU3Njg0XHU4MEZEXHU1MjlCXG4gICAqL1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgLyoqIFx1NEUzQlx1NTMwNVx1OTg3NVx1OTc2Mlx1NjI2Qlx1NjNDRlx1NzZFRVx1NUY1NVx1RkYwQ1x1OUVEOFx1OEJBNCAnc3JjL3BhZ2VzJyAqL1xuICBkaXI/OiBzdHJpbmc7XG4gIC8qKiBcdTUyMDZcdTUzMDVcdTYyNkJcdTYzQ0ZcdTc2RUVcdTVGNTVcdTUyMTdcdTg4NjhcdUZGMENcdTU5ODIgWydzcmMvc3ViJ11cdUZGMENcdTRFMERcdTgwRkRcdTY2MkZcdTRFM0JcdTUzMDUgZGlyIFx1NzY4NFx1NUI1MFx1NzZFRVx1NUY1NSAqL1xuICBzdWJQYWNrYWdlcz86IHN0cmluZ1tdO1xuICAvKiogXHU2MzkyXHU5NjY0XHU3Njg0IGdsb2IgXHU2QTIxXHU1RjBGXHVGRjBDXHU5RUQ4XHU4QkE0XHU0RjFBXHU2MzkyXHU5NjY0IGNvbXBvbmVudHMgXHU0RTBFIHZpZXdzIFx1NzZFRVx1NUY1NSAqL1xuICBleGNsdWRlPzogc3RyaW5nW107XG4gIC8qKiBcdThGOTNcdTUxRkFcdTc2ODQgcGFnZXMuanNvbiBcdThERUZcdTVGODRcdUZGMENcdTlFRDhcdThCQTRcdTk4NzlcdTc2RUVcdTY4MzlcdTc2RUVcdTVGNTUgKi9cbiAgb3V0RmlsZT86IHN0cmluZztcbiAgLyoqIFx1NTdGQVx1Nzg0MFx1OTE0RFx1N0Y2RVx1NjU4N1x1NEVGNlx1OERFRlx1NUY4NFx1RkYwQ1x1OUVEOFx1OEJBNCAncGFnZXMuY29uZmlnLmpzb24nICovXG4gIGNvbmZpZ0ZpbGU/OiBzdHJpbmc7XG4gIC8qKiBcdTk5OTZcdTk4NzVcdThERUZcdTVGODQgKi9cbiAgaG9tZVBhZ2U/OiBzdHJpbmc7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFx1NURFNVx1NTE3N1x1NTFGRFx1NjU3MFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKiBcdThGN0JcdTkxQ0ZcdTdFQTdcdTUzMzlcdTkxNEQgZ2xvYiBcdTZBMjFcdTVGMEZcdUZGMENcdTkwN0ZcdTUxNERcdTU5MTZcdTkwRThcdTZBMjFcdTU3NTdcdTVCRkNcdTUxRkFcdTUxN0NcdTVCQjlcdTYwMjdcdTk1RUVcdTk4OTggKi9cbmZ1bmN0aW9uIG1hdGNoR2xvYihmaWxlUGF0aDogc3RyaW5nLCBwYXR0ZXJuOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHBhdHRlcm4gPT09ICcqKi9jb21wb25lbnRzLyoqLyouKicgfHwgcGF0dGVybi5pbmNsdWRlcygnY29tcG9uZW50cycpKSB7XG4gICAgcmV0dXJuIGZpbGVQYXRoLmluY2x1ZGVzKCcvY29tcG9uZW50cy8nKSB8fCBmaWxlUGF0aC5zdGFydHNXaXRoKCdjb21wb25lbnRzLycpO1xuICB9XG4gIGlmIChwYXR0ZXJuID09PSAnKiovdmlld3MvKiovKi4qJyB8fCBwYXR0ZXJuLmluY2x1ZGVzKCd2aWV3cycpKSB7XG4gICAgcmV0dXJuIGZpbGVQYXRoLmluY2x1ZGVzKCcvdmlld3MvJykgfHwgZmlsZVBhdGguc3RhcnRzV2l0aCgndmlld3MvJyk7XG4gIH1cbiAgY29uc3QgcmVnZXhTdHIgPSBwYXR0ZXJuXG4gICAgLnJlcGxhY2UoL1suK14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpXG4gICAgLnJlcGxhY2UoL1xcKlxcKlxcL1xcKi9nLCAnLionKVxuICAgIC5yZXBsYWNlKC9cXCpcXCovZywgJy4qJylcbiAgICAucmVwbGFjZSgvXFwqL2csICdbXi9dKicpXG4gICAgLnJlcGxhY2UoL1xcPy9nLCAnLicpO1xuICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7cmVnZXhTdHJ9JGApLnRlc3QoZmlsZVBhdGgpO1xufVxuXG4vKiogXHU4QkZCXHU1M0Q2IFRhYmJhciBcdTdCNTZcdTc1NjVcdTZBMjFcdTVGMEZcdTkxNERcdTdGNkVcdUZGMDgwPVx1NjVFMFRhYmJhciwgMT1cdTUzOUZcdTc1MUZUYWJiYXIsIDI9XHU4MUVBXHU1QjlBXHU0RTQ5VGFiYmFyXHVGRjA5ICovXG5mdW5jdGlvbiBnZXRUYWJiYXJNb2RlKHByb2plY3RSb290OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuVklURV9UQUJCQVJfTU9ERSAhPSBudWxsICYmIHByb2Nlc3MuZW52LlZJVEVfVEFCQkFSX01PREUgIT09ICcnKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52LlZJVEVfVEFCQkFSX01PREUudHJpbSgpO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZW52UGF0aCA9IHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgJy5lbnYnKTtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhlbnZQYXRoKSkge1xuICAgICAgY29uc3QgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhlbnZQYXRoLCAndXRmLTgnKTtcbiAgICAgIGNvbnN0IG1hdGNoID0gY29udGVudC5tYXRjaCgvXlZJVEVfVEFCQkFSX01PREVcXHMqPVxccypbJ1wiXT8oW14nXCJcXHJcXG5dKylbJ1wiXT8vbSk7XG4gICAgICBpZiAobWF0Y2ggIT0gbnVsbCAmJiBtYXRjaFsxXSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBtYXRjaFsxXS50cmltKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNhdGNoIHtcbiAgICAvLyBcdTVGRkRcdTc1NjVcdTVGMDJcdTVFMzhcbiAgfVxuICByZXR1cm4gJzEnO1xufVxuXG4vKiogXHU4QkZCXHU1M0Q2XHU2Qzk5XHU3NkQyXHU3MkVDXHU3QUNCXHU4QzAzXHU4QkQ1XHU2QTIxXHU1RjBGXHU5MTREXHU3RjZFXHVGRjA4XHU0RjE4XHU1MTQ4IHByb2Nlc3MuZW52XHVGRjBDXHU1MTc2XHU2QjIxXHU1QjlFXHU2NUY2XHU4QkZCXHU1M0Q2IC5lbnYgXHU2NTg3XHU0RUY2XHVGRjA5ICovXG5mdW5jdGlvbiBnZXRTYW5kYm94Q29uZmlnKHByb2plY3RSb290OiBzdHJpbmcpOiB7IGVuYWJsZWQ6IGJvb2xlYW47IHBhZ2VQYXRoczogc3RyaW5nW10gfSB7XG4gIGxldCBlbmFibGVkU3RyID0gcHJvY2Vzcy5lbnYuVklURV9ERVZfU0FOREJPWCA/PyBwcm9jZXNzLmVudi5WSVRFX0RFVl9TSU5HTEVfUEFHRSA/PyAnJztcbiAgbGV0IHBhdGhTdHIgPSBwcm9jZXNzLmVudi5WSVRFX0RFVl9TQU5EQk9YX1BBR0VTID8/IHByb2Nlc3MuZW52LlZJVEVfREVWX1NJTkdMRV9QQVRIID8/ICcnO1xuXG4gIGlmICghZW5hYmxlZFN0ciB8fCAhcGF0aFN0cikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBlbnZQYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCAnLmVudicpO1xuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZW52UGF0aCkpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhlbnZQYXRoLCAndXRmLTgnKTtcbiAgICAgICAgaWYgKCFlbmFibGVkU3RyKSB7XG4gICAgICAgICAgY29uc3QgbUVuYWJsZWQgPSBjb250ZW50Lm1hdGNoKC9eKD86VklURV9ERVZfU0FOREJPWHxWSVRFX0RFVl9TSU5HTEVfUEFHRSlcXHMqPVxccypbJ1wiXT8oW14nXCJcXHJcXG5dKylbJ1wiXT8vbSk7XG4gICAgICAgICAgaWYgKG1FbmFibGVkICE9IG51bGwgJiYgbUVuYWJsZWRbMV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZW5hYmxlZFN0ciA9IG1FbmFibGVkWzFdLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXRoU3RyKSB7XG4gICAgICAgICAgY29uc3QgbVBhdGggPSBjb250ZW50Lm1hdGNoKC9eKD86VklURV9ERVZfU0FOREJPWF9QQUdFU3xWSVRFX0RFVl9TSU5HTEVfUEFUSClcXHMqPVxccypbJ1wiXT8oW14nXCJcXHJcXG5dKylbJ1wiXT8vbSk7XG4gICAgICAgICAgaWYgKG1QYXRoICE9IG51bGwgJiYgbVBhdGhbMV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgcGF0aFN0ciA9IG1QYXRoWzFdLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgLy8gXHU1RkZEXHU3NTY1XHU1RjAyXHU1RTM4XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZW5hYmxlZCA9IGVuYWJsZWRTdHIudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnIHx8IGVuYWJsZWRTdHIgPT09ICcxJztcbiAgLy8gXHU2NTJGXHU2MzAxXHU5MDE3XHU1M0Y3XHUzMDAxXHU1MjA2XHU1M0Y3XHU2MjE2XHU2MzYyXHU4ODRDXHU1MjA2XHU5Njk0XHU1OTFBXHU0RTJBXHU5ODc1XHU5NzYyXHU4REVGXHU1Rjg0XG4gIGNvbnN0IHBhZ2VQYXRocyA9IHBhdGhTdHJcbiAgICAuc3BsaXQoL1ssO1xcblxccl0rLylcbiAgICAubWFwKHMgPT4gcy50cmltKCkpXG4gICAgLmZpbHRlcihCb29sZWFuKTtcblxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQsXG4gICAgcGFnZVBhdGhzXG4gIH07XG59XG5cbi8qKiBcdTg5QzRcdTgzMDNcdTUzMTZcdTk4NzVcdTk3NjJcdThERUZcdTVGODRcdTc1MjhcdTRFOEVcdTZCRDRcdTVCRjkgKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhZ2VQYXRoKHA6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwXG4gICAgLnRyaW0oKVxuICAgIC5yZXBsYWNlKC9cXFxcL2csICcvJylcbiAgICAucmVwbGFjZSgvXlxcLlxcLy8sICcnKVxuICAgIC5yZXBsYWNlKC9eXFwvLywgJycpXG4gICAgLnJlcGxhY2UoL1xcLih1dnVlfHZ1ZXx1dHN8dHN8anMpJC8sICcnKTtcbn1cblxuLyoqIFx1ODlFM1x1Njc5MCA8cm91dGU+IFx1NTc1N1x1RkYwOEpTT041IFx1NjgzQ1x1NUYwRlx1RkYwOSAqL1xuZnVuY3Rpb24gcGFyc2VSb3V0ZUJsb2NrKGNvbnRlbnQ6IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIGFueT4gfCBudWxsIHtcbiAgY29uc3QgcmVnZXggPSAvPHJvdXRlW14+XSo+KFtcXHNcXFNdKj8pPFxcL3JvdXRlPi87XG4gIGNvbnN0IG1hdGNoID0gY29udGVudC5tYXRjaChyZWdleCk7XG4gIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTjUucGFyc2UobWF0Y2hbMV0udHJpbSgpKSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICB9XG4gIGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKCdbdW5pLXBhZ2VzXSBGYWlsZWQgdG8gcGFyc2UgPHJvdXRlPiBibG9jazonLCBlKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKiogXHU0RUNFXHU2RTkwXHU3ODAxXHU0RTJEXHU2M0QwXHU1M0Q2IGRlZmluZVBhZ2Uoey4uLn0pIFx1NzY4NFx1OTE0RFx1N0Y2RVx1NUJGOVx1OEM2MSAqL1xuZnVuY3Rpb24gcGFyc2VEZWZpbmVQYWdlKGNvbnRlbnQ6IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIGFueT4gfCBudWxsIHtcbiAgLy8gXHU1OTgyXHU2NzlDXHU2NjJGIFZ1ZS9VVlVFIFx1NjU4N1x1NEVGNlx1RkYwQ1x1NEYxOFx1NTE0OFx1NTcyOCA8c2NyaXB0PiBcdTY4MDdcdTdCN0VcdTUxODVcdTg5RTNcdTY3OTBcdUZGMENcdTk2MzJcdTZCNjIgPHRlbXBsYXRlPiBcdTY1ODdcdTY3MkNcdTRFMkRcdTc2ODRcdThCRjRcdTY2MEVcdTY1ODdcdTVCNTdcdTg4QUJcdThCRUZcdThCQzZcdTUyMkJcbiAgbGV0IHRhcmdldENvbnRlbnQgPSBjb250ZW50O1xuICBjb25zdCBzY3JpcHRNYXRjaCA9IGNvbnRlbnQubWF0Y2goLzxzY3JpcHRbXj5dKj4oW1xcc1xcU10qPyk8XFwvc2NyaXB0Pi8pO1xuICBpZiAoc2NyaXB0TWF0Y2ggIT0gbnVsbCAmJiBzY3JpcHRNYXRjaFsxXSAhPSBudWxsKSB7XG4gICAgdGFyZ2V0Q29udGVudCA9IHNjcmlwdE1hdGNoWzFdO1xuICB9XG5cbiAgLy8gXHU1MzM5XHU5MTREIGRlZmluZVBhZ2UoIFx1NUYwMFx1NTkzNFxuICBjb25zdCBzdGFydFJlZ2V4ID0gL2RlZmluZVBhZ2VcXHMqXFwoXFxzKlxcey87XG4gIGNvbnN0IG1hdGNoID0gdGFyZ2V0Q29udGVudC5tYXRjaChzdGFydFJlZ2V4KTtcbiAgaWYgKG1hdGNoID09IG51bGwgfHwgbWF0Y2guaW5kZXggPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gXHU0RUNFXHU3QjJDXHU0RTAwXHU0RTJBIHsgXHU1RjAwXHU1OUNCXHVGRjBDXHU4RkZEXHU4RTJBXHU2MkVDXHU1M0Y3XHU2REYxXHU1RUE2XG4gIGNvbnN0IG9wZW5QYXJlbiA9IHRhcmdldENvbnRlbnQuaW5kZXhPZignKCcsIG1hdGNoLmluZGV4KTtcbiAgaWYgKG9wZW5QYXJlbiA9PT0gLTEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxldCBkZXB0aCA9IDA7XG4gIGxldCBpblN0cmluZyA9IGZhbHNlO1xuICBsZXQgc3RyaW5nQ2hhciA9ICcnO1xuICBsZXQgaSA9IG9wZW5QYXJlbiArIDE7XG5cbiAgZm9yICg7IGkgPCB0YXJnZXRDb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2ggPSB0YXJnZXRDb250ZW50W2ldO1xuICAgIGNvbnN0IHByZXYgPSBpID4gMCA/IHRhcmdldENvbnRlbnRbaSAtIDFdIDogJyc7XG5cbiAgICBpZiAoaW5TdHJpbmcpIHtcbiAgICAgIGlmIChjaCA9PT0gc3RyaW5nQ2hhciAmJiBwcmV2ICE9PSAnXFxcXCcpIHtcbiAgICAgICAgaW5TdHJpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycgfHwgY2ggPT09ICdgJykge1xuICAgICAgaW5TdHJpbmcgPSB0cnVlO1xuICAgICAgc3RyaW5nQ2hhciA9IGNoO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gXHU4REYzXHU4RkM3XHU2Q0U4XHU5MUNBXG4gICAgaWYgKGNoID09PSAnLycgJiYgaSArIDEgPCB0YXJnZXRDb250ZW50Lmxlbmd0aCkge1xuICAgICAgaWYgKHRhcmdldENvbnRlbnRbaSArIDFdID09PSAnLycpIHtcbiAgICAgICAgLy8gXHU1MzU1XHU4ODRDXHU2Q0U4XHU5MUNBXHVGRjBDXHU4REYzXHU1MjMwXHU4ODRDXHU1QzNFXG4gICAgICAgIGNvbnN0IG5ld2xpbmUgPSB0YXJnZXRDb250ZW50LmluZGV4T2YoJ1xcbicsIGkpO1xuICAgICAgICBpZiAobmV3bGluZSA9PT0gLTEpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpID0gbmV3bGluZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodGFyZ2V0Q29udGVudFtpICsgMV0gPT09ICcqJykge1xuICAgICAgICAvLyBcdTU5MUFcdTg4NENcdTZDRThcdTkxQ0FcbiAgICAgICAgY29uc3QgZW5kID0gdGFyZ2V0Q29udGVudC5pbmRleE9mKCcqLycsIGkgKyAyKTtcbiAgICAgICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpID0gZW5kICsgMTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNoID09PSAneycpIHtcbiAgICAgIGRlcHRoKys7XG4gICAgfVxuICAgIGlmIChjaCA9PT0gJ30nKSB7XG4gICAgICBkZXB0aC0tO1xuICAgIH1cbiAgICBpZiAoY2ggPT09ICcoJykge1xuICAgICAgZGVwdGgrKztcbiAgICB9XG4gICAgaWYgKGNoID09PSAnKScpIHtcbiAgICAgIGRlcHRoLS07XG4gICAgICBpZiAoZGVwdGggPCAwKSB7XG4gICAgICAgIC8vIFx1NjI3RVx1NTIzMFx1NEU4NiBkZWZpbmVQYWdlIFx1NTNDMlx1NjU3MFx1NzY4NFx1N0VEM1x1Njc1Rlx1NEY0RFx1N0Y2RVxuICAgICAgICBjb25zdCBhcmcgPSB0YXJnZXRDb250ZW50LnNsaWNlKG9wZW5QYXJlbiArIDEsIGkpLnRyaW0oKTtcbiAgICAgICAgLy8gXHU1M0JCXHU2Mzg5XHU1OTE2XHU1QzQyXHU4MkIxXHU2MkVDXHU1M0Y3XHU1OTgyXHU2NzlDXHU2NjJGXHU1QkY5XHU4QzYxXHU1RjYyXHU1RjBGXG4gICAgICAgIGlmIChhcmcuc3RhcnRzV2l0aCgneycpKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBKU09ONS5wYXJzZShhcmcpIGFzIFJlY29yZDxzdHJpbmcsIGFueT47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1t1bmktcGFnZXNdIEZhaWxlZCB0byBwYXJzZSBkZWZpbmVQYWdlIGFyZ3VtZW50OicsIGUpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqIFx1ODlFM1x1Njc5MFx1OTg3NVx1OTc2MiBtZXRhXHVGRjFBXHU0RjE4XHU1MTQ4IDxyb3V0ZT4gXHU1NzU3XHVGRjBDXHU1MTc2XHU2QjIxIGRlZmluZVBhZ2UgKi9cbmZ1bmN0aW9uIHBhcnNlUGFnZU1ldGEoY29udGVudDogc3RyaW5nKTogUmVjb3JkPHN0cmluZywgYW55PiB8IG51bGwge1xuICBjb25zdCByb3V0ZSA9IHBhcnNlUm91dGVCbG9jayhjb250ZW50KTtcbiAgaWYgKHJvdXRlICE9IG51bGwpIHtcbiAgICByZXR1cm4gcm91dGU7XG4gIH1cbiAgcmV0dXJuIHBhcnNlRGVmaW5lUGFnZShjb250ZW50KTtcbn1cblxuLyoqIFx1OTAxMlx1NUY1Mlx1NjI2Qlx1NjNDRiAudXZ1ZSBcdTY1ODdcdTRFRjZcdUZGMENcdTY1MkZcdTYzMDEgZXhjbHVkZSBcdTZBMjFcdTVGMEYgKi9cbmZ1bmN0aW9uIHNjYW5VdnVlRmlsZXMoZGlyOiBzdHJpbmcsIGV4Y2x1ZGVzOiBzdHJpbmdbXSA9IFtdLCBwcm9qZWN0Um9vdDogc3RyaW5nID0gJycpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gW107XG4gIGlmICghZnMuZXhpc3RzU3luYyhkaXIpKSB7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBjb25zdCBkZWZhdWx0RXhjbHVkZXMgPSBbJyoqL2NvbXBvbmVudHMvKiovKi4qJywgJyoqL3ZpZXdzLyoqLyouKiddO1xuICBjb25zdCBhbGxFeGNsdWRlcyA9IFsuLi5kZWZhdWx0RXhjbHVkZXMsIC4uLmV4Y2x1ZGVzXTtcblxuICBjb25zdCBlbnRyaWVzID0gZnMucmVhZGRpclN5bmMoZGlyLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGVudHJ5ID0gZW50cmllc1tpXTtcbiAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihkaXIsIGVudHJ5Lm5hbWUpO1xuXG4gICAgaWYgKGVudHJ5LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgIC8vIFx1OERGM1x1OEZDN1x1OUVEOFx1OEJBNFx1NzY4NCBjb21wb25lbnRzIFx1NTQ4QyB2aWV3cyBcdTc2RUVcdTVGNTVcbiAgICAgIGlmIChlbnRyeS5uYW1lID09PSAnY29tcG9uZW50cycgfHwgZW50cnkubmFtZSA9PT0gJ3ZpZXdzJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdHMucHVzaCguLi5zY2FuVXZ1ZUZpbGVzKGZ1bGxQYXRoLCBleGNsdWRlcywgcHJvamVjdFJvb3QpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLnV2dWUnKSkge1xuICAgICAgLy8gXHU2OEMwXHU2N0U1IGV4Y2x1ZGUgXHU2QTIxXHU1RjBGXG4gICAgICBjb25zdCByZWxQYXRoID0gcHJvamVjdFJvb3QgPyBwYXRoLnJlbGF0aXZlKHByb2plY3RSb290LCBmdWxsUGF0aCkucmVwbGFjZSgvXFxcXC9nLCAnLycpIDogZnVsbFBhdGgucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xuICAgICAgbGV0IGV4Y2x1ZGVkID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBlID0gMDsgZSA8IGFsbEV4Y2x1ZGVzLmxlbmd0aDsgZSsrKSB7XG4gICAgICAgIGlmIChtYXRjaEdsb2IocmVsUGF0aCwgYWxsRXhjbHVkZXNbZV0pKSB7XG4gICAgICAgICAgZXhjbHVkZWQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWV4Y2x1ZGVkKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChmdWxsUGF0aCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRzO1xufVxuXG4vKiogXHU2NTg3XHU0RUY2XHU4REVGXHU1Rjg0IFx1MjE5MiBcdTk4NzVcdTk3NjJcdThERUZcdTc1MzEgcGF0aCAqL1xuZnVuY3Rpb24gZmlsZVRvUGFnZVBhdGgoZmlsZVBhdGg6IHN0cmluZywgcGFnZXNEaXI6IHN0cmluZywgcHJvamVjdFJvb3Q6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGFic1BhZ2VzID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCBwYWdlc0Rpcik7XG4gIGNvbnN0IHJlbCA9IHBhdGgucmVsYXRpdmUoYWJzUGFnZXMsIGZpbGVQYXRoKS5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG4gIGNvbnN0IHdpdGhvdXRFeHQgPSByZWwucmVwbGFjZSgvXFwudXZ1ZSQvLCAnJyk7XG4gIHJldHVybiBwYXRoLnBvc2l4LmpvaW4ocGFnZXNEaXIsIHdpdGhvdXRFeHQpO1xufVxuXG4vKiogXHU2NzAwXHU4RkQxXHU0RTAwXHU2QjIxXHU2MjEwXHU1MjlGXHU4OUUzXHU2NzkwXHU3Njg0IHBhZ2VzLmNvbmZpZy5qc29uXHVGRjBDXHU3NTI4XHU0RThFXHU4QkVEXHU2Q0Q1XHU5NTE5XHU4QkVGXHU2NUY2XHU3Njg0XHU5NjMyXHU1RDI5XHU3RjEzXHU1QjU4XHU1MTVDXHU1RTk1ICovXG5sZXQgbGFzdEdvb2RCYXNlQ29uZmlnOiBCYXNlQ29uZmlnIHwgbnVsbCA9IG51bGw7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gXHU2ODM4XHU1RkMzXHVGRjFBXHU3NTFGXHU2MjEwIHBhZ2VzLmpzb25cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVBhZ2VzSnNvbihcbiAgb3B0czogeyBkaXI6IHN0cmluZzsgc3ViUGFja2FnZXM6IHN0cmluZ1tdOyBleGNsdWRlOiBzdHJpbmdbXTsgb3V0RmlsZTogc3RyaW5nOyBjb25maWdGaWxlOiBzdHJpbmc7IGhvbWVQYWdlOiBzdHJpbmcgfSxcbiAgcHJvamVjdFJvb3Q6IHN0cmluZyxcbiAgaXNQcm9kdWN0aW9uOiBib29sZWFuID0gZmFsc2UsXG4gIHNlcnZlcj86IGFueVxuKTogdm9pZCB7XG4gIC8vIDEuIFx1OEJGQlx1NTNENlx1NTdGQVx1Nzg0MFx1OTE0RFx1N0Y2RVxuICBsZXQgYmFzZUNvbmZpZzogQmFzZUNvbmZpZyA9IHt9O1xuICBsZXQgY29uZmlnUGFyc2VGYWlsZWQgPSBmYWxzZTtcbiAgY29uc3QgY29uZmlnUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgb3B0cy5jb25maWdGaWxlKTtcbiAgaWYgKGZzLmV4aXN0c1N5bmMoY29uZmlnUGF0aCkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmF3ID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICAgICAgYmFzZUNvbmZpZyA9IEpTT041LnBhcnNlKHJhdykgYXMgQmFzZUNvbmZpZztcbiAgICAgIGxhc3RHb29kQmFzZUNvbmZpZyA9IGJhc2VDb25maWc7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAvLyBcdTkxNERcdTdGNkVcdTVCNThcdTU3MjhcdThCRURcdTZDRDVcdTk1MTlcdThCRUZcdUZGMDhcdTkwMUFcdTVFMzhcdTRFM0FcdTc1MjhcdTYyMzdcdTZCNjNcdTU3MjhcdTdGMTZcdThGOTFcdTRFMkRcdTkwMTRcdUZGMDlcdUZGMUFcdTc1MjhcdTRFMEFcdTZCMjFcdTYyMTBcdTUyOUZcdTc2ODRcdTkxNERcdTdGNkVcdTUxNUNcdTVFOTVcdUZGMENcbiAgICAgIC8vIFx1NjcyQ1x1NkIyMVx1NzUxRlx1NjIxMFx1N0VERFx1NEUwRFx1NTQwQ1x1NkI2NVx1NTZERVx1NTE5OVx1RkYwQ1x1OTA3Rlx1NTE0RFx1ODk4Nlx1NzZENlx1NzUyOFx1NjIzN1x1NkI2M1x1NTcyOFx1N0YxNlx1OEY5MVx1NzY4NFx1NjU4N1x1NEVGNlx1NUJGQ1x1ODFGNCBnbG9iYWxTdHlsZS90YWJCYXIvZWFzeWNvbSBcdTRFMEVcdTY4M0NcdTVGMEZcdTRFMjJcdTU5MzFcbiAgICAgIGNvbmZpZ1BhcnNlRmFpbGVkID0gdHJ1ZTtcbiAgICAgIGlmIChsYXN0R29vZEJhc2VDb25maWcgIT0gbnVsbCkge1xuICAgICAgICBiYXNlQ29uZmlnID0gbGFzdEdvb2RCYXNlQ29uZmlnO1xuICAgICAgfVxuICAgICAgY29uc29sZS53YXJuKGBbdW5pLXBhZ2VzXSAke29wdHMuY29uZmlnRmlsZX0gaGFzIHN5bnRheCBlcnJvcnMsIHVzaW5nIGxhc3QgZ29vZCBjYWNoZSBhbmQgc2tpcHBpbmcgd3JpdGUtYmFjazpgLCAoZSBhcyBFcnJvcikubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gXHU2NUUwXHU3RjEzXHU1QjU4XHU1M0VGXHU3NTI4XHU2NUY2XHU3NkY0XHU2M0E1XHU0RTJEXHU2QjYyXHVGRjBDXHU0RkREXHU2MzAxIHBhZ2VzLmNvbmZpZy5qc29uIFx1NEUwRSBwYWdlcy5qc29uIFx1NTM5Rlx1NjgzN1x1RkYwQ1x1N0I0OVx1NUY4NVx1NzUyOFx1NjIzN1x1NEZFRVx1NTkwRFx1OEJFRFx1NkNENVxuICBpZiAoY29uZmlnUGFyc2VGYWlsZWQgJiYgbGFzdEdvb2RCYXNlQ29uZmlnID09IG51bGwpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbdW5pLXBhZ2VzXSBBYm9ydGVkOiAke29wdHMuY29uZmlnRmlsZX0gaGFzIHN5bnRheCBlcnJvcnMgYW5kIG5vIGNhY2hlZCBjb25maWcgaXMgYXZhaWxhYmxlLiBGaXggdGhlIGZpbGUgZmlyc3QuYCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gXHU4QkZCXHU1M0Q2XHU1REYyXHU2NzA5XHU3Njg0IHBhZ2VzLmpzb24gXHU0RjVDXHU0RTNBXHU1NkRFXHU5MDAwXHU1MTVDXHU1RTk1XHVGRjBDXHU5NjMyXHU2QjYyXHU3RjE2XHU4RjkxXHU0RTJEXHU5MDE0XHU4QkVEXHU2Q0Q1XHU5NTE5XHU4QkVGXHU1QkZDXHU4MUY0XHU5MTREXHU3RjZFXHU0RTIyXHU1OTMxXHU4MDBDXHU5ODkxXHU3RTQxXHU5MUNEXHU4RjdEXG4gIGNvbnN0IG91dFBhdGggPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsIG9wdHMub3V0RmlsZSk7XG4gIGNvbnN0IGV4aXN0aW5nUGFnZXNNYXAgPSBuZXcgTWFwPHN0cmluZywgUGFnZUNvbmZpZz4oKTtcbiAgaWYgKGZzLmV4aXN0c1N5bmMob3V0UGF0aCkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdEYXRhID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMob3V0UGF0aCwgJ3V0Zi04JykpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXhpc3RpbmdEYXRhLnBhZ2VzKSkge1xuICAgICAgICBleGlzdGluZ0RhdGEucGFnZXMuZm9yRWFjaCgocDogUGFnZUNvbmZpZykgPT4ge1xuICAgICAgICAgIGlmIChwLnBhdGgpIHtcbiAgICAgICAgICAgIGV4aXN0aW5nUGFnZXNNYXAuc2V0KHAucGF0aCwgcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2gge31cbiAgfVxuXG4gIC8vIDIuIFx1NjI2Qlx1NjNDRlx1NEUzQlx1NTMwNSAudXZ1ZSBcdTY1ODdcdTRFRjZcbiAgY29uc3QgcGFnZXNEaXIgPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsIG9wdHMuZGlyKTtcbiAgY29uc3QgZmlsZXMgPSBzY2FuVXZ1ZUZpbGVzKHBhZ2VzRGlyLCBvcHRzLmV4Y2x1ZGUsIHByb2plY3RSb290KTtcbiAgZmlsZXMuc29ydCgpO1xuXG4gIGNvbnN0IHNjYW5uZWQ6IChQYWdlQ29uZmlnICYgeyBfaGFzTWV0YT86IGJvb2xlYW4gfSlbXSA9IFtdO1xuICBjb25zdCBkZWJ1Z0Fubm90YXRlZFBhZ2VzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBkZWJ1Z0hvbWVBbm5vdGF0ZWRQYWdlczogc3RyaW5nW10gPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcmF3ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVzW2ldLCAndXRmLTgnKTtcbiAgICBjb25zdCBtZXRhID0gcGFyc2VQYWdlTWV0YShyYXcpO1xuICAgIGNvbnN0IHBhZ2VQYXRoID0gZmlsZVRvUGFnZVBhdGgoZmlsZXNbaV0sIG9wdHMuZGlyLCBwcm9qZWN0Um9vdCk7XG5cbiAgICBjb25zdCBwYWdlOiBQYWdlQ29uZmlnICYgeyBfaGFzTWV0YT86IGJvb2xlYW4gfSA9IHsgcGF0aDogcGFnZVBhdGggfTtcbiAgICBpZiAobWV0YSAhPSBudWxsKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHBhZ2UsIG1ldGEpO1xuICAgICAgcGFnZS5faGFzTWV0YSA9IHRydWU7XG5cbiAgICAgIC8vIFx1ODlDNFx1NTIxOVx1RkYxQWRlYnVnOiBmYWxzZSBcdTUxNzdcdTY3MDlcdTY3MDBcdTlBRDhcdTU0MjZcdTUxQjNcdTY3NDNcdUZGMUJcdTY2M0VcdTVGMEZcdTkxNERcdTdGNkUgZGVidWc6IGZhbHNlIFx1NjVGNlx1NzZGNFx1NjNBNVx1NUY3Qlx1NUU5NVx1NjM5Mlx1OTY2NFx1NkM5OVx1NzZEMlx1OEMwM1x1OEJENVxuICAgICAgaWYgKG1ldGEuZGVidWcgIT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGlzRGVidWdIb21lID0gbWV0YS5kZWJ1Z0hvbWUgPT09IHRydWUgfHwgbWV0YS5kZWJ1ZyA9PT0gJ2hvbWUnO1xuICAgICAgICBjb25zdCBpc0RlYnVnID0gaXNEZWJ1Z0hvbWUgfHwgbWV0YS5kZWJ1ZyA9PT0gdHJ1ZSB8fCBtZXRhLm9ubHkgPT09IHRydWUgfHwgbWV0YS5pc0RldiA9PT0gdHJ1ZTtcbiAgICAgICAgaWYgKGlzRGVidWdIb21lKSB7XG4gICAgICAgICAgZGVidWdIb21lQW5ub3RhdGVkUGFnZXMucHVzaChwYWdlUGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNEZWJ1Zykge1xuICAgICAgICAgIGRlYnVnQW5ub3RhdGVkUGFnZXMucHVzaChwYWdlUGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocmF3LmluY2x1ZGVzKCdkZWZpbmVQYWdlKCcpIHx8IHJhdy5pbmNsdWRlcygnPHJvdXRlJykpIHtcbiAgICAgIC8vIFx1NEUzNFx1NjVGNlx1OEJFRFx1NkNENVx1OTUxOVx1OEJFRlx1NjVGNlx1NEZERFx1NzU1OVx1NEU0Qlx1NTI0RFx1NzY4NFx1OTE0RFx1N0Y2RVx1RkYwQ1x1OTA3Rlx1NTE0RCBwYWdlcy5qc29uIFx1NTE4NVx1NUJCOVx1NTNEOFx1NTJBOFx1ODlFNlx1NTNEMVx1OTFDRFx1OEY3RFxuICAgICAgY29uc3Qgb2xkID0gZXhpc3RpbmdQYWdlc01hcC5nZXQocGFnZVBhdGgpO1xuICAgICAgaWYgKG9sZCAhPSBudWxsKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFnZSwgb2xkKTtcbiAgICAgICAgcGFnZS5faGFzTWV0YSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHNjYW5uZWQucHVzaChwYWdlKTtcbiAgfVxuXG4gIC8vIDMuIFx1NjI2Qlx1NjNDRlx1NTIwNlx1NTMwNVxuICBjb25zdCBjb25maWdTdWJQa2dzID0gYmFzZUNvbmZpZy5zdWJQYWNrYWdlcyA/PyBbXTtcbiAgY29uc3Qgc2Nhbm5lZFN1YlBrZ3M6IFN1YlBhY2thZ2VDb25maWdbXSA9IFtdO1xuXG4gIGZvciAobGV0IHMgPSAwOyBzIDwgb3B0cy5zdWJQYWNrYWdlcy5sZW5ndGg7IHMrKykge1xuICAgIGNvbnN0IHN1YkRpciA9IG9wdHMuc3ViUGFja2FnZXNbc107XG4gICAgY29uc3QgYWJzU3ViRGlyID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCBzdWJEaXIpO1xuICAgIGlmICghZnMuZXhpc3RzU3luYyhhYnNTdWJEaXIpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWJGaWxlcyA9IHNjYW5VdnVlRmlsZXMoYWJzU3ViRGlyLCBvcHRzLmV4Y2x1ZGUsIHByb2plY3RSb290KTtcbiAgICBzdWJGaWxlcy5zb3J0KCk7XG5cbiAgICBjb25zdCBzdWJQYWdlczogKFBhZ2VDb25maWcgJiB7IF9oYXNNZXRhPzogYm9vbGVhbiB9KVtdID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdWJGaWxlcy5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgcmF3ID0gZnMucmVhZEZpbGVTeW5jKHN1YkZpbGVzW2pdLCAndXRmLTgnKTtcbiAgICAgIGNvbnN0IG1ldGEgPSBwYXJzZVBhZ2VNZXRhKHJhdyk7XG4gICAgICAvLyBcdTUyMDZcdTUzMDVcdThERUZcdTVGODRcdUZGMUFcdTUzQkJcdTYzODkgc3ViRGlyIFx1NTI0RFx1N0YwMFx1RkYwQ1x1NTk4MiBzcmMvc3ViL2F1dGgvbG9naW5cbiAgICAgIGNvbnN0IHJlbFBhdGggPSBwYXRoLnJlbGF0aXZlKGFic1N1YkRpciwgc3ViRmlsZXNbal0pLnJlcGxhY2UoL1xcXFwvZywgJy8nKS5yZXBsYWNlKC9cXC51dnVlJC8sICcnKTtcbiAgICAgIGNvbnN0IGZ1bGxTdWJQYXRoID0gYCR7c3ViRGlyfS8ke3JlbFBhdGh9YDtcblxuICAgICAgY29uc3QgcGFnZTogUGFnZUNvbmZpZyAmIHsgX2hhc01ldGE/OiBib29sZWFuIH0gPSB7IHBhdGg6IHJlbFBhdGggfTtcbiAgICAgIGlmIChtZXRhICE9IG51bGwpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihwYWdlLCBtZXRhKTtcbiAgICAgICAgcGFnZS5faGFzTWV0YSA9IHRydWU7XG5cbiAgICAgICAgLy8gXHU4OUM0XHU1MjE5XHVGRjFBZGVidWc6IGZhbHNlIFx1NTE3N1x1NjcwOVx1NjcwMFx1OUFEOFx1NTQyNlx1NTFCM1x1Njc0M1x1RkYxQlx1NjYzRVx1NUYwRlx1OTE0RFx1N0Y2RSBkZWJ1ZzogZmFsc2UgXHU2NUY2XHU3NkY0XHU2M0E1XHU1RjdCXHU1RTk1XHU2MzkyXHU5NjY0XHU2Qzk5XHU3NkQyXHU4QzAzXHU4QkQ1XG4gICAgICAgIGlmIChtZXRhLmRlYnVnICE9PSBmYWxzZSkge1xuICAgICAgICAgIGNvbnN0IGlzRGVidWdIb21lID0gbWV0YS5kZWJ1Z0hvbWUgPT09IHRydWUgfHwgbWV0YS5kZWJ1ZyA9PT0gJ2hvbWUnO1xuICAgICAgICAgIGNvbnN0IGlzRGVidWcgPSBpc0RlYnVnSG9tZSB8fCBtZXRhLmRlYnVnID09PSB0cnVlIHx8IG1ldGEub25seSA9PT0gdHJ1ZSB8fCBtZXRhLmlzRGV2ID09PSB0cnVlO1xuICAgICAgICAgIGlmIChpc0RlYnVnSG9tZSkge1xuICAgICAgICAgICAgZGVidWdIb21lQW5ub3RhdGVkUGFnZXMucHVzaChmdWxsU3ViUGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGlzRGVidWcpIHtcbiAgICAgICAgICAgIGRlYnVnQW5ub3RhdGVkUGFnZXMucHVzaChmdWxsU3ViUGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChyYXcuaW5jbHVkZXMoJ2RlZmluZVBhZ2UoJykgfHwgcmF3LmluY2x1ZGVzKCc8cm91dGUnKSkge1xuICAgICAgICBjb25zdCBmdWxsUmVsID0gYCR7c3ViRGlyfS8ke3JlbFBhdGh9YDtcbiAgICAgICAgY29uc3Qgb2xkID0gZXhpc3RpbmdQYWdlc01hcC5nZXQoZnVsbFJlbCk7XG4gICAgICAgIGlmIChvbGQgIT0gbnVsbCkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocGFnZSwgb2xkKTtcbiAgICAgICAgICBwYWdlLl9oYXNNZXRhID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3ViUGFnZXMucHVzaChwYWdlKTtcbiAgICB9XG5cbiAgICAvLyBcdTRFMEUgYmFzZUNvbmZpZyBcdTRFMkRcdTU0MENcdTU0MEQgcm9vdCBcdTc2ODRcdTUyMDZcdTUzMDVcdTU0MDhcdTVFNzZcdUZGMDhcdTRFRTVcdTc4QzFcdTc2RDhcdTVCOUVcdTk2NDVcdTVCNThcdTU3MjhcdTc2ODRcdTY1ODdcdTRFRjZcdTRFM0FcdTUxQzZcdUZGMENcdTgxRUFcdTUyQThcdTUyNTRcdTk2NjRcdTVERjJcdTUyMjBcdTk2NjRcdTc2ODRcdTk4NzVcdTk3NjJcdUZGMDlcbiAgICBjb25zdCBleGlzdGluZyA9IGNvbmZpZ1N1YlBrZ3MuZmluZChwID0+IHAucm9vdCA9PT0gc3ViRGlyKTtcbiAgICBjb25zdCBleGlzdGluZ01hcCA9IG5ldyBNYXA8c3RyaW5nLCBQYWdlQ29uZmlnPigpO1xuICAgIGlmIChleGlzdGluZyAhPSBudWxsICYmIEFycmF5LmlzQXJyYXkoZXhpc3RpbmcucGFnZXMpKSB7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGV4aXN0aW5nLnBhZ2VzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIGV4aXN0aW5nTWFwLnNldChleGlzdGluZy5wYWdlc1trXS5wYXRoLCBleGlzdGluZy5wYWdlc1trXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWVyZ2VkUGFnZXM6IFBhZ2VDb25maWdbXSA9IFtdO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc3ViUGFnZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgIGNvbnN0IHNwID0gc3ViUGFnZXNba107XG4gICAgICBjb25zdCBtYW51YWwgPSBleGlzdGluZ01hcC5nZXQoc3AucGF0aCk7XG4gICAgICBpZiAoc3AuX2hhc01ldGEpIHtcbiAgICAgICAgLy8gXHU5ODc1XHU5NzYyXHU0RTJEXHU2NjNFXHU1RjBGXHU1OEYwXHU2NjBFXHU0RTg2IGRlZmluZVBhZ2UgXHU2MjE2IDxyb3V0ZT5cdUZGMENcdTRFRTVcdTk4NzVcdTk3NjJcdTUxODVcdTc2ODRcdTU4RjBcdTY2MEVcdTRFM0FcdTU1MkZcdTRFMDBcdTc3MUZcdTVCOUVcdTY1NzBcdTYzNkVcdTZFOTBcdUZGMDhcdTY1MkZcdTYzMDFcdTUyMjBcdTk2NjRcdTVCNTdcdTZCQjVcdUZGMDlcbiAgICAgICAgbWVyZ2VkUGFnZXMucHVzaChzcCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChtYW51YWwgIT0gbnVsbCkge1xuICAgICAgICBtZXJnZWRQYWdlcy5wdXNoKHtcbiAgICAgICAgICAuLi5tYW51YWwsXG4gICAgICAgICAgcGF0aDogc3AucGF0aFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBtZXJnZWRQYWdlcy5wdXNoKHNwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzY2FubmVkU3ViUGtncy5wdXNoKHsgcm9vdDogc3ViRGlyLCBwYWdlczogbWVyZ2VkUGFnZXMgfSk7XG4gIH1cblxuICAvLyBcdTVDMDYgYmFzZUNvbmZpZyBcdTRFMkRcdTY3MkFcdTYyNkJcdTYzQ0ZcdTc2ODRcdTUyMDZcdTUzMDVcdTUzOUZcdTY4MzdcdTRGRERcdTc1NTlcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25maWdTdWJQa2dzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY3AgPSBjb25maWdTdWJQa2dzW2ldO1xuICAgIGlmICghc2Nhbm5lZFN1YlBrZ3Muc29tZShzcCA9PiBzcC5yb290ID09PSBjcC5yb290KSkge1xuICAgICAgc2Nhbm5lZFN1YlBrZ3MucHVzaChjcCk7XG4gICAgfVxuICB9XG5cbiAgLy8gNC4gXHU1NDA4XHU1RTc2XHU0RTNCXHU1MzA1IHBhZ2VzXHVGRjA4XHU0RUU1XHU3OEMxXHU3NkQ4XHU1QjlFXHU5NjQ1XHU1QjU4XHU1NzI4XHU3Njg0XHU2NTg3XHU0RUY2XHU0RTNBXHU1MUM2XHVGRjBDXHU4MUVBXHU1MkE4XHU1MjU0XHU5NjY0XHU1REYyXHU1MjIwXHU5NjY0XHU3Njg0XHU5ODc1XHU5NzYyXHVGRjA5XG4gIGNvbnN0IG1hbnVhbFBhZ2VzID0gYmFzZUNvbmZpZy5wYWdlcyA/PyBbXTtcbiAgY29uc3QgbWFudWFsUGFnZXNNYXAgPSBuZXcgTWFwPHN0cmluZywgUGFnZUNvbmZpZz4oKTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBtYW51YWxQYWdlcy5sZW5ndGg7IGsrKykge1xuICAgIG1hbnVhbFBhZ2VzTWFwLnNldChtYW51YWxQYWdlc1trXS5wYXRoLCBtYW51YWxQYWdlc1trXSk7XG4gIH1cblxuICBjb25zdCBmaW5hbFBhZ2VzOiBQYWdlQ29uZmlnW10gPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBzY2FubmVkLmxlbmd0aDsgaysrKSB7XG4gICAgY29uc3Qgc3AgPSBzY2FubmVkW2tdO1xuICAgIGNvbnN0IG1hbnVhbCA9IG1hbnVhbFBhZ2VzTWFwLmdldChzcC5wYXRoKTtcbiAgICBpZiAoc3AuX2hhc01ldGEpIHtcbiAgICAgIC8vIFx1OTg3NVx1OTc2Mlx1NEUyRFx1NjYzRVx1NUYwRlx1NThGMFx1NjYwRVx1NEU4NiBkZWZpbmVQYWdlIFx1NjIxNiA8cm91dGU+XHVGRjBDXHU0RUU1XHU5ODc1XHU5NzYyXHU1MTg1XHU3Njg0XHU1OEYwXHU2NjBFXHU0RTNBXHU1NTJGXHU0RTAwXHU3NzFGXHU1QjlFXHU2NTcwXHU2MzZFXHU2RTkwXHVGRjA4XHU2NTJGXHU2MzAxXHU1MjIwXHU5NjY0XHU1QjU3XHU2QkI1XHVGRjA5XG4gICAgICBmaW5hbFBhZ2VzLnB1c2goc3ApO1xuICAgIH1cbiAgICBlbHNlIGlmIChtYW51YWwgIT0gbnVsbCkge1xuICAgICAgZmluYWxQYWdlcy5wdXNoKHtcbiAgICAgICAgLi4ubWFudWFsLFxuICAgICAgICBwYXRoOiBzcC5wYXRoXG4gICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmaW5hbFBhZ2VzLnB1c2goc3ApO1xuICAgIH1cbiAgfVxuXG4gIC8vIFx1NEZERFx1NzU1OVx1NjI0Qlx1NTJBOFx1OTE0RFx1N0Y2RVx1NEUyRFx1MzAwMVx1NzhDMVx1NzZEOFx1NEUwQVx1NzcxRlx1NUI5RVx1NUI1OFx1NTcyOFx1NEY0Nlx1NEUwRFx1NTcyOFx1NjI2Qlx1NjNDRlx1NzZFRVx1NUY1NVx1NTE4NVx1NzY4NFx1OTg3NVx1OTc2Mlx1RkYwOFx1NTk4MiB1bmlfbW9kdWxlcyBcdTUxODVcdTdGNkVcdTk4NzVcdTk3NjJcdUZGMDlcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBtYW51YWxQYWdlcy5sZW5ndGg7IGsrKykge1xuICAgIGNvbnN0IG1wID0gbWFudWFsUGFnZXNba107XG4gICAgaWYgKGZpbmFsUGFnZXMuc29tZShwID0+IHAucGF0aCA9PT0gbXAucGF0aCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsIGAke21wLnBhdGh9LnV2dWVgKSkpIHtcbiAgICAgIGZpbmFsUGFnZXMucHVzaChtcCk7XG4gICAgfVxuICB9XG5cbiAgLy8gNS4gXHU5OTk2XHU5ODc1XHU2MzkyXHU2NzAwXHU1MjREXHVGRjA4XHU1NzI4IHVuaS1hcHAgXHU0RTJEIHBhZ2VzLmpzb24gXHU3Njg0XHU3QjJDXHU0RTAwXHU5ODc5IHBhZ2VzWzBdIFx1NTM3M1x1NEUzQVx1NUU5NFx1NzUyOFx1OUVEOFx1OEJBNFx1NTQyRlx1NTJBOFx1OTk5Nlx1OTg3NVx1RkYwOVxuICAvLyBcdTRGMThcdTUxNDhcdTdFQTdcdUZGMUFkZWZpbmVQYWdlIHR5cGU6ICdob21lJyAvIGlzSG9tZTogdHJ1ZVx1RkYwOFx1OTg3NVx1OTc2Mlx1NTE4NVx1NjYzRVx1NUYwRlx1NThGMFx1NjYwRVx1NjcwMFx1OUFEOFx1RkYwOT4gb3B0cy5ob21lUGFnZVx1RkYwOFx1NjNEMlx1NEVGNlx1OTAwOVx1OTg3OVx1RkYwOT4gYmFzZUNvbmZpZy5ob21lUGFnZVx1RkYwOFx1OTE0RFx1N0Y2RVx1NjU4N1x1NEVGNlx1RkYwOVxuICBsZXQgaG9tZSA9ICcnO1xuICBjb25zdCBob21lSXRlbSA9IHNjYW5uZWQuZmluZChwID0+IChwIGFzIGFueSkudHlwZSA9PT0gJ2hvbWUnIHx8IChwIGFzIGFueSkuaXNIb21lID09PSB0cnVlKTtcbiAgaWYgKGhvbWVJdGVtICE9IG51bGwpIHtcbiAgICBob21lID0gaG9tZUl0ZW0ucGF0aDtcbiAgfVxuICBlbHNlIGlmIChvcHRzLmhvbWVQYWdlICE9PSAnJykge1xuICAgIGhvbWUgPSBvcHRzLmhvbWVQYWdlO1xuICB9XG4gIGVsc2UgaWYgKGJhc2VDb25maWcuaG9tZVBhZ2UgIT0gbnVsbCAmJiBiYXNlQ29uZmlnLmhvbWVQYWdlICE9PSAnJykge1xuICAgIGhvbWUgPSBiYXNlQ29uZmlnLmhvbWVQYWdlO1xuICB9XG5cbiAgaWYgKGhvbWUgIT09ICcnICYmIGZpbmFsUGFnZXMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGlkeCA9IGZpbmFsUGFnZXMuZmluZEluZGV4KHAgPT4gcC5wYXRoID09PSBob21lKTtcbiAgICBpZiAoaWR4ID4gMCkge1xuICAgICAgY29uc3QgW2l0ZW1dID0gZmluYWxQYWdlcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIGZpbmFsUGFnZXMudW5zaGlmdChpdGVtKTtcbiAgICB9XG4gIH1cblxuICAvLyBcdTgxRUFcdTUyQThcdTRFM0FcdTY1MkZcdTRFRDhcdTVCOURcdTVDMEZcdTdBMEJcdTVFOEZcdTkwMDJcdTkxNERcdTgxRUFcdTVCOUFcdTRFNDlcdTVCRkNcdTgyMkFcdTY4MEZcdUZGMDh0cmFuc3BhcmVudFRpdGxlICsgdGl0bGVQZW5ldHJhdGUgKyBkZWZhdWx0VGl0bGVcdUZGMDlcbiAgY29uc3Qgbm9ybWFsaXplQ3VzdG9tTmF2Rm9yQWxpcGF5ID0gKHA6IFBhZ2VDb25maWcpID0+IHtcbiAgICBjb25zdCB0b3BNcEFsaXBheSA9IChwIGFzIGFueSlbJ21wLWFsaXBheSddO1xuICAgIGlmICh0b3BNcEFsaXBheSAhPSBudWxsKSB7XG4gICAgICBwLnN0eWxlID0gcC5zdHlsZSA/PyB7fTtcbiAgICAgIHAuc3R5bGVbJ21wLWFsaXBheSddID0geyAuLi4ocC5zdHlsZVsnbXAtYWxpcGF5J10gPz8ge30pLCAuLi50b3BNcEFsaXBheSB9O1xuICAgICAgZGVsZXRlIChwIGFzIGFueSlbJ21wLWFsaXBheSddO1xuICAgIH1cbiAgICBpZiAocC5zdHlsZT8ubmF2aWdhdGlvblN0eWxlID09PSAnY3VzdG9tJykge1xuICAgICAgcC5zdHlsZVsnbXAtYWxpcGF5J10gPSB7XG4gICAgICAgIHRyYW5zcGFyZW50VGl0bGU6ICdhbHdheXMnLFxuICAgICAgICB0aXRsZVBlbmV0cmF0ZTogJ1lFUycsXG4gICAgICAgIGRlZmF1bHRUaXRsZTogJycsXG4gICAgICAgIC4uLihwLnN0eWxlWydtcC1hbGlwYXknXSA/PyB7fSlcbiAgICAgIH07XG4gICAgfVxuICB9O1xuICBmaW5hbFBhZ2VzLmZvckVhY2gobm9ybWFsaXplQ3VzdG9tTmF2Rm9yQWxpcGF5KTtcbiAgc2Nhbm5lZFN1YlBrZ3MuZm9yRWFjaCgocGtnKSA9PiB7XG4gICAgcGtnLnBhZ2VzLmZvckVhY2gobm9ybWFsaXplQ3VzdG9tTmF2Rm9yQWxpcGF5KTtcbiAgfSk7XG4gIGlmIChiYXNlQ29uZmlnLmdsb2JhbFN0eWxlPy5uYXZpZ2F0aW9uU3R5bGUgPT09ICdjdXN0b20nKSB7XG4gICAgYmFzZUNvbmZpZy5nbG9iYWxTdHlsZVsnbXAtYWxpcGF5J10gPSB7XG4gICAgICB0cmFuc3BhcmVudFRpdGxlOiAnYWx3YXlzJyxcbiAgICAgIHRpdGxlUGVuZXRyYXRlOiAnWUVTJyxcbiAgICAgIC4uLihiYXNlQ29uZmlnLmdsb2JhbFN0eWxlWydtcC1hbGlwYXknXSA/PyB7fSlcbiAgICB9O1xuICB9XG5cbiAgLy8gXHU2RTA1XHU3NDA2XHU0RTM0XHU2NUY2XHU2ODA3XHU4QkIwXHU1QzVFXHU2MDI3XG4gIGZpbmFsUGFnZXMuZm9yRWFjaCgocCkgPT4ge1xuICAgIGRlbGV0ZSAocCBhcyBhbnkpLl9oYXNNZXRhO1xuICAgIGlmICgocCBhcyBhbnkpLnR5cGUgPT09ICdob21lJykge1xuICAgICAgZGVsZXRlIChwIGFzIGFueSkudHlwZTtcbiAgICB9XG4gICAgZGVsZXRlIChwIGFzIGFueSkuZGVidWc7XG4gICAgZGVsZXRlIChwIGFzIGFueSkuZGVidWdIb21lO1xuICAgIGRlbGV0ZSAocCBhcyBhbnkpLm9ubHk7XG4gICAgZGVsZXRlIChwIGFzIGFueSkuaXNEZXY7XG4gIH0pO1xuICBzY2FubmVkU3ViUGtncy5mb3JFYWNoKChwa2cpID0+IHtcbiAgICBwa2cucGFnZXMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgZGVsZXRlIChwIGFzIGFueSkuX2hhc01ldGE7XG4gICAgICBkZWxldGUgKHAgYXMgYW55KS5kZWJ1ZztcbiAgICAgIGRlbGV0ZSAocCBhcyBhbnkpLmRlYnVnSG9tZTtcbiAgICAgIGRlbGV0ZSAocCBhcyBhbnkpLm9ubHk7XG4gICAgICBkZWxldGUgKHAgYXMgYW55KS5pc0RldjtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gNi4gXHU2OEMwXHU2N0U1XHU2NjJGXHU1NDI2XHU1RjAwXHU1NDJGXHU2Qzk5XHU3NkQyXHU3MkVDXHU3QUNCXHU4QzAzXHU4QkQ1XHU2QTIxXHU1RjBGXHVGRjA4XHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU1RjNBXHU1MjM2XHU3MTk0XHU2NUFEXHU3OTgxXHU3NTI4XHVGRjBDXHU1RjAwXHU1M0QxXHU3M0FGXHU1ODgzXHU2NTJGXHU2MzAxIC5lbnYgXHU5MTREXHU3RjZFXHU0RTBFIGRlZmluZVBhZ2UoeyBkZWJ1ZzogdHJ1ZSB9KVx1RkYwOVxuICBjb25zdCBzYW5kYm94Q29uZmlnID0gZ2V0U2FuZGJveENvbmZpZyhwcm9qZWN0Um9vdCk7XG4gIGNvbnN0IGhhc0VudlRhcmdldHMgPSBzYW5kYm94Q29uZmlnLmVuYWJsZWQgJiYgc2FuZGJveENvbmZpZy5wYWdlUGF0aHMubGVuZ3RoID4gMDtcblxuICBpZiAoZGVidWdIb21lQW5ub3RhdGVkUGFnZXMubGVuZ3RoID4gMSkge1xuICAgIGNvbnNvbGUud2FybihgXFx4MUJbMzNtXHUyNkEwXHVGRTBGIFt1bmktcGFnZXNdIFx1NjhDMFx1NkQ0Qlx1NTIzMFx1NTkxQVx1NEUyQVx1OTg3NVx1OTc2Mlx1NTQwQ1x1NjVGNlx1OTE0RFx1N0Y2RVx1NEU4NiBkZWJ1Z0hvbWU6IHRydWUgKCR7ZGVidWdIb21lQW5ub3RhdGVkUGFnZXMuam9pbignLCAnKX0pXHVGRjBDXHU1MTY4XHU1QzQwXHU0RUM1XHU1MTQxXHU4QkI4IDEgXHU0RTJBXHU1NDJGXHU1MkE4XHU5OTk2XHU5ODc1XHVGRjBDXHU1REYyXHU5MUM3XHU3NTI4XHU3QjJDXHU0RTAwXHU0RTJBOiAke2RlYnVnSG9tZUFubm90YXRlZFBhZ2VzWzBdfVxceDFCWzBtYCk7XG4gIH1cbiAgY29uc3QgY29tYmluZWRDb2RlRGVidWcgPSBbLi4uZGVidWdIb21lQW5ub3RhdGVkUGFnZXMsIC4uLmRlYnVnQW5ub3RhdGVkUGFnZXNdO1xuICBjb25zdCBoYXNDb2RlRGVidWcgPSBjb21iaW5lZENvZGVEZWJ1Zy5sZW5ndGggPiAwO1xuICBjb25zdCBpc1NhbmRib3hNb2RlID0gIWlzUHJvZHVjdGlvbiAmJiAoaGFzRW52VGFyZ2V0cyB8fCBoYXNDb2RlRGVidWcpO1xuXG4gIGNvbnN0IHNhbmRib3hNYWluUGFnZXM6IFBhZ2VDb25maWdbXSA9IFtdO1xuICBjb25zdCBzYW5kYm94U3ViUGtnczogU3ViUGFja2FnZUNvbmZpZ1tdID0gW107XG5cbiAgaWYgKGlzU2FuZGJveE1vZGUpIHtcbiAgICAvLyBcdTRGMThcdTUxNDhcdTdFQTdcdUZGMUEuZW52IFx1NjYzRVx1NUYwRlx1OTE0RFx1N0Y2RSA+IGRlZmluZVBhZ2UoeyBkZWJ1ZzogdHJ1ZSB9KSBcdTRFRTNcdTc4MDFcdTUxODVcdTY4MDdcdThCQjBcbiAgICBjb25zdCB0YXJnZXRzID0gaGFzRW52VGFyZ2V0cyA/IHNhbmRib3hDb25maWcucGFnZVBhdGhzIDogY29tYmluZWRDb2RlRGVidWc7XG5cbiAgICAvLyBcdThGODVcdTUyQTlcdTUzMzlcdTkxNERcdTUxRkRcdTY1NzBcdUZGMUFcdTUyMjRcdTY1QURcdTk4NzVcdTk3NjJcdThERUZcdTVGODRcdTY2MkZcdTU0MjZcdTU0N0RcdTRFMkRcdTY3RDBcdTRFMkEgdGFyZ2V0XG4gICAgY29uc3QgbWF0Y2hUYXJnZXQgPSAoZnVsbFBhdGg6IHN0cmluZywgcmVsU3ViUGF0aDogc3RyaW5nLCB0YXJnZXQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0Tm9ybSA9IG5vcm1hbGl6ZVBhZ2VQYXRoKHRhcmdldCk7XG4gICAgICBjb25zdCB0YXJnZXROb3JtV2l0aG91dFNyYyA9IHRhcmdldE5vcm0ucmVwbGFjZSgvXnNyY1xcLy8sICcnKTtcbiAgICAgIGNvbnN0IGZ1bGxOb3JtID0gbm9ybWFsaXplUGFnZVBhdGgoZnVsbFBhdGgpO1xuICAgICAgY29uc3QgZnVsbE5vcm1XaXRob3V0U3JjID0gZnVsbE5vcm0ucmVwbGFjZSgvXnNyY1xcLy8sICcnKTtcbiAgICAgIGNvbnN0IHJlbE5vcm0gPSBub3JtYWxpemVQYWdlUGF0aChyZWxTdWJQYXRoKTtcblxuICAgICAgLy8gXHU5MDFBXHU5MTREXHU3QjI2XHU1MzM5XHU5MTREIC8gXHU3NkVFXHU1RjU1XHU1MjREXHU3RjAwXHU1MzM5XHU5MTREXHVGRjA4XHU1OTgyIHNyYy9zdWIvYXV0aC8qIFx1NjIxNiBzdWIvYXV0aFx1RkYwOVxuICAgICAgaWYgKHRhcmdldC5pbmNsdWRlcygnKicpIHx8ICF0YXJnZXQuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgICBjb25zdCBjbGVhblByZWZpeCA9IHRhcmdldE5vcm1XaXRob3V0U3JjLnJlcGxhY2UoL1xcL1xcKiQvLCAnJykucmVwbGFjZSgvXFwqJC8sICcnKTtcbiAgICAgICAgaWYgKGNsZWFuUHJlZml4KSB7XG4gICAgICAgICAgaWYgKGZ1bGxOb3JtV2l0aG91dFNyYy5zdGFydHNXaXRoKGNsZWFuUHJlZml4KSB8fCByZWxOb3JtLnN0YXJ0c1dpdGgoY2xlYW5QcmVmaXgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gXHU3Q0JFXHU3ODZFXHU2MjE2XHU3NkY4XHU1QkY5XHU1MzM5XHU5MTREXG4gICAgICByZXR1cm4gKFxuICAgICAgICBmdWxsTm9ybSA9PT0gdGFyZ2V0Tm9ybVxuICAgICAgICB8fCBmdWxsTm9ybVdpdGhvdXRTcmMgPT09IHRhcmdldE5vcm1XaXRob3V0U3JjXG4gICAgICAgIHx8IHJlbE5vcm0gPT09IHRhcmdldE5vcm1XaXRob3V0U3JjXG4gICAgICAgIHx8IGZ1bGxOb3JtV2l0aG91dFNyYy5lbmRzV2l0aChgLyR7dGFyZ2V0Tm9ybVdpdGhvdXRTcmN9YClcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIFx1OEJCMFx1NUY1NVx1NURGMlx1N0VDRlx1NTMzOVx1OTE0RFx1NTIzMFx1NzY4NFx1OTg3NVx1OTc2MiBwYXRoXHVGRjBDXHU5MDdGXHU1MTREXHU5MUNEXHU1OTBEXG4gICAgY29uc3QgbWF0Y2hlZFBhZ2VQYXRocyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgLy8gXHU2MzA5IHRhcmdldHMgXHU5ODdBXHU1RThGXHU5MDEwXHU0RTAwXHU2N0U1XHU2MjdFXHVGRjBDXHU3ODZFXHU0RkREXHU3NTI4XHU2MjM3XHU1MTk5XHU1NzI4XHU3QjJDXHU0RTAwXHU5ODc5XHU3Njg0XHU5ODc1XHU5NzYyXHU0RjVDXHU0RTNBXHU5OTk2XHU5ODc1XG4gICAgZm9yIChsZXQgdCA9IDA7IHQgPCB0YXJnZXRzLmxlbmd0aDsgdCsrKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0YXJnZXRzW3RdO1xuXG4gICAgICAvLyAxKSBcdTU3MjhcdTRFM0JcdTUzMDVcdTRFMkRcdTUzMzlcdTkxNERcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmluYWxQYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwID0gZmluYWxQYWdlc1tpXTtcbiAgICAgICAgaWYgKG1hdGNoZWRQYWdlUGF0aHMuaGFzKHAucGF0aCkpXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIGlmIChtYXRjaFRhcmdldChwLnBhdGgsIHAucGF0aCwgdGFyZ2V0KSkge1xuICAgICAgICAgIG1hdGNoZWRQYWdlUGF0aHMuYWRkKHAucGF0aCk7XG4gICAgICAgICAgc2FuZGJveE1haW5QYWdlcy5wdXNoKHsgLi4ucCB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyAyKSBcdTU3MjhcdTUyMDZcdTUzMDVcdTRFMkRcdTUzMzlcdTkxNERcbiAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgc2Nhbm5lZFN1YlBrZ3MubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgY29uc3Qgc3BrZyA9IHNjYW5uZWRTdWJQa2dzW3NdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNwa2cucGFnZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBzcCA9IHNwa2cucGFnZXNbal07XG4gICAgICAgICAgY29uc3QgZnVsbFN1YlBhdGggPSBgJHtzcGtnLnJvb3R9LyR7c3AucGF0aH1gO1xuICAgICAgICAgIGlmIChtYXRjaGVkUGFnZVBhdGhzLmhhcyhmdWxsU3ViUGF0aCkpXG4gICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgIGlmIChtYXRjaFRhcmdldChmdWxsU3ViUGF0aCwgc3AucGF0aCwgdGFyZ2V0KSkge1xuICAgICAgICAgICAgbWF0Y2hlZFBhZ2VQYXRocy5hZGQoZnVsbFN1YlBhdGgpO1xuXG4gICAgICAgICAgICAvLyBcdTgyRTVcdTc2RUVcdTUyNERcdTRFM0JcdTUzMDVcdTZDQTFcdTY3MDlcdTRFRkJcdTRGNTVcdTk4NzVcdTk3NjJcdUZGMENcdTVDMDZcdThGRDlcdTdCMkNcdTRFMDBcdTRFMkFcdTUzMzlcdTkxNERcdTUyMzBcdTc2ODRcdTUyMDZcdTUzMDVcdTk4NzVcdTk3NjJcdTYzRDBcdTUzNDdcdTRFM0FcdTRFM0JcdTUzMDUgcGFnZXNbMF1cdUZGMDhcdTRGNUNcdTRFM0FcdTVFOTRcdTc1MjhcdTU0MkZcdTUyQThcdTk5OTZcdTk4NzVcdUZGMDlcbiAgICAgICAgICAgIGlmIChzYW5kYm94TWFpblBhZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICBzYW5kYm94TWFpblBhZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgIC4uLnNwLFxuICAgICAgICAgICAgICAgIHBhdGg6IGZ1bGxTdWJQYXRoXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFx1NjUzRVx1NTE2NVx1NUJGOVx1NUU5NFx1NTIwNlx1NTMwNVx1NEUyRFx1NEZERFx1NjMwMVx1NTIwNlx1NTMwNVx1OERFRlx1NzUzMVx1N0VEM1x1Njc4NFxuICAgICAgICAgICAgICBsZXQgdGFyZ2V0U3ViUGtnID0gc2FuZGJveFN1YlBrZ3MuZmluZChwa2cgPT4gcGtnLnJvb3QgPT09IHNwa2cucm9vdCk7XG4gICAgICAgICAgICAgIGlmICh0YXJnZXRTdWJQa2cgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRhcmdldFN1YlBrZyA9IHsgcm9vdDogc3BrZy5yb290LCBwYWdlczogW10gfTtcbiAgICAgICAgICAgICAgICBzYW5kYm94U3ViUGtncy5wdXNoKHRhcmdldFN1YlBrZyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGFyZ2V0U3ViUGtnLnBhZ2VzLnB1c2goeyAuLi5zcCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gMykgXHU1MTVDXHU1RTk1XHVGRjFBXHU0RUNFXHU3OEMxXHU3NkQ4XHU2NTg3XHU0RUY2XHU3NkY0XHU2M0E1XHU1MzM5XHU5MTREXHVGRjA4XHU4MkU1XHU2NzA5XHU2NUIwXHU1MjFCXHU1RUZBXHU4RkQ4XHU2NzJBXHU1NzI4XHU2ODA3XHU1MUM2XHU1MjE3XHU4ODY4XHU5MUNDXHU3Njg0XHU5ODc1XHU5NzYyXHVGRjA5XG4gICAgICBpZiAoIXRhcmdldC5pbmNsdWRlcygnKicpKSB7XG4gICAgICAgIGxldCByZXNvbHZlZFBhdGggPSBub3JtYWxpemVQYWdlUGF0aCh0YXJnZXQpO1xuICAgICAgICBpZiAoIXJlc29sdmVkUGF0aC5zdGFydHNXaXRoKCdzcmMvJykpIHtcbiAgICAgICAgICByZXNvbHZlZFBhdGggPSBgc3JjLyR7cmVzb2x2ZWRQYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtYXRjaGVkUGFnZVBhdGhzLmhhcyhyZXNvbHZlZFBhdGgpKSB7XG4gICAgICAgICAgY29uc3QgYWJzRmlsZVBhdGggPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsIGAke3Jlc29sdmVkUGF0aH0udXZ1ZWApO1xuICAgICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGFic0ZpbGVQYXRoKSkge1xuICAgICAgICAgICAgY29uc3QgcmF3ID0gZnMucmVhZEZpbGVTeW5jKGFic0ZpbGVQYXRoLCAndXRmLTgnKTtcbiAgICAgICAgICAgIGNvbnN0IG1ldGEgPSBwYXJzZVBhZ2VNZXRhKHJhdyk7XG4gICAgICAgICAgICBtYXRjaGVkUGFnZVBhdGhzLmFkZChyZXNvbHZlZFBhdGgpO1xuICAgICAgICAgICAgc2FuZGJveE1haW5QYWdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgcGF0aDogcmVzb2x2ZWRQYXRoLFxuICAgICAgICAgICAgICAuLi4obWV0YSA/PyB7fSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzYW5kYm94TWFpblBhZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc29sZS53YXJuKGBcXHgxQlszMW1bdW5pLXBhZ2VzXSBcdTZDOTlcdTc2RDJcdThDMDNcdThCRDVcdTZBMjFcdTVGMEZcdTY3MkFcdTYyN0VcdTUyMzBcdTRFRkJcdTRGNTVcdTUzMzlcdTkxNERcdTk4NzVcdTk3NjI6ICR7dGFyZ2V0cy5qb2luKCcsICcpfVxceDFCWzBtYCk7XG4gICAgfVxuICB9XG5cbiAgLy8gNy4gXHU2Nzg0XHU1RUZBXHU4RjkzXHU1MUZBXHVGRjA4cGFnZXMgXHU2NTNFXHU3QjJDXHU0RTAwXHU0RjREXHVGRjA5XG4gIGNvbnN0IG91dHB1dDogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuICBpZiAoaXNTYW5kYm94TW9kZSAmJiBzYW5kYm94TWFpblBhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICBvdXRwdXQucGFnZXMgPSBzYW5kYm94TWFpblBhZ2VzO1xuICB9XG4gIGVsc2Uge1xuICAgIG91dHB1dC5wYWdlcyA9IGZpbmFsUGFnZXM7XG4gIH1cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGJhc2VDb25maWcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBrID0ga2V5c1tpXTtcbiAgICBpZiAoayAhPT0gJ3BhZ2VzJyAmJiBrICE9PSAnaG9tZVBhZ2UnICYmIGsgIT09ICdzdWJQYWNrYWdlcycpIHtcbiAgICAgIG91dHB1dFtrXSA9IGJhc2VDb25maWdba107XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VDdXN0b21UYWJiYXJDb25maWcocHJvamVjdFJvb3Q6IHN0cmluZyk6IHtcbiAgICBjb2xvcj86IHN0cmluZztcbiAgICBzZWxlY3RlZENvbG9yPzogc3RyaW5nO1xuICAgIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcbiAgICBib3JkZXJTdHlsZT86IHN0cmluZztcbiAgICBib3JkZXJDb2xvcj86IHN0cmluZztcbiAgICBmb250U2l6ZT86IHN0cmluZztcbiAgICBpY29uV2lkdGg/OiBzdHJpbmc7XG4gICAgc3BhY2luZz86IHN0cmluZztcbiAgICBoZWlnaHQ/OiBzdHJpbmc7XG4gICAgbWlkQnV0dG9uPzogYW55O1xuICAgIGxpc3Q6IEFycmF5PHsgdGFiVHlwZT86IHN0cmluZzsgcGFnZVBhdGg6IHN0cmluZzsgdGV4dDogc3RyaW5nOyBpY29uUGF0aDogc3RyaW5nOyBzZWxlY3RlZEljb25QYXRoOiBzdHJpbmcgfT47XG4gIH0ge1xuICAgIGNvbnN0IGNvbmZpZ1BhdGggPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsICdzcmMvdGFiYmFyL2NvbmZpZy51dHMnKTtcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoY29uZmlnUGF0aCkpIHtcbiAgICAgIHJldHVybiB7IGxpc3Q6IFtdIH07XG4gICAgfVxuICAgIGNvbnN0IHJhd0NvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gICAgLy8gXHU4RkM3XHU2RUU0XHU1OTFBXHU4ODRDXHU2Q0U4XHU5MUNBXHU0RTBFXHU1MzU1XHU4ODRDXHU2Q0U4XHU5MUNBXHVGRjBDXHU5MDdGXHU1MTREXHU2Q0U4XHU5MUNBXHU2Mzg5XHU3Njg0XHU1QzVFXHU2MDI3XHVGRjA4XHU1OTgyIG1pZEJ1dHRvbiBcdTdCNDlcdUZGMDlcdTg4QUJcdThCRUZcdTg5RTNcdTY3OTBcbiAgICBjb25zdCBjb250ZW50ID0gcmF3Q29udGVudFxuICAgICAgLnJlcGxhY2UoL1xcL1xcKltcXHNcXFNdKj9cXCpcXC8vZywgJycpXG4gICAgICAucmVwbGFjZSgvXFwvXFwvLiokL2dtLCAnJyk7XG5cbiAgICAvLyBcdThCRkJcdTUzRDZcdTRFMkRcdTY1ODdcdTdGRkJcdThCRDFcdTVCNTdcdTUxNzhcbiAgICBsZXQgemhEaWN0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG4gICAgY29uc3QgemhQYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCAnc3JjL2kxOG4vbG9jYWxlcy96aC1DTi5qc29uJyk7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoemhQYXRoKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgemhEaWN0ID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoemhQYXRoLCAndXRmLTgnKSk7XG4gICAgICB9XG4gICAgICBjYXRjaCB7fVxuICAgIH1cblxuICAgIGNvbnN0IGNvbG9yTWF0Y2ggPSBjb250ZW50Lm1hdGNoKC9jb2xvclxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb2xvck1hdGNoID0gY29udGVudC5tYXRjaCgvc2VsZWN0ZWRDb2xvclxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yTWF0Y2ggPSBjb250ZW50Lm1hdGNoKC9iYWNrZ3JvdW5kQ29sb3JcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgIGNvbnN0IGJvcmRlclN0eWxlTWF0Y2ggPSBjb250ZW50Lm1hdGNoKC9ib3JkZXJTdHlsZVxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gICAgY29uc3QgYm9yZGVyQ29sb3JNYXRjaCA9IGNvbnRlbnQubWF0Y2goL2JvcmRlckNvbG9yXFxzKjpcXHMqWydcImBdKC4qPylbJ1wiYF0vKTtcbiAgICBjb25zdCBmb250U2l6ZU1hdGNoID0gY29udGVudC5tYXRjaCgvZm9udFNpemVcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgIGNvbnN0IGljb25XaWR0aE1hdGNoID0gY29udGVudC5tYXRjaCgvaWNvbldpZHRoXFxzKjpcXHMqWydcImBdKC4qPylbJ1wiYF0vKTtcbiAgICBjb25zdCBzcGFjaW5nTWF0Y2ggPSBjb250ZW50Lm1hdGNoKC9zcGFjaW5nXFxzKjpcXHMqWydcImBdKC4qPylbJ1wiYF0vKTtcbiAgICBjb25zdCBoZWlnaHRNYXRjaCA9IGNvbnRlbnQubWF0Y2goL2hlaWdodFxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG5cbiAgICBjb25zdCBtaWRCdXR0b25NYXRjaCA9IGNvbnRlbnQubWF0Y2goL21pZEJ1dHRvblxccyo6XFxzKlxceyhbXFxzXFxTXSo/KVxcfS8pO1xuICAgIGxldCBtaWRCdXR0b246IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfCB1bmRlZmluZWQ7XG4gICAgaWYgKG1pZEJ1dHRvbk1hdGNoKSB7XG4gICAgICBjb25zdCBibG9jayA9IG1pZEJ1dHRvbk1hdGNoWzFdO1xuICAgICAgY29uc3Qgd2lkdGggPSBibG9jay5tYXRjaCgvd2lkdGhcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gYmxvY2subWF0Y2goL2hlaWdodFxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gICAgICBjb25zdCB0ZXh0ID0gYmxvY2subWF0Y2goL3RleHRcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgICAgY29uc3QgaWNvblBhdGggPSBibG9jay5tYXRjaCgvaWNvblBhdGhcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgICAgY29uc3QgaWNvbldpZHRoID0gYmxvY2subWF0Y2goL2ljb25XaWR0aFxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gICAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSBibG9jay5tYXRjaCgvYmFja2dyb3VuZEltYWdlXFxzKjpcXHMqWydcImBdKC4qPylbJ1wiYF0vKTtcbiAgICAgIGNvbnN0IG1iOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gICAgICBpZiAod2lkdGggJiYgd2lkdGhbMV0udHJpbSgpKVxuICAgICAgICBtYi53aWR0aCA9IHdpZHRoWzFdLnRyaW0oKTtcbiAgICAgIGlmIChoZWlnaHQgJiYgaGVpZ2h0WzFdLnRyaW0oKSlcbiAgICAgICAgbWIuaGVpZ2h0ID0gaGVpZ2h0WzFdLnRyaW0oKTtcbiAgICAgIGlmICh0ZXh0ICYmIHRleHRbMV0udHJpbSgpKSB7XG4gICAgICAgIGNvbnN0IHRleHRLZXkgPSB0ZXh0WzFdLnRyaW0oKTtcbiAgICAgICAgbGV0IHRyYW5zbGF0ZWRUZXh0ID0gdGV4dEtleTtcbiAgICAgICAgaWYgKHRleHRLZXkuc3RhcnRzV2l0aCgndGFiYmFyLicpKSB7XG4gICAgICAgICAgY29uc3Qgc3ViS2V5ID0gdGV4dEtleS5yZXBsYWNlKCd0YWJiYXIuJywgJycpO1xuICAgICAgICAgIHRyYW5zbGF0ZWRUZXh0ID0gemhEaWN0LnRhYmJhcj8uW3N1YktleV0gPz8gdGV4dEtleTtcbiAgICAgICAgfVxuICAgICAgICBtYi50ZXh0ID0gdHJhbnNsYXRlZFRleHQ7XG4gICAgICB9XG4gICAgICBpZiAoaWNvblBhdGggJiYgaWNvblBhdGhbMV0udHJpbSgpKVxuICAgICAgICBtYi5pY29uUGF0aCA9IGljb25QYXRoWzFdLnRyaW0oKTtcbiAgICAgIGlmIChpY29uV2lkdGggJiYgaWNvbldpZHRoWzFdLnRyaW0oKSlcbiAgICAgICAgbWIuaWNvbldpZHRoID0gaWNvbldpZHRoWzFdLnRyaW0oKTtcbiAgICAgIGlmIChiYWNrZ3JvdW5kSW1hZ2UgJiYgYmFja2dyb3VuZEltYWdlWzFdLnRyaW0oKSlcbiAgICAgICAgbWIuYmFja2dyb3VuZEltYWdlID0gYmFja2dyb3VuZEltYWdlWzFdLnRyaW0oKTtcblxuICAgICAgY29uc3QgaWNvbmZvbnRNYXRjaCA9IGJsb2NrLm1hdGNoKC9pY29uZm9udFxccyo6XFxzKlxceyhbXFxzXFxTXSo/KVxcfS8pO1xuICAgICAgaWYgKGljb25mb250TWF0Y2gpIHtcbiAgICAgICAgY29uc3QgaWZCbG9jayA9IGljb25mb250TWF0Y2hbMV07XG4gICAgICAgIGNvbnN0IGlmVGV4dCA9IGlmQmxvY2subWF0Y2goL3RleHRcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgICAgICBjb25zdCBpZlNlbGVjdGVkVGV4dCA9IGlmQmxvY2subWF0Y2goL3NlbGVjdGVkVGV4dFxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gICAgICAgIGNvbnN0IGlmRm9udFNpemUgPSBpZkJsb2NrLm1hdGNoKC9mb250U2l6ZVxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gICAgICAgIGNvbnN0IGlmQ29sb3IgPSBpZkJsb2NrLm1hdGNoKC9jb2xvclxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gICAgICAgIGNvbnN0IGlmU2VsZWN0ZWRDb2xvciA9IGlmQmxvY2subWF0Y2goL3NlbGVjdGVkQ29sb3JcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgICAgICBjb25zdCBpY29uZm9udE9iajogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICAgICAgICBpZiAoaWZUZXh0ICYmIGlmVGV4dFsxXS50cmltKCkpXG4gICAgICAgICAgaWNvbmZvbnRPYmoudGV4dCA9IGlmVGV4dFsxXS50cmltKCk7XG4gICAgICAgIGlmIChpZlNlbGVjdGVkVGV4dCAmJiBpZlNlbGVjdGVkVGV4dFsxXS50cmltKCkpXG4gICAgICAgICAgaWNvbmZvbnRPYmouc2VsZWN0ZWRUZXh0ID0gaWZTZWxlY3RlZFRleHRbMV0udHJpbSgpO1xuICAgICAgICBpZiAoaWZGb250U2l6ZSAmJiBpZkZvbnRTaXplWzFdLnRyaW0oKSlcbiAgICAgICAgICBpY29uZm9udE9iai5mb250U2l6ZSA9IGlmRm9udFNpemVbMV0udHJpbSgpO1xuICAgICAgICBpZiAoaWZDb2xvciAmJiBpZkNvbG9yWzFdLnRyaW0oKSlcbiAgICAgICAgICBpY29uZm9udE9iai5jb2xvciA9IGlmQ29sb3JbMV0udHJpbSgpO1xuICAgICAgICBpZiAoaWZTZWxlY3RlZENvbG9yICYmIGlmU2VsZWN0ZWRDb2xvclsxXS50cmltKCkpXG4gICAgICAgICAgaWNvbmZvbnRPYmouc2VsZWN0ZWRDb2xvciA9IGlmU2VsZWN0ZWRDb2xvclsxXS50cmltKCk7XG4gICAgICAgIChtYiBhcyBhbnkpLmljb25mb250ID0gaWNvbmZvbnRPYmo7XG4gICAgICB9XG4gICAgICBtaWRCdXR0b24gPSBtYjtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0TWF0Y2ggPSBjb250ZW50Lm1hdGNoKC9saXN0XFxzKjpcXHMqXFxbKFtcXHNcXFNdKj8pXFxdLyk7XG4gICAgY29uc3QgbGlzdFJlc3VsdDogQXJyYXk8eyB0YWJUeXBlPzogc3RyaW5nOyBwYWdlUGF0aDogc3RyaW5nOyB0ZXh0OiBzdHJpbmc7IGljb25QYXRoOiBzdHJpbmc7IHNlbGVjdGVkSWNvblBhdGg6IHN0cmluZyB9PiA9IFtdO1xuICAgIGlmIChsaXN0TWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxpc3RCbG9jayA9IGxpc3RNYXRjaFsxXTtcbiAgICAgIGNvbnN0IGl0ZW1SZWdleCA9IC9cXHsoW1xcc1xcU10qPylcXH0vZztcbiAgICAgIGxldCBtID0gaXRlbVJlZ2V4LmV4ZWMobGlzdEJsb2NrKTtcbiAgICAgIHdoaWxlIChtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1CbG9jayA9IG1bMV07XG4gICAgICAgIGNvbnN0IGl0ZW1UeXBlID0gaXRlbUJsb2NrLm1hdGNoKC90YWJUeXBlXFxzKjpcXHMqWydcImBdKC4qPylbJ1wiYF0vKTtcbiAgICAgICAgY29uc3QgcGFnZVBhdGggPSBpdGVtQmxvY2subWF0Y2goL3BhZ2VQYXRoXFxzKjpcXHMqWydcImBdKC4qPylbJ1wiYF0vKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGl0ZW1CbG9jay5tYXRjaCgvdGV4dFxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gICAgICAgIGNvbnN0IGljb25QYXRoID0gaXRlbUJsb2NrLm1hdGNoKC9pY29uUGF0aFxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSWNvblBhdGggPSBpdGVtQmxvY2subWF0Y2goL3NlbGVjdGVkSWNvblBhdGhcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgICAgICBpZiAocGFnZVBhdGggJiYgdGV4dCkge1xuICAgICAgICAgIGNvbnN0IHRleHRLZXkgPSB0ZXh0WzFdLnRyaW0oKTtcbiAgICAgICAgICBsZXQgdHJhbnNsYXRlZFRleHQgPSB0ZXh0S2V5O1xuICAgICAgICAgIGlmICh0ZXh0S2V5LnN0YXJ0c1dpdGgoJ3RhYmJhci4nKSkge1xuICAgICAgICAgICAgY29uc3Qgc3ViS2V5ID0gdGV4dEtleS5yZXBsYWNlKCd0YWJiYXIuJywgJycpO1xuICAgICAgICAgICAgdHJhbnNsYXRlZFRleHQgPSB6aERpY3QudGFiYmFyPy5bc3ViS2V5XSA/PyB0ZXh0S2V5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGl0ZW1PYmo6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7XG4gICAgICAgICAgICBwYWdlUGF0aDogcGFnZVBhdGhbMV0udHJpbSgpLnJlcGxhY2UoL15cXC8vLCAnJyksXG4gICAgICAgICAgICB0ZXh0OiB0cmFuc2xhdGVkVGV4dCxcbiAgICAgICAgICAgIGljb25QYXRoOiBpY29uUGF0aCA/IGljb25QYXRoWzFdLnRyaW0oKSA6ICcnLFxuICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogc2VsZWN0ZWRJY29uUGF0aCA/IHNlbGVjdGVkSWNvblBhdGhbMV0udHJpbSgpIDogJydcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gXHU0RTFBXHU1MkExXHU2ODA3XHU4QkM2XHVGRjA4dHlwZVx1RkYwOVx1RkYxQVx1NEVDNVx1NTZERVx1NTE5OVx1NEUzQVx1OTg3NVx1OTc2Mlx1N0VBN1x1NTUyRlx1NEUwMFx1OTUyRVx1RkYwQ1x1NEY5Qlx1NTM5Rlx1NzUxRiB0YWJCYXIgXHU5ODc1XHU5NzYyXHU0RTkyXHU4REYzXHU1M0JCXHU5MUNEXG4gICAgICAgICAgaWYgKGl0ZW1UeXBlICYmIGl0ZW1UeXBlWzFdLnRyaW0oKSlcbiAgICAgICAgICAgIGl0ZW1PYmoudGFiVHlwZSA9IGl0ZW1UeXBlWzFdLnRyaW0oKTtcblxuICAgICAgICAgIGNvbnN0IGljb25mb250TWF0Y2ggPSBpdGVtQmxvY2subWF0Y2goL2ljb25mb250XFxzKjpcXHMqXFx7KFtcXHNcXFNdKj8pXFx9Lyk7XG4gICAgICAgICAgaWYgKGljb25mb250TWF0Y2gpIHtcbiAgICAgICAgICAgIGNvbnN0IGlmQmxvY2sgPSBpY29uZm9udE1hdGNoWzFdO1xuICAgICAgICAgICAgY29uc3QgaWZUZXh0ID0gaWZCbG9jay5tYXRjaCgvdGV4dFxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gICAgICAgICAgICBjb25zdCBpZlNlbGVjdGVkVGV4dCA9IGlmQmxvY2subWF0Y2goL3NlbGVjdGVkVGV4dFxccyo6XFxzKlsnXCJgXSguKj8pWydcImBdLyk7XG4gICAgICAgICAgICBjb25zdCBpZkZvbnRTaXplID0gaWZCbG9jay5tYXRjaCgvZm9udFNpemVcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgICAgICAgICAgY29uc3QgaWZDb2xvciA9IGlmQmxvY2subWF0Y2goL2NvbG9yXFxzKjpcXHMqWydcImBdKC4qPylbJ1wiYF0vKTtcbiAgICAgICAgICAgIGNvbnN0IGlmU2VsZWN0ZWRDb2xvciA9IGlmQmxvY2subWF0Y2goL3NlbGVjdGVkQ29sb3JcXHMqOlxccypbJ1wiYF0oLio/KVsnXCJgXS8pO1xuICAgICAgICAgICAgY29uc3QgaWNvbmZvbnRPYmo6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgICAgICAgICAgIGlmIChpZlRleHQgJiYgaWZUZXh0WzFdLnRyaW0oKSlcbiAgICAgICAgICAgICAgaWNvbmZvbnRPYmoudGV4dCA9IGlmVGV4dFsxXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoaWZTZWxlY3RlZFRleHQgJiYgaWZTZWxlY3RlZFRleHRbMV0udHJpbSgpKVxuICAgICAgICAgICAgICBpY29uZm9udE9iai5zZWxlY3RlZFRleHQgPSBpZlNlbGVjdGVkVGV4dFsxXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoaWZGb250U2l6ZSAmJiBpZkZvbnRTaXplWzFdLnRyaW0oKSlcbiAgICAgICAgICAgICAgaWNvbmZvbnRPYmouZm9udFNpemUgPSBpZkZvbnRTaXplWzFdLnRyaW0oKTtcbiAgICAgICAgICAgIGlmIChpZkNvbG9yICYmIGlmQ29sb3JbMV0udHJpbSgpKVxuICAgICAgICAgICAgICBpY29uZm9udE9iai5jb2xvciA9IGlmQ29sb3JbMV0udHJpbSgpO1xuICAgICAgICAgICAgaWYgKGlmU2VsZWN0ZWRDb2xvciAmJiBpZlNlbGVjdGVkQ29sb3JbMV0udHJpbSgpKVxuICAgICAgICAgICAgICBpY29uZm9udE9iai5zZWxlY3RlZENvbG9yID0gaWZTZWxlY3RlZENvbG9yWzFdLnRyaW0oKTtcbiAgICAgICAgICAgIGl0ZW1PYmouaWNvbmZvbnQgPSBpY29uZm9udE9iajtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaXN0UmVzdWx0LnB1c2goaXRlbU9iaiBhcyBhbnkpO1xuICAgICAgICB9XG4gICAgICAgIG0gPSBpdGVtUmVnZXguZXhlYyhsaXN0QmxvY2spO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjb2xvcjogY29sb3JNYXRjaCA/IGNvbG9yTWF0Y2hbMV0udHJpbSgpIDogJ0B0YWJCYXJDb2xvcicsXG4gICAgICBzZWxlY3RlZENvbG9yOiBzZWxlY3RlZENvbG9yTWF0Y2ggPyBzZWxlY3RlZENvbG9yTWF0Y2hbMV0udHJpbSgpIDogJ0B0YWJCYXJTZWxlY3RlZENvbG9yJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yTWF0Y2ggPyBiYWNrZ3JvdW5kQ29sb3JNYXRjaFsxXS50cmltKCkgOiAnQHRhYkJhckJhY2tncm91bmRDb2xvcicsXG4gICAgICBib3JkZXJTdHlsZTogYm9yZGVyU3R5bGVNYXRjaCA/IGJvcmRlclN0eWxlTWF0Y2hbMV0udHJpbSgpIDogJ0B0YWJCYXJCb3JkZXJTdHlsZScsXG4gICAgICBib3JkZXJDb2xvcjogYm9yZGVyQ29sb3JNYXRjaCA/IGJvcmRlckNvbG9yTWF0Y2hbMV0udHJpbSgpIDogdW5kZWZpbmVkLFxuICAgICAgZm9udFNpemU6IGZvbnRTaXplTWF0Y2ggPyBmb250U2l6ZU1hdGNoWzFdLnRyaW0oKSA6IHVuZGVmaW5lZCxcbiAgICAgIGljb25XaWR0aDogaWNvbldpZHRoTWF0Y2ggPyBpY29uV2lkdGhNYXRjaFsxXS50cmltKCkgOiB1bmRlZmluZWQsXG4gICAgICBzcGFjaW5nOiBzcGFjaW5nTWF0Y2ggPyBzcGFjaW5nTWF0Y2hbMV0udHJpbSgpIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiBoZWlnaHRNYXRjaCA/IGhlaWdodE1hdGNoWzFdLnRyaW0oKSA6IHVuZGVmaW5lZCxcbiAgICAgIG1pZEJ1dHRvbixcbiAgICAgIGxpc3Q6IGxpc3RSZXN1bHRcbiAgICB9O1xuICB9XG5cbiAgLy8gXHU2ODM5XHU2MzZFXHU2Qzk5XHU3NkQyXHU4QzAzXHU4QkQ1XHU2QTIxXHU1RjBGXHU2MjE2IFZJVEVfVEFCQkFSX01PREUgXHU1OTA0XHU3NDA2IFRhYmJhciBcdTZBMjFcdTVGMEZcbiAgaWYgKGlzU2FuZGJveE1vZGUgJiYgc2FuZGJveE1haW5QYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcGFyc2VkQ29uZmlnID0gcGFyc2VDdXN0b21UYWJiYXJDb25maWcocHJvamVjdFJvb3QpO1xuICAgIC8vIFx1OEZDN1x1NkVFNFx1NTFGQVx1NUY1M1x1NTI0RFx1NkM5OVx1NzZEMlx1N0YxNlx1OEJEMVx1NEUyRFx1NzcxRlx1NUI5RVx1NUI1OFx1NTcyOFx1NzY4NCBUYWJCYXIgXHU5ODc1XHU5NzYyXHU5ODc5XG4gICAgY29uc3QgdmFsaWRTYW5kYm94VGFiTGlzdCA9IHBhcnNlZENvbmZpZy5saXN0LmZpbHRlcihpdGVtID0+XG4gICAgICBzYW5kYm94TWFpblBhZ2VzLnNvbWUocCA9PlxuICAgICAgICBwLnBhdGggPT09IGl0ZW0ucGFnZVBhdGhcbiAgICAgICAgfHwgcC5wYXRoID09PSBgc3JjLyR7aXRlbS5wYWdlUGF0aH1gXG4gICAgICAgIHx8IGBzcmMvJHtwLnBhdGh9YCA9PT0gaXRlbS5wYWdlUGF0aFxuICAgICAgICB8fCBub3JtYWxpemVQYWdlUGF0aChwLnBhdGgpID09PSBub3JtYWxpemVQYWdlUGF0aChpdGVtLnBhZ2VQYXRoKVxuICAgICAgKVxuICAgICk7XG5cbiAgICAvLyB1bmktYXBwIFx1NTNDQVx1NUZBRVx1NEZFMVx1NUMwRlx1N0EwQlx1NUU4Rlx1NUU5NVx1NUM0Mlx1ODlDNFx1ODMwM1x1RkYxQXRhYkJhci5saXN0IFx1NjU3MFx1OTFDRlx1NUZDNVx1OTg3Qlx1NTcyOCAyIH4gNSBcdTk4NzlcdTRFNEJcdTk1RjRcbiAgICAvLyBcdTgyRTVcdTZDOTlcdTc2RDJcdTRFMkRcdTU0MENcdTY1RjZcdThDMDNcdThCRDVcdTRFODYgPj0gMiBcdTRFMkEgVGFiIFx1OTg3NVx1OTc2Mlx1RkYwQ1x1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1NTQwOFx1NkNENVx1NzY4NCB0YWJCYXIgXHU4MjgyXHU3MEI5XHU0RjlCXHU1MzlGXHU3NTFGXHU1MjA3XHU2MzYyXG4gICAgLy8gXHU4MkU1XHU0RUM1XHU4QzAzXHU4QkQ1IDEgXHU0RTJBIFRhYiBcdTk4NzVcdTk3NjJcdUZGMENcdTc5RkJcdTk2NjRcdTdDRkJcdTdFREZcdTdFQTcgdGFiQmFyIFx1ODI4Mlx1NzBCOVx1OTA3Rlx1NTE0RFx1NjJBNVx1OERFRlx1NzUzMVx1N0YzQVx1NTkzMVx1OTUxOVx1OEJFRlx1RkYwOFx1NzU0Q1x1OTc2Mlx1NzUzMSBBcHAua3UgXHU4MUVBXHU1QjlBXHU0RTQ5IFRhYkJhciBcdThEMUZcdThEMjNcdTg5QzZcdTg5QzlcdTU0NDhcdTczQjBcdUZGMDlcbiAgICBpZiAodmFsaWRTYW5kYm94VGFiTGlzdC5sZW5ndGggPj0gMikge1xuICAgICAgY29uc3QgdGFiYmFyTW9kZSA9IGdldFRhYmJhck1vZGUocHJvamVjdFJvb3QpO1xuICAgICAgY29uc3QgaXNDdXN0b20gPSB0YWJiYXJNb2RlICE9PSAnMScgJiYgdGFiYmFyTW9kZSAhPT0gJ05BVElWRV9UQUJCQVInO1xuICAgICAgb3V0cHV0LnRhYkJhciA9IHtcbiAgICAgICAgLi4uKGlzQ3VzdG9tID8geyBjdXN0b206IHRydWUgfSA6IHt9KSxcbiAgICAgICAgY29sb3I6IHBhcnNlZENvbmZpZy5jb2xvcixcbiAgICAgICAgc2VsZWN0ZWRDb2xvcjogcGFyc2VkQ29uZmlnLnNlbGVjdGVkQ29sb3IsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogcGFyc2VkQ29uZmlnLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgYm9yZGVyU3R5bGU6IHBhcnNlZENvbmZpZy5ib3JkZXJTdHlsZSxcbiAgICAgICAgbGlzdDogdmFsaWRTYW5kYm94VGFiTGlzdFxuICAgICAgfTtcbiAgICAgIGlmIChwYXJzZWRDb25maWcuYm9yZGVyQ29sb3IpXG4gICAgICAgIG91dHB1dC50YWJCYXIuYm9yZGVyQ29sb3IgPSBwYXJzZWRDb25maWcuYm9yZGVyQ29sb3I7XG4gICAgICBpZiAocGFyc2VkQ29uZmlnLmZvbnRTaXplKVxuICAgICAgICBvdXRwdXQudGFiQmFyLmZvbnRTaXplID0gcGFyc2VkQ29uZmlnLmZvbnRTaXplO1xuICAgICAgaWYgKHBhcnNlZENvbmZpZy5pY29uV2lkdGgpXG4gICAgICAgIG91dHB1dC50YWJCYXIuaWNvbldpZHRoID0gcGFyc2VkQ29uZmlnLmljb25XaWR0aDtcbiAgICAgIGlmIChwYXJzZWRDb25maWcuc3BhY2luZylcbiAgICAgICAgb3V0cHV0LnRhYkJhci5zcGFjaW5nID0gcGFyc2VkQ29uZmlnLnNwYWNpbmc7XG4gICAgICBpZiAocGFyc2VkQ29uZmlnLmhlaWdodClcbiAgICAgICAgb3V0cHV0LnRhYkJhci5oZWlnaHQgPSBwYXJzZWRDb25maWcuaGVpZ2h0O1xuICAgICAgaWYgKHBhcnNlZENvbmZpZy5taWRCdXR0b24pXG4gICAgICAgIG91dHB1dC50YWJCYXIubWlkQnV0dG9uID0gcGFyc2VkQ29uZmlnLm1pZEJ1dHRvbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkZWxldGUgb3V0cHV0LnRhYkJhcjtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgdGFiYmFyTW9kZSA9IGdldFRhYmJhck1vZGUocHJvamVjdFJvb3QpO1xuICAgIGlmICh0YWJiYXJNb2RlID09PSAnMCcgfHwgdGFiYmFyTW9kZSA9PT0gJ05PX1RBQkJBUicpIHtcbiAgICAgIGRlbGV0ZSBvdXRwdXQudGFiQmFyO1xuICAgIH1cbiAgICBlbHNlIGlmICh0YWJiYXJNb2RlID09PSAnMScgfHwgdGFiYmFyTW9kZSA9PT0gJ05BVElWRV9UQUJCQVInKSB7XG4gICAgICAvLyBcdTZBMjFcdTVGMEYxXHVGRjA4XHU1MzlGXHU3NTFGXHU2QTIxXHU1RjBGXHVGRjA5XHVGRjFBXHU0RUNFIHNyYy90YWJiYXIvY29uZmlnLnV0cyBcdTc2ODQgY3VzdG9tVGFiYmFyQ29uZmlnIFx1NTJBOFx1NjAwMVx1NjNEMFx1NTNENlx1NzUxRlx1NjIxMFx1NTM5Rlx1NzUxRiB0YWJCYXIgXHU5MTREXHU3RjZFXG4gICAgICBjb25zdCBwYXJzZWRDb25maWcgPSBwYXJzZUN1c3RvbVRhYmJhckNvbmZpZyhwcm9qZWN0Um9vdCk7XG4gICAgICBpZiAob3V0cHV0LnRhYkJhciA9PSBudWxsKSB7XG4gICAgICAgIG91dHB1dC50YWJCYXIgPSB7XG4gICAgICAgICAgY29sb3I6IHBhcnNlZENvbmZpZy5jb2xvcixcbiAgICAgICAgICBzZWxlY3RlZENvbG9yOiBwYXJzZWRDb25maWcuc2VsZWN0ZWRDb2xvcixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhcnNlZENvbmZpZy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgYm9yZGVyU3R5bGU6IHBhcnNlZENvbmZpZy5ib3JkZXJTdHlsZSxcbiAgICAgICAgICBsaXN0OiBwYXJzZWRDb25maWcubGlzdFxuICAgICAgICB9O1xuICAgICAgICBpZiAocGFyc2VkQ29uZmlnLmJvcmRlckNvbG9yKVxuICAgICAgICAgIG91dHB1dC50YWJCYXIuYm9yZGVyQ29sb3IgPSBwYXJzZWRDb25maWcuYm9yZGVyQ29sb3I7XG4gICAgICAgIGlmIChwYXJzZWRDb25maWcuZm9udFNpemUpXG4gICAgICAgICAgb3V0cHV0LnRhYkJhci5mb250U2l6ZSA9IHBhcnNlZENvbmZpZy5mb250U2l6ZTtcbiAgICAgICAgaWYgKHBhcnNlZENvbmZpZy5pY29uV2lkdGgpXG4gICAgICAgICAgb3V0cHV0LnRhYkJhci5pY29uV2lkdGggPSBwYXJzZWRDb25maWcuaWNvbldpZHRoO1xuICAgICAgICBpZiAocGFyc2VkQ29uZmlnLnNwYWNpbmcpXG4gICAgICAgICAgb3V0cHV0LnRhYkJhci5zcGFjaW5nID0gcGFyc2VkQ29uZmlnLnNwYWNpbmc7XG4gICAgICAgIGlmIChwYXJzZWRDb25maWcuaGVpZ2h0KVxuICAgICAgICAgIG91dHB1dC50YWJCYXIuaGVpZ2h0ID0gcGFyc2VkQ29uZmlnLmhlaWdodDtcbiAgICAgICAgaWYgKHBhcnNlZENvbmZpZy5taWRCdXR0b24pXG4gICAgICAgICAgb3V0cHV0LnRhYkJhci5taWRCdXR0b24gPSBwYXJzZWRDb25maWcubWlkQnV0dG9uO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGRlbGV0ZSBvdXRwdXQudGFiQmFyLmN1c3RvbTtcbiAgICAgICAgaWYgKHBhcnNlZENvbmZpZy5saXN0Lmxlbmd0aCA+IDAgJiYgKG91dHB1dC50YWJCYXIubGlzdCA9PSBudWxsIHx8IG91dHB1dC50YWJCYXIubGlzdC5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgb3V0cHV0LnRhYkJhci5saXN0ID0gcGFyc2VkQ29uZmlnLmxpc3Q7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlZENvbmZpZy5taWRCdXR0b24pXG4gICAgICAgICAgb3V0cHV0LnRhYkJhci5taWRCdXR0b24gPSBwYXJzZWRDb25maWcubWlkQnV0dG9uO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0YWJiYXJNb2RlID09PSAnMicgfHwgdGFiYmFyTW9kZSA9PT0gJ0NVU1RPTV9UQUJCQVJfV0lUSF9OQVRJVkUnIHx8IHRhYmJhck1vZGUgPT09ICdDVVNUT01fVEFCQkFSJykge1xuICAgICAgLy8gXHU2QTIxXHU1RjBGMlx1RkYwOFx1NUUyNlx1NTM5Rlx1NzUxRlx1OTE0RFx1N0Y2RVx1NzY4NFx1ODFFQVx1NUI5QVx1NEU0OSBUYWJCYXJcdUZGMDlcdUZGMUFcdTc1MUZcdTYyMTBcdTUzMDVcdTU0MkIgY3VzdG9tOiB0cnVlIFx1NzY4NCBwYWdlcy5qc29uIHRhYkJhciBcdTkxNERcdTdGNkVcdUZGMENcdTkwMUFcdThGQzcgc3dpdGNoVGFiIFx1OERGM1x1OEY2Q1xuICAgICAgY29uc3QgcGFyc2VkQ29uZmlnID0gcGFyc2VDdXN0b21UYWJiYXJDb25maWcocHJvamVjdFJvb3QpO1xuICAgICAgaWYgKG91dHB1dC50YWJCYXIgPT0gbnVsbCkge1xuICAgICAgICBvdXRwdXQudGFiQmFyID0ge1xuICAgICAgICAgIGN1c3RvbTogdHJ1ZSxcbiAgICAgICAgICBjb2xvcjogcGFyc2VkQ29uZmlnLmNvbG9yLFxuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IHBhcnNlZENvbmZpZy5zZWxlY3RlZENvbG9yLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcGFyc2VkQ29uZmlnLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICBib3JkZXJTdHlsZTogcGFyc2VkQ29uZmlnLmJvcmRlclN0eWxlLFxuICAgICAgICAgIGxpc3Q6IHBhcnNlZENvbmZpZy5saXN0XG4gICAgICAgIH07XG4gICAgICAgIGlmIChwYXJzZWRDb25maWcuYm9yZGVyQ29sb3IpXG4gICAgICAgICAgb3V0cHV0LnRhYkJhci5ib3JkZXJDb2xvciA9IHBhcnNlZENvbmZpZy5ib3JkZXJDb2xvcjtcbiAgICAgICAgaWYgKHBhcnNlZENvbmZpZy5mb250U2l6ZSlcbiAgICAgICAgICBvdXRwdXQudGFiQmFyLmZvbnRTaXplID0gcGFyc2VkQ29uZmlnLmZvbnRTaXplO1xuICAgICAgICBpZiAocGFyc2VkQ29uZmlnLmljb25XaWR0aClcbiAgICAgICAgICBvdXRwdXQudGFiQmFyLmljb25XaWR0aCA9IHBhcnNlZENvbmZpZy5pY29uV2lkdGg7XG4gICAgICAgIGlmIChwYXJzZWRDb25maWcuc3BhY2luZylcbiAgICAgICAgICBvdXRwdXQudGFiQmFyLnNwYWNpbmcgPSBwYXJzZWRDb25maWcuc3BhY2luZztcbiAgICAgICAgaWYgKHBhcnNlZENvbmZpZy5oZWlnaHQpXG4gICAgICAgICAgb3V0cHV0LnRhYkJhci5oZWlnaHQgPSBwYXJzZWRDb25maWcuaGVpZ2h0O1xuICAgICAgICBpZiAocGFyc2VkQ29uZmlnLm1pZEJ1dHRvbilcbiAgICAgICAgICBvdXRwdXQudGFiQmFyLm1pZEJ1dHRvbiA9IHBhcnNlZENvbmZpZy5taWRCdXR0b247XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3V0cHV0LnRhYkJhci5jdXN0b20gPSB0cnVlO1xuICAgICAgICBpZiAocGFyc2VkQ29uZmlnLmxpc3QubGVuZ3RoID4gMCAmJiAob3V0cHV0LnRhYkJhci5saXN0ID09IG51bGwgfHwgb3V0cHV0LnRhYkJhci5saXN0Lmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICBvdXRwdXQudGFiQmFyLmxpc3QgPSBwYXJzZWRDb25maWcubGlzdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VkQ29uZmlnLm1pZEJ1dHRvbilcbiAgICAgICAgICBvdXRwdXQudGFiQmFyLm1pZEJ1dHRvbiA9IHBhcnNlZENvbmZpZy5taWRCdXR0b247XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRhYmJhck1vZGUgPT09ICczJyB8fCB0YWJiYXJNb2RlID09PSAnQ1VTVE9NX1RBQkJBUl9XSVRIT1VUX05BVElWRScgfHwgdGFiYmFyTW9kZSA9PT0gJzQnIHx8IHRhYmJhck1vZGUgPT09ICdTSU5HTEVfUEFHRV9UQUJCQVInKSB7XG4gICAgICAvLyBcdTZBMjFcdTVGMEYzXHVGRjA4XHU3RUFGXHU4MUVBXHU1QjlBXHU0RTQ5IFRhYkJhclx1RkYwQ1x1NjVFMFx1NTM5Rlx1NzUxRlx1OTE0RFx1N0Y2RVx1RkYwOVx1NEUwRSBcdTZBMjFcdTVGMEY0XHVGRjA4XHU1MzU1XHU5ODc1XHU5NzYyIFRhYkJhciBcdTVCQjlcdTU2NjhcdTZBMjFcdTVGMEZcdUZGMDlcdUZGMUFcdTVCOENcdTUxNjhcdTUyMjBcdTk2NjQgcGFnZXMuanNvbiBcdTRFMkRcdTc2ODQgdGFiQmFyXG4gICAgICBkZWxldGUgb3V0cHV0LnRhYkJhcjtcbiAgICB9XG4gIH1cblxuICBpZiAoaXNTYW5kYm94TW9kZSAmJiBzYW5kYm94TWFpblBhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoc2FuZGJveFN1YlBrZ3MubGVuZ3RoID4gMCkge1xuICAgICAgb3V0cHV0LnN1YlBhY2thZ2VzID0gc2FuZGJveFN1YlBrZ3M7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZGVsZXRlIG91dHB1dC5zdWJQYWNrYWdlcztcbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAoc2Nhbm5lZFN1YlBrZ3MubGVuZ3RoID4gMCkge1xuICAgIG91dHB1dC5zdWJQYWNrYWdlcyA9IHNjYW5uZWRTdWJQa2dzO1xuICB9XG5cbiAgLy8gNy4gXHU1MTk5XHU1MTY1IHBhZ2VzLmpzb25cbiAgY29uc3QganNvblN0ciA9IGAke0pTT04uc3RyaW5naWZ5KG91dHB1dCwgbnVsbCwgMil9XFxuYDtcbiAgLy8gXHU1NDBDXHU2QjY1XHU4REVGXHU3NTMxXHU1MTQzXHU0RkUxXHU2MDZGXHU4ODY4XHVGRjA4dXNlUm91dGUoKS5tZXRhIC8gLm5hbWUgXHU3Njg0XHU2NTcwXHU2MzZFXHU2RTkwXHVGRjBDXHU4OUMxIHBsdWdpbnMvdW5pLXBhZ2VzLXJvdXRlLW1ldGEudHNcdUZGMDlcbiAgd3JpdGVSb3V0ZU1ldGFGaWxlKG91dHB1dCwgcHJvamVjdFJvb3QpO1xuICBsZXQgZXhpc3RpbmcgPSAnJztcbiAgaWYgKGZzLmV4aXN0c1N5bmMob3V0UGF0aCkpIHtcbiAgICBleGlzdGluZyA9IGZzLnJlYWRGaWxlU3luYyhvdXRQYXRoLCAndXRmLTgnKTtcbiAgfVxuICBpZiAoanNvblN0ciAhPT0gZXhpc3RpbmcpIHtcbiAgICBmcy53cml0ZUZpbGVTeW5jKG91dFBhdGgsIGpzb25TdHIsICd1dGYtOCcpO1xuICAgIGlmIChpc1NhbmRib3hNb2RlICYmIHNhbmRib3hNYWluUGFnZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgYWxsUGF0aHMgPSBbXG4gICAgICAgIC4uLnNhbmRib3hNYWluUGFnZXMubWFwKHAgPT4gcC5wYXRoKSxcbiAgICAgICAgLi4uc2FuZGJveFN1YlBrZ3MuZmxhdE1hcChzID0+IHMucGFnZXMubWFwKHAgPT4gYCR7cy5yb290fS8ke3AucGF0aH1gKSlcbiAgICAgIF07XG4gICAgICBjb25zb2xlLmxvZyhgXFx4MUJbMzNtXHUyNkExIFt1bmktcGFnZXNdIFx1NkM5OVx1NzZEMlx1NzJFQ1x1N0FDQlx1OEMwM1x1OEJENVx1NkEyMVx1NUYwRlx1NURGMlx1NzUxRlx1NjU0ODogXHU1MTcxICR7YWxsUGF0aHMubGVuZ3RofSBcdTRFMkFcdTk4NzVcdTk3NjIgKFx1OTk5Nlx1OTg3NTogJHtzYW5kYm94TWFpblBhZ2VzWzBdLnBhdGh9KVxceDFCWzBtYCk7XG4gICAgICBjb25zb2xlLmxvZyhgXFx4MUJbMzNtICAgXHU1MzA1XHU1NDJCXHU5ODc1XHU5NzYyOiAke2FsbFBhdGhzLmpvaW4oJyB8ICcpfVxceDFCWzBtYCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYFt1bmktcGFnZXNdIEdlbmVyYXRlZCAke29wdHMub3V0RmlsZX0gKCR7ZmluYWxQYWdlcy5sZW5ndGh9IHBhZ2VzLCAke3NjYW5uZWRTdWJQa2dzLmxlbmd0aH0gc3VicGFja2FnZXMpYCk7XG4gICAgfVxuXG4gICAgLy8gXHU4OUU2XHU1M0QxIFZpdGUgXHU1RjAwXHU1M0QxXHU2NzBEXHU1MkExXHU1NjY4XHU1MTY4XHU5MUNGXHU3MEVEXHU5MUNEXHU4RjdEXHVGRjBDXHU5MDFBXHU3N0U1IEg1IC8gQXBwIFx1NUYwMFx1NTNEMVx1NUJBMlx1NjIzN1x1N0FFRlx1N0FDQlx1NTM3M1x1NTIzN1x1NjVCMFx1OERFRlx1NzUzMVxuICAgIGlmIChzZXJ2ZXIgIT0gbnVsbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbW9kID0gc2VydmVyLm1vZHVsZUdyYXBoLmdldE1vZHVsZUJ5SWQob3V0UGF0aCk7XG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkge1xuICAgICAgICAgIHNlcnZlci5tb2R1bGVHcmFwaC5pbnZhbGlkYXRlTW9kdWxlKG1vZCk7XG4gICAgICAgIH1cbiAgICAgICAgc2VydmVyLndzLnNlbmQoe1xuICAgICAgICAgIHR5cGU6ICdmdWxsLXJlbG9hZCcsXG4gICAgICAgICAgcGF0aDogJyonXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY2F0Y2gge31cbiAgICB9XG4gIH1cblxuICAvLyA4LiBcdTgxRUFcdTUyQThcdTU0MENcdTZCNjVcdTU2REVcdTUxOTkgcGFnZXMuY29uZmlnLmpzb25cdUZGMDhcdTRGRERcdThCQzFcdTYyNEJcdTUyQThcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjZcdTRFMEVcdTY1QjBcdTVFRkEvXHU1MjIwXHU5NjY0L1x1NEZFRVx1NjUzOVx1OTg3NVx1OTc2Mlx1NUI4Q1x1NTE2OFx1NTNDQ1x1NTQxMVx1NTQwQ1x1NkI2NVx1RkYwOVxuICAvLyBcdTI2QTBcdUZFMEYgXHU2Qzk5XHU3NkQyXHU4QzAzXHU4QkQ1XHU2QTIxXHU1RjBGXHU0RTBCXHUzMDEwXHU3RUREXHU0RTBEXHU1NkRFXHU1MTk5XHUzMDExXHVGRjBDXHU5MDdGXHU1MTREXHU3ODM0XHU1NzRGXHU2MjE2XHU4OEMxXHU1MjZBIHBhZ2VzLmNvbmZpZy5qc29uIFx1NzY4NFx1NUI4Q1x1NjU3NFx1NTE2OFx1OTFDRlx1OTE0RFx1N0Y2RVxuICBpZiAoaXNTYW5kYm94TW9kZSAmJiBzYW5kYm94TWFpblBhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjZcdTVCNThcdTU3MjhcdThCRURcdTZDRDVcdTk1MTlcdThCRUZcdTY1RjZcdTdFRERcdTRFMERcdTU2REVcdTUxOTlcdUZGMENcdTkwN0ZcdTUxNERcdTc4MzRcdTU3NEZcdTc1MjhcdTYyMzdcdTZCNjNcdTU3MjhcdTdGMTZcdThGOTFcdTc2ODRcdTY1ODdcdTRFRjZcbiAgaWYgKGZzLmV4aXN0c1N5bmMoY29uZmlnUGF0aCkgJiYgIWNvbmZpZ1BhcnNlRmFpbGVkKSB7XG4gICAgbGV0IGNvbmZpZ1VwZGF0ZWQgPSBmYWxzZTtcbiAgICBjb25zdCBjdXJyZW50Q29uZmlnUmF3ID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICAgIGxldCBjdXJyZW50Q29uZmlnOiBCYXNlQ29uZmlnID0ge307XG4gICAgdHJ5IHtcbiAgICAgIGN1cnJlbnRDb25maWcgPSBKU09ONS5wYXJzZShjdXJyZW50Q29uZmlnUmF3KSBhcyBCYXNlQ29uZmlnO1xuICAgIH1cbiAgICBjYXRjaCB7fVxuXG4gICAgLy8gMSkgXHU1NDBDXHU2QjY1XHU0RTNCXHU1MzA1XHVGRjA4XHU2NUIwXHU1ODlFXHUzMDAxXHU0RkVFXHU2NTM5XHUzMDAxXHU1MjU0XHU5NjY0XHU1REYyXHU1MjIwXHU5NjY0XHVGRjA5XG4gICAgY29uc3QgbmV3TWFpblBhZ2VzOiBQYWdlQ29uZmlnW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbmFsUGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5ld01haW5QYWdlcy5wdXNoKGZpbmFsUGFnZXNbaV0pO1xuICAgIH1cbiAgICBpZiAoY3VycmVudENvbmZpZy5wYWdlcyA9PSBudWxsIHx8IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRDb25maWcucGFnZXMpICE9PSBKU09OLnN0cmluZ2lmeShuZXdNYWluUGFnZXMpKSB7XG4gICAgICBjdXJyZW50Q29uZmlnLnBhZ2VzID0gbmV3TWFpblBhZ2VzO1xuICAgICAgY29uZmlnVXBkYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gMikgXHU1NDBDXHU2QjY1XHU1MjA2XHU1MzA1XHVGRjA4XHU2NUIwXHU1ODlFXHUzMDAxXHU0RkVFXHU2NTM5XHUzMDAxXHU1MjU0XHU5NjY0XHU1REYyXHU1MjIwXHU5NjY0XHVGRjA5XG4gICAgY3VycmVudENvbmZpZy5zdWJQYWNrYWdlcyA/Pz0gW107XG4gICAgZm9yIChsZXQgcyA9IDA7IHMgPCBzY2FubmVkU3ViUGtncy5sZW5ndGg7IHMrKykge1xuICAgICAgY29uc3Qgc3BrZyA9IHNjYW5uZWRTdWJQa2dzW3NdO1xuICAgICAgY29uc3QgdGFyZ2V0U3ViID0gY3VycmVudENvbmZpZy5zdWJQYWNrYWdlcy5maW5kKGNwID0+IGNwLnJvb3QgPT09IHNwa2cucm9vdCk7XG4gICAgICBpZiAodGFyZ2V0U3ViID09IG51bGwpIHtcbiAgICAgICAgY3VycmVudENvbmZpZy5zdWJQYWNrYWdlcy5wdXNoKHsgcm9vdDogc3BrZy5yb290LCBwYWdlczogc3BrZy5wYWdlcyB9KTtcbiAgICAgICAgY29uZmlnVXBkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHRhcmdldFN1Yi5wYWdlcykgIT09IEpTT04uc3RyaW5naWZ5KHNwa2cucGFnZXMpKSB7XG4gICAgICAgICAgdGFyZ2V0U3ViLnBhZ2VzID0gc3BrZy5wYWdlcztcbiAgICAgICAgICBjb25maWdVcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb25maWdVcGRhdGVkKSB7XG4gICAgICBjb25zdCBuZXdDb25maWdKc29uID0gYCR7SlNPTi5zdHJpbmdpZnkoY3VycmVudENvbmZpZywgbnVsbCwgMil9XFxuYDtcbiAgICAgIGlmIChuZXdDb25maWdKc29uICE9PSBjdXJyZW50Q29uZmlnUmF3KSB7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoY29uZmlnUGF0aCwgbmV3Q29uZmlnSnNvbiwgJ3V0Zi04Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBbdW5pLXBhZ2VzXSBBdXRvbWF0aWNhbGx5IHN5bmNlZCBjaGFuZ2VzIGludG8gJHtvcHRzLmNvbmZpZ0ZpbGV9YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVml0ZSBcdTYzRDJcdTRFRjZcdTVCRkNcdTUxRkFcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlQYWdlc1BsdWdpbihvcHRpb25zOiBVbmlQYWdlc09wdGlvbnMgPSB7fSkge1xuICBjb25zdCBvcHRzID0ge1xuICAgIGVuYWJsZWQ6IG9wdGlvbnMuZW5hYmxlZCA/PyB0cnVlLFxuICAgIGRpcjogb3B0aW9ucy5kaXIgPz8gJ3NyYy9wYWdlcycsXG4gICAgc3ViUGFja2FnZXM6IG9wdGlvbnMuc3ViUGFja2FnZXMgPz8gW10sXG4gICAgZXhjbHVkZTogb3B0aW9ucy5leGNsdWRlID8/IFtdLFxuICAgIG91dEZpbGU6IG9wdGlvbnMub3V0RmlsZSA/PyAncGFnZXMuanNvbicsXG4gICAgY29uZmlnRmlsZTogb3B0aW9ucy5jb25maWdGaWxlID8/ICdwYWdlcy5jb25maWcuanNvbicsXG4gICAgaG9tZVBhZ2U6IG9wdGlvbnMuaG9tZVBhZ2UgPz8gJydcbiAgfTtcblxuICBsZXQgcHJvamVjdFJvb3QgPSBwcm9jZXNzLmN3ZCgpO1xuICBsZXQgc2VydmVyOiBhbnkgPSBudWxsO1xuICBsZXQgaXNQcm9kdWN0aW9uID0gZmFsc2U7XG4gIGxldCB0aW1lb3V0SWQ6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgbnVsbCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkR2VuZXJhdGUoKSB7XG4gICAgaWYgKHRpbWVvdXRJZCAhPSBudWxsKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG4gICAgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBnZW5lcmF0ZVBhZ2VzSnNvbihvcHRzLCBwcm9qZWN0Um9vdCwgaXNQcm9kdWN0aW9uLCBzZXJ2ZXIpO1xuICAgIH0sIDgwKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3VuaS1wYWdlcycsXG5cbiAgICBjb25maWdSZXNvbHZlZChjb25maWc6IGFueSkge1xuICAgICAgcHJvamVjdFJvb3QgPSBjb25maWcucm9vdCA/PyBwcm9jZXNzLmN3ZCgpO1xuICAgICAgLy8gXHU1M0VBXHU2NzA5XHU1NzI4XHU2NjBFXHU3ODZFXHU3Njg0XHU3NTFGXHU0RUE3XHU1M0QxXHU3MjQ4XHU2MjUzXHU1MzA1XHU2Nzg0XHU1RUZBXHVGRjA4XHU5NzVFIHdhdGNoIFx1NUYwMFx1NTNEMVx1NkEyMVx1NUYwRlx1RkYwOVx1NjVGNlx1NjI0RFx1NTIyNFx1NUI5QVx1NEUzQVx1NzUxRlx1NEVBN1x1NkEyMVx1NUYwRlxuICAgICAgLy8gXHU2NzJDXHU1NzMwXHU1RjAwXHU1M0QxXHU4QzAzXHU4QkQ1XHVGRjA4XHU2NUUwXHU4QkJBXHU2NjJGIEg1IFx1NzY4NCBkZXYgc2VydmUgXHU4RkQ4XHU2NjJGIGlPUyAvIEFuZHJvaWQgLyBIYXJtb255T1MgXHU3Njg0XHU2NzJDXHU1NzMwXHU1MzlGXHU3NTFGXHU1N0ZBXHU1RUE3XHU3RjE2XHU4QkQxXHVGRjA5XHU1NzQ3XHU1MTQxXHU4QkI4XHU2Qzk5XHU3NkQyXHU2QTIxXHU1RjBGXHU2QjYzXHU1RTM4XHU3NTFGXHU2NTQ4XG4gICAgICBjb25zdCBtb2RlID0gY29uZmlnLm1vZGUgPz8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPz8gJ2RldmVsb3BtZW50JztcbiAgICAgIGNvbnN0IGlzRXhwbGljaXRQcm9kID0gbW9kZSA9PT0gJ3Byb2R1Y3Rpb24nIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG4gICAgICBjb25zdCBpc1dhdGNoID0gQm9vbGVhbihjb25maWcuYnVpbGQ/LndhdGNoIHx8IHByb2Nlc3MuZW52LlVOSV9XQVRDSCB8fCBwcm9jZXNzLmVudi5VTklfQVBQX1dBVENIKTtcbiAgICAgIGlzUHJvZHVjdGlvbiA9IGlzRXhwbGljaXRQcm9kICYmICFpc1dhdGNoO1xuICAgIH0sXG5cbiAgICBidWlsZFN0YXJ0KCkge1xuICAgICAgaWYgKCFvcHRzLmVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZ2VuZXJhdGVQYWdlc0pzb24ob3B0cywgcHJvamVjdFJvb3QsIGlzUHJvZHVjdGlvbiwgc2VydmVyKTtcbiAgICB9LFxuXG4gICAgLyoqIFx1NzlGQlx1OTY2NCBkZWZpbmVQYWdlKC4uLikgXHU1QjhGXHU4QzAzXHU3NTI4XHVGRjBDXHU5MDdGXHU1MTREXHU4RkQwXHU4ODRDXHU2NUY2XHU2MkE1XHU5NTE5ICovXG4gICAgdHJhbnNmb3JtKGNvZGU6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgICAgaWYgKCFjb2RlLmluY2x1ZGVzKCdkZWZpbmVQYWdlKCcpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgY29uc3QgcmF3SWQgPSBpZC5zcGxpdCgnPycpWzBdLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcbiAgICAgIGlmICghcmF3SWQuZW5kc1dpdGgoJy51dnVlJykgJiYgIXJhd0lkLmVuZHNXaXRoKCcudnVlJykpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXJ0UmVnZXggPSAvZGVmaW5lUGFnZVxccypcXChcXHMqXFx7LztcbiAgICAgIGNvbnN0IG1hdGNoID0gY29kZS5tYXRjaChzdGFydFJlZ2V4KTtcbiAgICAgIGlmIChtYXRjaCA9PSBudWxsIHx8IG1hdGNoLmluZGV4ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9wZW5QYXJlbiA9IGNvZGUuaW5kZXhPZignKCcsIG1hdGNoLmluZGV4KTtcbiAgICAgIGlmIChvcGVuUGFyZW4gPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBcdTRFQ0Ugb3BlblBhcmVuKzEgXHU1RjAwXHU1OUNCXHU4RkZEXHU4RTJBXHVGRjBDXHU0RTBFIHBhcnNlRGVmaW5lUGFnZSBcdTkwM0JcdThGOTFcdTRFMDBcdTgxRjRcbiAgICAgIGxldCBkZXB0aCA9IDA7XG4gICAgICBsZXQgaW5TdHJpbmcgPSBmYWxzZTtcbiAgICAgIGxldCBzdHJpbmdDaGFyID0gJyc7XG4gICAgICBsZXQgZW5kSWR4ID0gLTE7XG5cbiAgICAgIGZvciAobGV0IGkgPSBvcGVuUGFyZW4gKyAxOyBpIDwgY29kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaCA9IGNvZGVbaV07XG4gICAgICAgIGNvbnN0IHByZXYgPSBpID4gMCA/IGNvZGVbaSAtIDFdIDogJyc7XG5cbiAgICAgICAgaWYgKGluU3RyaW5nKSB7XG4gICAgICAgICAgaWYgKGNoID09PSBzdHJpbmdDaGFyICYmIHByZXYgIT09ICdcXFxcJykge1xuICAgICAgICAgICAgaW5TdHJpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJyB8fCBjaCA9PT0gJ2AnKSB7XG4gICAgICAgICAgaW5TdHJpbmcgPSB0cnVlO1xuICAgICAgICAgIHN0cmluZ0NoYXIgPSBjaDtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2ggPT09ICcvJyAmJiBpICsgMSA8IGNvZGUubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKGNvZGVbaSArIDFdID09PSAnLycpIHtcbiAgICAgICAgICAgIGNvbnN0IG5sID0gY29kZS5pbmRleE9mKCdcXG4nLCBpKTtcbiAgICAgICAgICAgIGlmIChubCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpID0gbmw7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNvZGVbaSArIDFdID09PSAnKicpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBjb2RlLmluZGV4T2YoJyovJywgaSArIDIpO1xuICAgICAgICAgICAgaWYgKGUgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSA9IGUgKyAxO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaCA9PT0gJ3snIHx8IGNoID09PSAnKCcpIHtcbiAgICAgICAgICBkZXB0aCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaCA9PT0gJ30nIHx8IGNoID09PSAnKScpIHtcbiAgICAgICAgICBkZXB0aC0tO1xuICAgICAgICAgIGlmIChkZXB0aCA8IDApIHtcbiAgICAgICAgICAgIGVuZElkeCA9IGkgKyAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRJZHggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBlbmRJZHggXHU2MzA3XHU1NDExIGApYCBcdTRFNEJcdTU0MEVcdTRFMDBcdTRFMkFcdTVCNTdcdTdCMjZcdUZGMENcdTUzNzMgZGVmaW5lUGFnZSBcdThDMDNcdTc1MjhcdTc2ODRcdTdFRDNcdTY3NUZcbiAgICAgIC8vIFx1NUY4MFx1NTI0RFx1NkUwNVx1OTY2NFx1NTkxQVx1NEY1OVx1NjM2Mlx1ODg0Q1xuICAgICAgbGV0IHN0YXJ0ID0gbWF0Y2guaW5kZXg7XG4gICAgICBpZiAoc3RhcnQgPiAwICYmIGNvZGVbc3RhcnQgLSAxXSA9PT0gJ1xcbicpIHtcbiAgICAgICAgc3RhcnQtLTtcbiAgICAgICAgaWYgKHN0YXJ0ID4gMCAmJiBjb2RlW3N0YXJ0IC0gMV0gPT09ICdcXHInKSB7XG4gICAgICAgICAgc3RhcnQtLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2hpbGUgKGVuZElkeCA8IGNvZGUubGVuZ3RoICYmIChjb2RlW2VuZElkeF0gPT09ICdcXG4nIHx8IGNvZGVbZW5kSWR4XSA9PT0gJ1xccicpKSB7XG4gICAgICAgIGVuZElkeCsrO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdDb2RlID0gY29kZS5zbGljZSgwLCBzdGFydCkgKyBjb2RlLnNsaWNlKGVuZElkeCk7XG4gICAgICByZXR1cm4geyBjb2RlOiBuZXdDb2RlLCBtYXA6IG51bGwgfTtcbiAgICB9LFxuXG4gICAgY29uZmlndXJlU2VydmVyKHM6IGFueSkge1xuICAgICAgaWYgKCFvcHRzLmVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2VydmVyID0gcztcbiAgICAgIGNvbnN0IHBhZ2VzRGlyID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCBvcHRzLmRpcik7XG4gICAgICBjb25zdCBjb25maWdQYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCBvcHRzLmNvbmZpZ0ZpbGUpO1xuICAgICAgY29uc3QgdGFiYmFyQ29uZmlnUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgJ3NyYy90YWJiYXIvY29uZmlnLnV0cycpO1xuICAgICAgY29uc3QgZW52UGF0aCA9IHBhdGgucmVzb2x2ZShwcm9qZWN0Um9vdCwgJy5lbnYnKTtcblxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGFnZXNEaXIpKSB7XG4gICAgICAgIHNlcnZlci53YXRjaGVyLmFkZChwYWdlc0Rpcik7XG4gICAgICB9XG4gICAgICAvLyBcdTc2RDFcdTU0MkNcdTUyMDZcdTUzMDVcdTc2RUVcdTVGNTVcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0cy5zdWJQYWNrYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzdWJEaXIgPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsIG9wdHMuc3ViUGFja2FnZXNbaV0pO1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhzdWJEaXIpKSB7XG4gICAgICAgICAgc2VydmVyLndhdGNoZXIuYWRkKHN1YkRpcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKGNvbmZpZ1BhdGgpKSB7XG4gICAgICAgIHNlcnZlci53YXRjaGVyLmFkZChjb25maWdQYXRoKTtcbiAgICAgIH1cbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHRhYmJhckNvbmZpZ1BhdGgpKSB7XG4gICAgICAgIHNlcnZlci53YXRjaGVyLmFkZCh0YWJiYXJDb25maWdQYXRoKTtcbiAgICAgIH1cbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKGVudlBhdGgpKSB7XG4gICAgICAgIHNlcnZlci53YXRjaGVyLmFkZChlbnZQYXRoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNQYWdlRmlsZSA9IChmcDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIGNvbnN0IG4gPSBmcC5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG4gICAgICAgIGlmICghbi5lbmRzV2l0aCgnLnV2dWUnKSB8fCBuLmluY2x1ZGVzKCc/JykpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gXHU2OEMwXHU2N0U1XHU2NjJGXHU1NDI2XHU4OEFCIGV4Y2x1ZGVcdUZGMDhcdTU5ODIgY29tcG9uZW50c1x1MzAwMXZpZXdzIFx1N0I0OVx1RkYwOVxuICAgICAgICBjb25zdCBhbGxFeGNsdWRlcyA9IFsnKiovY29tcG9uZW50cy8qKi8qLionLCAnKiovdmlld3MvKiovKi4qJywgLi4ub3B0cy5leGNsdWRlXTtcbiAgICAgICAgY29uc3QgcmVsUGF0aCA9IHByb2plY3RSb290ID8gcGF0aC5yZWxhdGl2ZShwcm9qZWN0Um9vdCwgZnApLnJlcGxhY2UoL1xcXFwvZywgJy8nKSA6IG47XG4gICAgICAgIGZvciAobGV0IGUgPSAwOyBlIDwgYWxsRXhjbHVkZXMubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICBpZiAobWF0Y2hHbG9iKHJlbFBhdGgsIGFsbEV4Y2x1ZGVzW2VdKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBcdTVFMjYgLyBcdThGQjlcdTc1NENcdTUzMzlcdTkxNERcdUZGMENcdTkwN0ZcdTUxNEQgc3JjL3BhZ2VzIFx1OEJFRlx1NTMzOVx1OTE0RCBzcmMvcGFnZXMteHh4XG4gICAgICAgIGlmIChuLmluY2x1ZGVzKGAke29wdHMuZGlyLnJlcGxhY2UoL1xcXFwvZywgJy8nKX0vYCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBcdTY4QzBcdTY3RTVcdTY2MkZcdTU0MjZcdTU3MjhcdTUyMDZcdTUzMDVcdTc2RUVcdTVGNTVcdTRFMkRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzLnN1YlBhY2thZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG4uaW5jbHVkZXMoYCR7b3B0cy5zdWJQYWNrYWdlc1tpXS5yZXBsYWNlKC9cXFxcL2csICcvJyl9L2ApKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfTtcblxuICAgICAgc2VydmVyLndhdGNoZXIub24oJ2FkZCcsIChmaWxlUGF0aDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChpc1BhZ2VGaWxlKGZpbGVQYXRoKSkge1xuICAgICAgICAgIGRlYm91bmNlZEdlbmVyYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2VydmVyLndhdGNoZXIub24oJ3VubGluaycsIChmaWxlUGF0aDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChpc1BhZ2VGaWxlKGZpbGVQYXRoKSkge1xuICAgICAgICAgIGRlYm91bmNlZEdlbmVyYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2VydmVyLndhdGNoZXIub24oJ2NoYW5nZScsIChmaWxlUGF0aDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBmaWxlUGF0aC5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG4gICAgICAgIC8vIFx1OTE0RFx1N0Y2RVx1NjU4N1x1NEVGNlx1NjIxNlx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlx1NTNEOFx1NTMxNlxuICAgICAgICBpZiAoXG4gICAgICAgICAgbm9ybWFsaXplZCA9PT0gY29uZmlnUGF0aC5yZXBsYWNlKC9cXFxcL2csICcvJylcbiAgICAgICAgICB8fCBub3JtYWxpemVkLmluY2x1ZGVzKCdwYWdlcy5jb25maWcnKVxuICAgICAgICAgIHx8IG5vcm1hbGl6ZWQuaW5jbHVkZXMoJ3RhYmJhci9jb25maWcnKVxuICAgICAgICAgIHx8IG5vcm1hbGl6ZWQuZW5kc1dpdGgoJy5lbnYnKVxuICAgICAgICApIHtcbiAgICAgICAgICBkZWJvdW5jZWRHZW5lcmF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFx1OTg3NVx1OTc2Mlx1NjU4N1x1NEVGNlx1NTNEOFx1NTMxNlxuICAgICAgICBpZiAoaXNQYWdlRmlsZShmaWxlUGF0aCkpIHtcbiAgICAgICAgICBkZWJvdW5jZWRHZW5lcmF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHRyYW5zZm9ybUluZGV4SHRtbChodG1sOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IG1vZGUgPSBnZXRUYWJiYXJNb2RlKHByb2plY3RSb290KTtcbiAgICAgIGlmIChtb2RlID09PSAnMicgfHwgbW9kZSA9PT0gJ0NVU1RPTV9UQUJCQVJfV0lUSF9OQVRJVkUnIHx8IG1vZGUgPT09ICdDVVNUT01fVEFCQkFSJykge1xuICAgICAgICBjb25zdCBoaWRlU3R5bGUgPSAnPHN0eWxlIGlkPVwidW5pLXRhYmJhci1oaWRlLXplcm8tZmxhc2hcIj51bmktdGFiYmFyLCB1bmktdGFiYmFyICosIC51bmktdGFiYmFyLCAudW5pLXRhYmJhciAqLCAudW5pLXRhYmJhci1ib3R0b20sIC51bmktdGFiYmFyLWJvdHRvbSAqLCAudW5pLXRhYmJhcl9faWNvbiwgLnVuaS10YWJiYXJfX2xhYmVsIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDsgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7IG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDsgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50OyBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7IHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7IHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50OyBib3R0b206IC05OTk5cHggIWltcG9ydGFudDsgfTwvc3R5bGU+JztcbiAgICAgICAgcmV0dXJuIGh0bWwucmVwbGFjZSgnPC9oZWFkPicsIGAke2hpZGVTdHlsZX1cXG48L2hlYWQ+YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gIH07XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9jaGVucWkvRGVza3RvcC91bmliZXN0WC9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy91bmktcGFnZXMtcm91dGUtbWV0YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2hlbnFpL0Rlc2t0b3AvdW5pYmVzdFgvcGx1Z2lucy91bmktcGFnZXMtcm91dGUtbWV0YS50c1wiO2ltcG9ydCBmcyBmcm9tICdub2RlOmZzJztcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5cbi8qKlxuICogXHU4REVGXHU3NTMxXHU1MTQzXHU0RkUxXHU2MDZGXHU4ODY4XHU3NTFGXHU2MjEwXHU1NjY4XHVGRjFBcGFnZXMuanNvbiBcdTk4NzVcdTk3NjJcdTkxNERcdTdGNkUgXHUyMTkyIHNyYy9yb3V0ZXIvZ2VuZXJhdGVkL3BhZ2UtbWV0YS51dHNcbiAqXG4gKiAjIyBcdTRFM0FcdTRFQzBcdTRFNDhcdTk3MDBcdTg5ODFcdThGRDlcdTRFMDBcdTZCNjVcbiAqXG4gKiBgdXNlUm91dGUoKS5tZXRhIC8gLm5hbWVgIFx1NzY4NFx1NjU3MFx1NjM2RVx1NkU5MFx1NjYyRlx1MzAwQ3BhZ2VzLmpzb24gXHU5MUNDXHU4QkU1XHU5ODc1XHU5NzYyXHU3Njg0XHU5MTREXHU3RjZFXHU5ODc5XHUzMDBEXHVGRjFBXHU5ODc1XHU5NzYyIGBkZWZpbmVQYWdlKClgXG4gKiBcdTkxQ0NcdTU4RjBcdTY2MEVcdTc2ODRcdTVCNTdcdTZCQjVcdUZGMDhsYXlvdXQgLyBzaG93QmFjayAvIGhpZGVOYXZiYXIgLyBlbmFibGVQdWxsRG93blJlZnJlc2ggLyBzdHlsZVx1RkYwQ1x1NEVFNVx1NTNDQVxuICogbmFtZVx1MzAwMXJlcXVpcmVBdXRoIFx1OEZEOVx1N0M3Qlx1ODFFQVx1NUI5QVx1NEU0OVx1NUI1N1x1NkJCNVx1RkYwOVx1OTBGRFx1NEYxQVx1ODhBQiB2aXRlLXBsdWdpbi11bmktcGFnZXMgXHU1MzlGXHU2ODM3XHU1MTk5XHU4RkRCIHBhZ2VzLmpzb25cdTMwMDJcbiAqXG4gKiBcdTRGNDZcdThGRDBcdTg4NENcdTY1RjZcdTZDQTFcdTY3MDlcdTRFRkJcdTRGNTUgQVBJIFx1ODBGRFx1NjU3NFx1Njc2MVx1OEJGQlx1NTFGQVx1OTg3NVx1OTc2Mlx1OTE0RFx1N0Y2RSBcdTIwMTRcdTIwMTQgXHU1Qjk4XHU2NUI5XHU3Njg0IGAkZ2V0UGFnZVN0eWxlKClgIFx1NTNFQVx1OEZENFx1NTZERSBzdHlsZSBcdTgyODJcdTcwQjlcdUZGMUJcbiAqIHBhZ2VzLmpzb24gXHU2NzJDXHU4RUFCXHU0RTVGXHU0RTBEXHU5NjhGXHU0RUE3XHU3MjY5XHU1MjA2XHU1M0QxXHVGRjA4XHU1QzBGXHU3QTBCXHU1RThGXHU0RkE3XHU4OEFCXHU3RjE2XHU4QkQxXHU2MjEwIGFwcC5qc29uXHVGRjBDXHU0RTE0XHU4MUVBXHU1QjlBXHU0RTQ5XHU1QjU3XHU2QkI1XHU1MTY4XHU4OEFCXHU0RTIyXHU2Mzg5XHVGRjBDXG4gKiBcdTVCOUVcdTZENEJcdTUzRUFcdTY3MDkgbmF2aWdhdGlvbkJhclRpdGxlVGV4dCAvIG5hdmlnYXRpb25TdHlsZSBcdThGRDlcdTdDN0JcdTVFNzNcdTUzRjBcdTVCNTdcdTZCQjVcdTgwRkRcdTZEM0JcdTUyMzBcdThGRDBcdTg4NENcdTY3MUZcdUZGMDlcdTMwMDJcbiAqIFx1NjI0MFx1NEVFNVx1NTNFQVx1ODBGRFx1Njc4NFx1NUVGQVx1NjcxRlx1NjU3NFx1ODg2OFx1ODQzRFx1NjIxMFx1NEUwMFx1NEUyQSAudXRzIFx1NUI1N1x1N0IyNlx1NEUzMlx1NUUzOFx1OTFDRlx1RkYwQ1x1NzUzMSBzcmMvcm91dGVyL2hvb2tzL3JvdXRlLXN0YXRlLnV0c1xuICogXHU5OTk2XHU3NTI4XHU2NUY2IGBKU09OLnBhcnNlT2JqZWN0YCBcdTg5RTNcdTY3OTBcdTVFNzZcdTdGMTNcdTVCNThcdTMwMDJcbiAqXG4gKiAjIyBcdTRFM0FcdTRFQzBcdTRFNDhcdTRFMERcdTUwNUFcdTYyMTBcdTMwMENcdTcyRUNcdTdBQ0JcdTc2RDFcdTU0MkMgcGFnZXMuanNvbiBcdTc2ODRcdTYzRDJcdTRFRjZcdTMwMERcbiAqXG4gKiBwYWdlcy5qc29uIFx1NjYyRlx1NjcyQ1x1NjNEMlx1NEVGNlx1NzY4NCoqXHU0RUE3XHU3MjY5KipcdTgwMENcdTk3NUVcdThGOTNcdTUxNjVcdUZGMDhcdThGOTNcdTUxNjVcdTY2MkZcdTU0MDQgLnV2dWUgXHU5MUNDXHU3Njg0IGRlZmluZVBhZ2UgXHU0RTBFIHBhZ2VzLmNvbmZpZy5qc29uXHVGRjA5XHVGRjBDXG4gKiBcdTc2RDFcdTU0MkNcdTVCODNcdTVGQzVcdTcxMzZcdTRFMEVcdTUxOTlcdTU2REVcdTVGNjJcdTYyMTBcdTgxRUFcdTczQUZcdTMwMDJcdTY1NDVcdTY3MkNcdTZBMjFcdTU3NTdcdTUzRUFcdTYzRDBcdTRGOUJcdTdFQUZcdTUxRkRcdTY1NzBcdUZGMENcdTc1MzFcdThDMDNcdTc1MjhcdTY1QjlcdTU3MjhcdTMwMENcdTU0MENcdTRFMDBcdTZCMjFcdTc1MUZcdTYyMTAgcGFzc1x1MzAwMVxuICogXHU1MTk5IHBhZ2VzLmpzb24gXHU0RTRCXHU1MjREXHUzMDBEXHU4QzAzXHU3NTI4XHVGRjBDXHU1RTc2XHU3NkY0XHU2M0E1XHU1OTBEXHU3NTI4XHU1MzczXHU1QzA2XHU4OEFCXHU1RThGXHU1MjE3XHU1MzE2XHU3Njg0XHU5MEEzXHU0RTJBIG91dHB1dCBcdTVCRjlcdThDNjEgXHUyMDE0XHUyMDE0XG4gKiBcdTRFOEVcdTY2MkZcdTMwMENwYWdlcy5qc29uIFx1OTFDQ1x1NjYyRlx1NEVDMFx1NEU0OFx1RkYwQ1x1ODg2OFx1OTFDQ1x1NUMzMVx1NjYyRlx1NEVDMFx1NEU0OFx1MzAwRFx1NjYyRlx1N0VEM1x1Njc4NFx1NEUwQVx1NjIxMFx1N0FDQlx1NzY4NFx1RkYwQ1x1NEUwRFx1NEY5RFx1OEQ1Nlx1NEVGQlx1NEY1NVx1NjVGNlx1NUU4Rlx1NTA0N1x1OEJCRVx1MzAwMlxuICpcbiAqIFx1NkM5OVx1NzZEMlx1OEMwM1x1OEJENVx1NkEyMVx1NUYwRlx1NEUwQlx1NEYyMFx1OEZEQlx1Njc2NVx1NzY4NCBvdXRwdXQgXHU1REYyXHU4OEFCXHU4OEMxXHU1MjZBXHVGRjBDXHU4ODY4XHU0RjFBXHU4MUVBXHU1MkE4XHU4RERGXHU3NzQwXHU1M0Q4XHU1QzExXHVGRjA4XHU0RTBFXHU1M0VGXHU4REVGXHU3NTMxXHU5ODc1XHU5NzYyXHU0RkREXHU2MzAxXHU0RTAwXHU4MUY0XHVGRjA5XHUzMDAyXG4gKi9cblxuLyoqIFx1NzUxRlx1NjIxMFx1NzY4NFx1OERFRlx1NzUzMVx1NTE0M1x1NEZFMVx1NjA2Rlx1ODg2OFx1OERFRlx1NUY4NFx1RkYwOFx1NzZGOFx1NUJGOVx1OTg3OVx1NzZFRVx1NjgzOVx1RkYwOSAqL1xuZXhwb3J0IGNvbnN0IFJPVVRFX01FVEFfRklMRSA9ICdzcmMvcm91dGVyL2dlbmVyYXRlZC9wYWdlLW1ldGEudXRzJztcblxuLyoqIFx1OTg3NVx1OTc2Mlx1OERFRlx1NUY4NCBcdTIxOTIgXHU4RkQwXHU4ODRDXHU2NUY2XHU1M0UzXHU1Rjg0XHVGRjA4XHU4ODY1XHU1MjREXHU1QkZDIGAvYFx1MzAwMVx1NjI5OFx1NTNFMFx1OTFDRFx1NTkwRFx1NjU5Q1x1Njc2MFx1RkYwOVx1RkYwQ1x1NTk4MiBgc3JjL3N1Yi9hL2FgIFx1MjE5MiBgL3NyYy9zdWIvYS9hYCAqL1xuZnVuY3Rpb24gdG9SdW50aW1lUm91dGVQYXRoKHBhZ2VQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYC8ke3BhZ2VQYXRofWAucmVwbGFjZSgvXFwvKy9nLCAnLycpO1xufVxuXG4vKipcbiAqIFx1NzUxRlx1NjIxMFx1OERFRlx1NzUzMVx1NTE0M1x1NEZFMVx1NjA2Rlx1ODg2OFxuICpcbiAqIEBwYXJhbSBvdXRwdXQgXHU1MzczXHU1QzA2XHU1MTk5XHU1MTY1IHBhZ2VzLmpzb24gXHU3Njg0XHU1QjhDXHU2NTc0XHU5MTREXHU3RjZFXHU1QkY5XHU4QzYxXHVGRjA4XHU1NDJCIHBhZ2VzIC8gc3ViUGFja2FnZXNcdUZGMDlcbiAqIEBwYXJhbSBwcm9qZWN0Um9vdCBcdTk4NzlcdTc2RUVcdTY4MzlcdTc2RUVcdTVGNTVcdUZGMDhcdTc1MUZcdTYyMTBcdTc2RUVcdTY4MDdcdTc2RjhcdTVCRjlcdTVCODNcdTVCOUFcdTRGNERcdUZGMDlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlUm91dGVNZXRhRmlsZShvdXRwdXQ6IFJlY29yZDxzdHJpbmcsIGFueT4sIHByb2plY3RSb290OiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgdGFibGU6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcblxuICBjb25zdCBjb2xsZWN0ID0gKHBhZ2U6IGFueSwgcHJlZml4OiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBpZiAocGFnZSA9PSBudWxsIHx8IHR5cGVvZiBwYWdlLnBhdGggIT09ICdzdHJpbmcnIHx8IHBhZ2UucGF0aCA9PT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgcm91dGVQYXRoID0gdG9SdW50aW1lUm91dGVQYXRoKHByZWZpeCA9PT0gJycgPyBwYWdlLnBhdGggOiBgJHtwcmVmaXh9LyR7cGFnZS5wYXRofWApO1xuICAgIC8vIFx1NkRGMVx1NjJGN1x1OEQxRFx1NEUwMFx1NEVGRFx1NUU3Nlx1NjI4QSBwYXRoIFx1ODlDNFx1ODMwM1x1NjIxMFx1OEZEMFx1ODg0Q1x1NjVGNlx1NTNFM1x1NUY4NFx1RkYwQ1x1OTA3Rlx1NTE0RFx1NEUwRSBwYWdlcy5qc29uIFx1NzY4NFx1NzZGOFx1NUJGOSBwYXRoIFx1NkRGN1x1NkRDNlxuICAgIHRhYmxlW3JvdXRlUGF0aF0gPSB7IC4uLnBhZ2UsIHBhdGg6IHJvdXRlUGF0aCB9O1xuICB9O1xuXG4gIGNvbnN0IG1haW5QYWdlcyA9IG91dHB1dC5wYWdlcztcbiAgaWYgKEFycmF5LmlzQXJyYXkobWFpblBhZ2VzKSkge1xuICAgIG1haW5QYWdlcy5mb3JFYWNoKChwOiBhbnkpID0+IGNvbGxlY3QocCwgJycpKTtcbiAgfVxuICBjb25zdCBzdWJQYWNrYWdlcyA9IG91dHB1dC5zdWJQYWNrYWdlcztcbiAgaWYgKEFycmF5LmlzQXJyYXkoc3ViUGFja2FnZXMpKSB7XG4gICAgc3ViUGFja2FnZXMuZm9yRWFjaCgocGtnOiBhbnkpID0+IHtcbiAgICAgIGlmIChwa2cgPT0gbnVsbCB8fCAhQXJyYXkuaXNBcnJheShwa2cucGFnZXMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvb3QgPSB0eXBlb2YgcGtnLnJvb3QgPT09ICdzdHJpbmcnID8gcGtnLnJvb3QgOiAnJztcbiAgICAgIHBrZy5wYWdlcy5mb3JFYWNoKChwOiBhbnkpID0+IGNvbGxlY3QocCwgcm9vdCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gXHU3NTI4XHU1MzU1XHU1RjE1XHU1M0Y3XHU1MzA1XHU4OEY5XHVGRjA4XHU5ODc5XHU3NkVFIGVzbGludCBcdTc2ODQgc3R5bGUvcXVvdGVzIFx1ODlDNFx1NTIxOVx1RkYwOVx1RkYwQ1x1NjU0NVx1NTNFQVx1OTcwMFx1OEY2Q1x1NEU0OSBgXFxgIFx1NEUwRSBgJ2BcdUZGMENcbiAgLy8gXHU4ODY4XHU5MUNDXHU3Njg0XHU1M0NDXHU1RjE1XHU1M0Y3XHU1MzlGXHU2ODM3XHU0RkREXHU3NTU5XHU1MzczXHU1M0VGXG4gIGNvbnN0IGpzb25UZXh0ID0gSlNPTi5zdHJpbmdpZnkodGFibGUpO1xuICBjb25zdCBzdHJpbmdMaXRlcmFsID0gYCcke2pzb25UZXh0LnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJykucmVwbGFjZSgvJy9nLCAnXFxcXFxcJycpfSdgO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBbXG4gICAgJy8qKicsXG4gICAgJyAqIFx1MjZBMFx1RkUwRiBcdTY3MkNcdTY1ODdcdTRFRjZcdTc1MzEgcGx1Z2lucy91bmktcGFnZXMtcm91dGUtbWV0YS50cyBcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBcdUZGMENcdThCRjdcdTUyRkZcdTYyNEJcdTUyQThcdTRGRUVcdTY1MzlcdTMwMDInLFxuICAgICcgKicsXG4gICAgJyAqIFx1NTE4NVx1NUJCOVx1RkYxQXBhZ2VzLmpzb24gXHU5MUNDXHU2QkNGXHU0RTJBXHU5ODc1XHU5NzYyXHU3Njg0KipcdTVCOENcdTY1NzRcdTkxNERcdTdGNkVcdTk4NzkqKlx1RkYwOFx1OTg3NVx1OTc2MiBkZWZpbmVQYWdlIFx1NThGMFx1NjYwRVx1NEVDMFx1NEU0OFx1RkYwQ1x1OEZEOVx1OTFDQ1x1NUMzMVx1NjYyRlx1NEVDMFx1NEU0OFx1RkYwOVx1RkYwQycsXG4gICAgJyAqICAgICAgXHU0RjlCIGB1c2VSb3V0ZSgpLm1ldGEgLyAubmFtZWAgXHU4QkZCXHU1M0Q2XHVGRjBDXHU4OUMxIHNyYy9yb3V0ZXIvaG9va3Mvcm91dGUtc3RhdGUudXRzXHUzMDAyJyxcbiAgICAnICogXHU3NTFGXHU2MjEwXHU2NUY2XHU2NzNBXHVGRjFBXHU2QkNGXHU2QjIxXHU3NTFGXHU2MjEwIC8gXHU2NkY0XHU2NUIwIHBhZ2VzLmpzb24gXHU2NUY2XHU1NDBDXHU2QjY1XHU5MUNEXHU1MTk5XHUzMDAyJyxcbiAgICAnICovJyxcbiAgICBgZXhwb3J0IGNvbnN0IFBBR0VfTUVUQV9KU09OOiBzdHJpbmcgPSAke3N0cmluZ0xpdGVyYWx9O2AsXG4gICAgJydcbiAgXS5qb2luKCdcXG4nKTtcblxuICBjb25zdCB0YXJnZXRQYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCBST1VURV9NRVRBX0ZJTEUpO1xuICBjb25zdCB0YXJnZXREaXIgPSBwYXRoLmRpcm5hbWUodGFyZ2V0UGF0aCk7XG4gIGlmICghZnMuZXhpc3RzU3luYyh0YXJnZXREaXIpKSB7XG4gICAgZnMubWtkaXJTeW5jKHRhcmdldERpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gIH1cbiAgY29uc3Qgb2xkQ29udGVudCA9IGZzLmV4aXN0c1N5bmModGFyZ2V0UGF0aCkgPyBmcy5yZWFkRmlsZVN5bmModGFyZ2V0UGF0aCwgJ3V0Zi04JykgOiAnJztcbiAgLy8gXHU1MTg1XHU1QkI5XHU0RTAwXHU4MUY0XHU1QzMxXHU0RTBEXHU1MTk5XHVGRjFBXHU5MDdGXHU1MTREXHU2NUUwXHU4QzEzXHU3Njg0XHU2NTg3XHU0RUY2XHU1M0Q4XHU2NkY0XHU4OUU2XHU1M0QxXHU1RjAwXHU1M0QxXHU2NzBEXHU1MkExXHU1NjY4XHU5ODlEXHU1OTE2XHU3MEVEXHU5MUNEXHU4RjdEXG4gIGlmIChjb250ZW50ICE9PSBvbGRDb250ZW50KSB7XG4gICAgZnMud3JpdGVGaWxlU3luYyh0YXJnZXRQYXRoLCBjb250ZW50LCAndXRmLTgnKTtcbiAgICBjb25zb2xlLmxvZyhgW3VuaS1wYWdlc10gR2VuZXJhdGVkICR7Uk9VVEVfTUVUQV9GSUxFfSAo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VCxRQUFRO0FBQUEsVUFDTixjQUFjO0FBQUEsVUFDZCxPQUFPO0FBQUEsUUFDVDtBQUFBLFFBQ0EsWUFBWTtBQUFBLE1BQ2QsQ0FBQztBQUFBLElBQ0gsSUFDQSxDQUFDO0FBQUEsRUFDUDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImZzIiwgImRpcm5hbWUiLCAicmVzb2x2ZSIsICJwcm9jZXNzIiwgImZpbGVVUkxUb1BhdGgiLCAicHJvY2VzcyIsICJwcm9qZWN0Um9vdCIsICJwcm9jZXNzIiwgIm9wdGlvbnMiLCAiaXNCdWlsZCIsICJmcyIsICJwYXRoIiwgInByb2Nlc3MiLCAia2ViYWJDYXNlIiwgInByb2plY3RSb290IiwgInByb2Nlc3MiLCAicGF0aCIsICJmcyIsICJmcyIsICJwYXRoIiwgInByb2Nlc3MiLCAicHJvamVjdFJvb3QiLCAicHJvY2VzcyIsICJwYXRoIiwgImZzIiwgImZzIiwgInBhdGgiLCAicHJvY2VzcyIsICJKU09ONSIsICJmcyIsICJwYXRoIiwgInByb2plY3RSb290IiwgInBhdGgiLCAiZnMiLCAiZ2V0VGFiYmFyTW9kZSIsICJwcm9qZWN0Um9vdCIsICJwcm9jZXNzIiwgInBhdGgiLCAiZnMiLCAiSlNPTjUiLCAicGFyc2VEZWZpbmVQYWdlIiwgImlzUHJvZHVjdGlvbiIsICJleGlzdGluZyIsICJjb25maWdQYXRoIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwiLCAicHJvamVjdFJvb3QiLCAiZGlybmFtZSIsICJmaWxlVVJMVG9QYXRoIiwgInByb2Nlc3MiLCAicmVzb2x2ZSIsICJmcyJdCn0K
