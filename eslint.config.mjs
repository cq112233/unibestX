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
    'vue/html-self-closing': 'off',
    'no-useless-return': 'off',
    'no-console': 'off',
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
}

export default configs
