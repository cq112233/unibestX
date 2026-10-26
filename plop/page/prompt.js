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
 * 页面生成器配置
 */
export default {
  description: '创建新页面（严格符合 unibestX 分册 4/5 规范与 definePage 约定）',
  prompts: [
    {
      type: 'list',
      name: 'location',
      message: '请选择页面类型与存放目录：',
      choices: [
        { name: '业务分包多页面模块 (src/sub/<module>/<name>/<name>.uvue) —— 符合分册 5 规范，页面独立目录', value: 'subModule' },
        { name: '主包页面 (src/pages/<name>/<name>.uvue) —— TabBar 导航或核心页', value: 'mainPage' }
      ],
      default: 'subModule'
    },
    {
      type: 'list',
      name: 'moduleChoice',
      message: '请选择所属业务模块：',
      when: answers => answers.location === 'subModule',
      choices: () => {
        const modules = getSubModules();
        const choices = modules.map(m => ({ name: `已有模块: src/sub/${m}/`, value: m }));
        choices.push({ name: '[+ 创建新业务模块]', value: '__NEW__' });
        return choices;
      }
    },
    {
      type: 'input',
      name: 'customModule',
      message: '请输入新业务模块英文名（英文标识符，如 order、user、goods）：',
      when: answers => answers.location === 'subModule' && answers.moduleChoice === '__NEW__',
      validate: (value) => {
        if (!value || !value.trim()) {
          return '模块名不能为空！';
        }
        if (!/^[a-z][\w-]*$/i.test(value.trim())) {
          return '模块名必须是英文字母开头的英文标识符（不可使用中文或特殊字符）！';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入页面英文名（英文 camelCase/kebab-case，如 orderList、detail、login）：',
      validate: (value) => {
        if (!value || !value.trim()) {
          return '页面名称不能为空！';
        }
        if (!/^[a-z][\w-]*$/i.test(value.trim())) {
          return '页面名称必须是英文字母开头的英文标识符（uni-app 编译器不支持中文路径，中文请在下一步标题中输入）！';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'title',
      message: '请输入页面中文标题（用于导航栏展示与 definePage 标题）：',
      default: answers => answers.name
    },
    {
      type: 'input',
      name: 'description',
      message: '请输入页面功能简介：',
      default: '功能页面'
    },
    {
      type: 'confirm',
      name: 'needApi',
      message: '是否同时创建对应的业务模块接口层文件？',
      default: true
    }
  ],
  actions: (data) => {
    const actions = [];
    let pagePath = '';

    // 解析最终业务模块名
    if (data.location === 'subModule') {
      data.targetModule = data.moduleChoice === '__NEW__' ? data.customModule.trim() : data.moduleChoice;
      // 符合分册 5 规范：页面独立子目录，预留私有组件 components/ 空间
      pagePath = 'src/sub/{{ camelCase targetModule }}/{{ camelCase name }}/{{ camelCase name }}.uvue';
    }
    else {
      data.targetModule = data.name;
      pagePath = 'src/pages/{{ camelCase name }}/{{ camelCase name }}.uvue';
    }

    // 确保 module 变量有有效值供模板使用
    data.module = data.targetModule;

    // 生成页面文件
    actions.push({
      type: 'add',
      path: pagePath,
      templateFile: 'plop/page/page.uvue.hbs'
    });

    // 若需要接口文件，按规范生成到 src/api/<module>/<name>.uts
    if (data.needApi) {
      actions.push({
        type: 'add',
        path: 'src/api/{{ camelCase targetModule }}/{{ camelCase name }}.uts',
        templateFile: 'plop/page/api.uts.hbs',
        abortOnFail: false
      });
    }

    return actions;
  }
};
