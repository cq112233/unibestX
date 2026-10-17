import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createManifestWatcher } from '@uni-helper/vite-plugin-uni-manifest';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const watcher = await createManifestWatcher({
  cwd: projectRoot,
  outDir: projectRoot,
  indent: '\t',
  eol: '\n',
  insertFinalNewline: true
});

await watcher.unwatch();
console.log('✅ manifest.json 已成功从 manifest.config.ts 编译生成！');
