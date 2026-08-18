import uniHelper from '@uni-helper/eslint-config'

const composer = uniHelper({
  stylistic: {
    semi: true, // 启用自动分号
  },
  unocss: false,
  vue: true,
  markdown: false,
  ignores: [
    // 忽略uni_modules目录
    '**/uni_modules/',
    // 忽略原生插件目录
    '**/nativeplugins/',
    'dist',
    // auto-import 生成的类型文件
    'auto-import.d.ts',
    // uni-pages 生成的类型文件
    'uni-pages.d.ts',
    // 插件生成的文件
    'src/pages.json',
    'src/manifest.json',
    // 忽略自动生成文件
    'src/service/**',
  ],
  // https://eslint-config.antfu.me/rules
  rules: {
    // 最后一个元素/属性禁止加尾随逗号
    'style/comma-dangle': ['error', 'never'],
    'vue/comma-dangle': ['error', 'never'],
    'vue/v-slot-style': 'off',
    'style/vue/v-slot-style': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/html-self-closing': 'off',
    'no-useless-return': 'off',
    'no-console': 'off',
    'eqeqeq': 'off',
    'no-unused-vars': 'off',
    'vue/no-unused-refs': 'off',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'unused-imports/no-unused-imports': 'warn',
    'eslint-comments/no-unlimited-disable': 'off',
    'jsdoc/check-param-names': 'off',
    'jsdoc/require-returns-description': 'off',
    'ts/no-empty-object-type': 'off',
    'no-extend-native': 'off',
    // uni 条件编译注释可能包裹 import，自动排序会破坏平台条件边界
    'perfectionist/sort-imports': 'off',
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        externalIgnores: ['text'],
      },
    ],
    'vue/comment-directive': 'off',
    'no-irregular-whitespace': 'off',
    'vue/no-irregular-whitespace': ['error', {
      skipStrings: true,
      skipComments: true,
      skipRegExps: true,
      skipHTMLTextContents: true,
    }],
    // vue SFC 调换顺序改这里
    'vue/block-order': ['error', {
      order: [['script', 'template'], 'style'],
    }],
  },
  formatters: {
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
    css: true,
    /**
     * Format HTML files
     * By default uses Prettier
     */
    html: true,
  },
})

// Resolve the flat config array and map custom extensions
const configs = await composer

for (const config of configs) {
  if (config.files) {
    const files = Array.isArray(config.files) ? config.files : [config.files]
    const newFiles = [...files]
    let matched = false

    for (const file of files) {
      if (typeof file === 'string') {
        if (file.includes('*.vue')) {
          newFiles.push(file.replace(/\*\.vue/g, '*.uvue'))
          matched = true
        }
        if (file.includes('*.ts') || file.includes('*.ts?')) {
          newFiles.push(file.replace(/\*\.ts/g, '*.uts'))
          matched = true
        }
      }
    }

    if (matched) {
      config.files = newFiles
    }
  }

  // Also make sure extraFileExtensions contains .uvue and .uts
  if (config.languageOptions?.parserOptions) {
    const parserOptions = config.languageOptions.parserOptions
    if (parserOptions.extraFileExtensions) {
      if (Array.isArray(parserOptions.extraFileExtensions)) {
        if (!parserOptions.extraFileExtensions.includes('.uvue')) {
          parserOptions.extraFileExtensions.push('.uvue')
        }
        if (!parserOptions.extraFileExtensions.includes('.uts')) {
          parserOptions.extraFileExtensions.push('.uts')
        }
      }
    }
  }

  // Wrap the parser to treat .uvue as .vue during parsing
  if (config.languageOptions?.parser && typeof config.languageOptions.parser.parseForESLint === 'function') {
    const originalParser = config.languageOptions.parser
    config.languageOptions.parser = {
      ...originalParser,
      parseForESLint(code, options) {
        const originalFilePath = options.filePath
        if (options.filePath && options.filePath.endsWith('.uvue')) {
          options.filePath = options.filePath.replace(/\.uvue$/, '.vue')
        }
        try {
          const result = originalParser.parseForESLint(code, options)
          if (result.services?.defineTemplateBodyVisitor) {
            const originalDefine = result.services.defineTemplateBodyVisitor
            result.services.defineTemplateBodyVisitor = function (templateBodyVisitor, scriptVisitor, options) {
              const wrappedScriptVisitor = originalDefine.call(this, templateBodyVisitor, scriptVisitor, options)
              if (wrappedScriptVisitor['Program:exit']) {
                const originalExit = wrappedScriptVisitor['Program:exit']
                wrappedScriptVisitor['Program:exit'] = function (node) {
                  return originalExit.call(this, node)
                }
              }
              return wrappedScriptVisitor
            }
          }
          return result
        }
        finally {
          options.filePath = originalFilePath
        }
      },
    }
  }

  // Wrap all vue rules to treat .uvue files as .vue files
  if (config.plugins?.vue) {
    const vuePlugin = config.plugins.vue
    if (vuePlugin.rules) {
      for (const ruleName of Object.keys(vuePlugin.rules)) {
        const originalRule = vuePlugin.rules[ruleName]
        if (originalRule && typeof originalRule.create === 'function') {
          vuePlugin.rules[ruleName] = {
            ...originalRule,
            create(context) {
              const wrappedContext = Object.create(context, {
                filename: {
                  get() {
                    const val = context.filename
                    if (val && val.endsWith('.uvue')) {
                      return val.replace(/\.uvue$/, '.vue')
                    }
                    return val
                  },
                  configurable: true,
                },
                getFilename: {
                  value() {
                    const val = context.getFilename()
                    if (val && val.endsWith('.uvue')) {
                      return val.replace(/\.uvue$/, '.vue')
                    }
                    return val
                  },
                  configurable: true,
                },
              })
              return originalRule.create(wrappedContext)
            },
          }
        }
      }
    }
  }
}

