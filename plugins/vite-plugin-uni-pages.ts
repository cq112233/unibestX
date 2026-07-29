import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import JSON5 from 'json5'
import minimatch from 'minimatch'

// ==========================================
// 类型定义
// ==========================================

interface PageConfig {
  path: string
  style?: Record<string, any>
  [key: string]: any
}

interface SubPackageConfig {
  root: string
  pages: PageConfig[]
}

interface BaseConfig {
  homePage?: string
  pages?: PageConfig[]
  subPackages?: SubPackageConfig[]
  globalStyle?: Record<string, any>
  tabBar?: Record<string, any>
  easycom?: Record<string, any>
  [key: string]: any
}

interface UniPagesOptions {
  /** 主包页面扫描目录，默认 'src/pages' */
  dir?: string
  /** 分包扫描目录列表，如 ['src/pages-demo']，不能是主包 dir 的子目录 */
  subPackages?: string[]
  /** 排除的 glob 模式，默认会排除 components 目录 */
  exclude?: string[]
  /** 输出的 pages.json 路径，默认项目根目录 */
  outFile?: string
  /** 基础配置文件路径，默认 'pages.config.json' */
  configFile?: string
  /** 首页路径 */
  homePage?: string
}

// ==========================================
// 工具函数
// ==========================================

/** 解析 <route> 块（JSON5 格式） */
function parseRouteBlock(content: string): Record<string, any> | null {
  const regex = /<route[^>]*>([\s\S]*?)<\/route>/
  const match = content.match(regex)
  if (match == null) return null
  try {
    return JSON5.parse(match[1].trim()) as Record<string, any>
  } catch (e) {
    console.warn('[uni-pages] Failed to parse <route> block:', e)
    return null
  }
}

/** 从源码中提取 definePage({...}) 的配置对象 */
function parseDefinePage(content: string): Record<string, any> | null {
  // 匹配 definePage( 开头
  const startRegex = /definePage\s*\(\s*\{/
  const match = content.match(startRegex)
  if (match == null || match.index == null) return null

  // 从第一个 { 开始，追踪括号深度
  const openParen = content.indexOf('(', match.index)
  if (openParen === -1) return null

  let depth = 0
  let inString = false
  let stringChar = ''
  let i = openParen + 1

  for (; i < content.length; i++) {
    const ch = content[i]
    const prev = i > 0 ? content[i - 1] : ''

    if (inString) {
      if (ch === stringChar && prev !== '\\') {
        inString = false
      }
      continue
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      inString = true
      stringChar = ch
      continue
    }

    // 跳过注释
    if (ch === '/' && i + 1 < content.length) {
      if (content[i + 1] === '/') {
        // 单行注释，跳到行尾
        const newline = content.indexOf('\n', i)
        if (newline === -1) break
        i = newline
        continue
      }
      if (content[i + 1] === '*') {
        // 多行注释
        const end = content.indexOf('*/', i + 2)
        if (end === -1) break
        i = end + 1
        continue
      }
    }

    if (ch === '{') depth++
    if (ch === '}') depth--
    if (ch === '(') depth++
    if (ch === ')') {
      depth--
      if (depth < 0) {
        // 找到了 definePage 参数的结束位置
        const arg = content.slice(openParen + 1, i).trim()
        // 去掉外层花括号如果是对象形式
        if (arg.startsWith('{')) {
          try {
            return JSON5.parse(arg) as Record<string, any>
          } catch (e) {
            console.warn('[uni-pages] Failed to parse definePage argument:', e)
            return null
          }
        }
        return null
      }
    }
  }
  return null
}

/** 解析页面 meta：优先 <route> 块，其次 definePage */
function parsePageMeta(content: string): Record<string, any> | null {
  const route = parseRouteBlock(content)
  if (route != null) return route
  return parseDefinePage(content)
}

/** 递归扫描 .uvue 文件，支持 exclude 模式 */
function scanUvueFiles(dir: string, excludes: string[] = [], projectRoot: string = ''): string[] {
  const results: string[] = []
  if (!fs.existsSync(dir)) return results

  const defaultExcludes = ['**/components/**/*.*']
  const allExcludes = [...defaultExcludes, ...excludes]

  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i]
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      // 跳过默认的 components 目录
      if (entry.name === 'components' && excludes.length === 0) continue
      results.push(...scanUvueFiles(fullPath, excludes, projectRoot))
    } else if (entry.name.endsWith('.uvue')) {
      // 检查 exclude 模式
      const relPath = projectRoot ? path.relative(projectRoot, fullPath).replace(/\\/g, '/') : fullPath.replace(/\\/g, '/')
      let excluded = false
      for (let e = 0; e < allExcludes.length; e++) {
        if (minimatch(relPath, allExcludes[e])) {
          excluded = true
          break
        }
      }
      if (!excluded) {
        results.push(fullPath)
      }
    }
  }
  return results
}

