import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

/**
 * 驼峰转连字符 helper
 */
function kebabCase(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

export interface UniLayoutsOptions {
  layoutDir?: string
  layout?: string
}

interface PageConfig {
  path: string
  layout?: string | boolean
  style?: {
    layout?: string | boolean
    [key: string]: any
  }
  [key: string]: any
}

interface SubPackageConfig {
  root: string
  pages: PageConfig[]
}

interface PagesJson {
  pages: PageConfig[]
  subPackages?: SubPackageConfig[]
}

/**
 * 仿照 vite-plugin-uni-layouts 的跨端 Layout 布局包装插件，适配 uni-app X + UTS
 */
export default function uniLayoutsPlugin(options: UniLayoutsOptions = {}) {
  let projectRoot = process.cwd()
  const layoutDirName = options.layoutDir || 'src/layouts'
  const defaultLayoutName = options.layout || 'default'

  let layoutDir = path.resolve(projectRoot, layoutDirName)
  let pagesJsonPath = path.resolve(projectRoot, 'pages.json')

  let cachedPagesData: {
    pageLayouts: Map<string, { layout?: string | boolean, params: Record<string, any> }>
    pagePaths: Set<string>
  } | null = null
  let lastPagesJsonMTime = 0

  // 辅助函数：去除 JSON 注释并解析
  function loadPagesJson() {
    const pageLayouts = new Map<string, { layout?: string | boolean, params: Record<string, any> }>()
    const pagePaths = new Set<string>()

    if (!fs.existsSync(pagesJsonPath)) {
      return { pageLayouts, pagePaths }
    }

    try {
      const rawContent = fs.readFileSync(pagesJsonPath, 'utf-8')
      const cleanJson = rawContent.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1')
      const data = JSON.parse(cleanJson) as PagesJson

      // 1. 解析主包页面
      if (Array.isArray(data.pages)) {
        data.pages.forEach((page) => {
          if (!page.path)
            return
          const normPath = page.path.replace(/\\/g, '/').replace(/^\//, '')
          pagePaths.add(normPath)

          let layout: string | boolean | undefined
          if (page.layout !== undefined) {
            layout = page.layout
          }
          else if (page.style && page.style.layout !== undefined) {
            layout = page.style.layout
          }

          const params: Record<string, any> = {}
          Object.keys(page).forEach((key) => {
            if (key !== 'path' && key !== 'style' && key !== 'layout') {
              params[key] = page[key]
            }
          })
          if (page.style) {
            Object.keys(page.style).forEach((key) => {
              if (key !== 'layout') {
                params[key] = page.style[key]
              }
            })
          }

          pageLayouts.set(normPath, { layout, params })
        })
      }

      // 2. 解析分包页面
      if (Array.isArray(data.subPackages)) {
        data.subPackages.forEach((subPkg) => {
          if (!subPkg.root || !Array.isArray(subPkg.pages))
            return
          subPkg.pages.forEach((page) => {
            if (!page.path)
              return
            const combined = path.join(subPkg.root, page.path).replace(/\\/g, '/').replace(/^\//, '')
            pagePaths.add(combined)

            let layout: string | boolean | undefined
            if (page.layout !== undefined) {
              layout = page.layout
            }
            else if (page.style && page.style.layout !== undefined) {
              layout = page.style.layout
            }

            const params: Record<string, any> = {}
            Object.keys(page).forEach((key) => {
              if (key !== 'path' && key !== 'style' && key !== 'layout') {
                params[key] = page[key]
              }
            })
            if (page.style) {
              Object.keys(page.style).forEach((key) => {
                if (key !== 'layout') {
                  params[key] = page.style[key]
                }
              })
            }

            pageLayouts.set(combined, { layout, params })
          })
        })
      }
    }
    catch (e) {
      console.error('[Layout Plugin] Failed to parse pages.json:', e)
    }

    return { pageLayouts, pagePaths }
  }

  // 获取最新的页面配置（带缓存校验）
  function getPagesData() {
    if (!fs.existsSync(pagesJsonPath)) {
      return { pageLayouts: new Map(), pagePaths: new Set() }
    }
    const stat = fs.statSync(pagesJsonPath)
    if (!cachedPagesData || stat.mtimeMs !== lastPagesJsonMTime) {
      cachedPagesData = loadPagesJson()
      lastPagesJsonMTime = stat.mtimeMs
    }
    return cachedPagesData
  }

  // 寻找布局文件，支持 .uvue 和 .vue 扩展名
  function resolveLayoutFile(layoutName: string): string | null {
    const extensions = ['.uvue', '.vue']
    for (const ext of extensions) {
      const filePath = path.join(layoutDir, `${layoutName}${ext}`)
      if (fs.existsSync(filePath)) {
        return `${layoutName}${ext}`
      }
    }
    return null
  }

  return {
    name: 'uni-layouts-plugin',
    configResolved(config: any) {
      projectRoot = config.root || process.cwd()
      layoutDir = path.resolve(projectRoot, layoutDirName)
      pagesJsonPath = path.resolve(projectRoot, 'pages.json')
    },
    transform(code: string, id: string) {
      const normalizedId = id.replace(/\\/g, '/')

      // 1. 只过滤处理页面相关文件，排除 App.uvue / App.ku.uvue / layouts 以及 components
      if (!normalizedId.endsWith('.uvue') && !normalizedId.endsWith('.vue')) {
        return null
      }
      if (
        normalizedId.includes('/src/layouts/')
        || normalizedId.includes('App.uvue')
        || normalizedId.includes('App.ku.uvue')
        || normalizedId.includes('/components/')
      ) {
        return null
      }

      // 获取规范的相对路径（无扩展名）用于匹配 pages.json 中的路径
      const relativeId = path.relative(projectRoot, normalizedId).replace(/\\/g, '/')
      const cleanRelativeId = relativeId.replace(/\.(uvue|vue)(\?.*)?$/, '')
      const { pageLayouts, pagePaths } = getPagesData()

      // 如果这个文件不属于 pages.json 中的任何注册页面，直接跳过（避免污染通用组件）
      if (!pagePaths.has(cleanRelativeId)) {
        return null
      }

      if (typeof this.addWatchFile === 'function') {
        this.addWatchFile(pagesJsonPath)
      }

      // 2. 匹配页面中的 <route> 块
      const routeRegex = /<route[^>]*>([\s\S]*?)<\/route>/
      const routeMatch = code.match(routeRegex)
      let layoutName: string | boolean | undefined
      const routeParams: Record<string, any> = {}

      if (routeMatch != null) {
        try {
          const routeStr = routeMatch[1].trim()
          const cleanRouteStr = routeStr.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1')
          const routeObj = JSON.parse(cleanRouteStr) as Record<string, any>
          if (routeObj.layout !== undefined) {
            layoutName = routeObj.layout
          }
          // 提取自定义的属性参数
          Object.keys(routeObj).forEach((key) => {
            if (key !== 'layout') {
              routeParams[key] = routeObj[key]
            }
          })
        }
        catch (e) {
          console.error(`[Layout Plugin] Failed to parse <route> block in ${id}:`, e)
        }
      }

      // 3. 移去代码中的 <route> 标签块
      let cleanCode = code.replace(routeRegex, '')

      // 4. 从 pages.json 中获取 layout，如果 route 块中未指定的话
      const pageConfig = pageLayouts.get(cleanRelativeId)
      if (layoutName === undefined) {
        if (pageConfig && pageConfig.layout !== undefined) {
          layoutName = pageConfig.layout
        }
      }

      // 合并 route 属性与 pages.json 里的 style 属性作为 props 传递
      const mergedParams = {
        ...(pageConfig ? pageConfig.params : {}),
        ...routeParams,
      }

      // 默认布局 fallback
      if (layoutName === undefined) {
        layoutName = defaultLayoutName
      }

      // 5. 校验 layout 禁用逻辑
      if (layoutName === false || layoutName === 'false') {
        return {
          code: cleanCode,
          map: { mappings: '' },
        }
      }

      // 6. 校验布局组件文件是否存在，不存在则不包裹
      let layoutFileName = resolveLayoutFile(layoutName as string)

      // 如果默认布局是 default 且找不到，尝试回退到 layout
      if (!layoutFileName && layoutName === 'default') {
        layoutFileName = resolveLayoutFile('layout')
        if (layoutFileName) {
          layoutName = 'layout'
        }
      }

      if (!layoutFileName) {
        if (layoutName !== defaultLayoutName && layoutName !== 'layout') {
          console.warn(`[Layout Plugin] Layout "${layoutName}" not found in "${layoutDir}". Skipping wrap for "${id}".`)
        }
        return {
          code: cleanCode,
          map: { mappings: '' },
        }
      }

      // 7. 生成传给 Layout 的属性字符串
      let attrs = ''
      Object.keys(mergedParams).forEach((key) => {
        const val = mergedParams[key]
        if (typeof val === 'string') {
          attrs += ` :${kebabCase(key)}="'${val}'"`
        }
        else {
          attrs += ` :${kebabCase(key)}="${val}"`
        }
      })

      // 8. 包装页面的 <template>
      let hasTemplate = false
      const startTemplateIdx = cleanCode.indexOf('<template')
      const endTemplateIdx = cleanCode.lastIndexOf('</template>')
      if (startTemplateIdx !== -1 && endTemplateIdx !== -1 && startTemplateIdx < endTemplateIdx) {
        const startTagEndIdx = cleanCode.indexOf('>', startTemplateIdx)
        if (startTagEndIdx !== -1 && startTagEndIdx < endTemplateIdx) {
          hasTemplate = true
          const templateAttrs = cleanCode.slice(startTemplateIdx + 9, startTagEndIdx)
          const content = cleanCode.slice(startTagEndIdx + 1, endTemplateIdx)
          const before = cleanCode.slice(0, startTemplateIdx)
          const after = cleanCode.slice(endTemplateIdx + 11)
          cleanCode = `${before}<template${templateAttrs}>\n  <LayoutComponent${attrs}>\n${content}\n  </LayoutComponent>\n</template>${after}`
        }
      }

      if (!hasTemplate) {
        return {
          code: cleanCode,
          map: { mappings: '' },
        }
      }

      // 9. 自动引入 Layout 组件到 setup script
      const scriptSetupRegex = /<script setup([\s\S]*?)>/
      const importStatement = `\nimport LayoutComponent from '@/src/layouts/${layoutFileName}'`

      if (scriptSetupRegex.test(cleanCode)) {
        cleanCode = cleanCode.replace(scriptSetupRegex, match => match + importStatement)
      }
      else {
        cleanCode = `${cleanCode}\n<script setup lang="uts">${importStatement}\n</script>\n`
      }

      return {
        code: cleanCode,
        map: { mappings: '' },
      }
    },
  }
}
