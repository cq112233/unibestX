#!/usr/bin/env node
// 环境切换脚本：pnpm env:test / pnpm env:prod
// 环境文件四件套：
//   .env               公用（所有环境都加载）
//   .env.development   开发（HBuilderX 运行 / pnpm dev:* 自动加载）
//   .env.test          测试（打 test 包）
//   .env.production    生产（打正式包，默认）
//
// HBuilderX CLI 打包（cli publish）固定使用 production 模式，
// 因此打测试包时把「公用 + 测试」合并写入 .env.production.local
// （Vite production 模式会优先加载它，覆盖 .env.production），
// 打正式包时删除该文件即恢复生产环境，全程不影响 git。
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const mode = process.argv[2]
if (mode !== 'test' && mode !== 'prod') {
  console.error('用法: pnpm env:test  或  pnpm env:prod')
  process.exit(1)
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const commonFile = path.join(root, '.env')
const testFile = path.join(root, '.env.test')
const prodLocalFile = path.join(root, '.env.production.local')

const readIfExists = (file) => (fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '')

if (mode === 'test') {
  if (!fs.existsSync(testFile)) {
    console.error(`未找到配置文件: ${testFile}`)
    process.exit(1)
  }
  // 公用 + 测试 合并生成 .env.production.local（自包含，不依赖 Vite 额外加载 .env）
  const content = [
    '# ===== 由 scripts/switch-env.mjs 自动生成（pnpm env:test），勿提交、勿手改 =====',
    readIfExists(commonFile).trim(),
    readIfExists(testFile).trim(),
  ]
    .filter(Boolean)
    .join('\n\n') + '\n'
  fs.writeFileSync(prodLocalFile, content)
  console.log('✅ 已切换为测试环境，已生成 .env.production.local（不影响 git）')
}
else {
  if (fs.existsSync(prodLocalFile)) {
    fs.rmSync(prodLocalFile)
    console.log('✅ 已切换为生产环境，已删除 .env.production.local')
  }
  else {
    console.log('✅ 当前已是生产环境（不存在 .env.production.local）')
  }
}
console.log('下一步：执行 pnpm build:h5 打包 H5（服务器 / CI 可用）')