/** 文件路径 → 页面路由 path */
function fileToPagePath(filePath: string, pagesDir: string, projectRoot: string): string {
  const absPages = path.resolve(projectRoot, pagesDir)
  const rel = path.relative(absPages, filePath).replace(/\\/g, '/')
  const withoutExt = rel.replace(/\.uvue$/, '')
  return path.posix.join(pagesDir, withoutExt)
}

/** 合并手动 pages 与扫描 pages（手动优先，去重） */
function mergePages(manual: PageConfig[], scanned: PageConfig[]): PageConfig[] {
  const map = new Map<string, PageConfig>()

  // 先加入手动的（优先级最高）
  for (let i = 0; i < manual.length; i++) {
    map.set(manual[i].path, manual[i])
  }
  // 再加入扫描的，不覆盖
  for (let i = 0; i < scanned.length; i++) {
    if (!map.has(scanned[i].path)) {
      map.set(scanned[i].path, scanned[i])
    }
  }
  return Array.from(map.values())
}

// ==========================================
// 核心：生成 pages.json
// ==========================================

interface ScanResult {
  pages: PageConfig[]
  subPkgs: SubPackageConfig[]
}

function generatePagesJson(
  opts: { dir: string; subPackages: string[]; exclude: string[]; outFile: string; configFile: string; homePage: string },
  projectRoot: string
): void {
  // 1. 读取基础配置
  let baseConfig: BaseConfig = {}
  const configPath = path.resolve(projectRoot, opts.configFile)
  if (fs.existsSync(configPath)) {
    try {
      const raw = fs.readFileSync(configPath, 'utf-8')
      baseConfig = JSON5.parse(raw) as BaseConfig
    } catch (e) {
      console.error('[uni-pages] Failed to parse config file:', e)
    }
  }

  // 2. 扫描主包 .uvue 文件
  const pagesDir = path.resolve(projectRoot, opts.dir)
  const files = scanUvueFiles(pagesDir, opts.exclude, projectRoot)
  files.sort()

  const scanned: PageConfig[] = []
  for (let i = 0; i < files.length; i++) {
    const raw = fs.readFileSync(files[i], 'utf-8')
    const meta = parsePageMeta(raw)
    const pagePath = fileToPagePath(files[i], opts.dir, projectRoot)

    const page: PageConfig = { path: pagePath }
    if (meta != null) {
      Object.assign(page, meta)
    }
    scanned.push(page)
  }

  // 3. 扫描分包
  const configSubPkgs = baseConfig.subPackages ?? []
  const scannedSubPkgs: SubPackageConfig[] = []

  for (let s = 0; s < opts.subPackages.length; s++) {
    const subDir = opts.subPackages[s]
    const absSubDir = path.resolve(projectRoot, subDir)
    if (!fs.existsSync(absSubDir)) continue

    const subFiles = scanUvueFiles(absSubDir, opts.exclude, projectRoot)
    subFiles.sort()

    const subPages: PageConfig[] = []
    for (let j = 0; j < subFiles.length; j++) {
      const raw = fs.readFileSync(subFiles[j], 'utf-8')
      const meta = parsePageMeta(raw)
      // 分包路径：去掉 subDir 前缀，如 src/sub/auth/login
      const relPath = path.relative(absSubDir, subFiles[j]).replace(/\\/g, '/').replace(/\.uvue$/, '')

      const page: PageConfig = { path: relPath }
      if (meta != null) {
        Object.assign(page, meta)
      }
      subPages.push(page)
    }

    // 与 baseConfig 中同名 root 的分包合并
    const existing = configSubPkgs.find((p) => p.root === subDir)
    let mergedPages: PageConfig[]
    if (existing != null) {
      mergedPages = mergePages(existing.pages, subPages)
    } else {
      mergedPages = subPages
    }

    scannedSubPkgs.push({ root: subDir, pages: mergedPages })
  }

  // 将 baseConfig 中未扫描的分包原样保留
  for (let i = 0; i < configSubPkgs.length; i++) {
    const cp = configSubPkgs[i]
    if (!scannedSubPkgs.some((sp) => sp.root === cp.root)) {
      scannedSubPkgs.push(cp)
    }
  }

  // 4. 首页排最前
  // 优先级：opts.homePage（插件选项）> definePage type: 'home'（页面声明）> baseConfig.homePage（配置文件）
  let home = opts.homePage || ''

  // 插件选项没配，从扫描的页面 meta 中查找 type: 'home'
  if (home === '') {
    const homePage = scanned.find((p) => (p as any).type === 'home')
    if (homePage != null) {
      home = homePage.path
    }
  }

  // 仍然没找到，回退到配置文件中的 homePage
  if (home === '') {
    home = baseConfig.homePage || ''
  }

  if (home !== '' && scanned.length > 0) {
    const idx = scanned.findIndex((p) => p.path === home)
    if (idx > 0) {
      const [item] = scanned.splice(idx, 1)
      scanned.unshift(item)
    }
  }

  // 5. 合并主包 pages
  const manualPages = baseConfig.pages ?? []
  const finalPages = mergePages(manualPages, scanned)

  // 6. 构建输出（pages 放第一位）
  const output: Record<string, any> = {}
  output.pages = finalPages
  const keys = Object.keys(baseConfig)
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i]
    if (k !== 'pages' && k !== 'homePage' && k !== 'subPackages') {
      output[k] = baseConfig[k]
    }
  }
  if (scannedSubPkgs.length > 0) {
    output.subPackages = scannedSubPkgs
  }

  // 7. 写入
  const outPath = path.resolve(projectRoot, opts.outFile)
  const jsonStr = JSON.stringify(output, null, 2)
  let existing = ''
  if (fs.existsSync(outPath)) {
    existing = fs.readFileSync(outPath, 'utf-8')
  }
  if (jsonStr !== existing) {
    fs.writeFileSync(outPath, jsonStr, 'utf-8')
    console.log(`[uni-pages] Generated ${opts.outFile} (${finalPages.length} pages, ${scannedSubPkgs.length} subpackages)`)
  }
}