configs.push({
  files: ['**/*.vue', '**/*.uvue', '**/*.uts', '**/*.ts', '**/*.js'],
  rules: {
    'eqeqeq': 'off',
    'vue/eqeqeq': 'off',
    'style/comma-dangle': ['error', 'never'],
    'vue/comma-dangle': ['error', 'never'],
    'vue/no-undef-components': [
      'warn',
      {
        ignorePatterns: [
          // 基础内容
          'text',
          'rich-text',
          'progress',
          'icon',

          // 视图容器
          'view',
          'scroll-view',
          'swiper',
          'swiper-item',
          'match-media',
          'movable-area',
          'movable-view',
          'cover-view',
          'cover-image',

          // uni-app X 原生高性能列表与流式组件
          'list-view',
          'list-item',
          'sticky-header',
          'sticky-section',
          'waterflow',
          'flow-item',
          'nested-scroll-header',
          'nested-scroll-body',
          'refresh-box',
          'refresh-header',
          'custom-refresher-box',

          // 表单组件
          'button',
          'checkbox',
          'checkbox-group',
          'editor',
          'form',
          'input',
          'label',
          'picker',
          'picker-view',
          'picker-view-column',
          'radio',
          'radio-group',
          'slider',
          'switch',
          'textarea',

          // 导航与页面元信息
          'navigator',
          'page-meta',
          'navigation-bar',

          // 媒体组件
          'audio',
          'camera',
          'image',
          'video',
          'live-player',
          'live-pusher',

          // 地图、画布与网页
          'map',
          'canvas',
          'web-view',

          // 广告与开放能力
          'ad',
          'ad-custom',
          'open-data',

          // Vue 内置虚拟与容器组件
          'slot',
          'template',
          'component',
          'transition',
          'transition-group',
          'keep-alive',
          'teleport',

          // easycom UI 库与通用组件通配符
          'up-*',
          'u-*',
          'z-paging-x',
          'z-paging',
          'lime-*',
          'iRainna-*',
          'NavBar',
          'nav-bar'
        ]
      }
    ],
  },
  languageOptions: {
    globals: {
      // uni-app X 原生支持的全局变量与宏
      uni: 'readonly',
      plus: 'readonly',
      UTSJSONObject: 'readonly',
      defineProps: 'readonly',
      defineEmits: 'readonly',
      defineExpose: 'readonly',
      defineOptions: 'readonly',
      definePage: 'readonly',
      defineSlots: 'readonly',
      defineModel: 'readonly',
      withDefaults: 'readonly',

      // uni-app 页面生命周期（原生支持全局调用）
      onInit: 'readonly',
      onLoad: 'readonly',
      onShow: 'readonly',
      onReady: 'readonly',
      onHide: 'readonly',
      onUnload: 'readonly',
      onPullDownRefresh: 'readonly',
      onReachBottom: 'readonly',
      onBackPress: 'readonly',
      OnBackPressOptions: 'readonly',
      onPageScroll: 'readonly',
      onResize: 'readonly',
      onTabItemTap: 'readonly',
      onNavigationBarButtonTap: 'readonly',
      onNavigationBarSearchInputChanged: 'readonly',
      onNavigationBarSearchInputConfirmed: 'readonly',
      onNavigationBarSearchInputClicked: 'readonly',
      onShareAppMessage: 'readonly',
      onShareTimeline: 'readonly',
      onAddToFavorites: 'readonly',
      getCurrentPages: 'readonly',
      getApp: 'readonly',
    },
  },
})

export default configs
