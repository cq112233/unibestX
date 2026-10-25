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
          for (const subEnt of subEntries) {
            if (subEnt.isDirectory() && subEnt.name !== 'components' && subEnt.name !== 'hooks' && !subEnt.name.startsWith('.')) {
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
 * Hook 生成器配置（严格遵循词根语义化：带 Query / Mutation 规范）
 */
export default {
  description: '创建新 Hook（严格符合词根语义化规范：Query/Mutation 与普通 Hook 区分）',
  prompts: [
    {
      type: 'list',
      name: 'hookType',
      message: '请选择 Hook 类型（严格遵循词根语义化）：',
      choices: [
        { name: 'API 查询 Hook (use<Entity>Query.uts) —— 封装 useQuery 数据拉取、缓存与重拉（推荐）', value: 'query' },
        { name: 'API 变更 Hook (use<Action><Entity>Mutation.uts) —— 封装 useMutation 写入与缓存失效', value: 'mutation' },
        { name: '普通前端 Hook (use<Name>.uts) —— 纯 UI / 表单 / 交互逻辑，不调网络接口', value: 'normal' }
      ],
      default: 'query'
    },
    {
      type: 'list',
      name: 'scope',
      message: '请选择 Hook 归属层级：',
      choices: [
        { name: '业务模块共享 (src/sub/<module>/hooks/) —— 模块内多个页面共用（推荐）', value: 'moduleShared' },
        { name: '页面级私有 (指定页面目录下的 hooks/ 目录) —— 仅单个页面专属私有', value: 'pagePrivate' },
        { name: '全局通用 (src/hooks/) —— 跨业务 3 个以上模块共用', value: 'global' }
      ],
      default: 'moduleShared'
    },
    {
      type: 'list',
      name: 'moduleChoice',
      message: '请选择所属业务模块：',
      when: answers => answers.scope === 'moduleShared',
      choices: () => {
        const modules = getSubModules();
        const choices = modules.map(m => ({ name: `已有模块: src/sub/${m}/hooks/`, value: m }));
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
      type: 'list',
      name: 'pageChoice',
      message: '请选择归属的目标页面：',
      when: answers => answers.scope === 'pagePrivate',
      choices: () => {
        const pages = getExistingPageDirs();
        const choices = pages.map(p => ({ name: `目标页面: ${p}/hooks/`, value: p }));
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
    {
      type: 'input',
      name: 'rawName',
      message: '请输入业务实体或动作名（支持纯名称如 orderList，自动按词根补全规范名）：',
      validate: (value) => {
        if (!value || !value.trim()) {
          return '名称不能为空！';
        }
        if (!/^[a-z][\w-]*$/i.test(value.trim())) {
          return '必须是英文字母开头的英文标识符！';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'description',
      message: '请输入 Hook 中文描述与用途：',
      default: answers => `${answers.rawName} 逻辑处理`
    }
  ],
  actions: (data) => {
    let cleanName = data.rawName.trim();

    // 智能去除用户手输的冗余 use 前缀
    if (cleanName.startsWith('use') && cleanName.length > 3 && /^[A-Z]/.test(cleanName.slice(3))) {
      cleanName = cleanName.slice(3);
    }

    let hookName = '';
    let entityName = '';

    if (data.hookType === 'query') {
      // 智能去除冗余 Query 后缀后统一规整
      if (cleanName.endsWith('Query') && cleanName.length > 5) {
        cleanName = cleanName.slice(0, -5);
      }
      entityName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
      hookName = `use${entityName}Query`;
    }
    else if (data.hookType === 'mutation') {
      // 智能去除冗余 Mutation 后缀后统一规整
      if (cleanName.endsWith('Mutation') && cleanName.length > 8) {
        cleanName = cleanName.slice(0, -8);
      }
      entityName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
      hookName = `use${entityName}Mutation`;
    }
    else {
      entityName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
      hookName = `use${entityName}`;
    }

    data.hookName = hookName;
    data.entityName = entityName;

    // 计算存放路径
    let targetDir = '';
    if (data.scope === 'moduleShared') {
      const moduleName = data.moduleChoice === '__NEW__' ? data.customModule.trim() : data.moduleChoice;
      targetDir = `src/sub/${moduleName}/hooks`;
    }
    else if (data.scope === 'pagePrivate') {
      const pageDir = data.pageChoice === '__CUSTOM__' ? data.customPageDir.trim() : data.pageChoice;
      let cleanDir = pageDir.replace(/\/+$/, '');
      if (!cleanDir.startsWith('src/')) {
        cleanDir = `src/sub/${cleanDir}`;
      }
      targetDir = `${cleanDir}/hooks`;
    }
    else {
      targetDir = 'src/hooks';
    }

    const templateMap = {
      query: 'plop/hook/queryHook.uts.hbs',
      mutation: 'plop/hook/mutationHook.uts.hbs',
      normal: 'plop/hook/normalHook.uts.hbs'
    };

    return [
      {
        type: 'add',
        path: `${targetDir}/${hookName}.uts`,
        templateFile: templateMap[data.hookType]
      }
    ];
  }
};
