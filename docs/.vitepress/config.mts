import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "unibestX",
  description: "最好的 uni-app X 开发框架",
  head: [
    ['link', { rel: 'icon', href: 'https://uniappx.oss-cn-beijing.aliyuncs.com/logo.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://uniappx.oss-cn-beijing.aliyuncs.com/logo.png',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/getting-started' },
    ],

    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '快速上手', link: '/guide/getting-started' },
          { text: '核心功能', link: '/guide/features' },
          { text: '技术架构', link: '/guide/architecture' },
          { text: 'UTS 开发必读', link: '/guide/uts-tips' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cq112233/unibestX' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 HTwoO'
    }
  }
})
