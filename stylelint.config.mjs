/** @type {import('stylelint').Config} */
export default {
  ignoreFiles: [
    'uni_modules/**',
    '**/uni_modules/**',
    'unpackage/**',
    'dist/**',
    'node_modules/**'
  ],
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss'
  ],
  plugins: ['stylelint-order'],
  overrides: [
    {
      files: ['**/*.vue', '**/*.uvue', '*.vue', '*.uvue'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    // 允许 uni-app 特有尺寸单位 rpx 与 upx
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx', 'upx']
      }
    ],
    // 允许 uni-app 原生标签与内置组件选择器
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: [
          'page',
          'view',
          'text',
          'scroll-view',
          'list-view',
          'list-item',
          'swiper',
          'swiper-item',
          'image',
          'navigator',
          'button',
          'input',
          'textarea',
          'checkbox',
          'checkbox-group',
          'radio',
          'radio-group',
          'switch',
          'slider',
          'picker',
          'picker-view',
          'picker-view-column',
          'cover-view',
          'cover-image',
          'rich-text',
          'progress',
          'icon',
          'canvas',
          'map',
          'web-view',
          'sticky-header',
          'sticky-section',
          'waterflow',
          'flow-item',
          'nested-scroll-header',
          'nested-scroll-body',
          'refresh-box',
          'refresh-header',
          'custom-refresher-box',
          'uni-tabbar',
          'uni-page',
          'uni-page-head',
          'uni-page-wrapper',
          'uni-page-body'
        ]
      }
    ],
    // 允许 Vue 与 uni-app 伪类
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'global', 'slotted']
      }
    ],
    // 允许 SCSS / Tailwind CSS v4 / 原子化 at-rules
    'at-rule-no-unknown': null,
    'at-rule-empty-line-before': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'theme',
          'utility',
          'variant',
          'custom-variant',
          'layer',
          'reference',
          'screen',
          'config',
          'source'
        ]
      }
    ],
    // 保持十六进制颜色标准（uni-app X 推荐 6 位十六进制，不强制缩写）
    'color-hex-length': null,
    // 严禁使用英文单词命名颜色，统一使用标准十六进制色值
    'color-named': [
      'never',
      {
        severity: 'warning'
      }
    ],
    // 允许传统 rgba 声明（uni-app 原生渲染兼容更好）
    'color-function-notation': null,
    'color-function-alias-notation': null,
    'alpha-value-notation': 'number',
    // uni-app 原生不支持 inset 等简写，必须允许分别声明 top/bottom/left/right
    'declaration-block-no-redundant-longhand-properties': null,
    // 空样式块不报错（很多组件预留空 style 标签）
    'no-empty-source': null,
    // 允许行内 style 与嵌套声明（防止 uvue 模板行内 style 误报）
    'no-invalid-position-declaration': null,
    // 注释规则放宽
    'comment-empty-line-before': null,
    'scss/double-slash-comment-whitespace-inside': null,
    // 允许 0 带单位
    'length-zero-no-unit': null,
    // 允许 @import 携带扩展名（uni-app 规范）
    'scss/load-partial-extension': null,
    // 字体族与 CSS 变量放宽大小写
    'value-keyword-case': [
      'lower',
      {
        ignoreProperties: ['font-family', '/^--/']
      }
    ],
    // SCSS 命名约定与类名放宽
    'scss/dollar-variable-pattern': null,
    'selector-class-pattern': null,
    // 允许规则块之间紧凑排列，不强制空行
    'rule-empty-line-before': null,
    // 允许显式书写4值简写（例如 0 16px 8px 16px），避免误触
    'shorthand-property-no-redundant-values': null,
    // CSS 属性排序规则（基于 stylelint-order，设置为 warning 黄色警告）
    'order/properties-order': [
      [
        // 1. 定位属性
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',
        // 2. 布局模型 (Flexbox / Display)
        'display',
        'flex-direction',
        'flex-wrap',
        'justify-content',
        'align-items',
        'align-content',
        'flex',
        'flex-grow',
        'flex-shrink',
        'flex-basis',
        'order',
        // 3. 盒模型尺寸
        'box-sizing',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        // 4. 外边距 & 内边距
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        // 5. 边框 & 圆角
        'border',
        'border-width',
        'border-style',
        'border-color',
        'border-top',
        'border-right',
        'border-bottom',
        'border-left',
        'border-radius',
        // 6. 背景
        'background',
        'background-color',
        'background-image',
        'background-repeat',
        'background-position',
        'background-size',
        // 7. 文本与字体
        'color',
        'font',
        'font-family',
        'font-size',
        'font-weight',
        'line-height',
        'text-align',
        'text-decoration',
        'text-overflow',
        'white-space',
        'word-break',
        // 8. 其他视觉 & 变换 & 过渡
        'opacity',
        'overflow',
        'overflow-x',
        'overflow-y',
        'transform',
        'transition',
        'animation'
      ],
      {
        severity: 'warning'
      }
    ]
  }
};
