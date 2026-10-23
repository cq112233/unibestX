import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'unibestX',
  description: '最好的 uni-app X 开发框架',
  base: '/unibestX/docs/',
  head: [
    ['link', { rel: 'icon', href: 'https://uniappx.oss-cn-beijing.aliyuncs.com/logo.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://uniappx.oss-cn-beijing.aliyuncs.com/logo.png',
    siteTitle: 'unibestX',

    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/guide/introduction' },
      { text: '在线演示', link: 'https://cq112233.github.io/unibestX/' },
      { text: 'GitHub', link: 'https://github.com/cq112233/unibestX' }
    ],

    sidebar: [
      {
        text: '基础·必看',
        items: [
          { text: '介绍', link: '/guide/introduction' },
          { text: '快速开始', link: '/guide/getting-started' },
          { text: 'tabbar 专题', link: '/guide/tabbar' },
          { text: '路由篇', link: '/guide/route' },
          { text: 'uni 插件', link: '/guide/uni-plugin' },
          { text: '样式篇', link: '/guide/style' },
          { text: '图标篇', link: '/guide/icon' },
          { text: 'SVG篇', link: '/guide/svg' },
          { text: 'UI库选型篇', link: '/guide/ui-library' },
          { text: 'UI库替换篇', link: '/guide/ui-library-replacement' },
          { text: '请求篇', link: '/guide/request' },
          { text: '状态篇', link: '/guide/state' },
          { text: '多语言篇', link: '/guide/i18n' },
          { text: '运行发布', link: '/guide/release' },
          { text: 'App 专题', link: '/guide/app' },
          { text: 'hbx 模板', link: '/guide/hbuilderx' },
          { text: '常见问题', link: '/guide/faq' },
          { text: '常见问题2', link: '/guide/faq-2' },
          { text: '自动生成接口', link: '/guide/api-generator' },
          { text: 'CLI 开发指南', link: '/guide/cli' }
        ]
      }
    ],

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cq112233/unibestX' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 HTwoO'
    }
  }
});
