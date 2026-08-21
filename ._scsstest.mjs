import * as sass from 'sass';
import fs from 'node:fs';
import path from 'node:path';

function styleOf(comp) {
  const src = fs.readFileSync(`uni_modules/uview-ultra/components/${comp}/${comp}.uvue`, 'utf8');
  const m = src.match(/<style[^>]*>([\s\S]*?)<\/style>/);
  return m[1];
}
let uniScss = fs.readFileSync('uni.scss', 'utf8');
uniScss = uniScss.replaceAll('@/uni_modules', path.resolve('uni_modules'));

for (const comp of ['up-checkbox', 'up-number-box', 'up-rate', 'up-subsection', 'up-switch', 'up-tag', 'up-picker', 'up-alert', 'up-badge']) {
  const style = styleOf(comp);
  const url = new URL(`file://${path.resolve(`uni_modules/uview-ultra/components/${comp}/${comp}.uvue`)}`);
  try {
    const r = sass.compileString(uniScss + '\n' + style, {
      url,
      loadPaths: [path.resolve('uni_modules/uview-ultra')]
    });
    console.log(comp.padEnd(14), 'OK', String(r.css.length).padStart(5));
  } catch (e) {
    console.log(comp.padEnd(14), 'FAIL:', e.message.split('\n').slice(0,4).join(' | '));
  }
}
