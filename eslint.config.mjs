import uniHelper from '@uni-helper/eslint-config'

const composer = uniHelper({
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
    'vue/v-slot-style': 'off',
    'style/vue/v-slot-style': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/html-self-closing': 'off',
    'no-useless-return': 'off',
    'no-console': 'off',
    'eqeqeq': 'off',
    'no-unused-vars': 'off',
    'vue/no-unused-refs': 'off',
    'unused-imports/no-unused-vars': 'off',
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
  rules: {
    'eqeqeq': 'off',
    'vue/eqeqeq': 'off',
  },
})

export default configs
