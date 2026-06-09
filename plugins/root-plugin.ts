import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

// 自动给所有页面套上 App.ku.uvue
export default function autoRootPlugin() {
  return {
    name: 'auto-root',
    transform(code: string, id: string) {
      const normalizedId = id.replace(/\\/g, '/')
      // 只处理 src/pages 和 src/sub 下的非组件 uvue 页面，排除 App.uvue、App.ku.uvue 以及组件目录
      const isPage = normalizedId.includes('src/pages/') || normalizedId.includes('src/sub/')
      if (!isPage || normalizedId.includes('/components/') || normalizedId.includes('App.ku.uvue')) {
        return null
      }

      // 自动检测并生成 App.ku.uvue 文件于项目根目录
      const rootPath = process.cwd()
      const targetFilePath = path.join(rootPath, 'App.ku.uvue')
      if (!fs.existsSync(targetFilePath)) {
        const defaultContent = `<template>\n\t<view class="flex-1">\n\t\t<slot></slot>\n\t</view>\n</template>\n\n<script setup lang="uts">\n</script>\n\n<style>\n</style>\n`
        try {
          fs.writeFileSync(targetFilePath, defaultContent, 'utf-8')
          console.log('自动生成了缺少的 App.ku.uvue 文件')
        } catch (e) {
          console.error('自动生成 App.ku.uvue 失败:', e)
        }
      }

      let newCode = code

      // 1. 将 template 内的内容用 <AppKu> 包裹
      newCode = newCode.replace(/<template>([\s\S]*?)<\/template>/, (match, p1) => {
        return `<template>\n  <AppKu>\n${p1}\n  </AppKu>\n</template>`
      })

      // 2. 在 script setup 内引入 AppKu 组件
      newCode = newCode.replace(/<script setup([\s\S]*?)>/, (match) => {
        return `${match}\nimport AppKu from '@/App.ku.uvue'`
      })

      return {
        code: newCode,
        map: { mappings: '' }
      }
    }
  }
}