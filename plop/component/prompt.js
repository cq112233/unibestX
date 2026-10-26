import fs from 'node:fs';
import path from 'node:path';

/**
 * 获取 src/sub 下的现有业务模块列表
 */
function getSubModules() {
  const subDir = path.resolve(process.cwd(), 'src/sub');
  if (!fs.existsSync(subDir)) {
    return [];
  }
  return fs.readdirSync(subDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'))
    .map(dirent => dirent.name);
}

/**
 * 扫描获取项目中所有已存在的页面目录（包含主包与分包子页面）
 */
function getExistingPageDirs() {
  const pageDirs = [];

  // 1. 扫描 src/pages/ (主包页面)
  const pagesRoot = path.resolve(process.cwd(), 'src/pages');
  if (fs.existsSync(pagesRoot)) {
    for (const ent of fs.readdirSync(pagesRoot, { withFileTypes: true })) {
      if (ent.isDirectory() && !ent.name.startsWith('.')) {
        const dirPath = path.join(pagesRoot, ent.name);
        try {
          if (fs.readdirSync(dirPath).some(f => f.endsWith('.uvue'))) {
            pageDirs.push(`src/pages/${ent.name}`);
          }
        }
        catch {}
      }
    }
  }

  // 2. 扫描 src/sub/ (分包业务模块与页面)
  const subRoot = path.resolve(process.cwd(), 'src/sub');
  if (fs.existsSync(subRoot)) {
    for (const mod of fs.readdirSync(subRoot, { withFileTypes: true })) {
      if (mod.isDirectory() && !mod.name.startsWith('.')) {
        const modPath = path.join(subRoot, mod.name);
        try {
          const subEntries = fs.readdirSync(modPath, { withFileTypes: true });
          let foundChild = false;
          // 检查模块子目录 (如 src/sub/auth/hh/hh.uvue)
          for (const subEnt of subEntries) {
            if (subEnt.isDirectory() && subEnt.name !== 'components' && !subEnt.name.startsWith('.')) {
              const childPath = path.join(modPath, subEnt.name);
              try {
                if (fs.readdirSync(childPath).some(f => f.endsWith('.uvue'))) {
                  pageDirs.push(`src/sub/${mod.name}/${subEnt.name}`);
                  foundChild = true;
                }
              }
              catch {}
            }
          }
          // 模块平铺页面 (如 src/sub/privacy/privacy.uvue)
          if (!foundChild) {
            const directFiles = subEntries.filter(e => e.isFile()).map(e => e.name);
            if (directFiles.some(f => f.endsWith('.uvue'))) {
              pageDirs.push(`src/sub/${mod.name}`);
            }
          }
        }
        catch {}
      }
    }
  }

  return pageDirs;
}

/**
 * 组件生成器配置
 */
export default {
  description: '创建新组件（严格符合 unibestX 分册 4.5/5 规范：单根节点、纯展示、Props/Emits 明确）',
  prompts: [
    {
      type: 'list',
      name: 'scope',
      message: '请选择组件类型与存放层级：',
      choices: [
        { name: '页面私有组件 (src/.../<page>/components/) —— 仅该页面专属私有（推荐）', value: 'pagePrivate' },
        { name: '业务模块共享组件 (src/sub/<module>/components/) —— 同一业务模块内多页面共享', value: 'moduleShared' },
        { name: '跨页面全局公共组件 (src/components/<ComponentName>/) —— 跨 3 个以上模块共用', value: 'global' }
      ],
      default: 'pagePrivate'
    },
    // 页面私有组件：直接列出已存在的页面列表供选择
    {
      type: 'list',
      name: 'pageChoice',
      message: '请选择归属的目标页面：',
      when: answers => answers.scope === 'pagePrivate',
      choices: () => {
        const pages = getExistingPageDirs();
        const choices = pages.map(p => ({ name: `目标页面: ${p}/components/`, value: p }));
        choices.push({ name: '[+ 手动输入其他页面路径]', value: '__CUSTOM__' });
        return choices;
      }
    },
    {
      type: 'input',
      name: 'customPageDir',
      message: '请输入目标页面路径（如 src/sub/auth/hh 或 src/pages/index）：',
      when: answers => answers.scope === 'pagePrivate' && answers.pageChoice === '__CUSTOM__',
      validate: (value) => {
        if (!value || !value.trim()) {
          return '目标页面路径不能为空！';
        }
        return true;
      }
    },
    // 业务模块共享组件：列出模块供选择
    {
      type: 'list',
      name: 'moduleChoice',
      message: '请选择所属业务模块：',
      when: answers => answers.scope === 'moduleShared',
      choices: () => {
        const modules = getSubModules();
        const choices = modules.map(m => ({ name: `已有模块: src/sub/${m}/components/`, value: m }));
        choices.push({ name: '[+ 手动输入新业务模块名]', value: '__NEW__' });
        return choices;
      }
    },
    {
      type: 'input',
      name: 'customModule',
      message: '请输入新业务模块英文名（如 order、user、goods）：',
      when: answers => answers.scope === 'moduleShared' && answers.moduleChoice === '__NEW__',
      validate: (value) => {
        if (!value || !value.trim()) {
          return '业务模块名不能为空！';
        }
        if (!/^[a-z][\w-]*$/i.test(value.trim())) {
          return '业务模块名必须是英文字母开头的英文标识符（不可使用中文）！';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入组件英文名称（PascalCase，如 OrderCard、UserBadge、HhCard）：',
      validate: (value) => {
        if (!value || !value.trim()) {
          return '组件名称不能为空！';
        }
        if (!/^[a-z][a-z0-9]*$/i.test(value.trim())) {
          return '组件名称必须是英文字母开头的标识符（如 OrderCard，不可使用中文）！';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'description',
      message: '请输入组件中文描述与用途：',
      default: answers => `${answers.name} 展示组件`
    }
  ],
  actions: (data) => {
    let targetPath = '';

    if (data.scope === 'pagePrivate') {
      const pageDir = data.pageChoice === '__CUSTOM__' ? data.customPageDir.trim() : data.pageChoice;
      let cleanDir = pageDir.replace(/\/+$/, '');
      if (!cleanDir.startsWith('src/')) {
        cleanDir = `src/sub/${cleanDir}`;
      }
      data.finalPageDir = cleanDir;
      targetPath = `${cleanDir}/components/{{ pascalCase name }}.uvue`;
    }
    else if (data.scope === 'moduleShared') {
      const moduleName = data.moduleChoice === '__NEW__' ? data.customModule.trim() : data.moduleChoice;
      data.targetModule = moduleName;
      targetPath = 'src/sub/{{ camelCase targetModule }}/components/{{ pascalCase name }}.uvue';
    }
    else {
      targetPath = 'src/components/{{ pascalCase name }}/{{ pascalCase name }}.uvue';
    }

    return [
      {
        type: 'add',
        path: targetPath,
        templateFile: 'plop/component/component.uvue.hbs'
      }
    ];
  }
};