// ==========================================
// Vite 插件导出
// ==========================================

export default function uniPagesPlugin(options: UniPagesOptions = {}) {
  const opts = {
    dir: options.dir ?? 'src/pages',
    subPackages: options.subPackages ?? [],
    exclude: options.exclude ?? [],
    outFile: options.outFile ?? 'pages.json',
    configFile: options.configFile ?? 'pages.config.json',
    homePage: options.homePage ?? '',
  }

  let projectRoot = process.cwd()
  let server: any = null
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  function debouncedGenerate() {
    if (timeoutId != null) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      generatePagesJson(opts, projectRoot)
      // 通知 Vite 重新加载 pages.json，让 uni-app 感知新页面
      if (server != null) {
        const outPath = path.resolve(projectRoot, opts.outFile)
        server.watcher.emit('change', outPath)
      }
    }, 200)
  }

  return {
    name: 'uni-pages',

    configResolved(config: any) {
      projectRoot = config.root ?? process.cwd()
    },

    buildStart() {
      generatePagesJson(opts, projectRoot)
    },

    /** 移除 definePage(...) 宏调用，避免运行时报错 */
    transform(code: string, id: string) {
      const normalized = id.replace(/\\/g, '/')
      if (!normalized.endsWith('.uvue')) return null

      const startRegex = /definePage\s*\(\s*\{/
      const match = code.match(startRegex)
      if (match == null || match.index == null) return null

      const openParen = code.indexOf('(', match.index)
      if (openParen === -1) return null

      // 从 openParen+1 开始追踪，与 parseDefinePage 逻辑一致
      let depth = 0
      let inString = false
      let stringChar = ''
      let endIdx = -1

      for (let i = openParen + 1; i < code.length; i++) {
        const ch = code[i]
        const prev = i > 0 ? code[i - 1] : ''

        if (inString) {
          if (ch === stringChar && prev !== '\\') { inString = false }
          continue
        }
        if (ch === '"' || ch === "'" || ch === '`') { inString = true; stringChar = ch; continue }
        if (ch === '/' && i + 1 < code.length) {
          if (code[i + 1] === '/') { const nl = code.indexOf('\n', i); if (nl === -1) break; i = nl; continue }
          if (code[i + 1] === '*') { const e = code.indexOf('*/', i + 2); if (e === -1) break; i = e + 1; continue }
        }
        if (ch === '{' || ch === '(') depth++
        if (ch === '}' || ch === ')') {
          depth--
          if (depth < 0) { endIdx = i + 1; break }
        }
      }

      if (endIdx === -1) return null

      // endIdx 指向 `)` 之后一个字符，即 definePage 调用的结束
      // 往前清除多余换行
      let start = match.index
      if (start > 0 && code[start - 1] === '\n') {
        start--
        if (start > 0 && code[start - 1] === '\r') start--
      }
      while (endIdx < code.length && (code[endIdx] === '\n' || code[endIdx] === '\r')) endIdx++

      const newCode = code.slice(0, start) + code.slice(endIdx)
      return { code: newCode, map: { mappings: '' } }
    },

    configureServer(s: any) {
      server = s
      const pagesDir = path.resolve(projectRoot, opts.dir)
      const configPath = path.resolve(projectRoot, opts.configFile)

      if (fs.existsSync(pagesDir)) {
        server.watcher.add(pagesDir)
      }
      // 监听分包目录
      for (let i = 0; i < opts.subPackages.length; i++) {
        const subDir = path.resolve(projectRoot, opts.subPackages[i])
        if (fs.existsSync(subDir)) {
          server.watcher.add(subDir)
        }
      }
      if (fs.existsSync(configPath)) {
        server.watcher.add(configPath)
      }

      const isPageFile = (fp: string): boolean => {
        const n = fp.replace(/\\/g, '/')
        if (!n.endsWith('.uvue')) return false
        if (n.includes(opts.dir.replace(/\\/g, '/'))) return true
        // 检查是否在分包目录中
        for (let i = 0; i < opts.subPackages.length; i++) {
          if (n.includes(opts.subPackages[i].replace(/\\/g, '/'))) return true
        }
        return false
      }

      server.watcher.on('add', (filePath: string) => {
        if (isPageFile(filePath)) { debouncedGenerate() }
      })
      server.watcher.on('unlink', (filePath: string) => {
        if (isPageFile(filePath)) { debouncedGenerate() }
      })
      server.watcher.on('change', (filePath: string) => {
        const normalized = filePath.replace(/\\/g, '/')
        // 配置文件变化
        if (normalized === configPath.replace(/\\/g, '/') || normalized.includes('pages.config')) {
          debouncedGenerate()
        }
        // 页面文件变化（definePage 可能被修改）
        if (isPageFile(filePath)) {
          debouncedGenerate()
        }
      })
    },

    /** definePage 修改后需要完整热更新页面 */
    handleHotUpdate(ctx: any) {
      const normalized = ctx.file.replace(/\\/g, '/')
      // 检查是否在主包或分包目录中
      const isInPages = normalized.includes(opts.dir.replace(/\\/g, '/'))
      let isInSub = false
      for (let i = 0; i < opts.subPackages.length; i++) {
        if (normalized.includes(opts.subPackages[i].replace(/\\/g, '/'))) {
          isInSub = true; break
        }
      }
      if (normalized.endsWith('.uvue') && (isInPages || isInSub)) {
        const content = fs.readFileSync(ctx.file, 'utf-8')
        if (content.includes('definePage(')) {
          ctx.server.ws.send({ type: 'full-reload' })
        }
      }
    },
  }
}
