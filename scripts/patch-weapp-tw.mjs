import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

/* eslint-disable no-template-curly-in-string */

const distDir = path.resolve(process.cwd(), 'node_modules/weapp-tailwindcss/dist');

if (fs.existsSync(distDir)) {
  const allFiles = fs.readdirSync(distDir);
  const viteFiles = allFiles.filter(f => f.startsWith('vite-') && (f.endsWith('.js') || f.endsWith('.cjs')));

  const targetOld = [
    'const styleVarName = "_style_wt";',
    '\treturn injectStyleOption(`${code.slice(0, exportMatch.index)}const ${styleVarName} = ${JSON.stringify(newStyle)};\\n${code.slice(exportMatch.index)}`, styleVarName);'
  ].join('\n');

  const targetNew = [
    'const styleVarName = "_style_wt";',
    '\tif (code.includes(`const ${styleVarName} =`)) return code;',
    '\tconst statementStart = code.lastIndexOf("\\n", exportMatch.index);',
    '\tconst insertPos = statementStart === -1 ? 0 : statementStart + 1;',
    '\treturn injectStyleOption(`${code.slice(0, insertPos)}const ${styleVarName} = ${JSON.stringify(newStyle)};\\n${code.slice(insertPos)}`, styleVarName);'
  ].join('\n');

  const mergeTargetOld = [
    '\t\tfor (const index of indexes) {',
    '\t\t\tif (JSON.stringify(merged[index][className]) === JSON.stringify(generatedStyle)) continue;',
    '\t\t\tmerged[index][className] = generatedStyle;',
    '\t\t\tchanged = true;',
    '\t\t}'
  ].join('\n');

  const mergeTargetNew = [
    '\t\tfor (const index of indexes) {',
    '\t\t\tconst existing = merged[index][className];',
    '\t\t\tif (existing && typeof existing === "object" && existing[""] && Object.keys(existing[""]).length > 0) continue;',
    '\t\t\tif (JSON.stringify(merged[index][className]) === JSON.stringify(generatedStyle)) continue;',
    '\t\t\tmerged[index][className] = generatedStyle;',
    '\t\t\tchanged = true;',
    '\t\t}'
  ].join('\n');

  for (const file of viteFiles) {
    const absPath = path.resolve(distDir, file);
    let content = fs.readFileSync(absPath, 'utf-8');
    let modified = false;

    if (content.includes(targetOld)) {
      content = content.replace(targetOld, targetNew);
      modified = true;
    }
    if (content.includes(mergeTargetOld)) {
      content = content.replace(mergeTargetOld, mergeTargetNew);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(absPath, content, 'utf-8');
      console.log(`[patch] Successfully patched ${file} for Harmony ArkTS compilation and style preservation`);
    }
  }
}
